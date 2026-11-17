((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,A3,Z,A4,A_,R,A5,A6,A7,A8,A9,A0,N,Aa,Ab,Ac,Ad,U,S,Ae,O,Af,V,W,E,I,G,K,Ag,Ah,Ai,P,Aj,Q,Ak,C={
bCg(d){return C.i8F(d)},
i8F(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bCg=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.rg(B.nn(""),d,A.i2,null,null).dg(0,A.a0s),$async$bCg)
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
return B.i($async$bCg,v)},
iku(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.Sk[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cS(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ag(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.fc(D.Sk,new C.fLg())
if(w==null)w=A.d.gH(D.Sk)
s=B.T(x.N,x.B)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.I)(r),++u){l=r[u].a
k=l[0]
l=$.qG().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.I)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gH(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.ali(w.a,w.b,m,w,s,!1)},
iec(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.N(D.SJ,new C.fzX(),x.bd).aN(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
isg(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cn(b2,"{")
v=A.a.p8(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.V.aP(0,A.a.az(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aR(a5)
r=0
for(a6=x.j,a7=J.aT(a6.a(J.t(u,"parts"))),a8=x.i;a7.C();){q=a7.gR(a7)
p=B.w(J.t(q,"kind"))
o=B.w(J.t(q,"id"))
if(!$.qG().am(0,p)||J.eK(s,o)||J.ad(t)>=8)continue
J.c5(s,o)
n=B.T(a5,a8)
for(a9=0;a9<4;++a9){m=D.dAi[a9]
l=J.t(q,m)
if(typeof l=="number")J.aK(n,m,l)}k=A.j.D(typeof J.t(q,"x")=="number"?B.dE(J.t(q,"x")):0.2+A.j.F(r,3)*0.3,0.16,0.84)
j=A.j.D(typeof J.t(q,"y")=="number"?B.dE(J.t(q,"y")):0.25+A.j.ar(r,3)*0.3,0.1,0.9)
J.c5(t,new B.dY([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aT(a6.a(J.t(u,"wires")));a5.C();){h=a5.gR(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.w(J.t(g,0))
e=B.w(J.t(g,2))
d=A.o.D(A.j.M(B.dE(J.t(g,1))),0,1)
a0=A.o.D(A.j.M(B.dE(J.t(g,3))),0,1)
if(J.eK(s,f)&&J.eK(s,e)&&!J.z(f,e))J.c5(i,new B.ce([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.L.a(J.t(u,"steps"))
a0=J.aT(a0==null?A.cs:a0)
while(a0.C()){a2=a0.gR(a0)
J.c5(a1,B.w(a2))}a3=a1
a0=J.t(u,"title")
a0=B.w(a0==null?"My invention":a0)
a1=J.t(u,"explain")
a4=new C.mY(a0,B.w(a1==null?"":a1),t,i,A.Z)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.t(u,"honest")
a5=B.w(a5==null?"":a5)
return new C.ali(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
iiY(d){var w,v,u=C.hmH()
d.B(u)
for(w=0;w<60;++w)u.vN(0,0.03333333333333333)
v=u.a
return A.d.aV(v,new C.fHE(u))&&!A.d.cC(v,new C.fHF())},
iiX(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.T(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.I)(l),++u){t=l[u];++v
k.n(0,t.a,$.qG().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.I)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.w(t.e)+" V")
if(p==="resistor")q.push(""+A.j.V(t.r)+" ohms")
if(A.d.q(D.dyr,p))q.push("level "+A.j.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.j.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aN(q,", ")+")"
s.push(B.w(p)+n+": "+o+", current "+A.j.ad(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.I)(w),++u){m=w[u]
l.push(B.w(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.w(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aN(s,"\n")+"\nWires: "+A.d.aN(l,"; ")},
i7b(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.I)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aN(v,"\n")+"\n\n"}v=A.d.aN(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
ikt(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qG().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.SJ[u]
if(A.d.aV(w,new C.fLd(s)))if(!B.cS(r,s.b.toLowerCase(),0))v=B.cS(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ag("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.Y(w,new C.fLe(e),B.U(w).k("Y<1>")).gau(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ag("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.j.ad(A.d.cE(w,0,new C.fLf())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ag("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gH(w)
w=$.qG().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
ali:function ali(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fLg:function fLg(){},
fzX:function fzX(){},
fHE:function fHE(d){this.a=d},
fHF:function fHF(){},
fLd:function fLd(d){this.a=d},
fLe:function fLe(d){this.a=d},
fLf:function fLf(){},
WN:function WN(d,e){this.c=d
this.a=e},
bmG:function bmG(d,e,f,g,h){var _=this
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
ejE:function ejE(d){this.a=d},
ejF:function ejF(d,e,f){this.a=d
this.b=e
this.c=f},
ejG:function ejG(d){this.a=d},
ejR:function ejR(d){this.a=d},
ejS:function ejS(d,e){this.a=d
this.b=e},
ejN:function ejN(d){this.a=d},
ejL:function ejL(d,e){this.a=d
this.b=e},
ejM:function ejM(d,e,f){this.a=d
this.b=e
this.c=f},
ejO:function ejO(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ejJ:function ejJ(d){this.a=d},
ejK:function ejK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ejP:function ejP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ejI:function ejI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ejQ:function ejQ(d,e){this.a=d
this.b=e},
ejH:function ejH(d,e){this.a=d
this.b=e},
ejV:function ejV(d){this.a=d},
ejU:function ejU(d){this.a=d},
ejW:function ejW(d){this.a=d},
ejT:function ejT(d){this.a=d},
ejX:function ejX(d,e){this.a=d
this.b=e},
ejY:function ejY(d,e){this.a=d
this.b=e},
ejZ:function ejZ(d,e){this.a=d
this.b=e},
ek_:function ek_(d,e){this.a=d
this.b=e},
bCB(d,e,f){var w=null
return B.x(B.a([B.d(d,w,w,w,w,w,w,D.fvx,w,w,w),B.d(e,w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.N,0,A.p)},
hAB(d,e,f,g){var w=null,v=B.l(24),u=B.K(f.j(0.6),A.r,1)
return B.as(B.p(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.am,B.d(e,w,w,w,w,w,w,A.B3,A.K,w,w),A.aB,B.bZ(A.fV,g,A.br,w,0,8)],x.p),A.l,w,A.e,A.N,0,A.p),A.f,w,w,new B.o(D.biu,w,u,v,w,w,A.n),w,w,w,w,A.ad,w,w,w),w,w,w)},
GT:function GT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vq:function vq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
X9:function X9(d){this.a=d},
aGk:function aGk(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.h7$=h
_.m8$=i
_.fb$=j
_.h8$=k
_.bw$=l
_.a9$=m
_.c=_.a=null},
eyZ:function eyZ(){},
ezi:function ezi(d){this.a=d},
ezh:function ezh(d,e){this.a=d
this.b=e},
ezj:function ezj(){},
ezk:function ezk(){},
ez0:function ez0(d,e,f){this.a=d
this.b=e
this.c=f},
ez_:function ez_(d,e){this.a=d
this.b=e},
eyQ:function eyQ(d){this.a=d},
eyR:function eyR(d){this.a=d},
eyS:function eyS(d){this.a=d},
eyT:function eyT(d){this.a=d},
eyU:function eyU(d){this.a=d},
eyV:function eyV(d){this.a=d},
eyW:function eyW(d){this.a=d},
eyX:function eyX(d){this.a=d},
eyY:function eyY(d){this.a=d},
eyO:function eyO(d){this.a=d},
eyP:function eyP(d){this.a=d},
eyN:function eyN(d){this.a=d},
ezb:function ezb(d,e){this.a=d
this.b=e},
ez6:function ez6(d){this.a=d},
ez7:function ez7(d){this.a=d},
ez3:function ez3(d){this.a=d},
ez8:function ez8(d){this.a=d},
ez2:function ez2(d){this.a=d},
ez9:function ez9(d){this.a=d},
eza:function eza(d){this.a=d},
ez1:function ez1(d){this.a=d},
ezc:function ezc(d,e){this.a=d
this.b=e},
ez5:function ez5(d,e){this.a=d
this.b=e},
ezd:function ezd(d){this.a=d},
eze:function eze(d){this.a=d},
ezf:function ezf(d){this.a=d},
ezg:function ezg(d){this.a=d},
ez4:function ez4(d){this.a=d},
bjz:function bjz(d,e){this.b=d
this.a=e},
aOk:function aOk(){},
bAf:function bAf(){},
hvI(){var w=$.hvG
return w==null?$.hvG=$.rk().cWA("assets/data/three.min.js"):w},
hvH(){var w=$.hvF
return w==null?$.hvF=C.cPt():w},
cPt(){var w=0,v=B.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cPt=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.rk().jo(0,"assets/data/body3d.bin"),$async$cPt)
case 3:d=a1
$.hvJ=J.eF(A.dK.gaU(d),d.byteOffset,d.byteLength)
t=B.a4y(d)
s=t.getUint32(4,!0)
r=B.a([],x.h)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.jN(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.dmg[i]
g=B.b1((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a4s(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b5s))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.bcv(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cPt,v)},
c6T(){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$c6T=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.iG(B.a([C.hvH(),C.hvI()],x.D),x.K),$async$c6T)
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
return B.i($async$c6T,v)},
aUm:function aUm(d,e,f){this.a=d
this.b=e
this.c=f},
a4s:function a4s(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
bcv:function bcv(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
VD:function VD(d){this.a=d},
aEN:function aEN(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.h7$=s
_.m8$=t
_.fb$=u
_.h8$=v
_.bw$=w
_.a9$=a0
_.c=_.a=null},
dPK:function dPK(d){this.a=d},
dPJ:function dPJ(d,e){this.a=d
this.b=e},
dPk:function dPk(d){this.a=d},
dPl:function dPl(d,e){this.a=d
this.b=e},
dPm:function dPm(d){this.a=d},
dPn:function dPn(){},
dPL:function dPL(){},
dPo:function dPo(d,e){this.a=d
this.b=e},
dPp:function dPp(d){this.a=d},
dPq:function dPq(){},
dPr:function dPr(d){this.a=d},
dPt:function dPt(d,e){this.a=d
this.b=e},
dPs:function dPs(d){this.a=d},
dPh:function dPh(d,e,f){this.a=d
this.b=e
this.c=f},
dPi:function dPi(d){this.a=d},
dPj:function dPj(d){this.a=d},
dPA:function dPA(d){this.a=d},
dPB:function dPB(d,e){this.a=d
this.b=e},
dPC:function dPC(d,e){this.a=d
this.b=e},
dPD:function dPD(d){this.a=d},
dPz:function dPz(d,e){this.a=d
this.b=e},
dPE:function dPE(d,e){this.a=d
this.b=e},
dPy:function dPy(d,e){this.a=d
this.b=e},
dPF:function dPF(d){this.a=d},
dPx:function dPx(d){this.a=d},
dPG:function dPG(d){this.a=d},
dPw:function dPw(d){this.a=d},
dPH:function dPH(d){this.a=d},
dPv:function dPv(d){this.a=d},
dPI:function dPI(d){this.a=d},
dPu:function dPu(d){this.a=d},
aNn:function aNn(){},
aNo:function aNo(){},
c6U:function c6U(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c6V:function c6V(d,e){this.a=d
this.b=e},
c6W:function c6W(d){this.a=d},
aAc(d,e,f,g,h){return new C.bdg(d,e,f,g,h)},
hcK(d,e,f,g,h,i){return $.i4v.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.cWo(d,e,f,i,g,h))},
yJ:function yJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
CY:function CY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nL:function nL(d,e,f){this.a=d
this.b=e
this.c=f},
bdg:function bdg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ftf:function ftf(){},
ftg:function ftg(){},
fth:function fth(){},
fto:function fto(){},
ftp:function ftp(){},
ftq:function ftq(){},
VK:function VK(d){this.a=d},
aEP:function aEP(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.h7$=m
_.m8$=n
_.fb$=o
_.h8$=p
_.bw$=q
_.a9$=r
_.c=_.a=null},
dRp:function dRp(d){this.a=d},
dR3:function dR3(d,e){this.a=d
this.b=e},
dR6:function dR6(){},
dRq:function dRq(){},
dR1:function dR1(d,e){this.a=d
this.b=e},
dR2:function dR2(d,e){this.a=d
this.b=e},
dR7:function dR7(d,e,f){this.a=d
this.b=e
this.c=f},
dQX:function dQX(){},
dQY:function dQY(){},
dQZ:function dQZ(d){this.a=d},
dR_:function dR_(d,e){this.a=d
this.b=e},
dR0:function dR0(d,e,f){this.a=d
this.b=e
this.c=f},
dR8:function dR8(){},
dR9:function dR9(d,e){this.a=d
this.b=e},
dRa:function dRa(d){this.a=d},
dR5:function dR5(d,e){this.a=d
this.b=e},
dR4:function dR4(d){this.a=d},
dQW:function dQW(d,e,f){this.a=d
this.b=e
this.c=f},
dRj:function dRj(d){this.a=d},
dRi:function dRi(d){this.a=d},
dRk:function dRk(d){this.a=d},
dRh:function dRh(d){this.a=d},
dRf:function dRf(d){this.a=d},
dRg:function dRg(d){this.a=d},
dRe:function dRe(d){this.a=d},
dRb:function dRb(d){this.a=d},
dRd:function dRd(d){this.a=d},
dRl:function dRl(d,e){this.a=d
this.b=e},
dRm:function dRm(d,e){this.a=d
this.b=e},
dRn:function dRn(d){this.a=d},
dRc:function dRc(d){this.a=d},
dRo:function dRo(d,e){this.a=d
this.b=e},
bdz:function bdz(d,e){this.b=d
this.a=e},
cWo:function cWo(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aNs:function aNs(){},
bA_:function bA_(){},
hWc(){return new C.Og(null)},
Rj(d,e,f,g,h){return new C.bvx(d,e,f,g,h)},
btU(d,e,f){return A.j.D((d-e)/(f-e),0,1)},
hdh(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
imq(){return B.kR("construction","")},
Og:function Og(d){this.a=d},
Lg:function Lg(d,e){this.a=d
this.b=e},
B7:function B7(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aF5:function aF5(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dXB:function dXB(d,e){this.a=d
this.b=e},
dXA:function dXA(d){this.a=d},
dXD:function dXD(d,e){this.a=d
this.b=e},
dXC:function dXC(d){this.a=d},
bvx:function bvx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ftG:function ftG(){},
ftH:function ftH(){},
ftI:function ftI(){},
ftJ:function ftJ(){},
ftK:function ftK(){},
ftL:function ftL(){},
ftM:function ftM(){},
ftN:function ftN(){},
ftO:function ftO(){},
btV:function btV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f96:function f96(d){this.a=d},
f95:function f95(d,e){this.a=d
this.b=e},
f93:function f93(d){this.a=d},
f97:function f97(d){this.a=d},
f94:function f94(d,e){this.a=d
this.b=e},
agf:function agf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
af6:function af6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Rc:function Rc(d,e,f,g,h,i,j,k,l,m){var _=this
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
buV:function buV(d,e){this.b=d
this.a=e},
buq:function buq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcd:function bcd(d,e){this.b=d
this.a=e},
aJm:function aJm(d,e){this.c=d
this.a=e},
aJn:function aJn(d,e,f){var _=this
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
f8N:function f8N(d){this.a=d},
f8M:function f8M(d){this.a=d},
f8L:function f8L(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f8K:function f8K(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f8I:function f8I(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f8H:function f8H(d,e,f){this.a=d
this.b=e
this.c=f},
f8J:function f8J(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f8G:function f8G(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f8V:function f8V(d){this.a=d},
f8U:function f8U(d){this.a=d},
f8W:function f8W(d,e){this.a=d
this.b=e},
f8X:function f8X(d,e){this.a=d
this.b=e},
f8Y:function f8Y(d,e){this.a=d
this.b=e},
f8T:function f8T(d,e,f){this.a=d
this.b=e
this.c=f},
f8Z:function f8Z(d,e,f){this.a=d
this.b=e
this.c=f},
f8S:function f8S(d){this.a=d},
f8O:function f8O(d){this.a=d},
f9_:function f9_(d){this.a=d},
f90:function f90(d){this.a=d},
f8R:function f8R(d,e){this.a=d
this.b=e},
f91:function f91(d,e){this.a=d
this.b=e},
f8Q:function f8Q(d,e){this.a=d
this.b=e},
f92:function f92(d,e){this.a=d
this.b=e},
f8P:function f8P(d,e){this.a=d
this.b=e},
f8E:function f8E(){},
f8F:function f8F(){},
btw:function btw(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bsW:function bsW(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bcU:function bcU(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bsY:function bsY(d,e,f){this.b=d
this.c=e
this.a=f},
bx0:function bx0(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aP9:function aP9(){},
hC4(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a5(0,new B.r(w,0)),u=e.aK(0,new B.r(w,0)),t=1-f,s=3*t
return d.aM(0,t*t*t).a5(0,v.aM(0,s*t*f)).a5(0,u.aM(0,s*f*f)).a5(0,e.aM(0,f*f*f))},
bjy(d,e,f,g,h,i){return $.i53.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.drr(d,e,f,i,g,h))},
a1C:function a1C(d,e){this.a=d
this.b=e},
qv:function qv(d,e,f,g,h){var _=this
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
D1:function D1(d,e){this.a=d
this.b=e},
a_B:function a_B(d,e){this.a=d
this.b=e},
ag3:function ag3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a1P:function a1P(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Dc:function Dc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acX:function acX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
add:function add(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
af9:function af9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bjw:function bjw(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.bx$=_.bL$=0},
drv:function drv(d){this.a=d},
drw:function drw(d){this.a=d},
drs:function drs(d,e){this.a=d
this.b=e},
drt:function drt(d){this.a=d},
dru:function dru(d){this.a=d},
drx:function drx(d){this.a=d},
dry:function dry(d){this.a=d},
drz:function drz(d){this.a=d},
drA:function drA(d){this.a=d},
drB:function drB(d){this.a=d},
drC:function drC(d){this.a=d},
drD:function drD(d){this.a=d},
drE:function drE(d){this.a=d},
drF:function drF(d){this.a=d},
GE:function GE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
X8:function X8(d){this.a=d},
aGj:function aGj(d,e,f,g,h,i,j){var _=this
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
eyj:function eyj(d){this.a=d},
ey8:function ey8(d){this.a=d},
eya:function eya(){},
eyb:function eyb(){},
eye:function eye(){},
eyf:function eyf(d,e,f){this.a=d
this.b=e
this.c=f},
eyg:function eyg(d){this.a=d},
eyh:function eyh(d){this.a=d},
eyc:function eyc(){},
eyd:function eyd(d){this.a=d},
eyJ:function eyJ(d){this.a=d},
eyi:function eyi(){},
ey4:function ey4(d){this.a=d},
eyl:function eyl(d){this.a=d},
eyk:function eyk(d){this.a=d},
eyn:function eyn(){},
eym:function eym(d,e){this.a=d
this.b=e},
ey7:function ey7(){},
ey5:function ey5(d){this.a=d},
ey6:function ey6(d){this.a=d},
eyH:function eyH(d){this.a=d},
eyG:function eyG(d){this.a=d},
eyI:function eyI(d){this.a=d},
eyx:function eyx(d,e){this.a=d
this.b=e},
eyF:function eyF(d){this.a=d},
eyD:function eyD(d){this.a=d},
eyE:function eyE(d){this.a=d},
eyC:function eyC(d){this.a=d},
eyB:function eyB(d){this.a=d},
eyy:function eyy(d){this.a=d},
eyz:function eyz(d){this.a=d},
eyA:function eyA(d){this.a=d},
ey9:function ey9(){},
eyt:function eyt(d){this.a=d},
eyu:function eyu(d){this.a=d},
eys:function eys(d){this.a=d},
eyv:function eyv(d){this.a=d},
eyr:function eyr(d){this.a=d},
eyw:function eyw(d){this.a=d},
eyq:function eyq(d){this.a=d},
eyp:function eyp(d){this.a=d},
eyo:function eyo(d,e){this.a=d
this.b=e},
bjx:function bjx(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
drr:function drr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aOi:function aOi(){},
hHT(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aK(0,e).gcJ()*0.1
return new B.r((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
hmH(){var w=B.a([],x.F),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a5B(w,v,u,A.cR,B.T(x.N,x.y))},
hPT(d,e,f){var w=d.c,v=e===0?-1:1
return new B.r(w*f.a+v*C.hmI(d),d.d*f.b)},
hmI(d){return 42+(D.mw.am(0,d.b)?(d.ch-1)*38:0)},
eh:function eh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
u0:function u0(d,e,f,g){var _=this
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
abC:function abC(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
acJ:function acJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5B:function a5B(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bQc:function bQc(){},
bQn:function bQn(d){this.a=d},
bQi:function bQi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQo:function bQo(d){this.a=d},
bQp:function bQp(d){this.a=d},
bQr:function bQr(d){this.a=d},
bQs:function bQs(d){this.a=d},
bQq:function bQq(d){this.a=d},
bQt:function bQt(d,e,f){this.a=d
this.b=e
this.c=f},
bQu:function bQu(d){this.a=d},
bQe:function bQe(d){this.a=d},
bQf:function bQf(d){this.a=d},
bQd:function bQd(d){this.a=d},
bQg:function bQg(d,e,f){this.a=d
this.b=e
this.c=f},
bQh:function bQh(d){this.a=d},
bQb:function bQb(d){this.a=d},
bQv:function bQv(d,e){this.a=d
this.b=e},
bQj:function bQj(d,e){this.a=d
this.b=e},
bQm:function bQm(d){this.a=d},
bQl:function bQl(d){this.a=d},
bQk:function bQk(d){this.a=d},
ak6:function ak6(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bKz:function bKz(){},
bKA:function bKA(){},
mY:function mY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cuc:function cuc(d){this.a=d},
isb(d2,d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=d3.fx>0&&!d3.x,c7=new C.fXc(),c8=new C.fXe(),c9=new C.fXf(),d0=new C.fXd(),d1=d3.b
switch(d1){case"fridge":w=c9.$4(-16,-28,32,54)
d2.aq(w,d0.$3(new B.a6(w.a,w.b,w.c,w.d),A.ch,A.bP))
d2.ah(D.eu0,D.eqV,c8.$2(A.dX,1.4))
d2.ah(D.eqA,D.eqy,c8.$2(A.bw,2.4))
d2.ah(D.eqB,S.aMx,c8.$2(A.bw,2.4))
if(c6){d1=c7.$1(A.fK.j(0.5))
d1.y=A.Hi
d2.O(D.eqg,14,d1)
for(d1=d4*0.6,v=0;v<3;++v){u=A.j.F(d1+v/3,1)
d5.$5(d2,"\u2744",new B.r(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d2.aq(c9.$4(-22,-26,44,50),d0.$3(D.aSF,A.aS,A.cC))
d2.O(A.cJ,16,c7.$1(A.bw))
d2.O(A.cJ,13,c7.$1(c6?A.aG.j(0.85):A.a_))
if(c6){d1=d2.c
J.br(d1.save())
d1.translate(0,4)
d2.jr(0,d3.y*0.6)
for(v=0;v<3;++v){t=v*2.09
d2.ah(A.J,new B.r(Math.cos(t)*11,Math.sin(t)*11),c8.$2(A.ab,3))}d1.restore()
for(d1=d4*0.8,v=0;v<4;++v){u=A.j.F(d1+v*0.25,1)
d2.O(new B.r(Math.sin(v*2+d4)*9,4-u*12),1.6+u*2,c7.$1(A.c.j(0.8*(1-u))))}}d2.O(D.etT,2.4,c7.$1(c6?A.bg:A.an))
d2.O(D.euL,2.4,c7.$1(A.an))
return!0
case"blender":d2.aq(c9.$5(-14,14,28,12,4),c7.$1(A.cP))
d1=$.S().r
t=x.v
s=new B.aI(d1,A.aj,c5,c5,B.a([],t))
s.E(new B.aZ(-16,-26))
s.E(new B.aq(16,-26))
s.E(new B.aq(12,14))
s.E(new B.aq(-12,14))
s.E(new B.bw())
d2.ag(s,c7.$1(A.fK.j(0.35)))
if(c6){d1=new B.aI(d1,A.aj,c5,c5,B.a([],t))
d1.E(new B.aZ(-14,-10))
d1.E(new B.aq(14,-10))
d1.E(new B.aq(12,14))
d1.E(new B.aq(-12,14))
d1.E(new B.bw())
d2.ag(d1,c7.$1(A.aA.j(0.7)))}d2.ag(s,c8.$2(A.ab,1.6))
d1=d2.c
J.br(d1.save())
d1.translate(0,10)
d2.jr(0,d3.y)
d2.ah(D.a9j,D.aMU,c8.$2(A.bO,3))
d1.restore()
if(c6)for(d1=d4*9,t=d4*1.6,v=0;v<3;++v)d2.O(new B.r(Math.sin(d1+v*2)*9,-10-A.j.F(t+v*0.33,1)*12),2.4,c7.$1(A.eZ))
return!0
case"drone":d2.aq(c9.$5(-10,-4,20,10,4),c7.$1(A.aM))
d2.O(A.hq,3,c7.$1(c6?A.bg:A.an))
r=c6?-3+Math.sin(d4*4)*2:4
for(d1=d2.c,t=-4+r,q=-6+r,p=0;p<2;++p){o=F.IW[p]
d2.ah(new B.r(o*0.4,1),new B.r(o,t),c8.$2(A.bw,3))
J.br(d1.save())
d1.translate(o,q)
d2.ah(D.etH,D.eqF,c8.$2(A.c.j(c6?0.35:0.9),3))
if(c6)d2.c2(B.bS(A.J,6,24+Math.sin(d3.y*3)*4),c7.$1(A.c.j(0.25)))
d1.restore()}return!0
case"drill":w=new B.aI($.S().r,A.aj,c5,c5,B.a([],x.v))
w.E(new B.aZ(-24,-12))
w.E(new B.aq(10,-12))
w.E(new B.aq(10,2))
w.E(new B.aq(-2,2))
w.E(new B.aq(-6,22))
w.E(new B.aq(-16,22))
w.E(new B.aq(-14,2))
w.E(new B.aq(-24,2))
w.E(new B.bw())
d2.ag(w,d0.$3(D.fbE,A.aQ,A.d5))
d2.aD(D.faL,c7.$1(A.cZ))
d1=d2.c
J.br(d1.save())
d1.translate(18,-5)
d2.jr(0,d3.y*2)
d2.ah(A.J,D.eqM,c8.$2(A.bO,2.4))
d2.ah(A.a9f,D.eqL,c8.$2(A.hK,1))
d1.restore()
if(c6)for(d1=d4*3,t=d4*20,v=0;v<4;++v){u=A.j.F(d1+v*0.25,1)
d2.O(new B.r(34+u*6,-5+Math.sin(v*3+t)*6*u),1.4,c7.$1(A.eg.j(1-u)))}return!0
case"torch":if(c6){v=A.j.D(0.5+0.12*(Math.abs(d3.dy)-2),0.5,1)
d1=new B.aI($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(16,-6))
d1.E(new B.aq(52,-26))
d1.E(new B.aq(52,18))
d1.E(new B.aq(16,4))
d1.E(new B.bw())
d2.ag(d1,c7.$1(A.bL.j(0.35*v)))}d2.aq(c9.$5(-26,-6,30,12,3),d0.$3(D.fbK,A.bh,A.cu))
n=new B.aI($.S().r,A.aj,c5,c5,B.a([],x.v))
n.E(new B.aZ(4,-6))
n.E(new B.aq(18,-12))
n.E(new B.aq(18,12))
n.E(new B.aq(4,6))
n.E(new B.bw())
d2.ag(n,c7.$1(A.cP))
d2.O(D.eqR,7,c7.$1(c6?A.c:A.cZ))
return!0
case"neon":d2.aq(c9.$5(-30,-14,60,28,6),c7.$1(M.nz))
if(c6)m=d3.ax>0.5||A.o.F(A.j.bi(d4*17),3)!==0
else m=!1
l=m?A.c4:D.bsO
if(m){d1=c9.$5(-28,-12,56,24,6)
t=c7.$1(A.c4.j(0.35))
t.y=A.mh
d2.aq(d1,t)}d2.aq(c9.$5(-27,-11,54,22,5),c8.$2(l,2.2))
d5.$5(d2,"OPEN",D.eu6,l,17)
return!0
case"microwave":d2.aq(c9.$4(-30,-18,60,38),d0.$3(D.fbQ,A.bO,A.bh))
d1=c9.$5(-26,-14,38,30,3)
d2.aq(d1,c7.$1(c6?A.bL.j(0.75):A.av))
if(c6){d1=d2.c
J.br(d1.save())
d1.translate(-7,8)
d2.jr(0,d3.y*0.5)
d2.c2(B.bS(A.J,7,22),c7.$1(A.d5))
d1.restore()}d2.aq(c9.$5(15,-14,12,12,2),c7.$1(M.nz))
if(c6)d5.$5(d2,"0:"+A.a.b_(A.o.v(59-A.o.F(A.j.bi(d4),60)),2,"0"),D.eqS,A.bc,6.5)
d2.O(D.er7,4,c7.$1(A.cZ))
return!0
case"doorbell":d2.aq(c9.$5(-16,-26,32,52,8),c7.$1(A.bk))
d2.O(A.JO,10,c7.$1(c6?A.bt:A.bw))
d1=d2.c
J.br(d1.save())
d1.translate(0,-8)
d2.jr(0,c6?Math.sin(d4*16)*0.45:0)
d5.$5(d2,"\ud83d\udd14",D.euP,A.c,16)
d1.restore()
d2.O(A.kD,6,c7.$1(A.d8))
d2.O(A.kD,6,c8.$2(A.c,1.6))
if(c6)for(d1=d4*14,v=1;v<=2;++v)d2.cP(B.bW(A.JO,14+v*6+A.j.F(d1,6)),-0.9,1.8,!1,c8.$2(A.bt.j(0.9-v*0.3),1.8))
return!0
case"camera":d2.ah(D.eu5,D.euI,c8.$2(A.bw,4))
d1=d2.c
J.br(d1.save())
d2.jr(0,c6?Math.sin(d4*0.9)*0.18:0)
d2.aq(c9.$5(-24,-14,46,22,5),d0.$3(D.fbF,A.bO,A.an))
d2.O(D.aMB,8,c7.$1(A.av))
d2.O(D.aMB,4.5,c7.$1(c6?A.aG:A.cu))
d2.O(D.eu3,2.2,c7.$1(c6&&A.o.F(A.j.bi(d4*1.6),2)===0?A.aA:A.kw))
d1.restore()
if(c6)d5.$5(d2,"REC",D.eue,A.aA,9)
return!0
case"console":d2.aq(c9.$5(-28,-22,56,44,8),d0.$3(D.fbN,A.j6,A.fy))
d2.aq(c9.$5(-20,-17,40,22,3),c7.$1(A.dI))
if(c6){d1=d4*2.3
d2.O(new B.r(Math.sin(d1)*14,-6+Math.cos(d4*3.1)*6),2.6,c7.$1(A.c))
t=-9+Math.sin(d1+0.4)*6
d2.aD(new B.a6(-18,t,-15.6,t+8),c7.$1(A.bc))
d1=-9+Math.sin(d1-0.4)*6
d2.aD(new B.a6(15.6,d1,18,d1+8),c7.$1(A.c4))}d2.O(D.etZ,4,c7.$1(A.b6))
d2.O(D.eqN,2.4,c7.$1(A.aA))
d2.O(D.er4,2.4,c7.$1(A.bg))
return!0
case"heartmon":d2.aq(c9.$5(-30,-22,60,44,6),c7.$1(A.av))
d2.aq(c9.$5(-26,-18,52,28,3),c7.$1(A.dI))
if(c6){d1=$.S()
t=B.a([],x.v)
k=new B.aI(d1.r,A.aj,c5,c5,t)
for(d1=d4*0.5,o=-25;o<=25;++o){u=A.j.F((o+25)/50-d1,1)
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
k.ab()}}d2.ag(k,c8.$2(A.bc,1.8))
d5.$5(d2,"72",D.eqO,A.hu,11)
d1=d4*9
d5.$5(d2,"\u2665",D.euj,A.hu.j((Math.sin(d1)+1.4)/2.4),9+Math.sin(d1)*1.2)}d2.O(D.eu8,3,c7.$1(c6?A.bg:A.bw))
return!0
case"aquarium":d1=c9.$5(-26,-20,52,40,4)
d2.aq(d1,c7.$1(A.cG.j(c6?0.5:0.3)))
d2.aq(c9.$5(-26,-20,52,40,4),c8.$2(A.ab,1.6))
d2.aD(D.fbH,c7.$1(F.uk))
if(c6){d1=d4*1.1
t=Math.sin(d1)
q=d2.c
J.br(q.save())
q.translate(t*14,-2+Math.sin(d4*2)*3)
if(Math.cos(d1)<0)d2.oj(0,-1,1)
d2.c2(B.bS(A.J,8,14),c7.$1(A.cN))
d1=new B.aI($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-6,0))
d1.E(new B.aq(-12,-4))
d1.E(new B.aq(-12,4))
d1.E(new B.bw())
d2.ag(d1,c7.$1(A.c8))
d2.O(D.erQ,1.2,c7.$1(A.w))
q.restore()
for(d1=d4*0.7,v=0;v<5;++v){u=A.j.F(d1+v*0.2,1)
d2.O(new B.r(-18+Math.sin(u*8+v)*2,13-u*30),1.4+A.o.F(v,2),c8.$2(A.ab,1))}}return!0
case"lighthouse":d1=$.S().r
t=x.v
g=new B.aI(d1,A.aj,c5,c5,B.a([],t))
g.E(new B.aZ(-9,22))
g.E(new B.aq(-5,-16))
g.E(new B.aq(5,-16))
g.E(new B.aq(9,22))
g.E(new B.bw())
d2.ag(g,d0.$3(D.fch,A.c,A.bG))
d2.aD(D.fcd,c7.$1(c6?A.eg:A.bw))
q=new B.aI(d1,A.aj,c5,c5,B.a([],t))
q.E(new B.aZ(-7,-22))
q.E(new B.aq(0,-29))
q.E(new B.aq(7,-22))
q.E(new B.bw())
d2.ag(q,c7.$1(A.er))
if(c6){f=Math.sin(d3.y*0.3)
d1=new B.aI(d1,A.aj,c5,c5,B.a([],t))
d1.E(new B.aZ(0,-19))
t=f*34
d1.E(new B.aq(t,-26))
d1.E(new B.aq(t,-12))
d1.E(new B.bw())
d2.ag(d1,c7.$1(A.eg.j(0.45)))
d1=c7.$1(A.eg.j(0.35))
d1.y=A.Hi
d2.O(D.eqh,14,d1)}return!0
case"discoball":d2.ah(D.eqj,T.aMs,c8.$2(A.cZ,1.4))
d2.O(A.J,16,d0.$3(D.fbo,A.aS,A.an))
for(v=0;v<8;++v){d1=-12+v*3.4
d2.ah(new B.r(-16,d1),new B.r(16,d1),c8.$2(A.dC,0.7))}for(v=0;v<5;++v){f=d3.y*0.5+v*1.26
d2.ah(new B.r(Math.cos(f)*16*0.3,Math.sin(f)*16*0.3),new B.r(Math.cos(f)*16,0),c8.$2(A.dC,0.7))}if(c6)for(d1=d4*2,t=d4*9,v=0;v<10;++v){f=d1+v*0.63
e=22+A.o.F(v,3)*6
d2.O(new B.r(Math.cos(f)*e,Math.sin(f)*e*0.8),1.8,c7.$1(D.dnl[A.o.F(v,4)].j(0.5+0.5*Math.sin(t+v))))}return!0
case"robot":d2.aq(c9.$5(-14,-4,28,24,5),d0.$3(D.fbl,A.cC,A.an))
d2.aq(c9.$5(-12,-26,24,20,5),d0.$3(D.fbe,A.bk,A.bP))
d2.ah(H.aMu,D.eql,c8.$2(A.bw,1.6))
d2.O(D.eqm,2.2,c7.$1(c6?A.aA:A.bw))
d=c6&&A.j.F(d4*0.8,1)>0.08
for(p=0;p<2;++p){o=F.a6S[p]
if(c6)d1=d?A.b9:A.fm
else d1=A.cu
d2.O(new B.r(o,-17),3.2,c7.$1(d1))}d1=d2.c
J.br(d1.save())
d1.translate(14,0)
d2.jr(0,c6?-0.6+Math.sin(d4*5)*0.6:0.3)
d2.ah(A.J,D.a9a,c8.$2(A.bP,4))
d1.restore()
d2.ah(D.etP,D.euc,c8.$2(A.bP,4))
d2.aD(D.fcc,c7.$1(c6?A.b9.j(0.7):A.aM))
return!0
case"toaster":a0=c6?Math.min(1,d3.ax/3):0
for(d1=-4-a0*14,p=0;p<2;++p){t=c9.$5(D.aDc[p]+1,d1,10,14,2)
q=B.ap(A.bL,A.d5,a0)
q.toString
d2.aq(t,c7.$1(q))}d2.aq(c9.$5(-24,-6,48,26,8),d0.$3(D.fbG,A.bO,A.bh))
for(p=0;p<2;++p){o=D.aDc[p]
d1=c9.$5(o,-5,12,5,2)
d2.aq(d1,c7.$1(c6?A.fJ:A.av))
if(c6){d1=c9.$5(o,-5,12,5,2)
t=c7.$1(A.cN.j(0.5))
t.y=N.oz
d2.aq(d1,t)}}d2.ah(D.erd,D.ery,c8.$2(A.av,3))
return!0
case"ledstrip":d2.aq(c9.$5(-34,-4,68,10,4),c7.$1(A.cu))
for(d1=d4*90,v=0;v<9;++v){a1=A.j.F(d1+v*40,360)
l=c6?new An.pj(1,a1,0.8,1).jc():A.cP
if(c6){t=c7.$1(l.j(0.45))
t.y=N.oz
d2.O(new B.r(-30+v*7.5,1),7,t)}d2.O(new B.r(-30+v*7.5,1),2.6,c7.$1(l))}d2.aq(c9.$5(-40,-2,6,6,1),c7.$1(A.cZ))
return!0
case"pump":d2.aq(c9.$5(-16,-2,32,22,6),d0.$3(D.fbu,A.cG,A.Gc))
d2.O(D.euk,8,c7.$1(A.rK))
d1=d2.c
J.br(d1.save())
d1.translate(-2,9)
d2.jr(0,d3.y)
for(v=0;v<3;++v){t=v*2.09
d2.ah(A.J,new B.r(Math.cos(t)*7,Math.sin(t)*7),c8.$2(A.fK,2.4))}d1.restore()
d1=new B.aI($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(16,6))
d1.E(new B.aq(26,6))
d1.E(new B.aq(26,-20))
d1.E(new B.aq(10,-20))
d2.ag(d1,c8.$2(A.bP,4))
if(c6){for(d1=d4*0.9,v=0;v<5;++v)d2.O(new B.r(26,6-A.j.F(d1+v*0.2,1)*26),2.2,c7.$1(A.hJ))
d2.O(D.est,3.2,c7.$1(A.hJ.j(0.7)))}return!0
case"hairdryer":d1=d2.c
J.br(d1.save())
d2.jr(0,-0.15)
d2.aq(c9.$5(-26,-14,40,22,10),d0.$3(D.fbI,A.hH,A.uo))
d2.aq(c9.$5(14,-10,12,14,3),c7.$1(A.cu))
d2.aq(c9.$5(-10,6,12,22,4),c7.$1(A.cP))
d1.restore()
if(c6){for(d1=d4*3,v=0;v<4;++v){u=A.j.F(d1+v*0.25,1)
t=u*18
q=-10+v*5
d2.ah(new B.r(24+t,q),new B.r(32+t,q),c8.$2(A.c.j(1-u),1.8))}d1=c7.$1(A.cN.j(0.4))
d1.y=N.oz
d2.O(D.er6,8,d1)}return!0
case"headphones":d2.cP(B.bS(A.dL,44,44),3.141592653589793,3.141592653589793,!1,c8.$2(A.bw,4))
for(d1=d4*12,p=0;p<2;++p){o=F.SW[p]
t=o-7
d2.aq(c9.$5(t,0,14,20,6),d0.$3(new B.a6(t,0,t+14,20),A.bd,A.mS))
if(c6)for(t=o<0,v=1;v<=2;++v){q=B.bW(new B.r(o,10),10+v*5+A.j.F(d1,5))
h=t?2.2:-0.9
d2.cP(q,h,1.6,!1,c8.$2(A.ey.j(0.9-v*0.3),1.6))}}if(c6)d5.$5(d2,"\u266a",new B.r(-4,-8-A.j.F(d4*14,8)),A.kM,12)
return!0
case"smartwatch":d2.aq(c9.$5(-8,-30,16,14,3),c7.$1(A.cu))
d2.aq(c9.$5(-8,14,16,14,3),c7.$1(A.cu))
d2.aq(c9.$5(-14,-17,28,32,8),d0.$3(D.fbj,A.cZ,A.cP))
d2.aq(c9.$5(-11,-14,22,26,6),c7.$1(A.dI))
if(c6){a2=new B.V(Date.now(),0,!1)
d5.$5(d2,A.a.b_(A.o.v(B.df(a2)),2,"0")+":"+A.a.b_(A.o.v(B.fS(a2)),2,"0"),D.eqs,A.bc,9.5)
j=(Math.sin(d4*9)+1)/2
d1=B.ap(A.FW,A.hu,j)
d1.toString
d5.$5(d2,"\u2665",new B.r(-8,1),d1,8+j*2)
d5.$5(d2,""+(70+A.o.F(A.j.bi(d4*2),6)),A.dL,A.c,7)}return!0
case"tablet":d2.aq(c9.$5(-30,-22,60,44,6),c7.$1(M.nz))
d2.aq(c9.$5(-30,-22,60,44,6),c8.$2(A.bP,1.6))
a3=c9.$5(-27,-19,54,38,3)
if(c6){d1=d2.c
J.br(d1.save())
d1.clipRRect(B.n2(a3),$.mH(),!0)
d1.translate(-27,-19)
L.M9(d2,D.fiD,d4,!1,c5,c5)
d1.restore()}else d2.aq(a3,c7.$1(D.wm))
return!0
case"buck":a4=c9.$5(-26,-22,52,42,5)
d2.aq(a4,d0.$3(new B.a6(a4.a,a4.b,a4.c,a4.d),A.dV,A.dh))
d2.aq(a4,c8.$2(A.aT,1.2))
d2.O(D.aN0,9,c7.$1(A.av))
d2.O(D.aN0,6,c8.$2(A.d5,2))
d2.aq(c9.$5(4,-2,14,10,2),c7.$1(A.av))
d2.aq(c9.$5(-22,-19,44,12,2),c7.$1(A.dI))
d1=A.j.ad(d3.db,1)
t=A.j.ad(c6?d3.dx:d3.e,1)
q=c6?A.bc:A.an
d5.$5(d2,d1+"\u2192"+t+"V",D.esD,q,8.2)
d2.O(D.eqW,2.4,c7.$1(c6?A.bg:A.aM))
d5.$5(d2,"IN",D.eud,A.ab,6)
d5.$5(d2,"OUT",D.esk,A.ab,6)
return!0
case"regulator":a5=c6?A.j.D(d3.cy*Math.abs(d3.fr)/2.5,0,1):0
d1=c9.$5(-14,-26,28,22,3)
t=B.ap(A.bP,A.aA,a5)
t.toString
d2.aq(d1,c7.$1(t))
d2.O(H.a98,3,c7.$1(A.aM))
d2.aq(c9.$5(-12,-4,24,18,3),d0.$3(D.fbf,A.cP,A.i8))
d5.$5(d2,"7805",D.a9j,A.ab,8)
for(p=0;p<3;++p){d1=D.dtV[p]-1
d2.aD(new B.a6(d1,14,d1+2,22),c7.$1(A.dY))}if(a5>0.2)for(d1=d4*0.9,v=0;v<3;++v){u=A.j.F(d1+v*0.33,1)
d2.O(new B.r(-6+v*6,-28-u*12),2+u*2,c7.$1(A.c.j(0.5*(1-u))))}d5.$5(d2,"5V",D.euM,A.bp,9)
return!0
case"diode":d2.ah(D.aN4,D.aMO,c8.$2(A.dY,2.4))
d2.aq(c9.$5(-14,-7,28,14,6),c7.$1(A.at.j(0.85)))
d2.aD(D.faZ,c7.$1(A.bp))
if(c6){d1=c9.$5(-14,-7,28,14,6)
t=c7.$1(A.eg.j(0.4))
t.y=A.kW
d2.aq(d1,t)}d1=new B.aI($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-8,-4))
d1.E(new B.aq(-8,4))
d1.E(new B.aq(-1,0))
d1.E(new B.bw())
d2.ag(d1,c7.$1(A.b6))
d5.$5(d2,"one way",D.eu1,A.aE,8)
return!0
case"ldr":d2.ah(D.aN4,D.a9j,c8.$2(A.dY,2.4))
d2.ah(D.aMU,D.aMO,c8.$2(A.dY,2.4))
d2.O(A.J,12,c7.$1(A.d5))
d2.O(A.J,12,c8.$2(A.rQ,1.6))
d1=$.S()
t=B.a([],x.v)
a6=new B.aI(d1.r,A.aj,c5,c5,t)
a6.E(new B.aZ(-8,-6))
for(v=0;v<5;++v){d1=(v&1)===0?8:-8
d1=new B.aq(d1,-6+v*3)
t.push(d1)
q=a6.f
if(q!=null)d1.ak(q)
a6.ab()}d2.ag(a6,c8.$2(A.bL,1.4))
d1=B.ap(A.bw,A.eg,d3.f)
d1.toString
d5.$5(d2,"\u2600",new B.r(-6,-26),d1,14)
d5.$5(d2,""+A.j.V(20+980*(1-d3.f))+"\u03a9",D.etQ,A.ab,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":switch(d1){case"lgtv":t=A.ep
break
case"sonytv":t=A.rB
break
case"appletv":t=A.dY
break
default:t=F.FZ
break}a7=d1==="lgtv"||d1==="appletv"
d2.aq(c9.$5(-36,-24,72,a7?42:44,6),c7.$1(t))
t=a7?-35:-33
q=a7?-23:-21
h=a7?70:66
a3=c9.$5(t,q,h,a7?40:38,3)
t=a3.a
q=a3.b
if(c6){h=d2.c
J.br(h.save())
h.clipRRect(B.n2(a3),$.mH(),!0)
h.translate(t,q)
L.hiF(d2,new B.av(a3.c-t,a3.d-q),d3.at,d4,d3.ax,-1,c5,c5)
h.restore()
d2.O(D.erB,1.6,c7.$1(A.bc))}else{d2.aq(a3,c7.$1(D.wm))
h=new B.aI($.S().r,A.aj,c5,c5,B.a([],x.v))
h.E(new B.aZ(t,q))
h.E(new B.aq(t+24,q))
h.E(new B.aq(t,q+22))
h.E(new B.bw())
d2.ag(h,c7.$1(A.c.j(0.05)))}switch(d1){case"lgtv":d2.aq(c9.$5(-22,19,44,3,1.5),c7.$1(A.cZ))
break
case"sonytv":for(d1=x.v,p=0;p<2;++p){o=M.fO[p]
t=$.S()
q=B.a([],d1)
t=new B.aI(t.r,A.aj,c5,c5,q)
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
h=new B.bw()
q.push(h)
q=t.f
if(q!=null)h.ak(q)
t.ab()
d2.ag(t,c7.$1(A.cZ))}d5.$5(d2,"SONY",D.eth,A.bO,5.5)
break
case"appletv":d1=new B.aI($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-8,18))
d1.E(new B.aq(8,18))
d1.E(new B.aq(12,25))
d1.E(new B.aq(-12,25))
d1.E(new B.bw())
d2.ag(d1,c7.$1(D.ZQ))
d5.$5(d2,"Apple TV",D.esE,A.bw,4.8)
break
default:d2.aq(c9.$5(-34,19,68,7,3),c7.$1(D.br5))
for(v=0;v<14;++v){d1=-32+v*4.9
d2.ah(new B.r(d1,20),new B.r(d1,25),c8.$2(A.dC,0.6))}d5.$5(d2,"B&O",D.euH,F.uk,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":a9=D.mw.h(0,d1)
b0=a9.b===D.EQ
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
d2.aq(w,d0.$3(new B.a6(h,a8,b3,b4),b6,b5))
a3=c9.$5(t+2,q,b1-4,b2-4,3.5)
if(c6){t=d2.c
J.br(t.save())
t.clipRRect(B.n2(a3),$.mH(),!0)
q=a3.a
h=a3.b
t.translate(q,h)
L.M9(d2,new B.av(a3.c-q,a3.d-h),d4,!1,c5,c5)
t.restore()}else d2.aq(a3,c7.$1(D.wm))
if(b0){t=a3.b
q=a3.d
d2.ah(new B.r(0,t),new B.r(0,q),c8.$2(A.w.j(c6?0.45:0.7),0.9))}if(d1==="iphonefold"||d1==="huawei")d2.aq(c9.$5(-4,a3.b+1.2,8,2.6,1.3),c7.$1(A.w))
else{d1=b0?b1/2-7:0
d2.O(new B.r(d1,a3.b+3),1.3,c7.$1(A.w))}return!0
case"ereader":d2.aq(c9.$5(-17,-28,34,52,4),c7.$1(A.cP))
d2.aq(c9.$5(-14.5,-25.5,29,45,2),c7.$1(A.bO))
if(c6){d5.$5(d2,"NGMY",D.euS,A.av,9)
for(v=0;v<9;++v){d1=-9+v*3.6
t=A.o.F(v,4)===3?14:22
d2.aD(new B.a6(-11,d1,-11+t,d1+1.4),c7.$1(A.bh))}d2.O(A.a96,1.6,c7.$1(A.av))}return!0
case"laptop":d2.aq(c9.$5(-30,-28,60,42,4),d0.$3(D.fbR,A.cC,A.bh))
b7=c9.$5(-27,-25,54,34,2)
if(c6){d1=d2.c
J.br(d1.save())
d1.clipRRect(B.n2(b7),$.mH(),!0)
t=b7.a
q=b7.b
d1.translate(t,q)
L.M9(d2,new B.av(b7.c-t,b7.d-q),d4,!1,c5,c5)
d1.restore()}else d2.aq(b7,c7.$1(D.wm))
d1=new B.aI($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-38,16))
d1.E(new B.aq(38,16))
d1.E(new B.aq(34,21))
d1.E(new B.aq(-34,21))
d1.E(new B.bw())
d2.ag(d1,c7.$1(D.ZQ))
d2.aq(c9.$5(-7,16,14,2,1),c7.$1(A.bh))
return!0
case"imac":d2.aq(c9.$5(-32,-28,64,46,5),d0.$3(D.fbV,A.ch,A.cC))
b8=c9.$5(-29,-25,58,33,2)
if(c6){d1=d2.c
J.br(d1.save())
d1.clipRRect(B.n2(b8),$.mH(),!0)
t=b8.a
q=b8.b
d1.translate(t,q)
L.M9(d2,new B.av(b8.c-t,b8.d-q),d4,!1,c5,c5)
d1.restore()}else d2.aq(b8,c7.$1(D.wm))
d2.O(D.aMn,2,c7.$1(A.bP))
d1=new B.aI($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-6,18))
d1.E(new B.aq(6,18))
d1.E(new B.aq(10,26))
d1.E(new B.aq(-10,26))
d1.E(new B.bw())
d2.ag(d1,c7.$1(D.ZQ))
return!0
case"monitor":d2.aq(c9.$5(-34,-28,68,40,3),c7.$1(A.ep))
b9=c9.$5(-32,-26,64,36,2)
if(c6){d1=d2.c
J.br(d1.save())
d1.clipRRect(B.n2(b9),$.mH(),!0)
t=b9.a
q=b9.b
d1.translate(t,q)
L.M9(d2,new B.av(b9.c-t,b9.d-q),d4,!1,c5,c5)
d1.restore()}else d2.aq(b9,c7.$1(D.wm))
d2.aD(D.fc1,c7.$1(A.bh))
d2.aq(c9.$5(-14,22,28,3.5,1.5),c7.$1(A.cZ))
return!0
case"projector":if(c6){d1=new B.aI($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(14,4))
d1.E(new B.aq(-32,-42))
d1.E(new B.aq(34,-42))
d1.E(new B.bw())
d2.ag(d1,c7.$1(A.eg.j(0.16)))
c0=c9.$5(-32,-46,66,26,2)
d1=d2.c
J.br(d1.save())
d1.clipRRect(B.n2(c0),$.mH(),!0)
t=c0.a
q=c0.b
d1.translate(t,q)
L.M9(d2,new B.av(c0.c-t,c0.d-q),d4,!1,c5,c5)
d1.restore()}d2.aq(c9.$5(-26,-4,52,24,6),d0.$3(D.fbJ,A.hY,A.cZ))
d2.O(D.aMz,7,c7.$1(A.av))
d2.O(D.aMz,4,c7.$1(c6?A.eg:A.cu))
for(v=0;v<4;++v){d1=-20+v*4
d2.ah(new B.r(d1,2),new B.r(d1,14),c8.$2(A.dC,1))}return!0
case"carscreen":d2.aq(c9.$5(-34,-10,68,32,12),c7.$1(A.av))
c1=c9.$5(-30,-20,60,28,8)
d2.aq(c1,c7.$1(M.nz))
d2.aq(c1,c8.$2(A.bw,1.2))
if(c6){c2=new B.aI($.S().r,A.aj,c5,c5,B.a([],x.v))
c2.E(new B.aZ(-26,4))
c2.E(new B.cc(-10,-14+Math.sin(d4)*3,6,-6))
c2.E(new B.aq(22,-16))
d2.ag(c2,c8.$2(A.aG,2.2))
d1=A.j.F(d4*6,48)
d2.O(new B.r(-26+d1,4-d1*0.1),2.4,c7.$1(A.bc))
d5.$5(d2,""+(88+A.o.F(A.j.bi(d4*2),5)),H.aMT,A.c,10)
d5.$5(d2,"km/h",D.esr,A.aE,5)}return!0
case"vision":c3=c9.$5(-32,-14,64,28,13)
d2.aq(c3,d0.$3(new B.a6(c3.a,c3.b,c3.c,c3.d),A.cZ,A.cP))
c4=c9.$5(-29,-11,58,22,10)
if(c6){d1=d2.c
J.br(d1.save())
d1.clipRRect(B.n2(c4),$.mH(),!0)
t=c4.a
q=c4.b
d1.translate(t,q)
L.M9(d2,new B.av(c4.c-t,c4.d-q),d4,!1,c5,c5)
d1.restore()
d1=c7.$1(A.bd.j(0.2))
d1.y=A.mh
d2.O(A.J,26,d1)}else d2.aq(c4,c7.$1(A.a_))
d2.ah(D.eur,D.euw,c8.$2(A.bh,4))
d2.ah(D.erD,D.erT,c8.$2(A.bh,4))
return!0}return!1},
fXc:function fXc(){},
fXe:function fXe(){},
fXf:function fXf(){},
fXd:function fXd(){},
hly(d,e,f,g){return new C.ak4(d,g,f,e)},
Go(d,e,f){return new C.bdh(d,e,f)},
ak4:function ak4(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
ak5:function ak5(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.h7$=i
_.m8$=j
_.fb$=k
_.h8$=l
_.bw$=m
_.a9$=n
_.c=_.a=null},
bKc:function bKc(d,e){this.a=d
this.b=e},
bKd:function bKd(d){this.a=d},
bKb:function bKb(d){this.a=d},
bKe:function bKe(){},
bKf:function bKf(d){this.a=d},
bKg:function bKg(d,e,f){this.a=d
this.b=e
this.c=f},
bKa:function bKa(d,e){this.a=d
this.b=e},
bK7:function bK7(d,e){this.a=d
this.b=e},
bK8:function bK8(d,e,f){this.a=d
this.b=e
this.c=f},
bK1:function bK1(d,e){this.a=d
this.b=e},
bK2:function bK2(){},
bK9:function bK9(d,e,f){this.a=d
this.b=e
this.c=f},
bK6:function bK6(d,e){this.a=d
this.b=e},
bK3:function bK3(d,e){this.a=d
this.b=e},
bK4:function bK4(d,e){this.a=d
this.b=e},
bK5:function bK5(d){this.a=d},
bKw:function bKw(d){this.a=d},
bKx:function bKx(){},
bJC:function bJC(){},
bKy:function bKy(d,e){this.a=d
this.b=e},
bKv:function bKv(d,e){this.a=d
this.b=e},
bKq:function bKq(d){this.a=d},
bKn:function bKn(d,e,f){this.a=d
this.b=e
this.c=f},
bKo:function bKo(d,e){this.a=d
this.b=e},
bKr:function bKr(d){this.a=d},
bKl:function bKl(d,e){this.a=d
this.b=e},
bKm:function bKm(d,e){this.a=d
this.b=e},
bKp:function bKp(d){this.a=d},
bKs:function bKs(d){this.a=d},
bKi:function bKi(d,e){this.a=d
this.b=e},
bKj:function bKj(d,e){this.a=d
this.b=e},
bKk:function bKk(d,e){this.a=d
this.b=e},
bKt:function bKt(d){this.a=d},
bKh:function bKh(d){this.a=d},
bKu:function bKu(d){this.a=d},
bJD:function bJD(d,e){this.a=d
this.b=e},
bJZ:function bJZ(d,e){this.a=d
this.b=e},
bK0:function bK0(d,e){this.a=d
this.b=e},
bK_:function bK_(d,e){this.a=d
this.b=e},
bJY:function bJY(){},
bJK:function bJK(d){this.a=d},
bJJ:function bJJ(d){this.a=d},
bJL:function bJL(d,e){this.a=d
this.b=e},
bJM:function bJM(d){this.a=d},
bJI:function bJI(d){this.a=d},
bJQ:function bJQ(d,e,f){this.a=d
this.b=e
this.c=f},
bJH:function bJH(d,e){this.a=d
this.b=e},
bJR:function bJR(d,e){this.a=d
this.b=e},
bJS:function bJS(d,e){this.a=d
this.b=e},
bJT:function bJT(d,e){this.a=d
this.b=e},
bJU:function bJU(d,e,f){this.a=d
this.b=e
this.c=f},
bJG:function bJG(d,e){this.a=d
this.b=e},
bJV:function bJV(d,e,f){this.a=d
this.b=e
this.c=f},
bJF:function bJF(d,e){this.a=d
this.b=e},
bJW:function bJW(d,e,f){this.a=d
this.b=e
this.c=f},
bJE:function bJE(d,e){this.a=d
this.b=e},
bJX:function bJX(d){this.a=d},
bJN:function bJN(d){this.a=d},
bJO:function bJO(d){this.a=d},
bJP:function bJP(d){this.a=d},
bdh:function bdh(d,e,f){this.a=d
this.b=e
this.c=f},
ftr:function ftr(){},
fts:function fts(){},
ftt:function ftt(){},
fte:function fte(){},
ftu:function ftu(){},
ftd:function ftd(){},
ftv:function ftv(){},
fti:function fti(){},
ftc:function ftc(){},
ftj:function ftj(){},
ftb:function ftb(){},
ftk:function ftk(){},
fta:function fta(){},
ftl:function ftl(){},
ft8:function ft8(){},
ft9:function ft9(){},
ftm:function ftm(){},
ft6:function ft6(){},
ft7:function ft7(){},
ftn:function ftn(){},
ft5:function ft5(){},
Wl:function Wl(d){this.a=d},
aFh:function aFh(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
e1p:function e1p(d,e){this.a=d
this.b=e},
e1y:function e1y(d){this.a=d},
e1z:function e1z(){},
e1A:function e1A(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1B:function e1B(){},
e1o:function e1o(d){this.a=d},
e1n:function e1n(d,e,f){this.a=d
this.b=e
this.c=f},
e1m:function e1m(d,e){this.a=d
this.b=e},
e1k:function e1k(d){this.a=d},
e1l:function e1l(){},
e1x:function e1x(d){this.a=d},
e1w:function e1w(d){this.a=d},
e1u:function e1u(d,e){this.a=d
this.b=e},
e1s:function e1s(d){this.a=d},
e1t:function e1t(){},
e1v:function e1v(d,e,f){this.a=d
this.b=e
this.c=f},
e1q:function e1q(d,e){this.a=d
this.b=e},
e1r:function e1r(){},
e1D:function e1D(d){this.a=d},
e1E:function e1E(d,e){this.a=d
this.b=e},
e1C:function e1C(){},
e1F:function e1F(d,e){this.a=d
this.b=e},
e1G:function e1G(d){this.a=d},
e1H:function e1H(d){this.a=d},
azi:function azi(d,e){this.c=d
this.a=e},
bbp:function bbp(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
cLM:function cLM(d){this.a=d},
bbo:function bbo(d,e){this.b=d
this.a=e},
cLL:function cLL(d){this.a=d},
azD:function azD(){},
azE:function azE(){},
aLP:function aLP(){},
bA2:function bA2(){},
isc(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bW(A.vA,23)
$.S()
b8=B.L()
b8.r=A.av.gp(0)
b9.O(A.vA,25,b8)
b8=B.L()
b8.sap(D.eDz.aG(0,v))
b9.O(A.vA,23,b8)
for(u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
b8=Math.cos(t)
s=Math.sin(t)
r=Math.cos(t)
q=Math.sin(t)
p=new B.ar(A.S,A.Q,A.W,A.X,A.U)
p.r=A.bp.gp(0)
p.c=A.o.F(u,5)===0?1.8:1
b9.ah(new B.r(b8*17,s*17-2),new B.r(r*21,q*21-2),p)}o=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.j.D(o/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=B.L()
r.r=A.bG.gp(0)
r.c=2
r.d=A.bF
b9.ah(A.vA,new B.r(b8*18,s*18-2),r)
r=B.L()
r.r=A.bp.gp(0)
b9.O(A.vA,3,r)
c2.$5(b9,w?"V":"A",D.euz,A.bp,12)
c2.$5(b9,w?A.j.ad(o,1)+" V":""+A.j.V(o*1000)+" mA",D.etW,A.av,9.5)
return!0
case"fan":b8=B.bx(D.fbb,A.iD)
$.S()
s=B.L()
s.r=A.bw.gp(0)
b9.aq(b8,s)
s=B.L()
s.r=A.an.gp(0)
b9.aD(D.fc2,s)
s=B.L()
s.r=A.a_.j(0.6).gp(0)
b9.O(H.vB,22,s)
for(b8=b9.c,u=0;u<4;++u){J.br(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.bS(A.aMr,18,10)
r=new B.ar(A.S,A.Q,A.W,A.X,A.U)
r.r=A.hJ.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
b9.c2(s,r)
b8.restore()}b8=B.L()
b8.r=A.bs.gp(0)
b9.O(H.vB,4,b8)
b8=B.L()
b8.b=A.aa
b8.c=2
b8.r=A.cC.gp(0)
b9.O(H.vB,22,b8)
b8=B.L()
b8.b=A.aa
b8.c=0.8
b8.r=A.k0.gp(0)
b9.O(H.vB,14,b8)
return!0
case"speaker":n=B.bx(D.aSF,A.r7)
$.S()
b8=B.L()
b8.sap(D.atT.aG(0,new B.a6(n.a,n.b,n.c,n.d)))
b9.aq(n,b8)
m=b7?Math.sin(c1*40)*1.6:0
b8=B.L()
b8.sap(D.eDV.aG(0,B.bW(A.cy,15)))
b9.O(A.cy,14+m,b8)
b8=B.L()
b8.r=A.cZ.gp(0)
b9.O(A.cy,5,b8)
b8=B.L()
b8.r=A.bh.gp(0)
b9.O(H.a97,5+m*0.4,b8)
if(b7)for(b8=c1*18,u=1;u<=3;++u){s=B.bW(D.erc,6+u*6+A.j.F(b8,6))
r=new B.ar(A.S,A.Q,A.W,A.X,A.U)
r.b=A.aa
r.c=1.8
r.r=A.c4.j(0.9-u*0.2).gp(0)
b9.cP(s,-0.8,1.6,!1,r)}return!0
case"clock":l=B.bx(D.fbU,A.r7)
$.S()
b8=B.L()
b8.sap(D.c9Y.aG(0,new B.a6(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
b8=B.bx(D.aSH,A.jy)
s=B.L()
s.r=A.i8.gp(0)
b9.aq(b8,s)
if(b7){k=new B.V(Date.now(),0,!1)
j=B.FI(k)<500?":":" "
i=A.a.b_(A.o.v(B.df(k)),2,"0")
h=A.a.b_(A.o.v(B.fS(k)),2,"0")
b8=B.L()
b8.r=A.bc.j(0.12).gp(0)
b9.aD(D.aSH,b8)
c2.$5(b9,i+j+h,D.euh,A.bc,21)}b8=B.L()
b8.r=A.cC.gp(0)
b9.O(D.euf,2.4,b8)
b8=B.L()
b8.r=A.cC.gp(0)
b9.O(D.erh,2.4,b8)
return!0
case"calculator":l=B.bx(D.fbz,A.io)
$.S()
b8=B.L()
b8.sap(D.c9G.aG(0,new B.a6(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
b8=B.bx(D.fbs,A.hB)
s=B.L()
s.r=(b7?A.a_3:D.btq).gp(0)
b9.aq(b8,s)
if(b7)c2.$5(b9,"3.14159",D.etV,A.YH,10.5)
for(g=0;g<4;++g)for(b8=-6+g*8,s=b8+6,f=0;f<4;++f){r=-15+f*8
r=B.bx(new B.a6(r,b8,r+6,s),A.US)
$.S()
q=new B.ar(A.S,A.Q,A.W,A.X,A.U)
q.r=(f===3?A.c8:A.bO).gp(0)
b9.aq(r,q)}return!0
case"phone":l=B.bx(D.fbn,A.io)
$.S()
b8=B.L()
b8.r=M.nz.gp(0)
b9.aq(l,b8)
b8=B.L()
b8.b=A.aa
b8.c=1.9
b8.r=D.al4.gp(0)
b9.aq(l,b8)
e=B.bx(D.fbd,A.iD)
if(b7){b8=B.L()
b8.sap(D.cbh.aG(0,new B.a6(e.a,e.b,e.c,e.d)))
b9.aq(e,b8)
b8=b9.c
J.br(b8.save())
b8.clipRRect(B.n2(e),$.mH(),!0)
b8.translate(-12,-25)
L.M9(b9,D.fif,c1,!1,b6,b6)
b8.restore()
d=A.j.F(c1*0.12,1)
b8=B.bx(D.fba,A.hB)
s=B.L()
s.r=A.b6.gp(0)
b9.aq(b8,s)
s=B.L()
s.r=A.bc.gp(0)
b9.aD(new B.a6(-10,14.5,-10+20*d,16.9),s)
c2.$5(b9,"\u26a1"+A.j.V(d*100)+"%",D.esY,A.c,6)}else{b8=B.L()
b8.r=D.wm.gp(0)
b9.aq(e,b8)}b8=B.bx(D.fci,D.eE2)
s=B.L()
s.r=A.w.gp(0)
b9.aq(b8,s)
return!0
case"router":l=B.bx(D.fbT,A.o_)
$.S()
b8=B.L()
b8.sap(D.cae.aG(0,new B.a6(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
for(a0=0;a0<2;++a0){a1=F.SW[a0]
b8=a1<0?-4:4
s=new B.ar(A.S,A.Q,A.W,A.X,A.U)
s.r=A.cu.gp(0)
s.c=4
s.d=A.bF
b9.ah(new B.r(a1,-4),new B.r(a1+b8,-28),s)}for(u=0;u<4;++u){if(b7)a2=A.o.F(A.j.bi(c1*(3+u*1.3)),2)===0||u===0
else a2=!1
b8=new B.ar(A.S,A.Q,A.W,A.X,A.U)
b8.r=(a2?A.bg:A.aM).gp(0)
b9.O(new B.r(-15+u*10,11),2.6,b8)}if(b7)for(b8=c1*10,u=1;u<=3;++u){s=B.bW(H.vB,8+u*6+A.j.F(b8,6))
r=new B.ar(A.S,A.Q,A.W,A.X,A.U)
r.b=A.aa
r.c=1.8
r.r=A.fI.j(0.9-u*0.2).gp(0)
b9.cP(s,-2.3,1.5,!1,r)}return!0
case"siren":a3=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bx(D.fby,A.iD)
s=$.S()
r=B.L()
r.r=A.cP.gp(0)
b9.aq(b8,r)
if(b7){b8=B.L()
b8.r=A.aA.j(0.5*a3).gp(0)
b8.y=A.z1
b9.O(A.vA,34,b8)}a4=new B.aI(s.r,A.aj,b6,b6,B.a([],x.v))
a4.E(new B.aZ(-16,12))
a4.E(new B.aq(-16,-2))
a4.E(new B.cc(0,-30,16,-2))
a4.E(new B.aq(16,12))
a4.E(new B.bw())
b8=B.L()
b8.r=B.ap(A.er,D.bkd,a3).gp(0)
b9.ag(a4,b8)
b8=B.L()
b8.b=A.aa
b8.c=1.4
b8.r=A.bV.gp(0)
b9.ag(a4,b8)
if(b7){b8=b9.c
J.br(b8.save())
b8.translate(0,-2)
b9.jr(0,c1*7)
s=B.L()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.ah(A.J,H.a97,s)
b8.restore()}return!0
case"toycar":a5=b7?Math.sin(c1*30)*0.8:0
b8=b9.c
J.br(b8.save())
b8.translate(0,a5)
s=$.S().r
r=x.v
l=new B.aI(s,A.aj,b6,b6,B.a([],r))
l.E(new B.aZ(-28,8))
l.E(new B.aq(-28,-2))
l.E(new B.aq(-16,-4))
l.E(new B.aq(-10,-16))
l.E(new B.aq(10,-16))
l.E(new B.aq(18,-4))
l.E(new B.aq(28,-2))
l.E(new B.aq(28,8))
l.E(new B.bw())
q=B.L()
q.sap(D.c8c.aG(0,D.fbM))
b9.ag(l,q)
q=new B.aI(s,A.aj,b6,b6,B.a([],r))
q.E(new B.aZ(-8,-4))
q.E(new B.aq(-4,-13))
q.E(new B.aq(4,-13))
q.E(new B.aq(4,-4))
q.E(new B.bw())
p=B.L()
p.r=A.fK.gp(0)
b9.ag(q,p)
r=new B.aI(s,A.aj,b6,b6,B.a([],r))
r.E(new B.aZ(8,-4))
r.E(new B.aq(8,-13))
r.E(new B.aq(11,-13))
r.E(new B.aq(15,-4))
r.E(new B.bw())
s=B.L()
s.r=A.fK.gp(0)
b9.ag(r,s)
for(a0=0;a0<2;++a0){a1=F.aDd[a0]
s=new B.ar(A.S,A.Q,A.W,A.X,A.U)
s.r=A.av.gp(0)
b9.O(new B.r(a1,10),7.5,s)
J.br(b8.save())
b8.translate(a1,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.ar(A.S,A.Q,A.W,A.X,A.U)
q.r=A.bO.gp(0)
q.c=1.6
b9.ah(A.J,new B.r(r*5.5,s*5.5),q)}b8.restore()}b8.restore()
if(b7)for(b8=c1*40,u=0;u<3;++u){s=A.j.F(b8+u*8,14)
r=-4+u*5
q=new B.ar(A.S,A.Q,A.W,A.X,A.U)
q.r=A.aE.gp(0)
q.c=1.6
b9.ah(new B.r(-34-s,r),new B.r(-42-s,r),q)}return!0
case"kettle":b8=$.S().r
s=x.v
l=new B.aI(b8,A.aj,b6,b6,B.a([],s))
l.E(new B.aZ(-18,20))
l.E(new B.aq(-14,-12))
l.E(new B.cc(0,-20,14,-12))
l.E(new B.aq(18,20))
l.E(new B.bw())
r=B.L()
r.sap(D.c9k.aG(0,D.fbx))
b9.ag(l,r)
r=new B.aI(b8,A.aj,b6,b6,B.a([],s))
r.E(new B.aZ(14,-10))
r.E(new B.aq(30,-22))
r.E(new B.aq(32,-18))
r.E(new B.aq(16,-4))
r.E(new B.bw())
q=B.L()
q.r=A.dY.gp(0)
b9.ag(r,q)
s=new B.aI(b8,A.aj,b6,b6,B.a([],s))
s.E(new B.aZ(-14,-8))
s.E(new B.cc(-34,-6,-18,12))
b8=B.L()
b8.b=A.aa
b8.c=5
b8.r=A.av.gp(0)
b9.ag(s,b8)
b8=B.L()
if(b7){s=B.ap(A.cN,A.uw,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.cP
b8.r=s.gp(0)
b9.aD(D.fbw,b8)
if(b7){b8=B.L()
b8.r=A.cN.j(0.3).gp(0)
b8.y=A.mh
b9.O(A.aMp,24,b8)
for(b8=c1*0.9,u=0;u<4;++u){a6=A.j.F(b8+u*0.25,1)
s=Math.sin(a6*9+u)
r=new B.ar(A.S,A.Q,A.W,A.X,A.U)
r.r=A.c.j(0.6*(1-a6)).gp(0)
b9.O(new B.r(30+s*4,-26-a6*26),3+a6*5,r)}}b8=B.L()
b8.r=A.av.gp(0)
b9.O(D.eqf,3,b8)
return!0
case"lamp":if(b7){u=A.j.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aI($.S().r,A.aj,b6,b6,B.a([],x.v))
b8.E(new B.aZ(-10,-14))
b8.E(new B.aq(-30,24))
b8.E(new B.aq(10,24))
b8.E(new B.aq(8,-14))
b8.E(new B.bw())
s=B.L()
s.r=A.eg.j(0.28*u).gp(0)
b9.ag(b8,s)
s=B.L()
s.r=A.eg.j(0.5*u).gp(0)
s.y=U.OI
b9.O(D.eul,24,s)}b8=B.bx(D.fcb,A.iD)
s=$.S()
r=B.L()
r.r=A.cP.gp(0)
b9.aq(b8,r)
r=B.L()
r.r=A.cZ.gp(0)
r.c=3
r.d=A.bF
b9.ah(D.eqv,D.aMC,r)
r=B.L()
r.r=A.cZ.gp(0)
r.c=3
r.d=A.bF
b9.ah(D.aMC,D.eum,r)
a7=new B.aI(s.r,A.aj,b6,b6,B.a([],x.v))
a7.E(new B.aZ(-14,-16))
a7.E(new B.aq(6,-26))
a7.E(new B.aq(10,-12))
a7.E(new B.aq(-10,-6))
a7.E(new B.bw())
s=B.L()
s.r=(b7?A.aQ:A.k1).gp(0)
b9.ag(a7,s)
b8=B.L()
b8.r=(b7?A.c:A.bh).gp(0)
b9.O(D.eup,4,b8)
return!0
case"lights":b8=$.S().r
s=x.v
a8=new B.aI(b8,A.aj,b6,b6,B.a([],s))
a8.E(new B.aZ(-34,-6))
a8.E(new B.cc(0,22,34,-6))
r=B.L()
r.b=A.aa
r.c=2
r.r=A.hG.gp(0)
b9.ag(a8,r)
for(r=c1*2.4,u=0;u<5;++u){a9=(u+0.5)/5
q=-34+68*a9
p=-6+4*a9*(1-a9)*4*4.2/1*0.75+0
b0=b7&&A.j.F(r+u*0.7,1.8)<1.1
if(b0){b1=new B.ar(A.S,A.Q,A.W,A.X,A.U)
b1.r=D.a5P[u].j(0.6).gp(0)
b1.y=A.Hi
b9.O(new B.r(q+0,p+6),12,b1)}b1=B.a([],s)
b2=new B.aI(b8,A.aj,b6,b6,b1)
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
q=new B.cc(q,p+17,q-5,b3)
b1.push(q)
p=b2.f
if(p!=null)q.ak(p)
b2.ab()
q=new B.bw()
b1.push(q)
p=b2.f
if(p!=null)q.ak(p)
b2.ab()
q=new B.ar(A.S,A.Q,A.W,A.X,A.U)
if(b0)p=D.a5P[u]
else{p=B.ap(D.a5P[u],A.w,0.65)
p.toString}q.r=p.gp(0)
b9.ag(b2,q)}return!0}return C.isb(b9,c0,c1,c2)},
fT:function fT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hgA(d){var w=D.mw.h(0,d)
return(w==null?null:w.b)===D.AH},
itr(d,e,f){return B.a5(d,!1).ce(B.vj(null,!1,!0,!0,new C.h1h(e,f),A.eU,null,A.pt,new C.h1i(),x.H))},
Kf:function Kf(d,e){this.a=d
this.b=e},
mx:function mx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h1h:function h1h(d,e){this.a=d
this.b=e},
h1i:function h1i(){},
W4:function W4(d,e,f){this.c=d
this.d=e
this.a=f},
bm5:function bm5(d,e){var _=this
_.d=$
_.e=null
_.bw$=d
_.a9$=e
_.c=_.a=null},
dYz:function dYz(d){this.a=d},
dYy:function dYy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dYw:function dYw(){},
dYx:function dYx(d){this.a=d},
dYv:function dYv(d){this.a=d},
dYu:function dYu(d,e){this.a=d
this.b=e},
dYt:function dYt(d,e){this.a=d
this.b=e},
dYs:function dYs(d){this.a=d},
dYr:function dYr(d){this.a=d},
dYn:function dYn(d){this.a=d},
dYm:function dYm(d){this.a=d},
dYq:function dYq(d,e,f){this.a=d
this.b=e
this.c=f},
dYp:function dYp(d){this.a=d},
dYo:function dYo(d){this.a=d},
by4:function by4(d,e,f){this.b=d
this.c=e
this.a=f},
afX:function afX(d,e,f){this.b=d
this.c=e
this.a=f},
aND:function aND(){},
a28(d,e,f,g,h,i){return new C.bwR(d,e,f,g,h,i)},
bwR:function bwR(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ftW:function ftW(){},
ftX:function ftX(){},
ftY:function ftY(){},
ftZ:function ftZ(){},
fu_:function fu_(){},
fu0:function fu0(){},
fu1:function fu1(){},
fu2:function fu2(){},
a9A:function a9A(d){this.a=d},
cn4:function cn4(d){this.a=d},
cn5:function cn5(){},
cn3:function cn3(d,e){this.a=d
this.b=e},
cn2:function cn2(d){this.a=d},
XH:function XH(d){this.a=d},
aGN:function aGN(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.h7$=f
_.m8$=g
_.fb$=h
_.h8$=i
_.bw$=j
_.a9$=k
_.c=_.a=null},
eVo:function eVo(d){this.a=d},
eVk:function eVk(d){this.a=d},
eVj:function eVj(d,e){this.a=d
this.b=e},
eVm:function eVm(d,e){this.a=d
this.b=e},
eVl:function eVl(d,e){this.a=d
this.b=e},
eVn:function eVn(d){this.a=d},
byg:function byg(d,e,f){this.b=d
this.c=e
this.a=f},
Wt:function Wt(d){this.a=d},
bmg:function bmg(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.h7$=d
_.m8$=e
_.fb$=f
_.h8$=g
_.bw$=h
_.a9$=i
_.c=_.a=null},
e4o:function e4o(){},
e4p:function e4p(){},
e4j:function e4j(d,e){this.a=d
this.b=e},
e4l:function e4l(d,e){this.a=d
this.b=e},
e4m:function e4m(d){this.a=d},
e4k:function e4k(d){this.a=d},
e4n:function e4n(d){this.a=d},
bsX:function bsX(d,e,f){this.b=d
this.c=e
this.a=f},
VE:function VE(d){this.a=d},
blP:function blP(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.h7$=d
_.m8$=e
_.fb$=f
_.h8$=g
_.bw$=h
_.a9$=i
_.c=_.a=null},
dPR:function dPR(){},
dPS:function dPS(){},
dPM:function dPM(){},
dPP:function dPP(d,e){this.a=d
this.b=e},
dPO:function dPO(d,e){this.a=d
this.b=e},
dPQ:function dPQ(d){this.a=d},
dPN:function dPN(d){this.a=d},
aKe:function aKe(d,e,f){this.a=d
this.b=e
this.c=f},
Wk:function Wk(d){this.a=d},
bm7:function bm7(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
e0U:function e0U(d,e){this.a=d
this.b=e},
e0V:function e0V(d){this.a=d},
e0T:function e0T(d,e){this.a=d
this.b=e},
e0W:function e0W(d){this.a=d},
e0S:function e0S(d,e){this.a=d
this.b=e},
e0X:function e0X(d){this.a=d},
e0R:function e0R(d,e){this.a=d
this.b=e},
e0Y:function e0Y(d,e){this.a=d
this.b=e},
e0Q:function e0Q(d,e){this.a=d
this.b=e},
e0Z:function e0Z(d){this.a=d},
e0P:function e0P(d,e){this.a=d
this.b=e},
e1_:function e1_(d){this.a=d},
e0O:function e0O(d){this.a=d},
e10:function e10(d){this.a=d},
e0N:function e0N(d){this.a=d},
e11:function e11(d){this.a=d},
e12:function e12(d){this.a=d},
e0M:function e0M(d){this.a=d},
bo9:function bo9(d,e,f){this.b=d
this.c=e
this.a=f},
X3:function X3(d){this.a=d},
aG5:function aG5(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
erT:function erT(d,e){this.a=d
this.b=e},
erU:function erU(d,e,f){this.a=d
this.b=e
this.c=f},
erS:function erS(d,e,f){this.a=d
this.b=e
this.c=f},
erV:function erV(d){this.a=d},
erR:function erR(d){this.a=d},
erZ:function erZ(d){this.a=d},
erY:function erY(d,e){this.a=d
this.b=e},
erX:function erX(d,e){this.a=d
this.b=e},
es_:function es_(d,e){this.a=d
this.b=e},
erW:function erW(d,e){this.a=d
this.b=e},
es0:function es0(d){this.a=d},
Xd:function Xd(d){this.a=d},
aGq:function aGq(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eCF:function eCF(d){this.a=d},
eCG:function eCG(d){this.a=d},
eCD:function eCD(d,e){this.a=d
this.b=e},
eCE:function eCE(d){this.a=d},
eCC:function eCC(d){this.a=d},
eCH:function eCH(d){this.a=d},
eCI:function eCI(d){this.a=d},
eCJ:function eCJ(d){this.a=d},
eCK:function eCK(d,e){this.a=d
this.b=e},
Xy:function Xy(d){this.a=d},
bnn:function bnn(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eQH:function eQH(){},
eQQ:function eQQ(){},
eQM:function eQM(d){this.a=d},
eQL:function eQL(){},
eQN:function eQN(d,e){this.a=d
this.b=e},
eQK:function eQK(d,e){this.a=d
this.b=e},
eQO:function eQO(d){this.a=d},
eQJ:function eQJ(d,e){this.a=d
this.b=e},
eQP:function eQP(d){this.a=d},
eQI:function eQI(d){this.a=d},
X2:function X2(d){this.a=d},
bmS:function bmS(d,e,f,g,h,i,j,k){var _=this
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
_.h7$=f
_.m8$=g
_.fb$=h
_.h8$=i
_.bw$=j
_.a9$=k
_.c=_.a=null},
eqy:function eqy(){},
eqz:function eqz(){},
eqr:function eqr(d){this.a=d},
eqq:function eqq(d){this.a=d},
eqs:function eqs(d){this.a=d},
eqp:function eqp(d){this.a=d},
eqt:function eqt(d){this.a=d},
eqo:function eqo(d){this.a=d},
equ:function equ(d,e){this.a=d
this.b=e},
eqn:function eqn(d,e){this.a=d
this.b=e},
eqv:function eqv(d){this.a=d},
eqm:function eqm(d,e){this.a=d
this.b=e},
eqw:function eqw(d){this.a=d},
eql:function eql(d,e){this.a=d
this.b=e},
eqx:function eqx(d){this.a=d},
eqk:function eqk(d,e){this.a=d
this.b=e},
bfH:function bfH(d,e,f){this.c=d
this.d=e
this.a=f},
aNp:function aNp(){},
bzZ:function bzZ(){},
aNK:function aNK(){},
bA4:function bA4(){},
aOc:function aOc(){},
bAd:function bAd(){},
aOD:function aOD(){},
bAm:function bAm(){},
JL(d,e,f,g){var w,v,u,t,s,r,q,p=$.atE
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.I)(e),++w)E.mv(d,e[w],f,g)
return}for(p=B.cX(e,0,B.dC(4,"count",x.S),B.U(e).c),v=p.$ti,p=new B.bQ(p,p.gJ(0),v.k("bQ<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)E.mv(d,s,f,g)
else B.bN(new B.bd(1000*q),new C.cn0(d,s,f,g),u)}},
ckz(d){return C.hZf(d)},
hZf(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ckz=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$ckz)
case 7:r=f
q=B.aV(J.t(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.T(x.N,x.z)
w=1
break}p=A.V.aP(0,q,null)
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
return B.i($async$ckz,v)},
b3m(d,e){return C.hZg(d,e)},
hZg(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b3m=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$b3m)
case 6:s=g
w=7
return B.b(s.aC("String","ngmy_play_progress_v1_"+d,A.V.av(e,null)),$async$b3m)
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
return B.i($async$b3m,v)},
cn0:function cn0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ijb(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.T(x.Y,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.x)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.I)(w),++q){p=w[q]
u.push(B.J(["k",p.b,"x",B.oq(A.j.ad(p.c,4)),"y",B.oq(A.j.ad(p.d,4)),"v",p.e,"l",B.oq(A.j.ad(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.oq(A.j.ad(p.as,3)),"ch",p.at,"vc",B.oq(A.j.ad(p.z,3)),"s",B.oq(A.j.ad(p.ch,2))],s,r))}w=B.a([],x.U)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.I)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.C(f,B.a3(f).k("ci.E"))
A.d.fg(l)
return A.V.av(B.J(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
isB(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.V.aP(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a8(h)
A.d.a8(a6.b)
v=B.a([],x.fs)
g=x.L
f=g.a(J.t(w,"parts"))
f=J.aT(f==null?A.cs:f)
while(f.C()){u=f.gR(f)
t=i.a(u)
e=B.aV(J.t(t,"k"))
s=e==null?"":e
if(!$.qG().am(0,s)){J.c5(v,null)
continue}d=s
a0=B.aJ(J.t(t,"x"))
if(a0==null)a0=0.5
a1=B.aJ(J.t(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.u0(a2,d,a0,a1)
a3.asi(a2,d,a0,a1)
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
d=B.k6(J.t(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.k6(J.t(t,"b"))
r.x=d===!0
d=B.aV(J.t(t,"bw"))
if(d==null)d=""
r.ay=d
d=B.aJ(J.t(t,"c"))
if(d==null)d=r.as
r.as=d
d=B.aJ(J.t(t,"ch"))
r.at=A.j.M(d==null?0:d)
d=B.aJ(J.t(t,"vc"))
if(d==null)d=0
r.z=d
d=B.aJ(J.t(t,"s"))
r.ch=A.j.D(d==null?1:d,1,5.2)
J.c5(v,r)}i=g.a(J.t(w,"wires"))
i=J.aT(i==null?A.cs:i)
h=x.j
while(i.C()){q=i.gR(i)
p=h.a(q)
f=B.aJ(J.t(p,0))
o=f==null?a5:A.j.M(f)
f=B.aJ(J.t(p,2))
n=f==null?a5:A.j.M(f)
if(o==null||n==null||o<0||n<0||o>=J.ad(v)||n>=J.ad(v))continue
m=J.t(v,o)
l=J.t(v,n)
if(m!=null&&l!=null)a6.ame(m,A.j.M(B.dE(J.t(p,1))),l,A.j.M(B.dE(J.t(p,3))))}i=B.aJ(J.t(w,"challenge"))
i=A.j.M(i==null?0:i)
k=B.aR(x.S)
h=g.a(J.t(w,"done"))
h=J.aT(h==null?A.cs:h)
while(h.C()){j=h.gR(h)
J.c5(k,A.j.M(B.dE(j)))}return new B.br6(i,k)}catch(a4){return a5}},
fKT(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fKT=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.aA(),$async$fKT)
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
return B.i($async$fKT,v)},
bGL(d){return C.iue(d)},
iue(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bGL=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.aA(),$async$bGL)
case 7:w=6
return B.b(f.aC("String","ngmy_electronics_lab_v1",d),$async$bGL)
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
return B.i($async$bGL,v)}},D,T,A1,Al,L,F,M,H,Am,X,An,Y,A2,Ao
J=c[1]
B=c[0]
A=c[2]
A3=c[120]
Z=c[146]
A4=c[152]
A_=c[150]
R=c[143]
A5=c[135]
A6=c[155]
A7=c[163]
A8=c[107]
A9=c[137]
A0=c[119]
N=c[145]
Aa=c[161]
Ab=c[153]
Ac=c[157]
Ad=c[76]
U=c[141]
S=c[85]
Ae=c[88]
O=c[130]
Af=c[114]
V=c[144]
W=c[156]
E=c[29]
I=c[3]
G=c[38]
K=c[109]
Ag=c[103]
Ah=c[162]
Ai=c[102]
P=c[160]
Aj=c[158]
Q=c[131]
Ak=c[159]
C=a.updateHolder(c[18],C)
D=c[140]
T=c[154]
A1=c[148]
Al=c[26]
L=c[28]
F=c[100]
M=c[98]
H=c[142]
Am=c[67]
X=c[149]
An=c[57]
Y=c[111]
A2=c[151]
Ao=c[147]
C.ali.prototype={}
C.WN.prototype={
S(){return new C.bmG(B.T(x.N,x.i),new B.au(A.ax,$.ax()),B.a([],x.X),B.a([],x.eZ),B.mZ(0,null,null))}}
C.bmG.prototype={
gX9(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
t(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
this.ch.t()
this.a2()},
PW(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$PW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aU.ao$.d.c
if(s!=null)s.js()
p.bP(0,A.cf)
t.m(new C.ejE(t))
t.a.toString
p=t.gX9()
w=3
return B.b(C.bCg(C.i7b(q,C.iiX(p),o,t.ay)),$async$PW)
case 3:s=e
r=s==null?null:J.j_(s)
if(r==null||r.length===0||A.a.a_(r,"{"))r=C.ikt(q,p,o)
if(t.c==null){w=1
break}t.m(new C.ejF(t,o,r))
$.aU.x1$.push(new C.ejG(t))
case 1:return B.h(u,v)}})
return B.i($async$PW,v)},
Zg(d){return this.c3v(d)},
aYH(){return this.Zg(null)},
c3v(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Zg=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aU.ao$.d.c
if(s!=null)s.js()
t.f.sb1(0,o)
t.m(new C.ejR(t))
G.dz(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bCg(C.iec(o)),$async$Zg)
case 3:r=n.a=m.isg(f)
p.b=""
if(r!=null&&!C.iiY(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.iku(o)
q=B.ag(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.ali(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new C.ejS(p,t))
t.c97(p.a)
case 1:return B.h(u,v)}})
return B.i($async$Zg,v)},
c97(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
A.d.a8(w)
w=++m.as
v=m.gX9()
A.d.a8(v.a)
A.d.a8(v.b)
m.e.a8(0)
m.m(new C.ejN(m))
t=d.d
s=B.T(x.N,x.Y)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.ejL(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.ejO(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.I)(r),++u){p.$2(o,new C.ejP(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.ejQ(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bd.j(0.1),g=B.l(16),f=B.K(A.bd.j(0.35),A.r,1)
if(m.x)j=B.A(B.a([D.fjN,A.bb,B.E(B.d(m.Q,l,l,l,l,l,l,A.AU,l,l,l),1)],x.p),A.l,l,A.e,A.h,0,l,l)
else if(k==null)j=D.fL1
else{w=B.E(B.d(k.a,l,l,l,l,l,l,A.L3,l,l,l),1)
v=x.p
w=B.a([B.A(B.a([w,B.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fuW,l,l,l)],v),A.l,l,A.e,A.h,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.D(A.uF,B.d(u,l,l,l,l,l,l,D.fxM,l,l,l),l))
w.push(A.cQ)
w.push(B.d(k.b,l,l,l,l,l,l,K.L6,l,l,l))
u=k.e
if(u.length!==0){t=A.aQ.j(0.12)
s=B.l(10)
w.push(B.p(l,B.d(u,l,l,l,l,l,l,D.fAm,l,l,l),A.f,l,l,new B.o(t,l,l,s,l,l,A.n),l,l,l,A.hZ,A.cp,l,l,l))}w.push(A.am)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
t=B.d(t,l,l,l,l,l,l,A.lY,l,l,l)
q=u[r]
s=s?A.c:A.aE
w.push(new B.D(A.Oa,new B.c7(A.aL,A.e,A.h,A.E,l,A.p,l,0,B.a([t,A.bm,new B.by(1,A.ba,B.d(q,l,l,l,l,l,l,new B.F(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.I)(j),++p){o=j[p]
t=A.bd.j(0.3)
s=new B.aP(12,12)
s=B.p(l,B.d(o.a,l,l,l,l,l,l,A.VQ,l,l,l),A.f,l,l,new B.o(t,l,l,new B.be(s,s,s,s),l,l,A.n),l,l,l,l,A.hk,l,l,l)
t=A.c.j(0.07)
q=new B.aP(12,12)
A.d.u(w,B.a([A.P,new B.bK(A.a9,l,l,s,l),A.aw,B.p(l,B.d(o.b,l,l,l,l,l,l,D.fGd,l,l,l),A.f,l,l,new B.o(t,l,l,new B.be(q,q,q,q),l,l,A.n),l,l,l,l,A.bU,l,l,l)],v))}if(m.ax)w.push(D.evS)
j=B.c9(B.x(w,A.E,l,A.e,A.h,0,A.p),A.t,m.ch,A.y,l,l,l,l,A.ah)}w=x.p
g=B.x(B.a([B.ajw(B.p(l,j,A.f,l,new B.aY(0,1/0,0,i),new B.o(h,l,f,g,l,l,A.n),l,l,l,D.bDe,A.ez,l,l,1/0),A.b0,A.iy),B.E(C.hly(m.gX9(),l,l,m.e),1)],w),A.l,l,A.e,A.h,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new E.dX("Ask about it",i,new C.ejV(m),l,A.bd,l),new E.dX("Invent something new",!i,new C.ejW(m),l,A.bd,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dwi[p]
i.push(new E.dX(n,!1,new C.ejX(m,n),l,A.bd,l))}f.push(new E.fd(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.ddX[p]
i.push(new E.dX(r,!1,new C.ejY(m,r),l,A.bd,l))}f.push(new E.fd(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),m.f,l,l,l,l,l,2,B.bz(l,new B.b6(4,B.l(16),A.a1),l,A.eV,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.ko,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.ejZ(m,k),l,!1,l,l,!1,l,!0,l,A.ad,l,l,l,l,l,l,l,l,l,l,l,A.dj,!0,A.a6,l,A.ao,l,A.VF,l,l),1)
h=m.at
v=h&&j?D.bTk:A.e9
j=h&&j?"Ask":"Invent"
f.push(B.A(B.a([i,A.ae,new E.fE(v,j,new C.ek_(m,k),A.bd,l)],w),A.l,l,A.e,A.h,0,l,l))
return E.lD(A.bd,A.f5,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.x(f,A.l,l,A.e,A.N,0,A.p))}}
C.GT.prototype={}
C.vq.prototype={}
C.X9.prototype={
S(){return new C.aGk(A.J,A.J,A.az,B.aR(x.S),$,A.bC,0,B.a([],x.X),null,null)}}
C.aGk.prototype={
gb__(){var w,v,u,t=this,s=D.IF[t.cx],r=D.SY[t.cy],q=D.DP[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.dZ(w,w.r,B.a3(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.aBu[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cE(p,0,new C.eyZ())},
ga3I(){return D.IF[this.cx].d/this.gb__()},
gaQW(){return 0.1*(D.IF[this.cx].d/0.9)/D.SY[this.cy].d},
Y(){this.a3()
this.mh()
C.ckz("rocket_lander").bG(new C.ezi(this),x.k)},
c9g(){var w=this
w.ay=A.j.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cR.ai()*0.6
w.f=new B.r(0.15+A.cR.ai()*0.7,0.08)
w.r=new B.r((A.cR.ai()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
mB(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new C.ezj())
return}w=D.tt[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.j.D(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.r(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga3I()
v=v.a5(0,new B.r(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaQW())}if(m.dy){t=m.r
v=v.aK(0,t.aM(0,t.gcJ()*6*D.aDx[m.d]))}t=m.r=m.r.a5(0,v.aM(0,d))
s=m.f=m.f.a5(0,t.aM(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new B.r(-t.a*0.4,t.b)
t=new B.r(A.j.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new B.r(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.DP[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b3m("rocket_lander",B.J(["unlocked",t],x.N,x.z))
C.JL("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga3I()/(D.tt[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.j.ad(m.ga3I()/(D.tt[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
G.dz(80,"",500,0,0.6,"noise")
B.fN()}}if(m.Q&&m.x>0&&A.o.F(A.j.bi(m.CW*20),2)===0)G.dz(90,"",70,0,0.12,"noise")
m.m(new C.ezk())},
ahk(d,e,f,g,h){var w,v=null,u=B.d(d,v,v,v,v,v,v,D.fxf,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new E.dX(e[w].a,f.$1(w),new C.ez0(this,g,w),v,h,v))
return new B.D(A.eP,B.x(B.a([u,A.cQ,B.bZ(A.bH,s,A.br,v,6,6)],t),A.E,v,A.e,A.h,0,A.p),v)},
bIf(d){var w,v,u,t,s=this,r=null,q=s.ga3I()/(D.tt[s.d].b/9.81*0.28)>=1,p=A.j.V(1/s.gaQW()),o=D.aDx[s.d],n=B.l(24),m=d.c,l=B.K(m.j(0.6),A.r,1)
m=B.a([B.d("Build a rocket for "+d.a,r,r,r,r,r,r,B.m(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.aw,B.d(d.d+" Gravity here: "+B.w(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.abX,r,r,r),A.T,s.ahk("ENGINE: "+D.IF[s.cx].b,D.IF,new C.eyQ(s),new C.eyR(s),A.cN),s.ahk("FUEL TANK: "+D.SY[s.cy].b,D.SY,new C.eyS(s),new C.eyT(s),A.bc),s.ahk("LANDING GEAR: "+D.DP[s.db].b,D.DP,new C.eyU(s),new C.eyV(s),A.aG),s.ahk("EXTRAS (tap to add)",D.aBu,new C.eyW(s),new C.eyX(s),A.bd)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.h32)
o=(q?A.bc:A.bY).j(0.14)
w=B.l(12)
v=A.j.ad(s.gb__(),2)
u=A.j.ad(s.ga3I()/(D.tt[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.p(r,B.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.j.V(D.DP[s.db].d*100)+".",r,r,r,r,r,r,D.fxV,r,r,r),A.f,r,r,new B.o(o,r,r,w,r,r,A.n),r,r,r,A.hZ,A.bU,r,r,r))
m.push(A.T)
m.push(new B.bK(A.A,r,r,new E.fE(A.oN,"Launch",new C.eyY(s),A.bc,r),r))
return B.as(B.p(r,B.c9(B.x(m,A.E,r,A.e,A.N,0,A.p),A.t,r,A.y,r,A.bS,r,r,A.ah),A.f,r,A.m2,new B.o(D.bsW,r,l,n,r,r,A.n),r,r,r,A.bU,r,r,r,r),r,r,r)},
b0b(d,e,f,g){var w=null,v=f?A.cN:A.c.j(0.1),u=B.l(18),t=B.K(A.aT,A.r,1)
return B.mP(A.iS,B.p(w,B.X(d,A.c,w,w,w,30),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new C.eyN(e),new C.eyO(e),w,w,w,w,new C.eyP(e))},
b0a(d,e,f){return this.b0b(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cn(new C.ezb(s,D.tt[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.tt[w].a:"\ud83d\udd12"
o.push(new E.dX(v,s.d===w,new C.ezc(s,w),r,D.tt[w].c,r))}v=B.a([s.b0a(F.ar5,new C.ezd(s),s.y),A.bb,s.b0b(A.v1,new C.eze(s),s.Q,130),A.bb,s.b0a(A.Q_,new C.ezf(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?A.aG:A.c.j(0.1)
t=B.l(18)
A.d.u(v,B.a([A.bb,B.az(r,B.p(r,D.bXy,A.f,r,r,new B.o(u,r,B.K(A.aT,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.ezg(s),r,r,r,r,r,r,!1,A.a4)],p))}return E.lD(A.cN,A.f5,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.x(B.a([new E.fd(o,"WORLD",r),B.A(v,A.l,r,A.b8,A.h,0,r,r)],p),A.l,r,A.e,A.N,0,A.p))}}
C.bjz.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=this.b,l=D.tt[m.d],k=a1.a,j=a1.b,i=0+k,h=0+j,g=$.S(),f=B.L(),e=l.c,d=B.ap(I.a_G,e,0.25)
d.toString
f.sap(new B.a8(A.aZ,A.b4,A.x,B.a([F.ai3,d],x.O),n,n).aG(0,new B.a6(0,0,i,h)))
a0.aD(new B.a6(0,0,i,h),f)
w=new B.e6()
w.d_(5)
for(v=0;v<70;++v){i=w.ai()
h=w.ai()
f=w.ai()
d=new B.ar(A.S,A.Q,A.W,A.X,A.U)
d.r=A.c.j(0.2+w.ai()*0.5).gp(0)
a0.O(new B.r(i*k,h*j*0.8),f*1.2+0.3,d)}u=j*0.88
i=x.v
h=B.a([],i)
t=new B.aI(g.r,A.aj,n,n,h)
t.E(new B.aZ(0,u+14))
s=new B.e6()
s.d_(2)
for(r=0;r<=k;r+=18){g=new B.aq(r,u+(Math.abs(r/k-m.ax)<m.ay/2+0.02?14:14-s.ai()*18))
h.push(g)
f=t.f
if(f!=null)g.ak(f)
t.ab()}t.E(new B.aq(k,j))
t.E(new B.aq(0,j))
t.E(new B.bw())
h=$.S()
g=B.L()
g.r=B.ap(e,A.w,0.6).gp(0)
a0.ag(t,g)
q=B.bS(new B.r(m.ax*k,u+10),8,m.ay*k)
g=B.bx(q,A.jy)
e=B.L()
e.r=A.bg.gp(0)
a0.aq(g,e)
e=B.bx(q.co(2),A.o_)
g=B.L()
g.b=A.aa
g.c=2
g.r=A.c.j(0.5+0.3*Math.sin(m.CW*4)).gp(0)
a0.aq(e,g)
if(m.as==="ready")return
g=m.f
f=a0.c
J.br(f.save())
f.translate(g.a*k,g.b*j)
a0.jr(0,m.w)
k=m.as
if(k==="crashed"){m=B.L()
m.r=A.cN.j(0.6).gp(0)
m.y=U.OI
a0.O(A.J,34,m)
f.restore()
return}if(m.Q&&m.x>0&&k==="flying"){k=h.r
p=new B.aI(k,A.aj,n,n,B.a([],i))
p.E(new B.aZ(-8,18))
p.E(new B.aq(0,44+Math.sin(m.CW*40)*8))
p.E(new B.aq(8,18))
p.E(new B.bw())
m=B.L()
m.r=A.aQ.gp(0)
a0.ag(p,m)
k=new B.aI(k,A.aj,n,n,B.a([],i))
k.E(new B.aZ(-4,18))
k.E(new B.aq(0,32))
k.E(new B.aq(4,18))
k.E(new B.bw())
m=B.L()
m.r=A.c.gp(0)
a0.ag(k,m)}m=h.r
o=new B.aI(m,A.aj,n,n,B.a([],i))
o.E(new B.aZ(0,-26))
o.E(new B.cc(14,-10,11,18))
o.E(new B.aq(-11,18))
o.E(new B.cc(-14,-10,0,-26))
o.E(new B.bw())
k=B.L()
k.sap(D.c9Q.aG(0,D.fbk))
a0.ag(o,k)
k=B.L()
k.r=A.aG.gp(0)
a0.O(H.vB,5,k)
k=new B.aI(m,A.aj,n,n,B.a([],i))
k.E(new B.aZ(-11,6))
k.E(new B.aq(-20,20))
k.E(new B.aq(-11,18))
k.E(new B.bw())
j=B.L()
j.r=A.aA.gp(0)
a0.ag(k,j)
i=new B.aI(m,A.aj,n,n,B.a([],i))
i.E(new B.aZ(11,6))
i.E(new B.aq(20,20))
i.E(new B.aq(11,18))
i.E(new B.bw())
m=B.L()
m.r=A.aA.gp(0)
a0.ag(i,m)
f.restore()},
aE(d){return!0}}
C.aOk.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b3()
this.bB()}}
C.bAf.prototype={
t(){var w,v,u
for(w=this.h8$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h7$
w===$&&B.c()
w.t()
this.bA9()}}
C.aUm.prototype={}
C.a4s.prototype={}
C.bcv.prototype={}
C.VD.prototype={
S(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.et(["skin"],x.N),o=new Float32Array(0)
return new C.aEN(w,v,u,t,s,r,q,new B.cw(null,x.A),p,D.M6,D.M6,A.az,A.cR,o,new Int32Array(0),$,A.bC,0,B.a([],x.X),null,null)}}
C.aEN.prototype={
Y(){var w=this
w.a3()
w.mh()
w.as=new C.c6U(w.gcie())
new C.dPK(w).$0()
return},
t(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a1(0)
v.d=null}this.bzb()},
cif(d){var w,v=this
if(v.c==null)return
w=J.a7(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.fa(0,B.J(["t","init","data",$.hvJ],x.N,x.z))
v.at=!0
v.ay=""
v.aB4()
break
case"parts":v.m(new C.dPk(v))
break
case"pick":v.m(new C.dPl(v,d))
break
case"shot":v.aje(B.w(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+B.w(w.h(d,"text")))
if(v.c!=null&&!v.ax)v.m(new C.dPm(v))
break}},
aB4(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.azl[q.cx]
v=new C.dPn()
u=q.ch
u=B.C(u,B.a3(u).k("ci.E"))
A.d.fg(u)
t=x.N
s=B.J(["layers",u,"skinMode",q.CW,"tone","#"+B.w(v.$1(w.b))+B.w(v.$1(w.c))+B.w(v.$1(w.d)),"sel",q.cy,"bpm",A.j.V(q.k4),"spin",q.go],t,x.cK)
r=A.V.av(s,null)
if(r===q.ay)return
q.ay=r
v=q.as
if(v!=null){u=B.T(t,x.z)
u.n(0,"t","state")
u.u(0,s)
v.fa(0,u)}},
aje(d){return this.czg(d)},
czg(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aje=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cK.aO(A.a.b2(d,A.a.cn(d,",")+1))
w=6
return B.b(B.ax5(B.a([B.cGX(r,"image/png","body.png")],x.fH),null,"Made in NGMY Core Protocol"),$async$aje)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.L(x.gV).f.T(I.aV0)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aje,v)},
aAt(d){var w=d.b
if(w==="skin")return this.CW>0
return this.ch.q(0,w)},
mB(d){var w,v=this
if(v.d==null)return
w=(v.k3+=d)*v.k4/60
if(v.ok&&v.ch.q(0,"organ")&&A.j.bi(w)!==A.j.bi(v.p1)){E.XA("kick",0,0.4)
v.UO(170,new C.dPL())}v.p1=w
return},
aeQ(d){var w,v,u,t,s=this
s.m(new C.dPo(s,d))
if(d==null){s.fy=D.M6
s.fr=1
w=s.as
if(w!=null)w.fa(0,B.J(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.U(w).k("Y<1>")
u=B.C(new B.Y(w,new C.dPp(d),v),v.k("M.E"))
t=A.d.gH(u).b
if(t!=="skin"&&!s.ch.q(0,t)){s.ch.I(0,t)
if(s.CW===2)s.CW=1}s.aB4()
w=s.as
if(w!=null)w.fa(0,B.J(["t","focus","group",d],x.N,x.z))
s.id=0
s.cBK(t,d)
return},
cBK(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){E.XA("kick",0,0.8)
this.UO(260,new C.dPq())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")G.dz(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.UO(w*70,new C.dPr(this))
else if(A.a.q(e,"intestine")||e==="Stomach")G.dz(110,"",360,0.7,0.3,"saw")
else E.haT("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":G.dz(210+e.length*4,"",80,0.6,0.55,"tri")
G.dz(2400,"",20,0,0.3,v)
break
case"muscle":G.dz(70,"",150,1,0.6,"sine")
break
case"vessel":G.dz(300,"",380,0.4,0.22,v)
E.XA("kick",0,0.3)
break
default:E.haT("organic",2+A.o.F(e.length,6),200,0.4)}},
cGr(d){this.m(new C.dPt(this,d))},
b0t(){var w,v,u,t,s,r,q,p=this,o=B.aR(x.N)
for(w=p.d.e,v=w.length,u=p.ch,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
if(p.aAt(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.I(0,s.a)}q=B.C(o,o.$ti.k("ci.E"))
w=q.length
if(w===0)return
p.p3=q[p.RG.aw(w)]
p.R8=""},
c_a(d){var w,v,u=this
u.id=0
if(u.p2&&u.p3!=null){if(d==null)return
w=d===u.p3
u.m(new C.dPh(u,w,d))
v=x.t
C.JL("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.UO(1100,new C.dPi(u))
return}if(d==null){if(u.cy!=null)u.aeQ(null)
return}u.aeQ(d)},
c2N(d,e){var w,v=this,u=null,t=B.l(18),s=B.K(A.c4.j(0.5),A.r,1)
if(v.p2){w=v.p3
w=B.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p4+"\n"+v.R8,u,u,u,u,u,u,D.fti,u,u,u)}else if(d==null||e==null)w=D.fIo
else{w=x.p
w=B.A(B.a([B.E(B.x(B.a([B.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.ht,u,u,u),A.cQ,B.d(e.b,u,u,u,u,u,u,K.L6,u,u,u)],w),A.E,u,A.e,A.N,0,A.p),1),B.aH(u,u,u,u,D.c_9,u,u,u,new C.dPj(v),u,u,u,u,"Back to the whole body",A.cg)],w),A.E,u,A.e,A.h,0,u,u)}return B.p(u,w,A.f,u,u,new B.o(I.YQ,u,s,t,u,u,A.n),u,u,u,u,R.amz,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:D.dHE.h(0,g)
i.aB4()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.doo
u=v.length
t=i.ch
s=0
for(;s<v.length;v.length===u||(0,B.I)(v),++s){r=v[s]
if(i.aAt(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.q(w,q))w.push(q)}v=x.p
u=B.a([B.aH(h,h,h,h,I.oQ,h,h,h,new C.dPA(i),h,h,h,h,"Share",h)],v)
q=B.a([],v)
p=i.as
if((p==null?h:p.b!=null)===!0){p=p.b
q.push(p==null?A.bM:B.BU(h,A.pR,p))}p=i.ax
o=p?0:1
q.push(new B.du(p,B.zi(B.p(A.A,B.x(D.dxS,A.l,h,A.e,A.N,0,A.p),A.f,h,h,D.b7T,h,h,D.hvA,h,h,h,h,h),A.b0,A.n1,o),h))
q=B.x(B.a([B.E(new B.an(A.a0,h,A.b2,A.t,q,h),1),new B.D(F.a0M,i.c2N(g,f),h)],v),A.l,h,A.e,A.h,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){n=D.dfz[s]
o=n.a
m=o==="skin"
if(m){l=i.CW
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=n.b
o=m?i.CW>0:t.q(0,o)
p.push(new E.dX(l,o,new C.dPB(i,n),n.c,A.c4,h))}p=B.a([new E.fd(p,h,h)],v)
if(!i.p2&&w.length!==0){o=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.I)(w),++s){k=w[s]
o.push(new E.dX(k,k===i.cy,new C.dPC(i,k),h,A.aQ,h))}p.push(new E.fd(o,"FIND",h))}if(t.q(0,"organ")){o=i.k4
p.push(E.iT(A.bY,""+A.j.V(o)+" beats/min","Heart rate",180,40,new C.dPD(i),o))}if(i.CW>0&&t.a===0){o=B.a([],v)
for(j=0;j<5;++j)o.push(new E.G1(D.azl[j],i.cx===j,new C.dPE(i,j),!1,h))
p.push(new E.fd(o,"SKIN",h))}o=i.go
m=i.p2
l=m?"Quiz on":"Quiz"
v=B.a([new E.dX("Spin",o,new C.dPF(i),D.aq3,A.aG,h),new E.fE(A.oI,"Reset view",new C.dPG(i),A.c,h),new E.dX(l,m,new C.dPH(i),A.HZ,A.aQ,h)],v)
if(t.q(0,"organ"))v.push(new E.dX("Heartbeat sound",i.ok,new C.dPI(i),A.oM,A.bY,h))
p.push(new E.fd(v,h,h))
return E.lD(A.c4,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.x(p,A.l,h,A.e,A.N,0,A.p))}}
C.aNn.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b3()
this.bB()}}
C.aNo.prototype={
t(){var w,v,u
for(w=this.h8$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h7$
w===$&&B.c()
w.t()
this.bza()}}
C.c6U.prototype={
kW(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aL(e,"</script","<\\/script")
v=$.hC3
$.hC3=v+1
u="ngmy-body-viewer-"+v
$.xs()
$.pZ().pf(u,new C.c6V(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fD(v,"message",new C.c6W(t),!1,x.gA)
t.b=u},
fa(d,e){var w,v
try{w=this.c
if(w!=null){w=B.Rv(w.contentWindow)
if(w!=null)J.ajl(w,e,"*")}}catch(v){}}}
C.yJ.prototype={}
C.CY.prototype={}
C.nL.prototype={}
C.bdg.prototype={}
C.VK.prototype={
S(){var w=x.N,v=x.y,u=x.S
return new C.aEP(B.T(w,x.a2),B.a([],x.cB),B.T(w,v),B.T(w,v),B.T(w,u),A.az,A.J,A.J,B.aR(u),$,A.bC,0,B.a([],x.X),null,null)}}
C.aEP.prototype={
Y(){var w=this
w.a3()
w.mh()
w.adO()
$.aU.x1$.push(new C.dRp(w))},
adO(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$adO=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$adO)
case 6:q=e.tV("ngmy_circuit_passed_v1")
r=q==null?A.Z:q
if(s.c!=null)s.m(new C.dR3(s,r))
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
return B.i($async$adO,v)},
ae9(d){return this.c6O(d)},
c6O(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$ae9=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.I(0,d)
u=3
w=6
return B.b(B.aA(),$async$ae9)
case 6:r=f
q=s.cx
p=B.a3(q).k("ka<ci.E,n>")
q=B.C(new B.ka(q,new C.dR6(),p),p.k("M.E"))
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
return B.i($async$ae9,v)},
az8(d,e,f,g){var w="c"+this.y++,v=new C.CY(w,e,f,g)
this.d.n(0,w,v)
return v},
mR(d,e,f){return this.az8(0,e,f,0)},
ad7(d,e){var w
if(D.Af.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a5(0,new B.r(-36,w))},
ul(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aV6(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fb$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.ds(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.eg(m,D.cZj[A.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.ul(p,0)&&n.ul(p,1)
break
case"or":p=q.a
o=n.ul(p,0)||n.ul(p,1)
break
case"xor":p=q.a
o=n.ul(p,0)!==n.ul(p,1)
break
case"nand":p=q.a
o=!(n.ul(p,0)&&n.ul(p,1))
break
case"nor":p=q.a
o=!(n.ul(p,0)||n.ul(p,1))
break
case"not":o=!n.ul(q.a,0)
break
default:o=n.ul(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bSE(){return this.aV6(null)},
mB(d){var w,v,u,t,s,r,q,p,o,n=this
n.bSE()
if(!n.ax)return
for(w=n.d,w=new B.b8(w,B.a3(w).k("b8<2>")).gae(0),v=new B.eJ(w,new C.dRq()),u=n.f,t=n.w,s=0;v.C();){r=w.gR(0).a
if(u.h(0,r)===!0){q=n.fb$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fb$)
o=s+1
G.dz(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
az9(d){var w=this
w.d.a8(0)
A.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
mi(d,e){var w=this.x
return new B.r(d*w.a,e*w.b)},
avj(d){var w=this
if(w.x.A(0,A.az)){$.aU.x1$.push(new C.dR1(w,d))
return}w.m(new C.dR2(w,d))},
cC1(d){this.m(new C.dR7(this,d,$.bH7()[d]))},
cbA(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bH7()[a0]
v=d.d
u=B.a3(v).k("b8<2>")
t=u.k("Y<M.E>")
s=t.k("M.E")
r=B.C(new B.Y(new B.b8(v,u),new C.dQX(),t),s)
A.d.aZ(r,new C.dQY())
q=B.C(new B.Y(new B.b8(v,u),new C.dQZ(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new C.dR_(d,w))
return}u=d.r
p=B.dL(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dz(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.hb(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aV6(0)
h=m.h(0,A.d.gH(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.ll(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aN(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a8(0)
u.u(0,p)
d.m(new C.dR0(d,o,a0))},
aA_(d){var w,v,u,t,s=this.d,r=B.a3(s).k("b8<2>")
s=B.C(new B.b8(s,r),r.k("M.E"))
r=B.U(s).k("dr<1>")
s=new B.dr(s,r)
s=new B.bQ(s,s.gJ(0),r.k("bQ<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
ckH(d){var w,v,u,t,s,r=this.d,q=B.a3(r).k("b8<2>")
r=B.C(new B.b8(r,q),q.k("M.E"))
q=B.U(r).k("dr<1>")
r=new B.dr(r,q)
r=new B.bQ(r,r.gJ(0),q.k("bQ<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c2G(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.ds(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.Af.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.ad7(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.y(p,o)
s=l}}}return t},
bRn(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.ad7(p,o)
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
cbC(d){var w,v,u,t=this,s=t.aA_(d)
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
G.dz(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new C.dR8())
return}u=t.bRn(d)
if(u!=null)t.m(new C.dR9(t,u))
else t.m(new C.dRa(t))},
axX(d){return this.c5N(d)},
c5N(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$axX=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.aA_(d)
if(s==null){w=1
break}B.jC()
t.m(new C.dR5(t,s))
case 1:return B.h(u,v)}})
return B.i($async$axX,v)},
bE3(d){if(this.x.A(0,A.az))return
this.m(new C.dQW(this,d,A.cR))
B.eZ()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bH7()[g]
g=x.p
v=B.a([B.aH(h,h,h,h,B.X(i.ax?A.oM:V.tp,A.ab,h,h,h,21),h,h,h,new C.dRj(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.l(16)
s=A.ct.j(0.14)
r=B.K(A.ct.j(0.5),A.r,1)
q=B.a([B.d("Challenge: "+w.a,h,h,h,h,h,h,D.fsq,h,h,h),B.d(w.b,h,h,h,h,h,h,A.W5,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.D(A.lk,B.d(p,h,h,h,h,h,h,B.m(h,h,i.CW?A.bc:A.eZ,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.p(h,B.A(B.a([B.E(B.x(q,A.E,h,A.e,A.h,0,A.p),1),B.bI(D.fU2,h,i.gcbz(),B.bo(A.ct,h,h,h,h,h,h,h,h,h,h,A.cg))],g),A.l,h,A.e,A.h,0,h,h),A.f,h,h,new B.o(s,h,r,t,h,h,A.n),h,h,h,S.Oi,D.bDX,h,h,1/0))}u.push(B.E(B.cn(new C.dRk(i)),1))
if(f!=null){t=B.l(14)
s=A.c.j(0.06)
r=f.b
u.push(B.p(h,B.d(D.Af.h(0,r).a+": "+D.Af.h(0,r).e,h,h,h,h,h,h,A.u_,h,h,h),A.f,h,h,new B.o(s,h,h,t,h,h,A.n),h,h,h,A.a0Q,A.bU,h,h,1/0))}u=B.x(u,A.l,h,A.e,A.h,0,A.p)
t=B.a([],g)
for(s=D.Af.gdP(D.Af),s=s.gae(s);s.C();){r=s.gR(s)
q=new B.aP(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ay(o.j(0.5),1,A.r,-1)
t.push(B.az(h,B.p(h,B.x(B.a([B.X(p.b,o,h,h,h,20),A.bE,B.d(p.a,h,h,h,h,h,h,D.aX1,h,h,h)],g),A.l,h,A.e,A.N,0,A.p),A.f,h,h,new B.o(n,h,new B.bF(m,m,m,m),new B.be(q,q,q,q),h,h,A.n),h,h,h,A.fn,Ai.Of,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dRl(i,r),h,h,h,h,h,h,!1,A.a4))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dsX[l]
s.push(new E.fE(A.Q0,k.b,new C.dRm(i,k),A.ct,h))}s.push(new E.fE(I.wP,"Clear",new C.dRn(i),A.bY,h))
r=B.a([],g)
for(j=0;q=$.bH7(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?A.ec:A.lQ
o=i.ay
n=i.cx.q(0,j)?A.bc:A.bt
r.push(new E.dX(q.a,o===j,new C.dRo(i,j),p,n,h))}return E.lD(A.ct,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.x(B.a([new E.fd(t,"PARTS",h),new E.fd(s,"TRY",h),new E.fd(r,"TASKS",h)],g),A.l,h,A.e,A.N,0,A.p))}}
C.bdz.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3=a6.a,a4=a6.b
$.S()
w=B.L()
w.r=D.agk.gp(0)
a5.aD(new B.a6(0,0,0+a3,0+a4),w)
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
i=a3.ad7(l,o.c)
h=s.h(0,n)===!0
n=$.S()
g=B.a([],r)
f=new B.aI(n.r,A.aj,a2,a2,g)
g.push(new B.aZ(j,k))
f.ab()
n=i.a
e=Math.max(40,Math.abs(n-j)*0.5)
d=i.b
d=new B.kn(j+e,k,n-e,d,n,d)
g.push(d)
n=f.f
if(n!=null)d.ak(n)
f.ab()
if(h){n=new B.ar(A.S,A.Q,A.W,A.X,A.U)
n.b=A.aa
n.c=9
n.r=A.bt.j(0.28).gp(0)
n.y=N.oz
a5.ag(f,n)}n=new B.ar(A.S,A.Q,A.W,A.X,A.U)
n.b=A.aa
n.c=3.2
n.d=A.bF
n.r=(h?A.eg:A.bw).gp(0)
a5.ag(f,n)}a0=a3.as
if(a0!=null&&q.h(0,a0)!=null){a1=q.h(0,a0).c.a5(0,D.JQ)
i=a3.at
a3=i.a
a4=a1.a
e=Math.max(40,Math.abs(a3-a4)*0.5)
r=new B.aI($.S().r,A.aj,a2,a2,B.a([],r))
w=a1.b
r.E(new B.aZ(a4,w))
s=i.b
r.E(new B.kn(a4+e,w,a3-e,s,a3,s))
s=B.L()
s.b=A.aa
s.c=3
s.r=A.ab.gp(0)
a5.ag(r,s)}for(a3=new B.ds(q,q.r,q.e);a3.C();)this.cbB(a5,a3.d)},
cbB(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.Af.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.bS(a0.c,64,64)
s=B.bx(t,A.jQ)
r=w.cy===v
q=s.eF(A.cy)
$.S()
p=B.L()
p.r=A.w.j(0.55).gp(0)
p.y=A.mh
d.aq(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.L()
p.sap(new B.bV(A.A,0.5,A.x,g,0,B.a([e.c.j(0.6),A.L],x.O),g,g).aG(0,B.bW(a0.c,52)))
d.O(q,52,p)}q=s.eF(A.cJ)
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
q.sap(new B.a8(A.aZ,A.b4,A.x,B.a([p,m],x.O),g,g).aG(0,t))
d.aq(s,q)
q=B.L()
q.b=A.aa
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aq(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.oK:D.bTS}else l=e.b
k=C.hcK(B.ll(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a4(d,v.aK(0,new B.r(p/2,q.gba(q)/2)))
j=C.hcK(e.a,10.5,A.c,g,g,A.H)
j.a4(d,a0.c.a5(0,new B.r(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.hcK(f,9,u?A.eg:A.bV,g,g,A.u)
i.a4(d,a0.c.a5(0,new B.r(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b17(d,w.ad7(a0,h),o)
this.b17(d,a0.c.a5(0,D.JQ),o)},
b17(d,e,f){var w
$.S()
w=B.L()
w.r=D.agk.gp(0)
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
C.aNs.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b3()
this.bB()}}
C.bA_.prototype={
t(){var w,v,u
for(w=this.h8$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h7$
w===$&&B.c()
w.t()
this.bzf()}}
C.Og.prototype={
S(){return new C.aF5(B.mZ(0,null,null))}}
C.Lg.prototype={
a7(){return"_UnfoldStyle."+this.b}}
C.B7.prototype={}
C.aF5.prototype={
Y(){this.a3()
B.bN(A.qA,C.irl(),x.H)},
cbH(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcp(0).at
v.toString
w.f=v}w.m(new C.dXB(w,e))},
c4B(){var w=this
w.e.t()
w.e=B.mZ(w.f,null,null)
w.m(new C.dXA(w))},
t(){this.e.t()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null,s=t&&B.P(d).ax.a===A.dm?A.c:A.c3
return B.oQ(t,B.c4(v,s,t?new C.btV(w.e,w.gcbG(w),new C.dXC(d),v):new C.aJm(u,new B.bj(u.b,x.W)),v,!1,!1,v,!1),new C.dXD(w,u),x.K)}}
C.bvx.prototype={}
C.btV.prototype={
b18(d,e,f){var w=null,v=B.d(d,w,w,w,w,w,w,B.m(w,w,f?A.bB:A.c,w,w,w,w,w,w,w,w,12.5,w,w,A.u,w,w,!0,w,1.6,w,w,w,w,w,w),w,w,w)
return new B.D(R.a1f,B.x(B.a([v,A.bE,B.d(e,w,w,w,w,w,w,B.m(w,w,f?A.cz:A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.E,w,A.e,A.h,0,A.p),w)},
B(d){var w,v,u,t=this,s=null,r=B.P(d).ax.a===A.dm,q=B.aF(d,A.dM,x.l).w,p=B.aH(s,s,s,s,B.X(A.eL,r?A.bB:A.ab,s,s,s,20),s,s,D.hw0,t.e,s,s,s,s,s,s)
if(r)w=new B.o(A.c,s,s,B.l(14),A.II,s,A.n)
else{w=B.a([A.aG.j(0.22),A.aG.j(0.06)],x.O)
v=B.l(14)
w=new B.o(s,s,B.K(A.aG.j(0.75),A.r,1.6),v,B.a([new B.ab(0,A.G,A.aG.j(0.22),A.J,8)],x.V),new B.a8(A.ay,A.aD,A.x,w,s,s),A.n)}v=B.d("\ud83e\uddea Core Protocol",s,s,s,s,s,s,B.m(s,s,r?A.bB:A.c,s,s,s,s,s,s,s,s,15,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)
u=x.p
w=B.A(B.a([p,B.E(B.as(B.p(s,B.x(B.a([v,B.d("Play, make things, keep them.",s,s,s,s,s,s,B.m(s,s,r?A.cz:A.aR,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)],u),A.l,s,A.e,A.N,0,A.p),A.f,s,s,w,s,s,D.hw5,s,Z.an4,s,s,s),s,s,s),1),A.tT],u),A.l,s,A.e,A.h,0,s,s)
v=t.b18("STUDIOS","Play, make things, and keep what you make",r)
$.bH8()
return B.bm(!1,B.x(B.a([B.E(B.w6(0,s,A.t,t.c,A.y,s,s,s,s,s,!1,s,A.ah,!1,B.a([new B.nI(new B.Q(8,q.r.b+6,8,4),new B.m5(w,s),s),new B.m5(v,s),new B.nI(A.i_,B.PU(new B.oT(new C.f96(d),9,!0,!0,!0,0,B.tq(),s),D.aUQ),s),new B.m5(t.b18("SCENES","Each one is a studio too: change the style, colours and words",r),s),new B.nI(D.bE5,B.PU(new B.oT(new C.f97(t),6,!0,!0,!0,0,B.tq(),s),D.aUQ),s)],u)),1)],u),A.l,s,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!1)}}
C.agf.prototype={
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m.d
if(B.P(d).ax.a===A.dm){w=B.l(20)
v=(A.o.ar(o.c,3)&1)===0
u=B.a7t(v?A.aG:A.bd,20)
v=v?A.aG:A.bd
return B.aG(!1,A.a3,!0,n,B.aM(!1,w,!0,B.eB(B.x(B.a([new B.VI(v,44,m.c,n,n),A.P,B.d(m.a,n,2,A.a2,n,n,n,D.fyD,A.K,n,n),A.cQ,B.d(m.b,n,2,A.a2,n,n,n,D.fBt,A.K,n,n)],x.p),A.l,n,A.b8,A.h,0,A.p),n,u,n,A.CK,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}w=B.l(20)
v=B.l(20)
u=B.ap(K.mb,l,0.3)
u.toString
t=x.O
u=B.a([u,D.ajC],t)
s=B.K(l.j(0.6),A.r,1.2)
r=x.V
q=B.a([new B.ab(-4,A.G,l.j(0.22),A.J,14)],r)
p=B.ap(l,A.w,0.45)
p.toString
t=B.a([l,p],t)
r=B.a([new B.ab(0,A.G,l.j(0.5),A.J,12)],r)
return B.aG(!1,A.a3,!0,n,B.aM(!1,w,!0,B.eB(B.x(B.a([B.p(n,B.X(m.c,A.c,n,n,n,24),A.f,n,n,new B.o(n,n,n,n,r,new B.a8(A.ay,A.aD,A.x,t,n,n),A.a7),n,44,n,n,n,n,n,44),A.P,B.d(m.a,n,2,A.a2,n,n,n,B.m(n,n,l,n,n,n,n,n,n,n,n,10.5,n,n,A.u,n,1.15,!0,n,0.5,n,n,n,n,n,n),A.K,n,n),A.cQ,B.d(m.b,n,2,A.a2,n,n,n,B.m(n,n,A.c.j(0.6),n,n,n,n,n,n,n,n,9.5,n,n,n,n,1.2,!0,n,n,n,n,n,n,n,n),A.K,n,n)],x.p),A.l,n,A.b8,A.h,0,A.p),n,new B.o(n,n,s,v,q,new B.a8(A.ay,A.aD,A.x,u,n,n),A.n),n,A.CK,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}}
C.af6.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.d,j=k.d,i=B.P(d).ax.a===A.dm,h=(A.o.ar(this.c,3)&1)===0?A.aG:A.bd,g=B.l(20)
if(i)w=B.a7t(h,20)
else{w=B.l(20)
v=B.ap(K.mb,A.d.gH(j),0.24)
v.toString
v=B.a([v,D.ajC],x.O)
v=new B.o(l,l,B.K(A.d.gH(j).j(0.35),A.r,1),w,B.a([new B.ab(0,A.G,A.w.j(0.4),A.cy,12)],x.V),new B.a8(A.ay,A.aD,A.x,v,l,l),A.n)
w=v}v=x.p
u=B.a([],v)
for(t=k.e,s=x.V,r=x.O,q=0;q<3;++q){p=q===2?0:4
o=new B.aP(6,6)
if(i){n=B.ap(h,A.c,0.1)
n.toString
n=B.a([n,B.VJ(h,!0)[1]],r)}else n=B.a([A.d.gH(j),A.d.gal(j)],r)
m=i?l:B.a([new B.ab(0,A.G,A.w.j(0.45),A.a9h,0)],s)
u.push(B.p(l,B.X(t[q],A.c,l,l,l,11),A.f,l,l,new B.o(l,l,l,new B.be(o,o,o,o),m,new B.a8(A.a5,A.a9,A.x,n,l,l),A.n),l,17,l,new B.Q(q*4,0,(2-q)*4,p),l,l,l,l))}u=B.x(u,A.l,l,A.e,A.N,0,A.p)
if(i)t=A.bB
else{t=B.ap(A.d.gH(j),A.d.gal(j),0.4)
t.toString}t=B.d(k.b,l,2,A.a2,l,l,l,B.m(l,l,t,l,l,l,l,l,l,l,l,10.5,l,l,A.u,l,1.2,!0,l,0.6,l,l,l,l,l,l),A.K,l,l)
return B.aG(!1,A.a3,!0,l,B.aM(!1,g,!0,B.eB(B.x(B.a([new B.a4(58,l,u,l),A.T,t,A.aw,B.X(A.Dq,i?B.VJ(h,!0)[1]:A.d.gH(j),l,l,l,18)],v),A.l,l,A.b8,A.h,0,A.p),l,w,l,A.CK,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,this.e,l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.ai)}}
C.Rc.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ap(A.d.gal(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=B.ao(-8,new B.bM(new B.o(h,j,j,B.l(22),j,j,A.n),A.bi,j,j),j,j,2,2,8,j)
u=B.l(22)
t=k.y
s=x.V
r=B.a([new B.ab(0,A.G,A.w.j(0.55),A.JN,26),new B.ab(-6,A.G,A.d.gH(i).j(0.1+0.4*t),A.J,30)],s)
q=B.l(22)
p=B.ap(A.d.gH(i),A.c,0.14)
p.toString
o=A.d.gH(i)
n=A.d.gal(i)
i=B.ap(A.d.gal(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bR(0,new B.bM(new B.o(j,j,j,j,j,new B.a8(A.ay,A.aD,A.x,B.a([p,o,n,i],m),D.dyU,j),A.n),A.bi,j,j),0,0,0),B.ao(j,new B.bM(new B.o(j,j,j,j,j,new B.a8(A.aZ,A.b4,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bi,j,j),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bR(0,B.b3(j,j,j,new C.buV(i,j),A.az),0,0,0))
i=A.c.j(0.16)
p=B.K(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ab(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=B.p(j,B.X(k.f,A.c,j,j,j,28),A.f,j,j,new B.o(i,j,p,j,s,j,A.a7),j,54,j,j,j,j,j,54)
p=B.a([B.d(k.r,j,j,j,j,j,j,D.fuM,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.u(p,B.a([A.aw,B.d(i,j,1,A.a2,j,j,j,B.m(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a8,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.KE)
p.push(B.p(j,j,A.f,j,j,new B.o(A.c.j(0.28),j,j,B.l(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new B.D(A.ha,B.A(B.a([s,A.ev,B.E(B.x(p,A.E,j,A.e,A.N,0,A.p),1)],l),A.l,j,A.e,A.h,0,j,j),j))
i=k.x
if(i>0)m.push(B.bR(0,new B.du(!0,B.ea(j,A.w.j(A.j.D(i*0.6,0,0.7)),!0),j),0,0,0))
i=B.l(22)
m.push(B.bR(0,new B.du(!0,new B.bM(new B.o(j,j,B.K(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.bi,j,j),j),0,0,0))
return new B.a4(w,v,new B.an(A.a0,j,A.ac,A.f,B.a([h,B.bR(0,new B.bM(new B.o(j,j,j,u,r,j,A.n),A.bi,B.bu(q,new B.an(A.a0,j,A.ac,A.t,m,j),A.aq),j),0,0,0)],l),j),j)}}
C.buV.prototype={
a4(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a6(r,-10,s,w)
u=d.c
J.br(u.save())
u.translate(v.gbD().a,v.gbD().b)
d.jr(0,0.35)
t=B.bS(A.J,(w- -10)*1.6,s-r)
$.S()
s=B.L()
s.sap(new B.a8(A.a5,A.a9,A.x,B.a([A.L,A.c.j(0.3),A.L],x.O),null,null).aG(0,t))
d.aD(t,s)
u.restore()},
aE(d){return d.b!==this.b}}
C.buq.prototype={
B(d){var w=null,v=B.l(22),u=B.a([D.bqO,D.aiG],x.O),t=this.e,s=B.K(A.d.gH(t).j(0.4),A.r,1.2),r=B.a([new B.ab(0,A.G,A.w.j(0.5),A.kD,24)],x.V),q=B.l(22),p=A.d.gH(t)
return new B.a4(this.c,this.d,new B.bM(new B.o(w,w,s,v,r,new B.a8(A.ay,A.aD,A.x,u,w,w),A.n),A.bi,B.bu(q,B.b3(B.as(B.X(A.jM,A.d.gH(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.bcd(p,w),A.az),A.aq),w),w)}}
C.bcd.prototype={
a4(d,e){var w,v,u,t,s,r
$.S()
w=B.L()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=0;s<u;s+=18)d.ah(new B.r(s,0),new B.r(s,t),w)
for(r=0;r<t;r+=18)d.ah(new B.r(0,r),new B.r(u,r),w)
u=e.ea(A.J)
$.S()
t=B.L()
t.b=A.aa
t.c=1.4
t.r=v.j(0.35).gp(0)
d.O(u,30,t)},
aE(d){return!1}}
C.aJm.prototype={
S(){return new C.aJn(new B.cw(null,x.A),null,null)}}
C.aJn.prototype={
guL(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,D.bBk,null,1,null,v)
w.cK(0)
v.d!==$&&B.bD()
v.d=w
u=w}return u},
ga_G(){var w,v=this,u=v.e
if(u===$){w=B.bn(null,A.h9,null,1,null,v)
w.f2(0,!0)
v.e!==$&&B.bD()
v.e=w
u=w}return u},
gaza(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gcbE(){var w=this.w
if(w===$){w=B.C(this.a.c.d,x.G)
this.w=w}return w},
gaYp(){var w=this.x
if(w===$){w=B.C(this.a.c.e,x.Z)
this.x=w}return w},
gaZc(){var w=this.y
if(w===$){w=B.C(this.a.c.f,x.N)
this.y=w}return w},
gba0(){var w=this.z
if(w===$){w=B.C(this.a.c.r,x.N)
this.z=w}return w},
Y(){this.a3()
var w=this.guL()
w.dl()
w.dV$.I(0,this.gcBL())},
cBM(){var w,v,u,t,s,r,q,p=this,o=p.guL().x
o===$&&B.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gaza().a){case 0:w=D.nV
break
case 1:w=D.vk
break
case 2:w=D.a5T
break
case 3:w=D.nV
break
case 4:w=D.dl3
break
case 5:w=D.vk
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.adY)r=0.09
else r=s===D.adZ?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){G.dz(260+90*v,"",260,1.6,0.18,"tri")
u=D.ccr[v]
E.mv("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.JL("bell",D.cli,1400,0.35)}}p.ax=o},
t(){this.guL().t()
this.ga_G().t()
this.bB5()},
afg(){var w=this
w.guL().d0X(0,B.dw(0,0,0,A.j.V(11e3/w.Q),0,0))
w.m(new C.f8N(w))},
cmL(){this.guL().bQ(0)
this.m(new C.f8M(this))},
aff(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$aff=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gaZc(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){q=t[r]
l.push(new B.au(new B.ba(q,A.b5,A.aP),$.ax()))}m=B.a([],m)
for(t=u.gba0(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){p=t[r]
m.push(new B.au(new B.ba(p,A.b5,A.aP),$.ax()))}o=B.C(u.gaYp(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bU(K.mb,null,new C.f8L(u,l,m,o),t,!0,!0,!0,A.lW,!1,!1,x.H),$async$aff)
case 2:l=B.C(l,x.bO)
A.d.u(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.U$=$.ax()
n.P$=0}return B.h(null,v)}})
return B.i($async$aff,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gaza(),f=i.a.c,e=f.b,d=i.gcbE(),a0=new C.B7(g,e,f.c,d,i.gaYp(),i.gaZc(),i.gba0())
f=B.ap(A.d.gH(d),A.d.gal(d),0.4)
f.toString
g=x.p
w=B.a([B.aH(h,h,h,h,B.X(i.at?A.oM:V.tp,A.ab,h,h,h,21),h,h,h,new C.f8V(i),h,h,h,h,"Sound",h),B.aH(h,h,h,h,D.c2R,h,h,h,i.gcbF(),h,h,h,h,"Edit words and pictures",h),B.aH(h,h,h,h,I.oQ,h,h,h,new C.f8W(i,a1),h,h,h,h,"Share",h)],g)
v=B.a([B.c6(i.ga_G(),new C.f8X(i,a0),h),B.cn(new C.f8Y(i,a0))],g)
u=i.as
t=u?i.gcmK():i.gcbI()
u=u?D.bT5:A.tm
s=B.ap(A.d.gH(d),A.d.gal(d),0.4)
s.toString
t=B.A(B.a([B.aH(h,h,h,h,B.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.cg),B.E(B.c6(i.guL(),new C.f8Z(i,a1,a0),h),1),B.aH(h,h,h,h,D.c__,h,h,h,new C.f9_(i),h,h,h,h,"Replay",A.cg)],g),A.l,h,A.e,A.h,0,h,h)
s=i.Q
u=A.j.ad(s,1)
r=B.ap(A.d.gH(d),A.d.gal(d),0.4)
r.toString
s=E.iT(r,u+"x","Speed",2.5,0.4,new C.f90(i),s)
u=B.a([],g)
for(q=0;q<6;++q){p=D.dvS[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=B.ap(A.d.gH(d),A.d.gal(d),0.4)
r.toString
u.push(new E.dX(p.b,o===p.a,new C.f91(i,p),p.c,r,h))}d=B.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.ccR[q]
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
d.push(B.az(h,B.p(h,h,A.f,h,h,new B.o(h,h,new B.bF(j,j,j,j),h,h,new B.a8(A.ay,A.aD,A.x,n,h,h),A.a7),h,l,h,I.am5,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f92(i,n),h,h,h,h,h,h,!1,A.a4))}return E.lD(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.en(new B.an(A.a0,h,A.b2,A.t,v,h),i.f),e,B.x(B.a([t,s,new E.fd(u,"STYLE",h),new E.fd(d,"THEME",h)],g),A.l,h,A.e,A.N,0,A.p))},
bDe(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nV[r]
p=A.j.D((1-A.ei.aB(0,A.j.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.j.D(p/1.5707963267948966,0,1)
q=D.nV[r]
n=q+0.12
m=A.j.D((a0-n)/(q+0.2-n),0,1)
n=D.nV[r]
q=n-0.01
q=A.j.D((a0-q)/(n+0.03-q),0,1)
n=B.dq()
l=n.a
l.$flags&2&&B.aj(l)
l[11]=0.0013
n.k0(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nV[r]
h=i+0.1
if(A.j.D((a0-h)/(i+0.3-h),0,1)>0){i=D.nV[r]
h=i+0.1
h=A.j.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nV[r]
h=i+0.1
h=A.j.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cK(0,r*118,0,f,f,f,new B.kJ(q,new B.iV(n,f,A.aZ,!0,f,new C.Rc(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nV[r]
u=v-0.02
g=A.j.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gH(w)
v=D.nV[r]
t=v+0.12
e.push(new B.cK(0,r*118-3-2,0,f,f,4,new B.mJ(new C.btw(u,g,1-A.j.D((a0-t)/(v+0.22-t),0,1),f),f,A.az,f,f),f))}return new B.a4(a2,358,new B.an(A.a0,f,A.ac,A.f,e,f),f)},
bUd(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.vk[r]
p=A.qy.aB(0,A.j.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.vk[r]
m=q+0.15
l=A.j.D((a0-m)/(q+0.25-m),0,1)
m=D.vk[r]
q=m-0.03
q=A.j.D((a0-q)/(m+0.01-q),0,1)
m=B.dq()
k=m.a
k.$flags&2&&B.aj(k)
k[11]=0.0011
m.k6(n,n,n,1)
m.fG(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new C.Rc(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dq()
k.fG(3.141592653589793)
k=new B.iV(k,f,A.A,!0,f,new C.buq(a2,108,w,f),f)}e.push(new B.cK(0,r*130,0,f,f,f,new B.kJ(q,new B.iV(m,f,A.A,!0,f,k,f),f),f))}return new B.a4(a2,378,new B.an(A.a0,f,A.ac,A.f,e,f),f)},
cGV(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a5T[w]
l.push(A.ck.aB(0,A.j.D((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bR(0,B.b3(n,n,n,new C.bx0(d.d,l,D.aB3,m,C.btU(e,0.4,0.62),f,C.btU(e,0.45,0.7),n),A.az),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.hdh(g,w)
q=D.aB3[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cK(r,s-q*m*p+12,n,n,t,n,new B.kJ(o,B.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.hdh(g,w)
r=D.a5T[w]
q=r+0.15
v.push(new B.cK(s,l,n,n,t,n,new B.kJ(A.j.D((e-q)/(r+0.25-q),0,1),B.d(u[w],n,n,n,n,n,n,A.Wh,A.K,n,n),n),n))}return new B.a4(g,m+90,new B.an(A.a0,n,A.ac,A.f,v,n),n)},
bJx(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.ck.aB(0,C.btU(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bR(0,B.as(B.dP(B.b3(f,f,f,new C.bsW(A.d.gH(a1),C.btU(a3,0,0.2),a4,f),new B.av(a5*0.95,70)),D.eq4),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.j.D((a3-l)/(0.12+m-l),0,1)
j=A.dH.aB(0,A.j.D((o-0.7)/0.3,0,1))
l=B.dq()
m=l.a
m.$flags&2&&B.aj(m)
m[11]=0.001
l.fG(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.k6(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.j.F(r,1):-1
w.push(new B.y(o,new B.cK(0,0,0,0,f,f,new B.cj(A.A,f,f,new B.kJ(k*(0.45+0.55*o),B.dP(new B.iV(l,f,A.A,!0,f,new C.Rc(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.r(n*a5*0.34,-o*18)),f),f),f)))}A.d.aZ(w,new C.f8E())
A.d.u(a0,new B.N(w,new C.f8F(),x.fR))
return new B.a4(a5,330,new B.an(A.a0,f,A.ac,A.f,a0,f),f)},
cbD(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.vk[q]
o=A.j.D((a2-p)/(p+0.22-p),0,1)
n=A.nm.aB(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.vk[q]
m=A.j.D((a2-m)/(m+0.02-m),0,1)
l=D.aDa[q]
k=B.dq()
k.n3(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.k6(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.vk[q]
g=h+0.1
g=A.j.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cK(0,0,0,0,e,e,new B.cj(A.A,e,e,new B.kJ(m,B.dP(new B.iV(k,e,A.A,!0,e,new C.Rc(d,92,w,p,j,i,0,g*s,h,e),e),new B.r(0,l)),e),e),e))
l=D.vk[q]
h=l+0.02
f=A.j.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cK(0,0,0,0,e,e,new B.cj(A.A,e,e,B.dP(new B.mJ(new C.bcU(w,f,q,e),e,new B.av(r,212),e,e),new B.r(0,D.aDa[q])),e),e))}return new B.a4(a4,330,new B.an(A.a0,e,A.ac,A.f,a0,e),e)},
bGa(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.r(-b0,-150),new B.r(b0,-40),D.eq8],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nV[r]
p=A.j.D((a8-q)/(q+0.2-q),0,1)
o=A.ck.aB(0,p)
q=D.aDl[r]
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
e=A.j.D((a8-f)/(g+0.3-f),0,1)
f=D.nV[r]
g=f-0.01
g=A.j.D((a8-g)/(f+0.03-g),0,1)
f=B.dq()
d=f.a
d.$flags&2&&B.aj(d)
d[11]=0.001
f.n3(l*h+D.dpp[r]*o)
f.fG(l*0.9)
h=0.55+0.45*o
f.k6(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cK(0,0,0,0,a3,a3,new B.cj(A.A,a3,a3,new B.kJ(g,B.dP(new B.iV(f,a3,A.A,!0,a3,new C.Rc(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.r(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nV[r]
i=q+0.17
a2=A.j.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aDl[r]
a6.push(new B.cK(0,0,0,0,a3,a3,new B.cj(A.A,a3,a3,B.dP(new B.mJ(new C.bsY(A.d.gH(w),a2,a3),a3,new B.av(a4,30),a3,a3),new B.r(0,q+48-4)),a3),a3))}}return new B.a4(b0,330,new B.an(A.a0,a3,A.ac,A.f,a6,a3),a3)}}
C.btw.prototype={
a4(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a6(w-v,0,w+v,e.b)
q=B.bx(u,A.hB)
$.S()
t=B.L()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.y=N.oz
d.aq(q,t)
t=B.bx(u,A.hB)
q=B.L()
q.r=A.c.j(s).gp(0)
d.aq(t,q)},
aE(d){return d.c!==this.c||d.d!==this.d}}
C.bsW.prototype={
a4(d,e){var w,v,u=this.c,t=B.bS(e.ea(A.J),e.b*u,e.a*u)
$.S()
u=B.L()
u.b=A.aa
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.y=U.OI
d.c2(t,u)
u=B.L()
u.b=A.aa
u.c=2.5
u.r=w.j(0.7).gp(0)
d.c2(t,u)
u=t.co(-14)
v=B.L()
v.b=A.aa
v.c=1
v.r=w.j(0.3).gp(0)
d.c2(u,v)},
aE(d){return!0}}
C.bcU.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.ea(A.J),h=this.c,g=A.ck.aB(0,h)
$.S()
w=B.L()
w.b=A.aa
v=1-h
w.c=5*v
u=this.b
w.r=A.d.gH(u).j(0.6*v).gp(0)
d.O(i,40+g*e.a*0.42,w)
t=new B.e6()
t.d_(this.d*17+3)
for(w=40*h*h*3,s=i.a,r=i.b,h=1-h*0.6,q=0;q<26;++q){p=t.ai()*3.141592653589793*2
o=(40+t.ai()*110)*g
n=Math.cos(p)
m=Math.sin(p)
l=t.ai()
k=new B.ar(A.S,A.Q,A.W,A.X,A.U)
j=(q&1)===0?A.d.gH(u):A.c
k.r=j.j(A.j.D(v,0,1)).gp(0)
d.O(new B.r(s+n*o*1.6,r+(m*o+w)),(2+l*3)*h,k)}},
aE(d){return!0}}
C.bsY.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o=e.ea(A.J)
for(w=e.a,v=e.b,u=this.b,t=this.c,s=0;s<2;++s){r=A.j.D(t-s*0.18,0,1)
if(r<=0)continue
q=B.bS(o,v*(0.3+r*0.9),w*(0.5+r*0.7))
$.S()
p=new B.ar(A.S,A.Q,A.W,A.X,A.U)
p.b=A.aa
p.c=2
p.r=u.j((1-r)*0.7).gp(0)
d.c2(q,p)}},
aE(d){return d.c!==this.c}}
C.bx0.prototype={
a4(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2=c0.e,c3=c2+36,c4=d2.a,c5=c4*0.23,c6=c5*0.34,c7=c6*0.85,c8=-c6*0.5,c9=c3-4,d0=new B.a6(0,c9,0+c4,c9+60)
$.S()
c9=B.L()
w=c0.b
v=x.O
c9.sap(new B.a8(A.aZ,A.b4,A.x,B.a([A.d.gH(w).j(0.18),A.L],v),c1,c1).aG(0,d0))
d1.aD(d0,c9)
c9=B.L()
c9.r=A.c.j(0.18).gp(0)
c9.c=1
d1.ah(new B.r(0,c3),new B.r(c4,c3),c9)
for(c9=c0.w,u=c9>0,t=(c5-16)/3,s=t-5,r=0.6+0.3*c0.r,q=c0.f,p=c3-14,o=x.v,n=c3+c8,m=c0.d,l=c3-6,k=c5+c7+8,j=l+16,i=c0.c,h=c9<1,g=d1.c,f=0;f<3;++f){e=i[f]
if(e<=0)continue
d=C.hdh(c4,f)
a0=m[f]*c2*e
a1=d-4
a2=$.S()
a3=new B.ar(A.S,A.Q,A.W,A.X,A.U)
a3.r=A.w.j(0.5).gp(0)
a3.y=A.mh
d1.c2(new B.a6(a1,l,a1+k,j),a3)
a3=c3-a0
a1=d+c5
a4=new B.a6(d,a3,a1,a3+a0)
a5=new B.ar(A.S,A.Q,A.W,A.X,A.U)
a6=B.ap(A.d.gH(w),A.c,0.1)
a6.toString
a5.sap(new B.a8(A.aZ,A.b4,A.x,B.a([a6,A.d.gal(w)],v),c1,c1).aG(0,a4))
d1.aD(a4,a5)
a2=a2.r
a5=B.a([],o)
a7=new B.aI(a2,A.aj,c1,c1,a5)
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
a9=new B.bw()
a5.push(a9)
a5=a7.f
if(a5!=null)a9.ak(a5)
a7.ab()
a5=new B.ar(A.S,A.Q,A.W,A.X,A.U)
a5.r=B.ap(A.d.gal(w),A.w,0.5).gp(0)
d1.ag(a7,a5)
a5=B.a([],o)
b1=new B.aI(a2,A.aj,c1,c1,a5)
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
a2=new B.bw()
a5.push(a2)
a5=b1.f
if(a5!=null)a2.ak(a5)
b1.ab()
a2=new B.ar(A.S,A.Q,A.W,A.X,A.U)
a2.r=B.ap(A.d.gH(w),A.c,0.45).gp(0)
d1.ag(b1,a2)
b2=new B.ar(A.S,A.Q,A.W,A.X,A.U)
b2.b=A.aa
b2.c=1
b2.r=A.c.j(0.28).gp(0)
d1.aD(a4,b2)
d1.ag(a7,b2)
d1.ag(b1,b2)
b3=A.j.bi(a0/22)
for(a2=a3+6,a3=d+8,a5=q*b3*1.3,b4=0;b4<b3;++b4){b5=a5>b3-b4-1
for(a6=p-b4*22-12,a8=a6<a2,a9=a6+10,b6=0;b6<3;++b6){b7=a3+b6*t
if(a8)continue
b0=B.bx(new B.a6(b7,a6,b7+s,a9),A.hB)
$.S()
b8=new B.ar(A.S,A.Q,A.W,A.X,A.U)
b8.r=(b5?A.c.j(r):A.w.j(0.22)).gp(0)
d1.aq(b0,b8)}}if(u&&h){a2=c3-a0*c9-14
b9=new B.a6(d,a2,a1,a2+28)
J.br(g.save())
g.clipRect(B.hY(a4),$.mi()[1],!0)
$.S()
a2=new B.ar(A.S,A.Q,A.W,A.X,A.U)
a2.sap(new B.a8(A.aZ,A.b4,A.x,B.a([A.L,A.c.j(0.4),A.L],v),c1,c1).aG(0,b9))
d1.aD(b9,a2)
g.restore()}}},
aE(d){return!0}}
C.aP9.prototype={
aY(){this.b5()
this.b3()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a2()}}
C.a1C.prototype={
a7(){return"_Role."+this.b}}
C.qv.prototype={}
C.rb.prototype={}
C.D1.prototype={}
C.a_B.prototype={}
C.ag3.prototype={}
C.a1P.prototype={
gZ(d){return this.d}}
C.Dc.prototype={}
C.acX.prototype={}
C.add.prototype={}
C.af9.prototype={}
C.bjw.prototype={
a3R(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
G.dz(d,"",e,g,h,f)},
bb6(d,e,f){return this.a3R(d,e,f,0,0.55)},
aDO(d,e,f,g){return this.a3R(d,e,f,0,g)},
bb7(d,e,f,g){return this.a3R(d,e,f,g,0.55)},
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
alo(d,e,f,g){var w="n"+this.ay++,v=new C.rb(w,e,f,g)
this.a.n(0,w,v)
this.b0()
return v},
tf(d,e,f){return this.alo(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bq(w.b,new C.drv(e))
A.d.bq(w.c,new C.drw(e))
w.b0()},
bf_(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.na.h(0,v.b).c===D.xW)return!1
w=this.b
if(A.d.aV(w,new C.drs(d,e)))return!1
w.push(new C.D1(d,e))
this.b0()
return!0},
c3s(d){var w
if(d.b==="beat")return D.cls[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.aw(500)
case 2:return 1400+w.aw(2200)
default:return 450+w.aw(2000)}},
aHo(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.aDC[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.Dc(u,t,j.ax,90))
w.push(new C.Dc(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ai()*3.141592653589793*2
v.push(new C.a1P(u,new B.r(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.bb6(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ai()*3.141592653589793*2
p=100+w.ai()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ap(t,A.c,w.ai()*0.5)
m.toString
v.push(new C.a1P(u,new B.r(o*p,n*p),m,3+w.ai()*4.5,1000+w.aw(700),j.ax))}j.f.push(new C.Dc(u,t,j.ax,120))
j.aDO(120,200,"noise",0.5)
j.bb6(261.63*Math.pow(2,([7,12,16,19][w.aw(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.Dc(u,t,j.ax,230))
w.push(new C.Dc(u,t,j.ax+160,160))
w.push(new C.Dc(u,t,j.ax+320,100))
j.bb7(180+j.at.aw(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.acX(u,new B.r((w.ai()-0.5)*220,-260-w.ai()*180),t,j.ax))
j.bb7(300+w.aw(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ai()*3.141592653589793*2
j.w.push(new C.add(u,u.a5(0,new B.r(Math.cos(q),Math.sin(q)).aM(0,260+w.ai()*200)),t,j.ax))
j.a3R(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fN()
j.a3R(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.af9(u,D.aCZ[v],t,j.ax))
j.aDO(261.63*Math.pow(2,([0,5,9,12][j.at.aw(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aDO(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.chy[A.o.F(w,3)]
for(k=1;k<=3;++k)j.cwQ(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new B.eJ(w,new C.drt(d));v.C();)j.aCj(w.gR(0),j.ax+D.ctU[A.o.F(g.d,4)])
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
case"chance":s=j.at.aw(100)<D.cL8[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new B.eJ(w,new C.dru(d));v.C();)j.aCj(w.gR(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.xF(w,0,v-700)},
cwQ(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.a_B(e,"~"+d))},
aCj(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.ag3(d.a,v,e,w))
u.push(new C.a_B(w,v))},
a7B(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=B.a3(w).k("b8<2>")
w=B.C(new B.b8(w,v),v.k("M.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aHo(r)
u.n(0,r,o.ax+o.c3s(s))}}w=o.c
v=B.U(w).k("Y<1>")
q=B.C(new B.Y(w,new C.drx(o),v),v.k("M.E"))
if(q.length!==0){A.d.bq(w,new C.dry(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.I)(q),++t){u=q[t].b
if(A.a.a_(u,"~")){p=A.a.b2(u,1)
for(u=A.d.gae(v),r=new B.eJ(u,new C.drz(p));r.C();)o.aCj(u.gR(0),o.ax)}else o.aHo(u)}}A.d.bq(o.d,new C.drA(o))
A.d.bq(o.e,new C.drB(o))
A.d.bq(o.f,new C.drC(o))
A.d.bq(o.w,new C.drD(o))
A.d.bq(o.x,new C.drE(o))
A.d.bq(o.r,new C.drF(o))
o.b0()},
vN(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
m=B.a([],x.x)
for(v=this.a,v=new B.ds(v,v.r,v.e),u=x.N,t=x.K;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(B.J(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=B.a([],x.E)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,B.I)(t),++o){n=t[o]
v.push(B.a([n.a,n.b],r))}return A.V.av(B.J(["nodes",m,"edges",v],u,x.ew),null)},
Uq(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.V.aP(0,d,null))
k.a8(0)
for(o=x.j,n=J.aT(o.a(J.t(w,"nodes"))),m=k.a;n.C();){v=n.gR(n)
u=B.w(J.t(v,"k"))
if(!D.na.am(0,u))continue
t=B.w(J.t(v,"id"))
m.n(0,t,new C.rb(t,u,new B.r(B.dE(J.t(v,"x"))*k.cy.a,B.dE(J.t(v,"y"))*k.cy.b),A.j.M(B.dE(J.t(v,"p")))))
s=B.ca(B.aL(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aT(o.a(J.t(w,"edges"))),n=k.b;o.C();){r=o.gR(o)
q=B.w(J.t(r,0))
p=B.w(J.t(r,1))
if(m.am(0,q)&&m.am(0,p))n.push(new C.D1(q,p))}k.b0()
return!0}catch(l){return!1}},
cWo(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.rb(n,r,new B.r(q*p.a,o*p.b),s))
l.b0()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bf_(w[m.a],w[m.b])}},
gZ(d){return this.cy}}
C.GE.prototype={}
C.X8.prototype={
S(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aGj(new C.bjw(B.T(w,x.f3),v,u,t,s,r,q,p,o,B.T(w,n),B.T(w,n),B.T(w,n),B.T(w,n),A.cR,A.L,A.az,$.ax()),A.bC,A.J,A.J,A.Z,null,null)}}
C.aGj.prototype={
adH(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$adH=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.aA(),$async$adH)
case 6:q=n.k6(m.t(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new C.eyj(s))
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
return B.i($async$adH,v)},
aaC(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$aaC=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new C.ey8(s))
u=3
w=6
return B.b(B.aA(),$async$aaC)
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
return B.i($async$aaC,v)},
bPv(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a3(n).k("b8<2>")
v=""+n.a+"|"+o.length+"|"+new B.b8(n,w).cE(0,0,new C.eya())+"|"+A.d.cE(o,0,new C.eyb())
if(v===p.ch)return p.CW
u=new C.eye()
t=x.s
s=B.a([],t)
r=new C.eyf(p,s,u)
for(n=new B.b8(n,w).gae(0),w=new B.eJ(n,new C.eyc());w.C();){q=n.gR(0)
if(!A.d.aV(o,new C.eyd(q)))s.push(B.w(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.cX(s,0,B.dC(5,"count",x.S),x.N).dq(0)},
Y(){var w,v=this
v.a3()
v.adH()
v.d.db=v.ay
w=v.q1(new C.eyJ(v))
w.fX(0)
v.e!==$&&B.aQ()
v.e=w},
t(){var w=this,v=w.as
if(v!=null)v.a1(0)
v=w.e
v===$&&B.c()
v.t()
v=w.d
v.U$=$.ax()
v.P$=0
w.bA7()},
adb(d){return this.c2T(d)},
c2T(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$adb=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.aA(),$async$adb)
case 6:q=m.aV(l.t(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.Uq(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aZD(A.d.gH(D.aCq))
if(s.c!=null)s.m(new C.eyi())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$adb,v)},
aZD(d){this.d.cWo(0,d.c,d.d)
this.EM()},
EM(){var w=this.as
if(w!=null)w.a1(0)
this.as=B.cy(A.lL,new C.ey4(this))},
azb(d){var w,v,u,t,s=this.d.a,r=B.a3(s).k("b8<2>")
s=B.C(new B.b8(s,r),r.k("M.E"))
r=B.U(s).k("dr<1>")
s=new B.dr(s,r)
s=new B.bQ(s,s.gJ(0),r.k("bQ<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
ckI(d){var w,v,u,t,s,r=this.d.a,q=B.a3(r).k("b8<2>")
r=B.C(new B.b8(r,q),q.k("M.E"))
q=B.U(r).k("dr<1>")
r=new B.dr(r,q)
r=new B.bQ(r,r.gJ(0),q.k("bQ<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c2H(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.ds(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.na.h(0,r.b).c===D.xW)continue
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
cbL(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hC4(new B.r(n.a+36,n.b+0),new B.r(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cEA(d){var w,v,u,t,s,r,q=this,p=q.azb(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.eZ()
u=v.b
if(u==="button"){w.aHo(p)
return}if(q.r)return
t=D.na.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.rp)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.b0()
q.EM()
return}if(q.r)return
r=q.cbL(d)
if(r!=null){w=q.d
A.d.cG(w.b,r)
w.b0()
q.EM()}},
cm0(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.ckI(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.azb(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aK(0,d)}},
cm1(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b0()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.r(A.j.D(d.a+s.y.a,46,t.a-46),A.j.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b0()}}},
b41(){var w,v,u=this
if(u.z!=null){w=u.c2H(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bf_(v,w)}else v=!1
if(v){B.jZ()
u.EM()}u.z=null
u.d.b0()}else if(u.x!=null){if(u.at)u.EM()
u.x=null}},
adU(d){return this.c5O(d)},
c5O(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$adU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.azb(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jC()
p=t.c
p.toString
w=3
return B.b(B.bU(K.mb,null,new C.eyl(q),p,!0,!0,!1,A.lW,!1,!1,x.y),$async$adU)
case 3:if(f===!0){r.W(0,s)
t.EM()}case 1:return B.h(u,v)}})
return B.i($async$adU,v)},
cbJ(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.tf(0,d,new B.r(v.a*(0.25+u.ai()*0.5),v.b*(0.2+u.ai()*0.55)))
B.eZ()
this.EM()},
ahS(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ahS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bU(K.mb,null,new C.eyn(),s,!0,!0,!0,A.lW,!1,!1,x.es),$async$ahS)
case 2:t=e
if(t!=null)u.aZD(t)
return B.h(null,v)}})
return B.i($async$ahS,v)},
afh(d){var w=0,v=B.j(x.H),u=this,t
var $async$afh=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.ey7(),t,null,!0,!0,x.y),$async$afh)
case 2:if(f===!0){u.d.a8(0)
u.EM()}return B.h(null,v)}})
return B.i($async$afh,v)},
B(d){var w=this,v=null,u=B.a([B.ajw(w.r?new B.bK(A.a5,v,v,new B.D(A.Hf,B.ht(D.bXP,D.fMD,new C.eyH(w),v),v),v):w.cbM(),A.b0,A.iP),B.E(B.cn(new C.eyI(w)),1)],x.p)
if(!w.r)u.push(w.czj())
return B.c4(v,A.c3,B.bm(!0,B.x(u,A.l,v,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)},
bLc(){var w=null,v=new C.ey9(),u=A.w.j(0.7),t=B.l(26),s=B.K(A.bv.j(0.5),A.r,1)
return B.bR(0,B.ea(B.as(B.p(w,B.c9(B.x(B.a([D.fYb,A.aw,D.h4X,A.aB,v.$4(A.oJ,A.bv,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(Y.Dm,A.ct,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.kb,A.c4,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.Pw,A.bt,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.h4e,new B.bK(A.a9,w,w,B.bO(!1,D.fVf,w,w,!0,w,w,w,this.gbL5(),w,w),w)],x.p),A.E,w,A.e,A.N,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),A.f,w,A.Y3,new B.o(K.mb,w,s,t,w,w,A.n),w,w,w,A.ft,Ao.anm,w,w,w),w,w,w),u,!0),0,0,0)},
cbM(){var w=this,v=null,u=B.aH(v,v,v,v,Ag.n8,v,v,v,new C.eyt(w),v,v,v,v,v,v),t=w.aa2(A.Dc,"How it works",new C.eyu(w),!0),s=w.ay?A.oM:V.tp
return new B.D(D.bIi,B.A(B.a([u,D.bK_,t,w.aa2(s,"Sound",new C.eyv(w),!0),w.aa2(A.e9,"Ideas",w.gcpO(),!0),w.aa2(I.wP,"Clear",w.gcbK(w),!0),w.aQd(A.hc,"Show",new C.eyw(w),!0,!0)],x.p),A.l,v,A.e,A.h,0,v,v),v)},
aQd(d,e,f,g,h){var w=null,v=h?A.bv:A.c.j(0.08),u=B.l(14),t=B.l(14),s=B.a([B.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new B.D(Ad.wG,B.aG(!1,A.a3,!0,u,B.aM(!1,t,!0,B.ha(new B.D(new B.Q(8,8,8,8),B.A(s,A.l,w,A.e,A.N,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ai),w)},
aa2(d,e,f,g){return this.aQd(d,e,f,g,!1)},
czj(){var w=null,v=new C.eyp(this),u=A.c.j(0.08)
return B.p(w,B.c9(B.A(B.a([v.$2("START",D.xW),v.$2("CHANGE",D.Fs),v.$2("REACT",D.rp)],x.p),A.E,w,A.e,A.h,0,w,w),A.t,w,A.y,w,w,w,w,A.aL),A.f,w,w,new B.o(K.C3,w,new B.bF(new B.ay(u,1,A.r,-1),A.a1,A.a1,A.a1),w,w,w,A.n),w,w,w,w,D.bDg,w,w,w)},
czk(d){var w,v,u,t,s=null,r=D.na.h(0,d)
r.toString
w=B.l(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.K(v.j(0.5),A.r,1)
return new B.D(A.fn,B.az(s,B.p(s,B.x(B.a([B.X(r.b,v,s,s,s,22),A.cQ,B.d(r.a,s,1,A.a2,s,s,s,D.aX1,s,s,s)],x.p),A.l,s,A.e,A.N,0,A.p),A.f,s,s,new B.o(s,s,t,w,s,new B.a8(A.aZ,A.b4,A.x,u,s,s),A.n),s,s,s,s,A.hM,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eyo(this,d),s,s,s,s,s,s,!1,A.a4),s)}}
C.bjx.prototype={
a4(b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=b2.b,b5=b4.ax,b6=b7.c
J.br(b6.save())
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
b7.aD(new B.a6(0,0,0+t,0+w),p)}for(w=b4.b,t=w.length,q=x.O,p=x.v,o=b4.a,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){m=w[n]
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
d=new B.aI(f.r,A.aj,b3,b3,e)
e.push(new B.aZ(i,j))
d.ab()
a0=Math.max(40,Math.abs(g-i)*0.5)
f=new B.kn(i+a0,j,g-a0,h,g,h)
e.push(f)
e=d.f
if(e!=null)f.ak(e)
d.ab()
a1=D.na.h(0,l.b).d
a2=D.na.h(0,k.b).d
f=new B.ar(A.S,A.Q,A.W,A.X,A.U)
f.b=A.aa
f.c=3
f.d=A.bF
e=B.a([a1.j(0.55),a2.j(0.55)],q)
h=B.t1(new B.r(i,j),new B.r(g,h))
f.sap(new B.a8(A.a5,A.a9,A.x,e,b3,b3).aG(0,new B.a6(h.a-2,h.b-2,h.c+2,h.d+2)))
b7.ag(d,f)}for(w=b4.d,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a3=w[n]
l=o.h(0,a3.a)
k=o.h(0,a3.b)
if(l==null||k==null)continue
j=a3.c
a4=A.j.D((b5-j)/(a3.d-j),0,1)
j=l.c
i=k.c
a5=C.hC4(new B.r(j.a+36,j.b+0),new B.r(i.a-36,i.b),a4)
$.S()
i=new B.ar(A.S,A.Q,A.W,A.X,A.U)
i.r=A.c.j(0.35).gp(0)
i.y=N.oz
b7.O(a5,8,i)
i=new B.ar(A.S,A.Q,A.W,A.X,A.U)
i.r=A.c.gp(0)
b7.O(a5,4,i)}a6=b2.d.$0()
if(a6!=null&&o.h(0,a6)!=null){a7=o.h(0,a6).c.a5(0,D.JQ)
a8=b2.e.$0()
w=a8.a
t=a7.a
a0=Math.max(40,Math.abs(w-t)*0.5)
d=new B.aI($.S().r,A.aj,b3,b3,B.a([],p))
p=a7.b
d.E(new B.aZ(t,p))
j=a8.b
d.E(new B.kn(t+a0,p,w-a0,j,w,j))
j=B.L()
j.b=A.aa
j.c=3
j.r=A.c.j(0.7).gp(0)
b7.ag(d,j)
j=B.L()
j.r=A.c.gp(0)
b7.O(a8,7,j)}for(w=b4.f,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a9=w[n]
p=a9.c
v=A.j.D((b5-p)/700,0,1)
if(b5<p)continue
p=A.e5.aB(0,v)
$.S()
j=new B.ar(A.S,A.Q,A.W,A.X,A.U)
j.b=A.aa
i=1-v
j.c=3.5*i+0.5
j.r=a9.b.j(i*0.9).gp(0)
b7.O(a9.a,14+a9.d*p,j)}for(w=b4.w,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){b0=w[n]
v=A.j.D((b5-b0.d)/600,0,1)
p=b0.a
j=b0.b
i=B.kI(p,j,A.e5.aB(0,v))
i.toString
j=B.kI(p,j,A.e5.aB(0,A.j.D(v-0.35,0,1)))
j.toString
$.S()
p=new B.ar(A.S,A.Q,A.W,A.X,A.U)
p.c=5
p.d=A.bF
h=b0.c
g=B.a([h.j(0),h],q)
f=B.t1(j,i)
p.sap(new B.a8(A.a5,A.a9,A.x,g,b3,b3).aG(0,new B.a6(f.a-4,f.b-4,f.c+4,f.d+4)))
b7.ah(j,i,p)
p=new B.ar(A.S,A.Q,A.W,A.X,A.U)
p.r=A.c.gp(0)
b7.O(i,6,p)
p=new B.ar(A.S,A.Q,A.W,A.X,A.U)
p.r=h.j(0.5*(1-v)).gp(0)
p.y=A.kW
b7.O(i,12,p)}for(w=b4.e,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a3=w[n]
v=A.j.D((b5-a3.f)/a3.e,0,1)
p=a3.a
$.S()
j=new B.ar(A.S,A.Q,A.W,A.X,A.U)
j.r=a3.c.j(1-v).gp(0)
b7.O(p,a3.d*(1-0.5*v),j)}for(w=b4.r,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){k=w[n]
p=k.a
$.S()
j=new B.ar(A.S,A.Q,A.W,A.X,A.U)
i=k.c
j.r=i.j(0.35).gp(0)
j.y=A.kW
b7.O(p,11,j)
j=k.a
p=new B.ar(A.S,A.Q,A.W,A.X,A.U)
p.sap(new B.bV(A5.Bm,0.5,A.x,b3,0,B.a([A.c,i],q),b3,b3).aG(0,B.bW(k.a,8)))
b7.O(j,8,p)}for(b4=b4.x,w=b4.length,n=0;n<b4.length;b4.length===w||(0,B.I)(b4),++n){a5=b4[n]
v=A.j.D((b5-a5.d)/1000,0,1)
t=1-v
b1=C.bjy(a5.b,26+8*t,a5.c.j(t),b3,b3,A.u)
t=a5.a
q=b1.b
p=q.c
q=q.a.c
b1.a4(b7,new B.r(t.a-p/2,t.b-(40+60*v+q.gba(q)/2)))}for(b4=new B.ds(o,o.r,o.e);b4.C();)b2.clz(b7,b4.d,b5)
b6.restore()},
clz(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.na.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.j.D(1-(f-w)/520,0,1)
u=B.bS(e.c,64,64)
t=B.bx(u,A.im)
s=t.eF(A.cy)
$.S()
r=B.L()
r.r=A.w.j(0.55).gp(0)
r.y=A.mh
d.aq(s,r)
if(v>0){s=t.co(6)
r=B.L()
r.r=h.d.j(0.6*v).gp(0)
r.y=A.z1
d.aq(s,r)}s=t.eF(A.cJ)
r=B.L()
q=h.d
r.r=B.ap(q,A.w,0.65).gp(0)
d.aq(s,r)
r=B.L()
s=B.ap(q,A.c,0.18+0.4*v)
s.toString
p=B.ap(q,A.w,0.35)
p.toString
r.sap(new B.a8(A.aZ,A.b4,A.x,B.a([s,p],x.O),j,j).aG(0,u))
d.aq(t,r)
r=B.L()
r.b=A.aa
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aq(t,r)
r=h.b
p=e.c
o=C.bjy(B.ll(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a4(d,p.aK(0,new B.r(s/2,r.gba(r)/2)))
n=C.bjy(h.a,11,A.c,j,j,A.H)
n.a4(d,e.c.a5(0,new B.r(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.aCZ[A.o.F(e.d,6)]:j
h=h.c
if(h===D.rp){s=e.c.a5(0,new B.r(0,62))
r=B.L()
r.r=D.aDC[A.o.F(e.d,6)].gp(0)
d.O(s,5,r)}else if(m!=null){l=C.bjy(m,9.5,A.aE,j,j,A.O)
l.a4(d,e.c.a5(0,new B.r(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bjy(m,9.5,A.aE,j,j,A.O)
l.a4(d,e.c.a5(0,new B.r(-l.b.c/2,54)))}if(k.c)return
if(h!==D.xW)k.b4P(d,e.c.aK(0,D.JQ),q)
k.b4P(d,e.c.a5(0,D.JQ),q)},
b4P(d,e,f){var w
$.S()
w=B.L()
w.r=A.c3.gp(0)
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
C.aOi.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b3()
this.bB()}}
C.eh.prototype={}
C.u0.prototype={
asi(d,e,f,g){var w=this
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
C.abC.prototype={}
C.acJ.prototype={}
C.a5B.prototype={
bgS(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.h3()?-1:1
v=t.ai()*3.141592653589793*2
u=f*(0.3+t.ai())
s.push(new C.abC(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ai()*0.45));++r}},
c7X(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bq(w,new C.bQc())},
alo(d,e,f,g){var w="p"+this.c++,v=new C.u0(w,e,f,g)
v.asi(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bq(this.b,new C.bQn(e))},
a8(d){A.d.a8(this.a)
A.d.a8(this.b)},
cNn(d,e,f,g,h){return A.d.aV(this.b,new C.bQi(e,f,g,h))},
ame(d,e,f,g){var w
if(d===f||this.cNn(0,d,e,f,g))return null
w=new C.acJ(d,e,f,g)
this.b.push(w)
return w},
aCQ(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
Al(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
ap_(d){return this.Mq(d)&&!d.x&&d.cx>this.Al(d)},
b9b(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Mq(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
cc5(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.Ag.h(0,v)
if(w!=null)return w.a
return 100},
vN(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c7X(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.U(v).k("Y<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.I)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.Y(v,new C.bQo(a2),t).cE(0,0,new C.bQp(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.T(x.N,u)
n=new C.bQr(o)
m=B.a([],x.t)
l=new C.bQq(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.I)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.I)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.T(u,u)
f=new C.bQt(g,l,n)
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
a2.b97(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.Al(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b97(e,d,w,!0)
a2.bRR(a4)},
b97(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.T(x.N,b3),b5=new C.bQe(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bQd(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.I)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bQg(B.T(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.I)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=B.c1(b7,0,!1,b3)
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
if(h)B.bk(B.dO(g,null))
e=B.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=B.c1(b7,0,!1,b3)
a0=B.c1(b7,0,!1,b3)
k.a8(0)
j.a8(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.I)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b9b(t)*(1+t.CW))
a4=b2.aCQ(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.cc5(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bVd(e,a0,b8)
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
bVd(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return B.c1(d,0,!1,x.i)
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
t[m]=t[m]-g*u[l][m]}}}f=B.c1(d,0,!1,x.i)
for(e=0;e<v;++e){t=u[e]
h=t[e]
s=a0[e]
f[s]=Math.abs(h)<1e-14?0:t[v]/h}return f},
bRR(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.I)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aCQ(o)/a1.b9b(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.Al(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bJQ(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bgS(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.ut(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
l=o.fr
j=Math.abs(m*l)
i=Math.abs(l)
if((n==="buck"||n==="regulator")&&!o.x){m=n==="regulator"
h=m?5:o.e
if(i<0.002)o.cy=A.j.D(o.db-h,0,24)
else o.cy=A.j.D(o.cy+(o.dx-h)*0.7,0,24)
l=o.db
g=l>h+0.2&&Math.abs(o.dx-h)<0.35?1:0
o.fx=g
o.ax=g>0?o.ax+a2:0
if(l>26)a1.ut(o,"The "+$.qG().h(0,n).b+" got "+A.j.ad(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.ut(o,"More than 1.5 amps went through the "+$.qG().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.ut(o,"The regulator had to turn "+A.j.ad(o.cy,1)+" V into heat while "+A.j.V(i*1000)+" mA flowed. That is "+A.j.ad(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.ut(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.Ag.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qG().h(0,n).b
l=f.b
l=l===A.j.iG(l)?""+A.j.V(l):B.w(l)
g=f.c
g=g===A.j.iG(g)?""+A.j.V(g):B.w(g)
a1.ut(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.j.ad(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.ffV.q(0,n)){m=o.fx>0?A.j.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.j.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.ut(o,"The bulb got "+A.j.ad(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.j.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.ut(o,"The LED had "+A.j.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.j.D(j/14,0,1)
break
case"motor":n=A.j.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.j.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.ut(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.j.D(i/1,0,1)
if(!o.x&&i>1)a1.ut(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.ut(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.j.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.ut(o,"The capacitor was charged to "+A.j.ad(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bJQ(d){return A.d.aV(this.a,new C.bQb(d))},
ut(d,e){var w
d.x=!0
d.ay=e
this.bgS(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
blw(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a8(0)},
aJa(d){var w=d.b
return D.aTN.q(0,w)||D.Ag.am(0,w)||w==="buck"||w==="regulator"},
bim(d){var w,v=!0
if(!this.Mq(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.Ag.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
VG(d,e){var w=this.b
return new B.Y(w,new C.bQv(d,e),B.U(w).k("Y<1>")).gJ(0)},
ru(d){var w,v
if(d.x)return!1
w=d.b
if(D.Ag.am(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bgo(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qG().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aJa(d)||i.ru(d))return null
w=i.VG(d,0)
v=i.VG(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.U(u).k("Y<1>")
s=B.C(new B.Y(u,i.gcVY(),t),t.k("M.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.j.iG(r)?""+A.j.V(r):B.w(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.j.ad(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.Ag.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.MD("battery"),o=J.aT(t.a),t=new B.eJ(o,t.b);t.C();){n=o.gR(o)
if(n.e===1.5&&n.as<=0.02&&i.VG(n,0)+i.VG(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.MD("switch"),o=J.aT(t.a),t=new B.eJ(o,t.b);t.C();)if(!o.gR(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qG().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.Al(k))return"The "+$.qG().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.j.ad(k.cx,2)+" amps, but it can only give about "+A.j.ad(i.Al(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.aV(u,new C.bQj(i,d))
h=q.b
h=h===A.j.iG(h)?""+A.j.V(h):B.w(h)
u=A.j.ad(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.j.ad(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.j.ad(Math.abs(d.dy),1)+" V). Try a bigger battery."},
MD(d){var w=this.a
return new B.Y(w,new C.bQm(d),B.U(w).k("Y<1>"))},
aIM(d){return this.MD(d).aV(0,new C.bQl(0.35))},
qe(d,e){return A.d.aV(this.a,new C.bQk(e))}}
C.ak6.prototype={
a4(c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8=c3.a,b9=c3.b,c0=0+b8,c1=0+b9
$.S()
w=B.L()
w.r=F.nv.gp(0)
c2.aD(new B.a6(0,0,c0,c1),w)
v=B.L()
v.r=A.c.j(0.06).gp(0)
for(u=12;u<b8;u+=24)for(t=12;t<b9;t+=24)c2.O(new B.r(u,t),1.1,v)
for(w=b6.b,s=w.b,r=s.length,q=b6.f,p=0;p<s.length;s.length===r||(0,B.I)(s),++p){o=s[p]
n=o.a
m=n.c
l=o.b===0?-1:1
k=D.mw.am(0,n.b)?(n.ch-1)*38:0
n=n.d
j=o.c
i=j.c
h=o.d===0?-1:1
g=D.mw.am(0,j.b)?(j.ch-1)*38:0
b6.cK4(c2,new B.r(m*b8+l*(42+k),n*b9),new B.r(i*b8+h*(42+g),j.d*b9),o,o===q)}s=b6.d
if(s!=null&&b6.e!=null){f=C.hPT(s.a,s.b,c3)
s=b6.e
s.toString
$.S()
r=B.L()
r.r=A.ab.gp(0)
r.c=3
r.d=A.bF
c2.ah(f,s,r)}for(s=w.a,r=s.length,q=b6.c,n=c2.c,m=b6.r,l=x.v,p=0;p<s.length;s.length===r||(0,B.I)(s),++p){e=s[p]
k=e.c*b8
j=e.d*b9
if(e.Q>0){i=Math.sin(w.d*30)
$.S()
h=new B.ar(A.S,A.Q,A.W,A.X,A.U)
h.r=F.MV.j(A.j.D(e.Q*0.45,0,0.6)).gp(0)
h.y=A.z1
c2.O(new B.r(k,j),46+14*i,h)}d=m.h(0,e.a)
if(d==null)d=1
J.br(n.save())
n.translate(k,j)
i=A.j.D(A.nm.aB(0,A.j.D(d,0,1)),0.01,1.4)
n.scale(i,i)
b6.cmz(c2,e,e===q)
n.restore()
i=e.b
if((i==="battery"||i==="solar"||i==="crank"||i==="turbine")&&!e.x&&e.cx>w.Al(e)){h=k+0
g=j+-40
a0=Math.sin(w.d*10)
a1=$.S().r
a2=B.a([],l)
a3=new B.aI(a1,A.aj,b7,b7,a2)
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
a8=new B.bw()
a2.push(a8)
a2=a3.f
if(a2!=null)a8.ak(a2)
a3.ab()
a2=new B.ar(A.S,A.Q,A.W,A.X,A.U)
a2.r=A.aA.j(0.65+0.35*a0).gp(0)
c2.ag(a3,a2)
a2=B.a([],l)
a1=new B.aI(a1,A.aj,b7,b7,a2)
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
a0=new B.bw()
a2.push(a0)
a2=a1.f
if(a2!=null)a0.ak(a2)
a1.ab()
a0=new B.ar(A.S,A.Q,A.W,A.X,A.U)
a0.b=A.aa
a0.c=1.6
a0.r=A.c.gp(0)
c2.ag(a1,a0)
b0=new B.iM(new B.eq("!",b7,b7,A.cL,b7,b7,b7,b7,b7,b7,new B.F(!0,A.c,b7,b7,b7,b7,14,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a6,A.bW,new B.jj(1),b7,b7,b7,b7,A.bX,b7,A.cr)
b0.ec()
b0.a4(c2,new B.r(h+-3,g+-8))}if(!e.x)h=(D.aTN.q(0,i)||D.Ag.am(0,i)||i==="buck"||i==="regulator")&&!w.ru(e)&&w.VG(e,0)+w.VG(e,1)>0
else h=!1
if(h){k+=0
j+=-40
$.S()
h=new B.ar(A.S,A.Q,A.W,A.X,A.U)
h.r=A.at.gp(0)
c2.O(new B.r(k,j),10,h)
b0=new B.iM(new B.eq("!",b7,b7,A.cL,b7,b7,b7,b7,b7,b7,new B.F(!0,A.w,b7,b7,b7,b7,14,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a6,A.bW,new B.jj(1),b7,b7,b7,b7,A.bX,b7,A.cr)
b0.ec()
b0.a4(c2,new B.r(k+-3,j+-8))}for(b1=0;b1<2;++b1){k=e.c
j=b1===0
h=j?-1:1
g=D.mw.am(0,i)?(e.ch-1)*38:0
g=k*b8+h*(42+g)
h=e.d*b9
b0=new B.r(g,h)
$.S()
k=new B.ar(A.S,A.Q,A.W,A.X,A.U)
k.r=F.nv.gp(0)
c2.O(b0,7,k)
k=new B.ar(A.S,A.Q,A.W,A.X,A.U)
k.b=A.aa
k.c=2.4
k.r=(j&&w.bim(e)?A.bY:A.ab).gp(0)
c2.O(b0,6,k)
if(j&&w.bim(e)){b0=new B.iM(new B.eq("+",b7,b7,A.cL,b7,b7,b7,b7,b7,b7,new B.F(!0,A.bY,b7,b7,b7,b7,13,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a6,A.bW,new B.jj(1),b7,b7,b7,b7,A.bX,b7,A.cr)
b0.ec()
b0.a4(c2,new B.r(g+-4,h+-22))}}}for(r=w.f,q=r.length,p=0;p<r.length;r.length===q||(0,B.I)(r),++p){b2=r[p]
n=b2.a*b8+b2.c
m=b2.b*b9+b2.d
b3=new B.r(n,m)
b4=A.j.D(b2.r/0.8,0,1)
l=B.ap(M.NA,F.a_H,b4)
l.toString
k=b2.f
$.S()
j=new B.ar(A.S,A.Q,A.W,A.X,A.U)
j.r=l.gp(0)
j.c=2.4
j.d=A.bF
c2.ah(b3,new B.r(n-b2.e*0.035,m-k*0.035),j)
j=new B.ar(A.S,A.Q,A.W,A.X,A.U)
j.r=l.j(0.35*b4).gp(0)
j.y=A.OK
c2.O(b3,4.5*b4+1,j)}if(A.d.aV(s,new C.bKz())){b5=A.d.cE(s,0,new C.bKA())
$.S()
b9=B.L()
b9.r=D.bid.j(0.05+0.09*b5*(0.5+0.5*Math.sin(w.d*22))).gp(0)
c2.aD(new B.a6(0,0,c0,c1),b9)
b0=B.fp(b7,A.cr,b7,b7,b7,D.fr6,A.a6,A.bW,b7,A.dA,A.bX)
b0.mZ(b8-24)
b0.a4(c2,new B.r(12,10))}},
qU(d,e,f,g,h){var w=null,v=B.fp(w,A.cr,w,w,w,B.cQ(w,w,w,w,w,w,w,w,w,B.m(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a6,A.bW,w,A.dA,A.bX)
v.ec()
v.a4(d,f)},
cK4(d,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.aI($.S().r,A.aj,null,null,B.a([],x.v))
e.E(new B.aZ(a0.a,a0.b))
w=C.hHT(a0,a1,a2)
e.E(new B.cc(w.a,w.b,a1.a,a1.b))
v=a2.a
u=Math.abs(v.fr)
t=a2.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ap(A.aQ,F.MV,A.j.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ap(A.aG,A.aQ,A.j.D(r*1.2,0,1))
u.toString
o=u}else o=A.bh
u=B.L()
u.b=A.aa
u.c=a3?7:5
u.d=A.bF
s=a3?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
d.ag(e,u)
u=B.L()
u.b=A.aa
u.c=2.4
u.d=A.bF
u.r=(a3?A.c:o).gp(0)
d.ag(e,u)
if(q){n=new B.a5J(new B.tG(B.zA(e),!1,B.a([],x.R))).gH(0)
m=40+A.j.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=this.b
k=0
for(;;){v.j6()
j=t[u].b
j===$&&B.c()
if(!(k<j.a.length()/22))break
j=s.d
v.j6()
i=t[u].b
i===$&&B.c()
i=A.j.F(k*22+j*m*l,i.a.length())
v.j6()
j=t[u].b
j===$&&B.c()
j=j.a.length()
v.j6()
h=t[u].b
h===$&&B.c()
g=A.j.F(i+j,h.a.length())
v.j6()
f=t[u].Hz(g)
j=new B.ar(A.S,A.Q,A.W,A.X,A.U)
j.r=A.c.gp(0)
d.O(f.a,2.6,j);++k}}},
PO(d,e,f,g){var w,v,u,t
$.S()
w=B.L()
v=g?A.aZ:A.a5
u=g?A.b4:A.a9
t=B.ap(e,A.w,0.3)
t.toString
w.sap(new B.a8(v,u,A.x,B.a([e,f,e,t],x.O),A.IG,null).aG(0,d))
return w},
aym(d,e,f){return this.PO(d,e,f,!0)},
c7w(d,e){return this.PO(d,A.bh,A.hY,e)},
aj1(d,e){var w,v,u
$.S()
w=B.L()
w.sap(D.aRX.aG(0,B.bW(e,4.2)))
d.O(e,4.2,w)
w=e.a5(0,D.esH)
v=e.a5(0,D.esQ)
u=B.L()
u.r=A.cP.gp(0)
u.c=1.2
d.ah(w,v,u)},
cmz(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.S(),c0=B.L()
c0.sap(D.c7Z.aG(0,D.fc8))
c0.c=3.4
c0.d=A.bF
w=B.L()
w.r=A.w.j(0.45).gp(0)
w.y=N.oz
c1.c2(D.fbX,w)
if(c3){w=B.bx(D.fc6,A.jP)
v=B.L()
v.r=A.c.j(0.14).gp(0)
c1.aq(w,v)}u=C.hmI(c2)
c1.ah(new B.r(-u,0),D.eui,c0)
c1.ah(D.erm,new B.r(u,0),c0)
t=c2.x
w=c2.b
s=D.mw.am(0,w)&&c2.ch!==1
if(s){J.br(c1.c.save())
c1.bW(0,c2.ch)}switch(w){case"battery":b3.bGA(c1,c2)
break
case"solar":r=B.bx(D.fc_,A.jy)
c1.aq(r,b3.PO(new B.a6(r.a,r.b,r.c,r.d),A.cZ,A.bO,!1))
b9=B.L()
w=B.ap(D.bm9,A.d8,0.25+0.55*c2.f)
w.toString
v=B.ap(D.bvy,A.ma,0.3+0.4*c2.f)
v.toString
b9.sap(new B.a8(A.ay,A.aD,A.x,B.a([w,v],x.O),b4,b4).aG(0,D.aad))
c1.aD(D.aad,b9)
q=B.L()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(p=1;p<6;++p){b9=-34+p*68/6
c1.ah(new B.r(b9,-18),new B.r(b9,18),q)}for(p=1;p<4;++p){b9=-18+p*9
c1.ah(new B.r(-34,b9),new B.r(34,b9),q)}for(p=0;p<6;++p){b9=-34+(p+0.5)*68/6
$.S()
w=new B.ar(A.S,A.Q,A.W,A.X,A.U)
w.r=A.cC.j(0.5).gp(0)
w.c=0.6
c1.ah(new B.r(b9,-18),new B.r(b9,18),w)}b9=new B.aI($.S().r,A.aj,b4,b4,B.a([],x.v))
b9.E(new B.aZ(-34,18))
b9.E(new B.aq(-6+40*c2.f,-18))
b9.E(new B.aq(4+40*c2.f,-18))
b9.E(new B.aq(-24,18))
b9.E(new B.bw())
w=B.L()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.ag(b9,w)
w=c2.f
b9=B.L()
b9.r=A.eg.j(0.9).gp(0)
c1.O(D.erq,4+4*w,b9)
break
case"crank":o=B.bx(D.fbL,A.fR)
c1.aq(o,b3.aym(new B.a6(o.a,o.b,o.c,o.d),A.bw,A.bP))
b9=B.L()
b9.sap(D.aRY.aG(0,B.bW(A.J,12)))
c1.O(A.J,12,b9)
n=new B.r(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=B.L()
b9.r=A.cC.gp(0)
b9.c=5
b9.d=A.bF
c1.ah(A.J,n,b9)
b9=B.L()
b9.sap(D.eDN.aG(0,B.bW(n,7)))
c1.O(n,7,b9)
b3.aj1(c1,D.eua)
b3.aj1(c1,D.erb)
break
case"turbine":b9=b9.r
w=x.v
v=new B.aI(b9,A.aj,b4,b4,B.a([],w))
v.E(new B.aZ(-3,24))
v.E(new B.aq(3,24))
v.E(new B.aq(1.5,0))
v.E(new B.aq(-1.5,0))
v.E(new B.bw())
m=B.L()
m.r=A.bO.gp(0)
c1.ag(v,m)
for(v=c1.c,l=0;l<3;++l){m=c2.y
J.br(v.save())
v.rotate((m+l*2.094)*180/3.141592653589793,0,0)
m=B.a([],w)
k=new B.aI(b9,A.aj,b4,b4,m)
m.push(new B.aZ(0,-2))
k.ab()
j=new B.cc(6,-14,2,-30)
m.push(j)
i=k.f
if(i!=null)j.ak(i)
k.ab()
j=new B.cc(-2,-14,0,-2)
m.push(j)
i=k.f
if(i!=null)j.ak(i)
k.ab()
j=new B.bw()
m.push(j)
m=k.f
if(m!=null)j.ak(m)
k.ab()
m=new B.ar(A.S,A.Q,A.W,A.X,A.U)
m.r=A.c.gp(0)
c1.ag(k,m)
v.restore()}b9=B.L()
b9.sap(D.eDu.aG(0,B.bW(A.J,4.5)))
c1.O(A.J,4.5,b9)
break
case"switch":o=B.bx(D.fbS,A.o_)
b9=B.L()
b9.sap(D.atT.aG(0,new B.a6(o.a,o.b,o.c,o.d)))
c1.aq(o,b9)
b3.aj1(c1,D.Un)
b3.aj1(c1,D.aMK)
h=c2.w?D.aMK:H.aMA
b9=B.L()
b9.r=A.av.gp(0)
b9.c=6
b9.d=A.bF
c1.ah(D.Un,h,b9)
b9=B.L()
b9.r=(c2.w?A.bc:A.bO).gp(0)
b9.c=4
b9.d=A.bF
c1.ah(D.Un,h,b9)
b9=B.kI(D.Un,h,0.85)
b9.toString
w=B.L()
w.r=A.aA.gp(0)
c1.O(b9,5,w)
break
case"fuse":g=B.bx(D.aSG,D.aS2)
b9=B.L()
b9.r=A.fK.j(0.25).gp(0)
c1.aq(g,b9)
b9=B.L()
b9.b=A.aa
b9.c=1.4
b9.r=A.aE.gp(0)
c1.aq(g,b9)
if(!t){b9=B.L()
b9.c=1.6
b9.r=B.ap(A.bO,A.cN,c2.fx).gp(0)
c1.ah(D.aN2,D.aMI,b9)}else{b9=B.L()
b9.c=1.6
b9.r=A.bV.gp(0)
c1.ah(D.aN2,D.euE,b9)
b9=B.L()
b9.c=1.6
b9.r=A.bV.gp(0)
c1.ah(D.esd,D.aMI,b9)
b9=B.L()
b9.r=A.dX.gp(0)
c1.O(A.J,6,b9)}for(f=0;f<2;++f){e=B.bS(new B.r(M.fO[f]*22,0),20,9)
c1.aq(B.bx(e,A.iD),b3.PO(e,A.d5,A.oh,!0))}break
case"pot":b9=B.L()
b9.sap(D.eDF.aG(0,B.bW(A.J,21)))
c1.O(A.J,21,b9)
for(l=0;l<=10;++l){d=2.356194490192345+l*3.141592653589793*1.5/10
b9=Math.cos(d)
w=Math.sin(d)
v=Math.cos(d)
m=Math.sin(d)
k=new B.ar(A.S,A.Q,A.W,A.X,A.U)
k.r=A.aE.gp(0)
k.c=1.2
c1.ah(new B.r(b9*18,w*18),new B.r(v*22,m*22),k)}b9=B.L()
b9.sap(D.eDs.aG(0,B.bW(A.J,13)))
c1.O(A.J,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
m=Math.sin(a0)
k=B.L()
k.r=A.aQ.gp(0)
k.c=3
k.d=A.bF
c1.ah(new B.r(b9*3,w*3),new B.r(v*12,m*12),k)
break
case"resistor":a1=B.bx(D.aSG,D.aS2)
b9=B.L()
b9.sap(D.cbr.aG(0,new B.a6(a1.a,a1.b,a1.c,a1.d)))
c1.aq(a1,b9)
b9=x.O
a2=B.J([47,B.a([B.b1(b5),B.b1(b6),A.w],b9),100,B.a([B.b1(b7),A.w,B.b1(b7)],b9),220,B.a([B.b1(b8),B.b1(b8),B.b1(b7)],b9),470,B.a([B.b1(b5),B.b1(b6),B.b1(b7)],b9),1000,B.a([B.b1(b7),A.w,B.b1(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(p=0;p<3;++p){b9=-14+p*9
w=new B.ar(A.S,A.Q,A.W,A.X,A.U)
w.r=a3[p].gp(0)
c1.aD(new B.a6(b9,-9,b9+4.5,9),w)}b9=B.L()
b9.r=A.aQ.gp(0)
c1.aD(D.fck,b9)
b9=c2.r
b3.qU(c1,b9>=1000?"1k\u03a9":""+A.j.V(b9)+"\u03a9",D.etD,A.ab,10)
break
case"bulb":w=c2.fx
if(w>0){v=B.L()
v.r=A.eg.j(0.55*w).gp(0)
v.y=A.z1
c1.O(H.vB,34,v)}o=B.bS(D.eq5,12,18)
c1.aq(B.bx(o,A.iD),b3.PO(o,A.bh,A.dY,!0))
for(p=0;p<3;++p){w=13+p*3.5
v=new B.ar(A.S,A.Q,A.W,A.X,A.U)
v.r=A.dC.gp(0)
v.c=1
c1.ah(new B.r(-9,w),new B.r(9,w),v)}w=B.L()
if(t)v=A.ML
else{v=B.ap(A.dY,A.hI,c2.fx)
m=c2.fx
v=v.j(0.25+0.7*m)}if(t)m=A.Gm
else{m=B.ap(A.cZ,A.eg,c2.fx)
m.toString}w.sap(new B.bV(A.nl,0.5,A.x,b4,0,B.a([v,m.j(0.18+0.5*c2.fx)],x.O),b4,b4).aG(0,B.bW(A.tI,17)))
c1.O(A.tI,17,w)
w=B.L()
w.b=A.aa
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.O(A.tI,17,w)
b9=b9.r
w=x.v
m=new B.aI(b9,A.aj,b4,b4,B.a([],w))
m.E(new B.aZ(-9,-12))
m.E(new B.cc(-12,-4,-9,0))
v=B.L()
v.b=A.aa
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.ag(m,v)
v=B.L()
v.r=A.cA.gp(0)
v.c=1.4
c1.ah(D.euy,D.euA,v)
v=B.L()
v.r=A.cA.gp(0)
v.c=1.4
c1.ah(D.es6,D.es9,v)
w=B.a([],w)
a4=new B.aI(b9,A.aj,b4,b4,w)
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
if(t)w=A.b6
else{w=B.ap(A.cZ,D.bna,c2.fx)
w.toString}b9.r=w.gp(0)
c1.ag(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=B.L()
v.r=A.aA.j(0.6*w).gp(0)
v.y=D.bJN
c1.O(A.tI,30,v)}w=B.L()
w.r=A.dY.gp(0)
w.c=2.4
c1.ah(D.euG,D.euF,w)
w=B.L()
w.r=A.dY.gp(0)
w.c=2.4
c1.ah(D.esf,D.ese,w)
b9=b9.r
w=x.v
a6=new B.aI(b9,A.aj,b4,b4,B.a([],w))
a6.E(new B.aZ(-12,8))
a6.E(new B.aq(-12,-6))
a6.E(new B.cc(0,-26,12,-6))
a6.E(new B.aq(12,8))
a6.E(new B.bw())
v=B.L()
if(t)m=A.jn
else{m=B.ap(A.er,D.boU,c2.fx)
m.toString}if(t)k=A.kR
else{k=B.ap(A.kw,A.aA,c2.fx)
k.toString}v.sap(new B.a8(A.ay,A.aD,A.x,B.a([m,k],x.O),b4,b4).aG(0,D.fbc))
c1.ag(a6,v)
v=B.L()
v.b=A.aa
v.c=1.2
v.r=A.k0.gp(0)
c1.ag(a6,v)
v=B.L()
v.r=A.es.gp(0)
c1.aD(D.fbi,v)
w=new B.aI(b9,A.aj,b4,b4,B.a([],w))
w.E(new B.aZ(-7,-4))
w.E(new B.cc(-6,-12,0,-15))
b9=B.L()
b9.b=A.aa
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.ag(w,b9)
break
case"motor":a7=new B.a6(-28,-14,20,14)
c1.aq(B.bx(a7,A.io),b3.aym(a7,A.an,A.bk))
b9=B.L()
b9.r=A.cu.gp(0)
c1.aD(D.faM,b9)
b9=B.L()
b9.r=A.cC.gp(0)
c1.aD(D.faO,b9)
b9=c1.c
J.br(b9.save())
b9.translate(31,0)
for(l=0;l<3;++l){J.br(b9.save())
b9.rotate((c2.y+l*2.094)*180/3.141592653589793,0,0)
w=B.bS(H.aMv,15,7)
v=new B.ar(A.S,A.Q,A.W,A.X,A.U)
v.r=A.cN.j(0.9).gp(0)
c1.c2(w,v)
b9.restore()}w=B.L()
w.r=A.av.gp(0)
c1.O(A.J,3,w)
b9.restore()
b3.qU(c1,"M",D.eu9,A.av,14)
break
case"buzzer":a8=B.bS(A.J,42,42)
b9=B.L()
b9.sap(D.eDJ.aG(0,a8))
c1.c2(a8,b9)
b9=B.L()
b9.r=A.w.gp(0)
c1.O(A.J,6,b9)
b9=B.L()
b9.b=A.aa
b9.c=1.4
b9.r=A.aT.gp(0)
c1.O(A.J,6,b9)
b3.qU(c1,"+",D.eu2,A.ab,12)
for(b9=b3.b,l=1;l<=3;++l){w=c2.fx
v=w>0?A.j.F(b9.d*14,5):0
v=B.bW(A.J,24+l*5+v)
m=new B.ar(A.S,A.Q,A.W,A.X,A.U)
m.b=A.aa
m.c=2
m.r=A.c4.j(w*(1-l*0.22)).gp(0)
c1.cP(v,-0.7,1.4,!1,m)}break
case"heater":o=B.bx(D.fbO,A.io)
w=B.L()
w.sap(D.c90.aG(0,new B.a6(o.a,o.b,o.c,o.d)))
c1.aq(o,w)
w=B.a([],x.v)
a9=new B.aI(b9.r,A.aj,b4,b4,w)
a9.E(new B.aZ(-24,0))
for(l=0;l<8;l=a5){b9=(l&1)===0?-10:10
a5=l+1
b9=new B.cc(-24+l*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.ak(v)
a9.ab()}b9=c2.fx
if(b9>0.1){$.S()
w=B.L()
w.b=A.aa
w.c=10
w.r=D.bnT.j(0.5*b9).gp(0)
w.y=A.kW
c1.ag(a9,w)}$.S()
b9=B.L()
b9.b=A.aa
b9.c=3.2
b9.d=A.bF
b9.r=B.ap(A.m8,A9.yx,c2.fx).gp(0)
c1.ag(a9,b9)
break
case"capacitor":a7=new B.a6(-16,-22,16,18)
b9=B.bx(a7,A.io)
w=B.L()
w.sap(D.c7R.aG(0,a7))
c1.aq(b9,w)
w=B.L()
w.r=A.bO.gp(0)
c1.aD(D.fbr,w)
for(p=0;p<4;++p){b0=new B.iM(new B.eq("\u2212",b4,b4,A.cL,b4,b4,b4,b4,b4,b4,new B.F(!0,A.av,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a6,A.bW,new B.jj(1),b4,b4,b4,b4,A.bX,b4,A.cr)
b0.ec()
b0.a4(c1,new B.r(-14,-18+p*9))}b1=new B.a6(-16,-24,16,-17)
c1.aq(B.bx(b1,A.iD),b3.c7w(b1,!1))
b9=38*c2.fx
w=18-b9
$.S()
v=B.L()
v.r=A.bc.j(0.5).gp(0)
c1.aD(new B.a6(-3,w,11,w+b9),v)
b3.qU(c1,"1F",H.vB,A.c,11)
break
case"radio":a1=B.bx(D.aad,A.fR)
b9=B.L()
b9.sap(D.cbF.aG(0,new B.a6(a1.a,a1.b,a1.c,a1.d)))
c1.aq(a1,b9)
b9=B.L()
b9.b=A.aa
b9.c=1.4
b9.r=A.oh.j(0.6).gp(0)
c1.aq(a1,b9)
b9=B.bx(D.fbP,A.jy)
w=B.L()
w.r=A.dU.gp(0)
c1.aq(b9,w)
for(p=0;p<6;++p){b9=-10+p*4.4
w=new B.ar(A.S,A.Q,A.W,A.X,A.U)
w.r=A.m8.gp(0)
w.c=1.4
c1.ah(new B.r(-27,b9),new B.r(-3,b9),w)}b9=B.L()
b9.r=(c2.fx>0?A.h_:A.oj).gp(0)
c1.aD(D.faT,b9)
if(c2.fx>0){b9=8+A.j.F(b3.b.d*7,18)
w=B.L()
w.r=A.bG.gp(0)
w.c=1.6
c1.ah(new B.r(b9,-13),new B.r(b9,-3),w)}b9=B.L()
b9.sap(D.aRY.aG(0,B.bW(D.a9a,6)))
c1.O(D.a9a,6,b9)
b9=B.L()
b9.r=A.oh.gp(0)
c1.O(D.erl,4,b9)
b9=B.L()
b9.r=A.dY.gp(0)
b9.c=1.8
c1.ah(D.erg,D.aMP,b9)
if(c2.fx>0)for(b9=b3.b,l=1;l<=2;++l){w=B.bW(D.aMP,4+l*5+A.j.F(b9.d*8,5))
v=new B.ar(A.S,A.Q,A.W,A.X,A.U)
v.b=A.aa
v.c=1.4
v.r=A.oq.j(0.7).gp(0)
c1.cP(w,-2.4,1.6,!1,v)}break
case"tv":w=B.bx(D.fbZ,A.io)
v=B.L()
v.r=M.nz.gp(0)
c1.aq(w,v)
b2=B.bx(D.fbW,A.iD)
if(c2.fx>0&&!c2.x){b9=c1.c
J.br(b9.save())
b9.clipRRect(B.n2(b2),$.mH(),!0)
b9.translate(-33,-21)
L.hiF(c1,D.fiJ,c2.at,b3.b.d,c2.ax,-1,b4,b4)
b9.restore()
b9=B.L()
b9.r=A.bc.gp(0)
c1.O(D.erx,1.6,b9)}else{w=B.L()
w.r=D.wm.gp(0)
c1.aq(b2,w)
b9=new B.aI(b9.r,A.aj,b4,b4,B.a([],x.v))
b9.E(new B.aZ(-33,-21))
b9.E(new B.aq(-10,-21))
b9.E(new B.aq(-33,0))
b9.E(new B.bw())
w=B.L()
w.r=A.c.j(0.05).gp(0)
c1.ag(b9,w)}b9=B.L()
b9.r=A.bw.gp(0)
c1.aD(D.fbh,b9)
break}C.isc(c1,c2,b3.b.d,b3.gcc6())
if(t)b3.qU(c1,"\u2716",D.euJ,A.aA,14)
if(s)c1.c.restore()},
bGA(d,e){var w,v,u,t,s,r,q,p,o=this,n=e.e
if(n<=4.5){w=new B.a6(-28,-13,28,13)
d.aq(B.bx(w,A.o_),o.aym(w,A.cZ,A.iN))
v=new B.a6(-22,-13,22,13)
$.S()
u=B.L()
u.sap(D.atM.aG(0,v))
d.aD(v,u)
u=B.L()
u.r=A.e0.gp(0)
d.aD(D.fbB,u)
t=new B.a6(28,-5,34,5)
d.aq(B.bx(t,A.hB),o.PO(t,A.cZ,A.hY,!0))
o.qU(d,"+",D.eqX,A.aQ,11)
o.qU(d,"\u2212",D.eub,A.ab,11)
o.qU(d,B.w(n===A.j.iG(n)?A.j.V(n):n)+"V",D.etS,A.aQ,13)
if(n===1.5){u=B.L()
u.r=A.bx.gp(0)
d.aD(D.fbA,u)
u=e.as
s=B.L()
s.r=B.ap(A.aA,A.bc,u).gp(0)
d.aD(new B.a6(-22,14,-22+44*u,18),s)
if(e.as<=0.02)o.qU(d,"FLAT",D.etC,A.bY,9)}if(n>2){u=B.L()
u.r=A.aT.gp(0)
u.c=1
d.ah(D.eqe,D.aMn,u)
o.qU(d,n>3?"3 cells":"2 cells",D.etR,A.aE,8)}}else if(n<=9){r=new B.a6(-22,-17,22,17)
u=B.bx(r,A.o_)
$.S()
s=B.L()
s.sap(D.cbe.aG(0,r))
d.aq(u,s)
s=B.L()
s.r=A.dn.gp(0)
d.aD(D.fbC,s)
for(q=0;q<2;++q){p=F.aDk[q]
u=p<0?5:3.6
s=new B.ar(A.S,A.Q,A.W,A.X,A.U)
s.sap(D.aRX.aG(0,B.bW(new B.r(p,-18),5)))
d.O(new B.r(p,-18),u,s)}o.qU(d,"9V",D.etK,A.c,16)}else{r=new B.a6(-34,-16,34,16)
u=B.bx(r,A.jy)
$.S()
s=B.L()
s.sap(D.atM.aG(0,r))
d.aq(u,s)
s=B.L()
s.r=A.bt.gp(0)
d.aD(D.fbY,s)
for(q=0;q<2;++q){u=B.bx(B.bS(new B.r(F.IW[q],-20),8,10),A.hB)
s=new B.ar(A.S,A.Q,A.W,A.X,A.U)
s.r=A.cC.gp(0)
d.aq(u,s)}o.qU(d,"+",D.er5,A.aA,10)
o.qU(d,"12V",D.etO,A.av,15)}},
aE(d){return!0}}
C.mY.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a8(k)
A.d.a8(d.b)
w=B.T(x.N,x.Y)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.I)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.u0(o,r,q,p)
n.asi(o,r,q,p)
k.push(n)
J.iE(s[4],new C.cuc(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.I)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.ame(m,u[1],l,u[3])}}}
C.ak4.prototype={
S(){var w=x.N
return new C.ak5(B.c_(2000,1,1,0,0,0,0,0),A.J,A.az,B.T(w,x.gl),B.aR(w),$,A.bC,0,B.a([],x.X),null,null)}}
C.ak5.prototype={
afs(d){var w=this,v=w.ch
if(v!=null)v.a1(0)
w.m(new C.bKc(w,d))
w.ch=B.cy(A.lM,new C.bKd(w))},
t(){var w=this.ch
if(w!=null)w.a1(0)
w=this.db
if(w!=null)w.a1(0)
this.bwc()},
a14(d,e){return this.ckt(d,e)},
b3v(d){return this.a14(d,!1)},
ckt(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a14=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
r=d.at
q=e?A.t2:A.yI
p=d.b
w=3
return B.b(L.hj1(s,r,p,d.ax<3.2,q,$.qG().h(0,p).b),$async$a14)
case 3:o=g
t.cy=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a14,v)},
cxc(d){var w=this,v=new B.V(Date.now(),0,!1),u=w.CW.c3(0,d.a,new C.bKe()),t=J.cD(u)
t.I(u,v)
t.bq(u,new C.bKf(v))
if(t.gJ(u)>=4){t.a8(u)
t=w.db
if(t!=null)t.a1(0)
w.a2o(d)
return}if(t.gJ(u)===3){t=w.db
if(t!=null)t.a1(0)
w.db=B.cy(A.iQ,new C.bKg(w,u,d))}},
a0L(d){return this.ciP(d)},
ciP(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a0L=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
w=3
return B.b(C.itr(s,d.b,A.j.V(A.j.F(t.a.c.d*0.12,1)*100)),$async$a0L)
case 3:t.cy=!1
case 1:return B.h(u,v)}})
return B.i($async$a0L,v)},
a2o(d){return this.cuN(d)},
cuN(d){var w=0,v=B.j(x.H),u=this,t
var $async$a2o=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bU(A.L,null,new C.bKa(u,d),t,!0,!0,!0,null,!1,!1,x.H),$async$a2o)
case 2:return B.h(null,v)}})
return B.i($async$a2o,v)},
Y(){this.a3()
this.biw()
this.mh()},
biw(){this.a.c.e=new C.bKw(this)},
mB(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.vN(0,d)
for(w=q.a.c.a,v=w.length,u=q.cx,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=D.mw.h(0,s.b)
if((r==null?null:r.b)!==D.AH)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.q(0,s.a)&&!q.cy){u.I(0,s.a)
q.a14(s,!0)}}else u.W(0,s.a)}if((q.ax+=d)>0.16){q.ax=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)G.dz(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)G.dz(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cR.ai()<0.5
else u=!1
if(u)G.dz(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){G.dz(900+A.cR.aw(800),"",90,0,0.1,o)
if(A.cR.ai()<0.35)G.dz(300+A.cR.aw(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cR.ai()<0.4
else u=!1
if(u)G.dz(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)G.dz(330+A.o.F(110*A.j.bi(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)G.dz((A.j.bi(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)G.dz(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)G.dz(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cR.ai()<0.5
else u=!1
if(u)G.dz(1200,"",30,0,0.07,o)
break
case"turbine":u=s.f
if(u>0.1)G.dz(80,"",150,0,0.05*u,o)
break
case"crank":u=s.f
if(u>0.15)G.dz(110+u*140,"",70,0,0.08,"saw")
break}}}w=q.a.w
if(w!=null)w.$0()
q.m(new C.bKx())},
baz(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.at
l=p.c
k=n===0?-1:1
j=D.mw.am(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new B.y(p,n)
r=i}}}return s},
b4b(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.U(w).k("dr<1>"),w=new B.dr(w,v),w=new B.bQ(w,w.gJ(0),v.k("bQ<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.at
p=s.d
o=D.mw.am(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cK5(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
o=p.a
n=this.at
m=o.c
l=p.b===0?-1:1
k=D.mw.am(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.at
m=o.c
j=p.d===0?-1:1
i=D.mw.am(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=C.hHT(new B.r(k,n),new B.r(i,l),p)
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
afq(){this.a.toString
this.m(new C.bJC())},
bsR(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.deI[v]
if(!A.d.aV(p.a.c.a,new C.bKy(u,w))){o=new B.r(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?A1.Ey:o
s=s?A1.Ey:o
q=t.alo(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.x=null
G.dz(1200,"",50,0,0.3,"tri")
p.afq()},
B(d){var w,v,u,t,s,r,q,p,o,n=this
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.SJ[v].a)
u=w.length
t=u>8
s=t?A.d.du(w,0,A.o.ar(u+1,2)):w
r=t?A.d.fO(w,A.o.ar(w.length+1,2)):A.Z
q=n.a.d
if(q!=null){w=B.a3(q).k("cx<1>")
w=B.C(new B.cx(q,w),w.k("M.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.I)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b40(s,!0))
n.a.toString
if(t)w.push(n.b40(r,!0))
w.push(B.E(B.cn(new C.bKv(n,q)),1))
return B.x(w,A.l,null,A.e,A.h,0,A.p)},
b40(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=$.qG()
s=t.h(0,u).d.j(0.14)
r=new B.aP(14,14)
q=new B.ay(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.az(p,B.p(p,B.x(B.a([B.d(t.h(0,u).c,p,p,p,p,p,p,A.xz,p,p,p),B.d(t.h(0,u).b,p,1,A.a2,p,p,p,A.o2,p,p,p)],n),A.l,p,A.b8,A.h,0,A.p),A.f,p,p,new B.o(s,p,new B.bF(q,q,q,q),new B.be(r,r,r,r),p,p,A.n),p,p,p,K.ox,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bJD(this,u),p,p,p,p,p,p,!1,A.a4))}return B.p(p,B.cm(m,p,p,A.hj,p,p,A.aL,!1),A.f,p,p,new B.o(K.C3,p,new B.bF(A.a1,A.a1,new B.ay(o,1,A.r,-1),A.a1),p,p,p,A.n),p,58,p,p,p,p,p,p)},
cmA(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a2.b,a1=$.qG().h(0,a0)
a1.toString
w=a2.dy
v=a2.fr
u=new C.bJZ(e,a1)
t=new C.bJY()
s=B.l(20)
r=a1.d
q=B.K(r.j(0.55),A.r,1.3)
p=B.a([new B.ab(0,A.G,r.j(0.18),A.cy,16)],x.V)
o=r.j(0.18)
n=B.l(10)
n=B.p(A.A,B.d(a1.c,d,d,d,d,d,d,A.xz,d,d,d),A.f,d,d,new B.o(o,d,d,n,d,d,A.n),d,34,d,d,d,d,d,34)
o=B.E(B.d(a1.b,d,1,A.a2,d,d,d,B.m(d,d,r,d,d,d,d,d,d,d,d,15,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d),1)
m=B.l(999)
l=B.K(A.aT,A.r,1)
k=x.p
m=B.a([B.A(B.a([n,A.ae,o,B.az(d,B.p(d,B.d(e.f?"Less":"About",d,d,d,d,d,d,A.VW,d,d,d),A.f,d,d,new B.o(d,d,l,m,d,d,A.n),d,d,d,d,A.oy,d,d,d),A.y,!1,D.hvt,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.bJK(e),d,d,d,d,d,d,!1,A.a4),B.aH(d,d,d,d,D.c3n,d,d,d,new C.bJL(e,a2),d,d,d,d,"Remove part",A.cg),B.aH(d,d,d,d,A.Qg,d,d,d,new C.bJM(e),d,d,d,d,d,A.cg)],k),A.l,d,A.e,A.h,0,d,d)],k)
if(e.f)A.d.u(m,B.a([B.d(a1.e,d,d,d,d,d,d,A.KM,d,d,d),A.cQ,B.d("How it is made: "+a1.f,d,d,d,d,d,d,S.aWA,d,d,d)],k))
m.push(A.am)
if(a2.x)m.push(D.fLw)
else m.push(new B.D(A.fn,B.A(B.a([t.$2(A.j.ad(Math.abs(a2.dy),2),"VOLTS"),A.bm,t.$2(A.j.ad(Math.abs(a2.fr)*1000,0),"MILLIAMPS"),A.bm,t.$2(A.j.ad(Math.abs(w*v),2),"WATTS")],k),A.l,d,A.e,A.h,0,d,d),d))
j=e.a.c.bgo(a2)
if(j!=null){a1=(a2.x?A.aA:A.at).j(0.14)
w=B.l(10)
v=B.K((a2.x?A.aA:A.at).j(0.5),A.r,1)
m.push(new B.D(A.hZ,B.p(d,B.d((a2.x?"Why it burnt out":"Why it is not working")+": "+j,d,d,d,d,d,d,D.fHq,d,d,d),A.f,d,d,new B.o(a1,d,v,w,d,d,A.n),d,d,d,d,A.cp,d,d,d),d))}if(C.hgA(a0)){a1=B.a([],k)
for(i=0;i<10;i=h){h=i+1
a1.push(new B.D(A.fn,new E.dX("CH "+h,a2.at===i,new C.bJQ(e,a2,i),d,r,d),d))}a1=B.c9(B.A(a1,A.l,d,A.e,A.h,0,d,d),A.t,d,A.y,d,d,d,d,A.aL)
if(e.a.c.ru(a2)){w=F.Sx[A.o.F(a2.at,10)]
v=e.f?" Tap the TV 3 times quickly to open the big screen.":""
v="Showing: "+w.a+"."+v
w=v}else w="The TV is off. Give it power with the + dot towards the battery +."
a1=B.a([A.am,a1,A.aw,B.d(w,d,e.f?4:1,A.a2,d,d,d,A.hs,d,d,d)],k)
if(e.a.c.ru(a2))a1.push(new E.fE(A.D9,"Open big screen",new C.bJR(e,a2),r,d))
A.d.u(m,a1)}if(D.mw.am(0,a0)&&!C.hgA(a0)){a1=B.a([A.am],k)
if(e.f||!e.a.c.ru(a2))a1.push(B.d(e.a.c.ru(a2)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",d,d,d,d,d,d,A.hs,d,d,d))
if(e.a.c.ru(a2))a1.push(new E.fE(A.PZ,"Open the "+$.qG().h(0,a0).b,new C.bJS(e,a2),r,d))
A.d.u(m,a1)}if(D.mw.am(0,a0))A.d.u(m,B.a([A.am,new E.fE(A.Dh,"Make it bigger (or tap it 4 times)",new C.bJT(e,a2),r,d)],k))
e.a.toString
a1=a0==="buck"
if(a1||a0==="regulator"){w=A.j.ad(a2.db,1)
if(e.a.c.ru(a2))v=a2.dx
else{e.a.toString
v=a0==="regulator"?5:a2.e}v=B.a([A.am,B.d("Volts in: "+w+" V   \u2192   Volts out: "+A.j.ad(v,1)+" V",d,d,d,d,d,d,D.fBi,d,d,d)],k)
if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dxm[g]
w=f===A.j.iG(f)?A.j.V(f):f
a1.push(new E.dX(B.w(w)+" V out",a2.e===f,new C.bJU(e,a2,f),d,r,d))}v.push(new B.D(A.lk,B.bZ(A.bH,a1,A.br,d,0,6),d))}if(a0==="regulator")v.push(D.h_y)
A.d.u(m,v)}if(e.a.c.Mq(a2)&&!a2.x){a1=A.j.ad(a2.cx,2)
w=A.j.ad(e.a.c.Al(a2),2)
v=e.a.c
o=v.ap_(a2)?"   \u26a0 OVERLOADED":""
a1=B.d("Supplying "+a1+" A of the "+w+" A it can give"+o,d,d,d,d,d,d,B.m(d,d,v.ap_(a2)?A.bY:A.ex,d,d,d,d,d,d,d,d,12.5,d,d,A.H,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
w=B.l(4)
o=A.j.D(a2.cx/e.a.c.Al(a2),0,1)
v=e.a.c.ap_(a2)?A.aA:A.bc
m.push(new B.D(A.hZ,B.x(B.a([a1,A.cQ,B.bu(w,B.kr(A.bx,d,d,5,d,o,new B.lP(v,x.c)),A.aq)],k),A.E,d,A.e,A.h,0,A.p),d))}a1=a0==="battery"
if(a1&&a2.e===1.5){w=a2.as
v=A.j.V(w*100)
if(w<=0.02)w="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else w=w>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.D(A.hZ,B.d("Charge: "+v+"%"+w,d,d,d,d,d,d,D.fuR,d,d,d),d))}if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dlZ[g]
w=f===1.5?"1.5 V (rechargeable)":B.w(f)+" V"
a1.push(new E.dX(w,a2.e===f,new C.bJV(e,a2,f),d,r,d))}m.push(B.bZ(A.bH,a1,A.br,d,0,6))}if(a0==="resistor"){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dbS[g]
w=f>=1000?"1 k\u03a9":""+A.o.V(f)+" \u03a9"
a1.push(new E.dX(w,a2.r===f,new C.bJW(e,a2,f),d,r,d))}m.push(B.bZ(A.bH,a1,A.br,d,0,6))}if(a0==="solar")m.push(u.$3("Sunlight",a2.f,new C.bJX(a2)))
if(a0==="turbine")m.push(u.$3("Wind",a2.f,new C.bJN(a2)))
if(a0==="pot")m.push(u.$3("Knob",a2.f,new C.bJO(a2)))
if(a0==="ldr")m.push(u.$3("Light",a2.f,new C.bJP(a2)))
if(a0==="crank")m.push(D.fVP)
if(a0==="switch")m.push(B.d(a2.w?"Closed: the loop is joined up.":"Open: the loop is broken.",d,d,d,d,d,d,A.hs,d,d,d))
return B.p(d,new B.cN(D.b7L,B.c9(B.x(m,A.E,d,A.e,A.N,0,A.p),A.t,d,A.y,d,d,d,d,A.ah),d),A.f,d,d,new B.o(F.YG,d,q,s,p,d,A.n),d,d,D.huS,d,D.bDU,d,d,d)}}
C.bdh.prototype={}
C.Wl.prototype={
S(){return new C.aFh(C.hmH(),new B.cw(null,x.q),B.aR(x.S))}}
C.aFh.prototype={
Y(){this.a3()
$.aU.c0$.push(this)
this.afr()},
afr(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fKT(),$async$afr)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.isB(t.d,r)
if(s!=null){t.m(new C.e1p(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$afr,v)},
Fz(){var w,v=this
if(!v.as)return
w=C.ijb(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bGL(w)},
jl(d){if(d!==A.fX)this.Fz()},
t(){$.aU.hV(this)
this.Fz()
this.a2()},
cc8(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.U(v).k("Y<1>")
t=new B.Y(v,new C.e1y(q),u).gJ(0)
s=new B.Y(v,new C.e1z(),u).gJ(0)
r=new B.Y(v,w.gcZA(),u).gJ(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new C.e1A(q,t,s,r))}if(A.o.F(q.w,45)===0)q.Fz()
if(A.o.F(q.w,10)===0){w=q.f
$.ajc()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.q(0,q.f)&&$.ajc()[q.f].c.$1(q.d)){w.I(0,q.f)
C.JL("bell",B.a([0,4,7,12],x.t),700,0.45)
q.m(new C.e1B())
q.Fz()
w=q.c
w.toString
w=B.Ke(w)
if(w!=null)w.T(B.b2(p,p,p,p,p,A.t,p,B.d("\u2705 Challenge done: "+$.ajc()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.n_,p,p,p,p,p,p,p,p,p,p))}},
aid(){var w=0,v=B.j(x.H),u=this,t
var $async$aid=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.e1o(u),t,null,!0,!0,x.H),$async$aid)
case 2:return B.h(null,v)}})
return B.i($async$aid,v)},
b1k(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.l(12),t=B.K(f.j(0.45),A.r,1)
u=B.a([B.ao(w,B.p(w,B.X(d,f,w,w,w,18),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ao(w,h,w,w,w,-1,-3,w))
return B.az(w,B.ha(new B.a4(40,38,new B.an(A.a0,w,A.ac,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4)},
b1j(d,e,f,g){return this.b1k(d,e,f,g,null)},
asZ(d,e,f,g){var w=null,v=f.j(0.1),u=B.l(10),t=B.K(f.j(0.4),A.r,1)
return B.E(B.az(w,B.p(w,B.A(B.a([B.X(d,f,w,w,w,15),A.e6,new B.di(1,A.cm,B.d(e,w,1,A.a2,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.b8,A.h,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),1)},
agy(){var w=0,v=B.j(x.H),u=this,t
var $async$agy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a5(t,!1).ce(B.ed(new C.e1k(u),!1,null,x.H)),$async$agy)
case 2:t=u.e.gbk()
if(t!=null)t.biw()
if(u.c!=null)u.m(new C.e1l())
u.Fz()
return B.h(null,v)}})
return B.i($async$agy,v)},
bJJ(){var w,v,u,t,s=null,r=this.f
$.ajc()
if(r>=11)return s
w=this.r
v=w.q(0,r)
r=v?A.bg:A.aA
u=B.l(9)
t=B.K(K.C3,A.r,1.5)
return B.p(s,B.as(B.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.xC,s,s,s),s,s,s),A.f,s,D.b7B,new B.o(r,s,t,u,s,s,A.n),s,s,s,s,A.f4,s,s,s)},
ajn(){var w=0,v=B.j(x.H),u=this,t
var $async$ajn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bU(F.mY,null,new C.e1x(u),t,!0,!0,!0,A.kl,!1,!1,x.H),$async$ajn)
case 2:return B.h(null,v)}})
return B.i($async$ajn,v)},
cc9(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.az(r,B.p(r,D.c00,A.f,r,r,new B.o(A.c.j(0.07),r,r,r,r,r,A.a7),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e1D(d),r,r,r,r,r,r,!1,A.a4),o=B.l(11)
o=B.p(r,D.bdz,A.f,r,r,new B.o(A.bs,r,B.K(A.aG.j(0.45),A.r,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.p(r,B.x(B.a([B.A(B.a([p,A.ae,o,A.ae,B.E(B.x(B.a([D.fYw,B.d(w,r,1,A.a2,r,r,r,B.m(r,r,s.y>0||s.z>0?A.eZ:A.hJ,r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.E,r,A.e,A.h,0,A.p),1),new C.azi(s.gciw(),r),A.vI,s.b1j(A.qQ,"Construction Lab: real 3D wiring, plumbing and a house",A.cN,new C.e1E(s,d)),s.b1k(A.lQ,"Challenges",A.aQ,s.gczM(),s.bJJ()),s.b1j(A.Dc,"How to play",A.aG,new C.e1F(d,e))],v),A.l,r,A.e,A.h,0,r,r),A.am,B.A(B.a([s.asZ(A.oF,"Circuits",A.bd,s.gcsE()),A.bm,s.asZ(A.oD,"Repair",A.aQ,new C.e1G(s)),A.bm,s.asZ(I.wP,"Clear",A.bY,new C.e1H(s))],v),A.l,r,A.e,A.h,0,r,r)],v),A.l,r,A.e,A.N,0,A.p),A.f,r,r,new B.o(K.C3,r,new B.bF(A.a1,A.a1,new B.ay(q,1,A.r,-1),A.a1),r,r,r,A.n),r,r,r,r,D.bJ8,r,r,r)},
B(d){var w=this,v=null
$.atE="tech"
return B.c4(v,A.c3,B.bm(!0,B.x(B.a([w.cc9(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.hly(w.d,w.e,w.gcc7(),v),1)],x.p),A.l,v,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
C.azi.prototype={
S(){return new C.bbp(null,null)}}
C.bbp.prototype={
gazi(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,A.Y,null,1,null,v)
w.cK(0)
v.d!==$&&B.bD()
v.d=w
u=w}return u},
t(){this.gazi().t()
this.bxy()},
B(d){var w=null,v=this.a.c
return B.az(w,B.ha(new B.a4(42,42,B.c6(this.gazi(),new C.cLM(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bbo.prototype={
a4(d,e){var w,v,u,t=null,s=e.ea(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.S()
w=B.L()
w.r=A.b7.j(0.25+0.15*o).gp(0)
w.y=N.oz
d.O(s,r+2+o*2,w)
w=B.L()
w.sap(D.eDE.aG(0,B.bW(s,r)))
d.O(s,r,w)
v=B.L()
v.b=A.aa
v.c=2.2
v.sap(new B.h1(A.A,0,6.283185307179586,A.x,D.d2t,t,new B.mN(p)).aG(0,B.bW(s,r)))
d.O(s,r,v)
p=new C.cLL(d)
p.$3(s.a5(0,A.tI),8+o*1.5,1)
q*=4
p.$3(s.a5(0,D.ess),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a5(0,D.euQ),2.6,0.5+0.5*Math.cos(q))
u=B.fp(t,A.cr,t,t,t,D.frc,A.a6,A.bW,t,A.dA,A.bX)
u.ec()
u.a4(d,s.a5(0,new B.r(-u.b.c/2,5)))},
aE(d){return d.b!==this.b}}
C.azD.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b3()
this.bB()}}
C.azE.prototype={
t(){var w,v,u
for(w=this.h8$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h7$
w===$&&B.c()
w.t()
this.bwb()}}
C.aLP.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b3()
this.bB()}}
C.bA2.prototype={}
C.fT.prototype={}
C.Kf.prototype={
a7(){return"ScreenStyle."+this.b}}
C.mx.prototype={}
C.W4.prototype={
S(){return new C.bm5(null,null)}}
C.bm5.prototype={
gaaA(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,A.ow,null,1,null,v)
w.cr(0)
v.d!==$&&B.bD()
v.d=w
u=w}return u},
t(){this.gaaA().t()
this.bzq()},
gSK(){var w=this.gaaA().y
w=w==null?null:A.o.ar(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.mw.h(0,this.a.c)
if(v==null)v=D.aSY
return B.c4(w,X.a_j,B.bm(!0,new B.an(A.a0,w,A.ac,A.t,B.a([B.as(v.b===D.AJ?this.bLR(v):this.cpo(v),w,w,w),B.ao(w,B.aH(w,w,w,w,A.n7,w,w,w,new C.dYz(d),w,w,w,B.o2(w,A.b6,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),B.ao(6,B.as(B.d(v.a,w,w,w,w,w,w,D.fsY,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)},
cca(d){var w
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
cpo(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.aam
switch(p.a){case 1:w=44
break
case 2:w=30
break
case 3:w=22
break
case 4:w=26
break
default:w=14
break}v=B.c6(this.gaaA(),new C.dYy(this,w,d,o),q)
if(p===D.aan)v=new B.BE(D.bJM,v,q)
p=this.cca(p)
u=o?4:5
t=d.c
s=B.ap(t,A.c,o?0.25:0.08)
s.toString
r=B.ap(t,A.w,0.5)
r.toString
r=B.a([s,t,r],x.O)
t=B.l(w)
s=B.a([new B.ab(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new B.fH(p,B.p(q,B.p(q,v,A.f,q,q,new B.o(A.w,q,q,B.l(w-3),q,q,A.n),q,q,q,q,A_.Hg,q,q,q),A.f,q,q,new B.o(q,q,q,t,s,new B.a8(A.ay,A.aD,A.x,r,q,q),A.n),q,q,q,D.bD6,new B.Q(u,u,u,u),q,q,q),q)},
b9I(d){var w,v,u,t=null,s=new B.V(Date.now(),0,!1),r=A.o.D(this.a.d+A.j.bi(this.gSK()*0.4),0,100),q=d.b===D.aam,p=q?34:20,o=q?28:18,n=B.a([B.d(A.a.b_(A.o.v(B.df(s)),2,"0")+":"+A.a.b_(A.o.v(B.fS(s)),2,"0"),t,t,t,t,t,t,A.u0,t,t,t),A.b1],x.p)
for(w=0;w<4;++w){v=new B.aP(1,1)
n.push(B.p(t,t,A.f,t,t,new B.o(A.c,t,t,new B.be(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bJt,t,t,t,3))}n.push(A.de)
n.push(D.fR5)
n.push(A.bm)
v=B.K(A.ab,A.r,1)
u=B.l(4)
n.push(B.p(t,new B.bK(A.a5,t,t,B.BS(A.A,B.p(t,t,A.f,t,t,new B.o(A.bc,t,t,B.l(2),t,t,A.n),t,t,t,A_.Hg,t,t,t,t),t,r/100),t),A.f,t,t,new B.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.rc)
n.push(B.d(""+r+"%",t,t,t,t,t,t,D.fHN,t,t,t))
return new B.D(new B.Q(p,12,o,2),B.A(n,A.l,t,A.e,A.h,0,t,t),t)},
ax9(d,e,f){var w,v=null,u=d.d,t=B.ap(u,A.w,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.l(e*0.26)
w=x.p
t=B.a([B.p(v,B.as(B.d(d.b,v,v,v,v,v,v,B.m(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.o(v,v,v,u,D.ds9,new B.a8(A.ay,A.aD,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.u(t,B.a([A.aw,B.d(d.a,v,1,A.a2,v,v,v,D.fxP,v,v,v)],w))
return B.az(v,B.x(t,A.l,v,A.e,A.N,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dYu(this,d),v,v,v,v,v,v,!1,A.a4)},
c2p(d,e){return this.ax9(d,e,!0)},
c26(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.aSZ||n===D.EQ,l=d.d,k=B.ap(l,A.w,0.55)
k.toString
l=B.ap(l,A.jX,0.5)
l.toString
l=B.a([k,A.dB,l],x.O)
k=p.b9I(d)
w=m?190:138
v=B.l(24)
u=B.K(A.aT,A.r,1)
w=B.az(o,B.p(o,B.bu(B.l(23),B.b3(o,o,o,new C.afX(0,p.gSK(),o),A.fS),A.aq),A.f,o,o,new B.o(o,o,u,v,o,o,A.n),o,w,o,A.i_,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.dYs(p),o,o,o,o,o,o,!1,A.a4)
v=m?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.jv[s]
t.push(new B.cj(A.A,o,o,p.c2p(r,m?58:54),o))}k=B.a([k,A.am,w,A.af,B.E(B.kZ(0.92,t,v,8,12,A2.wA,o,!1),1)],u)
if(n!==D.aan){n=A.c.j(0.16)
w=B.l(28)
u=B.a([],u)
for(v=B.cX(F.jv,0,B.dC(4,"count",x.S),x.gD),t=v.$ti,v=new B.bQ(v,v.gJ(0),t.k("bQ<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.ax9(q==null?t.a(q):q,50,!1))}k.push(B.p(o,B.A(u,A.l,o,A.r_,A.h,0,o,o),A.f,o,o,new B.o(n,o,o,w,o,o,A.n),o,o,o,D.bE3,H.ao1,o,o,o))}return B.p(o,B.x(k,A.l,o,A.e,A.h,0,A.p),A.f,o,o,new B.o(o,o,o,o,o,new B.a8(A.ay,A.aD,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bFd(d,e){var w=null
return B.p(w,B.x(B.a([this.b9I(d),B.E(B.b3(w,w,w,new C.afX(e,this.gSK(),w),A.fS),1),B.az(w,B.p(w,B.as(B.d(F.jv[e].a,w,w,w,w,w,w,A.KO,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dYn(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.l,w,A.e,A.h,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bLR(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=B.ap(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.l(r?26:14)
u=B.a([new B.ab(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new B.fH(1.5384615384615383,B.p(t,B.c6(this.gaaA(),new C.dYq(this,r,d),t),A.f,t,t,new B.o(t,t,t,v,u,new B.a8(A.ay,A.aD,A.x,w,t,t),A.n),t,t,t,D.bJ3,new B.Q(8,8,8,s),t,t,t),t)}}
C.by4.prototype={
a4(d,e){var w,v,u,t,s,r=e.a,q=e.b,p=0+r,o=0+q
$.S()
w=B.L()
v=this.c
u=B.ap(v,A.w,0.6)
u.toString
t=B.ap(v,A.jX,0.4)
t.toString
w.sap(new B.a8(A.ay,A.aD,A.x,B.a([u,A.dB,t],x.O),null,null).aG(0,new B.a6(0,0,p,o)))
d.aD(new B.a6(0,0,p,o),w)
for(p=this.b,o=p*0.4,p*=0.3,s=0;s<5;++s){w=Math.sin(o+s)
u=Math.sin(p+s*1.7)
t=new B.ar(A.S,A.Q,A.W,A.X,A.U)
t.r=v.j(0.1).gp(0)
t.y=D.bJR
d.O(new B.r(r*(0.15+0.2*s+0.05*w),q*(0.3+0.3*u)),q*(0.2+0.04*s),t)}},
aE(d){return!0}}
C.afX.prototype={
a4(d,e){return L.Ma(d,e,this.b,this.c,null,null)},
aE(d){return!0}}
C.aND.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b3()
this.bB()}}
C.bwR.prototype={}
C.a9A.prototype={
B(d){var w=null
return B.c4(B.eR(w,w,w,!0,!0,D.aj4,w,1,!0,w,0,!1,w,!1,w,w,B.aH(w,w,w,w,I.asH,w,w,w,new C.cn4(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.h6p,w,w,w,1,w,!0),D.aj4,B.cm(B.a([D.ewg,B.cn(new C.cn5())],x.p),w,w,D.bF9,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.XH.prototype={
S(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aGN(w,new B.au(A.ax,$.ax()),$,A.bC,0,B.a([],x.X),null,null)}}
C.aGN.prototype={
Y(){this.a3()
this.mh()},
b7A(d){var w=this.d.length
return A.o.F(A.j.bi(A.j.F(A.j.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
mB(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b7A(v.f)
if(w!==v.x){v.x=w
E.mv("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new C.eVo(v))
C.JL("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
cdV(){if(this.d.length<2)return
this.m(new C.eVk(this))},
b1T(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new C.eVj(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gcdU(),p=s.d,o=B.E(B.az(r,B.b3(r,r,r,new C.byg(p,s.f,r),A.fS),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.x(B.a([o,new B.a4(r,40,B.as(B.d(n,r,r,r,r,r,r,D.fFQ,r,r,r),r,r,r),r)],w),A.l,r,A.e,A.h,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.aCw[A.o.F(v,8)].j(0.9)
t=new B.aP(20,20)
o.push(B.az(r,B.p(r,B.d(p[v],r,r,r,r,r,r,D.fF2,r,r,r),A.f,r,r,new B.o(u,r,r,new B.be(t,t,t,t),r,r,A.n),r,r,r,A.fn,A.hl,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.eVm(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a4))}p=A.c.j(0.07)
return E.lD(A.aQ,A.f5,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.x(B.a([new E.fd(o,r,r),B.A(B.a([B.E(B.aN(r,A.Z,!1,r,!0,A.t,r,B.aO(),s.e,r,r,r,r,r,2,B.bz(r,new B.b6(4,B.l(14),A.a1),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.ko,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ak,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.eVn(s),r,!1,r,r,!1,r,!0,r,A.ad,r,r,r,r,r,r,r,r,r,r,r,A.dj,!0,A.a6,r,A.ao,r,r,r,r),1),A.ae,new E.fE(A.i0,"Add",s.gcdS(s),A.c,r),A.bm,new E.fE(A.nN,"Spin",q,A.bc,r)],w),A.l,r,A.e,A.h,0,r,r)],w),A.l,r,A.e,A.N,0,A.p))}}
C.byg.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=k/2,i=e.b,h=i/2+10,g=new B.r(j,h),f=Math.min(k,i)/2-24
i=f+8
k=$.S()
w=B.L()
w.r=D.bjR.gp(0)
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
o=new B.ar(A.S,A.Q,A.W,A.X,A.U)
o.r=D.aCw[A.o.F(r,8)].gp(0)
d.cP(p,q,u,!0,o)
o=B.bW(g,f)
p=new B.ar(A.S,A.Q,A.W,A.X,A.U)
p.b=A.aa
p.c=2
p.r=A.c.j(0.6).gp(0)
d.cP(o,q,u,!0,p)
J.br(i.save())
i.translate(j,h)
i.rotate((q+s)*180/3.141592653589793,0,0)
p=w[r]
if(p.length>12)p=A.a.az(p,0,11)+"\u2026"
n=new B.iM(new B.eq(p,l,l,A.cL,l,l,l,l,l,l,D.fs0),A.a6,A.bW,new B.jj(1),l,l,l,l,A.bX,l,A.cr)
n.ec()
p=n.b
o=p.c
p=p.a.c
n.a4(d,new B.r(f-o-16,-p.gba(p)/2))
i.restore()}i=B.L()
i.r=D.aiG.gp(0)
d.O(g,20,i)
i=B.L()
i.b=A.aa
i.c=3
i.r=A.aQ.gp(0)
d.O(g,20,i)
m=new B.aI(k.r,A.aj,l,l,B.a([],x.v))
h-=f
m.E(new B.aZ(j,h+26))
h-=10
m.E(new B.aq(j-14,h))
m.E(new B.aq(j+14,h))
m.E(new B.bw())
h=B.L()
h.r=A.c.gp(0)
d.ag(m,h)
h=B.L()
h.b=A.aa
h.c=2
h.r=A.b6.gp(0)
d.ag(m,h)},
aE(d){return!0}}
C.Wt.prototype={
S(){return new C.bmg($,A.bC,0,B.a([],x.X),null,null)}}
C.bmg.prototype={
Y(){this.a3()
this.mh()},
mB(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.JL("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.UO(900,new C.e4o())}w.m(new C.e4p())},
b1V(d){return this.m(new C.e4j(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.b_(A.o.v(A.j.ar(m,60)),2,"0")
v=A.a.b_(A.o.v(A.o.F(A.j.cB(m),60)),2,"0")
m=B.b3(n,n,n,new C.bsX(l,A.bY,n),A.aUt)
u=B.d(w+":"+v,n,n,n,n,n,n,D.fwI,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.as(new B.a4(280,280,new B.an(A.A,n,A.ac,A.t,B.a([m,B.x(B.a([u,B.d(t,n,n,n,n,n,n,D.fvF,n,n,n),A.aw,B.d("Sessions done: "+o.r,n,n,n,n,n,n,A.vL,n,n,n)],s),A.l,n,A.e,A.N,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.dp1[r]
u.push(new E.dX(""+q+" min",o.d===q,new C.e4l(o,q),n,A.bY,n))}m=o.f
p=m?A4.v4:A.hc
m=m?"Pause":"Start"
return E.lD(A.bY,A.f5,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.x(B.a([new E.fd(u,n,n),new E.fd(B.a([new E.fE(p,m,new C.e4m(o),A.bc,n),new E.fE(A.oI,"Reset",new C.e4n(o),A.c,n)],s),n,n)],s),A.l,n,A.e,A.N,0,A.p))}}
C.bsX.prototype={
a4(d,e){var w,v,u,t,s=e.ea(A.J),r=e.a/2-14
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
v.d=A.bF
u=this.c
t=B.ap(u,A.c,0.4)
t.toString
v.sap(new B.h1(A.A,-1.5707963267948966,4.71238898038469,A.x,B.a([u,t,u],x.O),null,null).aG(0,B.bW(s,r)))
d.cP(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aE(d){return d.b!==this.b}}
C.VE.prototype={
S(){return new C.blP($,A.bC,0,B.a([],x.X),null,null)}}
C.blP.prototype={
Y(){this.a3()
this.mh()},
mB(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.Tr.h(0,p.d)
w.toString
v=A.d.f1(w,new C.dPR())
u=A.j.F(p.f,v)
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
E.mv("flute",D.cct[t]+5,1400,0.35)}p.m(new C.dPS())},
gcdY(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.L3("Press Start",0.5)
w=D.Tr.h(0,this.d)
w.toString
v=A.d.f1(w,new C.dPM())
u=A.j.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.L3("Breathe in",0.5+0.5*A.dH.aB(0,p))
case 1:return new B.L3("Hold",1)
case 2:return new B.L3("Breathe out",1-0.5*A.dH.aB(0,p))
default:return new B.L3("Hold",0.5)}}}return new B.L3("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gcdY(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.fI.j(0.12+(3-u)*0.05)
n.push(B.p(q,q,A.f,q,q,new B.o(s,q,q,q,u===0?B.a([new B.ab(0,A.G,A.fI.j(0.35),A.J,40)],v):q,q,A.a7),q,t,q,q,q,q,q,t))}n.push(B.d(p.a,q,q,q,q,q,q,A.q1,q,q,q))
n.push(B.ao(0,B.d("Breaths: "+r.w,q,q,q,q,q,q,A.ko,q,q,q),q,q,q,q,q,q))
n=B.as(new B.a4(300,340,new B.an(A.A,q,A.ac,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aT(D.Tr.gew(D.Tr));w.C();){v=w.gR(w)
o.push(new E.dX(v,r.d===v,new C.dPP(r,v),q,A.fI,q))}w=r.e
v=w?A.zB:A.hc
w=w?"Stop":"Start"
o.push(new E.fE(v,w,new C.dPQ(r),A.bc,q))
return E.lD(A.fI,A.f5,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new E.fd(o,q,q))}}
C.aKe.prototype={}
C.Wk.prototype={
S(){return new C.bm7(new B.cw(null,x.A),B.a([],x.au),A.av,A.c)}}
C.bm7.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aH(s,s,s,s,I.oQ,s,s,s,new C.e0U(t,d),s,s,s,s,"Share",s)],r),p=B.bu(B.l(18),new B.en(B.az(s,B.b3(s,s,s,new C.bo9(t.e,t.x,s),A.fS),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e0V(t),new C.e0W(t),s,s,s,s,s,s,s,s,s,new C.e0X(t),s,s,s,s,!1,A.a4),t.d),A.aq),o=B.a([],r)
for(w=0;w<9;++w){v=D.d41[w]
u=!t.w&&t.f.A(0,v)
o.push(new E.G1(v,u,new C.e0Y(t,v),!1,s))}u=t.r
return E.lD(A.bD,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.D(A.bU,p,s),"DRAW PAD",B.x(B.a([new E.fd(o,s,s),E.iT(A.bD,""+A.j.V(u),"Brush",30,2,new C.e0Z(t),u),new E.fd(B.a([new E.dX("Eraser",t.w,new C.e1_(t),A.zm,A.bD,s),new E.fE(A.pD,"Undo",new C.e10(t),A.c,s),new E.fE(A.ek,"Clear",new C.e11(t),A.c,s),new E.fE(A.PL,"Paper",new C.e12(t),A.c,s)],r),s,s)],r),A.l,s,A.e,A.N,0,A.p))}}
C.bo9.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k
$.S()
w=B.L()
w.r=this.c.gp(0)
d.aD(new B.a6(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=x.v,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=$.S()
q=new B.ar(A.S,A.Q,A.W,A.X,A.U)
p=s.a
q.r=p.gp(p)
o=s.b
q.c=o
q.d=A.bF
q.e=A.dQ
q.b=A.aa
n=s.c
if(n.length===1){r=A.d.gH(n)
n=new B.ar(A.S,A.Q,A.W,A.X,A.U)
n.r=p.gp(p)
d.O(r,o/2,n)}else{p=B.a([],u)
m=new B.aI(r.r,A.aj,null,null,p)
p.push(new B.aZ(A.d.gH(n).a,A.d.gH(n).b))
m.ab()
for(l=1;l<n.length-1;){r=n[l]
o=r.a;++l
k=n[l]
r=r.b
k=new B.cc(o,r,(o+k.a)/2,(r+k.b)/2)
p.push(k)
r=m.f
if(r!=null)k.ak(r)
m.ab()}r=new B.aq(A.d.gal(n).a,A.d.gal(n).b)
p.push(r)
p=m.f
if(p!=null)r.ak(p)
m.ab()
d.ag(m,q)}}},
aE(d){return!0}}
C.X3.prototype={
S(){var w=x.S
return new C.aG5(B.aR(w),B.aR(w))}}
C.aG5.prototype={
Y(){this.a3()
this.auu()},
auu(){var w,v,u=this,t=x.N,s=B.bp(D.duk,!0,t)
A.d.Dt(s)
w=x.S
v=B.U(s).c
t=B.C(B.cX(s,0,B.dC(u.d,"count",w),v),t)
A.d.u(t,B.cX(s,0,B.dC(u.d,"count",w),v))
A.d.Dt(t)
u.e=t
u.f.a8(0)
u.r.a8(0)
u.w=0
u.x=!1},
cdT(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
E.mv("bell",12+A.o.F(d,9),150,0.35)
s.m(new C.erT(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gH(0)
u=w.gal(0)
w=s.e
w===$&&B.c()
t=x.H
if(w[v]===w[u])B.bN(A.n0,new C.erU(s,v,u),t)
else{s.x=!0
B.bN(Ab.GX,new C.erV(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.d("Moves: "+r.w,q,q,q,q,q,q,A.W3,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.ar(p,2)+" / "+o
o=x.p
p=B.x(B.a([new B.D(A.yU,B.A(B.a([u,B.d(p,q,q,q,q,q,q,B.m(q,q,w?A.aQ:A.ab,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.l,q,A.iZ,A.h,0,q,q),q),B.E(B.it(!0,q,q,A.y,new B.hJ(v,8,8,1,q),new C.erZ(r),r.e.length,A.bj,q,A.ah,!1),1)],o),A.l,q,A.e,A.h,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.d5B[t]
o.push(new E.dX(s.b,r.d===s.a,new C.es_(r,s),q,A.aG,q))}o.push(new E.fE(I.ara,"New game",new C.es0(r),A.bc,q))
return E.lD(A.aG,A.f5,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new E.fd(o,q,q))}}
C.Xd.prototype={
S(){return new C.aGq(B.a([],x.t))}}
C.aGq.prototype={
cdX(d){A.d.a8(this.d)
this.w=!0
this.b1U()},
b1U(){this.d.push(A.cR.aw(4))
this.e=0
this.a07()},
a07(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a07=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eCF(t))
s=x.H
w=3
return B.b(B.bN(A.lL,null,s),$async$a07)
case 3:r=t.d,q=B.bp(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aVG(n)
w=7
return B.b(B.bN(new B.bd(1000*Math.max(280,600-r.length*18)),null,s),$async$a07)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new C.eCG(t))
case 1:return B.h(u,v)}})
return B.i($async$a07,v)},
aVG(d){this.m(new C.eCD(this,d))
E.mv("marimba",D.ccs[d]+5,450,0.55)
B.bN(A.GV,new C.eCE(this),x.H)},
cdZ(d){var w,v,u=this
if(!u.w||u.r)return
u.aVG(d)
w=u.d
v=u.e
if(w[v]!==d){G.dz(90,"",600,0,0.5,"saw")
u.m(new C.eCH(u))
return}++v
u.e=v
if(v===w.length){u.m(new C.eCI(u))
B.bN(A.hL,new C.eCJ(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.d("Best: "+q.x,p,p,p,p,p,p,T.aX4,p,p,p),n=B.d(q.y,p,p,p,p,p,p,D.fGg,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aBm[v]
u=u.j(q.f===v?1:0.35)
t=new B.aP(28,28)
s=q.f===v?B.a([new B.ab(0,A.G,D.aBm[v].j(0.8),A.J,30)],w):p
r=new B.ay(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.az(p,B.cT(p,p,p,p,A.b0,new B.o(u,p,new B.bF(r,r,r,r),new B.be(t,t,t,t),s,p,A.n),A.jo,p,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eCK(q,v),p,p,p,p,p,p,!1,A.a4))}o=B.as(new B.D(A.ad,B.x(B.a([o,A.am,n,A.da,new B.fH(1,B.kZ(1,l,2,12,12,p,A.e_,!1),p)],m),A.l,p,A.b8,A.h,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return E.lD(A.bt,A.f5,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new E.fd(B.a([new E.fE(A.hc,n,q.gcdW(q),A.bc,p)],m),p,p))}}
C.Xy.prototype={
S(){return new C.bnn(new B.au(A.ax,$.ax()))}}
C.bnn.prototype={
ay3(d){return B.ot(A.j.ad(d,2),B.ag("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eQH(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.cW(B.aL(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eQQ()
l=B.aN(m,A.Z,!1,m,!0,A.t,m,B.aO(),l,m,m,m,m,m,2,B.bz(m,m,m,m,m,m,m,m,!0,new B.b6(4,B.l(16),A6.y1),m,m,m,m,m,m,m,m,m,m,m,new B.b6(4,B.l(16),D.b62),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.lX,"Bill amount",!0,!0,!1,m,m,m,m,D.fDw,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ak,m,m,m,m,m,A.ea,m,m,m,1,m,m,!1,"\u2022",m,new C.eQM(n),m,m,m,!1,m,m,!1,m,!0,m,A.ad,m,m,m,m,m,m,m,m,m,m,m,A.aW3,!0,A.a6,m,A.ao,m,m,m,m)
k=A.bc.j(0.1)
s=B.l(20)
r=B.K(A.bc.j(0.35),A.r,1)
q=x.p
s=B.cm(B.a([l,A.by,B.p(m,B.x(B.a([t.$2("Tip ("+A.j.V(n.e)+"%)","$"+n.ay3(w)),t.$2("Total","$"+n.ay3(v)),A3.O0,t.$3$big("Each of "+n.f+" pays","$"+n.ay3(u),!0)],q),A.l,m,A.e,A.h,0,A.p),A.f,m,m,new B.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bS,m,m,m)],q),m,m,A.ft,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cQP[p]
r.push(new E.dX(""+o+"%",A.j.V(n.e)===o,new C.eQN(n,o),m,A.bc,m))}l=n.f
return E.lD(A.bc,A.f5,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.x(B.a([new E.fd(r,"TIP",m),E.iT(A.aG,""+l,"People",20,1,new C.eQO(n),l),new E.fd(B.a([new E.dX("Round up",n.r,new C.eQP(n),m,A.aQ,m)],q),m,m)],q),A.l,m,A.e,A.N,0,A.p))}}
C.X2.prototype={
S(){var w=B.a([3,5],x.t)
return new C.bmS(w,A.cR,$,A.bC,0,B.a([],x.X),null,null)}}
C.bmS.prototype={
Y(){this.a3()
this.mh()},
mB(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.j.bi(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t
E.XA("snare",0,0.5)}u.m(new C.eqy())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.h3()
u.w=t
u.x=t?0:3.141592653589793
E.mv("bell",24,400,0.5)}u.m(new C.eqz())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bfH(v,o.r>0,n))}u=B.az(n,B.as(B.bZ(A.fV,m,A.br,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eqr(o),n,n,n,n,n,n,!1,A.a4)}else if(m==="coin"){t=A.j.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.K(A.d5,A.r,6)
s=B.a([new B.ab(0,A.G,A.aQ.j(0.4),A.J,30)],x.V)
u=B.az(n,B.as(B.e2(A.A,B.p(A.A,B.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fCF,n,n,n),A.f,n,n,new B.o(n,n,v,n,s,D.eDI,A.a7),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eqs(o),n,n,n,n,n,n,!1,A.a4)}else{m=o.as
u=B.az(n,B.as(B.x(B.a([B.d(m===0?"?":""+m,n,n,n,n,n,n,D.fru,n,n,n),B.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.ko,n,n,n)],x.p),A.l,n,A.e,A.N,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eqt(o),n,n,n,n,n,n,!1,A.a4)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.dmc[r]
v.push(new E.dX(q.b,o.d===q.a,new C.equ(o,q),q.c,A.bd,n))}v=B.a([new E.fd(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(E.iT(A.bd,""+s,"Dice",4,1,new C.eqv(o),s))}if(o.d==="num"){s=o.z
s=E.iT(A.bd,""+s,"From",100,1,new C.eqw(o),s)
p=o.Q
A.d.u(v,B.a([s,E.iT(A.bd,""+p,"To",1000,2,new C.eqx(o),p)],m))}return E.lD(A.bd,A.f5,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.x(v,A.l,n,A.e,A.N,0,A.p))}}
C.bfH.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cR.ai()-0.5)*0.6
else w=0
v=B.l(22)
u=B.a([new B.ab(0,A.G,A.w.j(0.4),A.cy,14)],x.V)
t=B.a([],x.p)
for(s=D.dGx.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bK(s[q],p,p,B.p(p,p,A.f,p,p,A.Y8,p,18,p,p,p,p,p,18),p))
return B.eI(A.A,w,B.p(p,new B.an(A.a0,p,A.ac,A.t,t,p),A.f,p,p,new B.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bI,p,p,100),p)}}
C.aNp.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b3()
this.bB()}}
C.bzZ.prototype={
t(){var w,v,u
for(w=this.h8$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h7$
w===$&&B.c()
w.t()
this.bzc()}}
C.aNK.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b3()
this.bB()}}
C.bA4.prototype={
t(){var w,v,u
for(w=this.h8$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h7$
w===$&&B.c()
w.t()
this.bzy()}}
C.aOc.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b3()
this.bB()}}
C.bAd.prototype={
t(){var w,v,u
for(w=this.h8$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h7$
w===$&&B.c()
w.t()
this.bA1()}}
C.aOD.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b3()
this.bB()}}
C.bAm.prototype={
t(){var w,v,u
for(w=this.h8$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h7$
w===$&&B.c()
w.t()
this.bAs()}}
var z=a.updateTypes(["R(u0)","~()","R(a5B)","aB<~>()","R(D1)","H(u0,H)","G(G,u0)","R(CY)","R(a_B)","R(acJ)","R(a4s)","R(nL)","Xz()","VD()","a9A()","X8()","Xn()","X9()","R(mY)","VK()","agf(Z,H)","af6(Z,H)","~(a9<@,@>)","H(CY,CY)","n(eh)","R(ag3)","R(a1P)","R(Dc)","R(add)","R(af9)","R(acX)","H(H,rb)","H(H,D1)","n(rb)","~(rb,ai<n>,H)","rb?(D1)","X2()","v(n,a1C)","R(abC)","~(B7)","XC()","~(xD,n,r,u,G)","~(n,u0)","Wl()","WN(Z)","Of(Z)","W4(Z,bt<G>,bt<G>)","XH()","Wt()","VE()","Wk()","X3()","Xd()","Xy()","R(rb)"])
C.fLg.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+18}
C.fzX.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gH(d.e.split(". "))+"."},
$S:z+24}
C.fHE.prototype={
$1(d){var w
if(!this.a.Mq(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fHF.prototype={
$1(d){return d.x},
$S:z+0}
C.fLd.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fLe.prototype={
$1(d){var w
if(!this.a.Mq(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fLf.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.ejE.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ejF.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.y(this.b,this.c))},
$S:0}
C.ejG.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd5(v).Q
v.toString
w.ms(v,A.e5,A.iy)}},
$S:7}
C.ejR.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.ejS.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.ejN.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.ejL.prototype={
$2(d,e){var w=this.a
w.r.push(B.cy(B.dw(0,0,0,d,0,0),new C.ejM(w,this.b,e)))},
$S:1915}
C.ejM.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.ejO.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gX9().alo(0,u[1],u[2],u[3])
u[4].bO(0,new C.ejJ(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
G.dz(700+w.e*120,"",80,0,0.25,"square")
v.m(new C.ejK(w.a,v,w.f,w.r))},
$S:0}
C.ejJ.prototype={
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
C.ejK.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.j.bi(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.ejP.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gX9().ame(t,u[1],s,u[3])
G.dz(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new C.ejI(w.a,v,w.e,w.f))},
$S:0}
C.ejI.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.j.bi(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.ejQ.prototype={
$0(){G.dz(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new C.ejH(w,this.b))},
$S:0}
C.ejH.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.ejV.prototype={
$0(){var w=this.a
return w.m(new C.ejU(w))},
$S:0}
C.ejU.prototype={
$0(){return this.a.at=!0},
$S:0}
C.ejW.prototype={
$0(){var w=this.a
return w.m(new C.ejT(w))},
$S:0}
C.ejT.prototype={
$0(){return this.a.at=!1},
$S:0}
C.ejX.prototype={
$0(){var w=this.a
w.f.sb1(0,this.b)
w.PW()},
$S:0}
C.ejY.prototype={
$0(){return this.a.Zg(this.b)},
$S:0}
C.ejZ.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.PW():w.aYH()},
$S:2}
C.ek_.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.PW():w.aYH()},
$S:0}
C.eyZ.prototype={
$2(d,e){return d+e},
$S:1916}
C.ezi.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ezh(w,d))},
$S:1917}
C.ezh.prototype={
$0(){var w=B.aJ(J.t(this.b,"unlocked"))
w=w==null?null:A.j.M(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.ezj.prototype={
$0(){},
$S:0}
C.ezk.prototype={
$0(){},
$S:0}
C.ez0.prototype={
$0(){return this.a.m(new C.ez_(this.b,this.c))},
$S:0}
C.ez_.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eyQ.prototype={
$1(d){return this.a.cx===d},
$S:33}
C.eyR.prototype={
$1(d){return this.a.cx=d},
$S:29}
C.eyS.prototype={
$1(d){return this.a.cy===d},
$S:33}
C.eyT.prototype={
$1(d){return this.a.cy=d},
$S:29}
C.eyU.prototype={
$1(d){return this.a.db===d},
$S:33}
C.eyV.prototype={
$1(d){return this.a.db=d},
$S:29}
C.eyW.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:33}
C.eyX.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.W(0,d):w.I(0,d)},
$S:29}
C.eyY.prototype={
$0(){var w=this.a
return w.m(w.gayF())},
$S:0}
C.eyO.prototype={
$1(d){return this.a.$1(!0)},
$S:71}
C.eyP.prototype={
$1(d){return this.a.$1(!1)},
$S:111}
C.eyN.prototype={
$1(d){return this.a.$1(!1)},
$S:139}
C.ezb.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.ch=n
n=B.b3(p,p,p,new C.bjz(o,p),n)
w=this.b
v=C.bCB("WORLD",w.a,w.c)
u=C.bCB("GRAVITY",B.w(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.j.V(t*100)
t=t<0.25?A.bY:A.bc
t=C.bCB("FUEL",""+s+"%",t)
s=o.r.b
r=A.j.V(s*100)
s=s>D.DP[o.db].d?A.bY:A.c
q=x.p
s=B.a([v,u,t,C.bCB("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(C.bCB("HEIGHT",""+A.j.V(A.j.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ao(p,B.A(s,A.l,p,A.iZ,A.h,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bIf(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.tt[w].a+".":"You landed on every world!"
v=B.a([new E.fE(A.nP,"Again",new C.ez6(o),A.c,p),new E.fE(A.oD,"Rebuild",new C.ez7(o),A.aQ,p)],q)
if(o.d+1<7)v.push(new E.fE(A.js,"Next world",new C.ez8(o),A.bc,p))
n.push(C.hAB("Perfect landing!",w,A.bc,v))}if(o.as==="crashed")n.push(C.hAB("Crash!",o.at,A.bY,B.a([new E.fE(A.nP,"Try again",new C.ez9(o),A.bc,p),new E.fE(A.oD,"Rebuild",new C.eza(o),A.aQ,p)],q)))
return new B.an(A.a0,p,A.b2,A.t,n,p)},
$S:66}
C.ez6.prototype={
$0(){var w=this.a
return w.m(w.gayF())},
$S:0}
C.ez7.prototype={
$0(){var w=this.a
return w.m(new C.ez3(w))},
$S:0}
C.ez3.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.ez8.prototype={
$0(){var w=this.a
return w.m(new C.ez2(w))},
$S:0}
C.ez2.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.ez9.prototype={
$0(){var w=this.a
return w.m(w.gayF())},
$S:0}
C.eza.prototype={
$0(){var w=this.a
return w.m(new C.ez1(w))},
$S:0}
C.ez1.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.ezc.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new C.ez5(v,w))},
$S:0}
C.ez5.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.ezd.prototype={
$1(d){return this.a.y=d},
$S:9}
C.eze.prototype={
$1(d){return this.a.Q=d},
$S:9}
C.ezf.prototype={
$1(d){return this.a.z=d},
$S:9}
C.ezg.prototype={
$0(){var w=this.a
return w.m(new C.ez4(w))},
$S:0}
C.ez4.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dPK.prototype={
$0(){var w=0,v=B.j(x.k),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.iG(B.a([C.hvH(),C.hvI()],x.D),x.K),$async$$0)
case 3:r=e
q=t.a
if(q.c==null){w=1
break}s=q.as
s.toString
s.kW(0,B.cP(J.t(r,1)))
q.m(new C.dPJ(q,r))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:51}
C.dPJ.prototype={
$0(){return this.a.d=x.m.a(J.t(this.b,0))},
$S:0}
C.dPk.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dPl.prototype={
$0(){return this.a.c_a(B.aV(J.t(this.b,"group")))},
$S:0}
C.dPm.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dPn.prototype={
$1(d){return A.a.b_(A.o.ft(A.o.D(A.j.V(d*255),0,255),16),2,"0")},
$S:300}
C.dPL.prototype={
$0(){return E.XA("kick",0,0.25)},
$S:0}
C.dPo.prototype={
$0(){return this.a.cy=this.b},
$S:0}
C.dPp.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dPq.prototype={
$0(){return E.XA("kick",0,0.5)},
$S:0}
C.dPr.prototype={
$0(){return G.dz(1300+this.a.RG.aw(900),"",40,0,0.2,"square")},
$S:0}
C.dPt.prototype={
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
u=w}if(u.cy!=null&&!A.d.aV(u.d.e,new C.dPs(u)))u.cy=null
u.id=0},
$S:0}
C.dPs.prototype={
$1(d){var w=this.a
return d.a===w.cy&&w.aAt(d)},
$S:z+10}
C.dPh.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p4
w=u.a
v=u.c
w.R8=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p3.toLowerCase()+"."},
$S:0}
C.dPi.prototype={
$0(){var w=this.a
return w.m(w.gc9Q())},
$S:0}
C.dPj.prototype={
$0(){return this.a.aeQ(null)},
$S:0}
C.dPA.prototype={
$0(){var w=this.a.as
return w==null?null:w.fa(0,B.J(["t","shot"],x.N,x.z))},
$S:0}
C.dPB.prototype={
$0(){return this.a.cGr(this.b.a)},
$S:0}
C.dPC.prototype={
$0(){return this.a.aeQ(this.b)},
$S:0}
C.dPD.prototype={
$1(d){var w=this.a
return w.m(new C.dPz(w,d))},
$S:6}
C.dPz.prototype={
$0(){return this.a.k4=this.b},
$S:0}
C.dPE.prototype={
$0(){var w=this.a
return w.m(new C.dPy(w,this.b))},
$S:0}
C.dPy.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dPF.prototype={
$0(){var w=this.a
return w.m(new C.dPx(w))},
$S:0}
C.dPx.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.dPG.prototype={
$0(){var w=this.a
return w.m(new C.dPw(w))},
$S:0}
C.dPw.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.fa(0,B.J(["t","reset"],x.N,x.z))
w.cy=null
w.db=0.5
w.dx=0.05
w.fr=1
w.fy=D.M6},
$S:0}
C.dPH.prototype={
$0(){var w=this.a
return w.m(new C.dPv(w))},
$S:0}
C.dPv.prototype={
$0(){var w=this.a,v=!w.p2
w.p2=v
w.p4=0
w.cy=null
if(v)w.b0t()
else w.p3=null},
$S:0}
C.dPI.prototype={
$0(){var w=this.a
return w.m(new C.dPu(w))},
$S:0}
C.dPu.prototype={
$0(){var w=this.a
return w.ok=!w.ok},
$S:0}
C.c6V.prototype={
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
$S:327}
C.c6W.prototype={
$1(d){var w=new B.qt([],[]).o0(d.data,!0)
if(x.f.b(w)&&J.t(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:351}
C.ftf.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)&&w.h(d,1)},
$S:214}
C.ftg.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)||w.h(d,1)},
$S:214}
C.fth.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)!==w.h(d,1)},
$S:214}
C.fto.prototype={
$1(d){return!J.t(d,0)},
$S:214}
C.ftp.prototype={
$1(d){var w=J.a7(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:214}
C.ftq.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:214}
C.dRp.prototype={
$1(d){return this.a.avj(0)},
$S:7}
C.dR3.prototype={
$0(){var w=this.b
return this.a.cx=new B.N(w,B.iiA(),B.U(w).k("N<1,H>")).fM(0)},
$S:0}
C.dR6.prototype={
$1(d){return""+d},
$S:76}
C.dRq.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dR1.prototype={
$1(d){return this.a.avj(this.b)},
$S:7}
C.dR2.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.az9(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mR(0,d,a1.mi(0.15,0.3))
u=a1.mR(0,d,a1.mi(0.15,0.62))
t=a1.mR(0,"and",a1.mi(0.48,0.46))
s=a1.mR(0,a0,a1.mi(0.82,0.46))
a1=t.a
w.push(new C.nL(v.a,a1,0))
w.push(new C.nL(u.a,a1,1))
w.push(new C.nL(a1,s.a,0))
break
case 1:v=a1.mR(0,d,a1.mi(0.12,0.25))
u=a1.mR(0,d,a1.mi(0.12,0.65))
r=a1.mR(0,"xor",a1.mi(0.46,0.25))
q=a1.mR(0,"and",a1.mi(0.46,0.65))
p=a1.az8(0,a0,a1.mi(0.82,0.25),0)
o=a1.az8(0,a0,a1.mi(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.nL(a1,n,0))
m=u.a
w.push(new C.nL(m,n,1))
l=q.a
w.push(new C.nL(a1,l,0))
w.push(new C.nL(m,l,1))
w.push(new C.nL(n,p.a,0))
w.push(new C.nL(l,o.a,0))
break
case 2:k=a1.mR(0,"clock",a1.mi(0.15,0.4))
j=a1.mR(0,"not",a1.mi(0.45,0.65))
s=a1.mR(0,a0,a1.mi(0.82,0.3))
i=a1.mR(0,"buzzer",a1.mi(0.82,0.65))
a1=k.a
w.push(new C.nL(a1,s.a,0))
n=j.a
w.push(new C.nL(a1,n,0))
w.push(new C.nL(n,i.a,0))
break
default:h=a1.mR(0,d,a1.mi(0.12,0.25))
g=a1.mR(0,d,a1.mi(0.12,0.7))
f=a1.mR(0,"nor",a1.mi(0.5,0.25))
e=a1.mR(0,"nor",a1.mi(0.5,0.7))
s=a1.mR(0,a0,a1.mi(0.86,0.25))
a1=f.a
w.push(new C.nL(g.a,a1,0))
n=e.a
w.push(new C.nL(n,a1,1))
w.push(new C.nL(h.a,n,0))
w.push(new C.nL(a1,n,1))
w.push(new C.nL(a1,s.a,0))}},
$S:0}
C.dR7.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.az9(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.CY(p,"switch",new B.r(0.14*q.a,r*q.b),0))}o.mR(0,w.e,o.mi(0.86,0.5))},
$S:0}
C.dQX.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dQY.prototype={
$2(d,e){return A.j.aS(d.c.b,e.c.b)},
$S:z+23}
C.dQZ.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dR_.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dR0.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.ae9(this.c)
if(v.ax)C.JL("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gH(w)
v.CW=!1
if(v.ax)G.dz(140,"",250,0,0.3,"square")}},
$S:0}
C.dR8.prototype={
$0(){},
$S:0}
C.dR9.prototype={
$0(){return A.d.cG(this.a.e,this.b)},
$S:0}
C.dRa.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dR5.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bq(w.e,new C.dR4(v))
w.cy=null},
$S:0}
C.dR4.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
C.dQW.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mR(0,this.b,new B.r(w.x.a*(0.3+v.ai()*0.4),w.x.b*(0.2+v.ai()*0.6))).a},
$S:0}
C.dRj.prototype={
$0(){var w=this.a
return w.m(new C.dRi(w))},
$S:0}
C.dRi.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dRk.prototype={
$2(d,e){var w=null,v=this.a,u=new B.av(e.b,e.d)
v.x=u
return B.az(A.c1,B.jo(B.b3(w,w,w,new C.bdz(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dRd(v),w,w,w,new C.dRe(v),new C.dRf(v),new C.dRg(v),w,w,w,w,w,w,w,w,w,w,new C.dRh(v),w,w,w,!1,A.a4)},
$S:36}
C.dRh.prototype={
$1(d){return this.a.cbC(d.b)},
$S:60}
C.dRf.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ckH(u)
if(t!=null){v.as=t
v.at=u
return}w=v.aA_(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aK(0,u)}},
$S:49}
C.dRg.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.r(A.j.D(w.a+u.Q.a,46,u.x.a-46),A.j.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:19}
C.dRe.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c2G(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bq(v,new C.dRb(w))
u=t.as
u.toString
v.push(new C.nL(u,w.a,w.b))
B.jZ()}}t.z=t.as=null},
$S:38}
C.dRb.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
C.dRd.prototype={
$1(d){return this.a.axX(d.b)},
$S:318}
C.dRl.prototype={
$0(){return this.a.bE3(this.b.a)},
$S:0}
C.dRm.prototype={
$0(){return this.a.avj(this.b.a)},
$S:0}
C.dRn.prototype={
$0(){var w=this.a
return w.m(new C.dRc(w))},
$S:0}
C.dRc.prototype={
$0(){var w=this.a
w.az9(0)
w.ay=null},
$S:0}
C.dRo.prototype={
$0(){return this.a.cC1(this.b)},
$S:0}
C.cWo.prototype={
$0(){var w=this,v=null,u=B.fp(v,A.cr,v,v,v,B.cQ(v,v,v,v,v,v,v,v,v,B.m(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a6,A.bW,v,A.dA,A.bX)
u.ec()
return u},
$S:261}
C.dXB.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dXA.prototype={
$0(){return this.a.d=null},
$S:0}
C.dXD.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c4B()},
$S:128}
C.dXC.prototype={
$0(){return B.a5(this.a,!1).hU()},
$S:0}
C.ftG.prototype={
$0(){return I.aM7},
$S:z+40}
C.ftH.prototype={
$0(){return D.dTG},
$S:z+43}
C.ftI.prototype={
$0(){return D.dQx},
$S:z+13}
C.ftJ.prototype={
$0(){return D.ek3},
$S:z+14}
C.ftK.prototype={
$0(){return D.e1X},
$S:z+15}
C.ftL.prototype={
$0(){return I.aLZ},
$S:z+16}
C.ftM.prototype={
$0(){return D.ehQ},
$S:z+17}
C.ftN.prototype={
$0(){return I.aM6},
$S:z+12}
C.ftO.prototype={
$0(){return D.dSO},
$S:z+19}
C.f96.prototype={
$2(d,e){return new C.agf(e,$.bH8()[e],new C.f95(e,this.a),null)},
$S:z+20}
C.f95.prototype={
$0(){var w=this.a,v=K.aJD.h(0,$.bH8()[w].a)
$.atE=v==null?"music":v
B.a5(this.b,!1).ce(B.ed(new C.f93(w),!1,null,x.H))},
$S:0}
C.f93.prototype={
$1(d){return $.bH8()[this.a].e.$0()},
$S:39}
C.f97.prototype={
$2(d,e){return new C.af6(e,D.aC1[e],new C.f94(this.a,e),null)},
$S:z+21}
C.f94.prototype={
$0(){return this.a.d.$1(D.aC1[this.b])},
$S:0}
C.f8N.prototype={
$0(){return this.a.as=!0},
$S:0}
C.f8M.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f8L.prototype={
$1(d){var w=this
return new B.e1(new C.f8K(w.a,w.b,w.c,w.d),null)},
$S:20}
C.f8K.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=x.l,a2=B.aF(a3,a0,a1).w
a1=B.aF(a3,a0,a1).w
w=x.p
v=B.a([D.fNT,A.aw,D.fUI,A.af],w)
for(u=d.d,t=d.a,s=x.G,r=d.b,q=d.c,p=0;p<3;p=o){o=p+1
n=B.d("SLAB "+o,a0,a0,a0,a0,a0,a0,D.fCZ,a0,a0,a0)
m=new B.aP(12,12)
l=new B.aP(12,12)
l=B.a([new B.by(1,A.ba,B.aN(a0,A.Z,!1,a0,!0,A.t,a0,B.aO(),r[p],a0,a0,a0,a0,a0,2,new B.e7(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Title",a0,N.F6,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.be(m,m,m,m),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ad,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jC,!0,A.a6,a0,A.ao,a0,a0,a0,a0),a0),A.ae,new B.by(2,A.ba,B.aN(a0,A.Z,!1,a0,!0,A.t,a0,B.aO(),q[p],a0,a0,a0,a0,a0,2,new B.e7(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Small line",a0,N.F6,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.be(l,l,l,l),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ad,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jC,!0,A.a6,a0,A.ao,a0,a0,a0,a0),a0)],w)
m=B.a([],w)
for(k=0;k<30;++k){j=D.dBM[k]
i=new B.aP(12,12)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.C(t.a.c.d,s)
t.w=h}g=A.d.gH(h).j(0.3)}else g=A.c.j(0.06)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.C(t.a.c.d,s)
t.w=h}f=A.d.gH(h)}else f=A.bx
e=new B.ay(f,u[p].A(0,j)?1.8:1,A.r,-1)
m.push(B.az(a0,B.p(a0,B.X(j,u[p].A(0,j)?A.c:A.aR,a0,a0,a0,22),A.f,a0,a0,new B.o(g,a0,new B.bF(e,e,e,e),new B.be(i,i,i,i),a0,a0,A.n),a0,a0,a0,A.fn,a0,a0,a0,42),A.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.f8I(a4,p,u,j),a0,a0,a0,a0,a0,a0,!1,A.a4))}A.d.u(v,B.a([n,A.am,new B.c7(A.aL,A.e,A.h,A.l,a0,A.p,a0,0,l,a0),A.P,new B.a4(a0,44,B.cm(m,a0,a0,a0,a0,a0,A.aL,!1),a0),A.aB],w))}v.push(B.bI(A.B5,a0,new C.f8J(t,r,q,u,a3),a0))
return new B.D(new B.Q(0,0,0,a2.f.d),B.bm(!0,new B.cN(new B.aY(0,1/0,0,a1.a.b*0.86),B.cm(v,a0,a0,A0.yV,a0,a0,A.ah,!0),a0),!0,!1,A.ag,!0,!0),a0)},
$S:103}
C.f8I.prototype={
$0(){var w=this
return w.a.$1(new C.f8H(w.b,w.c,w.d))},
$S:0}
C.f8H.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.f8J.prototype={
$0(){var w=this,v=w.a
v.m(new C.f8G(v,w.b,w.c,w.d))
B.a5(w.e,!1).N(null)},
$S:0}
C.f8G.prototype={
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
C.f8V.prototype={
$0(){var w=this.a
return w.m(new C.f8U(w))},
$S:0}
C.f8U.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.f8W.prototype={
$0(){return E.uH(this.b,this.a.f,"scene")},
$S:0}
C.f8X.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ap(A.d.gH(u),A.d.gal(u),0.4)
u.toString
w=this.a.ga_G().x
w===$&&B.c()
return new B.bM(new B.o(v,v,v,v,v,new B.bV(D.b3x,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.c3],x.O),v,v),A.n),A.bi,v,v)},
$S:331}
C.f8Y.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.as(new B.dF(A.dW,A.A,A.f,B.c6(new B.hb(B.a([u.guL(),u.ga_G()],x.dS)),new C.f8T(u,this.b,v),w),w),w,w,w)},
$S:239}
C.f8T.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.guL().x
r===$&&B.c()
w=r<0.9?1:1-C.btU(r,0.9,0.98)
v=s.ga_G().x
v===$&&B.c()
u=A.dH.aB(0,v)
switch(s.gaza().a){case 0:s=s.bDe(t.b,r,u,t.c)
break
case 1:s=s.bUd(t.b,r,u,t.c)
break
case 2:s=s.cGV(t.b,r,u,t.c)
break
case 3:s=s.bGa(t.b,r,u,t.c)
break
case 4:s=s.bJx(t.b,r,u,t.c)
break
case 5:s=s.cbD(t.b,r,u,t.c)
break
default:s=null}return B.d3(s,w)},
$S:193}
C.f8Z.prototype={
$2(d,e){var w=B.abp(this.b),v=this.c.d,u=B.ap(A.d.gH(v),A.d.gal(v),0.4)
u.toString
v=B.ap(A.d.gH(v),A.d.gal(v),0.4)
v.toString
v=w.cPT(u,A.bx,v,3.5)
u=this.a
w=u.guL().x
w===$&&B.c()
return B.YZ(B.l_(null,null,null,1,0,new C.f8S(u),A.j.D(w,0,1)),v)},
$S:1919}
C.f8S.prototype={
$1(d){var w=this.a
w.guL().sp(0,d)
if(w.as)w.m(new C.f8O(w))},
$S:6}
C.f8O.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f9_.prototype={
$0(){var w=this.a
w.guL().sp(0,0)
w.afg()},
$S:0}
C.f90.prototype={
$1(d){var w=this.a
w.m(new C.f8R(w,d))
if(w.as)w.afg()},
$S:6}
C.f8R.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f91.prototype={
$0(){var w=this.a
w.m(new C.f8Q(w,this.b))
w.guL().sp(0,0)
if(w.as)w.afg()},
$S:0}
C.f8Q.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.f92.prototype={
$0(){var w=this.a
return w.m(new C.f8P(w,this.b))},
$S:0}
C.f8P.prototype={
$0(){var w=B.C(this.b,x.G)
return this.a.w=w},
$S:0}
C.f8E.prototype={
$2(d,e){return A.j.aS(d.a,e.a)},
$S:1920}
C.f8F.prototype={
$1(d){return d.b},
$S:1921}
C.drv.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.drw.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.drs.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.drt.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dru.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.drx.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dry.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.drz.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.drA.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.drB.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.drC.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.drD.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.drE.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.drF.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.eyj.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ey8.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.eya.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gX(e.b),97)},
$S:z+31}
C.eyb.prototype={
$2(d,e){return d+A.o.F(A.a.gX(e.a),31)+A.o.F(A.a.gX(e.b),17)},
$S:z+32}
C.eye.prototype={
$1(d){var w=D.na.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+33}
C.eyf.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.U(q),o=x.dg,n=B.C(new B.eb(new B.cM(new B.Y(q,new C.eyg(d),p.k("Y<1>")),new C.eyh(r),p.k("cM<1,rb?>")),o),o.k("M.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aN(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.I)(n),++v){u=n[v]
if(w.length>=6)return
t=B.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.eyg.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eyh.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.eyc.prototype={
$1(d){return D.na.h(0,d.b).c===D.xW},
$S:z+54}
C.eyd.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eyJ.prototype={
$1(d){var w=this.a,v=d.a,u=A.j.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.vN(0,u)
w.a7B(A.o.ar(v,1000))},
$S:7}
C.eyi.prototype={
$0(){},
$S:0}
C.ey4.prototype={
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
C.eyl.prototype={
$1(d){var w=null,v=this.a.b
return B.bm(!0,B.x(B.a([A.P,B.dI(!1,w,w,w,!0,w,w,w,!0,w,w,B.X(D.na.h(0,v).b,D.na.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.h5l,w,B.d(D.na.h(0,v).a,w,w,w,w,w,w,A.h5,w,w,w),w,w,w),B.dI(!1,w,w,w,!0,w,w,w,!0,w,w,W.asL,w,w,w,w,new C.eyk(d),!1,w,w,w,w,w,w,w,D.fXA,w,w,w)],x.p),A.l,w,A.e,A.N,0,A.p),!0,!1,A.ag,!0,!0)},
$S:25}
C.eyk.prototype={
$0(){B.a5(this.a,!1).N(!0)
return null},
$S:0}
C.eyn.prototype={
$1(d){var w,v,u,t=null,s=B.aF(d,t,x.l).w,r=B.a([D.ew4],x.p)
for(w=0;w<6;++w){v=D.aCq[w]
u=B.d(v.a,t,t,t,t,t,t,A.h5,t,t,t)
r.push(B.dI(!1,t,t,t,!0,t,t,t,!0,t,t,D.c4t,t,t,t,t,new C.eym(d,v),!1,t,t,t,t,t,B.d(v.b,t,t,t,t,t,t,A.lX,t,t,t),t,u,t,t,t))}return B.bm(!0,new B.cN(new B.aY(0,1/0,0,s.a.b*0.7),B.cm(r,t,t,D.bIX,t,t,A.ah,!0),t),!0,!1,A.ag,!0,!0)},
$S:25}
C.eym.prototype={
$0(){B.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.ey7.prototype={
$1(d){var w=null
return B.ej(B.a([B.bO(!1,A.ds,w,w,!0,w,w,w,new C.ey5(d),w,w),B.bO(!1,A.Fa,w,w,!0,w,w,w,new C.ey6(d),w,w)],x.p),w,w,K.mb,D.fUV,w,w,w,w,D.fXU,w)},
$S:18}
C.ey5.prototype={
$0(){B.a5(this.a,!1).N(!1)
return null},
$S:0}
C.ey6.prototype={
$0(){B.a5(this.a,!1).N(!0)
return null},
$S:0}
C.eyH.prototype={
$0(){var w=this.a
return w.m(new C.eyG(w))},
$S:0}
C.eyG.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eyI.prototype={
$2(d,e){var w,v,u,t=null,s=new B.av(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.no(new C.eyx(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.ber:t
v=B.a([B.b3(u,t,t,new C.bjx(w,v,new C.eyy(r),new C.eyz(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ao(t,new B.du(!0,B.c6(w,new C.eyA(r),t),t),t,t,10,10,6,t))
if(r.ax)v.push(r.bLc())
return B.az(A.c1,B.jo(new B.an(A.a0,t,A.b2,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.eyB(r),t,r.gcm_(),t,new C.eyC(r),new C.eyD(r),new C.eyE(r),t,t,t,t,t,t,t,t,t,t,new C.eyF(r),t,t,t,!1,A.a4)},
$S:36}
C.eyx.prototype={
$0(){return this.a.adb(this.b)},
$S:0}
C.eyF.prototype={
$1(d){return this.a.cEA(d.b)},
$S:60}
C.eyD.prototype={
$1(d){return this.a.cm0(d.b)},
$S:49}
C.eyE.prototype={
$1(d){return this.a.cm1(d.b)},
$S:19}
C.eyC.prototype={
$1(d){return this.a.b41()},
$S:38}
C.eyB.prototype={
$1(d){return this.a.adU(d.b)},
$S:318}
C.eyy.prototype={
$0(){return this.a.z},
$S:702}
C.eyz.prototype={
$0(){return this.a.Q},
$S:752}
C.eyA.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bPv()
if(p.length===0)return A.bM
w=A.w.j(0.55)
v=B.l(14)
u=B.K(A.bx,A.r,1)
t=B.a([D.fSh,A.cQ],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.I)(p),++r)t.push(B.d(p[r],q,2,A.a2,q,q,q,A.aX0,q,q,q))
return B.p(q,B.x(t,A.E,q,A.e,A.N,0,A.p),A.f,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.hl,q,q,q)},
$S:67}
C.ey9.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.l(12),t=B.K(e.j(0.6),A.r,1),s=x.p
return new B.D(A.em,B.A(B.a([B.p(w,B.X(d,e,w,w,w,21),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bb,B.E(B.x(B.a([B.d(f,w,w,w,w,w,w,Ac.VY,w,w,w),A.bE,B.d(g,w,w,w,w,w,w,F.abX,w,w,w)],s),A.E,w,A.e,A.h,0,A.p),1)],s),A.E,w,A.e,A.h,0,w,w),w)},
$S:1923}
C.eyt.prototype={
$0(){var w=this.a.c
w.toString
return B.a5(w,!1).hU()},
$S:0}
C.eyu.prototype={
$0(){var w=this.a
return w.m(new C.eys(w))},
$S:0}
C.eys.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eyv.prototype={
$0(){var w=this.a
return w.m(new C.eyr(w))},
$S:0}
C.eyr.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.eyw.prototype={
$0(){var w=this.a
return w.m(new C.eyq(w))},
$S:0}
C.eyq.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eyp.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.na.gdP(D.na),w=w.gae(w);w.C();){v=w.gR(w)
if(v.b.c===e)p.push(v.a)}w=B.d(d,q,q,q,q,q,q,B.m(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.I)(p),++r)u.push(s.czk(p[r]))
return new B.D(R.am2,B.x(B.a([new B.D(Aj.anM,w,q),B.A(u,A.l,q,A.e,A.h,0,q,q)],v),A.E,q,A.e,A.h,0,A.p),q)},
$S:z+37}
C.eyo.prototype={
$0(){return this.a.cbJ(this.b)},
$S:0}
C.drr.prototype={
$0(){var w=this,v=null,u=B.fp(v,A.cr,v,v,v,B.cQ(v,v,v,v,v,v,v,v,v,B.m(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a6,A.bW,v,A.dA,A.bX)
u.ec()
return u},
$S:261}
C.bQc.prototype={
$1(d){return d.r<=0},
$S:z+38}
C.bQn.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bQi.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bQo.prototype={
$1(d){return this.a.Mq(d)&&!d.x},
$S:z+0}
C.bQp.prototype={
$2(d,e){return Math.max(d,this.a.aCQ(e))},
$S:z+6}
C.bQr.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bQs(w))},
$S:z+5}
C.bQs.prototype={
$0(){return this.a.a},
$S:89}
C.bQq.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:70}
C.bQt.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bQu(w))},
$S:z+5}
C.bQu.prototype={
$0(){return this.a.a},
$S:89}
C.bQe.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bQf(w))},
$S:z+5}
C.bQf.prototype={
$0(){return this.a.a},
$S:89}
C.bQd.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:70}
C.bQg.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bQh(w))},
$S:z+5}
C.bQh.prototype={
$0(){return this.a.a},
$S:89}
C.bQb.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bQv.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bQj.prototype={
$1(d){return d!==this.b&&this.a.aJa(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bQm.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bQl.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bQk.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bKz.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bKA.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.cuc.prototype={
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
C.fXc.prototype={
$1(d){var w
$.S()
w=B.L()
w.r=d.gp(0)
return w},
$S:1924}
C.fXe.prototype={
$2(d,e){var w
$.S()
w=B.L()
w.b=A.aa
w.c=e
w.r=d.gp(0)
w.d=A.bF
return w},
$S:1925}
C.fXf.prototype={
$5(d,e,f,g,h){return B.bx(new B.a6(d,e,d+f,e+g),new B.aP(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1926}
C.fXd.prototype={
$3(d,e,f){var w
$.S()
w=B.L()
w.sap(new B.a8(A.aZ,A.b4,A.x,B.a([e,f],x.O),null,null).aG(0,d))
return w},
$S:1927}
C.bKc.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.bKd.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bKb(w))},
$S:0}
C.bKb.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bKe.prototype={
$0(){return B.a([],x.C)},
$S:1928}
C.bKf.prototype={
$1(d){return this.a.bC(d).a>15e5},
$S:364}
C.bKg.prototype={
$0(){var w,v,u
J.bHh(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.ru(v))if(C.hgA(v.b))w.b3v(v)
else w.a0L(v)
else{u=w.a.c.bgo(v)
w.afs(u==null?"The "+$.qG().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bKa.prototype={
$1(d){return new B.e1(new C.bK7(this.a,this.b),null)},
$S:20}
C.bK7.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p=null,o=this.b,n=new C.bK8(this.a,o,a3),m=$.qG(),l=o.b,k=m.h(0,l).d,j=A.j.V(o.ch/1.04),i=new C.bK9(o,n,k),h=B.l(26),g=B.K(k.j(0.55),A.r,1.4),f=x.V,e=B.a([new B.ab(0,A.G,k.j(0.25),A.J,26)],f),d=B.p(p,p,A.f,p,p,new B.o(A.aT,p,p,B.l(3),p,p,A.n),p,4,p,p,p,p,p,42),a0=k.j(0.2),a1=B.K(k,A.r,1)
a1=B.p(p,B.as(B.d(m.h(0,l).c,p,p,p,p,p,p,A.q0,p,p,p),p,p,p),A.f,p,p,new B.o(a0,p,a1,p,p,p,A.a7),p,42,p,p,p,p,p,42)
a0=x.p
w=B.E(B.x(B.a([B.d(m.h(0,l).b,p,1,A.a2,p,p,p,A.jR,p,p,p),D.fS5],a0),A.E,p,A.e,A.h,0,A.p),1)
v=k.j(0.2)
u=B.l(14)
t=B.K(k,A.r,1)
u=B.A(B.a([a1,A.bb,w,B.p(p,B.d(""+A.j.V(o.ch*100)+"%",p,p,p,p,p,p,B.m(p,p,k,p,p,p,p,p,p,p,p,15,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(v,p,t,u,p,p,A.n),p,p,p,p,A.mf,p,p,p)],a0),A.l,p,A.e,A.h,0,p,p)
t=A.w.j(0.35)
v=B.l(18)
w=B.K(A.dq,A.r,1)
a1=30+28*o.ch
s=B.l(8)
r=B.a([k.j(0.85),A.av],x.O)
q=B.K(A.aE,A.r,2)
f=B.a([new B.ab(0,A.G,k.j(0.5),A.J,14)],f)
v=B.p(p,B.as(B.cT(p,B.as(new B.dF(A.dD,A.A,A.f,new B.D(A.hO,B.d(m.h(0,l).c,p,p,p,p,p,p,A.mE,p,p,p),p),p),p,p,p),p,p,A.b0,new B.o(p,p,q,s,f,new B.a8(A.ay,A.aD,A.x,r,p,p),A.n),A.eH,p,a1*0.58,p,p,p,p,p,a1),p,p,p),A.f,p,p,new B.o(t,p,w,v,p,p,A.n),p,120,p,p,p,p,p,1/0)
i=B.A(B.a([i.$2("1\xd7",1),i.$2("2\xd7",2),i.$2("3\xd7",3),i.$2("4\xd7",4),i.$2("5\xd7",5)],a0),A.l,p,A.e,A.h,0,p,p)
w=B.aH(p,p,p,p,B.X(A.ar2,k,p,p,p,30),p,p,p,new C.bK3(n,o),p,p,p,p,p,p)
t=B.abp(a2).bfS(k,A.bx,k.j(0.2),A.c,8)
o=B.A(B.a([w,B.E(B.YZ(B.l_(p,p,p,5.2,1,n,A.j.D(o.ch,1,5.2)),t),1),B.aH(p,p,p,p,B.X(A.a32,k,p,p,p,30),p,p,p,new C.bK4(n,o),p,p,p,p,p,p)],a0),A.l,p,A.e,A.h,0,p,p)
return B.bm(!0,B.p(p,B.x(B.a([d,A.af,u,A.aB,v,A.af,i,A.aw,o,B.A(B.a([B.E(B.d(j<=1?"Normal size":"About "+j+" times the normal size",p,p,p,p,p,p,A.hs,p,p,p),1),B.bO(!1,Z.aY2,p,p,!0,p,p,p,new C.bK5(a2),p,B.ft(p,p,k.j(0.25),p,p,p,p,p,p,p,p,A.c,p,p,p,p,p,A.t9,p,p,p,p,p,p,p,p))],a0),A.l,p,A.e,A.h,0,p,p)],a0),A.l,p,A.e,A.N,0,A.p),A.f,p,p,new B.o(p,p,g,h,e,D.cbS,A.n),p,p,p,A.yM,D.bFs,p,p,p),!0,!1,A.ag,!0,!0)},
$S:87}
C.bK8.prototype={
$1(d){var w=this.a
w.m(new C.bK1(this.b,d))
this.c.$1(new C.bK2())
w.a.toString},
$S:6}
C.bK1.prototype={
$0(){return this.a.ch=A.j.D(this.b,1,5.2)},
$S:0}
C.bK2.prototype={
$0(){},
$S:0}
C.bK9.prototype={
$2(d,e){var w=this,v=null,u=Math.abs(w.a.ch-e)<0.05,t=u?w.c.j(0.28):A.c.j(0.06),s=B.l(14),r=u?w.c:A.bx
r=B.K(r,A.r,u?2:1)
return B.E(B.az(v,B.cT(v,B.as(new B.dF(A.dW,A.A,A.f,B.d(d,v,v,v,v,v,v,B.m(v,v,u?w.c:A.ab,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),v,v,v),v,v,A.b0,new B.o(t,v,r,s,v,v,A.n),A.h8,v,v,v,A.jq,A.qG,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.bK6(w.b,e),v,v,v,v,v,v,!1,A.a4),1)},
$S:716}
C.bK6.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bK3.prototype={
$0(){return this.a.$1(this.b.ch-0.4)},
$S:0}
C.bK4.prototype={
$0(){return this.a.$1(this.b.ch+0.4)},
$S:0}
C.bK5.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.bKw.prototype={
$2(d,e){var w
if(d==="short"){G.dz(1800,"",120,0,0.55,"noise")
G.dz(200,"",160,2.2,0.4,"saw")
B.fN()
w=this.a
if(w.c!=null)w.afs("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){G.dz(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.afs("\u26a0 Overloaded! The "+$.qG().h(0,e.b).b+" can only give about "+A.j.ad(w.a.c.Al(e),2)+" amps but your gadgets are asking for "+A.j.ad(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.afs("Burnt out! "+e.ay)
G.dz(140,"",320,0,0.6,"noise")
G.dz(900,"",160,1.5,0.35,"square")}},
$S:z+42}
C.bKx.prototype={
$0(){},
$S:0}
C.bJC.prototype={
$0(){},
$S:0}
C.bKy.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bKv.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.at=n
w=o.a.c
v=o.d
u=o.y
t=o.z
s=o.x
r=this.b
q=x.p
n=B.a([B.az(A.c1,B.b3(p,p,p,new C.ak6(w,v,u,t,s,r==null?A.jw:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bKp(o),new C.bKq(o),new C.bKr(o),p,p,p,p,p,p,p,p,p,p,new C.bKs(o),p,p,p,!1,A.a4)],q)
if(o.a.c.a.length===0)n.push(D.bdJ)
w=o.ay
if(w!=null){v=B.l(14)
u=B.K(A.cN,A.r,1)
n.push(B.ao(p,B.az(p,B.p(p,B.A(B.a([D.fIb,B.E(B.d(w,p,p,p,p,p,p,D.fzL,p,p,p),1)],q),A.E,p,A.e,A.h,0,p,p),A.f,p,p,new B.o(D.bjK,p,u,v,p,p,A.n),p,p,p,p,A.nJ,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bKt(o),p,p,p,p,p,p,!1,A.a4),p,p,10,10,8,p))}if(o.x!=null){o=B.A(B.a([D.bLb,new E.fE(A.D3,"Cut wire",new C.bKu(o),A.bY,p)],q),A.l,p,A.e,A.h,0,p,p)
w=B.l(18)
n.push(B.ao(8,B.p(p,o,A.f,p,p,new B.o(F.YG,p,B.K(A.bx,A.r,1),w,p,p,A.n),p,p,p,p,F.amw,p,p,p),p,p,12,12,p,p))}else{w=o.e
if(w!=null&&A.d.q(o.a.c.a,w)){w=o.e
w.toString
n.push(B.ao(8,o.cmA(w),p,p,10,10,p,p))}}return B.jo(new B.an(A.a0,p,A.b2,A.t,n,p),A.t,p)},
$S:313}
C.bKq.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.baz(s)
if(r!=null){t.m(new C.bKn(t,r,d))
return}w=t.b4b(s)
if(w!=null){t.Q=w
v=w.c
u=t.at
t.as=new B.r(v*u.a,w.d*u.b).aK(0,s)
t.m(new C.bKo(t,w))}},
$S:49}
C.bKn.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c.b},
$S:0}
C.bKo.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bKr.prototype={
$1(d){var w=this.a
if(w.y!=null)w.m(new C.bKl(w,d))
else if(w.Q!=null)w.m(new C.bKm(w,d.b.a5(0,w.as)))},
$S:19}
C.bKl.prototype={
$0(){return this.a.z=this.b.b},
$S:0}
C.bKm.prototype={
$0(){var w,v=this.a,u=v.Q
u.toString
w=this.b
u.c=A.j.D(w.a/v.at.a,0.14,0.86)
u=v.Q
u.toString
u.d=A.j.D(w.b/v.at.b,0.08,0.92)},
$S:0}
C.bKp.prototype={
$1(d){var w,v,u,t=this.a
if(t.y!=null&&t.z!=null){w=t.z
w.toString
v=t.baz(w)
if(v!=null&&v.a!==t.y.a){w=t.a.c
u=t.y
if(w.ame(u.a,u.b,v.a,v.b)!=null)G.dz(1500,"",40,0,0.22,"square")}}t.Q=t.z=t.y=null
t.afq()},
$S:38}
C.bKs.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.b4b(u)
if(t!=null){v.m(new C.bKi(v,t))
if(D.mw.am(0,t.b))v.cxc(t)
w=new B.V(Date.now(),0,!1)
if(v.r===t&&w.bC(v.w).a<38e4){v.m(new C.bKj(v,t))
v.r=null}else{v.r=t
v.w=w}v.a.toString
return}v.m(new C.bKk(v,v.cK5(u)))},
$S:60}
C.bKi.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.x=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
G.dz(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
G.dz(200,"",70,0,0.2,"saw")}},
$S:0}
C.bKj.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.bKk.prototype={
$0(){var w=this.a
w.x=this.b
w.e=w.d=null},
$S:0}
C.bKt.prototype={
$0(){var w=this.a
return w.m(new C.bKh(w))},
$S:0}
C.bKh.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bKu.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.x)
w.x=null
G.dz(300,"",50,0,0.35,"noise")
w.afq()},
$S:0}
C.bJD.prototype={
$0(){return this.a.bsR(this.b)},
$S:0}
C.bJZ.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.A(B.a([B.d(d,w,w,w,w,w,w,D.ftO,w,w,w),B.E(B.l_(this.b.d,w,w,g,h,new C.bK0(this.a,f),A.j.D(e,h,g)),1)],x.p),A.l,w,A.e,A.h,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1929}
C.bK0.prototype={
$1(d){var w=this.a
w.m(new C.bK_(this.b,d))
w.a.toString},
$S:6}
C.bK_.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bJY.prototype={
$2(d,e){var w=null,v=A.c.j(0.06),u=B.l(10)
return B.E(B.p(w,B.x(B.a([B.d(d,w,w,w,w,w,w,A.abM,w,w,w),B.d(e,w,w,w,w,w,w,D.fwB,w,w,w)],x.p),A.l,w,A.e,A.h,0,A.p),A.f,w,w,new B.o(v,w,w,u,w,w,A.n),w,w,w,w,A.wx,w,w,w),1)},
$S:117}
C.bJK.prototype={
$0(){var w=this.a
return w.m(new C.bJJ(w))},
$S:0}
C.bJJ.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.bJL.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.e=w.d=null
G.dz(260,"",70,0,0.35,"noise")
w.afq()},
$S:0}
C.bJM.prototype={
$0(){var w=this.a
return w.m(new C.bJI(w))},
$S:0}
C.bJI.prototype={
$0(){return this.a.e=null},
$S:0}
C.bJQ.prototype={
$0(){this.a.m(new C.bJH(this.b,this.c))
G.dz(900,"",40,0,0.3,"noise")},
$S:0}
C.bJH.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bJR.prototype={
$0(){return this.a.b3v(this.b)},
$S:0}
C.bJS.prototype={
$0(){return this.a.a0L(this.b)},
$S:0}
C.bJT.prototype={
$0(){return this.a.a2o(this.b)},
$S:0}
C.bJU.prototype={
$0(){var w=this.a
w.m(new C.bJG(this.b,this.c))
w.a.toString},
$S:0}
C.bJG.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bJV.prototype={
$0(){var w=this.a
w.m(new C.bJF(this.b,this.c))
w.a.toString},
$S:0}
C.bJF.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bJW.prototype={
$0(){var w=this.a
w.m(new C.bJE(this.b,this.c))
w.a.toString},
$S:0}
C.bJE.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bJX.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJN.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJO.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJP.prototype={
$1(d){return this.a.f=d},
$S:6}
C.ftr.prototype={
$1(d){return d.aIM("bulb")},
$S:z+2}
C.fts.prototype={
$1(d){return d.qe(0,"switch")&&d.aIM("bulb")},
$S:z+2}
C.ftt.prototype={
$1(d){return A.d.aV(d.a,new C.fte())},
$S:z+2}
C.fte.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.ftu.prototype={
$1(d){return d.qe(0,"resistor")&&A.d.aV(d.a,new C.ftd())},
$S:z+2}
C.ftd.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.ftv.prototype={
$1(d){return!d.qe(0,"battery")&&d.aIM("bulb")},
$S:z+2}
C.fti.prototype={
$1(d){return A.d.aV(d.a,new C.ftc())},
$S:z+2}
C.ftc.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.ftj.prototype={
$1(d){return A.d.aV(d.a,new C.ftb())},
$S:z+2}
C.ftb.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.ftk.prototype={
$1(d){return A.d.aV(d.a,new C.fta())},
$S:z+2}
C.fta.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.ftl.prototype={
$1(d){var w=d.a
return A.d.aV(w,new C.ft8())&&A.d.aV(w,new C.ft9())&&d.qe(0,"buck")},
$S:z+2}
C.ft8.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.ft9.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.ftm.prototype={
$1(d){var w=d.a
return A.d.aV(w,new C.ft6())&&A.d.aV(w,new C.ft7())},
$S:z+2}
C.ft6.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.ft7.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.ftn.prototype={
$1(d){return A.d.aV(d.a,new C.ft5())},
$S:z+2}
C.ft5.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.e1p.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a8(0)
w.u(0,v.b)},
$S:0}
C.e1y.prototype={
$1(d){var w=this.a.d
return w.aJa(d)&&w.ru(d)},
$S:z+0}
C.e1z.prototype={
$1(d){return d.x},
$S:z+0}
C.e1A.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.e1B.prototype={
$0(){},
$S:0}
C.e1o.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.l(22),o=x.p,n=B.a([D.fZV,A.aw,D.fK1,A.T],o)
for(w=this.a,v=0;v<19;++v){u=D.Sk[v]
t=A.c.j(0.06)
s=new B.aP(14,14)
r=new B.ay(A.bx,1,A.r,-1)
n.push(B.az(q,B.p(q,B.x(B.a([B.d(u.a,q,q,q,q,q,q,A.iF,q,q,q),A.bE,B.d(u.b,q,3,A.a2,q,q,q,D.fAv,q,q,q)],o),A.E,q,A.e,A.h,0,A.p),A.f,q,q,new B.o(t,q,new B.bF(r,r,r,r),new B.be(s,s,s,s),q,q,A.n),q,q,q,A.cx,A.bj,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.e1n(w,d,u),q,q,q,q,q,q,!1,A.a4))}return B.eG(q,F.mY,new B.D(A.bS,new B.a4(340,q,B.cm(n,q,q,q,q,q,A.ah,!0),q),q),q,q,q,q,q,A.d6,q,new B.b9(p,A.a1),q)},
$S:47}
C.e1n.prototype={
$0(){B.a5(this.b,!1).N(null)
var w=this.a
w.m(new C.e1m(w,this.c))
G.dz(800,"",120,-0.5,0.3,"square")},
$S:0}
C.e1m.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.blw()},
$S:0}
C.e1k.prototype={
$1(d){return new C.WN(this.a.d,null)},
$S:z+44}
C.e1l.prototype={
$0(){},
$S:0}
C.e1x.prototype={
$1(d){return new B.e1(new C.e1w(this.a),null)},
$S:20}
C.e1w.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.ajc(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.q(0,k),f=g?A.bc:A.aG
k=B.aF(d,m,x.l).w
w=l.r
v=x.p
u=B.a([B.A(B.a([D.fX3,A.b1,B.d(""+w.a+" of 11 done",m,m,m,m,m,m,B.m(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.l,m,A.e,A.h,0,m,m),A.P,B.bu(B.l(4),B.kr(A.bx,m,m,5,m,w.a/11,new B.lP(f,x.c)),A.aq),A.af],v)
if(h)u.push(D.fNf)
else{h=f.j(0.1)
t=B.l(14)
s=B.K(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.d(r+" Now: "+i.a,m,m,m,m,m,m,Ae.KX,m,m,m)
q=B.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,K.L6,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.p(m,B.x(B.a([r,A.aw,q,new B.bK(A.a9,m,m,B.bO(!1,B.d(p,m,m,m,m,m,m,B.m(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.e1u(l,e),m,m),m)],v),A.E,m,A.e,A.h,0,A.p),A.f,m,m,new B.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bj,m,m,m))}u.push(A.T)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aP(12,12)
n=new B.ay(o===l.f?f.j(0.6):A.dq,1,A.r,-1)
if(w.q(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
s=B.d(s,m,m,m,m,m,m,A.abW,m,m,m)
r=j[o]
q=w.q(0,o)?A.aE:A.c
u.push(B.az(m,B.p(m,new B.c7(A.aL,A.e,A.h,A.l,m,A.p,m,0,B.a([s,A.as,new B.by(1,A.ba,B.d(r.a,m,m,m,m,m,m,new B.F(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],v),m),A.f,m,m,new B.o(h,m,new B.bF(n,n,n,n),new B.be(t,t,t,t),m,m,A.n),m,m,m,A.eP,A.nJ,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.e1v(l,o,e),m,m,m,m,m,m,!1,A.a4))}return B.bm(!0,new B.cN(new B.aY(0,1/0,0,k.a.b*0.75),B.cm(u,m,m,A0.yV,m,m,A.ah,!0),m),!0,!1,A.ag,!0,!0)},
$S:87}
C.e1u.prototype={
$0(){var w=this.a
w.m(new C.e1s(w))
this.b.$1(new C.e1t())
w.Fz()},
$S:0}
C.e1s.prototype={
$0(){var w=this.a
$.ajc()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.e1t.prototype={
$0(){},
$S:0}
C.e1v.prototype={
$0(){var w=this.a
w.m(new C.e1q(w,this.b))
this.c.$1(new C.e1r())
w.Fz()},
$S:0}
C.e1q.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e1r.prototype={
$0(){},
$S:0}
C.e1D.prototype={
$0(){return B.a5(this.a,!1).hU()},
$S:0}
C.e1E.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.kR("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a5(t.b,!1).ce(B.ed(new C.e1C(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.e1C.prototype={
$1(d){B.l6("construction")
return Al.hWb()},
$S:z+45}
C.e1F.prototype={
$0(){return E.hHB(this.a,"ELECTRONICS LAB",this.b,A.aG)},
$S:0}
C.e1G.prototype={
$0(){var w=this.a
return w.m(w.d.gd0W())},
$S:0}
C.e1H.prototype={
$0(){var w=this.a,v=w.d
w.m(v.gti(v))
w.Fz()},
$S:0}
C.cLM.prototype={
$2(d,e){var w=null,v=this.a.gazi().x
v===$&&B.c()
return B.b3(w,w,w,new C.bbo(v,w),A.az)},
$S:56}
C.cLL.prototype={
$3(d,e,f){var w=new B.aI($.S().r,A.aj,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.E(new B.aZ(v,t))
w.E(new B.cc(v,u,v+e,u))
w.E(new B.cc(v,u,v,u+e))
w.E(new B.cc(v,u,v-e,u))
w.E(new B.cc(v,u,v,t))
w.E(new B.bw())
t=B.L()
t.r=A.c.j(f).gp(0)
this.a.ag(w,t)},
$S:438}
C.h1h.prototype={
$3(d,e,f){return new C.W4(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+46}
C.h1i.prototype={
$4(d,e,f,g){var w=x.a
return new B.d2(e,!1,B.ik(A.A,g,null,new B.bg(B.cG(A.ck,e,null),new B.bq(0.85,1,w),w.k("bg<bP.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
C.dYz.prototype={
$0(){return B.a5(this.a,!1).hU()},
$S:0}
C.dYy.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.l(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c26(o):q.bFd(o,p),m=x.p
p=B.a([B.oB(new B.mr(n,new B.bj(p,x.bz)),A.pt,B.pV(),A.b0,A.b0,new C.dYw())],m)
n=t.d
if(n){w=A.j.F(q.gSK(),12)<4
v=w?150:96
u=B.l(16)
m=B.a([A.as],m)
if(w)m.push(D.bKY)
else m.push(A.b1)
m.push(B.p(s,s,A.f,s,s,new B.o(w?A.bc:A.av,s,s,s,s,s,A.a7),s,9,s,s,s,s,s,9))
m.push(A.as)
p.push(B.ao(s,B.as(B.cT(s,B.A(m,A.l,s,A.e,A.h,0,s,s),s,s,A.ei,new B.o(A.w,s,s,u,s,s,A.n),A.n0,s,28,s,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.AI)p.push(B.ao(s,B.as(B.p(s,s,A.f,s,s,A.Mc,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.EQ)p.push(B.ao(s,B.p(s,s,A.f,s,s,A.Mc,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ao(6,B.az(s,B.as(B.p(s,s,A.f,s,s,new B.o(A.c.j(0.75),s,s,B.l(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dYx(q),s,s,s,s,s,s,!1,A.a4),s,s,0,0,s,s))
return B.bu(r,new B.an(A.a0,s,A.b2,A.t,p,s),A.aq)},
$S:330}
C.dYw.prototype={
$2(d,e){var w=x.a
return new B.d2(e,!1,B.ik(A.A,d,null,new B.bg(e,new B.bq(0.92,1,w),w.k("bg<bP.T>"))),null)},
$S:355}
C.dYx.prototype={
$0(){var w=this.a
return w.m(new C.dYv(w))},
$S:0}
C.dYv.prototype={
$0(){return this.a.e=null},
$S:0}
C.dYu.prototype={
$0(){var w=this.a
return w.m(new C.dYt(w,this.b))},
$S:0}
C.dYt.prototype={
$0(){return this.a.e=A.d.cn(F.jv,this.b)},
$S:0}
C.dYs.prototype={
$0(){var w=this.a
return w.m(new C.dYr(w))},
$S:0}
C.dYr.prototype={
$0(){return this.a.e=0},
$S:0}
C.dYn.prototype={
$0(){var w=this.a
return w.m(new C.dYm(w))},
$S:0}
C.dYm.prototype={
$0(){return this.a.e=null},
$S:0}
C.dYq.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=B.l(o?20:8),m=A.w.j(0.55),l=x.p
m=B.p(p,B.A(B.a([D.h4K,A.as,B.E(B.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eS,p,p,p,A.acf,p,p,p),1),B.d(A.a.b_(A.o.v(B.df(new B.V(Date.now(),0,!1))),2,"0")+":"+A.a.b_(A.o.v(B.fS(new B.V(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.rh,p,p,p)],l),A.l,p,A.e,A.h,0,p,p),A.f,m,p,p,p,24,p,p,A.kz,p,p,p)
w=this.a
v=B.a([B.b3(p,p,p,new C.by4(w.gSK(),this.c.d,p),A.az)],l)
o=w.e
if(o!=null){u=B.l(10)
t=B.K(A.aT,A.r,1)
s=B.l(10)
o=B.p(p,B.A(B.a([B.az(p,B.p(p,p,A.f,p,p,A.afi,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dYp(w),p,p,p,p,p,p,!1,A.a4),A.e6,B.p(p,p,A.f,p,p,A.Y7,p,12,p,p,p,p,p,12),A.e6,B.p(p,p,A.f,p,p,D.b8P,p,12,p,p,p,p,p,12),A.as,B.E(B.d(F.jv[o].a,p,1,A.a2,p,p,p,A.VW,p,p,p),1)],l),A.l,p,A.e,A.h,0,p,p),A.f,A.cu,p,p,p,24,p,p,A.fB,p,p,p)
r=w.e
r.toString
v.push(B.bR(0,new B.D(D.bHr,B.p(p,B.bu(s,B.x(B.a([o,B.E(B.b3(p,p,p,new C.afX(r,w.gSK(),p),A.fS),1)],l),A.l,p,A.e,A.h,0,A.p),A.aq),A.f,p,p,new B.o(A.w,p,t,u,D.dxP,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=B.l(18)
t=B.K(A.aT,A.r,1)
s=B.a([],l)
for(q=0;q<8;++q)s.push(new B.D(A.jq,w.ax9(F.jv[q],34,!1),p))
v.push(B.ao(8,B.as(B.p(p,B.A(s,A.l,p,A.e,A.N,0,p,p),A.f,p,p,new B.o(o,p,t,u,p,p,A.n),p,p,p,p,A.lP,p,p,p),p,p,p),p,p,0,0,p,p))
return B.bu(n,B.p(p,B.x(B.a([m,B.E(new B.an(A.a0,p,A.b2,A.t,v,p),1)],l),A.l,p,A.e,A.h,0,A.p),A.f,X.a_j,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:330}
C.dYp.prototype={
$0(){var w=this.a
return w.m(new C.dYo(w))},
$S:0}
C.dYo.prototype={
$0(){return this.a.e=null},
$S:0}
C.ftW.prototype={
$0(){return D.em6},
$S:z+47}
C.ftX.prototype={
$0(){return D.dUe},
$S:z+48}
C.ftY.prototype={
$0(){return D.dQK},
$S:z+49}
C.ftZ.prototype={
$0(){return D.dTC},
$S:z+50}
C.fu_.prototype={
$0(){return D.dYK},
$S:z+51}
C.fu0.prototype={
$0(){return D.ehT},
$S:z+52}
C.fu1.prototype={
$0(){return D.ek2},
$S:z+53}
C.fu2.prototype={
$0(){return D.dY3},
$S:z+36}
C.cn4.prototype={
$0(){return B.a5(this.a,!1).hU()},
$S:0}
C.cn5.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=(e.b-14)/2,i=x.p,h=B.a([],i)
for(w=$.hLq(),v=j*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aP(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ab(0,A.G,p.j(0.4),A.dp,16)],t)
n=B.d(r.c,k,k,k,k,k,k,Ak.KV,k,k,k)
m=B.d(r.a,k,k,k,k,k,k,D.fFz,k,k,k)
l=A.c.j(0.85)
h.push(B.az(k,B.p(k,new B.an(A.a0,k,A.ac,A.t,B.a([new B.cK(k,-6,-6,k,k,k,n,k),new B.bK(A.lC,k,k,B.x(B.a([m,A.cQ,B.d(r.b,k,k,k,k,k,k,new B.F(!0,l,k,k,k,k,12,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)],i),A.E,k,A.e,A.N,0,A.p),k)],i),k),A.f,k,k,new B.o(k,k,k,new B.be(q,q,q,q),p,new B.a8(A.ay,A.aD,A.x,o,k,k),A.n),k,v,k,k,A.bI,k,k,j),A.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.cn3(d,r),k,k,k,k,k,k,!1,A.a4))}return B.bZ(A.bH,h,A.br,k,14,14)},
$S:161}
C.cn3.prototype={
$0(){return B.a5(this.a,!1).ce(B.ed(new C.cn2(this.b),!1,null,x.H))},
$S:0}
C.cn2.prototype={
$1(d){return this.a.f.$0()},
$S:39}
C.eVo.prototype={
$0(){var w=this.a
return w.w=w.d[w.b7A(w.f)]},
$S:0}
C.eVk.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cR.ai()*7},
$S:0}
C.eVj.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bP(0,A.cf)
w.w=""},
$S:0}
C.eVm.prototype={
$0(){var w=this.a
return w.m(new C.eVl(w,this.b))},
$S:0}
C.eVl.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cG(w,this.b)},
$S:0}
C.eVn.prototype={
$1(d){return this.a.b1T(0)},
$S:2}
C.e4o.prototype={
$0(){return C.JL("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.e4p.prototype={
$0(){},
$S:0}
C.e4j.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.e4l.prototype={
$0(){return this.a.b1V(this.b)},
$S:0}
C.e4m.prototype={
$0(){var w=this.a
return w.m(new C.e4k(w))},
$S:0}
C.e4k.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.e4n.prototype={
$0(){var w=this.a
return w.b1V(w.d)},
$S:0}
C.dPR.prototype={
$2(d,e){return d+e},
$S:82}
C.dPS.prototype={
$0(){},
$S:0}
C.dPM.prototype={
$2(d,e){return d+e},
$S:82}
C.dPP.prototype={
$0(){var w=this.a
return w.m(new C.dPO(w,this.b))},
$S:0}
C.dPO.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dPQ.prototype={
$0(){var w=this.a
return w.m(new C.dPN(w))},
$S:0}
C.dPN.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.e0U.prototype={
$0(){return E.uH(this.b,this.a.d,"drawing")},
$S:0}
C.e0V.prototype={
$1(d){var w=this.a
return w.m(new C.e0T(w,d))},
$S:49}
C.e0T.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aKe(u,v,t))},
$S:0}
C.e0W.prototype={
$1(d){var w=this.a
return w.m(new C.e0S(w,d))},
$S:19}
C.e0S.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
C.e0X.prototype={
$1(d){var w=this.a
return w.m(new C.e0R(w,d))},
$S:23}
C.e0R.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aKe(u,v,t))},
$S:0}
C.e0Y.prototype={
$0(){var w=this.a
return w.m(new C.e0Q(w,this.b))},
$S:0}
C.e0Q.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.e0Z.prototype={
$1(d){var w=this.a
return w.m(new C.e0P(w,d))},
$S:6}
C.e0P.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.e1_.prototype={
$0(){var w=this.a
return w.m(new C.e0O(w))},
$S:0}
C.e0O.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.e10.prototype={
$0(){var w=this.a
return w.m(new C.e0N(w))},
$S:0}
C.e0N.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.e11.prototype={
$0(){var w=this.a
return w.m(A.d.gti(w.e))},
$S:0}
C.e12.prototype={
$0(){var w=this.a
return w.m(new C.e0M(w))},
$S:0}
C.e0M.prototype={
$0(){var w=this.a
w.x=D.aBe[A.o.F(A.d.cn(D.aBe,w.x)+1,4)]},
$S:0}
C.erT.prototype={
$0(){return this.a.f.I(0,this.b)},
$S:0}
C.erU.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.JL("bell",B.a([0,4,7],w),500,0.45)
u.m(new C.erS(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.c()
if(v===u.length)C.JL("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
C.erS.prototype={
$0(){var w=this.a
w.r.u(0,B.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
C.erV.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.erR(w))},
$S:11}
C.erR.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
C.erZ.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return B.az(w,B.lE(new C.erX(v,e),w,A.b0,A.pt,w,w,new B.bq(0,u,x.a),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.erY(v,e),w,w,w,w,w,w,!1,A.a4)},
$S:81}
C.erY.prototype={
$0(){return this.a.cdT(this.b)},
$S:0}
C.erX.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dq(),m=n.a
m.$flags&2&&B.aj(m)
m[11]=0.001
n.fG(3.141592653589793*e)
m=B.l(16)
w=o?p:D.cb3
if(o)v=q.a.r.q(0,q.b)?A.bc.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.K(u.r.q(0,t)?A.bc:A.aT,A.r,1)
if(o){r=B.dq()
r.fG(3.141592653589793)
u=u.e
u===$&&B.c()
r=B.fB(A.A,B.d(u[t],p,p,p,p,p,p,H.ac_,p,p,p),p,r,!0)
u=r}else u=D.fYA
return B.fB(A.A,B.p(A.A,u,A.f,p,p,new B.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:114}
C.es_.prototype={
$0(){var w=this.a
return w.m(new C.erW(w,this.b))},
$S:0}
C.erW.prototype={
$0(){var w=this.a
w.d=this.b.a
w.auu()},
$S:0}
C.es0.prototype={
$0(){var w=this.a
return w.m(w.gbNZ())},
$S:0}
C.eCF.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.eCG.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.eCD.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eCE.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eCC(w))},
$S:11}
C.eCC.prototype={
$0(){return this.a.f=-1},
$S:0}
C.eCH.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.eCI.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.eCJ.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b1U()},
$S:11}
C.eCK.prototype={
$0(){return this.a.cdZ(this.b)},
$S:0}
C.eQH.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:59}
C.eQQ.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.d(d,w,1,A.a2,w,w,w,B.m(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.D(A.kV,B.A(B.a([v,A.ae,new B.di(1,A.cm,new B.dF(A.dW,A.A,A.f,B.d(e,w,w,w,w,w,w,B.m(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w),w)],x.p),A.l,w,A.e,A.h,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1930}
C.eQM.prototype={
$1(d){return this.a.m(new C.eQL())},
$S:2}
C.eQL.prototype={
$0(){},
$S:0}
C.eQN.prototype={
$0(){var w=this.a
return w.m(new C.eQK(w,this.b))},
$S:0}
C.eQK.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eQO.prototype={
$1(d){var w=this.a
return w.m(new C.eQJ(w,d))},
$S:6}
C.eQJ.prototype={
$0(){return this.a.f=A.j.V(this.b)},
$S:0}
C.eQP.prototype={
$0(){var w=this.a
return w.m(new C.eQI(w))},
$S:0}
C.eQI.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eqy.prototype={
$0(){},
$S:0}
C.eqz.prototype={
$0(){},
$S:0}
C.eqr.prototype={
$0(){var w=this.a
return w.m(new C.eqq(w))},
$S:0}
C.eqq.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.c1(u,1,!1,x.S)
w.r=0.9
E.XA("hat",0,0.6)},
$S:0}
C.eqs.prototype={
$0(){var w=this.a
return w.m(new C.eqp(w))},
$S:0}
C.eqp.prototype={
$0(){this.a.y=1.1
E.mv("bell",36,200,0.4)},
$S:0}
C.eqt.prototype={
$0(){var w=this.a
return w.m(new C.eqo(w))},
$S:0}
C.eqo.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aw(Math.max(v,u)-t+1)
w.as=u
E.mv("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.equ.prototype={
$0(){var w=this.a
return w.m(new C.eqn(w,this.b))},
$S:0}
C.eqn.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.eqv.prototype={
$1(d){var w=this.a
return w.m(new C.eqm(w,d))},
$S:6}
C.eqm.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.j.V(this.b),r=J.e4(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.eqw.prototype={
$1(d){var w=this.a
return w.m(new C.eql(w,d))},
$S:6}
C.eql.prototype={
$0(){return this.a.z=A.j.V(this.b)},
$S:0}
C.eqx.prototype={
$1(d){var w=this.a
return w.m(new C.eqk(w,d))},
$S:6}
C.eqk.prototype={
$0(){return this.a.Q=A.j.V(this.b)},
$S:0}
C.cn0.prototype={
$0(){var w=this
return E.mv(w.a,w.b,w.c,w.d)},
$S:1};(function aliases(){var w=C.aOk.prototype
w.bA9=w.t
w=C.aNn.prototype
w.bza=w.t
w=C.aNo.prototype
w.bzb=w.t
w=C.aNs.prototype
w.bzf=w.t
w=C.aP9.prototype
w.bB5=w.t
w=C.aOi.prototype
w.bA7=w.t
w=C.azD.prototype
w.bwb=w.t
w=C.azE.prototype
w.bwc=w.t
w=C.aLP.prototype
w.bxy=w.t
w=C.aND.prototype
w.bzq=w.t
w=C.aNp.prototype
w.bzc=w.t
w=C.aNK.prototype
w.bzy=w.t
w=C.aOc.prototype
w.bA1=w.t
w=C.aOD.prototype
w.bAs=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0,u=a._instance_1u,t=a._instance_1i,s=a._instance_0i,r=a.installInstanceTearOff
w(C.aGk.prototype,"gayF","c9g",1)
v(C,"irl","c6T",3)
var q
u(q=C.aEN.prototype,"gcie","cif",22)
w(q,"gc9Q","b0t",1)
w(C.aEP.prototype,"gcbz","cbA",1)
t(C.aF5.prototype,"gcbG","cbH",39)
w(q=C.aJn.prototype,"gcBL","cBM",1)
w(q,"gcbI","afg",1)
w(q,"gcmK","cmL",1)
w(q,"gcbF","aff",3)
w(q=C.aGj.prototype,"gbL5","aaC",3)
w(q,"gcm_","b41",1)
w(q,"gcpO","ahS",3)
s(q,"gcbK","afh",3)
s(q=C.a5B.prototype,"gti","a8",1)
u(q,"gcZA","ap_",0)
u(q,"gcVY","Mq",0)
w(q,"gd0W","blw",1)
r(C.ak6.prototype,"gcc6",0,5,null,["$5"],["qU"],41,0,0)
w(q=C.aFh.prototype,"gcc7","cc8",1)
w(q,"gcsE","aid",3)
w(q,"gciw","agy",3)
w(q,"gczM","ajn",3)
w(q=C.aGN.prototype,"gcdU","cdV",1)
s(q,"gcdS","b1T",1)
w(C.aG5.prototype,"gbNZ","auu",1)
s(C.aGq.prototype,"gcdW","cdX",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aE,[C.ali,C.GT,C.vq,C.aUm,C.a4s,C.bcv,C.c6U,C.yJ,C.CY,C.nL,C.bdg,C.B7,C.bvx,C.qv,C.rb,C.D1,C.a_B,C.ag3,C.a1P,C.Dc,C.acX,C.add,C.af9,C.GE,C.eh,C.u0,C.abC,C.acJ,C.a5B,C.mY,C.bdh,C.fT,C.mx,C.bwR,C.aKe])
u(B.hq,[C.fLg,C.fzX,C.fHE,C.fHF,C.fLd,C.fLe,C.ejG,C.ejZ,C.ezi,C.eyQ,C.eyR,C.eyS,C.eyT,C.eyU,C.eyV,C.eyW,C.eyX,C.eyO,C.eyP,C.eyN,C.ezd,C.eze,C.ezf,C.dPn,C.dPp,C.dPs,C.dPD,C.c6V,C.c6W,C.ftf,C.ftg,C.fth,C.fto,C.ftp,C.ftq,C.dRp,C.dR6,C.dRq,C.dR1,C.dQX,C.dQZ,C.dR4,C.dRh,C.dRf,C.dRg,C.dRe,C.dRb,C.dRd,C.f93,C.f8L,C.f8S,C.f90,C.f8F,C.drv,C.drw,C.drs,C.drt,C.dru,C.drx,C.dry,C.drz,C.drA,C.drB,C.drC,C.drD,C.drE,C.drF,C.eye,C.eyf,C.eyg,C.eyh,C.eyc,C.eyd,C.eyJ,C.eyl,C.eyn,C.ey7,C.eyF,C.eyD,C.eyE,C.eyC,C.eyB,C.ey9,C.bQc,C.bQn,C.bQi,C.bQo,C.bQq,C.bQd,C.bQb,C.bQv,C.bQj,C.bQm,C.bQl,C.bQk,C.bKz,C.fXc,C.fXf,C.fXd,C.bKf,C.bKa,C.bK8,C.bKy,C.bKq,C.bKr,C.bKp,C.bKs,C.bJZ,C.bK0,C.bJX,C.bJN,C.bJO,C.bJP,C.ftr,C.fts,C.ftt,C.fte,C.ftu,C.ftd,C.ftv,C.fti,C.ftc,C.ftj,C.ftb,C.ftk,C.fta,C.ftl,C.ft8,C.ft9,C.ftm,C.ft6,C.ft7,C.ftn,C.ft5,C.e1y,C.e1z,C.e1o,C.e1k,C.e1x,C.e1C,C.cLL,C.h1h,C.h1i,C.cn2,C.eVn,C.e0V,C.e0W,C.e0X,C.e0Z,C.erX,C.eQH,C.eQQ,C.eQM,C.eQO,C.eqv,C.eqw,C.eqx])
u(B.jz,[C.fLf,C.ejL,C.ejJ,C.eyZ,C.ezb,C.dQY,C.dRk,C.dXD,C.f96,C.f97,C.f8K,C.f8X,C.f8Y,C.f8T,C.f8Z,C.f8E,C.eya,C.eyb,C.eyI,C.eyA,C.eyp,C.bQp,C.bQr,C.bQt,C.bQe,C.bQg,C.bKA,C.cuc,C.fXe,C.bK7,C.bK9,C.bKw,C.bKv,C.bJY,C.e1w,C.cLM,C.dYy,C.dYw,C.dYq,C.cn5,C.dPR,C.dPM,C.erZ])
u(B.af,[C.WN,C.X9,C.VD,C.VK,C.Og,C.aJm,C.X8,C.ak4,C.Wl,C.azi,C.W4,C.XH,C.Wt,C.VE,C.Wk,C.X3,C.Xd,C.Xy,C.X2])
u(B.ah,[C.bmG,C.aOk,C.aNn,C.aNs,C.aF5,C.aP9,C.aOi,C.azD,C.bA2,C.aLP,C.aND,C.aOD,C.aNK,C.aNp,C.bm7,C.aG5,C.aGq,C.bnn,C.aOc])
u(B.iO,[C.ejE,C.ejF,C.ejR,C.ejS,C.ejN,C.ejM,C.ejO,C.ejK,C.ejP,C.ejI,C.ejQ,C.ejH,C.ejV,C.ejU,C.ejW,C.ejT,C.ejX,C.ejY,C.ek_,C.ezh,C.ezj,C.ezk,C.ez0,C.ez_,C.eyY,C.ez6,C.ez7,C.ez3,C.ez8,C.ez2,C.ez9,C.eza,C.ez1,C.ezc,C.ez5,C.ezg,C.ez4,C.dPK,C.dPJ,C.dPk,C.dPl,C.dPm,C.dPL,C.dPo,C.dPq,C.dPr,C.dPt,C.dPh,C.dPi,C.dPj,C.dPA,C.dPB,C.dPC,C.dPz,C.dPE,C.dPy,C.dPF,C.dPx,C.dPG,C.dPw,C.dPH,C.dPv,C.dPI,C.dPu,C.dR3,C.dR2,C.dR7,C.dR_,C.dR0,C.dR8,C.dR9,C.dRa,C.dR5,C.dQW,C.dRj,C.dRi,C.dRl,C.dRm,C.dRn,C.dRc,C.dRo,C.cWo,C.dXB,C.dXA,C.dXC,C.ftG,C.ftH,C.ftI,C.ftJ,C.ftK,C.ftL,C.ftM,C.ftN,C.ftO,C.f95,C.f94,C.f8N,C.f8M,C.f8I,C.f8H,C.f8J,C.f8G,C.f8V,C.f8U,C.f8W,C.f8O,C.f9_,C.f8R,C.f91,C.f8Q,C.f92,C.f8P,C.eyj,C.ey8,C.eyi,C.ey4,C.eyk,C.eym,C.ey5,C.ey6,C.eyH,C.eyG,C.eyx,C.eyy,C.eyz,C.eyt,C.eyu,C.eys,C.eyv,C.eyr,C.eyw,C.eyq,C.eyo,C.drr,C.bQs,C.bQu,C.bQf,C.bQh,C.bKc,C.bKd,C.bKb,C.bKe,C.bKg,C.bK1,C.bK2,C.bK6,C.bK3,C.bK4,C.bK5,C.bKx,C.bJC,C.bKn,C.bKo,C.bKl,C.bKm,C.bKi,C.bKj,C.bKk,C.bKt,C.bKh,C.bKu,C.bJD,C.bK_,C.bJK,C.bJJ,C.bJL,C.bJM,C.bJI,C.bJQ,C.bJH,C.bJR,C.bJS,C.bJT,C.bJU,C.bJG,C.bJV,C.bJF,C.bJW,C.bJE,C.e1p,C.e1A,C.e1B,C.e1n,C.e1m,C.e1l,C.e1u,C.e1s,C.e1t,C.e1v,C.e1q,C.e1r,C.e1D,C.e1E,C.e1F,C.e1G,C.e1H,C.dYz,C.dYx,C.dYv,C.dYu,C.dYt,C.dYs,C.dYr,C.dYn,C.dYm,C.dYp,C.dYo,C.ftW,C.ftX,C.ftY,C.ftZ,C.fu_,C.fu0,C.fu1,C.fu2,C.cn4,C.cn3,C.eVo,C.eVk,C.eVj,C.eVm,C.eVl,C.e4o,C.e4p,C.e4j,C.e4l,C.e4m,C.e4k,C.e4n,C.dPS,C.dPP,C.dPO,C.dPQ,C.dPN,C.e0U,C.e0T,C.e0S,C.e0R,C.e0Y,C.e0Q,C.e0P,C.e1_,C.e0O,C.e10,C.e0N,C.e11,C.e12,C.e0M,C.erT,C.erU,C.erS,C.erV,C.erR,C.erY,C.es_,C.erW,C.es0,C.eCF,C.eCG,C.eCD,C.eCE,C.eCC,C.eCH,C.eCI,C.eCJ,C.eCK,C.eQL,C.eQN,C.eQK,C.eQJ,C.eQP,C.eQI,C.eqy,C.eqz,C.eqr,C.eqq,C.eqs,C.eqp,C.eqt,C.eqo,C.equ,C.eqn,C.eqm,C.eql,C.eqk,C.cn0])
t(C.bAf,C.aOk)
t(C.aGk,C.bAf)
u(B.mo,[C.bjz,C.bdz,C.buV,C.bcd,C.btw,C.bsW,C.bcU,C.bsY,C.bx0,C.bjx,C.ak6,C.bbo,C.by4,C.afX,C.byg,C.bsX,C.bo9])
t(C.aNo,C.aNn)
t(C.aEN,C.aNo)
t(C.bA_,C.aNs)
t(C.aEP,C.bA_)
u(B.l2,[C.Lg,C.a1C,C.Kf])
u(B.aw,[C.btV,C.agf,C.af6,C.Rc,C.buq,C.a9A,C.bfH])
t(C.aJn,C.aP9)
t(C.bjw,B.pf)
t(C.aGj,C.aOi)
t(C.azE,C.azD)
t(C.ak5,C.azE)
t(C.aFh,C.bA2)
t(C.bbp,C.aLP)
t(C.bm5,C.aND)
t(C.bAm,C.aOD)
t(C.aGN,C.bAm)
t(C.bA4,C.aNK)
t(C.bmg,C.bA4)
t(C.bzZ,C.aNp)
t(C.blP,C.bzZ)
t(C.bAd,C.aOc)
t(C.bmS,C.bAd)
w(C.aOk,B.cd)
w(C.bAf,E.nJ)
w(C.aNn,B.cd)
w(C.aNo,E.nJ)
w(C.aNs,B.cd)
w(C.bA_,E.nJ)
w(C.aP9,B.eO)
w(C.aOi,B.cd)
w(C.azD,B.cd)
w(C.azE,E.nJ)
w(C.aLP,B.cd)
v(C.bA2,B.eD)
w(C.aND,B.cd)
w(C.aNp,B.cd)
w(C.bzZ,E.nJ)
w(C.aNK,B.cd)
w(C.bA4,E.nJ)
w(C.aOc,B.cd)
w(C.bAd,E.nJ)
w(C.aOD,B.cd)
w(C.bAm,E.nJ)})()
B.j6(b.typeUniverse,JSON.parse('{"WN":{"af":[],"v":[]},"bmG":{"ah":["WN"]},"X9":{"af":[],"v":[]},"aGk":{"ah":["X9"]},"bjz":{"aC":[]},"VD":{"af":[],"v":[]},"aEN":{"ah":["VD"]},"VK":{"af":[],"v":[]},"aEP":{"ah":["VK"]},"bdz":{"aC":[]},"agf":{"aw":[],"v":[]},"af6":{"aw":[],"v":[]},"aJm":{"af":[],"v":[]},"Og":{"af":[],"v":[]},"aF5":{"ah":["Og"]},"btV":{"aw":[],"v":[]},"Rc":{"aw":[],"v":[]},"buV":{"aC":[]},"buq":{"aw":[],"v":[]},"bcd":{"aC":[]},"aJn":{"ah":["aJm"]},"btw":{"aC":[]},"bsW":{"aC":[]},"bcU":{"aC":[]},"bsY":{"aC":[]},"bx0":{"aC":[]},"X8":{"af":[],"v":[]},"bjw":{"aC":[]},"aGj":{"ah":["X8"]},"bjx":{"aC":[]},"ak6":{"aC":[]},"ak4":{"af":[],"v":[]},"ak5":{"ah":["ak4"]},"Wl":{"af":[],"v":[]},"azi":{"af":[],"v":[]},"aFh":{"ah":["Wl"],"eD":[]},"bbp":{"ah":["azi"]},"bbo":{"aC":[]},"W4":{"af":[],"v":[]},"bm5":{"ah":["W4"]},"by4":{"aC":[]},"afX":{"aC":[]},"a9A":{"aw":[],"v":[]},"XH":{"af":[],"v":[]},"Wt":{"af":[],"v":[]},"VE":{"af":[],"v":[]},"Wk":{"af":[],"v":[]},"X3":{"af":[],"v":[]},"Xd":{"af":[],"v":[]},"Xy":{"af":[],"v":[]},"X2":{"af":[],"v":[]},"aGN":{"ah":["XH"]},"byg":{"aC":[]},"bmg":{"ah":["Wt"]},"bsX":{"aC":[]},"blP":{"ah":["VE"]},"bm7":{"ah":["Wk"]},"bo9":{"aC":[]},"aG5":{"ah":["X3"]},"aGq":{"ah":["Xd"]},"bnn":{"ah":["Xy"]},"bmS":{"ah":["X2"]},"bfH":{"aw":[],"v":[]}}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.at
return{c:w("lP<u?>"),G:w("u"),J:w("bs<n,G>"),Q:w("db<n>"),Z:w("a_"),M:w("O<d7>"),R:w("O<T0>"),h:w("O<a4s>"),V:w("O<ab>"),O:w("O<u>"),C:w("O<V>"),D:w("O<aB<aE>>"),w:w("O<a_>"),E:w("O<ai<n>>"),b:w("O<ai<G>>"),U:w("O<ai<H?>>"),x:w("O<a9<n,aE>>"),g:w("O<r>"),F:w("O<u0>"),v:w("O<fW>"),eZ:w("O<+(n,n)>"),fT:w("O<+(G,v)>"),I:w("O<+(H,n)>"),u:w("O<+(H,H)>"),r:w("O<+(n,n,a_)>"),e:w("O<+(n,G,G,H)>"),o:w("O<+(n,H,n,H)>"),d:w("O<+(n,n,G,G,a9<n,G>)>"),_:w("O<vq>"),fQ:w("O<abC>"),s:w("O<n>"),cF:w("O<au>"),X:w("O<Gd>"),p:w("O<v>"),bL:w("O<acJ>"),fH:w("O<lo>"),a_:w("O<acX>"),cB:w("O<nL>"),ba:w("O<add>"),eW:w("O<D1>"),fY:w("O<a_B>"),ac:w("O<af9>"),cd:w("O<Dc>"),fr:w("O<ag3>"),e4:w("O<a1P>"),au:w("O<aKe>"),f7:w("O<R>"),n:w("O<G>"),t:w("O<H>"),dS:w("O<aC?>"),fs:w("O<u0?>"),bN:w("O<H?>"),q:w("cw<ak5>"),A:w("cw<ah<af>>"),bF:w("ai<u>"),gl:w("ai<V>"),ew:w("ai<aE>"),j:w("ai<@>"),P:w("a9<n,@>"),f:w("a9<@,@>"),bd:w("N<eh,n>"),fR:w("N<+(G,v),v>"),l:w("iw"),gA:w("zS"),gD:w("wq"),k:w("cu"),K:w("aE"),Y:w("u0"),B:w("eh"),N:w("n"),bO:w("au"),a:w("bq<G>"),W:w("bj<n>"),bz:w("bj<H?>"),dg:w("eb<rb>"),m:w("bcv"),a2:w("CY"),f3:w("rb"),es:w("GE"),gV:w("mb"),y:w("R"),i:w("G"),z:w("@"),S:w("H"),L:w("ai<@>?"),cK:w("aE?"),T:w("n?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b3x=new B.d7(0,0.1)
D.b5s=new C.aUm(0,0,0)
D.M6=new C.aUm(0,0.5,0)
D.b62=new B.ay(A.bc,1,A.r,-1)
D.b7B=new B.aY(16,1/0,16,1/0)
D.b7L=new B.aY(0,1/0,0,210)
D.bpo=new B.u(1,0.10588235294117647,0.12549019607843137,0.18823529411764706,A.q)
D.dy1=w([D.bpo,Am.ajy],x.O)
D.eDA=new B.bV(A.Fy,1.1,A.x,null,0,D.dy1,null,null)
D.b7T=new B.o(null,null,null,null,null,D.eDA,A.n)
D.b8P=new B.o(A.bg,null,null,null,null,null,A.a7)
D.ftm=new B.F(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h68=new B.B("\u26a1",null,D.ftm,null,null,null,null,null,null,null,null,null)
D.bdz=new B.cj(A.A,null,null,D.h68,null)
D.aWW=new B.F(!0,A.bV,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWz=new B.B("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aWW,null,A.K,null,null,null,null,null,null,null)
D.evL=new B.D(A.nM,D.fWz,null)
D.bdJ=new B.cj(A.A,null,null,D.evL,null)
D.fMk=new B.B("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aWW,null,A.K,null,null,null,null,null,null,null)
D.ewC=new B.D(A.Hb,D.fMk,null)
D.ber=new B.cj(A.A,null,null,D.ewC,null)
D.agk=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.bid=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.biu=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bjK=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.bjR=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.bkd=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.bm9=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.bna=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.bnT=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.aiG=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.boU=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.aj4=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.ZQ=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.bqO=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.br5=new B.u(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.q)
D.ajC=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.bsO=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.bsW=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.btq=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.wm=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.bvy=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.al4=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.bBk=new B.bd(11e6)
D.bD6=new B.Q(10,34,10,26)
D.bDe=new B.Q(10,6,10,2)
D.bDg=new B.Q(10,8,0,10)
D.bDU=new B.Q(12,8,6,10)
D.bDX=new B.Q(12,8,8,8)
D.bE3=new B.Q(14,0,14,22)
D.bE5=new B.Q(14,0,14,30)
D.bF9=new B.Q(16,4,16,28)
D.bFs=new B.Q(18,10,18,16)
D.bHr=new B.Q(26,12,26,58)
D.bIi=new B.Q(4,4,8,2)
D.bIX=new B.Q(8,14,8,12)
D.bJ3=new B.Q(8,40,8,30)
D.bJ8=new B.Q(8,6,8,8)
D.bJt=new B.Q(0,0,1.5,0)
D.b5e=new B.HS(26,"saturation")
D.bJM=new B.uS(A.cA,D.b5e,null,A.YD)
D.bJN=new B.h6(A.G,11)
D.bJR=new B.h6(A.G,30)
D.fLm=new B.B("REACTION LAB",null,S.aXy,null,null,null,null,A.a2,null,1,null,null)
D.bK_=new B.by(1,A.ba,D.fLm,null)
D.fPt=new B.B("\ud83d\udce2 NGMY Ads",null,A.rh,null,null,null,null,A.eS,null,1,null,null)
D.bKY=new B.by(1,A.ba,D.fPt,null)
D.fK2=new B.B("Wire selected",null,A.h5,null,null,null,null,null,null,null,null,null)
D.bLb=new B.by(1,A.ba,D.fK2,null)
D.aq3=new B.a_(62712,"MaterialIcons",!1)
D.bRn=new B.a_(62908,"MaterialIcons",!1)
D.bT5=new B.a_(983122,"MaterialIcons",!1)
D.bTk=new B.a_(983247,"MaterialIcons",!1)
D.bTS=new B.a_(983616,"MaterialIcons",!1)
D.bT4=new B.a_(983117,"MaterialIcons",!1)
D.bXy=new B.ae(D.bT4,28,A.c,null,null,null)
D.bXP=new B.ae(A.j9,18,null,null,null,null)
D.c__=new B.ae(A.nP,null,A.ab,null,null,null)
D.c_9=new B.ae(A.a44,21,A.ab,null,null,null)
D.c00=new B.ae(A.eL,17,A.ab,null,null,null)
D.c2R=new B.ae(A.j9,21,A.ab,null,null,null)
D.c3n=new B.ae(A.ek,20,A.bY,null,null,null)
D.c4t=new B.ae(A.e9,null,A.aQ,null,null,null)
D.dvF=w([A.dh,A.d8,A.dh],x.O)
D.c7R=new B.a8(A.a5,A.a9,A.x,D.dvF,null,null)
D.d6Q=w([A.bO,A.bh],x.O)
D.c7Z=new B.a8(A.aZ,A.b4,A.x,D.d6Q,null,null)
D.c8c=new B.a8(A.aZ,A.b4,A.x,A.a6K,null,null)
D.atM=new B.a8(A.aZ,A.b4,A.x,P.a5V,null,null)
D.d4o=w([A.pf,A.iH],x.O)
D.c90=new B.a8(A.aZ,A.b4,A.x,D.d4o,null,null)
D.d6z=w([A.cP,A.av],x.O)
D.atT=new B.a8(A.aZ,A.b4,A.x,D.d6z,null,null)
D.dpf=w([A.cZ,A.iN,A.bh],x.O)
D.c9k=new B.a8(A.a5,A.a9,A.x,D.dpf,null,null)
D.dpl=w([A.cz,A.cu],x.O)
D.c9G=new B.a8(A.aZ,A.b4,A.x,D.dpl,null,null)
D.cDh=w([A.bO,A.cZ],x.O)
D.c9Q=new B.a8(A.a5,A.a9,A.x,D.cDh,null,null)
D.aDT=w([A.cP,M.nz],x.O)
D.c9Y=new B.a8(A.aZ,A.b4,A.x,D.aDT,null,null)
D.cae=new B.a8(A.aZ,A.b4,A.x,R.aud,null,null)
D.cb3=new B.a8(A.ay,A.aD,A.x,A.S7,null,null)
D.dgv=w([A.av,A.w],x.O)
D.cbe=new B.a8(A.aZ,A.b4,A.x,D.dgv,null,null)
D.cbh=new B.a8(A.aZ,A.b4,A.x,H.aD9,null,null)
D.btl=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.buc=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cQg=w([A.Ny,D.btl,D.buc],x.O)
D.cbr=new B.a8(A.aZ,A.b4,A.x,D.cQg,null,null)
D.cDA=w([A.d5,A.iK],x.O)
D.cbF=new B.a8(A.aZ,A.b4,A.x,D.cDA,null,null)
D.bwW=new B.u(1,0.07058823529411765,0.0784313725490196,0.10196078431372549,A.q)
D.cEl=w([F.ags,D.bwW],x.O)
D.cbS=new B.a8(A.aZ,A.b4,A.x,D.cEl,null,null)
D.ccr=w([0,4,7],x.t)
D.ccs=w([0,4,7,12],x.t)
D.cct=w([0,4,7,4],x.t)
D.aCR=w([A.h7,A.rP],x.O)
D.aCm=w([A.fI,A.cU],x.O)
D.aAF=w([A.bd,A.dP],x.O)
D.cZ_=w([A.aQ,A.d5],x.O)
D.dqD=w([A.c4,A.lE],x.O)
D.aA5=w([A.cN,A.k1],x.O)
D.d3b=w([A.bP,A.aM],x.O)
D.ccR=w([D.aCR,D.aCm,A.a6_,D.aAF,D.cZ_,A.aAV,A.aBR,D.dqD,D.aA5,D.d3b],B.at("O<ai<u>>"))
D.chy=w([120,220,380],x.t)
D.cli=w([12,16,19,24],x.t)
D.cls=w([1400,800,450,2400],x.t)
D.ctU=w([250,450,900,1500],x.t)
D.bhy=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.btL=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.brv=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.bxu=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.bqB=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.azl=w([D.bhy,D.btL,D.brv,D.bxu,D.bqB],x.O)
D.cL8=w([50,25,75],x.t)
D.cQP=w([0,5,10,15,18,20,25],x.t)
D.cZj=w([900,500,250,1600],x.t)
D.d2t=w([A.bd,A.bD,A.b9,A.bd],x.O)
D.a5P=w([A.aA,A.bt,A.bg,A.aG,A.oq],x.O)
D.d41=w([A.av,A.aA,A.cN,A.bt,A.bg,A.cG,A.ci,A.bD,A.YV],x.O)
D.a5T=w([0.04,0.17,0.3],x.n)
D.fcH=new C.vq("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.fcN=new C.vq("Medium engine","A good all-rounder.",0.3,0.9)
D.fcM=new C.vq("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.IF=w([D.fcH,D.fcN,D.fcM],x._)
D.eJk=new B.y(6,"Easy")
D.eK5=new B.y(8,"Medium")
D.eF4=new B.y(10,"Hard")
D.d5B=w([D.eJk,D.eK5,D.eF4],x.I)
D.aB3=w([0.55,0.78,1],x.n)
D.aBe=w([A.c,A.h_,A.ph,A.av],x.O)
D.aBm=w([A.bg,A.aA,A.bt,A.d8],x.O)
D.fcE=new C.vq("Radar","Shows your height above the ground.",0.1,0)
D.fcF=new C.vq("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.fcC=new C.vq("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aBu=w([D.fcE,D.fcF,D.fcC],x._)
D.dbS=w([47,100,220,470,1000],x.n)
D.JM={volts:0}
D.a7K=new B.bs(D.JM,[3],x.J)
D.Kb=new B.dY(["b","battery",0.2,0.3,D.a7K])
D.epz={on:0}
D.dGI=new B.bs(D.epz,[1],x.J)
D.EO=new B.dY(["s","switch",0.5,0.3,D.dGI])
D.fal=new B.dY(["l","bulb",0.8,0.3,A.jw])
D.d6Z=w([D.Kb,D.EO,D.fal],x.d)
D.EM=new B.ce(["b",0,"s",0])
D.f9l=new B.ce(["s",1,"l",0])
D.aSt=new B.ce(["l",1,"b",1])
D.dpr=w([D.EM,D.f9l,D.aSt],x.o)
D.d6p=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.eEg=new C.mY("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.d6Z,D.dpr,D.d6p)
D.aMh={ohms:0}
D.aJS=new B.bs(D.aMh,[220],x.J)
D.f9O=new B.dY(["r","resistor",0.5,0.3,D.aJS])
D.faA=new B.dY(["d","led",0.8,0.3,A.jw])
D.dsJ=w([D.Kb,D.f9O,D.faA],x.d)
D.f8A=new B.ce(["b",0,"r",0])
D.f9f=new B.ce(["r",1,"d",0])
D.f8H=new B.ce(["d",1,"b",1])
D.dCo=w([D.f8A,D.f9f,D.f8H],x.o)
D.dtc=w(["led","diode","indicator"],x.s)
D.eEn=new C.mY("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dsJ,D.dCo,D.dtc)
D.a94={level:0}
D.dG4=new B.bs(D.a94,[0.2],x.J)
D.f9U=new B.dY(["p","pot",0.5,0.3,D.dG4])
D.f9W=new B.dY(["m","motor",0.8,0.3,A.jw])
D.d7i=w([D.Kb,D.f9U,D.f9W],x.d)
D.f8z=new B.ce(["b",0,"p",0])
D.f9a=new B.ce(["p",1,"m",0])
D.f96=new B.ce(["m",1,"b",1])
D.dxL=w([D.f8z,D.f9a,D.f96],x.o)
D.dp7=w(["fan","motor","spin","dimmer"],x.s)
D.eEe=new C.mY("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.d7i,D.dxL,D.dp7)
D.a7H=new B.bs(D.a94,[0.9],x.J)
D.aSC=new B.dY(["s","solar",0.25,0.3,D.a7H])
D.aSB=new B.dY(["l","bulb",0.75,0.3,A.jw])
D.dab=w([D.aSC,D.aSB],x.d)
D.f9i=new B.ce(["s",0,"l",0])
D.f93=new B.ce(["l",1,"s",1])
D.d87=w([D.f9i,D.f93],x.o)
D.dyw=w(["solar","sun","without battery","no battery","free"],x.s)
D.eEh=new C.mY("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.dab,D.d87,D.dyw)
D.faD=new B.dY(["c","crank",0.25,0.3,D.a7H])
D.dnj=w([D.faD,D.aSB],x.d)
D.f8D=new B.ce(["c",0,"l",0])
D.f92=new B.ce(["l",1,"c",1])
D.dnW=w([D.f8D,D.f92],x.o)
D.dnt=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.eEd=new C.mY("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.dnj,D.dnW,D.dnt)
D.dG3=new B.bs(D.a94,[0.7],x.J)
D.f9Z=new B.dY(["t","turbine",0.25,0.3,D.dG3])
D.f9M=new B.dY(["m","motor",0.75,0.3,A.jw])
D.dhd=w([D.f9Z,D.f9M],x.d)
D.f9t=new B.ce(["t",0,"m",0])
D.f97=new B.ce(["m",1,"t",1])
D.dga=w([D.f9t,D.f97],x.o)
D.dm_=w(["wind","turbine","windmill","water","hydro"],x.s)
D.eEa=new C.mY("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.dhd,D.dga,D.dm_)
D.aJP=new B.bs(D.JM,[9],x.J)
D.aab=new B.dY(["b","battery",0.2,0.3,D.aJP])
D.aSz=new B.dY(["r","radio",0.8,0.3,A.jw])
D.dz7=w([D.aab,D.EO,D.aSz],x.d)
D.f9n=new B.ce(["s",1,"r",0])
D.aSv=new B.ce(["r",1,"b",1])
D.cc7=w([D.EM,D.f9n,D.aSv],x.o)
D.dxw=w(["radio","music","listen"],x.s)
D.eEm=new C.mY("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dz7,D.cc7,D.dxw)
D.dH7=new B.bs(D.JM,[12],x.J)
D.aSy=new B.dY(["b","battery",0.2,0.3,D.dH7])
D.fam=new B.dY(["t","tv",0.8,0.3,A.jw])
D.d70=w([D.aSy,D.EO,D.fam],x.d)
D.f9o=new B.ce(["s",1,"t",0])
D.aSw=new B.ce(["t",1,"b",1])
D.dqG=w([D.EM,D.f9o,D.aSw],x.o)
D.dz5=w(["tv","television","screen","watch"],x.s)
D.eE7=new C.mY("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.d70,D.dqG,D.dz5)
D.fac=new B.dY(["z","buzzer",0.8,0.3,A.jw])
D.cNv=w([D.Kb,D.EO,D.fac],x.d)
D.f9p=new B.ce(["s",1,"z",0])
D.f9H=new B.ce(["z",1,"b",1])
D.d1D=w([D.EM,D.f9p,D.f9H],x.o)
D.dvL=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.eEj=new C.mY("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cNv,D.d1D,D.dvL)
D.f9V=new B.dY(["h","heater",0.8,0.3,A.jw])
D.dkC=w([D.aab,D.EO,D.f9V],x.d)
D.f9k=new B.ce(["s",1,"h",0])
D.f8Q=new B.ce(["h",1,"b",1])
D.d2o=w([D.EM,D.f9k,D.f8Q],x.o)
D.cxa=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.eE8=new C.mY("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.dkC,D.d2o,D.cxa)
D.fao=new B.dY(["s","solar",0.2,0.25,D.a7H])
D.dHb=new B.bs(D.aMh,[100],x.J)
D.far=new B.dY(["r","resistor",0.55,0.25,D.dHb])
D.fay=new B.dY(["c","capacitor",0.85,0.25,A.jw])
D.f9R=new B.dY(["q","resistor",0.55,0.6,D.aJS])
D.fap=new B.dY(["d","led",0.85,0.6,A.jw])
D.dq9=w([D.fao,D.far,D.fay,D.f9R,D.fap],x.d)
D.f9j=new B.ce(["s",0,"r",0])
D.f9e=new B.ce(["r",1,"c",0])
D.f8F=new B.ce(["c",1,"s",1])
D.f8E=new B.ce(["c",0,"q",0])
D.f9d=new B.ce(["q",1,"d",0])
D.f8I=new B.ce(["d",1,"c",1])
D.ddZ=w([D.f9j,D.f9e,D.f8F,D.f8E,D.f9d,D.f8I],x.o)
D.dmB=w(["capacitor","store","charge","flash"],x.s)
D.eEl=new C.mY("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.dq9,D.ddZ,D.dmB)
D.fa1=new B.dY(["b","battery",0.15,0.3,D.a7K])
D.faE=new B.dY(["l1","bulb",0.5,0.3,A.jw])
D.fa9=new B.dY(["l2","bulb",0.85,0.3,A.jw])
D.d50=w([D.fa1,D.faE,D.fa9],x.d)
D.f8y=new B.ce(["b",0,"l1",0])
D.f9_=new B.ce(["l1",1,"l2",0])
D.f90=new B.ce(["l2",1,"b",1])
D.di0=w([D.f8y,D.f9_,D.f90],x.o)
D.dyQ=w(["series","two bulbs","dim"],x.s)
D.eEb=new C.mY("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.d50,D.di0,D.dyQ)
D.epU={volts:0,charge:1}
D.dHe=new B.bs(D.epU,[1.5,0],x.J)
D.faw=new B.dY(["b","battery",0.75,0.3,D.dHe])
D.d4p=w([D.aSC,D.faw],x.d)
D.f9h=new B.ce(["s",0,"b",0])
D.f8C=new B.ce(["b",1,"s",1])
D.dei=w([D.f9h,D.f8C],x.o)
D.dmL=w(["charge","rechargeable","flat","recharge"],x.s)
D.eE9=new C.mY("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.d4p,D.dei,D.dmL)
D.dH6=new B.bs(D.JM,[4.5],x.J)
D.f9X=new B.dY(["b","battery",0.2,0.3,D.dH6])
D.aSx=new B.dY(["p","phone",0.8,0.3,A.jw])
D.dh2=w([D.f9X,D.EO,D.aSx],x.d)
D.f9m=new B.ce(["s",1,"p",0])
D.aaa=new B.ce(["p",1,"b",1])
D.duC=w([D.EM,D.f9m,D.aaa],x.o)
D.dwc=w(["phone","charger","usb","mobile"],x.s)
D.eEf=new C.mY("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.dh2,D.duC,D.dwc)
D.f9J=new B.dY(["f","fan",0.8,0.3,A.jw])
D.cpi=w([D.Kb,D.f9J],x.d)
D.f8x=new B.ce(["b",0,"f",0])
D.f8O=new B.ce(["f",1,"b",1])
D.d2Y=w([D.f8x,D.f8O],x.o)
D.dp6=w(["fan","cool","air","wind"],x.s)
D.eEo=new C.mY("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.cpi,D.d2Y,D.dp6)
D.fag=new B.dY(["b","battery",0.15,0.2,D.a7K])
D.f9K=new B.dY(["a","ammeter",0.5,0.2,A.jw])
D.f9I=new B.dY(["l","bulb",0.85,0.2,A.jw])
D.fai=new B.dY(["v","voltmeter",0.5,0.6,A.jw])
D.dn8=w([D.fag,D.f9K,D.f9I,D.fai],x.d)
D.f8v=new B.ce(["b",0,"a",0])
D.f8u=new B.ce(["a",1,"l",0])
D.f9v=new B.ce(["v",0,"l",0])
D.f9w=new B.ce(["v",1,"l",1])
D.de9=w([D.f8v,D.f8u,D.aSt,D.f9v,D.f9w],x.o)
D.dCn=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.eEk=new C.mY("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.dn8,D.de9,D.dCn)
D.faH=new B.dY(["b","battery",0.15,0.2,D.aJP])
D.fa0=new B.dY(["t","tv",0.55,0.2,A.jw])
D.aJQ=new B.bs(D.JM,[5],x.J)
D.f9P=new B.dY(["c","buck",0.4,0.5,D.aJQ])
D.fa2=new B.dY(["p","phone",0.8,0.5,A.jw])
D.dbE=w([D.faH,D.fa0,D.f9P,D.fa2],x.d)
D.f8B=new B.ce(["b",0,"t",0])
D.aSr=new B.ce(["b",0,"c",0])
D.aSs=new B.ce(["c",1,"p",0])
D.dh_=w([D.f8B,D.aSw,D.aSr,D.aSs,D.aaa],x.o)
D.d9K=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.eEc=new C.mY("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.dbE,D.dh_,D.d9K)
D.f9Q=new B.dY(["c","buck",0.5,0.3,D.aJQ])
D.d2c=w([D.aSy,D.f9Q,D.aSx],x.d)
D.d7t=w([D.aSr,D.aSs,D.aaa],x.o)
D.cAF=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.eE6=new C.mY("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.d2c,D.d7t,D.cAF)
D.fa7=new B.dY(["d","diode",0.5,0.3,A.jw])
D.dif=w([D.aab,D.fa7,D.aSz],x.d)
D.f8w=new B.ce(["b",0,"d",0])
D.f8J=new B.ce(["d",1,"r",0])
D.cQ3=w([D.f8w,D.f8J,D.aSv],x.o)
D.d9p=w(["diode","protect","backwards","one way"],x.s)
D.eEi=new C.mY("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.dif,D.cQ3,D.d9p)
D.Sk=w([D.eEg,D.eEn,D.eEe,D.eEh,D.eEd,D.eEa,D.eEm,D.eE7,D.eEj,D.eE8,D.eEl,D.eEb,D.eE9,D.eEf,D.eEo,D.eEk,D.eEc,D.eE6,D.eEi],B.at("O<mY>"))
D.hID=new C.GT("Moon",1.62,A.cZ,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hIB=new C.GT("Mars",3.71,A.aA,"Mars has about 38 percent of Earth's gravity.")
D.hIE=new C.GT("Mercury",3.7,A.kv,"Mercury is small, so its gravity is like Mars.")
D.hIy=new C.GT("Venus",8.87,A.aQ,"Venus is almost as heavy as Earth, with strong gravity.")
D.hIA=new C.GT("Earth",9.81,A.aG,"On Earth gravity is strong, and the air also slows you down.")
D.hIC=new C.GT("Neptune",11.15,A.d8,"Neptune pulls a little harder than Earth.")
D.hIz=new C.GT("Jupiter",24.79,A.cN,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.tt=w([D.hID,D.hIB,D.hIE,D.hIy,D.hIA,D.hIC,D.hIz],B.at("O<GT>"))
D.ddX=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.deI=w([0.2,0.5,0.8],x.n)
D.b2e=new C.Lg(0,"accordion")
D.d3j=w([A.jN,A.zA,A.D0],x.w)
D.db3=w(["Mail","SMS","Ad"],x.s)
D.d3U=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hGN=new C.B7(D.b2e,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aCR,D.d3j,D.db3,D.d3U)
D.adY=new C.Lg(1,"flip")
D.dmv=w([A.qT,A.Du,A.tn],x.w)
D.dgJ=w(["Unlock","Verify","Secure"],x.s)
D.d27=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hGM=new C.B7(D.adY,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.aCm,D.dmv,D.dgJ,D.d27)
D.b2f=new C.Lg(2,"towers")
D.dft=w([A.zy,A.pC,A.ig],x.w)
D.df0=w(["Save","Grow","Earn"],x.s)
D.cQZ=w(["","",""],x.s)
D.hGO=new C.B7(D.b2f,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a6_,D.dft,D.df0,D.cQZ)
D.adZ=new C.Lg(3,"assemble")
D.dnx=w([A.oN,A.hn,A.e9],x.w)
D.dao=w(["Launch","Charge","Shine"],x.s)
D.djF=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hGQ=new C.B7(D.adZ,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.aAF,D.dnx,D.dao,D.djF)
D.b2g=new C.Lg(4,"carousel")
D.dnk=w([A.b9,A.fm],x.O)
D.dbc=w([A.n6,A.aqr,A.Q5],x.w)
D.d5r=w(["Explore","Discover","Learn"],x.s)
D.dh8=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hGL=new C.B7(D.b2g,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.dnk,D.dbc,D.d5r,D.dh8)
D.b2h=new C.Lg(5,"burst")
D.deW=w([A.hH,A.uo],x.O)
D.d3O=w([A.kb,A.ml,A.hz],x.w)
D.d4a=w(["Cheer","Win","Love"],x.s)
D.d6x=w(["Make some noise","First place","Share the joy"],x.s)
D.hGP=new C.B7(D.b2h,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.deW,D.d3O,D.d4a,D.d6x)
D.aC1=w([D.hGN,D.hGM,D.hGO,D.hGQ,D.hGL,D.hGP],B.at("O<B7>"))
D.f5u=new B.b5("skin","Skin",A.aqs)
D.f79=new B.b5("muscle","Muscles",A.PH)
D.f6O=new B.b5("organ","Organs",A.hz)
D.bR3=new B.a_(62747,"MaterialIcons",!1)
D.f6W=new B.b5("bone","Skeleton",D.bR3)
D.f7h=new B.b5("vessel","Blood vessels",A.pG)
D.dfz=w([D.f5u,D.f79,D.f6O,D.f6W,D.f7h],x.r)
D.fcG=new C.vq("Simple legs","Light. Land gently.",0.15,0.2)
D.fcI=new C.vq("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.fcL=new C.vq("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.DP=w([D.fcG,D.fcI,D.fcL],x._)
D.f87=new B.ce(["beat",0.18,0.28,0])
D.f9q=new B.ce(["burst",0.7,0.2,0])
D.f9B=new B.ce(["delay",0.45,0.5,1])
D.f99=new B.ce(["ripple",0.75,0.6,3])
D.da6=w([D.f87,D.f9q,D.f9B,D.f99],x.e)
D.dlN=w([O.lx,P.Ka,F.UT],x.u)
D.hFJ=new C.GE("First spark","A clock lights a burst and a ripple",D.da6,D.dlN)
D.f8N=new B.ce(["beat",0.15,0.3,1])
D.f7L=new B.ce(["ripple",0.62,0.15,0])
D.f9x=new B.ce(["delay",0.4,0.45,0])
D.f8q=new B.ce(["ripple",0.7,0.45,0])
D.f82=new B.ce(["delay",0.4,0.7,1])
D.f9b=new B.ce(["shake",0.75,0.75,0])
D.dA3=w([D.f8N,D.f7L,D.f9x,D.f8q,D.f82,D.f9b],x.e)
D.eGb=new B.y(2,4)
D.aS8=new B.y(4,5)
D.ddM=w([O.lx,P.Ka,F.UT,D.eGb,D.aS8],x.u)
D.hFL=new C.GE("Heartbeat","Two thumps, then a shake",D.dA3,D.ddM)
D.f8c=new B.ce(["dice",0.15,0.7,1])
D.f9D=new B.ce(["echo",0.4,0.7,0])
D.f8m=new B.ce(["comet",0.7,0.5,4])
D.f9r=new B.ce(["burst",0.72,0.2,1])
D.f8K=new B.ce(["burst",0.3,0.25,0])
D.f8d=new B.ce(["pop",0.55,0.85,0])
D.cwJ=w([D.f8c,D.f9D,D.f8m,D.f9r,D.f8K,D.f8d],x.e)
D.eFw=new B.y(1,3)
D.eFx=new B.y(1,4)
D.aS4=new B.y(0,5)
D.dnf=w([O.lx,Q.vF,D.eFw,D.eFx,D.aS4],x.u)
D.hFK=new C.GE("Fireworks","Dice launch comets that burst in colour",D.cwJ,D.dnf)
D.f8j=new B.ce(["beat",0.15,0.2,2])
D.f8X=new B.ce(["chance",0.4,0.2,0])
D.f89=new B.ce(["ball",0.7,0.12,3])
D.f7W=new B.ce(["chance",0.4,0.5,1])
D.f9C=new B.ce(["ball",0.3,0.08,1])
D.f7P=new B.ce(["ripple",0.7,0.55,3])
D.cpL=w([D.f8j,D.f8X,D.f89,D.f7W,D.f9C,D.f7P],x.e)
D.eGc=new B.y(2,5)
D.cNf=w([O.lx,Q.vF,P.aa2,F.UU,D.eGc],x.u)
D.hFI=new C.GE("Rain","Balls fall at random and splash",D.cpL,D.cNf)
D.f8Y=new B.ce(["beat",0.12,0.45,2])
D.f9s=new B.ce(["toggle",0.38,0.2,0])
D.f9z=new B.ce(["wash",0.7,0.15,4])
D.f8b=new B.ce(["count3",0.38,0.45,0])
D.f9u=new B.ce(["burst",0.72,0.4,0])
D.f8L=new B.ce(["light",0.55,0.7,1])
D.f7X=new B.ce(["pop",0.8,0.8,4])
D.dq7=w([D.f8Y,D.f9s,D.f9z,D.f8b,D.f9u,D.f8L,D.f7X],x.e)
D.eGJ=new B.y(3,6)
D.csU=w([O.lx,Q.vF,P.aa2,F.UU,D.aS4,D.eGJ],x.u)
D.hFG=new C.GE("Disco","A beat drives lights, washes and bursts",D.dq7,D.csU)
D.f9G=new B.ce(["button",0.12,0.2,0])
D.f7R=new B.ce(["delay",0.34,0.2,1])
D.f9F=new B.ce(["light",0.56,0.2,1])
D.f9y=new B.ce(["delay",0.56,0.45,1])
D.f8Z=new B.ce(["ball",0.34,0.6,0])
D.f7V=new B.ce(["delay",0.34,0.8,1])
D.f7K=new B.ce(["burst",0.7,0.8,5])
D.ccU=w([D.f9G,D.f7R,D.f9F,D.f9y,D.f8Z,D.f7V,D.f7K],x.e)
D.eIU=new B.y(5,6)
D.dvV=w([O.lx,Q.vF,F.UT,F.UU,D.aS8,D.eIU],x.u)
D.hFH=new C.GE("Domino","Tap the button and watch it run down the line",D.ccU,D.dvV)
D.aCq=w([D.hFJ,D.hFL,D.hFK,D.hFI,D.hFG,D.hFH],B.at("O<GE>"))
D.dl3=w([0.05,0.15,0.25],x.n)
D.dlZ=w([1.5,3,4.5,9,12],x.n)
D.f3O=new B.b5("dice","Dice",A.nN)
D.f51=new B.b5("coin","Coin",T.zs)
D.f7c=new B.b5("num","Number",A.wX)
D.dmc=w([D.f3O,D.f51,D.f7c],x.r)
D.dmg=w(["skin","muscle","organ","bone","vessel"],x.s)
D.aCw=w([A.bY,A.aQ,A.bc,A.aG,A.bd,A.c4,A.cN,A.fI],x.O)
D.dnl=w([A.c4,A.aG,A.eg,A.bc],x.O)
D.doo=w([],x.h)
D.exp=new C.eh("battery","Battery","\ud83d\udd0b",A.bc,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.exv=new C.eh("solar","Solar panel","\u2600\ufe0f",A.bt,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.ey9=new C.eh("crank","Hand crank","\ud83d\udd04",A.cN,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.exM=new C.eh("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aG,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.exh=new C.eh("buck","Step-down converter","\ud83d\udd3d",A.fI,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.exK=new C.eh("regulator","5 V regulator","\ud83e\uddca",A.bP,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.eye=new C.eh("diode","Diode","\u27a1\ufe0f",A.aQ,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.exW=new C.eh("ldr","Light sensor","\ud83c\udf1e",A.eg,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.exA=new C.eh("switch","Switch","\ud83c\udf9a\ufe0f",A.bd,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.eyb=new C.eh("fuse","Fuse","\ud83e\uddef",A.bY,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.ex9=new C.eh("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.fI,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.exX=new C.eh("resistor","Resistor","\u3030\ufe0f",A.aQ,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.exZ=new C.eh("bulb","Light bulb","\ud83d\udca1",A.eg,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.exx=new C.eh("led","LED","\ud83d\udd34",A.aA,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.exB=new C.eh("motor","Motor","\u2699\ufe0f",A.bP,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.exT=new C.eh("buzzer","Buzzer","\ud83d\udd14",A.c4,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.exq=new C.eh("heater","Heater","\ud83d\udd25",A.cN,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.exO=new C.eh("capacitor","Capacitor","\ud83e\udeab",A.ct,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.exG=new C.eh("radio","Radio","\ud83d\udcfb",A.oq,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.exD=new C.eh("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b9,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.exg=new C.eh("voltmeter","Voltmeter","\ud83e\udded",A.bv,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.exn=new C.eh("ammeter","Ammeter","\ud83d\udcdf",A.aQ,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.ext=new C.eh("fan","Fan","\ud83c\udf00",A.aG,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.eyg=new C.eh("speaker","Speaker","\ud83d\udd0a",A.c4,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.ey5=new C.eh("clock","Digital clock","\u23f0",A.bc,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.exJ=new C.eh("calculator","Calculator","\ud83e\uddee",A.Mz,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.exm=new C.eh("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.ct,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.eyf=new C.eh("router","WiFi router","\ud83d\udcf6",A.fI,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.eyi=new C.eh("siren","Siren","\ud83d\udea8",A.aA,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.exc=new C.eh("toycar","Toy car","\ud83d\ude97",A.cN,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.eyj=new C.eh("kettle","Kettle","\ud83e\uded6",A.mX,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.exk=new C.eh("lamp","Desk lamp","\ud83e\ude94",A.eg,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.exw=new C.eh("lights","Party lights","\ud83c\udf84",A.oq,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.exH=new C.eh("fridge","Fridge","\ud83e\uddca",A.hJ,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.exe=new C.eh("washer","Washing machine","\ud83e\udee7",A.ct,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.ey6=new C.eh("blender","Blender","\ud83e\udd64",A.bY,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.exE=new C.eh("drone","Drone","\ud83d\ude81",A.bP,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.exj=new C.eh("drill","Power drill","\ud83d\udd29",A.aQ,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.exI=new C.eh("torch","Torch","\ud83d\udd26",A.bL,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.ey3=new C.eh("neon","Neon sign","\ud83e\udea7",A.c4,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.exf=new C.eh("microwave","Microwave","\ud83c\udf72",A.cN,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.exY=new C.eh("doorbell","Doorbell","\ud83d\udd14",A.bt,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.exs=new C.eh("camera","Security camera","\ud83d\udcf7",A.an,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.exS=new C.eh("console","Game console","\ud83c\udfae",A.bd,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.ey8=new C.eh("heartmon","Heart monitor","\ud83e\ude7a",A.hu,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.exd=new C.eh("aquarium","Aquarium","\ud83d\udc20",A.b9,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.exN=new C.eh("lighthouse","Lighthouse","\ud83d\uddfc",A.eg,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.exV=new C.eh("discoball","Disco ball","\ud83e\udea9",A.oq,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.eyd=new C.eh("robot","Robot","\ud83e\udd16",A.aG,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.exb=new C.eh("toaster","Toaster","\ud83c\udf5e",A.e0,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.eyh=new C.eh("ledstrip","LED strip","\ud83c\udf08",A.c4,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.ey2=new C.eh("pump","Water pump","\ud83d\udeb0",A.aG,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.exP=new C.eh("hairdryer","Hair dryer","\ud83d\udca8",A.hH,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.ey0=new C.eh("headphones","Headphones","\ud83c\udfa7",A.bd,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.exl=new C.eh("smartwatch","Apple Watch Ultra","\u231a",A.bv,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.eyc=new C.eh("tablet","iPad Pro M5","\ud83d\udcf2",A.ct,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.ex8=new C.eh("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hu,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.exF=new C.eh("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bu,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.exy=new C.eh("appletv","Apple TV 4K","\ud83d\udcfa",A.bO,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.exU=new C.eh("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.uk,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.exa=new C.eh("iphonefold","iPhone Fold","\ud83d\udcf1",A.b7,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.exo=new C.eh("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d8,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.eya=new C.eh("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cG,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.exQ=new C.eh("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bg,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.exL=new C.eh("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.c8,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.ey1=new C.eh("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.aA,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.exz=new C.eh("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.bc,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.exR=new C.eh("honor","Honor Magic V5","\ud83d\udcf1",A.ct,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.ey_=new C.eh("vivo","vivo X300 Pro","\ud83d\udcf1",A.cN,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.ey4=new C.eh("ereader","Kindle Scribe","\ud83d\udcd6",A.bu,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.ex7=new C.eh("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.ci,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.exC=new C.eh("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cG,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.exu=new C.eh("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b9,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.exi=new C.eh("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.eg,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.exr=new C.eh("carscreen","Luxury car touchscreen","\ud83d\ude98",A.aA,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.ey7=new C.eh("vision","Apple Vision Pro","\ud83e\udd7d",A.bd,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.SJ=w([D.exp,D.exv,D.ey9,D.exM,D.exh,D.exK,D.eye,D.exW,D.exA,D.eyb,D.ex9,D.exX,D.exZ,D.exx,D.exB,D.exT,D.exq,D.exO,D.exG,D.exD,D.exg,D.exn,D.ext,D.eyg,D.ey5,D.exJ,D.exm,D.eyf,D.eyi,D.exc,D.eyj,D.exk,D.exw,D.exH,D.exe,D.ey6,D.exE,D.exj,D.exI,D.ey3,D.exf,D.exY,D.exs,D.exS,D.ey8,D.exd,D.exN,D.exV,D.eyd,D.exb,D.eyh,D.ey2,D.exP,D.ey0,D.exl,D.eyc,D.ex8,D.exF,D.exy,D.exU,D.exa,D.exo,D.eya,D.exQ,D.exL,D.ey1,D.exz,D.exR,D.ey_,D.ey4,D.ex7,D.exC,D.exu,D.exi,D.exr,D.ey7],B.at("O<eh>"))
D.dp1=w([5,10,15,25,45,60],x.t)
D.dpp=w([-0.045,0.03,-0.015],x.n)
D.aCZ=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.vk=w([0.05,0.2,0.35],x.n)
D.ba7=new B.ab(0,A.G,A.hK,A.dL,6)
D.ds9=w([D.ba7],x.V)
D.eEH=new B.y(0,"AND")
D.eFy=new B.y(1,"Adder")
D.eGd=new B.y(2,"Blinker")
D.eGK=new B.y(3,"Memory")
D.dsX=w([D.eEH,D.eFy,D.eGd,D.eGK],x.I)
D.aDa=w([-104,0,104],x.n)
D.aDc=w([-14,3],x.n)
D.dtV=w([-8,0,8],x.n)
D.aDl=w([-92,0,92],x.n)
D.duk=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.fcD=new C.vq("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.fcK=new C.vq("Medium tank","Balanced.",0.35,1)
D.fcJ=new C.vq("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.SY=w([D.fcD,D.fcK,D.fcJ],x._)
D.nV=w([0.04,0.2,0.36],x.n)
D.aDx=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.f6N=new B.b5(D.b2e,"Fold",T.arm)
D.f5K=new B.b5(D.adY,"Flip",A.D7)
D.bRk=new B.a_(62889,"MaterialIcons",!1)
D.f78=new B.b5(D.b2f,"Rise",D.bRk)
D.arz=new B.a_(983870,"MaterialIcons",!1)
D.f38=new B.b5(D.adZ,"Assemble",D.arz)
D.f3l=new B.b5(D.b2g,"Spin",D.aq3)
D.f3f=new B.b5(D.b2h,"Pop",A.kb)
D.dvS=w([D.f6N,D.f5K,D.f78,D.f38,D.f3l,D.f3f],B.at("O<+(Lg,n,a_)>"))
D.aDC=w([A.c4,A.eg,A.bv,A.aG,A.bd,A.bY],x.O)
D.dwi=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dxm=w([3,4.5,5,6,9],x.n)
D.baN=new B.ab(0,A.G,A.b6,A.J,16)
D.dxP=w([D.baN],x.V)
D.fUO=new B.B("\ud83e\uddcd",null,Q.L_,null,null,null,null,null,null,null,null,null)
D.cbW=new B.IS(5,null,null,A.bx,A.c4,null,null,null,null)
D.fjF=new B.a4(150,null,D.cbW,null)
D.fBZ=new B.F(!0,A.ab,null,null,null,null,14,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fY7=new B.B("Getting the body ready...",null,D.fBZ,null,null,null,null,null,null,null,null,null)
D.fUR=new B.B("Real 3D anatomy, kept on your phone",null,A8.xx,null,null,null,null,null,null,null,null,null)
D.dxS=w([D.fUO,A.aB,D.fjF,A.af,D.fY7,A.aw,D.fUR],x.p)
D.dyr=w(["solar","turbine","crank","pot"],x.s)
D.dyU=w([0,0.35,0.75,1],x.n)
D.dAi=w(["volts","level","ohms","on"],x.s)
D.dBM=w([A.jN,A.zA,A.D0,A.qT,A.Du,A.tn,A.zy,A.pC,A.ig,A.oN,A.hn,A.e9,A.hz,A.i1,A.ml,A.kY,A.v8,A.qW,A.lp,A.HE,A.v7,A.D6,A.D4,A.Q2,A.HD,A.Di,A.PH,A.aqP,H.arv,A.kb],x.w)
D.enk={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.hy3=new C.yJ("Switch",F.oK,A.bt,0,"Tap it to turn it ON or OFF.")
D.hy_=new C.yJ("Blinker",A.oJ,A.bv,0,"Turns itself ON and OFF. Tap to change the speed.")
D.hy0=new C.yJ("AND",D.arz,A.ct,2,"ON only when BOTH inputs are ON.")
D.bSS=new B.a_(63671,"MaterialIcons",!1)
D.hxZ=new C.yJ("OR",D.bSS,A.bd,2,"ON when EITHER input is ON.")
D.hy1=new C.yJ("XOR",Aa.a3e,A.c4,2,"ON when the inputs are DIFFERENT.")
D.hxW=new C.yJ("NAND",A.uS,A.aG,2,"OFF only when BOTH inputs are ON.")
D.bRW=new B.a_(63176,"MaterialIcons",!1)
D.hxX=new C.yJ("NOR",D.bRW,A.fI,2,"ON only when BOTH inputs are OFF.")
D.hxY=new C.yJ("NOT",Y.Dm,A.cN,1,"Flips the signal: ON becomes OFF.")
D.hy2=new C.yJ("Light",A.ln,A.eg,1,"Glows when its input is ON.")
D.hy4=new C.yJ("Buzzer",A.oM,A.bY,1,"Beeps while its input is ON.")
D.Af=new B.bs(D.enk,[D.hy3,D.hy_,D.hy0,D.hxZ,D.hy1,D.hxW,D.hxX,D.hxY,D.hy2,D.hy4],B.at("bs<n,yJ>"))
D.d2H=w([A.A],x.M)
D.d34=w([A.ay,A.aD],x.M)
D.dcN=w([A.ay,A.A,A.aD],x.M)
D.deo=w([A.ay,A.lB,A.A,A.lC,A.aD],x.M)
D.dsT=w([A.ay,A.lB,A.a5,A.a9,A.lC,A.aD],x.M)
D.dGx=new B.d_([1,D.d2H,2,D.d34,3,D.dcN,4,A.aEb,5,D.deo,6,D.dsT],B.at("d_<H,ai<d7>>"))
D.epS={Calm:0,Box:1,Sleep:2}
D.cKC=w([4,2,6,0],x.n)
D.cKJ=w([4,4,4,4],x.n)
D.cKK=w([4,7,8,0],x.n)
D.Tr=new B.bs(D.epS,[D.cKC,D.cKJ,D.cKK],B.at("bs<n,ai<G>>"))
D.enx={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.xW=new C.a1C(0,"source")
D.ddP=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hEm=new C.qv("Clock",A.oJ,D.xW,A.bv,D.ddP)
D.hEi=new C.qv("Button",A.Dp,D.xW,A.aQ,A.Z)
D.dxy=w(["random","quick","slow"],x.s)
D.hEt=new C.qv("Dice",A.nN,D.xW,A.c4,D.dxy)
D.bSv=new B.a_(63484,"MaterialIcons",!1)
D.Fs=new C.a1C(1,"logic")
D.dCD=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hEp=new C.qv("Delay",D.bSv,D.Fs,A.ct,D.dCD)
D.dp8=w(["fast","mid","slow"],x.s)
D.hEu=new C.qv("Echo",A.ar3,D.Fs,A.bd,D.dp8)
D.hEr=new C.qv("Every 2nd",Y.Dm,D.Fs,A.fI,A.Z)
D.bSb=new B.a_(63309,"MaterialIcons",!1)
D.hEo=new C.qv("Every 3rd",D.bSb,D.Fs,A.aG,A.Z)
D.cce=w(["50%","25%","75%"],x.s)
D.hEw=new C.qv("Chance",Ah.arB,D.Fs,A.cN,D.cce)
D.rp=new C.a1C(2,"out")
D.hEk=new C.qv("Light",A.ln,D.rp,A.eg,A.Z)
D.hEl=new C.qv("Burst",A.kb,D.rp,A.c4,A.Z)
D.hEj=new C.qv("Ripple",A.zF,D.rp,A.b9,A.Z)
D.hEs=new C.qv("Ball",A.are,D.rp,A.cN,A.Z)
D.hEq=new C.qv("Comet",A.oN,D.rp,A.bd,A.Z)
D.bTZ=new B.a_(983669,"MaterialIcons",!1)
D.hEv=new C.qv("Shake",D.bTZ,D.rp,A.bY,A.Z)
D.hEx=new C.qv("Pop",A.D2,D.rp,A.bc,A.Z)
D.hEn=new C.qv("Wash",A.PL,D.rp,A.pm,A.Z)
D.na=new B.bs(D.enx,[D.hEm,D.hEi,D.hEt,D.hEp,D.hEu,D.hEr,D.hEo,D.hEw,D.hEk,D.hEl,D.hEj,D.hEs,D.hEq,D.hEv,D.hEx,D.hEn],B.at("bs<n,qv>"))
D.enL={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.AH=new C.Kf(0,"tv")
D.fec=new C.mx("Samsung Neo QLED 8K",D.AH,F.ym,A.aG)
D.fe3=new C.mx("LG OLED evo G5",D.AH,A.ep,A.hu)
D.fdV=new C.mx("Sony Bravia 9",D.AH,A.rB,A.bu)
D.fdZ=new C.mx("Apple TV 4K",D.AH,A.dY,A.bO)
D.fdW=new C.mx("Bang and Olufsen Beovision",D.AH,F.FZ,F.uk)
D.aam=new C.Kf(1,"iphone")
D.aSY=new C.mx("iPhone 18 Pro Max",D.aam,D.al4,A.ci)
D.EQ=new C.Kf(3,"fold")
D.bxb=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.fe8=new C.mx("iPhone Fold",D.EQ,D.bxb,A.b7)
D.AI=new C.Kf(2,"android")
D.fe9=new C.mx("Samsung Galaxy S26 Ultra",D.AI,F.YI,A.d8)
D.bpH=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.fe1=new C.mx("Samsung Galaxy Z Fold7",D.EQ,D.bpH,A.cG)
D.fdY=new C.mx("Google Pixel 10 Pro XL",D.AI,A.cZ,A.bg)
D.fe5=new C.mx("Xiaomi 16 Ultra",D.AI,A.ic,A.c8)
D.fe0=new C.mx("Huawei Mate 80 Pro Max",D.AI,A.es,A.aA)
D.fdX=new C.mx("OPPO Find X9 Ultra",D.AI,A.eb,A.bc)
D.fee=new C.mx("Honor Magic V5",D.EQ,A.dh,A.ct)
D.fe2=new C.mx("vivo X300 Pro",D.AI,A.h0,A.cN)
D.aSZ=new C.Kf(4,"tablet")
D.fe7=new C.mx("iPad Pro M5",D.aSZ,A.cZ,A.aG)
D.aan=new C.Kf(5,"reader")
D.fef=new C.mx("Kindle Scribe",D.aan,A.cP,A.bu)
D.AJ=new C.Kf(6,"computer")
D.fe6=new C.mx("MacBook Pro M5 Max",D.AJ,A.cZ,A.ci)
D.feb=new C.mx("iMac 32 inch",D.AJ,A.bO,A.cG)
D.fe4=new C.mx("Pro Display XDR 8K",D.AJ,A.ic,A.b9)
D.fe_=new C.mx("Sony Laser Projector",D.AJ,A.cu,A.eg)
D.fea=new C.mx("Luxury car touchscreen",D.AJ,M.nz,A.aA)
D.fed=new C.mx("Apple Vision Pro",D.AJ,A.cz,A.bd)
D.mw=new B.bs(D.enL,[D.fec,D.fe3,D.fdV,D.fdZ,D.fdW,D.aSY,D.fe8,D.fe9,D.fe1,D.fdY,D.fe5,D.fe0,D.fdX,D.fee,D.fe2,D.fe7,D.fef,D.fe6,D.feb,D.fe4,D.fe_,D.fea,D.fed],B.at("bs<n,mx>"))
D.enV={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bzZ=new C.fT(20,4,13,!1)
D.bAp=new C.fT(14,5,13.5,!1)
D.bAg=new C.fT(9,2.4,10,!1)
D.bAu=new C.fT(7,5,12.5,!1)
D.bAj=new C.fT(8,3.5,12,!1)
D.bzV=new C.fT(15,2,6,!1)
D.bAs=new C.fT(45,6,13.5,!0)
D.bAa=new C.fT(10,8,13.5,!1)
D.bA2=new C.fT(25,3,12,!0)
D.bA8=new C.fT(35,4,12,!0)
D.bA9=new C.fT(40,4.5,9.5,!0)
D.bAb=new C.fT(55,3,9,!0)
D.bzW=new C.fT(18,3,9,!1)
D.bAr=new C.fT(22,4,13.5,!1)
D.bAk=new C.fT(16,5,13.5,!1)
D.bA6=new C.fT(30,4,9,!0)
D.bAD=new C.fT(5,3.5,13,!1)
D.bAe=new C.fT(25,3,13.5,!0)
D.bAn=new C.fT(14,2.5,9,!1)
D.bAd=new C.fT(6,6,13,!1)
D.bAv=new C.fT(30,1.2,5,!0)
D.bAC=new C.fT(35,3,4.5,!0)
D.bAy=new C.fT(20,4.5,7.5,!0)
D.bAc=new C.fT(55,5.5,13.5,!0)
D.bzU=new C.fT(45,5.5,13.5,!0)
D.bAo=new C.fT(40,5.5,13.5,!0)
D.bAB=new C.fT(60,6,13.5,!0)
D.alz=new C.fT(28,4,7,!0)
D.GS=new C.fT(25,4,7,!0)
D.bA5=new C.fT(30,4,7,!0)
D.bA0=new C.fT(22,4,7,!0)
D.bA1=new C.fT(24,4,7,!0)
D.bAf=new C.fT(60,3,5.5,!0)
D.bzX=new C.fT(18,9,14,!0)
D.bA3=new C.fT(25,9,14,!0)
D.alA=new C.fT(30,8,14,!0)
D.bA_=new C.fT(20,8,14,!0)
D.bA7=new C.fT(30,9,14,!0)
D.bAw=new C.fT(22,5,9.5,!0)
D.bzY=new C.fT(30,2.5,10.5,!0)
D.bAl=new C.fT(50,5.5,13.5,!0)
D.bAA=new C.fT(12,2,9.5,!1)
D.bAi=new C.fT(16,1.3,9.5,!0)
D.bAt=new C.fT(40,2.5,7,!0)
D.bAz=new C.fT(60,1.2,4.8,!0)
D.bAx=new C.fT(18,5,13.5,!0)
D.bAq=new C.fT(8,2,9.5,!1)
D.bAh=new C.fT(12,2.5,8,!1)
D.bA4=new C.fT(20,3.5,13.5,!0)
D.bAm=new C.fT(3.5,3,13,!1)
D.Ag=new B.bs(D.enV,[D.bzZ,D.bAp,D.bAg,D.bAu,D.bAj,D.bzV,D.bAs,D.bAa,D.bA2,D.bA8,D.bA9,D.bAb,D.bzW,D.bAr,D.bAk,D.bA6,D.bAD,D.bAe,D.bAn,D.bAd,D.bAv,D.bAC,D.bAy,D.bAc,D.bzU,D.bAo,D.bAB,D.alz,D.GS,D.bA5,D.GS,D.bA0,D.GS,D.bA1,D.alz,D.GS,D.bAf,D.bzX,D.bA3,D.alA,D.bA_,D.bA7,D.bAw,D.bzY,D.bAl,D.bAA,D.bAi,D.bAt,D.bAz,D.GS,D.alA,D.bAx,D.bAq,D.bAh,D.bA4,D.bAm],B.at("bs<n,fT>"))
D.enu={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.f2E=new B.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eIR=new B.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eIM=new B.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eV6=new B.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eW2=new B.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eV2=new B.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eGT=new B.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.eSZ=new B.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.f2M=new B.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eWo=new B.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eMa=new B.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eGx=new B.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eLd=new B.y("Movement","They pull your legs together and help you balance.")
D.eN6=new B.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eJ_=new B.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.f07=new B.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.f1h=new B.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.eSK=new B.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.f10=new B.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eRk=new B.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eWw=new B.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eGE=new B.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eNt=new B.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eWb=new B.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.eRG=new B.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.f18=new B.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eUx=new B.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eGR=new B.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eX6=new B.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.f_L=new B.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eYS=new B.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eET=new B.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eUf=new B.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eUj=new B.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.eOc=new B.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eJd=new B.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.eMV=new B.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.eT9=new B.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eZH=new B.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.f2J=new B.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eWt=new B.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.eEB=new B.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.eTl=new B.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.eFr=new B.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eZX=new B.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.f03=new B.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.eTN=new B.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.f_b=new B.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eGG=new B.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.f0F=new B.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eKA=new B.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eZk=new B.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eNS=new B.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eRA=new B.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eWN=new B.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.f0P=new B.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.f0H=new B.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.f0L=new B.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.eS7=new B.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eXF=new B.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eYP=new B.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.f0r=new B.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.eTM=new B.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.ePV=new B.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eOD=new B.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eUa=new B.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eWG=new B.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.eQr=new B.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eR7=new B.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eKY=new B.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.f0_=new B.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eLM=new B.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.eFo=new B.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.eOb=new B.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.eFj=new B.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eJF=new B.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.eOg=new B.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eLV=new B.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eX2=new B.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eN9=new B.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.f2r=new B.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eON=new B.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.eS0=new B.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eUF=new B.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eM2=new B.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eLO=new B.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dHE=new B.bs(D.enu,[D.f2E,D.eIR,D.eIM,D.eV6,D.eW2,D.eV2,D.eGT,D.eSZ,D.f2M,D.eWo,D.eMa,D.eGx,D.eLd,D.eN6,D.eJ_,D.f07,D.f1h,D.eSK,D.f10,D.eRk,D.eWw,D.eGE,D.eNt,D.eWb,D.eRG,D.f18,D.eUx,D.eGR,D.eX6,D.f_L,D.eYS,D.eET,D.eUf,D.eUj,D.eOc,D.eJd,D.eMV,D.eT9,D.eZH,D.f2J,D.eWt,D.eEB,D.eTl,D.eFr,D.eZX,D.f03,D.eTN,D.f_b,D.eGG,D.f0F,D.eKA,D.eZk,D.eNS,D.eRA,D.eWN,D.f0P,D.f0H,D.f0L,D.eS7,D.eXF,D.eYP,D.f0r,D.eTM,D.ePV,D.eOD,D.eUa,D.eWG,D.eQr,D.eR7,D.eKY,D.f0_,D.eLM,D.eFo,D.eOb,D.eFj,D.eJF,D.eOg,D.eLV,D.eX2,D.eN9,D.f2r,D.eON,D.eS0,D.eUF,D.eM2,D.eLO],B.at("bs<n,+(n,n)>"))
D.dQx=new C.VD(null)
D.dQK=new C.VE(null)
D.dSO=new C.VK(null)
D.dTC=new C.Wk(null)
D.dTG=new C.Wl(null)
D.dUe=new C.Wt(null)
D.dY3=new C.X2(null)
D.dYK=new C.X3(null)
D.e1X=new C.X8(null)
D.ehQ=new C.X9(null)
D.ehT=new C.Xd(null)
D.ek2=new C.Xy(null)
D.ek3=new C.a9A(null)
D.em6=new C.XH(null)
D.eq4=new B.r(0,118)
D.aMn=new B.r(0,13)
D.eq5=new B.r(0,17)
D.eq8=new B.r(0,330)
D.eqe=new B.r(0,-13)
D.eqf=new B.r(0,-17)
D.eqg=new B.r(0,-18)
D.eqh=new B.r(0,-19)
D.eqj=new B.r(0,-28)
D.eql=new B.r(0,-31)
D.eqm=new B.r(0,-32)
D.eqs=new B.r(-9.5,-11)
D.eqv=new B.r(10,20)
D.eqy=new B.r(10,-13)
D.eqA=new B.r(10,-22)
D.eqB=new B.r(10,-4)
D.eqF=new B.r(11,0)
D.a9a=new B.r(11,8)
D.eqL=new B.r(12,2)
D.eqM=new B.r(14,0)
D.eqN=new B.r(14,12)
D.aMz=new B.r(14,8)
D.eqO=new B.r(14,-17)
D.aMB=new B.r(14,-3)
D.aMC=new B.r(14,-4)
D.eqR=new B.r(15,0)
D.eqS=new B.r(15,-12)
D.eqV=new B.r(16,-8)
D.eqW=new B.r(18,14)
D.eqX=new B.r(18,-12)
D.aMI=new B.r(20,0)
D.er4=new B.r(20,15)
D.er5=new B.r(20,-17)
D.er6=new B.r(20,-3)
D.er7=new B.r(21,8)
D.erb=new B.r(22,10)
D.aMK=new B.r(22,8)
D.erc=new B.r(24,0)
D.erd=new B.r(24,2)
D.erg=new B.r(24,-18)
D.erh=new B.r(24,-22)
D.erl=new B.r(25,8)
D.erm=new B.r(26,0)
D.erq=new B.r(28,-30)
D.erx=new B.r(30,18)
D.ery=new B.r(30,2)
D.erB=new B.r(31,19)
D.erD=new B.r(32,0)
D.aMO=new B.r(34,0)
D.aMP=new B.r(34,-32)
D.JQ=new B.r(36,0)
D.erQ=new B.r(3,-1)
D.erT=new B.r(40,3)
D.es6=new B.r(4,11)
D.es9=new B.r(4,-2)
D.esd=new B.r(5,0)
D.ese=new B.r(5,17)
D.esf=new B.r(5,6)
D.esk=new B.r(6,11)
D.esr=new B.r(8,7)
D.ess=new B.r(8,-10)
D.est=new B.r(8,-14)
D.aMU=new B.r(9,0)
D.esD=new B.r(-20.5,-17.6)
D.esE=new B.r(-9,18.5)
D.esH=new B.r(-2.6,-1)
D.esQ=new B.r(2.6,1)
D.esY=new B.r(-9,12.2)
D.eth=new B.r(-9,20.5)
D.etC=new B.r(-10,0)
D.etD=new B.r(-10,12)
D.aN0=new B.r(-10,4)
D.etH=new B.r(-11,0)
D.etK=new B.r(-11,-2)
D.etO=new B.r(-13,-5)
D.etP=new B.r(-14,0)
D.etQ=new B.r(-14,13)
D.etR=new B.r(-14,2)
D.etS=new B.r(-14,-12)
D.etT=new B.r(-14,-19)
D.etV=new B.r(-14,-23)
D.etW=new B.r(-15,6)
D.etZ=new B.r(-16,14)
D.eu0=new B.r(-16,-8)
D.eu1=new B.r(-17,10)
D.eu2=new B.r(-17,-18)
D.eu3=new B.r(-17,-8)
D.eu5=new B.r(-18,20)
D.eu6=new B.r(-18,-9)
D.aN2=new B.r(-20,0)
D.eu8=new B.r(-20,16)
D.eu9=new B.r(-20,-9)
D.Un=new B.r(-22,8)
D.eua=new B.r(-22,-10)
D.eub=new B.r(-22,-11)
D.euc=new B.r(-24,10)
D.eud=new B.r(-24,11)
D.eue=new B.r(-24,14)
D.euf=new B.r(-24,-22)
D.euh=new B.r(-25,-11)
D.eui=new B.r(-26,0)
D.euj=new B.r(-26,-18)
D.euk=new B.r(-2,9)
D.eul=new B.r(-2,-10)
D.eum=new B.r(-2,-20)
D.eup=new B.r(-2,-9)
D.eur=new B.r(-32,0)
D.aN4=new B.r(-34,0)
D.euw=new B.r(-40,3)
D.euy=new B.r(-4,11)
D.euz=new B.r(-4,-17)
D.euA=new B.r(-4,-2)
D.euE=new B.r(-5,0)
D.euF=new B.r(-5,20)
D.euG=new B.r(-5,6)
D.euH=new B.r(-6,26)
D.euI=new B.r(-6,6)
D.euJ=new B.r(-6,-42)
D.euL=new B.r(-7,-19)
D.euM=new B.r(-7,-24)
D.euP=new B.r(-8,-9)
D.a9j=new B.r(-9,0)
D.euQ=new B.r(-9,1)
D.euS=new B.r(-9,-23)
D.fM1=new B.B("Thinking\u2026",null,A.hs,null,null,null,null,null,null,null,null,null)
D.evS=new B.D(A.jL,D.fM1,null)
D.h1U=new B.B("Start from a ready-made board",null,A.fD,null,null,null,null,null,null,null,null,null)
D.ew4=new B.D(A2.wA,D.h1U,null)
D.bI4=new B.Q(4,0,4,14)
D.fHa=new B.F(!0,A.aE,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fN1=new B.B("Games and little helpers for a spare minute.",null,D.fHa,null,null,null,null,null,null,null,null,null)
D.ewg=new B.D(D.bI4,D.fN1,null)
D.dpK=w([A.hY,A.bh],x.O)
D.aRX=new B.bV(A.A,0.5,A.x,null,0,D.dpK,null,null)
D.eDs=new B.bV(A.A,0.5,A.x,null,0,D.aDT,null,null)
D.dgg=w([A.c,A.bP],x.O)
D.eDu=new B.bV(A.A,0.5,A.x,null,0,D.dgg,null,null)
D.dyH=w([A.bO,A.cz],x.O)
D.aRY=new B.bV(A.A,0.5,A.x,null,0,D.dyH,null,null)
D.cUD=w([A.c,A.bO],x.O)
D.eDz=new B.bV(A.nl,0.5,A.x,null,0,D.cUD,null,null)
D.bxf=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.dwC=w([A.fy,D.bxf],x.O)
D.eDE=new B.bV(A.nl,0.5,A.x,null,0,D.dwC,null,null)
D.cNM=w([A.cZ,A.cu],x.O)
D.eDF=new B.bV(A.A,0.5,A.x,null,0,D.cNM,null,null)
D.d1B=w([A.h_,A.aQ,A.d5],x.O)
D.eDI=new B.bV(A.nl,0.5,A.x,null,0,D.d1B,null,null)
D.dqr=w([A.cz,M.nz],x.O)
D.eDJ=new B.bV(A.nl,0.5,A.x,null,0,D.dqr,null,null)
D.eDN=new B.bV(A.A,0.5,A.x,null,0,D.aA5,null,null)
D.dzz=w([A.cz,A.i8],x.O)
D.eDV=new B.bV(A.A,0.5,A.x,null,0,D.dzz,null,null)
D.aS2=new B.aP(9,9)
D.eE2=new B.aP(1.4,1.4)
D.faL=new B.a6(10,-8,18,-2)
D.faM=new B.a6(14,-14,20,14)
D.faO=new B.a6(20,-2,30,2)
D.faT=new B.a6(4,-13,30,-3)
D.faZ=new B.a6(8,-7,12,7)
D.fba=new B.a6(-12,12,12,19)
D.fbb=new B.a6(-12,14,12,22)
D.fbc=new B.a6(-12,-22,12,8)
D.fbd=new B.a6(-12,-25,12,19)
D.fbe=new B.a6(-12,-26,12,-6)
D.fbf=new B.a6(-12,-4,12,14)
D.fbh=new B.a6(-14,20,14,24)
D.fbi=new B.a6(-14,6,14,10)
D.fbj=new B.a6(-14,-17,14,15)
D.fbk=new B.a6(-14,-26,14,18)
D.fbl=new B.a6(-14,-4,14,20)
D.fbn=new B.a6(-15,-29,15,25)
D.fbo=new B.a6(-16,-16,16,16)
D.fbr=new B.a6(-16,-22,-9,18)
D.fbs=new B.a6(-16,-24,16,-10)
D.fbu=new B.a6(-16,-2,16,20)
D.fbw=new B.a6(-18,20,18,24)
D.fbx=new B.a6(-18,-18,18,20)
D.fby=new B.a6(-20,12,20,22)
D.fbz=new B.a6(-20,-28,20,26)
D.fbA=new B.a6(-22,14,22,18)
D.aSF=new B.a6(-22,-26,22,24)
D.fbB=new B.a6(-22,-3,22,3)
D.fbC=new B.a6(-22,-4,22,12)
D.fbE=new B.a6(-24,-12,10,22)
D.fbF=new B.a6(-24,-14,22,8)
D.fbG=new B.a6(-24,-6,24,20)
D.aSG=new B.a6(-24,-9,24,9)
D.fbH=new B.a6(-25,14,25,19)
D.fbI=new B.a6(-26,-14,14,8)
D.fbJ=new B.a6(-26,-4,26,20)
D.fbK=new B.a6(-26,-6,4,6)
D.aSH=new B.a6(-28,-13,28,13)
D.fbL=new B.a6(-28,-16,28,16)
D.fbM=new B.a6(-28,-16,28,8)
D.fbN=new B.a6(-28,-22,28,22)
D.fbO=new B.a6(-30,-12,30,14)
D.fbP=new B.a6(-30,-14,0,14)
D.fbQ=new B.a6(-30,-18,30,20)
D.fbR=new B.a6(-30,-28,30,14)
D.fbS=new B.a6(-30,-2,30,18)
D.fbT=new B.a6(-30,-4,30,18)
D.fbU=new B.a6(-32,-17,32,17)
D.fbV=new B.a6(-32,-28,32,18)
D.fbW=new B.a6(-33,-21,33,17)
D.fbX=new B.a6(-34,14,34,26)
D.aad=new B.a6(-34,-18,34,18)
D.fbY=new B.a6(-34,-4,34,7)
D.fbZ=new B.a6(-36,-24,36,20)
D.fc_=new B.a6(-38,-22,38,22)
D.fc1=new B.a6(-3,12,3,22)
D.fc2=new B.a6(-3,5,3,15)
D.fc6=new B.a6(-46,-34,46,28)
D.fc8=new B.a6(-48,-3,48,3)
D.fcb=new B.a6(-6,18,24,24)
D.fcc=new B.a6(-6,5,6,12)
D.fcd=new B.a6(-6,-22,6,-15)
D.fch=new B.a6(-9,-16,9,22)
D.fci=new B.a6(-4.5,-24,4.5,-21.2)
D.fck=new B.a6(14,-9,17.5,9)
D.epf={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aTN=new B.db(D.epf,5,x.Q)
D.eoK={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.ffV=new B.db(D.eoK,10,x.Q)
D.fif=new B.av(24,44)
D.fiD=new B.av(54,38)
D.fiJ=new B.av(66,38)
D.bfr=new B.fl(2,null,null,null,null,A.bd,null,null,null,null)
D.fjN=new B.a4(16,16,D.bfr,null)
D.aUQ=new B.hJ(3,12,12,0.82,null)
D.fwE=new B.F(!0,A.wd,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fr6=new B.eq("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cL,null,null,null,null,null,null,D.fwE)
D.fBN=new B.F(!0,A.kM,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frc=new B.eq("AI",null,null,A.cL,null,null,null,null,null,null,D.fBN)
D.fru=new B.F(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs0=new B.F(!0,A.bp,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsq=new B.F(!0,A.ct,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsY=new B.F(!0,A.bV,null,null,null,null,11,A.O,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fti=new B.F(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftO=new B.F(!0,A.aR,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgE=new B.cU(A.hK,A.dL,6)
D.djn=w([D.fgE],B.at("O<cU>"))
D.fuM=new B.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.djn,null,null,null)
D.fuR=new B.F(!0,A.ex,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuW=new B.F(!0,A.bV,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvx=new B.F(!0,A.bV,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvF=new B.F(!0,A.aE,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwB=new B.F(!0,A.bV,null,null,null,null,9.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwI=new B.F(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxf=new B.F(!0,A.aE,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxM=new B.F(!0,A.aQ,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxP=new B.F(!0,A.c,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.aEe,null,null,null)
D.fxV=new B.F(!0,A.c,null,null,null,null,12.5,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyD=new B.F(!0,A.bB,null,null,null,null,10.5,A.u,null,0.5,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzL=new B.F(!0,A.uw,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAm=new B.F(!0,A.bL,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAv=new B.F(!0,A.aE,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBi=new B.F(!0,A.mZ,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBt=new B.F(!0,A.cz,null,null,null,null,9.5,null,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aX1=new B.F(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCF=new B.F(!0,A.iK,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCZ=new B.F(!0,A.bV,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDw=new B.F(!0,A.bc,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF2=new B.F(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFz=new B.F(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFQ=new B.F(!0,A.aQ,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGd=new B.F(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGg=new B.F(!0,A.aQ,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHq=new B.F(!0,A.uw,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHN=new B.F(!0,A.bc,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuZ=new B.F(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIb=new B.B("\u26a0\ufe0f ",null,D.fuZ,null,null,null,null,null,null,null,null,null)
D.fIo=new B.B("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.B1,null,null,null,null,null,null,null,null,null)
D.fK1=new B.B("Pick one, then change it and see what happens.",null,A.B1,null,null,null,null,null,null,null,null,null)
D.fw8=new B.F(!0,A.ab,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fL1=new B.B("What do you want to invent? Type it below, or tap an idea.",null,D.fw8,null,null,null,null,null,null,null,null,null)
D.fAh=new B.F(!0,A.bY,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLw=new B.B("Burnt out! Press Repair.",null,D.fAh,null,null,null,null,null,null,null,null,null)
D.fMD=new B.B("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fNf=new B.B("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.h5,null,null,null,null,null,null,null,null,null)
D.fNT=new B.B("Make it yours",null,A.jR,null,null,null,null,null,null,null,null,null)
D.fR5=new B.B("5G",null,X.aWm,null,null,null,null,null,null,null,null,null)
D.fS5=new B.B("Pick how big the screen is on the board",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fDg=new B.F(!0,A.bV,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSh=new B.B("WHAT HAPPENS",null,D.fDg,null,null,null,null,null,null,null,null,null)
D.fU2=new B.B("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fUI=new B.B("Change the words and pictures on the three slabs.",null,A.B1,null,null,null,null,null,null,null,null,null)
D.fUV=new B.B("All the parts and wires will be removed.",null,A.hr,null,null,null,null,null,null,null,null,null)
D.fVf=new B.B("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fVP=new B.B("Tap the crank on the board again and again to spin it faster.",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fX3=new B.B("\ud83c\udfaf Challenges",null,A.dk,null,null,null,null,null,null,null,null,null)
D.fXA=new B.B("Remove this part",null,W.aVY,null,null,null,null,null,null,null,null,null)
D.fXU=new B.B("Clear the board?",null,A.dj,null,null,null,null,null,null,null,null,null)
D.fCG=new B.F(!0,A.bv,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYb=new B.B("How the Lab works",null,D.fCG,null,null,null,null,null,null,null,null,null)
D.ftv=new B.F(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYw=new B.B("Electronics Lab",null,D.ftv,null,null,null,null,A.a2,null,1,null,null)
D.fYA=new B.B("?",null,P.aXx,null,null,null,null,null,null,null,null,null)
D.fZV=new B.B("Ready-made circuits",null,A.dk,null,null,null,null,null,null,null,null,null)
D.h_y=new B.B("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fFV=new B.F(!0,A.aQ,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h32=new B.B("\u26a0 There is no air here, so a parachute will not work.",null,D.fFV,null,null,null,null,null,null,null,null,null)
D.h4e=new B.B("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,W.aVW,null,null,null,null,null,null,null,null,null)
D.h4K=new B.B("NGMY",null,A.vN,null,null,null,null,null,null,null,null,null)
D.h4X=new B.B("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.W8,null,null,null,null,null,null,null,null,null)
D.h5l=new B.B("Tap it to change its setting. Drag from the right dot to connect.",null,A.lX,null,null,null,null,null,null,null,null,null)
D.h6p=new B.B("TOOLBOX",null,A7.abB,null,null,null,null,null,null,null,null,null)
D.huS=new B.bj("electronics-part-card",x.W)
D.hvt=new B.bj("electronics-part-about",x.W)
D.hvA=new B.bj("body-loading",x.W)
D.hw0=new B.bj("core-protocol-back",x.W)
D.hw5=new B.bj("core-protocol-title-frame",x.W)})();(function staticFields(){$.hvJ=null
$.hvF=null
$.hvG=null
$.hC3=0
$.i4v=B.T(x.N,B.at("iM"))
$.i53=B.T(x.N,B.at("iM"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iC0","bH7",()=>{var v="led"
return B.a([C.aAc("Both together","Make the light glow only when BOTH switches are ON.",2,new C.ftf(),v),C.aAc("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.ftg(),v),C.aAc("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fth(),v),C.aAc("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fto(),v),C.aAc("Not both","Make the light go OFF only when both switches are ON.",2,new C.ftp(),v),C.aAc("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.ftq(),"buzzer")],B.at("O<bdg>"))})
w($,"iCs","bH8",()=>B.a([C.Rj("UNIVERSE","Earth, space and gravity",A.Q5,A.aG,new C.ftG()),C.Rj("ELECTRONICS LAB","Batteries, wires, real circuits",Af.uV,A.aG,new C.ftH()),C.Rj("DISCOVERY LAB","Body Explorer: a real 3D human",D.bRn,A.bc,new C.ftI()),C.Rj("TOOLBOX","Converter, clock, games",H.aqg,A.cN,new C.ftJ()),C.Rj("REACTION LAB","Wire parts together",A.Dt,A.bv,new C.ftK()),C.Rj("SPARK PAINTER","Paint with light",A.HC,A.c4,new C.ftL()),C.Rj("ROCKET LANDER","Land softly on the pad",A.oN,A.aG,new C.ftM()),C.Rj("TITLE ANIMATOR","Make a moving title",A.wY,A.bt,new C.ftN()),C.Rj("CIRCUIT LAB","Connect logic, learn it",A.a3C,A.ct,new C.ftO())],B.at("O<bvx>")))
w($,"iEa","qG",()=>{var v,u,t=B.T(x.N,x.B)
for(v=0;v<76;++v){u=D.SJ[v]
t.n(0,u.a,u)}return t})
w($,"iC1","ajc",()=>B.a([C.Go("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.ftr()),C.Go("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fts()),C.Go("Spin the motor","A battery and a motor in a loop will make it spin.",new C.ftt()),C.Go("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.ftu()),C.Go("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.ftv()),C.Go("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fti()),C.Go("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.ftj()),C.Go("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.ftk()),C.Go("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.ftl()),C.Go("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.ftm()),C.Go("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.ftn())],B.at("O<bdh>")))
w($,"iCu","hLq",()=>B.a([C.a28("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aQ,A.c8,new C.ftW()),C.a28("Focus Timer","Work, then rest","\u23f1\ufe0f",A.bY,A.bG,new C.ftX()),C.a28("Breathe","Calm down in a minute","\ud83e\udee7",A.fI,A.cG,new C.ftY()),C.a28("Draw Pad","Sketch and share","\ud83c\udfa8",A.bD,A.b7,new C.ftZ()),C.a28("Memory Match","Find the pairs","\ud83c\udccf",A.aG,A.ci,new C.fu_()),C.a28("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bt,A.bg,new C.fu0()),C.a28("Tip & Split","Share the bill","\ud83e\uddfe",A.bc,A.b3,new C.fu1()),C.a28("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bd,A.aC,new C.fu2())],B.at("O<bwR>")))})()};
(a=>{a["wLM8nVX1zErxrr6zldyLuIp0C6Q="]=a.current})($__dart_deferred_initializers__);