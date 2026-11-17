((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,A2,Z,A3,A_,S,A4,A5,A6,A7,A8,A0,N,A9,Aa,Ab,Ac,U,T,O,Ad,Ae,V,W,E,I,G,K,Af,Ag,P,Ah,Ai,R,Aj,C={
bCn(d){return C.i8Q(d)},
i8Q(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bCn=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.ri(B.nm(""),d,A.i6,null,null).dg(0,A.a0j),$async$bCn)
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
return B.i($async$bCn,v)},
il3(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.Se[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cS(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ag(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.fc(D.Se,new C.fLj())
if(w==null)w=A.d.gH(D.Se)
s=B.T(x.N,x.B)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.I)(r),++u){l=r[u].a
k=l[0]
l=$.qH().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.I)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gH(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.alm(w.a,w.b,m,w,s,!1)},
iey(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.N(D.SC,new C.fzX(),x.bd).aN(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
ito(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.co(b2,"{")
v=A.a.p7(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.X.aP(0,A.a.aB(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aR(a5)
r=0
for(a6=x.j,a7=J.aT(a6.a(J.t(u,"parts"))),a8=x.i;a7.C();){q=a7.gR(a7)
p=B.w(J.t(q,"kind"))
o=B.w(J.t(q,"id"))
if(!$.qH().am(0,p)||J.eK(s,o)||J.ad(t)>=8)continue
J.c5(s,o)
n=B.T(a5,a8)
for(a9=0;a9<4;++a9){m=D.dzY[a9]
l=J.t(q,m)
if(typeof l=="number")J.aK(n,m,l)}k=A.j.D(typeof J.t(q,"x")=="number"?B.dD(J.t(q,"x")):0.2+A.j.F(r,3)*0.3,0.16,0.84)
j=A.j.D(typeof J.t(q,"y")=="number"?B.dD(J.t(q,"y")):0.25+A.j.aq(r,3)*0.3,0.1,0.9)
J.c5(t,new B.dY([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aT(a6.a(J.t(u,"wires")));a5.C();){h=a5.gR(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.w(J.t(g,0))
e=B.w(J.t(g,2))
d=A.o.D(A.j.M(B.dD(J.t(g,1))),0,1)
a0=A.o.D(A.j.M(B.dD(J.t(g,3))),0,1)
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
return new C.alm(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
ijx(d){var w,v,u=C.hmH()
d.B(u)
for(w=0;w<60;++w)u.vN(0,0.03333333333333333)
v=u.a
return A.d.aV(v,new C.fHH(u))&&!A.d.cD(v,new C.fHI())},
ijw(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.T(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.I)(l),++u){t=l[u];++v
k.n(0,t.a,$.qH().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.I)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.w(t.e)+" V")
if(p==="resistor")q.push(""+A.j.V(t.r)+" ohms")
if(A.d.q(D.dya,p))q.push("level "+A.j.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.j.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aN(q,", ")+")"
s.push(B.w(p)+n+": "+o+", current "+A.j.ad(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.I)(w),++u){m=w[u]
l.push(B.w(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.w(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aN(s,"\n")+"\nWires: "+A.d.aN(l,"; ")},
i7a(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.I)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aN(v,"\n")+"\n\n"}v=A.d.aN(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
il2(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qH().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.SC[u]
if(A.d.aV(w,new C.fLg(s)))if(!B.cS(r,s.b.toLowerCase(),0))v=B.cS(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ag("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.Y(w,new C.fLh(e),B.U(w).k("Y<1>")).gau(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ag("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.j.ad(A.d.cF(w,0,new C.fLi())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ag("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gH(w)
w=$.qH().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
alm:function alm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fLj:function fLj(){},
fzX:function fzX(){},
fHH:function fHH(d){this.a=d},
fHI:function fHI(){},
fLg:function fLg(d){this.a=d},
fLh:function fLh(d){this.a=d},
fLi:function fLi(){},
WS:function WS(d,e){this.c=d
this.a=e},
bmN:function bmN(d,e,f,g,h){var _=this
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
ejH:function ejH(d){this.a=d},
ejI:function ejI(d,e,f){this.a=d
this.b=e
this.c=f},
ejJ:function ejJ(d){this.a=d},
ejU:function ejU(d){this.a=d},
ejV:function ejV(d,e){this.a=d
this.b=e},
ejQ:function ejQ(d){this.a=d},
ejO:function ejO(d,e){this.a=d
this.b=e},
ejP:function ejP(d,e,f){this.a=d
this.b=e
this.c=f},
ejR:function ejR(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ejM:function ejM(d){this.a=d},
ejN:function ejN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ejS:function ejS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ejL:function ejL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ejT:function ejT(d,e){this.a=d
this.b=e},
ejK:function ejK(d,e){this.a=d
this.b=e},
ejY:function ejY(d){this.a=d},
ejX:function ejX(d){this.a=d},
ejZ:function ejZ(d){this.a=d},
ejW:function ejW(d){this.a=d},
ek_:function ek_(d,e){this.a=d
this.b=e},
ek0:function ek0(d,e){this.a=d
this.b=e},
ek1:function ek1(d,e){this.a=d
this.b=e},
ek2:function ek2(d,e){this.a=d
this.b=e},
bCI(d,e,f){var w=null
return B.x(B.a([B.d(d,w,w,w,w,w,w,D.fuK,w,w,w),B.d(e,w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.O,0,A.p)},
hAy(d,e,f,g){var w=null,v=B.l(24),u=B.K(f.j(0.6),A.r,1)
return B.as(B.r(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.am,B.d(e,w,w,w,w,w,w,A.B2,A.K,w,w),A.aC,B.bX(A.fW,g,A.bt,w,0,8)],x.p),A.l,w,A.e,A.O,0,A.p),A.f,w,w,new B.o(D.bil,w,u,v,w,w,A.n),w,w,w,w,A.ac,w,w,w),w,w,w)},
GZ:function GZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vs:function vs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xe:function Xe(d){this.a=d},
aGo:function aGo(d,e,f,g,h,i,j,k,l,m){var _=this
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
ez1:function ez1(){},
ezl:function ezl(d){this.a=d},
ezk:function ezk(d,e){this.a=d
this.b=e},
ezm:function ezm(){},
ezn:function ezn(){},
ez3:function ez3(d,e,f){this.a=d
this.b=e
this.c=f},
ez2:function ez2(d,e){this.a=d
this.b=e},
eyT:function eyT(d){this.a=d},
eyU:function eyU(d){this.a=d},
eyV:function eyV(d){this.a=d},
eyW:function eyW(d){this.a=d},
eyX:function eyX(d){this.a=d},
eyY:function eyY(d){this.a=d},
eyZ:function eyZ(d){this.a=d},
ez_:function ez_(d){this.a=d},
ez0:function ez0(d){this.a=d},
eyR:function eyR(d){this.a=d},
eyS:function eyS(d){this.a=d},
eyQ:function eyQ(d){this.a=d},
eze:function eze(d,e){this.a=d
this.b=e},
ez9:function ez9(d){this.a=d},
eza:function eza(d){this.a=d},
ez6:function ez6(d){this.a=d},
ezb:function ezb(d){this.a=d},
ez5:function ez5(d){this.a=d},
ezc:function ezc(d){this.a=d},
ezd:function ezd(d){this.a=d},
ez4:function ez4(d){this.a=d},
ezf:function ezf(d,e){this.a=d
this.b=e},
ez8:function ez8(d,e){this.a=d
this.b=e},
ezg:function ezg(d){this.a=d},
ezh:function ezh(d){this.a=d},
ezi:function ezi(d){this.a=d},
ezj:function ezj(d){this.a=d},
ez7:function ez7(d){this.a=d},
bjG:function bjG(d,e){this.b=d
this.a=e},
aOo:function aOo(){},
bAm:function bAm(){},
hvI(){var w=$.hvG
return w==null?$.hvG=$.rm().cWm("assets/data/three.min.js"):w},
hvH(){var w=$.hvF
return w==null?$.hvF=C.cPw():w},
cPw(){var w=0,v=B.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cPw=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.rm().jp(0,"assets/data/body3d.bin"),$async$cPw)
case 3:d=a1
$.hvJ=J.eF(A.dM.gaU(d),d.byteOffset,d.byteLength)
t=B.a4E(d)
s=t.getUint32(4,!0)
r=B.a([],x.h)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.jM(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.dm3[i]
g=B.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a4y(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b5h))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.bcC(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cPw,v)},
c6W(){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$c6W=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.iE(B.a([C.hvH(),C.hvI()],x.D),x.K),$async$c6W)
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
return B.i($async$c6W,v)},
aUt:function aUt(d,e,f){this.a=d
this.b=e
this.c=f},
a4y:function a4y(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
bcC:function bcC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
VI:function VI(d){this.a=d},
aER:function aER(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
dPN:function dPN(d){this.a=d},
dPM:function dPM(d,e){this.a=d
this.b=e},
dPn:function dPn(d){this.a=d},
dPo:function dPo(d,e){this.a=d
this.b=e},
dPp:function dPp(d){this.a=d},
dPq:function dPq(){},
dPO:function dPO(){},
dPr:function dPr(d,e){this.a=d
this.b=e},
dPs:function dPs(d){this.a=d},
dPt:function dPt(){},
dPu:function dPu(d){this.a=d},
dPw:function dPw(d,e){this.a=d
this.b=e},
dPv:function dPv(d){this.a=d},
dPk:function dPk(d,e,f){this.a=d
this.b=e
this.c=f},
dPl:function dPl(d){this.a=d},
dPm:function dPm(d){this.a=d},
dPD:function dPD(d){this.a=d},
dPE:function dPE(d,e){this.a=d
this.b=e},
dPF:function dPF(d,e){this.a=d
this.b=e},
dPG:function dPG(d){this.a=d},
dPC:function dPC(d,e){this.a=d
this.b=e},
dPH:function dPH(d,e){this.a=d
this.b=e},
dPB:function dPB(d,e){this.a=d
this.b=e},
dPI:function dPI(d){this.a=d},
dPA:function dPA(d){this.a=d},
dPJ:function dPJ(d){this.a=d},
dPz:function dPz(d){this.a=d},
dPK:function dPK(d){this.a=d},
dPy:function dPy(d){this.a=d},
dPL:function dPL(d){this.a=d},
dPx:function dPx(d){this.a=d},
aNr:function aNr(){},
aNs:function aNs(){},
c6X:function c6X(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c6Y:function c6Y(d,e){this.a=d
this.b=e},
c6Z:function c6Z(d){this.a=d},
aAg(d,e,f,g,h){return new C.bdn(d,e,f,g,h)},
hcJ(d,e,f,g,h,i){return $.i4p.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.cWr(d,e,f,i,g,h))},
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
nL:function nL(d,e,f){this.a=d
this.b=e
this.c=f},
bdn:function bdn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ftg:function ftg(){},
fth:function fth(){},
fti:function fti(){},
ftp:function ftp(){},
ftq:function ftq(){},
ftr:function ftr(){},
VP:function VP(d){this.a=d},
aET:function aET(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
dRs:function dRs(d){this.a=d},
dR6:function dR6(d,e){this.a=d
this.b=e},
dR9:function dR9(){},
dRt:function dRt(){},
dR4:function dR4(d,e){this.a=d
this.b=e},
dR5:function dR5(d,e){this.a=d
this.b=e},
dRa:function dRa(d,e,f){this.a=d
this.b=e
this.c=f},
dR_:function dR_(){},
dR0:function dR0(){},
dR1:function dR1(d){this.a=d},
dR2:function dR2(d,e){this.a=d
this.b=e},
dR3:function dR3(d,e,f){this.a=d
this.b=e
this.c=f},
dRb:function dRb(){},
dRc:function dRc(d,e){this.a=d
this.b=e},
dRd:function dRd(d){this.a=d},
dR8:function dR8(d,e){this.a=d
this.b=e},
dR7:function dR7(d){this.a=d},
dQZ:function dQZ(d,e,f){this.a=d
this.b=e
this.c=f},
dRm:function dRm(d){this.a=d},
dRl:function dRl(d){this.a=d},
dRn:function dRn(d){this.a=d},
dRk:function dRk(d){this.a=d},
dRi:function dRi(d){this.a=d},
dRj:function dRj(d){this.a=d},
dRh:function dRh(d){this.a=d},
dRe:function dRe(d){this.a=d},
dRg:function dRg(d){this.a=d},
dRo:function dRo(d,e){this.a=d
this.b=e},
dRp:function dRp(d,e){this.a=d
this.b=e},
dRq:function dRq(d){this.a=d},
dRf:function dRf(d){this.a=d},
dRr:function dRr(d,e){this.a=d
this.b=e},
bdG:function bdG(d,e){this.b=d
this.a=e},
cWr:function cWr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aNw:function aNw(){},
bA6:function bA6(){},
hW5(){return new C.Ol(null)},
Rn(d,e,f,g,h){return new C.bvE(d,e,f,g,h)},
bu0(d,e,f){return A.j.D((d-e)/(f-e),0,1)},
hdg(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
in_(){return B.kS("construction","")},
Ol:function Ol(d){this.a=d},
Lm:function Lm(d,e){this.a=d
this.b=e},
Bc:function Bc(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aF9:function aF9(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dXE:function dXE(d,e){this.a=d
this.b=e},
dXD:function dXD(d){this.a=d},
dXG:function dXG(d,e){this.a=d
this.b=e},
dXF:function dXF(d){this.a=d},
bvE:function bvE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ftH:function ftH(){},
ftI:function ftI(){},
ftJ:function ftJ(){},
ftK:function ftK(){},
ftL:function ftL(){},
ftM:function ftM(){},
ftN:function ftN(){},
ftO:function ftO(){},
ftP:function ftP(){},
bu1:function bu1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f8Z:function f8Z(d){this.a=d},
f8Y:function f8Y(d,e){this.a=d
this.b=e},
f8W:function f8W(d){this.a=d},
f9_:function f9_(d){this.a=d},
f8X:function f8X(d,e){this.a=d
this.b=e},
agj:function agj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
afa:function afa(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Rg:function Rg(d,e,f,g,h,i,j,k,l,m){var _=this
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
bv1:function bv1(d,e){this.b=d
this.a=e},
bux:function bux(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bck:function bck(d,e){this.b=d
this.a=e},
aJq:function aJq(d,e){this.c=d
this.a=e},
aJr:function aJr(d,e,f){var _=this
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
f8F:function f8F(d){this.a=d},
f8E:function f8E(d){this.a=d},
f8D:function f8D(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f8C:function f8C(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f8A:function f8A(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f8z:function f8z(d,e,f){this.a=d
this.b=e
this.c=f},
f8B:function f8B(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f8y:function f8y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f8N:function f8N(d){this.a=d},
f8M:function f8M(d){this.a=d},
f8O:function f8O(d,e){this.a=d
this.b=e},
f8P:function f8P(d,e){this.a=d
this.b=e},
f8Q:function f8Q(d,e){this.a=d
this.b=e},
f8L:function f8L(d,e,f){this.a=d
this.b=e
this.c=f},
f8R:function f8R(d,e,f){this.a=d
this.b=e
this.c=f},
f8K:function f8K(d){this.a=d},
f8G:function f8G(d){this.a=d},
f8S:function f8S(d){this.a=d},
f8T:function f8T(d){this.a=d},
f8J:function f8J(d,e){this.a=d
this.b=e},
f8U:function f8U(d,e){this.a=d
this.b=e},
f8I:function f8I(d,e){this.a=d
this.b=e},
f8V:function f8V(d,e){this.a=d
this.b=e},
f8H:function f8H(d,e){this.a=d
this.b=e},
f8w:function f8w(){},
f8x:function f8x(){},
btD:function btD(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bt2:function bt2(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bd0:function bd0(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bt4:function bt4(d,e,f){this.b=d
this.c=e
this.a=f},
bx7:function bx7(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aPd:function aPd(){},
hC_(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a2(0,new B.p(w,0)),u=e.aJ(0,new B.p(w,0)),t=1-f,s=3*t
return d.aM(0,t*t*t).a2(0,v.aM(0,s*t*f)).a2(0,u.aM(0,s*f*f)).a2(0,e.aM(0,f*f*f))},
bjF(d,e,f,g,h,i){return $.i4Y.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.dru(d,e,f,i,g,h))},
a1H:function a1H(d,e){this.a=d
this.b=e},
qw:function qw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
rc:function rc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
D8:function D8(d,e){this.a=d
this.b=e},
a_G:function a_G(d,e){this.a=d
this.b=e},
ag7:function ag7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a1U:function a1U(d,e,f,g,h,i){var _=this
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
ad0:function ad0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adh:function adh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
afd:function afd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bjD:function bjD(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
dry:function dry(d){this.a=d},
drz:function drz(d){this.a=d},
drv:function drv(d,e){this.a=d
this.b=e},
drw:function drw(d){this.a=d},
drx:function drx(d){this.a=d},
drA:function drA(d){this.a=d},
drB:function drB(d){this.a=d},
drC:function drC(d){this.a=d},
drD:function drD(d){this.a=d},
drE:function drE(d){this.a=d},
drF:function drF(d){this.a=d},
drG:function drG(d){this.a=d},
drH:function drH(d){this.a=d},
drI:function drI(d){this.a=d},
GK:function GK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xd:function Xd(d){this.a=d},
aGn:function aGn(d,e,f,g,h,i,j){var _=this
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
eym:function eym(d){this.a=d},
eyb:function eyb(d){this.a=d},
eyd:function eyd(){},
eye:function eye(){},
eyh:function eyh(){},
eyi:function eyi(d,e,f){this.a=d
this.b=e
this.c=f},
eyj:function eyj(d){this.a=d},
eyk:function eyk(d){this.a=d},
eyf:function eyf(){},
eyg:function eyg(d){this.a=d},
eyM:function eyM(d){this.a=d},
eyl:function eyl(){},
ey7:function ey7(d){this.a=d},
eyo:function eyo(d){this.a=d},
eyn:function eyn(d){this.a=d},
eyq:function eyq(){},
eyp:function eyp(d,e){this.a=d
this.b=e},
eya:function eya(){},
ey8:function ey8(d){this.a=d},
ey9:function ey9(d){this.a=d},
eyK:function eyK(d){this.a=d},
eyJ:function eyJ(d){this.a=d},
eyL:function eyL(d){this.a=d},
eyA:function eyA(d,e){this.a=d
this.b=e},
eyI:function eyI(d){this.a=d},
eyG:function eyG(d){this.a=d},
eyH:function eyH(d){this.a=d},
eyF:function eyF(d){this.a=d},
eyE:function eyE(d){this.a=d},
eyB:function eyB(d){this.a=d},
eyC:function eyC(d){this.a=d},
eyD:function eyD(d){this.a=d},
eyc:function eyc(){},
eyw:function eyw(d){this.a=d},
eyx:function eyx(d){this.a=d},
eyv:function eyv(d){this.a=d},
eyy:function eyy(d){this.a=d},
eyu:function eyu(d){this.a=d},
eyz:function eyz(d){this.a=d},
eyt:function eyt(d){this.a=d},
eys:function eys(d){this.a=d},
eyr:function eyr(d,e){this.a=d
this.b=e},
bjE:function bjE(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dru:function dru(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aOm:function aOm(){},
hHM(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aJ(0,e).gcK()*0.1
return new B.p((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
hmH(){var w=B.a([],x.F),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a5H(w,v,u,A.cS,B.T(x.N,x.y))},
hPM(d,e,f){var w=d.c,v=e===0?-1:1
return new B.p(w*f.a+v*C.hmI(d),d.d*f.b)},
hmI(d){return 42+(D.mt.am(0,d.b)?(d.ch-1)*38:0)},
eh:function eh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
u1:function u1(d,e,f,g){var _=this
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
abG:function abG(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
acN:function acN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5H:function a5H(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bQh:function bQh(){},
bQs:function bQs(d){this.a=d},
bQn:function bQn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQt:function bQt(d){this.a=d},
bQu:function bQu(d){this.a=d},
bQw:function bQw(d){this.a=d},
bQx:function bQx(d){this.a=d},
bQv:function bQv(d){this.a=d},
bQy:function bQy(d,e,f){this.a=d
this.b=e
this.c=f},
bQz:function bQz(d){this.a=d},
bQj:function bQj(d){this.a=d},
bQk:function bQk(d){this.a=d},
bQi:function bQi(d){this.a=d},
bQl:function bQl(d,e,f){this.a=d
this.b=e
this.c=f},
bQm:function bQm(d){this.a=d},
bQg:function bQg(d){this.a=d},
bQA:function bQA(d,e){this.a=d
this.b=e},
bQo:function bQo(d,e){this.a=d
this.b=e},
bQr:function bQr(d){this.a=d},
bQq:function bQq(d){this.a=d},
bQp:function bQp(d){this.a=d},
aka:function aka(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bKE:function bKE(){},
bKF:function bKF(){},
mY:function mY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cuf:function cuf(d){this.a=d},
iti(d2,d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=d3.fx>0&&!d3.x,c7=new C.fXf(),c8=new C.fXh(),c9=new C.fXi(),d0=new C.fXg(),d1=d3.b
switch(d1){case"fridge":w=c9.$4(-16,-28,32,54)
d2.an(w,d0.$3(new B.a1(w.a,w.b,w.c,w.d),A.cd,A.bN))
d2.ah(D.esP,D.epJ,c8.$2(A.dZ,1.4))
d2.ah(D.epo,D.epm,c8.$2(A.bx,2.4))
d2.ah(D.epp,T.aMn,c8.$2(A.bx,2.4))
if(c6){d1=c7.$1(A.fM.j(0.5))
d1.y=A.Hb
d2.N(D.ep4,14,d1)
for(d1=d4*0.6,v=0;v<3;++v){u=A.j.F(d1+v/3,1)
d5.$5(d2,"\u2744",new B.p(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d2.an(c9.$4(-22,-26,44,50),d0.$3(D.aSv,A.aS,A.cx))
d2.N(A.cL,16,c7.$1(A.bx))
d2.N(A.cL,13,c7.$1(c6?A.aG.j(0.85):A.a_))
if(c6){d1=d2.c
J.bq(d1.save())
d1.translate(0,4)
d2.hW(0,d3.y*0.6)
for(v=0;v<3;++v){t=v*2.09
d2.ah(A.J,new B.p(Math.cos(t)*11,Math.sin(t)*11),c8.$2(A.ab,3))}d1.restore()
for(d1=d4*0.8,v=0;v<4;++v){u=A.j.F(d1+v*0.25,1)
d2.N(new B.p(Math.sin(v*2+d4)*9,4-u*12),1.6+u*2,c7.$1(A.c.j(0.8*(1-u))))}}d2.N(D.esH,2.4,c7.$1(c6?A.be:A.an))
d2.N(D.etz,2.4,c7.$1(A.an))
return!0
case"blender":d2.an(c9.$5(-14,14,28,12,4),c7.$1(A.cQ))
d1=$.S().r
t=x.v
s=new B.aG(d1,A.ai,c5,c5,B.a([],t))
s.E(new B.aZ(-16,-26))
s.E(new B.aq(16,-26))
s.E(new B.aq(12,14))
s.E(new B.aq(-12,14))
s.E(new B.bu())
d2.af(s,c7.$1(A.fM.j(0.35)))
if(c6){d1=new B.aG(d1,A.ai,c5,c5,B.a([],t))
d1.E(new B.aZ(-14,-10))
d1.E(new B.aq(14,-10))
d1.E(new B.aq(12,14))
d1.E(new B.aq(-12,14))
d1.E(new B.bu())
d2.af(d1,c7.$1(A.ay.j(0.7)))}d2.af(s,c8.$2(A.ab,1.6))
d1=d2.c
J.bq(d1.save())
d1.translate(0,10)
d2.hW(0,d3.y)
d2.ah(D.a9a,D.aMK,c8.$2(A.bP,3))
d1.restore()
if(c6)for(d1=d4*9,t=d4*1.6,v=0;v<3;++v)d2.N(new B.p(Math.sin(d1+v*2)*9,-10-A.j.F(t+v*0.33,1)*12),2.4,c7.$1(A.eU))
return!0
case"drone":d2.an(c9.$5(-10,-4,20,10,4),c7.$1(A.aM))
d2.N(A.hr,3,c7.$1(c6?A.be:A.an))
r=c6?-3+Math.sin(d4*4)*2:4
for(d1=d2.c,t=-4+r,q=-6+r,p=0;p<2;++p){o=F.IQ[p]
d2.ah(new B.p(o*0.4,1),new B.p(o,t),c8.$2(A.bx,3))
J.bq(d1.save())
d1.translate(o,q)
d2.ah(D.esv,D.ept,c8.$2(A.c.j(c6?0.35:0.9),3))
if(c6)d2.bZ(B.bt(A.J,6,24+Math.sin(d3.y*3)*4),c7.$1(A.c.j(0.25)))
d1.restore()}return!0
case"drill":w=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
w.E(new B.aZ(-24,-12))
w.E(new B.aq(10,-12))
w.E(new B.aq(10,2))
w.E(new B.aq(-2,2))
w.E(new B.aq(-6,22))
w.E(new B.aq(-16,22))
w.E(new B.aq(-14,2))
w.E(new B.aq(-24,2))
w.E(new B.bu())
d2.af(w,d0.$3(D.faP,A.aQ,A.d3))
d2.ar(D.f9W,c7.$1(A.cW))
d1=d2.c
J.bq(d1.save())
d1.translate(18,-5)
d2.hW(0,d3.y*2)
d2.ah(A.J,D.epA,c8.$2(A.bP,2.4))
d2.ah(A.a96,D.epz,c8.$2(A.hJ,1))
d1.restore()
if(c6)for(d1=d4*3,t=d4*20,v=0;v<4;++v){u=A.j.F(d1+v*0.25,1)
d2.N(new B.p(34+u*6,-5+Math.sin(v*3+t)*6*u),1.4,c7.$1(A.dC.j(1-u)))}return!0
case"torch":if(c6){v=A.j.D(0.5+0.12*(Math.abs(d3.dy)-2),0.5,1)
d1=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(16,-6))
d1.E(new B.aq(52,-26))
d1.E(new B.aq(52,18))
d1.E(new B.aq(16,4))
d1.E(new B.bu())
d2.af(d1,c7.$1(A.bL.j(0.35*v)))}d2.an(c9.$5(-26,-6,30,12,3),d0.$3(D.faV,A.bh,A.cm))
n=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
n.E(new B.aZ(4,-6))
n.E(new B.aq(18,-12))
n.E(new B.aq(18,12))
n.E(new B.aq(4,6))
n.E(new B.bu())
d2.af(n,c7.$1(A.cQ))
d2.N(D.epF,7,c7.$1(c6?A.c:A.cW))
return!0
case"neon":d2.an(c9.$5(-30,-14,60,28,6),c7.$1(M.nB))
if(c6)m=d3.ax>0.5||A.o.F(A.j.bh(d4*17),3)!==0
else m=!1
l=m?A.bT:D.bsE
if(m){d1=c9.$5(-28,-12,56,24,6)
t=c7.$1(A.bT.j(0.35))
t.y=A.mg
d2.an(d1,t)}d2.an(c9.$5(-27,-11,54,22,5),c8.$2(l,2.2))
d5.$5(d2,"OPEN",D.esV,l,17)
return!0
case"microwave":d2.an(c9.$4(-30,-18,60,38),d0.$3(D.fb0,A.bP,A.bh))
d1=c9.$5(-26,-14,38,30,3)
d2.an(d1,c7.$1(c6?A.bL.j(0.75):A.as))
if(c6){d1=d2.c
J.bq(d1.save())
d1.translate(-7,8)
d2.hW(0,d3.y*0.5)
d2.bZ(B.bt(A.J,7,22),c7.$1(A.d3))
d1.restore()}d2.an(c9.$5(15,-14,12,12,2),c7.$1(M.nB))
if(c6)d5.$5(d2,"0:"+A.a.b_(A.o.v(59-A.o.F(A.j.bh(d4),60)),2,"0"),D.epG,A.b4,6.5)
d2.N(D.epW,4,c7.$1(A.cW))
return!0
case"doorbell":d2.an(c9.$5(-16,-26,32,52,8),c7.$1(A.bj))
d2.N(A.JI,10,c7.$1(c6?A.bl:A.bx))
d1=d2.c
J.bq(d1.save())
d1.translate(0,-8)
d2.hW(0,c6?Math.sin(d4*16)*0.45:0)
d5.$5(d2,"\ud83d\udd14",D.etD,A.c,16)
d1.restore()
d2.N(A.kD,6,c7.$1(A.d7))
d2.N(A.kD,6,c8.$2(A.c,1.6))
if(c6)for(d1=d4*14,v=1;v<=2;++v)d2.cB(B.bZ(A.JI,14+v*6+A.j.F(d1,6)),-0.9,1.8,!1,c8.$2(A.bl.j(0.9-v*0.3),1.8))
return!0
case"camera":d2.ah(D.esU,D.etw,c8.$2(A.bx,4))
d1=d2.c
J.bq(d1.save())
d2.hW(0,c6?Math.sin(d4*0.9)*0.18:0)
d2.an(c9.$5(-24,-14,46,22,5),d0.$3(D.faQ,A.bP,A.an))
d2.N(D.aMr,8,c7.$1(A.as))
d2.N(D.aMr,4.5,c7.$1(c6?A.aG:A.cm))
d2.N(D.esS,2.2,c7.$1(c6&&A.o.F(A.j.bh(d4*1.6),2)===0?A.ay:A.kt))
d1.restore()
if(c6)d5.$5(d2,"REC",D.et2,A.ay,9)
return!0
case"console":d2.an(c9.$5(-28,-22,56,44,8),d0.$3(D.faY,A.j6,A.fq))
d2.an(c9.$5(-20,-17,40,22,3),c7.$1(A.dF))
if(c6){d1=d4*2.3
d2.N(new B.p(Math.sin(d1)*14,-6+Math.cos(d4*3.1)*6),2.6,c7.$1(A.c))
t=-9+Math.sin(d1+0.4)*6
d2.ar(new B.a1(-18,t,-15.6,t+8),c7.$1(A.b4))
d1=-9+Math.sin(d1-0.4)*6
d2.ar(new B.a1(15.6,d1,18,d1+8),c7.$1(A.bT))}d2.N(D.esN,4,c7.$1(A.b6))
d2.N(D.epB,2.4,c7.$1(A.ay))
d2.N(D.epT,2.4,c7.$1(A.be))
return!0
case"heartmon":d2.an(c9.$5(-30,-22,60,44,6),c7.$1(A.as))
d2.an(c9.$5(-26,-18,52,28,3),c7.$1(A.dF))
if(c6){d1=$.S()
t=B.a([],x.v)
k=new B.aG(d1.r,A.ai,c5,c5,t)
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
k.ab()}}d2.af(k,c8.$2(A.b4,1.8))
d5.$5(d2,"72",D.epC,A.hv,11)
d1=d4*9
d5.$5(d2,"\u2665",D.et7,A.hv.j((Math.sin(d1)+1.4)/2.4),9+Math.sin(d1)*1.2)}d2.N(D.esX,3,c7.$1(c6?A.be:A.bx))
return!0
case"aquarium":d1=c9.$5(-26,-20,52,40,4)
d2.an(d1,c7.$1(A.cD.j(c6?0.5:0.3)))
d2.an(c9.$5(-26,-20,52,40,4),c8.$2(A.ab,1.6))
d2.ar(D.faS,c7.$1(F.uh))
if(c6){d1=d4*1.1
t=Math.sin(d1)
q=d2.c
J.bq(q.save())
q.translate(t*14,-2+Math.sin(d4*2)*3)
if(Math.cos(d1)<0)d2.pl(0,-1,1)
d2.bZ(B.bt(A.J,8,14),c7.$1(A.cI))
d1=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-6,0))
d1.E(new B.aq(-12,-4))
d1.E(new B.aq(-12,4))
d1.E(new B.bu())
d2.af(d1,c7.$1(A.c6))
d2.N(D.eqE,1.2,c7.$1(A.w))
q.restore()
for(d1=d4*0.7,v=0;v<5;++v){u=A.j.F(d1+v*0.2,1)
d2.N(new B.p(-18+Math.sin(u*8+v)*2,13-u*30),1.4+A.o.F(v,2),c8.$2(A.ab,1))}}return!0
case"lighthouse":d1=$.S().r
t=x.v
g=new B.aG(d1,A.ai,c5,c5,B.a([],t))
g.E(new B.aZ(-9,22))
g.E(new B.aq(-5,-16))
g.E(new B.aq(5,-16))
g.E(new B.aq(9,22))
g.E(new B.bu())
d2.af(g,d0.$3(D.fbs,A.c,A.bD))
d2.ar(D.fbo,c7.$1(c6?A.dC:A.bx))
q=new B.aG(d1,A.ai,c5,c5,B.a([],t))
q.E(new B.aZ(-7,-22))
q.E(new B.aq(0,-29))
q.E(new B.aq(7,-22))
q.E(new B.bu())
d2.af(q,c7.$1(A.em))
if(c6){f=Math.sin(d3.y*0.3)
d1=new B.aG(d1,A.ai,c5,c5,B.a([],t))
d1.E(new B.aZ(0,-19))
t=f*34
d1.E(new B.aq(t,-26))
d1.E(new B.aq(t,-12))
d1.E(new B.bu())
d2.af(d1,c7.$1(A.dC.j(0.45)))
d1=c7.$1(A.dC.j(0.35))
d1.y=A.Hb
d2.N(D.ep5,14,d1)}return!0
case"discoball":d2.ah(D.ep7,Q.aMi,c8.$2(A.cW,1.4))
d2.N(A.J,16,d0.$3(D.faz,A.aS,A.an))
for(v=0;v<8;++v){d1=-12+v*3.4
d2.ah(new B.p(-16,d1),new B.p(16,d1),c8.$2(A.dx,0.7))}for(v=0;v<5;++v){f=d3.y*0.5+v*1.26
d2.ah(new B.p(Math.cos(f)*16*0.3,Math.sin(f)*16*0.3),new B.p(Math.cos(f)*16,0),c8.$2(A.dx,0.7))}if(c6)for(d1=d4*2,t=d4*9,v=0;v<10;++v){f=d1+v*0.63
e=22+A.o.F(v,3)*6
d2.N(new B.p(Math.cos(f)*e,Math.sin(f)*e*0.8),1.8,c7.$1(D.dn8[A.o.F(v,4)].j(0.5+0.5*Math.sin(t+v))))}return!0
case"robot":d2.an(c9.$5(-14,-4,28,24,5),d0.$3(D.faw,A.cx,A.an))
d2.an(c9.$5(-12,-26,24,20,5),d0.$3(D.fap,A.bj,A.bN))
d2.ah(H.aMk,D.ep9,c8.$2(A.bx,1.6))
d2.N(D.epa,2.2,c7.$1(c6?A.ay:A.bx))
d=c6&&A.j.F(d4*0.8,1)>0.08
for(p=0;p<2;++p){o=F.a6K[p]
if(c6)d1=d?A.b9:A.f0
else d1=A.cm
d2.N(new B.p(o,-17),3.2,c7.$1(d1))}d1=d2.c
J.bq(d1.save())
d1.translate(14,0)
d2.hW(0,c6?-0.6+Math.sin(d4*5)*0.6:0.3)
d2.ah(A.J,D.a91,c8.$2(A.bN,4))
d1.restore()
d2.ah(D.esD,D.et0,c8.$2(A.bN,4))
d2.ar(D.fbn,c7.$1(c6?A.b9.j(0.7):A.aM))
return!0
case"toaster":a0=c6?Math.min(1,d3.ax/3):0
for(d1=-4-a0*14,p=0;p<2;++p){t=c9.$5(D.aD2[p]+1,d1,10,14,2)
q=B.ar(A.bL,A.d3,a0)
q.toString
d2.an(t,c7.$1(q))}d2.an(c9.$5(-24,-6,48,26,8),d0.$3(D.faR,A.bP,A.bh))
for(p=0;p<2;++p){o=D.aD2[p]
d1=c9.$5(o,-5,12,5,2)
d2.an(d1,c7.$1(c6?A.fs:A.as))
if(c6){d1=c9.$5(o,-5,12,5,2)
t=c7.$1(A.cI.j(0.5))
t.y=N.oz
d2.an(d1,t)}}d2.ah(D.eq1,D.eqm,c8.$2(A.as,3))
return!0
case"ledstrip":d2.an(c9.$5(-34,-4,68,10,4),c7.$1(A.cm))
for(d1=d4*90,v=0;v<9;++v){a1=A.j.F(d1+v*40,360)
l=c6?new Am.pk(1,a1,0.8,1).jd():A.cQ
if(c6){t=c7.$1(l.j(0.45))
t.y=N.oz
d2.N(new B.p(-30+v*7.5,1),7,t)}d2.N(new B.p(-30+v*7.5,1),2.6,c7.$1(l))}d2.an(c9.$5(-40,-2,6,6,1),c7.$1(A.cW))
return!0
case"pump":d2.an(c9.$5(-16,-2,32,22,6),d0.$3(D.faF,A.cD,A.G2))
d2.N(D.et8,8,c7.$1(A.rI))
d1=d2.c
J.bq(d1.save())
d1.translate(-2,9)
d2.hW(0,d3.y)
for(v=0;v<3;++v){t=v*2.09
d2.ah(A.J,new B.p(Math.cos(t)*7,Math.sin(t)*7),c8.$2(A.fM,2.4))}d1.restore()
d1=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(16,6))
d1.E(new B.aq(26,6))
d1.E(new B.aq(26,-20))
d1.E(new B.aq(10,-20))
d2.af(d1,c8.$2(A.bN,4))
if(c6){for(d1=d4*0.9,v=0;v<5;++v)d2.N(new B.p(26,6-A.j.F(d1+v*0.2,1)*26),2.2,c7.$1(A.hA))
d2.N(D.erh,3.2,c7.$1(A.hA.j(0.7)))}return!0
case"hairdryer":d1=d2.c
J.bq(d1.save())
d2.hW(0,-0.15)
d2.an(c9.$5(-26,-14,40,22,10),d0.$3(D.faT,A.he,A.rG))
d2.an(c9.$5(14,-10,12,14,3),c7.$1(A.cm))
d2.an(c9.$5(-10,6,12,22,4),c7.$1(A.cQ))
d1.restore()
if(c6){for(d1=d4*3,v=0;v<4;++v){u=A.j.F(d1+v*0.25,1)
t=u*18
q=-10+v*5
d2.ah(new B.p(24+t,q),new B.p(32+t,q),c8.$2(A.c.j(1-u),1.8))}d1=c7.$1(A.cI.j(0.4))
d1.y=N.oz
d2.N(D.epV,8,d1)}return!0
case"headphones":d2.cB(B.bt(A.dN,44,44),3.141592653589793,3.141592653589793,!1,c8.$2(A.bx,4))
for(d1=d4*12,p=0;p<2;++p){o=F.SP[p]
t=o-7
d2.an(c9.$5(t,0,14,20,6),d0.$3(new B.a1(t,0,t+14,20),A.bc,A.nx))
if(c6)for(t=o<0,v=1;v<=2;++v){q=B.bZ(new B.p(o,10),10+v*5+A.j.F(d1,5))
h=t?2.2:-0.9
d2.cB(q,h,1.6,!1,c8.$2(A.ey.j(0.9-v*0.3),1.6))}}if(c6)d5.$5(d2,"\u266a",new B.p(-4,-8-A.j.F(d4*14,8)),A.kM,12)
return!0
case"smartwatch":d2.an(c9.$5(-8,-30,16,14,3),c7.$1(A.cm))
d2.an(c9.$5(-8,14,16,14,3),c7.$1(A.cm))
d2.an(c9.$5(-14,-17,28,32,8),d0.$3(D.fau,A.cW,A.cQ))
d2.an(c9.$5(-11,-14,22,26,6),c7.$1(A.dF))
if(c6){a2=new B.V(Date.now(),0,!1)
d5.$5(d2,A.a.b_(A.o.v(B.df(a2)),2,"0")+":"+A.a.b_(A.o.v(B.fS(a2)),2,"0"),D.epg,A.b4,9.5)
j=(Math.sin(d4*9)+1)/2
d1=B.ar(A.FM,A.hv,j)
d1.toString
d5.$5(d2,"\u2665",new B.p(-8,1),d1,8+j*2)
d5.$5(d2,""+(70+A.o.F(A.j.bh(d4*2),6)),A.dN,A.c,7)}return!0
case"tablet":d2.an(c9.$5(-30,-22,60,44,6),c7.$1(M.nB))
d2.an(c9.$5(-30,-22,60,44,6),c8.$2(A.bN,1.6))
a3=c9.$5(-27,-19,54,38,3)
if(c6){d1=d2.c
J.bq(d1.save())
d1.clipRRect(B.nS(a3),$.np(),!0)
d1.translate(-27,-19)
L.Me(d2,D.fhO,d4,c5)
d1.restore()}else d2.an(a3,c7.$1(D.wl))
return!0
case"buck":a4=c9.$5(-26,-22,52,42,5)
d2.an(a4,d0.$3(new B.a1(a4.a,a4.b,a4.c,a4.d),A.dP,A.db))
d2.an(a4,c8.$2(A.aT,1.2))
d2.N(D.aMR,9,c7.$1(A.as))
d2.N(D.aMR,6,c8.$2(A.d3,2))
d2.an(c9.$5(4,-2,14,10,2),c7.$1(A.as))
d2.an(c9.$5(-22,-19,44,12,2),c7.$1(A.dF))
d1=A.j.ad(d3.db,1)
t=A.j.ad(c6?d3.dx:d3.e,1)
q=c6?A.b4:A.an
d5.$5(d2,d1+"\u2192"+t+"V",D.err,q,8.2)
d2.N(D.epK,2.4,c7.$1(c6?A.be:A.aM))
d5.$5(d2,"IN",D.et1,A.ab,6)
d5.$5(d2,"OUT",D.er8,A.ab,6)
return!0
case"regulator":a5=c6?A.j.D(d3.cy*Math.abs(d3.fr)/2.5,0,1):0
d1=c9.$5(-14,-26,28,22,3)
t=B.ar(A.bN,A.ay,a5)
t.toString
d2.an(d1,c7.$1(t))
d2.N(H.a9_,3,c7.$1(A.aM))
d2.an(c9.$5(-12,-4,24,18,3),d0.$3(D.faq,A.cQ,A.ic))
d5.$5(d2,"7805",D.a9a,A.ab,8)
for(p=0;p<3;++p){d1=D.dtE[p]-1
d2.ar(new B.a1(d1,14,d1+2,22),c7.$1(A.e2))}if(a5>0.2)for(d1=d4*0.9,v=0;v<3;++v){u=A.j.F(d1+v*0.33,1)
d2.N(new B.p(-6+v*6,-28-u*12),2+u*2,c7.$1(A.c.j(0.5*(1-u))))}d5.$5(d2,"5V",D.etA,A.bq,9)
return!0
case"diode":d2.ah(D.aMV,D.aME,c8.$2(A.e2,2.4))
d2.an(c9.$5(-14,-7,28,14,6),c7.$1(A.at.j(0.85)))
d2.ar(D.fa9,c7.$1(A.bq))
if(c6){d1=c9.$5(-14,-7,28,14,6)
t=c7.$1(A.dC.j(0.4))
t.y=A.kV
d2.an(d1,t)}d1=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-8,-4))
d1.E(new B.aq(-8,4))
d1.E(new B.aq(-1,0))
d1.E(new B.bu())
d2.af(d1,c7.$1(A.b6))
d5.$5(d2,"one way",D.esQ,A.aF,8)
return!0
case"ldr":d2.ah(D.aMV,D.a9a,c8.$2(A.e2,2.4))
d2.ah(D.aMK,D.aME,c8.$2(A.e2,2.4))
d2.N(A.J,12,c7.$1(A.d3))
d2.N(A.J,12,c8.$2(A.rN,1.6))
d1=$.S()
t=B.a([],x.v)
a6=new B.aG(d1.r,A.ai,c5,c5,t)
a6.E(new B.aZ(-8,-6))
for(v=0;v<5;++v){d1=(v&1)===0?8:-8
d1=new B.aq(d1,-6+v*3)
t.push(d1)
q=a6.f
if(q!=null)d1.ak(q)
a6.ab()}d2.af(a6,c8.$2(A.bL,1.4))
d1=B.ar(A.bx,A.dC,d3.f)
d1.toString
d5.$5(d2,"\u2600",new B.p(-6,-26),d1,14)
d5.$5(d2,""+A.j.V(20+980*(1-d3.f))+"\u03a9",D.esE,A.ab,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":switch(d1){case"lgtv":t=A.er
break
case"sonytv":t=A.rA
break
case"appletv":t=A.e2
break
default:t=F.FP
break}a7=d1==="lgtv"||d1==="appletv"
d2.an(c9.$5(-36,-24,72,a7?42:44,6),c7.$1(t))
t=a7?-35:-33
q=a7?-23:-21
h=a7?70:66
a3=c9.$5(t,q,h,a7?40:38,3)
t=a3.a
q=a3.b
if(c6){h=d2.c
J.bq(h.save())
h.clipRRect(B.nS(a3),$.np(),!0)
h.translate(t,q)
L.hiF(d2,new B.av(a3.c-t,a3.d-q),d3.at,d4,d3.ax,-1)
h.restore()
d2.N(D.eqp,1.6,c7.$1(A.b4))}else{d2.an(a3,c7.$1(D.wl))
h=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
h.E(new B.aZ(t,q))
h.E(new B.aq(t+24,q))
h.E(new B.aq(t,q+22))
h.E(new B.bu())
d2.af(h,c7.$1(A.c.j(0.05)))}switch(d1){case"lgtv":d2.an(c9.$5(-22,19,44,3,1.5),c7.$1(A.cW))
break
case"sonytv":for(d1=x.v,p=0;p<2;++p){o=M.fF[p]
t=$.S()
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
h=new B.bu()
q.push(h)
q=t.f
if(q!=null)h.ak(q)
t.ab()
d2.af(t,c7.$1(A.cW))}d5.$5(d2,"SONY",D.es5,A.bP,5.5)
break
case"appletv":d1=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-8,18))
d1.E(new B.aq(8,18))
d1.E(new B.aq(12,25))
d1.E(new B.aq(-12,25))
d1.E(new B.bu())
d2.af(d1,c7.$1(D.ZJ))
d5.$5(d2,"Apple TV",D.ers,A.bx,4.8)
break
default:d2.an(c9.$5(-34,19,68,7,3),c7.$1(D.bqW))
for(v=0;v<14;++v){d1=-32+v*4.9
d2.ah(new B.p(d1,20),new B.p(d1,25),c8.$2(A.dx,0.6))}d5.$5(d2,"B&O",D.etv,F.uh,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":a9=D.mt.h(0,d1)
b0=a9.b===D.EG
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
d2.an(w,d0.$3(new B.a1(h,a8,b3,b4),b6,b5))
a3=c9.$5(t+2,q,b1-4,b2-4,3.5)
if(c6){t=d2.c
J.bq(t.save())
t.clipRRect(B.nS(a3),$.np(),!0)
q=a3.a
h=a3.b
t.translate(q,h)
L.Me(d2,new B.av(a3.c-q,a3.d-h),d4,c5)
t.restore()}else d2.an(a3,c7.$1(D.wl))
if(b0){t=a3.b
q=a3.d
d2.ah(new B.p(0,t),new B.p(0,q),c8.$2(A.w.j(c6?0.45:0.7),0.9))}if(d1==="iphonefold"||d1==="huawei")d2.an(c9.$5(-4,a3.b+1.2,8,2.6,1.3),c7.$1(A.w))
else{d1=b0?b1/2-7:0
d2.N(new B.p(d1,a3.b+3),1.3,c7.$1(A.w))}return!0
case"ereader":d2.an(c9.$5(-17,-28,34,52,4),c7.$1(A.cQ))
d2.an(c9.$5(-14.5,-25.5,29,45,2),c7.$1(A.bP))
if(c6){d5.$5(d2,"NGMY",D.etG,A.as,9)
for(v=0;v<9;++v){d1=-9+v*3.6
t=A.o.F(v,4)===3?14:22
d2.ar(new B.a1(-11,d1,-11+t,d1+1.4),c7.$1(A.bh))}d2.N(A.a8Y,1.6,c7.$1(A.as))}return!0
case"laptop":d2.an(c9.$5(-30,-28,60,42,4),d0.$3(D.fb1,A.cx,A.bh))
b7=c9.$5(-27,-25,54,34,2)
if(c6){d1=d2.c
J.bq(d1.save())
d1.clipRRect(B.nS(b7),$.np(),!0)
t=b7.a
q=b7.b
d1.translate(t,q)
L.Me(d2,new B.av(b7.c-t,b7.d-q),d4,c5)
d1.restore()}else d2.an(b7,c7.$1(D.wl))
d1=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-38,16))
d1.E(new B.aq(38,16))
d1.E(new B.aq(34,21))
d1.E(new B.aq(-34,21))
d1.E(new B.bu())
d2.af(d1,c7.$1(D.ZJ))
d2.an(c9.$5(-7,16,14,2,1),c7.$1(A.bh))
return!0
case"imac":d2.an(c9.$5(-32,-28,64,46,5),d0.$3(D.fb5,A.cd,A.cx))
b8=c9.$5(-29,-25,58,33,2)
if(c6){d1=d2.c
J.bq(d1.save())
d1.clipRRect(B.nS(b8),$.np(),!0)
t=b8.a
q=b8.b
d1.translate(t,q)
L.Me(d2,new B.av(b8.c-t,b8.d-q),d4,c5)
d1.restore()}else d2.an(b8,c7.$1(D.wl))
d2.N(D.aMd,2,c7.$1(A.bN))
d1=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-6,18))
d1.E(new B.aq(6,18))
d1.E(new B.aq(10,26))
d1.E(new B.aq(-10,26))
d1.E(new B.bu())
d2.af(d1,c7.$1(D.ZJ))
return!0
case"monitor":d2.an(c9.$5(-34,-28,68,40,3),c7.$1(A.er))
b9=c9.$5(-32,-26,64,36,2)
if(c6){d1=d2.c
J.bq(d1.save())
d1.clipRRect(B.nS(b9),$.np(),!0)
t=b9.a
q=b9.b
d1.translate(t,q)
L.Me(d2,new B.av(b9.c-t,b9.d-q),d4,c5)
d1.restore()}else d2.an(b9,c7.$1(D.wl))
d2.ar(D.fbc,c7.$1(A.bh))
d2.an(c9.$5(-14,22,28,3.5,1.5),c7.$1(A.cW))
return!0
case"projector":if(c6){d1=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.E(new B.aZ(14,4))
d1.E(new B.aq(-32,-42))
d1.E(new B.aq(34,-42))
d1.E(new B.bu())
d2.af(d1,c7.$1(A.dC.j(0.16)))
c0=c9.$5(-32,-46,66,26,2)
d1=d2.c
J.bq(d1.save())
d1.clipRRect(B.nS(c0),$.np(),!0)
t=c0.a
q=c0.b
d1.translate(t,q)
L.Me(d2,new B.av(c0.c-t,c0.d-q),d4,c5)
d1.restore()}d2.an(c9.$5(-26,-4,52,24,6),d0.$3(D.faU,A.i0,A.cW))
d2.N(D.aMp,7,c7.$1(A.as))
d2.N(D.aMp,4,c7.$1(c6?A.dC:A.cm))
for(v=0;v<4;++v){d1=-20+v*4
d2.ah(new B.p(d1,2),new B.p(d1,14),c8.$2(A.dx,1))}return!0
case"carscreen":d2.an(c9.$5(-34,-10,68,32,12),c7.$1(A.as))
c1=c9.$5(-30,-20,60,28,8)
d2.an(c1,c7.$1(M.nB))
d2.an(c1,c8.$2(A.bx,1.2))
if(c6){c2=new B.aG($.S().r,A.ai,c5,c5,B.a([],x.v))
c2.E(new B.aZ(-26,4))
c2.E(new B.c7(-10,-14+Math.sin(d4)*3,6,-6))
c2.E(new B.aq(22,-16))
d2.af(c2,c8.$2(A.aG,2.2))
d1=A.j.F(d4*6,48)
d2.N(new B.p(-26+d1,4-d1*0.1),2.4,c7.$1(A.b4))
d5.$5(d2,""+(88+A.o.F(A.j.bh(d4*2),5)),H.aMJ,A.c,10)
d5.$5(d2,"km/h",D.erf,A.aF,5)}return!0
case"vision":c3=c9.$5(-32,-14,64,28,13)
d2.an(c3,d0.$3(new B.a1(c3.a,c3.b,c3.c,c3.d),A.cW,A.cQ))
c4=c9.$5(-29,-11,58,22,10)
if(c6){d1=d2.c
J.bq(d1.save())
d1.clipRRect(B.nS(c4),$.np(),!0)
t=c4.a
q=c4.b
d1.translate(t,q)
L.Me(d2,new B.av(c4.c-t,c4.d-q),d4,c5)
d1.restore()
d1=c7.$1(A.bc.j(0.2))
d1.y=A.mg
d2.N(A.J,26,d1)}else d2.an(c4,c7.$1(A.a_))
d2.ah(D.etf,D.etk,c8.$2(A.bh,4))
d2.ah(D.eqr,D.eqH,c8.$2(A.bh,4))
return!0}return!1},
fXf:function fXf(){},
fXh:function fXh(){},
fXi:function fXi(){},
fXg:function fXg(){},
hly(d,e,f,g){return new C.ak8(d,g,f,e)},
Gu(d,e,f){return new C.bdo(d,e,f)},
ak8:function ak8(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
ak9:function ak9(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bKh:function bKh(d,e){this.a=d
this.b=e},
bKi:function bKi(d){this.a=d},
bKg:function bKg(d){this.a=d},
bKj:function bKj(){},
bKk:function bKk(d){this.a=d},
bKl:function bKl(d,e,f){this.a=d
this.b=e
this.c=f},
bKf:function bKf(d,e){this.a=d
this.b=e},
bKc:function bKc(d,e){this.a=d
this.b=e},
bKd:function bKd(d,e,f){this.a=d
this.b=e
this.c=f},
bK6:function bK6(d,e){this.a=d
this.b=e},
bK7:function bK7(){},
bKe:function bKe(d,e,f){this.a=d
this.b=e
this.c=f},
bKb:function bKb(d,e){this.a=d
this.b=e},
bK8:function bK8(d,e){this.a=d
this.b=e},
bK9:function bK9(d,e){this.a=d
this.b=e},
bKa:function bKa(d){this.a=d},
bKB:function bKB(d){this.a=d},
bKC:function bKC(){},
bJH:function bJH(){},
bKD:function bKD(d,e){this.a=d
this.b=e},
bKA:function bKA(d,e){this.a=d
this.b=e},
bKv:function bKv(d){this.a=d},
bKs:function bKs(d,e,f){this.a=d
this.b=e
this.c=f},
bKt:function bKt(d,e){this.a=d
this.b=e},
bKw:function bKw(d){this.a=d},
bKq:function bKq(d,e){this.a=d
this.b=e},
bKr:function bKr(d,e){this.a=d
this.b=e},
bKu:function bKu(d){this.a=d},
bKx:function bKx(d){this.a=d},
bKn:function bKn(d,e){this.a=d
this.b=e},
bKo:function bKo(d,e){this.a=d
this.b=e},
bKp:function bKp(d,e){this.a=d
this.b=e},
bKy:function bKy(d){this.a=d},
bKm:function bKm(d){this.a=d},
bKz:function bKz(d){this.a=d},
bJI:function bJI(d,e){this.a=d
this.b=e},
bK3:function bK3(d,e){this.a=d
this.b=e},
bK5:function bK5(d,e){this.a=d
this.b=e},
bK4:function bK4(d,e){this.a=d
this.b=e},
bK2:function bK2(){},
bJP:function bJP(d){this.a=d},
bJO:function bJO(d){this.a=d},
bJQ:function bJQ(d,e){this.a=d
this.b=e},
bJR:function bJR(d){this.a=d},
bJN:function bJN(d){this.a=d},
bJV:function bJV(d,e,f){this.a=d
this.b=e
this.c=f},
bJM:function bJM(d,e){this.a=d
this.b=e},
bJW:function bJW(d,e){this.a=d
this.b=e},
bJX:function bJX(d,e){this.a=d
this.b=e},
bJY:function bJY(d,e){this.a=d
this.b=e},
bJZ:function bJZ(d,e,f){this.a=d
this.b=e
this.c=f},
bJL:function bJL(d,e){this.a=d
this.b=e},
bK_:function bK_(d,e,f){this.a=d
this.b=e
this.c=f},
bJK:function bJK(d,e){this.a=d
this.b=e},
bK0:function bK0(d,e,f){this.a=d
this.b=e
this.c=f},
bJJ:function bJJ(d,e){this.a=d
this.b=e},
bK1:function bK1(d){this.a=d},
bJS:function bJS(d){this.a=d},
bJT:function bJT(d){this.a=d},
bJU:function bJU(d){this.a=d},
bdo:function bdo(d,e,f){this.a=d
this.b=e
this.c=f},
fts:function fts(){},
ftt:function ftt(){},
ftu:function ftu(){},
ftf:function ftf(){},
ftv:function ftv(){},
fte:function fte(){},
ftw:function ftw(){},
ftj:function ftj(){},
ftd:function ftd(){},
ftk:function ftk(){},
ftc:function ftc(){},
ftl:function ftl(){},
ftb:function ftb(){},
ftm:function ftm(){},
ft9:function ft9(){},
fta:function fta(){},
ftn:function ftn(){},
ft7:function ft7(){},
ft8:function ft8(){},
fto:function fto(){},
ft6:function ft6(){},
Wq:function Wq(d){this.a=d},
aFl:function aFl(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
e1s:function e1s(d,e){this.a=d
this.b=e},
e1B:function e1B(d){this.a=d},
e1C:function e1C(){},
e1D:function e1D(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1E:function e1E(){},
e1r:function e1r(d){this.a=d},
e1q:function e1q(d,e,f){this.a=d
this.b=e
this.c=f},
e1p:function e1p(d,e){this.a=d
this.b=e},
e1n:function e1n(d){this.a=d},
e1o:function e1o(){},
e1A:function e1A(d){this.a=d},
e1z:function e1z(d){this.a=d},
e1x:function e1x(d,e){this.a=d
this.b=e},
e1v:function e1v(d){this.a=d},
e1w:function e1w(){},
e1y:function e1y(d,e,f){this.a=d
this.b=e
this.c=f},
e1t:function e1t(d,e){this.a=d
this.b=e},
e1u:function e1u(){},
e1G:function e1G(d){this.a=d},
e1H:function e1H(d,e){this.a=d
this.b=e},
e1F:function e1F(){},
e1I:function e1I(d,e){this.a=d
this.b=e},
e1J:function e1J(d){this.a=d},
e1K:function e1K(d){this.a=d},
azm:function azm(d,e){this.c=d
this.a=e},
bbw:function bbw(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
cLP:function cLP(d){this.a=d},
bbv:function bbv(d,e){this.b=d
this.a=e},
cLO:function cLO(d){this.a=d},
azH:function azH(){},
azI:function azI(){},
aLT:function aLT(){},
bA9:function bA9(){},
itk(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bZ(A.vz,23)
$.S()
b8=B.L()
b8.r=A.as.gp(0)
b9.N(A.vz,25,b8)
b8=B.L()
b8.sav(D.eCn.aK(0,v))
b9.N(A.vz,23,b8)
for(u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
b8=Math.cos(t)
s=Math.sin(t)
r=Math.cos(t)
q=Math.sin(t)
p=new B.ao(A.P,A.M,A.R,A.S,A.Q)
p.r=A.bq.gp(0)
p.c=A.o.F(u,5)===0?1.8:1
b9.ah(new B.p(b8*17,s*17-2),new B.p(r*21,q*21-2),p)}o=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.j.D(o/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=B.L()
r.r=A.bD.gp(0)
r.c=2
r.d=A.bv
b9.ah(A.vz,new B.p(b8*18,s*18-2),r)
r=B.L()
r.r=A.bq.gp(0)
b9.N(A.vz,3,r)
c2.$5(b9,w?"V":"A",D.etn,A.bq,12)
c2.$5(b9,w?A.j.ad(o,1)+" V":""+A.j.V(o*1000)+" mA",D.esK,A.as,9.5)
return!0
case"fan":b8=B.bn(D.fam,A.hW)
$.S()
s=B.L()
s.r=A.bx.gp(0)
b9.an(b8,s)
s=B.L()
s.r=A.an.gp(0)
b9.ar(D.fbd,s)
s=B.L()
s.r=A.a_.j(0.6).gp(0)
b9.N(H.vA,22,s)
for(b8=b9.c,u=0;u<4;++u){J.bq(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.bt(A.aMh,18,10)
r=new B.ao(A.P,A.M,A.R,A.S,A.Q)
r.r=A.hA.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
b9.bZ(s,r)
b8.restore()}b8=B.L()
b8.r=A.br.gp(0)
b9.N(H.vA,4,b8)
b8=B.L()
b8.b=A.a9
b8.c=2
b8.r=A.cx.gp(0)
b9.N(H.vA,22,b8)
b8=B.L()
b8.b=A.a9
b8.c=0.8
b8.r=A.k_.gp(0)
b9.N(H.vA,14,b8)
return!0
case"speaker":n=B.bn(D.aSv,A.r6)
$.S()
b8=B.L()
b8.sav(D.atG.aK(0,new B.a1(n.a,n.b,n.c,n.d)))
b9.an(n,b8)
m=b7?Math.sin(c1*40)*1.6:0
b8=B.L()
b8.sav(D.eCI.aK(0,B.bZ(A.cz,15)))
b9.N(A.cz,14+m,b8)
b8=B.L()
b8.r=A.cW.gp(0)
b9.N(A.cz,5,b8)
b8=B.L()
b8.r=A.bh.gp(0)
b9.N(H.a8Z,5+m*0.4,b8)
if(b7)for(b8=c1*18,u=1;u<=3;++u){s=B.bZ(D.eq0,6+u*6+A.j.F(b8,6))
r=new B.ao(A.P,A.M,A.R,A.S,A.Q)
r.b=A.a9
r.c=1.8
r.r=A.bT.j(0.9-u*0.2).gp(0)
b9.cB(s,-0.8,1.6,!1,r)}return!0
case"clock":l=B.bn(D.fb4,A.r6)
$.S()
b8=B.L()
b8.sav(D.c9F.aK(0,new B.a1(l.a,l.b,l.c,l.d)))
b9.an(l,b8)
b8=B.bn(D.aSx,A.iF)
s=B.L()
s.r=A.ic.gp(0)
b9.an(b8,s)
if(b7){k=new B.V(Date.now(),0,!1)
j=B.FO(k)<500?":":" "
i=A.a.b_(A.o.v(B.df(k)),2,"0")
h=A.a.b_(A.o.v(B.fS(k)),2,"0")
b8=B.L()
b8.r=A.b4.j(0.12).gp(0)
b9.ar(D.aSx,b8)
c2.$5(b9,i+j+h,D.et5,A.b4,21)}b8=B.L()
b8.r=A.cx.gp(0)
b9.N(D.et3,2.4,b8)
b8=B.L()
b8.r=A.cx.gp(0)
b9.N(D.eq5,2.4,b8)
return!0
case"calculator":l=B.bn(D.faK,A.hX)
$.S()
b8=B.L()
b8.sav(D.c9n.aK(0,new B.a1(l.a,l.b,l.c,l.d)))
b9.an(l,b8)
b8=B.bn(D.faD,A.hE)
s=B.L()
s.r=(b7?A.ZX:D.btf).gp(0)
b9.an(b8,s)
if(b7)c2.$5(b9,"3.14159",D.esJ,A.YA,10.5)
for(g=0;g<4;++g)for(b8=-6+g*8,s=b8+6,f=0;f<4;++f){r=-15+f*8
r=B.bn(new B.a1(r,b8,r+6,s),A.UK)
$.S()
q=new B.ao(A.P,A.M,A.R,A.S,A.Q)
q.r=(f===3?A.c6:A.bP).gp(0)
b9.an(r,q)}return!0
case"phone":l=B.bn(D.fay,A.hX)
$.S()
b8=B.L()
b8.r=M.nB.gp(0)
b9.an(l,b8)
b8=B.L()
b8.b=A.a9
b8.c=1.9
b8.r=D.akT.gp(0)
b9.an(l,b8)
e=B.bn(D.fao,A.hW)
if(b7){b8=B.L()
b8.sav(D.caZ.aK(0,new B.a1(e.a,e.b,e.c,e.d)))
b9.an(e,b8)
b8=b9.c
J.bq(b8.save())
b8.clipRRect(B.nS(e),$.np(),!0)
b8.translate(-12,-25)
L.Me(b9,D.fhq,c1,b6)
b8.restore()
d=A.j.F(c1*0.12,1)
b8=B.bn(D.fal,A.hE)
s=B.L()
s.r=A.b6.gp(0)
b9.an(b8,s)
s=B.L()
s.r=A.b4.gp(0)
b9.ar(new B.a1(-10,14.5,-10+20*d,16.9),s)
c2.$5(b9,"\u26a1"+A.j.V(d*100)+"%",D.erM,A.c,6)}else{b8=B.L()
b8.r=D.wl.gp(0)
b9.an(e,b8)}b8=B.bn(D.fbt,D.eCQ)
s=B.L()
s.r=A.w.gp(0)
b9.an(b8,s)
return!0
case"router":l=B.bn(D.fb3,A.mw)
$.S()
b8=B.L()
b8.sav(D.c9W.aK(0,new B.a1(l.a,l.b,l.c,l.d)))
b9.an(l,b8)
for(a0=0;a0<2;++a0){a1=F.SP[a0]
b8=a1<0?-4:4
s=new B.ao(A.P,A.M,A.R,A.S,A.Q)
s.r=A.cm.gp(0)
s.c=4
s.d=A.bv
b9.ah(new B.p(a1,-4),new B.p(a1+b8,-28),s)}for(u=0;u<4;++u){if(b7)a2=A.o.F(A.j.bh(c1*(3+u*1.3)),2)===0||u===0
else a2=!1
b8=new B.ao(A.P,A.M,A.R,A.S,A.Q)
b8.r=(a2?A.be:A.aM).gp(0)
b9.N(new B.p(-15+u*10,11),2.6,b8)}if(b7)for(b8=c1*10,u=1;u<=3;++u){s=B.bZ(H.vA,8+u*6+A.j.F(b8,6))
r=new B.ao(A.P,A.M,A.R,A.S,A.Q)
r.b=A.a9
r.c=1.8
r.r=A.h0.j(0.9-u*0.2).gp(0)
b9.cB(s,-2.3,1.5,!1,r)}return!0
case"siren":a3=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bn(D.faJ,A.hW)
s=$.S()
r=B.L()
r.r=A.cQ.gp(0)
b9.an(b8,r)
if(b7){b8=B.L()
b8.r=A.ay.j(0.5*a3).gp(0)
b8.y=A.wF
b9.N(A.vz,34,b8)}a4=new B.aG(s.r,A.ai,b6,b6,B.a([],x.v))
a4.E(new B.aZ(-16,12))
a4.E(new B.aq(-16,-2))
a4.E(new B.c7(0,-30,16,-2))
a4.E(new B.aq(16,12))
a4.E(new B.bu())
b8=B.L()
b8.r=B.ar(A.em,D.bk4,a3).gp(0)
b9.af(a4,b8)
b8=B.L()
b8.b=A.a9
b8.c=1.4
b8.r=A.bW.gp(0)
b9.af(a4,b8)
if(b7){b8=b9.c
J.bq(b8.save())
b8.translate(0,-2)
b9.hW(0,c1*7)
s=B.L()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.ah(A.J,H.a8Z,s)
b8.restore()}return!0
case"toycar":a5=b7?Math.sin(c1*30)*0.8:0
b8=b9.c
J.bq(b8.save())
b8.translate(0,a5)
s=$.S().r
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
l.E(new B.bu())
q=B.L()
q.sav(D.c7X.aK(0,D.faX))
b9.af(l,q)
q=new B.aG(s,A.ai,b6,b6,B.a([],r))
q.E(new B.aZ(-8,-4))
q.E(new B.aq(-4,-13))
q.E(new B.aq(4,-13))
q.E(new B.aq(4,-4))
q.E(new B.bu())
p=B.L()
p.r=A.fM.gp(0)
b9.af(q,p)
r=new B.aG(s,A.ai,b6,b6,B.a([],r))
r.E(new B.aZ(8,-4))
r.E(new B.aq(8,-13))
r.E(new B.aq(11,-13))
r.E(new B.aq(15,-4))
r.E(new B.bu())
s=B.L()
s.r=A.fM.gp(0)
b9.af(r,s)
for(a0=0;a0<2;++a0){a1=F.aD3[a0]
s=new B.ao(A.P,A.M,A.R,A.S,A.Q)
s.r=A.as.gp(0)
b9.N(new B.p(a1,10),7.5,s)
J.bq(b8.save())
b8.translate(a1,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.ao(A.P,A.M,A.R,A.S,A.Q)
q.r=A.bP.gp(0)
q.c=1.6
b9.ah(A.J,new B.p(r*5.5,s*5.5),q)}b8.restore()}b8.restore()
if(b7)for(b8=c1*40,u=0;u<3;++u){s=A.j.F(b8+u*8,14)
r=-4+u*5
q=new B.ao(A.P,A.M,A.R,A.S,A.Q)
q.r=A.aF.gp(0)
q.c=1.6
b9.ah(new B.p(-34-s,r),new B.p(-42-s,r),q)}return!0
case"kettle":b8=$.S().r
s=x.v
l=new B.aG(b8,A.ai,b6,b6,B.a([],s))
l.E(new B.aZ(-18,20))
l.E(new B.aq(-14,-12))
l.E(new B.c7(0,-20,14,-12))
l.E(new B.aq(18,20))
l.E(new B.bu())
r=B.L()
r.sav(D.c92.aK(0,D.faI))
b9.af(l,r)
r=new B.aG(b8,A.ai,b6,b6,B.a([],s))
r.E(new B.aZ(14,-10))
r.E(new B.aq(30,-22))
r.E(new B.aq(32,-18))
r.E(new B.aq(16,-4))
r.E(new B.bu())
q=B.L()
q.r=A.e2.gp(0)
b9.af(r,q)
s=new B.aG(b8,A.ai,b6,b6,B.a([],s))
s.E(new B.aZ(-14,-8))
s.E(new B.c7(-34,-6,-18,12))
b8=B.L()
b8.b=A.a9
b8.c=5
b8.r=A.as.gp(0)
b9.af(s,b8)
b8=B.L()
if(b7){s=B.ar(A.cI,A.uu,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.cQ
b8.r=s.gp(0)
b9.ar(D.faH,b8)
if(b7){b8=B.L()
b8.r=A.cI.j(0.3).gp(0)
b8.y=A.mg
b9.N(A.aMf,24,b8)
for(b8=c1*0.9,u=0;u<4;++u){a6=A.j.F(b8+u*0.25,1)
s=Math.sin(a6*9+u)
r=new B.ao(A.P,A.M,A.R,A.S,A.Q)
r.r=A.c.j(0.6*(1-a6)).gp(0)
b9.N(new B.p(30+s*4,-26-a6*26),3+a6*5,r)}}b8=B.L()
b8.r=A.as.gp(0)
b9.N(D.ep3,3,b8)
return!0
case"lamp":if(b7){u=A.j.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aG($.S().r,A.ai,b6,b6,B.a([],x.v))
b8.E(new B.aZ(-10,-14))
b8.E(new B.aq(-30,24))
b8.E(new B.aq(10,24))
b8.E(new B.aq(8,-14))
b8.E(new B.bu())
s=B.L()
s.r=A.dC.j(0.28*u).gp(0)
b9.af(b8,s)
s=B.L()
s.r=A.dC.j(0.5*u).gp(0)
s.y=U.OC
b9.N(D.et9,24,s)}b8=B.bn(D.fbm,A.hW)
s=$.S()
r=B.L()
r.r=A.cQ.gp(0)
b9.an(b8,r)
r=B.L()
r.r=A.cW.gp(0)
r.c=3
r.d=A.bv
b9.ah(D.epj,D.aMs,r)
r=B.L()
r.r=A.cW.gp(0)
r.c=3
r.d=A.bv
b9.ah(D.aMs,D.eta,r)
a7=new B.aG(s.r,A.ai,b6,b6,B.a([],x.v))
a7.E(new B.aZ(-14,-16))
a7.E(new B.aq(6,-26))
a7.E(new B.aq(10,-12))
a7.E(new B.aq(-10,-6))
a7.E(new B.bu())
s=B.L()
s.r=(b7?A.aQ:A.ku).gp(0)
b9.af(a7,s)
b8=B.L()
b8.r=(b7?A.c:A.bh).gp(0)
b9.N(D.etd,4,b8)
return!0
case"lights":b8=$.S().r
s=x.v
a8=new B.aG(b8,A.ai,b6,b6,B.a([],s))
a8.E(new B.aZ(-34,-6))
a8.E(new B.c7(0,22,34,-6))
r=B.L()
r.b=A.a9
r.c=2
r.r=A.hx.gp(0)
b9.af(a8,r)
for(r=c1*2.4,u=0;u<5;++u){a9=(u+0.5)/5
q=-34+68*a9
p=-6+4*a9*(1-a9)*4*4.2/1*0.75+0
b0=b7&&A.j.F(r+u*0.7,1.8)<1.1
if(b0){b1=new B.ao(A.P,A.M,A.R,A.S,A.Q)
b1.r=D.a5I[u].j(0.6).gp(0)
b1.y=A.Hb
b9.N(new B.p(q+0,p+6),12,b1)}b1=B.a([],s)
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
q=new B.c7(q,p+17,q-5,b3)
b1.push(q)
p=b2.f
if(p!=null)q.ak(p)
b2.ab()
q=new B.bu()
b1.push(q)
p=b2.f
if(p!=null)q.ak(p)
b2.ab()
q=new B.ao(A.P,A.M,A.R,A.S,A.Q)
if(b0)p=D.a5I[u]
else{p=B.ar(D.a5I[u],A.w,0.65)
p.toString}q.r=p.gp(0)
b9.af(b2,q)}return!0}return C.iti(b9,c0,c1,c2)},
fT:function fT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hgC(d){var w=D.mt.h(0,d)
return(w==null?null:w.b)===D.AG},
iuz(d,e,f){return B.a6(d,!1).ce(B.vl(null,!1,!0,!0,new C.h1g(e,f),A.eV,null,A.pr,new C.h1h(),x.H))},
Kl:function Kl(d,e){this.a=d
this.b=e},
mx:function mx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h1g:function h1g(d,e){this.a=d
this.b=e},
h1h:function h1h(){},
W9:function W9(d,e,f){this.c=d
this.d=e
this.a=f},
bmc:function bmc(d,e){var _=this
_.d=$
_.e=null
_.bw$=d
_.a9$=e
_.c=_.a=null},
dYC:function dYC(d){this.a=d},
dYB:function dYB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dYz:function dYz(){},
dYA:function dYA(d){this.a=d},
dYy:function dYy(d){this.a=d},
dYx:function dYx(d,e){this.a=d
this.b=e},
dYw:function dYw(d,e){this.a=d
this.b=e},
dYv:function dYv(d){this.a=d},
dYu:function dYu(d){this.a=d},
dYq:function dYq(d){this.a=d},
dYp:function dYp(d){this.a=d},
dYt:function dYt(d,e,f){this.a=d
this.b=e
this.c=f},
dYs:function dYs(d){this.a=d},
dYr:function dYr(d){this.a=d},
byb:function byb(d,e,f){this.b=d
this.c=e
this.a=f},
ag0:function ag0(d,e,f){this.b=d
this.c=e
this.a=f},
aNH:function aNH(){},
a2d(d,e,f,g,h,i){return new C.bwY(d,e,f,g,h,i)},
bwY:function bwY(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ftX:function ftX(){},
ftY:function ftY(){},
ftZ:function ftZ(){},
fu_:function fu_(){},
fu0:function fu0(){},
fu1:function fu1(){},
fu2:function fu2(){},
fu3:function fu3(){},
a9E:function a9E(d){this.a=d},
cn7:function cn7(d){this.a=d},
cn8:function cn8(){},
cn6:function cn6(d,e){this.a=d
this.b=e},
cn5:function cn5(d){this.a=d},
XM:function XM(d){this.a=d},
aGR:function aGR(d,e,f,g,h,i,j,k){var _=this
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
eVg:function eVg(d){this.a=d},
eVc:function eVc(d){this.a=d},
eVb:function eVb(d,e){this.a=d
this.b=e},
eVe:function eVe(d,e){this.a=d
this.b=e},
eVd:function eVd(d,e){this.a=d
this.b=e},
eVf:function eVf(d){this.a=d},
byn:function byn(d,e,f){this.b=d
this.c=e
this.a=f},
Wy:function Wy(d){this.a=d},
bmn:function bmn(d,e,f,g,h,i){var _=this
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
e4r:function e4r(){},
e4s:function e4s(){},
e4m:function e4m(d,e){this.a=d
this.b=e},
e4o:function e4o(d,e){this.a=d
this.b=e},
e4p:function e4p(d){this.a=d},
e4n:function e4n(d){this.a=d},
e4q:function e4q(d){this.a=d},
bt3:function bt3(d,e,f){this.b=d
this.c=e
this.a=f},
VJ:function VJ(d){this.a=d},
blW:function blW(d,e,f,g,h,i){var _=this
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
dPU:function dPU(){},
dPV:function dPV(){},
dPP:function dPP(){},
dPS:function dPS(d,e){this.a=d
this.b=e},
dPR:function dPR(d,e){this.a=d
this.b=e},
dPT:function dPT(d){this.a=d},
dPQ:function dPQ(d){this.a=d},
aKi:function aKi(d,e,f){this.a=d
this.b=e
this.c=f},
Wp:function Wp(d){this.a=d},
bme:function bme(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
e0X:function e0X(d,e){this.a=d
this.b=e},
e0Y:function e0Y(d){this.a=d},
e0W:function e0W(d,e){this.a=d
this.b=e},
e0Z:function e0Z(d){this.a=d},
e0V:function e0V(d,e){this.a=d
this.b=e},
e1_:function e1_(d){this.a=d},
e0U:function e0U(d,e){this.a=d
this.b=e},
e10:function e10(d,e){this.a=d
this.b=e},
e0T:function e0T(d,e){this.a=d
this.b=e},
e11:function e11(d){this.a=d},
e0S:function e0S(d,e){this.a=d
this.b=e},
e12:function e12(d){this.a=d},
e0R:function e0R(d){this.a=d},
e13:function e13(d){this.a=d},
e0Q:function e0Q(d){this.a=d},
e14:function e14(d){this.a=d},
e15:function e15(d){this.a=d},
e0P:function e0P(d){this.a=d},
bog:function bog(d,e,f){this.b=d
this.c=e
this.a=f},
X8:function X8(d){this.a=d},
aG9:function aG9(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
erW:function erW(d,e){this.a=d
this.b=e},
erX:function erX(d,e,f){this.a=d
this.b=e
this.c=f},
erV:function erV(d,e,f){this.a=d
this.b=e
this.c=f},
erY:function erY(d){this.a=d},
erU:function erU(d){this.a=d},
es1:function es1(d){this.a=d},
es0:function es0(d,e){this.a=d
this.b=e},
es_:function es_(d,e){this.a=d
this.b=e},
es2:function es2(d,e){this.a=d
this.b=e},
erZ:function erZ(d,e){this.a=d
this.b=e},
es3:function es3(d){this.a=d},
Xi:function Xi(d){this.a=d},
aGu:function aGu(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eCI:function eCI(d){this.a=d},
eCJ:function eCJ(d){this.a=d},
eCG:function eCG(d,e){this.a=d
this.b=e},
eCH:function eCH(d){this.a=d},
eCF:function eCF(d){this.a=d},
eCK:function eCK(d){this.a=d},
eCL:function eCL(d){this.a=d},
eCM:function eCM(d){this.a=d},
eCN:function eCN(d,e){this.a=d
this.b=e},
XD:function XD(d){this.a=d},
bnu:function bnu(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eQK:function eQK(){},
eQT:function eQT(){},
eQP:function eQP(d){this.a=d},
eQO:function eQO(){},
eQQ:function eQQ(d,e){this.a=d
this.b=e},
eQN:function eQN(d,e){this.a=d
this.b=e},
eQR:function eQR(d){this.a=d},
eQM:function eQM(d,e){this.a=d
this.b=e},
eQS:function eQS(d){this.a=d},
eQL:function eQL(d){this.a=d},
X7:function X7(d){this.a=d},
bmZ:function bmZ(d,e,f,g,h,i,j,k){var _=this
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
eqB:function eqB(){},
eqC:function eqC(){},
equ:function equ(d){this.a=d},
eqt:function eqt(d){this.a=d},
eqv:function eqv(d){this.a=d},
eqs:function eqs(d){this.a=d},
eqw:function eqw(d){this.a=d},
eqr:function eqr(d){this.a=d},
eqx:function eqx(d,e){this.a=d
this.b=e},
eqq:function eqq(d,e){this.a=d
this.b=e},
eqy:function eqy(d){this.a=d},
eqp:function eqp(d,e){this.a=d
this.b=e},
eqz:function eqz(d){this.a=d},
eqo:function eqo(d,e){this.a=d
this.b=e},
eqA:function eqA(d){this.a=d},
eqn:function eqn(d,e){this.a=d
this.b=e},
bfO:function bfO(d,e,f){this.c=d
this.d=e
this.a=f},
aNt:function aNt(){},
bA5:function bA5(){},
aNO:function aNO(){},
bAb:function bAb(){},
aOg:function aOg(){},
bAk:function bAk(){},
aOH:function aOH(){},
bAt:function bAt(){},
JR(d,e,f,g){var w,v,u,t,s,r,q,p=$.atH
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.I)(e),++w)E.mv(d,e[w],f,g)
return}for(p=B.cX(e,0,B.dB(4,"count",x.S),B.U(e).c),v=p.$ti,p=new B.bR(p,p.gJ(0),v.k("bR<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)E.mv(d,s,f,g)
else B.bO(new B.bd(1000*q),new C.cn3(d,s,f,g),u)}},
ckC(d){return C.hZ8(d)},
hZ8(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ckC=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$ckC)
case 7:r=f
q=B.aV(J.t(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.T(x.N,x.z)
w=1
break}p=A.X.aP(0,q,null)
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
return B.i($async$ckC,v)},
b3t(d,e){return C.hZ9(d,e)},
hZ9(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b3t=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$b3t)
case 6:s=g
w=7
return B.b(s.aD("String","ngmy_play_progress_v1_"+d,A.X.aw(e,null)),$async$b3t)
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
return B.i($async$b3t,v)},
cn3:function cn3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ijL(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.T(x.Y,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.x)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.I)(w),++q){p=w[q]
u.push(B.J(["k",p.b,"x",B.or(A.j.ad(p.c,4)),"y",B.or(A.j.ad(p.d,4)),"v",p.e,"l",B.or(A.j.ad(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.or(A.j.ad(p.as,3)),"ch",p.at,"vc",B.or(A.j.ad(p.z,3)),"s",B.or(A.j.ad(p.ch,2))],s,r))}w=B.a([],x.U)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.I)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.C(f,B.a4(f).k("ci.E"))
A.d.fg(l)
return A.X.aw(B.J(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
itJ(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.X.aP(0,a7,a5)
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
if(!$.qH().am(0,s)){J.c5(v,null)
continue}d=s
a0=B.aJ(J.t(t,"x"))
if(a0==null)a0=0.5
a1=B.aJ(J.t(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.u1(a2,d,a0,a1)
a3.asd(a2,d,a0,a1)
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
d=B.k7(J.t(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.k7(J.t(t,"b"))
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
if(m!=null&&l!=null)a6.am9(m,A.j.M(B.dD(J.t(p,1))),l,A.j.M(B.dD(J.t(p,3))))}i=B.aJ(J.t(w,"challenge"))
i=A.j.M(i==null?0:i)
k=B.aR(x.S)
h=g.a(J.t(w,"done"))
h=J.aT(h==null?A.cs:h)
while(h.C()){j=h.gR(h)
J.c5(k,A.j.M(B.dD(j)))}return new B.brd(i,k)}catch(a4){return a5}},
fKW(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fKW=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.aA(),$async$fKW)
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
return B.i($async$fKW,v)},
bGR(d){return C.ivm(d)},
ivm(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bGR=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.aA(),$async$bGR)
case 7:w=6
return B.b(f.aD("String","ngmy_electronics_lab_v1",d),$async$bGR)
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
return B.i($async$bGR,v)}},D,Q,Ak,L,F,M,H,Al,X,Am,Y,A1,An
J=c[1]
B=c[0]
A=c[2]
A2=c[120]
Z=c[146]
A3=c[152]
A_=c[150]
S=c[143]
A4=c[135]
A5=c[154]
A6=c[162]
A7=c[107]
A8=c[138]
A0=c[119]
N=c[145]
A9=c[160]
Aa=c[153]
Ab=c[156]
Ac=c[76]
U=c[141]
T=c[85]
O=c[130]
Ad=c[88]
Ae=c[136]
V=c[144]
W=c[155]
E=c[29]
I=c[3]
G=c[38]
K=c[109]
Af=c[103]
Ag=c[161]
P=c[159]
Ah=c[102]
Ai=c[157]
R=c[131]
Aj=c[158]
C=a.updateHolder(c[18],C)
D=c[140]
Q=c[148]
Ak=c[26]
L=c[28]
F=c[100]
M=c[98]
H=c[142]
Al=c[67]
X=c[149]
Am=c[57]
Y=c[111]
A1=c[151]
An=c[147]
C.alm.prototype={}
C.WS.prototype={
S(){return new C.bmN(B.T(x.N,x.i),new B.au(A.ax,$.ax()),B.a([],x.X),B.a([],x.eZ),B.mZ(0,null,null))}}
C.bmN.prototype={
gX5(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
t(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
this.ch.t()
this.a3()},
PU(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$PU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aU.ap$.d.c
if(s!=null)s.js()
p.bP(0,A.cg)
t.m(new C.ejH(t))
t.a.toString
p=t.gX5()
w=3
return B.b(C.bCn(C.i7a(q,C.ijw(p),o,t.ay)),$async$PU)
case 3:s=e
r=s==null?null:J.j0(s)
if(r==null||r.length===0||A.a.a_(r,"{"))r=C.il2(q,p,o)
if(t.c==null){w=1
break}t.m(new C.ejI(t,o,r))
$.aU.x1$.push(new C.ejJ(t))
case 1:return B.h(u,v)}})
return B.i($async$PU,v)},
Zc(d){return this.c3p(d)},
aYE(){return this.Zc(null)},
c3p(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Zc=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aU.ap$.d.c
if(s!=null)s.js()
t.f.sb1(0,o)
t.m(new C.ejU(t))
G.dF(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bCn(C.iey(o)),$async$Zc)
case 3:r=n.a=m.ito(f)
p.b=""
if(r!=null&&!C.ijx(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.il3(o)
q=B.ag(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.alm(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new C.ejV(p,t))
t.c9_(p.a)
case 1:return B.h(u,v)}})
return B.i($async$Zc,v)},
c9_(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
A.d.a8(w)
w=++m.as
v=m.gX5()
A.d.a8(v.a)
A.d.a8(v.b)
m.e.a8(0)
m.m(new C.ejQ(m))
t=d.d
s=B.T(x.N,x.Y)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.ejO(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.ejR(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.I)(r),++u){p.$2(o,new C.ejS(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.ejT(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bc.j(0.1),g=B.l(16),f=B.K(A.bc.j(0.35),A.r,1)
if(m.x)j=B.A(B.a([D.fiY,A.bd,B.E(B.d(m.Q,l,l,l,l,l,l,A.AT,l,l,l),1)],x.p),A.l,l,A.e,A.i,0,l,l)
else if(k==null)j=D.fKb
else{w=B.E(B.d(k.a,l,l,l,l,l,l,A.KZ,l,l,l),1)
v=x.p
w=B.a([B.A(B.a([w,B.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fu8,l,l,l)],v),A.l,l,A.e,A.i,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.D(A.uE,B.d(u,l,l,l,l,l,l,D.fwZ,l,l,l),l))
w.push(A.cR)
w.push(B.d(k.b,l,l,l,l,l,l,K.L1,l,l,l))
u=k.e
if(u.length!==0){t=A.aQ.j(0.12)
s=B.l(10)
w.push(B.r(l,B.d(u,l,l,l,l,l,l,D.fzz,l,l,l),A.f,l,l,new B.o(t,l,l,s,l,l,A.n),l,l,l,A.i2,A.cq,l,l,l))}w.push(A.am)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
t=B.d(t,l,l,l,l,l,l,A.lY,l,l,l)
q=u[r]
s=s?A.c:A.aF
w.push(new B.D(A.O5,new B.c8(A.aL,A.e,A.i,A.E,l,A.p,l,0,B.a([t,A.bo,new B.bz(1,A.bb,B.d(q,l,l,l,l,l,l,new B.F(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.I)(j),++p){o=j[p]
t=A.bc.j(0.3)
s=new B.aO(12,12)
s=B.r(l,B.d(o.a,l,l,l,l,l,l,A.VI,l,l,l),A.f,l,l,new B.o(t,l,l,new B.be(s,s,s,s),l,l,A.n),l,l,l,l,A.hj,l,l,l)
t=A.c.j(0.07)
q=new B.aO(12,12)
A.d.u(w,B.a([A.T,new B.bL(A.aa,l,l,s,l),A.aw,B.r(l,B.d(o.b,l,l,l,l,l,l,D.fFp,l,l,l),A.f,l,l,new B.o(t,l,l,new B.be(q,q,q,q),l,l,A.n),l,l,l,l,A.bV,l,l,l)],v))}if(m.ax)w.push(D.euG)
j=B.cb(B.x(w,A.E,l,A.e,A.i,0,A.p),A.t,m.ch,A.y,l,l,l,l,A.ah)}w=x.p
g=B.x(B.a([B.ajA(B.r(l,j,A.f,l,new B.aY(0,1/0,0,i),new B.o(h,l,f,g,l,l,A.n),l,l,l,D.bD3,A.ez,l,l,1/0),A.b_,A.iA),B.E(C.hly(m.gX5(),l,l,m.e),1)],w),A.l,l,A.e,A.i,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new E.dX("Ask about it",i,new C.ejY(m),l,A.bc,l),new E.dX("Invent something new",!i,new C.ejZ(m),l,A.bc,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dw1[p]
i.push(new E.dX(n,!1,new C.ek_(m,n),l,A.bc,l))}f.push(new E.fd(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.ddI[p]
i.push(new E.dX(r,!1,new C.ek0(m,r),l,A.bc,l))}f.push(new E.fd(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aM(l,A.Z,!1,l,!0,A.t,l,B.aP(),m.f,l,l,l,l,l,2,B.bA(l,new B.b6(4,B.l(16),A.a1),l,A.eW,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kk,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.ek1(m,k),l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,A.dk,!0,A.a5,l,A.ao,l,A.Vx,l,l),1)
h=m.at
v=h&&j?D.bT4:A.ed
j=h&&j?"Ask":"Invent"
f.push(B.A(B.a([i,A.af,new E.fE(v,j,new C.ek2(m,k),A.bc,l)],w),A.l,l,A.e,A.i,0,l,l))
return E.lD(A.bc,A.f7,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.x(f,A.l,l,A.e,A.O,0,A.p))}}
C.GZ.prototype={}
C.vs.prototype={}
C.Xe.prototype={
S(){return new C.aGo(A.J,A.J,A.az,B.aR(x.S),$,A.bF,0,B.a([],x.X),null,null)}}
C.aGo.prototype={
gaZX(){var w,v,u,t=this,s=D.Iz[t.cx],r=D.SR[t.cy],q=D.DF[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.dZ(w,w.r,B.a4(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.aBi[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cF(p,0,new C.ez1())},
ga3E(){return D.Iz[this.cx].d/this.gaZX()},
gaQT(){return 0.1*(D.Iz[this.cx].d/0.9)/D.SR[this.cy].d},
Y(){this.a4()
this.mh()
C.ckC("rocket_lander").bG(new C.ezl(this),x.k)},
c98(){var w=this
w.ay=A.j.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cS.ai()*0.6
w.f=new B.p(0.15+A.cS.ai()*0.7,0.08)
w.r=new B.p((A.cS.ai()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
mA(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new C.ezm())
return}w=D.tp[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.j.D(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.p(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga3E()
v=v.a2(0,new B.p(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaQT())}if(m.dy){t=m.r
v=v.aJ(0,t.aM(0,t.gcK()*6*D.aDn[m.d]))}t=m.r=m.r.a2(0,v.aM(0,d))
s=m.f=m.f.a2(0,t.aM(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new B.p(-t.a*0.4,t.b)
t=new B.p(A.j.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new B.p(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.DF[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b3t("rocket_lander",B.J(["unlocked",t],x.N,x.z))
C.JR("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga3E()/(D.tp[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.j.ad(m.ga3E()/(D.tp[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
G.dF(80,"",500,0,0.6,"noise")
B.fN()}}if(m.Q&&m.x>0&&A.o.F(A.j.bh(m.CW*20),2)===0)G.dF(90,"",70,0,0.12,"noise")
m.m(new C.ezn())},
ahe(d,e,f,g,h){var w,v=null,u=B.d(d,v,v,v,v,v,v,D.fws,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new E.dX(e[w].a,f.$1(w),new C.ez3(this,g,w),v,h,v))
return new B.D(A.eP,B.x(B.a([u,A.cR,B.bX(A.bH,s,A.bt,v,6,6)],t),A.E,v,A.e,A.i,0,A.p),v)},
bI9(d){var w,v,u,t,s=this,r=null,q=s.ga3E()/(D.tp[s.d].b/9.81*0.28)>=1,p=A.j.V(1/s.gaQT()),o=D.aDn[s.d],n=B.l(24),m=d.c,l=B.K(m.j(0.6),A.r,1)
m=B.a([B.d("Build a rocket for "+d.a,r,r,r,r,r,r,B.m(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.aw,B.d(d.d+" Gravity here: "+B.w(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.abM,r,r,r),A.W,s.ahe("ENGINE: "+D.Iz[s.cx].b,D.Iz,new C.eyT(s),new C.eyU(s),A.cI),s.ahe("FUEL TANK: "+D.SR[s.cy].b,D.SR,new C.eyV(s),new C.eyW(s),A.b4),s.ahe("LANDING GEAR: "+D.DF[s.db].b,D.DF,new C.eyX(s),new C.eyY(s),A.aG),s.ahe("EXTRAS (tap to add)",D.aBi,new C.eyZ(s),new C.ez_(s),A.bc)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.h2b)
o=(q?A.b4:A.bZ).j(0.14)
w=B.l(12)
v=A.j.ad(s.gaZX(),2)
u=A.j.ad(s.ga3E()/(D.tp[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.r(r,B.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.j.V(D.DF[s.db].d*100)+".",r,r,r,r,r,r,D.fx7,r,r,r),A.f,r,r,new B.o(o,r,r,w,r,r,A.n),r,r,r,A.i2,A.bV,r,r,r))
m.push(A.W)
m.push(new B.bL(A.A,r,r,new E.fE(A.oM,"Launch",new C.ez0(s),A.b4,r),r))
return B.as(B.r(r,B.cb(B.x(m,A.E,r,A.e,A.O,0,A.p),A.t,r,A.y,r,A.bS,r,r,A.ah),A.f,r,A.m2,new B.o(D.bsM,r,l,n,r,r,A.n),r,r,r,A.bV,r,r,r,r),r,r,r)},
b08(d,e,f,g){var w=null,v=f?A.cI:A.c.j(0.1),u=B.l(18),t=B.K(A.aT,A.r,1)
return B.mP(A.iS,B.r(w,B.X(d,A.c,w,w,w,30),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new C.eyQ(e),new C.eyR(e),w,w,w,w,new C.eyS(e))},
b07(d,e,f){return this.b08(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.co(new C.eze(s,D.tp[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.tp[w].a:"\ud83d\udd12"
o.push(new E.dX(v,s.d===w,new C.ezf(s,w),r,D.tp[w].c,r))}v=B.a([s.b07(F.aqW,new C.ezg(s),s.y),A.bd,s.b08(A.v0,new C.ezh(s),s.Q,130),A.bd,s.b07(A.PT,new C.ezi(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?A.aG:A.c.j(0.1)
t=B.l(18)
A.d.u(v,B.a([A.bd,B.az(r,B.r(r,D.bXj,A.f,r,r,new B.o(u,r,B.K(A.aT,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.ezj(s),r,r,r,r,r,r,!1,A.a4)],p))}return E.lD(A.cI,A.f7,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.x(B.a([new E.fd(o,"WORLD",r),B.A(v,A.l,r,A.ba,A.i,0,r,r)],p),A.l,r,A.e,A.O,0,A.p))}}
C.bjG.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=this.b,l=D.tp[m.d],k=a1.a,j=a1.b,i=0+k,h=0+j,g=$.S(),f=B.L(),e=l.c,d=B.ar(I.a_w,e,0.25)
d.toString
f.sav(new B.a8(A.b0,A.b7,A.x,B.a([F.ahQ,d],x.O),n,n).aK(0,new B.a1(0,0,i,h)))
a0.ar(new B.a1(0,0,i,h),f)
w=new B.e3()
w.cY(5)
for(v=0;v<70;++v){i=w.ai()
h=w.ai()
f=w.ai()
d=new B.ao(A.P,A.M,A.R,A.S,A.Q)
d.r=A.c.j(0.2+w.ai()*0.5).gp(0)
a0.N(new B.p(i*k,h*j*0.8),f*1.2+0.3,d)}u=j*0.88
i=x.v
h=B.a([],i)
t=new B.aG(g.r,A.ai,n,n,h)
t.E(new B.aZ(0,u+14))
s=new B.e3()
s.cY(2)
for(r=0;r<=k;r+=18){g=new B.aq(r,u+(Math.abs(r/k-m.ax)<m.ay/2+0.02?14:14-s.ai()*18))
h.push(g)
f=t.f
if(f!=null)g.ak(f)
t.ab()}t.E(new B.aq(k,j))
t.E(new B.aq(0,j))
t.E(new B.bu())
h=$.S()
g=B.L()
g.r=B.ar(e,A.w,0.6).gp(0)
a0.af(t,g)
q=B.bt(new B.p(m.ax*k,u+10),8,m.ay*k)
g=B.bn(q,A.iF)
e=B.L()
e.r=A.be.gp(0)
a0.an(g,e)
e=B.bn(q.cn(2),A.mw)
g=B.L()
g.b=A.a9
g.c=2
g.r=A.c.j(0.5+0.3*Math.sin(m.CW*4)).gp(0)
a0.an(e,g)
if(m.as==="ready")return
g=m.f
f=a0.c
J.bq(f.save())
f.translate(g.a*k,g.b*j)
a0.hW(0,m.w)
k=m.as
if(k==="crashed"){m=B.L()
m.r=A.cI.j(0.6).gp(0)
m.y=U.OC
a0.N(A.J,34,m)
f.restore()
return}if(m.Q&&m.x>0&&k==="flying"){k=h.r
p=new B.aG(k,A.ai,n,n,B.a([],i))
p.E(new B.aZ(-8,18))
p.E(new B.aq(0,44+Math.sin(m.CW*40)*8))
p.E(new B.aq(8,18))
p.E(new B.bu())
m=B.L()
m.r=A.aQ.gp(0)
a0.af(p,m)
k=new B.aG(k,A.ai,n,n,B.a([],i))
k.E(new B.aZ(-4,18))
k.E(new B.aq(0,32))
k.E(new B.aq(4,18))
k.E(new B.bu())
m=B.L()
m.r=A.c.gp(0)
a0.af(k,m)}m=h.r
o=new B.aG(m,A.ai,n,n,B.a([],i))
o.E(new B.aZ(0,-26))
o.E(new B.c7(14,-10,11,18))
o.E(new B.aq(-11,18))
o.E(new B.c7(-14,-10,0,-26))
o.E(new B.bu())
k=B.L()
k.sav(D.c9x.aK(0,D.fav))
a0.af(o,k)
k=B.L()
k.r=A.aG.gp(0)
a0.N(H.vA,5,k)
k=new B.aG(m,A.ai,n,n,B.a([],i))
k.E(new B.aZ(-11,6))
k.E(new B.aq(-20,20))
k.E(new B.aq(-11,18))
k.E(new B.bu())
j=B.L()
j.r=A.ay.gp(0)
a0.af(k,j)
i=new B.aG(m,A.ai,n,n,B.a([],i))
i.E(new B.aZ(11,6))
i.E(new B.aq(20,20))
i.E(new B.aq(11,18))
i.E(new B.bu())
m=B.L()
m.r=A.ay.gp(0)
a0.af(i,m)
f.restore()},
aE(d){return!0}}
C.aOo.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bAm.prototype={
t(){var w,v,u
for(w=this.h8$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h7$
w===$&&B.c()
w.t()
this.bA3()}}
C.aUt.prototype={}
C.a4y.prototype={}
C.bcC.prototype={}
C.VI.prototype={
S(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.et(["skin"],x.N),o=new Float32Array(0)
return new C.aER(w,v,u,t,s,r,q,new B.cw(null,x.A),p,D.M0,D.M0,A.az,A.cS,o,new Int32Array(0),$,A.bF,0,B.a([],x.X),null,null)}}
C.aER.prototype={
Y(){var w=this
w.a4()
w.mh()
w.as=new C.c6X(w.gci3())
new C.dPN(w).$0()
return},
t(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a1(0)
v.d=null}this.bz5()},
ci4(d){var w,v=this
if(v.c==null)return
w=J.a7(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.fa(0,B.J(["t","init","data",$.hvJ],x.N,x.z))
v.at=!0
v.ay=""
v.aB1()
break
case"parts":v.m(new C.dPn(v))
break
case"pick":v.m(new C.dPo(v,d))
break
case"shot":v.aj8(B.w(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+B.w(w.h(d,"text")))
if(v.c!=null&&!v.ax)v.m(new C.dPp(v))
break}},
aB1(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.az9[q.cx]
v=new C.dPq()
u=q.ch
u=B.C(u,B.a4(u).k("ci.E"))
A.d.fg(u)
t=x.N
s=B.J(["layers",u,"skinMode",q.CW,"tone","#"+B.w(v.$1(w.b))+B.w(v.$1(w.c))+B.w(v.$1(w.d)),"sel",q.cy,"bpm",A.j.V(q.k4),"spin",q.go],t,x.cK)
r=A.X.aw(s,null)
if(r===q.ay)return
q.ay=r
v=q.as
if(v!=null){u=B.T(t,x.z)
u.n(0,"t","state")
u.u(0,s)
v.fa(0,u)}},
aj8(d){return this.cz4(d)},
cz4(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aj8=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cM.aO(A.a.b2(d,A.a.co(d,",")+1))
w=6
return B.b(B.ax8(B.a([B.cH_(r,"image/png","body.png")],x.fH),null,"Made in NGMY Core Protocol"),$async$aj8)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.L(x.gV).f.T(I.aUR)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aj8,v)},
aAq(d){var w=d.b
if(w==="skin")return this.CW>0
return this.ch.q(0,w)},
mA(d){var w,v=this
if(v.d==null)return
w=(v.k3+=d)*v.k4/60
if(v.ok&&v.ch.q(0,"organ")&&A.j.bh(w)!==A.j.bh(v.p1)){E.XF("kick",0,0.4)
v.UL(170,new C.dPO())}v.p1=w
return},
aeL(d){var w,v,u,t,s=this
s.m(new C.dPr(s,d))
if(d==null){s.fy=D.M0
s.fr=1
w=s.as
if(w!=null)w.fa(0,B.J(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.U(w).k("Y<1>")
u=B.C(new B.Y(w,new C.dPs(d),v),v.k("M.E"))
t=A.d.gH(u).b
if(t!=="skin"&&!s.ch.q(0,t)){s.ch.I(0,t)
if(s.CW===2)s.CW=1}s.aB1()
w=s.as
if(w!=null)w.fa(0,B.J(["t","focus","group",d],x.N,x.z))
s.id=0
s.cBy(t,d)
return},
cBy(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){E.XF("kick",0,0.8)
this.UL(260,new C.dPt())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")G.dF(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.UL(w*70,new C.dPu(this))
else if(A.a.q(e,"intestine")||e==="Stomach")G.dF(110,"",360,0.7,0.3,"saw")
else E.haT("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":G.dF(210+e.length*4,"",80,0.6,0.55,"tri")
G.dF(2400,"",20,0,0.3,v)
break
case"muscle":G.dF(70,"",150,1,0.6,"sine")
break
case"vessel":G.dF(300,"",380,0.4,0.22,v)
E.XF("kick",0,0.3)
break
default:E.haT("organic",2+A.o.F(e.length,6),200,0.4)}},
cGc(d){this.m(new C.dPw(this,d))},
b0q(){var w,v,u,t,s,r,q,p=this,o=B.aR(x.N)
for(w=p.d.e,v=w.length,u=p.ch,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
if(p.aAq(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.I(0,s.a)}q=B.C(o,o.$ti.k("ci.E"))
w=q.length
if(w===0)return
p.p3=q[p.RG.az(w)]
p.R8=""},
c_4(d){var w,v,u=this
u.id=0
if(u.p2&&u.p3!=null){if(d==null)return
w=d===u.p3
u.m(new C.dPk(u,w,d))
v=x.t
C.JR("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.UL(1100,new C.dPl(u))
return}if(d==null){if(u.cy!=null)u.aeL(null)
return}u.aeL(d)},
c2H(d,e){var w,v=this,u=null,t=B.l(18),s=B.K(A.bT.j(0.5),A.r,1)
if(v.p2){w=v.p3
w=B.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p4+"\n"+v.R8,u,u,u,u,u,u,D.fsv,u,u,u)}else if(d==null||e==null)w=D.fHz
else{w=x.p
w=B.A(B.a([B.E(B.x(B.a([B.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hu,u,u,u),A.cR,B.d(e.b,u,u,u,u,u,u,K.L1,u,u,u)],w),A.E,u,A.e,A.O,0,A.p),1),B.aI(u,u,u,u,D.bZU,u,u,u,new C.dPm(v),u,u,u,u,"Back to the whole body",A.ch)],w),A.E,u,A.e,A.i,0,u,u)}return B.r(u,w,A.f,u,u,new B.o(I.YJ,u,s,t,u,u,A.n),u,u,u,u,S.amm,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:D.dHk.h(0,g)
i.aB1()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.dob
u=v.length
t=i.ch
s=0
for(;s<v.length;v.length===u||(0,B.I)(v),++s){r=v[s]
if(i.aAq(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.q(w,q))w.push(q)}v=x.p
u=B.a([B.aI(h,h,h,h,I.oP,h,h,h,new C.dPD(i),h,h,h,h,"Share",h)],v)
q=B.a([],v)
p=i.as
if((p==null?h:p.b!=null)===!0){p=p.b
q.push(p==null?A.bM:B.C0(h,A.pR,p))}p=i.ax
o=p?0:1
q.push(new B.du(p,B.zo(B.r(A.A,B.x(D.dxB,A.l,h,A.e,A.O,0,A.p),A.f,h,h,D.b7J,h,h,D.huF,h,h,h,h,h),A.b_,A.n0,o),h))
q=B.x(B.a([B.E(new B.an(A.a0,h,A.b2,A.t,q,h),1),new B.D(F.a0D,i.c2H(g,f),h)],v),A.l,h,A.e,A.i,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){n=D.dfl[s]
o=n.a
m=o==="skin"
if(m){l=i.CW
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=n.b
o=m?i.CW>0:t.q(0,o)
p.push(new E.dX(l,o,new C.dPE(i,n),n.c,A.bT,h))}p=B.a([new E.fd(p,h,h)],v)
if(!i.p2&&w.length!==0){o=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.I)(w),++s){k=w[s]
o.push(new E.dX(k,k===i.cy,new C.dPF(i,k),h,A.aQ,h))}p.push(new E.fd(o,"FIND",h))}if(t.q(0,"organ")){o=i.k4
p.push(E.iT(A.bZ,""+A.j.V(o)+" beats/min","Heart rate",180,40,new C.dPG(i),o))}if(i.CW>0&&t.a===0){o=B.a([],v)
for(j=0;j<5;++j)o.push(new E.G7(D.az9[j],i.cx===j,new C.dPH(i,j),!1,h))
p.push(new E.fd(o,"SKIN",h))}o=i.go
m=i.p2
l=m?"Quiz on":"Quiz"
v=B.a([new E.dX("Spin",o,new C.dPI(i),D.apQ,A.aG,h),new E.fE(A.oH,"Reset view",new C.dPJ(i),A.c,h),new E.dX(l,m,new C.dPK(i),A.HS,A.aQ,h)],v)
if(t.q(0,"organ"))v.push(new E.dX("Heartbeat sound",i.ok,new C.dPL(i),A.oL,A.bZ,h))
p.push(new E.fd(v,h,h))
return E.lD(A.bT,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.x(p,A.l,h,A.e,A.O,0,A.p))}}
C.aNr.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.aNs.prototype={
t(){var w,v,u
for(w=this.h8$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h7$
w===$&&B.c()
w.t()
this.bz4()}}
C.c6X.prototype={
kW(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aL(e,"</script","<\\/script")
v=$.hBZ
$.hBZ=v+1
u="ngmy-body-viewer-"+v
$.xv()
$.q_().pe(u,new C.c6Y(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fD(v,"message",new C.c6Z(t),!1,x.gA)
t.b=u},
fa(d,e){var w,v
try{w=this.c
if(w!=null){w=B.Rz(w.contentWindow)
if(w!=null)J.ajp(w,e,"*")}}catch(v){}}}
C.yM.prototype={}
C.D4.prototype={}
C.nL.prototype={}
C.bdn.prototype={}
C.VP.prototype={
S(){var w=x.N,v=x.y,u=x.S
return new C.aET(B.T(w,x.a2),B.a([],x.cB),B.T(w,v),B.T(w,v),B.T(w,u),A.az,A.J,A.J,B.aR(u),$,A.bF,0,B.a([],x.X),null,null)}}
C.aET.prototype={
Y(){var w=this
w.a4()
w.mh()
w.adJ()
$.aU.x1$.push(new C.dRs(w))},
adJ(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$adJ=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$adJ)
case 6:q=e.tV("ngmy_circuit_passed_v1")
r=q==null?A.Z:q
if(s.c!=null)s.m(new C.dR6(s,r))
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
return B.i($async$adJ,v)},
ae4(d){return this.c6G(d)},
c6G(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$ae4=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.I(0,d)
u=3
w=6
return B.b(B.aA(),$async$ae4)
case 6:r=f
q=s.cx
p=B.a4(q).k("kb<ci.E,n>")
q=B.C(new B.kb(q,new C.dR9(),p),p.k("M.E"))
r.aD("StringList","ngmy_circuit_passed_v1",q)
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
return B.i($async$ae4,v)},
az3(d,e,f,g){var w="c"+this.y++,v=new C.D4(w,e,f,g)
this.d.n(0,w,v)
return v},
mQ(d,e,f){return this.az3(0,e,f,0)},
ad3(d,e){var w
if(D.Ae.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a2(0,new B.p(-36,w))},
ul(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aV3(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fb$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.dq(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.ed(m,D.cZ3[A.o.F(q.d,4)])&1)===0
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
bSy(){return this.aV3(null)},
mA(d){var w,v,u,t,s,r,q,p,o,n=this
n.bSy()
if(!n.ax)return
for(w=n.d,w=new B.b8(w,B.a4(w).k("b8<2>")).gae(0),v=new B.eJ(w,new C.dRt()),u=n.f,t=n.w,s=0;v.C();){r=w.gR(0).a
if(u.h(0,r)===!0){q=n.fb$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fb$)
o=s+1
G.dF(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
az4(d){var w=this
w.d.a8(0)
A.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
mi(d,e){var w=this.x
return new B.p(d*w.a,e*w.b)},
avf(d){var w=this
if(w.x.A(0,A.az)){$.aU.x1$.push(new C.dR4(w,d))
return}w.m(new C.dR5(w,d))},
cBQ(d){this.m(new C.dRa(this,d,$.bHc()[d]))},
cbs(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bHc()[a0]
v=d.d
u=B.a4(v).k("b8<2>")
t=u.k("Y<M.E>")
s=t.k("M.E")
r=B.C(new B.Y(new B.b8(v,u),new C.dR_(),t),s)
A.d.aZ(r,new C.dR0())
q=B.C(new B.Y(new B.b8(v,u),new C.dR1(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new C.dR2(d,w))
return}u=d.r
p=B.dL(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dw(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.hb(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aV3(0)
h=m.h(0,A.d.gH(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.lC(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aN(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a8(0)
u.u(0,p)
d.m(new C.dR3(d,o,a0))},
azW(d){var w,v,u,t,s=this.d,r=B.a4(s).k("b8<2>")
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
ckw(d){var w,v,u,t,s,r=this.d,q=B.a4(r).k("b8<2>")
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
c2A(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.Ae.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.ad3(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.y(p,o)
s=l}}}return t},
bRh(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.ad3(p,o)
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
cbu(d){var w,v,u,t=this,s=t.azW(d)
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
G.dF(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new C.dRb())
return}u=t.bRh(d)
if(u!=null)t.m(new C.dRc(t,u))
else t.m(new C.dRd(t))},
axS(d){return this.c5F(d)},
c5F(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$axS=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.azW(d)
if(s==null){w=1
break}B.k_()
t.m(new C.dR8(t,s))
case 1:return B.h(u,v)}})
return B.i($async$axS,v)},
bDY(d){if(this.x.A(0,A.az))return
this.m(new C.dQZ(this,d,A.cS))
B.eZ()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bHc()[g]
g=x.p
v=B.a([B.aI(h,h,h,h,B.X(i.ax?A.oL:V.tk,A.ab,h,h,h,21),h,h,h,new C.dRm(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.l(16)
s=A.cn.j(0.14)
r=B.K(A.cn.j(0.5),A.r,1)
q=B.a([B.d("Challenge: "+w.a,h,h,h,h,h,h,D.frD,h,h,h),B.d(w.b,h,h,h,h,h,h,A.VY,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.D(A.lj,B.d(p,h,h,h,h,h,h,B.m(h,h,i.CW?A.b4:A.eU,h,h,h,h,h,h,h,h,12,h,h,A.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.r(h,B.A(B.a([B.E(B.x(q,A.E,h,A.e,A.i,0,A.p),1),B.bJ(D.fTc,h,i.gcbr(),B.bp(A.cn,h,h,h,h,h,h,h,h,h,h,A.ch))],g),A.l,h,A.e,A.i,0,h,h),A.f,h,h,new B.o(s,h,r,t,h,h,A.n),h,h,h,T.Od,D.bDM,h,h,1/0))}u.push(B.E(B.co(new C.dRn(i)),1))
if(f!=null){t=B.l(14)
s=A.c.j(0.06)
r=f.b
u.push(B.r(h,B.d(D.Ae.h(0,r).a+": "+D.Ae.h(0,r).e,h,h,h,h,h,h,A.tW,h,h,h),A.f,h,h,new B.o(s,h,h,t,h,h,A.n),h,h,h,A.a0H,A.bV,h,h,1/0))}u=B.x(u,A.l,h,A.e,A.i,0,A.p)
t=B.a([],g)
for(s=D.Ae.gdP(D.Ae),s=s.gae(s);s.C();){r=s.gR(s)
q=new B.aO(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ay(o.j(0.5),1,A.r,-1)
t.push(B.az(h,B.r(h,B.x(B.a([B.X(p.b,o,h,h,h,20),A.bG,B.d(p.a,h,h,h,h,h,h,D.aWR,h,h,h)],g),A.l,h,A.e,A.O,0,A.p),A.f,h,h,new B.o(n,h,new B.bG(m,m,m,m),new B.be(q,q,q,q),h,h,A.n),h,h,h,A.fn,Ah.Oa,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dRo(i,r),h,h,h,h,h,h,!1,A.a4))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dsI[l]
s.push(new E.fE(A.PU,k.b,new C.dRp(i,k),A.cn,h))}s.push(new E.fE(I.wO,"Clear",new C.dRq(i),A.bZ,h))
r=B.a([],g)
for(j=0;q=$.bHc(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?A.ee:A.lP
o=i.ay
n=i.cx.q(0,j)?A.b4:A.bl
r.push(new E.dX(q.a,o===j,new C.dRr(i,j),p,n,h))}return E.lD(A.cn,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.x(B.a([new E.fd(t,"PARTS",h),new E.fd(s,"TRY",h),new E.fd(r,"TASKS",h)],g),A.l,h,A.e,A.O,0,A.p))}}
C.bdG.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3=a6.a,a4=a6.b
$.S()
w=B.L()
w.r=D.ag7.gp(0)
a5.ar(new B.a1(0,0,0+a3,0+a4),w)
v=B.L()
v.r=A.c.j(0.05).gp(0)
for(u=20;u<a4;u+=28)for(t=14;t<a3;t+=28)a5.N(new B.p(t,u),1,v)
for(a3=this.b,a4=a3.e,w=a4.length,s=a3.f,r=x.v,q=a3.d,p=0;p<a4.length;a4.length===w||(0,B.I)(a4),++p){o=a4[p]
n=o.a
m=q.h(0,n)
l=q.h(0,o.b)
if(m==null||l==null)continue
k=m.c
j=k.a+36
k=k.b+0
i=a3.ad3(l,o.c)
h=s.h(0,n)===!0
n=$.S()
g=B.a([],r)
f=new B.aG(n.r,A.ai,a2,a2,g)
g.push(new B.aZ(j,k))
f.ab()
n=i.a
e=Math.max(40,Math.abs(n-j)*0.5)
d=i.b
d=new B.ko(j+e,k,n-e,d,n,d)
g.push(d)
n=f.f
if(n!=null)d.ak(n)
f.ab()
if(h){n=new B.ao(A.P,A.M,A.R,A.S,A.Q)
n.b=A.a9
n.c=9
n.r=A.bl.j(0.28).gp(0)
n.y=N.oz
a5.af(f,n)}n=new B.ao(A.P,A.M,A.R,A.S,A.Q)
n.b=A.a9
n.c=3.2
n.d=A.bv
n.r=(h?A.dC:A.bx).gp(0)
a5.af(f,n)}a0=a3.as
if(a0!=null&&q.h(0,a0)!=null){a1=q.h(0,a0).c.a2(0,D.JK)
i=a3.at
a3=i.a
a4=a1.a
e=Math.max(40,Math.abs(a3-a4)*0.5)
r=new B.aG($.S().r,A.ai,a2,a2,B.a([],r))
w=a1.b
r.E(new B.aZ(a4,w))
s=i.b
r.E(new B.ko(a4+e,w,a3-e,s,a3,s))
s=B.L()
s.b=A.a9
s.c=3
s.r=A.ab.gp(0)
a5.af(r,s)}for(a3=new B.dq(q,q.r,q.e);a3.C();)this.cbt(a5,a3.d)},
cbt(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.Ae.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.bt(a0.c,64,64)
s=B.bn(t,A.jQ)
r=w.cy===v
q=s.eQ(A.cz)
$.S()
p=B.L()
p.r=A.w.j(0.55).gp(0)
p.y=A.mg
d.an(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.L()
p.sav(new B.bY(A.A,0.5,A.x,g,0,B.a([e.c.j(0.6),A.L],x.O),g,g).aK(0,B.bZ(a0.c,52)))
d.N(q,52,p)}q=s.eQ(A.cL)
p=B.L()
o=e.c
p.r=B.ar(o,A.w,0.65).gp(0)
d.an(q,p)
n=u?0.35:0
q=B.L()
p=B.ar(o,A.c,0.1+n)
p.toString
m=B.ar(o,A.w,u?0.2:0.45)
m.toString
q.sav(new B.a8(A.b0,A.b7,A.x,B.a([p,m],x.O),g,g).aK(0,t))
d.an(s,q)
q=B.L()
q.b=A.a9
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.an(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.pC:D.bTB}else l=e.b
k=C.hcJ(B.lC(l.a),30,A.c,l.b,g,A.I)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a5(d,v.aJ(0,new B.p(p/2,q.gba(q)/2)))
j=C.hcJ(e.a,10.5,A.c,g,g,A.I)
j.a5(d,a0.c.a2(0,new B.p(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.hcJ(f,9,u?A.dC:A.bW,g,g,A.u)
i.a5(d,a0.c.a2(0,new B.p(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b14(d,w.ad3(a0,h),o)
this.b14(d,a0.c.a2(0,D.JK),o)},
b14(d,e,f){var w
$.S()
w=B.L()
w.r=D.ag7.gp(0)
d.N(e,8.5,w)
w=B.L()
w.b=A.a9
w.c=2.2
w.r=f.gp(0)
d.N(e,8.5,w)
w=B.L()
w.r=A.c.gp(0)
d.N(e,3.2,w)},
aE(d){return!0}}
C.aNw.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bA6.prototype={
t(){var w,v,u
for(w=this.h8$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h7$
w===$&&B.c()
w.t()
this.bz9()}}
C.Ol.prototype={
S(){return new C.aF9(B.mZ(0,null,null))}}
C.Lm.prototype={
a7(){return"_UnfoldStyle."+this.b}}
C.Bc.prototype={}
C.aF9.prototype={
Y(){this.a4()
B.bO(A.qz,C.irX(),x.H)},
cbz(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcp(0).at
v.toString
w.f=v}w.m(new C.dXE(w,e))},
c4t(){var w=this
w.e.t()
w.e=B.mZ(w.f,null,null)
w.m(new C.dXD(w))},
t(){this.e.t()
this.a3()},
B(d){var w=this,v=null,u=w.d,t=u==null,s=t&&B.P(d).ax.a===A.dm?A.c:A.c4
return B.oQ(t,B.c4(v,s,t?new C.bu1(w.e,w.gcby(w),new C.dXF(d),v):new C.aJq(u,new B.bo(u.b,x.W)),v,!1,!1,v,!1),new C.dXG(w,u),x.K)}}
C.bvE.prototype={}
C.bu1.prototype={
b15(d,e,f){var w=null,v=B.d(d,w,w,w,w,w,w,B.m(w,w,f?A.bB:A.c,w,w,w,w,w,w,w,w,12.5,w,w,A.u,w,w,!0,w,1.6,w,w,w,w,w,w),w,w,w)
return new B.D(S.a17,B.x(B.a([v,A.bG,B.d(e,w,w,w,w,w,w,B.m(w,w,f?A.cA:A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.E,w,A.e,A.i,0,A.p),w)},
B(d){var w,v,u,t=this,s=null,r=B.P(d).ax.a===A.dm,q=B.aF(d,A.dO,x.l).w,p=B.aI(s,s,s,s,B.X(A.eM,r?A.bB:A.ab,s,s,s,20),s,s,D.hv1,t.e,s,s,s,s,s,s)
if(r)w=new B.o(A.c,s,s,B.l(14),A.IC,s,A.n)
else{w=B.a([A.aG.j(0.22),A.aG.j(0.06)],x.O)
v=B.l(14)
w=new B.o(s,s,B.K(A.aG.j(0.75),A.r,1.6),v,B.a([new B.ab(0,A.G,A.aG.j(0.22),A.J,8)],x.V),new B.a8(A.aA,A.aD,A.x,w,s,s),A.n)}v=B.d("\ud83e\uddea Core Protocol",s,s,s,s,s,s,B.m(s,s,r?A.bB:A.c,s,s,s,s,s,s,s,s,15,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)
u=x.p
w=B.A(B.a([p,B.E(B.as(B.r(s,B.x(B.a([v,B.d("Play, make things, keep them.",s,s,s,s,s,s,B.m(s,s,r?A.cA:A.aR,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)],u),A.l,s,A.e,A.O,0,A.p),A.f,s,s,w,s,s,D.hv6,s,Z.amS,s,s,s),s,s,s),1),A.tO],u),A.l,s,A.e,A.i,0,s,s)
v=t.b15("STUDIOS","Play, make things, and keep what you make",r)
$.bHd()
return B.bm(!1,B.x(B.a([B.E(B.w8(0,s,A.t,t.c,A.y,s,s,s,s,s,!1,s,A.ah,!1,B.a([new B.nI(new B.R(8,q.r.b+6,8,4),new B.m6(w,s),s),new B.m6(v,s),new B.nI(A.i3,B.PZ(new B.oT(new C.f8Z(d),9,!0,!0,!0,0,B.ts(),s),D.aUG),s),new B.m6(t.b15("SCENES","Each one is a studio too: change the style, colours and words",r),s),new B.nI(D.bDV,B.PZ(new B.oT(new C.f9_(t),6,!0,!0,!0,0,B.ts(),s),D.aUG),s)],u)),1)],u),A.l,s,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!1)}}
C.agj.prototype={
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m.d
if(B.P(d).ax.a===A.dm){w=B.l(20)
v=(A.o.aq(o.c,3)&1)===0
u=B.a7x(v?A.aG:A.bc,20)
v=v?A.aG:A.bc
return B.aH(!1,A.a3,!0,n,B.aN(!1,w,!0,B.eB(B.x(B.a([new B.VN(v,44,m.c,n,n),A.T,B.d(m.a,n,2,A.a2,n,n,n,D.fxQ,A.K,n,n),A.cR,B.d(m.b,n,2,A.a2,n,n,n,D.fAG,A.K,n,n)],x.p),A.l,n,A.ba,A.i,0,A.p),n,u,n,A.CF,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.aj)}w=B.l(20)
v=B.l(20)
u=B.ar(K.ma,l,0.3)
u.toString
t=x.O
u=B.a([u,D.ajp],t)
s=B.K(l.j(0.6),A.r,1.2)
r=x.V
q=B.a([new B.ab(-4,A.G,l.j(0.22),A.J,14)],r)
p=B.ar(l,A.w,0.45)
p.toString
t=B.a([l,p],t)
r=B.a([new B.ab(0,A.G,l.j(0.5),A.J,12)],r)
return B.aH(!1,A.a3,!0,n,B.aN(!1,w,!0,B.eB(B.x(B.a([B.r(n,B.X(m.c,A.c,n,n,n,24),A.f,n,n,new B.o(n,n,n,n,r,new B.a8(A.aA,A.aD,A.x,t,n,n),A.a6),n,44,n,n,n,n,n,44),A.T,B.d(m.a,n,2,A.a2,n,n,n,B.m(n,n,l,n,n,n,n,n,n,n,n,10.5,n,n,A.u,n,1.15,!0,n,0.5,n,n,n,n,n,n),A.K,n,n),A.cR,B.d(m.b,n,2,A.a2,n,n,n,B.m(n,n,A.c.j(0.6),n,n,n,n,n,n,n,n,9.5,n,n,n,n,1.2,!0,n,n,n,n,n,n,n,n),A.K,n,n)],x.p),A.l,n,A.ba,A.i,0,A.p),n,new B.o(n,n,s,v,q,new B.a8(A.aA,A.aD,A.x,u,n,n),A.n),n,A.CF,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.aj)}}
C.afa.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.d,j=k.d,i=B.P(d).ax.a===A.dm,h=(A.o.aq(this.c,3)&1)===0?A.aG:A.bc,g=B.l(20)
if(i)w=B.a7x(h,20)
else{w=B.l(20)
v=B.ar(K.ma,A.d.gH(j),0.24)
v.toString
v=B.a([v,D.ajp],x.O)
v=new B.o(l,l,B.K(A.d.gH(j).j(0.35),A.r,1),w,B.a([new B.ab(0,A.G,A.w.j(0.4),A.cz,12)],x.V),new B.a8(A.aA,A.aD,A.x,v,l,l),A.n)
w=v}v=x.p
u=B.a([],v)
for(t=k.e,s=x.V,r=x.O,q=0;q<3;++q){p=q===2?0:4
o=new B.aO(6,6)
if(i){n=B.ar(h,A.c,0.1)
n.toString
n=B.a([n,B.VO(h,!0)[1]],r)}else n=B.a([A.d.gH(j),A.d.gal(j)],r)
m=i?l:B.a([new B.ab(0,A.G,A.w.j(0.45),A.a98,0)],s)
u.push(B.r(l,B.X(t[q],A.c,l,l,l,11),A.f,l,l,new B.o(l,l,l,new B.be(o,o,o,o),m,new B.a8(A.a7,A.aa,A.x,n,l,l),A.n),l,17,l,new B.R(q*4,0,(2-q)*4,p),l,l,l,l))}u=B.x(u,A.l,l,A.e,A.O,0,A.p)
if(i)t=A.bB
else{t=B.ar(A.d.gH(j),A.d.gal(j),0.4)
t.toString}t=B.d(k.b,l,2,A.a2,l,l,l,B.m(l,l,t,l,l,l,l,l,l,l,l,10.5,l,l,A.u,l,1.2,!0,l,0.6,l,l,l,l,l,l),A.K,l,l)
return B.aH(!1,A.a3,!0,l,B.aN(!1,g,!0,B.eB(B.x(B.a([new B.a5(58,l,u,l),A.W,t,A.aw,B.X(A.Dh,i?B.VO(h,!0)[1]:A.d.gH(j),l,l,l,18)],v),A.l,l,A.ba,A.i,0,A.p),l,w,l,A.CF,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,this.e,l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.aj)}}
C.Rg.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ar(A.d.gal(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=B.ap(-8,new B.bN(new B.o(h,j,j,B.l(22),j,j,A.n),A.bi,j,j),j,j,2,2,8,j)
u=B.l(22)
t=k.y
s=x.V
r=B.a([new B.ab(0,A.G,A.w.j(0.55),A.JH,26),new B.ab(-6,A.G,A.d.gH(i).j(0.1+0.4*t),A.J,30)],s)
q=B.l(22)
p=B.ar(A.d.gH(i),A.c,0.14)
p.toString
o=A.d.gH(i)
n=A.d.gal(i)
i=B.ar(A.d.gal(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bS(0,new B.bN(new B.o(j,j,j,j,j,new B.a8(A.aA,A.aD,A.x,B.a([p,o,n,i],m),D.dyB,j),A.n),A.bi,j,j),0,0,0),B.ap(j,new B.bN(new B.o(j,j,j,j,j,new B.a8(A.b0,A.b7,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bi,j,j),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bS(0,B.b3(j,j,j,new C.bv1(i,j),A.az),0,0,0))
i=A.c.j(0.16)
p=B.K(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ab(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=B.r(j,B.X(k.f,A.c,j,j,j,28),A.f,j,j,new B.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=B.a([B.d(k.r,j,j,j,j,j,j,D.ftZ,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.u(p,B.a([A.aw,B.d(i,j,1,A.a2,j,j,j,B.m(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a8,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.Kz)
p.push(B.r(j,j,A.f,j,j,new B.o(A.c.j(0.28),j,j,B.l(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new B.D(A.h9,B.A(B.a([s,A.ew,B.E(B.x(p,A.E,j,A.e,A.O,0,A.p),1)],l),A.l,j,A.e,A.i,0,j,j),j))
i=k.x
if(i>0)m.push(B.bS(0,new B.du(!0,B.ea(j,A.w.j(A.j.D(i*0.6,0,0.7)),!0),j),0,0,0))
i=B.l(22)
m.push(B.bS(0,new B.du(!0,new B.bN(new B.o(j,j,B.K(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.bi,j,j),j),0,0,0))
return new B.a5(w,v,new B.an(A.a0,j,A.ad,A.f,B.a([h,B.bS(0,new B.bN(new B.o(j,j,j,u,r,j,A.n),A.bi,B.bx(q,new B.an(A.a0,j,A.ad,A.t,m,j),A.aq),j),0,0,0)],l),j),j)}}
C.bv1.prototype={
a5(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a1(r,-10,s,w)
u=d.c
J.bq(u.save())
u.translate(v.gbx().a,v.gbx().b)
d.hW(0,0.35)
t=B.bt(A.J,(w- -10)*1.6,s-r)
$.S()
s=B.L()
s.sav(new B.a8(A.a7,A.aa,A.x,B.a([A.L,A.c.j(0.3),A.L],x.O),null,null).aK(0,t))
d.ar(t,s)
u.restore()},
aE(d){return d.b!==this.b}}
C.bux.prototype={
B(d){var w=null,v=B.l(22),u=B.a([D.bqF,D.ais],x.O),t=this.e,s=B.K(A.d.gH(t).j(0.4),A.r,1.2),r=B.a([new B.ab(0,A.G,A.w.j(0.5),A.kD,24)],x.V),q=B.l(22),p=A.d.gH(t)
return new B.a5(this.c,this.d,new B.bN(new B.o(w,w,s,v,r,new B.a8(A.aA,A.aD,A.x,u,w,w),A.n),A.bi,B.bx(q,B.b3(B.as(B.X(A.jL,A.d.gH(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.bck(p,w),A.az),A.aq),w),w)}}
C.bck.prototype={
a5(d,e){var w,v,u,t,s,r
$.S()
w=B.L()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=0;s<u;s+=18)d.ah(new B.p(s,0),new B.p(s,t),w)
for(r=0;r<t;r+=18)d.ah(new B.p(0,r),new B.p(u,r),w)
u=e.ej(A.J)
$.S()
t=B.L()
t.b=A.a9
t.c=1.4
t.r=v.j(0.35).gp(0)
d.N(u,30,t)},
aE(d){return!1}}
C.aJq.prototype={
S(){return new C.aJr(new B.cw(null,x.A),null,null)}}
C.aJr.prototype={
guL(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,D.bB9,null,1,null,v)
w.cL(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
ga_C(){var w,v=this,u=v.e
if(u===$){w=B.bl(null,A.h8,null,1,null,v)
w.f2(0,!0)
v.e!==$&&B.bE()
v.e=w
u=w}return u},
gaz5(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gcbw(){var w=this.w
if(w===$){w=B.C(this.a.c.d,x.G)
this.w=w}return w},
gaYm(){var w=this.x
if(w===$){w=B.C(this.a.c.e,x.Z)
this.x=w}return w},
gaZ9(){var w=this.y
if(w===$){w=B.C(this.a.c.f,x.N)
this.y=w}return w},
gb9W(){var w=this.z
if(w===$){w=B.C(this.a.c.r,x.N)
this.z=w}return w},
Y(){this.a4()
var w=this.guL()
w.dl()
w.dV$.I(0,this.gcBz())},
cBA(){var w,v,u,t,s,r,q,p=this,o=p.guL().x
o===$&&B.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gaz5().a){case 0:w=D.nU
break
case 1:w=D.vj
break
case 2:w=D.a5L
break
case 3:w=D.nU
break
case 4:w=D.dkR
break
case 5:w=D.vj
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.adM)r=0.09
else r=s===D.adN?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){G.dF(260+90*v,"",260,1.6,0.18,"tri")
u=D.cc9[v]
E.mv("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.JR("bell",D.cl0,1400,0.35)}}p.ax=o},
t(){this.guL().t()
this.ga_C().t()
this.bB_()},
afb(){var w=this
w.guL().d0J(0,B.dw(0,0,0,A.j.V(11e3/w.Q),0,0))
w.m(new C.f8F(w))},
cmA(){this.guL().bQ(0)
this.m(new C.f8E(this))},
afa(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$afa=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gaZ9(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){q=t[r]
l.push(new B.au(new B.ba(q,A.b5,A.aP),$.ax()))}m=B.a([],m)
for(t=u.gb9W(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){p=t[r]
m.push(new B.au(new B.ba(p,A.b5,A.aP),$.ax()))}o=B.C(u.gaYm(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bU(K.ma,null,new C.f8D(u,l,m,o),t,!0,!0,!0,A.lW,!1,!1,x.H),$async$afa)
case 2:l=B.C(l,x.bO)
A.d.u(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.U$=$.ax()
n.P$=0}return B.h(null,v)}})
return B.i($async$afa,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gaz5(),f=i.a.c,e=f.b,d=i.gcbw(),a0=new C.Bc(g,e,f.c,d,i.gaYm(),i.gaZ9(),i.gb9W())
f=B.ar(A.d.gH(d),A.d.gal(d),0.4)
f.toString
g=x.p
w=B.a([B.aI(h,h,h,h,B.X(i.at?A.oL:V.tk,A.ab,h,h,h,21),h,h,h,new C.f8N(i),h,h,h,h,"Sound",h),B.aI(h,h,h,h,D.c2B,h,h,h,i.gcbx(),h,h,h,h,"Edit words and pictures",h),B.aI(h,h,h,h,I.oP,h,h,h,new C.f8O(i,a1),h,h,h,h,"Share",h)],g)
v=B.a([B.c6(i.ga_C(),new C.f8P(i,a0),h),B.co(new C.f8Q(i,a0))],g)
u=i.as
t=u?i.gcmz():i.gcbA()
u=u?D.bSS:A.th
s=B.ar(A.d.gH(d),A.d.gal(d),0.4)
s.toString
t=B.A(B.a([B.aI(h,h,h,h,B.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.ch),B.E(B.c6(i.guL(),new C.f8R(i,a1,a0),h),1),B.aI(h,h,h,h,D.bZK,h,h,h,new C.f8S(i),h,h,h,h,"Replay",A.ch)],g),A.l,h,A.e,A.i,0,h,h)
s=i.Q
u=A.j.ad(s,1)
r=B.ar(A.d.gH(d),A.d.gal(d),0.4)
r.toString
s=E.iT(r,u+"x","Speed",2.5,0.4,new C.f8T(i),s)
u=B.a([],g)
for(q=0;q<6;++q){p=D.dvB[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=B.ar(A.d.gH(d),A.d.gal(d),0.4)
r.toString
u.push(new E.dX(p.b,o===p.a,new C.f8U(i,p),p.c,r,h))}d=B.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.ccz[q]
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
d.push(B.az(h,B.r(h,h,A.f,h,h,new B.o(h,h,new B.bG(j,j,j,j),h,h,new B.a8(A.aA,A.aD,A.x,n,h,h),A.a6),h,l,h,I.alT,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f8V(i,n),h,h,h,h,h,h,!1,A.a4))}return E.lD(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.em(new B.an(A.a0,h,A.b2,A.t,v,h),i.f),e,B.x(B.a([t,s,new E.fd(u,"STYLE",h),new E.fd(d,"THEME",h)],g),A.l,h,A.e,A.O,0,A.p))},
bD8(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nU[r]
p=A.j.D((1-A.e3.aA(0,A.j.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.j.D(p/1.5707963267948966,0,1)
q=D.nU[r]
n=q+0.12
m=A.j.D((a0-n)/(q+0.2-n),0,1)
n=D.nU[r]
q=n-0.01
q=A.j.D((a0-q)/(n+0.03-q),0,1)
n=B.dr()
l=n.a
l.$flags&2&&B.aj(l)
l[11]=0.0013
n.kn(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nU[r]
h=i+0.1
if(A.j.D((a0-h)/(i+0.3-h),0,1)>0){i=D.nU[r]
h=i+0.1
h=A.j.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nU[r]
h=i+0.1
h=A.j.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cK(0,r*118,0,f,f,f,new B.kK(q,new B.iV(n,f,A.b0,!0,f,new C.Rg(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nU[r]
u=v-0.02
g=A.j.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gH(w)
v=D.nU[r]
t=v+0.12
e.push(new B.cK(0,r*118-3-2,0,f,f,4,new B.mJ(new C.btD(u,g,1-A.j.D((a0-t)/(v+0.22-t),0,1),f),f,A.az,f,f),f))}return new B.a5(a2,358,new B.an(A.a0,f,A.ad,A.f,e,f),f)},
bU7(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.vj[r]
p=A.qx.aA(0,A.j.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.vj[r]
m=q+0.15
l=A.j.D((a0-m)/(q+0.25-m),0,1)
m=D.vj[r]
q=m-0.03
q=A.j.D((a0-q)/(m+0.01-q),0,1)
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
g=new C.Rg(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dr()
k.fL(3.141592653589793)
k=new B.iV(k,f,A.A,!0,f,new C.bux(a2,108,w,f),f)}e.push(new B.cK(0,r*130,0,f,f,f,new B.kK(q,new B.iV(m,f,A.A,!0,f,k,f),f),f))}return new B.a5(a2,378,new B.an(A.a0,f,A.ad,A.f,e,f),f)},
cGH(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a5L[w]
l.push(A.cw.aA(0,A.j.D((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bS(0,B.b3(n,n,n,new C.bx7(d.d,l,D.aAS,m,C.bu0(e,0.4,0.62),f,C.bu0(e,0.45,0.7),n),A.az),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.hdg(g,w)
q=D.aAS[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cK(r,s-q*m*p+12,n,n,t,n,new B.kK(o,B.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.hdg(g,w)
r=D.a5L[w]
q=r+0.15
v.push(new B.cK(s,l,n,n,t,n,new B.kK(A.j.D((e-q)/(r+0.25-q),0,1),B.d(u[w],n,n,n,n,n,n,A.W9,A.K,n,n),n),n))}return new B.a5(g,m+90,new B.an(A.a0,n,A.ad,A.f,v,n),n)},
bJr(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cw.aA(0,C.bu0(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bS(0,B.as(B.dP(B.b3(f,f,f,new C.bt2(A.d.gH(a1),C.bu0(a3,0,0.2),a4,f),new B.av(a5*0.95,70)),D.eoT),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.j.D((a3-l)/(0.12+m-l),0,1)
j=A.dG.aA(0,A.j.D((o-0.7)/0.3,0,1))
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
g=j>0.5?A.j.F(r,1):-1
w.push(new B.y(o,new B.cK(0,0,0,0,f,f,new B.cj(A.A,f,f,new B.kK(k*(0.45+0.55*o),B.dP(new B.iV(l,f,A.A,!0,f,new C.Rg(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.p(n*a5*0.34,-o*18)),f),f),f)))}A.d.aZ(w,new C.f8w())
A.d.u(a0,new B.N(w,new C.f8x(),x.fR))
return new B.a5(a5,330,new B.an(A.a0,f,A.ad,A.f,a0,f),f)},
cbv(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.vj[q]
o=A.j.D((a2-p)/(p+0.22-p),0,1)
n=A.lc.aA(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.vj[q]
m=A.j.D((a2-m)/(m+0.02-m),0,1)
l=D.aD0[q]
k=B.dr()
k.n2(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.k5(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.vj[q]
g=h+0.1
g=A.j.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cK(0,0,0,0,e,e,new B.cj(A.A,e,e,new B.kK(m,B.dP(new B.iV(k,e,A.A,!0,e,new C.Rg(d,92,w,p,j,i,0,g*s,h,e),e),new B.p(0,l)),e),e),e))
l=D.vj[q]
h=l+0.02
f=A.j.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cK(0,0,0,0,e,e,new B.cj(A.A,e,e,B.dP(new B.mJ(new C.bd0(w,f,q,e),e,new B.av(r,212),e,e),new B.p(0,D.aD0[q])),e),e))}return new B.a5(a4,330,new B.an(A.a0,e,A.ad,A.f,a0,e),e)},
bG4(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.p(-b0,-150),new B.p(b0,-40),D.eoX],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nU[r]
p=A.j.D((a8-q)/(q+0.2-q),0,1)
o=A.cw.aA(0,p)
q=D.aDb[r]
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
e=A.j.D((a8-f)/(g+0.3-f),0,1)
f=D.nU[r]
g=f-0.01
g=A.j.D((a8-g)/(f+0.03-g),0,1)
f=B.dr()
d=f.a
d.$flags&2&&B.aj(d)
d[11]=0.001
f.n2(l*h+D.dpc[r]*o)
f.fL(l*0.9)
h=0.55+0.45*o
f.k5(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cK(0,0,0,0,a3,a3,new B.cj(A.A,a3,a3,new B.kK(g,B.dP(new B.iV(f,a3,A.A,!0,a3,new C.Rg(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.p(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nU[r]
i=q+0.17
a2=A.j.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aDb[r]
a6.push(new B.cK(0,0,0,0,a3,a3,new B.cj(A.A,a3,a3,B.dP(new B.mJ(new C.bt4(A.d.gH(w),a2,a3),a3,new B.av(a4,30),a3,a3),new B.p(0,q+48-4)),a3),a3))}}return new B.a5(b0,330,new B.an(A.a0,a3,A.ad,A.f,a6,a3),a3)}}
C.btD.prototype={
a5(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a1(w-v,0,w+v,e.b)
q=B.bn(u,A.hE)
$.S()
t=B.L()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.y=N.oz
d.an(q,t)
t=B.bn(u,A.hE)
q=B.L()
q.r=A.c.j(s).gp(0)
d.an(t,q)},
aE(d){return d.c!==this.c||d.d!==this.d}}
C.bt2.prototype={
a5(d,e){var w,v,u=this.c,t=B.bt(e.ej(A.J),e.b*u,e.a*u)
$.S()
u=B.L()
u.b=A.a9
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.y=U.OC
d.bZ(t,u)
u=B.L()
u.b=A.a9
u.c=2.5
u.r=w.j(0.7).gp(0)
d.bZ(t,u)
u=t.cn(-14)
v=B.L()
v.b=A.a9
v.c=1
v.r=w.j(0.3).gp(0)
d.bZ(u,v)},
aE(d){return!0}}
C.bd0.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.ej(A.J),h=this.c,g=A.cw.aA(0,h)
$.S()
w=B.L()
w.b=A.a9
v=1-h
w.c=5*v
u=this.b
w.r=A.d.gH(u).j(0.6*v).gp(0)
d.N(i,40+g*e.a*0.42,w)
t=new B.e3()
t.cY(this.d*17+3)
for(w=40*h*h*3,s=i.a,r=i.b,h=1-h*0.6,q=0;q<26;++q){p=t.ai()*3.141592653589793*2
o=(40+t.ai()*110)*g
n=Math.cos(p)
m=Math.sin(p)
l=t.ai()
k=new B.ao(A.P,A.M,A.R,A.S,A.Q)
j=(q&1)===0?A.d.gH(u):A.c
k.r=j.j(A.j.D(v,0,1)).gp(0)
d.N(new B.p(s+n*o*1.6,r+(m*o+w)),(2+l*3)*h,k)}},
aE(d){return!0}}
C.bt4.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o=e.ej(A.J)
for(w=e.a,v=e.b,u=this.b,t=this.c,s=0;s<2;++s){r=A.j.D(t-s*0.18,0,1)
if(r<=0)continue
q=B.bt(o,v*(0.3+r*0.9),w*(0.5+r*0.7))
$.S()
p=new B.ao(A.P,A.M,A.R,A.S,A.Q)
p.b=A.a9
p.c=2
p.r=u.j((1-r)*0.7).gp(0)
d.bZ(q,p)}},
aE(d){return d.c!==this.c}}
C.bx7.prototype={
a5(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2=c0.e,c3=c2+36,c4=d2.a,c5=c4*0.23,c6=c5*0.34,c7=c6*0.85,c8=-c6*0.5,c9=c3-4,d0=new B.a1(0,c9,0+c4,c9+60)
$.S()
c9=B.L()
w=c0.b
v=x.O
c9.sav(new B.a8(A.b0,A.b7,A.x,B.a([A.d.gH(w).j(0.18),A.L],v),c1,c1).aK(0,d0))
d1.ar(d0,c9)
c9=B.L()
c9.r=A.c.j(0.18).gp(0)
c9.c=1
d1.ah(new B.p(0,c3),new B.p(c4,c3),c9)
for(c9=c0.w,u=c9>0,t=(c5-16)/3,s=t-5,r=0.6+0.3*c0.r,q=c0.f,p=c3-14,o=x.v,n=c3+c8,m=c0.d,l=c3-6,k=c5+c7+8,j=l+16,i=c0.c,h=c9<1,g=d1.c,f=0;f<3;++f){e=i[f]
if(e<=0)continue
d=C.hdg(c4,f)
a0=m[f]*c2*e
a1=d-4
a2=$.S()
a3=new B.ao(A.P,A.M,A.R,A.S,A.Q)
a3.r=A.w.j(0.5).gp(0)
a3.y=A.mg
d1.bZ(new B.a1(a1,l,a1+k,j),a3)
a3=c3-a0
a1=d+c5
a4=new B.a1(d,a3,a1,a3+a0)
a5=new B.ao(A.P,A.M,A.R,A.S,A.Q)
a6=B.ar(A.d.gH(w),A.c,0.1)
a6.toString
a5.sav(new B.a8(A.b0,A.b7,A.x,B.a([a6,A.d.gal(w)],v),c1,c1).aK(0,a4))
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
a9=new B.bu()
a5.push(a9)
a5=a7.f
if(a5!=null)a9.ak(a5)
a7.ab()
a5=new B.ao(A.P,A.M,A.R,A.S,A.Q)
a5.r=B.ar(A.d.gal(w),A.w,0.5).gp(0)
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
a2=new B.bu()
a5.push(a2)
a5=b1.f
if(a5!=null)a2.ak(a5)
b1.ab()
a2=new B.ao(A.P,A.M,A.R,A.S,A.Q)
a2.r=B.ar(A.d.gH(w),A.c,0.45).gp(0)
d1.af(b1,a2)
b2=new B.ao(A.P,A.M,A.R,A.S,A.Q)
b2.b=A.a9
b2.c=1
b2.r=A.c.j(0.28).gp(0)
d1.ar(a4,b2)
d1.af(a7,b2)
d1.af(b1,b2)
b3=A.j.bh(a0/22)
for(a2=a3+6,a3=d+8,a5=q*b3*1.3,b4=0;b4<b3;++b4){b5=a5>b3-b4-1
for(a6=p-b4*22-12,a8=a6<a2,a9=a6+10,b6=0;b6<3;++b6){b7=a3+b6*t
if(a8)continue
b0=B.bn(new B.a1(b7,a6,b7+s,a9),A.hE)
$.S()
b8=new B.ao(A.P,A.M,A.R,A.S,A.Q)
b8.r=(b5?A.c.j(r):A.w.j(0.22)).gp(0)
d1.an(b0,b8)}}if(u&&h){a2=c3-a0*c9-14
b9=new B.a1(d,a2,a1,a2+28)
J.bq(g.save())
g.clipRect(B.hX(a4),$.mi()[1],!0)
$.S()
a2=new B.ao(A.P,A.M,A.R,A.S,A.Q)
a2.sav(new B.a8(A.b0,A.b7,A.x,B.a([A.L,A.c.j(0.4),A.L],v),c1,c1).aK(0,b9))
d1.ar(b9,a2)
g.restore()}}},
aE(d){return!0}}
C.aPd.prototype={
aY(){this.b5()
this.b3()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a3()}}
C.a1H.prototype={
a7(){return"_Role."+this.b}}
C.qw.prototype={}
C.rc.prototype={}
C.D8.prototype={}
C.a_G.prototype={}
C.ag7.prototype={}
C.a1U.prototype={
gZ(d){return this.d}}
C.Dj.prototype={}
C.ad0.prototype={}
C.adh.prototype={}
C.afd.prototype={}
C.bjD.prototype={
a3N(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
G.dF(d,"",e,g,h,f)},
bb1(d,e,f){return this.a3N(d,e,f,0,0.55)},
aDL(d,e,f,g){return this.a3N(d,e,f,0,g)},
bb2(d,e,f,g){return this.a3N(d,e,f,g,0.55)},
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
ali(d,e,f,g){var w="n"+this.ay++,v=new C.rc(w,e,f,g)
this.a.n(0,w,v)
this.b0()
return v},
tf(d,e,f){return this.ali(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bq(w.b,new C.dry(e))
A.d.bq(w.c,new C.drz(e))
w.b0()},
beU(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.nc.h(0,v.b).c===D.xT)return!1
w=this.b
if(A.d.aV(w,new C.drv(d,e)))return!1
w.push(new C.D8(d,e))
this.b0()
return!0},
c3m(d){var w
if(d.b==="beat")return D.cla[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.az(500)
case 2:return 1400+w.az(2200)
default:return 450+w.az(2000)}},
aHl(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.aDs[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.Dj(u,t,j.ax,90))
w.push(new C.Dj(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ai()*3.141592653589793*2
v.push(new C.a1U(u,new B.p(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.bb1(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ai()*3.141592653589793*2
p=100+w.ai()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ar(t,A.c,w.ai()*0.5)
m.toString
v.push(new C.a1U(u,new B.p(o*p,n*p),m,3+w.ai()*4.5,1000+w.az(700),j.ax))}j.f.push(new C.Dj(u,t,j.ax,120))
j.aDL(120,200,"noise",0.5)
j.bb1(261.63*Math.pow(2,([7,12,16,19][w.az(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.Dj(u,t,j.ax,230))
w.push(new C.Dj(u,t,j.ax+160,160))
w.push(new C.Dj(u,t,j.ax+320,100))
j.bb2(180+j.at.az(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.ad0(u,new B.p((w.ai()-0.5)*220,-260-w.ai()*180),t,j.ax))
j.bb2(300+w.az(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ai()*3.141592653589793*2
j.w.push(new C.adh(u,u.a2(0,new B.p(Math.cos(q),Math.sin(q)).aM(0,260+w.ai()*200)),t,j.ax))
j.a3N(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fN()
j.a3N(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.afd(u,D.aCO[v],t,j.ax))
j.aDL(261.63*Math.pow(2,([0,5,9,12][j.at.az(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aDL(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.chg[A.o.F(w,3)]
for(k=1;k<=3;++k)j.cwE(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new B.eJ(w,new C.drw(d));v.C();)j.aCg(w.gR(0),j.ax+D.ctB[A.o.F(g.d,4)])
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
case"chance":s=j.at.az(100)<D.cKT[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new B.eJ(w,new C.drx(d));v.C();)j.aCg(w.gR(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.xF(w,0,v-700)},
cwE(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.a_G(e,"~"+d))},
aCg(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.ag7(d.a,v,e,w))
u.push(new C.a_G(w,v))},
a7y(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=B.a4(w).k("b8<2>")
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
else if(o.ax>=q){o.aHl(r)
u.n(0,r,o.ax+o.c3m(s))}}w=o.c
v=B.U(w).k("Y<1>")
q=B.C(new B.Y(w,new C.drA(o),v),v.k("M.E"))
if(q.length!==0){A.d.bq(w,new C.drB(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.I)(q),++t){u=q[t].b
if(A.a.a_(u,"~")){p=A.a.b2(u,1)
for(u=A.d.gae(v),r=new B.eJ(u,new C.drC(p));r.C();)o.aCg(u.gR(0),o.ax)}else o.aHl(u)}}A.d.bq(o.d,new C.drD(o))
A.d.bq(o.e,new C.drE(o))
A.d.bq(o.f,new C.drF(o))
A.d.bq(o.w,new C.drG(o))
A.d.bq(o.x,new C.drH(o))
A.d.bq(o.r,new C.drI(o))
o.b0()},
vN(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.e,v=w.length,u=1-1.6*e,t=120*e,s=0;s<v;++s){r=w[s]
q=r.a
p=r.b
o=p.a
p=p.b
r.a=new B.p(q.a+o*e,q.b+p*e)
r.b=new B.p(o*u,p*u+t)}n=j.cy.b-8
for(w=j.r,v=w.length,u=900*e,s=0;s<v;++s){m=w[s]
t=m.b
q=t.a
t=t.b+u
p=m.b=new B.p(q,t)
o=m.a
l=o.a+q*e
o=o.b+t*e
k=m.a=new B.p(l,o)
if(o>n){p=m.a=new B.p(l,n)
t=m.b=new B.p(q*0.9,-t*0.62)
q=p}else{q=k
t=p}q=q.a
if(q<10||q>j.cy.a-10)m.b=new B.p(-t.a*0.8,t.b)}},
aj(){var w,v,u,t,s,r,q,p,o,n,m=this.cy,l=m.a
if(l<=0)l=1
w=m.b
if(w<=0)w=1
m=B.a([],x.x)
for(v=this.a,v=new B.dq(v,v.r,v.e),u=x.N,t=x.K;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(B.J(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=B.a([],x.E)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,B.I)(t),++o){n=t[o]
v.push(B.a([n.a,n.b],r))}return A.X.aw(B.J(["nodes",m,"edges",v],u,x.ew),null)},
Uo(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.X.aP(0,d,null))
k.a8(0)
for(o=x.j,n=J.aT(o.a(J.t(w,"nodes"))),m=k.a;n.C();){v=n.gR(n)
u=B.w(J.t(v,"k"))
if(!D.nc.am(0,u))continue
t=B.w(J.t(v,"id"))
m.n(0,t,new C.rc(t,u,new B.p(B.dD(J.t(v,"x"))*k.cy.a,B.dD(J.t(v,"y"))*k.cy.b),A.j.M(B.dD(J.t(v,"p")))))
s=B.ca(B.aL(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aT(o.a(J.t(w,"edges"))),n=k.b;o.C();){r=o.gR(o)
q=B.w(J.t(r,0))
p=B.w(J.t(r,1))
if(m.am(0,q)&&m.am(0,p))n.push(new C.D8(q,p))}k.b0()
return!0}catch(l){return!1}},
cWa(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.rc(n,r,new B.p(q*p.a,o*p.b),s))
l.b0()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.beU(w[m.a],w[m.b])}},
gZ(d){return this.cy}}
C.GK.prototype={}
C.Xd.prototype={
S(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aGn(new C.bjD(B.T(w,x.f3),v,u,t,s,r,q,p,o,B.T(w,n),B.T(w,n),B.T(w,n),B.T(w,n),A.cS,A.L,A.az,$.ax()),A.bF,A.J,A.J,A.Z,null,null)}}
C.aGn.prototype={
adC(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$adC=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.aA(),$async$adC)
case 6:q=n.k7(m.t(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new C.eym(s))
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
aay(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$aay=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new C.eyb(s))
u=3
w=6
return B.b(B.aA(),$async$aay)
case 6:e.aD("Bool","ngmy_core_lab_coach_v1",!0)
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
return B.i($async$aay,v)},
bPp(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a4(n).k("b8<2>")
v=""+n.a+"|"+o.length+"|"+new B.b8(n,w).cF(0,0,new C.eyd())+"|"+A.d.cF(o,0,new C.eye())
if(v===p.ch)return p.CW
u=new C.eyh()
t=x.s
s=B.a([],t)
r=new C.eyi(p,s,u)
for(n=new B.b8(n,w).gae(0),w=new B.eJ(n,new C.eyf());w.C();){q=n.gR(0)
if(!A.d.aV(o,new C.eyg(q)))s.push(B.w(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.cX(s,0,B.dB(5,"count",x.S),x.N).dn(0)},
Y(){var w,v=this
v.a4()
v.adC()
v.d.db=v.ay
w=v.q1(new C.eyM(v))
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
w.bA1()},
ad7(d){return this.c2N(d)},
c2N(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$ad7=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.aA(),$async$ad7)
case 6:q=m.aV(l.t(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.Uo(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aZA(A.d.gH(D.aCf))
if(s.c!=null)s.m(new C.eyl())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ad7,v)},
aZA(d){this.d.cWa(0,d.c,d.d)
this.EL()},
EL(){var w=this.as
if(w!=null)w.a1(0)
this.as=B.cy(A.lJ,new C.ey7(this))},
az6(d){var w,v,u,t,s=this.d.a,r=B.a4(s).k("b8<2>")
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
ckx(d){var w,v,u,t,s,r=this.d.a,q=B.a4(r).k("b8<2>")
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
c2B(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.nc.h(0,r.b).c===D.xT)continue
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
cbD(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hC_(new B.p(n.a+36,n.b+0),new B.p(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cEo(d){var w,v,u,t,s,r,q=this,p=q.az6(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.eZ()
u=v.b
if(u==="button"){w.aHl(p)
return}if(q.r)return
t=D.nc.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.ro)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.b0()
q.EL()
return}if(q.r)return
r=q.cbD(d)
if(r!=null){w=q.d
A.d.cH(w.b,r)
w.b0()
q.EL()}},
clQ(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.ckx(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.az6(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aJ(0,d)}},
clR(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b0()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.p(A.j.D(d.a+s.y.a,46,t.a-46),A.j.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b0()}}},
b3X(){var w,v,u=this
if(u.z!=null){w=u.c2B(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.beU(v,w)}else v=!1
if(v){B.jZ()
u.EL()}u.z=null
u.d.b0()}else if(u.x!=null){if(u.at)u.EL()
u.x=null}},
adP(d){return this.c5G(d)},
c5G(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$adP=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.az6(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.k_()
p=t.c
p.toString
w=3
return B.b(B.bU(K.ma,null,new C.eyo(q),p,!0,!0,!1,A.lW,!1,!1,x.y),$async$adP)
case 3:if(f===!0){r.W(0,s)
t.EL()}case 1:return B.h(u,v)}})
return B.i($async$adP,v)},
cbB(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.tf(0,d,new B.p(v.a*(0.25+u.ai()*0.5),v.b*(0.2+u.ai()*0.55)))
B.eZ()
this.EL()},
ahM(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ahM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bU(K.ma,null,new C.eyq(),s,!0,!0,!0,A.lW,!1,!1,x.es),$async$ahM)
case 2:t=e
if(t!=null)u.aZA(t)
return B.h(null,v)}})
return B.i($async$ahM,v)},
afc(d){var w=0,v=B.j(x.H),u=this,t
var $async$afc=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.eya(),t,null,!0,!0,x.y),$async$afc)
case 2:if(f===!0){u.d.a8(0)
u.EL()}return B.h(null,v)}})
return B.i($async$afc,v)},
B(d){var w=this,v=null,u=B.a([B.ajA(w.r?new B.bL(A.a7,v,v,new B.D(A.H8,B.hs(D.bXA,D.fLN,new C.eyK(w),v),v),v):w.cbE(),A.b_,A.iP),B.E(B.co(new C.eyL(w)),1)],x.p)
if(!w.r)u.push(w.cz7())
return B.c4(v,A.c4,B.bm(!0,B.x(u,A.l,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)},
bL6(){var w=null,v=new C.eyc(),u=A.w.j(0.7),t=B.l(26),s=B.K(A.bw.j(0.5),A.r,1)
return B.bS(0,B.ea(B.as(B.r(w,B.cb(B.x(B.a([D.fXl,A.aw,D.h44,A.aC,v.$4(A.oK,A.bw,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(Y.Dd,A.cn,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.k8,A.bT,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.Pp,A.bl,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.h3m,new B.bL(A.aa,w,w,B.bP(!1,D.fUp,w,w,!0,w,w,w,this.gbL_(),w,w),w)],x.p),A.E,w,A.e,A.O,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),A.f,w,A.XW,new B.o(K.ma,w,s,t,w,w,A.n),w,w,w,A.fv,An.an8,w,w,w),w,w,w),u,!0),0,0,0)},
cbE(){var w=this,v=null,u=B.aI(v,v,v,v,Af.n9,v,v,v,new C.eyw(w),v,v,v,v,v,v),t=w.a9Z(A.D5,"How it works",new C.eyx(w),!0),s=w.ay?A.oL:V.tk
return new B.D(D.bI6,B.A(B.a([u,D.bJO,t,w.a9Z(s,"Sound",new C.eyy(w),!0),w.a9Z(A.ed,"Ideas",w.gcpC(),!0),w.a9Z(I.wO,"Clear",w.gcbC(w),!0),w.aQa(A.hn,"Show",new C.eyz(w),!0,!0)],x.p),A.l,v,A.e,A.i,0,v,v),v)},
aQa(d,e,f,g,h){var w=null,v=h?A.bw:A.c.j(0.08),u=B.l(14),t=B.l(14),s=B.a([B.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new B.D(Ac.wE,B.aH(!1,A.a3,!0,u,B.aN(!1,t,!0,B.h9(new B.D(new B.R(8,8,8,8),B.A(s,A.l,w,A.e,A.O,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.aj),w)},
a9Z(d,e,f,g){return this.aQa(d,e,f,g,!1)},
cz7(){var w=null,v=new C.eys(this),u=A.c.j(0.08)
return B.r(w,B.cb(B.A(B.a([v.$2("START",D.xT),v.$2("CHANGE",D.Fi),v.$2("REACT",D.ro)],x.p),A.E,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,A.aL),A.f,w,w,new B.o(K.C1,w,new B.bG(new B.ay(u,1,A.r,-1),A.a1,A.a1,A.a1),w,w,w,A.n),w,w,w,w,D.bD5,w,w,w)},
cz8(d){var w,v,u,t,s=null,r=D.nc.h(0,d)
r.toString
w=B.l(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.K(v.j(0.5),A.r,1)
return new B.D(A.fn,B.az(s,B.r(s,B.x(B.a([B.X(r.b,v,s,s,s,22),A.cR,B.d(r.a,s,1,A.a2,s,s,s,D.aWR,s,s,s)],x.p),A.l,s,A.e,A.O,0,A.p),A.f,s,s,new B.o(s,s,t,w,s,new B.a8(A.b0,A.b7,A.x,u,s,s),A.n),s,s,s,s,A.hL,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eyr(this,d),s,s,s,s,s,s,!1,A.a4),s)}}
C.bjE.prototype={
a5(b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=b2.b,b5=b4.ax,b6=b7.c
J.bq(b6.save())
w=b4.ch
if(b5<w){v=(w-b5)/380
b6.translate(Math.sin(b5*0.09)*9*v,Math.cos(b5*0.13)*7*v)}$.S()
u=B.L()
u.r=A.c.j(0.05).gp(0)
for(w=b8.b,t=b8.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28)b7.N(new B.p(r,s),1,u)
q=b4.CW
if(b5<q){$.S()
p=B.L()
p.r=b4.cx.j(0.4*((q-b5)/800)).gp(0)
b7.ar(new B.a1(0,0,0+t,0+w),p)}for(w=b4.b,t=w.length,q=x.O,p=x.v,o=b4.a,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){m=w[n]
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
d=new B.aG(f.r,A.ai,b3,b3,e)
e.push(new B.aZ(i,j))
d.ab()
a0=Math.max(40,Math.abs(g-i)*0.5)
f=new B.ko(i+a0,j,g-a0,h,g,h)
e.push(f)
e=d.f
if(e!=null)f.ak(e)
d.ab()
a1=D.nc.h(0,l.b).d
a2=D.nc.h(0,k.b).d
f=new B.ao(A.P,A.M,A.R,A.S,A.Q)
f.b=A.a9
f.c=3
f.d=A.bv
e=B.a([a1.j(0.55),a2.j(0.55)],q)
h=B.t3(new B.p(i,j),new B.p(g,h))
f.sav(new B.a8(A.a7,A.aa,A.x,e,b3,b3).aK(0,new B.a1(h.a-2,h.b-2,h.c+2,h.d+2)))
b7.af(d,f)}for(w=b4.d,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a3=w[n]
l=o.h(0,a3.a)
k=o.h(0,a3.b)
if(l==null||k==null)continue
j=a3.c
a4=A.j.D((b5-j)/(a3.d-j),0,1)
j=l.c
i=k.c
a5=C.hC_(new B.p(j.a+36,j.b+0),new B.p(i.a-36,i.b),a4)
$.S()
i=new B.ao(A.P,A.M,A.R,A.S,A.Q)
i.r=A.c.j(0.35).gp(0)
i.y=N.oz
b7.N(a5,8,i)
i=new B.ao(A.P,A.M,A.R,A.S,A.Q)
i.r=A.c.gp(0)
b7.N(a5,4,i)}a6=b2.d.$0()
if(a6!=null&&o.h(0,a6)!=null){a7=o.h(0,a6).c.a2(0,D.JK)
a8=b2.e.$0()
w=a8.a
t=a7.a
a0=Math.max(40,Math.abs(w-t)*0.5)
d=new B.aG($.S().r,A.ai,b3,b3,B.a([],p))
p=a7.b
d.E(new B.aZ(t,p))
j=a8.b
d.E(new B.ko(t+a0,p,w-a0,j,w,j))
j=B.L()
j.b=A.a9
j.c=3
j.r=A.c.j(0.7).gp(0)
b7.af(d,j)
j=B.L()
j.r=A.c.gp(0)
b7.N(a8,7,j)}for(w=b4.f,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a9=w[n]
p=a9.c
v=A.j.D((b5-p)/700,0,1)
if(b5<p)continue
p=A.dK.aA(0,v)
$.S()
j=new B.ao(A.P,A.M,A.R,A.S,A.Q)
j.b=A.a9
i=1-v
j.c=3.5*i+0.5
j.r=a9.b.j(i*0.9).gp(0)
b7.N(a9.a,14+a9.d*p,j)}for(w=b4.w,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){b0=w[n]
v=A.j.D((b5-b0.d)/600,0,1)
p=b0.a
j=b0.b
i=B.kw(p,j,A.dK.aA(0,v))
i.toString
j=B.kw(p,j,A.dK.aA(0,A.j.D(v-0.35,0,1)))
j.toString
$.S()
p=new B.ao(A.P,A.M,A.R,A.S,A.Q)
p.c=5
p.d=A.bv
h=b0.c
g=B.a([h.j(0),h],q)
f=B.t3(j,i)
p.sav(new B.a8(A.a7,A.aa,A.x,g,b3,b3).aK(0,new B.a1(f.a-4,f.b-4,f.c+4,f.d+4)))
b7.ah(j,i,p)
p=new B.ao(A.P,A.M,A.R,A.S,A.Q)
p.r=A.c.gp(0)
b7.N(i,6,p)
p=new B.ao(A.P,A.M,A.R,A.S,A.Q)
p.r=h.j(0.5*(1-v)).gp(0)
p.y=A.kV
b7.N(i,12,p)}for(w=b4.e,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a3=w[n]
v=A.j.D((b5-a3.f)/a3.e,0,1)
p=a3.a
$.S()
j=new B.ao(A.P,A.M,A.R,A.S,A.Q)
j.r=a3.c.j(1-v).gp(0)
b7.N(p,a3.d*(1-0.5*v),j)}for(w=b4.r,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){k=w[n]
p=k.a
$.S()
j=new B.ao(A.P,A.M,A.R,A.S,A.Q)
i=k.c
j.r=i.j(0.35).gp(0)
j.y=A.kV
b7.N(p,11,j)
j=k.a
p=new B.ao(A.P,A.M,A.R,A.S,A.Q)
p.sav(new B.bY(A4.Bl,0.5,A.x,b3,0,B.a([A.c,i],q),b3,b3).aK(0,B.bZ(k.a,8)))
b7.N(j,8,p)}for(b4=b4.x,w=b4.length,n=0;n<b4.length;b4.length===w||(0,B.I)(b4),++n){a5=b4[n]
v=A.j.D((b5-a5.d)/1000,0,1)
t=1-v
b1=C.bjF(a5.b,26+8*t,a5.c.j(t),b3,b3,A.u)
t=a5.a
q=b1.b
p=q.c
q=q.a.c
b1.a5(b7,new B.p(t.a-p/2,t.b-(40+60*v+q.gba(q)/2)))}for(b4=new B.dq(o,o.r,o.e);b4.C();)b2.clo(b7,b4.d,b5)
b6.restore()},
clo(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.nc.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.j.D(1-(f-w)/520,0,1)
u=B.bt(e.c,64,64)
t=B.bn(u,A.is)
s=t.eQ(A.cz)
$.S()
r=B.L()
r.r=A.w.j(0.55).gp(0)
r.y=A.mg
d.an(s,r)
if(v>0){s=t.cn(6)
r=B.L()
r.r=h.d.j(0.6*v).gp(0)
r.y=A.wF
d.an(s,r)}s=t.eQ(A.cL)
r=B.L()
q=h.d
r.r=B.ar(q,A.w,0.65).gp(0)
d.an(s,r)
r=B.L()
s=B.ar(q,A.c,0.18+0.4*v)
s.toString
p=B.ar(q,A.w,0.35)
p.toString
r.sav(new B.a8(A.b0,A.b7,A.x,B.a([s,p],x.O),j,j).aK(0,u))
d.an(t,r)
r=B.L()
r.b=A.a9
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.an(t,r)
r=h.b
p=e.c
o=C.bjF(B.lC(r.a),30,A.c,r.b,j,A.I)
r=o.b
s=r.c
r=r.a.c
o.a5(d,p.aJ(0,new B.p(s/2,r.gba(r)/2)))
n=C.bjF(h.a,11,A.c,j,j,A.I)
n.a5(d,e.c.a2(0,new B.p(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.aCO[A.o.F(e.d,6)]:j
h=h.c
if(h===D.ro){s=e.c.a2(0,new B.p(0,62))
r=B.L()
r.r=D.aDs[A.o.F(e.d,6)].gp(0)
d.N(s,5,r)}else if(m!=null){l=C.bjF(m,9.5,A.aF,j,j,A.U)
l.a5(d,e.c.a2(0,new B.p(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bjF(m,9.5,A.aF,j,j,A.U)
l.a5(d,e.c.a2(0,new B.p(-l.b.c/2,54)))}if(k.c)return
if(h!==D.xT)k.b4K(d,e.c.aJ(0,D.JK),q)
k.b4K(d,e.c.a2(0,D.JK),q)},
b4K(d,e,f){var w
$.S()
w=B.L()
w.r=A.c4.gp(0)
d.N(e,9,w)
w=B.L()
w.b=A.a9
w.c=2.2
w.r=f.gp(0)
d.N(e,9,w)
w=B.L()
w.r=A.c.gp(0)
d.N(e,3.5,w)},
aE(d){return!0}}
C.aOm.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.eh.prototype={}
C.u1.prototype={
asd(d,e,f,g){var w=this
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
C.abG.prototype={}
C.acN.prototype={}
C.a5H.prototype={
bgM(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.h3()?-1:1
v=t.ai()*3.141592653589793*2
u=f*(0.3+t.ai())
s.push(new C.abG(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ai()*0.45));++r}},
c7P(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bq(w,new C.bQh())},
ali(d,e,f,g){var w="p"+this.c++,v=new C.u1(w,e,f,g)
v.asd(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bq(this.b,new C.bQs(e))},
a8(d){A.d.a8(this.a)
A.d.a8(this.b)},
cN9(d,e,f,g,h){return A.d.aV(this.b,new C.bQn(e,f,g,h))},
am9(d,e,f,g){var w
if(d===f||this.cN9(0,d,e,f,g))return null
w=new C.acN(d,e,f,g)
this.b.push(w)
return w},
aCN(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
Ak(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
aoV(d){return this.Mo(d)&&!d.x&&d.cx>this.Ak(d)},
b96(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Mo(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
cbY(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.Af.h(0,v)
if(w!=null)return w.a
return 100},
vN(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c7P(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.U(v).k("Y<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.I)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.Y(v,new C.bQt(a2),t).cF(0,0,new C.bQu(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.T(x.N,u)
n=new C.bQw(o)
m=B.a([],x.t)
l=new C.bQv(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.I)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.I)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.T(u,u)
f=new C.bQy(g,l,n)
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
a2.b92(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.Ak(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b92(e,d,w,!0)
a2.bRL(a4)},
b92(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.T(x.N,b3),b5=new C.bQj(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bQi(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.I)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bQl(B.T(b3,b3),r,b5)
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
if(h)B.bj(B.dO(g,null))
e=B.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=B.c1(b7,0,!1,b3)
a0=B.c1(b7,0,!1,b3)
k.a8(0)
j.a8(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.I)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b96(t)*(1+t.CW))
a4=b2.aCN(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.cbY(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bV7(e,a0,b8)
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
bV7(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
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
bRL(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.I)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aCN(o)/a1.b96(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.Ak(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bJK(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bgM(o,3,260)
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
if(l>26)a1.ut(o,"The "+$.qH().h(0,n).b+" got "+A.j.ad(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.ut(o,"More than 1.5 amps went through the "+$.qH().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.ut(o,"The regulator had to turn "+A.j.ad(o.cy,1)+" V into heat while "+A.j.V(i*1000)+" mA flowed. That is "+A.j.ad(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.ut(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.Af.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qH().h(0,n).b
l=f.b
l=l===A.j.iI(l)?""+A.j.V(l):B.w(l)
g=f.c
g=g===A.j.iI(g)?""+A.j.V(g):B.w(g)
a1.ut(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.j.ad(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.ff5.q(0,n)){m=o.fx>0?A.j.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
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
bJK(d){return A.d.aV(this.a,new C.bQg(d))},
ut(d,e){var w
d.x=!0
d.ay=e
this.bgM(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
blq(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a8(0)},
aJ7(d){var w=d.b
return D.aTD.q(0,w)||D.Af.am(0,w)||w==="buck"||w==="regulator"},
bif(d){var w,v=!0
if(!this.Mo(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.Af.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
VD(d,e){var w=this.b
return new B.Y(w,new C.bQA(d,e),B.U(w).k("Y<1>")).gJ(0)},
ru(d){var w,v
if(d.x)return!1
w=d.b
if(D.Af.am(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bgi(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qH().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aJ7(d)||i.ru(d))return null
w=i.VD(d,0)
v=i.VD(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.U(u).k("Y<1>")
s=B.C(new B.Y(u,i.gcVK(),t),t.k("M.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.j.iI(r)?""+A.j.V(r):B.w(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.j.ad(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.Af.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.MB("battery"),o=J.aT(t.a),t=new B.eJ(o,t.b);t.C();){n=o.gR(o)
if(n.e===1.5&&n.as<=0.02&&i.VD(n,0)+i.VD(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.MB("switch"),o=J.aT(t.a),t=new B.eJ(o,t.b);t.C();)if(!o.gR(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qH().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.Ak(k))return"The "+$.qH().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.j.ad(k.cx,2)+" amps, but it can only give about "+A.j.ad(i.Ak(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.aV(u,new C.bQo(i,d))
h=q.b
h=h===A.j.iI(h)?""+A.j.V(h):B.w(h)
u=A.j.ad(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.j.ad(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.j.ad(Math.abs(d.dy),1)+" V). Try a bigger battery."},
MB(d){var w=this.a
return new B.Y(w,new C.bQr(d),B.U(w).k("Y<1>"))},
aIJ(d){return this.MB(d).aV(0,new C.bQq(0.35))},
qe(d,e){return A.d.aV(this.a,new C.bQp(e))}}
C.aka.prototype={
a5(c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8=c3.a,b9=c3.b,c0=0+b8,c1=0+b9
$.S()
w=B.L()
w.r=F.ny.gp(0)
c2.ar(new B.a1(0,0,c0,c1),w)
v=B.L()
v.r=A.c.j(0.06).gp(0)
for(u=12;u<b8;u+=24)for(t=12;t<b9;t+=24)c2.N(new B.p(u,t),1.1,v)
for(w=b6.b,s=w.b,r=s.length,q=b6.f,p=0;p<s.length;s.length===r||(0,B.I)(s),++p){o=s[p]
n=o.a
m=n.c
l=o.b===0?-1:1
k=D.mt.am(0,n.b)?(n.ch-1)*38:0
n=n.d
j=o.c
i=j.c
h=o.d===0?-1:1
g=D.mt.am(0,j.b)?(j.ch-1)*38:0
b6.cJR(c2,new B.p(m*b8+l*(42+k),n*b9),new B.p(i*b8+h*(42+g),j.d*b9),o,o===q)}s=b6.d
if(s!=null&&b6.e!=null){f=C.hPM(s.a,s.b,c3)
s=b6.e
s.toString
$.S()
r=B.L()
r.r=A.ab.gp(0)
r.c=3
r.d=A.bv
c2.ah(f,s,r)}for(s=w.a,r=s.length,q=b6.c,n=c2.c,m=b6.r,l=x.v,p=0;p<s.length;s.length===r||(0,B.I)(s),++p){e=s[p]
k=e.c*b8
j=e.d*b9
if(e.Q>0){i=Math.sin(w.d*30)
$.S()
h=new B.ao(A.P,A.M,A.R,A.S,A.Q)
h.r=F.MP.j(A.j.D(e.Q*0.45,0,0.6)).gp(0)
h.y=A.wF
c2.N(new B.p(k,j),46+14*i,h)}d=m.h(0,e.a)
if(d==null)d=1
J.bq(n.save())
n.translate(k,j)
i=A.j.D(A.lc.aA(0,A.j.D(d,0,1)),0.01,1.4)
n.scale(i,i)
b6.cmn(c2,e,e===q)
n.restore()
i=e.b
if((i==="battery"||i==="solar"||i==="crank"||i==="turbine")&&!e.x&&e.cx>w.Ak(e)){h=k+0
g=j+-40
a0=Math.sin(w.d*10)
a1=$.S().r
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
a8=new B.bu()
a2.push(a8)
a2=a3.f
if(a2!=null)a8.ak(a2)
a3.ab()
a2=new B.ao(A.P,A.M,A.R,A.S,A.Q)
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
a0=new B.bu()
a2.push(a0)
a2=a1.f
if(a2!=null)a0.ak(a2)
a1.ab()
a0=new B.ao(A.P,A.M,A.R,A.S,A.Q)
a0.b=A.a9
a0.c=1.6
a0.r=A.c.gp(0)
c2.af(a1,a0)
b0=new B.iL(new B.eq("!",b7,b7,A.cN,b7,b7,b7,b7,b7,b7,new B.F(!0,A.c,b7,b7,b7,b7,14,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bX,new B.jj(1),b7,b7,b7,b7,A.bY,b7,A.ct)
b0.e5()
b0.a5(c2,new B.p(h+-3,g+-8))}if(!e.x)h=(D.aTD.q(0,i)||D.Af.am(0,i)||i==="buck"||i==="regulator")&&!w.ru(e)&&w.VD(e,0)+w.VD(e,1)>0
else h=!1
if(h){k+=0
j+=-40
$.S()
h=new B.ao(A.P,A.M,A.R,A.S,A.Q)
h.r=A.at.gp(0)
c2.N(new B.p(k,j),10,h)
b0=new B.iL(new B.eq("!",b7,b7,A.cN,b7,b7,b7,b7,b7,b7,new B.F(!0,A.w,b7,b7,b7,b7,14,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bX,new B.jj(1),b7,b7,b7,b7,A.bY,b7,A.ct)
b0.e5()
b0.a5(c2,new B.p(k+-3,j+-8))}for(b1=0;b1<2;++b1){k=e.c
j=b1===0
h=j?-1:1
g=D.mt.am(0,i)?(e.ch-1)*38:0
g=k*b8+h*(42+g)
h=e.d*b9
b0=new B.p(g,h)
$.S()
k=new B.ao(A.P,A.M,A.R,A.S,A.Q)
k.r=F.ny.gp(0)
c2.N(b0,7,k)
k=new B.ao(A.P,A.M,A.R,A.S,A.Q)
k.b=A.a9
k.c=2.4
k.r=(j&&w.bif(e)?A.bZ:A.ab).gp(0)
c2.N(b0,6,k)
if(j&&w.bif(e)){b0=new B.iL(new B.eq("+",b7,b7,A.cN,b7,b7,b7,b7,b7,b7,new B.F(!0,A.bZ,b7,b7,b7,b7,13,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bX,new B.jj(1),b7,b7,b7,b7,A.bY,b7,A.ct)
b0.e5()
b0.a5(c2,new B.p(g+-4,h+-22))}}}for(r=w.f,q=r.length,p=0;p<r.length;r.length===q||(0,B.I)(r),++p){b2=r[p]
n=b2.a*b8+b2.c
m=b2.b*b9+b2.d
b3=new B.p(n,m)
b4=A.j.D(b2.r/0.8,0,1)
l=B.ar(M.Nv,F.a_x,b4)
l.toString
k=b2.f
$.S()
j=new B.ao(A.P,A.M,A.R,A.S,A.Q)
j.r=l.gp(0)
j.c=2.4
j.d=A.bv
c2.ah(b3,new B.p(n-b2.e*0.035,m-k*0.035),j)
j=new B.ao(A.P,A.M,A.R,A.S,A.Q)
j.r=l.j(0.35*b4).gp(0)
j.y=A.OE
c2.N(b3,4.5*b4+1,j)}if(A.d.aV(s,new C.bKE())){b5=A.d.cF(s,0,new C.bKF())
$.S()
b9=B.L()
b9.r=D.bi4.j(0.05+0.09*b5*(0.5+0.5*Math.sin(w.d*22))).gp(0)
c2.ar(new B.a1(0,0,c0,c1),b9)
b0=B.ft(b7,A.ct,b7,b7,b7,D.fqj,A.a5,A.bX,b7,A.dE,A.bY)
b0.o8(b8-24)
b0.a5(c2,new B.p(12,10))}},
qU(d,e,f,g,h){var w=null,v=B.ft(w,A.ct,w,w,w,B.cQ(w,w,w,w,w,w,w,w,w,B.m(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a5,A.bX,w,A.dE,A.bY)
v.e5()
v.a5(d,f)},
cJR(d,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.aG($.S().r,A.ai,null,null,B.a([],x.v))
e.E(new B.aZ(a0.a,a0.b))
w=C.hHM(a0,a1,a2)
e.E(new B.c7(w.a,w.b,a1.a,a1.b))
v=a2.a
u=Math.abs(v.fr)
t=a2.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ar(A.aQ,F.MP,A.j.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ar(A.aG,A.aQ,A.j.D(r*1.2,0,1))
u.toString
o=u}else o=A.bh
u=B.L()
u.b=A.a9
u.c=a3?7:5
u.d=A.bv
s=a3?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
d.af(e,u)
u=B.L()
u.b=A.a9
u.c=2.4
u.d=A.bv
u.r=(a3?A.c:o).gp(0)
d.af(e,u)
if(q){n=new B.U1(new B.rA(B.xO(e),!1,B.a([],x.R))).gH(0)
m=40+A.j.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=this.b
k=0
for(;;){v.iz()
j=t[u].b
j===$&&B.c()
if(!(k<j.a.length()/22))break
j=s.d
v.iz()
i=t[u].b
i===$&&B.c()
i=A.j.F(k*22+j*m*l,i.a.length())
v.iz()
j=t[u].b
j===$&&B.c()
j=j.a.length()
v.iz()
h=t[u].b
h===$&&B.c()
g=A.j.F(i+j,h.a.length())
v.iz()
f=t[u].Di(g)
j=new B.ao(A.P,A.M,A.R,A.S,A.Q)
j.r=A.c.gp(0)
d.N(f.a,2.6,j);++k}}},
PM(d,e,f,g){var w,v,u,t
$.S()
w=B.L()
v=g?A.b0:A.a7
u=g?A.b7:A.aa
t=B.ar(e,A.w,0.3)
t.toString
w.sav(new B.a8(v,u,A.x,B.a([e,f,e,t],x.O),A.IA,null).aK(0,d))
return w},
ayh(d,e,f){return this.PM(d,e,f,!0)},
c7o(d,e){return this.PM(d,A.bh,A.i0,e)},
aiW(d,e){var w,v,u
$.S()
w=B.L()
w.sav(D.aRN.aK(0,B.bZ(e,4.2)))
d.N(e,4.2,w)
w=e.a2(0,D.erv)
v=e.a2(0,D.erE)
u=B.L()
u.r=A.cQ.gp(0)
u.c=1.2
d.ah(w,v,u)},
cmn(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.S(),c0=B.L()
c0.sav(D.c7J.aK(0,D.fbj))
c0.c=3.4
c0.d=A.bv
w=B.L()
w.r=A.w.j(0.45).gp(0)
w.y=N.oz
c1.bZ(D.fb7,w)
if(c3){w=B.bn(D.fbh,A.jP)
v=B.L()
v.r=A.c.j(0.14).gp(0)
c1.an(w,v)}u=C.hmI(c2)
c1.ah(new B.p(-u,0),D.et6,c0)
c1.ah(D.eqa,new B.p(u,0),c0)
t=c2.x
w=c2.b
s=D.mt.am(0,w)&&c2.ch!==1
if(s){J.bq(c1.c.save())
c1.bU(0,c2.ch)}switch(w){case"battery":b3.bGu(c1,c2)
break
case"solar":r=B.bn(D.fba,A.iF)
c1.an(r,b3.PM(new B.a1(r.a,r.b,r.c,r.d),A.cW,A.bP,!1))
b9=B.L()
w=B.ar(D.bm_,A.d7,0.25+0.55*c2.f)
w.toString
v=B.ar(D.bvn,A.mW,0.3+0.4*c2.f)
v.toString
b9.sav(new B.a8(A.aA,A.aD,A.x,B.a([w,v],x.O),b4,b4).aK(0,D.aa4))
c1.ar(D.aa4,b9)
q=B.L()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(p=1;p<6;++p){b9=-34+p*68/6
c1.ah(new B.p(b9,-18),new B.p(b9,18),q)}for(p=1;p<4;++p){b9=-18+p*9
c1.ah(new B.p(-34,b9),new B.p(34,b9),q)}for(p=0;p<6;++p){b9=-34+(p+0.5)*68/6
$.S()
w=new B.ao(A.P,A.M,A.R,A.S,A.Q)
w.r=A.cx.j(0.5).gp(0)
w.c=0.6
c1.ah(new B.p(b9,-18),new B.p(b9,18),w)}b9=new B.aG($.S().r,A.ai,b4,b4,B.a([],x.v))
b9.E(new B.aZ(-34,18))
b9.E(new B.aq(-6+40*c2.f,-18))
b9.E(new B.aq(4+40*c2.f,-18))
b9.E(new B.aq(-24,18))
b9.E(new B.bu())
w=B.L()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.af(b9,w)
w=c2.f
b9=B.L()
b9.r=A.dC.j(0.9).gp(0)
c1.N(D.eqe,4+4*w,b9)
break
case"crank":o=B.bn(D.faW,A.fS)
c1.an(o,b3.ayh(new B.a1(o.a,o.b,o.c,o.d),A.bx,A.bN))
b9=B.L()
b9.sav(D.aRO.aK(0,B.bZ(A.J,12)))
c1.N(A.J,12,b9)
n=new B.p(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=B.L()
b9.r=A.cx.gp(0)
b9.c=5
b9.d=A.bv
c1.ah(A.J,n,b9)
b9=B.L()
b9.sav(D.eCB.aK(0,B.bZ(n,7)))
c1.N(n,7,b9)
b3.aiW(c1,D.esZ)
b3.aiW(c1,D.eq_)
break
case"turbine":b9=b9.r
w=x.v
v=new B.aG(b9,A.ai,b4,b4,B.a([],w))
v.E(new B.aZ(-3,24))
v.E(new B.aq(3,24))
v.E(new B.aq(1.5,0))
v.E(new B.aq(-1.5,0))
v.E(new B.bu())
m=B.L()
m.r=A.bP.gp(0)
c1.af(v,m)
for(v=c1.c,l=0;l<3;++l){m=c2.y
J.bq(v.save())
v.rotate((m+l*2.094)*180/3.141592653589793,0,0)
m=B.a([],w)
k=new B.aG(b9,A.ai,b4,b4,m)
m.push(new B.aZ(0,-2))
k.ab()
j=new B.c7(6,-14,2,-30)
m.push(j)
i=k.f
if(i!=null)j.ak(i)
k.ab()
j=new B.c7(-2,-14,0,-2)
m.push(j)
i=k.f
if(i!=null)j.ak(i)
k.ab()
j=new B.bu()
m.push(j)
m=k.f
if(m!=null)j.ak(m)
k.ab()
m=new B.ao(A.P,A.M,A.R,A.S,A.Q)
m.r=A.c.gp(0)
c1.af(k,m)
v.restore()}b9=B.L()
b9.sav(D.eCi.aK(0,B.bZ(A.J,4.5)))
c1.N(A.J,4.5,b9)
break
case"switch":o=B.bn(D.fb2,A.mw)
b9=B.L()
b9.sav(D.atG.aK(0,new B.a1(o.a,o.b,o.c,o.d)))
c1.an(o,b9)
b3.aiW(c1,D.Uf)
b3.aiW(c1,D.aMA)
h=c2.w?D.aMA:H.aMq
b9=B.L()
b9.r=A.as.gp(0)
b9.c=6
b9.d=A.bv
c1.ah(D.Uf,h,b9)
b9=B.L()
b9.r=(c2.w?A.b4:A.bP).gp(0)
b9.c=4
b9.d=A.bv
c1.ah(D.Uf,h,b9)
b9=B.kw(D.Uf,h,0.85)
b9.toString
w=B.L()
w.r=A.ay.gp(0)
c1.N(b9,5,w)
break
case"fuse":g=B.bn(D.aSw,D.aRT)
b9=B.L()
b9.r=A.fM.j(0.25).gp(0)
c1.an(g,b9)
b9=B.L()
b9.b=A.a9
b9.c=1.4
b9.r=A.aF.gp(0)
c1.an(g,b9)
if(!t){b9=B.L()
b9.c=1.6
b9.r=B.ar(A.bP,A.cI,c2.fx).gp(0)
c1.ah(D.aMT,D.aMy,b9)}else{b9=B.L()
b9.c=1.6
b9.r=A.bW.gp(0)
c1.ah(D.aMT,D.ets,b9)
b9=B.L()
b9.c=1.6
b9.r=A.bW.gp(0)
c1.ah(F.er1,D.aMy,b9)
b9=B.L()
b9.r=A.dZ.gp(0)
c1.N(A.J,6,b9)}for(f=0;f<2;++f){e=B.bt(new B.p(M.fF[f]*22,0),20,9)
c1.an(B.bn(e,A.hW),b3.PM(e,A.d3,A.og,!0))}break
case"pot":b9=B.L()
b9.sav(D.eCt.aK(0,B.bZ(A.J,21)))
c1.N(A.J,21,b9)
for(l=0;l<=10;++l){d=2.356194490192345+l*3.141592653589793*1.5/10
b9=Math.cos(d)
w=Math.sin(d)
v=Math.cos(d)
m=Math.sin(d)
k=new B.ao(A.P,A.M,A.R,A.S,A.Q)
k.r=A.aF.gp(0)
k.c=1.2
c1.ah(new B.p(b9*18,w*18),new B.p(v*22,m*22),k)}b9=B.L()
b9.sav(D.eCg.aK(0,B.bZ(A.J,13)))
c1.N(A.J,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
m=Math.sin(a0)
k=B.L()
k.r=A.aQ.gp(0)
k.c=3
k.d=A.bv
c1.ah(new B.p(b9*3,w*3),new B.p(v*12,m*12),k)
break
case"resistor":a1=B.bn(D.aSw,D.aRT)
b9=B.L()
b9.sav(D.cb8.aK(0,new B.a1(a1.a,a1.b,a1.c,a1.d)))
c1.an(a1,b9)
b9=x.O
a2=B.J([47,B.a([B.b0(b5),B.b0(b6),A.w],b9),100,B.a([B.b0(b7),A.w,B.b0(b7)],b9),220,B.a([B.b0(b8),B.b0(b8),B.b0(b7)],b9),470,B.a([B.b0(b5),B.b0(b6),B.b0(b7)],b9),1000,B.a([B.b0(b7),A.w,B.b0(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(p=0;p<3;++p){b9=-14+p*9
w=new B.ao(A.P,A.M,A.R,A.S,A.Q)
w.r=a3[p].gp(0)
c1.ar(new B.a1(b9,-9,b9+4.5,9),w)}b9=B.L()
b9.r=A.aQ.gp(0)
c1.ar(D.fbv,b9)
b9=c2.r
b3.qU(c1,b9>=1000?"1k\u03a9":""+A.j.V(b9)+"\u03a9",D.esr,A.ab,10)
break
case"bulb":w=c2.fx
if(w>0){v=B.L()
v.r=A.dC.j(0.55*w).gp(0)
v.y=A.wF
c1.N(H.vA,34,v)}o=B.bt(D.eoU,12,18)
c1.an(B.bn(o,A.hW),b3.PM(o,A.bh,A.e2,!0))
for(p=0;p<3;++p){w=13+p*3.5
v=new B.ao(A.P,A.M,A.R,A.S,A.Q)
v.r=A.dx.gp(0)
v.c=1
c1.ah(new B.p(-9,w),new B.p(9,w),v)}w=B.L()
if(t)v=A.MF
else{v=B.ar(A.e2,A.hz,c2.fx)
m=c2.fx
v=v.j(0.25+0.7*m)}if(t)m=A.Gc
else{m=B.ar(A.cW,A.dC,c2.fx)
m.toString}w.sav(new B.bY(A.pb,0.5,A.x,b4,0,B.a([v,m.j(0.18+0.5*c2.fx)],x.O),b4,b4).aK(0,B.bZ(A.tD,17)))
c1.N(A.tD,17,w)
w=B.L()
w.b=A.a9
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.N(A.tD,17,w)
b9=b9.r
w=x.v
m=new B.aG(b9,A.ai,b4,b4,B.a([],w))
m.E(new B.aZ(-9,-12))
m.E(new B.c7(-12,-4,-9,0))
v=B.L()
v.b=A.a9
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.af(m,v)
v=B.L()
v.r=A.cB.gp(0)
v.c=1.4
c1.ah(D.etm,D.eto,v)
v=B.L()
v.r=A.cB.gp(0)
v.c=1.4
c1.ah(D.eqV,D.eqY,v)
w=B.a([],w)
a4=new B.aG(b9,A.ai,b4,b4,w)
a4.E(new B.aZ(-4,-2))
for(l=0;l<6;l=a5){a5=l+1
b9=(l&1)===0?-6:1
b9=new B.aq(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.ak(v)
a4.ab()}$.S()
b9=B.L()
b9.b=A.a9
b9.c=1.8
if(t)w=A.b6
else{w=B.ar(A.cW,D.bn0,c2.fx)
w.toString}b9.r=w.gp(0)
c1.af(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=B.L()
v.r=A.ay.j(0.6*w).gp(0)
v.y=D.bJB
c1.N(A.tD,30,v)}w=B.L()
w.r=A.e2.gp(0)
w.c=2.4
c1.ah(D.etu,D.ett,w)
w=B.L()
w.r=A.e2.gp(0)
w.c=2.4
c1.ah(D.er3,D.er2,w)
b9=b9.r
w=x.v
a6=new B.aG(b9,A.ai,b4,b4,B.a([],w))
a6.E(new B.aZ(-12,8))
a6.E(new B.aq(-12,-6))
a6.E(new B.c7(0,-26,12,-6))
a6.E(new B.aq(12,8))
a6.E(new B.bu())
v=B.L()
if(t)m=A.jp
else{m=B.ar(A.em,D.boK,c2.fx)
m.toString}if(t)k=A.kR
else{k=B.ar(A.kt,A.ay,c2.fx)
k.toString}v.sav(new B.a8(A.aA,A.aD,A.x,B.a([m,k],x.O),b4,b4).aK(0,D.fan))
c1.af(a6,v)
v=B.L()
v.b=A.a9
v.c=1.2
v.r=A.k_.gp(0)
c1.af(a6,v)
v=B.L()
v.r=A.en.gp(0)
c1.ar(D.fat,v)
w=new B.aG(b9,A.ai,b4,b4,B.a([],w))
w.E(new B.aZ(-7,-4))
w.E(new B.c7(-6,-12,0,-15))
b9=B.L()
b9.b=A.a9
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.af(w,b9)
break
case"motor":a7=new B.a1(-28,-14,20,14)
c1.an(B.bn(a7,A.hX),b3.ayh(a7,A.an,A.bj))
b9=B.L()
b9.r=A.cm.gp(0)
c1.ar(D.f9X,b9)
b9=B.L()
b9.r=A.cx.gp(0)
c1.ar(D.f9Z,b9)
b9=c1.c
J.bq(b9.save())
b9.translate(31,0)
for(l=0;l<3;++l){J.bq(b9.save())
b9.rotate((c2.y+l*2.094)*180/3.141592653589793,0,0)
w=B.bt(H.aMl,15,7)
v=new B.ao(A.P,A.M,A.R,A.S,A.Q)
v.r=A.cI.j(0.9).gp(0)
c1.bZ(w,v)
b9.restore()}w=B.L()
w.r=A.as.gp(0)
c1.N(A.J,3,w)
b9.restore()
b3.qU(c1,"M",D.esY,A.as,14)
break
case"buzzer":a8=B.bt(A.J,42,42)
b9=B.L()
b9.sav(D.eCx.aK(0,a8))
c1.bZ(a8,b9)
b9=B.L()
b9.r=A.w.gp(0)
c1.N(A.J,6,b9)
b9=B.L()
b9.b=A.a9
b9.c=1.4
b9.r=A.aT.gp(0)
c1.N(A.J,6,b9)
b3.qU(c1,"+",D.esR,A.ab,12)
for(b9=b3.b,l=1;l<=3;++l){w=c2.fx
v=w>0?A.j.F(b9.d*14,5):0
v=B.bZ(A.J,24+l*5+v)
m=new B.ao(A.P,A.M,A.R,A.S,A.Q)
m.b=A.a9
m.c=2
m.r=A.bT.j(w*(1-l*0.22)).gp(0)
c1.cB(v,-0.7,1.4,!1,m)}break
case"heater":o=B.bn(D.faZ,A.hX)
w=B.L()
w.sav(D.c8L.aK(0,new B.a1(o.a,o.b,o.c,o.d)))
c1.an(o,w)
w=B.a([],x.v)
a9=new B.aG(b9.r,A.ai,b4,b4,w)
a9.E(new B.aZ(-24,0))
for(l=0;l<8;l=a5){b9=(l&1)===0?-10:10
a5=l+1
b9=new B.c7(-24+l*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.ak(v)
a9.ab()}b9=c2.fx
if(b9>0.1){$.S()
w=B.L()
w.b=A.a9
w.c=10
w.r=D.bnK.j(0.5*b9).gp(0)
w.y=A.kV
c1.af(a9,w)}$.S()
b9=B.L()
b9.b=A.a9
b9.c=3.2
b9.d=A.bv
b9.r=B.ar(A.m8,A8.yv,c2.fx).gp(0)
c1.af(a9,b9)
break
case"capacitor":a7=new B.a1(-16,-22,16,18)
b9=B.bn(a7,A.hX)
w=B.L()
w.sav(D.c7B.aK(0,a7))
c1.an(b9,w)
w=B.L()
w.r=A.bP.gp(0)
c1.ar(D.faC,w)
for(p=0;p<4;++p){b0=new B.iL(new B.eq("\u2212",b4,b4,A.cN,b4,b4,b4,b4,b4,b4,new B.F(!0,A.as,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a5,A.bX,new B.jj(1),b4,b4,b4,b4,A.bY,b4,A.ct)
b0.e5()
b0.a5(c1,new B.p(-14,-18+p*9))}b1=new B.a1(-16,-24,16,-17)
c1.an(B.bn(b1,A.hW),b3.c7o(b1,!1))
b9=38*c2.fx
w=18-b9
$.S()
v=B.L()
v.r=A.b4.j(0.5).gp(0)
c1.ar(new B.a1(-3,w,11,w+b9),v)
b3.qU(c1,"1F",H.vA,A.c,11)
break
case"radio":a1=B.bn(D.aa4,A.fS)
b9=B.L()
b9.sav(D.cbm.aK(0,new B.a1(a1.a,a1.b,a1.c,a1.d)))
c1.an(a1,b9)
b9=B.L()
b9.b=A.a9
b9.c=1.4
b9.r=A.og.j(0.6).gp(0)
c1.an(a1,b9)
b9=B.bn(D.fb_,A.iF)
w=B.L()
w.r=A.dX.gp(0)
c1.an(b9,w)
for(p=0;p<6;++p){b9=-10+p*4.4
w=new B.ao(A.P,A.M,A.R,A.S,A.Q)
w.r=A.m8.gp(0)
w.c=1.4
c1.ah(new B.p(-27,b9),new B.p(-3,b9),w)}b9=B.L()
b9.r=(c2.fx>0?A.fA:A.oi).gp(0)
c1.ar(D.fa3,b9)
if(c2.fx>0){b9=8+A.j.F(b3.b.d*7,18)
w=B.L()
w.r=A.bD.gp(0)
w.c=1.6
c1.ah(new B.p(b9,-13),new B.p(b9,-3),w)}b9=B.L()
b9.sav(D.aRO.aK(0,B.bZ(D.a91,6)))
c1.N(D.a91,6,b9)
b9=B.L()
b9.r=A.og.gp(0)
c1.N(D.eq9,4,b9)
b9=B.L()
b9.r=A.e2.gp(0)
b9.c=1.8
c1.ah(D.eq4,D.aMF,b9)
if(c2.fx>0)for(b9=b3.b,l=1;l<=2;++l){w=B.bZ(D.aMF,4+l*5+A.j.F(b9.d*8,5))
v=new B.ao(A.P,A.M,A.R,A.S,A.Q)
v.b=A.a9
v.c=1.4
v.r=A.nv.j(0.7).gp(0)
c1.cB(w,-2.4,1.6,!1,v)}break
case"tv":w=B.bn(D.fb9,A.hX)
v=B.L()
v.r=M.nB.gp(0)
c1.an(w,v)
b2=B.bn(D.fb6,A.hW)
if(c2.fx>0&&!c2.x){b9=c1.c
J.bq(b9.save())
b9.clipRRect(B.nS(b2),$.np(),!0)
b9.translate(-33,-21)
L.hiF(c1,D.fhU,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=B.L()
b9.r=A.b4.gp(0)
c1.N(D.eql,1.6,b9)}else{w=B.L()
w.r=D.wl.gp(0)
c1.an(b2,w)
b9=new B.aG(b9.r,A.ai,b4,b4,B.a([],x.v))
b9.E(new B.aZ(-33,-21))
b9.E(new B.aq(-10,-21))
b9.E(new B.aq(-33,0))
b9.E(new B.bu())
w=B.L()
w.r=A.c.j(0.05).gp(0)
c1.af(b9,w)}b9=B.L()
b9.r=A.bx.gp(0)
c1.ar(D.fas,b9)
break}C.itk(c1,c2,b3.b.d,b3.gcbZ())
if(t)b3.qU(c1,"\u2716",D.etx,A.ay,14)
if(s)c1.c.restore()},
bGu(d,e){var w,v,u,t,s,r,q,p,o=this,n=e.e
if(n<=4.5){w=new B.a1(-28,-13,28,13)
d.an(B.bn(w,A.mw),o.ayh(w,A.cW,A.iN))
v=new B.a1(-22,-13,22,13)
$.S()
u=B.L()
u.sav(D.atz.aK(0,v))
d.ar(v,u)
u=B.L()
u.r=A.e_.gp(0)
d.ar(D.faM,u)
t=new B.a1(28,-5,34,5)
d.an(B.bn(t,A.hE),o.PM(t,A.cW,A.i0,!0))
o.qU(d,"+",D.epL,A.aQ,11)
o.qU(d,"\u2212",D.et_,A.ab,11)
o.qU(d,B.w(n===A.j.iI(n)?A.j.V(n):n)+"V",D.esG,A.aQ,13)
if(n===1.5){u=B.L()
u.r=A.by.gp(0)
d.ar(D.faL,u)
u=e.as
s=B.L()
s.r=B.ar(A.ay,A.b4,u).gp(0)
d.ar(new B.a1(-22,14,-22+44*u,18),s)
if(e.as<=0.02)o.qU(d,"FLAT",D.esq,A.bZ,9)}if(n>2){u=B.L()
u.r=A.aT.gp(0)
u.c=1
d.ah(D.ep2,D.aMd,u)
o.qU(d,n>3?"3 cells":"2 cells",D.esF,A.aF,8)}}else if(n<=9){r=new B.a1(-22,-17,22,17)
u=B.bn(r,A.mw)
$.S()
s=B.L()
s.sav(D.caW.aK(0,r))
d.an(u,s)
s=B.L()
s.r=A.d2.gp(0)
d.ar(D.faN,s)
for(q=0;q<2;++q){p=F.aDa[q]
u=p<0?5:3.6
s=new B.ao(A.P,A.M,A.R,A.S,A.Q)
s.sav(D.aRN.aK(0,B.bZ(new B.p(p,-18),5)))
d.N(new B.p(p,-18),u,s)}o.qU(d,"9V",D.esy,A.c,16)}else{r=new B.a1(-34,-16,34,16)
u=B.bn(r,A.iF)
$.S()
s=B.L()
s.sav(D.atz.aK(0,r))
d.an(u,s)
s=B.L()
s.r=A.bl.gp(0)
d.ar(D.fb8,s)
for(q=0;q<2;++q){u=B.bn(B.bt(new B.p(F.IQ[q],-20),8,10),A.hE)
s=new B.ao(A.P,A.M,A.R,A.S,A.Q)
s.r=A.cx.gp(0)
d.an(u,s)}o.qU(d,"+",D.epU,A.ay,10)
o.qU(d,"12V",D.esC,A.as,15)}},
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
n=new C.u1(o,r,q,p)
n.asd(o,r,q,p)
k.push(n)
J.iC(s[4],new C.cuf(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.I)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.am9(m,u[1],l,u[3])}}}
C.ak8.prototype={
S(){var w=x.N
return new C.ak9(B.c_(2000,1,1,0,0,0,0,0),A.J,A.az,B.T(w,x.gl),B.aR(w),$,A.bF,0,B.a([],x.X),null,null)}}
C.ak9.prototype={
afn(d){var w=this,v=w.ch
if(v!=null)v.a1(0)
w.m(new C.bKh(w,d))
w.ch=B.cy(A.lK,new C.bKi(w))},
t(){var w=this.ch
if(w!=null)w.a1(0)
w=this.db
if(w!=null)w.a1(0)
this.bw6()},
a10(d,e){return this.cki(d,e)},
b3q(d){return this.a10(d,!1)},
cki(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a10=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
r=d.at
q=e?A.rZ:A.yF
p=d.b
w=3
return B.b(L.hj1(s,r,p,d.ax<3.2,q,$.qH().h(0,p).b),$async$a10)
case 3:o=g
t.cy=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a10,v)},
cx0(d){var w=this,v=new B.V(Date.now(),0,!1),u=w.CW.c3(0,d.a,new C.bKj()),t=J.cD(u)
t.I(u,v)
t.bq(u,new C.bKk(v))
if(t.gJ(u)>=4){t.a8(u)
t=w.db
if(t!=null)t.a1(0)
w.a2k(d)
return}if(t.gJ(u)===3){t=w.db
if(t!=null)t.a1(0)
w.db=B.cy(A.iQ,new C.bKl(w,u,d))}},
a0H(d){return this.ciE(d)},
ciE(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a0H=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
w=3
return B.b(C.iuz(s,d.b,A.j.V(A.j.F(t.a.c.d*0.12,1)*100)),$async$a0H)
case 3:t.cy=!1
case 1:return B.h(u,v)}})
return B.i($async$a0H,v)},
a2k(d){return this.cuB(d)},
cuB(d){var w=0,v=B.j(x.H),u=this,t
var $async$a2k=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bU(A.L,null,new C.bKf(u,d),t,!0,!0,!0,null,!1,!1,x.H),$async$a2k)
case 2:return B.h(null,v)}})
return B.i($async$a2k,v)},
Y(){this.a4()
this.biq()
this.mh()},
biq(){this.a.c.e=new C.bKB(this)},
mA(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.vN(0,d)
for(w=q.a.c.a,v=w.length,u=q.cx,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=D.mt.h(0,s.b)
if((r==null?null:r.b)!==D.AG)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.q(0,s.a)&&!q.cy){u.I(0,s.a)
q.a10(s,!0)}}else u.W(0,s.a)}if((q.ax+=d)>0.16){q.ax=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)G.dF(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)G.dF(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cS.ai()<0.5
else u=!1
if(u)G.dF(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){G.dF(900+A.cS.az(800),"",90,0,0.1,o)
if(A.cS.ai()<0.35)G.dF(300+A.cS.az(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cS.ai()<0.4
else u=!1
if(u)G.dF(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)G.dF(330+A.o.F(110*A.j.bh(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)G.dF((A.j.bh(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)G.dF(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)G.dF(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cS.ai()<0.5
else u=!1
if(u)G.dF(1200,"",30,0,0.07,o)
break
case"turbine":u=s.f
if(u>0.1)G.dF(80,"",150,0,0.05*u,o)
break
case"crank":u=s.f
if(u>0.15)G.dF(110+u*140,"",70,0,0.08,"saw")
break}}}w=q.a.w
if(w!=null)w.$0()
q.m(new C.bKC())},
bau(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.at
l=p.c
k=n===0?-1:1
j=D.mt.am(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new B.y(p,n)
r=i}}}return s},
b46(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.U(w).k("ds<1>"),w=new B.ds(w,v),w=new B.bR(w,w.gJ(0),v.k("bR<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.at
p=s.d
o=D.mt.am(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cJS(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
o=p.a
n=this.at
m=o.c
l=p.b===0?-1:1
k=D.mt.am(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.at
m=o.c
j=p.d===0?-1:1
i=D.mt.am(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=C.hHM(new B.p(k,n),new B.p(i,l),p)
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
afl(){this.a.toString
this.m(new C.bJH())},
bsL(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.det[v]
if(!A.d.aV(p.a.c.a,new C.bKD(u,w))){o=new B.p(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?Q.JM:o
s=s?Q.JM:o
q=t.ali(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.x=null
G.dF(1200,"",50,0,0.3,"tri")
p.afl()},
B(d){var w,v,u,t,s,r,q,p,o,n=this
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.SC[v].a)
u=w.length
t=u>8
s=t?A.d.dt(w,0,A.o.aq(u+1,2)):w
r=t?A.d.fO(w,A.o.aq(w.length+1,2)):A.Z
q=n.a.d
if(q!=null){w=B.a4(q).k("cx<1>")
w=B.C(new B.cx(q,w),w.k("M.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.I)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b3W(s,!0))
n.a.toString
if(t)w.push(n.b3W(r,!0))
w.push(B.E(B.co(new C.bKA(n,q)),1))
return B.x(w,A.l,null,A.e,A.i,0,A.p)},
b3W(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=$.qH()
s=t.h(0,u).d.j(0.14)
r=new B.aO(14,14)
q=new B.ay(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.az(p,B.r(p,B.x(B.a([B.d(t.h(0,u).c,p,p,p,p,p,p,A.xw,p,p,p),B.d(t.h(0,u).b,p,1,A.a2,p,p,p,A.o0,p,p,p)],n),A.l,p,A.ba,A.i,0,A.p),A.f,p,p,new B.o(s,p,new B.bG(q,q,q,q),new B.be(r,r,r,r),p,p,A.n),p,p,p,K.ox,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bJI(this,u),p,p,p,p,p,p,!1,A.a4))}return B.r(p,B.cm(m,p,p,A.hi,p,p,A.aL,!1),A.f,p,p,new B.o(K.C1,p,new B.bG(A.a1,A.a1,new B.ay(o,1,A.r,-1),A.a1),p,p,p,A.n),p,58,p,p,p,p,p,p)},
cmo(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a2.b,a1=$.qH().h(0,a0)
a1.toString
w=a2.dy
v=a2.fr
u=new C.bK3(e,a1)
t=new C.bK2()
s=B.l(20)
r=a1.d
q=B.K(r.j(0.55),A.r,1.3)
p=B.a([new B.ab(0,A.G,r.j(0.18),A.cz,16)],x.V)
o=r.j(0.18)
n=B.l(10)
n=B.r(A.A,B.d(a1.c,d,d,d,d,d,d,A.xw,d,d,d),A.f,d,d,new B.o(o,d,d,n,d,d,A.n),d,34,d,d,d,d,d,34)
o=B.E(B.d(a1.b,d,1,A.a2,d,d,d,B.m(d,d,r,d,d,d,d,d,d,d,d,15,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d),1)
m=B.l(999)
l=B.K(A.aT,A.r,1)
k=x.p
m=B.a([B.A(B.a([n,A.af,o,B.az(d,B.r(d,B.d(e.f?"Less":"About",d,d,d,d,d,d,A.VO,d,d,d),A.f,d,d,new B.o(d,d,l,m,d,d,A.n),d,d,d,d,A.oy,d,d,d),A.y,!1,D.huy,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.bJP(e),d,d,d,d,d,d,!1,A.a4),B.aI(d,d,d,d,D.c37,d,d,d,new C.bJQ(e,a2),d,d,d,d,"Remove part",A.ch),B.aI(d,d,d,d,A.Q8,d,d,d,new C.bJR(e),d,d,d,d,d,A.ch)],k),A.l,d,A.e,A.i,0,d,d)],k)
if(e.f)A.d.u(m,B.a([B.d(a1.e,d,d,d,d,d,d,A.KH,d,d,d),A.cR,B.d("How it is made: "+a1.f,d,d,d,d,d,d,T.aWo,d,d,d)],k))
m.push(A.am)
if(a2.x)m.push(D.fKG)
else m.push(new B.D(A.fn,B.A(B.a([t.$2(A.j.ad(Math.abs(a2.dy),2),"VOLTS"),A.bo,t.$2(A.j.ad(Math.abs(a2.fr)*1000,0),"MILLIAMPS"),A.bo,t.$2(A.j.ad(Math.abs(w*v),2),"WATTS")],k),A.l,d,A.e,A.i,0,d,d),d))
j=e.a.c.bgi(a2)
if(j!=null){a1=(a2.x?A.ay:A.at).j(0.14)
w=B.l(10)
v=B.K((a2.x?A.ay:A.at).j(0.5),A.r,1)
m.push(new B.D(A.i2,B.r(d,B.d((a2.x?"Why it burnt out":"Why it is not working")+": "+j,d,d,d,d,d,d,D.fGB,d,d,d),A.f,d,d,new B.o(a1,d,v,w,d,d,A.n),d,d,d,d,A.cq,d,d,d),d))}if(C.hgC(a0)){a1=B.a([],k)
for(i=0;i<10;i=h){h=i+1
a1.push(new B.D(A.fn,new E.dX("CH "+h,a2.at===i,new C.bJV(e,a2,i),d,r,d),d))}a1=B.cb(B.A(a1,A.l,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aL)
if(e.a.c.ru(a2)){w=F.RB[A.o.F(a2.at,10)]
v=e.f?" Tap the TV 3 times quickly to open the big screen.":""
v="Showing: "+w.a+"."+v
w=v}else w="The TV is off. Give it power with the + dot towards the battery +."
a1=B.a([A.am,a1,A.aw,B.d(w,d,e.f?4:1,A.a2,d,d,d,A.ht,d,d,d)],k)
if(e.a.c.ru(a2))a1.push(new E.fE(A.HF,"Open big screen",new C.bJW(e,a2),r,d))
A.d.u(m,a1)}if(D.mt.am(0,a0)&&!C.hgC(a0)){a1=B.a([A.am],k)
if(e.f||!e.a.c.ru(a2))a1.push(B.d(e.a.c.ru(a2)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",d,d,d,d,d,d,A.ht,d,d,d))
if(e.a.c.ru(a2))a1.push(new E.fE(A.PR,"Open the "+$.qH().h(0,a0).b,new C.bJX(e,a2),r,d))
A.d.u(m,a1)}if(D.mt.am(0,a0))A.d.u(m,B.a([A.am,new E.fE(A.D9,"Make it bigger (or tap it 4 times)",new C.bJY(e,a2),r,d)],k))
e.a.toString
a1=a0==="buck"
if(a1||a0==="regulator"){w=A.j.ad(a2.db,1)
if(e.a.c.ru(a2))v=a2.dx
else{e.a.toString
v=a0==="regulator"?5:a2.e}v=B.a([A.am,B.d("Volts in: "+w+" V   \u2192   Volts out: "+A.j.ad(v,1)+" V",d,d,d,d,d,d,D.fAv,d,d,d)],k)
if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dx5[g]
w=f===A.j.iI(f)?A.j.V(f):f
a1.push(new E.dX(B.w(w)+" V out",a2.e===f,new C.bJZ(e,a2,f),d,r,d))}v.push(new B.D(A.lj,B.bX(A.bH,a1,A.bt,d,0,6),d))}if(a0==="regulator")v.push(D.fZI)
A.d.u(m,v)}if(e.a.c.Mo(a2)&&!a2.x){a1=A.j.ad(a2.cx,2)
w=A.j.ad(e.a.c.Ak(a2),2)
v=e.a.c
o=v.aoV(a2)?"   \u26a0 OVERLOADED":""
a1=B.d("Supplying "+a1+" A of the "+w+" A it can give"+o,d,d,d,d,d,d,B.m(d,d,v.aoV(a2)?A.bZ:A.et,d,d,d,d,d,d,d,d,12.5,d,d,A.I,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
w=B.l(4)
o=A.j.D(a2.cx/e.a.c.Ak(a2),0,1)
v=e.a.c.aoV(a2)?A.ay:A.b4
m.push(new B.D(A.i2,B.x(B.a([a1,A.cR,B.bx(w,B.ks(A.by,d,d,5,d,o,new B.lQ(v,x.c)),A.aq)],k),A.E,d,A.e,A.i,0,A.p),d))}a1=a0==="battery"
if(a1&&a2.e===1.5){w=a2.as
v=A.j.V(w*100)
if(w<=0.02)w="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else w=w>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.D(A.i2,B.d("Charge: "+v+"%"+w,d,d,d,d,d,d,D.fu3,d,d,d),d))}if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dlM[g]
w=f===1.5?"1.5 V (rechargeable)":B.w(f)+" V"
a1.push(new E.dX(w,a2.e===f,new C.bK_(e,a2,f),d,r,d))}m.push(B.bX(A.bH,a1,A.bt,d,0,6))}if(a0==="resistor"){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dbB[g]
w=f>=1000?"1 k\u03a9":""+A.o.V(f)+" \u03a9"
a1.push(new E.dX(w,a2.r===f,new C.bK0(e,a2,f),d,r,d))}m.push(B.bX(A.bH,a1,A.bt,d,0,6))}if(a0==="solar")m.push(u.$3("Sunlight",a2.f,new C.bK1(a2)))
if(a0==="turbine")m.push(u.$3("Wind",a2.f,new C.bJS(a2)))
if(a0==="pot")m.push(u.$3("Knob",a2.f,new C.bJT(a2)))
if(a0==="ldr")m.push(u.$3("Light",a2.f,new C.bJU(a2)))
if(a0==="crank")m.push(D.fUZ)
if(a0==="switch")m.push(B.d(a2.w?"Closed: the loop is joined up.":"Open: the loop is broken.",d,d,d,d,d,d,A.ht,d,d,d))
return B.r(d,new B.cN(D.b7B,B.cb(B.x(m,A.E,d,A.e,A.O,0,A.p),A.t,d,A.y,d,d,d,d,A.ah),d),A.f,d,d,new B.o(F.Yz,d,q,s,p,d,A.n),d,d,D.htZ,d,D.bDJ,d,d,d)}}
C.bdo.prototype={}
C.Wq.prototype={
S(){return new C.aFl(C.hmH(),new B.cw(null,x.q),B.aR(x.S))}}
C.aFl.prototype={
Y(){this.a4()
$.aU.c1$.push(this)
this.afm()},
afm(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fKW(),$async$afm)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.itJ(t.d,r)
if(s!=null){t.m(new C.e1s(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$afm,v)},
Fy(){var w,v=this
if(!v.as)return
w=C.ijL(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bGR(w)},
jm(d){if(d!==A.fY)this.Fy()},
t(){$.aU.hV(this)
this.Fy()
this.a3()},
cc0(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.U(v).k("Y<1>")
t=new B.Y(v,new C.e1B(q),u).gJ(0)
s=new B.Y(v,new C.e1C(),u).gJ(0)
r=new B.Y(v,w.gcZm(),u).gJ(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new C.e1D(q,t,s,r))}if(A.o.F(q.w,45)===0)q.Fy()
if(A.o.F(q.w,10)===0){w=q.f
$.ajg()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.q(0,q.f)&&$.ajg()[q.f].c.$1(q.d)){w.I(0,q.f)
C.JR("bell",B.a([0,4,7,12],x.t),700,0.45)
q.m(new C.e1E())
q.Fy()
w=q.c
w.toString
w=B.Kk(w)
if(w!=null)w.T(B.b2(p,p,p,p,p,A.t,p,B.d("\u2705 Challenge done: "+$.ajg()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mZ,p,p,p,p,p,p,p,p,p,p))}},
ai7(){var w=0,v=B.j(x.H),u=this,t
var $async$ai7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.e1r(u),t,null,!0,!0,x.H),$async$ai7)
case 2:return B.h(null,v)}})
return B.i($async$ai7,v)},
b1h(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.l(12),t=B.K(f.j(0.45),A.r,1)
u=B.a([B.ap(w,B.r(w,B.X(d,f,w,w,w,18),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ap(w,h,w,w,w,-1,-3,w))
return B.az(w,B.h9(new B.a5(40,38,new B.an(A.a0,w,A.ad,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4)},
b1g(d,e,f,g){return this.b1h(d,e,f,g,null)},
asV(d,e,f,g){var w=null,v=f.j(0.1),u=B.l(10),t=B.K(f.j(0.4),A.r,1)
return B.E(B.az(w,B.r(w,B.A(B.a([B.X(d,f,w,w,w,15),A.e8,new B.di(1,A.cl,B.d(e,w,1,A.a2,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.ba,A.i,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),1)},
ags(){var w=0,v=B.j(x.H),u=this,t
var $async$ags=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a6(t,!1).ce(B.ed(new C.e1n(u),!1,null,x.H)),$async$ags)
case 2:t=u.e.gbk()
if(t!=null)t.biq()
if(u.c!=null)u.m(new C.e1o())
u.Fy()
return B.h(null,v)}})
return B.i($async$ags,v)},
bJD(){var w,v,u,t,s=null,r=this.f
$.ajg()
if(r>=11)return s
w=this.r
v=w.q(0,r)
r=v?A.be:A.ay
u=B.l(9)
t=B.K(K.C1,A.r,1.5)
return B.r(s,B.as(B.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.xz,s,s,s),s,s,s),A.f,s,D.b7r,new B.o(r,s,t,u,s,s,A.n),s,s,s,s,A.f6,s,s,s)},
ajh(){var w=0,v=B.j(x.H),u=this,t
var $async$ajh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bU(F.mV,null,new C.e1A(u),t,!0,!0,!0,A.kh,!1,!1,x.H),$async$ajh)
case 2:return B.h(null,v)}})
return B.i($async$ajh,v)},
cc1(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.az(r,B.r(r,D.c_L,A.f,r,r,new B.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e1G(d),r,r,r,r,r,r,!1,A.a4),o=B.l(11)
o=B.r(r,D.bdp,A.f,r,r,new B.o(A.br,r,B.K(A.aG.j(0.45),A.r,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.r(r,B.x(B.a([B.A(B.a([p,A.af,o,A.af,B.E(B.x(B.a([D.fXG,B.d(w,r,1,A.a2,r,r,r,B.m(r,r,s.y>0||s.z>0?A.eU:A.hA,r,r,r,r,r,r,r,r,11.5,r,r,A.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.E,r,A.e,A.i,0,A.p),1),new C.azm(s.gcil(),r),A.vH,s.b1g(A.ta,"Construction Lab: real 3D wiring, plumbing and a house",A.cI,new C.e1H(s,d)),s.b1h(A.lP,"Challenges",A.aQ,s.gczA(),s.bJD()),s.b1g(A.D5,"How to play",A.aG,new C.e1I(d,e))],v),A.l,r,A.e,A.i,0,r,r),A.am,B.A(B.a([s.asV(A.oF,"Circuits",A.bc,s.gcss()),A.bo,s.asV(A.oD,"Repair",A.aQ,new C.e1J(s)),A.bo,s.asV(I.wO,"Clear",A.bZ,new C.e1K(s))],v),A.l,r,A.e,A.i,0,r,r)],v),A.l,r,A.e,A.O,0,A.p),A.f,r,r,new B.o(K.C1,r,new B.bG(A.a1,A.a1,new B.ay(q,1,A.r,-1),A.a1),r,r,r,A.n),r,r,r,r,D.bIX,r,r,r)},
B(d){var w=this,v=null
$.atH="tech"
return B.c4(v,A.c4,B.bm(!0,B.x(B.a([w.cc1(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.hly(w.d,w.e,w.gcc_(),v),1)],x.p),A.l,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
C.azm.prototype={
S(){return new C.bbw(null,null)}}
C.bbw.prototype={
gazd(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.Y,null,1,null,v)
w.cL(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gazd().t()
this.bxs()},
B(d){var w=null,v=this.a.c
return B.az(w,B.h9(new B.a5(42,42,B.c6(this.gazd(),new C.cLP(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bbv.prototype={
a5(d,e){var w,v,u,t=null,s=e.ej(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.S()
w=B.L()
w.r=A.b8.j(0.25+0.15*o).gp(0)
w.y=N.oz
d.N(s,r+2+o*2,w)
w=B.L()
w.sav(D.eCs.aK(0,B.bZ(s,r)))
d.N(s,r,w)
v=B.L()
v.b=A.a9
v.c=2.2
v.sav(new B.h1(A.A,0,6.283185307179586,A.x,D.d2c,t,new B.mN(p)).aK(0,B.bZ(s,r)))
d.N(s,r,v)
p=new C.cLO(d)
p.$3(s.a2(0,A.tD),8+o*1.5,1)
q*=4
p.$3(s.a2(0,D.erg),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a2(0,D.etE),2.6,0.5+0.5*Math.cos(q))
u=B.ft(t,A.ct,t,t,t,D.fqp,A.a5,A.bX,t,A.dE,A.bY)
u.e5()
u.a5(d,s.a2(0,new B.p(-u.b.c/2,5)))},
aE(d){return d.b!==this.b}}
C.azH.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.azI.prototype={
t(){var w,v,u
for(w=this.h8$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h7$
w===$&&B.c()
w.t()
this.bw5()}}
C.aLT.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bA9.prototype={}
C.fT.prototype={}
C.Kl.prototype={
a7(){return"ScreenStyle."+this.b}}
C.mx.prototype={}
C.W9.prototype={
S(){return new C.bmc(null,null)}}
C.bmc.prototype={
gaaw(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.ow,null,1,null,v)
w.cr(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gaaw().t()
this.bzk()},
gSI(){var w=this.gaaw().y
w=w==null?null:A.o.aq(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.mt.h(0,this.a.c)
if(v==null)v=D.aSO
return B.c4(w,X.a_a,B.bm(!0,new B.an(A.a0,w,A.ad,A.t,B.a([B.as(v.b===D.AI?this.bLL(v):this.cpc(v),w,w,w),B.ap(w,B.aI(w,w,w,w,A.n8,w,w,w,new C.dYC(d),w,w,w,B.o3(w,A.b6,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),B.ap(6,B.as(B.d(v.a,w,w,w,w,w,w,D.fsa,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)},
cc2(d){var w
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
cpc(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.aad
switch(p.a){case 1:w=44
break
case 2:w=30
break
case 3:w=22
break
case 4:w=26
break
default:w=14
break}v=B.c6(this.gaaw(),new C.dYB(this,w,d,o),q)
if(p===D.aae)v=new B.BL(D.bJA,v,q)
p=this.cc2(p)
u=o?4:5
t=d.c
s=B.ar(t,A.c,o?0.25:0.08)
s.toString
r=B.ar(t,A.w,0.5)
r.toString
r=B.a([s,t,r],x.O)
t=B.l(w)
s=B.a([new B.ab(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new B.fH(p,B.r(q,B.r(q,v,A.f,q,q,new B.o(A.w,q,q,B.l(w-3),q,q,A.n),q,q,q,q,A_.H9,q,q,q),A.f,q,q,new B.o(q,q,q,t,s,new B.a8(A.aA,A.aD,A.x,r,q,q),A.n),q,q,q,D.bCW,new B.R(u,u,u,u),q,q,q),q)},
b9D(d){var w,v,u,t=null,s=new B.V(Date.now(),0,!1),r=A.o.D(this.a.d+A.j.bh(this.gSI()*0.4),0,100),q=d.b===D.aad,p=q?34:20,o=q?28:18,n=B.a([B.d(A.a.b_(A.o.v(B.df(s)),2,"0")+":"+A.a.b_(A.o.v(B.fS(s)),2,"0"),t,t,t,t,t,t,A.tX,t,t,t),A.b1],x.p)
for(w=0;w<4;++w){v=new B.aO(1,1)
n.push(B.r(t,t,A.f,t,t,new B.o(A.c,t,t,new B.be(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bJh,t,t,t,3))}n.push(A.dg)
n.push(D.fQf)
n.push(A.bo)
v=B.K(A.ab,A.r,1)
u=B.l(4)
n.push(B.r(t,new B.bL(A.a7,t,t,B.BZ(A.A,B.r(t,t,A.f,t,t,new B.o(A.b4,t,t,B.l(2),t,t,A.n),t,t,t,A_.H9,t,t,t,t),t,r/100),t),A.f,t,t,new B.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.rb)
n.push(B.d(""+r+"%",t,t,t,t,t,t,D.fGY,t,t,t))
return new B.D(new B.R(p,12,o,2),B.A(n,A.l,t,A.e,A.i,0,t,t),t)},
ax5(d,e,f){var w,v=null,u=d.d,t=B.ar(u,A.w,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.l(e*0.26)
w=x.p
t=B.a([B.r(v,B.as(B.d(d.b,v,v,v,v,v,v,B.m(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.o(v,v,v,u,D.drW,new B.a8(A.aA,A.aD,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.u(t,B.a([A.aw,B.d(d.a,v,1,A.a2,v,v,v,D.fx1,v,v,v)],w))
return B.az(v,B.x(t,A.l,v,A.e,A.O,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dYx(this,d),v,v,v,v,v,v,!1,A.a4)},
c2j(d,e){return this.ax5(d,e,!0)},
c20(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.aSP||n===D.EG,l=d.d,k=B.ar(l,A.w,0.55)
k.toString
l=B.ar(l,A.kp,0.5)
l.toString
l=B.a([k,A.dA,l],x.O)
k=p.b9D(d)
w=m?190:138
v=B.l(24)
u=B.K(A.aT,A.r,1)
w=B.az(o,B.r(o,B.bx(B.l(23),B.b3(o,o,o,new C.ag0(0,p.gSI(),o),A.fT),A.aq),A.f,o,o,new B.o(o,o,u,v,o,o,A.n),o,w,o,A.i3,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.dYv(p),o,o,o,o,o,o,!1,A.a4)
v=m?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.kz[s]
t.push(new B.cj(A.A,o,o,p.c2j(r,m?58:54),o))}k=B.a([k,A.am,w,A.ae,B.E(B.l_(0.92,t,v,8,12,A1.wz,o,!1),1)],u)
if(n!==D.aae){n=A.c.j(0.16)
w=B.l(28)
u=B.a([],u)
for(v=B.cX(F.kz,0,B.dB(4,"count",x.S),x.gD),t=v.$ti,v=new B.bR(v,v.gJ(0),t.k("bR<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.ax5(q==null?t.a(q):q,50,!1))}k.push(B.r(o,B.A(u,A.l,o,A.qZ,A.i,0,o,o),A.f,o,o,new B.o(n,o,o,w,o,o,A.n),o,o,o,D.bDT,H.anO,o,o,o))}return B.r(o,B.x(k,A.l,o,A.e,A.i,0,A.p),A.f,o,o,new B.o(o,o,o,o,o,new B.a8(A.aA,A.aD,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bF7(d,e){var w=null
return B.r(w,B.x(B.a([this.b9D(d),B.E(B.b3(w,w,w,new C.ag0(e,this.gSI(),w),A.fT),1),B.az(w,B.r(w,B.as(B.d(F.kz[e].a,w,w,w,w,w,w,A.KJ,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dYq(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.l,w,A.e,A.i,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bLL(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=B.ar(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.l(r?26:14)
u=B.a([new B.ab(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new B.fH(1.5384615384615383,B.r(t,B.c6(this.gaaw(),new C.dYt(this,r,d),t),A.f,t,t,new B.o(t,t,t,v,u,new B.a8(A.aA,A.aD,A.x,w,t,t),A.n),t,t,t,D.bIS,new B.R(8,8,8,s),t,t,t),t)}}
C.byb.prototype={
a5(d,e){var w,v,u,t,s,r=e.a,q=e.b,p=0+r,o=0+q
$.S()
w=B.L()
v=this.c
u=B.ar(v,A.w,0.6)
u.toString
t=B.ar(v,A.kp,0.4)
t.toString
w.sav(new B.a8(A.aA,A.aD,A.x,B.a([u,A.dA,t],x.O),null,null).aK(0,new B.a1(0,0,p,o)))
d.ar(new B.a1(0,0,p,o),w)
for(p=this.b,o=p*0.4,p*=0.3,s=0;s<5;++s){w=Math.sin(o+s)
u=Math.sin(p+s*1.7)
t=new B.ao(A.P,A.M,A.R,A.S,A.Q)
t.r=v.j(0.1).gp(0)
t.y=D.bJF
d.N(new B.p(r*(0.15+0.2*s+0.05*w),q*(0.3+0.3*u)),q*(0.2+0.04*s),t)}},
aE(d){return!0}}
C.ag0.prototype={
a5(d,e){return L.Mf(d,e,this.b,this.c)},
aE(d){return!0}}
C.aNH.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bwY.prototype={}
C.a9E.prototype={
B(d){var w=null
return B.c4(B.eR(w,w,w,!0,!0,D.aiR,w,1,!0,w,0,!1,w,!1,w,w,B.aI(w,w,w,w,I.asu,w,w,w,new C.cn7(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.h5x,w,w,w,1,w,!0),D.aiR,B.cm(B.a([D.ev4,B.co(new C.cn8())],x.p),w,w,D.bEZ,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.XM.prototype={
S(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aGR(w,new B.au(A.ax,$.ax()),$,A.bF,0,B.a([],x.X),null,null)}}
C.aGR.prototype={
Y(){this.a4()
this.mh()},
b7v(d){var w=this.d.length
return A.o.F(A.j.bh(A.j.F(A.j.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
mA(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b7v(v.f)
if(w!==v.x){v.x=w
E.mv("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new C.eVg(v))
C.JR("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
cdK(){if(this.d.length<2)return
this.m(new C.eVc(this))},
b1O(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new C.eVb(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gcdJ(),p=s.d,o=B.E(B.az(r,B.b3(r,r,r,new C.byn(p,s.f,r),A.fT),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.x(B.a([o,new B.a5(r,40,B.as(B.d(n,r,r,r,r,r,r,D.fF1,r,r,r),r,r,r),r)],w),A.l,r,A.e,A.i,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.aCl[A.o.F(v,8)].j(0.9)
t=new B.aO(20,20)
o.push(B.az(r,B.r(r,B.d(p[v],r,r,r,r,r,r,D.fEf,r,r,r),A.f,r,r,new B.o(u,r,r,new B.be(t,t,t,t),r,r,A.n),r,r,r,A.fn,A.hk,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.eVe(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a4))}p=A.c.j(0.07)
return E.lD(A.aQ,A.f7,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.x(B.a([new E.fd(o,r,r),B.A(B.a([B.E(B.aM(r,A.Z,!1,r,!0,A.t,r,B.aP(),s.e,r,r,r,r,r,2,B.bA(r,new B.b6(4,B.l(14),A.a1),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kk,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ak,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.eVf(s),r,!1,r,r,!1,r,!0,r,A.ac,r,r,r,r,r,r,r,r,r,r,r,A.dk,!0,A.a5,r,A.ao,r,r,r,r),1),A.af,new E.fE(A.i4,"Add",s.gcdH(s),A.c,r),A.bo,new E.fE(A.oE,"Spin",q,A.b4,r)],w),A.l,r,A.e,A.i,0,r,r)],w),A.l,r,A.e,A.O,0,A.p))}}
C.byn.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=k/2,i=e.b,h=i/2+10,g=new B.p(j,h),f=Math.min(k,i)/2-24
i=f+8
k=$.S()
w=B.L()
w.r=D.bjI.gp(0)
d.N(g,i,w)
w=B.L()
w.b=A.a9
w.c=3
w.r=A.aQ.gp(0)
d.N(g,i,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(i=d.c,t=this.c,s=u/2,r=0;r<v;++r){q=t+r*u
p=B.bZ(g,f)
o=new B.ao(A.P,A.M,A.R,A.S,A.Q)
o.r=D.aCl[A.o.F(r,8)].gp(0)
d.cB(p,q,u,!0,o)
o=B.bZ(g,f)
p=new B.ao(A.P,A.M,A.R,A.S,A.Q)
p.b=A.a9
p.c=2
p.r=A.c.j(0.6).gp(0)
d.cB(o,q,u,!0,p)
J.bq(i.save())
i.translate(j,h)
i.rotate((q+s)*180/3.141592653589793,0,0)
p=w[r]
if(p.length>12)p=A.a.aB(p,0,11)+"\u2026"
n=new B.iL(new B.eq(p,l,l,A.cN,l,l,l,l,l,l,D.frd),A.a5,A.bX,new B.jj(1),l,l,l,l,A.bY,l,A.ct)
n.e5()
p=n.b
o=p.c
p=p.a.c
n.a5(d,new B.p(f-o-16,-p.gba(p)/2))
i.restore()}i=B.L()
i.r=D.ais.gp(0)
d.N(g,20,i)
i=B.L()
i.b=A.a9
i.c=3
i.r=A.aQ.gp(0)
d.N(g,20,i)
m=new B.aG(k.r,A.ai,l,l,B.a([],x.v))
h-=f
m.E(new B.aZ(j,h+26))
h-=10
m.E(new B.aq(j-14,h))
m.E(new B.aq(j+14,h))
m.E(new B.bu())
h=B.L()
h.r=A.c.gp(0)
d.af(m,h)
h=B.L()
h.b=A.a9
h.c=2
h.r=A.b6.gp(0)
d.af(m,h)},
aE(d){return!0}}
C.Wy.prototype={
S(){return new C.bmn($,A.bF,0,B.a([],x.X),null,null)}}
C.bmn.prototype={
Y(){this.a4()
this.mh()},
mA(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.JR("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.UL(900,new C.e4r())}w.m(new C.e4s())},
b1Q(d){return this.m(new C.e4m(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.b_(A.o.v(A.j.aq(m,60)),2,"0")
v=A.a.b_(A.o.v(A.o.F(A.j.cC(m),60)),2,"0")
m=B.b3(n,n,n,new C.bt3(l,A.bZ,n),A.aUj)
u=B.d(w+":"+v,n,n,n,n,n,n,D.fvV,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.as(new B.a5(280,280,new B.an(A.A,n,A.ad,A.t,B.a([m,B.x(B.a([u,B.d(t,n,n,n,n,n,n,D.fuS,n,n,n),A.aw,B.d("Sessions done: "+o.r,n,n,n,n,n,n,A.vK,n,n,n)],s),A.l,n,A.e,A.O,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.doQ[r]
u.push(new E.dX(""+q+" min",o.d===q,new C.e4o(o,q),n,A.bZ,n))}m=o.f
p=m?A3.v3:A.hn
m=m?"Pause":"Start"
return E.lD(A.bZ,A.f7,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.x(B.a([new E.fd(u,n,n),new E.fd(B.a([new E.fE(p,m,new C.e4p(o),A.b4,n),new E.fE(A.oH,"Reset",new C.e4q(o),A.c,n)],s),n,n)],s),A.l,n,A.e,A.O,0,A.p))}}
C.bt3.prototype={
a5(d,e){var w,v,u,t,s=e.ej(A.J),r=e.a/2-14
$.S()
w=B.L()
w.b=A.a9
w.c=16
w.r=A.c.j(0.08).gp(0)
d.N(s,r,w)
w=B.bZ(s,r)
v=B.L()
v.b=A.a9
v.c=16
v.d=A.bv
u=this.c
t=B.ar(u,A.c,0.4)
t.toString
v.sav(new B.h1(A.A,-1.5707963267948966,4.71238898038469,A.x,B.a([u,t,u],x.O),null,null).aK(0,B.bZ(s,r)))
d.cB(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aE(d){return d.b!==this.b}}
C.VJ.prototype={
S(){return new C.blW($,A.bF,0,B.a([],x.X),null,null)}}
C.blW.prototype={
Y(){this.a4()
this.mh()},
mA(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.Tk.h(0,p.d)
w.toString
v=A.d.f1(w,new C.dPU())
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
E.mv("flute",D.ccb[t]+5,1400,0.35)}p.m(new C.dPV())},
gcdN(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.L9("Press Start",0.5)
w=D.Tk.h(0,this.d)
w.toString
v=A.d.f1(w,new C.dPP())
u=A.j.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.L9("Breathe in",0.5+0.5*A.dG.aA(0,p))
case 1:return new B.L9("Hold",1)
case 2:return new B.L9("Breathe out",1-0.5*A.dG.aA(0,p))
default:return new B.L9("Hold",0.5)}}}return new B.L9("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gcdN(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.h0.j(0.12+(3-u)*0.05)
n.push(B.r(q,q,A.f,q,q,new B.o(s,q,q,q,u===0?B.a([new B.ab(0,A.G,A.h0.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(B.d(p.a,q,q,q,q,q,q,A.q0,q,q,q))
n.push(B.ap(0,B.d("Breaths: "+r.w,q,q,q,q,q,q,A.kk,q,q,q),q,q,q,q,q,q))
n=B.as(new B.a5(300,340,new B.an(A.A,q,A.ad,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aT(D.Tk.gev(D.Tk));w.C();){v=w.gR(w)
o.push(new E.dX(v,r.d===v,new C.dPS(r,v),q,A.h0,q))}w=r.e
v=w?A.zz:A.hn
w=w?"Stop":"Start"
o.push(new E.fE(v,w,new C.dPT(r),A.b4,q))
return E.lD(A.h0,A.f7,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new E.fd(o,q,q))}}
C.aKi.prototype={}
C.Wp.prototype={
S(){return new C.bme(new B.cw(null,x.A),B.a([],x.au),A.as,A.c)}}
C.bme.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aI(s,s,s,s,I.oP,s,s,s,new C.e0X(t,d),s,s,s,s,"Share",s)],r),p=B.bx(B.l(18),new B.em(B.az(s,B.b3(s,s,s,new C.bog(t.e,t.x,s),A.fT),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e0Y(t),new C.e0Z(t),s,s,s,s,s,s,s,s,s,new C.e1_(t),s,s,s,s,!1,A.a4),t.d),A.aq),o=B.a([],r)
for(w=0;w<9;++w){v=D.d3L[w]
u=!t.w&&t.f.A(0,v)
o.push(new E.G7(v,u,new C.e10(t,v),!1,s))}u=t.r
return E.lD(A.bE,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.D(A.bV,p,s),"DRAW PAD",B.x(B.a([new E.fd(o,s,s),E.iT(A.bE,""+A.j.V(u),"Brush",30,2,new C.e11(t),u),new E.fd(B.a([new E.dX("Eraser",t.w,new C.e12(t),A.CY,A.bE,s),new E.fE(A.pD,"Undo",new C.e13(t),A.c,s),new E.fE(A.ek,"Clear",new C.e14(t),A.c,s),new E.fE(A.PD,"Paper",new C.e15(t),A.c,s)],r),s,s)],r),A.l,s,A.e,A.O,0,A.p))}}
C.bog.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k
$.S()
w=B.L()
w.r=this.c.gp(0)
d.ar(new B.a1(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=x.v,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=$.S()
q=new B.ao(A.P,A.M,A.R,A.S,A.Q)
p=s.a
q.r=p.gp(p)
o=s.b
q.c=o
q.d=A.bv
q.e=A.dT
q.b=A.a9
n=s.c
if(n.length===1){r=A.d.gH(n)
n=new B.ao(A.P,A.M,A.R,A.S,A.Q)
n.r=p.gp(p)
d.N(r,o/2,n)}else{p=B.a([],u)
m=new B.aG(r.r,A.ai,null,null,p)
p.push(new B.aZ(A.d.gH(n).a,A.d.gH(n).b))
m.ab()
for(l=1;l<n.length-1;){r=n[l]
o=r.a;++l
k=n[l]
r=r.b
k=new B.c7(o,r,(o+k.a)/2,(r+k.b)/2)
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
C.X8.prototype={
S(){var w=x.S
return new C.aG9(B.aR(w),B.aR(w))}}
C.aG9.prototype={
Y(){this.a4()
this.auq()},
auq(){var w,v,u=this,t=x.N,s=B.br(D.du3,!0,t)
A.d.Ds(s)
w=x.S
v=B.U(s).c
t=B.C(B.cX(s,0,B.dB(u.d,"count",w),v),t)
A.d.u(t,B.cX(s,0,B.dB(u.d,"count",w),v))
A.d.Ds(t)
u.e=t
u.f.a8(0)
u.r.a8(0)
u.w=0
u.x=!1},
cdI(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
E.mv("bell",12+A.o.F(d,9),150,0.35)
s.m(new C.erW(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gH(0)
u=w.gal(0)
w=s.e
w===$&&B.c()
t=x.H
if(w[v]===w[u])B.bO(A.n_,new C.erX(s,v,u),t)
else{s.x=!0
B.bO(Aa.GQ,new C.erY(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.d("Moves: "+r.w,q,q,q,q,q,q,A.VW,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.aq(p,2)+" / "+o
o=x.p
p=B.x(B.a([new B.D(A.yR,B.A(B.a([u,B.d(p,q,q,q,q,q,q,B.m(q,q,w?A.aQ:A.ab,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.l,q,A.iY,A.i,0,q,q),q),B.E(B.is(!0,q,q,A.y,new B.hJ(v,8,8,1,q),new C.es1(r),r.e.length,A.bk,q,A.ah,!1),1)],o),A.l,q,A.e,A.i,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.d5l[t]
o.push(new E.dX(s.b,r.d===s.a,new C.es2(r,s),q,A.aG,q))}o.push(new E.fE(I.ar0,"New game",new C.es3(r),A.b4,q))
return E.lD(A.aG,A.f7,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new E.fd(o,q,q))}}
C.Xi.prototype={
S(){return new C.aGu(B.a([],x.t))}}
C.aGu.prototype={
cdM(d){A.d.a8(this.d)
this.w=!0
this.b1P()},
b1P(){this.d.push(A.cS.az(4))
this.e=0
this.a03()},
a03(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a03=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eCI(t))
s=x.H
w=3
return B.b(B.bO(A.lJ,null,s),$async$a03)
case 3:r=t.d,q=B.br(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aVD(n)
w=7
return B.b(B.bO(new B.bd(1000*Math.max(280,600-r.length*18)),null,s),$async$a03)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new C.eCJ(t))
case 1:return B.h(u,v)}})
return B.i($async$a03,v)},
aVD(d){this.m(new C.eCG(this,d))
E.mv("marimba",D.cca[d]+5,450,0.55)
B.bO(A.GO,new C.eCH(this),x.H)},
cdO(d){var w,v,u=this
if(!u.w||u.r)return
u.aVD(d)
w=u.d
v=u.e
if(w[v]!==d){G.dF(90,"",600,0,0.5,"saw")
u.m(new C.eCK(u))
return}++v
u.e=v
if(v===w.length){u.m(new C.eCL(u))
B.bO(A.hK,new C.eCM(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.d("Best: "+q.x,p,p,p,p,p,p,Q.aWU,p,p,p),n=B.d(q.y,p,p,p,p,p,p,D.fFs,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aBb[v]
u=u.j(q.f===v?1:0.35)
t=new B.aO(28,28)
s=q.f===v?B.a([new B.ab(0,A.G,D.aBb[v].j(0.8),A.J,30)],w):p
r=new B.ay(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.az(p,B.cT(p,p,p,p,A.b_,new B.o(u,p,new B.bG(r,r,r,r),new B.be(t,t,t,t),s,p,A.n),A.jq,p,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eCN(q,v),p,p,p,p,p,p,!1,A.a4))}o=B.as(new B.D(A.ac,B.x(B.a([o,A.am,n,A.dc,new B.fH(1,B.l_(1,l,2,12,12,p,A.e1,!1),p)],m),A.l,p,A.ba,A.i,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return E.lD(A.bl,A.f7,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new E.fd(B.a([new E.fE(A.hn,n,q.gcdL(q),A.b4,p)],m),p,p))}}
C.XD.prototype={
S(){return new C.bnu(new B.au(A.ax,$.ax()))}}
C.bnu.prototype={
axZ(d){return B.p9(A.j.ad(d,2),B.ag("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eQK(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.cW(B.aL(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eQT()
l=B.aM(m,A.Z,!1,m,!0,A.t,m,B.aP(),l,m,m,m,m,m,2,B.bA(m,m,m,m,m,m,m,m,!0,new B.b6(4,B.l(16),A5.xZ),m,m,m,m,m,m,m,m,m,m,m,new B.b6(4,B.l(16),D.b5S),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.lX,"Bill amount",!0,!0,!1,m,m,m,m,D.fCJ,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ak,m,m,m,m,m,A.ec,m,m,m,1,m,m,!1,"\u2022",m,new C.eQP(n),m,m,m,!1,m,m,!1,m,!0,m,A.ac,m,m,m,m,m,m,m,m,m,m,m,A.aVS,!0,A.a5,m,A.ao,m,m,m,m)
k=A.b4.j(0.1)
s=B.l(20)
r=B.K(A.b4.j(0.35),A.r,1)
q=x.p
s=B.cm(B.a([l,A.bz,B.r(m,B.x(B.a([t.$2("Tip ("+A.j.V(n.e)+"%)","$"+n.axZ(w)),t.$2("Total","$"+n.axZ(v)),A2.NW,t.$3$big("Each of "+n.f+" pays","$"+n.axZ(u),!0)],q),A.l,m,A.e,A.i,0,A.p),A.f,m,m,new B.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bS,m,m,m)],q),m,m,A.fv,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cQz[p]
r.push(new E.dX(""+o+"%",A.j.V(n.e)===o,new C.eQQ(n,o),m,A.b4,m))}l=n.f
return E.lD(A.b4,A.f7,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.x(B.a([new E.fd(r,"TIP",m),E.iT(A.aG,""+l,"People",20,1,new C.eQR(n),l),new E.fd(B.a([new E.dX("Round up",n.r,new C.eQS(n),m,A.aQ,m)],q),m,m)],q),A.l,m,A.e,A.O,0,A.p))}}
C.X7.prototype={
S(){var w=B.a([3,5],x.t)
return new C.bmZ(w,A.cS,$,A.bF,0,B.a([],x.X),null,null)}}
C.bmZ.prototype={
Y(){this.a4()
this.mh()},
mA(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.j.bh(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.az(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.az(6)+1)
u.f=t
E.XF("snare",0,0.5)}u.m(new C.eqB())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.h3()
u.w=t
u.x=t?0:3.141592653589793
E.mv("bell",24,400,0.5)}u.m(new C.eqC())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bfO(v,o.r>0,n))}u=B.az(n,B.as(B.bX(A.fW,m,A.bt,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.equ(o),n,n,n,n,n,n,!1,A.a4)}else if(m==="coin"){t=A.j.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.K(A.d3,A.r,6)
s=B.a([new B.ab(0,A.G,A.aQ.j(0.4),A.J,30)],x.V)
u=B.az(n,B.as(B.e2(A.A,B.r(A.A,B.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fBS,n,n,n),A.f,n,n,new B.o(n,n,v,n,s,D.eCw,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eqv(o),n,n,n,n,n,n,!1,A.a4)}else{m=o.as
u=B.az(n,B.as(B.x(B.a([B.d(m===0?"?":""+m,n,n,n,n,n,n,D.fqH,n,n,n),B.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kk,n,n,n)],x.p),A.l,n,A.e,A.O,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eqw(o),n,n,n,n,n,n,!1,A.a4)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.dm_[r]
v.push(new E.dX(q.b,o.d===q.a,new C.eqx(o,q),q.c,A.bc,n))}v=B.a([new E.fd(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(E.iT(A.bc,""+s,"Dice",4,1,new C.eqy(o),s))}if(o.d==="num"){s=o.z
s=E.iT(A.bc,""+s,"From",100,1,new C.eqz(o),s)
p=o.Q
A.d.u(v,B.a([s,E.iT(A.bc,""+p,"To",1000,2,new C.eqA(o),p)],m))}return E.lD(A.bc,A.f7,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.x(v,A.l,n,A.e,A.O,0,A.p))}}
C.bfO.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cS.ai()-0.5)*0.6
else w=0
v=B.l(22)
u=B.a([new B.ab(0,A.G,A.w.j(0.4),A.cz,14)],x.V)
t=B.a([],x.p)
for(s=D.dGd.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bL(s[q],p,p,B.r(p,p,A.f,p,p,A.Y0,p,18,p,p,p,p,p,18),p))
return B.eI(A.A,w,B.r(p,new B.an(A.a0,p,A.ad,A.t,t,p),A.f,p,p,new B.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bI,p,p,100),p)}}
C.aNt.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bA5.prototype={
t(){var w,v,u
for(w=this.h8$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h7$
w===$&&B.c()
w.t()
this.bz6()}}
C.aNO.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bAb.prototype={
t(){var w,v,u
for(w=this.h8$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h7$
w===$&&B.c()
w.t()
this.bzs()}}
C.aOg.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bAk.prototype={
t(){var w,v,u
for(w=this.h8$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h7$
w===$&&B.c()
w.t()
this.bzW()}}
C.aOH.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a3()},
aY(){this.b5()
this.b3()
this.bC()}}
C.bAt.prototype={
t(){var w,v,u
for(w=this.h8$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h7$
w===$&&B.c()
w.t()
this.bAm()}}
var z=a.updateTypes(["Q(u1)","~()","Q(a5H)","aB<~>()","Q(D8)","H(u1,H)","G(G,u1)","Q(D4)","Q(a_G)","Q(acN)","Q(a4y)","Q(nL)","XE()","VI()","a9E()","Xd()","Xs()","Xe()","Q(mY)","VP()","agj(Z,H)","afa(Z,H)","~(a9<@,@>)","H(D4,D4)","n(eh)","Q(ag7)","Q(a1U)","Q(Dj)","Q(adh)","Q(afd)","Q(ad0)","H(H,rc)","H(H,D8)","n(rc)","~(rc,ai<n>,H)","rc?(D8)","X7()","v(n,a1H)","Q(abG)","~(Bc)","XH()","~(uR,n,p,u,G)","~(n,u1)","Wq()","WS(Z)","Ok(Z)","W9(Z,bw<G>,bw<G>)","XM()","Wy()","VJ()","Wp()","X8()","Xi()","XD()","Q(rc)"])
C.fLj.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+18}
C.fzX.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gH(d.e.split(". "))+"."},
$S:z+24}
C.fHH.prototype={
$1(d){var w
if(!this.a.Mo(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fHI.prototype={
$1(d){return d.x},
$S:z+0}
C.fLg.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fLh.prototype={
$1(d){var w
if(!this.a.Mo(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fLi.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.ejH.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ejI.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.y(this.b,this.c))},
$S:0}
C.ejJ.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd5(v).Q
v.toString
w.ms(v,A.dK,A.iA)}},
$S:7}
C.ejU.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.ejV.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.ejQ.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.ejO.prototype={
$2(d,e){var w=this.a
w.r.push(B.cy(B.dw(0,0,0,d,0,0),new C.ejP(w,this.b,e)))},
$S:1908}
C.ejP.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.ejR.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gX5().ali(0,u[1],u[2],u[3])
u[4].bO(0,new C.ejM(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
G.dF(700+w.e*120,"",80,0,0.25,"square")
v.m(new C.ejN(w.a,v,w.f,w.r))},
$S:0}
C.ejM.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:193}
C.ejN.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.j.bh(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.ejS.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gX5().am9(t,u[1],s,u[3])
G.dF(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new C.ejL(w.a,v,w.e,w.f))},
$S:0}
C.ejL.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.j.bh(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.ejT.prototype={
$0(){G.dF(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new C.ejK(w,this.b))},
$S:0}
C.ejK.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.ejY.prototype={
$0(){var w=this.a
return w.m(new C.ejX(w))},
$S:0}
C.ejX.prototype={
$0(){return this.a.at=!0},
$S:0}
C.ejZ.prototype={
$0(){var w=this.a
return w.m(new C.ejW(w))},
$S:0}
C.ejW.prototype={
$0(){return this.a.at=!1},
$S:0}
C.ek_.prototype={
$0(){var w=this.a
w.f.sb1(0,this.b)
w.PU()},
$S:0}
C.ek0.prototype={
$0(){return this.a.Zc(this.b)},
$S:0}
C.ek1.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.PU():w.aYE()},
$S:2}
C.ek2.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.PU():w.aYE()},
$S:0}
C.ez1.prototype={
$2(d,e){return d+e},
$S:1909}
C.ezl.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ezk(w,d))},
$S:1910}
C.ezk.prototype={
$0(){var w=B.aJ(J.t(this.b,"unlocked"))
w=w==null?null:A.j.M(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.ezm.prototype={
$0(){},
$S:0}
C.ezn.prototype={
$0(){},
$S:0}
C.ez3.prototype={
$0(){return this.a.m(new C.ez2(this.b,this.c))},
$S:0}
C.ez2.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eyT.prototype={
$1(d){return this.a.cx===d},
$S:33}
C.eyU.prototype={
$1(d){return this.a.cx=d},
$S:30}
C.eyV.prototype={
$1(d){return this.a.cy===d},
$S:33}
C.eyW.prototype={
$1(d){return this.a.cy=d},
$S:30}
C.eyX.prototype={
$1(d){return this.a.db===d},
$S:33}
C.eyY.prototype={
$1(d){return this.a.db=d},
$S:30}
C.eyZ.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:33}
C.ez_.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.W(0,d):w.I(0,d)},
$S:30}
C.ez0.prototype={
$0(){var w=this.a
return w.m(w.gayA())},
$S:0}
C.eyR.prototype={
$1(d){return this.a.$1(!0)},
$S:72}
C.eyS.prototype={
$1(d){return this.a.$1(!1)},
$S:110}
C.eyQ.prototype={
$1(d){return this.a.$1(!1)},
$S:139}
C.eze.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.ch=n
n=B.b3(p,p,p,new C.bjG(o,p),n)
w=this.b
v=C.bCI("WORLD",w.a,w.c)
u=C.bCI("GRAVITY",B.w(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.j.V(t*100)
t=t<0.25?A.bZ:A.b4
t=C.bCI("FUEL",""+s+"%",t)
s=o.r.b
r=A.j.V(s*100)
s=s>D.DF[o.db].d?A.bZ:A.c
q=x.p
s=B.a([v,u,t,C.bCI("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(C.bCI("HEIGHT",""+A.j.V(A.j.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ap(p,B.A(s,A.l,p,A.iY,A.i,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bI9(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.tp[w].a+".":"You landed on every world!"
v=B.a([new E.fE(A.oI,"Again",new C.ez9(o),A.c,p),new E.fE(A.oD,"Rebuild",new C.eza(o),A.aQ,p)],q)
if(o.d+1<7)v.push(new E.fE(A.jt,"Next world",new C.ezb(o),A.b4,p))
n.push(C.hAy("Perfect landing!",w,A.b4,v))}if(o.as==="crashed")n.push(C.hAy("Crash!",o.at,A.bZ,B.a([new E.fE(A.oI,"Try again",new C.ezc(o),A.b4,p),new E.fE(A.oD,"Rebuild",new C.ezd(o),A.aQ,p)],q)))
return new B.an(A.a0,p,A.b2,A.t,n,p)},
$S:67}
C.ez9.prototype={
$0(){var w=this.a
return w.m(w.gayA())},
$S:0}
C.eza.prototype={
$0(){var w=this.a
return w.m(new C.ez6(w))},
$S:0}
C.ez6.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.ezb.prototype={
$0(){var w=this.a
return w.m(new C.ez5(w))},
$S:0}
C.ez5.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.ezc.prototype={
$0(){var w=this.a
return w.m(w.gayA())},
$S:0}
C.ezd.prototype={
$0(){var w=this.a
return w.m(new C.ez4(w))},
$S:0}
C.ez4.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.ezf.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new C.ez8(v,w))},
$S:0}
C.ez8.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.ezg.prototype={
$1(d){return this.a.y=d},
$S:9}
C.ezh.prototype={
$1(d){return this.a.Q=d},
$S:9}
C.ezi.prototype={
$1(d){return this.a.z=d},
$S:9}
C.ezj.prototype={
$0(){var w=this.a
return w.m(new C.ez7(w))},
$S:0}
C.ez7.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dPN.prototype={
$0(){var w=0,v=B.j(x.k),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.iE(B.a([C.hvH(),C.hvI()],x.D),x.K),$async$$0)
case 3:r=e
q=t.a
if(q.c==null){w=1
break}s=q.as
s.toString
s.kW(0,B.cP(J.t(r,1)))
q.m(new C.dPM(q,r))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:51}
C.dPM.prototype={
$0(){return this.a.d=x.m.a(J.t(this.b,0))},
$S:0}
C.dPn.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dPo.prototype={
$0(){return this.a.c_4(B.aV(J.t(this.b,"group")))},
$S:0}
C.dPp.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dPq.prototype={
$1(d){return A.a.b_(A.o.ft(A.o.D(A.j.V(d*255),0,255),16),2,"0")},
$S:304}
C.dPO.prototype={
$0(){return E.XF("kick",0,0.25)},
$S:0}
C.dPr.prototype={
$0(){return this.a.cy=this.b},
$S:0}
C.dPs.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dPt.prototype={
$0(){return E.XF("kick",0,0.5)},
$S:0}
C.dPu.prototype={
$0(){return G.dF(1300+this.a.RG.az(900),"",40,0,0.2,"square")},
$S:0}
C.dPw.prototype={
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
u=w}if(u.cy!=null&&!A.d.aV(u.d.e,new C.dPv(u)))u.cy=null
u.id=0},
$S:0}
C.dPv.prototype={
$1(d){var w=this.a
return d.a===w.cy&&w.aAq(d)},
$S:z+10}
C.dPk.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p4
w=u.a
v=u.c
w.R8=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p3.toLowerCase()+"."},
$S:0}
C.dPl.prototype={
$0(){var w=this.a
return w.m(w.gc9I())},
$S:0}
C.dPm.prototype={
$0(){return this.a.aeL(null)},
$S:0}
C.dPD.prototype={
$0(){var w=this.a.as
return w==null?null:w.fa(0,B.J(["t","shot"],x.N,x.z))},
$S:0}
C.dPE.prototype={
$0(){return this.a.cGc(this.b.a)},
$S:0}
C.dPF.prototype={
$0(){return this.a.aeL(this.b)},
$S:0}
C.dPG.prototype={
$1(d){var w=this.a
return w.m(new C.dPC(w,d))},
$S:6}
C.dPC.prototype={
$0(){return this.a.k4=this.b},
$S:0}
C.dPH.prototype={
$0(){var w=this.a
return w.m(new C.dPB(w,this.b))},
$S:0}
C.dPB.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dPI.prototype={
$0(){var w=this.a
return w.m(new C.dPA(w))},
$S:0}
C.dPA.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.dPJ.prototype={
$0(){var w=this.a
return w.m(new C.dPz(w))},
$S:0}
C.dPz.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.fa(0,B.J(["t","reset"],x.N,x.z))
w.cy=null
w.db=0.5
w.dx=0.05
w.fr=1
w.fy=D.M0},
$S:0}
C.dPK.prototype={
$0(){var w=this.a
return w.m(new C.dPy(w))},
$S:0}
C.dPy.prototype={
$0(){var w=this.a,v=!w.p2
w.p2=v
w.p4=0
w.cy=null
if(v)w.b0q()
else w.p3=null},
$S:0}
C.dPL.prototype={
$0(){var w=this.a
return w.m(new C.dPx(w))},
$S:0}
C.dPx.prototype={
$0(){var w=this.a
return w.ok=!w.ok},
$S:0}
C.c6Y.prototype={
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
$S:288}
C.c6Z.prototype={
$1(d){var w=new B.qu([],[]).o_(d.data,!0)
if(x.f.b(w)&&J.t(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:473}
C.ftg.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)&&w.h(d,1)},
$S:234}
C.fth.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)||w.h(d,1)},
$S:234}
C.fti.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)!==w.h(d,1)},
$S:234}
C.ftp.prototype={
$1(d){return!J.t(d,0)},
$S:234}
C.ftq.prototype={
$1(d){var w=J.a7(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:234}
C.ftr.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:234}
C.dRs.prototype={
$1(d){return this.a.avf(0)},
$S:7}
C.dR6.prototype={
$0(){var w=this.b
return this.a.cx=new B.N(w,B.ij9(),B.U(w).k("N<1,H>")).fM(0)},
$S:0}
C.dR9.prototype={
$1(d){return""+d},
$S:78}
C.dRt.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dR4.prototype={
$1(d){return this.a.avf(this.b)},
$S:7}
C.dR5.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.az4(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mQ(0,d,a1.mi(0.15,0.3))
u=a1.mQ(0,d,a1.mi(0.15,0.62))
t=a1.mQ(0,"and",a1.mi(0.48,0.46))
s=a1.mQ(0,a0,a1.mi(0.82,0.46))
a1=t.a
w.push(new C.nL(v.a,a1,0))
w.push(new C.nL(u.a,a1,1))
w.push(new C.nL(a1,s.a,0))
break
case 1:v=a1.mQ(0,d,a1.mi(0.12,0.25))
u=a1.mQ(0,d,a1.mi(0.12,0.65))
r=a1.mQ(0,"xor",a1.mi(0.46,0.25))
q=a1.mQ(0,"and",a1.mi(0.46,0.65))
p=a1.az3(0,a0,a1.mi(0.82,0.25),0)
o=a1.az3(0,a0,a1.mi(0.82,0.65),0)
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
case 2:k=a1.mQ(0,"clock",a1.mi(0.15,0.4))
j=a1.mQ(0,"not",a1.mi(0.45,0.65))
s=a1.mQ(0,a0,a1.mi(0.82,0.3))
i=a1.mQ(0,"buzzer",a1.mi(0.82,0.65))
a1=k.a
w.push(new C.nL(a1,s.a,0))
n=j.a
w.push(new C.nL(a1,n,0))
w.push(new C.nL(n,i.a,0))
break
default:h=a1.mQ(0,d,a1.mi(0.12,0.25))
g=a1.mQ(0,d,a1.mi(0.12,0.7))
f=a1.mQ(0,"nor",a1.mi(0.5,0.25))
e=a1.mQ(0,"nor",a1.mi(0.5,0.7))
s=a1.mQ(0,a0,a1.mi(0.86,0.25))
a1=f.a
w.push(new C.nL(g.a,a1,0))
n=e.a
w.push(new C.nL(n,a1,1))
w.push(new C.nL(h.a,n,0))
w.push(new C.nL(a1,n,1))
w.push(new C.nL(a1,s.a,0))}},
$S:0}
C.dRa.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.az4(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.D4(p,"switch",new B.p(0.14*q.a,r*q.b),0))}o.mQ(0,w.e,o.mi(0.86,0.5))},
$S:0}
C.dR_.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dR0.prototype={
$2(d,e){return A.j.aS(d.c.b,e.c.b)},
$S:z+23}
C.dR1.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dR2.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dR3.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.ae4(this.c)
if(v.ax)C.JR("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gH(w)
v.CW=!1
if(v.ax)G.dF(140,"",250,0,0.3,"square")}},
$S:0}
C.dRb.prototype={
$0(){},
$S:0}
C.dRc.prototype={
$0(){return A.d.cH(this.a.e,this.b)},
$S:0}
C.dRd.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dR8.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bq(w.e,new C.dR7(v))
w.cy=null},
$S:0}
C.dR7.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
C.dQZ.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mQ(0,this.b,new B.p(w.x.a*(0.3+v.ai()*0.4),w.x.b*(0.2+v.ai()*0.6))).a},
$S:0}
C.dRm.prototype={
$0(){var w=this.a
return w.m(new C.dRl(w))},
$S:0}
C.dRl.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dRn.prototype={
$2(d,e){var w=null,v=this.a,u=new B.av(e.b,e.d)
v.x=u
return B.az(A.c3,B.jo(B.b3(w,w,w,new C.bdG(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dRg(v),w,w,w,new C.dRh(v),new C.dRi(v),new C.dRj(v),w,w,w,w,w,w,w,w,w,w,new C.dRk(v),w,w,w,!1,A.a4)},
$S:37}
C.dRk.prototype={
$1(d){return this.a.cbu(d.b)},
$S:68}
C.dRi.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ckw(u)
if(t!=null){v.as=t
v.at=u
return}w=v.azW(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aJ(0,u)}},
$S:49}
C.dRj.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.p(A.j.D(w.a+u.Q.a,46,u.x.a-46),A.j.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:19}
C.dRh.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c2A(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bq(v,new C.dRe(w))
u=t.as
u.toString
v.push(new C.nL(u,w.a,w.b))
B.jZ()}}t.z=t.as=null},
$S:38}
C.dRe.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
C.dRg.prototype={
$1(d){return this.a.axS(d.b)},
$S:300}
C.dRo.prototype={
$0(){return this.a.bDY(this.b.a)},
$S:0}
C.dRp.prototype={
$0(){return this.a.avf(this.b.a)},
$S:0}
C.dRq.prototype={
$0(){var w=this.a
return w.m(new C.dRf(w))},
$S:0}
C.dRf.prototype={
$0(){var w=this.a
w.az4(0)
w.ay=null},
$S:0}
C.dRr.prototype={
$0(){return this.a.cBQ(this.b)},
$S:0}
C.cWr.prototype={
$0(){var w=this,v=null,u=B.ft(v,A.ct,v,v,v,B.cQ(v,v,v,v,v,v,v,v,v,B.m(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.bX,v,A.dE,A.bY)
u.e5()
return u},
$S:257}
C.dXE.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dXD.prototype={
$0(){return this.a.d=null},
$S:0}
C.dXG.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c4t()},
$S:129}
C.dXF.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.ftH.prototype={
$0(){return I.aLY},
$S:z+40}
C.ftI.prototype={
$0(){return D.dSu},
$S:z+43}
C.ftJ.prototype={
$0(){return D.dPl},
$S:z+13}
C.ftK.prototype={
$0(){return D.eiS},
$S:z+14}
C.ftL.prototype={
$0(){return D.e0L},
$S:z+15}
C.ftM.prototype={
$0(){return I.aLP},
$S:z+16}
C.ftN.prototype={
$0(){return D.egE},
$S:z+17}
C.ftO.prototype={
$0(){return I.aLX},
$S:z+12}
C.ftP.prototype={
$0(){return D.dRC},
$S:z+19}
C.f8Z.prototype={
$2(d,e){return new C.agj(e,$.bHd()[e],new C.f8Y(e,this.a),null)},
$S:z+20}
C.f8Y.prototype={
$0(){var w=this.a,v=K.aJt.h(0,$.bHd()[w].a)
$.atH=v==null?"music":v
B.a6(this.b,!1).ce(B.ed(new C.f8W(w),!1,null,x.H))},
$S:0}
C.f8W.prototype={
$1(d){return $.bHd()[this.a].e.$0()},
$S:39}
C.f9_.prototype={
$2(d,e){return new C.afa(e,D.aBQ[e],new C.f8X(this.a,e),null)},
$S:z+21}
C.f8X.prototype={
$0(){return this.a.d.$1(D.aBQ[this.b])},
$S:0}
C.f8F.prototype={
$0(){return this.a.as=!0},
$S:0}
C.f8E.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f8D.prototype={
$1(d){var w=this
return new B.e1(new C.f8C(w.a,w.b,w.c,w.d),null)},
$S:21}
C.f8C.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=x.l,a2=B.aF(a3,a0,a1).w
a1=B.aF(a3,a0,a1).w
w=x.p
v=B.a([D.fN2,A.aw,D.fTS,A.ae],w)
for(u=d.d,t=d.a,s=x.G,r=d.b,q=d.c,p=0;p<3;p=o){o=p+1
n=B.d("SLAB "+o,a0,a0,a0,a0,a0,a0,D.fCb,a0,a0,a0)
m=new B.aO(12,12)
l=new B.aO(12,12)
l=B.a([new B.bz(1,A.bb,B.aM(a0,A.Z,!1,a0,!0,A.t,a0,B.aP(),r[p],a0,a0,a0,a0,a0,2,new B.e7(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Title",a0,N.EX,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.be(m,m,m,m),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ac,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jA,!0,A.a5,a0,A.ao,a0,a0,a0,a0),a0),A.af,new B.bz(2,A.bb,B.aM(a0,A.Z,!1,a0,!0,A.t,a0,B.aP(),q[p],a0,a0,a0,a0,a0,2,new B.e7(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Small line",a0,N.EX,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.be(l,l,l,l),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ac,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jA,!0,A.a5,a0,A.ao,a0,a0,a0,a0),a0)],w)
m=B.a([],w)
for(k=0;k<30;++k){j=D.dBr[k]
i=new B.aO(12,12)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.C(t.a.c.d,s)
t.w=h}g=A.d.gH(h).j(0.3)}else g=A.c.j(0.06)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.C(t.a.c.d,s)
t.w=h}f=A.d.gH(h)}else f=A.by
e=new B.ay(f,u[p].A(0,j)?1.8:1,A.r,-1)
m.push(B.az(a0,B.r(a0,B.X(j,u[p].A(0,j)?A.c:A.aR,a0,a0,a0,22),A.f,a0,a0,new B.o(g,a0,new B.bG(e,e,e,e),new B.be(i,i,i,i),a0,a0,A.n),a0,a0,a0,A.fn,a0,a0,a0,42),A.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.f8A(a4,p,u,j),a0,a0,a0,a0,a0,a0,!1,A.a4))}A.d.u(v,B.a([n,A.am,new B.c8(A.aL,A.e,A.i,A.l,a0,A.p,a0,0,l,a0),A.T,new B.a5(a0,44,B.cm(m,a0,a0,a0,a0,a0,A.aL,!1),a0),A.aC],w))}v.push(B.bJ(A.B4,a0,new C.f8B(t,r,q,u,a3),a0))
return new B.D(new B.R(0,0,0,a2.f.d),B.bm(!0,new B.cN(new B.aY(0,1/0,0,a1.a.b*0.86),B.cm(v,a0,a0,A0.yS,a0,a0,A.ah,!0),a0),!0,!1,A.ag,!0,!0),a0)},
$S:102}
C.f8A.prototype={
$0(){var w=this
return w.a.$1(new C.f8z(w.b,w.c,w.d))},
$S:0}
C.f8z.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.f8B.prototype={
$0(){var w=this,v=w.a
v.m(new C.f8y(v,w.b,w.c,w.d))
B.a6(w.e,!1).O(null)},
$S:0}
C.f8y.prototype={
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
C.f8N.prototype={
$0(){var w=this.a
return w.m(new C.f8M(w))},
$S:0}
C.f8M.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.f8O.prototype={
$0(){return E.uI(this.b,this.a.f,"scene")},
$S:0}
C.f8P.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ar(A.d.gH(u),A.d.gal(u),0.4)
u.toString
w=this.a.ga_C().x
w===$&&B.c()
return new B.bN(new B.o(v,v,v,v,v,new B.bY(D.b3n,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.c4],x.O),v,v),A.n),A.bi,v,v)},
$S:309}
C.f8Q.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.as(new B.dE(A.dY,A.A,A.f,B.c6(new B.ha(B.a([u.guL(),u.ga_C()],x.dS)),new C.f8L(u,this.b,v),w),w),w,w,w)},
$S:219}
C.f8L.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.guL().x
r===$&&B.c()
w=r<0.9?1:1-C.bu0(r,0.9,0.98)
v=s.ga_C().x
v===$&&B.c()
u=A.dG.aA(0,v)
switch(s.gaz5().a){case 0:s=s.bD8(t.b,r,u,t.c)
break
case 1:s=s.bU7(t.b,r,u,t.c)
break
case 2:s=s.cGH(t.b,r,u,t.c)
break
case 3:s=s.bG4(t.b,r,u,t.c)
break
case 4:s=s.bJr(t.b,r,u,t.c)
break
case 5:s=s.cbv(t.b,r,u,t.c)
break
default:s=null}return B.d3(s,w)},
$S:180}
C.f8R.prototype={
$2(d,e){var w=B.abt(this.b),v=this.c.d,u=B.ar(A.d.gH(v),A.d.gal(v),0.4)
u.toString
v=B.ar(A.d.gH(v),A.d.gal(v),0.4)
v.toString
v=w.cPF(u,A.by,v,3.5)
u=this.a
w=u.guL().x
w===$&&B.c()
return B.Z3(B.l0(null,null,null,1,0,new C.f8K(u),A.j.D(w,0,1)),v)},
$S:1912}
C.f8K.prototype={
$1(d){var w=this.a
w.guL().sp(0,d)
if(w.as)w.m(new C.f8G(w))},
$S:6}
C.f8G.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f8S.prototype={
$0(){var w=this.a
w.guL().sp(0,0)
w.afb()},
$S:0}
C.f8T.prototype={
$1(d){var w=this.a
w.m(new C.f8J(w,d))
if(w.as)w.afb()},
$S:6}
C.f8J.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f8U.prototype={
$0(){var w=this.a
w.m(new C.f8I(w,this.b))
w.guL().sp(0,0)
if(w.as)w.afb()},
$S:0}
C.f8I.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.f8V.prototype={
$0(){var w=this.a
return w.m(new C.f8H(w,this.b))},
$S:0}
C.f8H.prototype={
$0(){var w=B.C(this.b,x.G)
return this.a.w=w},
$S:0}
C.f8w.prototype={
$2(d,e){return A.j.aS(d.a,e.a)},
$S:1913}
C.f8x.prototype={
$1(d){return d.b},
$S:1914}
C.dry.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.drz.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.drv.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.drw.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.drx.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.drA.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.drB.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.drC.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.drD.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.drE.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.drF.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.drG.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.drH.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.drI.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.eym.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eyb.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.eyd.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gX(e.b),97)},
$S:z+31}
C.eye.prototype={
$2(d,e){return d+A.o.F(A.a.gX(e.a),31)+A.o.F(A.a.gX(e.b),17)},
$S:z+32}
C.eyh.prototype={
$1(d){var w=D.nc.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+33}
C.eyi.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.U(q),o=x.dg,n=B.C(new B.eb(new B.cM(new B.Y(q,new C.eyj(d),p.k("Y<1>")),new C.eyk(r),p.k("cM<1,rc?>")),o),o.k("M.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aN(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.I)(n),++v){u=n[v]
if(w.length>=6)return
t=B.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.eyj.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eyk.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.eyf.prototype={
$1(d){return D.nc.h(0,d.b).c===D.xT},
$S:z+54}
C.eyg.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eyM.prototype={
$1(d){var w=this.a,v=d.a,u=A.j.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.vN(0,u)
w.a7y(A.o.aq(v,1000))},
$S:7}
C.eyl.prototype={
$0(){},
$S:0}
C.ey7.prototype={
$0(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$$0)
case 6:e.aD("String","ngmy_core_reaction_lab_v1",s.a.d.aj())
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
C.eyo.prototype={
$1(d){var w=null,v=this.a.b
return B.bm(!0,B.x(B.a([A.T,B.dI(!1,w,w,w,!0,w,w,w,!0,w,w,B.X(D.nc.h(0,v).b,D.nc.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.h4t,w,B.d(D.nc.h(0,v).a,w,w,w,w,w,w,A.h4,w,w,w),w,w,w),B.dI(!1,w,w,w,!0,w,w,w,!0,w,w,W.asy,w,w,w,w,new C.eyn(d),!1,w,w,w,w,w,w,w,D.fWK,w,w,w)],x.p),A.l,w,A.e,A.O,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.eyn.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eyq.prototype={
$1(d){var w,v,u,t=null,s=B.aF(d,t,x.l).w,r=B.a([D.euT],x.p)
for(w=0;w<6;++w){v=D.aCf[w]
u=B.d(v.a,t,t,t,t,t,t,A.h4,t,t,t)
r.push(B.dI(!1,t,t,t,!0,t,t,t,!0,t,t,D.c4d,t,t,t,t,new C.eyp(d,v),!1,t,t,t,t,t,B.d(v.b,t,t,t,t,t,t,A.lX,t,t,t),t,u,t,t,t))}return B.bm(!0,new B.cN(new B.aY(0,1/0,0,s.a.b*0.7),B.cm(r,t,t,D.bIL,t,t,A.ah,!0),t),!0,!1,A.ag,!0,!0)},
$S:27}
C.eyp.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eya.prototype={
$1(d){var w=null
return B.ej(B.a([B.bP(!1,A.dt,w,w,!0,w,w,w,new C.ey8(d),w,w),B.bP(!1,A.F0,w,w,!0,w,w,w,new C.ey9(d),w,w)],x.p),w,w,K.ma,D.fU4,w,w,w,w,D.fX3,w)},
$S:18}
C.ey8.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.ey9.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.eyK.prototype={
$0(){var w=this.a
return w.m(new C.eyJ(w))},
$S:0}
C.eyJ.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eyL.prototype={
$2(d,e){var w,v,u,t=null,s=new B.av(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.nn(new C.eyA(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.beh:t
v=B.a([B.b3(u,t,t,new C.bjE(w,v,new C.eyB(r),new C.eyC(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ap(t,new B.du(!0,B.c6(w,new C.eyD(r),t),t),t,t,10,10,6,t))
if(r.ax)v.push(r.bL6())
return B.az(A.c3,B.jo(new B.an(A.a0,t,A.b2,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.eyE(r),t,r.gclP(),t,new C.eyF(r),new C.eyG(r),new C.eyH(r),t,t,t,t,t,t,t,t,t,t,new C.eyI(r),t,t,t,!1,A.a4)},
$S:37}
C.eyA.prototype={
$0(){return this.a.ad7(this.b)},
$S:0}
C.eyI.prototype={
$1(d){return this.a.cEo(d.b)},
$S:68}
C.eyG.prototype={
$1(d){return this.a.clQ(d.b)},
$S:49}
C.eyH.prototype={
$1(d){return this.a.clR(d.b)},
$S:19}
C.eyF.prototype={
$1(d){return this.a.b3X()},
$S:38}
C.eyE.prototype={
$1(d){return this.a.adP(d.b)},
$S:300}
C.eyB.prototype={
$0(){return this.a.z},
$S:660}
C.eyC.prototype={
$0(){return this.a.Q},
$S:738}
C.eyD.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bPp()
if(p.length===0)return A.bM
w=A.w.j(0.55)
v=B.l(14)
u=B.K(A.by,A.r,1)
t=B.a([D.fRr,A.cR],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.I)(p),++r)t.push(B.d(p[r],q,2,A.a2,q,q,q,A.aWQ,q,q,q))
return B.r(q,B.x(t,A.E,q,A.e,A.O,0,A.p),A.f,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.hk,q,q,q)},
$S:69}
C.eyc.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.l(12),t=B.K(e.j(0.6),A.r,1),s=x.p
return new B.D(A.eo,B.A(B.a([B.r(w,B.X(d,e,w,w,w,21),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bd,B.E(B.x(B.a([B.d(f,w,w,w,w,w,w,Ab.VQ,w,w,w),A.bG,B.d(g,w,w,w,w,w,w,F.abM,w,w,w)],s),A.E,w,A.e,A.i,0,A.p),1)],s),A.E,w,A.e,A.i,0,w,w),w)},
$S:1916}
C.eyw.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).hU()},
$S:0}
C.eyx.prototype={
$0(){var w=this.a
return w.m(new C.eyv(w))},
$S:0}
C.eyv.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eyy.prototype={
$0(){var w=this.a
return w.m(new C.eyu(w))},
$S:0}
C.eyu.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.eyz.prototype={
$0(){var w=this.a
return w.m(new C.eyt(w))},
$S:0}
C.eyt.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eys.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.nc.gdP(D.nc),w=w.gae(w);w.C();){v=w.gR(w)
if(v.b.c===e)p.push(v.a)}w=B.d(d,q,q,q,q,q,q,B.m(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.I)(p),++r)u.push(s.cz8(p[r]))
return new B.D(S.alQ,B.x(B.a([new B.D(Ai.any,w,q),B.A(u,A.l,q,A.e,A.i,0,q,q)],v),A.E,q,A.e,A.i,0,A.p),q)},
$S:z+37}
C.eyr.prototype={
$0(){return this.a.cbB(this.b)},
$S:0}
C.dru.prototype={
$0(){var w=this,v=null,u=B.ft(v,A.ct,v,v,v,B.cQ(v,v,v,v,v,v,v,v,v,B.m(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.bX,v,A.dE,A.bY)
u.e5()
return u},
$S:257}
C.bQh.prototype={
$1(d){return d.r<=0},
$S:z+38}
C.bQs.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bQn.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bQt.prototype={
$1(d){return this.a.Mo(d)&&!d.x},
$S:z+0}
C.bQu.prototype={
$2(d,e){return Math.max(d,this.a.aCN(e))},
$S:z+6}
C.bQw.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bQx(w))},
$S:z+5}
C.bQx.prototype={
$0(){return this.a.a},
$S:89}
C.bQv.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:70}
C.bQy.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bQz(w))},
$S:z+5}
C.bQz.prototype={
$0(){return this.a.a},
$S:89}
C.bQj.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bQk(w))},
$S:z+5}
C.bQk.prototype={
$0(){return this.a.a},
$S:89}
C.bQi.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:70}
C.bQl.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bQm(w))},
$S:z+5}
C.bQm.prototype={
$0(){return this.a.a},
$S:89}
C.bQg.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bQA.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bQo.prototype={
$1(d){return d!==this.b&&this.a.aJ7(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bQr.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bQq.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bQp.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bKE.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bKF.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.cuf.prototype={
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
$S:193}
C.fXf.prototype={
$1(d){var w
$.S()
w=B.L()
w.r=d.gp(0)
return w},
$S:1917}
C.fXh.prototype={
$2(d,e){var w
$.S()
w=B.L()
w.b=A.a9
w.c=e
w.r=d.gp(0)
w.d=A.bv
return w},
$S:1918}
C.fXi.prototype={
$5(d,e,f,g,h){return B.bn(new B.a1(d,e,d+f,e+g),new B.aO(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1919}
C.fXg.prototype={
$3(d,e,f){var w
$.S()
w=B.L()
w.sav(new B.a8(A.b0,A.b7,A.x,B.a([e,f],x.O),null,null).aK(0,d))
return w},
$S:1920}
C.bKh.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.bKi.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bKg(w))},
$S:0}
C.bKg.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bKj.prototype={
$0(){return B.a([],x.C)},
$S:1921}
C.bKk.prototype={
$1(d){return this.a.bD(d).a>15e5},
$S:437}
C.bKl.prototype={
$0(){var w,v,u
J.bHm(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.ru(v))if(C.hgC(v.b))w.b3q(v)
else w.a0H(v)
else{u=w.a.c.bgi(v)
w.afn(u==null?"The "+$.qH().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bKf.prototype={
$1(d){return new B.e1(new C.bKc(this.a,this.b),null)},
$S:21}
C.bKc.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p=null,o=this.b,n=new C.bKd(this.a,o,a3),m=$.qH(),l=o.b,k=m.h(0,l).d,j=A.j.V(o.ch/1.04),i=new C.bKe(o,n,k),h=B.l(26),g=B.K(k.j(0.55),A.r,1.4),f=x.V,e=B.a([new B.ab(0,A.G,k.j(0.25),A.J,26)],f),d=B.r(p,p,A.f,p,p,new B.o(A.aT,p,p,B.l(3),p,p,A.n),p,4,p,p,p,p,p,42),a0=k.j(0.2),a1=B.K(k,A.r,1)
a1=B.r(p,B.as(B.d(m.h(0,l).c,p,p,p,p,p,p,A.q_,p,p,p),p,p,p),A.f,p,p,new B.o(a0,p,a1,p,p,p,A.a6),p,42,p,p,p,p,p,42)
a0=x.p
w=B.E(B.x(B.a([B.d(m.h(0,l).b,p,1,A.a2,p,p,p,A.jR,p,p,p),D.fRf],a0),A.E,p,A.e,A.i,0,A.p),1)
v=k.j(0.2)
u=B.l(14)
t=B.K(k,A.r,1)
u=B.A(B.a([a1,A.bd,w,B.r(p,B.d(""+A.j.V(o.ch*100)+"%",p,p,p,p,p,p,B.m(p,p,k,p,p,p,p,p,p,p,p,15,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(v,p,t,u,p,p,A.n),p,p,p,p,A.me,p,p,p)],a0),A.l,p,A.e,A.i,0,p,p)
t=A.w.j(0.35)
v=B.l(18)
w=B.K(A.dr,A.r,1)
a1=30+28*o.ch
s=B.l(8)
r=B.a([k.j(0.85),A.as],x.O)
q=B.K(A.aF,A.r,2)
f=B.a([new B.ab(0,A.G,k.j(0.5),A.J,14)],f)
v=B.r(p,B.as(B.cT(p,B.as(new B.dE(A.dD,A.A,A.f,new B.D(A.hN,B.d(m.h(0,l).c,p,p,p,p,p,p,A.mC,p,p,p),p),p),p,p,p),p,p,A.b_,new B.o(p,p,q,s,f,new B.a8(A.aA,A.aD,A.x,r,p,p),A.n),A.eI,p,a1*0.58,p,p,p,p,p,a1),p,p,p),A.f,p,p,new B.o(t,p,w,v,p,p,A.n),p,120,p,p,p,p,p,1/0)
i=B.A(B.a([i.$2("1\xd7",1),i.$2("2\xd7",2),i.$2("3\xd7",3),i.$2("4\xd7",4),i.$2("5\xd7",5)],a0),A.l,p,A.e,A.i,0,p,p)
w=B.aI(p,p,p,p,B.X(A.aqT,k,p,p,p,30),p,p,p,new C.bK8(n,o),p,p,p,p,p,p)
t=B.abt(a2).bfM(k,A.by,k.j(0.2),A.c,8)
o=B.A(B.a([w,B.E(B.Z3(B.l0(p,p,p,5.2,1,n,A.j.D(o.ch,1,5.2)),t),1),B.aI(p,p,p,p,B.X(A.a2W,k,p,p,p,30),p,p,p,new C.bK9(n,o),p,p,p,p,p,p)],a0),A.l,p,A.e,A.i,0,p,p)
return B.bm(!0,B.r(p,B.x(B.a([d,A.ae,u,A.aC,v,A.ae,i,A.aw,o,B.A(B.a([B.E(B.d(j<=1?"Normal size":"About "+j+" times the normal size",p,p,p,p,p,p,A.ht,p,p,p),1),B.bP(!1,Z.aXS,p,p,!0,p,p,p,new C.bKa(a2),p,B.fs(p,p,k.j(0.25),p,p,p,p,p,p,p,p,A.c,p,p,p,p,p,A.t4,p,p,p,p,p,p,p,p))],a0),A.l,p,A.e,A.i,0,p,p)],a0),A.l,p,A.e,A.O,0,A.p),A.f,p,p,new B.o(p,p,g,h,e,D.cbz,A.n),p,p,p,A.yJ,D.bFh,p,p,p),!0,!1,A.ag,!0,!0)},
$S:85}
C.bKd.prototype={
$1(d){var w=this.a
w.m(new C.bK6(this.b,d))
this.c.$1(new C.bK7())
w.a.toString},
$S:6}
C.bK6.prototype={
$0(){return this.a.ch=A.j.D(this.b,1,5.2)},
$S:0}
C.bK7.prototype={
$0(){},
$S:0}
C.bKe.prototype={
$2(d,e){var w=this,v=null,u=Math.abs(w.a.ch-e)<0.05,t=u?w.c.j(0.28):A.c.j(0.06),s=B.l(14),r=u?w.c:A.by
r=B.K(r,A.r,u?2:1)
return B.E(B.az(v,B.cT(v,B.as(new B.dE(A.dY,A.A,A.f,B.d(d,v,v,v,v,v,v,B.m(v,v,u?w.c:A.ab,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),v,v,v),v,v,A.b_,new B.o(t,v,r,s,v,v,A.n),A.h7,v,v,v,A.js,A.qF,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.bKb(w.b,e),v,v,v,v,v,v,!1,A.a4),1)},
$S:679}
C.bKb.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bK8.prototype={
$0(){return this.a.$1(this.b.ch-0.4)},
$S:0}
C.bK9.prototype={
$0(){return this.a.$1(this.b.ch+0.4)},
$S:0}
C.bKa.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.bKB.prototype={
$2(d,e){var w
if(d==="short"){G.dF(1800,"",120,0,0.55,"noise")
G.dF(200,"",160,2.2,0.4,"saw")
B.fN()
w=this.a
if(w.c!=null)w.afn("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){G.dF(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.afn("\u26a0 Overloaded! The "+$.qH().h(0,e.b).b+" can only give about "+A.j.ad(w.a.c.Ak(e),2)+" amps but your gadgets are asking for "+A.j.ad(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.afn("Burnt out! "+e.ay)
G.dF(140,"",320,0,0.6,"noise")
G.dF(900,"",160,1.5,0.35,"square")}},
$S:z+42}
C.bKC.prototype={
$0(){},
$S:0}
C.bJH.prototype={
$0(){},
$S:0}
C.bKD.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bKA.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.at=n
w=o.a.c
v=o.d
u=o.y
t=o.z
s=o.x
r=this.b
q=x.p
n=B.a([B.az(A.c3,B.b3(p,p,p,new C.aka(w,v,u,t,s,r==null?A.jv:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bKu(o),new C.bKv(o),new C.bKw(o),p,p,p,p,p,p,p,p,p,p,new C.bKx(o),p,p,p,!1,A.a4)],q)
if(o.a.c.a.length===0)n.push(D.bdz)
w=o.ay
if(w!=null){v=B.l(14)
u=B.K(A.cI,A.r,1)
n.push(B.ap(p,B.az(p,B.r(p,B.A(B.a([D.fHm,B.E(B.d(w,p,p,p,p,p,p,D.fyY,p,p,p),1)],q),A.E,p,A.e,A.i,0,p,p),A.f,p,p,new B.o(D.bjB,p,u,v,p,p,A.n),p,p,p,p,A.nK,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bKy(o),p,p,p,p,p,p,!1,A.a4),p,p,10,10,8,p))}if(o.x!=null){o=B.A(B.a([D.bL_,new E.fE(A.CZ,"Cut wire",new C.bKz(o),A.bZ,p)],q),A.l,p,A.e,A.i,0,p,p)
w=B.l(18)
n.push(B.ap(8,B.r(p,o,A.f,p,p,new B.o(F.Yz,p,B.K(A.by,A.r,1),w,p,p,A.n),p,p,p,p,F.amj,p,p,p),p,p,12,12,p,p))}else{w=o.e
if(w!=null&&A.d.q(o.a.c.a,w)){w=o.e
w.toString
n.push(B.ap(8,o.cmo(w),p,p,10,10,p,p))}}return B.jo(new B.an(A.a0,p,A.b2,A.t,n,p),A.t,p)},
$S:323}
C.bKv.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.bau(s)
if(r!=null){t.m(new C.bKs(t,r,d))
return}w=t.b46(s)
if(w!=null){t.Q=w
v=w.c
u=t.at
t.as=new B.p(v*u.a,w.d*u.b).aJ(0,s)
t.m(new C.bKt(t,w))}},
$S:49}
C.bKs.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c.b},
$S:0}
C.bKt.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bKw.prototype={
$1(d){var w=this.a
if(w.y!=null)w.m(new C.bKq(w,d))
else if(w.Q!=null)w.m(new C.bKr(w,d.b.a2(0,w.as)))},
$S:19}
C.bKq.prototype={
$0(){return this.a.z=this.b.b},
$S:0}
C.bKr.prototype={
$0(){var w,v=this.a,u=v.Q
u.toString
w=this.b
u.c=A.j.D(w.a/v.at.a,0.14,0.86)
u=v.Q
u.toString
u.d=A.j.D(w.b/v.at.b,0.08,0.92)},
$S:0}
C.bKu.prototype={
$1(d){var w,v,u,t=this.a
if(t.y!=null&&t.z!=null){w=t.z
w.toString
v=t.bau(w)
if(v!=null&&v.a!==t.y.a){w=t.a.c
u=t.y
if(w.am9(u.a,u.b,v.a,v.b)!=null)G.dF(1500,"",40,0,0.22,"square")}}t.Q=t.z=t.y=null
t.afl()},
$S:38}
C.bKx.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.b46(u)
if(t!=null){v.m(new C.bKn(v,t))
if(D.mt.am(0,t.b))v.cx0(t)
w=new B.V(Date.now(),0,!1)
if(v.r===t&&w.bD(v.w).a<38e4){v.m(new C.bKo(v,t))
v.r=null}else{v.r=t
v.w=w}v.a.toString
return}v.m(new C.bKp(v,v.cJS(u)))},
$S:68}
C.bKn.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.x=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
G.dF(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
G.dF(200,"",70,0,0.2,"saw")}},
$S:0}
C.bKo.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.bKp.prototype={
$0(){var w=this.a
w.x=this.b
w.e=w.d=null},
$S:0}
C.bKy.prototype={
$0(){var w=this.a
return w.m(new C.bKm(w))},
$S:0}
C.bKm.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bKz.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.x)
w.x=null
G.dF(300,"",50,0,0.35,"noise")
w.afl()},
$S:0}
C.bJI.prototype={
$0(){return this.a.bsL(this.b)},
$S:0}
C.bK3.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.A(B.a([B.d(d,w,w,w,w,w,w,D.ft0,w,w,w),B.E(B.l0(this.b.d,w,w,g,h,new C.bK5(this.a,f),A.j.D(e,h,g)),1)],x.p),A.l,w,A.e,A.i,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1922}
C.bK5.prototype={
$1(d){var w=this.a
w.m(new C.bK4(this.b,d))
w.a.toString},
$S:6}
C.bK4.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bK2.prototype={
$2(d,e){var w=null,v=A.c.j(0.06),u=B.l(10)
return B.E(B.r(w,B.x(B.a([B.d(d,w,w,w,w,w,w,A.abC,w,w,w),B.d(e,w,w,w,w,w,w,D.fvO,w,w,w)],x.p),A.l,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(v,w,w,u,w,w,A.n),w,w,w,w,A.ww,w,w,w),1)},
$S:119}
C.bJP.prototype={
$0(){var w=this.a
return w.m(new C.bJO(w))},
$S:0}
C.bJO.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.bJQ.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.e=w.d=null
G.dF(260,"",70,0,0.35,"noise")
w.afl()},
$S:0}
C.bJR.prototype={
$0(){var w=this.a
return w.m(new C.bJN(w))},
$S:0}
C.bJN.prototype={
$0(){return this.a.e=null},
$S:0}
C.bJV.prototype={
$0(){this.a.m(new C.bJM(this.b,this.c))
G.dF(900,"",40,0,0.3,"noise")},
$S:0}
C.bJM.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bJW.prototype={
$0(){return this.a.b3q(this.b)},
$S:0}
C.bJX.prototype={
$0(){return this.a.a0H(this.b)},
$S:0}
C.bJY.prototype={
$0(){return this.a.a2k(this.b)},
$S:0}
C.bJZ.prototype={
$0(){var w=this.a
w.m(new C.bJL(this.b,this.c))
w.a.toString},
$S:0}
C.bJL.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bK_.prototype={
$0(){var w=this.a
w.m(new C.bJK(this.b,this.c))
w.a.toString},
$S:0}
C.bJK.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bK0.prototype={
$0(){var w=this.a
w.m(new C.bJJ(this.b,this.c))
w.a.toString},
$S:0}
C.bJJ.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bK1.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJS.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJT.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJU.prototype={
$1(d){return this.a.f=d},
$S:6}
C.fts.prototype={
$1(d){return d.aIJ("bulb")},
$S:z+2}
C.ftt.prototype={
$1(d){return d.qe(0,"switch")&&d.aIJ("bulb")},
$S:z+2}
C.ftu.prototype={
$1(d){return A.d.aV(d.a,new C.ftf())},
$S:z+2}
C.ftf.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.ftv.prototype={
$1(d){return d.qe(0,"resistor")&&A.d.aV(d.a,new C.fte())},
$S:z+2}
C.fte.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.ftw.prototype={
$1(d){return!d.qe(0,"battery")&&d.aIJ("bulb")},
$S:z+2}
C.ftj.prototype={
$1(d){return A.d.aV(d.a,new C.ftd())},
$S:z+2}
C.ftd.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.ftk.prototype={
$1(d){return A.d.aV(d.a,new C.ftc())},
$S:z+2}
C.ftc.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.ftl.prototype={
$1(d){return A.d.aV(d.a,new C.ftb())},
$S:z+2}
C.ftb.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.ftm.prototype={
$1(d){var w=d.a
return A.d.aV(w,new C.ft9())&&A.d.aV(w,new C.fta())&&d.qe(0,"buck")},
$S:z+2}
C.ft9.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fta.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.ftn.prototype={
$1(d){var w=d.a
return A.d.aV(w,new C.ft7())&&A.d.aV(w,new C.ft8())},
$S:z+2}
C.ft7.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.ft8.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fto.prototype={
$1(d){return A.d.aV(d.a,new C.ft6())},
$S:z+2}
C.ft6.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.e1s.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a8(0)
w.u(0,v.b)},
$S:0}
C.e1B.prototype={
$1(d){var w=this.a.d
return w.aJ7(d)&&w.ru(d)},
$S:z+0}
C.e1C.prototype={
$1(d){return d.x},
$S:z+0}
C.e1D.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.e1E.prototype={
$0(){},
$S:0}
C.e1r.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.l(22),o=x.p,n=B.a([D.fZ4,A.aw,D.fJc,A.W],o)
for(w=this.a,v=0;v<19;++v){u=D.Se[v]
t=A.c.j(0.06)
s=new B.aO(14,14)
r=new B.ay(A.by,1,A.r,-1)
n.push(B.az(q,B.r(q,B.x(B.a([B.d(u.a,q,q,q,q,q,q,A.iG,q,q,q),A.bG,B.d(u.b,q,3,A.a2,q,q,q,D.fzI,q,q,q)],o),A.E,q,A.e,A.i,0,A.p),A.f,q,q,new B.o(t,q,new B.bG(r,r,r,r),new B.be(s,s,s,s),q,q,A.n),q,q,q,A.cy,A.bk,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.e1q(w,d,u),q,q,q,q,q,q,!1,A.a4))}return B.eG(q,F.mV,new B.D(A.bS,new B.a5(340,q,B.cm(n,q,q,q,q,q,A.ah,!0),q),q),q,q,q,q,q,A.d8,q,new B.b9(p,A.a1),q)},
$S:47}
C.e1q.prototype={
$0(){B.a6(this.b,!1).O(null)
var w=this.a
w.m(new C.e1p(w,this.c))
G.dF(800,"",120,-0.5,0.3,"square")},
$S:0}
C.e1p.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.blq()},
$S:0}
C.e1n.prototype={
$1(d){return new C.WS(this.a.d,null)},
$S:z+44}
C.e1o.prototype={
$0(){},
$S:0}
C.e1A.prototype={
$1(d){return new B.e1(new C.e1z(this.a),null)},
$S:21}
C.e1z.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.ajg(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.q(0,k),f=g?A.b4:A.aG
k=B.aF(d,m,x.l).w
w=l.r
v=x.p
u=B.a([B.A(B.a([D.fWd,A.b1,B.d(""+w.a+" of 11 done",m,m,m,m,m,m,B.m(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.l,m,A.e,A.i,0,m,m),A.T,B.bx(B.l(4),B.ks(A.by,m,m,5,m,w.a/11,new B.lQ(f,x.c)),A.aq),A.ae],v)
if(h)u.push(D.fMp)
else{h=f.j(0.1)
t=B.l(14)
s=B.K(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.d(r+" Now: "+i.a,m,m,m,m,m,m,Ad.KS,m,m,m)
q=B.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,K.L1,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.r(m,B.x(B.a([r,A.aw,q,new B.bL(A.aa,m,m,B.bP(!1,B.d(p,m,m,m,m,m,m,B.m(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.e1x(l,e),m,m),m)],v),A.E,m,A.e,A.i,0,A.p),A.f,m,m,new B.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bk,m,m,m))}u.push(A.W)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aO(12,12)
n=new B.ay(o===l.f?f.j(0.6):A.dr,1,A.r,-1)
if(w.q(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
s=B.d(s,m,m,m,m,m,m,A.abL,m,m,m)
r=j[o]
q=w.q(0,o)?A.aF:A.c
u.push(B.az(m,B.r(m,new B.c8(A.aL,A.e,A.i,A.l,m,A.p,m,0,B.a([s,A.au,new B.bz(1,A.bb,B.d(r.a,m,m,m,m,m,m,new B.F(!0,q,m,m,m,m,13,A.I,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],v),m),A.f,m,m,new B.o(h,m,new B.bG(n,n,n,n),new B.be(t,t,t,t),m,m,A.n),m,m,m,A.eP,A.nK,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.e1y(l,o,e),m,m,m,m,m,m,!1,A.a4))}return B.bm(!0,new B.cN(new B.aY(0,1/0,0,k.a.b*0.75),B.cm(u,m,m,A0.yS,m,m,A.ah,!0),m),!0,!1,A.ag,!0,!0)},
$S:85}
C.e1x.prototype={
$0(){var w=this.a
w.m(new C.e1v(w))
this.b.$1(new C.e1w())
w.Fy()},
$S:0}
C.e1v.prototype={
$0(){var w=this.a
$.ajg()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.e1w.prototype={
$0(){},
$S:0}
C.e1y.prototype={
$0(){var w=this.a
w.m(new C.e1t(w,this.b))
this.c.$1(new C.e1u())
w.Fy()},
$S:0}
C.e1t.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e1u.prototype={
$0(){},
$S:0}
C.e1G.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.e1H.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.kS("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a6(t.b,!1).ce(B.ed(new C.e1F(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.e1F.prototype={
$1(d){B.l6("construction")
return Ak.hW4()},
$S:z+45}
C.e1I.prototype={
$0(){return E.hHu(this.a,"ELECTRONICS LAB",this.b,A.aG)},
$S:0}
C.e1J.prototype={
$0(){var w=this.a
return w.m(w.d.gd0I())},
$S:0}
C.e1K.prototype={
$0(){var w=this.a,v=w.d
w.m(v.gti(v))
w.Fy()},
$S:0}
C.cLP.prototype={
$2(d,e){var w=null,v=this.a.gazd().x
v===$&&B.c()
return B.b3(w,w,w,new C.bbv(v,w),A.az)},
$S:57}
C.cLO.prototype={
$3(d,e,f){var w=new B.aG($.S().r,A.ai,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.E(new B.aZ(v,t))
w.E(new B.c7(v,u,v+e,u))
w.E(new B.c7(v,u,v,u+e))
w.E(new B.c7(v,u,v-e,u))
w.E(new B.c7(v,u,v,t))
w.E(new B.bu())
t=B.L()
t.r=A.c.j(f).gp(0)
this.a.af(w,t)},
$S:360}
C.h1g.prototype={
$3(d,e,f){return new C.W9(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+46}
C.h1h.prototype={
$4(d,e,f,g){var w=x.a
return new B.d2(e,!1,B.ij(A.A,g,null,new B.bg(B.cG(A.cw,e,null),new B.bs(0.85,1,w),w.k("bg<bQ.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
C.dYC.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.dYB.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.l(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c20(o):q.bF7(o,p),m=x.p
p=B.a([B.oB(new B.mr(n,new B.bo(p,x.bz)),A.pr,B.pW(),A.b_,A.b_,new C.dYz())],m)
n=t.d
if(n){w=A.j.F(q.gSI(),12)<4
v=w?150:96
u=B.l(16)
m=B.a([A.au],m)
if(w)m.push(D.bKM)
else m.push(A.b1)
m.push(B.r(s,s,A.f,s,s,new B.o(w?A.b4:A.as,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.au)
p.push(B.ap(s,B.as(B.cT(s,B.A(m,A.l,s,A.e,A.i,0,s,s),s,s,A.e3,new B.o(A.w,s,s,u,s,s,A.n),A.n_,s,28,s,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.AH)p.push(B.ap(s,B.as(B.r(s,s,A.f,s,s,A.M6,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.EG)p.push(B.ap(s,B.r(s,s,A.f,s,s,A.M6,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ap(6,B.az(s,B.as(B.r(s,s,A.f,s,s,new B.o(A.c.j(0.75),s,s,B.l(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dYA(q),s,s,s,s,s,s,!1,A.a4),s,s,0,0,s,s))
return B.bx(r,new B.an(A.a0,s,A.b2,A.t,p,s),A.aq)},
$S:308}
C.dYz.prototype={
$2(d,e){var w=x.a
return new B.d2(e,!1,B.ij(A.A,d,null,new B.bg(e,new B.bs(0.92,1,w),w.k("bg<bQ.T>"))),null)},
$S:474}
C.dYA.prototype={
$0(){var w=this.a
return w.m(new C.dYy(w))},
$S:0}
C.dYy.prototype={
$0(){return this.a.e=null},
$S:0}
C.dYx.prototype={
$0(){var w=this.a
return w.m(new C.dYw(w,this.b))},
$S:0}
C.dYw.prototype={
$0(){return this.a.e=A.d.co(F.kz,this.b)},
$S:0}
C.dYv.prototype={
$0(){var w=this.a
return w.m(new C.dYu(w))},
$S:0}
C.dYu.prototype={
$0(){return this.a.e=0},
$S:0}
C.dYq.prototype={
$0(){var w=this.a
return w.m(new C.dYp(w))},
$S:0}
C.dYp.prototype={
$0(){return this.a.e=null},
$S:0}
C.dYt.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=B.l(o?20:8),m=A.w.j(0.55),l=x.p
m=B.r(p,B.A(B.a([D.h3S,A.au,B.E(B.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eS,p,p,p,A.ac4,p,p,p),1),B.d(A.a.b_(A.o.v(B.df(new B.V(Date.now(),0,!1))),2,"0")+":"+A.a.b_(A.o.v(B.fS(new B.V(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.rg,p,p,p)],l),A.l,p,A.e,A.i,0,p,p),A.f,m,p,p,p,24,p,p,A.kx,p,p,p)
w=this.a
v=B.a([B.b3(p,p,p,new C.byb(w.gSI(),this.c.d,p),A.az)],l)
o=w.e
if(o!=null){u=B.l(10)
t=B.K(A.aT,A.r,1)
s=B.l(10)
o=B.r(p,B.A(B.a([B.az(p,B.r(p,p,A.f,p,p,A.af6,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dYs(w),p,p,p,p,p,p,!1,A.a4),A.e8,B.r(p,p,A.f,p,p,A.Y_,p,12,p,p,p,p,p,12),A.e8,B.r(p,p,A.f,p,p,D.b8F,p,12,p,p,p,p,p,12),A.au,B.E(B.d(F.kz[o].a,p,1,A.a2,p,p,p,A.VO,p,p,p),1)],l),A.l,p,A.e,A.i,0,p,p),A.f,A.cm,p,p,p,24,p,p,A.fE,p,p,p)
r=w.e
r.toString
v.push(B.bS(0,new B.D(D.bHf,B.r(p,B.bx(s,B.x(B.a([o,B.E(B.b3(p,p,p,new C.ag0(r,w.gSI(),p),A.fT),1)],l),A.l,p,A.e,A.i,0,A.p),A.aq),A.f,p,p,new B.o(A.w,p,t,u,D.dxy,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=B.l(18)
t=B.K(A.aT,A.r,1)
s=B.a([],l)
for(q=0;q<8;++q)s.push(new B.D(A.js,w.ax5(F.kz[q],34,!1),p))
v.push(B.ap(8,B.as(B.r(p,B.A(s,A.l,p,A.e,A.O,0,p,p),A.f,p,p,new B.o(o,p,t,u,p,p,A.n),p,p,p,p,A.lO,p,p,p),p,p,p),p,p,0,0,p,p))
return B.bx(n,B.r(p,B.x(B.a([m,B.E(new B.an(A.a0,p,A.b2,A.t,v,p),1)],l),A.l,p,A.e,A.i,0,A.p),A.f,X.a_a,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:308}
C.dYs.prototype={
$0(){var w=this.a
return w.m(new C.dYr(w))},
$S:0}
C.dYr.prototype={
$0(){return this.a.e=null},
$S:0}
C.ftX.prototype={
$0(){return D.ekV},
$S:z+47}
C.ftY.prototype={
$0(){return D.dT2},
$S:z+48}
C.ftZ.prototype={
$0(){return D.dPy},
$S:z+49}
C.fu_.prototype={
$0(){return D.dSq},
$S:z+50}
C.fu0.prototype={
$0(){return D.dXy},
$S:z+51}
C.fu1.prototype={
$0(){return D.egH},
$S:z+52}
C.fu2.prototype={
$0(){return D.eiR},
$S:z+53}
C.fu3.prototype={
$0(){return D.dWS},
$S:z+36}
C.cn7.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.cn8.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=(e.b-14)/2,i=x.p,h=B.a([],i)
for(w=$.hLj(),v=j*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aO(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ab(0,A.G,p.j(0.4),A.dp,16)],t)
n=B.d(r.c,k,k,k,k,k,k,Aj.KQ,k,k,k)
m=B.d(r.a,k,k,k,k,k,k,D.fEL,k,k,k)
l=A.c.j(0.85)
h.push(B.az(k,B.r(k,new B.an(A.a0,k,A.ad,A.t,B.a([new B.cK(k,-6,-6,k,k,k,n,k),new B.bL(A.lA,k,k,B.x(B.a([m,A.cR,B.d(r.b,k,k,k,k,k,k,new B.F(!0,l,k,k,k,k,12,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)],i),A.E,k,A.e,A.O,0,A.p),k)],i),k),A.f,k,k,new B.o(k,k,k,new B.be(q,q,q,q),p,new B.a8(A.aA,A.aD,A.x,o,k,k),A.n),k,v,k,k,A.bI,k,k,j),A.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.cn6(d,r),k,k,k,k,k,k,!1,A.a4))}return B.bX(A.bH,h,A.bt,k,14,14)},
$S:178}
C.cn6.prototype={
$0(){return B.a6(this.a,!1).ce(B.ed(new C.cn5(this.b),!1,null,x.H))},
$S:0}
C.cn5.prototype={
$1(d){return this.a.f.$0()},
$S:39}
C.eVg.prototype={
$0(){var w=this.a
return w.w=w.d[w.b7v(w.f)]},
$S:0}
C.eVc.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cS.ai()*7},
$S:0}
C.eVb.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bP(0,A.cg)
w.w=""},
$S:0}
C.eVe.prototype={
$0(){var w=this.a
return w.m(new C.eVd(w,this.b))},
$S:0}
C.eVd.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cH(w,this.b)},
$S:0}
C.eVf.prototype={
$1(d){return this.a.b1O(0)},
$S:2}
C.e4r.prototype={
$0(){return C.JR("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.e4s.prototype={
$0(){},
$S:0}
C.e4m.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.e4o.prototype={
$0(){return this.a.b1Q(this.b)},
$S:0}
C.e4p.prototype={
$0(){var w=this.a
return w.m(new C.e4n(w))},
$S:0}
C.e4n.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.e4q.prototype={
$0(){var w=this.a
return w.b1Q(w.d)},
$S:0}
C.dPU.prototype={
$2(d,e){return d+e},
$S:79}
C.dPV.prototype={
$0(){},
$S:0}
C.dPP.prototype={
$2(d,e){return d+e},
$S:79}
C.dPS.prototype={
$0(){var w=this.a
return w.m(new C.dPR(w,this.b))},
$S:0}
C.dPR.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dPT.prototype={
$0(){var w=this.a
return w.m(new C.dPQ(w))},
$S:0}
C.dPQ.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.e0X.prototype={
$0(){return E.uI(this.b,this.a.d,"drawing")},
$S:0}
C.e0Y.prototype={
$1(d){var w=this.a
return w.m(new C.e0W(w,d))},
$S:49}
C.e0W.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aKi(u,v,t))},
$S:0}
C.e0Z.prototype={
$1(d){var w=this.a
return w.m(new C.e0V(w,d))},
$S:19}
C.e0V.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
C.e1_.prototype={
$1(d){var w=this.a
return w.m(new C.e0U(w,d))},
$S:23}
C.e0U.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aKi(u,v,t))},
$S:0}
C.e10.prototype={
$0(){var w=this.a
return w.m(new C.e0T(w,this.b))},
$S:0}
C.e0T.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.e11.prototype={
$1(d){var w=this.a
return w.m(new C.e0S(w,d))},
$S:6}
C.e0S.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.e12.prototype={
$0(){var w=this.a
return w.m(new C.e0R(w))},
$S:0}
C.e0R.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.e13.prototype={
$0(){var w=this.a
return w.m(new C.e0Q(w))},
$S:0}
C.e0Q.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.e14.prototype={
$0(){var w=this.a
return w.m(A.d.gti(w.e))},
$S:0}
C.e15.prototype={
$0(){var w=this.a
return w.m(new C.e0P(w))},
$S:0}
C.e0P.prototype={
$0(){var w=this.a
w.x=D.aB3[A.o.F(A.d.co(D.aB3,w.x)+1,4)]},
$S:0}
C.erW.prototype={
$0(){return this.a.f.I(0,this.b)},
$S:0}
C.erX.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.JR("bell",B.a([0,4,7],w),500,0.45)
u.m(new C.erV(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.c()
if(v===u.length)C.JR("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:11}
C.erV.prototype={
$0(){var w=this.a
w.r.u(0,B.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
C.erY.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.erU(w))},
$S:11}
C.erU.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
C.es1.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return B.az(w,B.lE(new C.es_(v,e),w,A.b_,A.pr,w,w,new B.bs(0,u,x.a),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.es0(v,e),w,w,w,w,w,w,!1,A.a4)},
$S:82}
C.es0.prototype={
$0(){return this.a.cdI(this.b)},
$S:0}
C.es_.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dr(),m=n.a
m.$flags&2&&B.aj(m)
m[11]=0.001
n.fL(3.141592653589793*e)
m=B.l(16)
w=o?p:D.caL
if(o)v=q.a.r.q(0,q.b)?A.b4.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.K(u.r.q(0,t)?A.b4:A.aT,A.r,1)
if(o){r=B.dr()
r.fL(3.141592653589793)
u=u.e
u===$&&B.c()
r=B.fB(A.A,B.d(u[t],p,p,p,p,p,p,H.abP,p,p,p),p,r,!0)
u=r}else u=D.fXK
return B.fB(A.A,B.r(A.A,u,A.f,p,p,new B.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:111}
C.es2.prototype={
$0(){var w=this.a
return w.m(new C.erZ(w,this.b))},
$S:0}
C.erZ.prototype={
$0(){var w=this.a
w.d=this.b.a
w.auq()},
$S:0}
C.es3.prototype={
$0(){var w=this.a
return w.m(w.gbNT())},
$S:0}
C.eCI.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.eCJ.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.eCG.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eCH.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eCF(w))},
$S:11}
C.eCF.prototype={
$0(){return this.a.f=-1},
$S:0}
C.eCK.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.eCL.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.eCM.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b1P()},
$S:11}
C.eCN.prototype={
$0(){return this.a.cdO(this.b)},
$S:0}
C.eQK.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:60}
C.eQT.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.d(d,w,1,A.a2,w,w,w,B.m(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.D(A.kU,B.A(B.a([v,A.af,new B.di(1,A.cl,new B.dE(A.dY,A.A,A.f,B.d(e,w,w,w,w,w,w,B.m(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w),w)],x.p),A.l,w,A.e,A.i,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1923}
C.eQP.prototype={
$1(d){return this.a.m(new C.eQO())},
$S:2}
C.eQO.prototype={
$0(){},
$S:0}
C.eQQ.prototype={
$0(){var w=this.a
return w.m(new C.eQN(w,this.b))},
$S:0}
C.eQN.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eQR.prototype={
$1(d){var w=this.a
return w.m(new C.eQM(w,d))},
$S:6}
C.eQM.prototype={
$0(){return this.a.f=A.j.V(this.b)},
$S:0}
C.eQS.prototype={
$0(){var w=this.a
return w.m(new C.eQL(w))},
$S:0}
C.eQL.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eqB.prototype={
$0(){},
$S:0}
C.eqC.prototype={
$0(){},
$S:0}
C.equ.prototype={
$0(){var w=this.a
return w.m(new C.eqt(w))},
$S:0}
C.eqt.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.c1(u,1,!1,x.S)
w.r=0.9
E.XF("hat",0,0.6)},
$S:0}
C.eqv.prototype={
$0(){var w=this.a
return w.m(new C.eqs(w))},
$S:0}
C.eqs.prototype={
$0(){this.a.y=1.1
E.mv("bell",36,200,0.4)},
$S:0}
C.eqw.prototype={
$0(){var w=this.a
return w.m(new C.eqr(w))},
$S:0}
C.eqr.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.az(Math.max(v,u)-t+1)
w.as=u
E.mv("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.eqx.prototype={
$0(){var w=this.a
return w.m(new C.eqq(w,this.b))},
$S:0}
C.eqq.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.eqy.prototype={
$1(d){var w=this.a
return w.m(new C.eqp(w,d))},
$S:6}
C.eqp.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.j.V(this.b),r=J.e5(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.eqz.prototype={
$1(d){var w=this.a
return w.m(new C.eqo(w,d))},
$S:6}
C.eqo.prototype={
$0(){return this.a.z=A.j.V(this.b)},
$S:0}
C.eqA.prototype={
$1(d){var w=this.a
return w.m(new C.eqn(w,d))},
$S:6}
C.eqn.prototype={
$0(){return this.a.Q=A.j.V(this.b)},
$S:0}
C.cn3.prototype={
$0(){var w=this
return E.mv(w.a,w.b,w.c,w.d)},
$S:1};(function aliases(){var w=C.aOo.prototype
w.bA3=w.t
w=C.aNr.prototype
w.bz4=w.t
w=C.aNs.prototype
w.bz5=w.t
w=C.aNw.prototype
w.bz9=w.t
w=C.aPd.prototype
w.bB_=w.t
w=C.aOm.prototype
w.bA1=w.t
w=C.azH.prototype
w.bw5=w.t
w=C.azI.prototype
w.bw6=w.t
w=C.aLT.prototype
w.bxs=w.t
w=C.aNH.prototype
w.bzk=w.t
w=C.aNt.prototype
w.bz6=w.t
w=C.aNO.prototype
w.bzs=w.t
w=C.aOg.prototype
w.bzW=w.t
w=C.aOH.prototype
w.bAm=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0,u=a._instance_1u,t=a._instance_1i,s=a._instance_0i,r=a.installInstanceTearOff
w(C.aGo.prototype,"gayA","c98",1)
v(C,"irX","c6W",3)
var q
u(q=C.aER.prototype,"gci3","ci4",22)
w(q,"gc9I","b0q",1)
w(C.aET.prototype,"gcbr","cbs",1)
t(C.aF9.prototype,"gcby","cbz",39)
w(q=C.aJr.prototype,"gcBz","cBA",1)
w(q,"gcbA","afb",1)
w(q,"gcmz","cmA",1)
w(q,"gcbx","afa",3)
w(q=C.aGn.prototype,"gbL_","aay",3)
w(q,"gclP","b3X",1)
w(q,"gcpC","ahM",3)
s(q,"gcbC","afc",3)
s(q=C.a5H.prototype,"gti","a8",1)
u(q,"gcZm","aoV",0)
u(q,"gcVK","Mo",0)
w(q,"gd0I","blq",1)
r(C.aka.prototype,"gcbZ",0,5,null,["$5"],["qU"],41,0,0)
w(q=C.aFl.prototype,"gcc_","cc0",1)
w(q,"gcss","ai7",3)
w(q,"gcil","ags",3)
w(q,"gczA","ajh",3)
w(q=C.aGR.prototype,"gcdJ","cdK",1)
s(q,"gcdH","b1O",1)
w(C.aG9.prototype,"gbNT","auq",1)
s(C.aGu.prototype,"gcdL","cdM",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aE,[C.alm,C.GZ,C.vs,C.aUt,C.a4y,C.bcC,C.c6X,C.yM,C.D4,C.nL,C.bdn,C.Bc,C.bvE,C.qw,C.rc,C.D8,C.a_G,C.ag7,C.a1U,C.Dj,C.ad0,C.adh,C.afd,C.GK,C.eh,C.u1,C.abG,C.acN,C.a5H,C.mY,C.bdo,C.fT,C.mx,C.bwY,C.aKi])
u(B.hx,[C.fLj,C.fzX,C.fHH,C.fHI,C.fLg,C.fLh,C.ejJ,C.ek1,C.ezl,C.eyT,C.eyU,C.eyV,C.eyW,C.eyX,C.eyY,C.eyZ,C.ez_,C.eyR,C.eyS,C.eyQ,C.ezg,C.ezh,C.ezi,C.dPq,C.dPs,C.dPv,C.dPG,C.c6Y,C.c6Z,C.ftg,C.fth,C.fti,C.ftp,C.ftq,C.ftr,C.dRs,C.dR9,C.dRt,C.dR4,C.dR_,C.dR1,C.dR7,C.dRk,C.dRi,C.dRj,C.dRh,C.dRe,C.dRg,C.f8W,C.f8D,C.f8K,C.f8T,C.f8x,C.dry,C.drz,C.drv,C.drw,C.drx,C.drA,C.drB,C.drC,C.drD,C.drE,C.drF,C.drG,C.drH,C.drI,C.eyh,C.eyi,C.eyj,C.eyk,C.eyf,C.eyg,C.eyM,C.eyo,C.eyq,C.eya,C.eyI,C.eyG,C.eyH,C.eyF,C.eyE,C.eyc,C.bQh,C.bQs,C.bQn,C.bQt,C.bQv,C.bQi,C.bQg,C.bQA,C.bQo,C.bQr,C.bQq,C.bQp,C.bKE,C.fXf,C.fXi,C.fXg,C.bKk,C.bKf,C.bKd,C.bKD,C.bKv,C.bKw,C.bKu,C.bKx,C.bK3,C.bK5,C.bK1,C.bJS,C.bJT,C.bJU,C.fts,C.ftt,C.ftu,C.ftf,C.ftv,C.fte,C.ftw,C.ftj,C.ftd,C.ftk,C.ftc,C.ftl,C.ftb,C.ftm,C.ft9,C.fta,C.ftn,C.ft7,C.ft8,C.fto,C.ft6,C.e1B,C.e1C,C.e1r,C.e1n,C.e1A,C.e1F,C.cLO,C.h1g,C.h1h,C.cn5,C.eVf,C.e0Y,C.e0Z,C.e1_,C.e11,C.es_,C.eQK,C.eQT,C.eQP,C.eQR,C.eqy,C.eqz,C.eqA])
u(B.jz,[C.fLi,C.ejO,C.ejM,C.ez1,C.eze,C.dR0,C.dRn,C.dXG,C.f8Z,C.f9_,C.f8C,C.f8P,C.f8Q,C.f8L,C.f8R,C.f8w,C.eyd,C.eye,C.eyL,C.eyD,C.eys,C.bQu,C.bQw,C.bQy,C.bQj,C.bQl,C.bKF,C.cuf,C.fXh,C.bKc,C.bKe,C.bKB,C.bKA,C.bK2,C.e1z,C.cLP,C.dYB,C.dYz,C.dYt,C.cn8,C.dPU,C.dPP,C.es1])
u(B.af,[C.WS,C.Xe,C.VI,C.VP,C.Ol,C.aJq,C.Xd,C.ak8,C.Wq,C.azm,C.W9,C.XM,C.Wy,C.VJ,C.Wp,C.X8,C.Xi,C.XD,C.X7])
u(B.ah,[C.bmN,C.aOo,C.aNr,C.aNw,C.aF9,C.aPd,C.aOm,C.azH,C.bA9,C.aLT,C.aNH,C.aOH,C.aNO,C.aNt,C.bme,C.aG9,C.aGu,C.bnu,C.aOg])
u(B.iO,[C.ejH,C.ejI,C.ejU,C.ejV,C.ejQ,C.ejP,C.ejR,C.ejN,C.ejS,C.ejL,C.ejT,C.ejK,C.ejY,C.ejX,C.ejZ,C.ejW,C.ek_,C.ek0,C.ek2,C.ezk,C.ezm,C.ezn,C.ez3,C.ez2,C.ez0,C.ez9,C.eza,C.ez6,C.ezb,C.ez5,C.ezc,C.ezd,C.ez4,C.ezf,C.ez8,C.ezj,C.ez7,C.dPN,C.dPM,C.dPn,C.dPo,C.dPp,C.dPO,C.dPr,C.dPt,C.dPu,C.dPw,C.dPk,C.dPl,C.dPm,C.dPD,C.dPE,C.dPF,C.dPC,C.dPH,C.dPB,C.dPI,C.dPA,C.dPJ,C.dPz,C.dPK,C.dPy,C.dPL,C.dPx,C.dR6,C.dR5,C.dRa,C.dR2,C.dR3,C.dRb,C.dRc,C.dRd,C.dR8,C.dQZ,C.dRm,C.dRl,C.dRo,C.dRp,C.dRq,C.dRf,C.dRr,C.cWr,C.dXE,C.dXD,C.dXF,C.ftH,C.ftI,C.ftJ,C.ftK,C.ftL,C.ftM,C.ftN,C.ftO,C.ftP,C.f8Y,C.f8X,C.f8F,C.f8E,C.f8A,C.f8z,C.f8B,C.f8y,C.f8N,C.f8M,C.f8O,C.f8G,C.f8S,C.f8J,C.f8U,C.f8I,C.f8V,C.f8H,C.eym,C.eyb,C.eyl,C.ey7,C.eyn,C.eyp,C.ey8,C.ey9,C.eyK,C.eyJ,C.eyA,C.eyB,C.eyC,C.eyw,C.eyx,C.eyv,C.eyy,C.eyu,C.eyz,C.eyt,C.eyr,C.dru,C.bQx,C.bQz,C.bQk,C.bQm,C.bKh,C.bKi,C.bKg,C.bKj,C.bKl,C.bK6,C.bK7,C.bKb,C.bK8,C.bK9,C.bKa,C.bKC,C.bJH,C.bKs,C.bKt,C.bKq,C.bKr,C.bKn,C.bKo,C.bKp,C.bKy,C.bKm,C.bKz,C.bJI,C.bK4,C.bJP,C.bJO,C.bJQ,C.bJR,C.bJN,C.bJV,C.bJM,C.bJW,C.bJX,C.bJY,C.bJZ,C.bJL,C.bK_,C.bJK,C.bK0,C.bJJ,C.e1s,C.e1D,C.e1E,C.e1q,C.e1p,C.e1o,C.e1x,C.e1v,C.e1w,C.e1y,C.e1t,C.e1u,C.e1G,C.e1H,C.e1I,C.e1J,C.e1K,C.dYC,C.dYA,C.dYy,C.dYx,C.dYw,C.dYv,C.dYu,C.dYq,C.dYp,C.dYs,C.dYr,C.ftX,C.ftY,C.ftZ,C.fu_,C.fu0,C.fu1,C.fu2,C.fu3,C.cn7,C.cn6,C.eVg,C.eVc,C.eVb,C.eVe,C.eVd,C.e4r,C.e4s,C.e4m,C.e4o,C.e4p,C.e4n,C.e4q,C.dPV,C.dPS,C.dPR,C.dPT,C.dPQ,C.e0X,C.e0W,C.e0V,C.e0U,C.e10,C.e0T,C.e0S,C.e12,C.e0R,C.e13,C.e0Q,C.e14,C.e15,C.e0P,C.erW,C.erX,C.erV,C.erY,C.erU,C.es0,C.es2,C.erZ,C.es3,C.eCI,C.eCJ,C.eCG,C.eCH,C.eCF,C.eCK,C.eCL,C.eCM,C.eCN,C.eQO,C.eQQ,C.eQN,C.eQM,C.eQS,C.eQL,C.eqB,C.eqC,C.equ,C.eqt,C.eqv,C.eqs,C.eqw,C.eqr,C.eqx,C.eqq,C.eqp,C.eqo,C.eqn,C.cn3])
t(C.bAm,C.aOo)
t(C.aGo,C.bAm)
u(B.mo,[C.bjG,C.bdG,C.bv1,C.bck,C.btD,C.bt2,C.bd0,C.bt4,C.bx7,C.bjE,C.aka,C.bbv,C.byb,C.ag0,C.byn,C.bt3,C.bog])
t(C.aNs,C.aNr)
t(C.aER,C.aNs)
t(C.bA6,C.aNw)
t(C.aET,C.bA6)
u(B.lG,[C.Lm,C.a1H,C.Kl])
u(B.aw,[C.bu1,C.agj,C.afa,C.Rg,C.bux,C.a9E,C.bfO])
t(C.aJr,C.aPd)
t(C.bjD,B.pg)
t(C.aGn,C.aOm)
t(C.azI,C.azH)
t(C.ak9,C.azI)
t(C.aFl,C.bA9)
t(C.bbw,C.aLT)
t(C.bmc,C.aNH)
t(C.bAt,C.aOH)
t(C.aGR,C.bAt)
t(C.bAb,C.aNO)
t(C.bmn,C.bAb)
t(C.bA5,C.aNt)
t(C.blW,C.bA5)
t(C.bAk,C.aOg)
t(C.bmZ,C.bAk)
w(C.aOo,B.cd)
w(C.bAm,E.nJ)
w(C.aNr,B.cd)
w(C.aNs,E.nJ)
w(C.aNw,B.cd)
w(C.bA6,E.nJ)
w(C.aPd,B.eO)
w(C.aOm,B.cd)
w(C.azH,B.cd)
w(C.azI,E.nJ)
w(C.aLT,B.cd)
v(C.bA9,B.eD)
w(C.aNH,B.cd)
w(C.aNt,B.cd)
w(C.bA5,E.nJ)
w(C.aNO,B.cd)
w(C.bAb,E.nJ)
w(C.aOg,B.cd)
w(C.bAk,E.nJ)
w(C.aOH,B.cd)
w(C.bAt,E.nJ)})()
B.iW(b.typeUniverse,JSON.parse('{"WS":{"af":[],"v":[]},"bmN":{"ah":["WS"]},"Xe":{"af":[],"v":[]},"aGo":{"ah":["Xe"]},"bjG":{"aC":[]},"VI":{"af":[],"v":[]},"aER":{"ah":["VI"]},"VP":{"af":[],"v":[]},"aET":{"ah":["VP"]},"bdG":{"aC":[]},"agj":{"aw":[],"v":[]},"afa":{"aw":[],"v":[]},"aJq":{"af":[],"v":[]},"Ol":{"af":[],"v":[]},"aF9":{"ah":["Ol"]},"bu1":{"aw":[],"v":[]},"Rg":{"aw":[],"v":[]},"bv1":{"aC":[]},"bux":{"aw":[],"v":[]},"bck":{"aC":[]},"aJr":{"ah":["aJq"]},"btD":{"aC":[]},"bt2":{"aC":[]},"bd0":{"aC":[]},"bt4":{"aC":[]},"bx7":{"aC":[]},"Xd":{"af":[],"v":[]},"bjD":{"aC":[]},"aGn":{"ah":["Xd"]},"bjE":{"aC":[]},"aka":{"aC":[]},"ak8":{"af":[],"v":[]},"ak9":{"ah":["ak8"]},"Wq":{"af":[],"v":[]},"azm":{"af":[],"v":[]},"aFl":{"ah":["Wq"],"eD":[]},"bbw":{"ah":["azm"]},"bbv":{"aC":[]},"W9":{"af":[],"v":[]},"bmc":{"ah":["W9"]},"byb":{"aC":[]},"ag0":{"aC":[]},"a9E":{"aw":[],"v":[]},"XM":{"af":[],"v":[]},"Wy":{"af":[],"v":[]},"VJ":{"af":[],"v":[]},"Wp":{"af":[],"v":[]},"X8":{"af":[],"v":[]},"Xi":{"af":[],"v":[]},"XD":{"af":[],"v":[]},"X7":{"af":[],"v":[]},"aGR":{"ah":["XM"]},"byn":{"aC":[]},"bmn":{"ah":["Wy"]},"bt3":{"aC":[]},"blW":{"ah":["VJ"]},"bme":{"ah":["Wp"]},"bog":{"aC":[]},"aG9":{"ah":["X8"]},"aGu":{"ah":["Xi"]},"bnu":{"ah":["XD"]},"bmZ":{"ah":["X7"]},"bfO":{"aw":[],"v":[]}}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.at
return{c:w("lQ<u?>"),G:w("u"),J:w("bv<n,G>"),Q:w("db<n>"),Z:w("a_"),M:w("O<da>"),R:w("O<T4>"),h:w("O<a4y>"),V:w("O<ab>"),O:w("O<u>"),C:w("O<V>"),D:w("O<aB<aE>>"),w:w("O<a_>"),E:w("O<ai<n>>"),b:w("O<ai<G>>"),U:w("O<ai<H?>>"),x:w("O<a9<n,aE>>"),g:w("O<p>"),F:w("O<u1>"),v:w("O<fW>"),eZ:w("O<+(n,n)>"),fT:w("O<+(G,v)>"),I:w("O<+(H,n)>"),u:w("O<+(H,H)>"),r:w("O<+(n,n,a_)>"),e:w("O<+(n,G,G,H)>"),o:w("O<+(n,H,n,H)>"),d:w("O<+(n,n,G,G,a9<n,G>)>"),_:w("O<vs>"),fQ:w("O<abG>"),s:w("O<n>"),cF:w("O<au>"),X:w("O<Gj>"),p:w("O<v>"),bL:w("O<acN>"),fH:w("O<ln>"),a_:w("O<ad0>"),cB:w("O<nL>"),ba:w("O<adh>"),eW:w("O<D8>"),fY:w("O<a_G>"),ac:w("O<afd>"),cd:w("O<Dj>"),fr:w("O<ag7>"),e4:w("O<a1U>"),au:w("O<aKi>"),f7:w("O<Q>"),n:w("O<G>"),t:w("O<H>"),dS:w("O<aC?>"),fs:w("O<u1?>"),bN:w("O<H?>"),q:w("cw<ak9>"),A:w("cw<ah<af>>"),bF:w("ai<u>"),gl:w("ai<V>"),ew:w("ai<aE>"),j:w("ai<@>"),P:w("a9<n,@>"),f:w("a9<@,@>"),bd:w("N<eh,n>"),fR:w("N<+(G,v),v>"),l:w("iF"),gA:w("zX"),gD:w("ws"),k:w("cu"),K:w("aE"),Y:w("u1"),B:w("eh"),N:w("n"),bO:w("au"),a:w("bs<G>"),W:w("bo<n>"),bz:w("bo<H?>"),dg:w("eb<rc>"),m:w("bcC"),a2:w("D4"),f3:w("rc"),es:w("GK"),gV:w("mC"),y:w("Q"),i:w("G"),z:w("@"),S:w("H"),L:w("ai<@>?"),cK:w("aE?"),T:w("n?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b3n=new B.da(0,0.1)
D.b5h=new C.aUt(0,0,0)
D.M0=new C.aUt(0,0.5,0)
D.b5S=new B.ay(A.b4,1,A.r,-1)
D.b7r=new B.aY(16,1/0,16,1/0)
D.b7B=new B.aY(0,1/0,0,210)
D.bpf=new B.u(1,0.10588235294117647,0.12549019607843137,0.18823529411764706,A.q)
D.dxL=w([D.bpf,Al.ajl],x.O)
D.eCo=new B.bY(A.Fo,1.1,A.x,null,0,D.dxL,null,null)
D.b7J=new B.o(null,null,null,null,null,D.eCo,A.n)
D.b8F=new B.o(A.be,null,null,null,null,null,A.a6)
D.fsz=new B.F(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h5g=new B.B("\u26a1",null,D.fsz,null,null,null,null,null,null,null,null,null)
D.bdp=new B.cj(A.A,null,null,D.h5g,null)
D.aWL=new B.F(!0,A.bW,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVJ=new B.B("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aWL,null,A.K,null,null,null,null,null,null,null)
D.euz=new B.D(A.nN,D.fVJ,null)
D.bdz=new B.cj(A.A,null,null,D.euz,null)
D.fLu=new B.B("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aWL,null,A.K,null,null,null,null,null,null,null)
D.evq=new B.D(A.H4,D.fLu,null)
D.beh=new B.cj(A.A,null,null,D.evq,null)
D.ag7=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.bi4=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.bil=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bjB=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.bjI=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.bk4=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.bm_=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.bn0=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.bnK=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.ais=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.boK=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.aiR=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.ZJ=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.bqF=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.bqW=new B.u(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.q)
D.ajp=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.bsE=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.bsM=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.btf=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.wl=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.bvn=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.akT=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.bB9=new B.bd(11e6)
D.bCW=new B.R(10,34,10,26)
D.bD3=new B.R(10,6,10,2)
D.bD5=new B.R(10,8,0,10)
D.bDJ=new B.R(12,8,6,10)
D.bDM=new B.R(12,8,8,8)
D.bDT=new B.R(14,0,14,22)
D.bDV=new B.R(14,0,14,30)
D.bEZ=new B.R(16,4,16,28)
D.bFh=new B.R(18,10,18,16)
D.bHf=new B.R(26,12,26,58)
D.bI6=new B.R(4,4,8,2)
D.bIL=new B.R(8,14,8,12)
D.bIS=new B.R(8,40,8,30)
D.bIX=new B.R(8,6,8,8)
D.bJh=new B.R(0,0,1.5,0)
D.b53=new B.HZ(26,"saturation")
D.bJA=new B.uU(A.cB,D.b53,null,A.Yw)
D.bJB=new B.hp(A.G,11)
D.bJF=new B.hp(A.G,30)
D.fKw=new B.B("REACTION LAB",null,T.aXn,null,null,null,null,A.a2,null,1,null,null)
D.bJO=new B.bz(1,A.bb,D.fKw,null)
D.fOD=new B.B("\ud83d\udce2 NGMY Ads",null,A.rg,null,null,null,null,A.eS,null,1,null,null)
D.bKM=new B.bz(1,A.bb,D.fOD,null)
D.fJd=new B.B("Wire selected",null,A.h4,null,null,null,null,null,null,null,null,null)
D.bL_=new B.bz(1,A.bb,D.fJd,null)
D.apQ=new B.a_(62712,"MaterialIcons",!1)
D.bR9=new B.a_(62908,"MaterialIcons",!1)
D.bSS=new B.a_(983122,"MaterialIcons",!1)
D.bT4=new B.a_(983247,"MaterialIcons",!1)
D.bTB=new B.a_(983616,"MaterialIcons",!1)
D.bSR=new B.a_(983117,"MaterialIcons",!1)
D.bXj=new B.ae(D.bSR,28,A.c,null,null,null)
D.bXA=new B.ae(A.j9,18,null,null,null,null)
D.bZK=new B.ae(A.oI,null,A.ab,null,null,null)
D.bZU=new B.ae(A.a3Y,21,A.ab,null,null,null)
D.c_L=new B.ae(A.eM,17,A.ab,null,null,null)
D.c2B=new B.ae(A.j9,21,A.ab,null,null,null)
D.c37=new B.ae(A.ek,20,A.bZ,null,null,null)
D.c4d=new B.ae(A.ed,null,A.aQ,null,null,null)
D.dvo=w([A.db,A.d7,A.db],x.O)
D.c7B=new B.a8(A.a7,A.aa,A.x,D.dvo,null,null)
D.d6B=w([A.bP,A.bh],x.O)
D.c7J=new B.a8(A.b0,A.b7,A.x,D.d6B,null,null)
D.c7X=new B.a8(A.b0,A.b7,A.x,A.a6C,null,null)
D.atz=new B.a8(A.b0,A.b7,A.x,P.a5N,null,null)
D.d47=w([A.pf,A.iI],x.O)
D.c8L=new B.a8(A.b0,A.b7,A.x,D.d47,null,null)
D.d6k=w([A.cQ,A.as],x.O)
D.atG=new B.a8(A.b0,A.b7,A.x,D.d6k,null,null)
D.dp2=w([A.cW,A.iN,A.bh],x.O)
D.c92=new B.a8(A.a7,A.aa,A.x,D.dp2,null,null)
D.dp8=w([A.cA,A.cm],x.O)
D.c9n=new B.a8(A.b0,A.b7,A.x,D.dp8,null,null)
D.cD0=w([A.bP,A.cW],x.O)
D.c9x=new B.a8(A.a7,A.aa,A.x,D.cD0,null,null)
D.aDJ=w([A.cQ,M.nB],x.O)
D.c9F=new B.a8(A.b0,A.b7,A.x,D.aDJ,null,null)
D.c9W=new B.a8(A.b0,A.b7,A.x,S.au0,null,null)
D.caL=new B.a8(A.aA,A.aD,A.x,A.S0,null,null)
D.dgh=w([A.as,A.w],x.O)
D.caW=new B.a8(A.b0,A.b7,A.x,D.dgh,null,null)
D.caZ=new B.a8(A.b0,A.b7,A.x,H.aD_,null,null)
D.bta=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.bu1=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cQ0=w([A.Nt,D.bta,D.bu1],x.O)
D.cb8=new B.a8(A.b0,A.b7,A.x,D.cQ0,null,null)
D.cDj=w([A.d3,A.hf],x.O)
D.cbm=new B.a8(A.b0,A.b7,A.x,D.cDj,null,null)
D.bwK=new B.u(1,0.07058823529411765,0.0784313725490196,0.10196078431372549,A.q)
D.cE4=w([F.agf,D.bwK],x.O)
D.cbz=new B.a8(A.b0,A.b7,A.x,D.cE4,null,null)
D.cc9=w([0,4,7],x.t)
D.cca=w([0,4,7,12],x.t)
D.ccb=w([0,4,7,4],x.t)
D.aCG=w([A.h6,A.qq],x.O)
D.aCb=w([A.h0,A.cJ],x.O)
D.aAt=w([A.bc,A.dQ],x.O)
D.cYL=w([A.aQ,A.d3],x.O)
D.dqo=w([A.bT,A.kL],x.O)
D.azU=w([A.cI,A.ku],x.O)
D.d2V=w([A.bN,A.aM],x.O)
D.ccz=w([D.aCG,D.aCb,A.a5S,D.aAt,D.cYL,A.aAJ,A.aBF,D.dqo,D.azU,D.d2V],B.at("O<ai<u>>"))
D.chg=w([120,220,380],x.t)
D.cl0=w([12,16,19,24],x.t)
D.cla=w([1400,800,450,2400],x.t)
D.ctB=w([250,450,900,1500],x.t)
D.bhp=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.btA=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.brm=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.bxj=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.bqs=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.az9=w([D.bhp,D.btA,D.brm,D.bxj,D.bqs],x.O)
D.cKT=w([50,25,75],x.t)
D.cQz=w([0,5,10,15,18,20,25],x.t)
D.cZ3=w([900,500,250,1600],x.t)
D.d2c=w([A.bc,A.bE,A.b9,A.bc],x.O)
D.a5I=w([A.ay,A.bl,A.be,A.aG,A.nv],x.O)
D.d3L=w([A.as,A.ay,A.cI,A.bl,A.be,A.cD,A.ci,A.bE,A.YO],x.O)
D.a5L=w([0.04,0.17,0.3],x.n)
D.fbS=new C.vs("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.fbY=new C.vs("Medium engine","A good all-rounder.",0.3,0.9)
D.fbX=new C.vs("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Iz=w([D.fbS,D.fbY,D.fbX],x._)
D.eI9=new B.y(6,"Easy")
D.eIV=new B.y(8,"Medium")
D.eDT=new B.y(10,"Hard")
D.d5l=w([D.eI9,D.eIV,D.eDT],x.I)
D.aAS=w([0.55,0.78,1],x.n)
D.aB3=w([A.c,A.fA,A.nq,A.as],x.O)
D.aBb=w([A.be,A.ay,A.bl,A.d7],x.O)
D.fbP=new C.vs("Radar","Shows your height above the ground.",0.1,0)
D.fbQ=new C.vs("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.fbN=new C.vs("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aBi=w([D.fbP,D.fbQ,D.fbN],x._)
D.dbB=w([47,100,220,470,1000],x.n)
D.JG={volts:0}
D.a7C=new B.bv(D.JG,[3],x.J)
D.K6=new B.dY(["b","battery",0.2,0.3,D.a7C])
D.eon={on:0}
D.dGo=new B.bv(D.eon,[1],x.J)
D.EE=new B.dY(["s","switch",0.5,0.3,D.dGo])
D.f9w=new B.dY(["l","bulb",0.8,0.3,A.jv])
D.d6K=w([D.K6,D.EE,D.f9w],x.d)
D.EC=new B.ce(["b",0,"s",0])
D.f8w=new B.ce(["s",1,"l",0])
D.aSj=new B.ce(["l",1,"b",1])
D.dpe=w([D.EC,D.f8w,D.aSj],x.o)
D.d69=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.eD3=new C.mY("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.d6K,D.dpe,D.d69)
D.aM7={ohms:0}
D.aJI=new B.bv(D.aM7,[220],x.J)
D.f8Z=new B.dY(["r","resistor",0.5,0.3,D.aJI])
D.f9L=new B.dY(["d","led",0.8,0.3,A.jv])
D.dsv=w([D.K6,D.f8Z,D.f9L],x.d)
D.f7L=new B.ce(["b",0,"r",0])
D.f8q=new B.ce(["r",1,"d",0])
D.f7S=new B.ce(["d",1,"b",1])
D.dC3=w([D.f7L,D.f8q,D.f7S],x.o)
D.dsY=w(["led","diode","indicator"],x.s)
D.eDa=new C.mY("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dsv,D.dC3,D.dsY)
D.a8W={level:0}
D.dFL=new B.bv(D.a8W,[0.2],x.J)
D.f94=new B.dY(["p","pot",0.5,0.3,D.dFL])
D.f96=new B.dY(["m","motor",0.8,0.3,A.jv])
D.d73=w([D.K6,D.f94,D.f96],x.d)
D.f7K=new B.ce(["b",0,"p",0])
D.f8l=new B.ce(["p",1,"m",0])
D.f8h=new B.ce(["m",1,"b",1])
D.dxu=w([D.f7K,D.f8l,D.f8h],x.o)
D.doW=w(["fan","motor","spin","dimmer"],x.s)
D.eD1=new C.mY("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.d73,D.dxu,D.doW)
D.a7z=new B.bv(D.a8W,[0.9],x.J)
D.aSs=new B.dY(["s","solar",0.25,0.3,D.a7z])
D.aSr=new B.dY(["l","bulb",0.75,0.3,A.jv])
D.d9W=w([D.aSs,D.aSr],x.d)
D.f8t=new B.ce(["s",0,"l",0])
D.f8e=new B.ce(["l",1,"s",1])
D.d7T=w([D.f8t,D.f8e],x.o)
D.dye=w(["solar","sun","without battery","no battery","free"],x.s)
D.eD4=new C.mY("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.d9W,D.d7T,D.dye)
D.f9O=new B.dY(["c","crank",0.25,0.3,D.a7z])
D.dn6=w([D.f9O,D.aSr],x.d)
D.f7O=new B.ce(["c",0,"l",0])
D.f8d=new B.ce(["l",1,"c",1])
D.dnJ=w([D.f7O,D.f8d],x.o)
D.dng=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.eD0=new C.mY("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.dn6,D.dnJ,D.dng)
D.dFK=new B.bv(D.a8W,[0.7],x.J)
D.f99=new B.dY(["t","turbine",0.25,0.3,D.dFK])
D.f8X=new B.dY(["m","motor",0.75,0.3,A.jv])
D.dgZ=w([D.f99,D.f8X],x.d)
D.f8E=new B.ce(["t",0,"m",0])
D.f8i=new B.ce(["m",1,"t",1])
D.dfX=w([D.f8E,D.f8i],x.o)
D.dlN=w(["wind","turbine","windmill","water","hydro"],x.s)
D.eCY=new C.mY("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.dgZ,D.dfX,D.dlN)
D.aJF=new B.bv(D.JG,[9],x.J)
D.aa2=new B.dY(["b","battery",0.2,0.3,D.aJF])
D.aSp=new B.dY(["r","radio",0.8,0.3,A.jv])
D.dyP=w([D.aa2,D.EE,D.aSp],x.d)
D.f8y=new B.ce(["s",1,"r",0])
D.aSl=new B.ce(["r",1,"b",1])
D.cbQ=w([D.EC,D.f8y,D.aSl],x.o)
D.dxf=w(["radio","music","listen"],x.s)
D.eD9=new C.mY("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dyP,D.cbQ,D.dxf)
D.dGO=new B.bv(D.JG,[12],x.J)
D.aSo=new B.dY(["b","battery",0.2,0.3,D.dGO])
D.f9x=new B.dY(["t","tv",0.8,0.3,A.jv])
D.d6M=w([D.aSo,D.EE,D.f9x],x.d)
D.f8z=new B.ce(["s",1,"t",0])
D.aSm=new B.ce(["t",1,"b",1])
D.dqr=w([D.EC,D.f8z,D.aSm],x.o)
D.dyN=w(["tv","television","screen","watch"],x.s)
D.eCV=new C.mY("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.d6M,D.dqr,D.dyN)
D.f9n=new B.dY(["z","buzzer",0.8,0.3,A.jv])
D.cNe=w([D.K6,D.EE,D.f9n],x.d)
D.f8A=new B.ce(["s",1,"z",0])
D.f8S=new B.ce(["z",1,"b",1])
D.d1o=w([D.EC,D.f8A,D.f8S],x.o)
D.dvu=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.eD6=new C.mY("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cNe,D.d1o,D.dvu)
D.f95=new B.dY(["h","heater",0.8,0.3,A.jv])
D.dkq=w([D.aa2,D.EE,D.f95],x.d)
D.f8v=new B.ce(["s",1,"h",0])
D.f80=new B.ce(["h",1,"b",1])
D.d27=w([D.EC,D.f8v,D.f80],x.o)
D.cwS=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.eCW=new C.mY("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.dkq,D.d27,D.cwS)
D.f9z=new B.dY(["s","solar",0.2,0.25,D.a7z])
D.dGS=new B.bv(D.aM7,[100],x.J)
D.f9C=new B.dY(["r","resistor",0.55,0.25,D.dGS])
D.f9J=new B.dY(["c","capacitor",0.85,0.25,A.jv])
D.f91=new B.dY(["q","resistor",0.55,0.6,D.aJI])
D.f9A=new B.dY(["d","led",0.85,0.6,A.jv])
D.dpX=w([D.f9z,D.f9C,D.f9J,D.f91,D.f9A],x.d)
D.f8u=new B.ce(["s",0,"r",0])
D.f8p=new B.ce(["r",1,"c",0])
D.f7Q=new B.ce(["c",1,"s",1])
D.f7P=new B.ce(["c",0,"q",0])
D.f8o=new B.ce(["q",1,"d",0])
D.f7T=new B.ce(["d",1,"c",1])
D.ddK=w([D.f8u,D.f8p,D.f7Q,D.f7P,D.f8o,D.f7T],x.o)
D.dmo=w(["capacitor","store","charge","flash"],x.s)
D.eD8=new C.mY("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.dpX,D.ddK,D.dmo)
D.f9c=new B.dY(["b","battery",0.15,0.3,D.a7C])
D.f9P=new B.dY(["l1","bulb",0.5,0.3,A.jv])
D.f9k=new B.dY(["l2","bulb",0.85,0.3,A.jv])
D.d4L=w([D.f9c,D.f9P,D.f9k],x.d)
D.f7J=new B.ce(["b",0,"l1",0])
D.f8a=new B.ce(["l1",1,"l2",0])
D.f8b=new B.ce(["l2",1,"b",1])
D.dhN=w([D.f7J,D.f8a,D.f8b],x.o)
D.dyx=w(["series","two bulbs","dim"],x.s)
D.eCZ=new C.mY("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.d4L,D.dhN,D.dyx)
D.eoI={volts:0,charge:1}
D.dGV=new B.bv(D.eoI,[1.5,0],x.J)
D.f9H=new B.dY(["b","battery",0.75,0.3,D.dGV])
D.d48=w([D.aSs,D.f9H],x.d)
D.f8s=new B.ce(["s",0,"b",0])
D.f7N=new B.ce(["b",1,"s",1])
D.de4=w([D.f8s,D.f7N],x.o)
D.dmy=w(["charge","rechargeable","flat","recharge"],x.s)
D.eCX=new C.mY("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.d48,D.de4,D.dmy)
D.dGN=new B.bv(D.JG,[4.5],x.J)
D.f97=new B.dY(["b","battery",0.2,0.3,D.dGN])
D.aSn=new B.dY(["p","phone",0.8,0.3,A.jv])
D.dgO=w([D.f97,D.EE,D.aSn],x.d)
D.f8x=new B.ce(["s",1,"p",0])
D.aa1=new B.ce(["p",1,"b",1])
D.dul=w([D.EC,D.f8x,D.aa1],x.o)
D.dvW=w(["phone","charger","usb","mobile"],x.s)
D.eD2=new C.mY("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.dgO,D.dul,D.dvW)
D.f8U=new B.dY(["f","fan",0.8,0.3,A.jv])
D.cp_=w([D.K6,D.f8U],x.d)
D.f7I=new B.ce(["b",0,"f",0])
D.f7Z=new B.ce(["f",1,"b",1])
D.d2H=w([D.f7I,D.f7Z],x.o)
D.doV=w(["fan","cool","air","wind"],x.s)
D.eDb=new C.mY("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.cp_,D.d2H,D.doV)
D.f9r=new B.dY(["b","battery",0.15,0.2,D.a7C])
D.f8V=new B.dY(["a","ammeter",0.5,0.2,A.jv])
D.f8T=new B.dY(["l","bulb",0.85,0.2,A.jv])
D.f9t=new B.dY(["v","voltmeter",0.5,0.6,A.jv])
D.dmW=w([D.f9r,D.f8V,D.f8T,D.f9t],x.d)
D.f7G=new B.ce(["b",0,"a",0])
D.f7F=new B.ce(["a",1,"l",0])
D.f8G=new B.ce(["v",0,"l",0])
D.f8H=new B.ce(["v",1,"l",1])
D.ddW=w([D.f7G,D.f7F,D.aSj,D.f8G,D.f8H],x.o)
D.dC2=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.eD7=new C.mY("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.dmW,D.ddW,D.dC2)
D.f9S=new B.dY(["b","battery",0.15,0.2,D.aJF])
D.f9b=new B.dY(["t","tv",0.55,0.2,A.jv])
D.aJG=new B.bv(D.JG,[5],x.J)
D.f9_=new B.dY(["c","buck",0.4,0.5,D.aJG])
D.f9d=new B.dY(["p","phone",0.8,0.5,A.jv])
D.dbn=w([D.f9S,D.f9b,D.f9_,D.f9d],x.d)
D.f7M=new B.ce(["b",0,"t",0])
D.aSh=new B.ce(["b",0,"c",0])
D.aSi=new B.ce(["c",1,"p",0])
D.dgL=w([D.f7M,D.aSm,D.aSh,D.aSi,D.aa1],x.o)
D.d9u=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.eD_=new C.mY("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.dbn,D.dgL,D.d9u)
D.f90=new B.dY(["c","buck",0.5,0.3,D.aJG])
D.d1W=w([D.aSo,D.f90,D.aSn],x.d)
D.d7e=w([D.aSh,D.aSi,D.aa1],x.o)
D.cAn=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.eCU=new C.mY("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.d1W,D.d7e,D.cAn)
D.f9i=new B.dY(["d","diode",0.5,0.3,A.jv])
D.di0=w([D.aa2,D.f9i,D.aSp],x.d)
D.f7H=new B.ce(["b",0,"d",0])
D.f7U=new B.ce(["d",1,"r",0])
D.cPO=w([D.f7H,D.f7U,D.aSl],x.o)
D.d99=w(["diode","protect","backwards","one way"],x.s)
D.eD5=new C.mY("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.di0,D.cPO,D.d99)
D.Se=w([D.eD3,D.eDa,D.eD1,D.eD4,D.eD0,D.eCY,D.eD9,D.eCV,D.eD6,D.eCW,D.eD8,D.eCZ,D.eCX,D.eD2,D.eDb,D.eD7,D.eD_,D.eCU,D.eD5],B.at("O<mY>"))
D.hIj=new C.GZ("Moon",1.62,A.cW,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hIh=new C.GZ("Mars",3.71,A.ay,"Mars has about 38 percent of Earth's gravity.")
D.hIk=new C.GZ("Mercury",3.7,A.ks,"Mercury is small, so its gravity is like Mars.")
D.hIe=new C.GZ("Venus",8.87,A.aQ,"Venus is almost as heavy as Earth, with strong gravity.")
D.hIg=new C.GZ("Earth",9.81,A.aG,"On Earth gravity is strong, and the air also slows you down.")
D.hIi=new C.GZ("Neptune",11.15,A.d7,"Neptune pulls a little harder than Earth.")
D.hIf=new C.GZ("Jupiter",24.79,A.cI,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.tp=w([D.hIj,D.hIh,D.hIk,D.hIe,D.hIg,D.hIi,D.hIf],B.at("O<GZ>"))
D.ddI=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.det=w([0.2,0.5,0.8],x.n)
D.b24=new C.Lm(0,"accordion")
D.d32=w([A.jM,A.zy,A.CW],x.w)
D.daN=w(["Mail","SMS","Ad"],x.s)
D.d3D=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hGt=new C.Bc(D.b24,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aCG,D.d32,D.daN,D.d3D)
D.adM=new C.Lm(1,"flip")
D.dmi=w([A.qR,A.Dl,A.ti],x.w)
D.dgv=w(["Unlock","Verify","Secure"],x.s)
D.d1S=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hGs=new C.Bc(D.adM,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.aCb,D.dmi,D.dgv,D.d1S)
D.b25=new C.Lm(2,"towers")
D.dff=w([A.zw,A.qU,A.il],x.w)
D.deM=w(["Save","Grow","Earn"],x.s)
D.cQK=w(["","",""],x.s)
D.hGu=new C.Bc(D.b25,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a5S,D.dff,D.deM,D.cQK)
D.adN=new C.Lm(3,"assemble")
D.dnk=w([A.oM,A.hm,A.ed],x.w)
D.da7=w(["Launch","Charge","Shine"],x.s)
D.djq=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hGw=new C.Bc(D.adN,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.aAt,D.dnk,D.da7,D.djq)
D.b26=new C.Lm(4,"carousel")
D.dn7=w([A.b9,A.f0],x.O)
D.daW=w([A.n7,A.aqf,A.PZ],x.w)
D.d5b=w(["Explore","Discover","Learn"],x.s)
D.dgU=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hGr=new C.Bc(D.b26,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.dn7,D.daW,D.d5b,D.dgU)
D.b27=new C.Lm(5,"burst")
D.deH=w([A.he,A.rG],x.O)
D.d3x=w([A.k8,A.n5,A.hQ],x.w)
D.d3U=w(["Cheer","Win","Love"],x.s)
D.d6i=w(["Make some noise","First place","Share the joy"],x.s)
D.hGv=new C.Bc(D.b27,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.deH,D.d3x,D.d3U,D.d6i)
D.aBQ=w([D.hGt,D.hGs,D.hGu,D.hGw,D.hGr,D.hGv],B.at("O<Bc>"))
D.f4E=new B.b5("skin","Skin",A.aqg)
D.f6k=new B.b5("muscle","Muscles",A.Pz)
D.f5Y=new B.b5("organ","Organs",A.hQ)
D.bQS=new B.a_(62747,"MaterialIcons",!1)
D.f65=new B.b5("bone","Skeleton",D.bQS)
D.f6s=new B.b5("vessel","Blood vessels",A.pG)
D.dfl=w([D.f4E,D.f6k,D.f5Y,D.f65,D.f6s],x.r)
D.fbR=new C.vs("Simple legs","Light. Land gently.",0.15,0.2)
D.fbT=new C.vs("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.fbW=new C.vs("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.DF=w([D.fbR,D.fbT,D.fbW],x._)
D.f7i=new B.ce(["beat",0.18,0.28,0])
D.f8B=new B.ce(["burst",0.7,0.2,0])
D.f8M=new B.ce(["delay",0.45,0.5,1])
D.f8k=new B.ce(["ripple",0.75,0.6,3])
D.d9R=w([D.f7i,D.f8B,D.f8M,D.f8k],x.e)
D.dlB=w([O.lv,P.K5,F.UL],x.u)
D.hEU=new C.GK("First spark","A clock lights a burst and a ripple",D.d9R,D.dlB)
D.f7Y=new B.ce(["beat",0.15,0.3,1])
D.f6W=new B.ce(["ripple",0.62,0.15,0])
D.f8I=new B.ce(["delay",0.4,0.45,0])
D.f7B=new B.ce(["ripple",0.7,0.45,0])
D.f7d=new B.ce(["delay",0.4,0.7,1])
D.f8m=new B.ce(["shake",0.75,0.75,0])
D.dzJ=w([D.f7Y,D.f6W,D.f8I,D.f7B,D.f7d,D.f8m],x.e)
D.eF_=new B.y(2,4)
D.aRZ=new B.y(4,5)
D.ddx=w([O.lv,P.K5,F.UL,D.eF_,D.aRZ],x.u)
D.hEW=new C.GK("Heartbeat","Two thumps, then a shake",D.dzJ,D.ddx)
D.f7n=new B.ce(["dice",0.15,0.7,1])
D.f8O=new B.ce(["echo",0.4,0.7,0])
D.f7x=new B.ce(["comet",0.7,0.5,4])
D.f8C=new B.ce(["burst",0.72,0.2,1])
D.f7V=new B.ce(["burst",0.3,0.25,0])
D.f7o=new B.ce(["pop",0.55,0.85,0])
D.cwq=w([D.f7n,D.f8O,D.f7x,D.f8C,D.f7V,D.f7o],x.e)
D.eEk=new B.y(1,3)
D.eEl=new B.y(1,4)
D.aRV=new B.y(0,5)
D.dn2=w([O.lv,R.vE,D.eEk,D.eEl,D.aRV],x.u)
D.hEV=new C.GK("Fireworks","Dice launch comets that burst in colour",D.cwq,D.dn2)
D.f7u=new B.ce(["beat",0.15,0.2,2])
D.f87=new B.ce(["chance",0.4,0.2,0])
D.f7k=new B.ce(["ball",0.7,0.12,3])
D.f76=new B.ce(["chance",0.4,0.5,1])
D.f8N=new B.ce(["ball",0.3,0.08,1])
D.f7_=new B.ce(["ripple",0.7,0.55,3])
D.cps=w([D.f7u,D.f87,D.f7k,D.f76,D.f8N,D.f7_],x.e)
D.eF0=new B.y(2,5)
D.cMZ=w([O.lv,R.vE,P.a9U,F.UM,D.eF0],x.u)
D.hET=new C.GK("Rain","Balls fall at random and splash",D.cps,D.cMZ)
D.f88=new B.ce(["beat",0.12,0.45,2])
D.f8D=new B.ce(["toggle",0.38,0.2,0])
D.f8K=new B.ce(["wash",0.7,0.15,4])
D.f7m=new B.ce(["count3",0.38,0.45,0])
D.f8F=new B.ce(["burst",0.72,0.4,0])
D.f7W=new B.ce(["light",0.55,0.7,1])
D.f77=new B.ce(["pop",0.8,0.8,4])
D.dpV=w([D.f88,D.f8D,D.f8K,D.f7m,D.f8F,D.f7W,D.f77],x.e)
D.eFx=new B.y(3,6)
D.csB=w([O.lv,R.vE,P.a9U,F.UM,D.aRV,D.eFx],x.u)
D.hER=new C.GK("Disco","A beat drives lights, washes and bursts",D.dpV,D.csB)
D.f8R=new B.ce(["button",0.12,0.2,0])
D.f71=new B.ce(["delay",0.34,0.2,1])
D.f8Q=new B.ce(["light",0.56,0.2,1])
D.f8J=new B.ce(["delay",0.56,0.45,1])
D.f89=new B.ce(["ball",0.34,0.6,0])
D.f75=new B.ce(["delay",0.34,0.8,1])
D.f6V=new B.ce(["burst",0.7,0.8,5])
D.ccC=w([D.f8R,D.f71,D.f8Q,D.f8J,D.f89,D.f75,D.f6V],x.e)
D.eHJ=new B.y(5,6)
D.dvE=w([O.lv,R.vE,F.UL,F.UM,D.aRZ,D.eHJ],x.u)
D.hES=new C.GK("Domino","Tap the button and watch it run down the line",D.ccC,D.dvE)
D.aCf=w([D.hEU,D.hEW,D.hEV,D.hET,D.hER,D.hES],B.at("O<GK>"))
D.dkR=w([0.05,0.15,0.25],x.n)
D.dlM=w([1.5,3,4.5,9,12],x.n)
D.f2W=new B.b5("dice","Dice",A.oE)
D.f4b=new B.b5("coin","Coin",Q.zq)
D.f6n=new B.b5("num","Number",A.wW)
D.dm_=w([D.f2W,D.f4b,D.f6n],x.r)
D.dm3=w(["skin","muscle","organ","bone","vessel"],x.s)
D.aCl=w([A.bZ,A.aQ,A.b4,A.aG,A.bc,A.bT,A.cI,A.h0],x.O)
D.dn8=w([A.bT,A.aG,A.dC,A.b4],x.O)
D.dob=w([],x.h)
D.ewd=new C.eh("battery","Battery","\ud83d\udd0b",A.b4,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.ewj=new C.eh("solar","Solar panel","\u2600\ufe0f",A.bl,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.ewY=new C.eh("crank","Hand crank","\ud83d\udd04",A.cI,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.ewA=new C.eh("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aG,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.ew5=new C.eh("buck","Step-down converter","\ud83d\udd3d",A.h0,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.ewy=new C.eh("regulator","5 V regulator","\ud83e\uddca",A.bN,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.ex2=new C.eh("diode","Diode","\u27a1\ufe0f",A.aQ,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.ewK=new C.eh("ldr","Light sensor","\ud83c\udf1e",A.dC,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.ewo=new C.eh("switch","Switch","\ud83c\udf9a\ufe0f",A.bc,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.ex_=new C.eh("fuse","Fuse","\ud83e\uddef",A.bZ,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.evY=new C.eh("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.h0,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.ewL=new C.eh("resistor","Resistor","\u3030\ufe0f",A.aQ,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.ewN=new C.eh("bulb","Light bulb","\ud83d\udca1",A.dC,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.ewl=new C.eh("led","LED","\ud83d\udd34",A.ay,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.ewp=new C.eh("motor","Motor","\u2699\ufe0f",A.bN,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.ewH=new C.eh("buzzer","Buzzer","\ud83d\udd14",A.bT,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.ewe=new C.eh("heater","Heater","\ud83d\udd25",A.cI,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.ewC=new C.eh("capacitor","Capacitor","\ud83e\udeab",A.cn,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.ewu=new C.eh("radio","Radio","\ud83d\udcfb",A.nv,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.ewr=new C.eh("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b9,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.ew4=new C.eh("voltmeter","Voltmeter","\ud83e\udded",A.bw,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.ewb=new C.eh("ammeter","Ammeter","\ud83d\udcdf",A.aQ,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.ewh=new C.eh("fan","Fan","\ud83c\udf00",A.aG,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.ex4=new C.eh("speaker","Speaker","\ud83d\udd0a",A.bT,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.ewU=new C.eh("clock","Digital clock","\u23f0",A.b4,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.ewx=new C.eh("calculator","Calculator","\ud83e\uddee",A.Mt,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.ewa=new C.eh("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cn,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.ex3=new C.eh("router","WiFi router","\ud83d\udcf6",A.h0,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.ex6=new C.eh("siren","Siren","\ud83d\udea8",A.ay,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.ew0=new C.eh("toycar","Toy car","\ud83d\ude97",A.cI,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.ex7=new C.eh("kettle","Kettle","\ud83e\uded6",A.mU,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.ew8=new C.eh("lamp","Desk lamp","\ud83e\ude94",A.dC,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.ewk=new C.eh("lights","Party lights","\ud83c\udf84",A.nv,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.ewv=new C.eh("fridge","Fridge","\ud83e\uddca",A.hA,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.ew2=new C.eh("washer","Washing machine","\ud83e\udee7",A.cn,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.ewV=new C.eh("blender","Blender","\ud83e\udd64",A.bZ,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.ews=new C.eh("drone","Drone","\ud83d\ude81",A.bN,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.ew7=new C.eh("drill","Power drill","\ud83d\udd29",A.aQ,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.eww=new C.eh("torch","Torch","\ud83d\udd26",A.bL,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.ewS=new C.eh("neon","Neon sign","\ud83e\udea7",A.bT,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.ew3=new C.eh("microwave","Microwave","\ud83c\udf72",A.cI,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.ewM=new C.eh("doorbell","Doorbell","\ud83d\udd14",A.bl,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.ewg=new C.eh("camera","Security camera","\ud83d\udcf7",A.an,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.ewG=new C.eh("console","Game console","\ud83c\udfae",A.bc,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.ewX=new C.eh("heartmon","Heart monitor","\ud83e\ude7a",A.hv,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.ew1=new C.eh("aquarium","Aquarium","\ud83d\udc20",A.b9,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.ewB=new C.eh("lighthouse","Lighthouse","\ud83d\uddfc",A.dC,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.ewJ=new C.eh("discoball","Disco ball","\ud83e\udea9",A.nv,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.ex1=new C.eh("robot","Robot","\ud83e\udd16",A.aG,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.ew_=new C.eh("toaster","Toaster","\ud83c\udf5e",A.e_,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.ex5=new C.eh("ledstrip","LED strip","\ud83c\udf08",A.bT,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.ewR=new C.eh("pump","Water pump","\ud83d\udeb0",A.aG,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.ewD=new C.eh("hairdryer","Hair dryer","\ud83d\udca8",A.he,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.ewP=new C.eh("headphones","Headphones","\ud83c\udfa7",A.bc,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.ew9=new C.eh("smartwatch","Apple Watch Ultra","\u231a",A.bw,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.ex0=new C.eh("tablet","iPad Pro M5","\ud83d\udcf2",A.cn,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.evX=new C.eh("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hv,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.ewt=new C.eh("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bu,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.ewm=new C.eh("appletv","Apple TV 4K","\ud83d\udcfa",A.bP,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.ewI=new C.eh("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.uh,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.evZ=new C.eh("iphonefold","iPhone Fold","\ud83d\udcf1",A.b8,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.ewc=new C.eh("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d7,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.ewZ=new C.eh("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cD,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.ewE=new C.eh("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.be,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.ewz=new C.eh("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.c6,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.ewQ=new C.eh("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.ay,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.ewn=new C.eh("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.b4,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.ewF=new C.eh("honor","Honor Magic V5","\ud83d\udcf1",A.cn,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.ewO=new C.eh("vivo","vivo X300 Pro","\ud83d\udcf1",A.cI,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.ewT=new C.eh("ereader","Kindle Scribe","\ud83d\udcd6",A.bu,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.evW=new C.eh("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.ci,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.ewq=new C.eh("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cD,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.ewi=new C.eh("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b9,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.ew6=new C.eh("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dC,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.ewf=new C.eh("carscreen","Luxury car touchscreen","\ud83d\ude98",A.ay,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.ewW=new C.eh("vision","Apple Vision Pro","\ud83e\udd7d",A.bc,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.SC=w([D.ewd,D.ewj,D.ewY,D.ewA,D.ew5,D.ewy,D.ex2,D.ewK,D.ewo,D.ex_,D.evY,D.ewL,D.ewN,D.ewl,D.ewp,D.ewH,D.ewe,D.ewC,D.ewu,D.ewr,D.ew4,D.ewb,D.ewh,D.ex4,D.ewU,D.ewx,D.ewa,D.ex3,D.ex6,D.ew0,D.ex7,D.ew8,D.ewk,D.ewv,D.ew2,D.ewV,D.ews,D.ew7,D.eww,D.ewS,D.ew3,D.ewM,D.ewg,D.ewG,D.ewX,D.ew1,D.ewB,D.ewJ,D.ex1,D.ew_,D.ex5,D.ewR,D.ewD,D.ewP,D.ew9,D.ex0,D.evX,D.ewt,D.ewm,D.ewI,D.evZ,D.ewc,D.ewZ,D.ewE,D.ewz,D.ewQ,D.ewn,D.ewF,D.ewO,D.ewT,D.evW,D.ewq,D.ewi,D.ew6,D.ewf,D.ewW],B.at("O<eh>"))
D.doQ=w([5,10,15,25,45,60],x.t)
D.dpc=w([-0.045,0.03,-0.015],x.n)
D.aCO=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.vj=w([0.05,0.2,0.35],x.n)
D.b9Z=new B.ab(0,A.G,A.hJ,A.dN,6)
D.drW=w([D.b9Z],x.V)
D.eDv=new B.y(0,"AND")
D.eEm=new B.y(1,"Adder")
D.eF1=new B.y(2,"Blinker")
D.eFy=new B.y(3,"Memory")
D.dsI=w([D.eDv,D.eEm,D.eF1,D.eFy],x.I)
D.aD0=w([-104,0,104],x.n)
D.aD2=w([-14,3],x.n)
D.dtE=w([-8,0,8],x.n)
D.aDb=w([-92,0,92],x.n)
D.du3=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.fbO=new C.vs("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.fbV=new C.vs("Medium tank","Balanced.",0.35,1)
D.fbU=new C.vs("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.SR=w([D.fbO,D.fbV,D.fbU],x._)
D.nU=w([0.04,0.2,0.36],x.n)
D.aDn=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.f5X=new B.b5(D.b24,"Fold",Q.arc)
D.f4U=new B.b5(D.adM,"Flip",A.D2)
D.bR8=new B.a_(62889,"MaterialIcons",!1)
D.f6j=new B.b5(D.b25,"Rise",D.bR8)
D.arp=new B.a_(983870,"MaterialIcons",!1)
D.f2f=new B.b5(D.adN,"Assemble",D.arp)
D.f2t=new B.b5(D.b26,"Spin",D.apQ)
D.f2n=new B.b5(D.b27,"Pop",A.k8)
D.dvB=w([D.f5X,D.f4U,D.f6j,D.f2f,D.f2t,D.f2n],B.at("O<+(Lm,n,a_)>"))
D.aDs=w([A.bT,A.dC,A.bw,A.aG,A.bc,A.bZ],x.O)
D.dw1=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dx5=w([3,4.5,5,6,9],x.n)
D.baE=new B.ab(0,A.G,A.b6,A.J,16)
D.dxy=w([D.baE],x.V)
D.fTY=new B.B("\ud83e\uddcd",null,R.KV,null,null,null,null,null,null,null,null,null)
D.cbD=new B.IZ(5,null,null,A.by,A.bT,null,null,null,null)
D.fiQ=new B.a5(150,null,D.cbD,null)
D.fBb=new B.F(!0,A.ab,null,null,null,null,14,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXh=new B.B("Getting the body ready...",null,D.fBb,null,null,null,null,null,null,null,null,null)
D.fU0=new B.B("Real 3D anatomy, kept on your phone",null,A7.xu,null,null,null,null,null,null,null,null,null)
D.dxB=w([D.fTY,A.aC,D.fiQ,A.ae,D.fXh,A.aw,D.fU0],x.p)
D.dya=w(["solar","turbine","crank","pot"],x.s)
D.dyB=w([0,0.35,0.75,1],x.n)
D.dzY=w(["volts","level","ohms","on"],x.s)
D.dBr=w([A.jM,A.zy,A.CW,A.qR,A.Dl,A.ti,A.zw,A.qU,A.il,A.oM,A.hm,A.ed,A.hQ,A.i5,A.n5,A.lQ,A.v7,A.tl,A.lm,A.Hw,A.v6,A.D1,A.D_,A.a3M,A.Pq,A.Da,A.Pz,A.aqD,H.arl,A.k8],x.w)
D.em8={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.hxe=new C.yM("Switch",F.pC,A.bl,0,"Tap it to turn it ON or OFF.")
D.hxa=new C.yM("Blinker",A.oK,A.bw,0,"Turns itself ON and OFF. Tap to change the speed.")
D.hxb=new C.yM("AND",D.arp,A.cn,2,"ON only when BOTH inputs are ON.")
D.bSE=new B.a_(63671,"MaterialIcons",!1)
D.hx9=new C.yM("OR",D.bSE,A.bc,2,"ON when EITHER input is ON.")
D.hxc=new C.yM("XOR",A9.a38,A.bT,2,"ON when the inputs are DIFFERENT.")
D.hx6=new C.yM("NAND",A.uS,A.aG,2,"OFF only when BOTH inputs are ON.")
D.bRJ=new B.a_(63176,"MaterialIcons",!1)
D.hx7=new C.yM("NOR",D.bRJ,A.h0,2,"ON only when BOTH inputs are OFF.")
D.hx8=new C.yM("NOT",Y.Dd,A.cI,1,"Flips the signal: ON becomes OFF.")
D.hxd=new C.yM("Light",A.mj,A.dC,1,"Glows when its input is ON.")
D.hxf=new C.yM("Buzzer",A.oL,A.bZ,1,"Beeps while its input is ON.")
D.Ae=new B.bv(D.em8,[D.hxe,D.hxa,D.hxb,D.hx9,D.hxc,D.hx6,D.hx7,D.hx8,D.hxd,D.hxf],B.at("bv<n,yM>"))
D.d2q=w([A.A],x.M)
D.d2O=w([A.aA,A.aD],x.M)
D.dcy=w([A.aA,A.A,A.aD],x.M)
D.dea=w([A.aA,A.lz,A.A,A.lA,A.aD],x.M)
D.dsE=w([A.aA,A.lz,A.a7,A.aa,A.lA,A.aD],x.M)
D.dGd=new B.d_([1,D.d2q,2,D.d2O,3,D.dcy,4,A.aE2,5,D.dea,6,D.dsE],B.at("d_<H,ai<da>>"))
D.eoG={Calm:0,Box:1,Sleep:2}
D.cKl=w([4,2,6,0],x.n)
D.cKs=w([4,4,4,4],x.n)
D.cKt=w([4,7,8,0],x.n)
D.Tk=new B.bv(D.eoG,[D.cKl,D.cKs,D.cKt],B.at("bv<n,ai<G>>"))
D.eml={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.xT=new C.a1H(0,"source")
D.ddA=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hDx=new C.qw("Clock",A.oK,D.xT,A.bw,D.ddA)
D.hDt=new C.qw("Button",A.Dg,D.xT,A.aQ,A.Z)
D.dxh=w(["random","quick","slow"],x.s)
D.hDE=new C.qw("Dice",A.oE,D.xT,A.bT,D.dxh)
D.bSi=new B.a_(63484,"MaterialIcons",!1)
D.Fi=new C.a1H(1,"logic")
D.dCi=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hDA=new C.qw("Delay",D.bSi,D.Fi,A.cn,D.dCi)
D.doX=w(["fast","mid","slow"],x.s)
D.hDF=new C.qw("Echo",A.aqU,D.Fi,A.bc,D.doX)
D.hDC=new C.qw("Every 2nd",Y.Dd,D.Fi,A.h0,A.Z)
D.bRY=new B.a_(63309,"MaterialIcons",!1)
D.hDz=new C.qw("Every 3rd",D.bRY,D.Fi,A.aG,A.Z)
D.cbX=w(["50%","25%","75%"],x.s)
D.hDH=new C.qw("Chance",Ag.arr,D.Fi,A.cI,D.cbX)
D.ro=new C.a1H(2,"out")
D.hDv=new C.qw("Light",A.mj,D.ro,A.dC,A.Z)
D.hDw=new C.qw("Burst",A.k8,D.ro,A.bT,A.Z)
D.hDu=new C.qw("Ripple",A.zD,D.ro,A.b9,A.Z)
D.hDD=new C.qw("Ball",A.ar4,D.ro,A.cI,A.Z)
D.hDB=new C.qw("Comet",A.oM,D.ro,A.bc,A.Z)
D.bTI=new B.a_(983669,"MaterialIcons",!1)
D.hDG=new C.qw("Shake",D.bTI,D.ro,A.bZ,A.Z)
D.hDI=new C.qw("Pop",A.Hx,D.ro,A.b4,A.Z)
D.hDy=new C.qw("Wash",A.PD,D.ro,A.pk,A.Z)
D.nc=new B.bv(D.eml,[D.hDx,D.hDt,D.hDE,D.hDA,D.hDF,D.hDC,D.hDz,D.hDH,D.hDv,D.hDw,D.hDu,D.hDD,D.hDB,D.hDG,D.hDI,D.hDy],B.at("bv<n,qw>"))
D.emz={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.AG=new C.Kl(0,"tv")
D.fdn=new C.mx("Samsung Neo QLED 8K",D.AG,F.yk,A.aG)
D.fde=new C.mx("LG OLED evo G5",D.AG,A.er,A.hv)
D.fd5=new C.mx("Sony Bravia 9",D.AG,A.rA,A.bu)
D.fd9=new C.mx("Apple TV 4K",D.AG,A.e2,A.bP)
D.fd6=new C.mx("Bang and Olufsen Beovision",D.AG,F.FP,F.uh)
D.aad=new C.Kl(1,"iphone")
D.aSO=new C.mx("iPhone 18 Pro Max",D.aad,D.akT,A.ci)
D.EG=new C.Kl(3,"fold")
D.bx_=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.fdj=new C.mx("iPhone Fold",D.EG,D.bx_,A.b8)
D.AH=new C.Kl(2,"android")
D.fdk=new C.mx("Samsung Galaxy S26 Ultra",D.AH,F.YB,A.d7)
D.bpy=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.fdc=new C.mx("Samsung Galaxy Z Fold7",D.EG,D.bpy,A.cD)
D.fd8=new C.mx("Google Pixel 10 Pro XL",D.AH,A.cW,A.be)
D.fdg=new C.mx("Xiaomi 16 Ultra",D.AH,A.ii,A.c6)
D.fdb=new C.mx("Huawei Mate 80 Pro Max",D.AH,A.en,A.ay)
D.fd7=new C.mx("OPPO Find X9 Ultra",D.AH,A.ea,A.b4)
D.fdp=new C.mx("Honor Magic V5",D.EG,A.db,A.cn)
D.fdd=new C.mx("vivo X300 Pro",D.AH,A.fB,A.cI)
D.aSP=new C.Kl(4,"tablet")
D.fdi=new C.mx("iPad Pro M5",D.aSP,A.cW,A.aG)
D.aae=new C.Kl(5,"reader")
D.fdq=new C.mx("Kindle Scribe",D.aae,A.cQ,A.bu)
D.AI=new C.Kl(6,"computer")
D.fdh=new C.mx("MacBook Pro M5 Max",D.AI,A.cW,A.ci)
D.fdm=new C.mx("iMac 32 inch",D.AI,A.bP,A.cD)
D.fdf=new C.mx("Pro Display XDR 8K",D.AI,A.ii,A.b9)
D.fda=new C.mx("Sony Laser Projector",D.AI,A.cm,A.dC)
D.fdl=new C.mx("Luxury car touchscreen",D.AI,M.nB,A.ay)
D.fdo=new C.mx("Apple Vision Pro",D.AI,A.cA,A.bc)
D.mt=new B.bv(D.emz,[D.fdn,D.fde,D.fd5,D.fd9,D.fd6,D.aSO,D.fdj,D.fdk,D.fdc,D.fd8,D.fdg,D.fdb,D.fd7,D.fdp,D.fdd,D.fdi,D.fdq,D.fdh,D.fdm,D.fdf,D.fda,D.fdl,D.fdo],B.at("bv<n,mx>"))
D.emJ={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bzO=new C.fT(20,4,13,!1)
D.bAe=new C.fT(14,5,13.5,!1)
D.bA5=new C.fT(9,2.4,10,!1)
D.bAj=new C.fT(7,5,12.5,!1)
D.bA8=new C.fT(8,3.5,12,!1)
D.bzK=new C.fT(15,2,6,!1)
D.bAh=new C.fT(45,6,13.5,!0)
D.bA_=new C.fT(10,8,13.5,!1)
D.bzS=new C.fT(25,3,12,!0)
D.bzY=new C.fT(35,4,12,!0)
D.bzZ=new C.fT(40,4.5,9.5,!0)
D.bA0=new C.fT(55,3,9,!0)
D.bzL=new C.fT(18,3,9,!1)
D.bAg=new C.fT(22,4,13.5,!1)
D.bA9=new C.fT(16,5,13.5,!1)
D.bzW=new C.fT(30,4,9,!0)
D.bAs=new C.fT(5,3.5,13,!1)
D.bA3=new C.fT(25,3,13.5,!0)
D.bAc=new C.fT(14,2.5,9,!1)
D.bA2=new C.fT(6,6,13,!1)
D.bAk=new C.fT(30,1.2,5,!0)
D.bAr=new C.fT(35,3,4.5,!0)
D.bAn=new C.fT(20,4.5,7.5,!0)
D.bA1=new C.fT(55,5.5,13.5,!0)
D.bzJ=new C.fT(45,5.5,13.5,!0)
D.bAd=new C.fT(40,5.5,13.5,!0)
D.bAq=new C.fT(60,6,13.5,!0)
D.alm=new C.fT(28,4,7,!0)
D.GL=new C.fT(25,4,7,!0)
D.bzV=new C.fT(30,4,7,!0)
D.bzQ=new C.fT(22,4,7,!0)
D.bzR=new C.fT(24,4,7,!0)
D.bA4=new C.fT(60,3,5.5,!0)
D.bzM=new C.fT(18,9,14,!0)
D.bzT=new C.fT(25,9,14,!0)
D.aln=new C.fT(30,8,14,!0)
D.bzP=new C.fT(20,8,14,!0)
D.bzX=new C.fT(30,9,14,!0)
D.bAl=new C.fT(22,5,9.5,!0)
D.bzN=new C.fT(30,2.5,10.5,!0)
D.bAa=new C.fT(50,5.5,13.5,!0)
D.bAp=new C.fT(12,2,9.5,!1)
D.bA7=new C.fT(16,1.3,9.5,!0)
D.bAi=new C.fT(40,2.5,7,!0)
D.bAo=new C.fT(60,1.2,4.8,!0)
D.bAm=new C.fT(18,5,13.5,!0)
D.bAf=new C.fT(8,2,9.5,!1)
D.bA6=new C.fT(12,2.5,8,!1)
D.bzU=new C.fT(20,3.5,13.5,!0)
D.bAb=new C.fT(3.5,3,13,!1)
D.Af=new B.bv(D.emJ,[D.bzO,D.bAe,D.bA5,D.bAj,D.bA8,D.bzK,D.bAh,D.bA_,D.bzS,D.bzY,D.bzZ,D.bA0,D.bzL,D.bAg,D.bA9,D.bzW,D.bAs,D.bA3,D.bAc,D.bA2,D.bAk,D.bAr,D.bAn,D.bA1,D.bzJ,D.bAd,D.bAq,D.alm,D.GL,D.bzV,D.GL,D.bzQ,D.GL,D.bzR,D.alm,D.GL,D.bA4,D.bzM,D.bzT,D.aln,D.bzP,D.bzX,D.bAl,D.bzN,D.bAa,D.bAp,D.bA7,D.bAi,D.bAo,D.GL,D.aln,D.bAm,D.bAf,D.bA6,D.bzU,D.bAb],B.at("bv<n,fT>"))
D.emi={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.f1L=new B.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eHG=new B.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eHB=new B.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eU7=new B.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eV4=new B.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eU3=new B.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eFH=new B.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.eRZ=new B.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.f1T=new B.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eVq=new B.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eL4=new B.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eFl=new B.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eK3=new B.y("Movement","They pull your legs together and help you balance.")
D.eM1=new B.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eHP=new B.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.f_b=new B.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.f0l=new B.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.eRH=new B.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.f04=new B.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eQh=new B.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eVz=new B.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eFs=new B.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eMo=new B.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eVd=new B.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.eQD=new B.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.f0c=new B.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eTy=new B.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eFF=new B.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eW9=new B.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eZP=new B.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eXW=new B.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eDH=new B.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eTg=new B.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eTk=new B.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.eN8=new B.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eI2=new B.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.eLQ=new B.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.eS9=new B.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eYL=new B.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.f1Q=new B.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eVw=new B.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.eDp=new B.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.eSl=new B.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.eEf=new B.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eZ0=new B.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.f_7=new B.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.eSN=new B.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eZf=new B.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eFu=new B.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.f_J=new B.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eJp=new B.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eYo=new B.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eMN=new B.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eQx=new B.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eVQ=new B.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.f_T=new B.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.f_L=new B.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.f_P=new B.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.eR4=new B.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eWI=new B.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eXT=new B.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.f_v=new B.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.eSM=new B.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.eOR=new B.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eNz=new B.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eTb=new B.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eVJ=new B.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.ePn=new B.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eQ4=new B.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eJO=new B.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.f_3=new B.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eKE=new B.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.eEc=new B.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.eN7=new B.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.eE7=new B.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eIu=new B.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.eNc=new B.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eKO=new B.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eW5=new B.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eM4=new B.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.f1x=new B.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eNJ=new B.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.eQY=new B.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eTG=new B.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eKX=new B.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eKG=new B.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dHk=new B.bv(D.emi,[D.f1L,D.eHG,D.eHB,D.eU7,D.eV4,D.eU3,D.eFH,D.eRZ,D.f1T,D.eVq,D.eL4,D.eFl,D.eK3,D.eM1,D.eHP,D.f_b,D.f0l,D.eRH,D.f04,D.eQh,D.eVz,D.eFs,D.eMo,D.eVd,D.eQD,D.f0c,D.eTy,D.eFF,D.eW9,D.eZP,D.eXW,D.eDH,D.eTg,D.eTk,D.eN8,D.eI2,D.eLQ,D.eS9,D.eYL,D.f1Q,D.eVw,D.eDp,D.eSl,D.eEf,D.eZ0,D.f_7,D.eSN,D.eZf,D.eFu,D.f_J,D.eJp,D.eYo,D.eMN,D.eQx,D.eVQ,D.f_T,D.f_L,D.f_P,D.eR4,D.eWI,D.eXT,D.f_v,D.eSM,D.eOR,D.eNz,D.eTb,D.eVJ,D.ePn,D.eQ4,D.eJO,D.f_3,D.eKE,D.eEc,D.eN7,D.eE7,D.eIu,D.eNc,D.eKO,D.eW5,D.eM4,D.f1x,D.eNJ,D.eQY,D.eTG,D.eKX,D.eKG],B.at("bv<n,+(n,n)>"))
D.dPl=new C.VI(null)
D.dPy=new C.VJ(null)
D.dRC=new C.VP(null)
D.dSq=new C.Wp(null)
D.dSu=new C.Wq(null)
D.dT2=new C.Wy(null)
D.dWS=new C.X7(null)
D.dXy=new C.X8(null)
D.e0L=new C.Xd(null)
D.egE=new C.Xe(null)
D.egH=new C.Xi(null)
D.eiR=new C.XD(null)
D.eiS=new C.a9E(null)
D.ekV=new C.XM(null)
D.eoT=new B.p(0,118)
D.aMd=new B.p(0,13)
D.eoU=new B.p(0,17)
D.eoX=new B.p(0,330)
D.ep2=new B.p(0,-13)
D.ep3=new B.p(0,-17)
D.ep4=new B.p(0,-18)
D.ep5=new B.p(0,-19)
D.ep7=new B.p(0,-28)
D.ep9=new B.p(0,-31)
D.epa=new B.p(0,-32)
D.epg=new B.p(-9.5,-11)
D.epj=new B.p(10,20)
D.epm=new B.p(10,-13)
D.epo=new B.p(10,-22)
D.epp=new B.p(10,-4)
D.ept=new B.p(11,0)
D.a91=new B.p(11,8)
D.epz=new B.p(12,2)
D.epA=new B.p(14,0)
D.epB=new B.p(14,12)
D.aMp=new B.p(14,8)
D.epC=new B.p(14,-17)
D.aMr=new B.p(14,-3)
D.aMs=new B.p(14,-4)
D.epF=new B.p(15,0)
D.epG=new B.p(15,-12)
D.epJ=new B.p(16,-8)
D.epK=new B.p(18,14)
D.epL=new B.p(18,-12)
D.aMy=new B.p(20,0)
D.epT=new B.p(20,15)
D.epU=new B.p(20,-17)
D.epV=new B.p(20,-3)
D.epW=new B.p(21,8)
D.eq_=new B.p(22,10)
D.aMA=new B.p(22,8)
D.eq0=new B.p(24,0)
D.eq1=new B.p(24,2)
D.eq4=new B.p(24,-18)
D.eq5=new B.p(24,-22)
D.eq9=new B.p(25,8)
D.eqa=new B.p(26,0)
D.eqe=new B.p(28,-30)
D.eql=new B.p(30,18)
D.eqm=new B.p(30,2)
D.eqp=new B.p(31,19)
D.eqr=new B.p(32,0)
D.aME=new B.p(34,0)
D.aMF=new B.p(34,-32)
D.JK=new B.p(36,0)
D.eqE=new B.p(3,-1)
D.eqH=new B.p(40,3)
D.eqV=new B.p(4,11)
D.eqY=new B.p(4,-2)
D.er2=new B.p(5,17)
D.er3=new B.p(5,6)
D.er8=new B.p(6,11)
D.erf=new B.p(8,7)
D.erg=new B.p(8,-10)
D.erh=new B.p(8,-14)
D.aMK=new B.p(9,0)
D.err=new B.p(-20.5,-17.6)
D.ers=new B.p(-9,18.5)
D.erv=new B.p(-2.6,-1)
D.erE=new B.p(2.6,1)
D.erM=new B.p(-9,12.2)
D.es5=new B.p(-9,20.5)
D.esq=new B.p(-10,0)
D.esr=new B.p(-10,12)
D.aMR=new B.p(-10,4)
D.esv=new B.p(-11,0)
D.esy=new B.p(-11,-2)
D.esC=new B.p(-13,-5)
D.esD=new B.p(-14,0)
D.esE=new B.p(-14,13)
D.esF=new B.p(-14,2)
D.esG=new B.p(-14,-12)
D.esH=new B.p(-14,-19)
D.esJ=new B.p(-14,-23)
D.esK=new B.p(-15,6)
D.esN=new B.p(-16,14)
D.esP=new B.p(-16,-8)
D.esQ=new B.p(-17,10)
D.esR=new B.p(-17,-18)
D.esS=new B.p(-17,-8)
D.esU=new B.p(-18,20)
D.esV=new B.p(-18,-9)
D.aMT=new B.p(-20,0)
D.esX=new B.p(-20,16)
D.esY=new B.p(-20,-9)
D.Uf=new B.p(-22,8)
D.esZ=new B.p(-22,-10)
D.et_=new B.p(-22,-11)
D.et0=new B.p(-24,10)
D.et1=new B.p(-24,11)
D.et2=new B.p(-24,14)
D.et3=new B.p(-24,-22)
D.et5=new B.p(-25,-11)
D.et6=new B.p(-26,0)
D.et7=new B.p(-26,-18)
D.et8=new B.p(-2,9)
D.et9=new B.p(-2,-10)
D.eta=new B.p(-2,-20)
D.etd=new B.p(-2,-9)
D.etf=new B.p(-32,0)
D.aMV=new B.p(-34,0)
D.etk=new B.p(-40,3)
D.etm=new B.p(-4,11)
D.etn=new B.p(-4,-17)
D.eto=new B.p(-4,-2)
D.ets=new B.p(-5,0)
D.ett=new B.p(-5,20)
D.etu=new B.p(-5,6)
D.etv=new B.p(-6,26)
D.etw=new B.p(-6,6)
D.etx=new B.p(-6,-42)
D.etz=new B.p(-7,-19)
D.etA=new B.p(-7,-24)
D.etD=new B.p(-8,-9)
D.a9a=new B.p(-9,0)
D.etE=new B.p(-9,1)
D.etG=new B.p(-9,-23)
D.fLb=new B.B("Thinking\u2026",null,A.ht,null,null,null,null,null,null,null,null,null)
D.euG=new B.D(A.jJ,D.fLb,null)
D.h12=new B.B("Start from a ready-made board",null,A.fH,null,null,null,null,null,null,null,null,null)
D.euT=new B.D(A1.wz,D.h12,null)
D.bHT=new B.R(4,0,4,14)
D.fGm=new B.F(!0,A.aF,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMb=new B.B("Games and little helpers for a spare minute.",null,D.fGm,null,null,null,null,null,null,null,null,null)
D.ev4=new B.D(D.bHT,D.fMb,null)
D.dpx=w([A.i0,A.bh],x.O)
D.aRN=new B.bY(A.A,0.5,A.x,null,0,D.dpx,null,null)
D.eCg=new B.bY(A.A,0.5,A.x,null,0,D.aDJ,null,null)
D.dg2=w([A.c,A.bN],x.O)
D.eCi=new B.bY(A.A,0.5,A.x,null,0,D.dg2,null,null)
D.dyo=w([A.bP,A.cA],x.O)
D.aRO=new B.bY(A.A,0.5,A.x,null,0,D.dyo,null,null)
D.cUo=w([A.c,A.bP],x.O)
D.eCn=new B.bY(A.pb,0.5,A.x,null,0,D.cUo,null,null)
D.bx3=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.dwk=w([A.fq,D.bx3],x.O)
D.eCs=new B.bY(A.pb,0.5,A.x,null,0,D.dwk,null,null)
D.cNw=w([A.cW,A.cm],x.O)
D.eCt=new B.bY(A.A,0.5,A.x,null,0,D.cNw,null,null)
D.d1m=w([A.fA,A.aQ,A.d3],x.O)
D.eCw=new B.bY(A.pb,0.5,A.x,null,0,D.d1m,null,null)
D.dqc=w([A.cA,M.nB],x.O)
D.eCx=new B.bY(A.pb,0.5,A.x,null,0,D.dqc,null,null)
D.eCB=new B.bY(A.A,0.5,A.x,null,0,D.azU,null,null)
D.dzg=w([A.cA,A.ic],x.O)
D.eCI=new B.bY(A.A,0.5,A.x,null,0,D.dzg,null,null)
D.aRT=new B.aO(9,9)
D.eCQ=new B.aO(1.4,1.4)
D.f9W=new B.a1(10,-8,18,-2)
D.f9X=new B.a1(14,-14,20,14)
D.f9Z=new B.a1(20,-2,30,2)
D.fa3=new B.a1(4,-13,30,-3)
D.fa9=new B.a1(8,-7,12,7)
D.fal=new B.a1(-12,12,12,19)
D.fam=new B.a1(-12,14,12,22)
D.fan=new B.a1(-12,-22,12,8)
D.fao=new B.a1(-12,-25,12,19)
D.fap=new B.a1(-12,-26,12,-6)
D.faq=new B.a1(-12,-4,12,14)
D.fas=new B.a1(-14,20,14,24)
D.fat=new B.a1(-14,6,14,10)
D.fau=new B.a1(-14,-17,14,15)
D.fav=new B.a1(-14,-26,14,18)
D.faw=new B.a1(-14,-4,14,20)
D.fay=new B.a1(-15,-29,15,25)
D.faz=new B.a1(-16,-16,16,16)
D.faC=new B.a1(-16,-22,-9,18)
D.faD=new B.a1(-16,-24,16,-10)
D.faF=new B.a1(-16,-2,16,20)
D.faH=new B.a1(-18,20,18,24)
D.faI=new B.a1(-18,-18,18,20)
D.faJ=new B.a1(-20,12,20,22)
D.faK=new B.a1(-20,-28,20,26)
D.faL=new B.a1(-22,14,22,18)
D.aSv=new B.a1(-22,-26,22,24)
D.faM=new B.a1(-22,-3,22,3)
D.faN=new B.a1(-22,-4,22,12)
D.faP=new B.a1(-24,-12,10,22)
D.faQ=new B.a1(-24,-14,22,8)
D.faR=new B.a1(-24,-6,24,20)
D.aSw=new B.a1(-24,-9,24,9)
D.faS=new B.a1(-25,14,25,19)
D.faT=new B.a1(-26,-14,14,8)
D.faU=new B.a1(-26,-4,26,20)
D.faV=new B.a1(-26,-6,4,6)
D.aSx=new B.a1(-28,-13,28,13)
D.faW=new B.a1(-28,-16,28,16)
D.faX=new B.a1(-28,-16,28,8)
D.faY=new B.a1(-28,-22,28,22)
D.faZ=new B.a1(-30,-12,30,14)
D.fb_=new B.a1(-30,-14,0,14)
D.fb0=new B.a1(-30,-18,30,20)
D.fb1=new B.a1(-30,-28,30,14)
D.fb2=new B.a1(-30,-2,30,18)
D.fb3=new B.a1(-30,-4,30,18)
D.fb4=new B.a1(-32,-17,32,17)
D.fb5=new B.a1(-32,-28,32,18)
D.fb6=new B.a1(-33,-21,33,17)
D.fb7=new B.a1(-34,14,34,26)
D.aa4=new B.a1(-34,-18,34,18)
D.fb8=new B.a1(-34,-4,34,7)
D.fb9=new B.a1(-36,-24,36,20)
D.fba=new B.a1(-38,-22,38,22)
D.fbc=new B.a1(-3,12,3,22)
D.fbd=new B.a1(-3,5,3,15)
D.fbh=new B.a1(-46,-34,46,28)
D.fbj=new B.a1(-48,-3,48,3)
D.fbm=new B.a1(-6,18,24,24)
D.fbn=new B.a1(-6,5,6,12)
D.fbo=new B.a1(-6,-22,6,-15)
D.fbs=new B.a1(-9,-16,9,22)
D.fbt=new B.a1(-4.5,-24,4.5,-21.2)
D.fbv=new B.a1(14,-9,17.5,9)
D.eo3={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aTD=new B.db(D.eo3,5,x.Q)
D.eny={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.ff5=new B.db(D.eny,10,x.Q)
D.fhq=new B.av(24,44)
D.fhO=new B.av(54,38)
D.fhU=new B.av(66,38)
D.bfh=new B.fl(2,null,null,null,null,A.bc,null,null,null,null)
D.fiY=new B.a5(16,16,D.bfh,null)
D.aUG=new B.hJ(3,12,12,0.82,null)
D.fvR=new B.F(!0,A.wc,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqj=new B.eq("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cN,null,null,null,null,null,null,D.fvR)
D.fB_=new B.F(!0,A.kM,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqp=new B.eq("AI",null,null,A.cN,null,null,null,null,null,null,D.fB_)
D.fqH=new B.F(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frd=new B.F(!0,A.bq,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frD=new B.F(!0,A.cn,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsa=new B.F(!0,A.bW,null,null,null,null,11,A.U,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsv=new B.F(!0,A.c,null,null,null,null,13.5,A.I,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft0=new B.F(!0,A.aR,null,null,null,null,12,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffP=new B.cU(A.hJ,A.dN,6)
D.dj8=w([D.ffP],B.at("O<cU>"))
D.ftZ=new B.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.dj8,null,null,null)
D.fu3=new B.F(!0,A.et,null,null,null,null,12.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu8=new B.F(!0,A.bW,null,null,null,null,10.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuK=new B.F(!0,A.bW,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuS=new B.F(!0,A.aF,null,null,null,null,null,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvO=new B.F(!0,A.bW,null,null,null,null,9.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvV=new B.F(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fws=new B.F(!0,A.aF,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwZ=new B.F(!0,A.aQ,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx1=new B.F(!0,A.c,null,null,null,null,10.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.aE5,null,null,null)
D.fx7=new B.F(!0,A.c,null,null,null,null,12.5,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxQ=new B.F(!0,A.bB,null,null,null,null,10.5,A.u,null,0.5,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyY=new B.F(!0,A.uu,null,null,null,null,12.5,A.U,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzz=new B.F(!0,A.bL,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzI=new B.F(!0,A.aF,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAv=new B.F(!0,A.mX,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAG=new B.F(!0,A.cA,null,null,null,null,9.5,null,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWR=new B.F(!0,A.c,null,null,null,null,9.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBS=new B.F(!0,A.hf,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCb=new B.F(!0,A.bW,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCJ=new B.F(!0,A.b4,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEf=new B.F(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEL=new B.F(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF1=new B.F(!0,A.aQ,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFp=new B.F(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFs=new B.F(!0,A.aQ,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGB=new B.F(!0,A.uu,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGY=new B.F(!0,A.b4,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fub=new B.F(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHm=new B.B("\u26a0\ufe0f ",null,D.fub,null,null,null,null,null,null,null,null,null)
D.fHz=new B.B("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.B0,null,null,null,null,null,null,null,null,null)
D.fJc=new B.B("Pick one, then change it and see what happens.",null,A.B0,null,null,null,null,null,null,null,null,null)
D.fvl=new B.F(!0,A.ab,null,null,null,null,null,A.U,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKb=new B.B("What do you want to invent? Type it below, or tap an idea.",null,D.fvl,null,null,null,null,null,null,null,null,null)
D.fzu=new B.F(!0,A.bZ,null,null,null,null,12.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKG=new B.B("Burnt out! Press Repair.",null,D.fzu,null,null,null,null,null,null,null,null,null)
D.fLN=new B.B("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fMp=new B.B("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.h4,null,null,null,null,null,null,null,null,null)
D.fN2=new B.B("Make it yours",null,A.jR,null,null,null,null,null,null,null,null,null)
D.fQf=new B.B("5G",null,X.aWa,null,null,null,null,null,null,null,null,null)
D.fRf=new B.B("Pick how big the screen is on the board",null,A.ht,null,null,null,null,null,null,null,null,null)
D.fCt=new B.F(!0,A.bW,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRr=new B.B("WHAT HAPPENS",null,D.fCt,null,null,null,null,null,null,null,null,null)
D.fTc=new B.B("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fTS=new B.B("Change the words and pictures on the three slabs.",null,A.B0,null,null,null,null,null,null,null,null,null)
D.fU4=new B.B("All the parts and wires will be removed.",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fUp=new B.B("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fUZ=new B.B("Tap the crank on the board again and again to spin it faster.",null,A.ht,null,null,null,null,null,null,null,null,null)
D.fWd=new B.B("\ud83c\udfaf Challenges",null,A.dq,null,null,null,null,null,null,null,null,null)
D.fWK=new B.B("Remove this part",null,W.aVM,null,null,null,null,null,null,null,null,null)
D.fX3=new B.B("Clear the board?",null,A.dk,null,null,null,null,null,null,null,null,null)
D.fBT=new B.F(!0,A.bw,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXl=new B.B("How the Lab works",null,D.fBT,null,null,null,null,null,null,null,null,null)
D.fsI=new B.F(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXG=new B.B("Electronics Lab",null,D.fsI,null,null,null,null,A.a2,null,1,null,null)
D.fXK=new B.B("?",null,P.aXm,null,null,null,null,null,null,null,null,null)
D.fZ4=new B.B("Ready-made circuits",null,A.dq,null,null,null,null,null,null,null,null,null)
D.fZI=new B.B("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.ht,null,null,null,null,null,null,null,null,null)
D.fF6=new B.F(!0,A.aQ,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2b=new B.B("\u26a0 There is no air here, so a parachute will not work.",null,D.fF6,null,null,null,null,null,null,null,null,null)
D.h3m=new B.B("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,W.aVK,null,null,null,null,null,null,null,null,null)
D.h3S=new B.B("NGMY",null,A.vM,null,null,null,null,null,null,null,null,null)
D.h44=new B.B("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.W0,null,null,null,null,null,null,null,null,null)
D.h4t=new B.B("Tap it to change its setting. Drag from the right dot to connect.",null,A.lX,null,null,null,null,null,null,null,null,null)
D.h5x=new B.B("TOOLBOX",null,A6.abr,null,null,null,null,null,null,null,null,null)
D.htZ=new B.bo("electronics-part-card",x.W)
D.huy=new B.bo("electronics-part-about",x.W)
D.huF=new B.bo("body-loading",x.W)
D.hv1=new B.bo("core-protocol-back",x.W)
D.hv6=new B.bo("core-protocol-title-frame",x.W)})();(function staticFields(){$.hvJ=null
$.hvF=null
$.hvG=null
$.hBZ=0
$.i4p=B.T(x.N,B.at("iL"))
$.i4Y=B.T(x.N,B.at("iL"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iD8","bHc",()=>{var v="led"
return B.a([C.aAg("Both together","Make the light glow only when BOTH switches are ON.",2,new C.ftg(),v),C.aAg("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fth(),v),C.aAg("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fti(),v),C.aAg("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.ftp(),v),C.aAg("Not both","Make the light go OFF only when both switches are ON.",2,new C.ftq(),v),C.aAg("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.ftr(),"buzzer")],B.at("O<bdn>"))})
w($,"iDA","bHd",()=>B.a([C.Rn("UNIVERSE","Earth, space and gravity",A.PZ,A.aG,new C.ftH()),C.Rn("ELECTRONICS LAB","Batteries, wires, real circuits",Ae.zk,A.aG,new C.ftI()),C.Rn("DISCOVERY LAB","Body Explorer: a real 3D human",D.bR9,A.b4,new C.ftJ()),C.Rn("TOOLBOX","Converter, clock, games",H.aq2,A.cI,new C.ftK()),C.Rn("REACTION LAB","Wire parts together",A.Dk,A.bw,new C.ftL()),C.Rn("SPARK PAINTER","Paint with light",A.Hv,A.bT,new C.ftM()),C.Rn("ROCKET LANDER","Land softly on the pad",A.oM,A.aG,new C.ftN()),C.Rn("TITLE ANIMATOR","Make a moving title",A.wX,A.bl,new C.ftO()),C.Rn("CIRCUIT LAB","Connect logic, learn it",A.a3u,A.cn,new C.ftP())],B.at("O<bvE>")))
w($,"iFi","qH",()=>{var v,u,t=B.T(x.N,x.B)
for(v=0;v<76;++v){u=D.SC[v]
t.n(0,u.a,u)}return t})
w($,"iD9","ajg",()=>B.a([C.Gu("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fts()),C.Gu("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.ftt()),C.Gu("Spin the motor","A battery and a motor in a loop will make it spin.",new C.ftu()),C.Gu("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.ftv()),C.Gu("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.ftw()),C.Gu("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.ftj()),C.Gu("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.ftk()),C.Gu("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.ftl()),C.Gu("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.ftm()),C.Gu("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.ftn()),C.Gu("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fto())],B.at("O<bdo>")))
w($,"iDC","hLj",()=>B.a([C.a2d("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aQ,A.c6,new C.ftX()),C.a2d("Focus Timer","Work, then rest","\u23f1\ufe0f",A.bZ,A.bD,new C.ftY()),C.a2d("Breathe","Calm down in a minute","\ud83e\udee7",A.h0,A.cD,new C.ftZ()),C.a2d("Draw Pad","Sketch and share","\ud83c\udfa8",A.bE,A.b8,new C.fu_()),C.a2d("Memory Match","Find the pairs","\ud83c\udccf",A.aG,A.ci,new C.fu0()),C.a2d("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bl,A.be,new C.fu1()),C.a2d("Tip & Split","Share the bill","\ud83e\uddfe",A.b4,A.b3,new C.fu2()),C.a2d("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bc,A.aB,new C.fu3())],B.at("O<bwY>")))})()};
(a=>{a["UWR2zzohN6Aqw8y2uwFJK8nv2S0="]=a.current})($__dart_deferred_initializers__);