((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,W,A9,A5,N,Aa,A6,Ab,A7,X,P,Y,Ac,O,Ad,Ae,Af,Ag,Ah,Ai,Z,Aj,Ak,Al,Am,A_,U,An,Q,Ao,A0,R,S,A1,T,A2,Ap,E,I,G,L,Aq,Ar,A8,C={
bF5(d){return C.inz(d)},
inz(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bF5=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.qX(B.nl(""),d,A.i7,null,null).d9(0,At.a1O),$async$bF5)
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
return B.i($async$bF5,v)},
iA7(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.TI[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cX(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ag(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.f6(D.TI,new C.fWt())
if(w==null)w=A.d.gH(D.TI)
s=B.S(x.N,x.C)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.I)(r),++u){l=r[u].a
k=l[0]
l=$.r_().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.I)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gH(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.amL(w.a,w.b,m,w,s,!1)},
itA(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.O(D.U8,new C.fKw(),x.bd).aJ(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
iIF(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.c9(b2,"{")
v=A.a.ou(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.T.aN(0,A.a.av(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aR(a5)
r=0
for(a6=x.j,a7=J.aN(a6.a(J.t(u,"parts"))),a8=x.i;a7.B();){q=a7.gP(a7)
p=B.v(J.t(q,"kind"))
o=B.v(J.t(q,"id"))
if(!$.r_().am(0,p)||J.eH(s,o)||J.aa(t)>=8)continue
J.bW(s,o)
n=B.S(a5,a8)
for(a9=0;a9<4;++a9){m=D.dJe[a9]
l=J.t(q,m)
if(typeof l=="number")J.aL(n,m,l)}k=A.h.D(typeof J.t(q,"x")=="number"?B.dA(J.t(q,"x")):0.2+A.h.F(r,3)*0.3,0.16,0.84)
j=A.h.D(typeof J.t(q,"y")=="number"?B.dA(J.t(q,"y")):0.25+A.h.ao(r,3)*0.3,0.1,0.9)
J.bW(t,new B.e1([o,p,k,j,n]));++r}if(J.aa(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aN(a6.a(J.t(u,"wires")));a5.B();){h=a5.gP(a5)
g=a6.a(h)
if(J.aa(g)<4)continue
f=B.v(J.t(g,0))
e=B.v(J.t(g,2))
d=A.n.D(A.h.M(B.dA(J.t(g,1))),0,1)
a0=A.n.D(A.h.M(B.dA(J.t(g,3))),0,1)
if(J.eH(s,f)&&J.eH(s,e)&&!J.z(f,e))J.bW(i,new B.b7([f,d,e,a0]))}if(J.aa(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.R.a(J.t(u,"steps"))
a0=J.aN(a0==null?A.bM:a0)
while(a0.B()){a2=a0.gP(a0)
J.bW(a1,B.v(a2))}a3=a1
a0=J.t(u,"title")
a0=B.v(a0==null?"My invention":a0)
a1=J.t(u,"explain")
a4=new C.nj(a0,B.v(a1==null?"":a1),t,i,A.M)
a0=a4.a
a1=a4.b
d=J.aa(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.t(u,"honest")
a5=B.v(a5==null?"":a5)
return new C.amL(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
iyB(d){var w,v,u=C.hzW()
d.C(u)
for(w=0;w<60;++w)u.w8(0,0.03333333333333333)
v=u.a
return A.d.aR(v,new C.fSt(u))&&!A.d.cD(v,new C.fSu())},
iyA(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.S(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.I)(l),++u){t=l[u];++v
k.n(0,t.a,$.r_().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.I)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.v(t.e)+" V")
if(p==="resistor")q.push(""+A.h.S(t.r)+" ohms")
if(A.d.q(D.dHg,p))q.push("level "+A.h.S(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.h.S(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aJ(q,", ")+")"
s.push(B.v(p)+n+": "+o+", current "+A.h.a1(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.I)(w),++u){m=w[u]
l.push(B.v(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.v(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aJ(s,"\n")+"\nWires: "+A.d.aJ(l,"; ")},
ilZ(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.I)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aJ(v,"\n")+"\n\n"}v=A.d.aJ(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
iA6(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.r_().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.U8[u]
if(A.d.aR(w,new C.fWq(s)))if(!B.cX(r,s.b.toLowerCase(),0))v=B.cX(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ag("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.X(w,new C.fWr(e),B.T(w).k("X<1>")).gar(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ag("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.h.a1(A.d.cH(w,0,new C.fWs())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ag("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gH(w)
w=$.r_().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
amL:function amL(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fWt:function fWt(){},
fKw:function fKw(){},
fSt:function fSt(d){this.a=d},
fSu:function fSu(){},
fWq:function fWq(d){this.a=d},
fWr:function fWr(d){this.a=d},
fWs:function fWs(){},
XG:function XG(d,e){this.c=d
this.a=e},
bpj:function bpj(d,e,f,g,h){var _=this
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
eqU:function eqU(d){this.a=d},
eqV:function eqV(d,e,f){this.a=d
this.b=e
this.c=f},
eqW:function eqW(d){this.a=d},
er6:function er6(d){this.a=d},
er7:function er7(d,e){this.a=d
this.b=e},
er2:function er2(d){this.a=d},
er0:function er0(d,e){this.a=d
this.b=e},
er1:function er1(d,e,f){this.a=d
this.b=e
this.c=f},
er3:function er3(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eqZ:function eqZ(d){this.a=d},
er_:function er_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
er4:function er4(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eqY:function eqY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
er5:function er5(d,e){this.a=d
this.b=e},
eqX:function eqX(d,e){this.a=d
this.b=e},
era:function era(d){this.a=d},
er9:function er9(d){this.a=d},
erb:function erb(d){this.a=d},
er8:function er8(d){this.a=d},
erc:function erc(d,e){this.a=d
this.b=e},
erd:function erd(d,e){this.a=d
this.b=e},
ere:function ere(d,e){this.a=d
this.b=e},
erf:function erf(d,e){this.a=d
this.b=e},
bFs(d,e,f){var w=null
return B.w(B.a([B.c(d,w,w,w,w,w,w,D.fO3,w,w,w),B.c(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p)},
hOl(d,e,f,g){var w=null,v=B.n(24),u=B.K(f.j(0.6),A.r,1)
return B.at(B.q(w,B.w(B.a([B.c(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.aj,B.c(e,w,w,w,w,w,w,A.BK,A.K,w,w),A.az,B.bY(A.fX,g,A.bq,w,0,8)],x.p),A.l,w,A.e,A.P,0,A.p),A.f,w,w,new B.p(D.blH,w,u,v,w,w,A.m),w,w,w,w,A.ad,w,w,w),w,w,w)},
Hq:function Hq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vS:function vS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Y3:function Y3(d){this.a=d},
aI7:function aI7(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.hg$=h
_.mk$=i
_.fi$=j
_.hh$=k
_.bw$=l
_.ab$=m
_.c=_.a=null},
eGr:function eGr(){},
eGL:function eGL(d){this.a=d},
eGK:function eGK(d,e){this.a=d
this.b=e},
eGM:function eGM(){},
eGN:function eGN(){},
eGt:function eGt(d,e,f){this.a=d
this.b=e
this.c=f},
eGs:function eGs(d,e){this.a=d
this.b=e},
eGi:function eGi(d){this.a=d},
eGj:function eGj(d){this.a=d},
eGk:function eGk(d){this.a=d},
eGl:function eGl(d){this.a=d},
eGm:function eGm(d){this.a=d},
eGn:function eGn(d){this.a=d},
eGo:function eGo(d){this.a=d},
eGp:function eGp(d){this.a=d},
eGq:function eGq(d){this.a=d},
eGg:function eGg(d){this.a=d},
eGh:function eGh(d){this.a=d},
eGf:function eGf(d){this.a=d},
eGE:function eGE(d,e){this.a=d
this.b=e},
eGz:function eGz(d){this.a=d},
eGA:function eGA(d){this.a=d},
eGw:function eGw(d){this.a=d},
eGB:function eGB(d){this.a=d},
eGv:function eGv(d){this.a=d},
eGC:function eGC(d){this.a=d},
eGD:function eGD(d){this.a=d},
eGu:function eGu(d){this.a=d},
eGF:function eGF(d,e){this.a=d
this.b=e},
eGy:function eGy(d,e){this.a=d
this.b=e},
eGG:function eGG(d){this.a=d},
eGH:function eGH(d){this.a=d},
eGI:function eGI(d){this.a=d},
eGJ:function eGJ(d){this.a=d},
eGx:function eGx(d){this.a=d},
bma:function bma(d,e){this.b=d
this.a=e},
aQg:function aQg(){},
bD3:function bD3(){},
hJ1(){var w=$.hJ_
return w==null?$.hJ_=$.oi().d0C("assets/data/three.min.js"):w},
hJ0(){var w=$.hIZ
return w==null?$.hIZ=C.cTk():w},
cTk(){var w=0,v=B.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cTk=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.oi().ih(0,"assets/data/body3d.bin"),$async$cTk)
case 3:d=a1
$.hJ2=J.eC(A.dM.gaS(d),d.byteOffset,d.byteLength)
t=B.U4(d)
s=t.getUint32(4,!0)
r=B.a([],x.h)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.k1(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.du3[i]
g=B.b_((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a5F(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b8x))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.bf0(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cTk,v)},
ca4(){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$ca4=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.hc(B.a([C.hJ0(),C.hJ1()],x.D),x.K),$async$ca4)
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
return B.i($async$ca4,v)},
aWD:function aWD(d,e,f){this.a=d
this.b=e
this.c=f},
a5F:function a5F(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
bf0:function bf0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Wt:function Wt(d){this.a=d},
aGx:function aGx(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.hg$=s
_.mk$=t
_.fi$=u
_.hh$=v
_.bw$=w
_.ab$=a0
_.c=_.a=null},
dVw:function dVw(d){this.a=d},
dVv:function dVv(d,e){this.a=d
this.b=e},
dV6:function dV6(d){this.a=d},
dV7:function dV7(d,e){this.a=d
this.b=e},
dV8:function dV8(d){this.a=d},
dV9:function dV9(){},
dVx:function dVx(){},
dVa:function dVa(d,e){this.a=d
this.b=e},
dVb:function dVb(d){this.a=d},
dVc:function dVc(){},
dVd:function dVd(d){this.a=d},
dVf:function dVf(d,e){this.a=d
this.b=e},
dVe:function dVe(d){this.a=d},
dV3:function dV3(d,e,f){this.a=d
this.b=e
this.c=f},
dV4:function dV4(d){this.a=d},
dV5:function dV5(d){this.a=d},
dVm:function dVm(d){this.a=d},
dVn:function dVn(d,e){this.a=d
this.b=e},
dVo:function dVo(d,e){this.a=d
this.b=e},
dVp:function dVp(d){this.a=d},
dVl:function dVl(d,e){this.a=d
this.b=e},
dVq:function dVq(d,e){this.a=d
this.b=e},
dVk:function dVk(d,e){this.a=d
this.b=e},
dVr:function dVr(d){this.a=d},
dVj:function dVj(d){this.a=d},
dVs:function dVs(d){this.a=d},
dVi:function dVi(d){this.a=d},
dVt:function dVt(d){this.a=d},
dVh:function dVh(d){this.a=d},
dVu:function dVu(d){this.a=d},
dVg:function dVg(d){this.a=d},
aPk:function aPk(){},
aPl:function aPl(){},
ca5:function ca5(d){var _=this
_.a=d
_.d=_.c=_.b=null},
ca6:function ca6(d,e){this.a=d
this.b=e},
ca7:function ca7(d){this.a=d},
aBN(d,e,f,g,h){return new C.bfP(d,e,f,g,h)},
hpE(d,e,f,g,h,i){return $.ij9.c0(0,d+"|"+B.v(e)+"|"+f.m()+"|"+B.v(g),new C.d_v(d,e,f,i,g,h))},
z5:function z5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Dt:function Dt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
o7:function o7(d,e,f){this.a=d
this.b=e
this.c=f},
bfP:function bfP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fDw:function fDw(){},
fDx:function fDx(){},
fDy:function fDy(){},
fDF:function fDF(){},
fDG:function fDG(){},
fDH:function fDH(){},
WA:function WA(d){this.a=d},
aGz:function aGz(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.hg$=m
_.mk$=n
_.fi$=o
_.hh$=p
_.bw$=q
_.ab$=r
_.c=_.a=null},
dXc:function dXc(d){this.a=d},
dWR:function dWR(d,e){this.a=d
this.b=e},
dWU:function dWU(){},
dXd:function dXd(){},
dWP:function dWP(d,e){this.a=d
this.b=e},
dWQ:function dWQ(d,e){this.a=d
this.b=e},
dWV:function dWV(d,e,f){this.a=d
this.b=e
this.c=f},
dWK:function dWK(){},
dWL:function dWL(){},
dWM:function dWM(d){this.a=d},
dWN:function dWN(d,e){this.a=d
this.b=e},
dWO:function dWO(d,e,f){this.a=d
this.b=e
this.c=f},
dWW:function dWW(){},
dWX:function dWX(d,e){this.a=d
this.b=e},
dWY:function dWY(d){this.a=d},
dWT:function dWT(d,e){this.a=d
this.b=e},
dWS:function dWS(d){this.a=d},
dWJ:function dWJ(d,e,f){this.a=d
this.b=e
this.c=f},
dX6:function dX6(d){this.a=d},
dX5:function dX5(d){this.a=d},
dX7:function dX7(d){this.a=d},
dX4:function dX4(d){this.a=d},
dX2:function dX2(d){this.a=d},
dX3:function dX3(d){this.a=d},
dX1:function dX1(d){this.a=d},
dWZ:function dWZ(d){this.a=d},
dX0:function dX0(d){this.a=d},
dX8:function dX8(d,e){this.a=d
this.b=e},
dX9:function dX9(d,e){this.a=d
this.b=e},
dXa:function dXa(d){this.a=d},
dX_:function dX_(d){this.a=d},
dXb:function dXb(d,e){this.a=d
this.b=e},
bg6:function bg6(d,e){this.b=d
this.a=e},
d_v:function d_v(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aPp:function aPp(){},
bCN:function bCN(){},
i9F(){return new C.OV(null)},
S4(d,e,f,g,h){return new C.byk(d,e,f,g,h)},
bwF(d,e,f){return A.h.D((d-e)/(f-e),0,1)},
hqb(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
iC9(){return B.iM("construction","")},
OV:function OV(d){this.a=d},
LL:function LL(d,e){this.a=d
this.b=e},
Bu:function Bu(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aGQ:function aGQ(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
e2m:function e2m(d,e){this.a=d
this.b=e},
e2l:function e2l(d){this.a=d},
e2o:function e2o(d,e){this.a=d
this.b=e},
e2n:function e2n(d){this.a=d},
byk:function byk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fDX:function fDX(){},
fDY:function fDY(){},
fDZ:function fDZ(){},
fE_:function fE_(){},
fE0:function fE0(){},
fE1:function fE1(){},
fE2:function fE2(){},
fE3:function fE3(){},
fE4:function fE4(){},
bwG:function bwG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fj7:function fj7(d){this.a=d},
fj6:function fj6(d,e){this.a=d
this.b=e},
fj4:function fj4(d){this.a=d},
fj8:function fj8(d){this.a=d},
fj5:function fj5(d,e){this.a=d
this.b=e},
ahw:function ahw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
agj:function agj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
RY:function RY(d,e,f,g,h,i,j,k,l,m){var _=this
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
bxI:function bxI(d,e){this.b=d
this.a=e},
bxd:function bxd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beJ:function beJ(d,e){this.b=d
this.a=e},
aLg:function aLg(d,e){this.c=d
this.a=e},
aLh:function aLh(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.ch=-1
_.dt$=e
_.bd$=f
_.c=_.a=null},
fiO:function fiO(d){this.a=d},
fiN:function fiN(d){this.a=d},
fiD:function fiD(d){this.a=d},
fiE:function fiE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fiF:function fiF(d){this.a=d},
fiC:function fiC(d,e){this.a=d
this.b=e},
fiG:function fiG(d){this.a=d},
fiM:function fiM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fiL:function fiL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fiJ:function fiJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fiI:function fiI(d,e,f){this.a=d
this.b=e
this.c=f},
fiK:function fiK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fiH:function fiH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fiW:function fiW(d){this.a=d},
fiV:function fiV(d){this.a=d},
fiX:function fiX(d,e){this.a=d
this.b=e},
fiY:function fiY(d,e){this.a=d
this.b=e},
fiZ:function fiZ(d,e){this.a=d
this.b=e},
fiU:function fiU(d,e,f){this.a=d
this.b=e
this.c=f},
fj_:function fj_(d,e,f){this.a=d
this.b=e
this.c=f},
fiT:function fiT(d){this.a=d},
fiP:function fiP(d){this.a=d},
fj0:function fj0(d){this.a=d},
fj1:function fj1(d){this.a=d},
fiS:function fiS(d,e){this.a=d
this.b=e},
fj2:function fj2(d,e){this.a=d
this.b=e},
fiR:function fiR(d,e){this.a=d
this.b=e},
fj3:function fj3(d,e){this.a=d
this.b=e},
fiQ:function fiQ(d,e){this.a=d
this.b=e},
fiA:function fiA(){},
fiB:function fiB(){},
bwh:function bwh(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bvG:function bvG(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bfp:function bfp(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bvI:function bvI(d,e,f){this.b=d
this.c=e
this.a=f},
bzO:function bzO(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aR6:function aR6(){},
hQ3(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a6(0,new B.m(w,0)),u=e.aI(0,new B.m(w,0)),t=1-f,s=3*t
return d.aM(0,t*t*t).a6(0,v.aM(0,s*t*f)).a6(0,u.aM(0,s*f*f)).a6(0,e.aM(0,f*f*f))},
bm9(d,e,f,g,h,i){return $.ijJ.c0(0,d+"|"+B.v(e)+"|"+f.m()+"|"+B.v(g),new C.dwB(d,e,f,i,g,h))},
a2H:function a2H(d,e){this.a=d
this.b=e},
qP:function qP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
rA:function rA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Dx:function Dx(d,e){this.a=d
this.b=e},
a0D:function a0D(d,e){this.a=d
this.b=e},
ahj:function ahj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2U:function a2U(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
DI:function DI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ae7:function ae7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aep:function aep(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
agn:function agn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bm7:function bm7(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.W$=0
_.V$=t
_.c5$=_.bU$=0},
dwF:function dwF(d){this.a=d},
dwG:function dwG(d){this.a=d},
dwC:function dwC(d,e){this.a=d
this.b=e},
dwD:function dwD(d){this.a=d},
dwE:function dwE(d){this.a=d},
dwH:function dwH(d){this.a=d},
dwI:function dwI(d){this.a=d},
dwJ:function dwJ(d){this.a=d},
dwK:function dwK(d){this.a=d},
dwL:function dwL(d){this.a=d},
dwM:function dwM(d){this.a=d},
dwN:function dwN(d){this.a=d},
dwO:function dwO(d){this.a=d},
dwP:function dwP(d){this.a=d},
Hb:function Hb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Y2:function Y2(d){this.a=d},
aI6:function aI6(d,e,f,g,h,i,j){var _=this
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
_.ab$=j
_.c=_.a=null},
eFM:function eFM(d){this.a=d},
eFB:function eFB(d){this.a=d},
eFD:function eFD(){},
eFE:function eFE(){},
eFH:function eFH(){},
eFI:function eFI(d,e,f){this.a=d
this.b=e
this.c=f},
eFJ:function eFJ(d){this.a=d},
eFK:function eFK(d){this.a=d},
eFF:function eFF(){},
eFG:function eFG(d){this.a=d},
eGb:function eGb(d){this.a=d},
eFL:function eFL(){},
eFx:function eFx(d){this.a=d},
eFO:function eFO(d){this.a=d},
eFN:function eFN(d){this.a=d},
eFQ:function eFQ(){},
eFP:function eFP(d,e){this.a=d
this.b=e},
eFA:function eFA(){},
eFy:function eFy(d){this.a=d},
eFz:function eFz(d){this.a=d},
eG9:function eG9(d){this.a=d},
eG8:function eG8(d){this.a=d},
eGa:function eGa(d){this.a=d},
eG_:function eG_(d,e){this.a=d
this.b=e},
eG7:function eG7(d){this.a=d},
eG5:function eG5(d){this.a=d},
eG6:function eG6(d){this.a=d},
eG4:function eG4(d){this.a=d},
eG3:function eG3(d){this.a=d},
eG0:function eG0(d){this.a=d},
eG1:function eG1(d){this.a=d},
eG2:function eG2(d){this.a=d},
eFC:function eFC(){},
eFW:function eFW(d){this.a=d},
eFX:function eFX(d){this.a=d},
eFV:function eFV(d){this.a=d},
eFY:function eFY(d){this.a=d},
eFU:function eFU(d){this.a=d},
eFZ:function eFZ(d){this.a=d},
eFT:function eFT(d){this.a=d},
eFS:function eFS(d){this.a=d},
eFR:function eFR(d,e){this.a=d
this.b=e},
bm8:function bm8(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dwB:function dwB(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aQe:function aQe(){},
hW2(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aI(0,e).gcF()*0.1
return new B.m((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
hzW(){var w=B.a([],x.bz),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a6N(w,v,u,A.cW,B.S(x.N,x.y))},
i3e(d,e,f){var w=d.c,v=e===0?-1:1
return new B.m(w*f.a+v*C.hzX(d),d.d*f.b)},
hzX(d){return 42+(D.mN.am(0,d.b)?(d.ch-1)*38:0)},
inT(d){var w,v,u,t,s
if(d.A(0,$.hLP))return $.hZa()
w=B.a([],x.n)
for(v=d.a,u=d.b,t=12;t<v;t+=24)for(s=12;s<u;s+=24){w.push(t)
w.push(s)}$.hLP=d
return $.inU=new Float32Array(B.cd(w))},
es:function es(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
uk:function uk(d,e,f,g){var _=this
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
acL:function acL(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
adU:function adU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a6N:function a6N(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bTk:function bTk(){},
bTv:function bTv(d){this.a=d},
bTq:function bTq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTw:function bTw(d){this.a=d},
bTx:function bTx(d){this.a=d},
bTz:function bTz(d){this.a=d},
bTA:function bTA(d){this.a=d},
bTy:function bTy(d){this.a=d},
bTB:function bTB(d,e,f){this.a=d
this.b=e
this.c=f},
bTC:function bTC(d){this.a=d},
bTm:function bTm(d){this.a=d},
bTn:function bTn(d){this.a=d},
bTl:function bTl(d){this.a=d},
bTo:function bTo(d,e,f){this.a=d
this.b=e
this.c=f},
bTp:function bTp(d){this.a=d},
bTj:function bTj(d){this.a=d},
bTD:function bTD(d,e){this.a=d
this.b=e},
bTr:function bTr(d,e){this.a=d
this.b=e},
bTu:function bTu(d){this.a=d},
bTt:function bTt(d){this.a=d},
bTs:function bTs(d){this.a=d},
alw:function alw(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bNF:function bNF(){},
bNG:function bNG(){},
bNE:function bNE(){},
nj:function nj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cxK:function cxK(d){this.a=d},
iIA(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new C.h8P(),c9=new C.h8R(),d0=new C.h8S(),d1=new C.h8Q(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aq(w,d1.$3(new B.a5(w.a,w.b,w.c,w.d),A.cm,A.bQ))
d3.ah(D.eHS,D.eEO,c9.$2(A.e_,1.4))
d3.ah(D.eEt,D.eEr,c9.$2(A.bz,2.4))
d3.ah(D.eEu,U.aOZ,c9.$2(A.bz,2.4))
if(c7){d2=c8.$1(A.fC.j(0.5))
d2.y=A.I7
d3.O(D.eE9,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.h.F(d2+v/3,1)
d6.$5(d3,"\u2744",new B.m(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aq(d0.$4(-22,-26,44,50),d1.$3(D.aVe,A.aS,A.cF))
d3.O(A.cO,16,c8.$1(A.bz))
d3.O(A.cO,13,c8.$1(c7?A.aH.j(0.85):A.a_))
if(c7){d2=d3.c
J.bs(d2.save())
d2.translate(0,4)
d3.jz(0,d4.y*0.6)
for(v=0;v<3;++v){t=v*2.09
d3.ah(A.J,new B.m(Math.cos(t)*11,Math.sin(t)*11),c9.$2(A.ac,3))}d2.restore()
for(d2=d5*0.8,v=0;v<4;++v){u=A.h.F(d2+v*0.25,1)
d3.O(new B.m(Math.sin(v*2+d5)*9,4-u*12),1.6+u*2,c8.$1(A.c.j(0.8*(1-u))))}}d3.O(D.eHK,2.4,c8.$1(c7?A.bh:A.an))
d3.O(D.aPB,2.4,c8.$1(A.an))
return!0
case"blender":d3.aq(d0.$5(-14,14,28,12,4),c8.$1(A.cU))
d2=$.U().r
t=x.v
s=new B.aI(d2,A.ak,c6,c6,B.a([],t))
s.E(new B.aZ(-16,-26))
s.E(new B.aq(16,-26))
s.E(new B.aq(12,14))
s.E(new B.aq(-12,14))
s.E(new B.bz())
d3.af(s,c8.$1(A.fC.j(0.35)))
if(c7){d2=new B.aI(d2,A.ak,c6,c6,B.a([],t))
d2.E(new B.aZ(-14,-10))
d2.E(new B.aq(14,-10))
d2.E(new B.aq(12,14))
d2.E(new B.aq(-12,14))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.aC.j(0.7)))}d3.af(s,c9.$2(A.ac,1.6))
d2=d3.c
J.bs(d2.save())
d2.translate(0,10)
d3.jz(0,d4.y)
d3.ah(D.aaX,D.aPl,c9.$2(A.bP,3))
d2.restore()
if(c7)for(d2=d5*9,t=d5*1.6,v=0;v<3;++v)d3.O(new B.m(Math.sin(d2+v*2)*9,-10-A.h.F(t+v*0.33,1)*12),2.4,c8.$1(A.f1))
return!0
case"drone":d3.aq(d0.$5(-10,-4,20,10,4),c8.$1(A.aM))
d3.O(A.hF,3,c8.$1(c7?A.bh:A.an))
r=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.c,t=-4+r,q=-6+r,p=0;p<2;++p){o=F.Um[p]
d3.ah(new B.m(o*0.4,1),new B.m(o,t),c9.$2(A.bz,3))
J.bs(d2.save())
d2.translate(o,q)
d3.ah(D.eHB,D.eEy,c9.$2(A.c.j(c7?0.35:0.9),3))
if(c7)d3.c3(B.c1(A.J,6,24+Math.sin(d4.y*3)*4),c8.$1(A.c.j(0.25)))
d2.restore()}return!0
case"drill":w=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
w.E(new B.aZ(-24,-12))
w.E(new B.aq(10,-12))
w.E(new B.aq(10,2))
w.E(new B.aq(-2,2))
w.E(new B.aq(-6,22))
w.E(new B.aq(-16,22))
w.E(new B.aq(-14,2))
w.E(new B.aq(-24,2))
w.E(new B.bz())
d3.af(w,d1.$3(D.ftX,A.aQ,A.de))
d3.aE(D.ft2,c8.$1(A.d1))
d2=d3.c
J.bs(d2.save())
d2.translate(18,-5)
d3.jz(0,d4.y*2)
d3.ah(A.J,D.eEF,c9.$2(A.bP,2.4))
d3.ah(A.aaS,D.eEE,c9.$2(A.i0,1))
d2.restore()
if(c7)for(d2=d5*3,t=d5*20,v=0;v<4;++v){u=A.h.F(d2+v*0.25,1)
d3.O(new B.m(34+u*6,-5+Math.sin(v*3+t)*6*u),1.4,c8.$1(A.eK.j(1-u)))}return!0
case"torch":if(c7){v=A.h.D(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(16,-6))
d2.E(new B.aq(52,-26))
d2.E(new B.aq(52,18))
d2.E(new B.aq(16,4))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.bO.j(0.35*v)))}d3.aq(d0.$5(-26,-6,30,12,3),d1.$3(D.fu2,A.bl,A.cx))
n=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
n.E(new B.aZ(4,-6))
n.E(new B.aq(18,-12))
n.E(new B.aq(18,12))
n.E(new B.aq(4,6))
n.E(new B.bz())
d3.af(n,c8.$1(A.cU))
d3.O(D.eEK,7,c8.$1(c7?A.c:A.d1))
return!0
case"neon":d3.aq(d0.$5(-30,-14,60,28,6),c8.$1(M.ni))
if(c7)m=d4.ax>0.5||A.n.F(A.h.bc(d5*17),3)!==0
else m=!1
l=m?A.c5:D.bwu
if(m){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.c5.j(0.35))
t.y=A.no
d3.aq(d2,t)}d3.aq(d0.$5(-27,-11,54,22,5),c9.$2(l,2.2))
d6.$5(d3,"OPEN",D.eHY,l,17)
return!0
case"microwave":d3.aq(d0.$4(-30,-18,60,38),d1.$3(D.fu9,A.bP,A.bl))
d2=d0.$5(-26,-14,38,30,3)
d3.aq(d2,c8.$1(c7?A.bO.j(0.75):A.ax))
if(c7){d2=d3.c
J.bs(d2.save())
d2.translate(-7,8)
d3.jz(0,d4.y*0.5)
d3.c3(B.c1(A.J,7,22),c8.$1(A.de))
d2.restore()}d3.aq(d0.$5(15,-14,12,12,2),c8.$1(M.ni))
if(c7)d6.$5(d3,"0:"+A.a.aY(A.n.v(59-A.n.F(A.h.bc(d5),60)),2,"0"),D.eEL,A.bf,6.5)
d3.O(D.eEZ,4,c8.$1(A.d1))
return!0
case"doorbell":d3.aq(d0.$5(-16,-26,32,52,8),c8.$1(A.bo))
d3.O(A.KG,10,c8.$1(c7?A.bu:A.bz))
d2=d3.c
J.bs(d2.save())
d2.translate(0,-8)
d3.jz(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.eIG,A.c,16)
d2.restore()
d3.O(A.ky,6,c8.$1(A.di))
d3.O(A.ky,6,c9.$2(A.c,1.6))
if(c7)for(d2=d5*14,v=1;v<=2;++v)d3.cR(B.c0(A.KG,14+v*6+A.h.F(d2,6)),-0.9,1.8,!1,c9.$2(A.bu.j(0.9-v*0.3),1.8))
return!0
case"camera":d3.ah(D.eHX,D.eIz,c9.$2(A.bz,4))
d2=d3.c
J.bs(d2.save())
d3.jz(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aq(d0.$5(-24,-14,46,22,5),d1.$3(D.ftY,A.bP,A.an))
d3.O(D.aP2,8,c8.$1(A.ax))
d3.O(D.aP2,4.5,c8.$1(c7?A.aH:A.cx))
d3.O(D.eHV,2.2,c8.$1(c7&&A.n.F(A.h.bc(d5*1.6),2)===0?A.aC:A.kK))
d2.restore()
if(c7)d6.$5(d3,"REC",D.eI4,A.aC,9)
return!0
case"console":d3.aq(d0.$5(-28,-22,56,44,8),d1.$3(D.fu5,A.i2,A.fy))
d3.aq(d0.$5(-20,-17,40,22,3),c8.$1(A.dZ))
if(c7){d2=d5*2.3
d3.O(new B.m(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aE(new B.a5(-18,t,-15.6,t+8),c8.$1(A.bf))
d2=-9+Math.sin(d2-0.4)*6
d3.aE(new B.a5(15.6,d2,18,d2+8),c8.$1(A.c5))}d3.O(D.eHQ,4,c8.$1(A.bb))
d3.O(D.eEG,2.4,c8.$1(A.aC))
d3.O(D.eEX,2.4,c8.$1(A.bh))
return!0
case"heartmon":d3.aq(d0.$5(-30,-22,60,44,6),c8.$1(A.ax))
d3.aq(d0.$5(-26,-18,52,28,3),c8.$1(A.dZ))
if(c7){d2=$.U()
t=B.a([],x.v)
k=new B.aI(d2.r,A.ak,c6,c6,t)
for(d2=d5*0.5,o=-25;o<=25;++o){u=A.h.F((o+25)/50-d2,1)
if(u<0.1)j=Math.sin(u/0.1*3.141592653589793)*-1
else if(u<0.14)j=0.6
else{q=u<0.2?-0.4:0
j=q}i=-4+j*11
if(o===-25){q=new B.aZ(o,i)
t.push(q)
h=k.f
if(h!=null)q.aj(h)
k.ac()}else{q=new B.aq(o,i)
t.push(q)
h=k.f
if(h!=null)q.aj(h)
k.ac()}}d3.af(k,c9.$2(A.bf,1.8))
d6.$5(d3,"72",D.eEH,A.hJ,11)
d2=d5*9
d6.$5(d3,"\u2665",D.eI9,A.hJ.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.O(D.eI_,3,c8.$1(c7?A.bh:A.bz))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aq(d2,c8.$1(A.cJ.j(c7?0.5:0.3)))
d3.aq(d0.$5(-26,-20,52,40,4),c9.$2(A.ac,1.6))
d3.aE(D.fu_,c8.$1(F.wU))
if(c7){d2=d5*1.1
t=Math.sin(d2)
q=d3.c
J.bs(q.save())
q.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.nV(0,-1,1)
d3.c3(B.c1(A.J,8,14),c8.$1(A.cX))
d2=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-6,0))
d2.E(new B.aq(-12,-4))
d2.E(new B.aq(-12,4))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.c9))
d3.O(D.eFJ,1.2,c8.$1(A.v))
q.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=A.h.F(d2+v*0.2,1)
d3.O(new B.m(-18+Math.sin(u*8+v)*2,13-u*30),1.4+A.n.F(v,2),c9.$2(A.ac,1))}}return!0
case"lighthouse":d2=$.U().r
t=x.v
g=new B.aI(d2,A.ak,c6,c6,B.a([],t))
g.E(new B.aZ(-9,22))
g.E(new B.aq(-5,-16))
g.E(new B.aq(5,-16))
g.E(new B.aq(9,22))
g.E(new B.bz())
d3.af(g,d1.$3(D.fuB,A.c,A.bC))
d3.aE(D.fux,c8.$1(c7?A.eK:A.bz))
q=new B.aI(d2,A.ak,c6,c6,B.a([],t))
q.E(new B.aZ(-7,-22))
q.E(new B.aq(0,-29))
q.E(new B.aq(7,-22))
q.E(new B.bz())
d3.af(q,c8.$1(A.eD))
if(c7){f=Math.sin(d4.y*0.3)
d2=new B.aI(d2,A.ak,c6,c6,B.a([],t))
d2.E(new B.aZ(0,-19))
t=f*34
d2.E(new B.aq(t,-26))
d2.E(new B.aq(t,-12))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.eK.j(0.45)))
d2=c8.$1(A.eK.j(0.35))
d2.y=A.I7
d3.O(D.eEa,14,d2)}return!0
case"discoball":d3.ah(D.eEc,V.aOU,c9.$2(A.d1,1.4))
d3.O(A.J,16,d1.$3(D.ftJ,A.aS,A.an))
for(v=0;v<8;++v){d2=-12+v*3.4
d3.ah(new B.m(-16,d2),new B.m(16,d2),c9.$2(A.dJ,0.7))}for(v=0;v<5;++v){f=d4.y*0.5+v*1.26
d3.ah(new B.m(Math.cos(f)*16*0.3,Math.sin(f)*16*0.3),new B.m(Math.cos(f)*16,0),c9.$2(A.dJ,0.7))}if(c7)for(d2=d5*2,t=d5*9,v=0;v<10;++v){f=d2+v*0.63
e=22+A.n.F(v,3)*6
d3.O(new B.m(Math.cos(f)*e,Math.sin(f)*e*0.8),1.8,c8.$1(D.dvb[A.n.F(v,4)].j(0.5+0.5*Math.sin(t+v))))}return!0
case"robot":d3.aq(d0.$5(-14,-4,28,24,5),d1.$3(D.ftG,A.cF,A.an))
d3.aq(d0.$5(-12,-26,24,20,5),d1.$3(D.fty,A.bo,A.bQ))
d3.ah(H.aOW,D.eEe,c9.$2(A.bz,1.6))
d3.O(D.eEf,2.2,c8.$1(c7?A.aC:A.bz))
d=c7&&A.h.F(d5*0.8,1)>0.08
for(p=0;p<2;++p){o=F.a8f[p]
if(c7)d2=d?A.be:A.ex
else d2=A.cx
d3.O(new B.m(o,-17),3.2,c8.$1(d2))}d2=d3.c
J.bs(d2.save())
d2.translate(14,0)
d3.jz(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.ah(A.J,D.aaN,c9.$2(A.bQ,4))
d2.restore()
d3.ah(D.eHI,D.eI2,c9.$2(A.bQ,4))
d3.aE(D.fuw,c8.$1(c7?A.be.j(0.7):A.aM))
return!0
case"toaster":a0=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a0*14,p=0;p<2;++p){t=d0.$5(D.aFx[p]+1,d2,10,14,2)
q=B.ap(A.bO,A.de,a0)
q.toString
d3.aq(t,c8.$1(q))}d3.aq(d0.$5(-24,-6,48,26,8),d1.$3(D.ftZ,A.bP,A.bl))
for(p=0;p<2;++p){o=D.aFx[p]
d2=d0.$5(o,-5,12,5,2)
d3.aq(d2,c8.$1(c7?A.fN:A.ax))
if(c7){d2=d0.$5(o,-5,12,5,2)
t=c8.$1(A.cX.j(0.5))
t.y=O.p1
d3.aq(d2,t)}}d3.ah(D.eF6,D.eFr,c9.$2(A.ax,3))
return!0
case"ledstrip":d3.aq(d0.$5(-34,-4,68,10,4),c8.$1(A.cx))
for(d2=d5*90,v=0;v<9;++v){a1=A.h.F(d2+v*40,360)
l=c7?new Aw.pI(1,a1,0.8,1).jn():A.cU
if(c7){t=c8.$1(l.j(0.45))
t.y=O.p1
d3.O(new B.m(-30+v*7.5,1),7,t)}d3.O(new B.m(-30+v*7.5,1),2.6,c8.$1(l))}d3.aq(d0.$5(-40,-2,6,6,1),c8.$1(A.d1))
return!0
case"pump":d3.aq(d0.$5(-16,-2,32,22,6),d1.$3(D.ftP,A.cJ,A.H1))
d3.O(D.eIc,8,c8.$1(A.tn))
d2=d3.c
J.bs(d2.save())
d2.translate(-2,9)
d3.jz(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
d3.ah(A.J,new B.m(Math.cos(t)*7,Math.sin(t)*7),c9.$2(A.fC,2.4))}d2.restore()
d2=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(16,6))
d2.E(new B.aq(26,6))
d2.E(new B.aq(26,-20))
d2.E(new B.aq(10,-20))
d3.af(d2,c9.$2(A.bQ,4))
if(c7){for(d2=d5*0.9,v=0;v<5;++v)d3.O(new B.m(26,6-A.h.F(d2+v*0.2,1)*26),2.2,c8.$1(A.hn))
d3.O(D.eGn,3.2,c8.$1(A.hn.j(0.7)))}return!0
case"hairdryer":d2=d3.c
J.bs(d2.save())
d3.jz(0,-0.15)
d3.aq(d0.$5(-26,-14,40,22,10),d1.$3(D.fu0,A.hZ,A.v3))
d3.aq(d0.$5(14,-10,12,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-10,6,12,22,4),c8.$1(A.cU))
d2.restore()
if(c7){for(d2=d5*3,v=0;v<4;++v){u=A.h.F(d2+v*0.25,1)
t=u*18
q=-10+v*5
d3.ah(new B.m(24+t,q),new B.m(32+t,q),c9.$2(A.c.j(1-u),1.8))}d2=c8.$1(A.cX.j(0.4))
d2.y=O.p1
d3.O(D.eEY,8,d2)}return!0
case"headphones":d3.cR(B.c1(A.dP,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bz,4))
for(d2=d5*12,p=0;p<2;++p){o=F.Ul[p]
t=o-7
d3.aq(d0.$5(t,0,14,20,6),d1.$3(new B.a5(t,0,t+14,20),A.bk,A.nb))
if(c7)for(t=o<0,v=1;v<=2;++v){q=B.c0(new B.m(o,10),10+v*5+A.h.F(d2,5))
h=t?2.2:-0.9
d3.cR(q,h,1.6,!1,c9.$2(A.eL.j(0.9-v*0.3),1.6))}}if(c7)d6.$5(d3,"\u266a",new B.m(-4,-8-A.h.F(d5*14,8)),A.l4,12)
return!0
case"smartwatch":d3.aq(d0.$5(-8,-30,16,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-8,14,16,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-14,-17,28,32,8),d1.$3(D.ftD,A.d1,A.cU))
d3.aq(d0.$5(-11,-14,22,26,6),c8.$1(A.dZ))
if(c7){a2=new B.W(Date.now(),0,!1)
d6.$5(d3,A.a.aY(A.n.v(B.cY(a2)),2,"0")+":"+A.a.aY(A.n.v(B.fx(a2)),2,"0"),D.eEl,A.bf,9.5)
j=(Math.sin(d5*9)+1)/2
d2=B.ap(A.GK,A.hJ,j)
d2.toString
d6.$5(d3,"\u2665",new B.m(-8,1),d2,8+j*2)
d6.$5(d3,""+(70+A.n.F(A.h.bc(d5*2),6)),A.dP,A.c,7)}return!0
case"tablet":d3.aq(d0.$5(-30,-22,60,44,6),c8.$1(M.ni))
d3.aq(d0.$5(-30,-22,60,44,6),c9.$2(A.bQ,1.6))
a3=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nn(a3),$.n_(),!0)
d2.translate(-27,-19)
K.ML(d3,D.fB3,d5,!1,c6,c6)
d2.restore()}else d3.aq(a3,c8.$1(D.x_))
return!0
case"buck":a4=d0.$5(-26,-22,52,42,5)
d3.aq(a4,d1.$3(new B.a5(a4.a,a4.b,a4.c,a4.d),A.dV,A.dl))
d3.aq(a4,c9.$2(A.aT,1.2))
d3.O(D.aPu,9,c8.$1(A.ax))
d3.O(D.aPu,6,c9.$2(A.de,2))
d3.aq(d0.$5(4,-2,14,10,2),c8.$1(A.ax))
d3.aq(d0.$5(-22,-19,44,12,2),c8.$1(A.dZ))
d2=A.h.a1(d4.db,1)
t=A.h.a1(c7?d4.dx:d4.e,1)
q=c7?A.bf:A.an
d6.$5(d3,d2+"\u2192"+t+"V",D.eGy,q,8.2)
d3.O(D.eEP,2.4,c8.$1(c7?A.bh:A.aM))
d6.$5(d3,"IN",D.eI3,A.ac,6)
d6.$5(d3,"OUT",D.eGd,A.ac,6)
return!0
case"regulator":a5=c7?A.h.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=B.ap(A.bQ,A.aC,a5)
t.toString
d3.aq(d2,c8.$1(t))
d3.O(H.aaL,3,c8.$1(A.aM))
d3.aq(d0.$5(-12,-4,24,18,3),d1.$3(D.ftz,A.cU,A.iq))
d6.$5(d3,"7805",D.aaX,A.ac,8)
for(p=0;p<3;++p){d2=D.dCj[p]-1
d3.aE(new B.a5(d2,14,d2+2,22),c8.$1(A.dW))}if(a5>0.2)for(d2=d5*0.9,v=0;v<3;++v){u=A.h.F(d2+v*0.33,1)
d3.O(new B.m(-6+v*6,-28-u*12),2+u*2,c8.$1(A.c.j(0.5*(1-u))))}d6.$5(d3,"5V",D.eIC,A.br,9)
return!0
case"diode":d3.ah(D.aPz,D.aPf,c9.$2(A.dW,2.4))
d3.aq(d0.$5(-14,-7,28,14,6),c8.$1(A.as.j(0.85)))
d3.aE(D.ftg,c8.$1(A.br))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.eK.j(0.4))
t.y=A.ld
d3.aq(d2,t)}d2=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-8,-4))
d2.E(new B.aq(-8,4))
d2.E(new B.aq(-1,0))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.bb))
d6.$5(d3,"one way",D.eHT,A.aE,8)
return!0
case"ldr":d3.ah(D.aPz,D.aaX,c9.$2(A.dW,2.4))
d3.ah(D.aPl,D.aPf,c9.$2(A.dW,2.4))
d3.O(A.J,12,c8.$1(A.de))
d3.O(A.J,12,c9.$2(A.tt,1.6))
d2=$.U()
t=B.a([],x.v)
a6=new B.aI(d2.r,A.ak,c6,c6,t)
a6.E(new B.aZ(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new B.aq(d2,-6+v*3)
t.push(d2)
q=a6.f
if(q!=null)d2.aj(q)
a6.ac()}d3.af(a6,c9.$2(A.bO,1.4))
d2=B.ap(A.bz,A.eK,d4.f)
d2.toString
d6.$5(d3,"\u2600",new B.m(-6,-26),d2,14)
d6.$5(d3,""+A.h.S(20+980*(1-d4.f))+"\u03a9",D.eHJ,A.ac,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":switch(d2){case"lgtv":t=A.eC
break
case"sonytv":t=A.td
break
case"appletv":t=A.dW
break
default:t=F.Ct
break}a7=d2==="lgtv"||d2==="appletv"
d3.aq(d0.$5(-36,-24,72,46,6),c8.$1(t))
t=a7?-35:-33
q=a7?-23:-21
h=a7?70:66
a3=d0.$5(t,q,h,a7?40:38,3)
t=a3.a
q=a3.b
if(c7){h=d3.c
J.bs(h.save())
h.clipRRect(B.nn(a3),$.n_(),!0)
h.translate(t,q)
K.h94(d3,new B.av(a3.c-t,a3.d-q),d4.at,d5,d4.ax,-1,c6,c6)
h.restore()
d3.O(D.eFu,1.6,c8.$1(A.bf))}else{d3.aq(a3,c8.$1(D.x_))
h=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
h.E(new B.aZ(t,q))
h.E(new B.aq(t+24,q))
h.E(new B.aq(t,q+22))
h.E(new B.bz())
d3.af(h,c8.$1(A.c.j(0.05)))}if(d2==="appletv"){d2=d3.c
J.bs(d2.save())
d2.translate(0,19.6)
d3.bW(0,3.7)
d2.translate(-0.5,-0.55)
d3.af(K.hRQ(),c8.$1(A.cz))
d2.restore()}else{switch(d2){case"lgtv":d2=F.aUP
break
case"sonytv":d2=F.aUG
break
default:d2=F.aUI
break}a8=B.h0(c6,A.cK,c6,c6,c6,B.cW(c6,c6,c6,c6,c6,c6,c6,c6,c6,B.l(c6,c6,d2.b,c6,c6,c6,c6,c6,c6,c6,c6,3.6,c6,c6,A.C,c6,1,!0,c6,0.25,c6,c6,c6,c6,c6,c6),d2.a),A.a7,A.cb,c6,A.e5,A.cc)
a8.eJ()
d2=a8.b
t=d2.c
d2=d2.a.c
a8.a5(d3,new B.m(-t/2,19.6-d2.gb4(d2)/2))}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":a9=D.mN.h(0,d2)
b0=a9.b===D.Bu
b1=b0?44:30
b2=b0?48:54
t=-b1/2
q=-b2/2
h=b0?5:6.5
w=d0.$5(t,q-2,b1,b2,h)
h=w.a
b3=w.b
b4=w.c
b5=w.d
b6=a9.c
b7=B.ap(b6,A.c,0.35)
b7.toString
d3.aq(w,d1.$3(new B.a5(h,b3,b4,b5),b7,b6))
a3=d0.$5(t+2,q,b1-4,b2-4,3.5)
if(c7){t=d3.c
J.bs(t.save())
t.clipRRect(B.nn(a3),$.n_(),!0)
q=a3.a
h=a3.b
t.translate(q,h)
K.ML(d3,new B.av(a3.c-q,a3.d-h),d5,!1,c6,c6)
t.restore()}else d3.aq(a3,c8.$1(D.x_))
if(b0){t=a3.b
q=a3.d
d3.ah(new B.m(0,t),new B.m(0,q),c9.$2(A.v.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aq(d0.$5(-4,a3.b+1.2,8,2.6,1.3),c8.$1(A.v))
else{d2=b0?b1/2-7:0
d3.O(new B.m(d2,a3.b+3),1.3,c8.$1(A.v))}return!0
case"ereader":d3.aq(d0.$5(-17,-28,34,52,4),c8.$1(A.cU))
d3.aq(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bP))
if(c7){d6.$5(d3,"NGMY",D.eIJ,A.ax,9)
for(v=0;v<9;++v){d2=-9+v*3.6
t=A.n.F(v,4)===3?14:22
d3.aE(new B.a5(-11,d2,-11+t,d2+1.4),c8.$1(A.bl))}d3.O(A.aaJ,1.6,c8.$1(A.ax))}return!0
case"laptop":d3.aq(d0.$5(-30,-28,60,42,4),d1.$3(D.fua,A.cF,A.bl))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nn(b8),$.n_(),!0)
t=b8.a
q=b8.b
d2.translate(t,q)
K.ML(d3,new B.av(b8.c-t,b8.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(b8,c8.$1(D.x_))
d2=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-38,16))
d2.E(new B.aq(38,16))
d2.E(new B.aq(34,21))
d2.E(new B.aq(-34,21))
d2.E(new B.bz())
d3.af(d2,c8.$1(D.akZ))
d3.aq(d0.$5(-7,16,14,2,1),c8.$1(A.bl))
return!0
case"imac":d3.aq(d0.$5(-32,-28,64,46,5),d1.$3(D.fue,A.cm,A.cF))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nn(b9),$.n_(),!0)
t=b9.a
q=b9.b
d2.translate(t,q)
K.ML(d3,new B.av(b9.c-t,b9.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(b9,c8.$1(D.x_))
d3.O(D.eDY,2,c8.$1(A.bQ))
d2=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-6,18))
d2.E(new B.aq(6,18))
d2.E(new B.aq(10,26))
d2.E(new B.aq(-10,26))
d2.E(new B.bz())
d3.af(d2,c8.$1(D.akZ))
return!0
case"monitor":d3.aq(d0.$5(-34,-28,68,40,3),c8.$1(A.eC))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nn(c0),$.n_(),!0)
t=c0.a
q=c0.b
d2.translate(t,q)
K.ML(d3,new B.av(c0.c-t,c0.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(c0,c8.$1(D.x_))
d3.aE(D.ful,c8.$1(A.bl))
d3.aq(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.d1))
return!0
case"projector":if(c7){d2=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(14,4))
d2.E(new B.aq(-32,-42))
d2.E(new B.aq(34,-42))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.eK.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nn(c1),$.n_(),!0)
t=c1.a
q=c1.b
d2.translate(t,q)
K.ML(d3,new B.av(c1.c-t,c1.d-q),d5,!1,c6,c6)
d2.restore()}d3.aq(d0.$5(-26,-4,52,24,6),d1.$3(D.fu1,A.hX,A.d1))
d3.O(D.aP0,7,c8.$1(A.ax))
d3.O(D.aP0,4,c8.$1(c7?A.eK:A.cx))
for(v=0;v<4;++v){d2=-20+v*4
d3.ah(new B.m(d2,2),new B.m(d2,14),c9.$2(A.dJ,1))}return!0
case"carscreen":d3.aq(d0.$5(-34,-10,68,32,12),c8.$1(A.ax))
c2=d0.$5(-30,-20,60,28,8)
d3.aq(c2,c8.$1(M.ni))
d3.aq(c2,c9.$2(A.bz,1.2))
if(c7){c3=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
c3.E(new B.aZ(-26,4))
c3.E(new B.cn(-10,-14+Math.sin(d5)*3,6,-6))
c3.E(new B.aq(22,-16))
d3.af(c3,c9.$2(A.aH,2.2))
d2=A.h.F(d5*6,48)
d3.O(new B.m(-26+d2,4-d2*0.1),2.4,c8.$1(A.bf))
d6.$5(d3,""+(88+A.n.F(A.h.bc(d5*2),5)),H.aPk,A.c,10)
d6.$5(d3,"km/h",D.eGl,A.aE,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aq(c4,d1.$3(new B.a5(c4.a,c4.b,c4.c,c4.d),A.d1,A.cU))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nn(c5),$.n_(),!0)
t=c5.a
q=c5.b
d2.translate(t,q)
K.ML(d3,new B.av(c5.c-t,c5.d-q),d5,!1,c6,c6)
d2.restore()
d2=c8.$1(A.bk.j(0.2))
d2.y=A.no
d3.O(A.J,26,d2)}else d3.aq(c5,c8.$1(A.a_))
d3.ah(D.eIj,D.eIo,c9.$2(A.bl,4))
d3.ah(D.eFw,D.eFM,c9.$2(A.bl,4))
return!0}return!1},
h8P:function h8P(){},
h8R:function h8R(){},
h8S:function h8S(){},
h8Q:function h8Q(){},
hyM(d,e,f,g){return new C.alu(d,g,f,e)},
GW(d,e,f){return new C.bfQ(d,e,f)},
alu:function alu(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
alv:function alv(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.hg$=i
_.mk$=j
_.fi$=k
_.hh$=l
_.bw$=m
_.ab$=n
_.c=_.a=null},
bNh:function bNh(d,e){this.a=d
this.b=e},
bNi:function bNi(d){this.a=d},
bNg:function bNg(d){this.a=d},
bNj:function bNj(){},
bNk:function bNk(d){this.a=d},
bNl:function bNl(d,e,f){this.a=d
this.b=e
this.c=f},
bNf:function bNf(d,e){this.a=d
this.b=e},
bNc:function bNc(d,e){this.a=d
this.b=e},
bNd:function bNd(d,e,f){this.a=d
this.b=e
this.c=f},
bN6:function bN6(d,e){this.a=d
this.b=e},
bN7:function bN7(){},
bNe:function bNe(d,e,f){this.a=d
this.b=e
this.c=f},
bNb:function bNb(d,e){this.a=d
this.b=e},
bN8:function bN8(d,e){this.a=d
this.b=e},
bN9:function bN9(d,e){this.a=d
this.b=e},
bNa:function bNa(d){this.a=d},
bNB:function bNB(d){this.a=d},
bNC:function bNC(){},
bMH:function bMH(){},
bND:function bND(d,e){this.a=d
this.b=e},
bNA:function bNA(d,e){this.a=d
this.b=e},
bNv:function bNv(d){this.a=d},
bNs:function bNs(d,e,f){this.a=d
this.b=e
this.c=f},
bNt:function bNt(d,e){this.a=d
this.b=e},
bNw:function bNw(d){this.a=d},
bNq:function bNq(d,e){this.a=d
this.b=e},
bNr:function bNr(d,e){this.a=d
this.b=e},
bNu:function bNu(d){this.a=d},
bNx:function bNx(d){this.a=d},
bNn:function bNn(d,e){this.a=d
this.b=e},
bNo:function bNo(d,e){this.a=d
this.b=e},
bNp:function bNp(d,e){this.a=d
this.b=e},
bNy:function bNy(d){this.a=d},
bNm:function bNm(d){this.a=d},
bNz:function bNz(d){this.a=d},
bMI:function bMI(d,e){this.a=d
this.b=e},
bN3:function bN3(d,e){this.a=d
this.b=e},
bN5:function bN5(d,e){this.a=d
this.b=e},
bN4:function bN4(d,e){this.a=d
this.b=e},
bN2:function bN2(){},
bMP:function bMP(d){this.a=d},
bMO:function bMO(d){this.a=d},
bMQ:function bMQ(d,e){this.a=d
this.b=e},
bMR:function bMR(d){this.a=d},
bMN:function bMN(d){this.a=d},
bMV:function bMV(d,e,f){this.a=d
this.b=e
this.c=f},
bMM:function bMM(d,e){this.a=d
this.b=e},
bMW:function bMW(d,e){this.a=d
this.b=e},
bMX:function bMX(d,e){this.a=d
this.b=e},
bMY:function bMY(d,e){this.a=d
this.b=e},
bMZ:function bMZ(d,e,f){this.a=d
this.b=e
this.c=f},
bML:function bML(d,e){this.a=d
this.b=e},
bN_:function bN_(d,e,f){this.a=d
this.b=e
this.c=f},
bMK:function bMK(d,e){this.a=d
this.b=e},
bN0:function bN0(d,e,f){this.a=d
this.b=e
this.c=f},
bMJ:function bMJ(d,e){this.a=d
this.b=e},
bN1:function bN1(d){this.a=d},
bMS:function bMS(d){this.a=d},
bMT:function bMT(d){this.a=d},
bMU:function bMU(d){this.a=d},
bfQ:function bfQ(d,e,f){this.a=d
this.b=e
this.c=f},
fDI:function fDI(){},
fDJ:function fDJ(){},
fDK:function fDK(){},
fDv:function fDv(){},
fDL:function fDL(){},
fDu:function fDu(){},
fDM:function fDM(){},
fDz:function fDz(){},
fDt:function fDt(){},
fDA:function fDA(){},
fDs:function fDs(){},
fDB:function fDB(){},
fDr:function fDr(){},
fDC:function fDC(){},
fDp:function fDp(){},
fDq:function fDq(){},
fDD:function fDD(){},
fDn:function fDn(){},
fDo:function fDo(){},
fDE:function fDE(){},
fDm:function fDm(){},
Xb:function Xb(d){this.a=d},
aH3:function aH3(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
e7y:function e7y(d,e){this.a=d
this.b=e},
e7H:function e7H(d){this.a=d},
e7I:function e7I(){},
e7J:function e7J(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e7K:function e7K(){},
e7x:function e7x(d){this.a=d},
e7w:function e7w(d,e,f){this.a=d
this.b=e
this.c=f},
e7v:function e7v(d,e){this.a=d
this.b=e},
e7t:function e7t(d){this.a=d},
e7u:function e7u(){},
e7G:function e7G(d){this.a=d},
e7F:function e7F(d){this.a=d},
e7D:function e7D(d,e){this.a=d
this.b=e},
e7B:function e7B(d){this.a=d},
e7C:function e7C(){},
e7E:function e7E(d,e,f){this.a=d
this.b=e
this.c=f},
e7z:function e7z(d,e){this.a=d
this.b=e},
e7A:function e7A(){},
e7M:function e7M(d){this.a=d},
e7N:function e7N(d,e){this.a=d
this.b=e},
e7L:function e7L(){},
e7O:function e7O(d,e){this.a=d
this.b=e},
e7P:function e7P(d){this.a=d},
e7Q:function e7Q(d){this.a=d},
aAU:function aAU(d,e){this.c=d
this.a=e},
bdU:function bdU(d,e){var _=this
_.d=$
_.bw$=d
_.ab$=e
_.c=_.a=null},
cPz:function cPz(d){this.a=d},
bdT:function bdT(d,e){this.b=d
this.a=e},
cPy:function cPy(d){this.a=d},
aBe:function aBe(){},
aBf:function aBf(){},
aNM:function aNM(){},
bCQ:function bCQ(){},
iIB(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.c0(A.wc,23)
$.U()
b8=B.L()
b8.r=A.ax.gp(0)
b9.O(A.wc,25,b8)
b8=B.L()
b8.san(D.eRA.az(0,v))
b9.O(A.wc,23,b8)
for(u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
b8=Math.cos(t)
s=Math.sin(t)
r=Math.cos(t)
q=Math.sin(t)
p=new B.ar(A.V,A.R,A.X,A.Y,A.W)
p.r=A.br.gp(0)
p.c=A.n.F(u,5)===0?1.8:1
b9.ah(new B.m(b8*17,s*17-2),new B.m(r*21,q*21-2),p)}o=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.h.D(o/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=B.L()
r.r=A.bC.gp(0)
r.c=2
r.d=A.bG
b9.ah(A.wc,new B.m(b8*18,s*18-2),r)
r=B.L()
r.r=A.br.gp(0)
b9.O(A.wc,3,r)
c2.$5(b9,w?"V":"A",D.eIr,A.br,12)
c2.$5(b9,w?A.h.a1(o,1)+" V":""+A.h.S(o*1000)+" mA",D.eHN,A.ax,9.5)
return!0
case"fan":b8=B.bx(D.ftv,A.ht)
$.U()
s=B.L()
s.r=A.bz.gp(0)
b9.aq(b8,s)
s=B.L()
s.r=A.an.gp(0)
b9.aE(D.fum,s)
s=B.L()
s.r=A.a_.j(0.6).gp(0)
b9.O(H.wd,22,s)
for(b8=b9.c,u=0;u<4;++u){J.bs(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.c1(A.aOT,18,10)
r=new B.ar(A.V,A.R,A.X,A.Y,A.W)
r.r=A.hn.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
b9.c3(s,r)
b8.restore()}b8=B.L()
b8.r=A.bt.gp(0)
b9.O(H.wd,4,b8)
b8=B.L()
b8.b=A.ae
b8.c=2
b8.r=A.cF.gp(0)
b9.O(H.wd,22,b8)
b8=B.L()
b8.b=A.ae
b8.c=0.8
b8.r=A.jX.gp(0)
b9.O(H.wd,14,b8)
return!0
case"speaker":n=B.bx(D.aVe,A.qv)
$.U()
b8=B.L()
b8.san(D.aw6.az(0,new B.a5(n.a,n.b,n.c,n.d)))
b9.aq(n,b8)
m=b7?Math.sin(c1*40)*1.6:0
b8=B.L()
b8.san(D.eRX.az(0,B.c0(A.cy,15)))
b9.O(A.cy,14+m,b8)
b8=B.L()
b8.r=A.d1.gp(0)
b9.O(A.cy,5,b8)
b8=B.L()
b8.r=A.bl.gp(0)
b9.O(H.aaK,5+m*0.4,b8)
if(b7)for(b8=c1*18,u=1;u<=3;++u){s=B.c0(D.eF5,6+u*6+A.h.F(b8,6))
r=new B.ar(A.V,A.R,A.X,A.Y,A.W)
r.b=A.ae
r.c=1.8
r.r=A.c5.j(0.9-u*0.2).gp(0)
b9.cR(s,-0.8,1.6,!1,r)}return!0
case"clock":l=B.bx(D.fud,A.qv)
$.U()
b8=B.L()
b8.san(D.cej.az(0,new B.a5(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
b8=B.bx(D.aVg,A.jL)
s=B.L()
s.r=A.iq.gp(0)
b9.aq(b8,s)
if(b7){k=new B.W(Date.now(),0,!1)
j=B.Gg(k)<500?":":" "
i=A.a.aY(A.n.v(B.cY(k)),2,"0")
h=A.a.aY(A.n.v(B.fx(k)),2,"0")
b8=B.L()
b8.r=A.bf.j(0.12).gp(0)
b9.aE(D.aVg,b8)
c2.$5(b9,i+j+h,D.eI7,A.bf,21)}b8=B.L()
b8.r=A.cF.gp(0)
b9.O(D.eI5,2.4,b8)
b8=B.L()
b8.r=A.cF.gp(0)
b9.O(D.eFa,2.4,b8)
return!0
case"calculator":l=B.bx(D.ftU,A.iE)
$.U()
b8=B.L()
b8.san(D.aw9.az(0,new B.a5(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
b8=B.bx(D.ftN,A.hG)
s=B.L()
s.r=(b7?A.a0p:D.bx6).gp(0)
b9.aq(b8,s)
if(b7)c2.$5(b9,"3.14159",D.eHM,A.a_3,10.5)
for(g=0;g<4;++g)for(b8=-6+g*8,s=b8+6,f=0;f<4;++f){r=-15+f*8
r=B.bx(new B.a5(r,b8,r+6,s),A.Fx)
$.U()
q=new B.ar(A.V,A.R,A.X,A.Y,A.W)
q.r=(f===3?A.c9:A.bP).gp(0)
b9.aq(r,q)}return!0
case"phone":l=B.bx(D.ftI,A.iE)
$.U()
b8=B.L()
b8.r=M.ni.gp(0)
b9.aq(l,b8)
b8=B.L()
b8.b=A.ae
b8.c=1.9
b8.r=D.amZ.gp(0)
b9.aq(l,b8)
e=B.bx(D.ftx,A.ht)
if(b7){b8=B.L()
b8.san(D.cfH.az(0,new B.a5(e.a,e.b,e.c,e.d)))
b9.aq(e,b8)
b8=b9.c
J.bs(b8.save())
b8.clipRRect(B.nn(e),$.n_(),!0)
b8.translate(-12,-25)
K.ML(b9,D.fAG,c1,!1,b6,b6)
b8.restore()
d=A.h.F(c1*0.12,1)
b8=B.bx(D.ftu,A.hG)
s=B.L()
s.r=A.bb.gp(0)
b9.aq(b8,s)
s=B.L()
s.r=A.bf.gp(0)
b9.aE(new B.a5(-10,14.5,-10+20*d,16.9),s)
c2.$5(b9,"\u26a1"+A.h.S(d*100)+"%",D.eGU,A.c,6)}else{b8=B.L()
b8.r=D.x_.gp(0)
b9.aq(e,b8)}b8=B.bx(D.fuC,D.eS5)
s=B.L()
s.r=A.v.gp(0)
b9.aq(b8,s)
return!0
case"router":l=B.bx(D.fuc,A.pp)
$.U()
b8=B.L()
b8.san(D.ceB.az(0,new B.a5(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
for(a0=0;a0<2;++a0){a1=F.Ul[a0]
b8=a1<0?-4:4
s=new B.ar(A.V,A.R,A.X,A.Y,A.W)
s.r=A.cx.gp(0)
s.c=4
s.d=A.bG
b9.ah(new B.m(a1,-4),new B.m(a1+b8,-28),s)}for(u=0;u<4;++u){if(b7)a2=A.n.F(A.h.bc(c1*(3+u*1.3)),2)===0||u===0
else a2=!1
b8=new B.ar(A.V,A.R,A.X,A.Y,A.W)
b8.r=(a2?A.bh:A.aM).gp(0)
b9.O(new B.m(-15+u*10,11),2.6,b8)}if(b7)for(b8=c1*10,u=1;u<=3;++u){s=B.c0(H.wd,8+u*6+A.h.F(b8,6))
r=new B.ar(A.V,A.R,A.X,A.Y,A.W)
r.b=A.ae
r.c=1.8
r.r=A.fL.j(0.9-u*0.2).gp(0)
b9.cR(s,-2.3,1.5,!1,r)}return!0
case"siren":a3=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bx(D.ftT,A.ht)
s=$.U()
r=B.L()
r.r=A.cU.gp(0)
b9.aq(b8,r)
if(b7){b8=B.L()
b8.r=A.aC.j(0.5*a3).gp(0)
b8.y=A.Dz
b9.O(A.wc,34,b8)}a4=new B.aI(s.r,A.ak,b6,b6,B.a([],x.v))
a4.E(new B.aZ(-16,12))
a4.E(new B.aq(-16,-2))
a4.E(new B.cn(0,-30,16,-2))
a4.E(new B.aq(16,12))
a4.E(new B.bz())
b8=B.L()
b8.r=B.ap(A.eD,D.bnq,a3).gp(0)
b9.af(a4,b8)
b8=B.L()
b8.b=A.ae
b8.c=1.4
b8.r=A.bX.gp(0)
b9.af(a4,b8)
if(b7){b8=b9.c
J.bs(b8.save())
b8.translate(0,-2)
b9.jz(0,c1*7)
s=B.L()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.ah(A.J,H.aaK,s)
b8.restore()}return!0
case"toycar":a5=b7?Math.sin(c1*30)*0.8:0
b8=b9.c
J.bs(b8.save())
b8.translate(0,a5)
s=$.U().r
r=x.v
l=new B.aI(s,A.ak,b6,b6,B.a([],r))
l.E(new B.aZ(-28,8))
l.E(new B.aq(-28,-2))
l.E(new B.aq(-16,-4))
l.E(new B.aq(-10,-16))
l.E(new B.aq(10,-16))
l.E(new B.aq(18,-4))
l.E(new B.aq(28,-2))
l.E(new B.aq(28,8))
l.E(new B.bz())
q=B.L()
q.san(D.ccA.az(0,D.fu4))
b9.af(l,q)
q=new B.aI(s,A.ak,b6,b6,B.a([],r))
q.E(new B.aZ(-8,-4))
q.E(new B.aq(-4,-13))
q.E(new B.aq(4,-13))
q.E(new B.aq(4,-4))
q.E(new B.bz())
p=B.L()
p.r=A.fC.gp(0)
b9.af(q,p)
r=new B.aI(s,A.ak,b6,b6,B.a([],r))
r.E(new B.aZ(8,-4))
r.E(new B.aq(8,-13))
r.E(new B.aq(11,-13))
r.E(new B.aq(15,-4))
r.E(new B.bz())
s=B.L()
s.r=A.fC.gp(0)
b9.af(r,s)
for(a0=0;a0<2;++a0){a1=F.aFy[a0]
s=new B.ar(A.V,A.R,A.X,A.Y,A.W)
s.r=A.ax.gp(0)
b9.O(new B.m(a1,10),7.5,s)
J.bs(b8.save())
b8.translate(a1,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.ar(A.V,A.R,A.X,A.Y,A.W)
q.r=A.bP.gp(0)
q.c=1.6
b9.ah(A.J,new B.m(r*5.5,s*5.5),q)}b8.restore()}b8.restore()
if(b7)for(b8=c1*40,u=0;u<3;++u){s=A.h.F(b8+u*8,14)
r=-4+u*5
q=new B.ar(A.V,A.R,A.X,A.Y,A.W)
q.r=A.aE.gp(0)
q.c=1.6
b9.ah(new B.m(-34-s,r),new B.m(-42-s,r),q)}return!0
case"kettle":b8=$.U().r
s=x.v
l=new B.aI(b8,A.ak,b6,b6,B.a([],s))
l.E(new B.aZ(-18,20))
l.E(new B.aq(-14,-12))
l.E(new B.cn(0,-20,14,-12))
l.E(new B.aq(18,20))
l.E(new B.bz())
r=B.L()
r.san(D.cdI.az(0,D.ftS))
b9.af(l,r)
r=new B.aI(b8,A.ak,b6,b6,B.a([],s))
r.E(new B.aZ(14,-10))
r.E(new B.aq(30,-22))
r.E(new B.aq(32,-18))
r.E(new B.aq(16,-4))
r.E(new B.bz())
q=B.L()
q.r=A.dW.gp(0)
b9.af(r,q)
s=new B.aI(b8,A.ak,b6,b6,B.a([],s))
s.E(new B.aZ(-14,-8))
s.E(new B.cn(-34,-6,-18,12))
b8=B.L()
b8.b=A.ae
b8.c=5
b8.r=A.ax.gp(0)
b9.af(s,b8)
b8=B.L()
if(b7){s=B.ap(A.cX,A.vb,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.cU
b8.r=s.gp(0)
b9.aE(D.ftR,b8)
if(b7){b8=B.L()
b8.r=A.cX.j(0.3).gp(0)
b8.y=A.no
b9.O(A.aaH,24,b8)
for(b8=c1*0.9,u=0;u<4;++u){a6=A.h.F(b8+u*0.25,1)
s=Math.sin(a6*9+u)
r=new B.ar(A.V,A.R,A.X,A.Y,A.W)
r.r=A.c.j(0.6*(1-a6)).gp(0)
b9.O(new B.m(30+s*4,-26-a6*26),3+a6*5,r)}}b8=B.L()
b8.r=A.ax.gp(0)
b9.O(D.eE8,3,b8)
return!0
case"lamp":if(b7){u=A.h.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aI($.U().r,A.ak,b6,b6,B.a([],x.v))
b8.E(new B.aZ(-10,-14))
b8.E(new B.aq(-30,24))
b8.E(new B.aq(10,24))
b8.E(new B.aq(8,-14))
b8.E(new B.bz())
s=B.L()
s.r=A.eK.j(0.28*u).gp(0)
b9.af(b8,s)
s=B.L()
s.r=A.eK.j(0.5*u).gp(0)
s.y=A_.PU
b9.O(D.eId,24,s)}b8=B.bx(D.fuv,A.ht)
s=$.U()
r=B.L()
r.r=A.cU.gp(0)
b9.aq(b8,r)
r=B.L()
r.r=A.d1.gp(0)
r.c=3
r.d=A.bG
b9.ah(D.eEo,D.aP3,r)
r=B.L()
r.r=A.d1.gp(0)
r.c=3
r.d=A.bG
b9.ah(D.aP3,D.eIe,r)
a7=new B.aI(s.r,A.ak,b6,b6,B.a([],x.v))
a7.E(new B.aZ(-14,-16))
a7.E(new B.aq(6,-26))
a7.E(new B.aq(10,-12))
a7.E(new B.aq(-10,-6))
a7.E(new B.bz())
s=B.L()
s.r=(b7?A.aQ:A.kf).gp(0)
b9.af(a7,s)
b8=B.L()
b8.r=(b7?A.c:A.bl).gp(0)
b9.O(D.eIh,4,b8)
return!0
case"lights":b8=$.U().r
s=x.v
a8=new B.aI(b8,A.ak,b6,b6,B.a([],s))
a8.E(new B.aZ(-34,-6))
a8.E(new B.cn(0,22,34,-6))
r=B.L()
r.b=A.ae
r.c=2
r.r=A.hY.gp(0)
b9.af(a8,r)
for(r=c1*2.4,u=0;u<5;++u){a9=(u+0.5)/5
q=-34+68*a9
p=-6+4*a9*(1-a9)*4*4.2/1*0.75+0
b0=b7&&A.h.F(r+u*0.7,1.8)<1.1
if(b0){b1=new B.ar(A.V,A.R,A.X,A.Y,A.W)
b1.r=D.a78[u].j(0.6).gp(0)
b1.y=A.I7
b9.O(new B.m(q+0,p+6),12,b1)}b1=B.a([],s)
b2=new B.aI(b8,A.ak,b6,b6,b1)
b1.push(new B.aZ(q-3,p))
b2.ac()
b3=new B.aq(q+3,p)
b1.push(b3)
b4=b2.f
if(b4!=null)b3.aj(b4)
b2.ac()
b3=p+11
b4=new B.aq(q+5,b3)
b1.push(b4)
b5=b2.f
if(b5!=null)b4.aj(b5)
b2.ac()
q=new B.cn(q,p+17,q-5,b3)
b1.push(q)
p=b2.f
if(p!=null)q.aj(p)
b2.ac()
q=new B.bz()
b1.push(q)
p=b2.f
if(p!=null)q.aj(p)
b2.ac()
q=new B.ar(A.V,A.R,A.X,A.Y,A.W)
if(b0)p=D.a78[u]
else{p=B.ap(D.a78[u],A.v,0.65)
p.toString}q.r=p.gp(0)
b9.af(b2,q)}return!0}return C.iIA(b9,c0,c1,c2)},
h8:function h8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
htH(d){var w=D.mN.h(0,d)
return(w==null?null:w.b)===D.Bs},
iJR(d,e,f){return B.a7(d,!1).ca(B.vK(null,!1,!0,!0,new C.he_(e,f),A.f2,null,A.pX,new C.he0(),x.H))},
KJ:function KJ(d,e){this.a=d
this.b=e},
mv:function mv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
he_:function he_(d,e){this.a=d
this.b=e},
he0:function he0(){},
WV:function WV(d,e,f){this.c=d
this.d=e
this.a=f},
aGU:function aGU(d,e,f){var _=this
_.d=$
_.e=null
_.r=_.f=!1
_.w=-99
_.x=d
_.z=_.y=0
_.bw$=e
_.ab$=f
_.c=_.a=null},
e3u:function e3u(d,e){this.a=d
this.b=e},
e3v:function e3v(d,e,f){this.a=d
this.b=e
this.c=f},
e3F:function e3F(d,e,f){this.a=d
this.b=e
this.c=f},
e3t:function e3t(d,e){this.a=d
this.b=e},
e3s:function e3s(d,e){this.a=d
this.b=e},
e3G:function e3G(d,e){this.a=d
this.b=e},
e3H:function e3H(d){this.a=d},
e3m:function e3m(d,e){this.a=d
this.b=e},
e3l:function e3l(d,e){this.a=d
this.b=e},
e3k:function e3k(d){this.a=d},
e3D:function e3D(){},
e3z:function e3z(d){this.a=d},
e3A:function e3A(d){this.a=d},
e3B:function e3B(d){this.a=d},
e3C:function e3C(d){this.a=d},
e3I:function e3I(d){this.a=d},
e3y:function e3y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e3w:function e3w(){},
e3x:function e3x(d){this.a=d},
e3E:function e3E(d,e){this.a=d
this.b=e},
e3r:function e3r(d,e){this.a=d
this.b=e},
e3p:function e3p(d){this.a=d},
e3q:function e3q(d){this.a=d},
e3j:function e3j(d){this.a=d},
e3o:function e3o(d,e,f){this.a=d
this.b=e
this.c=f},
e3n:function e3n(d){this.a=d},
bAS:function bAS(d,e,f){this.b=d
this.c=e
this.a=f},
ahc:function ahc(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aPA:function aPA(){},
a3d(d,e,f,g,h,i){return new C.bzE(d,e,f,g,h,i)},
bzE:function bzE(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fEc:function fEc(){},
fEd:function fEd(){},
fEe:function fEe(){},
fEf:function fEf(){},
fEg:function fEg(){},
fEh:function fEh(){},
fEi:function fEi(){},
fEj:function fEj(){},
aaK:function aaK(d){this.a=d},
cqD:function cqD(d){this.a=d},
cqE:function cqE(){},
cqC:function cqC(d,e){this.a=d
this.b=e},
cqB:function cqB(d){this.a=d},
YB:function YB(d){this.a=d},
aID:function aID(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.hg$=f
_.mk$=g
_.fi$=h
_.hh$=i
_.bw$=j
_.ab$=k
_.c=_.a=null},
f4h:function f4h(d){this.a=d},
f4d:function f4d(d){this.a=d},
f4c:function f4c(d,e){this.a=d
this.b=e},
f4f:function f4f(d,e){this.a=d
this.b=e},
f4e:function f4e(d,e){this.a=d
this.b=e},
f4g:function f4g(d){this.a=d},
bB3:function bB3(d,e,f){this.b=d
this.c=e
this.a=f},
Xj:function Xj(d){this.a=d},
boT:function boT(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.hg$=d
_.mk$=e
_.fi$=f
_.hh$=g
_.bw$=h
_.ab$=i
_.c=_.a=null},
ebg:function ebg(){},
ebh:function ebh(){},
ebb:function ebb(d,e){this.a=d
this.b=e},
ebd:function ebd(d,e){this.a=d
this.b=e},
ebe:function ebe(d){this.a=d},
ebc:function ebc(d){this.a=d},
ebf:function ebf(d){this.a=d},
bvH:function bvH(d,e,f){this.b=d
this.c=e
this.a=f},
Wu:function Wu(d){this.a=d},
bor:function bor(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.hg$=d
_.mk$=e
_.fi$=f
_.hh$=g
_.bw$=h
_.ab$=i
_.c=_.a=null},
dVD:function dVD(){},
dVE:function dVE(){},
dVy:function dVy(){},
dVB:function dVB(d,e){this.a=d
this.b=e},
dVA:function dVA(d,e){this.a=d
this.b=e},
dVC:function dVC(d){this.a=d},
dVz:function dVz(d){this.a=d},
aMa:function aMa(d,e,f){this.a=d
this.b=e
this.c=f},
Xa:function Xa(d){this.a=d},
boK:function boK(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
e72:function e72(d,e){this.a=d
this.b=e},
e73:function e73(d){this.a=d},
e71:function e71(d,e){this.a=d
this.b=e},
e74:function e74(d){this.a=d},
e70:function e70(d,e){this.a=d
this.b=e},
e75:function e75(d){this.a=d},
e7_:function e7_(d,e){this.a=d
this.b=e},
e76:function e76(d,e){this.a=d
this.b=e},
e6Z:function e6Z(d,e){this.a=d
this.b=e},
e77:function e77(d){this.a=d},
e6Y:function e6Y(d,e){this.a=d
this.b=e},
e78:function e78(d){this.a=d},
e6X:function e6X(d){this.a=d},
e79:function e79(d){this.a=d},
e6W:function e6W(d){this.a=d},
e7a:function e7a(d){this.a=d},
e7b:function e7b(d){this.a=d},
e6V:function e6V(d){this.a=d},
bqO:function bqO(d,e,f){this.b=d
this.c=e
this.a=f},
XX:function XX(d){this.a=d},
aHT:function aHT(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
ezc:function ezc(d,e){this.a=d
this.b=e},
ezd:function ezd(d,e,f){this.a=d
this.b=e
this.c=f},
ezb:function ezb(d,e,f){this.a=d
this.b=e
this.c=f},
eze:function eze(d){this.a=d},
eza:function eza(d){this.a=d},
ezi:function ezi(d){this.a=d},
ezh:function ezh(d,e){this.a=d
this.b=e},
ezg:function ezg(d,e){this.a=d
this.b=e},
ezj:function ezj(d,e){this.a=d
this.b=e},
ezf:function ezf(d,e){this.a=d
this.b=e},
ezk:function ezk(d){this.a=d},
Y8:function Y8(d){this.a=d},
aIg:function aIg(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eMk:function eMk(d){this.a=d},
eMl:function eMl(d){this.a=d},
eMi:function eMi(d,e){this.a=d
this.b=e},
eMj:function eMj(d){this.a=d},
eMh:function eMh(d){this.a=d},
eMm:function eMm(d){this.a=d},
eMn:function eMn(d){this.a=d},
eMo:function eMo(d){this.a=d},
eMp:function eMp(d,e){this.a=d
this.b=e},
Ys:function Ys(d){this.a=d},
bq1:function bq1(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
f_D:function f_D(){},
f_M:function f_M(){},
f_I:function f_I(d){this.a=d},
f_H:function f_H(){},
f_J:function f_J(d,e){this.a=d
this.b=e},
f_G:function f_G(d,e){this.a=d
this.b=e},
f_K:function f_K(d){this.a=d},
f_F:function f_F(d,e){this.a=d
this.b=e},
f_L:function f_L(d){this.a=d},
f_E:function f_E(d){this.a=d},
XW:function XW(d){this.a=d},
bpv:function bpv(d,e,f,g,h,i,j,k){var _=this
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
_.hg$=f
_.mk$=g
_.fi$=h
_.hh$=i
_.bw$=j
_.ab$=k
_.c=_.a=null},
exS:function exS(){},
exT:function exT(){},
exL:function exL(d){this.a=d},
exK:function exK(d){this.a=d},
exM:function exM(d){this.a=d},
exJ:function exJ(d){this.a=d},
exN:function exN(d){this.a=d},
exI:function exI(d){this.a=d},
exO:function exO(d,e){this.a=d
this.b=e},
exH:function exH(d,e){this.a=d
this.b=e},
exP:function exP(d){this.a=d},
exG:function exG(d,e){this.a=d
this.b=e},
exQ:function exQ(d){this.a=d},
exF:function exF(d,e){this.a=d
this.b=e},
exR:function exR(d){this.a=d},
exE:function exE(d,e){this.a=d
this.b=e},
bif:function bif(d,e,f){this.c=d
this.d=e
this.a=f},
aPm:function aPm(){},
bCM:function bCM(){},
aPH:function aPH(){},
bCS:function bCS(){},
aQ7:function aQ7(){},
bD1:function bD1(){},
aQA:function aQA(){},
bDa:function bDa(){},
Kf(d,e,f,g){var w,v,u,t,s,r,q,p=$.avi
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.I)(e),++w)E.mR(d,e[w],f,g)
return}for(p=B.cJ(e,0,B.dx(4,"count",x.S),B.T(e).c),v=p.$ti,p=new B.bQ(p,p.gI(0),v.k("bQ<aj.E>")),u=x.H,v=v.k("aj.E"),t=0;p.B();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)E.mR(d,s,f,g)
else B.bM(new B.bh(1000*q),new C.cqz(d,s,f,g),u)}},
cnV(d){return C.icN(d)},
icN(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$cnV=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aB(),$async$cnV)
case 7:r=f
q=B.aV(J.t(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.S(x.N,x.z)
w=1
break}p=A.T.aN(0,q,null)
o=x.N
n=x.z
o=x.f.b(p)?B.a0(p,o,n):B.S(o,n)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
u=B.S(x.N,x.z)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$cnV,v)},
b5J(d,e){return C.icO(d,e)},
icO(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b5J=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aB(),$async$b5J)
case 6:s=g
w=7
return B.b(s.aB("String","ngmy_play_progress_v1_"+d,A.T.au(e,null)),$async$b5J)
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
return B.i($async$b5J,v)},
cqz:function cqz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
iyP(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.S(x.Y,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.B)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.I)(w),++q){p=w[q]
u.push(B.J(["k",p.b,"x",B.oS(A.h.a1(p.c,4)),"y",B.oS(A.h.a1(p.d,4)),"v",p.e,"l",B.oS(A.h.a1(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.oS(A.h.a1(p.as,3)),"ch",p.at,"vc",B.oS(A.h.a1(p.z,3)),"s",B.oS(A.h.a1(p.ch,2))],s,r))}w=B.a([],x.U)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.I)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.B(f,B.a3(f).k("cl.E"))
A.d.fg(l)
return A.T.au(B.J(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
iJ_(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.T.aN(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a7(h)
A.d.a7(a6.b)
v=B.a([],x.fs)
g=x.R
f=g.a(J.t(w,"parts"))
f=J.aN(f==null?A.bM:f)
while(f.B()){u=f.gP(f)
t=i.a(u)
e=B.aV(J.t(t,"k"))
s=e==null?"":e
if(!$.r_().am(0,s)){J.bW(v,null)
continue}d=s
a0=B.aK(J.t(t,"x"))
if(a0==null)a0=0.5
a1=B.aK(J.t(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.uk(a2,d,a0,a1)
a3.au6(a2,d,a0,a1)
h.push(a3)
r=a3
a1=B.aK(J.t(t,"v"))
d=a1==null?r.e:a1
r.e=d
d=B.aK(J.t(t,"l"))
if(d==null)d=r.f
r.f=d
d=B.aK(J.t(t,"o"))
if(d==null)d=r.r
r.r=d
d=B.kn(J.t(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.kn(J.t(t,"b"))
r.x=d===!0
d=B.aV(J.t(t,"bw"))
if(d==null)d=""
r.ay=d
d=B.aK(J.t(t,"c"))
if(d==null)d=r.as
r.as=d
d=B.aK(J.t(t,"ch"))
r.at=A.h.M(d==null?0:d)
d=B.aK(J.t(t,"vc"))
if(d==null)d=0
r.z=d
d=B.aK(J.t(t,"s"))
r.ch=A.h.D(d==null?1:d,1,5.2)
J.bW(v,r)}i=g.a(J.t(w,"wires"))
i=J.aN(i==null?A.bM:i)
h=x.j
while(i.B()){q=i.gP(i)
p=h.a(q)
f=B.aK(J.t(p,0))
o=f==null?a5:A.h.M(f)
f=B.aK(J.t(p,2))
n=f==null?a5:A.h.M(f)
if(o==null||n==null||o<0||n<0||o>=J.aa(v)||n>=J.aa(v))continue
m=J.t(v,o)
l=J.t(v,n)
if(m!=null&&l!=null)a6.ao_(m,A.h.M(B.dA(J.t(p,1))),l,A.h.M(B.dA(J.t(p,3))))}i=B.aK(J.t(w,"challenge"))
i=A.h.M(i==null?0:i)
k=B.aR(x.S)
h=g.a(J.t(w,"done"))
h=J.aN(h==null?A.bM:h)
while(h.B()){j=h.gP(h)
J.bW(k,A.h.M(B.dA(j)))}return new B.btM(i,k)}catch(a4){return a5}},
fW5(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fW5=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.aB(),$async$fW5)
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
return B.i($async$fW5,v)},
bJN(d){return C.iKH(d)},
iKH(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bJN=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.aB(),$async$bJN)
case 7:w=6
return B.b(f.aB("String","ngmy_electronics_lab_v1",d),$async$bJN)
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
return B.i($async$bJN,v)},
h25(d,e,f){var w=0,v=B.j(x.I),u,t,s,r,q,p
var $async$h25=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(d.c===e&&d.d===f){u=d
w=1
break}$.U()
t=new B.p2(new B.oD())
s=B.va(t,null)
r=B.L()
r.r=A.c7.gp(0)
s.aE(new B.a5(0,0,e,f),r)
s.bjy(0,d,A.J,B.L())
q=t.n9()
w=3
return B.b(q.vY(e,f),$async$h25)
case 3:p=h
q.t()
d.t()
u=p
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h25,v)}},D,V,A3,As,K,F,M,H,At,Au,Av,A4,Aw
J=c[1]
B=c[0]
A=c[2]
W=c[143]
A9=c[180]
A5=c[126]
N=c[90]
Aa=c[153]
A6=c[179]
Ab=c[185]
A7=c[184]
X=c[175]
P=c[46]
Y=c[171]
Ac=c[167]
O=c[178]
Ad=c[182]
Ae=c[188]
Af=c[193]
Ag=c[139]
Ah=c[169]
Ai=c[106]
Z=c[107]
Aj=c[186]
Ak=c[92]
Al=c[190]
Am=c[81]
A_=c[173]
U=c[89]
An=c[93]
Q=c[162]
Ao=c[147]
A0=c[158]
R=c[192]
S=c[163]
A1=c[177]
T=c[176]
A2=c[189]
Ap=c[137]
E=c[34]
I=c[3]
G=c[45]
L=c[141]
Aq=c[135]
Ar=c[155]
A8=c[191]
C=a.updateHolder(c[23],C)
D=c[172]
V=c[187]
A3=c[181]
As=c[31]
K=c[33]
F=c[133]
M=c[131]
H=c[174]
At=c[104]
Au=c[121]
Av=c[71]
A4=c[183]
Aw=c[62]
C.amL.prototype={}
C.XG.prototype={
R(){return new C.bpj(B.S(x.N,x.i),new B.au(A.ay,$.ay()),B.a([],x.X),B.a([],x.eZ),B.m2(0,null,null))}}
C.bpj.prototype={
gYc(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
t(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
this.ch.t()
this.a3()},
QT(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$QT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aS.bl$.d.c
if(s!=null)s.j7()
p.bN(0,A.ck)
t.l(new C.eqU(t))
t.a.toString
p=t.gYc()
w=3
return B.b(C.bF5(C.ilZ(q,C.iyA(p),o,t.ay)),$async$QT)
case 3:s=e
r=s==null?null:J.j_(s)
if(r==null||r.length===0||A.a.Y(r,"{"))r=C.iA6(q,p,o)
if(t.c==null){w=1
break}t.l(new C.eqV(t,o,r))
$.aS.U$.push(new C.eqW(t))
case 1:return B.h(u,v)}})
return B.i($async$QT,v)},
a_i(d){return this.c6M(d)},
b02(){return this.a_i(null)},
c6M(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a_i=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aS.bl$.d.c
if(s!=null)s.j7()
t.f.sb1(0,o)
t.l(new C.er6(t))
G.dI(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bF5(C.itA(o)),$async$a_i)
case 3:r=n.a=m.iIF(f)
p.b=""
if(r!=null&&!C.iyB(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.iA7(o)
q=B.ag(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.amL(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.l(new C.er7(p,t))
t.ccH(p.a)
case 1:return B.h(u,v)}})
return B.i($async$a_i,v)},
ccH(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
A.d.a7(w)
w=++m.as
v=m.gYc()
A.d.a7(v.a)
A.d.a7(v.b)
m.e.a7(0)
m.l(new C.er2(m))
t=d.d
s=B.S(x.N,x.Y)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.er0(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.er3(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.I)(r),++u){p.$2(o,new C.er4(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.er5(m,d))},
C(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bk.j(0.1),g=B.n(16),f=B.K(A.bk.j(0.35),A.r,1)
if(m.x)j=B.A(B.a([D.fCe,A.bd,B.E(B.c(m.Q,l,l,l,l,l,l,A.yb,l,l,l),1)],x.p),A.l,l,A.e,A.i,0,l,l)
else if(k==null)j=D.h2S
else{w=B.E(B.c(k.a,l,l,l,l,l,l,A.M2,l,l,l),1)
v=x.p
w=B.a([B.A(B.a([w,B.c(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fNq,l,l,l)],v),A.l,l,A.e,A.i,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.C(A.rk,B.c(u,l,l,l,l,l,l,D.fQl,l,l,l),l))
w.push(A.cR)
w.push(B.c(k.b,l,l,l,l,l,l,A0.FV,l,l,l))
u=k.e
if(u.length!==0){t=A.aQ.j(0.12)
s=B.n(10)
w.push(B.q(l,B.c(u,l,l,l,l,l,l,D.fT3,l,l,l),A.f,l,l,new B.p(t,l,l,s,l,l,A.m),l,l,l,A.hA,A.ct,l,l,l))}w.push(A.aj)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
t=B.c(t,l,l,l,l,l,l,A.mh,l,l,l)
q=u[r]
s=s?A.c:A.aE
w.push(new B.C(A.HN,new B.c_(A.aJ,A.e,A.i,A.B,l,A.p,l,0,B.a([t,A.b6,new B.bu(1,A.b9,B.c(q,l,l,l,l,l,l,new B.F(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.I)(j),++p){o=j[p]
t=A.bk.j(0.3)
s=new B.aQ(12,12)
s=B.q(l,B.c(o.a,l,l,l,l,l,l,A.Xf,l,l,l),A.f,l,l,new B.p(t,l,l,new B.bc(s,s,s,s),l,l,A.m),l,l,l,l,A.h0,l,l,l)
t=A.c.j(0.07)
q=new B.aQ(12,12)
A.d.u(w,B.a([A.N,new B.bJ(A.a9,l,l,s,l),A.at,B.q(l,B.c(o.b,l,l,l,l,l,l,D.fYX,l,l,l),A.f,l,l,new B.p(t,l,l,new B.bc(q,q,q,q),l,l,A.m),l,l,l,l,A.bS,l,l,l)],v))}if(m.ax)w.push(D.eJL)
j=B.cc(B.w(w,A.B,l,A.e,A.i,0,A.p),A.t,m.ch,A.y,l,l,l,l,l,A.ah)}w=x.p
g=B.w(B.a([B.akV(B.q(l,j,A.f,l,new B.aX(0,1/0,0,i),new B.p(h,l,f,g,l,l,A.m),l,l,l,D.bH4,A.er,l,l,1/0),A.b0,A.ig),B.E(C.hyM(m.gYc(),l,l,m.e),1)],w),A.l,l,A.e,A.i,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new E.e5("Ask about it",i,new C.era(m),l,A.bk,l),new E.e5("Invent something new",!i,new C.erb(m),l,A.bk,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dF2[p]
i.push(new E.e5(n,!1,new C.erc(m,n),l,A.bk,l))}f.push(new E.fm(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.dl_[p]
i.push(new E.e5(r,!1,new C.erd(m,r),l,A.bk,l))}f.push(new E.fm(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aO(l,A.M,!1,l,!0,A.t,l,B.aP(),m.f,l,l,l,l,l,2,B.bB(l,new B.b5(4,B.n(16),A.a1),l,A.f3,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.jP,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.am,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.ere(m,k),l,!1,l,l,!1,l,!0,l,A.ad,l,l,l,l,l,l,l,l,l,l,l,A.du,!0,A.a7,l,A.ao,l,A.X3,l,l),1)
h=m.at
v=h&&j?D.bXh:A.e8
j=h&&j?"Ask":"Invent"
f.push(B.A(B.a([i,A.aa,new E.fL(v,j,new C.erf(m,k),A.bk,l)],w),A.l,l,A.e,A.i,0,l,l))
return E.m3(A.bk,A.fh,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.w(f,A.l,l,A.e,A.P,0,A.p))}}
C.Hq.prototype={}
C.vS.prototype={}
C.Y3.prototype={
R(){return new C.aI7(A.J,A.J,A.aB,B.aR(x.S),$,A.bI,0,B.a([],x.X),null,null)}}
C.aI7.prototype={
gb1n(){var w,v,u,t=this,s=D.Ju[t.cx],r=D.Uo[t.cy],q=D.Ey[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.e8(w,w.r,B.a3(w).c),v=w.$ti.c;w.B();){u=w.d
p.push(D.aDN[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cH(p,0,new C.eGr())},
ga56(){return D.Ju[this.cx].d/this.gb1n()},
gaTe(){return 0.1*(D.Ju[this.cx].d/0.9)/D.Uo[this.cy].d},
Z(){this.a4()
this.mv()
C.cnV("rocket_lander").bC(new C.eGL(this),x.k)},
ccQ(){var w=this
w.ay=A.h.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cW.ai()*0.6
w.f=new B.m(0.15+A.cW.ai()*0.7,0.08)
w.r=new B.m((A.cW.ai()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
mO(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.l(new C.eGM())
return}w=D.u6[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.h.D(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.m(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga56()
v=v.a6(0,new B.m(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaTe())}if(m.dy){t=m.r
v=v.aI(0,t.aM(0,t.gcF()*6*D.aFS[m.d]))}t=m.r=m.r.a6(0,v.aM(0,d))
s=m.f=m.f.a6(0,t.aM(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new B.m(-t.a*0.4,t.b)
t=new B.m(A.h.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new B.m(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.Ey[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b5J("rocket_lander",B.J(["unlocked",t],x.N,x.z))
C.Kf("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga56()/(D.u6[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.h.a1(m.ga56()/(D.u6[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
G.dI(80,"",500,0,0.6,"noise")
B.fX()}}if(m.Q&&m.x>0&&A.n.F(A.h.bc(m.CW*20),2)===0)G.dI(90,"",70,0,0.12,"noise")
m.l(new C.eGN())},
aj6(d,e,f,g,h){var w,v=null,u=B.c(d,v,v,v,v,v,v,D.fPQ,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new E.e5(e[w].a,f.$1(w),new C.eGt(this,g,w),v,h,v))
return new B.C(A.ey,B.w(B.a([u,A.cR,B.bY(A.bH,s,A.bq,v,6,6)],t),A.B,v,A.e,A.i,0,A.p),v)},
bLk(d){var w,v,u,t,s=this,r=null,q=s.ga56()/(D.u6[s.d].b/9.81*0.28)>=1,p=A.h.S(1/s.gaTe()),o=D.aFS[s.d],n=B.n(24),m=d.c,l=B.K(m.j(0.6),A.r,1)
m=B.a([B.c("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.at,B.c(d.d+" Gravity here: "+B.v(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.adC,r,r,r),A.S,s.aj6("ENGINE: "+D.Ju[s.cx].b,D.Ju,new C.eGi(s),new C.eGj(s),A.cX),s.aj6("FUEL TANK: "+D.Uo[s.cy].b,D.Uo,new C.eGk(s),new C.eGl(s),A.bf),s.aj6("LANDING GEAR: "+D.Ey[s.db].b,D.Ey,new C.eGm(s),new C.eGn(s),A.aH),s.aj6("EXTRAS (tap to add)",D.aDN,new C.eGo(s),new C.eGp(s),A.bk)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.hme)
o=(q?A.bf:A.c2).j(0.14)
w=B.n(12)
v=A.h.a1(s.gb1n(),2)
u=A.h.a1(s.ga56()/(D.u6[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.q(r,B.c("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.h.S(D.Ey[s.db].d*100)+".",r,r,r,r,r,r,D.fQv,r,r,r),A.f,r,r,new B.p(o,r,r,w,r,r,A.m),r,r,r,A.hA,A.bS,r,r,r))
m.push(A.S)
m.push(new B.bJ(A.z,r,r,new E.fL(A.ol,"Launch",new C.eGq(s),A.bf,r),r))
return B.at(B.q(r,B.cc(B.w(m,A.B,r,A.e,A.P,0,A.p),A.t,r,A.y,r,r,A.bR,r,r,A.ah),A.f,r,A.mm,new B.p(D.bwC,r,l,n,r,r,A.m),r,r,r,A.bS,r,r,r,r),r,r,r)},
b2A(d,e,f,g){var w=null,v=f?A.cX:A.c.j(0.1),u=B.n(18),t=B.K(A.aT,A.r,1)
return B.n9(A.j6,B.q(w,B.V(d,A.c,w,w,w,30),A.f,w,w,new B.p(v,w,t,u,w,w,A.m),w,62,w,w,w,w,w,g),w,new C.eGf(e),new C.eGg(e),w,w,w,w,new C.eGh(e))},
b2z(d,e,f){return this.b2A(d,e,f,74)},
C(d){var w,v,u,t,s=this,r=null,q=B.cg(new C.eGE(s,D.u6[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.u6[w].a:"\ud83d\udd12"
o.push(new E.e5(v,s.d===w,new C.eGF(s,w),r,D.u6[w].c,r))}v=B.a([s.b2z(F.ata,new C.eGG(s),s.y),A.bd,s.b2A(A.vF,new C.eGH(s),s.Q,130),A.bd,s.b2z(A.Ri,new C.eGI(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?A.aH:A.c.j(0.1)
t=B.n(18)
A.d.u(v,B.a([A.bd,B.aA(r,B.q(r,D.c0G,A.f,r,r,new B.p(u,r,B.K(A.aT,A.r,1),t,r,r,A.m),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eGJ(s),r,r,r,r,r,r,!1,A.a4)],p))}return E.m3(A.cX,A.fh,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.w(B.a([new E.fm(o,"WORLD",r),B.A(v,A.l,r,A.bc,A.i,0,r,r)],p),A.l,r,A.e,A.P,0,A.p))}}
C.bma.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=this.b,l=D.u6[m.d],k=a1.a,j=a1.b,i=0+k,h=0+j,g=$.U(),f=B.L(),e=l.c,d=B.ap(I.a10,e,0.25)
d.toString
f.san(new B.a6(A.aV,A.b_,A.w,B.a([F.ajQ,d],x.O),n,n).az(0,new B.a5(0,0,i,h)))
a0.aE(new B.a5(0,0,i,h),f)
w=new B.e6()
w.cW(5)
for(v=0;v<70;++v){i=w.ai()
h=w.ai()
f=w.ai()
d=new B.ar(A.V,A.R,A.X,A.Y,A.W)
d.r=A.c.j(0.2+w.ai()*0.5).gp(0)
a0.O(new B.m(i*k,h*j*0.8),f*1.2+0.3,d)}u=j*0.88
i=x.v
h=B.a([],i)
t=new B.aI(g.r,A.ak,n,n,h)
t.E(new B.aZ(0,u+14))
s=new B.e6()
s.cW(2)
for(r=0;r<=k;r+=18){g=new B.aq(r,u+(Math.abs(r/k-m.ax)<m.ay/2+0.02?14:14-s.ai()*18))
h.push(g)
f=t.f
if(f!=null)g.aj(f)
t.ac()}t.E(new B.aq(k,j))
t.E(new B.aq(0,j))
t.E(new B.bz())
h=$.U()
g=B.L()
g.r=B.ap(e,A.v,0.6).gp(0)
a0.af(t,g)
q=B.c1(new B.m(m.ax*k,u+10),8,m.ay*k)
g=B.bx(q,A.jL)
e=B.L()
e.r=A.bh.gp(0)
a0.aq(g,e)
e=B.bx(q.cu(2),A.pp)
g=B.L()
g.b=A.ae
g.c=2
g.r=A.c.j(0.5+0.3*Math.sin(m.CW*4)).gp(0)
a0.aq(e,g)
if(m.as==="ready")return
g=m.f
f=a0.c
J.bs(f.save())
f.translate(g.a*k,g.b*j)
a0.jz(0,m.w)
k=m.as
if(k==="crashed"){m=B.L()
m.r=A.cX.j(0.6).gp(0)
m.y=A_.PU
a0.O(A.J,34,m)
f.restore()
return}if(m.Q&&m.x>0&&k==="flying"){k=h.r
p=new B.aI(k,A.ak,n,n,B.a([],i))
p.E(new B.aZ(-8,18))
p.E(new B.aq(0,44+Math.sin(m.CW*40)*8))
p.E(new B.aq(8,18))
p.E(new B.bz())
m=B.L()
m.r=A.aQ.gp(0)
a0.af(p,m)
k=new B.aI(k,A.ak,n,n,B.a([],i))
k.E(new B.aZ(-4,18))
k.E(new B.aq(0,32))
k.E(new B.aq(4,18))
k.E(new B.bz())
m=B.L()
m.r=A.c.gp(0)
a0.af(k,m)}m=h.r
o=new B.aI(m,A.ak,n,n,B.a([],i))
o.E(new B.aZ(0,-26))
o.E(new B.cn(14,-10,11,18))
o.E(new B.aq(-11,18))
o.E(new B.cn(-14,-10,0,-26))
o.E(new B.bz())
k=B.L()
k.san(F.awa.az(0,D.ftE))
a0.af(o,k)
k=B.L()
k.r=A.aH.gp(0)
a0.O(H.wd,5,k)
k=new B.aI(m,A.ak,n,n,B.a([],i))
k.E(new B.aZ(-11,6))
k.E(new B.aq(-20,20))
k.E(new B.aq(-11,18))
k.E(new B.bz())
j=B.L()
j.r=A.aC.gp(0)
a0.af(k,j)
i=new B.aI(m,A.ak,n,n,B.a([],i))
i.E(new B.aZ(11,6))
i.E(new B.aq(20,20))
i.E(new B.aq(11,18))
i.E(new B.bz())
m=B.L()
m.r=A.aC.gp(0)
a0.af(i,m)
f.restore()},
aD(d){return!0}}
C.aQg.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.bD3.prototype={
t(){var w,v,u
for(w=this.hh$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hg$
w===$&&B.d()
w.t()
this.bD6()}}
C.aWD.prototype={}
C.a5F.prototype={}
C.bf0.prototype={}
C.Wt.prototype={
R(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.eA(["skin"],x.N),o=new Float32Array(0)
return new C.aGx(w,v,u,t,s,r,q,new B.cB(null,x.A),p,D.N6,D.N6,A.aB,A.cW,o,new Int32Array(0),$,A.bI,0,B.a([],x.X),null,null)}}
C.aGx.prototype={
Z(){var w=this
w.a4()
w.mv()
w.as=new C.ca5(w.gcmh())
new C.dVw(w).$0()
return},
t(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a2(0)
v.d=null}this.bC9()},
cmi(d){var w,v=this
if(v.c==null)return
w=J.a1(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.ff(0,B.J(["t","init","data",$.hJ2],x.N,x.z))
v.at=!0
v.ay=""
v.aD9()
break
case"parts":v.l(new C.dV6(v))
break
case"pick":v.l(new C.dV7(v,d))
break
case"shot":v.akZ(B.v(w.h(d,"data")))
break
case"error":$.an.$1("[body viewer] "+B.v(w.h(d,"text")))
if(v.c!=null&&!v.ax)v.l(new C.dV8(v))
break}},
aD9(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.aBC[q.cx]
v=new C.dV9()
u=q.ch
u=B.B(u,B.a3(u).k("cl.E"))
A.d.fg(u)
t=x.N
s=B.J(["layers",u,"skinMode",q.CW,"tone","#"+B.v(v.$1(w.b))+B.v(v.$1(w.c))+B.v(v.$1(w.d)),"sel",q.cy,"bpm",A.h.S(q.k4),"spin",q.go],t,x.cK)
r=A.T.au(s,null)
if(r===q.ay)return
q.ay=r
v=q.as
if(v!=null){u=B.S(t,x.z)
u.n(0,"t","state")
u.u(0,s)
v.ff(0,u)}},
akZ(d){return this.cDV(d)},
cDV(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$akZ=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cM.aK(A.a.aV(d,A.a.c9(d,",")+1))
w=6
return B.b(B.ayG(B.a([B.cKs(r,"image/png","body.png")],x.fH),null,"Made in NGMY Core Protocol"),$async$akZ)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.L(x.q).f.T(I.aXD)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$akZ,v)},
aCx(d){var w=d.b
if(w==="skin")return this.CW>0
return this.ch.q(0,w)},
mO(d){var w,v=this
if(v.d==null)return
w=(v.k3+=d)*v.k4/60
if(v.ok&&v.ch.q(0,"organ")&&A.h.bc(w)!==A.h.bc(v.p1)){E.Yu("kick",0,0.4)
v.VL(170,new C.dVx())}v.p1=w
return},
agx(d){var w,v,u,t,s=this
s.l(new C.dVa(s,d))
if(d==null){s.fy=D.N6
s.fr=1
w=s.as
if(w!=null)w.ff(0,B.J(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.T(w).k("X<1>")
u=B.B(new B.X(w,new C.dVb(d),v),v.k("M.E"))
t=A.d.gH(u).b
if(t!=="skin"&&!s.ch.q(0,t)){s.ch.K(0,t)
if(s.CW===2)s.CW=1}s.aD9()
w=s.as
if(w!=null)w.ff(0,B.J(["t","focus","group",d],x.N,x.z))
s.id=0
s.cGs(t,d)
return},
cGs(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){E.Yu("kick",0,0.8)
this.VL(260,new C.dVc())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")G.dI(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.VL(w*70,new C.dVd(this))
else if(A.a.q(e,"intestine")||e==="Stomach")G.dI(110,"",360,0.7,0.3,"saw")
else E.hnO("organic",6+A.n.F(e.length,8),200,0.6)
break
case"bone":G.dI(210+e.length*4,"",80,0.6,0.55,"tri")
G.dI(2400,"",20,0,0.3,v)
break
case"muscle":G.dI(70,"",150,1,0.6,"sine")
break
case"vessel":G.dI(300,"",380,0.4,0.22,v)
E.Yu("kick",0,0.3)
break
default:E.hnO("organic",2+A.n.F(e.length,6),200,0.4)}},
cLe(d){this.l(new C.dVf(this,d))},
b2T(){var w,v,u,t,s,r,q,p=this,o=B.aR(x.N)
for(w=p.d.e,v=w.length,u=p.ch,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
if(p.aCx(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.K(0,s.a)}q=B.B(o,o.$ti.k("cl.E"))
w=q.length
if(w===0)return
p.p3=q[p.RG.aw(w)]
p.R8=""},
c2r(d){var w,v,u=this
u.id=0
if(u.p2&&u.p3!=null){if(d==null)return
w=d===u.p3
u.l(new C.dV3(u,w,d))
v=x.t
C.Kf("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.VL(1100,new C.dV4(u))
return}if(d==null){if(u.cy!=null)u.agx(null)
return}u.agx(d)},
c63(d,e){var w,v=this,u=null,t=B.n(18),s=B.K(A.c5.j(0.5),A.r,1)
if(v.p2){w=v.p3
w=B.c(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p4+"\n"+v.R8,u,u,u,u,u,u,D.fLK,u,u,u)}else if(d==null||e==null)w=D.h0a
else{w=x.p
w=B.A(B.a([B.E(B.w(B.a([B.c(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hk,u,u,u),A.cR,B.c(e.b,u,u,u,u,u,u,A0.FV,u,u,u)],w),A.B,u,A.e,A.P,0,A.p),1),B.aJ(u,u,u,u,D.c3p,u,u,u,new C.dV5(v),u,u,u,u,"Back to the whole body",A.cp)],w),A.B,u,A.e,A.i,0,u,u)}return B.q(u,w,A.f,u,u,new B.p(I.a_d,u,s,t,u,u,A.m),u,u,u,u,X.aos,u,u,u)},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:D.dRb.h(0,g)
i.aD9()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.dwp
u=v.length
t=i.ch
s=0
for(;s<v.length;v.length===u||(0,B.I)(v),++s){r=v[s]
if(i.aCx(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.q(w,q))w.push(q)}v=x.p
u=B.a([B.aJ(h,h,h,h,I.pc,h,h,h,new C.dVm(i),h,h,h,h,"Share",h)],v)
q=B.a([],v)
p=i.as
if((p==null?h:p.b!=null)===!0){p=p.b
q.push(p==null?A.bK:B.Cj(h,A.qt,p))}p=i.ax
o=p?0:1
q.push(new B.dn(p,B.xT(B.q(A.z,B.w(D.dGH,A.l,h,A.e,A.P,0,A.p),A.f,h,h,D.baW,h,h,D.hP8,h,h,h,h,h),A.b0,A.nk,o),h))
q=B.w(B.a([B.E(new B.am(A.a0,h,A.b5,A.t,q,h),1),new B.C(F.ao8,i.c63(g,f),h)],v),A.l,h,A.e,A.i,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){n=D.dmL[s]
o=n.a
m=o==="skin"
if(m){l=i.CW
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=n.b
o=m?i.CW>0:t.q(0,o)
p.push(new E.e5(l,o,new C.dVn(i,n),n.c,A.c5,h))}p=B.a([new E.fm(p,h,h)],v)
if(!i.p2&&w.length!==0){o=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.I)(w),++s){k=w[s]
o.push(new E.e5(k,k===i.cy,new C.dVo(i,k),h,A.aQ,h))}p.push(new E.fm(o,"FIND",h))}if(t.q(0,"organ")){o=i.k4
p.push(E.jh(A.c2,""+A.h.S(o)+" beats/min","Heart rate",180,40,new C.dVp(i),o))}if(i.CW>0&&t.a===0){o=B.a([],v)
for(j=0;j<5;++j)o.push(new E.GA(D.aBC[j],i.cx===j,new C.dVq(i,j),!1,h))
p.push(new E.fm(o,"SKIN",h))}o=i.go
m=i.p2
l=m?"Quiz on":"Quiz"
v=B.a([new E.e5("Spin",o,new C.dVr(i),D.as8,A.aH,h),new E.fL(A.mF,"Reset view",new C.dVs(i),A.c,h),new E.e5(l,m,new C.dVt(i),A.IN,A.aQ,h)],v)
if(t.q(0,"organ"))v.push(new E.e5("Heartbeat sound",i.ok,new C.dVu(i),T.pa,A.c2,h))
p.push(new E.fm(v,h,h))
return E.m3(A.c5,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.w(p,A.l,h,A.e,A.P,0,A.p))}}
C.aPk.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.aPl.prototype={
t(){var w,v,u
for(w=this.hh$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hg$
w===$&&B.d()
w.t()
this.bC8()}}
C.ca5.prototype={
kZ(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aD(e,"</script","<\\/script")
v=$.hQ2
$.hQ2=v+1
u="ngmy-body-viewer-"+v
$.xP()
$.qi().pA(u,new C.ca6(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fI(v,"message",new C.ca7(t),!1,x.gA)
t.b=u},
ff(d,e){var w,v
try{w=this.c
if(w!=null){w=B.Sh(w.contentWindow)
if(w!=null)J.akH(w,e,"*")}}catch(v){}}}
C.z5.prototype={}
C.Dt.prototype={}
C.o7.prototype={}
C.bfP.prototype={}
C.WA.prototype={
R(){var w=x.N,v=x.y,u=x.S
return new C.aGz(B.S(w,x.a2),B.a([],x.cB),B.S(w,v),B.S(w,v),B.S(w,u),A.aB,A.J,A.J,B.aR(u),$,A.bI,0,B.a([],x.X),null,null)}}
C.aGz.prototype={
Z(){var w=this
w.a4()
w.mv()
w.afr()
$.aS.U$.push(new C.dXc(w))},
afr(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$afr=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aB(),$async$afr)
case 6:q=e.nS("ngmy_circuit_passed_v1")
r=q==null?A.M:q
if(s.c!=null)s.l(new C.dWR(s,r))
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
return B.i($async$afr,v)},
afO(d){return this.cak(d)},
cak(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$afO=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.K(0,d)
u=3
w=6
return B.b(B.aB(),$async$afO)
case 6:r=f
q=s.cx
p=B.a3(q).k("ks<cl.E,o>")
q=B.B(new B.ks(q,new C.dWU(),p),p.k("M.E"))
r.aB("StringList","ngmy_circuit_passed_v1",q)
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
return B.i($async$afO,v)},
aB0(d,e,f,g){var w="c"+this.y++,v=new C.Dt(w,e,f,g)
this.d.n(0,w,v)
return v},
n3(d,e,f){return this.aB0(0,e,f,0)},
aeL(d,e){var w
if(D.B0.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a6(0,new B.m(-36,w))},
uG(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aXv(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fi$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.ds(w,w.r,w.e),r=!1;s.B();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.n.ec(m,D.d3C[A.n.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.uG(p,0)&&n.uG(p,1)
break
case"or":p=q.a
o=n.uG(p,0)||n.uG(p,1)
break
case"xor":p=q.a
o=n.uG(p,0)!==n.uG(p,1)
break
case"nand":p=q.a
o=!(n.uG(p,0)&&n.uG(p,1))
break
case"nor":p=q.a
o=!(n.uG(p,0)||n.uG(p,1))
break
case"not":o=!n.uG(q.a,0)
break
default:o=n.uG(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bVS(){return this.aXv(null)},
mO(d){var w,v,u,t,s,r,q,p,o,n=this
n.bVS()
if(!n.ax)return
for(w=n.d,w=new B.b9(w,B.a3(w).k("b9<2>")).gae(0),v=new B.eT(w,new C.dXd()),u=n.f,t=n.w,s=0;v.B();){r=w.gP(0).a
if(u.h(0,r)===!0){q=n.fi$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fi$)
o=s+1
G.dI(520+90*A.n.F(s,4),"",200,0,0.25,"square")
s=o}}},
aB1(d){var w=this
w.d.a7(0)
A.d.a7(w.e)
w.f.a7(0)
w.r.a7(0)
w.cy=null},
mx(d,e){var w=this.x
return new B.m(d*w.a,e*w.b)},
ax8(d){var w=this
if(w.x.A(0,A.aB)){$.aS.U$.push(new C.dWP(w,d))
return}w.l(new C.dWQ(w,d))},
cGL(d){this.l(new C.dWV(this,d,$.bKa()[d]))},
cfd(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bKa()[a0]
v=d.d
u=B.a3(v).k("b9<2>")
t=u.k("X<M.E>")
s=t.k("M.E")
r=B.B(new B.X(new B.b9(v,u),new C.dWK(),t),s)
A.d.b_(r,new C.dWL())
q=B.B(new B.X(new B.b9(v,u),new C.dWM(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.l(new C.dWN(d,w))
return}u=d.r
p=B.dE(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.n.dJ(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.n.h5(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aXv(0)
h=m.h(0,A.d.gH(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.lD(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aJ(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a7(0)
u.u(0,p)
d.l(new C.dWO(d,o,a0))},
aC2(d){var w,v,u,t,s=this.d,r=B.a3(s).k("b9<2>")
s=B.B(new B.b9(s,r),r.k("M.E"))
r=B.T(s).k("dp<1>")
s=new B.dp(s,r)
s=new B.bQ(s,s.gI(0),r.k("bQ<aj.E>"))
w=d.a
r=r.k("aj.E")
v=d.b
while(s.B()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
coT(d){var w,v,u,t,s,r=this.d,q=B.a3(r).k("b9<2>")
r=B.B(new B.b9(r,q),q.k("M.E"))
q=B.T(r).k("dp<1>")
r=new B.dp(r,q)
r=new B.bQ(r,r.gI(0),q.k("bQ<aj.E>"))
w=d.a
v=d.b
q=q.k("aj.E")
while(r.B()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c5X(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.ds(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.B();){r=w.d
q=D.B0.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.aeL(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.y(p,o)
s=l}}}return t},
bUC(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.aeL(p,o)
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
cff(d){var w,v,u,t=this,s=t.aC2(d)
if(s!=null){w=t.d.h(0,s)
w.toString
B.f4()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.n(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
G.dI(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.l(new C.dWW())
return}u=t.bUC(d)
if(u!=null)t.l(new C.dWX(t,u))
else t.l(new C.dWY(t))},
azP(d){return this.c9h(d)},
c9h(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$azP=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.aC2(d)
if(s==null){w=1
break}B.jJ()
t.l(new C.dWT(t,s))
case 1:return B.h(u,v)}})
return B.i($async$azP,v)},
bH3(d){if(this.x.A(0,A.aB))return
this.l(new C.dWJ(this,d,A.cW))
B.f4()},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bKa()[g]
g=x.p
v=B.a([B.aJ(h,h,h,h,B.V(i.ax?T.pa:A1.u1,A.ac,h,h,h,21),h,h,h,new C.dX6(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.n(16)
s=A.cw.j(0.14)
r=B.K(A.cw.j(0.5),A.r,1)
q=B.a([B.c("Challenge: "+w.a,h,h,h,h,h,h,D.fKR,h,h,h),B.c(w.b,h,h,h,h,h,h,A.Xt,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.C(A.kP,B.c(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.bf:A.f1,h,h,h,h,h,h,h,h,12,h,h,A.C,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.q(h,B.A(B.a([B.E(B.w(q,A.B,h,A.e,A.i,0,A.p),1),B.bH(D.hc2,h,i.gcfc(),B.bp(A.cw,h,h,h,h,h,h,h,h,h,h,A.cp))],g),A.l,h,A.e,A.i,0,h,h),A.f,h,h,new B.p(s,h,r,t,h,h,A.m),h,h,h,U.Pv,D.bHO,h,h,1/0))}u.push(B.E(B.cg(new C.dX7(i)),1))
if(f!=null){t=B.n(14)
s=A.c.j(0.06)
r=f.b
u.push(B.q(h,B.c(D.B0.h(0,r).a+": "+D.B0.h(0,r).e,h,h,h,h,h,h,Ak.uE,h,h,h),A.f,h,h,new B.p(s,h,h,t,h,h,A.m),h,h,h,A.a2e,A.bS,h,h,1/0))}u=B.w(u,A.l,h,A.e,A.i,0,A.p)
t=B.a([],g)
for(s=D.B0.gdW(D.B0),s=s.gae(s);s.B();){r=s.gP(s)
q=new B.aQ(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ax(o.j(0.5),1,A.r,-1)
t.push(B.aA(h,B.q(h,B.w(B.a([B.V(p.b,o,h,h,h,20),A.bs,B.c(p.a,h,h,h,h,h,h,D.aZJ,h,h,h)],g),A.l,h,A.e,A.P,0,A.p),A.f,h,h,new B.p(n,h,new B.bE(m,m,m,m),new B.bc(q,q,q,q),h,h,A.m),h,h,h,A.eY,A.Dd,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dX8(i,r),h,h,h,h,h,h,!1,A.a4))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dBj[l]
s.push(new E.fL(A.Rj,k.b,new C.dX9(i,k),A.cw,h))}s.push(new E.fL(I.xs,"Clear",new C.dXa(i),A.c2,h))
r=B.a([],g)
for(j=0;q=$.bKa(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?A.e9:A.m8
o=i.ay
n=i.cx.q(0,j)?A.bf:A.bu
r.push(new E.e5(q.a,o===j,new C.dXb(i,j),p,n,h))}return E.m3(A.cw,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.w(B.a([new E.fm(t,"PARTS",h),new E.fm(s,"TRY",h),new E.fm(r,"TASKS",h)],g),A.l,h,A.e,A.P,0,A.p))}}
C.bg6.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3=a6.a,a4=a6.b
$.U()
w=B.L()
w.r=D.ai3.gp(0)
a5.aE(new B.a5(0,0,0+a3,0+a4),w)
v=B.L()
v.r=A.c.j(0.05).gp(0)
for(u=20;u<a4;u+=28)for(t=14;t<a3;t+=28)a5.O(new B.m(t,u),1,v)
for(a3=this.b,a4=a3.e,w=a4.length,s=a3.f,r=x.v,q=a3.d,p=0;p<a4.length;a4.length===w||(0,B.I)(a4),++p){o=a4[p]
n=o.a
m=q.h(0,n)
l=q.h(0,o.b)
if(m==null||l==null)continue
k=m.c
j=k.a+36
k=k.b+0
i=a3.aeL(l,o.c)
h=s.h(0,n)===!0
n=$.U()
g=B.a([],r)
f=new B.aI(n.r,A.ak,a2,a2,g)
g.push(new B.aZ(j,k))
f.ac()
n=i.a
e=Math.max(40,Math.abs(n-j)*0.5)
d=i.b
d=new B.i6(j+e,k,n-e,d,n,d)
g.push(d)
n=f.f
if(n!=null)d.aj(n)
f.ac()
if(h){n=new B.ar(A.V,A.R,A.X,A.Y,A.W)
n.b=A.ae
n.c=9
n.r=A.bu.j(0.28).gp(0)
n.y=O.p1
a5.af(f,n)}n=new B.ar(A.V,A.R,A.X,A.Y,A.W)
n.b=A.ae
n.c=3.2
n.d=A.bG
n.r=(h?A.eK:A.bz).gp(0)
a5.af(f,n)}a0=a3.as
if(a0!=null&&q.h(0,a0)!=null){a1=q.h(0,a0).c.a6(0,D.KI)
i=a3.at
a3=i.a
a4=a1.a
e=Math.max(40,Math.abs(a3-a4)*0.5)
r=new B.aI($.U().r,A.ak,a2,a2,B.a([],r))
w=a1.b
r.E(new B.aZ(a4,w))
s=i.b
r.E(new B.i6(a4+e,w,a3-e,s,a3,s))
s=B.L()
s.b=A.ae
s.c=3
s.r=A.ac.gp(0)
a5.af(r,s)}for(a3=new B.ds(q,q.r,q.e);a3.B();)this.cfe(a5,a3.d)},
cfe(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.B0.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.c1(a0.c,64,64)
s=B.bx(t,A.k5)
r=w.cy===v
q=s.eM(A.cy)
$.U()
p=B.L()
p.r=A.v.j(0.55).gp(0)
p.y=A.no
d.aq(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.L()
p.san(new B.bU(A.z,0.5,A.w,g,0,B.a([e.c.j(0.6),A.L],x.O),g,g).az(0,B.c0(a0.c,52)))
d.O(q,52,p)}q=s.eM(A.cO)
p=B.L()
o=e.c
p.r=B.ap(o,A.v,0.65).gp(0)
d.aq(q,p)
n=u?0.35:0
q=B.L()
p=B.ap(o,A.c,0.1+n)
p.toString
m=B.ap(o,A.v,u?0.2:0.45)
m.toString
q.san(new B.a6(A.aV,A.b_,A.w,B.a([p,m],x.O),g,g).az(0,t))
d.aq(s,q)
q=B.L()
q.b=A.ae
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aq(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.p8:D.bXR}else l=e.b
k=C.hpE(B.lD(l.a),30,A.c,l.b,g,A.C)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a5(d,v.aI(0,new B.m(p/2,q.gb4(q)/2)))
j=C.hpE(e.a,10.5,A.c,g,g,A.C)
j.a5(d,a0.c.a6(0,new B.m(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.hpE(f,9,u?A.eK:A.bX,g,g,A.u)
i.a5(d,a0.c.a6(0,new B.m(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b3z(d,w.aeL(a0,h),o)
this.b3z(d,a0.c.a6(0,D.KI),o)},
b3z(d,e,f){var w
$.U()
w=B.L()
w.r=D.ai3.gp(0)
d.O(e,8.5,w)
w=B.L()
w.b=A.ae
w.c=2.2
w.r=f.gp(0)
d.O(e,8.5,w)
w=B.L()
w.r=A.c.gp(0)
d.O(e,3.2,w)},
aD(d){return!0}}
C.aPp.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.bCN.prototype={
t(){var w,v,u
for(w=this.hh$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hg$
w===$&&B.d()
w.t()
this.bCd()}}
C.OV.prototype={
R(){return new C.aGQ(B.m2(0,null,null))}}
C.LL.prototype={
a9(){return"_UnfoldStyle."+this.b}}
C.Bu.prototype={}
C.aGQ.prototype={
Z(){this.a4()
B.bM(A.pW,C.iHB(),x.H)},
cfl(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcs(0).at
v.toString
w.f=v}w.l(new C.e2m(w,e))},
c7V(){var w=this
w.e.t()
w.e=B.m2(w.f,null,null)
w.l(new C.e2l(w))},
t(){this.e.t()
this.a3()},
C(d){var w=this,v=null,u=w.d,t=u==null,s=t&&B.Q(d).ax.a===A.dg?A.c:A.c7
return B.pg(t,B.c6(v,s,t?new C.bwG(w.e,w.gcfk(w),new C.e2n(d),v):new C.aLg(u,new B.bb(u.b,x.W)),v,!1,!1,v,!1),new C.e2o(w,u),x.K)}}
C.byk.prototype={}
C.bwG.prototype={
b3A(d,e,f){var w=null,v=B.c(d,w,w,w,w,w,w,B.l(w,w,f?A.bF:A.c,w,w,w,w,w,w,w,w,12.5,w,w,A.u,w,w,!0,w,1.6,w,w,w,w,w,w),w,w,w)
return new B.C(X.a2H,B.w(B.a([v,A.bs,B.c(e,w,w,w,w,w,w,B.l(w,w,f?A.cz:A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.B,w,A.e,A.i,0,A.p),w)},
C(d){var w,v,u,t=this,s=null,r=B.Q(d).ax.a===A.dg,q=B.aF(d,A.dL,x.w).w,p=B.aJ(s,s,s,s,B.V(A.eH,r?A.bF:A.ac,s,s,s,20),s,s,D.hPB,t.e,s,s,s,s,s,s)
if(r)w=new B.p(A.c,s,s,B.n(14),A.Jy,s,A.m)
else{w=B.a([A.aH.j(0.22),A.aH.j(0.06)],x.O)
v=B.n(14)
w=new B.p(s,s,B.K(A.aH.j(0.75),A.r,1.6),v,B.a([new B.ac(0,A.H,A.aH.j(0.22),A.J,8)],x.V),new B.a6(A.aw,A.aD,A.w,w,s,s),A.m)}v=B.c("\ud83e\uddea Core Protocol",s,s,s,s,s,s,B.l(s,s,r?A.bF:A.c,s,s,s,s,s,s,s,s,15,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)
u=x.p
w=B.A(B.a([p,B.E(B.at(B.q(s,B.w(B.a([v,B.c("Play, make things, keep them.",s,s,s,s,s,s,B.l(s,s,r?A.cz:A.aR,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)],u),A.l,s,A.e,A.P,0,A.p),A.f,s,s,w,s,s,D.hPG,s,A6.ap_,s,s,s),s,s,s),1),A.ux],u),A.l,s,A.e,A.i,0,s,s)
v=t.b3A("STUDIOS","Play, make things, and keep what you make",r)
$.bKb()
return B.bn(!1,B.w(B.a([B.E(B.vb(0,s,A.t,t.c,A.y,s,s,s,s,s,!1,s,A.ah,!1,B.a([new B.nB(new B.R(8,q.r.b+6,8,4),new B.l3(w,s),s),new B.l3(v,s),new B.nB(A.ih,B.QF(new B.pj(new C.fj7(d),9,!0,!0,!0,0,B.tJ(),s),D.aXs),s),new B.l3(t.b3A("SCENES","Each one is a studio too: change the style, colours and words",r),s),new B.nB(D.bHX,B.QF(new B.pj(new C.fj8(t),6,!0,!0,!0,0,B.tJ(),s),D.aXs),s)],u)),1)],u),A.l,s,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!1)}}
C.ahw.prototype={
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m.d
if(B.Q(d).ax.a===A.dg){w=B.n(20)
v=(A.n.ao(o.c,3)&1)===0
u=B.a8C(v?A.aH:A.bk,20)
v=v?A.aH:A.bk
return B.aG(!1,A.a3,!0,n,B.aM(!1,w,!0,B.eJ(B.w(B.a([new B.Wy(v,44,m.c,n,n),A.N,B.c(m.a,n,2,A.a2,n,n,n,D.fRf,A.K,n,n),A.cR,B.c(m.b,n,2,A.a2,n,n,n,D.fUa,A.K,n,n)],x.p),A.l,n,A.bc,A.i,0,A.p),n,u,n,A.Du,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}w=B.n(20)
v=B.n(20)
u=B.ap(L.mt,l,0.3)
u.toString
t=x.O
u=B.a([u,D.alq],t)
s=B.K(l.j(0.6),A.r,1.2)
r=x.V
q=B.a([new B.ac(-4,A.H,l.j(0.22),A.J,14)],r)
p=B.ap(l,A.v,0.45)
p.toString
t=B.a([l,p],t)
r=B.a([new B.ac(0,A.H,l.j(0.5),A.J,12)],r)
return B.aG(!1,A.a3,!0,n,B.aM(!1,w,!0,B.eJ(B.w(B.a([B.q(n,B.V(m.c,A.c,n,n,n,24),A.f,n,n,new B.p(n,n,n,n,r,new B.a6(A.aw,A.aD,A.w,t,n,n),A.a6),n,44,n,n,n,n,n,44),A.N,B.c(m.a,n,2,A.a2,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,10.5,n,n,A.u,n,1.15,!0,n,0.5,n,n,n,n,n,n),A.K,n,n),A.cR,B.c(m.b,n,2,A.a2,n,n,n,B.l(n,n,A.c.j(0.6),n,n,n,n,n,n,n,n,9.5,n,n,n,n,1.2,!0,n,n,n,n,n,n,n,n),A.K,n,n)],x.p),A.l,n,A.bc,A.i,0,A.p),n,new B.p(n,n,s,v,q,new B.a6(A.aw,A.aD,A.w,u,n,n),A.m),n,A.Du,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}}
C.agj.prototype={
C(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.d,j=k.d,i=B.Q(d).ax.a===A.dg,h=(A.n.ao(this.c,3)&1)===0?A.aH:A.bk,g=B.n(20)
if(i)w=B.a8C(h,20)
else{w=B.n(20)
v=B.ap(L.mt,A.d.gH(j),0.24)
v.toString
v=B.a([v,D.alq],x.O)
v=new B.p(l,l,B.K(A.d.gH(j).j(0.35),A.r,1),w,B.a([new B.ac(0,A.H,A.v.j(0.4),A.cy,12)],x.V),new B.a6(A.aw,A.aD,A.w,v,l,l),A.m)
w=v}v=x.p
u=B.a([],v)
for(t=k.e,s=x.V,r=x.O,q=0;q<3;++q){p=q===2?0:4
o=new B.aQ(6,6)
if(i){n=B.ap(h,A.c,0.1)
n.toString
n=B.a([n,B.Wz(h,!0)[1]],r)}else n=B.a([A.d.gH(j),A.d.gal(j)],r)
m=i?l:B.a([new B.ac(0,A.H,A.v.j(0.45),A.aaU,0)],s)
u.push(B.q(l,B.V(t[q],A.c,l,l,l,11),A.f,l,l,new B.p(l,l,l,new B.bc(o,o,o,o),m,new B.a6(A.a5,A.a9,A.w,n,l,l),A.m),l,17,l,new B.R(q*4,0,(2-q)*4,p),l,l,l,l))}u=B.w(u,A.l,l,A.e,A.P,0,A.p)
if(i)t=A.bF
else{t=B.ap(A.d.gH(j),A.d.gal(j),0.4)
t.toString}t=B.c(k.b,l,2,A.a2,l,l,l,B.l(l,l,t,l,l,l,l,l,l,l,l,10.5,l,l,A.u,l,1.2,!0,l,0.6,l,l,l,l,l,l),A.K,l,l)
return B.aG(!1,A.a3,!0,l,B.aM(!1,g,!0,B.eJ(B.w(B.a([new B.a4(58,l,u,l),A.S,t,A.at,B.V(A.E7,i?B.Wz(h,!0)[1]:A.d.gH(j),l,l,l,18)],v),A.l,l,A.bc,A.i,0,A.p),l,w,l,A.Du,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,this.e,l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.ai)}}
C.RY.prototype={
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ap(A.d.gal(i),A.v,0.62)
h.toString
w=k.c
v=k.d
h=B.ao(-8,new B.bP(new B.p(h,j,j,B.n(22),j,j,A.m),A.bm,j,j),j,j,2,2,8,j)
u=B.n(22)
t=k.y
s=x.V
r=B.a([new B.ac(0,A.H,A.v.j(0.55),A.KE,26),new B.ac(-6,A.H,A.d.gH(i).j(0.1+0.4*t),A.J,30)],s)
q=B.n(22)
p=B.ap(A.d.gH(i),A.c,0.14)
p.toString
o=A.d.gH(i)
n=A.d.gal(i)
i=B.ap(A.d.gal(i),A.v,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bS(0,new B.bP(new B.p(j,j,j,j,j,new B.a6(A.aw,A.aD,A.w,B.a([p,o,n,i],m),D.dHL,j),A.m),A.bm,j,j),0,0,0),B.ao(j,new B.bP(new B.p(j,j,j,j,j,new B.a6(A.aV,A.b_,A.w,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.m),A.bm,j,j),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bS(0,B.b4(j,j,j,new C.bxI(i,j),A.aB),0,0,0))
i=A.c.j(0.16)
p=B.K(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ac(0,A.H,A.c.j(0.25*t),A.J,14)],s)
s=B.q(j,B.V(k.f,A.c,j,j,j,28),A.f,j,j,new B.p(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=B.a([B.c(k.r,j,j,j,j,j,j,D.fNg,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.u(p,B.a([A.at,B.c(i,j,1,A.a2,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a8,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.FH)
p.push(B.q(j,j,A.f,j,j,new B.p(A.c.j(0.28),j,j,B.n(3),j,j,A.m),j,5,j,j,j,j,j,w*0.42))
m.push(new B.C(A.hf,B.A(B.a([s,A.et,B.E(B.w(p,A.B,j,A.e,A.P,0,A.p),1)],l),A.l,j,A.e,A.i,0,j,j),j))
i=k.x
if(i>0)m.push(B.bS(0,new B.dn(!0,B.em(j,A.v.j(A.h.D(i*0.6,0,0.7)),!0),j),0,0,0))
i=B.n(22)
m.push(B.bS(0,new B.dn(!0,new B.bP(new B.p(j,j,B.K(A.c.j(0.3),A.r,1.2),i,j,j,A.m),A.bm,j,j),j),0,0,0))
return new B.a4(w,v,new B.am(A.a0,j,A.ab,A.f,B.a([h,B.bS(0,new B.bP(new B.p(j,j,j,u,r,j,A.m),A.bm,B.bv(q,new B.am(A.a0,j,A.ab,A.t,m,j),A.ap),j),0,0,0)],l),j),j)}}
C.bxI.prototype={
a5(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a5(r,-10,s,w)
u=d.c
J.bs(u.save())
u.translate(v.gbF().a,v.gbF().b)
d.jz(0,0.35)
t=B.c1(A.J,(w- -10)*1.6,s-r)
$.U()
s=B.L()
s.san(new B.a6(A.a5,A.a9,A.w,B.a([A.L,A.c.j(0.3),A.L],x.O),null,null).az(0,t))
d.aE(t,s)
u.restore()},
aD(d){return d.b!==this.b}}
C.bxd.prototype={
C(d){var w=null,v=B.n(22),u=B.a([D.bur,D.aks],x.O),t=this.e,s=B.K(A.d.gH(t).j(0.4),A.r,1.2),r=B.a([new B.ac(0,A.H,A.v.j(0.5),A.ky,24)],x.V),q=B.n(22),p=A.d.gH(t)
return new B.a4(this.c,this.d,new B.bP(new B.p(w,w,s,v,r,new B.a6(A.aw,A.aD,A.w,u,w,w),A.m),A.bm,B.bv(q,B.b4(B.at(B.V(A.j8,A.d.gH(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.beJ(p,w),A.aB),A.ap),w),w)}}
C.beJ.prototype={
a5(d,e){var w,v,u,t,s,r
$.U()
w=B.L()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=0;s<u;s+=18)d.ah(new B.m(s,0),new B.m(s,t),w)
for(r=0;r<t;r+=18)d.ah(new B.m(0,r),new B.m(u,r),w)
u=e.eq(A.J)
$.U()
t=B.L()
t.b=A.ae
t.c=1.4
t.r=v.j(0.35).gp(0)
d.O(u,30,t)},
aD(d){return!1}}
C.aLg.prototype={
R(){return new C.aLh(new B.cB(null,x.A),null,null)}}
C.aLh.prototype={
gre(){var w,v=this,u=v.d
if(u===$){w=B.br(null,D.bFc,null,1,null,v)
w.cU(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
gKj(){var w,v=this,u=v.e
if(u===$){w=B.br(null,A.fP,null,1,null,v)
w.fp(0,!0)
v.e!==$&&B.bF()
v.e=w
u=w}return u},
gaB2(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gcfh(){var w=this.w
if(w===$){w=B.B(this.a.c.d,x.G)
this.w=w}return w},
gb_L(){var w=this.x
if(w===$){w=B.B(this.a.c.e,x.Z)
this.x=w}return w},
gb0y(){var w=this.y
if(w===$){w=B.B(this.a.c.f,x.N)
this.y=w}return w},
gbcL(){var w=this.z
if(w===$){w=B.B(this.a.c.r,x.N)
this.z=w}return w},
Z(){this.a4()
var w=this.gre()
w.dr()
w.e2$.K(0,this.gcGt())},
cGu(){var w,v,u,t,s,r,q,p=this,o=p.gre().x
o===$&&B.d()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as&&p.ch<0){switch(p.gaB2().a){case 0:w=D.oq
break
case 1:w=D.vY
break
case 2:w=D.a7b
break
case 3:w=D.oq
break
case 4:w=D.dsJ
break
case 5:w=D.vY
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.afD)r=0.09
else r=s===D.afE?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){G.dI(260+90*v,"",260,1.6,0.18,"tri")
u=D.ch_[v]
E.mR("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.Kf("bell",D.cpS,1400,0.35)}}p.ax=o},
t(){this.gre().t()
this.gKj().t()
this.bE3()},
a0O(){var w=this
w.gre().d63(0,B.dw(0,0,0,A.h.S(11e3/w.Q),0,0))
w.l(new C.fiO(w))},
cr_(){this.gre().bR(0)
this.l(new C.fiN(this))},
a0N(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$a0N=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:if(r.ch>=0){w=1
break}j=$.aS.bl$.x.h(0,r.f)
i=j==null?null:j.gbf()
if(!(i instanceof B.oF)||i.fy==null){w=1
break}h=r.as
j=r.gre()
j.bR(0)
g=r.gKj()
g.bR(0)
r.l(new C.fiD(r))
f=i.ga0(0)
e=f.a
d=f.b
q=Math.min(3.5,1600/Math.max(e,d))
p=A.h.bc(e*q)
o=A.h.bc(d*q)
n=A.h.S(11/r.Q*20)
m=null
t=4
w=7
return B.b(E.ajL(24*q,20,new C.fiE(r,n,q,p,o),n,o,new C.fiF(r),p),$async$a0N)
case 7:l=a3
if(J.aa(l)===0){e=B.be("empty")
throw B.Y(e)}e=r.a.c
d=B.ag("[^a-z0-9]+",!0,!1,!1,!1)
k=B.aD(e.b.toLowerCase(),d,"_")
w=8
return B.b(E.aUs(l,k),$async$a0N)
case 8:m=a3?"Your scene is saved (a moving GIF).":"Could not save here. Try another browser."
t=2
w=6
break
case 4:t=3
a1=s.pop()
m="Could not make the GIF. Try again."
w=6
break
case 3:w=2
break
case 6:if(r.c==null){w=1
break}r.l(new C.fiG(r))
g.fp(0,!0)
j.sp(0,0)
if(h)r.a0O()
r.c.L(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.c(m,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a0N,v)},
agX(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$agX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gb0y(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){q=t[r]
l.push(new B.au(new B.bd(q,A.ba,A.aP),$.ay()))}m=B.a([],m)
for(t=u.gbcL(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){p=t[r]
m.push(new B.au(new B.bd(p,A.ba,A.aP),$.ay()))}o=B.B(u.gb_L(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bV(L.mt,null,new C.fiM(u,l,m,o),t,!0,!0,!0,A.me,!1,!1,x.H),$async$agX)
case 2:l=B.B(l,x.bO)
A.d.u(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.V$=$.ay()
n.W$=0}return B.h(null,v)}})
return B.i($async$agX,v)},
C(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gaB2(),e=h.a.c,d=e.b,a0=h.gcfh(),a1=new C.Bu(f,d,e.c,a0,h.gb_L(),h.gb0y(),h.gbcL())
e=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
e.toString
f=x.p
w=B.a([B.aJ(g,g,g,g,B.V(h.at?T.pa:A1.u1,A.ac,g,g,g,21),g,g,g,new C.fiW(h),g,g,g,g,"Sound",g),B.aJ(g,g,g,g,D.c7e,g,g,g,h.gcfj(),g,g,g,g,"Edit words and pictures",g),B.aJ(g,g,g,g,I.pc,g,g,g,new C.fiX(h,a2),g,g,g,g,"Share",g)],f)
v=B.a([B.ca(h.gKj(),new C.fiY(h,a1),g),B.cg(new C.fiZ(h,a1))],f)
u=h.as
t=u?h.gcqZ():h.gcfm()
u=u?D.bX1:A.tZ
s=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
s.toString
t=B.A(B.a([B.aJ(g,g,g,g,B.V(u,s,g,g,g,34),g,g,g,t,g,g,g,g,g,A.cp),B.E(B.ca(h.gre(),new C.fj_(h,a2,a1),g),1),B.aJ(g,g,g,g,D.c3f,g,g,g,new C.fj0(h),g,g,g,g,"Replay",A.cp)],f),A.l,g,A.e,A.i,0,g,g)
s=h.Q
u=A.h.a1(s,1)
r=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
r.toString
s=E.jh(r,u+"x","Speed",2.5,0.4,new C.fj1(h),s)
u=B.a([],f)
for(q=0;q<6;++q){p=D.dEA[q]
o=h.r
if(o===$)o=h.r=h.a.c.a
r=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
r.toString
u.push(new E.e5(p.b,o===p.a,new C.fj2(h,p),p.c,r,g))}r=B.a([],f)
for(n=x.G,q=0;q<10;++q){m=D.chp[q]
o=h.w
if(o===$){o=B.B(h.a.c.d,n)
h.w=o}l=A.d.gH(o).A(0,A.d.gH(m))?34:28
o=h.w
if(o===$){o=B.B(h.a.c.d,n)
h.w=o}k=A.d.gH(o).A(0,A.d.gH(m))?34:28
o=h.w
if(o===$){o=B.B(h.a.c.d,n)
h.w=o}j=A.d.gH(o).A(0,A.d.gH(m))?A.c:A.aT
o=h.w
if(o===$){o=B.B(h.a.c.d,n)
h.w=o}i=new B.ax(j,A.d.gH(o).A(0,A.d.gH(m))?2.5:1,A.r,-1)
r.push(B.aA(g,B.q(g,g,A.f,g,g,new B.p(g,g,new B.bE(i,i,i,i),g,g,new B.a6(A.aw,A.aD,A.w,m,g,g),A.a6),g,k,g,I.anY,g,g,g,l),A.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new C.fj3(h,m),g,g,g,g,g,g,!1,A.a4))}u=B.a([t,s,new E.fm(u,"STYLE",g),new E.fm(r,"THEME",g),A.aj],f)
t=h.ch
if(t>=0){s=B.n(6)
a0=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
a0.toString
u.push(new B.C(A.jZ,B.w(B.a([B.bv(s,B.jK(A.by,g,a0,8,g,t,g),A.ap),A.at,B.c("Making your GIF\u2026 "+A.h.S(h.ch*100)+"%",g,g,g,g,g,g,A.nG,g,g,g)],f),A.l,g,A.e,A.i,0,A.p),g))}else{f=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
f.toString
u.push(new B.a4(1/0,g,B.df(A.om,g,D.hnp,h.gcfi(),B.bp(f,g,g,g,A.v,g,A.kO,g,g,g,g,g)),g))}return E.m3(e,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.e9(new B.am(A.a0,g,A.b5,A.t,v,g),h.f),d,B.w(u,A.l,g,A.e,A.P,0,A.p))},
bGd(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.oq[r]
p=A.h.D((1-A.eh.aA(0,A.h.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.h.D(p/1.5707963267948966,0,1)
q=D.oq[r]
n=q+0.12
m=A.h.D((a0-n)/(q+0.2-n),0,1)
n=D.oq[r]
q=n-0.01
q=A.h.D((a0-q)/(n+0.03-q),0,1)
n=B.dB()
l=n.a
l.$flags&2&&B.ak(l)
l[11]=0.0013
n.kb(p)
l=v[r]
k=u[r]
j=t[r]
i=D.oq[r]
h=i+0.1
if(A.h.D((a0-h)/(i+0.3-h),0,1)>0){i=D.oq[r]
h=i+0.1
h=A.h.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.oq[r]
h=i+0.1
h=A.h.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cR(0,r*118,0,f,f,f,new B.l1(q,new B.jb(n,f,A.aV,!0,f,new C.RY(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.oq[r]
u=v-0.02
g=A.h.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gH(w)
v=D.oq[r]
t=v+0.12
e.push(new B.cR(0,r*118-3-2,0,f,f,4,new B.n3(new C.bwh(u,g,1-A.h.D((a0-t)/(v+0.22-t),0,1),f),f,A.aB,f,f),f))}return new B.a4(a2,358,new B.am(A.a0,f,A.ab,A.f,e,f),f)},
bXt(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.vY[r]
p=A.re.aA(0,A.h.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.vY[r]
m=q+0.15
l=A.h.D((a0-m)/(q+0.25-m),0,1)
m=D.vY[r]
q=m-0.03
q=A.h.D((a0-q)/(m+0.01-q),0,1)
m=B.dB()
k=m.a
k.$flags&2&&B.ak(k)
k[11]=0.0011
m.kd(n,n,n,1)
m.fM(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new C.RY(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dB()
k.fM(3.141592653589793)
k=new B.jb(k,f,A.z,!0,f,new C.bxd(a2,108,w,f),f)}e.push(new B.cR(0,r*130,0,f,f,f,new B.l1(q,new B.jb(m,f,A.z,!0,f,k,f),f),f))}return new B.a4(a2,378,new B.am(A.a0,f,A.ab,A.f,e,f),f)},
cLI(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a7b[w]
l.push(A.cn.aA(0,A.h.D((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bS(0,B.b4(n,n,n,new C.bzO(d.d,l,D.aDl,m,C.bwF(e,0.4,0.62),f,C.bwF(e,0.45,0.7),n),A.aB),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.hqb(g,w)
q=D.aDl[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cR(r,s-q*m*p+12,n,n,t,n,new B.l1(o,B.V(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.hqb(g,w)
r=D.a7b[w]
q=r+0.15
v.push(new B.cR(s,l,n,n,t,n,new B.l1(A.h.D((e-q)/(r+0.25-q),0,1),B.c(u[w],n,n,n,n,n,n,A.XE,A.K,n,n),n),n))}return new B.a4(g,m+90,new B.am(A.a0,n,A.ab,A.f,v,n),n)},
bMC(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cn.aA(0,C.bwF(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bS(0,B.at(B.dQ(B.b4(f,f,f,new C.bvG(A.d.gH(a1),C.bwF(a3,0,0.2),a4,f),new B.av(a5*0.95,70)),D.eDX),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.h.D((a3-l)/(0.12+m-l),0,1)
j=A.dS.aA(0,A.h.D((o-0.7)/0.3,0,1))
l=B.dB()
m=l.a
m.$flags&2&&B.ak(m)
m[11]=0.001
l.fM(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.kd(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.h.F(r,1):-1
w.push(new B.y(o,new B.cR(0,0,0,0,f,f,new B.cp(A.z,f,f,new B.l1(k*(0.45+0.55*o),B.dQ(new B.jb(l,f,A.z,!0,f,new C.RY(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.m(n*a5*0.34,-o*18)),f),f),f)))}A.d.b_(w,new C.fiA())
A.d.u(a0,new B.O(w,new C.fiB(),x.fR))
return new B.a4(a5,330,new B.am(A.a0,f,A.ab,A.f,a0,f),f)},
cfg(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.vY[q]
o=A.h.D((a2-p)/(p+0.22-p),0,1)
n=A.n1.aA(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.vY[q]
m=A.h.D((a2-m)/(m+0.02-m),0,1)
l=D.aFv[q]
k=B.dB()
k.ng(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.kd(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.vY[q]
g=h+0.1
g=A.h.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cR(0,0,0,0,e,e,new B.cp(A.z,e,e,new B.l1(m,B.dQ(new B.jb(k,e,A.z,!0,e,new C.RY(d,92,w,p,j,i,0,g*s,h,e),e),new B.m(0,l)),e),e),e))
l=D.vY[q]
h=l+0.02
f=A.h.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cR(0,0,0,0,e,e,new B.cp(A.z,e,e,B.dQ(new B.n3(new C.bfp(w,f,q,e),e,new B.av(r,212),e,e),new B.m(0,D.aFv[q])),e),e))}return new B.a4(a4,330,new B.am(A.a0,e,A.ab,A.f,a0,e),e)},
bJd(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.m(-b0,-150),new B.m(b0,-40),D.eE1],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.oq[r]
p=A.h.D((a8-q)/(q+0.2-q),0,1)
o=A.cn.aA(0,p)
q=D.aFF[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.oq[r]
f=g+0.2
e=A.h.D((a8-f)/(g+0.3-f),0,1)
f=D.oq[r]
g=f-0.01
g=A.h.D((a8-g)/(f+0.03-g),0,1)
f=B.dB()
d=f.a
d.$flags&2&&B.ak(d)
d[11]=0.001
f.ng(l*h+D.dxs[r]*o)
f.fM(l*0.9)
h=0.55+0.45*o
f.kd(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cR(0,0,0,0,a3,a3,new B.cp(A.z,a3,a3,new B.l1(g,B.dQ(new B.jb(f,a3,A.z,!0,a3,new C.RY(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.m(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.oq[r]
i=q+0.17
a2=A.h.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aFF[r]
a6.push(new B.cR(0,0,0,0,a3,a3,new B.cp(A.z,a3,a3,B.dQ(new B.n3(new C.bvI(A.d.gH(w),a2,a3),a3,new B.av(a4,30),a3,a3),new B.m(0,q+48-4)),a3),a3))}}return new B.a4(b0,330,new B.am(A.a0,a3,A.ab,A.f,a6,a3),a3)}}
C.bwh.prototype={
a5(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a5(w-v,0,w+v,e.b)
q=B.bx(u,A.hG)
$.U()
t=B.L()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.y=O.p1
d.aq(q,t)
t=B.bx(u,A.hG)
q=B.L()
q.r=A.c.j(s).gp(0)
d.aq(t,q)},
aD(d){return d.c!==this.c||d.d!==this.d}}
C.bvG.prototype={
a5(d,e){var w,v,u=this.c,t=B.c1(e.eq(A.J),e.b*u,e.a*u)
$.U()
u=B.L()
u.b=A.ae
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.y=A_.PU
d.c3(t,u)
u=B.L()
u.b=A.ae
u.c=2.5
u.r=w.j(0.7).gp(0)
d.c3(t,u)
u=t.cu(-14)
v=B.L()
v.b=A.ae
v.c=1
v.r=w.j(0.3).gp(0)
d.c3(u,v)},
aD(d){return!0}}
C.bfp.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.eq(A.J),h=this.c,g=A.cn.aA(0,h)
$.U()
w=B.L()
w.b=A.ae
v=1-h
w.c=5*v
u=this.b
w.r=A.d.gH(u).j(0.6*v).gp(0)
d.O(i,40+g*e.a*0.42,w)
t=new B.e6()
t.cW(this.d*17+3)
for(w=40*h*h*3,s=i.a,r=i.b,h=1-h*0.6,q=0;q<26;++q){p=t.ai()*3.141592653589793*2
o=(40+t.ai()*110)*g
n=Math.cos(p)
m=Math.sin(p)
l=t.ai()
k=new B.ar(A.V,A.R,A.X,A.Y,A.W)
j=(q&1)===0?A.d.gH(u):A.c
k.r=j.j(A.h.D(v,0,1)).gp(0)
d.O(new B.m(s+n*o*1.6,r+(m*o+w)),(2+l*3)*h,k)}},
aD(d){return!0}}
C.bvI.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o=e.eq(A.J)
for(w=e.a,v=e.b,u=this.b,t=this.c,s=0;s<2;++s){r=A.h.D(t-s*0.18,0,1)
if(r<=0)continue
q=B.c1(o,v*(0.3+r*0.9),w*(0.5+r*0.7))
$.U()
p=new B.ar(A.V,A.R,A.X,A.Y,A.W)
p.b=A.ae
p.c=2
p.r=u.j((1-r)*0.7).gp(0)
d.c3(q,p)}},
aD(d){return d.c!==this.c}}
C.bzO.prototype={
a5(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2=c0.e,c3=c2+36,c4=d2.a,c5=c4*0.23,c6=c5*0.34,c7=c6*0.85,c8=-c6*0.5,c9=c3-4,d0=new B.a5(0,c9,0+c4,c9+60)
$.U()
c9=B.L()
w=c0.b
v=x.O
c9.san(new B.a6(A.aV,A.b_,A.w,B.a([A.d.gH(w).j(0.18),A.L],v),c1,c1).az(0,d0))
d1.aE(d0,c9)
c9=B.L()
c9.r=A.c.j(0.18).gp(0)
c9.c=1
d1.ah(new B.m(0,c3),new B.m(c4,c3),c9)
for(c9=c0.w,u=c9>0,t=(c5-16)/3,s=t-5,r=0.6+0.3*c0.r,q=c0.f,p=c3-14,o=x.v,n=c3+c8,m=c0.d,l=c3-6,k=c5+c7+8,j=l+16,i=c0.c,h=c9<1,g=d1.c,f=0;f<3;++f){e=i[f]
if(e<=0)continue
d=C.hqb(c4,f)
a0=m[f]*c2*e
a1=d-4
a2=$.U()
a3=new B.ar(A.V,A.R,A.X,A.Y,A.W)
a3.r=A.v.j(0.5).gp(0)
a3.y=A.no
d1.c3(new B.a5(a1,l,a1+k,j),a3)
a3=c3-a0
a1=d+c5
a4=new B.a5(d,a3,a1,a3+a0)
a5=new B.ar(A.V,A.R,A.X,A.Y,A.W)
a6=B.ap(A.d.gH(w),A.c,0.1)
a6.toString
a5.san(new B.a6(A.aV,A.b_,A.w,B.a([a6,A.d.gal(w)],v),c1,c1).az(0,a4))
d1.aE(a4,a5)
a2=a2.r
a5=B.a([],o)
a7=new B.aI(a2,A.ak,c1,c1,a5)
a5.push(new B.aZ(a1,a3))
a7.ac()
a6=a1+c7
a8=a3+c8
a9=new B.aq(a6,a8)
a5.push(a9)
b0=a7.f
if(b0!=null)a9.aj(b0)
a7.ac()
a9=new B.aq(a6,n)
a5.push(a9)
b0=a7.f
if(b0!=null)a9.aj(b0)
a7.ac()
a9=new B.aq(a1,c3)
a5.push(a9)
b0=a7.f
if(b0!=null)a9.aj(b0)
a7.ac()
a9=new B.bz()
a5.push(a9)
a5=a7.f
if(a5!=null)a9.aj(a5)
a7.ac()
a5=new B.ar(A.V,A.R,A.X,A.Y,A.W)
a5.r=B.ap(A.d.gal(w),A.v,0.5).gp(0)
d1.af(a7,a5)
a5=B.a([],o)
b1=new B.aI(a2,A.ak,c1,c1,a5)
a5.push(new B.aZ(d,a3))
b1.ac()
a2=new B.aq(d+c7,a8)
a5.push(a2)
a9=b1.f
if(a9!=null)a2.aj(a9)
b1.ac()
a2=new B.aq(a6,a8)
a5.push(a2)
a6=b1.f
if(a6!=null)a2.aj(a6)
b1.ac()
a2=new B.aq(a1,a3)
a5.push(a2)
a6=b1.f
if(a6!=null)a2.aj(a6)
b1.ac()
a2=new B.bz()
a5.push(a2)
a5=b1.f
if(a5!=null)a2.aj(a5)
b1.ac()
a2=new B.ar(A.V,A.R,A.X,A.Y,A.W)
a2.r=B.ap(A.d.gH(w),A.c,0.45).gp(0)
d1.af(b1,a2)
b2=new B.ar(A.V,A.R,A.X,A.Y,A.W)
b2.b=A.ae
b2.c=1
b2.r=A.c.j(0.28).gp(0)
d1.aE(a4,b2)
d1.af(a7,b2)
d1.af(b1,b2)
b3=A.h.bc(a0/22)
for(a2=a3+6,a3=d+8,a5=q*b3*1.3,b4=0;b4<b3;++b4){b5=a5>b3-b4-1
for(a6=p-b4*22-12,a8=a6<a2,a9=a6+10,b6=0;b6<3;++b6){b7=a3+b6*t
if(a8)continue
b0=B.bx(new B.a5(b7,a6,b7+s,a9),A.hG)
$.U()
b8=new B.ar(A.V,A.R,A.X,A.Y,A.W)
b8.r=(b5?A.c.j(r):A.v.j(0.22)).gp(0)
d1.aq(b0,b8)}}if(u&&h){a2=c3-a0*c9-14
b9=new B.a5(d,a2,a1,a2+28)
J.bs(g.save())
g.clipRect(B.hS(a4),$.lI()[1],!0)
$.U()
a2=new B.ar(A.V,A.R,A.X,A.Y,A.W)
a2.san(new B.a6(A.aV,A.b_,A.w,B.a([A.L,A.c.j(0.4),A.L],v),c1,c1).az(0,b9))
d1.aE(b9,a2)
g.restore()}}},
aD(d){return!0}}
C.aR6.prototype={
b0(){this.b8()
this.b6()
this.dV()},
t(){var w=this,v=w.bd$
if(v!=null)v.a8(0,w.gdP())
w.bd$=null
w.a3()}}
C.a2H.prototype={
a9(){return"_Role."+this.b}}
C.qP.prototype={}
C.rA.prototype={}
C.Dx.prototype={}
C.a0D.prototype={}
C.ahj.prototype={}
C.a2U.prototype={
ga0(d){return this.d}}
C.DI.prototype={}
C.ae7.prototype={}
C.aep.prototype={}
C.agn.prototype={}
C.bm7.prototype={
a5g(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
G.dI(d,"",e,g,h,f)},
bdU(d,e,f){return this.a5g(d,e,f,0,0.55)},
aFZ(d,e,f,g){return this.a5g(d,e,f,0,g)},
bdV(d,e,f,g){return this.a5g(d,e,f,g,0.55)},
a7(d){var w=this
w.a.a7(0)
A.d.a7(w.b)
A.d.a7(w.c)
A.d.a7(w.d)
A.d.a7(w.e)
A.d.a7(w.f)
A.d.a7(w.r)
A.d.a7(w.w)
A.d.a7(w.x)
w.y.a7(0)
w.Q.a7(0)
w.as.a7(0)
w.b3()},
ana(d,e,f,g){var w="n"+this.ay++,v=new C.rA(w,e,f,g)
this.a.n(0,w,v)
this.b3()
return v},
tE(d,e,f){return this.ana(0,e,f,0)},
X(d,e){var w=this
w.a.X(0,e)
A.d.bs(w.b,new C.dwF(e))
A.d.bs(w.c,new C.dwG(e))
w.b3()},
bhN(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.nv.h(0,v.b).c===D.yG)return!1
w=this.b
if(A.d.aR(w,new C.dwC(d,e)))return!1
w.push(new C.Dx(d,e))
this.b3()
return!0},
c6J(d){var w
if(d.b==="beat")return D.cq3[A.n.F(d.d,4)]
w=this.at
switch(A.n.F(d.d,3)){case 1:return 350+w.aw(500)
case 2:return 1400+w.aw(2200)
default:return 450+w.aw(2000)}},
aJy(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.n.F(w,6)
t=D.aFX[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.DI(u,t,j.ax,90))
w.push(new C.DI(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ai()*3.141592653589793*2
v.push(new C.a2U(u,new B.m(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.bdU(261.63*Math.pow(2,([0,4,7,12,16,19][A.n.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ai()*3.141592653589793*2
p=100+w.ai()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ap(t,A.c,w.ai()*0.5)
m.toString
v.push(new C.a2U(u,new B.m(o*p,n*p),m,3+w.ai()*4.5,1000+w.aw(700),j.ax))}j.f.push(new C.DI(u,t,j.ax,120))
j.aFZ(120,200,"noise",0.5)
j.bdU(261.63*Math.pow(2,([7,12,16,19][w.aw(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.DI(u,t,j.ax,230))
w.push(new C.DI(u,t,j.ax+160,160))
w.push(new C.DI(u,t,j.ax+320,100))
j.bdV(180+j.at.aw(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.ae7(u,new B.m((w.ai()-0.5)*220,-260-w.ai()*180),t,j.ax))
j.bdV(300+w.aw(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ai()*3.141592653589793*2
j.w.push(new C.aep(u,u.a6(0,new B.m(Math.cos(q),Math.sin(q)).aM(0,260+w.ai()*200)),t,j.ax))
j.a5g(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fX()
j.a5g(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.agn(u,D.aFh[v],t,j.ax))
j.aFZ(261.63*Math.pow(2,([0,5,9,12][j.at.aw(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aFZ(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.cm7[A.n.F(w,3)]
for(k=1;k<=3;++k)j.cBn(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new B.eT(w,new C.dwD(d));v.B();)j.aEq(w.gP(0),j.ax+D.cyC[A.n.F(g.d,4)])
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
case"chance":s=j.at.aw(100)<D.cQ5[A.n.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new B.eT(w,new C.dwE(d));v.B();)j.aEq(w.gP(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.y9(w,0,v-700)},
cBn(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.a0D(e,"~"+d))},
aEq(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.ahj(d.a,v,e,w))
u.push(new C.a0D(w,v))},
a96(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=B.a3(w).k("b9<2>")
w=B.B(new B.b9(w,v),v.k("M.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aJy(r)
u.n(0,r,o.ax+o.c6J(s))}}w=o.c
v=B.T(w).k("X<1>")
q=B.B(new B.X(w,new C.dwH(o),v),v.k("M.E"))
if(q.length!==0){A.d.bs(w,new C.dwI(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.I)(q),++t){u=q[t].b
if(A.a.Y(u,"~")){p=A.a.aV(u,1)
for(u=A.d.gae(v),r=new B.eT(u,new C.dwJ(p));r.B();)o.aEq(u.gP(0),o.ax)}else o.aJy(u)}}A.d.bs(o.d,new C.dwK(o))
A.d.bs(o.e,new C.dwL(o))
A.d.bs(o.f,new C.dwM(o))
A.d.bs(o.w,new C.dwN(o))
A.d.bs(o.x,new C.dwO(o))
A.d.bs(o.r,new C.dwP(o))
o.b3()},
w8(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.e,v=w.length,u=1-1.6*e,t=120*e,s=0;s<v;++s){r=w[s]
q=r.a
p=r.b
o=p.a
p=p.b
r.a=new B.m(q.a+o*e,q.b+p*e)
r.b=new B.m(o*u,p*u+t)}n=j.cy.b-8
for(w=j.r,v=w.length,u=900*e,s=0;s<v;++s){m=w[s]
t=m.b
q=t.a
t=t.b+u
p=m.b=new B.m(q,t)
o=m.a
l=o.a+q*e
o=o.b+t*e
k=m.a=new B.m(l,o)
if(o>n){p=m.a=new B.m(l,n)
t=m.b=new B.m(q*0.9,-t*0.62)
q=p}else{q=k
t=p}q=q.a
if(q<10||q>j.cy.a-10)m.b=new B.m(-t.a*0.8,t.b)}},
ak(){var w,v,u,t,s,r,q,p,o,n,m=this.cy,l=m.a
if(l<=0)l=1
w=m.b
if(w<=0)w=1
m=B.a([],x.B)
for(v=this.a,v=new B.ds(v,v.r,v.e),u=x.N,t=x.K;v.B();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(B.J(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=B.a([],x.E)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,B.I)(t),++o){n=t[o]
v.push(B.a([n.a,n.b],r))}return A.T.au(B.J(["nodes",m,"edges",v],u,x.ew),null)},
Vo(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.T.aN(0,d,null))
k.a7(0)
for(o=x.j,n=J.aN(o.a(J.t(w,"nodes"))),m=k.a;n.B();){v=n.gP(n)
u=B.v(J.t(v,"k"))
if(!D.nv.am(0,u))continue
t=B.v(J.t(v,"id"))
m.n(0,t,new C.rA(t,u,new B.m(B.dA(J.t(v,"x"))*k.cy.a,B.dA(J.t(v,"y"))*k.cy.b),A.h.M(B.dA(J.t(v,"p")))))
s=B.c9(B.aD(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aN(o.a(J.t(w,"edges"))),n=k.b;o.B();){r=o.gP(o)
q=B.v(J.t(r,0))
p=B.v(J.t(r,1))
if(m.am(0,q)&&m.am(0,p))n.push(new C.Dx(q,p))}k.b3()
return!0}catch(l){return!1}},
d0q(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a7(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.rA(n,r,new B.m(q*p.a,o*p.b),s))
l.b3()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bhN(w[m.a],w[m.b])}},
ga0(d){return this.cy}}
C.Hb.prototype={}
C.Y2.prototype={
R(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aI6(new C.bm7(B.S(w,x.f3),v,u,t,s,r,q,p,o,B.S(w,n),B.S(w,n),B.S(w,n),B.S(w,n),A.cW,A.L,A.aB,$.ay()),A.bI,A.J,A.J,A.M,null,null)}}
C.aI6.prototype={
afj(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$afj=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.aB(),$async$afj)
case 6:q=n.kn(m.t(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.l(new C.eFM(s))
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
return B.i($async$afj,v)},
acb(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$acb=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.l(new C.eFB(s))
u=3
w=6
return B.b(B.aB(),$async$acb)
case 6:e.aB("Bool","ngmy_core_lab_coach_v1",!0)
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
return B.i($async$acb,v)},
bSJ(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a3(n).k("b9<2>")
v=""+n.a+"|"+o.length+"|"+new B.b9(n,w).cH(0,0,new C.eFD())+"|"+A.d.cH(o,0,new C.eFE())
if(v===p.ch)return p.CW
u=new C.eFH()
t=x.s
s=B.a([],t)
r=new C.eFI(p,s,u)
for(n=new B.b9(n,w).gae(0),w=new B.eT(n,new C.eFF());w.B();){q=n.gP(0)
if(!A.d.aR(o,new C.eFG(q)))s.push(B.v(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.cJ(s,0,B.dx(5,"count",x.S),x.N).de(0)},
Z(){var w,v=this
v.a4()
v.afj()
v.d.db=v.ay
w=v.qk(new C.eGb(v))
w.fU(0)
v.e!==$&&B.aT()
v.e=w},
t(){var w=this,v=w.as
if(v!=null)v.a2(0)
v=w.e
v===$&&B.d()
v.t()
v=w.d
v.V$=$.ay()
v.W$=0
w.bD4()},
aeP(d){return this.c69(d)},
c69(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$aeP=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.aB(),$async$aeP)
case 6:q=m.aV(l.t(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.Vo(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.b1_(A.d.gH(D.aEH))
if(s.c!=null)s.l(new C.eFL())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aeP,v)},
b1_(d){this.d.d0q(0,d.c,d.d)
this.Fr()},
Fr(){var w=this.as
if(w!=null)w.a2(0)
this.as=B.cD(A.m4,new C.eFx(this))},
aB3(d){var w,v,u,t,s=this.d.a,r=B.a3(s).k("b9<2>")
s=B.B(new B.b9(s,r),r.k("M.E"))
r=B.T(s).k("dp<1>")
s=new B.dp(s,r)
s=new B.bQ(s,s.gI(0),r.k("bQ<aj.E>"))
w=d.a
r=r.k("aj.E")
v=d.b
while(s.B()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
coU(d){var w,v,u,t,s,r=this.d.a,q=B.a3(r).k("b9<2>")
r=B.B(new B.b9(r,q),q.k("M.E"))
q=B.T(r).k("dp<1>")
r=new B.dp(r,q)
r=new B.bQ(r,r.gI(0),q.k("bQ<aj.E>"))
w=d.a
v=d.b
q=q.k("aj.E")
while(r.B()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c5Y(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.ds(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.B();){r=w.d
if(D.nv.h(0,r.b).c===D.yG)continue
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
cfp(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hQ3(new B.m(n.a+36,n.b+0),new B.m(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cJj(d){var w,v,u,t,s,r,q=this,p=q.aB3(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.f4()
u=v.b
if(u==="button"){w.aJy(p)
return}if(q.r)return
t=D.nv.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.t1)s=6
else s=1
v.d=A.n.F(v.d+1,s)
w.b3()
q.Fr()
return}if(q.r)return
r=q.cfp(d)
if(r!=null){w=q.d
A.d.cP(w.b,r)
w.b3()
q.Fr()}},
cqg(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.coU(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.aB3(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aI(0,d)}},
cqh(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b3()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.m(A.h.D(d.a+s.y.a,46,t.a-46),A.h.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b3()}}},
b6F(){var w,v,u=this
if(u.z!=null){w=u.c5Y(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bhN(v,w)}else v=!1
if(v){B.ke()
u.Fr()}u.z=null
u.d.b3()}else if(u.x!=null){if(u.at)u.Fr()
u.x=null}},
afy(d){return this.c9i(d)},
c9i(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$afy=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.aB3(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jJ()
p=t.c
p.toString
w=3
return B.b(B.bV(L.mt,null,new C.eFO(q),p,!0,!0,!1,A.me,!1,!1,x.y),$async$afy)
case 3:if(f===!0){r.X(0,s)
t.Fr()}case 1:return B.h(u,v)}})
return B.i($async$afy,v)},
cfn(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.tE(0,d,new B.m(v.a*(0.25+u.ai()*0.5),v.b*(0.2+u.ai()*0.55)))
B.f4()
this.Fr()},
ajE(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ajE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bV(L.mt,null,new C.eFQ(),s,!0,!0,!0,A.me,!1,!1,x.es),$async$ajE)
case 2:t=e
if(t!=null)u.b1_(t)
return B.h(null,v)}})
return B.i($async$ajE,v)},
agY(d){var w=0,v=B.j(x.H),u=this,t
var $async$agY=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cf(null,null,!0,null,new C.eFA(),t,null,!0,!0,x.y),$async$agY)
case 2:if(f===!0){u.d.a7(0)
u.Fr()}return B.h(null,v)}})
return B.i($async$agY,v)},
C(d){var w=this,v=null,u=B.a([B.akV(w.r?new B.bJ(A.a5,v,v,new B.C(A.I3,B.hy(D.c0Y,D.h4x,new C.eG9(w),v),v),v):w.cfq(),A.b0,A.iP),B.E(B.cg(new C.eGa(w)),1)],x.p)
if(!w.r)u.push(w.cDY())
return B.c6(v,A.c7,B.bn(!0,B.w(u,A.l,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)},
bOl(){var w=null,v=new C.eFC(),u=A.v.j(0.7),t=B.n(26),s=B.K(A.bw.j(0.5),A.r,1)
return B.bS(0,B.em(B.at(B.q(w,B.cc(B.w(B.a([D.hgd,A.at,D.hoc,A.az,v.$4(A.mG,A.bw,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(W.E3,A.cw,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.kp,A.c5,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.QJ,A.bu,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.hns,new B.bJ(A.a9,w,w,B.bK(!1,D.hdf,w,w,!0,w,w,w,this.gbOe(),w,w),w)],x.p),A.B,w,A.e,A.P,0,A.p),A.t,w,A.y,w,w,w,w,w,A.ah),A.f,w,A.Nd,new B.p(L.mt,w,s,t,w,w,A.m),w,w,w,A.f7,A9.api,w,w,w),w,w,w),u,!0),0,0,0)},
cfq(){var w=this,v=null,u=B.aJ(v,v,v,v,Aq.ns,v,v,v,new C.eFW(w),v,v,v,v,v,v),t=w.abC(A.DW,"How it works",new C.eFX(w),!0),s=w.ay?T.pa:A1.u1
return new B.C(D.bM8,B.A(B.a([u,D.bNO,t,w.abC(s,"Sound",new C.eFY(w),!0),w.abC(A.e8,"Ideas",w.gcu9(),!0),w.abC(I.xs,"Clear",w.gcfo(w),!0),w.aSx(A.fR,"Show",new C.eFZ(w),!0,!0)],x.p),A.l,v,A.e,A.i,0,v,v),v)},
aSx(d,e,f,g,h){var w=null,v=h?A.bw:A.c.j(0.08),u=B.n(14),t=B.n(14),s=B.a([B.V(d,h?A.v:A.c,w,w,w,20)],x.p)
return new B.C(Am.xj,B.aG(!1,A.a3,!0,u,B.aM(!1,t,!0,B.h6(new B.C(new B.R(8,8,8,8),B.A(s,A.l,w,A.e,A.P,0,w,w),w),w,e,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ai),w)},
abC(d,e,f,g){return this.aSx(d,e,f,g,!1)},
cDY(){var w=null,v=new C.eFS(this),u=A.c.j(0.08)
return B.q(w,B.cc(B.A(B.a([v.$2("START",D.yG),v.$2("CHANGE",D.Gg),v.$2("REACT",D.t1)],x.p),A.B,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,w,A.aJ),A.f,w,w,new B.p(L.CM,w,new B.bE(new B.ax(u,1,A.r,-1),A.a1,A.a1,A.a1),w,w,w,A.m),w,w,w,w,D.bH6,w,w,w)},
cDZ(d){var w,v,u,t,s=null,r=D.nv.h(0,d)
r.toString
w=B.n(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.K(v.j(0.5),A.r,1)
return new B.C(A.eY,B.aA(s,B.q(s,B.w(B.a([B.V(r.b,v,s,s,s,22),A.cR,B.c(r.a,s,1,A.a2,s,s,s,D.aZJ,s,s,s)],x.p),A.l,s,A.e,A.P,0,A.p),A.f,s,s,new B.p(s,s,t,w,s,new B.a6(A.aV,A.b_,A.w,u,s,s),A.m),s,s,s,s,A.hB,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eFR(this,d),s,s,s,s,s,s,!1,A.a4),s)}}
C.bm8.prototype={
a5(b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=b2.b,b5=b4.ax,b6=b7.c
J.bs(b6.save())
w=b4.ch
if(b5<w){v=(w-b5)/380
b6.translate(Math.sin(b5*0.09)*9*v,Math.cos(b5*0.13)*7*v)}$.U()
u=B.L()
u.r=A.c.j(0.05).gp(0)
for(w=b8.b,t=b8.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28)b7.O(new B.m(r,s),1,u)
q=b4.CW
if(b5<q){$.U()
p=B.L()
p.r=b4.cx.j(0.4*((q-b5)/800)).gp(0)
b7.aE(new B.a5(0,0,0+t,0+w),p)}for(w=b4.b,t=w.length,q=x.O,p=x.v,o=b4.a,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){m=w[n]
l=o.h(0,m.a)
k=o.h(0,m.b)
if(l==null||k==null)continue
j=l.c
i=j.a+36
j=j.b+0
h=k.c
g=h.a-36
h=h.b
f=$.U()
e=B.a([],p)
d=new B.aI(f.r,A.ak,b3,b3,e)
e.push(new B.aZ(i,j))
d.ac()
a0=Math.max(40,Math.abs(g-i)*0.5)
f=new B.i6(i+a0,j,g-a0,h,g,h)
e.push(f)
e=d.f
if(e!=null)f.aj(e)
d.ac()
a1=D.nv.h(0,l.b).d
a2=D.nv.h(0,k.b).d
f=new B.ar(A.V,A.R,A.X,A.Y,A.W)
f.b=A.ae
f.c=3
f.d=A.bG
e=B.a([a1.j(0.55),a2.j(0.55)],q)
h=B.rk(new B.m(i,j),new B.m(g,h))
f.san(new B.a6(A.a5,A.a9,A.w,e,b3,b3).az(0,new B.a5(h.a-2,h.b-2,h.c+2,h.d+2)))
b7.af(d,f)}for(w=b4.d,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a3=w[n]
l=o.h(0,a3.a)
k=o.h(0,a3.b)
if(l==null||k==null)continue
j=a3.c
a4=A.h.D((b5-j)/(a3.d-j),0,1)
j=l.c
i=k.c
a5=C.hQ3(new B.m(j.a+36,j.b+0),new B.m(i.a-36,i.b),a4)
$.U()
i=new B.ar(A.V,A.R,A.X,A.Y,A.W)
i.r=A.c.j(0.35).gp(0)
i.y=O.p1
b7.O(a5,8,i)
i=new B.ar(A.V,A.R,A.X,A.Y,A.W)
i.r=A.c.gp(0)
b7.O(a5,4,i)}a6=b2.d.$0()
if(a6!=null&&o.h(0,a6)!=null){a7=o.h(0,a6).c.a6(0,D.KI)
a8=b2.e.$0()
w=a8.a
t=a7.a
a0=Math.max(40,Math.abs(w-t)*0.5)
d=new B.aI($.U().r,A.ak,b3,b3,B.a([],p))
p=a7.b
d.E(new B.aZ(t,p))
j=a8.b
d.E(new B.i6(t+a0,p,w-a0,j,w,j))
j=B.L()
j.b=A.ae
j.c=3
j.r=A.c.j(0.7).gp(0)
b7.af(d,j)
j=B.L()
j.r=A.c.gp(0)
b7.O(a8,7,j)}for(w=b4.f,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a9=w[n]
p=a9.c
v=A.h.D((b5-p)/700,0,1)
if(b5<p)continue
p=A.ec.aA(0,v)
$.U()
j=new B.ar(A.V,A.R,A.X,A.Y,A.W)
j.b=A.ae
i=1-v
j.c=3.5*i+0.5
j.r=a9.b.j(i*0.9).gp(0)
b7.O(a9.a,14+a9.d*p,j)}for(w=b4.w,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){b0=w[n]
v=A.h.D((b5-b0.d)/600,0,1)
p=b0.a
j=b0.b
i=B.l0(p,j,A.ec.aA(0,v))
i.toString
j=B.l0(p,j,A.ec.aA(0,A.h.D(v-0.35,0,1)))
j.toString
$.U()
p=new B.ar(A.V,A.R,A.X,A.Y,A.W)
p.c=5
p.d=A.bG
h=b0.c
g=B.a([h.j(0),h],q)
f=B.rk(j,i)
p.san(new B.a6(A.a5,A.a9,A.w,g,b3,b3).az(0,new B.a5(f.a-4,f.b-4,f.c+4,f.d+4)))
b7.ah(j,i,p)
p=new B.ar(A.V,A.R,A.X,A.Y,A.W)
p.r=A.c.gp(0)
b7.O(i,6,p)
p=new B.ar(A.V,A.R,A.X,A.Y,A.W)
p.r=h.j(0.5*(1-v)).gp(0)
p.y=A.ld
b7.O(i,12,p)}for(w=b4.e,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a3=w[n]
v=A.h.D((b5-a3.f)/a3.e,0,1)
p=a3.a
$.U()
j=new B.ar(A.V,A.R,A.X,A.Y,A.W)
j.r=a3.c.j(1-v).gp(0)
b7.O(p,a3.d*(1-0.5*v),j)}for(w=b4.r,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){k=w[n]
p=k.a
$.U()
j=new B.ar(A.V,A.R,A.X,A.Y,A.W)
i=k.c
j.r=i.j(0.35).gp(0)
j.y=A.ld
b7.O(p,11,j)
j=k.a
p=new B.ar(A.V,A.R,A.X,A.Y,A.W)
p.san(new B.bU(Ac.C3,0.5,A.w,b3,0,B.a([A.c,i],q),b3,b3).az(0,B.c0(k.a,8)))
b7.O(j,8,p)}for(b4=b4.x,w=b4.length,n=0;n<b4.length;b4.length===w||(0,B.I)(b4),++n){a5=b4[n]
v=A.h.D((b5-a5.d)/1000,0,1)
t=1-v
b1=C.bm9(a5.b,26+8*t,a5.c.j(t),b3,b3,A.u)
t=a5.a
q=b1.b
p=q.c
q=q.a.c
b1.a5(b7,new B.m(t.a-p/2,t.b-(40+60*v+q.gb4(q)/2)))}for(b4=new B.ds(o,o.r,o.e);b4.B();)b2.cpN(b7,b4.d,b5)
b6.restore()},
cpN(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.nv.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.h.D(1-(f-w)/520,0,1)
u=B.c1(e.c,64,64)
t=B.bx(u,A.ia)
s=t.eM(A.cy)
$.U()
r=B.L()
r.r=A.v.j(0.55).gp(0)
r.y=A.no
d.aq(s,r)
if(v>0){s=t.cu(6)
r=B.L()
r.r=h.d.j(0.6*v).gp(0)
r.y=A.Dz
d.aq(s,r)}s=t.eM(A.cO)
r=B.L()
q=h.d
r.r=B.ap(q,A.v,0.65).gp(0)
d.aq(s,r)
r=B.L()
s=B.ap(q,A.c,0.18+0.4*v)
s.toString
p=B.ap(q,A.v,0.35)
p.toString
r.san(new B.a6(A.aV,A.b_,A.w,B.a([s,p],x.O),j,j).az(0,u))
d.aq(t,r)
r=B.L()
r.b=A.ae
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aq(t,r)
r=h.b
p=e.c
o=C.bm9(B.lD(r.a),30,A.c,r.b,j,A.C)
r=o.b
s=r.c
r=r.a.c
o.a5(d,p.aI(0,new B.m(s/2,r.gb4(r)/2)))
n=C.bm9(h.a,11,A.c,j,j,A.C)
n.a5(d,e.c.a6(0,new B.m(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.n.F(e.d,r)]
else m=i==="pop"?D.aFh[A.n.F(e.d,6)]:j
h=h.c
if(h===D.t1){s=e.c.a6(0,new B.m(0,62))
r=B.L()
r.r=D.aFX[A.n.F(e.d,6)].gp(0)
d.O(s,5,r)}else if(m!=null){l=C.bm9(m,9.5,A.aE,j,j,A.O)
l.a5(d,e.c.a6(0,new B.m(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bm9(m,9.5,A.aE,j,j,A.O)
l.a5(d,e.c.a6(0,new B.m(-l.b.c/2,54)))}if(k.c)return
if(h!==D.yG)k.b7u(d,e.c.aI(0,D.KI),q)
k.b7u(d,e.c.a6(0,D.KI),q)},
b7u(d,e,f){var w
$.U()
w=B.L()
w.r=A.c7.gp(0)
d.O(e,9,w)
w=B.L()
w.b=A.ae
w.c=2.2
w.r=f.gp(0)
d.O(e,9,w)
w=B.L()
w.r=A.c.gp(0)
d.O(e,3.5,w)},
aD(d){return!0}}
C.aQe.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.es.prototype={}
C.uk.prototype={
au6(d,e,f,g){var w=this
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
C.acL.prototype={}
C.adU.prototype={}
C.a6N.prototype={
bjG(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.hc()?-1:1
v=t.ai()*3.141592653589793*2
u=f*(0.3+t.ai())
s.push(new C.acL(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ai()*0.45));++r}},
cbv(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bs(w,new C.bTk())},
ana(d,e,f,g){var w="p"+this.c++,v=new C.uk(w,e,f,g)
v.au6(w,e,f,g)
this.a.push(v)
return v},
X(d,e){A.d.X(this.a,e)
A.d.bs(this.b,new C.bTv(e))},
a7(d){A.d.a7(this.a)
A.d.a7(this.b)},
cSk(d,e,f,g,h){return A.d.aR(this.b,new C.bTq(e,f,g,h))},
ao_(d,e,f,g){var w
if(d===f||this.cSk(0,d,e,f,g))return null
w=new C.adU(d,e,f,g)
this.b.push(w)
return w},
aEY(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
AR(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
aqP(d){return this.Ni(d)&&!d.x&&d.cx>this.AR(d)},
bbV(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Ni(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
cfK(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.B1.h(0,v)
if(w!=null)return w.a
return 100},
w8(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.cbv(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.T(v).k("X<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.I)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.X(v,new C.bTw(a2),t).cH(0,0,new C.bTx(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.S(x.N,u)
n=new C.bTz(o)
m=B.a([],x.t)
l=new C.bTy(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.I)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.I)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.S(u,u)
f=new C.bTB(g,l,n)
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
a2.bbR(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.AR(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.bbR(e,d,w,!0)
a2.bV5(a4)},
bbR(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.S(x.N,b3),b5=new C.bTm(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bTl(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.I)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bTo(B.S(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.I)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=B.c4(b7,0,!1,b3)
v=x.Y
k=B.S(v,b3)
j=B.S(v,b3)
v=b2.y
i=0.3/b9
q=x.b
h=b7<0
g="Length must be a non-negative integer: "+b7
f=0
for(;;){if(!(f<(c0?10:1)))break
if(h)B.bi(B.dM(g,null))
e=B.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=B.c4(b7,0,!1,b3)
a0=B.c4(b7,0,!1,b3)
k.a7(0)
j.a7(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.I)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.bbV(t)*(1+t.CW))
a4=b2.aEY(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.cfK(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bYt(e,a0,b8)
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
bYt(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return B.c4(d,0,!1,x.i)
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
t[m]=t[m]-g*u[l][m]}}}f=B.c4(d,0,!1,x.i)
for(e=0;e<v;++e){t=u[e]
h=t[e]
s=a0[e]
f[s]=Math.abs(h)<1e-14?0:t[v]/h}return f},
bV5(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.I)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aEY(o)/a1.bbV(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.AR(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bMX(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bjG(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.uN(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.uN(o,"The "+$.r_().h(0,n).b+" got "+A.h.a1(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.uN(o,"More than 1.5 amps went through the "+$.r_().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.uN(o,"The regulator had to turn "+A.h.a1(o.cy,1)+" V into heat while "+A.h.S(i*1000)+" mA flowed. That is "+A.h.a1(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.uN(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.B1.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.r_().h(0,n).b
l=f.b
l=l===A.h.bm(l)?""+A.h.S(l):B.v(l)
g=f.c
g=g===A.h.bm(g)?""+A.h.S(g):B.v(g)
a1.uN(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.h.a1(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.fyk.q(0,n)){m=o.fx>0?A.h.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.h.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.uN(o,"The bulb got "+A.h.a1(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.h.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.uN(o,"The LED had "+A.h.S(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.h.D(j/14,0,1)
break
case"motor":n=A.h.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.h.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.uN(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.h.D(i/1,0,1)
if(!o.x&&i>1)a1.uN(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.uN(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.h.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.uN(o,"The capacitor was charged to "+A.h.a1(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bMX(d){return A.d.aR(this.a,new C.bTj(d))},
uN(d,e){var w
d.x=!0
d.ay=e
this.bjG(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bol(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a7(0)},
aLl(d){var w=d.b
return D.aWn.q(0,w)||D.B1.am(0,w)||w==="buck"||w==="regulator"},
bla(d){var w,v=!0
if(!this.Ni(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.B1.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
WH(d,e){var w=this.b
return new B.X(w,new C.bTD(d,e),B.T(w).k("X<1>")).gI(0)},
rN(d){var w,v
if(d.x)return!1
w=d.b
if(D.B1.am(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bjb(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.r_().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aLl(d)||i.rN(d))return null
w=i.WH(d,0)
v=i.WH(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.T(u).k("X<1>")
s=B.B(new B.X(u,i.gd_Y(),t),t.k("M.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.h.bm(r)?""+A.h.S(r):B.v(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.h.a1(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.B1.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.Nu("battery"),o=J.aN(t.a),t=new B.eT(o,t.b);t.B();){n=o.gP(o)
if(n.e===1.5&&n.as<=0.02&&i.WH(n,0)+i.WH(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.Nu("switch"),o=J.aN(t.a),t=new B.eT(o,t.b);t.B();)if(!o.gP(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.r_().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.AR(k))return"The "+$.r_().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.h.a1(k.cx,2)+" amps, but it can only give about "+A.h.a1(i.AR(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.aR(u,new C.bTr(i,d))
h=q.b
h=h===A.h.bm(h)?""+A.h.S(h):B.v(h)
u=A.h.a1(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.h.a1(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.h.a1(Math.abs(d.dy),1)+" V). Try a bigger battery."},
Nu(d){var w=this.a
return new B.X(w,new C.bTu(d),B.T(w).k("X<1>"))},
aKX(d){return this.Nu(d).aR(0,new C.bTt(0.35))},
qu(d,e){return A.d.aR(this.a,new C.bTs(e))}}
C.alw.prototype={
a5(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.U()
w=B.L()
w.r=F.nV.gp(0)
c0.aE(new B.a5(0,0,b8,b9),w)
w=C.inT(c1)
v=$.hZb()
if(A.n.F(w.length,2)!==0)B.bi(B.dM('"points" must have an even number of values.',b5))
u=c0.b
if(u!=null)u.oy(v)
t=v.ni()
v=c0.c
v.drawPoints($.i_5()[0],w,t)
t.delete()
for(w=b4.b,u=w.b,s=u.length,r=b4.f,q=0;q<u.length;u.length===s||(0,B.I)(u),++q){p=u[q]
o=p.a
n=o.c
m=p.b===0?-1:1
l=D.mN.am(0,o.b)?(o.ch-1)*38:0
o=o.d
k=p.c
j=k.c
i=p.d===0?-1:1
h=D.mN.am(0,k.b)?(k.ch-1)*38:0
b4.cP0(c0,new B.m(n*b6+m*(42+l),o*b7),new B.m(j*b6+i*(42+h),k.d*b7),p,p===r)}u=b4.d
if(u!=null&&b4.e!=null){g=C.i3e(u.a,u.b,c1)
u=b4.e
u.toString
$.U()
s=B.L()
s.r=A.ac.gp(0)
s.c=3
s.d=A.bG
c0.ah(g,u,s)}for(u=w.a,s=u.length,r=b4.c,o=b4.r,n=x.v,q=0;q<u.length;u.length===s||(0,B.I)(u),++q){f=u[q]
m=f.c*b6
l=f.d*b7
if(f.Q>0){k=Math.sin(w.d*30)
$.U()
j=new B.ar(A.V,A.R,A.X,A.Y,A.W)
j.r=F.NZ.j(A.h.D(f.Q*0.45,0,0.6)).gp(0)
j.y=A.Dz
c0.O(new B.m(m,l),46+14*k,j)}e=o.h(0,f.a)
if(e==null)e=1
J.bs(v.save())
v.translate(m,l)
k=A.h.D(A.n1.aA(0,A.h.D(e,0,1)),0.01,1.4)
v.scale(k,k)
b4.cqO(c0,f,f===r)
v.restore()
k=f.b
if((k==="battery"||k==="solar"||k==="crank"||k==="turbine")&&!f.x&&f.cx>w.AR(f)){j=m+0
i=l+-40
h=Math.sin(w.d*10)
d=$.U().r
a0=B.a([],n)
a1=new B.aI(d,A.ak,b5,b5,a0)
a2=i-13
a0.push(new B.aZ(j,a2))
a1.ac()
a3=j+13
a4=i+10
a5=new B.aq(a3,a4)
a0.push(a5)
a6=a1.f
if(a6!=null)a5.aj(a6)
a1.ac()
a5=j-13
a6=new B.aq(a5,a4)
a0.push(a6)
a7=a1.f
if(a7!=null)a6.aj(a7)
a1.ac()
a6=new B.bz()
a0.push(a6)
a0=a1.f
if(a0!=null)a6.aj(a0)
a1.ac()
a0=new B.ar(A.V,A.R,A.X,A.Y,A.W)
a0.r=A.aC.j(0.65+0.35*h).gp(0)
c0.af(a1,a0)
a0=B.a([],n)
d=new B.aI(d,A.ak,b5,b5,a0)
a0.push(new B.aZ(j,a2))
d.ac()
h=new B.aq(a3,a4)
a0.push(h)
a1=d.f
if(a1!=null)h.aj(a1)
d.ac()
h=new B.aq(a5,a4)
a0.push(h)
a1=d.f
if(a1!=null)h.aj(a1)
d.ac()
h=new B.bz()
a0.push(h)
a0=d.f
if(a0!=null)h.aj(a0)
d.ac()
h=new B.ar(A.V,A.R,A.X,A.Y,A.W)
h.b=A.ae
h.c=1.6
h.r=A.c.gp(0)
c0.af(d,h)
b4.lK(c0,"!",new B.m(j+-3,i+-8),A.c,14)}if(!f.x)j=(D.aWn.q(0,k)||D.B1.am(0,k)||k==="buck"||k==="regulator")&&!w.rN(f)&&w.WH(f,0)+w.WH(f,1)>0
else j=!1
if(j){m+=0
l+=-40
$.U()
j=new B.ar(A.V,A.R,A.X,A.Y,A.W)
j.r=A.as.gp(0)
c0.O(new B.m(m,l),10,j)
b4.lK(c0,"!",new B.m(m+-3,l+-8),A.v,14)}for(a8=0;a8<2;++a8){m=f.c
l=a8===0
j=l?-1:1
i=D.mN.am(0,k)?(f.ch-1)*38:0
i=m*b6+j*(42+i)
j=f.d*b7
a9=new B.m(i,j)
$.U()
m=new B.ar(A.V,A.R,A.X,A.Y,A.W)
m.r=F.nV.gp(0)
c0.O(a9,7,m)
m=new B.ar(A.V,A.R,A.X,A.Y,A.W)
m.b=A.ae
m.c=2.4
m.r=(l&&w.bla(f)?A.c2:A.ac).gp(0)
c0.O(a9,6,m)
if(l&&w.bla(f))b4.lK(c0,"+",new B.m(i+-4,j+-22),A.c2,13)}}for(v=w.f,s=v.length,q=0;q<v.length;v.length===s||(0,B.I)(v),++q){b0=v[q]
r=b0.a*b6+b0.c
o=b0.b*b7+b0.d
b1=new B.m(r,o)
b2=A.h.D(b0.r/0.8,0,1)
n=B.ap(M.OL,F.a11,b2)
n.toString
m=b0.f
$.U()
l=new B.ar(A.V,A.R,A.X,A.Y,A.W)
l.r=n.gp(0)
l.c=2.4
l.d=A.bG
c0.ah(b1,new B.m(r-b0.e*0.035,o-m*0.035),l)
l=new B.ar(A.V,A.R,A.X,A.Y,A.W)
l.r=n.j(0.35*b2).gp(0)
l.y=A.PV
c0.O(b1,4.5*b2+1,l)}if(A.d.aR(u,new C.bNF())){b3=A.d.cH(u,0,new C.bNG())
$.U()
b7=B.L()
b7.r=D.blq.j(0.05+0.09*b3*(0.5+0.5*Math.sin(w.d*22))).gp(0)
c0.aE(new B.a5(0,0,b8,b9),b7)
b7="short|"+B.v(b6)
a9=$.aRF.h(0,b7)
if(a9==null){a9=B.h0(b5,A.cK,b5,b5,b5,D.fJy,A.a7,A.cb,b5,A.e5,A.cc)
a9.nI(b6-24)
$.aRF.n(0,b7,a9)}a9.a5(c0,new B.m(12,10))}},
lK(d,e,f,g,h){var w,v=null,u=e+"|"+g.m()+"|"+B.v(h)
if($.aRF.a>300)$.aRF.a7(0)
w=$.aRF.h(0,u)
if(w==null){w=B.h0(v,A.cK,v,v,v,B.cW(v,v,v,v,v,v,v,v,v,B.l(v,v,g,v,v,v,v,v,v,v,v,h,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),e),A.a7,A.cb,v,A.e5,A.cc)
w.eJ()
$.aRF.n(0,u,w)}w.a5(d,f)},
cP0(d,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.aI($.U().r,A.ak,null,null,B.a([],x.v))
e.E(new B.aZ(a0.a,a0.b))
w=C.hW2(a0,a1,a2)
e.E(new B.cn(w.a,w.b,a1.a,a1.b))
v=a2.a
u=Math.abs(v.fr)
t=a2.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ap(A.aQ,F.NZ,A.h.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ap(A.aH,A.aQ,A.h.D(r*1.2,0,1))
u.toString
o=u}else o=A.bl
u=B.L()
u.b=A.ae
u.c=a3?7:5
u.d=A.bG
s=a3?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
d.af(e,u)
u=B.L()
u.b=A.ae
u.c=2.4
u.d=A.bG
u.r=(a3?A.c:o).gp(0)
d.af(e,u)
if(q){n=new B.ank(new B.ve(B.A_(e),!1,B.a([],x.l))).gH(0)
m=40+A.h.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=this.b
k=0
for(;;){v.jY()
j=t[u].b
j===$&&B.d()
if(!(k<j.a.length()/22))break
j=s.d
v.jY()
i=t[u].b
i===$&&B.d()
i=A.h.F(k*22+j*m*l,i.a.length())
v.jY()
j=t[u].b
j===$&&B.d()
j=j.a.length()
v.jY()
h=t[u].b
h===$&&B.d()
g=A.h.F(i+j,h.a.length())
v.jY()
f=t[u].WW(g)
j=new B.ar(A.V,A.R,A.X,A.Y,A.W)
j.r=A.c.gp(0)
d.O(f.a,2.6,j);++k}}},
a04(d,e,f,g){var w,v,u,t
$.U()
w=B.L()
v=g?A.aV:A.a5
u=g?A.b_:A.a9
t=B.ap(e,A.v,0.3)
t.toString
w.san(new B.a6(v,u,A.w,B.a([e,f,e,t],x.O),A.Jw,null).az(0,d))
return w},
b1H(d,e,f){return this.a04(d,e,f,!0)},
cb4(d,e){return this.a04(d,A.bl,A.hX,e)},
akN(d,e){var w,v,u
$.U()
w=B.L()
w.san(D.eRs.az(0,B.c0(e,4.2)))
d.O(e,4.2,w)
w=e.a6(0,D.eGB)
v=e.a6(0,D.eGL)
u=B.L()
u.r=A.cU.gp(0)
u.c=1.2
d.ah(w,v,u)},
cqO(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=4294626325,b5=4286331629,b6=4287322667,b7=4293870660,b8=$.U(),b9=B.L()
b9.san(D.ccl.az(0,D.fus))
b9.c=3.4
b9.d=A.bG
w=B.L()
w.r=A.v.j(0.45).gp(0)
w.y=O.p1
c0.c3(D.fuh,w)
if(c2){w=B.bx(D.fuq,A.k4)
v=B.L()
v.r=A.c.j(0.14).gp(0)
c0.aq(w,v)}u=C.hzX(c1)
c0.ah(new B.m(-u,0),D.eI8,b9)
c0.ah(D.eFf,new B.m(u,0),b9)
t=c1.x
w=c1.b
s=D.mN.am(0,w)&&c1.ch!==1
if(s){J.bs(c0.c.save())
c0.bW(0,c1.ch)}switch(w){case"battery":b2.bJE(c0,c1)
break
case"solar":r=B.bx(D.fuj,A.jL)
c0.aq(r,b2.a04(new B.a5(r.a,r.b,r.c,r.d),A.d1,A.bP,!1))
b8=B.L()
w=B.ap(D.bpu,A.di,0.25+0.55*c1.f)
w.toString
v=B.ap(D.bzk,A.m1,0.3+0.4*c1.f)
v.toString
b8.san(new B.a6(A.aw,A.aD,A.w,B.a([w,v],x.O),b3,b3).az(0,D.abQ))
c0.aE(D.abQ,b8)
q=B.L()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(p=1;p<6;++p){b8=-34+p*68/6
c0.ah(new B.m(b8,-18),new B.m(b8,18),q)}for(p=1;p<4;++p){b8=-18+p*9
c0.ah(new B.m(-34,b8),new B.m(34,b8),q)}for(p=0;p<6;++p){b8=-34+(p+0.5)*68/6
$.U()
w=new B.ar(A.V,A.R,A.X,A.Y,A.W)
w.r=A.cF.j(0.5).gp(0)
w.c=0.6
c0.ah(new B.m(b8,-18),new B.m(b8,18),w)}b8=new B.aI($.U().r,A.ak,b3,b3,B.a([],x.v))
b8.E(new B.aZ(-34,18))
b8.E(new B.aq(-6+40*c1.f,-18))
b8.E(new B.aq(4+40*c1.f,-18))
b8.E(new B.aq(-24,18))
b8.E(new B.bz())
w=B.L()
w.r=A.c.j(0.1+0.22*c1.f).gp(0)
c0.af(b8,w)
w=c1.f
b8=B.L()
b8.r=A.eK.j(0.9).gp(0)
c0.O(D.eFj,4+4*w,b8)
break
case"crank":o=B.bx(D.fu3,A.h5)
c0.aq(o,b2.b1H(new B.a5(o.a,o.b,o.c,o.d),A.bz,A.bQ))
b8=B.L()
b8.san(D.aUt.az(0,B.c0(A.J,12)))
c0.O(A.J,12,b8)
n=new B.m(Math.cos(c1.y)*22,Math.sin(c1.y)*22)
b8=B.L()
b8.r=A.cF.gp(0)
b8.c=5
b8.d=A.bG
c0.ah(A.J,n,b8)
b8=B.L()
b8.san(D.eRP.az(0,B.c0(n,7)))
c0.O(n,7,b8)
b2.akN(c0,D.eI1)
b2.akN(c0,D.eF3)
break
case"turbine":b8=b8.r
w=x.v
v=new B.aI(b8,A.ak,b3,b3,B.a([],w))
v.E(new B.aZ(-3,24))
v.E(new B.aq(3,24))
v.E(new B.aq(1.5,0))
v.E(new B.aq(-1.5,0))
v.E(new B.bz())
m=B.L()
m.r=A.bP.gp(0)
c0.af(v,m)
for(v=c0.c,l=0;l<3;++l){m=c1.y
J.bs(v.save())
v.rotate((m+l*2.094)*180/3.141592653589793,0,0)
m=B.a([],w)
k=new B.aI(b8,A.ak,b3,b3,m)
m.push(new B.aZ(0,-2))
k.ac()
j=new B.cn(6,-14,2,-30)
m.push(j)
i=k.f
if(i!=null)j.aj(i)
k.ac()
j=new B.cn(-2,-14,0,-2)
m.push(j)
i=k.f
if(i!=null)j.aj(i)
k.ac()
j=new B.bz()
m.push(j)
m=k.f
if(m!=null)j.aj(m)
k.ac()
m=new B.ar(A.V,A.R,A.X,A.Y,A.W)
m.r=A.c.gp(0)
c0.af(k,m)
v.restore()}b8=B.L()
b8.san(D.eRv.az(0,B.c0(A.J,4.5)))
c0.O(A.J,4.5,b8)
break
case"switch":o=B.bx(D.fub,A.pp)
b8=B.L()
b8.san(D.aw6.az(0,new B.a5(o.a,o.b,o.c,o.d)))
c0.aq(o,b8)
b2.akN(c0,D.VN)
b2.akN(c0,D.aPb)
h=c1.w?D.aPb:H.aP1
b8=B.L()
b8.r=A.ax.gp(0)
b8.c=6
b8.d=A.bG
c0.ah(D.VN,h,b8)
b8=B.L()
b8.r=(c1.w?A.bf:A.bP).gp(0)
b8.c=4
b8.d=A.bG
c0.ah(D.VN,h,b8)
b8=B.l0(D.VN,h,0.85)
b8.toString
w=B.L()
w.r=A.aC.gp(0)
c0.O(b8,5,w)
break
case"fuse":g=B.bx(D.aVf,D.aUy)
b8=B.L()
b8.r=A.fC.j(0.25).gp(0)
c0.aq(g,b8)
b8=B.L()
b8.b=A.ae
b8.c=1.4
b8.r=A.aE.gp(0)
c0.aq(g,b8)
if(!t){b8=B.L()
b8.c=1.6
b8.r=B.ap(A.bP,A.cX,c1.fx).gp(0)
c0.ah(D.aPx,D.aP9,b8)}else{b8=B.L()
b8.c=1.6
b8.r=A.bX.gp(0)
c0.ah(D.aPx,D.eIw,b8)
b8=B.L()
b8.c=1.6
b8.r=A.bX.gp(0)
c0.ah(D.eG6,D.aP9,b8)
b8=B.L()
b8.r=A.e_.gp(0)
c0.O(A.J,6,b8)}for(f=0;f<2;++f){e=B.c1(new B.m(M.hs[f]*22,0),20,9)
c0.aq(B.bx(e,A.ht),b2.a04(e,A.de,A.nP,!0))}break
case"pot":b8=B.L()
b8.san(D.eRG.az(0,B.c0(A.J,21)))
c0.O(A.J,21,b8)
for(l=0;l<=10;++l){d=2.356194490192345+l*3.141592653589793*1.5/10
b8=Math.cos(d)
w=Math.sin(d)
v=Math.cos(d)
m=Math.sin(d)
k=new B.ar(A.V,A.R,A.X,A.Y,A.W)
k.r=A.aE.gp(0)
k.c=1.2
c0.ah(new B.m(b8*18,w*18),new B.m(v*22,m*22),k)}b8=B.L()
b8.san(D.eRt.az(0,B.c0(A.J,13)))
c0.O(A.J,13,b8)
a0=2.356194490192345+c1.f*3.141592653589793*1.5
b8=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
m=Math.sin(a0)
k=B.L()
k.r=A.aQ.gp(0)
k.c=3
k.d=A.bG
c0.ah(new B.m(b8*3,w*3),new B.m(v*12,m*12),k)
break
case"resistor":a1=B.bx(D.aVf,D.aUy)
b8=B.L()
b8.san(D.cfT.az(0,new B.a5(a1.a,a1.b,a1.c,a1.d)))
c0.aq(a1,b8)
b8=x.O
a2=B.J([47,B.a([B.b_(b4),B.b_(b5),A.v],b8),100,B.a([B.b_(b6),A.v,B.b_(b6)],b8),220,B.a([B.b_(b7),B.b_(b7),B.b_(b6)],b8),470,B.a([B.b_(b4),B.b_(b5),B.b_(b6)],b8),1000,B.a([B.b_(b6),A.v,B.b_(b7)],b8)],x.i,x.bF)
a3=a2.h(0,c1.r)
if(a3==null){b8=a2.h(0,100)
b8.toString
a3=b8}for(p=0;p<3;++p){b8=-14+p*9
w=new B.ar(A.V,A.R,A.X,A.Y,A.W)
w.r=a3[p].gp(0)
c0.aE(new B.a5(b8,-9,b8+4.5,9),w)}b8=B.L()
b8.r=A.aQ.gp(0)
c0.aE(D.fuE,b8)
b8=c1.r
b2.lK(c0,b8>=1000?"1k\u03a9":""+A.h.S(b8)+"\u03a9",D.eHx,A.ac,10)
break
case"bulb":w=c1.fx
if(w>0){v=B.L()
v.r=A.eK.j(0.55*w).gp(0)
v.y=A.Dz
c0.O(H.wd,34,v)}o=B.c1(D.eDZ,12,18)
c0.aq(B.bx(o,A.ht),b2.a04(o,A.bl,A.dW,!0))
for(p=0;p<3;++p){w=13+p*3.5
v=new B.ar(A.V,A.R,A.X,A.Y,A.W)
v.r=A.dJ.gp(0)
v.c=1
c0.ah(new B.m(-9,w),new B.m(9,w),v)}w=B.L()
if(t)v=A.GR
else{v=B.ap(A.dW,A.i_,c1.fx)
m=c1.fx
v=v.j(0.25+0.7*m)}if(t)m=A.Hc
else{m=B.ap(A.d1,A.eK,c1.fx)
m.toString}w.san(new B.bU(A.n_,0.5,A.w,b3,0,B.a([v,m.j(0.18+0.5*c1.fx)],x.O),b3,b3).az(0,B.c0(A.ul,17)))
c0.O(A.ul,17,w)
w=B.L()
w.b=A.ae
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c0.O(A.ul,17,w)
b8=b8.r
w=x.v
m=new B.aI(b8,A.ak,b3,b3,B.a([],w))
m.E(new B.aZ(-9,-12))
m.E(new B.cn(-12,-4,-9,0))
v=B.L()
v.b=A.ae
v.c=2
v.r=A.c.j(0.45).gp(0)
c0.af(m,v)
v=B.L()
v.r=A.cG.gp(0)
v.c=1.4
c0.ah(D.eIq,D.eIs,v)
v=B.L()
v.r=A.cG.gp(0)
v.c=1.4
c0.ah(D.eG_,D.eG2,v)
w=B.a([],w)
a4=new B.aI(b8,A.ak,b3,b3,w)
a4.E(new B.aZ(-4,-2))
for(l=0;l<6;l=a5){a5=l+1
b8=(l&1)===0?-6:1
b8=new B.aq(-4+a5*8/6,-2+b8)
w.push(b8)
v=a4.f
if(v!=null)b8.aj(v)
a4.ac()}$.U()
b8=B.L()
b8.b=A.ae
b8.c=1.8
if(t)w=A.bb
else{w=B.ap(A.d1,D.bqE,c1.fx)
w.toString}b8.r=w.gp(0)
c0.af(a4,b8)
break
case"led":w=c1.fx
if(w>0){v=B.L()
v.r=A.aC.j(0.6*w).gp(0)
v.y=D.bNB
c0.O(A.ul,30,v)}w=B.L()
w.r=A.dW.gp(0)
w.c=2.4
c0.ah(D.eIy,D.eIx,w)
w=B.L()
w.r=A.dW.gp(0)
w.c=2.4
c0.ah(D.eG8,D.eG7,w)
b8=b8.r
w=x.v
a6=new B.aI(b8,A.ak,b3,b3,B.a([],w))
a6.E(new B.aZ(-12,8))
a6.E(new B.aq(-12,-6))
a6.E(new B.cn(0,-26,12,-6))
a6.E(new B.aq(12,8))
a6.E(new B.bz())
v=B.L()
if(t)m=A.jB
else{m=B.ap(A.eD,D.bsq,c1.fx)
m.toString}if(t)k=A.l9
else{k=B.ap(A.kK,A.aC,c1.fx)
k.toString}v.san(new B.a6(A.aw,A.aD,A.w,B.a([m,k],x.O),b3,b3).az(0,D.ftw))
c0.af(a6,v)
v=B.L()
v.b=A.ae
v.c=1.2
v.r=A.jX.gp(0)
c0.af(a6,v)
v=B.L()
v.r=A.ew.gp(0)
c0.aE(D.ftC,v)
w=new B.aI(b8,A.ak,b3,b3,B.a([],w))
w.E(new B.aZ(-7,-4))
w.E(new B.cn(-6,-12,0,-15))
b8=B.L()
b8.b=A.ae
b8.c=2
b8.r=A.c.j(0.5).gp(0)
c0.af(w,b8)
break
case"motor":a7=new B.a5(-28,-14,20,14)
c0.aq(B.bx(a7,A.iE),b2.b1H(a7,A.an,A.bo))
b8=B.L()
b8.r=A.cx.gp(0)
c0.aE(D.ft3,b8)
b8=B.L()
b8.r=A.cF.gp(0)
c0.aE(D.ft5,b8)
b8=c0.c
J.bs(b8.save())
b8.translate(31,0)
for(l=0;l<3;++l){J.bs(b8.save())
b8.rotate((c1.y+l*2.094)*180/3.141592653589793,0,0)
w=B.c1(H.aOX,15,7)
v=new B.ar(A.V,A.R,A.X,A.Y,A.W)
v.r=A.cX.j(0.9).gp(0)
c0.c3(w,v)
b8.restore()}w=B.L()
w.r=A.ax.gp(0)
c0.O(A.J,3,w)
b8.restore()
b2.lK(c0,"M",D.eI0,A.ax,14)
break
case"buzzer":a8=B.c1(A.J,42,42)
b8=B.L()
b8.san(D.eRK.az(0,a8))
c0.c3(a8,b8)
b8=B.L()
b8.r=A.v.gp(0)
c0.O(A.J,6,b8)
b8=B.L()
b8.b=A.ae
b8.c=1.4
b8.r=A.aT.gp(0)
c0.O(A.J,6,b8)
b2.lK(c0,"+",D.eHU,A.ac,12)
for(b8=b2.b,l=1;l<=3;++l){w=c1.fx
v=w>0?A.h.F(b8.d*14,5):0
v=B.c0(A.J,24+l*5+v)
m=new B.ar(A.V,A.R,A.X,A.Y,A.W)
m.b=A.ae
m.c=2
m.r=A.c5.j(w*(1-l*0.22)).gp(0)
c0.cR(v,-0.7,1.4,!1,m)}break
case"heater":o=B.bx(D.fu7,A.iE)
w=B.L()
w.san(D.cdp.az(0,new B.a5(o.a,o.b,o.c,o.d)))
c0.aq(o,w)
w=B.a([],x.v)
a9=new B.aI(b8.r,A.ak,b3,b3,w)
a9.E(new B.aZ(-24,0))
for(l=0;l<8;l=a5){b8=(l&1)===0?-10:10
a5=l+1
b8=new B.cn(-24+l*6+3,b8,-24+a5*6,0)
w.push(b8)
v=a9.f
if(v!=null)b8.aj(v)
a9.ac()}b8=c1.fx
if(b8>0.1){$.U()
w=B.L()
w.b=A.ae
w.c=10
w.r=D.brp.j(0.5*b8).gp(0)
w.y=A.ld
c0.af(a9,w)}$.U()
b8=B.L()
b8.b=A.ae
b8.c=3.2
b8.d=A.bG
b8.r=B.ap(A.mq,Ah.zi,c1.fx).gp(0)
c0.af(a9,b8)
break
case"capacitor":a7=new B.a5(-16,-22,16,18)
b8=B.bx(a7,A.iE)
w=B.L()
w.san(D.avT.az(0,a7))
c0.aq(b8,w)
w=B.L()
w.r=A.bP.gp(0)
c0.aE(D.ftM,w)
for(p=0;p<4;++p)b2.lK(c0,"\u2212",new B.m(-14,-18+p*9),A.ax,11)
b0=new B.a5(-16,-24,16,-17)
c0.aq(B.bx(b0,A.ht),b2.cb4(b0,!1))
b8=38*c1.fx
w=18-b8
$.U()
v=B.L()
v.r=A.bf.j(0.5).gp(0)
c0.aE(new B.a5(-3,w,11,w+b8),v)
b2.lK(c0,"1F",H.wd,A.c,11)
break
case"radio":a1=B.bx(D.abQ,A.h5)
b8=B.L()
b8.san(D.cg7.az(0,new B.a5(a1.a,a1.b,a1.c,a1.d)))
c0.aq(a1,b8)
b8=B.L()
b8.b=A.ae
b8.c=1.4
b8.r=A.nP.j(0.6).gp(0)
c0.aq(a1,b8)
b8=B.bx(D.fu8,A.jL)
w=B.L()
w.r=A.e6.gp(0)
c0.aq(b8,w)
for(p=0;p<6;++p){b8=-10+p*4.4
w=new B.ar(A.V,A.R,A.X,A.Y,A.W)
w.r=A.mq.gp(0)
w.c=1.4
c0.ah(new B.m(-27,b8),new B.m(-3,b8),w)}b8=B.L()
b8.r=(c1.fx>0?A.hb:A.oL).gp(0)
c0.aE(D.fta,b8)
if(c1.fx>0){b8=8+A.h.F(b2.b.d*7,18)
w=B.L()
w.r=A.bC.gp(0)
w.c=1.6
c0.ah(new B.m(b8,-13),new B.m(b8,-3),w)}b8=B.L()
b8.san(D.aUt.az(0,B.c0(D.aaN,6)))
c0.O(D.aaN,6,b8)
b8=B.L()
b8.r=A.nP.gp(0)
c0.O(D.eFe,4,b8)
b8=B.L()
b8.r=A.dW.gp(0)
b8.c=1.8
c0.ah(D.eF9,D.aPg,b8)
if(c1.fx>0)for(b8=b2.b,l=1;l<=2;++l){w=B.c0(D.aPg,4+l*5+A.h.F(b8.d*8,5))
v=new B.ar(A.V,A.R,A.X,A.Y,A.W)
v.b=A.ae
v.c=1.4
v.r=A.oS.j(0.7).gp(0)
c0.cR(w,-2.4,1.6,!1,v)}break
case"tv":w=B.bx(D.fui,A.iE)
v=B.L()
v.r=M.ni.gp(0)
c0.aq(w,v)
b1=B.bx(D.fuf,A.ht)
if(c1.fx>0&&!c1.x){b8=c0.c
J.bs(b8.save())
b8.clipRRect(B.nn(b1),$.n_(),!0)
b8.translate(-33,-21)
K.h94(c0,D.fB9,c1.at,b2.b.d,c1.ax,-1,b3,b3)
b8.restore()
b8=B.L()
b8.r=A.bf.gp(0)
c0.O(D.eFq,1.6,b8)}else{w=B.L()
w.r=D.x_.gp(0)
c0.aq(b1,w)
b8=new B.aI(b8.r,A.ak,b3,b3,B.a([],x.v))
b8.E(new B.aZ(-33,-21))
b8.E(new B.aq(-10,-21))
b8.E(new B.aq(-33,0))
b8.E(new B.bz())
w=B.L()
w.r=A.c.j(0.05).gp(0)
c0.af(b8,w)}b8=B.L()
b8.r=A.bz.gp(0)
c0.aE(D.ftB,b8)
break}C.iIB(c0,c1,b2.b.d,b2.gcfL())
if(t)b2.lK(c0,"\u2716",D.eIA,A.aC,14)
if(s)c0.c.restore()},
aTE(d,e,f,g){var w,v,u,t,s,r,q,p,o=new C.bNE(),n=e.d,m=e.b,l=n-m,k=e.a,j=m+l*0.06,i=k+l*0.16,h=new B.a5(k,j,i,j+l*0.88)
j=l*0.08
k=B.bx(h,new B.aQ(j,j))
$.U()
w=B.L()
w.san(o.$2(h,D.dk3))
d.aq(k,w)
i-=0.5
w=l*0.2
k=e.c-w
v=new B.a5(i,m,k,n)
u=k-i
t=i+u*0.66
s=B.L()
s.san(o.$2(v,D.dJi))
d.aE(new B.a5(i,m,t,n),s)
s=B.L()
s.san(o.$2(v,D.dic))
d.aE(new B.a5(t,m,k,n),s)
k-=0.5
s=m+j
n=l*0.12
r=k+n
q=new B.a5(k,s,r,s+l*0.84)
s=B.L()
s.san(o.$2(q,D.aFl))
d.aE(q,s)
r-=0.5
s=m+l*0.3
p=new B.a5(r,s,r+l*0.1,s+l*0.4)
s=l*0.05
s=B.bx(p,new B.aQ(s,s))
r=B.L()
r.san(o.$2(p,D.aFl))
d.aq(s,r)
r=i+2
s=m+l*0.18
o=B.L()
o.r=A.c.j(0.18).gp(0)
d.aE(new B.a5(r,s,r+(u-4),s+j),o)
if(f){o=l*0.42
this.lK(d,"+",new B.m(t+u*0.08,m+n),A.dl,o)
if(g!=null)this.lK(d,g,new B.m(i+u*0.12,m+w),A.bP,o)}},
bMJ(d,e,f){return this.aTE(d,e,!0,f)},
bMI(d,e,f){return this.aTE(d,e,f,null)},
bJE(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a6.e,a4=B.v(a3===A.h.bm(a3)?A.h.S(a3):a3)+"V"
if(a3<=2){a2.bMJ(a5,D.fu6,a4)
a2.lK(a5,"\u2212",D.eIa,A.ac,12)
a2.lK(a5,"+",D.eF4,A.aQ,12)
$.U()
w=B.L()
w.r=A.by.gp(0)
a5.aE(D.ftV,w)
w=a6.as
v=B.L()
v.r=B.ap(A.aC,A.bf,w).gp(0)
a5.aE(new B.a5(-22,15,-22+44*w,19),v)
if(a6.as<=0.02)a2.lK(a5,"FLAT",D.eHH,A.c2,9)}else if(a3<=4.5){u=a3>3?3:2
t=u*13+6
w=-t/2
v=w+t
s=new B.a5(-31,w,31,v)
r=B.bx(s,A.jL)
$.U()
q=B.L()
q.san(D.cfx.az(0,s))
a5.aq(r,q)
for(r=w+3,p=0;p<u;++p){q=r+p*13
a2.bMI(a5,new B.a5(-27,q,25,q+11.5),!1)}for(q=r+(t-6),o=0;o<2;++o){n=D.di6[o]
$.U()
m=new B.ar(A.V,A.R,A.X,A.Y,A.W)
m.r=A.dW.gp(0)
a5.aE(new B.a5(n,r,n+1.6,q),m)}a2.lK(a5,a4,new B.m(-9,v+1),A.aQ,10)
a2.lK(a5,"+",new B.m(25,w-13),A.aQ,11)}else if(a3<=9){l=new B.a5(-18,-16,18,18)
w=B.bx(l,A.ht)
v=$.U()
r=B.L()
r.san(D.cfP.az(0,l))
a5.aq(w,r)
k=new B.a5(-18,-4,18,18)
r=B.rj(k,A.ht,A.ht,A.bJ,A.bJ)
w=B.L()
w.san(D.avT.az(0,k))
a5.aq(r,w)
j=new B.a5(-18,-16,18,-11)
w=B.rj(j,A.bJ,A.bJ,A.ht,A.ht)
r=B.L()
r.san(D.cgf.az(0,j))
a5.aq(w,r)
i=B.L()
i.san(D.eS_.az(0,D.ftF))
a5.O(D.aPB,4,i)
r=B.a([],x.v)
h=new B.aI(v.r,A.ak,null,null,r)
for(g=0;g<6;++g){f=g*3.141592653589793/3
w=7+Math.cos(f)*5
v=-19+Math.sin(f)*5
if(g===0){w=new B.aZ(w,v)
r.push(w)
v=h.f
if(v!=null)w.aj(v)
h.ac()}else{w=new B.aq(w,v)
r.push(w)
v=h.f
if(v!=null)w.aj(v)
h.ac()}}h.E(new B.bz())
a5.af(h,i)
$.U()
w=B.L()
w.r=A.cz.gp(0)
a5.O(D.eGf,2,w)
a2.lK(a5,"9V",D.eID,A.c,13)
a2.lK(a5,"+",D.eHD,A.aQ,11)}else{e=new B.a5(-34,-12,34,18)
w=B.bx(e,A.ht)
$.U()
v=B.L()
v.san(D.cdk.az(0,e))
a5.aq(w,v)
d=new B.a5(-36,-18,36,-10)
v=B.bx(d,D.eS7)
w=B.L()
w.san(D.aw9.az(0,d))
a5.aq(v,w)
for(g=0;g<6;++g){w=new B.ar(A.V,A.R,A.X,A.Y,A.W)
w.r=A.ax.gp(0)
a5.O(new B.m(-14+g*5.6,-14),1.6,w)}w=B.L()
w.r=A.bu.j(0.92).gp(0)
a5.aE(D.fug,w)
for(o=0;o<2;++o){w=D.cIy[o]
n=w.a
a0=w.b
a1=B.c1(new B.m(n,-21),7,8)
w=B.bx(a1,A.Fx)
v=new B.ar(A.V,A.R,A.X,A.Y,A.W)
v.san(D.cdT.az(0,a1))
a5.aq(w,v)
v=B.bx(B.c1(new B.m(n,-24),3.5,9),A.Fx)
w=new B.ar(A.V,A.R,A.X,A.Y,A.W)
w.r=a0.gp(a0)
a5.aq(v,w)}a2.lK(a5,"\u2212",D.eIb,A.ac,11)
a2.lK(a5,"+",D.eF_,A.aC,11)
a2.lK(a5,"12V",H.aPv,A.ax,11)}},
aD(d){return!0}}
C.nj.prototype={
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a7(k)
A.d.a7(d.b)
w=B.S(x.N,x.Y)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.I)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.uk(o,r,q,p)
n.au6(o,r,q,p)
k.push(n)
J.ij(s[4],new C.cxK(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.I)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.ao_(m,u[1],l,u[3])}}}
C.alu.prototype={
R(){var w=x.N
return new C.alv(B.c3(2000,1,1,0,0,0,0,0),A.J,A.aB,B.S(w,x.gl),B.aR(w),$,A.bI,0,B.a([],x.X),null,null)}}
C.alv.prototype={
ah8(d){var w=this,v=w.ch
if(v!=null)v.a2(0)
w.l(new C.bNh(w,d))
w.ch=B.cD(A.mx,new C.bNi(w))},
t(){var w=this.ch
if(w!=null)w.a2(0)
w=this.db
if(w!=null)w.a2(0)
this.bza()},
a2o(d,e){return this.coD(d,e)},
b69(d){return this.a2o(d,!1)},
coD(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a2o=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
r=d.at
q=e?A.o6:A.zs
p=d.b
w=3
return B.b(K.hwm(s,r,p,d.ax<3.2,q,$.r_().h(0,p).b),$async$a2o)
case 3:o=g
t.cy=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a2o,v)},
cBK(d){var w=this,v=new B.W(Date.now(),0,!1),u=w.CW.c0(0,d.a,new C.bNj()),t=J.cK(u)
t.K(u,v)
t.bs(u,new C.bNk(v))
if(t.gI(u)>=4){t.a7(u)
t=w.db
if(t!=null)t.a2(0)
w.a3L(d)
return}if(t.gI(u)===3){t=w.db
if(t!=null)t.a2(0)
w.db=B.cD(A.j5,new C.bNl(w,u,d))}},
a22(d){return this.cmS(d)},
cmS(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a22=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
w=3
return B.b(C.iJR(s,d.b,A.h.S(A.h.F(t.a.c.d*0.12,1)*100)),$async$a22)
case 3:t.cy=!1
case 1:return B.h(u,v)}})
return B.i($async$a22,v)},
a3L(d){return this.czc(d)},
czc(d){var w=0,v=B.j(x.H),u=this,t
var $async$a3L=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bV(A.L,null,new C.bNf(u,d),t,!0,!0,!0,null,!1,!1,x.H),$async$a3L)
case 2:return B.h(null,v)}})
return B.i($async$a3L,v)},
Z(){this.a4()
this.blk()
this.mv()},
blk(){this.a.c.e=new C.bNB(this)},
mO(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.w8(0,d)
for(w=q.a.c.a,v=w.length,u=q.cx,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=D.mN.h(0,s.b)
if((r==null?null:r.b)!==D.Bs)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.q(0,s.a)&&!q.cy){u.K(0,s.a)
q.a2o(s,!0)}}else u.X(0,s.a)}if((q.ax+=d)>0.16){q.ax=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)G.dI(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)G.dI(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cW.ai()<0.5
else u=!1
if(u)G.dI(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){G.dI(900+A.cW.aw(800),"",90,0,0.1,o)
if(A.cW.ai()<0.35)G.dI(300+A.cW.aw(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cW.ai()<0.4
else u=!1
if(u)G.dI(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)G.dI(330+A.n.F(110*A.h.bc(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)G.dI((A.h.bc(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)G.dI(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)G.dI(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cW.ai()<0.5
else u=!1
if(u)G.dI(1200,"",30,0,0.07,o)
break
case"turbine":u=s.f
if(u>0.1)G.dI(80,"",150,0,0.05*u,o)
break
case"crank":u=s.f
if(u>0.15)G.dI(110+u*140,"",70,0,0.08,"saw")
break}}}w=q.a.w
if(w!=null)w.$0()
q.l(new C.bNC())},
bdl(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.at
l=p.c
k=n===0?-1:1
j=D.mN.am(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new B.y(p,n)
r=i}}}return s},
b6P(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.T(w).k("dp<1>"),w=new B.dp(w,v),w=new B.bQ(w,w.gI(0),v.k("bQ<aj.E>")),u=d.a,v=v.k("aj.E"),t=d.b;w.B();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.at
p=s.d
o=D.mN.am(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cP1(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
o=p.a
n=this.at
m=o.c
l=p.b===0?-1:1
k=D.mN.am(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.at
m=o.c
j=p.d===0?-1:1
i=D.mN.am(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=C.hW2(new B.m(k,n),new B.m(i,l),p)
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
ah6(){this.a.toString
this.l(new C.bMH())},
bvO(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.dlO[v]
if(!A.d.aR(p.a.c.a,new C.bND(u,w))){o=new B.m(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?A3.Bh:o
s=s?A3.Bh:o
q=t.ana(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.x=null
G.dI(1200,"",50,0,0.3,"tri")
p.ah6()},
C(d){var w,v,u,t,s,r,q,p,o,n=this
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.U8[v].a)
u=w.length
t=u>8
s=t?A.d.dw(w,0,A.n.ao(u+1,2)):w
r=t?A.d.fE(w,A.n.ao(w.length+1,2)):A.M
q=n.a.d
if(q!=null){w=B.a3(q).k("cv<1>")
w=B.B(new B.cv(q,w),w.k("M.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.I)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b6E(s,!0))
n.a.toString
if(t)w.push(n.b6E(r,!0))
w.push(B.E(B.cg(new C.bNA(n,q)),1))
return B.w(w,A.l,null,A.e,A.i,0,A.p)},
b6E(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=$.r_()
s=t.h(0,u).d.j(0.14)
r=new B.aQ(14,14)
q=new B.ax(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.aA(p,B.q(p,B.w(B.a([B.c(t.h(0,u).c,p,p,p,p,p,p,A.yi,p,p,p),B.c(t.h(0,u).b,p,1,A.a2,p,p,p,A.ox,p,p,p)],n),A.l,p,A.bc,A.i,0,A.p),A.f,p,p,new B.p(s,p,new B.bE(q,q,q,q),new B.bc(r,r,r,r),p,p,A.m),p,p,p,L.p0,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bMI(this,u),p,p,p,p,p,p,!1,A.a4))}return B.q(p,B.ck(m,p,p,A.hp,p,p,A.aJ,!1),A.f,p,p,new B.p(L.CM,p,new B.bE(A.a1,A.a1,new B.ax(o,1,A.r,-1),A.a1),p,p,p,A.m),p,58,p,p,p,p,p,p)},
cqP(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a2.b,a1=$.r_().h(0,a0)
a1.toString
w=a2.dy
v=a2.fr
u=new C.bN3(e,a1)
t=new C.bN2()
s=B.n(20)
r=a1.d
q=B.K(r.j(0.55),A.r,1.3)
p=B.a([new B.ac(0,A.H,r.j(0.18),A.cy,16)],x.V)
o=r.j(0.18)
n=B.n(10)
n=B.q(A.z,B.c(a1.c,d,d,d,d,d,d,A.yi,d,d,d),A.f,d,d,new B.p(o,d,d,n,d,d,A.m),d,34,d,d,d,d,d,34)
o=B.E(B.c(a1.b,d,1,A.a2,d,d,d,B.l(d,d,r,d,d,d,d,d,d,d,d,15,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d),1)
m=B.n(999)
l=B.K(A.aT,A.r,1)
k=x.p
m=B.a([B.A(B.a([n,A.aa,o,B.aA(d,B.q(d,B.c(e.f?"Less":"About",d,d,d,d,d,d,A.Xk,d,d,d),A.f,d,d,new B.p(d,d,l,m,d,d,A.m),d,d,d,d,A.oc,d,d,d),A.y,!1,D.hP1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.bMP(e),d,d,d,d,d,d,!1,A.a4),B.aJ(d,d,d,d,D.c7K,d,d,d,new C.bMQ(e,a2),d,d,d,d,"Remove part",A.cp),B.aJ(d,d,d,d,Ad.J_,d,d,d,new C.bMR(e),d,d,d,d,d,A.cp)],k),A.l,d,A.e,A.i,0,d,d)],k)
if(e.f)A.d.u(m,B.a([B.c(a1.e,d,d,d,d,d,d,A.LJ,d,d,d),A.cR,B.c("How it is made: "+a1.f,d,d,d,d,d,d,U.aZg,d,d,d)],k))
m.push(A.aj)
if(a2.x)m.push(D.h3p)
else m.push(new B.C(A.eY,B.A(B.a([t.$2(A.h.a1(Math.abs(a2.dy),2),"VOLTS"),A.b6,t.$2(A.h.a1(Math.abs(a2.fr)*1000,0),"MILLIAMPS"),A.b6,t.$2(A.h.a1(Math.abs(w*v),2),"WATTS")],k),A.l,d,A.e,A.i,0,d,d),d))
j=e.a.c.bjb(a2)
if(j!=null){a1=(a2.x?A.aC:A.as).j(0.14)
w=B.n(10)
v=B.K((a2.x?A.aC:A.as).j(0.5),A.r,1)
m.push(new B.C(A.hA,B.q(d,B.c((a2.x?"Why it burnt out":"Why it is not working")+": "+j,d,d,d,d,d,d,D.h_c,d,d,d),A.f,d,d,new B.p(a1,d,v,w,d,d,A.m),d,d,d,d,A.ct,d,d,d),d))}if(C.htH(a0)){a1=B.a([],k)
for(i=0;i<10;i=h){h=i+1
a1.push(new B.C(A.eY,new E.e5("CH "+h,a2.at===i,new C.bMV(e,a2,i),d,r,d),d))}a1=B.cc(B.A(a1,A.l,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,d,A.aJ)
if(e.a.c.rN(a2)){w=F.TX[A.n.F(a2.at,10)]
v=e.f?" Tap the TV 3 times quickly to open the big screen.":""
v="Showing: "+w.a+"."+v
w=v}else w="The TV is off. Give it power with the + dot towards the battery +."
a1=B.a([A.aj,a1,A.at,B.c(w,d,e.f?4:1,A.a2,d,d,d,N.hI,d,d,d)],k)
if(e.a.c.rN(a2))a1.push(new E.fL(A.xu,"Open big screen",new C.bMW(e,a2),r,d))
A.d.u(m,a1)}if(D.mN.am(0,a0)&&!C.htH(a0)){a1=B.a([A.aj],k)
if(e.f||!e.a.c.rN(a2))a1.push(B.c(e.a.c.rN(a2)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",d,d,d,d,d,d,N.hI,d,d,d))
if(e.a.c.rN(a2))a1.push(new E.fL(A.Re,"Open the "+$.r_().h(0,a0).b,new C.bMX(e,a2),r,d))
A.d.u(m,a1)}if(D.mN.am(0,a0))A.d.u(m,B.a([A.aj,new E.fL(A.E0,"Make it bigger (or tap it 4 times)",new C.bMY(e,a2),r,d)],k))
e.a.toString
a1=a0==="buck"
if(a1||a0==="regulator"){w=A.h.a1(a2.db,1)
if(e.a.c.rN(a2))v=a2.dx
else{e.a.toString
v=a0==="regulator"?5:a2.e}v=B.a([A.aj,B.c("Volts in: "+w+" V   \u2192   Volts out: "+A.h.a1(v,1)+" V",d,d,d,d,d,d,D.fU_,d,d,d)],k)
if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dGa[g]
w=f===A.h.bm(f)?A.h.S(f):f
a1.push(new E.e5(B.v(w)+" V out",a2.e===f,new C.bMZ(e,a2,f),d,r,d))}v.push(new B.C(A.kP,B.bY(A.bH,a1,A.bq,d,0,6),d))}if(a0==="regulator")v.push(D.hiE)
A.d.u(m,v)}if(e.a.c.Ni(a2)&&!a2.x){a1=A.h.a1(a2.cx,2)
w=A.h.a1(e.a.c.AR(a2),2)
v=e.a.c
o=v.aqP(a2)?"   \u26a0 OVERLOADED":""
a1=B.c("Supplying "+a1+" A of the "+w+" A it can give"+o,d,d,d,d,d,d,B.l(d,d,v.aqP(a2)?A.c2:A.ek,d,d,d,d,d,d,d,d,12.5,d,d,A.C,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
w=B.n(4)
o=A.h.D(a2.cx/e.a.c.AR(a2),0,1)
v=e.a.c.aqP(a2)?A.aC:A.bf
m.push(new B.C(A.hA,B.w(B.a([a1,A.cR,B.bv(w,B.jK(A.by,d,d,5,d,o,new B.ld(v,x.c)),A.ap)],k),A.B,d,A.e,A.i,0,A.p),d))}a1=a0==="battery"
if(a1&&a2.e===1.5){w=a2.as
v=A.h.S(w*100)
if(w<=0.02)w="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else w=w>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.C(A.hA,B.c("Charge: "+v+"%"+w,d,d,d,d,d,d,D.fNl,d,d,d),d))}if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dtL[g]
w=f===1.5?"1.5 V (rechargeable)":B.v(f)+" V"
a1.push(new E.e5(w,a2.e===f,new C.bN_(e,a2,f),d,r,d))}m.push(B.bY(A.bH,a1,A.bq,d,0,6))}if(a0==="resistor"){a1=B.a([],k)
for(g=0;g<5;++g){f=D.diA[g]
w=f>=1000?"1 k\u03a9":""+A.n.S(f)+" \u03a9"
a1.push(new E.e5(w,a2.r===f,new C.bN0(e,a2,f),d,r,d))}m.push(B.bY(A.bH,a1,A.bq,d,0,6))}if(a0==="solar")m.push(u.$3("Sunlight",a2.f,new C.bN1(a2)))
if(a0==="turbine")m.push(u.$3("Wind",a2.f,new C.bMS(a2)))
if(a0==="pot")m.push(u.$3("Knob",a2.f,new C.bMT(a2)))
if(a0==="ldr")m.push(u.$3("Light",a2.f,new C.bMU(a2)))
if(a0==="crank")m.push(D.hdQ)
if(a0==="switch")m.push(B.c(a2.w?"Closed: the loop is joined up.":"Open: the loop is broken.",d,d,d,d,d,d,N.hI,d,d,d))
return B.q(d,new B.cS(D.baO,B.cc(B.w(m,A.B,d,A.e,A.P,0,A.p),A.t,d,A.y,d,d,d,d,d,A.ah),d),A.f,d,d,new B.p(F.a_1,d,q,s,p,d,A.m),d,d,D.hOb,d,D.bHL,d,d,d)}}
C.bfQ.prototype={}
C.Xb.prototype={
R(){return new C.aH3(C.hzW(),new B.cB(null,x.gJ),B.aR(x.S))}}
C.aH3.prototype={
Z(){this.a4()
$.aS.cT$.push(this)
this.ah7()},
ah7(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ah7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fW5(),$async$ah7)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.iJ_(t.d,r)
if(s!=null){t.l(new C.e7y(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$ah7,v)},
Gf(){var w,v=this
if(!v.as)return
w=C.iyP(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bJN(w)},
jh(d){if(d!==A.fY)this.Gf()},
t(){$.aS.hQ(this)
this.Gf()
this.a3()},
cfN(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.T(v).k("X<1>")
t=new B.X(v,new C.e7H(q),u).gI(0)
s=new B.X(v,new C.e7I(),u).gI(0)
r=new B.X(v,w.gd3F(),u).gI(0)
if(t!==q.x||s!==q.y||r!==q.z)q.l(new C.e7J(q,t,s,r))}if(A.n.F(q.w,45)===0)q.Gf()
if(A.n.F(q.w,10)===0){w=q.f
$.akz()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.q(0,q.f)&&$.akz()[q.f].c.$1(q.d)){w.K(0,q.f)
C.Kf("bell",B.a([0,4,7,12],x.t),700,0.45)
q.l(new C.e7K())
q.Gf()
w=q.c
w.toString
w=B.KI(w)
if(w!=null)w.T(B.b2(p,p,p,p,p,A.t,p,B.c("\u2705 Challenge done: "+$.akz()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mv,p,p,p,p,p,p,p,p,p,p))}},
ak_(){var w=0,v=B.j(x.H),u=this,t
var $async$ak_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cf(null,null,!0,null,new C.e7x(u),t,null,!0,!0,x.H),$async$ak_)
case 2:return B.h(null,v)}})
return B.i($async$ak_,v)},
b3N(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.n(12),t=B.K(f.j(0.45),A.r,1)
u=B.a([B.ao(w,B.q(w,B.V(d,f,w,w,w,18),A.f,w,w,new B.p(v,w,t,u,w,w,A.m),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ao(w,h,w,w,w,-1,-3,w))
return B.aA(w,B.h6(new B.a4(40,38,new B.am(A.a0,w,A.ab,A.f,u,w),w),w,e,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4)},
b3M(d,e,f,g){return this.b3N(d,e,f,g,null)},
auO(d,e,f,g){var w=null,v=f.j(0.1),u=B.n(10),t=B.K(f.j(0.4),A.r,1)
return B.E(B.aA(w,B.q(w,B.A(B.a([B.V(d,f,w,w,w,15),A.dU,new B.d_(1,A.c8,B.c(e,w,1,A.a2,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.bc,A.i,0,w,w),A.f,w,w,new B.p(v,w,t,u,w,w,A.m),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),1)},
aii(){var w=0,v=B.j(x.H),u=this,t
var $async$aii=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a7(t,!1).ca(B.e4(new C.e7t(u),!1,null,x.H)),$async$aii)
case 2:t=u.e.gbo()
if(t!=null)t.blk()
if(u.c!=null)u.l(new C.e7u())
u.Gf()
return B.h(null,v)}})
return B.i($async$aii,v)},
bMQ(){var w,v,u,t,s=null,r=this.f
$.akz()
if(r>=11)return s
w=this.r
v=w.q(0,r)
r=v?A.bh:A.aC
u=B.n(9)
t=B.K(L.CM,A.r,1.5)
return B.q(s,B.at(B.c(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.ym,s,s,s),s,s,s),A.f,s,D.baE,new B.p(r,s,t,u,s,s,A.m),s,s,s,s,A.fd,s,s,s)},
al7(){var w=0,v=B.j(x.H),u=this,t
var $async$al7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bV(F.ng,null,new C.e7G(u),t,!0,!0,!0,A.kA,!1,!1,x.H),$async$al7)
case 2:return B.h(null,v)}})
return B.i($async$al7,v)},
cfO(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.aA(r,B.q(r,D.c4h,A.f,r,r,new B.p(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e7M(d),r,r,r,r,r,r,!1,A.a4),o=B.n(11)
o=B.q(r,D.bgE,A.f,r,r,new B.p(A.bt,r,B.K(A.aH.j(0.45),A.r,1),o,r,r,A.m),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.q(r,B.w(B.a([B.A(B.a([p,A.aa,o,A.aa,B.E(B.w(B.a([D.hgy,B.c(w,r,1,A.a2,r,r,r,B.l(r,r,s.y>0||s.z>0?A.f1:A.hn,r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.B,r,A.e,A.i,0,A.p),1),new C.aAU(s.gcmA(),r),A.uw,s.b3M(A.ru,"Construction Lab: real 3D wiring, plumbing and a house",A.cX,new C.e7N(s,d)),s.b3N(A.m8,"Challenges",A.aQ,s.gcEq(),s.bMQ()),s.b3M(A.DW,"How to play",A.aH,new C.e7O(d,e))],v),A.l,r,A.e,A.i,0,r,r),A.aj,B.A(B.a([s.auO(A.of,"Circuits",A.bk,s.gcx3()),A.b6,s.auO(A.p5,"Repair",A.aQ,new C.e7P(s)),A.b6,s.auO(I.xs,"Clear",A.c2,new C.e7Q(s))],v),A.l,r,A.e,A.i,0,r,r)],v),A.l,r,A.e,A.P,0,A.p),A.f,r,r,new B.p(L.CM,r,new B.bE(A.a1,A.a1,new B.ax(q,1,A.r,-1),A.a1),r,r,r,A.m),r,r,r,r,D.bMW,r,r,r)},
C(d){var w=this,v=null
$.avi="tech"
return B.c6(v,A.c7,B.bn(!0,B.w(B.a([w.cfO(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.hyM(w.d,w.e,w.gcfM(),v),1)],x.p),A.l,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
C.aAU.prototype={
R(){return new C.bdU(null,null)}}
C.bdU.prototype={
gaBb(){var w,v=this,u=v.d
if(u===$){w=B.br(null,A.Z,null,1,null,v)
w.cU(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
t(){this.gaBb().t()
this.bAw()},
C(d){var w=null,v=this.a.c
return B.aA(w,B.h6(new B.a4(42,42,B.ca(this.gaBb(),new C.cPz(this),w),w),w,"AI Inventor: say what you want to make",w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bdT.prototype={
a5(d,e){var w,v,u,t=null,s=e.eq(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.U()
w=B.L()
w.r=A.b1.j(0.25+0.15*o).gp(0)
w.y=O.p1
d.O(s,r+2+o*2,w)
w=B.L()
w.san(D.eRF.az(0,B.c0(s,r)))
d.O(s,r,w)
v=B.L()
v.b=A.ae
v.c=2.2
v.san(new B.hf(A.z,0,6.283185307179586,A.w,D.d7Z,t,new B.n7(p)).az(0,B.c0(s,r)))
d.O(s,r,v)
p=new C.cPy(d)
p.$3(s.a6(0,A.ul),8+o*1.5,1)
q*=4
p.$3(s.a6(0,D.eGm),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a6(0,D.eIH),2.6,0.5+0.5*Math.cos(q))
u=B.h0(t,A.cK,t,t,t,D.fJE,A.a7,A.cb,t,A.e5,A.cc)
u.eJ()
u.a5(d,s.a6(0,new B.m(-u.b.c/2,5)))},
aD(d){return d.b!==this.b}}
C.aBe.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.aBf.prototype={
t(){var w,v,u
for(w=this.hh$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hg$
w===$&&B.d()
w.t()
this.bz9()}}
C.aNM.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.bCQ.prototype={}
C.h8.prototype={}
C.KJ.prototype={
a9(){return"ScreenStyle."+this.b}}
C.mv.prototype={}
C.WV.prototype={
R(){return new C.aGU(A3.Bh,null,null)}}
C.aGU.prototype={
gac9(){var w,v=this,u=v.d
if(u===$){w=B.br(null,A.p_,null,1,null,v)
w.ct(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
gacT(){var w=D.mN.h(0,this.a.c)
return w==null?D.aVy:w},
t(){if(this.f){P.Dj(Y.LC)
P.bId()}this.gac9().t()
this.bCo()},
gCf(){var w=this.gac9().y
w=w==null?null:A.n.ao(w.a,1000)
return(w==null?0:w)/1000},
OT(){var w,v=this,u=v.e
if(u==null)return null
w=F.iz[u].e
if(w===-2)return null
if(w===-1)return A.n.F(v.y+A.h.bc(Math.max(0,v.gCf()-v.z)/10),14)
return w},
KC(d){this.l(new C.e3u(this,d))},
b7a(d){this.l(new C.e3v(this,d,14))},
aFd(d){var w=this.OT()
if(w==null)w=d>0?-1:0
return this.b7a(w+d)},
cJv(d,e){if(e.a<=0||e.b<=0||this.OT()==null)return
this.l(new C.e3F(this,d,e))},
af4(){return this.c7Q()},
c7Q(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$af4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.OT()
if(q==null){w=1
break}r.a=!1
s=t.c
s.toString
w=3
return B.b(B.bV(A.L,null,new C.e3t(r,q),s,!0,!0,!0,null,!1,!1,x.H),$async$af4)
case 3:if(t.c!=null&&r.a)t.b7a(q)
case 1:return B.h(u,v)}})
return B.i($async$af4,v)},
cL3(){var w=this,v=!w.f
w.l(new C.e3G(w,v))
if(v){P.Dj(Y.acZ)
P.huz(w.gacT().b===D.y3)}else{P.Dj(Y.LC)
P.bId()}},
cfR(){var w,v=this
if(!v.f)return
B.jJ()
v.l(new C.e3H(v))
w=v.c.L(x.q).f
w.N6()
if(v.r)w.T(F.aXG)},
aS_(d){return B.cg(new C.e3m(this,d))},
cqd(d){var w,v=this,u=null,t=v.gCf(),s=t-v.w,r=s<1.4?new K.b1r(v.x,s):u
if(F.iz[d].e===-1){w=Math.max(0,t-v.z)
return new C.ahc(d,w,r,A.n.F(v.y+A.h.bc(w/10),14),u)}return new C.ahc(d,t,r,u,u)},
b0I(d){var w=null,v=A.c.j(0.92),u=d*0.42
return B.aG(!1,A.a3,!0,w,B.aM(!1,w,!0,new B.C(new B.R(u,0,u,0),B.A(B.a([B.V(A.kR,A.ax,w,w,w,d*0.6),new B.a4(d*0.18,w,w,w),B.c("Learn more",w,w,w,w,w,w,B.l(w,w,A.ax,w,w,w,w,w,w,w,w,d*0.48,w,w,A.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,w,w),w),A.nB,!0,w,w,w,w,D.hOd,w,w,w,w,w,w,this.gc7P(),w,w,w,w,w,w,w),A.f,v,0,w,w,A.nB,w,w,A.ai)},
b3O(d,e,f,g){var w=null,v=B.nu(w,A.bb,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w)
return B.aJ(w,w,w,w,B.V(d,A.c,w,w,w,w),w,w,g,f,w,w,w,v,e,w)},
cfQ(d,e,f){return this.b3O(d,e,f,null)},
cym(){var w=this,v=null,u=new C.e3D(),t=A.v.j(0.72),s=B.n(22),r=B.K(w.gacT().d.j(0.5),A.r,1),q=u.$3(D.bXy,"AD \u2212",new C.e3z(w)),p=u.$3(A.ath,"AD +",new C.e3A(w)),o=u.$5$color$on(A.kQ,"HOME",new C.e3B(w),w.gacT().d,w.e==null),n=w.e
n=n!=null&&F.iz[n].e===-1
return B.q(v,B.A(B.a([q,p,o,u.$5$color$on(A.A6,"ADS",new C.e3C(w),A.c5,n)],x.p),A.l,v,A.e,A.P,0,v,v),A.f,v,v,new B.p(t,v,r,s,v,v,A.m),v,v,D.hOj,v,A.I4,v,v,v)},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.gacT(),l=o.f,k=!l||!o.r
l=l?B.aF(d,A.dL,x.w).w.r.b+26:8
w=o.cfQ(A.cC,"Back to the board",new C.e3I(d))
v=o.f
u=v?Ap.IB:A.xu
v=v?"Leave full screen":"Full screen"
v=o.b3O(u,v,o.gbdP(),D.hPe)
u=B.n(20)
t=o.e
s=m.a
r=x.p
q=new B.C(new B.R(8,l,8,0),B.A(B.a([w,A.aa,v,A.aa,B.E(new B.bJ(A.a9,n,n,B.q(n,B.c(t==null?s:s+" \xb7 "+F.iz[t].a,n,1,A.a2,n,n,n,Ar.yc,n,n,n),A.f,n,n,new B.p(A.bb,n,n,u,n,n,A.m),n,n,n,n,A.lE,n,n,n),n),1)],r),A.l,n,A.e,A.i,0,n,n),n)
p=m.b===D.y3?o.bP_(m):o.ctJ(m)
l=o.f
w=!l
v=l?o.gb3P():n
if(l){l=B.at(p,n,n,n)
u=k?1:0
r=new B.am(A.a0,n,A.b5,A.t,B.a([l,B.ao(n,B.xT(new B.dn(!k,q,n),A.b0,A.ig,u),n,n,0,0,0,n)],r),n)
l=r}else l=B.w(B.a([q,A.aj,o.cym(),B.E(new B.C(A.cA,B.at(p,n,n,n),n),1)],r),A.l,n,A.e,A.i,0,A.p)
return B.c6(n,A4.a0F,B.bn(w,B.aA(A.c0,l,A.y,!1,n,v,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!1,A.a4),w,!1,A.ag,w,w),n,!1,!1,n,n)},
cfP(d){var w
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
ctJ(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.abZ
switch(n.a){case 1:w=44
break
case 2:w=30
break
case 3:w=22
break
case 4:w=26
break
default:w=14
break}v=B.ca(p.gac9(),new C.e3y(p,w,d,m),o)
if(n===D.ac_)v=new B.C2(D.bNA,v,o)
n=p.cfP(n)
u=p.f?A.hO:Au.a28
t=m?4:5
s=d.c
r=B.ap(s,A.c,m?0.25:0.08)
r.toString
q=B.ap(s,A.v,0.5)
q.toString
q=B.a([r,s,q],x.O)
s=B.n(w)
r=B.a([new B.ac(0,A.H,d.d.j(0.28),A.J,36)],x.V)
return new B.fK(n,B.q(o,B.q(o,v,A.f,o,o,new B.p(A.v,o,o,B.n(w-3),o,o,A.m),o,o,o,o,A7.I5,o,o,o),A.f,o,o,new B.p(o,o,o,s,r,new B.a6(A.aw,A.aD,A.w,q,o,o),A.m),o,o,o,u,new B.R(t,t,t,t),o,o,o),o)},
bcr(d){var w=Date.now(),v=A.n.D(this.a.d+A.h.bc(this.gCf()*0.4),0,100),u=d.b===D.abZ,t=u?34:20,s=u?28:18
return new B.C(new B.R(t,12,s,2),B.cg(new C.e3E(new B.W(w,0,!1),v)),null)},
az_(d,e,f){var w,v=null,u=d.d,t=B.ap(u,A.v,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.n(e*0.26)
w=x.p
t=B.a([B.q(v,B.at(B.c(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.p(v,v,v,u,D.dAw,new B.a6(A.aw,A.aD,A.w,t,v,v),A.m),v,e,v,v,v,v,v,e)],w)
if(f)A.d.u(t,B.a([A.at,B.c(d.a,v,1,A.a2,v,v,v,D.fQo,v,v,v)],w))
return B.aA(v,B.w(t,A.l,v,A.e,A.P,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.e3r(this,d),v,v,v,v,v,v,!1,A.a4)},
c5G(d,e){return this.az_(d,e,!0)},
c5n(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=o===D.aVz||o===D.Bu,m=d.d,l=B.ap(m,A.v,0.55)
l.toString
m=B.ap(m,A.kb,0.5)
m.toString
m=B.a([l,A.dD,m],x.O)
l=q.bcr(d)
w=n?190:138
v=B.n(24)
u=B.K(A.aT,A.r,1)
w=B.aA(p,B.q(p,B.bv(B.n(23),B.b4(p,p,p,new C.ahc(0,q.gCf(),p,p,p),A.hi),A.ap),A.f,p,p,new B.p(p,p,u,v,p,p,A.m),p,w,p,A.ih,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.e3p(q),p,p,p,p,p,p,!1,A.a4)
v=n?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.iz[s]
t.push(new B.cp(A.z,p,p,new B.d7(A.dn,A.z,A.f,q.c5G(r,n?58:54),p),p))}l=B.a([l,A.aj,w,A.af,B.E(B.li(0.92,t,v,8,12,A.vo,p,!1),1)],u)
if(o!==D.ac_){o=A.c.j(0.16)
w=B.n(28)
l.push(B.q(p,B.cg(new C.e3q(q)),A.f,p,p,new B.p(o,p,p,w,p,p,A.m),p,p,p,D.bHV,H.aq4,p,p,p))}return B.q(p,B.w(l,A.l,p,A.e,A.i,0,A.p),A.f,p,p,new B.p(p,p,p,p,p,new B.a6(A.aw,A.aD,A.w,m,p,p),A.m),p,p,p,p,p,p,p,p)},
bIe(d,e){var w=this,v=null,u=w.OT(),t=w.bcr(d),s=B.E(w.aS_(e),1),r=x.p,q=B.a([B.bS(0,B.aA(v,B.q(v,B.at(B.c(F.iz[e].a,v,v,v,v,v,v,A.LM,v,v,v),v,v,v),A.f,A.v,v,v,v,v,v,v,v,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.e3j(w),v,v,v,v,v,v,!1,A.a4),0,0,0)],r)
if(u!=null)u=!w.f||!w.r
else u=!1
if(u)q.push(B.ao(8,w.b0I(22),v,v,v,10,8,v))
return B.q(v,B.w(B.a([t,s,new B.a4(v,38,new B.am(A.a0,v,A.ab,A.t,q,v),v)],r),A.l,v,A.e,A.i,0,A.p),A.f,A.v,v,v,v,v,v,v,v,v,v,v)},
aV2(d,e){return B.ca(this.gac9(),new C.e3o(this,e,d),null)},
bP_(d){var w,v,u,t=this,s=null,r=t.a.c,q=r==="carscreen"
if(t.f)return B.qI(t.aV2(d,q))
r=r==="imac"?26:8
w=d.c
v=B.ap(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.n(q?26:14)
u=B.a([new B.ac(0,A.H,d.d.j(0.25),A.J,36)],x.V)
return new B.fK(1.5384615384615383,B.q(s,B.bv(B.n(q?20:8),t.aV2(d,q),A.ap),A.f,s,s,new B.p(s,s,s,v,u,new B.a6(A.aw,A.aD,A.w,w,s,s),A.m),s,s,s,A.apZ,new B.R(8,8,8,r),s,s,s),s)}}
C.bAS.prototype={
a5(d,e){var w,v,u,t,s,r=e.a,q=e.b,p=0+r,o=0+q
$.U()
w=B.L()
v=this.c
u=B.ap(v,A.v,0.6)
u.toString
t=B.ap(v,A.kb,0.4)
t.toString
w.san(new B.a6(A.aw,A.aD,A.w,B.a([u,A.dD,t],x.O),null,null).az(0,new B.a5(0,0,p,o)))
d.aE(new B.a5(0,0,p,o),w)
for(p=this.b,o=p*0.4,p*=0.3,s=0;s<5;++s){w=Math.sin(o+s)
u=Math.sin(p+s*1.7)
t=new B.ar(A.V,A.R,A.X,A.Y,A.W)
t.r=v.j(0.1).gp(0)
t.y=D.bNF
d.O(new B.m(r*(0.15+0.2*s+0.05*w),q*(0.3+0.3*u)),q*(0.2+0.04*s),t)}},
aD(d){return!0}}
C.ahc.prototype={
a5(d,e){var w=this
return K.MM(d,e,w.b,w.c,w.e,w.d)},
aD(d){return!0}}
C.aPA.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.bzE.prototype={}
C.aaK.prototype={
C(d){var w=null
return B.c6(B.eQ(w,w,w,!0,!0,D.akR,w,1,!0,w,0,!1,w,!1,w,w,B.aJ(w,w,w,w,I.auQ,w,w,w,new C.cqD(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.hpI,w,w,w,1,w,!0),D.akR,B.ck(B.a([D.eKd,B.cg(new C.cqE())],x.p),w,w,D.bJ1,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.YB.prototype={
R(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aID(w,new B.au(A.ay,$.ay()),$,A.bI,0,B.a([],x.X),null,null)}}
C.aID.prototype={
Z(){this.a4()
this.mv()},
bah(d){var w=this.d.length
return A.n.F(A.h.bc(A.h.F(A.h.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
mO(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.bah(v.f)
if(w!==v.x){v.x=w
E.mR("bell",24+A.n.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.l(new C.f4h(v))
C.Kf("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
chO(){if(this.d.length<2)return
this.l(new C.f4d(this))},
b4s(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.l(new C.f4c(w,v))},
C(d){var w,v,u,t,s=this,r=null,q=s.gchN(),p=s.d,o=B.E(B.aA(r,B.b4(r,r,r,new C.bB3(p,s.f,r),A.hi),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.w(B.a([o,new B.a4(r,40,B.at(B.c(n,r,r,r,r,r,r,D.fYz,r,r,r),r,r,r),r)],w),A.l,r,A.e,A.i,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.aEN[A.n.F(v,8)].j(0.9)
t=new B.aQ(20,20)
o.push(B.aA(r,B.q(r,B.c(p[v],r,r,r,r,r,r,D.fXL,r,r,r),A.f,r,r,new B.p(u,r,r,new B.bc(t,t,t,t),r,r,A.m),r,r,r,A.eY,A.h1,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.f4f(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a4))}p=A.c.j(0.07)
return E.m3(A.aQ,A.fh,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.w(B.a([new E.fm(o,r,r),B.A(B.a([B.E(B.aO(r,A.M,!1,r,!0,A.t,r,B.aP(),s.e,r,r,r,r,r,2,B.bB(r,new B.b5(4,B.n(14),A.a1),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.jP,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.am,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.f4g(s),r,!1,r,r,!1,r,!0,r,A.ad,r,r,r,r,r,r,r,r,r,r,r,A.du,!0,A.a7,r,A.ao,r,r,r,r),1),A.aa,new E.fL(A.ii,"Add",s.gchL(s),A.c,r),A.b6,new E.fL(A.oe,"Spin",q,A.bf,r)],w),A.l,r,A.e,A.i,0,r,r)],w),A.l,r,A.e,A.P,0,A.p))}}
C.bB3.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=k/2,i=e.b,h=i/2+10,g=new B.m(j,h),f=Math.min(k,i)/2-24
i=f+8
k=$.U()
w=B.L()
w.r=D.bn3.gp(0)
d.O(g,i,w)
w=B.L()
w.b=A.ae
w.c=3
w.r=A.aQ.gp(0)
d.O(g,i,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(i=d.c,t=this.c,s=u/2,r=0;r<v;++r){q=t+r*u
p=B.c0(g,f)
o=new B.ar(A.V,A.R,A.X,A.Y,A.W)
o.r=D.aEN[A.n.F(r,8)].gp(0)
d.cR(p,q,u,!0,o)
o=B.c0(g,f)
p=new B.ar(A.V,A.R,A.X,A.Y,A.W)
p.b=A.ae
p.c=2
p.r=A.c.j(0.6).gp(0)
d.cR(o,q,u,!0,p)
J.bs(i.save())
i.translate(j,h)
i.rotate((q+s)*180/3.141592653589793,0,0)
p=w[r]
if(p.length>12)p=A.a.av(p,0,11)+"\u2026"
n=new B.iU(new B.eF(p,l,l,A.cV,l,l,l,l,l,l,D.fKt),A.a7,A.cb,new B.k3(1),l,l,l,l,A.cc,l,A.cK)
n.eJ()
p=n.b
o=p.c
p=p.a.c
n.a5(d,new B.m(f-o-16,-p.gb4(p)/2))
i.restore()}i=B.L()
i.r=D.aks.gp(0)
d.O(g,20,i)
i=B.L()
i.b=A.ae
i.c=3
i.r=A.aQ.gp(0)
d.O(g,20,i)
m=new B.aI(k.r,A.ak,l,l,B.a([],x.v))
h-=f
m.E(new B.aZ(j,h+26))
h-=10
m.E(new B.aq(j-14,h))
m.E(new B.aq(j+14,h))
m.E(new B.bz())
h=B.L()
h.r=A.c.gp(0)
d.af(m,h)
h=B.L()
h.b=A.ae
h.c=2
h.r=A.bb.gp(0)
d.af(m,h)},
aD(d){return!0}}
C.Xj.prototype={
R(){return new C.boT($,A.bI,0,B.a([],x.X),null,null)}}
C.boT.prototype={
Z(){this.a4()
this.mv()},
mO(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.Kf("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.VL(900,new C.ebg())}w.l(new C.ebh())},
b4u(d){return this.l(new C.ebb(this,d))},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aY(A.n.v(A.h.ao(m,60)),2,"0")
v=A.a.aY(A.n.v(A.n.F(A.h.cB(m),60)),2,"0")
m=B.b4(n,n,n,new C.bvH(l,A.c2,n),A.aX4)
u=B.c(w+":"+v,n,n,n,n,n,n,D.fPj,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.at(new B.a4(280,280,new B.am(A.z,n,A.ab,A.t,B.a([m,B.w(B.a([u,B.c(t,n,n,n,n,n,n,D.fOb,n,n,n),A.at,B.c("Sessions done: "+o.r,n,n,n,n,n,n,A.wo,n,n,n)],s),A.l,n,A.e,A.P,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.dx2[r]
u.push(new E.e5(""+q+" min",o.d===q,new C.ebd(o,q),n,A.c2,n))}m=o.f
p=m?Ab.vH:A.fR
m=m?"Pause":"Start"
return E.m3(A.c2,A.fh,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.w(B.a([new E.fm(u,n,n),new E.fm(B.a([new E.fL(p,m,new C.ebe(o),A.bf,n),new E.fL(A.mF,"Reset",new C.ebf(o),A.c,n)],s),n,n)],s),A.l,n,A.e,A.P,0,A.p))}}
C.bvH.prototype={
a5(d,e){var w,v,u,t,s=e.eq(A.J),r=e.a/2-14
$.U()
w=B.L()
w.b=A.ae
w.c=16
w.r=A.c.j(0.08).gp(0)
d.O(s,r,w)
w=B.c0(s,r)
v=B.L()
v.b=A.ae
v.c=16
v.d=A.bG
u=this.c
t=B.ap(u,A.c,0.4)
t.toString
v.san(new B.hf(A.z,-1.5707963267948966,4.71238898038469,A.w,B.a([u,t,u],x.O),null,null).az(0,B.c0(s,r)))
d.cR(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aD(d){return d.b!==this.b}}
C.Wu.prototype={
R(){return new C.bor($,A.bI,0,B.a([],x.X),null,null)}}
C.bor.prototype={
Z(){this.a4()
this.mv()},
mO(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.UR.h(0,p.d)
w.toString
v=A.d.eL(w,new C.dVD())
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
E.mR("flute",D.ch1[t]+5,1400,0.35)}p.l(new C.dVE())},
gchR(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.Ly("Press Start",0.5)
w=D.UR.h(0,this.d)
w.toString
v=A.d.eL(w,new C.dVy())
u=A.h.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.Ly("Breathe in",0.5+0.5*A.dS.aA(0,p))
case 1:return new B.Ly("Hold",1)
case 2:return new B.Ly("Breathe out",1-0.5*A.dS.aA(0,p))
default:return new B.Ly("Hold",0.5)}}}return new B.Ly("",0.5)},
C(d){var w,v,u,t,s,r=this,q=null,p=r.gchR(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.fL.j(0.12+(3-u)*0.05)
n.push(B.q(q,q,A.f,q,q,new B.p(s,q,q,q,u===0?B.a([new B.ac(0,A.H,A.fL.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(B.c(p.a,q,q,q,q,q,q,A.qE,q,q,q))
n.push(B.ao(0,B.c("Breaths: "+r.w,q,q,q,q,q,q,A.jP,q,q,q),q,q,q,q,q,q))
n=B.at(new B.a4(300,340,new B.am(A.z,q,A.ab,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aN(D.UR.geD(D.UR));w.B();){v=w.gP(w)
o.push(new E.e5(v,r.d===v,new C.dVB(r,v),q,A.fL,q))}w=r.e
v=w?A.vL:A.fR
w=w?"Stop":"Start"
o.push(new E.fL(v,w,new C.dVC(r),A.bf,q))
return E.m3(A.fL,A.fh,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new E.fm(o,q,q))}}
C.aMa.prototype={}
C.Xa.prototype={
R(){return new C.boK(new B.cB(null,x.A),B.a([],x.au),A.ax,A.c)}}
C.boK.prototype={
C(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aJ(s,s,s,s,I.pc,s,s,s,new C.e72(t,d),s,s,s,s,"Share",s)],r),p=B.bv(B.n(18),new B.e9(B.aA(s,B.b4(s,s,s,new C.bqO(t.e,t.x,s),A.hi),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e73(t),new C.e74(t),s,s,s,s,s,s,s,s,s,new C.e75(t),s,s,s,s,!1,A.a4),t.d),A.ap),o=B.a([],r)
for(w=0;w<9;++w){v=D.d9M[w]
u=!t.w&&t.f.A(0,v)
o.push(new E.GA(v,u,new C.e76(t,v),!1,s))}u=t.r
return E.m3(A.bE,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.C(A.bS,p,s),"DRAW PAD",B.w(B.a([new E.fm(o,s,s),E.jh(A.bE,""+A.h.S(u),"Brush",30,2,new C.e77(t),u),new E.fm(B.a([new E.e5("Eraser",t.w,new C.e78(t),A.A7,A.bE,s),new E.fL(A.qb,"Undo",new C.e79(t),A.c,s),new E.fL(A.es,"Clear",new C.e7a(t),A.c,s),new E.fL(A.R_,"Paper",new C.e7b(t),A.c,s)],r),s,s)],r),A.l,s,A.e,A.P,0,A.p))}}
C.bqO.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k
$.U()
w=B.L()
w.r=this.c.gp(0)
d.aE(new B.a5(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=x.v,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=$.U()
q=new B.ar(A.V,A.R,A.X,A.Y,A.W)
p=s.a
q.r=p.gp(p)
o=s.b
q.c=o
q.d=A.bG
q.e=A.dQ
q.b=A.ae
n=s.c
if(n.length===1){r=A.d.gH(n)
n=new B.ar(A.V,A.R,A.X,A.Y,A.W)
n.r=p.gp(p)
d.O(r,o/2,n)}else{p=B.a([],u)
m=new B.aI(r.r,A.ak,null,null,p)
p.push(new B.aZ(A.d.gH(n).a,A.d.gH(n).b))
m.ac()
for(l=1;l<n.length-1;){r=n[l]
o=r.a;++l
k=n[l]
r=r.b
k=new B.cn(o,r,(o+k.a)/2,(r+k.b)/2)
p.push(k)
r=m.f
if(r!=null)k.aj(r)
m.ac()}r=new B.aq(A.d.gal(n).a,A.d.gal(n).b)
p.push(r)
p=m.f
if(p!=null)r.aj(p)
m.ac()
d.af(m,q)}}},
aD(d){return!0}}
C.XX.prototype={
R(){var w=x.S
return new C.aHT(B.aR(w),B.aR(w))}}
C.aHT.prototype={
Z(){this.a4()
this.awk()},
awk(){var w,v,u=this,t=x.N,s=B.bt(D.dCO,!0,t)
A.d.E9(s)
w=x.S
v=B.T(s).c
t=B.B(B.cJ(s,0,B.dx(u.d,"count",w),v),t)
A.d.u(t,B.cJ(s,0,B.dx(u.d,"count",w),v))
A.d.E9(t)
u.e=t
u.f.a7(0)
u.r.a7(0)
u.w=0
u.x=!1},
chM(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
E.mR("bell",12+A.n.F(d,9),150,0.35)
s.l(new C.ezc(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gH(0)
u=w.gal(0)
w=s.e
w===$&&B.d()
t=x.H
if(w[v]===w[u])B.bM(A.nj,new C.ezd(s,v,u),t)
else{s.x=!0
B.bM(Aj.Da,new C.eze(s),t)}}},
C(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.d()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.c("Moves: "+r.w,q,q,q,q,q,q,A.Xr,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.n.ao(p,2)+" / "+o
o=x.p
p=B.w(B.a([new B.C(A.zD,B.A(B.a([u,B.c(p,q,q,q,q,q,q,B.l(q,q,w?A.aQ:A.ac,q,q,q,q,q,q,q,q,q,q,q,A.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.l,q,A.iB,A.i,0,q,q),q),B.E(B.iB(!0,q,q,A.y,new B.i_(v,8,8,1,q),new C.ezi(r),r.e.length,A.bg,q,A.ah,!1),1)],o),A.l,q,A.e,A.i,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.dbA[t]
o.push(new E.e5(s.b,r.d===s.a,new C.ezj(r,s),q,A.aH,q))}o.push(new E.fL(I.atg,"New game",new C.ezk(r),A.bf,q))
return E.m3(A.aH,A.fh,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new E.fm(o,q,q))}}
C.Y8.prototype={
R(){return new C.aIg(B.a([],x.t))}}
C.aIg.prototype={
chQ(d){A.d.a7(this.d)
this.w=!0
this.b4t()},
b4t(){this.d.push(A.cW.aw(4))
this.e=0
this.a1k()},
a1k(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a1k=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.l(new C.eMk(t))
s=x.H
w=3
return B.b(B.bM(A.m4,null,s),$async$a1k)
case 3:r=t.d,q=B.bt(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aY4(n)
w=7
return B.b(B.bM(new B.bh(1000*Math.max(280,600-r.length*18)),null,s),$async$a1k)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.l(new C.eMl(t))
case 1:return B.h(u,v)}})
return B.i($async$a1k,v)},
aY4(d){this.l(new C.eMi(this,d))
E.mR("marimba",D.ch0[d]+5,450,0.55)
B.bM(A.HL,new C.eMj(this),x.H)},
chS(d){var w,v,u=this
if(!u.w||u.r)return
u.aY4(d)
w=u.d
v=u.e
if(w[v]!==d){G.dI(90,"",600,0,0.5,"saw")
u.l(new C.eMm(u))
return}++v
u.e=v
if(v===w.length){u.l(new C.eMn(u))
B.bM(A.hz,new C.eMo(u),x.H)}},
C(d){var w,v,u,t,s,r,q=this,p=null,o=B.c("Best: "+q.x,p,p,p,p,p,p,V.aZM,p,p,p),n=B.c(q.y,p,p,p,p,p,p,D.fZ_,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aDE[v]
u=u.j(q.f===v?1:0.35)
t=new B.aQ(28,28)
s=q.f===v?B.a([new B.ac(0,A.H,D.aDE[v].j(0.8),A.J,30)],w):p
r=new B.ax(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.aA(p,B.cZ(p,p,p,p,A.b0,new B.p(u,p,new B.bE(r,r,r,r),new B.bc(t,t,t,t),s,p,A.m),A.jC,p,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eMp(q,v),p,p,p,p,p,p,!1,A.a4))}o=B.at(new B.C(A.ad,B.w(B.a([o,A.aj,n,A.df,new B.fK(1,B.li(1,l,2,12,12,p,A.ea,!1),p)],m),A.l,p,A.bc,A.i,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return E.m3(A.bu,A.fh,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new E.fm(B.a([new E.fL(A.fR,n,q.gchP(q),A.bf,p)],m),p,p))}}
C.Ys.prototype={
R(){return new C.bq1(new B.au(A.ay,$.ay()))}}
C.bq1.prototype={
azW(d){return B.of(A.h.a1(d,2),B.ag("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.f_D(),null)},
C(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.cA(B.aD(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.f_M()
l=B.aO(m,A.M,!1,m,!0,A.t,m,B.aP(),l,m,m,m,m,m,2,B.bB(m,m,m,m,m,m,m,m,!0,new B.b5(4,B.n(16),Ae.yM),m,m,m,m,m,m,m,m,m,m,m,new B.b5(4,B.n(16),D.b98),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.mg,"Bill amount",!0,!0,!1,m,m,m,m,D.fWc,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.am,m,m,m,m,m,A.ej,m,m,m,1,m,m,!1,"\u2022",m,new C.f_I(n),m,m,m,!1,m,m,!1,m,!0,m,A.ad,m,m,m,m,m,m,m,m,m,m,m,A.aYJ,!0,A.a7,m,A.ao,m,m,m,m)
k=A.bf.j(0.1)
s=B.n(20)
r=B.K(A.bf.j(0.35),A.r,1)
q=x.p
s=B.ck(B.a([l,A.bx,B.q(m,B.w(B.a([t.$2("Tip ("+A.h.S(n.e)+"%)","$"+n.azW(w)),t.$2("Total","$"+n.azW(v)),Aa.Pb,t.$3$big("Each of "+n.f+" pays","$"+n.azW(u),!0)],q),A.l,m,A.e,A.i,0,A.p),A.f,m,m,new B.p(k,m,r,s,m,m,A.m),m,m,m,m,A.bR,m,m,m)],q),m,m,A.f7,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cVU[p]
r.push(new E.e5(""+o+"%",A.h.S(n.e)===o,new C.f_J(n,o),m,A.bf,m))}l=n.f
return E.m3(A.bf,A.fh,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.w(B.a([new E.fm(r,"TIP",m),E.jh(A.aH,""+l,"People",20,1,new C.f_K(n),l),new E.fm(B.a([new E.e5("Round up",n.r,new C.f_L(n),m,A.aQ,m)],q),m,m)],q),A.l,m,A.e,A.P,0,A.p))}}
C.XW.prototype={
R(){var w=B.a([3,5],x.t)
return new C.bpv(w,A.cW,$,A.bI,0,B.a([],x.X),null,null)}}
C.bpv.prototype={
Z(){this.a4()
this.mv()},
mO(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.n.F(A.h.bc(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t
E.Yu("snare",0,0.5)}u.l(new C.exS())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.hc()
u.w=t
u.x=t?0:3.141592653589793
E.mR("bell",24,400,0.5)}u.l(new C.exT())}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bif(v,o.r>0,n))}u=B.aA(n,B.at(B.bY(A.fX,m,A.bq,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.exL(o),n,n,n,n,n,n,!1,A.a4)}else if(m==="coin"){t=A.h.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.K(A.de,A.r,6)
s=B.a([new B.ac(0,A.H,A.aQ.j(0.4),A.J,30)],x.V)
u=B.aA(n,B.at(B.e0(A.z,B.q(A.z,B.c(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fVl,n,n,n),A.f,n,n,new B.p(n,n,v,n,s,D.eRJ,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.exM(o),n,n,n,n,n,n,!1,A.a4)}else{m=o.as
u=B.aA(n,B.at(B.w(B.a([B.c(m===0?"?":""+m,n,n,n,n,n,n,D.fJW,n,n,n),B.c("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.jP,n,n,n)],x.p),A.l,n,A.e,A.P,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.exN(o),n,n,n,n,n,n,!1,A.a4)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.du_[r]
v.push(new E.e5(q.b,o.d===q.a,new C.exO(o,q),q.c,A.bk,n))}v=B.a([new E.fm(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(E.jh(A.bk,""+s,"Dice",4,1,new C.exP(o),s))}if(o.d==="num"){s=o.z
s=E.jh(A.bk,""+s,"From",100,1,new C.exQ(o),s)
p=o.Q
A.d.u(v,B.a([s,E.jh(A.bk,""+p,"To",1000,2,new C.exR(o),p)],m))}return E.m3(A.bk,A.fh,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.w(v,A.l,n,A.e,A.P,0,A.p))}}
C.bif.prototype={
C(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cW.ai()-0.5)*0.6
else w=0
v=B.n(22)
u=B.a([new B.ac(0,A.H,A.v.j(0.4),A.cy,14)],x.V)
t=B.a([],x.p)
for(s=D.dQ1.h(0,A.n.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bJ(s[q],p,p,B.q(p,p,A.f,p,p,A.Zu,p,18,p,p,p,p,p,18),p))
return B.eN(A.z,w,B.q(p,new B.am(A.a0,p,A.ab,A.t,t,p),A.f,p,p,new B.p(A.c,p,p,v,u,p,A.m),p,100,p,p,A.bD,p,p,100),p)}}
C.aPm.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.bCM.prototype={
t(){var w,v,u
for(w=this.hh$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hg$
w===$&&B.d()
w.t()
this.bCa()}}
C.aPH.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.bCS.prototype={
t(){var w,v,u
for(w=this.hh$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hg$
w===$&&B.d()
w.t()
this.bCw()}}
C.aQ7.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.bD1.prototype={
t(){var w,v,u
for(w=this.hh$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hg$
w===$&&B.d()
w.t()
this.bCY()}}
C.aQA.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbD())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bE()}}
C.bDa.prototype={
t(){var w,v,u
for(w=this.hh$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hg$
w===$&&B.d()
w.t()
this.bDq()}}
var z=a.updateTypes(["P(uk)","~()","P(a6N)","az<~>()","P(Dx)","G(uk,G)","H(H,uk)","P(Dt)","P(a0D)","P(adU)","P(a5F)","P(o7)","Yt()","Wt()","aaK()","Y2()","Yh()","Y3()","P(nj)","WA()","ahw(Z,G)","agj(Z,G)","~(a9<@,@>)","G(Dt,Dt)","o(es)","P(ahj)","P(a2U)","P(DI)","P(aep)","P(agn)","P(ae7)","G(G,rA)","G(G,Dx)","o(rA)","~(rA,ah<o>,G)","rA?(Dx)","XW()","x(o,a2H)","P(acL)","~(Bu)","Yw()","~(y0,o,m,u,H)","~(o,uk)","Xb()","XG(Z)","OU(Z)","WV(Z,bA<H>,bA<H>)","Jr(Z)","YB()","Xj()","Wu()","Xa()","XX()","Y8()","Ys()","P(rA)"])
C.fWt.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+18}
C.fKw.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gH(d.e.split(". "))+"."},
$S:z+24}
C.fSt.prototype={
$1(d){var w
if(!this.a.Ni(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fSu.prototype={
$1(d){return d.x},
$S:z+0}
C.fWq.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fWr.prototype={
$1(d){var w
if(!this.a.Ni(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fWs.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.eqU.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eqV.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.y(this.b,this.c))},
$S:0}
C.eqW.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd2(v).Q
v.toString
w.lO(v,A.ec,A.ig)}},
$S:7}
C.er6.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a7(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.er7.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.er2.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.er0.prototype={
$2(d,e){var w=this.a
w.r.push(B.cD(B.dw(0,0,0,d,0,0),new C.er1(w,this.b,e)))},
$S:1966}
C.er1.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.er3.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gYc().ana(0,u[1],u[2],u[3])
u[4].bP(0,new C.eqZ(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
G.dI(700+w.e*120,"",80,0,0.25,"square")
v.l(new C.er_(w.a,v,w.f,w.r))},
$S:0}
C.eqZ.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:197}
C.er_.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.n.D(A.h.bc(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.er4.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gYc().ao_(t,u[1],s,u[3])
G.dI(1500,"",45,0,0.25,"tri")
v=w.b
v.l(new C.eqY(w.a,v,w.e,w.f))},
$S:0}
C.eqY.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.n.D(A.h.bc(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.er5.prototype={
$0(){G.dI(300,"",360,-1.2,0.3,"square")
var w=this.a
w.l(new C.eqX(w,this.b))},
$S:0}
C.eqX.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.era.prototype={
$0(){var w=this.a
return w.l(new C.er9(w))},
$S:0}
C.er9.prototype={
$0(){return this.a.at=!0},
$S:0}
C.erb.prototype={
$0(){var w=this.a
return w.l(new C.er8(w))},
$S:0}
C.er8.prototype={
$0(){return this.a.at=!1},
$S:0}
C.erc.prototype={
$0(){var w=this.a
w.f.sb1(0,this.b)
w.QT()},
$S:0}
C.erd.prototype={
$0(){return this.a.a_i(this.b)},
$S:0}
C.ere.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.QT():w.b02()},
$S:2}
C.erf.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.QT():w.b02()},
$S:0}
C.eGr.prototype={
$2(d,e){return d+e},
$S:1967}
C.eGL.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.eGK(w,d))},
$S:663}
C.eGK.prototype={
$0(){var w=B.aK(J.t(this.b,"unlocked"))
w=w==null?null:A.h.M(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.eGM.prototype={
$0(){},
$S:0}
C.eGN.prototype={
$0(){},
$S:0}
C.eGt.prototype={
$0(){return this.a.l(new C.eGs(this.b,this.c))},
$S:0}
C.eGs.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eGi.prototype={
$1(d){return this.a.cx===d},
$S:30}
C.eGj.prototype={
$1(d){return this.a.cx=d},
$S:31}
C.eGk.prototype={
$1(d){return this.a.cy===d},
$S:30}
C.eGl.prototype={
$1(d){return this.a.cy=d},
$S:31}
C.eGm.prototype={
$1(d){return this.a.db===d},
$S:30}
C.eGn.prototype={
$1(d){return this.a.db=d},
$S:31}
C.eGo.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:30}
C.eGp.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.X(0,d):w.K(0,d)},
$S:31}
C.eGq.prototype={
$0(){var w=this.a
return w.l(w.gaAw())},
$S:0}
C.eGg.prototype={
$1(d){return this.a.$1(!0)},
$S:67}
C.eGh.prototype={
$1(d){return this.a.$1(!1)},
$S:119}
C.eGf.prototype={
$1(d){return this.a.$1(!1)},
$S:147}
C.eGE.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.ch=n
n=B.b4(p,p,p,new C.bma(o,p),n)
w=this.b
v=C.bFs("WORLD",w.a,w.c)
u=C.bFs("GRAVITY",B.v(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.h.S(t*100)
t=t<0.25?A.c2:A.bf
t=C.bFs("FUEL",""+s+"%",t)
s=o.r.b
r=A.h.S(s*100)
s=s>D.Ey[o.db].d?A.c2:A.c
q=x.p
s=B.a([v,u,t,C.bFs("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(C.bFs("HEIGHT",""+A.h.S(A.h.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ao(p,B.A(s,A.l,p,A.iB,A.i,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bLk(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.u6[w].a+".":"You landed on every world!"
v=B.a([new E.fL(A.oi,"Again",new C.eGz(o),A.c,p),new E.fL(A.p5,"Rebuild",new C.eGA(o),A.aQ,p)],q)
if(o.d+1<7)v.push(new E.fL(A.jH,"Next world",new C.eGB(o),A.bf,p))
n.push(C.hOl("Perfect landing!",w,A.bf,v))}if(o.as==="crashed")n.push(C.hOl("Crash!",o.at,A.c2,B.a([new E.fL(A.oi,"Try again",new C.eGC(o),A.bf,p),new E.fL(A.p5,"Rebuild",new C.eGD(o),A.aQ,p)],q)))
return new B.am(A.a0,p,A.b5,A.t,n,p)},
$S:62}
C.eGz.prototype={
$0(){var w=this.a
return w.l(w.gaAw())},
$S:0}
C.eGA.prototype={
$0(){var w=this.a
return w.l(new C.eGw(w))},
$S:0}
C.eGw.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eGB.prototype={
$0(){var w=this.a
return w.l(new C.eGv(w))},
$S:0}
C.eGv.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.eGC.prototype={
$0(){var w=this.a
return w.l(w.gaAw())},
$S:0}
C.eGD.prototype={
$0(){var w=this.a
return w.l(new C.eGu(w))},
$S:0}
C.eGu.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eGF.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.l(new C.eGy(v,w))},
$S:0}
C.eGy.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.eGG.prototype={
$1(d){return this.a.y=d},
$S:9}
C.eGH.prototype={
$1(d){return this.a.Q=d},
$S:9}
C.eGI.prototype={
$1(d){return this.a.z=d},
$S:9}
C.eGJ.prototype={
$0(){var w=this.a
return w.l(new C.eGx(w))},
$S:0}
C.eGx.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dVw.prototype={
$0(){var w=0,v=B.j(x.k),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hc(B.a([C.hJ0(),C.hJ1()],x.D),x.K),$async$$0)
case 3:r=e
q=t.a
if(q.c==null){w=1
break}s=q.as
s.toString
s.kZ(0,B.cV(J.t(r,1)))
q.l(new C.dVv(q,r))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:40}
C.dVv.prototype={
$0(){return this.a.d=x.m.a(J.t(this.b,0))},
$S:0}
C.dV6.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dV7.prototype={
$0(){return this.a.c2r(B.aV(J.t(this.b,"group")))},
$S:0}
C.dV8.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dV9.prototype={
$1(d){return A.a.aY(A.n.fs(A.n.D(A.h.S(d*255),0,255),16),2,"0")},
$S:260}
C.dVx.prototype={
$0(){return E.Yu("kick",0,0.25)},
$S:0}
C.dVa.prototype={
$0(){return this.a.cy=this.b},
$S:0}
C.dVb.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dVc.prototype={
$0(){return E.Yu("kick",0,0.5)},
$S:0}
C.dVd.prototype={
$0(){return G.dI(1300+this.a.RG.aw(900),"",40,0,0.2,"square")},
$S:0}
C.dVf.prototype={
$0(){var w,v,u=this.b
if(u==="skin"){u=this.a
w=u.CW
if(w===2)w=1
else w=w===1?0:2
u.CW=w}else{w=this.a
v=w.ch
if(v.q(0,u))v.X(0,u)
else{v.K(0,u)
if(w.CW===2)w.CW=1}if(v.a===0&&w.CW===0)w.CW=2
u=w}if(u.cy!=null&&!A.d.aR(u.d.e,new C.dVe(u)))u.cy=null
u.id=0},
$S:0}
C.dVe.prototype={
$1(d){var w=this.a
return d.a===w.cy&&w.aCx(d)},
$S:z+10}
C.dV3.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p4
w=u.a
v=u.c
w.R8=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p3.toLowerCase()+"."},
$S:0}
C.dV4.prototype={
$0(){var w=this.a
return w.l(w.gcdq())},
$S:0}
C.dV5.prototype={
$0(){return this.a.agx(null)},
$S:0}
C.dVm.prototype={
$0(){var w=this.a.as
return w==null?null:w.ff(0,B.J(["t","shot"],x.N,x.z))},
$S:0}
C.dVn.prototype={
$0(){return this.a.cLe(this.b.a)},
$S:0}
C.dVo.prototype={
$0(){return this.a.agx(this.b)},
$S:0}
C.dVp.prototype={
$1(d){var w=this.a
return w.l(new C.dVl(w,d))},
$S:6}
C.dVl.prototype={
$0(){return this.a.k4=this.b},
$S:0}
C.dVq.prototype={
$0(){var w=this.a
return w.l(new C.dVk(w,this.b))},
$S:0}
C.dVk.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dVr.prototype={
$0(){var w=this.a
return w.l(new C.dVj(w))},
$S:0}
C.dVj.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.dVs.prototype={
$0(){var w=this.a
return w.l(new C.dVi(w))},
$S:0}
C.dVi.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.ff(0,B.J(["t","reset"],x.N,x.z))
w.cy=null
w.db=0.5
w.dx=0.05
w.fr=1
w.fy=D.N6},
$S:0}
C.dVt.prototype={
$0(){var w=this.a
return w.l(new C.dVh(w))},
$S:0}
C.dVh.prototype={
$0(){var w=this.a,v=!w.p2
w.p2=v
w.p4=0
w.cy=null
if(v)w.b2T()
else w.p3=null},
$S:0}
C.dVu.prototype={
$0(){var w=this.a
return w.l(new C.dVg(w))},
$S:0}
C.dVg.prototype={
$0(){var w=this.a
return w.ok=!w.ok},
$S:0}
C.ca6.prototype={
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
$S:322}
C.ca7.prototype={
$1(d){var w=new B.qO([],[]).oi(d.data,!0)
if(x.f.b(w)&&J.t(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:709}
C.fDw.prototype={
$1(d){var w=J.a1(d)
return w.h(d,0)&&w.h(d,1)},
$S:221}
C.fDx.prototype={
$1(d){var w=J.a1(d)
return w.h(d,0)||w.h(d,1)},
$S:221}
C.fDy.prototype={
$1(d){var w=J.a1(d)
return w.h(d,0)!==w.h(d,1)},
$S:221}
C.fDF.prototype={
$1(d){return!J.t(d,0)},
$S:221}
C.fDG.prototype={
$1(d){var w=J.a1(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:221}
C.fDH.prototype={
$1(d){var w=J.a1(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:221}
C.dXc.prototype={
$1(d){return this.a.ax8(0)},
$S:7}
C.dWR.prototype={
$0(){var w=this.b
return this.a.cx=new B.O(w,B.iyd(),B.T(w).k("O<1,G>")).fG(0)},
$S:0}
C.dWU.prototype={
$1(d){return""+d},
$S:79}
C.dXd.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dWP.prototype={
$1(d){return this.a.ax8(this.b)},
$S:7}
C.dWQ.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.aB1(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.n3(0,d,a1.mx(0.15,0.3))
u=a1.n3(0,d,a1.mx(0.15,0.62))
t=a1.n3(0,"and",a1.mx(0.48,0.46))
s=a1.n3(0,a0,a1.mx(0.82,0.46))
a1=t.a
w.push(new C.o7(v.a,a1,0))
w.push(new C.o7(u.a,a1,1))
w.push(new C.o7(a1,s.a,0))
break
case 1:v=a1.n3(0,d,a1.mx(0.12,0.25))
u=a1.n3(0,d,a1.mx(0.12,0.65))
r=a1.n3(0,"xor",a1.mx(0.46,0.25))
q=a1.n3(0,"and",a1.mx(0.46,0.65))
p=a1.aB0(0,a0,a1.mx(0.82,0.25),0)
o=a1.aB0(0,a0,a1.mx(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.o7(a1,n,0))
m=u.a
w.push(new C.o7(m,n,1))
l=q.a
w.push(new C.o7(a1,l,0))
w.push(new C.o7(m,l,1))
w.push(new C.o7(n,p.a,0))
w.push(new C.o7(l,o.a,0))
break
case 2:k=a1.n3(0,"clock",a1.mx(0.15,0.4))
j=a1.n3(0,"not",a1.mx(0.45,0.65))
s=a1.n3(0,a0,a1.mx(0.82,0.3))
i=a1.n3(0,"buzzer",a1.mx(0.82,0.65))
a1=k.a
w.push(new C.o7(a1,s.a,0))
n=j.a
w.push(new C.o7(a1,n,0))
w.push(new C.o7(n,i.a,0))
break
default:h=a1.n3(0,d,a1.mx(0.12,0.25))
g=a1.n3(0,d,a1.mx(0.12,0.7))
f=a1.n3(0,"nor",a1.mx(0.5,0.25))
e=a1.n3(0,"nor",a1.mx(0.5,0.7))
s=a1.n3(0,a0,a1.mx(0.86,0.25))
a1=f.a
w.push(new C.o7(g.a,a1,0))
n=e.a
w.push(new C.o7(n,a1,1))
w.push(new C.o7(h.a,n,0))
w.push(new C.o7(a1,n,1))
w.push(new C.o7(a1,s.a,0))}},
$S:0}
C.dWV.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.aB1(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.Dt(p,"switch",new B.m(0.14*q.a,r*q.b),0))}o.n3(0,w.e,o.mx(0.86,0.5))},
$S:0}
C.dWK.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dWL.prototype={
$2(d,e){return A.h.aQ(d.c.b,e.c.b)},
$S:z+23}
C.dWM.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dWN.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dWO.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.afO(this.c)
if(v.ax)C.Kf("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gH(w)
v.CW=!1
if(v.ax)G.dI(140,"",250,0,0.3,"square")}},
$S:0}
C.dWW.prototype={
$0(){},
$S:0}
C.dWX.prototype={
$0(){return A.d.cP(this.a.e,this.b)},
$S:0}
C.dWY.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dWT.prototype={
$0(){var w=this.a,v=this.b
w.d.X(0,v)
A.d.bs(w.e,new C.dWS(v))
w.cy=null},
$S:0}
C.dWS.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
C.dWJ.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.n3(0,this.b,new B.m(w.x.a*(0.3+v.ai()*0.4),w.x.b*(0.2+v.ai()*0.6))).a},
$S:0}
C.dX6.prototype={
$0(){var w=this.a
return w.l(new C.dX5(w))},
$S:0}
C.dX5.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dX7.prototype={
$2(d,e){var w=null,v=this.a,u=new B.av(e.b,e.d)
v.x=u
return B.aA(A.c0,B.jn(B.b4(w,w,w,new C.bg6(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dX0(v),w,w,w,new C.dX1(v),new C.dX2(v),new C.dX3(v),w,w,w,w,w,w,w,w,w,w,new C.dX4(v),w,w,w,!1,A.a4)},
$S:35}
C.dX4.prototype={
$1(d){return this.a.cff(d.b)},
$S:55}
C.dX2.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.coT(u)
if(t!=null){v.as=t
v.at=u
return}w=v.aC2(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aI(0,u)}},
$S:50}
C.dX3.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.m(A.h.D(w.a+u.Q.a,46,u.x.a-46),A.h.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:19}
C.dX1.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c5X(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bs(v,new C.dWZ(w))
u=t.as
u.toString
v.push(new C.o7(u,w.a,w.b))
B.ke()}}t.z=t.as=null},
$S:38}
C.dWZ.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
C.dX0.prototype={
$1(d){return this.a.azP(d.b)},
$S:303}
C.dX8.prototype={
$0(){return this.a.bH3(this.b.a)},
$S:0}
C.dX9.prototype={
$0(){return this.a.ax8(this.b.a)},
$S:0}
C.dXa.prototype={
$0(){var w=this.a
return w.l(new C.dX_(w))},
$S:0}
C.dX_.prototype={
$0(){var w=this.a
w.aB1(0)
w.ay=null},
$S:0}
C.dXb.prototype={
$0(){return this.a.cGL(this.b)},
$S:0}
C.d_v.prototype={
$0(){var w=this,v=null,u=B.h0(v,A.cK,v,v,v,B.cW(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a7,A.cb,v,A.e5,A.cc)
u.eJ()
return u},
$S:251}
C.e2m.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e2l.prototype={
$0(){return this.a.d=null},
$S:0}
C.e2o.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c7V()},
$S:136}
C.e2n.prototype={
$0(){return B.a7(this.a,!1).i1()},
$S:0}
C.fDX.prototype={
$0(){return I.aOA},
$S:z+40}
C.fDY.prototype={
$0(){return D.e63},
$S:z+43}
C.fDZ.prototype={
$0(){return D.e_4},
$S:z+13}
C.fE_.prototype={
$0(){return D.exO},
$S:z+14}
C.fE0.prototype={
$0(){return D.efH},
$S:z+15}
C.fE1.prototype={
$0(){return I.aOr},
$S:z+16}
C.fE2.prototype={
$0(){return D.evA},
$S:z+17}
C.fE3.prototype={
$0(){return I.aOz},
$S:z+12}
C.fE4.prototype={
$0(){return D.e1l},
$S:z+19}
C.fj7.prototype={
$2(d,e){return new C.ahw(e,$.bKb()[e],new C.fj6(e,this.a),null)},
$S:z+20}
C.fj6.prototype={
$0(){var w=this.a,v=L.aM_.h(0,$.bKb()[w].a)
$.avi=v==null?"music":v
B.a7(this.b,!1).ca(B.e4(new C.fj4(w),!1,null,x.H))},
$S:0}
C.fj4.prototype={
$1(d){return $.bKb()[this.a].e.$0()},
$S:41}
C.fj8.prototype={
$2(d,e){return new C.agj(e,D.aEk[e],new C.fj5(this.a,e),null)},
$S:z+21}
C.fj5.prototype={
$0(){return this.a.d.$1(D.aEk[this.b])},
$S:0}
C.fiO.prototype={
$0(){return this.a.as=!0},
$S:0}
C.fiN.prototype={
$0(){return this.a.as=!1},
$S:0}
C.fiD.prototype={
$0(){var w=this.a
w.ch=0
w.as=!1},
$S:0}
C.fiE.prototype={
$1(d){return this.bru(d)},
bru(d){var w=0,v=B.j(x.I),u,t=this,s,r,q
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
r.gre().sp(0,d/t.b)
r.gKj().sp(0,0.5)
w=3
return B.b($.aS.glR(),$async$$1)
case 3:r=$.aS.bl$.x.h(0,r.f)
s=r==null?null:r.gbf()
if(!(s instanceof B.oF))throw B.Y(B.be("closed"))
q=C
w=4
return B.b(s.lC(t.c),$async$$1)
case 4:u=q.h25(f,t.d,t.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:773}
C.fiF.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.fiC(w,d))},
$S:6}
C.fiC.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.fiG.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.fiM.prototype={
$1(d){var w=this
return new B.eb(new C.fiL(w.a,w.b,w.c,w.d),null)},
$S:20}
C.fiL.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=x.w,a2=B.aF(a3,a0,a1).w
a1=B.aF(a3,a0,a1).w
w=x.p
v=B.a([D.h5P,A.at,D.hcI,A.af],w)
for(u=d.d,t=d.a,s=x.G,r=d.b,q=d.c,p=0;p<3;p=o){o=p+1
n=B.c("SLAB "+o,a0,a0,a0,a0,a0,a0,D.fVF,a0,a0,a0)
m=new B.aQ(12,12)
l=new B.aQ(12,12)
l=B.a([new B.bu(1,A.b9,B.aO(a0,A.M,!1,a0,!0,A.t,a0,B.aP(),r[p],a0,a0,a0,a0,a0,2,new B.ed(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Title",a0,A.FU,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b5(4,new B.bc(m,m,m,m),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.am,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ad,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jO,!0,A.a7,a0,A.ao,a0,a0,a0,a0),a0),A.aa,new B.bu(2,A.b9,B.aO(a0,A.M,!1,a0,!0,A.t,a0,B.aP(),q[p],a0,a0,a0,a0,a0,2,new B.ed(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Small line",a0,A.FU,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b5(4,new B.bc(l,l,l,l),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.am,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ad,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jO,!0,A.a7,a0,A.ao,a0,a0,a0,a0),a0)],w)
m=B.a([],w)
for(k=0;k<30;++k){j=D.dKR[k]
i=new B.aQ(12,12)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.B(t.a.c.d,s)
t.w=h}g=A.d.gH(h).j(0.3)}else g=A.c.j(0.06)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.B(t.a.c.d,s)
t.w=h}f=A.d.gH(h)}else f=A.by
e=new B.ax(f,u[p].A(0,j)?1.8:1,A.r,-1)
m.push(B.aA(a0,B.q(a0,B.V(j,u[p].A(0,j)?A.c:A.aR,a0,a0,a0,22),A.f,a0,a0,new B.p(g,a0,new B.bE(e,e,e,e),new B.bc(i,i,i,i),a0,a0,A.m),a0,a0,a0,A.eY,a0,a0,a0,42),A.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.fiJ(a4,p,u,j),a0,a0,a0,a0,a0,a0,!1,A.a4))}A.d.u(v,B.a([n,A.aj,new B.c_(A.aJ,A.e,A.i,A.l,a0,A.p,a0,0,l,a0),A.N,new B.a4(a0,44,B.ck(m,a0,a0,a0,a0,a0,A.aJ,!1),a0),A.az],w))}v.push(B.bH(A.BN,a0,new C.fiK(t,r,q,u,a3),a0))
return new B.C(new B.R(0,0,0,a2.f.d),B.bn(!0,new B.cS(new B.aX(0,1/0,0,a1.a.b*0.86),B.ck(v,a0,a0,A.xe,a0,a0,A.ah,!0),a0),!0,!1,A.ag,!0,!0),a0)},
$S:104}
C.fiJ.prototype={
$0(){var w=this
return w.a.$1(new C.fiI(w.b,w.c,w.d))},
$S:0}
C.fiI.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.fiK.prototype={
$0(){var w=this,v=w.a
v.l(new C.fiH(v,w.b,w.c,w.d))
B.a7(w.e,!1).N(null)},
$S:0}
C.fiH.prototype={
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
C.fiW.prototype={
$0(){var w=this.a
return w.l(new C.fiV(w))},
$S:0}
C.fiV.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.fiX.prototype={
$0(){return E.v_(this.b,this.a.f,"scene")},
$S:0}
C.fiY.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ap(A.d.gH(u),A.d.gal(u),0.4)
u.toString
w=this.a.gKj().x
w===$&&B.d()
return new B.bP(new B.p(v,v,v,v,v,new B.bU(D.b6A,0.9,A.w,v,0,B.a([u.j(0.06+0.03*w),A.c7],x.O),v,v),A.m),A.bm,v,v)},
$S:337}
C.fiZ.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.at(new B.d7(A.dn,A.z,A.f,B.ca(new B.hB(B.a([u.gre(),u.gKj()],x.dS)),new C.fiU(u,this.b,v),w),w),w,w,w)},
$S:230}
C.fiU.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gre().x
r===$&&B.d()
w=r<0.9?1:1-C.bwF(r,0.9,0.98)
v=s.gKj().x
v===$&&B.d()
u=A.dS.aA(0,v)
switch(s.gaB2().a){case 0:s=s.bGd(t.b,r,u,t.c)
break
case 1:s=s.bXt(t.b,r,u,t.c)
break
case 2:s=s.cLI(t.b,r,u,t.c)
break
case 3:s=s.bJd(t.b,r,u,t.c)
break
case 4:s=s.bMC(t.b,r,u,t.c)
break
case 5:s=s.cfg(t.b,r,u,t.c)
break
default:s=null}return B.d3(s,w)},
$S:153}
C.fj_.prototype={
$2(d,e){var w=B.acy(this.b),v=this.c.d,u=B.ap(A.d.gH(v),A.d.gal(v),0.4)
u.toString
v=B.ap(A.d.gH(v),A.d.gal(v),0.4)
v.toString
v=w.cUP(u,A.by,v,3.5)
u=this.a
w=u.gre().x
w===$&&B.d()
return B.ZU(B.lj(null,null,null,1,0,new C.fiT(u),A.h.D(w,0,1)),v)},
$S:1971}
C.fiT.prototype={
$1(d){var w=this.a
w.gre().sp(0,d)
if(w.as)w.l(new C.fiP(w))},
$S:6}
C.fiP.prototype={
$0(){return this.a.as=!1},
$S:0}
C.fj0.prototype={
$0(){var w=this.a
w.gre().sp(0,0)
w.a0O()},
$S:0}
C.fj1.prototype={
$1(d){var w=this.a
w.l(new C.fiS(w,d))
if(w.as)w.a0O()},
$S:6}
C.fiS.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.fj2.prototype={
$0(){var w=this.a
w.l(new C.fiR(w,this.b))
w.gre().sp(0,0)
if(w.as)w.a0O()},
$S:0}
C.fiR.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.fj3.prototype={
$0(){var w=this.a
return w.l(new C.fiQ(w,this.b))},
$S:0}
C.fiQ.prototype={
$0(){var w=B.B(this.b,x.G)
return this.a.w=w},
$S:0}
C.fiA.prototype={
$2(d,e){return A.h.aQ(d.a,e.a)},
$S:1972}
C.fiB.prototype={
$1(d){return d.b},
$S:1973}
C.dwF.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.dwG.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.dwC.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.dwD.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dwE.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dwH.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dwI.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dwJ.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dwK.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.dwL.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.dwM.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.dwN.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.dwO.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.dwP.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.eFM.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eFB.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.eFD.prototype={
$2(d,e){return d+e.d*7+A.n.F(A.a.ga_(e.b),97)},
$S:z+31}
C.eFE.prototype={
$2(d,e){return d+A.n.F(A.a.ga_(e.a),31)+A.n.F(A.a.ga_(e.b),17)},
$S:z+32}
C.eFH.prototype={
$1(d){var w=D.nv.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.n.F(d.d,u)]+")":t},
$S:z+33}
C.eFI.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.T(q),o=x.dg,n=B.B(new B.eg(new B.cP(new B.X(q,new C.eFJ(d),p.k("X<1>")),new C.eFK(r),p.k("cP<1,rA?>")),o),o.k("M.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aJ(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.I)(n),++v){u=n[v]
if(w.length>=6)return
t=B.B(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.eFJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eFK.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.eFF.prototype={
$1(d){return D.nv.h(0,d.b).c===D.yG},
$S:z+55}
C.eFG.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eGb.prototype={
$1(d){var w=this.a,v=d.a,u=A.h.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.w8(0,u)
w.a96(A.n.ao(v,1000))},
$S:7}
C.eFL.prototype={
$0(){},
$S:0}
C.eFx.prototype={
$0(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aB(),$async$$0)
case 6:e.aB("String","ngmy_core_reaction_lab_v1",s.a.d.ak())
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
C.eFO.prototype={
$1(d){var w=null,v=this.a.b
return B.bn(!0,B.w(B.a([A.N,B.dP(!1,w,w,w,!0,w,w,w,!0,w,w,B.V(D.nv.h(0,v).b,D.nv.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.hoB,w,B.c(D.nv.h(0,v).a,w,w,w,w,w,w,A.h6,w,w,w),w,w,w),B.dP(!1,w,w,w,!0,w,w,w,!0,w,w,A2.auU,w,w,w,w,new C.eFN(d),!1,w,w,w,w,w,w,w,D.hfB,w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!0)},
$S:32}
C.eFN.prototype={
$0(){B.a7(this.a,!1).N(!0)
return null},
$S:0}
C.eFQ.prototype={
$1(d){var w,v,u,t=null,s=B.aF(d,t,x.w).w,r=B.a([D.eK_],x.p)
for(w=0;w<6;++w){v=D.aEH[w]
u=B.c(v.a,t,t,t,t,t,t,A.h6,t,t,t)
r.push(B.dP(!1,t,t,t,!0,t,t,t,!0,t,t,D.c8Q,t,t,t,t,new C.eFP(d,v),!1,t,t,t,t,t,B.c(v.b,t,t,t,t,t,t,A.mg,t,t,t),t,u,t,t,t))}return B.bn(!0,new B.cS(new B.aX(0,1/0,0,s.a.b*0.7),B.ck(r,t,t,D.bML,t,t,A.ah,!0),t),!0,!1,A.ag,!0,!0)},
$S:32}
C.eFP.prototype={
$0(){B.a7(this.a,!1).N(this.b)
return null},
$S:0}
C.eFA.prototype={
$1(d){var w=null
return B.el(B.a([B.bK(!1,A.dy,w,w,!0,w,w,w,new C.eFy(d),w,w),B.bK(!1,A.FZ,w,w,!0,w,w,w,new C.eFz(d),w,w)],x.p),w,w,L.mt,D.hcV,w,w,w,w,D.hfW,w)},
$S:17}
C.eFy.prototype={
$0(){B.a7(this.a,!1).N(!1)
return null},
$S:0}
C.eFz.prototype={
$0(){B.a7(this.a,!1).N(!0)
return null},
$S:0}
C.eG9.prototype={
$0(){var w=this.a
return w.l(new C.eG8(w))},
$S:0}
C.eG8.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eGa.prototype={
$2(d,e){var w,v,u,t=null,s=new B.av(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.nK(new C.eG_(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.bhy:t
v=B.a([B.b4(u,t,t,new C.bm8(w,v,new C.eG0(r),new C.eG1(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ao(t,new B.dn(!0,B.ca(w,new C.eG2(r),t),t),t,t,10,10,6,t))
if(r.ax)v.push(r.bOl())
return B.aA(A.c0,B.jn(new B.am(A.a0,t,A.b5,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.eG3(r),t,r.gcqf(),t,new C.eG4(r),new C.eG5(r),new C.eG6(r),t,t,t,t,t,t,t,t,t,t,new C.eG7(r),t,t,t,!1,A.a4)},
$S:35}
C.eG_.prototype={
$0(){return this.a.aeP(this.b)},
$S:0}
C.eG7.prototype={
$1(d){return this.a.cJj(d.b)},
$S:55}
C.eG5.prototype={
$1(d){return this.a.cqg(d.b)},
$S:50}
C.eG6.prototype={
$1(d){return this.a.cqh(d.b)},
$S:19}
C.eG4.prototype={
$1(d){return this.a.b6F()},
$S:38}
C.eG3.prototype={
$1(d){return this.a.afy(d.b)},
$S:303}
C.eG0.prototype={
$0(){return this.a.z},
$S:721}
C.eG1.prototype={
$0(){return this.a.Q},
$S:445}
C.eG2.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bSJ()
if(p.length===0)return A.bK
w=A.v.j(0.55)
v=B.n(14)
u=B.K(A.by,A.r,1)
t=B.a([D.hah,A.cR],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.I)(p),++r)t.push(B.c(p[r],q,2,A.a2,q,q,q,A.aZI,q,q,q))
return B.q(q,B.w(t,A.B,q,A.e,A.P,0,A.p),A.f,q,q,new B.p(w,q,u,v,q,q,A.m),q,q,q,q,A.h1,q,q,q)},
$S:69}
C.eFC.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.n(12),t=B.K(e.j(0.6),A.r,1),s=x.p
return new B.C(A.dX,B.A(B.a([B.q(w,B.V(d,e,w,w,w,21),A.f,w,w,new B.p(v,w,t,u,w,w,A.m),w,38,w,w,w,w,w,38),A.bd,B.E(B.w(B.a([B.c(f,w,w,w,w,w,w,Al.Xm,w,w,w),A.bs,B.c(g,w,w,w,w,w,w,F.adC,w,w,w)],s),A.B,w,A.e,A.i,0,A.p),1)],s),A.B,w,A.e,A.i,0,w,w),w)},
$S:1974}
C.eFW.prototype={
$0(){var w=this.a.c
w.toString
return B.a7(w,!1).i1()},
$S:0}
C.eFX.prototype={
$0(){var w=this.a
return w.l(new C.eFV(w))},
$S:0}
C.eFV.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eFY.prototype={
$0(){var w=this.a
return w.l(new C.eFU(w))},
$S:0}
C.eFU.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.eFZ.prototype={
$0(){var w=this.a
return w.l(new C.eFT(w))},
$S:0}
C.eFT.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eFS.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.nv.gdW(D.nv),w=w.gae(w);w.B();){v=w.gP(w)
if(v.b.c===e)p.push(v.a)}w=B.c(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.I)(p),++r)u.push(s.cDZ(p[r]))
return new B.C(A.Po,B.w(B.a([new B.C(A.apL,w,q),B.A(u,A.l,q,A.e,A.i,0,q,q)],v),A.B,q,A.e,A.i,0,A.p),q)},
$S:z+37}
C.eFR.prototype={
$0(){return this.a.cfn(this.b)},
$S:0}
C.dwB.prototype={
$0(){var w=this,v=null,u=B.h0(v,A.cK,v,v,v,B.cW(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a7,A.cb,v,A.e5,A.cc)
u.eJ()
return u},
$S:251}
C.bTk.prototype={
$1(d){return d.r<=0},
$S:z+38}
C.bTv.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bTq.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bTw.prototype={
$1(d){return this.a.Ni(d)&&!d.x},
$S:z+0}
C.bTx.prototype={
$2(d,e){return Math.max(d,this.a.aEY(e))},
$S:z+6}
C.bTz.prototype={
$2(d,e){var w=this.a
return w.c0(0,d.a+"."+e,new C.bTA(w))},
$S:z+5}
C.bTA.prototype={
$0(){return this.a.a},
$S:93}
C.bTy.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:68}
C.bTB.prototype={
$2(d,e){var w=this.a
return w.c0(0,this.b.$1(this.c.$2(d,e)),new C.bTC(w))},
$S:z+5}
C.bTC.prototype={
$0(){return this.a.a},
$S:93}
C.bTm.prototype={
$2(d,e){var w=this.a
return w.c0(0,d.a+"."+e,new C.bTn(w))},
$S:z+5}
C.bTn.prototype={
$0(){return this.a.a},
$S:93}
C.bTl.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:68}
C.bTo.prototype={
$2(d,e){var w=this.a
return w.c0(0,this.b.$1(this.c.$2(d,e)),new C.bTp(w))},
$S:z+5}
C.bTp.prototype={
$0(){return this.a.a},
$S:93}
C.bTj.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bTD.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bTr.prototype={
$1(d){return d!==this.b&&this.a.aLl(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bTu.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bTt.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bTs.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bNF.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bNG.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.bNE.prototype={
$2(d,e){return new B.a6(A.aV,A.b_,A.w,e,D.djZ,null).az(0,d)},
$S:1975}
C.cxK.prototype={
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
$S:197}
C.h8P.prototype={
$1(d){var w
$.U()
w=B.L()
w.r=d.gp(0)
return w},
$S:1976}
C.h8R.prototype={
$2(d,e){var w
$.U()
w=B.L()
w.b=A.ae
w.c=e
w.r=d.gp(0)
w.d=A.bG
return w},
$S:1977}
C.h8S.prototype={
$5(d,e,f,g,h){return B.bx(new B.a5(d,e,d+f,e+g),new B.aQ(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1978}
C.h8Q.prototype={
$3(d,e,f){var w
$.U()
w=B.L()
w.san(new B.a6(A.aV,A.b_,A.w,B.a([e,f],x.O),null,null).az(0,d))
return w},
$S:1979}
C.bNh.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.bNi.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bNg(w))},
$S:0}
C.bNg.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bNj.prototype={
$0(){return B.a([],x.F)},
$S:1980}
C.bNk.prototype={
$1(d){return this.a.by(d).a>15e5},
$S:368}
C.bNl.prototype={
$0(){var w,v,u
J.bKl(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.rN(v))if(C.htH(v.b))w.b69(v)
else w.a22(v)
else{u=w.a.c.bjb(v)
w.ah8(u==null?"The "+$.r_().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bNf.prototype={
$1(d){return new B.eb(new C.bNc(this.a,this.b),null)},
$S:20}
C.bNc.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p=null,o=this.b,n=new C.bNd(this.a,o,a3),m=$.r_(),l=o.b,k=m.h(0,l).d,j=A.h.S(o.ch/1.04),i=new C.bNe(o,n,k),h=B.n(26),g=B.K(k.j(0.55),A.r,1.4),f=x.V,e=B.a([new B.ac(0,A.H,k.j(0.25),A.J,26)],f),d=B.q(p,p,A.f,p,p,new B.p(A.aT,p,p,B.n(3),p,p,A.m),p,4,p,p,p,p,p,42),a0=k.j(0.2),a1=B.K(k,A.r,1)
a1=B.q(p,B.at(B.c(m.h(0,l).c,p,p,p,p,p,p,A.qC,p,p,p),p,p,p),A.f,p,p,new B.p(a0,p,a1,p,p,p,A.a6),p,42,p,p,p,p,p,42)
a0=x.p
w=B.E(B.w(B.a([B.c(m.h(0,l).b,p,1,A.a2,p,p,p,A.jr,p,p,p),D.ha5],a0),A.B,p,A.e,A.i,0,A.p),1)
v=k.j(0.2)
u=B.n(14)
t=B.K(k,A.r,1)
u=B.A(B.a([a1,A.bd,w,B.q(p,B.c(""+A.h.S(o.ch*100)+"%",p,p,p,p,p,p,B.l(p,p,k,p,p,p,p,p,p,p,p,15,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.p(v,p,t,u,p,p,A.m),p,p,p,p,A.lE,p,p,p)],a0),A.l,p,A.e,A.i,0,p,p)
t=A.v.j(0.35)
v=B.n(18)
w=B.K(A.dA,A.r,1)
a1=30+28*o.ch
s=B.n(8)
r=B.a([k.j(0.85),A.ax],x.O)
q=B.K(A.aE,A.r,2)
f=B.a([new B.ac(0,A.H,k.j(0.5),A.J,14)],f)
v=B.q(p,B.at(B.cZ(p,B.at(new B.d7(A.dE,A.z,A.f,new B.C(A.hO,B.c(m.h(0,l).c,p,p,p,p,p,p,A.mV,p,p,p),p),p),p,p,p),p,p,A.b0,new B.p(p,p,q,s,f,new B.a6(A.aw,A.aD,A.w,r,p,p),A.m),A.eM,p,a1*0.58,p,p,p,p,p,a1),p,p,p),A.f,p,p,new B.p(t,p,w,v,p,p,A.m),p,120,p,p,p,p,p,1/0)
i=B.A(B.a([i.$2("1\xd7",1),i.$2("2\xd7",2),i.$2("3\xd7",3),i.$2("4\xd7",4),i.$2("5\xd7",5)],a0),A.l,p,A.e,A.i,0,p,p)
w=B.aJ(p,p,p,p,B.V(A.at7,k,p,p,p,30),p,p,p,new C.bN8(n,o),p,p,p,p,p,p)
t=B.acy(a2).biF(k,A.by,k.j(0.2),A.c,8)
o=B.A(B.a([w,B.E(B.ZU(B.lj(p,p,p,5.2,1,n,A.h.D(o.ch,1,5.2)),t),1),B.aJ(p,p,p,p,B.V(A.a4u,k,p,p,p,30),p,p,p,new C.bN9(n,o),p,p,p,p,p,p)],a0),A.l,p,A.e,A.i,0,p,p)
return B.bn(!0,B.q(p,B.w(B.a([d,A.af,u,A.az,v,A.af,i,A.at,o,B.A(B.a([B.E(B.c(j<=1?"Normal size":"About "+j+" times the normal size",p,p,p,p,p,p,N.hI,p,p,p),1),B.bK(!1,A6.b_M,p,p,!0,p,p,p,new C.bNa(a2),p,B.fu(p,p,k.j(0.25),p,p,p,p,p,p,p,p,A.c,p,p,p,p,p,A.tM,p,p,p,p,p,p,p,p))],a0),A.l,p,A.e,A.i,0,p,p)],a0),A.l,p,A.e,A.P,0,A.p),A.f,p,p,new B.p(p,p,g,h,e,D.cgl,A.m),p,p,p,A.zw,D.bJk,p,p,p),!0,!1,A.ag,!0,!0)},
$S:90}
C.bNd.prototype={
$1(d){var w=this.a
w.l(new C.bN6(this.b,d))
this.c.$1(new C.bN7())
w.a.toString},
$S:6}
C.bN6.prototype={
$0(){return this.a.ch=A.h.D(this.b,1,5.2)},
$S:0}
C.bN7.prototype={
$0(){},
$S:0}
C.bNe.prototype={
$2(d,e){var w=this,v=null,u=Math.abs(w.a.ch-e)<0.05,t=u?w.c.j(0.28):A.c.j(0.06),s=B.n(14),r=u?w.c:A.by
r=B.K(r,A.r,u?2:1)
return B.E(B.aA(v,B.cZ(v,B.at(new B.d7(A.dn,A.z,A.f,B.c(d,v,v,v,v,v,v,B.l(v,v,u?w.c:A.ac,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),v,v,v),v,v,A.b0,new B.p(t,v,r,s,v,v,A.m),A.ho,v,v,v,A.jk,A.rj,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.bNb(w.b,e),v,v,v,v,v,v,!1,A.a4),1)},
$S:737}
C.bNb.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bN8.prototype={
$0(){return this.a.$1(this.b.ch-0.4)},
$S:0}
C.bN9.prototype={
$0(){return this.a.$1(this.b.ch+0.4)},
$S:0}
C.bNa.prototype={
$0(){B.a7(this.a,!1).N(null)
return null},
$S:0}
C.bNB.prototype={
$2(d,e){var w
if(d==="short"){G.dI(1800,"",120,0,0.55,"noise")
G.dI(200,"",160,2.2,0.4,"saw")
B.fX()
w=this.a
if(w.c!=null)w.ah8("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){G.dI(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.ah8("\u26a0 Overloaded! The "+$.r_().h(0,e.b).b+" can only give about "+A.h.a1(w.a.c.AR(e),2)+" amps but your gadgets are asking for "+A.h.a1(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.ah8("Burnt out! "+e.ay)
G.dI(140,"",320,0,0.6,"noise")
G.dI(900,"",160,1.5,0.35,"square")}},
$S:z+42}
C.bNC.prototype={
$0(){},
$S:0}
C.bMH.prototype={
$0(){},
$S:0}
C.bND.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bNA.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.at=n
w=o.a.c
v=o.d
u=o.y
t=o.z
s=o.x
r=this.b
q=x.p
n=B.a([B.aA(A.c0,new B.e9(B.b4(p,p,p,new C.alw(w,v,u,t,s,r==null?A.jK:r,p),n),p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bNu(o),new C.bNv(o),new C.bNw(o),p,p,p,p,p,p,p,p,p,p,new C.bNx(o),p,p,p,!1,A.a4)],q)
if(o.a.c.a.length===0)n.push(D.bgP)
w=o.ay
if(w!=null){v=B.n(14)
u=B.K(A.cX,A.r,1)
n.push(B.ao(p,B.aA(p,B.q(p,B.A(B.a([D.h_Y,B.E(B.c(w,p,p,p,p,p,p,D.fSp,p,p,p),1)],q),A.B,p,A.e,A.i,0,p,p),A.f,p,p,new B.p(D.bmX,p,u,v,p,p,A.m),p,p,p,p,A.o9,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bNy(o),p,p,p,p,p,p,!1,A.a4),p,p,10,10,8,p))}if(o.x!=null){o=B.A(B.a([D.bOZ,new E.fL(A.A9,"Cut wire",new C.bNz(o),A.c2,p)],q),A.l,p,A.e,A.i,0,p,p)
w=B.n(18)
n.push(B.ao(8,B.q(p,o,A.f,p,p,new B.p(F.a_1,p,B.K(A.by,A.r,1),w,p,p,A.m),p,p,p,p,F.aop,p,p,p),p,p,12,12,p,p))}else{w=o.e
if(w!=null&&A.d.q(o.a.c.a,w)){w=o.e
w.toString
n.push(B.ao(8,o.cqP(w),p,p,10,10,p,p))}}return B.jn(new B.am(A.a0,p,A.b5,A.t,n,p),A.t,p)},
$S:279}
C.bNv.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.bdl(s)
if(r!=null){t.l(new C.bNs(t,r,d))
return}w=t.b6P(s)
if(w!=null){t.Q=w
v=w.c
u=t.at
t.as=new B.m(v*u.a,w.d*u.b).aI(0,s)
t.l(new C.bNt(t,w))}},
$S:50}
C.bNs.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c.b},
$S:0}
C.bNt.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bNw.prototype={
$1(d){var w=this.a
if(w.y!=null)w.l(new C.bNq(w,d))
else if(w.Q!=null)w.l(new C.bNr(w,d.b.a6(0,w.as)))},
$S:19}
C.bNq.prototype={
$0(){return this.a.z=this.b.b},
$S:0}
C.bNr.prototype={
$0(){var w,v=this.a,u=v.Q
u.toString
w=this.b
u.c=A.h.D(w.a/v.at.a,0.14,0.86)
u=v.Q
u.toString
u.d=A.h.D(w.b/v.at.b,0.08,0.92)},
$S:0}
C.bNu.prototype={
$1(d){var w,v,u,t=this.a
if(t.y!=null&&t.z!=null){w=t.z
w.toString
v=t.bdl(w)
if(v!=null&&v.a!==t.y.a){w=t.a.c
u=t.y
if(w.ao_(u.a,u.b,v.a,v.b)!=null)G.dI(1500,"",40,0,0.22,"square")}}t.Q=t.z=t.y=null
t.ah6()},
$S:38}
C.bNx.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.b6P(u)
if(t!=null){v.l(new C.bNn(v,t))
if(D.mN.am(0,t.b))v.cBK(t)
w=new B.W(Date.now(),0,!1)
if(v.r===t&&w.by(v.w).a<38e4){v.l(new C.bNo(v,t))
v.r=null}else{v.r=t
v.w=w}v.a.toString
return}v.l(new C.bNp(v,v.cP1(u)))},
$S:55}
C.bNn.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.x=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
G.dI(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
G.dI(200,"",70,0,0.2,"saw")}},
$S:0}
C.bNo.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.bNp.prototype={
$0(){var w=this.a
w.x=this.b
w.e=w.d=null},
$S:0}
C.bNy.prototype={
$0(){var w=this.a
return w.l(new C.bNm(w))},
$S:0}
C.bNm.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bNz.prototype={
$0(){var w=this.a
A.d.X(w.a.c.b,w.x)
w.x=null
G.dI(300,"",50,0,0.35,"noise")
w.ah6()},
$S:0}
C.bMI.prototype={
$0(){return this.a.bvO(this.b)},
$S:0}
C.bN3.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.A(B.a([B.c(d,w,w,w,w,w,w,D.fMg,w,w,w),B.E(B.lj(this.b.d,w,w,g,h,new C.bN5(this.a,f),A.h.D(e,h,g)),1)],x.p),A.l,w,A.e,A.i,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1981}
C.bN5.prototype={
$1(d){var w=this.a
w.l(new C.bN4(this.b,d))
w.a.toString},
$S:6}
C.bN4.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bN2.prototype={
$2(d,e){var w=null,v=A.c.j(0.06),u=B.n(10)
return B.E(B.q(w,B.w(B.a([B.c(d,w,w,w,w,w,w,A.adr,w,w,w),B.c(e,w,w,w,w,w,w,D.fPb,w,w,w)],x.p),A.l,w,A.e,A.i,0,A.p),A.f,w,w,new B.p(v,w,w,u,w,w,A.m),w,w,w,w,A.vl,w,w,w),1)},
$S:107}
C.bMP.prototype={
$0(){var w=this.a
return w.l(new C.bMO(w))},
$S:0}
C.bMO.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.bMQ.prototype={
$0(){var w=this.a
w.a.c.X(0,this.b)
w.e=w.d=null
G.dI(260,"",70,0,0.35,"noise")
w.ah6()},
$S:0}
C.bMR.prototype={
$0(){var w=this.a
return w.l(new C.bMN(w))},
$S:0}
C.bMN.prototype={
$0(){return this.a.e=null},
$S:0}
C.bMV.prototype={
$0(){this.a.l(new C.bMM(this.b,this.c))
G.dI(900,"",40,0,0.3,"noise")},
$S:0}
C.bMM.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bMW.prototype={
$0(){return this.a.b69(this.b)},
$S:0}
C.bMX.prototype={
$0(){return this.a.a22(this.b)},
$S:0}
C.bMY.prototype={
$0(){return this.a.a3L(this.b)},
$S:0}
C.bMZ.prototype={
$0(){var w=this.a
w.l(new C.bML(this.b,this.c))
w.a.toString},
$S:0}
C.bML.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bN_.prototype={
$0(){var w=this.a
w.l(new C.bMK(this.b,this.c))
w.a.toString},
$S:0}
C.bMK.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bN0.prototype={
$0(){var w=this.a
w.l(new C.bMJ(this.b,this.c))
w.a.toString},
$S:0}
C.bMJ.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bN1.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bMS.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bMT.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bMU.prototype={
$1(d){return this.a.f=d},
$S:6}
C.fDI.prototype={
$1(d){return d.aKX("bulb")},
$S:z+2}
C.fDJ.prototype={
$1(d){return d.qu(0,"switch")&&d.aKX("bulb")},
$S:z+2}
C.fDK.prototype={
$1(d){return A.d.aR(d.a,new C.fDv())},
$S:z+2}
C.fDv.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.fDL.prototype={
$1(d){return d.qu(0,"resistor")&&A.d.aR(d.a,new C.fDu())},
$S:z+2}
C.fDu.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fDM.prototype={
$1(d){return!d.qu(0,"battery")&&d.aKX("bulb")},
$S:z+2}
C.fDz.prototype={
$1(d){return A.d.aR(d.a,new C.fDt())},
$S:z+2}
C.fDt.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fDA.prototype={
$1(d){return A.d.aR(d.a,new C.fDs())},
$S:z+2}
C.fDs.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fDB.prototype={
$1(d){return A.d.aR(d.a,new C.fDr())},
$S:z+2}
C.fDr.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fDC.prototype={
$1(d){var w=d.a
return A.d.aR(w,new C.fDp())&&A.d.aR(w,new C.fDq())&&d.qu(0,"buck")},
$S:z+2}
C.fDp.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fDq.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fDD.prototype={
$1(d){var w=d.a
return A.d.aR(w,new C.fDn())&&A.d.aR(w,new C.fDo())},
$S:z+2}
C.fDn.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fDo.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fDE.prototype={
$1(d){return A.d.aR(d.a,new C.fDm())},
$S:z+2}
C.fDm.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.e7y.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a7(0)
w.u(0,v.b)},
$S:0}
C.e7H.prototype={
$1(d){var w=this.a.d
return w.aLl(d)&&w.rN(d)},
$S:z+0}
C.e7I.prototype={
$1(d){return d.x},
$S:z+0}
C.e7J.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.e7K.prototype={
$0(){},
$S:0}
C.e7x.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.n(22),o=x.p,n=B.a([D.hhZ,A.at,D.h1Q,A.S],o)
for(w=this.a,v=0;v<19;++v){u=D.TI[v]
t=A.c.j(0.06)
s=new B.aQ(14,14)
r=new B.ax(A.by,1,A.r,-1)
n.push(B.aA(q,B.q(q,B.w(B.a([B.c(u.a,q,q,q,q,q,q,A.iY,q,q,q),A.bs,B.c(u.b,q,3,A.a2,q,q,q,D.fTc,q,q,q)],o),A.B,q,A.e,A.i,0,A.p),A.f,q,q,new B.p(t,q,new B.bE(r,r,r,r),new B.bc(s,s,s,s),q,q,A.m),q,q,q,A.cA,A.bg,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.e7w(w,d,u),q,q,q,q,q,q,!1,A.a4))}return B.eD(q,F.ng,new B.C(A.bR,new B.a4(340,q,B.ck(n,q,q,q,q,q,A.ah,!0),q),q),q,q,q,q,q,A.db,q,new B.ba(p,A.a1),q)},
$S:46}
C.e7w.prototype={
$0(){B.a7(this.b,!1).N(null)
var w=this.a
w.l(new C.e7v(w,this.c))
G.dI(800,"",120,-0.5,0.3,"square")},
$S:0}
C.e7v.prototype={
$0(){var w=this.a.d
this.b.C(w)
w.bol()},
$S:0}
C.e7t.prototype={
$1(d){return new C.XG(this.a.d,null)},
$S:z+44}
C.e7u.prototype={
$0(){},
$S:0}
C.e7G.prototype={
$1(d){return new B.eb(new C.e7F(this.a),null)},
$S:20}
C.e7F.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.akz(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.q(0,k),f=g?A.bf:A.aH
k=B.aF(d,m,x.w).w
w=l.r
v=x.p
u=B.a([B.A(B.a([D.hf4,A.aY,B.c(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.C,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.l,m,A.e,A.i,0,m,m),A.N,B.bv(B.n(4),B.jK(A.by,m,m,5,m,w.a/11,new B.ld(f,x.c)),A.ap),A.af],v)
if(h)u.push(D.h5a)
else{h=f.j(0.1)
t=B.n(14)
s=B.K(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.c(r+" Now: "+i.a,m,m,m,m,m,m,An.LV,m,m,m)
q=B.c(g?"Well done! You did it.":i.b,m,m,m,m,m,m,A0.FV,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.q(m,B.w(B.a([r,A.at,q,new B.bJ(A.a9,m,m,B.bK(!1,B.c(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.C,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.e7D(l,e),m,m),m)],v),A.B,m,A.e,A.i,0,A.p),A.f,m,m,new B.p(h,m,s,t,m,m,A.m),m,m,m,m,A.bg,m,m,m))}u.push(A.S)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aQ(12,12)
n=new B.ax(o===l.f?f.j(0.6):A.dA,1,A.r,-1)
if(w.q(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
s=B.c(s,m,m,m,m,m,m,A.adB,m,m,m)
r=j[o]
q=w.q(0,o)?A.aE:A.c
u.push(B.aA(m,B.q(m,new B.c_(A.aJ,A.e,A.i,A.l,m,A.p,m,0,B.a([s,A.ar,new B.bu(1,A.b9,B.c(r.a,m,m,m,m,m,m,new B.F(!0,q,m,m,m,m,13,A.C,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],v),m),A.f,m,m,new B.p(h,m,new B.bE(n,n,n,n),new B.bc(t,t,t,t),m,m,A.m),m,m,m,A.ey,A.o9,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.e7E(l,o,e),m,m,m,m,m,m,!1,A.a4))}return B.bn(!0,new B.cS(new B.aX(0,1/0,0,k.a.b*0.75),B.ck(u,m,m,A.xe,m,m,A.ah,!0),m),!0,!1,A.ag,!0,!0)},
$S:90}
C.e7D.prototype={
$0(){var w=this.a
w.l(new C.e7B(w))
this.b.$1(new C.e7C())
w.Gf()},
$S:0}
C.e7B.prototype={
$0(){var w=this.a
$.akz()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.e7C.prototype={
$0(){},
$S:0}
C.e7E.prototype={
$0(){var w=this.a
w.l(new C.e7z(w,this.b))
this.c.$1(new C.e7A())
w.Gf()},
$S:0}
C.e7z.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e7A.prototype={
$0(){},
$S:0}
C.e7M.prototype={
$0(){return B.a7(this.a,!1).i1()},
$S:0}
C.e7N.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.iM("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a7(t.b,!1).ca(B.e4(new C.e7L(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.e7L.prototype={
$1(d){B.jc("construction")
return As.i9E()},
$S:z+45}
C.e7O.prototype={
$0(){return E.hVL(this.a,"ELECTRONICS LAB",this.b,A.aH)},
$S:0}
C.e7P.prototype={
$0(){var w=this.a
return w.l(w.d.gd62())},
$S:0}
C.e7Q.prototype={
$0(){var w=this.a,v=w.d
w.l(v.gtH(v))
w.Gf()},
$S:0}
C.cPz.prototype={
$2(d,e){var w=null,v=this.a.gaBb().x
v===$&&B.d()
return B.b4(w,w,w,new C.bdT(v,w),A.aB)},
$S:52}
C.cPy.prototype={
$3(d,e,f){var w=new B.aI($.U().r,A.ak,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.E(new B.aZ(v,t))
w.E(new B.cn(v,u,v+e,u))
w.E(new B.cn(v,u,v,u+e))
w.E(new B.cn(v,u,v-e,u))
w.E(new B.cn(v,u,v,t))
w.E(new B.bz())
t=B.L()
t.r=A.c.j(f).gp(0)
this.a.af(w,t)},
$S:437}
C.he_.prototype={
$3(d,e,f){return new C.WV(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+46}
C.he0.prototype={
$4(d,e,f,g){var w=x.a
return new B.de(e,!1,B.iF(A.z,g,null,new B.bk(B.cN(A.cn,e,null),new B.bq(0.85,1,w),w.k("bk<bT.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
C.e3u.prototype={
$0(){var w=this.a
w.e=this.b
w.y=0
w.z=w.gCf()},
$S:0}
C.e3v.prototype={
$0(){var w,v=this.a
v.e=0
w=this.c
v.y=A.n.F(A.n.F(this.b,w)+w,w)
v.z=v.gCf()},
$S:0}
C.e3F.prototype={
$0(){var w=this.a,v=this.b,u=this.c
w.x=new B.m(v.a/u.a,v.b/u.b)
w.w=w.gCf()},
$S:0}
C.e3t.prototype={
$1(d){return new K.Jr(F.Tt[this.b],new C.e3s(this.a,d),null)},
$S:z+47}
C.e3s.prototype={
$0(){this.a.a=!0
B.a7(this.b,!1).e3()},
$S:0}
C.e3G.prototype={
$0(){var w=this.a
w.f=this.b
w.r=!1},
$S:0}
C.e3H.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.e3m.prototype={
$2(d,e){var w=null,v=this.a,u=v.f?v.gb3P():w
return B.aA(A.c0,B.b4(w,w,w,v.cqd(this.b),A.hi),A.y,!1,D.hOo,u,w,w,w,new C.e3k(v),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e3l(v,e),w,w,w,!1,A.a4)},
$S:35}
C.e3l.prototype={
$1(d){var w=this.b
return this.a.cJv(d.b,new B.av(B.aU(1/0,w.a,w.b),B.aU(1/0,w.c,w.d)))},
$S:55}
C.e3k.prototype={
$1(d){var w,v=d.d
if(v==null)v=0
if(Math.abs(v)>120&&this.a.OT()!=null){w=v<0?1:-1
this.a.aFd(w)}},
$S:38}
C.e3D.prototype={
$5$color$on(d,e,f,g,h){var w=null,v=h?g.j(0.28):A.c.j(0.08),u=B.n(14),t=B.K(h?g:A.aT,A.r,1)
return B.aA(w,B.q(w,B.w(B.a([B.V(d,g,w,w,w,20),A.rU,B.c(e,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,9.5,w,w,A.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p),A.f,w,w,new B.p(v,w,t,u,w,w,A.m),w,w,w,A.jk,A.jZ,w,w,56),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:723}
C.e3z.prototype={
$0(){return this.a.aFd(-1)},
$S:0}
C.e3A.prototype={
$0(){return this.a.aFd(1)},
$S:0}
C.e3B.prototype={
$0(){return this.a.KC(null)},
$S:0}
C.e3C.prototype={
$0(){return this.a.KC(0)},
$S:0}
C.e3I.prototype={
$0(){return B.a7(this.a,!1).i1()},
$S:0}
C.e3y.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.n(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c5n(o):q.bIe(o,p),m=x.p
p=B.a([B.p0(new B.mn(n,new B.bb(p,x.aC)),A.pX,B.qd(),A.b0,A.b0,new C.e3w())],m)
n=t.d
if(n){w=A.h.F(q.gCf(),12)<4
v=w?150:96
u=B.n(16)
m=B.a([A.ar],m)
if(w)m.push(D.bOL)
else m.push(A.aY)
m.push(B.q(s,s,A.f,s,s,new B.p(w?A.bf:A.ax,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.ar)
p.push(B.ao(s,B.at(B.cZ(s,B.A(m,A.l,s,A.e,A.i,0,s,s),s,s,A.eh,new B.p(A.v,s,s,u,s,s,A.m),A.nj,s,28,s,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.Bt)p.push(B.ao(s,B.at(B.q(s,s,A.f,s,s,A.Nf,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.Bu)p.push(B.ao(s,B.q(s,s,A.f,s,s,A.Nf,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ao(6,B.aA(s,B.at(B.q(s,s,A.f,s,s,new B.p(A.c.j(0.75),s,s,B.n(3),s,s,A.m),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e3x(q),s,s,s,s,s,s,!1,A.a4),s,s,0,0,s,s))
return B.bv(r,new B.am(A.a0,s,A.b5,A.t,p,s),A.ap)},
$S:397}
C.e3w.prototype={
$2(d,e){var w=x.a
return new B.de(e,!1,B.iF(A.z,d,null,new B.bk(e,new B.bq(0.92,1,w),w.k("bk<bT.T>"))),null)},
$S:491}
C.e3x.prototype={
$0(){return this.a.KC(null)},
$S:0}
C.e3E.prototype={
$2(d,e){var w,v,u,t,s=null,r=Math.max(e.b,230),q=this.a
q=B.a([B.c(A.a.aY(A.n.v(B.cY(q)),2,"0")+":"+A.a.aY(A.n.v(B.fx(q)),2,"0"),s,s,s,s,s,s,A.uF,s,s,s),A.aY],x.p)
for(w=0;w<4;++w){v=new B.aQ(1,1)
q.push(B.q(s,s,A.f,s,s,new B.p(A.c,s,s,new B.bc(v,v,v,v),s,s,A.m),s,4+w*2,s,D.bNh,s,s,s,3))}q.push(A.da)
q.push(D.h94)
q.push(A.b6)
v=B.K(A.ac,A.r,1)
u=B.n(4)
t=this.b
q.push(B.q(s,new B.bJ(A.a5,s,s,B.Ch(A.z,B.q(s,s,A.f,s,s,new B.p(A.bf,s,s,B.n(2),s,s,A.m),s,s,s,A7.I5,s,s,s,s),s,t/100),s),A.f,s,s,new B.p(s,s,v,u,s,s,A.m),s,12,s,s,s,s,s,26))
q.push(A.pu)
q.push(B.c(""+t+"%",s,s,s,s,s,s,D.h_z,s,s,s))
return new B.d7(A.dn,A.a5,A.f,new B.a4(r,s,B.A(q,A.l,s,A.e,A.i,0,s,s),s),s)},
$S:273}
C.e3r.prototype={
$0(){return this.a.KC(A.d.c9(F.iz,this.b))},
$S:0}
C.e3p.prototype={
$0(){return this.a.KC(0)},
$S:0}
C.e3q.prototype={
$2(d,e){var w,v,u,t,s=null,r=Math.max(e.b,216),q=B.a([],x.p)
for(w=B.cJ(F.iz,0,B.dx(4,"count",x.S),x.gD),v=w.$ti,w=new B.bQ(w,w.gI(0),v.k("bQ<aj.E>")),u=this.a,v=v.k("aj.E");w.B();){t=w.d
q.push(u.az_(t==null?v.a(t):t,50,!1))}return new B.d7(A.dn,A.z,A.f,new B.a4(r,s,B.A(q,A.l,s,A.rI,A.i,0,s,s),s),s)},
$S:273}
C.e3j.prototype={
$0(){return this.a.KC(null)},
$S:0}
C.e3o.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=A.v.j(0.55),l=this.a,k=l.f,j=k?112:10
if(k){k=l.c
k.toString
k=B.aF(k,A.bZ,x.w).w.a.a>700}else k=!1
k=k?250:10
w=x.p
k=B.q(n,B.A(B.a([D.hnZ,A.ar,B.E(B.c(this.b?"Navigation   Media   Climate":"File   Edit   View   Window   Help",n,1,A.f6,n,n,n,A.M8,n,n,n),1),B.c(A.a.aY(A.n.v(B.cY(new B.W(Date.now(),0,!1))),2,"0")+":"+A.a.aY(A.n.v(B.fx(new B.W(Date.now(),0,!1))),2,"0"),n,n,n,n,n,n,A.qD,n,n,n)],w),A.l,n,A.e,A.i,0,n,n),A.f,m,n,n,n,24,n,n,new B.R(j,0,k,0),n,n,n)
j=B.a([B.b4(n,n,n,new C.bAS(l.gCf(),this.c.d,n),A.aB)],w)
if(l.e!=null){if(l.f){m=l.c
m.toString
m=B.aF(m,A.dL,x.w).w.r.b+52}else m=12
v=B.n(10)
u=B.K(A.aT,A.r,1)
t=B.n(10)
s=B.aA(n,B.q(n,n,A.f,n,n,A.ah3,n,12,n,n,n,n,n,12),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.e3n(l),n,n,n,n,n,n,!1,A.a4)
r=B.q(n,n,A.f,n,n,A.Zt,n,12,n,n,n,n,n,12)
q=B.aA(n,B.q(n,n,A.f,n,n,D.bbU,n,12,n,n,n,n,n,12),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,l.gbdP(),n,n,n,n,n,n,!1,A.a4)
p=l.e
p.toString
p=B.a([s,A.dU,r,A.dU,q,A.ar,B.E(B.c(F.iz[p].a,n,1,A.a2,n,n,n,A.Xk,n,n,n),1)],w)
if(l.OT()!=null)s=!l.f||!l.r
else s=!1
if(s)p.push(l.b0I(19))
s=B.q(n,B.A(p,A.l,n,A.e,A.i,0,n,n),A.f,A.cx,n,n,n,26,n,n,A.fD,n,n,n)
r=l.e
r.toString
j.push(B.bS(0,new B.C(new B.R(26,m,26,58),B.q(n,B.bv(t,B.w(B.a([s,B.E(l.aS_(r),1)],w),A.l,n,A.e,A.i,0,A.p),A.ap),A.f,n,n,new B.p(A.v,n,u,v,D.dGE,n,A.m),n,n,n,n,n,n,n,n),n),0,0,0))}m=A.c.j(0.16)
v=B.n(18)
u=B.K(A.aT,A.r,1)
t=B.a([],w)
for(o=0;o<8;++o)t.push(new B.C(A.jk,l.az_(F.iz[o],34,!1),n))
j.push(B.ao(8,B.at(B.q(n,B.A(t,A.l,n,A.e,A.P,0,n,n),A.f,n,n,new B.p(m,n,u,v,n,n,A.m),n,n,n,n,A.lF,n,n,n),n,n,n),n,n,0,0,n,n))
return B.q(n,B.w(B.a([k,B.E(new B.am(A.a0,n,A.b5,A.t,j,n),1)],w),A.l,n,A.e,A.i,0,A.p),A.f,A4.a0F,n,n,n,n,n,n,n,n,n,n)},
$S:85}
C.e3n.prototype={
$0(){return this.a.KC(null)},
$S:0}
C.fEc.prototype={
$0(){return D.ezR},
$S:z+48}
C.fEd.prototype={
$0(){return D.e6C},
$S:z+49}
C.fEe.prototype={
$0(){return D.e_h},
$S:z+50}
C.fEf.prototype={
$0(){return D.e6_},
$S:z+51}
C.fEg.prototype={
$0(){return D.ebu},
$S:z+52}
C.fEh.prototype={
$0(){return D.evD},
$S:z+53}
C.fEi.prototype={
$0(){return D.exN},
$S:z+54}
C.fEj.prototype={
$0(){return D.eax},
$S:z+36}
C.cqD.prototype={
$0(){return B.a7(this.a,!1).i1()},
$S:0}
C.cqE.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=(e.b-14)/2,i=x.p,h=B.a([],i)
for(w=$.hZF(),v=j*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aQ(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ac(0,A.H,p.j(0.4),A.dv,16)],t)
n=B.c(r.c,k,k,k,k,k,k,A.LT,k,k,k)
m=B.c(r.a,k,k,k,k,k,k,D.fYh,k,k,k)
l=A.c.j(0.85)
h.push(B.aA(k,B.q(k,new B.am(A.a0,k,A.ab,A.t,B.a([new B.cR(k,-6,-6,k,k,k,n,k),new B.bJ(A.ls,k,k,B.w(B.a([m,A.cR,B.c(r.b,k,k,k,k,k,k,new B.F(!0,l,k,k,k,k,12,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)],i),A.B,k,A.e,A.P,0,A.p),k)],i),k),A.f,k,k,new B.p(k,k,k,new B.bc(q,q,q,q),p,new B.a6(A.aw,A.aD,A.w,o,k,k),A.m),k,v,k,k,A.bD,k,k,j),A.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.cqC(d,r),k,k,k,k,k,k,!1,A.a4))}return B.bY(A.bH,h,A.bq,k,14,14)},
$S:173}
C.cqC.prototype={
$0(){return B.a7(this.a,!1).ca(B.e4(new C.cqB(this.b),!1,null,x.H))},
$S:0}
C.cqB.prototype={
$1(d){return this.a.f.$0()},
$S:41}
C.f4h.prototype={
$0(){var w=this.a
return w.w=w.d[w.bah(w.f)]},
$S:0}
C.f4d.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cW.ai()*7},
$S:0}
C.f4c.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bN(0,A.ck)
w.w=""},
$S:0}
C.f4f.prototype={
$0(){var w=this.a
return w.l(new C.f4e(w,this.b))},
$S:0}
C.f4e.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cP(w,this.b)},
$S:0}
C.f4g.prototype={
$1(d){return this.a.b4s(0)},
$S:2}
C.ebg.prototype={
$0(){return C.Kf("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.ebh.prototype={
$0(){},
$S:0}
C.ebb.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.ebd.prototype={
$0(){return this.a.b4u(this.b)},
$S:0}
C.ebe.prototype={
$0(){var w=this.a
return w.l(new C.ebc(w))},
$S:0}
C.ebc.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.ebf.prototype={
$0(){var w=this.a
return w.b4u(w.d)},
$S:0}
C.dVD.prototype={
$2(d,e){return d+e},
$S:82}
C.dVE.prototype={
$0(){},
$S:0}
C.dVy.prototype={
$2(d,e){return d+e},
$S:82}
C.dVB.prototype={
$0(){var w=this.a
return w.l(new C.dVA(w,this.b))},
$S:0}
C.dVA.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dVC.prototype={
$0(){var w=this.a
return w.l(new C.dVz(w))},
$S:0}
C.dVz.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.e72.prototype={
$0(){return E.v_(this.b,this.a.d,"drawing")},
$S:0}
C.e73.prototype={
$1(d){var w=this.a
return w.l(new C.e71(w,d))},
$S:50}
C.e71.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aMa(u,v,t))},
$S:0}
C.e74.prototype={
$1(d){var w=this.a
return w.l(new C.e70(w,d))},
$S:19}
C.e70.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
C.e75.prototype={
$1(d){var w=this.a
return w.l(new C.e7_(w,d))},
$S:24}
C.e7_.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aMa(u,v,t))},
$S:0}
C.e76.prototype={
$0(){var w=this.a
return w.l(new C.e6Z(w,this.b))},
$S:0}
C.e6Z.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.e77.prototype={
$1(d){var w=this.a
return w.l(new C.e6Y(w,d))},
$S:6}
C.e6Y.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.e78.prototype={
$0(){var w=this.a
return w.l(new C.e6X(w))},
$S:0}
C.e6X.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.e79.prototype={
$0(){var w=this.a
return w.l(new C.e6W(w))},
$S:0}
C.e6W.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.e7a.prototype={
$0(){var w=this.a
return w.l(A.d.gtH(w.e))},
$S:0}
C.e7b.prototype={
$0(){var w=this.a
return w.l(new C.e6V(w))},
$S:0}
C.e6V.prototype={
$0(){var w=this.a
w.x=D.aDw[A.n.F(A.d.c9(D.aDw,w.x)+1,4)]},
$S:0}
C.ezc.prototype={
$0(){return this.a.f.K(0,this.b)},
$S:0}
C.ezd.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.Kf("bell",B.a([0,4,7],w),500,0.45)
u.l(new C.ezb(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.d()
if(v===u.length)C.Kf("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:12}
C.ezb.prototype={
$0(){var w=this.a
w.r.u(0,B.a([this.b,this.c],x.t))
w.f.a7(0)},
$S:0}
C.eze.prototype={
$0(){var w=this.a
if(w.c==null)return
w.l(new C.eza(w))},
$S:12}
C.eza.prototype={
$0(){var w=this.a
w.f.a7(0)
w.x=!1},
$S:0}
C.ezi.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return B.aA(w,B.l4(new C.ezg(v,e),w,A.b0,A.pX,w,w,new B.bq(0,u,x.a),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ezh(v,e),w,w,w,w,w,w,!1,A.a4)},
$S:81}
C.ezh.prototype={
$0(){return this.a.chM(this.b)},
$S:0}
C.ezg.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dB(),m=n.a
m.$flags&2&&B.ak(m)
m[11]=0.001
n.fM(3.141592653589793*e)
m=B.n(16)
w=o?p:D.cft
if(o)v=q.a.r.q(0,q.b)?A.bf.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.K(u.r.q(0,t)?A.bf:A.aT,A.r,1)
if(o){r=B.dB()
r.fM(3.141592653589793)
u=u.e
u===$&&B.d()
r=B.fG(A.z,B.c(u[t],p,p,p,p,p,p,H.adF,p,p,p),p,r,!0)
u=r}else u=D.hgC
return B.fG(A.z,B.q(A.z,u,A.f,p,p,new B.p(v,p,s,m,p,w,A.m),p,p,p,p,p,p,p,p),p,n,!0)},
$S:111}
C.ezj.prototype={
$0(){var w=this.a
return w.l(new C.ezf(w,this.b))},
$S:0}
C.ezf.prototype={
$0(){var w=this.a
w.d=this.b.a
w.awk()},
$S:0}
C.ezk.prototype={
$0(){var w=this.a
return w.l(w.gbRa())},
$S:0}
C.eMk.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.eMl.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.eMi.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eMj.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.eMh(w))},
$S:12}
C.eMh.prototype={
$0(){return this.a.f=-1},
$S:0}
C.eMm.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.eMn.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.eMo.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b4t()},
$S:12}
C.eMp.prototype={
$0(){return this.a.chS(this.b)},
$S:0}
C.f_D.prototype={
$1(d){return B.v(d.h(0,1))+","},
$S:58}
C.f_M.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.c(d,w,1,A.a2,w,w,w,B.l(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.C(A.jZ,B.A(B.a([v,A.aa,new B.d_(1,A.c8,new B.d7(A.dn,A.z,A.f,B.c(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w),w)],x.p),A.l,w,A.e,A.i,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1982}
C.f_I.prototype={
$1(d){return this.a.l(new C.f_H())},
$S:2}
C.f_H.prototype={
$0(){},
$S:0}
C.f_J.prototype={
$0(){var w=this.a
return w.l(new C.f_G(w,this.b))},
$S:0}
C.f_G.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f_K.prototype={
$1(d){var w=this.a
return w.l(new C.f_F(w,d))},
$S:6}
C.f_F.prototype={
$0(){return this.a.f=A.h.S(this.b)},
$S:0}
C.f_L.prototype={
$0(){var w=this.a
return w.l(new C.f_E(w))},
$S:0}
C.f_E.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.exS.prototype={
$0(){},
$S:0}
C.exT.prototype={
$0(){},
$S:0}
C.exL.prototype={
$0(){var w=this.a
return w.l(new C.exK(w))},
$S:0}
C.exK.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.c4(u,1,!1,x.S)
w.r=0.9
E.Yu("hat",0,0.6)},
$S:0}
C.exM.prototype={
$0(){var w=this.a
return w.l(new C.exJ(w))},
$S:0}
C.exJ.prototype={
$0(){this.a.y=1.1
E.mR("bell",36,200,0.4)},
$S:0}
C.exN.prototype={
$0(){var w=this.a
return w.l(new C.exI(w))},
$S:0}
C.exI.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aw(Math.max(v,u)-t+1)
w.as=u
E.mR("bell",12+A.n.F(u,12),500,0.5)},
$S:0}
C.exO.prototype={
$0(){var w=this.a
return w.l(new C.exH(w,this.b))},
$S:0}
C.exH.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.exP.prototype={
$1(d){var w=this.a
return w.l(new C.exG(w,d))},
$S:6}
C.exG.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.h.S(this.b),r=J.e3(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.exQ.prototype={
$1(d){var w=this.a
return w.l(new C.exF(w,d))},
$S:6}
C.exF.prototype={
$0(){return this.a.z=A.h.S(this.b)},
$S:0}
C.exR.prototype={
$1(d){var w=this.a
return w.l(new C.exE(w,d))},
$S:6}
C.exE.prototype={
$0(){return this.a.Q=A.h.S(this.b)},
$S:0}
C.cqz.prototype={
$0(){var w=this
return E.mR(w.a,w.b,w.c,w.d)},
$S:1};(function aliases(){var w=C.aQg.prototype
w.bD6=w.t
w=C.aPk.prototype
w.bC8=w.t
w=C.aPl.prototype
w.bC9=w.t
w=C.aPp.prototype
w.bCd=w.t
w=C.aR6.prototype
w.bE3=w.t
w=C.aQe.prototype
w.bD4=w.t
w=C.aBe.prototype
w.bz9=w.t
w=C.aBf.prototype
w.bza=w.t
w=C.aNM.prototype
w.bAw=w.t
w=C.aPA.prototype
w.bCo=w.t
w=C.aPm.prototype
w.bCa=w.t
w=C.aPH.prototype
w.bCw=w.t
w=C.aQ7.prototype
w.bCY=w.t
w=C.aQA.prototype
w.bDq=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0,u=a._instance_1u,t=a._instance_1i,s=a._instance_0i,r=a.installInstanceTearOff
w(C.aI7.prototype,"gaAw","ccQ",1)
v(C,"iHB","ca4",3)
var q
u(q=C.aGx.prototype,"gcmh","cmi",22)
w(q,"gcdq","b2T",1)
w(C.aGz.prototype,"gcfc","cfd",1)
t(C.aGQ.prototype,"gcfk","cfl",39)
w(q=C.aLh.prototype,"gcGt","cGu",1)
w(q,"gcfm","a0O",1)
w(q,"gcqZ","cr_",1)
w(q,"gcfi","a0N",3)
w(q,"gcfj","agX",3)
w(q=C.aI6.prototype,"gbOe","acb",3)
w(q,"gcqf","b6F",1)
w(q,"gcu9","ajE",3)
s(q,"gcfo","agY",3)
s(q=C.a6N.prototype,"gtH","a7",1)
u(q,"gd3F","aqP",0)
u(q,"gd_Y","Ni",0)
w(q,"gd62","bol",1)
r(C.alw.prototype,"gcfL",0,5,null,["$5"],["lK"],41,0,0)
w(q=C.aH3.prototype,"gcfM","cfN",1)
w(q,"gcx3","ak_",3)
w(q,"gcmA","aii",3)
w(q,"gcEq","al7",3)
w(q=C.aGU.prototype,"gc7P","af4",3)
w(q,"gbdP","cL3",1)
w(q,"gb3P","cfR",1)
w(q=C.aID.prototype,"gchN","chO",1)
s(q,"gchL","b4s",1)
w(C.aHT.prototype,"gbRa","awk",1)
s(C.aIg.prototype,"gchP","chQ",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aH,[C.amL,C.Hq,C.vS,C.aWD,C.a5F,C.bf0,C.ca5,C.z5,C.Dt,C.o7,C.bfP,C.Bu,C.byk,C.qP,C.rA,C.Dx,C.a0D,C.ahj,C.a2U,C.DI,C.ae7,C.aep,C.agn,C.Hb,C.es,C.uk,C.acL,C.adU,C.a6N,C.nj,C.bfQ,C.h8,C.mv,C.bzE,C.aMa])
u(B.hq,[C.fWt,C.fKw,C.fSt,C.fSu,C.fWq,C.fWr,C.eqW,C.ere,C.eGL,C.eGi,C.eGj,C.eGk,C.eGl,C.eGm,C.eGn,C.eGo,C.eGp,C.eGg,C.eGh,C.eGf,C.eGG,C.eGH,C.eGI,C.dV9,C.dVb,C.dVe,C.dVp,C.ca6,C.ca7,C.fDw,C.fDx,C.fDy,C.fDF,C.fDG,C.fDH,C.dXc,C.dWU,C.dXd,C.dWP,C.dWK,C.dWM,C.dWS,C.dX4,C.dX2,C.dX3,C.dX1,C.dWZ,C.dX0,C.fj4,C.fiE,C.fiF,C.fiM,C.fiT,C.fj1,C.fiB,C.dwF,C.dwG,C.dwC,C.dwD,C.dwE,C.dwH,C.dwI,C.dwJ,C.dwK,C.dwL,C.dwM,C.dwN,C.dwO,C.dwP,C.eFH,C.eFI,C.eFJ,C.eFK,C.eFF,C.eFG,C.eGb,C.eFO,C.eFQ,C.eFA,C.eG7,C.eG5,C.eG6,C.eG4,C.eG3,C.eFC,C.bTk,C.bTv,C.bTq,C.bTw,C.bTy,C.bTl,C.bTj,C.bTD,C.bTr,C.bTu,C.bTt,C.bTs,C.bNF,C.h8P,C.h8S,C.h8Q,C.bNk,C.bNf,C.bNd,C.bND,C.bNv,C.bNw,C.bNu,C.bNx,C.bN3,C.bN5,C.bN1,C.bMS,C.bMT,C.bMU,C.fDI,C.fDJ,C.fDK,C.fDv,C.fDL,C.fDu,C.fDM,C.fDz,C.fDt,C.fDA,C.fDs,C.fDB,C.fDr,C.fDC,C.fDp,C.fDq,C.fDD,C.fDn,C.fDo,C.fDE,C.fDm,C.e7H,C.e7I,C.e7x,C.e7t,C.e7G,C.e7L,C.cPy,C.he_,C.he0,C.e3t,C.e3l,C.e3k,C.e3D,C.cqB,C.f4g,C.e73,C.e74,C.e75,C.e77,C.ezg,C.f_D,C.f_M,C.f_I,C.f_K,C.exP,C.exQ,C.exR])
u(B.j1,[C.fWs,C.er0,C.eqZ,C.eGr,C.eGE,C.dWL,C.dX7,C.e2o,C.fj7,C.fj8,C.fiL,C.fiY,C.fiZ,C.fiU,C.fj_,C.fiA,C.eFD,C.eFE,C.eGa,C.eG2,C.eFS,C.bTx,C.bTz,C.bTB,C.bTm,C.bTo,C.bNG,C.bNE,C.cxK,C.h8R,C.bNc,C.bNe,C.bNB,C.bNA,C.bN2,C.e7F,C.cPz,C.e3m,C.e3y,C.e3w,C.e3E,C.e3q,C.e3o,C.cqE,C.dVD,C.dVy,C.ezi])
u(B.af,[C.XG,C.Y3,C.Wt,C.WA,C.OV,C.aLg,C.Y2,C.alu,C.Xb,C.aAU,C.WV,C.YB,C.Xj,C.Wu,C.Xa,C.XX,C.Y8,C.Ys,C.XW])
u(B.ai,[C.bpj,C.aQg,C.aPk,C.aPp,C.aGQ,C.aR6,C.aQe,C.aBe,C.bCQ,C.aNM,C.aPA,C.aQA,C.aPH,C.aPm,C.boK,C.aHT,C.aIg,C.bq1,C.aQ7])
u(B.j0,[C.eqU,C.eqV,C.er6,C.er7,C.er2,C.er1,C.er3,C.er_,C.er4,C.eqY,C.er5,C.eqX,C.era,C.er9,C.erb,C.er8,C.erc,C.erd,C.erf,C.eGK,C.eGM,C.eGN,C.eGt,C.eGs,C.eGq,C.eGz,C.eGA,C.eGw,C.eGB,C.eGv,C.eGC,C.eGD,C.eGu,C.eGF,C.eGy,C.eGJ,C.eGx,C.dVw,C.dVv,C.dV6,C.dV7,C.dV8,C.dVx,C.dVa,C.dVc,C.dVd,C.dVf,C.dV3,C.dV4,C.dV5,C.dVm,C.dVn,C.dVo,C.dVl,C.dVq,C.dVk,C.dVr,C.dVj,C.dVs,C.dVi,C.dVt,C.dVh,C.dVu,C.dVg,C.dWR,C.dWQ,C.dWV,C.dWN,C.dWO,C.dWW,C.dWX,C.dWY,C.dWT,C.dWJ,C.dX6,C.dX5,C.dX8,C.dX9,C.dXa,C.dX_,C.dXb,C.d_v,C.e2m,C.e2l,C.e2n,C.fDX,C.fDY,C.fDZ,C.fE_,C.fE0,C.fE1,C.fE2,C.fE3,C.fE4,C.fj6,C.fj5,C.fiO,C.fiN,C.fiD,C.fiC,C.fiG,C.fiJ,C.fiI,C.fiK,C.fiH,C.fiW,C.fiV,C.fiX,C.fiP,C.fj0,C.fiS,C.fj2,C.fiR,C.fj3,C.fiQ,C.eFM,C.eFB,C.eFL,C.eFx,C.eFN,C.eFP,C.eFy,C.eFz,C.eG9,C.eG8,C.eG_,C.eG0,C.eG1,C.eFW,C.eFX,C.eFV,C.eFY,C.eFU,C.eFZ,C.eFT,C.eFR,C.dwB,C.bTA,C.bTC,C.bTn,C.bTp,C.bNh,C.bNi,C.bNg,C.bNj,C.bNl,C.bN6,C.bN7,C.bNb,C.bN8,C.bN9,C.bNa,C.bNC,C.bMH,C.bNs,C.bNt,C.bNq,C.bNr,C.bNn,C.bNo,C.bNp,C.bNy,C.bNm,C.bNz,C.bMI,C.bN4,C.bMP,C.bMO,C.bMQ,C.bMR,C.bMN,C.bMV,C.bMM,C.bMW,C.bMX,C.bMY,C.bMZ,C.bML,C.bN_,C.bMK,C.bN0,C.bMJ,C.e7y,C.e7J,C.e7K,C.e7w,C.e7v,C.e7u,C.e7D,C.e7B,C.e7C,C.e7E,C.e7z,C.e7A,C.e7M,C.e7N,C.e7O,C.e7P,C.e7Q,C.e3u,C.e3v,C.e3F,C.e3s,C.e3G,C.e3H,C.e3z,C.e3A,C.e3B,C.e3C,C.e3I,C.e3x,C.e3r,C.e3p,C.e3j,C.e3n,C.fEc,C.fEd,C.fEe,C.fEf,C.fEg,C.fEh,C.fEi,C.fEj,C.cqD,C.cqC,C.f4h,C.f4d,C.f4c,C.f4f,C.f4e,C.ebg,C.ebh,C.ebb,C.ebd,C.ebe,C.ebc,C.ebf,C.dVE,C.dVB,C.dVA,C.dVC,C.dVz,C.e72,C.e71,C.e70,C.e7_,C.e76,C.e6Z,C.e6Y,C.e78,C.e6X,C.e79,C.e6W,C.e7a,C.e7b,C.e6V,C.ezc,C.ezd,C.ezb,C.eze,C.eza,C.ezh,C.ezj,C.ezf,C.ezk,C.eMk,C.eMl,C.eMi,C.eMj,C.eMh,C.eMm,C.eMn,C.eMo,C.eMp,C.f_H,C.f_J,C.f_G,C.f_F,C.f_L,C.f_E,C.exS,C.exT,C.exL,C.exK,C.exM,C.exJ,C.exN,C.exI,C.exO,C.exH,C.exG,C.exF,C.exE,C.cqz])
t(C.bD3,C.aQg)
t(C.aI7,C.bD3)
u(B.lQ,[C.bma,C.bg6,C.bxI,C.beJ,C.bwh,C.bvG,C.bfp,C.bvI,C.bzO,C.bm8,C.alw,C.bdT,C.bAS,C.ahc,C.bB3,C.bvH,C.bqO])
t(C.aPl,C.aPk)
t(C.aGx,C.aPl)
t(C.bCN,C.aPp)
t(C.aGz,C.bCN)
u(B.ln,[C.LL,C.a2H,C.KJ])
u(B.aw,[C.bwG,C.ahw,C.agj,C.RY,C.bxd,C.aaK,C.bif])
t(C.aLh,C.aR6)
t(C.bm7,B.p1)
t(C.aI6,C.aQe)
t(C.aBf,C.aBe)
t(C.alv,C.aBf)
t(C.aH3,C.bCQ)
t(C.bdU,C.aNM)
t(C.aGU,C.aPA)
t(C.bDa,C.aQA)
t(C.aID,C.bDa)
t(C.bCS,C.aPH)
t(C.boT,C.bCS)
t(C.bCM,C.aPm)
t(C.bor,C.bCM)
t(C.bD1,C.aQ7)
t(C.bpv,C.bD1)
w(C.aQg,B.cm)
w(C.bD3,E.o4)
w(C.aPk,B.cm)
w(C.aPl,E.o4)
w(C.aPp,B.cm)
w(C.bCN,E.o4)
w(C.aR6,B.eZ)
w(C.aQe,B.cm)
w(C.aBe,B.cm)
w(C.aBf,E.o4)
w(C.aNM,B.cm)
v(C.bCQ,B.eG)
w(C.aPA,B.cm)
w(C.aPm,B.cm)
w(C.bCM,E.o4)
w(C.aPH,B.cm)
w(C.bCS,E.o4)
w(C.aQ7,B.cm)
w(C.bD1,E.o4)
w(C.aQA,B.cm)
w(C.bDa,E.o4)})()
B.jj(b.typeUniverse,JSON.parse('{"XG":{"af":[],"x":[]},"bpj":{"ai":["XG"]},"Y3":{"af":[],"x":[]},"aI7":{"ai":["Y3"]},"bma":{"aC":[]},"Wt":{"af":[],"x":[]},"aGx":{"ai":["Wt"]},"WA":{"af":[],"x":[]},"aGz":{"ai":["WA"]},"bg6":{"aC":[]},"ahw":{"aw":[],"x":[]},"agj":{"aw":[],"x":[]},"aLg":{"af":[],"x":[]},"OV":{"af":[],"x":[]},"aGQ":{"ai":["OV"]},"bwG":{"aw":[],"x":[]},"RY":{"aw":[],"x":[]},"bxI":{"aC":[]},"bxd":{"aw":[],"x":[]},"beJ":{"aC":[]},"aLh":{"ai":["aLg"]},"bwh":{"aC":[]},"bvG":{"aC":[]},"bfp":{"aC":[]},"bvI":{"aC":[]},"bzO":{"aC":[]},"Y2":{"af":[],"x":[]},"bm7":{"aC":[]},"aI6":{"ai":["Y2"]},"bm8":{"aC":[]},"alw":{"aC":[]},"alu":{"af":[],"x":[]},"alv":{"ai":["alu"]},"Xb":{"af":[],"x":[]},"aAU":{"af":[],"x":[]},"aH3":{"ai":["Xb"],"eG":[]},"bdU":{"ai":["aAU"]},"bdT":{"aC":[]},"WV":{"af":[],"x":[]},"aGU":{"ai":["WV"]},"bAS":{"aC":[]},"ahc":{"aC":[]},"aaK":{"aw":[],"x":[]},"YB":{"af":[],"x":[]},"Xj":{"af":[],"x":[]},"Wu":{"af":[],"x":[]},"Xa":{"af":[],"x":[]},"XX":{"af":[],"x":[]},"Y8":{"af":[],"x":[]},"Ys":{"af":[],"x":[]},"XW":{"af":[],"x":[]},"aID":{"ai":["YB"]},"bB3":{"aC":[]},"boT":{"ai":["Xj"]},"bvH":{"aC":[]},"bor":{"ai":["Wu"]},"boK":{"ai":["Xa"]},"bqO":{"aC":[]},"aHT":{"ai":["XX"]},"aIg":{"ai":["Y8"]},"bq1":{"ai":["Ys"]},"bpv":{"ai":["XW"]},"bif":{"aw":[],"x":[]}}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.as
return{c:w("ld<u?>"),G:w("u"),J:w("bl<o,H>"),Q:w("dd<o>"),Z:w("a_"),I:w("vp"),M:w("N<dl>"),l:w("N<a5A>"),h:w("N<a5F>"),V:w("N<ac>"),O:w("N<u>"),F:w("N<W>"),D:w("N<az<aH>>"),x:w("N<a_>"),E:w("N<ah<o>>"),b:w("N<ah<H>>"),U:w("N<ah<G?>>"),B:w("N<a9<o,aH>>"),g:w("N<m>"),bz:w("N<uk>"),v:w("N<h_>"),eZ:w("N<+(o,o)>"),fT:w("N<+(H,x)>"),L:w("N<+(G,o)>"),u:w("N<+(G,G)>"),r:w("N<+(o,o,a_)>"),e:w("N<+(o,H,H,G)>"),o:w("N<+(o,G,o,G)>"),d:w("N<+(o,o,H,H,a9<o,H>)>"),_:w("N<vS>"),fQ:w("N<acL>"),s:w("N<o>"),cF:w("N<au>"),X:w("N<KZ>"),p:w("N<x>"),bL:w("N<adU>"),fH:w("N<ll>"),a_:w("N<ae7>"),cB:w("N<o7>"),ba:w("N<aep>"),eW:w("N<Dx>"),fY:w("N<a0D>"),ac:w("N<agn>"),cd:w("N<DI>"),fr:w("N<ahj>"),e4:w("N<a2U>"),au:w("N<aMa>"),f7:w("N<P>"),n:w("N<H>"),t:w("N<G>"),dS:w("N<aC?>"),fs:w("N<uk?>"),bN:w("N<G?>"),gJ:w("cB<alv>"),A:w("cB<ai<af>>"),bF:w("ah<u>"),gl:w("ah<W>"),ew:w("ah<aH>"),j:w("ah<@>"),P:w("a9<o,@>"),f:w("a9<@,@>"),bd:w("O<es,o>"),fR:w("O<+(H,x),x>"),w:w("ip"),gA:w("vt"),gD:w("wR"),k:w("cr"),K:w("aH"),Y:w("uk"),C:w("es"),N:w("o"),bO:w("au"),a:w("bq<H>"),W:w("bb<o>"),aC:w("bb<G?>"),dg:w("eg<rA>"),m:w("bf0"),a2:w("Dt"),f3:w("rA"),es:w("Hb"),q:w("l5"),y:w("P"),i:w("H"),z:w("@"),S:w("G"),R:w("ah<@>?"),cK:w("aH?"),T:w("o?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b6A=new B.dl(0,0.1)
D.b8x=new C.aWD(0,0,0)
D.N6=new C.aWD(0,0.5,0)
D.b98=new B.ax(A.bf,1,A.r,-1)
D.baE=new B.aX(16,1/0,16,1/0)
D.baO=new B.aX(0,1/0,0,210)
D.bsX=new B.u(1,0.10588235294117647,0.12549019607843137,0.18823529411764706,A.q)
D.dGS=w([D.bsX,Av.all],x.O)
D.eRB=new B.bU(A.C4,1.1,A.w,null,0,D.dGS,null,null)
D.baW=new B.p(null,null,null,null,null,D.eRB,A.m)
D.bbU=new B.p(A.bh,null,null,null,null,null,A.a6)
D.fLO=new B.F(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hpp=new B.D("\u26a1",null,D.fLO,null,null,null,null,null,null,null,null,null)
D.bgE=new B.cp(A.z,null,null,D.hpp,null)
D.aZD=new B.F(!0,A.bX,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.heA=new B.D("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aZD,null,A.K,null,null,null,null,null,null,null)
D.eJE=new B.C(A.ob,D.heA,null)
D.bgP=new B.cp(A.z,null,null,D.eJE,null)
D.h4e=new B.D("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aZD,null,A.K,null,null,null,null,null,null,null)
D.eKz=new B.C(A.I0,D.h4e,null)
D.bhy=new B.cp(A.z,null,null,D.eKz,null)
D.ai3=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.blq=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.blH=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bmX=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.bn3=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.bnq=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.bpu=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.bqE=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.brp=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.aks=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.bsq=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.akR=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.akZ=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.bur=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.alq=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.bwu=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.bwC=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bx6=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.x_=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.bzk=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.amZ=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.bFc=new B.bh(11e6)
D.bH4=new B.R(10,6,10,2)
D.bH6=new B.R(10,8,0,10)
D.bHL=new B.R(12,8,6,10)
D.bHO=new B.R(12,8,8,8)
D.bHV=new B.R(14,0,14,22)
D.bHX=new B.R(14,0,14,30)
D.bJ1=new B.R(16,4,16,28)
D.bJk=new B.R(18,10,18,16)
D.bM8=new B.R(4,4,8,2)
D.bML=new B.R(8,14,8,12)
D.bMW=new B.R(8,6,8,8)
D.bNh=new B.R(0,0,1.5,0)
D.b8j=new B.Et(26,"saturation")
D.bNA=new B.vd(A.cG,D.b8j,null,A.ZY)
D.bNB=new B.h3(A.H,11)
D.bNF=new B.h3(A.H,30)
D.h3g=new B.D("REACTION LAB",null,U.b_h,null,null,null,null,A.a2,null,1,null,null)
D.bNO=new B.bu(1,A.b9,D.h3g,null)
D.h7r=new B.D("\ud83d\udce2 NGMY Ads",null,A.qD,null,null,null,null,A.f6,null,1,null,null)
D.bOL=new B.bu(1,A.b9,D.h7r,null)
D.h1R=new B.D("Wire selected",null,A.h6,null,null,null,null,null,null,null,null,null)
D.bOZ=new B.bu(1,A.b9,D.h1R,null)
D.as8=new B.a_(62712,"MaterialIcons",!1)
D.bVl=new B.a_(62908,"MaterialIcons",!1)
D.bX1=new B.a_(983122,"MaterialIcons",!1)
D.bXh=new B.a_(983247,"MaterialIcons",!1)
D.bXy=new B.a_(983443,"MaterialIcons",!1)
D.bXR=new B.a_(983616,"MaterialIcons",!1)
D.bX0=new B.a_(983117,"MaterialIcons",!1)
D.c0G=new B.ae(D.bX0,28,A.c,null,null,null)
D.c0Y=new B.ae(A.jm,18,null,null,null,null)
D.c3f=new B.ae(A.oi,null,A.ac,null,null,null)
D.c3p=new B.ae(A.a5q,21,A.ac,null,null,null)
D.c4h=new B.ae(A.eH,17,A.ac,null,null,null)
D.c7e=new B.ae(A.jm,21,A.ac,null,null,null)
D.c7K=new B.ae(A.es,20,A.c2,null,null,null)
D.c8Q=new B.ae(A.e8,null,A.aQ,null,null,null)
D.dEk=w([A.dl,A.di,A.dl],x.O)
D.avT=new B.a6(A.a5,A.a9,A.w,D.dEk,null,null)
D.dcU=w([A.bP,A.bl],x.O)
D.ccl=new B.a6(A.aV,A.b_,A.w,D.dcU,null,null)
D.ccA=new B.a6(A.aV,A.b_,A.w,A.a86,null,null)
D.dzq=w([F.NA,A8.an8],x.O)
D.cdk=new B.a6(A.aV,A.b_,A.w,D.dzq,null,null)
D.da9=w([A.pI,A.iJ],x.O)
D.cdp=new B.a6(A.aV,A.b_,A.w,D.da9,null,null)
D.dcB=w([A.cU,A.ax],x.O)
D.aw6=new B.a6(A.aV,A.b_,A.w,D.dcB,null,null)
D.dxg=w([A.d1,A.iM,A.bl],x.O)
D.cdI=new B.a6(A.a5,A.a9,A.w,D.dxg,null,null)
D.dJK=w([A.d1,A.bP,A.bl],x.O)
D.cdT=new B.a6(A.a5,A.a9,A.w,D.dJK,null,null)
D.dxo=w([A.cz,A.cx],x.O)
D.aw9=new B.a6(A.aV,A.b_,A.w,D.dxo,null,null)
D.aGd=w([A.cU,M.ni],x.O)
D.cej=new B.a6(A.aV,A.b_,A.w,D.aGd,null,null)
D.ceB=new B.a6(A.aV,A.b_,A.w,X.awt,null,null)
D.cft=new B.a6(A.aw,A.aD,A.w,A.Tu,null,null)
D.by2=new B.u(1,0.16470588235294117,0.16470588235294117,0.1803921568627451,A.q)
D.btc=new B.u(1,0.0392156862745098,0.0392156862745098,0.043137254901960784,A.q)
D.dmD=w([D.by2,D.btc],x.O)
D.cfx=new B.a6(A.aV,A.b_,A.w,D.dmD,null,null)
D.cfH=new B.a6(A.aV,A.b_,A.w,H.aFu,null,null)
D.amI=new B.u(1,0.043137254901960784,0.043137254901960784,0.047058823529411764,A.q)
D.bxE=new B.u(1,0.22745098039215686,0.22745098039215686,0.23921568627450981,A.q)
D.dGh=w([D.amI,D.bxE,D.amI],x.O)
D.cfP=new B.a6(A.a5,A.a9,A.w,D.dGh,null,null)
D.bx0=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.bxW=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cVj=w([A.OJ,D.bx0,D.bxW],x.O)
D.cfT=new B.a6(A.aV,A.b_,A.w,D.cVj,null,null)
D.cIs=w([A.de,A.j1],x.O)
D.cg7=new B.a6(A.aV,A.b_,A.w,D.cIs,null,null)
D.cW1=w([A.d1,A.hX,A.d1],x.O)
D.cgf=new B.a6(A.a5,A.a9,A.w,D.cW1,null,null)
D.bAM=new B.u(1,0.07058823529411765,0.0784313725490196,0.10196078431372549,A.q)
D.cJe=w([F.aib,D.bAM],x.O)
D.cgl=new B.a6(A.aV,A.b_,A.w,D.cJe,null,null)
D.ch_=w([0,4,7],x.t)
D.ch0=w([0,4,7,12],x.t)
D.ch1=w([0,4,7,4],x.t)
D.aF9=w([A.hm,A.ts],x.O)
D.aED=w([A.fL,A.cY],x.O)
D.aCX=w([A.bk,A.e0],x.O)
D.d3i=w([A.aQ,A.de],x.O)
D.dyQ=w([A.c5,A.lX],x.O)
D.aCn=w([A.cX,A.kf],x.O)
D.d8N=w([A.bQ,A.aM],x.O)
D.chp=w([D.aF9,D.aED,A.a7h,D.aCX,D.d3i,A.a7d,A.a7u,D.dyQ,D.aCn,D.d8N],B.as("N<ah<u>>"))
D.cm7=w([120,220,380],x.t)
D.cpS=w([12,16,19,24],x.t)
D.cq3=w([1400,800,450,2400],x.t)
D.cyC=w([250,450,900,1500],x.t)
D.bkJ=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.bxq=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.bv6=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.bBn=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.bud=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.aBC=w([D.bkJ,D.bxq,D.bv6,D.bBn,D.bud],x.O)
D.fbn=new B.y(-25,A.ax)
D.f_v=new B.y(25,A.bC)
D.cIy=w([D.fbn,D.f_v],B.as("N<+(H,u)>"))
D.cQ5=w([50,25,75],x.t)
D.cVU=w([0,5,10,15,18,20,25],x.t)
D.d3C=w([900,500,250,1600],x.t)
D.d7Z=w([A.bk,A.bE,A.be,A.bk],x.O)
D.a78=w([A.aC,A.bu,A.bh,A.aH,A.oS],x.O)
D.d9M=w([A.ax,A.aC,A.cX,A.bu,A.bh,A.cJ,A.cj,A.bE,A.a_i],x.O)
D.a7b=w([0.04,0.17,0.3],x.n)
D.fv1=new C.vS("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.fv7=new C.vS("Medium engine","A good all-rounder.",0.3,0.9)
D.fv6=new C.vS("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Ju=w([D.fv1,D.fv7,D.fv6],x._)
D.eXE=new B.y(6,"Easy")
D.eYs=new B.y(8,"Medium")
D.eTd=new B.y(10,"Hard")
D.dbA=w([D.eXE,D.eYs,D.eTd],x.L)
D.aDl=w([0.55,0.78,1],x.n)
D.aDw=w([A.c,A.hb,A.pK,A.ax],x.O)
D.aDE=w([A.bh,A.aC,A.bu,A.di],x.O)
D.fuZ=new C.vS("Radar","Shows your height above the ground.",0.1,0)
D.fv_=new C.vS("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.fuX=new C.vS("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aDN=w([D.fuZ,D.fv_,D.fuX],x._)
D.di6=w([-29.5,28.5],x.n)
D.dic=w([A.bl,A.cm,F.O4,A.cz],x.O)
D.diA=w([47,100,220,470,1000],x.n)
D.djZ=w([0,0.32,0.62,1],x.n)
D.dk3=w([A.d1,A.hX,A.d1,A.cz],x.O)
D.KD={volts:0}
D.a99=new B.bl(D.KD,[3],x.J)
D.L5=new B.e1(["b","battery",0.2,0.3,D.a99])
D.eDo={on:0}
D.dQc=new B.bl(D.eDo,[1],x.J)
D.FA=new B.e1(["s","switch",0.5,0.3,D.dQc])
D.fsy=new B.e1(["l","bulb",0.8,0.3,A.jK])
D.dd4=w([D.L5,D.FA,D.fsy],x.d)
D.Fy=new B.b7(["b",0,"s",0])
D.frs=new B.b7(["s",1,"l",0])
D.aV2=new B.b7(["l",1,"b",1])
D.dxw=w([D.Fy,D.frs,D.aV2],x.o)
D.dcp=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.eSk=new C.nj("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.dd4,D.dxw,D.dcp)
D.aOL={ohms:0}
D.aMe=new B.bl(D.aOL,[220],x.J)
D.frX=new B.e1(["r","resistor",0.5,0.3,D.aMe])
D.fsP=new B.e1(["d","led",0.8,0.3,A.jK])
D.dB5=w([D.L5,D.frX,D.fsP],x.d)
D.fqG=new B.b7(["b",0,"r",0])
D.frm=new B.b7(["r",1,"d",0])
D.fqN=new B.b7(["d",1,"b",1])
D.dLy=w([D.fqG,D.frm,D.fqN],x.o)
D.dBy=w(["led","diode","indicator"],x.s)
D.eSr=new C.nj("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dB5,D.dLy,D.dBy)
D.aaG={level:0}
D.dPy=new B.bl(D.aaG,[0.2],x.J)
D.fs3=new B.e1(["p","pot",0.5,0.3,D.dPy])
D.fs5=new B.e1(["m","motor",0.8,0.3,A.jK])
D.ddr=w([D.L5,D.fs3,D.fs5],x.d)
D.fqF=new B.b7(["b",0,"p",0])
D.frh=new B.b7(["p",1,"m",0])
D.frc=new B.b7(["m",1,"b",1])
D.dGA=w([D.fqF,D.frh,D.frc],x.o)
D.dx9=w(["fan","motor","spin","dimmer"],x.s)
D.eSi=new C.nj("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.ddr,D.dGA,D.dx9)
D.a95=new B.bl(D.aaG,[0.9],x.J)
D.aVb=new B.e1(["s","solar",0.25,0.3,D.a95])
D.aVa=new B.e1(["l","bulb",0.75,0.3,A.jK])
D.dgE=w([D.aVb,D.aVa],x.d)
D.frp=new B.b7(["s",0,"l",0])
D.fr9=new B.b7(["l",1,"s",1])
D.del=w([D.frp,D.fr9],x.o)
D.dHl=w(["solar","sun","without battery","no battery","free"],x.s)
D.eSl=new C.nj("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.dgE,D.del,D.dHl)
D.fsU=new B.e1(["c","crank",0.25,0.3,D.a95])
D.dv9=w([D.fsU,D.aVa],x.d)
D.fqJ=new B.b7(["c",0,"l",0])
D.fr8=new B.b7(["l",1,"c",1])
D.dvR=w([D.fqJ,D.fr8],x.o)
D.dvl=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.eSh=new C.nj("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.dv9,D.dvR,D.dvl)
D.dPx=new B.bl(D.aaG,[0.7],x.J)
D.fsa=new B.e1(["t","turbine",0.25,0.3,D.dPx])
D.frV=new B.e1(["m","motor",0.75,0.3,A.jK])
D.doC=w([D.fsa,D.frV],x.d)
D.frA=new B.b7(["t",0,"m",0])
D.frd=new B.b7(["m",1,"t",1])
D.dno=w([D.frA,D.frd],x.o)
D.dtN=w(["wind","turbine","windmill","water","hydro"],x.s)
D.eSe=new C.nj("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.doC,D.dno,D.dtN)
D.aMb=new B.bl(D.KD,[9],x.J)
D.abO=new B.e1(["b","battery",0.2,0.3,D.aMb])
D.aV8=new B.e1(["r","radio",0.8,0.3,A.jK])
D.dHZ=w([D.abO,D.FA,D.aV8],x.d)
D.fru=new B.b7(["s",1,"r",0])
D.aV4=new B.b7(["r",1,"b",1])
D.cgD=w([D.Fy,D.fru,D.aV4],x.o)
D.dGl=w(["radio","music","listen"],x.s)
D.eSq=new C.nj("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dHZ,D.cgD,D.dGl)
D.dQC=new B.bl(D.KD,[12],x.J)
D.aV7=new B.e1(["b","battery",0.2,0.3,D.dQC])
D.fsz=new B.e1(["t","tv",0.8,0.3,A.jK])
D.dd6=w([D.aV7,D.FA,D.fsz],x.d)
D.frv=new B.b7(["s",1,"t",0])
D.aV5=new B.b7(["t",1,"b",1])
D.dyU=w([D.Fy,D.frv,D.aV5],x.o)
D.dHX=w(["tv","television","screen","watch"],x.s)
D.eSb=new C.nj("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.dd6,D.dyU,D.dHX)
D.fso=new B.e1(["z","buzzer",0.8,0.3,A.jK])
D.cSu=w([D.L5,D.FA,D.fso],x.d)
D.frw=new B.b7(["s",1,"z",0])
D.frO=new B.b7(["z",1,"b",1])
D.d7_=w([D.Fy,D.frw,D.frO],x.o)
D.dEs=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.eSn=new C.nj("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cSu,D.d7_,D.dEs)
D.fs4=new B.e1(["h","heater",0.8,0.3,A.jK])
D.dsg=w([D.abO,D.FA,D.fs4],x.d)
D.frr=new B.b7(["s",1,"h",0])
D.fqW=new B.b7(["h",1,"b",1])
D.d7U=w([D.Fy,D.frr,D.fqW],x.o)
D.cBX=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.eSc=new C.nj("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.dsg,D.d7U,D.cBX)
D.fsB=new B.e1(["s","solar",0.2,0.25,D.a95])
D.dQH=new B.bl(D.aOL,[100],x.J)
D.fsE=new B.e1(["r","resistor",0.55,0.25,D.dQH])
D.fsN=new B.e1(["c","capacitor",0.85,0.25,A.jK])
D.fs0=new B.e1(["q","resistor",0.55,0.6,D.aMe])
D.fsC=new B.e1(["d","led",0.85,0.6,A.jK])
D.dyh=w([D.fsB,D.fsE,D.fsN,D.fs0,D.fsC],x.d)
D.frq=new B.b7(["s",0,"r",0])
D.frl=new B.b7(["r",1,"c",0])
D.fqL=new B.b7(["c",1,"s",1])
D.fqK=new B.b7(["c",0,"q",0])
D.frk=new B.b7(["q",1,"d",0])
D.fqO=new B.b7(["d",1,"c",1])
D.dl1=w([D.frq,D.frl,D.fqL,D.fqK,D.frk,D.fqO],x.o)
D.dun=w(["capacitor","store","charge","flash"],x.s)
D.eSp=new C.nj("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.dyh,D.dl1,D.dun)
D.fsd=new B.e1(["b","battery",0.15,0.3,D.a99])
D.fsW=new B.e1(["l1","bulb",0.5,0.3,A.jK])
D.fsl=new B.e1(["l2","bulb",0.85,0.3,A.jK])
D.daT=w([D.fsd,D.fsW,D.fsl],x.d)
D.fqE=new B.b7(["b",0,"l1",0])
D.fr5=new B.b7(["l1",1,"l2",0])
D.fr6=new B.b7(["l2",1,"b",1])
D.dps=w([D.fqE,D.fr5,D.fr6],x.o)
D.dHH=w(["series","two bulbs","dim"],x.s)
D.eSf=new C.nj("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.daT,D.dps,D.dHH)
D.eDL={volts:0,charge:1}
D.dQL=new B.bl(D.eDL,[1.5,0],x.J)
D.fsK=new B.e1(["b","battery",0.75,0.3,D.dQL])
D.daa=w([D.aVb,D.fsK],x.d)
D.fro=new B.b7(["s",0,"b",0])
D.fqI=new B.b7(["b",1,"s",1])
D.dlm=w([D.fro,D.fqI],x.o)
D.duz=w(["charge","rechargeable","flat","recharge"],x.s)
D.eSd=new C.nj("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.daa,D.dlm,D.duz)
D.dQB=new B.bl(D.KD,[4.5],x.J)
D.fs6=new B.e1(["b","battery",0.2,0.3,D.dQB])
D.aV6=new B.e1(["p","phone",0.8,0.3,A.jK])
D.dop=w([D.fs6,D.FA,D.aV6],x.d)
D.frt=new B.b7(["s",1,"p",0])
D.abN=new B.b7(["p",1,"b",1])
D.dD7=w([D.Fy,D.frt,D.abN],x.o)
D.dEX=w(["phone","charger","usb","mobile"],x.s)
D.eSj=new C.nj("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.dop,D.dD7,D.dEX)
D.frS=new B.e1(["f","fan",0.8,0.3,A.jK])
D.ctV=w([D.L5,D.frS],x.d)
D.fqD=new B.b7(["b",0,"f",0])
D.fqU=new B.b7(["f",1,"b",1])
D.d8x=w([D.fqD,D.fqU],x.o)
D.dx8=w(["fan","cool","air","wind"],x.s)
D.eSs=new C.nj("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.ctV,D.d8x,D.dx8)
D.fss=new B.e1(["b","battery",0.15,0.2,D.a99])
D.frT=new B.e1(["a","ammeter",0.5,0.2,A.jK])
D.frR=new B.e1(["l","bulb",0.85,0.2,A.jK])
D.fsu=new B.e1(["v","voltmeter",0.5,0.6,A.jK])
D.duW=w([D.fss,D.frT,D.frR,D.fsu],x.d)
D.fqB=new B.b7(["b",0,"a",0])
D.fqz=new B.b7(["a",1,"l",0])
D.frC=new B.b7(["v",0,"l",0])
D.frD=new B.b7(["v",1,"l",1])
D.dld=w([D.fqB,D.fqz,D.aV2,D.frC,D.frD],x.o)
D.dLx=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.eSo=new C.nj("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.duW,D.dld,D.dLx)
D.fsZ=new B.e1(["b","battery",0.15,0.2,D.aMb])
D.fsc=new B.e1(["t","tv",0.55,0.2,A.jK])
D.aMc=new B.bl(D.KD,[5],x.J)
D.frY=new B.e1(["c","buck",0.4,0.5,D.aMc])
D.fse=new B.e1(["p","phone",0.8,0.5,A.jK])
D.dim=w([D.fsZ,D.fsc,D.frY,D.fse],x.d)
D.fqH=new B.b7(["b",0,"t",0])
D.aV0=new B.b7(["b",0,"c",0])
D.aV1=new B.b7(["c",1,"p",0])
D.dom=w([D.fqH,D.aV5,D.aV0,D.aV1,D.abN],x.o)
D.dg8=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.eSg=new C.nj("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.dim,D.dom,D.dg8)
D.fs_=new B.e1(["c","buck",0.5,0.3,D.aMc])
D.d7G=w([D.aV7,D.fs_,D.aV6],x.d)
D.ddC=w([D.aV0,D.aV1,D.abN],x.o)
D.cFv=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.eSa=new C.nj("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.d7G,D.ddC,D.cFv)
D.fsj=new B.e1(["d","diode",0.5,0.3,A.jK])
D.dpI=w([D.abO,D.fsj,D.aV8],x.d)
D.fqC=new B.b7(["b",0,"d",0])
D.fqP=new B.b7(["d",1,"r",0])
D.cV4=w([D.fqC,D.fqP,D.aV4],x.o)
D.dfL=w(["diode","protect","backwards","one way"],x.s)
D.eSm=new C.nj("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.dpI,D.cV4,D.dfL)
D.TI=w([D.eSk,D.eSr,D.eSi,D.eSl,D.eSh,D.eSe,D.eSq,D.eSb,D.eSn,D.eSc,D.eSp,D.eSf,D.eSd,D.eSj,D.eSs,D.eSo,D.eSg,D.eSa,D.eSm],B.as("N<nj>"))
D.i3M=new C.Hq("Moon",1.62,A.d1,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.i3K=new C.Hq("Mars",3.71,A.aC,"Mars has about 38 percent of Earth's gravity.")
D.i3N=new C.Hq("Mercury",3.7,A.kJ,"Mercury is small, so its gravity is like Mars.")
D.i3H=new C.Hq("Venus",8.87,A.aQ,"Venus is almost as heavy as Earth, with strong gravity.")
D.i3J=new C.Hq("Earth",9.81,A.aH,"On Earth gravity is strong, and the air also slows you down.")
D.i3L=new C.Hq("Neptune",11.15,A.di,"Neptune pulls a little harder than Earth.")
D.i3I=new C.Hq("Jupiter",24.79,A.cX,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.u6=w([D.i3M,D.i3K,D.i3N,D.i3H,D.i3J,D.i3L,D.i3I],B.as("N<Hq>"))
D.dl_=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.dlO=w([0.2,0.5,0.8],x.n)
D.b5i=new C.LL(0,"accordion")
D.d8V=w([A.k_,A.Am,A.A6],x.x)
D.dhG=w(["Mail","SMS","Ad"],x.s)
D.d9E=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.i1W=new C.Bu(D.b5i,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aF9,D.d8V,D.dhG,D.d9E)
D.afD=new C.LL(1,"flip")
D.duh=w([A.rz,A.Eb,A.rB],x.x)
D.do4=w(["Unlock","Verify","Secure"],x.s)
D.d7B=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.i1V=new C.Bu(D.afD,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.aED,D.duh,D.do4,D.d7B)
D.b5j=new C.LL(2,"towers")
D.dmF=w([A.Ak,A.mH,A.ix],x.x)
D.dm6=w(["Save","Grow","Earn"],x.s)
D.cW7=w(["","",""],x.s)
D.i1X=new C.Bu(D.b5j,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a7h,D.dmF,D.dm6,D.cW7)
D.afE=new C.LL(3,"assemble")
D.dvp=w([A.ol,A.fQ,A.e8],x.x)
D.dgT=w(["Launch","Charge","Shine"],x.s)
D.drc=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.i1Z=new C.Bu(D.afE,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.aCX,D.dvp,D.dgT,D.drc)
D.b5k=new C.LL(4,"carousel")
D.dva=w([A.be,A.ex],x.O)
D.dhR=w([A.nq,A.asw,A.Ro],x.x)
D.dbp=w(["Explore","Discover","Learn"],x.s)
D.dox=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.i1U=new C.Bu(D.b5k,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.dva,D.dhR,D.dbp,D.dox)
D.b5l=new C.LL(5,"burst")
D.dm1=w([A.hZ,A.v3],x.O)
D.d9x=w([A.kp,A.m7,A.hQ],x.x)
D.d9W=w(["Cheer","Win","Love"],x.s)
D.dcy=w(["Make some noise","First place","Share the joy"],x.s)
D.i1Y=new C.Bu(D.b5l,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.dm1,D.d9x,D.d9W,D.dcy)
D.aEk=w([D.i1W,D.i1V,D.i1X,D.i1Z,D.i1U,D.i1Y],B.as("N<Bu>"))
D.fla=new B.b1("skin","Skin",A.a4L)
D.fmV=new B.b1("muscle","Muscles",A.QW)
D.fmx=new B.b1("organ","Organs",A.hQ)
D.bV1=new B.a_(62747,"MaterialIcons",!1)
D.fmH=new B.b1("bone","Skeleton",D.bV1)
D.fn2=new B.b1("vessel","Blood vessels",A.qf)
D.dmL=w([D.fla,D.fmV,D.fmx,D.fmH,D.fn2],x.r)
D.fv0=new C.vS("Simple legs","Light. Land gently.",0.15,0.2)
D.fv2=new C.vS("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.fv5=new C.vS("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.Ey=w([D.fv0,D.fv2,D.fv5],x._)
D.fq7=new B.b7(["beat",0.18,0.28,0])
D.frx=new B.b7(["burst",0.7,0.2,0])
D.frI=new B.b7(["delay",0.45,0.5,1])
D.frf=new B.b7(["ripple",0.75,0.6,3])
D.dgz=w([D.fq7,D.frx,D.frI,D.frf],x.e)
D.dtx=w([Q.lm,R.L3,F.Wi],x.u)
D.hZM=new C.Hb("First spark","A clock lights a burst and a ripple",D.dgz,D.dtx)
D.fqT=new B.b7(["beat",0.15,0.3,1])
D.fom=new B.b7(["ripple",0.62,0.15,0])
D.frE=new B.b7(["delay",0.4,0.45,0])
D.fqv=new B.b7(["ripple",0.7,0.45,0])
D.fq1=new B.b7(["delay",0.4,0.7,1])
D.fri=new B.b7(["shake",0.75,0.75,0])
D.dIZ=w([D.fqT,D.fom,D.frE,D.fqv,D.fq1,D.fri],x.e)
D.eUl=new B.y(2,4)
D.aUE=new B.y(4,5)
D.dkO=w([Q.lm,R.L3,F.Wi,D.eUl,D.aUE],x.u)
D.hZO=new C.Hb("Heartbeat","Two thumps, then a shake",D.dIZ,D.dkO)
D.fqd=new B.b7(["dice",0.15,0.7,1])
D.frK=new B.b7(["echo",0.4,0.7,0])
D.fqr=new B.b7(["comet",0.7,0.5,4])
D.fry=new B.b7(["burst",0.72,0.2,1])
D.fqQ=new B.b7(["burst",0.3,0.25,0])
D.fqe=new B.b7(["pop",0.55,0.85,0])
D.cBu=w([D.fqd,D.frK,D.fqr,D.fry,D.fqQ,D.fqe],x.e)
D.eTF=new B.y(1,3)
D.eTG=new B.y(1,4)
D.aUA=new B.y(0,5)
D.dv4=w([Q.lm,S.wj,D.eTF,D.eTG,D.aUA],x.u)
D.hZN=new C.Hb("Fireworks","Dice launch comets that burst in colour",D.cBu,D.dv4)
D.fql=new B.b7(["beat",0.15,0.2,2])
D.fr2=new B.b7(["chance",0.4,0.2,0])
D.fqa=new B.b7(["ball",0.7,0.12,3])
D.fpV=new B.b7(["chance",0.4,0.5,1])
D.frJ=new B.b7(["ball",0.3,0.08,1])
D.fpc=new B.b7(["ripple",0.7,0.55,3])
D.cup=w([D.fql,D.fr2,D.fqa,D.fpV,D.frJ,D.fpc],x.e)
D.eUm=new B.y(2,5)
D.cSd=w([Q.lm,S.wj,R.abE,F.Wj,D.eUm],x.u)
D.hZL=new C.Hb("Rain","Balls fall at random and splash",D.cup,D.cSd)
D.fr3=new B.b7(["beat",0.12,0.45,2])
D.frz=new B.b7(["toggle",0.38,0.2,0])
D.frG=new B.b7(["wash",0.7,0.15,4])
D.fqc=new B.b7(["count3",0.38,0.45,0])
D.frB=new B.b7(["burst",0.72,0.4,0])
D.fqR=new B.b7(["light",0.55,0.7,1])
D.fpW=new B.b7(["pop",0.8,0.8,4])
D.dyf=w([D.fr3,D.frz,D.frG,D.fqc,D.frB,D.fqR,D.fpW],x.e)
D.eUT=new B.y(3,6)
D.cxC=w([Q.lm,S.wj,R.abE,F.Wj,D.aUA,D.eUT],x.u)
D.hZJ=new C.Hb("Disco","A beat drives lights, washes and bursts",D.dyf,D.cxC)
D.frN=new B.b7(["button",0.12,0.2,0])
D.fpD=new B.b7(["delay",0.34,0.2,1])
D.frM=new B.b7(["light",0.56,0.2,1])
D.frF=new B.b7(["delay",0.56,0.45,1])
D.fr4=new B.b7(["ball",0.34,0.6,0])
D.fpU=new B.b7(["delay",0.34,0.8,1])
D.foc=new B.b7(["burst",0.7,0.8,5])
D.chs=w([D.frN,D.fpD,D.frM,D.frF,D.fr4,D.fpU,D.foc],x.e)
D.eX8=new B.y(5,6)
D.dED=w([Q.lm,S.wj,F.Wi,F.Wj,D.aUE,D.eX8],x.u)
D.hZK=new C.Hb("Domino","Tap the button and watch it run down the line",D.chs,D.dED)
D.aEH=w([D.hZM,D.hZO,D.hZN,D.hZL,D.hZJ,D.hZK],B.as("N<Hb>"))
D.dsJ=w([0.05,0.15,0.25],x.n)
D.dtL=w([1.5,3,4.5,9,12],x.n)
D.fjn=new B.b1("dice","Dice",A.oe)
D.fkH=new B.b1("coin","Coin",V.Ad)
D.fmY=new B.b1("num","Number",A.xC)
D.du_=w([D.fjn,D.fkH,D.fmY],x.r)
D.du3=w(["skin","muscle","organ","bone","vessel"],x.s)
D.aEN=w([A.c2,A.aQ,A.bf,A.aH,A.bk,A.c5,A.cX,A.fL],x.O)
D.dvb=w([A.c5,A.aH,A.eK,A.bf],x.O)
D.dwp=w([],x.h)
D.eLn=new C.es("battery","Battery","\ud83d\udd0b",A.bf,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.eLt=new C.es("solar","Solar panel","\u2600\ufe0f",A.bu,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.eM7=new C.es("crank","Hand crank","\ud83d\udd04",A.cX,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.eLK=new C.es("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aH,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.eLf=new C.es("buck","Step-down converter","\ud83d\udd3d",A.fL,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.eLI=new C.es("regulator","5 V regulator","\ud83e\uddca",A.bQ,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.eMc=new C.es("diode","Diode","\u27a1\ufe0f",A.aQ,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.eLU=new C.es("ldr","Light sensor","\ud83c\udf1e",A.eK,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.eLy=new C.es("switch","Switch","\ud83c\udf9a\ufe0f",A.bk,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.eM9=new C.es("fuse","Fuse","\ud83e\uddef",A.c2,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.eL7=new C.es("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.fL,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.eLV=new C.es("resistor","Resistor","\u3030\ufe0f",A.aQ,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.eLX=new C.es("bulb","Light bulb","\ud83d\udca1",A.eK,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.eLv=new C.es("led","LED","\ud83d\udd34",A.aC,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.eLz=new C.es("motor","Motor","\u2699\ufe0f",A.bQ,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.eLR=new C.es("buzzer","Buzzer","\ud83d\udd14",A.c5,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.eLo=new C.es("heater","Heater","\ud83d\udd25",A.cX,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.eLM=new C.es("capacitor","Capacitor","\ud83e\udeab",A.cw,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.eLE=new C.es("radio","Radio","\ud83d\udcfb",A.oS,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.eLB=new C.es("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.be,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.eLe=new C.es("voltmeter","Voltmeter","\ud83e\udded",A.bw,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.eLl=new C.es("ammeter","Ammeter","\ud83d\udcdf",A.aQ,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.eLr=new C.es("fan","Fan","\ud83c\udf00",A.aH,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.eMe=new C.es("speaker","Speaker","\ud83d\udd0a",A.c5,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.eM3=new C.es("clock","Digital clock","\u23f0",A.bf,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.eLH=new C.es("calculator","Calculator","\ud83e\uddee",A.ND,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.eLk=new C.es("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cw,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.eMd=new C.es("router","WiFi router","\ud83d\udcf6",A.fL,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.eMg=new C.es("siren","Siren","\ud83d\udea8",A.aC,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.eLa=new C.es("toycar","Toy car","\ud83d\ude97",A.cX,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.eMh=new C.es("kettle","Kettle","\ud83e\uded6",A.ne,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.eLi=new C.es("lamp","Desk lamp","\ud83e\ude94",A.eK,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.eLu=new C.es("lights","Party lights","\ud83c\udf84",A.oS,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.eLF=new C.es("fridge","Fridge","\ud83e\uddca",A.hn,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.eLc=new C.es("washer","Washing machine","\ud83e\udee7",A.cw,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.eM4=new C.es("blender","Blender","\ud83e\udd64",A.c2,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.eLC=new C.es("drone","Drone","\ud83d\ude81",A.bQ,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.eLh=new C.es("drill","Power drill","\ud83d\udd29",A.aQ,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.eLG=new C.es("torch","Torch","\ud83d\udd26",A.bO,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.eM1=new C.es("neon","Neon sign","\ud83e\udea7",A.c5,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.eLd=new C.es("microwave","Microwave","\ud83c\udf72",A.cX,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.eLW=new C.es("doorbell","Doorbell","\ud83d\udd14",A.bu,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.eLq=new C.es("camera","Security camera","\ud83d\udcf7",A.an,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.eLQ=new C.es("console","Game console","\ud83c\udfae",A.bk,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.eM6=new C.es("heartmon","Heart monitor","\ud83e\ude7a",A.hJ,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.eLb=new C.es("aquarium","Aquarium","\ud83d\udc20",A.be,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.eLL=new C.es("lighthouse","Lighthouse","\ud83d\uddfc",A.eK,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.eLT=new C.es("discoball","Disco ball","\ud83e\udea9",A.oS,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.eMb=new C.es("robot","Robot","\ud83e\udd16",A.aH,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.eL9=new C.es("toaster","Toaster","\ud83c\udf5e",A.ee,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.eMf=new C.es("ledstrip","LED strip","\ud83c\udf08",A.c5,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.eM0=new C.es("pump","Water pump","\ud83d\udeb0",A.aH,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.eLN=new C.es("hairdryer","Hair dryer","\ud83d\udca8",A.hZ,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.eLZ=new C.es("headphones","Headphones","\ud83c\udfa7",A.bk,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.eLj=new C.es("smartwatch","Apple Watch Ultra","\u231a",A.bw,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.eMa=new C.es("tablet","iPad Pro M5","\ud83d\udcf2",A.cw,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.eL6=new C.es("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hJ,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.eLD=new C.es("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bv,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.eLw=new C.es("appletv","Apple TV 4K","\ud83d\udcfa",A.bP,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.eLS=new C.es("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.wU,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.eL8=new C.es("iphonefold","iPhone Fold","\ud83d\udcf1",A.b1,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.eLm=new C.es("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.di,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.eM8=new C.es("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cJ,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.eLO=new C.es("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bh,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.eLJ=new C.es("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.c9,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.eM_=new C.es("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.aC,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.eLx=new C.es("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.bf,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.eLP=new C.es("honor","Honor Magic V5","\ud83d\udcf1",A.cw,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.eLY=new C.es("vivo","vivo X300 Pro","\ud83d\udcf1",A.cX,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.eM2=new C.es("ereader","Kindle Scribe","\ud83d\udcd6",A.bv,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.eL5=new C.es("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.cj,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.eLA=new C.es("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cJ,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.eLs=new C.es("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.be,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.eLg=new C.es("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.eK,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.eLp=new C.es("carscreen","Luxury car touchscreen","\ud83d\ude98",A.aC,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.eM5=new C.es("vision","Apple Vision Pro","\ud83e\udd7d",A.bk,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.U8=w([D.eLn,D.eLt,D.eM7,D.eLK,D.eLf,D.eLI,D.eMc,D.eLU,D.eLy,D.eM9,D.eL7,D.eLV,D.eLX,D.eLv,D.eLz,D.eLR,D.eLo,D.eLM,D.eLE,D.eLB,D.eLe,D.eLl,D.eLr,D.eMe,D.eM3,D.eLH,D.eLk,D.eMd,D.eMg,D.eLa,D.eMh,D.eLi,D.eLu,D.eLF,D.eLc,D.eM4,D.eLC,D.eLh,D.eLG,D.eM1,D.eLd,D.eLW,D.eLq,D.eLQ,D.eM6,D.eLb,D.eLL,D.eLT,D.eMb,D.eL9,D.eMf,D.eM0,D.eLN,D.eLZ,D.eLj,D.eMa,D.eL6,D.eLD,D.eLw,D.eLS,D.eL8,D.eLm,D.eM8,D.eLO,D.eLJ,D.eM_,D.eLx,D.eLP,D.eLY,D.eM2,D.eL5,D.eLA,D.eLs,D.eLg,D.eLp,D.eM5],B.as("N<es>"))
D.dx2=w([5,10,15,25,45,60],x.t)
D.dxs=w([-0.045,0.03,-0.015],x.n)
D.aFh=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.vY=w([0.05,0.2,0.35],x.n)
D.aFl=w([A.d1,A.iM,A.v6,A.GR],x.O)
D.bdd=new B.ac(0,A.H,A.i0,A.dP,6)
D.dAw=w([D.bdd],x.V)
D.eSO=new B.y(0,"AND")
D.eTI=new B.y(1,"Adder")
D.eUn=new B.y(2,"Blinker")
D.eUU=new B.y(3,"Memory")
D.dBj=w([D.eSO,D.eTI,D.eUn,D.eUU],x.L)
D.aFv=w([-104,0,104],x.n)
D.aFx=w([-14,3],x.n)
D.dCj=w([-8,0,8],x.n)
D.aFF=w([-92,0,92],x.n)
D.dCO=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.fuY=new C.vS("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.fv4=new C.vS("Medium tank","Balanced.",0.35,1)
D.fv3=new C.vS("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.Uo=w([D.fuY,D.fv4,D.fv3],x._)
D.oq=w([0.04,0.2,0.36],x.n)
D.aFS=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.fmw=new B.b1(D.b5i,"Fold",V.atu)
D.flq=new B.b1(D.afD,"Flip",A.DS)
D.bVi=new B.a_(62889,"MaterialIcons",!1)
D.fmU=new B.b1(D.b5j,"Rise",D.bVi)
D.atH=new B.a_(983870,"MaterialIcons",!1)
D.fiI=new B.b1(D.afE,"Assemble",D.atH)
D.fiV=new B.b1(D.b5k,"Spin",D.as8)
D.fiP=new B.b1(D.b5l,"Pop",A.kp)
D.dEA=w([D.fmw,D.flq,D.fmU,D.fiI,D.fiV,D.fiP],B.as("N<+(LL,o,a_)>"))
D.aFX=w([A.c5,A.eK,A.bw,A.aH,A.bk,A.c2],x.O)
D.dF2=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dGa=w([3,4.5,5,6,9],x.n)
D.bdT=new B.ac(0,A.H,A.bb,A.J,16)
D.dGE=w([D.bdT],x.V)
D.hcO=new B.D("\ud83e\uddcd",null,S.LY,null,null,null,null,null,null,null,null,null)
D.cgp=new B.Jk(5,null,null,A.by,A.c5,null,null,null,null)
D.fC6=new B.a4(150,null,D.cgp,null)
D.fUG=new B.F(!0,A.ac,null,null,null,null,14,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hg9=new B.D("Getting the body ready...",null,D.fUG,null,null,null,null,null,null,null,null,null)
D.hcR=new B.D("Real 3D anatomy, kept on your phone",null,Ag.yg,null,null,null,null,null,null,null,null,null)
D.dGH=w([D.hcO,A.az,D.fC6,A.af,D.hg9,A.at,D.hcR],x.p)
D.dHg=w(["solar","turbine","crank","pot"],x.s)
D.dHL=w([0,0.35,0.75,1],x.n)
D.dJe=w(["volts","level","ohms","on"],x.s)
D.bpF=new B.u(1,0.23137254901960785,0.43529411764705883,0.8470588235294118,A.q)
D.bAQ=new B.u(1,0.0392156862745098,0.10196078431372549,0.25098039215686274,A.q)
D.dJi=w([A.alp,D.bpF,A.m1,D.bAQ],x.O)
D.dKR=w([A.k_,A.Am,A.A6,A.rz,A.Eb,A.rB,A.Ak,A.mH,A.ix,A.ol,A.fQ,A.e8,A.hQ,A.ij,A.m7,A.kQ,A.rA,A.qd,A.lH,A.Is,A.vK,A.DR,A.DP,A.Rl,A.Ir,A.E1,A.QW,A.asT,H.atD,A.kp],x.x)
D.eB4={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.hRF=new C.z5("Switch",F.p8,A.bu,0,"Tap it to turn it ON or OFF.")
D.hRB=new C.z5("Blinker",A.mG,A.bw,0,"Turns itself ON and OFF. Tap to change the speed.")
D.hRC=new C.z5("AND",D.atH,A.cw,2,"ON only when BOTH inputs are ON.")
D.bWP=new B.a_(63671,"MaterialIcons",!1)
D.hRA=new C.z5("OR",D.bWP,A.bk,2,"ON when EITHER input is ON.")
D.hRD=new C.z5("XOR",A.a4D,A.c5,2,"ON when the inputs are DIFFERENT.")
D.hRx=new C.z5("NAND",A.tR,A.aH,2,"OFF only when BOTH inputs are ON.")
D.bVU=new B.a_(63176,"MaterialIcons",!1)
D.hRy=new C.z5("NOR",D.bVU,A.fL,2,"ON only when BOTH inputs are OFF.")
D.hRz=new C.z5("NOT",W.E3,A.cX,1,"Flips the signal: ON becomes OFF.")
D.hRE=new C.z5("Light",A5.lf,A.eK,1,"Glows when its input is ON.")
D.hRG=new C.z5("Buzzer",T.pa,A.c2,1,"Beeps while its input is ON.")
D.B0=new B.bl(D.eB4,[D.hRF,D.hRB,D.hRC,D.hRA,D.hRD,D.hRx,D.hRy,D.hRz,D.hRE,D.hRG],B.as("bl<o,z5>"))
D.eCU={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22,smartwatch:23}
D.Bs=new C.KJ(0,"tv")
D.fwB=new C.mv("Samsung Neo QLED 8K",D.Bs,F.z7,A.aH)
D.fwr=new C.mv("LG OLED evo G5",D.Bs,A.eC,A.hJ)
D.fwi=new C.mv("Sony Bravia 9",D.Bs,A.td,A.bv)
D.fwm=new C.mv("Apple TV 4K",D.Bs,A.dW,A.bP)
D.fwj=new C.mv("Bang and Olufsen Beovision",D.Bs,F.Ct,F.wU)
D.abZ=new C.KJ(1,"iphone")
D.aVy=new C.mv("iPhone 18 Pro Max",D.abZ,D.amZ,A.cj)
D.Bu=new C.KJ(3,"fold")
D.bB3=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.fww=new C.mv("iPhone Fold",D.Bu,D.bB3,A.b1)
D.Bt=new C.KJ(2,"android")
D.fwx=new C.mv("Samsung Galaxy S26 Ultra",D.Bt,F.NA,A.di)
D.bth=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.fwp=new C.mv("Samsung Galaxy Z Fold7",D.Bu,D.bth,A.cJ)
D.fwl=new C.mv("Google Pixel 10 Pro XL",D.Bt,A.d1,A.bh)
D.fwt=new C.mv("Xiaomi 16 Ultra",D.Bt,A.iv,A.c9)
D.fwo=new C.mv("Huawei Mate 80 Pro Max",D.Bt,A.ew,A.aC)
D.fwk=new C.mv("OPPO Find X9 Ultra",D.Bt,A.el,A.bf)
D.fwD=new C.mv("Honor Magic V5",D.Bu,A.dl,A.cw)
D.fwq=new C.mv("vivo X300 Pro",D.Bt,A.h_,A.cX)
D.aVz=new C.KJ(4,"tablet")
D.fwv=new C.mv("iPad Pro M5",D.aVz,A.d1,A.aH)
D.ac_=new C.KJ(5,"reader")
D.fwE=new C.mv("Kindle Scribe",D.ac_,A.cU,A.bv)
D.y3=new C.KJ(6,"computer")
D.fwu=new C.mv("MacBook Pro M5 Max",D.y3,A.d1,A.cj)
D.fwA=new C.mv("iMac 32 inch",D.y3,A.bP,A.cJ)
D.fws=new C.mv("Pro Display XDR 8K",D.y3,A.iv,A.be)
D.fwn=new C.mv("Sony Laser Projector",D.y3,A.cx,A.eK)
D.fwy=new C.mv("Luxury car touchscreen",D.y3,M.ni,A.aC)
D.fwC=new C.mv("Apple Vision Pro",D.y3,A.cz,A.bk)
D.fwz=new C.mv("Apple Watch Ultra",D.Bu,F.Ct,A.bw)
D.mN=new B.bl(D.eCU,[D.fwB,D.fwr,D.fwi,D.fwm,D.fwj,D.aVy,D.fww,D.fwx,D.fwp,D.fwl,D.fwt,D.fwo,D.fwk,D.fwD,D.fwq,D.fwv,D.fwE,D.fwu,D.fwA,D.fws,D.fwn,D.fwy,D.fwC,D.fwz],B.as("bl<o,mv>"))
D.d8c=w([A.z],x.M)
D.d8H=w([A.aw,A.aD],x.M)
D.djJ=w([A.aw,A.z,A.aD],x.M)
D.dlt=w([A.aw,A.lV,A.z,A.ls,A.aD],x.M)
D.dBf=w([A.aw,A.lV,A.a5,A.a9,A.ls,A.aD],x.M)
D.dQ1=new B.d2([1,D.d8c,2,D.d8H,3,D.djJ,4,A.aGy,5,D.dlt,6,D.dBf],B.as("d2<G,ah<dl>>"))
D.eDI={Calm:0,Box:1,Sleep:2}
D.cPx=w([4,2,6,0],x.n)
D.cPE=w([4,4,4,4],x.n)
D.cPF=w([4,7,8,0],x.n)
D.UR=new B.bl(D.eDI,[D.cPx,D.cPE,D.cPF],B.as("bl<o,ah<H>>"))
D.eBg={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.yG=new C.a2H(0,"source")
D.dkS=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hYp=new C.qP("Clock",A.mG,D.yG,A.bw,D.dkS)
D.hYl=new C.qP("Button",A.E6,D.yG,A.aQ,A.M)
D.dGn=w(["random","quick","slow"],x.s)
D.hYw=new C.qP("Dice",A.oe,D.yG,A.c5,D.dGn)
D.bWr=new B.a_(63484,"MaterialIcons",!1)
D.Gg=new C.a2H(1,"logic")
D.dLN=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hYs=new C.qP("Delay",D.bWr,D.Gg,A.cw,D.dLN)
D.dxa=w(["fast","mid","slow"],x.s)
D.hYx=new C.qP("Echo",A.at8,D.Gg,A.bk,D.dxa)
D.hYu=new C.qP("Every 2nd",W.E3,D.Gg,A.fL,A.M)
D.bW8=new B.a_(63309,"MaterialIcons",!1)
D.hYr=new C.qP("Every 3rd",D.bW8,D.Gg,A.aH,A.M)
D.cgK=w(["50%","25%","75%"],x.s)
D.hYz=new C.qP("Chance",A8.atJ,D.Gg,A.cX,D.cgK)
D.t1=new C.a2H(2,"out")
D.hYn=new C.qP("Light",A5.lf,D.t1,A.eK,A.M)
D.hYo=new C.qP("Burst",A.kp,D.t1,A.c5,A.M)
D.hYm=new C.qP("Ripple",A.Ar,D.t1,A.be,A.M)
D.hYv=new C.qP("Ball",A.atl,D.t1,A.cX,A.M)
D.hYt=new C.qP("Comet",A.ol,D.t1,A.bk,A.M)
D.bXY=new B.a_(983669,"MaterialIcons",!1)
D.hYy=new C.qP("Shake",D.bXY,D.t1,A.c2,A.M)
D.hYA=new C.qP("Pop",A.DO,D.t1,A.bf,A.M)
D.hYq=new C.qP("Wash",A.R_,D.t1,A.pP,A.M)
D.nv=new B.bl(D.eBg,[D.hYp,D.hYl,D.hYw,D.hYs,D.hYx,D.hYu,D.hYr,D.hYz,D.hYn,D.hYo,D.hYm,D.hYv,D.hYt,D.hYy,D.hYA,D.hYq],B.as("bl<o,qP>"))
D.eBH={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bDR=new C.h8(20,4,13,!1)
D.bEh=new C.h8(14,5,13.5,!1)
D.bE8=new C.h8(9,2.4,10,!1)
D.bEm=new C.h8(7,5,12.5,!1)
D.bEb=new C.h8(8,3.5,12,!1)
D.bDN=new C.h8(15,2,6,!1)
D.bEk=new C.h8(45,6,13.5,!0)
D.bE2=new C.h8(10,8,13.5,!1)
D.bDV=new C.h8(25,3,12,!0)
D.bE0=new C.h8(35,4,12,!0)
D.bE1=new C.h8(40,4.5,9.5,!0)
D.bE3=new C.h8(55,3,9,!0)
D.bDO=new C.h8(18,3,9,!1)
D.bEj=new C.h8(22,4,13.5,!1)
D.bEc=new C.h8(16,5,13.5,!1)
D.bDZ=new C.h8(30,4,9,!0)
D.bEv=new C.h8(5,3.5,13,!1)
D.bE6=new C.h8(25,3,13.5,!0)
D.bEf=new C.h8(14,2.5,9,!1)
D.bE5=new C.h8(6,6,13,!1)
D.bEn=new C.h8(30,1.2,5,!0)
D.bEu=new C.h8(35,3,4.5,!0)
D.bEq=new C.h8(20,4.5,7.5,!0)
D.bE4=new C.h8(55,5.5,13.5,!0)
D.bDM=new C.h8(45,5.5,13.5,!0)
D.bEg=new C.h8(40,5.5,13.5,!0)
D.bEt=new C.h8(60,6,13.5,!0)
D.anu=new C.h8(28,4,7,!0)
D.HI=new C.h8(25,4,7,!0)
D.bDY=new C.h8(30,4,7,!0)
D.bDT=new C.h8(22,4,7,!0)
D.bDU=new C.h8(24,4,7,!0)
D.bE7=new C.h8(60,3,5.5,!0)
D.bDP=new C.h8(18,9,14,!0)
D.bDW=new C.h8(25,9,14,!0)
D.anv=new C.h8(30,8,14,!0)
D.bDS=new C.h8(20,8,14,!0)
D.bE_=new C.h8(30,9,14,!0)
D.bEo=new C.h8(22,5,9.5,!0)
D.bDQ=new C.h8(30,2.5,10.5,!0)
D.bEd=new C.h8(50,5.5,13.5,!0)
D.bEs=new C.h8(12,2,9.5,!1)
D.bEa=new C.h8(16,1.3,9.5,!0)
D.bEl=new C.h8(40,2.5,7,!0)
D.bEr=new C.h8(60,1.2,4.8,!0)
D.bEp=new C.h8(18,5,13.5,!0)
D.bEi=new C.h8(8,2,9.5,!1)
D.bE9=new C.h8(12,2.5,8,!1)
D.bDX=new C.h8(20,3.5,13.5,!0)
D.bEe=new C.h8(3.5,3,13,!1)
D.B1=new B.bl(D.eBH,[D.bDR,D.bEh,D.bE8,D.bEm,D.bEb,D.bDN,D.bEk,D.bE2,D.bDV,D.bE0,D.bE1,D.bE3,D.bDO,D.bEj,D.bEc,D.bDZ,D.bEv,D.bE6,D.bEf,D.bE5,D.bEn,D.bEu,D.bEq,D.bE4,D.bDM,D.bEg,D.bEt,D.anu,D.HI,D.bDY,D.HI,D.bDT,D.HI,D.bDU,D.anu,D.HI,D.bE7,D.bDP,D.bDW,D.anv,D.bDS,D.bE_,D.bEo,D.bDQ,D.bEd,D.bEs,D.bEa,D.bEl,D.bEr,D.HI,D.anv,D.bEp,D.bEi,D.bE9,D.bDX,D.bEe],B.as("bl<o,h8>"))
D.eBd={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.fib=new B.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eX5=new B.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eX0=new B.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.f95=new B.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.fa2=new B.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.f91=new B.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eV2=new B.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.f6P=new B.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.fik=new B.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.fap=new B.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.f_E=new B.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eUH=new B.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eZD=new B.y("Movement","They pull your legs together and help you balance.")
D.f0F=new B.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eXe=new B.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.ffw=new B.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.fgK=new B.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.f6z=new B.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.fgs=new B.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.f51=new B.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.fax=new B.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eUO=new B.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.f12=new B.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.fab=new B.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.f5p=new B.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.fgB=new B.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.f8u=new B.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eV0=new B.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.fb9=new B.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.ff7=new B.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.fd4=new B.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eT0=new B.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.f8b=new B.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.f8g=new B.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.f1O=new B.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eXw=new B.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.f0r=new B.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.f72=new B.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.fdY=new B.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.fig=new B.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.fau=new B.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.eSG=new B.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.f7e=new B.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.eTA=new B.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.fed=new B.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.ffs=new B.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.f7H=new B.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.fet=new B.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eUQ=new B.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.fg6=new B.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eYY=new B.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.fdA=new B.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.f1s=new B.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.f5j=new B.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.faQ=new B.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.fgg=new B.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.fg8=new B.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.fgc=new B.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.f5S=new B.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.fbO=new B.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.fd1=new B.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.ffS=new B.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.f7G=new B.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.f3y=new B.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.f2g=new B.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.f85=new B.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.faJ=new B.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.f47=new B.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.f4P=new B.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eZm=new B.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.ffo=new B.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.f_d=new B.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.eTx=new B.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.f1N=new B.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.eTs=new B.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eY1=new B.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.f1S=new B.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.f_m=new B.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.fb5=new B.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.f0I=new B.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.fhX=new B.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.f2q=new B.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.f5K=new B.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.f8D=new B.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.f_w=new B.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.f_f=new B.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dRb=new B.bl(D.eBd,[D.fib,D.eX5,D.eX0,D.f95,D.fa2,D.f91,D.eV2,D.f6P,D.fik,D.fap,D.f_E,D.eUH,D.eZD,D.f0F,D.eXe,D.ffw,D.fgK,D.f6z,D.fgs,D.f51,D.fax,D.eUO,D.f12,D.fab,D.f5p,D.fgB,D.f8u,D.eV0,D.fb9,D.ff7,D.fd4,D.eT0,D.f8b,D.f8g,D.f1O,D.eXw,D.f0r,D.f72,D.fdY,D.fig,D.fau,D.eSG,D.f7e,D.eTA,D.fed,D.ffs,D.f7H,D.fet,D.eUQ,D.fg6,D.eYY,D.fdA,D.f1s,D.f5j,D.faQ,D.fgg,D.fg8,D.fgc,D.f5S,D.fbO,D.fd1,D.ffS,D.f7G,D.f3y,D.f2g,D.f85,D.faJ,D.f47,D.f4P,D.eZm,D.ffo,D.f_d,D.eTx,D.f1N,D.eTs,D.eY1,D.f1S,D.f_m,D.fb5,D.f0I,D.fhX,D.f2q,D.f5K,D.f8D,D.f_w,D.f_f],B.as("bl<o,+(o,o)>"))
D.e_4=new C.Wt(null)
D.e_h=new C.Wu(null)
D.e1l=new C.WA(null)
D.e6_=new C.Xa(null)
D.e63=new C.Xb(null)
D.e6C=new C.Xj(null)
D.eax=new C.XW(null)
D.ebu=new C.XX(null)
D.efH=new C.Y2(null)
D.evA=new C.Y3(null)
D.evD=new C.Y8(null)
D.exN=new C.Ys(null)
D.exO=new C.aaK(null)
D.ezR=new C.YB(null)
D.eDX=new B.m(0,118)
D.eDY=new B.m(0,13)
D.eDZ=new B.m(0,17)
D.eE1=new B.m(0,330)
D.eE8=new B.m(0,-17)
D.eE9=new B.m(0,-18)
D.eEa=new B.m(0,-19)
D.eEc=new B.m(0,-28)
D.eEe=new B.m(0,-31)
D.eEf=new B.m(0,-32)
D.eEl=new B.m(-9.5,-11)
D.eEo=new B.m(10,20)
D.eEr=new B.m(10,-13)
D.eEt=new B.m(10,-22)
D.eEu=new B.m(10,-4)
D.eEy=new B.m(11,0)
D.aaN=new B.m(11,8)
D.eEE=new B.m(12,2)
D.eEF=new B.m(14,0)
D.eEG=new B.m(14,12)
D.aP0=new B.m(14,8)
D.eEH=new B.m(14,-17)
D.aP2=new B.m(14,-3)
D.aP3=new B.m(14,-4)
D.eEK=new B.m(15,0)
D.eEL=new B.m(15,-12)
D.eEO=new B.m(16,-8)
D.eEP=new B.m(18,14)
D.aP9=new B.m(20,0)
D.eEX=new B.m(20,15)
D.eEY=new B.m(20,-3)
D.eEZ=new B.m(21,8)
D.eF_=new B.m(21,-36)
D.eF3=new B.m(22,10)
D.aPb=new B.m(22,8)
D.eF4=new B.m(22,-25)
D.eF5=new B.m(24,0)
D.eF6=new B.m(24,2)
D.eF9=new B.m(24,-18)
D.eFa=new B.m(24,-22)
D.eFe=new B.m(25,8)
D.eFf=new B.m(26,0)
D.eFj=new B.m(28,-30)
D.eFq=new B.m(30,18)
D.eFr=new B.m(30,2)
D.eFu=new B.m(31,19)
D.eFw=new B.m(32,0)
D.aPf=new B.m(34,0)
D.aPg=new B.m(34,-32)
D.KI=new B.m(36,0)
D.eFJ=new B.m(3,-1)
D.eFM=new B.m(40,3)
D.eG_=new B.m(4,11)
D.eG2=new B.m(4,-2)
D.eG6=new B.m(5,0)
D.eG7=new B.m(5,17)
D.eG8=new B.m(5,6)
D.eGd=new B.m(6,11)
D.eGf=new B.m(7,-19)
D.eGl=new B.m(8,7)
D.eGm=new B.m(8,-10)
D.eGn=new B.m(8,-14)
D.aPl=new B.m(9,0)
D.eGy=new B.m(-20.5,-17.6)
D.eGB=new B.m(-2.6,-1)
D.eGL=new B.m(2.6,1)
D.eGU=new B.m(-9,12.2)
D.eHx=new B.m(-10,12)
D.aPu=new B.m(-10,4)
D.eHB=new B.m(-11,0)
D.eHD=new B.m(-11,-34)
D.eHH=new B.m(-12,-5)
D.eHI=new B.m(-14,0)
D.eHJ=new B.m(-14,13)
D.eHK=new B.m(-14,-19)
D.eHM=new B.m(-14,-23)
D.eHN=new B.m(-15,6)
D.eHQ=new B.m(-16,14)
D.eHS=new B.m(-16,-8)
D.eHT=new B.m(-17,10)
D.eHU=new B.m(-17,-18)
D.eHV=new B.m(-17,-8)
D.eHX=new B.m(-18,20)
D.eHY=new B.m(-18,-9)
D.aPx=new B.m(-20,0)
D.eI_=new B.m(-20,16)
D.eI0=new B.m(-20,-9)
D.VN=new B.m(-22,8)
D.eI1=new B.m(-22,-10)
D.eI2=new B.m(-24,10)
D.eI3=new B.m(-24,11)
D.eI4=new B.m(-24,14)
D.eI5=new B.m(-24,-22)
D.eI7=new B.m(-25,-11)
D.eI8=new B.m(-26,0)
D.eI9=new B.m(-26,-18)
D.eIa=new B.m(-27,-24)
D.eIb=new B.m(-28,-36)
D.eIc=new B.m(-2,9)
D.eId=new B.m(-2,-10)
D.eIe=new B.m(-2,-20)
D.eIh=new B.m(-2,-9)
D.eIj=new B.m(-32,0)
D.aPz=new B.m(-34,0)
D.eIo=new B.m(-40,3)
D.eIq=new B.m(-4,11)
D.eIr=new B.m(-4,-17)
D.eIs=new B.m(-4,-2)
D.eIw=new B.m(-5,0)
D.eIx=new B.m(-5,20)
D.eIy=new B.m(-5,6)
D.eIz=new B.m(-6,6)
D.eIA=new B.m(-6,-42)
D.aPB=new B.m(-7,-19)
D.eIC=new B.m(-7,-24)
D.eID=new B.m(-8,-1)
D.eIG=new B.m(-8,-9)
D.aaX=new B.m(-9,0)
D.eIH=new B.m(-9,1)
D.eIJ=new B.m(-9,-23)
D.h3W=new B.D("Thinking\u2026",null,N.hI,null,null,null,null,null,null,null,null,null)
D.eJL=new B.C(A.jE,D.h3W,null)
D.hl4=new B.D("Start from a ready-made board",null,A.fK,null,null,null,null,null,null,null,null,null)
D.eK_=new B.C(A.vo,D.hl4,null)
D.bLW=new B.R(4,0,4,14)
D.fZW=new B.F(!0,A.aE,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h4X=new B.D("Games and little helpers for a spare minute.",null,D.fZW,null,null,null,null,null,null,null,null,null)
D.eKd=new B.C(D.bLW,D.h4X,null)
D.dxS=w([A.hX,A.bl],x.O)
D.eRs=new B.bU(A.z,0.5,A.w,null,0,D.dxS,null,null)
D.eRt=new B.bU(A.z,0.5,A.w,null,0,D.aGd,null,null)
D.dnx=w([A.c,A.bQ],x.O)
D.eRv=new B.bU(A.z,0.5,A.w,null,0,D.dnx,null,null)
D.dHx=w([A.bP,A.cz],x.O)
D.aUt=new B.bU(A.z,0.5,A.w,null,0,D.dHx,null,null)
D.cZR=w([A.c,A.bP],x.O)
D.eRA=new B.bU(A.n_,0.5,A.w,null,0,D.cZR,null,null)
D.bB7=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.dFn=w([A.fy,D.bB7],x.O)
D.eRF=new B.bU(A.n_,0.5,A.w,null,0,D.dFn,null,null)
D.cSL=w([A.d1,A.cx],x.O)
D.eRG=new B.bU(A.z,0.5,A.w,null,0,D.cSL,null,null)
D.d6X=w([A.hb,A.aQ,A.de],x.O)
D.eRJ=new B.bU(A.n_,0.5,A.w,null,0,D.d6X,null,null)
D.dyC=w([A.cz,M.ni],x.O)
D.eRK=new B.bU(A.n_,0.5,A.w,null,0,D.dyC,null,null)
D.eRP=new B.bU(A.z,0.5,A.w,null,0,D.aCn,null,null)
D.dIs=w([A.cz,A.iq],x.O)
D.eRX=new B.bU(A.z,0.5,A.w,null,0,D.dIs,null,null)
D.dgY=w([A.iM,A.bl],x.O)
D.eS_=new B.bU(A.n_,0.5,A.w,null,0,D.dgY,null,null)
D.aUy=new B.aQ(9,9)
D.eS5=new B.aQ(1.4,1.4)
D.eS7=new B.aQ(2.5,2.5)
D.ft2=new B.a5(10,-8,18,-2)
D.ft3=new B.a5(14,-14,20,14)
D.ft5=new B.a5(20,-2,30,2)
D.fta=new B.a5(4,-13,30,-3)
D.ftg=new B.a5(8,-7,12,7)
D.ftu=new B.a5(-12,12,12,19)
D.ftv=new B.a5(-12,14,12,22)
D.ftw=new B.a5(-12,-22,12,8)
D.ftx=new B.a5(-12,-25,12,19)
D.fty=new B.a5(-12,-26,12,-6)
D.ftz=new B.a5(-12,-4,12,14)
D.ftB=new B.a5(-14,20,14,24)
D.ftC=new B.a5(-14,6,14,10)
D.ftD=new B.a5(-14,-17,14,15)
D.ftE=new B.a5(-14,-26,14,18)
D.ftF=new B.a5(-14,-26,14,-14)
D.ftG=new B.a5(-14,-4,14,20)
D.ftI=new B.a5(-15,-29,15,25)
D.ftJ=new B.a5(-16,-16,16,16)
D.ftM=new B.a5(-16,-22,-9,18)
D.ftN=new B.a5(-16,-24,16,-10)
D.ftP=new B.a5(-16,-2,16,20)
D.ftR=new B.a5(-18,20,18,24)
D.ftS=new B.a5(-18,-18,18,20)
D.ftT=new B.a5(-20,12,20,22)
D.ftU=new B.a5(-20,-28,20,26)
D.ftV=new B.a5(-22,15,22,19)
D.aVe=new B.a5(-22,-26,22,24)
D.ftX=new B.a5(-24,-12,10,22)
D.ftY=new B.a5(-24,-14,22,8)
D.ftZ=new B.a5(-24,-6,24,20)
D.aVf=new B.a5(-24,-9,24,9)
D.fu_=new B.a5(-25,14,25,19)
D.fu0=new B.a5(-26,-14,14,8)
D.fu1=new B.a5(-26,-4,26,20)
D.fu2=new B.a5(-26,-6,4,6)
D.aVg=new B.a5(-28,-13,28,13)
D.fu3=new B.a5(-28,-16,28,16)
D.fu4=new B.a5(-28,-16,28,8)
D.fu5=new B.a5(-28,-22,28,22)
D.fu6=new B.a5(-29,-11,29,11)
D.fu7=new B.a5(-30,-12,30,14)
D.fu8=new B.a5(-30,-14,0,14)
D.fu9=new B.a5(-30,-18,30,20)
D.fua=new B.a5(-30,-28,30,14)
D.fub=new B.a5(-30,-2,30,18)
D.fuc=new B.a5(-30,-4,30,18)
D.fud=new B.a5(-32,-17,32,17)
D.fue=new B.a5(-32,-28,32,18)
D.fuf=new B.a5(-33,-21,33,17)
D.fug=new B.a5(-34,0,34,10)
D.fuh=new B.a5(-34,14,34,26)
D.abQ=new B.a5(-34,-18,34,18)
D.fui=new B.a5(-36,-24,36,20)
D.fuj=new B.a5(-38,-22,38,22)
D.ful=new B.a5(-3,12,3,22)
D.fum=new B.a5(-3,5,3,15)
D.fuq=new B.a5(-46,-34,46,28)
D.fus=new B.a5(-48,-3,48,3)
D.fuv=new B.a5(-6,18,24,24)
D.fuw=new B.a5(-6,5,6,12)
D.fux=new B.a5(-6,-22,6,-15)
D.fuB=new B.a5(-9,-16,9,22)
D.fuC=new B.a5(-4.5,-24,4.5,-21.2)
D.fuE=new B.a5(14,-9,17.5,9)
D.eD3={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aWn=new B.dd(D.eD3,5,x.Q)
D.eCw={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.fyk=new B.dd(D.eCw,10,x.Q)
D.fAG=new B.av(24,44)
D.fB3=new B.av(54,38)
D.fB9=new B.av(66,38)
D.biz=new B.fp(2,null,null,null,null,A.bk,null,null,null,null)
D.fCe=new B.a4(16,16,D.biz,null)
D.aXs=new B.i_(3,12,12,0.82,null)
D.fPf=new B.F(!0,A.wQ,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJy=new B.eF("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cV,null,null,null,null,null,null,D.fPf)
D.fUu=new B.F(!0,A.l4,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJE=new B.eF("AI",null,null,A.cV,null,null,null,null,null,null,D.fUu)
D.fJW=new B.F(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKt=new B.F(!0,A.br,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKR=new B.F(!0,A.cw,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLK=new B.F(!0,A.c,null,null,null,null,13.5,A.C,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMg=new B.F(!0,A.aR,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz5=new B.d4(A.i0,A.dP,6)
D.dqT=w([D.fz5],B.as("N<d4>"))
D.fNg=new B.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.dqT,null,null,null)
D.fNl=new B.F(!0,A.ek,null,null,null,null,12.5,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNq=new B.F(!0,A.bX,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fO3=new B.F(!0,A.bX,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOb=new B.F(!0,A.aE,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPb=new B.F(!0,A.bX,null,null,null,null,9.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPj=new B.F(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPQ=new B.F(!0,A.aE,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQl=new B.F(!0,A.aQ,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQo=new B.F(!0,A.c,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.aGB,null,null,null)
D.fQv=new B.F(!0,A.c,null,null,null,null,12.5,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRf=new B.F(!0,A.bF,null,null,null,null,10.5,A.u,null,0.5,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSp=new B.F(!0,A.vb,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fT3=new B.F(!0,A.bO,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTc=new B.F(!0,A.aE,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fU_=new B.F(!0,A.ms,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUa=new B.F(!0,A.cz,null,null,null,null,9.5,null,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZJ=new B.F(!0,A.c,null,null,null,null,9.5,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVl=new B.F(!0,A.j1,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVF=new B.F(!0,A.bX,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWc=new B.F(!0,A.bf,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXL=new B.F(!0,A.v,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYh=new B.F(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYz=new B.F(!0,A.aQ,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYX=new B.F(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZ_=new B.F(!0,A.aQ,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_c=new B.F(!0,A.vb,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_z=new B.F(!0,A.bf,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNt=new B.F(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_Y=new B.D("\u26a0\ufe0f ",null,D.fNt,null,null,null,null,null,null,null,null,null)
D.h0a=new B.D("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,Z.yk,null,null,null,null,null,null,null,null,null)
D.h1Q=new B.D("Pick one, then change it and see what happens.",null,Z.yk,null,null,null,null,null,null,null,null,null)
D.fOH=new B.F(!0,A.ac,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2S=new B.D("What do you want to invent? Type it below, or tap an idea.",null,D.fOH,null,null,null,null,null,null,null,null,null)
D.fSZ=new B.F(!0,A.c2,null,null,null,null,12.5,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3p=new B.D("Burnt out! Press Repair.",null,D.fSZ,null,null,null,null,null,null,null,null,null)
D.h4x=new B.D("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.h5a=new B.D("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.h6,null,null,null,null,null,null,null,null,null)
D.h5P=new B.D("Make it yours",null,A.jr,null,null,null,null,null,null,null,null,null)
D.h94=new B.D("5G",null,A4.aZ2,null,null,null,null,null,null,null,null,null)
D.ha5=new B.D("Pick how big the screen is on the board",null,N.hI,null,null,null,null,null,null,null,null,null)
D.fVX=new B.F(!0,A.bX,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hah=new B.D("WHAT HAPPENS",null,D.fVX,null,null,null,null,null,null,null,null,null)
D.hc2=new B.D("Check",null,null,null,null,null,null,null,null,null,null,null)
D.hcI=new B.D("Change the words and pictures on the three slabs.",null,Z.yk,null,null,null,null,null,null,null,null,null)
D.hcV=new B.D("All the parts and wires will be removed.",null,A.hH,null,null,null,null,null,null,null,null,null)
D.hdf=new B.D("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.hdQ=new B.D("Tap the crank on the board again and again to spin it faster.",null,N.hI,null,null,null,null,null,null,null,null,null)
D.hf4=new B.D("\ud83c\udfaf Challenges",null,A.dw,null,null,null,null,null,null,null,null,null)
D.hfB=new B.D("Remove this part",null,A2.aYD,null,null,null,null,null,null,null,null,null)
D.hfW=new B.D("Clear the board?",null,A.du,null,null,null,null,null,null,null,null,null)
D.fVm=new B.F(!0,A.bw,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hgd=new B.D("How the Lab works",null,D.fVm,null,null,null,null,null,null,null,null,null)
D.fLX=new B.F(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hgy=new B.D("Electronics Lab",null,D.fLX,null,null,null,null,A.a2,null,1,null,null)
D.hgC=new B.D("?",null,R.b_g,null,null,null,null,null,null,null,null,null)
D.hhZ=new B.D("Ready-made circuits",null,A.dw,null,null,null,null,null,null,null,null,null)
D.hiE=new B.D("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,N.hI,null,null,null,null,null,null,null,null,null)
D.fYE=new B.F(!0,A.aQ,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hme=new B.D("\u26a0 There is no air here, so a parachute will not work.",null,D.fYE,null,null,null,null,null,null,null,null,null)
D.hnp=new B.D("Download the scene (GIF)",null,A.cL,null,null,null,null,null,null,null,null,null)
D.hns=new B.D("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,A2.aYy,null,null,null,null,null,null,null,null,null)
D.hnZ=new B.D("NGMY",null,A.wq,null,null,null,null,null,null,null,null,null)
D.hoc=new B.D("You build a machine. A little light runs along the wires, and every part it touches does something.",null,Ai.LZ,null,null,null,null,null,null,null,null,null)
D.hoB=new B.D("Tap it to change its setting. Drag from the right dot to connect.",null,A.mg,null,null,null,null,null,null,null,null,null)
D.hpI=new B.D("TOOLBOX",null,Af.add,null,null,null,null,null,null,null,null,null)
D.hOb=new B.bb("electronics-part-card",x.W)
D.hOd=new B.bb("device-learn-more",x.W)
D.hOj=new B.bb("device-remote",x.W)
D.hOo=new B.bb("device-picture",x.W)
D.hP1=new B.bb("electronics-part-about",x.W)
D.hP8=new B.bb("body-loading",x.W)
D.hPe=new B.bb("device-fullscreen",x.W)
D.hPB=new B.bb("core-protocol-back",x.W)
D.hPG=new B.bb("core-protocol-title-frame",x.W)})();(function staticFields(){$.hJ2=null
$.hIZ=null
$.hJ_=null
$.hQ2=0
$.ij9=B.S(x.N,B.as("iU"))
$.ijJ=B.S(x.N,B.as("iU"))
$.aRF=B.S(x.N,B.as("iU"))
$.hLP=A.aB})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"iSy","bKa",()=>{var u="led"
return B.a([C.aBN("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fDw(),u),C.aBN("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fDx(),u),C.aBN("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fDy(),u),C.aBN("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fDF(),u),C.aBN("Not both","Make the light go OFF only when both switches are ON.",2,new C.fDG(),u),C.aBN("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.fDH(),"buzzer")],B.as("N<bfP>"))})
w($,"iT_","bKb",()=>B.a([C.S4("UNIVERSE","Earth, space and gravity",A.Ro,A.aH,new C.fDX()),C.S4("ELECTRONICS LAB","Batteries, wires, real circuits",Ao.vA,A.aH,new C.fDY()),C.S4("DISCOVERY LAB","Body Explorer: a real 3D human",D.bVl,A.bf,new C.fDZ()),C.S4("TOOLBOX","Converter, clock, games",H.asj,A.cX,new C.fE_()),C.S4("REACTION LAB","Wire parts together",A.Ea,A.bw,new C.fE0()),C.S4("SPARK PAINTER","Paint with light",A.Iq,A.c5,new C.fE1()),C.S4("ROCKET LANDER","Land softly on the pad",A.ol,A.aH,new C.fE2()),C.S4("TITLE ANIMATOR","Make a moving title",A.xD,A.bu,new C.fE3()),C.S4("CIRCUIT LAB","Connect logic, learn it",A.a50,A.cw,new C.fE4())],B.as("N<byk>")))
w($,"iUO","r_",()=>{var u,t,s=B.S(x.N,x.C)
for(u=0;u<76;++u){t=D.U8[u]
s.n(0,t.a,t)}return s})
v($,"inU","hZa",()=>B.aqq(0))
w($,"iSg","hZb",()=>{var u=B.ct7()
u.seC(0,A.c.j(0.06))
u.c=2.2
u.d=A.bG
return u})
w($,"iSz","akz",()=>B.a([C.GW("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fDI()),C.GW("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fDJ()),C.GW("Spin the motor","A battery and a motor in a loop will make it spin.",new C.fDK()),C.GW("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.fDL()),C.GW("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fDM()),C.GW("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fDz()),C.GW("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fDA()),C.GW("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fDB()),C.GW("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fDC()),C.GW("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fDD()),C.GW("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fDE())],B.as("N<bfQ>")))
w($,"iT1","hZF",()=>B.a([C.a3d("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aQ,A.c9,new C.fEc()),C.a3d("Focus Timer","Work, then rest","\u23f1\ufe0f",A.c2,A.bC,new C.fEd()),C.a3d("Breathe","Calm down in a minute","\ud83e\udee7",A.fL,A.cJ,new C.fEe()),C.a3d("Draw Pad","Sketch and share","\ud83c\udfa8",A.bE,A.b1,new C.fEf()),C.a3d("Memory Match","Find the pairs","\ud83c\udccf",A.aH,A.cj,new C.fEg()),C.a3d("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bu,A.bh,new C.fEh()),C.a3d("Tip & Split","Share the bill","\ud83e\uddfe",A.bf,A.b7,new C.fEi()),C.a3d("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bk,A.aA,new C.fEj())],B.as("N<bzE>")))})()};
(a=>{a["paLw59QpczqTWSPndlDj3p0LbBc="]=a.current})($__dart_deferred_initializers__);