((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,X,Aa,A5,N,Ab,Ac,A6,Ad,A7,U,P,Y,Ae,O,Af,Ag,Ah,Ai,A8,Aj,Ak,Al,Am,An,Z,V,Ao,Q,Ap,A_,R,S,A0,T,A1,Aq,E,I,G,L,Ar,As,At,A9,C={
bE2(d){return C.ij8(d)},
ij8(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bE2=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.rw(B.nC(""),d,A.ih,null,null).d7(0,Av.a1l),$async$bE2)
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
return B.i($async$bE2,v)},
ivf(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.Tg[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cZ(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ag(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.fg(D.Tg,new C.fT4())
if(w==null)w=A.d.gG(D.Tg)
s=B.S(x.N,x.C)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.I)(r),++u){l=r[u].a
k=l[0]
l=$.qT().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.I)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gG(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.amd(w.a,w.b,m,w,s,!1)},
ioO(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.O(D.TG,new C.fHz(),x.bd).aL(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
iDr(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cd(b2,"{")
v=A.a.pi(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.V.aP(0,A.a.aw(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aR(a5)
r=0
for(a6=x.j,a7=J.aQ(a6.a(J.t(u,"parts"))),a8=x.i;a7.C();){q=a7.gP(a7)
p=B.v(J.t(q,"kind"))
o=B.v(J.t(q,"id"))
if(!$.qT().am(0,p)||J.eD(s,o)||J.ad(t)>=8)continue
J.c8(s,o)
n=B.S(a5,a8)
for(a9=0;a9<4;++a9){m=D.dGy[a9]
l=J.t(q,m)
if(typeof l=="number")J.aL(n,m,l)}k=A.i.D(typeof J.t(q,"x")=="number"?B.dJ(J.t(q,"x")):0.2+A.i.F(r,3)*0.3,0.16,0.84)
j=A.i.D(typeof J.t(q,"y")=="number"?B.dJ(J.t(q,"y")):0.25+A.i.ao(r,3)*0.3,0.1,0.9)
J.c8(t,new B.e0([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aQ(a6.a(J.t(u,"wires")));a5.C();){h=a5.gP(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.v(J.t(g,0))
e=B.v(J.t(g,2))
d=A.o.D(A.i.M(B.dJ(J.t(g,1))),0,1)
a0=A.o.D(A.i.M(B.dJ(J.t(g,3))),0,1)
if(J.eD(s,f)&&J.eD(s,e)&&!J.z(f,e))J.c8(i,new B.b7([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.R.a(J.t(u,"steps"))
a0=J.aQ(a0==null?A.bP:a0)
while(a0.C()){a2=a0.gP(a0)
J.c8(a1,B.v(a2))}a3=a1
a0=J.t(u,"title")
a0=B.v(a0==null?"My invention":a0)
a1=J.t(u,"explain")
a4=new C.na(a0,B.v(a1==null?"":a1),t,i,A.M)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.t(u,"honest")
a5=B.v(a5==null?"":a5)
return new C.amd(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
itJ(d){var w,v,u=C.hvY()
d.B(u)
for(w=0;w<60;++w)u.vT(0,0.03333333333333333)
v=u.a
return A.d.aR(v,new C.fPp(u))&&!A.d.cw(v,new C.fPq())},
itI(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.S(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.I)(l),++u){t=l[u];++v
k.n(0,t.a,$.qT().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.I)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.v(t.e)+" V")
if(p==="resistor")q.push(""+A.i.S(t.r)+" ohms")
if(A.d.q(D.dEB,p))q.push("level "+A.i.S(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.i.S(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aL(q,", ")+")"
s.push(B.v(p)+n+": "+o+", current "+A.i.a5(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.I)(w),++u){m=w[u]
l.push(B.v(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.v(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aL(s,"\n")+"\nWires: "+A.d.aL(l,"; ")},
ihD(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.I)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aL(v,"\n")+"\n\n"}v=A.d.aL(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
ive(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qT().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.TG[u]
if(A.d.aR(w,new C.fT1(s)))if(!B.cZ(r,s.b.toLowerCase(),0))v=B.cZ(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ag("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.X(w,new C.fT2(e),B.U(w).k("X<1>")).gar(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ag("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.i.a5(A.d.cF(w,0,new C.fT3())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ag("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gG(w)
w=$.qT().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
amd:function amd(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fT4:function fT4(){},
fHz:function fHz(){},
fPp:function fPp(d){this.a=d},
fPq:function fPq(){},
fT1:function fT1(d){this.a=d},
fT2:function fT2(d){this.a=d},
fT3:function fT3(){},
Xn:function Xn(d,e){this.c=d
this.a=e},
boj:function boj(d,e,f,g,h){var _=this
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
eoq:function eoq(d){this.a=d},
eor:function eor(d,e,f){this.a=d
this.b=e
this.c=f},
eos:function eos(d){this.a=d},
eoD:function eoD(d){this.a=d},
eoE:function eoE(d,e){this.a=d
this.b=e},
eoz:function eoz(d){this.a=d},
eox:function eox(d,e){this.a=d
this.b=e},
eoy:function eoy(d,e,f){this.a=d
this.b=e
this.c=f},
eoA:function eoA(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eov:function eov(d){this.a=d},
eow:function eow(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eoB:function eoB(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eou:function eou(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eoC:function eoC(d,e){this.a=d
this.b=e},
eot:function eot(d,e){this.a=d
this.b=e},
eoH:function eoH(d){this.a=d},
eoG:function eoG(d){this.a=d},
eoI:function eoI(d){this.a=d},
eoF:function eoF(d){this.a=d},
eoJ:function eoJ(d,e){this.a=d
this.b=e},
eoK:function eoK(d,e){this.a=d
this.b=e},
eoL:function eoL(d,e){this.a=d
this.b=e},
eoM:function eoM(d,e){this.a=d
this.b=e},
bEo(d,e,f){var w=null
return B.x(B.a([B.c(d,w,w,w,w,w,w,D.fKf,w,w,w),B.c(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p)},
hKi(d,e,f,g){var w=null,v=B.m(24),u=B.K(f.j(0.6),A.r,1)
return B.at(B.p(w,B.x(B.a([B.c(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.aj,B.c(e,w,w,w,w,w,w,A.BA,A.K,w,w),A.aB,B.c_(A.fV,g,A.br,w,0,8)],x.p),A.l,w,A.e,A.P,0,A.p),A.f,w,w,new B.o(D.bkm,w,u,v,w,w,A.m),w,w,w,w,A.ae,w,w,w),w,w,w)},
Hd:function Hd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vH:function vH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XK:function XK(d){this.a=d},
aHp:function aHp(d,e,f,g,h,i,j,k,l,m){var _=this
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
eDP:function eDP(){},
eE8:function eE8(d){this.a=d},
eE7:function eE7(d,e){this.a=d
this.b=e},
eE9:function eE9(){},
eEa:function eEa(){},
eDR:function eDR(d,e,f){this.a=d
this.b=e
this.c=f},
eDQ:function eDQ(d,e){this.a=d
this.b=e},
eDG:function eDG(d){this.a=d},
eDH:function eDH(d){this.a=d},
eDI:function eDI(d){this.a=d},
eDJ:function eDJ(d){this.a=d},
eDK:function eDK(d){this.a=d},
eDL:function eDL(d){this.a=d},
eDM:function eDM(d){this.a=d},
eDN:function eDN(d){this.a=d},
eDO:function eDO(d){this.a=d},
eDE:function eDE(d){this.a=d},
eDF:function eDF(d){this.a=d},
eDD:function eDD(d){this.a=d},
eE1:function eE1(d,e){this.a=d
this.b=e},
eDX:function eDX(d){this.a=d},
eDY:function eDY(d){this.a=d},
eDU:function eDU(d){this.a=d},
eDZ:function eDZ(d){this.a=d},
eDT:function eDT(d){this.a=d},
eE_:function eE_(d){this.a=d},
eE0:function eE0(d){this.a=d},
eDS:function eDS(d){this.a=d},
eE2:function eE2(d,e){this.a=d
this.b=e},
eDW:function eDW(d,e){this.a=d
this.b=e},
eE3:function eE3(d){this.a=d},
eE4:function eE4(d){this.a=d},
eE5:function eE5(d){this.a=d},
eE6:function eE6(d){this.a=d},
eDV:function eDV(d){this.a=d},
blb:function blb(d,e){this.b=d
this.a=e},
aPr:function aPr(){},
bC0:function bC0(){},
hF5(){var w=$.hF3
return w==null?$.hF3=$.oO().cZG("assets/data/three.min.js"):w},
hF4(){var w=$.hF2
return w==null?$.hF2=C.cRW():w},
cRW(){var w=0,v=B.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cRW=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.oO().iu(0,"assets/data/body3d.bin"),$async$cRW)
case 3:d=a1
$.hF6=J.eA(A.dM.gaS(d),d.byteOffset,d.byteLength)
t=B.TM(d)
s=t.getUint32(4,!0)
r=B.a([],x.h)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.jY(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.drK[i]
g=B.b1((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a5f(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b7d))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.be3(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cRW,v)},
c90(){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$c90=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.hc(B.a([C.hF4(),C.hF5()],x.D),x.K),$async$c90)
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
return B.i($async$c90,v)},
aVH:function aVH(d,e,f){this.a=d
this.b=e
this.c=f},
a5f:function a5f(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
be3:function be3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Wb:function Wb(d){this.a=d},
aFQ:function aFQ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
dTn:function dTn(d){this.a=d},
dTm:function dTm(d,e){this.a=d
this.b=e},
dSY:function dSY(d){this.a=d},
dSZ:function dSZ(d,e){this.a=d
this.b=e},
dT_:function dT_(d){this.a=d},
dT0:function dT0(){},
dTo:function dTo(){},
dT1:function dT1(d,e){this.a=d
this.b=e},
dT2:function dT2(d){this.a=d},
dT3:function dT3(){},
dT4:function dT4(d){this.a=d},
dT6:function dT6(d,e){this.a=d
this.b=e},
dT5:function dT5(d){this.a=d},
dSV:function dSV(d,e,f){this.a=d
this.b=e
this.c=f},
dSW:function dSW(d){this.a=d},
dSX:function dSX(d){this.a=d},
dTd:function dTd(d){this.a=d},
dTe:function dTe(d,e){this.a=d
this.b=e},
dTf:function dTf(d,e){this.a=d
this.b=e},
dTg:function dTg(d){this.a=d},
dTc:function dTc(d,e){this.a=d
this.b=e},
dTh:function dTh(d,e){this.a=d
this.b=e},
dTb:function dTb(d,e){this.a=d
this.b=e},
dTi:function dTi(d){this.a=d},
dTa:function dTa(d){this.a=d},
dTj:function dTj(d){this.a=d},
dT9:function dT9(d){this.a=d},
dTk:function dTk(d){this.a=d},
dT8:function dT8(d){this.a=d},
dTl:function dTl(d){this.a=d},
dT7:function dT7(d){this.a=d},
aOw:function aOw(){},
aOx:function aOx(){},
c91:function c91(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c92:function c92(d,e){this.a=d
this.b=e},
c93:function c93(d){this.a=d},
aBa(d,e,f,g,h){return new C.beR(d,e,f,g,h)},
hlJ(d,e,f,g,h,i){return $.ieQ.c_(0,d+"|"+B.v(e)+"|"+f.m()+"|"+B.v(g),new C.cZ4(d,e,f,i,g,h))},
yW:function yW(d,e,f,g,h){var _=this
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
o_:function o_(d,e,f){this.a=d
this.b=e
this.c=f},
beR:function beR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fAB:function fAB(){},
fAC:function fAC(){},
fAD:function fAD(){},
fAK:function fAK(){},
fAL:function fAL(){},
fAM:function fAM(){},
Wi:function Wi(d){this.a=d},
aFS:function aFS(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
dV3:function dV3(d){this.a=d},
dUI:function dUI(d,e){this.a=d
this.b=e},
dUL:function dUL(){},
dV4:function dV4(){},
dUG:function dUG(d,e){this.a=d
this.b=e},
dUH:function dUH(d,e){this.a=d
this.b=e},
dUM:function dUM(d,e,f){this.a=d
this.b=e
this.c=f},
dUB:function dUB(){},
dUC:function dUC(){},
dUD:function dUD(d){this.a=d},
dUE:function dUE(d,e){this.a=d
this.b=e},
dUF:function dUF(d,e,f){this.a=d
this.b=e
this.c=f},
dUN:function dUN(){},
dUO:function dUO(d,e){this.a=d
this.b=e},
dUP:function dUP(d){this.a=d},
dUK:function dUK(d,e){this.a=d
this.b=e},
dUJ:function dUJ(d){this.a=d},
dUA:function dUA(d,e,f){this.a=d
this.b=e
this.c=f},
dUY:function dUY(d){this.a=d},
dUX:function dUX(d){this.a=d},
dUZ:function dUZ(d){this.a=d},
dUW:function dUW(d){this.a=d},
dUU:function dUU(d){this.a=d},
dUV:function dUV(d){this.a=d},
dUT:function dUT(d){this.a=d},
dUQ:function dUQ(d){this.a=d},
dUS:function dUS(d){this.a=d},
dV_:function dV_(d,e){this.a=d
this.b=e},
dV0:function dV0(d,e){this.a=d
this.b=e},
dV1:function dV1(d){this.a=d},
dUR:function dUR(d){this.a=d},
dV2:function dV2(d,e){this.a=d
this.b=e},
bf8:function bf8(d,e){this.b=d
this.a=e},
cZ4:function cZ4(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aOB:function aOB(){},
bBL:function bBL(){},
i5o(){return new C.OF(null)},
RL(d,e,f,g,h){return new C.bxi(d,e,f,g,h)},
bvC(d,e,f){return A.i.D((d-e)/(f-e),0,1)},
hmg(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
ixf(){return B.iH("construction","")},
OF:function OF(d){this.a=d},
Lw:function Lw(d,e){this.a=d
this.b=e},
Bi:function Bi(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aG8:function aG8(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
e0d:function e0d(d,e){this.a=d
this.b=e},
e0c:function e0c(d){this.a=d},
e0f:function e0f(d,e){this.a=d
this.b=e},
e0e:function e0e(d){this.a=d},
bxi:function bxi(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fB1:function fB1(){},
fB2:function fB2(){},
fB3:function fB3(){},
fB4:function fB4(){},
fB5:function fB5(){},
fB6:function fB6(){},
fB7:function fB7(){},
fB8:function fB8(){},
fB9:function fB9(){},
bvD:function bvD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fgg:function fgg(d){this.a=d},
fgf:function fgf(d,e){this.a=d
this.b=e},
fgd:function fgd(d){this.a=d},
fgh:function fgh(d){this.a=d},
fge:function fge(d,e){this.a=d
this.b=e},
ah2:function ah2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
afS:function afS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
RE:function RE(d,e,f,g,h,i,j,k,l,m){var _=this
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
bwG:function bwG(d,e){this.b=d
this.a=e},
bwa:function bwa(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdM:function bdM(d,e){this.b=d
this.a=e},
aKt:function aKt(d,e){this.c=d
this.a=e},
aKu:function aKu(d,e,f){var _=this
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
ffX:function ffX(d){this.a=d},
ffW:function ffW(d){this.a=d},
ffM:function ffM(d){this.a=d},
ffN:function ffN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ffO:function ffO(d){this.a=d},
ffL:function ffL(d,e){this.a=d
this.b=e},
ffP:function ffP(d){this.a=d},
ffV:function ffV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ffU:function ffU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ffS:function ffS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ffR:function ffR(d,e,f){this.a=d
this.b=e
this.c=f},
ffT:function ffT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ffQ:function ffQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fg4:function fg4(d){this.a=d},
fg3:function fg3(d){this.a=d},
fg5:function fg5(d,e){this.a=d
this.b=e},
fg6:function fg6(d,e){this.a=d
this.b=e},
fg7:function fg7(d,e){this.a=d
this.b=e},
fg2:function fg2(d,e,f){this.a=d
this.b=e
this.c=f},
fg8:function fg8(d,e,f){this.a=d
this.b=e
this.c=f},
fg1:function fg1(d){this.a=d},
ffY:function ffY(d){this.a=d},
fg9:function fg9(d){this.a=d},
fga:function fga(d){this.a=d},
fg0:function fg0(d,e){this.a=d
this.b=e},
fgb:function fgb(d,e){this.a=d
this.b=e},
fg_:function fg_(d,e){this.a=d
this.b=e},
fgc:function fgc(d,e){this.a=d
this.b=e},
ffZ:function ffZ(d,e){this.a=d
this.b=e},
ffJ:function ffJ(){},
ffK:function ffK(){},
bve:function bve(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
buE:function buE(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bes:function bes(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
buG:function buG(d,e,f){this.b=d
this.c=e
this.a=f},
byM:function byM(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aQh:function aQh(){},
hLU(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a7(0,new B.r(w,0)),u=e.aI(0,new B.r(w,0)),t=1-f,s=3*t
return d.aO(0,t*t*t).a7(0,v.aO(0,s*t*f)).a7(0,u.aO(0,s*f*f)).a7(0,e.aO(0,f*f*f))},
bla(d,e,f,g,h,i){return $.ifo.c_(0,d+"|"+B.v(e)+"|"+f.m()+"|"+B.v(g),new C.duw(d,e,f,i,g,h))},
a2i:function a2i(d,e){this.a=d
this.b=e},
qK:function qK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
rr:function rr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Dn:function Dn(d,e){this.a=d
this.b=e},
a0g:function a0g(d,e){this.a=d
this.b=e},
agR:function agR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2v:function a2v(d,e,f,g,h,i){var _=this
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
adH:function adH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adZ:function adZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
afW:function afW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bl8:function bl8(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
duA:function duA(d){this.a=d},
duB:function duB(d){this.a=d},
dux:function dux(d,e){this.a=d
this.b=e},
duy:function duy(d){this.a=d},
duz:function duz(d){this.a=d},
duC:function duC(d){this.a=d},
duD:function duD(d){this.a=d},
duE:function duE(d){this.a=d},
duF:function duF(d){this.a=d},
duG:function duG(d){this.a=d},
duH:function duH(d){this.a=d},
duI:function duI(d){this.a=d},
duJ:function duJ(d){this.a=d},
duK:function duK(d){this.a=d},
GZ:function GZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XJ:function XJ(d){this.a=d},
aHo:function aHo(d,e,f,g,h,i,j){var _=this
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
eD9:function eD9(d){this.a=d},
eCZ:function eCZ(d){this.a=d},
eD0:function eD0(){},
eD1:function eD1(){},
eD4:function eD4(){},
eD5:function eD5(d,e,f){this.a=d
this.b=e
this.c=f},
eD6:function eD6(d){this.a=d},
eD7:function eD7(d){this.a=d},
eD2:function eD2(){},
eD3:function eD3(d){this.a=d},
eDz:function eDz(d){this.a=d},
eD8:function eD8(){},
eCV:function eCV(d){this.a=d},
eDb:function eDb(d){this.a=d},
eDa:function eDa(d){this.a=d},
eDd:function eDd(){},
eDc:function eDc(d,e){this.a=d
this.b=e},
eCY:function eCY(){},
eCW:function eCW(d){this.a=d},
eCX:function eCX(d){this.a=d},
eDx:function eDx(d){this.a=d},
eDw:function eDw(d){this.a=d},
eDy:function eDy(d){this.a=d},
eDn:function eDn(d,e){this.a=d
this.b=e},
eDv:function eDv(d){this.a=d},
eDt:function eDt(d){this.a=d},
eDu:function eDu(d){this.a=d},
eDs:function eDs(d){this.a=d},
eDr:function eDr(d){this.a=d},
eDo:function eDo(d){this.a=d},
eDp:function eDp(d){this.a=d},
eDq:function eDq(d){this.a=d},
eD_:function eD_(){},
eDj:function eDj(d){this.a=d},
eDk:function eDk(d){this.a=d},
eDi:function eDi(d){this.a=d},
eDl:function eDl(d){this.a=d},
eDh:function eDh(d){this.a=d},
eDm:function eDm(d){this.a=d},
eDg:function eDg(d){this.a=d},
eDf:function eDf(d){this.a=d},
eDe:function eDe(d,e){this.a=d
this.b=e},
bl9:function bl9(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
duw:function duw(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aPp:function aPp(){},
hRO(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aI(0,e).gcL()*0.1
return new B.r((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
hvY(){var w=B.a([],x.bz),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a6n(w,v,u,A.cV,B.S(x.N,x.y))},
hZZ(d,e,f){var w=d.c,v=e===0?-1:1
return new B.r(w*f.a+v*C.hvZ(d),d.d*f.b)},
hvZ(d){return 42+(D.mF.am(0,d.b)?(d.ch-1)*38:0)},
ijq(d){var w,v,u,t,s
if(d.A(0,$.hHQ))return $.hUV()
w=B.a([],x.n)
for(v=d.a,u=d.b,t=12;t<v;t+=24)for(s=12;s<u;s+=24){w.push(t)
w.push(s)}$.hHQ=d
return $.ijr=new Float32Array(B.cd(w))},
es:function es(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
u9:function u9(d,e,f,g){var _=this
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
ack:function ack(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
adt:function adt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a6n:function a6n(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bSh:function bSh(){},
bSs:function bSs(d){this.a=d},
bSn:function bSn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSt:function bSt(d){this.a=d},
bSu:function bSu(d){this.a=d},
bSw:function bSw(d){this.a=d},
bSx:function bSx(d){this.a=d},
bSv:function bSv(d){this.a=d},
bSy:function bSy(d,e,f){this.a=d
this.b=e
this.c=f},
bSz:function bSz(d){this.a=d},
bSj:function bSj(d){this.a=d},
bSk:function bSk(d){this.a=d},
bSi:function bSi(d){this.a=d},
bSl:function bSl(d,e,f){this.a=d
this.b=e
this.c=f},
bSm:function bSm(d){this.a=d},
bSg:function bSg(d){this.a=d},
bSA:function bSA(d,e){this.a=d
this.b=e},
bSo:function bSo(d,e){this.a=d
this.b=e},
bSr:function bSr(d){this.a=d},
bSq:function bSq(d){this.a=d},
bSp:function bSp(d){this.a=d},
al0:function al0(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bMC:function bMC(){},
bMD:function bMD(){},
bMB:function bMB(){},
na:function na(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cwC:function cwC(d){this.a=d},
iDm(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new C.h55(),c9=new C.h57(),d0=new C.h58(),d1=new C.h56(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aq(w,d1.$3(new B.a5(w.a,w.b,w.c,w.d),A.cm,A.bQ))
d3.ah(D.eEp,D.eBo,c9.$2(A.dY,1.4))
d3.ah(D.eB3,D.eB1,c9.$2(A.bB,2.4))
d3.ah(D.eB4,V.aNT,c9.$2(A.bB,2.4))
if(c7){d2=c8.$1(A.fC.j(0.5))
d2.y=A.HY
d3.O(D.eAK,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.i.F(d2+v/3,1)
d6.$5(d3,"\u2744",new B.r(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aq(d0.$4(-22,-26,44,50),d1.$3(D.aU4,A.aS,A.cD))
d3.O(A.cN,16,c8.$1(A.bB))
d3.O(A.cN,13,c8.$1(c7?A.aH.j(0.85):A.a_))
if(c7){d2=d3.c
J.bs(d2.save())
d2.translate(0,4)
d3.js(0,d4.y*0.6)
for(v=0;v<3;++v){t=v*2.09
d3.ah(A.J,new B.r(Math.cos(t)*11,Math.sin(t)*11),c9.$2(A.ab,3))}d2.restore()
for(d2=d5*0.8,v=0;v<4;++v){u=A.i.F(d2+v*0.25,1)
d3.O(new B.r(Math.sin(v*2+d5)*9,4-u*12),1.6+u*2,c8.$1(A.c.j(0.8*(1-u))))}}d3.O(D.eEh,2.4,c8.$1(c7?A.bj:A.an))
d3.O(D.aOt,2.4,c8.$1(A.an))
return!0
case"blender":d3.aq(d0.$5(-14,14,28,12,4),c8.$1(A.cU))
d2=$.T().r
t=x.v
s=new B.aH(d2,A.ak,c6,c6,B.a([],t))
s.E(new B.aZ(-16,-26))
s.E(new B.aq(16,-26))
s.E(new B.aq(12,14))
s.E(new B.aq(-12,14))
s.E(new B.bA())
d3.af(s,c8.$1(A.fC.j(0.35)))
if(c7){d2=new B.aH(d2,A.ak,c6,c6,B.a([],t))
d2.E(new B.aZ(-14,-10))
d2.E(new B.aq(14,-10))
d2.E(new B.aq(12,14))
d2.E(new B.aq(-12,14))
d2.E(new B.bA())
d3.af(d2,c8.$1(A.aC.j(0.7)))}d3.af(s,c9.$2(A.ab,1.6))
d2=d3.c
J.bs(d2.save())
d2.translate(0,10)
d3.js(0,d4.y)
d3.ah(D.aah,D.aOf,c9.$2(A.bO,3))
d2.restore()
if(c7)for(d2=d5*9,t=d5*1.6,v=0;v<3;++v)d3.O(new B.r(Math.sin(d2+v*2)*9,-10-A.i.F(t+v*0.33,1)*12),2.4,c8.$1(A.f1))
return!0
case"drone":d3.aq(d0.$5(-10,-4,20,10,4),c8.$1(A.aM))
d3.O(A.hE,3,c8.$1(c7?A.bj:A.an))
r=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.c,t=-4+r,q=-6+r,p=0;p<2;++p){o=F.TT[p]
d3.ah(new B.r(o*0.4,1),new B.r(o,t),c9.$2(A.bB,3))
J.bs(d2.save())
d2.translate(o,q)
d3.ah(D.eE8,D.eB8,c9.$2(A.c.j(c7?0.35:0.9),3))
if(c7)d3.c1(B.bZ(A.J,6,24+Math.sin(d4.y*3)*4),c8.$1(A.c.j(0.25)))
d2.restore()}return!0
case"drill":w=new B.aH($.T().r,A.ak,c6,c6,B.a([],x.v))
w.E(new B.aZ(-24,-12))
w.E(new B.aq(10,-12))
w.E(new B.aq(10,2))
w.E(new B.aq(-2,2))
w.E(new B.aq(-6,22))
w.E(new B.aq(-16,22))
w.E(new B.aq(-14,2))
w.E(new B.aq(-24,2))
w.E(new B.bA())
d3.af(w,d1.$3(D.fqe,A.aQ,A.de))
d3.aE(D.fpm,c8.$1(A.d0))
d2=d3.c
J.bs(d2.save())
d2.translate(18,-5)
d3.js(0,d4.y*2)
d3.ah(A.J,D.eBf,c9.$2(A.bO,2.4))
d3.ah(A.aad,D.eBe,c9.$2(A.i0,1))
d2.restore()
if(c7)for(d2=d5*3,t=d5*20,v=0;v<4;++v){u=A.i.F(d2+v*0.25,1)
d3.O(new B.r(34+u*6,-5+Math.sin(v*3+t)*6*u),1.4,c8.$1(A.eG.j(1-u)))}return!0
case"torch":if(c7){v=A.i.D(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new B.aH($.T().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(16,-6))
d2.E(new B.aq(52,-26))
d2.E(new B.aq(52,18))
d2.E(new B.aq(16,4))
d2.E(new B.bA())
d3.af(d2,c8.$1(A.bM.j(0.35*v)))}d3.aq(d0.$5(-26,-6,30,12,3),d1.$3(D.fqk,A.bk,A.cx))
n=new B.aH($.T().r,A.ak,c6,c6,B.a([],x.v))
n.E(new B.aZ(4,-6))
n.E(new B.aq(18,-12))
n.E(new B.aq(18,12))
n.E(new B.aq(4,6))
n.E(new B.bA())
d3.af(n,c8.$1(A.cU))
d3.O(D.eBk,7,c8.$1(c7?A.c:A.d0))
return!0
case"neon":d3.aq(d0.$5(-30,-14,60,28,6),c8.$1(M.n8))
if(c7)m=d4.ax>0.5||A.o.F(A.i.bc(d5*17),3)!==0
else m=!1
l=m?A.c5:D.bv5
if(m){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.c5.j(0.35))
t.y=A.nh
d3.aq(d2,t)}d3.aq(d0.$5(-27,-11,54,22,5),c9.$2(l,2.2))
d6.$5(d3,"OPEN",D.eEv,l,17)
return!0
case"microwave":d3.aq(d0.$4(-30,-18,60,38),d1.$3(D.fqr,A.bO,A.bk))
d2=d0.$5(-26,-14,38,30,3)
d3.aq(d2,c8.$1(c7?A.bM.j(0.75):A.aw))
if(c7){d2=d3.c
J.bs(d2.save())
d2.translate(-7,8)
d3.js(0,d4.y*0.5)
d3.c1(B.bZ(A.J,7,22),c8.$1(A.de))
d2.restore()}d3.aq(d0.$5(15,-14,12,12,2),c8.$1(M.n8))
if(c7)d6.$5(d3,"0:"+A.a.aZ(A.o.v(59-A.o.F(A.i.bc(d5),60)),2,"0"),D.eBl,A.bf,6.5)
d3.O(D.eBz,4,c8.$1(A.d0))
return!0
case"doorbell":d3.aq(d0.$5(-16,-26,32,52,8),c8.$1(A.bn))
d3.O(A.Ku,10,c8.$1(c7?A.bu:A.bB))
d2=d3.c
J.bs(d2.save())
d2.translate(0,-8)
d3.js(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.eFd,A.c,16)
d2.restore()
d3.O(A.kQ,6,c8.$1(A.dg))
d3.O(A.kQ,6,c9.$2(A.c,1.6))
if(c7)for(d2=d5*14,v=1;v<=2;++v)d3.cQ(B.bY(A.Ku,14+v*6+A.i.F(d2,6)),-0.9,1.8,!1,c9.$2(A.bu.j(0.9-v*0.3),1.8))
return!0
case"camera":d3.ah(D.eEu,D.eF6,c9.$2(A.bB,4))
d2=d3.c
J.bs(d2.save())
d3.js(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aq(d0.$5(-24,-14,46,22,5),d1.$3(D.fqf,A.bO,A.an))
d3.O(D.aNX,8,c8.$1(A.aw))
d3.O(D.aNX,4.5,c8.$1(c7?A.aH:A.cx))
d3.O(D.eEs,2.2,c8.$1(c7&&A.o.F(A.i.bc(d5*1.6),2)===0?A.aC:A.kH))
d2.restore()
if(c7)d6.$5(d3,"REC",D.eEC,A.aC,9)
return!0
case"console":d3.aq(d0.$5(-28,-22,56,44,8),d1.$3(D.fqn,A.is,A.fy))
d3.aq(d0.$5(-20,-17,40,22,3),c8.$1(A.dX))
if(c7){d2=d5*2.3
d3.O(new B.r(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aE(new B.a5(-18,t,-15.6,t+8),c8.$1(A.bf))
d2=-9+Math.sin(d2-0.4)*6
d3.aE(new B.a5(15.6,d2,18,d2+8),c8.$1(A.c5))}d3.O(D.eEn,4,c8.$1(A.b6))
d3.O(D.eBg,2.4,c8.$1(A.aC))
d3.O(D.eBx,2.4,c8.$1(A.bj))
return!0
case"heartmon":d3.aq(d0.$5(-30,-22,60,44,6),c8.$1(A.aw))
d3.aq(d0.$5(-26,-18,52,28,3),c8.$1(A.dX))
if(c7){d2=$.T()
t=B.a([],x.v)
k=new B.aH(d2.r,A.ak,c6,c6,t)
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
d6.$5(d3,"72",D.eBh,A.hI,11)
d2=d5*9
d6.$5(d3,"\u2665",D.eEH,A.hI.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.O(D.eEx,3,c8.$1(c7?A.bj:A.bB))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aq(d2,c8.$1(A.cG.j(c7?0.5:0.3)))
d3.aq(d0.$5(-26,-20,52,40,4),c9.$2(A.ab,1.6))
d3.aE(D.fqh,c8.$1(F.wK))
if(c7){d2=d5*1.1
t=Math.sin(d2)
q=d3.c
J.bs(q.save())
q.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.nK(0,-1,1)
d3.c1(B.bZ(A.J,8,14),c8.$1(A.cW))
d2=new B.aH($.T().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-6,0))
d2.E(new B.aq(-12,-4))
d2.E(new B.aq(-12,4))
d2.E(new B.bA())
d3.af(d2,c8.$1(A.ca))
d3.O(D.eCj,1.2,c8.$1(A.v))
q.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=A.i.F(d2+v*0.2,1)
d3.O(new B.r(-18+Math.sin(u*8+v)*2,13-u*30),1.4+A.o.F(v,2),c9.$2(A.ab,1))}}return!0
case"lighthouse":d2=$.T().r
t=x.v
g=new B.aH(d2,A.ak,c6,c6,B.a([],t))
g.E(new B.aZ(-9,22))
g.E(new B.aq(-5,-16))
g.E(new B.aq(5,-16))
g.E(new B.aq(9,22))
g.E(new B.bA())
d3.af(g,d1.$3(D.fqT,A.c,A.bE))
d3.aE(D.fqP,c8.$1(c7?A.eG:A.bB))
q=new B.aH(d2,A.ak,c6,c6,B.a([],t))
q.E(new B.aZ(-7,-22))
q.E(new B.aq(0,-29))
q.E(new B.aq(7,-22))
q.E(new B.bA())
d3.af(q,c8.$1(A.ey))
if(c7){f=Math.sin(d4.y*0.3)
d2=new B.aH(d2,A.ak,c6,c6,B.a([],t))
d2.E(new B.aZ(0,-19))
t=f*34
d2.E(new B.aq(t,-26))
d2.E(new B.aq(t,-12))
d2.E(new B.bA())
d3.af(d2,c8.$1(A.eG.j(0.45)))
d2=c8.$1(A.eG.j(0.35))
d2.y=A.HY
d3.O(D.eAL,14,d2)}return!0
case"discoball":d3.ah(D.eAN,W.aNO,c9.$2(A.d0,1.4))
d3.O(A.J,16,d1.$3(D.fq0,A.aS,A.an))
for(v=0;v<8;++v){d2=-12+v*3.4
d3.ah(new B.r(-16,d2),new B.r(16,d2),c9.$2(A.dJ,0.7))}for(v=0;v<5;++v){f=d4.y*0.5+v*1.26
d3.ah(new B.r(Math.cos(f)*16*0.3,Math.sin(f)*16*0.3),new B.r(Math.cos(f)*16,0),c9.$2(A.dJ,0.7))}if(c7)for(d2=d5*2,t=d5*9,v=0;v<10;++v){f=d2+v*0.63
e=22+A.o.F(v,3)*6
d3.O(new B.r(Math.cos(f)*e,Math.sin(f)*e*0.8),1.8,c8.$1(D.dsP[A.o.F(v,4)].j(0.5+0.5*Math.sin(t+v))))}return!0
case"robot":d3.aq(d0.$5(-14,-4,28,24,5),d1.$3(D.fpY,A.cD,A.an))
d3.aq(d0.$5(-12,-26,24,20,5),d1.$3(D.fpQ,A.bn,A.bQ))
d3.ah(H.aNQ,D.eAP,c9.$2(A.bB,1.6))
d3.O(D.eAQ,2.2,c8.$1(c7?A.aC:A.bB))
d=c7&&A.i.F(d5*0.8,1)>0.08
for(p=0;p<2;++p){o=F.a7F[p]
if(c7)d2=d?A.bd:A.fv
else d2=A.cx
d3.O(new B.r(o,-17),3.2,c8.$1(d2))}d2=d3.c
J.bs(d2.save())
d2.translate(14,0)
d3.js(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.ah(A.J,D.aa8,c9.$2(A.bQ,4))
d2.restore()
d3.ah(D.eEf,D.eEA,c9.$2(A.bQ,4))
d3.aE(D.fqO,c8.$1(c7?A.bd.j(0.7):A.aM))
return!0
case"toaster":a0=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a0*14,p=0;p<2;++p){t=d0.$5(D.aEz[p]+1,d2,10,14,2)
q=B.ap(A.bM,A.de,a0)
q.toString
d3.aq(t,c8.$1(q))}d3.aq(d0.$5(-24,-6,48,26,8),d1.$3(D.fqg,A.bO,A.bk))
for(p=0;p<2;++p){o=D.aEz[p]
d2=d0.$5(o,-5,12,5,2)
d3.aq(d2,c8.$1(c7?A.fK:A.aw))
if(c7){d2=d0.$5(o,-5,12,5,2)
t=c8.$1(A.cW.j(0.5))
t.y=O.oT
d3.aq(d2,t)}}d3.ah(D.eBH,D.eC1,c9.$2(A.aw,3))
return!0
case"ledstrip":d3.aq(d0.$5(-34,-4,68,10,4),c8.$1(A.cx))
for(d2=d5*90,v=0;v<9;++v){a1=A.i.F(d2+v*40,360)
l=c7?new Ay.pD(1,a1,0.8,1).je():A.cU
if(c7){t=c8.$1(l.j(0.45))
t.y=O.oT
d3.O(new B.r(-30+v*7.5,1),7,t)}d3.O(new B.r(-30+v*7.5,1),2.6,c8.$1(l))}d3.aq(d0.$5(-40,-2,6,6,1),c8.$1(A.d0))
return!0
case"pump":d3.aq(d0.$5(-16,-2,32,22,6),d1.$3(D.fq6,A.cG,A.GN))
d3.O(D.eEK,8,c8.$1(A.tf))
d2=d3.c
J.bs(d2.save())
d2.translate(-2,9)
d3.js(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
d3.ah(A.J,new B.r(Math.cos(t)*7,Math.sin(t)*7),c9.$2(A.fC,2.4))}d2.restore()
d2=new B.aH($.T().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(16,6))
d2.E(new B.aq(26,6))
d2.E(new B.aq(26,-20))
d2.E(new B.aq(10,-20))
d3.af(d2,c9.$2(A.bQ,4))
if(c7){for(d2=d5*0.9,v=0;v<5;++v)d3.O(new B.r(26,6-A.i.F(d2+v*0.2,1)*26),2.2,c8.$1(A.hk))
d3.O(D.eCY,3.2,c8.$1(A.hk.j(0.7)))}return!0
case"hairdryer":d2=d3.c
J.bs(d2.save())
d3.js(0,-0.15)
d3.aq(d0.$5(-26,-14,40,22,10),d1.$3(D.fqi,A.hZ,A.uW))
d3.aq(d0.$5(14,-10,12,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-10,6,12,22,4),c8.$1(A.cU))
d2.restore()
if(c7){for(d2=d5*3,v=0;v<4;++v){u=A.i.F(d2+v*0.25,1)
t=u*18
q=-10+v*5
d3.ah(new B.r(24+t,q),new B.r(32+t,q),c9.$2(A.c.j(1-u),1.8))}d2=c8.$1(A.cW.j(0.4))
d2.y=O.oT
d3.O(D.eBy,8,d2)}return!0
case"headphones":d3.cQ(B.bZ(A.dS,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bB,4))
for(d2=d5*12,p=0;p<2;++p){o=F.TS[p]
t=o-7
d3.aq(d0.$5(t,0,14,20,6),d1.$3(new B.a5(t,0,t+14,20),A.bl,A.n2))
if(c7)for(t=o<0,v=1;v<=2;++v){q=B.bY(new B.r(o,10),10+v*5+A.i.F(d2,5))
h=t?2.2:-0.9
d3.cQ(q,h,1.6,!1,c9.$2(A.eH.j(0.9-v*0.3),1.6))}}if(c7)d6.$5(d3,"\u266a",new B.r(-4,-8-A.i.F(d5*14,8)),A.kZ,12)
return!0
case"smartwatch":d3.aq(d0.$5(-8,-30,16,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-8,14,16,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-14,-17,28,32,8),d1.$3(D.fpV,A.d0,A.cU))
d3.aq(d0.$5(-11,-14,22,26,6),c8.$1(A.dX))
if(c7){a2=new B.W(Date.now(),0,!1)
d6.$5(d3,A.a.aZ(A.o.v(B.d0(a2)),2,"0")+":"+A.a.aZ(A.o.v(B.fB(a2)),2,"0"),D.eAW,A.bf,9.5)
j=(Math.sin(d5*9)+1)/2
d2=B.ap(A.Gv,A.hI,j)
d2.toString
d6.$5(d3,"\u2665",new B.r(-8,1),d2,8+j*2)
d6.$5(d3,""+(70+A.o.F(A.i.bc(d5*2),6)),A.dS,A.c,7)}return!0
case"tablet":d3.aq(d0.$5(-30,-22,60,44,6),c8.$1(M.n8))
d3.aq(d0.$5(-30,-22,60,44,6),c9.$2(A.bQ,1.6))
a3=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.ne(a3),$.mR(),!0)
d2.translate(-27,-19)
K.Mv(d3,D.fxi,d5,!1,c6,c6)
d2.restore()}else d3.aq(a3,c8.$1(D.wQ))
return!0
case"buck":a4=d0.$5(-26,-22,52,42,5)
d3.aq(a4,d1.$3(new B.a5(a4.a,a4.b,a4.c,a4.d),A.dW,A.dl))
d3.aq(a4,c9.$2(A.aT,1.2))
d3.O(D.aOm,9,c8.$1(A.aw))
d3.O(D.aOm,6,c9.$2(A.de,2))
d3.aq(d0.$5(4,-2,14,10,2),c8.$1(A.aw))
d3.aq(d0.$5(-22,-19,44,12,2),c8.$1(A.dX))
d2=A.i.a5(d4.db,1)
t=A.i.a5(c7?d4.dx:d4.e,1)
q=c7?A.bf:A.an
d6.$5(d3,d2+"\u2192"+t+"V",D.eD7,q,8.2)
d3.O(D.eBp,2.4,c8.$1(c7?A.bj:A.aM))
d6.$5(d3,"IN",D.eEB,A.ab,6)
d6.$5(d3,"OUT",D.eCO,A.ab,6)
return!0
case"regulator":a5=c7?A.i.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=B.ap(A.bQ,A.aC,a5)
t.toString
d3.aq(d2,c8.$1(t))
d3.O(H.aa6,3,c8.$1(A.aM))
d3.aq(d0.$5(-12,-4,24,18,3),d1.$3(D.fpR,A.cU,A.io))
d6.$5(d3,"7805",D.aah,A.ab,8)
for(p=0;p<3;++p){d2=D.dzP[p]-1
d3.aE(new B.a5(d2,14,d2+2,22),c8.$1(A.dT))}if(a5>0.2)for(d2=d5*0.9,v=0;v<3;++v){u=A.i.F(d2+v*0.33,1)
d3.O(new B.r(-6+v*6,-28-u*12),2+u*2,c8.$1(A.c.j(0.5*(1-u))))}d6.$5(d3,"5V",D.eF9,A.bq,9)
return!0
case"diode":d3.ah(D.aOr,D.aO9,c9.$2(A.dT,2.4))
d3.aq(d0.$5(-14,-7,28,14,6),c8.$1(A.as.j(0.85)))
d3.aE(D.fpA,c8.$1(A.bq))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.eG.j(0.4))
t.y=A.l8
d3.aq(d2,t)}d2=new B.aH($.T().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-8,-4))
d2.E(new B.aq(-8,4))
d2.E(new B.aq(-1,0))
d2.E(new B.bA())
d3.af(d2,c8.$1(A.b6))
d6.$5(d3,"one way",D.eEq,A.aF,8)
return!0
case"ldr":d3.ah(D.aOr,D.aah,c9.$2(A.dT,2.4))
d3.ah(D.aOf,D.aO9,c9.$2(A.dT,2.4))
d3.O(A.J,12,c8.$1(A.de))
d3.O(A.J,12,c9.$2(A.tl,1.6))
d2=$.T()
t=B.a([],x.v)
a6=new B.aH(d2.r,A.ak,c6,c6,t)
a6.E(new B.aZ(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new B.aq(d2,-6+v*3)
t.push(d2)
q=a6.f
if(q!=null)d2.aj(q)
a6.ac()}d3.af(a6,c9.$2(A.bM,1.4))
d2=B.ap(A.bB,A.eG,d4.f)
d2.toString
d6.$5(d3,"\u2600",new B.r(-6,-26),d2,14)
d6.$5(d3,""+A.i.S(20+980*(1-d4.f))+"\u03a9",D.eEg,A.ab,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":switch(d2){case"lgtv":t=A.ex
break
case"sonytv":t=A.t5
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
h.clipRRect(B.ne(a3),$.mR(),!0)
h.translate(t,q)
K.h5l(d3,new B.av(a3.c-t,a3.d-q),d4.at,d5,d4.ax,-1,c6,c6)
h.restore()
d3.O(D.eC4,1.6,c8.$1(A.bf))}else{d3.aq(a3,c8.$1(D.wQ))
h=new B.aH($.T().r,A.ak,c6,c6,B.a([],x.v))
h.E(new B.aZ(t,q))
h.E(new B.aq(t+24,q))
h.E(new B.aq(t,q+22))
h.E(new B.bA())
d3.af(h,c8.$1(A.c.j(0.05)))}if(d2==="appletv"){d2=d3.c
J.bs(d2.save())
d2.translate(0,19.6)
d3.bV(0,3.7)
d2.translate(-0.5,-0.55)
d3.af(K.hNF(),c8.$1(A.cy))
d2.restore()}else{switch(d2){case"lgtv":d2=F.aTF
break
case"sonytv":d2=F.aTx
break
default:d2=F.aTz
break}a8=B.h_(c6,A.cK,c6,c6,c6,B.cW(c6,c6,c6,c6,c6,c6,c6,c6,c6,B.l(c6,c6,d2.b,c6,c6,c6,c6,c6,c6,c6,c6,3.6,c6,c6,A.D,c6,1,!0,c6,0.25,c6,c6,c6,c6,c6,c6),d2.a),A.a7,A.cc,c6,A.e4,A.cd)
a8.eL()
d2=a8.b
t=d2.c
d2=d2.a.c
a8.a4(d3,new B.r(-t/2,19.6-d2.gb4(d2)/2))}return!0
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
d3.aq(w,d1.$3(new B.a5(h,b3,b4,b5),b7,b6))
a3=d0.$5(t+2,q,b1-4,b2-4,3.5)
if(c7){t=d3.c
J.bs(t.save())
t.clipRRect(B.ne(a3),$.mR(),!0)
q=a3.a
h=a3.b
t.translate(q,h)
K.Mv(d3,new B.av(a3.c-q,a3.d-h),d5,!1,c6,c6)
t.restore()}else d3.aq(a3,c8.$1(D.wQ))
if(b0){t=a3.b
q=a3.d
d3.ah(new B.r(0,t),new B.r(0,q),c9.$2(A.v.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aq(d0.$5(-4,a3.b+1.2,8,2.6,1.3),c8.$1(A.v))
else{d2=b0?b1/2-7:0
d3.O(new B.r(d2,a3.b+3),1.3,c8.$1(A.v))}return!0
case"ereader":d3.aq(d0.$5(-17,-28,34,52,4),c8.$1(A.cU))
d3.aq(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bO))
if(c7){d6.$5(d3,"NGMY",D.eFg,A.aw,9)
for(v=0;v<9;++v){d2=-9+v*3.6
t=A.o.F(v,4)===3?14:22
d3.aE(new B.a5(-11,d2,-11+t,d2+1.4),c8.$1(A.bk))}d3.O(A.aa4,1.6,c8.$1(A.aw))}return!0
case"laptop":d3.aq(d0.$5(-30,-28,60,42,4),d1.$3(D.fqs,A.cD,A.bk))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.ne(b8),$.mR(),!0)
t=b8.a
q=b8.b
d2.translate(t,q)
K.Mv(d3,new B.av(b8.c-t,b8.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(b8,c8.$1(D.wQ))
d2=new B.aH($.T().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-38,16))
d2.E(new B.aq(38,16))
d2.E(new B.aq(34,21))
d2.E(new B.aq(-34,21))
d2.E(new B.bA())
d3.af(d2,c8.$1(D.akg))
d3.aq(d0.$5(-7,16,14,2,1),c8.$1(A.bk))
return!0
case"imac":d3.aq(d0.$5(-32,-28,64,46,5),d1.$3(D.fqw,A.cm,A.cD))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.ne(b9),$.mR(),!0)
t=b9.a
q=b9.b
d2.translate(t,q)
K.Mv(d3,new B.av(b9.c-t,b9.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(b9,c8.$1(D.wQ))
d3.O(D.eAy,2,c8.$1(A.bQ))
d2=new B.aH($.T().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-6,18))
d2.E(new B.aq(6,18))
d2.E(new B.aq(10,26))
d2.E(new B.aq(-10,26))
d2.E(new B.bA())
d3.af(d2,c8.$1(D.akg))
return!0
case"monitor":d3.aq(d0.$5(-34,-28,68,40,3),c8.$1(A.ex))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.ne(c0),$.mR(),!0)
t=c0.a
q=c0.b
d2.translate(t,q)
K.Mv(d3,new B.av(c0.c-t,c0.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(c0,c8.$1(D.wQ))
d3.aE(D.fqD,c8.$1(A.bk))
d3.aq(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.d0))
return!0
case"projector":if(c7){d2=new B.aH($.T().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(14,4))
d2.E(new B.aq(-32,-42))
d2.E(new B.aq(34,-42))
d2.E(new B.bA())
d3.af(d2,c8.$1(A.eG.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.ne(c1),$.mR(),!0)
t=c1.a
q=c1.b
d2.translate(t,q)
K.Mv(d3,new B.av(c1.c-t,c1.d-q),d5,!1,c6,c6)
d2.restore()}d3.aq(d0.$5(-26,-4,52,24,6),d1.$3(D.fqj,A.hX,A.d0))
d3.O(D.aNV,7,c8.$1(A.aw))
d3.O(D.aNV,4,c8.$1(c7?A.eG:A.cx))
for(v=0;v<4;++v){d2=-20+v*4
d3.ah(new B.r(d2,2),new B.r(d2,14),c9.$2(A.dJ,1))}return!0
case"carscreen":d3.aq(d0.$5(-34,-10,68,32,12),c8.$1(A.aw))
c2=d0.$5(-30,-20,60,28,8)
d3.aq(c2,c8.$1(M.n8))
d3.aq(c2,c9.$2(A.bB,1.2))
if(c7){c3=new B.aH($.T().r,A.ak,c6,c6,B.a([],x.v))
c3.E(new B.aZ(-26,4))
c3.E(new B.ck(-10,-14+Math.sin(d5)*3,6,-6))
c3.E(new B.aq(22,-16))
d3.af(c3,c9.$2(A.aH,2.2))
d2=A.i.F(d5*6,48)
d3.O(new B.r(-26+d2,4-d2*0.1),2.4,c8.$1(A.bf))
d6.$5(d3,""+(88+A.o.F(A.i.bc(d5*2),5)),H.aOe,A.c,10)
d6.$5(d3,"km/h",D.eCW,A.aF,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aq(c4,d1.$3(new B.a5(c4.a,c4.b,c4.c,c4.d),A.d0,A.cU))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.ne(c5),$.mR(),!0)
t=c5.a
q=c5.b
d2.translate(t,q)
K.Mv(d3,new B.av(c5.c-t,c5.d-q),d5,!1,c6,c6)
d2.restore()
d2=c8.$1(A.bl.j(0.2))
d2.y=A.nh
d3.O(A.J,26,d2)}else d3.aq(c5,c8.$1(A.a_))
d3.ah(D.eER,D.eEW,c9.$2(A.bk,4))
d3.ah(D.eC6,D.eCm,c9.$2(A.bk,4))
return!0}return!1},
h55:function h55(){},
h57:function h57(){},
h58:function h58(){},
h56:function h56(){},
huO(d,e,f,g){return new C.akZ(d,g,f,e)},
GK(d,e,f){return new C.beS(d,e,f)},
akZ:function akZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
al_:function al_(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bMe:function bMe(d,e){this.a=d
this.b=e},
bMf:function bMf(d){this.a=d},
bMd:function bMd(d){this.a=d},
bMg:function bMg(){},
bMh:function bMh(d){this.a=d},
bMi:function bMi(d,e,f){this.a=d
this.b=e
this.c=f},
bMc:function bMc(d,e){this.a=d
this.b=e},
bM9:function bM9(d,e){this.a=d
this.b=e},
bMa:function bMa(d,e,f){this.a=d
this.b=e
this.c=f},
bM3:function bM3(d,e){this.a=d
this.b=e},
bM4:function bM4(){},
bMb:function bMb(d,e,f){this.a=d
this.b=e
this.c=f},
bM8:function bM8(d,e){this.a=d
this.b=e},
bM5:function bM5(d,e){this.a=d
this.b=e},
bM6:function bM6(d,e){this.a=d
this.b=e},
bM7:function bM7(d){this.a=d},
bMy:function bMy(d){this.a=d},
bMz:function bMz(){},
bLE:function bLE(){},
bMA:function bMA(d,e){this.a=d
this.b=e},
bMx:function bMx(d,e){this.a=d
this.b=e},
bMs:function bMs(d){this.a=d},
bMp:function bMp(d,e,f){this.a=d
this.b=e
this.c=f},
bMq:function bMq(d,e){this.a=d
this.b=e},
bMt:function bMt(d){this.a=d},
bMn:function bMn(d,e){this.a=d
this.b=e},
bMo:function bMo(d,e){this.a=d
this.b=e},
bMr:function bMr(d){this.a=d},
bMu:function bMu(d){this.a=d},
bMk:function bMk(d,e){this.a=d
this.b=e},
bMl:function bMl(d,e){this.a=d
this.b=e},
bMm:function bMm(d,e){this.a=d
this.b=e},
bMv:function bMv(d){this.a=d},
bMj:function bMj(d){this.a=d},
bMw:function bMw(d){this.a=d},
bLF:function bLF(d,e){this.a=d
this.b=e},
bM0:function bM0(d,e){this.a=d
this.b=e},
bM2:function bM2(d,e){this.a=d
this.b=e},
bM1:function bM1(d,e){this.a=d
this.b=e},
bM_:function bM_(){},
bLM:function bLM(d){this.a=d},
bLL:function bLL(d){this.a=d},
bLN:function bLN(d,e){this.a=d
this.b=e},
bLO:function bLO(d){this.a=d},
bLK:function bLK(d){this.a=d},
bLS:function bLS(d,e,f){this.a=d
this.b=e
this.c=f},
bLJ:function bLJ(d,e){this.a=d
this.b=e},
bLT:function bLT(d,e){this.a=d
this.b=e},
bLU:function bLU(d,e){this.a=d
this.b=e},
bLV:function bLV(d,e){this.a=d
this.b=e},
bLW:function bLW(d,e,f){this.a=d
this.b=e
this.c=f},
bLI:function bLI(d,e){this.a=d
this.b=e},
bLX:function bLX(d,e,f){this.a=d
this.b=e
this.c=f},
bLH:function bLH(d,e){this.a=d
this.b=e},
bLY:function bLY(d,e,f){this.a=d
this.b=e
this.c=f},
bLG:function bLG(d,e){this.a=d
this.b=e},
bLZ:function bLZ(d){this.a=d},
bLP:function bLP(d){this.a=d},
bLQ:function bLQ(d){this.a=d},
bLR:function bLR(d){this.a=d},
beS:function beS(d,e,f){this.a=d
this.b=e
this.c=f},
fAN:function fAN(){},
fAO:function fAO(){},
fAP:function fAP(){},
fAA:function fAA(){},
fAQ:function fAQ(){},
fAz:function fAz(){},
fAR:function fAR(){},
fAE:function fAE(){},
fAy:function fAy(){},
fAF:function fAF(){},
fAx:function fAx(){},
fAG:function fAG(){},
fAw:function fAw(){},
fAH:function fAH(){},
fAu:function fAu(){},
fAv:function fAv(){},
fAI:function fAI(){},
fAs:function fAs(){},
fAt:function fAt(){},
fAJ:function fAJ(){},
fAr:function fAr(){},
WU:function WU(d){this.a=d},
aGm:function aGm(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
e5l:function e5l(d,e){this.a=d
this.b=e},
e5u:function e5u(d){this.a=d},
e5v:function e5v(){},
e5w:function e5w(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e5x:function e5x(){},
e5k:function e5k(d){this.a=d},
e5j:function e5j(d,e,f){this.a=d
this.b=e
this.c=f},
e5i:function e5i(d,e){this.a=d
this.b=e},
e5g:function e5g(d){this.a=d},
e5h:function e5h(){},
e5t:function e5t(d){this.a=d},
e5s:function e5s(d){this.a=d},
e5q:function e5q(d,e){this.a=d
this.b=e},
e5o:function e5o(d){this.a=d},
e5p:function e5p(){},
e5r:function e5r(d,e,f){this.a=d
this.b=e
this.c=f},
e5m:function e5m(d,e){this.a=d
this.b=e},
e5n:function e5n(){},
e5z:function e5z(d){this.a=d},
e5A:function e5A(d,e){this.a=d
this.b=e},
e5y:function e5y(){},
e5B:function e5B(d,e){this.a=d
this.b=e},
e5C:function e5C(d){this.a=d},
e5D:function e5D(d){this.a=d},
aAh:function aAh(d,e){this.c=d
this.a=e},
bcX:function bcX(d,e){var _=this
_.d=$
_.bv$=d
_.ab$=e
_.c=_.a=null},
cOa:function cOa(d){this.a=d},
bcW:function bcW(d,e){this.b=d
this.a=e},
cO9:function cO9(d){this.a=d},
aAC:function aAC(){},
aAD:function aAD(){},
aMY:function aMY(){},
bBO:function bBO(){},
iDn(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bY(A.w2,23)
$.T()
b8=B.L()
b8.r=A.aw.gp(0)
b9.O(A.w2,25,b8)
b8=B.L()
b8.san(D.eO_.az(0,v))
b9.O(A.w2,23,b8)
for(u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
b8=Math.cos(t)
s=Math.sin(t)
r=Math.cos(t)
q=Math.sin(t)
p=new B.ar(A.U,A.R,A.X,A.Y,A.W)
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
c2.$5(b9,w?"V":"A",D.eEZ,A.bq,12)
c2.$5(b9,w?A.i.a5(o,1)+" V":""+A.i.S(o*1000)+" mA",D.eEk,A.aw,9.5)
return!0
case"fan":b8=B.bw(D.fpN,A.hr)
$.T()
s=B.L()
s.r=A.bB.gp(0)
b9.aq(b8,s)
s=B.L()
s.r=A.an.gp(0)
b9.aE(D.fqE,s)
s=B.L()
s.r=A.a_.j(0.6).gp(0)
b9.O(H.w3,22,s)
for(b8=b9.c,u=0;u<4;++u){J.bs(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.bZ(A.aNN,18,10)
r=new B.ar(A.U,A.R,A.X,A.Y,A.W)
r.r=A.hk.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
b9.c1(s,r)
b8.restore()}b8=B.L()
b8.r=A.bs.gp(0)
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
case"speaker":n=B.bw(D.aU4,A.qi)
$.T()
b8=B.L()
b8.san(D.avb.az(0,new B.a5(n.a,n.b,n.c,n.d)))
b9.aq(n,b8)
m=b7?Math.sin(c1*40)*1.6:0
b8=B.L()
b8.san(D.eOm.az(0,B.bY(A.cz,15)))
b9.O(A.cz,14+m,b8)
b8=B.L()
b8.r=A.d0.gp(0)
b9.O(A.cz,5,b8)
b8=B.L()
b8.r=A.bk.gp(0)
b9.O(H.aa5,5+m*0.4,b8)
if(b7)for(b8=c1*18,u=1;u<=3;++u){s=B.bY(D.eBG,6+u*6+A.i.F(b8,6))
r=new B.ar(A.U,A.R,A.X,A.Y,A.W)
r.b=A.ac
r.c=1.8
r.r=A.c5.j(0.9-u*0.2).gp(0)
b9.cQ(s,-0.8,1.6,!1,r)}return!0
case"clock":l=B.bw(D.fqv,A.qi)
$.T()
b8=B.L()
b8.san(D.ccF.az(0,new B.a5(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
b8=B.bw(D.aU6,A.jJ)
s=B.L()
s.r=A.io.gp(0)
b9.aq(b8,s)
if(b7){k=new B.W(Date.now(),0,!1)
j=B.G5(k)<500?":":" "
i=A.a.aZ(A.o.v(B.d0(k)),2,"0")
h=A.a.aZ(A.o.v(B.fB(k)),2,"0")
b8=B.L()
b8.r=A.bf.j(0.12).gp(0)
b9.aE(D.aU6,b8)
c2.$5(b9,i+j+h,D.eEF,A.bf,21)}b8=B.L()
b8.r=A.cD.gp(0)
b9.O(D.eED,2.4,b8)
b8=B.L()
b8.r=A.cD.gp(0)
b9.O(D.eBL,2.4,b8)
return!0
case"calculator":l=B.bw(D.fqb,A.iD)
$.T()
b8=B.L()
b8.san(D.ave.az(0,new B.a5(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
b8=B.bw(D.fq4,A.hF)
s=B.L()
s.r=(b7?A.a_Y:D.bvJ).gp(0)
b9.aq(b8,s)
if(b7)c2.$5(b9,"3.14159",D.eEj,A.ZB,10.5)
for(g=0;g<4;++g)for(b8=-6+g*8,s=b8+6,f=0;f<4;++f){r=-15+f*8
r=B.bw(new B.a5(r,b8,r+6,s),A.Fh)
$.T()
q=new B.ar(A.U,A.R,A.X,A.Y,A.W)
q.r=(f===3?A.ca:A.bO).gp(0)
b9.aq(r,q)}return!0
case"phone":l=B.bw(D.fq_,A.iD)
$.T()
b8=B.L()
b8.r=M.n8.gp(0)
b9.aq(l,b8)
b8=B.L()
b8.b=A.ac
b8.c=1.9
b8.r=D.amd.gp(0)
b9.aq(l,b8)
e=B.bw(D.fpP,A.hr)
if(b7){b8=B.L()
b8.san(D.ce1.az(0,new B.a5(e.a,e.b,e.c,e.d)))
b9.aq(e,b8)
b8=b9.c
J.bs(b8.save())
b8.clipRRect(B.ne(e),$.mR(),!0)
b8.translate(-12,-25)
K.Mv(b9,D.fwV,c1,!1,b6,b6)
b8.restore()
d=A.i.F(c1*0.12,1)
b8=B.bw(D.fpM,A.hF)
s=B.L()
s.r=A.b6.gp(0)
b9.aq(b8,s)
s=B.L()
s.r=A.bf.gp(0)
b9.aE(new B.a5(-10,14.5,-10+20*d,16.9),s)
c2.$5(b9,"\u26a1"+A.i.S(d*100)+"%",D.eDr,A.c,6)}else{b8=B.L()
b8.r=D.wQ.gp(0)
b9.aq(e,b8)}b8=B.bw(D.fqU,D.eOv)
s=B.L()
s.r=A.v.gp(0)
b9.aq(b8,s)
return!0
case"router":l=B.bw(D.fqu,A.pi)
$.T()
b8=B.L()
b8.san(D.ccX.az(0,new B.a5(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
for(a0=0;a0<2;++a0){a1=F.TS[a0]
b8=a1<0?-4:4
s=new B.ar(A.U,A.R,A.X,A.Y,A.W)
s.r=A.cx.gp(0)
s.c=4
s.d=A.bG
b9.ah(new B.r(a1,-4),new B.r(a1+b8,-28),s)}for(u=0;u<4;++u){if(b7)a2=A.o.F(A.i.bc(c1*(3+u*1.3)),2)===0||u===0
else a2=!1
b8=new B.ar(A.U,A.R,A.X,A.Y,A.W)
b8.r=(a2?A.bj:A.aM).gp(0)
b9.O(new B.r(-15+u*10,11),2.6,b8)}if(b7)for(b8=c1*10,u=1;u<=3;++u){s=B.bY(H.w3,8+u*6+A.i.F(b8,6))
r=new B.ar(A.U,A.R,A.X,A.Y,A.W)
r.b=A.ac
r.c=1.8
r.r=A.fY.j(0.9-u*0.2).gp(0)
b9.cQ(s,-2.3,1.5,!1,r)}return!0
case"siren":a3=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bw(D.fqa,A.hr)
s=$.T()
r=B.L()
r.r=A.cU.gp(0)
b9.aq(b8,r)
if(b7){b8=B.L()
b8.r=A.aC.j(0.5*a3).gp(0)
b8.y=A.Di
b9.O(A.w2,34,b8)}a4=new B.aH(s.r,A.ak,b6,b6,B.a([],x.v))
a4.E(new B.aZ(-16,12))
a4.E(new B.aq(-16,-2))
a4.E(new B.ck(0,-30,16,-2))
a4.E(new B.aq(16,12))
a4.E(new B.bA())
b8=B.L()
b8.r=B.ap(A.ey,D.bm5,a3).gp(0)
b9.af(a4,b8)
b8=B.L()
b8.b=A.ac
b8.c=1.4
b8.r=A.bX.gp(0)
b9.af(a4,b8)
if(b7){b8=b9.c
J.bs(b8.save())
b8.translate(0,-2)
b9.js(0,c1*7)
s=B.L()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.ah(A.J,H.aa5,s)
b8.restore()}return!0
case"toycar":a5=b7?Math.sin(c1*30)*0.8:0
b8=b9.c
J.bs(b8.save())
b8.translate(0,a5)
s=$.T().r
r=x.v
l=new B.aH(s,A.ak,b6,b6,B.a([],r))
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
q.san(D.caV.az(0,D.fqm))
b9.af(l,q)
q=new B.aH(s,A.ak,b6,b6,B.a([],r))
q.E(new B.aZ(-8,-4))
q.E(new B.aq(-4,-13))
q.E(new B.aq(4,-13))
q.E(new B.aq(4,-4))
q.E(new B.bA())
p=B.L()
p.r=A.fC.gp(0)
b9.af(q,p)
r=new B.aH(s,A.ak,b6,b6,B.a([],r))
r.E(new B.aZ(8,-4))
r.E(new B.aq(8,-13))
r.E(new B.aq(11,-13))
r.E(new B.aq(15,-4))
r.E(new B.bA())
s=B.L()
s.r=A.fC.gp(0)
b9.af(r,s)
for(a0=0;a0<2;++a0){a1=F.aEA[a0]
s=new B.ar(A.U,A.R,A.X,A.Y,A.W)
s.r=A.aw.gp(0)
b9.O(new B.r(a1,10),7.5,s)
J.bs(b8.save())
b8.translate(a1,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.ar(A.U,A.R,A.X,A.Y,A.W)
q.r=A.bO.gp(0)
q.c=1.6
b9.ah(A.J,new B.r(r*5.5,s*5.5),q)}b8.restore()}b8.restore()
if(b7)for(b8=c1*40,u=0;u<3;++u){s=A.i.F(b8+u*8,14)
r=-4+u*5
q=new B.ar(A.U,A.R,A.X,A.Y,A.W)
q.r=A.aF.gp(0)
q.c=1.6
b9.ah(new B.r(-34-s,r),new B.r(-42-s,r),q)}return!0
case"kettle":b8=$.T().r
s=x.v
l=new B.aH(b8,A.ak,b6,b6,B.a([],s))
l.E(new B.aZ(-18,20))
l.E(new B.aq(-14,-12))
l.E(new B.ck(0,-20,14,-12))
l.E(new B.aq(18,20))
l.E(new B.bA())
r=B.L()
r.san(D.cc3.az(0,D.fq9))
b9.af(l,r)
r=new B.aH(b8,A.ak,b6,b6,B.a([],s))
r.E(new B.aZ(14,-10))
r.E(new B.aq(30,-22))
r.E(new B.aq(32,-18))
r.E(new B.aq(16,-4))
r.E(new B.bA())
q=B.L()
q.r=A.dT.gp(0)
b9.af(r,q)
s=new B.aH(b8,A.ak,b6,b6,B.a([],s))
s.E(new B.aZ(-14,-8))
s.E(new B.ck(-34,-6,-18,12))
b8=B.L()
b8.b=A.ac
b8.c=5
b8.r=A.aw.gp(0)
b9.af(s,b8)
b8=B.L()
if(b7){s=B.ap(A.cW,A.v4,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.cU
b8.r=s.gp(0)
b9.aE(D.fq8,b8)
if(b7){b8=B.L()
b8.r=A.cW.j(0.3).gp(0)
b8.y=A.nh
b9.O(A.aNL,24,b8)
for(b8=c1*0.9,u=0;u<4;++u){a6=A.i.F(b8+u*0.25,1)
s=Math.sin(a6*9+u)
r=new B.ar(A.U,A.R,A.X,A.Y,A.W)
r.r=A.c.j(0.6*(1-a6)).gp(0)
b9.O(new B.r(30+s*4,-26-a6*26),3+a6*5,r)}}b8=B.L()
b8.r=A.aw.gp(0)
b9.O(D.eAJ,3,b8)
return!0
case"lamp":if(b7){u=A.i.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aH($.T().r,A.ak,b6,b6,B.a([],x.v))
b8.E(new B.aZ(-10,-14))
b8.E(new B.aq(-30,24))
b8.E(new B.aq(10,24))
b8.E(new B.aq(8,-14))
b8.E(new B.bA())
s=B.L()
s.r=A.eG.j(0.28*u).gp(0)
b9.af(b8,s)
s=B.L()
s.r=A.eG.j(0.5*u).gp(0)
s.y=Z.Pz
b9.O(D.eEL,24,s)}b8=B.bw(D.fqN,A.hr)
s=$.T()
r=B.L()
r.r=A.cU.gp(0)
b9.aq(b8,r)
r=B.L()
r.r=A.d0.gp(0)
r.c=3
r.d=A.bG
b9.ah(D.eAZ,D.aNY,r)
r=B.L()
r.r=A.d0.gp(0)
r.c=3
r.d=A.bG
b9.ah(D.aNY,D.eEM,r)
a7=new B.aH(s.r,A.ak,b6,b6,B.a([],x.v))
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
b9.O(D.eEP,4,b8)
return!0
case"lights":b8=$.T().r
s=x.v
a8=new B.aH(b8,A.ak,b6,b6,B.a([],s))
a8.E(new B.aZ(-34,-6))
a8.E(new B.ck(0,22,34,-6))
r=B.L()
r.b=A.ac
r.c=2
r.r=A.hY.gp(0)
b9.af(a8,r)
for(r=c1*2.4,u=0;u<5;++u){a9=(u+0.5)/5
q=-34+68*a9
p=-6+4*a9*(1-a9)*4*4.2/1*0.75+0
b0=b7&&A.i.F(r+u*0.7,1.8)<1.1
if(b0){b1=new B.ar(A.U,A.R,A.X,A.Y,A.W)
b1.r=D.a6E[u].j(0.6).gp(0)
b1.y=A.HY
b9.O(new B.r(q+0,p+6),12,b1)}b1=B.a([],s)
b2=new B.aH(b8,A.ak,b6,b6,b1)
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
q=new B.ck(q,p+17,q-5,b3)
b1.push(q)
p=b2.f
if(p!=null)q.aj(p)
b2.ac()
q=new B.bA()
b1.push(q)
p=b2.f
if(p!=null)q.aj(p)
b2.ac()
q=new B.ar(A.U,A.R,A.X,A.Y,A.W)
if(b0)p=D.a6E[u]
else{p=B.ap(D.a6E[u],A.v,0.65)
p.toString}q.r=p.gp(0)
b9.af(b2,q)}return!0}return C.iDm(b9,c0,c1,c2)},
h4:function h4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hpJ(d){var w=D.mF.h(0,d)
return(w==null?null:w.b)===D.Bg},
iEC(d,e,f){return B.a7(d,!1).c9(B.vA(null,!1,!0,!0,new C.had(e,f),A.eW,null,A.pP,new C.hae(),x.H))},
Ku:function Ku(d,e){this.a=d
this.b=e},
mk:function mk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
had:function had(d,e){this.a=d
this.b=e},
hae:function hae(){},
WD:function WD(d,e,f){this.c=d
this.d=e
this.a=f},
aGc:function aGc(d,e,f){var _=this
_.d=$
_.e=null
_.r=_.f=!1
_.w=-99
_.x=d
_.z=_.y=0
_.bv$=e
_.ab$=f
_.c=_.a=null},
e1h:function e1h(d,e){this.a=d
this.b=e},
e1i:function e1i(d,e,f){this.a=d
this.b=e
this.c=f},
e1s:function e1s(d,e,f){this.a=d
this.b=e
this.c=f},
e1g:function e1g(d,e){this.a=d
this.b=e},
e1f:function e1f(d,e){this.a=d
this.b=e},
e1t:function e1t(d,e){this.a=d
this.b=e},
e1u:function e1u(d){this.a=d},
e19:function e19(d,e){this.a=d
this.b=e},
e18:function e18(d,e){this.a=d
this.b=e},
e17:function e17(d){this.a=d},
e1q:function e1q(){},
e1m:function e1m(d){this.a=d},
e1n:function e1n(d){this.a=d},
e1o:function e1o(d){this.a=d},
e1p:function e1p(d){this.a=d},
e1v:function e1v(d){this.a=d},
e1l:function e1l(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e1j:function e1j(){},
e1k:function e1k(d){this.a=d},
e1r:function e1r(d,e){this.a=d
this.b=e},
e1e:function e1e(d,e){this.a=d
this.b=e},
e1c:function e1c(d){this.a=d},
e1d:function e1d(d){this.a=d},
e16:function e16(d){this.a=d},
e1b:function e1b(d,e,f){this.a=d
this.b=e
this.c=f},
e1a:function e1a(d){this.a=d},
bzQ:function bzQ(d,e,f){this.b=d
this.c=e
this.a=f},
agK:function agK(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aOM:function aOM(){},
a2P(d,e,f,g,h,i){return new C.byC(d,e,f,g,h,i)},
byC:function byC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fBh:function fBh(){},
fBi:function fBi(){},
fBj:function fBj(){},
fBk:function fBk(){},
fBl:function fBl(){},
fBm:function fBm(){},
fBn:function fBn(){},
fBo:function fBo(){},
aak:function aak(d){this.a=d},
cpv:function cpv(d){this.a=d},
cpw:function cpw(){},
cpu:function cpu(d,e){this.a=d
this.b=e},
cpt:function cpt(d){this.a=d},
Yh:function Yh(d){this.a=d},
aHU:function aHU(d,e,f,g,h,i,j,k){var _=this
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
f1s:function f1s(d){this.a=d},
f1o:function f1o(d){this.a=d},
f1n:function f1n(d,e){this.a=d
this.b=e},
f1q:function f1q(d,e){this.a=d
this.b=e},
f1p:function f1p(d,e){this.a=d
this.b=e},
f1r:function f1r(d){this.a=d},
bA1:function bA1(d,e,f){this.b=d
this.c=e
this.a=f},
X1:function X1(d){this.a=d},
bnT:function bnT(d,e,f,g,h,i){var _=this
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
e93:function e93(){},
e94:function e94(){},
e8Z:function e8Z(d,e){this.a=d
this.b=e},
e90:function e90(d,e){this.a=d
this.b=e},
e91:function e91(d){this.a=d},
e9_:function e9_(d){this.a=d},
e92:function e92(d){this.a=d},
buF:function buF(d,e,f){this.b=d
this.c=e
this.a=f},
Wc:function Wc(d){this.a=d},
bns:function bns(d,e,f,g,h,i){var _=this
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
dTu:function dTu(){},
dTv:function dTv(){},
dTp:function dTp(){},
dTs:function dTs(d,e){this.a=d
this.b=e},
dTr:function dTr(d,e){this.a=d
this.b=e},
dTt:function dTt(d){this.a=d},
dTq:function dTq(d){this.a=d},
aLm:function aLm(d,e,f){this.a=d
this.b=e
this.c=f},
WT:function WT(d){this.a=d},
bnK:function bnK(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
e4Q:function e4Q(d,e){this.a=d
this.b=e},
e4R:function e4R(d){this.a=d},
e4P:function e4P(d,e){this.a=d
this.b=e},
e4S:function e4S(d){this.a=d},
e4O:function e4O(d,e){this.a=d
this.b=e},
e4T:function e4T(d){this.a=d},
e4N:function e4N(d,e){this.a=d
this.b=e},
e4U:function e4U(d,e){this.a=d
this.b=e},
e4M:function e4M(d,e){this.a=d
this.b=e},
e4V:function e4V(d){this.a=d},
e4L:function e4L(d,e){this.a=d
this.b=e},
e4W:function e4W(d){this.a=d},
e4K:function e4K(d){this.a=d},
e4X:function e4X(d){this.a=d},
e4J:function e4J(d){this.a=d},
e4Y:function e4Y(d){this.a=d},
e4Z:function e4Z(d){this.a=d},
e4I:function e4I(d){this.a=d},
bpN:function bpN(d,e,f){this.b=d
this.c=e
this.a=f},
XE:function XE(d){this.a=d},
aHa:function aHa(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
ewJ:function ewJ(d,e){this.a=d
this.b=e},
ewK:function ewK(d,e,f){this.a=d
this.b=e
this.c=f},
ewI:function ewI(d,e,f){this.a=d
this.b=e
this.c=f},
ewL:function ewL(d){this.a=d},
ewH:function ewH(d){this.a=d},
ewP:function ewP(d){this.a=d},
ewO:function ewO(d,e){this.a=d
this.b=e},
ewN:function ewN(d,e){this.a=d
this.b=e},
ewQ:function ewQ(d,e){this.a=d
this.b=e},
ewM:function ewM(d,e){this.a=d
this.b=e},
ewR:function ewR(d){this.a=d},
XP:function XP(d){this.a=d},
aHx:function aHx(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eJB:function eJB(d){this.a=d},
eJC:function eJC(d){this.a=d},
eJz:function eJz(d,e){this.a=d
this.b=e},
eJA:function eJA(d){this.a=d},
eJy:function eJy(d){this.a=d},
eJD:function eJD(d){this.a=d},
eJE:function eJE(d){this.a=d},
eJF:function eJF(d){this.a=d},
eJG:function eJG(d,e){this.a=d
this.b=e},
Y8:function Y8(d){this.a=d},
bp0:function bp0(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eXO:function eXO(){},
eXX:function eXX(){},
eXT:function eXT(d){this.a=d},
eXS:function eXS(){},
eXU:function eXU(d,e){this.a=d
this.b=e},
eXR:function eXR(d,e){this.a=d
this.b=e},
eXV:function eXV(d){this.a=d},
eXQ:function eXQ(d,e){this.a=d
this.b=e},
eXW:function eXW(d){this.a=d},
eXP:function eXP(d){this.a=d},
XD:function XD(d){this.a=d},
bov:function bov(d,e,f,g,h,i,j,k){var _=this
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
evo:function evo(){},
evp:function evp(){},
evh:function evh(d){this.a=d},
evg:function evg(d){this.a=d},
evi:function evi(d){this.a=d},
evf:function evf(d){this.a=d},
evj:function evj(d){this.a=d},
eve:function eve(d){this.a=d},
evk:function evk(d,e){this.a=d
this.b=e},
evd:function evd(d,e){this.a=d
this.b=e},
evl:function evl(d){this.a=d},
evc:function evc(d,e){this.a=d
this.b=e},
evm:function evm(d){this.a=d},
evb:function evb(d,e){this.a=d
this.b=e},
evn:function evn(d){this.a=d},
eva:function eva(d,e){this.a=d
this.b=e},
bhg:function bhg(d,e,f){this.c=d
this.d=e
this.a=f},
aOy:function aOy(){},
bBK:function bBK(){},
aOT:function aOT(){},
bBQ:function bBQ(){},
aPj:function aPj(){},
bBZ:function bBZ(){},
aPL:function aPL(){},
bC7:function bC7(){},
K_(d,e,f,g){var w,v,u,t,s,r,q,p=$.auG
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.I)(e),++w)E.mI(d,e[w],f,g)
return}for(p=B.cV(e,0,B.dz(4,"count",x.S),B.U(e).c),v=p.$ti,p=new B.bR(p,p.gJ(0),v.k("bR<aj.E>")),u=x.H,v=v.k("aj.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)E.mI(d,s,f,g)
else B.bN(new B.bh(1000*q),new C.cpr(d,s,f,g),u)}},
cmO(d){return C.i8t(d)},
i8t(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$cmO=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aB(),$async$cmO)
case 7:r=f
q=B.aV(J.t(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.S(x.N,x.z)
w=1
break}p=A.V.aP(0,q,null)
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
return B.i($async$cmO,v)},
b4M(d,e){return C.i8u(d,e)},
i8u(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b4M=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aB(),$async$b4M)
case 6:s=g
w=7
return B.b(s.aB("String","ngmy_play_progress_v1_"+d,A.V.au(e,null)),$async$b4M)
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
return B.i($async$b4M,v)},
cpr:function cpr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
itX(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.S(x.Y,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.B)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.I)(w),++q){p=w[q]
u.push(B.J(["k",p.b,"x",B.oI(A.i.a5(p.c,4)),"y",B.oI(A.i.a5(p.d,4)),"v",p.e,"l",B.oI(A.i.a5(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.oI(A.i.a5(p.as,3)),"ch",p.at,"vc",B.oI(A.i.a5(p.z,3)),"s",B.oI(A.i.a5(p.ch,2))],s,r))}w=B.a([],x.U)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.I)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.B(f,B.a3(f).k("ci.E"))
A.d.fd(l)
return A.V.au(B.J(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
iDM(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.V.aP(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a6(h)
A.d.a6(a6.b)
v=B.a([],x.fs)
g=x.R
f=g.a(J.t(w,"parts"))
f=J.aQ(f==null?A.bP:f)
while(f.C()){u=f.gP(f)
t=i.a(u)
e=B.aV(J.t(t,"k"))
s=e==null?"":e
if(!$.qT().am(0,s)){J.c8(v,null)
continue}d=s
a0=B.aJ(J.t(t,"x"))
if(a0==null)a0=0.5
a1=B.aJ(J.t(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.u9(a2,d,a0,a1)
a3.at8(a2,d,a0,a1)
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
d=B.kj(J.t(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.kj(J.t(t,"b"))
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
J.c8(v,r)}i=g.a(J.t(w,"wires"))
i=J.aQ(i==null?A.bP:i)
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
if(m!=null&&l!=null)a6.an3(m,A.i.M(B.dJ(J.t(p,1))),l,A.i.M(B.dJ(J.t(p,3))))}i=B.aJ(J.t(w,"challenge"))
i=A.i.M(i==null?0:i)
k=B.aR(x.S)
h=g.a(J.t(w,"done"))
h=J.aQ(h==null?A.bP:h)
while(h.C()){j=h.gP(h)
J.c8(k,A.i.M(B.dJ(j)))}return new B.bsL(i,k)}catch(a4){return a5}},
fSH(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fSH=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.aB(),$async$fSH)
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
return B.i($async$fSH,v)},
bIJ(d){return C.iFp(d)},
iFp(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bIJ=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.aB(),$async$bIJ)
case 7:w=6
return B.b(f.aB("String","ngmy_electronics_lab_v1",d),$async$bIJ)
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
return B.i($async$bIJ,v)},
fZx(d,e,f){var w=0,v=B.j(x.I),u,t,s,r,q,p
var $async$fZx=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(d.c===e&&d.d===f){u=d
w=1
break}$.T()
t=new B.oW(new B.or())
s=B.v2(t,null)
r=B.L()
r.r=A.c7.gp(0)
s.aE(new B.a5(0,0,e,f),r)
s.bid(0,d,A.J,B.L())
q=t.n_()
w=3
return B.b(q.vJ(e,f),$async$fZx)
case 3:p=h
q.t()
d.t()
u=p
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fZx,v)}},D,W,A2,Au,K,F,M,A3,H,Av,Aw,Ax,A4,Ay
J=c[1]
B=c[0]
A=c[2]
X=c[143]
Aa=c[180]
A5=c[126]
N=c[91]
Ab=c[185]
Ac=c[154]
A6=c[179]
Ad=c[186]
A7=c[184]
U=c[175]
P=c[47]
Y=c[171]
Ae=c[167]
O=c[178]
Af=c[189]
Ag=c[194]
Ah=c[139]
Ai=c[169]
A8=c[153]
Aj=c[107]
Ak=c[187]
Al=c[93]
Am=c[191]
An=c[82]
Z=c[173]
V=c[90]
Ao=c[94]
Q=c[162]
Ap=c[147]
A_=c[158]
R=c[193]
S=c[163]
A0=c[177]
T=c[176]
A1=c[190]
Aq=c[137]
E=c[34]
I=c[3]
G=c[46]
L=c[141]
Ar=c[135]
As=c[155]
At=c[182]
A9=c[192]
C=a.updateHolder(c[23],C)
D=c[172]
W=c[188]
A2=c[181]
Au=c[31]
K=c[33]
F=c[133]
M=c[131]
A3=c[108]
H=c[174]
Av=c[105]
Aw=c[121]
Ax=c[72]
A4=c[183]
Ay=c[63]
C.amd.prototype={}
C.Xn.prototype={
R(){return new C.boj(B.S(x.N,x.i),new B.au(A.ax,$.az()),B.a([],x.X),B.a([],x.eZ),B.ml(0,null,null))}}
C.boj.prototype={
gXD(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
t(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
this.ch.t()
this.a2()},
Qr(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Qr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aU.bk$.d.c
if(s!=null)s.j_()
p.bM(0,A.ck)
t.l(new C.eoq(t))
t.a.toString
p=t.gXD()
w=3
return B.b(C.bE2(C.ihD(q,C.itI(p),o,t.ay)),$async$Qr)
case 3:s=e
r=s==null?null:J.jg(s)
if(r==null||r.length===0||A.a.Y(r,"{"))r=C.ive(q,p,o)
if(t.c==null){w=1
break}t.l(new C.eor(t,o,r))
$.aU.U$.push(new C.eos(t))
case 1:return B.h(u,v)}})
return B.i($async$Qr,v)},
ZJ(d){return this.c5j(d)},
aZO(){return this.ZJ(null)},
c5j(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$ZJ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aU.bk$.d.c
if(s!=null)s.j_()
t.f.sb1(0,o)
t.l(new C.eoD(t))
G.dH(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bE2(C.ioO(o)),$async$ZJ)
case 3:r=n.a=m.iDr(f)
p.b=""
if(r!=null&&!C.itJ(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.ivf(o)
q=B.ag(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.amd(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.l(new C.eoE(p,t))
t.cbc(p.a)
case 1:return B.h(u,v)}})
return B.i($async$ZJ,v)},
cbc(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
A.d.a6(w)
w=++m.as
v=m.gXD()
A.d.a6(v.a)
A.d.a6(v.b)
m.e.a6(0)
m.l(new C.eoz(m))
t=d.d
s=B.S(x.N,x.Y)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.eox(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.eoA(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.I)(r),++u){p.$2(o,new C.eoB(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.eoC(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bl.j(0.1),g=B.m(16),f=B.K(A.bl.j(0.35),A.r,1)
if(m.x)j=B.A(B.a([D.fys,A.bc,B.E(B.c(m.Q,l,l,l,l,l,l,A.Bs,l,l,l),1)],x.p),A.l,l,A.e,A.h,0,l,l)
else if(k==null)j=D.h__
else{w=B.E(B.c(k.a,l,l,l,l,l,l,A.LP,l,l,l),1)
v=x.p
w=B.a([B.A(B.a([w,B.c(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fJD,l,l,l)],v),A.l,l,A.e,A.h,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.D(A.r7,B.c(u,l,l,l,l,l,l,D.fMv,l,l,l),l))
w.push(A.cQ)
w.push(B.c(k.b,l,l,l,l,l,l,A_.FF,l,l,l))
u=k.e
if(u.length!==0){t=A.aQ.j(0.12)
s=B.m(10)
w.push(B.p(l,B.c(u,l,l,l,l,l,l,D.fPc,l,l,l),A.f,l,l,new B.o(t,l,l,s,l,l,A.m),l,l,l,A.hz,A.cu,l,l,l))}w.push(A.aj)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
t=B.c(t,l,l,l,l,l,l,A.mc,l,l,l)
q=u[r]
s=s?A.c:A.aF
w.push(new B.D(A.Hz,new B.c2(A.aK,A.e,A.h,A.B,l,A.p,l,0,B.a([t,A.ba,new B.bu(1,A.b8,B.c(q,l,l,l,l,l,l,new B.G(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.I)(j),++p){o=j[p]
t=A.bl.j(0.3)
s=new B.aP(12,12)
s=B.p(l,B.c(o.a,l,l,l,l,l,l,A.WM,l,l,l),A.f,l,l,new B.o(t,l,l,new B.bb(s,s,s,s),l,l,A.m),l,l,l,l,A.fZ,l,l,l)
t=A.c.j(0.07)
q=new B.aP(12,12)
A.d.u(w,B.a([A.N,new B.bK(A.a9,l,l,s,l),A.at,B.p(l,B.c(o.b,l,l,l,l,l,l,D.fV5,l,l,l),A.f,l,l,new B.o(t,l,l,new B.bb(q,q,q,q),l,l,A.m),l,l,l,l,A.bR,l,l,l)],v))}if(m.ax)w.push(D.eGg)
j=B.cc(B.x(w,A.B,l,A.e,A.h,0,A.p),A.t,m.ch,A.y,l,l,l,l,l,A.ah)}w=x.p
g=B.x(B.a([B.akp(B.p(l,j,A.f,l,new B.aX(0,1/0,0,i),new B.o(h,l,f,g,l,l,A.m),l,l,l,D.bFG,A.ep,l,l,1/0),A.aZ,A.ib),B.E(C.huO(m.gXD(),l,l,m.e),1)],w),A.l,l,A.e,A.h,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new E.e2("Ask about it",i,new C.eoH(m),l,A.bl,l),new E.e2("Invent something new",!i,new C.eoI(m),l,A.bl,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dCp[p]
i.push(new E.e2(n,!1,new C.eoJ(m,n),l,A.bl,l))}f.push(new E.fj(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.diO[p]
i.push(new E.e2(r,!1,new C.eoK(m,r),l,A.bl,l))}f.push(new E.fj(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aN(l,A.M,!1,l,!0,A.t,l,B.aO(),m.f,l,l,l,l,l,2,B.bC(l,new B.b6(4,B.m(16),A.a1),l,A.eX,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kz,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.al,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.eoL(m,k),l,!1,l,l,!1,l,!0,l,A.ae,l,l,l,l,l,l,l,l,l,l,l,A.ds,!0,A.a7,l,A.ao,l,A.WB,l,l),1)
h=m.at
v=h&&j?D.bVL:A.eg
j=h&&j?"Ask":"Invent"
f.push(B.A(B.a([i,A.aa,new E.fJ(v,j,new C.eoM(m,k),A.bl,l)],w),A.l,l,A.e,A.h,0,l,l))
return E.lX(A.bl,A.ff,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.x(f,A.l,l,A.e,A.P,0,A.p))}}
C.Hd.prototype={}
C.vH.prototype={}
C.XK.prototype={
R(){return new C.aHp(A.J,A.J,A.aA,B.aR(x.S),$,A.bH,0,B.a([],x.X),null,null)}}
C.aHp.prototype={
gb08(){var w,v,u,t=this,s=D.Jl[t.cx],r=D.TV[t.cy],q=D.Ei[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.e7(w,w.r,B.a3(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.aCR[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cF(p,0,new C.eDP())},
ga4q(){return D.Jl[this.cx].d/this.gb08()},
gaS3(){return 0.1*(D.Jl[this.cx].d/0.9)/D.TV[this.cy].d},
a_(){this.a3()
this.mn()
C.cmO("rocket_lander").bE(new C.eE8(this),x.k)},
cbl(){var w=this
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
if(m.as!=="flying"){m.l(new C.eE9())
return}w=D.u_[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.i.D(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.r(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga4q()
v=v.a7(0,new B.r(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaS3())}if(m.dy){t=m.r
v=v.aI(0,t.aO(0,t.gcL()*6*D.aET[m.d]))}t=m.r=m.r.a7(0,v.aO(0,d))
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
p=D.Ei[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b4M("rocket_lander",B.J(["unlocked",t],x.N,x.z))
C.K_("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga4q()/(D.u_[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.i.a5(m.ga4q()/(D.u_[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
G.dH(80,"",500,0,0.6,"noise")
B.fW()}}if(m.Q&&m.x>0&&A.o.F(A.i.bc(m.CW*20),2)===0)G.dH(90,"",70,0,0.12,"noise")
m.l(new C.eEa())},
aib(d,e,f,g,h){var w,v=null,u=B.c(d,v,v,v,v,v,v,D.fM_,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new E.e2(e[w].a,f.$1(w),new C.eDR(this,g,w),v,h,v))
return new B.D(A.eA,B.x(B.a([u,A.cQ,B.c_(A.bI,s,A.br,v,6,6)],t),A.B,v,A.e,A.h,0,A.p),v)},
bJW(d){var w,v,u,t,s=this,r=null,q=s.ga4q()/(D.u_[s.d].b/9.81*0.28)>=1,p=A.i.S(1/s.gaS3()),o=D.aET[s.d],n=B.m(24),m=d.c,l=B.K(m.j(0.6),A.r,1)
m=B.a([B.c("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.at,B.c(d.d+" Gravity here: "+B.v(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.acY,r,r,r),A.S,s.aib("ENGINE: "+D.Jl[s.cx].b,D.Jl,new C.eDG(s),new C.eDH(s),A.cW),s.aib("FUEL TANK: "+D.TV[s.cy].b,D.TV,new C.eDI(s),new C.eDJ(s),A.bf),s.aib("LANDING GEAR: "+D.Ei[s.db].b,D.Ei,new C.eDK(s),new C.eDL(s),A.aH),s.aib("EXTRAS (tap to add)",D.aCR,new C.eDM(s),new C.eDN(s),A.bl)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.hic)
o=(q?A.bf:A.c1).j(0.14)
w=B.m(12)
v=A.i.a5(s.gb08(),2)
u=A.i.a5(s.ga4q()/(D.u_[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.p(r,B.c("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.i.S(D.Ei[s.db].d*100)+".",r,r,r,r,r,r,D.fMF,r,r,r),A.f,r,r,new B.o(o,r,r,w,r,r,A.m),r,r,r,A.hz,A.bR,r,r,r))
m.push(A.S)
m.push(new B.bK(A.z,r,r,new E.fJ(A.p3,"Launch",new C.eDO(s),A.bf,r),r))
return B.at(B.p(r,B.cc(B.x(m,A.B,r,A.e,A.P,0,A.p),A.t,r,A.y,r,r,A.bS,r,r,A.ah),A.f,r,A.mh,new B.o(D.bvd,r,l,n,r,r,A.m),r,r,r,A.bR,r,r,r,r),r,r,r)},
b1l(d,e,f,g){var w=null,v=f?A.cW:A.c.j(0.1),u=B.m(18),t=B.K(A.aT,A.r,1)
return B.n0(A.j5,B.p(w,B.V(d,A.c,w,w,w,30),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,62,w,w,w,w,w,g),w,new C.eDD(e),new C.eDE(e),w,w,w,w,new C.eDF(e))},
b1k(d,e,f){return this.b1l(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cf(new C.eE1(s,D.u_[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.u_[w].a:"\ud83d\udd12"
o.push(new E.e2(v,s.d===w,new C.eE2(s,w),r,D.u_[w].c,r))}v=B.a([s.b1k(F.asj,new C.eE3(s),s.y),A.bc,s.b1l(A.vw,new C.eE4(s),s.Q,130),A.bc,s.b1k(A.QS,new C.eE5(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?A.aH:A.c.j(0.1)
t=B.m(18)
A.d.u(v,B.a([A.bc,B.aA(r,B.p(r,D.c_4,A.f,r,r,new B.o(u,r,B.K(A.aT,A.r,1),t,r,r,A.m),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eE6(s),r,r,r,r,r,r,!1,A.a4)],p))}return E.lX(A.cW,A.ff,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.x(B.a([new E.fj(o,"WORLD",r),B.A(v,A.l,r,A.bb,A.h,0,r,r)],p),A.l,r,A.e,A.P,0,A.p))}}
C.blb.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=this.b,l=D.u_[m.d],k=a1.a,j=a1.b,i=0+k,h=0+j,g=$.T(),f=B.L(),e=l.c,d=B.ap(I.a0y,e,0.25)
d.toString
f.san(new B.a8(A.aX,A.b1,A.x,B.a([F.aj8,d],x.O),n,n).az(0,new B.a5(0,0,i,h)))
a0.aE(new B.a5(0,0,i,h),f)
w=new B.e3()
w.cT(5)
for(v=0;v<70;++v){i=w.ai()
h=w.ai()
f=w.ai()
d=new B.ar(A.U,A.R,A.X,A.Y,A.W)
d.r=A.c.j(0.2+w.ai()*0.5).gp(0)
a0.O(new B.r(i*k,h*j*0.8),f*1.2+0.3,d)}u=j*0.88
i=x.v
h=B.a([],i)
t=new B.aH(g.r,A.ak,n,n,h)
t.E(new B.aZ(0,u+14))
s=new B.e3()
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
q=B.bZ(new B.r(m.ax*k,u+10),8,m.ay*k)
g=B.bw(q,A.jJ)
e=B.L()
e.r=A.bj.gp(0)
a0.aq(g,e)
e=B.bw(q.cs(2),A.pi)
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
a0.js(0,m.w)
k=m.as
if(k==="crashed"){m=B.L()
m.r=A.cW.j(0.6).gp(0)
m.y=Z.Pz
a0.O(A.J,34,m)
f.restore()
return}if(m.Q&&m.x>0&&k==="flying"){k=h.r
p=new B.aH(k,A.ak,n,n,B.a([],i))
p.E(new B.aZ(-8,18))
p.E(new B.aq(0,44+Math.sin(m.CW*40)*8))
p.E(new B.aq(8,18))
p.E(new B.bA())
m=B.L()
m.r=A.aQ.gp(0)
a0.af(p,m)
k=new B.aH(k,A.ak,n,n,B.a([],i))
k.E(new B.aZ(-4,18))
k.E(new B.aq(0,32))
k.E(new B.aq(4,18))
k.E(new B.bA())
m=B.L()
m.r=A.c.gp(0)
a0.af(k,m)}m=h.r
o=new B.aH(m,A.ak,n,n,B.a([],i))
o.E(new B.aZ(0,-26))
o.E(new B.ck(14,-10,11,18))
o.E(new B.aq(-11,18))
o.E(new B.ck(-14,-10,0,-26))
o.E(new B.bA())
k=B.L()
k.san(F.avf.az(0,D.fpW))
a0.af(o,k)
k=B.L()
k.r=A.aH.gp(0)
a0.O(H.w3,5,k)
k=new B.aH(m,A.ak,n,n,B.a([],i))
k.E(new B.aZ(-11,6))
k.E(new B.aq(-20,20))
k.E(new B.aq(-11,18))
k.E(new B.bA())
j=B.L()
j.r=A.aC.gp(0)
a0.af(k,j)
i=new B.aH(m,A.ak,n,n,B.a([],i))
i.E(new B.aZ(11,6))
i.E(new B.aq(20,20))
i.E(new B.aq(11,18))
i.E(new B.bA())
m=B.L()
m.r=A.aC.gp(0)
a0.af(i,m)
f.restore()},
aD(d){return!0}}
C.aPr.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b6()
this.bC()}}
C.bC0.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bBI()}}
C.aVH.prototype={}
C.a5f.prototype={}
C.be3.prototype={}
C.Wb.prototype={
R(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.eB(["skin"],x.N),o=new Float32Array(0)
return new C.aFQ(w,v,u,t,s,r,q,new B.cB(null,x.A),p,D.MS,D.MS,A.aA,A.cV,o,new Int32Array(0),$,A.bH,0,B.a([],x.X),null,null)}}
C.aFQ.prototype={
a_(){var w=this
w.a3()
w.mn()
w.as=new C.c91(w.gckE())
new C.dTn(w).$0()
return},
t(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a1(0)
v.d=null}this.bAM()},
ckF(d){var w,v=this
if(v.c==null)return
w=J.a2(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.fc(0,B.J(["t","init","data",$.hF6],x.N,x.z))
v.at=!0
v.ay=""
v.aC5()
break
case"parts":v.l(new C.dSY(v))
break
case"pick":v.l(new C.dSZ(v,d))
break
case"shot":v.ak4(B.v(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+B.v(w.h(d,"text")))
if(v.c!=null&&!v.ax)v.l(new C.dT_(v))
break}},
aC5(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.aAG[q.cx]
v=new C.dT0()
u=q.ch
u=B.B(u,B.a3(u).k("ci.E"))
A.d.fd(u)
t=x.N
s=B.J(["layers",u,"skinMode",q.CW,"tone","#"+B.v(v.$1(w.b))+B.v(v.$1(w.c))+B.v(v.$1(w.d)),"sel",q.cy,"bpm",A.i.S(q.k4),"spin",q.go],t,x.cK)
r=A.V.au(s,null)
if(r===q.ay)return
q.ay=r
v=q.as
if(v!=null){u=B.S(t,x.z)
u.n(0,"t","state")
u.u(0,s)
v.fc(0,u)}},
ak4(d){return this.cC4(d)},
cC4(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ak4=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cJ.aK(A.a.aV(d,A.a.cd(d,",")+1))
w=6
return B.b(B.ay4(B.a([B.cJm(r,"image/png","body.png")],x.fH),null,"Made in NGMY Core Protocol"),$async$ak4)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.L(x.q).f.T(I.aWs)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ak4,v)},
aBu(d){var w=d.b
if(w==="skin")return this.CW>0
return this.ch.q(0,w)},
mE(d){var w,v=this
if(v.d==null)return
w=(v.k3+=d)*v.k4/60
if(v.ok&&v.ch.q(0,"organ")&&A.i.bc(w)!==A.i.bc(v.p1)){E.Ya("kick",0,0.4)
v.Vh(170,new C.dTo())}v.p1=w
return},
afG(d){var w,v,u,t,s=this
s.l(new C.dT1(s,d))
if(d==null){s.fy=D.MS
s.fr=1
w=s.as
if(w!=null)w.fc(0,B.J(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.U(w).k("X<1>")
u=B.B(new B.X(w,new C.dT2(d),v),v.k("M.E"))
t=A.d.gG(u).b
if(t!=="skin"&&!s.ch.q(0,t)){s.ch.I(0,t)
if(s.CW===2)s.CW=1}s.aC5()
w=s.as
if(w!=null)w.fc(0,B.J(["t","focus","group",d],x.N,x.z))
s.id=0
s.cEC(t,d)
return},
cEC(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){E.Ya("kick",0,0.8)
this.Vh(260,new C.dT3())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")G.dH(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.Vh(w*70,new C.dT4(this))
else if(A.a.q(e,"intestine")||e==="Stomach")G.dH(110,"",360,0.7,0.3,"saw")
else E.hjU("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":G.dH(210+e.length*4,"",80,0.6,0.55,"tri")
G.dH(2400,"",20,0,0.3,v)
break
case"muscle":G.dH(70,"",150,1,0.6,"sine")
break
case"vessel":G.dH(300,"",380,0.4,0.22,v)
E.Ya("kick",0,0.3)
break
default:E.hjU("organic",2+A.o.F(e.length,6),200,0.4)}},
cJn(d){this.l(new C.dT6(this,d))},
b1E(){var w,v,u,t,s,r,q,p=this,o=B.aR(x.N)
for(w=p.d.e,v=w.length,u=p.ch,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
if(p.aBu(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.I(0,s.a)}q=B.B(o,o.$ti.k("ci.E"))
w=q.length
if(w===0)return
p.p3=q[p.RG.av(w)]
p.R8=""},
c0Z(d){var w,v,u=this
u.id=0
if(u.p2&&u.p3!=null){if(d==null)return
w=d===u.p3
u.l(new C.dSV(u,w,d))
v=x.t
C.K_("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.Vh(1100,new C.dSW(u))
return}if(d==null){if(u.cy!=null)u.afG(null)
return}u.afG(d)},
c4B(d,e){var w,v=this,u=null,t=B.m(18),s=B.K(A.c5.j(0.5),A.r,1)
if(v.p2){w=v.p3
w=B.c(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p4+"\n"+v.R8,u,u,u,u,u,u,D.fHX,u,u,u)}else if(d==null||e==null)w=D.fXj
else{w=x.p
w=B.A(B.a([B.E(B.x(B.a([B.c(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.ht,u,u,u),A.cQ,B.c(e.b,u,u,u,u,u,u,A_.FF,u,u,u)],w),A.B,u,A.e,A.P,0,A.p),1),B.aI(u,u,u,u,D.c1M,u,u,u,new C.dSX(v),u,u,u,u,"Back to the whole body",A.co)],w),A.B,u,A.e,A.h,0,u,u)}return B.p(u,w,A.f,u,u,new B.o(I.ZL,u,s,t,u,u,A.m),u,u,u,u,U.anH,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:D.dOs.h(0,g)
i.aC5()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.dtY
u=v.length
t=i.ch
s=0
for(;s<v.length;v.length===u||(0,B.I)(v),++s){r=v[s]
if(i.aBu(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.q(w,q))w.push(q)}v=x.p
u=B.a([B.aI(h,h,h,h,I.p5,h,h,h,new C.dTd(i),h,h,h,h,"Share",h)],v)
q=B.a([],v)
p=i.as
if((p==null?h:p.b!=null)===!0){p=p.b
q.push(p==null?A.bK:B.C8(h,A.qg,p))}p=i.ax
o=p?0:1
q.push(new B.dw(p,B.xL(B.p(A.z,B.x(D.dE1,A.l,h,A.e,A.P,0,A.p),A.f,h,h,D.b9E,h,h,D.hKW,h,h,h,h,h),A.aZ,A.nc,o),h))
q=B.x(B.a([B.E(new B.an(A.a0,h,A.b4,A.t,q,h),1),new B.D(F.ano,i.c4B(g,f),h)],v),A.l,h,A.e,A.h,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){n=D.dkA[s]
o=n.a
m=o==="skin"
if(m){l=i.CW
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=n.b
o=m?i.CW>0:t.q(0,o)
p.push(new E.e2(l,o,new C.dTe(i,n),n.c,A.c5,h))}p=B.a([new E.fj(p,h,h)],v)
if(!i.p2&&w.length!==0){o=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.I)(w),++s){k=w[s]
o.push(new E.e2(k,k===i.cy,new C.dTf(i,k),h,A.aQ,h))}p.push(new E.fj(o,"FIND",h))}if(t.q(0,"organ")){o=i.k4
p.push(E.j9(A.c1,""+A.i.S(o)+" beats/min","Heart rate",180,40,new C.dTg(i),o))}if(i.CW>0&&t.a===0){o=B.a([],v)
for(j=0;j<5;++j)o.push(new E.Go(D.aAG[j],i.cx===j,new C.dTh(i,j),!1,h))
p.push(new E.fj(o,"SKIN",h))}o=i.go
m=i.p2
l=m?"Quiz on":"Quiz"
v=B.a([new E.e2("Spin",o,new C.dTi(i),D.ari,A.aH,h),new E.fJ(A.nk,"Reset view",new C.dTj(i),A.c,h),new E.e2(l,m,new C.dTk(i),A.IF,A.aQ,h)],v)
if(t.q(0,"organ"))v.push(new E.e2("Heartbeat sound",i.ok,new C.dTl(i),T.p2,A.c1,h))
p.push(new E.fj(v,h,h))
return E.lX(A.c5,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.x(p,A.l,h,A.e,A.P,0,A.p))}}
C.aOw.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b6()
this.bC()}}
C.aOx.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bAL()}}
C.c91.prototype={
kU(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aK(e,"</script","<\\/script")
v=$.hLT
$.hLT=v+1
u="ngmy-body-viewer-"+v
$.xH()
$.qd().pp(u,new C.c92(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fI(v,"message",new C.c93(t),!1,x.gA)
t.b=u},
fc(d,e){var w,v
try{w=this.c
if(w!=null){w=B.RY(w.contentWindow)
if(w!=null)J.akd(w,e,"*")}}catch(v){}}}
C.yW.prototype={}
C.Dj.prototype={}
C.o_.prototype={}
C.beR.prototype={}
C.Wi.prototype={
R(){var w=x.N,v=x.y,u=x.S
return new C.aFS(B.S(w,x.a2),B.a([],x.cB),B.S(w,v),B.S(w,v),B.S(w,u),A.aA,A.J,A.J,B.aR(u),$,A.bH,0,B.a([],x.X),null,null)}}
C.aFS.prototype={
a_(){var w=this
w.a3()
w.mn()
w.aeD()
$.aU.U$.push(new C.dV3(w))},
aeD(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aeD=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aB(),$async$aeD)
case 6:q=e.ps("ngmy_circuit_passed_v1")
r=q==null?A.M:q
if(s.c!=null)s.l(new C.dUI(s,r))
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
return B.i($async$aeD,v)},
af_(d){return this.c8Q(d)},
c8Q(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$af_=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.I(0,d)
u=3
w=6
return B.b(B.aB(),$async$af_)
case 6:r=f
q=s.cx
p=B.a3(q).k("kp<ci.E,n>")
q=B.B(new B.kp(q,new C.dUL(),p),p.k("M.E"))
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
return B.i($async$af_,v)},
aA1(d,e,f,g){var w="c"+this.y++,v=new C.Dj(w,e,f,g)
this.d.n(0,w,v)
return v},
mU(d,e,f){return this.aA1(0,e,f,0)},
adX(d,e){var w
if(D.AO.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a7(0,new B.r(-36,w))},
uq(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aWg(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fe$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.dr(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.ea(m,D.d1O[A.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.uq(p,0)&&n.uq(p,1)
break
case"or":p=q.a
o=n.uq(p,0)||n.uq(p,1)
break
case"xor":p=q.a
o=n.uq(p,0)!==n.uq(p,1)
break
case"nand":p=q.a
o=!(n.uq(p,0)&&n.uq(p,1))
break
case"nor":p=q.a
o=!(n.uq(p,0)||n.uq(p,1))
break
case"not":o=!n.uq(q.a,0)
break
default:o=n.uq(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bUq(){return this.aWg(null)},
mE(d){var w,v,u,t,s,r,q,p,o,n=this
n.bUq()
if(!n.ax)return
for(w=n.d,w=new B.ba(w,B.a3(w).k("ba<2>")).gae(0),v=new B.eR(w,new C.dV4()),u=n.f,t=n.w,s=0;v.C();){r=w.gP(0).a
if(u.h(0,r)===!0){q=n.fe$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fe$)
o=s+1
G.dH(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
aA2(d){var w=this
w.d.a6(0)
A.d.a6(w.e)
w.f.a6(0)
w.r.a6(0)
w.cy=null},
mo(d,e){var w=this.x
return new B.r(d*w.a,e*w.b)},
awa(d){var w=this
if(w.x.A(0,A.aA)){$.aU.U$.push(new C.dUG(w,d))
return}w.l(new C.dUH(w,d))},
cEV(d){this.l(new C.dUM(this,d,$.bJ6()[d]))},
cdI(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bJ6()[a0]
v=d.d
u=B.a3(v).k("ba<2>")
t=u.k("X<M.E>")
s=t.k("M.E")
r=B.B(new B.X(new B.ba(v,u),new C.dUB(),t),s)
A.d.b_(r,new C.dUC())
q=B.B(new B.X(new B.ba(v,u),new C.dUD(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.l(new C.dUE(d,w))
return}u=d.r
p=B.dE(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dH(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.h3(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aWg(0)
h=m.h(0,A.d.gG(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.lx(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aL(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a6(0)
u.u(0,p)
d.l(new C.dUF(d,o,a0))},
aB_(d){var w,v,u,t,s=this.d,r=B.a3(s).k("ba<2>")
s=B.B(new B.ba(s,r),r.k("M.E"))
r=B.U(s).k("dy<1>")
s=new B.dy(s,r)
s=new B.bR(s,s.gJ(0),r.k("bR<aj.E>"))
w=d.a
r=r.k("aj.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cnb(d){var w,v,u,t,s,r=this.d,q=B.a3(r).k("ba<2>")
r=B.B(new B.ba(r,q),q.k("M.E"))
q=B.U(r).k("dy<1>")
r=new B.dy(r,q)
r=new B.bR(r,r.gJ(0),q.k("bR<aj.E>"))
w=d.a
v=d.b
q=q.k("aj.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c4u(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.dr(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.AO.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.adX(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.y(p,o)
s=l}}}return t},
bTa(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.adX(p,o)
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
cdK(d){var w,v,u,t=this,s=t.aB_(d)
if(s!=null){w=t.d.h(0,s)
w.toString
B.f3()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.n(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
G.dH(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.l(new C.dUN())
return}u=t.bTa(d)
if(u!=null)t.l(new C.dUO(t,u))
else t.l(new C.dUP(t))},
ayP(d){return this.c7N(d)},
c7N(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$ayP=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.aB_(d)
if(s==null){w=1
break}B.jD()
t.l(new C.dUK(t,s))
case 1:return B.h(u,v)}})
return B.i($async$ayP,v)},
bFF(d){if(this.x.A(0,A.aA))return
this.l(new C.dUA(this,d,A.cV))
B.f3()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bJ6()[g]
g=x.p
v=B.a([B.aI(h,h,h,h,B.V(i.ax?T.p2:A0.tV,A.ab,h,h,h,21),h,h,h,new C.dUY(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.m(16)
s=A.cw.j(0.14)
r=B.K(A.cw.j(0.5),A.r,1)
q=B.a([B.c("Challenge: "+w.a,h,h,h,h,h,h,D.fH4,h,h,h),B.c(w.b,h,h,h,h,h,h,A.X_,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.D(A.kL,B.c(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.bf:A.f1,h,h,h,h,h,h,h,h,12,h,h,A.D,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.p(h,B.A(B.a([B.E(B.x(q,A.B,h,A.e,A.h,0,A.p),1),B.bI(D.h87,h,i.gcdH(),B.bp(A.cw,h,h,h,h,h,h,h,h,h,h,A.co))],g),A.l,h,A.e,A.h,0,h,h),A.f,h,h,new B.o(s,h,r,t,h,h,A.m),h,h,h,V.Pa,D.bGp,h,h,1/0))}u.push(B.E(B.cf(new C.dUZ(i)),1))
if(f!=null){t=B.m(14)
s=A.c.j(0.06)
r=f.b
u.push(B.p(h,B.c(D.AO.h(0,r).a+": "+D.AO.h(0,r).e,h,h,h,h,h,h,Al.ux,h,h,h),A.f,h,h,new B.o(s,h,h,t,h,h,A.m),h,h,h,A.a1J,A.bR,h,h,1/0))}u=B.x(u,A.l,h,A.e,A.h,0,A.p)
t=B.a([],g)
for(s=D.AO.gdS(D.AO),s=s.gae(s);s.C();){r=s.gP(s)
q=new B.aP(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ax(o.j(0.5),1,A.r,-1)
t.push(B.aA(h,B.p(h,B.x(B.a([B.V(p.b,o,h,h,h,20),A.bt,B.c(p.a,h,h,h,h,h,h,D.aYu,h,h,h)],g),A.l,h,A.e,A.P,0,A.p),A.f,h,h,new B.o(n,h,new B.bE(m,m,m,m),new B.bb(q,q,q,q),h,h,A.m),h,h,h,A.f7,A.HB,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dV_(i,r),h,h,h,h,h,h,!1,A.a4))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dyP[l]
s.push(new E.fJ(A.QT,k.b,new C.dV0(i,k),A.cw,h))}s.push(new E.fJ(I.xk,"Clear",new C.dV1(i),A.c1,h))
r=B.a([],g)
for(j=0;q=$.bJ6(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?A.ea:A.m2
o=i.ay
n=i.cx.q(0,j)?A.bf:A.bu
r.push(new E.e2(q.a,o===j,new C.dV2(i,j),p,n,h))}return E.lX(A.cw,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.x(B.a([new E.fj(t,"PARTS",h),new E.fj(s,"TRY",h),new E.fj(r,"TASKS",h)],g),A.l,h,A.e,A.P,0,A.p))}}
C.bf8.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3=a6.a,a4=a6.b
$.T()
w=B.L()
w.r=D.aho.gp(0)
a5.aE(new B.a5(0,0,0+a3,0+a4),w)
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
i=a3.adX(l,o.c)
h=s.h(0,n)===!0
n=$.T()
g=B.a([],r)
f=new B.aH(n.r,A.ak,a2,a2,g)
g.push(new B.aZ(j,k))
f.ac()
n=i.a
e=Math.max(40,Math.abs(n-j)*0.5)
d=i.b
d=new B.i4(j+e,k,n-e,d,n,d)
g.push(d)
n=f.f
if(n!=null)d.aj(n)
f.ac()
if(h){n=new B.ar(A.U,A.R,A.X,A.Y,A.W)
n.b=A.ac
n.c=9
n.r=A.bu.j(0.28).gp(0)
n.y=O.oT
a5.af(f,n)}n=new B.ar(A.U,A.R,A.X,A.Y,A.W)
n.b=A.ac
n.c=3.2
n.d=A.bG
n.r=(h?A.eG:A.bB).gp(0)
a5.af(f,n)}a0=a3.as
if(a0!=null&&q.h(0,a0)!=null){a1=q.h(0,a0).c.a7(0,D.Kw)
i=a3.at
a3=i.a
a4=a1.a
e=Math.max(40,Math.abs(a3-a4)*0.5)
r=new B.aH($.T().r,A.ak,a2,a2,B.a([],r))
w=a1.b
r.E(new B.aZ(a4,w))
s=i.b
r.E(new B.i4(a4+e,w,a3-e,s,a3,s))
s=B.L()
s.b=A.ac
s.c=3
s.r=A.ab.gp(0)
a5.af(r,s)}for(a3=new B.dr(q,q.r,q.e);a3.C();)this.cdJ(a5,a3.d)},
cdJ(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.AO.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.bZ(a0.c,64,64)
s=B.bw(t,A.k2)
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
p.san(new B.bU(A.z,0.5,A.x,g,0,B.a([e.c.j(0.6),A.L],x.O),g,g).az(0,B.bY(a0.c,52)))
d.O(q,52,p)}q=s.eI(A.cN)
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
l=v===!0?F.p0:D.bWj}else l=e.b
k=C.hlJ(B.lx(l.a),30,A.c,l.b,g,A.D)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a4(d,v.aI(0,new B.r(p/2,q.gb4(q)/2)))
j=C.hlJ(e.a,10.5,A.c,g,g,A.D)
j.a4(d,a0.c.a7(0,new B.r(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.hlJ(f,9,u?A.eG:A.bX,g,g,A.u)
i.a4(d,a0.c.a7(0,new B.r(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b2j(d,w.adX(a0,h),o)
this.b2j(d,a0.c.a7(0,D.Kw),o)},
b2j(d,e,f){var w
$.T()
w=B.L()
w.r=D.aho.gp(0)
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
C.aOB.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b6()
this.bC()}}
C.bBL.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bAQ()}}
C.OF.prototype={
R(){return new C.aG8(B.ml(0,null,null))}}
C.Lw.prototype={
a9(){return"_UnfoldStyle."+this.b}}
C.Bi.prototype={}
C.aG8.prototype={
a_(){this.a3()
B.bN(A.pO,C.iCt(),x.H)},
cdQ(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcr(0).at
v.toString
w.f=v}w.l(new C.e0d(w,e))},
c6r(){var w=this
w.e.t()
w.e=B.ml(w.f,null,null)
w.l(new C.e0c(w))},
t(){this.e.t()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null,s=t&&B.Q(d).ax.a===A.dh?A.c:A.c7
return B.pa(t,B.c7(v,s,t?new C.bvD(w.e,w.gcdP(w),new C.e0e(d),v):new C.aKt(u,new B.bg(u.b,x.W)),v,!1,!1,v,!1),new C.e0f(w,u),x.K)}}
C.bxi.prototype={}
C.bvD.prototype={
b2k(d,e,f){var w=null,v=B.c(d,w,w,w,w,w,w,B.l(w,w,f?A.bD:A.c,w,w,w,w,w,w,w,w,12.5,w,w,A.u,w,w,!0,w,1.6,w,w,w,w,w,w),w,w,w)
return new B.D(U.a28,B.x(B.a([v,A.bt,B.c(e,w,w,w,w,w,w,B.l(w,w,f?A.cy:A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.B,w,A.e,A.h,0,A.p),w)},
B(d){var w,v,u,t=this,s=null,r=B.Q(d).ax.a===A.dh,q=B.aF(d,A.dK,x.w).w,p=B.aI(s,s,s,s,B.V(A.eC,r?A.bD:A.ab,s,s,s,20),s,s,D.hLo,t.e,s,s,s,s,s,s)
if(r)w=new B.o(A.c,s,s,B.m(14),A.Jo,s,A.m)
else{w=B.a([A.aH.j(0.22),A.aH.j(0.06)],x.O)
v=B.m(14)
w=new B.o(s,s,B.K(A.aH.j(0.75),A.r,1.6),v,B.a([new B.aa(0,A.H,A.aH.j(0.22),A.J,8)],x.V),new B.a8(A.ay,A.aD,A.x,w,s,s),A.m)}v=B.c("\ud83e\uddea Core Protocol",s,s,s,s,s,s,B.l(s,s,r?A.bD:A.c,s,s,s,s,s,s,s,s,15,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)
u=x.p
w=B.A(B.a([p,B.E(B.at(B.p(s,B.x(B.a([v,B.c("Play, make things, keep them.",s,s,s,s,s,s,B.l(s,s,r?A.cy:A.aR,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)],u),A.l,s,A.e,A.P,0,A.p),A.f,s,s,w,s,s,D.hLt,s,A6.aoe,s,s,s),s,s,s),1),A.uq],u),A.l,s,A.e,A.h,0,s,s)
v=t.b2k("STUDIOS","Play, make things, and keep what you make",r)
$.bJ7()
return B.bo(!1,B.x(B.a([B.E(B.wm(0,s,A.t,t.c,A.y,s,s,s,s,s,!1,s,A.ah,!1,B.a([new B.nX(new B.R(8,q.r.b+6,8,4),new B.mn(w,s),s),new B.mn(v,s),new B.nX(A.ic,B.Ql(new B.pd(new C.fgg(d),9,!0,!0,!0,0,B.tz(),s),D.aWh),s),new B.mn(t.b2k("SCENES","Each one is a studio too: change the style, colours and words",r),s),new B.nX(D.bGz,B.Ql(new B.pd(new C.fgh(t),6,!0,!0,!0,0,B.tz(),s),D.aWh),s)],u)),1)],u),A.l,s,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!1)}}
C.ah2.prototype={
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m.d
if(B.Q(d).ax.a===A.dh){w=B.m(20)
v=(A.o.ao(o.c,3)&1)===0
u=B.a8c(v?A.aH:A.bl,20)
v=v?A.aH:A.bl
return B.aG(!1,A.a3,!0,n,B.aM(!1,w,!0,B.eK(B.x(B.a([new B.Wg(v,44,m.c,n,n),A.N,B.c(m.a,n,2,A.a2,n,n,n,D.fNo,A.K,n,n),A.cQ,B.c(m.b,n,2,A.a2,n,n,n,D.fQj,A.K,n,n)],x.p),A.l,n,A.bb,A.h,0,A.p),n,u,n,A.Dd,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}w=B.m(20)
v=B.m(20)
u=B.ap(L.mn,l,0.3)
u.toString
t=x.O
u=B.a([u,D.akI],t)
s=B.K(l.j(0.6),A.r,1.2)
r=x.V
q=B.a([new B.aa(-4,A.H,l.j(0.22),A.J,14)],r)
p=B.ap(l,A.v,0.45)
p.toString
t=B.a([l,p],t)
r=B.a([new B.aa(0,A.H,l.j(0.5),A.J,12)],r)
return B.aG(!1,A.a3,!0,n,B.aM(!1,w,!0,B.eK(B.x(B.a([B.p(n,B.V(m.c,A.c,n,n,n,24),A.f,n,n,new B.o(n,n,n,n,r,new B.a8(A.ay,A.aD,A.x,t,n,n),A.a6),n,44,n,n,n,n,n,44),A.N,B.c(m.a,n,2,A.a2,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,10.5,n,n,A.u,n,1.15,!0,n,0.5,n,n,n,n,n,n),A.K,n,n),A.cQ,B.c(m.b,n,2,A.a2,n,n,n,B.l(n,n,A.c.j(0.6),n,n,n,n,n,n,n,n,9.5,n,n,n,n,1.2,!0,n,n,n,n,n,n,n,n),A.K,n,n)],x.p),A.l,n,A.bb,A.h,0,A.p),n,new B.o(n,n,s,v,q,new B.a8(A.ay,A.aD,A.x,u,n,n),A.m),n,A.Dd,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}}
C.afS.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.d,j=k.d,i=B.Q(d).ax.a===A.dh,h=(A.o.ao(this.c,3)&1)===0?A.aH:A.bl,g=B.m(20)
if(i)w=B.a8c(h,20)
else{w=B.m(20)
v=B.ap(L.mn,A.d.gG(j),0.24)
v.toString
v=B.a([v,D.akI],x.O)
v=new B.o(l,l,B.K(A.d.gG(j).j(0.35),A.r,1),w,B.a([new B.aa(0,A.H,A.v.j(0.4),A.cz,12)],x.V),new B.a8(A.ay,A.aD,A.x,v,l,l),A.m)
w=v}v=x.p
u=B.a([],v)
for(t=k.e,s=x.V,r=x.O,q=0;q<3;++q){p=q===2?0:4
o=new B.aP(6,6)
if(i){n=B.ap(h,A.c,0.1)
n.toString
n=B.a([n,B.Wh(h,!0)[1]],r)}else n=B.a([A.d.gG(j),A.d.gal(j)],r)
m=i?l:B.a([new B.aa(0,A.H,A.v.j(0.45),A.aaf,0)],s)
u.push(B.p(l,B.V(t[q],A.c,l,l,l,11),A.f,l,l,new B.o(l,l,l,new B.bb(o,o,o,o),m,new B.a8(A.a5,A.a9,A.x,n,l,l),A.m),l,17,l,new B.R(q*4,0,(2-q)*4,p),l,l,l,l))}u=B.x(u,A.l,l,A.e,A.P,0,A.p)
if(i)t=A.bD
else{t=B.ap(A.d.gG(j),A.d.gal(j),0.4)
t.toString}t=B.c(k.b,l,2,A.a2,l,l,l,B.l(l,l,t,l,l,l,l,l,l,l,l,10.5,l,l,A.u,l,1.2,!0,l,0.6,l,l,l,l,l,l),A.K,l,l)
return B.aG(!1,A.a3,!0,l,B.aM(!1,g,!0,B.eK(B.x(B.a([new B.a4(58,l,u,l),A.S,t,A.at,B.V(A.DS,i?B.Wh(h,!0)[1]:A.d.gG(j),l,l,l,18)],v),A.l,l,A.bb,A.h,0,A.p),l,w,l,A.Dd,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,this.e,l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.ai)}}
C.RE.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ap(A.d.gal(i),A.v,0.62)
h.toString
w=k.c
v=k.d
h=B.ao(-8,new B.bQ(new B.o(h,j,j,B.m(22),j,j,A.m),A.bm,j,j),j,j,2,2,8,j)
u=B.m(22)
t=k.y
s=x.V
r=B.a([new B.aa(0,A.H,A.v.j(0.55),A.Kt,26),new B.aa(-6,A.H,A.d.gG(i).j(0.1+0.4*t),A.J,30)],s)
q=B.m(22)
p=B.ap(A.d.gG(i),A.c,0.14)
p.toString
o=A.d.gG(i)
n=A.d.gal(i)
i=B.ap(A.d.gal(i),A.v,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bT(0,new B.bQ(new B.o(j,j,j,j,j,new B.a8(A.ay,A.aD,A.x,B.a([p,o,n,i],m),D.dF5,j),A.m),A.bm,j,j),0,0,0),B.ao(j,new B.bQ(new B.o(j,j,j,j,j,new B.a8(A.aX,A.b1,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.m),A.bm,j,j),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bT(0,B.b4(j,j,j,new C.bwG(i,j),A.aA),0,0,0))
i=A.c.j(0.16)
p=B.K(A.c.j(0.5),A.r,1.4)
s=B.a([new B.aa(0,A.H,A.c.j(0.25*t),A.J,14)],s)
s=B.p(j,B.V(k.f,A.c,j,j,j,28),A.f,j,j,new B.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=B.a([B.c(k.r,j,j,j,j,j,j,D.fJt,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.u(p,B.a([A.at,B.c(i,j,1,A.a2,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a8,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.Ln)
p.push(B.p(j,j,A.f,j,j,new B.o(A.c.j(0.28),j,j,B.m(3),j,j,A.m),j,5,j,j,j,j,j,w*0.42))
m.push(new B.D(A.hd,B.A(B.a([s,A.ew,B.E(B.x(p,A.B,j,A.e,A.P,0,A.p),1)],l),A.l,j,A.e,A.h,0,j,j),j))
i=k.x
if(i>0)m.push(B.bT(0,new B.dw(!0,B.el(j,A.v.j(A.i.D(i*0.6,0,0.7)),!0),j),0,0,0))
i=B.m(22)
m.push(B.bT(0,new B.dw(!0,new B.bQ(new B.o(j,j,B.K(A.c.j(0.3),A.r,1.2),i,j,j,A.m),A.bm,j,j),j),0,0,0))
return new B.a4(w,v,new B.an(A.a0,j,A.ad,A.f,B.a([h,B.bT(0,new B.bQ(new B.o(j,j,j,u,r,j,A.m),A.bm,B.by(q,new B.an(A.a0,j,A.ad,A.t,m,j),A.aq),j),0,0,0)],l),j),j)}}
C.bwG.prototype={
a4(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a5(r,-10,s,w)
u=d.c
J.bs(u.save())
u.translate(v.gbD().a,v.gbD().b)
d.js(0,0.35)
t=B.bZ(A.J,(w- -10)*1.6,s-r)
$.T()
s=B.L()
s.san(new B.a8(A.a5,A.a9,A.x,B.a([A.L,A.c.j(0.3),A.L],x.O),null,null).az(0,t))
d.aE(t,s)
u.restore()},
aD(d){return d.b!==this.b}}
C.bwa.prototype={
B(d){var w=null,v=B.m(22),u=B.a([D.bt2,D.ajL],x.O),t=this.e,s=B.K(A.d.gG(t).j(0.4),A.r,1.2),r=B.a([new B.aa(0,A.H,A.v.j(0.5),A.kQ,24)],x.V),q=B.m(22),p=A.d.gG(t)
return new B.a4(this.c,this.d,new B.bQ(new B.o(w,w,s,v,r,new B.a8(A.ay,A.aD,A.x,u,w,w),A.m),A.bm,B.by(q,B.b4(B.at(B.V(A.jF,A.d.gG(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.bdM(p,w),A.aA),A.aq),w),w)}}
C.bdM.prototype={
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
C.aKt.prototype={
R(){return new C.aKu(new B.cB(null,x.A),null,null)}}
C.aKu.prototype={
gr1(){var w,v=this,u=v.d
if(u===$){w=B.br(null,D.bDM,null,1,null,v)
w.cX(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
gJU(){var w,v=this,u=v.e
if(u===$){w=B.br(null,A.fM,null,1,null,v)
w.fm(0,!0)
v.e!==$&&B.bF()
v.e=w
u=w}return u},
gaA3(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gcdM(){var w=this.w
if(w===$){w=B.B(this.a.c.d,x.G)
this.w=w}return w},
gaZw(){var w=this.x
if(w===$){w=B.B(this.a.c.e,x.Z)
this.x=w}return w},
gb_j(){var w=this.y
if(w===$){w=B.B(this.a.c.f,x.N)
this.y=w}return w},
gbbs(){var w=this.z
if(w===$){w=B.B(this.a.c.r,x.N)
this.z=w}return w},
a_(){this.a3()
var w=this.gr1()
w.dq()
w.e0$.I(0,this.gcED())},
cEE(){var w,v,u,t,s,r,q,p=this,o=p.gr1().x
o===$&&B.d()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as&&p.ch<0){switch(p.gaA3().a){case 0:w=D.og
break
case 1:w=D.vO
break
case 2:w=D.a6H
break
case 3:w=D.og
break
case 4:w=D.dqq
break
case 5:w=D.vO
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.af_)r=0.09
else r=s===D.af0?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){G.dH(260+90*v,"",260,1.6,0.18,"tri")
u=D.cfj[v]
E.mI("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.K_("bell",D.cob,1400,0.35)}}p.ax=o},
t(){this.gr1().t()
this.gJU().t()
this.bCF()},
a0e(){var w=this
w.gr1().d48(0,B.dv(0,0,0,A.i.S(11e3/w.Q),0,0))
w.l(new C.ffX(w))},
cph(){this.gr1().bQ(0)
this.l(new C.ffW(this))},
a0d(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$a0d=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:if(r.ch>=0){w=1
break}j=$.aU.bk$.x.h(0,r.f)
i=j==null?null:j.gbg()
if(!(i instanceof B.ot)||i.fy==null){w=1
break}h=r.as
j=r.gr1()
j.bQ(0)
g=r.gJU()
g.bQ(0)
r.l(new C.ffM(r))
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
return B.b(E.ajh(24*q,20,new C.ffN(r,n,q,p,o),n,o,new C.ffO(r),p),$async$a0d)
case 7:l=a3
if(J.ad(l)===0){e=B.bd("empty")
throw B.Y(e)}e=r.a.c
d=B.ag("[^a-z0-9]+",!0,!1,!1,!1)
k=B.aK(e.b.toLowerCase(),d,"_")
w=8
return B.b(E.aTw(l,k),$async$a0d)
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
break}r.l(new C.ffP(r))
g.fm(0,!0)
j.sp(0,0)
if(h)r.a0e()
r.c.L(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.c(m,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a0d,v)},
ag5(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$ag5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gb_j(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){q=t[r]
l.push(new B.au(new B.bc(q,A.b7,A.aP),$.az()))}m=B.a([],m)
for(t=u.gbbs(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){p=t[r]
m.push(new B.au(new B.bc(p,A.b7,A.aP),$.az()))}o=B.B(u.gaZw(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bV(L.mn,null,new C.ffV(u,l,m,o),t,!0,!0,!0,A.m8,!1,!1,x.H),$async$ag5)
case 2:l=B.B(l,x.bO)
A.d.u(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.V$=$.az()
n.W$=0}return B.h(null,v)}})
return B.i($async$ag5,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gaA3(),e=h.a.c,d=e.b,a0=h.gcdM(),a1=new C.Bi(f,d,e.c,a0,h.gaZw(),h.gb_j(),h.gbbs())
e=B.ap(A.d.gG(a0),A.d.gal(a0),0.4)
e.toString
f=x.p
w=B.a([B.aI(g,g,g,g,B.V(h.at?T.p2:A0.tV,A.ab,g,g,g,21),g,g,g,new C.fg4(h),g,g,g,g,"Sound",g),B.aI(g,g,g,g,D.c5x,g,g,g,h.gcdO(),g,g,g,g,"Edit words and pictures",g),B.aI(g,g,g,g,I.p5,g,g,g,new C.fg5(h,a2),g,g,g,g,"Share",g)],f)
v=B.a([B.cb(h.gJU(),new C.fg6(h,a1),g),B.cf(new C.fg7(h,a1))],f)
u=h.as
t=u?h.gcpg():h.gcdR()
u=u?D.bVv:A.tS
s=B.ap(A.d.gG(a0),A.d.gal(a0),0.4)
s.toString
t=B.A(B.a([B.aI(g,g,g,g,B.V(u,s,g,g,g,34),g,g,g,t,g,g,g,g,g,A.co),B.E(B.cb(h.gr1(),new C.fg8(h,a2,a1),g),1),B.aI(g,g,g,g,D.c1C,g,g,g,new C.fg9(h),g,g,g,g,"Replay",A.co)],f),A.l,g,A.e,A.h,0,g,g)
s=h.Q
u=A.i.a5(s,1)
r=B.ap(A.d.gG(a0),A.d.gal(a0),0.4)
r.toString
s=E.j9(r,u+"x","Speed",2.5,0.4,new C.fga(h),s)
u=B.a([],f)
for(q=0;q<6;++q){p=D.dBZ[q]
o=h.r
if(o===$)o=h.r=h.a.c.a
r=B.ap(A.d.gG(a0),A.d.gal(a0),0.4)
r.toString
u.push(new E.e2(p.b,o===p.a,new C.fgb(h,p),p.c,r,g))}r=B.a([],f)
for(n=x.G,q=0;q<10;++q){m=D.cfJ[q]
o=h.w
if(o===$){o=B.B(h.a.c.d,n)
h.w=o}l=A.d.gG(o).A(0,A.d.gG(m))?34:28
o=h.w
if(o===$){o=B.B(h.a.c.d,n)
h.w=o}k=A.d.gG(o).A(0,A.d.gG(m))?34:28
o=h.w
if(o===$){o=B.B(h.a.c.d,n)
h.w=o}j=A.d.gG(o).A(0,A.d.gG(m))?A.c:A.aT
o=h.w
if(o===$){o=B.B(h.a.c.d,n)
h.w=o}i=new B.ax(j,A.d.gG(o).A(0,A.d.gG(m))?2.5:1,A.r,-1)
r.push(B.aA(g,B.p(g,g,A.f,g,g,new B.o(g,g,new B.bE(i,i,i,i),g,g,new B.a8(A.ay,A.aD,A.x,m,g,g),A.a6),g,k,g,I.and,g,g,g,l),A.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new C.fgc(h,m),g,g,g,g,g,g,!1,A.a4))}u=B.a([t,s,new E.fj(u,"STYLE",g),new E.fj(r,"THEME",g),A.aj],f)
t=h.ch
if(t>=0){s=B.m(6)
a0=B.ap(A.d.gG(a0),A.d.gal(a0),0.4)
a0.toString
u.push(new B.D(A.jX,B.x(B.a([B.by(s,B.jE(A.bx,g,a0,8,g,t,g),A.aq),A.at,B.c("Making your GIF\u2026 "+A.i.S(h.ch*100)+"%",g,g,g,g,g,g,A.nw,g,g,g)],f),A.l,g,A.e,A.h,0,A.p),g))}else{f=B.ap(A.d.gG(a0),A.d.gal(a0),0.4)
f.toString
u.push(new B.a4(1/0,g,B.dd(A.oc,g,D.hjn,h.gcdN(),B.bp(f,g,g,g,A.v,g,A.kK,g,g,g,g,g)),g))}return E.lX(e,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.e8(new B.an(A.a0,g,A.b4,A.t,v,g),h.f),d,B.x(u,A.l,g,A.e,A.P,0,A.p))},
bEP(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.og[r]
p=A.i.D((1-A.ej.aA(0,A.i.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.i.D(p/1.5707963267948966,0,1)
q=D.og[r]
n=q+0.12
m=A.i.D((a0-n)/(q+0.2-n),0,1)
n=D.og[r]
q=n-0.01
q=A.i.D((a0-q)/(n+0.03-q),0,1)
n=B.dA()
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
e.push(new B.cQ(0,r*118,0,f,f,f,new B.kY(q,new B.jb(n,f,A.aX,!0,f,new C.RE(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.og[r]
u=v-0.02
g=A.i.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gG(w)
v=D.og[r]
t=v+0.12
e.push(new B.cQ(0,r*118-3-2,0,f,f,4,new B.mV(new C.bve(u,g,1-A.i.D((a0-t)/(v+0.22-t),0,1),f),f,A.aA,f,f),f))}return new B.a4(a2,358,new B.an(A.a0,f,A.ad,A.f,e,f),f)},
bW1(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.vO[r]
p=A.r0.aA(0,A.i.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.vO[r]
m=q+0.15
l=A.i.D((a0-m)/(q+0.25-m),0,1)
m=D.vO[r]
q=m-0.03
q=A.i.D((a0-q)/(m+0.01-q),0,1)
m=B.dA()
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
g=new C.RE(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dA()
k.fI(3.141592653589793)
k=new B.jb(k,f,A.z,!0,f,new C.bwa(a2,108,w,f),f)}e.push(new B.cQ(0,r*130,0,f,f,f,new B.kY(q,new B.jb(m,f,A.z,!0,f,k,f),f),f))}return new B.a4(a2,378,new B.an(A.a0,f,A.ad,A.f,e,f),f)},
cJR(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a6H[w]
l.push(A.cp.aA(0,A.i.D((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bT(0,B.b4(n,n,n,new C.byM(d.d,l,D.aCp,m,C.bvC(e,0.4,0.62),f,C.bvC(e,0.45,0.7),n),A.aA),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.hmg(g,w)
q=D.aCp[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cQ(r,s-q*m*p+12,n,n,t,n,new B.kY(o,B.V(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.hmg(g,w)
r=D.a6H[w]
q=r+0.15
v.push(new B.cQ(s,l,n,n,t,n,new B.kY(A.i.D((e-q)/(r+0.25-q),0,1),B.c(u[w],n,n,n,n,n,n,A.Xb,A.K,n,n),n),n))}return new B.a4(g,m+90,new B.an(A.a0,n,A.ad,A.f,v,n),n)},
bLd(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cp.aA(0,C.bvC(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bT(0,B.at(B.dU(B.b4(f,f,f,new C.buE(A.d.gG(a1),C.bvC(a3,0,0.2),a4,f),new B.av(a5*0.95,70)),D.eAx),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.i.D((a3-l)/(0.12+m-l),0,1)
j=A.dQ.aA(0,A.i.D((o-0.7)/0.3,0,1))
l=B.dA()
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
w.push(new B.y(o,new B.cQ(0,0,0,0,f,f,new B.cn(A.z,f,f,new B.kY(k*(0.45+0.55*o),B.dU(new B.jb(l,f,A.z,!0,f,new C.RE(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.r(n*a5*0.34,-o*18)),f),f),f)))}A.d.b_(w,new C.ffJ())
A.d.u(a0,new B.O(w,new C.ffK(),x.fR))
return new B.a4(a5,330,new B.an(A.a0,f,A.ad,A.f,a0,f),f)},
cdL(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.vO[q]
o=A.i.D((a2-p)/(p+0.22-p),0,1)
n=A.nC.aA(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.vO[q]
m=A.i.D((a2-m)/(m+0.02-m),0,1)
l=D.aEx[q]
k=B.dA()
k.n6(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.k0(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.vO[q]
g=h+0.1
g=A.i.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cQ(0,0,0,0,e,e,new B.cn(A.z,e,e,new B.kY(m,B.dU(new B.jb(k,e,A.z,!0,e,new C.RE(d,92,w,p,j,i,0,g*s,h,e),e),new B.r(0,l)),e),e),e))
l=D.vO[q]
h=l+0.02
f=A.i.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cQ(0,0,0,0,e,e,new B.cn(A.z,e,e,B.dU(new B.mV(new C.bes(w,f,q,e),e,new B.av(r,212),e,e),new B.r(0,D.aEx[q])),e),e))}return new B.a4(a4,330,new B.an(A.a0,e,A.ad,A.f,a0,e),e)},
bHP(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.r(-b0,-150),new B.r(b0,-40),D.eAC],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.og[r]
p=A.i.D((a8-q)/(q+0.2-q),0,1)
o=A.cp.aA(0,p)
q=D.aEH[r]
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
f=B.dA()
d=f.a
d.$flags&2&&B.ak(d)
d[11]=0.001
f.n6(l*h+D.dv0[r]*o)
f.fI(l*0.9)
h=0.55+0.45*o
f.k0(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cQ(0,0,0,0,a3,a3,new B.cn(A.z,a3,a3,new B.kY(g,B.dU(new B.jb(f,a3,A.z,!0,a3,new C.RE(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.r(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.og[r]
i=q+0.17
a2=A.i.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aEH[r]
a6.push(new B.cQ(0,0,0,0,a3,a3,new B.cn(A.z,a3,a3,B.dU(new B.mV(new C.buG(A.d.gG(w),a2,a3),a3,new B.av(a4,30),a3,a3),new B.r(0,q+48-4)),a3),a3))}}return new B.a4(b0,330,new B.an(A.a0,a3,A.ad,A.f,a6,a3),a3)}}
C.bve.prototype={
a4(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a5(w-v,0,w+v,e.b)
q=B.bw(u,A.hF)
$.T()
t=B.L()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.y=O.oT
d.aq(q,t)
t=B.bw(u,A.hF)
q=B.L()
q.r=A.c.j(s).gp(0)
d.aq(t,q)},
aD(d){return d.c!==this.c||d.d!==this.d}}
C.buE.prototype={
a4(d,e){var w,v,u=this.c,t=B.bZ(e.eo(A.J),e.b*u,e.a*u)
$.T()
u=B.L()
u.b=A.ac
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.y=Z.Pz
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
C.bes.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.eo(A.J),h=this.c,g=A.cp.aA(0,h)
$.T()
w=B.L()
w.b=A.ac
v=1-h
w.c=5*v
u=this.b
w.r=A.d.gG(u).j(0.6*v).gp(0)
d.O(i,40+g*e.a*0.42,w)
t=new B.e3()
t.cT(this.d*17+3)
for(w=40*h*h*3,s=i.a,r=i.b,h=1-h*0.6,q=0;q<26;++q){p=t.ai()*3.141592653589793*2
o=(40+t.ai()*110)*g
n=Math.cos(p)
m=Math.sin(p)
l=t.ai()
k=new B.ar(A.U,A.R,A.X,A.Y,A.W)
j=(q&1)===0?A.d.gG(u):A.c
k.r=j.j(A.i.D(v,0,1)).gp(0)
d.O(new B.r(s+n*o*1.6,r+(m*o+w)),(2+l*3)*h,k)}},
aD(d){return!0}}
C.buG.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o=e.eo(A.J)
for(w=e.a,v=e.b,u=this.b,t=this.c,s=0;s<2;++s){r=A.i.D(t-s*0.18,0,1)
if(r<=0)continue
q=B.bZ(o,v*(0.3+r*0.9),w*(0.5+r*0.7))
$.T()
p=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p.b=A.ac
p.c=2
p.r=u.j((1-r)*0.7).gp(0)
d.c1(q,p)}},
aD(d){return d.c!==this.c}}
C.byM.prototype={
a4(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2=c0.e,c3=c2+36,c4=d2.a,c5=c4*0.23,c6=c5*0.34,c7=c6*0.85,c8=-c6*0.5,c9=c3-4,d0=new B.a5(0,c9,0+c4,c9+60)
$.T()
c9=B.L()
w=c0.b
v=x.O
c9.san(new B.a8(A.aX,A.b1,A.x,B.a([A.d.gG(w).j(0.18),A.L],v),c1,c1).az(0,d0))
d1.aE(d0,c9)
c9=B.L()
c9.r=A.c.j(0.18).gp(0)
c9.c=1
d1.ah(new B.r(0,c3),new B.r(c4,c3),c9)
for(c9=c0.w,u=c9>0,t=(c5-16)/3,s=t-5,r=0.6+0.3*c0.r,q=c0.f,p=c3-14,o=x.v,n=c3+c8,m=c0.d,l=c3-6,k=c5+c7+8,j=l+16,i=c0.c,h=c9<1,g=d1.c,f=0;f<3;++f){e=i[f]
if(e<=0)continue
d=C.hmg(c4,f)
a0=m[f]*c2*e
a1=d-4
a2=$.T()
a3=new B.ar(A.U,A.R,A.X,A.Y,A.W)
a3.r=A.v.j(0.5).gp(0)
a3.y=A.nh
d1.c1(new B.a5(a1,l,a1+k,j),a3)
a3=c3-a0
a1=d+c5
a4=new B.a5(d,a3,a1,a3+a0)
a5=new B.ar(A.U,A.R,A.X,A.Y,A.W)
a6=B.ap(A.d.gG(w),A.c,0.1)
a6.toString
a5.san(new B.a8(A.aX,A.b1,A.x,B.a([a6,A.d.gal(w)],v),c1,c1).az(0,a4))
d1.aE(a4,a5)
a2=a2.r
a5=B.a([],o)
a7=new B.aH(a2,A.ak,c1,c1,a5)
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
a5=new B.ar(A.U,A.R,A.X,A.Y,A.W)
a5.r=B.ap(A.d.gal(w),A.v,0.5).gp(0)
d1.af(a7,a5)
a5=B.a([],o)
b1=new B.aH(a2,A.ak,c1,c1,a5)
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
a2=new B.ar(A.U,A.R,A.X,A.Y,A.W)
a2.r=B.ap(A.d.gG(w),A.c,0.45).gp(0)
d1.af(b1,a2)
b2=new B.ar(A.U,A.R,A.X,A.Y,A.W)
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
b0=B.bw(new B.a5(b7,a6,b7+s,a9),A.hF)
$.T()
b8=new B.ar(A.U,A.R,A.X,A.Y,A.W)
b8.r=(b5?A.c.j(r):A.v.j(0.22)).gp(0)
d1.aq(b0,b8)}}if(u&&h){a2=c3-a0*c9-14
b9=new B.a5(d,a2,a1,a2+28)
J.bs(g.save())
g.clipRect(B.hS(a4),$.lD()[1],!0)
$.T()
a2=new B.ar(A.U,A.R,A.X,A.Y,A.W)
a2.san(new B.a8(A.aX,A.b1,A.x,B.a([A.L,A.c.j(0.4),A.L],v),c1,c1).az(0,b9))
d1.aE(b9,a2)
g.restore()}}},
aD(d){return!0}}
C.aQh.prototype={
b0(){this.b8()
this.b6()
this.dU()},
t(){var w=this,v=w.bd$
if(v!=null)v.a8(0,w.gdR())
w.bd$=null
w.a2()}}
C.a2i.prototype={
a9(){return"_Role."+this.b}}
C.qK.prototype={}
C.rr.prototype={}
C.Dn.prototype={}
C.a0g.prototype={}
C.agR.prototype={}
C.a2v.prototype={
ga0(d){return this.d}}
C.Dy.prototype={}
C.adH.prototype={}
C.adZ.prototype={}
C.afW.prototype={}
C.bl8.prototype={
a4z(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
G.dH(d,"",e,g,h,f)},
bcB(d,e,f){return this.a4z(d,e,f,0,0.55)},
aEU(d,e,f,g){return this.a4z(d,e,f,0,g)},
bcC(d,e,f,g){return this.a4z(d,e,f,g,0.55)},
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
amf(d,e,f,g){var w="n"+this.ay++,v=new C.rr(w,e,f,g)
this.a.n(0,w,v)
this.b3()
return v},
tl(d,e,f){return this.amf(0,e,f,0)},
X(d,e){var w=this
w.a.X(0,e)
A.d.br(w.b,new C.duA(e))
A.d.br(w.c,new C.duB(e))
w.b3()},
bgt(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.nn.h(0,v.b).c===D.yu)return!1
w=this.b
if(A.d.aR(w,new C.dux(d,e)))return!1
w.push(new C.Dn(d,e))
this.b3()
return!0},
c5g(d){var w
if(d.b==="beat")return D.con[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.av(500)
case 2:return 1400+w.av(2200)
default:return 450+w.av(2000)}},
aIu(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.aEY[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.Dy(u,t,j.ax,90))
w.push(new C.Dy(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ai()*3.141592653589793*2
v.push(new C.a2v(u,new B.r(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.bcB(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ai()*3.141592653589793*2
p=100+w.ai()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ap(t,A.c,w.ai()*0.5)
m.toString
v.push(new C.a2v(u,new B.r(o*p,n*p),m,3+w.ai()*4.5,1000+w.av(700),j.ax))}j.f.push(new C.Dy(u,t,j.ax,120))
j.aEU(120,200,"noise",0.5)
j.bcB(261.63*Math.pow(2,([7,12,16,19][w.av(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.Dy(u,t,j.ax,230))
w.push(new C.Dy(u,t,j.ax+160,160))
w.push(new C.Dy(u,t,j.ax+320,100))
j.bcC(180+j.at.av(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.adH(u,new B.r((w.ai()-0.5)*220,-260-w.ai()*180),t,j.ax))
j.bcC(300+w.av(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ai()*3.141592653589793*2
j.w.push(new C.adZ(u,u.a7(0,new B.r(Math.cos(q),Math.sin(q)).aO(0,260+w.ai()*200)),t,j.ax))
j.a4z(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fW()
j.a4z(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.afW(u,D.aEj[v],t,j.ax))
j.aEU(261.63*Math.pow(2,([0,5,9,12][j.at.av(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aEU(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.ckr[A.o.F(w,3)]
for(k=1;k<=3;++k)j.czz(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new B.eR(w,new C.duy(d));v.C();)j.aDm(w.gP(0),j.ax+D.cwV[A.o.F(g.d,4)])
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
case"chance":s=j.at.av(100)<D.cOm[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new B.eR(w,new C.duz(d));v.C();)j.aDm(w.gP(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.xP(w,0,v-700)},
czz(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.a0g(e,"~"+d))},
aDm(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.agR(d.a,v,e,w))
u.push(new C.a0g(w,v))},
a8m(d){var w,v,u,t,s,r,q,p,o=this
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
else if(o.ax>=q){o.aIu(r)
u.n(0,r,o.ax+o.c5g(s))}}w=o.c
v=B.U(w).k("X<1>")
q=B.B(new B.X(w,new C.duC(o),v),v.k("M.E"))
if(q.length!==0){A.d.br(w,new C.duD(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.I)(q),++t){u=q[t].b
if(A.a.Y(u,"~")){p=A.a.aV(u,1)
for(u=A.d.gae(v),r=new B.eR(u,new C.duE(p));r.C();)o.aDm(u.gP(0),o.ax)}else o.aIu(u)}}A.d.br(o.d,new C.duF(o))
A.d.br(o.e,new C.duG(o))
A.d.br(o.f,new C.duH(o))
A.d.br(o.w,new C.duI(o))
A.d.br(o.x,new C.duJ(o))
A.d.br(o.r,new C.duK(o))
o.b3()},
vT(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
for(v=this.a,v=new B.dr(v,v.r,v.e),u=x.N,t=x.K;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(B.J(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=B.a([],x.E)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,B.I)(t),++o){n=t[o]
v.push(B.a([n.a,n.b],r))}return A.V.au(B.J(["nodes",m,"edges",v],u,x.ew),null)},
UV(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.V.aP(0,d,null))
k.a6(0)
for(o=x.j,n=J.aQ(o.a(J.t(w,"nodes"))),m=k.a;n.C();){v=n.gP(n)
u=B.v(J.t(v,"k"))
if(!D.nn.am(0,u))continue
t=B.v(J.t(v,"id"))
m.n(0,t,new C.rr(t,u,new B.r(B.dJ(J.t(v,"x"))*k.cy.a,B.dJ(J.t(v,"y"))*k.cy.b),A.i.M(B.dJ(J.t(v,"p")))))
s=B.ca(B.aK(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aQ(o.a(J.t(w,"edges"))),n=k.b;o.C();){r=o.gP(o)
q=B.v(J.t(r,0))
p=B.v(J.t(r,1))
if(m.am(0,q)&&m.am(0,p))n.push(new C.Dn(q,p))}k.b3()
return!0}catch(l){return!1}},
cZu(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a6(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.rr(n,r,new B.r(q*p.a,o*p.b),s))
l.b3()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bgt(w[m.a],w[m.b])}},
ga0(d){return this.cy}}
C.GZ.prototype={}
C.XJ.prototype={
R(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aHo(new C.bl8(B.S(w,x.f3),v,u,t,s,r,q,p,o,B.S(w,n),B.S(w,n),B.S(w,n),B.S(w,n),A.cV,A.L,A.aA,$.az()),A.bH,A.J,A.J,A.M,null,null)}}
C.aHo.prototype={
aev(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$aev=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.aB(),$async$aev)
case 6:q=n.kj(m.t(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.l(new C.eD9(s))
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
return B.i($async$aev,v)},
abo(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$abo=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.l(new C.eCZ(s))
u=3
w=6
return B.b(B.aB(),$async$abo)
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
return B.i($async$abo,v)},
bRi(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a3(n).k("ba<2>")
v=""+n.a+"|"+o.length+"|"+new B.ba(n,w).cF(0,0,new C.eD0())+"|"+A.d.cF(o,0,new C.eD1())
if(v===p.ch)return p.CW
u=new C.eD4()
t=x.s
s=B.a([],t)
r=new C.eD5(p,s,u)
for(n=new B.ba(n,w).gae(0),w=new B.eR(n,new C.eD2());w.C();){q=n.gP(0)
if(!A.d.aR(o,new C.eD3(q)))s.push(B.v(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.cV(s,0,B.dz(5,"count",x.S),x.N).df(0)},
a_(){var w,v=this
v.a3()
v.aev()
v.d.db=v.ay
w=v.q9(new C.eDz(v))
w.fS(0)
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
w.bBG()},
ae0(d){return this.c4H(d)},
c4H(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$ae0=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.aB(),$async$ae0)
case 6:q=m.aV(l.t(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.UV(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.b_L(A.d.gG(D.aDL))
if(s.c!=null)s.l(new C.eD8())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ae0,v)},
b_L(d){this.d.cZu(0,d.c,d.d)
this.F5()},
F5(){var w=this.as
if(w!=null)w.a1(0)
this.as=B.cC(A.lY,new C.eCV(this))},
aA4(d){var w,v,u,t,s=this.d.a,r=B.a3(s).k("ba<2>")
s=B.B(new B.ba(s,r),r.k("M.E"))
r=B.U(s).k("dy<1>")
s=new B.dy(s,r)
s=new B.bR(s,s.gJ(0),r.k("bR<aj.E>"))
w=d.a
r=r.k("aj.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cnc(d){var w,v,u,t,s,r=this.d.a,q=B.a3(r).k("ba<2>")
r=B.B(new B.ba(r,q),q.k("M.E"))
q=B.U(r).k("dy<1>")
r=new B.dy(r,q)
r=new B.bR(r,r.gJ(0),q.k("bR<aj.E>"))
w=d.a
v=d.b
q=q.k("aj.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c4v(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.dr(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
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
cdU(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hLU(new B.r(n.a+36,n.b+0),new B.r(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cHt(d){var w,v,u,t,s,r,q=this,p=q.aA4(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.f3()
u=v.b
if(u==="button"){w.aIu(p)
return}if(q.r)return
t=D.nn.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.rU)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.b3()
q.F5()
return}if(q.r)return
r=q.cdU(d)
if(r!=null){w=q.d
A.d.cJ(w.b,r)
w.b3()
q.F5()}},
coy(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cnc(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.aA4(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aI(0,d)}},
coz(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b3()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.r(A.i.D(d.a+s.y.a,46,t.a-46),A.i.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b3()}}},
b5n(){var w,v,u=this
if(u.z!=null){w=u.c4v(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bgt(v,w)}else v=!1
if(v){B.k9()
u.F5()}u.z=null
u.d.b3()}else if(u.x!=null){if(u.at)u.F5()
u.x=null}},
aeK(d){return this.c7O(d)},
c7O(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$aeK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.aA4(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jD()
p=t.c
p.toString
w=3
return B.b(B.bV(L.mn,null,new C.eDb(q),p,!0,!0,!1,A.m8,!1,!1,x.y),$async$aeK)
case 3:if(f===!0){r.X(0,s)
t.F5()}case 1:return B.h(u,v)}})
return B.i($async$aeK,v)},
cdS(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.tl(0,d,new B.r(v.a*(0.25+u.ai()*0.5),v.b*(0.2+u.ai()*0.55)))
B.f3()
this.F5()},
aiK(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aiK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bV(L.mn,null,new C.eDd(),s,!0,!0,!0,A.m8,!1,!1,x.es),$async$aiK)
case 2:t=e
if(t!=null)u.b_L(t)
return B.h(null,v)}})
return B.i($async$aiK,v)},
ag6(d){var w=0,v=B.j(x.H),u=this,t
var $async$ag6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.eCY(),t,null,!0,!0,x.y),$async$ag6)
case 2:if(f===!0){u.d.a6(0)
u.F5()}return B.h(null,v)}})
return B.i($async$ag6,v)},
B(d){var w=this,v=null,u=B.a([B.akp(w.r?new B.bK(A.a5,v,v,new B.D(A.HU,B.hx(D.c_m,D.h0E,new C.eDx(w),v),v),v):w.cdV(),A.aZ,A.j2),B.E(B.cf(new C.eDy(w)),1)],x.p)
if(!w.r)u.push(w.cC7())
return B.c7(v,A.c7,B.bo(!0,B.x(u,A.l,v,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)},
bMX(){var w=null,v=new C.eD_(),u=A.v.j(0.7),t=B.m(26),s=B.K(A.bw.j(0.5),A.r,1)
return B.bT(0,B.el(B.at(B.p(w,B.cc(B.x(B.a([D.hcg,A.at,D.hk8,A.aB,v.$4(A.mw,A.bw,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(X.DO,A.cw,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.kl,A.c5,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.Qn,A.bu,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.hjq,new B.bK(A.a9,w,w,B.bM(!1,D.h9k,w,w,!0,w,w,w,this.gbMQ(),w,w),w)],x.p),A.B,w,A.e,A.P,0,A.p),A.t,w,A.y,w,w,w,w,w,A.ah),A.f,w,A.YY,new B.o(L.mn,w,s,t,w,w,A.m),w,w,w,A.f9,Aa.aox,w,w,w),w,w,w),u,!0),0,0,0)},
cdV(){var w=this,v=null,u=B.aI(v,v,v,v,Ar.nl,v,v,v,new C.eDj(w),v,v,v,v,v,v),t=w.aaP(A.DG,"How it works",new C.eDk(w),!0),s=w.ay?T.p2:A0.tV
return new B.D(D.bKM,B.A(B.a([u,D.bMs,t,w.aaP(s,"Sound",new C.eDl(w),!0),w.aaP(A.eg,"Ideas",w.gcso(),!0),w.aaP(I.xk,"Clear",w.gcdT(w),!0),w.aRm(A.fO,"Show",new C.eDm(w),!0,!0)],x.p),A.l,v,A.e,A.h,0,v,v),v)},
aRm(d,e,f,g,h){var w=null,v=h?A.bw:A.c.j(0.08),u=B.m(14),t=B.m(14),s=B.a([B.V(d,h?A.v:A.c,w,w,w,20)],x.p)
return new B.D(An.xb,B.aG(!1,A.a3,!0,u,B.aM(!1,t,!0,B.ha(new B.D(new B.R(8,8,8,8),B.A(s,A.l,w,A.e,A.P,0,w,w),w),w,e,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ai),w)},
aaP(d,e,f,g){return this.aRm(d,e,f,g,!1)},
cC7(){var w=null,v=new C.eDf(this),u=A.c.j(0.08)
return B.p(w,B.cc(B.A(B.a([v.$2("START",D.yu),v.$2("CHANGE",D.G1),v.$2("REACT",D.rU)],x.p),A.B,w,A.e,A.h,0,w,w),A.t,w,A.y,w,w,w,w,w,A.aK),A.f,w,w,new B.o(L.CA,w,new B.bE(new B.ax(u,1,A.r,-1),A.a1,A.a1,A.a1),w,w,w,A.m),w,w,w,w,D.bFI,w,w,w)},
cC8(d){var w,v,u,t,s=null,r=D.nn.h(0,d)
r.toString
w=B.m(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.K(v.j(0.5),A.r,1)
return new B.D(A.f7,B.aA(s,B.p(s,B.x(B.a([B.V(r.b,v,s,s,s,22),A.cQ,B.c(r.a,s,1,A.a2,s,s,s,D.aYu,s,s,s)],x.p),A.l,s,A.e,A.P,0,A.p),A.f,s,s,new B.o(s,s,t,w,s,new B.a8(A.aX,A.b1,A.x,u,s,s),A.m),s,s,s,s,A.hA,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eDe(this,d),s,s,s,s,s,s,!1,A.a4),s)}}
C.bl9.prototype={
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
f=$.T()
e=B.a([],p)
d=new B.aH(f.r,A.ak,b3,b3,e)
e.push(new B.aZ(i,j))
d.ac()
a0=Math.max(40,Math.abs(g-i)*0.5)
f=new B.i4(i+a0,j,g-a0,h,g,h)
e.push(f)
e=d.f
if(e!=null)f.aj(e)
d.ac()
a1=D.nn.h(0,l.b).d
a2=D.nn.h(0,k.b).d
f=new B.ar(A.U,A.R,A.X,A.Y,A.W)
f.b=A.ac
f.c=3
f.d=A.bG
e=B.a([a1.j(0.55),a2.j(0.55)],q)
h=B.rb(new B.r(i,j),new B.r(g,h))
f.san(new B.a8(A.a5,A.a9,A.x,e,b3,b3).az(0,new B.a5(h.a-2,h.b-2,h.c+2,h.d+2)))
b7.af(d,f)}for(w=b4.d,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a3=w[n]
l=o.h(0,a3.a)
k=o.h(0,a3.b)
if(l==null||k==null)continue
j=a3.c
a4=A.i.D((b5-j)/(a3.d-j),0,1)
j=l.c
i=k.c
a5=C.hLU(new B.r(j.a+36,j.b+0),new B.r(i.a-36,i.b),a4)
$.T()
i=new B.ar(A.U,A.R,A.X,A.Y,A.W)
i.r=A.c.j(0.35).gp(0)
i.y=O.oT
b7.O(a5,8,i)
i=new B.ar(A.U,A.R,A.X,A.Y,A.W)
i.r=A.c.gp(0)
b7.O(a5,4,i)}a6=b2.d.$0()
if(a6!=null&&o.h(0,a6)!=null){a7=o.h(0,a6).c.a7(0,D.Kw)
a8=b2.e.$0()
w=a8.a
t=a7.a
a0=Math.max(40,Math.abs(w-t)*0.5)
d=new B.aH($.T().r,A.ak,b3,b3,B.a([],p))
p=a7.b
d.E(new B.aZ(t,p))
j=a8.b
d.E(new B.i4(t+a0,p,w-a0,j,w,j))
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
j=new B.ar(A.U,A.R,A.X,A.Y,A.W)
j.b=A.ac
i=1-v
j.c=3.5*i+0.5
j.r=a9.b.j(i*0.9).gp(0)
b7.O(a9.a,14+a9.d*p,j)}for(w=b4.w,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){b0=w[n]
v=A.i.D((b5-b0.d)/600,0,1)
p=b0.a
j=b0.b
i=B.kX(p,j,A.eb.aA(0,v))
i.toString
j=B.kX(p,j,A.eb.aA(0,A.i.D(v-0.35,0,1)))
j.toString
$.T()
p=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p.c=5
p.d=A.bG
h=b0.c
g=B.a([h.j(0),h],q)
f=B.rb(j,i)
p.san(new B.a8(A.a5,A.a9,A.x,g,b3,b3).az(0,new B.a5(f.a-4,f.b-4,f.c+4,f.d+4)))
b7.ah(j,i,p)
p=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p.r=A.c.gp(0)
b7.O(i,6,p)
p=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p.r=h.j(0.5*(1-v)).gp(0)
p.y=A.l8
b7.O(i,12,p)}for(w=b4.e,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a3=w[n]
v=A.i.D((b5-a3.f)/a3.e,0,1)
p=a3.a
$.T()
j=new B.ar(A.U,A.R,A.X,A.Y,A.W)
j.r=a3.c.j(1-v).gp(0)
b7.O(p,a3.d*(1-0.5*v),j)}for(w=b4.r,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){k=w[n]
p=k.a
$.T()
j=new B.ar(A.U,A.R,A.X,A.Y,A.W)
i=k.c
j.r=i.j(0.35).gp(0)
j.y=A.l8
b7.O(p,11,j)
j=k.a
p=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p.san(new B.bU(Ae.BT,0.5,A.x,b3,0,B.a([A.c,i],q),b3,b3).az(0,B.bY(k.a,8)))
b7.O(j,8,p)}for(b4=b4.x,w=b4.length,n=0;n<b4.length;b4.length===w||(0,B.I)(b4),++n){a5=b4[n]
v=A.i.D((b5-a5.d)/1000,0,1)
t=1-v
b1=C.bla(a5.b,26+8*t,a5.c.j(t),b3,b3,A.u)
t=a5.a
q=b1.b
p=q.c
q=q.a.c
b1.a4(b7,new B.r(t.a-p/2,t.b-(40+60*v+q.gb4(q)/2)))}for(b4=new B.dr(o,o.r,o.e);b4.C();)b2.co4(b7,b4.d,b5)
b6.restore()},
co4(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.nn.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.i.D(1-(f-w)/520,0,1)
u=B.bZ(e.c,64,64)
t=B.bw(u,A.i6)
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
d.aq(s,r)}s=t.eI(A.cN)
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
o=C.bla(B.lx(r.a),30,A.c,r.b,j,A.D)
r=o.b
s=r.c
r=r.a.c
o.a4(d,p.aI(0,new B.r(s/2,r.gb4(r)/2)))
n=C.bla(h.a,11,A.c,j,j,A.D)
n.a4(d,e.c.a7(0,new B.r(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.aEj[A.o.F(e.d,6)]:j
h=h.c
if(h===D.rU){s=e.c.a7(0,new B.r(0,62))
r=B.L()
r.r=D.aEY[A.o.F(e.d,6)].gp(0)
d.O(s,5,r)}else if(m!=null){l=C.bla(m,9.5,A.aF,j,j,A.O)
l.a4(d,e.c.a7(0,new B.r(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bla(m,9.5,A.aF,j,j,A.O)
l.a4(d,e.c.a7(0,new B.r(-l.b.c/2,54)))}if(k.c)return
if(h!==D.yu)k.b6c(d,e.c.aI(0,D.Kw),q)
k.b6c(d,e.c.a7(0,D.Kw),q)},
b6c(d,e,f){var w
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
C.aPp.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b6()
this.bC()}}
C.es.prototype={}
C.u9.prototype={
at8(d,e,f,g){var w=this
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
C.ack.prototype={}
C.adt.prototype={}
C.a6n.prototype={
bim(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.h9()?-1:1
v=t.ai()*3.141592653589793*2
u=f*(0.3+t.ai())
s.push(new C.ack(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ai()*0.45));++r}},
ca0(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.br(w,new C.bSh())},
amf(d,e,f,g){var w="p"+this.c++,v=new C.u9(w,e,f,g)
v.at8(w,e,f,g)
this.a.push(v)
return v},
X(d,e){A.d.X(this.a,e)
A.d.br(this.b,new C.bSs(e))},
a6(d){A.d.a6(this.a)
A.d.a6(this.b)},
cQo(d,e,f,g,h){return A.d.aR(this.b,new C.bSn(e,f,g,h))},
an3(d,e,f,g){var w
if(d===f||this.cQo(0,d,e,f,g))return null
w=new C.adt(d,e,f,g)
this.b.push(w)
return w},
aDU(d){var w
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
apQ(d){return this.MS(d)&&!d.x&&d.cx>this.Az(d)},
baC(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
MS(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
cee(d){var w,v=d.b
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
vT(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.ca0(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.U(v).k("X<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.I)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.X(v,new C.bSt(a2),t).cF(0,0,new C.bSu(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.S(x.N,u)
n=new C.bSw(o)
m=B.a([],x.t)
l=new C.bSv(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.I)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.I)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.S(u,u)
f=new C.bSy(g,l,n)
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
a2.bay(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.Az(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.bay(e,d,w,!0)
a2.bTE(a4)},
bay(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.S(x.N,b3),b5=new C.bSj(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bSi(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.I)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bSl(B.S(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.I)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=B.c3(b7,0,!1,b3)
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
for(d=0;d<b7;++d)e[d]=B.c3(b7,0,!1,b3)
a0=B.c3(b7,0,!1,b3)
k.a6(0)
j.a6(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.I)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.baC(t)*(1+t.CW))
a4=b2.aDU(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.cee(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bX1(e,a0,b8)
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
bX1(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return B.c3(d,0,!1,x.i)
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
t[m]=t[m]-g*u[l][m]}}}f=B.c3(d,0,!1,x.i)
for(e=0;e<v;++e){t=u[e]
h=t[e]
s=a0[e]
f[s]=Math.abs(h)<1e-14?0:t[v]/h}return f},
bTE(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.I)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aDU(o)/a1.baC(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.Az(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bLy(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bim(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.ux(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.ux(o,"The "+$.qT().h(0,n).b+" got "+A.i.a5(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.ux(o,"More than 1.5 amps went through the "+$.qT().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.ux(o,"The regulator had to turn "+A.i.a5(o.cy,1)+" V into heat while "+A.i.S(i*1000)+" mA flowed. That is "+A.i.a5(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.ux(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.AP.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qT().h(0,n).b
l=f.b
l=l===A.i.fP(l)?""+A.i.S(l):B.v(l)
g=f.c
g=g===A.i.fP(g)?""+A.i.S(g):B.v(g)
a1.ux(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.i.a5(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.fuy.q(0,n)){m=o.fx>0?A.i.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.i.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.ux(o,"The bulb got "+A.i.a5(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.i.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.ux(o,"The LED had "+A.i.S(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.i.D(j/14,0,1)
break
case"motor":n=A.i.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.i.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.ux(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.i.D(i/1,0,1)
if(!o.x&&i>1)a1.ux(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.ux(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.i.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.ux(o,"The capacitor was charged to "+A.i.a5(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bLy(d){return A.d.aR(this.a,new C.bSg(d))},
ux(d,e){var w
d.x=!0
d.ay=e
this.bim(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bn0(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a6(0)},
aKh(d){var w=d.b
return D.aVd.q(0,w)||D.AP.am(0,w)||w==="buck"||w==="regulator"},
bjR(d){var w,v=!0
if(!this.MS(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.AP.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
Wa(d,e){var w=this.b
return new B.X(w,new C.bSA(d,e),B.U(w).k("X<1>")).gJ(0)},
rA(d){var w,v
if(d.x)return!1
w=d.b
if(D.AP.am(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bhR(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qT().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aKh(d)||i.rA(d))return null
w=i.Wa(d,0)
v=i.Wa(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.U(u).k("X<1>")
s=B.B(new B.X(u,i.gcZ1(),t),t.k("M.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.i.fP(r)?""+A.i.S(r):B.v(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.i.a5(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.AP.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.N4("battery"),o=J.aQ(t.a),t=new B.eR(o,t.b);t.C();){n=o.gP(o)
if(n.e===1.5&&n.as<=0.02&&i.Wa(n,0)+i.Wa(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.N4("switch"),o=J.aQ(t.a),t=new B.eR(o,t.b);t.C();)if(!o.gP(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qT().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.Az(k))return"The "+$.qT().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.i.a5(k.cx,2)+" amps, but it can only give about "+A.i.a5(i.Az(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.aR(u,new C.bSo(i,d))
h=q.b
h=h===A.i.fP(h)?""+A.i.S(h):B.v(h)
u=A.i.a5(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.i.a5(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.i.a5(Math.abs(d.dy),1)+" V). Try a bigger battery."},
N4(d){var w=this.a
return new B.X(w,new C.bSr(d),B.U(w).k("X<1>"))},
aJT(d){return this.N4(d).aR(0,new C.bSq(0.35))},
qj(d,e){return A.d.aR(this.a,new C.bSp(e))}}
C.al0.prototype={
a4(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.T()
w=B.L()
w.r=F.nL.gp(0)
c0.aE(new B.a5(0,0,b8,b9),w)
w=C.ijq(c1)
v=$.hUW()
if(A.o.F(w.length,2)!==0)B.bi(B.dM('"points" must have an even number of values.',b5))
u=c0.b
if(u!=null)u.ol(v)
t=v.n8()
v=c0.c
v.drawPoints($.hVQ()[0],w,t)
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
b4.cN6(c0,new B.r(n*b6+m*(42+l),o*b7),new B.r(j*b6+i*(42+h),k.d*b7),p,p===r)}u=b4.d
if(u!=null&&b4.e!=null){g=C.hZZ(u.a,u.b,c1)
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
j=new B.ar(A.U,A.R,A.X,A.Y,A.W)
j.r=F.NH.j(A.i.D(f.Q*0.45,0,0.6)).gp(0)
j.y=A.Di
c0.O(new B.r(m,l),46+14*k,j)}e=o.h(0,f.a)
if(e==null)e=1
J.bs(v.save())
v.translate(m,l)
k=A.i.D(A.nC.aA(0,A.i.D(e,0,1)),0.01,1.4)
v.scale(k,k)
b4.cp5(c0,f,f===r)
v.restore()
k=f.b
if((k==="battery"||k==="solar"||k==="crank"||k==="turbine")&&!f.x&&f.cx>w.Az(f)){j=m+0
i=l+-40
h=Math.sin(w.d*10)
d=$.T().r
a0=B.a([],n)
a1=new B.aH(d,A.ak,b5,b5,a0)
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
a0=new B.ar(A.U,A.R,A.X,A.Y,A.W)
a0.r=A.aC.j(0.65+0.35*h).gp(0)
c0.af(a1,a0)
a0=B.a([],n)
d=new B.aH(d,A.ak,b5,b5,a0)
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
h=new B.ar(A.U,A.R,A.X,A.Y,A.W)
h.b=A.ac
h.c=1.6
h.r=A.c.gp(0)
c0.af(d,h)
b4.lE(c0,"!",new B.r(j+-3,i+-8),A.c,14)}if(!f.x)j=(D.aVd.q(0,k)||D.AP.am(0,k)||k==="buck"||k==="regulator")&&!w.rA(f)&&w.Wa(f,0)+w.Wa(f,1)>0
else j=!1
if(j){m+=0
l+=-40
$.T()
j=new B.ar(A.U,A.R,A.X,A.Y,A.W)
j.r=A.as.gp(0)
c0.O(new B.r(m,l),10,j)
b4.lE(c0,"!",new B.r(m+-3,l+-8),A.v,14)}for(a8=0;a8<2;++a8){m=f.c
l=a8===0
j=l?-1:1
i=D.mF.am(0,k)?(f.ch-1)*38:0
i=m*b6+j*(42+i)
j=f.d*b7
a9=new B.r(i,j)
$.T()
m=new B.ar(A.U,A.R,A.X,A.Y,A.W)
m.r=F.nL.gp(0)
c0.O(a9,7,m)
m=new B.ar(A.U,A.R,A.X,A.Y,A.W)
m.b=A.ac
m.c=2.4
m.r=(l&&w.bjR(f)?A.c1:A.ab).gp(0)
c0.O(a9,6,m)
if(l&&w.bjR(f))b4.lE(c0,"+",new B.r(i+-4,j+-22),A.c1,13)}}for(v=w.f,s=v.length,q=0;q<v.length;v.length===s||(0,B.I)(v),++q){b0=v[q]
r=b0.a*b6+b0.c
o=b0.b*b7+b0.d
b1=new B.r(r,o)
b2=A.i.D(b0.r/0.8,0,1)
n=B.ap(M.Or,F.a0z,b2)
n.toString
m=b0.f
$.T()
l=new B.ar(A.U,A.R,A.X,A.Y,A.W)
l.r=n.gp(0)
l.c=2.4
l.d=A.bG
c0.ah(b1,new B.r(r-b0.e*0.035,o-m*0.035),l)
l=new B.ar(A.U,A.R,A.X,A.Y,A.W)
l.r=n.j(0.35*b2).gp(0)
l.y=A.PA
c0.O(b1,4.5*b2+1,l)}if(A.d.aR(u,new C.bMC())){b3=A.d.cF(u,0,new C.bMD())
$.T()
b7=B.L()
b7.r=D.bk5.j(0.05+0.09*b3*(0.5+0.5*Math.sin(w.d*22))).gp(0)
c0.aE(new B.a5(0,0,b8,b9),b7)
b7="short|"+B.v(b6)
a9=$.aQP.h(0,b7)
if(a9==null){a9=B.h_(b5,A.cK,b5,b5,b5,D.fFK,A.a7,A.cc,b5,A.e4,A.cd)
a9.nA(b6-24)
$.aQP.n(0,b7,a9)}a9.a4(c0,new B.r(12,10))}},
lE(d,e,f,g,h){var w,v=null,u=e+"|"+g.m()+"|"+B.v(h)
if($.aQP.a>300)$.aQP.a6(0)
w=$.aQP.h(0,u)
if(w==null){w=B.h_(v,A.cK,v,v,v,B.cW(v,v,v,v,v,v,v,v,v,B.l(v,v,g,v,v,v,v,v,v,v,v,h,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),e),A.a7,A.cc,v,A.e4,A.cd)
w.eL()
$.aQP.n(0,u,w)}w.a4(d,f)},
cN6(d,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.aH($.T().r,A.ak,null,null,B.a([],x.v))
e.E(new B.aZ(a0.a,a0.b))
w=C.hRO(a0,a1,a2)
e.E(new B.ck(w.a,w.b,a1.a,a1.b))
v=a2.a
u=Math.abs(v.fr)
t=a2.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ap(A.aQ,F.NH,A.i.D(p/1.2,0,1))
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
if(q){n=new B.amN(new B.v5(B.zP(e),!1,B.a([],x.l))).gG(0)
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
f=t[u].Wp(g)
j=new B.ar(A.U,A.R,A.X,A.Y,A.W)
j.r=A.c.gp(0)
d.O(f.a,2.6,j);++k}}},
a_v(d,e,f,g){var w,v,u,t
$.T()
w=B.L()
v=g?A.aX:A.a5
u=g?A.b1:A.a9
t=B.ap(e,A.v,0.3)
t.toString
w.san(new B.a8(v,u,A.x,B.a([e,f,e,t],x.O),A.Jm,null).az(0,d))
return w},
b0s(d,e,f){return this.a_v(d,e,f,!0)},
c9A(d,e){return this.a_v(d,A.bk,A.hX,e)},
ajT(d,e){var w,v,u
$.T()
w=B.L()
w.san(D.eNS.az(0,B.bY(e,4.2)))
d.O(e,4.2,w)
w=e.a7(0,D.eDa)
v=e.a7(0,D.eDj)
u=B.L()
u.r=A.cU.gp(0)
u.c=1.2
d.ah(w,v,u)},
cp5(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=4294626325,b5=4286331629,b6=4287322667,b7=4293870660,b8=$.T(),b9=B.L()
b9.san(D.caG.az(0,D.fqK))
b9.c=3.4
b9.d=A.bG
w=B.L()
w.r=A.v.j(0.45).gp(0)
w.y=O.oT
c0.c1(D.fqz,w)
if(c2){w=B.bw(D.fqI,A.k1)
v=B.L()
v.r=A.c.j(0.14).gp(0)
c0.aq(w,v)}u=C.hvZ(c1)
c0.ah(new B.r(-u,0),D.eEG,b9)
c0.ah(D.eBQ,new B.r(u,0),b9)
t=c1.x
w=c1.b
s=D.mF.am(0,w)&&c1.ch!==1
if(s){J.bs(c0.c.save())
c0.bV(0,c1.ch)}switch(w){case"battery":b2.bIf(c0,c1)
break
case"solar":r=B.bw(D.fqB,A.jJ)
c0.aq(r,b2.a_v(new B.a5(r.a,r.b,r.c,r.d),A.d0,A.bO,!1))
b8=B.L()
w=B.ap(D.bo8,A.dg,0.25+0.55*c1.f)
w.toString
v=B.ap(D.bxV,A.lV,0.3+0.4*c1.f)
v.toString
b8.san(new B.a8(A.ay,A.aD,A.x,B.a([w,v],x.O),b3,b3).az(0,D.aba))
c0.aE(D.aba,b8)
q=B.L()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(p=1;p<6;++p){b8=-34+p*68/6
c0.ah(new B.r(b8,-18),new B.r(b8,18),q)}for(p=1;p<4;++p){b8=-18+p*9
c0.ah(new B.r(-34,b8),new B.r(34,b8),q)}for(p=0;p<6;++p){b8=-34+(p+0.5)*68/6
$.T()
w=new B.ar(A.U,A.R,A.X,A.Y,A.W)
w.r=A.cD.j(0.5).gp(0)
w.c=0.6
c0.ah(new B.r(b8,-18),new B.r(b8,18),w)}b8=new B.aH($.T().r,A.ak,b3,b3,B.a([],x.v))
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
b8.r=A.eG.j(0.9).gp(0)
c0.O(D.eBU,4+4*w,b8)
break
case"crank":o=B.bw(D.fql,A.h2)
c0.aq(o,b2.b0s(new B.a5(o.a,o.b,o.c,o.d),A.bB,A.bQ))
b8=B.L()
b8.san(D.aTk.az(0,B.bY(A.J,12)))
c0.O(A.J,12,b8)
n=new B.r(Math.cos(c1.y)*22,Math.sin(c1.y)*22)
b8=B.L()
b8.r=A.cD.gp(0)
b8.c=5
b8.d=A.bG
c0.ah(A.J,n,b8)
b8=B.L()
b8.san(D.eOe.az(0,B.bY(n,7)))
c0.O(n,7,b8)
b2.ajT(c0,D.eEz)
b2.ajT(c0,D.eBE)
break
case"turbine":b8=b8.r
w=x.v
v=new B.aH(b8,A.ak,b3,b3,B.a([],w))
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
k=new B.aH(b8,A.ak,b3,b3,m)
m.push(new B.aZ(0,-2))
k.ac()
j=new B.ck(6,-14,2,-30)
m.push(j)
i=k.f
if(i!=null)j.aj(i)
k.ac()
j=new B.ck(-2,-14,0,-2)
m.push(j)
i=k.f
if(i!=null)j.aj(i)
k.ac()
j=new B.bA()
m.push(j)
m=k.f
if(m!=null)j.aj(m)
k.ac()
m=new B.ar(A.U,A.R,A.X,A.Y,A.W)
m.r=A.c.gp(0)
c0.af(k,m)
v.restore()}b8=B.L()
b8.san(D.eNV.az(0,B.bY(A.J,4.5)))
c0.O(A.J,4.5,b8)
break
case"switch":o=B.bw(D.fqt,A.pi)
b8=B.L()
b8.san(D.avb.az(0,new B.a5(o.a,o.b,o.c,o.d)))
c0.aq(o,b8)
b2.ajT(c0,D.Vk)
b2.ajT(c0,D.aO5)
h=c1.w?D.aO5:H.aNW
b8=B.L()
b8.r=A.aw.gp(0)
b8.c=6
b8.d=A.bG
c0.ah(D.Vk,h,b8)
b8=B.L()
b8.r=(c1.w?A.bf:A.bO).gp(0)
b8.c=4
b8.d=A.bG
c0.ah(D.Vk,h,b8)
b8=B.kX(D.Vk,h,0.85)
b8.toString
w=B.L()
w.r=A.aC.gp(0)
c0.O(b8,5,w)
break
case"fuse":g=B.bw(D.aU5,D.aTp)
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
c0.ah(D.aOp,D.aO3,b8)}else{b8=B.L()
b8.c=1.6
b8.r=A.bX.gp(0)
c0.ah(D.aOp,D.eF3,b8)
b8=B.L()
b8.c=1.6
b8.r=A.bX.gp(0)
c0.ah(D.eCH,D.aO3,b8)
b8=B.L()
b8.r=A.dY.gp(0)
c0.O(A.J,6,b8)}for(f=0;f<2;++f){e=B.bZ(new B.r(M.hq[f]*22,0),20,9)
c0.aq(B.bw(e,A.hr),b2.a_v(e,A.de,A.oA,!0))}break
case"pot":b8=B.L()
b8.san(D.eO5.az(0,B.bY(A.J,21)))
c0.O(A.J,21,b8)
for(l=0;l<=10;++l){d=2.356194490192345+l*3.141592653589793*1.5/10
b8=Math.cos(d)
w=Math.sin(d)
v=Math.cos(d)
m=Math.sin(d)
k=new B.ar(A.U,A.R,A.X,A.Y,A.W)
k.r=A.aF.gp(0)
k.c=1.2
c0.ah(new B.r(b8*18,w*18),new B.r(v*22,m*22),k)}b8=B.L()
b8.san(D.eNT.az(0,B.bY(A.J,13)))
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
case"resistor":a1=B.bw(D.aU5,D.aTp)
b8=B.L()
b8.san(D.cec.az(0,new B.a5(a1.a,a1.b,a1.c,a1.d)))
c0.aq(a1,b8)
b8=x.O
a2=B.J([47,B.a([B.b1(b4),B.b1(b5),A.v],b8),100,B.a([B.b1(b6),A.v,B.b1(b6)],b8),220,B.a([B.b1(b7),B.b1(b7),B.b1(b6)],b8),470,B.a([B.b1(b4),B.b1(b5),B.b1(b6)],b8),1000,B.a([B.b1(b6),A.v,B.b1(b7)],b8)],x.i,x.bF)
a3=a2.h(0,c1.r)
if(a3==null){b8=a2.h(0,100)
b8.toString
a3=b8}for(p=0;p<3;++p){b8=-14+p*9
w=new B.ar(A.U,A.R,A.X,A.Y,A.W)
w.r=a3[p].gp(0)
c0.aE(new B.a5(b8,-9,b8+4.5,9),w)}b8=B.L()
b8.r=A.aQ.gp(0)
c0.aE(D.fqW,b8)
b8=c1.r
b2.lE(c0,b8>=1000?"1k\u03a9":""+A.i.S(b8)+"\u03a9",D.eE4,A.ab,10)
break
case"bulb":w=c1.fx
if(w>0){v=B.L()
v.r=A.eG.j(0.55*w).gp(0)
v.y=A.Di
c0.O(H.w3,34,v)}o=B.bZ(D.eAz,12,18)
c0.aq(B.bw(o,A.hr),b2.a_v(o,A.bk,A.dT,!0))
for(p=0;p<3;++p){w=13+p*3.5
v=new B.ar(A.U,A.R,A.X,A.Y,A.W)
v.r=A.dJ.gp(0)
v.c=1
c0.ah(new B.r(-9,w),new B.r(9,w),v)}w=B.L()
if(t)v=A.GC
else{v=B.ap(A.dT,A.i_,c1.fx)
m=c1.fx
v=v.j(0.25+0.7*m)}if(t)m=A.GY
else{m=B.ap(A.d0,A.eG,c1.fx)
m.toString}w.san(new B.bU(A.mS,0.5,A.x,b3,0,B.a([v,m.j(0.18+0.5*c1.fx)],x.O),b3,b3).az(0,B.bY(A.ue,17)))
c0.O(A.ue,17,w)
w=B.L()
w.b=A.ac
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c0.O(A.ue,17,w)
b8=b8.r
w=x.v
m=new B.aH(b8,A.ak,b3,b3,B.a([],w))
m.E(new B.aZ(-9,-12))
m.E(new B.ck(-12,-4,-9,0))
v=B.L()
v.b=A.ac
v.c=2
v.r=A.c.j(0.45).gp(0)
c0.af(m,v)
v=B.L()
v.r=A.cE.gp(0)
v.c=1.4
c0.ah(D.eEY,D.eF_,v)
v=B.L()
v.r=A.cE.gp(0)
v.c=1.4
c0.ah(D.eCA,D.eCD,v)
w=B.a([],w)
a4=new B.aH(b8,A.ak,b3,b3,w)
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
if(t)w=A.b6
else{w=B.ap(A.d0,D.bpg,c1.fx)
w.toString}b8.r=w.gp(0)
c0.af(a4,b8)
break
case"led":w=c1.fx
if(w>0){v=B.L()
v.r=A.aC.j(0.6*w).gp(0)
v.y=D.bMf
c0.O(A.ue,30,v)}w=B.L()
w.r=A.dT.gp(0)
w.c=2.4
c0.ah(D.eF5,D.eF4,w)
w=B.L()
w.r=A.dT.gp(0)
w.c=2.4
c0.ah(D.eCJ,D.eCI,w)
b8=b8.r
w=x.v
a6=new B.aH(b8,A.ak,b3,b3,B.a([],w))
a6.E(new B.aZ(-12,8))
a6.E(new B.aq(-12,-6))
a6.E(new B.ck(0,-26,12,-6))
a6.E(new B.aq(12,8))
a6.E(new B.bA())
v=B.L()
if(t)m=A.jz
else{m=B.ap(A.ey,D.br2,c1.fx)
m.toString}if(t)k=A.l3
else{k=B.ap(A.kH,A.aC,c1.fx)
k.toString}v.san(new B.a8(A.ay,A.aD,A.x,B.a([m,k],x.O),b3,b3).az(0,D.fpO))
c0.af(a6,v)
v=B.L()
v.b=A.ac
v.c=1.2
v.r=A.jU.gp(0)
c0.af(a6,v)
v=B.L()
v.r=A.et.gp(0)
c0.aE(D.fpU,v)
w=new B.aH(b8,A.ak,b3,b3,B.a([],w))
w.E(new B.aZ(-7,-4))
w.E(new B.ck(-6,-12,0,-15))
b8=B.L()
b8.b=A.ac
b8.c=2
b8.r=A.c.j(0.5).gp(0)
c0.af(w,b8)
break
case"motor":a7=new B.a5(-28,-14,20,14)
c0.aq(B.bw(a7,A.iD),b2.b0s(a7,A.an,A.bn))
b8=B.L()
b8.r=A.cx.gp(0)
c0.aE(D.fpn,b8)
b8=B.L()
b8.r=A.cD.gp(0)
c0.aE(D.fpp,b8)
b8=c0.c
J.bs(b8.save())
b8.translate(31,0)
for(l=0;l<3;++l){J.bs(b8.save())
b8.rotate((c1.y+l*2.094)*180/3.141592653589793,0,0)
w=B.bZ(H.aNR,15,7)
v=new B.ar(A.U,A.R,A.X,A.Y,A.W)
v.r=A.cW.j(0.9).gp(0)
c0.c1(w,v)
b8.restore()}w=B.L()
w.r=A.aw.gp(0)
c0.O(A.J,3,w)
b8.restore()
b2.lE(c0,"M",D.eEy,A.aw,14)
break
case"buzzer":a8=B.bZ(A.J,42,42)
b8=B.L()
b8.san(D.eO9.az(0,a8))
c0.c1(a8,b8)
b8=B.L()
b8.r=A.v.gp(0)
c0.O(A.J,6,b8)
b8=B.L()
b8.b=A.ac
b8.c=1.4
b8.r=A.aT.gp(0)
c0.O(A.J,6,b8)
b2.lE(c0,"+",D.eEr,A.ab,12)
for(b8=b2.b,l=1;l<=3;++l){w=c1.fx
v=w>0?A.i.F(b8.d*14,5):0
v=B.bY(A.J,24+l*5+v)
m=new B.ar(A.U,A.R,A.X,A.Y,A.W)
m.b=A.ac
m.c=2
m.r=A.c5.j(w*(1-l*0.22)).gp(0)
c0.cQ(v,-0.7,1.4,!1,m)}break
case"heater":o=B.bw(D.fqp,A.iD)
w=B.L()
w.san(D.cbL.az(0,new B.a5(o.a,o.b,o.c,o.d)))
c0.aq(o,w)
w=B.a([],x.v)
a9=new B.aH(b8.r,A.ak,b3,b3,w)
a9.E(new B.aZ(-24,0))
for(l=0;l<8;l=a5){b8=(l&1)===0?-10:10
a5=l+1
b8=new B.ck(-24+l*6+3,b8,-24+a5*6,0)
w.push(b8)
v=a9.f
if(v!=null)b8.aj(v)
a9.ac()}b8=c1.fx
if(b8>0.1){$.T()
w=B.L()
w.b=A.ac
w.c=10
w.r=D.bq0.j(0.5*b8).gp(0)
w.y=A.l8
c0.af(a9,w)}$.T()
b8=B.L()
b8.b=A.ac
b8.c=3.2
b8.d=A.bG
b8.r=B.ap(A.ml,Ai.z5,c1.fx).gp(0)
c0.af(a9,b8)
break
case"capacitor":a7=new B.a5(-16,-22,16,18)
b8=B.bw(a7,A.iD)
w=B.L()
w.san(D.auZ.az(0,a7))
c0.aq(b8,w)
w=B.L()
w.r=A.bO.gp(0)
c0.aE(D.fq3,w)
for(p=0;p<4;++p)b2.lE(c0,"\u2212",new B.r(-14,-18+p*9),A.aw,11)
b0=new B.a5(-16,-24,16,-17)
c0.aq(B.bw(b0,A.hr),b2.c9A(b0,!1))
b8=38*c1.fx
w=18-b8
$.T()
v=B.L()
v.r=A.bf.j(0.5).gp(0)
c0.aE(new B.a5(-3,w,11,w+b8),v)
b2.lE(c0,"1F",H.w3,A.c,11)
break
case"radio":a1=B.bw(D.aba,A.h2)
b8=B.L()
b8.san(D.cer.az(0,new B.a5(a1.a,a1.b,a1.c,a1.d)))
c0.aq(a1,b8)
b8=B.L()
b8.b=A.ac
b8.c=1.4
b8.r=A.oA.j(0.6).gp(0)
c0.aq(a1,b8)
b8=B.bw(D.fqq,A.jJ)
w=B.L()
w.r=A.e5.gp(0)
c0.aq(b8,w)
for(p=0;p<6;++p){b8=-10+p*4.4
w=new B.ar(A.U,A.R,A.X,A.Y,A.W)
w.r=A.ml.gp(0)
w.c=1.4
c0.ah(new B.r(-27,b8),new B.r(-3,b8),w)}b8=B.L()
b8.r=(c1.fx>0?A.h8:A.oC).gp(0)
c0.aE(D.fpu,b8)
if(c1.fx>0){b8=8+A.i.F(b2.b.d*7,18)
w=B.L()
w.r=A.bE.gp(0)
w.c=1.6
c0.ah(new B.r(b8,-13),new B.r(b8,-3),w)}b8=B.L()
b8.san(D.aTk.az(0,B.bY(D.aa8,6)))
c0.O(D.aa8,6,b8)
b8=B.L()
b8.r=A.oA.gp(0)
c0.O(D.eBP,4,b8)
b8=B.L()
b8.r=A.dT.gp(0)
b8.c=1.8
c0.ah(D.eBK,D.aOa,b8)
if(c1.fx>0)for(b8=b2.b,l=1;l<=2;++l){w=B.bY(D.aOa,4+l*5+A.i.F(b8.d*8,5))
v=new B.ar(A.U,A.R,A.X,A.Y,A.W)
v.b=A.ac
v.c=1.4
v.r=A.oK.j(0.7).gp(0)
c0.cQ(w,-2.4,1.6,!1,v)}break
case"tv":w=B.bw(D.fqA,A.iD)
v=B.L()
v.r=M.n8.gp(0)
c0.aq(w,v)
b1=B.bw(D.fqx,A.hr)
if(c1.fx>0&&!c1.x){b8=c0.c
J.bs(b8.save())
b8.clipRRect(B.ne(b1),$.mR(),!0)
b8.translate(-33,-21)
K.h5l(c0,D.fxo,c1.at,b2.b.d,c1.ax,-1,b3,b3)
b8.restore()
b8=B.L()
b8.r=A.bf.gp(0)
c0.O(D.eC0,1.6,b8)}else{w=B.L()
w.r=D.wQ.gp(0)
c0.aq(b1,w)
b8=new B.aH(b8.r,A.ak,b3,b3,B.a([],x.v))
b8.E(new B.aZ(-33,-21))
b8.E(new B.aq(-10,-21))
b8.E(new B.aq(-33,0))
b8.E(new B.bA())
w=B.L()
w.r=A.c.j(0.05).gp(0)
c0.af(b8,w)}b8=B.L()
b8.r=A.bB.gp(0)
c0.aE(D.fpT,b8)
break}C.iDn(c0,c1,b2.b.d,b2.gcef())
if(t)b2.lE(c0,"\u2716",D.eF7,A.aC,14)
if(s)c0.c.restore()},
aSt(d,e,f,g){var w,v,u,t,s,r,q,p,o=new C.bMB(),n=e.d,m=e.b,l=n-m,k=e.a,j=m+l*0.06,i=k+l*0.16,h=new B.a5(k,j,i,j+l*0.88)
j=l*0.08
k=B.bw(h,new B.aP(j,j))
$.T()
w=B.L()
w.san(o.$2(h,D.dhT))
d.aq(k,w)
i-=0.5
w=l*0.2
k=e.c-w
v=new B.a5(i,m,k,n)
u=k-i
t=i+u*0.66
s=B.L()
s.san(o.$2(v,D.dGC))
d.aE(new B.a5(i,m,t,n),s)
s=B.L()
s.san(o.$2(v,D.dg6))
d.aE(new B.a5(t,m,k,n),s)
k-=0.5
s=m+j
n=l*0.12
r=k+n
q=new B.a5(k,s,r,s+l*0.84)
s=B.L()
s.san(o.$2(q,D.aEn))
d.aE(q,s)
r-=0.5
s=m+l*0.3
p=new B.a5(r,s,r+l*0.1,s+l*0.4)
s=l*0.05
s=B.bw(p,new B.aP(s,s))
r=B.L()
r.san(o.$2(p,D.aEn))
d.aq(s,r)
r=i+2
s=m+l*0.18
o=B.L()
o.r=A.c.j(0.18).gp(0)
d.aE(new B.a5(r,s,r+(u-4),s+j),o)
if(f){o=l*0.42
this.lE(d,"+",new B.r(t+u*0.08,m+n),A.dl,o)
if(g!=null)this.lE(d,g,new B.r(i+u*0.12,m+w),A.bO,o)}},
bLk(d,e,f){return this.aSt(d,e,!0,f)},
bLj(d,e,f){return this.aSt(d,e,f,null)},
bIf(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a6.e,a4=B.v(a3===A.i.fP(a3)?A.i.S(a3):a3)+"V"
if(a3<=2){a2.bLk(a5,D.fqo,a4)
a2.lE(a5,"\u2212",D.eEI,A.ab,12)
a2.lE(a5,"+",D.eBF,A.aQ,12)
$.T()
w=B.L()
w.r=A.bx.gp(0)
a5.aE(D.fqc,w)
w=a6.as
v=B.L()
v.r=B.ap(A.aC,A.bf,w).gp(0)
a5.aE(new B.a5(-22,15,-22+44*w,19),v)
if(a6.as<=0.02)a2.lE(a5,"FLAT",D.eEe,A.c1,9)}else if(a3<=4.5){u=a3>3?3:2
t=u*13+6
w=-t/2
v=w+t
s=new B.a5(-31,w,31,v)
r=B.bw(s,A.jJ)
$.T()
q=B.L()
q.san(D.cdS.az(0,s))
a5.aq(r,q)
for(r=w+3,p=0;p<u;++p){q=r+p*13
a2.bLj(a5,new B.a5(-27,q,25,q+11.5),!1)}for(q=r+(t-6),o=0;o<2;++o){n=D.dg0[o]
$.T()
m=new B.ar(A.U,A.R,A.X,A.Y,A.W)
m.r=A.dT.gp(0)
a5.aE(new B.a5(n,r,n+1.6,q),m)}a2.lE(a5,a4,new B.r(-9,v+1),A.aQ,10)
a2.lE(a5,"+",new B.r(25,w-13),A.aQ,11)}else if(a3<=9){l=new B.a5(-18,-16,18,18)
w=B.bw(l,A.hr)
v=$.T()
r=B.L()
r.san(D.ce9.az(0,l))
a5.aq(w,r)
k=new B.a5(-18,-4,18,18)
r=B.ra(k,A.hr,A.hr,A.bJ,A.bJ)
w=B.L()
w.san(D.auZ.az(0,k))
a5.aq(r,w)
j=new B.a5(-18,-16,18,-11)
w=B.ra(j,A.bJ,A.bJ,A.hr,A.hr)
r=B.L()
r.san(D.cez.az(0,j))
a5.aq(w,r)
i=B.L()
i.san(D.eOp.az(0,D.fpX))
a5.O(D.aOt,4,i)
r=B.a([],x.v)
h=new B.aH(v.r,A.ak,null,null,r)
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
a5.O(D.eCQ,2,w)
a2.lE(a5,"9V",D.eFa,A.c,13)
a2.lE(a5,"+",D.eEa,A.aQ,11)}else{e=new B.a5(-34,-12,34,18)
w=B.bw(e,A.hr)
$.T()
v=B.L()
v.san(D.cbF.az(0,e))
a5.aq(w,v)
d=new B.a5(-36,-18,36,-10)
v=B.bw(d,D.eOx)
w=B.L()
w.san(D.ave.az(0,d))
a5.aq(v,w)
for(g=0;g<6;++g){w=new B.ar(A.U,A.R,A.X,A.Y,A.W)
w.r=A.aw.gp(0)
a5.O(new B.r(-14+g*5.6,-14),1.6,w)}w=B.L()
w.r=A.bu.j(0.92).gp(0)
a5.aE(D.fqy,w)
for(o=0;o<2;++o){w=D.cGP[o]
n=w.a
a0=w.b
a1=B.bZ(new B.r(n,-21),7,8)
w=B.bw(a1,A.Fh)
v=new B.ar(A.U,A.R,A.X,A.Y,A.W)
v.san(D.cce.az(0,a1))
a5.aq(w,v)
v=B.bw(B.bZ(new B.r(n,-24),3.5,9),A.Fh)
w=new B.ar(A.U,A.R,A.X,A.Y,A.W)
w.r=a0.gp(a0)
a5.aq(v,w)}a2.lE(a5,"\u2212",D.eEJ,A.ab,11)
a2.lE(a5,"+",D.eBA,A.aC,11)
a2.lE(a5,"12V",H.aOn,A.aw,11)}},
aD(d){return!0}}
C.na.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a6(k)
A.d.a6(d.b)
w=B.S(x.N,x.Y)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.I)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.u9(o,r,q,p)
n.at8(o,r,q,p)
k.push(n)
J.iu(s[4],new C.cwC(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.I)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.an3(m,u[1],l,u[3])}}}
C.akZ.prototype={
R(){var w=x.N
return new C.al_(B.c1(2000,1,1,0,0,0,0,0),A.J,A.aA,B.S(w,x.gl),B.aR(w),$,A.bH,0,B.a([],x.X),null,null)}}
C.al_.prototype={
agh(d){var w=this,v=w.ch
if(v!=null)v.a1(0)
w.l(new C.bMe(w,d))
w.ch=B.cC(A.ne,new C.bMf(w))},
t(){var w=this.ch
if(w!=null)w.a1(0)
w=this.db
if(w!=null)w.a1(0)
this.bxN()},
a1I(d,e){return this.cmW(d,e)},
b4R(d){return this.a1I(d,!1)},
cmW(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a1I=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
r=d.at
q=e?A.nX:A.zf
p=d.b
w=3
return B.b(K.hsl(s,r,p,d.ax<3.2,q,$.qT().h(0,p).b),$async$a1I)
case 3:o=g
t.cy=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a1I,v)},
czW(d){var w=this,v=new B.W(Date.now(),0,!1),u=w.CW.c_(0,d.a,new C.bMg()),t=J.cJ(u)
t.I(u,v)
t.br(u,new C.bMh(v))
if(t.gJ(u)>=4){t.a6(u)
t=w.db
if(t!=null)t.a1(0)
w.a33(d)
return}if(t.gJ(u)===3){t=w.db
if(t!=null)t.a1(0)
w.db=B.cC(A.j3,new C.bMi(w,u,d))}},
a1o(d){return this.cld(d)},
cld(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a1o=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
w=3
return B.b(C.iEC(s,d.b,A.i.S(A.i.F(t.a.c.d*0.12,1)*100)),$async$a1o)
case 3:t.cy=!1
case 1:return B.h(u,v)}})
return B.i($async$a1o,v)},
a33(d){return this.cxp(d)},
cxp(d){var w=0,v=B.j(x.H),u=this,t
var $async$a33=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bV(A.L,null,new C.bMc(u,d),t,!0,!0,!0,null,!1,!1,x.H),$async$a33)
case 2:return B.h(null,v)}})
return B.i($async$a33,v)},
a_(){this.a3()
this.bk0()
this.mn()},
bk0(){this.a.c.e=new C.bMy(this)},
mE(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.vT(0,d)
for(w=q.a.c.a,v=w.length,u=q.cx,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=D.mF.h(0,s.b)
if((r==null?null:r.b)!==D.Bg)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.q(0,s.a)&&!q.cy){u.I(0,s.a)
q.a1I(s,!0)}}else u.X(0,s.a)}if((q.ax+=d)>0.16){q.ax=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)G.dH(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)G.dH(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cV.ai()<0.5
else u=!1
if(u)G.dH(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){G.dH(900+A.cV.av(800),"",90,0,0.1,o)
if(A.cV.ai()<0.35)G.dH(300+A.cV.av(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cV.ai()<0.4
else u=!1
if(u)G.dH(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)G.dH(330+A.o.F(110*A.i.bc(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)G.dH((A.i.bc(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)G.dH(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)G.dH(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cV.ai()<0.5
else u=!1
if(u)G.dH(1200,"",30,0,0.07,o)
break
case"turbine":u=s.f
if(u>0.1)G.dH(80,"",150,0,0.05*u,o)
break
case"crank":u=s.f
if(u>0.15)G.dH(110+u*140,"",70,0,0.08,"saw")
break}}}w=q.a.w
if(w!=null)w.$0()
q.l(new C.bMz())},
bc2(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
b5x(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.U(w).k("dy<1>"),w=new B.dy(w,v),w=new B.bR(w,w.gJ(0),v.k("bR<aj.E>")),u=d.a,v=v.k("aj.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.at
p=s.d
o=D.mF.am(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cN7(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
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
h=C.hRO(new B.r(k,n),new B.r(i,l),p)
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
agf(){this.a.toString
this.l(new C.bLE())},
buq(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.djC[v]
if(!A.d.aR(p.a.c.a,new C.bMA(u,w))){o=new B.r(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?A2.B4:o
s=s?A2.B4:o
q=t.amf(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.x=null
G.dH(1200,"",50,0,0.3,"tri")
p.agf()},
B(d){var w,v,u,t,s,r,q,p,o,n=this
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.TG[v].a)
u=w.length
t=u>8
s=t?A.d.du(w,0,A.o.ao(u+1,2)):w
r=t?A.d.fB(w,A.o.ao(w.length+1,2)):A.M
q=n.a.d
if(q!=null){w=B.a3(q).k("cs<1>")
w=B.B(new B.cs(q,w),w.k("M.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.I)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b5m(s,!0))
n.a.toString
if(t)w.push(n.b5m(r,!0))
w.push(B.E(B.cf(new C.bMx(n,q)),1))
return B.x(w,A.l,null,A.e,A.h,0,A.p)},
b5m(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=$.qT()
s=t.h(0,u).d.j(0.14)
r=new B.aP(14,14)
q=new B.ax(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.aA(p,B.p(p,B.x(B.a([B.c(t.h(0,u).c,p,p,p,p,p,p,A.y7,p,p,p),B.c(t.h(0,u).b,p,1,A.a2,p,p,p,A.on,p,p,p)],n),A.l,p,A.bb,A.h,0,A.p),A.f,p,p,new B.o(s,p,new B.bE(q,q,q,q),new B.bb(r,r,r,r),p,p,A.m),p,p,p,L.oS,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bLF(this,u),p,p,p,p,p,p,!1,A.a4))}return B.p(p,B.co(m,p,p,A.hm,p,p,A.aK,!1),A.f,p,p,new B.o(L.CA,p,new B.bE(A.a1,A.a1,new B.ax(o,1,A.r,-1),A.a1),p,p,p,A.m),p,58,p,p,p,p,p,p)},
cp6(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a2.b,a1=$.qT().h(0,a0)
a1.toString
w=a2.dy
v=a2.fr
u=new C.bM0(e,a1)
t=new C.bM_()
s=B.m(20)
r=a1.d
q=B.K(r.j(0.55),A.r,1.3)
p=B.a([new B.aa(0,A.H,r.j(0.18),A.cz,16)],x.V)
o=r.j(0.18)
n=B.m(10)
n=B.p(A.z,B.c(a1.c,d,d,d,d,d,d,A.y7,d,d,d),A.f,d,d,new B.o(o,d,d,n,d,d,A.m),d,34,d,d,d,d,d,34)
o=B.E(B.c(a1.b,d,1,A.a2,d,d,d,B.l(d,d,r,d,d,d,d,d,d,d,d,15,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d),1)
m=B.m(999)
l=B.K(A.aT,A.r,1)
k=x.p
m=B.a([B.A(B.a([n,A.aa,o,B.aA(d,B.p(d,B.c(e.f?"Less":"About",d,d,d,d,d,d,A.WR,d,d,d),A.f,d,d,new B.o(d,d,l,m,d,d,A.m),d,d,d,d,A.o3,d,d,d),A.y,!1,D.hKP,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.bLM(e),d,d,d,d,d,d,!1,A.a4),B.aI(d,d,d,d,D.c63,d,d,d,new C.bLN(e,a2),d,d,d,d,"Remove part",A.co),B.aI(d,d,d,d,At.R8,d,d,d,new C.bLO(e),d,d,d,d,d,A.co)],k),A.l,d,A.e,A.h,0,d,d)],k)
if(e.f)A.d.u(m,B.a([B.c(a1.e,d,d,d,d,d,d,A.Lw,d,d,d),A.cQ,B.c("How it is made: "+a1.f,d,d,d,d,d,d,V.aY1,d,d,d)],k))
m.push(A.aj)
if(a2.x)m.push(D.h_w)
else m.push(new B.D(A.f7,B.A(B.a([t.$2(A.i.a5(Math.abs(a2.dy),2),"VOLTS"),A.ba,t.$2(A.i.a5(Math.abs(a2.fr)*1000,0),"MILLIAMPS"),A.ba,t.$2(A.i.a5(Math.abs(w*v),2),"WATTS")],k),A.l,d,A.e,A.h,0,d,d),d))
j=e.a.c.bhR(a2)
if(j!=null){a1=(a2.x?A.aC:A.as).j(0.14)
w=B.m(10)
v=B.K((a2.x?A.aC:A.as).j(0.5),A.r,1)
m.push(new B.D(A.hz,B.p(d,B.c((a2.x?"Why it burnt out":"Why it is not working")+": "+j,d,d,d,d,d,d,D.fWl,d,d,d),A.f,d,d,new B.o(a1,d,v,w,d,d,A.m),d,d,d,d,A.cu,d,d,d),d))}if(C.hpJ(a0)){a1=B.a([],k)
for(i=0;i<10;i=h){h=i+1
a1.push(new B.D(A.f7,new E.e2("CH "+h,a2.at===i,new C.bLS(e,a2,i),d,r,d),d))}a1=B.cc(B.A(a1,A.l,d,A.e,A.h,0,d,d),A.t,d,A.y,d,d,d,d,d,A.aK)
if(e.a.c.rA(a2)){w=F.Tv[A.o.F(a2.at,10)]
v=e.f?" Tap the TV 3 times quickly to open the big screen.":""
v="Showing: "+w.a+"."+v
w=v}else w="The TV is off. Give it power with the + dot towards the battery +."
a1=B.a([A.aj,a1,A.at,B.c(w,d,e.f?4:1,A.a2,d,d,d,N.hH,d,d,d)],k)
if(e.a.c.rA(a2))a1.push(new E.fJ(A.xn,"Open big screen",new C.bLT(e,a2),r,d))
A.d.u(m,a1)}if(D.mF.am(0,a0)&&!C.hpJ(a0)){a1=B.a([A.aj],k)
if(e.f||!e.a.c.rA(a2))a1.push(B.c(e.a.c.rA(a2)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",d,d,d,d,d,d,N.hH,d,d,d))
if(e.a.c.rA(a2))a1.push(new E.fJ(A.QQ,"Open the "+$.qT().h(0,a0).b,new C.bLU(e,a2),r,d))
A.d.u(m,a1)}if(D.mF.am(0,a0))A.d.u(m,B.a([A.aj,new E.fJ(A.DK,"Make it bigger (or tap it 4 times)",new C.bLV(e,a2),r,d)],k))
e.a.toString
a1=a0==="buck"
if(a1||a0==="regulator"){w=A.i.a5(a2.db,1)
if(e.a.c.rA(a2))v=a2.dx
else{e.a.toString
v=a0==="regulator"?5:a2.e}v=B.a([A.aj,B.c("Volts in: "+w+" V   \u2192   Volts out: "+A.i.a5(v,1)+" V",d,d,d,d,d,d,D.fQ8,d,d,d)],k)
if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dDv[g]
w=f===A.i.fP(f)?A.i.S(f):f
a1.push(new E.e2(B.v(w)+" V out",a2.e===f,new C.bLW(e,a2,f),d,r,d))}v.push(new B.D(A.kL,B.c_(A.bI,a1,A.br,d,0,6),d))}if(a0==="regulator")v.push(D.heG)
A.d.u(m,v)}if(e.a.c.MS(a2)&&!a2.x){a1=A.i.a5(a2.cx,2)
w=A.i.a5(e.a.c.Az(a2),2)
v=e.a.c
o=v.apQ(a2)?"   \u26a0 OVERLOADED":""
a1=B.c("Supplying "+a1+" A of the "+w+" A it can give"+o,d,d,d,d,d,d,B.l(d,d,v.apQ(a2)?A.c1:A.eF,d,d,d,d,d,d,d,d,12.5,d,d,A.D,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
w=B.m(4)
o=A.i.D(a2.cx/e.a.c.Az(a2),0,1)
v=e.a.c.apQ(a2)?A.aC:A.bf
m.push(new B.D(A.hz,B.x(B.a([a1,A.cQ,B.by(w,B.jE(A.bx,d,d,5,d,o,new B.l7(v,x.c)),A.aq)],k),A.B,d,A.e,A.h,0,A.p),d))}a1=a0==="battery"
if(a1&&a2.e===1.5){w=a2.as
v=A.i.S(w*100)
if(w<=0.02)w="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else w=w>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.D(A.hz,B.c("Charge: "+v+"%"+w,d,d,d,d,d,d,D.fJy,d,d,d),d))}if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.drr[g]
w=f===1.5?"1.5 V (rechargeable)":B.v(f)+" V"
a1.push(new E.e2(w,a2.e===f,new C.bLX(e,a2,f),d,r,d))}m.push(B.c_(A.bI,a1,A.br,d,0,6))}if(a0==="resistor"){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dgu[g]
w=f>=1000?"1 k\u03a9":""+A.o.S(f)+" \u03a9"
a1.push(new E.e2(w,a2.r===f,new C.bLY(e,a2,f),d,r,d))}m.push(B.c_(A.bI,a1,A.br,d,0,6))}if(a0==="solar")m.push(u.$3("Sunlight",a2.f,new C.bLZ(a2)))
if(a0==="turbine")m.push(u.$3("Wind",a2.f,new C.bLP(a2)))
if(a0==="pot")m.push(u.$3("Knob",a2.f,new C.bLQ(a2)))
if(a0==="ldr")m.push(u.$3("Light",a2.f,new C.bLR(a2)))
if(a0==="crank")m.push(D.h9U)
if(a0==="switch")m.push(B.c(a2.w?"Closed: the loop is joined up.":"Open: the loop is broken.",d,d,d,d,d,d,N.hH,d,d,d))
return B.p(d,new B.cS(D.b9w,B.cc(B.x(m,A.B,d,A.e,A.P,0,A.p),A.t,d,A.y,d,d,d,d,d,A.ah),d),A.f,d,d,new B.o(F.ZA,d,q,s,p,d,A.m),d,d,D.hK7,d,D.bGm,d,d,d)}}
C.beS.prototype={}
C.WU.prototype={
R(){return new C.aGm(C.hvY(),new B.cB(null,x.gJ),B.aR(x.S))}}
C.aGm.prototype={
a_(){this.a3()
$.aU.cV$.push(this)
this.agg()},
agg(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fSH(),$async$agg)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.iDM(t.d,r)
if(s!=null){t.l(new C.e5l(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$agg,v)},
FT(){var w,v=this
if(!v.as)return
w=C.itX(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bIJ(w)},
jn(d){if(d!==A.h5)this.FT()},
t(){$.aU.hZ(this)
this.FT()
this.a2()},
ceh(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.U(v).k("X<1>")
t=new B.X(v,new C.e5u(q),u).gJ(0)
s=new B.X(v,new C.e5v(),u).gJ(0)
r=new B.X(v,w.gd1K(),u).gJ(0)
if(t!==q.x||s!==q.y||r!==q.z)q.l(new C.e5w(q,t,s,r))}if(A.o.F(q.w,45)===0)q.FT()
if(A.o.F(q.w,10)===0){w=q.f
$.ak5()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.q(0,q.f)&&$.ak5()[q.f].c.$1(q.d)){w.I(0,q.f)
C.K_("bell",B.a([0,4,7,12],x.t),700,0.45)
q.l(new C.e5x())
q.FT()
w=q.c
w.toString
w=B.Kt(w)
if(w!=null)w.T(B.b3(p,p,p,p,p,A.t,p,B.c("\u2705 Challenge done: "+$.ak5()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mp,p,p,p,p,p,p,p,p,p,p))}},
aj5(){var w=0,v=B.j(x.H),u=this,t
var $async$aj5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.e5k(u),t,null,!0,!0,x.H),$async$aj5)
case 2:return B.h(null,v)}})
return B.i($async$aj5,v)},
b2x(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.m(12),t=B.K(f.j(0.45),A.r,1)
u=B.a([B.ao(w,B.p(w,B.V(d,f,w,w,w,18),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ao(w,h,w,w,w,-1,-3,w))
return B.aA(w,B.ha(new B.a4(40,38,new B.an(A.a0,w,A.ad,A.f,u,w),w),w,e,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4)},
b2w(d,e,f,g){return this.b2x(d,e,f,g,null)},
atQ(d,e,f,g){var w=null,v=f.j(0.1),u=B.m(10),t=B.K(f.j(0.4),A.r,1)
return B.E(B.aA(w,B.p(w,B.A(B.a([B.V(d,f,w,w,w,15),A.e_,new B.d3(1,A.ci,B.c(e,w,1,A.a2,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.D,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.bb,A.h,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),1)},
ahp(){var w=0,v=B.j(x.H),u=this,t
var $async$ahp=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a7(t,!1).c9(B.e6(new C.e5g(u),!1,null,x.H)),$async$ahp)
case 2:t=u.e.gbm()
if(t!=null)t.bk0()
if(u.c!=null)u.l(new C.e5h())
u.FT()
return B.h(null,v)}})
return B.i($async$ahp,v)},
bLr(){var w,v,u,t,s=null,r=this.f
$.ak5()
if(r>=11)return s
w=this.r
v=w.q(0,r)
r=v?A.bj:A.aC
u=B.m(9)
t=B.K(L.CA,A.r,1.5)
return B.p(s,B.at(B.c(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.ya,s,s,s),s,s,s),A.f,s,D.b9l,new B.o(r,s,t,u,s,s,A.m),s,s,s,s,A.fe,s,s,s)},
akd(){var w=0,v=B.j(x.H),u=this,t
var $async$akd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bV(F.n7,null,new C.e5t(u),t,!0,!0,!0,A.kw,!1,!1,x.H),$async$akd)
case 2:return B.h(null,v)}})
return B.i($async$akd,v)},
cei(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.aA(r,B.p(r,D.c2D,A.f,r,r,new B.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e5z(d),r,r,r,r,r,r,!1,A.a4),o=B.m(11)
o=B.p(r,D.bfk,A.f,r,r,new B.o(A.bs,r,B.K(A.aH.j(0.45),A.r,1),o,r,r,A.m),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.p(r,B.x(B.a([B.A(B.a([p,A.aa,o,A.aa,B.E(B.x(B.a([D.hcB,B.c(w,r,1,A.a2,r,r,r,B.l(r,r,s.y>0||s.z>0?A.f1:A.hk,r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.B,r,A.e,A.h,0,A.p),1),new C.aAh(s.gckW(),r),A.up,s.b2w(A.rh,"Construction Lab: real 3D wiring, plumbing and a house",A.cW,new C.e5A(s,d)),s.b2x(A.m2,"Challenges",A.aQ,s.gcCA(),s.bLr()),s.b2w(A.DG,"How to play",A.aH,new C.e5B(d,e))],v),A.l,r,A.e,A.h,0,r,r),A.aj,B.A(B.a([s.atQ(A.o6,"Circuits",A.bl,s.gcvg()),A.ba,s.atQ(A.oX,"Repair",A.aQ,new C.e5C(s)),A.ba,s.atQ(I.xk,"Clear",A.c1,new C.e5D(s))],v),A.l,r,A.e,A.h,0,r,r)],v),A.l,r,A.e,A.P,0,A.p),A.f,r,r,new B.o(L.CA,r,new B.bE(A.a1,A.a1,new B.ax(q,1,A.r,-1),A.a1),r,r,r,A.m),r,r,r,r,D.bLA,r,r,r)},
B(d){var w=this,v=null
$.auG="tech"
return B.c7(v,A.c7,B.bo(!0,B.x(B.a([w.cei(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.huO(w.d,w.e,w.gceg(),v),1)],x.p),A.l,v,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
C.aAh.prototype={
R(){return new C.bcX(null,null)}}
C.bcX.prototype={
gaAc(){var w,v=this,u=v.d
if(u===$){w=B.br(null,A.Z,null,1,null,v)
w.cX(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
t(){this.gaAc().t()
this.bz8()},
B(d){var w=null,v=this.a.c
return B.aA(w,B.ha(new B.a4(42,42,B.cb(this.gaAc(),new C.cOa(this),w),w),w,"AI Inventor: say what you want to make",w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bcW.prototype={
a4(d,e){var w,v,u,t=null,s=e.eo(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.T()
w=B.L()
w.r=A.b_.j(0.25+0.15*o).gp(0)
w.y=O.oT
d.O(s,r+2+o*2,w)
w=B.L()
w.san(D.eO4.az(0,B.bY(s,r)))
d.O(s,r,w)
v=B.L()
v.b=A.ac
v.c=2.2
v.san(new B.he(A.z,0,6.283185307179586,A.x,D.d69,t,new B.mZ(p)).az(0,B.bY(s,r)))
d.O(s,r,v)
p=new C.cO9(d)
p.$3(s.a7(0,A.ue),8+o*1.5,1)
q*=4
p.$3(s.a7(0,D.eCX),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a7(0,D.eFe),2.6,0.5+0.5*Math.cos(q))
u=B.h_(t,A.cK,t,t,t,D.fFQ,A.a7,A.cc,t,A.e4,A.cd)
u.eL()
u.a4(d,s.a7(0,new B.r(-u.b.c/2,5)))},
aD(d){return d.b!==this.b}}
C.aAC.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b6()
this.bC()}}
C.aAD.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bxM()}}
C.aMY.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b6()
this.bC()}}
C.bBO.prototype={}
C.h4.prototype={}
C.Ku.prototype={
a9(){return"ScreenStyle."+this.b}}
C.mk.prototype={}
C.WD.prototype={
R(){return new C.aGc(A2.B4,null,null)}}
C.aGc.prototype={
gabm(){var w,v=this,u=v.d
if(u===$){w=B.br(null,A.oR,null,1,null,v)
w.ct(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
gac5(){var w=D.mF.h(0,this.a.c)
return w==null?D.aUo:w},
t(){if(this.f){P.D9(Y.Lq)
P.bH9()}this.gabm().t()
this.bB0()},
gBW(){var w=this.gabm().y
w=w==null?null:A.o.ao(w.a,1000)
return(w==null?0:w)/1000},
Ou(){var w,v=this,u=v.e
if(u==null)return null
w=F.iy[u].e
if(w===-2)return null
if(w===-1)return A.o.F(v.y+A.i.bc(Math.max(0,v.gBW()-v.z)/10),14)
return w},
Kb(d){this.l(new C.e1h(this,d))},
b5T(d){this.l(new C.e1i(this,d,14))},
aE9(d){var w=this.Ou()
if(w==null)w=d>0?-1:0
return this.b5T(w+d)},
cHF(d,e){if(e.a<=0||e.b<=0||this.Ou()==null)return
this.l(new C.e1s(this,d,e))},
aeg(){return this.c6m()},
c6m(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aeg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.Ou()
if(q==null){w=1
break}r.a=!1
s=t.c
s.toString
w=3
return B.b(B.bV(A.L,null,new C.e1g(r,q),s,!0,!0,!0,null,!1,!1,x.H),$async$aeg)
case 3:if(t.c!=null&&r.a)t.b5T(q)
case 1:return B.h(u,v)}})
return B.i($async$aeg,v)},
cJd(){var w=this,v=!w.f
w.l(new C.e1t(w,v))
if(v){P.D9(Y.ack)
P.hqA(w.gac5().b===D.xW)}else{P.D9(Y.Lq)
P.bH9()}},
cel(){var w,v=this
if(!v.f)return
B.jD()
v.l(new C.e1u(v))
w=v.c.L(x.q).f
w.MG()
if(v.r)w.T(F.aWv)},
aQP(d){return B.cf(new C.e19(this,d))},
cov(d){var w,v=this,u=null,t=v.gBW(),s=t-v.w,r=s<1.4?new K.b0x(v.x,s):u
if(F.iy[d].e===-1){w=Math.max(0,t-v.z)
return new C.agK(d,w,r,A.o.F(v.y+A.i.bc(w/10),14),u)}return new C.agK(d,t,r,u,u)},
b_t(d){var w=null,v=A.c.j(0.92),u=d*0.42
return B.aG(!1,A.a3,!0,w,B.aM(!1,w,!0,new B.D(new B.R(u,0,u,0),B.A(B.a([B.V(A.kN,A.aw,w,w,w,d*0.6),new B.a4(d*0.18,w,w,w),B.c("Learn more",w,w,w,w,w,w,B.l(w,w,A.aw,w,w,w,w,w,w,w,w,d*0.48,w,w,A.D,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,w,w),w),A.nt,!0,w,w,w,w,D.hK9,w,w,w,w,w,w,this.gc6l(),w,w,w,w,w,w,w),A.f,v,0,w,w,A.nt,w,w,A.ai)},
b2y(d,e,f,g){var w=null,v=B.no(w,A.b6,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w)
return B.aI(w,w,w,w,B.V(d,A.c,w,w,w,w),w,w,g,f,w,w,w,v,e,w)},
cek(d,e,f){return this.b2y(d,e,f,null)},
cwz(){var w=this,v=null,u=new C.e1q(),t=A.v.j(0.72),s=B.m(22),r=B.K(w.gac5().d.j(0.5),A.r,1),q=u.$3(D.bW0,"AD \u2212",new C.e1m(w)),p=u.$3(A.asq,"AD +",new C.e1n(w)),o=u.$5$color$on(A.kM,"HOME",new C.e1o(w),w.gac5().d,w.e==null),n=w.e
n=n!=null&&F.iy[n].e===-1
return B.p(v,B.A(B.a([q,p,o,u.$5$color$on(A.zV,"ADS",new C.e1p(w),A.c5,n)],x.p),A.l,v,A.e,A.P,0,v,v),A.f,v,v,new B.o(t,v,r,s,v,v,A.m),v,v,D.hKf,v,A.HV,v,v,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.gac5(),l=o.f,k=!l||!o.r
l=l?B.aF(d,A.dK,x.w).w.r.b+26:8
w=o.cek(A.cC,"Back to the board",new C.e1v(d))
v=o.f
u=v?Aq.Is:A.xn
v=v?"Leave full screen":"Full screen"
v=o.b2y(u,v,o.gbcw(),D.hL1)
u=B.m(20)
t=o.e
s=m.a
r=x.p
q=new B.D(new B.R(8,l,8,0),B.A(B.a([w,A.aa,v,A.aa,B.E(new B.bK(A.a9,n,n,B.p(n,B.c(t==null?s:s+" \xb7 "+F.iy[t].a,n,1,A.a2,n,n,n,As.y3,n,n,n),A.f,n,n,new B.o(A.b6,n,n,u,n,n,A.m),n,n,n,n,A.lZ,n,n,n),n),1)],r),A.l,n,A.e,A.h,0,n,n),n)
p=m.b===D.xW?o.bNB(m):o.crY(m)
l=o.f
w=!l
v=l?o.gb2z():n
if(l){l=B.at(p,n,n,n)
u=k?1:0
r=new B.an(A.a0,n,A.b4,A.t,B.a([l,B.ao(n,B.xL(new B.dw(!k,q,n),A.aZ,A.ib,u),n,n,0,0,0,n)],r),n)
l=r}else l=B.x(B.a([q,A.aj,o.cwz(),B.E(new B.D(A.cB,B.at(p,n,n,n),n),1)],r),A.l,n,A.e,A.h,0,A.p)
return B.c7(n,A4.a0c,B.bo(w,B.aA(A.c_,l,A.y,!1,n,v,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!1,A.a4),w,!1,A.ag,w,w),n,!1,!1,n,n)},
cej(d){var w
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
crY(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.abj
switch(n.a){case 1:w=44
break
case 2:w=30
break
case 3:w=22
break
case 4:w=26
break
default:w=14
break}v=B.cb(p.gabm(),new C.e1l(p,w,d,m),o)
if(n===D.abk)v=new B.BS(D.bMe,v,o)
n=p.cej(n)
u=p.f?A.hN:Aw.a1E
t=m?4:5
s=d.c
r=B.ap(s,A.c,m?0.25:0.08)
r.toString
q=B.ap(s,A.v,0.5)
q.toString
q=B.a([r,s,q],x.O)
s=B.m(w)
r=B.a([new B.aa(0,A.H,d.d.j(0.28),A.J,36)],x.V)
return new B.fM(n,B.p(o,B.p(o,v,A.f,o,o,new B.o(A.v,o,o,B.m(w-3),o,o,A.m),o,o,o,o,A7.HW,o,o,o),A.f,o,o,new B.o(o,o,o,s,r,new B.a8(A.ay,A.aD,A.x,q,o,o),A.m),o,o,o,u,new B.R(t,t,t,t),o,o,o),o)},
bb8(d){var w=Date.now(),v=A.o.D(this.a.d+A.i.bc(this.gBW()*0.4),0,100),u=d.b===D.abj,t=u?34:20,s=u?28:18
return new B.D(new B.R(t,12,s,2),B.cf(new C.e1r(new B.W(w,0,!1),v)),null)},
ay_(d,e,f){var w,v=null,u=d.d,t=B.ap(u,A.v,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.m(e*0.26)
w=x.p
t=B.a([B.p(v,B.at(B.c(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.o(v,v,v,u,D.dy1,new B.a8(A.ay,A.aD,A.x,t,v,v),A.m),v,e,v,v,v,v,v,e)],w)
if(f)A.d.u(t,B.a([A.at,B.c(d.a,v,1,A.a2,v,v,v,D.fMy,v,v,v)],w))
return B.aA(v,B.x(t,A.l,v,A.e,A.P,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.e1e(this,d),v,v,v,v,v,v,!1,A.a4)},
c4d(d,e){return this.ay_(d,e,!0)},
c3V(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=o===D.aUp||o===D.Bi,m=d.d,l=B.ap(m,A.v,0.55)
l.toString
m=B.ap(m,A.k8,0.5)
m.toString
m=B.a([l,A.dD,m],x.O)
l=q.bb8(d)
w=n?190:138
v=B.m(24)
u=B.K(A.aT,A.r,1)
w=B.aA(p,B.p(p,B.by(B.m(23),B.b4(p,p,p,new C.agK(0,q.gBW(),p,p,p),A.hf),A.aq),A.f,p,p,new B.o(p,p,u,v,p,p,A.m),p,w,p,A.ic,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.e1c(q),p,p,p,p,p,p,!1,A.a4)
v=n?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.iy[s]
t.push(new B.cn(A.z,p,p,new B.de(A.dp,A.z,A.f,q.c4d(r,n?58:54),p),p))}l=B.a([l,A.aj,w,A.af,B.E(B.lc(0.92,t,v,8,12,A.x5,p,!1),1)],u)
if(o!==D.abk){o=A.c.j(0.16)
w=B.m(28)
l.push(B.p(p,B.cf(new C.e1d(q)),A.f,p,p,new B.o(o,p,p,w,p,p,A.m),p,p,p,D.bGx,H.apg,p,p,p))}return B.p(p,B.x(l,A.l,p,A.e,A.h,0,A.p),A.f,p,p,new B.o(p,p,p,p,p,new B.a8(A.ay,A.aD,A.x,m,p,p),A.m),p,p,p,p,p,p,p,p)},
bGQ(d,e){var w=this,v=null,u=w.Ou(),t=w.bb8(d),s=B.E(w.aQP(e),1),r=x.p,q=B.a([B.bT(0,B.aA(v,B.p(v,B.at(B.c(F.iy[e].a,v,v,v,v,v,v,Ab.Lz,v,v,v),v,v,v),A.f,A.v,v,v,v,v,v,v,v,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.e16(w),v,v,v,v,v,v,!1,A.a4),0,0,0)],r)
if(u!=null)u=!w.f||!w.r
else u=!1
if(u)q.push(B.ao(8,w.b_t(22),v,v,v,10,8,v))
return B.p(v,B.x(B.a([t,s,new B.a4(v,38,new B.an(A.a0,v,A.ad,A.t,q,v),v)],r),A.l,v,A.e,A.h,0,A.p),A.f,A.v,v,v,v,v,v,v,v,v,v,v)},
aTS(d,e){return B.cb(this.gabm(),new C.e1b(this,e,d),null)},
bNB(d){var w,v,u,t=this,s=null,r=t.a.c,q=r==="carscreen"
if(t.f)return B.qD(t.aTS(d,q))
r=r==="imac"?26:8
w=d.c
v=B.ap(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.m(q?26:14)
u=B.a([new B.aa(0,A.H,d.d.j(0.25),A.J,36)],x.V)
return new B.fM(1.5384615384615383,B.p(s,B.by(B.m(q?20:8),t.aTS(d,q),A.aq),A.f,s,s,new B.o(s,s,s,v,u,new B.a8(A.ay,A.aD,A.x,w,s,s),A.m),s,s,s,A.apa,new B.R(8,8,8,r),s,s,s),s)}}
C.bzQ.prototype={
a4(d,e){var w,v,u,t,s,r=e.a,q=e.b,p=0+r,o=0+q
$.T()
w=B.L()
v=this.c
u=B.ap(v,A.v,0.6)
u.toString
t=B.ap(v,A.k8,0.4)
t.toString
w.san(new B.a8(A.ay,A.aD,A.x,B.a([u,A.dD,t],x.O),null,null).az(0,new B.a5(0,0,p,o)))
d.aE(new B.a5(0,0,p,o),w)
for(p=this.b,o=p*0.4,p*=0.3,s=0;s<5;++s){w=Math.sin(o+s)
u=Math.sin(p+s*1.7)
t=new B.ar(A.U,A.R,A.X,A.Y,A.W)
t.r=v.j(0.1).gp(0)
t.y=D.bMj
d.O(new B.r(r*(0.15+0.2*s+0.05*w),q*(0.3+0.3*u)),q*(0.2+0.04*s),t)}},
aD(d){return!0}}
C.agK.prototype={
a4(d,e){var w=this
return K.Mw(d,e,w.b,w.c,w.e,w.d)},
aD(d){return!0}}
C.aOM.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b6()
this.bC()}}
C.byC.prototype={}
C.aak.prototype={
B(d){var w=null
return B.c7(B.eW(w,w,w,!0,!0,D.ak8,w,1,!0,w,0,!1,w,!1,w,w,B.aI(w,w,w,w,I.atY,w,w,w,new C.cpv(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.hlE,w,w,w,1,w,!0),D.ak8,B.co(B.a([D.eGH,B.cf(new C.cpw())],x.p),w,w,D.bHD,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.Yh.prototype={
R(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aHU(w,new B.au(A.ax,$.az()),$,A.bH,0,B.a([],x.X),null,null)}}
C.aHU.prototype={
a_(){this.a3()
this.mn()},
b8Z(d){var w=this.d.length
return A.o.F(A.i.bc(A.i.F(A.i.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
mE(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b8Z(v.f)
if(w!==v.x){v.x=w
E.mI("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.l(new C.f1s(v))
C.K_("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
cga(){if(this.d.length<2)return
this.l(new C.f1o(this))},
b3a(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.l(new C.f1n(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gcg9(),p=s.d,o=B.E(B.aA(r,B.b4(r,r,r,new C.bA1(p,s.f,r),A.hf),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.x(B.a([o,new B.a4(r,40,B.at(B.c(n,r,r,r,r,r,r,D.fUI,r,r,r),r,r,r),r)],w),A.l,r,A.e,A.h,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.aDR[A.o.F(v,8)].j(0.9)
t=new B.aP(20,20)
o.push(B.aA(r,B.p(r,B.c(p[v],r,r,r,r,r,r,D.fTU,r,r,r),A.f,r,r,new B.o(u,r,r,new B.bb(t,t,t,t),r,r,A.m),r,r,r,A.f7,A.hc,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.f1q(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a4))}p=A.c.j(0.07)
return E.lX(A.aQ,A.ff,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.x(B.a([new E.fj(o,r,r),B.A(B.a([B.E(B.aN(r,A.M,!1,r,!0,A.t,r,B.aO(),s.e,r,r,r,r,r,2,B.bC(r,new B.b6(4,B.m(14),A.a1),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kz,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.al,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.f1r(s),r,!1,r,r,!1,r,!0,r,A.ae,r,r,r,r,r,r,r,r,r,r,r,A.ds,!0,A.a7,r,A.ao,r,r,r,r),1),A.aa,new E.fJ(A.id,"Add",s.gcg7(s),A.c,r),A.ba,new E.fJ(A.o4,"Spin",q,A.bf,r)],w),A.l,r,A.e,A.h,0,r,r)],w),A.l,r,A.e,A.P,0,A.p))}}
C.bA1.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=k/2,i=e.b,h=i/2+10,g=new B.r(j,h),f=Math.min(k,i)/2-24
i=f+8
k=$.T()
w=B.L()
w.r=D.blJ.gp(0)
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
p=B.bY(g,f)
o=new B.ar(A.U,A.R,A.X,A.Y,A.W)
o.r=D.aDR[A.o.F(r,8)].gp(0)
d.cQ(p,q,u,!0,o)
o=B.bY(g,f)
p=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p.b=A.ac
p.c=2
p.r=A.c.j(0.6).gp(0)
d.cQ(o,q,u,!0,p)
J.bs(i.save())
i.translate(j,h)
i.rotate((q+s)*180/3.141592653589793,0,0)
p=w[r]
if(p.length>12)p=A.a.aw(p,0,11)+"\u2026"
n=new B.j2(new B.eH(p,l,l,A.cY,l,l,l,l,l,l,D.fGE),A.a7,A.cc,new B.ki(1),l,l,l,l,A.cd,l,A.cK)
n.eL()
p=n.b
o=p.c
p=p.a.c
n.a4(d,new B.r(f-o-16,-p.gb4(p)/2))
i.restore()}i=B.L()
i.r=D.ajL.gp(0)
d.O(g,20,i)
i=B.L()
i.b=A.ac
i.c=3
i.r=A.aQ.gp(0)
d.O(g,20,i)
m=new B.aH(k.r,A.ak,l,l,B.a([],x.v))
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
h.r=A.b6.gp(0)
d.af(m,h)},
aD(d){return!0}}
C.X1.prototype={
R(){return new C.bnT($,A.bH,0,B.a([],x.X),null,null)}}
C.bnT.prototype={
a_(){this.a3()
this.mn()},
mE(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.K_("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.Vh(900,new C.e93())}w.l(new C.e94())},
b3c(d){return this.l(new C.e8Z(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aZ(A.o.v(A.i.ao(m,60)),2,"0")
v=A.a.aZ(A.o.v(A.o.F(A.i.cG(m),60)),2,"0")
m=B.b4(n,n,n,new C.buF(l,A.c1,n),A.aVU)
u=B.c(w+":"+v,n,n,n,n,n,n,D.fLs,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.at(new B.a4(280,280,new B.an(A.z,n,A.ad,A.t,B.a([m,B.x(B.a([u,B.c(t,n,n,n,n,n,n,D.fKn,n,n,n),A.at,B.c("Sessions done: "+o.r,n,n,n,n,n,n,A.wd,n,n,n)],s),A.l,n,A.e,A.P,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.duD[r]
u.push(new E.e2(""+q+" min",o.d===q,new C.e90(o,q),n,A.c1,n))}m=o.f
p=m?Ad.vy:A.fO
m=m?"Pause":"Start"
return E.lX(A.c1,A.ff,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.x(B.a([new E.fj(u,n,n),new E.fj(B.a([new E.fJ(p,m,new C.e91(o),A.bf,n),new E.fJ(A.nk,"Reset",new C.e92(o),A.c,n)],s),n,n)],s),A.l,n,A.e,A.P,0,A.p))}}
C.buF.prototype={
a4(d,e){var w,v,u,t,s=e.eo(A.J),r=e.a/2-14
$.T()
w=B.L()
w.b=A.ac
w.c=16
w.r=A.c.j(0.08).gp(0)
d.O(s,r,w)
w=B.bY(s,r)
v=B.L()
v.b=A.ac
v.c=16
v.d=A.bG
u=this.c
t=B.ap(u,A.c,0.4)
t.toString
v.san(new B.he(A.z,-1.5707963267948966,4.71238898038469,A.x,B.a([u,t,u],x.O),null,null).az(0,B.bY(s,r)))
d.cQ(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aD(d){return d.b!==this.b}}
C.Wc.prototype={
R(){return new C.bns($,A.bH,0,B.a([],x.X),null,null)}}
C.bns.prototype={
a_(){this.a3()
this.mn()},
mE(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.Uo.h(0,p.d)
w.toString
v=A.d.eH(w,new C.dTu())
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
E.mI("flute",D.cfl[t]+5,1400,0.35)}p.l(new C.dTv())},
gcgd(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.Lj("Press Start",0.5)
w=D.Uo.h(0,this.d)
w.toString
v=A.d.eH(w,new C.dTp())
u=A.i.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.Lj("Breathe in",0.5+0.5*A.dQ.aA(0,p))
case 1:return new B.Lj("Hold",1)
case 2:return new B.Lj("Breathe out",1-0.5*A.dQ.aA(0,p))
default:return new B.Lj("Hold",0.5)}}}return new B.Lj("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gcgd(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.fY.j(0.12+(3-u)*0.05)
n.push(B.p(q,q,A.f,q,q,new B.o(s,q,q,q,u===0?B.a([new B.aa(0,A.H,A.fY.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(B.c(p.a,q,q,q,q,q,q,A.qr,q,q,q))
n.push(B.ao(0,B.c("Breaths: "+r.w,q,q,q,q,q,q,A.kz,q,q,q),q,q,q,q,q,q))
n=B.at(new B.a4(300,340,new B.an(A.z,q,A.ad,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aQ(D.Uo.geA(D.Uo));w.C();){v=w.gP(w)
o.push(new E.e2(v,r.d===v,new C.dTs(r,v),q,A.fY,q))}w=r.e
v=w?A.vC:A.fO
w=w?"Stop":"Start"
o.push(new E.fJ(v,w,new C.dTt(r),A.bf,q))
return E.lX(A.fY,A.ff,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new E.fj(o,q,q))}}
C.aLm.prototype={}
C.WT.prototype={
R(){return new C.bnK(new B.cB(null,x.A),B.a([],x.au),A.aw,A.c)}}
C.bnK.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aI(s,s,s,s,I.p5,s,s,s,new C.e4Q(t,d),s,s,s,s,"Share",s)],r),p=B.by(B.m(18),new B.e8(B.aA(s,B.b4(s,s,s,new C.bpN(t.e,t.x,s),A.hf),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e4R(t),new C.e4S(t),s,s,s,s,s,s,s,s,s,new C.e4T(t),s,s,s,s,!1,A.a4),t.d),A.aq),o=B.a([],r)
for(w=0;w<9;++w){v=D.d7V[w]
u=!t.w&&t.f.A(0,v)
o.push(new E.Go(v,u,new C.e4U(t,v),!1,s))}u=t.r
return E.lX(A.bC,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.D(A.bR,p,s),"DRAW PAD",B.x(B.a([new E.fj(o,s,s),E.j9(A.bC,""+A.i.S(u),"Brush",30,2,new C.e4V(t),u),new E.fj(B.a([new E.e2("Eraser",t.w,new C.e4W(t),A.zW,A.bC,s),new E.fJ(A.q0,"Undo",new C.e4X(t),A.c,s),new E.fJ(A.eq,"Clear",new C.e4Y(t),A.c,s),new E.fJ(A.QC,"Paper",new C.e4Z(t),A.c,s)],r),s,s)],r),A.l,s,A.e,A.P,0,A.p))}}
C.bpN.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k
$.T()
w=B.L()
w.r=this.c.gp(0)
d.aE(new B.a5(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=x.v,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=$.T()
q=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p=s.a
q.r=p.gp(p)
o=s.b
q.c=o
q.d=A.bG
q.e=A.dP
q.b=A.ac
n=s.c
if(n.length===1){r=A.d.gG(n)
n=new B.ar(A.U,A.R,A.X,A.Y,A.W)
n.r=p.gp(p)
d.O(r,o/2,n)}else{p=B.a([],u)
m=new B.aH(r.r,A.ak,null,null,p)
p.push(new B.aZ(A.d.gG(n).a,A.d.gG(n).b))
m.ac()
for(l=1;l<n.length-1;){r=n[l]
o=r.a;++l
k=n[l]
r=r.b
k=new B.ck(o,r,(o+k.a)/2,(r+k.b)/2)
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
C.XE.prototype={
R(){var w=x.S
return new C.aHa(B.aR(w),B.aR(w))}}
C.aHa.prototype={
a_(){this.a3()
this.avm()},
avm(){var w,v,u=this,t=x.N,s=B.bt(D.dAi,!0,t)
A.d.DP(s)
w=x.S
v=B.U(s).c
t=B.B(B.cV(s,0,B.dz(u.d,"count",w),v),t)
A.d.u(t,B.cV(s,0,B.dz(u.d,"count",w),v))
A.d.DP(t)
u.e=t
u.f.a6(0)
u.r.a6(0)
u.w=0
u.x=!1},
cg8(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
E.mI("bell",12+A.o.F(d,9),150,0.35)
s.l(new C.ewJ(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gG(0)
u=w.gal(0)
w=s.e
w===$&&B.d()
t=x.H
if(w[v]===w[u])B.bN(A.nb,new C.ewK(s,v,u),t)
else{s.x=!0
B.bN(Ak.CZ,new C.ewL(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.d()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.c("Moves: "+r.w,q,q,q,q,q,q,A.WY,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.ao(p,2)+" / "+o
o=x.p
p=B.x(B.a([new B.D(A.zr,B.A(B.a([u,B.c(p,q,q,q,q,q,q,B.l(q,q,w?A.aQ:A.ab,q,q,q,q,q,q,q,q,q,q,q,A.D,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.l,q,A.iA,A.h,0,q,q),q),B.E(B.iM(!0,q,q,A.y,new B.hX(v,8,8,1,q),new C.ewP(r),r.e.length,A.bg,q,A.ah,!1),1)],o),A.l,q,A.e,A.h,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.d9G[t]
o.push(new E.e2(s.b,r.d===s.a,new C.ewQ(r,s),q,A.aH,q))}o.push(new E.fJ(I.asp,"New game",new C.ewR(r),A.bf,q))
return E.lX(A.aH,A.ff,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new E.fj(o,q,q))}}
C.XP.prototype={
R(){return new C.aHx(B.a([],x.t))}}
C.aHx.prototype={
cgc(d){A.d.a6(this.d)
this.w=!0
this.b3b()},
b3b(){this.d.push(A.cV.av(4))
this.e=0
this.a0H()},
a0H(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0H=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.l(new C.eJB(t))
s=x.H
w=3
return B.b(B.bN(A.lY,null,s),$async$a0H)
case 3:r=t.d,q=B.bt(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aWQ(n)
w=7
return B.b(B.bN(new B.bh(1000*Math.max(280,600-r.length*18)),null,s),$async$a0H)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.l(new C.eJC(t))
case 1:return B.h(u,v)}})
return B.i($async$a0H,v)},
aWQ(d){this.l(new C.eJz(this,d))
E.mI("marimba",D.cfk[d]+5,450,0.55)
B.bN(A.Hw,new C.eJA(this),x.H)},
cge(d){var w,v,u=this
if(!u.w||u.r)return
u.aWQ(d)
w=u.d
v=u.e
if(w[v]!==d){G.dH(90,"",600,0,0.5,"saw")
u.l(new C.eJD(u))
return}++v
u.e=v
if(v===w.length){u.l(new C.eJE(u))
B.bN(A.hy,new C.eJF(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.c("Best: "+q.x,p,p,p,p,p,p,W.aYx,p,p,p),n=B.c(q.y,p,p,p,p,p,p,D.fV8,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aCI[v]
u=u.j(q.f===v?1:0.35)
t=new B.aP(28,28)
s=q.f===v?B.a([new B.aa(0,A.H,D.aCI[v].j(0.8),A.J,30)],w):p
r=new B.ax(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.aA(p,B.cX(p,p,p,p,A.aZ,new B.o(u,p,new B.bE(r,r,r,r),new B.bb(t,t,t,t),s,p,A.m),A.jA,p,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eJG(q,v),p,p,p,p,p,p,!1,A.a4))}o=B.at(new B.D(A.ae,B.x(B.a([o,A.aj,n,A.di,new B.fM(1,B.lc(1,l,2,12,12,p,A.e8,!1),p)],m),A.l,p,A.bb,A.h,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return E.lX(A.bu,A.ff,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new E.fj(B.a([new E.fJ(A.fO,n,q.gcgb(q),A.bf,p)],m),p,p))}}
C.Y8.prototype={
R(){return new C.bp0(new B.au(A.ax,$.az()))}}
C.bp0.prototype={
ayW(d){return B.o6(A.i.a5(d,2),B.ag("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eXO(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.cA(B.aK(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eXX()
l=B.aN(m,A.M,!1,m,!0,A.t,m,B.aO(),l,m,m,m,m,m,2,B.bC(m,m,m,m,m,m,m,m,!0,new B.b6(4,B.m(16),Af.yA),m,m,m,m,m,m,m,m,m,m,m,new B.b6(4,B.m(16),D.b7P),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.ma,"Bill amount",!0,!0,!1,m,m,m,m,D.fSm,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.al,m,m,m,m,m,A.eh,m,m,m,1,m,m,!1,"\u2022",m,new C.eXT(n),m,m,m,!1,m,m,!1,m,!0,m,A.ae,m,m,m,m,m,m,m,m,m,m,m,A.aXv,!0,A.a7,m,A.ao,m,m,m,m)
k=A.bf.j(0.1)
s=B.m(20)
r=B.K(A.bf.j(0.35),A.r,1)
q=x.p
s=B.co(B.a([l,A.by,B.p(m,B.x(B.a([t.$2("Tip ("+A.i.S(n.e)+"%)","$"+n.ayW(w)),t.$2("Total","$"+n.ayW(v)),Ac.OS,t.$3$big("Each of "+n.f+" pays","$"+n.ayW(u),!0)],q),A.l,m,A.e,A.h,0,A.p),A.f,m,m,new B.o(k,m,r,s,m,m,A.m),m,m,m,m,A.bS,m,m,m)],q),m,m,A.f9,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cU8[p]
r.push(new E.e2(""+o+"%",A.i.S(n.e)===o,new C.eXU(n,o),m,A.bf,m))}l=n.f
return E.lX(A.bf,A.ff,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.x(B.a([new E.fj(r,"TIP",m),E.j9(A.aH,""+l,"People",20,1,new C.eXV(n),l),new E.fj(B.a([new E.e2("Round up",n.r,new C.eXW(n),m,A.aQ,m)],q),m,m)],q),A.l,m,A.e,A.P,0,A.p))}}
C.XD.prototype={
R(){var w=B.a([3,5],x.t)
return new C.bov(w,A.cV,$,A.bH,0,B.a([],x.X),null,null)}}
C.bov.prototype={
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
E.Ya("snare",0,0.5)}u.l(new C.evo())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.h9()
u.w=t
u.x=t?0:3.141592653589793
E.mI("bell",24,400,0.5)}u.l(new C.evp())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bhg(v,o.r>0,n))}u=B.aA(n,B.at(B.c_(A.fV,m,A.br,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.evh(o),n,n,n,n,n,n,!1,A.a4)}else if(m==="coin"){t=A.i.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.K(A.de,A.r,6)
s=B.a([new B.aa(0,A.H,A.aQ.j(0.4),A.J,30)],x.V)
u=B.aA(n,B.at(B.eb(A.z,B.p(A.z,B.c(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fRv,n,n,n),A.f,n,n,new B.o(n,n,v,n,s,D.eO8,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.evi(o),n,n,n,n,n,n,!1,A.a4)}else{m=o.as
u=B.aA(n,B.at(B.x(B.a([B.c(m===0?"?":""+m,n,n,n,n,n,n,D.fG7,n,n,n),B.c("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kz,n,n,n)],x.p),A.l,n,A.e,A.P,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.evj(o),n,n,n,n,n,n,!1,A.a4)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.drG[r]
v.push(new E.e2(q.b,o.d===q.a,new C.evk(o,q),q.c,A.bl,n))}v=B.a([new E.fj(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(E.j9(A.bl,""+s,"Dice",4,1,new C.evl(o),s))}if(o.d==="num"){s=o.z
s=E.j9(A.bl,""+s,"From",100,1,new C.evm(o),s)
p=o.Q
A.d.u(v,B.a([s,E.j9(A.bl,""+p,"To",1000,2,new C.evn(o),p)],m))}return E.lX(A.bl,A.ff,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.x(v,A.l,n,A.e,A.P,0,A.p))}}
C.bhg.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cV.ai()-0.5)*0.6
else w=0
v=B.m(22)
u=B.a([new B.aa(0,A.H,A.v.j(0.4),A.cz,14)],x.V)
t=B.a([],x.p)
for(s=D.dNi.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bK(s[q],p,p,B.p(p,p,A.f,p,p,A.Z2,p,18,p,p,p,p,p,18),p))
return B.eQ(A.z,w,B.p(p,new B.an(A.a0,p,A.ad,A.t,t,p),A.f,p,p,new B.o(A.c,p,p,v,u,p,A.m),p,100,p,p,A.bF,p,p,100),p)}}
C.aOy.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b6()
this.bC()}}
C.bBK.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bAN()}}
C.aOT.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b6()
this.bC()}}
C.bBQ.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bB8()}}
C.aPj.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b6()
this.bC()}}
C.bBZ.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bBA()}}
C.aPL.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b6()
this.bC()}}
C.bC7.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bC1()}}
var z=a.updateTypes(["P(u9)","~()","P(a6n)","ay<~>()","P(Dn)","F(u9,F)","H(H,u9)","P(Dj)","P(a0g)","P(adt)","P(a5f)","P(o_)","Y9()","Wb()","aak()","XJ()","XY()","XK()","P(na)","Wi()","ah2(Z,F)","afS(Z,F)","~(a9<@,@>)","F(Dj,Dj)","n(es)","P(agR)","P(a2v)","P(Dy)","P(adZ)","P(afW)","P(adH)","F(F,rr)","F(F,Dn)","n(rr)","~(rr,ai<n>,F)","rr?(Dn)","XD()","w(n,a2i)","P(ack)","~(Bi)","Yc()","~(xT,n,r,u,H)","~(n,u9)","WU()","Xn(Z)","OE(Z)","WD(Z,bz<H>,bz<H>)","Jc(Z)","Yh()","X1()","Wc()","WT()","XE()","XP()","Y8()","P(rr)"])
C.fT4.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+18}
C.fHz.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gG(d.e.split(". "))+"."},
$S:z+24}
C.fPp.prototype={
$1(d){var w
if(!this.a.MS(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fPq.prototype={
$1(d){return d.x},
$S:z+0}
C.fT1.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fT2.prototype={
$1(d){var w
if(!this.a.MS(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fT3.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.eoq.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eor.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.y(this.b,this.c))},
$S:0}
C.eos.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd3(v).Q
v.toString
w.m7(v,A.eb,A.ib)}},
$S:7}
C.eoD.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a6(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.eoE.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.eoz.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.eox.prototype={
$2(d,e){var w=this.a
w.r.push(B.cC(B.dv(0,0,0,d,0,0),new C.eoy(w,this.b,e)))},
$S:1946}
C.eoy.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.eoA.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gXD().amf(0,u[1],u[2],u[3])
u[4].bP(0,new C.eov(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
G.dH(700+w.e*120,"",80,0,0.25,"square")
v.l(new C.eow(w.a,v,w.f,w.r))},
$S:0}
C.eov.prototype={
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
C.eow.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.i.bc(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.eoB.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gXD().an3(t,u[1],s,u[3])
G.dH(1500,"",45,0,0.25,"tri")
v=w.b
v.l(new C.eou(w.a,v,w.e,w.f))},
$S:0}
C.eou.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.i.bc(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.eoC.prototype={
$0(){G.dH(300,"",360,-1.2,0.3,"square")
var w=this.a
w.l(new C.eot(w,this.b))},
$S:0}
C.eot.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.eoH.prototype={
$0(){var w=this.a
return w.l(new C.eoG(w))},
$S:0}
C.eoG.prototype={
$0(){return this.a.at=!0},
$S:0}
C.eoI.prototype={
$0(){var w=this.a
return w.l(new C.eoF(w))},
$S:0}
C.eoF.prototype={
$0(){return this.a.at=!1},
$S:0}
C.eoJ.prototype={
$0(){var w=this.a
w.f.sb1(0,this.b)
w.Qr()},
$S:0}
C.eoK.prototype={
$0(){return this.a.ZJ(this.b)},
$S:0}
C.eoL.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.Qr():w.aZO()},
$S:2}
C.eoM.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.Qr():w.aZO()},
$S:0}
C.eDP.prototype={
$2(d,e){return d+e},
$S:1947}
C.eE8.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.eE7(w,d))},
$S:1948}
C.eE7.prototype={
$0(){var w=B.aJ(J.t(this.b,"unlocked"))
w=w==null?null:A.i.M(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.eE9.prototype={
$0(){},
$S:0}
C.eEa.prototype={
$0(){},
$S:0}
C.eDR.prototype={
$0(){return this.a.l(new C.eDQ(this.b,this.c))},
$S:0}
C.eDQ.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eDG.prototype={
$1(d){return this.a.cx===d},
$S:28}
C.eDH.prototype={
$1(d){return this.a.cx=d},
$S:27}
C.eDI.prototype={
$1(d){return this.a.cy===d},
$S:28}
C.eDJ.prototype={
$1(d){return this.a.cy=d},
$S:27}
C.eDK.prototype={
$1(d){return this.a.db===d},
$S:28}
C.eDL.prototype={
$1(d){return this.a.db=d},
$S:27}
C.eDM.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:28}
C.eDN.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.X(0,d):w.I(0,d)},
$S:27}
C.eDO.prototype={
$0(){var w=this.a
return w.l(w.gazw())},
$S:0}
C.eDE.prototype={
$1(d){return this.a.$1(!0)},
$S:68}
C.eDF.prototype={
$1(d){return this.a.$1(!1)},
$S:115}
C.eDD.prototype={
$1(d){return this.a.$1(!1)},
$S:145}
C.eE1.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.ch=n
n=B.b4(p,p,p,new C.blb(o,p),n)
w=this.b
v=C.bEo("WORLD",w.a,w.c)
u=C.bEo("GRAVITY",B.v(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.i.S(t*100)
t=t<0.25?A.c1:A.bf
t=C.bEo("FUEL",""+s+"%",t)
s=o.r.b
r=A.i.S(s*100)
s=s>D.Ei[o.db].d?A.c1:A.c
q=x.p
s=B.a([v,u,t,C.bEo("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(C.bEo("HEIGHT",""+A.i.S(A.i.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ao(p,B.A(s,A.l,p,A.iA,A.h,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bJW(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.u_[w].a+".":"You landed on every world!"
v=B.a([new E.fJ(A.o8,"Again",new C.eDX(o),A.c,p),new E.fJ(A.oX,"Rebuild",new C.eDY(o),A.aQ,p)],q)
if(o.d+1<7)v.push(new E.fJ(A.jE,"Next world",new C.eDZ(o),A.bf,p))
n.push(C.hKi("Perfect landing!",w,A.bf,v))}if(o.as==="crashed")n.push(C.hKi("Crash!",o.at,A.c1,B.a([new E.fJ(A.o8,"Try again",new C.eE_(o),A.bf,p),new E.fJ(A.oX,"Rebuild",new C.eE0(o),A.aQ,p)],q)))
return new B.an(A.a0,p,A.b4,A.t,n,p)},
$S:62}
C.eDX.prototype={
$0(){var w=this.a
return w.l(w.gazw())},
$S:0}
C.eDY.prototype={
$0(){var w=this.a
return w.l(new C.eDU(w))},
$S:0}
C.eDU.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eDZ.prototype={
$0(){var w=this.a
return w.l(new C.eDT(w))},
$S:0}
C.eDT.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.eE_.prototype={
$0(){var w=this.a
return w.l(w.gazw())},
$S:0}
C.eE0.prototype={
$0(){var w=this.a
return w.l(new C.eDS(w))},
$S:0}
C.eDS.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eE2.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.l(new C.eDW(v,w))},
$S:0}
C.eDW.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.eE3.prototype={
$1(d){return this.a.y=d},
$S:9}
C.eE4.prototype={
$1(d){return this.a.Q=d},
$S:9}
C.eE5.prototype={
$1(d){return this.a.z=d},
$S:9}
C.eE6.prototype={
$0(){var w=this.a
return w.l(new C.eDV(w))},
$S:0}
C.eDV.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dTn.prototype={
$0(){var w=0,v=B.j(x.k),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hc(B.a([C.hF4(),C.hF5()],x.D),x.K),$async$$0)
case 3:r=e
q=t.a
if(q.c==null){w=1
break}s=q.as
s.toString
s.kU(0,B.cU(J.t(r,1)))
q.l(new C.dTm(q,r))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:39}
C.dTm.prototype={
$0(){return this.a.d=x.m.a(J.t(this.b,0))},
$S:0}
C.dSY.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dSZ.prototype={
$0(){return this.a.c0Z(B.aV(J.t(this.b,"group")))},
$S:0}
C.dT_.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dT0.prototype={
$1(d){return A.a.aZ(A.o.fw(A.o.D(A.i.S(d*255),0,255),16),2,"0")},
$S:307}
C.dTo.prototype={
$0(){return E.Ya("kick",0,0.25)},
$S:0}
C.dT1.prototype={
$0(){return this.a.cy=this.b},
$S:0}
C.dT2.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dT3.prototype={
$0(){return E.Ya("kick",0,0.5)},
$S:0}
C.dT4.prototype={
$0(){return G.dH(1300+this.a.RG.av(900),"",40,0,0.2,"square")},
$S:0}
C.dT6.prototype={
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
u=w}if(u.cy!=null&&!A.d.aR(u.d.e,new C.dT5(u)))u.cy=null
u.id=0},
$S:0}
C.dT5.prototype={
$1(d){var w=this.a
return d.a===w.cy&&w.aBu(d)},
$S:z+10}
C.dSV.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p4
w=u.a
v=u.c
w.R8=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p3.toLowerCase()+"."},
$S:0}
C.dSW.prototype={
$0(){var w=this.a
return w.l(w.gcbV())},
$S:0}
C.dSX.prototype={
$0(){return this.a.afG(null)},
$S:0}
C.dTd.prototype={
$0(){var w=this.a.as
return w==null?null:w.fc(0,B.J(["t","shot"],x.N,x.z))},
$S:0}
C.dTe.prototype={
$0(){return this.a.cJn(this.b.a)},
$S:0}
C.dTf.prototype={
$0(){return this.a.afG(this.b)},
$S:0}
C.dTg.prototype={
$1(d){var w=this.a
return w.l(new C.dTc(w,d))},
$S:6}
C.dTc.prototype={
$0(){return this.a.k4=this.b},
$S:0}
C.dTh.prototype={
$0(){var w=this.a
return w.l(new C.dTb(w,this.b))},
$S:0}
C.dTb.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dTi.prototype={
$0(){var w=this.a
return w.l(new C.dTa(w))},
$S:0}
C.dTa.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.dTj.prototype={
$0(){var w=this.a
return w.l(new C.dT9(w))},
$S:0}
C.dT9.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.fc(0,B.J(["t","reset"],x.N,x.z))
w.cy=null
w.db=0.5
w.dx=0.05
w.fr=1
w.fy=D.MS},
$S:0}
C.dTk.prototype={
$0(){var w=this.a
return w.l(new C.dT8(w))},
$S:0}
C.dT8.prototype={
$0(){var w=this.a,v=!w.p2
w.p2=v
w.p4=0
w.cy=null
if(v)w.b1E()
else w.p3=null},
$S:0}
C.dTl.prototype={
$0(){var w=this.a
return w.l(new C.dT7(w))},
$S:0}
C.dT7.prototype={
$0(){var w=this.a
return w.ok=!w.ok},
$S:0}
C.c92.prototype={
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
C.c93.prototype={
$1(d){var w=new B.qJ([],[]).o7(d.data,!0)
if(x.f.b(w)&&J.t(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:532}
C.fAB.prototype={
$1(d){var w=J.a2(d)
return w.h(d,0)&&w.h(d,1)},
$S:241}
C.fAC.prototype={
$1(d){var w=J.a2(d)
return w.h(d,0)||w.h(d,1)},
$S:241}
C.fAD.prototype={
$1(d){var w=J.a2(d)
return w.h(d,0)!==w.h(d,1)},
$S:241}
C.fAK.prototype={
$1(d){return!J.t(d,0)},
$S:241}
C.fAL.prototype={
$1(d){var w=J.a2(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:241}
C.fAM.prototype={
$1(d){var w=J.a2(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:241}
C.dV3.prototype={
$1(d){return this.a.awa(0)},
$S:7}
C.dUI.prototype={
$0(){var w=this.b
return this.a.cx=new B.O(w,B.itl(),B.U(w).k("O<1,F>")).fD(0)},
$S:0}
C.dUL.prototype={
$1(d){return""+d},
$S:79}
C.dV4.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dUG.prototype={
$1(d){return this.a.awa(this.b)},
$S:7}
C.dUH.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.aA2(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mU(0,d,a1.mo(0.15,0.3))
u=a1.mU(0,d,a1.mo(0.15,0.62))
t=a1.mU(0,"and",a1.mo(0.48,0.46))
s=a1.mU(0,a0,a1.mo(0.82,0.46))
a1=t.a
w.push(new C.o_(v.a,a1,0))
w.push(new C.o_(u.a,a1,1))
w.push(new C.o_(a1,s.a,0))
break
case 1:v=a1.mU(0,d,a1.mo(0.12,0.25))
u=a1.mU(0,d,a1.mo(0.12,0.65))
r=a1.mU(0,"xor",a1.mo(0.46,0.25))
q=a1.mU(0,"and",a1.mo(0.46,0.65))
p=a1.aA1(0,a0,a1.mo(0.82,0.25),0)
o=a1.aA1(0,a0,a1.mo(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.o_(a1,n,0))
m=u.a
w.push(new C.o_(m,n,1))
l=q.a
w.push(new C.o_(a1,l,0))
w.push(new C.o_(m,l,1))
w.push(new C.o_(n,p.a,0))
w.push(new C.o_(l,o.a,0))
break
case 2:k=a1.mU(0,"clock",a1.mo(0.15,0.4))
j=a1.mU(0,"not",a1.mo(0.45,0.65))
s=a1.mU(0,a0,a1.mo(0.82,0.3))
i=a1.mU(0,"buzzer",a1.mo(0.82,0.65))
a1=k.a
w.push(new C.o_(a1,s.a,0))
n=j.a
w.push(new C.o_(a1,n,0))
w.push(new C.o_(n,i.a,0))
break
default:h=a1.mU(0,d,a1.mo(0.12,0.25))
g=a1.mU(0,d,a1.mo(0.12,0.7))
f=a1.mU(0,"nor",a1.mo(0.5,0.25))
e=a1.mU(0,"nor",a1.mo(0.5,0.7))
s=a1.mU(0,a0,a1.mo(0.86,0.25))
a1=f.a
w.push(new C.o_(g.a,a1,0))
n=e.a
w.push(new C.o_(n,a1,1))
w.push(new C.o_(h.a,n,0))
w.push(new C.o_(a1,n,1))
w.push(new C.o_(a1,s.a,0))}},
$S:0}
C.dUM.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.aA2(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.Dj(p,"switch",new B.r(0.14*q.a,r*q.b),0))}o.mU(0,w.e,o.mo(0.86,0.5))},
$S:0}
C.dUB.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dUC.prototype={
$2(d,e){return A.i.aQ(d.c.b,e.c.b)},
$S:z+23}
C.dUD.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dUE.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dUF.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.af_(this.c)
if(v.ax)C.K_("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gG(w)
v.CW=!1
if(v.ax)G.dH(140,"",250,0,0.3,"square")}},
$S:0}
C.dUN.prototype={
$0(){},
$S:0}
C.dUO.prototype={
$0(){return A.d.cJ(this.a.e,this.b)},
$S:0}
C.dUP.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dUK.prototype={
$0(){var w=this.a,v=this.b
w.d.X(0,v)
A.d.br(w.e,new C.dUJ(v))
w.cy=null},
$S:0}
C.dUJ.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
C.dUA.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mU(0,this.b,new B.r(w.x.a*(0.3+v.ai()*0.4),w.x.b*(0.2+v.ai()*0.6))).a},
$S:0}
C.dUY.prototype={
$0(){var w=this.a
return w.l(new C.dUX(w))},
$S:0}
C.dUX.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dUZ.prototype={
$2(d,e){var w=null,v=this.a,u=new B.av(e.b,e.d)
v.x=u
return B.aA(A.c_,B.js(B.b4(w,w,w,new C.bf8(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dUS(v),w,w,w,new C.dUT(v),new C.dUU(v),new C.dUV(v),w,w,w,w,w,w,w,w,w,w,new C.dUW(v),w,w,w,!1,A.a4)},
$S:37}
C.dUW.prototype={
$1(d){return this.a.cdK(d.b)},
$S:57}
C.dUU.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cnb(u)
if(t!=null){v.as=t
v.at=u
return}w=v.aB_(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aI(0,u)}},
$S:50}
C.dUV.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.r(A.i.D(w.a+u.Q.a,46,u.x.a-46),A.i.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:19}
C.dUT.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c4u(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.br(v,new C.dUQ(w))
u=t.as
u.toString
v.push(new C.o_(u,w.a,w.b))
B.k9()}}t.z=t.as=null},
$S:38}
C.dUQ.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
C.dUS.prototype={
$1(d){return this.a.ayP(d.b)},
$S:308}
C.dV_.prototype={
$0(){return this.a.bFF(this.b.a)},
$S:0}
C.dV0.prototype={
$0(){return this.a.awa(this.b.a)},
$S:0}
C.dV1.prototype={
$0(){var w=this.a
return w.l(new C.dUR(w))},
$S:0}
C.dUR.prototype={
$0(){var w=this.a
w.aA2(0)
w.ay=null},
$S:0}
C.dV2.prototype={
$0(){return this.a.cEV(this.b)},
$S:0}
C.cZ4.prototype={
$0(){var w=this,v=null,u=B.h_(v,A.cK,v,v,v,B.cW(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a7,A.cc,v,A.e4,A.cd)
u.eL()
return u},
$S:281}
C.e0d.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e0c.prototype={
$0(){return this.a.d=null},
$S:0}
C.e0f.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c6r()},
$S:128}
C.e0e.prototype={
$0(){return B.a7(this.a,!1).hY()},
$S:0}
C.fB1.prototype={
$0(){return I.aNu},
$S:z+40}
C.fB2.prototype={
$0(){return D.e2G},
$S:z+43}
C.fB3.prototype={
$0(){return D.dXl},
$S:z+13}
C.fB4.prototype={
$0(){return D.euq},
$S:z+14}
C.fB5.prototype={
$0(){return D.ecj},
$S:z+15}
C.fB6.prototype={
$0(){return I.aNl},
$S:z+16}
C.fB7.prototype={
$0(){return D.esc},
$S:z+17}
C.fB8.prototype={
$0(){return I.aNt},
$S:z+12}
C.fB9.prototype={
$0(){return D.dZC},
$S:z+19}
C.fgg.prototype={
$2(d,e){return new C.ah2(e,$.bJ7()[e],new C.fgf(e,this.a),null)},
$S:z+20}
C.fgf.prototype={
$0(){var w=this.a,v=L.aKZ.h(0,$.bJ7()[w].a)
$.auG=v==null?"music":v
B.a7(this.b,!1).c9(B.e6(new C.fgd(w),!1,null,x.H))},
$S:0}
C.fgd.prototype={
$1(d){return $.bJ7()[this.a].e.$0()},
$S:42}
C.fgh.prototype={
$2(d,e){return new C.afS(e,D.aDo[e],new C.fge(this.a,e),null)},
$S:z+21}
C.fge.prototype={
$0(){return this.a.d.$1(D.aDo[this.b])},
$S:0}
C.ffX.prototype={
$0(){return this.a.as=!0},
$S:0}
C.ffW.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ffM.prototype={
$0(){var w=this.a
w.ch=0
w.as=!1},
$S:0}
C.ffN.prototype={
$1(d){return this.bq6(d)},
bq6(d){var w=0,v=B.j(x.I),u,t=this,s,r,q
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
r.gr1().sp(0,d/t.b)
r.gJU().sp(0,0.5)
w=3
return B.b($.aU.glK(),$async$$1)
case 3:r=$.aU.bk$.x.h(0,r.f)
s=r==null?null:r.gbg()
if(!(s instanceof B.ot))throw B.Y(B.bd("closed"))
q=C
w=4
return B.b(s.lw(t.c),$async$$1)
case 4:u=q.fZx(f,t.d,t.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:510}
C.ffO.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.ffL(w,d))},
$S:6}
C.ffL.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.ffP.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.ffV.prototype={
$1(d){var w=this
return new B.ea(new C.ffU(w.a,w.b,w.c,w.d),null)},
$S:20}
C.ffU.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=x.w,a2=B.aF(a3,a0,a1).w
a1=B.aF(a3,a0,a1).w
w=x.p
v=B.a([D.h1V,A.at,D.h8N,A.af],w)
for(u=d.d,t=d.a,s=x.G,r=d.b,q=d.c,p=0;p<3;p=o){o=p+1
n=B.c("SLAB "+o,a0,a0,a0,a0,a0,a0,D.fRP,a0,a0,a0)
m=new B.aP(12,12)
l=new B.aP(12,12)
l=B.a([new B.bu(1,A.b8,B.aN(a0,A.M,!1,a0,!0,A.t,a0,B.aO(),r[p],a0,a0,a0,a0,a0,2,new B.ef(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Title",a0,A.FE,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.bb(m,m,m,m),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.al,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ae,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jN,!0,A.a7,a0,A.ao,a0,a0,a0,a0),a0),A.aa,new B.bu(2,A.b8,B.aN(a0,A.M,!1,a0,!0,A.t,a0,B.aO(),q[p],a0,a0,a0,a0,a0,2,new B.ef(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Small line",a0,A.FE,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.bb(l,l,l,l),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.al,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ae,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jN,!0,A.a7,a0,A.ao,a0,a0,a0,a0),a0)],w)
m=B.a([],w)
for(k=0;k<30;++k){j=D.dIb[k]
i=new B.aP(12,12)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.B(t.a.c.d,s)
t.w=h}g=A.d.gG(h).j(0.3)}else g=A.c.j(0.06)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.B(t.a.c.d,s)
t.w=h}f=A.d.gG(h)}else f=A.bx
e=new B.ax(f,u[p].A(0,j)?1.8:1,A.r,-1)
m.push(B.aA(a0,B.p(a0,B.V(j,u[p].A(0,j)?A.c:A.aR,a0,a0,a0,22),A.f,a0,a0,new B.o(g,a0,new B.bE(e,e,e,e),new B.bb(i,i,i,i),a0,a0,A.m),a0,a0,a0,A.f7,a0,a0,a0,42),A.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.ffS(a4,p,u,j),a0,a0,a0,a0,a0,a0,!1,A.a4))}A.d.u(v,B.a([n,A.aj,new B.c2(A.aK,A.e,A.h,A.l,a0,A.p,a0,0,l,a0),A.N,new B.a4(a0,44,B.co(m,a0,a0,a0,a0,a0,A.aK,!1),a0),A.aB],w))}v.push(B.bI(A.BC,a0,new C.ffT(t,r,q,u,a3),a0))
return new B.D(new B.R(0,0,0,a2.f.d),B.bo(!0,new B.cS(new B.aX(0,1/0,0,a1.a.b*0.86),B.co(v,a0,a0,A8.zt,a0,a0,A.ah,!0),a0),!0,!1,A.ag,!0,!0),a0)},
$S:106}
C.ffS.prototype={
$0(){var w=this
return w.a.$1(new C.ffR(w.b,w.c,w.d))},
$S:0}
C.ffR.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.ffT.prototype={
$0(){var w=this,v=w.a
v.l(new C.ffQ(v,w.b,w.c,w.d))
B.a7(w.e,!1).N(null)},
$S:0}
C.ffQ.prototype={
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
C.fg4.prototype={
$0(){var w=this.a
return w.l(new C.fg3(w))},
$S:0}
C.fg3.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.fg5.prototype={
$0(){return E.uR(this.b,this.a.f,"scene")},
$S:0}
C.fg6.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ap(A.d.gG(u),A.d.gal(u),0.4)
u.toString
w=this.a.gJU().x
w===$&&B.d()
return new B.bQ(new B.o(v,v,v,v,v,new B.bU(D.b5h,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.c7],x.O),v,v),A.m),A.bm,v,v)},
$S:298}
C.fg7.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.at(new B.de(A.dp,A.z,A.f,B.cb(new B.hA(B.a([u.gr1(),u.gJU()],x.dS)),new C.fg2(u,this.b,v),w),w),w,w,w)},
$S:235}
C.fg2.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gr1().x
r===$&&B.d()
w=r<0.9?1:1-C.bvC(r,0.9,0.98)
v=s.gJU().x
v===$&&B.d()
u=A.dQ.aA(0,v)
switch(s.gaA3().a){case 0:s=s.bEP(t.b,r,u,t.c)
break
case 1:s=s.bW1(t.b,r,u,t.c)
break
case 2:s=s.cJR(t.b,r,u,t.c)
break
case 3:s=s.bHP(t.b,r,u,t.c)
break
case 4:s=s.bLd(t.b,r,u,t.c)
break
case 5:s=s.cdL(t.b,r,u,t.c)
break
default:s=null}return B.d6(s,w)},
$S:185}
C.fg8.prototype={
$2(d,e){var w=B.ac7(this.b),v=this.c.d,u=B.ap(A.d.gG(v),A.d.gal(v),0.4)
u.toString
v=B.ap(A.d.gG(v),A.d.gal(v),0.4)
v.toString
v=w.cST(u,A.bx,v,3.5)
u=this.a
w=u.gr1().x
w===$&&B.d()
return B.ZB(B.ld(null,null,null,1,0,new C.fg1(u),A.i.D(w,0,1)),v)},
$S:1952}
C.fg1.prototype={
$1(d){var w=this.a
w.gr1().sp(0,d)
if(w.as)w.l(new C.ffY(w))},
$S:6}
C.ffY.prototype={
$0(){return this.a.as=!1},
$S:0}
C.fg9.prototype={
$0(){var w=this.a
w.gr1().sp(0,0)
w.a0e()},
$S:0}
C.fga.prototype={
$1(d){var w=this.a
w.l(new C.fg0(w,d))
if(w.as)w.a0e()},
$S:6}
C.fg0.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.fgb.prototype={
$0(){var w=this.a
w.l(new C.fg_(w,this.b))
w.gr1().sp(0,0)
if(w.as)w.a0e()},
$S:0}
C.fg_.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.fgc.prototype={
$0(){var w=this.a
return w.l(new C.ffZ(w,this.b))},
$S:0}
C.ffZ.prototype={
$0(){var w=B.B(this.b,x.G)
return this.a.w=w},
$S:0}
C.ffJ.prototype={
$2(d,e){return A.i.aQ(d.a,e.a)},
$S:1953}
C.ffK.prototype={
$1(d){return d.b},
$S:1954}
C.duA.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.duB.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.dux.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.duy.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.duz.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.duC.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.duD.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.duE.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.duF.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.duG.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.duH.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.duI.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.duJ.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.duK.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.eD9.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eCZ.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.eD0.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gZ(e.b),97)},
$S:z+31}
C.eD1.prototype={
$2(d,e){return d+A.o.F(A.a.gZ(e.a),31)+A.o.F(A.a.gZ(e.b),17)},
$S:z+32}
C.eD4.prototype={
$1(d){var w=D.nn.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+33}
C.eD5.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.U(q),o=x.dg,n=B.B(new B.ee(new B.cP(new B.X(q,new C.eD6(d),p.k("X<1>")),new C.eD7(r),p.k("cP<1,rr?>")),o),o.k("M.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aL(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.I)(n),++v){u=n[v]
if(w.length>=6)return
t=B.B(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.eD6.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eD7.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.eD2.prototype={
$1(d){return D.nn.h(0,d.b).c===D.yu},
$S:z+55}
C.eD3.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eDz.prototype={
$1(d){var w=this.a,v=d.a,u=A.i.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.vT(0,u)
w.a8m(A.o.ao(v,1000))},
$S:7}
C.eD8.prototype={
$0(){},
$S:0}
C.eCV.prototype={
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
C.eDb.prototype={
$1(d){var w=null,v=this.a.b
return B.bo(!0,B.x(B.a([A.N,B.dP(!1,w,w,w,!0,w,w,w,!0,w,w,B.V(D.nn.h(0,v).b,D.nn.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.hkx,w,B.c(D.nn.h(0,v).a,w,w,w,w,w,w,A.hh,w,w,w),w,w,w),B.dP(!1,w,w,w,!0,w,w,w,!0,w,w,A1.au1,w,w,w,w,new C.eDa(d),!1,w,w,w,w,w,w,w,D.hbF,w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!0)},
$S:30}
C.eDa.prototype={
$0(){B.a7(this.a,!1).N(!0)
return null},
$S:0}
C.eDd.prototype={
$1(d){var w,v,u,t=null,s=B.aF(d,t,x.w).w,r=B.a([D.eGu],x.p)
for(w=0;w<6;++w){v=D.aDL[w]
u=B.c(v.a,t,t,t,t,t,t,A.hh,t,t,t)
r.push(B.dP(!1,t,t,t,!0,t,t,t,!0,t,t,D.c7a,t,t,t,t,new C.eDc(d,v),!1,t,t,t,t,t,B.c(v.b,t,t,t,t,t,t,A.ma,t,t,t),t,u,t,t,t))}return B.bo(!0,new B.cS(new B.aX(0,1/0,0,s.a.b*0.7),B.co(r,t,t,D.bLp,t,t,A.ah,!0),t),!0,!1,A.ag,!0,!0)},
$S:30}
C.eDc.prototype={
$0(){B.a7(this.a,!1).N(this.b)
return null},
$S:0}
C.eCY.prototype={
$1(d){var w=null
return B.ek(B.a([B.bM(!1,A.dw,w,w,!0,w,w,w,new C.eCW(d),w,w),B.bM(!1,A.FK,w,w,!0,w,w,w,new C.eCX(d),w,w)],x.p),w,w,L.mn,D.h9_,w,w,w,w,D.hbZ,w)},
$S:18}
C.eCW.prototype={
$0(){B.a7(this.a,!1).N(!1)
return null},
$S:0}
C.eCX.prototype={
$0(){B.a7(this.a,!1).N(!0)
return null},
$S:0}
C.eDx.prototype={
$0(){var w=this.a
return w.l(new C.eDw(w))},
$S:0}
C.eDw.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eDy.prototype={
$2(d,e){var w,v,u,t=null,s=new B.av(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.nD(new C.eDn(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.bgd:t
v=B.a([B.b4(u,t,t,new C.bl9(w,v,new C.eDo(r),new C.eDp(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ao(t,new B.dw(!0,B.cb(w,new C.eDq(r),t),t),t,t,10,10,6,t))
if(r.ax)v.push(r.bMX())
return B.aA(A.c_,B.js(new B.an(A.a0,t,A.b4,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.eDr(r),t,r.gcox(),t,new C.eDs(r),new C.eDt(r),new C.eDu(r),t,t,t,t,t,t,t,t,t,t,new C.eDv(r),t,t,t,!1,A.a4)},
$S:37}
C.eDn.prototype={
$0(){return this.a.ae0(this.b)},
$S:0}
C.eDv.prototype={
$1(d){return this.a.cHt(d.b)},
$S:57}
C.eDt.prototype={
$1(d){return this.a.coy(d.b)},
$S:50}
C.eDu.prototype={
$1(d){return this.a.coz(d.b)},
$S:19}
C.eDs.prototype={
$1(d){return this.a.b5n()},
$S:38}
C.eDr.prototype={
$1(d){return this.a.aeK(d.b)},
$S:308}
C.eDo.prototype={
$0(){return this.a.z},
$S:512}
C.eDp.prototype={
$0(){return this.a.Q},
$S:506}
C.eDq.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bRi()
if(p.length===0)return A.bK
w=A.v.j(0.55)
v=B.m(14)
u=B.K(A.bx,A.r,1)
t=B.a([D.h6m,A.cQ],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.I)(p),++r)t.push(B.c(p[r],q,2,A.a2,q,q,q,A.aYt,q,q,q))
return B.p(q,B.x(t,A.B,q,A.e,A.P,0,A.p),A.f,q,q,new B.o(w,q,u,v,q,q,A.m),q,q,q,q,A.hc,q,q,q)},
$S:70}
C.eD_.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.m(12),t=B.K(e.j(0.6),A.r,1),s=x.p
return new B.D(A.dU,B.A(B.a([B.p(w,B.V(d,e,w,w,w,21),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,38,w,w,w,w,w,38),A.bc,B.E(B.x(B.a([B.c(f,w,w,w,w,w,w,Am.WT,w,w,w),A.bt,B.c(g,w,w,w,w,w,w,F.acY,w,w,w)],s),A.B,w,A.e,A.h,0,A.p),1)],s),A.B,w,A.e,A.h,0,w,w),w)},
$S:1956}
C.eDj.prototype={
$0(){var w=this.a.c
w.toString
return B.a7(w,!1).hY()},
$S:0}
C.eDk.prototype={
$0(){var w=this.a
return w.l(new C.eDi(w))},
$S:0}
C.eDi.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eDl.prototype={
$0(){var w=this.a
return w.l(new C.eDh(w))},
$S:0}
C.eDh.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.eDm.prototype={
$0(){var w=this.a
return w.l(new C.eDg(w))},
$S:0}
C.eDg.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eDf.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.nn.gdS(D.nn),w=w.gae(w);w.C();){v=w.gP(w)
if(v.b.c===e)p.push(v.a)}w=B.c(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.I)(p),++r)u.push(s.cC8(p[r]))
return new B.D(U.ana,B.x(B.a([new B.D(A.aoY,w,q),B.A(u,A.l,q,A.e,A.h,0,q,q)],v),A.B,q,A.e,A.h,0,A.p),q)},
$S:z+37}
C.eDe.prototype={
$0(){return this.a.cdS(this.b)},
$S:0}
C.duw.prototype={
$0(){var w=this,v=null,u=B.h_(v,A.cK,v,v,v,B.cW(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a7,A.cc,v,A.e4,A.cd)
u.eL()
return u},
$S:281}
C.bSh.prototype={
$1(d){return d.r<=0},
$S:z+38}
C.bSs.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bSn.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bSt.prototype={
$1(d){return this.a.MS(d)&&!d.x},
$S:z+0}
C.bSu.prototype={
$2(d,e){return Math.max(d,this.a.aDU(e))},
$S:z+6}
C.bSw.prototype={
$2(d,e){var w=this.a
return w.c_(0,d.a+"."+e,new C.bSx(w))},
$S:z+5}
C.bSx.prototype={
$0(){return this.a.a},
$S:94}
C.bSv.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:69}
C.bSy.prototype={
$2(d,e){var w=this.a
return w.c_(0,this.b.$1(this.c.$2(d,e)),new C.bSz(w))},
$S:z+5}
C.bSz.prototype={
$0(){return this.a.a},
$S:94}
C.bSj.prototype={
$2(d,e){var w=this.a
return w.c_(0,d.a+"."+e,new C.bSk(w))},
$S:z+5}
C.bSk.prototype={
$0(){return this.a.a},
$S:94}
C.bSi.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:69}
C.bSl.prototype={
$2(d,e){var w=this.a
return w.c_(0,this.b.$1(this.c.$2(d,e)),new C.bSm(w))},
$S:z+5}
C.bSm.prototype={
$0(){return this.a.a},
$S:94}
C.bSg.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bSA.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bSo.prototype={
$1(d){return d!==this.b&&this.a.aKh(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bSr.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bSq.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bSp.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bMC.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bMD.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.bMB.prototype={
$2(d,e){return new B.a8(A.aX,A.b1,A.x,e,D.dhO,null).az(0,d)},
$S:1957}
C.cwC.prototype={
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
C.h55.prototype={
$1(d){var w
$.T()
w=B.L()
w.r=d.gp(0)
return w},
$S:1958}
C.h57.prototype={
$2(d,e){var w
$.T()
w=B.L()
w.b=A.ac
w.c=e
w.r=d.gp(0)
w.d=A.bG
return w},
$S:1959}
C.h58.prototype={
$5(d,e,f,g,h){return B.bw(new B.a5(d,e,d+f,e+g),new B.aP(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1960}
C.h56.prototype={
$3(d,e,f){var w
$.T()
w=B.L()
w.san(new B.a8(A.aX,A.b1,A.x,B.a([e,f],x.O),null,null).az(0,d))
return w},
$S:1961}
C.bMe.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.bMf.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bMd(w))},
$S:0}
C.bMd.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bMg.prototype={
$0(){return B.a([],x.F)},
$S:1962}
C.bMh.prototype={
$1(d){return this.a.bx(d).a>15e5},
$S:470}
C.bMi.prototype={
$0(){var w,v,u
J.bJh(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.rA(v))if(C.hpJ(v.b))w.b4R(v)
else w.a1o(v)
else{u=w.a.c.bhR(v)
w.agh(u==null?"The "+$.qT().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bMc.prototype={
$1(d){return new B.ea(new C.bM9(this.a,this.b),null)},
$S:20}
C.bM9.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p=null,o=this.b,n=new C.bMa(this.a,o,a3),m=$.qT(),l=o.b,k=m.h(0,l).d,j=A.i.S(o.ch/1.04),i=new C.bMb(o,n,k),h=B.m(26),g=B.K(k.j(0.55),A.r,1.4),f=x.V,e=B.a([new B.aa(0,A.H,k.j(0.25),A.J,26)],f),d=B.p(p,p,A.f,p,p,new B.o(A.aT,p,p,B.m(3),p,p,A.m),p,4,p,p,p,p,p,42),a0=k.j(0.2),a1=B.K(k,A.r,1)
a1=B.p(p,B.at(B.c(m.h(0,l).c,p,p,p,p,p,p,A.qq,p,p,p),p,p,p),A.f,p,p,new B.o(a0,p,a1,p,p,p,A.a6),p,42,p,p,p,p,p,42)
a0=x.p
w=B.E(B.x(B.a([B.c(m.h(0,l).b,p,1,A.a2,p,p,p,A.jp,p,p,p),D.h6a],a0),A.B,p,A.e,A.h,0,A.p),1)
v=k.j(0.2)
u=B.m(14)
t=B.K(k,A.r,1)
u=B.A(B.a([a1,A.bc,w,B.p(p,B.c(""+A.i.S(o.ch*100)+"%",p,p,p,p,p,p,B.l(p,p,k,p,p,p,p,p,p,p,p,15,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(v,p,t,u,p,p,A.m),p,p,p,p,A.lZ,p,p,p)],a0),A.l,p,A.e,A.h,0,p,p)
t=A.v.j(0.35)
v=B.m(18)
w=B.K(A.dx,A.r,1)
a1=30+28*o.ch
s=B.m(8)
r=B.a([k.j(0.85),A.aw],x.O)
q=B.K(A.aF,A.r,2)
f=B.a([new B.aa(0,A.H,k.j(0.5),A.J,14)],f)
v=B.p(p,B.at(B.cX(p,B.at(new B.de(A.dI,A.z,A.f,new B.D(A.hN,B.c(m.h(0,l).c,p,p,p,p,p,p,A.mN,p,p,p),p),p),p,p,p),p,p,A.aZ,new B.o(p,p,q,s,f,new B.a8(A.ay,A.aD,A.x,r,p,p),A.m),A.eI,p,a1*0.58,p,p,p,p,p,a1),p,p,p),A.f,p,p,new B.o(t,p,w,v,p,p,A.m),p,120,p,p,p,p,p,1/0)
i=B.A(B.a([i.$2("1\xd7",1),i.$2("2\xd7",2),i.$2("3\xd7",3),i.$2("4\xd7",4),i.$2("5\xd7",5)],a0),A.l,p,A.e,A.h,0,p,p)
w=B.aI(p,p,p,p,B.V(A.asg,k,p,p,p,30),p,p,p,new C.bM5(n,o),p,p,p,p,p,p)
t=B.ac7(a2).bhk(k,A.bx,k.j(0.2),A.c,8)
o=B.A(B.a([w,B.E(B.ZB(B.ld(p,p,p,5.2,1,n,A.i.D(o.ch,1,5.2)),t),1),B.aI(p,p,p,p,B.V(A.a3W,k,p,p,p,30),p,p,p,new C.bM6(n,o),p,p,p,p,p,p)],a0),A.l,p,A.e,A.h,0,p,p)
return B.bo(!0,B.p(p,B.x(B.a([d,A.af,u,A.aB,v,A.af,i,A.at,o,B.A(B.a([B.E(B.c(j<=1?"Normal size":"About "+j+" times the normal size",p,p,p,p,p,p,N.hH,p,p,p),1),B.bM(!1,A6.aZv,p,p,!0,p,p,p,new C.bM7(a2),p,B.fv(p,p,k.j(0.25),p,p,p,p,p,p,p,p,A.c,p,p,p,p,p,A.tE,p,p,p,p,p,p,p,p))],a0),A.l,p,A.e,A.h,0,p,p)],a0),A.l,p,A.e,A.P,0,A.p),A.f,p,p,new B.o(p,p,g,h,e,D.ceF,A.m),p,p,p,A.zk,D.bHX,p,p,p),!0,!1,A.ag,!0,!0)},
$S:87}
C.bMa.prototype={
$1(d){var w=this.a
w.l(new C.bM3(this.b,d))
this.c.$1(new C.bM4())
w.a.toString},
$S:6}
C.bM3.prototype={
$0(){return this.a.ch=A.i.D(this.b,1,5.2)},
$S:0}
C.bM4.prototype={
$0(){},
$S:0}
C.bMb.prototype={
$2(d,e){var w=this,v=null,u=Math.abs(w.a.ch-e)<0.05,t=u?w.c.j(0.28):A.c.j(0.06),s=B.m(14),r=u?w.c:A.bx
r=B.K(r,A.r,u?2:1)
return B.E(B.aA(v,B.cX(v,B.at(new B.de(A.dp,A.z,A.f,B.c(d,v,v,v,v,v,v,B.l(v,v,u?w.c:A.ab,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),v,v,v),v,v,A.aZ,new B.o(t,v,r,s,v,v,A.m),A.hl,v,v,v,A.jj,A.r6,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.bM8(w.b,e),v,v,v,v,v,v,!1,A.a4),1)},
$S:752}
C.bM8.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bM5.prototype={
$0(){return this.a.$1(this.b.ch-0.4)},
$S:0}
C.bM6.prototype={
$0(){return this.a.$1(this.b.ch+0.4)},
$S:0}
C.bM7.prototype={
$0(){B.a7(this.a,!1).N(null)
return null},
$S:0}
C.bMy.prototype={
$2(d,e){var w
if(d==="short"){G.dH(1800,"",120,0,0.55,"noise")
G.dH(200,"",160,2.2,0.4,"saw")
B.fW()
w=this.a
if(w.c!=null)w.agh("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){G.dH(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.agh("\u26a0 Overloaded! The "+$.qT().h(0,e.b).b+" can only give about "+A.i.a5(w.a.c.Az(e),2)+" amps but your gadgets are asking for "+A.i.a5(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.agh("Burnt out! "+e.ay)
G.dH(140,"",320,0,0.6,"noise")
G.dH(900,"",160,1.5,0.35,"square")}},
$S:z+42}
C.bMz.prototype={
$0(){},
$S:0}
C.bLE.prototype={
$0(){},
$S:0}
C.bMA.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bMx.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.at=n
w=o.a.c
v=o.d
u=o.y
t=o.z
s=o.x
r=this.b
q=x.p
n=B.a([B.aA(A.c_,new B.e8(B.b4(p,p,p,new C.al0(w,v,u,t,s,r==null?A.jI:r,p),n),p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bMr(o),new C.bMs(o),new C.bMt(o),p,p,p,p,p,p,p,p,p,p,new C.bMu(o),p,p,p,!1,A.a4)],q)
if(o.a.c.a.length===0)n.push(D.bfv)
w=o.ay
if(w!=null){v=B.m(14)
u=B.K(A.cW,A.r,1)
n.push(B.ao(p,B.aA(p,B.p(p,B.A(B.a([D.fX6,B.E(B.c(w,p,p,p,p,p,p,D.fOy,p,p,p),1)],q),A.B,p,A.e,A.h,0,p,p),A.f,p,p,new B.o(D.blC,p,u,v,p,p,A.m),p,p,p,p,A.o_,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bMv(o),p,p,p,p,p,p,!1,A.a4),p,p,10,10,8,p))}if(o.x!=null){o=B.A(B.a([D.bND,new E.fJ(A.Dy,"Cut wire",new C.bMw(o),A.c1,p)],q),A.l,p,A.e,A.h,0,p,p)
w=B.m(18)
n.push(B.ao(8,B.p(p,o,A.f,p,p,new B.o(F.ZA,p,B.K(A.bx,A.r,1),w,p,p,A.m),p,p,p,p,F.anE,p,p,p),p,p,12,12,p,p))}else{w=o.e
if(w!=null&&A.d.q(o.a.c.a,w)){w=o.e
w.toString
n.push(B.ao(8,o.cp6(w),p,p,10,10,p,p))}}return B.js(new B.an(A.a0,p,A.b4,A.t,n,p),A.t,p)},
$S:305}
C.bMs.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.bc2(s)
if(r!=null){t.l(new C.bMp(t,r,d))
return}w=t.b5x(s)
if(w!=null){t.Q=w
v=w.c
u=t.at
t.as=new B.r(v*u.a,w.d*u.b).aI(0,s)
t.l(new C.bMq(t,w))}},
$S:50}
C.bMp.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c.b},
$S:0}
C.bMq.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bMt.prototype={
$1(d){var w=this.a
if(w.y!=null)w.l(new C.bMn(w,d))
else if(w.Q!=null)w.l(new C.bMo(w,d.b.a7(0,w.as)))},
$S:19}
C.bMn.prototype={
$0(){return this.a.z=this.b.b},
$S:0}
C.bMo.prototype={
$0(){var w,v=this.a,u=v.Q
u.toString
w=this.b
u.c=A.i.D(w.a/v.at.a,0.14,0.86)
u=v.Q
u.toString
u.d=A.i.D(w.b/v.at.b,0.08,0.92)},
$S:0}
C.bMr.prototype={
$1(d){var w,v,u,t=this.a
if(t.y!=null&&t.z!=null){w=t.z
w.toString
v=t.bc2(w)
if(v!=null&&v.a!==t.y.a){w=t.a.c
u=t.y
if(w.an3(u.a,u.b,v.a,v.b)!=null)G.dH(1500,"",40,0,0.22,"square")}}t.Q=t.z=t.y=null
t.agf()},
$S:38}
C.bMu.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.b5x(u)
if(t!=null){v.l(new C.bMk(v,t))
if(D.mF.am(0,t.b))v.czW(t)
w=new B.W(Date.now(),0,!1)
if(v.r===t&&w.bx(v.w).a<38e4){v.l(new C.bMl(v,t))
v.r=null}else{v.r=t
v.w=w}v.a.toString
return}v.l(new C.bMm(v,v.cN7(u)))},
$S:57}
C.bMk.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.x=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
G.dH(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
G.dH(200,"",70,0,0.2,"saw")}},
$S:0}
C.bMl.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.bMm.prototype={
$0(){var w=this.a
w.x=this.b
w.e=w.d=null},
$S:0}
C.bMv.prototype={
$0(){var w=this.a
return w.l(new C.bMj(w))},
$S:0}
C.bMj.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bMw.prototype={
$0(){var w=this.a
A.d.X(w.a.c.b,w.x)
w.x=null
G.dH(300,"",50,0,0.35,"noise")
w.agf()},
$S:0}
C.bLF.prototype={
$0(){return this.a.buq(this.b)},
$S:0}
C.bM0.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.A(B.a([B.c(d,w,w,w,w,w,w,D.fIt,w,w,w),B.E(B.ld(this.b.d,w,w,g,h,new C.bM2(this.a,f),A.i.D(e,h,g)),1)],x.p),A.l,w,A.e,A.h,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1963}
C.bM2.prototype={
$1(d){var w=this.a
w.l(new C.bM1(this.b,d))
w.a.toString},
$S:6}
C.bM1.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bM_.prototype={
$2(d,e){var w=null,v=A.c.j(0.06),u=B.m(10)
return B.E(B.p(w,B.x(B.a([B.c(d,w,w,w,w,w,w,A.acO,w,w,w),B.c(e,w,w,w,w,w,w,D.fLk,w,w,w)],x.p),A.l,w,A.e,A.h,0,A.p),A.f,w,w,new B.o(v,w,w,u,w,w,A.m),w,w,w,w,A.x0,w,w,w),1)},
$S:110}
C.bLM.prototype={
$0(){var w=this.a
return w.l(new C.bLL(w))},
$S:0}
C.bLL.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.bLN.prototype={
$0(){var w=this.a
w.a.c.X(0,this.b)
w.e=w.d=null
G.dH(260,"",70,0,0.35,"noise")
w.agf()},
$S:0}
C.bLO.prototype={
$0(){var w=this.a
return w.l(new C.bLK(w))},
$S:0}
C.bLK.prototype={
$0(){return this.a.e=null},
$S:0}
C.bLS.prototype={
$0(){this.a.l(new C.bLJ(this.b,this.c))
G.dH(900,"",40,0,0.3,"noise")},
$S:0}
C.bLJ.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bLT.prototype={
$0(){return this.a.b4R(this.b)},
$S:0}
C.bLU.prototype={
$0(){return this.a.a1o(this.b)},
$S:0}
C.bLV.prototype={
$0(){return this.a.a33(this.b)},
$S:0}
C.bLW.prototype={
$0(){var w=this.a
w.l(new C.bLI(this.b,this.c))
w.a.toString},
$S:0}
C.bLI.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bLX.prototype={
$0(){var w=this.a
w.l(new C.bLH(this.b,this.c))
w.a.toString},
$S:0}
C.bLH.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bLY.prototype={
$0(){var w=this.a
w.l(new C.bLG(this.b,this.c))
w.a.toString},
$S:0}
C.bLG.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bLZ.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bLP.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bLQ.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bLR.prototype={
$1(d){return this.a.f=d},
$S:6}
C.fAN.prototype={
$1(d){return d.aJT("bulb")},
$S:z+2}
C.fAO.prototype={
$1(d){return d.qj(0,"switch")&&d.aJT("bulb")},
$S:z+2}
C.fAP.prototype={
$1(d){return A.d.aR(d.a,new C.fAA())},
$S:z+2}
C.fAA.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.fAQ.prototype={
$1(d){return d.qj(0,"resistor")&&A.d.aR(d.a,new C.fAz())},
$S:z+2}
C.fAz.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fAR.prototype={
$1(d){return!d.qj(0,"battery")&&d.aJT("bulb")},
$S:z+2}
C.fAE.prototype={
$1(d){return A.d.aR(d.a,new C.fAy())},
$S:z+2}
C.fAy.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fAF.prototype={
$1(d){return A.d.aR(d.a,new C.fAx())},
$S:z+2}
C.fAx.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fAG.prototype={
$1(d){return A.d.aR(d.a,new C.fAw())},
$S:z+2}
C.fAw.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fAH.prototype={
$1(d){var w=d.a
return A.d.aR(w,new C.fAu())&&A.d.aR(w,new C.fAv())&&d.qj(0,"buck")},
$S:z+2}
C.fAu.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fAv.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fAI.prototype={
$1(d){var w=d.a
return A.d.aR(w,new C.fAs())&&A.d.aR(w,new C.fAt())},
$S:z+2}
C.fAs.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fAt.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fAJ.prototype={
$1(d){return A.d.aR(d.a,new C.fAr())},
$S:z+2}
C.fAr.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.e5l.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a6(0)
w.u(0,v.b)},
$S:0}
C.e5u.prototype={
$1(d){var w=this.a.d
return w.aKh(d)&&w.rA(d)},
$S:z+0}
C.e5v.prototype={
$1(d){return d.x},
$S:z+0}
C.e5w.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.e5x.prototype={
$0(){},
$S:0}
C.e5k.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.m(22),o=x.p,n=B.a([D.he0,A.at,D.fYZ,A.S],o)
for(w=this.a,v=0;v<19;++v){u=D.Tg[v]
t=A.c.j(0.06)
s=new B.aP(14,14)
r=new B.ax(A.bx,1,A.r,-1)
n.push(B.aA(q,B.p(q,B.x(B.a([B.c(u.a,q,q,q,q,q,q,A.iV,q,q,q),A.bt,B.c(u.b,q,3,A.a2,q,q,q,D.fPl,q,q,q)],o),A.B,q,A.e,A.h,0,A.p),A.f,q,q,new B.o(t,q,new B.bE(r,r,r,r),new B.bb(s,s,s,s),q,q,A.m),q,q,q,A.cB,A.bg,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.e5j(w,d,u),q,q,q,q,q,q,!1,A.a4))}return B.eI(q,F.n7,new B.D(A.bS,new B.a4(340,q,B.co(n,q,q,q,q,q,A.ah,!0),q),q),q,q,q,q,q,A.dd,q,new B.b9(p,A.a1),q)},
$S:47}
C.e5j.prototype={
$0(){B.a7(this.b,!1).N(null)
var w=this.a
w.l(new C.e5i(w,this.c))
G.dH(800,"",120,-0.5,0.3,"square")},
$S:0}
C.e5i.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bn0()},
$S:0}
C.e5g.prototype={
$1(d){return new C.Xn(this.a.d,null)},
$S:z+44}
C.e5h.prototype={
$0(){},
$S:0}
C.e5t.prototype={
$1(d){return new B.ea(new C.e5s(this.a),null)},
$S:20}
C.e5s.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.ak5(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.q(0,k),f=g?A.bf:A.aH
k=B.aF(d,m,x.w).w
w=l.r
v=x.p
u=B.a([B.A(B.a([D.hb8,A.aW,B.c(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.D,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.l,m,A.e,A.h,0,m,m),A.N,B.by(B.m(4),B.jE(A.bx,m,m,5,m,w.a/11,new B.l7(f,x.c)),A.aq),A.af],v)
if(h)u.push(D.h1h)
else{h=f.j(0.1)
t=B.m(14)
s=B.K(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.c(r+" Now: "+i.a,m,m,m,m,m,m,Ao.LI,m,m,m)
q=B.c(g?"Well done! You did it.":i.b,m,m,m,m,m,m,A_.FF,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.p(m,B.x(B.a([r,A.at,q,new B.bK(A.a9,m,m,B.bM(!1,B.c(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.D,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.e5q(l,e),m,m),m)],v),A.B,m,A.e,A.h,0,A.p),A.f,m,m,new B.o(h,m,s,t,m,m,A.m),m,m,m,m,A.bg,m,m,m))}u.push(A.S)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aP(12,12)
n=new B.ax(o===l.f?f.j(0.6):A.dx,1,A.r,-1)
if(w.q(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
s=B.c(s,m,m,m,m,m,m,A.acX,m,m,m)
r=j[o]
q=w.q(0,o)?A.aF:A.c
u.push(B.aA(m,B.p(m,new B.c2(A.aK,A.e,A.h,A.l,m,A.p,m,0,B.a([s,A.ar,new B.bu(1,A.b8,B.c(r.a,m,m,m,m,m,m,new B.G(!0,q,m,m,m,m,13,A.D,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],v),m),A.f,m,m,new B.o(h,m,new B.bE(n,n,n,n),new B.bb(t,t,t,t),m,m,A.m),m,m,m,A.eA,A.o_,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.e5r(l,o,e),m,m,m,m,m,m,!1,A.a4))}return B.bo(!0,new B.cS(new B.aX(0,1/0,0,k.a.b*0.75),B.co(u,m,m,A8.zt,m,m,A.ah,!0),m),!0,!1,A.ag,!0,!0)},
$S:87}
C.e5q.prototype={
$0(){var w=this.a
w.l(new C.e5o(w))
this.b.$1(new C.e5p())
w.FT()},
$S:0}
C.e5o.prototype={
$0(){var w=this.a
$.ak5()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.e5p.prototype={
$0(){},
$S:0}
C.e5r.prototype={
$0(){var w=this.a
w.l(new C.e5m(w,this.b))
this.c.$1(new C.e5n())
w.FT()},
$S:0}
C.e5m.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e5n.prototype={
$0(){},
$S:0}
C.e5z.prototype={
$0(){return B.a7(this.a,!1).hY()},
$S:0}
C.e5A.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.iH("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a7(t.b,!1).c9(B.e6(new C.e5y(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.e5y.prototype={
$1(d){B.j4("construction")
return Au.i5n()},
$S:z+45}
C.e5B.prototype={
$0(){return E.hRw(this.a,"ELECTRONICS LAB",this.b,A.aH)},
$S:0}
C.e5C.prototype={
$0(){var w=this.a
return w.l(w.d.gd47())},
$S:0}
C.e5D.prototype={
$0(){var w=this.a,v=w.d
w.l(v.gtp(v))
w.FT()},
$S:0}
C.cOa.prototype={
$2(d,e){var w=null,v=this.a.gaAc().x
v===$&&B.d()
return B.b4(w,w,w,new C.bcW(v,w),A.aA)},
$S:56}
C.cO9.prototype={
$3(d,e,f){var w=new B.aH($.T().r,A.ak,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.E(new B.aZ(v,t))
w.E(new B.ck(v,u,v+e,u))
w.E(new B.ck(v,u,v,u+e))
w.E(new B.ck(v,u,v-e,u))
w.E(new B.ck(v,u,v,t))
w.E(new B.bA())
t=B.L()
t.r=A.c.j(f).gp(0)
this.a.af(w,t)},
$S:409}
C.had.prototype={
$3(d,e,f){return new C.WD(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+46}
C.hae.prototype={
$4(d,e,f,g){var w=x.a
return new B.dc(e,!1,B.iB(A.z,g,null,new B.bk(B.cL(A.cp,e,null),new B.bq(0.85,1,w),w.k("bk<bS.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
C.e1h.prototype={
$0(){var w=this.a
w.e=this.b
w.y=0
w.z=w.gBW()},
$S:0}
C.e1i.prototype={
$0(){var w,v=this.a
v.e=0
w=this.c
v.y=A.o.F(A.o.F(this.b,w)+w,w)
v.z=v.gBW()},
$S:0}
C.e1s.prototype={
$0(){var w=this.a,v=this.b,u=this.c
w.x=new B.r(v.a/u.a,v.b/u.b)
w.w=w.gBW()},
$S:0}
C.e1g.prototype={
$1(d){return new K.Jc(F.T1[this.b],new C.e1f(this.a,d),null)},
$S:z+47}
C.e1f.prototype={
$0(){this.a.a=!0
B.a7(this.b,!1).e4()},
$S:0}
C.e1t.prototype={
$0(){var w=this.a
w.f=this.b
w.r=!1},
$S:0}
C.e1u.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.e19.prototype={
$2(d,e){var w=null,v=this.a,u=v.f?v.gb2z():w
return B.aA(A.c_,B.b4(w,w,w,v.cov(this.b),A.hf),A.y,!1,D.hKk,u,w,w,w,new C.e17(v),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e18(v,e),w,w,w,!1,A.a4)},
$S:37}
C.e18.prototype={
$1(d){var w=this.b
return this.a.cHF(d.b,new B.av(B.aT(1/0,w.a,w.b),B.aT(1/0,w.c,w.d)))},
$S:57}
C.e17.prototype={
$1(d){var w,v=d.d
if(v==null)v=0
if(Math.abs(v)>120&&this.a.Ou()!=null){w=v<0?1:-1
this.a.aE9(w)}},
$S:38}
C.e1q.prototype={
$5$color$on(d,e,f,g,h){var w=null,v=h?g.j(0.28):A.c.j(0.08),u=B.m(14),t=B.K(h?g:A.aT,A.r,1)
return B.aA(w,B.p(w,B.x(B.a([B.V(d,g,w,w,w,20),A.rJ,B.c(e,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,9.5,w,w,A.D,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,w,w,A.jj,A.jX,w,w,56),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:508}
C.e1m.prototype={
$0(){return this.a.aE9(-1)},
$S:0}
C.e1n.prototype={
$0(){return this.a.aE9(1)},
$S:0}
C.e1o.prototype={
$0(){return this.a.Kb(null)},
$S:0}
C.e1p.prototype={
$0(){return this.a.Kb(0)},
$S:0}
C.e1v.prototype={
$0(){return B.a7(this.a,!1).hY()},
$S:0}
C.e1l.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c3V(o):q.bGQ(o,p),m=x.p
p=B.a([B.oU(new B.md(n,new B.bg(p,x.aC)),A.pP,B.q8(),A.aZ,A.aZ,new C.e1j())],m)
n=t.d
if(n){w=A.i.F(q.gBW(),12)<4
v=w?150:96
u=B.m(16)
m=B.a([A.ar],m)
if(w)m.push(D.bNp)
else m.push(A.aW)
m.push(B.p(s,s,A.f,s,s,new B.o(w?A.bf:A.aw,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.ar)
p.push(B.ao(s,B.at(B.cX(s,B.A(m,A.l,s,A.e,A.h,0,s,s),s,s,A.ej,new B.o(A.v,s,s,u,s,s,A.m),A.nb,s,28,s,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.Bh)p.push(B.ao(s,B.at(B.p(s,s,A.f,s,s,A.MY,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.Bi)p.push(B.ao(s,B.p(s,s,A.f,s,s,A.MY,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ao(6,B.aA(s,B.at(B.p(s,s,A.f,s,s,new B.o(A.c.j(0.75),s,s,B.m(3),s,s,A.m),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e1k(q),s,s,s,s,s,s,!1,A.a4),s,s,0,0,s,s))
return B.by(r,new B.an(A.a0,s,A.b4,A.t,p,s),A.aq)},
$S:431}
C.e1j.prototype={
$2(d,e){var w=x.a
return new B.dc(e,!1,B.iB(A.z,d,null,new B.bk(e,new B.bq(0.92,1,w),w.k("bk<bS.T>"))),null)},
$S:463}
C.e1k.prototype={
$0(){return this.a.Kb(null)},
$S:0}
C.e1r.prototype={
$2(d,e){var w,v,u,t,s=null,r=Math.max(e.b,230),q=this.a
q=B.a([B.c(A.a.aZ(A.o.v(B.d0(q)),2,"0")+":"+A.a.aZ(A.o.v(B.fB(q)),2,"0"),s,s,s,s,s,s,A.uy,s,s,s),A.aW],x.p)
for(w=0;w<4;++w){v=new B.aP(1,1)
q.push(B.p(s,s,A.f,s,s,new B.o(A.c,s,s,new B.bb(v,v,v,v),s,s,A.m),s,4+w*2,s,D.bLW,s,s,s,3))}q.push(A.da)
q.push(D.h59)
q.push(A.ba)
v=B.K(A.ab,A.r,1)
u=B.m(4)
t=this.b
q.push(B.p(s,new B.bK(A.a5,s,s,B.C6(A.z,B.p(s,s,A.f,s,s,new B.o(A.bf,s,s,B.m(2),s,s,A.m),s,s,s,A7.HW,s,s,s,s),s,t/100),s),A.f,s,s,new B.o(s,s,v,u,s,s,A.m),s,12,s,s,s,s,s,26))
q.push(A.pn)
q.push(B.c(""+t+"%",s,s,s,s,s,s,D.fWI,s,s,s))
return new B.de(A.dp,A.a5,A.f,new B.a4(r,s,B.A(q,A.l,s,A.e,A.h,0,s,s),s),s)},
$S:263}
C.e1e.prototype={
$0(){return this.a.Kb(A.d.cd(F.iy,this.b))},
$S:0}
C.e1c.prototype={
$0(){return this.a.Kb(0)},
$S:0}
C.e1d.prototype={
$2(d,e){var w,v,u,t,s=null,r=Math.max(e.b,216),q=B.a([],x.p)
for(w=B.cV(F.iy,0,B.dz(4,"count",x.S),x.gD),v=w.$ti,w=new B.bR(w,w.gJ(0),v.k("bR<aj.E>")),u=this.a,v=v.k("aj.E");w.C();){t=w.d
q.push(u.ay_(t==null?v.a(t):t,50,!1))}return new B.de(A.dp,A.z,A.f,new B.a4(r,s,B.A(q,A.l,s,A.ru,A.h,0,s,s),s),s)},
$S:263}
C.e16.prototype={
$0(){return this.a.Kb(null)},
$S:0}
C.e1b.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=A.v.j(0.55),l=this.a,k=l.f,j=k?112:10
if(k){k=l.c
k.toString
k=B.aF(k,A.bZ,x.w).w.a.a>700}else k=!1
k=k?250:10
w=x.p
k=B.p(n,B.A(B.a([D.hjW,A.ar,B.E(B.c(this.b?"Navigation   Media   Climate":"File   Edit   View   Window   Help",n,1,A.f_,n,n,n,A.LT,n,n,n),1),B.c(A.a.aZ(A.o.v(B.d0(new B.W(Date.now(),0,!1))),2,"0")+":"+A.a.aZ(A.o.v(B.fB(new B.W(Date.now(),0,!1))),2,"0"),n,n,n,n,n,n,A.rM,n,n,n)],w),A.l,n,A.e,A.h,0,n,n),A.f,m,n,n,n,24,n,n,new B.R(j,0,k,0),n,n,n)
j=B.a([B.b4(n,n,n,new C.bzQ(l.gBW(),this.c.d,n),A.aA)],w)
if(l.e!=null){if(l.f){m=l.c
m.toString
m=B.aF(m,A.dK,x.w).w.r.b+52}else m=12
v=B.m(10)
u=B.K(A.aT,A.r,1)
t=B.m(10)
s=B.aA(n,B.p(n,n,A.f,n,n,A.agn,n,12,n,n,n,n,n,12),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.e1a(l),n,n,n,n,n,n,!1,A.a4)
r=B.p(n,n,A.f,n,n,A.Z1,n,12,n,n,n,n,n,12)
q=B.aA(n,B.p(n,n,A.f,n,n,D.baA,n,12,n,n,n,n,n,12),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,l.gbcw(),n,n,n,n,n,n,!1,A.a4)
p=l.e
p.toString
p=B.a([s,A.e_,r,A.e_,q,A.ar,B.E(B.c(F.iy[p].a,n,1,A.a2,n,n,n,A.WR,n,n,n),1)],w)
if(l.Ou()!=null)s=!l.f||!l.r
else s=!1
if(s)p.push(l.b_t(19))
s=B.p(n,B.A(p,A.l,n,A.e,A.h,0,n,n),A.f,A.cx,n,n,n,26,n,n,A.fD,n,n,n)
r=l.e
r.toString
j.push(B.bT(0,new B.D(new B.R(26,m,26,58),B.p(n,B.by(t,B.x(B.a([s,B.E(l.aQP(r),1)],w),A.l,n,A.e,A.h,0,A.p),A.aq),A.f,n,n,new B.o(A.v,n,u,v,D.dDZ,n,A.m),n,n,n,n,n,n,n,n),n),0,0,0))}m=A.c.j(0.16)
v=B.m(18)
u=B.K(A.aT,A.r,1)
t=B.a([],w)
for(o=0;o<8;++o)t.push(new B.D(A.jj,l.ay_(F.iy[o],34,!1),n))
j.push(B.ao(8,B.at(B.p(n,B.A(t,A.l,n,A.e,A.P,0,n,n),A.f,n,n,new B.o(m,n,u,v,n,n,A.m),n,n,n,n,A.lA,n,n,n),n,n,n),n,n,0,0,n,n))
return B.p(n,B.x(B.a([k,B.E(new B.an(A.a0,n,A.b4,A.t,j,n),1)],w),A.l,n,A.e,A.h,0,A.p),A.f,A4.a0c,n,n,n,n,n,n,n,n,n,n)},
$S:84}
C.e1a.prototype={
$0(){return this.a.Kb(null)},
$S:0}
C.fBh.prototype={
$0(){return D.ewt},
$S:z+48}
C.fBi.prototype={
$0(){return D.e3e},
$S:z+49}
C.fBj.prototype={
$0(){return D.dXy},
$S:z+50}
C.fBk.prototype={
$0(){return D.e2C},
$S:z+51}
C.fBl.prototype={
$0(){return D.e86},
$S:z+52}
C.fBm.prototype={
$0(){return D.esf},
$S:z+53}
C.fBn.prototype={
$0(){return D.eup},
$S:z+54}
C.fBo.prototype={
$0(){return D.e79},
$S:z+36}
C.cpv.prototype={
$0(){return B.a7(this.a,!1).hY()},
$S:0}
C.cpw.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=(e.b-14)/2,i=x.p,h=B.a([],i)
for(w=$.hVp(),v=j*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aP(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.aa(0,A.H,p.j(0.4),A.du,16)],t)
n=B.c(r.c,k,k,k,k,k,k,A.LG,k,k,k)
m=B.c(r.a,k,k,k,k,k,k,D.fUq,k,k,k)
l=A.c.j(0.85)
h.push(B.aA(k,B.p(k,new B.an(A.a0,k,A.ad,A.t,B.a([new B.cQ(k,-6,-6,k,k,k,n,k),new B.bK(A.lo,k,k,B.x(B.a([m,A.cQ,B.c(r.b,k,k,k,k,k,k,new B.G(!0,l,k,k,k,k,12,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)],i),A.B,k,A.e,A.P,0,A.p),k)],i),k),A.f,k,k,new B.o(k,k,k,new B.bb(q,q,q,q),p,new B.a8(A.ay,A.aD,A.x,o,k,k),A.m),k,v,k,k,A.bF,k,k,j),A.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.cpu(d,r),k,k,k,k,k,k,!1,A.a4))}return B.c_(A.bI,h,A.br,k,14,14)},
$S:174}
C.cpu.prototype={
$0(){return B.a7(this.a,!1).c9(B.e6(new C.cpt(this.b),!1,null,x.H))},
$S:0}
C.cpt.prototype={
$1(d){return this.a.f.$0()},
$S:42}
C.f1s.prototype={
$0(){var w=this.a
return w.w=w.d[w.b8Z(w.f)]},
$S:0}
C.f1o.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cV.ai()*7},
$S:0}
C.f1n.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bM(0,A.ck)
w.w=""},
$S:0}
C.f1q.prototype={
$0(){var w=this.a
return w.l(new C.f1p(w,this.b))},
$S:0}
C.f1p.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cJ(w,this.b)},
$S:0}
C.f1r.prototype={
$1(d){return this.a.b3a(0)},
$S:2}
C.e93.prototype={
$0(){return C.K_("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.e94.prototype={
$0(){},
$S:0}
C.e8Z.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.e90.prototype={
$0(){return this.a.b3c(this.b)},
$S:0}
C.e91.prototype={
$0(){var w=this.a
return w.l(new C.e9_(w))},
$S:0}
C.e9_.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.e92.prototype={
$0(){var w=this.a
return w.b3c(w.d)},
$S:0}
C.dTu.prototype={
$2(d,e){return d+e},
$S:81}
C.dTv.prototype={
$0(){},
$S:0}
C.dTp.prototype={
$2(d,e){return d+e},
$S:81}
C.dTs.prototype={
$0(){var w=this.a
return w.l(new C.dTr(w,this.b))},
$S:0}
C.dTr.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dTt.prototype={
$0(){var w=this.a
return w.l(new C.dTq(w))},
$S:0}
C.dTq.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.e4Q.prototype={
$0(){return E.uR(this.b,this.a.d,"drawing")},
$S:0}
C.e4R.prototype={
$1(d){var w=this.a
return w.l(new C.e4P(w,d))},
$S:50}
C.e4P.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aLm(u,v,t))},
$S:0}
C.e4S.prototype={
$1(d){var w=this.a
return w.l(new C.e4O(w,d))},
$S:19}
C.e4O.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
C.e4T.prototype={
$1(d){var w=this.a
return w.l(new C.e4N(w,d))},
$S:24}
C.e4N.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aLm(u,v,t))},
$S:0}
C.e4U.prototype={
$0(){var w=this.a
return w.l(new C.e4M(w,this.b))},
$S:0}
C.e4M.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.e4V.prototype={
$1(d){var w=this.a
return w.l(new C.e4L(w,d))},
$S:6}
C.e4L.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.e4W.prototype={
$0(){var w=this.a
return w.l(new C.e4K(w))},
$S:0}
C.e4K.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.e4X.prototype={
$0(){var w=this.a
return w.l(new C.e4J(w))},
$S:0}
C.e4J.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.e4Y.prototype={
$0(){var w=this.a
return w.l(A.d.gtp(w.e))},
$S:0}
C.e4Z.prototype={
$0(){var w=this.a
return w.l(new C.e4I(w))},
$S:0}
C.e4I.prototype={
$0(){var w=this.a
w.x=D.aCA[A.o.F(A.d.cd(D.aCA,w.x)+1,4)]},
$S:0}
C.ewJ.prototype={
$0(){return this.a.f.I(0,this.b)},
$S:0}
C.ewK.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.K_("bell",B.a([0,4,7],w),500,0.45)
u.l(new C.ewI(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.d()
if(v===u.length)C.K_("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:12}
C.ewI.prototype={
$0(){var w=this.a
w.r.u(0,B.a([this.b,this.c],x.t))
w.f.a6(0)},
$S:0}
C.ewL.prototype={
$0(){var w=this.a
if(w.c==null)return
w.l(new C.ewH(w))},
$S:12}
C.ewH.prototype={
$0(){var w=this.a
w.f.a6(0)
w.x=!1},
$S:0}
C.ewP.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return B.aA(w,B.lz(new C.ewN(v,e),w,A.aZ,A.pP,w,w,new B.bq(0,u,x.a),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ewO(v,e),w,w,w,w,w,w,!1,A.a4)},
$S:78}
C.ewO.prototype={
$0(){return this.a.cg8(this.b)},
$S:0}
C.ewN.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dA(),m=n.a
m.$flags&2&&B.ak(m)
m[11]=0.001
n.fI(3.141592653589793*e)
m=B.m(16)
w=o?p:D.cdO
if(o)v=q.a.r.q(0,q.b)?A.bf.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.K(u.r.q(0,t)?A.bf:A.aT,A.r,1)
if(o){r=B.dA()
r.fI(3.141592653589793)
u=u.e
u===$&&B.d()
r=B.fG(A.z,B.c(u[t],p,p,p,p,p,p,H.ad0,p,p,p),p,r,!0)
u=r}else u=D.hcF
return B.fG(A.z,B.p(A.z,u,A.f,p,p,new B.o(v,p,s,m,p,w,A.m),p,p,p,p,p,p,p,p),p,n,!0)},
$S:117}
C.ewQ.prototype={
$0(){var w=this.a
return w.l(new C.ewM(w,this.b))},
$S:0}
C.ewM.prototype={
$0(){var w=this.a
w.d=this.b.a
w.avm()},
$S:0}
C.ewR.prototype={
$0(){var w=this.a
return w.l(w.gbPL())},
$S:0}
C.eJB.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.eJC.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.eJz.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eJA.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.eJy(w))},
$S:12}
C.eJy.prototype={
$0(){return this.a.f=-1},
$S:0}
C.eJD.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.eJE.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.eJF.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b3b()},
$S:12}
C.eJG.prototype={
$0(){return this.a.cge(this.b)},
$S:0}
C.eXO.prototype={
$1(d){return B.v(d.h(0,1))+","},
$S:58}
C.eXX.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.c(d,w,1,A.a2,w,w,w,B.l(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.D(A.jX,B.A(B.a([v,A.aa,new B.d3(1,A.ci,new B.de(A.dp,A.z,A.f,B.c(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w),w)],x.p),A.l,w,A.e,A.h,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1964}
C.eXT.prototype={
$1(d){return this.a.l(new C.eXS())},
$S:2}
C.eXS.prototype={
$0(){},
$S:0}
C.eXU.prototype={
$0(){var w=this.a
return w.l(new C.eXR(w,this.b))},
$S:0}
C.eXR.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eXV.prototype={
$1(d){var w=this.a
return w.l(new C.eXQ(w,d))},
$S:6}
C.eXQ.prototype={
$0(){return this.a.f=A.i.S(this.b)},
$S:0}
C.eXW.prototype={
$0(){var w=this.a
return w.l(new C.eXP(w))},
$S:0}
C.eXP.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.evo.prototype={
$0(){},
$S:0}
C.evp.prototype={
$0(){},
$S:0}
C.evh.prototype={
$0(){var w=this.a
return w.l(new C.evg(w))},
$S:0}
C.evg.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.c3(u,1,!1,x.S)
w.r=0.9
E.Ya("hat",0,0.6)},
$S:0}
C.evi.prototype={
$0(){var w=this.a
return w.l(new C.evf(w))},
$S:0}
C.evf.prototype={
$0(){this.a.y=1.1
E.mI("bell",36,200,0.4)},
$S:0}
C.evj.prototype={
$0(){var w=this.a
return w.l(new C.eve(w))},
$S:0}
C.eve.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.av(Math.max(v,u)-t+1)
w.as=u
E.mI("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.evk.prototype={
$0(){var w=this.a
return w.l(new C.evd(w,this.b))},
$S:0}
C.evd.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.evl.prototype={
$1(d){var w=this.a
return w.l(new C.evc(w,d))},
$S:6}
C.evc.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.i.S(this.b),r=J.e5(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.evm.prototype={
$1(d){var w=this.a
return w.l(new C.evb(w,d))},
$S:6}
C.evb.prototype={
$0(){return this.a.z=A.i.S(this.b)},
$S:0}
C.evn.prototype={
$1(d){var w=this.a
return w.l(new C.eva(w,d))},
$S:6}
C.eva.prototype={
$0(){return this.a.Q=A.i.S(this.b)},
$S:0}
C.cpr.prototype={
$0(){var w=this
return E.mI(w.a,w.b,w.c,w.d)},
$S:1};(function aliases(){var w=C.aPr.prototype
w.bBI=w.t
w=C.aOw.prototype
w.bAL=w.t
w=C.aOx.prototype
w.bAM=w.t
w=C.aOB.prototype
w.bAQ=w.t
w=C.aQh.prototype
w.bCF=w.t
w=C.aPp.prototype
w.bBG=w.t
w=C.aAC.prototype
w.bxM=w.t
w=C.aAD.prototype
w.bxN=w.t
w=C.aMY.prototype
w.bz8=w.t
w=C.aOM.prototype
w.bB0=w.t
w=C.aOy.prototype
w.bAN=w.t
w=C.aOT.prototype
w.bB8=w.t
w=C.aPj.prototype
w.bBA=w.t
w=C.aPL.prototype
w.bC1=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0,u=a._instance_1u,t=a._instance_1i,s=a._instance_0i,r=a.installInstanceTearOff
w(C.aHp.prototype,"gazw","cbl",1)
v(C,"iCt","c90",3)
var q
u(q=C.aFQ.prototype,"gckE","ckF",22)
w(q,"gcbV","b1E",1)
w(C.aFS.prototype,"gcdH","cdI",1)
t(C.aG8.prototype,"gcdP","cdQ",39)
w(q=C.aKu.prototype,"gcED","cEE",1)
w(q,"gcdR","a0e",1)
w(q,"gcpg","cph",1)
w(q,"gcdN","a0d",3)
w(q,"gcdO","ag5",3)
w(q=C.aHo.prototype,"gbMQ","abo",3)
w(q,"gcox","b5n",1)
w(q,"gcso","aiK",3)
s(q,"gcdT","ag6",3)
s(q=C.a6n.prototype,"gtp","a6",1)
u(q,"gd1K","apQ",0)
u(q,"gcZ1","MS",0)
w(q,"gd47","bn0",1)
r(C.al0.prototype,"gcef",0,5,null,["$5"],["lE"],41,0,0)
w(q=C.aGm.prototype,"gceg","ceh",1)
w(q,"gcvg","aj5",3)
w(q,"gckW","ahp",3)
w(q,"gcCA","akd",3)
w(q=C.aGc.prototype,"gc6l","aeg",3)
w(q,"gbcw","cJd",1)
w(q,"gb2z","cel",1)
w(q=C.aHU.prototype,"gcg9","cga",1)
s(q,"gcg7","b3a",1)
w(C.aHa.prototype,"gbPL","avm",1)
s(C.aHx.prototype,"gcgb","cgc",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aE,[C.amd,C.Hd,C.vH,C.aVH,C.a5f,C.be3,C.c91,C.yW,C.Dj,C.o_,C.beR,C.Bi,C.bxi,C.qK,C.rr,C.Dn,C.a0g,C.agR,C.a2v,C.Dy,C.adH,C.adZ,C.afW,C.GZ,C.es,C.u9,C.ack,C.adt,C.a6n,C.na,C.beS,C.h4,C.mk,C.byC,C.aLm])
u(B.hg,[C.fT4,C.fHz,C.fPp,C.fPq,C.fT1,C.fT2,C.eos,C.eoL,C.eE8,C.eDG,C.eDH,C.eDI,C.eDJ,C.eDK,C.eDL,C.eDM,C.eDN,C.eDE,C.eDF,C.eDD,C.eE3,C.eE4,C.eE5,C.dT0,C.dT2,C.dT5,C.dTg,C.c92,C.c93,C.fAB,C.fAC,C.fAD,C.fAK,C.fAL,C.fAM,C.dV3,C.dUL,C.dV4,C.dUG,C.dUB,C.dUD,C.dUJ,C.dUW,C.dUU,C.dUV,C.dUT,C.dUQ,C.dUS,C.fgd,C.ffN,C.ffO,C.ffV,C.fg1,C.fga,C.ffK,C.duA,C.duB,C.dux,C.duy,C.duz,C.duC,C.duD,C.duE,C.duF,C.duG,C.duH,C.duI,C.duJ,C.duK,C.eD4,C.eD5,C.eD6,C.eD7,C.eD2,C.eD3,C.eDz,C.eDb,C.eDd,C.eCY,C.eDv,C.eDt,C.eDu,C.eDs,C.eDr,C.eD_,C.bSh,C.bSs,C.bSn,C.bSt,C.bSv,C.bSi,C.bSg,C.bSA,C.bSo,C.bSr,C.bSq,C.bSp,C.bMC,C.h55,C.h58,C.h56,C.bMh,C.bMc,C.bMa,C.bMA,C.bMs,C.bMt,C.bMr,C.bMu,C.bM0,C.bM2,C.bLZ,C.bLP,C.bLQ,C.bLR,C.fAN,C.fAO,C.fAP,C.fAA,C.fAQ,C.fAz,C.fAR,C.fAE,C.fAy,C.fAF,C.fAx,C.fAG,C.fAw,C.fAH,C.fAu,C.fAv,C.fAI,C.fAs,C.fAt,C.fAJ,C.fAr,C.e5u,C.e5v,C.e5k,C.e5g,C.e5t,C.e5y,C.cO9,C.had,C.hae,C.e1g,C.e18,C.e17,C.e1q,C.cpt,C.f1r,C.e4R,C.e4S,C.e4T,C.e4V,C.ewN,C.eXO,C.eXX,C.eXT,C.eXV,C.evl,C.evm,C.evn])
u(B.iJ,[C.fT3,C.eox,C.eov,C.eDP,C.eE1,C.dUC,C.dUZ,C.e0f,C.fgg,C.fgh,C.ffU,C.fg6,C.fg7,C.fg2,C.fg8,C.ffJ,C.eD0,C.eD1,C.eDy,C.eDq,C.eDf,C.bSu,C.bSw,C.bSy,C.bSj,C.bSl,C.bMD,C.bMB,C.cwC,C.h57,C.bM9,C.bMb,C.bMy,C.bMx,C.bM_,C.e5s,C.cOa,C.e19,C.e1l,C.e1j,C.e1r,C.e1d,C.e1b,C.cpw,C.dTu,C.dTp,C.ewP])
u(B.af,[C.Xn,C.XK,C.Wb,C.Wi,C.OF,C.aKt,C.XJ,C.akZ,C.WU,C.aAh,C.WD,C.Yh,C.X1,C.Wc,C.WT,C.XE,C.XP,C.Y8,C.XD])
u(B.ah,[C.boj,C.aPr,C.aOw,C.aOB,C.aG8,C.aQh,C.aPp,C.aAC,C.bBO,C.aMY,C.aOM,C.aPL,C.aOT,C.aOy,C.bnK,C.aHa,C.aHx,C.bp0,C.aPj])
u(B.iI,[C.eoq,C.eor,C.eoD,C.eoE,C.eoz,C.eoy,C.eoA,C.eow,C.eoB,C.eou,C.eoC,C.eot,C.eoH,C.eoG,C.eoI,C.eoF,C.eoJ,C.eoK,C.eoM,C.eE7,C.eE9,C.eEa,C.eDR,C.eDQ,C.eDO,C.eDX,C.eDY,C.eDU,C.eDZ,C.eDT,C.eE_,C.eE0,C.eDS,C.eE2,C.eDW,C.eE6,C.eDV,C.dTn,C.dTm,C.dSY,C.dSZ,C.dT_,C.dTo,C.dT1,C.dT3,C.dT4,C.dT6,C.dSV,C.dSW,C.dSX,C.dTd,C.dTe,C.dTf,C.dTc,C.dTh,C.dTb,C.dTi,C.dTa,C.dTj,C.dT9,C.dTk,C.dT8,C.dTl,C.dT7,C.dUI,C.dUH,C.dUM,C.dUE,C.dUF,C.dUN,C.dUO,C.dUP,C.dUK,C.dUA,C.dUY,C.dUX,C.dV_,C.dV0,C.dV1,C.dUR,C.dV2,C.cZ4,C.e0d,C.e0c,C.e0e,C.fB1,C.fB2,C.fB3,C.fB4,C.fB5,C.fB6,C.fB7,C.fB8,C.fB9,C.fgf,C.fge,C.ffX,C.ffW,C.ffM,C.ffL,C.ffP,C.ffS,C.ffR,C.ffT,C.ffQ,C.fg4,C.fg3,C.fg5,C.ffY,C.fg9,C.fg0,C.fgb,C.fg_,C.fgc,C.ffZ,C.eD9,C.eCZ,C.eD8,C.eCV,C.eDa,C.eDc,C.eCW,C.eCX,C.eDx,C.eDw,C.eDn,C.eDo,C.eDp,C.eDj,C.eDk,C.eDi,C.eDl,C.eDh,C.eDm,C.eDg,C.eDe,C.duw,C.bSx,C.bSz,C.bSk,C.bSm,C.bMe,C.bMf,C.bMd,C.bMg,C.bMi,C.bM3,C.bM4,C.bM8,C.bM5,C.bM6,C.bM7,C.bMz,C.bLE,C.bMp,C.bMq,C.bMn,C.bMo,C.bMk,C.bMl,C.bMm,C.bMv,C.bMj,C.bMw,C.bLF,C.bM1,C.bLM,C.bLL,C.bLN,C.bLO,C.bLK,C.bLS,C.bLJ,C.bLT,C.bLU,C.bLV,C.bLW,C.bLI,C.bLX,C.bLH,C.bLY,C.bLG,C.e5l,C.e5w,C.e5x,C.e5j,C.e5i,C.e5h,C.e5q,C.e5o,C.e5p,C.e5r,C.e5m,C.e5n,C.e5z,C.e5A,C.e5B,C.e5C,C.e5D,C.e1h,C.e1i,C.e1s,C.e1f,C.e1t,C.e1u,C.e1m,C.e1n,C.e1o,C.e1p,C.e1v,C.e1k,C.e1e,C.e1c,C.e16,C.e1a,C.fBh,C.fBi,C.fBj,C.fBk,C.fBl,C.fBm,C.fBn,C.fBo,C.cpv,C.cpu,C.f1s,C.f1o,C.f1n,C.f1q,C.f1p,C.e93,C.e94,C.e8Z,C.e90,C.e91,C.e9_,C.e92,C.dTv,C.dTs,C.dTr,C.dTt,C.dTq,C.e4Q,C.e4P,C.e4O,C.e4N,C.e4U,C.e4M,C.e4L,C.e4W,C.e4K,C.e4X,C.e4J,C.e4Y,C.e4Z,C.e4I,C.ewJ,C.ewK,C.ewI,C.ewL,C.ewH,C.ewO,C.ewQ,C.ewM,C.ewR,C.eJB,C.eJC,C.eJz,C.eJA,C.eJy,C.eJD,C.eJE,C.eJF,C.eJG,C.eXS,C.eXU,C.eXR,C.eXQ,C.eXW,C.eXP,C.evo,C.evp,C.evh,C.evg,C.evi,C.evf,C.evj,C.eve,C.evk,C.evd,C.evc,C.evb,C.eva,C.cpr])
t(C.bC0,C.aPr)
t(C.aHp,C.bC0)
u(B.lK,[C.blb,C.bf8,C.bwG,C.bdM,C.bve,C.buE,C.bes,C.buG,C.byM,C.bl9,C.al0,C.bcW,C.bzQ,C.agK,C.bA1,C.buF,C.bpN])
t(C.aOx,C.aOw)
t(C.aFQ,C.aOx)
t(C.bBL,C.aOB)
t(C.aFS,C.bBL)
u(B.lh,[C.Lw,C.a2i,C.Ku])
u(B.aw,[C.bvD,C.ah2,C.afS,C.RE,C.bwa,C.aak,C.bhg])
t(C.aKu,C.aQh)
t(C.bl8,B.oV)
t(C.aHo,C.aPp)
t(C.aAD,C.aAC)
t(C.al_,C.aAD)
t(C.aGm,C.bBO)
t(C.bcX,C.aMY)
t(C.aGc,C.aOM)
t(C.bC7,C.aPL)
t(C.aHU,C.bC7)
t(C.bBQ,C.aOT)
t(C.bnT,C.bBQ)
t(C.bBK,C.aOy)
t(C.bns,C.bBK)
t(C.bBZ,C.aPj)
t(C.bov,C.bBZ)
w(C.aPr,B.cj)
w(C.bC0,E.nY)
w(C.aOw,B.cj)
w(C.aOx,E.nY)
w(C.aOB,B.cj)
w(C.bBL,E.nY)
w(C.aQh,B.f2)
w(C.aPp,B.cj)
w(C.aAC,B.cj)
w(C.aAD,E.nY)
w(C.aMY,B.cj)
v(C.bBO,B.eM)
w(C.aOM,B.cj)
w(C.aOy,B.cj)
w(C.bBK,E.nY)
w(C.aOT,B.cj)
w(C.bBQ,E.nY)
w(C.aPj,B.cj)
w(C.bBZ,E.nY)
w(C.aPL,B.cj)
w(C.bC7,E.nY)})()
B.j3(b.typeUniverse,JSON.parse('{"Xn":{"af":[],"w":[]},"boj":{"ah":["Xn"]},"XK":{"af":[],"w":[]},"aHp":{"ah":["XK"]},"blb":{"aC":[]},"Wb":{"af":[],"w":[]},"aFQ":{"ah":["Wb"]},"Wi":{"af":[],"w":[]},"aFS":{"ah":["Wi"]},"bf8":{"aC":[]},"ah2":{"aw":[],"w":[]},"afS":{"aw":[],"w":[]},"aKt":{"af":[],"w":[]},"OF":{"af":[],"w":[]},"aG8":{"ah":["OF"]},"bvD":{"aw":[],"w":[]},"RE":{"aw":[],"w":[]},"bwG":{"aC":[]},"bwa":{"aw":[],"w":[]},"bdM":{"aC":[]},"aKu":{"ah":["aKt"]},"bve":{"aC":[]},"buE":{"aC":[]},"bes":{"aC":[]},"buG":{"aC":[]},"byM":{"aC":[]},"XJ":{"af":[],"w":[]},"bl8":{"aC":[]},"aHo":{"ah":["XJ"]},"bl9":{"aC":[]},"al0":{"aC":[]},"akZ":{"af":[],"w":[]},"al_":{"ah":["akZ"]},"WU":{"af":[],"w":[]},"aAh":{"af":[],"w":[]},"aGm":{"ah":["WU"],"eM":[]},"bcX":{"ah":["aAh"]},"bcW":{"aC":[]},"WD":{"af":[],"w":[]},"aGc":{"ah":["WD"]},"bzQ":{"aC":[]},"agK":{"aC":[]},"aak":{"aw":[],"w":[]},"Yh":{"af":[],"w":[]},"X1":{"af":[],"w":[]},"Wc":{"af":[],"w":[]},"WT":{"af":[],"w":[]},"XE":{"af":[],"w":[]},"XP":{"af":[],"w":[]},"Y8":{"af":[],"w":[]},"XD":{"af":[],"w":[]},"aHU":{"ah":["Yh"]},"bA1":{"aC":[]},"bnT":{"ah":["X1"]},"buF":{"aC":[]},"bns":{"ah":["Wc"]},"bnK":{"ah":["WT"]},"bpN":{"aC":[]},"aHa":{"ah":["XE"]},"aHx":{"ah":["XP"]},"bp0":{"ah":["Y8"]},"bov":{"ah":["XD"]},"bhg":{"aw":[],"w":[]}}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.as
return{c:w("l7<u?>"),G:w("u"),J:w("bn<n,H>"),Q:w("db<n>"),Z:w("a_"),I:w("vg"),M:w("N<dh>"),l:w("N<a5a>"),h:w("N<a5f>"),V:w("N<aa>"),O:w("N<u>"),F:w("N<W>"),D:w("N<ay<aE>>"),x:w("N<a_>"),E:w("N<ai<n>>"),b:w("N<ai<H>>"),U:w("N<ai<F?>>"),B:w("N<a9<n,aE>>"),g:w("N<r>"),bz:w("N<u9>"),v:w("N<fZ>"),eZ:w("N<+(n,n)>"),fT:w("N<+(H,w)>"),L:w("N<+(F,n)>"),u:w("N<+(F,F)>"),r:w("N<+(n,n,a_)>"),e:w("N<+(n,H,H,F)>"),o:w("N<+(n,F,n,F)>"),d:w("N<+(n,n,H,H,a9<n,H>)>"),_:w("N<vH>"),fQ:w("N<ack>"),s:w("N<n>"),cF:w("N<au>"),X:w("N<KK>"),p:w("N<w>"),bL:w("N<adt>"),fH:w("N<lf>"),a_:w("N<adH>"),cB:w("N<o_>"),ba:w("N<adZ>"),eW:w("N<Dn>"),fY:w("N<a0g>"),ac:w("N<afW>"),cd:w("N<Dy>"),fr:w("N<agR>"),e4:w("N<a2v>"),au:w("N<aLm>"),f7:w("N<P>"),n:w("N<H>"),t:w("N<F>"),dS:w("N<aC?>"),fs:w("N<u9?>"),bN:w("N<F?>"),gJ:w("cB<al_>"),A:w("cB<ah<af>>"),bF:w("ai<u>"),gl:w("ai<W>"),ew:w("ai<aE>"),j:w("ai<@>"),P:w("a9<n,@>"),f:w("a9<@,@>"),bd:w("O<es,n>"),fR:w("O<+(H,w),w>"),w:w("ie"),gA:w("vl"),gD:w("wH"),k:w("cp"),K:w("aE"),Y:w("u9"),C:w("es"),N:w("n"),bO:w("au"),a:w("bq<H>"),W:w("bg<n>"),aC:w("bg<F?>"),dg:w("ee<rr>"),m:w("be3"),a2:w("Dj"),f3:w("rr"),es:w("GZ"),q:w("l_"),y:w("P"),i:w("H"),z:w("@"),S:w("F"),R:w("ai<@>?"),cK:w("aE?"),T:w("n?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b5h=new B.dh(0,0.1)
D.b7d=new C.aVH(0,0,0)
D.MS=new C.aVH(0,0.5,0)
D.b7P=new B.ax(A.bf,1,A.r,-1)
D.b9l=new B.aX(16,1/0,16,1/0)
D.b9w=new B.aX(0,1/0,0,210)
D.brz=new B.u(1,0.10588235294117647,0.12549019607843137,0.18823529411764706,A.q)
D.dEc=w([D.brz,Ax.akD],x.O)
D.eO0=new B.bU(A.BU,1.1,A.x,null,0,D.dEc,null,null)
D.b9E=new B.o(null,null,null,null,null,D.eO0,A.m)
D.baA=new B.o(A.bj,null,null,null,null,null,A.a6)
D.fI0=new B.G(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hll=new B.C("\u26a1",null,D.fI0,null,null,null,null,null,null,null,null,null)
D.bfk=new B.cn(A.z,null,null,D.hll,null)
D.aYo=new B.G(!0,A.bX,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.haE=new B.C("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aYo,null,A.K,null,null,null,null,null,null,null)
D.eG9=new B.D(A.o2,D.haE,null)
D.bfv=new B.cn(A.z,null,null,D.eG9,null)
D.h0l=new B.C("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aYo,null,A.K,null,null,null,null,null,null,null)
D.eH2=new B.D(A.HQ,D.h0l,null)
D.bgd=new B.cn(A.z,null,null,D.eH2,null)
D.aho=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.bk5=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.bkm=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.blC=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.blJ=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.bm5=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.bo8=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.bpg=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.bq0=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.ajL=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.br2=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.ak8=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.akg=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.bt2=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.akI=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.bv5=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.bvd=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bvJ=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.wQ=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.bxV=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.amd=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.bDM=new B.bh(11e6)
D.bFG=new B.R(10,6,10,2)
D.bFI=new B.R(10,8,0,10)
D.bGm=new B.R(12,8,6,10)
D.bGp=new B.R(12,8,8,8)
D.bGx=new B.R(14,0,14,22)
D.bGz=new B.R(14,0,14,30)
D.bHD=new B.R(16,4,16,28)
D.bHX=new B.R(18,10,18,16)
D.bKM=new B.R(4,4,8,2)
D.bLp=new B.R(8,14,8,12)
D.bLA=new B.R(8,6,8,8)
D.bLW=new B.R(0,0,1.5,0)
D.b7_=new B.Ei(26,"saturation")
D.bMe=new B.v4(A.cE,D.b7_,null,A.Zw)
D.bMf=new B.h2(A.H,11)
D.bMj=new B.h2(A.H,30)
D.h_n=new B.C("REACTION LAB",null,V.aZ0,null,null,null,null,A.a2,null,1,null,null)
D.bMs=new B.bu(1,A.b8,D.h_n,null)
D.h3w=new B.C("\ud83d\udce2 NGMY Ads",null,A.rM,null,null,null,null,A.f_,null,1,null,null)
D.bNp=new B.bu(1,A.b8,D.h3w,null)
D.fZ_=new B.C("Wire selected",null,A.hh,null,null,null,null,null,null,null,null,null)
D.bND=new B.bu(1,A.b8,D.fZ_,null)
D.ari=new B.a_(62712,"MaterialIcons",!1)
D.bTQ=new B.a_(62908,"MaterialIcons",!1)
D.bVv=new B.a_(983122,"MaterialIcons",!1)
D.bVL=new B.a_(983247,"MaterialIcons",!1)
D.bW0=new B.a_(983443,"MaterialIcons",!1)
D.bWj=new B.a_(983616,"MaterialIcons",!1)
D.bVu=new B.a_(983117,"MaterialIcons",!1)
D.c_4=new B.ae(D.bVu,28,A.c,null,null,null)
D.c_m=new B.ae(A.jl,18,null,null,null,null)
D.c1C=new B.ae(A.o8,null,A.ab,null,null,null)
D.c1M=new B.ae(A.a4X,21,A.ab,null,null,null)
D.c2D=new B.ae(A.eC,17,A.ab,null,null,null)
D.c5x=new B.ae(A.jl,21,A.ab,null,null,null)
D.c63=new B.ae(A.eq,20,A.c1,null,null,null)
D.c7a=new B.ae(A.eg,null,A.aQ,null,null,null)
D.dBJ=w([A.dl,A.dg,A.dl],x.O)
D.auZ=new B.a8(A.a5,A.a9,A.x,D.dBJ,null,null)
D.daZ=w([A.bO,A.bk],x.O)
D.caG=new B.a8(A.aX,A.b1,A.x,D.daZ,null,null)
D.caV=new B.a8(A.aX,A.b1,A.x,A.a7x,null,null)
D.dwY=w([F.Ni,A9.amn],x.O)
D.cbF=new B.a8(A.aX,A.b1,A.x,D.dwY,null,null)
D.d8i=w([A.pA,A.iI],x.O)
D.cbL=new B.a8(A.aX,A.b1,A.x,D.d8i,null,null)
D.daH=w([A.cU,A.aw],x.O)
D.avb=new B.a8(A.aX,A.b1,A.x,D.daH,null,null)
D.duR=w([A.d0,A.iL,A.bk],x.O)
D.cc3=new B.a8(A.a5,A.a9,A.x,D.duR,null,null)
D.dH5=w([A.d0,A.bO,A.bk],x.O)
D.cce=new B.a8(A.a5,A.a9,A.x,D.dH5,null,null)
D.duX=w([A.cy,A.cx],x.O)
D.ave=new B.a8(A.aX,A.b1,A.x,D.duX,null,null)
D.aFe=w([A.cU,M.n8],x.O)
D.ccF=new B.a8(A.aX,A.b1,A.x,D.aFe,null,null)
D.ccX=new B.a8(A.aX,A.b1,A.x,U.avy,null,null)
D.cdO=new B.a8(A.ay,A.aD,A.x,A.T2,null,null)
D.bwE=new B.u(1,0.16470588235294117,0.16470588235294117,0.1803921568627451,A.q)
D.brP=new B.u(1,0.0392156862745098,0.0392156862745098,0.043137254901960784,A.q)
D.dks=w([D.bwE,D.brP],x.O)
D.cdS=new B.a8(A.aX,A.b1,A.x,D.dks,null,null)
D.ce1=new B.a8(A.aX,A.b1,A.x,H.aEw,null,null)
D.alX=new B.u(1,0.043137254901960784,0.043137254901960784,0.047058823529411764,A.q)
D.bwf=new B.u(1,0.22745098039215686,0.22745098039215686,0.23921568627450981,A.q)
D.dDC=w([D.alX,D.bwf,D.alX],x.O)
D.ce9=new B.a8(A.a5,A.a9,A.x,D.dDC,null,null)
D.bvD=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.bwx=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cTz=w([A.Op,D.bvD,D.bwx],x.O)
D.cec=new B.a8(A.aX,A.b1,A.x,D.cTz,null,null)
D.cGJ=w([A.de,A.iZ],x.O)
D.cer=new B.a8(A.aX,A.b1,A.x,D.cGJ,null,null)
D.cUf=w([A.d0,A.hX,A.d0],x.O)
D.cez=new B.a8(A.a5,A.a9,A.x,D.cUf,null,null)
D.bzl=new B.u(1,0.07058823529411765,0.0784313725490196,0.10196078431372549,A.q)
D.cHv=w([F.ahw,D.bzl],x.O)
D.ceF=new B.a8(A.aX,A.b1,A.x,D.cHv,null,null)
D.cfj=w([0,4,7],x.t)
D.cfk=w([0,4,7,12],x.t)
D.cfl=w([0,4,7,4],x.t)
D.aEb=w([A.hj,A.tk],x.O)
D.aDH=w([A.fY,A.cZ],x.O)
D.aC_=w([A.bl,A.dZ],x.O)
D.d1u=w([A.aQ,A.de],x.O)
D.dwn=w([A.c5,A.lQ],x.O)
D.aBq=w([A.cW,A.kc],x.O)
D.d6Y=w([A.bQ,A.aM],x.O)
D.cfJ=w([D.aEb,D.aDH,A.a6M,D.aC_,D.d1u,A.aCg,A.aDd,D.dwn,D.aBq,D.d6Y],B.as("N<ai<u>>"))
D.ckr=w([120,220,380],x.t)
D.cob=w([12,16,19,24],x.t)
D.con=w([1400,800,450,2400],x.t)
D.cwV=w([250,450,900,1500],x.t)
D.bjo=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.bw2=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.btJ=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.bzX=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.bsQ=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.aAG=w([D.bjo,D.bw2,D.btJ,D.bzX,D.bsQ],x.O)
D.f7M=new B.y(-25,A.aw)
D.eWU=new B.y(25,A.bE)
D.cGP=w([D.f7M,D.eWU],B.as("N<+(H,u)>"))
D.cOm=w([50,25,75],x.t)
D.cU8=w([0,5,10,15,18,20,25],x.t)
D.d1O=w([900,500,250,1600],x.t)
D.d69=w([A.bl,A.bC,A.bd,A.bl],x.O)
D.a6E=w([A.aC,A.bu,A.bj,A.aH,A.oK],x.O)
D.d7V=w([A.aw,A.aC,A.cW,A.bu,A.bj,A.cG,A.ch,A.bC,A.ZQ],x.O)
D.a6H=w([0.04,0.17,0.3],x.n)
D.fri=new C.vH("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.fro=new C.vH("Medium engine","A good all-rounder.",0.3,0.9)
D.frn=new C.vH("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Jl=w([D.fri,D.fro,D.frn],x._)
D.eU3=new B.y(6,"Easy")
D.eUS=new B.y(8,"Medium")
D.ePD=new B.y(10,"Hard")
D.d9G=w([D.eU3,D.eUS,D.ePD],x.L)
D.aCp=w([0.55,0.78,1],x.n)
D.aCA=w([A.c,A.h8,A.pC,A.aw],x.O)
D.aCI=w([A.bj,A.aC,A.bu,A.dg],x.O)
D.frf=new C.vH("Radar","Shows your height above the ground.",0.1,0)
D.frg=new C.vH("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.frd=new C.vH("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aCR=w([D.frf,D.frg,D.frd],x._)
D.dg0=w([-29.5,28.5],x.n)
D.dg6=w([A.bk,A.cm,F.NN,A.cy],x.O)
D.dgu=w([47,100,220,470,1000],x.n)
D.dhO=w([0,0.32,0.62,1],x.n)
D.dhT=w([A.d0,A.hX,A.d0,A.cy],x.O)
D.Ks={volts:0}
D.a8y=new B.bn(D.Ks,[3],x.J)
D.KU=new B.e0(["b","battery",0.2,0.3,D.a8y])
D.eA0={on:0}
D.dNt=new B.bn(D.eA0,[1],x.J)
D.Fk=new B.e0(["s","switch",0.5,0.3,D.dNt])
D.foS=new B.e0(["l","bulb",0.8,0.3,A.jI])
D.db9=w([D.KU,D.Fk,D.foS],x.d)
D.Fi=new B.b7(["b",0,"s",0])
D.fnL=new B.b7(["s",1,"l",0])
D.aTT=new B.b7(["l",1,"b",1])
D.dv4=w([D.Fi,D.fnL,D.aTT],x.o)
D.dav=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.eOK=new C.na("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.db9,D.dv4,D.dav)
D.aNE={ohms:0}
D.aLd=new B.bn(D.aNE,[220],x.J)
D.fof=new B.e0(["r","resistor",0.5,0.3,D.aLd])
D.fp8=new B.e0(["d","led",0.8,0.3,A.jI])
D.dyB=w([D.KU,D.fof,D.fp8],x.d)
D.fmZ=new B.b7(["b",0,"r",0])
D.fnF=new B.b7(["r",1,"d",0])
D.fn5=new B.b7(["d",1,"b",1])
D.dIT=w([D.fmZ,D.fnF,D.fn5],x.o)
D.dz3=w(["led","diode","indicator"],x.s)
D.eOR=new C.na("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dyB,D.dIT,D.dz3)
D.aa2={level:0}
D.dMQ=new B.bn(D.aa2,[0.2],x.J)
D.fom=new B.e0(["p","pot",0.5,0.3,D.dMQ])
D.foo=new B.e0(["m","motor",0.8,0.3,A.jI])
D.dbv=w([D.KU,D.fom,D.foo],x.d)
D.fmY=new B.b7(["b",0,"p",0])
D.fnA=new B.b7(["p",1,"m",0])
D.fnv=new B.b7(["m",1,"b",1])
D.dDV=w([D.fmY,D.fnA,D.fnv],x.o)
D.duK=w(["fan","motor","spin","dimmer"],x.s)
D.eOI=new C.na("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.dbv,D.dDV,D.duK)
D.a8u=new B.bn(D.aa2,[0.9],x.J)
D.aU1=new B.e0(["s","solar",0.25,0.3,D.a8u])
D.aU0=new B.e0(["l","bulb",0.75,0.3,A.jI])
D.deD=w([D.aU1,D.aU0],x.d)
D.fnI=new B.b7(["s",0,"l",0])
D.fns=new B.b7(["l",1,"s",1])
D.dco=w([D.fnI,D.fns],x.o)
D.dEG=w(["solar","sun","without battery","no battery","free"],x.s)
D.eOL=new C.na("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.deD,D.dco,D.dEG)
D.fpd=new B.e0(["c","crank",0.25,0.3,D.a8u])
D.dsN=w([D.fpd,D.aU0],x.d)
D.fn1=new B.b7(["c",0,"l",0])
D.fnr=new B.b7(["l",1,"c",1])
D.dtt=w([D.fn1,D.fnr],x.o)
D.dsY=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.eOH=new C.na("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.dsN,D.dtt,D.dsY)
D.dMP=new B.bn(D.aa2,[0.7],x.J)
D.fou=new B.e0(["t","turbine",0.25,0.3,D.dMP])
D.fod=new B.e0(["m","motor",0.75,0.3,A.jI])
D.dmp=w([D.fou,D.fod],x.d)
D.fnT=new B.b7(["t",0,"m",0])
D.fnw=new B.b7(["m",1,"t",1])
D.dld=w([D.fnT,D.fnw],x.o)
D.drt=w(["wind","turbine","windmill","water","hydro"],x.s)
D.eOE=new C.na("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.dmp,D.dld,D.drt)
D.aLa=new B.bn(D.Ks,[9],x.J)
D.ab8=new B.e0(["b","battery",0.2,0.3,D.aLa])
D.aTZ=new B.e0(["r","radio",0.8,0.3,A.jI])
D.dFj=w([D.ab8,D.Fk,D.aTZ],x.d)
D.fnN=new B.b7(["s",1,"r",0])
D.aTV=new B.b7(["r",1,"b",1])
D.ceX=w([D.Fi,D.fnN,D.aTV],x.o)
D.dDG=w(["radio","music","listen"],x.s)
D.eOQ=new C.na("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dFj,D.ceX,D.dDG)
D.dNT=new B.bn(D.Ks,[12],x.J)
D.aTY=new B.e0(["b","battery",0.2,0.3,D.dNT])
D.foT=new B.e0(["t","tv",0.8,0.3,A.jI])
D.dbb=w([D.aTY,D.Fk,D.foT],x.d)
D.fnO=new B.b7(["s",1,"t",0])
D.aTW=new B.b7(["t",1,"b",1])
D.dwr=w([D.Fi,D.fnO,D.aTW],x.o)
D.dFh=w(["tv","television","screen","watch"],x.s)
D.eOB=new C.na("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.dbb,D.dwr,D.dFh)
D.foI=new B.e0(["z","buzzer",0.8,0.3,A.jI])
D.cQL=w([D.KU,D.Fk,D.foI],x.d)
D.fnP=new B.b7(["s",1,"z",0])
D.fo6=new B.b7(["z",1,"b",1])
D.d5a=w([D.Fi,D.fnP,D.fo6],x.o)
D.dBR=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.eON=new C.na("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cQL,D.d5a,D.dBR)
D.fon=new B.e0(["h","heater",0.8,0.3,A.jI])
D.dpY=w([D.ab8,D.Fk,D.fon],x.d)
D.fnK=new B.b7(["s",1,"h",0])
D.fne=new B.b7(["h",1,"b",1])
D.d64=w([D.Fi,D.fnK,D.fne],x.o)
D.cAe=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.eOC=new C.na("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.dpY,D.d64,D.cAe)
D.foV=new B.e0(["s","solar",0.2,0.25,D.a8u])
D.dNY=new B.bn(D.aNE,[100],x.J)
D.foY=new B.e0(["r","resistor",0.55,0.25,D.dNY])
D.fp6=new B.e0(["c","capacitor",0.85,0.25,A.jI])
D.foj=new B.e0(["q","resistor",0.55,0.6,D.aLd])
D.foW=new B.e0(["d","led",0.85,0.6,A.jI])
D.dvQ=w([D.foV,D.foY,D.fp6,D.foj,D.foW],x.d)
D.fnJ=new B.b7(["s",0,"r",0])
D.fnE=new B.b7(["r",1,"c",0])
D.fn3=new B.b7(["c",1,"s",1])
D.fn2=new B.b7(["c",0,"q",0])
D.fnD=new B.b7(["q",1,"d",0])
D.fn6=new B.b7(["d",1,"c",1])
D.diQ=w([D.fnJ,D.fnE,D.fn3,D.fn2,D.fnD,D.fn6],x.o)
D.ds3=w(["capacitor","store","charge","flash"],x.s)
D.eOP=new C.na("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.dvQ,D.diQ,D.ds3)
D.fox=new B.e0(["b","battery",0.15,0.3,D.a8y])
D.fpf=new B.e0(["l1","bulb",0.5,0.3,A.jI])
D.foF=new B.e0(["l2","bulb",0.85,0.3,A.jI])
D.d90=w([D.fox,D.fpf,D.foF],x.d)
D.fmX=new B.b7(["b",0,"l1",0])
D.fno=new B.b7(["l1",1,"l2",0])
D.fnp=new B.b7(["l2",1,"b",1])
D.dnf=w([D.fmX,D.fno,D.fnp],x.o)
D.dF1=w(["series","two bulbs","dim"],x.s)
D.eOF=new C.na("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.d90,D.dnf,D.dF1)
D.eAm={volts:0,charge:1}
D.dO1=new B.bn(D.eAm,[1.5,0],x.J)
D.fp3=new B.e0(["b","battery",0.75,0.3,D.dO1])
D.d8j=w([D.aU1,D.fp3],x.d)
D.fnH=new B.b7(["s",0,"b",0])
D.fn0=new B.b7(["b",1,"s",1])
D.dja=w([D.fnH,D.fn0],x.o)
D.dsd=w(["charge","rechargeable","flat","recharge"],x.s)
D.eOD=new C.na("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.d8j,D.dja,D.dsd)
D.dNS=new B.bn(D.Ks,[4.5],x.J)
D.fop=new B.e0(["b","battery",0.2,0.3,D.dNS])
D.aTX=new B.e0(["p","phone",0.8,0.3,A.jI])
D.dmd=w([D.fop,D.Fk,D.aTX],x.d)
D.fnM=new B.b7(["s",1,"p",0])
D.ab7=new B.b7(["p",1,"b",1])
D.dAz=w([D.Fi,D.fnM,D.ab7],x.o)
D.dCj=w(["phone","charger","usb","mobile"],x.s)
D.eOJ=new C.na("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.dmd,D.dAz,D.dCj)
D.foa=new B.e0(["f","fan",0.8,0.3,A.jI])
D.cse=w([D.KU,D.foa],x.d)
D.fmW=new B.b7(["b",0,"f",0])
D.fnc=new B.b7(["f",1,"b",1])
D.d6I=w([D.fmW,D.fnc],x.o)
D.duJ=w(["fan","cool","air","wind"],x.s)
D.eOS=new C.na("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.cse,D.d6I,D.duJ)
D.foM=new B.e0(["b","battery",0.15,0.2,D.a8y])
D.fob=new B.e0(["a","ammeter",0.5,0.2,A.jI])
D.fo9=new B.e0(["l","bulb",0.85,0.2,A.jI])
D.foO=new B.e0(["v","voltmeter",0.5,0.6,A.jI])
D.dsA=w([D.foM,D.fob,D.fo9,D.foO],x.d)
D.fmU=new B.b7(["b",0,"a",0])
D.fmS=new B.b7(["a",1,"l",0])
D.fnV=new B.b7(["v",0,"l",0])
D.fnW=new B.b7(["v",1,"l",1])
D.dj1=w([D.fmU,D.fmS,D.aTT,D.fnV,D.fnW],x.o)
D.dIS=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.eOO=new C.na("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.dsA,D.dj1,D.dIS)
D.fpi=new B.e0(["b","battery",0.15,0.2,D.aLa])
D.fow=new B.e0(["t","tv",0.55,0.2,A.jI])
D.aLb=new B.bn(D.Ks,[5],x.J)
D.fog=new B.e0(["c","buck",0.4,0.5,D.aLb])
D.foy=new B.e0(["p","phone",0.8,0.5,A.jI])
D.dgg=w([D.fpi,D.fow,D.fog,D.foy],x.d)
D.fn_=new B.b7(["b",0,"t",0])
D.aTR=new B.b7(["b",0,"c",0])
D.aTS=new B.b7(["c",1,"p",0])
D.dma=w([D.fn_,D.aTW,D.aTR,D.aTS,D.ab7],x.o)
D.de8=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.eOG=new C.na("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.dgg,D.dma,D.de8)
D.foi=new B.e0(["c","buck",0.5,0.3,D.aLb])
D.d5R=w([D.aTY,D.foi,D.aTX],x.d)
D.dbG=w([D.aTR,D.aTS,D.ab7],x.o)
D.cDN=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.eOA=new C.na("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.d5R,D.dbG,D.cDN)
D.foD=new B.e0(["d","diode",0.5,0.3,A.jI])
D.dnv=w([D.ab8,D.foD,D.aTZ],x.d)
D.fmV=new B.b7(["b",0,"d",0])
D.fn7=new B.b7(["d",1,"r",0])
D.cTk=w([D.fmV,D.fn7,D.aTV],x.o)
D.ddN=w(["diode","protect","backwards","one way"],x.s)
D.eOM=new C.na("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.dnv,D.cTk,D.ddN)
D.Tg=w([D.eOK,D.eOR,D.eOI,D.eOL,D.eOH,D.eOE,D.eOQ,D.eOB,D.eON,D.eOC,D.eOP,D.eOF,D.eOD,D.eOJ,D.eOS,D.eOO,D.eOG,D.eOA,D.eOM],B.as("N<na>"))
D.i_x=new C.Hd("Moon",1.62,A.d0,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.i_v=new C.Hd("Mars",3.71,A.aC,"Mars has about 38 percent of Earth's gravity.")
D.i_y=new C.Hd("Mercury",3.7,A.kG,"Mercury is small, so its gravity is like Mars.")
D.i_s=new C.Hd("Venus",8.87,A.aQ,"Venus is almost as heavy as Earth, with strong gravity.")
D.i_u=new C.Hd("Earth",9.81,A.aH,"On Earth gravity is strong, and the air also slows you down.")
D.i_w=new C.Hd("Neptune",11.15,A.dg,"Neptune pulls a little harder than Earth.")
D.i_t=new C.Hd("Jupiter",24.79,A.cW,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.u_=w([D.i_x,D.i_v,D.i_y,D.i_s,D.i_u,D.i_w,D.i_t],B.as("N<Hd>"))
D.diO=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.djC=w([0.2,0.5,0.8],x.n)
D.b4_=new C.Lw(0,"accordion")
D.d75=w([A.jY,A.A9,A.zV],x.x)
D.dfB=w(["Mail","SMS","Ad"],x.s)
D.d7N=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hYH=new C.Bi(D.b4_,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aEb,D.d75,D.dfB,D.d7N)
D.af_=new C.Lw(1,"flip")
D.drY=w([A.rk,A.DW,A.rn],x.x)
D.dlT=w(["Unlock","Verify","Secure"],x.s)
D.d5M=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hYG=new C.Bi(D.af_,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.aDH,D.drY,D.dlT,D.d5M)
D.b40=new C.Lw(2,"towers")
D.dku=w([A.A7,A.mx,A.iw],x.x)
D.djV=w(["Save","Grow","Earn"],x.s)
D.cUl=w(["","",""],x.s)
D.hYI=new C.Bi(D.b40,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a6M,D.dku,D.djV,D.cUl)
D.af0=new C.Lw(3,"assemble")
D.dt1=w([A.p3,A.fN,A.eg],x.x)
D.deS=w(["Launch","Charge","Shine"],x.s)
D.doW=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hYK=new C.Bi(D.af0,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.aC_,D.dt1,D.deS,D.doW)
D.b41=new C.Lw(4,"carousel")
D.dsO=w([A.bd,A.fv],x.O)
D.dfM=w([A.nj,A.arG,A.QY],x.x)
D.d9w=w(["Explore","Discover","Learn"],x.s)
D.dmk=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hYF=new C.Bi(D.b41,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.dsO,D.dfM,D.d9w,D.dmk)
D.b42=new C.Lw(5,"burst")
D.djQ=w([A.hZ,A.uW],x.O)
D.d7G=w([A.kl,A.m1,A.hQ],x.x)
D.d84=w(["Cheer","Win","Love"],x.s)
D.daE=w(["Make some noise","First place","Share the joy"],x.s)
D.hYJ=new C.Bi(D.b42,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.djQ,D.d7G,D.d84,D.daE)
D.aDo=w([D.hYH,D.hYG,D.hYI,D.hYK,D.hYF,D.hYJ],B.as("N<Bi>"))
D.fhx=new B.b0("skin","Skin",A.a4e)
D.fjh=new B.b0("muscle","Muscles",A.Qy)
D.fiU=new B.b0("organ","Organs",A.hQ)
D.bTw=new B.a_(62747,"MaterialIcons",!1)
D.fj3=new B.b0("bone","Skeleton",D.bTw)
D.fjp=new B.b0("vessel","Blood vessels",A.q4)
D.dkA=w([D.fhx,D.fjh,D.fiU,D.fj3,D.fjp],x.r)
D.frh=new C.vH("Simple legs","Light. Land gently.",0.15,0.2)
D.frj=new C.vH("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.frm=new C.vH("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.Ei=w([D.frh,D.frj,D.frm],x._)
D.fms=new B.b7(["beat",0.18,0.28,0])
D.fnQ=new B.b7(["burst",0.7,0.2,0])
D.fo0=new B.b7(["delay",0.45,0.5,1])
D.fny=new B.b7(["ripple",0.75,0.6,3])
D.dey=w([D.fms,D.fnQ,D.fo0,D.fny],x.e)
D.drd=w([Q.li,R.KS,F.VQ],x.u)
D.hVx=new C.GZ("First spark","A clock lights a burst and a ripple",D.dey,D.drd)
D.fnb=new B.b7(["beat",0.15,0.3,1])
D.fkJ=new B.b7(["ripple",0.62,0.15,0])
D.fnX=new B.b7(["delay",0.4,0.45,0])
D.fmO=new B.b7(["ripple",0.7,0.45,0])
D.fmn=new B.b7(["delay",0.4,0.7,1])
D.fnB=new B.b7(["shake",0.75,0.75,0])
D.dGi=w([D.fnb,D.fkJ,D.fnX,D.fmO,D.fmn,D.fnB],x.e)
D.eQL=new B.y(2,4)
D.aTv=new B.y(4,5)
D.diC=w([Q.li,R.KS,F.VQ,D.eQL,D.aTv],x.u)
D.hVz=new C.GZ("Heartbeat","Two thumps, then a shake",D.dGi,D.diC)
D.fmy=new B.b7(["dice",0.15,0.7,1])
D.fo2=new B.b7(["echo",0.4,0.7,0])
D.fmK=new B.b7(["comet",0.7,0.5,4])
D.fnR=new B.b7(["burst",0.72,0.2,1])
D.fn8=new B.b7(["burst",0.3,0.25,0])
D.fmz=new B.b7(["pop",0.55,0.85,0])
D.czM=w([D.fmy,D.fo2,D.fmK,D.fnR,D.fn8,D.fmz],x.e)
D.eQ4=new B.y(1,3)
D.eQ5=new B.y(1,4)
D.aTr=new B.y(0,5)
D.dsJ=w([Q.li,S.w8,D.eQ4,D.eQ5,D.aTr],x.u)
D.hVy=new C.GZ("Fireworks","Dice launch comets that burst in colour",D.czM,D.dsJ)
D.fmG=new B.b7(["beat",0.15,0.2,2])
D.fnl=new B.b7(["chance",0.4,0.2,0])
D.fmv=new B.b7(["ball",0.7,0.12,3])
D.fmg=new B.b7(["chance",0.4,0.5,1])
D.fo1=new B.b7(["ball",0.3,0.08,1])
D.fly=new B.b7(["ripple",0.7,0.55,3])
D.csJ=w([D.fmG,D.fnl,D.fmv,D.fmg,D.fo1,D.fly],x.e)
D.eQM=new B.y(2,5)
D.cQu=w([Q.li,S.w8,R.aaZ,F.VR,D.eQM],x.u)
D.hVw=new C.GZ("Rain","Balls fall at random and splash",D.csJ,D.cQu)
D.fnm=new B.b7(["beat",0.12,0.45,2])
D.fnS=new B.b7(["toggle",0.38,0.2,0])
D.fnZ=new B.b7(["wash",0.7,0.15,4])
D.fmx=new B.b7(["count3",0.38,0.45,0])
D.fnU=new B.b7(["burst",0.72,0.4,0])
D.fn9=new B.b7(["light",0.55,0.7,1])
D.fmh=new B.b7(["pop",0.8,0.8,4])
D.dvO=w([D.fnm,D.fnS,D.fnZ,D.fmx,D.fnU,D.fn9,D.fmh],x.e)
D.eRi=new B.y(3,6)
D.cvV=w([Q.li,S.w8,R.aaZ,F.VR,D.aTr,D.eRi],x.u)
D.hVu=new C.GZ("Disco","A beat drives lights, washes and bursts",D.dvO,D.cvV)
D.fo5=new B.b7(["button",0.12,0.2,0])
D.flZ=new B.b7(["delay",0.34,0.2,1])
D.fo4=new B.b7(["light",0.56,0.2,1])
D.fnY=new B.b7(["delay",0.56,0.45,1])
D.fnn=new B.b7(["ball",0.34,0.6,0])
D.fmf=new B.b7(["delay",0.34,0.8,1])
D.fkz=new B.b7(["burst",0.7,0.8,5])
D.cfM=w([D.fo5,D.flZ,D.fo4,D.fnY,D.fnn,D.fmf,D.fkz],x.e)
D.eTy=new B.y(5,6)
D.dC1=w([Q.li,S.w8,F.VQ,F.VR,D.aTv,D.eTy],x.u)
D.hVv=new C.GZ("Domino","Tap the button and watch it run down the line",D.cfM,D.dC1)
D.aDL=w([D.hVx,D.hVz,D.hVy,D.hVw,D.hVu,D.hVv],B.as("N<GZ>"))
D.dqq=w([0.05,0.15,0.25],x.n)
D.drr=w([1.5,3,4.5,9,12],x.n)
D.ffK=new B.b0("dice","Dice",A.o4)
D.fh3=new B.b0("coin","Coin",W.A0)
D.fjk=new B.b0("num","Number",A.xv)
D.drG=w([D.ffK,D.fh3,D.fjk],x.r)
D.drK=w(["skin","muscle","organ","bone","vessel"],x.s)
D.aDR=w([A.c1,A.aQ,A.bf,A.aH,A.bl,A.c5,A.cW,A.fY],x.O)
D.dsP=w([A.c5,A.aH,A.eG,A.bf],x.O)
D.dtY=w([],x.h)
D.eHP=new C.es("battery","Battery","\ud83d\udd0b",A.bf,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.eHV=new C.es("solar","Solar panel","\u2600\ufe0f",A.bu,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.eIz=new C.es("crank","Hand crank","\ud83d\udd04",A.cW,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.eIb=new C.es("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aH,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.eHH=new C.es("buck","Step-down converter","\ud83d\udd3d",A.fY,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.eI9=new C.es("regulator","5 V regulator","\ud83e\uddca",A.bQ,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.eIE=new C.es("diode","Diode","\u27a1\ufe0f",A.aQ,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.eIl=new C.es("ldr","Light sensor","\ud83c\udf1e",A.eG,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.eI_=new C.es("switch","Switch","\ud83c\udf9a\ufe0f",A.bl,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.eIB=new C.es("fuse","Fuse","\ud83e\uddef",A.c1,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.eHz=new C.es("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.fY,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.eIm=new C.es("resistor","Resistor","\u3030\ufe0f",A.aQ,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.eIo=new C.es("bulb","Light bulb","\ud83d\udca1",A.eG,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.eHX=new C.es("led","LED","\ud83d\udd34",A.aC,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.eI0=new C.es("motor","Motor","\u2699\ufe0f",A.bQ,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.eIi=new C.es("buzzer","Buzzer","\ud83d\udd14",A.c5,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.eHQ=new C.es("heater","Heater","\ud83d\udd25",A.cW,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.eId=new C.es("capacitor","Capacitor","\ud83e\udeab",A.cw,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.eI5=new C.es("radio","Radio","\ud83d\udcfb",A.oK,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.eI2=new C.es("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.bd,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.eHG=new C.es("voltmeter","Voltmeter","\ud83e\udded",A.bw,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.eHN=new C.es("ammeter","Ammeter","\ud83d\udcdf",A.aQ,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.eHT=new C.es("fan","Fan","\ud83c\udf00",A.aH,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.eIG=new C.es("speaker","Speaker","\ud83d\udd0a",A.c5,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.eIv=new C.es("clock","Digital clock","\u23f0",A.bf,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.eI8=new C.es("calculator","Calculator","\ud83e\uddee",A.Nl,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.eHM=new C.es("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cw,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.eIF=new C.es("router","WiFi router","\ud83d\udcf6",A.fY,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.eII=new C.es("siren","Siren","\ud83d\udea8",A.aC,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.eHC=new C.es("toycar","Toy car","\ud83d\ude97",A.cW,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.eIJ=new C.es("kettle","Kettle","\ud83e\uded6",A.n5,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.eHK=new C.es("lamp","Desk lamp","\ud83e\ude94",A.eG,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.eHW=new C.es("lights","Party lights","\ud83c\udf84",A.oK,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.eI6=new C.es("fridge","Fridge","\ud83e\uddca",A.hk,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.eHE=new C.es("washer","Washing machine","\ud83e\udee7",A.cw,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.eIw=new C.es("blender","Blender","\ud83e\udd64",A.c1,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.eI3=new C.es("drone","Drone","\ud83d\ude81",A.bQ,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.eHJ=new C.es("drill","Power drill","\ud83d\udd29",A.aQ,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.eI7=new C.es("torch","Torch","\ud83d\udd26",A.bM,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.eIt=new C.es("neon","Neon sign","\ud83e\udea7",A.c5,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.eHF=new C.es("microwave","Microwave","\ud83c\udf72",A.cW,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.eIn=new C.es("doorbell","Doorbell","\ud83d\udd14",A.bu,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.eHS=new C.es("camera","Security camera","\ud83d\udcf7",A.an,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.eIh=new C.es("console","Game console","\ud83c\udfae",A.bl,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.eIy=new C.es("heartmon","Heart monitor","\ud83e\ude7a",A.hI,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.eHD=new C.es("aquarium","Aquarium","\ud83d\udc20",A.bd,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.eIc=new C.es("lighthouse","Lighthouse","\ud83d\uddfc",A.eG,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.eIk=new C.es("discoball","Disco ball","\ud83e\udea9",A.oK,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.eID=new C.es("robot","Robot","\ud83e\udd16",A.aH,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.eHB=new C.es("toaster","Toaster","\ud83c\udf5e",A.ee,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.eIH=new C.es("ledstrip","LED strip","\ud83c\udf08",A.c5,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.eIs=new C.es("pump","Water pump","\ud83d\udeb0",A.aH,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.eIe=new C.es("hairdryer","Hair dryer","\ud83d\udca8",A.hZ,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.eIq=new C.es("headphones","Headphones","\ud83c\udfa7",A.bl,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.eHL=new C.es("smartwatch","Apple Watch Ultra","\u231a",A.bw,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.eIC=new C.es("tablet","iPad Pro M5","\ud83d\udcf2",A.cw,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.eHy=new C.es("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hI,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.eI4=new C.es("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bv,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.eHY=new C.es("appletv","Apple TV 4K","\ud83d\udcfa",A.bO,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.eIj=new C.es("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.wK,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.eHA=new C.es("iphonefold","iPhone Fold","\ud83d\udcf1",A.b_,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.eHO=new C.es("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.dg,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.eIA=new C.es("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cG,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.eIf=new C.es("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bj,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.eIa=new C.es("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.ca,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.eIr=new C.es("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.aC,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.eHZ=new C.es("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.bf,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.eIg=new C.es("honor","Honor Magic V5","\ud83d\udcf1",A.cw,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.eIp=new C.es("vivo","vivo X300 Pro","\ud83d\udcf1",A.cW,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.eIu=new C.es("ereader","Kindle Scribe","\ud83d\udcd6",A.bv,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.eHx=new C.es("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.ch,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.eI1=new C.es("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cG,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.eHU=new C.es("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.bd,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.eHI=new C.es("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.eG,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.eHR=new C.es("carscreen","Luxury car touchscreen","\ud83d\ude98",A.aC,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.eIx=new C.es("vision","Apple Vision Pro","\ud83e\udd7d",A.bl,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.TG=w([D.eHP,D.eHV,D.eIz,D.eIb,D.eHH,D.eI9,D.eIE,D.eIl,D.eI_,D.eIB,D.eHz,D.eIm,D.eIo,D.eHX,D.eI0,D.eIi,D.eHQ,D.eId,D.eI5,D.eI2,D.eHG,D.eHN,D.eHT,D.eIG,D.eIv,D.eI8,D.eHM,D.eIF,D.eII,D.eHC,D.eIJ,D.eHK,D.eHW,D.eI6,D.eHE,D.eIw,D.eI3,D.eHJ,D.eI7,D.eIt,D.eHF,D.eIn,D.eHS,D.eIh,D.eIy,D.eHD,D.eIc,D.eIk,D.eID,D.eHB,D.eIH,D.eIs,D.eIe,D.eIq,D.eHL,D.eIC,D.eHy,D.eI4,D.eHY,D.eIj,D.eHA,D.eHO,D.eIA,D.eIf,D.eIa,D.eIr,D.eHZ,D.eIg,D.eIp,D.eIu,D.eHx,D.eI1,D.eHU,D.eHI,D.eHR,D.eIx],B.as("N<es>"))
D.duD=w([5,10,15,25,45,60],x.t)
D.dv0=w([-0.045,0.03,-0.015],x.n)
D.aEj=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.vO=w([0.05,0.2,0.35],x.n)
D.aEn=w([A.d0,A.iL,A.uZ,A.GC],x.O)
D.bbT=new B.aa(0,A.H,A.i0,A.dS,6)
D.dy1=w([D.bbT],x.V)
D.ePd=new B.y(0,"AND")
D.eQ7=new B.y(1,"Adder")
D.eQN=new B.y(2,"Blinker")
D.eRj=new B.y(3,"Memory")
D.dyP=w([D.ePd,D.eQ7,D.eQN,D.eRj],x.L)
D.aEx=w([-104,0,104],x.n)
D.aEz=w([-14,3],x.n)
D.dzP=w([-8,0,8],x.n)
D.aEH=w([-92,0,92],x.n)
D.dAi=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.fre=new C.vH("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.frl=new C.vH("Medium tank","Balanced.",0.35,1)
D.frk=new C.vH("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.TV=w([D.fre,D.frl,D.frk],x._)
D.og=w([0.04,0.2,0.36],x.n)
D.aET=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.fiT=new B.b0(D.b4_,"Fold",W.asD)
D.fhN=new B.b0(D.af_,"Flip",A.DC)
D.bTN=new B.a_(62889,"MaterialIcons",!1)
D.fjg=new B.b0(D.b40,"Rise",D.bTN)
D.asQ=new B.a_(983870,"MaterialIcons",!1)
D.ff4=new B.b0(D.af0,"Assemble",D.asQ)
D.ffh=new B.b0(D.b41,"Spin",D.ari)
D.ffb=new B.b0(D.b42,"Pop",A.kl)
D.dBZ=w([D.fiT,D.fhN,D.fjg,D.ff4,D.ffh,D.ffb],B.as("N<+(Lw,n,a_)>"))
D.aEY=w([A.c5,A.eG,A.bw,A.aH,A.bl,A.c1],x.O)
D.dCp=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dDv=w([3,4.5,5,6,9],x.n)
D.bcy=new B.aa(0,A.H,A.b6,A.J,16)
D.dDZ=w([D.bcy],x.V)
D.h8T=new B.C("\ud83e\uddcd",null,S.LL,null,null,null,null,null,null,null,null,null)
D.ceJ=new B.J5(5,null,null,A.bx,A.c5,null,null,null,null)
D.fyk=new B.a4(150,null,D.ceJ,null)
D.fQP=new B.G(!0,A.ab,null,null,null,null,14,A.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hcc=new B.C("Getting the body ready...",null,D.fQP,null,null,null,null,null,null,null,null,null)
D.h8W=new B.C("Real 3D anatomy, kept on your phone",null,Ah.Bw,null,null,null,null,null,null,null,null,null)
D.dE1=w([D.h8T,A.aB,D.fyk,A.af,D.hcc,A.at,D.h8W],x.p)
D.dEB=w(["solar","turbine","crank","pot"],x.s)
D.dF5=w([0,0.35,0.75,1],x.n)
D.dGy=w(["volts","level","ohms","on"],x.s)
D.boj=new B.u(1,0.23137254901960785,0.43529411764705883,0.8470588235294118,A.q)
D.bzp=new B.u(1,0.0392156862745098,0.10196078431372549,0.25098039215686274,A.q)
D.dGC=w([A.akH,D.boj,A.lV,D.bzp],x.O)
D.dIb=w([A.jY,A.A9,A.zV,A.rk,A.DW,A.rn,A.A7,A.mx,A.iw,A.p3,A.fN,A.eg,A.hQ,A.ie,A.m1,A.kM,A.rm,A.q2,A.lC,A.Ij,A.vB,A.DB,A.Dz,A.QV,A.Ii,A.DL,A.Qy,A.as1,H.asM,A.kl],x.x)
D.exH={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.hNs=new C.yW("Switch",F.p0,A.bu,0,"Tap it to turn it ON or OFF.")
D.hNo=new C.yW("Blinker",A.mw,A.bw,0,"Turns itself ON and OFF. Tap to change the speed.")
D.hNp=new C.yW("AND",D.asQ,A.cw,2,"ON only when BOTH inputs are ON.")
D.bVi=new B.a_(63671,"MaterialIcons",!1)
D.hNn=new C.yW("OR",D.bVi,A.bl,2,"ON when EITHER input is ON.")
D.hNq=new C.yW("XOR",A.a46,A.c5,2,"ON when the inputs are DIFFERENT.")
D.hNk=new C.yW("NAND",A.tI,A.aH,2,"OFF only when BOTH inputs are ON.")
D.bUn=new B.a_(63176,"MaterialIcons",!1)
D.hNl=new C.yW("NOR",D.bUn,A.fY,2,"ON only when BOTH inputs are OFF.")
D.hNm=new C.yW("NOT",X.DO,A.cW,1,"Flips the signal: ON becomes OFF.")
D.hNr=new C.yW("Light",A5.la,A.eG,1,"Glows when its input is ON.")
D.hNt=new C.yW("Buzzer",T.p2,A.c1,1,"Beeps while its input is ON.")
D.AO=new B.bn(D.exH,[D.hNs,D.hNo,D.hNp,D.hNn,D.hNq,D.hNk,D.hNl,D.hNm,D.hNr,D.hNt],B.as("bn<n,yW>"))
D.ezw={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22,smartwatch:23}
D.Bg=new C.Ku(0,"tv")
D.fsP=new C.mk("Samsung Neo QLED 8K",D.Bg,F.yV,A.aH)
D.fsF=new C.mk("LG OLED evo G5",D.Bg,A.ex,A.hI)
D.fsw=new C.mk("Sony Bravia 9",D.Bg,A.t5,A.bv)
D.fsA=new C.mk("Apple TV 4K",D.Bg,A.dT,A.bO)
D.fsx=new C.mk("Bang and Olufsen Beovision",D.Bg,F.Cj,F.wK)
D.abj=new C.Ku(1,"iphone")
D.aUo=new C.mk("iPhone 18 Pro Max",D.abj,D.amd,A.ch)
D.Bi=new C.Ku(3,"fold")
D.bzD=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.fsK=new C.mk("iPhone Fold",D.Bi,D.bzD,A.b_)
D.Bh=new C.Ku(2,"android")
D.fsL=new C.mk("Samsung Galaxy S26 Ultra",D.Bh,F.Ni,A.dg)
D.brU=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.fsD=new C.mk("Samsung Galaxy Z Fold7",D.Bi,D.brU,A.cG)
D.fsz=new C.mk("Google Pixel 10 Pro XL",D.Bh,A.d0,A.bj)
D.fsH=new C.mk("Xiaomi 16 Ultra",D.Bh,A.iu,A.ca)
D.fsC=new C.mk("Huawei Mate 80 Pro Max",D.Bh,A.et,A.aC)
D.fsy=new C.mk("OPPO Find X9 Ultra",D.Bh,A.ei,A.bf)
D.fsR=new C.mk("Honor Magic V5",D.Bi,A.dl,A.cw)
D.fsE=new C.mk("vivo X300 Pro",D.Bh,A.fX,A.cW)
D.aUp=new C.Ku(4,"tablet")
D.fsJ=new C.mk("iPad Pro M5",D.aUp,A.d0,A.aH)
D.abk=new C.Ku(5,"reader")
D.fsS=new C.mk("Kindle Scribe",D.abk,A.cU,A.bv)
D.xW=new C.Ku(6,"computer")
D.fsI=new C.mk("MacBook Pro M5 Max",D.xW,A.d0,A.ch)
D.fsO=new C.mk("iMac 32 inch",D.xW,A.bO,A.cG)
D.fsG=new C.mk("Pro Display XDR 8K",D.xW,A.iu,A.bd)
D.fsB=new C.mk("Sony Laser Projector",D.xW,A.cx,A.eG)
D.fsM=new C.mk("Luxury car touchscreen",D.xW,M.n8,A.aC)
D.fsQ=new C.mk("Apple Vision Pro",D.xW,A.cy,A.bl)
D.fsN=new C.mk("Apple Watch Ultra",D.Bi,F.Cj,A.bw)
D.mF=new B.bn(D.ezw,[D.fsP,D.fsF,D.fsw,D.fsA,D.fsx,D.aUo,D.fsK,D.fsL,D.fsD,D.fsz,D.fsH,D.fsC,D.fsy,D.fsR,D.fsE,D.fsJ,D.fsS,D.fsI,D.fsO,D.fsG,D.fsB,D.fsM,D.fsQ,D.fsN],B.as("bn<n,mk>"))
D.d6n=w([A.z],x.M)
D.d6S=w([A.ay,A.aD],x.M)
D.dhy=w([A.ay,A.z,A.aD],x.M)
D.djh=w([A.ay,A.lO,A.z,A.lo,A.aD],x.M)
D.dyL=w([A.ay,A.lO,A.a5,A.a9,A.lo,A.aD],x.M)
D.dNi=new B.d_([1,D.d6n,2,D.d6S,3,D.dhy,4,A.aFx,5,D.djh,6,D.dyL],B.as("d_<F,ai<dh>>"))
D.eAj={Calm:0,Box:1,Sleep:2}
D.cNO=w([4,2,6,0],x.n)
D.cNV=w([4,4,4,4],x.n)
D.cNW=w([4,7,8,0],x.n)
D.Uo=new B.bn(D.eAj,[D.cNO,D.cNV,D.cNW],B.as("bn<n,ai<H>>"))
D.exT={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.yu=new C.a2i(0,"source")
D.diG=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hUa=new C.qK("Clock",A.mw,D.yu,A.bw,D.diG)
D.hU6=new C.qK("Button",A.DR,D.yu,A.aQ,A.M)
D.dDI=w(["random","quick","slow"],x.s)
D.hUh=new C.qK("Dice",A.o4,D.yu,A.c5,D.dDI)
D.bUW=new B.a_(63484,"MaterialIcons",!1)
D.G1=new C.a2i(1,"logic")
D.dJ7=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hUd=new C.qK("Delay",D.bUW,D.G1,A.cw,D.dJ7)
D.duL=w(["fast","mid","slow"],x.s)
D.hUi=new C.qK("Echo",A.ash,D.G1,A.bl,D.duL)
D.hUf=new C.qK("Every 2nd",X.DO,D.G1,A.fY,A.M)
D.bUC=new B.a_(63309,"MaterialIcons",!1)
D.hUc=new C.qK("Every 3rd",D.bUC,D.G1,A.aH,A.M)
D.cf3=w(["50%","25%","75%"],x.s)
D.hUk=new C.qK("Chance",A9.asS,D.G1,A.cW,D.cf3)
D.rU=new C.a2i(2,"out")
D.hU8=new C.qK("Light",A5.la,D.rU,A.eG,A.M)
D.hU9=new C.qK("Burst",A.kl,D.rU,A.c5,A.M)
D.hU7=new C.qK("Ripple",A.Ad,D.rU,A.bd,A.M)
D.hUg=new C.qK("Ball",A.asu,D.rU,A.cW,A.M)
D.hUe=new C.qK("Comet",A.p3,D.rU,A.bl,A.M)
D.bWq=new B.a_(983669,"MaterialIcons",!1)
D.hUj=new C.qK("Shake",D.bWq,D.rU,A.c1,A.M)
D.hUl=new C.qK("Pop",A.Dx,D.rU,A.bf,A.M)
D.hUb=new C.qK("Wash",A.QC,D.rU,A.pH,A.M)
D.nn=new B.bn(D.exT,[D.hUa,D.hU6,D.hUh,D.hUd,D.hUi,D.hUf,D.hUc,D.hUk,D.hU8,D.hU9,D.hU7,D.hUg,D.hUe,D.hUj,D.hUl,D.hUb],B.as("bn<n,qK>"))
D.eyj={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bCq=new C.h4(20,4,13,!1)
D.bCR=new C.h4(14,5,13.5,!1)
D.bCI=new C.h4(9,2.4,10,!1)
D.bCW=new C.h4(7,5,12.5,!1)
D.bCL=new C.h4(8,3.5,12,!1)
D.bCm=new C.h4(15,2,6,!1)
D.bCU=new C.h4(45,6,13.5,!0)
D.bCC=new C.h4(10,8,13.5,!1)
D.bCu=new C.h4(25,3,12,!0)
D.bCA=new C.h4(35,4,12,!0)
D.bCB=new C.h4(40,4.5,9.5,!0)
D.bCD=new C.h4(55,3,9,!0)
D.bCn=new C.h4(18,3,9,!1)
D.bCT=new C.h4(22,4,13.5,!1)
D.bCM=new C.h4(16,5,13.5,!1)
D.bCy=new C.h4(30,4,9,!0)
D.bD4=new C.h4(5,3.5,13,!1)
D.bCG=new C.h4(25,3,13.5,!0)
D.bCP=new C.h4(14,2.5,9,!1)
D.bCF=new C.h4(6,6,13,!1)
D.bCX=new C.h4(30,1.2,5,!0)
D.bD3=new C.h4(35,3,4.5,!0)
D.bD_=new C.h4(20,4.5,7.5,!0)
D.bCE=new C.h4(55,5.5,13.5,!0)
D.bCl=new C.h4(45,5.5,13.5,!0)
D.bCQ=new C.h4(40,5.5,13.5,!0)
D.bD2=new C.h4(60,6,13.5,!0)
D.amJ=new C.h4(28,4,7,!0)
D.Ht=new C.h4(25,4,7,!0)
D.bCx=new C.h4(30,4,7,!0)
D.bCs=new C.h4(22,4,7,!0)
D.bCt=new C.h4(24,4,7,!0)
D.bCH=new C.h4(60,3,5.5,!0)
D.bCo=new C.h4(18,9,14,!0)
D.bCv=new C.h4(25,9,14,!0)
D.amK=new C.h4(30,8,14,!0)
D.bCr=new C.h4(20,8,14,!0)
D.bCz=new C.h4(30,9,14,!0)
D.bCY=new C.h4(22,5,9.5,!0)
D.bCp=new C.h4(30,2.5,10.5,!0)
D.bCN=new C.h4(50,5.5,13.5,!0)
D.bD1=new C.h4(12,2,9.5,!1)
D.bCK=new C.h4(16,1.3,9.5,!0)
D.bCV=new C.h4(40,2.5,7,!0)
D.bD0=new C.h4(60,1.2,4.8,!0)
D.bCZ=new C.h4(18,5,13.5,!0)
D.bCS=new C.h4(8,2,9.5,!1)
D.bCJ=new C.h4(12,2.5,8,!1)
D.bCw=new C.h4(20,3.5,13.5,!0)
D.bCO=new C.h4(3.5,3,13,!1)
D.AP=new B.bn(D.eyj,[D.bCq,D.bCR,D.bCI,D.bCW,D.bCL,D.bCm,D.bCU,D.bCC,D.bCu,D.bCA,D.bCB,D.bCD,D.bCn,D.bCT,D.bCM,D.bCy,D.bD4,D.bCG,D.bCP,D.bCF,D.bCX,D.bD3,D.bD_,D.bCE,D.bCl,D.bCQ,D.bD2,D.amJ,D.Ht,D.bCx,D.Ht,D.bCs,D.Ht,D.bCt,D.amJ,D.Ht,D.bCH,D.bCo,D.bCv,D.amK,D.bCr,D.bCz,D.bCY,D.bCp,D.bCN,D.bD1,D.bCK,D.bCV,D.bD0,D.Ht,D.amK,D.bCZ,D.bCS,D.bCJ,D.bCw,D.bCO],B.as("bn<n,h4>"))
D.exQ={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.fez=new B.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eTv=new B.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eTq=new B.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.f5t=new B.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.f6r=new B.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.f5p=new B.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eRs=new B.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.f3d=new B.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.feH=new B.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.f6O=new B.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eX2=new B.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eR6=new B.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eW1=new B.y("Movement","They pull your legs together and help you balance.")
D.eY3=new B.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eTE=new B.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.fbV=new B.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.fd7=new B.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.f2Y=new B.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.fcQ=new B.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.f1q=new B.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.f6W=new B.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eRd=new B.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eYr=new B.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.f6A=new B.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.f1O=new B.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.fcZ=new B.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.f4T=new B.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eRq=new B.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.f7y=new B.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.fbw=new B.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.f9t=new B.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.ePq=new B.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.f4A=new B.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.f4F=new B.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.eZc=new B.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eTW=new B.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.eXQ=new B.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.f3r=new B.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.fam=new B.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.feE=new B.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.f6T=new B.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.eP5=new B.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.f3D=new B.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.eQ_=new B.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.faC=new B.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.fbR=new B.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.f45=new B.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.faS=new B.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eRf=new B.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.fcu=new B.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eVn=new B.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.f9Z=new B.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eYR=new B.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.f1I=new B.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.f7e=new B.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.fcE=new B.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.fcw=new B.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.fcA=new B.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.f2g=new B.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.f8c=new B.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.f9q=new B.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.fcg=new B.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.f44=new B.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.f_X=new B.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eZF=new B.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.f4u=new B.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.f77=new B.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.f0w=new B.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.f1d=new B.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eVM=new B.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.fbN=new B.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eWC=new B.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.ePX=new B.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.eZb=new B.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.ePS=new B.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eUr=new B.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.eZg=new B.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eWL=new B.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.f7u=new B.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eY6=new B.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.fek=new B.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eZP=new B.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.f28=new B.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.f50=new B.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eWV=new B.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eWE=new B.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dOs=new B.bn(D.exQ,[D.fez,D.eTv,D.eTq,D.f5t,D.f6r,D.f5p,D.eRs,D.f3d,D.feH,D.f6O,D.eX2,D.eR6,D.eW1,D.eY3,D.eTE,D.fbV,D.fd7,D.f2Y,D.fcQ,D.f1q,D.f6W,D.eRd,D.eYr,D.f6A,D.f1O,D.fcZ,D.f4T,D.eRq,D.f7y,D.fbw,D.f9t,D.ePq,D.f4A,D.f4F,D.eZc,D.eTW,D.eXQ,D.f3r,D.fam,D.feE,D.f6T,D.eP5,D.f3D,D.eQ_,D.faC,D.fbR,D.f45,D.faS,D.eRf,D.fcu,D.eVn,D.f9Z,D.eYR,D.f1I,D.f7e,D.fcE,D.fcw,D.fcA,D.f2g,D.f8c,D.f9q,D.fcg,D.f44,D.f_X,D.eZF,D.f4u,D.f77,D.f0w,D.f1d,D.eVM,D.fbN,D.eWC,D.ePX,D.eZb,D.ePS,D.eUr,D.eZg,D.eWL,D.f7u,D.eY6,D.fek,D.eZP,D.f28,D.f50,D.eWV,D.eWE],B.as("bn<n,+(n,n)>"))
D.dXl=new C.Wb(null)
D.dXy=new C.Wc(null)
D.dZC=new C.Wi(null)
D.e2C=new C.WT(null)
D.e2G=new C.WU(null)
D.e3e=new C.X1(null)
D.e79=new C.XD(null)
D.e86=new C.XE(null)
D.ecj=new C.XJ(null)
D.esc=new C.XK(null)
D.esf=new C.XP(null)
D.eup=new C.Y8(null)
D.euq=new C.aak(null)
D.ewt=new C.Yh(null)
D.eAx=new B.r(0,118)
D.eAy=new B.r(0,13)
D.eAz=new B.r(0,17)
D.eAC=new B.r(0,330)
D.eAJ=new B.r(0,-17)
D.eAK=new B.r(0,-18)
D.eAL=new B.r(0,-19)
D.eAN=new B.r(0,-28)
D.eAP=new B.r(0,-31)
D.eAQ=new B.r(0,-32)
D.eAW=new B.r(-9.5,-11)
D.eAZ=new B.r(10,20)
D.eB1=new B.r(10,-13)
D.eB3=new B.r(10,-22)
D.eB4=new B.r(10,-4)
D.eB8=new B.r(11,0)
D.aa8=new B.r(11,8)
D.eBe=new B.r(12,2)
D.eBf=new B.r(14,0)
D.eBg=new B.r(14,12)
D.aNV=new B.r(14,8)
D.eBh=new B.r(14,-17)
D.aNX=new B.r(14,-3)
D.aNY=new B.r(14,-4)
D.eBk=new B.r(15,0)
D.eBl=new B.r(15,-12)
D.eBo=new B.r(16,-8)
D.eBp=new B.r(18,14)
D.aO3=new B.r(20,0)
D.eBx=new B.r(20,15)
D.eBy=new B.r(20,-3)
D.eBz=new B.r(21,8)
D.eBA=new B.r(21,-36)
D.eBE=new B.r(22,10)
D.aO5=new B.r(22,8)
D.eBF=new B.r(22,-25)
D.eBG=new B.r(24,0)
D.eBH=new B.r(24,2)
D.eBK=new B.r(24,-18)
D.eBL=new B.r(24,-22)
D.eBP=new B.r(25,8)
D.eBQ=new B.r(26,0)
D.eBU=new B.r(28,-30)
D.eC0=new B.r(30,18)
D.eC1=new B.r(30,2)
D.eC4=new B.r(31,19)
D.eC6=new B.r(32,0)
D.aO9=new B.r(34,0)
D.aOa=new B.r(34,-32)
D.Kw=new B.r(36,0)
D.eCj=new B.r(3,-1)
D.eCm=new B.r(40,3)
D.eCA=new B.r(4,11)
D.eCD=new B.r(4,-2)
D.eCH=new B.r(5,0)
D.eCI=new B.r(5,17)
D.eCJ=new B.r(5,6)
D.eCO=new B.r(6,11)
D.eCQ=new B.r(7,-19)
D.eCW=new B.r(8,7)
D.eCX=new B.r(8,-10)
D.eCY=new B.r(8,-14)
D.aOf=new B.r(9,0)
D.eD7=new B.r(-20.5,-17.6)
D.eDa=new B.r(-2.6,-1)
D.eDj=new B.r(2.6,1)
D.eDr=new B.r(-9,12.2)
D.eE4=new B.r(-10,12)
D.aOm=new B.r(-10,4)
D.eE8=new B.r(-11,0)
D.eEa=new B.r(-11,-34)
D.eEe=new B.r(-12,-5)
D.eEf=new B.r(-14,0)
D.eEg=new B.r(-14,13)
D.eEh=new B.r(-14,-19)
D.eEj=new B.r(-14,-23)
D.eEk=new B.r(-15,6)
D.eEn=new B.r(-16,14)
D.eEp=new B.r(-16,-8)
D.eEq=new B.r(-17,10)
D.eEr=new B.r(-17,-18)
D.eEs=new B.r(-17,-8)
D.eEu=new B.r(-18,20)
D.eEv=new B.r(-18,-9)
D.aOp=new B.r(-20,0)
D.eEx=new B.r(-20,16)
D.eEy=new B.r(-20,-9)
D.Vk=new B.r(-22,8)
D.eEz=new B.r(-22,-10)
D.eEA=new B.r(-24,10)
D.eEB=new B.r(-24,11)
D.eEC=new B.r(-24,14)
D.eED=new B.r(-24,-22)
D.eEF=new B.r(-25,-11)
D.eEG=new B.r(-26,0)
D.eEH=new B.r(-26,-18)
D.eEI=new B.r(-27,-24)
D.eEJ=new B.r(-28,-36)
D.eEK=new B.r(-2,9)
D.eEL=new B.r(-2,-10)
D.eEM=new B.r(-2,-20)
D.eEP=new B.r(-2,-9)
D.eER=new B.r(-32,0)
D.aOr=new B.r(-34,0)
D.eEW=new B.r(-40,3)
D.eEY=new B.r(-4,11)
D.eEZ=new B.r(-4,-17)
D.eF_=new B.r(-4,-2)
D.eF3=new B.r(-5,0)
D.eF4=new B.r(-5,20)
D.eF5=new B.r(-5,6)
D.eF6=new B.r(-6,6)
D.eF7=new B.r(-6,-42)
D.aOt=new B.r(-7,-19)
D.eF9=new B.r(-7,-24)
D.eFa=new B.r(-8,-1)
D.eFd=new B.r(-8,-9)
D.aah=new B.r(-9,0)
D.eFe=new B.r(-9,1)
D.eFg=new B.r(-9,-23)
D.h02=new B.C("Thinking\u2026",null,N.hH,null,null,null,null,null,null,null,null,null)
D.eGg=new B.D(A.jB,D.h02,null)
D.hh2=new B.C("Start from a ready-made board",null,A.fR,null,null,null,null,null,null,null,null,null)
D.eGu=new B.D(A.x5,D.hh2,null)
D.bKz=new B.R(4,0,4,14)
D.fW4=new B.G(!0,A.aF,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h13=new B.C("Games and little helpers for a spare minute.",null,D.fW4,null,null,null,null,null,null,null,null,null)
D.eGH=new B.D(D.bKz,D.h13,null)
D.dvq=w([A.hX,A.bk],x.O)
D.eNS=new B.bU(A.z,0.5,A.x,null,0,D.dvq,null,null)
D.eNT=new B.bU(A.z,0.5,A.x,null,0,D.aFe,null,null)
D.dll=w([A.c,A.bQ],x.O)
D.eNV=new B.bU(A.z,0.5,A.x,null,0,D.dll,null,null)
D.dES=w([A.bO,A.cy],x.O)
D.aTk=new B.bU(A.z,0.5,A.x,null,0,D.dES,null,null)
D.cY3=w([A.c,A.bO],x.O)
D.eO_=new B.bU(A.mS,0.5,A.x,null,0,D.cY3,null,null)
D.bzH=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.dCK=w([A.fy,D.bzH],x.O)
D.eO4=new B.bU(A.mS,0.5,A.x,null,0,D.dCK,null,null)
D.cR1=w([A.d0,A.cx],x.O)
D.eO5=new B.bU(A.z,0.5,A.x,null,0,D.cR1,null,null)
D.d57=w([A.h8,A.aQ,A.de],x.O)
D.eO8=new B.bU(A.mS,0.5,A.x,null,0,D.d57,null,null)
D.dwa=w([A.cy,M.n8],x.O)
D.eO9=new B.bU(A.mS,0.5,A.x,null,0,D.dwa,null,null)
D.eOe=new B.bU(A.z,0.5,A.x,null,0,D.aBq,null,null)
D.dFN=w([A.cy,A.io],x.O)
D.eOm=new B.bU(A.z,0.5,A.x,null,0,D.dFN,null,null)
D.deX=w([A.iL,A.bk],x.O)
D.eOp=new B.bU(A.mS,0.5,A.x,null,0,D.deX,null,null)
D.aTp=new B.aP(9,9)
D.eOv=new B.aP(1.4,1.4)
D.eOx=new B.aP(2.5,2.5)
D.fpm=new B.a5(10,-8,18,-2)
D.fpn=new B.a5(14,-14,20,14)
D.fpp=new B.a5(20,-2,30,2)
D.fpu=new B.a5(4,-13,30,-3)
D.fpA=new B.a5(8,-7,12,7)
D.fpM=new B.a5(-12,12,12,19)
D.fpN=new B.a5(-12,14,12,22)
D.fpO=new B.a5(-12,-22,12,8)
D.fpP=new B.a5(-12,-25,12,19)
D.fpQ=new B.a5(-12,-26,12,-6)
D.fpR=new B.a5(-12,-4,12,14)
D.fpT=new B.a5(-14,20,14,24)
D.fpU=new B.a5(-14,6,14,10)
D.fpV=new B.a5(-14,-17,14,15)
D.fpW=new B.a5(-14,-26,14,18)
D.fpX=new B.a5(-14,-26,14,-14)
D.fpY=new B.a5(-14,-4,14,20)
D.fq_=new B.a5(-15,-29,15,25)
D.fq0=new B.a5(-16,-16,16,16)
D.fq3=new B.a5(-16,-22,-9,18)
D.fq4=new B.a5(-16,-24,16,-10)
D.fq6=new B.a5(-16,-2,16,20)
D.fq8=new B.a5(-18,20,18,24)
D.fq9=new B.a5(-18,-18,18,20)
D.fqa=new B.a5(-20,12,20,22)
D.fqb=new B.a5(-20,-28,20,26)
D.fqc=new B.a5(-22,15,22,19)
D.aU4=new B.a5(-22,-26,22,24)
D.fqe=new B.a5(-24,-12,10,22)
D.fqf=new B.a5(-24,-14,22,8)
D.fqg=new B.a5(-24,-6,24,20)
D.aU5=new B.a5(-24,-9,24,9)
D.fqh=new B.a5(-25,14,25,19)
D.fqi=new B.a5(-26,-14,14,8)
D.fqj=new B.a5(-26,-4,26,20)
D.fqk=new B.a5(-26,-6,4,6)
D.aU6=new B.a5(-28,-13,28,13)
D.fql=new B.a5(-28,-16,28,16)
D.fqm=new B.a5(-28,-16,28,8)
D.fqn=new B.a5(-28,-22,28,22)
D.fqo=new B.a5(-29,-11,29,11)
D.fqp=new B.a5(-30,-12,30,14)
D.fqq=new B.a5(-30,-14,0,14)
D.fqr=new B.a5(-30,-18,30,20)
D.fqs=new B.a5(-30,-28,30,14)
D.fqt=new B.a5(-30,-2,30,18)
D.fqu=new B.a5(-30,-4,30,18)
D.fqv=new B.a5(-32,-17,32,17)
D.fqw=new B.a5(-32,-28,32,18)
D.fqx=new B.a5(-33,-21,33,17)
D.fqy=new B.a5(-34,0,34,10)
D.fqz=new B.a5(-34,14,34,26)
D.aba=new B.a5(-34,-18,34,18)
D.fqA=new B.a5(-36,-24,36,20)
D.fqB=new B.a5(-38,-22,38,22)
D.fqD=new B.a5(-3,12,3,22)
D.fqE=new B.a5(-3,5,3,15)
D.fqI=new B.a5(-46,-34,46,28)
D.fqK=new B.a5(-48,-3,48,3)
D.fqN=new B.a5(-6,18,24,24)
D.fqO=new B.a5(-6,5,6,12)
D.fqP=new B.a5(-6,-22,6,-15)
D.fqT=new B.a5(-9,-16,9,22)
D.fqU=new B.a5(-4.5,-24,4.5,-21.2)
D.fqW=new B.a5(14,-9,17.5,9)
D.ezG={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aVd=new B.db(D.ezG,5,x.Q)
D.ez8={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.fuy=new B.db(D.ez8,10,x.Q)
D.fwV=new B.av(24,44)
D.fxi=new B.av(54,38)
D.fxo=new B.av(66,38)
D.bhe=new B.fs(2,null,null,null,null,A.bl,null,null,null,null)
D.fys=new B.a4(16,16,D.bhe,null)
D.aWh=new B.hX(3,12,12,0.82,null)
D.fLo=new B.G(!0,A.wG,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFK=new B.eH("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cY,null,null,null,null,null,null,D.fLo)
D.fQD=new B.G(!0,A.kZ,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFQ=new B.eH("AI",null,null,A.cY,null,null,null,null,null,null,D.fQD)
D.fG7=new B.G(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGE=new B.G(!0,A.bq,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fH4=new B.G(!0,A.cw,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHX=new B.G(!0,A.c,null,null,null,null,13.5,A.D,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIt=new B.G(!0,A.aR,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvj=new B.d2(A.i0,A.dS,6)
D.doD=w([D.fvj],B.as("N<d2>"))
D.fJt=new B.G(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.doD,null,null,null)
D.fJy=new B.G(!0,A.eF,null,null,null,null,12.5,A.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJD=new B.G(!0,A.bX,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKf=new B.G(!0,A.bX,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKn=new B.G(!0,A.aF,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLk=new B.G(!0,A.bX,null,null,null,null,9.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLs=new B.G(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fM_=new B.G(!0,A.aF,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMv=new B.G(!0,A.aQ,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMy=new B.G(!0,A.c,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.aFA,null,null,null)
D.fMF=new B.G(!0,A.c,null,null,null,null,12.5,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNo=new B.G(!0,A.bD,null,null,null,null,10.5,A.u,null,0.5,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOy=new B.G(!0,A.v4,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPc=new B.G(!0,A.bM,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPl=new B.G(!0,A.aF,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQ8=new B.G(!0,A.n9,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQj=new B.G(!0,A.cy,null,null,null,null,9.5,null,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYu=new B.G(!0,A.c,null,null,null,null,9.5,A.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRv=new B.G(!0,A.iZ,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRP=new B.G(!0,A.bX,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSm=new B.G(!0,A.bf,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTU=new B.G(!0,A.v,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUq=new B.G(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUI=new B.G(!0,A.aQ,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fV5=new B.G(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fV8=new B.G(!0,A.aQ,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWl=new B.G(!0,A.v4,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWI=new B.G(!0,A.bf,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJG=new B.G(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fX6=new B.C("\u26a0\ufe0f ",null,D.fJG,null,null,null,null,null,null,null,null,null)
D.fXj=new B.C("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A3.By,null,null,null,null,null,null,null,null,null)
D.fYZ=new B.C("Pick one, then change it and see what happens.",null,A3.By,null,null,null,null,null,null,null,null,null)
D.fKR=new B.G(!0,A.ab,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h__=new B.C("What do you want to invent? Type it below, or tap an idea.",null,D.fKR,null,null,null,null,null,null,null,null,null)
D.fP7=new B.G(!0,A.c1,null,null,null,null,12.5,A.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_w=new B.C("Burnt out! Press Repair.",null,D.fP7,null,null,null,null,null,null,null,null,null)
D.h0E=new B.C("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.h1h=new B.C("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.hh,null,null,null,null,null,null,null,null,null)
D.h1V=new B.C("Make it yours",null,A.jp,null,null,null,null,null,null,null,null,null)
D.h59=new B.C("5G",null,A4.aXP,null,null,null,null,null,null,null,null,null)
D.h6a=new B.C("Pick how big the screen is on the board",null,N.hH,null,null,null,null,null,null,null,null,null)
D.fS6=new B.G(!0,A.bX,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h6m=new B.C("WHAT HAPPENS",null,D.fS6,null,null,null,null,null,null,null,null,null)
D.h87=new B.C("Check",null,null,null,null,null,null,null,null,null,null,null)
D.h8N=new B.C("Change the words and pictures on the three slabs.",null,A3.By,null,null,null,null,null,null,null,null,null)
D.h9_=new B.C("All the parts and wires will be removed.",null,A.hG,null,null,null,null,null,null,null,null,null)
D.h9k=new B.C("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.h9U=new B.C("Tap the crank on the board again and again to spin it faster.",null,N.hH,null,null,null,null,null,null,null,null,null)
D.hb8=new B.C("\ud83c\udfaf Challenges",null,A.dv,null,null,null,null,null,null,null,null,null)
D.hbF=new B.C("Remove this part",null,A1.aXp,null,null,null,null,null,null,null,null,null)
D.hbZ=new B.C("Clear the board?",null,A.ds,null,null,null,null,null,null,null,null,null)
D.fRw=new B.G(!0,A.bw,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hcg=new B.C("How the Lab works",null,D.fRw,null,null,null,null,null,null,null,null,null)
D.fI9=new B.G(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hcB=new B.C("Electronics Lab",null,D.fI9,null,null,null,null,A.a2,null,1,null,null)
D.hcF=new B.C("?",null,R.aZ_,null,null,null,null,null,null,null,null,null)
D.he0=new B.C("Ready-made circuits",null,A.dv,null,null,null,null,null,null,null,null,null)
D.heG=new B.C("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,N.hH,null,null,null,null,null,null,null,null,null)
D.fUN=new B.G(!0,A.aQ,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hic=new B.C("\u26a0 There is no air here, so a parachute will not work.",null,D.fUN,null,null,null,null,null,null,null,null,null)
D.hjn=new B.C("Download the scene (GIF)",null,A.cL,null,null,null,null,null,null,null,null,null)
D.hjq=new B.C("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,A1.aXn,null,null,null,null,null,null,null,null,null)
D.hjW=new B.C("NGMY",null,A.wf,null,null,null,null,null,null,null,null,null)
D.hk8=new B.C("You build a machine. A little light runs along the wires, and every part it touches does something.",null,Aj.X2,null,null,null,null,null,null,null,null,null)
D.hkx=new B.C("Tap it to change its setting. Drag from the right dot to connect.",null,A.ma,null,null,null,null,null,null,null,null,null)
D.hlE=new B.C("TOOLBOX",null,Ag.acA,null,null,null,null,null,null,null,null,null)
D.hK7=new B.bg("electronics-part-card",x.W)
D.hK9=new B.bg("device-learn-more",x.W)
D.hKf=new B.bg("device-remote",x.W)
D.hKk=new B.bg("device-picture",x.W)
D.hKP=new B.bg("electronics-part-about",x.W)
D.hKW=new B.bg("body-loading",x.W)
D.hL1=new B.bg("device-fullscreen",x.W)
D.hLo=new B.bg("core-protocol-back",x.W)
D.hLt=new B.bg("core-protocol-title-frame",x.W)})();(function staticFields(){$.hF6=null
$.hF2=null
$.hF3=null
$.hLT=0
$.ieQ=B.S(x.N,B.as("j2"))
$.ifo=B.S(x.N,B.as("j2"))
$.aQP=B.S(x.N,B.as("j2"))
$.hHQ=A.aA})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"iNe","bJ6",()=>{var u="led"
return B.a([C.aBa("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fAB(),u),C.aBa("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fAC(),u),C.aBa("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fAD(),u),C.aBa("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fAK(),u),C.aBa("Not both","Make the light go OFF only when both switches are ON.",2,new C.fAL(),u),C.aBa("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.fAM(),"buzzer")],B.as("N<beR>"))})
w($,"iNG","bJ7",()=>B.a([C.RL("UNIVERSE","Earth, space and gravity",A.QY,A.aH,new C.fB1()),C.RL("ELECTRONICS LAB","Batteries, wires, real circuits",Ap.vr,A.aH,new C.fB2()),C.RL("DISCOVERY LAB","Body Explorer: a real 3D human",D.bTQ,A.bf,new C.fB3()),C.RL("TOOLBOX","Converter, clock, games",H.art,A.cW,new C.fB4()),C.RL("REACTION LAB","Wire parts together",A.DV,A.bw,new C.fB5()),C.RL("SPARK PAINTER","Paint with light",A.Ih,A.c5,new C.fB6()),C.RL("ROCKET LANDER","Land softly on the pad",A.p3,A.aH,new C.fB7()),C.RL("TITLE ANIMATOR","Make a moving title",A.xw,A.bu,new C.fB8()),C.RL("CIRCUIT LAB","Connect logic, learn it",A.a4v,A.cw,new C.fB9())],B.as("N<bxi>")))
w($,"iPt","qT",()=>{var u,t,s=B.S(x.N,x.C)
for(u=0;u<76;++u){t=D.TG[u]
s.n(0,t.a,t)}return s})
v($,"ijr","hUV",()=>B.apT(0))
w($,"iMX","hUW",()=>{var u=B.cs_()
u.sez(0,A.c.j(0.06))
u.c=2.2
u.d=A.bG
return u})
w($,"iNf","ak5",()=>B.a([C.GK("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fAN()),C.GK("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fAO()),C.GK("Spin the motor","A battery and a motor in a loop will make it spin.",new C.fAP()),C.GK("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.fAQ()),C.GK("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fAR()),C.GK("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fAE()),C.GK("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fAF()),C.GK("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fAG()),C.GK("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fAH()),C.GK("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fAI()),C.GK("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fAJ())],B.as("N<beS>")))
w($,"iNI","hVp",()=>B.a([C.a2P("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aQ,A.ca,new C.fBh()),C.a2P("Focus Timer","Work, then rest","\u23f1\ufe0f",A.c1,A.bE,new C.fBi()),C.a2P("Breathe","Calm down in a minute","\ud83e\udee7",A.fY,A.cG,new C.fBj()),C.a2P("Draw Pad","Sketch and share","\ud83c\udfa8",A.bC,A.b_,new C.fBk()),C.a2P("Memory Match","Find the pairs","\ud83c\udccf",A.aH,A.ch,new C.fBl()),C.a2P("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bu,A.bj,new C.fBm()),C.a2P("Tip & Split","Share the bill","\ud83e\uddfe",A.bf,A.b5,new C.fBn()),C.a2P("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bl,A.az,new C.fBo())],B.as("N<byC>")))})()};
(a=>{a["/voyE0H5wfyjjVecd0H+xQfKt90="]=a.current})($__dart_deferred_initializers__);