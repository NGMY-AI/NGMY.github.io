((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,X,A5,Ab,A6,O,Ac,Ad,A7,Ae,A8,U,P,Y,Af,N,Ag,Ah,Ai,Aj,A9,Ak,Al,Am,An,Ao,Ap,Z,V,Aq,Q,Ar,A_,R,A0,As,E,I,G,L,At,Au,Av,A1,Aa,S,T,Aw,Ax,Ay,C={
bDT(d){return C.ihV(d)},
ihV(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bDT=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.rx(B.nA(""),d,A.id,null,null).de(0,AA.a1j),$async$bDT)
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
return B.i($async$bDT,v)},
iu1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.Te[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cY(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ag(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.fg(D.Te,new C.fSi())
if(w==null)w=A.d.gH(D.Te)
s=B.S(x.N,x.C)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.I)(r),++u){l=r[u].a
k=l[0]
l=$.qS().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.I)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gH(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.am6(w.a,w.b,m,w,s,!1)},
inA(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.O(D.TF,new C.fGO(),x.bd).aL(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
iCa(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cd(b2,"{")
v=A.a.pi(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.U.aP(0,A.a.aw(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aR(a5)
r=0
for(a6=x.j,a7=J.aQ(a6.a(J.t(u,"parts"))),a8=x.i;a7.C();){q=a7.gP(a7)
p=B.v(J.t(q,"kind"))
o=B.v(J.t(q,"id"))
if(!$.qS().am(0,p)||J.eC(s,o)||J.ad(t)>=8)continue
J.c6(s,o)
n=B.S(a5,a8)
for(a9=0;a9<4;++a9){m=D.dGa[a9]
l=J.t(q,m)
if(typeof l=="number")J.aK(n,m,l)}k=A.i.D(typeof J.t(q,"x")=="number"?B.dH(J.t(q,"x")):0.2+A.i.F(r,3)*0.3,0.16,0.84)
j=A.i.D(typeof J.t(q,"y")=="number"?B.dH(J.t(q,"y")):0.25+A.i.ao(r,3)*0.3,0.1,0.9)
J.c6(t,new B.e_([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aQ(a6.a(J.t(u,"wires")));a5.C();){h=a5.gP(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.v(J.t(g,0))
e=B.v(J.t(g,2))
d=A.o.D(A.i.M(B.dH(J.t(g,1))),0,1)
a0=A.o.D(A.i.M(B.dH(J.t(g,3))),0,1)
if(J.eC(s,f)&&J.eC(s,e)&&!J.z(f,e))J.c6(i,new B.b7([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.R.a(J.t(u,"steps"))
a0=J.aQ(a0==null?A.bQ:a0)
while(a0.C()){a2=a0.gP(a0)
J.c6(a1,B.v(a2))}a3=a1
a0=J.t(u,"title")
a0=B.v(a0==null?"My invention":a0)
a1=J.t(u,"explain")
a4=new C.n8(a0,B.v(a1==null?"":a1),t,i,A.Z)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.t(u,"honest")
a5=B.v(a5==null?"":a5)
return new C.am6(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
isv(d){var w,v,u=C.huX()
d.B(u)
for(w=0;w<60;++w)u.vS(0,0.03333333333333333)
v=u.a
return A.d.aR(v,new C.fOD(u))&&!A.d.cw(v,new C.fOE())},
isu(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.S(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.I)(l),++u){t=l[u];++v
k.n(0,t.a,$.qS().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.I)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.v(t.e)+" V")
if(p==="resistor")q.push(""+A.i.S(t.r)+" ohms")
if(A.d.q(D.dEe,p))q.push("level "+A.i.S(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.i.S(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aL(q,", ")+")"
s.push(B.v(p)+n+": "+o+", current "+A.i.a5(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.I)(w),++u){m=w[u]
l.push(B.v(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.v(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aL(s,"\n")+"\nWires: "+A.d.aL(l,"; ")},
igp(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.I)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aL(v,"\n")+"\n\n"}v=A.d.aL(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
iu0(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qS().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.TF[u]
if(A.d.aR(w,new C.fSf(s)))if(!B.cY(r,s.b.toLowerCase(),0))v=B.cY(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ag("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.X(w,new C.fSg(e),B.U(w).k("X<1>")).gar(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ag("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.i.a5(A.d.cD(w,0,new C.fSh())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ag("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gH(w)
w=$.qS().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
am6:function am6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fSi:function fSi(){},
fGO:function fGO(){},
fOD:function fOD(d){this.a=d},
fOE:function fOE(){},
fSf:function fSf(d){this.a=d},
fSg:function fSg(d){this.a=d},
fSh:function fSh(){},
Xl:function Xl(d,e){this.c=d
this.a=e},
bo9:function bo9(d,e,f,g,h){var _=this
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
enP:function enP(d){this.a=d},
enQ:function enQ(d,e,f){this.a=d
this.b=e
this.c=f},
enR:function enR(d){this.a=d},
eo1:function eo1(d){this.a=d},
eo2:function eo2(d,e){this.a=d
this.b=e},
enY:function enY(d){this.a=d},
enW:function enW(d,e){this.a=d
this.b=e},
enX:function enX(d,e,f){this.a=d
this.b=e
this.c=f},
enZ:function enZ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
enU:function enU(d){this.a=d},
enV:function enV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eo_:function eo_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
enT:function enT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eo0:function eo0(d,e){this.a=d
this.b=e},
enS:function enS(d,e){this.a=d
this.b=e},
eo5:function eo5(d){this.a=d},
eo4:function eo4(d){this.a=d},
eo6:function eo6(d){this.a=d},
eo3:function eo3(d){this.a=d},
eo7:function eo7(d,e){this.a=d
this.b=e},
eo8:function eo8(d,e){this.a=d
this.b=e},
eo9:function eo9(d,e){this.a=d
this.b=e},
eoa:function eoa(d,e){this.a=d
this.b=e},
bEe(d,e,f){var w=null
return B.x(B.a([B.c(d,w,w,w,w,w,w,D.fGB,w,w,w),B.c(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.N,0,A.p)},
hJc(d,e,f,g){var w=null,v=B.n(24),u=B.K(f.j(0.6),A.r,1)
return B.at(B.p(w,B.x(B.a([B.c(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.ak,B.c(e,w,w,w,w,w,w,A.BA,A.K,w,w),A.aB,B.bZ(A.fU,g,A.br,w,0,8)],x.p),A.l,w,A.e,A.N,0,A.p),A.f,w,w,new B.o(D.bkj,w,u,v,w,w,A.m),w,w,w,w,A.ae,w,w,w),w,w,w)},
Hc:function Hc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vG:function vG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XI:function XI(d){this.a=d},
aHj:function aHj(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.he$=h
_.mc$=i
_.fe$=j
_.hf$=k
_.bv$=l
_.ab$=m
_.c=_.a=null},
eDc:function eDc(){},
eDw:function eDw(d){this.a=d},
eDv:function eDv(d,e){this.a=d
this.b=e},
eDx:function eDx(){},
eDy:function eDy(){},
eDe:function eDe(d,e,f){this.a=d
this.b=e
this.c=f},
eDd:function eDd(d,e){this.a=d
this.b=e},
eD3:function eD3(d){this.a=d},
eD4:function eD4(d){this.a=d},
eD5:function eD5(d){this.a=d},
eD6:function eD6(d){this.a=d},
eD7:function eD7(d){this.a=d},
eD8:function eD8(d){this.a=d},
eD9:function eD9(d){this.a=d},
eDa:function eDa(d){this.a=d},
eDb:function eDb(d){this.a=d},
eD1:function eD1(d){this.a=d},
eD2:function eD2(d){this.a=d},
eD0:function eD0(d){this.a=d},
eDp:function eDp(d,e){this.a=d
this.b=e},
eDk:function eDk(d){this.a=d},
eDl:function eDl(d){this.a=d},
eDh:function eDh(d){this.a=d},
eDm:function eDm(d){this.a=d},
eDg:function eDg(d){this.a=d},
eDn:function eDn(d){this.a=d},
eDo:function eDo(d){this.a=d},
eDf:function eDf(d){this.a=d},
eDq:function eDq(d,e){this.a=d
this.b=e},
eDj:function eDj(d,e){this.a=d
this.b=e},
eDr:function eDr(d){this.a=d},
eDs:function eDs(d){this.a=d},
eDt:function eDt(d){this.a=d},
eDu:function eDu(d){this.a=d},
eDi:function eDi(d){this.a=d},
bl1:function bl1(d,e){this.b=d
this.a=e},
aPl:function aPl(){},
bBR:function bBR(){},
hE2(){var w=$.hE0
return w==null?$.hE0=$.oK().cZp("assets/data/three.min.js"):w},
hE1(){var w=$.hE_
return w==null?$.hE_=C.cRH():w},
cRH(){var w=0,v=B.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cRH=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.oK().iu(0,"assets/data/body3d.bin"),$async$cRH)
case 3:d=a1
$.hE3=J.ez(A.dM.gaS(d),d.byteOffset,d.byteLength)
t=B.TJ(d)
s=t.getUint32(4,!0)
r=B.a([],x.h)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.jX(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.drv[i]
g=B.b1((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a59(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b79))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.bdU(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cRH,v)},
c8Q(){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$c8Q=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.hc(B.a([C.hE1(),C.hE2()],x.D),x.K),$async$c8Q)
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
return B.i($async$c8Q,v)},
aVz:function aVz(d,e,f){this.a=d
this.b=e
this.c=f},
a59:function a59(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
bdU:function bdU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
W8:function W8(d){this.a=d},
aFL:function aFL(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.he$=s
_.mc$=t
_.fe$=u
_.hf$=v
_.bv$=w
_.ab$=a0
_.c=_.a=null},
dSZ:function dSZ(d){this.a=d},
dSY:function dSY(d,e){this.a=d
this.b=e},
dSz:function dSz(d){this.a=d},
dSA:function dSA(d,e){this.a=d
this.b=e},
dSB:function dSB(d){this.a=d},
dSC:function dSC(){},
dT_:function dT_(){},
dSD:function dSD(d,e){this.a=d
this.b=e},
dSE:function dSE(d){this.a=d},
dSF:function dSF(){},
dSG:function dSG(d){this.a=d},
dSI:function dSI(d,e){this.a=d
this.b=e},
dSH:function dSH(d){this.a=d},
dSw:function dSw(d,e,f){this.a=d
this.b=e
this.c=f},
dSx:function dSx(d){this.a=d},
dSy:function dSy(d){this.a=d},
dSP:function dSP(d){this.a=d},
dSQ:function dSQ(d,e){this.a=d
this.b=e},
dSR:function dSR(d,e){this.a=d
this.b=e},
dSS:function dSS(d){this.a=d},
dSO:function dSO(d,e){this.a=d
this.b=e},
dST:function dST(d,e){this.a=d
this.b=e},
dSN:function dSN(d,e){this.a=d
this.b=e},
dSU:function dSU(d){this.a=d},
dSM:function dSM(d){this.a=d},
dSV:function dSV(d){this.a=d},
dSL:function dSL(d){this.a=d},
dSW:function dSW(d){this.a=d},
dSK:function dSK(d){this.a=d},
dSX:function dSX(d){this.a=d},
dSJ:function dSJ(d){this.a=d},
aOq:function aOq(){},
aOr:function aOr(){},
c8R:function c8R(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c8S:function c8S(d,e){this.a=d
this.b=e},
c8T:function c8T(d){this.a=d},
aB5(d,e,f,g,h){return new C.beH(d,e,f,g,h)},
hkL(d,e,f,g,h,i){return $.idC.c_(0,d+"|"+B.v(e)+"|"+f.m()+"|"+B.v(g),new C.cYQ(d,e,f,i,g,h))},
yX:function yX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Dj:function Dj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nY:function nY(d,e,f){this.a=d
this.b=e
this.c=f},
beH:function beH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fzQ:function fzQ(){},
fzR:function fzR(){},
fzS:function fzS(){},
fzZ:function fzZ(){},
fA_:function fA_(){},
fA0:function fA0(){},
Wf:function Wf(d){this.a=d},
aFN:function aFN(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.he$=m
_.mc$=n
_.fe$=o
_.hf$=p
_.bv$=q
_.ab$=r
_.c=_.a=null},
dUF:function dUF(d){this.a=d},
dUj:function dUj(d,e){this.a=d
this.b=e},
dUm:function dUm(){},
dUG:function dUG(){},
dUh:function dUh(d,e){this.a=d
this.b=e},
dUi:function dUi(d,e){this.a=d
this.b=e},
dUn:function dUn(d,e,f){this.a=d
this.b=e
this.c=f},
dUc:function dUc(){},
dUd:function dUd(){},
dUe:function dUe(d){this.a=d},
dUf:function dUf(d,e){this.a=d
this.b=e},
dUg:function dUg(d,e,f){this.a=d
this.b=e
this.c=f},
dUo:function dUo(){},
dUp:function dUp(d,e){this.a=d
this.b=e},
dUq:function dUq(d){this.a=d},
dUl:function dUl(d,e){this.a=d
this.b=e},
dUk:function dUk(d){this.a=d},
dUb:function dUb(d,e,f){this.a=d
this.b=e
this.c=f},
dUz:function dUz(d){this.a=d},
dUy:function dUy(d){this.a=d},
dUA:function dUA(d){this.a=d},
dUx:function dUx(d){this.a=d},
dUv:function dUv(d){this.a=d},
dUw:function dUw(d){this.a=d},
dUu:function dUu(d){this.a=d},
dUr:function dUr(d){this.a=d},
dUt:function dUt(d){this.a=d},
dUB:function dUB(d,e){this.a=d
this.b=e},
dUC:function dUC(d,e){this.a=d
this.b=e},
dUD:function dUD(d){this.a=d},
dUs:function dUs(d){this.a=d},
dUE:function dUE(d,e){this.a=d
this.b=e},
beZ:function beZ(d,e){this.b=d
this.a=e},
cYQ:function cYQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aOv:function aOv(){},
bBB:function bBB(){},
i4b(){return new C.OC(null)},
RJ(d,e,f,g,h){return new C.bx8(d,e,f,g,h)},
bvs(d,e,f){return A.i.D((d-e)/(f-e),0,1)},
hli(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
iw1(){return B.iS("construction","")},
OC:function OC(d){this.a=d},
Lw:function Lw(d,e){this.a=d
this.b=e},
Bm:function Bm(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aG3:function aG3(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
e_P:function e_P(d,e){this.a=d
this.b=e},
e_O:function e_O(d){this.a=d},
e_R:function e_R(d,e){this.a=d
this.b=e},
e_Q:function e_Q(d){this.a=d},
bx8:function bx8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fAg:function fAg(){},
fAh:function fAh(){},
fAi:function fAi(){},
fAj:function fAj(){},
fAk:function fAk(){},
fAl:function fAl(){},
fAm:function fAm(){},
fAn:function fAn(){},
fAo:function fAo(){},
bvt:function bvt(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ffv:function ffv(d){this.a=d},
ffu:function ffu(d,e){this.a=d
this.b=e},
ffs:function ffs(d){this.a=d},
ffw:function ffw(d){this.a=d},
fft:function fft(d,e){this.a=d
this.b=e},
agU:function agU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
afL:function afL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
RC:function RC(d,e,f,g,h,i,j,k,l,m){var _=this
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
bww:function bww(d,e){this.b=d
this.a=e},
bw0:function bw0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdC:function bdC(d,e){this.b=d
this.a=e},
aKn:function aKn(d,e){this.c=d
this.a=e},
aKo:function aKo(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.ch=-1
_.dz$=e
_.bd$=f
_.c=_.a=null},
ffb:function ffb(d){this.a=d},
ffa:function ffa(d){this.a=d},
ff0:function ff0(d){this.a=d},
ff1:function ff1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ff2:function ff2(d){this.a=d},
ff_:function ff_(d,e){this.a=d
this.b=e},
ff3:function ff3(d){this.a=d},
ff9:function ff9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ff8:function ff8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ff6:function ff6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ff5:function ff5(d,e,f){this.a=d
this.b=e
this.c=f},
ff7:function ff7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ff4:function ff4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ffj:function ffj(d){this.a=d},
ffi:function ffi(d){this.a=d},
ffk:function ffk(d,e){this.a=d
this.b=e},
ffl:function ffl(d,e){this.a=d
this.b=e},
ffm:function ffm(d,e){this.a=d
this.b=e},
ffh:function ffh(d,e,f){this.a=d
this.b=e
this.c=f},
ffn:function ffn(d,e,f){this.a=d
this.b=e
this.c=f},
ffg:function ffg(d){this.a=d},
ffc:function ffc(d){this.a=d},
ffo:function ffo(d){this.a=d},
ffp:function ffp(d){this.a=d},
fff:function fff(d,e){this.a=d
this.b=e},
ffq:function ffq(d,e){this.a=d
this.b=e},
ffe:function ffe(d,e){this.a=d
this.b=e},
ffr:function ffr(d,e){this.a=d
this.b=e},
ffd:function ffd(d,e){this.a=d
this.b=e},
feY:function feY(){},
feZ:function feZ(){},
bv4:function bv4(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
buu:function buu(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bei:function bei(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
buw:function buw(d,e,f){this.b=d
this.c=e
this.a=f},
byC:function byC(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aQb:function aQb(){},
hKN(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a7(0,new B.r(w,0)),u=e.aI(0,new B.r(w,0)),t=1-f,s=3*t
return d.aO(0,t*t*t).a7(0,v.aO(0,s*t*f)).a7(0,u.aO(0,s*f*f)).a7(0,e.aO(0,f*f*f))},
bl0(d,e,f,g,h,i){return $.iea.c_(0,d+"|"+B.v(e)+"|"+f.m()+"|"+B.v(g),new C.duh(d,e,f,i,g,h))},
a2d:function a2d(d,e){this.a=d
this.b=e},
qJ:function qJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
rs:function rs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Dn:function Dn(d,e){this.a=d
this.b=e},
a0b:function a0b(d,e){this.a=d
this.b=e},
agI:function agI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2q:function a2q(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Dy:function Dy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adA:function adA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adS:function adS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
afO:function afO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bkZ:function bkZ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.c2$=_.bT$=0},
dul:function dul(d){this.a=d},
dum:function dum(d){this.a=d},
dui:function dui(d,e){this.a=d
this.b=e},
duj:function duj(d){this.a=d},
duk:function duk(d){this.a=d},
dun:function dun(d){this.a=d},
duo:function duo(d){this.a=d},
dup:function dup(d){this.a=d},
duq:function duq(d){this.a=d},
dur:function dur(d){this.a=d},
dus:function dus(d){this.a=d},
dut:function dut(d){this.a=d},
duu:function duu(d){this.a=d},
duv:function duv(d){this.a=d},
GY:function GY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XH:function XH(d){this.a=d},
aHi:function aHi(d,e,f,g,h,i,j){var _=this
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
_.bv$=i
_.ab$=j
_.c=_.a=null},
eCx:function eCx(d){this.a=d},
eCm:function eCm(d){this.a=d},
eCo:function eCo(){},
eCp:function eCp(){},
eCs:function eCs(){},
eCt:function eCt(d,e,f){this.a=d
this.b=e
this.c=f},
eCu:function eCu(d){this.a=d},
eCv:function eCv(d){this.a=d},
eCq:function eCq(){},
eCr:function eCr(d){this.a=d},
eCX:function eCX(d){this.a=d},
eCw:function eCw(){},
eCi:function eCi(d){this.a=d},
eCz:function eCz(d){this.a=d},
eCy:function eCy(d){this.a=d},
eCB:function eCB(){},
eCA:function eCA(d,e){this.a=d
this.b=e},
eCl:function eCl(){},
eCj:function eCj(d){this.a=d},
eCk:function eCk(d){this.a=d},
eCV:function eCV(d){this.a=d},
eCU:function eCU(d){this.a=d},
eCW:function eCW(d){this.a=d},
eCL:function eCL(d,e){this.a=d
this.b=e},
eCT:function eCT(d){this.a=d},
eCR:function eCR(d){this.a=d},
eCS:function eCS(d){this.a=d},
eCQ:function eCQ(d){this.a=d},
eCP:function eCP(d){this.a=d},
eCM:function eCM(d){this.a=d},
eCN:function eCN(d){this.a=d},
eCO:function eCO(d){this.a=d},
eCn:function eCn(){},
eCH:function eCH(d){this.a=d},
eCI:function eCI(d){this.a=d},
eCG:function eCG(d){this.a=d},
eCJ:function eCJ(d){this.a=d},
eCF:function eCF(d){this.a=d},
eCK:function eCK(d){this.a=d},
eCE:function eCE(d){this.a=d},
eCD:function eCD(d){this.a=d},
eCC:function eCC(d,e){this.a=d
this.b=e},
bl_:function bl_(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
duh:function duh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aPj:function aPj(){},
hQC(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aI(0,e).gcL()*0.1
return new B.r((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
huX(){var w=B.a([],x.bz),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a6h(w,v,u,A.cV,B.S(x.N,x.y))},
hYM(d,e,f){var w=d.c,v=e===0?-1:1
return new B.r(w*f.a+v*C.huY(d),d.d*f.b)},
huY(d){return 42+(D.mF.am(0,d.b)?(d.ch-1)*38:0)},
iic(d){var w,v,u,t,s
if(d.A(0,$.hGN))return $.hTJ()
w=B.a([],x.n)
for(v=d.a,u=d.b,t=12;t<v;t+=24)for(s=12;s<u;s+=24){w.push(t)
w.push(s)}$.hGN=d
return $.iid=new Float32Array(B.cc(w))},
er:function er(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
u8:function u8(d,e,f,g){var _=this
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
ace:function ace(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
adm:function adm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a6h:function a6h(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bS6:function bS6(){},
bSh:function bSh(d){this.a=d},
bSc:function bSc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSi:function bSi(d){this.a=d},
bSj:function bSj(d){this.a=d},
bSl:function bSl(d){this.a=d},
bSm:function bSm(d){this.a=d},
bSk:function bSk(d){this.a=d},
bSn:function bSn(d,e,f){this.a=d
this.b=e
this.c=f},
bSo:function bSo(d){this.a=d},
bS8:function bS8(d){this.a=d},
bS9:function bS9(d){this.a=d},
bS7:function bS7(d){this.a=d},
bSa:function bSa(d,e,f){this.a=d
this.b=e
this.c=f},
bSb:function bSb(d){this.a=d},
bS5:function bS5(d){this.a=d},
bSp:function bSp(d,e){this.a=d
this.b=e},
bSd:function bSd(d,e){this.a=d
this.b=e},
bSg:function bSg(d){this.a=d},
bSf:function bSf(d){this.a=d},
bSe:function bSe(d){this.a=d},
akU:function akU(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bMs:function bMs(){},
bMt:function bMt(){},
bMr:function bMr(){},
n8:function n8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cwn:function cwn(d){this.a=d},
iC5(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new C.h48(),c9=new C.h4a(),d0=new C.h4b(),d1=new C.h49(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aq(w,d1.$3(new B.a4(w.a,w.b,w.c,w.d),A.cl,A.bP))
d3.ah(D.eAN,D.exM,c9.$2(A.e6,1.4))
d3.ah(D.exr,D.exp,c9.$2(A.bA,2.4))
d3.ah(D.exs,V.aNQ,c9.$2(A.bA,2.4))
if(c7){d2=c8.$1(A.fC.j(0.5))
d2.y=A.HY
d3.O(D.ex7,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.i.F(d2+v/3,1)
d6.$5(d3,"\u2744",new B.r(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aq(d0.$4(-22,-26,44,50),d1.$3(D.aU1,A.aS,A.cD))
d3.O(A.cP,16,c8.$1(A.bA))
d3.O(A.cP,13,c8.$1(c7?A.aH.j(0.85):A.a_))
if(c7){d2=d3.c
J.bs(d2.save())
d2.translate(0,4)
d3.jr(0,d4.y*0.6)
for(v=0;v<3;++v){t=v*2.09
d3.ah(A.J,new B.r(Math.cos(t)*11,Math.sin(t)*11),c9.$2(A.ab,3))}d2.restore()
for(d2=d5*0.8,v=0;v<4;++v){u=A.i.F(d2+v*0.25,1)
d3.O(new B.r(Math.sin(v*2+d5)*9,4-u*12),1.6+u*2,c8.$1(A.c.j(0.8*(1-u))))}}d3.O(D.eAF,2.4,c8.$1(c7?A.bj:A.an))
d3.O(D.aOq,2.4,c8.$1(A.an))
return!0
case"blender":d3.aq(d0.$5(-14,14,28,12,4),c8.$1(A.cU))
d2=$.T().r
t=x.v
s=new B.aH(d2,A.aj,c6,c6,B.a([],t))
s.E(new B.aZ(-16,-26))
s.E(new B.aq(16,-26))
s.E(new B.aq(12,14))
s.E(new B.aq(-12,14))
s.E(new B.bA())
d3.af(s,c8.$1(A.fC.j(0.35)))
if(c7){d2=new B.aH(d2,A.aj,c6,c6,B.a([],t))
d2.E(new B.aZ(-14,-10))
d2.E(new B.aq(14,-10))
d2.E(new B.aq(12,14))
d2.E(new B.aq(-12,14))
d2.E(new B.bA())
d3.af(d2,c8.$1(A.aC.j(0.7)))}d3.af(s,c9.$2(A.ab,1.6))
d2=d3.c
J.bs(d2.save())
d2.translate(0,10)
d3.jr(0,d4.y)
d3.ah(D.aae,D.aOc,c9.$2(A.bO,3))
d2.restore()
if(c7)for(d2=d5*9,t=d5*1.6,v=0;v<3;++v)d3.O(new B.r(Math.sin(d2+v*2)*9,-10-A.i.F(t+v*0.33,1)*12),2.4,c8.$1(A.f1))
return!0
case"drone":d3.aq(d0.$5(-10,-4,20,10,4),c8.$1(A.aM))
d3.O(A.hD,3,c8.$1(c7?A.bj:A.an))
r=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.c,t=-4+r,q=-6+r,p=0;p<2;++p){o=F.TS[p]
d3.ah(new B.r(o*0.4,1),new B.r(o,t),c9.$2(A.bA,3))
J.bs(d2.save())
d2.translate(o,q)
d3.ah(D.eAw,D.exw,c9.$2(A.c.j(c7?0.35:0.9),3))
if(c7)d3.c1(B.bY(A.J,6,24+Math.sin(d4.y*3)*4),c8.$1(A.c.j(0.25)))
d2.restore()}return!0
case"drill":w=new B.aH($.T().r,A.aj,c6,c6,B.a([],x.v))
w.E(new B.aZ(-24,-12))
w.E(new B.aq(10,-12))
w.E(new B.aq(10,2))
w.E(new B.aq(-2,2))
w.E(new B.aq(-6,22))
w.E(new B.aq(-16,22))
w.E(new B.aq(-14,2))
w.E(new B.aq(-24,2))
w.E(new B.bA())
d3.af(w,d1.$3(D.fmB,A.aQ,A.de))
d3.aE(D.flJ,c8.$1(A.d0))
d2=d3.c
J.bs(d2.save())
d2.translate(18,-5)
d3.jr(0,d4.y*2)
d3.ah(A.J,D.exD,c9.$2(A.bO,2.4))
d3.ah(A.aaa,D.exC,c9.$2(A.i_,1))
d2.restore()
if(c7)for(d2=d5*3,t=d5*20,v=0;v<4;++v){u=A.i.F(d2+v*0.25,1)
d3.O(new B.r(34+u*6,-5+Math.sin(v*3+t)*6*u),1.4,c8.$1(A.eF.j(1-u)))}return!0
case"torch":if(c7){v=A.i.D(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new B.aH($.T().r,A.aj,c6,c6,B.a([],x.v))
d2.E(new B.aZ(16,-6))
d2.E(new B.aq(52,-26))
d2.E(new B.aq(52,18))
d2.E(new B.aq(16,4))
d2.E(new B.bA())
d3.af(d2,c8.$1(A.bM.j(0.35*v)))}d3.aq(d0.$5(-26,-6,30,12,3),d1.$3(D.fmH,A.bk,A.cx))
n=new B.aH($.T().r,A.aj,c6,c6,B.a([],x.v))
n.E(new B.aZ(4,-6))
n.E(new B.aq(18,-12))
n.E(new B.aq(18,12))
n.E(new B.aq(4,6))
n.E(new B.bA())
d3.af(n,c8.$1(A.cU))
d3.O(D.exI,7,c8.$1(c7?A.c:A.d0))
return!0
case"neon":d3.aq(d0.$5(-30,-14,60,28,6),c8.$1(M.n8))
if(c7)m=d4.ax>0.5||A.o.F(A.i.bc(d5*17),3)!==0
else m=!1
l=m?A.c5:D.bv2
if(m){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.c5.j(0.35))
t.y=A.nh
d3.aq(d2,t)}d3.aq(d0.$5(-27,-11,54,22,5),c9.$2(l,2.2))
d6.$5(d3,"OPEN",D.eAT,l,17)
return!0
case"microwave":d3.aq(d0.$4(-30,-18,60,38),d1.$3(D.fmO,A.bO,A.bk))
d2=d0.$5(-26,-14,38,30,3)
d3.aq(d2,c8.$1(c7?A.bM.j(0.75):A.aw))
if(c7){d2=d3.c
J.bs(d2.save())
d2.translate(-7,8)
d3.jr(0,d4.y*0.5)
d3.c1(B.bY(A.J,7,22),c8.$1(A.de))
d2.restore()}d3.aq(d0.$5(15,-14,12,12,2),c8.$1(M.n8))
if(c7)d6.$5(d3,"0:"+A.a.b_(A.o.v(59-A.o.F(A.i.bc(d5),60)),2,"0"),D.exJ,A.bf,6.5)
d3.O(D.exX,4,c8.$1(A.d0))
return!0
case"doorbell":d3.aq(d0.$5(-16,-26,32,52,8),c8.$1(A.bn))
d3.O(A.Kr,10,c8.$1(c7?A.bu:A.bA))
d2=d3.c
J.bs(d2.save())
d2.translate(0,-8)
d3.jr(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.eBB,A.c,16)
d2.restore()
d3.O(A.kP,6,c8.$1(A.dg))
d3.O(A.kP,6,c9.$2(A.c,1.6))
if(c7)for(d2=d5*14,v=1;v<=2;++v)d3.cQ(B.bX(A.Kr,14+v*6+A.i.F(d2,6)),-0.9,1.8,!1,c9.$2(A.bu.j(0.9-v*0.3),1.8))
return!0
case"camera":d3.ah(D.eAS,D.eBu,c9.$2(A.bA,4))
d2=d3.c
J.bs(d2.save())
d3.jr(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aq(d0.$5(-24,-14,46,22,5),d1.$3(D.fmC,A.bO,A.an))
d3.O(D.aNU,8,c8.$1(A.aw))
d3.O(D.aNU,4.5,c8.$1(c7?A.aH:A.cx))
d3.O(D.eAQ,2.2,c8.$1(c7&&A.o.F(A.i.bc(d5*1.6),2)===0?A.aC:A.kH))
d2.restore()
if(c7)d6.$5(d3,"REC",D.eB_,A.aC,9)
return!0
case"console":d3.aq(d0.$5(-28,-22,56,44,8),d1.$3(D.fmK,A.iq,A.fy))
d3.aq(d0.$5(-20,-17,40,22,3),c8.$1(A.dX))
if(c7){d2=d5*2.3
d3.O(new B.r(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aE(new B.a4(-18,t,-15.6,t+8),c8.$1(A.bf))
d2=-9+Math.sin(d2-0.4)*6
d3.aE(new B.a4(15.6,d2,18,d2+8),c8.$1(A.c5))}d3.O(D.eAL,4,c8.$1(A.b7))
d3.O(D.exE,2.4,c8.$1(A.aC))
d3.O(D.exV,2.4,c8.$1(A.bj))
return!0
case"heartmon":d3.aq(d0.$5(-30,-22,60,44,6),c8.$1(A.aw))
d3.aq(d0.$5(-26,-18,52,28,3),c8.$1(A.dX))
if(c7){d2=$.T()
t=B.a([],x.v)
k=new B.aH(d2.r,A.aj,c6,c6,t)
for(d2=d5*0.5,o=-25;o<=25;++o){u=A.i.F((o+25)/50-d2,1)
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
d6.$5(d3,"72",D.exF,A.hH,11)
d2=d5*9
d6.$5(d3,"\u2665",D.eB4,A.hH.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.O(D.eAV,3,c8.$1(c7?A.bj:A.bA))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aq(d2,c8.$1(A.cF.j(c7?0.5:0.3)))
d3.aq(d0.$5(-26,-20,52,40,4),c9.$2(A.ab,1.6))
d3.aE(D.fmE,c8.$1(F.wJ))
if(c7){d2=d5*1.1
t=Math.sin(d2)
q=d3.c
J.bs(q.save())
q.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.nK(0,-1,1)
d3.c1(B.bY(A.J,8,14),c8.$1(A.cW))
d2=new B.aH($.T().r,A.aj,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-6,0))
d2.E(new B.aq(-12,-4))
d2.E(new B.aq(-12,4))
d2.E(new B.bA())
d3.af(d2,c8.$1(A.ca))
d3.O(D.eyH,1.2,c8.$1(A.v))
q.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=A.i.F(d2+v*0.2,1)
d3.O(new B.r(-18+Math.sin(u*8+v)*2,13-u*30),1.4+A.o.F(v,2),c9.$2(A.ab,1))}}return!0
case"lighthouse":d2=$.T().r
t=x.v
g=new B.aH(d2,A.aj,c6,c6,B.a([],t))
g.E(new B.aZ(-9,22))
g.E(new B.aq(-5,-16))
g.E(new B.aq(5,-16))
g.E(new B.aq(9,22))
g.E(new B.bA())
d3.af(g,d1.$3(D.fnf,A.c,A.bE))
d3.aE(D.fnb,c8.$1(c7?A.eF:A.bA))
q=new B.aH(d2,A.aj,c6,c6,B.a([],t))
q.E(new B.aZ(-7,-22))
q.E(new B.aq(0,-29))
q.E(new B.aq(7,-22))
q.E(new B.bA())
d3.af(q,c8.$1(A.ey))
if(c7){f=Math.sin(d4.y*0.3)
d2=new B.aH(d2,A.aj,c6,c6,B.a([],t))
d2.E(new B.aZ(0,-19))
t=f*34
d2.E(new B.aq(t,-26))
d2.E(new B.aq(t,-12))
d2.E(new B.bA())
d3.af(d2,c8.$1(A.eF.j(0.45)))
d2=c8.$1(A.eF.j(0.35))
d2.y=A.HY
d3.O(D.ex8,14,d2)}return!0
case"discoball":d3.ah(D.exa,W.aNL,c9.$2(A.d0,1.4))
d3.O(A.J,16,d1.$3(D.fmn,A.aS,A.an))
for(v=0;v<8;++v){d2=-12+v*3.4
d3.ah(new B.r(-16,d2),new B.r(16,d2),c9.$2(A.dJ,0.7))}for(v=0;v<5;++v){f=d4.y*0.5+v*1.26
d3.ah(new B.r(Math.cos(f)*16*0.3,Math.sin(f)*16*0.3),new B.r(Math.cos(f)*16,0),c9.$2(A.dJ,0.7))}if(c7)for(d2=d5*2,t=d5*9,v=0;v<10;++v){f=d2+v*0.63
e=22+A.o.F(v,3)*6
d3.O(new B.r(Math.cos(f)*e,Math.sin(f)*e*0.8),1.8,c8.$1(D.dsz[A.o.F(v,4)].j(0.5+0.5*Math.sin(t+v))))}return!0
case"robot":d3.aq(d0.$5(-14,-4,28,24,5),d1.$3(D.fmk,A.cD,A.an))
d3.aq(d0.$5(-12,-26,24,20,5),d1.$3(D.fmc,A.bn,A.bP))
d3.ah(H.aNN,D.exc,c9.$2(A.bA,1.6))
d3.O(D.exd,2.2,c8.$1(c7?A.aC:A.bA))
d=c7&&A.i.F(d5*0.8,1)>0.08
for(p=0;p<2;++p){o=F.a7C[p]
if(c7)d2=d?A.bd:A.fv
else d2=A.cx
d3.O(new B.r(o,-17),3.2,c8.$1(d2))}d2=d3.c
J.bs(d2.save())
d2.translate(14,0)
d3.jr(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.ah(A.J,D.aa5,c9.$2(A.bP,4))
d2.restore()
d3.ah(D.eAD,D.eAY,c9.$2(A.bP,4))
d3.aE(D.fna,c8.$1(c7?A.bd.j(0.7):A.aM))
return!0
case"toaster":a0=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a0*14,p=0;p<2;++p){t=d0.$5(D.aEw[p]+1,d2,10,14,2)
q=B.ap(A.bM,A.de,a0)
q.toString
d3.aq(t,c8.$1(q))}d3.aq(d0.$5(-24,-6,48,26,8),d1.$3(D.fmD,A.bO,A.bk))
for(p=0;p<2;++p){o=D.aEw[p]
d2=d0.$5(o,-5,12,5,2)
d3.aq(d2,c8.$1(c7?A.fK:A.aw))
if(c7){d2=d0.$5(o,-5,12,5,2)
t=c8.$1(A.cW.j(0.5))
t.y=N.oT
d3.aq(d2,t)}}d3.ah(D.ey4,D.eyp,c9.$2(A.aw,3))
return!0
case"ledstrip":d3.aq(d0.$5(-34,-4,68,10,4),c8.$1(A.cx))
for(d2=d5*90,v=0;v<9;++v){a1=A.i.F(d2+v*40,360)
l=c7?new AD.pA(1,a1,0.8,1).jd():A.cU
if(c7){t=c8.$1(l.j(0.45))
t.y=N.oT
d3.O(new B.r(-30+v*7.5,1),7,t)}d3.O(new B.r(-30+v*7.5,1),2.6,c8.$1(l))}d3.aq(d0.$5(-40,-2,6,6,1),c8.$1(A.d0))
return!0
case"pump":d3.aq(d0.$5(-16,-2,32,22,6),d1.$3(D.fmt,A.cF,A.GN))
d3.O(D.eB7,8,c8.$1(A.tc))
d2=d3.c
J.bs(d2.save())
d2.translate(-2,9)
d3.jr(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
d3.ah(A.J,new B.r(Math.cos(t)*7,Math.sin(t)*7),c9.$2(A.fC,2.4))}d2.restore()
d2=new B.aH($.T().r,A.aj,c6,c6,B.a([],x.v))
d2.E(new B.aZ(16,6))
d2.E(new B.aq(26,6))
d2.E(new B.aq(26,-20))
d2.E(new B.aq(10,-20))
d3.af(d2,c9.$2(A.bP,4))
if(c7){for(d2=d5*0.9,v=0;v<5;++v)d3.O(new B.r(26,6-A.i.F(d2+v*0.2,1)*26),2.2,c8.$1(A.hk))
d3.O(D.ezl,3.2,c8.$1(A.hk.j(0.7)))}return!0
case"hairdryer":d2=d3.c
J.bs(d2.save())
d3.jr(0,-0.15)
d3.aq(d0.$5(-26,-14,40,22,10),d1.$3(D.fmF,A.hY,A.uS))
d3.aq(d0.$5(14,-10,12,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-10,6,12,22,4),c8.$1(A.cU))
d2.restore()
if(c7){for(d2=d5*3,v=0;v<4;++v){u=A.i.F(d2+v*0.25,1)
t=u*18
q=-10+v*5
d3.ah(new B.r(24+t,q),new B.r(32+t,q),c9.$2(A.c.j(1-u),1.8))}d2=c8.$1(A.cW.j(0.4))
d2.y=N.oT
d3.O(D.exW,8,d2)}return!0
case"headphones":d3.cQ(B.bY(A.dS,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bA,4))
for(d2=d5*12,p=0;p<2;++p){o=F.TR[p]
t=o-7
d3.aq(d0.$5(t,0,14,20,6),d1.$3(new B.a4(t,0,t+14,20),A.bl,A.n2))
if(c7)for(t=o<0,v=1;v<=2;++v){q=B.bX(new B.r(o,10),10+v*5+A.i.F(d2,5))
h=t?2.2:-0.9
d3.cQ(q,h,1.6,!1,c9.$2(A.eG.j(0.9-v*0.3),1.6))}}if(c7)d6.$5(d3,"\u266a",new B.r(-4,-8-A.i.F(d5*14,8)),A.kY,12)
return!0
case"smartwatch":d3.aq(d0.$5(-8,-30,16,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-8,14,16,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-14,-17,28,32,8),d1.$3(D.fmh,A.d0,A.cU))
d3.aq(d0.$5(-11,-14,22,26,6),c8.$1(A.dX))
if(c7){a2=new B.W(Date.now(),0,!1)
d6.$5(d3,A.a.b_(A.o.v(B.d5(a2)),2,"0")+":"+A.a.b_(A.o.v(B.fE(a2)),2,"0"),D.exj,A.bf,9.5)
j=(Math.sin(d5*9)+1)/2
d2=B.ap(A.Gv,A.hH,j)
d2.toString
d6.$5(d3,"\u2665",new B.r(-8,1),d2,8+j*2)
d6.$5(d3,""+(70+A.o.F(A.i.bc(d5*2),6)),A.dS,A.c,7)}return!0
case"tablet":d3.aq(d0.$5(-30,-22,60,44,6),c8.$1(M.n8))
d3.aq(d0.$5(-30,-22,60,44,6),c9.$2(A.bP,1.6))
a3=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nc(a3),$.mQ(),!0)
d2.translate(-27,-19)
K.Mt(d3,D.ftF,d5,!1,c6,c6)
d2.restore()}else d3.aq(a3,c8.$1(D.wP))
return!0
case"buck":a4=d0.$5(-26,-22,52,42,5)
d3.aq(a4,d1.$3(new B.a4(a4.a,a4.b,a4.c,a4.d),A.dW,A.dl))
d3.aq(a4,c9.$2(A.aT,1.2))
d3.O(D.aOj,9,c8.$1(A.aw))
d3.O(D.aOj,6,c9.$2(A.de,2))
d3.aq(d0.$5(4,-2,14,10,2),c8.$1(A.aw))
d3.aq(d0.$5(-22,-19,44,12,2),c8.$1(A.dX))
d2=A.i.a5(d4.db,1)
t=A.i.a5(c7?d4.dx:d4.e,1)
q=c7?A.bf:A.an
d6.$5(d3,d2+"\u2192"+t+"V",D.ezv,q,8.2)
d3.O(D.exN,2.4,c8.$1(c7?A.bj:A.aM))
d6.$5(d3,"IN",D.eAZ,A.ab,6)
d6.$5(d3,"OUT",D.ezb,A.ab,6)
return!0
case"regulator":a5=c7?A.i.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=B.ap(A.bP,A.aC,a5)
t.toString
d3.aq(d2,c8.$1(t))
d3.O(H.aa3,3,c8.$1(A.aM))
d3.aq(d0.$5(-12,-4,24,18,3),d1.$3(D.fmd,A.cU,A.ik))
d6.$5(d3,"7805",D.aae,A.ab,8)
for(p=0;p<3;++p){d2=D.dzu[p]-1
d3.aE(new B.a4(d2,14,d2+2,22),c8.$1(A.dT))}if(a5>0.2)for(d2=d5*0.9,v=0;v<3;++v){u=A.i.F(d2+v*0.33,1)
d3.O(new B.r(-6+v*6,-28-u*12),2+u*2,c8.$1(A.c.j(0.5*(1-u))))}d6.$5(d3,"5V",D.eBx,A.bq,9)
return!0
case"diode":d3.ah(D.aOo,D.aO6,c9.$2(A.dT,2.4))
d3.aq(d0.$5(-14,-7,28,14,6),c8.$1(A.as.j(0.85)))
d3.aE(D.flX,c8.$1(A.bq))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.eF.j(0.4))
t.y=A.l7
d3.aq(d2,t)}d2=new B.aH($.T().r,A.aj,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-8,-4))
d2.E(new B.aq(-8,4))
d2.E(new B.aq(-1,0))
d2.E(new B.bA())
d3.af(d2,c8.$1(A.b7))
d6.$5(d3,"one way",D.eAO,A.aF,8)
return!0
case"ldr":d3.ah(D.aOo,D.aae,c9.$2(A.dT,2.4))
d3.ah(D.aOc,D.aO6,c9.$2(A.dT,2.4))
d3.O(A.J,12,c8.$1(A.de))
d3.O(A.J,12,c9.$2(A.ti,1.6))
d2=$.T()
t=B.a([],x.v)
a6=new B.aH(d2.r,A.aj,c6,c6,t)
a6.E(new B.aZ(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new B.aq(d2,-6+v*3)
t.push(d2)
q=a6.f
if(q!=null)d2.aj(q)
a6.ac()}d3.af(a6,c9.$2(A.bM,1.4))
d2=B.ap(A.bA,A.eF,d4.f)
d2.toString
d6.$5(d3,"\u2600",new B.r(-6,-26),d2,14)
d6.$5(d3,""+A.i.S(20+980*(1-d4.f))+"\u03a9",D.eAE,A.ab,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":switch(d2){case"lgtv":t=A.ex
break
case"sonytv":t=A.t2
break
case"appletv":t=A.dT
break
default:t=F.Cj
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
h.clipRRect(B.nc(a3),$.mQ(),!0)
h.translate(t,q)
K.h4o(d3,new B.av(a3.c-t,a3.d-q),d4.at,d5,d4.ax,-1,c6,c6)
h.restore()
d3.O(D.eys,1.6,c8.$1(A.bf))}else{d3.aq(a3,c8.$1(D.wP))
h=new B.aH($.T().r,A.aj,c6,c6,B.a([],x.v))
h.E(new B.aZ(t,q))
h.E(new B.aq(t+24,q))
h.E(new B.aq(t,q+22))
h.E(new B.bA())
d3.af(h,c8.$1(A.c.j(0.05)))}if(d2==="appletv"){d2=d3.c
J.bs(d2.save())
d2.translate(0,19.6)
d3.bV(0,3.7)
d2.translate(-0.5,-0.55)
d3.af(K.hMy(),c8.$1(A.cy))
d2.restore()}else{switch(d2){case"lgtv":d2=F.aTC
break
case"sonytv":d2=F.aTu
break
default:d2=F.aTw
break}a8=B.h2(c6,A.cM,c6,c6,c6,B.d_(c6,c6,c6,c6,c6,c6,c6,c6,c6,B.l(c6,c6,d2.b,c6,c6,c6,c6,c6,c6,c6,c6,3.6,c6,c6,A.E,c6,1,!0,c6,0.25,c6,c6,c6,c6,c6,c6),d2.a),A.a7,A.ch,c6,A.e5,A.ci)
a8.eY()
d2=a8.b
t=d2.c
d2=d2.a.c
a8.a4(d3,new B.r(-t/2,19.6-d2.gb8(d2)/2))}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":a9=D.mF.h(0,d2)
b0=a9.b===D.Bi
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
d3.aq(w,d1.$3(new B.a4(h,b3,b4,b5),b7,b6))
a3=d0.$5(t+2,q,b1-4,b2-4,3.5)
if(c7){t=d3.c
J.bs(t.save())
t.clipRRect(B.nc(a3),$.mQ(),!0)
q=a3.a
h=a3.b
t.translate(q,h)
K.Mt(d3,new B.av(a3.c-q,a3.d-h),d5,!1,c6,c6)
t.restore()}else d3.aq(a3,c8.$1(D.wP))
if(b0){t=a3.b
q=a3.d
d3.ah(new B.r(0,t),new B.r(0,q),c9.$2(A.v.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aq(d0.$5(-4,a3.b+1.2,8,2.6,1.3),c8.$1(A.v))
else{d2=b0?b1/2-7:0
d3.O(new B.r(d2,a3.b+3),1.3,c8.$1(A.v))}return!0
case"ereader":d3.aq(d0.$5(-17,-28,34,52,4),c8.$1(A.cU))
d3.aq(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bO))
if(c7){d6.$5(d3,"NGMY",D.eBE,A.aw,9)
for(v=0;v<9;++v){d2=-9+v*3.6
t=A.o.F(v,4)===3?14:22
d3.aE(new B.a4(-11,d2,-11+t,d2+1.4),c8.$1(A.bk))}d3.O(A.aa1,1.6,c8.$1(A.aw))}return!0
case"laptop":d3.aq(d0.$5(-30,-28,60,42,4),d1.$3(D.fmP,A.cD,A.bk))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nc(b8),$.mQ(),!0)
t=b8.a
q=b8.b
d2.translate(t,q)
K.Mt(d3,new B.av(b8.c-t,b8.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(b8,c8.$1(D.wP))
d2=new B.aH($.T().r,A.aj,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-38,16))
d2.E(new B.aq(38,16))
d2.E(new B.aq(34,21))
d2.E(new B.aq(-34,21))
d2.E(new B.bA())
d3.af(d2,c8.$1(D.akd))
d3.aq(d0.$5(-7,16,14,2,1),c8.$1(A.bk))
return!0
case"imac":d3.aq(d0.$5(-32,-28,64,46,5),d1.$3(D.fmT,A.cl,A.cD))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nc(b9),$.mQ(),!0)
t=b9.a
q=b9.b
d2.translate(t,q)
K.Mt(d3,new B.av(b9.c-t,b9.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(b9,c8.$1(D.wP))
d3.O(D.ewW,2,c8.$1(A.bP))
d2=new B.aH($.T().r,A.aj,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-6,18))
d2.E(new B.aq(6,18))
d2.E(new B.aq(10,26))
d2.E(new B.aq(-10,26))
d2.E(new B.bA())
d3.af(d2,c8.$1(D.akd))
return!0
case"monitor":d3.aq(d0.$5(-34,-28,68,40,3),c8.$1(A.ex))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nc(c0),$.mQ(),!0)
t=c0.a
q=c0.b
d2.translate(t,q)
K.Mt(d3,new B.av(c0.c-t,c0.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(c0,c8.$1(D.wP))
d3.aE(D.fn_,c8.$1(A.bk))
d3.aq(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.d0))
return!0
case"projector":if(c7){d2=new B.aH($.T().r,A.aj,c6,c6,B.a([],x.v))
d2.E(new B.aZ(14,4))
d2.E(new B.aq(-32,-42))
d2.E(new B.aq(34,-42))
d2.E(new B.bA())
d3.af(d2,c8.$1(A.eF.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nc(c1),$.mQ(),!0)
t=c1.a
q=c1.b
d2.translate(t,q)
K.Mt(d3,new B.av(c1.c-t,c1.d-q),d5,!1,c6,c6)
d2.restore()}d3.aq(d0.$5(-26,-4,52,24,6),d1.$3(D.fmG,A.hW,A.d0))
d3.O(D.aNS,7,c8.$1(A.aw))
d3.O(D.aNS,4,c8.$1(c7?A.eF:A.cx))
for(v=0;v<4;++v){d2=-20+v*4
d3.ah(new B.r(d2,2),new B.r(d2,14),c9.$2(A.dJ,1))}return!0
case"carscreen":d3.aq(d0.$5(-34,-10,68,32,12),c8.$1(A.aw))
c2=d0.$5(-30,-20,60,28,8)
d3.aq(c2,c8.$1(M.n8))
d3.aq(c2,c9.$2(A.bA,1.2))
if(c7){c3=new B.aH($.T().r,A.aj,c6,c6,B.a([],x.v))
c3.E(new B.aZ(-26,4))
c3.E(new B.cj(-10,-14+Math.sin(d5)*3,6,-6))
c3.E(new B.aq(22,-16))
d3.af(c3,c9.$2(A.aH,2.2))
d2=A.i.F(d5*6,48)
d3.O(new B.r(-26+d2,4-d2*0.1),2.4,c8.$1(A.bf))
d6.$5(d3,""+(88+A.o.F(A.i.bc(d5*2),5)),H.aOb,A.c,10)
d6.$5(d3,"km/h",D.ezj,A.aF,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aq(c4,d1.$3(new B.a4(c4.a,c4.b,c4.c,c4.d),A.d0,A.cU))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nc(c5),$.mQ(),!0)
t=c5.a
q=c5.b
d2.translate(t,q)
K.Mt(d3,new B.av(c5.c-t,c5.d-q),d5,!1,c6,c6)
d2.restore()
d2=c8.$1(A.bl.j(0.2))
d2.y=A.nh
d3.O(A.J,26,d2)}else d3.aq(c5,c8.$1(A.a_))
d3.ah(D.eBe,D.eBj,c9.$2(A.bk,4))
d3.ah(D.eyu,D.eyK,c9.$2(A.bk,4))
return!0}return!1},
h48:function h48(){},
h4a:function h4a(){},
h4b:function h4b(){},
h49:function h49(){},
htN(d,e,f,g){return new C.akS(d,g,f,e)},
GJ(d,e,f){return new C.beI(d,e,f)},
akS:function akS(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
akT:function akT(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.he$=i
_.mc$=j
_.fe$=k
_.hf$=l
_.bv$=m
_.ab$=n
_.c=_.a=null},
bM4:function bM4(d,e){this.a=d
this.b=e},
bM5:function bM5(d){this.a=d},
bM3:function bM3(d){this.a=d},
bM6:function bM6(){},
bM7:function bM7(d){this.a=d},
bM8:function bM8(d,e,f){this.a=d
this.b=e
this.c=f},
bM2:function bM2(d,e){this.a=d
this.b=e},
bM_:function bM_(d,e){this.a=d
this.b=e},
bM0:function bM0(d,e,f){this.a=d
this.b=e
this.c=f},
bLU:function bLU(d,e){this.a=d
this.b=e},
bLV:function bLV(){},
bM1:function bM1(d,e,f){this.a=d
this.b=e
this.c=f},
bLZ:function bLZ(d,e){this.a=d
this.b=e},
bLW:function bLW(d,e){this.a=d
this.b=e},
bLX:function bLX(d,e){this.a=d
this.b=e},
bLY:function bLY(d){this.a=d},
bMo:function bMo(d){this.a=d},
bMp:function bMp(){},
bLu:function bLu(){},
bMq:function bMq(d,e){this.a=d
this.b=e},
bMn:function bMn(d,e){this.a=d
this.b=e},
bMi:function bMi(d){this.a=d},
bMf:function bMf(d,e,f){this.a=d
this.b=e
this.c=f},
bMg:function bMg(d,e){this.a=d
this.b=e},
bMj:function bMj(d){this.a=d},
bMd:function bMd(d,e){this.a=d
this.b=e},
bMe:function bMe(d,e){this.a=d
this.b=e},
bMh:function bMh(d){this.a=d},
bMk:function bMk(d){this.a=d},
bMa:function bMa(d,e){this.a=d
this.b=e},
bMb:function bMb(d,e){this.a=d
this.b=e},
bMc:function bMc(d,e){this.a=d
this.b=e},
bMl:function bMl(d){this.a=d},
bM9:function bM9(d){this.a=d},
bMm:function bMm(d){this.a=d},
bLv:function bLv(d,e){this.a=d
this.b=e},
bLR:function bLR(d,e){this.a=d
this.b=e},
bLT:function bLT(d,e){this.a=d
this.b=e},
bLS:function bLS(d,e){this.a=d
this.b=e},
bLQ:function bLQ(){},
bLC:function bLC(d){this.a=d},
bLB:function bLB(d){this.a=d},
bLD:function bLD(d,e){this.a=d
this.b=e},
bLE:function bLE(d){this.a=d},
bLA:function bLA(d){this.a=d},
bLI:function bLI(d,e,f){this.a=d
this.b=e
this.c=f},
bLz:function bLz(d,e){this.a=d
this.b=e},
bLJ:function bLJ(d,e){this.a=d
this.b=e},
bLK:function bLK(d,e){this.a=d
this.b=e},
bLL:function bLL(d,e){this.a=d
this.b=e},
bLM:function bLM(d,e,f){this.a=d
this.b=e
this.c=f},
bLy:function bLy(d,e){this.a=d
this.b=e},
bLN:function bLN(d,e,f){this.a=d
this.b=e
this.c=f},
bLx:function bLx(d,e){this.a=d
this.b=e},
bLO:function bLO(d,e,f){this.a=d
this.b=e
this.c=f},
bLw:function bLw(d,e){this.a=d
this.b=e},
bLP:function bLP(d){this.a=d},
bLF:function bLF(d){this.a=d},
bLG:function bLG(d){this.a=d},
bLH:function bLH(d){this.a=d},
beI:function beI(d,e,f){this.a=d
this.b=e
this.c=f},
fA1:function fA1(){},
fA2:function fA2(){},
fA3:function fA3(){},
fzP:function fzP(){},
fA4:function fA4(){},
fzO:function fzO(){},
fA5:function fA5(){},
fzT:function fzT(){},
fzN:function fzN(){},
fzU:function fzU(){},
fzM:function fzM(){},
fzV:function fzV(){},
fzL:function fzL(){},
fzW:function fzW(){},
fzJ:function fzJ(){},
fzK:function fzK(){},
fzX:function fzX(){},
fzH:function fzH(){},
fzI:function fzI(){},
fzY:function fzY(){},
fzG:function fzG(){},
WR:function WR(d){this.a=d},
aGg:function aGg(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
e4Q:function e4Q(d,e){this.a=d
this.b=e},
e4Z:function e4Z(d){this.a=d},
e5_:function e5_(){},
e50:function e50(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e51:function e51(){},
e4P:function e4P(d){this.a=d},
e4O:function e4O(d,e,f){this.a=d
this.b=e
this.c=f},
e4N:function e4N(d,e){this.a=d
this.b=e},
e4L:function e4L(d){this.a=d},
e4M:function e4M(){},
e4Y:function e4Y(d){this.a=d},
e4X:function e4X(d){this.a=d},
e4V:function e4V(d,e){this.a=d
this.b=e},
e4T:function e4T(d){this.a=d},
e4U:function e4U(){},
e4W:function e4W(d,e,f){this.a=d
this.b=e
this.c=f},
e4R:function e4R(d,e){this.a=d
this.b=e},
e4S:function e4S(){},
e53:function e53(d){this.a=d},
e54:function e54(d,e){this.a=d
this.b=e},
e52:function e52(){},
e55:function e55(d,e){this.a=d
this.b=e},
e56:function e56(d){this.a=d},
e57:function e57(d){this.a=d},
aAc:function aAc(d,e){this.c=d
this.a=e},
bcN:function bcN(d,e){var _=this
_.d=$
_.bv$=d
_.ab$=e
_.c=_.a=null},
cNW:function cNW(d){this.a=d},
bcM:function bcM(d,e){this.b=d
this.a=e},
cNV:function cNV(d){this.a=d},
aAx:function aAx(){},
aAy:function aAy(){},
aMS:function aMS(){},
bBE:function bBE(){},
iC6(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bX(A.w2,23)
$.T()
b8=B.L()
b8.r=A.aw.gp(0)
b9.O(A.w2,25,b8)
b8=B.L()
b8.san(D.eKn.az(0,v))
b9.O(A.w2,23,b8)
for(u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
b8=Math.cos(t)
s=Math.sin(t)
r=Math.cos(t)
q=Math.sin(t)
p=new B.as(A.T,A.Q,A.W,A.X,A.V)
p.r=A.bq.gp(0)
p.c=A.o.F(u,5)===0?1.8:1
b9.ah(new B.r(b8*17,s*17-2),new B.r(r*21,q*21-2),p)}o=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.i.D(o/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=B.L()
r.r=A.bE.gp(0)
r.c=2
r.d=A.bG
b9.ah(A.w2,new B.r(b8*18,s*18-2),r)
r=B.L()
r.r=A.bq.gp(0)
b9.O(A.w2,3,r)
c2.$5(b9,w?"V":"A",D.eBm,A.bq,12)
c2.$5(b9,w?A.i.a5(o,1)+" V":""+A.i.S(o*1000)+" mA",D.eAI,A.aw,9.5)
return!0
case"fan":b8=B.by(D.fm9,A.hq)
$.T()
s=B.L()
s.r=A.bA.gp(0)
b9.aq(b8,s)
s=B.L()
s.r=A.an.gp(0)
b9.aE(D.fn0,s)
s=B.L()
s.r=A.a_.j(0.6).gp(0)
b9.O(H.w3,22,s)
for(b8=b9.c,u=0;u<4;++u){J.bs(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.bY(A.aNK,18,10)
r=new B.as(A.T,A.Q,A.W,A.X,A.V)
r.r=A.hk.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
b9.c1(s,r)
b8.restore()}b8=B.L()
b8.r=A.bt.gp(0)
b9.O(H.w3,4,b8)
b8=B.L()
b8.b=A.ac
b8.c=2
b8.r=A.cD.gp(0)
b9.O(H.w3,22,b8)
b8=B.L()
b8.b=A.ac
b8.c=0.8
b8.r=A.jU.gp(0)
b9.O(H.w3,14,b8)
return!0
case"speaker":n=B.by(D.aU1,A.qi)
$.T()
b8=B.L()
b8.san(D.av8.az(0,new B.a4(n.a,n.b,n.c,n.d)))
b9.aq(n,b8)
m=b7?Math.sin(c1*40)*1.6:0
b8=B.L()
b8.san(D.eKK.az(0,B.bX(A.cz,15)))
b9.O(A.cz,14+m,b8)
b8=B.L()
b8.r=A.d0.gp(0)
b9.O(A.cz,5,b8)
b8=B.L()
b8.r=A.bk.gp(0)
b9.O(H.aa2,5+m*0.4,b8)
if(b7)for(b8=c1*18,u=1;u<=3;++u){s=B.bX(D.ey3,6+u*6+A.i.F(b8,6))
r=new B.as(A.T,A.Q,A.W,A.X,A.V)
r.b=A.ac
r.c=1.8
r.r=A.c5.j(0.9-u*0.2).gp(0)
b9.cQ(s,-0.8,1.6,!1,r)}return!0
case"clock":l=B.by(D.fmS,A.qi)
$.T()
b8=B.L()
b8.san(D.ccC.az(0,new B.a4(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
b8=B.by(D.aU3,A.jJ)
s=B.L()
s.r=A.ik.gp(0)
b9.aq(b8,s)
if(b7){k=new B.W(Date.now(),0,!1)
j=B.G4(k)<500?":":" "
i=A.a.b_(A.o.v(B.d5(k)),2,"0")
h=A.a.b_(A.o.v(B.fE(k)),2,"0")
b8=B.L()
b8.r=A.bf.j(0.12).gp(0)
b9.aE(D.aU3,b8)
c2.$5(b9,i+j+h,D.eB2,A.bf,21)}b8=B.L()
b8.r=A.cD.gp(0)
b9.O(D.eB0,2.4,b8)
b8=B.L()
b8.r=A.cD.gp(0)
b9.O(D.ey8,2.4,b8)
return!0
case"calculator":l=B.by(D.fmy,A.iC)
$.T()
b8=B.L()
b8.san(D.avb.az(0,new B.a4(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
b8=B.by(D.fmr,A.hE)
s=B.L()
s.r=(b7?A.a_W:D.bvG).gp(0)
b9.aq(b8,s)
if(b7)c2.$5(b9,"3.14159",D.eAH,A.Zz,10.5)
for(g=0;g<4;++g)for(b8=-6+g*8,s=b8+6,f=0;f<4;++f){r=-15+f*8
r=B.by(new B.a4(r,b8,r+6,s),A.Fh)
$.T()
q=new B.as(A.T,A.Q,A.W,A.X,A.V)
q.r=(f===3?A.ca:A.bO).gp(0)
b9.aq(r,q)}return!0
case"phone":l=B.by(D.fmm,A.iC)
$.T()
b8=B.L()
b8.r=M.n8.gp(0)
b9.aq(l,b8)
b8=B.L()
b8.b=A.ac
b8.c=1.9
b8.r=D.ama.gp(0)
b9.aq(l,b8)
e=B.by(D.fmb,A.hq)
if(b7){b8=B.L()
b8.san(D.cdZ.az(0,new B.a4(e.a,e.b,e.c,e.d)))
b9.aq(e,b8)
b8=b9.c
J.bs(b8.save())
b8.clipRRect(B.nc(e),$.mQ(),!0)
b8.translate(-12,-25)
K.Mt(b9,D.fth,c1,!1,b6,b6)
b8.restore()
d=A.i.F(c1*0.12,1)
b8=B.by(D.fm8,A.hE)
s=B.L()
s.r=A.b7.gp(0)
b9.aq(b8,s)
s=B.L()
s.r=A.bf.gp(0)
b9.aE(new B.a4(-10,14.5,-10+20*d,16.9),s)
c2.$5(b9,"\u26a1"+A.i.S(d*100)+"%",D.ezP,A.c,6)}else{b8=B.L()
b8.r=D.wP.gp(0)
b9.aq(e,b8)}b8=B.by(D.fng,D.eKT)
s=B.L()
s.r=A.v.gp(0)
b9.aq(b8,s)
return!0
case"router":l=B.by(D.fmR,A.qh)
$.T()
b8=B.L()
b8.san(D.ccU.az(0,new B.a4(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
for(a0=0;a0<2;++a0){a1=F.TR[a0]
b8=a1<0?-4:4
s=new B.as(A.T,A.Q,A.W,A.X,A.V)
s.r=A.cx.gp(0)
s.c=4
s.d=A.bG
b9.ah(new B.r(a1,-4),new B.r(a1+b8,-28),s)}for(u=0;u<4;++u){if(b7)a2=A.o.F(A.i.bc(c1*(3+u*1.3)),2)===0||u===0
else a2=!1
b8=new B.as(A.T,A.Q,A.W,A.X,A.V)
b8.r=(a2?A.bj:A.aM).gp(0)
b9.O(new B.r(-15+u*10,11),2.6,b8)}if(b7)for(b8=c1*10,u=1;u<=3;++u){s=B.bX(H.w3,8+u*6+A.i.F(b8,6))
r=new B.as(A.T,A.Q,A.W,A.X,A.V)
r.b=A.ac
r.c=1.8
r.r=A.fX.j(0.9-u*0.2).gp(0)
b9.cQ(s,-2.3,1.5,!1,r)}return!0
case"siren":a3=b7?(Math.sin(c1*14)+1)/2:0
b8=B.by(D.fmx,A.hq)
s=$.T()
r=B.L()
r.r=A.cU.gp(0)
b9.aq(b8,r)
if(b7){b8=B.L()
b8.r=A.aC.j(0.5*a3).gp(0)
b8.y=A.Di
b9.O(A.w2,34,b8)}a4=new B.aH(s.r,A.aj,b6,b6,B.a([],x.v))
a4.E(new B.aZ(-16,12))
a4.E(new B.aq(-16,-2))
a4.E(new B.cj(0,-30,16,-2))
a4.E(new B.aq(16,12))
a4.E(new B.bA())
b8=B.L()
b8.r=B.ap(A.ey,D.bm2,a3).gp(0)
b9.af(a4,b8)
b8=B.L()
b8.b=A.ac
b8.c=1.4
b8.r=A.bW.gp(0)
b9.af(a4,b8)
if(b7){b8=b9.c
J.bs(b8.save())
b8.translate(0,-2)
b9.jr(0,c1*7)
s=B.L()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.ah(A.J,H.aa2,s)
b8.restore()}return!0
case"toycar":a5=b7?Math.sin(c1*30)*0.8:0
b8=b9.c
J.bs(b8.save())
b8.translate(0,a5)
s=$.T().r
r=x.v
l=new B.aH(s,A.aj,b6,b6,B.a([],r))
l.E(new B.aZ(-28,8))
l.E(new B.aq(-28,-2))
l.E(new B.aq(-16,-4))
l.E(new B.aq(-10,-16))
l.E(new B.aq(10,-16))
l.E(new B.aq(18,-4))
l.E(new B.aq(28,-2))
l.E(new B.aq(28,8))
l.E(new B.bA())
q=B.L()
q.san(D.caS.az(0,D.fmJ))
b9.af(l,q)
q=new B.aH(s,A.aj,b6,b6,B.a([],r))
q.E(new B.aZ(-8,-4))
q.E(new B.aq(-4,-13))
q.E(new B.aq(4,-13))
q.E(new B.aq(4,-4))
q.E(new B.bA())
p=B.L()
p.r=A.fC.gp(0)
b9.af(q,p)
r=new B.aH(s,A.aj,b6,b6,B.a([],r))
r.E(new B.aZ(8,-4))
r.E(new B.aq(8,-13))
r.E(new B.aq(11,-13))
r.E(new B.aq(15,-4))
r.E(new B.bA())
s=B.L()
s.r=A.fC.gp(0)
b9.af(r,s)
for(a0=0;a0<2;++a0){a1=F.aEx[a0]
s=new B.as(A.T,A.Q,A.W,A.X,A.V)
s.r=A.aw.gp(0)
b9.O(new B.r(a1,10),7.5,s)
J.bs(b8.save())
b8.translate(a1,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.as(A.T,A.Q,A.W,A.X,A.V)
q.r=A.bO.gp(0)
q.c=1.6
b9.ah(A.J,new B.r(r*5.5,s*5.5),q)}b8.restore()}b8.restore()
if(b7)for(b8=c1*40,u=0;u<3;++u){s=A.i.F(b8+u*8,14)
r=-4+u*5
q=new B.as(A.T,A.Q,A.W,A.X,A.V)
q.r=A.aF.gp(0)
q.c=1.6
b9.ah(new B.r(-34-s,r),new B.r(-42-s,r),q)}return!0
case"kettle":b8=$.T().r
s=x.v
l=new B.aH(b8,A.aj,b6,b6,B.a([],s))
l.E(new B.aZ(-18,20))
l.E(new B.aq(-14,-12))
l.E(new B.cj(0,-20,14,-12))
l.E(new B.aq(18,20))
l.E(new B.bA())
r=B.L()
r.san(D.cc0.az(0,D.fmw))
b9.af(l,r)
r=new B.aH(b8,A.aj,b6,b6,B.a([],s))
r.E(new B.aZ(14,-10))
r.E(new B.aq(30,-22))
r.E(new B.aq(32,-18))
r.E(new B.aq(16,-4))
r.E(new B.bA())
q=B.L()
q.r=A.dT.gp(0)
b9.af(r,q)
s=new B.aH(b8,A.aj,b6,b6,B.a([],s))
s.E(new B.aZ(-14,-8))
s.E(new B.cj(-34,-6,-18,12))
b8=B.L()
b8.b=A.ac
b8.c=5
b8.r=A.aw.gp(0)
b9.af(s,b8)
b8=B.L()
if(b7){s=B.ap(A.cW,A.v0,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.cU
b8.r=s.gp(0)
b9.aE(D.fmv,b8)
if(b7){b8=B.L()
b8.r=A.cW.j(0.3).gp(0)
b8.y=A.nh
b9.O(A.aNI,24,b8)
for(b8=c1*0.9,u=0;u<4;++u){a6=A.i.F(b8+u*0.25,1)
s=Math.sin(a6*9+u)
r=new B.as(A.T,A.Q,A.W,A.X,A.V)
r.r=A.c.j(0.6*(1-a6)).gp(0)
b9.O(new B.r(30+s*4,-26-a6*26),3+a6*5,r)}}b8=B.L()
b8.r=A.aw.gp(0)
b9.O(D.ex6,3,b8)
return!0
case"lamp":if(b7){u=A.i.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aH($.T().r,A.aj,b6,b6,B.a([],x.v))
b8.E(new B.aZ(-10,-14))
b8.E(new B.aq(-30,24))
b8.E(new B.aq(10,24))
b8.E(new B.aq(8,-14))
b8.E(new B.bA())
s=B.L()
s.r=A.eF.j(0.28*u).gp(0)
b9.af(b8,s)
s=B.L()
s.r=A.eF.j(0.5*u).gp(0)
s.y=Z.Pw
b9.O(D.eB8,24,s)}b8=B.by(D.fn9,A.hq)
s=$.T()
r=B.L()
r.r=A.cU.gp(0)
b9.aq(b8,r)
r=B.L()
r.r=A.d0.gp(0)
r.c=3
r.d=A.bG
b9.ah(D.exm,D.aNV,r)
r=B.L()
r.r=A.d0.gp(0)
r.c=3
r.d=A.bG
b9.ah(D.aNV,D.eB9,r)
a7=new B.aH(s.r,A.aj,b6,b6,B.a([],x.v))
a7.E(new B.aZ(-14,-16))
a7.E(new B.aq(6,-26))
a7.E(new B.aq(10,-12))
a7.E(new B.aq(-10,-6))
a7.E(new B.bA())
s=B.L()
s.r=(b7?A.aQ:A.kc).gp(0)
b9.af(a7,s)
b8=B.L()
b8.r=(b7?A.c:A.bk).gp(0)
b9.O(D.eBc,4,b8)
return!0
case"lights":b8=$.T().r
s=x.v
a8=new B.aH(b8,A.aj,b6,b6,B.a([],s))
a8.E(new B.aZ(-34,-6))
a8.E(new B.cj(0,22,34,-6))
r=B.L()
r.b=A.ac
r.c=2
r.r=A.hX.gp(0)
b9.af(a8,r)
for(r=c1*2.4,u=0;u<5;++u){a9=(u+0.5)/5
q=-34+68*a9
p=-6+4*a9*(1-a9)*4*4.2/1*0.75+0
b0=b7&&A.i.F(r+u*0.7,1.8)<1.1
if(b0){b1=new B.as(A.T,A.Q,A.W,A.X,A.V)
b1.r=D.a6B[u].j(0.6).gp(0)
b1.y=A.HY
b9.O(new B.r(q+0,p+6),12,b1)}b1=B.a([],s)
b2=new B.aH(b8,A.aj,b6,b6,b1)
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
q=new B.cj(q,p+17,q-5,b3)
b1.push(q)
p=b2.f
if(p!=null)q.aj(p)
b2.ac()
q=new B.bA()
b1.push(q)
p=b2.f
if(p!=null)q.aj(p)
b2.ac()
q=new B.as(A.T,A.Q,A.W,A.X,A.V)
if(b0)p=D.a6B[u]
else{p=B.ap(D.a6B[u],A.v,0.65)
p.toString}q.r=p.gp(0)
b9.af(b2,q)}return!0}return C.iC5(b9,c0,c1,c2)},
h3:function h3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hoL(d){var w=D.mF.h(0,d)
return(w==null?null:w.b)===D.Bg},
iDl(d,e,f){return B.a7(d,!1).cc(B.vz(null,!1,!0,!0,new C.h9g(e,f),A.eX,null,A.pO,new C.h9h(),x.H))},
Kv:function Kv(d,e){this.a=d
this.b=e},
mi:function mi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h9g:function h9g(d,e){this.a=d
this.b=e},
h9h:function h9h(){},
WA:function WA(d,e,f){this.c=d
this.d=e
this.a=f},
aG6:function aG6(d,e,f){var _=this
_.d=$
_.e=null
_.r=_.f=!1
_.w=-99
_.x=d
_.z=_.y=0
_.bv$=e
_.ab$=f
_.c=_.a=null},
e0M:function e0M(d,e){this.a=d
this.b=e},
e0N:function e0N(d,e,f){this.a=d
this.b=e
this.c=f},
e0X:function e0X(d,e,f){this.a=d
this.b=e
this.c=f},
e0L:function e0L(d,e){this.a=d
this.b=e},
e0K:function e0K(d,e){this.a=d
this.b=e},
e0Y:function e0Y(d,e){this.a=d
this.b=e},
e0Z:function e0Z(d){this.a=d},
e0E:function e0E(d,e){this.a=d
this.b=e},
e0D:function e0D(d,e){this.a=d
this.b=e},
e0C:function e0C(d){this.a=d},
e0V:function e0V(){},
e0R:function e0R(d){this.a=d},
e0S:function e0S(d){this.a=d},
e0T:function e0T(d){this.a=d},
e0U:function e0U(d){this.a=d},
e1_:function e1_(d){this.a=d},
e0Q:function e0Q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e0O:function e0O(){},
e0P:function e0P(d){this.a=d},
e0W:function e0W(d,e){this.a=d
this.b=e},
e0J:function e0J(d,e){this.a=d
this.b=e},
e0H:function e0H(d){this.a=d},
e0I:function e0I(d){this.a=d},
e0B:function e0B(d){this.a=d},
e0G:function e0G(d,e,f){this.a=d
this.b=e
this.c=f},
e0F:function e0F(d){this.a=d},
bzG:function bzG(d,e,f){this.b=d
this.c=e
this.a=f},
agB:function agB(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aOG:function aOG(){},
a2K(d,e,f,g,h,i){return new C.bys(d,e,f,g,h,i)},
bys:function bys(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fAw:function fAw(){},
fAx:function fAx(){},
fAy:function fAy(){},
fAz:function fAz(){},
fAA:function fAA(){},
fAB:function fAB(){},
fAC:function fAC(){},
fAD:function fAD(){},
aae:function aae(d){this.a=d},
cpg:function cpg(d){this.a=d},
cph:function cph(){},
cpf:function cpf(d,e){this.a=d
this.b=e},
cpe:function cpe(d){this.a=d},
Yf:function Yf(d){this.a=d},
aHO:function aHO(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.he$=f
_.mc$=g
_.fe$=h
_.hf$=i
_.bv$=j
_.ab$=k
_.c=_.a=null},
f0H:function f0H(d){this.a=d},
f0D:function f0D(d){this.a=d},
f0C:function f0C(d,e){this.a=d
this.b=e},
f0F:function f0F(d,e){this.a=d
this.b=e},
f0E:function f0E(d,e){this.a=d
this.b=e},
f0G:function f0G(d){this.a=d},
bzS:function bzS(d,e,f){this.b=d
this.c=e
this.a=f},
X_:function X_(d){this.a=d},
bnJ:function bnJ(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.he$=d
_.mc$=e
_.fe$=f
_.hf$=g
_.bv$=h
_.ab$=i
_.c=_.a=null},
e8u:function e8u(){},
e8v:function e8v(){},
e8p:function e8p(d,e){this.a=d
this.b=e},
e8r:function e8r(d,e){this.a=d
this.b=e},
e8s:function e8s(d){this.a=d},
e8q:function e8q(d){this.a=d},
e8t:function e8t(d){this.a=d},
buv:function buv(d,e,f){this.b=d
this.c=e
this.a=f},
W9:function W9(d){this.a=d},
bni:function bni(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.he$=d
_.mc$=e
_.fe$=f
_.hf$=g
_.bv$=h
_.ab$=i
_.c=_.a=null},
dT5:function dT5(){},
dT6:function dT6(){},
dT0:function dT0(){},
dT3:function dT3(d,e){this.a=d
this.b=e},
dT2:function dT2(d,e){this.a=d
this.b=e},
dT4:function dT4(d){this.a=d},
dT1:function dT1(d){this.a=d},
aLg:function aLg(d,e,f){this.a=d
this.b=e
this.c=f},
WQ:function WQ(d){this.a=d},
bnA:function bnA(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
e4k:function e4k(d,e){this.a=d
this.b=e},
e4l:function e4l(d){this.a=d},
e4j:function e4j(d,e){this.a=d
this.b=e},
e4m:function e4m(d){this.a=d},
e4i:function e4i(d,e){this.a=d
this.b=e},
e4n:function e4n(d){this.a=d},
e4h:function e4h(d,e){this.a=d
this.b=e},
e4o:function e4o(d,e){this.a=d
this.b=e},
e4g:function e4g(d,e){this.a=d
this.b=e},
e4p:function e4p(d){this.a=d},
e4f:function e4f(d,e){this.a=d
this.b=e},
e4q:function e4q(d){this.a=d},
e4e:function e4e(d){this.a=d},
e4r:function e4r(d){this.a=d},
e4d:function e4d(d){this.a=d},
e4s:function e4s(d){this.a=d},
e4t:function e4t(d){this.a=d},
e4c:function e4c(d){this.a=d},
bpD:function bpD(d,e,f){this.b=d
this.c=e
this.a=f},
XC:function XC(d){this.a=d},
aH4:function aH4(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
ew6:function ew6(d,e){this.a=d
this.b=e},
ew7:function ew7(d,e,f){this.a=d
this.b=e
this.c=f},
ew5:function ew5(d,e,f){this.a=d
this.b=e
this.c=f},
ew8:function ew8(d){this.a=d},
ew4:function ew4(d){this.a=d},
ewc:function ewc(d){this.a=d},
ewb:function ewb(d,e){this.a=d
this.b=e},
ewa:function ewa(d,e){this.a=d
this.b=e},
ewd:function ewd(d,e){this.a=d
this.b=e},
ew9:function ew9(d,e){this.a=d
this.b=e},
ewe:function ewe(d){this.a=d},
XN:function XN(d){this.a=d},
aHr:function aHr(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eIQ:function eIQ(d){this.a=d},
eIR:function eIR(d){this.a=d},
eIO:function eIO(d,e){this.a=d
this.b=e},
eIP:function eIP(d){this.a=d},
eIN:function eIN(d){this.a=d},
eIS:function eIS(d){this.a=d},
eIT:function eIT(d){this.a=d},
eIU:function eIU(d){this.a=d},
eIV:function eIV(d,e){this.a=d
this.b=e},
Y6:function Y6(d){this.a=d},
boR:function boR(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eX2:function eX2(){},
eXb:function eXb(){},
eX7:function eX7(d){this.a=d},
eX6:function eX6(){},
eX8:function eX8(d,e){this.a=d
this.b=e},
eX5:function eX5(d,e){this.a=d
this.b=e},
eX9:function eX9(d){this.a=d},
eX4:function eX4(d,e){this.a=d
this.b=e},
eXa:function eXa(d){this.a=d},
eX3:function eX3(d){this.a=d},
XB:function XB(d){this.a=d},
bol:function bol(d,e,f,g,h,i,j,k){var _=this
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
_.he$=f
_.mc$=g
_.fe$=h
_.hf$=i
_.bv$=j
_.ab$=k
_.c=_.a=null},
euM:function euM(){},
euN:function euN(){},
euF:function euF(d){this.a=d},
euE:function euE(d){this.a=d},
euG:function euG(d){this.a=d},
euD:function euD(d){this.a=d},
euH:function euH(d){this.a=d},
euC:function euC(d){this.a=d},
euI:function euI(d,e){this.a=d
this.b=e},
euB:function euB(d,e){this.a=d
this.b=e},
euJ:function euJ(d){this.a=d},
euA:function euA(d,e){this.a=d
this.b=e},
euK:function euK(d){this.a=d},
euz:function euz(d,e){this.a=d
this.b=e},
euL:function euL(d){this.a=d},
euy:function euy(d,e){this.a=d
this.b=e},
bh6:function bh6(d,e,f){this.c=d
this.d=e
this.a=f},
aOs:function aOs(){},
bBA:function bBA(){},
aON:function aON(){},
bBG:function bBG(){},
aPd:function aPd(){},
bBP:function bBP(){},
aPF:function aPF(){},
bBY:function bBY(){},
K_(d,e,f,g){var w,v,u,t,s,r,q,p=$.aux
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.I)(e),++w)E.mH(d,e[w],f,g)
return}for(p=B.cU(e,0,B.dA(4,"count",x.S),B.U(e).c),v=p.$ti,p=new B.bP(p,p.gJ(0),v.k("bP<aj.E>")),u=x.H,v=v.k("aj.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)E.mH(d,s,f,g)
else B.bL(new B.bh(1000*q),new C.cpc(d,s,f,g),u)}},
cmz(d){return C.i7e(d)},
i7e(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$cmz=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aB(),$async$cmz)
case 7:r=f
q=B.aV(J.t(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.S(x.N,x.z)
w=1
break}p=A.U.aP(0,q,null)
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
return B.i($async$cmz,v)},
b4D(d,e){return C.i7f(d,e)},
i7f(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b4D=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aB(),$async$b4D)
case 6:s=g
w=7
return B.b(s.aB("String","ngmy_play_progress_v1_"+d,A.U.au(e,null)),$async$b4D)
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
return B.i($async$b4D,v)},
cpc:function cpc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
isJ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.S(x.Y,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.B)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.I)(w),++q){p=w[q]
u.push(B.J(["k",p.b,"x",B.oE(A.i.a5(p.c,4)),"y",B.oE(A.i.a5(p.d,4)),"v",p.e,"l",B.oE(A.i.a5(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.oE(A.i.a5(p.as,3)),"ch",p.at,"vc",B.oE(A.i.a5(p.z,3)),"s",B.oE(A.i.a5(p.ch,2))],s,r))}w=B.a([],x.U)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.I)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.B(f,B.a3(f).k("ch.E"))
A.d.fd(l)
return A.U.au(B.J(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
iCv(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.U.aP(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a6(h)
A.d.a6(a6.b)
v=B.a([],x.fs)
g=x.R
f=g.a(J.t(w,"parts"))
f=J.aQ(f==null?A.bQ:f)
while(f.C()){u=f.gP(f)
t=i.a(u)
e=B.aV(J.t(t,"k"))
s=e==null?"":e
if(!$.qS().am(0,s)){J.c6(v,null)
continue}d=s
a0=B.aJ(J.t(t,"x"))
if(a0==null)a0=0.5
a1=B.aJ(J.t(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.u8(a2,d,a0,a1)
a3.at5(a2,d,a0,a1)
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
d=B.kh(J.t(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.kh(J.t(t,"b"))
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
J.c6(v,r)}i=g.a(J.t(w,"wires"))
i=J.aQ(i==null?A.bQ:i)
h=x.j
while(i.C()){q=i.gP(i)
p=h.a(q)
f=B.aJ(J.t(p,0))
o=f==null?a5:A.i.M(f)
f=B.aJ(J.t(p,2))
n=f==null?a5:A.i.M(f)
if(o==null||n==null||o<0||n<0||o>=J.ad(v)||n>=J.ad(v))continue
m=J.t(v,o)
l=J.t(v,n)
if(m!=null&&l!=null)a6.an0(m,A.i.M(B.dH(J.t(p,1))),l,A.i.M(B.dH(J.t(p,3))))}i=B.aJ(J.t(w,"challenge"))
i=A.i.M(i==null?0:i)
k=B.aR(x.S)
h=g.a(J.t(w,"done"))
h=J.aQ(h==null?A.bQ:h)
while(h.C()){j=h.gP(h)
J.c6(k,A.i.M(B.dH(j)))}return new B.bsB(i,k)}catch(a4){return a5}},
fRV(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fRV=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.aB(),$async$fRV)
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
return B.i($async$fRV,v)},
bIz(d){return C.iE8(d)},
iE8(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bIz=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.aB(),$async$bIz)
case 7:w=6
return B.b(f.aB("String","ngmy_electronics_lab_v1",d),$async$bIz)
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
return B.i($async$bIz,v)},
fYG(d,e,f){var w=0,v=B.j(x.I),u,t,s,r,q,p
var $async$fYG=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(d.c===e&&d.d===f){u=d
w=1
break}$.T()
t=new B.oU(new B.oo())
s=B.v1(t,null)
r=B.L()
r.r=A.c7.gp(0)
s.aE(new B.a4(0,0,e,f),r)
s.bi7(0,d,A.J,B.L())
q=t.mZ()
w=3
return B.b(q.vI(e,f),$async$fYG)
case 3:p=h
q.t()
d.t()
u=p
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fYG,v)}},D,W,A2,Az,K,F,M,A3,H,AA,AB,AC,A4,AD
J=c[1]
B=c[0]
A=c[2]
X=c[169]
A5=c[215]
Ab=c[210]
A6=c[149]
O=c[107]
Ac=c[216]
Ad=c[181]
A7=c[209]
Ae=c[217]
A8=c[214]
U=c[205]
P=c[53]
Y=c[201]
Af=c[197]
N=c[208]
Ag=c[220]
Ah=c[228]
Ai=c[163]
Aj=c[199]
A9=c[180]
Ak=c[126]
Al=c[227]
Am=c[218]
An=c[109]
Ao=c[222]
Ap=c[96]
Z=c[203]
V=c[106]
Aq=c[111]
Q=c[192]
Ar=c[173]
A_=c[207]
R=c[206]
A0=c[221]
As=c[161]
E=c[34]
I=c[3]
G=c[50]
L=c[165]
At=c[159]
Au=c[184]
Av=c[212]
A1=c[187]
Aa=c[225]
S=c[226]
T=c[193]
Aw=c[224]
Ax=c[175]
Ay=c[223]
C=a.updateHolder(c[22],C)
D=c[202]
W=c[219]
A2=c[211]
Az=c[30]
K=c[33]
F=c[156]
M=c[154]
A3=c[128]
H=c[204]
AA=c[124]
AB=c[144]
AC=c[85]
A4=c[213]
AD=c[72]
C.am6.prototype={}
C.Xl.prototype={
R(){return new C.bo9(B.S(x.N,x.i),new B.au(A.ax,$.az()),B.a([],x.X),B.a([],x.eZ),B.mj(0,null,null))}}
C.bo9.prototype={
gXD(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
t(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
this.ch.t()
this.a2()},
Qq(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Qq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aU.bk$.d.c
if(s!=null)s.jf()
p.bN(0,A.ck)
t.l(new C.enP(t))
t.a.toString
p=t.gXD()
w=3
return B.b(C.bDT(C.igp(q,C.isu(p),o,t.ay)),$async$Qq)
case 3:s=e
r=s==null?null:J.je(s)
if(r==null||r.length===0||A.a.Y(r,"{"))r=C.iu0(q,p,o)
if(t.c==null){w=1
break}t.l(new C.enQ(t,o,r))
$.aU.U$.push(new C.enR(t))
case 1:return B.h(u,v)}})
return B.i($async$Qq,v)},
ZJ(d){return this.c58(d)},
aZJ(){return this.ZJ(null)},
c58(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$ZJ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aU.bk$.d.c
if(s!=null)s.jf()
t.f.sb1(0,o)
t.l(new C.eo1(t))
G.dF(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bDT(C.inA(o)),$async$ZJ)
case 3:r=n.a=m.iCa(f)
p.b=""
if(r!=null&&!C.isv(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.iu1(o)
q=B.ag(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.am6(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.l(new C.eo2(p,t))
t.cb0(p.a)
case 1:return B.h(u,v)}})
return B.i($async$ZJ,v)},
cb0(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
A.d.a6(w)
w=++m.as
v=m.gXD()
A.d.a6(v.a)
A.d.a6(v.b)
m.e.a6(0)
m.l(new C.enY(m))
t=d.d
s=B.S(x.N,x.Y)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.enW(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.enZ(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.I)(r),++u){p.$2(o,new C.eo_(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.eo0(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bl.j(0.1),g=B.n(16),f=B.K(A.bl.j(0.35),A.r,1)
if(m.x)j=B.A(B.a([D.fuP,A.bc,B.E(B.c(m.Q,l,l,l,l,l,l,A.Bs,l,l,l),1)],x.p),A.l,l,A.e,A.h,0,l,l)
else if(k==null)j=D.fWk
else{w=B.E(B.c(k.a,l,l,l,l,l,l,A.LM,l,l,l),1)
v=x.p
w=B.a([B.A(B.a([w,B.c(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fFZ,l,l,l)],v),A.l,l,A.e,A.h,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.D(A.tv,B.c(u,l,l,l,l,l,l,D.fIR,l,l,l),l))
w.push(A.cQ)
w.push(B.c(k.b,l,l,l,l,l,l,A1.FF,l,l,l))
u=k.e
if(u.length!==0){t=A.aQ.j(0.12)
s=B.n(10)
w.push(B.p(l,B.c(u,l,l,l,l,l,l,D.fLx,l,l,l),A.f,l,l,new B.o(t,l,l,s,l,l,A.m),l,l,l,A.hy,A.cu,l,l,l))}w.push(A.ak)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
t=B.c(t,l,l,l,l,l,l,A.mc,l,l,l)
q=u[r]
s=s?A.c:A.aF
w.push(new B.D(A.Hz,new B.c1(A.aK,A.e,A.h,A.B,l,A.p,l,0,B.a([t,A.bb,new B.bu(1,A.b9,B.c(q,l,l,l,l,l,l,new B.G(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.I)(j),++p){o=j[p]
t=A.bl.j(0.3)
s=new B.aP(12,12)
s=B.p(l,B.c(o.a,l,l,l,l,l,l,A.WK,l,l,l),A.f,l,l,new B.o(t,l,l,new B.bb(s,s,s,s),l,l,A.m),l,l,l,l,A.fZ,l,l,l)
t=A.c.j(0.07)
q=new B.aP(12,12)
A.d.u(w,B.a([A.M,new B.bK(A.a9,l,l,s,l),A.at,B.p(l,B.c(o.b,l,l,l,l,l,l,D.fRq,l,l,l),A.f,l,l,new B.o(t,l,l,new B.bb(q,q,q,q),l,l,A.m),l,l,l,l,A.bT,l,l,l)],v))}if(m.ax)w.push(D.eCE)
j=B.cb(B.x(w,A.B,l,A.e,A.h,0,A.p),A.t,m.ch,A.y,l,l,l,l,l,A.ah)}w=x.p
g=B.x(B.a([B.aki(B.p(l,j,A.f,l,new B.aY(0,1/0,0,i),new B.o(h,l,f,g,l,l,A.m),l,l,l,D.bFD,A.ep,l,l,1/0),A.aZ,A.i9),B.E(C.htN(m.gXD(),l,l,m.e),1)],w),A.l,l,A.e,A.h,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new E.e1("Ask about it",i,new C.eo5(m),l,A.bl,l),new E.e1("Invent something new",!i,new C.eo6(m),l,A.bl,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dC2[p]
i.push(new E.e1(n,!1,new C.eo7(m,n),l,A.bl,l))}f.push(new E.fi(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.diG[p]
i.push(new E.e1(r,!1,new C.eo8(m,r),l,A.bl,l))}f.push(new E.fi(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),m.f,l,l,l,l,l,2,B.bC(l,new B.b6(4,B.n(16),A.a1),l,A.eY,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kz,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.al,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.eo9(m,k),l,!1,l,l,!1,l,!0,l,A.ae,l,l,l,l,l,l,l,l,l,l,l,A.ds,!0,A.a7,l,A.ao,l,A.Wz,l,l),1)
h=m.at
v=h&&j?D.bVI:A.eg
j=h&&j?"Ask":"Invent"
f.push(B.A(B.a([i,A.aa,new E.fI(v,j,new C.eoa(m,k),A.bl,l)],w),A.l,l,A.e,A.h,0,l,l))
return E.lW(A.bl,A.ff,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.x(f,A.l,l,A.e,A.N,0,A.p))}}
C.Hc.prototype={}
C.vG.prototype={}
C.XI.prototype={
R(){return new C.aHj(A.J,A.J,A.aA,B.aR(x.S),$,A.bH,0,B.a([],x.X),null,null)}}
C.aHj.prototype={
gb03(){var w,v,u,t=this,s=D.Jk[t.cx],r=D.TU[t.cy],q=D.Eh[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.e5(w,w.r,B.a3(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.aCO[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cD(p,0,new C.eDc())},
ga4m(){return D.Jk[this.cx].d/this.gb03()},
gaRY(){return 0.1*(D.Jk[this.cx].d/0.9)/D.TU[this.cy].d},
a_(){this.a3()
this.mn()
C.cmz("rocket_lander").bE(new C.eDw(this),x.k)},
cb9(){var w=this
w.ay=A.i.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cV.ai()*0.6
w.f=new B.r(0.15+A.cV.ai()*0.7,0.08)
w.r=new B.r((A.cV.ai()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
mE(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.l(new C.eDx())
return}w=D.tW[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.i.D(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.r(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga4m()
v=v.a7(0,new B.r(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaRY())}if(m.dy){t=m.r
v=v.aI(0,t.aO(0,t.gcL()*6*D.aEQ[m.d]))}t=m.r=m.r.a7(0,v.aO(0,d))
s=m.f=m.f.a7(0,t.aO(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new B.r(-t.a*0.4,t.b)
t=new B.r(A.i.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new B.r(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.Eh[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b4D("rocket_lander",B.J(["unlocked",t],x.N,x.z))
C.K_("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga4m()/(D.tW[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.i.a5(m.ga4m()/(D.tW[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
G.dF(80,"",500,0,0.6,"noise")
B.fW()}}if(m.Q&&m.x>0&&A.o.F(A.i.bc(m.CW*20),2)===0)G.dF(90,"",70,0,0.12,"noise")
m.l(new C.eDy())},
ai6(d,e,f,g,h){var w,v=null,u=B.c(d,v,v,v,v,v,v,D.fIl,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new E.e1(e[w].a,f.$1(w),new C.eDe(this,g,w),v,h,v))
return new B.D(A.eI,B.x(B.a([u,A.cQ,B.bZ(A.bI,s,A.br,v,6,6)],t),A.B,v,A.e,A.h,0,A.p),v)},
bJM(d){var w,v,u,t,s=this,r=null,q=s.ga4m()/(D.tW[s.d].b/9.81*0.28)>=1,p=A.i.S(1/s.gaRY()),o=D.aEQ[s.d],n=B.n(24),m=d.c,l=B.K(m.j(0.6),A.r,1)
m=B.a([B.c("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.at,B.c(d.d+" Gravity here: "+B.v(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.acW,r,r,r),A.R,s.ai6("ENGINE: "+D.Jk[s.cx].b,D.Jk,new C.eD3(s),new C.eD4(s),A.cW),s.ai6("FUEL TANK: "+D.TU[s.cy].b,D.TU,new C.eD5(s),new C.eD6(s),A.bf),s.ai6("LANDING GEAR: "+D.Eh[s.db].b,D.Eh,new C.eD7(s),new C.eD8(s),A.aH),s.ai6("EXTRAS (tap to add)",D.aCO,new C.eD9(s),new C.eDa(s),A.bl)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.hex)
o=(q?A.bf:A.bZ).j(0.14)
w=B.n(12)
v=A.i.a5(s.gb03(),2)
u=A.i.a5(s.ga4m()/(D.tW[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.p(r,B.c("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.i.S(D.Eh[s.db].d*100)+".",r,r,r,r,r,r,D.fJ0,r,r,r),A.f,r,r,new B.o(o,r,r,w,r,r,A.m),r,r,r,A.hy,A.bT,r,r,r))
m.push(A.R)
m.push(new B.bK(A.z,r,r,new E.fI(A.p3,"Launch",new C.eDb(s),A.bf,r),r))
return B.at(B.p(r,B.cb(B.x(m,A.B,r,A.e,A.N,0,A.p),A.t,r,A.y,r,r,A.bR,r,r,A.ah),A.f,r,A.mh,new B.o(D.bva,r,l,n,r,r,A.m),r,r,r,A.bT,r,r,r,r),r,r,r)},
b1g(d,e,f,g){var w=null,v=f?A.cW:A.c.j(0.1),u=B.n(18),t=B.K(A.aT,A.r,1)
return B.n_(A.j4,B.p(w,B.V(d,A.c,w,w,w,30),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,62,w,w,w,w,w,g),w,new C.eD0(e),new C.eD1(e),w,w,w,w,new C.eD2(e))},
b1f(d,e,f){return this.b1g(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cg(new C.eDp(s,D.tW[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.tW[w].a:"\ud83d\udd12"
o.push(new E.e1(v,s.d===w,new C.eDq(s,w),r,D.tW[w].c,r))}v=B.a([s.b1f(F.asg,new C.eDr(s),s.y),A.bc,s.b1g(A.vw,new C.eDs(s),s.Q,130),A.bc,s.b1f(A.QQ,new C.eDt(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?A.aH:A.c.j(0.1)
t=B.n(18)
A.d.u(v,B.a([A.bc,B.aA(r,B.p(r,D.c_1,A.f,r,r,new B.o(u,r,B.K(A.aT,A.r,1),t,r,r,A.m),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eDu(s),r,r,r,r,r,r,!1,A.a4)],p))}return E.lW(A.cW,A.ff,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.x(B.a([new E.fi(o,"WORLD",r),B.A(v,A.l,r,A.ba,A.h,0,r,r)],p),A.l,r,A.e,A.N,0,A.p))}}
C.bl1.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=this.b,l=D.tW[m.d],k=a1.a,j=a1.b,i=0+k,h=0+j,g=$.T(),f=B.L(),e=l.c,d=B.ap(I.a0w,e,0.25)
d.toString
f.san(new B.a8(A.aX,A.b1,A.x,B.a([F.aj5,d],x.O),n,n).az(0,new B.a4(0,0,i,h)))
a0.aE(new B.a4(0,0,i,h),f)
w=new B.e2()
w.cT(5)
for(v=0;v<70;++v){i=w.ai()
h=w.ai()
f=w.ai()
d=new B.as(A.T,A.Q,A.W,A.X,A.V)
d.r=A.c.j(0.2+w.ai()*0.5).gp(0)
a0.O(new B.r(i*k,h*j*0.8),f*1.2+0.3,d)}u=j*0.88
i=x.v
h=B.a([],i)
t=new B.aH(g.r,A.aj,n,n,h)
t.E(new B.aZ(0,u+14))
s=new B.e2()
s.cT(2)
for(r=0;r<=k;r+=18){g=new B.aq(r,u+(Math.abs(r/k-m.ax)<m.ay/2+0.02?14:14-s.ai()*18))
h.push(g)
f=t.f
if(f!=null)g.aj(f)
t.ac()}t.E(new B.aq(k,j))
t.E(new B.aq(0,j))
t.E(new B.bA())
h=$.T()
g=B.L()
g.r=B.ap(e,A.v,0.6).gp(0)
a0.af(t,g)
q=B.bY(new B.r(m.ax*k,u+10),8,m.ay*k)
g=B.by(q,A.jJ)
e=B.L()
e.r=A.bj.gp(0)
a0.aq(g,e)
e=B.by(q.cs(2),A.qh)
g=B.L()
g.b=A.ac
g.c=2
g.r=A.c.j(0.5+0.3*Math.sin(m.CW*4)).gp(0)
a0.aq(e,g)
if(m.as==="ready")return
g=m.f
f=a0.c
J.bs(f.save())
f.translate(g.a*k,g.b*j)
a0.jr(0,m.w)
k=m.as
if(k==="crashed"){m=B.L()
m.r=A.cW.j(0.6).gp(0)
m.y=Z.Pw
a0.O(A.J,34,m)
f.restore()
return}if(m.Q&&m.x>0&&k==="flying"){k=h.r
p=new B.aH(k,A.aj,n,n,B.a([],i))
p.E(new B.aZ(-8,18))
p.E(new B.aq(0,44+Math.sin(m.CW*40)*8))
p.E(new B.aq(8,18))
p.E(new B.bA())
m=B.L()
m.r=A.aQ.gp(0)
a0.af(p,m)
k=new B.aH(k,A.aj,n,n,B.a([],i))
k.E(new B.aZ(-4,18))
k.E(new B.aq(0,32))
k.E(new B.aq(4,18))
k.E(new B.bA())
m=B.L()
m.r=A.c.gp(0)
a0.af(k,m)}m=h.r
o=new B.aH(m,A.aj,n,n,B.a([],i))
o.E(new B.aZ(0,-26))
o.E(new B.cj(14,-10,11,18))
o.E(new B.aq(-11,18))
o.E(new B.cj(-14,-10,0,-26))
o.E(new B.bA())
k=B.L()
k.san(F.avc.az(0,D.fmi))
a0.af(o,k)
k=B.L()
k.r=A.aH.gp(0)
a0.O(H.w3,5,k)
k=new B.aH(m,A.aj,n,n,B.a([],i))
k.E(new B.aZ(-11,6))
k.E(new B.aq(-20,20))
k.E(new B.aq(-11,18))
k.E(new B.bA())
j=B.L()
j.r=A.aC.gp(0)
a0.af(k,j)
i=new B.aH(m,A.aj,n,n,B.a([],i))
i.E(new B.aZ(11,6))
i.E(new B.aq(20,20))
i.E(new B.aq(11,18))
i.E(new B.bA())
m=B.L()
m.r=A.aC.gp(0)
a0.af(i,m)
f.restore()},
aD(d){return!0}}
C.aPl.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.bBR.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bBy()}}
C.aVz.prototype={}
C.a59.prototype={}
C.bdU.prototype={}
C.W8.prototype={
R(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.eA(["skin"],x.N),o=new Float32Array(0)
return new C.aFL(w,v,u,t,s,r,q,new B.cA(null,x.A),p,D.MP,D.MP,A.aA,A.cV,o,new Int32Array(0),$,A.bH,0,B.a([],x.X),null,null)}}
C.aFL.prototype={
a_(){var w=this
w.a3()
w.mn()
w.as=new C.c8R(w.gckn())
new C.dSZ(w).$0()
return},
t(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a1(0)
v.d=null}this.bAC()},
cko(d){var w,v=this
if(v.c==null)return
w=J.a2(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.fc(0,B.J(["t","init","data",$.hE3],x.N,x.z))
v.at=!0
v.ay=""
v.aC0()
break
case"parts":v.l(new C.dSz(v))
break
case"pick":v.l(new C.dSA(v,d))
break
case"shot":v.ak0(B.v(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+B.v(w.h(d,"text")))
if(v.c!=null&&!v.ax)v.l(new C.dSB(v))
break}},
aC0(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.aAD[q.cx]
v=new C.dSC()
u=q.ch
u=B.B(u,B.a3(u).k("ch.E"))
A.d.fd(u)
t=x.N
s=B.J(["layers",u,"skinMode",q.CW,"tone","#"+B.v(v.$1(w.b))+B.v(v.$1(w.c))+B.v(v.$1(w.d)),"sel",q.cy,"bpm",A.i.S(q.k4),"spin",q.go],t,x.cK)
r=A.U.au(s,null)
if(r===q.ay)return
q.ay=r
v=q.as
if(v!=null){u=B.S(t,x.z)
u.n(0,"t","state")
u.u(0,s)
v.fc(0,u)}},
ak0(d){return this.cBP(d)},
cBP(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ak0=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cI.aK(A.a.aY(d,A.a.cd(d,",")+1))
w=6
return B.b(B.axY(B.a([B.cJ7(r,"image/png","body.png")],x.fH),null,"Made in NGMY Core Protocol"),$async$ak0)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.L(x.q).f.T(I.aWp)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ak0,v)},
aBp(d){var w=d.b
if(w==="skin")return this.CW>0
return this.ch.q(0,w)},
mE(d){var w,v=this
if(v.d==null)return
w=(v.k3+=d)*v.k4/60
if(v.ok&&v.ch.q(0,"organ")&&A.i.bc(w)!==A.i.bc(v.p1)){E.Y8("kick",0,0.4)
v.Vg(170,new C.dT_())}v.p1=w
return},
afz(d){var w,v,u,t,s=this
s.l(new C.dSD(s,d))
if(d==null){s.fy=D.MP
s.fr=1
w=s.as
if(w!=null)w.fc(0,B.J(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.U(w).k("X<1>")
u=B.B(new B.X(w,new C.dSE(d),v),v.k("M.E"))
t=A.d.gH(u).b
if(t!=="skin"&&!s.ch.q(0,t)){s.ch.I(0,t)
if(s.CW===2)s.CW=1}s.aC0()
w=s.as
if(w!=null)w.fc(0,B.J(["t","focus","group",d],x.N,x.z))
s.id=0
s.cEm(t,d)
return},
cEm(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){E.Y8("kick",0,0.8)
this.Vg(260,new C.dSF())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")G.dF(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.Vg(w*70,new C.dSG(this))
else if(A.a.q(e,"intestine")||e==="Stomach")G.dF(110,"",360,0.7,0.3,"saw")
else E.hiW("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":G.dF(210+e.length*4,"",80,0.6,0.55,"tri")
G.dF(2400,"",20,0,0.3,v)
break
case"muscle":G.dF(70,"",150,1,0.6,"sine")
break
case"vessel":G.dF(300,"",380,0.4,0.22,v)
E.Y8("kick",0,0.3)
break
default:E.hiW("organic",2+A.o.F(e.length,6),200,0.4)}},
cJ6(d){this.l(new C.dSI(this,d))},
b1z(){var w,v,u,t,s,r,q,p=this,o=B.aR(x.N)
for(w=p.d.e,v=w.length,u=p.ch,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
if(p.aBp(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.I(0,s.a)}q=B.B(o,o.$ti.k("ch.E"))
w=q.length
if(w===0)return
p.p3=q[p.RG.av(w)]
p.R8=""},
c0O(d){var w,v,u=this
u.id=0
if(u.p2&&u.p3!=null){if(d==null)return
w=d===u.p3
u.l(new C.dSw(u,w,d))
v=x.t
C.K_("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.Vg(1100,new C.dSx(u))
return}if(d==null){if(u.cy!=null)u.afz(null)
return}u.afz(d)},
c4q(d,e){var w,v=this,u=null,t=B.n(18),s=B.K(A.c5.j(0.5),A.r,1)
if(v.p2){w=v.p3
w=B.c(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p4+"\n"+v.R8,u,u,u,u,u,u,D.fEi,u,u,u)}else if(d==null||e==null)w=D.fTE
else{w=x.p
w=B.A(B.a([B.E(B.x(B.a([B.c(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hs,u,u,u),A.cQ,B.c(e.b,u,u,u,u,u,u,A1.FF,u,u,u)],w),A.B,u,A.e,A.N,0,A.p),1),B.aI(u,u,u,u,D.c1J,u,u,u,new C.dSy(v),u,u,u,u,"Back to the whole body",A.cn)],w),A.B,u,A.e,A.h,0,u,u)}return B.p(u,w,A.f,u,u,new B.o(I.ZJ,u,s,t,u,u,A.m),u,u,u,u,U.anE,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:D.dO2.h(0,g)
i.aC0()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.dtG
u=v.length
t=i.ch
s=0
for(;s<v.length;v.length===u||(0,B.I)(v),++s){r=v[s]
if(i.aBp(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.q(w,q))w.push(q)}v=x.p
u=B.a([B.aI(h,h,h,h,I.p5,h,h,h,new C.dSP(i),h,h,h,h,"Share",h)],v)
q=B.a([],v)
p=i.as
if((p==null?h:p.b!=null)===!0){p=p.b
q.push(p==null?A.bK:B.Cd(h,A.qf,p))}p=i.ax
o=p?0:1
q.push(new B.dv(p,B.xL(B.p(A.z,B.x(D.dDF,A.l,h,A.e,A.N,0,A.p),A.f,h,h,D.b9B,h,h,D.hHg,h,h,h,h,h),A.aZ,A.nc,o),h))
q=B.x(B.a([B.E(new B.an(A.a0,h,A.b4,A.t,q,h),1),new B.D(F.anl,i.c4q(g,f),h)],v),A.l,h,A.e,A.h,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){n=D.dkp[s]
o=n.a
m=o==="skin"
if(m){l=i.CW
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=n.b
o=m?i.CW>0:t.q(0,o)
p.push(new E.e1(l,o,new C.dSQ(i,n),n.c,A.c5,h))}p=B.a([new E.fi(p,h,h)],v)
if(!i.p2&&w.length!==0){o=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.I)(w),++s){k=w[s]
o.push(new E.e1(k,k===i.cy,new C.dSR(i,k),h,A.aQ,h))}p.push(new E.fi(o,"FIND",h))}if(t.q(0,"organ")){o=i.k4
p.push(E.j6(A.bZ,""+A.i.S(o)+" beats/min","Heart rate",180,40,new C.dSS(i),o))}if(i.CW>0&&t.a===0){o=B.a([],v)
for(j=0;j<5;++j)o.push(new E.Gn(D.aAD[j],i.cx===j,new C.dST(i,j),!1,h))
p.push(new E.fi(o,"SKIN",h))}o=i.go
m=i.p2
l=m?"Quiz on":"Quiz"
v=B.a([new E.e1("Spin",o,new C.dSU(i),D.arf,A.aH,h),new E.fI(A.nk,"Reset view",new C.dSV(i),A.c,h),new E.e1(l,m,new C.dSW(i),A.IE,A.aQ,h)],v)
if(t.q(0,"organ"))v.push(new E.e1("Heartbeat sound",i.ok,new C.dSX(i),R.p2,A.bZ,h))
p.push(new E.fi(v,h,h))
return E.lW(A.c5,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.x(p,A.l,h,A.e,A.N,0,A.p))}}
C.aOq.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.aOr.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bAB()}}
C.c8R.prototype={
kU(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aL(e,"</script","<\\/script")
v=$.hKM
$.hKM=v+1
u="ngmy-body-viewer-"+v
$.xH()
$.qd().pp(u,new C.c8S(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fH(v,"message",new C.c8T(t),!1,x.gA)
t.b=u},
fc(d,e){var w,v
try{w=this.c
if(w!=null){w=B.RV(w.contentWindow)
if(w!=null)J.ak6(w,e,"*")}}catch(v){}}}
C.yX.prototype={}
C.Dj.prototype={}
C.nY.prototype={}
C.beH.prototype={}
C.Wf.prototype={
R(){var w=x.N,v=x.y,u=x.S
return new C.aFN(B.S(w,x.a2),B.a([],x.cB),B.S(w,v),B.S(w,v),B.S(w,u),A.aA,A.J,A.J,B.aR(u),$,A.bH,0,B.a([],x.X),null,null)}}
C.aFN.prototype={
a_(){var w=this
w.a3()
w.mn()
w.aew()
$.aU.U$.push(new C.dUF(w))},
aew(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aew=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aB(),$async$aew)
case 6:q=e.ps("ngmy_circuit_passed_v1")
r=q==null?A.Z:q
if(s.c!=null)s.l(new C.dUj(s,r))
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
return B.i($async$aew,v)},
aeT(d){return this.c8E(d)},
c8E(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$aeT=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.I(0,d)
u=3
w=6
return B.b(B.aB(),$async$aeT)
case 6:r=f
q=s.cx
p=B.a3(q).k("kn<ch.E,m>")
q=B.B(new B.kn(q,new C.dUm(),p),p.k("M.E"))
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
return B.i($async$aeT,v)},
aA_(d,e,f,g){var w="c"+this.y++,v=new C.Dj(w,e,f,g)
this.d.n(0,w,v)
return v},
mU(d,e,f){return this.aA_(0,e,f,0)},
adR(d,e){var w
if(D.AO.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a7(0,new B.r(-36,w))},
uo(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aWb(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fe$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.dq(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.ea(m,D.d1K[A.o.F(q.d,4)])&1)===0
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
bUf(){return this.aWb(null)},
mE(d){var w,v,u,t,s,r,q,p,o,n=this
n.bUf()
if(!n.ax)return
for(w=n.d,w=new B.ba(w,B.a3(w).k("ba<2>")).gae(0),v=new B.eQ(w,new C.dUG()),u=n.f,t=n.w,s=0;v.C();){r=w.gP(0).a
if(u.h(0,r)===!0){q=n.fe$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fe$)
o=s+1
G.dF(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
aA0(d){var w=this
w.d.a6(0)
A.d.a6(w.e)
w.f.a6(0)
w.r.a6(0)
w.cy=null},
mo(d,e){var w=this.x
return new B.r(d*w.a,e*w.b)},
aw7(d){var w=this
if(w.x.A(0,A.aA)){$.aU.U$.push(new C.dUh(w,d))
return}w.l(new C.dUi(w,d))},
cEF(d){this.l(new C.dUn(this,d,$.bIW()[d]))},
cdv(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bIW()[a0]
v=d.d
u=B.a3(v).k("ba<2>")
t=u.k("X<M.E>")
s=t.k("M.E")
r=B.B(new B.X(new B.ba(v,u),new C.dUc(),t),s)
A.d.b0(r,new C.dUd())
q=B.B(new B.X(new B.ba(v,u),new C.dUe(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.l(new C.dUf(d,w))
return}u=d.r
p=B.dD(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dH(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.h3(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aWb(0)
h=m.h(0,A.d.gH(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.lx(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aL(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a6(0)
u.u(0,p)
d.l(new C.dUg(d,o,a0))},
aAW(d){var w,v,u,t,s=this.d,r=B.a3(s).k("ba<2>")
s=B.B(new B.ba(s,r),r.k("M.E"))
r=B.U(s).k("dr<1>")
s=new B.dr(s,r)
s=new B.bP(s,s.gJ(0),r.k("bP<aj.E>"))
w=d.a
r=r.k("aj.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cmU(d){var w,v,u,t,s,r=this.d,q=B.a3(r).k("ba<2>")
r=B.B(new B.ba(r,q),q.k("M.E"))
q=B.U(r).k("dr<1>")
r=new B.dr(r,q)
r=new B.bP(r,r.gJ(0),q.k("bP<aj.E>"))
w=d.a
v=d.b
q=q.k("aj.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c4j(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.AO.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.adR(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.y(p,o)
s=l}}}return t},
bT_(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.adR(p,o)
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
cdx(d){var w,v,u,t=this,s=t.aAW(d)
if(s!=null){w=t.d.h(0,s)
w.toString
B.f2()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.n(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
G.dF(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.l(new C.dUo())
return}u=t.bT_(d)
if(u!=null)t.l(new C.dUp(t,u))
else t.l(new C.dUq(t))},
ayN(d){return this.c7B(d)},
c7B(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$ayN=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.aAW(d)
if(s==null){w=1
break}B.jD()
t.l(new C.dUl(t,s))
case 1:return B.h(u,v)}})
return B.i($async$ayN,v)},
bFv(d){if(this.x.A(0,A.aA))return
this.l(new C.dUb(this,d,A.cV))
B.f2()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bIW()[g]
g=x.p
v=B.a([B.aI(h,h,h,h,B.V(i.ax?R.p2:A_.tR,A.ab,h,h,h,21),h,h,h,new C.dUz(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.n(16)
s=A.cw.j(0.14)
r=B.K(A.cw.j(0.5),A.r,1)
q=B.a([B.c("Challenge: "+w.a,h,h,h,h,h,h,D.fDq,h,h,h),B.c(w.b,h,h,h,h,h,h,A.WY,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.D(A.l5,B.c(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.bf:A.f1,h,h,h,h,h,h,h,h,12,h,h,A.E,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.p(h,B.A(B.a([B.E(B.x(q,A.B,h,A.e,A.h,0,A.p),1),B.bI(D.h4s,h,i.gcdu(),B.bp(A.cw,h,h,h,h,h,h,h,h,h,h,A.cn))],g),A.l,h,A.e,A.h,0,h,h),A.f,h,h,new B.o(s,h,r,t,h,h,A.m),h,h,h,V.P7,D.bGm,h,h,1/0))}u.push(B.E(B.cg(new C.dUA(i)),1))
if(f!=null){t=B.n(14)
s=A.c.j(0.06)
r=f.b
u.push(B.p(h,B.c(D.AO.h(0,r).a+": "+D.AO.h(0,r).e,h,h,h,h,h,h,An.ut,h,h,h),A.f,h,h,new B.o(s,h,h,t,h,h,A.m),h,h,h,A.a1H,A.bT,h,h,1/0))}u=B.x(u,A.l,h,A.e,A.h,0,A.p)
t=B.a([],g)
for(s=D.AO.gdS(D.AO),s=s.gae(s);s.C();){r=s.gP(s)
q=new B.aP(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ax(o.j(0.5),1,A.r,-1)
t.push(B.aA(h,B.p(h,B.x(B.a([B.V(p.b,o,h,h,h,20),A.bs,B.c(p.a,h,h,h,h,h,h,D.aYq,h,h,h)],g),A.l,h,A.e,A.N,0,A.p),A.f,h,h,new B.o(n,h,new B.bE(m,m,m,m),new B.bb(q,q,q,q),h,h,A.m),h,h,h,A.f7,Ax.HB,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dUB(i,r),h,h,h,h,h,h,!1,A.a4))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dyu[l]
s.push(new E.fI(A.QR,k.b,new C.dUC(i,k),A.cw,h))}s.push(new E.fI(I.xj,"Clear",new C.dUD(i),A.bZ,h))
r=B.a([],g)
for(j=0;q=$.bIW(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?A.ea:A.m2
o=i.ay
n=i.cx.q(0,j)?A.bf:A.bu
r.push(new E.e1(q.a,o===j,new C.dUE(i,j),p,n,h))}return E.lW(A.cw,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.x(B.a([new E.fi(t,"PARTS",h),new E.fi(s,"TRY",h),new E.fi(r,"TASKS",h)],g),A.l,h,A.e,A.N,0,A.p))}}
C.beZ.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3=a6.a,a4=a6.b
$.T()
w=B.L()
w.r=D.ahl.gp(0)
a5.aE(new B.a4(0,0,0+a3,0+a4),w)
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
i=a3.adR(l,o.c)
h=s.h(0,n)===!0
n=$.T()
g=B.a([],r)
f=new B.aH(n.r,A.aj,a2,a2,g)
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
if(h){n=new B.as(A.T,A.Q,A.W,A.X,A.V)
n.b=A.ac
n.c=9
n.r=A.bu.j(0.28).gp(0)
n.y=N.oT
a5.af(f,n)}n=new B.as(A.T,A.Q,A.W,A.X,A.V)
n.b=A.ac
n.c=3.2
n.d=A.bG
n.r=(h?A.eF:A.bA).gp(0)
a5.af(f,n)}a0=a3.as
if(a0!=null&&q.h(0,a0)!=null){a1=q.h(0,a0).c.a7(0,D.Kt)
i=a3.at
a3=i.a
a4=a1.a
e=Math.max(40,Math.abs(a3-a4)*0.5)
r=new B.aH($.T().r,A.aj,a2,a2,B.a([],r))
w=a1.b
r.E(new B.aZ(a4,w))
s=i.b
r.E(new B.i6(a4+e,w,a3-e,s,a3,s))
s=B.L()
s.b=A.ac
s.c=3
s.r=A.ab.gp(0)
a5.af(r,s)}for(a3=new B.dq(q,q.r,q.e);a3.C();)this.cdw(a5,a3.d)},
cdw(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.AO.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.bY(a0.c,64,64)
s=B.by(t,A.k2)
r=w.cy===v
q=s.eI(A.cz)
$.T()
p=B.L()
p.r=A.v.j(0.55).gp(0)
p.y=A.nh
d.aq(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.L()
p.san(new B.bT(A.z,0.5,A.x,g,0,B.a([e.c.j(0.6),A.L],x.O),g,g).az(0,B.bX(a0.c,52)))
d.O(q,52,p)}q=s.eI(A.cP)
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
q.san(new B.a8(A.aX,A.b1,A.x,B.a([p,m],x.O),g,g).az(0,t))
d.aq(s,q)
q=B.L()
q.b=A.ac
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aq(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.p0:D.bWg}else l=e.b
k=C.hkL(B.lx(l.a),30,A.c,l.b,g,A.E)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a4(d,v.aI(0,new B.r(p/2,q.gb8(q)/2)))
j=C.hkL(e.a,10.5,A.c,g,g,A.E)
j.a4(d,a0.c.a7(0,new B.r(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.hkL(f,9,u?A.eF:A.bW,g,g,A.u)
i.a4(d,a0.c.a7(0,new B.r(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b2e(d,w.adR(a0,h),o)
this.b2e(d,a0.c.a7(0,D.Kt),o)},
b2e(d,e,f){var w
$.T()
w=B.L()
w.r=D.ahl.gp(0)
d.O(e,8.5,w)
w=B.L()
w.b=A.ac
w.c=2.2
w.r=f.gp(0)
d.O(e,8.5,w)
w=B.L()
w.r=A.c.gp(0)
d.O(e,3.2,w)},
aD(d){return!0}}
C.aOv.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.bBB.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bAG()}}
C.OC.prototype={
R(){return new C.aG3(B.mj(0,null,null))}}
C.Lw.prototype={
a9(){return"_UnfoldStyle."+this.b}}
C.Bm.prototype={}
C.aG3.prototype={
a_(){this.a3()
B.bL(A.pN,C.iBb(),x.H)},
cdD(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcr(0).at
v.toString
w.f=v}w.l(new C.e_P(w,e))},
c6g(){var w=this
w.e.t()
w.e=B.mj(w.f,null,null)
w.l(new C.e_O(w))},
t(){this.e.t()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null,s=t&&B.Q(d).ax.a===A.dh?A.c:A.c7
return B.p9(t,B.c5(v,s,t?new C.bvt(w.e,w.gcdC(w),new C.e_Q(d),v):new C.aKn(u,new B.bf(u.b,x.W)),v,!1,!1,v,!1),new C.e_R(w,u),x.K)}}
C.bx8.prototype={}
C.bvt.prototype={
b2f(d,e,f){var w=null,v=B.c(d,w,w,w,w,w,w,B.l(w,w,f?A.bC:A.c,w,w,w,w,w,w,w,w,12.5,w,w,A.u,w,w,!0,w,1.6,w,w,w,w,w,w),w,w,w)
return new B.D(U.a26,B.x(B.a([v,A.bs,B.c(e,w,w,w,w,w,w,B.l(w,w,f?A.cy:A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.B,w,A.e,A.h,0,A.p),w)},
B(d){var w,v,u,t=this,s=null,r=B.Q(d).ax.a===A.dh,q=B.aF(d,A.dK,x.w).w,p=B.aI(s,s,s,s,B.V(A.eB,r?A.bC:A.ab,s,s,s,20),s,s,D.hHJ,t.e,s,s,s,s,s,s)
if(r)w=new B.o(A.c,s,s,B.n(14),A.Jn,s,A.m)
else{w=B.a([A.aH.j(0.22),A.aH.j(0.06)],x.O)
v=B.n(14)
w=new B.o(s,s,B.K(A.aH.j(0.75),A.r,1.6),v,B.a([new B.aa(0,A.H,A.aH.j(0.22),A.J,8)],x.V),new B.a8(A.ay,A.aD,A.x,w,s,s),A.m)}v=B.c("\ud83e\uddea Core Protocol",s,s,s,s,s,s,B.l(s,s,r?A.bC:A.c,s,s,s,s,s,s,s,s,15,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)
u=x.p
w=B.A(B.a([p,B.E(B.at(B.p(s,B.x(B.a([v,B.c("Play, make things, keep them.",s,s,s,s,s,s,B.l(s,s,r?A.cy:A.aR,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)],u),A.l,s,A.e,A.N,0,A.p),A.f,s,s,w,s,s,D.hHO,s,A7.aob,s,s,s),s,s,s),1),A.um],u),A.l,s,A.e,A.h,0,s,s)
v=t.b2f("STUDIOS","Play, make things, and keep what you make",r)
$.bIX()
return B.bo(!1,B.x(B.a([B.E(B.wk(0,s,A.t,t.c,A.y,s,s,s,s,s,!1,s,A.ah,!1,B.a([new B.nV(new B.R(8,q.r.b+6,8,4),new B.ml(w,s),s),new B.ml(v,s),new B.nV(A.ia,B.Qg(new B.pc(new C.ffv(d),9,!0,!0,!0,0,B.tz(),s),D.aWe),s),new B.ml(t.b2f("SCENES","Each one is a studio too: change the style, colours and words",r),s),new B.nV(D.bGw,B.Qg(new B.pc(new C.ffw(t),6,!0,!0,!0,0,B.tz(),s),D.aWe),s)],u)),1)],u),A.l,s,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!1)}}
C.agU.prototype={
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m.d
if(B.Q(d).ax.a===A.dh){w=B.n(20)
v=(A.o.ao(o.c,3)&1)===0
u=B.a87(v?A.aH:A.bl,20)
v=v?A.aH:A.bl
return B.aG(!1,A.a3,!0,n,B.aM(!1,w,!0,B.eJ(B.x(B.a([new B.Wd(v,44,m.c,n,n),A.M,B.c(m.a,n,2,A.a2,n,n,n,D.fJK,A.K,n,n),A.cQ,B.c(m.b,n,2,A.a2,n,n,n,D.fME,A.K,n,n)],x.p),A.l,n,A.ba,A.h,0,A.p),n,u,n,A.Dd,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}w=B.n(20)
v=B.n(20)
u=B.ap(L.mn,l,0.3)
u.toString
t=x.O
u=B.a([u,D.akF],t)
s=B.K(l.j(0.6),A.r,1.2)
r=x.V
q=B.a([new B.aa(-4,A.H,l.j(0.22),A.J,14)],r)
p=B.ap(l,A.v,0.45)
p.toString
t=B.a([l,p],t)
r=B.a([new B.aa(0,A.H,l.j(0.5),A.J,12)],r)
return B.aG(!1,A.a3,!0,n,B.aM(!1,w,!0,B.eJ(B.x(B.a([B.p(n,B.V(m.c,A.c,n,n,n,24),A.f,n,n,new B.o(n,n,n,n,r,new B.a8(A.ay,A.aD,A.x,t,n,n),A.a6),n,44,n,n,n,n,n,44),A.M,B.c(m.a,n,2,A.a2,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,10.5,n,n,A.u,n,1.15,!0,n,0.5,n,n,n,n,n,n),A.K,n,n),A.cQ,B.c(m.b,n,2,A.a2,n,n,n,B.l(n,n,A.c.j(0.6),n,n,n,n,n,n,n,n,9.5,n,n,n,n,1.2,!0,n,n,n,n,n,n,n,n),A.K,n,n)],x.p),A.l,n,A.ba,A.h,0,A.p),n,new B.o(n,n,s,v,q,new B.a8(A.ay,A.aD,A.x,u,n,n),A.m),n,A.Dd,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}}
C.afL.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.d,j=k.d,i=B.Q(d).ax.a===A.dh,h=(A.o.ao(this.c,3)&1)===0?A.aH:A.bl,g=B.n(20)
if(i)w=B.a87(h,20)
else{w=B.n(20)
v=B.ap(L.mn,A.d.gH(j),0.24)
v.toString
v=B.a([v,D.akF],x.O)
v=new B.o(l,l,B.K(A.d.gH(j).j(0.35),A.r,1),w,B.a([new B.aa(0,A.H,A.v.j(0.4),A.cz,12)],x.V),new B.a8(A.ay,A.aD,A.x,v,l,l),A.m)
w=v}v=x.p
u=B.a([],v)
for(t=k.e,s=x.V,r=x.O,q=0;q<3;++q){p=q===2?0:4
o=new B.aP(6,6)
if(i){n=B.ap(h,A.c,0.1)
n.toString
n=B.a([n,B.We(h,!0)[1]],r)}else n=B.a([A.d.gH(j),A.d.gal(j)],r)
m=i?l:B.a([new B.aa(0,A.H,A.v.j(0.45),A.aac,0)],s)
u.push(B.p(l,B.V(t[q],A.c,l,l,l,11),A.f,l,l,new B.o(l,l,l,new B.bb(o,o,o,o),m,new B.a8(A.a5,A.a9,A.x,n,l,l),A.m),l,17,l,new B.R(q*4,0,(2-q)*4,p),l,l,l,l))}u=B.x(u,A.l,l,A.e,A.N,0,A.p)
if(i)t=A.bC
else{t=B.ap(A.d.gH(j),A.d.gal(j),0.4)
t.toString}t=B.c(k.b,l,2,A.a2,l,l,l,B.l(l,l,t,l,l,l,l,l,l,l,l,10.5,l,l,A.u,l,1.2,!0,l,0.6,l,l,l,l,l,l),A.K,l,l)
return B.aG(!1,A.a3,!0,l,B.aM(!1,g,!0,B.eJ(B.x(B.a([new B.a5(58,l,u,l),A.R,t,A.at,B.V(A.DS,i?B.We(h,!0)[1]:A.d.gH(j),l,l,l,18)],v),A.l,l,A.ba,A.h,0,A.p),l,w,l,A.Dd,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,this.e,l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.ai)}}
C.RC.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ap(A.d.gal(i),A.v,0.62)
h.toString
w=k.c
v=k.d
h=B.ao(-8,new B.bQ(new B.o(h,j,j,B.n(22),j,j,A.m),A.bm,j,j),j,j,2,2,8,j)
u=B.n(22)
t=k.y
s=x.V
r=B.a([new B.aa(0,A.H,A.v.j(0.55),A.Kq,26),new B.aa(-6,A.H,A.d.gH(i).j(0.1+0.4*t),A.J,30)],s)
q=B.n(22)
p=B.ap(A.d.gH(i),A.c,0.14)
p.toString
o=A.d.gH(i)
n=A.d.gal(i)
i=B.ap(A.d.gal(i),A.v,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bS(0,new B.bQ(new B.o(j,j,j,j,j,new B.a8(A.ay,A.aD,A.x,B.a([p,o,n,i],m),D.dEJ,j),A.m),A.bm,j,j),0,0,0),B.ao(j,new B.bQ(new B.o(j,j,j,j,j,new B.a8(A.aX,A.b1,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.m),A.bm,j,j),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bS(0,B.b4(j,j,j,new C.bww(i,j),A.aA),0,0,0))
i=A.c.j(0.16)
p=B.K(A.c.j(0.5),A.r,1.4)
s=B.a([new B.aa(0,A.H,A.c.j(0.25*t),A.J,14)],s)
s=B.p(j,B.V(k.f,A.c,j,j,j,28),A.f,j,j,new B.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=B.a([B.c(k.r,j,j,j,j,j,j,D.fFP,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.u(p,B.a([A.at,B.c(i,j,1,A.a2,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a8,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.Lk)
p.push(B.p(j,j,A.f,j,j,new B.o(A.c.j(0.28),j,j,B.n(3),j,j,A.m),j,5,j,j,j,j,j,w*0.42))
m.push(new B.D(A.hd,B.A(B.a([s,A.ew,B.E(B.x(p,A.B,j,A.e,A.N,0,A.p),1)],l),A.l,j,A.e,A.h,0,j,j),j))
i=k.x
if(i>0)m.push(B.bS(0,new B.dv(!0,B.ei(j,A.v.j(A.i.D(i*0.6,0,0.7)),!0),j),0,0,0))
i=B.n(22)
m.push(B.bS(0,new B.dv(!0,new B.bQ(new B.o(j,j,B.K(A.c.j(0.3),A.r,1.2),i,j,j,A.m),A.bm,j,j),j),0,0,0))
return new B.a5(w,v,new B.an(A.a0,j,A.ad,A.f,B.a([h,B.bS(0,new B.bQ(new B.o(j,j,j,u,r,j,A.m),A.bm,B.bx(q,new B.an(A.a0,j,A.ad,A.t,m,j),A.aq),j),0,0,0)],l),j),j)}}
C.bww.prototype={
a4(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a4(r,-10,s,w)
u=d.c
J.bs(u.save())
u.translate(v.gbD().a,v.gbD().b)
d.jr(0,0.35)
t=B.bY(A.J,(w- -10)*1.6,s-r)
$.T()
s=B.L()
s.san(new B.a8(A.a5,A.a9,A.x,B.a([A.L,A.c.j(0.3),A.L],x.O),null,null).az(0,t))
d.aE(t,s)
u.restore()},
aD(d){return d.b!==this.b}}
C.bw0.prototype={
B(d){var w=null,v=B.n(22),u=B.a([D.bt_,D.ajI],x.O),t=this.e,s=B.K(A.d.gH(t).j(0.4),A.r,1.2),r=B.a([new B.aa(0,A.H,A.v.j(0.5),A.kP,24)],x.V),q=B.n(22),p=A.d.gH(t)
return new B.a5(this.c,this.d,new B.bQ(new B.o(w,w,s,v,r,new B.a8(A.ay,A.aD,A.x,u,w,w),A.m),A.bm,B.bx(q,B.b4(B.at(B.V(A.jF,A.d.gH(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.bdC(p,w),A.aA),A.aq),w),w)}}
C.bdC.prototype={
a4(d,e){var w,v,u,t,s,r
$.T()
w=B.L()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=0;s<u;s+=18)d.ah(new B.r(s,0),new B.r(s,t),w)
for(r=0;r<t;r+=18)d.ah(new B.r(0,r),new B.r(u,r),w)
u=e.eo(A.J)
$.T()
t=B.L()
t.b=A.ac
t.c=1.4
t.r=v.j(0.35).gp(0)
d.O(u,30,t)},
aD(d){return!1}}
C.aKn.prototype={
R(){return new C.aKo(new B.cA(null,x.A),null,null)}}
C.aKo.prototype={
gr1(){var w,v=this,u=v.d
if(u===$){w=B.br(null,D.bDJ,null,1,null,v)
w.cX(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
gJU(){var w,v=this,u=v.e
if(u===$){w=B.br(null,A.fY,null,1,null,v)
w.fl(0,!0)
v.e!==$&&B.bF()
v.e=w
u=w}return u},
gaA1(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gcdz(){var w=this.w
if(w===$){w=B.B(this.a.c.d,x.G)
this.w=w}return w},
gaZr(){var w=this.x
if(w===$){w=B.B(this.a.c.e,x.Z)
this.x=w}return w},
gb_e(){var w=this.y
if(w===$){w=B.B(this.a.c.f,x.N)
this.y=w}return w},
gbbl(){var w=this.z
if(w===$){w=B.B(this.a.c.r,x.N)
this.z=w}return w},
a_(){this.a3()
var w=this.gr1()
w.dq()
w.e_$.I(0,this.gcEn())},
cEo(){var w,v,u,t,s,r,q,p=this,o=p.gr1().x
o===$&&B.d()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as&&p.ch<0){switch(p.gaA1().a){case 0:w=D.og
break
case 1:w=D.vO
break
case 2:w=D.a6E
break
case 3:w=D.og
break
case 4:w=D.dqc
break
case 5:w=D.vO
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.aeY)r=0.09
else r=s===D.aeZ?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){G.dF(260+90*v,"",260,1.6,0.18,"tri")
u=D.cfg[v]
E.mH("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.K_("bell",D.co8,1400,0.35)}}p.ax=o},
t(){this.gr1().t()
this.gJU().t()
this.bCv()},
a0e(){var w=this
w.gr1().d3P(0,B.du(0,0,0,A.i.S(11e3/w.Q),0,0))
w.l(new C.ffb(w))},
cp0(){this.gr1().bQ(0)
this.l(new C.ffa(this))},
a0d(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$a0d=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:if(r.ch>=0){w=1
break}j=$.aU.bk$.x.h(0,r.f)
i=j==null?null:j.gbg()
if(!(i instanceof B.oq)||i.fy==null){w=1
break}h=r.as
j=r.gr1()
j.bQ(0)
g=r.gJU()
g.bQ(0)
r.l(new C.ff0(r))
f=i.ga0(0)
e=f.a
d=f.b
q=Math.min(3.5,1600/Math.max(e,d))
p=A.i.bc(e*q)
o=A.i.bc(d*q)
n=A.i.S(11/r.Q*20)
m=null
t=4
w=7
return B.b(E.aj9(24*q,20,new C.ff1(r,n,q,p,o),n,o,new C.ff2(r),p),$async$a0d)
case 7:l=a3
if(J.ad(l)===0){e=B.bc("empty")
throw B.Y(e)}e=r.a.c
d=B.ag("[^a-z0-9]+",!0,!1,!1,!1)
k=B.aL(e.b.toLowerCase(),d,"_")
w=8
return B.b(E.aTp(l,k),$async$a0d)
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
break}r.l(new C.ff3(r))
g.fl(0,!0)
j.sp(0,0)
if(h)r.a0e()
r.c.L(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.c(m,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a0d,v)},
afZ(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$afZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gb_e(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){q=t[r]
l.push(new B.au(new B.bd(q,A.b6,A.aP),$.az()))}m=B.a([],m)
for(t=u.gbbl(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){p=t[r]
m.push(new B.au(new B.bd(p,A.b6,A.aP),$.az()))}o=B.B(u.gaZr(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bU(L.mn,null,new C.ff9(u,l,m,o),t,!0,!0,!0,A.m8,!1,!1,x.H),$async$afZ)
case 2:l=B.B(l,x.bO)
A.d.u(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.V$=$.az()
n.W$=0}return B.h(null,v)}})
return B.i($async$afZ,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gaA1(),e=h.a.c,d=e.b,a0=h.gcdz(),a1=new C.Bm(f,d,e.c,a0,h.gaZr(),h.gb_e(),h.gbbl())
e=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
e.toString
f=x.p
w=B.a([B.aI(g,g,g,g,B.V(h.at?R.p2:A_.tR,A.ab,g,g,g,21),g,g,g,new C.ffj(h),g,g,g,g,"Sound",g),B.aI(g,g,g,g,D.c5u,g,g,g,h.gcdB(),g,g,g,g,"Edit words and pictures",g),B.aI(g,g,g,g,I.p5,g,g,g,new C.ffk(h,a2),g,g,g,g,"Share",g)],f)
v=B.a([B.ca(h.gJU(),new C.ffl(h,a1),g),B.cg(new C.ffm(h,a1))],f)
u=h.as
t=u?h.gcp_():h.gcdE()
u=u?D.bVs:A.tO
s=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
s.toString
t=B.A(B.a([B.aI(g,g,g,g,B.V(u,s,g,g,g,34),g,g,g,t,g,g,g,g,g,A.cn),B.E(B.ca(h.gr1(),new C.ffn(h,a2,a1),g),1),B.aI(g,g,g,g,D.c1z,g,g,g,new C.ffo(h),g,g,g,g,"Replay",A.cn)],f),A.l,g,A.e,A.h,0,g,g)
s=h.Q
u=A.i.a5(s,1)
r=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
r.toString
s=E.j6(r,u+"x","Speed",2.5,0.4,new C.ffp(h),s)
u=B.a([],f)
for(q=0;q<6;++q){p=D.dBC[q]
o=h.r
if(o===$)o=h.r=h.a.c.a
r=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
r.toString
u.push(new E.e1(p.b,o===p.a,new C.ffq(h,p),p.c,r,g))}r=B.a([],f)
for(n=x.G,q=0;q<10;++q){m=D.cfG[q]
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
r.push(B.aA(g,B.p(g,g,A.f,g,g,new B.o(g,g,new B.bE(i,i,i,i),g,g,new B.a8(A.ay,A.aD,A.x,m,g,g),A.a6),g,k,g,I.ana,g,g,g,l),A.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new C.ffr(h,m),g,g,g,g,g,g,!1,A.a4))}u=B.a([t,s,new E.fi(u,"STYLE",g),new E.fi(r,"THEME",g),A.ak],f)
t=h.ch
if(t>=0){s=B.n(6)
a0=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
a0.toString
u.push(new B.D(A.jX,B.x(B.a([B.bx(s,B.jE(A.bx,g,a0,8,g,t,g),A.aq),A.at,B.c("Making your GIF\u2026 "+A.i.S(h.ch*100)+"%",g,g,g,g,g,g,A.nw,g,g,g)],f),A.l,g,A.e,A.h,0,A.p),g))}else{f=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
f.toString
u.push(new B.a5(1/0,g,B.db(A.oc,g,D.hfI,h.gcdA(),B.bp(f,g,g,g,A.v,g,A.kK,g,g,g,g,g)),g))}return E.lW(e,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.e6(new B.an(A.a0,g,A.b4,A.t,v,g),h.f),d,B.x(u,A.l,g,A.e,A.N,0,A.p))},
bEF(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.og[r]
p=A.i.D((1-A.ej.aA(0,A.i.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.i.D(p/1.5707963267948966,0,1)
q=D.og[r]
n=q+0.12
m=A.i.D((a0-n)/(q+0.2-n),0,1)
n=D.og[r]
q=n-0.01
q=A.i.D((a0-q)/(n+0.03-q),0,1)
n=B.dy()
l=n.a
l.$flags&2&&B.ak(l)
l[11]=0.0013
n.jZ(p)
l=v[r]
k=u[r]
j=t[r]
i=D.og[r]
h=i+0.1
if(A.i.D((a0-h)/(i+0.3-h),0,1)>0){i=D.og[r]
h=i+0.1
h=A.i.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.og[r]
h=i+0.1
h=A.i.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cO(0,r*118,0,f,f,f,new B.l_(q,new B.j9(n,f,A.aX,!0,f,new C.RC(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.og[r]
u=v-0.02
g=A.i.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gH(w)
v=D.og[r]
t=v+0.12
e.push(new B.cO(0,r*118-3-2,0,f,f,4,new B.mT(new C.bv4(u,g,1-A.i.D((a0-t)/(v+0.22-t),0,1),f),f,A.aA,f,f),f))}return new B.a5(a2,358,new B.an(A.a0,f,A.ad,A.f,e,f),f)},
bVR(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.vO[r]
p=A.qZ.aA(0,A.i.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.vO[r]
m=q+0.15
l=A.i.D((a0-m)/(q+0.25-m),0,1)
m=D.vO[r]
q=m-0.03
q=A.i.D((a0-q)/(m+0.01-q),0,1)
m=B.dy()
k=m.a
k.$flags&2&&B.ak(k)
k[11]=0.0011
m.k0(n,n,n,1)
m.fI(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new C.RC(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dy()
k.fI(3.141592653589793)
k=new B.j9(k,f,A.z,!0,f,new C.bw0(a2,108,w,f),f)}e.push(new B.cO(0,r*130,0,f,f,f,new B.l_(q,new B.j9(m,f,A.z,!0,f,k,f),f),f))}return new B.a5(a2,378,new B.an(A.a0,f,A.ad,A.f,e,f),f)},
cJA(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a6E[w]
l.push(A.co.aA(0,A.i.D((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bS(0,B.b4(n,n,n,new C.byC(d.d,l,D.aCm,m,C.bvs(e,0.4,0.62),f,C.bvs(e,0.45,0.7),n),A.aA),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.hli(g,w)
q=D.aCm[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cO(r,s-q*m*p+12,n,n,t,n,new B.l_(o,B.V(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.hli(g,w)
r=D.a6E[w]
q=r+0.15
v.push(new B.cO(s,l,n,n,t,n,new B.l_(A.i.D((e-q)/(r+0.25-q),0,1),B.c(u[w],n,n,n,n,n,n,A.X9,A.K,n,n),n),n))}return new B.a5(g,m+90,new B.an(A.a0,n,A.ad,A.f,v,n),n)},
bL3(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.co.aA(0,C.bvs(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bS(0,B.at(B.dT(B.b4(f,f,f,new C.buu(A.d.gH(a1),C.bvs(a3,0,0.2),a4,f),new B.av(a5*0.95,70)),D.ewV),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.i.D((a3-l)/(0.12+m-l),0,1)
j=A.dQ.aA(0,A.i.D((o-0.7)/0.3,0,1))
l=B.dy()
m=l.a
m.$flags&2&&B.ak(m)
m[11]=0.001
l.fI(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.k0(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.i.F(r,1):-1
w.push(new B.y(o,new B.cO(0,0,0,0,f,f,new B.cm(A.z,f,f,new B.l_(k*(0.45+0.55*o),B.dT(new B.j9(l,f,A.z,!0,f,new C.RC(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.r(n*a5*0.34,-o*18)),f),f),f)))}A.d.b0(w,new C.feY())
A.d.u(a0,new B.O(w,new C.feZ(),x.fR))
return new B.a5(a5,330,new B.an(A.a0,f,A.ad,A.f,a0,f),f)},
cdy(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.vO[q]
o=A.i.D((a2-p)/(p+0.22-p),0,1)
n=A.nC.aA(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.vO[q]
m=A.i.D((a2-m)/(m+0.02-m),0,1)
l=D.aEu[q]
k=B.dy()
k.n5(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.k0(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.vO[q]
g=h+0.1
g=A.i.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cO(0,0,0,0,e,e,new B.cm(A.z,e,e,new B.l_(m,B.dT(new B.j9(k,e,A.z,!0,e,new C.RC(d,92,w,p,j,i,0,g*s,h,e),e),new B.r(0,l)),e),e),e))
l=D.vO[q]
h=l+0.02
f=A.i.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cO(0,0,0,0,e,e,new B.cm(A.z,e,e,B.dT(new B.mT(new C.bei(w,f,q,e),e,new B.av(r,212),e,e),new B.r(0,D.aEu[q])),e),e))}return new B.a5(a4,330,new B.an(A.a0,e,A.ad,A.f,a0,e),e)},
bHF(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.r(-b0,-150),new B.r(b0,-40),D.ex_],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.og[r]
p=A.i.D((a8-q)/(q+0.2-q),0,1)
o=A.co.aA(0,p)
q=D.aEE[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.og[r]
f=g+0.2
e=A.i.D((a8-f)/(g+0.3-f),0,1)
f=D.og[r]
g=f-0.01
g=A.i.D((a8-g)/(f+0.03-g),0,1)
f=B.dy()
d=f.a
d.$flags&2&&B.ak(d)
d[11]=0.001
f.n5(l*h+D.duI[r]*o)
f.fI(l*0.9)
h=0.55+0.45*o
f.k0(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cO(0,0,0,0,a3,a3,new B.cm(A.z,a3,a3,new B.l_(g,B.dT(new B.j9(f,a3,A.z,!0,a3,new C.RC(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.r(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.og[r]
i=q+0.17
a2=A.i.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aEE[r]
a6.push(new B.cO(0,0,0,0,a3,a3,new B.cm(A.z,a3,a3,B.dT(new B.mT(new C.buw(A.d.gH(w),a2,a3),a3,new B.av(a4,30),a3,a3),new B.r(0,q+48-4)),a3),a3))}}return new B.a5(b0,330,new B.an(A.a0,a3,A.ad,A.f,a6,a3),a3)}}
C.bv4.prototype={
a4(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a4(w-v,0,w+v,e.b)
q=B.by(u,A.hE)
$.T()
t=B.L()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.y=N.oT
d.aq(q,t)
t=B.by(u,A.hE)
q=B.L()
q.r=A.c.j(s).gp(0)
d.aq(t,q)},
aD(d){return d.c!==this.c||d.d!==this.d}}
C.buu.prototype={
a4(d,e){var w,v,u=this.c,t=B.bY(e.eo(A.J),e.b*u,e.a*u)
$.T()
u=B.L()
u.b=A.ac
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.y=Z.Pw
d.c1(t,u)
u=B.L()
u.b=A.ac
u.c=2.5
u.r=w.j(0.7).gp(0)
d.c1(t,u)
u=t.cs(-14)
v=B.L()
v.b=A.ac
v.c=1
v.r=w.j(0.3).gp(0)
d.c1(u,v)},
aD(d){return!0}}
C.bei.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.eo(A.J),h=this.c,g=A.co.aA(0,h)
$.T()
w=B.L()
w.b=A.ac
v=1-h
w.c=5*v
u=this.b
w.r=A.d.gH(u).j(0.6*v).gp(0)
d.O(i,40+g*e.a*0.42,w)
t=new B.e2()
t.cT(this.d*17+3)
for(w=40*h*h*3,s=i.a,r=i.b,h=1-h*0.6,q=0;q<26;++q){p=t.ai()*3.141592653589793*2
o=(40+t.ai()*110)*g
n=Math.cos(p)
m=Math.sin(p)
l=t.ai()
k=new B.as(A.T,A.Q,A.W,A.X,A.V)
j=(q&1)===0?A.d.gH(u):A.c
k.r=j.j(A.i.D(v,0,1)).gp(0)
d.O(new B.r(s+n*o*1.6,r+(m*o+w)),(2+l*3)*h,k)}},
aD(d){return!0}}
C.buw.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o=e.eo(A.J)
for(w=e.a,v=e.b,u=this.b,t=this.c,s=0;s<2;++s){r=A.i.D(t-s*0.18,0,1)
if(r<=0)continue
q=B.bY(o,v*(0.3+r*0.9),w*(0.5+r*0.7))
$.T()
p=new B.as(A.T,A.Q,A.W,A.X,A.V)
p.b=A.ac
p.c=2
p.r=u.j((1-r)*0.7).gp(0)
d.c1(q,p)}},
aD(d){return d.c!==this.c}}
C.byC.prototype={
a4(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2=c0.e,c3=c2+36,c4=d2.a,c5=c4*0.23,c6=c5*0.34,c7=c6*0.85,c8=-c6*0.5,c9=c3-4,d0=new B.a4(0,c9,0+c4,c9+60)
$.T()
c9=B.L()
w=c0.b
v=x.O
c9.san(new B.a8(A.aX,A.b1,A.x,B.a([A.d.gH(w).j(0.18),A.L],v),c1,c1).az(0,d0))
d1.aE(d0,c9)
c9=B.L()
c9.r=A.c.j(0.18).gp(0)
c9.c=1
d1.ah(new B.r(0,c3),new B.r(c4,c3),c9)
for(c9=c0.w,u=c9>0,t=(c5-16)/3,s=t-5,r=0.6+0.3*c0.r,q=c0.f,p=c3-14,o=x.v,n=c3+c8,m=c0.d,l=c3-6,k=c5+c7+8,j=l+16,i=c0.c,h=c9<1,g=d1.c,f=0;f<3;++f){e=i[f]
if(e<=0)continue
d=C.hli(c4,f)
a0=m[f]*c2*e
a1=d-4
a2=$.T()
a3=new B.as(A.T,A.Q,A.W,A.X,A.V)
a3.r=A.v.j(0.5).gp(0)
a3.y=A.nh
d1.c1(new B.a4(a1,l,a1+k,j),a3)
a3=c3-a0
a1=d+c5
a4=new B.a4(d,a3,a1,a3+a0)
a5=new B.as(A.T,A.Q,A.W,A.X,A.V)
a6=B.ap(A.d.gH(w),A.c,0.1)
a6.toString
a5.san(new B.a8(A.aX,A.b1,A.x,B.a([a6,A.d.gal(w)],v),c1,c1).az(0,a4))
d1.aE(a4,a5)
a2=a2.r
a5=B.a([],o)
a7=new B.aH(a2,A.aj,c1,c1,a5)
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
a9=new B.bA()
a5.push(a9)
a5=a7.f
if(a5!=null)a9.aj(a5)
a7.ac()
a5=new B.as(A.T,A.Q,A.W,A.X,A.V)
a5.r=B.ap(A.d.gal(w),A.v,0.5).gp(0)
d1.af(a7,a5)
a5=B.a([],o)
b1=new B.aH(a2,A.aj,c1,c1,a5)
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
a2=new B.bA()
a5.push(a2)
a5=b1.f
if(a5!=null)a2.aj(a5)
b1.ac()
a2=new B.as(A.T,A.Q,A.W,A.X,A.V)
a2.r=B.ap(A.d.gH(w),A.c,0.45).gp(0)
d1.af(b1,a2)
b2=new B.as(A.T,A.Q,A.W,A.X,A.V)
b2.b=A.ac
b2.c=1
b2.r=A.c.j(0.28).gp(0)
d1.aE(a4,b2)
d1.af(a7,b2)
d1.af(b1,b2)
b3=A.i.bc(a0/22)
for(a2=a3+6,a3=d+8,a5=q*b3*1.3,b4=0;b4<b3;++b4){b5=a5>b3-b4-1
for(a6=p-b4*22-12,a8=a6<a2,a9=a6+10,b6=0;b6<3;++b6){b7=a3+b6*t
if(a8)continue
b0=B.by(new B.a4(b7,a6,b7+s,a9),A.hE)
$.T()
b8=new B.as(A.T,A.Q,A.W,A.X,A.V)
b8.r=(b5?A.c.j(r):A.v.j(0.22)).gp(0)
d1.aq(b0,b8)}}if(u&&h){a2=c3-a0*c9-14
b9=new B.a4(d,a2,a1,a2+28)
J.bs(g.save())
g.clipRect(B.hR(a4),$.lD()[1],!0)
$.T()
a2=new B.as(A.T,A.Q,A.W,A.X,A.V)
a2.san(new B.a8(A.aX,A.b1,A.x,B.a([A.L,A.c.j(0.4),A.L],v),c1,c1).az(0,b9))
d1.aE(b9,a2)
g.restore()}}},
aD(d){return!0}}
C.aQb.prototype={
aZ(){this.b7()
this.b5()
this.dU()},
t(){var w=this,v=w.bd$
if(v!=null)v.a8(0,w.gdR())
w.bd$=null
w.a2()}}
C.a2d.prototype={
a9(){return"_Role."+this.b}}
C.qJ.prototype={}
C.rs.prototype={}
C.Dn.prototype={}
C.a0b.prototype={}
C.agI.prototype={}
C.a2q.prototype={
ga0(d){return this.d}}
C.Dy.prototype={}
C.adA.prototype={}
C.adS.prototype={}
C.afO.prototype={}
C.bkZ.prototype={
a4v(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
G.dF(d,"",e,g,h,f)},
bcu(d,e,f){return this.a4v(d,e,f,0,0.55)},
aEO(d,e,f,g){return this.a4v(d,e,f,0,g)},
bcv(d,e,f,g){return this.a4v(d,e,f,g,0.55)},
a6(d){var w=this
w.a.a6(0)
A.d.a6(w.b)
A.d.a6(w.c)
A.d.a6(w.d)
A.d.a6(w.e)
A.d.a6(w.f)
A.d.a6(w.r)
A.d.a6(w.w)
A.d.a6(w.x)
w.y.a6(0)
w.Q.a6(0)
w.as.a6(0)
w.b3()},
amc(d,e,f,g){var w="n"+this.ay++,v=new C.rs(w,e,f,g)
this.a.n(0,w,v)
this.b3()
return v},
tk(d,e,f){return this.amc(0,e,f,0)},
X(d,e){var w=this
w.a.X(0,e)
A.d.bq(w.b,new C.dul(e))
A.d.bq(w.c,new C.dum(e))
w.b3()},
bgm(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.nn.h(0,v.b).c===D.yu)return!1
w=this.b
if(A.d.aR(w,new C.dui(d,e)))return!1
w.push(new C.Dn(d,e))
this.b3()
return!0},
c55(d){var w
if(d.b==="beat")return D.cok[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.av(500)
case 2:return 1400+w.av(2200)
default:return 450+w.av(2000)}},
aIn(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.aEV[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.Dy(u,t,j.ax,90))
w.push(new C.Dy(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ai()*3.141592653589793*2
v.push(new C.a2q(u,new B.r(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.bcu(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ai()*3.141592653589793*2
p=100+w.ai()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ap(t,A.c,w.ai()*0.5)
m.toString
v.push(new C.a2q(u,new B.r(o*p,n*p),m,3+w.ai()*4.5,1000+w.av(700),j.ax))}j.f.push(new C.Dy(u,t,j.ax,120))
j.aEO(120,200,"noise",0.5)
j.bcu(261.63*Math.pow(2,([7,12,16,19][w.av(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.Dy(u,t,j.ax,230))
w.push(new C.Dy(u,t,j.ax+160,160))
w.push(new C.Dy(u,t,j.ax+320,100))
j.bcv(180+j.at.av(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.adA(u,new B.r((w.ai()-0.5)*220,-260-w.ai()*180),t,j.ax))
j.bcv(300+w.av(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ai()*3.141592653589793*2
j.w.push(new C.adS(u,u.a7(0,new B.r(Math.cos(q),Math.sin(q)).aO(0,260+w.ai()*200)),t,j.ax))
j.a4v(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fW()
j.a4v(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.afO(u,D.aEg[v],t,j.ax))
j.aEO(261.63*Math.pow(2,([0,5,9,12][j.at.av(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aEO(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.cko[A.o.F(w,3)]
for(k=1;k<=3;++k)j.czj(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new B.eQ(w,new C.duj(d));v.C();)j.aDh(w.gP(0),j.ax+D.cwS[A.o.F(g.d,4)])
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
case"chance":s=j.at.av(100)<D.cOi[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new B.eQ(w,new C.duk(d));v.C();)j.aDh(w.gP(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.xN(w,0,v-700)},
czj(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.a0b(e,"~"+d))},
aDh(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.agI(d.a,v,e,w))
u.push(new C.a0b(w,v))},
a8h(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=B.a3(w).k("ba<2>")
w=B.B(new B.ba(w,v),v.k("M.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aIn(r)
u.n(0,r,o.ax+o.c55(s))}}w=o.c
v=B.U(w).k("X<1>")
q=B.B(new B.X(w,new C.dun(o),v),v.k("M.E"))
if(q.length!==0){A.d.bq(w,new C.duo(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.I)(q),++t){u=q[t].b
if(A.a.Y(u,"~")){p=A.a.aY(u,1)
for(u=A.d.gae(v),r=new B.eQ(u,new C.dup(p));r.C();)o.aDh(u.gP(0),o.ax)}else o.aIn(u)}}A.d.bq(o.d,new C.duq(o))
A.d.bq(o.e,new C.dur(o))
A.d.bq(o.f,new C.dus(o))
A.d.bq(o.w,new C.dut(o))
A.d.bq(o.x,new C.duu(o))
A.d.bq(o.r,new C.duv(o))
o.b3()},
vS(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
ak(){var w,v,u,t,s,r,q,p,o,n,m=this.cy,l=m.a
if(l<=0)l=1
w=m.b
if(w<=0)w=1
m=B.a([],x.B)
for(v=this.a,v=new B.dq(v,v.r,v.e),u=x.N,t=x.K;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(B.J(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=B.a([],x.E)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,B.I)(t),++o){n=t[o]
v.push(B.a([n.a,n.b],r))}return A.U.au(B.J(["nodes",m,"edges",v],u,x.ew),null)},
UU(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.U.aP(0,d,null))
k.a6(0)
for(o=x.j,n=J.aQ(o.a(J.t(w,"nodes"))),m=k.a;n.C();){v=n.gP(n)
u=B.v(J.t(v,"k"))
if(!D.nn.am(0,u))continue
t=B.v(J.t(v,"id"))
m.n(0,t,new C.rs(t,u,new B.r(B.dH(J.t(v,"x"))*k.cy.a,B.dH(J.t(v,"y"))*k.cy.b),A.i.M(B.dH(J.t(v,"p")))))
s=B.c8(B.aL(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aQ(o.a(J.t(w,"edges"))),n=k.b;o.C();){r=o.gP(o)
q=B.v(J.t(r,0))
p=B.v(J.t(r,1))
if(m.am(0,q)&&m.am(0,p))n.push(new C.Dn(q,p))}k.b3()
return!0}catch(l){return!1}},
cZd(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a6(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.rs(n,r,new B.r(q*p.a,o*p.b),s))
l.b3()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bgm(w[m.a],w[m.b])}},
ga0(d){return this.cy}}
C.GY.prototype={}
C.XH.prototype={
R(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aHi(new C.bkZ(B.S(w,x.f3),v,u,t,s,r,q,p,o,B.S(w,n),B.S(w,n),B.S(w,n),B.S(w,n),A.cV,A.L,A.aA,$.az()),A.bH,A.J,A.J,A.Z,null,null)}}
C.aHi.prototype={
aep(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$aep=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.aB(),$async$aep)
case 6:q=n.kh(m.t(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.l(new C.eCx(s))
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
return B.i($async$aep,v)},
abj(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$abj=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.l(new C.eCm(s))
u=3
w=6
return B.b(B.aB(),$async$abj)
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
return B.i($async$abj,v)},
bR7(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a3(n).k("ba<2>")
v=""+n.a+"|"+o.length+"|"+new B.ba(n,w).cD(0,0,new C.eCo())+"|"+A.d.cD(o,0,new C.eCp())
if(v===p.ch)return p.CW
u=new C.eCs()
t=x.s
s=B.a([],t)
r=new C.eCt(p,s,u)
for(n=new B.ba(n,w).gae(0),w=new B.eQ(n,new C.eCq());w.C();){q=n.gP(0)
if(!A.d.aR(o,new C.eCr(q)))s.push(B.v(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.cU(s,0,B.dA(5,"count",x.S),x.N).dk(0)},
a_(){var w,v=this
v.a3()
v.aep()
v.d.db=v.ay
w=v.q9(new C.eCX(v))
w.fR(0)
v.e!==$&&B.aS()
v.e=w},
t(){var w=this,v=w.as
if(v!=null)v.a1(0)
v=w.e
v===$&&B.d()
v.t()
v=w.d
v.V$=$.az()
v.W$=0
w.bBw()},
adV(d){return this.c4w(d)},
c4w(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$adV=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.aB(),$async$adV)
case 6:q=m.aV(l.t(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.UU(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.b_G(A.d.gH(D.aDI))
if(s.c!=null)s.l(new C.eCw())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$adV,v)},
b_G(d){this.d.cZd(0,d.c,d.d)
this.F5()},
F5(){var w=this.as
if(w!=null)w.a1(0)
this.as=B.cB(A.lX,new C.eCi(this))},
aA2(d){var w,v,u,t,s=this.d.a,r=B.a3(s).k("ba<2>")
s=B.B(new B.ba(s,r),r.k("M.E"))
r=B.U(s).k("dr<1>")
s=new B.dr(s,r)
s=new B.bP(s,s.gJ(0),r.k("bP<aj.E>"))
w=d.a
r=r.k("aj.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cmV(d){var w,v,u,t,s,r=this.d.a,q=B.a3(r).k("ba<2>")
r=B.B(new B.ba(r,q),q.k("M.E"))
q=B.U(r).k("dr<1>")
r=new B.dr(r,q)
r=new B.bP(r,r.gJ(0),q.k("bP<aj.E>"))
w=d.a
v=d.b
q=q.k("aj.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c4k(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.nn.h(0,r.b).c===D.yu)continue
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
cdH(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hKN(new B.r(n.a+36,n.b+0),new B.r(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cHd(d){var w,v,u,t,s,r,q=this,p=q.aA2(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.f2()
u=v.b
if(u==="button"){w.aIn(p)
return}if(q.r)return
t=D.nn.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.rR)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.b3()
q.F5()
return}if(q.r)return
r=q.cdH(d)
if(r!=null){w=q.d
A.d.cJ(w.b,r)
w.b3()
q.F5()}},
coh(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cmV(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.aA2(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aI(0,d)}},
coi(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b3()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.r(A.i.D(d.a+s.y.a,46,t.a-46),A.i.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b3()}}},
b5g(){var w,v,u=this
if(u.z!=null){w=u.c4k(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bgm(v,w)}else v=!1
if(v){B.k8()
u.F5()}u.z=null
u.d.b3()}else if(u.x!=null){if(u.at)u.F5()
u.x=null}},
aeD(d){return this.c7C(d)},
c7C(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$aeD=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.aA2(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jD()
p=t.c
p.toString
w=3
return B.b(B.bU(L.mn,null,new C.eCz(q),p,!0,!0,!1,A.m8,!1,!1,x.y),$async$aeD)
case 3:if(f===!0){r.X(0,s)
t.F5()}case 1:return B.h(u,v)}})
return B.i($async$aeD,v)},
cdF(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.tk(0,d,new B.r(v.a*(0.25+u.ai()*0.5),v.b*(0.2+u.ai()*0.55)))
B.f2()
this.F5()},
aiF(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aiF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bU(L.mn,null,new C.eCB(),s,!0,!0,!0,A.m8,!1,!1,x.es),$async$aiF)
case 2:t=e
if(t!=null)u.b_G(t)
return B.h(null,v)}})
return B.i($async$aiF,v)},
ag_(d){var w=0,v=B.j(x.H),u=this,t
var $async$ag_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.ce(null,null,!0,null,new C.eCl(),t,null,!0,!0,x.y),$async$ag_)
case 2:if(f===!0){u.d.a6(0)
u.F5()}return B.h(null,v)}})
return B.i($async$ag_,v)},
B(d){var w=this,v=null,u=B.a([B.aki(w.r?new B.bK(A.a5,v,v,new B.D(A.HU,B.hv(D.c_j,D.fXZ,new C.eCV(w),v),v),v):w.cdI(),A.aZ,A.j1),B.E(B.cg(new C.eCW(w)),1)],x.p)
if(!w.r)u.push(w.cBS())
return B.c5(v,A.c7,B.bo(!0,B.x(u,A.l,v,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)},
bMN(){var w=null,v=new C.eCn(),u=A.v.j(0.7),t=B.n(26),s=B.K(A.bw.j(0.5),A.r,1)
return B.bS(0,B.ei(B.at(B.p(w,B.cb(B.x(B.a([D.h8B,A.at,D.hgt,A.aB,v.$4(A.mw,A.bw,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(X.DO,A.cw,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.kl,A.c5,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.Ql,A.bu,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.hfL,new B.bK(A.a9,w,w,B.bM(!1,D.h5F,w,w,!0,w,w,w,this.gbMG(),w,w),w)],x.p),A.B,w,A.e,A.N,0,A.p),A.t,w,A.y,w,w,w,w,w,A.ah),A.f,w,A.YW,new B.o(L.mn,w,s,t,w,w,A.m),w,w,w,A.f9,Ab.aou,w,w,w),w,w,w),u,!0),0,0,0)},
cdI(){var w=this,v=null,u=B.aI(v,v,v,v,At.nl,v,v,v,new C.eCH(w),v,v,v,v,v,v),t=w.aaK(A.DG,"How it works",new C.eCI(w),!0),s=w.ay?R.p2:A_.tR
return new B.D(D.bKI,B.A(B.a([u,D.bMo,t,w.aaK(s,"Sound",new C.eCJ(w),!0),w.aaK(A.eg,"Ideas",w.gcs7(),!0),w.aaK(I.xj,"Clear",w.gcdG(w),!0),w.aRg(A.fN,"Show",new C.eCK(w),!0,!0)],x.p),A.l,v,A.e,A.h,0,v,v),v)},
aRg(d,e,f,g,h){var w=null,v=h?A.bw:A.c.j(0.08),u=B.n(14),t=B.n(14),s=B.a([B.V(d,h?A.v:A.c,w,w,w,20)],x.p)
return new B.D(Ap.xa,B.aG(!1,A.a3,!0,u,B.aM(!1,t,!0,B.h9(new B.D(new B.R(8,8,8,8),B.A(s,A.l,w,A.e,A.N,0,w,w),w),w,e,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ai),w)},
aaK(d,e,f,g){return this.aRg(d,e,f,g,!1)},
cBS(){var w=null,v=new C.eCD(this),u=A.c.j(0.08)
return B.p(w,B.cb(B.A(B.a([v.$2("START",D.yu),v.$2("CHANGE",D.G1),v.$2("REACT",D.rR)],x.p),A.B,w,A.e,A.h,0,w,w),A.t,w,A.y,w,w,w,w,w,A.aK),A.f,w,w,new B.o(L.CA,w,new B.bE(new B.ax(u,1,A.r,-1),A.a1,A.a1,A.a1),w,w,w,A.m),w,w,w,w,D.bFF,w,w,w)},
cBT(d){var w,v,u,t,s=null,r=D.nn.h(0,d)
r.toString
w=B.n(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.K(v.j(0.5),A.r,1)
return new B.D(A.f7,B.aA(s,B.p(s,B.x(B.a([B.V(r.b,v,s,s,s,22),A.cQ,B.c(r.a,s,1,A.a2,s,s,s,D.aYq,s,s,s)],x.p),A.l,s,A.e,A.N,0,A.p),A.f,s,s,new B.o(s,s,t,w,s,new B.a8(A.aX,A.b1,A.x,u,s,s),A.m),s,s,s,s,A.hz,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eCC(this,d),s,s,s,s,s,s,!1,A.a4),s)}}
C.bl_.prototype={
a4(b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=b2.b,b5=b4.ax,b6=b7.c
J.bs(b6.save())
w=b4.ch
if(b5<w){v=(w-b5)/380
b6.translate(Math.sin(b5*0.09)*9*v,Math.cos(b5*0.13)*7*v)}$.T()
u=B.L()
u.r=A.c.j(0.05).gp(0)
for(w=b8.b,t=b8.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28)b7.O(new B.r(r,s),1,u)
q=b4.CW
if(b5<q){$.T()
p=B.L()
p.r=b4.cx.j(0.4*((q-b5)/800)).gp(0)
b7.aE(new B.a4(0,0,0+t,0+w),p)}for(w=b4.b,t=w.length,q=x.O,p=x.v,o=b4.a,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){m=w[n]
l=o.h(0,m.a)
k=o.h(0,m.b)
if(l==null||k==null)continue
j=l.c
i=j.a+36
j=j.b+0
h=k.c
g=h.a-36
h=h.b
f=$.T()
e=B.a([],p)
d=new B.aH(f.r,A.aj,b3,b3,e)
e.push(new B.aZ(i,j))
d.ac()
a0=Math.max(40,Math.abs(g-i)*0.5)
f=new B.i6(i+a0,j,g-a0,h,g,h)
e.push(f)
e=d.f
if(e!=null)f.aj(e)
d.ac()
a1=D.nn.h(0,l.b).d
a2=D.nn.h(0,k.b).d
f=new B.as(A.T,A.Q,A.W,A.X,A.V)
f.b=A.ac
f.c=3
f.d=A.bG
e=B.a([a1.j(0.55),a2.j(0.55)],q)
h=B.rc(new B.r(i,j),new B.r(g,h))
f.san(new B.a8(A.a5,A.a9,A.x,e,b3,b3).az(0,new B.a4(h.a-2,h.b-2,h.c+2,h.d+2)))
b7.af(d,f)}for(w=b4.d,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a3=w[n]
l=o.h(0,a3.a)
k=o.h(0,a3.b)
if(l==null||k==null)continue
j=a3.c
a4=A.i.D((b5-j)/(a3.d-j),0,1)
j=l.c
i=k.c
a5=C.hKN(new B.r(j.a+36,j.b+0),new B.r(i.a-36,i.b),a4)
$.T()
i=new B.as(A.T,A.Q,A.W,A.X,A.V)
i.r=A.c.j(0.35).gp(0)
i.y=N.oT
b7.O(a5,8,i)
i=new B.as(A.T,A.Q,A.W,A.X,A.V)
i.r=A.c.gp(0)
b7.O(a5,4,i)}a6=b2.d.$0()
if(a6!=null&&o.h(0,a6)!=null){a7=o.h(0,a6).c.a7(0,D.Kt)
a8=b2.e.$0()
w=a8.a
t=a7.a
a0=Math.max(40,Math.abs(w-t)*0.5)
d=new B.aH($.T().r,A.aj,b3,b3,B.a([],p))
p=a7.b
d.E(new B.aZ(t,p))
j=a8.b
d.E(new B.i6(t+a0,p,w-a0,j,w,j))
j=B.L()
j.b=A.ac
j.c=3
j.r=A.c.j(0.7).gp(0)
b7.af(d,j)
j=B.L()
j.r=A.c.gp(0)
b7.O(a8,7,j)}for(w=b4.f,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a9=w[n]
p=a9.c
v=A.i.D((b5-p)/700,0,1)
if(b5<p)continue
p=A.eb.aA(0,v)
$.T()
j=new B.as(A.T,A.Q,A.W,A.X,A.V)
j.b=A.ac
i=1-v
j.c=3.5*i+0.5
j.r=a9.b.j(i*0.9).gp(0)
b7.O(a9.a,14+a9.d*p,j)}for(w=b4.w,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){b0=w[n]
v=A.i.D((b5-b0.d)/600,0,1)
p=b0.a
j=b0.b
i=B.kZ(p,j,A.eb.aA(0,v))
i.toString
j=B.kZ(p,j,A.eb.aA(0,A.i.D(v-0.35,0,1)))
j.toString
$.T()
p=new B.as(A.T,A.Q,A.W,A.X,A.V)
p.c=5
p.d=A.bG
h=b0.c
g=B.a([h.j(0),h],q)
f=B.rc(j,i)
p.san(new B.a8(A.a5,A.a9,A.x,g,b3,b3).az(0,new B.a4(f.a-4,f.b-4,f.c+4,f.d+4)))
b7.ah(j,i,p)
p=new B.as(A.T,A.Q,A.W,A.X,A.V)
p.r=A.c.gp(0)
b7.O(i,6,p)
p=new B.as(A.T,A.Q,A.W,A.X,A.V)
p.r=h.j(0.5*(1-v)).gp(0)
p.y=A.l7
b7.O(i,12,p)}for(w=b4.e,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a3=w[n]
v=A.i.D((b5-a3.f)/a3.e,0,1)
p=a3.a
$.T()
j=new B.as(A.T,A.Q,A.W,A.X,A.V)
j.r=a3.c.j(1-v).gp(0)
b7.O(p,a3.d*(1-0.5*v),j)}for(w=b4.r,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){k=w[n]
p=k.a
$.T()
j=new B.as(A.T,A.Q,A.W,A.X,A.V)
i=k.c
j.r=i.j(0.35).gp(0)
j.y=A.l7
b7.O(p,11,j)
j=k.a
p=new B.as(A.T,A.Q,A.W,A.X,A.V)
p.san(new B.bT(Af.BT,0.5,A.x,b3,0,B.a([A.c,i],q),b3,b3).az(0,B.bX(k.a,8)))
b7.O(j,8,p)}for(b4=b4.x,w=b4.length,n=0;n<b4.length;b4.length===w||(0,B.I)(b4),++n){a5=b4[n]
v=A.i.D((b5-a5.d)/1000,0,1)
t=1-v
b1=C.bl0(a5.b,26+8*t,a5.c.j(t),b3,b3,A.u)
t=a5.a
q=b1.b
p=q.c
q=q.a.c
b1.a4(b7,new B.r(t.a-p/2,t.b-(40+60*v+q.gb8(q)/2)))}for(b4=new B.dq(o,o.r,o.e);b4.C();)b2.cnO(b7,b4.d,b5)
b6.restore()},
cnO(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.nn.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.i.D(1-(f-w)/520,0,1)
u=B.bY(e.c,64,64)
t=B.by(u,A.i5)
s=t.eI(A.cz)
$.T()
r=B.L()
r.r=A.v.j(0.55).gp(0)
r.y=A.nh
d.aq(s,r)
if(v>0){s=t.cs(6)
r=B.L()
r.r=h.d.j(0.6*v).gp(0)
r.y=A.Di
d.aq(s,r)}s=t.eI(A.cP)
r=B.L()
q=h.d
r.r=B.ap(q,A.v,0.65).gp(0)
d.aq(s,r)
r=B.L()
s=B.ap(q,A.c,0.18+0.4*v)
s.toString
p=B.ap(q,A.v,0.35)
p.toString
r.san(new B.a8(A.aX,A.b1,A.x,B.a([s,p],x.O),j,j).az(0,u))
d.aq(t,r)
r=B.L()
r.b=A.ac
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aq(t,r)
r=h.b
p=e.c
o=C.bl0(B.lx(r.a),30,A.c,r.b,j,A.E)
r=o.b
s=r.c
r=r.a.c
o.a4(d,p.aI(0,new B.r(s/2,r.gb8(r)/2)))
n=C.bl0(h.a,11,A.c,j,j,A.E)
n.a4(d,e.c.a7(0,new B.r(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.aEg[A.o.F(e.d,6)]:j
h=h.c
if(h===D.rR){s=e.c.a7(0,new B.r(0,62))
r=B.L()
r.r=D.aEV[A.o.F(e.d,6)].gp(0)
d.O(s,5,r)}else if(m!=null){l=C.bl0(m,9.5,A.aF,j,j,A.O)
l.a4(d,e.c.a7(0,new B.r(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bl0(m,9.5,A.aF,j,j,A.O)
l.a4(d,e.c.a7(0,new B.r(-l.b.c/2,54)))}if(k.c)return
if(h!==D.yu)k.b65(d,e.c.aI(0,D.Kt),q)
k.b65(d,e.c.a7(0,D.Kt),q)},
b65(d,e,f){var w
$.T()
w=B.L()
w.r=A.c7.gp(0)
d.O(e,9,w)
w=B.L()
w.b=A.ac
w.c=2.2
w.r=f.gp(0)
d.O(e,9,w)
w=B.L()
w.r=A.c.gp(0)
d.O(e,3.5,w)},
aD(d){return!0}}
C.aPj.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.er.prototype={}
C.u8.prototype={
at5(d,e,f,g){var w=this
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
C.ace.prototype={}
C.adm.prototype={}
C.a6h.prototype={
bif(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.h9()?-1:1
v=t.ai()*3.141592653589793*2
u=f*(0.3+t.ai())
s.push(new C.ace(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ai()*0.45));++r}},
c9P(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bq(w,new C.bS6())},
amc(d,e,f,g){var w="p"+this.c++,v=new C.u8(w,e,f,g)
v.at5(w,e,f,g)
this.a.push(v)
return v},
X(d,e){A.d.X(this.a,e)
A.d.bq(this.b,new C.bSh(e))},
a6(d){A.d.a6(this.a)
A.d.a6(this.b)},
cQ7(d,e,f,g,h){return A.d.aR(this.b,new C.bSc(e,f,g,h))},
an0(d,e,f,g){var w
if(d===f||this.cQ7(0,d,e,f,g))return null
w=new C.adm(d,e,f,g)
this.b.push(w)
return w},
aDP(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
Az(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
apO(d){return this.MS(d)&&!d.x&&d.cx>this.Az(d)},
bav(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
MS(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
ce1(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.AP.h(0,v)
if(w!=null)return w.a
return 100},
vS(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c9P(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.U(v).k("X<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.I)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.X(v,new C.bSi(a2),t).cD(0,0,new C.bSj(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.S(x.N,u)
n=new C.bSl(o)
m=B.a([],x.t)
l=new C.bSk(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.I)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.I)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.S(u,u)
f=new C.bSn(g,l,n)
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
a2.bar(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.Az(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.bar(e,d,w,!0)
a2.bTt(a4)},
bar(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.S(x.N,b3),b5=new C.bS8(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bS7(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.I)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bSa(B.S(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.I)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=B.c2(b7,0,!1,b3)
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
if(h)B.bi(B.dK(g,null))
e=B.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=B.c2(b7,0,!1,b3)
a0=B.c2(b7,0,!1,b3)
k.a6(0)
j.a6(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.I)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.bav(t)*(1+t.CW))
a4=b2.aDP(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.ce1(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bWR(e,a0,b8)
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
bWR(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return B.c2(d,0,!1,x.i)
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
t[m]=t[m]-g*u[l][m]}}}f=B.c2(d,0,!1,x.i)
for(e=0;e<v;++e){t=u[e]
h=t[e]
s=a0[e]
f[s]=Math.abs(h)<1e-14?0:t[v]/h}return f},
bTt(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.I)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aDP(o)/a1.bav(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.Az(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bLo(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bif(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.uw(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.uw(o,"The "+$.qS().h(0,n).b+" got "+A.i.a5(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.uw(o,"More than 1.5 amps went through the "+$.qS().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.uw(o,"The regulator had to turn "+A.i.a5(o.cy,1)+" V into heat while "+A.i.S(i*1000)+" mA flowed. That is "+A.i.a5(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.uw(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.AP.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qS().h(0,n).b
l=f.b
l=l===A.i.fO(l)?""+A.i.S(l):B.v(l)
g=f.c
g=g===A.i.fO(g)?""+A.i.S(g):B.v(g)
a1.uw(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.i.a5(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.fqV.q(0,n)){m=o.fx>0?A.i.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.i.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.uw(o,"The bulb got "+A.i.a5(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.i.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.uw(o,"The LED had "+A.i.S(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.i.D(j/14,0,1)
break
case"motor":n=A.i.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.i.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.uw(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.i.D(i/1,0,1)
if(!o.x&&i>1)a1.uw(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.uw(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.i.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.uw(o,"The capacitor was charged to "+A.i.a5(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bLo(d){return A.d.aR(this.a,new C.bS5(d))},
uw(d,e){var w
d.x=!0
d.ay=e
this.bif(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bmV(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a6(0)},
aKa(d){var w=d.b
return D.aVa.q(0,w)||D.AP.am(0,w)||w==="buck"||w==="regulator"},
bjL(d){var w,v=!0
if(!this.MS(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.AP.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
W9(d,e){var w=this.b
return new B.X(w,new C.bSp(d,e),B.U(w).k("X<1>")).gJ(0)},
rz(d){var w,v
if(d.x)return!1
w=d.b
if(D.AP.am(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bhL(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qS().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aKa(d)||i.rz(d))return null
w=i.W9(d,0)
v=i.W9(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.U(u).k("X<1>")
s=B.B(new B.X(u,i.gcYL(),t),t.k("M.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.i.fO(r)?""+A.i.S(r):B.v(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.i.a5(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.AP.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.N4("battery"),o=J.aQ(t.a),t=new B.eQ(o,t.b);t.C();){n=o.gP(o)
if(n.e===1.5&&n.as<=0.02&&i.W9(n,0)+i.W9(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.N4("switch"),o=J.aQ(t.a),t=new B.eQ(o,t.b);t.C();)if(!o.gP(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qS().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.Az(k))return"The "+$.qS().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.i.a5(k.cx,2)+" amps, but it can only give about "+A.i.a5(i.Az(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.aR(u,new C.bSd(i,d))
h=q.b
h=h===A.i.fO(h)?""+A.i.S(h):B.v(h)
u=A.i.a5(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.i.a5(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.i.a5(Math.abs(d.dy),1)+" V). Try a bigger battery."},
N4(d){var w=this.a
return new B.X(w,new C.bSg(d),B.U(w).k("X<1>"))},
aJM(d){return this.N4(d).aR(0,new C.bSf(0.35))},
qj(d,e){return A.d.aR(this.a,new C.bSe(e))}}
C.akU.prototype={
a4(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.T()
w=B.L()
w.r=F.nL.gp(0)
c0.aE(new B.a4(0,0,b8,b9),w)
w=C.iic(c1)
v=$.hTK()
if(A.o.F(w.length,2)!==0)B.bi(B.dK('"points" must have an even number of values.',b5))
u=c0.b
if(u!=null)u.oj(v)
t=v.n7()
v=c0.c
v.drawPoints($.hUE()[0],w,t)
t.delete()
for(w=b4.b,u=w.b,s=u.length,r=b4.f,q=0;q<u.length;u.length===s||(0,B.I)(u),++q){p=u[q]
o=p.a
n=o.c
m=p.b===0?-1:1
l=D.mF.am(0,o.b)?(o.ch-1)*38:0
o=o.d
k=p.c
j=k.c
i=p.d===0?-1:1
h=D.mF.am(0,k.b)?(k.ch-1)*38:0
b4.cMQ(c0,new B.r(n*b6+m*(42+l),o*b7),new B.r(j*b6+i*(42+h),k.d*b7),p,p===r)}u=b4.d
if(u!=null&&b4.e!=null){g=C.hYM(u.a,u.b,c1)
u=b4.e
u.toString
$.T()
s=B.L()
s.r=A.ab.gp(0)
s.c=3
s.d=A.bG
c0.ah(g,u,s)}for(u=w.a,s=u.length,r=b4.c,o=b4.r,n=x.v,q=0;q<u.length;u.length===s||(0,B.I)(u),++q){f=u[q]
m=f.c*b6
l=f.d*b7
if(f.Q>0){k=Math.sin(w.d*30)
$.T()
j=new B.as(A.T,A.Q,A.W,A.X,A.V)
j.r=F.NE.j(A.i.D(f.Q*0.45,0,0.6)).gp(0)
j.y=A.Di
c0.O(new B.r(m,l),46+14*k,j)}e=o.h(0,f.a)
if(e==null)e=1
J.bs(v.save())
v.translate(m,l)
k=A.i.D(A.nC.aA(0,A.i.D(e,0,1)),0.01,1.4)
v.scale(k,k)
b4.coP(c0,f,f===r)
v.restore()
k=f.b
if((k==="battery"||k==="solar"||k==="crank"||k==="turbine")&&!f.x&&f.cx>w.Az(f)){j=m+0
i=l+-40
h=Math.sin(w.d*10)
d=$.T().r
a0=B.a([],n)
a1=new B.aH(d,A.aj,b5,b5,a0)
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
a6=new B.bA()
a0.push(a6)
a0=a1.f
if(a0!=null)a6.aj(a0)
a1.ac()
a0=new B.as(A.T,A.Q,A.W,A.X,A.V)
a0.r=A.aC.j(0.65+0.35*h).gp(0)
c0.af(a1,a0)
a0=B.a([],n)
d=new B.aH(d,A.aj,b5,b5,a0)
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
h=new B.bA()
a0.push(h)
a0=d.f
if(a0!=null)h.aj(a0)
d.ac()
h=new B.as(A.T,A.Q,A.W,A.X,A.V)
h.b=A.ac
h.c=1.6
h.r=A.c.gp(0)
c0.af(d,h)
b4.lD(c0,"!",new B.r(j+-3,i+-8),A.c,14)}if(!f.x)j=(D.aVa.q(0,k)||D.AP.am(0,k)||k==="buck"||k==="regulator")&&!w.rz(f)&&w.W9(f,0)+w.W9(f,1)>0
else j=!1
if(j){m+=0
l+=-40
$.T()
j=new B.as(A.T,A.Q,A.W,A.X,A.V)
j.r=A.as.gp(0)
c0.O(new B.r(m,l),10,j)
b4.lD(c0,"!",new B.r(m+-3,l+-8),A.v,14)}for(a8=0;a8<2;++a8){m=f.c
l=a8===0
j=l?-1:1
i=D.mF.am(0,k)?(f.ch-1)*38:0
i=m*b6+j*(42+i)
j=f.d*b7
a9=new B.r(i,j)
$.T()
m=new B.as(A.T,A.Q,A.W,A.X,A.V)
m.r=F.nL.gp(0)
c0.O(a9,7,m)
m=new B.as(A.T,A.Q,A.W,A.X,A.V)
m.b=A.ac
m.c=2.4
m.r=(l&&w.bjL(f)?A.bZ:A.ab).gp(0)
c0.O(a9,6,m)
if(l&&w.bjL(f))b4.lD(c0,"+",new B.r(i+-4,j+-22),A.bZ,13)}}for(v=w.f,s=v.length,q=0;q<v.length;v.length===s||(0,B.I)(v),++q){b0=v[q]
r=b0.a*b6+b0.c
o=b0.b*b7+b0.d
b1=new B.r(r,o)
b2=A.i.D(b0.r/0.8,0,1)
n=B.ap(M.Oo,F.a0x,b2)
n.toString
m=b0.f
$.T()
l=new B.as(A.T,A.Q,A.W,A.X,A.V)
l.r=n.gp(0)
l.c=2.4
l.d=A.bG
c0.ah(b1,new B.r(r-b0.e*0.035,o-m*0.035),l)
l=new B.as(A.T,A.Q,A.W,A.X,A.V)
l.r=n.j(0.35*b2).gp(0)
l.y=A.Px
c0.O(b1,4.5*b2+1,l)}if(A.d.aR(u,new C.bMs())){b3=A.d.cD(u,0,new C.bMt())
$.T()
b7=B.L()
b7.r=D.bk2.j(0.05+0.09*b3*(0.5+0.5*Math.sin(w.d*22))).gp(0)
c0.aE(new B.a4(0,0,b8,b9),b7)
b7="short|"+B.v(b6)
a9=$.aQJ.h(0,b7)
if(a9==null){a9=B.h2(b5,A.cM,b5,b5,b5,D.fC6,A.a7,A.ch,b5,A.e5,A.ci)
a9.nA(b6-24)
$.aQJ.n(0,b7,a9)}a9.a4(c0,new B.r(12,10))}},
lD(d,e,f,g,h){var w,v=null,u=e+"|"+g.m()+"|"+B.v(h)
if($.aQJ.a>300)$.aQJ.a6(0)
w=$.aQJ.h(0,u)
if(w==null){w=B.h2(v,A.cM,v,v,v,B.d_(v,v,v,v,v,v,v,v,v,B.l(v,v,g,v,v,v,v,v,v,v,v,h,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),e),A.a7,A.ch,v,A.e5,A.ci)
w.eY()
$.aQJ.n(0,u,w)}w.a4(d,f)},
cMQ(d,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.aH($.T().r,A.aj,null,null,B.a([],x.v))
e.E(new B.aZ(a0.a,a0.b))
w=C.hQC(a0,a1,a2)
e.E(new B.cj(w.a,w.b,a1.a,a1.b))
v=a2.a
u=Math.abs(v.fr)
t=a2.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ap(A.aQ,F.NE,A.i.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ap(A.aH,A.aQ,A.i.D(r*1.2,0,1))
u.toString
o=u}else o=A.bk
u=B.L()
u.b=A.ac
u.c=a3?7:5
u.d=A.bG
s=a3?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
d.af(e,u)
u=B.L()
u.b=A.ac
u.c=2.4
u.d=A.bG
u.r=(a3?A.c:o).gp(0)
d.af(e,u)
if(q){n=new B.amG(new B.v4(B.zQ(e),!1,B.a([],x.l))).gH(0)
m=40+A.i.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=this.b
k=0
for(;;){v.jP()
j=t[u].b
j===$&&B.d()
if(!(k<j.a.length()/22))break
j=s.d
v.jP()
i=t[u].b
i===$&&B.d()
i=A.i.F(k*22+j*m*l,i.a.length())
v.jP()
j=t[u].b
j===$&&B.d()
j=j.a.length()
v.jP()
h=t[u].b
h===$&&B.d()
g=A.i.F(i+j,h.a.length())
v.jP()
f=t[u].Wo(g)
j=new B.as(A.T,A.Q,A.W,A.X,A.V)
j.r=A.c.gp(0)
d.O(f.a,2.6,j);++k}}},
a_v(d,e,f,g){var w,v,u,t
$.T()
w=B.L()
v=g?A.aX:A.a5
u=g?A.b1:A.a9
t=B.ap(e,A.v,0.3)
t.toString
w.san(new B.a8(v,u,A.x,B.a([e,f,e,t],x.O),A.Jl,null).az(0,d))
return w},
b0n(d,e,f){return this.a_v(d,e,f,!0)},
c9o(d,e){return this.a_v(d,A.bk,A.hW,e)},
ajO(d,e){var w,v,u
$.T()
w=B.L()
w.san(D.eKf.az(0,B.bX(e,4.2)))
d.O(e,4.2,w)
w=e.a7(0,D.ezy)
v=e.a7(0,D.ezH)
u=B.L()
u.r=A.cU.gp(0)
u.c=1.2
d.ah(w,v,u)},
coP(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=4294626325,b5=4286331629,b6=4287322667,b7=4293870660,b8=$.T(),b9=B.L()
b9.san(D.caD.az(0,D.fn6))
b9.c=3.4
b9.d=A.bG
w=B.L()
w.r=A.v.j(0.45).gp(0)
w.y=N.oT
c0.c1(D.fmW,w)
if(c2){w=B.by(D.fn4,A.k1)
v=B.L()
v.r=A.c.j(0.14).gp(0)
c0.aq(w,v)}u=C.huY(c1)
c0.ah(new B.r(-u,0),D.eB3,b9)
c0.ah(D.eyd,new B.r(u,0),b9)
t=c1.x
w=c1.b
s=D.mF.am(0,w)&&c1.ch!==1
if(s){J.bs(c0.c.save())
c0.bV(0,c1.ch)}switch(w){case"battery":b2.bI5(c0,c1)
break
case"solar":r=B.by(D.fmY,A.jJ)
c0.aq(r,b2.a_v(new B.a4(r.a,r.b,r.c,r.d),A.d0,A.bO,!1))
b8=B.L()
w=B.ap(D.bo5,A.dg,0.25+0.55*c1.f)
w.toString
v=B.ap(D.bxS,A.lU,0.3+0.4*c1.f)
v.toString
b8.san(new B.a8(A.ay,A.aD,A.x,B.a([w,v],x.O),b3,b3).az(0,D.ab8))
c0.aE(D.ab8,b8)
q=B.L()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(p=1;p<6;++p){b8=-34+p*68/6
c0.ah(new B.r(b8,-18),new B.r(b8,18),q)}for(p=1;p<4;++p){b8=-18+p*9
c0.ah(new B.r(-34,b8),new B.r(34,b8),q)}for(p=0;p<6;++p){b8=-34+(p+0.5)*68/6
$.T()
w=new B.as(A.T,A.Q,A.W,A.X,A.V)
w.r=A.cD.j(0.5).gp(0)
w.c=0.6
c0.ah(new B.r(b8,-18),new B.r(b8,18),w)}b8=new B.aH($.T().r,A.aj,b3,b3,B.a([],x.v))
b8.E(new B.aZ(-34,18))
b8.E(new B.aq(-6+40*c1.f,-18))
b8.E(new B.aq(4+40*c1.f,-18))
b8.E(new B.aq(-24,18))
b8.E(new B.bA())
w=B.L()
w.r=A.c.j(0.1+0.22*c1.f).gp(0)
c0.af(b8,w)
w=c1.f
b8=B.L()
b8.r=A.eF.j(0.9).gp(0)
c0.O(D.eyh,4+4*w,b8)
break
case"crank":o=B.by(D.fmI,A.h2)
c0.aq(o,b2.b0n(new B.a4(o.a,o.b,o.c,o.d),A.bA,A.bP))
b8=B.L()
b8.san(D.aTh.az(0,B.bX(A.J,12)))
c0.O(A.J,12,b8)
n=new B.r(Math.cos(c1.y)*22,Math.sin(c1.y)*22)
b8=B.L()
b8.r=A.cD.gp(0)
b8.c=5
b8.d=A.bG
c0.ah(A.J,n,b8)
b8=B.L()
b8.san(D.eKC.az(0,B.bX(n,7)))
c0.O(n,7,b8)
b2.ajO(c0,D.eAX)
b2.ajO(c0,D.ey1)
break
case"turbine":b8=b8.r
w=x.v
v=new B.aH(b8,A.aj,b3,b3,B.a([],w))
v.E(new B.aZ(-3,24))
v.E(new B.aq(3,24))
v.E(new B.aq(1.5,0))
v.E(new B.aq(-1.5,0))
v.E(new B.bA())
m=B.L()
m.r=A.bO.gp(0)
c0.af(v,m)
for(v=c0.c,l=0;l<3;++l){m=c1.y
J.bs(v.save())
v.rotate((m+l*2.094)*180/3.141592653589793,0,0)
m=B.a([],w)
k=new B.aH(b8,A.aj,b3,b3,m)
m.push(new B.aZ(0,-2))
k.ac()
j=new B.cj(6,-14,2,-30)
m.push(j)
i=k.f
if(i!=null)j.aj(i)
k.ac()
j=new B.cj(-2,-14,0,-2)
m.push(j)
i=k.f
if(i!=null)j.aj(i)
k.ac()
j=new B.bA()
m.push(j)
m=k.f
if(m!=null)j.aj(m)
k.ac()
m=new B.as(A.T,A.Q,A.W,A.X,A.V)
m.r=A.c.gp(0)
c0.af(k,m)
v.restore()}b8=B.L()
b8.san(D.eKi.az(0,B.bX(A.J,4.5)))
c0.O(A.J,4.5,b8)
break
case"switch":o=B.by(D.fmQ,A.qh)
b8=B.L()
b8.san(D.av8.az(0,new B.a4(o.a,o.b,o.c,o.d)))
c0.aq(o,b8)
b2.ajO(c0,D.Vj)
b2.ajO(c0,D.aO2)
h=c1.w?D.aO2:H.aNT
b8=B.L()
b8.r=A.aw.gp(0)
b8.c=6
b8.d=A.bG
c0.ah(D.Vj,h,b8)
b8=B.L()
b8.r=(c1.w?A.bf:A.bO).gp(0)
b8.c=4
b8.d=A.bG
c0.ah(D.Vj,h,b8)
b8=B.kZ(D.Vj,h,0.85)
b8.toString
w=B.L()
w.r=A.aC.gp(0)
c0.O(b8,5,w)
break
case"fuse":g=B.by(D.aU2,D.aTm)
b8=B.L()
b8.r=A.fC.j(0.25).gp(0)
c0.aq(g,b8)
b8=B.L()
b8.b=A.ac
b8.c=1.4
b8.r=A.aF.gp(0)
c0.aq(g,b8)
if(!t){b8=B.L()
b8.c=1.6
b8.r=B.ap(A.bO,A.cW,c1.fx).gp(0)
c0.ah(D.aOm,D.aO0,b8)}else{b8=B.L()
b8.c=1.6
b8.r=A.bW.gp(0)
c0.ah(D.aOm,D.eBr,b8)
b8=B.L()
b8.c=1.6
b8.r=A.bW.gp(0)
c0.ah(D.ez4,D.aO0,b8)
b8=B.L()
b8.r=A.e6.gp(0)
c0.O(A.J,6,b8)}for(f=0;f<2;++f){e=B.bY(new B.r(M.hp[f]*22,0),20,9)
c0.aq(B.by(e,A.hq),b2.a_v(e,A.de,A.oA,!0))}break
case"pot":b8=B.L()
b8.san(D.eKt.az(0,B.bX(A.J,21)))
c0.O(A.J,21,b8)
for(l=0;l<=10;++l){d=2.356194490192345+l*3.141592653589793*1.5/10
b8=Math.cos(d)
w=Math.sin(d)
v=Math.cos(d)
m=Math.sin(d)
k=new B.as(A.T,A.Q,A.W,A.X,A.V)
k.r=A.aF.gp(0)
k.c=1.2
c0.ah(new B.r(b8*18,w*18),new B.r(v*22,m*22),k)}b8=B.L()
b8.san(D.eKg.az(0,B.bX(A.J,13)))
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
c0.ah(new B.r(b8*3,w*3),new B.r(v*12,m*12),k)
break
case"resistor":a1=B.by(D.aU2,D.aTm)
b8=B.L()
b8.san(D.ce9.az(0,new B.a4(a1.a,a1.b,a1.c,a1.d)))
c0.aq(a1,b8)
b8=x.O
a2=B.J([47,B.a([B.b1(b4),B.b1(b5),A.v],b8),100,B.a([B.b1(b6),A.v,B.b1(b6)],b8),220,B.a([B.b1(b7),B.b1(b7),B.b1(b6)],b8),470,B.a([B.b1(b4),B.b1(b5),B.b1(b6)],b8),1000,B.a([B.b1(b6),A.v,B.b1(b7)],b8)],x.i,x.bF)
a3=a2.h(0,c1.r)
if(a3==null){b8=a2.h(0,100)
b8.toString
a3=b8}for(p=0;p<3;++p){b8=-14+p*9
w=new B.as(A.T,A.Q,A.W,A.X,A.V)
w.r=a3[p].gp(0)
c0.aE(new B.a4(b8,-9,b8+4.5,9),w)}b8=B.L()
b8.r=A.aQ.gp(0)
c0.aE(D.fni,b8)
b8=c1.r
b2.lD(c0,b8>=1000?"1k\u03a9":""+A.i.S(b8)+"\u03a9",D.eAs,A.ab,10)
break
case"bulb":w=c1.fx
if(w>0){v=B.L()
v.r=A.eF.j(0.55*w).gp(0)
v.y=A.Di
c0.O(H.w3,34,v)}o=B.bY(D.ewX,12,18)
c0.aq(B.by(o,A.hq),b2.a_v(o,A.bk,A.dT,!0))
for(p=0;p<3;++p){w=13+p*3.5
v=new B.as(A.T,A.Q,A.W,A.X,A.V)
v.r=A.dJ.gp(0)
v.c=1
c0.ah(new B.r(-9,w),new B.r(9,w),v)}w=B.L()
if(t)v=A.GC
else{v=B.ap(A.dT,A.hZ,c1.fx)
m=c1.fx
v=v.j(0.25+0.7*m)}if(t)m=A.GY
else{m=B.ap(A.d0,A.eF,c1.fx)
m.toString}w.san(new B.bT(A.mS,0.5,A.x,b3,0,B.a([v,m.j(0.18+0.5*c1.fx)],x.O),b3,b3).az(0,B.bX(A.ua,17)))
c0.O(A.ua,17,w)
w=B.L()
w.b=A.ac
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c0.O(A.ua,17,w)
b8=b8.r
w=x.v
m=new B.aH(b8,A.aj,b3,b3,B.a([],w))
m.E(new B.aZ(-9,-12))
m.E(new B.cj(-12,-4,-9,0))
v=B.L()
v.b=A.ac
v.c=2
v.r=A.c.j(0.45).gp(0)
c0.af(m,v)
v=B.L()
v.r=A.cE.gp(0)
v.c=1.4
c0.ah(D.eBl,D.eBn,v)
v=B.L()
v.r=A.cE.gp(0)
v.c=1.4
c0.ah(D.eyY,D.ez0,v)
w=B.a([],w)
a4=new B.aH(b8,A.aj,b3,b3,w)
a4.E(new B.aZ(-4,-2))
for(l=0;l<6;l=a5){a5=l+1
b8=(l&1)===0?-6:1
b8=new B.aq(-4+a5*8/6,-2+b8)
w.push(b8)
v=a4.f
if(v!=null)b8.aj(v)
a4.ac()}$.T()
b8=B.L()
b8.b=A.ac
b8.c=1.8
if(t)w=A.b7
else{w=B.ap(A.d0,D.bpd,c1.fx)
w.toString}b8.r=w.gp(0)
c0.af(a4,b8)
break
case"led":w=c1.fx
if(w>0){v=B.L()
v.r=A.aC.j(0.6*w).gp(0)
v.y=D.bMb
c0.O(A.ua,30,v)}w=B.L()
w.r=A.dT.gp(0)
w.c=2.4
c0.ah(D.eBt,D.eBs,w)
w=B.L()
w.r=A.dT.gp(0)
w.c=2.4
c0.ah(D.ez6,D.ez5,w)
b8=b8.r
w=x.v
a6=new B.aH(b8,A.aj,b3,b3,B.a([],w))
a6.E(new B.aZ(-12,8))
a6.E(new B.aq(-12,-6))
a6.E(new B.cj(0,-26,12,-6))
a6.E(new B.aq(12,8))
a6.E(new B.bA())
v=B.L()
if(t)m=A.jz
else{m=B.ap(A.ey,D.br_,c1.fx)
m.toString}if(t)k=A.l2
else{k=B.ap(A.kH,A.aC,c1.fx)
k.toString}v.san(new B.a8(A.ay,A.aD,A.x,B.a([m,k],x.O),b3,b3).az(0,D.fma))
c0.af(a6,v)
v=B.L()
v.b=A.ac
v.c=1.2
v.r=A.jU.gp(0)
c0.af(a6,v)
v=B.L()
v.r=A.et.gp(0)
c0.aE(D.fmg,v)
w=new B.aH(b8,A.aj,b3,b3,B.a([],w))
w.E(new B.aZ(-7,-4))
w.E(new B.cj(-6,-12,0,-15))
b8=B.L()
b8.b=A.ac
b8.c=2
b8.r=A.c.j(0.5).gp(0)
c0.af(w,b8)
break
case"motor":a7=new B.a4(-28,-14,20,14)
c0.aq(B.by(a7,A.iC),b2.b0n(a7,A.an,A.bn))
b8=B.L()
b8.r=A.cx.gp(0)
c0.aE(D.flK,b8)
b8=B.L()
b8.r=A.cD.gp(0)
c0.aE(D.flM,b8)
b8=c0.c
J.bs(b8.save())
b8.translate(31,0)
for(l=0;l<3;++l){J.bs(b8.save())
b8.rotate((c1.y+l*2.094)*180/3.141592653589793,0,0)
w=B.bY(H.aNO,15,7)
v=new B.as(A.T,A.Q,A.W,A.X,A.V)
v.r=A.cW.j(0.9).gp(0)
c0.c1(w,v)
b8.restore()}w=B.L()
w.r=A.aw.gp(0)
c0.O(A.J,3,w)
b8.restore()
b2.lD(c0,"M",D.eAW,A.aw,14)
break
case"buzzer":a8=B.bY(A.J,42,42)
b8=B.L()
b8.san(D.eKx.az(0,a8))
c0.c1(a8,b8)
b8=B.L()
b8.r=A.v.gp(0)
c0.O(A.J,6,b8)
b8=B.L()
b8.b=A.ac
b8.c=1.4
b8.r=A.aT.gp(0)
c0.O(A.J,6,b8)
b2.lD(c0,"+",D.eAP,A.ab,12)
for(b8=b2.b,l=1;l<=3;++l){w=c1.fx
v=w>0?A.i.F(b8.d*14,5):0
v=B.bX(A.J,24+l*5+v)
m=new B.as(A.T,A.Q,A.W,A.X,A.V)
m.b=A.ac
m.c=2
m.r=A.c5.j(w*(1-l*0.22)).gp(0)
c0.cQ(v,-0.7,1.4,!1,m)}break
case"heater":o=B.by(D.fmM,A.iC)
w=B.L()
w.san(D.cbI.az(0,new B.a4(o.a,o.b,o.c,o.d)))
c0.aq(o,w)
w=B.a([],x.v)
a9=new B.aH(b8.r,A.aj,b3,b3,w)
a9.E(new B.aZ(-24,0))
for(l=0;l<8;l=a5){b8=(l&1)===0?-10:10
a5=l+1
b8=new B.cj(-24+l*6+3,b8,-24+a5*6,0)
w.push(b8)
v=a9.f
if(v!=null)b8.aj(v)
a9.ac()}b8=c1.fx
if(b8>0.1){$.T()
w=B.L()
w.b=A.ac
w.c=10
w.r=D.bpY.j(0.5*b8).gp(0)
w.y=A.l7
c0.af(a9,w)}$.T()
b8=B.L()
b8.b=A.ac
b8.c=3.2
b8.d=A.bG
b8.r=B.ap(A.ml,Aj.z5,c1.fx).gp(0)
c0.af(a9,b8)
break
case"capacitor":a7=new B.a4(-16,-22,16,18)
b8=B.by(a7,A.iC)
w=B.L()
w.san(D.auW.az(0,a7))
c0.aq(b8,w)
w=B.L()
w.r=A.bO.gp(0)
c0.aE(D.fmq,w)
for(p=0;p<4;++p)b2.lD(c0,"\u2212",new B.r(-14,-18+p*9),A.aw,11)
b0=new B.a4(-16,-24,16,-17)
c0.aq(B.by(b0,A.hq),b2.c9o(b0,!1))
b8=38*c1.fx
w=18-b8
$.T()
v=B.L()
v.r=A.bf.j(0.5).gp(0)
c0.aE(new B.a4(-3,w,11,w+b8),v)
b2.lD(c0,"1F",H.w3,A.c,11)
break
case"radio":a1=B.by(D.ab8,A.h2)
b8=B.L()
b8.san(D.ceo.az(0,new B.a4(a1.a,a1.b,a1.c,a1.d)))
c0.aq(a1,b8)
b8=B.L()
b8.b=A.ac
b8.c=1.4
b8.r=A.oA.j(0.6).gp(0)
c0.aq(a1,b8)
b8=B.by(D.fmN,A.jJ)
w=B.L()
w.r=A.e3.gp(0)
c0.aq(b8,w)
for(p=0;p<6;++p){b8=-10+p*4.4
w=new B.as(A.T,A.Q,A.W,A.X,A.V)
w.r=A.ml.gp(0)
w.c=1.4
c0.ah(new B.r(-27,b8),new B.r(-3,b8),w)}b8=B.L()
b8.r=(c1.fx>0?A.h8:A.oC).gp(0)
c0.aE(D.flR,b8)
if(c1.fx>0){b8=8+A.i.F(b2.b.d*7,18)
w=B.L()
w.r=A.bE.gp(0)
w.c=1.6
c0.ah(new B.r(b8,-13),new B.r(b8,-3),w)}b8=B.L()
b8.san(D.aTh.az(0,B.bX(D.aa5,6)))
c0.O(D.aa5,6,b8)
b8=B.L()
b8.r=A.oA.gp(0)
c0.O(D.eyc,4,b8)
b8=B.L()
b8.r=A.dT.gp(0)
b8.c=1.8
c0.ah(D.ey7,D.aO7,b8)
if(c1.fx>0)for(b8=b2.b,l=1;l<=2;++l){w=B.bX(D.aO7,4+l*5+A.i.F(b8.d*8,5))
v=new B.as(A.T,A.Q,A.W,A.X,A.V)
v.b=A.ac
v.c=1.4
v.r=A.oK.j(0.7).gp(0)
c0.cQ(w,-2.4,1.6,!1,v)}break
case"tv":w=B.by(D.fmX,A.iC)
v=B.L()
v.r=M.n8.gp(0)
c0.aq(w,v)
b1=B.by(D.fmU,A.hq)
if(c1.fx>0&&!c1.x){b8=c0.c
J.bs(b8.save())
b8.clipRRect(B.nc(b1),$.mQ(),!0)
b8.translate(-33,-21)
K.h4o(c0,D.ftL,c1.at,b2.b.d,c1.ax,-1,b3,b3)
b8.restore()
b8=B.L()
b8.r=A.bf.gp(0)
c0.O(D.eyo,1.6,b8)}else{w=B.L()
w.r=D.wP.gp(0)
c0.aq(b1,w)
b8=new B.aH(b8.r,A.aj,b3,b3,B.a([],x.v))
b8.E(new B.aZ(-33,-21))
b8.E(new B.aq(-10,-21))
b8.E(new B.aq(-33,0))
b8.E(new B.bA())
w=B.L()
w.r=A.c.j(0.05).gp(0)
c0.af(b8,w)}b8=B.L()
b8.r=A.bA.gp(0)
c0.aE(D.fmf,b8)
break}C.iC6(c0,c1,b2.b.d,b2.gce2())
if(t)b2.lD(c0,"\u2716",D.eBv,A.aC,14)
if(s)c0.c.restore()},
aSn(d,e,f,g){var w,v,u,t,s,r,q,p,o=new C.bMr(),n=e.d,m=e.b,l=n-m,k=e.a,j=m+l*0.06,i=k+l*0.16,h=new B.a4(k,j,i,j+l*0.88)
j=l*0.08
k=B.by(h,new B.aP(j,j))
$.T()
w=B.L()
w.san(o.$2(h,D.dhM))
d.aq(k,w)
i-=0.5
w=l*0.2
k=e.c-w
v=new B.a4(i,m,k,n)
u=k-i
t=i+u*0.66
s=B.L()
s.san(o.$2(v,D.dGe))
d.aE(new B.a4(i,m,t,n),s)
s=B.L()
s.san(o.$2(v,D.dg_))
d.aE(new B.a4(t,m,k,n),s)
k-=0.5
s=m+j
n=l*0.12
r=k+n
q=new B.a4(k,s,r,s+l*0.84)
s=B.L()
s.san(o.$2(q,D.aEk))
d.aE(q,s)
r-=0.5
s=m+l*0.3
p=new B.a4(r,s,r+l*0.1,s+l*0.4)
s=l*0.05
s=B.by(p,new B.aP(s,s))
r=B.L()
r.san(o.$2(p,D.aEk))
d.aq(s,r)
r=i+2
s=m+l*0.18
o=B.L()
o.r=A.c.j(0.18).gp(0)
d.aE(new B.a4(r,s,r+(u-4),s+j),o)
if(f){o=l*0.42
this.lD(d,"+",new B.r(t+u*0.08,m+n),A.dl,o)
if(g!=null)this.lD(d,g,new B.r(i+u*0.12,m+w),A.bO,o)}},
bLa(d,e,f){return this.aSn(d,e,!0,f)},
bL9(d,e,f){return this.aSn(d,e,f,null)},
bI5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a6.e,a4=B.v(a3===A.i.fO(a3)?A.i.S(a3):a3)+"V"
if(a3<=2){a2.bLa(a5,D.fmL,a4)
a2.lD(a5,"\u2212",D.eB5,A.ab,12)
a2.lD(a5,"+",D.ey2,A.aQ,12)
$.T()
w=B.L()
w.r=A.bx.gp(0)
a5.aE(D.fmz,w)
w=a6.as
v=B.L()
v.r=B.ap(A.aC,A.bf,w).gp(0)
a5.aE(new B.a4(-22,15,-22+44*w,19),v)
if(a6.as<=0.02)a2.lD(a5,"FLAT",D.eAC,A.bZ,9)}else if(a3<=4.5){u=a3>3?3:2
t=u*13+6
w=-t/2
v=w+t
s=new B.a4(-31,w,31,v)
r=B.by(s,A.jJ)
$.T()
q=B.L()
q.san(D.cdP.az(0,s))
a5.aq(r,q)
for(r=w+3,p=0;p<u;++p){q=r+p*13
a2.bL9(a5,new B.a4(-27,q,25,q+11.5),!1)}for(q=r+(t-6),o=0;o<2;++o){n=D.dfU[o]
$.T()
m=new B.as(A.T,A.Q,A.W,A.X,A.V)
m.r=A.dT.gp(0)
a5.aE(new B.a4(n,r,n+1.6,q),m)}a2.lD(a5,a4,new B.r(-9,v+1),A.aQ,10)
a2.lD(a5,"+",new B.r(25,w-13),A.aQ,11)}else if(a3<=9){l=new B.a4(-18,-16,18,18)
w=B.by(l,A.hq)
v=$.T()
r=B.L()
r.san(D.ce6.az(0,l))
a5.aq(w,r)
k=new B.a4(-18,-4,18,18)
r=B.rb(k,A.hq,A.hq,A.bJ,A.bJ)
w=B.L()
w.san(D.auW.az(0,k))
a5.aq(r,w)
j=new B.a4(-18,-16,18,-11)
w=B.rb(j,A.bJ,A.bJ,A.hq,A.hq)
r=B.L()
r.san(D.cew.az(0,j))
a5.aq(w,r)
i=B.L()
i.san(D.eKN.az(0,D.fmj))
a5.O(D.aOq,4,i)
r=B.a([],x.v)
h=new B.aH(v.r,A.aj,null,null,r)
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
h.ac()}}h.E(new B.bA())
a5.af(h,i)
$.T()
w=B.L()
w.r=A.cy.gp(0)
a5.O(D.ezd,2,w)
a2.lD(a5,"9V",D.eBy,A.c,13)
a2.lD(a5,"+",D.eAy,A.aQ,11)}else{e=new B.a4(-34,-12,34,18)
w=B.by(e,A.hq)
$.T()
v=B.L()
v.san(D.cbC.az(0,e))
a5.aq(w,v)
d=new B.a4(-36,-18,36,-10)
v=B.by(d,D.eKV)
w=B.L()
w.san(D.avb.az(0,d))
a5.aq(v,w)
for(g=0;g<6;++g){w=new B.as(A.T,A.Q,A.W,A.X,A.V)
w.r=A.aw.gp(0)
a5.O(new B.r(-14+g*5.6,-14),1.6,w)}w=B.L()
w.r=A.bu.j(0.92).gp(0)
a5.aE(D.fmV,w)
for(o=0;o<2;++o){w=D.cGM[o]
n=w.a
a0=w.b
a1=B.bY(new B.r(n,-21),7,8)
w=B.by(a1,A.Fh)
v=new B.as(A.T,A.Q,A.W,A.X,A.V)
v.san(D.ccb.az(0,a1))
a5.aq(w,v)
v=B.by(B.bY(new B.r(n,-24),3.5,9),A.Fh)
w=new B.as(A.T,A.Q,A.W,A.X,A.V)
w.r=a0.gp(a0)
a5.aq(v,w)}a2.lD(a5,"\u2212",D.eB6,A.ab,11)
a2.lD(a5,"+",D.exY,A.aC,11)
a2.lD(a5,"12V",H.aOk,A.aw,11)}},
aD(d){return!0}}
C.n8.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a6(k)
A.d.a6(d.b)
w=B.S(x.N,x.Y)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.I)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.u8(o,r,q,p)
n.at5(o,r,q,p)
k.push(n)
J.iV(s[4],new C.cwn(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.I)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.an0(m,u[1],l,u[3])}}}
C.akS.prototype={
R(){var w=x.N
return new C.akT(B.c0(2000,1,1,0,0,0,0,0),A.J,A.aA,B.S(w,x.gl),B.aR(w),$,A.bH,0,B.a([],x.X),null,null)}}
C.akT.prototype={
aga(d){var w=this,v=w.ch
if(v!=null)v.a1(0)
w.l(new C.bM4(w,d))
w.ch=B.cB(A.ne,new C.bM5(w))},
t(){var w=this.ch
if(w!=null)w.a1(0)
w=this.db
if(w!=null)w.a1(0)
this.bxD()},
a1F(d,e){return this.cmE(d,e)},
b4K(d){return this.a1F(d,!1)},
cmE(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a1F=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
r=d.at
q=e?A.nX:A.zf
p=d.b
w=3
return B.b(K.hrk(s,r,p,d.ax<3.2,q,$.qS().h(0,p).b),$async$a1F)
case 3:o=g
t.cy=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a1F,v)},
czG(d){var w=this,v=new B.W(Date.now(),0,!1),u=w.CW.c_(0,d.a,new C.bM6()),t=J.cI(u)
t.I(u,v)
t.bq(u,new C.bM7(v))
if(t.gJ(u)>=4){t.a6(u)
t=w.db
if(t!=null)t.a1(0)
w.a30(d)
return}if(t.gJ(u)===3){t=w.db
if(t!=null)t.a1(0)
w.db=B.cB(A.j2,new C.bM8(w,u,d))}},
a1m(d){return this.ckX(d)},
ckX(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a1m=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
w=3
return B.b(C.iDl(s,d.b,A.i.S(A.i.F(t.a.c.d*0.12,1)*100)),$async$a1m)
case 3:t.cy=!1
case 1:return B.h(u,v)}})
return B.i($async$a1m,v)},
a30(d){return this.cx9(d)},
cx9(d){var w=0,v=B.j(x.H),u=this,t
var $async$a30=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bU(A.L,null,new C.bM2(u,d),t,!0,!0,!0,null,!1,!1,x.H),$async$a30)
case 2:return B.h(null,v)}})
return B.i($async$a30,v)},
a_(){this.a3()
this.bjV()
this.mn()},
bjV(){this.a.c.e=new C.bMo(this)},
mE(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.vS(0,d)
for(w=q.a.c.a,v=w.length,u=q.cx,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=D.mF.h(0,s.b)
if((r==null?null:r.b)!==D.Bg)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.q(0,s.a)&&!q.cy){u.I(0,s.a)
q.a1F(s,!0)}}else u.X(0,s.a)}if((q.ax+=d)>0.16){q.ax=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)G.dF(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)G.dF(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cV.ai()<0.5
else u=!1
if(u)G.dF(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){G.dF(900+A.cV.av(800),"",90,0,0.1,o)
if(A.cV.ai()<0.35)G.dF(300+A.cV.av(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cV.ai()<0.4
else u=!1
if(u)G.dF(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)G.dF(330+A.o.F(110*A.i.bc(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)G.dF((A.i.bc(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)G.dF(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)G.dF(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cV.ai()<0.5
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
q.l(new C.bMp())},
bbW(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.at
l=p.c
k=n===0?-1:1
j=D.mF.am(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new B.y(p,n)
r=i}}}return s},
b5q(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.U(w).k("dr<1>"),w=new B.dr(w,v),w=new B.bP(w,w.gJ(0),v.k("bP<aj.E>")),u=d.a,v=v.k("aj.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.at
p=s.d
o=D.mF.am(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cMR(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
o=p.a
n=this.at
m=o.c
l=p.b===0?-1:1
k=D.mF.am(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.at
m=o.c
j=p.d===0?-1:1
i=D.mF.am(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=C.hQC(new B.r(k,n),new B.r(i,l),p)
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
ag8(){this.a.toString
this.l(new C.bLu())},
buh(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.dju[v]
if(!A.d.aR(p.a.c.a,new C.bMq(u,w))){o=new B.r(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?A2.B4:o
s=s?A2.B4:o
q=t.amc(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.x=null
G.dF(1200,"",50,0,0.3,"tri")
p.ag8()},
B(d){var w,v,u,t,s,r,q,p,o,n=this
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.TF[v].a)
u=w.length
t=u>8
s=t?A.d.du(w,0,A.o.ao(u+1,2)):w
r=t?A.d.fB(w,A.o.ao(w.length+1,2)):A.Z
q=n.a.d
if(q!=null){w=B.a3(q).k("cr<1>")
w=B.B(new B.cr(q,w),w.k("M.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.I)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b5f(s,!0))
n.a.toString
if(t)w.push(n.b5f(r,!0))
w.push(B.E(B.cg(new C.bMn(n,q)),1))
return B.x(w,A.l,null,A.e,A.h,0,A.p)},
b5f(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=$.qS()
s=t.h(0,u).d.j(0.14)
r=new B.aP(14,14)
q=new B.ax(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.aA(p,B.p(p,B.x(B.a([B.c(t.h(0,u).c,p,p,p,p,p,p,A.y7,p,p,p),B.c(t.h(0,u).b,p,1,A.a2,p,p,p,A.on,p,p,p)],n),A.l,p,A.ba,A.h,0,A.p),A.f,p,p,new B.o(s,p,new B.bE(q,q,q,q),new B.bb(r,r,r,r),p,p,A.m),p,p,p,L.oS,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bLv(this,u),p,p,p,p,p,p,!1,A.a4))}return B.p(p,B.co(m,p,p,A.hm,p,p,A.aK,!1),A.f,p,p,new B.o(L.CA,p,new B.bE(A.a1,A.a1,new B.ax(o,1,A.r,-1),A.a1),p,p,p,A.m),p,58,p,p,p,p,p,p)},
coQ(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a2.b,a1=$.qS().h(0,a0)
a1.toString
w=a2.dy
v=a2.fr
u=new C.bLR(e,a1)
t=new C.bLQ()
s=B.n(20)
r=a1.d
q=B.K(r.j(0.55),A.r,1.3)
p=B.a([new B.aa(0,A.H,r.j(0.18),A.cz,16)],x.V)
o=r.j(0.18)
n=B.n(10)
n=B.p(A.z,B.c(a1.c,d,d,d,d,d,d,A.y7,d,d,d),A.f,d,d,new B.o(o,d,d,n,d,d,A.m),d,34,d,d,d,d,d,34)
o=B.E(B.c(a1.b,d,1,A.a2,d,d,d,B.l(d,d,r,d,d,d,d,d,d,d,d,15,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d),1)
m=B.n(999)
l=B.K(A.aT,A.r,1)
k=x.p
m=B.a([B.A(B.a([n,A.aa,o,B.aA(d,B.p(d,B.c(e.f?"Less":"About",d,d,d,d,d,d,A.WP,d,d,d),A.f,d,d,new B.o(d,d,l,m,d,d,A.m),d,d,d,d,A.o3,d,d,d),A.y,!1,D.hH9,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.bLC(e),d,d,d,d,d,d,!1,A.a4),B.aI(d,d,d,d,D.c60,d,d,d,new C.bLD(e,a2),d,d,d,d,"Remove part",A.cn),B.aI(d,d,d,d,Av.R6,d,d,d,new C.bLE(e),d,d,d,d,d,A.cn)],k),A.l,d,A.e,A.h,0,d,d)],k)
if(e.f)A.d.u(m,B.a([B.c(a1.e,d,d,d,d,d,d,A.Lt,d,d,d),A.cQ,B.c("How it is made: "+a1.f,d,d,d,d,d,d,V.aXZ,d,d,d)],k))
m.push(A.ak)
if(a2.x)m.push(D.fWR)
else m.push(new B.D(A.f7,B.A(B.a([t.$2(A.i.a5(Math.abs(a2.dy),2),"VOLTS"),A.bb,t.$2(A.i.a5(Math.abs(a2.fr)*1000,0),"MILLIAMPS"),A.bb,t.$2(A.i.a5(Math.abs(w*v),2),"WATTS")],k),A.l,d,A.e,A.h,0,d,d),d))
j=e.a.c.bhL(a2)
if(j!=null){a1=(a2.x?A.aC:A.as).j(0.14)
w=B.n(10)
v=B.K((a2.x?A.aC:A.as).j(0.5),A.r,1)
m.push(new B.D(A.hy,B.p(d,B.c((a2.x?"Why it burnt out":"Why it is not working")+": "+j,d,d,d,d,d,d,D.fSG,d,d,d),A.f,d,d,new B.o(a1,d,v,w,d,d,A.m),d,d,d,d,A.cu,d,d,d),d))}if(C.hoL(a0)){a1=B.a([],k)
for(i=0;i<10;i=h){h=i+1
a1.push(new B.D(A.f7,new E.e1("CH "+h,a2.at===i,new C.bLI(e,a2,i),d,r,d),d))}a1=B.cb(B.A(a1,A.l,d,A.e,A.h,0,d,d),A.t,d,A.y,d,d,d,d,d,A.aK)
if(e.a.c.rz(a2)){w=F.Tt[A.o.F(a2.at,10)]
v=e.f?" Tap the TV 3 times quickly to open the big screen.":""
v="Showing: "+w.a+"."+v
w=v}else w="The TV is off. Give it power with the + dot towards the battery +."
a1=B.a([A.ak,a1,A.at,B.c(w,d,e.f?4:1,A.a2,d,d,d,O.hG,d,d,d)],k)
if(e.a.c.rz(a2))a1.push(new E.fI(A.xm,"Open big screen",new C.bLJ(e,a2),r,d))
A.d.u(m,a1)}if(D.mF.am(0,a0)&&!C.hoL(a0)){a1=B.a([A.ak],k)
if(e.f||!e.a.c.rz(a2))a1.push(B.c(e.a.c.rz(a2)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",d,d,d,d,d,d,O.hG,d,d,d))
if(e.a.c.rz(a2))a1.push(new E.fI(A.QO,"Open the "+$.qS().h(0,a0).b,new C.bLK(e,a2),r,d))
A.d.u(m,a1)}if(D.mF.am(0,a0))A.d.u(m,B.a([A.ak,new E.fI(A.DK,"Make it bigger (or tap it 4 times)",new C.bLL(e,a2),r,d)],k))
e.a.toString
a1=a0==="buck"
if(a1||a0==="regulator"){w=A.i.a5(a2.db,1)
if(e.a.c.rz(a2))v=a2.dx
else{e.a.toString
v=a0==="regulator"?5:a2.e}v=B.a([A.ak,B.c("Volts in: "+w+" V   \u2192   Volts out: "+A.i.a5(v,1)+" V",d,d,d,d,d,d,D.fMt,d,d,d)],k)
if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dD8[g]
w=f===A.i.fO(f)?A.i.S(f):f
a1.push(new E.e1(B.v(w)+" V out",a2.e===f,new C.bLM(e,a2,f),d,r,d))}v.push(new B.D(A.l5,B.bZ(A.bI,a1,A.br,d,0,6),d))}if(a0==="regulator")v.push(D.hb0)
A.d.u(m,v)}if(e.a.c.MS(a2)&&!a2.x){a1=A.i.a5(a2.cx,2)
w=A.i.a5(e.a.c.Az(a2),2)
v=e.a.c
o=v.apO(a2)?"   \u26a0 OVERLOADED":""
a1=B.c("Supplying "+a1+" A of the "+w+" A it can give"+o,d,d,d,d,d,d,B.l(d,d,v.apO(a2)?A.bZ:A.eE,d,d,d,d,d,d,d,d,12.5,d,d,A.E,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
w=B.n(4)
o=A.i.D(a2.cx/e.a.c.Az(a2),0,1)
v=e.a.c.apO(a2)?A.aC:A.bf
m.push(new B.D(A.hy,B.x(B.a([a1,A.cQ,B.bx(w,B.jE(A.bx,d,d,5,d,o,new B.kT(v,x.c)),A.aq)],k),A.B,d,A.e,A.h,0,A.p),d))}a1=a0==="battery"
if(a1&&a2.e===1.5){w=a2.as
v=A.i.S(w*100)
if(w<=0.02)w="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else w=w>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.D(A.hy,B.c("Charge: "+v+"%"+w,d,d,d,d,d,d,D.fFU,d,d,d),d))}if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.drd[g]
w=f===1.5?"1.5 V (rechargeable)":B.v(f)+" V"
a1.push(new E.e1(w,a2.e===f,new C.bLN(e,a2,f),d,r,d))}m.push(B.bZ(A.bI,a1,A.br,d,0,6))}if(a0==="resistor"){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dgn[g]
w=f>=1000?"1 k\u03a9":""+A.o.S(f)+" \u03a9"
a1.push(new E.e1(w,a2.r===f,new C.bLO(e,a2,f),d,r,d))}m.push(B.bZ(A.bI,a1,A.br,d,0,6))}if(a0==="solar")m.push(u.$3("Sunlight",a2.f,new C.bLP(a2)))
if(a0==="turbine")m.push(u.$3("Wind",a2.f,new C.bLF(a2)))
if(a0==="pot")m.push(u.$3("Knob",a2.f,new C.bLG(a2)))
if(a0==="ldr")m.push(u.$3("Light",a2.f,new C.bLH(a2)))
if(a0==="crank")m.push(D.h6e)
if(a0==="switch")m.push(B.c(a2.w?"Closed: the loop is joined up.":"Open: the loop is broken.",d,d,d,d,d,d,O.hG,d,d,d))
return B.p(d,new B.cS(D.b9t,B.cb(B.x(m,A.B,d,A.e,A.N,0,A.p),A.t,d,A.y,d,d,d,d,d,A.ah),d),A.f,d,d,new B.o(F.Zy,d,q,s,p,d,A.m),d,d,D.hGs,d,D.bGj,d,d,d)}}
C.beI.prototype={}
C.WR.prototype={
R(){return new C.aGg(C.huX(),new B.cA(null,x.gJ),B.aR(x.S))}}
C.aGg.prototype={
a_(){this.a3()
$.aU.cV$.push(this)
this.ag9()},
ag9(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ag9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fRV(),$async$ag9)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.iCv(t.d,r)
if(s!=null){t.l(new C.e4Q(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$ag9,v)},
FT(){var w,v=this
if(!v.as)return
w=C.isJ(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bIz(w)},
jn(d){if(d!==A.h5)this.FT()},
t(){$.aU.hZ(this)
this.FT()
this.a2()},
ce4(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.U(v).k("X<1>")
t=new B.X(v,new C.e4Z(q),u).gJ(0)
s=new B.X(v,new C.e5_(),u).gJ(0)
r=new B.X(v,w.gd1r(),u).gJ(0)
if(t!==q.x||s!==q.y||r!==q.z)q.l(new C.e50(q,t,s,r))}if(A.o.F(q.w,45)===0)q.FT()
if(A.o.F(q.w,10)===0){w=q.f
$.ajY()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.q(0,q.f)&&$.ajY()[q.f].c.$1(q.d)){w.I(0,q.f)
C.K_("bell",B.a([0,4,7,12],x.t),700,0.45)
q.l(new C.e51())
q.FT()
w=q.c
w.toString
w=B.Ku(w)
if(w!=null)w.T(B.b3(p,p,p,p,p,A.t,p,B.c("\u2705 Challenge done: "+$.ajY()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mp,p,p,p,p,p,p,p,p,p,p))}},
aj0(){var w=0,v=B.j(x.H),u=this,t
var $async$aj0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.ce(null,null,!0,null,new C.e4P(u),t,null,!0,!0,x.H),$async$aj0)
case 2:return B.h(null,v)}})
return B.i($async$aj0,v)},
b2r(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.n(12),t=B.K(f.j(0.45),A.r,1)
u=B.a([B.ao(w,B.p(w,B.V(d,f,w,w,w,18),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ao(w,h,w,w,w,-1,-3,w))
return B.aA(w,B.h9(new B.a5(40,38,new B.an(A.a0,w,A.ad,A.f,u,w),w),w,e,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4)},
b2q(d,e,f,g){return this.b2r(d,e,f,g,null)},
atN(d,e,f,g){var w=null,v=f.j(0.1),u=B.n(10),t=B.K(f.j(0.4),A.r,1)
return B.E(B.aA(w,B.p(w,B.A(B.a([B.V(d,f,w,w,w,15),A.dZ,new B.d1(1,A.cg,B.c(e,w,1,A.a2,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.ba,A.h,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),1)},
ahk(){var w=0,v=B.j(x.H),u=this,t
var $async$ahk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a7(t,!1).cc(B.eb(new C.e4L(u),!1,null,x.H)),$async$ahk)
case 2:t=u.e.gbm()
if(t!=null)t.bjV()
if(u.c!=null)u.l(new C.e4M())
u.FT()
return B.h(null,v)}})
return B.i($async$ahk,v)},
bLh(){var w,v,u,t,s=null,r=this.f
$.ajY()
if(r>=11)return s
w=this.r
v=w.q(0,r)
r=v?A.bj:A.aC
u=B.n(9)
t=B.K(L.CA,A.r,1.5)
return B.p(s,B.at(B.c(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.ya,s,s,s),s,s,s),A.f,s,D.b9i,new B.o(r,s,t,u,s,s,A.m),s,s,s,s,A.fe,s,s,s)},
ak9(){var w=0,v=B.j(x.H),u=this,t
var $async$ak9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bU(F.n7,null,new C.e4Y(u),t,!0,!0,!0,A.kw,!1,!1,x.H),$async$ak9)
case 2:return B.h(null,v)}})
return B.i($async$ak9,v)},
ce5(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.aA(r,B.p(r,D.c2A,A.f,r,r,new B.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e53(d),r,r,r,r,r,r,!1,A.a4),o=B.n(11)
o=B.p(r,D.bfh,A.f,r,r,new B.o(A.bt,r,B.K(A.aH.j(0.45),A.r,1),o,r,r,A.m),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.p(r,B.x(B.a([B.A(B.a([p,A.aa,o,A.aa,B.E(B.x(B.a([D.h8W,B.c(w,r,1,A.a2,r,r,r,B.l(r,r,s.y>0||s.z>0?A.f1:A.hk,r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.B,r,A.e,A.h,0,A.p),1),new C.aAc(s.gckF(),r),A.ul,s.b2q(A.re,"Construction Lab: real 3D wiring, plumbing and a house",A.cW,new C.e54(s,d)),s.b2r(A.m2,"Challenges",A.aQ,s.gcCk(),s.bLh()),s.b2q(A.DG,"How to play",A.aH,new C.e55(d,e))],v),A.l,r,A.e,A.h,0,r,r),A.ak,B.A(B.a([s.atN(A.o6,"Circuits",A.bl,s.gcv0()),A.bb,s.atN(A.oX,"Repair",A.aQ,new C.e56(s)),A.bb,s.atN(I.xj,"Clear",A.bZ,new C.e57(s))],v),A.l,r,A.e,A.h,0,r,r)],v),A.l,r,A.e,A.N,0,A.p),A.f,r,r,new B.o(L.CA,r,new B.bE(A.a1,A.a1,new B.ax(q,1,A.r,-1),A.a1),r,r,r,A.m),r,r,r,r,D.bLw,r,r,r)},
B(d){var w=this,v=null
$.aux="tech"
return B.c5(v,A.c7,B.bo(!0,B.x(B.a([w.ce5(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.htN(w.d,w.e,w.gce3(),v),1)],x.p),A.l,v,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
C.aAc.prototype={
R(){return new C.bcN(null,null)}}
C.bcN.prototype={
gaA9(){var w,v=this,u=v.d
if(u===$){w=B.br(null,A.Y,null,1,null,v)
w.cX(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
t(){this.gaA9().t()
this.byZ()},
B(d){var w=null,v=this.a.c
return B.aA(w,B.h9(new B.a5(42,42,B.ca(this.gaA9(),new C.cNW(this),w),w),w,"AI Inventor: say what you want to make",w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bcM.prototype={
a4(d,e){var w,v,u,t=null,s=e.eo(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.T()
w=B.L()
w.r=A.b_.j(0.25+0.15*o).gp(0)
w.y=N.oT
d.O(s,r+2+o*2,w)
w=B.L()
w.san(D.eKs.az(0,B.bX(s,r)))
d.O(s,r,w)
v=B.L()
v.b=A.ac
v.c=2.2
v.san(new B.he(A.z,0,6.283185307179586,A.x,D.d65,t,new B.mX(p)).az(0,B.bX(s,r)))
d.O(s,r,v)
p=new C.cNV(d)
p.$3(s.a7(0,A.ua),8+o*1.5,1)
q*=4
p.$3(s.a7(0,D.ezk),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a7(0,D.eBC),2.6,0.5+0.5*Math.cos(q))
u=B.h2(t,A.cM,t,t,t,D.fCc,A.a7,A.ch,t,A.e5,A.ci)
u.eY()
u.a4(d,s.a7(0,new B.r(-u.b.c/2,5)))},
aD(d){return d.b!==this.b}}
C.aAx.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.aAy.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bxC()}}
C.aMS.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.bBE.prototype={}
C.h3.prototype={}
C.Kv.prototype={
a9(){return"ScreenStyle."+this.b}}
C.mi.prototype={}
C.WA.prototype={
R(){return new C.aG6(A2.B4,null,null)}}
C.aG6.prototype={
gabh(){var w,v=this,u=v.d
if(u===$){w=B.br(null,A.oR,null,1,null,v)
w.ct(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
gac0(){var w=D.mF.h(0,this.a.c)
return w==null?D.aUl:w},
t(){if(this.f){P.D9(Y.Ln)
P.bH_()}this.gabh().t()
this.bAR()},
gBW(){var w=this.gabh().y
w=w==null?null:A.o.ao(w.a,1000)
return(w==null?0:w)/1000},
Ot(){var w,v=this,u=v.e
if(u==null)return null
w=F.iw[u].e
if(w===-2)return null
if(w===-1)return A.o.F(v.y+A.i.bc(Math.max(0,v.gBW()-v.z)/10),14)
return w},
Kb(d){this.l(new C.e0M(this,d))},
b5M(d){this.l(new C.e0N(this,d,14))},
aE4(d){var w=this.Ot()
if(w==null)w=d>0?-1:0
return this.b5M(w+d)},
cHp(d,e){if(e.a<=0||e.b<=0||this.Ot()==null)return
this.l(new C.e0X(this,d,e))},
aea(){return this.c6b()},
c6b(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aea=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.Ot()
if(q==null){w=1
break}r.a=!1
s=t.c
s.toString
w=3
return B.b(B.bU(A.L,null,new C.e0L(r,q),s,!0,!0,!0,null,!1,!1,x.H),$async$aea)
case 3:if(t.c!=null&&r.a)t.b5M(q)
case 1:return B.h(u,v)}})
return B.i($async$aea,v)},
cIZ(){var w=this,v=!w.f
w.l(new C.e0Y(w,v))
if(v){P.D9(Y.aci)
P.hpC(w.gac0().b===D.xV)}else{P.D9(Y.Ln)
P.bH_()}},
ce8(){var w,v=this
if(!v.f)return
B.jD()
v.l(new C.e0Z(v))
w=v.c.L(x.q).f
w.MG()
if(v.r)w.T(F.aWs)},
aQJ(d){return B.cg(new C.e0E(this,d))},
coe(d){var w,v=this,u=null,t=v.gBW(),s=t-v.w,r=s<1.4?new K.b0q(v.x,s):u
if(F.iw[d].e===-1){w=Math.max(0,t-v.z)
return new C.agB(d,w,r,A.o.F(v.y+A.i.bc(w/10),14),u)}return new C.agB(d,t,r,u,u)},
b_o(d){var w=null,v=A.c.j(0.92),u=d*0.42
return B.aG(!1,A.a3,!0,w,B.aM(!1,w,!0,new B.D(new B.R(u,0,u,0),B.A(B.a([B.V(A.kM,A.aw,w,w,w,d*0.6),new B.a5(d*0.18,w,w,w),B.c("Learn more",w,w,w,w,w,w,B.l(w,w,A.aw,w,w,w,w,w,w,w,w,d*0.48,w,w,A.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.N,0,w,w),w),A.nt,!0,w,w,w,w,D.hGu,w,w,w,w,w,w,this.gc6a(),w,w,w,w,w,w,w),A.f,v,0,w,w,A.nt,w,w,A.ai)},
b2s(d,e,f,g){var w=null,v=B.nm(w,A.b7,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w)
return B.aI(w,w,w,w,B.V(d,A.c,w,w,w,w),w,w,g,f,w,w,w,v,e,w)},
ce7(d,e,f){return this.b2s(d,e,f,null)},
cwj(){var w=this,v=null,u=new C.e0V(),t=A.v.j(0.72),s=B.n(22),r=B.K(w.gac0().d.j(0.5),A.r,1),q=u.$3(D.bVY,"AD \u2212",new C.e0R(w)),p=u.$3(A.asn,"AD +",new C.e0S(w)),o=u.$5$color$on(A.kL,"HOME",new C.e0T(w),w.gac0().d,w.e==null),n=w.e
n=n!=null&&F.iw[n].e===-1
return B.p(v,B.A(B.a([q,p,o,u.$5$color$on(A.zV,"ADS",new C.e0U(w),A.c5,n)],x.p),A.l,v,A.e,A.N,0,v,v),A.f,v,v,new B.o(t,v,r,s,v,v,A.m),v,v,D.hGA,v,A.HV,v,v,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.gac0(),l=o.f,k=!l||!o.r
l=l?B.aF(d,A.dK,x.w).w.r.b+26:8
w=o.ce7(A.cC,"Back to the board",new C.e1_(d))
v=o.f
u=v?As.Ir:A.xm
v=v?"Leave full screen":"Full screen"
v=o.b2s(u,v,o.gbcp(),D.hHm)
u=B.n(20)
t=o.e
s=m.a
r=x.p
q=new B.D(new B.R(8,l,8,0),B.A(B.a([w,A.aa,v,A.aa,B.E(new B.bK(A.a9,n,n,B.p(n,B.c(t==null?s:s+" \xb7 "+F.iw[t].a,n,1,A.a2,n,n,n,Au.y3,n,n,n),A.f,n,n,new B.o(A.b7,n,n,u,n,n,A.m),n,n,n,n,A.lY,n,n,n),n),1)],r),A.l,n,A.e,A.h,0,n,n),n)
p=m.b===D.xV?o.bNr(m):o.crH(m)
l=o.f
w=!l
v=l?o.gb2t():n
if(l){l=B.at(p,n,n,n)
u=k?1:0
r=new B.an(A.a0,n,A.b4,A.t,B.a([l,B.ao(n,B.xL(new B.dv(!k,q,n),A.aZ,A.i9,u),n,n,0,0,0,n)],r),n)
l=r}else l=B.x(B.a([q,A.ak,o.cwj(),B.E(new B.D(A.cB,B.at(p,n,n,n),n),1)],r),A.l,n,A.e,A.h,0,A.p)
return B.c5(n,A4.a0a,B.bo(w,B.aA(A.c0,l,A.y,!1,n,v,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!1,A.a4),w,!1,A.ag,w,w),n,!1,!1,n,n)},
ce6(d){var w
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
crH(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.abh
switch(n.a){case 1:w=44
break
case 2:w=30
break
case 3:w=22
break
case 4:w=26
break
default:w=14
break}v=B.ca(p.gabh(),new C.e0Q(p,w,d,m),o)
if(n===D.abi)v=new B.BW(D.bMa,v,o)
n=p.ce6(n)
u=p.f?A.hM:AB.a1C
t=m?4:5
s=d.c
r=B.ap(s,A.c,m?0.25:0.08)
r.toString
q=B.ap(s,A.v,0.5)
q.toString
q=B.a([r,s,q],x.O)
s=B.n(w)
r=B.a([new B.aa(0,A.H,d.d.j(0.28),A.J,36)],x.V)
return new B.fL(n,B.p(o,B.p(o,v,A.f,o,o,new B.o(A.v,o,o,B.n(w-3),o,o,A.m),o,o,o,o,A8.HW,o,o,o),A.f,o,o,new B.o(o,o,o,s,r,new B.a8(A.ay,A.aD,A.x,q,o,o),A.m),o,o,o,u,new B.R(t,t,t,t),o,o,o),o)},
bb1(d){var w=Date.now(),v=A.o.D(this.a.d+A.i.bc(this.gBW()*0.4),0,100),u=d.b===D.abh,t=u?34:20,s=u?28:18
return new B.D(new B.R(t,12,s,2),B.cg(new C.e0W(new B.W(w,0,!1),v)),null)},
axY(d,e,f){var w,v=null,u=d.d,t=B.ap(u,A.v,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.n(e*0.26)
w=x.p
t=B.a([B.p(v,B.at(B.c(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.o(v,v,v,u,D.dxF,new B.a8(A.ay,A.aD,A.x,t,v,v),A.m),v,e,v,v,v,v,v,e)],w)
if(f)A.d.u(t,B.a([A.at,B.c(d.a,v,1,A.a2,v,v,v,D.fIU,v,v,v)],w))
return B.aA(v,B.x(t,A.l,v,A.e,A.N,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.e0J(this,d),v,v,v,v,v,v,!1,A.a4)},
c42(d,e){return this.axY(d,e,!0)},
c3K(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=o===D.aUm||o===D.Bi,m=d.d,l=B.ap(m,A.v,0.55)
l.toString
m=B.ap(m,A.k8,0.5)
m.toString
m=B.a([l,A.dD,m],x.O)
l=q.bb1(d)
w=n?190:138
v=B.n(24)
u=B.K(A.aT,A.r,1)
w=B.aA(p,B.p(p,B.bx(B.n(23),B.b4(p,p,p,new C.agB(0,q.gBW(),p,p,p),A.hf),A.aq),A.f,p,p,new B.o(p,p,u,v,p,p,A.m),p,w,p,A.ia,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.e0H(q),p,p,p,p,p,p,!1,A.a4)
v=n?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.iw[s]
t.push(new B.cm(A.z,p,p,new B.dc(A.dp,A.z,A.f,q.c42(r,n?58:54),p),p))}l=B.a([l,A.ak,w,A.af,B.E(B.lc(0.92,t,v,8,12,A5.x4,p,!1),1)],u)
if(o!==D.abi){o=A.c.j(0.16)
w=B.n(28)
l.push(B.p(p,B.cg(new C.e0I(q)),A.f,p,p,new B.o(o,p,p,w,p,p,A.m),p,p,p,D.bGu,H.apd,p,p,p))}return B.p(p,B.x(l,A.l,p,A.e,A.h,0,A.p),A.f,p,p,new B.o(p,p,p,p,p,new B.a8(A.ay,A.aD,A.x,m,p,p),A.m),p,p,p,p,p,p,p,p)},
bGG(d,e){var w=this,v=null,u=w.Ot(),t=w.bb1(d),s=B.E(w.aQJ(e),1),r=x.p,q=B.a([B.bS(0,B.aA(v,B.p(v,B.at(B.c(F.iw[e].a,v,v,v,v,v,v,Ac.Lw,v,v,v),v,v,v),A.f,A.v,v,v,v,v,v,v,v,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.e0B(w),v,v,v,v,v,v,!1,A.a4),0,0,0)],r)
if(u!=null)u=!w.f||!w.r
else u=!1
if(u)q.push(B.ao(8,w.b_o(22),v,v,v,10,8,v))
return B.p(v,B.x(B.a([t,s,new B.a5(v,38,new B.an(A.a0,v,A.ad,A.t,q,v),v)],r),A.l,v,A.e,A.h,0,A.p),A.f,A.v,v,v,v,v,v,v,v,v,v,v)},
aTM(d,e){return B.ca(this.gabh(),new C.e0G(this,e,d),null)},
bNr(d){var w,v,u,t=this,s=null,r=t.a.c,q=r==="carscreen"
if(t.f)return B.qC(t.aTM(d,q))
r=r==="imac"?26:8
w=d.c
v=B.ap(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.n(q?26:14)
u=B.a([new B.aa(0,A.H,d.d.j(0.25),A.J,36)],x.V)
return new B.fL(1.5384615384615383,B.p(s,B.bx(B.n(q?20:8),t.aTM(d,q),A.aq),A.f,s,s,new B.o(s,s,s,v,u,new B.a8(A.ay,A.aD,A.x,w,s,s),A.m),s,s,s,A.ap7,new B.R(8,8,8,r),s,s,s),s)}}
C.bzG.prototype={
a4(d,e){var w,v,u,t,s,r=e.a,q=e.b,p=0+r,o=0+q
$.T()
w=B.L()
v=this.c
u=B.ap(v,A.v,0.6)
u.toString
t=B.ap(v,A.k8,0.4)
t.toString
w.san(new B.a8(A.ay,A.aD,A.x,B.a([u,A.dD,t],x.O),null,null).az(0,new B.a4(0,0,p,o)))
d.aE(new B.a4(0,0,p,o),w)
for(p=this.b,o=p*0.4,p*=0.3,s=0;s<5;++s){w=Math.sin(o+s)
u=Math.sin(p+s*1.7)
t=new B.as(A.T,A.Q,A.W,A.X,A.V)
t.r=v.j(0.1).gp(0)
t.y=D.bMf
d.O(new B.r(r*(0.15+0.2*s+0.05*w),q*(0.3+0.3*u)),q*(0.2+0.04*s),t)}},
aD(d){return!0}}
C.agB.prototype={
a4(d,e){var w=this
return K.Mu(d,e,w.b,w.c,w.e,w.d)},
aD(d){return!0}}
C.aOG.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.bys.prototype={}
C.aae.prototype={
B(d){var w=null
return B.c5(B.eV(w,w,w,!0,!0,D.ak5,w,1,!0,w,0,!1,w,!1,w,w,B.aI(w,w,w,w,I.atV,w,w,w,new C.cpg(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.hhZ,w,w,w,1,w,!0),D.ak5,B.co(B.a([D.eD4,B.cg(new C.cph())],x.p),w,w,D.bHA,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.Yf.prototype={
R(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aHO(w,new B.au(A.ax,$.az()),$,A.bH,0,B.a([],x.X),null,null)}}
C.aHO.prototype={
a_(){this.a3()
this.mn()},
b8S(d){var w=this.d.length
return A.o.F(A.i.bc(A.i.F(A.i.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
mE(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b8S(v.f)
if(w!==v.x){v.x=w
E.mH("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.l(new C.f0H(v))
C.K_("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
cfY(){if(this.d.length<2)return
this.l(new C.f0D(this))},
b34(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.l(new C.f0C(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gcfX(),p=s.d,o=B.E(B.aA(r,B.b4(r,r,r,new C.bzS(p,s.f,r),A.hf),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.x(B.a([o,new B.a5(r,40,B.at(B.c(n,r,r,r,r,r,r,D.fR2,r,r,r),r,r,r),r)],w),A.l,r,A.e,A.h,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.aDO[A.o.F(v,8)].j(0.9)
t=new B.aP(20,20)
o.push(B.aA(r,B.p(r,B.c(p[v],r,r,r,r,r,r,D.fQe,r,r,r),A.f,r,r,new B.o(u,r,r,new B.bb(t,t,t,t),r,r,A.m),r,r,r,A.f7,A.hc,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.f0F(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a4))}p=A.c.j(0.07)
return E.lW(A.aQ,A.ff,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.x(B.a([new E.fi(o,r,r),B.A(B.a([B.E(B.aN(r,A.Z,!1,r,!0,A.t,r,B.aO(),s.e,r,r,r,r,r,2,B.bC(r,new B.b6(4,B.n(14),A.a1),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kz,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.al,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.f0G(s),r,!1,r,r,!1,r,!0,r,A.ae,r,r,r,r,r,r,r,r,r,r,r,A.ds,!0,A.a7,r,A.ao,r,r,r,r),1),A.aa,new E.fI(A.ib,"Add",s.gcfV(s),A.c,r),A.bb,new E.fI(A.o4,"Spin",q,A.bf,r)],w),A.l,r,A.e,A.h,0,r,r)],w),A.l,r,A.e,A.N,0,A.p))}}
C.bzS.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=k/2,i=e.b,h=i/2+10,g=new B.r(j,h),f=Math.min(k,i)/2-24
i=f+8
k=$.T()
w=B.L()
w.r=D.blG.gp(0)
d.O(g,i,w)
w=B.L()
w.b=A.ac
w.c=3
w.r=A.aQ.gp(0)
d.O(g,i,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(i=d.c,t=this.c,s=u/2,r=0;r<v;++r){q=t+r*u
p=B.bX(g,f)
o=new B.as(A.T,A.Q,A.W,A.X,A.V)
o.r=D.aDO[A.o.F(r,8)].gp(0)
d.cQ(p,q,u,!0,o)
o=B.bX(g,f)
p=new B.as(A.T,A.Q,A.W,A.X,A.V)
p.b=A.ac
p.c=2
p.r=A.c.j(0.6).gp(0)
d.cQ(o,q,u,!0,p)
J.bs(i.save())
i.translate(j,h)
i.rotate((q+s)*180/3.141592653589793,0,0)
p=w[r]
if(p.length>12)p=A.a.aw(p,0,11)+"\u2026"
n=new B.j8(new B.eG(p,l,l,A.cZ,l,l,l,l,l,l,D.fD0),A.a7,A.ch,new B.kw(1),l,l,l,l,A.ci,l,A.cM)
n.eY()
p=n.b
o=p.c
p=p.a.c
n.a4(d,new B.r(f-o-16,-p.gb8(p)/2))
i.restore()}i=B.L()
i.r=D.ajI.gp(0)
d.O(g,20,i)
i=B.L()
i.b=A.ac
i.c=3
i.r=A.aQ.gp(0)
d.O(g,20,i)
m=new B.aH(k.r,A.aj,l,l,B.a([],x.v))
h-=f
m.E(new B.aZ(j,h+26))
h-=10
m.E(new B.aq(j-14,h))
m.E(new B.aq(j+14,h))
m.E(new B.bA())
h=B.L()
h.r=A.c.gp(0)
d.af(m,h)
h=B.L()
h.b=A.ac
h.c=2
h.r=A.b7.gp(0)
d.af(m,h)},
aD(d){return!0}}
C.X_.prototype={
R(){return new C.bnJ($,A.bH,0,B.a([],x.X),null,null)}}
C.bnJ.prototype={
a_(){this.a3()
this.mn()},
mE(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.K_("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.Vg(900,new C.e8u())}w.l(new C.e8v())},
b36(d){return this.l(new C.e8p(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.b_(A.o.v(A.i.ao(m,60)),2,"0")
v=A.a.b_(A.o.v(A.o.F(A.i.cF(m),60)),2,"0")
m=B.b4(n,n,n,new C.buv(l,A.bZ,n),A.aVR)
u=B.c(w+":"+v,n,n,n,n,n,n,D.fHO,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.at(new B.a5(280,280,new B.an(A.z,n,A.ad,A.t,B.a([m,B.x(B.a([u,B.c(t,n,n,n,n,n,n,D.fGJ,n,n,n),A.at,B.c("Sessions done: "+o.r,n,n,n,n,n,n,A.wc,n,n,n)],s),A.l,n,A.e,A.N,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.duk[r]
u.push(new E.e1(""+q+" min",o.d===q,new C.e8r(o,q),n,A.bZ,n))}m=o.f
p=m?Ae.vy:A.fN
m=m?"Pause":"Start"
return E.lW(A.bZ,A.ff,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.x(B.a([new E.fi(u,n,n),new E.fi(B.a([new E.fI(p,m,new C.e8s(o),A.bf,n),new E.fI(A.nk,"Reset",new C.e8t(o),A.c,n)],s),n,n)],s),A.l,n,A.e,A.N,0,A.p))}}
C.buv.prototype={
a4(d,e){var w,v,u,t,s=e.eo(A.J),r=e.a/2-14
$.T()
w=B.L()
w.b=A.ac
w.c=16
w.r=A.c.j(0.08).gp(0)
d.O(s,r,w)
w=B.bX(s,r)
v=B.L()
v.b=A.ac
v.c=16
v.d=A.bG
u=this.c
t=B.ap(u,A.c,0.4)
t.toString
v.san(new B.he(A.z,-1.5707963267948966,4.71238898038469,A.x,B.a([u,t,u],x.O),null,null).az(0,B.bX(s,r)))
d.cQ(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aD(d){return d.b!==this.b}}
C.W9.prototype={
R(){return new C.bni($,A.bH,0,B.a([],x.X),null,null)}}
C.bni.prototype={
a_(){this.a3()
this.mn()},
mE(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.Un.h(0,p.d)
w.toString
v=A.d.eH(w,new C.dT5())
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
E.mH("flute",D.cfi[t]+5,1400,0.35)}p.l(new C.dT6())},
gcg0(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.Lj("Press Start",0.5)
w=D.Un.h(0,this.d)
w.toString
v=A.d.eH(w,new C.dT0())
u=A.i.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.Lj("Breathe in",0.5+0.5*A.dQ.aA(0,p))
case 1:return new B.Lj("Hold",1)
case 2:return new B.Lj("Breathe out",1-0.5*A.dQ.aA(0,p))
default:return new B.Lj("Hold",0.5)}}}return new B.Lj("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gcg0(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.fX.j(0.12+(3-u)*0.05)
n.push(B.p(q,q,A.f,q,q,new B.o(s,q,q,q,u===0?B.a([new B.aa(0,A.H,A.fX.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(B.c(p.a,q,q,q,q,q,q,A.qr,q,q,q))
n.push(B.ao(0,B.c("Breaths: "+r.w,q,q,q,q,q,q,A.kz,q,q,q),q,q,q,q,q,q))
n=B.at(new B.a5(300,340,new B.an(A.z,q,A.ad,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aQ(D.Un.geA(D.Un));w.C();){v=w.gP(w)
o.push(new E.e1(v,r.d===v,new C.dT3(r,v),q,A.fX,q))}w=r.e
v=w?A.vC:A.fN
w=w?"Stop":"Start"
o.push(new E.fI(v,w,new C.dT4(r),A.bf,q))
return E.lW(A.fX,A.ff,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new E.fi(o,q,q))}}
C.aLg.prototype={}
C.WQ.prototype={
R(){return new C.bnA(new B.cA(null,x.A),B.a([],x.au),A.aw,A.c)}}
C.bnA.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aI(s,s,s,s,I.p5,s,s,s,new C.e4k(t,d),s,s,s,s,"Share",s)],r),p=B.bx(B.n(18),new B.e6(B.aA(s,B.b4(s,s,s,new C.bpD(t.e,t.x,s),A.hf),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e4l(t),new C.e4m(t),s,s,s,s,s,s,s,s,s,new C.e4n(t),s,s,s,s,!1,A.a4),t.d),A.aq),o=B.a([],r)
for(w=0;w<9;++w){v=D.d7O[w]
u=!t.w&&t.f.A(0,v)
o.push(new E.Gn(v,u,new C.e4o(t,v),!1,s))}u=t.r
return E.lW(A.bB,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.D(A.bT,p,s),"DRAW PAD",B.x(B.a([new E.fi(o,s,s),E.j6(A.bB,""+A.i.S(u),"Brush",30,2,new C.e4p(t),u),new E.fi(B.a([new E.e1("Eraser",t.w,new C.e4q(t),A.zW,A.bB,s),new E.fI(A.q_,"Undo",new C.e4r(t),A.c,s),new E.fI(A.eq,"Clear",new C.e4s(t),A.c,s),new E.fI(A.QA,"Paper",new C.e4t(t),A.c,s)],r),s,s)],r),A.l,s,A.e,A.N,0,A.p))}}
C.bpD.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k
$.T()
w=B.L()
w.r=this.c.gp(0)
d.aE(new B.a4(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=x.v,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=$.T()
q=new B.as(A.T,A.Q,A.W,A.X,A.V)
p=s.a
q.r=p.gp(p)
o=s.b
q.c=o
q.d=A.bG
q.e=A.dP
q.b=A.ac
n=s.c
if(n.length===1){r=A.d.gH(n)
n=new B.as(A.T,A.Q,A.W,A.X,A.V)
n.r=p.gp(p)
d.O(r,o/2,n)}else{p=B.a([],u)
m=new B.aH(r.r,A.aj,null,null,p)
p.push(new B.aZ(A.d.gH(n).a,A.d.gH(n).b))
m.ac()
for(l=1;l<n.length-1;){r=n[l]
o=r.a;++l
k=n[l]
r=r.b
k=new B.cj(o,r,(o+k.a)/2,(r+k.b)/2)
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
C.XC.prototype={
R(){var w=x.S
return new C.aH4(B.aR(w),B.aR(w))}}
C.aH4.prototype={
a_(){this.a3()
this.avj()},
avj(){var w,v,u=this,t=x.N,s=B.bt(D.dzY,!0,t)
A.d.DP(s)
w=x.S
v=B.U(s).c
t=B.B(B.cU(s,0,B.dA(u.d,"count",w),v),t)
A.d.u(t,B.cU(s,0,B.dA(u.d,"count",w),v))
A.d.DP(t)
u.e=t
u.f.a6(0)
u.r.a6(0)
u.w=0
u.x=!1},
cfW(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
E.mH("bell",12+A.o.F(d,9),150,0.35)
s.l(new C.ew6(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gH(0)
u=w.gal(0)
w=s.e
w===$&&B.d()
t=x.H
if(w[v]===w[u])B.bL(A.nb,new C.ew7(s,v,u),t)
else{s.x=!0
B.bL(Am.CZ,new C.ew8(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.d()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.c("Moves: "+r.w,q,q,q,q,q,q,A.WW,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.ao(p,2)+" / "+o
o=x.p
p=B.x(B.a([new B.D(A.zr,B.A(B.a([u,B.c(p,q,q,q,q,q,q,B.l(q,q,w?A.aQ:A.ab,q,q,q,q,q,q,q,q,q,q,q,A.E,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.l,q,A.iz,A.h,0,q,q),q),B.E(B.iK(!0,q,q,A.y,new B.hY(v,8,8,1,q),new C.ewc(r),r.e.length,A.bg,q,A.ah,!1),1)],o),A.l,q,A.e,A.h,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.d9z[t]
o.push(new E.e1(s.b,r.d===s.a,new C.ewd(r,s),q,A.aH,q))}o.push(new E.fI(I.asm,"New game",new C.ewe(r),A.bf,q))
return E.lW(A.aH,A.ff,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new E.fi(o,q,q))}}
C.XN.prototype={
R(){return new C.aHr(B.a([],x.t))}}
C.aHr.prototype={
cg_(d){A.d.a6(this.d)
this.w=!0
this.b35()},
b35(){this.d.push(A.cV.av(4))
this.e=0
this.a0H()},
a0H(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0H=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.l(new C.eIQ(t))
s=x.H
w=3
return B.b(B.bL(A.lX,null,s),$async$a0H)
case 3:r=t.d,q=B.bt(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aWL(n)
w=7
return B.b(B.bL(new B.bh(1000*Math.max(280,600-r.length*18)),null,s),$async$a0H)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.l(new C.eIR(t))
case 1:return B.h(u,v)}})
return B.i($async$a0H,v)},
aWL(d){this.l(new C.eIO(this,d))
E.mH("marimba",D.cfh[d]+5,450,0.55)
B.bL(A.Hw,new C.eIP(this),x.H)},
cg1(d){var w,v,u=this
if(!u.w||u.r)return
u.aWL(d)
w=u.d
v=u.e
if(w[v]!==d){G.dF(90,"",600,0,0.5,"saw")
u.l(new C.eIS(u))
return}++v
u.e=v
if(v===w.length){u.l(new C.eIT(u))
B.bL(A.hx,new C.eIU(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.c("Best: "+q.x,p,p,p,p,p,p,W.aYt,p,p,p),n=B.c(q.y,p,p,p,p,p,p,D.fRt,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aCF[v]
u=u.j(q.f===v?1:0.35)
t=new B.aP(28,28)
s=q.f===v?B.a([new B.aa(0,A.H,D.aCF[v].j(0.8),A.J,30)],w):p
r=new B.ax(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.aA(p,B.cV(p,p,p,p,A.aZ,new B.o(u,p,new B.bE(r,r,r,r),new B.bb(t,t,t,t),s,p,A.m),A.jA,p,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eIV(q,v),p,p,p,p,p,p,!1,A.a4))}o=B.at(new B.D(A.ae,B.x(B.a([o,A.ak,n,A.di,new B.fL(1,B.lc(1,l,2,12,12,p,A.e8,!1),p)],m),A.l,p,A.ba,A.h,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return E.lW(A.bu,A.ff,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new E.fi(B.a([new E.fI(A.fN,n,q.gcfZ(q),A.bf,p)],m),p,p))}}
C.Y6.prototype={
R(){return new C.boR(new B.au(A.ax,$.az()))}}
C.boR.prototype={
ayU(d){return B.o4(A.i.a5(d,2),B.ag("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eX2(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.cv(B.aL(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eXb()
l=B.aN(m,A.Z,!1,m,!0,A.t,m,B.aO(),l,m,m,m,m,m,2,B.bC(m,m,m,m,m,m,m,m,!0,new B.b6(4,B.n(16),Ag.yA),m,m,m,m,m,m,m,m,m,m,m,new B.b6(4,B.n(16),D.b7L),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.ma,"Bill amount",!0,!0,!1,m,m,m,m,D.fOH,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.al,m,m,m,m,m,A.eh,m,m,m,1,m,m,!1,"\u2022",m,new C.eX7(n),m,m,m,!1,m,m,!1,m,!0,m,A.ae,m,m,m,m,m,m,m,m,m,m,m,A.aXs,!0,A.a7,m,A.ao,m,m,m,m)
k=A.bf.j(0.1)
s=B.n(20)
r=B.K(A.bf.j(0.35),A.r,1)
q=x.p
s=B.co(B.a([l,A.by,B.p(m,B.x(B.a([t.$2("Tip ("+A.i.S(n.e)+"%)","$"+n.ayU(w)),t.$2("Total","$"+n.ayU(v)),Ad.OP,t.$3$big("Each of "+n.f+" pays","$"+n.ayU(u),!0)],q),A.l,m,A.e,A.h,0,A.p),A.f,m,m,new B.o(k,m,r,s,m,m,A.m),m,m,m,m,A.bR,m,m,m)],q),m,m,A.f9,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cU4[p]
r.push(new E.e1(""+o+"%",A.i.S(n.e)===o,new C.eX8(n,o),m,A.bf,m))}l=n.f
return E.lW(A.bf,A.ff,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.x(B.a([new E.fi(r,"TIP",m),E.j6(A.aH,""+l,"People",20,1,new C.eX9(n),l),new E.fi(B.a([new E.e1("Round up",n.r,new C.eXa(n),m,A.aQ,m)],q),m,m)],q),A.l,m,A.e,A.N,0,A.p))}}
C.XB.prototype={
R(){var w=B.a([3,5],x.t)
return new C.bol(w,A.cV,$,A.bH,0,B.a([],x.X),null,null)}}
C.bol.prototype={
a_(){this.a3()
this.mn()},
mE(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.i.bc(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.av(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.av(6)+1)
u.f=t
E.Y8("snare",0,0.5)}u.l(new C.euM())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.h9()
u.w=t
u.x=t?0:3.141592653589793
E.mH("bell",24,400,0.5)}u.l(new C.euN())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bh6(v,o.r>0,n))}u=B.aA(n,B.at(B.bZ(A.fU,m,A.br,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.euF(o),n,n,n,n,n,n,!1,A.a4)}else if(m==="coin"){t=A.i.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.K(A.de,A.r,6)
s=B.a([new B.aa(0,A.H,A.aQ.j(0.4),A.J,30)],x.V)
u=B.aA(n,B.at(B.e9(A.z,B.p(A.z,B.c(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fNQ,n,n,n),A.f,n,n,new B.o(n,n,v,n,s,D.eKw,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.euG(o),n,n,n,n,n,n,!1,A.a4)}else{m=o.as
u=B.aA(n,B.at(B.x(B.a([B.c(m===0?"?":""+m,n,n,n,n,n,n,D.fCu,n,n,n),B.c("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kz,n,n,n)],x.p),A.l,n,A.e,A.N,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.euH(o),n,n,n,n,n,n,!1,A.a4)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.drr[r]
v.push(new E.e1(q.b,o.d===q.a,new C.euI(o,q),q.c,A.bl,n))}v=B.a([new E.fi(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(E.j6(A.bl,""+s,"Dice",4,1,new C.euJ(o),s))}if(o.d==="num"){s=o.z
s=E.j6(A.bl,""+s,"From",100,1,new C.euK(o),s)
p=o.Q
A.d.u(v,B.a([s,E.j6(A.bl,""+p,"To",1000,2,new C.euL(o),p)],m))}return E.lW(A.bl,A.ff,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.x(v,A.l,n,A.e,A.N,0,A.p))}}
C.bh6.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cV.ai()-0.5)*0.6
else w=0
v=B.n(22)
u=B.a([new B.aa(0,A.H,A.v.j(0.4),A.cz,14)],x.V)
t=B.a([],x.p)
for(s=D.dMT.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bK(s[q],p,p,B.p(p,p,A.f,p,p,A.Z0,p,18,p,p,p,p,p,18),p))
return B.eP(A.z,w,B.p(p,new B.an(A.a0,p,A.ad,A.t,t,p),A.f,p,p,new B.o(A.c,p,p,v,u,p,A.m),p,100,p,p,A.bF,p,p,100),p)}}
C.aOs.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.bBA.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bAD()}}
C.aON.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.bBG.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bAZ()}}
C.aPd.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.bBP.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bBq()}}
C.aPF.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
aZ(){this.b7()
this.b5()
this.bC()}}
C.bBY.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bBS()}}
var z=a.updateTypes(["P(u8)","~()","P(a6h)","ay<~>()","P(Dn)","F(u8,F)","H(H,u8)","P(Dj)","P(a0b)","P(adm)","P(a59)","P(nY)","Y7()","W8()","aae()","XH()","XW()","XI()","P(n8)","Wf()","agU(Z,F)","afL(Z,F)","~(a9<@,@>)","F(Dj,Dj)","m(er)","P(agI)","P(a2q)","P(Dy)","P(adS)","P(afO)","P(adA)","F(F,rs)","F(F,Dn)","m(rs)","~(rs,ai<m>,F)","rs?(Dn)","XB()","w(m,a2d)","P(ace)","~(Bm)","Ya()","~(xT,m,r,u,H)","~(m,u8)","WR()","Xl(Z)","OB(Z)","WA(Z,bz<H>,bz<H>)","Jc(Z)","Yf()","X_()","W9()","WQ()","XC()","XN()","Y6()","P(rs)"])
C.fSi.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+18}
C.fGO.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gH(d.e.split(". "))+"."},
$S:z+24}
C.fOD.prototype={
$1(d){var w
if(!this.a.MS(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fOE.prototype={
$1(d){return d.x},
$S:z+0}
C.fSf.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fSg.prototype={
$1(d){var w
if(!this.a.MS(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fSh.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.enP.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.enQ.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.y(this.b,this.c))},
$S:0}
C.enR.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd3(v).Q
v.toString
w.m7(v,A.eb,A.i9)}},
$S:7}
C.eo1.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a6(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.eo2.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.enY.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.enW.prototype={
$2(d,e){var w=this.a
w.r.push(B.cB(B.du(0,0,0,d,0,0),new C.enX(w,this.b,e)))},
$S:1885}
C.enX.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.enZ.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gXD().amc(0,u[1],u[2],u[3])
u[4].bP(0,new C.enU(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
G.dF(700+w.e*120,"",80,0,0.25,"square")
v.l(new C.enV(w.a,v,w.f,w.r))},
$S:0}
C.enU.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:185}
C.enV.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.i.bc(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.eo_.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gXD().an0(t,u[1],s,u[3])
G.dF(1500,"",45,0,0.25,"tri")
v=w.b
v.l(new C.enT(w.a,v,w.e,w.f))},
$S:0}
C.enT.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.i.bc(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.eo0.prototype={
$0(){G.dF(300,"",360,-1.2,0.3,"square")
var w=this.a
w.l(new C.enS(w,this.b))},
$S:0}
C.enS.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.eo5.prototype={
$0(){var w=this.a
return w.l(new C.eo4(w))},
$S:0}
C.eo4.prototype={
$0(){return this.a.at=!0},
$S:0}
C.eo6.prototype={
$0(){var w=this.a
return w.l(new C.eo3(w))},
$S:0}
C.eo3.prototype={
$0(){return this.a.at=!1},
$S:0}
C.eo7.prototype={
$0(){var w=this.a
w.f.sb1(0,this.b)
w.Qq()},
$S:0}
C.eo8.prototype={
$0(){return this.a.ZJ(this.b)},
$S:0}
C.eo9.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.Qq():w.aZJ()},
$S:2}
C.eoa.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.Qq():w.aZJ()},
$S:0}
C.eDc.prototype={
$2(d,e){return d+e},
$S:1886}
C.eDw.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.eDv(w,d))},
$S:1887}
C.eDv.prototype={
$0(){var w=B.aJ(J.t(this.b,"unlocked"))
w=w==null?null:A.i.M(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.eDx.prototype={
$0(){},
$S:0}
C.eDy.prototype={
$0(){},
$S:0}
C.eDe.prototype={
$0(){return this.a.l(new C.eDd(this.b,this.c))},
$S:0}
C.eDd.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eD3.prototype={
$1(d){return this.a.cx===d},
$S:31}
C.eD4.prototype={
$1(d){return this.a.cx=d},
$S:30}
C.eD5.prototype={
$1(d){return this.a.cy===d},
$S:31}
C.eD6.prototype={
$1(d){return this.a.cy=d},
$S:30}
C.eD7.prototype={
$1(d){return this.a.db===d},
$S:31}
C.eD8.prototype={
$1(d){return this.a.db=d},
$S:30}
C.eD9.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:31}
C.eDa.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.X(0,d):w.I(0,d)},
$S:30}
C.eDb.prototype={
$0(){var w=this.a
return w.l(w.gazu())},
$S:0}
C.eD1.prototype={
$1(d){return this.a.$1(!0)},
$S:72}
C.eD2.prototype={
$1(d){return this.a.$1(!1)},
$S:115}
C.eD0.prototype={
$1(d){return this.a.$1(!1)},
$S:144}
C.eDp.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.ch=n
n=B.b4(p,p,p,new C.bl1(o,p),n)
w=this.b
v=C.bEe("WORLD",w.a,w.c)
u=C.bEe("GRAVITY",B.v(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.i.S(t*100)
t=t<0.25?A.bZ:A.bf
t=C.bEe("FUEL",""+s+"%",t)
s=o.r.b
r=A.i.S(s*100)
s=s>D.Eh[o.db].d?A.bZ:A.c
q=x.p
s=B.a([v,u,t,C.bEe("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(C.bEe("HEIGHT",""+A.i.S(A.i.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ao(p,B.A(s,A.l,p,A.iz,A.h,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bJM(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.tW[w].a+".":"You landed on every world!"
v=B.a([new E.fI(A.o8,"Again",new C.eDk(o),A.c,p),new E.fI(A.oX,"Rebuild",new C.eDl(o),A.aQ,p)],q)
if(o.d+1<7)v.push(new E.fI(A.jE,"Next world",new C.eDm(o),A.bf,p))
n.push(C.hJc("Perfect landing!",w,A.bf,v))}if(o.as==="crashed")n.push(C.hJc("Crash!",o.at,A.bZ,B.a([new E.fI(A.o8,"Try again",new C.eDn(o),A.bf,p),new E.fI(A.oX,"Rebuild",new C.eDo(o),A.aQ,p)],q)))
return new B.an(A.a0,p,A.b4,A.t,n,p)},
$S:62}
C.eDk.prototype={
$0(){var w=this.a
return w.l(w.gazu())},
$S:0}
C.eDl.prototype={
$0(){var w=this.a
return w.l(new C.eDh(w))},
$S:0}
C.eDh.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eDm.prototype={
$0(){var w=this.a
return w.l(new C.eDg(w))},
$S:0}
C.eDg.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.eDn.prototype={
$0(){var w=this.a
return w.l(w.gazu())},
$S:0}
C.eDo.prototype={
$0(){var w=this.a
return w.l(new C.eDf(w))},
$S:0}
C.eDf.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eDq.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.l(new C.eDj(v,w))},
$S:0}
C.eDj.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.eDr.prototype={
$1(d){return this.a.y=d},
$S:9}
C.eDs.prototype={
$1(d){return this.a.Q=d},
$S:9}
C.eDt.prototype={
$1(d){return this.a.z=d},
$S:9}
C.eDu.prototype={
$0(){var w=this.a
return w.l(new C.eDi(w))},
$S:0}
C.eDi.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dSZ.prototype={
$0(){var w=0,v=B.j(x.k),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hc(B.a([C.hE1(),C.hE2()],x.D),x.K),$async$$0)
case 3:r=e
q=t.a
if(q.c==null){w=1
break}s=q.as
s.toString
s.kU(0,B.cT(J.t(r,1)))
q.l(new C.dSY(q,r))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:39}
C.dSY.prototype={
$0(){return this.a.d=x.m.a(J.t(this.b,0))},
$S:0}
C.dSz.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dSA.prototype={
$0(){return this.a.c0O(B.aV(J.t(this.b,"group")))},
$S:0}
C.dSB.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dSC.prototype={
$1(d){return A.a.b_(A.o.fw(A.o.D(A.i.S(d*255),0,255),16),2,"0")},
$S:313}
C.dT_.prototype={
$0(){return E.Y8("kick",0,0.25)},
$S:0}
C.dSD.prototype={
$0(){return this.a.cy=this.b},
$S:0}
C.dSE.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dSF.prototype={
$0(){return E.Y8("kick",0,0.5)},
$S:0}
C.dSG.prototype={
$0(){return G.dF(1300+this.a.RG.av(900),"",40,0,0.2,"square")},
$S:0}
C.dSI.prototype={
$0(){var w,v,u=this.b
if(u==="skin"){u=this.a
w=u.CW
if(w===2)w=1
else w=w===1?0:2
u.CW=w}else{w=this.a
v=w.ch
if(v.q(0,u))v.X(0,u)
else{v.I(0,u)
if(w.CW===2)w.CW=1}if(v.a===0&&w.CW===0)w.CW=2
u=w}if(u.cy!=null&&!A.d.aR(u.d.e,new C.dSH(u)))u.cy=null
u.id=0},
$S:0}
C.dSH.prototype={
$1(d){var w=this.a
return d.a===w.cy&&w.aBp(d)},
$S:z+10}
C.dSw.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p4
w=u.a
v=u.c
w.R8=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p3.toLowerCase()+"."},
$S:0}
C.dSx.prototype={
$0(){var w=this.a
return w.l(w.gcbJ())},
$S:0}
C.dSy.prototype={
$0(){return this.a.afz(null)},
$S:0}
C.dSP.prototype={
$0(){var w=this.a.as
return w==null?null:w.fc(0,B.J(["t","shot"],x.N,x.z))},
$S:0}
C.dSQ.prototype={
$0(){return this.a.cJ6(this.b.a)},
$S:0}
C.dSR.prototype={
$0(){return this.a.afz(this.b)},
$S:0}
C.dSS.prototype={
$1(d){var w=this.a
return w.l(new C.dSO(w,d))},
$S:6}
C.dSO.prototype={
$0(){return this.a.k4=this.b},
$S:0}
C.dST.prototype={
$0(){var w=this.a
return w.l(new C.dSN(w,this.b))},
$S:0}
C.dSN.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dSU.prototype={
$0(){var w=this.a
return w.l(new C.dSM(w))},
$S:0}
C.dSM.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.dSV.prototype={
$0(){var w=this.a
return w.l(new C.dSL(w))},
$S:0}
C.dSL.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.fc(0,B.J(["t","reset"],x.N,x.z))
w.cy=null
w.db=0.5
w.dx=0.05
w.fr=1
w.fy=D.MP},
$S:0}
C.dSW.prototype={
$0(){var w=this.a
return w.l(new C.dSK(w))},
$S:0}
C.dSK.prototype={
$0(){var w=this.a,v=!w.p2
w.p2=v
w.p4=0
w.cy=null
if(v)w.b1z()
else w.p3=null},
$S:0}
C.dSX.prototype={
$0(){var w=this.a
return w.l(new C.dSJ(w))},
$S:0}
C.dSJ.prototype={
$0(){var w=this.a
return w.ok=!w.ok},
$S:0}
C.c8S.prototype={
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
$S:343}
C.c8T.prototype={
$1(d){var w=new B.qI([],[]).o6(d.data,!0)
if(x.f.b(w)&&J.t(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:679}
C.fzQ.prototype={
$1(d){var w=J.a2(d)
return w.h(d,0)&&w.h(d,1)},
$S:230}
C.fzR.prototype={
$1(d){var w=J.a2(d)
return w.h(d,0)||w.h(d,1)},
$S:230}
C.fzS.prototype={
$1(d){var w=J.a2(d)
return w.h(d,0)!==w.h(d,1)},
$S:230}
C.fzZ.prototype={
$1(d){return!J.t(d,0)},
$S:230}
C.fA_.prototype={
$1(d){var w=J.a2(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:230}
C.fA0.prototype={
$1(d){var w=J.a2(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:230}
C.dUF.prototype={
$1(d){return this.a.aw7(0)},
$S:7}
C.dUj.prototype={
$0(){var w=this.b
return this.a.cx=new B.O(w,B.is7(),B.U(w).k("O<1,F>")).fD(0)},
$S:0}
C.dUm.prototype={
$1(d){return""+d},
$S:76}
C.dUG.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dUh.prototype={
$1(d){return this.a.aw7(this.b)},
$S:7}
C.dUi.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.aA0(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mU(0,d,a1.mo(0.15,0.3))
u=a1.mU(0,d,a1.mo(0.15,0.62))
t=a1.mU(0,"and",a1.mo(0.48,0.46))
s=a1.mU(0,a0,a1.mo(0.82,0.46))
a1=t.a
w.push(new C.nY(v.a,a1,0))
w.push(new C.nY(u.a,a1,1))
w.push(new C.nY(a1,s.a,0))
break
case 1:v=a1.mU(0,d,a1.mo(0.12,0.25))
u=a1.mU(0,d,a1.mo(0.12,0.65))
r=a1.mU(0,"xor",a1.mo(0.46,0.25))
q=a1.mU(0,"and",a1.mo(0.46,0.65))
p=a1.aA_(0,a0,a1.mo(0.82,0.25),0)
o=a1.aA_(0,a0,a1.mo(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.nY(a1,n,0))
m=u.a
w.push(new C.nY(m,n,1))
l=q.a
w.push(new C.nY(a1,l,0))
w.push(new C.nY(m,l,1))
w.push(new C.nY(n,p.a,0))
w.push(new C.nY(l,o.a,0))
break
case 2:k=a1.mU(0,"clock",a1.mo(0.15,0.4))
j=a1.mU(0,"not",a1.mo(0.45,0.65))
s=a1.mU(0,a0,a1.mo(0.82,0.3))
i=a1.mU(0,"buzzer",a1.mo(0.82,0.65))
a1=k.a
w.push(new C.nY(a1,s.a,0))
n=j.a
w.push(new C.nY(a1,n,0))
w.push(new C.nY(n,i.a,0))
break
default:h=a1.mU(0,d,a1.mo(0.12,0.25))
g=a1.mU(0,d,a1.mo(0.12,0.7))
f=a1.mU(0,"nor",a1.mo(0.5,0.25))
e=a1.mU(0,"nor",a1.mo(0.5,0.7))
s=a1.mU(0,a0,a1.mo(0.86,0.25))
a1=f.a
w.push(new C.nY(g.a,a1,0))
n=e.a
w.push(new C.nY(n,a1,1))
w.push(new C.nY(h.a,n,0))
w.push(new C.nY(a1,n,1))
w.push(new C.nY(a1,s.a,0))}},
$S:0}
C.dUn.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.aA0(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.Dj(p,"switch",new B.r(0.14*q.a,r*q.b),0))}o.mU(0,w.e,o.mo(0.86,0.5))},
$S:0}
C.dUc.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dUd.prototype={
$2(d,e){return A.i.aQ(d.c.b,e.c.b)},
$S:z+23}
C.dUe.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dUf.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dUg.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.aeT(this.c)
if(v.ax)C.K_("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gH(w)
v.CW=!1
if(v.ax)G.dF(140,"",250,0,0.3,"square")}},
$S:0}
C.dUo.prototype={
$0(){},
$S:0}
C.dUp.prototype={
$0(){return A.d.cJ(this.a.e,this.b)},
$S:0}
C.dUq.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dUl.prototype={
$0(){var w=this.a,v=this.b
w.d.X(0,v)
A.d.bq(w.e,new C.dUk(v))
w.cy=null},
$S:0}
C.dUk.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
C.dUb.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mU(0,this.b,new B.r(w.x.a*(0.3+v.ai()*0.4),w.x.b*(0.2+v.ai()*0.6))).a},
$S:0}
C.dUz.prototype={
$0(){var w=this.a
return w.l(new C.dUy(w))},
$S:0}
C.dUy.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dUA.prototype={
$2(d,e){var w=null,v=this.a,u=new B.av(e.b,e.d)
v.x=u
return B.aA(A.c0,B.jr(B.b4(w,w,w,new C.beZ(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dUt(v),w,w,w,new C.dUu(v),new C.dUv(v),new C.dUw(v),w,w,w,w,w,w,w,w,w,w,new C.dUx(v),w,w,w,!1,A.a4)},
$S:37}
C.dUx.prototype={
$1(d){return this.a.cdx(d.b)},
$S:56}
C.dUv.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cmU(u)
if(t!=null){v.as=t
v.at=u
return}w=v.aAW(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aI(0,u)}},
$S:50}
C.dUw.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.r(A.i.D(w.a+u.Q.a,46,u.x.a-46),A.i.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:19}
C.dUu.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c4j(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bq(v,new C.dUr(w))
u=t.as
u.toString
v.push(new C.nY(u,w.a,w.b))
B.k8()}}t.z=t.as=null},
$S:38}
C.dUr.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
C.dUt.prototype={
$1(d){return this.a.ayN(d.b)},
$S:320}
C.dUB.prototype={
$0(){return this.a.bFv(this.b.a)},
$S:0}
C.dUC.prototype={
$0(){return this.a.aw7(this.b.a)},
$S:0}
C.dUD.prototype={
$0(){var w=this.a
return w.l(new C.dUs(w))},
$S:0}
C.dUs.prototype={
$0(){var w=this.a
w.aA0(0)
w.ay=null},
$S:0}
C.dUE.prototype={
$0(){return this.a.cEF(this.b)},
$S:0}
C.cYQ.prototype={
$0(){var w=this,v=null,u=B.h2(v,A.cM,v,v,v,B.d_(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a7,A.ch,v,A.e5,A.ci)
u.eY()
return u},
$S:253}
C.e_P.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e_O.prototype={
$0(){return this.a.d=null},
$S:0}
C.e_R.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c6g()},
$S:132}
C.e_Q.prototype={
$0(){return B.a7(this.a,!1).hY()},
$S:0}
C.fAg.prototype={
$0(){return I.aNr},
$S:z+40}
C.fAh.prototype={
$0(){return D.e_4},
$S:z+43}
C.fAi.prototype={
$0(){return D.dWW},
$S:z+13}
C.fAj.prototype={
$0(){return D.eqP},
$S:z+14}
C.fAk.prototype={
$0(){return D.e8I},
$S:z+15}
C.fAl.prototype={
$0(){return I.aNi},
$S:z+16}
C.fAm.prototype={
$0(){return D.eoB},
$S:z+17}
C.fAn.prototype={
$0(){return I.aNq},
$S:z+12}
C.fAo.prototype={
$0(){return D.dZc},
$S:z+19}
C.ffv.prototype={
$2(d,e){return new C.agU(e,$.bIX()[e],new C.ffu(e,this.a),null)},
$S:z+20}
C.ffu.prototype={
$0(){var w=this.a,v=L.aKW.h(0,$.bIX()[w].a)
$.aux=v==null?"music":v
B.a7(this.b,!1).cc(B.eb(new C.ffs(w),!1,null,x.H))},
$S:0}
C.ffs.prototype={
$1(d){return $.bIX()[this.a].e.$0()},
$S:42}
C.ffw.prototype={
$2(d,e){return new C.afL(e,D.aDl[e],new C.fft(this.a,e),null)},
$S:z+21}
C.fft.prototype={
$0(){return this.a.d.$1(D.aDl[this.b])},
$S:0}
C.ffb.prototype={
$0(){return this.a.as=!0},
$S:0}
C.ffa.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ff0.prototype={
$0(){var w=this.a
w.ch=0
w.as=!1},
$S:0}
C.ff1.prototype={
$1(d){return this.bpY(d)},
bpY(d){var w=0,v=B.j(x.I),u,t=this,s,r,q
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
r.gr1().sp(0,d/t.b)
r.gJU().sp(0,0.5)
w=3
return B.b($.aU.glJ(),$async$$1)
case 3:r=$.aU.bk$.x.h(0,r.f)
s=r==null?null:r.gbg()
if(!(s instanceof B.oq))throw B.Y(B.bc("closed"))
q=C
w=4
return B.b(s.lv(t.c),$async$$1)
case 4:u=q.fYG(f,t.d,t.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:753}
C.ff2.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.ff_(w,d))},
$S:6}
C.ff_.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.ff3.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.ff9.prototype={
$1(d){var w=this
return new B.e8(new C.ff8(w.a,w.b,w.c,w.d),null)},
$S:21}
C.ff8.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=x.w,a2=B.aF(a3,a0,a1).w
a1=B.aF(a3,a0,a1).w
w=x.p
v=B.a([D.fZf,A.at,D.h57,A.af],w)
for(u=d.d,t=d.a,s=x.G,r=d.b,q=d.c,p=0;p<3;p=o){o=p+1
n=B.c("SLAB "+o,a0,a0,a0,a0,a0,a0,D.fO9,a0,a0,a0)
m=new B.aP(12,12)
l=new B.aP(12,12)
l=B.a([new B.bu(1,A.b9,B.aN(a0,A.Z,!1,a0,!0,A.t,a0,B.aO(),r[p],a0,a0,a0,a0,a0,2,new B.ee(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Title",a0,N.FE,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.bb(m,m,m,m),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.al,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ae,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jN,!0,A.a7,a0,A.ao,a0,a0,a0,a0),a0),A.aa,new B.bu(2,A.b9,B.aN(a0,A.Z,!1,a0,!0,A.t,a0,B.aO(),q[p],a0,a0,a0,a0,a0,2,new B.ee(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Small line",a0,N.FE,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.bb(l,l,l,l),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.al,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ae,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jN,!0,A.a7,a0,A.ao,a0,a0,a0,a0),a0)],w)
m=B.a([],w)
for(k=0;k<30;++k){j=D.dHN[k]
i=new B.aP(12,12)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.B(t.a.c.d,s)
t.w=h}g=A.d.gH(h).j(0.3)}else g=A.c.j(0.06)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.B(t.a.c.d,s)
t.w=h}f=A.d.gH(h)}else f=A.bx
e=new B.ax(f,u[p].A(0,j)?1.8:1,A.r,-1)
m.push(B.aA(a0,B.p(a0,B.V(j,u[p].A(0,j)?A.c:A.aR,a0,a0,a0,22),A.f,a0,a0,new B.o(g,a0,new B.bE(e,e,e,e),new B.bb(i,i,i,i),a0,a0,A.m),a0,a0,a0,A.f7,a0,a0,a0,42),A.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.ff6(a4,p,u,j),a0,a0,a0,a0,a0,a0,!1,A.a4))}A.d.u(v,B.a([n,A.ak,new B.c1(A.aK,A.e,A.h,A.l,a0,A.p,a0,0,l,a0),A.M,new B.a5(a0,44,B.co(m,a0,a0,a0,a0,a0,A.aK,!1),a0),A.aB],w))}v.push(B.bI(A.BC,a0,new C.ff7(t,r,q,u,a3),a0))
return new B.D(new B.R(0,0,0,a2.f.d),B.bo(!0,new B.cS(new B.aY(0,1/0,0,a1.a.b*0.86),B.co(v,a0,a0,A9.zt,a0,a0,A.ah,!0),a0),!0,!1,A.ag,!0,!0),a0)},
$S:102}
C.ff6.prototype={
$0(){var w=this
return w.a.$1(new C.ff5(w.b,w.c,w.d))},
$S:0}
C.ff5.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.ff7.prototype={
$0(){var w=this,v=w.a
v.l(new C.ff4(v,w.b,w.c,w.d))
B.a7(w.e,!1).N(null)},
$S:0}
C.ff4.prototype={
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
C.ffj.prototype={
$0(){var w=this.a
return w.l(new C.ffi(w))},
$S:0}
C.ffi.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.ffk.prototype={
$0(){return E.uQ(this.b,this.a.f,"scene")},
$S:0}
C.ffl.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ap(A.d.gH(u),A.d.gal(u),0.4)
u.toString
w=this.a.gJU().x
w===$&&B.d()
return new B.bQ(new B.o(v,v,v,v,v,new B.bT(D.b5d,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.c7],x.O),v,v),A.m),A.bm,v,v)},
$S:350}
C.ffm.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.at(new B.dc(A.dp,A.z,A.f,B.ca(new B.hA(B.a([u.gr1(),u.gJU()],x.dS)),new C.ffh(u,this.b,v),w),w),w,w,w)},
$S:243}
C.ffh.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gr1().x
r===$&&B.d()
w=r<0.9?1:1-C.bvs(r,0.9,0.98)
v=s.gJU().x
v===$&&B.d()
u=A.dQ.aA(0,v)
switch(s.gaA1().a){case 0:s=s.bEF(t.b,r,u,t.c)
break
case 1:s=s.bVR(t.b,r,u,t.c)
break
case 2:s=s.cJA(t.b,r,u,t.c)
break
case 3:s=s.bHF(t.b,r,u,t.c)
break
case 4:s=s.bL3(t.b,r,u,t.c)
break
case 5:s=s.cdy(t.b,r,u,t.c)
break
default:s=null}return B.d4(s,w)},
$S:187}
C.ffn.prototype={
$2(d,e){var w=B.ac1(this.b),v=this.c.d,u=B.ap(A.d.gH(v),A.d.gal(v),0.4)
u.toString
v=B.ap(A.d.gH(v),A.d.gal(v),0.4)
v.toString
v=w.cSC(u,A.bx,v,3.5)
u=this.a
w=u.gr1().x
w===$&&B.d()
return B.Zy(B.ld(null,null,null,1,0,new C.ffg(u),A.i.D(w,0,1)),v)},
$S:1891}
C.ffg.prototype={
$1(d){var w=this.a
w.gr1().sp(0,d)
if(w.as)w.l(new C.ffc(w))},
$S:6}
C.ffc.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ffo.prototype={
$0(){var w=this.a
w.gr1().sp(0,0)
w.a0e()},
$S:0}
C.ffp.prototype={
$1(d){var w=this.a
w.l(new C.fff(w,d))
if(w.as)w.a0e()},
$S:6}
C.fff.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.ffq.prototype={
$0(){var w=this.a
w.l(new C.ffe(w,this.b))
w.gr1().sp(0,0)
if(w.as)w.a0e()},
$S:0}
C.ffe.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.ffr.prototype={
$0(){var w=this.a
return w.l(new C.ffd(w,this.b))},
$S:0}
C.ffd.prototype={
$0(){var w=B.B(this.b,x.G)
return this.a.w=w},
$S:0}
C.feY.prototype={
$2(d,e){return A.i.aQ(d.a,e.a)},
$S:1892}
C.feZ.prototype={
$1(d){return d.b},
$S:1893}
C.dul.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.dum.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.dui.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.duj.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.duk.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dun.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.duo.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dup.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.duq.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.dur.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.dus.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.dut.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.duu.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.duv.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.eCx.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eCm.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.eCo.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gZ(e.b),97)},
$S:z+31}
C.eCp.prototype={
$2(d,e){return d+A.o.F(A.a.gZ(e.a),31)+A.o.F(A.a.gZ(e.b),17)},
$S:z+32}
C.eCs.prototype={
$1(d){var w=D.nn.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+33}
C.eCt.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.U(q),o=x.dg,n=B.B(new B.ed(new B.cN(new B.X(q,new C.eCu(d),p.k("X<1>")),new C.eCv(r),p.k("cN<1,rs?>")),o),o.k("M.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aL(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.I)(n),++v){u=n[v]
if(w.length>=6)return
t=B.B(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.eCu.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eCv.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.eCq.prototype={
$1(d){return D.nn.h(0,d.b).c===D.yu},
$S:z+55}
C.eCr.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eCX.prototype={
$1(d){var w=this.a,v=d.a,u=A.i.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.vS(0,u)
w.a8h(A.o.ao(v,1000))},
$S:7}
C.eCw.prototype={
$0(){},
$S:0}
C.eCi.prototype={
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
C.eCz.prototype={
$1(d){var w=null,v=this.a.b
return B.bo(!0,B.x(B.a([A.M,B.dO(!1,w,w,w,!0,w,w,w,!0,w,w,B.V(D.nn.h(0,v).b,D.nn.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.hgS,w,B.c(D.nn.h(0,v).a,w,w,w,w,w,w,A.hh,w,w,w),w,w,w),B.dO(!1,w,w,w,!0,w,w,w,!0,w,w,A0.atZ,w,w,w,w,new C.eCy(d),!1,w,w,w,w,w,w,w,D.h8_,w,w,w)],x.p),A.l,w,A.e,A.N,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.eCy.prototype={
$0(){B.a7(this.a,!1).N(!0)
return null},
$S:0}
C.eCB.prototype={
$1(d){var w,v,u,t=null,s=B.aF(d,t,x.w).w,r=B.a([D.eCS],x.p)
for(w=0;w<6;++w){v=D.aDI[w]
u=B.c(v.a,t,t,t,t,t,t,A.hh,t,t,t)
r.push(B.dO(!1,t,t,t,!0,t,t,t,!0,t,t,D.c77,t,t,t,t,new C.eCA(d,v),!1,t,t,t,t,t,B.c(v.b,t,t,t,t,t,t,A.ma,t,t,t),t,u,t,t,t))}return B.bo(!0,new B.cS(new B.aY(0,1/0,0,s.a.b*0.7),B.co(r,t,t,D.bLl,t,t,A.ah,!0),t),!0,!1,A.ag,!0,!0)},
$S:27}
C.eCA.prototype={
$0(){B.a7(this.a,!1).N(this.b)
return null},
$S:0}
C.eCl.prototype={
$1(d){var w=null
return B.eh(B.a([B.bM(!1,A.dw,w,w,!0,w,w,w,new C.eCj(d),w,w),B.bM(!1,A.FK,w,w,!0,w,w,w,new C.eCk(d),w,w)],x.p),w,w,L.mn,D.h5k,w,w,w,w,D.h8j,w)},
$S:18}
C.eCj.prototype={
$0(){B.a7(this.a,!1).N(!1)
return null},
$S:0}
C.eCk.prototype={
$0(){B.a7(this.a,!1).N(!0)
return null},
$S:0}
C.eCV.prototype={
$0(){var w=this.a
return w.l(new C.eCU(w))},
$S:0}
C.eCU.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eCW.prototype={
$2(d,e){var w,v,u,t=null,s=new B.av(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.nB(new C.eCL(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.bga:t
v=B.a([B.b4(u,t,t,new C.bl_(w,v,new C.eCM(r),new C.eCN(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ao(t,new B.dv(!0,B.ca(w,new C.eCO(r),t),t),t,t,10,10,6,t))
if(r.ax)v.push(r.bMN())
return B.aA(A.c0,B.jr(new B.an(A.a0,t,A.b4,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.eCP(r),t,r.gcog(),t,new C.eCQ(r),new C.eCR(r),new C.eCS(r),t,t,t,t,t,t,t,t,t,t,new C.eCT(r),t,t,t,!1,A.a4)},
$S:37}
C.eCL.prototype={
$0(){return this.a.adV(this.b)},
$S:0}
C.eCT.prototype={
$1(d){return this.a.cHd(d.b)},
$S:56}
C.eCR.prototype={
$1(d){return this.a.coh(d.b)},
$S:50}
C.eCS.prototype={
$1(d){return this.a.coi(d.b)},
$S:19}
C.eCQ.prototype={
$1(d){return this.a.b5g()},
$S:38}
C.eCP.prototype={
$1(d){return this.a.aeD(d.b)},
$S:320}
C.eCM.prototype={
$0(){return this.a.z},
$S:692}
C.eCN.prototype={
$0(){return this.a.Q},
$S:754}
C.eCO.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bR7()
if(p.length===0)return A.bK
w=A.v.j(0.55)
v=B.n(14)
u=B.K(A.bx,A.r,1)
t=B.a([D.h2H,A.cQ],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.I)(p),++r)t.push(B.c(p[r],q,2,A.a2,q,q,q,A.aYp,q,q,q))
return B.p(q,B.x(t,A.B,q,A.e,A.N,0,A.p),A.f,q,q,new B.o(w,q,u,v,q,q,A.m),q,q,q,q,A.hc,q,q,q)},
$S:66}
C.eCn.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.n(12),t=B.K(e.j(0.6),A.r,1),s=x.p
return new B.D(A.dU,B.A(B.a([B.p(w,B.V(d,e,w,w,w,21),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,38,w,w,w,w,w,38),A.bc,B.E(B.x(B.a([B.c(f,w,w,w,w,w,w,Ao.WR,w,w,w),A.bs,B.c(g,w,w,w,w,w,w,F.acW,w,w,w)],s),A.B,w,A.e,A.h,0,A.p),1)],s),A.B,w,A.e,A.h,0,w,w),w)},
$S:1895}
C.eCH.prototype={
$0(){var w=this.a.c
w.toString
return B.a7(w,!1).hY()},
$S:0}
C.eCI.prototype={
$0(){var w=this.a
return w.l(new C.eCG(w))},
$S:0}
C.eCG.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eCJ.prototype={
$0(){var w=this.a
return w.l(new C.eCF(w))},
$S:0}
C.eCF.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.eCK.prototype={
$0(){var w=this.a
return w.l(new C.eCE(w))},
$S:0}
C.eCE.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eCD.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.nn.gdS(D.nn),w=w.gae(w);w.C();){v=w.gP(w)
if(v.b.c===e)p.push(v.a)}w=B.c(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.I)(p),++r)u.push(s.cBT(p[r]))
return new B.D(U.an7,B.x(B.a([new B.D(Ay.aoV,w,q),B.A(u,A.l,q,A.e,A.h,0,q,q)],v),A.B,q,A.e,A.h,0,A.p),q)},
$S:z+37}
C.eCC.prototype={
$0(){return this.a.cdF(this.b)},
$S:0}
C.duh.prototype={
$0(){var w=this,v=null,u=B.h2(v,A.cM,v,v,v,B.d_(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a7,A.ch,v,A.e5,A.ci)
u.eY()
return u},
$S:253}
C.bS6.prototype={
$1(d){return d.r<=0},
$S:z+38}
C.bSh.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bSc.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bSi.prototype={
$1(d){return this.a.MS(d)&&!d.x},
$S:z+0}
C.bSj.prototype={
$2(d,e){return Math.max(d,this.a.aDP(e))},
$S:z+6}
C.bSl.prototype={
$2(d,e){var w=this.a
return w.c_(0,d.a+"."+e,new C.bSm(w))},
$S:z+5}
C.bSm.prototype={
$0(){return this.a.a},
$S:91}
C.bSk.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:68}
C.bSn.prototype={
$2(d,e){var w=this.a
return w.c_(0,this.b.$1(this.c.$2(d,e)),new C.bSo(w))},
$S:z+5}
C.bSo.prototype={
$0(){return this.a.a},
$S:91}
C.bS8.prototype={
$2(d,e){var w=this.a
return w.c_(0,d.a+"."+e,new C.bS9(w))},
$S:z+5}
C.bS9.prototype={
$0(){return this.a.a},
$S:91}
C.bS7.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:68}
C.bSa.prototype={
$2(d,e){var w=this.a
return w.c_(0,this.b.$1(this.c.$2(d,e)),new C.bSb(w))},
$S:z+5}
C.bSb.prototype={
$0(){return this.a.a},
$S:91}
C.bS5.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bSp.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bSd.prototype={
$1(d){return d!==this.b&&this.a.aKa(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bSg.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bSf.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bSe.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bMs.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bMt.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.bMr.prototype={
$2(d,e){return new B.a8(A.aX,A.b1,A.x,e,D.dhH,null).az(0,d)},
$S:1896}
C.cwn.prototype={
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
$S:185}
C.h48.prototype={
$1(d){var w
$.T()
w=B.L()
w.r=d.gp(0)
return w},
$S:1897}
C.h4a.prototype={
$2(d,e){var w
$.T()
w=B.L()
w.b=A.ac
w.c=e
w.r=d.gp(0)
w.d=A.bG
return w},
$S:1898}
C.h4b.prototype={
$5(d,e,f,g,h){return B.by(new B.a4(d,e,d+f,e+g),new B.aP(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1899}
C.h49.prototype={
$3(d,e,f){var w
$.T()
w=B.L()
w.san(new B.a8(A.aX,A.b1,A.x,B.a([e,f],x.O),null,null).az(0,d))
return w},
$S:1900}
C.bM4.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.bM5.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bM3(w))},
$S:0}
C.bM3.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bM6.prototype={
$0(){return B.a([],x.F)},
$S:1901}
C.bM7.prototype={
$1(d){return this.a.bx(d).a>15e5},
$S:369}
C.bM8.prototype={
$0(){var w,v,u
J.bJ6(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.rz(v))if(C.hoL(v.b))w.b4K(v)
else w.a1m(v)
else{u=w.a.c.bhL(v)
w.aga(u==null?"The "+$.qS().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bM2.prototype={
$1(d){return new B.e8(new C.bM_(this.a,this.b),null)},
$S:21}
C.bM_.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p=null,o=this.b,n=new C.bM0(this.a,o,a3),m=$.qS(),l=o.b,k=m.h(0,l).d,j=A.i.S(o.ch/1.04),i=new C.bM1(o,n,k),h=B.n(26),g=B.K(k.j(0.55),A.r,1.4),f=x.V,e=B.a([new B.aa(0,A.H,k.j(0.25),A.J,26)],f),d=B.p(p,p,A.f,p,p,new B.o(A.aT,p,p,B.n(3),p,p,A.m),p,4,p,p,p,p,p,42),a0=k.j(0.2),a1=B.K(k,A.r,1)
a1=B.p(p,B.at(B.c(m.h(0,l).c,p,p,p,p,p,p,A.qq,p,p,p),p,p,p),A.f,p,p,new B.o(a0,p,a1,p,p,p,A.a6),p,42,p,p,p,p,p,42)
a0=x.p
w=B.E(B.x(B.a([B.c(m.h(0,l).b,p,1,A.a2,p,p,p,A.jp,p,p,p),D.h2v],a0),A.B,p,A.e,A.h,0,A.p),1)
v=k.j(0.2)
u=B.n(14)
t=B.K(k,A.r,1)
u=B.A(B.a([a1,A.bc,w,B.p(p,B.c(""+A.i.S(o.ch*100)+"%",p,p,p,p,p,p,B.l(p,p,k,p,p,p,p,p,p,p,p,15,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(v,p,t,u,p,p,A.m),p,p,p,p,A.lY,p,p,p)],a0),A.l,p,A.e,A.h,0,p,p)
t=A.v.j(0.35)
v=B.n(18)
w=B.K(A.dx,A.r,1)
a1=30+28*o.ch
s=B.n(8)
r=B.a([k.j(0.85),A.aw],x.O)
q=B.K(A.aF,A.r,2)
f=B.a([new B.aa(0,A.H,k.j(0.5),A.J,14)],f)
v=B.p(p,B.at(B.cV(p,B.at(new B.dc(A.dI,A.z,A.f,new B.D(A.hM,B.c(m.h(0,l).c,p,p,p,p,p,p,A.mN,p,p,p),p),p),p,p,p),p,p,A.aZ,new B.o(p,p,q,s,f,new B.a8(A.ay,A.aD,A.x,r,p,p),A.m),A.eH,p,a1*0.58,p,p,p,p,p,a1),p,p,p),A.f,p,p,new B.o(t,p,w,v,p,p,A.m),p,120,p,p,p,p,p,1/0)
i=B.A(B.a([i.$2("1\xd7",1),i.$2("2\xd7",2),i.$2("3\xd7",3),i.$2("4\xd7",4),i.$2("5\xd7",5)],a0),A.l,p,A.e,A.h,0,p,p)
w=B.aI(p,p,p,p,B.V(A.asd,k,p,p,p,30),p,p,p,new C.bLW(n,o),p,p,p,p,p,p)
t=B.ac1(a2).bhe(k,A.bx,k.j(0.2),A.c,8)
o=B.A(B.a([w,B.E(B.Zy(B.ld(p,p,p,5.2,1,n,A.i.D(o.ch,1,5.2)),t),1),B.aI(p,p,p,p,B.V(A.a3U,k,p,p,p,30),p,p,p,new C.bLX(n,o),p,p,p,p,p,p)],a0),A.l,p,A.e,A.h,0,p,p)
return B.bo(!0,B.p(p,B.x(B.a([d,A.af,u,A.aB,v,A.af,i,A.at,o,B.A(B.a([B.E(B.c(j<=1?"Normal size":"About "+j+" times the normal size",p,p,p,p,p,p,O.hG,p,p,p),1),B.bM(!1,A7.aZr,p,p,!0,p,p,p,new C.bLY(a2),p,B.fv(p,p,k.j(0.25),p,p,p,p,p,p,p,p,A.c,p,p,p,p,p,A.tA,p,p,p,p,p,p,p,p))],a0),A.l,p,A.e,A.h,0,p,p)],a0),A.l,p,A.e,A.N,0,A.p),A.f,p,p,new B.o(p,p,g,h,e,D.ceC,A.m),p,p,p,A.zk,D.bHU,p,p,p),!0,!1,A.ag,!0,!0)},
$S:86}
C.bM0.prototype={
$1(d){var w=this.a
w.l(new C.bLU(this.b,d))
this.c.$1(new C.bLV())
w.a.toString},
$S:6}
C.bLU.prototype={
$0(){return this.a.ch=A.i.D(this.b,1,5.2)},
$S:0}
C.bLV.prototype={
$0(){},
$S:0}
C.bM1.prototype={
$2(d,e){var w=this,v=null,u=Math.abs(w.a.ch-e)<0.05,t=u?w.c.j(0.28):A.c.j(0.06),s=B.n(14),r=u?w.c:A.bx
r=B.K(r,A.r,u?2:1)
return B.E(B.aA(v,B.cV(v,B.at(new B.dc(A.dp,A.z,A.f,B.c(d,v,v,v,v,v,v,B.l(v,v,u?w.c:A.ab,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),v,v,v),v,v,A.aZ,new B.o(t,v,r,s,v,v,A.m),A.hl,v,v,v,A.jj,A.r4,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.bLZ(w.b,e),v,v,v,v,v,v,!1,A.a4),1)},
$S:715}
C.bLZ.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bLW.prototype={
$0(){return this.a.$1(this.b.ch-0.4)},
$S:0}
C.bLX.prototype={
$0(){return this.a.$1(this.b.ch+0.4)},
$S:0}
C.bLY.prototype={
$0(){B.a7(this.a,!1).N(null)
return null},
$S:0}
C.bMo.prototype={
$2(d,e){var w
if(d==="short"){G.dF(1800,"",120,0,0.55,"noise")
G.dF(200,"",160,2.2,0.4,"saw")
B.fW()
w=this.a
if(w.c!=null)w.aga("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){G.dF(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.aga("\u26a0 Overloaded! The "+$.qS().h(0,e.b).b+" can only give about "+A.i.a5(w.a.c.Az(e),2)+" amps but your gadgets are asking for "+A.i.a5(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.aga("Burnt out! "+e.ay)
G.dF(140,"",320,0,0.6,"noise")
G.dF(900,"",160,1.5,0.35,"square")}},
$S:z+42}
C.bMp.prototype={
$0(){},
$S:0}
C.bLu.prototype={
$0(){},
$S:0}
C.bMq.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bMn.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.at=n
w=o.a.c
v=o.d
u=o.y
t=o.z
s=o.x
r=this.b
q=x.p
n=B.a([B.aA(A.c0,new B.e6(B.b4(p,p,p,new C.akU(w,v,u,t,s,r==null?A.jI:r,p),n),p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bMh(o),new C.bMi(o),new C.bMj(o),p,p,p,p,p,p,p,p,p,p,new C.bMk(o),p,p,p,!1,A.a4)],q)
if(o.a.c.a.length===0)n.push(D.bfs)
w=o.ay
if(w!=null){v=B.n(14)
u=B.K(A.cW,A.r,1)
n.push(B.ao(p,B.aA(p,B.p(p,B.A(B.a([D.fTr,B.E(B.c(w,p,p,p,p,p,p,D.fKU,p,p,p),1)],q),A.B,p,A.e,A.h,0,p,p),A.f,p,p,new B.o(D.blz,p,u,v,p,p,A.m),p,p,p,p,A.o_,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bMl(o),p,p,p,p,p,p,!1,A.a4),p,p,10,10,8,p))}if(o.x!=null){o=B.A(B.a([D.bNz,new E.fI(A.Dy,"Cut wire",new C.bMm(o),A.bZ,p)],q),A.l,p,A.e,A.h,0,p,p)
w=B.n(18)
n.push(B.ao(8,B.p(p,o,A.f,p,p,new B.o(F.Zy,p,B.K(A.bx,A.r,1),w,p,p,A.m),p,p,p,p,F.anB,p,p,p),p,p,12,12,p,p))}else{w=o.e
if(w!=null&&A.d.q(o.a.c.a,w)){w=o.e
w.toString
n.push(B.ao(8,o.coQ(w),p,p,10,10,p,p))}}return B.jr(new B.an(A.a0,p,A.b4,A.t,n,p),A.t,p)},
$S:307}
C.bMi.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.bbW(s)
if(r!=null){t.l(new C.bMf(t,r,d))
return}w=t.b5q(s)
if(w!=null){t.Q=w
v=w.c
u=t.at
t.as=new B.r(v*u.a,w.d*u.b).aI(0,s)
t.l(new C.bMg(t,w))}},
$S:50}
C.bMf.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c.b},
$S:0}
C.bMg.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bMj.prototype={
$1(d){var w=this.a
if(w.y!=null)w.l(new C.bMd(w,d))
else if(w.Q!=null)w.l(new C.bMe(w,d.b.a7(0,w.as)))},
$S:19}
C.bMd.prototype={
$0(){return this.a.z=this.b.b},
$S:0}
C.bMe.prototype={
$0(){var w,v=this.a,u=v.Q
u.toString
w=this.b
u.c=A.i.D(w.a/v.at.a,0.14,0.86)
u=v.Q
u.toString
u.d=A.i.D(w.b/v.at.b,0.08,0.92)},
$S:0}
C.bMh.prototype={
$1(d){var w,v,u,t=this.a
if(t.y!=null&&t.z!=null){w=t.z
w.toString
v=t.bbW(w)
if(v!=null&&v.a!==t.y.a){w=t.a.c
u=t.y
if(w.an0(u.a,u.b,v.a,v.b)!=null)G.dF(1500,"",40,0,0.22,"square")}}t.Q=t.z=t.y=null
t.ag8()},
$S:38}
C.bMk.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.b5q(u)
if(t!=null){v.l(new C.bMa(v,t))
if(D.mF.am(0,t.b))v.czG(t)
w=new B.W(Date.now(),0,!1)
if(v.r===t&&w.bx(v.w).a<38e4){v.l(new C.bMb(v,t))
v.r=null}else{v.r=t
v.w=w}v.a.toString
return}v.l(new C.bMc(v,v.cMR(u)))},
$S:56}
C.bMa.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.x=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
G.dF(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
G.dF(200,"",70,0,0.2,"saw")}},
$S:0}
C.bMb.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.bMc.prototype={
$0(){var w=this.a
w.x=this.b
w.e=w.d=null},
$S:0}
C.bMl.prototype={
$0(){var w=this.a
return w.l(new C.bM9(w))},
$S:0}
C.bM9.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bMm.prototype={
$0(){var w=this.a
A.d.X(w.a.c.b,w.x)
w.x=null
G.dF(300,"",50,0,0.35,"noise")
w.ag8()},
$S:0}
C.bLv.prototype={
$0(){return this.a.buh(this.b)},
$S:0}
C.bLR.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.A(B.a([B.c(d,w,w,w,w,w,w,D.fEP,w,w,w),B.E(B.ld(this.b.d,w,w,g,h,new C.bLT(this.a,f),A.i.D(e,h,g)),1)],x.p),A.l,w,A.e,A.h,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1902}
C.bLT.prototype={
$1(d){var w=this.a
w.l(new C.bLS(this.b,d))
w.a.toString},
$S:6}
C.bLS.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bLQ.prototype={
$2(d,e){var w=null,v=A.c.j(0.06),u=B.n(10)
return B.E(B.p(w,B.x(B.a([B.c(d,w,w,w,w,w,w,A.acM,w,w,w),B.c(e,w,w,w,w,w,w,D.fHG,w,w,w)],x.p),A.l,w,A.e,A.h,0,A.p),A.f,w,w,new B.o(v,w,w,u,w,w,A.m),w,w,w,w,A.x_,w,w,w),1)},
$S:110}
C.bLC.prototype={
$0(){var w=this.a
return w.l(new C.bLB(w))},
$S:0}
C.bLB.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.bLD.prototype={
$0(){var w=this.a
w.a.c.X(0,this.b)
w.e=w.d=null
G.dF(260,"",70,0,0.35,"noise")
w.ag8()},
$S:0}
C.bLE.prototype={
$0(){var w=this.a
return w.l(new C.bLA(w))},
$S:0}
C.bLA.prototype={
$0(){return this.a.e=null},
$S:0}
C.bLI.prototype={
$0(){this.a.l(new C.bLz(this.b,this.c))
G.dF(900,"",40,0,0.3,"noise")},
$S:0}
C.bLz.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bLJ.prototype={
$0(){return this.a.b4K(this.b)},
$S:0}
C.bLK.prototype={
$0(){return this.a.a1m(this.b)},
$S:0}
C.bLL.prototype={
$0(){return this.a.a30(this.b)},
$S:0}
C.bLM.prototype={
$0(){var w=this.a
w.l(new C.bLy(this.b,this.c))
w.a.toString},
$S:0}
C.bLy.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bLN.prototype={
$0(){var w=this.a
w.l(new C.bLx(this.b,this.c))
w.a.toString},
$S:0}
C.bLx.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bLO.prototype={
$0(){var w=this.a
w.l(new C.bLw(this.b,this.c))
w.a.toString},
$S:0}
C.bLw.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bLP.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bLF.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bLG.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bLH.prototype={
$1(d){return this.a.f=d},
$S:6}
C.fA1.prototype={
$1(d){return d.aJM("bulb")},
$S:z+2}
C.fA2.prototype={
$1(d){return d.qj(0,"switch")&&d.aJM("bulb")},
$S:z+2}
C.fA3.prototype={
$1(d){return A.d.aR(d.a,new C.fzP())},
$S:z+2}
C.fzP.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.fA4.prototype={
$1(d){return d.qj(0,"resistor")&&A.d.aR(d.a,new C.fzO())},
$S:z+2}
C.fzO.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fA5.prototype={
$1(d){return!d.qj(0,"battery")&&d.aJM("bulb")},
$S:z+2}
C.fzT.prototype={
$1(d){return A.d.aR(d.a,new C.fzN())},
$S:z+2}
C.fzN.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fzU.prototype={
$1(d){return A.d.aR(d.a,new C.fzM())},
$S:z+2}
C.fzM.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fzV.prototype={
$1(d){return A.d.aR(d.a,new C.fzL())},
$S:z+2}
C.fzL.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fzW.prototype={
$1(d){var w=d.a
return A.d.aR(w,new C.fzJ())&&A.d.aR(w,new C.fzK())&&d.qj(0,"buck")},
$S:z+2}
C.fzJ.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fzK.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fzX.prototype={
$1(d){var w=d.a
return A.d.aR(w,new C.fzH())&&A.d.aR(w,new C.fzI())},
$S:z+2}
C.fzH.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fzI.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fzY.prototype={
$1(d){return A.d.aR(d.a,new C.fzG())},
$S:z+2}
C.fzG.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.e4Q.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a6(0)
w.u(0,v.b)},
$S:0}
C.e4Z.prototype={
$1(d){var w=this.a.d
return w.aKa(d)&&w.rz(d)},
$S:z+0}
C.e5_.prototype={
$1(d){return d.x},
$S:z+0}
C.e50.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.e51.prototype={
$0(){},
$S:0}
C.e4P.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.n(22),o=x.p,n=B.a([D.hal,A.at,D.fVj,A.R],o)
for(w=this.a,v=0;v<19;++v){u=D.Te[v]
t=A.c.j(0.06)
s=new B.aP(14,14)
r=new B.ax(A.bx,1,A.r,-1)
n.push(B.aA(q,B.p(q,B.x(B.a([B.c(u.a,q,q,q,q,q,q,A.iU,q,q,q),A.bs,B.c(u.b,q,3,A.a2,q,q,q,D.fLG,q,q,q)],o),A.B,q,A.e,A.h,0,A.p),A.f,q,q,new B.o(t,q,new B.bE(r,r,r,r),new B.bb(s,s,s,s),q,q,A.m),q,q,q,A.cB,A.bg,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.e4O(w,d,u),q,q,q,q,q,q,!1,A.a4))}return B.eH(q,F.n7,new B.D(A.bR,new B.a5(340,q,B.co(n,q,q,q,q,q,A.ah,!0),q),q),q,q,q,q,q,A.dd,q,new B.b9(p,A.a1),q)},
$S:47}
C.e4O.prototype={
$0(){B.a7(this.b,!1).N(null)
var w=this.a
w.l(new C.e4N(w,this.c))
G.dF(800,"",120,-0.5,0.3,"square")},
$S:0}
C.e4N.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bmV()},
$S:0}
C.e4L.prototype={
$1(d){return new C.Xl(this.a.d,null)},
$S:z+44}
C.e4M.prototype={
$0(){},
$S:0}
C.e4Y.prototype={
$1(d){return new B.e8(new C.e4X(this.a),null)},
$S:21}
C.e4X.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.ajY(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.q(0,k),f=g?A.bf:A.aH
k=B.aF(d,m,x.w).w
w=l.r
v=x.p
u=B.a([B.A(B.a([D.h7t,A.aW,B.c(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.E,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.l,m,A.e,A.h,0,m,m),A.M,B.bx(B.n(4),B.jE(A.bx,m,m,5,m,w.a/11,new B.kT(f,x.c)),A.aq),A.af],v)
if(h)u.push(D.fYC)
else{h=f.j(0.1)
t=B.n(14)
s=B.K(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.c(r+" Now: "+i.a,m,m,m,m,m,m,Aq.LF,m,m,m)
q=B.c(g?"Well done! You did it.":i.b,m,m,m,m,m,m,A1.FF,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.p(m,B.x(B.a([r,A.at,q,new B.bK(A.a9,m,m,B.bM(!1,B.c(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.E,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.e4V(l,e),m,m),m)],v),A.B,m,A.e,A.h,0,A.p),A.f,m,m,new B.o(h,m,s,t,m,m,A.m),m,m,m,m,A.bg,m,m,m))}u.push(A.R)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aP(12,12)
n=new B.ax(o===l.f?f.j(0.6):A.dx,1,A.r,-1)
if(w.q(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
s=B.c(s,m,m,m,m,m,m,A.acV,m,m,m)
r=j[o]
q=w.q(0,o)?A.aF:A.c
u.push(B.aA(m,B.p(m,new B.c1(A.aK,A.e,A.h,A.l,m,A.p,m,0,B.a([s,A.ar,new B.bu(1,A.b9,B.c(r.a,m,m,m,m,m,m,new B.G(!0,q,m,m,m,m,13,A.E,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],v),m),A.f,m,m,new B.o(h,m,new B.bE(n,n,n,n),new B.bb(t,t,t,t),m,m,A.m),m,m,m,A.eI,A.o_,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.e4W(l,o,e),m,m,m,m,m,m,!1,A.a4))}return B.bo(!0,new B.cS(new B.aY(0,1/0,0,k.a.b*0.75),B.co(u,m,m,A9.zt,m,m,A.ah,!0),m),!0,!1,A.ag,!0,!0)},
$S:86}
C.e4V.prototype={
$0(){var w=this.a
w.l(new C.e4T(w))
this.b.$1(new C.e4U())
w.FT()},
$S:0}
C.e4T.prototype={
$0(){var w=this.a
$.ajY()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.e4U.prototype={
$0(){},
$S:0}
C.e4W.prototype={
$0(){var w=this.a
w.l(new C.e4R(w,this.b))
this.c.$1(new C.e4S())
w.FT()},
$S:0}
C.e4R.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e4S.prototype={
$0(){},
$S:0}
C.e53.prototype={
$0(){return B.a7(this.a,!1).hY()},
$S:0}
C.e54.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.iS("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a7(t.b,!1).cc(B.eb(new C.e52(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.e52.prototype={
$1(d){B.jw("construction")
return Az.i4a()},
$S:z+45}
C.e55.prototype={
$0(){return E.hQk(this.a,"ELECTRONICS LAB",this.b,A.aH)},
$S:0}
C.e56.prototype={
$0(){var w=this.a
return w.l(w.d.gd3O())},
$S:0}
C.e57.prototype={
$0(){var w=this.a,v=w.d
w.l(v.gtn(v))
w.FT()},
$S:0}
C.cNW.prototype={
$2(d,e){var w=null,v=this.a.gaA9().x
v===$&&B.d()
return B.b4(w,w,w,new C.bcM(v,w),A.aA)},
$S:58}
C.cNV.prototype={
$3(d,e,f){var w=new B.aH($.T().r,A.aj,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.E(new B.aZ(v,t))
w.E(new B.cj(v,u,v+e,u))
w.E(new B.cj(v,u,v,u+e))
w.E(new B.cj(v,u,v-e,u))
w.E(new B.cj(v,u,v,t))
w.E(new B.bA())
t=B.L()
t.r=A.c.j(f).gp(0)
this.a.af(w,t)},
$S:425}
C.h9g.prototype={
$3(d,e,f){return new C.WA(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+46}
C.h9h.prototype={
$4(d,e,f,g){var w=x.a
return new B.da(e,!1,B.iC(A.z,g,null,new B.bk(B.cK(A.co,e,null),new B.bq(0.85,1,w),w.k("bk<bR.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
C.e0M.prototype={
$0(){var w=this.a
w.e=this.b
w.y=0
w.z=w.gBW()},
$S:0}
C.e0N.prototype={
$0(){var w,v=this.a
v.e=0
w=this.c
v.y=A.o.F(A.o.F(this.b,w)+w,w)
v.z=v.gBW()},
$S:0}
C.e0X.prototype={
$0(){var w=this.a,v=this.b,u=this.c
w.x=new B.r(v.a/u.a,v.b/u.b)
w.w=w.gBW()},
$S:0}
C.e0L.prototype={
$1(d){return new K.Jc(F.T_[this.b],new C.e0K(this.a,d),null)},
$S:z+47}
C.e0K.prototype={
$0(){this.a.a=!0
B.a7(this.b,!1).e3()},
$S:0}
C.e0Y.prototype={
$0(){var w=this.a
w.f=this.b
w.r=!1},
$S:0}
C.e0Z.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.e0E.prototype={
$2(d,e){var w=null,v=this.a,u=v.f?v.gb2t():w
return B.aA(A.c0,B.b4(w,w,w,v.coe(this.b),A.hf),A.y,!1,D.hGF,u,w,w,w,new C.e0C(v),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e0D(v,e),w,w,w,!1,A.a4)},
$S:37}
C.e0D.prototype={
$1(d){var w=this.b
return this.a.cHp(d.b,new B.av(B.aT(1/0,w.a,w.b),B.aT(1/0,w.c,w.d)))},
$S:56}
C.e0C.prototype={
$1(d){var w,v=d.d
if(v==null)v=0
if(Math.abs(v)>120&&this.a.Ot()!=null){w=v<0?1:-1
this.a.aE4(w)}},
$S:38}
C.e0V.prototype={
$5$color$on(d,e,f,g,h){var w=null,v=h?g.j(0.28):A.c.j(0.08),u=B.n(14),t=B.K(h?g:A.aT,A.r,1)
return B.aA(w,B.p(w,B.x(B.a([B.V(d,g,w,w,w,20),A.rG,B.c(e,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,9.5,w,w,A.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.N,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,w,w,A.jj,A.jX,w,w,56),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:693}
C.e0R.prototype={
$0(){return this.a.aE4(-1)},
$S:0}
C.e0S.prototype={
$0(){return this.a.aE4(1)},
$S:0}
C.e0T.prototype={
$0(){return this.a.Kb(null)},
$S:0}
C.e0U.prototype={
$0(){return this.a.Kb(0)},
$S:0}
C.e1_.prototype={
$0(){return B.a7(this.a,!1).hY()},
$S:0}
C.e0Q.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.n(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c3K(o):q.bGG(o,p),m=x.p
p=B.a([B.oQ(new B.mb(n,new B.bf(p,x.aC)),A.pO,B.q8(),A.aZ,A.aZ,new C.e0O())],m)
n=t.d
if(n){w=A.i.F(q.gBW(),12)<4
v=w?150:96
u=B.n(16)
m=B.a([A.ar],m)
if(w)m.push(D.bNl)
else m.push(A.aW)
m.push(B.p(s,s,A.f,s,s,new B.o(w?A.bf:A.aw,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.ar)
p.push(B.ao(s,B.at(B.cV(s,B.A(m,A.l,s,A.e,A.h,0,s,s),s,s,A.ej,new B.o(A.v,s,s,u,s,s,A.m),A.nb,s,28,s,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.Bh)p.push(B.ao(s,B.at(B.p(s,s,A.f,s,s,A.MV,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.Bi)p.push(B.ao(s,B.p(s,s,A.f,s,s,A.MV,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ao(6,B.aA(s,B.at(B.p(s,s,A.f,s,s,new B.o(A.c.j(0.75),s,s,B.n(3),s,s,A.m),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e0P(q),s,s,s,s,s,s,!1,A.a4),s,s,0,0,s,s))
return B.bx(r,new B.an(A.a0,s,A.b4,A.t,p,s),A.aq)},
$S:386}
C.e0O.prototype={
$2(d,e){var w=x.a
return new B.da(e,!1,B.iC(A.z,d,null,new B.bk(e,new B.bq(0.92,1,w),w.k("bk<bR.T>"))),null)},
$S:359}
C.e0P.prototype={
$0(){return this.a.Kb(null)},
$S:0}
C.e0W.prototype={
$2(d,e){var w,v,u,t,s=null,r=Math.max(e.b,230),q=this.a
q=B.a([B.c(A.a.b_(A.o.v(B.d5(q)),2,"0")+":"+A.a.b_(A.o.v(B.fE(q)),2,"0"),s,s,s,s,s,s,A.uu,s,s,s),A.aW],x.p)
for(w=0;w<4;++w){v=new B.aP(1,1)
q.push(B.p(s,s,A.f,s,s,new B.o(A.c,s,s,new B.bb(v,v,v,v),s,s,A.m),s,4+w*2,s,D.bLS,s,s,s,3))}q.push(A.d9)
q.push(D.h1u)
q.push(A.bb)
v=B.K(A.ab,A.r,1)
u=B.n(4)
t=this.b
q.push(B.p(s,new B.bK(A.a5,s,s,B.Cb(A.z,B.p(s,s,A.f,s,s,new B.o(A.bf,s,s,B.n(2),s,s,A.m),s,s,s,A8.HW,s,s,s,s),s,t/100),s),A.f,s,s,new B.o(s,s,v,u,s,s,A.m),s,12,s,s,s,s,s,26))
q.push(A.pm)
q.push(B.c(""+t+"%",s,s,s,s,s,s,D.fT2,s,s,s))
return new B.dc(A.dp,A.a5,A.f,new B.a5(r,s,B.A(q,A.l,s,A.e,A.h,0,s,s),s),s)},
$S:281}
C.e0J.prototype={
$0(){return this.a.Kb(A.d.cd(F.iw,this.b))},
$S:0}
C.e0H.prototype={
$0(){return this.a.Kb(0)},
$S:0}
C.e0I.prototype={
$2(d,e){var w,v,u,t,s=null,r=Math.max(e.b,216),q=B.a([],x.p)
for(w=B.cU(F.iw,0,B.dA(4,"count",x.S),x.gD),v=w.$ti,w=new B.bP(w,w.gJ(0),v.k("bP<aj.E>")),u=this.a,v=v.k("aj.E");w.C();){t=w.d
q.push(u.axY(t==null?v.a(t):t,50,!1))}return new B.dc(A.dp,A.z,A.f,new B.a5(r,s,B.A(q,A.l,s,A.rr,A.h,0,s,s),s),s)},
$S:281}
C.e0B.prototype={
$0(){return this.a.Kb(null)},
$S:0}
C.e0G.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=A.v.j(0.55),l=this.a,k=l.f,j=k?112:10
if(k){k=l.c
k.toString
k=B.aF(k,A.bX,x.w).w.a.a>700}else k=!1
k=k?250:10
w=x.p
k=B.p(n,B.A(B.a([D.hgg,A.ar,B.E(B.c(this.b?"Navigation   Media   Climate":"File   Edit   View   Window   Help",n,1,A.f_,n,n,n,A.LQ,n,n,n),1),B.c(A.a.b_(A.o.v(B.d5(new B.W(Date.now(),0,!1))),2,"0")+":"+A.a.b_(A.o.v(B.fE(new B.W(Date.now(),0,!1))),2,"0"),n,n,n,n,n,n,A.rJ,n,n,n)],w),A.l,n,A.e,A.h,0,n,n),A.f,m,n,n,n,24,n,n,new B.R(j,0,k,0),n,n,n)
j=B.a([B.b4(n,n,n,new C.bzG(l.gBW(),this.c.d,n),A.aA)],w)
if(l.e!=null){if(l.f){m=l.c
m.toString
m=B.aF(m,A.dK,x.w).w.r.b+52}else m=12
v=B.n(10)
u=B.K(A.aT,A.r,1)
t=B.n(10)
s=B.aA(n,B.p(n,n,A.f,n,n,A.agk,n,12,n,n,n,n,n,12),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.e0F(l),n,n,n,n,n,n,!1,A.a4)
r=B.p(n,n,A.f,n,n,A.Z_,n,12,n,n,n,n,n,12)
q=B.aA(n,B.p(n,n,A.f,n,n,D.bax,n,12,n,n,n,n,n,12),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,l.gbcp(),n,n,n,n,n,n,!1,A.a4)
p=l.e
p.toString
p=B.a([s,A.dZ,r,A.dZ,q,A.ar,B.E(B.c(F.iw[p].a,n,1,A.a2,n,n,n,A.WP,n,n,n),1)],w)
if(l.Ot()!=null)s=!l.f||!l.r
else s=!1
if(s)p.push(l.b_o(19))
s=B.p(n,B.A(p,A.l,n,A.e,A.h,0,n,n),A.f,A.cx,n,n,n,26,n,n,A.fD,n,n,n)
r=l.e
r.toString
j.push(B.bS(0,new B.D(new B.R(26,m,26,58),B.p(n,B.bx(t,B.x(B.a([s,B.E(l.aQJ(r),1)],w),A.l,n,A.e,A.h,0,A.p),A.aq),A.f,n,n,new B.o(A.v,n,u,v,D.dDC,n,A.m),n,n,n,n,n,n,n,n),n),0,0,0))}m=A.c.j(0.16)
v=B.n(18)
u=B.K(A.aT,A.r,1)
t=B.a([],w)
for(o=0;o<8;++o)t.push(new B.D(A.jj,l.axY(F.iw[o],34,!1),n))
j.push(B.ao(8,B.at(B.p(n,B.A(t,A.l,n,A.e,A.N,0,n,n),A.f,n,n,new B.o(m,n,u,v,n,n,A.m),n,n,n,n,A.m0,n,n,n),n,n,n),n,n,0,0,n,n))
return B.p(n,B.x(B.a([k,B.E(new B.an(A.a0,n,A.b4,A.t,j,n),1)],w),A.l,n,A.e,A.h,0,A.p),A.f,A4.a0a,n,n,n,n,n,n,n,n,n,n)},
$S:84}
C.e0F.prototype={
$0(){return this.a.Kb(null)},
$S:0}
C.fAw.prototype={
$0(){return D.esS},
$S:z+48}
C.fAx.prototype={
$0(){return D.e_D},
$S:z+49}
C.fAy.prototype={
$0(){return D.dX8},
$S:z+50}
C.fAz.prototype={
$0(){return D.e_0},
$S:z+51}
C.fAA.prototype={
$0(){return D.e4v},
$S:z+52}
C.fAB.prototype={
$0(){return D.eoE},
$S:z+53}
C.fAC.prototype={
$0(){return D.eqO},
$S:z+54}
C.fAD.prototype={
$0(){return D.e3y},
$S:z+36}
C.cpg.prototype={
$0(){return B.a7(this.a,!1).hY()},
$S:0}
C.cph.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=(e.b-14)/2,i=x.p,h=B.a([],i)
for(w=$.hUd(),v=j*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aP(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.aa(0,A.H,p.j(0.4),A.du,16)],t)
n=B.c(r.c,k,k,k,k,k,k,Aw.LD,k,k,k)
m=B.c(r.a,k,k,k,k,k,k,D.fQL,k,k,k)
l=A.c.j(0.85)
h.push(B.aA(k,B.p(k,new B.an(A.a0,k,A.ad,A.t,B.a([new B.cO(k,-6,-6,k,k,k,n,k),new B.bK(A.lN,k,k,B.x(B.a([m,A.cQ,B.c(r.b,k,k,k,k,k,k,new B.G(!0,l,k,k,k,k,12,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)],i),A.B,k,A.e,A.N,0,A.p),k)],i),k),A.f,k,k,new B.o(k,k,k,new B.bb(q,q,q,q),p,new B.a8(A.ay,A.aD,A.x,o,k,k),A.m),k,v,k,k,A.bF,k,k,j),A.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.cpf(d,r),k,k,k,k,k,k,!1,A.a4))}return B.bZ(A.bI,h,A.br,k,14,14)},
$S:168}
C.cpf.prototype={
$0(){return B.a7(this.a,!1).cc(B.eb(new C.cpe(this.b),!1,null,x.H))},
$S:0}
C.cpe.prototype={
$1(d){return this.a.f.$0()},
$S:42}
C.f0H.prototype={
$0(){var w=this.a
return w.w=w.d[w.b8S(w.f)]},
$S:0}
C.f0D.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cV.ai()*7},
$S:0}
C.f0C.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bN(0,A.ck)
w.w=""},
$S:0}
C.f0F.prototype={
$0(){var w=this.a
return w.l(new C.f0E(w,this.b))},
$S:0}
C.f0E.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cJ(w,this.b)},
$S:0}
C.f0G.prototype={
$1(d){return this.a.b34(0)},
$S:2}
C.e8u.prototype={
$0(){return C.K_("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.e8v.prototype={
$0(){},
$S:0}
C.e8p.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.e8r.prototype={
$0(){return this.a.b36(this.b)},
$S:0}
C.e8s.prototype={
$0(){var w=this.a
return w.l(new C.e8q(w))},
$S:0}
C.e8q.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.e8t.prototype={
$0(){var w=this.a
return w.b36(w.d)},
$S:0}
C.dT5.prototype={
$2(d,e){return d+e},
$S:81}
C.dT6.prototype={
$0(){},
$S:0}
C.dT0.prototype={
$2(d,e){return d+e},
$S:81}
C.dT3.prototype={
$0(){var w=this.a
return w.l(new C.dT2(w,this.b))},
$S:0}
C.dT2.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dT4.prototype={
$0(){var w=this.a
return w.l(new C.dT1(w))},
$S:0}
C.dT1.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.e4k.prototype={
$0(){return E.uQ(this.b,this.a.d,"drawing")},
$S:0}
C.e4l.prototype={
$1(d){var w=this.a
return w.l(new C.e4j(w,d))},
$S:50}
C.e4j.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aLg(u,v,t))},
$S:0}
C.e4m.prototype={
$1(d){var w=this.a
return w.l(new C.e4i(w,d))},
$S:19}
C.e4i.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
C.e4n.prototype={
$1(d){var w=this.a
return w.l(new C.e4h(w,d))},
$S:24}
C.e4h.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aLg(u,v,t))},
$S:0}
C.e4o.prototype={
$0(){var w=this.a
return w.l(new C.e4g(w,this.b))},
$S:0}
C.e4g.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.e4p.prototype={
$1(d){var w=this.a
return w.l(new C.e4f(w,d))},
$S:6}
C.e4f.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.e4q.prototype={
$0(){var w=this.a
return w.l(new C.e4e(w))},
$S:0}
C.e4e.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.e4r.prototype={
$0(){var w=this.a
return w.l(new C.e4d(w))},
$S:0}
C.e4d.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.e4s.prototype={
$0(){var w=this.a
return w.l(A.d.gtn(w.e))},
$S:0}
C.e4t.prototype={
$0(){var w=this.a
return w.l(new C.e4c(w))},
$S:0}
C.e4c.prototype={
$0(){var w=this.a
w.x=D.aCx[A.o.F(A.d.cd(D.aCx,w.x)+1,4)]},
$S:0}
C.ew6.prototype={
$0(){return this.a.f.I(0,this.b)},
$S:0}
C.ew7.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.K_("bell",B.a([0,4,7],w),500,0.45)
u.l(new C.ew5(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.d()
if(v===u.length)C.K_("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:12}
C.ew5.prototype={
$0(){var w=this.a
w.r.u(0,B.a([this.b,this.c],x.t))
w.f.a6(0)},
$S:0}
C.ew8.prototype={
$0(){var w=this.a
if(w.c==null)return
w.l(new C.ew4(w))},
$S:12}
C.ew4.prototype={
$0(){var w=this.a
w.f.a6(0)
w.x=!1},
$S:0}
C.ewc.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return B.aA(w,B.lz(new C.ewa(v,e),w,A.aZ,A.pO,w,w,new B.bq(0,u,x.a),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ewb(v,e),w,w,w,w,w,w,!1,A.a4)},
$S:77}
C.ewb.prototype={
$0(){return this.a.cfW(this.b)},
$S:0}
C.ewa.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dy(),m=n.a
m.$flags&2&&B.ak(m)
m[11]=0.001
n.fI(3.141592653589793*e)
m=B.n(16)
w=o?p:D.cdL
if(o)v=q.a.r.q(0,q.b)?A.bf.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.K(u.r.q(0,t)?A.bf:A.aT,A.r,1)
if(o){r=B.dy()
r.fI(3.141592653589793)
u=u.e
u===$&&B.d()
r=B.fF(A.z,B.c(u[t],p,p,p,p,p,p,H.acZ,p,p,p),p,r,!0)
u=r}else u=D.h9_
return B.fF(A.z,B.p(A.z,u,A.f,p,p,new B.o(v,p,s,m,p,w,A.m),p,p,p,p,p,p,p,p),p,n,!0)},
$S:116}
C.ewd.prototype={
$0(){var w=this.a
return w.l(new C.ew9(w,this.b))},
$S:0}
C.ew9.prototype={
$0(){var w=this.a
w.d=this.b.a
w.avj()},
$S:0}
C.ewe.prototype={
$0(){var w=this.a
return w.l(w.gbPA())},
$S:0}
C.eIQ.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.eIR.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.eIO.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eIP.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.eIN(w))},
$S:12}
C.eIN.prototype={
$0(){return this.a.f=-1},
$S:0}
C.eIS.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.eIT.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.eIU.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b35()},
$S:12}
C.eIV.prototype={
$0(){return this.a.cg1(this.b)},
$S:0}
C.eX2.prototype={
$1(d){return B.v(d.h(0,1))+","},
$S:57}
C.eXb.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.c(d,w,1,A.a2,w,w,w,B.l(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.D(A.jX,B.A(B.a([v,A.aa,new B.d1(1,A.cg,new B.dc(A.dp,A.z,A.f,B.c(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w),w)],x.p),A.l,w,A.e,A.h,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1903}
C.eX7.prototype={
$1(d){return this.a.l(new C.eX6())},
$S:2}
C.eX6.prototype={
$0(){},
$S:0}
C.eX8.prototype={
$0(){var w=this.a
return w.l(new C.eX5(w,this.b))},
$S:0}
C.eX5.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eX9.prototype={
$1(d){var w=this.a
return w.l(new C.eX4(w,d))},
$S:6}
C.eX4.prototype={
$0(){return this.a.f=A.i.S(this.b)},
$S:0}
C.eXa.prototype={
$0(){var w=this.a
return w.l(new C.eX3(w))},
$S:0}
C.eX3.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.euM.prototype={
$0(){},
$S:0}
C.euN.prototype={
$0(){},
$S:0}
C.euF.prototype={
$0(){var w=this.a
return w.l(new C.euE(w))},
$S:0}
C.euE.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.c2(u,1,!1,x.S)
w.r=0.9
E.Y8("hat",0,0.6)},
$S:0}
C.euG.prototype={
$0(){var w=this.a
return w.l(new C.euD(w))},
$S:0}
C.euD.prototype={
$0(){this.a.y=1.1
E.mH("bell",36,200,0.4)},
$S:0}
C.euH.prototype={
$0(){var w=this.a
return w.l(new C.euC(w))},
$S:0}
C.euC.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.av(Math.max(v,u)-t+1)
w.as=u
E.mH("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.euI.prototype={
$0(){var w=this.a
return w.l(new C.euB(w,this.b))},
$S:0}
C.euB.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.euJ.prototype={
$1(d){var w=this.a
return w.l(new C.euA(w,d))},
$S:6}
C.euA.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.i.S(this.b),r=J.e4(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.euK.prototype={
$1(d){var w=this.a
return w.l(new C.euz(w,d))},
$S:6}
C.euz.prototype={
$0(){return this.a.z=A.i.S(this.b)},
$S:0}
C.euL.prototype={
$1(d){var w=this.a
return w.l(new C.euy(w,d))},
$S:6}
C.euy.prototype={
$0(){return this.a.Q=A.i.S(this.b)},
$S:0}
C.cpc.prototype={
$0(){var w=this
return E.mH(w.a,w.b,w.c,w.d)},
$S:1};(function aliases(){var w=C.aPl.prototype
w.bBy=w.t
w=C.aOq.prototype
w.bAB=w.t
w=C.aOr.prototype
w.bAC=w.t
w=C.aOv.prototype
w.bAG=w.t
w=C.aQb.prototype
w.bCv=w.t
w=C.aPj.prototype
w.bBw=w.t
w=C.aAx.prototype
w.bxC=w.t
w=C.aAy.prototype
w.bxD=w.t
w=C.aMS.prototype
w.byZ=w.t
w=C.aOG.prototype
w.bAR=w.t
w=C.aOs.prototype
w.bAD=w.t
w=C.aON.prototype
w.bAZ=w.t
w=C.aPd.prototype
w.bBq=w.t
w=C.aPF.prototype
w.bBS=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0,u=a._instance_1u,t=a._instance_1i,s=a._instance_0i,r=a.installInstanceTearOff
w(C.aHj.prototype,"gazu","cb9",1)
v(C,"iBb","c8Q",3)
var q
u(q=C.aFL.prototype,"gckn","cko",22)
w(q,"gcbJ","b1z",1)
w(C.aFN.prototype,"gcdu","cdv",1)
t(C.aG3.prototype,"gcdC","cdD",39)
w(q=C.aKo.prototype,"gcEn","cEo",1)
w(q,"gcdE","a0e",1)
w(q,"gcp_","cp0",1)
w(q,"gcdA","a0d",3)
w(q,"gcdB","afZ",3)
w(q=C.aHi.prototype,"gbMG","abj",3)
w(q,"gcog","b5g",1)
w(q,"gcs7","aiF",3)
s(q,"gcdG","ag_",3)
s(q=C.a6h.prototype,"gtn","a6",1)
u(q,"gd1r","apO",0)
u(q,"gcYL","MS",0)
w(q,"gd3O","bmV",1)
r(C.akU.prototype,"gce2",0,5,null,["$5"],["lD"],41,0,0)
w(q=C.aGg.prototype,"gce3","ce4",1)
w(q,"gcv0","aj0",3)
w(q,"gckF","ahk",3)
w(q,"gcCk","ak9",3)
w(q=C.aG6.prototype,"gc6a","aea",3)
w(q,"gbcp","cIZ",1)
w(q,"gb2t","ce8",1)
w(q=C.aHO.prototype,"gcfX","cfY",1)
s(q,"gcfV","b34",1)
w(C.aH4.prototype,"gbPA","avj",1)
s(C.aHr.prototype,"gcfZ","cg_",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aE,[C.am6,C.Hc,C.vG,C.aVz,C.a59,C.bdU,C.c8R,C.yX,C.Dj,C.nY,C.beH,C.Bm,C.bx8,C.qJ,C.rs,C.Dn,C.a0b,C.agI,C.a2q,C.Dy,C.adA,C.adS,C.afO,C.GY,C.er,C.u8,C.ace,C.adm,C.a6h,C.n8,C.beI,C.h3,C.mi,C.bys,C.aLg])
u(B.fR,[C.fSi,C.fGO,C.fOD,C.fOE,C.fSf,C.fSg,C.enR,C.eo9,C.eDw,C.eD3,C.eD4,C.eD5,C.eD6,C.eD7,C.eD8,C.eD9,C.eDa,C.eD1,C.eD2,C.eD0,C.eDr,C.eDs,C.eDt,C.dSC,C.dSE,C.dSH,C.dSS,C.c8S,C.c8T,C.fzQ,C.fzR,C.fzS,C.fzZ,C.fA_,C.fA0,C.dUF,C.dUm,C.dUG,C.dUh,C.dUc,C.dUe,C.dUk,C.dUx,C.dUv,C.dUw,C.dUu,C.dUr,C.dUt,C.ffs,C.ff1,C.ff2,C.ff9,C.ffg,C.ffp,C.feZ,C.dul,C.dum,C.dui,C.duj,C.duk,C.dun,C.duo,C.dup,C.duq,C.dur,C.dus,C.dut,C.duu,C.duv,C.eCs,C.eCt,C.eCu,C.eCv,C.eCq,C.eCr,C.eCX,C.eCz,C.eCB,C.eCl,C.eCT,C.eCR,C.eCS,C.eCQ,C.eCP,C.eCn,C.bS6,C.bSh,C.bSc,C.bSi,C.bSk,C.bS7,C.bS5,C.bSp,C.bSd,C.bSg,C.bSf,C.bSe,C.bMs,C.h48,C.h4b,C.h49,C.bM7,C.bM2,C.bM0,C.bMq,C.bMi,C.bMj,C.bMh,C.bMk,C.bLR,C.bLT,C.bLP,C.bLF,C.bLG,C.bLH,C.fA1,C.fA2,C.fA3,C.fzP,C.fA4,C.fzO,C.fA5,C.fzT,C.fzN,C.fzU,C.fzM,C.fzV,C.fzL,C.fzW,C.fzJ,C.fzK,C.fzX,C.fzH,C.fzI,C.fzY,C.fzG,C.e4Z,C.e5_,C.e4P,C.e4L,C.e4Y,C.e52,C.cNV,C.h9g,C.h9h,C.e0L,C.e0D,C.e0C,C.e0V,C.cpe,C.f0G,C.e4l,C.e4m,C.e4n,C.e4p,C.ewa,C.eX2,C.eXb,C.eX7,C.eX9,C.euJ,C.euK,C.euL])
u(B.ie,[C.fSh,C.enW,C.enU,C.eDc,C.eDp,C.dUd,C.dUA,C.e_R,C.ffv,C.ffw,C.ff8,C.ffl,C.ffm,C.ffh,C.ffn,C.feY,C.eCo,C.eCp,C.eCW,C.eCO,C.eCD,C.bSj,C.bSl,C.bSn,C.bS8,C.bSa,C.bMt,C.bMr,C.cwn,C.h4a,C.bM_,C.bM1,C.bMo,C.bMn,C.bLQ,C.e4X,C.cNW,C.e0E,C.e0Q,C.e0O,C.e0W,C.e0I,C.e0G,C.cph,C.dT5,C.dT0,C.ewc])
u(B.af,[C.Xl,C.XI,C.W8,C.Wf,C.OC,C.aKn,C.XH,C.akS,C.WR,C.aAc,C.WA,C.Yf,C.X_,C.W9,C.WQ,C.XC,C.XN,C.Y6,C.XB])
u(B.ah,[C.bo9,C.aPl,C.aOq,C.aOv,C.aG3,C.aQb,C.aPj,C.aAx,C.bBE,C.aMS,C.aOG,C.aPF,C.aON,C.aOs,C.bnA,C.aH4,C.aHr,C.boR,C.aPd])
u(B.hS,[C.enP,C.enQ,C.eo1,C.eo2,C.enY,C.enX,C.enZ,C.enV,C.eo_,C.enT,C.eo0,C.enS,C.eo5,C.eo4,C.eo6,C.eo3,C.eo7,C.eo8,C.eoa,C.eDv,C.eDx,C.eDy,C.eDe,C.eDd,C.eDb,C.eDk,C.eDl,C.eDh,C.eDm,C.eDg,C.eDn,C.eDo,C.eDf,C.eDq,C.eDj,C.eDu,C.eDi,C.dSZ,C.dSY,C.dSz,C.dSA,C.dSB,C.dT_,C.dSD,C.dSF,C.dSG,C.dSI,C.dSw,C.dSx,C.dSy,C.dSP,C.dSQ,C.dSR,C.dSO,C.dST,C.dSN,C.dSU,C.dSM,C.dSV,C.dSL,C.dSW,C.dSK,C.dSX,C.dSJ,C.dUj,C.dUi,C.dUn,C.dUf,C.dUg,C.dUo,C.dUp,C.dUq,C.dUl,C.dUb,C.dUz,C.dUy,C.dUB,C.dUC,C.dUD,C.dUs,C.dUE,C.cYQ,C.e_P,C.e_O,C.e_Q,C.fAg,C.fAh,C.fAi,C.fAj,C.fAk,C.fAl,C.fAm,C.fAn,C.fAo,C.ffu,C.fft,C.ffb,C.ffa,C.ff0,C.ff_,C.ff3,C.ff6,C.ff5,C.ff7,C.ff4,C.ffj,C.ffi,C.ffk,C.ffc,C.ffo,C.fff,C.ffq,C.ffe,C.ffr,C.ffd,C.eCx,C.eCm,C.eCw,C.eCi,C.eCy,C.eCA,C.eCj,C.eCk,C.eCV,C.eCU,C.eCL,C.eCM,C.eCN,C.eCH,C.eCI,C.eCG,C.eCJ,C.eCF,C.eCK,C.eCE,C.eCC,C.duh,C.bSm,C.bSo,C.bS9,C.bSb,C.bM4,C.bM5,C.bM3,C.bM6,C.bM8,C.bLU,C.bLV,C.bLZ,C.bLW,C.bLX,C.bLY,C.bMp,C.bLu,C.bMf,C.bMg,C.bMd,C.bMe,C.bMa,C.bMb,C.bMc,C.bMl,C.bM9,C.bMm,C.bLv,C.bLS,C.bLC,C.bLB,C.bLD,C.bLE,C.bLA,C.bLI,C.bLz,C.bLJ,C.bLK,C.bLL,C.bLM,C.bLy,C.bLN,C.bLx,C.bLO,C.bLw,C.e4Q,C.e50,C.e51,C.e4O,C.e4N,C.e4M,C.e4V,C.e4T,C.e4U,C.e4W,C.e4R,C.e4S,C.e53,C.e54,C.e55,C.e56,C.e57,C.e0M,C.e0N,C.e0X,C.e0K,C.e0Y,C.e0Z,C.e0R,C.e0S,C.e0T,C.e0U,C.e1_,C.e0P,C.e0J,C.e0H,C.e0B,C.e0F,C.fAw,C.fAx,C.fAy,C.fAz,C.fAA,C.fAB,C.fAC,C.fAD,C.cpg,C.cpf,C.f0H,C.f0D,C.f0C,C.f0F,C.f0E,C.e8u,C.e8v,C.e8p,C.e8r,C.e8s,C.e8q,C.e8t,C.dT6,C.dT3,C.dT2,C.dT4,C.dT1,C.e4k,C.e4j,C.e4i,C.e4h,C.e4o,C.e4g,C.e4f,C.e4q,C.e4e,C.e4r,C.e4d,C.e4s,C.e4t,C.e4c,C.ew6,C.ew7,C.ew5,C.ew8,C.ew4,C.ewb,C.ewd,C.ew9,C.ewe,C.eIQ,C.eIR,C.eIO,C.eIP,C.eIN,C.eIS,C.eIT,C.eIU,C.eIV,C.eX6,C.eX8,C.eX5,C.eX4,C.eXa,C.eX3,C.euM,C.euN,C.euF,C.euE,C.euG,C.euD,C.euH,C.euC,C.euI,C.euB,C.euA,C.euz,C.euy,C.cpc])
t(C.bBR,C.aPl)
t(C.aHj,C.bBR)
u(B.lK,[C.bl1,C.beZ,C.bww,C.bdC,C.bv4,C.buu,C.bei,C.buw,C.byC,C.bl_,C.akU,C.bcM,C.bzG,C.agB,C.bzS,C.buv,C.bpD])
t(C.aOr,C.aOq)
t(C.aFL,C.aOr)
t(C.bBB,C.aOv)
t(C.aFN,C.bBB)
u(B.kQ,[C.Lw,C.a2d,C.Kv])
u(B.aw,[C.bvt,C.agU,C.afL,C.RC,C.bw0,C.aae,C.bh6])
t(C.aKo,C.aQb)
t(C.bkZ,B.oT)
t(C.aHi,C.aPj)
t(C.aAy,C.aAx)
t(C.akT,C.aAy)
t(C.aGg,C.bBE)
t(C.bcN,C.aMS)
t(C.aG6,C.aOG)
t(C.bBY,C.aPF)
t(C.aHO,C.bBY)
t(C.bBG,C.aON)
t(C.bnJ,C.bBG)
t(C.bBA,C.aOs)
t(C.bni,C.bBA)
t(C.bBP,C.aPd)
t(C.bol,C.bBP)
w(C.aPl,B.ci)
w(C.bBR,E.nW)
w(C.aOq,B.ci)
w(C.aOr,E.nW)
w(C.aOv,B.ci)
w(C.bBB,E.nW)
w(C.aQb,B.f1)
w(C.aPj,B.ci)
w(C.aAx,B.ci)
w(C.aAy,E.nW)
w(C.aMS,B.ci)
v(C.bBE,B.eL)
w(C.aOG,B.ci)
w(C.aOs,B.ci)
w(C.bBA,E.nW)
w(C.aON,B.ci)
w(C.bBG,E.nW)
w(C.aPd,B.ci)
w(C.bBP,E.nW)
w(C.aPF,B.ci)
w(C.bBY,E.nW)})()
B.i0(b.typeUniverse,JSON.parse('{"Xl":{"af":[],"w":[]},"bo9":{"ah":["Xl"]},"XI":{"af":[],"w":[]},"aHj":{"ah":["XI"]},"bl1":{"aC":[]},"W8":{"af":[],"w":[]},"aFL":{"ah":["W8"]},"Wf":{"af":[],"w":[]},"aFN":{"ah":["Wf"]},"beZ":{"aC":[]},"agU":{"aw":[],"w":[]},"afL":{"aw":[],"w":[]},"aKn":{"af":[],"w":[]},"OC":{"af":[],"w":[]},"aG3":{"ah":["OC"]},"bvt":{"aw":[],"w":[]},"RC":{"aw":[],"w":[]},"bww":{"aC":[]},"bw0":{"aw":[],"w":[]},"bdC":{"aC":[]},"aKo":{"ah":["aKn"]},"bv4":{"aC":[]},"buu":{"aC":[]},"bei":{"aC":[]},"buw":{"aC":[]},"byC":{"aC":[]},"XH":{"af":[],"w":[]},"bkZ":{"aC":[]},"aHi":{"ah":["XH"]},"bl_":{"aC":[]},"akU":{"aC":[]},"akS":{"af":[],"w":[]},"akT":{"ah":["akS"]},"WR":{"af":[],"w":[]},"aAc":{"af":[],"w":[]},"aGg":{"ah":["WR"],"eL":[]},"bcN":{"ah":["aAc"]},"bcM":{"aC":[]},"WA":{"af":[],"w":[]},"aG6":{"ah":["WA"]},"bzG":{"aC":[]},"agB":{"aC":[]},"aae":{"aw":[],"w":[]},"Yf":{"af":[],"w":[]},"X_":{"af":[],"w":[]},"W9":{"af":[],"w":[]},"WQ":{"af":[],"w":[]},"XC":{"af":[],"w":[]},"XN":{"af":[],"w":[]},"Y6":{"af":[],"w":[]},"XB":{"af":[],"w":[]},"aHO":{"ah":["Yf"]},"bzS":{"aC":[]},"bnJ":{"ah":["X_"]},"buv":{"aC":[]},"bni":{"ah":["W9"]},"bnA":{"ah":["WQ"]},"bpD":{"aC":[]},"aH4":{"ah":["XC"]},"aHr":{"ah":["XN"]},"boR":{"ah":["Y6"]},"bol":{"ah":["XB"]},"bh6":{"aw":[],"w":[]}}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.ar
return{c:w("kT<u?>"),G:w("u"),J:w("bl<m,H>"),Q:w("de<m>"),Z:w("a_"),I:w("vf"),M:w("N<dg>"),l:w("N<a54>"),h:w("N<a59>"),V:w("N<aa>"),O:w("N<u>"),F:w("N<W>"),D:w("N<ay<aE>>"),x:w("N<a_>"),E:w("N<ai<m>>"),b:w("N<ai<H>>"),U:w("N<ai<F?>>"),B:w("N<a9<m,aE>>"),g:w("N<r>"),bz:w("N<u8>"),v:w("N<fZ>"),eZ:w("N<+(m,m)>"),fT:w("N<+(H,w)>"),L:w("N<+(F,m)>"),u:w("N<+(F,F)>"),r:w("N<+(m,m,a_)>"),e:w("N<+(m,H,H,F)>"),o:w("N<+(m,F,m,F)>"),d:w("N<+(m,m,H,H,a9<m,H>)>"),_:w("N<vG>"),fQ:w("N<ace>"),s:w("N<m>"),cF:w("N<au>"),X:w("N<Gy>"),p:w("N<w>"),bL:w("N<adm>"),fH:w("N<lf>"),a_:w("N<adA>"),cB:w("N<nY>"),ba:w("N<adS>"),eW:w("N<Dn>"),fY:w("N<a0b>"),ac:w("N<afO>"),cd:w("N<Dy>"),fr:w("N<agI>"),e4:w("N<a2q>"),au:w("N<aLg>"),f7:w("N<P>"),n:w("N<H>"),t:w("N<F>"),dS:w("N<aC?>"),fs:w("N<u8?>"),bN:w("N<F?>"),gJ:w("cA<akT>"),A:w("cA<ah<af>>"),bF:w("ai<u>"),gl:w("ai<W>"),ew:w("ai<aE>"),j:w("ai<@>"),P:w("a9<m,@>"),f:w("a9<@,@>"),bd:w("O<er,m>"),fR:w("O<+(H,w),w>"),w:w("hW"),gA:w("vk"),gD:w("wF"),k:w("cn"),K:w("aE"),Y:w("u8"),C:w("er"),N:w("m"),bO:w("au"),a:w("bq<H>"),W:w("bf<m>"),aC:w("bf<F?>"),dg:w("ed<rs>"),m:w("bdU"),a2:w("Dj"),f3:w("rs"),es:w("GY"),q:w("ky"),y:w("P"),i:w("H"),z:w("@"),S:w("F"),R:w("ai<@>?"),cK:w("aE?"),T:w("m?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b5d=new B.dg(0,0.1)
D.b79=new C.aVz(0,0,0)
D.MP=new C.aVz(0,0.5,0)
D.b7L=new B.ax(A.bf,1,A.r,-1)
D.b9i=new B.aY(16,1/0,16,1/0)
D.b9t=new B.aY(0,1/0,0,210)
D.brw=new B.u(1,0.10588235294117647,0.12549019607843137,0.18823529411764706,A.q)
D.dDQ=w([D.brw,AC.akA],x.O)
D.eKo=new B.bT(A.BU,1.1,A.x,null,0,D.dDQ,null,null)
D.b9B=new B.o(null,null,null,null,null,D.eKo,A.m)
D.bax=new B.o(A.bj,null,null,null,null,null,A.a6)
D.fEm=new B.G(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hhG=new B.C("\u26a1",null,D.fEm,null,null,null,null,null,null,null,null,null)
D.bfh=new B.cm(A.z,null,null,D.hhG,null)
D.aYk=new B.G(!0,A.bW,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h6Z=new B.C("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aYk,null,A.K,null,null,null,null,null,null,null)
D.eCx=new B.D(A.o2,D.h6Z,null)
D.bfs=new B.cm(A.z,null,null,D.eCx,null)
D.fXG=new B.C("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aYk,null,A.K,null,null,null,null,null,null,null)
D.eDq=new B.D(A.HQ,D.fXG,null)
D.bga=new B.cm(A.z,null,null,D.eDq,null)
D.ahl=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.bk2=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.bkj=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.blz=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.blG=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.bm2=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.bo5=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.bpd=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.bpY=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.ajI=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.br_=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.ak5=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.akd=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.bt_=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.akF=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.bv2=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.bva=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bvG=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.wP=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.bxS=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.ama=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.bDJ=new B.bh(11e6)
D.bFD=new B.R(10,6,10,2)
D.bFF=new B.R(10,8,0,10)
D.bGj=new B.R(12,8,6,10)
D.bGm=new B.R(12,8,8,8)
D.bGu=new B.R(14,0,14,22)
D.bGw=new B.R(14,0,14,30)
D.bHA=new B.R(16,4,16,28)
D.bHU=new B.R(18,10,18,16)
D.bKI=new B.R(4,4,8,2)
D.bLl=new B.R(8,14,8,12)
D.bLw=new B.R(8,6,8,8)
D.bLS=new B.R(0,0,1.5,0)
D.b6W=new B.Ei(26,"saturation")
D.bMa=new B.v3(A.cE,D.b6W,null,A.Zu)
D.bMb=new B.h1(A.H,11)
D.bMf=new B.h1(A.H,30)
D.fWI=new B.C("REACTION LAB",null,V.aYX,null,null,null,null,A.a2,null,1,null,null)
D.bMo=new B.bu(1,A.b9,D.fWI,null)
D.h_R=new B.C("\ud83d\udce2 NGMY Ads",null,A.rJ,null,null,null,null,A.f_,null,1,null,null)
D.bNl=new B.bu(1,A.b9,D.h_R,null)
D.fVk=new B.C("Wire selected",null,A.hh,null,null,null,null,null,null,null,null,null)
D.bNz=new B.bu(1,A.b9,D.fVk,null)
D.arf=new B.a_(62712,"MaterialIcons",!1)
D.bTM=new B.a_(62908,"MaterialIcons",!1)
D.bVs=new B.a_(983122,"MaterialIcons",!1)
D.bVI=new B.a_(983247,"MaterialIcons",!1)
D.bVY=new B.a_(983443,"MaterialIcons",!1)
D.bWg=new B.a_(983616,"MaterialIcons",!1)
D.bVr=new B.a_(983117,"MaterialIcons",!1)
D.c_1=new B.ae(D.bVr,28,A.c,null,null,null)
D.c_j=new B.ae(A.jl,18,null,null,null,null)
D.c1z=new B.ae(A.o8,null,A.ab,null,null,null)
D.c1J=new B.ae(A.a4U,21,A.ab,null,null,null)
D.c2A=new B.ae(A.eB,17,A.ab,null,null,null)
D.c5u=new B.ae(A.jl,21,A.ab,null,null,null)
D.c60=new B.ae(A.eq,20,A.bZ,null,null,null)
D.c77=new B.ae(A.eg,null,A.aQ,null,null,null)
D.dBn=w([A.dl,A.dg,A.dl],x.O)
D.auW=new B.a8(A.a5,A.a9,A.x,D.dBn,null,null)
D.daS=w([A.bO,A.bk],x.O)
D.caD=new B.a8(A.aX,A.b1,A.x,D.daS,null,null)
D.caS=new B.a8(A.aX,A.b1,A.x,A.a7u,null,null)
D.dwC=w([F.Nf,Aa.amk],x.O)
D.cbC=new B.a8(A.aX,A.b1,A.x,D.dwC,null,null)
D.d8b=w([A.pz,A.iH],x.O)
D.cbI=new B.a8(A.aX,A.b1,A.x,D.d8b,null,null)
D.daA=w([A.cU,A.aw],x.O)
D.av8=new B.a8(A.aX,A.b1,A.x,D.daA,null,null)
D.duy=w([A.d0,A.iK,A.bk],x.O)
D.cc0=new B.a8(A.a5,A.a9,A.x,D.duy,null,null)
D.dGI=w([A.d0,A.bO,A.bk],x.O)
D.ccb=new B.a8(A.a5,A.a9,A.x,D.dGI,null,null)
D.duE=w([A.cy,A.cx],x.O)
D.avb=new B.a8(A.aX,A.b1,A.x,D.duE,null,null)
D.aFb=w([A.cU,M.n8],x.O)
D.ccC=new B.a8(A.aX,A.b1,A.x,D.aFb,null,null)
D.ccU=new B.a8(A.aX,A.b1,A.x,U.avv,null,null)
D.cdL=new B.a8(A.ay,A.aD,A.x,A.T0,null,null)
D.bwB=new B.u(1,0.16470588235294117,0.16470588235294117,0.1803921568627451,A.q)
D.brM=new B.u(1,0.0392156862745098,0.0392156862745098,0.043137254901960784,A.q)
D.dkh=w([D.bwB,D.brM],x.O)
D.cdP=new B.a8(A.aX,A.b1,A.x,D.dkh,null,null)
D.cdZ=new B.a8(A.aX,A.b1,A.x,H.aEt,null,null)
D.alU=new B.u(1,0.043137254901960784,0.043137254901960784,0.047058823529411764,A.q)
D.bwc=new B.u(1,0.22745098039215686,0.22745098039215686,0.23921568627450981,A.q)
D.dDf=w([D.alU,D.bwc,D.alU],x.O)
D.ce6=new B.a8(A.a5,A.a9,A.x,D.dDf,null,null)
D.bvA=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.bwu=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cTv=w([A.Om,D.bvA,D.bwu],x.O)
D.ce9=new B.a8(A.aX,A.b1,A.x,D.cTv,null,null)
D.cGG=w([A.de,A.iY],x.O)
D.ceo=new B.a8(A.aX,A.b1,A.x,D.cGG,null,null)
D.cUb=w([A.d0,A.hW,A.d0],x.O)
D.cew=new B.a8(A.a5,A.a9,A.x,D.cUb,null,null)
D.bzi=new B.u(1,0.07058823529411765,0.0784313725490196,0.10196078431372549,A.q)
D.cHs=w([F.aht,D.bzi],x.O)
D.ceC=new B.a8(A.aX,A.b1,A.x,D.cHs,null,null)
D.cfg=w([0,4,7],x.t)
D.cfh=w([0,4,7,12],x.t)
D.cfi=w([0,4,7,4],x.t)
D.aE8=w([A.hj,A.th],x.O)
D.aDE=w([A.fX,A.cY],x.O)
D.aBX=w([A.bl,A.dY],x.O)
D.d1q=w([A.aQ,A.de],x.O)
D.dw2=w([A.c5,A.lP],x.O)
D.aBn=w([A.cW,A.kc],x.O)
D.d6U=w([A.bP,A.aM],x.O)
D.cfG=w([D.aE8,D.aDE,A.a6J,D.aBX,D.d1q,A.aCd,A.aDa,D.dw2,D.aBn,D.d6U],B.ar("N<ai<u>>"))
D.cko=w([120,220,380],x.t)
D.co8=w([12,16,19,24],x.t)
D.cok=w([1400,800,450,2400],x.t)
D.cwS=w([250,450,900,1500],x.t)
D.bjl=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.bw_=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.btG=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.bzU=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.bsN=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.aAD=w([D.bjl,D.bw_,D.btG,D.bzU,D.bsN],x.O)
D.f49=new B.y(-25,A.aw)
D.eTi=new B.y(25,A.bE)
D.cGM=w([D.f49,D.eTi],B.ar("N<+(H,u)>"))
D.cOi=w([50,25,75],x.t)
D.cU4=w([0,5,10,15,18,20,25],x.t)
D.d1K=w([900,500,250,1600],x.t)
D.d65=w([A.bl,A.bB,A.bd,A.bl],x.O)
D.a6B=w([A.aC,A.bu,A.bj,A.aH,A.oK],x.O)
D.d7O=w([A.aw,A.aC,A.cW,A.bu,A.bj,A.cF,A.cf,A.bB,A.ZO],x.O)
D.a6E=w([0.04,0.17,0.3],x.n)
D.fnF=new C.vG("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.fnL=new C.vG("Medium engine","A good all-rounder.",0.3,0.9)
D.fnK=new C.vG("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Jk=w([D.fnF,D.fnL,D.fnK],x._)
D.eQs=new B.y(6,"Easy")
D.eRg=new B.y(8,"Medium")
D.eM0=new B.y(10,"Hard")
D.d9z=w([D.eQs,D.eRg,D.eM0],x.L)
D.aCm=w([0.55,0.78,1],x.n)
D.aCx=w([A.c,A.h8,A.pB,A.aw],x.O)
D.aCF=w([A.bj,A.aC,A.bu,A.dg],x.O)
D.fnC=new C.vG("Radar","Shows your height above the ground.",0.1,0)
D.fnD=new C.vG("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.fnA=new C.vG("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aCO=w([D.fnC,D.fnD,D.fnA],x._)
D.dfU=w([-29.5,28.5],x.n)
D.dg_=w([A.bk,A.cl,F.NK,A.cy],x.O)
D.dgn=w([47,100,220,470,1000],x.n)
D.dhH=w([0,0.32,0.62,1],x.n)
D.dhM=w([A.d0,A.hW,A.d0,A.cy],x.O)
D.Kp={volts:0}
D.a8v=new B.bl(D.Kp,[3],x.J)
D.KR=new B.e_(["b","battery",0.2,0.3,D.a8v])
D.ewo={on:0}
D.dN3=new B.bl(D.ewo,[1],x.J)
D.Fk=new B.e_(["s","switch",0.5,0.3,D.dN3])
D.fle=new B.e_(["l","bulb",0.8,0.3,A.jI])
D.db2=w([D.KR,D.Fk,D.fle],x.d)
D.Fi=new B.b7(["b",0,"s",0])
D.fk8=new B.b7(["s",1,"l",0])
D.aTQ=new B.b7(["l",1,"b",1])
D.duM=w([D.Fi,D.fk8,D.aTQ],x.o)
D.dao=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.eL7=new C.n8("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.db2,D.duM,D.dao)
D.aNB={ohms:0}
D.aLa=new B.bl(D.aNB,[220],x.J)
D.fkD=new B.e_(["r","resistor",0.5,0.3,D.aLa])
D.flv=new B.e_(["d","led",0.8,0.3,A.jI])
D.dyg=w([D.KR,D.fkD,D.flv],x.d)
D.fjm=new B.b7(["b",0,"r",0])
D.fk2=new B.b7(["r",1,"d",0])
D.fjt=new B.b7(["d",1,"b",1])
D.dIu=w([D.fjm,D.fk2,D.fjt],x.o)
D.dyJ=w(["led","diode","indicator"],x.s)
D.eLe=new C.n8("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dyg,D.dIu,D.dyJ)
D.aa_={level:0}
D.dMq=new B.bl(D.aa_,[0.2],x.J)
D.fkK=new B.e_(["p","pot",0.5,0.3,D.dMq])
D.fkM=new B.e_(["m","motor",0.8,0.3,A.jI])
D.dbo=w([D.KR,D.fkK,D.fkM],x.d)
D.fjl=new B.b7(["b",0,"p",0])
D.fjY=new B.b7(["p",1,"m",0])
D.fjT=new B.b7(["m",1,"b",1])
D.dDy=w([D.fjl,D.fjY,D.fjT],x.o)
D.dur=w(["fan","motor","spin","dimmer"],x.s)
D.eL5=new C.n8("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.dbo,D.dDy,D.dur)
D.a8r=new B.bl(D.aa_,[0.9],x.J)
D.aTZ=new B.e_(["s","solar",0.25,0.3,D.a8r])
D.aTY=new B.e_(["l","bulb",0.75,0.3,A.jI])
D.dex=w([D.aTZ,D.aTY],x.d)
D.fk5=new B.b7(["s",0,"l",0])
D.fjQ=new B.b7(["l",1,"s",1])
D.dcg=w([D.fk5,D.fjQ],x.o)
D.dEj=w(["solar","sun","without battery","no battery","free"],x.s)
D.eL8=new C.n8("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.dex,D.dcg,D.dEj)
D.flA=new B.e_(["c","crank",0.25,0.3,D.a8r])
D.dsx=w([D.flA,D.aTY],x.d)
D.fjp=new B.b7(["c",0,"l",0])
D.fjP=new B.b7(["l",1,"c",1])
D.dtc=w([D.fjp,D.fjP],x.o)
D.dsI=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.eL4=new C.n8("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.dsx,D.dtc,D.dsI)
D.dMp=new B.bl(D.aa_,[0.7],x.J)
D.fkR=new B.e_(["t","turbine",0.25,0.3,D.dMp])
D.fkB=new B.e_(["m","motor",0.75,0.3,A.jI])
D.dmc=w([D.fkR,D.fkB],x.d)
D.fkg=new B.b7(["t",0,"m",0])
D.fjU=new B.b7(["m",1,"t",1])
D.dl2=w([D.fkg,D.fjU],x.o)
D.drf=w(["wind","turbine","windmill","water","hydro"],x.s)
D.eL1=new C.n8("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.dmc,D.dl2,D.drf)
D.aL7=new B.bl(D.Kp,[9],x.J)
D.ab6=new B.e_(["b","battery",0.2,0.3,D.aL7])
D.aTW=new B.e_(["r","radio",0.8,0.3,A.jI])
D.dEX=w([D.ab6,D.Fk,D.aTW],x.d)
D.fka=new B.b7(["s",1,"r",0])
D.aTS=new B.b7(["r",1,"b",1])
D.ceU=w([D.Fi,D.fka,D.aTS],x.o)
D.dDj=w(["radio","music","listen"],x.s)
D.eLd=new C.n8("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dEX,D.ceU,D.dDj)
D.dNt=new B.bl(D.Kp,[12],x.J)
D.aTV=new B.e_(["b","battery",0.2,0.3,D.dNt])
D.flf=new B.e_(["t","tv",0.8,0.3,A.jI])
D.db4=w([D.aTV,D.Fk,D.flf],x.d)
D.fkb=new B.b7(["s",1,"t",0])
D.aTT=new B.b7(["t",1,"b",1])
D.dw5=w([D.Fi,D.fkb,D.aTT],x.o)
D.dEV=w(["tv","television","screen","watch"],x.s)
D.eKZ=new C.n8("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.db4,D.dw5,D.dEV)
D.fl4=new B.e_(["z","buzzer",0.8,0.3,A.jI])
D.cQH=w([D.KR,D.Fk,D.fl4],x.d)
D.fkc=new B.b7(["s",1,"z",0])
D.fku=new B.b7(["z",1,"b",1])
D.d56=w([D.Fi,D.fkc,D.fku],x.o)
D.dBv=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.eLa=new C.n8("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cQH,D.d56,D.dBv)
D.fkL=new B.e_(["h","heater",0.8,0.3,A.jI])
D.dpK=w([D.ab6,D.Fk,D.fkL],x.d)
D.fk7=new B.b7(["s",1,"h",0])
D.fjC=new B.b7(["h",1,"b",1])
D.d60=w([D.Fi,D.fk7,D.fjC],x.o)
D.cAc=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.eL_=new C.n8("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.dpK,D.d60,D.cAc)
D.flh=new B.e_(["s","solar",0.2,0.25,D.a8r])
D.dNy=new B.bl(D.aNB,[100],x.J)
D.flk=new B.e_(["r","resistor",0.55,0.25,D.dNy])
D.flt=new B.e_(["c","capacitor",0.85,0.25,A.jI])
D.fkH=new B.e_(["q","resistor",0.55,0.6,D.aLa])
D.fli=new B.e_(["d","led",0.85,0.6,A.jI])
D.dvw=w([D.flh,D.flk,D.flt,D.fkH,D.fli],x.d)
D.fk6=new B.b7(["s",0,"r",0])
D.fk1=new B.b7(["r",1,"c",0])
D.fjr=new B.b7(["c",1,"s",1])
D.fjq=new B.b7(["c",0,"q",0])
D.fk0=new B.b7(["q",1,"d",0])
D.fju=new B.b7(["d",1,"c",1])
D.diI=w([D.fk6,D.fk1,D.fjr,D.fjq,D.fk0,D.fju],x.o)
D.drP=w(["capacitor","store","charge","flash"],x.s)
D.eLc=new C.n8("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.dvw,D.diI,D.drP)
D.fkU=new B.e_(["b","battery",0.15,0.3,D.a8v])
D.flC=new B.e_(["l1","bulb",0.5,0.3,A.jI])
D.fl1=new B.e_(["l2","bulb",0.85,0.3,A.jI])
D.d8T=w([D.fkU,D.flC,D.fl1],x.d)
D.fjk=new B.b7(["b",0,"l1",0])
D.fjM=new B.b7(["l1",1,"l2",0])
D.fjN=new B.b7(["l2",1,"b",1])
D.dn0=w([D.fjk,D.fjM,D.fjN],x.o)
D.dEF=w(["series","two bulbs","dim"],x.s)
D.eL2=new C.n8("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.d8T,D.dn0,D.dEF)
D.ewK={volts:0,charge:1}
D.dNC=new B.bl(D.ewK,[1.5,0],x.J)
D.flq=new B.e_(["b","battery",0.75,0.3,D.dNC])
D.d8c=w([D.aTZ,D.flq],x.d)
D.fk4=new B.b7(["s",0,"b",0])
D.fjo=new B.b7(["b",1,"s",1])
D.dj2=w([D.fk4,D.fjo],x.o)
D.drZ=w(["charge","rechargeable","flat","recharge"],x.s)
D.eL0=new C.n8("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.d8c,D.dj2,D.drZ)
D.dNs=new B.bl(D.Kp,[4.5],x.J)
D.fkN=new B.e_(["b","battery",0.2,0.3,D.dNs])
D.aTU=new B.e_(["p","phone",0.8,0.3,A.jI])
D.dm0=w([D.fkN,D.Fk,D.aTU],x.d)
D.fk9=new B.b7(["s",1,"p",0])
D.ab5=new B.b7(["p",1,"b",1])
D.dAe=w([D.Fi,D.fk9,D.ab5],x.o)
D.dBX=w(["phone","charger","usb","mobile"],x.s)
D.eL6=new C.n8("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.dm0,D.dAe,D.dBX)
D.fky=new B.e_(["f","fan",0.8,0.3,A.jI])
D.csb=w([D.KR,D.fky],x.d)
D.fjj=new B.b7(["b",0,"f",0])
D.fjA=new B.b7(["f",1,"b",1])
D.d6E=w([D.fjj,D.fjA],x.o)
D.duq=w(["fan","cool","air","wind"],x.s)
D.eLf=new C.n8("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.csb,D.d6E,D.duq)
D.fl8=new B.e_(["b","battery",0.15,0.2,D.a8v])
D.fkz=new B.e_(["a","ammeter",0.5,0.2,A.jI])
D.fkx=new B.e_(["l","bulb",0.85,0.2,A.jI])
D.fla=new B.e_(["v","voltmeter",0.5,0.6,A.jI])
D.dsl=w([D.fl8,D.fkz,D.fkx,D.fla],x.d)
D.fjh=new B.b7(["b",0,"a",0])
D.fjf=new B.b7(["a",1,"l",0])
D.fki=new B.b7(["v",0,"l",0])
D.fkj=new B.b7(["v",1,"l",1])
D.diU=w([D.fjh,D.fjf,D.aTQ,D.fki,D.fkj],x.o)
D.dIt=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.eLb=new C.n8("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.dsl,D.diU,D.dIt)
D.flF=new B.e_(["b","battery",0.15,0.2,D.aL7])
D.fkT=new B.e_(["t","tv",0.55,0.2,A.jI])
D.aL8=new B.bl(D.Kp,[5],x.J)
D.fkE=new B.e_(["c","buck",0.4,0.5,D.aL8])
D.fkV=new B.e_(["p","phone",0.8,0.5,A.jI])
D.dg9=w([D.flF,D.fkT,D.fkE,D.fkV],x.d)
D.fjn=new B.b7(["b",0,"t",0])
D.aTO=new B.b7(["b",0,"c",0])
D.aTP=new B.b7(["c",1,"p",0])
D.dlY=w([D.fjn,D.aTT,D.aTO,D.aTP,D.ab5],x.o)
D.de1=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.eL3=new C.n8("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.dg9,D.dlY,D.de1)
D.fkG=new B.e_(["c","buck",0.5,0.3,D.aL8])
D.d5N=w([D.aTV,D.fkG,D.aTU],x.d)
D.dbz=w([D.aTO,D.aTP,D.ab5],x.o)
D.cDK=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.eKY=new C.n8("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.d5N,D.dbz,D.cDK)
D.fl_=new B.e_(["d","diode",0.5,0.3,A.jI])
D.dng=w([D.ab6,D.fl_,D.aTW],x.d)
D.fji=new B.b7(["b",0,"d",0])
D.fjv=new B.b7(["d",1,"r",0])
D.cTg=w([D.fji,D.fjv,D.aTS],x.o)
D.ddF=w(["diode","protect","backwards","one way"],x.s)
D.eL9=new C.n8("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.dng,D.cTg,D.ddF)
D.Te=w([D.eL7,D.eLe,D.eL5,D.eL8,D.eL4,D.eL1,D.eLd,D.eKZ,D.eLa,D.eL_,D.eLc,D.eL2,D.eL0,D.eL6,D.eLf,D.eLb,D.eL3,D.eKY,D.eL9],B.ar("N<n8>"))
D.hWS=new C.Hc("Moon",1.62,A.d0,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hWQ=new C.Hc("Mars",3.71,A.aC,"Mars has about 38 percent of Earth's gravity.")
D.hWT=new C.Hc("Mercury",3.7,A.kG,"Mercury is small, so its gravity is like Mars.")
D.hWN=new C.Hc("Venus",8.87,A.aQ,"Venus is almost as heavy as Earth, with strong gravity.")
D.hWP=new C.Hc("Earth",9.81,A.aH,"On Earth gravity is strong, and the air also slows you down.")
D.hWR=new C.Hc("Neptune",11.15,A.dg,"Neptune pulls a little harder than Earth.")
D.hWO=new C.Hc("Jupiter",24.79,A.cW,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.tW=w([D.hWS,D.hWQ,D.hWT,D.hWN,D.hWP,D.hWR,D.hWO],B.ar("N<Hc>"))
D.diG=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.dju=w([0.2,0.5,0.8],x.n)
D.b3W=new C.Lw(0,"accordion")
D.d71=w([A.jY,A.A9,A.zV],x.x)
D.dfu=w(["Mail","SMS","Ad"],x.s)
D.d7G=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hV1=new C.Bm(D.b3W,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aE8,D.d71,D.dfu,D.d7G)
D.aeY=new C.Lw(1,"flip")
D.drJ=w([A.rh,A.DW,A.rk],x.x)
D.dlG=w(["Unlock","Verify","Secure"],x.s)
D.d5I=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hV0=new C.Bm(D.aeY,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.aDE,D.drJ,D.dlG,D.d5I)
D.b3X=new C.Lw(2,"towers")
D.dkj=w([A.A7,A.mx,A.iu],x.x)
D.djN=w(["Save","Grow","Earn"],x.s)
D.cUh=w(["","",""],x.s)
D.hV2=new C.Bm(D.b3X,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a6J,D.dkj,D.djN,D.cUh)
D.aeZ=new C.Lw(3,"assemble")
D.dsM=w([A.p3,A.fM,A.eg],x.x)
D.deM=w(["Launch","Charge","Shine"],x.s)
D.doH=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hV4=new C.Bm(D.aeZ,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.aBX,D.dsM,D.deM,D.doH)
D.b3Y=new C.Lw(4,"carousel")
D.dsy=w([A.bd,A.fv],x.O)
D.dfF=w([A.nj,A.arD,A.QW],x.x)
D.d9p=w(["Explore","Discover","Learn"],x.s)
D.dm7=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hV_=new C.Bm(D.b3Y,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.dsy,D.dfF,D.d9p,D.dm7)
D.b3Z=new C.Lw(5,"burst")
D.djI=w([A.hY,A.uS],x.O)
D.d7z=w([A.kl,A.m1,A.hP],x.x)
D.d7Y=w(["Cheer","Win","Love"],x.s)
D.dax=w(["Make some noise","First place","Share the joy"],x.s)
D.hV3=new C.Bm(D.b3Z,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.djI,D.d7z,D.d7Y,D.dax)
D.aDl=w([D.hV1,D.hV0,D.hV2,D.hV4,D.hV_,D.hV3],B.ar("N<Bm>"))
D.fdV=new B.b0("skin","Skin",A.a4b)
D.ffF=new B.b0("muscle","Muscles",A.Qw)
D.ffh=new B.b0("organ","Organs",A.hP)
D.bTs=new B.a_(62747,"MaterialIcons",!1)
D.ffr=new B.b0("bone","Skeleton",D.bTs)
D.ffN=new B.b0("vessel","Blood vessels",A.q3)
D.dkp=w([D.fdV,D.ffF,D.ffh,D.ffr,D.ffN],x.r)
D.fnE=new C.vG("Simple legs","Light. Land gently.",0.15,0.2)
D.fnG=new C.vG("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.fnJ=new C.vG("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.Eh=w([D.fnE,D.fnG,D.fnJ],x._)
D.fiQ=new B.b7(["beat",0.18,0.28,0])
D.fkd=new B.b7(["burst",0.7,0.2,0])
D.fko=new B.b7(["delay",0.45,0.5,1])
D.fjW=new B.b7(["ripple",0.75,0.6,3])
D.des=w([D.fiQ,D.fkd,D.fko,D.fjW],x.e)
D.dr_=w([Q.lh,S.KP,F.VO],x.u)
D.hRS=new C.GY("First spark","A clock lights a burst and a ripple",D.des,D.dr_)
D.fjz=new B.b7(["beat",0.15,0.3,1])
D.fh6=new B.b7(["ripple",0.62,0.15,0])
D.fkk=new B.b7(["delay",0.4,0.45,0])
D.fjb=new B.b7(["ripple",0.7,0.45,0])
D.fiL=new B.b7(["delay",0.4,0.7,1])
D.fjZ=new B.b7(["shake",0.75,0.75,0])
D.dFV=w([D.fjz,D.fh6,D.fkk,D.fjb,D.fiL,D.fjZ],x.e)
D.eN8=new B.y(2,4)
D.aTs=new B.y(4,5)
D.div=w([Q.lh,S.KP,F.VO,D.eN8,D.aTs],x.u)
D.hRU=new C.GY("Heartbeat","Two thumps, then a shake",D.dFV,D.div)
D.fiW=new B.b7(["dice",0.15,0.7,1])
D.fkq=new B.b7(["echo",0.4,0.7,0])
D.fj7=new B.b7(["comet",0.7,0.5,4])
D.fke=new B.b7(["burst",0.72,0.2,1])
D.fjw=new B.b7(["burst",0.3,0.25,0])
D.fiX=new B.b7(["pop",0.55,0.85,0])
D.czK=w([D.fiW,D.fkq,D.fj7,D.fke,D.fjw,D.fiX],x.e)
D.eMs=new B.y(1,3)
D.eMt=new B.y(1,4)
D.aTo=new B.y(0,5)
D.dst=w([Q.lh,T.w8,D.eMs,D.eMt,D.aTo],x.u)
D.hRT=new C.GY("Fireworks","Dice launch comets that burst in colour",D.czK,D.dst)
D.fj3=new B.b7(["beat",0.15,0.2,2])
D.fjJ=new B.b7(["chance",0.4,0.2,0])
D.fiT=new B.b7(["ball",0.7,0.12,3])
D.fiE=new B.b7(["chance",0.4,0.5,1])
D.fkp=new B.b7(["ball",0.3,0.08,1])
D.fhW=new B.b7(["ripple",0.7,0.55,3])
D.csG=w([D.fj3,D.fjJ,D.fiT,D.fiE,D.fkp,D.fhW],x.e)
D.eN9=new B.y(2,5)
D.cQq=w([Q.lh,T.w8,S.aaX,F.VP,D.eN9],x.u)
D.hRR=new C.GY("Rain","Balls fall at random and splash",D.csG,D.cQq)
D.fjK=new B.b7(["beat",0.12,0.45,2])
D.fkf=new B.b7(["toggle",0.38,0.2,0])
D.fkm=new B.b7(["wash",0.7,0.15,4])
D.fiV=new B.b7(["count3",0.38,0.45,0])
D.fkh=new B.b7(["burst",0.72,0.4,0])
D.fjx=new B.b7(["light",0.55,0.7,1])
D.fiF=new B.b7(["pop",0.8,0.8,4])
D.dvu=w([D.fjK,D.fkf,D.fkm,D.fiV,D.fkh,D.fjx,D.fiF],x.e)
D.eNG=new B.y(3,6)
D.cvS=w([Q.lh,T.w8,S.aaX,F.VP,D.aTo,D.eNG],x.u)
D.hRP=new C.GY("Disco","A beat drives lights, washes and bursts",D.dvu,D.cvS)
D.fkt=new B.b7(["button",0.12,0.2,0])
D.fim=new B.b7(["delay",0.34,0.2,1])
D.fks=new B.b7(["light",0.56,0.2,1])
D.fkl=new B.b7(["delay",0.56,0.45,1])
D.fjL=new B.b7(["ball",0.34,0.6,0])
D.fiD=new B.b7(["delay",0.34,0.8,1])
D.fgX=new B.b7(["burst",0.7,0.8,5])
D.cfJ=w([D.fkt,D.fim,D.fks,D.fkl,D.fjL,D.fiD,D.fgX],x.e)
D.ePX=new B.y(5,6)
D.dBF=w([Q.lh,T.w8,F.VO,F.VP,D.aTs,D.ePX],x.u)
D.hRQ=new C.GY("Domino","Tap the button and watch it run down the line",D.cfJ,D.dBF)
D.aDI=w([D.hRS,D.hRU,D.hRT,D.hRR,D.hRP,D.hRQ],B.ar("N<GY>"))
D.dqc=w([0.05,0.15,0.25],x.n)
D.drd=w([1.5,3,4.5,9,12],x.n)
D.fc7=new B.b0("dice","Dice",A.o4)
D.fdr=new B.b0("coin","Coin",W.A0)
D.ffI=new B.b0("num","Number",A.xu)
D.drr=w([D.fc7,D.fdr,D.ffI],x.r)
D.drv=w(["skin","muscle","organ","bone","vessel"],x.s)
D.aDO=w([A.bZ,A.aQ,A.bf,A.aH,A.bl,A.c5,A.cW,A.fX],x.O)
D.dsz=w([A.c5,A.aH,A.eF,A.bf],x.O)
D.dtG=w([],x.h)
D.eEc=new C.er("battery","Battery","\ud83d\udd0b",A.bf,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.eEi=new C.er("solar","Solar panel","\u2600\ufe0f",A.bu,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.eEX=new C.er("crank","Hand crank","\ud83d\udd04",A.cW,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.eEz=new C.er("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aH,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.eE4=new C.er("buck","Step-down converter","\ud83d\udd3d",A.fX,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.eEx=new C.er("regulator","5 V regulator","\ud83e\uddca",A.bP,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.eF1=new C.er("diode","Diode","\u27a1\ufe0f",A.aQ,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.eEJ=new C.er("ldr","Light sensor","\ud83c\udf1e",A.eF,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.eEn=new C.er("switch","Switch","\ud83c\udf9a\ufe0f",A.bl,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.eEZ=new C.er("fuse","Fuse","\ud83e\uddef",A.bZ,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.eDX=new C.er("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.fX,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.eEK=new C.er("resistor","Resistor","\u3030\ufe0f",A.aQ,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.eEM=new C.er("bulb","Light bulb","\ud83d\udca1",A.eF,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.eEk=new C.er("led","LED","\ud83d\udd34",A.aC,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.eEo=new C.er("motor","Motor","\u2699\ufe0f",A.bP,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.eEG=new C.er("buzzer","Buzzer","\ud83d\udd14",A.c5,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.eEd=new C.er("heater","Heater","\ud83d\udd25",A.cW,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.eEB=new C.er("capacitor","Capacitor","\ud83e\udeab",A.cw,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.eEt=new C.er("radio","Radio","\ud83d\udcfb",A.oK,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.eEq=new C.er("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.bd,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.eE3=new C.er("voltmeter","Voltmeter","\ud83e\udded",A.bw,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.eEa=new C.er("ammeter","Ammeter","\ud83d\udcdf",A.aQ,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.eEg=new C.er("fan","Fan","\ud83c\udf00",A.aH,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.eF3=new C.er("speaker","Speaker","\ud83d\udd0a",A.c5,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.eET=new C.er("clock","Digital clock","\u23f0",A.bf,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.eEw=new C.er("calculator","Calculator","\ud83e\uddee",A.Ni,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.eE9=new C.er("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cw,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.eF2=new C.er("router","WiFi router","\ud83d\udcf6",A.fX,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.eF5=new C.er("siren","Siren","\ud83d\udea8",A.aC,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.eE_=new C.er("toycar","Toy car","\ud83d\ude97",A.cW,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.eF6=new C.er("kettle","Kettle","\ud83e\uded6",A.n5,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.eE7=new C.er("lamp","Desk lamp","\ud83e\ude94",A.eF,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.eEj=new C.er("lights","Party lights","\ud83c\udf84",A.oK,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.eEu=new C.er("fridge","Fridge","\ud83e\uddca",A.hk,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.eE1=new C.er("washer","Washing machine","\ud83e\udee7",A.cw,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.eEU=new C.er("blender","Blender","\ud83e\udd64",A.bZ,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.eEr=new C.er("drone","Drone","\ud83d\ude81",A.bP,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.eE6=new C.er("drill","Power drill","\ud83d\udd29",A.aQ,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.eEv=new C.er("torch","Torch","\ud83d\udd26",A.bM,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.eER=new C.er("neon","Neon sign","\ud83e\udea7",A.c5,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.eE2=new C.er("microwave","Microwave","\ud83c\udf72",A.cW,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.eEL=new C.er("doorbell","Doorbell","\ud83d\udd14",A.bu,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.eEf=new C.er("camera","Security camera","\ud83d\udcf7",A.an,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.eEF=new C.er("console","Game console","\ud83c\udfae",A.bl,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.eEW=new C.er("heartmon","Heart monitor","\ud83e\ude7a",A.hH,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.eE0=new C.er("aquarium","Aquarium","\ud83d\udc20",A.bd,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.eEA=new C.er("lighthouse","Lighthouse","\ud83d\uddfc",A.eF,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.eEI=new C.er("discoball","Disco ball","\ud83e\udea9",A.oK,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.eF0=new C.er("robot","Robot","\ud83e\udd16",A.aH,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.eDZ=new C.er("toaster","Toaster","\ud83c\udf5e",A.ee,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.eF4=new C.er("ledstrip","LED strip","\ud83c\udf08",A.c5,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.eEQ=new C.er("pump","Water pump","\ud83d\udeb0",A.aH,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.eEC=new C.er("hairdryer","Hair dryer","\ud83d\udca8",A.hY,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.eEO=new C.er("headphones","Headphones","\ud83c\udfa7",A.bl,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.eE8=new C.er("smartwatch","Apple Watch Ultra","\u231a",A.bw,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.eF_=new C.er("tablet","iPad Pro M5","\ud83d\udcf2",A.cw,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.eDW=new C.er("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hH,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.eEs=new C.er("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bv,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.eEl=new C.er("appletv","Apple TV 4K","\ud83d\udcfa",A.bO,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.eEH=new C.er("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.wJ,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.eDY=new C.er("iphonefold","iPhone Fold","\ud83d\udcf1",A.b_,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.eEb=new C.er("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.dg,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.eEY=new C.er("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cF,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.eED=new C.er("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bj,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.eEy=new C.er("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.ca,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.eEP=new C.er("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.aC,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.eEm=new C.er("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.bf,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.eEE=new C.er("honor","Honor Magic V5","\ud83d\udcf1",A.cw,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.eEN=new C.er("vivo","vivo X300 Pro","\ud83d\udcf1",A.cW,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.eES=new C.er("ereader","Kindle Scribe","\ud83d\udcd6",A.bv,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.eDV=new C.er("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.cf,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.eEp=new C.er("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cF,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.eEh=new C.er("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.bd,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.eE5=new C.er("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.eF,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.eEe=new C.er("carscreen","Luxury car touchscreen","\ud83d\ude98",A.aC,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.eEV=new C.er("vision","Apple Vision Pro","\ud83e\udd7d",A.bl,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.TF=w([D.eEc,D.eEi,D.eEX,D.eEz,D.eE4,D.eEx,D.eF1,D.eEJ,D.eEn,D.eEZ,D.eDX,D.eEK,D.eEM,D.eEk,D.eEo,D.eEG,D.eEd,D.eEB,D.eEt,D.eEq,D.eE3,D.eEa,D.eEg,D.eF3,D.eET,D.eEw,D.eE9,D.eF2,D.eF5,D.eE_,D.eF6,D.eE7,D.eEj,D.eEu,D.eE1,D.eEU,D.eEr,D.eE6,D.eEv,D.eER,D.eE2,D.eEL,D.eEf,D.eEF,D.eEW,D.eE0,D.eEA,D.eEI,D.eF0,D.eDZ,D.eF4,D.eEQ,D.eEC,D.eEO,D.eE8,D.eF_,D.eDW,D.eEs,D.eEl,D.eEH,D.eDY,D.eEb,D.eEY,D.eED,D.eEy,D.eEP,D.eEm,D.eEE,D.eEN,D.eES,D.eDV,D.eEp,D.eEh,D.eE5,D.eEe,D.eEV],B.ar("N<er>"))
D.duk=w([5,10,15,25,45,60],x.t)
D.duI=w([-0.045,0.03,-0.015],x.n)
D.aEg=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.vO=w([0.05,0.2,0.35],x.n)
D.aEk=w([A.d0,A.iK,A.uV,A.GC],x.O)
D.bbQ=new B.aa(0,A.H,A.i_,A.dS,6)
D.dxF=w([D.bbQ],x.V)
D.eLB=new B.y(0,"AND")
D.eMv=new B.y(1,"Adder")
D.eNa=new B.y(2,"Blinker")
D.eNH=new B.y(3,"Memory")
D.dyu=w([D.eLB,D.eMv,D.eNa,D.eNH],x.L)
D.aEu=w([-104,0,104],x.n)
D.aEw=w([-14,3],x.n)
D.dzu=w([-8,0,8],x.n)
D.aEE=w([-92,0,92],x.n)
D.dzY=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.fnB=new C.vG("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.fnI=new C.vG("Medium tank","Balanced.",0.35,1)
D.fnH=new C.vG("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.TU=w([D.fnB,D.fnI,D.fnH],x._)
D.og=w([0.04,0.2,0.36],x.n)
D.aEQ=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.ffg=new B.b0(D.b3W,"Fold",W.asA)
D.fea=new B.b0(D.aeY,"Flip",A.DC)
D.bTJ=new B.a_(62889,"MaterialIcons",!1)
D.ffE=new B.b0(D.b3X,"Rise",D.bTJ)
D.asN=new B.a_(983870,"MaterialIcons",!1)
D.fbs=new B.b0(D.aeZ,"Assemble",D.asN)
D.fbF=new B.b0(D.b3Y,"Spin",D.arf)
D.fbz=new B.b0(D.b3Z,"Pop",A.kl)
D.dBC=w([D.ffg,D.fea,D.ffE,D.fbs,D.fbF,D.fbz],B.ar("N<+(Lw,m,a_)>"))
D.aEV=w([A.c5,A.eF,A.bw,A.aH,A.bl,A.bZ],x.O)
D.dC2=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dD8=w([3,4.5,5,6,9],x.n)
D.bcv=new B.aa(0,A.H,A.b7,A.J,16)
D.dDC=w([D.bcv],x.V)
D.h5d=new B.C("\ud83e\uddcd",null,T.LI,null,null,null,null,null,null,null,null,null)
D.ceG=new B.J5(5,null,null,A.bx,A.c5,null,null,null,null)
D.fuH=new B.a5(150,null,D.ceG,null)
D.fN9=new B.G(!0,A.ab,null,null,null,null,14,A.E,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h8x=new B.C("Getting the body ready...",null,D.fN9,null,null,null,null,null,null,null,null,null)
D.h5g=new B.C("Real 3D anatomy, kept on your phone",null,Ai.Bw,null,null,null,null,null,null,null,null,null)
D.dDF=w([D.h5d,A.aB,D.fuH,A.af,D.h8x,A.at,D.h5g],x.p)
D.dEe=w(["solar","turbine","crank","pot"],x.s)
D.dEJ=w([0,0.35,0.75,1],x.n)
D.dGa=w(["volts","level","ohms","on"],x.s)
D.bog=new B.u(1,0.23137254901960785,0.43529411764705883,0.8470588235294118,A.q)
D.bzm=new B.u(1,0.0392156862745098,0.10196078431372549,0.25098039215686274,A.q)
D.dGe=w([A.akE,D.bog,A.lU,D.bzm],x.O)
D.dHN=w([A.jY,A.A9,A.zV,A.rh,A.DW,A.rk,A.A7,A.mx,A.iu,A.p3,A.fM,A.eg,A.hP,A.ic,A.m1,A.kL,A.rj,A.q1,A.lA,A.Ii,A.vB,A.DB,A.Dz,A.QT,A.Ih,A.DL,A.Qw,A.arZ,H.asJ,A.kl],x.x)
D.eu5={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.hJN=new C.yX("Switch",F.p0,A.bu,0,"Tap it to turn it ON or OFF.")
D.hJJ=new C.yX("Blinker",A.mw,A.bw,0,"Turns itself ON and OFF. Tap to change the speed.")
D.hJK=new C.yX("AND",D.asN,A.cw,2,"ON only when BOTH inputs are ON.")
D.bVf=new B.a_(63671,"MaterialIcons",!1)
D.hJI=new C.yX("OR",D.bVf,A.bl,2,"ON when EITHER input is ON.")
D.hJL=new C.yX("XOR",Al.a43,A.c5,2,"ON when the inputs are DIFFERENT.")
D.hJF=new C.yX("NAND",A.tE,A.aH,2,"OFF only when BOTH inputs are ON.")
D.bUj=new B.a_(63176,"MaterialIcons",!1)
D.hJG=new C.yX("NOR",D.bUj,A.fX,2,"ON only when BOTH inputs are OFF.")
D.hJH=new C.yX("NOT",X.DO,A.cW,1,"Flips the signal: ON becomes OFF.")
D.hJM=new C.yX("Light",A6.l9,A.eF,1,"Glows when its input is ON.")
D.hJO=new C.yX("Buzzer",R.p2,A.bZ,1,"Beeps while its input is ON.")
D.AO=new B.bl(D.eu5,[D.hJN,D.hJJ,D.hJK,D.hJI,D.hJL,D.hJF,D.hJG,D.hJH,D.hJM,D.hJO],B.ar("bl<m,yX>"))
D.evU={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22,smartwatch:23}
D.Bg=new C.Kv(0,"tv")
D.fpc=new C.mi("Samsung Neo QLED 8K",D.Bg,F.yV,A.aH)
D.fp2=new C.mi("LG OLED evo G5",D.Bg,A.ex,A.hH)
D.foU=new C.mi("Sony Bravia 9",D.Bg,A.t2,A.bv)
D.foY=new C.mi("Apple TV 4K",D.Bg,A.dT,A.bO)
D.foV=new C.mi("Bang and Olufsen Beovision",D.Bg,F.Cj,F.wJ)
D.abh=new C.Kv(1,"iphone")
D.aUl=new C.mi("iPhone 18 Pro Max",D.abh,D.ama,A.cf)
D.Bi=new C.Kv(3,"fold")
D.bzA=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.fp7=new C.mi("iPhone Fold",D.Bi,D.bzA,A.b_)
D.Bh=new C.Kv(2,"android")
D.fp8=new C.mi("Samsung Galaxy S26 Ultra",D.Bh,F.Nf,A.dg)
D.brR=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.fp0=new C.mi("Samsung Galaxy Z Fold7",D.Bi,D.brR,A.cF)
D.foX=new C.mi("Google Pixel 10 Pro XL",D.Bh,A.d0,A.bj)
D.fp4=new C.mi("Xiaomi 16 Ultra",D.Bh,A.is,A.ca)
D.fp_=new C.mi("Huawei Mate 80 Pro Max",D.Bh,A.et,A.aC)
D.foW=new C.mi("OPPO Find X9 Ultra",D.Bh,A.ei,A.bf)
D.fpe=new C.mi("Honor Magic V5",D.Bi,A.dl,A.cw)
D.fp1=new C.mi("vivo X300 Pro",D.Bh,A.fW,A.cW)
D.aUm=new C.Kv(4,"tablet")
D.fp6=new C.mi("iPad Pro M5",D.aUm,A.d0,A.aH)
D.abi=new C.Kv(5,"reader")
D.fpf=new C.mi("Kindle Scribe",D.abi,A.cU,A.bv)
D.xV=new C.Kv(6,"computer")
D.fp5=new C.mi("MacBook Pro M5 Max",D.xV,A.d0,A.cf)
D.fpb=new C.mi("iMac 32 inch",D.xV,A.bO,A.cF)
D.fp3=new C.mi("Pro Display XDR 8K",D.xV,A.is,A.bd)
D.foZ=new C.mi("Sony Laser Projector",D.xV,A.cx,A.eF)
D.fp9=new C.mi("Luxury car touchscreen",D.xV,M.n8,A.aC)
D.fpd=new C.mi("Apple Vision Pro",D.xV,A.cy,A.bl)
D.fpa=new C.mi("Apple Watch Ultra",D.Bi,F.Cj,A.bw)
D.mF=new B.bl(D.evU,[D.fpc,D.fp2,D.foU,D.foY,D.foV,D.aUl,D.fp7,D.fp8,D.fp0,D.foX,D.fp4,D.fp_,D.foW,D.fpe,D.fp1,D.fp6,D.fpf,D.fp5,D.fpb,D.fp3,D.foZ,D.fp9,D.fpd,D.fpa],B.ar("bl<m,mi>"))
D.d6j=w([A.z],x.M)
D.d6O=w([A.ay,A.aD],x.M)
D.dhr=w([A.ay,A.z,A.aD],x.M)
D.dj9=w([A.ay,A.lM,A.z,A.lN,A.aD],x.M)
D.dyq=w([A.ay,A.lM,A.a5,A.a9,A.lN,A.aD],x.M)
D.dMT=new B.cX([1,D.d6j,2,D.d6O,3,D.dhr,4,A.aFu,5,D.dj9,6,D.dyq],B.ar("cX<F,ai<dg>>"))
D.ewH={Calm:0,Box:1,Sleep:2}
D.cNL=w([4,2,6,0],x.n)
D.cNS=w([4,4,4,4],x.n)
D.cNT=w([4,7,8,0],x.n)
D.Un=new B.bl(D.ewH,[D.cNL,D.cNS,D.cNT],B.ar("bl<m,ai<H>>"))
D.euh={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.yu=new C.a2d(0,"source")
D.diy=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hQv=new C.qJ("Clock",A.mw,D.yu,A.bw,D.diy)
D.hQr=new C.qJ("Button",A.DR,D.yu,A.aQ,A.Z)
D.dDl=w(["random","quick","slow"],x.s)
D.hQC=new C.qJ("Dice",A.o4,D.yu,A.c5,D.dDl)
D.bUT=new B.a_(63484,"MaterialIcons",!1)
D.G1=new C.a2d(1,"logic")
D.dIJ=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hQy=new C.qJ("Delay",D.bUT,D.G1,A.cw,D.dIJ)
D.dus=w(["fast","mid","slow"],x.s)
D.hQD=new C.qJ("Echo",A.ase,D.G1,A.bl,D.dus)
D.hQA=new C.qJ("Every 2nd",X.DO,D.G1,A.fX,A.Z)
D.bUz=new B.a_(63309,"MaterialIcons",!1)
D.hQx=new C.qJ("Every 3rd",D.bUz,D.G1,A.aH,A.Z)
D.cf0=w(["50%","25%","75%"],x.s)
D.hQF=new C.qJ("Chance",Aa.asP,D.G1,A.cW,D.cf0)
D.rR=new C.a2d(2,"out")
D.hQt=new C.qJ("Light",A6.l9,D.rR,A.eF,A.Z)
D.hQu=new C.qJ("Burst",A.kl,D.rR,A.c5,A.Z)
D.hQs=new C.qJ("Ripple",A.Ad,D.rR,A.bd,A.Z)
D.hQB=new C.qJ("Ball",A.asr,D.rR,A.cW,A.Z)
D.hQz=new C.qJ("Comet",A.p3,D.rR,A.bl,A.Z)
D.bWn=new B.a_(983669,"MaterialIcons",!1)
D.hQE=new C.qJ("Shake",D.bWn,D.rR,A.bZ,A.Z)
D.hQG=new C.qJ("Pop",A.Dx,D.rR,A.bf,A.Z)
D.hQw=new C.qJ("Wash",A.QA,D.rR,A.pG,A.Z)
D.nn=new B.bl(D.euh,[D.hQv,D.hQr,D.hQC,D.hQy,D.hQD,D.hQA,D.hQx,D.hQF,D.hQt,D.hQu,D.hQs,D.hQB,D.hQz,D.hQE,D.hQG,D.hQw],B.ar("bl<m,qJ>"))
D.euH={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bCn=new C.h3(20,4,13,!1)
D.bCO=new C.h3(14,5,13.5,!1)
D.bCF=new C.h3(9,2.4,10,!1)
D.bCT=new C.h3(7,5,12.5,!1)
D.bCI=new C.h3(8,3.5,12,!1)
D.bCj=new C.h3(15,2,6,!1)
D.bCR=new C.h3(45,6,13.5,!0)
D.bCz=new C.h3(10,8,13.5,!1)
D.bCr=new C.h3(25,3,12,!0)
D.bCx=new C.h3(35,4,12,!0)
D.bCy=new C.h3(40,4.5,9.5,!0)
D.bCA=new C.h3(55,3,9,!0)
D.bCk=new C.h3(18,3,9,!1)
D.bCQ=new C.h3(22,4,13.5,!1)
D.bCJ=new C.h3(16,5,13.5,!1)
D.bCv=new C.h3(30,4,9,!0)
D.bD1=new C.h3(5,3.5,13,!1)
D.bCD=new C.h3(25,3,13.5,!0)
D.bCM=new C.h3(14,2.5,9,!1)
D.bCC=new C.h3(6,6,13,!1)
D.bCU=new C.h3(30,1.2,5,!0)
D.bD0=new C.h3(35,3,4.5,!0)
D.bCX=new C.h3(20,4.5,7.5,!0)
D.bCB=new C.h3(55,5.5,13.5,!0)
D.bCi=new C.h3(45,5.5,13.5,!0)
D.bCN=new C.h3(40,5.5,13.5,!0)
D.bD_=new C.h3(60,6,13.5,!0)
D.amG=new C.h3(28,4,7,!0)
D.Ht=new C.h3(25,4,7,!0)
D.bCu=new C.h3(30,4,7,!0)
D.bCp=new C.h3(22,4,7,!0)
D.bCq=new C.h3(24,4,7,!0)
D.bCE=new C.h3(60,3,5.5,!0)
D.bCl=new C.h3(18,9,14,!0)
D.bCs=new C.h3(25,9,14,!0)
D.amH=new C.h3(30,8,14,!0)
D.bCo=new C.h3(20,8,14,!0)
D.bCw=new C.h3(30,9,14,!0)
D.bCV=new C.h3(22,5,9.5,!0)
D.bCm=new C.h3(30,2.5,10.5,!0)
D.bCK=new C.h3(50,5.5,13.5,!0)
D.bCZ=new C.h3(12,2,9.5,!1)
D.bCH=new C.h3(16,1.3,9.5,!0)
D.bCS=new C.h3(40,2.5,7,!0)
D.bCY=new C.h3(60,1.2,4.8,!0)
D.bCW=new C.h3(18,5,13.5,!0)
D.bCP=new C.h3(8,2,9.5,!1)
D.bCG=new C.h3(12,2.5,8,!1)
D.bCt=new C.h3(20,3.5,13.5,!0)
D.bCL=new C.h3(3.5,3,13,!1)
D.AP=new B.bl(D.euH,[D.bCn,D.bCO,D.bCF,D.bCT,D.bCI,D.bCj,D.bCR,D.bCz,D.bCr,D.bCx,D.bCy,D.bCA,D.bCk,D.bCQ,D.bCJ,D.bCv,D.bD1,D.bCD,D.bCM,D.bCC,D.bCU,D.bD0,D.bCX,D.bCB,D.bCi,D.bCN,D.bD_,D.amG,D.Ht,D.bCu,D.Ht,D.bCp,D.Ht,D.bCq,D.amG,D.Ht,D.bCE,D.bCl,D.bCs,D.amH,D.bCo,D.bCw,D.bCV,D.bCm,D.bCK,D.bCZ,D.bCH,D.bCS,D.bCY,D.Ht,D.amH,D.bCW,D.bCP,D.bCG,D.bCt,D.bCL],B.ar("bl<m,h3>"))
D.eue={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.faX=new B.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.ePU=new B.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.ePP=new B.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.f1Q=new B.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.f2O=new B.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.f1M=new B.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eNQ=new B.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.f_A=new B.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.fb4=new B.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.f3b=new B.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eTr=new B.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eNu=new B.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eSq=new B.y("Movement","They pull your legs together and help you balance.")
D.eUr=new B.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eQ2=new B.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.f8i=new B.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.f9v=new B.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.f_k=new B.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.f9d=new B.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eYO=new B.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.f3j=new B.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eNB=new B.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eUP=new B.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.f2X=new B.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.eZb=new B.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.f9m=new B.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.f1f=new B.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eNO=new B.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.f3W=new B.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.f7U=new B.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.f5R=new B.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eLO=new B.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.f0X=new B.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.f11=new B.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.eVA=new B.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eQk=new B.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.eUd=new B.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.f_O=new B.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.f6K=new B.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.fb1=new B.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.f3g=new B.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.eLt=new B.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.f0_=new B.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.eMn=new B.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.f7_=new B.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.f8e=new B.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.f0s=new B.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.f7f=new B.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eND=new B.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.f8S=new B.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eRM=new B.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.f6m=new B.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eVe=new B.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eZ5=new B.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.f3C=new B.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.f91=new B.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.f8U=new B.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.f8Y=new B.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.eZE=new B.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.f4A=new B.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.f5O=new B.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.f8E=new B.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.f0r=new B.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.eXk=new B.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eW2=new B.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.f0R=new B.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.f3v=new B.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.eXU=new B.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eYB=new B.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eSa=new B.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.f8a=new B.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eT0=new B.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.eMk=new B.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.eVz=new B.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.eMf=new B.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eQQ=new B.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.eVE=new B.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eT9=new B.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.f3S=new B.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eUu=new B.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.faI=new B.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eWc=new B.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.eZw=new B.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.f1n=new B.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eTj=new B.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eT2=new B.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dO2=new B.bl(D.eue,[D.faX,D.ePU,D.ePP,D.f1Q,D.f2O,D.f1M,D.eNQ,D.f_A,D.fb4,D.f3b,D.eTr,D.eNu,D.eSq,D.eUr,D.eQ2,D.f8i,D.f9v,D.f_k,D.f9d,D.eYO,D.f3j,D.eNB,D.eUP,D.f2X,D.eZb,D.f9m,D.f1f,D.eNO,D.f3W,D.f7U,D.f5R,D.eLO,D.f0X,D.f11,D.eVA,D.eQk,D.eUd,D.f_O,D.f6K,D.fb1,D.f3g,D.eLt,D.f0_,D.eMn,D.f7_,D.f8e,D.f0s,D.f7f,D.eND,D.f8S,D.eRM,D.f6m,D.eVe,D.eZ5,D.f3C,D.f91,D.f8U,D.f8Y,D.eZE,D.f4A,D.f5O,D.f8E,D.f0r,D.eXk,D.eW2,D.f0R,D.f3v,D.eXU,D.eYB,D.eSa,D.f8a,D.eT0,D.eMk,D.eVz,D.eMf,D.eQQ,D.eVE,D.eT9,D.f3S,D.eUu,D.faI,D.eWc,D.eZw,D.f1n,D.eTj,D.eT2],B.ar("bl<m,+(m,m)>"))
D.dWW=new C.W8(null)
D.dX8=new C.W9(null)
D.dZc=new C.Wf(null)
D.e_0=new C.WQ(null)
D.e_4=new C.WR(null)
D.e_D=new C.X_(null)
D.e3y=new C.XB(null)
D.e4v=new C.XC(null)
D.e8I=new C.XH(null)
D.eoB=new C.XI(null)
D.eoE=new C.XN(null)
D.eqO=new C.Y6(null)
D.eqP=new C.aae(null)
D.esS=new C.Yf(null)
D.ewV=new B.r(0,118)
D.ewW=new B.r(0,13)
D.ewX=new B.r(0,17)
D.ex_=new B.r(0,330)
D.ex6=new B.r(0,-17)
D.ex7=new B.r(0,-18)
D.ex8=new B.r(0,-19)
D.exa=new B.r(0,-28)
D.exc=new B.r(0,-31)
D.exd=new B.r(0,-32)
D.exj=new B.r(-9.5,-11)
D.exm=new B.r(10,20)
D.exp=new B.r(10,-13)
D.exr=new B.r(10,-22)
D.exs=new B.r(10,-4)
D.exw=new B.r(11,0)
D.aa5=new B.r(11,8)
D.exC=new B.r(12,2)
D.exD=new B.r(14,0)
D.exE=new B.r(14,12)
D.aNS=new B.r(14,8)
D.exF=new B.r(14,-17)
D.aNU=new B.r(14,-3)
D.aNV=new B.r(14,-4)
D.exI=new B.r(15,0)
D.exJ=new B.r(15,-12)
D.exM=new B.r(16,-8)
D.exN=new B.r(18,14)
D.aO0=new B.r(20,0)
D.exV=new B.r(20,15)
D.exW=new B.r(20,-3)
D.exX=new B.r(21,8)
D.exY=new B.r(21,-36)
D.ey1=new B.r(22,10)
D.aO2=new B.r(22,8)
D.ey2=new B.r(22,-25)
D.ey3=new B.r(24,0)
D.ey4=new B.r(24,2)
D.ey7=new B.r(24,-18)
D.ey8=new B.r(24,-22)
D.eyc=new B.r(25,8)
D.eyd=new B.r(26,0)
D.eyh=new B.r(28,-30)
D.eyo=new B.r(30,18)
D.eyp=new B.r(30,2)
D.eys=new B.r(31,19)
D.eyu=new B.r(32,0)
D.aO6=new B.r(34,0)
D.aO7=new B.r(34,-32)
D.Kt=new B.r(36,0)
D.eyH=new B.r(3,-1)
D.eyK=new B.r(40,3)
D.eyY=new B.r(4,11)
D.ez0=new B.r(4,-2)
D.ez4=new B.r(5,0)
D.ez5=new B.r(5,17)
D.ez6=new B.r(5,6)
D.ezb=new B.r(6,11)
D.ezd=new B.r(7,-19)
D.ezj=new B.r(8,7)
D.ezk=new B.r(8,-10)
D.ezl=new B.r(8,-14)
D.aOc=new B.r(9,0)
D.ezv=new B.r(-20.5,-17.6)
D.ezy=new B.r(-2.6,-1)
D.ezH=new B.r(2.6,1)
D.ezP=new B.r(-9,12.2)
D.eAs=new B.r(-10,12)
D.aOj=new B.r(-10,4)
D.eAw=new B.r(-11,0)
D.eAy=new B.r(-11,-34)
D.eAC=new B.r(-12,-5)
D.eAD=new B.r(-14,0)
D.eAE=new B.r(-14,13)
D.eAF=new B.r(-14,-19)
D.eAH=new B.r(-14,-23)
D.eAI=new B.r(-15,6)
D.eAL=new B.r(-16,14)
D.eAN=new B.r(-16,-8)
D.eAO=new B.r(-17,10)
D.eAP=new B.r(-17,-18)
D.eAQ=new B.r(-17,-8)
D.eAS=new B.r(-18,20)
D.eAT=new B.r(-18,-9)
D.aOm=new B.r(-20,0)
D.eAV=new B.r(-20,16)
D.eAW=new B.r(-20,-9)
D.Vj=new B.r(-22,8)
D.eAX=new B.r(-22,-10)
D.eAY=new B.r(-24,10)
D.eAZ=new B.r(-24,11)
D.eB_=new B.r(-24,14)
D.eB0=new B.r(-24,-22)
D.eB2=new B.r(-25,-11)
D.eB3=new B.r(-26,0)
D.eB4=new B.r(-26,-18)
D.eB5=new B.r(-27,-24)
D.eB6=new B.r(-28,-36)
D.eB7=new B.r(-2,9)
D.eB8=new B.r(-2,-10)
D.eB9=new B.r(-2,-20)
D.eBc=new B.r(-2,-9)
D.eBe=new B.r(-32,0)
D.aOo=new B.r(-34,0)
D.eBj=new B.r(-40,3)
D.eBl=new B.r(-4,11)
D.eBm=new B.r(-4,-17)
D.eBn=new B.r(-4,-2)
D.eBr=new B.r(-5,0)
D.eBs=new B.r(-5,20)
D.eBt=new B.r(-5,6)
D.eBu=new B.r(-6,6)
D.eBv=new B.r(-6,-42)
D.aOq=new B.r(-7,-19)
D.eBx=new B.r(-7,-24)
D.eBy=new B.r(-8,-1)
D.eBB=new B.r(-8,-9)
D.aae=new B.r(-9,0)
D.eBC=new B.r(-9,1)
D.eBE=new B.r(-9,-23)
D.fXn=new B.C("Thinking\u2026",null,O.hG,null,null,null,null,null,null,null,null,null)
D.eCE=new B.D(A.jB,D.fXn,null)
D.hdn=new B.C("Start from a ready-made board",null,A.fQ,null,null,null,null,null,null,null,null,null)
D.eCS=new B.D(A5.x4,D.hdn,null)
D.bKv=new B.R(4,0,4,14)
D.fSp=new B.G(!0,A.aF,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYo=new B.C("Games and little helpers for a spare minute.",null,D.fSp,null,null,null,null,null,null,null,null,null)
D.eD4=new B.D(D.bKv,D.fYo,null)
D.dv6=w([A.hW,A.bk],x.O)
D.eKf=new B.bT(A.z,0.5,A.x,null,0,D.dv6,null,null)
D.eKg=new B.bT(A.z,0.5,A.x,null,0,D.aFb,null,null)
D.dla=w([A.c,A.bP],x.O)
D.eKi=new B.bT(A.z,0.5,A.x,null,0,D.dla,null,null)
D.dEv=w([A.bO,A.cy],x.O)
D.aTh=new B.bT(A.z,0.5,A.x,null,0,D.dEv,null,null)
D.cXZ=w([A.c,A.bO],x.O)
D.eKn=new B.bT(A.mS,0.5,A.x,null,0,D.cXZ,null,null)
D.bzE=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.dCn=w([A.fy,D.bzE],x.O)
D.eKs=new B.bT(A.mS,0.5,A.x,null,0,D.dCn,null,null)
D.cQY=w([A.d0,A.cx],x.O)
D.eKt=new B.bT(A.z,0.5,A.x,null,0,D.cQY,null,null)
D.d53=w([A.h8,A.aQ,A.de],x.O)
D.eKw=new B.bT(A.mS,0.5,A.x,null,0,D.d53,null,null)
D.dvQ=w([A.cy,M.n8],x.O)
D.eKx=new B.bT(A.mS,0.5,A.x,null,0,D.dvQ,null,null)
D.eKC=new B.bT(A.z,0.5,A.x,null,0,D.aBn,null,null)
D.dFp=w([A.cy,A.ik],x.O)
D.eKK=new B.bT(A.z,0.5,A.x,null,0,D.dFp,null,null)
D.deR=w([A.iK,A.bk],x.O)
D.eKN=new B.bT(A.mS,0.5,A.x,null,0,D.deR,null,null)
D.aTm=new B.aP(9,9)
D.eKT=new B.aP(1.4,1.4)
D.eKV=new B.aP(2.5,2.5)
D.flJ=new B.a4(10,-8,18,-2)
D.flK=new B.a4(14,-14,20,14)
D.flM=new B.a4(20,-2,30,2)
D.flR=new B.a4(4,-13,30,-3)
D.flX=new B.a4(8,-7,12,7)
D.fm8=new B.a4(-12,12,12,19)
D.fm9=new B.a4(-12,14,12,22)
D.fma=new B.a4(-12,-22,12,8)
D.fmb=new B.a4(-12,-25,12,19)
D.fmc=new B.a4(-12,-26,12,-6)
D.fmd=new B.a4(-12,-4,12,14)
D.fmf=new B.a4(-14,20,14,24)
D.fmg=new B.a4(-14,6,14,10)
D.fmh=new B.a4(-14,-17,14,15)
D.fmi=new B.a4(-14,-26,14,18)
D.fmj=new B.a4(-14,-26,14,-14)
D.fmk=new B.a4(-14,-4,14,20)
D.fmm=new B.a4(-15,-29,15,25)
D.fmn=new B.a4(-16,-16,16,16)
D.fmq=new B.a4(-16,-22,-9,18)
D.fmr=new B.a4(-16,-24,16,-10)
D.fmt=new B.a4(-16,-2,16,20)
D.fmv=new B.a4(-18,20,18,24)
D.fmw=new B.a4(-18,-18,18,20)
D.fmx=new B.a4(-20,12,20,22)
D.fmy=new B.a4(-20,-28,20,26)
D.fmz=new B.a4(-22,15,22,19)
D.aU1=new B.a4(-22,-26,22,24)
D.fmB=new B.a4(-24,-12,10,22)
D.fmC=new B.a4(-24,-14,22,8)
D.fmD=new B.a4(-24,-6,24,20)
D.aU2=new B.a4(-24,-9,24,9)
D.fmE=new B.a4(-25,14,25,19)
D.fmF=new B.a4(-26,-14,14,8)
D.fmG=new B.a4(-26,-4,26,20)
D.fmH=new B.a4(-26,-6,4,6)
D.aU3=new B.a4(-28,-13,28,13)
D.fmI=new B.a4(-28,-16,28,16)
D.fmJ=new B.a4(-28,-16,28,8)
D.fmK=new B.a4(-28,-22,28,22)
D.fmL=new B.a4(-29,-11,29,11)
D.fmM=new B.a4(-30,-12,30,14)
D.fmN=new B.a4(-30,-14,0,14)
D.fmO=new B.a4(-30,-18,30,20)
D.fmP=new B.a4(-30,-28,30,14)
D.fmQ=new B.a4(-30,-2,30,18)
D.fmR=new B.a4(-30,-4,30,18)
D.fmS=new B.a4(-32,-17,32,17)
D.fmT=new B.a4(-32,-28,32,18)
D.fmU=new B.a4(-33,-21,33,17)
D.fmV=new B.a4(-34,0,34,10)
D.fmW=new B.a4(-34,14,34,26)
D.ab8=new B.a4(-34,-18,34,18)
D.fmX=new B.a4(-36,-24,36,20)
D.fmY=new B.a4(-38,-22,38,22)
D.fn_=new B.a4(-3,12,3,22)
D.fn0=new B.a4(-3,5,3,15)
D.fn4=new B.a4(-46,-34,46,28)
D.fn6=new B.a4(-48,-3,48,3)
D.fn9=new B.a4(-6,18,24,24)
D.fna=new B.a4(-6,5,6,12)
D.fnb=new B.a4(-6,-22,6,-15)
D.fnf=new B.a4(-9,-16,9,22)
D.fng=new B.a4(-4.5,-24,4.5,-21.2)
D.fni=new B.a4(14,-9,17.5,9)
D.ew3={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aVa=new B.de(D.ew3,5,x.Q)
D.evw={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.fqV=new B.de(D.evw,10,x.Q)
D.fth=new B.av(24,44)
D.ftF=new B.av(54,38)
D.ftL=new B.av(66,38)
D.bhb=new B.fr(2,null,null,null,null,A.bl,null,null,null,null)
D.fuP=new B.a5(16,16,D.bhb,null)
D.aWe=new B.hY(3,12,12,0.82,null)
D.fHK=new B.G(!0,A.wF,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC6=new B.eG("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cZ,null,null,null,null,null,null,D.fHK)
D.fMY=new B.G(!0,A.kY,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCc=new B.eG("AI",null,null,A.cZ,null,null,null,null,null,null,D.fMY)
D.fCu=new B.G(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fD0=new B.G(!0,A.bq,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDq=new B.G(!0,A.cw,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEi=new B.G(!0,A.c,null,null,null,null,13.5,A.E,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEP=new B.G(!0,A.aR,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frG=new B.cZ(A.i_,A.dS,6)
D.doo=w([D.frG],B.ar("N<cZ>"))
D.fFP=new B.G(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.doo,null,null,null)
D.fFU=new B.G(!0,A.eE,null,null,null,null,12.5,A.E,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFZ=new B.G(!0,A.bW,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGB=new B.G(!0,A.bW,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGJ=new B.G(!0,A.aF,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHG=new B.G(!0,A.bW,null,null,null,null,9.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHO=new B.G(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIl=new B.G(!0,A.aF,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIR=new B.G(!0,A.aQ,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIU=new B.G(!0,A.c,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.aFx,null,null,null)
D.fJ0=new B.G(!0,A.c,null,null,null,null,12.5,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJK=new B.G(!0,A.bC,null,null,null,null,10.5,A.u,null,0.5,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKU=new B.G(!0,A.v0,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLx=new B.G(!0,A.bM,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLG=new B.G(!0,A.aF,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMt=new B.G(!0,A.n9,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fME=new B.G(!0,A.cy,null,null,null,null,9.5,null,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYq=new B.G(!0,A.c,null,null,null,null,9.5,A.E,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNQ=new B.G(!0,A.iY,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fO9=new B.G(!0,A.bW,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOH=new B.G(!0,A.bf,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQe=new B.G(!0,A.v,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQL=new B.G(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fR2=new B.G(!0,A.aQ,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRq=new B.G(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRt=new B.G(!0,A.aQ,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSG=new B.G(!0,A.v0,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fT2=new B.G(!0,A.bf,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fG1=new B.G(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTr=new B.C("\u26a0\ufe0f ",null,D.fG1,null,null,null,null,null,null,null,null,null)
D.fTE=new B.C("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A3.By,null,null,null,null,null,null,null,null,null)
D.fVj=new B.C("Pick one, then change it and see what happens.",null,A3.By,null,null,null,null,null,null,null,null,null)
D.fHc=new B.G(!0,A.ab,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWk=new B.C("What do you want to invent? Type it below, or tap an idea.",null,D.fHc,null,null,null,null,null,null,null,null,null)
D.fLs=new B.G(!0,A.bZ,null,null,null,null,12.5,A.E,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWR=new B.C("Burnt out! Press Repair.",null,D.fLs,null,null,null,null,null,null,null,null,null)
D.fXZ=new B.C("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fYC=new B.C("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.hh,null,null,null,null,null,null,null,null,null)
D.fZf=new B.C("Make it yours",null,A.jp,null,null,null,null,null,null,null,null,null)
D.h1u=new B.C("5G",null,A4.aXM,null,null,null,null,null,null,null,null,null)
D.h2v=new B.C("Pick how big the screen is on the board",null,O.hG,null,null,null,null,null,null,null,null,null)
D.fOr=new B.G(!0,A.bW,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2H=new B.C("WHAT HAPPENS",null,D.fOr,null,null,null,null,null,null,null,null,null)
D.h4s=new B.C("Check",null,null,null,null,null,null,null,null,null,null,null)
D.h57=new B.C("Change the words and pictures on the three slabs.",null,A3.By,null,null,null,null,null,null,null,null,null)
D.h5k=new B.C("All the parts and wires will be removed.",null,A.hF,null,null,null,null,null,null,null,null,null)
D.h5F=new B.C("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.h6e=new B.C("Tap the crank on the board again and again to spin it faster.",null,O.hG,null,null,null,null,null,null,null,null,null)
D.h7t=new B.C("\ud83c\udfaf Challenges",null,A.dv,null,null,null,null,null,null,null,null,null)
D.h8_=new B.C("Remove this part",null,A0.aXm,null,null,null,null,null,null,null,null,null)
D.h8j=new B.C("Clear the board?",null,A.ds,null,null,null,null,null,null,null,null,null)
D.fNR=new B.G(!0,A.bw,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h8B=new B.C("How the Lab works",null,D.fNR,null,null,null,null,null,null,null,null,null)
D.fEv=new B.G(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h8W=new B.C("Electronics Lab",null,D.fEv,null,null,null,null,A.a2,null,1,null,null)
D.h9_=new B.C("?",null,S.aYW,null,null,null,null,null,null,null,null,null)
D.hal=new B.C("Ready-made circuits",null,A.dv,null,null,null,null,null,null,null,null,null)
D.hb0=new B.C("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,O.hG,null,null,null,null,null,null,null,null,null)
D.fR7=new B.G(!0,A.aQ,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hex=new B.C("\u26a0 There is no air here, so a parachute will not work.",null,D.fR7,null,null,null,null,null,null,null,null,null)
D.hfI=new B.C("Download the scene (GIF)",null,A.cJ,null,null,null,null,null,null,null,null,null)
D.hfL=new B.C("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,A0.aXk,null,null,null,null,null,null,null,null,null)
D.hgg=new B.C("NGMY",null,A.we,null,null,null,null,null,null,null,null,null)
D.hgt=new B.C("You build a machine. A little light runs along the wires, and every part it touches does something.",null,Ak.X0,null,null,null,null,null,null,null,null,null)
D.hgS=new B.C("Tap it to change its setting. Drag from the right dot to connect.",null,A.ma,null,null,null,null,null,null,null,null,null)
D.hhZ=new B.C("TOOLBOX",null,Ah.acy,null,null,null,null,null,null,null,null,null)
D.hGs=new B.bf("electronics-part-card",x.W)
D.hGu=new B.bf("device-learn-more",x.W)
D.hGA=new B.bf("device-remote",x.W)
D.hGF=new B.bf("device-picture",x.W)
D.hH9=new B.bf("electronics-part-about",x.W)
D.hHg=new B.bf("body-loading",x.W)
D.hHm=new B.bf("device-fullscreen",x.W)
D.hHJ=new B.bf("core-protocol-back",x.W)
D.hHO=new B.bf("core-protocol-title-frame",x.W)})();(function staticFields(){$.hE3=null
$.hE_=null
$.hE0=null
$.hKM=0
$.idC=B.S(x.N,B.ar("j8"))
$.iea=B.S(x.N,B.ar("j8"))
$.aQJ=B.S(x.N,B.ar("j8"))
$.hGN=A.aA})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"iLY","bIW",()=>{var u="led"
return B.a([C.aB5("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fzQ(),u),C.aB5("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fzR(),u),C.aB5("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fzS(),u),C.aB5("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fzZ(),u),C.aB5("Not both","Make the light go OFF only when both switches are ON.",2,new C.fA_(),u),C.aB5("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.fA0(),"buzzer")],B.ar("N<beH>"))})
w($,"iMp","bIX",()=>B.a([C.RJ("UNIVERSE","Earth, space and gravity",A.QW,A.aH,new C.fAg()),C.RJ("ELECTRONICS LAB","Batteries, wires, real circuits",Ar.vr,A.aH,new C.fAh()),C.RJ("DISCOVERY LAB","Body Explorer: a real 3D human",D.bTM,A.bf,new C.fAi()),C.RJ("TOOLBOX","Converter, clock, games",H.arr,A.cW,new C.fAj()),C.RJ("REACTION LAB","Wire parts together",A.DV,A.bw,new C.fAk()),C.RJ("SPARK PAINTER","Paint with light",A.Ig,A.c5,new C.fAl()),C.RJ("ROCKET LANDER","Land softly on the pad",A.p3,A.aH,new C.fAm()),C.RJ("TITLE ANIMATOR","Make a moving title",A.xv,A.bu,new C.fAn()),C.RJ("CIRCUIT LAB","Connect logic, learn it",A.a4s,A.cw,new C.fAo())],B.ar("N<bx8>")))
w($,"iOc","qS",()=>{var u,t,s=B.S(x.N,x.C)
for(u=0;u<76;++u){t=D.TF[u]
s.n(0,t.a,t)}return s})
v($,"iid","hTJ",()=>B.apL(0))
w($,"iLG","hTK",()=>{var u=B.crL()
u.sez(0,A.c.j(0.06))
u.c=2.2
u.d=A.bG
return u})
w($,"iLZ","ajY",()=>B.a([C.GJ("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fA1()),C.GJ("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fA2()),C.GJ("Spin the motor","A battery and a motor in a loop will make it spin.",new C.fA3()),C.GJ("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.fA4()),C.GJ("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fA5()),C.GJ("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fzT()),C.GJ("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fzU()),C.GJ("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fzV()),C.GJ("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fzW()),C.GJ("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fzX()),C.GJ("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fzY())],B.ar("N<beI>")))
w($,"iMr","hUd",()=>B.a([C.a2K("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aQ,A.ca,new C.fAw()),C.a2K("Focus Timer","Work, then rest","\u23f1\ufe0f",A.bZ,A.bE,new C.fAx()),C.a2K("Breathe","Calm down in a minute","\ud83e\udee7",A.fX,A.cF,new C.fAy()),C.a2K("Draw Pad","Sketch and share","\ud83c\udfa8",A.bB,A.b_,new C.fAz()),C.a2K("Memory Match","Find the pairs","\ud83c\udccf",A.aH,A.cf,new C.fAA()),C.a2K("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bu,A.bj,new C.fAB()),C.a2K("Tip & Split","Share the bill","\ud83e\uddfe",A.bf,A.b5,new C.fAC()),C.a2K("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bl,A.az,new C.fAD())],B.ar("N<bys>")))})()};
(a=>{a["5oIX/iIpOIK0P+NQO51s0KP7E+w="]=a.current})($__dart_deferred_initializers__);