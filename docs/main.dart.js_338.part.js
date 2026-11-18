((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,A5,A1,A6,A2,S,O,V,A7,N,A8,A9,Aa,Ab,A3,Ac,Ad,Ae,Af,W,T,Ag,P,Ah,X,Y,Ai,E,I,G,K,Aj,Ak,Al,Am,Q,An,R,Ao,C={
bCF(d){return C.i9M(d)},
i9M(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bCF=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.rm(B.ns(""),d,A.i1,null,null).dg(0,A.a0z),$async$bCF)
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
return B.i($async$bCF,v)},
ilH(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.St[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cR(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ag(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.fb(D.St,new C.fM1())
if(w==null)w=A.d.gH(D.St)
s=B.T(x.N,x.C)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.I)(r),++u){l=r[u].a
k=l[0]
l=$.qK().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.I)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gH(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.alv(w.a,w.b,m,w,s,!1)},
ifm(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.N(D.ST,new C.fAG(),x.bd).aM(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
ity(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cn(b2,"{")
v=A.a.pe(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.W.aP(0,A.a.aA(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aR(a5)
r=0
for(a6=x.j,a7=J.aT(a6.a(J.t(u,"parts"))),a8=x.i;a7.C();){q=a7.gP(a7)
p=B.w(J.t(q,"kind"))
o=B.w(J.t(q,"id"))
if(!$.qK().am(0,p)||J.eK(s,o)||J.ad(t)>=8)continue
J.c5(s,o)
n=B.T(a5,a8)
for(a9=0;a9<4;++a9){m=D.dB3[a9]
l=J.t(q,m)
if(typeof l=="number")J.aK(n,m,l)}k=A.i.D(typeof J.t(q,"x")=="number"?B.dF(J.t(q,"x")):0.2+A.i.F(r,3)*0.3,0.16,0.84)
j=A.i.D(typeof J.t(q,"y")=="number"?B.dF(J.t(q,"y")):0.25+A.i.ar(r,3)*0.3,0.1,0.9)
J.c5(t,new B.dY([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aT(a6.a(J.t(u,"wires")));a5.C();){h=a5.gP(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.w(J.t(g,0))
e=B.w(J.t(g,2))
d=A.o.D(A.i.M(B.dF(J.t(g,1))),0,1)
a0=A.o.D(A.i.M(B.dF(J.t(g,3))),0,1)
if(J.eK(s,f)&&J.eK(s,e)&&!J.z(f,e))J.c5(i,new B.ca([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.L.a(J.t(u,"steps"))
a0=J.aT(a0==null?A.cu:a0)
while(a0.C()){a2=a0.gP(a0)
J.c5(a1,B.w(a2))}a3=a1
a0=J.t(u,"title")
a0=B.w(a0==null?"My invention":a0)
a1=J.t(u,"explain")
a4=new C.n1(a0,B.w(a1==null?"":a1),t,i,A.Z)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.t(u,"honest")
a5=B.w(a5==null?"":a5)
return new C.alv(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
ika(d){var w,v,u=C.hnG()
d.B(u)
for(w=0;w<60;++w)u.vO(0,0.03333333333333333)
v=u.a
return A.d.aU(v,new C.fIo(u))&&!A.d.cD(v,new C.fIp())},
ik9(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.T(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.I)(l),++u){t=l[u];++v
k.n(0,t.a,$.qK().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.I)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.w(t.e)+" V")
if(p==="resistor")q.push(""+A.i.V(t.r)+" ohms")
if(A.d.q(D.dzc,p))q.push("level "+A.i.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.i.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aM(q,", ")+")"
s.push(B.w(p)+n+": "+o+", current "+A.i.ad(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.I)(w),++u){m=w[u]
l.push(B.w(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.w(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aM(s,"\n")+"\nWires: "+A.d.aM(l,"; ")},
i8h(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.I)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aM(v,"\n")+"\n\n"}v=A.d.aM(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
ilG(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qK().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.ST[u]
if(A.d.aU(w,new C.fLZ(s)))if(!B.cR(r,s.b.toLowerCase(),0))v=B.cR(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ag("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.Y(w,new C.fM_(e),B.U(w).k("Y<1>")).gau(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ag("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.i.ad(A.d.cF(w,0,new C.fM0())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ag("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gH(w)
w=$.qK().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
alv:function alv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fM1:function fM1(){},
fAG:function fAG(){},
fIo:function fIo(d){this.a=d},
fIp:function fIp(){},
fLZ:function fLZ(d){this.a=d},
fM_:function fM_(d){this.a=d},
fM0:function fM0(){},
WU:function WU(d,e){this.c=d
this.a=e},
bn1:function bn1(d,e,f,g,h){var _=this
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
ekk:function ekk(d){this.a=d},
ekl:function ekl(d,e,f){this.a=d
this.b=e
this.c=f},
ekm:function ekm(d){this.a=d},
ekx:function ekx(d){this.a=d},
eky:function eky(d,e){this.a=d
this.b=e},
ekt:function ekt(d){this.a=d},
ekr:function ekr(d,e){this.a=d
this.b=e},
eks:function eks(d,e,f){this.a=d
this.b=e
this.c=f},
eku:function eku(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ekp:function ekp(d){this.a=d},
ekq:function ekq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ekv:function ekv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eko:function eko(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ekw:function ekw(d,e){this.a=d
this.b=e},
ekn:function ekn(d,e){this.a=d
this.b=e},
ekB:function ekB(d){this.a=d},
ekA:function ekA(d){this.a=d},
ekC:function ekC(d){this.a=d},
ekz:function ekz(d){this.a=d},
ekD:function ekD(d,e){this.a=d
this.b=e},
ekE:function ekE(d,e){this.a=d
this.b=e},
ekF:function ekF(d,e){this.a=d
this.b=e},
ekG:function ekG(d,e){this.a=d
this.b=e},
bD_(d,e,f){var w=null
return B.x(B.a([B.d(d,w,w,w,w,w,w,D.fx2,w,w,w),B.d(e,w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.N,0,A.p)},
hBF(d,e,f,g){var w=null,v=B.l(24),u=B.K(f.j(0.6),A.r,1)
return B.as(B.p(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.am,B.d(e,w,w,w,w,w,w,A.B8,A.K,w,w),A.aB,B.bZ(A.fU,g,A.br,w,0,8)],x.p),A.l,w,A.e,A.N,0,A.p),A.f,w,w,new B.o(D.biS,w,u,v,w,w,A.n),w,w,w,w,A.ac,w,w,w),w,w,w)},
GY:function GY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vq:function vq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xg:function Xg(d){this.a=d},
aGF:function aGF(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.m9$=i
_.fa$=j
_.h9$=k
_.bw$=l
_.a9$=m
_.c=_.a=null},
ezF:function ezF(){},
ezZ:function ezZ(d){this.a=d},
ezY:function ezY(d,e){this.a=d
this.b=e},
eA_:function eA_(){},
eA0:function eA0(){},
ezH:function ezH(d,e,f){this.a=d
this.b=e
this.c=f},
ezG:function ezG(d,e){this.a=d
this.b=e},
ezw:function ezw(d){this.a=d},
ezx:function ezx(d){this.a=d},
ezy:function ezy(d){this.a=d},
ezz:function ezz(d){this.a=d},
ezA:function ezA(d){this.a=d},
ezB:function ezB(d){this.a=d},
ezC:function ezC(d){this.a=d},
ezD:function ezD(d){this.a=d},
ezE:function ezE(d){this.a=d},
ezu:function ezu(d){this.a=d},
ezv:function ezv(d){this.a=d},
ezt:function ezt(d){this.a=d},
ezS:function ezS(d,e){this.a=d
this.b=e},
ezN:function ezN(d){this.a=d},
ezO:function ezO(d){this.a=d},
ezK:function ezK(d){this.a=d},
ezP:function ezP(d){this.a=d},
ezJ:function ezJ(d){this.a=d},
ezQ:function ezQ(d){this.a=d},
ezR:function ezR(d){this.a=d},
ezI:function ezI(d){this.a=d},
ezT:function ezT(d,e){this.a=d
this.b=e},
ezM:function ezM(d,e){this.a=d
this.b=e},
ezU:function ezU(d){this.a=d},
ezV:function ezV(d){this.a=d},
ezW:function ezW(d){this.a=d},
ezX:function ezX(d){this.a=d},
ezL:function ezL(d){this.a=d},
bjW:function bjW(d,e){this.b=d
this.a=e},
aOF:function aOF(){},
bAE:function bAE(){},
hwJ(){var w=$.hwH
return w==null?$.hwH=$.qL().cX6("assets/data/three.min.js"):w},
hwI(){var w=$.hwG
return w==null?$.hwG=C.cQ0():w},
cQ0(){var w=0,v=B.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cQ0=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.qL().jc(0,"assets/data/body3d.bin"),$async$cQ0)
case 3:d=a1
$.hwK=J.eu(A.dI.gaT(d),d.byteOffset,d.byteLength)
t=B.Tk(d)
s=t.getUint32(4,!0)
r=B.a([],x.h)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.jP(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.dn1[i]
g=B.b1((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a4A(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b5N))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.bcU(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cQ0,v)},
c7o(){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$c7o=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.iK(B.a([C.hwI(),C.hwJ()],x.D),x.K),$async$c7o)
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
return B.i($async$c7o,v)},
aUJ:function aUJ(d,e,f){this.a=d
this.b=e
this.c=f},
a4A:function a4A(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
bcU:function bcU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
VK:function VK(d){this.a=d},
aF6:function aF6(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.m9$=t
_.fa$=u
_.h9$=v
_.bw$=w
_.a9$=a0
_.c=_.a=null},
dQh:function dQh(d){this.a=d},
dQg:function dQg(d,e){this.a=d
this.b=e},
dPS:function dPS(d){this.a=d},
dPT:function dPT(d,e){this.a=d
this.b=e},
dPU:function dPU(d){this.a=d},
dPV:function dPV(){},
dQi:function dQi(){},
dPW:function dPW(d,e){this.a=d
this.b=e},
dPX:function dPX(d){this.a=d},
dPY:function dPY(){},
dPZ:function dPZ(d){this.a=d},
dQ0:function dQ0(d,e){this.a=d
this.b=e},
dQ_:function dQ_(d){this.a=d},
dPP:function dPP(d,e,f){this.a=d
this.b=e
this.c=f},
dPQ:function dPQ(d){this.a=d},
dPR:function dPR(d){this.a=d},
dQ7:function dQ7(d){this.a=d},
dQ8:function dQ8(d,e){this.a=d
this.b=e},
dQ9:function dQ9(d,e){this.a=d
this.b=e},
dQa:function dQa(d){this.a=d},
dQ6:function dQ6(d,e){this.a=d
this.b=e},
dQb:function dQb(d,e){this.a=d
this.b=e},
dQ5:function dQ5(d,e){this.a=d
this.b=e},
dQc:function dQc(d){this.a=d},
dQ4:function dQ4(d){this.a=d},
dQd:function dQd(d){this.a=d},
dQ3:function dQ3(d){this.a=d},
dQe:function dQe(d){this.a=d},
dQ2:function dQ2(d){this.a=d},
dQf:function dQf(d){this.a=d},
dQ1:function dQ1(d){this.a=d},
aNI:function aNI(){},
aNJ:function aNJ(){},
c7p:function c7p(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c7q:function c7q(d,e){this.a=d
this.b=e},
c7r:function c7r(d){this.a=d},
aAu(d,e,f,g,h){return new C.bdF(d,e,f,g,h)},
hdE(d,e,f,g,h,i){return $.i5B.c1(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.cWX(d,e,f,i,g,h))},
yJ:function yJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
D3:function D3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nQ:function nQ(d,e,f){this.a=d
this.b=e
this.c=f},
bdF:function bdF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ftU:function ftU(){},
ftV:function ftV(){},
ftW:function ftW(){},
fu2:function fu2(){},
fu3:function fu3(){},
fu4:function fu4(){},
VR:function VR(d){this.a=d},
aF8:function aF8(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.m9$=n
_.fa$=o
_.h9$=p
_.bw$=q
_.a9$=r
_.c=_.a=null},
dRX:function dRX(d){this.a=d},
dRB:function dRB(d,e){this.a=d
this.b=e},
dRE:function dRE(){},
dRY:function dRY(){},
dRz:function dRz(d,e){this.a=d
this.b=e},
dRA:function dRA(d,e){this.a=d
this.b=e},
dRF:function dRF(d,e,f){this.a=d
this.b=e
this.c=f},
dRu:function dRu(){},
dRv:function dRv(){},
dRw:function dRw(d){this.a=d},
dRx:function dRx(d,e){this.a=d
this.b=e},
dRy:function dRy(d,e,f){this.a=d
this.b=e
this.c=f},
dRG:function dRG(){},
dRH:function dRH(d,e){this.a=d
this.b=e},
dRI:function dRI(d){this.a=d},
dRD:function dRD(d,e){this.a=d
this.b=e},
dRC:function dRC(d){this.a=d},
dRt:function dRt(d,e,f){this.a=d
this.b=e
this.c=f},
dRR:function dRR(d){this.a=d},
dRQ:function dRQ(d){this.a=d},
dRS:function dRS(d){this.a=d},
dRP:function dRP(d){this.a=d},
dRN:function dRN(d){this.a=d},
dRO:function dRO(d){this.a=d},
dRM:function dRM(d){this.a=d},
dRJ:function dRJ(d){this.a=d},
dRL:function dRL(d){this.a=d},
dRT:function dRT(d,e){this.a=d
this.b=e},
dRU:function dRU(d,e){this.a=d
this.b=e},
dRV:function dRV(d){this.a=d},
dRK:function dRK(d){this.a=d},
dRW:function dRW(d,e){this.a=d
this.b=e},
bdX:function bdX(d,e){this.b=d
this.a=e},
cWX:function cWX(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aNN:function aNN(){},
bAo:function bAo(){},
hXi(){return new C.Ol(null)},
Ro(d,e,f,g,h){return new C.bvW(d,e,f,g,h)},
buh(d,e,f){return A.i.D((d-e)/(f-e),0,1)},
heb(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
inD(){return B.kV("construction","")},
Ol:function Ol(d){this.a=d},
Ll:function Ll(d,e){this.a=d
this.b=e},
B6:function B6(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aFp:function aFp(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dY8:function dY8(d,e){this.a=d
this.b=e},
dY7:function dY7(d){this.a=d},
dYa:function dYa(d,e){this.a=d
this.b=e},
dY9:function dY9(d){this.a=d},
bvW:function bvW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fuk:function fuk(){},
ful:function ful(){},
fum:function fum(){},
fun:function fun(){},
fuo:function fuo(){},
fup:function fup(){},
fuq:function fuq(){},
fur:function fur(){},
fus:function fus(){},
bui:function bui(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f9L:function f9L(d){this.a=d},
f9K:function f9K(d,e){this.a=d
this.b=e},
f9I:function f9I(d){this.a=d},
f9M:function f9M(d){this.a=d},
f9J:function f9J(d,e){this.a=d
this.b=e},
agk:function agk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
afb:function afb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Rh:function Rh(d,e,f,g,h,i,j,k,l,m){var _=this
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
bvj:function bvj(d,e){this.b=d
this.a=e},
buP:function buP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bcC:function bcC(d,e){this.b=d
this.a=e},
aJH:function aJH(d,e){this.c=d
this.a=e},
aJI:function aJI(d,e,f){var _=this
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
f9r:function f9r(d){this.a=d},
f9q:function f9q(d){this.a=d},
f9p:function f9p(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f9o:function f9o(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f9m:function f9m(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f9l:function f9l(d,e,f){this.a=d
this.b=e
this.c=f},
f9n:function f9n(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f9k:function f9k(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f9z:function f9z(d){this.a=d},
f9y:function f9y(d){this.a=d},
f9A:function f9A(d,e){this.a=d
this.b=e},
f9B:function f9B(d,e){this.a=d
this.b=e},
f9C:function f9C(d,e){this.a=d
this.b=e},
f9x:function f9x(d,e,f){this.a=d
this.b=e
this.c=f},
f9D:function f9D(d,e,f){this.a=d
this.b=e
this.c=f},
f9w:function f9w(d){this.a=d},
f9s:function f9s(d){this.a=d},
f9E:function f9E(d){this.a=d},
f9F:function f9F(d){this.a=d},
f9v:function f9v(d,e){this.a=d
this.b=e},
f9G:function f9G(d,e){this.a=d
this.b=e},
f9u:function f9u(d,e){this.a=d
this.b=e},
f9H:function f9H(d,e){this.a=d
this.b=e},
f9t:function f9t(d,e){this.a=d
this.b=e},
f9i:function f9i(){},
f9j:function f9j(){},
btU:function btU(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
btj:function btj(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bdi:function bdi(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
btl:function btl(d,e,f){this.b=d
this.c=e
this.a=f},
bxp:function bxp(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aPu:function aPu(){},
hDb(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a5(0,new B.r(w,0)),u=e.aJ(0,new B.r(w,0)),t=1-f,s=3*t
return d.aL(0,t*t*t).a5(0,v.aL(0,s*t*f)).a5(0,u.aL(0,s*f*f)).a5(0,e.aL(0,f*f*f))},
bjV(d,e,f,g,h,i){return $.i69.c1(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.ds_(d,e,f,i,g,h))},
a1J:function a1J(d,e){this.a=d
this.b=e},
qA:function qA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
rg:function rg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
D7:function D7(d,e){this.a=d
this.b=e},
a_I:function a_I(d,e){this.a=d
this.b=e},
ag8:function ag8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a1W:function a1W(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Di:function Di(d,e,f,g){var _=this
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
afe:function afe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bjT:function bjT(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.U$=t
_.by$=_.bL$=0},
ds3:function ds3(d){this.a=d},
ds4:function ds4(d){this.a=d},
ds0:function ds0(d,e){this.a=d
this.b=e},
ds1:function ds1(d){this.a=d},
ds2:function ds2(d){this.a=d},
ds5:function ds5(d){this.a=d},
ds6:function ds6(d){this.a=d},
ds7:function ds7(d){this.a=d},
ds8:function ds8(d){this.a=d},
ds9:function ds9(d){this.a=d},
dsa:function dsa(d){this.a=d},
dsb:function dsb(d){this.a=d},
dsc:function dsc(d){this.a=d},
dsd:function dsd(d){this.a=d},
GJ:function GJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xf:function Xf(d){this.a=d},
aGE:function aGE(d,e,f,g,h,i,j){var _=this
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
ez_:function ez_(d){this.a=d},
eyP:function eyP(d){this.a=d},
eyR:function eyR(){},
eyS:function eyS(){},
eyV:function eyV(){},
eyW:function eyW(d,e,f){this.a=d
this.b=e
this.c=f},
eyX:function eyX(d){this.a=d},
eyY:function eyY(d){this.a=d},
eyT:function eyT(){},
eyU:function eyU(d){this.a=d},
ezp:function ezp(d){this.a=d},
eyZ:function eyZ(){},
eyL:function eyL(d){this.a=d},
ez1:function ez1(d){this.a=d},
ez0:function ez0(d){this.a=d},
ez3:function ez3(){},
ez2:function ez2(d,e){this.a=d
this.b=e},
eyO:function eyO(){},
eyM:function eyM(d){this.a=d},
eyN:function eyN(d){this.a=d},
ezn:function ezn(d){this.a=d},
ezm:function ezm(d){this.a=d},
ezo:function ezo(d){this.a=d},
ezd:function ezd(d,e){this.a=d
this.b=e},
ezl:function ezl(d){this.a=d},
ezj:function ezj(d){this.a=d},
ezk:function ezk(d){this.a=d},
ezi:function ezi(d){this.a=d},
ezh:function ezh(d){this.a=d},
eze:function eze(d){this.a=d},
ezf:function ezf(d){this.a=d},
ezg:function ezg(d){this.a=d},
eyQ:function eyQ(){},
ez9:function ez9(d){this.a=d},
eza:function eza(d){this.a=d},
ez8:function ez8(d){this.a=d},
ezb:function ezb(d){this.a=d},
ez7:function ez7(d){this.a=d},
ezc:function ezc(d){this.a=d},
ez6:function ez6(d){this.a=d},
ez5:function ez5(d){this.a=d},
ez4:function ez4(d,e){this.a=d
this.b=e},
bjU:function bjU(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
ds_:function ds_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aOD:function aOD(){},
hIY(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aJ(0,e).gcJ()*0.1
return new B.r((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
hnG(){var w=B.a([],x.F),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a5J(w,v,u,A.cT,B.T(x.N,x.y))},
hQZ(d,e,f){var w=d.c,v=e===0?-1:1
return new B.r(w*f.a+v*C.hnH(d),d.d*f.b)},
hnH(d){return 42+(D.mu.am(0,d.b)?(d.ch-1)*38:0)},
ei:function ei(d,e,f,g,h,i){var _=this
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
a5J:function a5J(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bQE:function bQE(){},
bQP:function bQP(d){this.a=d},
bQK:function bQK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bQQ:function bQQ(d){this.a=d},
bQR:function bQR(d){this.a=d},
bQT:function bQT(d){this.a=d},
bQU:function bQU(d){this.a=d},
bQS:function bQS(d){this.a=d},
bQV:function bQV(d,e,f){this.a=d
this.b=e
this.c=f},
bQW:function bQW(d){this.a=d},
bQG:function bQG(d){this.a=d},
bQH:function bQH(d){this.a=d},
bQF:function bQF(d){this.a=d},
bQI:function bQI(d,e,f){this.a=d
this.b=e
this.c=f},
bQJ:function bQJ(d){this.a=d},
bQD:function bQD(d){this.a=d},
bQX:function bQX(d,e){this.a=d
this.b=e},
bQL:function bQL(d,e){this.a=d
this.b=e},
bQO:function bQO(d){this.a=d},
bQN:function bQN(d){this.a=d},
bQM:function bQM(d){this.a=d},
akj:function akj(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bL_:function bL_(){},
bL0:function bL0(){},
n1:function n1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cuI:function cuI(d){this.a=d},
itt(d2,d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=d3.fx>0&&!d3.x,c7=new C.fY4(),c8=new C.fY6(),c9=new C.fY7(),d0=new C.fY5(),d1=d3.b
switch(d1){case"fridge":w=c9.$4(-16,-28,32,54)
d2.aq(w,d0.$3(new B.a4(w.a,w.b,w.c,w.d),A.ch,A.bP))
d2.ah(D.euT,D.erN,c8.$2(A.dZ,1.4))
d2.ah(D.ers,D.erq,c8.$2(A.by,2.4))
d2.ah(D.ert,T.aMS,c8.$2(A.by,2.4))
if(c6){d1=c7.$1(A.ft.j(0.5))
d1.y=A.Hm
d2.O(D.er8,14,d1)
for(d1=d4*0.6,v=0;v<3;++v){u=A.i.F(d1+v/3,1)
d5.$5(d2,"\u2744",new B.r(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d2.aq(c9.$4(-22,-26,44,50),d0.$3(D.aT_,A.aS,A.cA))
d2.O(A.cK,16,c7.$1(A.by))
d2.O(A.cK,13,c7.$1(c6?A.aG.j(0.85):A.a_))
if(c6){d1=d2.c
J.br(d1.save())
d1.translate(0,4)
d2.jq(0,d3.y*0.6)
for(v=0;v<3;++v){t=v*2.09
d2.ah(A.J,new B.r(Math.cos(t)*11,Math.sin(t)*11),c8.$2(A.ab,3))}d1.restore()
for(d1=d4*0.8,v=0;v<4;++v){u=A.i.F(d1+v*0.25,1)
d2.O(new B.r(Math.sin(v*2+d4)*9,4-u*12),1.6+u*2,c7.$1(A.c.j(0.8*(1-u))))}}d2.O(D.euL,2.4,c7.$1(c6?A.bi:A.an))
d2.O(D.evD,2.4,c7.$1(A.an))
return!0
case"blender":d2.aq(c9.$5(-14,14,28,12,4),c7.$1(A.cQ))
d1=$.S().r
t=x.v
s=new B.aH(d1,A.aj,c5,c5,B.a([],t))
s.E(new B.aZ(-16,-26))
s.E(new B.aq(16,-26))
s.E(new B.aq(12,14))
s.E(new B.aq(-12,14))
s.E(new B.bw())
d2.af(s,c7.$1(A.ft.j(0.35)))
if(c6){d1=new B.aH(d1,A.aj,c5,c5,B.a([],t))
d1.E(new B.aZ(-14,-10))
d1.E(new B.aq(14,-10))
d1.E(new B.aq(12,14))
d1.E(new B.aq(-12,14))
d1.E(new B.bw())
d2.af(d1,c7.$1(A.aA.j(0.7)))}d2.af(s,c8.$2(A.ab,1.6))
d1=d2.c
J.br(d1.save())
d1.translate(0,10)
d2.jq(0,d3.y)
d2.ah(D.a9v,D.aNe,c8.$2(A.bO,3))
d1.restore()
if(c6)for(d1=d4*9,t=d4*1.6,v=0;v<3;++v)d2.O(new B.r(Math.sin(d1+v*2)*9,-10-A.i.F(t+v*0.33,1)*12),2.4,c7.$1(A.f_))
return!0
case"drone":d2.aq(c9.$5(-10,-4,20,10,4),c7.$1(A.aL))
d2.O(A.hr,3,c7.$1(c6?A.bi:A.an))
r=c6?-3+Math.sin(d4*4)*2:4
for(d1=d2.c,t=-4+r,q=-6+r,p=0;p<2;++p){o=F.J0[p]
d2.ah(new B.r(o*0.4,1),new B.r(o,t),c8.$2(A.by,3))
J.br(d1.save())
d1.translate(o,q)
d2.ah(D.euz,D.erx,c8.$2(A.c.j(c6?0.35:0.9),3))
if(c6)d2.c0(B.bW(A.J,6,24+Math.sin(d3.y*3)*4),c7.$1(A.c.j(0.25)))
d1.restore()}return!0
case"drill":w=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
w.E(new B.aZ(-24,-12))
w.E(new B.aq(10,-12))
w.E(new B.aq(10,2))
w.E(new B.aq(-2,2))
w.E(new B.aq(-6,22))
w.E(new B.aq(-16,22))
w.E(new B.aq(-14,2))
w.E(new B.aq(-24,2))
w.E(new B.bw())
d2.af(w,d0.$3(D.fda,A.aQ,A.d6))
d2.aF(D.fch,c7.$1(A.d_))
d1=d2.c
J.br(d1.save())
d1.translate(18,-5)
d2.jq(0,d3.y*2)
d2.ah(A.J,D.erE,c8.$2(A.bO,2.4))
d2.ah(A.a9r,D.erD,c8.$2(A.hM,1))
d1.restore()
if(c6)for(d1=d4*3,t=d4*20,v=0;v<4;++v){u=A.i.F(d1+v*0.25,1)
d2.O(new B.r(34+u*6,-5+Math.sin(v*3+t)*6*u),1.4,c7.$1(A.ex.j(1-u)))}return!0
case"torch":if(c6){v=A.i.D(0.5+0.12*(Math.abs(d3.dy)-2),0.5,1)
d1=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(16,-6))
d1.E(new B.aq(52,-26))
d1.E(new B.aq(52,18))
d1.E(new B.aq(16,4))
d1.E(new B.bw())
d2.af(d1,c7.$1(A.bL.j(0.35*v)))}d2.aq(c9.$5(-26,-6,30,12,3),d0.$3(D.fdg,A.bj,A.ct))
n=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
n.E(new B.aZ(4,-6))
n.E(new B.aq(18,-12))
n.E(new B.aq(18,12))
n.E(new B.aq(4,6))
n.E(new B.bw())
d2.af(n,c7.$1(A.cQ))
d2.O(D.erJ,7,c7.$1(c6?A.c:A.d_))
return!0
case"neon":d2.aq(c9.$5(-30,-14,60,28,6),c7.$1(M.mX))
if(c6)m=d3.ax>0.5||A.o.F(A.i.bg(d4*17),3)!==0
else m=!1
l=m?A.c4:D.bto
if(m){d1=c9.$5(-28,-12,56,24,6)
t=c7.$1(A.c4.j(0.35))
t.y=A.n4
d2.aq(d1,t)}d2.aq(c9.$5(-27,-11,54,22,5),c8.$2(l,2.2))
d5.$5(d2,"OPEN",D.euZ,l,17)
return!0
case"microwave":d2.aq(c9.$4(-30,-18,60,38),d0.$3(D.fdm,A.bO,A.bj))
d1=c9.$5(-26,-14,38,30,3)
d2.aq(d1,c7.$1(c6?A.bL.j(0.75):A.av))
if(c6){d1=d2.c
J.br(d1.save())
d1.translate(-7,8)
d2.jq(0,d3.y*0.5)
d2.c0(B.bW(A.J,7,22),c7.$1(A.d6))
d1.restore()}d2.aq(c9.$5(15,-14,12,12,2),c7.$1(M.mX))
if(c6)d5.$5(d2,"0:"+A.a.b0(A.o.v(59-A.o.F(A.i.bg(d4),60)),2,"0"),D.erK,A.bc,6.5)
d2.O(D.es_,4,c7.$1(A.d_))
return!0
case"doorbell":d2.aq(c9.$5(-16,-26,32,52,8),c7.$1(A.bm))
d2.O(A.JS,10,c7.$1(c6?A.bt:A.by))
d1=d2.c
J.br(d1.save())
d1.translate(0,-8)
d2.jq(0,c6?Math.sin(d4*16)*0.45:0)
d5.$5(d2,"\ud83d\udd14",D.evH,A.c,16)
d1.restore()
d2.O(A.kF,6,c7.$1(A.d9))
d2.O(A.kF,6,c8.$2(A.c,1.6))
if(c6)for(d1=d4*14,v=1;v<=2;++v)d2.cQ(B.bV(A.JS,14+v*6+A.i.F(d1,6)),-0.9,1.8,!1,c8.$2(A.bt.j(0.9-v*0.3),1.8))
return!0
case"camera":d2.ah(D.euY,D.evA,c8.$2(A.by,4))
d1=d2.c
J.br(d1.save())
d2.jq(0,c6?Math.sin(d4*0.9)*0.18:0)
d2.aq(c9.$5(-24,-14,46,22,5),d0.$3(D.fdb,A.bO,A.an))
d2.O(D.aMW,8,c7.$1(A.av))
d2.O(D.aMW,4.5,c7.$1(c6?A.aG:A.ct))
d2.O(D.euW,2.2,c7.$1(c6&&A.o.F(A.i.bg(d4*1.6),2)===0?A.aA:A.ky))
d1.restore()
if(c6)d5.$5(d2,"REC",D.ev6,A.aA,9)
return!0
case"console":d2.aq(c9.$5(-28,-22,56,44,8),d0.$3(D.fdj,A.j7,A.fA))
d2.aq(c9.$5(-20,-17,40,22,3),c7.$1(A.dQ))
if(c6){d1=d4*2.3
d2.O(new B.r(Math.sin(d1)*14,-6+Math.cos(d4*3.1)*6),2.6,c7.$1(A.c))
t=-9+Math.sin(d1+0.4)*6
d2.aF(new B.a4(-18,t,-15.6,t+8),c7.$1(A.bc))
d1=-9+Math.sin(d1-0.4)*6
d2.aF(new B.a4(15.6,d1,18,d1+8),c7.$1(A.c4))}d2.O(D.euR,4,c7.$1(A.b5))
d2.O(D.erF,2.4,c7.$1(A.aA))
d2.O(D.erX,2.4,c7.$1(A.bi))
return!0
case"heartmon":d2.aq(c9.$5(-30,-22,60,44,6),c7.$1(A.av))
d2.aq(c9.$5(-26,-18,52,28,3),c7.$1(A.dQ))
if(c6){d1=$.S()
t=B.a([],x.v)
k=new B.aH(d1.r,A.aj,c5,c5,t)
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
k.ab()}}d2.af(k,c8.$2(A.bc,1.8))
d5.$5(d2,"72",D.erG,A.hv,11)
d1=d4*9
d5.$5(d2,"\u2665",D.evb,A.hv.j((Math.sin(d1)+1.4)/2.4),9+Math.sin(d1)*1.2)}d2.O(D.ev0,3,c7.$1(c6?A.bi:A.by))
return!0
case"aquarium":d1=c9.$5(-26,-20,52,40,4)
d2.aq(d1,c7.$1(A.cG.j(c6?0.5:0.3)))
d2.aq(c9.$5(-26,-20,52,40,4),c8.$2(A.ab,1.6))
d2.aF(D.fdd,c7.$1(F.um))
if(c6){d1=d4*1.1
t=Math.sin(d1)
q=d2.c
J.br(q.save())
q.translate(t*14,-2+Math.sin(d4*2)*3)
if(Math.cos(d1)<0)d2.op(0,-1,1)
d2.c0(B.bW(A.J,8,14),c7.$1(A.cO))
d1=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-6,0))
d1.E(new B.aq(-12,-4))
d1.E(new B.aq(-12,4))
d1.E(new B.bw())
d2.af(d1,c7.$1(A.c9))
d2.O(D.esI,1.2,c7.$1(A.w))
q.restore()
for(d1=d4*0.7,v=0;v<5;++v){u=A.i.F(d1+v*0.2,1)
d2.O(new B.r(-18+Math.sin(u*8+v)*2,13-u*30),1.4+A.o.F(v,2),c8.$2(A.ab,1))}}return!0
case"lighthouse":d1=$.S().r
t=x.v
g=new B.aH(d1,A.aj,c5,c5,B.a([],t))
g.E(new B.aZ(-9,22))
g.E(new B.aq(-5,-16))
g.E(new B.aq(5,-16))
g.E(new B.aq(9,22))
g.E(new B.bw())
d2.af(g,d0.$3(D.fdO,A.c,A.bD))
d2.aF(D.fdK,c7.$1(c6?A.ex:A.by))
q=new B.aH(d1,A.aj,c5,c5,B.a([],t))
q.E(new B.aZ(-7,-22))
q.E(new B.aq(0,-29))
q.E(new B.aq(7,-22))
q.E(new B.bw())
d2.af(q,c7.$1(A.eq))
if(c6){f=Math.sin(d3.y*0.3)
d1=new B.aH(d1,A.aj,c5,c5,B.a([],t))
d1.E(new B.aZ(0,-19))
t=f*34
d1.E(new B.aq(t,-26))
d1.E(new B.aq(t,-12))
d1.E(new B.bw())
d2.af(d1,c7.$1(A.ex.j(0.45)))
d1=c7.$1(A.ex.j(0.35))
d1.y=A.Hm
d2.O(D.er9,14,d1)}return!0
case"discoball":d2.ah(D.erb,U.aMN,c8.$2(A.d_,1.4))
d2.O(A.J,16,d0.$3(D.fcV,A.aS,A.an))
for(v=0;v<8;++v){d1=-12+v*3.4
d2.ah(new B.r(-16,d1),new B.r(16,d1),c8.$2(A.dB,0.7))}for(v=0;v<5;++v){f=d3.y*0.5+v*1.26
d2.ah(new B.r(Math.cos(f)*16*0.3,Math.sin(f)*16*0.3),new B.r(Math.cos(f)*16,0),c8.$2(A.dB,0.7))}if(c6)for(d1=d4*2,t=d4*9,v=0;v<10;++v){f=d1+v*0.63
e=22+A.o.F(v,3)*6
d2.O(new B.r(Math.cos(f)*e,Math.sin(f)*e*0.8),1.8,c7.$1(D.do5[A.o.F(v,4)].j(0.5+0.5*Math.sin(t+v))))}return!0
case"robot":d2.aq(c9.$5(-14,-4,28,24,5),d0.$3(D.fcS,A.cA,A.an))
d2.aq(c9.$5(-12,-26,24,20,5),d0.$3(D.fcL,A.bm,A.bP))
d2.ah(H.aMP,D.erd,c8.$2(A.by,1.6))
d2.O(D.ere,2.2,c7.$1(c6?A.aA:A.by))
d=c6&&A.i.F(d4*0.8,1)>0.08
for(p=0;p<2;++p){o=F.a6X[p]
if(c6)d1=d?A.b9:A.fn
else d1=A.ct
d2.O(new B.r(o,-17),3.2,c7.$1(d1))}d1=d2.c
J.br(d1.save())
d1.translate(14,0)
d2.jq(0,c6?-0.6+Math.sin(d4*5)*0.6:0.3)
d2.ah(A.J,D.a9m,c8.$2(A.bP,4))
d1.restore()
d2.ah(D.euH,D.ev4,c8.$2(A.bP,4))
d2.aF(D.fdJ,c7.$1(c6?A.b9.j(0.7):A.aL))
return!0
case"toaster":a0=c6?Math.min(1,d3.ax/3):0
for(d1=-4-a0*14,p=0;p<2;++p){t=c9.$5(D.aDx[p]+1,d1,10,14,2)
q=B.ap(A.bL,A.d6,a0)
q.toString
d2.aq(t,c7.$1(q))}d2.aq(c9.$5(-24,-6,48,26,8),d0.$3(D.fdc,A.bO,A.bj))
for(p=0;p<2;++p){o=D.aDx[p]
d1=c9.$5(o,-5,12,5,2)
d2.aq(d1,c7.$1(c6?A.fK:A.av))
if(c6){d1=c9.$5(o,-5,12,5,2)
t=c7.$1(A.cO.j(0.5))
t.y=N.oA
d2.aq(d1,t)}}d2.ah(D.es5,D.esq,c8.$2(A.av,3))
return!0
case"ledstrip":d2.aq(c9.$5(-34,-4,68,10,4),c7.$1(A.ct))
for(d1=d4*90,v=0;v<9;++v){a1=A.i.F(d1+v*40,360)
l=c6?new Ar.pn(1,a1,0.8,1).je():A.cQ
if(c6){t=c7.$1(l.j(0.45))
t.y=N.oA
d2.O(new B.r(-30+v*7.5,1),7,t)}d2.O(new B.r(-30+v*7.5,1),2.6,c7.$1(l))}d2.aq(c9.$5(-40,-2,6,6,1),c7.$1(A.d_))
return!0
case"pump":d2.aq(c9.$5(-16,-2,32,22,6),d0.$3(D.fd0,A.cG,A.Gf))
d2.O(D.evc,8,c7.$1(A.rK))
d1=d2.c
J.br(d1.save())
d1.translate(-2,9)
d2.jq(0,d3.y)
for(v=0;v<3;++v){t=v*2.09
d2.ah(A.J,new B.r(Math.cos(t)*7,Math.sin(t)*7),c8.$2(A.ft,2.4))}d1.restore()
d1=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(16,6))
d1.E(new B.aq(26,6))
d1.E(new B.aq(26,-20))
d1.E(new B.aq(10,-20))
d2.af(d1,c8.$2(A.bP,4))
if(c6){for(d1=d4*0.9,v=0;v<5;++v)d2.O(new B.r(26,6-A.i.F(d1+v*0.2,1)*26),2.2,c7.$1(A.h9))
d2.O(D.etl,3.2,c7.$1(A.h9.j(0.7)))}return!0
case"hairdryer":d1=d2.c
J.br(d1.save())
d2.jq(0,-0.15)
d2.aq(c9.$5(-26,-14,40,22,10),d0.$3(D.fde,A.hK,A.uq))
d2.aq(c9.$5(14,-10,12,14,3),c7.$1(A.ct))
d2.aq(c9.$5(-10,6,12,22,4),c7.$1(A.cQ))
d1.restore()
if(c6){for(d1=d4*3,v=0;v<4;++v){u=A.i.F(d1+v*0.25,1)
t=u*18
q=-10+v*5
d2.ah(new B.r(24+t,q),new B.r(32+t,q),c8.$2(A.c.j(1-u),1.8))}d1=c7.$1(A.cO.j(0.4))
d1.y=N.oA
d2.O(D.erZ,8,d1)}return!0
case"headphones":d2.cQ(B.bW(A.dL,44,44),3.141592653589793,3.141592653589793,!1,c8.$2(A.by,4))
for(d1=d4*12,p=0;p<2;++p){o=F.T4[p]
t=o-7
d2.aq(c9.$5(t,0,14,20,6),d0.$3(new B.a4(t,0,t+14,20),A.bh,A.mR))
if(c6)for(t=o<0,v=1;v<=2;++v){q=B.bV(new B.r(o,10),10+v*5+A.i.F(d1,5))
h=t?2.2:-0.9
d2.cQ(q,h,1.6,!1,c8.$2(A.ey.j(0.9-v*0.3),1.6))}}if(c6)d5.$5(d2,"\u266a",new B.r(-4,-8-A.i.F(d4*14,8)),A.kO,12)
return!0
case"smartwatch":d2.aq(c9.$5(-8,-30,16,14,3),c7.$1(A.ct))
d2.aq(c9.$5(-8,14,16,14,3),c7.$1(A.ct))
d2.aq(c9.$5(-14,-17,28,32,8),d0.$3(D.fcQ,A.d_,A.cQ))
d2.aq(c9.$5(-11,-14,22,26,6),c7.$1(A.dQ))
if(c6){a2=new B.V(Date.now(),0,!1)
d5.$5(d2,A.a.b0(A.o.v(B.df(a2)),2,"0")+":"+A.a.b0(A.o.v(B.fV(a2)),2,"0"),D.erk,A.bc,9.5)
j=(Math.sin(d4*9)+1)/2
d1=B.ap(A.G_,A.hv,j)
d1.toString
d5.$5(d2,"\u2665",new B.r(-8,1),d1,8+j*2)
d5.$5(d2,""+(70+A.o.F(A.i.bg(d4*2),6)),A.dL,A.c,7)}return!0
case"tablet":d2.aq(c9.$5(-30,-22,60,44,6),c7.$1(M.mX))
d2.aq(c9.$5(-30,-22,60,44,6),c8.$2(A.bP,1.6))
a3=c9.$5(-27,-19,54,38,3)
if(c6){d1=d2.c
J.br(d1.save())
d1.clipRRect(B.n6(a3),$.mK(),!0)
d1.translate(-27,-19)
L.Mf(d2,D.fka,d4,!1,c5,c5)
d1.restore()}else d2.aq(a3,c7.$1(D.wp))
return!0
case"buck":a4=c9.$5(-26,-22,52,42,5)
d2.aq(a4,d0.$3(new B.a4(a4.a,a4.b,a4.c,a4.d),A.dX,A.dh))
d2.aq(a4,c8.$2(A.aT,1.2))
d2.O(D.aNl,9,c7.$1(A.av))
d2.O(D.aNl,6,c8.$2(A.d6,2))
d2.aq(c9.$5(4,-2,14,10,2),c7.$1(A.av))
d2.aq(c9.$5(-22,-19,44,12,2),c7.$1(A.dQ))
d1=A.i.ad(d3.db,1)
t=A.i.ad(c6?d3.dx:d3.e,1)
q=c6?A.bc:A.an
d5.$5(d2,d1+"\u2192"+t+"V",D.etv,q,8.2)
d2.O(D.erO,2.4,c7.$1(c6?A.bi:A.aL))
d5.$5(d2,"IN",D.ev5,A.ab,6)
d5.$5(d2,"OUT",D.etc,A.ab,6)
return!0
case"regulator":a5=c6?A.i.D(d3.cy*Math.abs(d3.fr)/2.5,0,1):0
d1=c9.$5(-14,-26,28,22,3)
t=B.ap(A.bP,A.aA,a5)
t.toString
d2.aq(d1,c7.$1(t))
d2.O(H.a9k,3,c7.$1(A.aL))
d2.aq(c9.$5(-12,-4,24,18,3),d0.$3(D.fcM,A.cQ,A.i7))
d5.$5(d2,"7805",D.a9v,A.ab,8)
for(p=0;p<3;++p){d1=D.duG[p]-1
d2.aF(new B.a4(d1,14,d1+2,22),c7.$1(A.dY))}if(a5>0.2)for(d1=d4*0.9,v=0;v<3;++v){u=A.i.F(d1+v*0.33,1)
d2.O(new B.r(-6+v*6,-28-u*12),2+u*2,c7.$1(A.c.j(0.5*(1-u))))}d5.$5(d2,"5V",D.evE,A.bp,9)
return!0
case"diode":d2.ah(D.aNp,D.aN8,c8.$2(A.dY,2.4))
d2.aq(c9.$5(-14,-7,28,14,6),c7.$1(A.at.j(0.85)))
d2.aF(D.fcv,c7.$1(A.bp))
if(c6){d1=c9.$5(-14,-7,28,14,6)
t=c7.$1(A.ex.j(0.4))
t.y=A.kY
d2.aq(d1,t)}d1=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-8,-4))
d1.E(new B.aq(-8,4))
d1.E(new B.aq(-1,0))
d1.E(new B.bw())
d2.af(d1,c7.$1(A.b5))
d5.$5(d2,"one way",D.euU,A.aF,8)
return!0
case"ldr":d2.ah(D.aNp,D.a9v,c8.$2(A.dY,2.4))
d2.ah(D.aNe,D.aN8,c8.$2(A.dY,2.4))
d2.O(A.J,12,c7.$1(A.d6))
d2.O(A.J,12,c8.$2(A.rQ,1.6))
d1=$.S()
t=B.a([],x.v)
a6=new B.aH(d1.r,A.aj,c5,c5,t)
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
d5.$5(d2,""+A.i.V(20+980*(1-d3.f))+"\u03a9",D.euI,A.ab,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":switch(d1){case"lgtv":t=A.eo
break
case"sonytv":t=A.rB
break
case"appletv":t=A.dY
break
default:t=F.BS
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
h.clipRRect(B.n6(a3),$.mK(),!0)
h.translate(t,q)
L.fYk(d2,new B.av(a3.c-t,a3.d-q),d3.at,d4,d3.ax,-1,c5,c5)
h.restore()
d2.O(D.est,1.6,c7.$1(A.bc))}else{d2.aq(a3,c7.$1(D.wp))
h=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
h.E(new B.aZ(t,q))
h.E(new B.aq(t+24,q))
h.E(new B.aq(t,q+22))
h.E(new B.bw())
d2.af(h,c7.$1(A.c.j(0.05)))}switch(d1){case"lgtv":d2.aq(c9.$5(-22,19,44,3,1.5),c7.$1(A.d_))
break
case"sonytv":for(d1=x.v,p=0;p<2;++p){o=M.fO[p]
t=$.S()
q=B.a([],d1)
t=new B.aH(t.r,A.aj,c5,c5,q)
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
d2.af(t,c7.$1(A.d_))}d5.$5(d2,"SONY",D.eu9,A.bO,5.5)
break
case"appletv":d1=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-8,18))
d1.E(new B.aq(8,18))
d1.E(new B.aq(12,25))
d1.E(new B.aq(-12,25))
d1.E(new B.bw())
d2.af(d1,c7.$1(D.ZY))
d5.$5(d2,"Apple TV",D.etw,A.by,4.8)
break
default:d2.aq(c9.$5(-34,19,68,7,3),c7.$1(D.brE))
for(v=0;v<14;++v){d1=-32+v*4.9
d2.ah(new B.r(d1,20),new B.r(d1,25),c8.$2(A.dB,0.6))}d5.$5(d2,"B&O",D.evz,F.um,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":a9=D.mu.h(0,d1)
b0=a9.b===D.AP
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
d2.aq(w,d0.$3(new B.a4(h,a8,b3,b4),b6,b5))
a3=c9.$5(t+2,q,b1-4,b2-4,3.5)
if(c6){t=d2.c
J.br(t.save())
t.clipRRect(B.n6(a3),$.mK(),!0)
q=a3.a
h=a3.b
t.translate(q,h)
L.Mf(d2,new B.av(a3.c-q,a3.d-h),d4,!1,c5,c5)
t.restore()}else d2.aq(a3,c7.$1(D.wp))
if(b0){t=a3.b
q=a3.d
d2.ah(new B.r(0,t),new B.r(0,q),c8.$2(A.w.j(c6?0.45:0.7),0.9))}if(d1==="iphonefold"||d1==="huawei")d2.aq(c9.$5(-4,a3.b+1.2,8,2.6,1.3),c7.$1(A.w))
else{d1=b0?b1/2-7:0
d2.O(new B.r(d1,a3.b+3),1.3,c7.$1(A.w))}return!0
case"ereader":d2.aq(c9.$5(-17,-28,34,52,4),c7.$1(A.cQ))
d2.aq(c9.$5(-14.5,-25.5,29,45,2),c7.$1(A.bO))
if(c6){d5.$5(d2,"NGMY",D.evK,A.av,9)
for(v=0;v<9;++v){d1=-9+v*3.6
t=A.o.F(v,4)===3?14:22
d2.aF(new B.a4(-11,d1,-11+t,d1+1.4),c7.$1(A.bj))}d2.O(A.a9i,1.6,c7.$1(A.av))}return!0
case"laptop":d2.aq(c9.$5(-30,-28,60,42,4),d0.$3(D.fdn,A.cA,A.bj))
b7=c9.$5(-27,-25,54,34,2)
if(c6){d1=d2.c
J.br(d1.save())
d1.clipRRect(B.n6(b7),$.mK(),!0)
t=b7.a
q=b7.b
d1.translate(t,q)
L.Mf(d2,new B.av(b7.c-t,b7.d-q),d4,!1,c5,c5)
d1.restore()}else d2.aq(b7,c7.$1(D.wp))
d1=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-38,16))
d1.E(new B.aq(38,16))
d1.E(new B.aq(34,21))
d1.E(new B.aq(-34,21))
d1.E(new B.bw())
d2.af(d1,c7.$1(D.ZY))
d2.aq(c9.$5(-7,16,14,2,1),c7.$1(A.bj))
return!0
case"imac":d2.aq(c9.$5(-32,-28,64,46,5),d0.$3(D.fdr,A.ch,A.cA))
b8=c9.$5(-29,-25,58,33,2)
if(c6){d1=d2.c
J.br(d1.save())
d1.clipRRect(B.n6(b8),$.mK(),!0)
t=b8.a
q=b8.b
d1.translate(t,q)
L.Mf(d2,new B.av(b8.c-t,b8.d-q),d4,!1,c5,c5)
d1.restore()}else d2.aq(b8,c7.$1(D.wp))
d2.O(D.aMI,2,c7.$1(A.bP))
d1=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(-6,18))
d1.E(new B.aq(6,18))
d1.E(new B.aq(10,26))
d1.E(new B.aq(-10,26))
d1.E(new B.bw())
d2.af(d1,c7.$1(D.ZY))
return!0
case"monitor":d2.aq(c9.$5(-34,-28,68,40,3),c7.$1(A.eo))
b9=c9.$5(-32,-26,64,36,2)
if(c6){d1=d2.c
J.br(d1.save())
d1.clipRRect(B.n6(b9),$.mK(),!0)
t=b9.a
q=b9.b
d1.translate(t,q)
L.Mf(d2,new B.av(b9.c-t,b9.d-q),d4,!1,c5,c5)
d1.restore()}else d2.aq(b9,c7.$1(D.wp))
d2.aF(D.fdy,c7.$1(A.bj))
d2.aq(c9.$5(-14,22,28,3.5,1.5),c7.$1(A.d_))
return!0
case"projector":if(c6){d1=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
d1.E(new B.aZ(14,4))
d1.E(new B.aq(-32,-42))
d1.E(new B.aq(34,-42))
d1.E(new B.bw())
d2.af(d1,c7.$1(A.ex.j(0.16)))
c0=c9.$5(-32,-46,66,26,2)
d1=d2.c
J.br(d1.save())
d1.clipRRect(B.n6(c0),$.mK(),!0)
t=c0.a
q=c0.b
d1.translate(t,q)
L.Mf(d2,new B.av(c0.c-t,c0.d-q),d4,!1,c5,c5)
d1.restore()}d2.aq(c9.$5(-26,-4,52,24,6),d0.$3(D.fdf,A.hY,A.d_))
d2.O(D.aMU,7,c7.$1(A.av))
d2.O(D.aMU,4,c7.$1(c6?A.ex:A.ct))
for(v=0;v<4;++v){d1=-20+v*4
d2.ah(new B.r(d1,2),new B.r(d1,14),c8.$2(A.dB,1))}return!0
case"carscreen":d2.aq(c9.$5(-34,-10,68,32,12),c7.$1(A.av))
c1=c9.$5(-30,-20,60,28,8)
d2.aq(c1,c7.$1(M.mX))
d2.aq(c1,c8.$2(A.by,1.2))
if(c6){c2=new B.aH($.S().r,A.aj,c5,c5,B.a([],x.v))
c2.E(new B.aZ(-26,4))
c2.E(new B.ce(-10,-14+Math.sin(d4)*3,6,-6))
c2.E(new B.aq(22,-16))
d2.af(c2,c8.$2(A.aG,2.2))
d1=A.i.F(d4*6,48)
d2.O(new B.r(-26+d1,4-d1*0.1),2.4,c7.$1(A.bc))
d5.$5(d2,""+(88+A.o.F(A.i.bg(d4*2),5)),H.aNd,A.c,10)
d5.$5(d2,"km/h",D.etj,A.aF,5)}return!0
case"vision":c3=c9.$5(-32,-14,64,28,13)
d2.aq(c3,d0.$3(new B.a4(c3.a,c3.b,c3.c,c3.d),A.d_,A.cQ))
c4=c9.$5(-29,-11,58,22,10)
if(c6){d1=d2.c
J.br(d1.save())
d1.clipRRect(B.n6(c4),$.mK(),!0)
t=c4.a
q=c4.b
d1.translate(t,q)
L.Mf(d2,new B.av(c4.c-t,c4.d-q),d4,!1,c5,c5)
d1.restore()
d1=c7.$1(A.bh.j(0.2))
d1.y=A.n4
d2.O(A.J,26,d1)}else d2.aq(c4,c7.$1(A.a_))
d2.ah(D.evj,D.evo,c8.$2(A.bj,4))
d2.ah(D.esv,D.esL,c8.$2(A.bj,4))
return!0}return!1},
fY4:function fY4(){},
fY6:function fY6(){},
fY7:function fY7(){},
fY5:function fY5(){},
hmx(d,e,f,g){return new C.akh(d,g,f,e)},
Gt(d,e,f){return new C.bdG(d,e,f)},
akh:function akh(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
aki:function aki(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.m9$=j
_.fa$=k
_.h9$=l
_.bw$=m
_.a9$=n
_.c=_.a=null},
bKD:function bKD(d,e){this.a=d
this.b=e},
bKE:function bKE(d){this.a=d},
bKC:function bKC(d){this.a=d},
bKF:function bKF(){},
bKG:function bKG(d){this.a=d},
bKH:function bKH(d,e,f){this.a=d
this.b=e
this.c=f},
bKB:function bKB(d,e){this.a=d
this.b=e},
bKy:function bKy(d,e){this.a=d
this.b=e},
bKz:function bKz(d,e,f){this.a=d
this.b=e
this.c=f},
bKs:function bKs(d,e){this.a=d
this.b=e},
bKt:function bKt(){},
bKA:function bKA(d,e,f){this.a=d
this.b=e
this.c=f},
bKx:function bKx(d,e){this.a=d
this.b=e},
bKu:function bKu(d,e){this.a=d
this.b=e},
bKv:function bKv(d,e){this.a=d
this.b=e},
bKw:function bKw(d){this.a=d},
bKX:function bKX(d){this.a=d},
bKY:function bKY(){},
bK2:function bK2(){},
bKZ:function bKZ(d,e){this.a=d
this.b=e},
bKW:function bKW(d,e){this.a=d
this.b=e},
bKR:function bKR(d){this.a=d},
bKO:function bKO(d,e,f){this.a=d
this.b=e
this.c=f},
bKP:function bKP(d,e){this.a=d
this.b=e},
bKS:function bKS(d){this.a=d},
bKM:function bKM(d,e){this.a=d
this.b=e},
bKN:function bKN(d,e){this.a=d
this.b=e},
bKQ:function bKQ(d){this.a=d},
bKT:function bKT(d){this.a=d},
bKJ:function bKJ(d,e){this.a=d
this.b=e},
bKK:function bKK(d,e){this.a=d
this.b=e},
bKL:function bKL(d,e){this.a=d
this.b=e},
bKU:function bKU(d){this.a=d},
bKI:function bKI(d){this.a=d},
bKV:function bKV(d){this.a=d},
bK3:function bK3(d,e){this.a=d
this.b=e},
bKp:function bKp(d,e){this.a=d
this.b=e},
bKr:function bKr(d,e){this.a=d
this.b=e},
bKq:function bKq(d,e){this.a=d
this.b=e},
bKo:function bKo(){},
bKa:function bKa(d){this.a=d},
bK9:function bK9(d){this.a=d},
bKb:function bKb(d,e){this.a=d
this.b=e},
bKc:function bKc(d){this.a=d},
bK8:function bK8(d){this.a=d},
bKg:function bKg(d,e,f){this.a=d
this.b=e
this.c=f},
bK7:function bK7(d,e){this.a=d
this.b=e},
bKh:function bKh(d,e){this.a=d
this.b=e},
bKi:function bKi(d,e){this.a=d
this.b=e},
bKj:function bKj(d,e){this.a=d
this.b=e},
bKk:function bKk(d,e,f){this.a=d
this.b=e
this.c=f},
bK6:function bK6(d,e){this.a=d
this.b=e},
bKl:function bKl(d,e,f){this.a=d
this.b=e
this.c=f},
bK5:function bK5(d,e){this.a=d
this.b=e},
bKm:function bKm(d,e,f){this.a=d
this.b=e
this.c=f},
bK4:function bK4(d,e){this.a=d
this.b=e},
bKn:function bKn(d){this.a=d},
bKd:function bKd(d){this.a=d},
bKe:function bKe(d){this.a=d},
bKf:function bKf(d){this.a=d},
bdG:function bdG(d,e,f){this.a=d
this.b=e
this.c=f},
fu5:function fu5(){},
fu6:function fu6(){},
fu7:function fu7(){},
ftT:function ftT(){},
fu8:function fu8(){},
ftS:function ftS(){},
fu9:function fu9(){},
ftX:function ftX(){},
ftR:function ftR(){},
ftY:function ftY(){},
ftQ:function ftQ(){},
ftZ:function ftZ(){},
ftP:function ftP(){},
fu_:function fu_(){},
ftN:function ftN(){},
ftO:function ftO(){},
fu0:function fu0(){},
ftL:function ftL(){},
ftM:function ftM(){},
fu1:function fu1(){},
ftK:function ftK(){},
Ws:function Ws(d){this.a=d},
aFC:function aFC(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
e28:function e28(d,e){this.a=d
this.b=e},
e2h:function e2h(d){this.a=d},
e2i:function e2i(){},
e2j:function e2j(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2k:function e2k(){},
e27:function e27(d){this.a=d},
e26:function e26(d,e,f){this.a=d
this.b=e
this.c=f},
e25:function e25(d,e){this.a=d
this.b=e},
e23:function e23(d){this.a=d},
e24:function e24(){},
e2g:function e2g(d){this.a=d},
e2f:function e2f(d){this.a=d},
e2d:function e2d(d,e){this.a=d
this.b=e},
e2b:function e2b(d){this.a=d},
e2c:function e2c(){},
e2e:function e2e(d,e,f){this.a=d
this.b=e
this.c=f},
e29:function e29(d,e){this.a=d
this.b=e},
e2a:function e2a(){},
e2m:function e2m(d){this.a=d},
e2n:function e2n(d,e){this.a=d
this.b=e},
e2l:function e2l(){},
e2o:function e2o(d,e){this.a=d
this.b=e},
e2p:function e2p(d){this.a=d},
e2q:function e2q(d){this.a=d},
azA:function azA(d,e){this.c=d
this.a=e},
bbO:function bbO(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
cMf:function cMf(d){this.a=d},
bbN:function bbN(d,e){this.b=d
this.a=e},
cMe:function cMe(d){this.a=d},
azV:function azV(){},
azW:function azW(){},
aM9:function aM9(){},
bAr:function bAr(){},
itu(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bV(A.vD,23)
$.S()
b8=B.L()
b8.r=A.av.gp(0)
b9.O(A.vD,25,b8)
b8=B.L()
b8.san(D.eEr.aD(0,v))
b9.O(A.vD,23,b8)
for(u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
b8=Math.cos(t)
s=Math.sin(t)
r=Math.cos(t)
q=Math.sin(t)
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.r=A.bp.gp(0)
p.c=A.o.F(u,5)===0?1.8:1
b9.ah(new B.r(b8*17,s*17-2),new B.r(r*21,q*21-2),p)}o=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.i.D(o/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=B.L()
r.r=A.bD.gp(0)
r.c=2
r.d=A.bG
b9.ah(A.vD,new B.r(b8*18,s*18-2),r)
r=B.L()
r.r=A.bp.gp(0)
b9.O(A.vD,3,r)
c2.$5(b9,w?"V":"A",D.evr,A.bp,12)
c2.$5(b9,w?A.i.ad(o,1)+" V":""+A.i.V(o*1000)+" mA",D.euO,A.av,9.5)
return!0
case"fan":b8=B.bx(D.fcI,A.iF)
$.S()
s=B.L()
s.r=A.by.gp(0)
b9.aq(b8,s)
s=B.L()
s.r=A.an.gp(0)
b9.aF(D.fdz,s)
s=B.L()
s.r=A.a_.j(0.6).gp(0)
b9.O(H.vE,22,s)
for(b8=b9.c,u=0;u<4;++u){J.br(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.bW(A.aMM,18,10)
r=new B.ar(A.S,A.Q,A.V,A.X,A.U)
r.r=A.h9.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
b9.c0(s,r)
b8.restore()}b8=B.L()
b8.r=A.bs.gp(0)
b9.O(H.vE,4,b8)
b8=B.L()
b8.b=A.aa
b8.c=2
b8.r=A.cA.gp(0)
b9.O(H.vE,22,b8)
b8=B.L()
b8.b=A.aa
b8.c=0.8
b8.r=A.k0.gp(0)
b9.O(H.vE,14,b8)
return!0
case"speaker":n=B.bx(D.aT_,A.r8)
$.S()
b8=B.L()
b8.san(D.auc.aD(0,new B.a4(n.a,n.b,n.c,n.d)))
b9.aq(n,b8)
m=b7?Math.sin(c1*40)*1.6:0
b8=B.L()
b8.san(D.eEO.aD(0,B.bV(A.cz,15)))
b9.O(A.cz,14+m,b8)
b8=B.L()
b8.r=A.d_.gp(0)
b9.O(A.cz,5,b8)
b8=B.L()
b8.r=A.bj.gp(0)
b9.O(H.a9j,5+m*0.4,b8)
if(b7)for(b8=c1*18,u=1;u<=3;++u){s=B.bV(D.es4,6+u*6+A.i.F(b8,6))
r=new B.ar(A.S,A.Q,A.V,A.X,A.U)
r.b=A.aa
r.c=1.8
r.r=A.c4.j(0.9-u*0.2).gp(0)
b9.cQ(s,-0.8,1.6,!1,r)}return!0
case"clock":l=B.bx(D.fdq,A.r8)
$.S()
b8=B.L()
b8.san(D.cay.aD(0,new B.a4(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
b8=B.bx(D.aT1,A.jy)
s=B.L()
s.r=A.i7.gp(0)
b9.aq(b8,s)
if(b7){k=new B.V(Date.now(),0,!1)
j=B.FN(k)<500?":":" "
i=A.a.b0(A.o.v(B.df(k)),2,"0")
h=A.a.b0(A.o.v(B.fV(k)),2,"0")
b8=B.L()
b8.r=A.bc.j(0.12).gp(0)
b9.aF(D.aT1,b8)
c2.$5(b9,i+j+h,D.ev9,A.bc,21)}b8=B.L()
b8.r=A.cA.gp(0)
b9.O(D.ev7,2.4,b8)
b8=B.L()
b8.r=A.cA.gp(0)
b9.O(D.es9,2.4,b8)
return!0
case"calculator":l=B.bx(D.fd5,A.ir)
$.S()
b8=B.L()
b8.san(D.cah.aD(0,new B.a4(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
b8=B.bx(D.fcZ,A.hE)
s=B.L()
s.r=(b7?A.a_b:D.bu1).gp(0)
b9.aq(b8,s)
if(b7)c2.$5(b9,"3.14159",D.euN,A.YO,10.5)
for(g=0;g<4;++g)for(b8=-6+g*8,s=b8+6,f=0;f<4;++f){r=-15+f*8
r=B.bx(new B.a4(r,b8,r+6,s),A.V0)
$.S()
q=new B.ar(A.S,A.Q,A.V,A.X,A.U)
q.r=(f===3?A.c9:A.bO).gp(0)
b9.aq(r,q)}return!0
case"phone":l=B.bx(D.fcU,A.ir)
$.S()
b8=B.L()
b8.r=M.mX.gp(0)
b9.aq(l,b8)
b8=B.L()
b8.b=A.aa
b8.c=1.9
b8.r=D.alm.gp(0)
b9.aq(l,b8)
e=B.bx(D.fcK,A.iF)
if(b7){b8=B.L()
b8.san(D.cbU.aD(0,new B.a4(e.a,e.b,e.c,e.d)))
b9.aq(e,b8)
b8=b9.c
J.br(b8.save())
b8.clipRRect(B.n6(e),$.mK(),!0)
b8.translate(-12,-25)
L.Mf(b9,D.fjN,c1,!1,b6,b6)
b8.restore()
d=A.i.F(c1*0.12,1)
b8=B.bx(D.fcH,A.hE)
s=B.L()
s.r=A.b5.gp(0)
b9.aq(b8,s)
s=B.L()
s.r=A.bc.gp(0)
b9.aF(new B.a4(-10,14.5,-10+20*d,16.9),s)
c2.$5(b9,"\u26a1"+A.i.V(d*100)+"%",D.etQ,A.c,6)}else{b8=B.L()
b8.r=D.wp.gp(0)
b9.aq(e,b8)}b8=B.bx(D.fdP,D.eEW)
s=B.L()
s.r=A.w.gp(0)
b9.aq(b8,s)
return!0
case"router":l=B.bx(D.fdp,A.nZ)
$.S()
b8=B.L()
b8.san(D.caQ.aD(0,new B.a4(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
for(a0=0;a0<2;++a0){a1=F.T4[a0]
b8=a1<0?-4:4
s=new B.ar(A.S,A.Q,A.V,A.X,A.U)
s.r=A.ct.gp(0)
s.c=4
s.d=A.bG
b9.ah(new B.r(a1,-4),new B.r(a1+b8,-28),s)}for(u=0;u<4;++u){if(b7)a2=A.o.F(A.i.bg(c1*(3+u*1.3)),2)===0||u===0
else a2=!1
b8=new B.ar(A.S,A.Q,A.V,A.X,A.U)
b8.r=(a2?A.bi:A.aL).gp(0)
b9.O(new B.r(-15+u*10,11),2.6,b8)}if(b7)for(b8=c1*10,u=1;u<=3;++u){s=B.bV(H.vE,8+u*6+A.i.F(b8,6))
r=new B.ar(A.S,A.Q,A.V,A.X,A.U)
r.b=A.aa
r.c=1.8
r.r=A.fJ.j(0.9-u*0.2).gp(0)
b9.cQ(s,-2.3,1.5,!1,r)}return!0
case"siren":a3=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bx(D.fd4,A.iF)
s=$.S()
r=B.L()
r.r=A.cQ.gp(0)
b9.aq(b8,r)
if(b7){b8=B.L()
b8.r=A.aA.j(0.5*a3).gp(0)
b8.y=A.CU
b9.O(A.vD,34,b8)}a4=new B.aH(s.r,A.aj,b6,b6,B.a([],x.v))
a4.E(new B.aZ(-16,12))
a4.E(new B.aq(-16,-2))
a4.E(new B.ce(0,-30,16,-2))
a4.E(new B.aq(16,12))
a4.E(new B.bw())
b8=B.L()
b8.r=B.ap(A.eq,D.bkB,a3).gp(0)
b9.af(a4,b8)
b8=B.L()
b8.b=A.aa
b8.c=1.4
b8.r=A.bV.gp(0)
b9.af(a4,b8)
if(b7){b8=b9.c
J.br(b8.save())
b8.translate(0,-2)
b9.jq(0,c1*7)
s=B.L()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.ah(A.J,H.a9j,s)
b8.restore()}return!0
case"toycar":a5=b7?Math.sin(c1*30)*0.8:0
b8=b9.c
J.br(b8.save())
b8.translate(0,a5)
s=$.S().r
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
l.E(new B.bw())
q=B.L()
q.san(D.c8Q.aD(0,D.fdi))
b9.af(l,q)
q=new B.aH(s,A.aj,b6,b6,B.a([],r))
q.E(new B.aZ(-8,-4))
q.E(new B.aq(-4,-13))
q.E(new B.aq(4,-13))
q.E(new B.aq(4,-4))
q.E(new B.bw())
p=B.L()
p.r=A.ft.gp(0)
b9.af(q,p)
r=new B.aH(s,A.aj,b6,b6,B.a([],r))
r.E(new B.aZ(8,-4))
r.E(new B.aq(8,-13))
r.E(new B.aq(11,-13))
r.E(new B.aq(15,-4))
r.E(new B.bw())
s=B.L()
s.r=A.ft.gp(0)
b9.af(r,s)
for(a0=0;a0<2;++a0){a1=F.aDy[a0]
s=new B.ar(A.S,A.Q,A.V,A.X,A.U)
s.r=A.av.gp(0)
b9.O(new B.r(a1,10),7.5,s)
J.br(b8.save())
b8.translate(a1,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.ar(A.S,A.Q,A.V,A.X,A.U)
q.r=A.bO.gp(0)
q.c=1.6
b9.ah(A.J,new B.r(r*5.5,s*5.5),q)}b8.restore()}b8.restore()
if(b7)for(b8=c1*40,u=0;u<3;++u){s=A.i.F(b8+u*8,14)
r=-4+u*5
q=new B.ar(A.S,A.Q,A.V,A.X,A.U)
q.r=A.aF.gp(0)
q.c=1.6
b9.ah(new B.r(-34-s,r),new B.r(-42-s,r),q)}return!0
case"kettle":b8=$.S().r
s=x.v
l=new B.aH(b8,A.aj,b6,b6,B.a([],s))
l.E(new B.aZ(-18,20))
l.E(new B.aq(-14,-12))
l.E(new B.ce(0,-20,14,-12))
l.E(new B.aq(18,20))
l.E(new B.bw())
r=B.L()
r.san(D.c9X.aD(0,D.fd3))
b9.af(l,r)
r=new B.aH(b8,A.aj,b6,b6,B.a([],s))
r.E(new B.aZ(14,-10))
r.E(new B.aq(30,-22))
r.E(new B.aq(32,-18))
r.E(new B.aq(16,-4))
r.E(new B.bw())
q=B.L()
q.r=A.dY.gp(0)
b9.af(r,q)
s=new B.aH(b8,A.aj,b6,b6,B.a([],s))
s.E(new B.aZ(-14,-8))
s.E(new B.ce(-34,-6,-18,12))
b8=B.L()
b8.b=A.aa
b8.c=5
b8.r=A.av.gp(0)
b9.af(s,b8)
b8=B.L()
if(b7){s=B.ap(A.cO,A.uy,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.cQ
b8.r=s.gp(0)
b9.aF(D.fd2,b8)
if(b7){b8=B.L()
b8.r=A.cO.j(0.3).gp(0)
b8.y=A.n4
b9.O(A.aMK,24,b8)
for(b8=c1*0.9,u=0;u<4;++u){a6=A.i.F(b8+u*0.25,1)
s=Math.sin(a6*9+u)
r=new B.ar(A.S,A.Q,A.V,A.X,A.U)
r.r=A.c.j(0.6*(1-a6)).gp(0)
b9.O(new B.r(30+s*4,-26-a6*26),3+a6*5,r)}}b8=B.L()
b8.r=A.av.gp(0)
b9.O(D.er7,3,b8)
return!0
case"lamp":if(b7){u=A.i.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aH($.S().r,A.aj,b6,b6,B.a([],x.v))
b8.E(new B.aZ(-10,-14))
b8.E(new B.aq(-30,24))
b8.E(new B.aq(10,24))
b8.E(new B.aq(8,-14))
b8.E(new B.bw())
s=B.L()
s.r=A.ex.j(0.28*u).gp(0)
b9.af(b8,s)
s=B.L()
s.r=A.ex.j(0.5*u).gp(0)
s.y=W.OQ
b9.O(D.evd,24,s)}b8=B.bx(D.fdI,A.iF)
s=$.S()
r=B.L()
r.r=A.cQ.gp(0)
b9.aq(b8,r)
r=B.L()
r.r=A.d_.gp(0)
r.c=3
r.d=A.bG
b9.ah(D.ern,D.aMX,r)
r=B.L()
r.r=A.d_.gp(0)
r.c=3
r.d=A.bG
b9.ah(D.aMX,D.eve,r)
a7=new B.aH(s.r,A.aj,b6,b6,B.a([],x.v))
a7.E(new B.aZ(-14,-16))
a7.E(new B.aq(6,-26))
a7.E(new B.aq(10,-12))
a7.E(new B.aq(-10,-6))
a7.E(new B.bw())
s=B.L()
s.r=(b7?A.aQ:A.k1).gp(0)
b9.af(a7,s)
b8=B.L()
b8.r=(b7?A.c:A.bj).gp(0)
b9.O(D.evh,4,b8)
return!0
case"lights":b8=$.S().r
s=x.v
a8=new B.aH(b8,A.aj,b6,b6,B.a([],s))
a8.E(new B.aZ(-34,-6))
a8.E(new B.ce(0,22,34,-6))
r=B.L()
r.b=A.aa
r.c=2
r.r=A.hJ.gp(0)
b9.af(a8,r)
for(r=c1*2.4,u=0;u<5;++u){a9=(u+0.5)/5
q=-34+68*a9
p=-6+4*a9*(1-a9)*4*4.2/1*0.75+0
b0=b7&&A.i.F(r+u*0.7,1.8)<1.1
if(b0){b1=new B.ar(A.S,A.Q,A.V,A.X,A.U)
b1.r=D.a5U[u].j(0.6).gp(0)
b1.y=A.Hm
b9.O(new B.r(q+0,p+6),12,b1)}b1=B.a([],s)
b2=new B.aH(b8,A.aj,b6,b6,b1)
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
q=new B.bw()
b1.push(q)
p=b2.f
if(p!=null)q.ak(p)
b2.ab()
q=new B.ar(A.S,A.Q,A.V,A.X,A.U)
if(b0)p=D.a5U[u]
else{p=B.ap(D.a5U[u],A.w,0.65)
p.toString}q.r=p.gp(0)
b9.af(b2,q)}return!0}return C.itt(b9,c0,c1,c2)},
fW:function fW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hhx(d){var w=D.mu.h(0,d)
return(w==null?null:w.b)===D.AN},
iuJ(d,e,f){return B.a6(d,!1).ce(B.vj(null,!1,!0,!0,new C.h2c(e,f),A.eU,null,A.pu,new C.h2d(),x.H))},
Kj:function Kj(d,e){this.a=d
this.b=e},
m5:function m5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h2c:function h2c(d,e){this.a=d
this.b=e},
h2d:function h2d(){},
Wb:function Wb(d,e,f){this.c=d
this.d=e
this.a=f},
aFs:function aFs(d,e,f){var _=this
_.d=$
_.e=null
_.r=_.f=!1
_.w=-99
_.x=d
_.z=_.y=0
_.bw$=e
_.a9$=f
_.c=_.a=null},
dZ4:function dZ4(d,e){this.a=d
this.b=e},
dZ5:function dZ5(d,e,f){this.a=d
this.b=e
this.c=f},
dZf:function dZf(d,e,f){this.a=d
this.b=e
this.c=f},
dZ3:function dZ3(d,e){this.a=d
this.b=e},
dZ2:function dZ2(d,e){this.a=d
this.b=e},
dZg:function dZg(d,e){this.a=d
this.b=e},
dZh:function dZh(d){this.a=d},
dYX:function dYX(d,e){this.a=d
this.b=e},
dYW:function dYW(d,e){this.a=d
this.b=e},
dYV:function dYV(d){this.a=d},
dZd:function dZd(){},
dZ9:function dZ9(d){this.a=d},
dZa:function dZa(d){this.a=d},
dZb:function dZb(d){this.a=d},
dZc:function dZc(d){this.a=d},
dZi:function dZi(d){this.a=d},
dZ8:function dZ8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dZ6:function dZ6(){},
dZ7:function dZ7(d){this.a=d},
dZe:function dZe(d,e){this.a=d
this.b=e},
dZ1:function dZ1(d,e){this.a=d
this.b=e},
dZ_:function dZ_(d){this.a=d},
dZ0:function dZ0(d){this.a=d},
dYU:function dYU(d){this.a=d},
dYZ:function dYZ(d,e,f){this.a=d
this.b=e
this.c=f},
dYY:function dYY(d){this.a=d},
byt:function byt(d,e,f){this.b=d
this.c=e
this.a=f},
ag1:function ag1(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aNY:function aNY(){},
a2f(d,e,f,g,h,i){return new C.bxf(d,e,f,g,h,i)},
bxf:function bxf(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fuA:function fuA(){},
fuB:function fuB(){},
fuC:function fuC(){},
fuD:function fuD(){},
fuE:function fuE(){},
fuF:function fuF(){},
fuG:function fuG(){},
fuH:function fuH(){},
a9F:function a9F(d){this.a=d},
cnA:function cnA(d){this.a=d},
cnB:function cnB(){},
cnz:function cnz(d,e){this.a=d
this.b=e},
cny:function cny(d){this.a=d},
XO:function XO(d){this.a=d},
aH7:function aH7(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.h8$=f
_.m9$=g
_.fa$=h
_.h9$=i
_.bw$=j
_.a9$=k
_.c=_.a=null},
eW2:function eW2(d){this.a=d},
eVZ:function eVZ(d){this.a=d},
eVY:function eVY(d,e){this.a=d
this.b=e},
eW0:function eW0(d,e){this.a=d
this.b=e},
eW_:function eW_(d,e){this.a=d
this.b=e},
eW1:function eW1(d){this.a=d},
byF:function byF(d,e,f){this.b=d
this.c=e
this.a=f},
WA:function WA(d){this.a=d},
bmC:function bmC(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.h8$=d
_.m9$=e
_.fa$=f
_.h9$=g
_.bw$=h
_.a9$=i
_.c=_.a=null},
e57:function e57(){},
e58:function e58(){},
e52:function e52(d,e){this.a=d
this.b=e},
e54:function e54(d,e){this.a=d
this.b=e},
e55:function e55(d){this.a=d},
e53:function e53(d){this.a=d},
e56:function e56(d){this.a=d},
btk:function btk(d,e,f){this.b=d
this.c=e
this.a=f},
VL:function VL(d){this.a=d},
bmb:function bmb(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.h8$=d
_.m9$=e
_.fa$=f
_.h9$=g
_.bw$=h
_.a9$=i
_.c=_.a=null},
dQo:function dQo(){},
dQp:function dQp(){},
dQj:function dQj(){},
dQm:function dQm(d,e){this.a=d
this.b=e},
dQl:function dQl(d,e){this.a=d
this.b=e},
dQn:function dQn(d){this.a=d},
dQk:function dQk(d){this.a=d},
aKz:function aKz(d,e,f){this.a=d
this.b=e
this.c=f},
Wr:function Wr(d){this.a=d},
bmt:function bmt(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
e1D:function e1D(d,e){this.a=d
this.b=e},
e1E:function e1E(d){this.a=d},
e1C:function e1C(d,e){this.a=d
this.b=e},
e1F:function e1F(d){this.a=d},
e1B:function e1B(d,e){this.a=d
this.b=e},
e1G:function e1G(d){this.a=d},
e1A:function e1A(d,e){this.a=d
this.b=e},
e1H:function e1H(d,e){this.a=d
this.b=e},
e1z:function e1z(d,e){this.a=d
this.b=e},
e1I:function e1I(d){this.a=d},
e1y:function e1y(d,e){this.a=d
this.b=e},
e1J:function e1J(d){this.a=d},
e1x:function e1x(d){this.a=d},
e1K:function e1K(d){this.a=d},
e1w:function e1w(d){this.a=d},
e1L:function e1L(d){this.a=d},
e1M:function e1M(d){this.a=d},
e1v:function e1v(d){this.a=d},
bov:function bov(d,e,f){this.b=d
this.c=e
this.a=f},
Xa:function Xa(d){this.a=d},
aGq:function aGq(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
esz:function esz(d,e){this.a=d
this.b=e},
esA:function esA(d,e,f){this.a=d
this.b=e
this.c=f},
esy:function esy(d,e,f){this.a=d
this.b=e
this.c=f},
esB:function esB(d){this.a=d},
esx:function esx(d){this.a=d},
esF:function esF(d){this.a=d},
esE:function esE(d,e){this.a=d
this.b=e},
esD:function esD(d,e){this.a=d
this.b=e},
esG:function esG(d,e){this.a=d
this.b=e},
esC:function esC(d,e){this.a=d
this.b=e},
esH:function esH(d){this.a=d},
Xk:function Xk(d){this.a=d},
aGL:function aGL(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eDl:function eDl(d){this.a=d},
eDm:function eDm(d){this.a=d},
eDj:function eDj(d,e){this.a=d
this.b=e},
eDk:function eDk(d){this.a=d},
eDi:function eDi(d){this.a=d},
eDn:function eDn(d){this.a=d},
eDo:function eDo(d){this.a=d},
eDp:function eDp(d){this.a=d},
eDq:function eDq(d,e){this.a=d
this.b=e},
XF:function XF(d){this.a=d},
bnJ:function bnJ(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eRo:function eRo(){},
eRx:function eRx(){},
eRt:function eRt(d){this.a=d},
eRs:function eRs(){},
eRu:function eRu(d,e){this.a=d
this.b=e},
eRr:function eRr(d,e){this.a=d
this.b=e},
eRv:function eRv(d){this.a=d},
eRq:function eRq(d,e){this.a=d
this.b=e},
eRw:function eRw(d){this.a=d},
eRp:function eRp(d){this.a=d},
X9:function X9(d){this.a=d},
bnd:function bnd(d,e,f,g,h,i,j,k){var _=this
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
_.m9$=g
_.fa$=h
_.h9$=i
_.bw$=j
_.a9$=k
_.c=_.a=null},
ere:function ere(){},
erf:function erf(){},
er7:function er7(d){this.a=d},
er6:function er6(d){this.a=d},
er8:function er8(d){this.a=d},
er5:function er5(d){this.a=d},
er9:function er9(d){this.a=d},
er4:function er4(d){this.a=d},
era:function era(d,e){this.a=d
this.b=e},
er3:function er3(d,e){this.a=d
this.b=e},
erb:function erb(d){this.a=d},
er2:function er2(d,e){this.a=d
this.b=e},
erc:function erc(d){this.a=d},
er1:function er1(d,e){this.a=d
this.b=e},
erd:function erd(d){this.a=d},
er0:function er0(d,e){this.a=d
this.b=e},
bg3:function bg3(d,e,f){this.c=d
this.d=e
this.a=f},
aNK:function aNK(){},
bAn:function bAn(){},
aO4:function aO4(){},
bAt:function bAt(){},
aOx:function aOx(){},
bAC:function bAC(){},
aOY:function aOY(){},
bAL:function bAL(){},
JP(d,e,f,g){var w,v,u,t,s,r,q,p=$.atV
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.I)(e),++w)E.my(d,e[w],f,g)
return}for(p=B.cX(e,0,B.dD(4,"count",x.S),B.U(e).c),v=p.$ti,p=new B.bQ(p,p.gJ(0),v.k("bQ<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)E.my(d,s,f,g)
else B.bN(new B.bd(1000*q),new C.cnw(d,s,f,g),u)}},
cl4(d){return C.i_l(d)},
i_l(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$cl4=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$cl4)
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
return B.i($async$cl4,v)},
b3K(d,e){return C.i_m(d,e)},
i_m(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b3K=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$b3K)
case 6:s=g
w=7
return B.b(s.aC("String","ngmy_play_progress_v1_"+d,A.W.av(e,null)),$async$b3K)
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
return B.i($async$b3K,v)},
cnw:function cnw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
iko(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.T(x.Y,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.B)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.I)(w),++q){p=w[q]
u.push(B.J(["k",p.b,"x",B.ou(A.i.ad(p.c,4)),"y",B.ou(A.i.ad(p.d,4)),"v",p.e,"l",B.ou(A.i.ad(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.ou(A.i.ad(p.as,3)),"ch",p.at,"vc",B.ou(A.i.ad(p.z,3)),"s",B.ou(A.i.ad(p.ch,2))],s,r))}w=B.a([],x.U)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.I)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.C(f,B.a3(f).k("ci.E"))
A.d.ff(l)
return A.W.av(B.J(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
itT(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
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
if(!$.qK().am(0,s)){J.c5(v,null)
continue}d=s
a0=B.aJ(J.t(t,"x"))
if(a0==null)a0=0.5
a1=B.aJ(J.t(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.u1(a2,d,a0,a1)
a3.ass(a2,d,a0,a1)
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
d=B.k8(J.t(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.k8(J.t(t,"b"))
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
J.c5(v,r)}i=g.a(J.t(w,"wires"))
i=J.aT(i==null?A.cu:i)
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
if(m!=null&&l!=null)a6.amn(m,A.i.M(B.dF(J.t(p,1))),l,A.i.M(B.dF(J.t(p,3))))}i=B.aJ(J.t(w,"challenge"))
i=A.i.M(i==null?0:i)
k=B.aR(x.S)
h=g.a(J.t(w,"done"))
h=J.aT(h==null?A.cu:h)
while(h.C()){j=h.gP(h)
J.c5(k,A.i.M(B.dF(j)))}return new B.brs(i,k)}catch(a4){return a5}},
fLE(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fLE=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.aA(),$async$fLE)
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
return B.i($async$fLE,v)},
bHa(d){return C.ivw(d)},
ivw(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bHa=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.aA(),$async$bHa)
case 7:w=6
return B.b(f.aC("String","ngmy_electronics_lab_v1",d),$async$bHa)
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
return B.i($async$bHa,v)}},D,U,Z,Ap,L,F,M,H,Aq,A_,Ar,A0,A4,As
J=c[1]
B=c[0]
A=c[2]
A5=c[120]
A1=c[146]
A6=c[152]
A2=c[150]
S=c[143]
O=c[41]
V=c[139]
A7=c[135]
N=c[145]
A8=c[155]
A9=c[163]
Aa=c[107]
Ab=c[137]
A3=c[119]
Ac=c[161]
Ad=c[153]
Ae=c[157]
Af=c[76]
W=c[141]
T=c[85]
Ag=c[88]
P=c[130]
Ah=c[114]
X=c[144]
Y=c[156]
Ai=c[105]
E=c[29]
I=c[3]
G=c[38]
K=c[109]
Aj=c[103]
Ak=c[123]
Al=c[162]
Am=c[102]
Q=c[160]
An=c[158]
R=c[131]
Ao=c[159]
C=a.updateHolder(c[18],C)
D=c[140]
U=c[154]
Z=c[148]
Ap=c[26]
L=c[28]
F=c[100]
M=c[98]
H=c[142]
Aq=c[67]
A_=c[149]
Ar=c[57]
A0=c[111]
A4=c[151]
As=c[147]
C.alv.prototype={}
C.WU.prototype={
S(){return new C.bn1(B.T(x.N,x.i),new B.au(A.aw,$.ax()),B.a([],x.X),B.a([],x.eZ),B.n2(0,null,null))}}
C.bn1.prototype={
gXf(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
t(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
this.ch.t()
this.a2()},
Q_(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Q_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aU.ap$.d.c
if(s!=null)s.jr()
p.bP(0,A.cf)
t.m(new C.ekk(t))
t.a.toString
p=t.gXf()
w=3
return B.b(C.bCF(C.i8h(q,C.ik9(p),o,t.ay)),$async$Q_)
case 3:s=e
r=s==null?null:J.j3(s)
if(r==null||r.length===0||A.a.a_(r,"{"))r=C.ilG(q,p,o)
if(t.c==null){w=1
break}t.m(new C.ekl(t,o,r))
$.aU.x1$.push(new C.ekm(t))
case 1:return B.h(u,v)}})
return B.i($async$Q_,v)},
Zm(d){return this.c3Q(d)},
aYV(){return this.Zm(null)},
c3Q(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Zm=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aU.ap$.d.c
if(s!=null)s.jr()
t.f.sb3(0,o)
t.m(new C.ekx(t))
G.dA(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bCF(C.ifm(o)),$async$Zm)
case 3:r=n.a=m.ity(f)
p.b=""
if(r!=null&&!C.ika(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.ilH(o)
q=B.ag(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.alv(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new C.eky(p,t))
t.c9t(p.a)
case 1:return B.h(u,v)}})
return B.i($async$Zm,v)},
c9t(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
A.d.a8(w)
w=++m.as
v=m.gXf()
A.d.a8(v.a)
A.d.a8(v.b)
m.e.a8(0)
m.m(new C.ekt(m))
t=d.d
s=B.T(x.N,x.Y)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.ekr(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.eku(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.I)(r),++u){p.$2(o,new C.ekv(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.ekw(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bh.j(0.1),g=B.l(16),f=B.K(A.bh.j(0.35),A.r,1)
if(m.x)j=B.A(B.a([D.flk,A.bb,B.E(B.d(m.Q,l,l,l,l,l,l,A.B_,l,l,l),1)],x.p),A.l,l,A.e,A.h,0,l,l)
else if(k==null)j=D.fMv
else{w=B.E(B.d(k.a,l,l,l,l,l,l,A.L8,l,l,l),1)
v=x.p
w=B.a([B.A(B.a([w,B.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fwr,l,l,l)],v),A.l,l,A.e,A.h,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.D(A.uH,B.d(u,l,l,l,l,l,l,D.fzh,l,l,l),l))
w.push(A.cR)
w.push(B.d(k.b,l,l,l,l,l,l,K.Lb,l,l,l))
u=k.e
if(u.length!==0){t=A.aQ.j(0.12)
s=B.l(10)
w.push(B.p(l,B.d(u,l,l,l,l,l,l,D.fBS,l,l,l),A.f,l,l,new B.o(t,l,l,s,l,l,A.n),l,l,l,A.ig,A.cq,l,l,l))}w.push(A.am)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
t=B.d(t,l,l,l,l,l,l,A.lZ,l,l,l)
q=u[r]
s=s?A.c:A.aF
w.push(new B.D(A.Og,new B.c7(A.aM,A.e,A.h,A.E,l,A.p,l,0,B.a([t,A.bn,new B.by(1,A.ba,B.d(q,l,l,l,l,l,l,new B.G(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.I)(j),++p){o=j[p]
t=A.bh.j(0.3)
s=new B.aP(12,12)
s=B.p(l,B.d(o.a,l,l,l,l,l,l,A.VZ,l,l,l),A.f,l,l,new B.o(t,l,l,new B.be(s,s,s,s),l,l,A.n),l,l,l,l,A.hm,l,l,l)
t=A.c.j(0.07)
q=new B.aP(12,12)
A.d.u(w,B.a([A.P,new B.bK(A.a9,l,l,s,l),A.ax,B.p(l,B.d(o.b,l,l,l,l,l,l,D.fHH,l,l,l),A.f,l,l,new B.o(t,l,l,new B.be(q,q,q,q),l,l,A.n),l,l,l,l,A.bU,l,l,l)],v))}if(m.ax)w.push(D.ewK)
j=B.c9(B.x(w,A.E,l,A.e,A.h,0,A.p),A.t,m.ch,A.y,l,l,l,l,l,A.ah)}w=x.p
g=B.x(B.a([B.ajI(B.p(l,j,A.f,l,new B.aY(0,1/0,0,i),new B.o(h,l,f,g,l,l,A.n),l,l,l,D.bDT,A.ez,l,l,1/0),A.b0,A.ie),B.E(C.hmx(m.gXf(),l,l,m.e),1)],w),A.l,l,A.e,A.h,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new E.dZ("Ask about it",i,new C.ekB(m),l,A.bh,l),new E.dZ("Invent something new",!i,new C.ekC(m),l,A.bh,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dx3[p]
i.push(new E.dZ(n,!1,new C.ekD(m,n),l,A.bh,l))}f.push(new E.fd(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.deH[p]
i.push(new E.dZ(r,!1,new C.ekE(m,r),l,A.bh,l))}f.push(new E.fd(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),m.f,l,l,l,l,l,2,B.bz(l,new B.b6(4,B.l(16),A.a1),l,A.eV,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kq,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.ekF(m,k),l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,A.dk,!0,A.a7,l,A.ao,l,A.VO,l,l),1)
h=m.at
v=h&&j?D.bTX:A.e9
j=h&&j?"Ask":"Invent"
f.push(B.A(B.a([i,A.ae,new E.fD(v,j,new C.ekG(m,k),A.bh,l)],w),A.l,l,A.e,A.h,0,l,l))
return E.lG(A.bh,A.f6,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.x(f,A.l,l,A.e,A.N,0,A.p))}}
C.GY.prototype={}
C.vq.prototype={}
C.Xg.prototype={
S(){return new C.aGF(A.J,A.J,A.az,B.aR(x.S),$,A.bC,0,B.a([],x.X),null,null)}}
C.aGF.prototype={
gb_e(){var w,v,u,t=this,s=D.IK[t.cx],r=D.T6[t.cy],q=D.DT[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.e_(w,w.r,B.a3(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.aBP[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cF(p,0,new C.ezF())},
ga3P(){return D.IK[this.cx].d/this.gb_e()},
gaR9(){return 0.1*(D.IK[this.cx].d/0.9)/D.T6[this.cy].d},
Y(){this.a3()
this.mk()
C.cl4("rocket_lander").bG(new C.ezZ(this),x.k)},
c9C(){var w=this
w.ay=A.i.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cT.ai()*0.6
w.f=new B.r(0.15+A.cT.ai()*0.7,0.08)
w.r=new B.r((A.cT.ai()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
mE(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new C.eA_())
return}w=D.tt[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.i.D(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.r(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga3P()
v=v.a5(0,new B.r(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaR9())}if(m.dy){t=m.r
v=v.aJ(0,t.aL(0,t.gcJ()*6*D.aDS[m.d]))}t=m.r=m.r.a5(0,v.aL(0,d))
s=m.f=m.f.a5(0,t.aL(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new B.r(-t.a*0.4,t.b)
t=new B.r(A.i.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new B.r(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.DT[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b3K("rocket_lander",B.J(["unlocked",t],x.N,x.z))
C.JP("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga3P()/(D.tt[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.i.ad(m.ga3P()/(D.tt[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
G.dA(80,"",500,0,0.6,"noise")
B.fO()}}if(m.Q&&m.x>0&&A.o.F(A.i.bg(m.CW*20),2)===0)G.dA(90,"",70,0,0.12,"noise")
m.m(new C.eA0())},
aht(d,e,f,g,h){var w,v=null,u=B.d(d,v,v,v,v,v,v,D.fyL,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new E.dZ(e[w].a,f.$1(w),new C.ezH(this,g,w),v,h,v))
return new B.D(A.eO,B.x(B.a([u,A.cR,B.bZ(A.bI,s,A.br,v,6,6)],t),A.E,v,A.e,A.h,0,A.p),v)},
bIz(d){var w,v,u,t,s=this,r=null,q=s.ga3P()/(D.tt[s.d].b/9.81*0.28)>=1,p=A.i.V(1/s.gaR9()),o=D.aDS[s.d],n=B.l(24),m=d.c,l=B.K(m.j(0.6),A.r,1)
m=B.a([B.d("Build a rocket for "+d.a,r,r,r,r,r,r,B.m(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.ax,B.d(d.d+" Gravity here: "+B.w(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.ac9,r,r,r),A.T,s.aht("ENGINE: "+D.IK[s.cx].b,D.IK,new C.ezw(s),new C.ezx(s),A.cO),s.aht("FUEL TANK: "+D.T6[s.cy].b,D.T6,new C.ezy(s),new C.ezz(s),A.bc),s.aht("LANDING GEAR: "+D.DT[s.db].b,D.DT,new C.ezA(s),new C.ezB(s),A.aG),s.aht("EXTRAS (tap to add)",D.aBP,new C.ezC(s),new C.ezD(s),A.bh)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.h4v)
o=(q?A.bc:A.bX).j(0.14)
w=B.l(12)
v=A.i.ad(s.gb_e(),2)
u=A.i.ad(s.ga3P()/(D.tt[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.p(r,B.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.i.V(D.DT[s.db].d*100)+".",r,r,r,r,r,r,D.fzr,r,r,r),A.f,r,r,new B.o(o,r,r,w,r,r,A.n),r,r,r,A.ig,A.bU,r,r,r))
m.push(A.T)
m.push(new B.bK(A.z,r,r,new E.fD(A.oO,"Launch",new C.ezE(s),A.bc,r),r))
return B.as(B.p(r,B.c9(B.x(m,A.E,r,A.e,A.N,0,A.p),A.t,r,A.y,r,r,A.bS,r,r,A.ah),A.f,r,A.m3,new B.o(D.btw,r,l,n,r,r,A.n),r,r,r,A.bU,r,r,r,r),r,r,r)},
b0q(d,e,f,g){var w=null,v=f?A.cO:A.c.j(0.1),u=B.l(18),t=B.K(A.aT,A.r,1)
return B.mT(A.iT,B.p(w,B.W(d,A.c,w,w,w,30),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new C.ezt(e),new C.ezu(e),w,w,w,w,new C.ezv(e))},
b0p(d,e,f){return this.b0q(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cm(new C.ezS(s,D.tt[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.tt[w].a:"\ud83d\udd12"
o.push(new E.dZ(v,s.d===w,new C.ezT(s,w),r,D.tt[w].c,r))}v=B.a([s.b0p(F.arn,new C.ezU(s),s.y),A.bb,s.b0q(A.v3,new C.ezV(s),s.Q,130),A.bb,s.b0p(A.Q5,new C.ezW(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?A.aG:A.c.j(0.1)
t=B.l(18)
A.d.u(v,B.a([A.bb,B.az(r,B.p(r,D.bYa,A.f,r,r,new B.o(u,r,B.K(A.aT,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.ezX(s),r,r,r,r,r,r,!1,A.a4)],p))}return E.lG(A.cO,A.f6,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.x(B.a([new E.fd(o,"WORLD",r),B.A(v,A.l,r,A.b8,A.h,0,r,r)],p),A.l,r,A.e,A.N,0,A.p))}}
C.bjW.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=this.b,l=D.tt[m.d],k=a1.a,j=a1.b,i=0+k,h=0+j,g=$.S(),f=B.L(),e=l.c,d=B.ap(I.a_N,e,0.25)
d.toString
f.san(new B.a7(A.aZ,A.b4,A.x,B.a([F.aik,d],x.O),n,n).aD(0,new B.a4(0,0,i,h)))
a0.aF(new B.a4(0,0,i,h),f)
w=new B.e0()
w.cU(5)
for(v=0;v<70;++v){i=w.ai()
h=w.ai()
f=w.ai()
d=new B.ar(A.S,A.Q,A.V,A.X,A.U)
d.r=A.c.j(0.2+w.ai()*0.5).gp(0)
a0.O(new B.r(i*k,h*j*0.8),f*1.2+0.3,d)}u=j*0.88
i=x.v
h=B.a([],i)
t=new B.aH(g.r,A.aj,n,n,h)
t.E(new B.aZ(0,u+14))
s=new B.e0()
s.cU(2)
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
a0.af(t,g)
q=B.bW(new B.r(m.ax*k,u+10),8,m.ay*k)
g=B.bx(q,A.jy)
e=B.L()
e.r=A.bi.gp(0)
a0.aq(g,e)
e=B.bx(q.cq(2),A.nZ)
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
a0.jq(0,m.w)
k=m.as
if(k==="crashed"){m=B.L()
m.r=A.cO.j(0.6).gp(0)
m.y=W.OQ
a0.O(A.J,34,m)
f.restore()
return}if(m.Q&&m.x>0&&k==="flying"){k=h.r
p=new B.aH(k,A.aj,n,n,B.a([],i))
p.E(new B.aZ(-8,18))
p.E(new B.aq(0,44+Math.sin(m.CW*40)*8))
p.E(new B.aq(8,18))
p.E(new B.bw())
m=B.L()
m.r=A.aQ.gp(0)
a0.af(p,m)
k=new B.aH(k,A.aj,n,n,B.a([],i))
k.E(new B.aZ(-4,18))
k.E(new B.aq(0,32))
k.E(new B.aq(4,18))
k.E(new B.bw())
m=B.L()
m.r=A.c.gp(0)
a0.af(k,m)}m=h.r
o=new B.aH(m,A.aj,n,n,B.a([],i))
o.E(new B.aZ(0,-26))
o.E(new B.ce(14,-10,11,18))
o.E(new B.aq(-11,18))
o.E(new B.ce(-14,-10,0,-26))
o.E(new B.bw())
k=B.L()
k.san(F.auf.aD(0,D.fcR))
a0.af(o,k)
k=B.L()
k.r=A.aG.gp(0)
a0.O(H.vE,5,k)
k=new B.aH(m,A.aj,n,n,B.a([],i))
k.E(new B.aZ(-11,6))
k.E(new B.aq(-20,20))
k.E(new B.aq(-11,18))
k.E(new B.bw())
j=B.L()
j.r=A.aA.gp(0)
a0.af(k,j)
i=new B.aH(m,A.aj,n,n,B.a([],i))
i.E(new B.aZ(11,6))
i.E(new B.aq(20,20))
i.E(new B.aq(11,18))
i.E(new B.bw())
m=B.L()
m.r=A.aA.gp(0)
a0.af(i,m)
f.restore()},
aE(d){return!0}}
C.aOF.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.bAE.prototype={
t(){var w,v,u
for(w=this.h9$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h8$
w===$&&B.c()
w.t()
this.bAt()}}
C.aUJ.prototype={}
C.a4A.prototype={}
C.bcU.prototype={}
C.VK.prototype={
S(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.ev(["skin"],x.N),o=new Float32Array(0)
return new C.aF6(w,v,u,t,s,r,q,new B.cx(null,x.A),p,D.Mc,D.Mc,A.az,A.cT,o,new Int32Array(0),$,A.bC,0,B.a([],x.X),null,null)}}
C.aF6.prototype={
Y(){var w=this
w.a3()
w.mk()
w.as=new C.c7p(w.gciK())
new C.dQh(w).$0()
return},
t(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a1(0)
v.d=null}this.bzv()},
ciL(d){var w,v=this
if(v.c==null)return
w=J.a8(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.f9(0,B.J(["t","init","data",$.hwK],x.N,x.z))
v.at=!0
v.ay=""
v.aBf()
break
case"parts":v.m(new C.dPS(v))
break
case"pick":v.m(new C.dPT(v,d))
break
case"shot":v.ajn(B.w(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+B.w(w.h(d,"text")))
if(v.c!=null&&!v.ax)v.m(new C.dPU(v))
break}},
aBf(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.azG[q.cx]
v=new C.dPV()
u=q.ch
u=B.C(u,B.a3(u).k("ci.E"))
A.d.ff(u)
t=x.N
s=B.J(["layers",u,"skinMode",q.CW,"tone","#"+B.w(v.$1(w.b))+B.w(v.$1(w.c))+B.w(v.$1(w.d)),"sel",q.cy,"bpm",A.i.V(q.k4),"spin",q.go],t,x.cK)
r=A.W.av(s,null)
if(r===q.ay)return
q.ay=r
v=q.as
if(v!=null){u=B.T(t,x.z)
u.n(0,"t","state")
u.u(0,s)
v.f9(0,u)}},
ajn(d){return this.czM(d)},
czM(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ajn=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cL.aN(A.a.b4(d,A.a.cn(d,",")+1))
w=6
return B.b(B.axm(B.a([B.cHr(r,"image/png","body.png")],x.fH),null,"Made in NGMY Core Protocol"),$async$ajn)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.L(x.q).f.T(I.aVm)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ajn,v)},
aAE(d){var w=d.b
if(w==="skin")return this.CW>0
return this.ch.q(0,w)},
mE(d){var w,v=this
if(v.d==null)return
w=(v.k3+=d)*v.k4/60
if(v.ok&&v.ch.q(0,"organ")&&A.i.bg(w)!==A.i.bg(v.p1)){E.XH("kick",0,0.4)
v.US(170,new C.dQi())}v.p1=w
return},
aeX(d){var w,v,u,t,s=this
s.m(new C.dPW(s,d))
if(d==null){s.fy=D.Mc
s.fr=1
w=s.as
if(w!=null)w.f9(0,B.J(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.U(w).k("Y<1>")
u=B.C(new B.Y(w,new C.dPX(d),v),v.k("M.E"))
t=A.d.gH(u).b
if(t!=="skin"&&!s.ch.q(0,t)){s.ch.I(0,t)
if(s.CW===2)s.CW=1}s.aBf()
w=s.as
if(w!=null)w.f9(0,B.J(["t","focus","group",d],x.N,x.z))
s.id=0
s.cCf(t,d)
return},
cCf(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){E.XH("kick",0,0.8)
this.US(260,new C.dPY())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")G.dA(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.US(w*70,new C.dPZ(this))
else if(A.a.q(e,"intestine")||e==="Stomach")G.dA(110,"",360,0.7,0.3,"saw")
else E.hbN("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":G.dA(210+e.length*4,"",80,0.6,0.55,"tri")
G.dA(2400,"",20,0,0.3,v)
break
case"muscle":G.dA(70,"",150,1,0.6,"sine")
break
case"vessel":G.dA(300,"",380,0.4,0.22,v)
E.XH("kick",0,0.3)
break
default:E.hbN("organic",2+A.o.F(e.length,6),200,0.4)}},
cGX(d){this.m(new C.dQ0(this,d))},
b0J(){var w,v,u,t,s,r,q,p=this,o=B.aR(x.N)
for(w=p.d.e,v=w.length,u=p.ch,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
if(p.aAE(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.I(0,s.a)}q=B.C(o,o.$ti.k("ci.E"))
w=q.length
if(w===0)return
p.p3=q[p.RG.aw(w)]
p.R8=""},
c_v(d){var w,v,u=this
u.id=0
if(u.p2&&u.p3!=null){if(d==null)return
w=d===u.p3
u.m(new C.dPP(u,w,d))
v=x.t
C.JP("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.US(1100,new C.dPQ(u))
return}if(d==null){if(u.cy!=null)u.aeX(null)
return}u.aeX(d)},
c37(d,e){var w,v=this,u=null,t=B.l(18),s=B.K(A.c4.j(0.5),A.r,1)
if(v.p2){w=v.p3
w=B.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p4+"\n"+v.R8,u,u,u,u,u,u,D.fuO,u,u,u)}else if(d==null||e==null)w=D.fJS
else{w=x.p
w=B.A(B.a([B.E(B.x(B.a([B.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hu,u,u,u),A.cR,B.d(e.b,u,u,u,u,u,u,K.Lb,u,u,u)],w),A.E,u,A.e,A.N,0,A.p),1),B.aI(u,u,u,u,D.c_N,u,u,u,new C.dPR(v),u,u,u,u,"Back to the whole body",A.cg)],w),A.E,u,A.e,A.h,0,u,u)}return B.p(u,w,A.f,u,u,new B.o(I.YY,u,s,t,u,u,A.n),u,u,u,u,S.amR,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:D.dIp.h(0,g)
i.aBf()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.dp9
u=v.length
t=i.ch
s=0
for(;s<v.length;v.length===u||(0,B.I)(v),++s){r=v[s]
if(i.aAE(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.q(w,q))w.push(q)}v=x.p
u=B.a([B.aI(h,h,h,h,I.oR,h,h,h,new C.dQ7(i),h,h,h,h,"Share",h)],v)
q=B.a([],v)
p=i.as
if((p==null?h:p.b!=null)===!0){p=p.b
q.push(p==null?A.bM:B.BY(h,A.pS,p))}p=i.ax
o=p?0:1
q.push(new B.dt(p,B.xx(B.p(A.z,B.x(D.dyD,A.l,h,A.e,A.N,0,A.p),A.f,h,h,D.b8d,h,h,D.hx6,h,h,h,h,h),A.b0,A.n0,o),h))
q=B.x(B.a([B.E(new B.an(A.a0,h,A.b1,A.t,q,h),1),new B.D(F.amy,i.c37(g,f),h)],v),A.l,h,A.e,A.h,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){n=D.dgj[s]
o=n.a
m=o==="skin"
if(m){l=i.CW
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=n.b
o=m?i.CW>0:t.q(0,o)
p.push(new E.dZ(l,o,new C.dQ8(i,n),n.c,A.c4,h))}p=B.a([new E.fd(p,h,h)],v)
if(!i.p2&&w.length!==0){o=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.I)(w),++s){k=w[s]
o.push(new E.dZ(k,k===i.cy,new C.dQ9(i,k),h,A.aQ,h))}p.push(new E.fd(o,"FIND",h))}if(t.q(0,"organ")){o=i.k4
p.push(E.iX(A.bX,""+A.i.V(o)+" beats/min","Heart rate",180,40,new C.dQa(i),o))}if(i.CW>0&&t.a===0){o=B.a([],v)
for(j=0;j<5;++j)o.push(new E.G6(D.azG[j],i.cx===j,new C.dQb(i,j),!1,h))
p.push(new E.fd(o,"SKIN",h))}o=i.go
m=i.p2
l=m?"Quiz on":"Quiz"
v=B.a([new E.dZ("Spin",o,new C.dQc(i),D.aql,A.aG,h),new E.fD(A.oJ,"Reset view",new C.dQd(i),A.c,h),new E.dZ(l,m,new C.dQe(i),A.I3,A.aQ,h)],v)
if(t.q(0,"organ"))v.push(new E.dZ("Heartbeat sound",i.ok,new C.dQf(i),A.oN,A.bX,h))
p.push(new E.fd(v,h,h))
return E.lG(A.c4,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.x(p,A.l,h,A.e,A.N,0,A.p))}}
C.aNI.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.aNJ.prototype={
t(){var w,v,u
for(w=this.h9$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h8$
w===$&&B.c()
w.t()
this.bzu()}}
C.c7p.prototype={
kW(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aL(e,"</script","<\\/script")
v=$.hDa
$.hDa=v+1
u="ngmy-body-viewer-"+v
$.xt()
$.q2().pl(u,new C.c7q(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fC(v,"message",new C.c7r(t),!1,x.gA)
t.b=u},
f9(d,e){var w,v
try{w=this.c
if(w!=null){w=B.RA(w.contentWindow)
if(w!=null)J.ajx(w,e,"*")}}catch(v){}}}
C.yJ.prototype={}
C.D3.prototype={}
C.nQ.prototype={}
C.bdF.prototype={}
C.VR.prototype={
S(){var w=x.N,v=x.y,u=x.S
return new C.aF8(B.T(w,x.a2),B.a([],x.cB),B.T(w,v),B.T(w,v),B.T(w,u),A.az,A.J,A.J,B.aR(u),$,A.bC,0,B.a([],x.X),null,null)}}
C.aF8.prototype={
Y(){var w=this
w.a3()
w.mk()
w.adV()
$.aU.x1$.push(new C.dRX(w))},
adV(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$adV=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$adV)
case 6:q=e.tW("ngmy_circuit_passed_v1")
r=q==null?A.Z:q
if(s.c!=null)s.m(new C.dRB(s,r))
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
aeg(d){return this.c79(d)},
c79(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$aeg=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.I(0,d)
u=3
w=6
return B.b(B.aA(),$async$aeg)
case 6:r=f
q=s.cx
p=B.a3(q).k("kc<ci.E,n>")
q=B.C(new B.kc(q,new C.dRE(),p),p.k("M.E"))
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
return B.i($async$aeg,v)},
azj(d,e,f,g){var w="c"+this.y++,v=new C.D3(w,e,f,g)
this.d.n(0,w,v)
return v},
mU(d,e,f){return this.azj(0,e,f,0)},
adf(d,e){var w
if(D.Ak.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a5(0,new B.r(-36,w))},
um(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aVl(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fa$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.dn(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.ed(m,D.cZY[A.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.um(p,0)&&n.um(p,1)
break
case"or":p=q.a
o=n.um(p,0)||n.um(p,1)
break
case"xor":p=q.a
o=n.um(p,0)!==n.um(p,1)
break
case"nand":p=q.a
o=!(n.um(p,0)&&n.um(p,1))
break
case"nor":p=q.a
o=!(n.um(p,0)||n.um(p,1))
break
case"not":o=!n.um(q.a,0)
break
default:o=n.um(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bSZ(){return this.aVl(null)},
mE(d){var w,v,u,t,s,r,q,p,o,n=this
n.bSZ()
if(!n.ax)return
for(w=n.d,w=new B.b7(w,B.a3(w).k("b7<2>")).gae(0),v=new B.eJ(w,new C.dRY()),u=n.f,t=n.w,s=0;v.C();){r=w.gP(0).a
if(u.h(0,r)===!0){q=n.fa$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fa$)
o=s+1
G.dA(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
azk(d){var w=this
w.d.a8(0)
A.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
ml(d,e){var w=this.x
return new B.r(d*w.a,e*w.b)},
avt(d){var w=this
if(w.x.A(0,A.az)){$.aU.x1$.push(new C.dRz(w,d))
return}w.m(new C.dRA(w,d))},
cCx(d){this.m(new C.dRF(this,d,$.bHx()[d]))},
cbX(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bHx()[a0]
v=d.d
u=B.a3(v).k("b7<2>")
t=u.k("Y<M.E>")
s=t.k("M.E")
r=B.C(new B.Y(new B.b7(v,u),new C.dRu(),t),s)
A.d.b_(r,new C.dRv())
q=B.C(new B.Y(new B.b7(v,u),new C.dRw(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new C.dRx(d,w))
return}u=d.r
p=B.dL(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dB(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.h0(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aVl(0)
h=m.h(0,A.d.gH(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.lo(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aM(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a8(0)
u.u(0,p)
d.m(new C.dRy(d,o,a0))},
aAa(d){var w,v,u,t,s=this.d,r=B.a3(s).k("b7<2>")
s=B.C(new B.b7(s,r),r.k("M.E"))
r=B.U(s).k("ds<1>")
s=new B.ds(s,r)
s=new B.bQ(s,s.gJ(0),r.k("bQ<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
clb(d){var w,v,u,t,s,r=this.d,q=B.a3(r).k("b7<2>")
r=B.C(new B.b7(r,q),q.k("M.E"))
q=B.U(r).k("ds<1>")
r=new B.ds(r,q)
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
c30(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.dn(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.Ak.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.adf(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.y(p,o)
s=l}}}return t},
bRI(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.adf(p,o)
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
cbZ(d){var w,v,u,t=this,s=t.aAa(d)
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
G.dA(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new C.dRG())
return}u=t.bRI(d)
if(u!=null)t.m(new C.dRH(t,u))
else t.m(new C.dRI(t))},
ay6(d){return this.c68(d)},
c68(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$ay6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.aAa(d)
if(s==null){w=1
break}B.ju()
t.m(new C.dRD(t,s))
case 1:return B.h(u,v)}})
return B.i($async$ay6,v)},
bEn(d){if(this.x.A(0,A.az))return
this.m(new C.dRt(this,d,A.cT))
B.eZ()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bHx()[g]
g=x.p
v=B.a([B.aI(h,h,h,h,B.W(i.ax?A.oN:X.tp,A.ab,h,h,h,21),h,h,h,new C.dRR(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.l(16)
s=A.cs.j(0.14)
r=B.K(A.cs.j(0.5),A.r,1)
q=B.a([B.d("Challenge: "+w.a,h,h,h,h,h,h,D.ftX,h,h,h),B.d(w.b,h,h,h,h,h,h,A.Wd,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.D(A.ln,B.d(p,h,h,h,h,h,h,B.m(h,h,i.CW?A.bc:A.f_,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.p(h,B.A(B.a([B.E(B.x(q,A.E,h,A.e,A.h,0,A.p),1),B.bI(D.fVx,h,i.gcbW(),B.bo(A.cs,h,h,h,h,h,h,h,h,h,h,A.cg))],g),A.l,h,A.e,A.h,0,h,h),A.f,h,h,new B.o(s,h,r,t,h,h,A.n),h,h,h,T.Oo,D.bEB,h,h,1/0))}u.push(B.E(B.cm(new C.dRS(i)),1))
if(f!=null){t=B.l(14)
s=A.c.j(0.06)
r=f.b
u.push(B.p(h,B.d(D.Ak.h(0,r).a+": "+D.Ak.h(0,r).e,h,h,h,h,h,h,A.u0,h,h,h),A.f,h,h,new B.o(s,h,h,t,h,h,A.n),h,h,h,A.a0X,A.bU,h,h,1/0))}u=B.x(u,A.l,h,A.e,A.h,0,A.p)
t=B.a([],g)
for(s=D.Ak.gdP(D.Ak),s=s.gae(s);s.C();){r=s.gP(s)
q=new B.aP(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ay(o.j(0.5),1,A.r,-1)
t.push(B.az(h,B.p(h,B.x(B.a([B.W(p.b,o,h,h,h,20),A.bF,B.d(p.a,h,h,h,h,h,h,D.aXn,h,h,h)],g),A.l,h,A.e,A.N,0,A.p),A.f,h,h,new B.o(n,h,new B.bG(m,m,m,m),new B.be(q,q,q,q),h,h,A.n),h,h,h,A.f1,Am.Ol,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dRT(i,r),h,h,h,h,h,h,!1,A.a4))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dtI[l]
s.push(new E.fD(A.Q6,k.b,new C.dRU(i,k),A.cs,h))}s.push(new E.fD(I.wS,"Clear",new C.dRV(i),A.bX,h))
r=B.a([],g)
for(j=0;q=$.bHx(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?A.ed:A.lS
o=i.ay
n=i.cx.q(0,j)?A.bc:A.bt
r.push(new E.dZ(q.a,o===j,new C.dRW(i,j),p,n,h))}return E.lG(A.cs,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.x(B.a([new E.fd(t,"PARTS",h),new E.fd(s,"TRY",h),new E.fd(r,"TASKS",h)],g),A.l,h,A.e,A.N,0,A.p))}}
C.bdX.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3=a6.a,a4=a6.b
$.S()
w=B.L()
w.r=D.agy.gp(0)
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
i=a3.adf(l,o.c)
h=s.h(0,n)===!0
n=$.S()
g=B.a([],r)
f=new B.aH(n.r,A.aj,a2,a2,g)
g.push(new B.aZ(j,k))
f.ab()
n=i.a
e=Math.max(40,Math.abs(n-j)*0.5)
d=i.b
d=new B.kq(j+e,k,n-e,d,n,d)
g.push(d)
n=f.f
if(n!=null)d.ak(n)
f.ab()
if(h){n=new B.ar(A.S,A.Q,A.V,A.X,A.U)
n.b=A.aa
n.c=9
n.r=A.bt.j(0.28).gp(0)
n.y=N.oA
a5.af(f,n)}n=new B.ar(A.S,A.Q,A.V,A.X,A.U)
n.b=A.aa
n.c=3.2
n.d=A.bG
n.r=(h?A.ex:A.by).gp(0)
a5.af(f,n)}a0=a3.as
if(a0!=null&&q.h(0,a0)!=null){a1=q.h(0,a0).c.a5(0,D.JU)
i=a3.at
a3=i.a
a4=a1.a
e=Math.max(40,Math.abs(a3-a4)*0.5)
r=new B.aH($.S().r,A.aj,a2,a2,B.a([],r))
w=a1.b
r.E(new B.aZ(a4,w))
s=i.b
r.E(new B.kq(a4+e,w,a3-e,s,a3,s))
s=B.L()
s.b=A.aa
s.c=3
s.r=A.ab.gp(0)
a5.af(r,s)}for(a3=new B.dn(q,q.r,q.e);a3.C();)this.cbY(a5,a3.d)},
cbY(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.Ak.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.bW(a0.c,64,64)
s=B.bx(t,A.jQ)
r=w.cy===v
q=s.eD(A.cz)
$.S()
p=B.L()
p.r=A.w.j(0.55).gp(0)
p.y=A.n4
d.aq(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.L()
p.san(new B.bS(A.z,0.5,A.x,g,0,B.a([e.c.j(0.6),A.L],x.O),g,g).aD(0,B.bV(a0.c,52)))
d.O(q,52,p)}q=s.eD(A.cK)
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
q.san(new B.a7(A.aZ,A.b4,A.x,B.a([p,m],x.O),g,g).aD(0,t))
d.aq(s,q)
q=B.L()
q.b=A.aa
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aq(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.oL:D.bUu}else l=e.b
k=C.hdE(B.lo(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a4(d,v.aJ(0,new B.r(p/2,q.gba(q)/2)))
j=C.hdE(e.a,10.5,A.c,g,g,A.H)
j.a4(d,a0.c.a5(0,new B.r(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.hdE(f,9,u?A.ex:A.bV,g,g,A.u)
i.a4(d,a0.c.a5(0,new B.r(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b1n(d,w.adf(a0,h),o)
this.b1n(d,a0.c.a5(0,D.JU),o)},
b1n(d,e,f){var w
$.S()
w=B.L()
w.r=D.agy.gp(0)
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
C.aNN.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.bAo.prototype={
t(){var w,v,u
for(w=this.h9$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h8$
w===$&&B.c()
w.t()
this.bzz()}}
C.Ol.prototype={
S(){return new C.aFp(B.n2(0,null,null))}}
C.Ll.prototype={
a7(){return"_UnfoldStyle."+this.b}}
C.B6.prototype={}
C.aFp.prototype={
Y(){this.a3()
B.bN(A.qB,C.isD(),x.H)},
cc3(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gco(0).at
v.toString
w.f=v}w.m(new C.dY8(w,e))},
c4X(){var w=this
w.e.t()
w.e=B.n2(w.f,null,null)
w.m(new C.dY7(w))},
t(){this.e.t()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null,s=t&&B.P(d).ax.a===A.dm?A.c:A.c5
return B.oU(t,B.c4(v,s,t?new C.bui(w.e,w.gcc2(w),new C.dY9(d),v):new C.aJH(u,new B.bf(u.b,x.W)),v,!1,!1,v,!1),new C.dYa(w,u),x.K)}}
C.bvW.prototype={}
C.bui.prototype={
b1o(d,e,f){var w=null,v=B.d(d,w,w,w,w,w,w,B.m(w,w,f?A.bA:A.c,w,w,w,w,w,w,w,w,12.5,w,w,A.u,w,w,!0,w,1.6,w,w,w,w,w,w),w,w,w)
return new B.D(S.a1l,B.x(B.a([v,A.bF,B.d(e,w,w,w,w,w,w,B.m(w,w,f?A.cy:A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.E,w,A.e,A.h,0,A.p),w)},
B(d){var w,v,u,t=this,s=null,r=B.P(d).ax.a===A.dm,q=B.aE(d,A.dD,x.w).w,p=B.aI(s,s,s,s,B.W(A.eK,r?A.bA:A.ab,s,s,s,20),s,s,D.hxz,t.e,s,s,s,s,s,s)
if(r)w=new B.o(A.c,s,s,B.l(14),A.IN,s,A.n)
else{w=B.a([A.aG.j(0.22),A.aG.j(0.06)],x.O)
v=B.l(14)
w=new B.o(s,s,B.K(A.aG.j(0.75),A.r,1.6),v,B.a([new B.ab(0,A.G,A.aG.j(0.22),A.J,8)],x.V),new B.a7(A.ay,A.aC,A.x,w,s,s),A.n)}v=B.d("\ud83e\uddea Core Protocol",s,s,s,s,s,s,B.m(s,s,r?A.bA:A.c,s,s,s,s,s,s,s,s,15,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)
u=x.p
w=B.A(B.a([p,B.E(B.as(B.p(s,B.x(B.a([v,B.d("Play, make things, keep them.",s,s,s,s,s,s,B.m(s,s,r?A.cy:A.aR,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)],u),A.l,s,A.e,A.N,0,A.p),A.f,s,s,w,s,s,D.hxE,s,A1.anm,s,s,s),s,s,s),1),A.tT],u),A.l,s,A.e,A.h,0,s,s)
v=t.b1o("STUDIOS","Play, make things, and keep what you make",r)
$.bHy()
return B.bm(!1,B.x(B.a([B.E(B.w6(0,s,A.t,t.c,A.y,s,s,s,s,s,!1,s,A.ah,!1,B.a([new B.nN(new B.Q(8,q.r.b+6,8,4),new B.m7(w,s),s),new B.m7(v,s),new B.nN(A.hZ,B.Q_(new B.oX(new C.f9L(d),9,!0,!0,!0,0,B.ts(),s),D.aVb),s),new B.m7(t.b1o("SCENES","Each one is a studio too: change the style, colours and words",r),s),new B.nN(D.bEK,B.Q_(new B.oX(new C.f9M(t),6,!0,!0,!0,0,B.ts(),s),D.aVb),s)],u)),1)],u),A.l,s,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!1)}}
C.agk.prototype={
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m.d
if(B.P(d).ax.a===A.dm){w=B.l(20)
v=(A.o.ar(o.c,3)&1)===0
u=B.a7y(v?A.aG:A.bh,20)
v=v?A.aG:A.bh
return B.aG(!1,A.a3,!0,n,B.aM(!1,w,!0,B.eC(B.x(B.a([new B.VP(v,44,m.c,n,n),A.P,B.d(m.a,n,2,A.a2,n,n,n,D.fA9,A.K,n,n),A.cR,B.d(m.b,n,2,A.a2,n,n,n,D.fCZ,A.K,n,n)],x.p),A.l,n,A.b8,A.h,0,A.p),n,u,n,A.CP,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}w=B.l(20)
v=B.l(20)
u=B.ap(K.mc,l,0.3)
u.toString
t=x.O
u=B.a([u,D.ajT],t)
s=B.K(l.j(0.6),A.r,1.2)
r=x.V
q=B.a([new B.ab(-4,A.G,l.j(0.22),A.J,14)],r)
p=B.ap(l,A.w,0.45)
p.toString
t=B.a([l,p],t)
r=B.a([new B.ab(0,A.G,l.j(0.5),A.J,12)],r)
return B.aG(!1,A.a3,!0,n,B.aM(!1,w,!0,B.eC(B.x(B.a([B.p(n,B.W(m.c,A.c,n,n,n,24),A.f,n,n,new B.o(n,n,n,n,r,new B.a7(A.ay,A.aC,A.x,t,n,n),A.a6),n,44,n,n,n,n,n,44),A.P,B.d(m.a,n,2,A.a2,n,n,n,B.m(n,n,l,n,n,n,n,n,n,n,n,10.5,n,n,A.u,n,1.15,!0,n,0.5,n,n,n,n,n,n),A.K,n,n),A.cR,B.d(m.b,n,2,A.a2,n,n,n,B.m(n,n,A.c.j(0.6),n,n,n,n,n,n,n,n,9.5,n,n,n,n,1.2,!0,n,n,n,n,n,n,n,n),A.K,n,n)],x.p),A.l,n,A.b8,A.h,0,A.p),n,new B.o(n,n,s,v,q,new B.a7(A.ay,A.aC,A.x,u,n,n),A.n),n,A.CP,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}}
C.afb.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.d,j=k.d,i=B.P(d).ax.a===A.dm,h=(A.o.ar(this.c,3)&1)===0?A.aG:A.bh,g=B.l(20)
if(i)w=B.a7y(h,20)
else{w=B.l(20)
v=B.ap(K.mc,A.d.gH(j),0.24)
v.toString
v=B.a([v,D.ajT],x.O)
v=new B.o(l,l,B.K(A.d.gH(j).j(0.35),A.r,1),w,B.a([new B.ab(0,A.G,A.w.j(0.4),A.cz,12)],x.V),new B.a7(A.ay,A.aC,A.x,v,l,l),A.n)
w=v}v=x.p
u=B.a([],v)
for(t=k.e,s=x.V,r=x.O,q=0;q<3;++q){p=q===2?0:4
o=new B.aP(6,6)
if(i){n=B.ap(h,A.c,0.1)
n.toString
n=B.a([n,B.VQ(h,!0)[1]],r)}else n=B.a([A.d.gH(j),A.d.gal(j)],r)
m=i?l:B.a([new B.ab(0,A.G,A.w.j(0.45),A.a9t,0)],s)
u.push(B.p(l,B.W(t[q],A.c,l,l,l,11),A.f,l,l,new B.o(l,l,l,new B.be(o,o,o,o),m,new B.a7(A.a5,A.a9,A.x,n,l,l),A.n),l,17,l,new B.Q(q*4,0,(2-q)*4,p),l,l,l,l))}u=B.x(u,A.l,l,A.e,A.N,0,A.p)
if(i)t=A.bA
else{t=B.ap(A.d.gH(j),A.d.gal(j),0.4)
t.toString}t=B.d(k.b,l,2,A.a2,l,l,l,B.m(l,l,t,l,l,l,l,l,l,l,l,10.5,l,l,A.u,l,1.2,!0,l,0.6,l,l,l,l,l,l),A.K,l,l)
return B.aG(!1,A.a3,!0,l,B.aM(!1,g,!0,B.eC(B.x(B.a([new B.a5(58,l,u,l),A.T,t,A.ax,B.W(A.Du,i?B.VQ(h,!0)[1]:A.d.gH(j),l,l,l,18)],v),A.l,l,A.b8,A.h,0,A.p),l,w,l,A.CP,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,this.e,l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.ai)}}
C.Rh.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ap(A.d.gal(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=B.ao(-8,new B.bM(new B.o(h,j,j,B.l(22),j,j,A.n),A.bk,j,j),j,j,2,2,8,j)
u=B.l(22)
t=k.y
s=x.V
r=B.a([new B.ab(0,A.G,A.w.j(0.55),A.JR,26),new B.ab(-6,A.G,A.d.gH(i).j(0.1+0.4*t),A.J,30)],s)
q=B.l(22)
p=B.ap(A.d.gH(i),A.c,0.14)
p.toString
o=A.d.gH(i)
n=A.d.gal(i)
i=B.ap(A.d.gal(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bR(0,new B.bM(new B.o(j,j,j,j,j,new B.a7(A.ay,A.aC,A.x,B.a([p,o,n,i],m),D.dzF,j),A.n),A.bk,j,j),0,0,0),B.ao(j,new B.bM(new B.o(j,j,j,j,j,new B.a7(A.aZ,A.b4,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bk,j,j),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bR(0,B.b5(j,j,j,new C.bvj(i,j),A.az),0,0,0))
i=A.c.j(0.16)
p=B.K(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ab(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=B.p(j,B.W(k.f,A.c,j,j,j,28),A.f,j,j,new B.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=B.a([B.d(k.r,j,j,j,j,j,j,D.fwh,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.u(p,B.a([A.ax,B.d(i,j,1,A.a2,j,j,j,B.m(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a8,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.KI)
p.push(B.p(j,j,A.f,j,j,new B.o(A.c.j(0.28),j,j,B.l(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new B.D(A.hc,B.A(B.a([s,A.eu,B.E(B.x(p,A.E,j,A.e,A.N,0,A.p),1)],l),A.l,j,A.e,A.h,0,j,j),j))
i=k.x
if(i>0)m.push(B.bR(0,new B.dt(!0,B.eb(j,A.w.j(A.i.D(i*0.6,0,0.7)),!0),j),0,0,0))
i=B.l(22)
m.push(B.bR(0,new B.dt(!0,new B.bM(new B.o(j,j,B.K(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.bk,j,j),j),0,0,0))
return new B.a5(w,v,new B.an(A.a0,j,A.ad,A.f,B.a([h,B.bR(0,new B.bM(new B.o(j,j,j,u,r,j,A.n),A.bk,B.bu(q,new B.an(A.a0,j,A.ad,A.t,m,j),A.aq),j),0,0,0)],l),j),j)}}
C.bvj.prototype={
a4(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a4(r,-10,s,w)
u=d.c
J.br(u.save())
u.translate(v.gbE().a,v.gbE().b)
d.jq(0,0.35)
t=B.bW(A.J,(w- -10)*1.6,s-r)
$.S()
s=B.L()
s.san(new B.a7(A.a5,A.a9,A.x,B.a([A.L,A.c.j(0.3),A.L],x.O),null,null).aD(0,t))
d.aF(t,s)
u.restore()},
aE(d){return d.b!==this.b}}
C.buP.prototype={
B(d){var w=null,v=B.l(22),u=B.a([D.brm,D.aiX],x.O),t=this.e,s=B.K(A.d.gH(t).j(0.4),A.r,1.2),r=B.a([new B.ab(0,A.G,A.w.j(0.5),A.kF,24)],x.V),q=B.l(22),p=A.d.gH(t)
return new B.a5(this.c,this.d,new B.bM(new B.o(w,w,s,v,r,new B.a7(A.ay,A.aC,A.x,u,w,w),A.n),A.bk,B.bu(q,B.b5(B.as(B.W(A.jL,A.d.gH(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.bcC(p,w),A.az),A.aq),w),w)}}
C.bcC.prototype={
a4(d,e){var w,v,u,t,s,r
$.S()
w=B.L()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=0;s<u;s+=18)d.ah(new B.r(s,0),new B.r(s,t),w)
for(r=0;r<t;r+=18)d.ah(new B.r(0,r),new B.r(u,r),w)
u=e.ej(A.J)
$.S()
t=B.L()
t.b=A.aa
t.c=1.4
t.r=v.j(0.35).gp(0)
d.O(u,30,t)},
aE(d){return!1}}
C.aJH.prototype={
S(){return new C.aJI(new B.cx(null,x.A),null,null)}}
C.aJI.prototype={
guM(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,D.bC_,null,1,null,v)
w.cK(0)
v.d!==$&&B.bD()
v.d=w
u=w}return u},
ga_N(){var w,v=this,u=v.e
if(u===$){w=B.bn(null,A.hb,null,1,null,v)
w.f1(0,!0)
v.e!==$&&B.bD()
v.e=w
u=w}return u},
gazl(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gcc0(){var w=this.w
if(w===$){w=B.C(this.a.c.d,x.G)
this.w=w}return w},
gaYD(){var w=this.x
if(w===$){w=B.C(this.a.c.e,x.Z)
this.x=w}return w},
gaZq(){var w=this.y
if(w===$){w=B.C(this.a.c.f,x.N)
this.y=w}return w},
gbaj(){var w=this.z
if(w===$){w=B.C(this.a.c.r,x.N)
this.z=w}return w},
Y(){this.a3()
var w=this.guM()
w.dm()
w.dV$.I(0,this.gcCg())},
cCh(){var w,v,u,t,s,r,q,p=this,o=p.guM().x
o===$&&B.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gazl().a){case 0:w=D.nU
break
case 1:w=D.vn
break
case 2:w=D.a5X
break
case 3:w=D.nU
break
case 4:w=D.dlP
break
case 5:w=D.vn
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.aeb)r=0.09
else r=s===D.aec?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){G.dA(260+90*v,"",260,1.6,0.18,"tri")
u=D.cd3[v]
E.my("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.JP("bell",D.clV,1400,0.35)}}p.ax=o},
t(){this.guM().t()
this.ga_N().t()
this.bBp()},
afn(){var w=this
w.guM().d1u(0,B.dw(0,0,0,A.i.V(11e3/w.Q),0,0))
w.m(new C.f9r(w))},
cng(){this.guM().bQ(0)
this.m(new C.f9q(this))},
afm(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$afm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gaZq(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){q=t[r]
l.push(new B.au(new B.ba(q,A.b6,A.aP),$.ax()))}m=B.a([],m)
for(t=u.gbaj(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){p=t[r]
m.push(new B.au(new B.ba(p,A.b6,A.aP),$.ax()))}o=B.C(u.gaYD(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bT(K.mc,null,new C.f9p(u,l,m,o),t,!0,!0,!0,A.lX,!1,!1,x.H),$async$afm)
case 2:l=B.C(l,x.bO)
A.d.u(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.U$=$.ax()
n.R$=0}return B.h(null,v)}})
return B.i($async$afm,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gazl(),f=i.a.c,e=f.b,d=i.gcc0(),a0=new C.B6(g,e,f.c,d,i.gaYD(),i.gaZq(),i.gbaj())
f=B.ap(A.d.gH(d),A.d.gal(d),0.4)
f.toString
g=x.p
w=B.a([B.aI(h,h,h,h,B.W(i.at?A.oN:X.tp,A.ab,h,h,h,21),h,h,h,new C.f9z(i),h,h,h,h,"Sound",h),B.aI(h,h,h,h,D.c3u,h,h,h,i.gcc1(),h,h,h,h,"Edit words and pictures",h),B.aI(h,h,h,h,I.oR,h,h,h,new C.f9A(i,a1),h,h,h,h,"Share",h)],g)
v=B.a([B.c6(i.ga_N(),new C.f9B(i,a0),h),B.cm(new C.f9C(i,a0))],g)
u=i.as
t=u?i.gcnf():i.gcc4()
u=u?D.bTI:A.tm
s=B.ap(A.d.gH(d),A.d.gal(d),0.4)
s.toString
t=B.A(B.a([B.aI(h,h,h,h,B.W(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.cg),B.E(B.c6(i.guM(),new C.f9D(i,a1,a0),h),1),B.aI(h,h,h,h,D.c_D,h,h,h,new C.f9E(i),h,h,h,h,"Replay",A.cg)],g),A.l,h,A.e,A.h,0,h,h)
s=i.Q
u=A.i.ad(s,1)
r=B.ap(A.d.gH(d),A.d.gal(d),0.4)
r.toString
s=E.iX(r,u+"x","Speed",2.5,0.4,new C.f9F(i),s)
u=B.a([],g)
for(q=0;q<6;++q){p=D.dwD[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=B.ap(A.d.gH(d),A.d.gal(d),0.4)
r.toString
u.push(new E.dZ(p.b,o===p.a,new C.f9G(i,p),p.c,r,h))}d=B.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.cdt[q]
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
d.push(B.az(h,B.p(h,h,A.f,h,h,new B.o(h,h,new B.bG(j,j,j,j),h,h,new B.a7(A.ay,A.aC,A.x,n,h,h),A.a6),h,l,h,I.amn,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f9H(i,n),h,h,h,h,h,h,!1,A.a4))}return E.lG(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.eo(new B.an(A.a0,h,A.b1,A.t,v,h),i.f),e,B.x(B.a([t,s,new E.fd(u,"STYLE",h),new E.fd(d,"THEME",h)],g),A.l,h,A.e,A.N,0,A.p))},
bDy(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nU[r]
p=A.i.D((1-A.ec.az(0,A.i.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.i.D(p/1.5707963267948966,0,1)
q=D.nU[r]
n=q+0.12
m=A.i.D((a0-n)/(q+0.2-n),0,1)
n=D.nU[r]
q=n-0.01
q=A.i.D((a0-q)/(n+0.03-q),0,1)
n=B.dr()
l=n.a
l.$flags&2&&B.aj(l)
l[11]=0.0013
n.k5(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nU[r]
h=i+0.1
if(A.i.D((a0-h)/(i+0.3-h),0,1)>0){i=D.nU[r]
h=i+0.1
h=A.i.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nU[r]
h=i+0.1
h=A.i.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cK(0,r*118,0,f,f,f,new B.kN(q,new B.iZ(n,f,A.aZ,!0,f,new C.Rh(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nU[r]
u=v-0.02
g=A.i.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gH(w)
v=D.nU[r]
t=v+0.12
e.push(new B.cK(0,r*118-3-2,0,f,f,4,new B.mN(new C.btU(u,g,1-A.i.D((a0-t)/(v+0.22-t),0,1),f),f,A.az,f,f),f))}return new B.a5(a2,358,new B.an(A.a0,f,A.ad,A.f,e,f),f)},
bUy(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.vn[r]
p=A.qz.az(0,A.i.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.vn[r]
m=q+0.15
l=A.i.D((a0-m)/(q+0.25-m),0,1)
m=D.vn[r]
q=m-0.03
q=A.i.D((a0-q)/(m+0.01-q),0,1)
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
g=new C.Rh(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dr()
k.fE(3.141592653589793)
k=new B.iZ(k,f,A.z,!0,f,new C.buP(a2,108,w,f),f)}e.push(new B.cK(0,r*130,0,f,f,f,new B.kN(q,new B.iZ(m,f,A.z,!0,f,k,f),f),f))}return new B.a5(a2,378,new B.an(A.a0,f,A.ad,A.f,e,f),f)},
cHq(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a5X[w]
l.push(A.cj.az(0,A.i.D((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bR(0,B.b5(n,n,n,new C.bxp(d.d,l,D.aBo,m,C.buh(e,0.4,0.62),f,C.buh(e,0.45,0.7),n),A.az),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.heb(g,w)
q=D.aBo[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cK(r,s-q*m*p+12,n,n,t,n,new B.kN(o,B.W(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.heb(g,w)
r=D.a5X[w]
q=r+0.15
v.push(new B.cK(s,l,n,n,t,n,new B.kN(A.i.D((e-q)/(r+0.25-q),0,1),B.d(u[w],n,n,n,n,n,n,A.Wp,A.K,n,n),n),n))}return new B.a5(g,m+90,new B.an(A.a0,n,A.ad,A.f,v,n),n)},
bJR(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cj.az(0,C.buh(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bR(0,B.as(B.dP(B.b5(f,f,f,new C.btj(A.d.gH(a1),C.buh(a3,0,0.2),a4,f),new B.av(a5*0.95,70)),D.eqX),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.i.D((a3-l)/(0.12+m-l),0,1)
j=A.dH.az(0,A.i.D((o-0.7)/0.3,0,1))
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
g=j>0.5?A.i.F(r,1):-1
w.push(new B.y(o,new B.cK(0,0,0,0,f,f,new B.cj(A.z,f,f,new B.kN(k*(0.45+0.55*o),B.dP(new B.iZ(l,f,A.z,!0,f,new C.Rh(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.r(n*a5*0.34,-o*18)),f),f),f)))}A.d.b_(w,new C.f9i())
A.d.u(a0,new B.N(w,new C.f9j(),x.fR))
return new B.a5(a5,330,new B.an(A.a0,f,A.ad,A.f,a0,f),f)},
cc_(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.vn[q]
o=A.i.D((a2-p)/(p+0.22-p),0,1)
n=A.nk.az(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.vn[q]
m=A.i.D((a2-m)/(m+0.02-m),0,1)
l=D.aDv[q]
k=B.dr()
k.n5(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.k7(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.vn[q]
g=h+0.1
g=A.i.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cK(0,0,0,0,e,e,new B.cj(A.z,e,e,new B.kN(m,B.dP(new B.iZ(k,e,A.z,!0,e,new C.Rh(d,92,w,p,j,i,0,g*s,h,e),e),new B.r(0,l)),e),e),e))
l=D.vn[q]
h=l+0.02
f=A.i.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cK(0,0,0,0,e,e,new B.cj(A.z,e,e,B.dP(new B.mN(new C.bdi(w,f,q,e),e,new B.av(r,212),e,e),new B.r(0,D.aDv[q])),e),e))}return new B.a5(a4,330,new B.an(A.a0,e,A.ad,A.f,a0,e),e)},
bGu(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.r(-b0,-150),new B.r(b0,-40),D.er0],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nU[r]
p=A.i.D((a8-q)/(q+0.2-q),0,1)
o=A.cj.az(0,p)
q=D.aDG[r]
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
e=A.i.D((a8-f)/(g+0.3-f),0,1)
f=D.nU[r]
g=f-0.01
g=A.i.D((a8-g)/(f+0.03-g),0,1)
f=B.dr()
d=f.a
d.$flags&2&&B.aj(d)
d[11]=0.001
f.n5(l*h+D.dqa[r]*o)
f.fE(l*0.9)
h=0.55+0.45*o
f.k7(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cK(0,0,0,0,a3,a3,new B.cj(A.z,a3,a3,new B.kN(g,B.dP(new B.iZ(f,a3,A.z,!0,a3,new C.Rh(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.r(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nU[r]
i=q+0.17
a2=A.i.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aDG[r]
a6.push(new B.cK(0,0,0,0,a3,a3,new B.cj(A.z,a3,a3,B.dP(new B.mN(new C.btl(A.d.gH(w),a2,a3),a3,new B.av(a4,30),a3,a3),new B.r(0,q+48-4)),a3),a3))}}return new B.a5(b0,330,new B.an(A.a0,a3,A.ad,A.f,a6,a3),a3)}}
C.btU.prototype={
a4(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a4(w-v,0,w+v,e.b)
q=B.bx(u,A.hE)
$.S()
t=B.L()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.y=N.oA
d.aq(q,t)
t=B.bx(u,A.hE)
q=B.L()
q.r=A.c.j(s).gp(0)
d.aq(t,q)},
aE(d){return d.c!==this.c||d.d!==this.d}}
C.btj.prototype={
a4(d,e){var w,v,u=this.c,t=B.bW(e.ej(A.J),e.b*u,e.a*u)
$.S()
u=B.L()
u.b=A.aa
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.y=W.OQ
d.c0(t,u)
u=B.L()
u.b=A.aa
u.c=2.5
u.r=w.j(0.7).gp(0)
d.c0(t,u)
u=t.cq(-14)
v=B.L()
v.b=A.aa
v.c=1
v.r=w.j(0.3).gp(0)
d.c0(u,v)},
aE(d){return!0}}
C.bdi.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.ej(A.J),h=this.c,g=A.cj.az(0,h)
$.S()
w=B.L()
w.b=A.aa
v=1-h
w.c=5*v
u=this.b
w.r=A.d.gH(u).j(0.6*v).gp(0)
d.O(i,40+g*e.a*0.42,w)
t=new B.e0()
t.cU(this.d*17+3)
for(w=40*h*h*3,s=i.a,r=i.b,h=1-h*0.6,q=0;q<26;++q){p=t.ai()*3.141592653589793*2
o=(40+t.ai()*110)*g
n=Math.cos(p)
m=Math.sin(p)
l=t.ai()
k=new B.ar(A.S,A.Q,A.V,A.X,A.U)
j=(q&1)===0?A.d.gH(u):A.c
k.r=j.j(A.i.D(v,0,1)).gp(0)
d.O(new B.r(s+n*o*1.6,r+(m*o+w)),(2+l*3)*h,k)}},
aE(d){return!0}}
C.btl.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o=e.ej(A.J)
for(w=e.a,v=e.b,u=this.b,t=this.c,s=0;s<2;++s){r=A.i.D(t-s*0.18,0,1)
if(r<=0)continue
q=B.bW(o,v*(0.3+r*0.9),w*(0.5+r*0.7))
$.S()
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.b=A.aa
p.c=2
p.r=u.j((1-r)*0.7).gp(0)
d.c0(q,p)}},
aE(d){return d.c!==this.c}}
C.bxp.prototype={
a4(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2=c0.e,c3=c2+36,c4=d2.a,c5=c4*0.23,c6=c5*0.34,c7=c6*0.85,c8=-c6*0.5,c9=c3-4,d0=new B.a4(0,c9,0+c4,c9+60)
$.S()
c9=B.L()
w=c0.b
v=x.O
c9.san(new B.a7(A.aZ,A.b4,A.x,B.a([A.d.gH(w).j(0.18),A.L],v),c1,c1).aD(0,d0))
d1.aF(d0,c9)
c9=B.L()
c9.r=A.c.j(0.18).gp(0)
c9.c=1
d1.ah(new B.r(0,c3),new B.r(c4,c3),c9)
for(c9=c0.w,u=c9>0,t=(c5-16)/3,s=t-5,r=0.6+0.3*c0.r,q=c0.f,p=c3-14,o=x.v,n=c3+c8,m=c0.d,l=c3-6,k=c5+c7+8,j=l+16,i=c0.c,h=c9<1,g=d1.c,f=0;f<3;++f){e=i[f]
if(e<=0)continue
d=C.heb(c4,f)
a0=m[f]*c2*e
a1=d-4
a2=$.S()
a3=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a3.r=A.w.j(0.5).gp(0)
a3.y=A.n4
d1.c0(new B.a4(a1,l,a1+k,j),a3)
a3=c3-a0
a1=d+c5
a4=new B.a4(d,a3,a1,a3+a0)
a5=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a6=B.ap(A.d.gH(w),A.c,0.1)
a6.toString
a5.san(new B.a7(A.aZ,A.b4,A.x,B.a([a6,A.d.gal(w)],v),c1,c1).aD(0,a4))
d1.aF(a4,a5)
a2=a2.r
a5=B.a([],o)
a7=new B.aH(a2,A.aj,c1,c1,a5)
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
a5=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a5.r=B.ap(A.d.gal(w),A.w,0.5).gp(0)
d1.af(a7,a5)
a5=B.a([],o)
b1=new B.aH(a2,A.aj,c1,c1,a5)
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
b3=A.i.bg(a0/22)
for(a2=a3+6,a3=d+8,a5=q*b3*1.3,b4=0;b4<b3;++b4){b5=a5>b3-b4-1
for(a6=p-b4*22-12,a8=a6<a2,a9=a6+10,b6=0;b6<3;++b6){b7=a3+b6*t
if(a8)continue
b0=B.bx(new B.a4(b7,a6,b7+s,a9),A.hE)
$.S()
b8=new B.ar(A.S,A.Q,A.V,A.X,A.U)
b8.r=(b5?A.c.j(r):A.w.j(0.22)).gp(0)
d1.aq(b0,b8)}}if(u&&h){a2=c3-a0*c9-14
b9=new B.a4(d,a2,a1,a2+28)
J.br(g.save())
g.clipRect(B.hZ(a4),$.mm()[1],!0)
$.S()
a2=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a2.san(new B.a7(A.aZ,A.b4,A.x,B.a([A.L,A.c.j(0.4),A.L],v),c1,c1).aD(0,b9))
d1.aF(b9,a2)
g.restore()}}},
aE(d){return!0}}
C.aPu.prototype={
aX(){this.b7()
this.b5()
this.dI()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdC())
w.b9$=null
w.a2()}}
C.a1J.prototype={
a7(){return"_Role."+this.b}}
C.qA.prototype={}
C.rg.prototype={}
C.D7.prototype={}
C.a_I.prototype={}
C.ag8.prototype={}
C.a1W.prototype={
gZ(d){return this.d}}
C.Di.prototype={}
C.ad0.prototype={}
C.adh.prototype={}
C.afe.prototype={}
C.bjT.prototype={
a3Y(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
G.dA(d,"",e,g,h,f)},
bbq(d,e,f){return this.a3Y(d,e,f,0,0.55)},
aE_(d,e,f,g){return this.a3Y(d,e,f,0,g)},
bbr(d,e,f,g){return this.a3Y(d,e,f,g,0.55)},
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
w.b2()},
aly(d,e,f,g){var w="n"+this.ay++,v=new C.rg(w,e,f,g)
this.a.n(0,w,v)
this.b2()
return v},
th(d,e,f){return this.aly(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bq(w.b,new C.ds3(e))
A.d.bq(w.c,new C.ds4(e))
w.b2()},
bfj(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.n8.h(0,v.b).c===D.y_)return!1
w=this.b
if(A.d.aU(w,new C.ds0(d,e)))return!1
w.push(new C.D7(d,e))
this.b2()
return!0},
c3N(d){var w
if(d.b==="beat")return D.cm4[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.aw(500)
case 2:return 1400+w.aw(2200)
default:return 450+w.aw(2000)}},
aHA(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.aDX[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.Di(u,t,j.ax,90))
w.push(new C.Di(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ai()*3.141592653589793*2
v.push(new C.a1W(u,new B.r(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.bbq(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ai()*3.141592653589793*2
p=100+w.ai()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ap(t,A.c,w.ai()*0.5)
m.toString
v.push(new C.a1W(u,new B.r(o*p,n*p),m,3+w.ai()*4.5,1000+w.aw(700),j.ax))}j.f.push(new C.Di(u,t,j.ax,120))
j.aE_(120,200,"noise",0.5)
j.bbq(261.63*Math.pow(2,([7,12,16,19][w.aw(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.Di(u,t,j.ax,230))
w.push(new C.Di(u,t,j.ax+160,160))
w.push(new C.Di(u,t,j.ax+320,100))
j.bbr(180+j.at.aw(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.ad0(u,new B.r((w.ai()-0.5)*220,-260-w.ai()*180),t,j.ax))
j.bbr(300+w.aw(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ai()*3.141592653589793*2
j.w.push(new C.adh(u,u.a5(0,new B.r(Math.cos(q),Math.sin(q)).aL(0,260+w.ai()*200)),t,j.ax))
j.a3Y(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fO()
j.a3Y(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.afe(u,D.aDj[v],t,j.ax))
j.aE_(261.63*Math.pow(2,([0,5,9,12][j.at.aw(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aE_(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.cia[A.o.F(w,3)]
for(k=1;k<=3;++k)j.cxl(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new B.eJ(w,new C.ds1(d));v.C();)j.aCu(w.gP(0),j.ax+D.cuw[A.o.F(g.d,4)])
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
case"chance":s=j.at.aw(100)<D.cLN[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new B.eJ(w,new C.ds2(d));v.C();)j.aCu(w.gP(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.xG(w,0,v-700)},
cxl(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.a_I(e,"~"+d))},
aCu(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.ag8(d.a,v,e,w))
u.push(new C.a_I(w,v))},
a7H(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=B.a3(w).k("b7<2>")
w=B.C(new B.b7(w,v),v.k("M.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aHA(r)
u.n(0,r,o.ax+o.c3N(s))}}w=o.c
v=B.U(w).k("Y<1>")
q=B.C(new B.Y(w,new C.ds5(o),v),v.k("M.E"))
if(q.length!==0){A.d.bq(w,new C.ds6(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.I)(q),++t){u=q[t].b
if(A.a.a_(u,"~")){p=A.a.b4(u,1)
for(u=A.d.gae(v),r=new B.eJ(u,new C.ds7(p));r.C();)o.aCu(u.gP(0),o.ax)}else o.aHA(u)}}A.d.bq(o.d,new C.ds8(o))
A.d.bq(o.e,new C.ds9(o))
A.d.bq(o.f,new C.dsa(o))
A.d.bq(o.w,new C.dsb(o))
A.d.bq(o.x,new C.dsc(o))
A.d.bq(o.r,new C.dsd(o))
o.b2()},
vO(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
Uv(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.W.aP(0,d,null))
k.a8(0)
for(o=x.j,n=J.aT(o.a(J.t(w,"nodes"))),m=k.a;n.C();){v=n.gP(n)
u=B.w(J.t(v,"k"))
if(!D.n8.am(0,u))continue
t=B.w(J.t(v,"id"))
m.n(0,t,new C.rg(t,u,new B.r(B.dF(J.t(v,"x"))*k.cy.a,B.dF(J.t(v,"y"))*k.cy.b),A.i.M(B.dF(J.t(v,"p")))))
s=B.cb(B.aL(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aT(o.a(J.t(w,"edges"))),n=k.b;o.C();){r=o.gP(o)
q=B.w(J.t(r,0))
p=B.w(J.t(r,1))
if(m.am(0,q)&&m.am(0,p))n.push(new C.D7(q,p))}k.b2()
return!0}catch(l){return!1}},
cWV(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.rg(n,r,new B.r(q*p.a,o*p.b),s))
l.b2()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bfj(w[m.a],w[m.b])}},
gZ(d){return this.cy}}
C.GJ.prototype={}
C.Xf.prototype={
S(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aGE(new C.bjT(B.T(w,x.f3),v,u,t,s,r,q,p,o,B.T(w,n),B.T(w,n),B.T(w,n),B.T(w,n),A.cT,A.L,A.az,$.ax()),A.bC,A.J,A.J,A.Z,null,null)}}
C.aGE.prototype={
adO(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$adO=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.aA(),$async$adO)
case 6:q=n.k8(m.t(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new C.ez_(s))
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
aaI(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$aaI=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new C.eyP(s))
u=3
w=6
return B.b(B.aA(),$async$aaI)
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
return B.i($async$aaI,v)},
bPQ(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a3(n).k("b7<2>")
v=""+n.a+"|"+o.length+"|"+new B.b7(n,w).cF(0,0,new C.eyR())+"|"+A.d.cF(o,0,new C.eyS())
if(v===p.ch)return p.CW
u=new C.eyV()
t=x.s
s=B.a([],t)
r=new C.eyW(p,s,u)
for(n=new B.b7(n,w).gae(0),w=new B.eJ(n,new C.eyT());w.C();){q=n.gP(0)
if(!A.d.aU(o,new C.eyU(q)))s.push(B.w(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.cX(s,0,B.dD(5,"count",x.S),x.N).dq(0)},
Y(){var w,v=this
v.a3()
v.adO()
v.d.db=v.ay
w=v.q6(new C.ezp(v))
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
v.R$=0
w.bAr()},
adj(d){return this.c3d(d)},
c3d(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$adj=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.aA(),$async$adj)
case 6:q=m.aV(l.t(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.Uv(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aZS(A.d.gH(D.aCL))
if(s.c!=null)s.m(new C.eyZ())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$adj,v)},
aZS(d){this.d.cWV(0,d.c,d.d)
this.EO()},
EO(){var w=this.as
if(w!=null)w.a1(0)
this.as=B.cz(A.lM,new C.eyL(this))},
azm(d){var w,v,u,t,s=this.d.a,r=B.a3(s).k("b7<2>")
s=B.C(new B.b7(s,r),r.k("M.E"))
r=B.U(s).k("ds<1>")
s=new B.ds(s,r)
s=new B.bQ(s,s.gJ(0),r.k("bQ<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
clc(d){var w,v,u,t,s,r=this.d.a,q=B.a3(r).k("b7<2>")
r=B.C(new B.b7(r,q),q.k("M.E"))
q=B.U(r).k("ds<1>")
r=new B.ds(r,q)
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
c31(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.dn(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.n8.h(0,r.b).c===D.y_)continue
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
cc7(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hDb(new B.r(n.a+36,n.b+0),new B.r(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cF5(d){var w,v,u,t,s,r,q=this,p=q.azm(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.eZ()
u=v.b
if(u==="button"){w.aHA(p)
return}if(q.r)return
t=D.n8.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.rp)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.b2()
q.EO()
return}if(q.r)return
r=q.cc7(d)
if(r!=null){w=q.d
A.d.cH(w.b,r)
w.b2()
q.EO()}},
cmx(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.clc(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.azm(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aJ(0,d)}},
cmy(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b2()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.r(A.i.D(d.a+s.y.a,46,t.a-46),A.i.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b2()}}},
b4j(){var w,v,u=this
if(u.z!=null){w=u.c31(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bfj(v,w)}else v=!1
if(v){B.k0()
u.EO()}u.z=null
u.d.b2()}else if(u.x!=null){if(u.at)u.EO()
u.x=null}},
ae0(d){return this.c69(d)},
c69(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ae0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.azm(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.ju()
p=t.c
p.toString
w=3
return B.b(B.bT(K.mc,null,new C.ez1(q),p,!0,!0,!1,A.lX,!1,!1,x.y),$async$ae0)
case 3:if(f===!0){r.W(0,s)
t.EO()}case 1:return B.h(u,v)}})
return B.i($async$ae0,v)},
cc5(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.th(0,d,new B.r(v.a*(0.25+u.ai()*0.5),v.b*(0.2+u.ai()*0.55)))
B.eZ()
this.EO()},
ai0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ai0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bT(K.mc,null,new C.ez3(),s,!0,!0,!0,A.lX,!1,!1,x.es),$async$ai0)
case 2:t=e
if(t!=null)u.aZS(t)
return B.h(null,v)}})
return B.i($async$ai0,v)},
afo(d){var w=0,v=B.j(x.H),u=this,t
var $async$afo=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.eyO(),t,null,!0,!0,x.y),$async$afo)
case 2:if(f===!0){u.d.a8(0)
u.EO()}return B.h(null,v)}})
return B.i($async$afo,v)},
B(d){var w=this,v=null,u=B.a([B.ajI(w.r?new B.bK(A.a5,v,v,new B.D(A.Hj,B.hu(D.bYr,D.fO7,new C.ezn(w),v),v),v):w.cc8(),A.b0,A.iQ),B.E(B.cm(new C.ezo(w)),1)],x.p)
if(!w.r)u.push(w.czP())
return B.c4(v,A.c5,B.bm(!0,B.x(u,A.l,v,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)},
bLw(){var w=null,v=new C.eyQ(),u=A.w.j(0.7),t=B.l(26),s=B.K(A.bv.j(0.5),A.r,1)
return B.bR(0,B.eb(B.as(B.p(w,B.c9(B.x(B.a([D.fZF,A.ax,D.h6p,A.aB,v.$4(A.oK,A.bv,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(A0.Dq,A.cs,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.kc,A.c4,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.PD,A.bt,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.h5H,new B.bK(A.a9,w,w,B.bO(!1,D.fWK,w,w,!0,w,w,w,this.gbLp(),w,w),w)],x.p),A.E,w,A.e,A.N,0,A.p),A.t,w,A.y,w,w,w,w,w,A.ah),A.f,w,A.Ya,new B.o(K.mc,w,s,t,w,w,A.n),w,w,w,A.fu,As.anE,w,w,w),w,w,w),u,!0),0,0,0)},
cc8(){var w=this,v=null,u=B.aI(v,v,v,v,Aj.n6,v,v,v,new C.ez9(w),v,v,v,v,v,v),t=w.aa8(A.Dg,"How it works",new C.eza(w),!0),s=w.ay?A.oN:X.tp
return new B.D(D.bIW,B.A(B.a([u,D.bKC,t,w.aa8(s,"Sound",new C.ezb(w),!0),w.aa8(A.e9,"Ideas",w.gcqi(),!0),w.aa8(I.wS,"Clear",w.gcc6(w),!0),w.aQr(A.he,"Show",new C.ezc(w),!0,!0)],x.p),A.l,v,A.e,A.h,0,v,v),v)},
aQr(d,e,f,g,h){var w=null,v=h?A.bv:A.c.j(0.08),u=B.l(14),t=B.l(14),s=B.a([B.W(d,h?A.w:A.c,w,w,w,20)],x.p)
return new B.D(Af.wJ,B.aG(!1,A.a3,!0,u,B.aM(!1,t,!0,B.hc(new B.D(new B.Q(8,8,8,8),B.A(s,A.l,w,A.e,A.N,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ai),w)},
aa8(d,e,f,g){return this.aQr(d,e,f,g,!1)},
czP(){var w=null,v=new C.ez5(this),u=A.c.j(0.08)
return B.p(w,B.c9(B.A(B.a([v.$2("START",D.y_),v.$2("CHANGE",D.Fw),v.$2("REACT",D.rp)],x.p),A.E,w,A.e,A.h,0,w,w),A.t,w,A.y,w,w,w,w,w,A.aM),A.f,w,w,new B.o(K.C9,w,new B.bG(new B.ay(u,1,A.r,-1),A.a1,A.a1,A.a1),w,w,w,A.n),w,w,w,w,D.bDV,w,w,w)},
czQ(d){var w,v,u,t,s=null,r=D.n8.h(0,d)
r.toString
w=B.l(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.K(v.j(0.5),A.r,1)
return new B.D(A.f1,B.az(s,B.p(s,B.x(B.a([B.W(r.b,v,s,s,s,22),A.cR,B.d(r.a,s,1,A.a2,s,s,s,D.aXn,s,s,s)],x.p),A.l,s,A.e,A.N,0,A.p),A.f,s,s,new B.o(s,s,t,w,s,new B.a7(A.aZ,A.b4,A.x,u,s,s),A.n),s,s,s,s,A.hO,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.ez4(this,d),s,s,s,s,s,s,!1,A.a4),s)}}
C.bjU.prototype={
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
d=new B.aH(f.r,A.aj,b3,b3,e)
e.push(new B.aZ(i,j))
d.ab()
a0=Math.max(40,Math.abs(g-i)*0.5)
f=new B.kq(i+a0,j,g-a0,h,g,h)
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
h=B.r2(new B.r(i,j),new B.r(g,h))
f.san(new B.a7(A.a5,A.a9,A.x,e,b3,b3).aD(0,new B.a4(h.a-2,h.b-2,h.c+2,h.d+2)))
b7.af(d,f)}for(w=b4.d,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a3=w[n]
l=o.h(0,a3.a)
k=o.h(0,a3.b)
if(l==null||k==null)continue
j=a3.c
a4=A.i.D((b5-j)/(a3.d-j),0,1)
j=l.c
i=k.c
a5=C.hDb(new B.r(j.a+36,j.b+0),new B.r(i.a-36,i.b),a4)
$.S()
i=new B.ar(A.S,A.Q,A.V,A.X,A.U)
i.r=A.c.j(0.35).gp(0)
i.y=N.oA
b7.O(a5,8,i)
i=new B.ar(A.S,A.Q,A.V,A.X,A.U)
i.r=A.c.gp(0)
b7.O(a5,4,i)}a6=b2.d.$0()
if(a6!=null&&o.h(0,a6)!=null){a7=o.h(0,a6).c.a5(0,D.JU)
a8=b2.e.$0()
w=a8.a
t=a7.a
a0=Math.max(40,Math.abs(w-t)*0.5)
d=new B.aH($.S().r,A.aj,b3,b3,B.a([],p))
p=a7.b
d.E(new B.aZ(t,p))
j=a8.b
d.E(new B.kq(t+a0,p,w-a0,j,w,j))
j=B.L()
j.b=A.aa
j.c=3
j.r=A.c.j(0.7).gp(0)
b7.af(d,j)
j=B.L()
j.r=A.c.gp(0)
b7.O(a8,7,j)}for(w=b4.f,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a9=w[n]
p=a9.c
v=A.i.D((b5-p)/700,0,1)
if(b5<p)continue
p=A.e6.az(0,v)
$.S()
j=new B.ar(A.S,A.Q,A.V,A.X,A.U)
j.b=A.aa
i=1-v
j.c=3.5*i+0.5
j.r=a9.b.j(i*0.9).gp(0)
b7.O(a9.a,14+a9.d*p,j)}for(w=b4.w,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){b0=w[n]
v=A.i.D((b5-b0.d)/600,0,1)
p=b0.a
j=b0.b
i=B.kM(p,j,A.e6.az(0,v))
i.toString
j=B.kM(p,j,A.e6.az(0,A.i.D(v-0.35,0,1)))
j.toString
$.S()
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.c=5
p.d=A.bG
h=b0.c
g=B.a([h.j(0),h],q)
f=B.r2(j,i)
p.san(new B.a7(A.a5,A.a9,A.x,g,b3,b3).aD(0,new B.a4(f.a-4,f.b-4,f.c+4,f.d+4)))
b7.ah(j,i,p)
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.r=A.c.gp(0)
b7.O(i,6,p)
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.r=h.j(0.5*(1-v)).gp(0)
p.y=A.kY
b7.O(i,12,p)}for(w=b4.e,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a3=w[n]
v=A.i.D((b5-a3.f)/a3.e,0,1)
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
p.san(new B.bS(A7.Br,0.5,A.x,b3,0,B.a([A.c,i],q),b3,b3).aD(0,B.bV(k.a,8)))
b7.O(j,8,p)}for(b4=b4.x,w=b4.length,n=0;n<b4.length;b4.length===w||(0,B.I)(b4),++n){a5=b4[n]
v=A.i.D((b5-a5.d)/1000,0,1)
t=1-v
b1=C.bjV(a5.b,26+8*t,a5.c.j(t),b3,b3,A.u)
t=a5.a
q=b1.b
p=q.c
q=q.a.c
b1.a4(b7,new B.r(t.a-p/2,t.b-(40+60*v+q.gba(q)/2)))}for(b4=new B.dn(o,o.r,o.e);b4.C();)b2.cm3(b7,b4.d,b5)
b6.restore()},
cm3(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.n8.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.i.D(1-(f-w)/520,0,1)
u=B.bW(e.c,64,64)
t=B.bx(u,A.iq)
s=t.eD(A.cz)
$.S()
r=B.L()
r.r=A.w.j(0.55).gp(0)
r.y=A.n4
d.aq(s,r)
if(v>0){s=t.cq(6)
r=B.L()
r.r=h.d.j(0.6*v).gp(0)
r.y=A.CU
d.aq(s,r)}s=t.eD(A.cK)
r=B.L()
q=h.d
r.r=B.ap(q,A.w,0.65).gp(0)
d.aq(s,r)
r=B.L()
s=B.ap(q,A.c,0.18+0.4*v)
s.toString
p=B.ap(q,A.w,0.35)
p.toString
r.san(new B.a7(A.aZ,A.b4,A.x,B.a([s,p],x.O),j,j).aD(0,u))
d.aq(t,r)
r=B.L()
r.b=A.aa
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aq(t,r)
r=h.b
p=e.c
o=C.bjV(B.lo(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a4(d,p.aJ(0,new B.r(s/2,r.gba(r)/2)))
n=C.bjV(h.a,11,A.c,j,j,A.H)
n.a4(d,e.c.a5(0,new B.r(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.aDj[A.o.F(e.d,6)]:j
h=h.c
if(h===D.rp){s=e.c.a5(0,new B.r(0,62))
r=B.L()
r.r=D.aDX[A.o.F(e.d,6)].gp(0)
d.O(s,5,r)}else if(m!=null){l=C.bjV(m,9.5,A.aF,j,j,A.O)
l.a4(d,e.c.a5(0,new B.r(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bjV(m,9.5,A.aF,j,j,A.O)
l.a4(d,e.c.a5(0,new B.r(-l.b.c/2,54)))}if(k.c)return
if(h!==D.y_)k.b57(d,e.c.aJ(0,D.JU),q)
k.b57(d,e.c.a5(0,D.JU),q)},
b57(d,e,f){var w
$.S()
w=B.L()
w.r=A.c5.gp(0)
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
C.aOD.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.ei.prototype={}
C.u1.prototype={
ass(d,e,f,g){var w=this
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
C.a5J.prototype={
bhb(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.h4()?-1:1
v=t.ai()*3.141592653589793*2
u=f*(0.3+t.ai())
s.push(new C.abG(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ai()*0.45));++r}},
c8i(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bq(w,new C.bQE())},
aly(d,e,f,g){var w="p"+this.c++,v=new C.u1(w,e,f,g)
v.ass(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bq(this.b,new C.bQP(e))},
a8(d){A.d.a8(this.a)
A.d.a8(this.b)},
cNT(d,e,f,g,h){return A.d.aU(this.b,new C.bQK(e,f,g,h))},
amn(d,e,f,g){var w
if(d===f||this.cNT(0,d,e,f,g))return null
w=new C.acN(d,e,f,g)
this.b.push(w)
return w},
aD0(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
An(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
ap9(d){return this.Mt(d)&&!d.x&&d.cx>this.An(d)},
b9u(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Mt(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
ccs(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.Al.h(0,v)
if(w!=null)return w.a
return 100},
vO(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c8i(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.U(v).k("Y<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.I)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.Y(v,new C.bQQ(a2),t).cF(0,0,new C.bQR(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.T(x.N,u)
n=new C.bQT(o)
m=B.a([],x.t)
l=new C.bQS(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.I)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.I)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.T(u,u)
f=new C.bQV(g,l,n)
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
a2.b9q(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.An(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b9q(e,d,w,!0)
a2.bSb(a4)},
b9q(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.T(x.N,b3),b5=new C.bQG(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bQF(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.I)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bQI(B.T(b3,b3),r,b5)
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
if(h)B.bi(B.dO(g,null))
e=B.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=B.c1(b7,0,!1,b3)
a0=B.c1(b7,0,!1,b3)
k.a8(0)
j.a8(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.I)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b9u(t)*(1+t.CW))
a4=b2.aD0(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.ccs(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bVy(e,a0,b8)
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
bVy(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
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
bSb(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.I)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aD0(o)/a1.b9u(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.An(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bK9(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bhb(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.uu(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.uu(o,"The "+$.qK().h(0,n).b+" got "+A.i.ad(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.uu(o,"More than 1.5 amps went through the "+$.qK().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.uu(o,"The regulator had to turn "+A.i.ad(o.cy,1)+" V into heat while "+A.i.V(i*1000)+" mA flowed. That is "+A.i.ad(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.uu(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.Al.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qK().h(0,n).b
l=f.b
l=l===A.i.fK(l)?""+A.i.V(l):B.w(l)
g=f.c
g=g===A.i.fK(g)?""+A.i.V(g):B.w(g)
a1.uu(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.i.ad(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.fhs.q(0,n)){m=o.fx>0?A.i.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.i.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.uu(o,"The bulb got "+A.i.ad(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.i.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.uu(o,"The LED had "+A.i.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.i.D(j/14,0,1)
break
case"motor":n=A.i.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.i.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.uu(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.i.D(i/1,0,1)
if(!o.x&&i>1)a1.uu(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.uu(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.i.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.uu(o,"The capacitor was charged to "+A.i.ad(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bK9(d){return A.d.aU(this.a,new C.bQD(d))},
uu(d,e){var w
d.x=!0
d.ay=e
this.bhb(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
blQ(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a8(0)},
aJm(d){var w=d.b
return D.aU7.q(0,w)||D.Al.am(0,w)||w==="buck"||w==="regulator"},
biG(d){var w,v=!0
if(!this.Mt(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.Al.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
VL(d,e){var w=this.b
return new B.Y(w,new C.bQX(d,e),B.U(w).k("Y<1>")).gJ(0)},
rw(d){var w,v
if(d.x)return!1
w=d.b
if(D.Al.am(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bgI(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qK().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aJm(d)||i.rw(d))return null
w=i.VL(d,0)
v=i.VL(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.U(u).k("Y<1>")
s=B.C(new B.Y(u,i.gcWu(),t),t.k("M.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.i.fK(r)?""+A.i.V(r):B.w(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.i.ad(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.Al.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.MG("battery"),o=J.aT(t.a),t=new B.eJ(o,t.b);t.C();){n=o.gP(o)
if(n.e===1.5&&n.as<=0.02&&i.VL(n,0)+i.VL(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.MG("switch"),o=J.aT(t.a),t=new B.eJ(o,t.b);t.C();)if(!o.gP(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qK().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.An(k))return"The "+$.qK().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.i.ad(k.cx,2)+" amps, but it can only give about "+A.i.ad(i.An(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.aU(u,new C.bQL(i,d))
h=q.b
h=h===A.i.fK(h)?""+A.i.V(h):B.w(h)
u=A.i.ad(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.i.ad(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.i.ad(Math.abs(d.dy),1)+" V). Try a bigger battery."},
MG(d){var w=this.a
return new B.Y(w,new C.bQO(d),B.U(w).k("Y<1>"))},
aIY(d){return this.MG(d).aU(0,new C.bQN(0.35))},
qi(d,e){return A.d.aU(this.a,new C.bQM(e))}}
C.akj.prototype={
a4(c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8=c3.a,b9=c3.b,c0=0+b8,c1=0+b9
$.S()
w=B.L()
w.r=F.nt.gp(0)
c2.aF(new B.a4(0,0,c0,c1),w)
v=B.L()
v.r=A.c.j(0.06).gp(0)
for(u=12;u<b8;u+=24)for(t=12;t<b9;t+=24)c2.O(new B.r(u,t),1.1,v)
for(w=b6.b,s=w.b,r=s.length,q=b6.f,p=0;p<s.length;s.length===r||(0,B.I)(s),++p){o=s[p]
n=o.a
m=n.c
l=o.b===0?-1:1
k=D.mu.am(0,n.b)?(n.ch-1)*38:0
n=n.d
j=o.c
i=j.c
h=o.d===0?-1:1
g=D.mu.am(0,j.b)?(j.ch-1)*38:0
b6.cKA(c2,new B.r(m*b8+l*(42+k),n*b9),new B.r(i*b8+h*(42+g),j.d*b9),o,o===q)}s=b6.d
if(s!=null&&b6.e!=null){f=C.hQZ(s.a,s.b,c3)
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
h.r=F.N0.j(A.i.D(e.Q*0.45,0,0.6)).gp(0)
h.y=A.CU
c2.O(new B.r(k,j),46+14*i,h)}d=m.h(0,e.a)
if(d==null)d=1
J.br(n.save())
n.translate(k,j)
i=A.i.D(A.nk.az(0,A.i.D(d,0,1)),0.01,1.4)
n.scale(i,i)
b6.cn4(c2,e,e===q)
n.restore()
i=e.b
if((i==="battery"||i==="solar"||i==="crank"||i==="turbine")&&!e.x&&e.cx>w.An(e)){h=k+0
g=j+-40
a0=Math.sin(w.d*10)
a1=$.S().r
a2=B.a([],l)
a3=new B.aH(a1,A.aj,b7,b7,a2)
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
a2=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a2.r=A.aA.j(0.65+0.35*a0).gp(0)
c2.af(a3,a2)
a2=B.a([],l)
a1=new B.aH(a1,A.aj,b7,b7,a2)
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
a0=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a0.b=A.aa
a0.c=1.6
a0.r=A.c.gp(0)
c2.af(a1,a0)
b0=new B.iC(new B.er("!",b7,b7,A.cM,b7,b7,b7,b7,b7,b7,new B.G(!0,A.c,b7,b7,b7,b7,14,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a7,A.c1,new B.jn(1),b7,b7,b7,b7,A.c2,b7,A.cx)
b0.eo()
b0.a4(c2,new B.r(h+-3,g+-8))}if(!e.x)h=(D.aU7.q(0,i)||D.Al.am(0,i)||i==="buck"||i==="regulator")&&!w.rw(e)&&w.VL(e,0)+w.VL(e,1)>0
else h=!1
if(h){k+=0
j+=-40
$.S()
h=new B.ar(A.S,A.Q,A.V,A.X,A.U)
h.r=A.at.gp(0)
c2.O(new B.r(k,j),10,h)
b0=new B.iC(new B.er("!",b7,b7,A.cM,b7,b7,b7,b7,b7,b7,new B.G(!0,A.w,b7,b7,b7,b7,14,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a7,A.c1,new B.jn(1),b7,b7,b7,b7,A.c2,b7,A.cx)
b0.eo()
b0.a4(c2,new B.r(k+-3,j+-8))}for(b1=0;b1<2;++b1){k=e.c
j=b1===0
h=j?-1:1
g=D.mu.am(0,i)?(e.ch-1)*38:0
g=k*b8+h*(42+g)
h=e.d*b9
b0=new B.r(g,h)
$.S()
k=new B.ar(A.S,A.Q,A.V,A.X,A.U)
k.r=F.nt.gp(0)
c2.O(b0,7,k)
k=new B.ar(A.S,A.Q,A.V,A.X,A.U)
k.b=A.aa
k.c=2.4
k.r=(j&&w.biG(e)?A.bX:A.ab).gp(0)
c2.O(b0,6,k)
if(j&&w.biG(e)){b0=new B.iC(new B.er("+",b7,b7,A.cM,b7,b7,b7,b7,b7,b7,new B.G(!0,A.bX,b7,b7,b7,b7,13,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a7,A.c1,new B.jn(1),b7,b7,b7,b7,A.c2,b7,A.cx)
b0.eo()
b0.a4(c2,new B.r(g+-4,h+-22))}}}for(r=w.f,q=r.length,p=0;p<r.length;r.length===q||(0,B.I)(r),++p){b2=r[p]
n=b2.a*b8+b2.c
m=b2.b*b9+b2.d
b3=new B.r(n,m)
b4=A.i.D(b2.r/0.8,0,1)
l=B.ap(M.NG,F.a_O,b4)
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
j.y=A.OR
c2.O(b3,4.5*b4+1,j)}if(A.d.aU(s,new C.bL_())){b5=A.d.cF(s,0,new C.bL0())
$.S()
b9=B.L()
b9.r=D.biB.j(0.05+0.09*b5*(0.5+0.5*Math.sin(w.d*22))).gp(0)
c2.aF(new B.a4(0,0,c0,c1),b9)
b0=B.fE(b7,A.cx,b7,b7,b7,D.fsD,A.a7,A.c1,b7,A.dJ,A.c2)
b0.nB(b8-24)
b0.a4(c2,new B.r(12,10))}},
qY(d,e,f,g,h){var w=null,v=B.fE(w,A.cx,w,w,w,B.cS(w,w,w,w,w,w,w,w,w,B.m(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a7,A.c1,w,A.dJ,A.c2)
v.eo()
v.a4(d,f)},
cKA(d,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.aH($.S().r,A.aj,null,null,B.a([],x.v))
e.E(new B.aZ(a0.a,a0.b))
w=C.hIY(a0,a1,a2)
e.E(new B.ce(w.a,w.b,a1.a,a1.b))
v=a2.a
u=Math.abs(v.fr)
t=a2.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ap(A.aQ,F.N0,A.i.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ap(A.aG,A.aQ,A.i.D(r*1.2,0,1))
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
if(q){n=new B.am4(new B.uS(B.BO(e),!1,B.a([],x.R))).gH(0)
m=40+A.i.D(r*120,0,160)
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
i=A.i.F(k*22+j*m*l,i.a.length())
v.jP()
j=t[u].b
j===$&&B.c()
j=j.a.length()
v.jP()
h=t[u].b
h===$&&B.c()
g=A.i.F(i+j,h.a.length())
v.jP()
f=t[u].W_(g)
j=new B.ar(A.S,A.Q,A.V,A.X,A.U)
j.r=A.c.gp(0)
d.O(f.a,2.6,j);++k}}},
PS(d,e,f,g){var w,v,u,t
$.S()
w=B.L()
v=g?A.aZ:A.a5
u=g?A.b4:A.a9
t=B.ap(e,A.w,0.3)
t.toString
w.san(new B.a7(v,u,A.x,B.a([e,f,e,t],x.O),A.IL,null).aD(0,d))
return w},
ayw(d,e,f){return this.PS(d,e,f,!0)},
c7S(d,e){return this.PS(d,A.bj,A.hY,e)},
aja(d,e){var w,v,u
$.S()
w=B.L()
w.san(D.aSh.aD(0,B.bV(e,4.2)))
d.O(e,4.2,w)
w=e.a5(0,D.etz)
v=e.a5(0,D.etI)
u=B.L()
u.r=A.cQ.gp(0)
u.c=1.2
d.ah(w,v,u)},
cn4(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.S(),c0=B.L()
c0.san(D.c8C.aD(0,D.fdF))
c0.c=3.4
c0.d=A.bG
w=B.L()
w.r=A.w.j(0.45).gp(0)
w.y=N.oA
c1.c0(D.fdt,w)
if(c3){w=B.bx(D.fdD,A.jP)
v=B.L()
v.r=A.c.j(0.14).gp(0)
c1.aq(w,v)}u=C.hnH(c2)
c1.ah(new B.r(-u,0),D.eva,c0)
c1.ah(D.ese,new B.r(u,0),c0)
t=c2.x
w=c2.b
s=D.mu.am(0,w)&&c2.ch!==1
if(s){J.br(c1.c.save())
c1.bV(0,c2.ch)}switch(w){case"battery":b3.bGU(c1,c2)
break
case"solar":r=B.bx(D.fdw,A.jy)
c1.aq(r,b3.PS(new B.a4(r.a,r.b,r.c,r.d),A.d_,A.bO,!1))
b9=B.L()
w=B.ap(D.bmA,A.d9,0.25+0.55*c2.f)
w.toString
v=B.ap(D.bwc,A.mb,0.3+0.4*c2.f)
v.toString
b9.san(new B.a7(A.ay,A.aC,A.x,B.a([w,v],x.O),b4,b4).aD(0,D.aap))
c1.aF(D.aap,b9)
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
c1.ah(new B.r(b9,-18),new B.r(b9,18),w)}b9=new B.aH($.S().r,A.aj,b4,b4,B.a([],x.v))
b9.E(new B.aZ(-34,18))
b9.E(new B.aq(-6+40*c2.f,-18))
b9.E(new B.aq(4+40*c2.f,-18))
b9.E(new B.aq(-24,18))
b9.E(new B.bw())
w=B.L()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.af(b9,w)
w=c2.f
b9=B.L()
b9.r=A.ex.j(0.9).gp(0)
c1.O(D.esi,4+4*w,b9)
break
case"crank":o=B.bx(D.fdh,A.fR)
c1.aq(o,b3.ayw(new B.a4(o.a,o.b,o.c,o.d),A.by,A.bP))
b9=B.L()
b9.san(D.aSi.aD(0,B.bV(A.J,12)))
c1.O(A.J,12,b9)
n=new B.r(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=B.L()
b9.r=A.cA.gp(0)
b9.c=5
b9.d=A.bG
c1.ah(A.J,n,b9)
b9=B.L()
b9.san(D.eEG.aD(0,B.bV(n,7)))
c1.O(n,7,b9)
b3.aja(c1,D.ev2)
b3.aja(c1,D.es3)
break
case"turbine":b9=b9.r
w=x.v
v=new B.aH(b9,A.aj,b4,b4,B.a([],w))
v.E(new B.aZ(-3,24))
v.E(new B.aq(3,24))
v.E(new B.aq(1.5,0))
v.E(new B.aq(-1.5,0))
v.E(new B.bw())
m=B.L()
m.r=A.bO.gp(0)
c1.af(v,m)
for(v=c1.c,l=0;l<3;++l){m=c2.y
J.br(v.save())
v.rotate((m+l*2.094)*180/3.141592653589793,0,0)
m=B.a([],w)
k=new B.aH(b9,A.aj,b4,b4,m)
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
j=new B.bw()
m.push(j)
m=k.f
if(m!=null)j.ak(m)
k.ab()
m=new B.ar(A.S,A.Q,A.V,A.X,A.U)
m.r=A.c.gp(0)
c1.af(k,m)
v.restore()}b9=B.L()
b9.san(D.eEm.aD(0,B.bV(A.J,4.5)))
c1.O(A.J,4.5,b9)
break
case"switch":o=B.bx(D.fdo,A.nZ)
b9=B.L()
b9.san(D.auc.aD(0,new B.a4(o.a,o.b,o.c,o.d)))
c1.aq(o,b9)
b3.aja(c1,D.Uw)
b3.aja(c1,D.aN4)
h=c2.w?D.aN4:H.aMV
b9=B.L()
b9.r=A.av.gp(0)
b9.c=6
b9.d=A.bG
c1.ah(D.Uw,h,b9)
b9=B.L()
b9.r=(c2.w?A.bc:A.bO).gp(0)
b9.c=4
b9.d=A.bG
c1.ah(D.Uw,h,b9)
b9=B.kM(D.Uw,h,0.85)
b9.toString
w=B.L()
w.r=A.aA.gp(0)
c1.O(b9,5,w)
break
case"fuse":g=B.bx(D.aT0,D.aSn)
b9=B.L()
b9.r=A.ft.j(0.25).gp(0)
c1.aq(g,b9)
b9=B.L()
b9.b=A.aa
b9.c=1.4
b9.r=A.aF.gp(0)
c1.aq(g,b9)
if(!t){b9=B.L()
b9.c=1.6
b9.r=B.ap(A.bO,A.cO,c2.fx).gp(0)
c1.ah(D.aNn,D.aN2,b9)}else{b9=B.L()
b9.c=1.6
b9.r=A.bV.gp(0)
c1.ah(D.aNn,D.evw,b9)
b9=B.L()
b9.c=1.6
b9.r=A.bV.gp(0)
c1.ah(D.et5,D.aN2,b9)
b9=B.L()
b9.r=A.dZ.gp(0)
c1.O(A.J,6,b9)}for(f=0;f<2;++f){e=B.bW(new B.r(M.fO[f]*22,0),20,9)
c1.aq(B.bx(e,A.iF),b3.PS(e,A.d6,A.oh,!0))}break
case"pot":b9=B.L()
b9.san(D.eEx.aD(0,B.bV(A.J,21)))
c1.O(A.J,21,b9)
for(l=0;l<=10;++l){d=2.356194490192345+l*3.141592653589793*1.5/10
b9=Math.cos(d)
w=Math.sin(d)
v=Math.cos(d)
m=Math.sin(d)
k=new B.ar(A.S,A.Q,A.V,A.X,A.U)
k.r=A.aF.gp(0)
k.c=1.2
c1.ah(new B.r(b9*18,w*18),new B.r(v*22,m*22),k)}b9=B.L()
b9.san(D.eEk.aD(0,B.bV(A.J,13)))
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
case"resistor":a1=B.bx(D.aT0,D.aSn)
b9=B.L()
b9.san(D.cc3.aD(0,new B.a4(a1.a,a1.b,a1.c,a1.d)))
c1.aq(a1,b9)
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
c1.aF(D.fdR,b9)
b9=c2.r
b3.qY(c1,b9>=1000?"1k\u03a9":""+A.i.V(b9)+"\u03a9",D.euv,A.ab,10)
break
case"bulb":w=c2.fx
if(w>0){v=B.L()
v.r=A.ex.j(0.55*w).gp(0)
v.y=A.CU
c1.O(H.vE,34,v)}o=B.bW(D.eqY,12,18)
c1.aq(B.bx(o,A.iF),b3.PS(o,A.bj,A.dY,!0))
for(p=0;p<3;++p){w=13+p*3.5
v=new B.ar(A.S,A.Q,A.V,A.X,A.U)
v.r=A.dB.gp(0)
v.c=1
c1.ah(new B.r(-9,w),new B.r(9,w),v)}w=B.L()
if(t)v=A.MR
else{v=B.ap(A.dY,A.hL,c2.fx)
m=c2.fx
v=v.j(0.25+0.7*m)}if(t)m=A.Gp
else{m=B.ap(A.d_,A.ex,c2.fx)
m.toString}w.san(new B.bS(A.nj,0.5,A.x,b4,0,B.a([v,m.j(0.18+0.5*c2.fx)],x.O),b4,b4).aD(0,B.bV(A.tI,17)))
c1.O(A.tI,17,w)
w=B.L()
w.b=A.aa
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.O(A.tI,17,w)
b9=b9.r
w=x.v
m=new B.aH(b9,A.aj,b4,b4,B.a([],w))
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
c1.ah(D.evq,D.evs,v)
v=B.L()
v.r=A.cC.gp(0)
v.c=1.4
c1.ah(D.esZ,D.et1,v)
w=B.a([],w)
a4=new B.aH(b9,A.aj,b4,b4,w)
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
else{w=B.ap(A.d_,D.bnF,c2.fx)
w.toString}b9.r=w.gp(0)
c1.af(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=B.L()
v.r=A.aA.j(0.6*w).gp(0)
v.y=D.bKp
c1.O(A.tI,30,v)}w=B.L()
w.r=A.dY.gp(0)
w.c=2.4
c1.ah(D.evy,D.evx,w)
w=B.L()
w.r=A.dY.gp(0)
w.c=2.4
c1.ah(D.et7,D.et6,w)
b9=b9.r
w=x.v
a6=new B.aH(b9,A.aj,b4,b4,B.a([],w))
a6.E(new B.aZ(-12,8))
a6.E(new B.aq(-12,-6))
a6.E(new B.ce(0,-26,12,-6))
a6.E(new B.aq(12,8))
a6.E(new B.bw())
v=B.L()
if(t)m=A.jp
else{m=B.ap(A.eq,D.bpq,c2.fx)
m.toString}if(t)k=A.kT
else{k=B.ap(A.ky,A.aA,c2.fx)
k.toString}v.san(new B.a7(A.ay,A.aC,A.x,B.a([m,k],x.O),b4,b4).aD(0,D.fcJ))
c1.af(a6,v)
v=B.L()
v.b=A.aa
v.c=1.2
v.r=A.k0.gp(0)
c1.af(a6,v)
v=B.L()
v.r=A.er.gp(0)
c1.aF(D.fcP,v)
w=new B.aH(b9,A.aj,b4,b4,B.a([],w))
w.E(new B.aZ(-7,-4))
w.E(new B.ce(-6,-12,0,-15))
b9=B.L()
b9.b=A.aa
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.af(w,b9)
break
case"motor":a7=new B.a4(-28,-14,20,14)
c1.aq(B.bx(a7,A.ir),b3.ayw(a7,A.an,A.bm))
b9=B.L()
b9.r=A.ct.gp(0)
c1.aF(D.fci,b9)
b9=B.L()
b9.r=A.cA.gp(0)
c1.aF(D.fck,b9)
b9=c1.c
J.br(b9.save())
b9.translate(31,0)
for(l=0;l<3;++l){J.br(b9.save())
b9.rotate((c2.y+l*2.094)*180/3.141592653589793,0,0)
w=B.bW(H.aMQ,15,7)
v=new B.ar(A.S,A.Q,A.V,A.X,A.U)
v.r=A.cO.j(0.9).gp(0)
c1.c0(w,v)
b9.restore()}w=B.L()
w.r=A.av.gp(0)
c1.O(A.J,3,w)
b9.restore()
b3.qY(c1,"M",D.ev1,A.av,14)
break
case"buzzer":a8=B.bW(A.J,42,42)
b9=B.L()
b9.san(D.eEB.aD(0,a8))
c1.c0(a8,b9)
b9=B.L()
b9.r=A.w.gp(0)
c1.O(A.J,6,b9)
b9=B.L()
b9.b=A.aa
b9.c=1.4
b9.r=A.aT.gp(0)
c1.O(A.J,6,b9)
b3.qY(c1,"+",D.euV,A.ab,12)
for(b9=b3.b,l=1;l<=3;++l){w=c2.fx
v=w>0?A.i.F(b9.d*14,5):0
v=B.bV(A.J,24+l*5+v)
m=new B.ar(A.S,A.Q,A.V,A.X,A.U)
m.b=A.aa
m.c=2
m.r=A.c4.j(w*(1-l*0.22)).gp(0)
c1.cQ(v,-0.7,1.4,!1,m)}break
case"heater":o=B.bx(D.fdk,A.ir)
w=B.L()
w.san(D.c9E.aD(0,new B.a4(o.a,o.b,o.c,o.d)))
c1.aq(o,w)
w=B.a([],x.v)
a9=new B.aH(b9.r,A.aj,b4,b4,w)
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
w.r=D.boo.j(0.5*b9).gp(0)
w.y=A.kY
c1.af(a9,w)}$.S()
b9=B.L()
b9.b=A.aa
b9.c=3.2
b9.d=A.bG
b9.r=B.ap(A.m9,Ab.yC,c2.fx).gp(0)
c1.af(a9,b9)
break
case"capacitor":a7=new B.a4(-16,-22,16,18)
b9=B.bx(a7,A.ir)
w=B.L()
w.san(D.c8u.aD(0,a7))
c1.aq(b9,w)
w=B.L()
w.r=A.bO.gp(0)
c1.aF(D.fcY,w)
for(p=0;p<4;++p){b0=new B.iC(new B.er("\u2212",b4,b4,A.cM,b4,b4,b4,b4,b4,b4,new B.G(!0,A.av,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a7,A.c1,new B.jn(1),b4,b4,b4,b4,A.c2,b4,A.cx)
b0.eo()
b0.a4(c1,new B.r(-14,-18+p*9))}b1=new B.a4(-16,-24,16,-17)
c1.aq(B.bx(b1,A.iF),b3.c7S(b1,!1))
b9=38*c2.fx
w=18-b9
$.S()
v=B.L()
v.r=A.bc.j(0.5).gp(0)
c1.aF(new B.a4(-3,w,11,w+b9),v)
b3.qY(c1,"1F",H.vE,A.c,11)
break
case"radio":a1=B.bx(D.aap,A.fR)
b9=B.L()
b9.san(D.cch.aD(0,new B.a4(a1.a,a1.b,a1.c,a1.d)))
c1.aq(a1,b9)
b9=B.L()
b9.b=A.aa
b9.c=1.4
b9.r=A.oh.j(0.6).gp(0)
c1.aq(a1,b9)
b9=B.bx(D.fdl,A.jy)
w=B.L()
w.r=A.dW.gp(0)
c1.aq(b9,w)
for(p=0;p<6;++p){b9=-10+p*4.4
w=new B.ar(A.S,A.Q,A.V,A.X,A.U)
w.r=A.m9.gp(0)
w.c=1.4
c1.ah(new B.r(-27,b9),new B.r(-3,b9),w)}b9=B.L()
b9.r=(c2.fx>0?A.fZ:A.oj).gp(0)
c1.aF(D.fcp,b9)
if(c2.fx>0){b9=8+A.i.F(b3.b.d*7,18)
w=B.L()
w.r=A.bD.gp(0)
w.c=1.6
c1.ah(new B.r(b9,-13),new B.r(b9,-3),w)}b9=B.L()
b9.san(D.aSi.aD(0,B.bV(D.a9m,6)))
c1.O(D.a9m,6,b9)
b9=B.L()
b9.r=A.oh.gp(0)
c1.O(D.esd,4,b9)
b9=B.L()
b9.r=A.dY.gp(0)
b9.c=1.8
c1.ah(D.es8,D.aN9,b9)
if(c2.fx>0)for(b9=b3.b,l=1;l<=2;++l){w=B.bV(D.aN9,4+l*5+A.i.F(b9.d*8,5))
v=new B.ar(A.S,A.Q,A.V,A.X,A.U)
v.b=A.aa
v.c=1.4
v.r=A.oq.j(0.7).gp(0)
c1.cQ(w,-2.4,1.6,!1,v)}break
case"tv":w=B.bx(D.fdv,A.ir)
v=B.L()
v.r=M.mX.gp(0)
c1.aq(w,v)
b2=B.bx(D.fds,A.iF)
if(c2.fx>0&&!c2.x){b9=c1.c
J.br(b9.save())
b9.clipRRect(B.n6(b2),$.mK(),!0)
b9.translate(-33,-21)
L.fYk(c1,D.fkg,c2.at,b3.b.d,c2.ax,-1,b4,b4)
b9.restore()
b9=B.L()
b9.r=A.bc.gp(0)
c1.O(D.esp,1.6,b9)}else{w=B.L()
w.r=D.wp.gp(0)
c1.aq(b2,w)
b9=new B.aH(b9.r,A.aj,b4,b4,B.a([],x.v))
b9.E(new B.aZ(-33,-21))
b9.E(new B.aq(-10,-21))
b9.E(new B.aq(-33,0))
b9.E(new B.bw())
w=B.L()
w.r=A.c.j(0.05).gp(0)
c1.af(b9,w)}b9=B.L()
b9.r=A.by.gp(0)
c1.aF(D.fcO,b9)
break}C.itu(c1,c2,b3.b.d,b3.gcct())
if(t)b3.qY(c1,"\u2716",D.evB,A.aA,14)
if(s)c1.c.restore()},
bGU(d,e){var w,v,u,t,s,r,q,p,o=this,n=e.e
if(n<=4.5){w=new B.a4(-28,-13,28,13)
d.aq(B.bx(w,A.nZ),o.ayw(w,A.d_,A.iO))
v=new B.a4(-22,-13,22,13)
$.S()
u=B.L()
u.san(D.au4.aD(0,v))
d.aF(v,u)
u=B.L()
u.r=A.e2.gp(0)
d.aF(D.fd7,u)
t=new B.a4(28,-5,34,5)
d.aq(B.bx(t,A.hE),o.PS(t,A.d_,A.hY,!0))
o.qY(d,"+",D.erP,A.aQ,11)
o.qY(d,"\u2212",D.ev3,A.ab,11)
o.qY(d,B.w(n===A.i.fK(n)?A.i.V(n):n)+"V",D.euK,A.aQ,13)
if(n===1.5){u=B.L()
u.r=A.bw.gp(0)
d.aF(D.fd6,u)
u=e.as
s=B.L()
s.r=B.ap(A.aA,A.bc,u).gp(0)
d.aF(new B.a4(-22,14,-22+44*u,18),s)
if(e.as<=0.02)o.qY(d,"FLAT",D.euu,A.bX,9)}if(n>2){u=B.L()
u.r=A.aT.gp(0)
u.c=1
d.ah(D.er6,D.aMI,u)
o.qY(d,n>3?"3 cells":"2 cells",D.euJ,A.aF,8)}}else if(n<=9){r=new B.a4(-22,-17,22,17)
u=B.bx(r,A.nZ)
$.S()
s=B.L()
s.san(D.cbR.aD(0,r))
d.aq(u,s)
s=B.L()
s.r=A.dn.gp(0)
d.aF(D.fd8,s)
for(q=0;q<2;++q){p=F.aDF[q]
u=p<0?5:3.6
s=new B.ar(A.S,A.Q,A.V,A.X,A.U)
s.san(D.aSh.aD(0,B.bV(new B.r(p,-18),5)))
d.O(new B.r(p,-18),u,s)}o.qY(d,"9V",D.euC,A.c,16)}else{r=new B.a4(-34,-16,34,16)
u=B.bx(r,A.jy)
$.S()
s=B.L()
s.san(D.au4.aD(0,r))
d.aq(u,s)
s=B.L()
s.r=A.bt.gp(0)
d.aF(D.fdu,s)
for(q=0;q<2;++q){u=B.bx(B.bW(new B.r(F.J0[q],-20),8,10),A.hE)
s=new B.ar(A.S,A.Q,A.V,A.X,A.U)
s.r=A.cA.gp(0)
d.aq(u,s)}o.qY(d,"+",D.erY,A.aA,10)
o.qY(d,"12V",D.euG,A.av,15)}},
aE(d){return!0}}
C.n1.prototype={
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
n.ass(o,r,q,p)
k.push(n)
J.iI(s[4],new C.cuI(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.I)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.amn(m,u[1],l,u[3])}}}
C.akh.prototype={
S(){var w=x.N
return new C.aki(B.c_(2000,1,1,0,0,0,0,0),A.J,A.az,B.T(w,x.gl),B.aR(w),$,A.bC,0,B.a([],x.X),null,null)}}
C.aki.prototype={
afz(d){var w=this,v=w.ch
if(v!=null)v.a1(0)
w.m(new C.bKD(w,d))
w.ch=B.cz(A.lN,new C.bKE(w))},
t(){var w=this.ch
if(w!=null)w.a1(0)
w=this.db
if(w!=null)w.a1(0)
this.bww()},
a1b(d,e){return this.ckY(d,e)},
b3N(d){return this.a1b(d,!1)},
ckY(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a1b=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
r=d.at
q=e?A.t2:A.yM
p=d.b
w=3
return B.b(L.hk1(s,r,p,d.ax<3.2,q,$.qK().h(0,p).b),$async$a1b)
case 3:o=g
t.cy=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a1b,v)},
cxI(d){var w=this,v=new B.V(Date.now(),0,!1),u=w.CW.c1(0,d.a,new C.bKF()),t=J.cE(u)
t.I(u,v)
t.bq(u,new C.bKG(v))
if(t.gJ(u)>=4){t.a8(u)
t=w.db
if(t!=null)t.a1(0)
w.a2v(d)
return}if(t.gJ(u)===3){t=w.db
if(t!=null)t.a1(0)
w.db=B.cz(A.iR,new C.bKH(w,u,d))}},
a0S(d){return this.cjj(d)},
cjj(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a0S=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
w=3
return B.b(C.iuJ(s,d.b,A.i.V(A.i.F(t.a.c.d*0.12,1)*100)),$async$a0S)
case 3:t.cy=!1
case 1:return B.h(u,v)}})
return B.i($async$a0S,v)},
a2v(d){return this.cvi(d)},
cvi(d){var w=0,v=B.j(x.H),u=this,t
var $async$a2v=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bT(A.L,null,new C.bKB(u,d),t,!0,!0,!0,null,!1,!1,x.H),$async$a2v)
case 2:return B.h(null,v)}})
return B.i($async$a2v,v)},
Y(){this.a3()
this.biQ()
this.mk()},
biQ(){this.a.c.e=new C.bKX(this)},
mE(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.vO(0,d)
for(w=q.a.c.a,v=w.length,u=q.cx,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=D.mu.h(0,s.b)
if((r==null?null:r.b)!==D.AN)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.q(0,s.a)&&!q.cy){u.I(0,s.a)
q.a1b(s,!0)}}else u.W(0,s.a)}if((q.ax+=d)>0.16){q.ax=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)G.dA(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)G.dA(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cT.ai()<0.5
else u=!1
if(u)G.dA(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){G.dA(900+A.cT.aw(800),"",90,0,0.1,o)
if(A.cT.ai()<0.35)G.dA(300+A.cT.aw(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cT.ai()<0.4
else u=!1
if(u)G.dA(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)G.dA(330+A.o.F(110*A.i.bg(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)G.dA((A.i.bg(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)G.dA(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)G.dA(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cT.ai()<0.5
else u=!1
if(u)G.dA(1200,"",30,0,0.07,o)
break
case"turbine":u=s.f
if(u>0.1)G.dA(80,"",150,0,0.05*u,o)
break
case"crank":u=s.f
if(u>0.15)G.dA(110+u*140,"",70,0,0.08,"saw")
break}}}w=q.a.w
if(w!=null)w.$0()
q.m(new C.bKY())},
baS(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.at
l=p.c
k=n===0?-1:1
j=D.mu.am(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new B.y(p,n)
r=i}}}return s},
b4t(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.U(w).k("ds<1>"),w=new B.ds(w,v),w=new B.bQ(w,w.gJ(0),v.k("bQ<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.at
p=s.d
o=D.mu.am(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cKB(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
o=p.a
n=this.at
m=o.c
l=p.b===0?-1:1
k=D.mu.am(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.at
m=o.c
j=p.d===0?-1:1
i=D.mu.am(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=C.hIY(new B.r(k,n),new B.r(i,l),p)
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
afx(){this.a.toString
this.m(new C.bK2())},
bta(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.dfs[v]
if(!A.d.aU(p.a.c.a,new C.bKZ(u,w))){o=new B.r(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?Z.AC:o
s=s?Z.AC:o
q=t.aly(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.x=null
G.dA(1200,"",50,0,0.3,"tri")
p.afx()},
B(d){var w,v,u,t,s,r,q,p,o,n=this
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.ST[v].a)
u=w.length
t=u>8
s=t?A.d.du(w,0,A.o.ar(u+1,2)):w
r=t?A.d.fN(w,A.o.ar(w.length+1,2)):A.Z
q=n.a.d
if(q!=null){w=B.a3(q).k("cr<1>")
w=B.C(new B.cr(q,w),w.k("M.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.I)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b4i(s,!0))
n.a.toString
if(t)w.push(n.b4i(r,!0))
w.push(B.E(B.cm(new C.bKW(n,q)),1))
return B.x(w,A.l,null,A.e,A.h,0,A.p)},
b4i(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=$.qK()
s=t.h(0,u).d.j(0.14)
r=new B.aP(14,14)
q=new B.ay(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.az(p,B.p(p,B.x(B.a([B.d(t.h(0,u).c,p,p,p,p,p,p,A.xD,p,p,p),B.d(t.h(0,u).b,p,1,A.a2,p,p,p,A.o2,p,p,p)],n),A.l,p,A.b8,A.h,0,A.p),A.f,p,p,new B.o(s,p,new B.bG(q,q,q,q),new B.be(r,r,r,r),p,p,A.n),p,p,p,K.oy,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bK3(this,u),p,p,p,p,p,p,!1,A.a4))}return B.p(p,B.cw(m,p,p,A.hl,p,p,A.aM,!1),A.f,p,p,new B.o(K.C9,p,new B.bG(A.a1,A.a1,new B.ay(o,1,A.r,-1),A.a1),p,p,p,A.n),p,58,p,p,p,p,p,p)},
cn5(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a2.b,a1=$.qK().h(0,a0)
a1.toString
w=a2.dy
v=a2.fr
u=new C.bKp(e,a1)
t=new C.bKo()
s=B.l(20)
r=a1.d
q=B.K(r.j(0.55),A.r,1.3)
p=B.a([new B.ab(0,A.G,r.j(0.18),A.cz,16)],x.V)
o=r.j(0.18)
n=B.l(10)
n=B.p(A.z,B.d(a1.c,d,d,d,d,d,d,A.xD,d,d,d),A.f,d,d,new B.o(o,d,d,n,d,d,A.n),d,34,d,d,d,d,d,34)
o=B.E(B.d(a1.b,d,1,A.a2,d,d,d,B.m(d,d,r,d,d,d,d,d,d,d,d,15,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d),1)
m=B.l(999)
l=B.K(A.aT,A.r,1)
k=x.p
m=B.a([B.A(B.a([n,A.ae,o,B.az(d,B.p(d,B.d(e.f?"Less":"About",d,d,d,d,d,d,A.W3,d,d,d),A.f,d,d,new B.o(d,d,l,m,d,d,A.n),d,d,d,d,A.oz,d,d,d),A.y,!1,D.hx_,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.bKa(e),d,d,d,d,d,d,!1,A.a4),B.aI(d,d,d,d,D.c40,d,d,d,new C.bKb(e,a2),d,d,d,d,"Remove part",A.cg),B.aI(d,d,d,d,A.Qm,d,d,d,new C.bKc(e),d,d,d,d,d,A.cg)],k),A.l,d,A.e,A.h,0,d,d)],k)
if(e.f)A.d.u(m,B.a([B.d(a1.e,d,d,d,d,d,d,A.KR,d,d,d),A.cR,B.d("How it is made: "+a1.f,d,d,d,d,d,d,T.aWW,d,d,d)],k))
m.push(A.am)
if(a2.x)m.push(D.fN_)
else m.push(new B.D(A.f1,B.A(B.a([t.$2(A.i.ad(Math.abs(a2.dy),2),"VOLTS"),A.bn,t.$2(A.i.ad(Math.abs(a2.fr)*1000,0),"MILLIAMPS"),A.bn,t.$2(A.i.ad(Math.abs(w*v),2),"WATTS")],k),A.l,d,A.e,A.h,0,d,d),d))
j=e.a.c.bgI(a2)
if(j!=null){a1=(a2.x?A.aA:A.at).j(0.14)
w=B.l(10)
v=B.K((a2.x?A.aA:A.at).j(0.5),A.r,1)
m.push(new B.D(A.ig,B.p(d,B.d((a2.x?"Why it burnt out":"Why it is not working")+": "+j,d,d,d,d,d,d,D.fIU,d,d,d),A.f,d,d,new B.o(a1,d,v,w,d,d,A.n),d,d,d,d,A.cq,d,d,d),d))}if(C.hhx(a0)){a1=B.a([],k)
for(i=0;i<10;i=h){h=i+1
a1.push(new B.D(A.f1,new E.dZ("CH "+h,a2.at===i,new C.bKg(e,a2,i),d,r,d),d))}a1=B.c9(B.A(a1,A.l,d,A.e,A.h,0,d,d),A.t,d,A.y,d,d,d,d,d,A.aM)
if(e.a.c.rw(a2)){w=F.SH[A.o.F(a2.at,10)]
v=e.f?" Tap the TV 3 times quickly to open the big screen.":""
v="Showing: "+w.a+"."+v
w=v}else w="The TV is off. Give it power with the + dot towards the battery +."
a1=B.a([A.am,a1,A.ax,B.d(w,d,e.f?4:1,A.a2,d,d,d,A.ht,d,d,d)],k)
if(e.a.c.rw(a2))a1.push(new E.fD(A.wU,"Open big screen",new C.bKh(e,a2),r,d))
A.d.u(m,a1)}if(D.mu.am(0,a0)&&!C.hhx(a0)){a1=B.a([A.am],k)
if(e.f||!e.a.c.rw(a2))a1.push(B.d(e.a.c.rw(a2)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",d,d,d,d,d,d,A.ht,d,d,d))
if(e.a.c.rw(a2))a1.push(new E.fD(A.Q4,"Open the "+$.qK().h(0,a0).b,new C.bKi(e,a2),r,d))
A.d.u(m,a1)}if(D.mu.am(0,a0))A.d.u(m,B.a([A.am,new E.fD(A.Dl,"Make it bigger (or tap it 4 times)",new C.bKj(e,a2),r,d)],k))
e.a.toString
a1=a0==="buck"
if(a1||a0==="regulator"){w=A.i.ad(a2.db,1)
if(e.a.c.rw(a2))v=a2.dx
else{e.a.toString
v=a0==="regulator"?5:a2.e}v=B.a([A.am,B.d("Volts in: "+w+" V   \u2192   Volts out: "+A.i.ad(v,1)+" V",d,d,d,d,d,d,D.fCO,d,d,d)],k)
if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dy7[g]
w=f===A.i.fK(f)?A.i.V(f):f
a1.push(new E.dZ(B.w(w)+" V out",a2.e===f,new C.bKk(e,a2,f),d,r,d))}v.push(new B.D(A.ln,B.bZ(A.bI,a1,A.br,d,0,6),d))}if(a0==="regulator")v.push(D.h11)
A.d.u(m,v)}if(e.a.c.Mt(a2)&&!a2.x){a1=A.i.ad(a2.cx,2)
w=A.i.ad(e.a.c.An(a2),2)
v=e.a.c
o=v.ap9(a2)?"   \u26a0 OVERLOADED":""
a1=B.d("Supplying "+a1+" A of the "+w+" A it can give"+o,d,d,d,d,d,d,B.m(d,d,v.ap9(a2)?A.bX:A.ew,d,d,d,d,d,d,d,d,12.5,d,d,A.H,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
w=B.l(4)
o=A.i.D(a2.cx/e.a.c.An(a2),0,1)
v=e.a.c.ap9(a2)?A.aA:A.bc
m.push(new B.D(A.ig,B.x(B.a([a1,A.cR,B.bu(w,B.ku(A.bw,d,d,5,d,o,new B.lQ(v,x.c)),A.aq)],k),A.E,d,A.e,A.h,0,A.p),d))}a1=a0==="battery"
if(a1&&a2.e===1.5){w=a2.as
v=A.i.V(w*100)
if(w<=0.02)w="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else w=w>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.D(A.ig,B.d("Charge: "+v+"%"+w,d,d,d,d,d,d,D.fwm,d,d,d),d))}if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dmK[g]
w=f===1.5?"1.5 V (rechargeable)":B.w(f)+" V"
a1.push(new E.dZ(w,a2.e===f,new C.bKl(e,a2,f),d,r,d))}m.push(B.bZ(A.bI,a1,A.br,d,0,6))}if(a0==="resistor"){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dcB[g]
w=f>=1000?"1 k\u03a9":""+A.o.V(f)+" \u03a9"
a1.push(new E.dZ(w,a2.r===f,new C.bKm(e,a2,f),d,r,d))}m.push(B.bZ(A.bI,a1,A.br,d,0,6))}if(a0==="solar")m.push(u.$3("Sunlight",a2.f,new C.bKn(a2)))
if(a0==="turbine")m.push(u.$3("Wind",a2.f,new C.bKd(a2)))
if(a0==="pot")m.push(u.$3("Knob",a2.f,new C.bKe(a2)))
if(a0==="ldr")m.push(u.$3("Light",a2.f,new C.bKf(a2)))
if(a0==="crank")m.push(D.fXj)
if(a0==="switch")m.push(B.d(a2.w?"Closed: the loop is joined up.":"Open: the loop is broken.",d,d,d,d,d,d,A.ht,d,d,d))
return B.p(d,new B.cN(D.b85,B.c9(B.x(m,A.E,d,A.e,A.N,0,A.p),A.t,d,A.y,d,d,d,d,d,A.ah),d),A.f,d,d,new B.o(F.YN,d,q,s,p,d,A.n),d,d,D.hwk,d,D.bEy,d,d,d)}}
C.bdG.prototype={}
C.Ws.prototype={
S(){return new C.aFC(C.hnG(),new B.cx(null,x.gJ),B.aR(x.S))}}
C.aFC.prototype={
Y(){this.a3()
$.aU.bZ$.push(this)
this.afy()},
afy(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fLE(),$async$afy)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.itT(t.d,r)
if(s!=null){t.m(new C.e28(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$afy,v)},
FB(){var w,v=this
if(!v.as)return
w=C.iko(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bHa(w)},
jn(d){if(d!==A.fW)this.FB()},
t(){$.aU.hZ(this)
this.FB()
this.a2()},
ccv(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.U(v).k("Y<1>")
t=new B.Y(v,new C.e2h(q),u).gJ(0)
s=new B.Y(v,new C.e2i(),u).gJ(0)
r=new B.Y(v,w.gd_6(),u).gJ(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new C.e2j(q,t,s,r))}if(A.o.F(q.w,45)===0)q.FB()
if(A.o.F(q.w,10)===0){w=q.f
$.ajn()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.q(0,q.f)&&$.ajn()[q.f].c.$1(q.d)){w.I(0,q.f)
C.JP("bell",B.a([0,4,7,12],x.t),700,0.45)
q.m(new C.e2k())
q.FB()
w=q.c
w.toString
w=B.Ki(w)
if(w!=null)w.T(B.b2(p,p,p,p,p,A.t,p,B.d("\u2705 Challenge done: "+$.ajn()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mZ,p,p,p,p,p,p,p,p,p,p))}},
aim(){var w=0,v=B.j(x.H),u=this,t
var $async$aim=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cg(null,null,!0,null,new C.e27(u),t,null,!0,!0,x.H),$async$aim)
case 2:return B.h(null,v)}})
return B.i($async$aim,v)},
b1A(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.l(12),t=B.K(f.j(0.45),A.r,1)
u=B.a([B.ao(w,B.p(w,B.W(d,f,w,w,w,18),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ao(w,h,w,w,w,-1,-3,w))
return B.az(w,B.hc(new B.a5(40,38,new B.an(A.a0,w,A.ad,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4)},
b1z(d,e,f,g){return this.b1A(d,e,f,g,null)},
at8(d,e,f,g){var w=null,v=f.j(0.1),u=B.l(10),t=B.K(f.j(0.4),A.r,1)
return B.E(B.az(w,B.p(w,B.A(B.a([B.W(d,f,w,w,w,15),A.e7,new B.di(1,A.cm,B.d(e,w,1,A.a2,w,w,w,B.m(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.b8,A.h,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),1)},
agH(){var w=0,v=B.j(x.H),u=this,t
var $async$agH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a6(t,!1).ce(B.ee(new C.e23(u),!1,null,x.H)),$async$agH)
case 2:t=u.e.gbl()
if(t!=null)t.biQ()
if(u.c!=null)u.m(new C.e24())
u.FB()
return B.h(null,v)}})
return B.i($async$agH,v)},
bK2(){var w,v,u,t,s=null,r=this.f
$.ajn()
if(r>=11)return s
w=this.r
v=w.q(0,r)
r=v?A.bi:A.aA
u=B.l(9)
t=B.K(K.C9,A.r,1.5)
return B.p(s,B.as(B.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.xG,s,s,s),s,s,s),A.f,s,D.b7W,new B.o(r,s,t,u,s,s,A.n),s,s,s,s,A.f5,s,s,s)},
ajw(){var w=0,v=B.j(x.H),u=this,t
var $async$ajw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bT(F.mW,null,new C.e2g(u),t,!0,!0,!0,A.kn,!1,!1,x.H),$async$ajw)
case 2:return B.h(null,v)}})
return B.i($async$ajw,v)},
ccw(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.az(r,B.p(r,D.c0E,A.f,r,r,new B.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e2m(d),r,r,r,r,r,r,!1,A.a4),o=B.l(11)
o=B.p(r,D.bdU,A.f,r,r,new B.o(A.bs,r,B.K(A.aG.j(0.45),A.r,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.p(r,B.x(B.a([B.A(B.a([p,A.ae,o,A.ae,B.E(B.x(B.a([D.h__,B.d(w,r,1,A.a2,r,r,r,B.m(r,r,s.y>0||s.z>0?A.f_:A.h9,r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.E,r,A.e,A.h,0,A.p),1),new C.azA(s.gcj1(),r),A.vM,s.b1z(A.qR,"Construction Lab: real 3D wiring, plumbing and a house",A.cO,new C.e2n(s,d)),s.b1A(A.lS,"Challenges",A.aQ,s.gcAh(),s.bK2()),s.b1z(A.Dg,"How to play",A.aG,new C.e2o(d,e))],v),A.l,r,A.e,A.h,0,r,r),A.am,B.A(B.a([s.at8(A.oG,"Circuits",A.bh,s.gct9()),A.bn,s.at8(A.oE,"Repair",A.aQ,new C.e2p(s)),A.bn,s.at8(I.wS,"Clear",A.bX,new C.e2q(s))],v),A.l,r,A.e,A.h,0,r,r)],v),A.l,r,A.e,A.N,0,A.p),A.f,r,r,new B.o(K.C9,r,new B.bG(A.a1,A.a1,new B.ay(q,1,A.r,-1),A.a1),r,r,r,A.n),r,r,r,r,D.bJK,r,r,r)},
B(d){var w=this,v=null
$.atV="tech"
return B.c4(v,A.c5,B.bm(!0,B.x(B.a([w.ccw(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.hmx(w.d,w.e,w.gccu(),v),1)],x.p),A.l,v,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
C.azA.prototype={
S(){return new C.bbO(null,null)}}
C.bbO.prototype={
gazt(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,A.Y,null,1,null,v)
w.cK(0)
v.d!==$&&B.bD()
v.d=w
u=w}return u},
t(){this.gazt().t()
this.bxS()},
B(d){var w=null,v=this.a.c
return B.az(w,B.hc(new B.a5(42,42,B.c6(this.gazt(),new C.cMf(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bbN.prototype={
a4(d,e){var w,v,u,t=null,s=e.ej(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.S()
w=B.L()
w.r=A.b7.j(0.25+0.15*o).gp(0)
w.y=N.oA
d.O(s,r+2+o*2,w)
w=B.L()
w.san(D.eEw.aD(0,B.bV(s,r)))
d.O(s,r,w)
v=B.L()
v.b=A.aa
v.c=2.2
v.san(new B.h4(A.z,0,6.283185307179586,A.x,D.d37,t,new B.mR(p)).aD(0,B.bV(s,r)))
d.O(s,r,v)
p=new C.cMe(d)
p.$3(s.a5(0,A.tI),8+o*1.5,1)
q*=4
p.$3(s.a5(0,D.etk),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a5(0,D.evI),2.6,0.5+0.5*Math.cos(q))
u=B.fE(t,A.cx,t,t,t,D.fsJ,A.a7,A.c1,t,A.dJ,A.c2)
u.eo()
u.a4(d,s.a5(0,new B.r(-u.b.c/2,5)))},
aE(d){return d.b!==this.b}}
C.azV.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.azW.prototype={
t(){var w,v,u
for(w=this.h9$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h8$
w===$&&B.c()
w.t()
this.bwv()}}
C.aM9.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.bAr.prototype={}
C.fW.prototype={}
C.Kj.prototype={
a7(){return"ScreenStyle."+this.b}}
C.m5.prototype={}
C.Wb.prototype={
S(){return new C.aFs(Z.AC,null,null)}}
C.aFs.prototype={
gaaG(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,A.ox,null,1,null,v)
w.cr(0)
v.d!==$&&B.bD()
v.d=w
u=w}return u},
gabp(){var w=D.mu.h(0,this.a.c)
return w==null?D.aTi:w},
t(){if(this.f){O.CU(V.KL)
O.bFD()}this.gaaG().t()
this.bzK()},
gBH(){var w=this.gaaG().y
w=w==null?null:A.o.ar(w.a,1000)
return(w==null?0:w)/1000},
O4(){var w,v=this,u=v.e
if(u==null)return null
w=F.ik[u].e
if(w===-2)return null
if(w===-1)return A.o.F(v.y+A.i.bg(Math.max(0,v.gBH()-v.z)/10),14)
return w},
JO(d){this.m(new C.dZ4(this,d))},
b4O(d){this.m(new C.dZ5(this,d,14))},
aDh(d){var w=this.O4()
if(w==null)w=d>0?-1:0
return this.b4O(w+d)},
cFh(d,e){if(e.a<=0||e.b<=0||this.O4()==null)return
this.m(new C.dZf(this,d,e))},
adA(){return this.c4T()},
c4T(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$adA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.O4()
if(q==null){w=1
break}r.a=!1
s=t.c
s.toString
w=3
return B.b(B.bT(A.L,null,new C.dZ3(r,q),s,!0,!0,!0,null,!1,!1,x.H),$async$adA)
case 3:if(t.c!=null&&r.a)t.b4O(q)
case 1:return B.h(u,v)}})
return B.i($async$adA,v)},
cGP(){var w=this,v=!w.f
w.m(new C.dZg(w,v))
if(v){O.CU(V.aby)
O.him(w.gabp().b===D.xr)}else{O.CU(V.KL)
O.bFD()}},
ccz(){var w,v=this
if(!v.f)return
B.ju()
v.m(new C.dZh(v))
w=v.c.L(x.q).f
w.Mh()
if(v.r)w.T(F.aVp)},
aPW(d){return B.cm(new C.dYX(this,d))},
cmu(d){var w,v=this,u=null,t=v.gBH(),s=t-v.w,r=s<1.4?new L.b_x(v.x,s):u
if(F.ik[d].e===-1){w=Math.max(0,t-v.z)
return new C.ag1(d,w,r,A.o.F(v.y+A.i.bg(w/10),14),u)}return new C.ag1(d,t,r,u,u)},
aZA(d){var w=null,v=A.c.j(0.92),u=d*0.42
return B.aG(!1,A.a3,!0,w,B.aM(!1,w,!0,new B.D(new B.Q(u,0,u,0),B.A(B.a([B.W(A.l_,A.av,w,w,w,d*0.6),new B.a5(d*0.18,w,w,w),B.d("Learn more",w,w,w,w,w,w,B.m(w,w,A.av,w,w,w,w,w,w,w,w,d*0.48,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.N,0,w,w),w),A.o0,!0,w,w,w,w,D.hwm,w,w,w,w,w,w,this.gc4S(),w,w,w,w,w,w,w),A.f,v,0,w,w,A.o0,w,w,A.ai)},
b1B(d,e,f,g){var w=null,v=B.ne(w,A.b5,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w)
return B.aI(w,w,w,w,B.W(d,A.c,w,w,w,w),w,w,g,f,w,w,w,v,e,w)},
ccy(d,e,f){return this.b1B(d,e,f,null)},
cus(){var w=this,v=null,u=new C.dZd(),t=A.w.j(0.72),s=B.l(22),r=B.K(w.gabp().d.j(0.5),A.r,1),q=u.$3(D.bUb,"AD \u2212",new C.dZ9(w)),p=u.$3(A.art,"AD +",new C.dZa(w)),o=u.$5$color$on(A.kC,"HOME",new C.dZb(w),w.gabp().d,w.e==null),n=w.e
n=n!=null&&F.ik[n].e===-1
return B.p(v,B.A(B.a([q,p,o,u.$5$color$on(A.zq,"ADS",new C.dZc(w),A.c4,n)],x.p),A.l,v,A.e,A.N,0,v,v),A.f,v,v,new B.o(t,v,r,s,v,v,A.n),v,v,D.hwr,v,A.OO,v,v,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.gabp(),l=o.f,k=!l||!o.r
l=l?B.aE(d,A.dD,x.w).w.r.b+26:8
w=o.ccy(A.cB,"Back to the board",new C.dZi(d))
v=o.f
u=v?Ai.HR:A.wU
v=v?"Leave full screen":"Full screen"
v=o.b1B(u,v,o.gbbl(),D.hxc)
u=B.l(20)
t=o.e
s=m.a
r=x.p
q=new B.D(new B.Q(8,l,8,0),B.A(B.a([w,A.ae,v,A.ae,B.E(new B.bK(A.a9,n,n,B.p(n,B.d(t==null?s:s+" \xb7 "+F.ik[t].a,n,1,A.a2,n,n,n,Ak.xA,n,n,n),A.f,n,n,new B.o(A.b5,n,n,u,n,n,A.n),n,n,n,n,A.lO,n,n,n),n),1)],r),A.l,n,A.e,A.h,0,n,n),n)
p=m.b===D.xr?o.bMa(m):o.cpT(m)
l=o.f
w=!l
v=l?o.gb1C():n
if(l){l=B.as(p,n,n,n)
u=k?1:0
r=new B.an(A.a0,n,A.b1,A.t,B.a([l,B.ao(n,B.xx(new B.dt(!k,q,n),A.b0,A.ie,u),n,n,0,0,0,n)],r),n)
l=r}else l=B.x(B.a([q,A.am,o.cus(),B.E(new B.D(A.cw,B.as(p,n,n,n),n),1)],r),A.l,n,A.e,A.h,0,A.p)
return B.c4(n,A_.a_q,B.bm(w,B.az(A.bY,l,A.y,!1,n,v,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!1,A.a4),w,!1,A.ag,w,w),n,!1,!1,n,n)},
ccx(d){var w
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
cpT(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.aay
switch(n.a){case 1:w=44
break
case 2:w=30
break
case 3:w=22
break
case 4:w=26
break
default:w=14
break}v=B.c6(p.gaaG(),new C.dZ8(p,w,d,m),o)
if(n===D.aaz)v=new B.BF(D.bKo,v,o)
n=p.ccx(n)
u=p.f?A.hz:A.a0T
t=m?4:5
s=d.c
r=B.ap(s,A.c,m?0.25:0.08)
r.toString
q=B.ap(s,A.w,0.5)
q.toString
q=B.a([r,s,q],x.O)
s=B.l(w)
r=B.a([new B.ab(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new B.fH(n,B.p(o,B.p(o,v,A.f,o,o,new B.o(A.w,o,o,B.l(w-3),o,o,A.n),o,o,o,o,A2.Hk,o,o,o),A.f,o,o,new B.o(o,o,o,s,r,new B.a7(A.ay,A.aC,A.x,q,o,o),A.n),o,o,o,u,new B.Q(t,t,t,t),o,o,o),o)},
ba0(d){var w=Date.now(),v=A.o.D(this.a.d+A.i.bg(this.gBH()*0.4),0,100),u=d.b===D.aay,t=u?34:20,s=u?28:18
return new B.D(new B.Q(t,12,s,2),B.cm(new C.dZe(new B.V(w,0,!1),v)),null)},
axj(d,e,f){var w,v=null,u=d.d,t=B.ap(u,A.w,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.l(e*0.26)
w=x.p
t=B.a([B.p(v,B.as(B.d(d.b,v,v,v,v,v,v,B.m(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.o(v,v,v,u,D.dsV,new B.a7(A.ay,A.aC,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.u(t,B.a([A.ax,B.d(d.a,v,1,A.a2,v,v,v,D.fzk,v,v,v)],w))
return B.az(v,B.x(t,A.l,v,A.e,A.N,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dZ1(this,d),v,v,v,v,v,v,!1,A.a4)},
c2K(d,e){return this.axj(d,e,!0)},
c2r(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=o===D.aTj||o===D.AP,m=d.d,l=B.ap(m,A.w,0.55)
l.toString
m=B.ap(m,A.jX,0.5)
m.toString
m=B.a([l,A.dA,m],x.O)
l=q.ba0(d)
w=n?190:138
v=B.l(24)
u=B.K(A.aT,A.r,1)
w=B.az(p,B.p(p,B.bu(B.l(23),B.b5(p,p,p,new C.ag1(0,q.gBH(),p,p,p),A.h4),A.aq),A.f,p,p,new B.o(p,p,u,v,p,p,A.n),p,w,p,A.hZ,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dZ_(q),p,p,p,p,p,p,!1,A.a4)
v=n?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.ik[s]
t.push(new B.cj(A.z,p,p,new B.dx(A.dM,A.z,A.f,q.c2K(r,n?58:54),p),p))}l=B.a([l,A.am,w,A.af,B.E(B.l2(0.92,t,v,8,12,A4.wD,p,!1),1)],u)
if(o!==D.aaz){o=A.c.j(0.16)
w=B.l(28)
l.push(B.p(p,B.cm(new C.dZ0(q)),A.f,p,p,new B.o(o,p,p,w,p,p,A.n),p,p,p,D.bEI,H.aok,p,p,p))}return B.p(p,B.x(l,A.l,p,A.e,A.h,0,A.p),A.f,p,p,new B.o(p,p,p,p,p,new B.a7(A.ay,A.aC,A.x,m,p,p),A.n),p,p,p,p,p,p,p,p)},
bFx(d,e){var w=this,v=null,u=w.O4(),t=w.ba0(d),s=B.E(w.aPW(e),1),r=x.p,q=B.a([B.bR(0,B.az(v,B.p(v,B.as(B.d(F.ik[e].a,v,v,v,v,v,v,A.KT,v,v,v),v,v,v),A.f,A.w,v,v,v,v,v,v,v,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dYU(w),v,v,v,v,v,v,!1,A.a4),0,0,0)],r)
if(u!=null)u=!w.f||!w.r
else u=!1
if(u)q.push(B.ao(8,w.aZA(22),v,v,v,10,8,v))
return B.p(v,B.x(B.a([t,s,new B.a5(v,38,new B.an(A.a0,v,A.ad,A.t,q,v),v)],r),A.l,v,A.e,A.h,0,A.p),A.f,A.w,v,v,v,v,v,v,v,v,v,v)},
aSX(d,e){return B.c6(this.gaaG(),new C.dYZ(this,e,d),null)},
bMa(d){var w,v,u,t=this,s=null,r=t.a.c,q=r==="carscreen"
if(t.f)return B.qs(t.aSX(d,q))
r=r==="imac"?26:8
w=d.c
v=B.ap(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.l(q?26:14)
u=B.a([new B.ab(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new B.fH(1.5384615384615383,B.p(s,B.bu(B.l(q?20:8),t.aSX(d,q),A.aq),A.f,s,s,new B.o(s,s,s,v,u,new B.a7(A.ay,A.aC,A.x,w,s,s),A.n),s,s,s,A.aoe,new B.Q(8,8,8,r),s,s,s),s)}}
C.byt.prototype={
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
t.y=D.bKt
d.O(new B.r(r*(0.15+0.2*s+0.05*w),q*(0.3+0.3*u)),q*(0.2+0.04*s),t)}},
aE(d){return!0}}
C.ag1.prototype={
a4(d,e){var w=this
return L.Mg(d,e,w.b,w.c,w.e,w.d)},
aE(d){return!0}}
C.aNY.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.bxf.prototype={}
C.a9F.prototype={
B(d){var w=null
return B.c4(B.eS(w,w,w,!0,!0,D.ajl,w,1,!0,w,0,!1,w,!1,w,w,B.aI(w,w,w,w,I.at_,w,w,w,new C.cnA(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.h7S,w,w,w,1,w,!0),D.ajl,B.cw(B.a([D.ex9,B.cm(new C.cnB())],x.p),w,w,D.bFO,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.XO.prototype={
S(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aH7(w,new B.au(A.aw,$.ax()),$,A.bC,0,B.a([],x.X),null,null)}}
C.aH7.prototype={
Y(){this.a3()
this.mk()},
b7T(d){var w=this.d.length
return A.o.F(A.i.bg(A.i.F(A.i.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
mE(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b7T(v.f)
if(w!==v.x){v.x=w
E.my("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new C.eW2(v))
C.JP("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
ceq(){if(this.d.length<2)return
this.m(new C.eVZ(this))},
b2b(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new C.eVY(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gcep(),p=s.d,o=B.E(B.az(r,B.b5(r,r,r,new C.byF(p,s.f,r),A.h4),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.x(B.a([o,new B.a5(r,40,B.as(B.d(n,r,r,r,r,r,r,D.fHj,r,r,r),r,r,r),r)],w),A.l,r,A.e,A.h,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.aCR[A.o.F(v,8)].j(0.9)
t=new B.aP(20,20)
o.push(B.az(r,B.p(r,B.d(p[v],r,r,r,r,r,r,D.fGw,r,r,r),A.f,r,r,new B.o(u,r,r,new B.be(t,t,t,t),r,r,A.n),r,r,r,A.f1,A.hn,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.eW0(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a4))}p=A.c.j(0.07)
return E.lG(A.aQ,A.f6,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.x(B.a([new E.fd(o,r,r),B.A(B.a([B.E(B.aN(r,A.Z,!1,r,!0,A.t,r,B.aO(),s.e,r,r,r,r,r,2,B.bz(r,new B.b6(4,B.l(14),A.a1),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kq,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ak,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.eW1(s),r,!1,r,r,!1,r,!0,r,A.ac,r,r,r,r,r,r,r,r,r,r,r,A.dk,!0,A.a7,r,A.ao,r,r,r,r),1),A.ae,new E.fD(A.i_,"Add",s.gcen(s),A.c,r),A.bn,new E.fD(A.nL,"Spin",q,A.bc,r)],w),A.l,r,A.e,A.h,0,r,r)],w),A.l,r,A.e,A.N,0,A.p))}}
C.byF.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=k/2,i=e.b,h=i/2+10,g=new B.r(j,h),f=Math.min(k,i)/2-24
i=f+8
k=$.S()
w=B.L()
w.r=D.bke.gp(0)
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
p=B.bV(g,f)
o=new B.ar(A.S,A.Q,A.V,A.X,A.U)
o.r=D.aCR[A.o.F(r,8)].gp(0)
d.cQ(p,q,u,!0,o)
o=B.bV(g,f)
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.b=A.aa
p.c=2
p.r=A.c.j(0.6).gp(0)
d.cQ(o,q,u,!0,p)
J.br(i.save())
i.translate(j,h)
i.rotate((q+s)*180/3.141592653589793,0,0)
p=w[r]
if(p.length>12)p=A.a.aA(p,0,11)+"\u2026"
n=new B.iC(new B.er(p,l,l,A.cM,l,l,l,l,l,l,D.ftx),A.a7,A.c1,new B.jn(1),l,l,l,l,A.c2,l,A.cx)
n.eo()
p=n.b
o=p.c
p=p.a.c
n.a4(d,new B.r(f-o-16,-p.gba(p)/2))
i.restore()}i=B.L()
i.r=D.aiX.gp(0)
d.O(g,20,i)
i=B.L()
i.b=A.aa
i.c=3
i.r=A.aQ.gp(0)
d.O(g,20,i)
m=new B.aH(k.r,A.aj,l,l,B.a([],x.v))
h-=f
m.E(new B.aZ(j,h+26))
h-=10
m.E(new B.aq(j-14,h))
m.E(new B.aq(j+14,h))
m.E(new B.bw())
h=B.L()
h.r=A.c.gp(0)
d.af(m,h)
h=B.L()
h.b=A.aa
h.c=2
h.r=A.b5.gp(0)
d.af(m,h)},
aE(d){return!0}}
C.WA.prototype={
S(){return new C.bmC($,A.bC,0,B.a([],x.X),null,null)}}
C.bmC.prototype={
Y(){this.a3()
this.mk()},
mE(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.JP("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.US(900,new C.e57())}w.m(new C.e58())},
b2d(d){return this.m(new C.e52(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.b0(A.o.v(A.i.ar(m,60)),2,"0")
v=A.a.b0(A.o.v(A.o.F(A.i.cB(m),60)),2,"0")
m=B.b5(n,n,n,new C.btk(l,A.bX,n),A.aUO)
u=B.d(w+":"+v,n,n,n,n,n,n,D.fyd,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.as(new B.a5(280,280,new B.an(A.z,n,A.ad,A.t,B.a([m,B.x(B.a([u,B.d(t,n,n,n,n,n,n,D.fxa,n,n,n),A.ax,B.d("Sessions done: "+o.r,n,n,n,n,n,n,A.vO,n,n,n)],s),A.l,n,A.e,A.N,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.dpN[r]
u.push(new E.dZ(""+q+" min",o.d===q,new C.e54(o,q),n,A.bX,n))}m=o.f
p=m?A6.v6:A.he
m=m?"Pause":"Start"
return E.lG(A.bX,A.f6,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.x(B.a([new E.fd(u,n,n),new E.fd(B.a([new E.fD(p,m,new C.e55(o),A.bc,n),new E.fD(A.oJ,"Reset",new C.e56(o),A.c,n)],s),n,n)],s),A.l,n,A.e,A.N,0,A.p))}}
C.btk.prototype={
a4(d,e){var w,v,u,t,s=e.ej(A.J),r=e.a/2-14
$.S()
w=B.L()
w.b=A.aa
w.c=16
w.r=A.c.j(0.08).gp(0)
d.O(s,r,w)
w=B.bV(s,r)
v=B.L()
v.b=A.aa
v.c=16
v.d=A.bG
u=this.c
t=B.ap(u,A.c,0.4)
t.toString
v.san(new B.h4(A.z,-1.5707963267948966,4.71238898038469,A.x,B.a([u,t,u],x.O),null,null).aD(0,B.bV(s,r)))
d.cQ(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aE(d){return d.b!==this.b}}
C.VL.prototype={
S(){return new C.bmb($,A.bC,0,B.a([],x.X),null,null)}}
C.bmb.prototype={
Y(){this.a3()
this.mk()},
mE(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.TA.h(0,p.d)
w.toString
v=A.d.f0(w,new C.dQo())
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
E.my("flute",D.cd5[t]+5,1400,0.35)}p.m(new C.dQp())},
gcet(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.L7("Press Start",0.5)
w=D.TA.h(0,this.d)
w.toString
v=A.d.f0(w,new C.dQj())
u=A.i.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.L7("Breathe in",0.5+0.5*A.dH.az(0,p))
case 1:return new B.L7("Hold",1)
case 2:return new B.L7("Breathe out",1-0.5*A.dH.az(0,p))
default:return new B.L7("Hold",0.5)}}}return new B.L7("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gcet(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.fJ.j(0.12+(3-u)*0.05)
n.push(B.p(q,q,A.f,q,q,new B.o(s,q,q,q,u===0?B.a([new B.ab(0,A.G,A.fJ.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(B.d(p.a,q,q,q,q,q,q,A.q2,q,q,q))
n.push(B.ao(0,B.d("Breaths: "+r.w,q,q,q,q,q,q,A.kq,q,q,q),q,q,q,q,q,q))
n=B.as(new B.a5(300,340,new B.an(A.z,q,A.ad,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aT(D.TA.gew(D.TA));w.C();){v=w.gP(w)
o.push(new E.dZ(v,r.d===v,new C.dQm(r,v),q,A.fJ,q))}w=r.e
v=w?A.zG:A.he
w=w?"Stop":"Start"
o.push(new E.fD(v,w,new C.dQn(r),A.bc,q))
return E.lG(A.fJ,A.f6,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new E.fd(o,q,q))}}
C.aKz.prototype={}
C.Wr.prototype={
S(){return new C.bmt(new B.cx(null,x.A),B.a([],x.au),A.av,A.c)}}
C.bmt.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aI(s,s,s,s,I.oR,s,s,s,new C.e1D(t,d),s,s,s,s,"Share",s)],r),p=B.bu(B.l(18),new B.eo(B.az(s,B.b5(s,s,s,new C.bov(t.e,t.x,s),A.h4),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e1E(t),new C.e1F(t),s,s,s,s,s,s,s,s,s,new C.e1G(t),s,s,s,s,!1,A.a4),t.d),A.aq),o=B.a([],r)
for(w=0;w<9;++w){v=D.d4G[w]
u=!t.w&&t.f.A(0,v)
o.push(new E.G6(v,u,new C.e1H(t,v),!1,s))}u=t.r
return E.lG(A.bE,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.D(A.bU,p,s),"DRAW PAD",B.x(B.a([new E.fd(o,s,s),E.iX(A.bE,""+A.i.V(u),"Brush",30,2,new C.e1I(t),u),new E.fd(B.a([new E.dZ("Eraser",t.w,new C.e1J(t),A.zr,A.bE,s),new E.fD(A.pE,"Undo",new C.e1K(t),A.c,s),new E.fD(A.ej,"Clear",new C.e1L(t),A.c,s),new E.fD(A.PS,"Paper",new C.e1M(t),A.c,s)],r),s,s)],r),A.l,s,A.e,A.N,0,A.p))}}
C.bov.prototype={
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
q.e=A.dP
q.b=A.aa
n=s.c
if(n.length===1){r=A.d.gH(n)
n=new B.ar(A.S,A.Q,A.V,A.X,A.U)
n.r=p.gp(p)
d.O(r,o/2,n)}else{p=B.a([],u)
m=new B.aH(r.r,A.aj,null,null,p)
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
C.Xa.prototype={
S(){var w=x.S
return new C.aGq(B.aR(w),B.aR(w))}}
C.aGq.prototype={
Y(){this.a3()
this.auE()},
auE(){var w,v,u=this,t=x.N,s=B.bp(D.dv5,!0,t)
A.d.Dx(s)
w=x.S
v=B.U(s).c
t=B.C(B.cX(s,0,B.dD(u.d,"count",w),v),t)
A.d.u(t,B.cX(s,0,B.dD(u.d,"count",w),v))
A.d.Dx(t)
u.e=t
u.f.a8(0)
u.r.a8(0)
u.w=0
u.x=!1},
ceo(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
E.my("bell",12+A.o.F(d,9),150,0.35)
s.m(new C.esz(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gH(0)
u=w.gal(0)
w=s.e
w===$&&B.c()
t=x.H
if(w[v]===w[u])B.bN(A.n_,new C.esA(s,v,u),t)
else{s.x=!0
B.bN(Ad.H0,new C.esB(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.d("Moves: "+r.w,q,q,q,q,q,q,A.Wb,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.ar(p,2)+" / "+o
o=x.p
p=B.x(B.a([new B.D(A.yY,B.A(B.a([u,B.d(p,q,q,q,q,q,q,B.m(q,q,w?A.aQ:A.ab,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.l,q,A.j_,A.h,0,q,q),q),B.E(B.iv(!0,q,q,A.y,new B.hK(v,8,8,1,q),new C.esF(r),r.e.length,A.bl,q,A.ah,!1),1)],o),A.l,q,A.e,A.h,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.d6h[t]
o.push(new E.dZ(s.b,r.d===s.a,new C.esG(r,s),q,A.aG,q))}o.push(new E.fD(I.ars,"New game",new C.esH(r),A.bc,q))
return E.lG(A.aG,A.f6,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new E.fd(o,q,q))}}
C.Xk.prototype={
S(){return new C.aGL(B.a([],x.t))}}
C.aGL.prototype={
ces(d){A.d.a8(this.d)
this.w=!0
this.b2c()},
b2c(){this.d.push(A.cT.aw(4))
this.e=0
this.a0e()},
a0e(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0e=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eDl(t))
s=x.H
w=3
return B.b(B.bN(A.lM,null,s),$async$a0e)
case 3:r=t.d,q=B.bp(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aVV(n)
w=7
return B.b(B.bN(new B.bd(1000*Math.max(280,600-r.length*18)),null,s),$async$a0e)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new C.eDm(t))
case 1:return B.h(u,v)}})
return B.i($async$a0e,v)},
aVV(d){this.m(new C.eDj(this,d))
E.my("marimba",D.cd4[d]+5,450,0.55)
B.bN(A.GZ,new C.eDk(this),x.H)},
ceu(d){var w,v,u=this
if(!u.w||u.r)return
u.aVV(d)
w=u.d
v=u.e
if(w[v]!==d){G.dA(90,"",600,0,0.5,"saw")
u.m(new C.eDn(u))
return}++v
u.e=v
if(v===w.length){u.m(new C.eDo(u))
B.bN(A.hN,new C.eDp(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.d("Best: "+q.x,p,p,p,p,p,p,U.aXq,p,p,p),n=B.d(q.y,p,p,p,p,p,p,D.fHK,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aBH[v]
u=u.j(q.f===v?1:0.35)
t=new B.aP(28,28)
s=q.f===v?B.a([new B.ab(0,A.G,D.aBH[v].j(0.8),A.J,30)],w):p
r=new B.ay(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.az(p,B.cT(p,p,p,p,A.b0,new B.o(u,p,new B.bG(r,r,r,r),new B.be(t,t,t,t),s,p,A.n),A.jq,p,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eDq(q,v),p,p,p,p,p,p,!1,A.a4))}o=B.as(new B.D(A.ac,B.x(B.a([o,A.am,n,A.db,new B.fH(1,B.l2(1,l,2,12,12,p,A.e0,!1),p)],m),A.l,p,A.b8,A.h,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return E.lG(A.bt,A.f6,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new E.fd(B.a([new E.fD(A.he,n,q.gcer(q),A.bc,p)],m),p,p))}}
C.XF.prototype={
S(){return new C.bnJ(new B.au(A.aw,$.ax()))}}
C.bnJ.prototype={
ayd(d){return B.ox(A.i.ad(d,2),B.ag("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eRo(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.cW(B.aL(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eRx()
l=B.aN(m,A.Z,!1,m,!0,A.t,m,B.aO(),l,m,m,m,m,m,2,B.bz(m,m,m,m,m,m,m,m,!0,new B.b6(4,B.l(16),A8.y5),m,m,m,m,m,m,m,m,m,m,m,new B.b6(4,B.l(16),D.b6n),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.lY,"Bill amount",!0,!0,!1,m,m,m,m,D.fF0,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ak,m,m,m,m,m,A.ea,m,m,m,1,m,m,!1,"\u2022",m,new C.eRt(n),m,m,m,!1,m,m,!1,m,!0,m,A.ac,m,m,m,m,m,m,m,m,m,m,m,A.aWp,!0,A.a7,m,A.ao,m,m,m,m)
k=A.bc.j(0.1)
s=B.l(20)
r=B.K(A.bc.j(0.35),A.r,1)
q=x.p
s=B.cw(B.a([l,A.bx,B.p(m,B.x(B.a([t.$2("Tip ("+A.i.V(n.e)+"%)","$"+n.ayd(w)),t.$2("Total","$"+n.ayd(v)),A5.O6,t.$3$big("Each of "+n.f+" pays","$"+n.ayd(u),!0)],q),A.l,m,A.e,A.h,0,A.p),A.f,m,m,new B.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bS,m,m,m)],q),m,m,A.fu,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cRt[p]
r.push(new E.dZ(""+o+"%",A.i.V(n.e)===o,new C.eRu(n,o),m,A.bc,m))}l=n.f
return E.lG(A.bc,A.f6,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.x(B.a([new E.fd(r,"TIP",m),E.iX(A.aG,""+l,"People",20,1,new C.eRv(n),l),new E.fd(B.a([new E.dZ("Round up",n.r,new C.eRw(n),m,A.aQ,m)],q),m,m)],q),A.l,m,A.e,A.N,0,A.p))}}
C.X9.prototype={
S(){var w=B.a([3,5],x.t)
return new C.bnd(w,A.cT,$,A.bC,0,B.a([],x.X),null,null)}}
C.bnd.prototype={
Y(){this.a3()
this.mk()},
mE(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.i.bg(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t
E.XH("snare",0,0.5)}u.m(new C.ere())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.h4()
u.w=t
u.x=t?0:3.141592653589793
E.my("bell",24,400,0.5)}u.m(new C.erf())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bg3(v,o.r>0,n))}u=B.az(n,B.as(B.bZ(A.fU,m,A.br,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.er7(o),n,n,n,n,n,n,!1,A.a4)}else if(m==="coin"){t=A.i.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.K(A.d6,A.r,6)
s=B.a([new B.ab(0,A.G,A.aQ.j(0.4),A.J,30)],x.V)
u=B.az(n,B.as(B.e4(A.z,B.p(A.z,B.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fE9,n,n,n),A.f,n,n,new B.o(n,n,v,n,s,D.eEA,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.er8(o),n,n,n,n,n,n,!1,A.a4)}else{m=o.as
u=B.az(n,B.as(B.x(B.a([B.d(m===0?"?":""+m,n,n,n,n,n,n,D.ft0,n,n,n),B.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kq,n,n,n)],x.p),A.l,n,A.e,A.N,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.er9(o),n,n,n,n,n,n,!1,A.a4)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.dmY[r]
v.push(new E.dZ(q.b,o.d===q.a,new C.era(o,q),q.c,A.bh,n))}v=B.a([new E.fd(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(E.iX(A.bh,""+s,"Dice",4,1,new C.erb(o),s))}if(o.d==="num"){s=o.z
s=E.iX(A.bh,""+s,"From",100,1,new C.erc(o),s)
p=o.Q
A.d.u(v,B.a([s,E.iX(A.bh,""+p,"To",1000,2,new C.erd(o),p)],m))}return E.lG(A.bh,A.f6,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.x(v,A.l,n,A.e,A.N,0,A.p))}}
C.bg3.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cT.ai()-0.5)*0.6
else w=0
v=B.l(22)
u=B.a([new B.ab(0,A.G,A.w.j(0.4),A.cz,14)],x.V)
t=B.a([],x.p)
for(s=D.dHi.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bK(s[q],p,p,B.p(p,p,A.f,p,p,A.Yf,p,18,p,p,p,p,p,18),p))
return B.eI(A.z,w,B.p(p,new B.an(A.a0,p,A.ad,A.t,t,p),A.f,p,p,new B.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bH,p,p,100),p)}}
C.aNK.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.bAn.prototype={
t(){var w,v,u
for(w=this.h9$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h8$
w===$&&B.c()
w.t()
this.bzw()}}
C.aO4.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.bAt.prototype={
t(){var w,v,u
for(w=this.h9$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h8$
w===$&&B.c()
w.t()
this.bzS()}}
C.aOx.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.bAC.prototype={
t(){var w,v,u
for(w=this.h9$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h8$
w===$&&B.c()
w.t()
this.bAl()}}
C.aOY.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.bAL.prototype={
t(){var w,v,u
for(w=this.h9$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.h8$
w===$&&B.c()
w.t()
this.bAM()}}
var z=a.updateTypes(["R(u1)","~()","R(a5J)","aB<~>()","R(D7)","F(u1,F)","H(H,u1)","R(D3)","R(a_I)","R(acN)","R(a4A)","R(nQ)","XG()","VK()","a9F()","Xf()","Xu()","Xg()","R(n1)","VR()","agk(Z,F)","afb(Z,F)","~(a9<@,@>)","F(D3,D3)","n(ei)","R(ag8)","R(a1W)","R(Di)","R(adh)","R(afe)","R(ad0)","F(F,rg)","F(F,D7)","n(rg)","~(rg,ai<n>,F)","rg?(D7)","X9()","v(n,a1J)","R(abG)","~(B6)","XJ()","~(xF,n,r,u,H)","~(n,u1)","Ws()","WU(Z)","Ok(Z)","Wb(Z,bt<H>,bt<H>)","J2(Z)","XO()","WA()","VL()","Wr()","Xa()","Xk()","XF()","R(rg)"])
C.fM1.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+18}
C.fAG.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gH(d.e.split(". "))+"."},
$S:z+24}
C.fIo.prototype={
$1(d){var w
if(!this.a.Mt(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fIp.prototype={
$1(d){return d.x},
$S:z+0}
C.fLZ.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fM_.prototype={
$1(d){var w
if(!this.a.Mt(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fM0.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.ekk.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ekl.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.y(this.b,this.c))},
$S:0}
C.ekm.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd5(v).Q
v.toString
w.mv(v,A.e6,A.ie)}},
$S:8}
C.ekx.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.eky.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.ekt.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.ekr.prototype={
$2(d,e){var w=this.a
w.r.push(B.cz(B.dw(0,0,0,d,0,0),new C.eks(w,this.b,e)))},
$S:1924}
C.eks.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.eku.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gXf().aly(0,u[1],u[2],u[3])
u[4].bO(0,new C.ekp(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
G.dA(700+w.e*120,"",80,0,0.25,"square")
v.m(new C.ekq(w.a,v,w.f,w.r))},
$S:0}
C.ekp.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:186}
C.ekq.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.i.bg(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.ekv.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gXf().amn(t,u[1],s,u[3])
G.dA(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new C.eko(w.a,v,w.e,w.f))},
$S:0}
C.eko.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.i.bg(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.ekw.prototype={
$0(){G.dA(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new C.ekn(w,this.b))},
$S:0}
C.ekn.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.ekB.prototype={
$0(){var w=this.a
return w.m(new C.ekA(w))},
$S:0}
C.ekA.prototype={
$0(){return this.a.at=!0},
$S:0}
C.ekC.prototype={
$0(){var w=this.a
return w.m(new C.ekz(w))},
$S:0}
C.ekz.prototype={
$0(){return this.a.at=!1},
$S:0}
C.ekD.prototype={
$0(){var w=this.a
w.f.sb3(0,this.b)
w.Q_()},
$S:0}
C.ekE.prototype={
$0(){return this.a.Zm(this.b)},
$S:0}
C.ekF.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.Q_():w.aYV()},
$S:2}
C.ekG.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.Q_():w.aYV()},
$S:0}
C.ezF.prototype={
$2(d,e){return d+e},
$S:1925}
C.ezZ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ezY(w,d))},
$S:1926}
C.ezY.prototype={
$0(){var w=B.aJ(J.t(this.b,"unlocked"))
w=w==null?null:A.i.M(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.eA_.prototype={
$0(){},
$S:0}
C.eA0.prototype={
$0(){},
$S:0}
C.ezH.prototype={
$0(){return this.a.m(new C.ezG(this.b,this.c))},
$S:0}
C.ezG.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.ezw.prototype={
$1(d){return this.a.cx===d},
$S:33}
C.ezx.prototype={
$1(d){return this.a.cx=d},
$S:31}
C.ezy.prototype={
$1(d){return this.a.cy===d},
$S:33}
C.ezz.prototype={
$1(d){return this.a.cy=d},
$S:31}
C.ezA.prototype={
$1(d){return this.a.db===d},
$S:33}
C.ezB.prototype={
$1(d){return this.a.db=d},
$S:31}
C.ezC.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:33}
C.ezD.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.W(0,d):w.I(0,d)},
$S:31}
C.ezE.prototype={
$0(){var w=this.a
return w.m(w.gayP())},
$S:0}
C.ezu.prototype={
$1(d){return this.a.$1(!0)},
$S:72}
C.ezv.prototype={
$1(d){return this.a.$1(!1)},
$S:113}
C.ezt.prototype={
$1(d){return this.a.$1(!1)},
$S:137}
C.ezS.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.ch=n
n=B.b5(p,p,p,new C.bjW(o,p),n)
w=this.b
v=C.bD_("WORLD",w.a,w.c)
u=C.bD_("GRAVITY",B.w(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.i.V(t*100)
t=t<0.25?A.bX:A.bc
t=C.bD_("FUEL",""+s+"%",t)
s=o.r.b
r=A.i.V(s*100)
s=s>D.DT[o.db].d?A.bX:A.c
q=x.p
s=B.a([v,u,t,C.bD_("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(C.bD_("HEIGHT",""+A.i.V(A.i.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ao(p,B.A(s,A.l,p,A.j_,A.h,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bIz(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.tt[w].a+".":"You landed on every world!"
v=B.a([new E.fD(A.nN,"Again",new C.ezN(o),A.c,p),new E.fD(A.oE,"Rebuild",new C.ezO(o),A.aQ,p)],q)
if(o.d+1<7)v.push(new E.fD(A.jt,"Next world",new C.ezP(o),A.bc,p))
n.push(C.hBF("Perfect landing!",w,A.bc,v))}if(o.as==="crashed")n.push(C.hBF("Crash!",o.at,A.bX,B.a([new E.fD(A.nN,"Try again",new C.ezQ(o),A.bc,p),new E.fD(A.oE,"Rebuild",new C.ezR(o),A.aQ,p)],q)))
return new B.an(A.a0,p,A.b1,A.t,n,p)},
$S:62}
C.ezN.prototype={
$0(){var w=this.a
return w.m(w.gayP())},
$S:0}
C.ezO.prototype={
$0(){var w=this.a
return w.m(new C.ezK(w))},
$S:0}
C.ezK.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.ezP.prototype={
$0(){var w=this.a
return w.m(new C.ezJ(w))},
$S:0}
C.ezJ.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.ezQ.prototype={
$0(){var w=this.a
return w.m(w.gayP())},
$S:0}
C.ezR.prototype={
$0(){var w=this.a
return w.m(new C.ezI(w))},
$S:0}
C.ezI.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.ezT.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new C.ezM(v,w))},
$S:0}
C.ezM.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.ezU.prototype={
$1(d){return this.a.y=d},
$S:9}
C.ezV.prototype={
$1(d){return this.a.Q=d},
$S:9}
C.ezW.prototype={
$1(d){return this.a.z=d},
$S:9}
C.ezX.prototype={
$0(){var w=this.a
return w.m(new C.ezL(w))},
$S:0}
C.ezL.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dQh.prototype={
$0(){var w=0,v=B.j(x.k),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.iK(B.a([C.hwI(),C.hwJ()],x.D),x.K),$async$$0)
case 3:r=e
q=t.a
if(q.c==null){w=1
break}s=q.as
s.toString
s.kW(0,B.cP(J.t(r,1)))
q.m(new C.dQg(q,r))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:52}
C.dQg.prototype={
$0(){return this.a.d=x.m.a(J.t(this.b,0))},
$S:0}
C.dPS.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dPT.prototype={
$0(){return this.a.c_v(B.aV(J.t(this.b,"group")))},
$S:0}
C.dPU.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dPV.prototype={
$1(d){return A.a.b0(A.o.ft(A.o.D(A.i.V(d*255),0,255),16),2,"0")},
$S:332}
C.dQi.prototype={
$0(){return E.XH("kick",0,0.25)},
$S:0}
C.dPW.prototype={
$0(){return this.a.cy=this.b},
$S:0}
C.dPX.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dPY.prototype={
$0(){return E.XH("kick",0,0.5)},
$S:0}
C.dPZ.prototype={
$0(){return G.dA(1300+this.a.RG.aw(900),"",40,0,0.2,"square")},
$S:0}
C.dQ0.prototype={
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
u=w}if(u.cy!=null&&!A.d.aU(u.d.e,new C.dQ_(u)))u.cy=null
u.id=0},
$S:0}
C.dQ_.prototype={
$1(d){var w=this.a
return d.a===w.cy&&w.aAE(d)},
$S:z+10}
C.dPP.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p4
w=u.a
v=u.c
w.R8=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p3.toLowerCase()+"."},
$S:0}
C.dPQ.prototype={
$0(){var w=this.a
return w.m(w.gcab())},
$S:0}
C.dPR.prototype={
$0(){return this.a.aeX(null)},
$S:0}
C.dQ7.prototype={
$0(){var w=this.a.as
return w==null?null:w.f9(0,B.J(["t","shot"],x.N,x.z))},
$S:0}
C.dQ8.prototype={
$0(){return this.a.cGX(this.b.a)},
$S:0}
C.dQ9.prototype={
$0(){return this.a.aeX(this.b)},
$S:0}
C.dQa.prototype={
$1(d){var w=this.a
return w.m(new C.dQ6(w,d))},
$S:6}
C.dQ6.prototype={
$0(){return this.a.k4=this.b},
$S:0}
C.dQb.prototype={
$0(){var w=this.a
return w.m(new C.dQ5(w,this.b))},
$S:0}
C.dQ5.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dQc.prototype={
$0(){var w=this.a
return w.m(new C.dQ4(w))},
$S:0}
C.dQ4.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.dQd.prototype={
$0(){var w=this.a
return w.m(new C.dQ3(w))},
$S:0}
C.dQ3.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.f9(0,B.J(["t","reset"],x.N,x.z))
w.cy=null
w.db=0.5
w.dx=0.05
w.fr=1
w.fy=D.Mc},
$S:0}
C.dQe.prototype={
$0(){var w=this.a
return w.m(new C.dQ2(w))},
$S:0}
C.dQ2.prototype={
$0(){var w=this.a,v=!w.p2
w.p2=v
w.p4=0
w.cy=null
if(v)w.b0J()
else w.p3=null},
$S:0}
C.dQf.prototype={
$0(){var w=this.a
return w.m(new C.dQ1(w))},
$S:0}
C.dQ1.prototype={
$0(){var w=this.a
return w.ok=!w.ok},
$S:0}
C.c7q.prototype={
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
$S:319}
C.c7r.prototype={
$1(d){var w=new B.qy([],[]).o4(d.data,!0)
if(x.f.b(w)&&J.t(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:456}
C.ftU.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)&&w.h(d,1)},
$S:210}
C.ftV.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)||w.h(d,1)},
$S:210}
C.ftW.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)!==w.h(d,1)},
$S:210}
C.fu2.prototype={
$1(d){return!J.t(d,0)},
$S:210}
C.fu3.prototype={
$1(d){var w=J.a8(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:210}
C.fu4.prototype={
$1(d){var w=J.a8(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:210}
C.dRX.prototype={
$1(d){return this.a.avt(0)},
$S:8}
C.dRB.prototype={
$0(){var w=this.b
return this.a.cx=new B.N(w,B.ijN(),B.U(w).k("N<1,F>")).fL(0)},
$S:0}
C.dRE.prototype={
$1(d){return""+d},
$S:76}
C.dRY.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dRz.prototype={
$1(d){return this.a.avt(this.b)},
$S:8}
C.dRA.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.azk(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mU(0,d,a1.ml(0.15,0.3))
u=a1.mU(0,d,a1.ml(0.15,0.62))
t=a1.mU(0,"and",a1.ml(0.48,0.46))
s=a1.mU(0,a0,a1.ml(0.82,0.46))
a1=t.a
w.push(new C.nQ(v.a,a1,0))
w.push(new C.nQ(u.a,a1,1))
w.push(new C.nQ(a1,s.a,0))
break
case 1:v=a1.mU(0,d,a1.ml(0.12,0.25))
u=a1.mU(0,d,a1.ml(0.12,0.65))
r=a1.mU(0,"xor",a1.ml(0.46,0.25))
q=a1.mU(0,"and",a1.ml(0.46,0.65))
p=a1.azj(0,a0,a1.ml(0.82,0.25),0)
o=a1.azj(0,a0,a1.ml(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.nQ(a1,n,0))
m=u.a
w.push(new C.nQ(m,n,1))
l=q.a
w.push(new C.nQ(a1,l,0))
w.push(new C.nQ(m,l,1))
w.push(new C.nQ(n,p.a,0))
w.push(new C.nQ(l,o.a,0))
break
case 2:k=a1.mU(0,"clock",a1.ml(0.15,0.4))
j=a1.mU(0,"not",a1.ml(0.45,0.65))
s=a1.mU(0,a0,a1.ml(0.82,0.3))
i=a1.mU(0,"buzzer",a1.ml(0.82,0.65))
a1=k.a
w.push(new C.nQ(a1,s.a,0))
n=j.a
w.push(new C.nQ(a1,n,0))
w.push(new C.nQ(n,i.a,0))
break
default:h=a1.mU(0,d,a1.ml(0.12,0.25))
g=a1.mU(0,d,a1.ml(0.12,0.7))
f=a1.mU(0,"nor",a1.ml(0.5,0.25))
e=a1.mU(0,"nor",a1.ml(0.5,0.7))
s=a1.mU(0,a0,a1.ml(0.86,0.25))
a1=f.a
w.push(new C.nQ(g.a,a1,0))
n=e.a
w.push(new C.nQ(n,a1,1))
w.push(new C.nQ(h.a,n,0))
w.push(new C.nQ(a1,n,1))
w.push(new C.nQ(a1,s.a,0))}},
$S:0}
C.dRF.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.azk(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.D3(p,"switch",new B.r(0.14*q.a,r*q.b),0))}o.mU(0,w.e,o.ml(0.86,0.5))},
$S:0}
C.dRu.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dRv.prototype={
$2(d,e){return A.i.aQ(d.c.b,e.c.b)},
$S:z+23}
C.dRw.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dRx.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dRy.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.aeg(this.c)
if(v.ax)C.JP("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gH(w)
v.CW=!1
if(v.ax)G.dA(140,"",250,0,0.3,"square")}},
$S:0}
C.dRG.prototype={
$0(){},
$S:0}
C.dRH.prototype={
$0(){return A.d.cH(this.a.e,this.b)},
$S:0}
C.dRI.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dRD.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bq(w.e,new C.dRC(v))
w.cy=null},
$S:0}
C.dRC.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
C.dRt.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mU(0,this.b,new B.r(w.x.a*(0.3+v.ai()*0.4),w.x.b*(0.2+v.ai()*0.6))).a},
$S:0}
C.dRR.prototype={
$0(){var w=this.a
return w.m(new C.dRQ(w))},
$S:0}
C.dRQ.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dRS.prototype={
$2(d,e){var w=null,v=this.a,u=new B.av(e.b,e.d)
v.x=u
return B.az(A.bY,B.jg(B.b5(w,w,w,new C.bdX(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dRL(v),w,w,w,new C.dRM(v),new C.dRN(v),new C.dRO(v),w,w,w,w,w,w,w,w,w,w,new C.dRP(v),w,w,w,!1,A.a4)},
$S:36}
C.dRP.prototype={
$1(d){return this.a.cbZ(d.b)},
$S:59}
C.dRN.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.clb(u)
if(t!=null){v.as=t
v.at=u
return}w=v.aAa(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aJ(0,u)}},
$S:48}
C.dRO.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.r(A.i.D(w.a+u.Q.a,46,u.x.a-46),A.i.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:19}
C.dRM.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c30(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bq(v,new C.dRJ(w))
u=t.as
u.toString
v.push(new C.nQ(u,w.a,w.b))
B.k0()}}t.z=t.as=null},
$S:37}
C.dRJ.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
C.dRL.prototype={
$1(d){return this.a.ay6(d.b)},
$S:337}
C.dRT.prototype={
$0(){return this.a.bEn(this.b.a)},
$S:0}
C.dRU.prototype={
$0(){return this.a.avt(this.b.a)},
$S:0}
C.dRV.prototype={
$0(){var w=this.a
return w.m(new C.dRK(w))},
$S:0}
C.dRK.prototype={
$0(){var w=this.a
w.azk(0)
w.ay=null},
$S:0}
C.dRW.prototype={
$0(){return this.a.cCx(this.b)},
$S:0}
C.cWX.prototype={
$0(){var w=this,v=null,u=B.fE(v,A.cx,v,v,v,B.cS(v,v,v,v,v,v,v,v,v,B.m(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a7,A.c1,v,A.dJ,A.c2)
u.eo()
return u},
$S:276}
C.dY8.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dY7.prototype={
$0(){return this.a.d=null},
$S:0}
C.dYa.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c4X()},
$S:128}
C.dY9.prototype={
$0(){return B.a6(this.a,!1).hY()},
$S:0}
C.fuk.prototype={
$0(){return I.aMs},
$S:z+40}
C.ful.prototype={
$0(){return D.dUr},
$S:z+43}
C.fum.prototype={
$0(){return D.dRi},
$S:z+13}
C.fun.prototype={
$0(){return D.ekW},
$S:z+14}
C.fuo.prototype={
$0(){return D.e2P},
$S:z+15}
C.fup.prototype={
$0(){return I.aMj},
$S:z+16}
C.fuq.prototype={
$0(){return D.eiI},
$S:z+17}
C.fur.prototype={
$0(){return I.aMr},
$S:z+12}
C.fus.prototype={
$0(){return D.dTz},
$S:z+19}
C.f9L.prototype={
$2(d,e){return new C.agk(e,$.bHy()[e],new C.f9K(e,this.a),null)},
$S:z+20}
C.f9K.prototype={
$0(){var w=this.a,v=K.aJY.h(0,$.bHy()[w].a)
$.atV=v==null?"music":v
B.a6(this.b,!1).ce(B.ee(new C.f9I(w),!1,null,x.H))},
$S:0}
C.f9I.prototype={
$1(d){return $.bHy()[this.a].e.$0()},
$S:39}
C.f9M.prototype={
$2(d,e){return new C.afb(e,D.aCm[e],new C.f9J(this.a,e),null)},
$S:z+21}
C.f9J.prototype={
$0(){return this.a.d.$1(D.aCm[this.b])},
$S:0}
C.f9r.prototype={
$0(){return this.a.as=!0},
$S:0}
C.f9q.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f9p.prototype={
$1(d){var w=this
return new B.e3(new C.f9o(w.a,w.b,w.c,w.d),null)},
$S:20}
C.f9o.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=x.w,a2=B.aE(a3,a0,a1).w
a1=B.aE(a3,a0,a1).w
w=x.p
v=B.a([D.fPn,A.ax,D.fWc,A.af],w)
for(u=d.d,t=d.a,s=x.G,r=d.b,q=d.c,p=0;p<3;p=o){o=p+1
n=B.d("SLAB "+o,a0,a0,a0,a0,a0,a0,D.fEt,a0,a0,a0)
m=new B.aP(12,12)
l=new B.aP(12,12)
l=B.a([new B.by(1,A.ba,B.aN(a0,A.Z,!1,a0,!0,A.t,a0,B.aO(),r[p],a0,a0,a0,a0,a0,2,new B.e8(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Title",a0,N.Fa,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.be(m,m,m,m),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ac,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jC,!0,A.a7,a0,A.ao,a0,a0,a0,a0),a0),A.ae,new B.by(2,A.ba,B.aN(a0,A.Z,!1,a0,!0,A.t,a0,B.aO(),q[p],a0,a0,a0,a0,a0,2,new B.e8(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Small line",a0,N.Fa,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.be(l,l,l,l),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ac,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jC,!0,A.a7,a0,A.ao,a0,a0,a0,a0),a0)],w)
m=B.a([],w)
for(k=0;k<30;++k){j=D.dCx[k]
i=new B.aP(12,12)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.C(t.a.c.d,s)
t.w=h}g=A.d.gH(h).j(0.3)}else g=A.c.j(0.06)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.C(t.a.c.d,s)
t.w=h}f=A.d.gH(h)}else f=A.bw
e=new B.ay(f,u[p].A(0,j)?1.8:1,A.r,-1)
m.push(B.az(a0,B.p(a0,B.W(j,u[p].A(0,j)?A.c:A.aR,a0,a0,a0,22),A.f,a0,a0,new B.o(g,a0,new B.bG(e,e,e,e),new B.be(i,i,i,i),a0,a0,A.n),a0,a0,a0,A.f1,a0,a0,a0,42),A.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.f9m(a4,p,u,j),a0,a0,a0,a0,a0,a0,!1,A.a4))}A.d.u(v,B.a([n,A.am,new B.c7(A.aM,A.e,A.h,A.l,a0,A.p,a0,0,l,a0),A.P,new B.a5(a0,44,B.cw(m,a0,a0,a0,a0,a0,A.aM,!1),a0),A.aB],w))}v.push(B.bI(A.Ba,a0,new C.f9n(t,r,q,u,a3),a0))
return new B.D(new B.Q(0,0,0,a2.f.d),B.bm(!0,new B.cN(new B.aY(0,1/0,0,a1.a.b*0.86),B.cw(v,a0,a0,A3.yZ,a0,a0,A.ah,!0),a0),!0,!1,A.ag,!0,!0),a0)},
$S:102}
C.f9m.prototype={
$0(){var w=this
return w.a.$1(new C.f9l(w.b,w.c,w.d))},
$S:0}
C.f9l.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.f9n.prototype={
$0(){var w=this,v=w.a
v.m(new C.f9k(v,w.b,w.c,w.d))
B.a6(w.e,!1).N(null)},
$S:0}
C.f9k.prototype={
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
C.f9z.prototype={
$0(){var w=this.a
return w.m(new C.f9y(w))},
$S:0}
C.f9y.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.f9A.prototype={
$0(){return E.uI(this.b,this.a.f,"scene")},
$S:0}
C.f9B.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ap(A.d.gH(u),A.d.gal(u),0.4)
u.toString
w=this.a.ga_N().x
w===$&&B.c()
return new B.bM(new B.o(v,v,v,v,v,new B.bS(D.b3S,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.c5],x.O),v,v),A.n),A.bk,v,v)},
$S:317}
C.f9C.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.as(new B.dx(A.dM,A.z,A.f,B.c6(new B.hd(B.a([u.guM(),u.ga_N()],x.dS)),new C.f9x(u,this.b,v),w),w),w,w,w)},
$S:218}
C.f9x.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.guM().x
r===$&&B.c()
w=r<0.9?1:1-C.buh(r,0.9,0.98)
v=s.ga_N().x
v===$&&B.c()
u=A.dH.az(0,v)
switch(s.gazl().a){case 0:s=s.bDy(t.b,r,u,t.c)
break
case 1:s=s.bUy(t.b,r,u,t.c)
break
case 2:s=s.cHq(t.b,r,u,t.c)
break
case 3:s=s.bGu(t.b,r,u,t.c)
break
case 4:s=s.bJR(t.b,r,u,t.c)
break
case 5:s=s.cc_(t.b,r,u,t.c)
break
default:s=null}return B.d3(s,w)},
$S:185}
C.f9D.prototype={
$2(d,e){var w=B.abt(this.b),v=this.c.d,u=B.ap(A.d.gH(v),A.d.gal(v),0.4)
u.toString
v=B.ap(A.d.gH(v),A.d.gal(v),0.4)
v.toString
v=w.cQo(u,A.bw,v,3.5)
u=this.a
w=u.guM().x
w===$&&B.c()
return B.Z5(B.l3(null,null,null,1,0,new C.f9w(u),A.i.D(w,0,1)),v)},
$S:1928}
C.f9w.prototype={
$1(d){var w=this.a
w.guM().sp(0,d)
if(w.as)w.m(new C.f9s(w))},
$S:6}
C.f9s.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f9E.prototype={
$0(){var w=this.a
w.guM().sp(0,0)
w.afn()},
$S:0}
C.f9F.prototype={
$1(d){var w=this.a
w.m(new C.f9v(w,d))
if(w.as)w.afn()},
$S:6}
C.f9v.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f9G.prototype={
$0(){var w=this.a
w.m(new C.f9u(w,this.b))
w.guM().sp(0,0)
if(w.as)w.afn()},
$S:0}
C.f9u.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.f9H.prototype={
$0(){var w=this.a
return w.m(new C.f9t(w,this.b))},
$S:0}
C.f9t.prototype={
$0(){var w=B.C(this.b,x.G)
return this.a.w=w},
$S:0}
C.f9i.prototype={
$2(d,e){return A.i.aQ(d.a,e.a)},
$S:1929}
C.f9j.prototype={
$1(d){return d.b},
$S:1930}
C.ds3.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.ds4.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.ds0.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.ds1.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.ds2.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.ds5.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.ds6.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.ds7.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.ds8.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.ds9.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.dsa.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.dsb.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.dsc.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.dsd.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.ez_.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eyP.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.eyR.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gX(e.b),97)},
$S:z+31}
C.eyS.prototype={
$2(d,e){return d+A.o.F(A.a.gX(e.a),31)+A.o.F(A.a.gX(e.b),17)},
$S:z+32}
C.eyV.prototype={
$1(d){var w=D.n8.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+33}
C.eyW.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.U(q),o=x.dg,n=B.C(new B.ec(new B.cM(new B.Y(q,new C.eyX(d),p.k("Y<1>")),new C.eyY(r),p.k("cM<1,rg?>")),o),o.k("M.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aM(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.I)(n),++v){u=n[v]
if(w.length>=6)return
t=B.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.eyX.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eyY.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.eyT.prototype={
$1(d){return D.n8.h(0,d.b).c===D.y_},
$S:z+55}
C.eyU.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ezp.prototype={
$1(d){var w=this.a,v=d.a,u=A.i.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.vO(0,u)
w.a7H(A.o.ar(v,1000))},
$S:8}
C.eyZ.prototype={
$0(){},
$S:0}
C.eyL.prototype={
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
C.ez1.prototype={
$1(d){var w=null,v=this.a.b
return B.bm(!0,B.x(B.a([A.P,B.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,B.W(D.n8.h(0,v).b,D.n8.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.h6O,w,B.d(D.n8.h(0,v).a,w,w,w,w,w,w,A.h6,w,w,w),w,w,w),B.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,Y.at3,w,w,w,w,new C.ez0(d),!1,w,w,w,w,w,w,w,D.fZ4,w,w,w)],x.p),A.l,w,A.e,A.N,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.ez0.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.ez3.prototype={
$1(d){var w,v,u,t=null,s=B.aE(d,t,x.w).w,r=B.a([D.ewY],x.p)
for(w=0;w<6;++w){v=D.aCL[w]
u=B.d(v.a,t,t,t,t,t,t,A.h6,t,t,t)
r.push(B.dJ(!1,t,t,t,!0,t,t,t,!0,t,t,D.c56,t,t,t,t,new C.ez2(d,v),!1,t,t,t,t,t,B.d(v.b,t,t,t,t,t,t,A.lY,t,t,t),t,u,t,t,t))}return B.bm(!0,new B.cN(new B.aY(0,1/0,0,s.a.b*0.7),B.cw(r,t,t,D.bJz,t,t,A.ah,!0),t),!0,!1,A.ag,!0,!0)},
$S:27}
C.ez2.prototype={
$0(){B.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.eyO.prototype={
$1(d){var w=null
return B.ek(B.a([B.bO(!1,A.ds,w,w,!0,w,w,w,new C.eyM(d),w,w),B.bO(!1,A.Fe,w,w,!0,w,w,w,new C.eyN(d),w,w)],x.p),w,w,K.mc,D.fWp,w,w,w,w,D.fZn,w)},
$S:18}
C.eyM.prototype={
$0(){B.a6(this.a,!1).N(!1)
return null},
$S:0}
C.eyN.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.ezn.prototype={
$0(){var w=this.a
return w.m(new C.ezm(w))},
$S:0}
C.ezm.prototype={
$0(){return this.a.r=!1},
$S:0}
C.ezo.prototype={
$2(d,e){var w,v,u,t=null,s=new B.av(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.nt(new C.ezd(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.beM:t
v=B.a([B.b5(u,t,t,new C.bjU(w,v,new C.eze(r),new C.ezf(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ao(t,new B.dt(!0,B.c6(w,new C.ezg(r),t),t),t,t,10,10,6,t))
if(r.ax)v.push(r.bLw())
return B.az(A.bY,B.jg(new B.an(A.a0,t,A.b1,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.ezh(r),t,r.gcmw(),t,new C.ezi(r),new C.ezj(r),new C.ezk(r),t,t,t,t,t,t,t,t,t,t,new C.ezl(r),t,t,t,!1,A.a4)},
$S:36}
C.ezd.prototype={
$0(){return this.a.adj(this.b)},
$S:0}
C.ezl.prototype={
$1(d){return this.a.cF5(d.b)},
$S:59}
C.ezj.prototype={
$1(d){return this.a.cmx(d.b)},
$S:48}
C.ezk.prototype={
$1(d){return this.a.cmy(d.b)},
$S:19}
C.ezi.prototype={
$1(d){return this.a.b4j()},
$S:37}
C.ezh.prototype={
$1(d){return this.a.ae0(d.b)},
$S:337}
C.eze.prototype={
$0(){return this.a.z},
$S:754}
C.ezf.prototype={
$0(){return this.a.Q},
$S:656}
C.ezg.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bPQ()
if(p.length===0)return A.bM
w=A.w.j(0.55)
v=B.l(14)
u=B.K(A.bw,A.r,1)
t=B.a([D.fTM,A.cR],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.I)(p),++r)t.push(B.d(p[r],q,2,A.a2,q,q,q,A.aXm,q,q,q))
return B.p(q,B.x(t,A.E,q,A.e,A.N,0,A.p),A.f,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.hn,q,q,q)},
$S:67}
C.eyQ.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.l(12),t=B.K(e.j(0.6),A.r,1),s=x.p
return new B.D(A.el,B.A(B.a([B.p(w,B.W(d,e,w,w,w,21),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bb,B.E(B.x(B.a([B.d(f,w,w,w,w,w,w,Ae.W5,w,w,w),A.bF,B.d(g,w,w,w,w,w,w,F.ac9,w,w,w)],s),A.E,w,A.e,A.h,0,A.p),1)],s),A.E,w,A.e,A.h,0,w,w),w)},
$S:1932}
C.ez9.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).hY()},
$S:0}
C.eza.prototype={
$0(){var w=this.a
return w.m(new C.ez8(w))},
$S:0}
C.ez8.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ezb.prototype={
$0(){var w=this.a
return w.m(new C.ez7(w))},
$S:0}
C.ez7.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.ezc.prototype={
$0(){var w=this.a
return w.m(new C.ez6(w))},
$S:0}
C.ez6.prototype={
$0(){return this.a.r=!0},
$S:0}
C.ez5.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.n8.gdP(D.n8),w=w.gae(w);w.C();){v=w.gP(w)
if(v.b.c===e)p.push(v.a)}w=B.d(d,q,q,q,q,q,q,B.m(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.I)(p),++r)u.push(s.czQ(p[r]))
return new B.D(S.amk,B.x(B.a([new B.D(An.ao3,w,q),B.A(u,A.l,q,A.e,A.h,0,q,q)],v),A.E,q,A.e,A.h,0,A.p),q)},
$S:z+37}
C.ez4.prototype={
$0(){return this.a.cc5(this.b)},
$S:0}
C.ds_.prototype={
$0(){var w=this,v=null,u=B.fE(v,A.cx,v,v,v,B.cS(v,v,v,v,v,v,v,v,v,B.m(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a7,A.c1,v,A.dJ,A.c2)
u.eo()
return u},
$S:276}
C.bQE.prototype={
$1(d){return d.r<=0},
$S:z+38}
C.bQP.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bQK.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bQQ.prototype={
$1(d){return this.a.Mt(d)&&!d.x},
$S:z+0}
C.bQR.prototype={
$2(d,e){return Math.max(d,this.a.aD0(e))},
$S:z+6}
C.bQT.prototype={
$2(d,e){var w=this.a
return w.c1(0,d.a+"."+e,new C.bQU(w))},
$S:z+5}
C.bQU.prototype={
$0(){return this.a.a},
$S:90}
C.bQS.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:68}
C.bQV.prototype={
$2(d,e){var w=this.a
return w.c1(0,this.b.$1(this.c.$2(d,e)),new C.bQW(w))},
$S:z+5}
C.bQW.prototype={
$0(){return this.a.a},
$S:90}
C.bQG.prototype={
$2(d,e){var w=this.a
return w.c1(0,d.a+"."+e,new C.bQH(w))},
$S:z+5}
C.bQH.prototype={
$0(){return this.a.a},
$S:90}
C.bQF.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:68}
C.bQI.prototype={
$2(d,e){var w=this.a
return w.c1(0,this.b.$1(this.c.$2(d,e)),new C.bQJ(w))},
$S:z+5}
C.bQJ.prototype={
$0(){return this.a.a},
$S:90}
C.bQD.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bQX.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bQL.prototype={
$1(d){return d!==this.b&&this.a.aJm(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bQO.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bQN.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bQM.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bL_.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bL0.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.cuI.prototype={
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
$S:186}
C.fY4.prototype={
$1(d){var w
$.S()
w=B.L()
w.r=d.gp(0)
return w},
$S:1933}
C.fY6.prototype={
$2(d,e){var w
$.S()
w=B.L()
w.b=A.aa
w.c=e
w.r=d.gp(0)
w.d=A.bG
return w},
$S:1934}
C.fY7.prototype={
$5(d,e,f,g,h){return B.bx(new B.a4(d,e,d+f,e+g),new B.aP(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1935}
C.fY5.prototype={
$3(d,e,f){var w
$.S()
w=B.L()
w.san(new B.a7(A.aZ,A.b4,A.x,B.a([e,f],x.O),null,null).aD(0,d))
return w},
$S:1936}
C.bKD.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.bKE.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bKC(w))},
$S:0}
C.bKC.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bKF.prototype={
$0(){return B.a([],x.l)},
$S:1937}
C.bKG.prototype={
$1(d){return this.a.bB(d).a>15e5},
$S:413}
C.bKH.prototype={
$0(){var w,v,u
J.bHI(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.rw(v))if(C.hhx(v.b))w.b3N(v)
else w.a0S(v)
else{u=w.a.c.bgI(v)
w.afz(u==null?"The "+$.qK().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bKB.prototype={
$1(d){return new B.e3(new C.bKy(this.a,this.b),null)},
$S:20}
C.bKy.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p=null,o=this.b,n=new C.bKz(this.a,o,a3),m=$.qK(),l=o.b,k=m.h(0,l).d,j=A.i.V(o.ch/1.04),i=new C.bKA(o,n,k),h=B.l(26),g=B.K(k.j(0.55),A.r,1.4),f=x.V,e=B.a([new B.ab(0,A.G,k.j(0.25),A.J,26)],f),d=B.p(p,p,A.f,p,p,new B.o(A.aT,p,p,B.l(3),p,p,A.n),p,4,p,p,p,p,p,42),a0=k.j(0.2),a1=B.K(k,A.r,1)
a1=B.p(p,B.as(B.d(m.h(0,l).c,p,p,p,p,p,p,A.q1,p,p,p),p,p,p),A.f,p,p,new B.o(a0,p,a1,p,p,p,A.a6),p,42,p,p,p,p,p,42)
a0=x.p
w=B.E(B.x(B.a([B.d(m.h(0,l).b,p,1,A.a2,p,p,p,A.jR,p,p,p),D.fTA],a0),A.E,p,A.e,A.h,0,A.p),1)
v=k.j(0.2)
u=B.l(14)
t=B.K(k,A.r,1)
u=B.A(B.a([a1,A.bb,w,B.p(p,B.d(""+A.i.V(o.ch*100)+"%",p,p,p,p,p,p,B.m(p,p,k,p,p,p,p,p,p,p,p,15,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(v,p,t,u,p,p,A.n),p,p,p,p,A.lO,p,p,p)],a0),A.l,p,A.e,A.h,0,p,p)
t=A.w.j(0.35)
v=B.l(18)
w=B.K(A.dq,A.r,1)
a1=30+28*o.ch
s=B.l(8)
r=B.a([k.j(0.85),A.av],x.O)
q=B.K(A.aF,A.r,2)
f=B.a([new B.ab(0,A.G,k.j(0.5),A.J,14)],f)
v=B.p(p,B.as(B.cT(p,B.as(new B.dx(A.dC,A.z,A.f,new B.D(A.hz,B.d(m.h(0,l).c,p,p,p,p,p,p,A.mD,p,p,p),p),p),p,p,p),p,p,A.b0,new B.o(p,p,q,s,f,new B.a7(A.ay,A.aC,A.x,r,p,p),A.n),A.eH,p,a1*0.58,p,p,p,p,p,a1),p,p,p),A.f,p,p,new B.o(t,p,w,v,p,p,A.n),p,120,p,p,p,p,p,1/0)
i=B.A(B.a([i.$2("1\xd7",1),i.$2("2\xd7",2),i.$2("3\xd7",3),i.$2("4\xd7",4),i.$2("5\xd7",5)],a0),A.l,p,A.e,A.h,0,p,p)
w=B.aI(p,p,p,p,B.W(A.ark,k,p,p,p,30),p,p,p,new C.bKu(n,o),p,p,p,p,p,p)
t=B.abt(a2).bgb(k,A.bw,k.j(0.2),A.c,8)
o=B.A(B.a([w,B.E(B.Z5(B.l3(p,p,p,5.2,1,n,A.i.D(o.ch,1,5.2)),t),1),B.aI(p,p,p,p,B.W(A.a38,k,p,p,p,30),p,p,p,new C.bKv(n,o),p,p,p,p,p,p)],a0),A.l,p,A.e,A.h,0,p,p)
return B.bm(!0,B.p(p,B.x(B.a([d,A.af,u,A.aB,v,A.af,i,A.ax,o,B.A(B.a([B.E(B.d(j<=1?"Normal size":"About "+j+" times the normal size",p,p,p,p,p,p,A.ht,p,p,p),1),B.bO(!1,A1.aYo,p,p,!0,p,p,p,new C.bKw(a2),p,B.fs(p,p,k.j(0.25),p,p,p,p,p,p,p,p,A.c,p,p,p,p,p,A.t9,p,p,p,p,p,p,p,p))],a0),A.l,p,A.e,A.h,0,p,p)],a0),A.l,p,A.e,A.N,0,A.p),A.f,p,p,new B.o(p,p,g,h,e,D.ccu,A.n),p,p,p,A.yQ,D.bG6,p,p,p),!0,!1,A.ag,!0,!0)},
$S:89}
C.bKz.prototype={
$1(d){var w=this.a
w.m(new C.bKs(this.b,d))
this.c.$1(new C.bKt())
w.a.toString},
$S:6}
C.bKs.prototype={
$0(){return this.a.ch=A.i.D(this.b,1,5.2)},
$S:0}
C.bKt.prototype={
$0(){},
$S:0}
C.bKA.prototype={
$2(d,e){var w=this,v=null,u=Math.abs(w.a.ch-e)<0.05,t=u?w.c.j(0.28):A.c.j(0.06),s=B.l(14),r=u?w.c:A.bw
r=B.K(r,A.r,u?2:1)
return B.E(B.az(v,B.cT(v,B.as(new B.dx(A.dM,A.z,A.f,B.d(d,v,v,v,v,v,v,B.m(v,v,u?w.c:A.ab,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),v,v,v),v,v,A.b0,new B.o(t,v,r,s,v,v,A.n),A.ha,v,v,v,A.j9,A.qH,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.bKx(w.b,e),v,v,v,v,v,v,!1,A.a4),1)},
$S:622}
C.bKx.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bKu.prototype={
$0(){return this.a.$1(this.b.ch-0.4)},
$S:0}
C.bKv.prototype={
$0(){return this.a.$1(this.b.ch+0.4)},
$S:0}
C.bKw.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.bKX.prototype={
$2(d,e){var w
if(d==="short"){G.dA(1800,"",120,0,0.55,"noise")
G.dA(200,"",160,2.2,0.4,"saw")
B.fO()
w=this.a
if(w.c!=null)w.afz("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){G.dA(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.afz("\u26a0 Overloaded! The "+$.qK().h(0,e.b).b+" can only give about "+A.i.ad(w.a.c.An(e),2)+" amps but your gadgets are asking for "+A.i.ad(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.afz("Burnt out! "+e.ay)
G.dA(140,"",320,0,0.6,"noise")
G.dA(900,"",160,1.5,0.35,"square")}},
$S:z+42}
C.bKY.prototype={
$0(){},
$S:0}
C.bK2.prototype={
$0(){},
$S:0}
C.bKZ.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bKW.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.at=n
w=o.a.c
v=o.d
u=o.y
t=o.z
s=o.x
r=this.b
q=x.p
n=B.a([B.az(A.bY,B.b5(p,p,p,new C.akj(w,v,u,t,s,r==null?A.jw:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bKQ(o),new C.bKR(o),new C.bKS(o),p,p,p,p,p,p,p,p,p,p,new C.bKT(o),p,p,p,!1,A.a4)],q)
if(o.a.c.a.length===0)n.push(D.be3)
w=o.ay
if(w!=null){v=B.l(14)
u=B.K(A.cO,A.r,1)
n.push(B.ao(p,B.az(p,B.p(p,B.A(B.a([D.fJF,B.E(B.d(w,p,p,p,p,p,p,D.fBg,p,p,p),1)],q),A.E,p,A.e,A.h,0,p,p),A.f,p,p,new B.o(D.bk7,p,u,v,p,p,A.n),p,p,p,p,A.nH,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bKU(o),p,p,p,p,p,p,!1,A.a4),p,p,10,10,8,p))}if(o.x!=null){o=B.A(B.a([D.bLO,new E.fD(A.D8,"Cut wire",new C.bKV(o),A.bX,p)],q),A.l,p,A.e,A.h,0,p,p)
w=B.l(18)
n.push(B.ao(8,B.p(p,o,A.f,p,p,new B.o(F.YN,p,B.K(A.bw,A.r,1),w,p,p,A.n),p,p,p,p,F.amO,p,p,p),p,p,12,12,p,p))}else{w=o.e
if(w!=null&&A.d.q(o.a.c.a,w)){w=o.e
w.toString
n.push(B.ao(8,o.cn5(w),p,p,10,10,p,p))}}return B.jg(new B.an(A.a0,p,A.b1,A.t,n,p),A.t,p)},
$S:287}
C.bKR.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.baS(s)
if(r!=null){t.m(new C.bKO(t,r,d))
return}w=t.b4t(s)
if(w!=null){t.Q=w
v=w.c
u=t.at
t.as=new B.r(v*u.a,w.d*u.b).aJ(0,s)
t.m(new C.bKP(t,w))}},
$S:48}
C.bKO.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c.b},
$S:0}
C.bKP.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bKS.prototype={
$1(d){var w=this.a
if(w.y!=null)w.m(new C.bKM(w,d))
else if(w.Q!=null)w.m(new C.bKN(w,d.b.a5(0,w.as)))},
$S:19}
C.bKM.prototype={
$0(){return this.a.z=this.b.b},
$S:0}
C.bKN.prototype={
$0(){var w,v=this.a,u=v.Q
u.toString
w=this.b
u.c=A.i.D(w.a/v.at.a,0.14,0.86)
u=v.Q
u.toString
u.d=A.i.D(w.b/v.at.b,0.08,0.92)},
$S:0}
C.bKQ.prototype={
$1(d){var w,v,u,t=this.a
if(t.y!=null&&t.z!=null){w=t.z
w.toString
v=t.baS(w)
if(v!=null&&v.a!==t.y.a){w=t.a.c
u=t.y
if(w.amn(u.a,u.b,v.a,v.b)!=null)G.dA(1500,"",40,0,0.22,"square")}}t.Q=t.z=t.y=null
t.afx()},
$S:37}
C.bKT.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.b4t(u)
if(t!=null){v.m(new C.bKJ(v,t))
if(D.mu.am(0,t.b))v.cxI(t)
w=new B.V(Date.now(),0,!1)
if(v.r===t&&w.bB(v.w).a<38e4){v.m(new C.bKK(v,t))
v.r=null}else{v.r=t
v.w=w}v.a.toString
return}v.m(new C.bKL(v,v.cKB(u)))},
$S:59}
C.bKJ.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.x=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
G.dA(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
G.dA(200,"",70,0,0.2,"saw")}},
$S:0}
C.bKK.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.bKL.prototype={
$0(){var w=this.a
w.x=this.b
w.e=w.d=null},
$S:0}
C.bKU.prototype={
$0(){var w=this.a
return w.m(new C.bKI(w))},
$S:0}
C.bKI.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bKV.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.x)
w.x=null
G.dA(300,"",50,0,0.35,"noise")
w.afx()},
$S:0}
C.bK3.prototype={
$0(){return this.a.bta(this.b)},
$S:0}
C.bKp.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.A(B.a([B.d(d,w,w,w,w,w,w,D.fvj,w,w,w),B.E(B.l3(this.b.d,w,w,g,h,new C.bKr(this.a,f),A.i.D(e,h,g)),1)],x.p),A.l,w,A.e,A.h,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1938}
C.bKr.prototype={
$1(d){var w=this.a
w.m(new C.bKq(this.b,d))
w.a.toString},
$S:6}
C.bKq.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bKo.prototype={
$2(d,e){var w=null,v=A.c.j(0.06),u=B.l(10)
return B.E(B.p(w,B.x(B.a([B.d(d,w,w,w,w,w,w,A.abZ,w,w,w),B.d(e,w,w,w,w,w,w,D.fy6,w,w,w)],x.p),A.l,w,A.e,A.h,0,A.p),A.f,w,w,new B.o(v,w,w,u,w,w,A.n),w,w,w,w,A.wA,w,w,w),1)},
$S:121}
C.bKa.prototype={
$0(){var w=this.a
return w.m(new C.bK9(w))},
$S:0}
C.bK9.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.bKb.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.e=w.d=null
G.dA(260,"",70,0,0.35,"noise")
w.afx()},
$S:0}
C.bKc.prototype={
$0(){var w=this.a
return w.m(new C.bK8(w))},
$S:0}
C.bK8.prototype={
$0(){return this.a.e=null},
$S:0}
C.bKg.prototype={
$0(){this.a.m(new C.bK7(this.b,this.c))
G.dA(900,"",40,0,0.3,"noise")},
$S:0}
C.bK7.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bKh.prototype={
$0(){return this.a.b3N(this.b)},
$S:0}
C.bKi.prototype={
$0(){return this.a.a0S(this.b)},
$S:0}
C.bKj.prototype={
$0(){return this.a.a2v(this.b)},
$S:0}
C.bKk.prototype={
$0(){var w=this.a
w.m(new C.bK6(this.b,this.c))
w.a.toString},
$S:0}
C.bK6.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bKl.prototype={
$0(){var w=this.a
w.m(new C.bK5(this.b,this.c))
w.a.toString},
$S:0}
C.bK5.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bKm.prototype={
$0(){var w=this.a
w.m(new C.bK4(this.b,this.c))
w.a.toString},
$S:0}
C.bK4.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bKn.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bKd.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bKe.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bKf.prototype={
$1(d){return this.a.f=d},
$S:6}
C.fu5.prototype={
$1(d){return d.aIY("bulb")},
$S:z+2}
C.fu6.prototype={
$1(d){return d.qi(0,"switch")&&d.aIY("bulb")},
$S:z+2}
C.fu7.prototype={
$1(d){return A.d.aU(d.a,new C.ftT())},
$S:z+2}
C.ftT.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.fu8.prototype={
$1(d){return d.qi(0,"resistor")&&A.d.aU(d.a,new C.ftS())},
$S:z+2}
C.ftS.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fu9.prototype={
$1(d){return!d.qi(0,"battery")&&d.aIY("bulb")},
$S:z+2}
C.ftX.prototype={
$1(d){return A.d.aU(d.a,new C.ftR())},
$S:z+2}
C.ftR.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.ftY.prototype={
$1(d){return A.d.aU(d.a,new C.ftQ())},
$S:z+2}
C.ftQ.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.ftZ.prototype={
$1(d){return A.d.aU(d.a,new C.ftP())},
$S:z+2}
C.ftP.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fu_.prototype={
$1(d){var w=d.a
return A.d.aU(w,new C.ftN())&&A.d.aU(w,new C.ftO())&&d.qi(0,"buck")},
$S:z+2}
C.ftN.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.ftO.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fu0.prototype={
$1(d){var w=d.a
return A.d.aU(w,new C.ftL())&&A.d.aU(w,new C.ftM())},
$S:z+2}
C.ftL.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.ftM.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fu1.prototype={
$1(d){return A.d.aU(d.a,new C.ftK())},
$S:z+2}
C.ftK.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.e28.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a8(0)
w.u(0,v.b)},
$S:0}
C.e2h.prototype={
$1(d){var w=this.a.d
return w.aJm(d)&&w.rw(d)},
$S:z+0}
C.e2i.prototype={
$1(d){return d.x},
$S:z+0}
C.e2j.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.e2k.prototype={
$0(){},
$S:0}
C.e27.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.l(22),o=x.p,n=B.a([D.h0o,A.ax,D.fLv,A.T],o)
for(w=this.a,v=0;v<19;++v){u=D.St[v]
t=A.c.j(0.06)
s=new B.aP(14,14)
r=new B.ay(A.bw,1,A.r,-1)
n.push(B.az(q,B.p(q,B.x(B.a([B.d(u.a,q,q,q,q,q,q,A.iH,q,q,q),A.bF,B.d(u.b,q,3,A.a2,q,q,q,D.fC0,q,q,q)],o),A.E,q,A.e,A.h,0,A.p),A.f,q,q,new B.o(t,q,new B.bG(r,r,r,r),new B.be(s,s,s,s),q,q,A.n),q,q,q,A.cw,A.bl,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.e26(w,d,u),q,q,q,q,q,q,!1,A.a4))}return B.eG(q,F.mW,new B.D(A.bS,new B.a5(340,q,B.cw(n,q,q,q,q,q,A.ah,!0),q),q),q,q,q,q,q,A.d7,q,new B.b9(p,A.a1),q)},
$S:46}
C.e26.prototype={
$0(){B.a6(this.b,!1).N(null)
var w=this.a
w.m(new C.e25(w,this.c))
G.dA(800,"",120,-0.5,0.3,"square")},
$S:0}
C.e25.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.blQ()},
$S:0}
C.e23.prototype={
$1(d){return new C.WU(this.a.d,null)},
$S:z+44}
C.e24.prototype={
$0(){},
$S:0}
C.e2g.prototype={
$1(d){return new B.e3(new C.e2f(this.a),null)},
$S:20}
C.e2f.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.ajn(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.q(0,k),f=g?A.bc:A.aG
k=B.aE(d,m,x.w).w
w=l.r
v=x.p
u=B.a([B.A(B.a([D.fYy,A.b3,B.d(""+w.a+" of 11 done",m,m,m,m,m,m,B.m(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.l,m,A.e,A.h,0,m,m),A.P,B.bu(B.l(4),B.ku(A.bw,m,m,5,m,w.a/11,new B.lQ(f,x.c)),A.aq),A.af],v)
if(h)u.push(D.fOK)
else{h=f.j(0.1)
t=B.l(14)
s=B.K(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.d(r+" Now: "+i.a,m,m,m,m,m,m,Ag.L1,m,m,m)
q=B.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,K.Lb,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.p(m,B.x(B.a([r,A.ax,q,new B.bK(A.a9,m,m,B.bO(!1,B.d(p,m,m,m,m,m,m,B.m(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.e2d(l,e),m,m),m)],v),A.E,m,A.e,A.h,0,A.p),A.f,m,m,new B.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bl,m,m,m))}u.push(A.T)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aP(12,12)
n=new B.ay(o===l.f?f.j(0.6):A.dq,1,A.r,-1)
if(w.q(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
s=B.d(s,m,m,m,m,m,m,A.ac8,m,m,m)
r=j[o]
q=w.q(0,o)?A.aF:A.c
u.push(B.az(m,B.p(m,new B.c7(A.aM,A.e,A.h,A.l,m,A.p,m,0,B.a([s,A.as,new B.by(1,A.ba,B.d(r.a,m,m,m,m,m,m,new B.G(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],v),m),A.f,m,m,new B.o(h,m,new B.bG(n,n,n,n),new B.be(t,t,t,t),m,m,A.n),m,m,m,A.eO,A.nH,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.e2e(l,o,e),m,m,m,m,m,m,!1,A.a4))}return B.bm(!0,new B.cN(new B.aY(0,1/0,0,k.a.b*0.75),B.cw(u,m,m,A3.yZ,m,m,A.ah,!0),m),!0,!1,A.ag,!0,!0)},
$S:89}
C.e2d.prototype={
$0(){var w=this.a
w.m(new C.e2b(w))
this.b.$1(new C.e2c())
w.FB()},
$S:0}
C.e2b.prototype={
$0(){var w=this.a
$.ajn()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.e2c.prototype={
$0(){},
$S:0}
C.e2e.prototype={
$0(){var w=this.a
w.m(new C.e29(w,this.b))
this.c.$1(new C.e2a())
w.FB()},
$S:0}
C.e29.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e2a.prototype={
$0(){},
$S:0}
C.e2m.prototype={
$0(){return B.a6(this.a,!1).hY()},
$S:0}
C.e2n.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.kV("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a6(t.b,!1).ce(B.ee(new C.e2l(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.e2l.prototype={
$1(d){B.la("construction")
return Ap.hXh()},
$S:z+45}
C.e2o.prototype={
$0(){return E.hIG(this.a,"ELECTRONICS LAB",this.b,A.aG)},
$S:0}
C.e2p.prototype={
$0(){var w=this.a
return w.m(w.d.gd1t())},
$S:0}
C.e2q.prototype={
$0(){var w=this.a,v=w.d
w.m(v.gtk(v))
w.FB()},
$S:0}
C.cMf.prototype={
$2(d,e){var w=null,v=this.a.gazt().x
v===$&&B.c()
return B.b5(w,w,w,new C.bbN(v,w),A.az)},
$S:56}
C.cMe.prototype={
$3(d,e,f){var w=new B.aH($.S().r,A.aj,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.E(new B.aZ(v,t))
w.E(new B.ce(v,u,v+e,u))
w.E(new B.ce(v,u,v,u+e))
w.E(new B.ce(v,u,v-e,u))
w.E(new B.ce(v,u,v,t))
w.E(new B.bw())
t=B.L()
t.r=A.c.j(f).gp(0)
this.a.af(w,t)},
$S:424}
C.h2c.prototype={
$3(d,e,f){return new C.Wb(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+46}
C.h2d.prototype={
$4(d,e,f,g){var w=x.a
return new B.d2(e,!1,B.im(A.z,g,null,new B.bh(B.cG(A.cj,e,null),new B.bq(0.85,1,w),w.k("bh<bP.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
C.dZ4.prototype={
$0(){var w=this.a
w.e=this.b
w.y=0
w.z=w.gBH()},
$S:0}
C.dZ5.prototype={
$0(){var w,v=this.a
v.e=0
w=this.c
v.y=A.o.F(A.o.F(this.b,w)+w,w)
v.z=v.gBH()},
$S:0}
C.dZf.prototype={
$0(){var w=this.a,v=this.b,u=this.c
w.x=new B.r(v.a/u.a,v.b/u.b)
w.w=w.gBH()},
$S:0}
C.dZ3.prototype={
$1(d){return new L.J2(F.Se[this.b],new C.dZ2(this.a,d),null)},
$S:z+47}
C.dZ2.prototype={
$0(){this.a.a=!0
B.a6(this.b,!1).eq()},
$S:0}
C.dZg.prototype={
$0(){var w=this.a
w.f=this.b
w.r=!1},
$S:0}
C.dZh.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.dYX.prototype={
$2(d,e){var w=null,v=this.a,u=v.f?v.gb1C():w
return B.az(A.bY,B.b5(w,w,w,v.cmu(this.b),A.h4),A.y,!1,D.hww,u,w,w,w,new C.dYV(v),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dYW(v,e),w,w,w,!1,A.a4)},
$S:36}
C.dYW.prototype={
$1(d){var w=this.b
return this.a.cFh(d.b,new B.av(B.aS(1/0,w.a,w.b),B.aS(1/0,w.c,w.d)))},
$S:59}
C.dYV.prototype={
$1(d){var w,v=d.d
if(v==null)v=0
if(Math.abs(v)>120&&this.a.O4()!=null){w=v<0?1:-1
this.a.aDh(w)}},
$S:37}
C.dZd.prototype={
$5$color$on(d,e,f,g,h){var w=null,v=h?g.j(0.28):A.c.j(0.08),u=B.l(14),t=B.K(h?g:A.aT,A.r,1)
return B.az(w,B.p(w,B.x(B.a([B.W(d,g,w,w,w,20),A.tV,B.d(e,w,w,w,w,w,w,B.m(w,w,g,w,w,w,w,w,w,w,w,9.5,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.N,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,A.j9,A.kB,w,w,56),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:714}
C.dZ9.prototype={
$0(){return this.a.aDh(-1)},
$S:0}
C.dZa.prototype={
$0(){return this.a.aDh(1)},
$S:0}
C.dZb.prototype={
$0(){return this.a.JO(null)},
$S:0}
C.dZc.prototype={
$0(){return this.a.JO(0)},
$S:0}
C.dZi.prototype={
$0(){return B.a6(this.a,!1).hY()},
$S:0}
C.dZ8.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.l(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c2r(o):q.bFx(o,p),m=x.p
p=B.a([B.oF(new B.lY(n,new B.bf(p,x.bz)),A.pu,B.pZ(),A.b0,A.b0,new C.dZ6())],m)
n=t.d
if(n){w=A.i.F(q.gBH(),12)<4
v=w?150:96
u=B.l(16)
m=B.a([A.as],m)
if(w)m.push(D.bLA)
else m.push(A.b3)
m.push(B.p(s,s,A.f,s,s,new B.o(w?A.bc:A.av,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.as)
p.push(B.ao(s,B.as(B.cT(s,B.A(m,A.l,s,A.e,A.h,0,s,s),s,s,A.ec,new B.o(A.w,s,s,u,s,s,A.n),A.n_,s,28,s,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.AO)p.push(B.ao(s,B.as(B.p(s,s,A.f,s,s,A.Mi,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.AP)p.push(B.ao(s,B.p(s,s,A.f,s,s,A.Mi,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ao(6,B.az(s,B.as(B.p(s,s,A.f,s,s,new B.o(A.c.j(0.75),s,s,B.l(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dZ7(q),s,s,s,s,s,s,!1,A.a4),s,s,0,0,s,s))
return B.bu(r,new B.an(A.a0,s,A.b1,A.t,p,s),A.aq)},
$S:358}
C.dZ6.prototype={
$2(d,e){var w=x.a
return new B.d2(e,!1,B.im(A.z,d,null,new B.bh(e,new B.bq(0.92,1,w),w.k("bh<bP.T>"))),null)},
$S:449}
C.dZ7.prototype={
$0(){return this.a.JO(null)},
$S:0}
C.dZe.prototype={
$2(d,e){var w,v,u,t,s=null,r=Math.max(e.b,230),q=this.a
q=B.a([B.d(A.a.b0(A.o.v(B.df(q)),2,"0")+":"+A.a.b0(A.o.v(B.fV(q)),2,"0"),s,s,s,s,s,s,A.u1,s,s,s),A.b3],x.p)
for(w=0;w<4;++w){v=new B.aP(1,1)
q.push(B.p(s,s,A.f,s,s,new B.o(A.c,s,s,new B.be(v,v,v,v),s,s,A.n),s,4+w*2,s,D.bK5,s,s,s,3))}q.push(A.df)
q.push(D.fSA)
q.push(A.bn)
v=B.K(A.ab,A.r,1)
u=B.l(4)
t=this.b
q.push(B.p(s,new B.bK(A.a5,s,s,B.BW(A.z,B.p(s,s,A.f,s,s,new B.o(A.bc,s,s,B.l(2),s,s,A.n),s,s,s,A2.Hk,s,s,s,s),s,t/100),s),A.f,s,s,new B.o(s,s,v,u,s,s,A.n),s,12,s,s,s,s,s,26))
q.push(A.rc)
q.push(B.d(""+t+"%",s,s,s,s,s,s,D.fJg,s,s,s))
return new B.dx(A.dM,A.a5,A.f,new B.a5(r,s,B.A(q,A.l,s,A.e,A.h,0,s,s),s),s)},
$S:305}
C.dZ1.prototype={
$0(){return this.a.JO(A.d.cn(F.ik,this.b))},
$S:0}
C.dZ_.prototype={
$0(){return this.a.JO(0)},
$S:0}
C.dZ0.prototype={
$2(d,e){var w,v,u,t,s=null,r=Math.max(e.b,216),q=B.a([],x.p)
for(w=B.cX(F.ik,0,B.dD(4,"count",x.S),x.gD),v=w.$ti,w=new B.bQ(w,w.gJ(0),v.k("bQ<ak.E>")),u=this.a,v=v.k("ak.E");w.C();){t=w.d
q.push(u.axj(t==null?v.a(t):t,50,!1))}return new B.dx(A.dM,A.z,A.f,new B.a5(r,s,B.A(q,A.l,s,A.r0,A.h,0,s,s),s),s)},
$S:305}
C.dYU.prototype={
$0(){return this.a.JO(null)},
$S:0}
C.dYZ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=A.w.j(0.55),l=this.a,k=l.f,j=k?112:10
if(k){k=l.c
k.toString
k=B.aE(k,A.bZ,x.w).w.a.a>700}else k=!1
k=k?250:10
w=x.p
k=B.p(n,B.A(B.a([D.h6c,A.as,B.E(B.d(this.b?"Navigation   Media   Climate":"File   Edit   View   Window   Help",n,1,A.eS,n,n,n,A.act,n,n,n),1),B.d(A.a.b0(A.o.v(B.df(new B.V(Date.now(),0,!1))),2,"0")+":"+A.a.b0(A.o.v(B.fV(new B.V(Date.now(),0,!1))),2,"0"),n,n,n,n,n,n,A.rh,n,n,n)],w),A.l,n,A.e,A.h,0,n,n),A.f,m,n,n,n,24,n,n,new B.Q(j,0,k,0),n,n,n)
j=B.a([B.b5(n,n,n,new C.byt(l.gBH(),this.c.d,n),A.az)],w)
if(l.e!=null){if(l.f){m=l.c
m.toString
m=B.aE(m,A.dD,x.w).w.r.b+52}else m=12
v=B.l(10)
u=B.K(A.aT,A.r,1)
t=B.l(10)
s=B.az(n,B.p(n,n,A.f,n,n,A.afw,n,12,n,n,n,n,n,12),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.dYY(l),n,n,n,n,n,n,!1,A.a4)
r=B.p(n,n,A.f,n,n,A.Ye,n,12,n,n,n,n,n,12)
q=B.az(n,B.p(n,n,A.f,n,n,D.b99,n,12,n,n,n,n,n,12),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,l.gbbl(),n,n,n,n,n,n,!1,A.a4)
p=l.e
p.toString
p=B.a([s,A.e7,r,A.e7,q,A.as,B.E(B.d(F.ik[p].a,n,1,A.a2,n,n,n,A.W3,n,n,n),1)],w)
if(l.O4()!=null)s=!l.f||!l.r
else s=!1
if(s)p.push(l.aZA(19))
s=B.p(n,B.A(p,A.l,n,A.e,A.h,0,n,n),A.f,A.ct,n,n,n,26,n,n,A.fv,n,n,n)
r=l.e
r.toString
j.push(B.bR(0,new B.D(new B.Q(26,m,26,58),B.p(n,B.bu(t,B.x(B.a([s,B.E(l.aPW(r),1)],w),A.l,n,A.e,A.h,0,A.p),A.aq),A.f,n,n,new B.o(A.w,n,u,v,D.dyA,n,A.n),n,n,n,n,n,n,n,n),n),0,0,0))}m=A.c.j(0.16)
v=B.l(18)
u=B.K(A.aT,A.r,1)
t=B.a([],w)
for(o=0;o<8;++o)t.push(new B.D(A.j9,l.axj(F.ik[o],34,!1),n))
j.push(B.ao(8,B.as(B.p(n,B.A(t,A.l,n,A.e,A.N,0,n,n),A.f,n,n,new B.o(m,n,u,v,n,n,A.n),n,n,n,n,A.lR,n,n,n),n,n,n),n,n,0,0,n,n))
return B.p(n,B.x(B.a([k,B.E(new B.an(A.a0,n,A.b1,A.t,j,n),1)],w),A.l,n,A.e,A.h,0,A.p),A.f,A_.a_q,n,n,n,n,n,n,n,n,n,n)},
$S:81}
C.dYY.prototype={
$0(){return this.a.JO(null)},
$S:0}
C.fuA.prototype={
$0(){return D.emZ},
$S:z+48}
C.fuB.prototype={
$0(){return D.dV_},
$S:z+49}
C.fuC.prototype={
$0(){return D.dRv},
$S:z+50}
C.fuD.prototype={
$0(){return D.dUn},
$S:z+51}
C.fuE.prototype={
$0(){return D.dZC},
$S:z+52}
C.fuF.prototype={
$0(){return D.eiL},
$S:z+53}
C.fuG.prototype={
$0(){return D.ekV},
$S:z+54}
C.fuH.prototype={
$0(){return D.dYP},
$S:z+36}
C.cnA.prototype={
$0(){return B.a6(this.a,!1).hY()},
$S:0}
C.cnB.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=(e.b-14)/2,i=x.p,h=B.a([],i)
for(w=$.hMu(),v=j*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aP(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ab(0,A.G,p.j(0.4),A.dp,16)],t)
n=B.d(r.c,k,k,k,k,k,k,Ao.L_,k,k,k)
m=B.d(r.a,k,k,k,k,k,k,D.fH2,k,k,k)
l=A.c.j(0.85)
h.push(B.az(k,B.p(k,new B.an(A.a0,k,A.ad,A.t,B.a([new B.cK(k,-6,-6,k,k,k,n,k),new B.bK(A.lD,k,k,B.x(B.a([m,A.cR,B.d(r.b,k,k,k,k,k,k,new B.G(!0,l,k,k,k,k,12,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)],i),A.E,k,A.e,A.N,0,A.p),k)],i),k),A.f,k,k,new B.o(k,k,k,new B.be(q,q,q,q),p,new B.a7(A.ay,A.aC,A.x,o,k,k),A.n),k,v,k,k,A.bH,k,k,j),A.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.cnz(d,r),k,k,k,k,k,k,!1,A.a4))}return B.bZ(A.bI,h,A.br,k,14,14)},
$S:170}
C.cnz.prototype={
$0(){return B.a6(this.a,!1).ce(B.ee(new C.cny(this.b),!1,null,x.H))},
$S:0}
C.cny.prototype={
$1(d){return this.a.f.$0()},
$S:39}
C.eW2.prototype={
$0(){var w=this.a
return w.w=w.d[w.b7T(w.f)]},
$S:0}
C.eVZ.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cT.ai()*7},
$S:0}
C.eVY.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bP(0,A.cf)
w.w=""},
$S:0}
C.eW0.prototype={
$0(){var w=this.a
return w.m(new C.eW_(w,this.b))},
$S:0}
C.eW_.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cH(w,this.b)},
$S:0}
C.eW1.prototype={
$1(d){return this.a.b2b(0)},
$S:2}
C.e57.prototype={
$0(){return C.JP("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.e58.prototype={
$0(){},
$S:0}
C.e52.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.e54.prototype={
$0(){return this.a.b2d(this.b)},
$S:0}
C.e55.prototype={
$0(){var w=this.a
return w.m(new C.e53(w))},
$S:0}
C.e53.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.e56.prototype={
$0(){var w=this.a
return w.b2d(w.d)},
$S:0}
C.dQo.prototype={
$2(d,e){return d+e},
$S:85}
C.dQp.prototype={
$0(){},
$S:0}
C.dQj.prototype={
$2(d,e){return d+e},
$S:85}
C.dQm.prototype={
$0(){var w=this.a
return w.m(new C.dQl(w,this.b))},
$S:0}
C.dQl.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dQn.prototype={
$0(){var w=this.a
return w.m(new C.dQk(w))},
$S:0}
C.dQk.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.e1D.prototype={
$0(){return E.uI(this.b,this.a.d,"drawing")},
$S:0}
C.e1E.prototype={
$1(d){var w=this.a
return w.m(new C.e1C(w,d))},
$S:48}
C.e1C.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aKz(u,v,t))},
$S:0}
C.e1F.prototype={
$1(d){var w=this.a
return w.m(new C.e1B(w,d))},
$S:19}
C.e1B.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
C.e1G.prototype={
$1(d){var w=this.a
return w.m(new C.e1A(w,d))},
$S:23}
C.e1A.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aKz(u,v,t))},
$S:0}
C.e1H.prototype={
$0(){var w=this.a
return w.m(new C.e1z(w,this.b))},
$S:0}
C.e1z.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.e1I.prototype={
$1(d){var w=this.a
return w.m(new C.e1y(w,d))},
$S:6}
C.e1y.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.e1J.prototype={
$0(){var w=this.a
return w.m(new C.e1x(w))},
$S:0}
C.e1x.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.e1K.prototype={
$0(){var w=this.a
return w.m(new C.e1w(w))},
$S:0}
C.e1w.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.e1L.prototype={
$0(){var w=this.a
return w.m(A.d.gtk(w.e))},
$S:0}
C.e1M.prototype={
$0(){var w=this.a
return w.m(new C.e1v(w))},
$S:0}
C.e1v.prototype={
$0(){var w=this.a
w.x=D.aBz[A.o.F(A.d.cn(D.aBz,w.x)+1,4)]},
$S:0}
C.esz.prototype={
$0(){return this.a.f.I(0,this.b)},
$S:0}
C.esA.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.JP("bell",B.a([0,4,7],w),500,0.45)
u.m(new C.esy(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.c()
if(v===u.length)C.JP("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:12}
C.esy.prototype={
$0(){var w=this.a
w.r.u(0,B.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
C.esB.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.esx(w))},
$S:12}
C.esx.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
C.esF.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return B.az(w,B.lH(new C.esD(v,e),w,A.b0,A.pu,w,w,new B.bq(0,u,x.a),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.esE(v,e),w,w,w,w,w,w,!1,A.a4)},
$S:83}
C.esE.prototype={
$0(){return this.a.ceo(this.b)},
$S:0}
C.esD.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dr(),m=n.a
m.$flags&2&&B.aj(m)
m[11]=0.001
n.fE(3.141592653589793*e)
m=B.l(16)
w=o?p:D.cbG
if(o)v=q.a.r.q(0,q.b)?A.bc.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.K(u.r.q(0,t)?A.bc:A.aT,A.r,1)
if(o){r=B.dr()
r.fE(3.141592653589793)
u=u.e
u===$&&B.c()
r=B.fA(A.z,B.d(u[t],p,p,p,p,p,p,H.acc,p,p,p),p,r,!0)
u=r}else u=D.h_3
return B.fA(A.z,B.p(A.z,u,A.f,p,p,new B.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:112}
C.esG.prototype={
$0(){var w=this.a
return w.m(new C.esC(w,this.b))},
$S:0}
C.esC.prototype={
$0(){var w=this.a
w.d=this.b.a
w.auE()},
$S:0}
C.esH.prototype={
$0(){var w=this.a
return w.m(w.gbOi())},
$S:0}
C.eDl.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.eDm.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.eDj.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eDk.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eDi(w))},
$S:12}
C.eDi.prototype={
$0(){return this.a.f=-1},
$S:0}
C.eDn.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.eDo.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.eDp.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b2c()},
$S:12}
C.eDq.prototype={
$0(){return this.a.ceu(this.b)},
$S:0}
C.eRo.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:60}
C.eRx.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.d(d,w,1,A.a2,w,w,w,B.m(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.D(A.kB,B.A(B.a([v,A.ae,new B.di(1,A.cm,new B.dx(A.dM,A.z,A.f,B.d(e,w,w,w,w,w,w,B.m(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w),w)],x.p),A.l,w,A.e,A.h,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1939}
C.eRt.prototype={
$1(d){return this.a.m(new C.eRs())},
$S:2}
C.eRs.prototype={
$0(){},
$S:0}
C.eRu.prototype={
$0(){var w=this.a
return w.m(new C.eRr(w,this.b))},
$S:0}
C.eRr.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eRv.prototype={
$1(d){var w=this.a
return w.m(new C.eRq(w,d))},
$S:6}
C.eRq.prototype={
$0(){return this.a.f=A.i.V(this.b)},
$S:0}
C.eRw.prototype={
$0(){var w=this.a
return w.m(new C.eRp(w))},
$S:0}
C.eRp.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.ere.prototype={
$0(){},
$S:0}
C.erf.prototype={
$0(){},
$S:0}
C.er7.prototype={
$0(){var w=this.a
return w.m(new C.er6(w))},
$S:0}
C.er6.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.c1(u,1,!1,x.S)
w.r=0.9
E.XH("hat",0,0.6)},
$S:0}
C.er8.prototype={
$0(){var w=this.a
return w.m(new C.er5(w))},
$S:0}
C.er5.prototype={
$0(){this.a.y=1.1
E.my("bell",36,200,0.4)},
$S:0}
C.er9.prototype={
$0(){var w=this.a
return w.m(new C.er4(w))},
$S:0}
C.er4.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aw(Math.max(v,u)-t+1)
w.as=u
E.my("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.era.prototype={
$0(){var w=this.a
return w.m(new C.er3(w,this.b))},
$S:0}
C.er3.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.erb.prototype={
$1(d){var w=this.a
return w.m(new C.er2(w,d))},
$S:6}
C.er2.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.i.V(this.b),r=J.e6(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.erc.prototype={
$1(d){var w=this.a
return w.m(new C.er1(w,d))},
$S:6}
C.er1.prototype={
$0(){return this.a.z=A.i.V(this.b)},
$S:0}
C.erd.prototype={
$1(d){var w=this.a
return w.m(new C.er0(w,d))},
$S:6}
C.er0.prototype={
$0(){return this.a.Q=A.i.V(this.b)},
$S:0}
C.cnw.prototype={
$0(){var w=this
return E.my(w.a,w.b,w.c,w.d)},
$S:1};(function aliases(){var w=C.aOF.prototype
w.bAt=w.t
w=C.aNI.prototype
w.bzu=w.t
w=C.aNJ.prototype
w.bzv=w.t
w=C.aNN.prototype
w.bzz=w.t
w=C.aPu.prototype
w.bBp=w.t
w=C.aOD.prototype
w.bAr=w.t
w=C.azV.prototype
w.bwv=w.t
w=C.azW.prototype
w.bww=w.t
w=C.aM9.prototype
w.bxS=w.t
w=C.aNY.prototype
w.bzK=w.t
w=C.aNK.prototype
w.bzw=w.t
w=C.aO4.prototype
w.bzS=w.t
w=C.aOx.prototype
w.bAl=w.t
w=C.aOY.prototype
w.bAM=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0,u=a._instance_1u,t=a._instance_1i,s=a._instance_0i,r=a.installInstanceTearOff
w(C.aGF.prototype,"gayP","c9C",1)
v(C,"isD","c7o",3)
var q
u(q=C.aF6.prototype,"gciK","ciL",22)
w(q,"gcab","b0J",1)
w(C.aF8.prototype,"gcbW","cbX",1)
t(C.aFp.prototype,"gcc2","cc3",39)
w(q=C.aJI.prototype,"gcCg","cCh",1)
w(q,"gcc4","afn",1)
w(q,"gcnf","cng",1)
w(q,"gcc1","afm",3)
w(q=C.aGE.prototype,"gbLp","aaI",3)
w(q,"gcmw","b4j",1)
w(q,"gcqi","ai0",3)
s(q,"gcc6","afo",3)
s(q=C.a5J.prototype,"gtk","a8",1)
u(q,"gd_6","ap9",0)
u(q,"gcWu","Mt",0)
w(q,"gd1t","blQ",1)
r(C.akj.prototype,"gcct",0,5,null,["$5"],["qY"],41,0,0)
w(q=C.aFC.prototype,"gccu","ccv",1)
w(q,"gct9","aim",3)
w(q,"gcj1","agH",3)
w(q,"gcAh","ajw",3)
w(q=C.aFs.prototype,"gc4S","adA",3)
w(q,"gbbl","cGP",1)
w(q,"gb1C","ccz",1)
w(q=C.aH7.prototype,"gcep","ceq",1)
s(q,"gcen","b2b",1)
w(C.aGq.prototype,"gbOi","auE",1)
s(C.aGL.prototype,"gcer","ces",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aF,[C.alv,C.GY,C.vq,C.aUJ,C.a4A,C.bcU,C.c7p,C.yJ,C.D3,C.nQ,C.bdF,C.B6,C.bvW,C.qA,C.rg,C.D7,C.a_I,C.ag8,C.a1W,C.Di,C.ad0,C.adh,C.afe,C.GJ,C.ei,C.u1,C.abG,C.acN,C.a5J,C.n1,C.bdG,C.fW,C.m5,C.bxf,C.aKz])
u(B.hs,[C.fM1,C.fAG,C.fIo,C.fIp,C.fLZ,C.fM_,C.ekm,C.ekF,C.ezZ,C.ezw,C.ezx,C.ezy,C.ezz,C.ezA,C.ezB,C.ezC,C.ezD,C.ezu,C.ezv,C.ezt,C.ezU,C.ezV,C.ezW,C.dPV,C.dPX,C.dQ_,C.dQa,C.c7q,C.c7r,C.ftU,C.ftV,C.ftW,C.fu2,C.fu3,C.fu4,C.dRX,C.dRE,C.dRY,C.dRz,C.dRu,C.dRw,C.dRC,C.dRP,C.dRN,C.dRO,C.dRM,C.dRJ,C.dRL,C.f9I,C.f9p,C.f9w,C.f9F,C.f9j,C.ds3,C.ds4,C.ds0,C.ds1,C.ds2,C.ds5,C.ds6,C.ds7,C.ds8,C.ds9,C.dsa,C.dsb,C.dsc,C.dsd,C.eyV,C.eyW,C.eyX,C.eyY,C.eyT,C.eyU,C.ezp,C.ez1,C.ez3,C.eyO,C.ezl,C.ezj,C.ezk,C.ezi,C.ezh,C.eyQ,C.bQE,C.bQP,C.bQK,C.bQQ,C.bQS,C.bQF,C.bQD,C.bQX,C.bQL,C.bQO,C.bQN,C.bQM,C.bL_,C.fY4,C.fY7,C.fY5,C.bKG,C.bKB,C.bKz,C.bKZ,C.bKR,C.bKS,C.bKQ,C.bKT,C.bKp,C.bKr,C.bKn,C.bKd,C.bKe,C.bKf,C.fu5,C.fu6,C.fu7,C.ftT,C.fu8,C.ftS,C.fu9,C.ftX,C.ftR,C.ftY,C.ftQ,C.ftZ,C.ftP,C.fu_,C.ftN,C.ftO,C.fu0,C.ftL,C.ftM,C.fu1,C.ftK,C.e2h,C.e2i,C.e27,C.e23,C.e2g,C.e2l,C.cMe,C.h2c,C.h2d,C.dZ3,C.dYW,C.dYV,C.dZd,C.cny,C.eW1,C.e1E,C.e1F,C.e1G,C.e1I,C.esD,C.eRo,C.eRx,C.eRt,C.eRv,C.erb,C.erc,C.erd])
u(B.jD,[C.fM0,C.ekr,C.ekp,C.ezF,C.ezS,C.dRv,C.dRS,C.dYa,C.f9L,C.f9M,C.f9o,C.f9B,C.f9C,C.f9x,C.f9D,C.f9i,C.eyR,C.eyS,C.ezo,C.ezg,C.ez5,C.bQR,C.bQT,C.bQV,C.bQG,C.bQI,C.bL0,C.cuI,C.fY6,C.bKy,C.bKA,C.bKX,C.bKW,C.bKo,C.e2f,C.cMf,C.dYX,C.dZ8,C.dZ6,C.dZe,C.dZ0,C.dYZ,C.cnB,C.dQo,C.dQj,C.esF])
u(B.af,[C.WU,C.Xg,C.VK,C.VR,C.Ol,C.aJH,C.Xf,C.akh,C.Ws,C.azA,C.Wb,C.XO,C.WA,C.VL,C.Wr,C.Xa,C.Xk,C.XF,C.X9])
u(B.ah,[C.bn1,C.aOF,C.aNI,C.aNN,C.aFp,C.aPu,C.aOD,C.azV,C.bAr,C.aM9,C.aNY,C.aOY,C.aO4,C.aNK,C.bmt,C.aGq,C.aGL,C.bnJ,C.aOx])
u(B.iR,[C.ekk,C.ekl,C.ekx,C.eky,C.ekt,C.eks,C.eku,C.ekq,C.ekv,C.eko,C.ekw,C.ekn,C.ekB,C.ekA,C.ekC,C.ekz,C.ekD,C.ekE,C.ekG,C.ezY,C.eA_,C.eA0,C.ezH,C.ezG,C.ezE,C.ezN,C.ezO,C.ezK,C.ezP,C.ezJ,C.ezQ,C.ezR,C.ezI,C.ezT,C.ezM,C.ezX,C.ezL,C.dQh,C.dQg,C.dPS,C.dPT,C.dPU,C.dQi,C.dPW,C.dPY,C.dPZ,C.dQ0,C.dPP,C.dPQ,C.dPR,C.dQ7,C.dQ8,C.dQ9,C.dQ6,C.dQb,C.dQ5,C.dQc,C.dQ4,C.dQd,C.dQ3,C.dQe,C.dQ2,C.dQf,C.dQ1,C.dRB,C.dRA,C.dRF,C.dRx,C.dRy,C.dRG,C.dRH,C.dRI,C.dRD,C.dRt,C.dRR,C.dRQ,C.dRT,C.dRU,C.dRV,C.dRK,C.dRW,C.cWX,C.dY8,C.dY7,C.dY9,C.fuk,C.ful,C.fum,C.fun,C.fuo,C.fup,C.fuq,C.fur,C.fus,C.f9K,C.f9J,C.f9r,C.f9q,C.f9m,C.f9l,C.f9n,C.f9k,C.f9z,C.f9y,C.f9A,C.f9s,C.f9E,C.f9v,C.f9G,C.f9u,C.f9H,C.f9t,C.ez_,C.eyP,C.eyZ,C.eyL,C.ez0,C.ez2,C.eyM,C.eyN,C.ezn,C.ezm,C.ezd,C.eze,C.ezf,C.ez9,C.eza,C.ez8,C.ezb,C.ez7,C.ezc,C.ez6,C.ez4,C.ds_,C.bQU,C.bQW,C.bQH,C.bQJ,C.bKD,C.bKE,C.bKC,C.bKF,C.bKH,C.bKs,C.bKt,C.bKx,C.bKu,C.bKv,C.bKw,C.bKY,C.bK2,C.bKO,C.bKP,C.bKM,C.bKN,C.bKJ,C.bKK,C.bKL,C.bKU,C.bKI,C.bKV,C.bK3,C.bKq,C.bKa,C.bK9,C.bKb,C.bKc,C.bK8,C.bKg,C.bK7,C.bKh,C.bKi,C.bKj,C.bKk,C.bK6,C.bKl,C.bK5,C.bKm,C.bK4,C.e28,C.e2j,C.e2k,C.e26,C.e25,C.e24,C.e2d,C.e2b,C.e2c,C.e2e,C.e29,C.e2a,C.e2m,C.e2n,C.e2o,C.e2p,C.e2q,C.dZ4,C.dZ5,C.dZf,C.dZ2,C.dZg,C.dZh,C.dZ9,C.dZa,C.dZb,C.dZc,C.dZi,C.dZ7,C.dZ1,C.dZ_,C.dYU,C.dYY,C.fuA,C.fuB,C.fuC,C.fuD,C.fuE,C.fuF,C.fuG,C.fuH,C.cnA,C.cnz,C.eW2,C.eVZ,C.eVY,C.eW0,C.eW_,C.e57,C.e58,C.e52,C.e54,C.e55,C.e53,C.e56,C.dQp,C.dQm,C.dQl,C.dQn,C.dQk,C.e1D,C.e1C,C.e1B,C.e1A,C.e1H,C.e1z,C.e1y,C.e1J,C.e1x,C.e1K,C.e1w,C.e1L,C.e1M,C.e1v,C.esz,C.esA,C.esy,C.esB,C.esx,C.esE,C.esG,C.esC,C.esH,C.eDl,C.eDm,C.eDj,C.eDk,C.eDi,C.eDn,C.eDo,C.eDp,C.eDq,C.eRs,C.eRu,C.eRr,C.eRq,C.eRw,C.eRp,C.ere,C.erf,C.er7,C.er6,C.er8,C.er5,C.er9,C.er4,C.era,C.er3,C.er2,C.er1,C.er0,C.cnw])
t(C.bAE,C.aOF)
t(C.aGF,C.bAE)
u(B.ms,[C.bjW,C.bdX,C.bvj,C.bcC,C.btU,C.btj,C.bdi,C.btl,C.bxp,C.bjU,C.akj,C.bbN,C.byt,C.ag1,C.byF,C.btk,C.bov])
t(C.aNJ,C.aNI)
t(C.aF6,C.aNJ)
t(C.bAo,C.aNN)
t(C.aF8,C.bAo)
u(B.l6,[C.Ll,C.a1J,C.Kj])
u(B.aw,[C.bui,C.agk,C.afb,C.Rh,C.buP,C.a9F,C.bg3])
t(C.aJI,C.aPu)
t(C.bjT,B.pj)
t(C.aGE,C.aOD)
t(C.azW,C.azV)
t(C.aki,C.azW)
t(C.aFC,C.bAr)
t(C.bbO,C.aM9)
t(C.aFs,C.aNY)
t(C.bAL,C.aOY)
t(C.aH7,C.bAL)
t(C.bAt,C.aO4)
t(C.bmC,C.bAt)
t(C.bAn,C.aNK)
t(C.bmb,C.bAn)
t(C.bAC,C.aOx)
t(C.bnd,C.bAC)
w(C.aOF,B.cf)
w(C.bAE,E.nO)
w(C.aNI,B.cf)
w(C.aNJ,E.nO)
w(C.aNN,B.cf)
w(C.bAo,E.nO)
w(C.aPu,B.eP)
w(C.aOD,B.cf)
w(C.azV,B.cf)
w(C.azW,E.nO)
w(C.aM9,B.cf)
v(C.bAr,B.eE)
w(C.aNY,B.cf)
w(C.aNK,B.cf)
w(C.bAn,E.nO)
w(C.aO4,B.cf)
w(C.bAt,E.nO)
w(C.aOx,B.cf)
w(C.bAC,E.nO)
w(C.aOY,B.cf)
w(C.bAL,E.nO)})()
B.ja(b.typeUniverse,JSON.parse('{"WU":{"af":[],"v":[]},"bn1":{"ah":["WU"]},"Xg":{"af":[],"v":[]},"aGF":{"ah":["Xg"]},"bjW":{"aC":[]},"VK":{"af":[],"v":[]},"aF6":{"ah":["VK"]},"VR":{"af":[],"v":[]},"aF8":{"ah":["VR"]},"bdX":{"aC":[]},"agk":{"aw":[],"v":[]},"afb":{"aw":[],"v":[]},"aJH":{"af":[],"v":[]},"Ol":{"af":[],"v":[]},"aFp":{"ah":["Ol"]},"bui":{"aw":[],"v":[]},"Rh":{"aw":[],"v":[]},"bvj":{"aC":[]},"buP":{"aw":[],"v":[]},"bcC":{"aC":[]},"aJI":{"ah":["aJH"]},"btU":{"aC":[]},"btj":{"aC":[]},"bdi":{"aC":[]},"btl":{"aC":[]},"bxp":{"aC":[]},"Xf":{"af":[],"v":[]},"bjT":{"aC":[]},"aGE":{"ah":["Xf"]},"bjU":{"aC":[]},"akj":{"aC":[]},"akh":{"af":[],"v":[]},"aki":{"ah":["akh"]},"Ws":{"af":[],"v":[]},"azA":{"af":[],"v":[]},"aFC":{"ah":["Ws"],"eE":[]},"bbO":{"ah":["azA"]},"bbN":{"aC":[]},"Wb":{"af":[],"v":[]},"aFs":{"ah":["Wb"]},"byt":{"aC":[]},"ag1":{"aC":[]},"a9F":{"aw":[],"v":[]},"XO":{"af":[],"v":[]},"WA":{"af":[],"v":[]},"VL":{"af":[],"v":[]},"Wr":{"af":[],"v":[]},"Xa":{"af":[],"v":[]},"Xk":{"af":[],"v":[]},"XF":{"af":[],"v":[]},"X9":{"af":[],"v":[]},"aH7":{"ah":["XO"]},"byF":{"aC":[]},"bmC":{"ah":["WA"]},"btk":{"aC":[]},"bmb":{"ah":["VL"]},"bmt":{"ah":["Wr"]},"bov":{"aC":[]},"aGq":{"ah":["Xa"]},"aGL":{"ah":["Xk"]},"bnJ":{"ah":["XF"]},"bnd":{"ah":["X9"]},"bg3":{"aw":[],"v":[]}}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.at
return{c:w("lQ<u?>"),G:w("u"),J:w("bs<n,H>"),Q:w("db<n>"),Z:w("a_"),M:w("O<d7>"),R:w("O<a4v>"),h:w("O<a4A>"),V:w("O<ab>"),O:w("O<u>"),l:w("O<V>"),D:w("O<aB<aF>>"),x:w("O<a_>"),E:w("O<ai<n>>"),b:w("O<ai<H>>"),U:w("O<ai<F?>>"),B:w("O<a9<n,aF>>"),g:w("O<r>"),F:w("O<u1>"),v:w("O<fZ>"),eZ:w("O<+(n,n)>"),fT:w("O<+(H,v)>"),I:w("O<+(F,n)>"),u:w("O<+(F,F)>"),r:w("O<+(n,n,a_)>"),e:w("O<+(n,H,H,F)>"),o:w("O<+(n,F,n,F)>"),d:w("O<+(n,n,H,H,a9<n,H>)>"),_:w("O<vq>"),fQ:w("O<abG>"),s:w("O<n>"),cF:w("O<au>"),X:w("O<Gi>"),p:w("O<v>"),bL:w("O<acN>"),fH:w("O<lr>"),a_:w("O<ad0>"),cB:w("O<nQ>"),ba:w("O<adh>"),eW:w("O<D7>"),fY:w("O<a_I>"),ac:w("O<afe>"),cd:w("O<Di>"),fr:w("O<ag8>"),e4:w("O<a1W>"),au:w("O<aKz>"),f7:w("O<R>"),n:w("O<H>"),t:w("O<F>"),dS:w("O<aC?>"),fs:w("O<u1?>"),bN:w("O<F?>"),gJ:w("cx<aki>"),A:w("cx<ah<af>>"),bF:w("ai<u>"),gl:w("ai<V>"),ew:w("ai<aF>"),j:w("ai<@>"),P:w("a9<n,@>"),f:w("a9<@,@>"),bd:w("N<ei,n>"),fR:w("N<+(H,v),v>"),w:w("iy"),gA:w("zR"),gD:w("wq"),k:w("cu"),K:w("aF"),Y:w("u1"),C:w("ei"),N:w("n"),bO:w("au"),a:w("bq<H>"),W:w("bf<n>"),bz:w("bf<F?>"),dg:w("ec<rg>"),m:w("bcU"),a2:w("D3"),f3:w("rg"),es:w("GJ"),q:w("md"),y:w("R"),i:w("H"),z:w("@"),S:w("F"),L:w("ai<@>?"),cK:w("aF?"),T:w("n?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b3S=new B.d7(0,0.1)
D.b5N=new C.aUJ(0,0,0)
D.Mc=new C.aUJ(0,0.5,0)
D.b6n=new B.ay(A.bc,1,A.r,-1)
D.b7W=new B.aY(16,1/0,16,1/0)
D.b85=new B.aY(0,1/0,0,210)
D.bpV=new B.u(1,0.10588235294117647,0.12549019607843137,0.18823529411764706,A.q)
D.dyN=w([D.bpV,Aq.ajP],x.O)
D.eEs=new B.bS(A.Bs,1.1,A.x,null,0,D.dyN,null,null)
D.b8d=new B.o(null,null,null,null,null,D.eEs,A.n)
D.b99=new B.o(A.bi,null,null,null,null,null,A.a6)
D.fuS=new B.G(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h7B=new B.B("\u26a1",null,D.fuS,null,null,null,null,null,null,null,null,null)
D.bdU=new B.cj(A.z,null,null,D.h7B,null)
D.aXh=new B.G(!0,A.bV,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fY3=new B.B("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aXh,null,A.K,null,null,null,null,null,null,null)
D.ewD=new B.D(A.nK,D.fY3,null)
D.be3=new B.cj(A.z,null,null,D.ewD,null)
D.fNP=new B.B("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aXh,null,A.K,null,null,null,null,null,null,null)
D.exv=new B.D(A.Hf,D.fNP,null)
D.beM=new B.cj(A.z,null,null,D.exv,null)
D.agy=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.biB=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.biS=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bk7=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.bke=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.bkB=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.bmA=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.bnF=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.boo=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.aiX=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.bpq=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.ajl=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.ZY=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.brm=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.brE=new B.u(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.q)
D.ajT=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.bto=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.btw=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bu1=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.wp=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.bwc=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.alm=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.bC_=new B.bd(11e6)
D.bDT=new B.Q(10,6,10,2)
D.bDV=new B.Q(10,8,0,10)
D.bEy=new B.Q(12,8,6,10)
D.bEB=new B.Q(12,8,8,8)
D.bEI=new B.Q(14,0,14,22)
D.bEK=new B.Q(14,0,14,30)
D.bFO=new B.Q(16,4,16,28)
D.bG6=new B.Q(18,10,18,16)
D.bIW=new B.Q(4,4,8,2)
D.bJz=new B.Q(8,14,8,12)
D.bJK=new B.Q(8,6,8,8)
D.bK5=new B.Q(0,0,1.5,0)
D.b5z=new B.HY(26,"saturation")
D.bKo=new B.uR(A.cC,D.b5z,null,A.YK)
D.bKp=new B.fT(A.G,11)
D.bKt=new B.fT(A.G,30)
D.fMQ=new B.B("REACTION LAB",null,T.aXV,null,null,null,null,A.a2,null,1,null,null)
D.bKC=new B.by(1,A.ba,D.fMQ,null)
D.fQY=new B.B("\ud83d\udce2 NGMY Ads",null,A.rh,null,null,null,null,A.eS,null,1,null,null)
D.bLA=new B.by(1,A.ba,D.fQY,null)
D.fLw=new B.B("Wire selected",null,A.h6,null,null,null,null,null,null,null,null,null)
D.bLO=new B.by(1,A.ba,D.fLw,null)
D.aql=new B.a_(62712,"MaterialIcons",!1)
D.bS_=new B.a_(62908,"MaterialIcons",!1)
D.bTI=new B.a_(983122,"MaterialIcons",!1)
D.bTX=new B.a_(983247,"MaterialIcons",!1)
D.bUb=new B.a_(983443,"MaterialIcons",!1)
D.bUu=new B.a_(983616,"MaterialIcons",!1)
D.bTH=new B.a_(983117,"MaterialIcons",!1)
D.bYa=new B.ae(D.bTH,28,A.c,null,null,null)
D.bYr=new B.ae(A.jb,18,null,null,null,null)
D.c_D=new B.ae(A.nN,null,A.ab,null,null,null)
D.c_N=new B.ae(A.a4a,21,A.ab,null,null,null)
D.c0E=new B.ae(A.eK,17,A.ab,null,null,null)
D.c3u=new B.ae(A.jb,21,A.ab,null,null,null)
D.c40=new B.ae(A.ej,20,A.bX,null,null,null)
D.c56=new B.ae(A.e9,null,A.aQ,null,null,null)
D.dwq=w([A.dh,A.d9,A.dh],x.O)
D.c8u=new B.a7(A.a5,A.a9,A.x,D.dwq,null,null)
D.d7w=w([A.bO,A.bj],x.O)
D.c8C=new B.a7(A.aZ,A.b4,A.x,D.d7w,null,null)
D.c8Q=new B.a7(A.aZ,A.b4,A.x,A.a6P,null,null)
D.au4=new B.a7(A.aZ,A.b4,A.x,Q.a5Z,null,null)
D.d53=w([A.pg,A.iw],x.O)
D.c9E=new B.a7(A.aZ,A.b4,A.x,D.d53,null,null)
D.d7f=w([A.cQ,A.av],x.O)
D.auc=new B.a7(A.aZ,A.b4,A.x,D.d7f,null,null)
D.dq0=w([A.d_,A.iO,A.bj],x.O)
D.c9X=new B.a7(A.a5,A.a9,A.x,D.dq0,null,null)
D.dq6=w([A.cy,A.ct],x.O)
D.cah=new B.a7(A.aZ,A.b4,A.x,D.dq6,null,null)
D.aEd=w([A.cQ,M.mX],x.O)
D.cay=new B.a7(A.aZ,A.b4,A.x,D.aEd,null,null)
D.caQ=new B.a7(A.aZ,A.b4,A.x,S.auy,null,null)
D.cbG=new B.a7(A.ay,A.aC,A.x,A.Sf,null,null)
D.dhf=w([A.av,A.w],x.O)
D.cbR=new B.a7(A.aZ,A.b4,A.x,D.dhf,null,null)
D.cbU=new B.a7(A.aZ,A.b4,A.x,H.aDu,null,null)
D.btW=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.buQ=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cQV=w([A.NE,D.btW,D.buQ],x.O)
D.cc3=new B.a7(A.aZ,A.b4,A.x,D.cQV,null,null)
D.cEe=w([A.d6,A.iL],x.O)
D.cch=new B.a7(A.aZ,A.b4,A.x,D.cEe,null,null)
D.bxA=new B.u(1,0.07058823529411765,0.0784313725490196,0.10196078431372549,A.q)
D.cF_=w([F.agH,D.bxA],x.O)
D.ccu=new B.a7(A.aZ,A.b4,A.x,D.cF_,null,null)
D.cd3=w([0,4,7],x.t)
D.cd4=w([0,4,7,12],x.t)
D.cd5=w([0,4,7,4],x.t)
D.aDb=w([A.h8,A.rP],x.O)
D.aCH=w([A.fJ,A.cW],x.O)
D.aB_=w([A.bh,A.dR],x.O)
D.cZE=w([A.aQ,A.d6],x.O)
D.dro=w([A.c4,A.lF],x.O)
D.aAq=w([A.cO,A.k1],x.O)
D.d3Q=w([A.bP,A.aL],x.O)
D.cdt=w([D.aDb,D.aCH,A.a63,D.aB_,D.cZE,A.aBf,A.aCb,D.dro,D.aAq,D.d3Q],B.at("O<ai<u>>"))
D.cia=w([120,220,380],x.t)
D.clV=w([12,16,19,24],x.t)
D.cm4=w([1400,800,450,2400],x.t)
D.cuw=w([250,450,900,1500],x.t)
D.bhV=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.bum=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.bs4=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.by9=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.br9=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.azG=w([D.bhV,D.bum,D.bs4,D.by9,D.br9],x.O)
D.cLN=w([50,25,75],x.t)
D.cRt=w([0,5,10,15,18,20,25],x.t)
D.cZY=w([900,500,250,1600],x.t)
D.d37=w([A.bh,A.bE,A.b9,A.bh],x.O)
D.a5U=w([A.aA,A.bt,A.bi,A.aG,A.oq],x.O)
D.d4G=w([A.av,A.aA,A.cO,A.bt,A.bi,A.cG,A.ci,A.bE,A.Z2],x.O)
D.a5X=w([0.04,0.17,0.3],x.n)
D.fed=new C.vq("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.fej=new C.vq("Medium engine","A good all-rounder.",0.3,0.9)
D.fei=new C.vq("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.IK=w([D.fed,D.fej,D.fei],x._)
D.eKq=new B.y(6,"Easy")
D.eLc=new B.y(8,"Medium")
D.eG1=new B.y(10,"Hard")
D.d6h=w([D.eKq,D.eLc,D.eG1],x.I)
D.aBo=w([0.55,0.78,1],x.n)
D.aBz=w([A.c,A.fZ,A.pi,A.av],x.O)
D.aBH=w([A.bi,A.aA,A.bt,A.d9],x.O)
D.fea=new C.vq("Radar","Shows your height above the ground.",0.1,0)
D.feb=new C.vq("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.fe8=new C.vq("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aBP=w([D.fea,D.feb,D.fe8],x._)
D.dcB=w([47,100,220,470,1000],x.n)
D.JQ={volts:0}
D.a7P=new B.bs(D.JQ,[3],x.J)
D.Kf=new B.dY(["b","battery",0.2,0.3,D.a7P])
D.eqr={on:0}
D.dHt=new B.bs(D.eqr,[1],x.J)
D.ES=new B.dY(["s","switch",0.5,0.3,D.dHt])
D.fbS=new B.dY(["l","bulb",0.8,0.3,A.jw])
D.d7F=w([D.Kf,D.ES,D.fbS],x.d)
D.EQ=new B.ca(["b",0,"s",0])
D.faR=new B.ca(["s",1,"l",0])
D.aSO=new B.ca(["l",1,"b",1])
D.dqc=w([D.EQ,D.faR,D.aSO],x.o)
D.d75=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.eF9=new C.n1("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.d7F,D.dqc,D.d75)
D.aMC={ohms:0}
D.aKc=new B.bs(D.aMC,[220],x.J)
D.fbk=new B.dY(["r","resistor",0.5,0.3,D.aKc])
D.fc6=new B.dY(["d","led",0.8,0.3,A.jw])
D.dtu=w([D.Kf,D.fbk,D.fc6],x.d)
D.fa5=new B.ca(["b",0,"r",0])
D.faL=new B.ca(["r",1,"d",0])
D.fac=new B.ca(["d",1,"b",1])
D.dD9=w([D.fa5,D.faL,D.fac],x.o)
D.dtY=w(["led","diode","indicator"],x.s)
D.eFg=new C.n1("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dtu,D.dD9,D.dtY)
D.a9g={level:0}
D.dGQ=new B.bs(D.a9g,[0.2],x.J)
D.fbq=new B.dY(["p","pot",0.5,0.3,D.dGQ])
D.fbs=new B.dY(["m","motor",0.8,0.3,A.jw])
D.d8_=w([D.Kf,D.fbq,D.fbs],x.d)
D.fa4=new B.ca(["b",0,"p",0])
D.faG=new B.ca(["p",1,"m",0])
D.faC=new B.ca(["m",1,"b",1])
D.dyw=w([D.fa4,D.faG,D.faC],x.o)
D.dpT=w(["fan","motor","spin","dimmer"],x.s)
D.eF7=new C.n1("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.d8_,D.dyw,D.dpT)
D.a7M=new B.bs(D.a9g,[0.9],x.J)
D.aSX=new B.dY(["s","solar",0.25,0.3,D.a7M])
D.aSW=new B.dY(["l","bulb",0.75,0.3,A.jw])
D.daV=w([D.aSX,D.aSW],x.d)
D.faO=new B.ca(["s",0,"l",0])
D.faz=new B.ca(["l",1,"s",1])
D.d8P=w([D.faO,D.faz],x.o)
D.dzh=w(["solar","sun","without battery","no battery","free"],x.s)
D.eFa=new C.n1("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.daV,D.d8P,D.dzh)
D.fc9=new B.dY(["c","crank",0.25,0.3,D.a7M])
D.do3=w([D.fc9,D.aSW],x.d)
D.fa8=new B.ca(["c",0,"l",0])
D.fay=new B.ca(["l",1,"c",1])
D.doH=w([D.fa8,D.fay],x.o)
D.dod=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.eF6=new C.n1("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.do3,D.doH,D.dod)
D.dGP=new B.bs(D.a9g,[0.7],x.J)
D.fbv=new B.dY(["t","turbine",0.25,0.3,D.dGP])
D.fbi=new B.dY(["m","motor",0.75,0.3,A.jw])
D.dhY=w([D.fbv,D.fbi],x.d)
D.faZ=new B.ca(["t",0,"m",0])
D.faD=new B.ca(["m",1,"t",1])
D.dgV=w([D.faZ,D.faD],x.o)
D.dmL=w(["wind","turbine","windmill","water","hydro"],x.s)
D.eF3=new C.n1("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.dhY,D.dgV,D.dmL)
D.aK9=new B.bs(D.JQ,[9],x.J)
D.aan=new B.dY(["b","battery",0.2,0.3,D.aK9])
D.aSU=new B.dY(["r","radio",0.8,0.3,A.jw])
D.dzT=w([D.aan,D.ES,D.aSU],x.d)
D.faT=new B.ca(["s",1,"r",0])
D.aSQ=new B.ca(["r",1,"b",1])
D.ccK=w([D.EQ,D.faT,D.aSQ],x.o)
D.dyh=w(["radio","music","listen"],x.s)
D.eFf=new C.n1("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dzT,D.ccK,D.dyh)
D.dHT=new B.bs(D.JQ,[12],x.J)
D.aST=new B.dY(["b","battery",0.2,0.3,D.dHT])
D.fbT=new B.dY(["t","tv",0.8,0.3,A.jw])
D.d7H=w([D.aST,D.ES,D.fbT],x.d)
D.faU=new B.ca(["s",1,"t",0])
D.aSR=new B.ca(["t",1,"b",1])
D.drr=w([D.EQ,D.faU,D.aSR],x.o)
D.dzR=w(["tv","television","screen","watch"],x.s)
D.eF0=new C.n1("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.d7H,D.drr,D.dzR)
D.fbJ=new B.dY(["z","buzzer",0.8,0.3,A.jw])
D.cO9=w([D.Kf,D.ES,D.fbJ],x.d)
D.faV=new B.ca(["s",1,"z",0])
D.fbc=new B.ca(["z",1,"b",1])
D.d2h=w([D.EQ,D.faV,D.fbc],x.o)
D.dww=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.eFc=new C.n1("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cO9,D.d2h,D.dww)
D.fbr=new B.dY(["h","heater",0.8,0.3,A.jw])
D.dln=w([D.aan,D.ES,D.fbr],x.d)
D.faQ=new B.ca(["s",1,"h",0])
D.fal=new B.ca(["h",1,"b",1])
D.d32=w([D.EQ,D.faQ,D.fal],x.o)
D.cxO=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.eF1=new C.n1("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.dln,D.d32,D.cxO)
D.fbV=new B.dY(["s","solar",0.2,0.25,D.a7M])
D.dHX=new B.bs(D.aMC,[100],x.J)
D.fbY=new B.dY(["r","resistor",0.55,0.25,D.dHX])
D.fc4=new B.dY(["c","capacitor",0.85,0.25,A.jw])
D.fbn=new B.dY(["q","resistor",0.55,0.6,D.aKc])
D.fbW=new B.dY(["d","led",0.85,0.6,A.jw])
D.dqV=w([D.fbV,D.fbY,D.fc4,D.fbn,D.fbW],x.d)
D.faP=new B.ca(["s",0,"r",0])
D.faK=new B.ca(["r",1,"c",0])
D.faa=new B.ca(["c",1,"s",1])
D.fa9=new B.ca(["c",0,"q",0])
D.faJ=new B.ca(["q",1,"d",0])
D.fad=new B.ca(["d",1,"c",1])
D.deJ=w([D.faP,D.faK,D.faa,D.fa9,D.faJ,D.fad],x.o)
D.dnl=w(["capacitor","store","charge","flash"],x.s)
D.eFe=new C.n1("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.dqV,D.deJ,D.dnl)
D.fby=new B.dY(["b","battery",0.15,0.3,D.a7P])
D.fca=new B.dY(["l1","bulb",0.5,0.3,A.jw])
D.fbG=new B.dY(["l2","bulb",0.85,0.3,A.jw])
D.d5H=w([D.fby,D.fca,D.fbG],x.d)
D.fa3=new B.ca(["b",0,"l1",0])
D.fav=new B.ca(["l1",1,"l2",0])
D.faw=new B.ca(["l2",1,"b",1])
D.diL=w([D.fa3,D.fav,D.faw],x.o)
D.dzB=w(["series","two bulbs","dim"],x.s)
D.eF4=new C.n1("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.d5H,D.diL,D.dzB)
D.eqM={volts:0,charge:1}
D.dI_=new B.bs(D.eqM,[1.5,0],x.J)
D.fc2=new B.dY(["b","battery",0.75,0.3,D.dI_])
D.d54=w([D.aSX,D.fc2],x.d)
D.faN=new B.ca(["s",0,"b",0])
D.fa7=new B.ca(["b",1,"s",1])
D.df2=w([D.faN,D.fa7],x.o)
D.dnv=w(["charge","rechargeable","flat","recharge"],x.s)
D.eF2=new C.n1("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.d54,D.df2,D.dnv)
D.dHS=new B.bs(D.JQ,[4.5],x.J)
D.fbt=new B.dY(["b","battery",0.2,0.3,D.dHS])
D.aSS=new B.dY(["p","phone",0.8,0.3,A.jw])
D.dhN=w([D.fbt,D.ES,D.aSS],x.d)
D.faS=new B.ca(["s",1,"p",0])
D.aam=new B.ca(["p",1,"b",1])
D.dvn=w([D.EQ,D.faS,D.aam],x.o)
D.dwY=w(["phone","charger","usb","mobile"],x.s)
D.eF8=new C.n1("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.dhN,D.dvn,D.dwY)
D.fbf=new B.dY(["f","fan",0.8,0.3,A.jw])
D.cpV=w([D.Kf,D.fbf],x.d)
D.fa2=new B.ca(["b",0,"f",0])
D.faj=new B.ca(["f",1,"b",1])
D.d3C=w([D.fa2,D.faj],x.o)
D.dpS=w(["fan","cool","air","wind"],x.s)
D.eFh=new C.n1("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.cpV,D.d3C,D.dpS)
D.fbN=new B.dY(["b","battery",0.15,0.2,D.a7P])
D.fbg=new B.dY(["a","ammeter",0.5,0.2,A.jw])
D.fbe=new B.dY(["l","bulb",0.85,0.2,A.jw])
D.fbP=new B.dY(["v","voltmeter",0.5,0.6,A.jw])
D.dnT=w([D.fbN,D.fbg,D.fbe,D.fbP],x.d)
D.fa0=new B.ca(["b",0,"a",0])
D.fa_=new B.ca(["a",1,"l",0])
D.fb0=new B.ca(["v",0,"l",0])
D.fb1=new B.ca(["v",1,"l",1])
D.deU=w([D.fa0,D.fa_,D.aSO,D.fb0,D.fb1],x.o)
D.dD8=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.eFd=new C.n1("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.dnT,D.deU,D.dD8)
D.fcd=new B.dY(["b","battery",0.15,0.2,D.aK9])
D.fbx=new B.dY(["t","tv",0.55,0.2,A.jw])
D.aKa=new B.bs(D.JQ,[5],x.J)
D.fbl=new B.dY(["c","buck",0.4,0.5,D.aKa])
D.fbz=new B.dY(["p","phone",0.8,0.5,A.jw])
D.dcn=w([D.fcd,D.fbx,D.fbl,D.fbz],x.d)
D.fa6=new B.ca(["b",0,"t",0])
D.aSM=new B.ca(["b",0,"c",0])
D.aSN=new B.ca(["c",1,"p",0])
D.dhK=w([D.fa6,D.aSR,D.aSM,D.aSN,D.aam],x.o)
D.dat=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.eF5=new C.n1("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.dcn,D.dhK,D.dat)
D.fbm=new B.dY(["c","buck",0.5,0.3,D.aKa])
D.d2R=w([D.aST,D.fbm,D.aSS],x.d)
D.d8a=w([D.aSM,D.aSN,D.aam],x.o)
D.cBj=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.eF_=new C.n1("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.d2R,D.d8a,D.cBj)
D.fbE=new B.dY(["d","diode",0.5,0.3,A.jw])
D.dj_=w([D.aan,D.fbE,D.aSU],x.d)
D.fa1=new B.ca(["b",0,"d",0])
D.fae=new B.ca(["d",1,"r",0])
D.cQI=w([D.fa1,D.fae,D.aSQ],x.o)
D.da8=w(["diode","protect","backwards","one way"],x.s)
D.eFb=new C.n1("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.dj_,D.cQI,D.da8)
D.St=w([D.eF9,D.eFg,D.eF7,D.eFa,D.eF6,D.eF3,D.eFf,D.eF0,D.eFc,D.eF1,D.eFe,D.eF4,D.eF2,D.eF8,D.eFh,D.eFd,D.eF5,D.eF_,D.eFb],B.at("O<n1>"))
D.hKi=new C.GY("Moon",1.62,A.d_,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hKg=new C.GY("Mars",3.71,A.aA,"Mars has about 38 percent of Earth's gravity.")
D.hKj=new C.GY("Mercury",3.7,A.kx,"Mercury is small, so its gravity is like Mars.")
D.hKd=new C.GY("Venus",8.87,A.aQ,"Venus is almost as heavy as Earth, with strong gravity.")
D.hKf=new C.GY("Earth",9.81,A.aG,"On Earth gravity is strong, and the air also slows you down.")
D.hKh=new C.GY("Neptune",11.15,A.d9,"Neptune pulls a little harder than Earth.")
D.hKe=new C.GY("Jupiter",24.79,A.cO,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.tt=w([D.hKi,D.hKg,D.hKj,D.hKd,D.hKf,D.hKh,D.hKe],B.at("O<GY>"))
D.deH=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.dfs=w([0.2,0.5,0.8],x.n)
D.b2A=new C.Ll(0,"accordion")
D.d3Y=w([A.jM,A.zF,A.zq],x.x)
D.dbN=w(["Mail","SMS","Ad"],x.s)
D.d4y=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hIs=new C.B6(D.b2A,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aDb,D.d3Y,D.dbN,D.d4y)
D.aeb=new C.Ll(1,"flip")
D.dnf=w([A.qU,A.Dy,A.tn],x.x)
D.dht=w(["Unlock","Verify","Secure"],x.s)
D.d2M=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hIr=new C.B6(D.aeb,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.aCH,D.dnf,D.dht,D.d2M)
D.b2B=new C.Ll(2,"towers")
D.dgd=w([A.zD,A.pD,A.ii],x.x)
D.dfL=w(["Save","Grow","Earn"],x.s)
D.cRD=w(["","",""],x.s)
D.hIt=new C.B6(D.b2B,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a63,D.dgd,D.dfL,D.cRD)
D.aec=new C.Ll(3,"assemble")
D.doh=w([A.oO,A.ho,A.e9],x.x)
D.db7=w(["Launch","Charge","Shine"],x.s)
D.dkp=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hIv=new C.B6(D.aec,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.aB_,D.doh,D.db7,D.dkp)
D.b2C=new C.Ll(4,"carousel")
D.do4=w([A.b9,A.fn],x.O)
D.dbW=w([A.n5,A.aqJ,A.Qb],x.x)
D.d67=w(["Explore","Discover","Learn"],x.s)
D.dhT=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hIq=new C.B6(D.b2C,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.do4,D.dbW,D.d67,D.dhT)
D.b2D=new C.Ll(5,"burst")
D.dfG=w([A.hK,A.uq],x.O)
D.d4s=w([A.kc,A.mk,A.hC],x.x)
D.d4Q=w(["Cheer","Win","Love"],x.s)
D.d7d=w(["Make some noise","First place","Share the joy"],x.s)
D.hIu=new C.B6(D.b2D,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.dfG,D.d4s,D.d4Q,D.d7d)
D.aCm=w([D.hIs,D.hIr,D.hIt,D.hIv,D.hIq,D.hIu],B.at("O<B6>"))
D.f6W=new B.b3("skin","Skin",A.aqK)
D.f8C=new B.b3("muscle","Muscles",A.PO)
D.f8f=new B.b3("organ","Organs",A.hC)
D.bRG=new B.a_(62747,"MaterialIcons",!1)
D.f8o=new B.b3("bone","Skeleton",D.bRG)
D.f8K=new B.b3("vessel","Blood vessels",A.pH)
D.dgj=w([D.f6W,D.f8C,D.f8f,D.f8o,D.f8K],x.r)
D.fec=new C.vq("Simple legs","Light. Land gently.",0.15,0.2)
D.fee=new C.vq("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.feh=new C.vq("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.DT=w([D.fec,D.fee,D.feh],x._)
D.f9A=new B.ca(["beat",0.18,0.28,0])
D.faW=new B.ca(["burst",0.7,0.2,0])
D.fb6=new B.ca(["delay",0.45,0.5,1])
D.faF=new B.ca(["ripple",0.75,0.6,3])
D.daQ=w([D.f9A,D.faW,D.fb6,D.faF],x.e)
D.dmy=w([P.l8,Q.Ke,F.V1],x.u)
D.hHh=new C.GJ("First spark","A clock lights a burst and a ripple",D.daQ,D.dmy)
D.fai=new B.ca(["beat",0.15,0.3,1])
D.f9d=new B.ca(["ripple",0.62,0.15,0])
D.fb2=new B.ca(["delay",0.4,0.45,0])
D.f9W=new B.ca(["ripple",0.7,0.45,0])
D.f9v=new B.ca(["delay",0.4,0.7,1])
D.faH=new B.ca(["shake",0.75,0.75,0])
D.dAP=w([D.fai,D.f9d,D.fb2,D.f9W,D.f9v,D.faH],x.e)
D.eH9=new B.y(2,4)
D.aSt=new B.y(4,5)
D.dew=w([P.l8,Q.Ke,F.V1,D.eH9,D.aSt],x.u)
D.hHj=new C.GJ("Heartbeat","Two thumps, then a shake",D.dAP,D.dew)
D.f9G=new B.ca(["dice",0.15,0.7,1])
D.fb8=new B.ca(["echo",0.4,0.7,0])
D.f9S=new B.ca(["comet",0.7,0.5,4])
D.faX=new B.ca(["burst",0.72,0.2,1])
D.faf=new B.ca(["burst",0.3,0.25,0])
D.f9H=new B.ca(["pop",0.55,0.85,0])
D.cxl=w([D.f9G,D.fb8,D.f9S,D.faX,D.faf,D.f9H],x.e)
D.eGt=new B.y(1,3)
D.eGu=new B.y(1,4)
D.aSp=new B.y(0,5)
D.do_=w([P.l8,R.vJ,D.eGt,D.eGu,D.aSp],x.u)
D.hHi=new C.GJ("Fireworks","Dice launch comets that burst in colour",D.cxl,D.do_)
D.f9O=new B.ca(["beat",0.15,0.2,2])
D.fas=new B.ca(["chance",0.4,0.2,0])
D.f9D=new B.ca(["ball",0.7,0.12,3])
D.f9o=new B.ca(["chance",0.4,0.5,1])
D.fb7=new B.ca(["ball",0.3,0.08,1])
D.f9h=new B.ca(["ripple",0.7,0.55,3])
D.cqn=w([D.f9O,D.fas,D.f9D,D.f9o,D.fb7,D.f9h],x.e)
D.eHa=new B.y(2,5)
D.cNU=w([P.l8,R.vJ,Q.aae,F.V2,D.eHa],x.u)
D.hHg=new C.GJ("Rain","Balls fall at random and splash",D.cqn,D.cNU)
D.fat=new B.ca(["beat",0.12,0.45,2])
D.faY=new B.ca(["toggle",0.38,0.2,0])
D.fb4=new B.ca(["wash",0.7,0.15,4])
D.f9F=new B.ca(["count3",0.38,0.45,0])
D.fb_=new B.ca(["burst",0.72,0.4,0])
D.fag=new B.ca(["light",0.55,0.7,1])
D.f9p=new B.ca(["pop",0.8,0.8,4])
D.dqT=w([D.fat,D.faY,D.fb4,D.f9F,D.fb_,D.fag,D.f9p],x.e)
D.eHH=new B.y(3,6)
D.ctw=w([P.l8,R.vJ,Q.aae,F.V2,D.aSp,D.eHH],x.u)
D.hHe=new C.GJ("Disco","A beat drives lights, washes and bursts",D.dqT,D.ctw)
D.fbb=new B.ca(["button",0.12,0.2,0])
D.f9j=new B.ca(["delay",0.34,0.2,1])
D.fba=new B.ca(["light",0.56,0.2,1])
D.fb3=new B.ca(["delay",0.56,0.45,1])
D.fau=new B.ca(["ball",0.34,0.6,0])
D.f9n=new B.ca(["delay",0.34,0.8,1])
D.f9c=new B.ca(["burst",0.7,0.8,5])
D.cdw=w([D.fbb,D.f9j,D.fba,D.fb3,D.fau,D.f9n,D.f9c],x.e)
D.eJW=new B.y(5,6)
D.dwG=w([P.l8,R.vJ,F.V1,F.V2,D.aSt,D.eJW],x.u)
D.hHf=new C.GJ("Domino","Tap the button and watch it run down the line",D.cdw,D.dwG)
D.aCL=w([D.hHh,D.hHj,D.hHi,D.hHg,D.hHe,D.hHf],B.at("O<GJ>"))
D.dlP=w([0.05,0.15,0.25],x.n)
D.dmK=w([1.5,3,4.5,9,12],x.n)
D.f5e=new B.b3("dice","Dice",A.nL)
D.f6t=new B.b3("coin","Coin",U.zx)
D.f8F=new B.b3("num","Number",A.x0)
D.dmY=w([D.f5e,D.f6t,D.f8F],x.r)
D.dn1=w(["skin","muscle","organ","bone","vessel"],x.s)
D.aCR=w([A.bX,A.aQ,A.bc,A.aG,A.bh,A.c4,A.cO,A.fJ],x.O)
D.do5=w([A.c4,A.aG,A.ex,A.bc],x.O)
D.dp9=w([],x.h)
D.eyh=new C.ei("battery","Battery","\ud83d\udd0b",A.bc,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.eyn=new C.ei("solar","Solar panel","\u2600\ufe0f",A.bt,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.ez1=new C.ei("crank","Hand crank","\ud83d\udd04",A.cO,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.eyE=new C.ei("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aG,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.ey9=new C.ei("buck","Step-down converter","\ud83d\udd3d",A.fJ,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.eyC=new C.ei("regulator","5 V regulator","\ud83e\uddca",A.bP,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.ez6=new C.ei("diode","Diode","\u27a1\ufe0f",A.aQ,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.eyO=new C.ei("ldr","Light sensor","\ud83c\udf1e",A.ex,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.eys=new C.ei("switch","Switch","\ud83c\udf9a\ufe0f",A.bh,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.ez3=new C.ei("fuse","Fuse","\ud83e\uddef",A.bX,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.ey1=new C.ei("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.fJ,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.eyP=new C.ei("resistor","Resistor","\u3030\ufe0f",A.aQ,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.eyR=new C.ei("bulb","Light bulb","\ud83d\udca1",A.ex,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.eyp=new C.ei("led","LED","\ud83d\udd34",A.aA,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.eyt=new C.ei("motor","Motor","\u2699\ufe0f",A.bP,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.eyL=new C.ei("buzzer","Buzzer","\ud83d\udd14",A.c4,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.eyi=new C.ei("heater","Heater","\ud83d\udd25",A.cO,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.eyG=new C.ei("capacitor","Capacitor","\ud83e\udeab",A.cs,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.eyy=new C.ei("radio","Radio","\ud83d\udcfb",A.oq,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.eyv=new C.ei("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b9,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.ey8=new C.ei("voltmeter","Voltmeter","\ud83e\udded",A.bv,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.eyf=new C.ei("ammeter","Ammeter","\ud83d\udcdf",A.aQ,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.eyl=new C.ei("fan","Fan","\ud83c\udf00",A.aG,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.ez8=new C.ei("speaker","Speaker","\ud83d\udd0a",A.c4,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.eyY=new C.ei("clock","Digital clock","\u23f0",A.bc,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.eyB=new C.ei("calculator","Calculator","\ud83e\uddee",A.MF,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.eye=new C.ei("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cs,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.ez7=new C.ei("router","WiFi router","\ud83d\udcf6",A.fJ,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.eza=new C.ei("siren","Siren","\ud83d\udea8",A.aA,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.ey4=new C.ei("toycar","Toy car","\ud83d\ude97",A.cO,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.ezb=new C.ei("kettle","Kettle","\ud83e\uded6",A.mV,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.eyc=new C.ei("lamp","Desk lamp","\ud83e\ude94",A.ex,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.eyo=new C.ei("lights","Party lights","\ud83c\udf84",A.oq,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.eyz=new C.ei("fridge","Fridge","\ud83e\uddca",A.h9,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.ey6=new C.ei("washer","Washing machine","\ud83e\udee7",A.cs,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.eyZ=new C.ei("blender","Blender","\ud83e\udd64",A.bX,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.eyw=new C.ei("drone","Drone","\ud83d\ude81",A.bP,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.eyb=new C.ei("drill","Power drill","\ud83d\udd29",A.aQ,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.eyA=new C.ei("torch","Torch","\ud83d\udd26",A.bL,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.eyW=new C.ei("neon","Neon sign","\ud83e\udea7",A.c4,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.ey7=new C.ei("microwave","Microwave","\ud83c\udf72",A.cO,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.eyQ=new C.ei("doorbell","Doorbell","\ud83d\udd14",A.bt,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.eyk=new C.ei("camera","Security camera","\ud83d\udcf7",A.an,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.eyK=new C.ei("console","Game console","\ud83c\udfae",A.bh,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.ez0=new C.ei("heartmon","Heart monitor","\ud83e\ude7a",A.hv,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.ey5=new C.ei("aquarium","Aquarium","\ud83d\udc20",A.b9,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.eyF=new C.ei("lighthouse","Lighthouse","\ud83d\uddfc",A.ex,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.eyN=new C.ei("discoball","Disco ball","\ud83e\udea9",A.oq,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.ez5=new C.ei("robot","Robot","\ud83e\udd16",A.aG,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.ey3=new C.ei("toaster","Toaster","\ud83c\udf5e",A.e2,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.ez9=new C.ei("ledstrip","LED strip","\ud83c\udf08",A.c4,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.eyV=new C.ei("pump","Water pump","\ud83d\udeb0",A.aG,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.eyH=new C.ei("hairdryer","Hair dryer","\ud83d\udca8",A.hK,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.eyT=new C.ei("headphones","Headphones","\ud83c\udfa7",A.bh,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.eyd=new C.ei("smartwatch","Apple Watch Ultra","\u231a",A.bv,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.ez4=new C.ei("tablet","iPad Pro M5","\ud83d\udcf2",A.cs,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.ey0=new C.ei("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hv,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.eyx=new C.ei("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bu,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.eyq=new C.ei("appletv","Apple TV 4K","\ud83d\udcfa",A.bO,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.eyM=new C.ei("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.um,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.ey2=new C.ei("iphonefold","iPhone Fold","\ud83d\udcf1",A.b7,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.eyg=new C.ei("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d9,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.ez2=new C.ei("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cG,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.eyI=new C.ei("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bi,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.eyD=new C.ei("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.c9,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.eyU=new C.ei("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.aA,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.eyr=new C.ei("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.bc,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.eyJ=new C.ei("honor","Honor Magic V5","\ud83d\udcf1",A.cs,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.eyS=new C.ei("vivo","vivo X300 Pro","\ud83d\udcf1",A.cO,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.eyX=new C.ei("ereader","Kindle Scribe","\ud83d\udcd6",A.bu,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.ey_=new C.ei("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.ci,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.eyu=new C.ei("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cG,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.eym=new C.ei("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b9,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.eya=new C.ei("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.ex,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.eyj=new C.ei("carscreen","Luxury car touchscreen","\ud83d\ude98",A.aA,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.ez_=new C.ei("vision","Apple Vision Pro","\ud83e\udd7d",A.bh,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.ST=w([D.eyh,D.eyn,D.ez1,D.eyE,D.ey9,D.eyC,D.ez6,D.eyO,D.eys,D.ez3,D.ey1,D.eyP,D.eyR,D.eyp,D.eyt,D.eyL,D.eyi,D.eyG,D.eyy,D.eyv,D.ey8,D.eyf,D.eyl,D.ez8,D.eyY,D.eyB,D.eye,D.ez7,D.eza,D.ey4,D.ezb,D.eyc,D.eyo,D.eyz,D.ey6,D.eyZ,D.eyw,D.eyb,D.eyA,D.eyW,D.ey7,D.eyQ,D.eyk,D.eyK,D.ez0,D.ey5,D.eyF,D.eyN,D.ez5,D.ey3,D.ez9,D.eyV,D.eyH,D.eyT,D.eyd,D.ez4,D.ey0,D.eyx,D.eyq,D.eyM,D.ey2,D.eyg,D.ez2,D.eyI,D.eyD,D.eyU,D.eyr,D.eyJ,D.eyS,D.eyX,D.ey_,D.eyu,D.eym,D.eya,D.eyj,D.ez_],B.at("O<ei>"))
D.dpN=w([5,10,15,25,45,60],x.t)
D.dqa=w([-0.045,0.03,-0.015],x.n)
D.aDj=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.vn=w([0.05,0.2,0.35],x.n)
D.bas=new B.ab(0,A.G,A.hM,A.dL,6)
D.dsV=w([D.bas],x.V)
D.eFC=new B.y(0,"AND")
D.eGw=new B.y(1,"Adder")
D.eHb=new B.y(2,"Blinker")
D.eHI=new B.y(3,"Memory")
D.dtI=w([D.eFC,D.eGw,D.eHb,D.eHI],x.I)
D.aDv=w([-104,0,104],x.n)
D.aDx=w([-14,3],x.n)
D.duG=w([-8,0,8],x.n)
D.aDG=w([-92,0,92],x.n)
D.dv5=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.fe9=new C.vq("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.feg=new C.vq("Medium tank","Balanced.",0.35,1)
D.fef=new C.vq("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.T6=w([D.fe9,D.feg,D.fef],x._)
D.nU=w([0.04,0.2,0.36],x.n)
D.aDS=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.f8e=new B.b3(D.b2A,"Fold",U.arF)
D.f7b=new B.b3(D.aeb,"Flip",A.Dc)
D.bRX=new B.a_(62889,"MaterialIcons",!1)
D.f8B=new B.b3(D.b2B,"Rise",D.bRX)
D.arS=new B.a_(983870,"MaterialIcons",!1)
D.f4z=new B.b3(D.aec,"Assemble",D.arS)
D.f4M=new B.b3(D.b2C,"Spin",D.aql)
D.f4G=new B.b3(D.b2D,"Pop",A.kc)
D.dwD=w([D.f8e,D.f7b,D.f8B,D.f4z,D.f4M,D.f4G],B.at("O<+(Ll,n,a_)>"))
D.aDX=w([A.c4,A.ex,A.bv,A.aG,A.bh,A.bX],x.O)
D.dx3=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dy7=w([3,4.5,5,6,9],x.n)
D.bb7=new B.ab(0,A.G,A.b5,A.J,16)
D.dyA=w([D.bb7],x.V)
D.fWi=new B.B("\ud83e\uddcd",null,R.L4,null,null,null,null,null,null,null,null,null)
D.ccy=new B.IW(5,null,null,A.bw,A.c4,null,null,null,null)
D.flc=new B.a5(150,null,D.ccy,null)
D.fDu=new B.G(!0,A.ab,null,null,null,null,14,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZB=new B.B("Getting the body ready...",null,D.fDu,null,null,null,null,null,null,null,null,null)
D.fWl=new B.B("Real 3D anatomy, kept on your phone",null,Aa.B4,null,null,null,null,null,null,null,null,null)
D.dyD=w([D.fWi,A.aB,D.flc,A.af,D.fZB,A.ax,D.fWl],x.p)
D.dzc=w(["solar","turbine","crank","pot"],x.s)
D.dzF=w([0,0.35,0.75,1],x.n)
D.dB3=w(["volts","level","ohms","on"],x.s)
D.dCx=w([A.jM,A.zF,A.zq,A.qU,A.Dy,A.tn,A.zD,A.pD,A.ii,A.oO,A.ho,A.e9,A.hC,A.i0,A.mk,A.kC,A.va,A.qX,A.lr,A.HI,A.v9,A.Db,A.D9,A.Q8,A.HH,A.Dm,A.PO,A.ar6,H.arO,A.kc],x.x)
D.eoc={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.hzC=new C.yJ("Switch",F.oL,A.bt,0,"Tap it to turn it ON or OFF.")
D.hzy=new C.yJ("Blinker",A.oK,A.bv,0,"Turns itself ON and OFF. Tap to change the speed.")
D.hzz=new C.yJ("AND",D.arS,A.cs,2,"ON only when BOTH inputs are ON.")
D.bTu=new B.a_(63671,"MaterialIcons",!1)
D.hzx=new C.yJ("OR",D.bTu,A.bh,2,"ON when EITHER input is ON.")
D.hzA=new C.yJ("XOR",Ac.a3k,A.c4,2,"ON when the inputs are DIFFERENT.")
D.hzu=new C.yJ("NAND",A.uU,A.aG,2,"OFF only when BOTH inputs are ON.")
D.bSy=new B.a_(63176,"MaterialIcons",!1)
D.hzv=new C.yJ("NOR",D.bSy,A.fJ,2,"ON only when BOTH inputs are OFF.")
D.hzw=new C.yJ("NOT",A0.Dq,A.cO,1,"Flips the signal: ON becomes OFF.")
D.hzB=new C.yJ("Light",A.lp,A.ex,1,"Glows when its input is ON.")
D.hzD=new C.yJ("Buzzer",A.oN,A.bX,1,"Beeps while its input is ON.")
D.Ak=new B.bs(D.eoc,[D.hzC,D.hzy,D.hzz,D.hzx,D.hzA,D.hzu,D.hzv,D.hzw,D.hzB,D.hzD],B.at("bs<n,yJ>"))
D.epY={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22,smartwatch:23}
D.AN=new C.Kj(0,"tv")
D.ffK=new C.m5("Samsung Neo QLED 8K",D.AN,F.yq,A.aG)
D.ffA=new C.m5("LG OLED evo G5",D.AN,A.eo,A.hv)
D.ffr=new C.m5("Sony Bravia 9",D.AN,A.rB,A.bu)
D.ffv=new C.m5("Apple TV 4K",D.AN,A.dY,A.bO)
D.ffs=new C.m5("Bang and Olufsen Beovision",D.AN,F.BS,F.um)
D.aay=new C.Kj(1,"iphone")
D.aTi=new C.m5("iPhone 18 Pro Max",D.aay,D.alm,A.ci)
D.AP=new C.Kj(3,"fold")
D.bxR=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.ffF=new C.m5("iPhone Fold",D.AP,D.bxR,A.b7)
D.AO=new C.Kj(2,"android")
D.ffG=new C.m5("Samsung Galaxy S26 Ultra",D.AO,F.YP,A.d9)
D.bqd=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.ffy=new C.m5("Samsung Galaxy Z Fold7",D.AP,D.bqd,A.cG)
D.ffu=new C.m5("Google Pixel 10 Pro XL",D.AO,A.d_,A.bi)
D.ffC=new C.m5("Xiaomi 16 Ultra",D.AO,A.ic,A.c9)
D.ffx=new C.m5("Huawei Mate 80 Pro Max",D.AO,A.er,A.aA)
D.fft=new C.m5("OPPO Find X9 Ultra",D.AO,A.eb,A.bc)
D.ffM=new C.m5("Honor Magic V5",D.AP,A.dh,A.cs)
D.ffz=new C.m5("vivo X300 Pro",D.AO,A.h_,A.cO)
D.aTj=new C.Kj(4,"tablet")
D.ffE=new C.m5("iPad Pro M5",D.aTj,A.d_,A.aG)
D.aaz=new C.Kj(5,"reader")
D.ffN=new C.m5("Kindle Scribe",D.aaz,A.cQ,A.bu)
D.xr=new C.Kj(6,"computer")
D.ffD=new C.m5("MacBook Pro M5 Max",D.xr,A.d_,A.ci)
D.ffJ=new C.m5("iMac 32 inch",D.xr,A.bO,A.cG)
D.ffB=new C.m5("Pro Display XDR 8K",D.xr,A.ic,A.b9)
D.ffw=new C.m5("Sony Laser Projector",D.xr,A.ct,A.ex)
D.ffH=new C.m5("Luxury car touchscreen",D.xr,M.mX,A.aA)
D.ffL=new C.m5("Apple Vision Pro",D.xr,A.cy,A.bh)
D.ffI=new C.m5("Apple Watch Ultra",D.AP,F.BS,A.bv)
D.mu=new B.bs(D.epY,[D.ffK,D.ffA,D.ffr,D.ffv,D.ffs,D.aTi,D.ffF,D.ffG,D.ffy,D.ffu,D.ffC,D.ffx,D.fft,D.ffM,D.ffz,D.ffE,D.ffN,D.ffD,D.ffJ,D.ffB,D.ffw,D.ffH,D.ffL,D.ffI],B.at("bs<n,m5>"))
D.d3l=w([A.z],x.M)
D.d3J=w([A.ay,A.aC],x.M)
D.ddw=w([A.ay,A.z,A.aC],x.M)
D.df8=w([A.ay,A.lC,A.z,A.lD,A.aC],x.M)
D.dtE=w([A.ay,A.lC,A.a5,A.a9,A.lD,A.aC],x.M)
D.dHi=new B.d_([1,D.d3l,2,D.d3J,3,D.ddw,4,A.aEw,5,D.df8,6,D.dtE],B.at("d_<F,ai<d7>>"))
D.eqK={Calm:0,Box:1,Sleep:2}
D.cLg=w([4,2,6,0],x.n)
D.cLn=w([4,4,4,4],x.n)
D.cLo=w([4,7,8,0],x.n)
D.TA=new B.bs(D.eqK,[D.cLg,D.cLn,D.cLo],B.at("bs<n,ai<H>>"))
D.eop={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.y_=new C.a1J(0,"source")
D.dez=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hFV=new C.qA("Clock",A.oK,D.y_,A.bv,D.dez)
D.hFR=new C.qA("Button",A.Dt,D.y_,A.aQ,A.Z)
D.dyj=w(["random","quick","slow"],x.s)
D.hG1=new C.qA("Dice",A.nL,D.y_,A.c4,D.dyj)
D.bT7=new B.a_(63484,"MaterialIcons",!1)
D.Fw=new C.a1J(1,"logic")
D.dDo=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hFY=new C.qA("Delay",D.bT7,D.Fw,A.cs,D.dDo)
D.dpU=w(["fast","mid","slow"],x.s)
D.hG2=new C.qA("Echo",A.arl,D.Fw,A.bh,D.dpU)
D.hG_=new C.qA("Every 2nd",A0.Dq,D.Fw,A.fJ,A.Z)
D.bSO=new B.a_(63309,"MaterialIcons",!1)
D.hFX=new C.qA("Every 3rd",D.bSO,D.Fw,A.aG,A.Z)
D.ccR=w(["50%","25%","75%"],x.s)
D.hG4=new C.qA("Chance",Al.arU,D.Fw,A.cO,D.ccR)
D.rp=new C.a1J(2,"out")
D.hFT=new C.qA("Light",A.lp,D.rp,A.ex,A.Z)
D.hFU=new C.qA("Burst",A.kc,D.rp,A.c4,A.Z)
D.hFS=new C.qA("Ripple",A.zK,D.rp,A.b9,A.Z)
D.hG0=new C.qA("Ball",A.arx,D.rp,A.cO,A.Z)
D.hFZ=new C.qA("Comet",A.oO,D.rp,A.bh,A.Z)
D.bUB=new B.a_(983669,"MaterialIcons",!1)
D.hG3=new C.qA("Shake",D.bUB,D.rp,A.bX,A.Z)
D.hG5=new C.qA("Pop",A.D7,D.rp,A.bc,A.Z)
D.hFW=new C.qA("Wash",A.PS,D.rp,A.pn,A.Z)
D.n8=new B.bs(D.eop,[D.hFV,D.hFR,D.hG1,D.hFY,D.hG2,D.hG_,D.hFX,D.hG4,D.hFT,D.hFU,D.hFS,D.hG0,D.hFZ,D.hG3,D.hG5,D.hFW],B.at("bs<n,qA>"))
D.eoM={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bAE=new C.fW(20,4,13,!1)
D.bB4=new C.fW(14,5,13.5,!1)
D.bAW=new C.fW(9,2.4,10,!1)
D.bB9=new C.fW(7,5,12.5,!1)
D.bAZ=new C.fW(8,3.5,12,!1)
D.bAA=new C.fW(15,2,6,!1)
D.bB7=new C.fW(45,6,13.5,!0)
D.bAQ=new C.fW(10,8,13.5,!1)
D.bAI=new C.fW(25,3,12,!0)
D.bAO=new C.fW(35,4,12,!0)
D.bAP=new C.fW(40,4.5,9.5,!0)
D.bAR=new C.fW(55,3,9,!0)
D.bAB=new C.fW(18,3,9,!1)
D.bB6=new C.fW(22,4,13.5,!1)
D.bB_=new C.fW(16,5,13.5,!1)
D.bAM=new C.fW(30,4,9,!0)
D.bBi=new C.fW(5,3.5,13,!1)
D.bAU=new C.fW(25,3,13.5,!0)
D.bB2=new C.fW(14,2.5,9,!1)
D.bAT=new C.fW(6,6,13,!1)
D.bBa=new C.fW(30,1.2,5,!0)
D.bBh=new C.fW(35,3,4.5,!0)
D.bBd=new C.fW(20,4.5,7.5,!0)
D.bAS=new C.fW(55,5.5,13.5,!0)
D.bAz=new C.fW(45,5.5,13.5,!0)
D.bB3=new C.fW(40,5.5,13.5,!0)
D.bBg=new C.fW(60,6,13.5,!0)
D.alR=new C.fW(28,4,7,!0)
D.GW=new C.fW(25,4,7,!0)
D.bAL=new C.fW(30,4,7,!0)
D.bAG=new C.fW(22,4,7,!0)
D.bAH=new C.fW(24,4,7,!0)
D.bAV=new C.fW(60,3,5.5,!0)
D.bAC=new C.fW(18,9,14,!0)
D.bAJ=new C.fW(25,9,14,!0)
D.alS=new C.fW(30,8,14,!0)
D.bAF=new C.fW(20,8,14,!0)
D.bAN=new C.fW(30,9,14,!0)
D.bBb=new C.fW(22,5,9.5,!0)
D.bAD=new C.fW(30,2.5,10.5,!0)
D.bB0=new C.fW(50,5.5,13.5,!0)
D.bBf=new C.fW(12,2,9.5,!1)
D.bAY=new C.fW(16,1.3,9.5,!0)
D.bB8=new C.fW(40,2.5,7,!0)
D.bBe=new C.fW(60,1.2,4.8,!0)
D.bBc=new C.fW(18,5,13.5,!0)
D.bB5=new C.fW(8,2,9.5,!1)
D.bAX=new C.fW(12,2.5,8,!1)
D.bAK=new C.fW(20,3.5,13.5,!0)
D.bB1=new C.fW(3.5,3,13,!1)
D.Al=new B.bs(D.eoM,[D.bAE,D.bB4,D.bAW,D.bB9,D.bAZ,D.bAA,D.bB7,D.bAQ,D.bAI,D.bAO,D.bAP,D.bAR,D.bAB,D.bB6,D.bB_,D.bAM,D.bBi,D.bAU,D.bB2,D.bAT,D.bBa,D.bBh,D.bBd,D.bAS,D.bAz,D.bB3,D.bBg,D.alR,D.GW,D.bAL,D.GW,D.bAG,D.GW,D.bAH,D.alR,D.GW,D.bAV,D.bAC,D.bAJ,D.alS,D.bAF,D.bAN,D.bBb,D.bAD,D.bB0,D.bBf,D.bAY,D.bB8,D.bBe,D.GW,D.alS,D.bBc,D.bB5,D.bAX,D.bAK,D.bB1],B.at("bs<n,fW>"))
D.eom={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.f44=new B.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eJT=new B.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eJO=new B.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eWn=new B.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eXk=new B.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eWj=new B.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eHR=new B.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.eUe=new B.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.f4c=new B.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eXG=new B.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eNi=new B.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eHv=new B.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eMk=new B.y("Movement","They pull your legs together and help you balance.")
D.eOg=new B.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eK1=new B.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.f1u=new B.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.f2G=new B.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.eU_=new B.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.f2p=new B.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eSy=new B.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eXO=new B.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eHC=new B.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eOE=new B.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eXt=new B.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.eSU=new B.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.f2x=new B.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eVO=new B.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eHP=new B.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eYp=new B.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.f17=new B.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.f_d=new B.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eFP=new B.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eVw=new B.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eVA=new B.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.ePo=new B.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eKj=new B.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.eO4=new B.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.eUp=new B.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.f03=new B.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.f49=new B.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eXL=new B.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.eFu=new B.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.eUB=new B.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.eGo=new B.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.f0j=new B.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.f1q=new B.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.eV2=new B.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.f0y=new B.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eHE=new B.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.f23=new B.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eLH=new B.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.f_H=new B.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eP2=new B.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eSO=new B.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eY5=new B.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.f2d=new B.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.f25=new B.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.f29=new B.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.eTm=new B.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eZ_=new B.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.f_a=new B.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.f1Q=new B.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.eV1=new B.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.eR7=new B.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.ePQ=new B.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eVq=new B.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eXZ=new B.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.eRE=new B.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eSl=new B.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eM4=new B.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.f1m=new B.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eMU=new B.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.eGl=new B.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.ePn=new B.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.eGg=new B.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eKM=new B.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.ePs=new B.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eN2=new B.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eYl=new B.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eOj=new B.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.f3R=new B.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eQ_=new B.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.eTe=new B.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eVW=new B.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eNa=new B.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eMW=new B.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dIp=new B.bs(D.eom,[D.f44,D.eJT,D.eJO,D.eWn,D.eXk,D.eWj,D.eHR,D.eUe,D.f4c,D.eXG,D.eNi,D.eHv,D.eMk,D.eOg,D.eK1,D.f1u,D.f2G,D.eU_,D.f2p,D.eSy,D.eXO,D.eHC,D.eOE,D.eXt,D.eSU,D.f2x,D.eVO,D.eHP,D.eYp,D.f17,D.f_d,D.eFP,D.eVw,D.eVA,D.ePo,D.eKj,D.eO4,D.eUp,D.f03,D.f49,D.eXL,D.eFu,D.eUB,D.eGo,D.f0j,D.f1q,D.eV2,D.f0y,D.eHE,D.f23,D.eLH,D.f_H,D.eP2,D.eSO,D.eY5,D.f2d,D.f25,D.f29,D.eTm,D.eZ_,D.f_a,D.f1Q,D.eV1,D.eR7,D.ePQ,D.eVq,D.eXZ,D.eRE,D.eSl,D.eM4,D.f1m,D.eMU,D.eGl,D.ePn,D.eGg,D.eKM,D.ePs,D.eN2,D.eYl,D.eOj,D.f3R,D.eQ_,D.eTe,D.eVW,D.eNa,D.eMW],B.at("bs<n,+(n,n)>"))
D.dRi=new C.VK(null)
D.dRv=new C.VL(null)
D.dTz=new C.VR(null)
D.dUn=new C.Wr(null)
D.dUr=new C.Ws(null)
D.dV_=new C.WA(null)
D.dYP=new C.X9(null)
D.dZC=new C.Xa(null)
D.e2P=new C.Xf(null)
D.eiI=new C.Xg(null)
D.eiL=new C.Xk(null)
D.ekV=new C.XF(null)
D.ekW=new C.a9F(null)
D.emZ=new C.XO(null)
D.eqX=new B.r(0,118)
D.aMI=new B.r(0,13)
D.eqY=new B.r(0,17)
D.er0=new B.r(0,330)
D.er6=new B.r(0,-13)
D.er7=new B.r(0,-17)
D.er8=new B.r(0,-18)
D.er9=new B.r(0,-19)
D.erb=new B.r(0,-28)
D.erd=new B.r(0,-31)
D.ere=new B.r(0,-32)
D.erk=new B.r(-9.5,-11)
D.ern=new B.r(10,20)
D.erq=new B.r(10,-13)
D.ers=new B.r(10,-22)
D.ert=new B.r(10,-4)
D.erx=new B.r(11,0)
D.a9m=new B.r(11,8)
D.erD=new B.r(12,2)
D.erE=new B.r(14,0)
D.erF=new B.r(14,12)
D.aMU=new B.r(14,8)
D.erG=new B.r(14,-17)
D.aMW=new B.r(14,-3)
D.aMX=new B.r(14,-4)
D.erJ=new B.r(15,0)
D.erK=new B.r(15,-12)
D.erN=new B.r(16,-8)
D.erO=new B.r(18,14)
D.erP=new B.r(18,-12)
D.aN2=new B.r(20,0)
D.erX=new B.r(20,15)
D.erY=new B.r(20,-17)
D.erZ=new B.r(20,-3)
D.es_=new B.r(21,8)
D.es3=new B.r(22,10)
D.aN4=new B.r(22,8)
D.es4=new B.r(24,0)
D.es5=new B.r(24,2)
D.es8=new B.r(24,-18)
D.es9=new B.r(24,-22)
D.esd=new B.r(25,8)
D.ese=new B.r(26,0)
D.esi=new B.r(28,-30)
D.esp=new B.r(30,18)
D.esq=new B.r(30,2)
D.est=new B.r(31,19)
D.esv=new B.r(32,0)
D.aN8=new B.r(34,0)
D.aN9=new B.r(34,-32)
D.JU=new B.r(36,0)
D.esI=new B.r(3,-1)
D.esL=new B.r(40,3)
D.esZ=new B.r(4,11)
D.et1=new B.r(4,-2)
D.et5=new B.r(5,0)
D.et6=new B.r(5,17)
D.et7=new B.r(5,6)
D.etc=new B.r(6,11)
D.etj=new B.r(8,7)
D.etk=new B.r(8,-10)
D.etl=new B.r(8,-14)
D.aNe=new B.r(9,0)
D.etv=new B.r(-20.5,-17.6)
D.etw=new B.r(-9,18.5)
D.etz=new B.r(-2.6,-1)
D.etI=new B.r(2.6,1)
D.etQ=new B.r(-9,12.2)
D.eu9=new B.r(-9,20.5)
D.euu=new B.r(-10,0)
D.euv=new B.r(-10,12)
D.aNl=new B.r(-10,4)
D.euz=new B.r(-11,0)
D.euC=new B.r(-11,-2)
D.euG=new B.r(-13,-5)
D.euH=new B.r(-14,0)
D.euI=new B.r(-14,13)
D.euJ=new B.r(-14,2)
D.euK=new B.r(-14,-12)
D.euL=new B.r(-14,-19)
D.euN=new B.r(-14,-23)
D.euO=new B.r(-15,6)
D.euR=new B.r(-16,14)
D.euT=new B.r(-16,-8)
D.euU=new B.r(-17,10)
D.euV=new B.r(-17,-18)
D.euW=new B.r(-17,-8)
D.euY=new B.r(-18,20)
D.euZ=new B.r(-18,-9)
D.aNn=new B.r(-20,0)
D.ev0=new B.r(-20,16)
D.ev1=new B.r(-20,-9)
D.Uw=new B.r(-22,8)
D.ev2=new B.r(-22,-10)
D.ev3=new B.r(-22,-11)
D.ev4=new B.r(-24,10)
D.ev5=new B.r(-24,11)
D.ev6=new B.r(-24,14)
D.ev7=new B.r(-24,-22)
D.ev9=new B.r(-25,-11)
D.eva=new B.r(-26,0)
D.evb=new B.r(-26,-18)
D.evc=new B.r(-2,9)
D.evd=new B.r(-2,-10)
D.eve=new B.r(-2,-20)
D.evh=new B.r(-2,-9)
D.evj=new B.r(-32,0)
D.aNp=new B.r(-34,0)
D.evo=new B.r(-40,3)
D.evq=new B.r(-4,11)
D.evr=new B.r(-4,-17)
D.evs=new B.r(-4,-2)
D.evw=new B.r(-5,0)
D.evx=new B.r(-5,20)
D.evy=new B.r(-5,6)
D.evz=new B.r(-6,26)
D.evA=new B.r(-6,6)
D.evB=new B.r(-6,-42)
D.evD=new B.r(-7,-19)
D.evE=new B.r(-7,-24)
D.evH=new B.r(-8,-9)
D.a9v=new B.r(-9,0)
D.evI=new B.r(-9,1)
D.evK=new B.r(-9,-23)
D.fNw=new B.B("Thinking\u2026",null,A.ht,null,null,null,null,null,null,null,null,null)
D.ewK=new B.D(A.jK,D.fNw,null)
D.h3m=new B.B("Start from a ready-made board",null,A.fE,null,null,null,null,null,null,null,null,null)
D.ewY=new B.D(A4.wD,D.h3m,null)
D.bII=new B.Q(4,0,4,14)
D.fIE=new B.G(!0,A.aF,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOw=new B.B("Games and little helpers for a spare minute.",null,D.fIE,null,null,null,null,null,null,null,null,null)
D.ex9=new B.D(D.bII,D.fOw,null)
D.dqv=w([A.hY,A.bj],x.O)
D.aSh=new B.bS(A.z,0.5,A.x,null,0,D.dqv,null,null)
D.eEk=new B.bS(A.z,0.5,A.x,null,0,D.aEd,null,null)
D.dh0=w([A.c,A.bP],x.O)
D.eEm=new B.bS(A.z,0.5,A.x,null,0,D.dh0,null,null)
D.dzs=w([A.bO,A.cy],x.O)
D.aSi=new B.bS(A.z,0.5,A.x,null,0,D.dzs,null,null)
D.cVh=w([A.c,A.bO],x.O)
D.eEr=new B.bS(A.nj,0.5,A.x,null,0,D.cVh,null,null)
D.bxV=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.dxn=w([A.fA,D.bxV],x.O)
D.eEw=new B.bS(A.nj,0.5,A.x,null,0,D.dxn,null,null)
D.cOq=w([A.d_,A.ct],x.O)
D.eEx=new B.bS(A.z,0.5,A.x,null,0,D.cOq,null,null)
D.d2f=w([A.fZ,A.aQ,A.d6],x.O)
D.eEA=new B.bS(A.nj,0.5,A.x,null,0,D.d2f,null,null)
D.drc=w([A.cy,M.mX],x.O)
D.eEB=new B.bS(A.nj,0.5,A.x,null,0,D.drc,null,null)
D.eEG=new B.bS(A.z,0.5,A.x,null,0,D.aAq,null,null)
D.dAk=w([A.cy,A.i7],x.O)
D.eEO=new B.bS(A.z,0.5,A.x,null,0,D.dAk,null,null)
D.aSn=new B.aP(9,9)
D.eEW=new B.aP(1.4,1.4)
D.fch=new B.a4(10,-8,18,-2)
D.fci=new B.a4(14,-14,20,14)
D.fck=new B.a4(20,-2,30,2)
D.fcp=new B.a4(4,-13,30,-3)
D.fcv=new B.a4(8,-7,12,7)
D.fcH=new B.a4(-12,12,12,19)
D.fcI=new B.a4(-12,14,12,22)
D.fcJ=new B.a4(-12,-22,12,8)
D.fcK=new B.a4(-12,-25,12,19)
D.fcL=new B.a4(-12,-26,12,-6)
D.fcM=new B.a4(-12,-4,12,14)
D.fcO=new B.a4(-14,20,14,24)
D.fcP=new B.a4(-14,6,14,10)
D.fcQ=new B.a4(-14,-17,14,15)
D.fcR=new B.a4(-14,-26,14,18)
D.fcS=new B.a4(-14,-4,14,20)
D.fcU=new B.a4(-15,-29,15,25)
D.fcV=new B.a4(-16,-16,16,16)
D.fcY=new B.a4(-16,-22,-9,18)
D.fcZ=new B.a4(-16,-24,16,-10)
D.fd0=new B.a4(-16,-2,16,20)
D.fd2=new B.a4(-18,20,18,24)
D.fd3=new B.a4(-18,-18,18,20)
D.fd4=new B.a4(-20,12,20,22)
D.fd5=new B.a4(-20,-28,20,26)
D.fd6=new B.a4(-22,14,22,18)
D.aT_=new B.a4(-22,-26,22,24)
D.fd7=new B.a4(-22,-3,22,3)
D.fd8=new B.a4(-22,-4,22,12)
D.fda=new B.a4(-24,-12,10,22)
D.fdb=new B.a4(-24,-14,22,8)
D.fdc=new B.a4(-24,-6,24,20)
D.aT0=new B.a4(-24,-9,24,9)
D.fdd=new B.a4(-25,14,25,19)
D.fde=new B.a4(-26,-14,14,8)
D.fdf=new B.a4(-26,-4,26,20)
D.fdg=new B.a4(-26,-6,4,6)
D.aT1=new B.a4(-28,-13,28,13)
D.fdh=new B.a4(-28,-16,28,16)
D.fdi=new B.a4(-28,-16,28,8)
D.fdj=new B.a4(-28,-22,28,22)
D.fdk=new B.a4(-30,-12,30,14)
D.fdl=new B.a4(-30,-14,0,14)
D.fdm=new B.a4(-30,-18,30,20)
D.fdn=new B.a4(-30,-28,30,14)
D.fdo=new B.a4(-30,-2,30,18)
D.fdp=new B.a4(-30,-4,30,18)
D.fdq=new B.a4(-32,-17,32,17)
D.fdr=new B.a4(-32,-28,32,18)
D.fds=new B.a4(-33,-21,33,17)
D.fdt=new B.a4(-34,14,34,26)
D.aap=new B.a4(-34,-18,34,18)
D.fdu=new B.a4(-34,-4,34,7)
D.fdv=new B.a4(-36,-24,36,20)
D.fdw=new B.a4(-38,-22,38,22)
D.fdy=new B.a4(-3,12,3,22)
D.fdz=new B.a4(-3,5,3,15)
D.fdD=new B.a4(-46,-34,46,28)
D.fdF=new B.a4(-48,-3,48,3)
D.fdI=new B.a4(-6,18,24,24)
D.fdJ=new B.a4(-6,5,6,12)
D.fdK=new B.a4(-6,-22,6,-15)
D.fdO=new B.a4(-9,-16,9,22)
D.fdP=new B.a4(-4.5,-24,4.5,-21.2)
D.fdR=new B.a4(14,-9,17.5,9)
D.eq7={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aU7=new B.db(D.eq7,5,x.Q)
D.epB={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.fhs=new B.db(D.epB,10,x.Q)
D.fjN=new B.av(24,44)
D.fka=new B.av(54,38)
D.fkg=new B.av(66,38)
D.bfM=new B.fn(2,null,null,null,null,A.bh,null,null,null,null)
D.flk=new B.a5(16,16,D.bfM,null)
D.aVb=new B.hK(3,12,12,0.82,null)
D.fy9=new B.G(!0,A.wg,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsD=new B.er("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cM,null,null,null,null,null,null,D.fy9)
D.fDi=new B.G(!0,A.kO,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsJ=new B.er("AI",null,null,A.cM,null,null,null,null,null,null,D.fDi)
D.ft0=new B.G(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftx=new B.G(!0,A.bp,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftX=new B.G(!0,A.cs,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuO=new B.G(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvj=new B.G(!0,A.aR,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fib=new B.cU(A.hM,A.dL,6)
D.dk7=w([D.fib],B.at("O<cU>"))
D.fwh=new B.G(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.dk7,null,null,null)
D.fwm=new B.G(!0,A.ew,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwr=new B.G(!0,A.bV,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx2=new B.G(!0,A.bV,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxa=new B.G(!0,A.aF,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy6=new B.G(!0,A.bV,null,null,null,null,9.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyd=new B.G(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyL=new B.G(!0,A.aF,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzh=new B.G(!0,A.aQ,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzk=new B.G(!0,A.c,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.aEz,null,null,null)
D.fzr=new B.G(!0,A.c,null,null,null,null,12.5,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA9=new B.G(!0,A.bA,null,null,null,null,10.5,A.u,null,0.5,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBg=new B.G(!0,A.uy,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBS=new B.G(!0,A.bL,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC0=new B.G(!0,A.aF,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCO=new B.G(!0,A.mY,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCZ=new B.G(!0,A.cy,null,null,null,null,9.5,null,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXn=new B.G(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fE9=new B.G(!0,A.iL,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEt=new B.G(!0,A.bV,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fF0=new B.G(!0,A.bc,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGw=new B.G(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fH2=new B.G(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHj=new B.G(!0,A.aQ,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHH=new B.G(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHK=new B.G(!0,A.aQ,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIU=new B.G(!0,A.uy,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJg=new B.G(!0,A.bc,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwu=new B.G(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJF=new B.B("\u26a0\ufe0f ",null,D.fwu,null,null,null,null,null,null,null,null,null)
D.fJS=new B.B("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.B6,null,null,null,null,null,null,null,null,null)
D.fLv=new B.B("Pick one, then change it and see what happens.",null,A.B6,null,null,null,null,null,null,null,null,null)
D.fxE=new B.G(!0,A.ab,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMv=new B.B("What do you want to invent? Type it below, or tap an idea.",null,D.fxE,null,null,null,null,null,null,null,null,null)
D.fBN=new B.G(!0,A.bX,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fN_=new B.B("Burnt out! Press Repair.",null,D.fBN,null,null,null,null,null,null,null,null,null)
D.fO7=new B.B("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fOK=new B.B("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.h6,null,null,null,null,null,null,null,null,null)
D.fPn=new B.B("Make it yours",null,A.jR,null,null,null,null,null,null,null,null,null)
D.fSA=new B.B("5G",null,A_.aWI,null,null,null,null,null,null,null,null,null)
D.fTA=new B.B("Pick how big the screen is on the board",null,A.ht,null,null,null,null,null,null,null,null,null)
D.fEL=new B.G(!0,A.bV,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTM=new B.B("WHAT HAPPENS",null,D.fEL,null,null,null,null,null,null,null,null,null)
D.fVx=new B.B("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fWc=new B.B("Change the words and pictures on the three slabs.",null,A.B6,null,null,null,null,null,null,null,null,null)
D.fWp=new B.B("All the parts and wires will be removed.",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fWK=new B.B("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fXj=new B.B("Tap the crank on the board again and again to spin it faster.",null,A.ht,null,null,null,null,null,null,null,null,null)
D.fYy=new B.B("\ud83c\udfaf Challenges",null,A.dl,null,null,null,null,null,null,null,null,null)
D.fZ4=new B.B("Remove this part",null,Y.aWj,null,null,null,null,null,null,null,null,null)
D.fZn=new B.B("Clear the board?",null,A.dk,null,null,null,null,null,null,null,null,null)
D.fEa=new B.G(!0,A.bv,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZF=new B.B("How the Lab works",null,D.fEa,null,null,null,null,null,null,null,null,null)
D.fv0=new B.G(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h__=new B.B("Electronics Lab",null,D.fv0,null,null,null,null,A.a2,null,1,null,null)
D.h_3=new B.B("?",null,Q.aXU,null,null,null,null,null,null,null,null,null)
D.h0o=new B.B("Ready-made circuits",null,A.dl,null,null,null,null,null,null,null,null,null)
D.h11=new B.B("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.ht,null,null,null,null,null,null,null,null,null)
D.fHo=new B.G(!0,A.aQ,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h4v=new B.B("\u26a0 There is no air here, so a parachute will not work.",null,D.fHo,null,null,null,null,null,null,null,null,null)
D.h5H=new B.B("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,Y.aWh,null,null,null,null,null,null,null,null,null)
D.h6c=new B.B("NGMY",null,A.vQ,null,null,null,null,null,null,null,null,null)
D.h6p=new B.B("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.Wg,null,null,null,null,null,null,null,null,null)
D.h6O=new B.B("Tap it to change its setting. Drag from the right dot to connect.",null,A.lY,null,null,null,null,null,null,null,null,null)
D.h7S=new B.B("TOOLBOX",null,A9.abN,null,null,null,null,null,null,null,null,null)
D.hwk=new B.bf("electronics-part-card",x.W)
D.hwm=new B.bf("device-learn-more",x.W)
D.hwr=new B.bf("device-remote",x.W)
D.hww=new B.bf("device-picture",x.W)
D.hx_=new B.bf("electronics-part-about",x.W)
D.hx6=new B.bf("body-loading",x.W)
D.hxc=new B.bf("device-fullscreen",x.W)
D.hxz=new B.bf("core-protocol-back",x.W)
D.hxE=new B.bf("core-protocol-title-frame",x.W)})();(function staticFields(){$.hwK=null
$.hwG=null
$.hwH=null
$.hDa=0
$.i5B=B.T(x.N,B.at("iC"))
$.i69=B.T(x.N,B.at("iC"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iDi","bHx",()=>{var v="led"
return B.a([C.aAu("Both together","Make the light glow only when BOTH switches are ON.",2,new C.ftU(),v),C.aAu("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.ftV(),v),C.aAu("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.ftW(),v),C.aAu("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fu2(),v),C.aAu("Not both","Make the light go OFF only when both switches are ON.",2,new C.fu3(),v),C.aAu("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.fu4(),"buzzer")],B.at("O<bdF>"))})
w($,"iDK","bHy",()=>B.a([C.Ro("UNIVERSE","Earth, space and gravity",A.Qb,A.aG,new C.fuk()),C.Ro("ELECTRONICS LAB","Batteries, wires, real circuits",Ah.uX,A.aG,new C.ful()),C.Ro("DISCOVERY LAB","Body Explorer: a real 3D human",D.bS_,A.bc,new C.fum()),C.Ro("TOOLBOX","Converter, clock, games",H.aqy,A.cO,new C.fun()),C.Ro("REACTION LAB","Wire parts together",A.Dx,A.bv,new C.fuo()),C.Ro("SPARK PAINTER","Paint with light",A.HG,A.c4,new C.fup()),C.Ro("ROCKET LANDER","Land softly on the pad",A.oO,A.aG,new C.fuq()),C.Ro("TITLE ANIMATOR","Make a moving title",A.x1,A.bt,new C.fur()),C.Ro("CIRCUIT LAB","Connect logic, learn it",A.a3I,A.cs,new C.fus())],B.at("O<bvW>")))
w($,"iFt","qK",()=>{var v,u,t=B.T(x.N,x.C)
for(v=0;v<76;++v){u=D.ST[v]
t.n(0,u.a,u)}return t})
w($,"iDj","ajn",()=>B.a([C.Gt("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fu5()),C.Gt("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fu6()),C.Gt("Spin the motor","A battery and a motor in a loop will make it spin.",new C.fu7()),C.Gt("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.fu8()),C.Gt("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fu9()),C.Gt("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.ftX()),C.Gt("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.ftY()),C.Gt("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.ftZ()),C.Gt("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fu_()),C.Gt("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fu0()),C.Gt("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fu1())],B.at("O<bdG>")))
w($,"iDM","hMu",()=>B.a([C.a2f("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aQ,A.c9,new C.fuA()),C.a2f("Focus Timer","Work, then rest","\u23f1\ufe0f",A.bX,A.bD,new C.fuB()),C.a2f("Breathe","Calm down in a minute","\ud83e\udee7",A.fJ,A.cG,new C.fuC()),C.a2f("Draw Pad","Sketch and share","\ud83c\udfa8",A.bE,A.b7,new C.fuD()),C.a2f("Memory Match","Find the pairs","\ud83c\udccf",A.aG,A.ci,new C.fuE()),C.a2f("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bt,A.bi,new C.fuF()),C.a2f("Tip & Split","Share the bill","\ud83e\uddfe",A.bc,A.b2,new C.fuG()),C.a2f("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bh,A.aD,new C.fuH())],B.at("O<bxf>")))})()};
(a=>{a["xkD4wF0rizFTDOaDQ19JP3hzByI="]=a.current})($__dart_deferred_initializers__);