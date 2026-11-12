((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,A3,Z,A4,A_,R,A5,A6,A7,A8,A9,A0,N,Aa,Ab,Ac,Ad,T,Ae,P,Af,U,V,W,E,K,G,I,A1,O,Ag,Ah,S,Ai,Q,Aj,L,F,M,C={
bBv(d){return C.i4c(d)},
i4c(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bBv=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.rc(B.nh(""),d,A.hW,null,null).df(0,A.a_t),$async$bBv)
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
return B.i($async$bBv,v)},
iga(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.RQ[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cS(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ag(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.fl(D.RQ,new C.fIm())
if(w==null)w=A.d.gH(D.RQ)
s=B.U(x.N,x.B)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.J)(r),++u){l=r[u].a
k=l[0]
l=$.qz().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.J)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gH(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.akM(w.a,w.b,m,w,s,!1)},
i9O(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.N(D.Sf,new C.fxl(),x.bd).aN(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
io6(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cp(b2,"{")
v=A.a.oY(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.Y.aS(0,A.a.aA(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aS(a5)
r=0
for(a6=x.j,a7=J.aX(a6.a(J.t(u,"parts"))),a8=x.i;a7.C();){q=a7.gR(a7)
p=B.w(J.t(q,"kind"))
o=B.w(J.t(q,"id"))
if(!$.qz().an(0,p)||J.f0(s,o)||J.ad(t)>=8)continue
J.c8(s,o)
n=B.U(a5,a8)
for(a9=0;a9<4;++a9){m=D.dwc[a9]
l=J.t(q,m)
if(typeof l=="number")J.aJ(n,m,l)}k=A.k.F(typeof J.t(q,"x")=="number"?B.e0(J.t(q,"x")):0.2+A.k.E(r,3)*0.3,0.16,0.84)
j=A.k.F(typeof J.t(q,"y")=="number"?B.e0(J.t(q,"y")):0.25+A.k.aq(r,3)*0.3,0.1,0.9)
J.c8(t,new B.dW([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aX(a6.a(J.t(u,"wires")));a5.C();){h=a5.gR(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.w(J.t(g,0))
e=B.w(J.t(g,2))
d=A.o.F(A.k.M(B.e0(J.t(g,1))),0,1)
a0=A.o.F(A.k.M(B.e0(J.t(g,3))),0,1)
if(J.f0(s,f)&&J.f0(s,e)&&!J.z(f,e))J.c8(i,new B.cu([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.L.a(J.t(u,"steps"))
a0=J.aX(a0==null?A.cx:a0)
while(a0.C()){a2=a0.gR(a0)
J.c8(a1,B.w(a2))}a3=a1
a0=J.t(u,"title")
a0=B.w(a0==null?"My invention":a0)
a1=J.t(u,"explain")
a4=new C.mS(a0,B.w(a1==null?"":a1),t,i,A.Z)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.t(u,"honest")
a5=B.w(a5==null?"":a5)
return new C.akM(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
ieF(d){var w,v,u=C.hj2()
d.B(u)
for(w=0;w<60;++w)u.vF(0,0.03333333333333333)
v=u.a
return A.d.aX(v,new C.fEQ(u))&&!A.d.cM(v,new C.fER())},
ieE(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.U(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.J)(l),++u){t=l[u];++v
k.n(0,t.a,$.qz().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.J)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.w(t.e)+" V")
if(p==="resistor")q.push(""+A.k.V(t.r)+" ohms")
if(A.d.q(D.dur,p))q.push("level "+A.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aN(q,", ")+")"
s.push(B.w(p)+n+": "+o+", current "+A.k.ad(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.J)(w),++u){m=w[u]
l.push(B.w(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.w(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aN(s,"\n")+"\nWires: "+A.d.aN(l,"; ")},
i2G(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.J)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aN(v,"\n")+"\n\n"}v=A.d.aN(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
ig9(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qz().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.Sf[u]
if(A.d.aX(w,new C.fIj(s)))if(!B.cS(r,s.b.toLowerCase(),0))v=B.cS(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ag("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.X(w,new C.fIk(e),B.T(w).k("X<1>")).gav(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ag("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.ad(A.d.cG(w,0,new C.fIl())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ag("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gH(w)
w=$.qz().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
akM:function akM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fIm:function fIm(){},
fxl:function fxl(){},
fEQ:function fEQ(d){this.a=d},
fER:function fER(){},
fIj:function fIj(d){this.a=d},
fIk:function fIk(d){this.a=d},
fIl:function fIl(){},
Ws:function Ws(d,e){this.c=d
this.a=e},
blX:function blX(d,e,f,g,h){var _=this
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
ehN:function ehN(d){this.a=d},
ehO:function ehO(d,e,f){this.a=d
this.b=e
this.c=f},
ehP:function ehP(d){this.a=d},
ei_:function ei_(d){this.a=d},
ei0:function ei0(d,e){this.a=d
this.b=e},
ehW:function ehW(d){this.a=d},
ehU:function ehU(d,e){this.a=d
this.b=e},
ehV:function ehV(d,e,f){this.a=d
this.b=e
this.c=f},
ehX:function ehX(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ehS:function ehS(d){this.a=d},
ehT:function ehT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ehY:function ehY(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ehR:function ehR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ehZ:function ehZ(d,e){this.a=d
this.b=e},
ehQ:function ehQ(d,e){this.a=d
this.b=e},
ei3:function ei3(d){this.a=d},
ei2:function ei2(d){this.a=d},
ei4:function ei4(d){this.a=d},
ei1:function ei1(d){this.a=d},
ei5:function ei5(d,e){this.a=d
this.b=e},
ei6:function ei6(d,e){this.a=d
this.b=e},
ei7:function ei7(d,e){this.a=d
this.b=e},
ei8:function ei8(d,e){this.a=d
this.b=e},
bBQ(d,e,f){var w=null
return B.x(B.a([B.d(d,w,w,w,w,w,w,D.fpn,w,w,w),B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.O,0,A.p)},
hwJ(d,e,f,g){var w=null,v=B.n(24),u=B.L(f.j(0.6),A.r,1)
return B.at(B.p(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.an,B.d(e,w,w,w,w,w,w,A.xg,A.K,w,w),A.aC,B.bW(A.fM,g,A.br,w,0,8)],x.p),A.m,w,A.e,A.O,0,A.p),A.f,w,w,new B.o(D.bgs,w,u,v,w,w,A.n),w,w,w,w,A.ab,w,w,w),w,w,w)},
GL:function GL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vf:function vf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
WP:function WP(d){this.a=d},
aFJ:function aFJ(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.m4$=i
_.f9$=j
_.h6$=k
_.bx$=l
_.aa$=m
_.c=_.a=null},
ex5:function ex5(){},
exp:function exp(d){this.a=d},
exo:function exo(d,e){this.a=d
this.b=e},
exq:function exq(){},
exr:function exr(){},
ex7:function ex7(d,e,f){this.a=d
this.b=e
this.c=f},
ex6:function ex6(d,e){this.a=d
this.b=e},
ewX:function ewX(d){this.a=d},
ewY:function ewY(d){this.a=d},
ewZ:function ewZ(d){this.a=d},
ex_:function ex_(d){this.a=d},
ex0:function ex0(d){this.a=d},
ex1:function ex1(d){this.a=d},
ex2:function ex2(d){this.a=d},
ex3:function ex3(d){this.a=d},
ex4:function ex4(d){this.a=d},
ewV:function ewV(d){this.a=d},
ewW:function ewW(d){this.a=d},
ewU:function ewU(d){this.a=d},
exi:function exi(d,e){this.a=d
this.b=e},
exd:function exd(d){this.a=d},
exe:function exe(d){this.a=d},
exa:function exa(d){this.a=d},
exf:function exf(d){this.a=d},
ex9:function ex9(d){this.a=d},
exg:function exg(d){this.a=d},
exh:function exh(d){this.a=d},
ex8:function ex8(d){this.a=d},
exj:function exj(d,e){this.a=d
this.b=e},
exc:function exc(d,e){this.a=d
this.b=e},
exk:function exk(d){this.a=d},
exl:function exl(d){this.a=d},
exm:function exm(d){this.a=d},
exn:function exn(d){this.a=d},
exb:function exb(d){this.a=d},
biU:function biU(d,e){this.b=d
this.a=e},
aNE:function aNE(){},
bzv:function bzv(){},
cOa(){var w=0,v=B.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cOa=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.re().jn(0,"assets/data/body3d.bin"),$async$cOa)
case 3:d=a1
$.hrW=J.eC(A.dM.gaU(d),d.byteOffset,d.byteLength)
t=B.a4a(d)
s=t.getUint32(4,!0)
r=B.a([],x.a)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.jF(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.diB[i]
g=B.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a44(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b3C))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.bbQ(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cOa,v)},
aTJ:function aTJ(d,e,f){this.a=d
this.b=e
this.c=f},
a44:function a44(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
bbQ:function bbQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Vl:function Vl(d){this.a=d},
aEc:function aEc(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.h5$=s
_.m4$=t
_.f9$=u
_.h6$=v
_.bx$=w
_.aa$=a0
_.c=_.a=null},
dOg:function dOg(d){this.a=d},
dOf:function dOf(d,e){this.a=d
this.b=e},
dNT:function dNT(d,e){this.a=d
this.b=e},
dNU:function dNU(){},
dOh:function dOh(){},
dNV:function dNV(d,e){this.a=d
this.b=e},
dNW:function dNW(d){this.a=d},
dNX:function dNX(){},
dNY:function dNY(d){this.a=d},
dO_:function dO_(d,e){this.a=d
this.b=e},
dNZ:function dNZ(d){this.a=d},
dNQ:function dNQ(d,e,f){this.a=d
this.b=e
this.c=f},
dNR:function dNR(d){this.a=d},
dNS:function dNS(d){this.a=d},
dO6:function dO6(d){this.a=d},
dO7:function dO7(d,e){this.a=d
this.b=e},
dO8:function dO8(d,e){this.a=d
this.b=e},
dO9:function dO9(d){this.a=d},
dO5:function dO5(d,e){this.a=d
this.b=e},
dOa:function dOa(d,e){this.a=d
this.b=e},
dO4:function dO4(d,e){this.a=d
this.b=e},
dOb:function dOb(d){this.a=d},
dO3:function dO3(d){this.a=d},
dOc:function dOc(d){this.a=d},
dO2:function dO2(d){this.a=d},
dOd:function dOd(d){this.a=d},
dO1:function dO1(d){this.a=d},
dOe:function dOe(d){this.a=d},
dO0:function dO0(d){this.a=d},
aMJ:function aMJ(){},
aMK:function aMK(){},
c5S:function c5S(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c5T:function c5T(d,e){this.a=d
this.b=e},
c5U:function c5U(d){this.a=d},
azD(d,e,f,g,h){return new C.bcB(d,e,f,g,h)},
h9i(d,e,f,g,h,i){return $.i02.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.cV5(d,e,f,i,g,h))},
yz:function yz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
CT:function CT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nD:function nD(d,e,f){this.a=d
this.b=e
this.c=f},
bcB:function bcB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fqH:function fqH(){},
fqI:function fqI(){},
fqJ:function fqJ(){},
fqQ:function fqQ(){},
fqR:function fqR(){},
fqS:function fqS(){},
Vq:function Vq(d){this.a=d},
aEe:function aEe(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.m4$=n
_.f9$=o
_.h6$=p
_.bx$=q
_.aa$=r
_.c=_.a=null},
dPW:function dPW(d){this.a=d},
dPA:function dPA(d,e){this.a=d
this.b=e},
dPD:function dPD(){},
dPX:function dPX(){},
dPy:function dPy(d,e){this.a=d
this.b=e},
dPz:function dPz(d,e){this.a=d
this.b=e},
dPE:function dPE(d,e,f){this.a=d
this.b=e
this.c=f},
dPt:function dPt(){},
dPu:function dPu(){},
dPv:function dPv(d){this.a=d},
dPw:function dPw(d,e){this.a=d
this.b=e},
dPx:function dPx(d,e,f){this.a=d
this.b=e
this.c=f},
dPF:function dPF(){},
dPG:function dPG(d,e){this.a=d
this.b=e},
dPH:function dPH(d){this.a=d},
dPC:function dPC(d,e){this.a=d
this.b=e},
dPB:function dPB(d){this.a=d},
dPs:function dPs(d,e,f){this.a=d
this.b=e
this.c=f},
dPQ:function dPQ(d){this.a=d},
dPP:function dPP(d){this.a=d},
dPR:function dPR(d){this.a=d},
dPO:function dPO(d){this.a=d},
dPM:function dPM(d){this.a=d},
dPN:function dPN(d){this.a=d},
dPL:function dPL(d){this.a=d},
dPI:function dPI(d){this.a=d},
dPK:function dPK(d){this.a=d},
dPS:function dPS(d,e){this.a=d
this.b=e},
dPT:function dPT(d,e){this.a=d
this.b=e},
dPU:function dPU(d){this.a=d},
dPJ:function dPJ(d){this.a=d},
dPV:function dPV(d,e){this.a=d
this.b=e},
bcU:function bcU(d,e){this.b=d
this.a=e},
cV5:function cV5(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aMO:function aMO(){},
bzf:function bzf(){},
hRM(){return new C.O2(null)},
R1(d,e,f,g,h){return new C.buN(d,e,f,g,h)},
bt9(d,e,f){return A.k.F((d-e)/(f-e),0,1)},
h9Q(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
O2:function O2(d){this.a=d},
L5:function L5(d,e){this.a=d
this.b=e},
B0:function B0(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aEv:function aEv(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dVU:function dVU(d,e){this.a=d
this.b=e},
dVT:function dVT(d){this.a=d},
dVW:function dVW(d,e){this.a=d
this.b=e},
dVV:function dVV(d){this.a=d},
buN:function buN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fr7:function fr7(){},
fr8:function fr8(){},
fr9:function fr9(){},
fra:function fra(){},
frb:function frb(){},
frc:function frc(){},
frd:function frd(){},
fre:function fre(){},
frf:function frf(){},
bta:function bta(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f6K:function f6K(d){this.a=d},
f6J:function f6J(d,e){this.a=d
this.b=e},
f6H:function f6H(d){this.a=d},
f6L:function f6L(d){this.a=d},
f6I:function f6I(d,e){this.a=d
this.b=e},
afJ:function afJ(d,e,f){this.c=d
this.d=e
this.a=f},
aeB:function aeB(d,e,f){this.c=d
this.d=e
this.a=f},
QV:function QV(d,e,f,g,h,i,j,k,l,m){var _=this
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
bua:function bua(d,e){this.b=d
this.a=e},
btG:function btG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bby:function bby(d,e){this.b=d
this.a=e},
aII:function aII(d,e){this.c=d
this.a=e},
aIJ:function aIJ(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cR$=e
_.b9$=f
_.c=_.a=null},
f6q:function f6q(d){this.a=d},
f6p:function f6p(d){this.a=d},
f6o:function f6o(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6n:function f6n(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6l:function f6l(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6k:function f6k(d,e,f){this.a=d
this.b=e
this.c=f},
f6m:function f6m(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f6j:function f6j(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6y:function f6y(d){this.a=d},
f6x:function f6x(d){this.a=d},
f6z:function f6z(d,e){this.a=d
this.b=e},
f6A:function f6A(d,e){this.a=d
this.b=e},
f6B:function f6B(d,e){this.a=d
this.b=e},
f6w:function f6w(d,e,f){this.a=d
this.b=e
this.c=f},
f6C:function f6C(d,e,f){this.a=d
this.b=e
this.c=f},
f6v:function f6v(d){this.a=d},
f6r:function f6r(d){this.a=d},
f6D:function f6D(d){this.a=d},
f6E:function f6E(d){this.a=d},
f6u:function f6u(d,e){this.a=d
this.b=e},
f6F:function f6F(d,e){this.a=d
this.b=e},
f6t:function f6t(d,e){this.a=d
this.b=e},
f6G:function f6G(d,e){this.a=d
this.b=e},
f6s:function f6s(d,e){this.a=d
this.b=e},
f6h:function f6h(){},
f6i:function f6i(){},
bsM:function bsM(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bsc:function bsc(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bce:function bce(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bse:function bse(d,e,f){this.b=d
this.c=e
this.a=f},
bwg:function bwg(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aOt:function aOt(){},
hy8(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a7(0,new B.q(w,0)),u=e.aK(0,new B.q(w,0)),t=1-f,s=3*t
return d.aO(0,t*t*t).a7(0,v.aO(0,s*t*f)).a7(0,u.aO(0,s*f*f)).a7(0,e.aO(0,f*f*f))},
biT(d,e,f,g,h,i){return $.i0B.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.dq5(d,e,f,i,g,h))},
a1h:function a1h(d,e){this.a=d
this.b=e},
qn:function qn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
r6:function r6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
CX:function CX(d,e){this.a=d
this.b=e},
a_f:function a_f(d,e){this.a=d
this.b=e},
afx:function afx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a1u:function a1u(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
D7:function D7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acs:function acs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acJ:function acJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aeE:function aeE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
biR:function biR(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.T$=t
_.bw$=_.bL$=0},
dq9:function dq9(d){this.a=d},
dqa:function dqa(d){this.a=d},
dq6:function dq6(d,e){this.a=d
this.b=e},
dq7:function dq7(d){this.a=d},
dq8:function dq8(d){this.a=d},
dqb:function dqb(d){this.a=d},
dqc:function dqc(d){this.a=d},
dqd:function dqd(d){this.a=d},
dqe:function dqe(d){this.a=d},
dqf:function dqf(d){this.a=d},
dqg:function dqg(d){this.a=d},
dqh:function dqh(d){this.a=d},
dqi:function dqi(d){this.a=d},
dqj:function dqj(d){this.a=d},
Gw:function Gw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
WO:function WO(d){this.a=d},
aFI:function aFI(d,e,f,g,h,i,j){var _=this
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
_.aa$=j
_.c=_.a=null},
ewq:function ewq(d){this.a=d},
ewf:function ewf(d){this.a=d},
ewh:function ewh(){},
ewi:function ewi(){},
ewl:function ewl(){},
ewm:function ewm(d,e,f){this.a=d
this.b=e
this.c=f},
ewn:function ewn(d){this.a=d},
ewo:function ewo(d){this.a=d},
ewj:function ewj(){},
ewk:function ewk(d){this.a=d},
ewQ:function ewQ(d){this.a=d},
ewp:function ewp(){},
ewb:function ewb(d){this.a=d},
ews:function ews(d){this.a=d},
ewr:function ewr(d){this.a=d},
ewu:function ewu(){},
ewt:function ewt(d,e){this.a=d
this.b=e},
ewe:function ewe(){},
ewc:function ewc(d){this.a=d},
ewd:function ewd(d){this.a=d},
ewO:function ewO(d){this.a=d},
ewN:function ewN(d){this.a=d},
ewP:function ewP(d){this.a=d},
ewE:function ewE(d,e){this.a=d
this.b=e},
ewM:function ewM(d){this.a=d},
ewK:function ewK(d){this.a=d},
ewL:function ewL(d){this.a=d},
ewJ:function ewJ(d){this.a=d},
ewI:function ewI(d){this.a=d},
ewF:function ewF(d){this.a=d},
ewG:function ewG(d){this.a=d},
ewH:function ewH(d){this.a=d},
ewg:function ewg(){},
ewA:function ewA(d){this.a=d},
ewB:function ewB(d){this.a=d},
ewz:function ewz(d){this.a=d},
ewC:function ewC(d){this.a=d},
ewy:function ewy(d){this.a=d},
ewD:function ewD(d){this.a=d},
ewx:function ewx(d){this.a=d},
eww:function eww(d){this.a=d},
ewv:function ewv(d,e){this.a=d
this.b=e},
biS:function biS(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dq5:function dq5(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aNC:function aNC(){},
hDz(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aK(0,e).gcF()*0.1
return new B.q((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
hj2(){var w=B.a([],x.C),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a5d(w,v,u,A.cM,B.U(x.N,x.y))},
hLw(d,e,f){var w=d.c,v=e===0?-1:1
return new B.q(w*f.a+v*C.hj3(d),d.d*f.b)},
hj3(d){return 42+(D.mn.an(0,d.b)?(d.ch-1)*38:0)},
eh:function eh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
tT:function tT(d,e,f,g){var _=this
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
ab7:function ab7(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ace:function ace(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5d:function a5d(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bPd:function bPd(){},
bPo:function bPo(d){this.a=d},
bPj:function bPj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bPp:function bPp(d){this.a=d},
bPq:function bPq(d){this.a=d},
bPs:function bPs(d){this.a=d},
bPt:function bPt(d){this.a=d},
bPr:function bPr(d){this.a=d},
bPu:function bPu(d,e,f){this.a=d
this.b=e
this.c=f},
bPv:function bPv(d){this.a=d},
bPf:function bPf(d){this.a=d},
bPg:function bPg(d){this.a=d},
bPe:function bPe(d){this.a=d},
bPh:function bPh(d,e,f){this.a=d
this.b=e
this.c=f},
bPi:function bPi(d){this.a=d},
bPc:function bPc(d){this.a=d},
bPw:function bPw(d,e){this.a=d
this.b=e},
bPk:function bPk(d,e){this.a=d
this.b=e},
bPn:function bPn(d){this.a=d},
bPm:function bPm(d){this.a=d},
bPl:function bPl(d){this.a=d},
ajA:function ajA(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bJE:function bJE(){},
bJF:function bJF(){},
mS:function mS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
csW:function csW(d){this.a=d},
io1(d2,d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=d3.fx>0&&!d3.x,c7=new C.fU9(),c8=new C.fUb(),c9=new C.fUc(),d0=new C.fUa(),d1=d3.b
switch(d1){case"fridge":w=c9.$4(-16,-28,32,54)
d2.ap(w,d0.$3(new B.a2(w.a,w.b,w.c,w.d),A.bO,A.bM))
d2.ah(D.enT,D.ekL,c8.$2(A.dN,1.4))
d2.ah(D.ekq,D.eko,c8.$2(A.bu,2.4))
d2.ah(D.ekr,T.aL2,c8.$2(A.bu,2.4))
if(c6){d1=c7.$1(A.fq.j(0.5))
d1.y=A.H2
d2.N(D.ek6,14,d1)
for(d1=d4*0.6,v=0;v<3;++v){u=A.k.E(d1+v/3,1)
d5.$5(d2,"\u2744",new B.q(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d2.ap(c9.$4(-22,-26,44,50),d0.$3(D.aR9,A.aQ,A.cr))
d2.N(A.cL,16,c7.$1(A.bu))
d2.N(A.cL,13,c7.$1(c6?A.aJ.j(0.85):A.R))
if(c6){d1=d2.c
J.bq(d1.save())
d1.translate(0,4)
d2.iq(0,d3.y*0.6)
for(v=0;v<3;++v){t=v*2.09
d2.ah(A.I,new B.q(Math.cos(t)*11,Math.sin(t)*11),c8.$2(A.ad,3))}d1.restore()
for(d1=d4*0.8,v=0;v<4;++v){u=A.k.E(d1+v*0.25,1)
d2.N(new B.q(Math.sin(v*2+d4)*9,4-u*12),1.6+u*2,c7.$1(A.c.j(0.8*(1-u))))}}d2.N(D.enL,2.4,c7.$1(c6?A.bg:A.am))
d2.N(D.eoD,2.4,c7.$1(A.am))
return!0
case"blender":d2.ap(c9.$5(-14,14,28,12,4),c7.$1(A.ed))
d1=$.S().r
t=x.v
s=new B.aE(d1,A.ah,c5,c5,B.a([],t))
s.D(new B.aY(-16,-26))
s.D(new B.aq(16,-26))
s.D(new B.aq(12,14))
s.D(new B.aq(-12,14))
s.D(new B.bt())
d2.ae(s,c7.$1(A.fq.j(0.35)))
if(c6){d1=new B.aE(d1,A.ah,c5,c5,B.a([],t))
d1.D(new B.aY(-14,-10))
d1.D(new B.aq(14,-10))
d1.D(new B.aq(12,14))
d1.D(new B.aq(-12,14))
d1.D(new B.bt())
d2.ae(d1,c7.$1(A.ax.j(0.7)))}d2.ae(s,c8.$2(A.ad,1.6))
d1=d2.c
J.bq(d1.save())
d1.translate(0,10)
d2.iq(0,d3.y)
d2.ah(D.a8e,D.aLo,c8.$2(A.bP,3))
d1.restore()
if(c6)for(d1=d4*9,t=d4*1.6,v=0;v<3;++v)d2.N(new B.q(Math.sin(d1+v*2)*9,-10-A.k.E(t+v*0.33,1)*12),2.4,c7.$1(A.eQ))
return!0
case"drone":d2.ap(c9.$5(-10,-4,20,10,4),c7.$1(A.aL))
d2.N(A.ih,3,c7.$1(c6?A.bg:A.am))
r=c6?-3+Math.sin(d4*4)*2:4
for(d1=d2.c,t=-4+r,q=-6+r,p=0;p<2;++p){o=F.St[p]
d2.ah(new B.q(o*0.4,1),new B.q(o,t),c8.$2(A.bu,3))
J.bq(d1.save())
d1.translate(o,q)
d2.ah(D.enz,D.ekv,c8.$2(A.c.j(c6?0.35:0.9),3))
if(c6)d2.bY(B.bJ(A.I,6,24+Math.sin(d3.y*3)*4),c7.$1(A.c.j(0.25)))
d1.restore()}return!0
case"drill":w=new B.aE($.S().r,A.ah,c5,c5,B.a([],x.v))
w.D(new B.aY(-24,-12))
w.D(new B.aq(10,-12))
w.D(new B.aq(10,2))
w.D(new B.aq(-2,2))
w.D(new B.aq(-6,22))
w.D(new B.aq(-16,22))
w.D(new B.aq(-14,2))
w.D(new B.aq(-24,2))
w.D(new B.bt())
d2.ae(w,d0.$3(D.f5z,A.aU,A.d2))
d2.au(D.f4G,c7.$1(A.dj))
d1=d2.c
J.bq(d1.save())
d1.translate(18,-5)
d2.iq(0,d3.y*2)
d2.ah(A.I,D.ekC,c8.$2(A.bP,2.4))
d2.ah(A.a8b,D.ekB,c8.$2(A.hC,1))
d1.restore()
if(c6)for(d1=d4*3,t=d4*20,v=0;v<4;++v){u=A.k.E(d1+v*0.25,1)
d2.N(new B.q(34+u*6,-5+Math.sin(v*3+t)*6*u),1.4,c7.$1(A.dE.j(1-u)))}return!0
case"torch":if(c6){v=A.k.F(0.5+0.12*(Math.abs(d3.dy)-2),0.5,1)
d1=new B.aE($.S().r,A.ah,c5,c5,B.a([],x.v))
d1.D(new B.aY(16,-6))
d1.D(new B.aq(52,-26))
d1.D(new B.aq(52,18))
d1.D(new B.aq(16,4))
d1.D(new B.bt())
d2.ae(d1,c7.$1(A.bN.j(0.35*v)))}d2.ap(c9.$5(-26,-6,30,12,3),d0.$3(D.f5F,A.bo,A.cs))
n=new B.aE($.S().r,A.ah,c5,c5,B.a([],x.v))
n.D(new B.aY(4,-6))
n.D(new B.aq(18,-12))
n.D(new B.aq(18,12))
n.D(new B.aq(4,6))
n.D(new B.bt())
d2.ae(n,c7.$1(A.ed))
d2.N(D.ekH,7,c7.$1(c6?A.c:A.dj))
return!0
case"neon":d2.ap(c9.$5(-30,-14,60,28,6),c7.$1(M.nq))
if(c6)m=d3.ax>0.5||A.o.E(A.k.bh(d4*17),3)!==0
else m=!1
l=m?A.c1:D.bqy
if(m){d1=c9.$5(-28,-12,56,24,6)
t=c7.$1(A.c1.j(0.35))
t.y=A.mR
d2.ap(d1,t)}d2.ap(c9.$5(-27,-11,54,22,5),c8.$2(l,2.2))
d5.$5(d2,"OPEN",D.enZ,l,17)
return!0
case"microwave":d2.ap(c9.$4(-30,-18,60,38),d0.$3(D.f5L,A.bP,A.bo))
d1=c9.$5(-26,-14,38,30,3)
d2.ap(d1,c7.$1(c6?A.bN.j(0.75):A.av))
if(c6){d1=d2.c
J.bq(d1.save())
d1.translate(-7,8)
d2.iq(0,d3.y*0.5)
d2.bY(B.bJ(A.I,7,22),c7.$1(A.d2))
d1.restore()}d2.ap(c9.$5(15,-14,12,12,2),c7.$1(M.nq))
if(c6)d5.$5(d2,"0:"+A.a.b_(A.o.u(59-A.o.E(A.k.bh(d4),60)),2,"0"),D.ekI,A.b9,6.5)
d2.N(D.ekY,4,c7.$1(A.dj))
return!0
case"doorbell":d2.ap(c9.$5(-16,-26,32,52,8),c7.$1(A.aO))
d2.N(A.Jp,10,c7.$1(c6?A.bs:A.bu))
d1=d2.c
J.bq(d1.save())
d1.translate(0,-8)
d2.iq(0,c6?Math.sin(d4*16)*0.45:0)
d5.$5(d2,"\ud83d\udd14",D.eoH,A.c,16)
d1.restore()
d2.N(A.kA,6,c7.$1(A.d5))
d2.N(A.kA,6,c8.$2(A.c,1.6))
if(c6)for(d1=d4*14,v=1;v<=2;++v)d2.cN(B.bX(A.Jp,14+v*6+A.k.E(d1,6)),-0.9,1.8,!1,c8.$2(A.bs.j(0.9-v*0.3),1.8))
return!0
case"camera":d2.ah(D.enY,D.eoA,c8.$2(A.bu,4))
d1=d2.c
J.bq(d1.save())
d2.iq(0,c6?Math.sin(d4*0.9)*0.18:0)
d2.ap(c9.$5(-24,-14,46,22,5),d0.$3(D.f5A,A.bP,A.am))
d2.N(D.aL6,8,c7.$1(A.av))
d2.N(D.aL6,4.5,c7.$1(c6?A.aJ:A.cs))
d2.N(D.enW,2.2,c7.$1(c6&&A.o.E(A.k.bh(d4*1.6),2)===0?A.ax:A.jU))
d1.restore()
if(c6)d5.$5(d2,"REC",D.eo6,A.ax,9)
return!0
case"console":d2.ap(c9.$5(-28,-22,56,44,8),d0.$3(D.f5I,A.iZ,A.fj))
d2.ap(c9.$5(-20,-17,40,22,3),c7.$1(A.dI))
if(c6){d1=d4*2.3
d2.N(new B.q(Math.sin(d1)*14,-6+Math.cos(d4*3.1)*6),2.6,c7.$1(A.c))
t=-9+Math.sin(d1+0.4)*6
d2.au(new B.a2(-18,t,-15.6,t+8),c7.$1(A.b9))
d1=-9+Math.sin(d1-0.4)*6
d2.au(new B.a2(15.6,d1,18,d1+8),c7.$1(A.c1))}d2.N(D.enR,4,c7.$1(A.aT))
d2.N(D.ekD,2.4,c7.$1(A.ax))
d2.N(D.ekV,2.4,c7.$1(A.bg))
return!0
case"heartmon":d2.ap(c9.$5(-30,-22,60,44,6),c7.$1(A.av))
d2.ap(c9.$5(-26,-18,52,28,3),c7.$1(A.dI))
if(c6){d1=$.S()
t=B.a([],x.v)
k=new B.aE(d1.r,A.ah,c5,c5,t)
for(d1=d4*0.5,o=-25;o<=25;++o){u=A.k.E((o+25)/50-d1,1)
if(u<0.1)j=Math.sin(u/0.1*3.141592653589793)*-1
else if(u<0.14)j=0.6
else{q=u<0.2?-0.4:0
j=q}i=-4+j*11
if(o===-25){q=new B.aY(o,i)
t.push(q)
h=k.f
if(h!=null)q.ai(h)
k.a8()}else{q=new B.aq(o,i)
t.push(q)
h=k.f
if(h!=null)q.ai(h)
k.a8()}}d2.ae(k,c8.$2(A.b9,1.8))
d5.$5(d2,"72",D.ekE,A.hi,11)
d1=d4*9
d5.$5(d2,"\u2665",D.eob,A.hi.j((Math.sin(d1)+1.4)/2.4),9+Math.sin(d1)*1.2)}d2.N(D.eo0,3,c7.$1(c6?A.bg:A.bu))
return!0
case"aquarium":d1=c9.$5(-26,-20,52,40,4)
d2.ap(d1,c7.$1(A.cy.j(c6?0.5:0.3)))
d2.ap(c9.$5(-26,-20,52,40,4),c8.$2(A.ad,1.6))
d2.au(D.f5C,c7.$1(F.tX))
if(c6){d1=d4*1.1
t=Math.sin(d1)
q=d2.c
J.bq(q.save())
q.translate(t*14,-2+Math.sin(d4*2)*3)
if(Math.cos(d1)<0)d2.pe(0,-1,1)
d2.bY(B.bJ(A.I,8,14),c7.$1(A.cJ))
d1=new B.aE($.S().r,A.ah,c5,c5,B.a([],x.v))
d1.D(new B.aY(-6,0))
d1.D(new B.aq(-12,-4))
d1.D(new B.aq(-12,4))
d1.D(new B.bt())
d2.ae(d1,c7.$1(A.cf))
d2.N(D.elI,1.2,c7.$1(A.w))
q.restore()
for(d1=d4*0.7,v=0;v<5;++v){u=A.k.E(d1+v*0.2,1)
d2.N(new B.q(-18+Math.sin(u*8+v)*2,13-u*30),1.4+A.o.E(v,2),c8.$2(A.ad,1))}}return!0
case"lighthouse":d1=$.S().r
t=x.v
g=new B.aE(d1,A.ah,c5,c5,B.a([],t))
g.D(new B.aY(-9,22))
g.D(new B.aq(-5,-16))
g.D(new B.aq(5,-16))
g.D(new B.aq(9,22))
g.D(new B.bt())
d2.ae(g,d0.$3(D.f6c,A.c,A.bC))
d2.au(D.f68,c7.$1(c6?A.dE:A.bu))
q=new B.aE(d1,A.ah,c5,c5,B.a([],t))
q.D(new B.aY(-7,-22))
q.D(new B.aq(0,-29))
q.D(new B.aq(7,-22))
q.D(new B.bt())
d2.ae(q,c7.$1(A.eo))
if(c6){f=Math.sin(d3.y*0.3)
d1=new B.aE(d1,A.ah,c5,c5,B.a([],t))
d1.D(new B.aY(0,-19))
t=f*34
d1.D(new B.aq(t,-26))
d1.D(new B.aq(t,-12))
d1.D(new B.bt())
d2.ae(d1,c7.$1(A.dE.j(0.45)))
d1=c7.$1(A.dE.j(0.35))
d1.y=A.H2
d2.N(D.ek7,14,d1)}return!0
case"discoball":d2.ah(D.ek9,Q.aKY,c8.$2(A.dj,1.4))
d2.N(A.I,16,d0.$3(D.f5j,A.aQ,A.am))
for(v=0;v<8;++v){d1=-12+v*3.4
d2.ah(new B.q(-16,d1),new B.q(16,d1),c8.$2(A.dq,0.7))}for(v=0;v<5;++v){f=d3.y*0.5+v*1.26
d2.ah(new B.q(Math.cos(f)*16*0.3,Math.sin(f)*16*0.3),new B.q(Math.cos(f)*16,0),c8.$2(A.dq,0.7))}if(c6)for(d1=d4*2,t=d4*9,v=0;v<10;++v){f=d1+v*0.63
e=22+A.o.E(v,3)*6
d2.N(new B.q(Math.cos(f)*e,Math.sin(f)*e*0.8),1.8,c7.$1(D.djE[A.o.E(v,4)].j(0.5+0.5*Math.sin(t+v))))}return!0
case"robot":d2.ap(c9.$5(-14,-4,28,24,5),d0.$3(D.f5g,A.cr,A.am))
d2.ap(c9.$5(-12,-26,24,20,5),d0.$3(D.f59,A.aO,A.bM))
d2.ah(H.aL_,D.ekb,c8.$2(A.bu,1.6))
d2.N(D.ekc,2.2,c7.$1(c6?A.ax:A.bu))
d=c6&&A.k.E(d4*0.8,1)>0.08
for(p=0;p<2;++p){o=F.a5O[p]
if(c6)d1=d?A.ba:A.eR
else d1=A.cs
d2.N(new B.q(o,-17),3.2,c7.$1(d1))}d1=d2.c
J.bq(d1.save())
d1.translate(14,0)
d2.iq(0,c6?-0.6+Math.sin(d4*5)*0.6:0.3)
d2.ah(A.I,D.a85,c8.$2(A.bM,4))
d1.restore()
d2.ah(D.enH,D.eo4,c8.$2(A.bM,4))
d2.au(D.f67,c7.$1(c6?A.ba.j(0.7):A.aL))
return!0
case"toaster":a0=c6?Math.min(1,d3.ax/3):0
for(d1=-4-a0*14,p=0;p<2;++p){t=c9.$5(D.aBT[p]+1,d1,10,14,2)
q=B.ar(A.bN,A.d2,a0)
q.toString
d2.ap(t,c7.$1(q))}d2.ap(c9.$5(-24,-6,48,26,8),d0.$3(D.f5B,A.bP,A.bo))
for(p=0;p<2;++p){o=D.aBT[p]
d1=c9.$5(o,-5,12,5,2)
d2.ap(d1,c7.$1(c6?A.fx:A.av))
if(c6){d1=c9.$5(o,-5,12,5,2)
t=c7.$1(A.cJ.j(0.5))
t.y=N.oo
d2.ap(d1,t)}}d2.ah(D.el3,D.elq,c8.$2(A.av,3))
return!0
case"ledstrip":d2.ap(c9.$5(-34,-4,68,10,4),c7.$1(A.cs))
for(d1=d4*90,v=0;v<9;++v){a1=A.k.E(d1+v*40,360)
l=c6?new Ak.pb(1,a1,0.8,1).k_():A.ed
if(c6){t=c7.$1(l.j(0.45))
t.y=N.oo
d2.N(new B.q(-30+v*7.5,1),7,t)}d2.N(new B.q(-30+v*7.5,1),2.6,c7.$1(l))}d2.ap(c9.$5(-40,-2,6,6,1),c7.$1(A.dj))
return!0
case"pump":d2.ap(c9.$5(-16,-2,32,22,6),d0.$3(D.f5p,A.cy,A.FS))
d2.N(D.eoc,8,c7.$1(A.q7))
d1=d2.c
J.bq(d1.save())
d1.translate(-2,9)
d2.iq(0,d3.y)
for(v=0;v<3;++v){t=v*2.09
d2.ah(A.I,new B.q(Math.cos(t)*7,Math.sin(t)*7),c8.$2(A.fq,2.4))}d1.restore()
d1=new B.aE($.S().r,A.ah,c5,c5,B.a([],x.v))
d1.D(new B.aY(16,6))
d1.D(new B.aq(26,6))
d1.D(new B.aq(26,-20))
d1.D(new B.aq(10,-20))
d2.ae(d1,c8.$2(A.bM,4))
if(c6){for(d1=d4*0.9,v=0;v<5;++v)d2.N(new B.q(26,6-A.k.E(d1+v*0.2,1)*26),2.2,c7.$1(A.ho))
d2.N(D.eml,3.2,c7.$1(A.ho.j(0.7)))}return!0
case"hairdryer":d1=d2.c
J.bq(d1.save())
d2.iq(0,-0.15)
d2.ap(c9.$5(-26,-14,40,22,10),d0.$3(D.f5D,A.i3,A.u0))
d2.ap(c9.$5(14,-10,12,14,3),c7.$1(A.cs))
d2.ap(c9.$5(-10,6,12,22,4),c7.$1(A.ed))
d1.restore()
if(c6){for(d1=d4*3,v=0;v<4;++v){u=A.k.E(d1+v*0.25,1)
t=u*18
q=-10+v*5
d2.ah(new B.q(24+t,q),new B.q(32+t,q),c8.$2(A.c.j(1-u),1.8))}d1=c7.$1(A.cJ.j(0.4))
d1.y=N.oo
d2.N(D.ekX,8,d1)}return!0
case"headphones":d2.cN(B.bJ(A.dF,44,44),3.141592653589793,3.141592653589793,!1,c8.$2(A.bu,4))
for(d1=d4*12,p=0;p<2;++p){o=F.Ss[p]
t=o-7
d2.ap(c9.$5(t,0,14,20,6),d0.$3(new B.a2(t,0,t+14,20),A.bt,A.oe))
if(c6)for(t=o<0,v=1;v<=2;++v){q=B.bX(new B.q(o,10),10+v*5+A.k.E(d1,5))
h=t?2.2:-0.9
d2.cN(q,h,1.6,!1,c8.$2(A.eI.j(0.9-v*0.3),1.6))}}if(c6)d5.$5(d2,"\u266a",new B.q(-4,-8-A.k.E(d4*14,8)),A.kK,12)
return!0
case"smartwatch":d2.ap(c9.$5(-8,-30,16,14,3),c7.$1(A.cs))
d2.ap(c9.$5(-8,14,16,14,3),c7.$1(A.cs))
d2.ap(c9.$5(-14,-17,28,32,8),d0.$3(D.f5e,A.dj,A.ed))
d2.ap(c9.$5(-11,-14,22,26,6),c7.$1(A.dI))
if(c6){a2=new B.V(Date.now(),0,!1)
d5.$5(d2,A.a.b_(A.o.u(B.dg(a2)),2,"0")+":"+A.a.b_(A.o.u(B.fP(a2)),2,"0"),D.eki,A.b9,9.5)
j=(Math.sin(d4*9)+1)/2
d1=B.ar(A.Fw,A.hi,j)
d1.toString
d5.$5(d2,"\u2665",new B.q(-8,1),d1,8+j*2)
d5.$5(d2,""+(70+A.o.E(A.k.bh(d4*2),6)),A.dF,A.c,7)}return!0
case"tablet":d2.ap(c9.$5(-30,-22,60,44,6),c7.$1(M.nq))
d2.ap(c9.$5(-30,-22,60,44,6),c8.$2(A.bM,1.6))
a3=c9.$5(-27,-19,54,38,3)
if(c6){d1=d2.c
J.bq(d1.save())
d1.clipRRect(B.om(a3),$.nJ(),!0)
d1.translate(-27,-19)
L.LU(d2,D.fcz,d4,c5)
d1.restore()}else d2.ap(a3,c7.$1(D.w4))
return!0
case"buck":a4=c9.$5(-26,-22,52,42,5)
d2.ap(a4,d0.$3(new B.a2(a4.a,a4.b,a4.c,a4.d),A.dH,A.d9))
d2.ap(a4,c8.$2(A.aW,1.2))
d2.N(D.aLw,9,c7.$1(A.av))
d2.N(D.aLw,6,c8.$2(A.d2,2))
d2.ap(c9.$5(4,-2,14,10,2),c7.$1(A.av))
d2.ap(c9.$5(-22,-19,44,12,2),c7.$1(A.dI))
d1=A.k.ad(d3.db,1)
t=A.k.ad(c6?d3.dx:d3.e,1)
q=c6?A.b9:A.am
d5.$5(d2,d1+"\u2192"+t+"V",D.emv,q,8.2)
d2.N(D.ekM,2.4,c7.$1(c6?A.bg:A.aL))
d5.$5(d2,"IN",D.eo5,A.ad,6)
d5.$5(d2,"OUT",D.emd,A.ad,6)
return!0
case"regulator":a5=c6?A.k.F(d3.cy*Math.abs(d3.fr)/2.5,0,1):0
d1=c9.$5(-14,-26,28,22,3)
t=B.ar(A.bM,A.ax,a5)
t.toString
d2.ap(d1,c7.$1(t))
d2.N(H.a83,3,c7.$1(A.aL))
d2.ap(c9.$5(-12,-4,24,18,3),d0.$3(D.f5a,A.ed,A.i0))
d5.$5(d2,"7805",D.a8e,A.ad,8)
for(p=0;p<3;++p){d1=D.dq5[p]-1
d2.au(new B.a2(d1,14,d1+2,22),c7.$1(A.e5))}if(a5>0.2)for(d1=d4*0.9,v=0;v<3;++v){u=A.k.E(d1+v*0.33,1)
d2.N(new B.q(-6+v*6,-28-u*12),2+u*2,c7.$1(A.c.j(0.5*(1-u))))}d5.$5(d2,"5V",D.eoE,A.bl,9)
return!0
case"diode":d2.ah(D.aLA,D.aLi,c8.$2(A.e5,2.4))
d2.ap(c9.$5(-14,-7,28,14,6),c7.$1(A.az.j(0.85)))
d2.au(D.f4U,c7.$1(A.bl))
if(c6){d1=c9.$5(-14,-7,28,14,6)
t=c7.$1(A.dE.j(0.4))
t.y=A.kU
d2.ap(d1,t)}d1=new B.aE($.S().r,A.ah,c5,c5,B.a([],x.v))
d1.D(new B.aY(-8,-4))
d1.D(new B.aq(-8,4))
d1.D(new B.aq(-1,0))
d1.D(new B.bt())
d2.ae(d1,c7.$1(A.aT))
d5.$5(d2,"one way",D.enU,A.aD,8)
return!0
case"ldr":d2.ah(D.aLA,D.a8e,c8.$2(A.e5,2.4))
d2.ah(D.aLo,D.aLi,c8.$2(A.e5,2.4))
d2.N(A.I,12,c7.$1(A.d2))
d2.N(A.I,12,c8.$2(A.rz,1.6))
d1=$.S()
t=B.a([],x.v)
a6=new B.aE(d1.r,A.ah,c5,c5,t)
a6.D(new B.aY(-8,-6))
for(v=0;v<5;++v){d1=(v&1)===0?8:-8
d1=new B.aq(d1,-6+v*3)
t.push(d1)
q=a6.f
if(q!=null)d1.ai(q)
a6.a8()}d2.ae(a6,c8.$2(A.bN,1.4))
d1=B.ar(A.bu,A.dE,d3.f)
d1.toString
d5.$5(d2,"\u2600",new B.q(-6,-26),d1,14)
d5.$5(d2,""+A.k.V(20+980*(1-d3.f))+"\u03a9",D.enI,A.ad,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":switch(d1){case"lgtv":t=A.em
break
case"sonytv":t=A.rq
break
case"appletv":t=A.e5
break
default:t=F.Fz
break}a7=d1==="lgtv"||d1==="appletv"
d2.ap(c9.$5(-36,-24,72,a7?42:44,6),c7.$1(t))
t=a7?-35:-33
q=a7?-23:-21
h=a7?70:66
a3=c9.$5(t,q,h,a7?40:38,3)
t=a3.a
q=a3.b
if(c6){h=d2.c
J.bq(h.save())
h.clipRRect(B.om(a3),$.nJ(),!0)
h.translate(t,q)
L.hf1(d2,new B.av(a3.c-t,a3.d-q),d3.at,d4,d3.ax,-1)
h.restore()
d2.N(D.elt,1.6,c7.$1(A.b9))}else{d2.ap(a3,c7.$1(D.w4))
h=new B.aE($.S().r,A.ah,c5,c5,B.a([],x.v))
h.D(new B.aY(t,q))
h.D(new B.aq(t+24,q))
h.D(new B.aq(t,q+22))
h.D(new B.bt())
d2.ae(h,c7.$1(A.c.j(0.05)))}switch(d1){case"lgtv":d2.ap(c9.$5(-22,19,44,3,1.5),c7.$1(A.dj))
break
case"sonytv":for(d1=x.v,p=0;p<2;++p){o=M.hg[p]
t=$.S()
q=B.a([],d1)
t=new B.aE(t.r,A.ah,c5,c5,q)
q.push(new B.aY(o*30,20))
t.a8()
h=new B.aq(o*22,20)
q.push(h)
a8=t.f
if(a8!=null)h.ai(a8)
t.a8()
h=new B.aq(o*26,26)
q.push(h)
a8=t.f
if(a8!=null)h.ai(a8)
t.a8()
h=new B.bt()
q.push(h)
q=t.f
if(q!=null)h.ai(q)
t.a8()
d2.ae(t,c7.$1(A.dj))}d5.$5(d2,"SONY",D.en8,A.bP,5.5)
break
case"appletv":d1=new B.aE($.S().r,A.ah,c5,c5,B.a([],x.v))
d1.D(new B.aY(-8,18))
d1.D(new B.aq(8,18))
d1.D(new B.aq(12,25))
d1.D(new B.aq(-12,25))
d1.D(new B.bt())
d2.ae(d1,c7.$1(D.Z2))
d5.$5(d2,"Apple TV",D.emw,A.bu,4.8)
break
default:d2.ap(c9.$5(-34,19,68,7,3),c7.$1(D.boQ))
for(v=0;v<14;++v){d1=-32+v*4.9
d2.ah(new B.q(d1,20),new B.q(d1,25),c8.$2(A.dq,0.6))}d5.$5(d2,"B&O",D.eoz,F.tX,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":a9=D.mn.h(0,d1)
b0=a9.b===D.En
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
d2.ap(w,d0.$3(new B.a2(h,a8,b3,b4),b6,b5))
a3=c9.$5(t+2,q,b1-4,b2-4,3.5)
if(c6){t=d2.c
J.bq(t.save())
t.clipRRect(B.om(a3),$.nJ(),!0)
q=a3.a
h=a3.b
t.translate(q,h)
L.LU(d2,new B.av(a3.c-q,a3.d-h),d4,c5)
t.restore()}else d2.ap(a3,c7.$1(D.w4))
if(b0){t=a3.b
q=a3.d
d2.ah(new B.q(0,t),new B.q(0,q),c8.$2(A.w.j(c6?0.45:0.7),0.9))}if(d1==="iphonefold"||d1==="huawei")d2.ap(c9.$5(-4,a3.b+1.2,8,2.6,1.3),c7.$1(A.w))
else{d1=b0?b1/2-7:0
d2.N(new B.q(d1,a3.b+3),1.3,c7.$1(A.w))}return!0
case"ereader":d2.ap(c9.$5(-17,-28,34,52,4),c7.$1(A.ed))
d2.ap(c9.$5(-14.5,-25.5,29,45,2),c7.$1(A.bP))
if(c6){d5.$5(d2,"NGMY",D.eoK,A.av,9)
for(v=0;v<9;++v){d1=-9+v*3.6
t=A.o.E(v,4)===3?14:22
d2.au(new B.a2(-11,d1,-11+t,d1+1.4),c7.$1(A.bo))}d2.N(A.a81,1.6,c7.$1(A.av))}return!0
case"laptop":d2.ap(c9.$5(-30,-28,60,42,4),d0.$3(D.f5M,A.cr,A.bo))
b7=c9.$5(-27,-25,54,34,2)
if(c6){d1=d2.c
J.bq(d1.save())
d1.clipRRect(B.om(b7),$.nJ(),!0)
t=b7.a
q=b7.b
d1.translate(t,q)
L.LU(d2,new B.av(b7.c-t,b7.d-q),d4,c5)
d1.restore()}else d2.ap(b7,c7.$1(D.w4))
d1=new B.aE($.S().r,A.ah,c5,c5,B.a([],x.v))
d1.D(new B.aY(-38,16))
d1.D(new B.aq(38,16))
d1.D(new B.aq(34,21))
d1.D(new B.aq(-34,21))
d1.D(new B.bt())
d2.ae(d1,c7.$1(D.Z2))
d2.ap(c9.$5(-7,16,14,2,1),c7.$1(A.bo))
return!0
case"imac":d2.ap(c9.$5(-32,-28,64,46,5),d0.$3(D.f5Q,A.bO,A.cr))
b8=c9.$5(-29,-25,58,33,2)
if(c6){d1=d2.c
J.bq(d1.save())
d1.clipRRect(B.om(b8),$.nJ(),!0)
t=b8.a
q=b8.b
d1.translate(t,q)
L.LU(d2,new B.av(b8.c-t,b8.d-q),d4,c5)
d1.restore()}else d2.ap(b8,c7.$1(D.w4))
d2.N(D.aKT,2,c7.$1(A.bM))
d1=new B.aE($.S().r,A.ah,c5,c5,B.a([],x.v))
d1.D(new B.aY(-6,18))
d1.D(new B.aq(6,18))
d1.D(new B.aq(10,26))
d1.D(new B.aq(-10,26))
d1.D(new B.bt())
d2.ae(d1,c7.$1(D.Z2))
return!0
case"monitor":d2.ap(c9.$5(-34,-28,68,40,3),c7.$1(A.em))
b9=c9.$5(-32,-26,64,36,2)
if(c6){d1=d2.c
J.bq(d1.save())
d1.clipRRect(B.om(b9),$.nJ(),!0)
t=b9.a
q=b9.b
d1.translate(t,q)
L.LU(d2,new B.av(b9.c-t,b9.d-q),d4,c5)
d1.restore()}else d2.ap(b9,c7.$1(D.w4))
d2.au(D.f5X,c7.$1(A.bo))
d2.ap(c9.$5(-14,22,28,3.5,1.5),c7.$1(A.dj))
return!0
case"projector":if(c6){d1=new B.aE($.S().r,A.ah,c5,c5,B.a([],x.v))
d1.D(new B.aY(14,4))
d1.D(new B.aq(-32,-42))
d1.D(new B.aq(34,-42))
d1.D(new B.bt())
d2.ae(d1,c7.$1(A.dE.j(0.16)))
c0=c9.$5(-32,-46,66,26,2)
d1=d2.c
J.bq(d1.save())
d1.clipRRect(B.om(c0),$.nJ(),!0)
t=c0.a
q=c0.b
d1.translate(t,q)
L.LU(d2,new B.av(c0.c-t,c0.d-q),d4,c5)
d1.restore()}d2.ap(c9.$5(-26,-4,52,24,6),d0.$3(D.f5E,A.iB,A.dj))
d2.N(D.aL4,7,c7.$1(A.av))
d2.N(D.aL4,4,c7.$1(c6?A.dE:A.cs))
for(v=0;v<4;++v){d1=-20+v*4
d2.ah(new B.q(d1,2),new B.q(d1,14),c8.$2(A.dq,1))}return!0
case"carscreen":d2.ap(c9.$5(-34,-10,68,32,12),c7.$1(A.av))
c1=c9.$5(-30,-20,60,28,8)
d2.ap(c1,c7.$1(M.nq))
d2.ap(c1,c8.$2(A.bu,1.2))
if(c6){c2=new B.aE($.S().r,A.ah,c5,c5,B.a([],x.v))
c2.D(new B.aY(-26,4))
c2.D(new B.c4(-10,-14+Math.sin(d4)*3,6,-6))
c2.D(new B.aq(22,-16))
d2.ae(c2,c8.$2(A.aJ,2.2))
d1=A.k.E(d4*6,48)
d2.N(new B.q(-26+d1,4-d1*0.1),2.4,c7.$1(A.b9))
d5.$5(d2,""+(88+A.o.E(A.k.bh(d4*2),5)),H.aLn,A.c,10)
d5.$5(d2,"km/h",D.emj,A.aD,5)}return!0
case"vision":c3=c9.$5(-32,-14,64,28,13)
d2.ap(c3,d0.$3(new B.a2(c3.a,c3.b,c3.c,c3.d),A.dj,A.ed))
c4=c9.$5(-29,-11,58,22,10)
if(c6){d1=d2.c
J.bq(d1.save())
d1.clipRRect(B.om(c4),$.nJ(),!0)
t=c4.a
q=c4.b
d1.translate(t,q)
L.LU(d2,new B.av(c4.c-t,c4.d-q),d4,c5)
d1.restore()
d1=c7.$1(A.bt.j(0.2))
d1.y=A.mR
d2.N(A.I,26,d1)}else d2.ap(c4,c7.$1(A.R))
d2.ah(D.eoj,D.eoo,c8.$2(A.bo,4))
d2.ah(D.elv,D.elL,c8.$2(A.bo,4))
return!0}return!1},
fU9:function fU9(){},
fUb:function fUb(){},
fUc:function fUc(){},
fUa:function fUa(){},
hhT(d,e,f,g){return new C.ajy(d,g,f,e)},
Gg(d,e,f){return new C.bcC(d,e,f)},
ajy:function ajy(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
ajz:function ajz(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.m4$=i
_.f9$=j
_.h6$=k
_.bx$=l
_.aa$=m
_.c=_.a=null},
bJi:function bJi(d,e){this.a=d
this.b=e},
bJj:function bJj(d){this.a=d},
bJh:function bJh(d){this.a=d},
bJk:function bJk(){},
bJl:function bJl(d){this.a=d},
bJm:function bJm(d,e,f){this.a=d
this.b=e
this.c=f},
bJg:function bJg(d,e){this.a=d
this.b=e},
bJe:function bJe(d,e){this.a=d
this.b=e},
bJf:function bJf(d,e,f){this.a=d
this.b=e
this.c=f},
bJ8:function bJ8(d,e){this.a=d
this.b=e},
bJ9:function bJ9(){},
bJa:function bJa(d,e){this.a=d
this.b=e},
bJb:function bJb(d,e){this.a=d
this.b=e},
bJc:function bJc(d){this.a=d},
bJd:function bJd(d){this.a=d},
bJB:function bJB(d){this.a=d},
bJC:function bJC(){},
bIM:function bIM(){},
bJD:function bJD(d,e){this.a=d
this.b=e},
bJA:function bJA(d,e,f){this.a=d
this.b=e
this.c=f},
bJv:function bJv(d){this.a=d},
bJs:function bJs(d,e,f){this.a=d
this.b=e
this.c=f},
bJt:function bJt(d,e){this.a=d
this.b=e},
bJw:function bJw(d){this.a=d},
bJq:function bJq(d,e){this.a=d
this.b=e},
bJr:function bJr(d,e){this.a=d
this.b=e},
bJu:function bJu(d){this.a=d},
bJx:function bJx(d){this.a=d},
bJo:function bJo(d,e){this.a=d
this.b=e},
bJp:function bJp(d,e){this.a=d
this.b=e},
bJy:function bJy(d){this.a=d},
bJn:function bJn(d){this.a=d},
bJz:function bJz(d){this.a=d},
bIN:function bIN(d,e){this.a=d
this.b=e},
bJ5:function bJ5(d,e){this.a=d
this.b=e},
bJ7:function bJ7(d,e){this.a=d
this.b=e},
bJ6:function bJ6(d,e){this.a=d
this.b=e},
bIT:function bIT(d,e){this.a=d
this.b=e},
bIU:function bIU(d){this.a=d},
bIS:function bIS(d){this.a=d},
bIV:function bIV(d,e,f){this.a=d
this.b=e
this.c=f},
bIR:function bIR(d,e){this.a=d
this.b=e},
bIY:function bIY(d,e){this.a=d
this.b=e},
bIZ:function bIZ(d,e){this.a=d
this.b=e},
bJ_:function bJ_(d,e){this.a=d
this.b=e},
bJ0:function bJ0(d,e,f){this.a=d
this.b=e
this.c=f},
bIQ:function bIQ(d,e){this.a=d
this.b=e},
bJ1:function bJ1(d,e,f){this.a=d
this.b=e
this.c=f},
bIP:function bIP(d,e){this.a=d
this.b=e},
bJ2:function bJ2(d,e,f){this.a=d
this.b=e
this.c=f},
bIO:function bIO(d,e){this.a=d
this.b=e},
bJ3:function bJ3(d){this.a=d},
bJ4:function bJ4(d){this.a=d},
bIW:function bIW(d){this.a=d},
bIX:function bIX(d){this.a=d},
bcC:function bcC(d,e,f){this.a=d
this.b=e
this.c=f},
fqT:function fqT(){},
fqU:function fqU(){},
fqV:function fqV(){},
fqG:function fqG(){},
fqW:function fqW(){},
fqF:function fqF(){},
fqX:function fqX(){},
fqK:function fqK(){},
fqE:function fqE(){},
fqL:function fqL(){},
fqD:function fqD(){},
fqM:function fqM(){},
fqC:function fqC(){},
fqN:function fqN(){},
fqA:function fqA(){},
fqB:function fqB(){},
fqO:function fqO(){},
fqy:function fqy(){},
fqz:function fqz(){},
fqP:function fqP(){},
fqx:function fqx(){},
W1:function W1(d){this.a=d},
aEH:function aEH(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
e_H:function e_H(d,e){this.a=d
this.b=e},
e_Q:function e_Q(d){this.a=d},
e_R:function e_R(){},
e_S:function e_S(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e_T:function e_T(){},
e_G:function e_G(d){this.a=d},
e_F:function e_F(d,e,f){this.a=d
this.b=e
this.c=f},
e_E:function e_E(d,e){this.a=d
this.b=e},
e_C:function e_C(d){this.a=d},
e_D:function e_D(){},
e_P:function e_P(d){this.a=d},
e_O:function e_O(d){this.a=d},
e_M:function e_M(d,e){this.a=d
this.b=e},
e_K:function e_K(d){this.a=d},
e_L:function e_L(){},
e_N:function e_N(d,e,f){this.a=d
this.b=e
this.c=f},
e_I:function e_I(d,e){this.a=d
this.b=e},
e_J:function e_J(){},
e_V:function e_V(d){this.a=d},
e_W:function e_W(d,e){this.a=d
this.b=e},
e_U:function e_U(){},
e_X:function e_X(d,e){this.a=d
this.b=e},
e_Y:function e_Y(d){this.a=d},
e_Z:function e_Z(d){this.a=d},
ayK:function ayK(d,e){this.c=d
this.a=e},
baL:function baL(d,e){var _=this
_.d=$
_.bx$=d
_.aa$=e
_.c=_.a=null},
cKu:function cKu(d){this.a=d},
baK:function baK(d,e){this.b=d
this.a=e},
cKt:function cKt(d){this.a=d},
az3:function az3(){},
az4:function az4(){},
aLa:function aLa(){},
bzi:function bzi(){},
io3(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bX(A.vj,23)
$.S()
b8=B.K()
b8.r=A.av.gp(0)
b9.N(A.vj,25,b8)
b8=B.K()
b8.sar(D.exr.aG(0,v))
b9.N(A.vj,23,b8)
for(u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
b8=Math.cos(t)
s=Math.sin(t)
r=Math.cos(t)
q=Math.sin(t)
p=new B.ao(A.Q,A.N,A.T,A.U,A.S)
p.r=A.bl.gp(0)
p.c=A.o.E(u,5)===0?1.8:1
b9.ah(new B.q(b8*17,s*17-2),new B.q(r*21,q*21-2),p)}o=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.k.F(o/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=B.K()
r.r=A.bC.gp(0)
r.c=2
r.d=A.bA
b9.ah(A.vj,new B.q(b8*18,s*18-2),r)
r=B.K()
r.r=A.bl.gp(0)
b9.N(A.vj,3,r)
c2.$5(b9,w?"V":"A",D.eor,A.bl,12)
c2.$5(b9,w?A.k.ad(o,1)+" V":""+A.k.V(o*1000)+" mA",D.enO,A.av,9.5)
return!0
case"fan":b8=B.br(D.f56,A.hM)
$.S()
s=B.K()
s.r=A.bu.gp(0)
b9.ap(b8,s)
s=B.K()
s.r=A.am.gp(0)
b9.au(D.f5Y,s)
s=B.K()
s.r=A.R.j(0.6).gp(0)
b9.N(H.vk,22,s)
for(b8=b9.c,u=0;u<4;++u){J.bq(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.bJ(A.aKX,18,10)
r=new B.ao(A.Q,A.N,A.T,A.U,A.S)
r.r=A.ho.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
b9.bY(s,r)
b8.restore()}b8=B.K()
b8.r=A.bp.gp(0)
b9.N(H.vk,4,b8)
b8=B.K()
b8.b=A.aa
b8.c=2
b8.r=A.cr.gp(0)
b9.N(H.vk,22,b8)
b8=B.K()
b8.b=A.aa
b8.c=0.8
b8.r=A.jV.gp(0)
b9.N(H.vk,14,b8)
return!0
case"speaker":n=B.br(D.aR9,A.qY)
$.S()
b8=B.K()
b8.sar(D.asx.aG(0,new B.a2(n.a,n.b,n.c,n.d)))
b9.ap(n,b8)
m=b7?Math.sin(c1*40)*1.6:0
b8=B.K()
b8.sar(D.exO.aG(0,B.bX(A.cA,15)))
b9.N(A.cA,14+m,b8)
b8=B.K()
b8.r=A.dj.gp(0)
b9.N(A.cA,5,b8)
b8=B.K()
b8.r=A.bo.gp(0)
b9.N(H.a82,5+m*0.4,b8)
if(b7)for(b8=c1*18,u=1;u<=3;++u){s=B.bX(D.el2,6+u*6+A.k.E(b8,6))
r=new B.ao(A.Q,A.N,A.T,A.U,A.S)
r.b=A.aa
r.c=1.8
r.r=A.c1.j(0.9-u*0.2).gp(0)
b9.cN(s,-0.8,1.6,!1,r)}return!0
case"clock":l=B.br(D.f5P,A.qY)
$.S()
b8=B.K()
b8.sar(D.c6Z.aG(0,new B.a2(l.a,l.b,l.c,l.d)))
b9.ap(l,b8)
b8=B.br(D.aRb,A.ij)
s=B.K()
s.r=A.i0.gp(0)
b9.ap(b8,s)
if(b7){k=new B.V(Date.now(),0,!1)
j=B.FA(k)<500?":":" "
i=A.a.b_(A.o.u(B.dg(k)),2,"0")
h=A.a.b_(A.o.u(B.fP(k)),2,"0")
b8=B.K()
b8.r=A.b9.j(0.12).gp(0)
b9.au(D.aRb,b8)
c2.$5(b9,i+j+h,D.eo9,A.b9,21)}b8=B.K()
b8.r=A.cr.gp(0)
b9.N(D.eo7,2.4,b8)
b8=B.K()
b8.r=A.cr.gp(0)
b9.N(D.el7,2.4,b8)
return!0
case"calculator":l=B.br(D.f5u,A.hN)
$.S()
b8=B.K()
b8.sar(D.c6J.aG(0,new B.a2(l.a,l.b,l.c,l.d)))
b9.ap(l,b8)
b8=B.br(D.f5n,A.hv)
s=B.K()
s.r=(b7?A.Ze:D.br8).gp(0)
b9.ap(b8,s)
if(b7)c2.$5(b9,"3.14159",D.enN,A.XZ,10.5)
for(g=0;g<4;++g)for(b8=-6+g*8,s=b8+6,f=0;f<4;++f){r=-15+f*8
r=B.br(new B.a2(r,b8,r+6,s),A.Um)
$.S()
q=new B.ao(A.Q,A.N,A.T,A.U,A.S)
q.r=(f===3?A.cf:A.bP).gp(0)
b9.ap(r,q)}return!0
case"phone":l=B.br(D.f5i,A.hN)
$.S()
b8=B.K()
b8.r=M.nq.gp(0)
b9.ap(l,b8)
b8=B.K()
b8.b=A.aa
b8.c=1.9
b8.r=D.ajP.gp(0)
b9.ap(l,b8)
e=B.br(D.f58,A.hM)
if(b7){b8=B.K()
b8.sar(D.c8i.aG(0,new B.a2(e.a,e.b,e.c,e.d)))
b9.ap(e,b8)
b8=b9.c
J.bq(b8.save())
b8.clipRRect(B.om(e),$.nJ(),!0)
b8.translate(-12,-25)
L.LU(b9,D.fcb,c1,b6)
b8.restore()
d=A.k.E(c1*0.12,1)
b8=B.br(D.f55,A.hv)
s=B.K()
s.r=A.aT.gp(0)
b9.ap(b8,s)
s=B.K()
s.r=A.b9.gp(0)
b9.au(new B.a2(-10,14.5,-10+20*d,16.9),s)
c2.$5(b9,"\u26a1"+A.k.V(d*100)+"%",D.emP,A.c,6)}else{b8=B.K()
b8.r=D.w4.gp(0)
b9.ap(e,b8)}b8=B.br(D.f6d,D.exW)
s=B.K()
s.r=A.w.gp(0)
b9.ap(b8,s)
return!0
case"router":l=B.br(D.f5O,A.n3)
$.S()
b8=B.K()
b8.sar(D.c7f.aG(0,new B.a2(l.a,l.b,l.c,l.d)))
b9.ap(l,b8)
for(a0=0;a0<2;++a0){a1=F.Ss[a0]
b8=a1<0?-4:4
s=new B.ao(A.Q,A.N,A.T,A.U,A.S)
s.r=A.cs.gp(0)
s.c=4
s.d=A.bA
b9.ah(new B.q(a1,-4),new B.q(a1+b8,-28),s)}for(u=0;u<4;++u){if(b7)a2=A.o.E(A.k.bh(c1*(3+u*1.3)),2)===0||u===0
else a2=!1
b8=new B.ao(A.Q,A.N,A.T,A.U,A.S)
b8.r=(a2?A.bg:A.aL).gp(0)
b9.N(new B.q(-15+u*10,11),2.6,b8)}if(b7)for(b8=c1*10,u=1;u<=3;++u){s=B.bX(H.vk,8+u*6+A.k.E(b8,6))
r=new B.ao(A.Q,A.N,A.T,A.U,A.S)
r.b=A.aa
r.c=1.8
r.r=A.hm.j(0.9-u*0.2).gp(0)
b9.cN(s,-2.3,1.5,!1,r)}return!0
case"siren":a3=b7?(Math.sin(c1*14)+1)/2:0
b8=B.br(D.f5t,A.hM)
s=$.S()
r=B.K()
r.r=A.ed.gp(0)
b9.ap(b8,r)
if(b7){b8=B.K()
b8.r=A.ax.j(0.5*a3).gp(0)
b8.y=A.yN
b9.N(A.vj,34,b8)}a4=new B.aE(s.r,A.ah,b6,b6,B.a([],x.v))
a4.D(new B.aY(-16,12))
a4.D(new B.aq(-16,-2))
a4.D(new B.c4(0,-30,16,-2))
a4.D(new B.aq(16,12))
a4.D(new B.bt())
b8=B.K()
b8.r=B.ar(A.eo,D.bic,a3).gp(0)
b9.ae(a4,b8)
b8=B.K()
b8.b=A.aa
b8.c=1.4
b8.r=A.bV.gp(0)
b9.ae(a4,b8)
if(b7){b8=b9.c
J.bq(b8.save())
b8.translate(0,-2)
b9.iq(0,c1*7)
s=B.K()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.ah(A.I,H.a82,s)
b8.restore()}return!0
case"toycar":a5=b7?Math.sin(c1*30)*0.8:0
b8=b9.c
J.bq(b8.save())
b8.translate(0,a5)
s=$.S().r
r=x.v
l=new B.aE(s,A.ah,b6,b6,B.a([],r))
l.D(new B.aY(-28,8))
l.D(new B.aq(-28,-2))
l.D(new B.aq(-16,-4))
l.D(new B.aq(-10,-16))
l.D(new B.aq(10,-16))
l.D(new B.aq(18,-4))
l.D(new B.aq(28,-2))
l.D(new B.aq(28,8))
l.D(new B.bt())
q=B.K()
q.sar(D.c5j.aG(0,D.f5H))
b9.ae(l,q)
q=new B.aE(s,A.ah,b6,b6,B.a([],r))
q.D(new B.aY(-8,-4))
q.D(new B.aq(-4,-13))
q.D(new B.aq(4,-13))
q.D(new B.aq(4,-4))
q.D(new B.bt())
p=B.K()
p.r=A.fq.gp(0)
b9.ae(q,p)
r=new B.aE(s,A.ah,b6,b6,B.a([],r))
r.D(new B.aY(8,-4))
r.D(new B.aq(8,-13))
r.D(new B.aq(11,-13))
r.D(new B.aq(15,-4))
r.D(new B.bt())
s=B.K()
s.r=A.fq.gp(0)
b9.ae(r,s)
for(a0=0;a0<2;++a0){a1=F.aBU[a0]
s=new B.ao(A.Q,A.N,A.T,A.U,A.S)
s.r=A.av.gp(0)
b9.N(new B.q(a1,10),7.5,s)
J.bq(b8.save())
b8.translate(a1,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.ao(A.Q,A.N,A.T,A.U,A.S)
q.r=A.bP.gp(0)
q.c=1.6
b9.ah(A.I,new B.q(r*5.5,s*5.5),q)}b8.restore()}b8.restore()
if(b7)for(b8=c1*40,u=0;u<3;++u){s=A.k.E(b8+u*8,14)
r=-4+u*5
q=new B.ao(A.Q,A.N,A.T,A.U,A.S)
q.r=A.aD.gp(0)
q.c=1.6
b9.ah(new B.q(-34-s,r),new B.q(-42-s,r),q)}return!0
case"kettle":b8=$.S().r
s=x.v
l=new B.aE(b8,A.ah,b6,b6,B.a([],s))
l.D(new B.aY(-18,20))
l.D(new B.aq(-14,-12))
l.D(new B.c4(0,-20,14,-12))
l.D(new B.aq(18,20))
l.D(new B.bt())
r=B.K()
r.sar(D.c6o.aG(0,D.f5s))
b9.ae(l,r)
r=new B.aE(b8,A.ah,b6,b6,B.a([],s))
r.D(new B.aY(14,-10))
r.D(new B.aq(30,-22))
r.D(new B.aq(32,-18))
r.D(new B.aq(16,-4))
r.D(new B.bt())
q=B.K()
q.r=A.e5.gp(0)
b9.ae(r,q)
s=new B.aE(b8,A.ah,b6,b6,B.a([],s))
s.D(new B.aY(-14,-8))
s.D(new B.c4(-34,-6,-18,12))
b8=B.K()
b8.b=A.aa
b8.c=5
b8.r=A.av.gp(0)
b9.ae(s,b8)
b8=B.K()
if(b7){s=B.ar(A.cJ,A.ua,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.ed
b8.r=s.gp(0)
b9.au(D.f5r,b8)
if(b7){b8=B.K()
b8.r=A.cJ.j(0.3).gp(0)
b8.y=A.mR
b9.N(A.aKV,24,b8)
for(b8=c1*0.9,u=0;u<4;++u){a6=A.k.E(b8+u*0.25,1)
s=Math.sin(a6*9+u)
r=new B.ao(A.Q,A.N,A.T,A.U,A.S)
r.r=A.c.j(0.6*(1-a6)).gp(0)
b9.N(new B.q(30+s*4,-26-a6*26),3+a6*5,r)}}b8=B.K()
b8.r=A.av.gp(0)
b9.N(D.ek5,3,b8)
return!0
case"lamp":if(b7){u=A.k.F(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aE($.S().r,A.ah,b6,b6,B.a([],x.v))
b8.D(new B.aY(-10,-14))
b8.D(new B.aq(-30,24))
b8.D(new B.aq(10,24))
b8.D(new B.aq(8,-14))
b8.D(new B.bt())
s=B.K()
s.r=A.dE.j(0.28*u).gp(0)
b9.ae(b8,s)
s=B.K()
s.r=A.dE.j(0.5*u).gp(0)
s.y=U.H0
b9.N(D.eod,24,s)}b8=B.br(D.f66,A.hM)
s=$.S()
r=B.K()
r.r=A.ed.gp(0)
b9.ap(b8,r)
r=B.K()
r.r=A.dj.gp(0)
r.c=3
r.d=A.bA
b9.ah(D.ekl,D.aL7,r)
r=B.K()
r.r=A.dj.gp(0)
r.c=3
r.d=A.bA
b9.ah(D.aL7,D.eoe,r)
a7=new B.aE(s.r,A.ah,b6,b6,B.a([],x.v))
a7.D(new B.aY(-14,-16))
a7.D(new B.aq(6,-26))
a7.D(new B.aq(10,-12))
a7.D(new B.aq(-10,-6))
a7.D(new B.bt())
s=B.K()
s.r=(b7?A.aU:A.kq).gp(0)
b9.ae(a7,s)
b8=B.K()
b8.r=(b7?A.c:A.bo).gp(0)
b9.N(D.eoh,4,b8)
return!0
case"lights":b8=$.S().r
s=x.v
a8=new B.aE(b8,A.ah,b6,b6,B.a([],s))
a8.D(new B.aY(-34,-6))
a8.D(new B.c4(0,22,34,-6))
r=B.K()
r.b=A.aa
r.c=2
r.r=A.hl.gp(0)
b9.ae(a8,r)
for(r=c1*2.4,u=0;u<5;++u){a9=(u+0.5)/5
q=-34+68*a9
p=-6+4*a9*(1-a9)*4*4.2/1*0.75+0
b0=b7&&A.k.E(r+u*0.7,1.8)<1.1
if(b0){b1=new B.ao(A.Q,A.N,A.T,A.U,A.S)
b1.r=D.a4Q[u].j(0.6).gp(0)
b1.y=A.H2
b9.N(new B.q(q+0,p+6),12,b1)}b1=B.a([],s)
b2=new B.aE(b8,A.ah,b6,b6,b1)
b1.push(new B.aY(q-3,p))
b2.a8()
b3=new B.aq(q+3,p)
b1.push(b3)
b4=b2.f
if(b4!=null)b3.ai(b4)
b2.a8()
b3=p+11
b4=new B.aq(q+5,b3)
b1.push(b4)
b5=b2.f
if(b5!=null)b4.ai(b5)
b2.a8()
q=new B.c4(q,p+17,q-5,b3)
b1.push(q)
p=b2.f
if(p!=null)q.ai(p)
b2.a8()
q=new B.bt()
b1.push(q)
p=b2.f
if(p!=null)q.ai(p)
b2.a8()
q=new B.ao(A.Q,A.N,A.T,A.U,A.S)
if(b0)p=D.a4Q[u]
else{p=B.ar(D.a4Q[u],A.w,0.65)
p.toString}q.r=p.gp(0)
b9.ae(b2,q)}return!0}return C.io1(b9,c0,c1,c2)},
fQ:function fQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hd4(d){var w=D.mn.h(0,d)
return(w==null?null:w.b)===D.Ar},
ipd(d,e,f){return B.a6(d,!1).cd(B.v8(null,!1,!0,!0,new C.fZ1(e,f),A.eS,null,A.pf,new C.fZ2(),x.H))},
K4:function K4(d,e){this.a=d
this.b=e},
mo:function mo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fZ1:function fZ1(d,e){this.a=d
this.b=e},
fZ2:function fZ2(){},
VL:function VL(d,e,f){this.c=d
this.d=e
this.a=f},
blm:function blm(d,e){var _=this
_.d=$
_.e=null
_.bx$=d
_.aa$=e
_.c=_.a=null},
dWR:function dWR(d){this.a=d},
dWQ:function dWQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dWO:function dWO(){},
dWP:function dWP(d){this.a=d},
dWN:function dWN(d){this.a=d},
dWM:function dWM(d,e){this.a=d
this.b=e},
dWL:function dWL(d,e){this.a=d
this.b=e},
dWK:function dWK(d){this.a=d},
dWJ:function dWJ(d){this.a=d},
dWF:function dWF(d){this.a=d},
dWE:function dWE(d){this.a=d},
dWI:function dWI(d,e,f){this.a=d
this.b=e
this.c=f},
dWH:function dWH(d){this.a=d},
dWG:function dWG(d){this.a=d},
bxk:function bxk(d,e,f){this.b=d
this.c=e
this.a=f},
afq:function afq(d,e,f){this.b=d
this.c=e
this.a=f},
aMX:function aMX(){},
a1O(d,e,f,g,h,i){return new C.bw6(d,e,f,g,h,i)},
bw6:function bw6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
frn:function frn(){},
fro:function fro(){},
frp:function frp(){},
frq:function frq(){},
frr:function frr(){},
frs:function frs(){},
frt:function frt(){},
fru:function fru(){},
a95:function a95(d){this.a=d},
clP:function clP(d){this.a=d},
clQ:function clQ(){},
clO:function clO(d,e){this.a=d
this.b=e},
clN:function clN(d){this.a=d},
Xl:function Xl(d){this.a=d},
aGa:function aGa(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.h5$=f
_.m4$=g
_.f9$=h
_.h6$=i
_.bx$=j
_.aa$=k
_.c=_.a=null},
eT8:function eT8(d){this.a=d},
eT4:function eT4(d){this.a=d},
eT3:function eT3(d,e){this.a=d
this.b=e},
eT6:function eT6(d,e){this.a=d
this.b=e},
eT5:function eT5(d,e){this.a=d
this.b=e},
eT7:function eT7(d){this.a=d},
bxw:function bxw(d,e,f){this.b=d
this.c=e
this.a=f},
W9:function W9(d){this.a=d},
blx:function blx(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.h5$=d
_.m4$=e
_.f9$=f
_.h6$=g
_.bx$=h
_.aa$=i
_.c=_.a=null},
e2G:function e2G(){},
e2H:function e2H(){},
e2B:function e2B(d,e){this.a=d
this.b=e},
e2D:function e2D(d,e){this.a=d
this.b=e},
e2E:function e2E(d){this.a=d},
e2C:function e2C(d){this.a=d},
e2F:function e2F(d){this.a=d},
bsd:function bsd(d,e,f){this.b=d
this.c=e
this.a=f},
Vm:function Vm(d){this.a=d},
bl8:function bl8(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.h5$=d
_.m4$=e
_.f9$=f
_.h6$=g
_.bx$=h
_.aa$=i
_.c=_.a=null},
dOn:function dOn(){},
dOo:function dOo(){},
dOi:function dOi(){},
dOl:function dOl(d,e){this.a=d
this.b=e},
dOk:function dOk(d,e){this.a=d
this.b=e},
dOm:function dOm(d){this.a=d},
dOj:function dOj(d){this.a=d},
aJA:function aJA(d,e,f){this.a=d
this.b=e
this.c=f},
W0:function W0(d){this.a=d},
blo:function blo(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
e_b:function e_b(d,e){this.a=d
this.b=e},
e_c:function e_c(d){this.a=d},
e_a:function e_a(d,e){this.a=d
this.b=e},
e_d:function e_d(d){this.a=d},
e_9:function e_9(d,e){this.a=d
this.b=e},
e_e:function e_e(d){this.a=d},
e_8:function e_8(d,e){this.a=d
this.b=e},
e_f:function e_f(d,e){this.a=d
this.b=e},
e_7:function e_7(d,e){this.a=d
this.b=e},
e_g:function e_g(d){this.a=d},
e_6:function e_6(d,e){this.a=d
this.b=e},
e_h:function e_h(d){this.a=d},
e_5:function e_5(d){this.a=d},
e_i:function e_i(d){this.a=d},
e_4:function e_4(d){this.a=d},
e_j:function e_j(d){this.a=d},
e_k:function e_k(d){this.a=d},
e_3:function e_3(d){this.a=d},
bnq:function bnq(d,e,f){this.b=d
this.c=e
this.a=f},
WJ:function WJ(d){this.a=d},
aFu:function aFu(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
eq_:function eq_(d,e){this.a=d
this.b=e},
eq0:function eq0(d,e,f){this.a=d
this.b=e
this.c=f},
epZ:function epZ(d,e,f){this.a=d
this.b=e
this.c=f},
eq1:function eq1(d){this.a=d},
epY:function epY(d){this.a=d},
eq5:function eq5(d){this.a=d},
eq4:function eq4(d,e){this.a=d
this.b=e},
eq3:function eq3(d,e){this.a=d
this.b=e},
eq6:function eq6(d,e){this.a=d
this.b=e},
eq2:function eq2(d,e){this.a=d
this.b=e},
eq7:function eq7(d){this.a=d},
WT:function WT(d){this.a=d},
aFP:function aFP(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eAM:function eAM(d){this.a=d},
eAN:function eAN(d){this.a=d},
eAK:function eAK(d,e){this.a=d
this.b=e},
eAL:function eAL(d){this.a=d},
eAJ:function eAJ(d){this.a=d},
eAO:function eAO(d){this.a=d},
eAP:function eAP(d){this.a=d},
eAQ:function eAQ(d){this.a=d},
eAR:function eAR(d,e){this.a=d
this.b=e},
Xc:function Xc(d){this.a=d},
bmE:function bmE(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eOD:function eOD(){},
eOM:function eOM(){},
eOI:function eOI(d){this.a=d},
eOH:function eOH(){},
eOJ:function eOJ(d,e){this.a=d
this.b=e},
eOG:function eOG(d,e){this.a=d
this.b=e},
eOK:function eOK(d){this.a=d},
eOF:function eOF(d,e){this.a=d
this.b=e},
eOL:function eOL(d){this.a=d},
eOE:function eOE(d){this.a=d},
WI:function WI(d){this.a=d},
bm8:function bm8(d,e,f,g,h,i,j,k){var _=this
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
_.m4$=g
_.f9$=h
_.h6$=i
_.bx$=j
_.aa$=k
_.c=_.a=null},
eoF:function eoF(){},
eoG:function eoG(){},
eoy:function eoy(d){this.a=d},
eox:function eox(d){this.a=d},
eoz:function eoz(d){this.a=d},
eow:function eow(d){this.a=d},
eoA:function eoA(d){this.a=d},
eov:function eov(d){this.a=d},
eoB:function eoB(d,e){this.a=d
this.b=e},
eou:function eou(d,e){this.a=d
this.b=e},
eoC:function eoC(d){this.a=d},
eot:function eot(d,e){this.a=d
this.b=e},
eoD:function eoD(d){this.a=d},
eos:function eos(d,e){this.a=d
this.b=e},
eoE:function eoE(d){this.a=d},
eor:function eor(d,e){this.a=d
this.b=e},
bf0:function bf0(d,e,f){this.c=d
this.d=e
this.a=f},
aML:function aML(){},
bze:function bze(){},
aN3:function aN3(){},
bzk:function bzk(){},
aNw:function aNw(){},
bzt:function bzt(){},
aNX:function aNX(){},
bzC:function bzC(){},
JB(d,e,f,g){var w,v,u,t,s,r,q,p=$.at4
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.J)(e),++w)E.mm(d,e[w],f,g)
return}for(p=B.cW(e,0,B.dA(4,"count",x.S),B.T(e).c),v=p.$ti,p=new B.bO(p,p.gJ(0),v.k("bO<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)E.mm(d,s,f,g)
else B.bQ(new B.bd(1000*q),new C.clL(d,s,f,g),u)}},
cjj(d){return C.hUO(d)},
hUO(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$cjj=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$cjj)
case 7:r=f
q=B.aT(J.t(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.U(x.N,x.z)
w=1
break}p=A.Y.aS(0,q,null)
o=x.N
n=x.z
o=x.f.b(p)?B.a3(p,o,n):B.U(o,n)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
u=B.U(x.N,x.z)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$cjj,v)},
b2H(d,e){return C.hUP(d,e)},
hUP(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b2H=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b2H)
case 6:s=g
w=7
return B.b(s.aB("String","ngmy_play_progress_v1_"+d,A.Y.az(e,null)),$async$b2H)
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
return B.i($async$b2H,v)},
clL:function clL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ieS(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.U(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.x)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.J)(w),++q){p=w[q]
u.push(B.I(["k",p.b,"x",B.oi(A.k.ad(p.c,4)),"y",B.oi(A.k.ad(p.d,4)),"v",p.e,"l",B.oi(A.k.ad(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.oi(A.k.ad(p.as,3)),"ch",p.at,"vc",B.oi(A.k.ad(p.z,3)),"s",B.oi(A.k.ad(p.ch,2))],s,r))}w=B.a([],x.U)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.J)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.C(f,B.a4(f).k("co.E"))
A.d.fh(l)
return A.Y.az(B.I(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
ior(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.Y.aS(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a9(h)
A.d.a9(a6.b)
v=B.a([],x.fs)
g=x.L
f=g.a(J.t(w,"parts"))
f=J.aX(f==null?A.cx:f)
while(f.C()){u=f.gR(f)
t=i.a(u)
e=B.aT(J.t(t,"k"))
s=e==null?"":e
if(!$.qz().an(0,s)){J.c8(v,null)
continue}d=s
a0=B.aK(J.t(t,"x"))
if(a0==null)a0=0.5
a1=B.aK(J.t(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.tT(a2,d,a0,a1)
a3.arR(a2,d,a0,a1)
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
d=B.k0(J.t(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.k0(J.t(t,"b"))
r.x=d===!0
d=B.aT(J.t(t,"bw"))
if(d==null)d=""
r.ay=d
d=B.aK(J.t(t,"c"))
if(d==null)d=r.as
r.as=d
d=B.aK(J.t(t,"ch"))
r.at=A.k.M(d==null?0:d)
d=B.aK(J.t(t,"vc"))
if(d==null)d=0
r.z=d
d=B.aK(J.t(t,"s"))
r.ch=A.k.F(d==null?1:d,1,2.6)
J.c8(v,r)}i=g.a(J.t(w,"wires"))
i=J.aX(i==null?A.cx:i)
h=x.j
while(i.C()){q=i.gR(i)
p=h.a(q)
f=B.aK(J.t(p,0))
o=f==null?a5:A.k.M(f)
f=B.aK(J.t(p,2))
n=f==null?a5:A.k.M(f)
if(o==null||n==null||o<0||n<0||o>=J.ad(v)||n>=J.ad(v))continue
m=J.t(v,o)
l=J.t(v,n)
if(m!=null&&l!=null)a6.alQ(m,A.k.M(B.e0(J.t(p,1))),l,A.k.M(B.e0(J.t(p,3))))}i=B.aK(J.t(w,"challenge"))
i=A.k.M(i==null?0:i)
k=B.aS(x.S)
h=g.a(J.t(w,"done"))
h=J.aX(h==null?A.cx:h)
while(h.C()){j=h.gR(h)
J.c8(k,A.k.M(B.e0(j)))}return new B.bqn(i,k)}catch(a4){return a5}},
fHZ(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fHZ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.az(),$async$fHZ)
case 7:r=o.aT(n.t(e.a,"ngmy_electronics_lab_v1"))
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
return B.i($async$fHZ,v)},
bFW(d){return C.iq_(d)},
iq_(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bFW=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.az(),$async$bFW)
case 7:w=6
return B.b(f.aB("String","ngmy_electronics_lab_v1",d),$async$bFW)
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
return B.i($async$bFW,v)}},D,H,X,Ak,Y,A2,Al
J=c[1]
B=c[0]
A=c[2]
A3=c[117]
Z=c[155]
A4=c[147]
A_=c[145]
R=c[139]
A5=c[132]
A6=c[149]
A7=c[157]
A8=c[105]
A9=c[134]
A0=c[116]
N=c[141]
Aa=c[156]
Ab=c[148]
Ac=c[152]
Ad=c[74]
T=c[83]
Ae=c[86]
P=c[126]
Af=c[130]
U=c[137]
V=c[140]
W=c[151]
E=c[29]
K=c[3]
G=c[38]
I=c[107]
A1=c[101]
O=c[150]
Ag=c[100]
Ah=c[153]
S=c[127]
Ai=c[154]
Q=c[143]
Aj=c[26]
L=c[28]
F=c[98]
M=c[96]
C=a.updateHolder(c[18],C)
D=c[136]
H=c[138]
X=c[144]
Ak=c[56]
Y=c[109]
A2=c[146]
Al=c[142]
C.akM.prototype={}
C.Ws.prototype={
S(){return new C.blX(B.U(x.N,x.i),new B.au(A.au,$.aw()),B.a([],x.X),B.a([],x.F),B.mT(0,null,null))}}
C.blX.prototype={
gWV(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
t(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
this.ch.t()
this.a2()},
PI(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$PI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aV.ao$.d.c
if(s!=null)s.jq()
p.bP(0,A.cd)
t.m(new C.ehN(t))
t.a.toString
p=t.gWV()
w=3
return B.b(C.bBv(C.i2G(q,C.ieE(p),o,t.ay)),$async$PI)
case 3:s=e
r=s==null?null:J.j5(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=C.ig9(q,p,o)
if(t.c==null){w=1
break}t.m(new C.ehO(t,o,r))
$.aV.x1$.push(new C.ehP(t))
case 1:return B.h(u,v)}})
return B.i($async$PI,v)},
YZ(d){return this.c2B(d)},
aY5(){return this.YZ(null)},
c2B(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$YZ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aV.ao$.d.c
if(s!=null)s.jq()
t.f.sb1(0,o)
t.m(new C.ei_(t))
G.dE(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bBv(C.i9O(o)),$async$YZ)
case 3:r=n.a=m.io6(f)
p.b=""
if(r!=null&&!C.ieF(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.iga(o)
q=B.ag(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.akM(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new C.ei0(p,t))
t.c89(p.a)
case 1:return B.h(u,v)}})
return B.i($async$YZ,v)},
c89(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
A.d.a9(w)
w=++m.as
v=m.gWV()
A.d.a9(v.a)
A.d.a9(v.b)
m.e.a9(0)
m.m(new C.ehW(m))
t=d.d
s=B.U(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.ehU(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.ehX(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.J)(r),++u){p.$2(o,new C.ehY(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.ehZ(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bt.j(0.1),g=B.n(16),f=B.L(A.bt.j(0.35),A.r,1)
if(m.x)j=B.A(B.a([D.fdI,A.be,B.E(B.d(m.Q,l,l,l,l,l,l,A.AE,l,l,l),1)],x.p),A.m,l,A.e,A.i,0,l,l)
else if(k==null)j=D.fEv
else{w=B.E(B.d(k.a,l,l,l,l,l,l,A.VE,l,l,l),1)
v=x.p
w=B.a([B.A(B.a([w,B.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.foL,l,l,l)],v),A.m,l,A.e,A.i,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.D(A.un,B.d(u,l,l,l,l,l,l,D.frx,l,l,l),l))
w.push(A.cU)
w.push(B.d(k.b,l,l,l,l,l,l,I.EH,l,l,l))
u=k.e
if(u.length!==0){t=A.aU.j(0.12)
s=B.n(10)
w.push(B.p(l,B.d(u,l,l,l,l,l,l,D.fu3,l,l,l),A.f,l,l,new B.o(t,l,l,s,l,l,A.n),l,l,l,A.i9,A.cl,l,l,l))}w.push(A.an)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
t=B.d(t,l,l,l,l,l,l,A.lU,l,l,l)
q=u[r]
s=s?A.c:A.aD
w.push(new B.D(A.NL,new B.c7(A.aM,A.e,A.i,A.E,l,A.p,l,0,B.a([t,A.bn,new B.by(1,A.bc,B.d(q,l,l,l,l,l,l,new B.G(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.J)(j),++p){o=j[p]
t=A.bt.j(0.3)
s=new B.aP(12,12)
s=B.p(l,B.d(o.a,l,l,l,l,l,l,A.Vl,l,l,l),A.f,l,l,new B.o(t,l,l,new B.bg(s,s,s,s),l,l,A.n),l,l,l,l,A.ha,l,l,l)
t=A.c.j(0.07)
q=new B.aP(12,12)
A.d.v(w,B.a([A.P,new B.bL(A.a9,l,l,s,l),A.aw,B.p(l,B.d(o.b,l,l,l,l,l,l,D.fzI,l,l,l),A.f,l,l,new B.o(t,l,l,new B.bg(q,q,q,q),l,l,A.n),l,l,l,l,A.bU,l,l,l)],v))}if(m.ax)w.push(D.epM)
j=B.cg(B.x(w,A.E,l,A.e,A.i,0,A.p),A.t,m.ch,A.y,l,l,l,l,A.ai)}w=x.p
g=B.x(B.a([B.aj0(B.p(l,j,A.f,l,new B.aZ(0,1/0,0,i),new B.o(h,l,f,g,l,l,A.n),l,l,l,D.bAQ,A.eD,l,l,1/0),A.b6,A.iI),B.E(C.hhT(m.gWV(),l,l,m.e),1)],w),A.m,l,A.e,A.i,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new E.dV("Ask about it",i,new C.ei3(m),l,A.bt,l),new E.dV("Invent something new",!i,new C.ei4(m),l,A.bt,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dsn[p]
i.push(new E.dV(n,!1,new C.ei5(m,n),l,A.bt,l))}f.push(new E.fb(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.dau[p]
i.push(new E.dV(r,!1,new C.ei6(m,r),l,A.bt,l))}f.push(new E.fb(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aM(l,A.Z,!1,l,!0,A.t,l,B.aN(),m.f,l,l,l,l,l,2,B.bs(l,new B.b6(4,B.n(16),A.a1),l,A.eV,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kE,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.ei7(m,k),l,!1,l,l,!1,l,!0,l,A.ab,l,l,l,l,l,l,l,l,l,l,l,A.dh,!0,A.a5,l,A.ao,l,A.V8,l,l),1)
h=m.at
v=h&&j?D.bQH:A.e8
j=h&&j?"Ask":"Invent"
f.push(B.A(B.a([i,A.ae,new E.fB(v,j,new C.ei8(m,k),A.bt,l)],w),A.m,l,A.e,A.i,0,l,l))
return E.lx(A.bt,A.f4,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.x(f,A.m,l,A.e,A.O,0,A.p))}}
C.GL.prototype={}
C.vf.prototype={}
C.WP.prototype={
S(){return new C.aFJ(A.I,A.I,A.ay,B.aS(x.S),$,A.bD,0,B.a([],x.X),null,null)}}
C.aFJ.prototype={
gaZo(){var w,v,u,t=this,s=D.In[t.cx],r=D.Su[t.cy],q=D.Dm[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.dX(w,w.r,B.a4(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.aA9[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cG(p,0,new C.ex5())},
ga3l(){return D.In[this.cx].d/this.gaZo()},
gaQo(){return 0.1*(D.In[this.cx].d/0.9)/D.Su[this.cy].d},
Y(){this.a3()
this.md()
C.cjj("rocket_lander").bJ(new C.exp(this),x.h)},
c8i(){var w=this
w.ay=A.k.F(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cM.aj()*0.6
w.f=new B.q(0.15+A.cM.aj()*0.7,0.08)
w.r=new B.q((A.cM.aj()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
mv(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new C.exq())
return}w=D.t2[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.F(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.q(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga3l()
v=v.a7(0,new B.q(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaQo())}if(m.dy){t=m.r
v=v.aK(0,t.aO(0,t.gcF()*6*D.aCd[m.d]))}t=m.r=m.r.a7(0,v.aO(0,d))
s=m.f=m.f.a7(0,t.aO(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new B.q(-t.a*0.4,t.b)
t=new B.q(A.k.F(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new B.q(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.Dm[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b2H("rocket_lander",B.I(["unlocked",t],x.N,x.z))
C.JB("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga3l()/(D.t2[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.ad(m.ga3l()/(D.t2[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
G.dE(80,"",500,0,0.6,"noise")
B.fL()}}if(m.Q&&m.x>0&&A.o.E(A.k.bh(m.CW*20),2)===0)G.dE(90,"",70,0,0.12,"noise")
m.m(new C.exr())},
agV(d,e,f,g,h){var w,v=null,u=B.d(d,v,v,v,v,v,v,D.fr0,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new E.dV(e[w].a,f.$1(w),new C.ex7(this,g,w),v,h,v))
return new B.D(A.eK,B.x(B.a([u,A.cU,B.bW(A.bG,s,A.br,v,6,6)],t),A.E,v,A.e,A.i,0,A.p),v)},
bHs(d){var w,v,u,t,s=this,r=null,q=s.ga3l()/(D.t2[s.d].b/9.81*0.28)>=1,p=A.k.V(1/s.gaQo()),o=D.aCd[s.d],n=B.n(24),m=d.c,l=B.L(m.j(0.6),A.r,1)
m=B.a([B.d("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.aw,B.d(d.d+" Gravity here: "+B.w(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.aaT,r,r,r),A.X,s.agV("ENGINE: "+D.In[s.cx].b,D.In,new C.ewX(s),new C.ewY(s),A.cJ),s.agV("FUEL TANK: "+D.Su[s.cy].b,D.Su,new C.ewZ(s),new C.ex_(s),A.b9),s.agV("LANDING GEAR: "+D.Dm[s.db].b,D.Dm,new C.ex0(s),new C.ex1(s),A.aJ),s.agV("EXTRAS (tap to add)",D.aA9,new C.ex2(s),new C.ex3(s),A.bt)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.fXj)
o=(q?A.b9:A.c0).j(0.14)
w=B.n(12)
v=A.k.ad(s.gaZo(),2)
u=A.k.ad(s.ga3l()/(D.t2[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.p(r,B.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.V(D.Dm[s.db].d*100)+".",r,r,r,r,r,r,D.frF,r,r,r),A.f,r,r,new B.o(o,r,r,w,r,r,A.n),r,r,r,A.i9,A.bU,r,r,r))
m.push(A.X)
m.push(new B.bL(A.A,r,r,new E.fB(A.oA,"Launch",new C.ex4(s),A.b9,r),r))
return B.at(B.p(r,B.cg(B.x(m,A.E,r,A.e,A.O,0,A.p),A.t,r,A.y,r,A.bR,r,r,A.ai),A.f,r,A.lZ,new B.o(D.bqG,r,l,n,r,r,A.n),r,r,r,A.bU,r,r,r,r),r,r,r)},
b_A(d,e,f,g){var w=null,v=f?A.cJ:A.c.j(0.1),u=B.n(18),t=B.L(A.aW,A.r,1)
return B.mI(A.iL,B.p(w,B.Y(d,A.c,w,w,w,30),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new C.ewU(e),new C.ewV(e),w,w,w,w,new C.ewW(e))},
b_z(d,e,f){return this.b_A(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cr(new C.exi(s,D.t2[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.t2[w].a:"\ud83d\udd12"
o.push(new E.dV(v,s.d===w,new C.exj(s,w),r,D.t2[w].c,r))}v=B.a([s.b_z(F.apS,new C.exk(s),s.y),A.be,s.b_A(A.wy,new C.exl(s),s.Q,130),A.be,s.b_z(A.Px,new C.exm(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?A.aJ:A.c.j(0.1)
t=B.n(18)
A.d.v(v,B.a([A.be,B.aA(r,B.p(r,D.bUW,A.f,r,r,new B.o(u,r,B.L(A.aW,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.exn(s),r,r,r,r,r,r,!1,A.a4)],p))}return E.lx(A.cJ,A.f4,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.x(B.a([new E.fb(o,"WORLD",r),B.A(v,A.m,r,A.bb,A.i,0,r,r)],p),A.m,r,A.e,A.O,0,A.p))}}
C.biU.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=this.b,l=D.t2[m.d],k=a1.a,j=a1.b,i=0+k,h=0+j,g=$.S(),f=B.K(),e=l.c,d=B.ar(K.ZK,e,0.25)
d.toString
f.sar(new B.a9(A.b1,A.b7,A.x,B.a([F.agP,d],x.O),n,n).aG(0,new B.a2(0,0,i,h)))
a0.au(new B.a2(0,0,i,h),f)
w=new B.e4()
w.d_(5)
for(v=0;v<70;++v){i=w.aj()
h=w.aj()
f=w.aj()
d=new B.ao(A.Q,A.N,A.T,A.U,A.S)
d.r=A.c.j(0.2+w.aj()*0.5).gp(0)
a0.N(new B.q(i*k,h*j*0.8),f*1.2+0.3,d)}u=j*0.88
i=x.v
h=B.a([],i)
t=new B.aE(g.r,A.ah,n,n,h)
t.D(new B.aY(0,u+14))
s=new B.e4()
s.d_(2)
for(r=0;r<=k;r+=18){g=new B.aq(r,u+(Math.abs(r/k-m.ax)<m.ay/2+0.02?14:14-s.aj()*18))
h.push(g)
f=t.f
if(f!=null)g.ai(f)
t.a8()}t.D(new B.aq(k,j))
t.D(new B.aq(0,j))
t.D(new B.bt())
h=$.S()
g=B.K()
g.r=B.ar(e,A.w,0.6).gp(0)
a0.ae(t,g)
q=B.bJ(new B.q(m.ax*k,u+10),8,m.ay*k)
g=B.br(q,A.ij)
e=B.K()
e.r=A.bg.gp(0)
a0.ap(g,e)
e=B.br(q.cr(2),A.n3)
g=B.K()
g.b=A.aa
g.c=2
g.r=A.c.j(0.5+0.3*Math.sin(m.CW*4)).gp(0)
a0.ap(e,g)
if(m.as==="ready")return
g=m.f
f=a0.c
J.bq(f.save())
f.translate(g.a*k,g.b*j)
a0.iq(0,m.w)
k=m.as
if(k==="crashed"){m=B.K()
m.r=A.cJ.j(0.6).gp(0)
m.y=U.H0
a0.N(A.I,34,m)
f.restore()
return}if(m.Q&&m.x>0&&k==="flying"){k=h.r
p=new B.aE(k,A.ah,n,n,B.a([],i))
p.D(new B.aY(-8,18))
p.D(new B.aq(0,44+Math.sin(m.CW*40)*8))
p.D(new B.aq(8,18))
p.D(new B.bt())
m=B.K()
m.r=A.aU.gp(0)
a0.ae(p,m)
k=new B.aE(k,A.ah,n,n,B.a([],i))
k.D(new B.aY(-4,18))
k.D(new B.aq(0,32))
k.D(new B.aq(4,18))
k.D(new B.bt())
m=B.K()
m.r=A.c.gp(0)
a0.ae(k,m)}m=h.r
o=new B.aE(m,A.ah,n,n,B.a([],i))
o.D(new B.aY(0,-26))
o.D(new B.c4(14,-10,11,18))
o.D(new B.aq(-11,18))
o.D(new B.c4(-14,-10,0,-26))
o.D(new B.bt())
k=B.K()
k.sar(D.c6S.aG(0,D.f5f))
a0.ae(o,k)
k=B.K()
k.r=A.aJ.gp(0)
a0.N(H.vk,5,k)
k=new B.aE(m,A.ah,n,n,B.a([],i))
k.D(new B.aY(-11,6))
k.D(new B.aq(-20,20))
k.D(new B.aq(-11,18))
k.D(new B.bt())
j=B.K()
j.r=A.ax.gp(0)
a0.ae(k,j)
i=new B.aE(m,A.ah,n,n,B.a([],i))
i.D(new B.aY(11,6))
i.D(new B.aq(20,20))
i.D(new B.aq(11,18))
i.D(new B.bt())
m=B.K()
m.r=A.ax.gp(0)
a0.ae(i,m)
f.restore()},
aC(d){return!0}}
C.aNE.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.bzv.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.bzn()}}
C.aTJ.prototype={}
C.a44.prototype={}
C.bbQ.prototype={}
C.Vl.prototype={
S(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.ey(["skin"],x.N),o=new Float32Array(0)
return new C.aEc(w,v,u,t,s,r,q,new B.cw(null,x.A),p,D.LF,D.LF,A.ay,A.cM,o,new Int32Array(0),$,A.bD,0,B.a([],x.X),null,null)}}
C.aEc.prototype={
Y(){var w=this
w.a3()
w.md()
w.as=new C.c5S(w.gch8())
new C.dOg(w).$0()
return},
t(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a1(0)
v.d=null}this.byr()},
ch9(d){var w,v=this
if(v.c==null)return
w=J.a7(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.f8(0,B.I(["t","init","data",$.hrW],x.N,x.z))
v.at=!0
v.ax=""
v.aAz()
break
case"pick":v.m(new C.dNT(v,d))
break
case"shot":v.aiP(B.w(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+B.w(w.h(d,"text")))
break}},
aAz(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.ay0[q.CW]
v=new C.dNU()
u=q.ay
u=B.C(u,B.a4(u).k("co.E"))
A.d.fh(u)
t=x.N
s=B.I(["layers",u,"skinMode",q.ch,"tone","#"+B.w(v.$1(w.b))+B.w(v.$1(w.c))+B.w(v.$1(w.d)),"sel",q.cx,"bpm",A.k.V(q.k3),"spin",q.fy],t,x.cK)
r=A.Y.az(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=B.U(t,x.z)
u.n(0,"t","state")
u.v(0,s)
v.f8(0,u)}},
aiP(d){return this.cy7(d)},
cy7(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aiP=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cG.aM(A.a.b2(d,A.a.cp(d,",")+1))
w=6
return B.b(B.awv(B.a([B.cFF(r,"image/png","body.png")],x.fH),null,"Made in NGMY Core Protocol"),$async$aiP)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.L(x.gV).f.U(K.aTq)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aiP,v)},
azY(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.q(0,w)},
mv(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.q(0,"organ")&&A.k.bh(w)!==A.k.bh(v.ok)){E.Xe("kick",0,0.4)
v.UA(170,new C.dOh())}v.ok=w
return},
aet(d){var w,v,u,t,s=this
s.m(new C.dNV(s,d))
if(d==null){s.fx=D.LF
s.dy=1
w=s.as
if(w!=null)w.f8(0,B.I(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.T(w).k("X<1>")
u=B.C(new B.X(w,new C.dNW(d),v),v.k("M.E"))
t=A.d.gH(u).b
if(t!=="skin"&&!s.ay.q(0,t)){s.ay.I(0,t)
if(s.ch===2)s.ch=1}s.aAz()
w=s.as
if(w!=null)w.f8(0,B.I(["t","focus","group",d],x.N,x.z))
s.go=0
s.cAB(t,d)
return},
cAB(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){E.Xe("kick",0,0.8)
this.UA(260,new C.dNX())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")G.dE(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.UA(w*70,new C.dNY(this))
else if(A.a.q(e,"intestine")||e==="Stomach")G.dE(110,"",360,0.7,0.3,"saw")
else E.h7t("organic",6+A.o.E(e.length,8),200,0.6)
break
case"bone":G.dE(210+e.length*4,"",80,0.6,0.55,"tri")
G.dE(2400,"",20,0,0.3,v)
break
case"muscle":G.dE(70,"",150,1,0.6,"sine")
break
case"vessel":G.dE(300,"",380,0.4,0.22,v)
E.Xe("kick",0,0.3)
break
default:E.h7t("organic",2+A.o.E(e.length,6),200,0.4)}},
cFf(d){this.m(new C.dO_(this,d))},
b_S(){var w,v,u,t,s,r,q,p=this,o=B.aS(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
if(p.azY(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.I(0,s.a)}q=B.C(o,o.$ti.k("co.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.aw(w)]
p.p4=""},
bZg(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new C.dNQ(u,w,d))
v=x.t
C.JB("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.UA(1100,new C.dNR(u))
return}if(d==null){if(u.cx!=null)u.aet(null)
return}u.aet(d)},
c1T(d,e){var w,v=this,u=null,t=B.n(18),s=B.L(A.c1.j(0.5),A.r,1)
if(v.p1){w=v.p2
w=B.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.fn7,u,u,u)}else if(d==null||e==null)w=D.fBS
else{w=x.p
w=B.A(B.a([B.E(B.x(B.a([B.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hz,u,u,u),A.cU,B.d(e.b,u,u,u,u,u,u,I.EH,u,u,u)],w),A.E,u,A.e,A.O,0,A.p),1),B.aH(u,u,u,u,D.bXs,u,u,u,new C.dNS(v),u,u,u,u,"Back to the whole body",A.ce)],w),A.E,u,A.e,A.i,0,u,u)}return B.p(u,w,A.f,u,u,new B.o(K.Y6,u,s,t,u,u,A.n),u,u,u,u,R.alk,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.dDt.h(0,g)
i.aAz()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.dkF
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,B.J)(v),++s){r=v[s]
if(i.azY(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.q(w,q))w.push(q)}v=x.p
u=B.a([B.aH(h,h,h,h,K.oD,h,h,h,new C.dO6(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bL:B.BQ(h,A.pF,q)}else q=A.kC
q=B.x(B.a([B.E(q,1),new B.D(F.a_N,i.c1T(g,f),h)],v),A.m,h,A.e,A.i,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){o=D.dc3[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.q(0,n)
p.push(new E.dV(l,n,new C.dO7(i,o),o.c,A.c1,h))}p=B.a([new E.fb(p,h,h)],v)
if(!i.p1&&w.length!==0){n=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.J)(w),++s){k=w[s]
n.push(new E.dV(k,k===i.cx,new C.dO8(i,k),h,A.aU,h))}p.push(new E.fb(n,"FIND",h))}if(t.q(0,"organ")){n=i.k3
p.push(E.iN(A.c0,""+A.k.V(n)+" beats/min","Heart rate",180,40,new C.dO9(i),n))}if(i.ch>0&&t.a===0){n=B.a([],v)
for(j=0;j<5;++j)n.push(new E.FU(D.ay0[j],i.CW===j,new C.dOa(i,j),!1,h))
p.push(new E.fb(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=B.a([new E.dV("Spin",n,new C.dOb(i),D.aoK,A.aJ,h),new E.fB(A.ov,"Reset view",new C.dOc(i),A.c,h),new E.dV(l,m,new C.dOd(i),A.HH,A.aU,h)],v)
if(t.q(0,"organ"))v.push(new E.dV("Heartbeat sound",i.k4,new C.dOe(i),A.oz,A.c0,h))
p.push(new E.fb(v,h,h))
return E.lx(A.c1,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.x(p,A.m,h,A.e,A.O,0,A.p))}}
C.aMJ.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.aMK.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.byq()}}
C.c5S.prototype={
kW(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aL(e,"</script","<\\/script")
v=$.hy7
$.hy7=v+1
u="ngmy-body-viewer-"+v
$.xj()
$.pQ().p7(u,new C.c5T(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fy(v,"message",new C.c5U(t),!1,x.gA)
t.b=u},
f8(d,e){var w,v
try{w=this.c
if(w!=null){w=B.Re(w.contentWindow)
if(w!=null)J.aiR(w,e,"*")}}catch(v){}}}
C.yz.prototype={}
C.CT.prototype={}
C.nD.prototype={}
C.bcB.prototype={}
C.Vq.prototype={
S(){var w=x.N,v=x.y,u=x.S
return new C.aEe(B.U(w,x.a2),B.a([],x.cB),B.U(w,v),B.U(w,v),B.U(w,u),A.ay,A.I,A.I,B.aS(u),$,A.bD,0,B.a([],x.X),null,null)}}
C.aEe.prototype={
Y(){var w=this
w.a3()
w.md()
w.adr()
$.aV.x1$.push(new C.dPW(w))},
adr(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$adr=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$adr)
case 6:q=e.tP("ngmy_circuit_passed_v1")
r=q==null?A.Z:q
if(s.c!=null)s.m(new C.dPA(s,r))
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
return B.i($async$adr,v)},
adN(d){return this.c5Q(d)},
c5Q(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$adN=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.I(0,d)
u=3
w=6
return B.b(B.az(),$async$adN)
case 6:r=f
q=s.cx
p=B.a4(q).k("k5<co.E,m>")
q=B.C(new B.k5(q,new C.dPD(),p),p.k("M.E"))
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
return B.i($async$adN,v)},
ayC(d,e,f,g){var w="c"+this.y++,v=new C.CT(w,e,f,g)
this.d.n(0,w,v)
return v},
mL(d,e,f){return this.ayC(0,e,f,0)},
acM(d,e){var w
if(D.A_.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a7(0,new B.q(-36,w))},
ue(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aUv(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.f9$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.dq(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.ec(m,D.cW5[A.o.E(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.ue(p,0)&&n.ue(p,1)
break
case"or":p=q.a
o=n.ue(p,0)||n.ue(p,1)
break
case"xor":p=q.a
o=n.ue(p,0)!==n.ue(p,1)
break
case"nand":p=q.a
o=!(n.ue(p,0)&&n.ue(p,1))
break
case"nor":p=q.a
o=!(n.ue(p,0)||n.ue(p,1))
break
case"not":o=!n.ue(q.a,0)
break
default:o=n.ue(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bRM(){return this.aUv(null)},
mv(d){var w,v,u,t,s,r,q,p,o,n=this
n.bRM()
if(!n.ax)return
for(w=n.d,w=new B.b8(w,B.a4(w).k("b8<2>")).gag(0),v=new B.eJ(w,new C.dPX()),u=n.f,t=n.w,s=0;v.C();){r=w.gR(0).a
if(u.h(0,r)===!0){q=n.f9$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.f9$)
o=s+1
G.dE(520+90*A.o.E(s,4),"",200,0,0.25,"square")
s=o}}},
ayD(d){var w=this
w.d.a9(0)
A.d.a9(w.e)
w.f.a9(0)
w.r.a9(0)
w.cy=null},
me(d,e){var w=this.x
return new B.q(d*w.a,e*w.b)},
auQ(d){var w=this
if(w.x.A(0,A.ay)){$.aV.x1$.push(new C.dPy(w,d))
return}w.m(new C.dPz(w,d))},
cAT(d){this.m(new C.dPE(this,d,$.bGh()[d]))},
caB(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bGh()[a0]
v=d.d
u=B.a4(v).k("b8<2>")
t=u.k("X<M.E>")
s=t.k("M.E")
r=B.C(new B.X(new B.b8(v,u),new C.dPt(),t),s)
A.d.aZ(r,new C.dPu())
q=B.C(new B.X(new B.b8(v,u),new C.dPv(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new C.dPw(d,w))
return}u=d.r
p=B.dL(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dv(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.ha(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aUv(0)
h=m.h(0,A.d.gH(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.lw(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aN(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a9(0)
u.v(0,p)
d.m(new C.dPx(d,o,a0))},
azu(d){var w,v,u,t,s=this.d,r=B.a4(s).k("b8<2>")
s=B.C(new B.b8(s,r),r.k("M.E"))
r=B.T(s).k("ds<1>")
s=new B.ds(s,r)
s=new B.bO(s,s.gJ(0),r.k("bO<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cjz(d){var w,v,u,t,s,r=this.d,q=B.a4(r).k("b8<2>")
r=B.C(new B.b8(r,q),q.k("M.E"))
q=B.T(r).k("ds<1>")
r=new B.ds(r,q)
r=new B.bO(r,r.gJ(0),q.k("bO<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c1M(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.A_.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.acM(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.y(p,o)
s=l}}}return t},
bQw(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.acM(p,o)
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
caD(d){var w,v,u,t=this,s=t.azu(d)
if(s!=null){w=t.d.h(0,s)
w.toString
B.eW()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.n(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
G.dE(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new C.dPF())
return}u=t.bQw(d)
if(u!=null)t.m(new C.dPG(t,u))
else t.m(new C.dPH(t))},
axs(d){return this.c4P(d)},
c4P(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$axs=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.azu(d)
if(s==null){w=1
break}B.jT()
t.m(new C.dPC(t,s))
case 1:return B.h(u,v)}})
return B.i($async$axs,v)},
bDg(d){if(this.x.A(0,A.ay))return
this.m(new C.dPs(this,d,A.cM))
B.eW()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bGh()[g]
g=x.p
v=B.a([B.aH(h,h,h,h,B.Y(i.ax?A.oz:V.rY,A.ad,h,h,h,21),h,h,h,new C.dPQ(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.n(16)
s=A.cq.j(0.14)
r=B.L(A.cq.j(0.5),A.r,1)
q=B.a([B.d("Challenge: "+w.a,h,h,h,h,h,h,D.fmf,h,h,h),B.d(w.b,h,h,h,h,h,h,H.aaS,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.D(A.le,B.d(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.b9:A.eQ,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.p(h,B.A(B.a([B.E(B.x(q,A.E,h,A.e,A.i,0,A.p),1),B.bH(D.fNp,h,i.gcaA(),B.bn(A.cq,h,h,h,h,h,h,h,h,h,h,A.ce))],g),A.m,h,A.e,A.i,0,h,h),A.f,h,h,new B.o(s,h,r,t,h,h,A.n),h,h,h,T.NT,D.bBv,h,h,1/0))}u.push(B.E(B.cr(new C.dPR(i)),1))
if(f!=null){t=B.n(14)
s=A.c.j(0.06)
r=f.b
u.push(B.p(h,B.d(D.A_.h(0,r).a+": "+D.A_.h(0,r).e,h,h,h,h,h,h,A.tz,h,h,h),A.f,h,h,new B.o(s,h,h,t,h,h,A.n),h,h,h,A.a_R,A.bU,h,h,1/0))}u=B.x(u,A.m,h,A.e,A.i,0,A.p)
t=B.a([],g)
for(s=D.A_.gdR(D.A_),s=s.gag(s);s.C();){r=s.gR(s)
q=new B.aP(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ay(o.j(0.5),1,A.r,-1)
t.push(B.aA(h,B.p(h,B.x(B.a([B.Y(p.b,o,h,h,h,20),A.bH,B.d(p.a,h,h,h,h,h,h,D.aVp,h,h,h)],g),A.m,h,A.e,A.O,0,A.p),A.f,h,h,new B.o(n,h,new B.bG(m,m,m,m),new B.bg(q,q,q,q),h,h,A.n),h,h,h,A.fz,Ag.NQ,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dPS(i,r),h,h,h,h,h,h,!1,A.a4))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dp9[l]
s.push(new E.fB(A.Py,k.b,new C.dPT(i,k),A.cq,h))}s.push(new E.fB(K.wv,"Clear",new C.dPU(i),A.c0,h))
r=B.a([],g)
for(j=0;q=$.bGh(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?A.e9:A.lL
o=i.ay
n=i.cx.q(0,j)?A.b9:A.bs
r.push(new E.dV(q.a,o===j,new C.dPV(i,j),p,n,h))}return E.lx(A.cq,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.x(B.a([new E.fb(t,"PARTS",h),new E.fb(s,"TRY",h),new E.fb(r,"TASKS",h)],g),A.m,h,A.e,A.O,0,A.p))}}
C.bcU.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3=a6.a,a4=a6.b
$.S()
w=B.K()
w.r=D.afb.gp(0)
a5.au(new B.a2(0,0,0+a3,0+a4),w)
v=B.K()
v.r=A.c.j(0.05).gp(0)
for(u=20;u<a4;u+=28)for(t=14;t<a3;t+=28)a5.N(new B.q(t,u),1,v)
for(a3=this.b,a4=a3.e,w=a4.length,s=a3.f,r=x.v,q=a3.d,p=0;p<a4.length;a4.length===w||(0,B.J)(a4),++p){o=a4[p]
n=o.a
m=q.h(0,n)
l=q.h(0,o.b)
if(m==null||l==null)continue
k=m.c
j=k.a+36
k=k.b+0
i=a3.acM(l,o.c)
h=s.h(0,n)===!0
n=$.S()
g=B.a([],r)
f=new B.aE(n.r,A.ah,a2,a2,g)
g.push(new B.aY(j,k))
f.a8()
n=i.a
e=Math.max(40,Math.abs(n-j)*0.5)
d=i.b
d=new B.kP(j+e,k,n-e,d,n,d)
g.push(d)
n=f.f
if(n!=null)d.ai(n)
f.a8()
if(h){n=new B.ao(A.Q,A.N,A.T,A.U,A.S)
n.b=A.aa
n.c=9
n.r=A.bs.j(0.28).gp(0)
n.y=N.oo
a5.ae(f,n)}n=new B.ao(A.Q,A.N,A.T,A.U,A.S)
n.b=A.aa
n.c=3.2
n.d=A.bA
n.r=(h?A.dE:A.bu).gp(0)
a5.ae(f,n)}a0=a3.as
if(a0!=null&&q.h(0,a0)!=null){a1=q.h(0,a0).c.a7(0,D.Jr)
i=a3.at
a3=i.a
a4=a1.a
e=Math.max(40,Math.abs(a3-a4)*0.5)
r=new B.aE($.S().r,A.ah,a2,a2,B.a([],r))
w=a1.b
r.D(new B.aY(a4,w))
s=i.b
r.D(new B.kP(a4+e,w,a3-e,s,a3,s))
s=B.K()
s.b=A.aa
s.c=3
s.r=A.ad.gp(0)
a5.ae(r,s)}for(a3=new B.dq(q,q.r,q.e);a3.C();)this.caC(a5,a3.d)},
caC(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.A_.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.bJ(a0.c,64,64)
s=B.br(t,A.jL)
r=w.cy===v
q=s.eQ(A.cA)
$.S()
p=B.K()
p.r=A.w.j(0.55).gp(0)
p.y=A.mR
d.ap(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.K()
p.sar(new B.c_(A.A,0.5,A.x,g,0,B.a([e.c.j(0.6),A.L],x.O),g,g).aG(0,B.bX(a0.c,52)))
d.N(q,52,p)}q=s.eQ(A.cL)
p=B.K()
o=e.c
p.r=B.ar(o,A.w,0.65).gp(0)
d.ap(q,p)
n=u?0.35:0
q=B.K()
p=B.ar(o,A.c,0.1+n)
p.toString
m=B.ar(o,A.w,u?0.2:0.45)
m.toString
q.sar(new B.a9(A.b1,A.b7,A.x,B.a([p,m],x.O),g,g).aG(0,t))
d.ap(s,q)
q=B.K()
q.b=A.aa
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.ap(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.pp:D.bRd}else l=e.b
k=C.h9i(B.lw(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a4(d,v.aK(0,new B.q(p/2,q.gba(q)/2)))
j=C.h9i(e.a,10.5,A.c,g,g,A.H)
j.a4(d,a0.c.a7(0,new B.q(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.h9i(f,9,u?A.dE:A.bV,g,g,A.u)
i.a4(d,a0.c.a7(0,new B.q(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b0w(d,w.acM(a0,h),o)
this.b0w(d,a0.c.a7(0,D.Jr),o)},
b0w(d,e,f){var w
$.S()
w=B.K()
w.r=D.afb.gp(0)
d.N(e,8.5,w)
w=B.K()
w.b=A.aa
w.c=2.2
w.r=f.gp(0)
d.N(e,8.5,w)
w=B.K()
w.r=A.c.gp(0)
d.N(e,3.2,w)},
aC(d){return!0}}
C.aMO.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.bzf.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.byv()}}
C.O2.prototype={
S(){return new C.aEv(B.mT(0,null,null))}}
C.L5.prototype={
a6(){return"_UnfoldStyle."+this.b}}
C.B0.prototype={}
C.aEv.prototype={
caI(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcn(0).at
v.toString
w.f=v}w.m(new C.dVU(w,e))},
c3F(){var w=this
w.e.t()
w.e=B.mT(w.f,null,null)
w.m(new C.dVT(w))},
t(){this.e.t()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return B.oH(t,B.c5(v,A.c3,t?new C.bta(w.e,w.gcaH(w),new C.dVV(d),v):new C.aII(u,new B.bP(u.b,x.gj)),v,!1,!1,v,!1),new C.dVW(w,u),x.K)}}
C.buN.prototype={}
C.bta.prototype={
b0x(d,e){var w=null
return new B.D(R.a0h,B.x(B.a([B.d(d,w,w,w,w,w,w,D.fmR,w,w,w),A.bH,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.E,w,A.e,A.i,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=B.A(B.a([B.aH(v,v,v,v,A1.mZ,v,v,v,w.e,v,v,v,v,v,v),A.tq,D.bHJ],u),A.m,v,A.e,A.i,0,v,v),s=w.b0x("STUDIOS","Play, make things, and keep what you make")
$.bGi()
return B.bm(!0,B.x(B.a([new B.D(D.bGC,t,v),B.E(B.vX(0,v,A.t,w.c,A.y,v,v,v,v,v,!1,v,A.ai,!1,B.a([new B.mq(s,v),new B.o8(A.hS,B.PE(new B.oK(new C.f6K(d),9,!0,!0,!0,0,B.tk(),v),D.aTf),v),new B.mq(w.b0x("SCENES","Each one is a studio too: change the style, colours and words"),v),new B.o8(D.bBD,B.PE(new B.oK(new C.f6L(w),6,!0,!0,!0,0,B.tk(),v),D.aTf),v)],u)),1)],u),A.m,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0)}}
C.afJ.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=B.n(20),n=B.n(20),m=B.ar(I.m6,p,0.3)
m.toString
w=x.O
m=B.a([m,D.ail],w)
v=B.L(p.j(0.6),A.r,1.2)
u=x.V
t=B.a([new B.ac(-4,A.G,p.j(0.22),A.I,14)],u)
s=B.ar(p,A.w,0.45)
s.toString
w=B.a([p,s],w)
u=B.a([new B.ac(0,A.G,p.j(0.5),A.I,12)],u)
return B.aI(!1,A.a3,!0,r,B.aO(!1,o,!0,B.eG(B.x(B.a([B.p(r,B.Y(q.c,A.c,r,r,r,24),A.f,r,r,new B.o(r,r,r,r,u,new B.a9(A.aA,A.aF,A.x,w,r,r),A.a7),r,44,r,r,r,r,r,44),A.P,B.d(q.a,r,2,A.a2,r,r,r,B.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.K,r,r),A.cU,B.d(q.b,r,2,A.a2,r,r,r,B.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.K,r,r)],x.p),A.m,r,A.bb,A.i,0,A.p),r,new B.o(r,r,v,n,t,new B.a9(A.aA,A.aF,A.x,m,r,r),A.n),r,A.GW,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.aj)}}
C.aeB.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=B.n(20),g=B.n(20),f=B.ar(I.m6,A.d.gH(i),0.24)
f.toString
w=x.O
f=B.a([f,D.ail],w)
v=B.L(A.d.gH(i).j(0.35),A.r,1)
u=x.V
t=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cA,12)],u)
s=x.p
r=B.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new B.aP(6,6)
m=B.a([A.d.gH(i),A.d.gal(i)],w)
l=B.a([new B.ac(0,A.G,A.w.j(0.45),R.aLv,0)],u)
r.push(B.p(k,B.Y(q[p],A.c,k,k,k,11),A.f,k,k,new B.o(k,k,k,new B.bg(n,n,n,n),l,new B.a9(A.a6,A.a9,A.x,m,k,k),A.n),k,17,k,new B.Q(p*4,0,(2-p)*4,o),k,k,k,k))}w=B.x(r,A.m,k,A.e,A.O,0,A.p)
u=B.ar(A.d.gH(i),A.d.gal(i),0.4)
u.toString
return B.aI(!1,A.a3,!0,k,B.aO(!1,h,!0,B.eG(B.x(B.a([new B.a5(58,k,w,k),A.X,B.d(j.b,k,2,A.a2,k,k,k,B.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.K,k,k),A.aw,B.Y(A.CZ,A.d.gH(i),k,k,k,18)],s),A.m,k,A.bb,A.i,0,A.p),k,new B.o(k,k,v,g,t,new B.a9(A.aA,A.aF,A.x,f,k,k),A.n),k,A.GW,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.L,0,k,k,k,k,k,A.aj)}}
C.QV.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ar(A.d.gal(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=B.ap(-8,B.c3(j,new B.o(h,j,j,B.n(22),j,j,A.n),A.bi),j,j,2,2,8,j)
u=B.n(22)
t=k.y
s=x.V
r=B.a([new B.ac(0,A.G,A.w.j(0.55),A.Jo,26),new B.ac(-6,A.G,A.d.gH(i).j(0.1+0.4*t),A.I,30)],s)
q=B.n(22)
p=B.ar(A.d.gH(i),A.c,0.14)
p.toString
o=A.d.gH(i)
n=A.d.gal(i)
i=B.ar(A.d.gal(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bR(0,B.c3(j,new B.o(j,j,j,j,j,new B.a9(A.aA,A.aF,A.x,B.a([p,o,n,i],m),D.duS,j),A.n),A.bi),0,0,0),B.ap(j,B.c3(j,new B.o(j,j,j,j,j,new B.a9(A.b1,A.b7,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bi),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bR(0,B.b4(j,j,j,new C.bua(i,j),A.ay),0,0,0))
i=A.c.j(0.16)
p=B.L(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ac(0,A.G,A.c.j(0.25*t),A.I,14)],s)
s=B.p(j,B.Y(k.f,A.c,j,j,j,28),A.f,j,j,new B.o(i,j,p,j,s,j,A.a7),j,54,j,j,j,j,j,54)
p=B.a([B.d(k.r,j,j,j,j,j,j,D.foB,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,B.a([A.aw,B.d(i,j,1,A.a2,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a8,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.UX)
p.push(B.p(j,j,A.f,j,j,new B.o(A.c.j(0.28),j,j,B.n(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new B.D(A.h1,B.A(B.a([s,A.ev,B.E(B.x(p,A.E,j,A.e,A.O,0,A.p),1)],l),A.m,j,A.e,A.i,0,j,j),j))
i=k.x
if(i>0)m.push(B.bR(0,new B.dx(!0,B.e8(j,A.w.j(A.k.F(i*0.6,0,0.7)),!0),j),0,0,0))
i=B.n(22)
m.push(B.bR(0,new B.dx(!0,B.c3(j,new B.o(j,j,B.L(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.bi),j),0,0,0))
return new B.a5(w,v,new B.an(A.a0,j,A.ac,A.f,B.a([h,B.bR(0,B.c3(B.bx(q,new B.an(A.a0,j,A.ac,A.t,m,j),A.aq),new B.o(j,j,j,u,r,j,A.n),A.bi),0,0,0)],l),j),j)}}
C.bua.prototype={
a4(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a2(r,-10,s,w)
u=d.c
J.bq(u.save())
u.translate(v.gbK().a,v.gbK().b)
d.iq(0,0.35)
t=B.bJ(A.I,(w- -10)*1.6,s-r)
$.S()
s=B.K()
s.sar(new B.a9(A.a6,A.a9,A.x,B.a([A.L,A.c.j(0.3),A.L],x.O),null,null).aG(0,t))
d.au(t,s)
u.restore()},
aC(d){return d.b!==this.b}}
C.btG.prototype={
B(d){var w=null,v=B.n(22),u=B.a([D.boz,D.ahp],x.O),t=this.e,s=B.L(A.d.gH(t).j(0.4),A.r,1.2),r=B.a([new B.ac(0,A.G,A.w.j(0.5),A.kA,24)],x.V),q=B.n(22),p=A.d.gH(t)
return new B.a5(this.c,this.d,B.c3(B.bx(q,B.b4(B.at(B.Y(A.jG,A.d.gH(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.bby(p,w),A.ay),A.aq),new B.o(w,w,s,v,r,new B.a9(A.aA,A.aF,A.x,u,w,w),A.n),A.bi),w)}}
C.bby.prototype={
a4(d,e){var w,v,u,t,s,r
$.S()
w=B.K()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=0;s<u;s+=18)d.ah(new B.q(s,0),new B.q(s,t),w)
for(r=0;r<t;r+=18)d.ah(new B.q(0,r),new B.q(u,r),w)
u=e.ej(A.I)
$.S()
t=B.K()
t.b=A.aa
t.c=1.4
t.r=v.j(0.35).gp(0)
d.N(u,30,t)},
aC(d){return!1}}
C.aII.prototype={
S(){return new C.aIJ(new B.cw(null,x.A),null,null)}}
C.aIJ.prototype={
guD(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,D.byV,null,1,null,v)
w.cP(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
ga_k(){var w,v=this,u=v.e
if(u===$){w=B.bl(null,A.h0,null,1,null,v)
w.fs(0,!0)
v.e!==$&&B.bE()
v.e=w
u=w}return u},
gayE(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gcaF(){var w=this.w
if(w===$){w=B.C(this.a.c.d,x.G)
this.w=w}return w},
gaXO(){var w=this.x
if(w===$){w=B.C(this.a.c.e,x.Z)
this.x=w}return w},
gaYB(){var w=this.y
if(w===$){w=B.C(this.a.c.f,x.N)
this.y=w}return w},
gb9j(){var w=this.z
if(w===$){w=B.C(this.a.c.r,x.N)
this.z=w}return w},
Y(){this.a3()
var w=this.guD()
w.dj()
w.dV$.I(0,this.gcAC())},
cAD(){var w,v,u,t,s,r,q,p=this,o=p.guD().x
o===$&&B.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gayE().a){case 0:w=D.nI
break
case 1:w=D.v2
break
case 2:w=D.a4T
break
case 3:w=D.nI
break
case 4:w=D.dho
break
case 5:w=D.v2
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.acS)r=0.09
else r=s===D.acT?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){G.dE(260+90*v,"",260,1.6,0.18,"tri")
u=D.c9s[v]
E.mm("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.JB("bell",D.cig,1400,0.35)}}p.ax=o},
t(){this.guD().t()
this.ga_k().t()
this.bAj()},
aeT(){var w=this
w.guD().d_M(0,B.dv(0,0,0,A.k.V(11e3/w.Q),0,0))
w.m(new C.f6q(w))},
clC(){this.guD().bQ(0)
this.m(new C.f6p(this))},
aeS(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$aeS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gaYB(),s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
l.push(new B.au(new B.ba(q,A.b5,A.aP),$.aw()))}m=B.a([],m)
for(t=u.gb9j(),s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){p=t[r]
m.push(new B.au(new B.ba(p,A.b5,A.aP),$.aw()))}o=B.C(u.gaXO(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bT(I.m6,null,new C.f6o(u,l,m,o),t,!0,!0,!0,A.lS,!1,!1,x.H),$async$aeS)
case 2:l=B.C(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.T$=$.aw()
n.P$=0}return B.h(null,v)}})
return B.i($async$aeS,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gayE(),f=i.a.c,e=f.b,d=i.gcaF(),a0=new C.B0(g,e,f.c,d,i.gaXO(),i.gaYB(),i.gb9j())
f=B.ar(A.d.gH(d),A.d.gal(d),0.4)
f.toString
g=x.p
w=B.a([B.aH(h,h,h,h,B.Y(i.at?A.oz:V.rY,A.ad,h,h,h,21),h,h,h,new C.f6y(i),h,h,h,h,"Sound",h),B.aH(h,h,h,h,D.c02,h,h,h,i.gcaG(),h,h,h,h,"Edit words and pictures",h),B.aH(h,h,h,h,K.oD,h,h,h,new C.f6z(i,a1),h,h,h,h,"Share",h)],g)
v=B.a([B.c9(i.ga_k(),new C.f6A(i,a0),h),B.cr(new C.f6B(i,a0))],g)
u=i.as
t=u?i.gclB():i.gcaJ()
u=u?D.bQu:A.rX
s=B.ar(A.d.gH(d),A.d.gal(d),0.4)
s.toString
t=B.A(B.a([B.aH(h,h,h,h,B.Y(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.ce),B.E(B.c9(i.guD(),new C.f6C(i,a1,a0),h),1),B.aH(h,h,h,h,D.bXi,h,h,h,new C.f6D(i),h,h,h,h,"Replay",A.ce)],g),A.m,h,A.e,A.i,0,h,h)
s=i.Q
u=A.k.ad(s,1)
r=B.ar(A.d.gH(d),A.d.gal(d),0.4)
r.toString
s=E.iN(r,u+"x","Speed",2.5,0.4,new C.f6E(i),s)
u=B.a([],g)
for(q=0;q<6;++q){p=D.drY[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=B.ar(A.d.gH(d),A.d.gal(d),0.4)
r.toString
u.push(new E.dV(p.b,o===p.a,new C.f6F(i,p),p.c,r,h))}d=B.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.c9Q[q]
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}m=A.d.gH(o).A(0,A.d.gH(n))?34:28
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}l=A.d.gH(o).A(0,A.d.gH(n))?34:28
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}k=A.d.gH(o).A(0,A.d.gH(n))?A.c:A.aW
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}j=new B.ay(k,A.d.gH(o).A(0,A.d.gH(n))?2.5:1,A.r,-1)
d.push(B.aA(h,B.p(h,h,A.f,h,h,new B.o(h,h,new B.bG(j,j,j,j),h,h,new B.a9(A.aA,A.aF,A.x,n,h,h),A.a7),h,l,h,K.akQ,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f6G(i,n),h,h,h,h,h,h,!1,A.a4))}return E.lx(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.em(new B.an(A.a0,h,A.b4,A.t,v,h),i.f),e,B.x(B.a([t,s,new E.fb(u,"STYLE",h),new E.fb(d,"THEME",h)],g),A.m,h,A.e,A.O,0,A.p))},
bCr(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nI[r]
p=A.k.F((1-A.ew.aE(0,A.k.F((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.F(p/1.5707963267948966,0,1)
q=D.nI[r]
n=q+0.12
m=A.k.F((a0-n)/(q+0.2-n),0,1)
n=D.nI[r]
q=n-0.01
q=A.k.F((a0-q)/(n+0.03-q),0,1)
n=B.dr()
l=n.a
l.$flags&2&&B.aj(l)
l[11]=0.0013
n.kl(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nI[r]
h=i+0.1
if(A.k.F((a0-h)/(i+0.3-h),0,1)>0){i=D.nI[r]
h=i+0.1
h=A.k.F((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nI[r]
h=i+0.1
h=A.k.F((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cL(0,r*118,0,f,f,f,new B.kE(q,new B.iP(n,f,A.b1,!0,f,new C.QV(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nI[r]
u=v-0.02
g=A.k.F((a0-u)/(v+0.1-u),0,1)
u=A.d.gH(w)
v=D.nI[r]
t=v+0.12
e.push(new B.cL(0,r*118-3-2,0,f,f,4,new B.mB(new C.bsM(u,g,1-A.k.F((a0-t)/(v+0.22-t),0,1),f),f,A.ay,f,f),f))}return new B.a5(a2,358,new B.an(A.a0,f,A.ac,A.f,e,f),f)},
bTj(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.v2[r]
p=A.qm.aE(0,A.k.F((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.v2[r]
m=q+0.15
l=A.k.F((a0-m)/(q+0.25-m),0,1)
m=D.v2[r]
q=m-0.03
q=A.k.F((a0-q)/(m+0.01-q),0,1)
m=B.dr()
k=m.a
k.$flags&2&&B.aj(k)
k[11]=0.0011
m.k5(n,n,n,1)
m.fK(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new C.QV(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dr()
k.fK(3.141592653589793)
k=new B.iP(k,f,A.A,!0,f,new C.btG(a2,108,w,f),f)}e.push(new B.cL(0,r*130,0,f,f,f,new B.kE(q,new B.iP(m,f,A.A,!0,f,k,f),f),f))}return new B.a5(a2,378,new B.an(A.a0,f,A.ac,A.f,e,f),f)},
cFK(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a4T[w]
l.push(A.cw.aE(0,A.k.F((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bR(0,B.b4(n,n,n,new C.bwg(d.d,l,D.azK,m,C.bt9(e,0.4,0.62),f,C.bt9(e,0.45,0.7),n),A.ay),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.h9Q(g,w)
q=D.azK[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cL(r,s-q*m*p+12,n,n,t,n,new B.kE(o,B.Y(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.h9Q(g,w)
r=D.a4T[w]
q=r+0.15
v.push(new B.cL(s,l,n,n,t,n,new B.kE(A.k.F((e-q)/(r+0.25-q),0,1),B.d(u[w],n,n,n,n,n,n,A.VK,A.K,n,n),n),n))}return new B.a5(g,m+90,new B.an(A.a0,n,A.ac,A.f,v,n),n)},
bIJ(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cw.aE(0,C.bt9(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bR(0,B.at(B.dO(B.b4(f,f,f,new C.bsc(A.d.gH(a1),C.bt9(a3,0,0.2),a4,f),new B.av(a5*0.95,70)),D.ejV),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.k.F((a3-l)/(0.12+m-l),0,1)
j=A.dy.aE(0,A.k.F((o-0.7)/0.3,0,1))
l=B.dr()
m=l.a
m.$flags&2&&B.aj(m)
m[11]=0.001
l.fK(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.k5(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.k.E(r,1):-1
w.push(new B.y(o,new B.cL(0,0,0,0,f,f,new B.cc(A.A,f,f,new B.kE(k*(0.45+0.55*o),B.dO(new B.iP(l,f,A.A,!0,f,new C.QV(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.q(n*a5*0.34,-o*18)),f),f),f)))}A.d.aZ(w,new C.f6h())
A.d.v(a0,new B.N(w,new C.f6i(),x.fR))
return new B.a5(a5,330,new B.an(A.a0,f,A.ac,A.f,a0,f),f)},
caE(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.v2[q]
o=A.k.F((a2-p)/(p+0.22-p),0,1)
n=A.lz.aE(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.v2[q]
m=A.k.F((a2-m)/(m+0.02-m),0,1)
l=D.aBS[q]
k=B.dr()
k.mZ(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.k5(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.v2[q]
g=h+0.1
g=A.k.F((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cL(0,0,0,0,e,e,new B.cc(A.A,e,e,new B.kE(m,B.dO(new B.iP(k,e,A.A,!0,e,new C.QV(d,92,w,p,j,i,0,g*s,h,e),e),new B.q(0,l)),e),e),e))
l=D.v2[q]
h=l+0.02
f=A.k.F((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cL(0,0,0,0,e,e,new B.cc(A.A,e,e,B.dO(new B.mB(new C.bce(w,f,q,e),e,new B.av(r,212),e,e),new B.q(0,D.aBS[q])),e),e))}return new B.a5(a4,330,new B.an(A.a0,e,A.ac,A.f,a0,e),e)},
bFn(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.q(-b0,-150),new B.q(b0,-40),D.ejZ],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nI[r]
p=A.k.F((a8-q)/(q+0.2-q),0,1)
o=A.cw.aE(0,p)
q=D.aC1[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.nI[r]
f=g+0.2
e=A.k.F((a8-f)/(g+0.3-f),0,1)
f=D.nI[r]
g=f-0.01
g=A.k.F((a8-g)/(f+0.03-g),0,1)
f=B.dr()
d=f.a
d.$flags&2&&B.aj(d)
d[11]=0.001
f.mZ(l*h+D.dlE[r]*o)
f.fK(l*0.9)
h=0.55+0.45*o
f.k5(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cL(0,0,0,0,a3,a3,new B.cc(A.A,a3,a3,new B.kE(g,B.dO(new B.iP(f,a3,A.A,!0,a3,new C.QV(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.q(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nI[r]
i=q+0.17
a2=A.k.F((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aC1[r]
a6.push(new B.cL(0,0,0,0,a3,a3,new B.cc(A.A,a3,a3,B.dO(new B.mB(new C.bse(A.d.gH(w),a2,a3),a3,new B.av(a4,30),a3,a3),new B.q(0,q+48-4)),a3),a3))}}return new B.a5(b0,330,new B.an(A.a0,a3,A.ac,A.f,a6,a3),a3)}}
C.bsM.prototype={
a4(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a2(w-v,0,w+v,e.b)
q=B.br(u,A.hv)
$.S()
t=B.K()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.y=N.oo
d.ap(q,t)
t=B.br(u,A.hv)
q=B.K()
q.r=A.c.j(s).gp(0)
d.ap(t,q)},
aC(d){return d.c!==this.c||d.d!==this.d}}
C.bsc.prototype={
a4(d,e){var w,v,u=this.c,t=B.bJ(e.ej(A.I),e.b*u,e.a*u)
$.S()
u=B.K()
u.b=A.aa
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.y=U.H0
d.bY(t,u)
u=B.K()
u.b=A.aa
u.c=2.5
u.r=w.j(0.7).gp(0)
d.bY(t,u)
u=t.cr(-14)
v=B.K()
v.b=A.aa
v.c=1
v.r=w.j(0.3).gp(0)
d.bY(u,v)},
aC(d){return!0}}
C.bce.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.ej(A.I),h=this.c,g=A.cw.aE(0,h)
$.S()
w=B.K()
w.b=A.aa
v=1-h
w.c=5*v
u=this.b
w.r=A.d.gH(u).j(0.6*v).gp(0)
d.N(i,40+g*e.a*0.42,w)
t=new B.e4()
t.d_(this.d*17+3)
for(w=40*h*h*3,s=i.a,r=i.b,h=1-h*0.6,q=0;q<26;++q){p=t.aj()*3.141592653589793*2
o=(40+t.aj()*110)*g
n=Math.cos(p)
m=Math.sin(p)
l=t.aj()
k=new B.ao(A.Q,A.N,A.T,A.U,A.S)
j=(q&1)===0?A.d.gH(u):A.c
k.r=j.j(A.k.F(v,0,1)).gp(0)
d.N(new B.q(s+n*o*1.6,r+(m*o+w)),(2+l*3)*h,k)}},
aC(d){return!0}}
C.bse.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o=e.ej(A.I)
for(w=e.a,v=e.b,u=this.b,t=this.c,s=0;s<2;++s){r=A.k.F(t-s*0.18,0,1)
if(r<=0)continue
q=B.bJ(o,v*(0.3+r*0.9),w*(0.5+r*0.7))
$.S()
p=new B.ao(A.Q,A.N,A.T,A.U,A.S)
p.b=A.aa
p.c=2
p.r=u.j((1-r)*0.7).gp(0)
d.bY(q,p)}},
aC(d){return d.c!==this.c}}
C.bwg.prototype={
a4(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2=c0.e,c3=c2+36,c4=d2.a,c5=c4*0.23,c6=c5*0.34,c7=c6*0.85,c8=-c6*0.5,c9=c3-4,d0=new B.a2(0,c9,0+c4,c9+60)
$.S()
c9=B.K()
w=c0.b
v=x.O
c9.sar(new B.a9(A.b1,A.b7,A.x,B.a([A.d.gH(w).j(0.18),A.L],v),c1,c1).aG(0,d0))
d1.au(d0,c9)
c9=B.K()
c9.r=A.c.j(0.18).gp(0)
c9.c=1
d1.ah(new B.q(0,c3),new B.q(c4,c3),c9)
for(c9=c0.w,u=c9>0,t=(c5-16)/3,s=t-5,r=0.6+0.3*c0.r,q=c0.f,p=c3-14,o=x.v,n=c3+c8,m=c0.d,l=c3-6,k=c5+c7+8,j=l+16,i=c0.c,h=c9<1,g=d1.c,f=0;f<3;++f){e=i[f]
if(e<=0)continue
d=C.h9Q(c4,f)
a0=m[f]*c2*e
a1=d-4
a2=$.S()
a3=new B.ao(A.Q,A.N,A.T,A.U,A.S)
a3.r=A.w.j(0.5).gp(0)
a3.y=A.mR
d1.bY(new B.a2(a1,l,a1+k,j),a3)
a3=c3-a0
a1=d+c5
a4=new B.a2(d,a3,a1,a3+a0)
a5=new B.ao(A.Q,A.N,A.T,A.U,A.S)
a6=B.ar(A.d.gH(w),A.c,0.1)
a6.toString
a5.sar(new B.a9(A.b1,A.b7,A.x,B.a([a6,A.d.gal(w)],v),c1,c1).aG(0,a4))
d1.au(a4,a5)
a2=a2.r
a5=B.a([],o)
a7=new B.aE(a2,A.ah,c1,c1,a5)
a5.push(new B.aY(a1,a3))
a7.a8()
a6=a1+c7
a8=a3+c8
a9=new B.aq(a6,a8)
a5.push(a9)
b0=a7.f
if(b0!=null)a9.ai(b0)
a7.a8()
a9=new B.aq(a6,n)
a5.push(a9)
b0=a7.f
if(b0!=null)a9.ai(b0)
a7.a8()
a9=new B.aq(a1,c3)
a5.push(a9)
b0=a7.f
if(b0!=null)a9.ai(b0)
a7.a8()
a9=new B.bt()
a5.push(a9)
a5=a7.f
if(a5!=null)a9.ai(a5)
a7.a8()
a5=new B.ao(A.Q,A.N,A.T,A.U,A.S)
a5.r=B.ar(A.d.gal(w),A.w,0.5).gp(0)
d1.ae(a7,a5)
a5=B.a([],o)
b1=new B.aE(a2,A.ah,c1,c1,a5)
a5.push(new B.aY(d,a3))
b1.a8()
a2=new B.aq(d+c7,a8)
a5.push(a2)
a9=b1.f
if(a9!=null)a2.ai(a9)
b1.a8()
a2=new B.aq(a6,a8)
a5.push(a2)
a6=b1.f
if(a6!=null)a2.ai(a6)
b1.a8()
a2=new B.aq(a1,a3)
a5.push(a2)
a6=b1.f
if(a6!=null)a2.ai(a6)
b1.a8()
a2=new B.bt()
a5.push(a2)
a5=b1.f
if(a5!=null)a2.ai(a5)
b1.a8()
a2=new B.ao(A.Q,A.N,A.T,A.U,A.S)
a2.r=B.ar(A.d.gH(w),A.c,0.45).gp(0)
d1.ae(b1,a2)
b2=new B.ao(A.Q,A.N,A.T,A.U,A.S)
b2.b=A.aa
b2.c=1
b2.r=A.c.j(0.28).gp(0)
d1.au(a4,b2)
d1.ae(a7,b2)
d1.ae(b1,b2)
b3=A.k.bh(a0/22)
for(a2=a3+6,a3=d+8,a5=q*b3*1.3,b4=0;b4<b3;++b4){b5=a5>b3-b4-1
for(a6=p-b4*22-12,a8=a6<a2,a9=a6+10,b6=0;b6<3;++b6){b7=a3+b6*t
if(a8)continue
b0=B.br(new B.a2(b7,a6,b7+s,a9),A.hv)
$.S()
b8=new B.ao(A.Q,A.N,A.T,A.U,A.S)
b8.r=(b5?A.c.j(r):A.w.j(0.22)).gp(0)
d1.ap(b0,b8)}}if(u&&h){a2=c3-a0*c9-14
b9=new B.a2(d,a2,a1,a2+28)
J.bq(g.save())
g.clipRect(B.i_(a4),$.mz()[1],!0)
$.S()
a2=new B.ao(A.Q,A.N,A.T,A.U,A.S)
a2.sar(new B.a9(A.b1,A.b7,A.x,B.a([A.L,A.c.j(0.4),A.L],v),c1,c1).aG(0,b9))
d1.au(b9,a2)
g.restore()}}},
aC(d){return!0}}
C.aOt.prototype={
aY(){this.b5()
this.b4()
this.dN()},
t(){var w=this,v=w.b9$
if(v!=null)v.a5(0,w.gdG())
w.b9$=null
w.a2()}}
C.a1h.prototype={
a6(){return"_Role."+this.b}}
C.qn.prototype={}
C.r6.prototype={}
C.CX.prototype={}
C.a_f.prototype={}
C.afx.prototype={}
C.a1u.prototype={
gZ(d){return this.d}}
C.D7.prototype={}
C.acs.prototype={}
C.acJ.prototype={}
C.aeE.prototype={}
C.biR.prototype={
a3u(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
G.dE(d,"",e,g,h,f)},
bap(d,e,f){return this.a3u(d,e,f,0,0.55)},
aDi(d,e,f,g){return this.a3u(d,e,f,0,g)},
baq(d,e,f,g){return this.a3u(d,e,f,g,0.55)},
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
w.b0()},
al_(d,e,f,g){var w="n"+this.ay++,v=new C.r6(w,e,f,g)
this.a.n(0,w,v)
this.b0()
return v},
t9(d,e,f){return this.al_(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bt(w.b,new C.dq9(e))
A.d.bt(w.c,new C.dqa(e))
w.b0()},
beh(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.n0.h(0,v.b).c===D.xA)return!1
w=this.b
if(A.d.aX(w,new C.dq6(d,e)))return!1
w.push(new C.CX(d,e))
this.b0()
return!0},
c2y(d){var w
if(d.b==="beat")return D.ciq[A.o.E(d.d,4)]
w=this.at
switch(A.o.E(d.d,3)){case 1:return 350+w.aw(500)
case 2:return 1400+w.aw(2200)
default:return 450+w.aw(2000)}},
aGS(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.E(w,6)
t=D.aCi[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.D7(u,t,j.ax,90))
w.push(new C.D7(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.aj()*3.141592653589793*2
v.push(new C.a1u(u,new B.q(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.bap(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.E(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.aj()*3.141592653589793*2
p=100+w.aj()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ar(t,A.c,w.aj()*0.5)
m.toString
v.push(new C.a1u(u,new B.q(o*p,n*p),m,3+w.aj()*4.5,1000+w.aw(700),j.ax))}j.f.push(new C.D7(u,t,j.ax,120))
j.aDi(120,200,"noise",0.5)
j.bap(261.63*Math.pow(2,([7,12,16,19][w.aw(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.D7(u,t,j.ax,230))
w.push(new C.D7(u,t,j.ax+160,160))
w.push(new C.D7(u,t,j.ax+320,100))
j.baq(180+j.at.aw(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.acs(u,new B.q((w.aj()-0.5)*220,-260-w.aj()*180),t,j.ax))
j.baq(300+w.aw(300),110,h,0.8)
break
case"comet":w=j.at
q=w.aj()*3.141592653589793*2
j.w.push(new C.acJ(u,u.a7(0,new B.q(Math.cos(q),Math.sin(q)).aO(0,260+w.aj()*200)),t,j.ax))
j.a3u(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fL()
j.a3u(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.aeE(u,D.aBE[v],t,j.ax))
j.aDi(261.63*Math.pow(2,([0,5,9,12][j.at.aw(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aDi(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.cew[A.o.E(w,3)]
for(k=1;k<=3;++k)j.cvI(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gag(j.b),v=new B.eJ(w,new C.dq7(d));v.C();)j.aBO(w.gR(0),j.ax+D.cqR[A.o.E(g.d,4)])
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
case"chance":s=j.at.aw(100)<D.cI1[A.o.E(g.d,3)]
break
default:break}if(s)for(w=A.d.gag(j.b),v=new B.eJ(w,new C.dq8(d));v.C();)j.aBO(w.gR(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.xw(w,0,v-700)},
cvI(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.a_f(e,"~"+d))},
aBO(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.afx(d.a,v,e,w))
u.push(new C.a_f(w,v))},
a7f(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=B.a4(w).k("b8<2>")
w=B.C(new B.b8(w,v),v.k("M.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aGS(r)
u.n(0,r,o.ax+o.c2y(s))}}w=o.c
v=B.T(w).k("X<1>")
q=B.C(new B.X(w,new C.dqb(o),v),v.k("M.E"))
if(q.length!==0){A.d.bt(w,new C.dqc(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.J)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b2(u,1)
for(u=A.d.gag(v),r=new B.eJ(u,new C.dqd(p));r.C();)o.aBO(u.gR(0),o.ax)}else o.aGS(u)}}A.d.bt(o.d,new C.dqe(o))
A.d.bt(o.e,new C.dqf(o))
A.d.bt(o.f,new C.dqg(o))
A.d.bt(o.w,new C.dqh(o))
A.d.bt(o.x,new C.dqi(o))
A.d.bt(o.r,new C.dqj(o))
o.b0()},
vF(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.e,v=w.length,u=1-1.6*e,t=120*e,s=0;s<v;++s){r=w[s]
q=r.a
p=r.b
o=p.a
p=p.b
r.a=new B.q(q.a+o*e,q.b+p*e)
r.b=new B.q(o*u,p*u+t)}n=j.cy.b-8
for(w=j.r,v=w.length,u=900*e,s=0;s<v;++s){m=w[s]
t=m.b
q=t.a
t=t.b+u
p=m.b=new B.q(q,t)
o=m.a
l=o.a+q*e
o=o.b+t*e
k=m.a=new B.q(l,o)
if(o>n){p=m.a=new B.q(l,n)
t=m.b=new B.q(q*0.9,-t*0.62)
q=p}else{q=k
t=p}q=q.a
if(q<10||q>j.cy.a-10)m.b=new B.q(-t.a*0.8,t.b)}},
ak(){var w,v,u,t,s,r,q,p,o,n,m=this.cy,l=m.a
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
v.push(B.a([n.a,n.b],r))}return A.Y.az(B.I(["nodes",m,"edges",v],u,x.ew),null)},
Ud(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.Y.aS(0,d,null))
k.a9(0)
for(o=x.j,n=J.aX(o.a(J.t(w,"nodes"))),m=k.a;n.C();){v=n.gR(n)
u=B.w(J.t(v,"k"))
if(!D.n0.an(0,u))continue
t=B.w(J.t(v,"id"))
m.n(0,t,new C.r6(t,u,new B.q(B.e0(J.t(v,"x"))*k.cy.a,B.e0(J.t(v,"y"))*k.cy.b),A.k.M(B.e0(J.t(v,"p")))))
s=B.ca(B.aL(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aX(o.a(J.t(w,"edges"))),n=k.b;o.C();){r=o.gR(o)
q=B.w(J.t(r,0))
p=B.w(J.t(r,1))
if(m.an(0,q)&&m.an(0,p))n.push(new C.CX(q,p))}k.b0()
return!0}catch(l){return!1}},
cVe(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a9(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.r6(n,r,new B.q(q*p.a,o*p.b),s))
l.b0()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.beh(w[m.a],w[m.b])}},
gZ(d){return this.cy}}
C.Gw.prototype={}
C.WO.prototype={
S(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aFI(new C.biR(B.U(w,x.f3),v,u,t,s,r,q,p,o,B.U(w,n),B.U(w,n),B.U(w,n),B.U(w,n),A.cM,A.L,A.ay,$.aw()),A.bD,A.I,A.I,A.Z,null,null)}}
C.aFI.prototype={
adk(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$adk=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.az(),$async$adk)
case 6:q=n.k0(m.t(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new C.ewq(s))
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
return B.i($async$adk,v)},
aae(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$aae=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new C.ewf(s))
u=3
w=6
return B.b(B.az(),$async$aae)
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
return B.i($async$aae,v)},
bOE(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a4(n).k("b8<2>")
v=""+n.a+"|"+o.length+"|"+new B.b8(n,w).cG(0,0,new C.ewh())+"|"+A.d.cG(o,0,new C.ewi())
if(v===p.ch)return p.CW
u=new C.ewl()
t=x.s
s=B.a([],t)
r=new C.ewm(p,s,u)
for(n=new B.b8(n,w).gag(0),w=new B.eJ(n,new C.ewj());w.C();){q=n.gR(0)
if(!A.d.aX(o,new C.ewk(q)))s.push(B.w(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.cW(s,0,B.dA(5,"count",x.S),x.N).dm(0)},
Y(){var w,v=this
v.a3()
v.adk()
v.d.db=v.ay
w=v.pW(new C.ewQ(v))
w.fX(0)
v.e!==$&&B.aQ()
v.e=w},
t(){var w=this,v=w.as
if(v!=null)v.a1(0)
v=w.e
v===$&&B.c()
v.t()
v=w.d
v.T$=$.aw()
v.P$=0
w.bzl()},
acQ(d){return this.c1Z(d)},
c1Z(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$acQ=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.az(),$async$acQ)
case 6:q=m.aT(l.t(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.Ud(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aZ1(A.d.gH(D.aB5))
if(s.c!=null)s.m(new C.ewp())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$acQ,v)},
aZ1(d){this.d.cVe(0,d.c,d.d)
this.ED()},
ED(){var w=this.as
if(w!=null)w.a1(0)
this.as=B.cz(A.lH,new C.ewb(this))},
ayF(d){var w,v,u,t,s=this.d.a,r=B.a4(s).k("b8<2>")
s=B.C(new B.b8(s,r),r.k("M.E"))
r=B.T(s).k("ds<1>")
s=new B.ds(s,r)
s=new B.bO(s,s.gJ(0),r.k("bO<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cjA(d){var w,v,u,t,s,r=this.d.a,q=B.a4(r).k("b8<2>")
r=B.C(new B.b8(r,q),q.k("M.E"))
q=B.T(r).k("ds<1>")
r=new B.ds(r,q)
r=new B.bO(r,r.gJ(0),q.k("bO<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c1N(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.n0.h(0,r.b).c===D.xA)continue
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
caM(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hy8(new B.q(n.a+36,n.b+0),new B.q(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cDr(d){var w,v,u,t,s,r,q=this,p=q.ayF(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.eW()
u=v.b
if(u==="button"){w.aGS(p)
return}if(q.r)return
t=D.n0.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.rf)s=6
else s=1
v.d=A.o.E(v.d+1,s)
w.b0()
q.ED()
return}if(q.r)return
r=q.caM(d)
if(r!=null){w=q.d
A.d.cA(w.b,r)
w.b0()
q.ED()}},
ckT(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cjA(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.ayF(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aK(0,d)}},
ckU(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b0()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.q(A.k.F(d.a+s.y.a,46,t.a-46),A.k.F(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b0()}}},
b3m(){var w,v,u=this
if(u.z!=null){w=u.c1N(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.beh(v,w)}else v=!1
if(v){B.jS()
u.ED()}u.z=null
u.d.b0()}else if(u.x!=null){if(u.at)u.ED()
u.x=null}},
adx(d){return this.c4Q(d)},
c4Q(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$adx=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.ayF(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jT()
p=t.c
p.toString
w=3
return B.b(B.bT(I.m6,null,new C.ews(q),p,!0,!0,!1,A.lS,!1,!1,x.y),$async$adx)
case 3:if(f===!0){r.W(0,s)
t.ED()}case 1:return B.h(u,v)}})
return B.i($async$adx,v)},
caK(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.t9(0,d,new B.q(v.a*(0.25+u.aj()*0.5),v.b*(0.2+u.aj()*0.55)))
B.eW()
this.ED()},
ahs(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ahs=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bT(I.m6,null,new C.ewu(),s,!0,!0,!0,A.lS,!1,!1,x.es),$async$ahs)
case 2:t=e
if(t!=null)u.aZ1(t)
return B.h(null,v)}})
return B.i($async$ahs,v)},
aeU(d){var w=0,v=B.j(x.H),u=this,t
var $async$aeU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cf(null,null,!0,null,new C.ewe(),t,null,!0,!0,x.y),$async$aeU)
case 2:if(f===!0){u.d.a9(0)
u.ED()}return B.h(null,v)}})
return B.i($async$aeU,v)},
B(d){var w=this,v=null,u=B.a([B.aj0(w.r?new B.bL(A.a6,v,v,new B.D(A.GX,B.ho(D.bVb,D.fG2,new C.ewO(w),v),v),v):w.caN(),A.b6,A.iH),B.E(B.cr(new C.ewP(w)),1)],x.p)
if(!w.r)u.push(w.cya())
return B.c5(v,A.c3,B.bm(!0,B.x(u,A.m,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)},
bKn(){var w=null,v=new C.ewg(),u=A.w.j(0.7),t=B.n(26),s=B.L(A.bw.j(0.5),A.r,1)
return B.bR(0,B.e8(B.at(B.p(w,B.cg(B.x(B.a([D.fRv,A.aw,D.fZd,A.aC,v.$4(A.oy,A.bw,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(Y.CV,A.cq,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.ku,A.c1,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.a2a,A.bs,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fYw,new B.bL(A.a9,w,w,B.bM(!1,D.fOA,w,w,!0,w,w,w,this.gbKg(),w,w),w)],x.p),A.E,w,A.e,A.O,0,A.p),A.t,w,A.y,w,w,w,w,A.ai),A.f,w,A.Xq,new B.o(I.m6,w,s,t,w,w,A.n),w,w,w,A.fr,Al.am3,w,w,w),w,w,w),u,!0),0,0,0)},
caN(){var w=this,v=null,u=B.aH(v,v,v,v,A1.mZ,v,v,v,new C.ewA(w),v,v,v,v,v,v),t=w.a9F(A.Pn,"How it works",new C.ewB(w),!0),s=w.ay?A.oz:V.rY
return new B.D(D.bFN,B.A(B.a([u,D.bHv,t,w.a9F(s,"Sound",new C.ewC(w),!0),w.a9F(A.e8,"Ideas",w.gcoF(),!0),w.a9F(K.wv,"Clear",w.gcaL(w),!0),w.aPG(A.hs,"Show",new C.ewD(w),!0,!0)],x.p),A.m,v,A.e,A.i,0,v,v),v)},
aPG(d,e,f,g,h){var w=null,v=h?A.bw:A.c.j(0.08),u=B.n(14),t=B.n(14),s=B.a([B.Y(d,h?A.w:A.c,w,w,w,20)],x.p)
return new B.D(Ad.wl,B.aI(!1,A.a3,!0,u,B.aO(!1,t,!0,B.hb(new B.D(new B.Q(8,8,8,8),B.A(s,A.m,w,A.e,A.O,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.aj),w)},
a9F(d,e,f,g){return this.aPG(d,e,f,g,!1)},
cya(){var w=null,v=new C.eww(this),u=A.c.j(0.08)
return B.p(w,B.cg(B.A(B.a([v.$2("START",D.xA),v.$2("CHANGE",D.F3),v.$2("REACT",D.rf)],x.p),A.E,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,A.aM),A.f,w,w,new B.o(I.BG,w,new B.bG(new B.ay(u,1,A.r,-1),A.a1,A.a1,A.a1),w,w,w,A.n),w,w,w,w,D.bAS,w,w,w)},
cyb(d){var w,v,u,t,s=null,r=D.n0.h(0,d)
r.toString
w=B.n(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.L(v.j(0.5),A.r,1)
return new B.D(A.fz,B.aA(s,B.p(s,B.x(B.a([B.Y(r.b,v,s,s,s,22),A.cU,B.d(r.a,s,1,A.a2,s,s,s,D.aVp,s,s,s)],x.p),A.m,s,A.e,A.O,0,A.p),A.f,s,s,new B.o(s,s,t,w,s,new B.a9(A.b1,A.b7,A.x,u,s,s),A.n),s,s,s,s,A.hE,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.ewv(this,d),s,s,s,s,s,s,!1,A.a4),s)}}
C.biS.prototype={
a4(b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=b2.b,b5=b4.ax,b6=b7.c
J.bq(b6.save())
w=b4.ch
if(b5<w){v=(w-b5)/380
b6.translate(Math.sin(b5*0.09)*9*v,Math.cos(b5*0.13)*7*v)}$.S()
u=B.K()
u.r=A.c.j(0.05).gp(0)
for(w=b8.b,t=b8.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28)b7.N(new B.q(r,s),1,u)
q=b4.CW
if(b5<q){$.S()
p=B.K()
p.r=b4.cx.j(0.4*((q-b5)/800)).gp(0)
b7.au(new B.a2(0,0,0+t,0+w),p)}for(w=b4.b,t=w.length,q=x.O,p=x.v,o=b4.a,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){m=w[n]
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
d=new B.aE(f.r,A.ah,b3,b3,e)
e.push(new B.aY(i,j))
d.a8()
a0=Math.max(40,Math.abs(g-i)*0.5)
f=new B.kP(i+a0,j,g-a0,h,g,h)
e.push(f)
e=d.f
if(e!=null)f.ai(e)
d.a8()
a1=D.n0.h(0,l.b).d
a2=D.n0.h(0,k.b).d
f=new B.ao(A.Q,A.N,A.T,A.U,A.S)
f.b=A.aa
f.c=3
f.d=A.bA
e=B.a([a1.j(0.55),a2.j(0.55)],q)
h=B.rV(new B.q(i,j),new B.q(g,h))
f.sar(new B.a9(A.a6,A.a9,A.x,e,b3,b3).aG(0,new B.a2(h.a-2,h.b-2,h.c+2,h.d+2)))
b7.ae(d,f)}for(w=b4.d,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){a3=w[n]
l=o.h(0,a3.a)
k=o.h(0,a3.b)
if(l==null||k==null)continue
j=a3.c
a4=A.k.F((b5-j)/(a3.d-j),0,1)
j=l.c
i=k.c
a5=C.hy8(new B.q(j.a+36,j.b+0),new B.q(i.a-36,i.b),a4)
$.S()
i=new B.ao(A.Q,A.N,A.T,A.U,A.S)
i.r=A.c.j(0.35).gp(0)
i.y=N.oo
b7.N(a5,8,i)
i=new B.ao(A.Q,A.N,A.T,A.U,A.S)
i.r=A.c.gp(0)
b7.N(a5,4,i)}a6=b2.d.$0()
if(a6!=null&&o.h(0,a6)!=null){a7=o.h(0,a6).c.a7(0,D.Jr)
a8=b2.e.$0()
w=a8.a
t=a7.a
a0=Math.max(40,Math.abs(w-t)*0.5)
d=new B.aE($.S().r,A.ah,b3,b3,B.a([],p))
p=a7.b
d.D(new B.aY(t,p))
j=a8.b
d.D(new B.kP(t+a0,p,w-a0,j,w,j))
j=B.K()
j.b=A.aa
j.c=3
j.r=A.c.j(0.7).gp(0)
b7.ae(d,j)
j=B.K()
j.r=A.c.gp(0)
b7.N(a8,7,j)}for(w=b4.f,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){a9=w[n]
p=a9.c
v=A.k.F((b5-p)/700,0,1)
if(b5<p)continue
p=A.dW.aE(0,v)
$.S()
j=new B.ao(A.Q,A.N,A.T,A.U,A.S)
j.b=A.aa
i=1-v
j.c=3.5*i+0.5
j.r=a9.b.j(i*0.9).gp(0)
b7.N(a9.a,14+a9.d*p,j)}for(w=b4.w,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){b0=w[n]
v=A.k.F((b5-b0.d)/600,0,1)
p=b0.a
j=b0.b
i=B.kD(p,j,A.dW.aE(0,v))
i.toString
j=B.kD(p,j,A.dW.aE(0,A.k.F(v-0.35,0,1)))
j.toString
$.S()
p=new B.ao(A.Q,A.N,A.T,A.U,A.S)
p.c=5
p.d=A.bA
h=b0.c
g=B.a([h.j(0),h],q)
f=B.rV(j,i)
p.sar(new B.a9(A.a6,A.a9,A.x,g,b3,b3).aG(0,new B.a2(f.a-4,f.b-4,f.c+4,f.d+4)))
b7.ah(j,i,p)
p=new B.ao(A.Q,A.N,A.T,A.U,A.S)
p.r=A.c.gp(0)
b7.N(i,6,p)
p=new B.ao(A.Q,A.N,A.T,A.U,A.S)
p.r=h.j(0.5*(1-v)).gp(0)
p.y=A.kU
b7.N(i,12,p)}for(w=b4.e,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){a3=w[n]
v=A.k.F((b5-a3.f)/a3.e,0,1)
p=a3.a
$.S()
j=new B.ao(A.Q,A.N,A.T,A.U,A.S)
j.r=a3.c.j(1-v).gp(0)
b7.N(p,a3.d*(1-0.5*v),j)}for(w=b4.r,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){k=w[n]
p=k.a
$.S()
j=new B.ao(A.Q,A.N,A.T,A.U,A.S)
i=k.c
j.r=i.j(0.35).gp(0)
j.y=A.kU
b7.N(p,11,j)
j=k.a
p=new B.ao(A.Q,A.N,A.T,A.U,A.S)
p.sar(new B.c_(A5.xD,0.5,A.x,b3,0,B.a([A.c,i],q),b3,b3).aG(0,B.bX(k.a,8)))
b7.N(j,8,p)}for(b4=b4.x,w=b4.length,n=0;n<b4.length;b4.length===w||(0,B.J)(b4),++n){a5=b4[n]
v=A.k.F((b5-a5.d)/1000,0,1)
t=1-v
b1=C.biT(a5.b,26+8*t,a5.c.j(t),b3,b3,A.u)
t=a5.a
q=b1.b
p=q.c
q=q.a.c
b1.a4(b7,new B.q(t.a-p/2,t.b-(40+60*v+q.gba(q)/2)))}for(b4=new B.dq(o,o.r,o.e);b4.C();)b2.ckr(b7,b4.d,b5)
b6.restore()},
ckr(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.n0.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.F(1-(f-w)/520,0,1)
u=B.bJ(e.c,64,64)
t=B.br(u,A.ii)
s=t.eQ(A.cA)
$.S()
r=B.K()
r.r=A.w.j(0.55).gp(0)
r.y=A.mR
d.ap(s,r)
if(v>0){s=t.cr(6)
r=B.K()
r.r=h.d.j(0.6*v).gp(0)
r.y=A.yN
d.ap(s,r)}s=t.eQ(A.cL)
r=B.K()
q=h.d
r.r=B.ar(q,A.w,0.65).gp(0)
d.ap(s,r)
r=B.K()
s=B.ar(q,A.c,0.18+0.4*v)
s.toString
p=B.ar(q,A.w,0.35)
p.toString
r.sar(new B.a9(A.b1,A.b7,A.x,B.a([s,p],x.O),j,j).aG(0,u))
d.ap(t,r)
r=B.K()
r.b=A.aa
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.ap(t,r)
r=h.b
p=e.c
o=C.biT(B.lw(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a4(d,p.aK(0,new B.q(s/2,r.gba(r)/2)))
n=C.biT(h.a,11,A.c,j,j,A.H)
n.a4(d,e.c.a7(0,new B.q(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.E(e.d,r)]
else m=i==="pop"?D.aBE[A.o.E(e.d,6)]:j
h=h.c
if(h===D.rf){s=e.c.a7(0,new B.q(0,62))
r=B.K()
r.r=D.aCi[A.o.E(e.d,6)].gp(0)
d.N(s,5,r)}else if(m!=null){l=C.biT(m,9.5,A.aD,j,j,A.V)
l.a4(d,e.c.a7(0,new B.q(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.biT(m,9.5,A.aD,j,j,A.V)
l.a4(d,e.c.a7(0,new B.q(-l.b.c/2,54)))}if(k.c)return
if(h!==D.xA)k.b48(d,e.c.aK(0,D.Jr),q)
k.b48(d,e.c.a7(0,D.Jr),q)},
b48(d,e,f){var w
$.S()
w=B.K()
w.r=A.c3.gp(0)
d.N(e,9,w)
w=B.K()
w.b=A.aa
w.c=2.2
w.r=f.gp(0)
d.N(e,9,w)
w=B.K()
w.r=A.c.gp(0)
d.N(e,3.5,w)},
aC(d){return!0}}
C.aNC.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.eh.prototype={}
C.tT.prototype={
arR(d,e,f,g){var w=this
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
C.ab7.prototype={}
C.ace.prototype={}
C.a5d.prototype={
bg8(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.h8()?-1:1
v=t.aj()*3.141592653589793*2
u=f*(0.3+t.aj())
s.push(new C.ab7(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.aj()*0.45));++r}},
c7_(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bt(w,new C.bPd())},
al_(d,e,f,g){var w="p"+this.c++,v=new C.tT(w,e,f,g)
v.arR(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bt(this.b,new C.bPo(e))},
a9(d){A.d.a9(this.a)
A.d.a9(this.b)},
cMc(d,e,f,g,h){return A.d.aX(this.b,new C.bPj(e,f,g,h))},
alQ(d,e,f,g){var w
if(d===f||this.cMc(0,d,e,f,g))return null
w=new C.ace(d,e,f,g)
this.b.push(w)
return w},
aCk(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
Ac(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
aoz(d){return this.Mc(d)&&!d.x&&d.cx>this.Ac(d)},
b8u(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Mc(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
cb6(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.A0.h(0,v)
if(w!=null)return w.a
return 100},
vF(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c7_(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.T(v).k("X<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.J)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.X(v,new C.bPp(a2),t).cG(0,0,new C.bPq(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.U(x.N,u)
n=new C.bPs(o)
m=B.a([],x.t)
l=new C.bPr(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.J)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.J)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.U(u,u)
f=new C.bPu(g,l,n)
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
a2.b8q(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.Ac(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b8q(e,d,w,!0)
a2.bR_(a4)},
b8q(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.U(x.N,b3),b5=new C.bPf(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bPe(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.J)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bPh(B.U(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.J)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=B.bZ(b7,0,!1,b3)
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
if(h)B.bi(B.dK(g,null))
e=B.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=B.bZ(b7,0,!1,b3)
a0=B.bZ(b7,0,!1,b3)
k.a9(0)
j.a9(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.J)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b8u(t)*(1+t.CW))
a4=b2.aCk(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.cb6(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bUj(e,a0,b8)
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
bUj(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return B.bZ(d,0,!1,x.i)
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
t[m]=t[m]-g*u[l][m]}}}f=B.bZ(d,0,!1,x.i)
for(e=0;e<v;++e){t=u[e]
h=t[e]
s=a0[e]
f[s]=Math.abs(h)<1e-14?0:t[v]/h}return f},
bR_(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.J)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aCk(o)/a1.b8u(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.Ac(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bJ1(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bg8(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.uk(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
l=o.fr
j=Math.abs(m*l)
i=Math.abs(l)
if((n==="buck"||n==="regulator")&&!o.x){m=n==="regulator"
h=m?5:o.e
if(i<0.002)o.cy=A.k.F(o.db-h,0,24)
else o.cy=A.k.F(o.cy+(o.dx-h)*0.7,0,24)
l=o.db
g=l>h+0.2&&Math.abs(o.dx-h)<0.35?1:0
o.fx=g
o.ax=g>0?o.ax+a2:0
if(l>26)a1.uk(o,"The "+$.qz().h(0,n).b+" got "+A.k.ad(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.uk(o,"More than 1.5 amps went through the "+$.qz().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.uk(o,"The regulator had to turn "+A.k.ad(o.cy,1)+" V into heat while "+A.k.V(i*1000)+" mA flowed. That is "+A.k.ad(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.uk(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.A0.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qz().h(0,n).b
l=f.b
l=l===A.k.iX(l)?""+A.k.V(l):B.w(l)
g=f.c
g=g===A.k.iX(g)?""+A.k.V(g):B.w(g)
a1.uk(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.ad(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.f9Q.q(0,n)){m=o.fx>0?A.k.F((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.k.F(j/0.9,0,1)
if(!o.x&&j>2.4)a1.uk(o,"The bulb got "+A.k.ad(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.k.F((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.uk(o,"The LED had "+A.k.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.k.F(j/14,0,1)
break
case"motor":n=A.k.F(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.k.F(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.uk(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.k.F(i/1,0,1)
if(!o.x&&i>1)a1.uk(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.uk(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.k.F(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.uk(o,"The capacitor was charged to "+A.k.ad(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bJ1(d){return A.d.aX(this.a,new C.bPc(d))},
uk(d,e){var w
d.x=!0
d.ay=e
this.bg8(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bkM(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a9(0)},
aIC(d){var w=d.b
return D.aSg.q(0,w)||D.A0.an(0,w)||w==="buck"||w==="regulator"},
bhC(d){var w,v=!0
if(!this.Mc(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.A0.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
Vs(d,e){var w=this.b
return new B.X(w,new C.bPw(d,e),B.T(w).k("X<1>")).gJ(0)},
tL(d){var w,v
if(d.x)return!1
w=d.b
if(D.A0.an(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bfF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qz().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aIC(d)||i.tL(d))return null
w=i.Vs(d,0)
v=i.Vs(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.T(u).k("X<1>")
s=B.C(new B.X(u,i.gcUO(),t),t.k("M.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.iX(r)?""+A.k.V(r):B.w(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.ad(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.A0.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.Mp("battery"),o=J.aX(t.a),t=new B.eJ(o,t.b);t.C();){n=o.gR(o)
if(n.e===1.5&&n.as<=0.02&&i.Vs(n,0)+i.Vs(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.Mp("switch"),o=J.aX(t.a),t=new B.eJ(o,t.b);t.C();)if(!o.gR(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qz().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.Ac(k))return"The "+$.qz().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.ad(k.cx,2)+" amps, but it can only give about "+A.k.ad(i.Ac(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.aX(u,new C.bPk(i,d))
h=q.b
h=h===A.k.iX(h)?""+A.k.V(h):B.w(h)
u=A.k.ad(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.ad(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.ad(Math.abs(d.dy),1)+" V). Try a bigger battery."},
Mp(d){var w=this.a
return new B.X(w,new C.bPn(d),B.T(w).k("X<1>"))},
aIf(d){return this.Mp(d).aX(0,new C.bPm(0.35))},
q8(d,e){return A.d.aX(this.a,new C.bPl(e))}}
C.ajA.prototype={
a4(c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8=c3.a,b9=c3.b,c0=0+b8,c1=0+b9
$.S()
w=B.K()
w.r=F.y8.gp(0)
c2.au(new B.a2(0,0,c0,c1),w)
v=B.K()
v.r=A.c.j(0.06).gp(0)
for(u=12;u<b8;u+=24)for(t=12;t<b9;t+=24)c2.N(new B.q(u,t),1.1,v)
for(w=b6.b,s=w.b,r=s.length,q=b6.f,p=0;p<s.length;s.length===r||(0,B.J)(s),++p){o=s[p]
n=o.a
m=n.c
l=o.b===0?-1:1
k=D.mn.an(0,n.b)?(n.ch-1)*38:0
n=n.d
j=o.c
i=j.c
h=o.d===0?-1:1
g=D.mn.an(0,j.b)?(j.ch-1)*38:0
b6.cIU(c2,new B.q(m*b8+l*(42+k),n*b9),new B.q(i*b8+h*(42+g),j.d*b9),o,o===q)}s=b6.d
if(s!=null&&b6.e!=null){f=C.hLw(s.a,s.b,c3)
s=b6.e
s.toString
$.S()
r=B.K()
r.r=A.ad.gp(0)
r.c=3
r.d=A.bA
c2.ah(f,s,r)}for(s=w.a,r=s.length,q=b6.c,n=c2.c,m=b6.r,l=x.v,p=0;p<s.length;s.length===r||(0,B.J)(s),++p){e=s[p]
k=e.c*b8
j=e.d*b9
if(e.Q>0){i=Math.sin(w.d*30)
$.S()
h=new B.ao(A.Q,A.N,A.T,A.U,A.S)
h.r=F.Ms.j(A.k.F(e.Q*0.45,0,0.6)).gp(0)
h.y=A.yN
c2.N(new B.q(k,j),46+14*i,h)}d=m.h(0,e.a)
if(d==null)d=1
J.bq(n.save())
n.translate(k,j)
i=A.k.F(A.lz.aE(0,A.k.F(d,0,1)),0.01,1.4)
n.scale(i,i)
b6.clq(c2,e,e===q)
n.restore()
i=e.b
if((i==="battery"||i==="solar"||i==="crank"||i==="turbine")&&!e.x&&e.cx>w.Ac(e)){h=k+0
g=j+-40
a0=Math.sin(w.d*10)
a1=$.S().r
a2=B.a([],l)
a3=new B.aE(a1,A.ah,b7,b7,a2)
a4=g-13
a2.push(new B.aY(h,a4))
a3.a8()
a5=h+13
a6=g+10
a7=new B.aq(a5,a6)
a2.push(a7)
a8=a3.f
if(a8!=null)a7.ai(a8)
a3.a8()
a7=h-13
a8=new B.aq(a7,a6)
a2.push(a8)
a9=a3.f
if(a9!=null)a8.ai(a9)
a3.a8()
a8=new B.bt()
a2.push(a8)
a2=a3.f
if(a2!=null)a8.ai(a2)
a3.a8()
a2=new B.ao(A.Q,A.N,A.T,A.U,A.S)
a2.r=A.ax.j(0.65+0.35*a0).gp(0)
c2.ae(a3,a2)
a2=B.a([],l)
a1=new B.aE(a1,A.ah,b7,b7,a2)
a2.push(new B.aY(h,a4))
a1.a8()
a0=new B.aq(a5,a6)
a2.push(a0)
a3=a1.f
if(a3!=null)a0.ai(a3)
a1.a8()
a0=new B.aq(a7,a6)
a2.push(a0)
a3=a1.f
if(a3!=null)a0.ai(a3)
a1.a8()
a0=new B.bt()
a2.push(a0)
a2=a1.f
if(a2!=null)a0.ai(a2)
a1.a8()
a0=new B.ao(A.Q,A.N,A.T,A.U,A.S)
a0.b=A.aa
a0.c=1.6
a0.r=A.c.gp(0)
c2.ae(a1,a0)
b0=new B.iF(new B.en("!",b7,b7,A.cH,b7,b7,b7,b7,b7,b7,new B.G(!0,A.c,b7,b7,b7,b7,14,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bW,new B.jd(1),b7,b7,b7,b7,A.bX,b7,A.ct)
b0.ef()
b0.a4(c2,new B.q(h+-3,g+-8))}if(!e.x)h=(D.aSg.q(0,i)||D.A0.an(0,i)||i==="buck"||i==="regulator")&&!w.tL(e)&&w.Vs(e,0)+w.Vs(e,1)>0
else h=!1
if(h){k+=0
j+=-40
$.S()
h=new B.ao(A.Q,A.N,A.T,A.U,A.S)
h.r=A.az.gp(0)
c2.N(new B.q(k,j),10,h)
b0=new B.iF(new B.en("!",b7,b7,A.cH,b7,b7,b7,b7,b7,b7,new B.G(!0,A.w,b7,b7,b7,b7,14,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bW,new B.jd(1),b7,b7,b7,b7,A.bX,b7,A.ct)
b0.ef()
b0.a4(c2,new B.q(k+-3,j+-8))}for(b1=0;b1<2;++b1){k=e.c
j=b1===0
h=j?-1:1
g=D.mn.an(0,i)?(e.ch-1)*38:0
g=k*b8+h*(42+g)
h=e.d*b9
b0=new B.q(g,h)
$.S()
k=new B.ao(A.Q,A.N,A.T,A.U,A.S)
k.r=F.y8.gp(0)
c2.N(b0,7,k)
k=new B.ao(A.Q,A.N,A.T,A.U,A.S)
k.b=A.aa
k.c=2.4
k.r=(j&&w.bhC(e)?A.c0:A.ad).gp(0)
c2.N(b0,6,k)
if(j&&w.bhC(e)){b0=new B.iF(new B.en("+",b7,b7,A.cH,b7,b7,b7,b7,b7,b7,new B.G(!0,A.c0,b7,b7,b7,b7,13,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bW,new B.jd(1),b7,b7,b7,b7,A.bX,b7,A.ct)
b0.ef()
b0.a4(c2,new B.q(g+-4,h+-22))}}}for(r=w.f,q=r.length,p=0;p<r.length;r.length===q||(0,B.J)(r),++p){b2=r[p]
n=b2.a*b8+b2.c
m=b2.b*b9+b2.d
b3=new B.q(n,m)
b4=A.k.F(b2.r/0.8,0,1)
l=B.ar(M.Na,F.ZL,b4)
l.toString
k=b2.f
$.S()
j=new B.ao(A.Q,A.N,A.T,A.U,A.S)
j.r=l.gp(0)
j.c=2.4
j.d=A.bA
c2.ah(b3,new B.q(n-b2.e*0.035,m-k*0.035),j)
j=new B.ao(A.Q,A.N,A.T,A.U,A.S)
j.r=l.j(0.35*b4).gp(0)
j.y=A.H1
c2.N(b3,4.5*b4+1,j)}if(A.d.aX(s,new C.bJE())){b5=A.d.cG(s,0,new C.bJF())
$.S()
b9=B.K()
b9.r=D.bgb.j(0.05+0.09*b5*(0.5+0.5*Math.sin(w.d*22))).gp(0)
c2.au(new B.a2(0,0,c0,c1),b9)
b0=B.fv(b7,A.ct,b7,b7,b7,D.fkZ,A.a5,A.bW,b7,A.dD,A.bX)
b0.o3(b8-24)
b0.a4(c2,new B.q(12,10))}},
qP(d,e,f,g,h){var w=null,v=B.fv(w,A.ct,w,w,w,B.cQ(w,w,w,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a5,A.bW,w,A.dD,A.bX)
v.ef()
v.a4(d,f)},
cIU(d,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.aE($.S().r,A.ah,null,null,B.a([],x.v))
e.D(new B.aY(a0.a,a0.b))
w=C.hDz(a0,a1,a2)
e.D(new B.c4(w.a,w.b,a1.a,a1.b))
v=a2.a
u=Math.abs(v.fr)
t=a2.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ar(A.aU,F.Ms,A.k.F(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ar(A.aJ,A.aU,A.k.F(r*1.2,0,1))
u.toString
o=u}else o=A.bo
u=B.K()
u.b=A.aa
u.c=a3?7:5
u.d=A.bA
s=a3?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
d.ae(e,u)
u=B.K()
u.b=A.aa
u.c=2.4
u.d=A.bA
u.r=(a3?A.c:o).gp(0)
d.ae(e,u)
if(q){n=new B.TE(new B.rs(B.xD(e),!1,B.a([],x.R))).gH(0)
m=40+A.k.F(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=this.b
k=0
for(;;){v.ij()
j=t[u].b
j===$&&B.c()
if(!(k<j.a.length()/22))break
j=s.d
v.ij()
i=t[u].b
i===$&&B.c()
i=A.k.E(k*22+j*m*l,i.a.length())
v.ij()
j=t[u].b
j===$&&B.c()
j=j.a.length()
v.ij()
h=t[u].b
h===$&&B.c()
g=A.k.E(i+j,h.a.length())
v.ij()
f=t[u].Ho(g)
j=new B.ao(A.Q,A.N,A.T,A.U,A.S)
j.r=A.c.gp(0)
d.N(f.a,2.6,j);++k}}},
PA(d,e,f,g){var w,v,u,t
$.S()
w=B.K()
v=g?A.b1:A.a6
u=g?A.b7:A.a9
t=B.ar(e,A.w,0.3)
t.toString
w.sar(new B.a9(v,u,A.x,B.a([e,f,e,t],x.O),A.Io,null).aG(0,d))
return w},
axS(d,e,f){return this.PA(d,e,f,!0)},
c6z(d,e){return this.PA(d,A.bo,A.iB,e)},
aiC(d,e){var w,v,u
$.S()
w=B.K()
w.sar(D.aQs.aG(0,B.bX(e,4.2)))
d.N(e,4.2,w)
w=e.a7(0,D.emz)
v=e.a7(0,D.emI)
u=B.K()
u.r=A.ed.gp(0)
u.c=1.2
d.ah(w,v,u)},
clq(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.S(),c0=B.K()
c0.sar(D.c56.aG(0,D.f63))
c0.c=3.4
c0.d=A.bA
w=B.K()
w.r=A.w.j(0.45).gp(0)
w.y=N.oo
c1.bY(D.f5S,w)
if(c3){w=B.br(D.f61,A.jK)
v=B.K()
v.r=A.c.j(0.14).gp(0)
c1.ap(w,v)}u=C.hj3(c2)
c1.ah(new B.q(-u,0),D.eoa,c0)
c1.ah(D.elc,new B.q(u,0),c0)
t=c2.x
w=c2.b
s=D.mn.an(0,w)&&c2.ch!==1
if(s){J.bq(c1.c.save())
c1.bV(0,c2.ch)}switch(w){case"battery":b3.bFN(c1,c2)
break
case"solar":r=B.br(D.f5V,A.ij)
c1.ap(r,b3.PA(new B.a2(r.a,r.b,r.c,r.d),A.dj,A.bP,!1))
b9=B.K()
w=B.ar(D.bk4,A.d5,0.25+0.55*c2.f)
w.toString
v=B.ar(D.btd,A.mI,0.3+0.4*c2.f)
v.toString
b9.sar(new B.a9(A.aA,A.aF,A.x,B.a([w,v],x.O),b4,b4).aG(0,D.a98))
c1.au(D.a98,b9)
q=B.K()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(p=1;p<6;++p){b9=-34+p*68/6
c1.ah(new B.q(b9,-18),new B.q(b9,18),q)}for(p=1;p<4;++p){b9=-18+p*9
c1.ah(new B.q(-34,b9),new B.q(34,b9),q)}for(p=0;p<6;++p){b9=-34+(p+0.5)*68/6
$.S()
w=new B.ao(A.Q,A.N,A.T,A.U,A.S)
w.r=A.cr.j(0.5).gp(0)
w.c=0.6
c1.ah(new B.q(b9,-18),new B.q(b9,18),w)}b9=new B.aE($.S().r,A.ah,b4,b4,B.a([],x.v))
b9.D(new B.aY(-34,18))
b9.D(new B.aq(-6+40*c2.f,-18))
b9.D(new B.aq(4+40*c2.f,-18))
b9.D(new B.aq(-24,18))
b9.D(new B.bt())
w=B.K()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.ae(b9,w)
w=c2.f
b9=B.K()
b9.r=A.dE.j(0.9).gp(0)
c1.N(D.eli,4+4*w,b9)
break
case"crank":o=B.br(D.f5G,A.fI)
c1.ap(o,b3.axS(new B.a2(o.a,o.b,o.c,o.d),A.bu,A.bM))
b9=B.K()
b9.sar(D.aQt.aG(0,B.bX(A.I,12)))
c1.N(A.I,12,b9)
n=new B.q(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=B.K()
b9.r=A.cr.gp(0)
b9.c=5
b9.d=A.bA
c1.ah(A.I,n,b9)
b9=B.K()
b9.sar(D.exG.aG(0,B.bX(n,7)))
c1.N(n,7,b9)
b3.aiC(c1,D.eo2)
b3.aiC(c1,D.el1)
break
case"turbine":b9=b9.r
w=x.v
v=new B.aE(b9,A.ah,b4,b4,B.a([],w))
v.D(new B.aY(-3,24))
v.D(new B.aq(3,24))
v.D(new B.aq(1.5,0))
v.D(new B.aq(-1.5,0))
v.D(new B.bt())
m=B.K()
m.r=A.bP.gp(0)
c1.ae(v,m)
for(v=c1.c,l=0;l<3;++l){m=c2.y
J.bq(v.save())
v.rotate((m+l*2.094)*180/3.141592653589793,0,0)
m=B.a([],w)
k=new B.aE(b9,A.ah,b4,b4,m)
m.push(new B.aY(0,-2))
k.a8()
j=new B.c4(6,-14,2,-30)
m.push(j)
i=k.f
if(i!=null)j.ai(i)
k.a8()
j=new B.c4(-2,-14,0,-2)
m.push(j)
i=k.f
if(i!=null)j.ai(i)
k.a8()
j=new B.bt()
m.push(j)
m=k.f
if(m!=null)j.ai(m)
k.a8()
m=new B.ao(A.Q,A.N,A.T,A.U,A.S)
m.r=A.c.gp(0)
c1.ae(k,m)
v.restore()}b9=B.K()
b9.sar(D.exn.aG(0,B.bX(A.I,4.5)))
c1.N(A.I,4.5,b9)
break
case"switch":o=B.br(D.f5N,A.n3)
b9=B.K()
b9.sar(D.asx.aG(0,new B.a2(o.a,o.b,o.c,o.d)))
c1.ap(o,b9)
b3.aiC(c1,D.TS)
b3.aiC(c1,D.aLe)
h=c2.w?D.aLe:H.aL5
b9=B.K()
b9.r=A.av.gp(0)
b9.c=6
b9.d=A.bA
c1.ah(D.TS,h,b9)
b9=B.K()
b9.r=(c2.w?A.b9:A.bP).gp(0)
b9.c=4
b9.d=A.bA
c1.ah(D.TS,h,b9)
b9=B.kD(D.TS,h,0.85)
b9.toString
w=B.K()
w.r=A.ax.gp(0)
c1.N(b9,5,w)
break
case"fuse":g=B.br(D.aRa,D.aQx)
b9=B.K()
b9.r=A.fq.j(0.25).gp(0)
c1.ap(g,b9)
b9=B.K()
b9.b=A.aa
b9.c=1.4
b9.r=A.aD.gp(0)
c1.ap(g,b9)
if(!t){b9=B.K()
b9.c=1.6
b9.r=B.ar(A.bP,A.cJ,c2.fx).gp(0)
c1.ah(D.aLy,D.aLc,b9)}else{b9=B.K()
b9.c=1.6
b9.r=A.bV.gp(0)
c1.ah(D.aLy,D.eow,b9)
b9=B.K()
b9.c=1.6
b9.r=A.bV.gp(0)
c1.ah(D.em6,D.aLc,b9)
b9=B.K()
b9.r=A.dN.gp(0)
c1.N(A.I,6,b9)}for(f=0;f<2;++f){e=B.bJ(new B.q(M.hg[f]*22,0),20,9)
c1.ap(B.br(e,A.hM),b3.PA(e,A.d2,A.o5,!0))}break
case"pot":b9=B.K()
b9.sar(D.exy.aG(0,B.bX(A.I,21)))
c1.N(A.I,21,b9)
for(l=0;l<=10;++l){d=2.356194490192345+l*3.141592653589793*1.5/10
b9=Math.cos(d)
w=Math.sin(d)
v=Math.cos(d)
m=Math.sin(d)
k=new B.ao(A.Q,A.N,A.T,A.U,A.S)
k.r=A.aD.gp(0)
k.c=1.2
c1.ah(new B.q(b9*18,w*18),new B.q(v*22,m*22),k)}b9=B.K()
b9.sar(D.exl.aG(0,B.bX(A.I,13)))
c1.N(A.I,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
m=Math.sin(a0)
k=B.K()
k.r=A.aU.gp(0)
k.c=3
k.d=A.bA
c1.ah(new B.q(b9*3,w*3),new B.q(v*12,m*12),k)
break
case"resistor":a1=B.br(D.aRa,D.aQx)
b9=B.K()
b9.sar(D.c8s.aG(0,new B.a2(a1.a,a1.b,a1.c,a1.d)))
c1.ap(a1,b9)
b9=x.O
a2=B.I([47,B.a([B.b0(b5),B.b0(b6),A.w],b9),100,B.a([B.b0(b7),A.w,B.b0(b7)],b9),220,B.a([B.b0(b8),B.b0(b8),B.b0(b7)],b9),470,B.a([B.b0(b5),B.b0(b6),B.b0(b7)],b9),1000,B.a([B.b0(b7),A.w,B.b0(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(p=0;p<3;++p){b9=-14+p*9
w=new B.ao(A.Q,A.N,A.T,A.U,A.S)
w.r=a3[p].gp(0)
c1.au(new B.a2(b9,-9,b9+4.5,9),w)}b9=B.K()
b9.r=A.aU.gp(0)
c1.au(D.f6f,b9)
b9=c2.r
b3.qP(c1,b9>=1000?"1k\u03a9":""+A.k.V(b9)+"\u03a9",D.env,A.ad,10)
break
case"bulb":w=c2.fx
if(w>0){v=B.K()
v.r=A.dE.j(0.55*w).gp(0)
v.y=A.yN
c1.N(H.vk,34,v)}o=B.bJ(D.ejW,12,18)
c1.ap(B.br(o,A.hM),b3.PA(o,A.bo,A.e5,!0))
for(p=0;p<3;++p){w=13+p*3.5
v=new B.ao(A.Q,A.N,A.T,A.U,A.S)
v.r=A.dq.gp(0)
v.c=1
c1.ah(new B.q(-9,w),new B.q(9,w),v)}w=B.K()
if(t)v=A.Mi
else{v=B.ar(A.e5,A.i4,c2.fx)
m=c2.fx
v=v.j(0.25+0.7*m)}if(t)m=A.G0
else{m=B.ar(A.dj,A.dE,c2.fx)
m.toString}w.sar(new B.c_(A.tH,0.5,A.x,b4,0,B.a([v,m.j(0.18+0.5*c2.fx)],x.O),b4,b4).aG(0,B.bX(A.tg,17)))
c1.N(A.tg,17,w)
w=B.K()
w.b=A.aa
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.N(A.tg,17,w)
b9=b9.r
w=x.v
m=new B.aE(b9,A.ah,b4,b4,B.a([],w))
m.D(new B.aY(-9,-12))
m.D(new B.c4(-12,-4,-9,0))
v=B.K()
v.b=A.aa
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.ae(m,v)
v=B.K()
v.r=A.d_.gp(0)
v.c=1.4
c1.ah(D.eoq,D.eos,v)
v=B.K()
v.r=A.d_.gp(0)
v.c=1.4
c1.ah(D.elZ,D.em1,v)
w=B.a([],w)
a4=new B.aE(b9,A.ah,b4,b4,w)
a4.D(new B.aY(-4,-2))
for(l=0;l<6;l=a5){a5=l+1
b9=(l&1)===0?-6:1
b9=new B.aq(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.ai(v)
a4.a8()}$.S()
b9=B.K()
b9.b=A.aa
b9.c=1.8
if(t)w=A.aT
else{w=B.ar(A.dj,D.bl5,c2.fx)
w.toString}b9.r=w.gp(0)
c1.ae(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=B.K()
v.r=A.ax.j(0.6*w).gp(0)
v.y=D.bHi
c1.N(A.tg,30,v)}w=B.K()
w.r=A.e5.gp(0)
w.c=2.4
c1.ah(D.eoy,D.eox,w)
w=B.K()
w.r=A.e5.gp(0)
w.c=2.4
c1.ah(D.em8,D.em7,w)
b9=b9.r
w=x.v
a6=new B.aE(b9,A.ah,b4,b4,B.a([],w))
a6.D(new B.aY(-12,8))
a6.D(new B.aq(-12,-6))
a6.D(new B.c4(0,-26,12,-6))
a6.D(new B.aq(12,8))
a6.D(new B.bt())
v=B.K()
if(t)m=A.iG
else{m=B.ar(A.eo,D.bmO,c2.fx)
m.toString}if(t)k=A.kP
else{k=B.ar(A.jU,A.ax,c2.fx)
k.toString}v.sar(new B.a9(A.aA,A.aF,A.x,B.a([m,k],x.O),b4,b4).aG(0,D.f57))
c1.ae(a6,v)
v=B.K()
v.b=A.aa
v.c=1.2
v.r=A.jV.gp(0)
c1.ae(a6,v)
v=B.K()
v.r=A.ep.gp(0)
c1.au(D.f5d,v)
w=new B.aE(b9,A.ah,b4,b4,B.a([],w))
w.D(new B.aY(-7,-4))
w.D(new B.c4(-6,-12,0,-15))
b9=B.K()
b9.b=A.aa
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.ae(w,b9)
break
case"motor":a7=new B.a2(-28,-14,20,14)
c1.ap(B.br(a7,A.hN),b3.axS(a7,A.am,A.aO))
b9=B.K()
b9.r=A.cs.gp(0)
c1.au(D.f4H,b9)
b9=B.K()
b9.r=A.cr.gp(0)
c1.au(D.f4J,b9)
b9=c1.c
J.bq(b9.save())
b9.translate(31,0)
for(l=0;l<3;++l){J.bq(b9.save())
b9.rotate((c2.y+l*2.094)*180/3.141592653589793,0,0)
w=B.bJ(H.aL0,15,7)
v=new B.ao(A.Q,A.N,A.T,A.U,A.S)
v.r=A.cJ.j(0.9).gp(0)
c1.bY(w,v)
b9.restore()}w=B.K()
w.r=A.av.gp(0)
c1.N(A.I,3,w)
b9.restore()
b3.qP(c1,"M",D.eo1,A.av,14)
break
case"buzzer":a8=B.bJ(A.I,42,42)
b9=B.K()
b9.sar(D.exC.aG(0,a8))
c1.bY(a8,b9)
b9=B.K()
b9.r=A.w.gp(0)
c1.N(A.I,6,b9)
b9=B.K()
b9.b=A.aa
b9.c=1.4
b9.r=A.aW.gp(0)
c1.N(A.I,6,b9)
b3.qP(c1,"+",D.enV,A.ad,12)
for(b9=b3.b,l=1;l<=3;++l){w=c2.fx
v=w>0?A.k.E(b9.d*14,5):0
v=B.bX(A.I,24+l*5+v)
m=new B.ao(A.Q,A.N,A.T,A.U,A.S)
m.b=A.aa
m.c=2
m.r=A.c1.j(w*(1-l*0.22)).gp(0)
c1.cN(v,-0.7,1.4,!1,m)}break
case"heater":o=B.br(D.f5J,A.hN)
w=B.K()
w.sar(D.c65.aG(0,new B.a2(o.a,o.b,o.c,o.d)))
c1.ap(o,w)
w=B.a([],x.v)
a9=new B.aE(b9.r,A.ah,b4,b4,w)
a9.D(new B.aY(-24,0))
for(l=0;l<8;l=a5){b9=(l&1)===0?-10:10
a5=l+1
b9=new B.c4(-24+l*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.ai(v)
a9.a8()}b9=c2.fx
if(b9>0.1){$.S()
w=B.K()
w.b=A.aa
w.c=10
w.r=D.blO.j(0.5*b9).gp(0)
w.y=A.kU
c1.ae(a9,w)}$.S()
b9=B.K()
b9.b=A.aa
b9.c=3.2
b9.d=A.bA
b9.r=B.ar(A.m4,A9.yf,c2.fx).gp(0)
c1.ae(a9,b9)
break
case"capacitor":a7=new B.a2(-16,-22,16,18)
b9=B.br(a7,A.hN)
w=B.K()
w.sar(D.c4Z.aG(0,a7))
c1.ap(b9,w)
w=B.K()
w.r=A.bP.gp(0)
c1.au(D.f5m,w)
for(p=0;p<4;++p){b0=new B.iF(new B.en("\u2212",b4,b4,A.cH,b4,b4,b4,b4,b4,b4,new B.G(!0,A.av,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a5,A.bW,new B.jd(1),b4,b4,b4,b4,A.bX,b4,A.ct)
b0.ef()
b0.a4(c1,new B.q(-14,-18+p*9))}b1=new B.a2(-16,-24,16,-17)
c1.ap(B.br(b1,A.hM),b3.c6z(b1,!1))
b9=38*c2.fx
w=18-b9
$.S()
v=B.K()
v.r=A.b9.j(0.5).gp(0)
c1.au(new B.a2(-3,w,11,w+b9),v)
b3.qP(c1,"1F",H.vk,A.c,11)
break
case"radio":a1=B.br(D.a98,A.fI)
b9=B.K()
b9.sar(D.c8I.aG(0,new B.a2(a1.a,a1.b,a1.c,a1.d)))
c1.ap(a1,b9)
b9=B.K()
b9.b=A.aa
b9.c=1.4
b9.r=A.o5.j(0.6).gp(0)
c1.ap(a1,b9)
b9=B.br(D.f5K,A.ij)
w=B.K()
w.r=A.dR.gp(0)
c1.ap(b9,w)
for(p=0;p<6;++p){b9=-10+p*4.4
w=new B.ao(A.Q,A.N,A.T,A.U,A.S)
w.r=A.m4.gp(0)
w.c=1.4
c1.ah(new B.q(-27,b9),new B.q(-3,b9),w)}b9=B.K()
b9.r=(c2.fx>0?A.fY:A.o8).gp(0)
c1.au(D.f4O,b9)
if(c2.fx>0){b9=8+A.k.E(b3.b.d*7,18)
w=B.K()
w.r=A.bC.gp(0)
w.c=1.6
c1.ah(new B.q(b9,-13),new B.q(b9,-3),w)}b9=B.K()
b9.sar(D.aQt.aG(0,B.bX(D.a85,6)))
c1.N(D.a85,6,b9)
b9=B.K()
b9.r=A.o5.gp(0)
c1.N(D.elb,4,b9)
b9=B.K()
b9.r=A.e5.gp(0)
b9.c=1.8
c1.ah(D.el6,D.aLj,b9)
if(c2.fx>0)for(b9=b3.b,l=1;l<=2;++l){w=B.bX(D.aLj,4+l*5+A.k.E(b9.d*8,5))
v=new B.ao(A.Q,A.N,A.T,A.U,A.S)
v.b=A.aa
v.c=1.4
v.r=A.od.j(0.7).gp(0)
c1.cN(w,-2.4,1.6,!1,v)}break
case"tv":w=B.br(D.f5U,A.hN)
v=B.K()
v.r=M.nq.gp(0)
c1.ap(w,v)
b2=B.br(D.f5R,A.hM)
if(c2.fx>0&&!c2.x){b9=c1.c
J.bq(b9.save())
b9.clipRRect(B.om(b2),$.nJ(),!0)
b9.translate(-33,-21)
L.hf1(c1,D.fcG,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=B.K()
b9.r=A.b9.gp(0)
c1.N(D.elp,1.6,b9)}else{w=B.K()
w.r=D.w4.gp(0)
c1.ap(b2,w)
b9=new B.aE(b9.r,A.ah,b4,b4,B.a([],x.v))
b9.D(new B.aY(-33,-21))
b9.D(new B.aq(-10,-21))
b9.D(new B.aq(-33,0))
b9.D(new B.bt())
w=B.K()
w.r=A.c.j(0.05).gp(0)
c1.ae(b9,w)}b9=B.K()
b9.r=A.bu.gp(0)
c1.au(D.f5c,b9)
break}C.io3(c1,c2,b3.b.d,b3.gcb7())
if(t)b3.qP(c1,"\u2716",D.eoB,A.ax,14)
if(s)c1.c.restore()},
bFN(d,e){var w,v,u,t,s,r,q,p,o=this,n=e.e
if(n<=4.5){w=new B.a2(-28,-13,28,13)
d.ap(B.br(w,A.n3),o.axS(w,A.dj,A.jj))
v=new B.a2(-22,-13,22,13)
$.S()
u=B.K()
u.sar(D.asq.aG(0,v))
d.au(v,u)
u=B.K()
u.r=A.e0.gp(0)
d.au(D.f5w,u)
t=new B.a2(28,-5,34,5)
d.ap(B.br(t,A.hv),o.PA(t,A.dj,A.iB,!0))
o.qP(d,"+",D.ekN,A.aU,11)
o.qP(d,"\u2212",D.eo3,A.ad,11)
o.qP(d,B.w(n===A.k.iX(n)?A.k.V(n):n)+"V",D.enK,A.aU,13)
if(n===1.5){u=B.K()
u.r=A.bB.gp(0)
d.au(D.f5v,u)
u=e.as
s=B.K()
s.r=B.ar(A.ax,A.b9,u).gp(0)
d.au(new B.a2(-22,14,-22+44*u,18),s)
if(e.as<=0.02)o.qP(d,"FLAT",D.enu,A.c0,9)}if(n>2){u=B.K()
u.r=A.aW.gp(0)
u.c=1
d.ah(D.ek4,D.aKT,u)
o.qP(d,n>3?"3 cells":"2 cells",D.enJ,A.aD,8)}}else if(n<=9){r=new B.a2(-22,-17,22,17)
u=B.br(r,A.n3)
$.S()
s=B.K()
s.sar(D.c8f.aG(0,r))
d.ap(u,s)
s=B.K()
s.r=A.cV.gp(0)
d.au(D.f5x,s)
for(q=0;q<2;++q){p=F.aC0[q]
u=p<0?5:3.6
s=new B.ao(A.Q,A.N,A.T,A.U,A.S)
s.sar(D.aQs.aG(0,B.bX(new B.q(p,-18),5)))
d.N(new B.q(p,-18),u,s)}o.qP(d,"9V",D.enC,A.c,16)}else{r=new B.a2(-34,-16,34,16)
u=B.br(r,A.ij)
$.S()
s=B.K()
s.sar(D.asq.aG(0,r))
d.ap(u,s)
s=B.K()
s.r=A.bs.gp(0)
d.au(D.f5T,s)
for(q=0;q<2;++q){u=B.br(B.bJ(new B.q(F.St[q],-20),8,10),A.hv)
s=new B.ao(A.Q,A.N,A.T,A.U,A.S)
s.r=A.cr.gp(0)
d.ap(u,s)}o.qP(d,"+",D.ekW,A.ax,10)
o.qP(d,"12V",D.enG,A.av,15)}},
aC(d){return!0}}
C.mS.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a9(k)
A.d.a9(d.b)
w=B.U(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.tT(o,r,q,p)
n.arR(o,r,q,p)
k.push(n)
J.iy(s[4],new C.csW(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.J)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.alQ(m,u[1],l,u[3])}}}
C.ajy.prototype={
S(){var w=x.N
return new C.ajz(A.I,A.ay,B.U(w,x.gl),B.aS(w),$,A.bD,0,B.a([],x.X),null,null)}}
C.ajz.prototype={
af4(d){var w=this,v=w.as
if(v!=null)v.a1(0)
w.m(new C.bJi(w,d))
w.as=B.cz(A.lI,new C.bJj(w))},
t(){var w=this.as
if(w!=null)w.a1(0)
w=this.ch
if(w!=null)w.a1(0)
this.bvs()},
a0I(d,e){return this.cjl(d,e)},
b2Q(d){return this.a0I(d,!1)},
cjl(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a0I=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.rK:A.ys
p=d.b
w=3
return B.b(L.hfo(s,r,p,d.ax<3.2,q,$.qz().h(0,p).b),$async$a0I)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a0I,v)},
cw4(d){var w=this,v=new B.V(Date.now(),0,!1),u=w.at.c3(0,d.a,new C.bJk()),t=J.cC(u)
t.I(u,v)
t.bt(u,new C.bJl(v))
if(t.gJ(u)>=4){t.a9(u)
t=w.ch
if(t!=null)t.a1(0)
w.a21(d)
return}if(t.gJ(u)===3){t=w.ch
if(t!=null)t.a1(0)
w.ch=B.cz(A.iJ,new C.bJm(w,u,d))}},
a0o(d){return this.chH(d)},
chH(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a0o=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return B.b(C.ipd(s,d.b,A.k.V(A.k.E(t.a.c.d*0.12,1)*100)),$async$a0o)
case 3:t.ay=!1
case 1:return B.h(u,v)}})
return B.i($async$a0o,v)},
a21(d){return this.ctE(d)},
ctE(d){var w=0,v=B.j(x.H),u=this,t
var $async$a21=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bT(F.mH,null,new C.bJg(u,d),t,!0,!0,!1,A.ke,!1,!1,x.H),$async$a21)
case 2:return B.h(null,v)}})
return B.i($async$a21,v)},
Y(){this.a3()
this.bhM()
this.md()},
bhM(){this.a.c.e=new C.bJB(this)},
mv(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.vF(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=D.mn.h(0,s.b)
if((r==null?null:r.b)!==D.Ar)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.q(0,s.a)&&!q.ay){u.I(0,s.a)
q.a0I(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)G.dE(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)G.dE(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cM.aj()<0.5
else u=!1
if(u)G.dE(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){G.dE(900+A.cM.aw(800),"",90,0,0.1,o)
if(A.cM.aj()<0.35)G.dE(300+A.cM.aw(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cM.aj()<0.4
else u=!1
if(u)G.dE(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)G.dE(330+A.o.E(110*A.k.bh(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)G.dE((A.k.bh(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)G.dE(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)G.dE(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cM.aj()<0.5
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
q.m(new C.bJC())},
b9S(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.J)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.mn.an(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new B.y(p,n)
r=i}}}return s},
b3w(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.T(w).k("ds<1>"),w=new B.ds(w,v),w=new B.bO(w,w.gJ(0),v.k("bO<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.mn.an(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cIV(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.J)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.mn.an(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.mn.an(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=C.hDz(new B.q(k,n),new B.q(i,l),p)
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
af2(){this.a.toString
this.m(new C.bIM())},
bs6(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.dbd[v]
if(!A.d.aX(p.a.c.a,new C.bJD(u,w))){o=new B.q(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?Q.Jt:o
s=s?Q.Jt:o
q=t.al_(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
G.dE(1200,"",50,0,0.3,"tri")
p.af2()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.Sf[v].a)
u=w.length
t=u>8
s=t?A.d.du(w,0,A.o.aq(u+1,2)):w
r=t?A.d.fO(w,A.o.aq(w.length+1,2)):A.Z
q=n.a.d
if(q!=null){w=B.a4(q).k("cx<1>")
w=B.C(new B.cx(q,w),w.k("M.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.J)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b3l(s,!0))
n.a.toString
if(t)w.push(n.b3l(r,!0))
w.push(B.E(B.cr(new C.bJA(n,q,m)),1))
return B.x(w,A.m,null,A.e,A.i,0,A.p)},
b3l(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
t=$.qz()
s=t.h(0,u).d.j(0.14)
r=new B.aP(14,14)
q=new B.ay(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.aA(p,B.p(p,B.x(B.a([B.d(t.h(0,u).c,p,p,p,p,p,p,A.AM,p,p,p),B.d(t.h(0,u).b,p,1,A.a2,p,p,p,A.nP,p,p,p)],n),A.m,p,A.bb,A.i,0,A.p),A.f,p,p,new B.o(s,p,new B.bG(q,q,q,q),new B.bg(r,r,r,r),p,p,A.n),p,p,p,I.om,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bIN(this,u),p,p,p,p,p,p,!1,A.a4))}return B.p(p,B.cj(m,p,p,A.h9,p,p,A.aM,!1),A.f,p,p,new B.o(I.BG,p,new B.bG(A.a1,A.a1,new B.ay(o,1,A.r,-1),A.a1),p,p,p,A.n),p,58,p,p,p,p,p,p)},
b0K(d){var w=null,v=B.n(18)
return B.p(w,d,A.f,w,w,new B.o(F.afh,w,B.L(A.bB,A.r,1),v,w,w,A.n),w,w,w,w,F.alg,w,w,w)},
clr(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qz().h(0,o),m=d.dy,l=d.fr,k=new C.bJ5(q,n),j=B.d(n.c,p,p,p,p,p,p,A.KA,p,p,p),i=n.b,h=n.d,g=x.p
i=B.A(B.a([j,A.ae,B.E(B.d(i,p,p,p,p,p,p,B.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),B.aH(p,p,p,p,D.bX3,p,p,p,new C.bIT(q,d),p,p,p,p,"Remove part",A.ce),B.aH(p,p,p,p,A.PN,p,p,p,new C.bIU(q),p,p,p,p,p,A.ce)],g),A.m,p,A.e,A.i,0,p,p)
j=B.d(n.e,p,p,p,p,p,p,I.EH,p,p,p)
w=B.d("How it is made: "+n.f,p,p,p,p,p,p,D.fu8,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.ad(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.ad(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.ad(Math.abs(m*l),2)+" watts"
m=B.a([i,j,A.aw,w,A.an,B.d(m,p,p,p,p,p,p,B.l(p,p,d.x?A.c0:A.aU,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bfF(d)
if(v!=null){l=(d.x?A.ax:A.az).j(0.14)
j=B.n(10)
i=B.L((d.x?A.ax:A.az).j(0.5),A.r,1)
m.push(new B.D(A.i9,B.p(p,B.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.fAU,p,p,p),A.f,p,p,new B.o(l,p,i,j,p,p,A.n),p,p,p,p,A.cl,p,p,p),p))}if(C.hd4(o)){l=B.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new E.dV("CH "+t,d.at===u,new C.bIV(q,d,u),p,h,p))}l=B.bW(A.bG,l,A.br,p,4,6)
l=B.a([A.an,l,A.aw,B.d(q.a.c.tL(d)?"Showing: "+F.RR[A.o.E(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hy,p,p,p)],g)
if(q.a.c.tL(d))l.push(new E.fB(A.Hu,"Open big screen",new C.bIY(q,d),h,p))
A.d.v(m,l)}if(D.mn.an(0,o)&&!C.hd4(o)){l=B.a([A.an,B.d(q.a.c.tL(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hy,p,p,p)],g)
if(q.a.c.tL(d))l.push(new E.fB(A.Pu,"Open the "+$.qz().h(0,o).b,new C.bIZ(q,d),h,p))
A.d.v(m,l)}if(D.mn.an(0,o))A.d.v(m,B.a([A.an,new E.fB(A.CP,"Make it bigger (or tap it 4 times)",new C.bJ_(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.ad(d.db,1)
if(q.a.c.tL(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=B.a([A.an,B.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.ad(i,1)+" V",p,p,p,p,p,p,D.fv_,p,p,p)],g)
if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.dtq[s]
j=r===A.k.iX(r)?A.k.V(r):r
l.push(new E.dV(B.w(j)+" V out",d.e===r,new C.bJ0(q,d,r),p,h,p))}i.push(new B.D(A.le,B.bW(A.bG,l,A.br,p,0,6),p))}if(o==="regulator")i.push(D.fTQ)
A.d.v(m,i)}if(q.a.c.Mc(d)&&!d.x){l=A.k.ad(d.cx,2)
j=A.k.ad(q.a.c.Ac(d),2)
i=q.a.c
w=i.aoz(d)?"   \u26a0 OVERLOADED":""
l=B.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,B.l(p,p,i.aoz(d)?A.c0:A.et,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=B.n(4)
w=A.k.F(d.cx/q.a.c.Ac(d),0,1)
i=q.a.c.aoz(d)?A.ax:A.b9
m.push(new B.D(A.i9,B.x(B.a([l,A.cU,B.bx(j,B.kl(A.bB,p,p,5,p,w,new B.lJ(i,x.c)),A.aq)],g),A.E,p,A.e,A.i,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.D(A.i9,B.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.foG,p,p,p),p))}if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.dij[s]
j=r===1.5?"1.5 V (rechargeable)":B.w(r)+" V"
l.push(new E.dV(j,d.e===r,new C.bJ1(q,d,r),p,h,p))}m.push(B.bW(A.bG,l,A.br,p,0,6))}if(o==="resistor"){l=B.a([],g)
for(s=0;s<5;++s){r=D.d8r[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new E.dV(j,d.r===r,new C.bJ2(q,d,r),p,h,p))}m.push(B.bW(A.bG,l,A.br,p,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new C.bJ3(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new C.bJ4(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new C.bIW(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new C.bIX(d)))
if(o==="crank")m.push(D.fP9)
if(o==="switch")m.push(B.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hy,p,p,p))
return q.b0K(new B.cR(D.b5F,B.cg(B.x(m,A.E,p,A.e,A.O,0,A.p),A.t,p,A.y,p,p,p,p,A.ai),p))}}
C.bcC.prototype={}
C.W1.prototype={
S(){return new C.aEH(C.hj2(),new B.cw(null,x.q),B.aS(x.S))}}
C.aEH.prototype={
Y(){this.a3()
$.aV.c1$.push(this)
this.af3()},
af3(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$af3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fHZ(),$async$af3)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.ior(t.d,r)
if(s!=null){t.m(new C.e_H(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$af3,v)},
Fq(){var w,v=this
if(!v.as)return
w=C.ieS(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bFW(w)},
jk(d){if(d!==A.fO)this.Fq()},
t(){$.aV.hU(this)
this.Fq()
this.a2()},
cb9(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.T(v).k("X<1>")
t=new B.X(v,new C.e_Q(q),u).gJ(0)
s=new B.X(v,new C.e_R(),u).gJ(0)
r=new B.X(v,w.gcYq(),u).gJ(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new C.e_S(q,t,s,r))}if(A.o.E(q.w,45)===0)q.Fq()
if(A.o.E(q.w,10)===0){w=q.f
$.aiJ()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.q(0,q.f)&&$.aiJ()[q.f].c.$1(q.d)){w.I(0,q.f)
C.JB("bell",B.a([0,4,7,12],x.t),700,0.45)
q.m(new C.e_T())
q.Fq()
w=q.c
w.toString
w=B.Yl(w)
if(w!=null)w.U(B.b3(p,p,p,p,p,A.t,p,B.d("\u2705 Challenge done: "+$.aiJ()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.m9,p,p,p,p,p,p,p,p,p,p))}},
ahO(){var w=0,v=B.j(x.H),u=this,t
var $async$ahO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cf(null,null,!0,null,new C.e_G(u),t,null,!0,!0,x.H),$async$ahO)
case 2:return B.h(null,v)}})
return B.i($async$ahO,v)},
b0J(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.n(12),t=B.L(f.j(0.45),A.r,1)
u=B.a([B.ap(w,B.p(w,B.Y(d,f,w,w,w,18),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ap(w,h,w,w,w,-1,-3,w))
return B.aA(w,B.hb(new B.a5(40,38,new B.an(A.a0,w,A.ac,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4)},
b0I(d,e,f,g){return this.b0J(d,e,f,g,null)},
asw(d,e,f,g){var w=null,v=f.j(0.1),u=B.n(10),t=B.L(f.j(0.4),A.r,1)
return B.E(B.aA(w,B.p(w,B.A(B.a([B.Y(d,f,w,w,w,15),A.e1,new B.dp(1,A.co,B.d(e,w,1,A.a2,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.bb,A.i,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),1)},
ag8(){var w=0,v=B.j(x.H),u=this,t
var $async$ag8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a6(t,!1).cd(B.eb(new C.e_C(u),!1,null,x.H)),$async$ag8)
case 2:t=u.e.gbk()
if(t!=null)t.bhM()
if(u.c!=null)u.m(new C.e_D())
u.Fq()
return B.h(null,v)}})
return B.i($async$ag8,v)},
bIV(){var w,v,u,t,s=null,r=this.f
$.aiJ()
if(r>=11)return s
w=this.r
v=w.q(0,r)
r=v?A.bg:A.ax
u=B.n(9)
t=B.L(I.BG,A.r,1.5)
return B.p(s,B.at(B.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.xf,s,s,s),s,s,s),A.f,s,D.b5M,new B.o(r,s,t,u,s,s,A.n),s,s,s,s,A.f2,s,s,s)},
aiY(){var w=0,v=B.j(x.H),u=this,t
var $async$aiY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bT(F.mH,null,new C.e_P(u),t,!0,!0,!0,A.ke,!1,!1,x.H),$async$aiY)
case 2:return B.h(null,v)}})
return B.i($async$aiY,v)},
cba(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.aA(r,B.p(r,D.bYj,A.f,r,r,new B.o(A.c.j(0.07),r,r,r,r,r,A.a7),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e_V(d),r,r,r,r,r,r,!1,A.a4),o=B.n(11)
o=B.p(r,D.bbx,A.f,r,r,new B.o(A.bp,r,B.L(A.aJ.j(0.45),A.r,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.p(r,B.x(B.a([B.A(B.a([p,A.ae,o,A.ae,B.E(B.x(B.a([D.fRR,B.d(w,r,1,A.a2,r,r,r,B.l(r,r,s.y>0||s.z>0?A.eQ:A.ho,r,r,r,r,r,r,r,r,11.5,r,r,A.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.E,r,A.e,A.i,0,A.p),1),new C.ayK(s.gcho(),r),A.tq,s.b0I(A.uE,"Construction Lab: real 3D wiring, plumbing and a house",A.cJ,new C.e_W(s,d)),s.b0J(A.lL,"Challenges",A.aU,s.gcyD(),s.bIV()),s.b0I(A.Pn,"How to play",A.aJ,new C.e_X(d,e))],v),A.m,r,A.e,A.i,0,r,r),A.an,B.A(B.a([s.asw(A.ot,"Circuits",A.bt,s.gcru()),A.bn,s.asw(A.or,"Repair",A.aU,new C.e_Y(s)),A.bn,s.asw(K.wv,"Clear",A.c0,new C.e_Z(s))],v),A.m,r,A.e,A.i,0,r,r)],v),A.m,r,A.e,A.O,0,A.p),A.f,r,r,new B.o(I.BG,r,new B.bG(A.a1,A.a1,new B.ay(q,1,A.r,-1),A.a1),r,r,r,A.n),r,r,r,r,D.bGD,r,r,r)},
B(d){var w=this,v=null
$.at4="tech"
return B.c5(v,A.c3,B.bm(!0,B.x(B.a([w.cba(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.hhT(w.d,w.e,w.gcb8(),v),1)],x.p),A.m,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
C.ayK.prototype={
S(){return new C.baL(null,null)}}
C.baL.prototype={
gayL(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.a_,null,1,null,v)
w.cP(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gayL().t()
this.bwO()},
B(d){var w=null,v=this.a.c
return B.aA(w,B.hb(new B.a5(42,42,B.c9(this.gayL(),new C.cKu(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.baK.prototype={
a4(d,e){var w,v,u,t=null,s=e.ej(A.I),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.S()
w=B.K()
w.r=A.b8.j(0.25+0.15*o).gp(0)
w.y=N.oo
d.N(s,r+2+o*2,w)
w=B.K()
w.sar(D.exx.aG(0,B.bX(s,r)))
d.N(s,r,w)
v=B.K()
v.b=A.aa
v.c=2.2
v.sar(new B.fY(A.A,0,6.283185307179586,A.x,D.d_c,t,new B.mF(p)).aG(0,B.bX(s,r)))
d.N(s,r,v)
p=new C.cKt(d)
p.$3(s.a7(0,A.tg),8+o*1.5,1)
q*=4
p.$3(s.a7(0,D.emk),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a7(0,D.eoI),2.6,0.5+0.5*Math.cos(q))
u=B.fv(t,A.ct,t,t,t,D.fl4,A.a5,A.bW,t,A.dD,A.bX)
u.ef()
u.a4(d,s.a7(0,new B.q(-u.b.c/2,5)))},
aC(d){return d.b!==this.b}}
C.az3.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.az4.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.bvr()}}
C.aLa.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.bzi.prototype={}
C.fQ.prototype={}
C.K4.prototype={
a6(){return"ScreenStyle."+this.b}}
C.mo.prototype={}
C.VL.prototype={
S(){return new C.blm(null,null)}}
C.blm.prototype={
gaac(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.ol,null,1,null,v)
w.cq(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gaac().t()
this.byE()},
gSv(){var w=this.gaac().y
w=w==null?null:A.o.aq(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.mn.h(0,this.a.c)
if(v==null)v=D.aRs
return B.c5(w,X.Zp,B.bm(!0,new B.an(A.a0,w,A.ac,A.t,B.a([B.at(v.b===D.At?this.bL1(v):this.cof(v),w,w,w),B.ap(w,B.aH(w,w,w,w,A.mY,w,w,w,new C.dWR(d),w,w,w,B.nT(w,A.aT,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),B.ap(6,B.at(B.d(v.a,w,w,w,w,w,w,D.fmM,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)},
cbb(d){var w
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
cof(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.a9h
switch(p.a){case 1:w=44
break
case 2:w=30
break
case 3:w=22
break
case 4:w=26
break
default:w=14
break}v=B.c9(this.gaac(),new C.dWQ(this,w,d,o),q)
if(p===D.a9i)v=new B.BA(D.bHh,v,q)
p=this.cbb(p)
u=o?4:5
t=d.c
s=B.ar(t,A.c,o?0.25:0.08)
s.toString
r=B.ar(t,A.w,0.5)
r.toString
r=B.a([s,t,r],x.O)
t=B.n(w)
s=B.a([new B.ac(0,A.G,d.d.j(0.28),A.I,36)],x.V)
return new B.fF(p,B.p(q,B.p(q,v,A.f,q,q,new B.o(A.w,q,q,B.n(w-3),q,q,A.n),q,q,q,q,A_.GZ,q,q,q),A.f,q,q,new B.o(q,q,q,t,s,new B.a9(A.aA,A.aF,A.x,r,q,q),A.n),q,q,q,D.bAI,new B.Q(u,u,u,u),q,q,q),q)},
b90(d){var w,v,u,t=null,s=new B.V(Date.now(),0,!1),r=A.o.F(this.a.d+A.k.bh(this.gSv()*0.4),0,100),q=d.b===D.a9h,p=q?34:20,o=q?28:18,n=B.a([B.d(A.a.b_(A.o.u(B.dg(s)),2,"0")+":"+A.a.b_(A.o.u(B.fP(s)),2,"0"),t,t,t,t,t,t,A.tA,t,t,t),A.b3],x.p)
for(w=0;w<4;++w){v=new B.aP(1,1)
n.push(B.p(t,t,A.f,t,t,new B.o(A.c,t,t,new B.bg(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bGZ,t,t,t,3))}n.push(A.dd)
n.push(D.fKt)
n.push(A.bn)
v=B.L(A.ad,A.r,1)
u=B.n(4)
n.push(B.p(t,new B.bL(A.a6,t,t,B.BO(A.A,B.p(t,t,A.f,t,t,new B.o(A.b9,t,t,B.n(2),t,t,A.n),t,t,t,A_.GZ,t,t,t,t),t,r/100),t),A.f,t,t,new B.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.r2)
n.push(B.d(""+r+"%",t,t,t,t,t,t,D.fBg,t,t,t))
return new B.D(new B.Q(p,12,o,2),B.A(n,A.m,t,A.e,A.i,0,t,t),t)},
awH(d,e,f){var w,v=null,u=d.d,t=B.ar(u,A.w,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.n(e*0.26)
w=x.p
t=B.a([B.p(v,B.at(B.d(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.o(v,v,v,u,D.dol,new B.a9(A.aA,A.aF,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,B.a([A.aw,B.d(d.a,v,1,A.a2,v,v,v,D.frz,v,v,v)],w))
return B.aA(v,B.x(t,A.m,v,A.e,A.O,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dWM(this,d),v,v,v,v,v,v,!1,A.a4)},
c1v(d,e){return this.awH(d,e,!0)},
c1c(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.aRt||n===D.En,l=d.d,k=B.ar(l,A.w,0.55)
k.toString
l=B.ar(l,A.km,0.5)
l.toString
l=B.a([k,A.dx,l],x.O)
k=p.b90(d)
w=m?190:138
v=B.n(24)
u=B.L(A.aW,A.r,1)
w=B.aA(o,B.p(o,B.bx(B.n(23),B.b4(o,o,o,new C.afq(0,p.gSv(),o),A.fJ),A.aq),A.f,o,o,new B.o(o,o,u,v,o,o,A.n),o,w,o,A.hS,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.dWK(p),o,o,o,o,o,o,!1,A.a4)
v=m?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.kw[s]
t.push(new B.cc(A.A,o,o,p.c1v(r,m?58:54),o))}k=B.a([k,A.an,w,A.af,B.E(B.kS(0.92,t,v,8,12,A2.wh,o,!1),1)],u)
if(n!==D.a9i){n=A.c.j(0.16)
w=B.n(28)
u=B.a([],u)
for(v=B.cW(F.kw,0,B.dA(4,"count",x.S),x.gD),t=v.$ti,v=new B.bO(v,v.gJ(0),t.k("bO<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.awH(q==null?t.a(q):q,50,!1))}k.push(B.p(o,B.A(u,A.m,o,A.qQ,A.i,0,o,o),A.f,o,o,new B.o(n,o,o,w,o,o,A.n),o,o,o,D.bBB,H.amJ,o,o,o))}return B.p(o,B.x(k,A.m,o,A.e,A.i,0,A.p),A.f,o,o,new B.o(o,o,o,o,o,new B.a9(A.aA,A.aF,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bEq(d,e){var w=null
return B.p(w,B.x(B.a([this.b90(d),B.E(B.b4(w,w,w,new C.afq(e,this.gSv(),w),A.fJ),1),B.aA(w,B.p(w,B.at(B.d(F.kw[e].a,w,w,w,w,w,w,A.Kn,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dWF(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.m,w,A.e,A.i,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bL1(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=B.ar(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.n(r?26:14)
u=B.a([new B.ac(0,A.G,d.d.j(0.25),A.I,36)],x.V)
return new B.fF(1.5384615384615383,B.p(t,B.c9(this.gaac(),new C.dWI(this,r,d),t),A.f,t,t,new B.o(t,t,t,v,u,new B.a9(A.aA,A.aF,A.x,w,t,t),A.n),t,t,t,D.bGx,new B.Q(8,8,8,s),t,t,t),t)}}
C.bxk.prototype={
a4(d,e){var w,v,u,t,s,r=e.a,q=e.b,p=0+r,o=0+q
$.S()
w=B.K()
v=this.c
u=B.ar(v,A.w,0.6)
u.toString
t=B.ar(v,A.km,0.4)
t.toString
w.sar(new B.a9(A.aA,A.aF,A.x,B.a([u,A.dx,t],x.O),null,null).aG(0,new B.a2(0,0,p,o)))
d.au(new B.a2(0,0,p,o),w)
for(p=this.b,o=p*0.4,p*=0.3,s=0;s<5;++s){w=Math.sin(o+s)
u=Math.sin(p+s*1.7)
t=new B.ao(A.Q,A.N,A.T,A.U,A.S)
t.r=v.j(0.1).gp(0)
t.y=D.bHm
d.N(new B.q(r*(0.15+0.2*s+0.05*w),q*(0.3+0.3*u)),q*(0.2+0.04*s),t)}},
aC(d){return!0}}
C.afq.prototype={
a4(d,e){return L.LV(d,e,this.b,this.c)},
aC(d){return!0}}
C.aMX.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.bw6.prototype={}
C.a95.prototype={
B(d){var w=null
return B.c5(B.eE(w,w,w,!0,!0,D.ahO,w,1,!0,w,0,!1,w,!1,w,w,B.aH(w,w,w,w,K.aro,w,w,w,new C.clP(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.h_H,w,w,w,1,w,!0),D.ahO,B.cj(B.a([D.eqa,B.cr(new C.clQ())],x.p),w,w,D.bCF,w,w,A.ai,!1),w,!1,!1,w,w)}}
C.Xl.prototype={
S(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aGa(w,new B.au(A.au,$.aw()),$,A.bD,0,B.a([],x.X),null,null)}}
C.aGa.prototype={
Y(){this.a3()
this.md()},
b6T(d){var w=this.d.length
return A.o.E(A.k.bh(A.k.E(A.k.E(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
mv(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b6T(v.f)
if(w!==v.x){v.x=w
E.mm("bell",24+A.o.E(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new C.eT8(v))
C.JB("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
ccQ(){if(this.d.length<2)return
this.m(new C.eT4(this))},
b1e(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new C.eT3(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gccP(),p=s.d,o=B.E(B.aA(r,B.b4(r,r,r,new C.bxw(p,s.f,r),A.fJ),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.x(B.a([o,new B.a5(r,40,B.at(B.d(n,r,r,r,r,r,r,D.fzm,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.i,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.aBb[A.o.E(v,8)].j(0.9)
t=new B.aP(20,20)
o.push(B.aA(r,B.p(r,B.d(p[v],r,r,r,r,r,r,D.fyA,r,r,r),A.f,r,r,new B.o(u,r,r,new B.bg(t,t,t,t),r,r,A.n),r,r,r,A.fz,A.hb,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.eT6(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a4))}p=A.c.j(0.07)
return E.lx(A.aU,A.f4,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.x(B.a([new E.fb(o,r,r),B.A(B.a([B.E(B.aM(r,A.Z,!1,r,!0,A.t,r,B.aN(),s.e,r,r,r,r,r,2,B.bs(r,new B.b6(4,B.n(14),A.a1),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kE,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ak,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.eT7(s),r,!1,r,r,!1,r,!0,r,A.ab,r,r,r,r,r,r,r,r,r,r,r,A.dh,!0,A.a5,r,A.ao,r,r,r,r),1),A.ae,new E.fB(A.hU,"Add",s.gccN(s),A.c,r),A.bn,new E.fB(A.os,"Spin",q,A.b9,r)],w),A.m,r,A.e,A.i,0,r,r)],w),A.m,r,A.e,A.O,0,A.p))}}
C.bxw.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=k/2,i=e.b,h=i/2+10,g=new B.q(j,h),f=Math.min(k,i)/2-24
i=f+8
k=$.S()
w=B.K()
w.r=D.bhQ.gp(0)
d.N(g,i,w)
w=B.K()
w.b=A.aa
w.c=3
w.r=A.aU.gp(0)
d.N(g,i,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(i=d.c,t=this.c,s=u/2,r=0;r<v;++r){q=t+r*u
p=B.bX(g,f)
o=new B.ao(A.Q,A.N,A.T,A.U,A.S)
o.r=D.aBb[A.o.E(r,8)].gp(0)
d.cN(p,q,u,!0,o)
o=B.bX(g,f)
p=new B.ao(A.Q,A.N,A.T,A.U,A.S)
p.b=A.aa
p.c=2
p.r=A.c.j(0.6).gp(0)
d.cN(o,q,u,!0,p)
J.bq(i.save())
i.translate(j,h)
i.rotate((q+s)*180/3.141592653589793,0,0)
p=w[r]
if(p.length>12)p=A.a.aA(p,0,11)+"\u2026"
n=new B.iF(new B.en(p,l,l,A.cH,l,l,l,l,l,l,D.flT),A.a5,A.bW,new B.jd(1),l,l,l,l,A.bX,l,A.ct)
n.ef()
p=n.b
o=p.c
p=p.a.c
n.a4(d,new B.q(f-o-16,-p.gba(p)/2))
i.restore()}i=B.K()
i.r=D.ahp.gp(0)
d.N(g,20,i)
i=B.K()
i.b=A.aa
i.c=3
i.r=A.aU.gp(0)
d.N(g,20,i)
m=new B.aE(k.r,A.ah,l,l,B.a([],x.v))
h-=f
m.D(new B.aY(j,h+26))
h-=10
m.D(new B.aq(j-14,h))
m.D(new B.aq(j+14,h))
m.D(new B.bt())
h=B.K()
h.r=A.c.gp(0)
d.ae(m,h)
h=B.K()
h.b=A.aa
h.c=2
h.r=A.aT.gp(0)
d.ae(m,h)},
aC(d){return!0}}
C.W9.prototype={
S(){return new C.blx($,A.bD,0,B.a([],x.X),null,null)}}
C.blx.prototype={
Y(){this.a3()
this.md()},
mv(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.JB("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.UA(900,new C.e2G())}w.m(new C.e2H())},
b1g(d){return this.m(new C.e2B(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.b_(A.o.u(A.k.aq(m,60)),2,"0")
v=A.a.b_(A.o.u(A.o.E(A.k.cL(m),60)),2,"0")
m=B.b4(n,n,n,new C.bsd(l,A.c0,n),A.aSV)
u=B.d(w+":"+v,n,n,n,n,n,n,D.fqv,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.at(new B.a5(280,280,new B.an(A.A,n,A.ac,A.t,B.a([m,B.x(B.a([u,B.d(t,n,n,n,n,n,n,D.fpv,n,n,n),A.aw,B.d("Sessions done: "+o.r,n,n,n,n,n,n,A.vu,n,n,n)],s),A.m,n,A.e,A.O,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.dli[r]
u.push(new E.dV(""+q+" min",o.d===q,new C.e2D(o,q),n,A.c0,n))}m=o.f
p=m?A4.uM:A.hs
m=m?"Pause":"Start"
return E.lx(A.c0,A.f4,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.x(B.a([new E.fb(u,n,n),new E.fb(B.a([new E.fB(p,m,new C.e2E(o),A.b9,n),new E.fB(A.ov,"Reset",new C.e2F(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.O,0,A.p))}}
C.bsd.prototype={
a4(d,e){var w,v,u,t,s=e.ej(A.I),r=e.a/2-14
$.S()
w=B.K()
w.b=A.aa
w.c=16
w.r=A.c.j(0.08).gp(0)
d.N(s,r,w)
w=B.bX(s,r)
v=B.K()
v.b=A.aa
v.c=16
v.d=A.bA
u=this.c
t=B.ar(u,A.c,0.4)
t.toString
v.sar(new B.fY(A.A,-1.5707963267948966,4.71238898038469,A.x,B.a([u,t,u],x.O),null,null).aG(0,B.bX(s,r)))
d.cN(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aC(d){return d.b!==this.b}}
C.Vm.prototype={
S(){return new C.bl8($,A.bD,0,B.a([],x.X),null,null)}}
C.bl8.prototype={
Y(){this.a3()
this.md()},
mv(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.SX.h(0,p.d)
w.toString
v=A.d.f6(w,new C.dOn())
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
E.mm("flute",D.c9u[t]+5,1400,0.35)}p.m(new C.dOo())},
gccT(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.KT("Press Start",0.5)
w=D.SX.h(0,this.d)
w.toString
v=A.d.f6(w,new C.dOi())
u=A.k.E(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.KT("Breathe in",0.5+0.5*A.dy.aE(0,p))
case 1:return new B.KT("Hold",1)
case 2:return new B.KT("Breathe out",1-0.5*A.dy.aE(0,p))
default:return new B.KT("Hold",0.5)}}}return new B.KT("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gccT(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hm.j(0.12+(3-u)*0.05)
n.push(B.p(q,q,A.f,q,q,new B.o(s,q,q,q,u===0?B.a([new B.ac(0,A.G,A.hm.j(0.35),A.I,40)],v):q,q,A.a7),q,t,q,q,q,q,q,t))}n.push(B.d(p.a,q,q,q,q,q,q,A.pP,q,q,q))
n.push(B.ap(0,B.d("Breaths: "+r.w,q,q,q,q,q,q,A.kE,q,q,q),q,q,q,q,q,q))
n=B.at(new B.a5(300,340,new B.an(A.A,q,A.ac,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aX(D.SX.ges(D.SX));w.C();){v=w.gR(w)
o.push(new E.dV(v,r.d===v,new C.dOl(r,v),q,A.hm,q))}w=r.e
v=w?A.zh:A.hs
w=w?"Stop":"Start"
o.push(new E.fB(v,w,new C.dOm(r),A.b9,q))
return E.lx(A.hm,A.f4,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new E.fb(o,q,q))}}
C.aJA.prototype={}
C.W0.prototype={
S(){return new C.blo(new B.cw(null,x.A),B.a([],x.au),A.av,A.c)}}
C.blo.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aH(s,s,s,s,K.oD,s,s,s,new C.e_b(t,d),s,s,s,s,"Share",s)],r),p=B.bx(B.n(18),new B.em(B.aA(s,B.b4(s,s,s,new C.bnq(t.e,t.x,s),A.fJ),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e_c(t),new C.e_d(t),s,s,s,s,s,s,s,s,s,new C.e_e(t),s,s,s,s,!1,A.a4),t.d),A.aq),o=B.a([],r)
for(w=0;w<9;++w){v=D.d0J[w]
u=!t.w&&t.f.A(0,v)
o.push(new E.FU(v,u,new C.e_f(t,v),!1,s))}u=t.r
return E.lx(A.bF,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.D(A.bU,p,s),"DRAW PAD",B.x(B.a([new E.fb(o,s,s),E.iN(A.bF,""+A.k.V(u),"Brush",30,2,new C.e_g(t),u),new E.fb(B.a([new E.dV("Eraser",t.w,new C.e_h(t),A.CC,A.bF,s),new E.fB(A.pq,"Undo",new C.e_i(t),A.c,s),new E.fB(A.ef,"Clear",new C.e_j(t),A.c,s),new E.fB(A.Pg,"Paper",new C.e_k(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.O,0,A.p))}}
C.bnq.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k
$.S()
w=B.K()
w.r=this.c.gp(0)
d.au(new B.a2(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=x.v,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=$.S()
q=new B.ao(A.Q,A.N,A.T,A.U,A.S)
p=s.a
q.r=p.gp(p)
o=s.b
q.c=o
q.d=A.bA
q.e=A.dS
q.b=A.aa
n=s.c
if(n.length===1){r=A.d.gH(n)
n=new B.ao(A.Q,A.N,A.T,A.U,A.S)
n.r=p.gp(p)
d.N(r,o/2,n)}else{p=B.a([],u)
m=new B.aE(r.r,A.ah,null,null,p)
p.push(new B.aY(A.d.gH(n).a,A.d.gH(n).b))
m.a8()
for(l=1;l<n.length-1;){r=n[l]
o=r.a;++l
k=n[l]
r=r.b
k=new B.c4(o,r,(o+k.a)/2,(r+k.b)/2)
p.push(k)
r=m.f
if(r!=null)k.ai(r)
m.a8()}r=new B.aq(A.d.gal(n).a,A.d.gal(n).b)
p.push(r)
p=m.f
if(p!=null)r.ai(p)
m.a8()
d.ae(m,q)}}},
aC(d){return!0}}
C.WJ.prototype={
S(){var w=x.S
return new C.aFu(B.aS(w),B.aS(w))}}
C.aFu.prototype={
Y(){this.a3()
this.au1()},
au1(){var w,v,u=this,t=x.N,s=B.bo(D.dqv,!0,t)
A.d.Di(s)
w=x.S
v=B.T(s).c
t=B.C(B.cW(s,0,B.dA(u.d,"count",w),v),t)
A.d.v(t,B.cW(s,0,B.dA(u.d,"count",w),v))
A.d.Di(t)
u.e=t
u.f.a9(0)
u.r.a9(0)
u.w=0
u.x=!1},
ccO(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
E.mm("bell",12+A.o.E(d,9),150,0.35)
s.m(new C.eq_(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gH(0)
u=w.gal(0)
w=s.e
w===$&&B.c()
t=x.H
if(w[v]===w[u])B.bQ(A.mL,new C.eq0(s,v,u),t)
else{s.x=!0
B.bQ(Ab.GA,new C.eq1(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.d("Moves: "+r.w,q,q,q,q,q,q,A.Vw,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.aq(p,2)+" / "+o
o=x.p
p=B.x(B.a([new B.D(A.yD,B.A(B.a([u,B.d(p,q,q,q,q,q,q,B.l(q,q,w?A.aU:A.ad,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.iR,A.i,0,q,q),q),B.E(B.il(!0,q,q,A.y,new B.hG(v,8,8,1,q),new C.eq5(r),r.e.length,A.bh,q,A.ai,!1),1)],o),A.m,q,A.e,A.i,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.d2g[t]
o.push(new E.dV(s.b,r.d===s.a,new C.eq6(r,s),q,A.aJ,q))}o.push(new E.fB(K.apX,"New game",new C.eq7(r),A.b9,q))
return E.lx(A.aJ,A.f4,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new E.fb(o,q,q))}}
C.WT.prototype={
S(){return new C.aFP(B.a([],x.t))}}
C.aFP.prototype={
ccS(d){A.d.a9(this.d)
this.w=!0
this.b1f()},
b1f(){this.d.push(A.cM.aw(4))
this.e=0
this.a_M()},
a_M(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_M=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eAM(t))
s=x.H
w=3
return B.b(B.bQ(A.lH,null,s),$async$a_M)
case 3:r=t.d,q=B.bo(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aV4(n)
w=7
return B.b(B.bQ(new B.bd(1000*Math.max(280,600-r.length*18)),null,s),$async$a_M)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new C.eAN(t))
case 1:return B.h(u,v)}})
return B.i($async$a_M,v)},
aV4(d){this.m(new C.eAK(this,d))
E.mm("marimba",D.c9t[d]+5,450,0.55)
B.bQ(A.Gy,new C.eAL(this),x.H)},
ccU(d){var w,v,u=this
if(!u.w||u.r)return
u.aV4(d)
w=u.d
v=u.e
if(w[v]!==d){G.dE(90,"",600,0,0.5,"saw")
u.m(new C.eAO(u))
return}++v
u.e=v
if(v===w.length){u.m(new C.eAP(u))
B.bQ(A.hD,new C.eAQ(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.d("Best: "+q.x,p,p,p,p,p,p,Q.aVs,p,p,p),n=B.d(q.y,p,p,p,p,p,p,D.fzL,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aA2[v]
u=u.j(q.f===v?1:0.35)
t=new B.aP(28,28)
s=q.f===v?B.a([new B.ac(0,A.G,D.aA2[v].j(0.8),A.I,30)],w):p
r=new B.ay(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.aA(p,B.cV(p,p,p,p,A.b6,new B.o(u,p,new B.bG(r,r,r,r),new B.bg(t,t,t,t),s,p,A.n),A.jl,p,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eAR(q,v),p,p,p,p,p,p,!1,A.a4))}o=B.at(new B.D(A.ab,B.x(B.a([o,A.an,n,A.d6,new B.fF(1,B.kS(1,l,2,12,12,p,A.dU,!1),p)],m),A.m,p,A.bb,A.i,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return E.lx(A.bs,A.f4,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new E.fb(B.a([new E.fB(A.hs,n,q.gccR(q),A.b9,p)],m),p,p))}}
C.Xc.prototype={
S(){return new C.bmE(new B.au(A.au,$.aw()))}}
C.bmE.prototype={
axz(d){return B.p0(A.k.ad(d,2),B.ag("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eOD(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.d0(B.aL(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eOM()
l=B.aM(m,A.Z,!1,m,!0,A.t,m,B.aN(),l,m,m,m,m,m,2,B.bs(m,m,m,m,m,m,m,m,!0,new B.b6(4,B.n(16),A6.xH),m,m,m,m,m,m,m,m,m,m,m,new B.b6(4,B.n(16),D.b4c),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.mu,"Bill amount",!0,!0,!1,m,m,m,m,D.fx7,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ak,m,m,m,m,m,A.e4,m,m,m,1,m,m,!1,"\u2022",m,new C.eOI(n),m,m,m,!1,m,m,!1,m,!0,m,A.ab,m,m,m,m,m,m,m,m,m,m,m,A.aUp,!0,A.a5,m,A.ao,m,m,m,m)
k=A.b9.j(0.1)
s=B.n(20)
r=B.L(A.b9.j(0.35),A.r,1)
q=x.p
s=B.cj(B.a([l,A.by,B.p(m,B.x(B.a([t.$2("Tip ("+A.k.V(n.e)+"%)","$"+n.axz(w)),t.$2("Total","$"+n.axz(v)),A3.NB,t.$3$big("Each of "+n.f+" pays","$"+n.axz(u),!0)],q),A.m,m,A.e,A.i,0,A.p),A.f,m,m,new B.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bR,m,m,m)],q),m,m,A.fr,m,m,A.ai,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cNF[p]
r.push(new E.dV(""+o+"%",A.k.V(n.e)===o,new C.eOJ(n,o),m,A.b9,m))}l=n.f
return E.lx(A.b9,A.f4,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.x(B.a([new E.fb(r,"TIP",m),E.iN(A.aJ,""+l,"People",20,1,new C.eOK(n),l),new E.fb(B.a([new E.dV("Round up",n.r,new C.eOL(n),m,A.aU,m)],q),m,m)],q),A.m,m,A.e,A.O,0,A.p))}}
C.WI.prototype={
S(){var w=B.a([3,5],x.t)
return new C.bm8(w,A.cM,$,A.bD,0,B.a([],x.X),null,null)}}
C.bm8.prototype={
Y(){this.a3()
this.md()},
mv(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.E(A.k.bh(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t
E.Xe("snare",0,0.5)}u.m(new C.eoF())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.h8()
u.w=t
u.x=t?0:3.141592653589793
E.mm("bell",24,400,0.5)}u.m(new C.eoG())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bf0(v,o.r>0,n))}u=B.aA(n,B.at(B.bW(A.fM,m,A.br,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eoy(o),n,n,n,n,n,n,!1,A.a4)}else if(m==="coin"){t=A.k.F(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.L(A.d2,A.r,6)
s=B.a([new B.ac(0,A.G,A.aU.j(0.4),A.I,30)],x.V)
u=B.aA(n,B.at(B.ed(A.A,B.p(A.A,B.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fwi,n,n,n),A.f,n,n,new B.o(n,n,v,n,s,D.exB,A.a7),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eoz(o),n,n,n,n,n,n,!1,A.a4)}else{m=o.as
u=B.aA(n,B.at(B.x(B.a([B.d(m===0?"?":""+m,n,n,n,n,n,n,D.flm,n,n,n),B.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kE,n,n,n)],x.p),A.m,n,A.e,A.O,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eoA(o),n,n,n,n,n,n,!1,A.a4)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.dix[r]
v.push(new E.dV(q.b,o.d===q.a,new C.eoB(o,q),q.c,A.bt,n))}v=B.a([new E.fb(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(E.iN(A.bt,""+s,"Dice",4,1,new C.eoC(o),s))}if(o.d==="num"){s=o.z
s=E.iN(A.bt,""+s,"From",100,1,new C.eoD(o),s)
p=o.Q
A.d.v(v,B.a([s,E.iN(A.bt,""+p,"To",1000,2,new C.eoE(o),p)],m))}return E.lx(A.bt,A.f4,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.x(v,A.m,n,A.e,A.O,0,A.p))}}
C.bf0.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cM.aj()-0.5)*0.6
else w=0
v=B.n(22)
u=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cA,14)],x.V)
t=B.a([],x.p)
for(s=D.dCn.h(0,A.o.F(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bL(s[q],p,p,B.p(p,p,A.f,p,p,O.aeh,p,18,p,p,p,p,p,18),p))
return B.eI(A.A,w,B.p(p,new B.an(A.a0,p,A.ac,A.t,t,p),A.f,p,p,new B.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bE,p,p,100),p)}}
C.aML.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.bze.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.bys()}}
C.aN3.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.bzk.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.byM()}}
C.aNw.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.bzt.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.bzf()}}
C.aNX.prototype={
t(){var w=this,v=w.aa$
if(v!=null)v.a5(0,w.gbA())
w.aa$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.bzC.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.bzG()}}
var z=a.updateTypes(["P(tT)","~()","P(a5d)","aB<~>()","P(CX)","F(tT,F)","H(H,tT)","P(CT)","P(a_f)","P(ace)","P(a44)","P(nD)","Xd()","Vl()","a95()","WO()","X2()","WP()","P(mS)","Vq()","afJ(Z,F)","aeB(Z,F)","~(a8<@,@>)","F(CT,CT)","m(eh)","P(afx)","P(a1u)","P(D7)","P(acJ)","P(aeE)","P(acs)","F(F,r6)","F(F,CX)","m(r6)","~(r6,ai<m>,F)","r6?(CX)","WI()","v(m,a1h)","P(ab7)","~(B0)","Xg()","~(xu,m,q,u,H)","~(m,tT)","W1()","Ws(Z)","O1(Z)","VL(Z,bu<H>,bu<H>)","Xl()","W9()","Vm()","W0()","WJ()","WT()","Xc()","P(r6)"])
C.fIm.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+18}
C.fxl.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gH(d.e.split(". "))+"."},
$S:z+24}
C.fEQ.prototype={
$1(d){var w
if(!this.a.Mc(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fER.prototype={
$1(d){return d.x},
$S:z+0}
C.fIj.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fIk.prototype={
$1(d){var w
if(!this.a.Mc(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fIl.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.ehN.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ehO.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.y(this.b,this.c))},
$S:0}
C.ehP.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd5(v).Q
v.toString
w.mo(v,A.dW,A.iI)}},
$S:7}
C.ei_.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a9(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.ei0.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.ehW.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.ehU.prototype={
$2(d,e){var w=this.a
w.r.push(B.cz(B.dv(0,0,0,d,0,0),new C.ehV(w,this.b,e)))},
$S:1896}
C.ehV.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.ehX.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gWV().al_(0,u[1],u[2],u[3])
u[4].bO(0,new C.ehS(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
G.dE(700+w.e*120,"",80,0,0.25,"square")
v.m(new C.ehT(w.a,v,w.f,w.r))},
$S:0}
C.ehS.prototype={
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
C.ehT.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.F(A.k.bh(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.ehY.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gWV().alQ(t,u[1],s,u[3])
G.dE(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new C.ehR(w.a,v,w.e,w.f))},
$S:0}
C.ehR.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.F(A.k.bh(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.ehZ.prototype={
$0(){G.dE(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new C.ehQ(w,this.b))},
$S:0}
C.ehQ.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.ei3.prototype={
$0(){var w=this.a
return w.m(new C.ei2(w))},
$S:0}
C.ei2.prototype={
$0(){return this.a.at=!0},
$S:0}
C.ei4.prototype={
$0(){var w=this.a
return w.m(new C.ei1(w))},
$S:0}
C.ei1.prototype={
$0(){return this.a.at=!1},
$S:0}
C.ei5.prototype={
$0(){var w=this.a
w.f.sb1(0,this.b)
w.PI()},
$S:0}
C.ei6.prototype={
$0(){return this.a.YZ(this.b)},
$S:0}
C.ei7.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.PI():w.aY5()},
$S:2}
C.ei8.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.PI():w.aY5()},
$S:0}
C.ex5.prototype={
$2(d,e){return d+e},
$S:1897}
C.exp.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.exo(w,d))},
$S:1898}
C.exo.prototype={
$0(){var w=B.aK(J.t(this.b,"unlocked"))
w=w==null?null:A.k.M(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.exq.prototype={
$0(){},
$S:0}
C.exr.prototype={
$0(){},
$S:0}
C.ex7.prototype={
$0(){return this.a.m(new C.ex6(this.b,this.c))},
$S:0}
C.ex6.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.ewX.prototype={
$1(d){return this.a.cx===d},
$S:33}
C.ewY.prototype={
$1(d){return this.a.cx=d},
$S:29}
C.ewZ.prototype={
$1(d){return this.a.cy===d},
$S:33}
C.ex_.prototype={
$1(d){return this.a.cy=d},
$S:29}
C.ex0.prototype={
$1(d){return this.a.db===d},
$S:33}
C.ex1.prototype={
$1(d){return this.a.db=d},
$S:29}
C.ex2.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:33}
C.ex3.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.W(0,d):w.I(0,d)},
$S:29}
C.ex4.prototype={
$0(){var w=this.a
return w.m(w.gay9())},
$S:0}
C.ewV.prototype={
$1(d){return this.a.$1(!0)},
$S:71}
C.ewW.prototype={
$1(d){return this.a.$1(!1)},
$S:111}
C.ewU.prototype={
$1(d){return this.a.$1(!1)},
$S:139}
C.exi.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.ch=n
n=B.b4(p,p,p,new C.biU(o,p),n)
w=this.b
v=C.bBQ("WORLD",w.a,w.c)
u=C.bBQ("GRAVITY",B.w(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.V(t*100)
t=t<0.25?A.c0:A.b9
t=C.bBQ("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.V(s*100)
s=s>D.Dm[o.db].d?A.c0:A.c
q=x.p
s=B.a([v,u,t,C.bBQ("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(C.bBQ("HEIGHT",""+A.k.V(A.k.F(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ap(p,B.A(s,A.m,p,A.iR,A.i,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bHs(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.t2[w].a+".":"You landed on every world!"
v=B.a([new E.fB(A.ow,"Again",new C.exd(o),A.c,p),new E.fB(A.or,"Rebuild",new C.exe(o),A.aU,p)],q)
if(o.d+1<7)v.push(new E.fB(A.jF,"Next world",new C.exf(o),A.b9,p))
n.push(C.hwJ("Perfect landing!",w,A.b9,v))}if(o.as==="crashed")n.push(C.hwJ("Crash!",o.at,A.c0,B.a([new E.fB(A.ow,"Try again",new C.exg(o),A.b9,p),new E.fB(A.or,"Rebuild",new C.exh(o),A.aU,p)],q)))
return new B.an(A.a0,p,A.b4,A.t,n,p)},
$S:67}
C.exd.prototype={
$0(){var w=this.a
return w.m(w.gay9())},
$S:0}
C.exe.prototype={
$0(){var w=this.a
return w.m(new C.exa(w))},
$S:0}
C.exa.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.exf.prototype={
$0(){var w=this.a
return w.m(new C.ex9(w))},
$S:0}
C.ex9.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.exg.prototype={
$0(){var w=this.a
return w.m(w.gay9())},
$S:0}
C.exh.prototype={
$0(){var w=this.a
return w.m(new C.ex8(w))},
$S:0}
C.ex8.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.exj.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new C.exc(v,w))},
$S:0}
C.exc.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.exk.prototype={
$1(d){return this.a.y=d},
$S:9}
C.exl.prototype={
$1(d){return this.a.Q=d},
$S:9}
C.exm.prototype={
$1(d){return this.a.z=d},
$S:9}
C.exn.prototype={
$0(){var w=this.a
return w.m(new C.exb(w))},
$S:0}
C.exb.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dOg.prototype={
$0(){var w=0,v=B.j(x.h),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=$.hrV
if(q==null)q=$.hrV=C.cOa()
w=3
return B.b(B.iJ(B.a([q,$.re().cVq("assets/data/three.min.js")],x.D),x.K),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kW(0,B.cO(J.t(s,1)))
q.m(new C.dOf(q,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:51}
C.dOf.prototype={
$0(){return this.a.d=x.m.a(J.t(this.b,0))},
$S:0}
C.dNT.prototype={
$0(){return this.a.bZg(B.aT(J.t(this.b,"group")))},
$S:0}
C.dNU.prototype={
$1(d){return A.a.b_(A.o.ft(A.o.F(A.k.V(d*255),0,255),16),2,"0")},
$S:327}
C.dOh.prototype={
$0(){return E.Xe("kick",0,0.25)},
$S:0}
C.dNV.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dNW.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dNX.prototype={
$0(){return E.Xe("kick",0,0.5)},
$S:0}
C.dNY.prototype={
$0(){return G.dE(1300+this.a.R8.aw(900),"",40,0,0.2,"square")},
$S:0}
C.dO_.prototype={
$0(){var w,v,u=this.b
if(u==="skin"){u=this.a
w=u.ch
if(w===2)w=1
else w=w===1?0:2
u.ch=w}else{w=this.a
v=w.ay
if(v.q(0,u))v.W(0,u)
else{v.I(0,u)
if(w.ch===2)w.ch=1}if(v.a===0&&w.ch===0)w.ch=2
u=w}if(u.cx!=null&&!A.d.aX(u.d.e,new C.dNZ(u)))u.cx=null
u.go=0},
$S:0}
C.dNZ.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.azY(d)},
$S:z+10}
C.dNQ.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
C.dNR.prototype={
$0(){var w=this.a
return w.m(w.gc8S())},
$S:0}
C.dNS.prototype={
$0(){return this.a.aet(null)},
$S:0}
C.dO6.prototype={
$0(){var w=this.a.as
return w==null?null:w.f8(0,B.I(["t","shot"],x.N,x.z))},
$S:0}
C.dO7.prototype={
$0(){return this.a.cFf(this.b.a)},
$S:0}
C.dO8.prototype={
$0(){return this.a.aet(this.b)},
$S:0}
C.dO9.prototype={
$1(d){var w=this.a
return w.m(new C.dO5(w,d))},
$S:6}
C.dO5.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.dOa.prototype={
$0(){var w=this.a
return w.m(new C.dO4(w,this.b))},
$S:0}
C.dO4.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.dOb.prototype={
$0(){var w=this.a
return w.m(new C.dO3(w))},
$S:0}
C.dO3.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.dOc.prototype={
$0(){var w=this.a
return w.m(new C.dO2(w))},
$S:0}
C.dO2.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.f8(0,B.I(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.LF},
$S:0}
C.dOd.prototype={
$0(){var w=this.a
return w.m(new C.dO1(w))},
$S:0}
C.dO1.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.b_S()
else w.p2=null},
$S:0}
C.dOe.prototype={
$0(){var w=this.a
return w.m(new C.dO0(w))},
$S:0}
C.dO0.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
C.c5T.prototype={
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
$S:323}
C.c5U.prototype={
$1(d){var w=new B.r3([],[]).oH(d.data,!0)
if(x.f.b(w)&&J.t(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:453}
C.fqH.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)&&w.h(d,1)},
$S:230}
C.fqI.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)||w.h(d,1)},
$S:230}
C.fqJ.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)!==w.h(d,1)},
$S:230}
C.fqQ.prototype={
$1(d){return!J.t(d,0)},
$S:230}
C.fqR.prototype={
$1(d){var w=J.a7(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:230}
C.fqS.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:230}
C.dPW.prototype={
$1(d){return this.a.auQ(0)},
$S:7}
C.dPA.prototype={
$0(){var w=this.b
return this.a.cx=new B.N(w,B.ieh(),B.T(w).k("N<1,F>")).fL(0)},
$S:0}
C.dPD.prototype={
$1(d){return""+d},
$S:76}
C.dPX.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dPy.prototype={
$1(d){return this.a.auQ(this.b)},
$S:7}
C.dPz.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.ayD(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mL(0,d,a1.me(0.15,0.3))
u=a1.mL(0,d,a1.me(0.15,0.62))
t=a1.mL(0,"and",a1.me(0.48,0.46))
s=a1.mL(0,a0,a1.me(0.82,0.46))
a1=t.a
w.push(new C.nD(v.a,a1,0))
w.push(new C.nD(u.a,a1,1))
w.push(new C.nD(a1,s.a,0))
break
case 1:v=a1.mL(0,d,a1.me(0.12,0.25))
u=a1.mL(0,d,a1.me(0.12,0.65))
r=a1.mL(0,"xor",a1.me(0.46,0.25))
q=a1.mL(0,"and",a1.me(0.46,0.65))
p=a1.ayC(0,a0,a1.me(0.82,0.25),0)
o=a1.ayC(0,a0,a1.me(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.nD(a1,n,0))
m=u.a
w.push(new C.nD(m,n,1))
l=q.a
w.push(new C.nD(a1,l,0))
w.push(new C.nD(m,l,1))
w.push(new C.nD(n,p.a,0))
w.push(new C.nD(l,o.a,0))
break
case 2:k=a1.mL(0,"clock",a1.me(0.15,0.4))
j=a1.mL(0,"not",a1.me(0.45,0.65))
s=a1.mL(0,a0,a1.me(0.82,0.3))
i=a1.mL(0,"buzzer",a1.me(0.82,0.65))
a1=k.a
w.push(new C.nD(a1,s.a,0))
n=j.a
w.push(new C.nD(a1,n,0))
w.push(new C.nD(n,i.a,0))
break
default:h=a1.mL(0,d,a1.me(0.12,0.25))
g=a1.mL(0,d,a1.me(0.12,0.7))
f=a1.mL(0,"nor",a1.me(0.5,0.25))
e=a1.mL(0,"nor",a1.me(0.5,0.7))
s=a1.mL(0,a0,a1.me(0.86,0.25))
a1=f.a
w.push(new C.nD(g.a,a1,0))
n=e.a
w.push(new C.nD(n,a1,1))
w.push(new C.nD(h.a,n,0))
w.push(new C.nD(a1,n,1))
w.push(new C.nD(a1,s.a,0))}},
$S:0}
C.dPE.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.ayD(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.CT(p,"switch",new B.q(0.14*q.a,r*q.b),0))}o.mL(0,w.e,o.me(0.86,0.5))},
$S:0}
C.dPt.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dPu.prototype={
$2(d,e){return A.k.aR(d.c.b,e.c.b)},
$S:z+23}
C.dPv.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dPw.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dPx.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.adN(this.c)
if(v.ax)C.JB("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gH(w)
v.CW=!1
if(v.ax)G.dE(140,"",250,0,0.3,"square")}},
$S:0}
C.dPF.prototype={
$0(){},
$S:0}
C.dPG.prototype={
$0(){return A.d.cA(this.a.e,this.b)},
$S:0}
C.dPH.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dPC.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bt(w.e,new C.dPB(v))
w.cy=null},
$S:0}
C.dPB.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
C.dPs.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mL(0,this.b,new B.q(w.x.a*(0.3+v.aj()*0.4),w.x.b*(0.2+v.aj()*0.6))).a},
$S:0}
C.dPQ.prototype={
$0(){var w=this.a
return w.m(new C.dPP(w))},
$S:0}
C.dPP.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dPR.prototype={
$2(d,e){var w=null,v=this.a,u=new B.av(e.b,e.d)
v.x=u
return B.aA(A.c5,B.ji(B.b4(w,w,w,new C.bcU(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dPK(v),w,w,w,new C.dPL(v),new C.dPM(v),new C.dPN(v),w,w,w,w,w,w,w,w,w,w,new C.dPO(v),w,w,w,!1,A.a4)},
$S:37}
C.dPO.prototype={
$1(d){return this.a.caD(d.b)},
$S:72}
C.dPM.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cjz(u)
if(t!=null){v.as=t
v.at=u
return}w=v.azu(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aK(0,u)}},
$S:47}
C.dPN.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.q(A.k.F(w.a+u.Q.a,46,u.x.a-46),A.k.F(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:19}
C.dPL.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c1M(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bt(v,new C.dPI(w))
u=t.as
u.toString
v.push(new C.nD(u,w.a,w.b))
B.jS()}}t.z=t.as=null},
$S:38}
C.dPI.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
C.dPK.prototype={
$1(d){return this.a.axs(d.b)},
$S:343}
C.dPS.prototype={
$0(){return this.a.bDg(this.b.a)},
$S:0}
C.dPT.prototype={
$0(){return this.a.auQ(this.b.a)},
$S:0}
C.dPU.prototype={
$0(){var w=this.a
return w.m(new C.dPJ(w))},
$S:0}
C.dPJ.prototype={
$0(){var w=this.a
w.ayD(0)
w.ay=null},
$S:0}
C.dPV.prototype={
$0(){return this.a.cAT(this.b)},
$S:0}
C.cV5.prototype={
$0(){var w=this,v=null,u=B.fv(v,A.ct,v,v,v,B.cQ(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.bW,v,A.dD,A.bX)
u.ef()
return u},
$S:272}
C.dVU.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dVT.prototype={
$0(){return this.a.d=null},
$S:0}
C.dVW.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c3F()},
$S:127}
C.dVV.prototype={
$0(){return B.a6(this.a,!1).i4()},
$S:0}
C.fr7.prototype={
$0(){return K.aKD},
$S:z+40}
C.fr8.prototype={
$0(){return D.dNF},
$S:z+43}
C.fr9.prototype={
$0(){return D.dKx},
$S:z+13}
C.fra.prototype={
$0(){return D.edZ},
$S:z+14}
C.frb.prototype={
$0(){return D.dWS},
$S:z+15}
C.frc.prototype={
$0(){return K.aKu},
$S:z+16}
C.frd.prototype={
$0(){return D.ebL},
$S:z+17}
C.fre.prototype={
$0(){return K.aKC},
$S:z+12}
C.frf.prototype={
$0(){return D.dMN},
$S:z+19}
C.f6K.prototype={
$2(d,e){return new C.afJ($.bGi()[e],new C.f6J(e,this.a),null)},
$S:z+20}
C.f6J.prototype={
$0(){var w=this.a,v=I.aIf.h(0,$.bGi()[w].a)
$.at4=v==null?"music":v
B.a6(this.b,!1).cd(B.eb(new C.f6H(w),!1,null,x.H))},
$S:0}
C.f6H.prototype={
$1(d){return $.bGi()[this.a].e.$0()},
$S:39}
C.f6L.prototype={
$2(d,e){return new C.aeB(D.aAH[e],new C.f6I(this.a,e),null)},
$S:z+21}
C.f6I.prototype={
$0(){return this.a.d.$1(D.aAH[this.b])},
$S:0}
C.f6q.prototype={
$0(){return this.a.as=!0},
$S:0}
C.f6p.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f6o.prototype={
$1(d){var w=this
return new B.e_(new C.f6n(w.a,w.b,w.c,w.d),null)},
$S:21}
C.f6n.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=x.l,a2=B.aG(a3,a0,a1).w
a1=B.aG(a3,a0,a1).w
w=x.p
v=B.a([D.fHi,A.aw,D.fO5,A.af],w)
for(u=d.d,t=d.a,s=x.G,r=d.b,q=d.c,p=0;p<3;p=o){o=p+1
n=B.d("SLAB "+o,a0,a0,a0,a0,a0,a0,D.fwB,a0,a0,a0)
m=new B.aP(12,12)
l=new B.aP(12,12)
l=B.a([new B.by(1,A.bc,B.aM(a0,A.Z,!1,a0,!0,A.t,a0,B.aN(),r[p],a0,a0,a0,a0,a0,2,new B.e5(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Title",a0,N.EG,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.bg(m,m,m,m),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ab,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jt,!0,A.a5,a0,A.ao,a0,a0,a0,a0),a0),A.ae,new B.by(2,A.bc,B.aM(a0,A.Z,!1,a0,!0,A.t,a0,B.aN(),q[p],a0,a0,a0,a0,a0,2,new B.e5(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Small line",a0,N.EG,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.bg(l,l,l,l),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ab,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jt,!0,A.a5,a0,A.ao,a0,a0,a0,a0),a0)],w)
m=B.a([],w)
for(k=0;k<30;++k){j=D.dxD[k]
i=new B.aP(12,12)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.C(t.a.c.d,s)
t.w=h}g=A.d.gH(h).j(0.3)}else g=A.c.j(0.06)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.C(t.a.c.d,s)
t.w=h}f=A.d.gH(h)}else f=A.bB
e=new B.ay(f,u[p].A(0,j)?1.8:1,A.r,-1)
m.push(B.aA(a0,B.p(a0,B.Y(j,u[p].A(0,j)?A.c:A.aS,a0,a0,a0,22),A.f,a0,a0,new B.o(g,a0,new B.bG(e,e,e,e),new B.bg(i,i,i,i),a0,a0,A.n),a0,a0,a0,A.fz,a0,a0,a0,42),A.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.f6l(a4,p,u,j),a0,a0,a0,a0,a0,a0,!1,A.a4))}A.d.v(v,B.a([n,A.an,new B.c7(A.aM,A.e,A.i,A.m,a0,A.p,a0,0,l,a0),A.P,new B.a5(a0,44,B.cj(m,a0,a0,a0,a0,a0,A.aM,!1),a0),A.aC],w))}v.push(B.bH(A.xh,a0,new C.f6m(t,r,q,u,a3),a0))
return new B.D(new B.Q(0,0,0,a2.f.d),B.bm(!0,new B.cR(new B.aZ(0,1/0,0,a1.a.b*0.86),B.cj(v,a0,a0,A0.yE,a0,a0,A.ai,!0),a0),!0,!1,A.ag,!0,!0),a0)},
$S:105}
C.f6l.prototype={
$0(){var w=this
return w.a.$1(new C.f6k(w.b,w.c,w.d))},
$S:0}
C.f6k.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.f6m.prototype={
$0(){var w=this,v=w.a
v.m(new C.f6j(v,w.b,w.c,w.d))
B.a6(w.e,!1).O(null)},
$S:0}
C.f6j.prototype={
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
C.f6y.prototype={
$0(){var w=this.a
return w.m(new C.f6x(w))},
$S:0}
C.f6x.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.f6z.prototype={
$0(){return E.uy(this.b,this.a.f,"scene")},
$S:0}
C.f6A.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ar(A.d.gH(u),A.d.gal(u),0.4)
u.toString
w=this.a.ga_k().x
w===$&&B.c()
return B.c3(v,new B.o(v,v,v,v,v,new B.c_(D.b1H,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.c3],x.O),v,v),A.n),A.bi)},
$S:282}
C.f6B.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.at(B.eL(A.A,B.c9(new B.h4(B.a([u.guD(),u.ga_k()],x.dS)),new C.f6w(u,this.b,v),w),A.f,A.e6),w,w,w)},
$S:208}
C.f6w.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.guD().x
r===$&&B.c()
w=r<0.9?1:1-C.bt9(r,0.9,0.98)
v=s.ga_k().x
v===$&&B.c()
u=A.dy.aE(0,v)
switch(s.gayE().a){case 0:s=s.bCr(t.b,r,u,t.c)
break
case 1:s=s.bTj(t.b,r,u,t.c)
break
case 2:s=s.cFK(t.b,r,u,t.c)
break
case 3:s=s.bFn(t.b,r,u,t.c)
break
case 4:s=s.bIJ(t.b,r,u,t.c)
break
case 5:s=s.caE(t.b,r,u,t.c)
break
default:s=null}return B.da(s,w)},
$S:212}
C.f6C.prototype={
$2(d,e){var w=B.awH(this.b),v=this.c.d,u=B.ar(A.d.gH(v),A.d.gal(v),0.4)
u.toString
v=B.ar(A.d.gH(v),A.d.gal(v),0.4)
v.toString
v=w.cOI(u,A.bB,v,3.5)
u=this.a
w=u.guD().x
w===$&&B.c()
return B.aaU(B.kT(null,null,null,1,0,new C.f6v(u),A.k.F(w,0,1)),v)},
$S:1900}
C.f6v.prototype={
$1(d){var w=this.a
w.guD().sp(0,d)
if(w.as)w.m(new C.f6r(w))},
$S:6}
C.f6r.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f6D.prototype={
$0(){var w=this.a
w.guD().sp(0,0)
w.aeT()},
$S:0}
C.f6E.prototype={
$1(d){var w=this.a
w.m(new C.f6u(w,d))
if(w.as)w.aeT()},
$S:6}
C.f6u.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f6F.prototype={
$0(){var w=this.a
w.m(new C.f6t(w,this.b))
w.guD().sp(0,0)
if(w.as)w.aeT()},
$S:0}
C.f6t.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.f6G.prototype={
$0(){var w=this.a
return w.m(new C.f6s(w,this.b))},
$S:0}
C.f6s.prototype={
$0(){var w=B.C(this.b,x.G)
return this.a.w=w},
$S:0}
C.f6h.prototype={
$2(d,e){return A.k.aR(d.a,e.a)},
$S:1901}
C.f6i.prototype={
$1(d){return d.b},
$S:1902}
C.dq9.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.dqa.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.dq6.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.dq7.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dq8.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dqb.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dqc.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dqd.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dqe.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.dqf.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.dqg.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.dqh.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.dqi.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.dqj.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.ewq.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ewf.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.ewh.prototype={
$2(d,e){return d+e.d*7+A.o.E(A.a.gX(e.b),97)},
$S:z+31}
C.ewi.prototype={
$2(d,e){return d+A.o.E(A.a.gX(e.a),31)+A.o.E(A.a.gX(e.b),17)},
$S:z+32}
C.ewl.prototype={
$1(d){var w=D.n0.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.E(d.d,u)]+")":t},
$S:z+33}
C.ewm.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.T(q),o=x.dg,n=B.C(new B.e9(new B.cM(new B.X(q,new C.ewn(d),p.k("X<1>")),new C.ewo(r),p.k("cM<1,r6?>")),o),o.k("M.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aN(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.J)(n),++v){u=n[v]
if(w.length>=6)return
t=B.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.ewn.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ewo.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.ewj.prototype={
$1(d){return D.n0.h(0,d.b).c===D.xA},
$S:z+54}
C.ewk.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ewQ.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.F((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.vF(0,u)
w.a7f(A.o.aq(v,1000))},
$S:7}
C.ewp.prototype={
$0(){},
$S:0}
C.ewb.prototype={
$0(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$$0)
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
C.ews.prototype={
$1(d){var w=null,v=this.a.b
return B.bm(!0,B.x(B.a([A.P,B.dF(!1,w,w,w,!0,w,w,w,!0,w,w,B.Y(D.n0.h(0,v).b,D.n0.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fZC,w,B.d(D.n0.h(0,v).a,w,w,w,w,w,w,A.fW,w,w,w),w,w,w),B.dF(!1,w,w,w,!0,w,w,w,!0,w,w,W.ars,w,w,w,w,new C.ewr(d),!1,w,w,w,w,w,w,w,D.fQX,w,w,w)],x.p),A.m,w,A.e,A.O,0,A.p),!0,!1,A.ag,!0,!0)},
$S:25}
C.ewr.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.ewu.prototype={
$1(d){var w,v,u,t=null,s=B.aG(d,t,x.l).w,r=B.a([D.epZ],x.p)
for(w=0;w<6;++w){v=D.aB5[w]
u=B.d(v.a,t,t,t,t,t,t,A.fW,t,t,t)
r.push(B.dF(!1,t,t,t,!0,t,t,t,!0,t,t,D.c1A,t,t,t,t,new C.ewt(d,v),!1,t,t,t,t,t,B.d(v.b,t,t,t,t,t,t,A.mu,t,t,t),t,u,t,t,t))}return B.bm(!0,new B.cR(new B.aZ(0,1/0,0,s.a.b*0.7),B.cj(r,t,t,D.bGq,t,t,A.ai,!0),t),!0,!1,A.ag,!0,!0)},
$S:25}
C.ewt.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.ewe.prototype={
$1(d){var w=null
return B.eg(B.a([B.bM(!1,A.dl,w,w,!0,w,w,w,new C.ewc(d),w,w),B.bM(!1,A.EL,w,w,!0,w,w,w,new C.ewd(d),w,w)],x.p),w,w,I.m6,D.fOg,w,w,w,w,D.fRf,w)},
$S:18}
C.ewc.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.ewd.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.ewO.prototype={
$0(){var w=this.a
return w.m(new C.ewN(w))},
$S:0}
C.ewN.prototype={
$0(){return this.a.r=!1},
$S:0}
C.ewP.prototype={
$2(d,e){var w,v,u,t=null,s=new B.av(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.nj(new C.ewE(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.bcr:t
v=B.a([B.b4(u,t,t,new C.biS(w,v,new C.ewF(r),new C.ewG(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ap(t,new B.dx(!0,B.c9(w,new C.ewH(r),t),t),t,t,10,10,6,t))
if(r.ax)v.push(r.bKn())
return B.aA(A.c5,B.ji(new B.an(A.a0,t,A.b4,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.ewI(r),t,r.gckS(),t,new C.ewJ(r),new C.ewK(r),new C.ewL(r),t,t,t,t,t,t,t,t,t,t,new C.ewM(r),t,t,t,!1,A.a4)},
$S:37}
C.ewE.prototype={
$0(){return this.a.acQ(this.b)},
$S:0}
C.ewM.prototype={
$1(d){return this.a.cDr(d.b)},
$S:72}
C.ewK.prototype={
$1(d){return this.a.ckT(d.b)},
$S:47}
C.ewL.prototype={
$1(d){return this.a.ckU(d.b)},
$S:19}
C.ewJ.prototype={
$1(d){return this.a.b3m()},
$S:38}
C.ewI.prototype={
$1(d){return this.a.adx(d.b)},
$S:343}
C.ewF.prototype={
$0(){return this.a.z},
$S:765}
C.ewG.prototype={
$0(){return this.a.Q},
$S:675}
C.ewH.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bOE()
if(p.length===0)return A.bL
w=A.w.j(0.55)
v=B.n(14)
u=B.L(A.bB,A.r,1)
t=B.a([D.fLF,A.cU],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.J)(p),++r)t.push(B.d(p[r],q,2,A.a2,q,q,q,D.fve,q,q,q))
return B.p(q,B.x(t,A.E,q,A.e,A.O,0,A.p),A.f,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.hb,q,q,q)},
$S:68}
C.ewg.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.n(12),t=B.L(e.j(0.6),A.r,1),s=x.p
return new B.D(A.ei,B.A(B.a([B.p(w,B.Y(d,e,w,w,w,21),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.be,B.E(B.x(B.a([B.d(f,w,w,w,w,w,w,Ac.Vr,w,w,w),A.bH,B.d(g,w,w,w,w,w,w,F.aaT,w,w,w)],s),A.E,w,A.e,A.i,0,A.p),1)],s),A.E,w,A.e,A.i,0,w,w),w)},
$S:1904}
C.ewA.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).i4()},
$S:0}
C.ewB.prototype={
$0(){var w=this.a
return w.m(new C.ewz(w))},
$S:0}
C.ewz.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ewC.prototype={
$0(){var w=this.a
return w.m(new C.ewy(w))},
$S:0}
C.ewy.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.ewD.prototype={
$0(){var w=this.a
return w.m(new C.ewx(w))},
$S:0}
C.ewx.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eww.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.n0.gdR(D.n0),w=w.gag(w);w.C();){v=w.gR(w)
if(v.b.c===e)p.push(v.a)}w=B.d(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.J)(p),++r)u.push(s.cyb(p[r]))
return new B.D(R.akN,B.x(B.a([new B.D(Ah.ams,w,q),B.A(u,A.m,q,A.e,A.i,0,q,q)],v),A.E,q,A.e,A.i,0,A.p),q)},
$S:z+37}
C.ewv.prototype={
$0(){return this.a.caK(this.b)},
$S:0}
C.dq5.prototype={
$0(){var w=this,v=null,u=B.fv(v,A.ct,v,v,v,B.cQ(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.bW,v,A.dD,A.bX)
u.ef()
return u},
$S:272}
C.bPd.prototype={
$1(d){return d.r<=0},
$S:z+38}
C.bPo.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bPj.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bPp.prototype={
$1(d){return this.a.Mc(d)&&!d.x},
$S:z+0}
C.bPq.prototype={
$2(d,e){return Math.max(d,this.a.aCk(e))},
$S:z+6}
C.bPs.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bPt(w))},
$S:z+5}
C.bPt.prototype={
$0(){return this.a.a},
$S:88}
C.bPr.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:69}
C.bPu.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bPv(w))},
$S:z+5}
C.bPv.prototype={
$0(){return this.a.a},
$S:88}
C.bPf.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bPg(w))},
$S:z+5}
C.bPg.prototype={
$0(){return this.a.a},
$S:88}
C.bPe.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:69}
C.bPh.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bPi(w))},
$S:z+5}
C.bPi.prototype={
$0(){return this.a.a},
$S:88}
C.bPc.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bPw.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bPk.prototype={
$1(d){return d!==this.b&&this.a.aIC(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bPn.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bPm.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bPl.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bJE.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bJF.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.csW.prototype={
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
C.fU9.prototype={
$1(d){var w
$.S()
w=B.K()
w.r=d.gp(0)
return w},
$S:1905}
C.fUb.prototype={
$2(d,e){var w
$.S()
w=B.K()
w.b=A.aa
w.c=e
w.r=d.gp(0)
w.d=A.bA
return w},
$S:1906}
C.fUc.prototype={
$5(d,e,f,g,h){return B.br(new B.a2(d,e,d+f,e+g),new B.aP(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1907}
C.fUa.prototype={
$3(d,e,f){var w
$.S()
w=B.K()
w.sar(new B.a9(A.b1,A.b7,A.x,B.a([e,f],x.O),null,null).aG(0,d))
return w},
$S:1908}
C.bJi.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.bJj.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bJh(w))},
$S:0}
C.bJh.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bJk.prototype={
$0(){return B.a([],x.k)},
$S:1909}
C.bJl.prototype={
$1(d){return this.a.bE(d).a>15e5},
$S:463}
C.bJm.prototype={
$0(){var w,v,u
J.bGr(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.tL(v))if(C.hd4(v.b))w.b2Q(v)
else w.a0o(v)
else{u=w.a.c.bfF(v)
w.af4(u==null?"The "+$.qz().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bJg.prototype={
$1(d){return new B.e_(new C.bJe(this.a,this.b),null)},
$S:21}
C.bJe.prototype={
$2(d,e){var w=null,v=this.b,u=new C.bJf(this.a,v,e),t=$.qz(),s=v.b,r=B.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.kh,w,w,w),q=B.aH(w,w,w,w,D.bT2,w,w,w,new C.bJa(u,v),w,w,w,w,w,w),p=A.k.F(v.ch,1,2.6),o=x.p
return B.bm(!0,new B.D(A.wi,B.x(B.a([r,A.aw,D.h_F,A.X,B.A(B.a([q,B.E(B.kT(t.h(0,s).d,w,w,2.6,1,u,p),1),B.aH(w,w,w,w,D.bZU,w,w,w,new C.bJb(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.i,0,w,w),B.A(B.a([B.d(""+A.k.V(v.ch*100)+"%",w,w,w,w,w,w,B.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b3,B.bM(!1,D.fDz,w,w,!0,w,w,w,new C.bJc(u),w,w),B.bM(!1,A.xh,w,w,!0,w,w,w,new C.bJd(d),w,w)],o),A.m,w,A.e,A.i,0,w,w)],o),A.E,w,A.e,A.O,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:85}
C.bJf.prototype={
$1(d){var w=this.a
w.m(new C.bJ8(this.b,d))
this.c.$1(new C.bJ9())
w.a.toString},
$S:6}
C.bJ8.prototype={
$0(){return this.a.ch=A.k.F(this.b,1,2.6)},
$S:0}
C.bJ9.prototype={
$0(){},
$S:0}
C.bJa.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
C.bJb.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
C.bJc.prototype={
$0(){return this.a.$1(1)},
$S:0}
C.bJd.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.bJB.prototype={
$2(d,e){var w
if(d==="short"){G.dE(1800,"",120,0,0.55,"noise")
G.dE(200,"",160,2.2,0.4,"saw")
B.fL()
w=this.a
if(w.c!=null)w.af4("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){G.dE(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.af4("\u26a0 Overloaded! The "+$.qz().h(0,e.b).b+" can only give about "+A.k.ad(w.a.c.Ac(e),2)+" amps but your gadgets are asking for "+A.k.ad(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.af4("Burnt out! "+e.ay)
G.dE(140,"",320,0,0.6,"noise")
G.dE(900,"",160,1.5,0.35,"square")}},
$S:z+42}
C.bJC.prototype={
$0(){},
$S:0}
C.bIM.prototype={
$0(){},
$S:0}
C.bJD.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bJA.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=B.a([B.aA(A.c5,B.b4(p,p,p,new C.ajA(w,v,u,t,s,r==null?A.jp:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bJu(o),new C.bJv(o),new C.bJw(o),p,p,p,p,p,p,p,p,p,p,new C.bJx(o),p,p,p,!1,A.a4)],q)
if(o.a.c.a.length===0)n.push(D.bbH)
w=o.Q
if(w!=null){v=B.n(14)
u=B.L(A.cJ,A.r,1)
n.push(B.ap(p,B.aA(p,B.p(p,B.A(B.a([D.fBF,B.E(B.d(w,p,p,p,p,p,p,D.ftt,p,p,p),1)],q),A.E,p,A.e,A.i,0,p,p),A.f,p,p,new B.o(D.bhK,p,u,v,p,p,A.n),p,p,p,p,A.nz,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bJy(o),p,p,p,p,p,p,!1,A.a4),p,p,10,10,8,p))}if(o.e!=null)n.push(B.ap(8,o.b0K(B.A(B.a([D.bIH,new E.fB(A.CD,"Cut wire",new C.bJz(o),A.c0,p)],q),A.m,p,A.e,A.i,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(B.ap(8,o.clr(w),p,p,10,10,p,p))}return B.ji(new B.an(A.a0,p,A.b4,A.t,n,p),A.t,p)},
$S:344}
C.bJv.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b9S(s)
if(r!=null){t.m(new C.bJs(t,r,d))
return}w=t.b3w(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new B.q(v*u.a,w.d*u.b).aK(0,s)
t.m(new C.bJt(t,w))}},
$S:47}
C.bJs.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
C.bJt.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bJw.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new C.bJq(w,d))
else if(w.w!=null)w.m(new C.bJr(w,d.b.a7(0,w.x)))},
$S:19}
C.bJq.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
C.bJr.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.F(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.F(w.b/v.y.b,0.08,0.92)},
$S:0}
C.bJu.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b9S(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.alQ(u.a,u.b,v.a,v.b)!=null)G.dE(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.af2()},
$S:38}
C.bJx.prototype={
$1(d){var w=this.a,v=d.b,u=w.b3w(v)
if(u!=null){w.m(new C.bJo(w,u))
if(D.mn.an(0,u.b))w.cw4(u)
w.a.toString
return}w.m(new C.bJp(w,w.cIV(v)))},
$S:72}
C.bJo.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
G.dE(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
G.dE(200,"",70,0,0.2,"saw")}},
$S:0}
C.bJp.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
C.bJy.prototype={
$0(){var w=this.a
return w.m(new C.bJn(w))},
$S:0}
C.bJn.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bJz.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
G.dE(300,"",50,0,0.35,"noise")
w.af2()},
$S:0}
C.bIN.prototype={
$0(){return this.a.bs6(this.b)},
$S:0}
C.bJ5.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.A(B.a([B.d(d,w,w,w,w,w,w,D.fnD,w,w,w),B.E(B.kT(this.b.d,w,w,g,h,new C.bJ7(this.a,f),A.k.F(e,h,g)),1)],x.p),A.m,w,A.e,A.i,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1910}
C.bJ7.prototype={
$1(d){var w=this.a
w.m(new C.bJ6(this.b,d))
w.a.toString},
$S:6}
C.bJ6.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bIT.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
G.dE(260,"",70,0,0.35,"noise")
w.af2()},
$S:0}
C.bIU.prototype={
$0(){var w=this.a
return w.m(new C.bIS(w))},
$S:0}
C.bIS.prototype={
$0(){return this.a.d=null},
$S:0}
C.bIV.prototype={
$0(){this.a.m(new C.bIR(this.b,this.c))
G.dE(900,"",40,0,0.3,"noise")},
$S:0}
C.bIR.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bIY.prototype={
$0(){return this.a.b2Q(this.b)},
$S:0}
C.bIZ.prototype={
$0(){return this.a.a0o(this.b)},
$S:0}
C.bJ_.prototype={
$0(){return this.a.a21(this.b)},
$S:0}
C.bJ0.prototype={
$0(){var w=this.a
w.m(new C.bIQ(this.b,this.c))
w.a.toString},
$S:0}
C.bIQ.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bJ1.prototype={
$0(){var w=this.a
w.m(new C.bIP(this.b,this.c))
w.a.toString},
$S:0}
C.bIP.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bJ2.prototype={
$0(){var w=this.a
w.m(new C.bIO(this.b,this.c))
w.a.toString},
$S:0}
C.bIO.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bJ3.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJ4.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bIW.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bIX.prototype={
$1(d){return this.a.f=d},
$S:6}
C.fqT.prototype={
$1(d){return d.aIf("bulb")},
$S:z+2}
C.fqU.prototype={
$1(d){return d.q8(0,"switch")&&d.aIf("bulb")},
$S:z+2}
C.fqV.prototype={
$1(d){return A.d.aX(d.a,new C.fqG())},
$S:z+2}
C.fqG.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.fqW.prototype={
$1(d){return d.q8(0,"resistor")&&A.d.aX(d.a,new C.fqF())},
$S:z+2}
C.fqF.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fqX.prototype={
$1(d){return!d.q8(0,"battery")&&d.aIf("bulb")},
$S:z+2}
C.fqK.prototype={
$1(d){return A.d.aX(d.a,new C.fqE())},
$S:z+2}
C.fqE.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fqL.prototype={
$1(d){return A.d.aX(d.a,new C.fqD())},
$S:z+2}
C.fqD.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fqM.prototype={
$1(d){return A.d.aX(d.a,new C.fqC())},
$S:z+2}
C.fqC.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fqN.prototype={
$1(d){var w=d.a
return A.d.aX(w,new C.fqA())&&A.d.aX(w,new C.fqB())&&d.q8(0,"buck")},
$S:z+2}
C.fqA.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fqB.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fqO.prototype={
$1(d){var w=d.a
return A.d.aX(w,new C.fqy())&&A.d.aX(w,new C.fqz())},
$S:z+2}
C.fqy.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fqz.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fqP.prototype={
$1(d){return A.d.aX(d.a,new C.fqx())},
$S:z+2}
C.fqx.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.e_H.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a9(0)
w.v(0,v.b)},
$S:0}
C.e_Q.prototype={
$1(d){var w=this.a.d
return w.aIC(d)&&w.tL(d)},
$S:z+0}
C.e_R.prototype={
$1(d){return d.x},
$S:z+0}
C.e_S.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.e_T.prototype={
$0(){},
$S:0}
C.e_G.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.n(22),o=x.p,n=B.a([D.fTc,A.aw,D.fDv,A.X],o)
for(w=this.a,v=0;v<19;++v){u=D.RQ[v]
t=A.c.j(0.06)
s=new B.aP(14,14)
r=new B.ay(A.bB,1,A.r,-1)
n.push(B.aA(q,B.p(q,B.x(B.a([B.d(u.a,q,q,q,q,q,q,A.ix,q,q,q),A.bH,B.d(u.b,q,3,A.a2,q,q,q,D.fud,q,q,q)],o),A.E,q,A.e,A.i,0,A.p),A.f,q,q,new B.o(t,q,new B.bG(r,r,r,r),new B.bg(s,s,s,s),q,q,A.n),q,q,q,A.cv,A.bh,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.e_F(w,d,u),q,q,q,q,q,q,!1,A.a4))}return B.eR(q,F.mH,new B.D(A.bR,new B.a5(340,q,B.cj(n,q,q,q,q,q,A.ai,!0),q),q),q,q,q,q,A.da,q,new B.b9(p,A.a1),q)},
$S:49}
C.e_F.prototype={
$0(){B.a6(this.b,!1).O(null)
var w=this.a
w.m(new C.e_E(w,this.c))
G.dE(800,"",120,-0.5,0.3,"square")},
$S:0}
C.e_E.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bkM()},
$S:0}
C.e_C.prototype={
$1(d){return new C.Ws(this.a.d,null)},
$S:z+44}
C.e_D.prototype={
$0(){},
$S:0}
C.e_P.prototype={
$1(d){return new B.e_(new C.e_O(this.a),null)},
$S:21}
C.e_O.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.aiJ(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.q(0,k),f=g?A.b9:A.aJ
k=B.aG(d,m,x.l).w
w=l.r
v=x.p
u=B.a([B.A(B.a([D.fQo,A.b3,B.d(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.i,0,m,m),A.P,B.bx(B.n(4),B.kl(A.bB,m,m,5,m,w.a/11,new B.lJ(f,x.c)),A.aq),A.af],v)
if(h)u.push(D.fGG)
else{h=f.j(0.1)
t=B.n(14)
s=B.L(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.d(r+" Now: "+i.a,m,m,m,m,m,m,Ae.Kw,m,m,m)
q=B.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,I.EH,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.p(m,B.x(B.a([r,A.aw,q,new B.bL(A.a9,m,m,B.bM(!1,B.d(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.e_M(l,e),m,m),m)],v),A.E,m,A.e,A.i,0,A.p),A.f,m,m,new B.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bh,m,m,m))}u.push(A.X)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aP(12,12)
n=new B.ay(o===l.f?f.j(0.6):A.dt,1,A.r,-1)
if(w.q(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
s=B.d(s,m,m,m,m,m,m,A.aaR,m,m,m)
r=j[o]
q=w.q(0,o)?A.aD:A.c
u.push(B.aA(m,B.p(m,new B.c7(A.aM,A.e,A.i,A.m,m,A.p,m,0,B.a([s,A.at,new B.by(1,A.bc,B.d(r.a,m,m,m,m,m,m,new B.G(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],v),m),A.f,m,m,new B.o(h,m,new B.bG(n,n,n,n),new B.bg(t,t,t,t),m,m,A.n),m,m,m,A.eK,A.nz,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.e_N(l,o,e),m,m,m,m,m,m,!1,A.a4))}return B.bm(!0,new B.cR(new B.aZ(0,1/0,0,k.a.b*0.75),B.cj(u,m,m,A0.yE,m,m,A.ai,!0),m),!0,!1,A.ag,!0,!0)},
$S:85}
C.e_M.prototype={
$0(){var w=this.a
w.m(new C.e_K(w))
this.b.$1(new C.e_L())
w.Fq()},
$S:0}
C.e_K.prototype={
$0(){var w=this.a
$.aiJ()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.e_L.prototype={
$0(){},
$S:0}
C.e_N.prototype={
$0(){var w=this.a
w.m(new C.e_I(w,this.b))
this.c.$1(new C.e_J())
w.Fq()},
$S:0}
C.e_I.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e_J.prototype={
$0(){},
$S:0}
C.e_V.prototype={
$0(){return B.a6(this.a,!1).i4()},
$S:0}
C.e_W.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.m8("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a6(t.b,!1).cd(B.eb(new C.e_U(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.e_U.prototype={
$1(d){B.lj("construction")
return Aj.hRL()},
$S:z+45}
C.e_X.prototype={
$0(){return E.hDg(this.a,"ELECTRONICS LAB",this.b,A.aJ)},
$S:0}
C.e_Y.prototype={
$0(){var w=this.a
return w.m(w.d.gd_L())},
$S:0}
C.e_Z.prototype={
$0(){var w=this.a,v=w.d
w.m(v.gtb(v))
w.Fq()},
$S:0}
C.cKu.prototype={
$2(d,e){var w=null,v=this.a.gayL().x
v===$&&B.c()
return B.b4(w,w,w,new C.baK(v,w),A.ay)},
$S:61}
C.cKt.prototype={
$3(d,e,f){var w=new B.aE($.S().r,A.ah,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.D(new B.aY(v,t))
w.D(new B.c4(v,u,v+e,u))
w.D(new B.c4(v,u,v,u+e))
w.D(new B.c4(v,u,v-e,u))
w.D(new B.c4(v,u,v,t))
w.D(new B.bt())
t=B.K()
t.r=A.c.j(f).gp(0)
this.a.ae(w,t)},
$S:398}
C.fZ1.prototype={
$3(d,e,f){return new C.VL(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+46}
C.fZ2.prototype={
$4(d,e,f,g){var w=x.Y
return new B.d_(e,!1,B.is(A.A,g,null,new B.bf(B.cJ(A.cw,e,null),new B.bp(0.85,1,w),w.k("bf<bN.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
C.dWR.prototype={
$0(){return B.a6(this.a,!1).i4()},
$S:0}
C.dWQ.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.n(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c1c(o):q.bEq(o,p),m=x.p
p=B.a([B.p4(new B.mH(n,new B.bP(p,x.bz)),A.pf,B.qu(),A.b6,A.b6,new C.dWO())],m)
n=t.d
if(n){w=A.k.E(q.gSv(),12)<4
v=w?150:96
u=B.n(16)
m=B.a([A.at],m)
if(w)m.push(D.bIt)
else m.push(A.b3)
m.push(B.p(s,s,A.f,s,s,new B.o(w?A.b9:A.av,s,s,s,s,s,A.a7),s,9,s,s,s,s,s,9))
m.push(A.at)
p.push(B.ap(s,B.at(B.cV(s,B.A(m,A.m,s,A.e,A.i,0,s,s),s,s,A.ew,new B.o(A.w,s,s,u,s,s,A.n),A.mL,s,28,s,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.As)p.push(B.ap(s,B.at(B.p(s,s,A.f,s,s,A.LK,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.En)p.push(B.ap(s,B.p(s,s,A.f,s,s,A.LK,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ap(6,B.aA(s,B.at(B.p(s,s,A.f,s,s,new B.o(A.c.j(0.75),s,s,B.n(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dWP(q),s,s,s,s,s,s,!1,A.a4),s,s,0,0,s,s))
return B.bx(r,new B.an(A.a0,s,A.b4,A.t,p,s),A.aq)},
$S:299}
C.dWO.prototype={
$2(d,e){var w=x.Y
return new B.d_(e,!1,B.is(A.A,d,null,new B.bf(e,new B.bp(0.92,1,w),w.k("bf<bN.T>"))),null)},
$S:457}
C.dWP.prototype={
$0(){var w=this.a
return w.m(new C.dWN(w))},
$S:0}
C.dWN.prototype={
$0(){return this.a.e=null},
$S:0}
C.dWM.prototype={
$0(){var w=this.a
return w.m(new C.dWL(w,this.b))},
$S:0}
C.dWL.prototype={
$0(){return this.a.e=A.d.cp(F.kw,this.b)},
$S:0}
C.dWK.prototype={
$0(){var w=this.a
return w.m(new C.dWJ(w))},
$S:0}
C.dWJ.prototype={
$0(){return this.a.e=0},
$S:0}
C.dWF.prototype={
$0(){var w=this.a
return w.m(new C.dWE(w))},
$S:0}
C.dWE.prototype={
$0(){return this.a.e=null},
$S:0}
C.dWI.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=B.n(o?20:8),m=A.w.j(0.55),l=x.p
m=B.p(p,B.A(B.a([D.fZ0,A.at,B.E(B.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eO,p,p,p,D.fAv,p,p,p),1),B.d(A.a.b_(A.o.u(B.dg(new B.V(Date.now(),0,!1))),2,"0")+":"+A.a.b_(A.o.u(B.fP(new B.V(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.r6,p,p,p)],l),A.m,p,A.e,A.i,0,p,p),A.f,m,p,p,p,24,p,p,A.ks,p,p,p)
w=this.a
v=B.a([B.b4(p,p,p,new C.bxk(w.gSv(),this.c.d,p),A.ay)],l)
o=w.e
if(o!=null){u=B.n(10)
t=B.L(A.aW,A.r,1)
s=B.n(10)
o=B.p(p,B.A(B.a([B.aA(p,B.p(p,p,A.f,p,p,A.aea,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dWH(w),p,p,p,p,p,p,!1,A.a4),A.e1,B.p(p,p,A.f,p,p,A.aeg,p,12,p,p,p,p,p,12),A.e1,B.p(p,p,A.f,p,p,D.b6Z,p,12,p,p,p,p,p,12),A.at,B.E(B.d(F.kw[o].a,p,1,A.a2,p,p,p,A.aaL,p,p,p),1)],l),A.m,p,A.e,A.i,0,p,p),A.f,A.cs,p,p,p,24,p,p,A.fG,p,p,p)
r=w.e
r.toString
v.push(B.bR(0,new B.D(D.bEX,B.p(p,B.bx(s,B.x(B.a([o,B.E(B.b4(p,p,p,new C.afq(r,w.gSv(),p),A.fJ),1)],l),A.m,p,A.e,A.i,0,A.p),A.aq),A.f,p,p,new B.o(A.w,p,t,u,D.dtS,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=B.n(18)
t=B.L(A.aW,A.r,1)
s=B.a([],l)
for(q=0;q<8;++q)s.push(new B.D(A.jE,w.awH(F.kw[q],34,!1),p))
v.push(B.ap(8,B.at(B.p(p,B.A(s,A.m,p,A.e,A.O,0,p,p),A.f,p,p,new B.o(o,p,t,u,p,p,A.n),p,p,p,p,A.lK,p,p,p),p,p,p),p,p,0,0,p,p))
return B.bx(n,B.p(p,B.x(B.a([m,B.E(new B.an(A.a0,p,A.b4,A.t,v,p),1)],l),A.m,p,A.e,A.i,0,A.p),A.f,X.Zp,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:299}
C.dWH.prototype={
$0(){var w=this.a
return w.m(new C.dWG(w))},
$S:0}
C.dWG.prototype={
$0(){return this.a.e=null},
$S:0}
C.frn.prototype={
$0(){return D.eg1},
$S:z+47}
C.fro.prototype={
$0(){return D.dOd},
$S:z+48}
C.frp.prototype={
$0(){return D.dKK},
$S:z+49}
C.frq.prototype={
$0(){return D.dNB},
$S:z+50}
C.frr.prototype={
$0(){return D.dSF},
$S:z+51}
C.frs.prototype={
$0(){return D.ebO},
$S:z+52}
C.frt.prototype={
$0(){return D.edY},
$S:z+53}
C.fru.prototype={
$0(){return D.dRZ},
$S:z+36}
C.clP.prototype={
$0(){return B.a6(this.a,!1).i4()},
$S:0}
C.clQ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=(e.b-14)/2,i=x.p,h=B.a([],i)
for(w=$.hH5(),v=j*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aP(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ac(0,A.G,p.j(0.4),A.du,16)],t)
n=B.d(r.c,k,k,k,k,k,k,Ai.Ku,k,k,k)
m=B.d(r.a,k,k,k,k,k,k,D.fz4,k,k,k)
l=A.c.j(0.85)
h.push(B.aA(k,B.p(k,new B.an(A.a0,k,A.ac,A.t,B.a([new B.cL(k,-6,-6,k,k,k,n,k),new B.bL(A.ly,k,k,B.x(B.a([m,A.cU,B.d(r.b,k,k,k,k,k,k,new B.G(!0,l,k,k,k,k,12,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)],i),A.E,k,A.e,A.O,0,A.p),k)],i),k),A.f,k,k,new B.o(k,k,k,new B.bg(q,q,q,q),p,new B.a9(A.aA,A.aF,A.x,o,k,k),A.n),k,v,k,k,A.bE,k,k,j),A.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.clO(d,r),k,k,k,k,k,k,!1,A.a4))}return B.bW(A.bG,h,A.br,k,14,14)},
$S:162}
C.clO.prototype={
$0(){return B.a6(this.a,!1).cd(B.eb(new C.clN(this.b),!1,null,x.H))},
$S:0}
C.clN.prototype={
$1(d){return this.a.f.$0()},
$S:39}
C.eT8.prototype={
$0(){var w=this.a
return w.w=w.d[w.b6T(w.f)]},
$S:0}
C.eT4.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cM.aj()*7},
$S:0}
C.eT3.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bP(0,A.cd)
w.w=""},
$S:0}
C.eT6.prototype={
$0(){var w=this.a
return w.m(new C.eT5(w,this.b))},
$S:0}
C.eT5.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cA(w,this.b)},
$S:0}
C.eT7.prototype={
$1(d){return this.a.b1e(0)},
$S:2}
C.e2G.prototype={
$0(){return C.JB("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.e2H.prototype={
$0(){},
$S:0}
C.e2B.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.e2D.prototype={
$0(){return this.a.b1g(this.b)},
$S:0}
C.e2E.prototype={
$0(){var w=this.a
return w.m(new C.e2C(w))},
$S:0}
C.e2C.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.e2F.prototype={
$0(){var w=this.a
return w.b1g(w.d)},
$S:0}
C.dOn.prototype={
$2(d,e){return d+e},
$S:79}
C.dOo.prototype={
$0(){},
$S:0}
C.dOi.prototype={
$2(d,e){return d+e},
$S:79}
C.dOl.prototype={
$0(){var w=this.a
return w.m(new C.dOk(w,this.b))},
$S:0}
C.dOk.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dOm.prototype={
$0(){var w=this.a
return w.m(new C.dOj(w))},
$S:0}
C.dOj.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.e_b.prototype={
$0(){return E.uy(this.b,this.a.d,"drawing")},
$S:0}
C.e_c.prototype={
$1(d){var w=this.a
return w.m(new C.e_a(w,d))},
$S:47}
C.e_a.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aJA(u,v,t))},
$S:0}
C.e_d.prototype={
$1(d){var w=this.a
return w.m(new C.e_9(w,d))},
$S:19}
C.e_9.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
C.e_e.prototype={
$1(d){var w=this.a
return w.m(new C.e_8(w,d))},
$S:24}
C.e_8.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aJA(u,v,t))},
$S:0}
C.e_f.prototype={
$0(){var w=this.a
return w.m(new C.e_7(w,this.b))},
$S:0}
C.e_7.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.e_g.prototype={
$1(d){var w=this.a
return w.m(new C.e_6(w,d))},
$S:6}
C.e_6.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.e_h.prototype={
$0(){var w=this.a
return w.m(new C.e_5(w))},
$S:0}
C.e_5.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.e_i.prototype={
$0(){var w=this.a
return w.m(new C.e_4(w))},
$S:0}
C.e_4.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.e_j.prototype={
$0(){var w=this.a
return w.m(A.d.gtb(w.e))},
$S:0}
C.e_k.prototype={
$0(){var w=this.a
return w.m(new C.e_3(w))},
$S:0}
C.e_3.prototype={
$0(){var w=this.a
w.x=D.azV[A.o.E(A.d.cp(D.azV,w.x)+1,4)]},
$S:0}
C.eq_.prototype={
$0(){return this.a.f.I(0,this.b)},
$S:0}
C.eq0.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.JB("bell",B.a([0,4,7],w),500,0.45)
u.m(new C.epZ(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.c()
if(v===u.length)C.JB("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:12}
C.epZ.prototype={
$0(){var w=this.a
w.r.v(0,B.a([this.b,this.c],x.t))
w.f.a9(0)},
$S:0}
C.eq1.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.epY(w))},
$S:12}
C.epY.prototype={
$0(){var w=this.a
w.f.a9(0)
w.x=!1},
$S:0}
C.eq5.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return B.aA(w,B.ly(new C.eq3(v,e),w,A.b6,A.pf,w,w,new B.bp(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eq4(v,e),w,w,w,w,w,w,!1,A.a4)},
$S:84}
C.eq4.prototype={
$0(){return this.a.ccO(this.b)},
$S:0}
C.eq3.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dr(),m=n.a
m.$flags&2&&B.aj(m)
m[11]=0.001
n.fK(3.141592653589793*e)
m=B.n(16)
w=o?p:D.c84
if(o)v=q.a.r.q(0,q.b)?A.b9.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.L(u.r.q(0,t)?A.b9:A.aW,A.r,1)
if(o){r=B.dr()
r.fK(3.141592653589793)
u=u.e
u===$&&B.c()
r=B.fw(A.A,B.d(u[t],p,p,p,p,p,p,H.aaW,p,p,p),p,r,!0)
u=r}else u=D.fRV
return B.fw(A.A,B.p(A.A,u,A.f,p,p,new B.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:113}
C.eq6.prototype={
$0(){var w=this.a
return w.m(new C.eq2(w,this.b))},
$S:0}
C.eq2.prototype={
$0(){var w=this.a
w.d=this.b.a
w.au1()},
$S:0}
C.eq7.prototype={
$0(){var w=this.a
return w.m(w.gbN7())},
$S:0}
C.eAM.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.eAN.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.eAK.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eAL.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eAJ(w))},
$S:12}
C.eAJ.prototype={
$0(){return this.a.f=-1},
$S:0}
C.eAO.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.eAP.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.eAQ.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b1f()},
$S:12}
C.eAR.prototype={
$0(){return this.a.ccU(this.b)},
$S:0}
C.eOD.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:59}
C.eOM.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.d(d,w,1,A.a2,w,w,w,B.l(w,w,A.aS,w,w,w,w,w,w,w,w,f?16:14,w,w,A.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.D(A.kT,B.A(B.a([v,A.ae,new B.dp(1,A.co,B.eL(A.A,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.e6),w)],x.p),A.m,w,A.e,A.i,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1911}
C.eOI.prototype={
$1(d){return this.a.m(new C.eOH())},
$S:2}
C.eOH.prototype={
$0(){},
$S:0}
C.eOJ.prototype={
$0(){var w=this.a
return w.m(new C.eOG(w,this.b))},
$S:0}
C.eOG.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eOK.prototype={
$1(d){var w=this.a
return w.m(new C.eOF(w,d))},
$S:6}
C.eOF.prototype={
$0(){return this.a.f=A.k.V(this.b)},
$S:0}
C.eOL.prototype={
$0(){var w=this.a
return w.m(new C.eOE(w))},
$S:0}
C.eOE.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eoF.prototype={
$0(){},
$S:0}
C.eoG.prototype={
$0(){},
$S:0}
C.eoy.prototype={
$0(){var w=this.a
return w.m(new C.eox(w))},
$S:0}
C.eox.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.bZ(u,1,!1,x.S)
w.r=0.9
E.Xe("hat",0,0.6)},
$S:0}
C.eoz.prototype={
$0(){var w=this.a
return w.m(new C.eow(w))},
$S:0}
C.eow.prototype={
$0(){this.a.y=1.1
E.mm("bell",36,200,0.4)},
$S:0}
C.eoA.prototype={
$0(){var w=this.a
return w.m(new C.eov(w))},
$S:0}
C.eov.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aw(Math.max(v,u)-t+1)
w.as=u
E.mm("bell",12+A.o.E(u,12),500,0.5)},
$S:0}
C.eoB.prototype={
$0(){var w=this.a
return w.m(new C.eou(w,this.b))},
$S:0}
C.eou.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.eoC.prototype={
$1(d){var w=this.a
return w.m(new C.eot(w,d))},
$S:6}
C.eot.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.V(this.b),r=J.e2(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.eoD.prototype={
$1(d){var w=this.a
return w.m(new C.eos(w,d))},
$S:6}
C.eos.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
C.eoE.prototype={
$1(d){var w=this.a
return w.m(new C.eor(w,d))},
$S:6}
C.eor.prototype={
$0(){return this.a.Q=A.k.V(this.b)},
$S:0}
C.clL.prototype={
$0(){var w=this
return E.mm(w.a,w.b,w.c,w.d)},
$S:1};(function aliases(){var w=C.aNE.prototype
w.bzn=w.t
w=C.aMJ.prototype
w.byq=w.t
w=C.aMK.prototype
w.byr=w.t
w=C.aMO.prototype
w.byv=w.t
w=C.aOt.prototype
w.bAj=w.t
w=C.aNC.prototype
w.bzl=w.t
w=C.az3.prototype
w.bvr=w.t
w=C.az4.prototype
w.bvs=w.t
w=C.aLa.prototype
w.bwO=w.t
w=C.aMX.prototype
w.byE=w.t
w=C.aML.prototype
w.bys=w.t
w=C.aN3.prototype
w.byM=w.t
w=C.aNw.prototype
w.bzf=w.t
w=C.aNX.prototype
w.bzG=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(C.aFJ.prototype,"gay9","c8i",1)
var r
v(r=C.aEc.prototype,"gch8","ch9",22)
w(r,"gc8S","b_S",1)
w(C.aEe.prototype,"gcaA","caB",1)
u(C.aEv.prototype,"gcaH","caI",39)
w(r=C.aIJ.prototype,"gcAC","cAD",1)
w(r,"gcaJ","aeT",1)
w(r,"gclB","clC",1)
w(r,"gcaG","aeS",3)
w(r=C.aFI.prototype,"gbKg","aae",3)
w(r,"gckS","b3m",1)
w(r,"gcoF","ahs",3)
t(r,"gcaL","aeU",3)
t(r=C.a5d.prototype,"gtb","a9",1)
v(r,"gcYq","aoz",0)
v(r,"gcUO","Mc",0)
w(r,"gd_L","bkM",1)
s(C.ajA.prototype,"gcb7",0,5,null,["$5"],["qP"],41,0,0)
w(r=C.aEH.prototype,"gcb8","cb9",1)
w(r,"gcru","ahO",3)
w(r,"gcho","ag8",3)
w(r,"gcyD","aiY",3)
w(r=C.aGa.prototype,"gccP","ccQ",1)
t(r,"gccN","b1e",1)
w(C.aFu.prototype,"gbN7","au1",1)
t(C.aFP.prototype,"gccR","ccS",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aF,[C.akM,C.GL,C.vf,C.aTJ,C.a44,C.bbQ,C.c5S,C.yz,C.CT,C.nD,C.bcB,C.B0,C.buN,C.qn,C.r6,C.CX,C.a_f,C.afx,C.a1u,C.D7,C.acs,C.acJ,C.aeE,C.Gw,C.eh,C.tT,C.ab7,C.ace,C.a5d,C.mS,C.bcC,C.fQ,C.mo,C.bw6,C.aJA])
u(B.hu,[C.fIm,C.fxl,C.fEQ,C.fER,C.fIj,C.fIk,C.ehP,C.ei7,C.exp,C.ewX,C.ewY,C.ewZ,C.ex_,C.ex0,C.ex1,C.ex2,C.ex3,C.ewV,C.ewW,C.ewU,C.exk,C.exl,C.exm,C.dNU,C.dNW,C.dNZ,C.dO9,C.c5T,C.c5U,C.fqH,C.fqI,C.fqJ,C.fqQ,C.fqR,C.fqS,C.dPW,C.dPD,C.dPX,C.dPy,C.dPt,C.dPv,C.dPB,C.dPO,C.dPM,C.dPN,C.dPL,C.dPI,C.dPK,C.f6H,C.f6o,C.f6v,C.f6E,C.f6i,C.dq9,C.dqa,C.dq6,C.dq7,C.dq8,C.dqb,C.dqc,C.dqd,C.dqe,C.dqf,C.dqg,C.dqh,C.dqi,C.dqj,C.ewl,C.ewm,C.ewn,C.ewo,C.ewj,C.ewk,C.ewQ,C.ews,C.ewu,C.ewe,C.ewM,C.ewK,C.ewL,C.ewJ,C.ewI,C.ewg,C.bPd,C.bPo,C.bPj,C.bPp,C.bPr,C.bPe,C.bPc,C.bPw,C.bPk,C.bPn,C.bPm,C.bPl,C.bJE,C.fU9,C.fUc,C.fUa,C.bJl,C.bJg,C.bJf,C.bJD,C.bJv,C.bJw,C.bJu,C.bJx,C.bJ5,C.bJ7,C.bJ3,C.bJ4,C.bIW,C.bIX,C.fqT,C.fqU,C.fqV,C.fqG,C.fqW,C.fqF,C.fqX,C.fqK,C.fqE,C.fqL,C.fqD,C.fqM,C.fqC,C.fqN,C.fqA,C.fqB,C.fqO,C.fqy,C.fqz,C.fqP,C.fqx,C.e_Q,C.e_R,C.e_G,C.e_C,C.e_P,C.e_U,C.cKt,C.fZ1,C.fZ2,C.clN,C.eT7,C.e_c,C.e_d,C.e_e,C.e_g,C.eq3,C.eOD,C.eOM,C.eOI,C.eOK,C.eoC,C.eoD,C.eoE])
u(B.jt,[C.fIl,C.ehU,C.ehS,C.ex5,C.exi,C.dPu,C.dPR,C.dVW,C.f6K,C.f6L,C.f6n,C.f6A,C.f6B,C.f6w,C.f6C,C.f6h,C.ewh,C.ewi,C.ewP,C.ewH,C.eww,C.bPq,C.bPs,C.bPu,C.bPf,C.bPh,C.bJF,C.csW,C.fUb,C.bJe,C.bJB,C.bJA,C.e_O,C.cKu,C.dWQ,C.dWO,C.dWI,C.clQ,C.dOn,C.dOi,C.eq5])
u(B.af,[C.Ws,C.WP,C.Vl,C.Vq,C.O2,C.aII,C.WO,C.ajy,C.W1,C.ayK,C.VL,C.Xl,C.W9,C.Vm,C.W0,C.WJ,C.WT,C.Xc,C.WI])
u(B.ah,[C.blX,C.aNE,C.aMJ,C.aMO,C.aEv,C.aOt,C.aNC,C.az3,C.bzi,C.aLa,C.aMX,C.aNX,C.aN3,C.aML,C.blo,C.aFu,C.aFP,C.bmE,C.aNw])
u(B.iG,[C.ehN,C.ehO,C.ei_,C.ei0,C.ehW,C.ehV,C.ehX,C.ehT,C.ehY,C.ehR,C.ehZ,C.ehQ,C.ei3,C.ei2,C.ei4,C.ei1,C.ei5,C.ei6,C.ei8,C.exo,C.exq,C.exr,C.ex7,C.ex6,C.ex4,C.exd,C.exe,C.exa,C.exf,C.ex9,C.exg,C.exh,C.ex8,C.exj,C.exc,C.exn,C.exb,C.dOg,C.dOf,C.dNT,C.dOh,C.dNV,C.dNX,C.dNY,C.dO_,C.dNQ,C.dNR,C.dNS,C.dO6,C.dO7,C.dO8,C.dO5,C.dOa,C.dO4,C.dOb,C.dO3,C.dOc,C.dO2,C.dOd,C.dO1,C.dOe,C.dO0,C.dPA,C.dPz,C.dPE,C.dPw,C.dPx,C.dPF,C.dPG,C.dPH,C.dPC,C.dPs,C.dPQ,C.dPP,C.dPS,C.dPT,C.dPU,C.dPJ,C.dPV,C.cV5,C.dVU,C.dVT,C.dVV,C.fr7,C.fr8,C.fr9,C.fra,C.frb,C.frc,C.frd,C.fre,C.frf,C.f6J,C.f6I,C.f6q,C.f6p,C.f6l,C.f6k,C.f6m,C.f6j,C.f6y,C.f6x,C.f6z,C.f6r,C.f6D,C.f6u,C.f6F,C.f6t,C.f6G,C.f6s,C.ewq,C.ewf,C.ewp,C.ewb,C.ewr,C.ewt,C.ewc,C.ewd,C.ewO,C.ewN,C.ewE,C.ewF,C.ewG,C.ewA,C.ewB,C.ewz,C.ewC,C.ewy,C.ewD,C.ewx,C.ewv,C.dq5,C.bPt,C.bPv,C.bPg,C.bPi,C.bJi,C.bJj,C.bJh,C.bJk,C.bJm,C.bJ8,C.bJ9,C.bJa,C.bJb,C.bJc,C.bJd,C.bJC,C.bIM,C.bJs,C.bJt,C.bJq,C.bJr,C.bJo,C.bJp,C.bJy,C.bJn,C.bJz,C.bIN,C.bJ6,C.bIT,C.bIU,C.bIS,C.bIV,C.bIR,C.bIY,C.bIZ,C.bJ_,C.bJ0,C.bIQ,C.bJ1,C.bIP,C.bJ2,C.bIO,C.e_H,C.e_S,C.e_T,C.e_F,C.e_E,C.e_D,C.e_M,C.e_K,C.e_L,C.e_N,C.e_I,C.e_J,C.e_V,C.e_W,C.e_X,C.e_Y,C.e_Z,C.dWR,C.dWP,C.dWN,C.dWM,C.dWL,C.dWK,C.dWJ,C.dWF,C.dWE,C.dWH,C.dWG,C.frn,C.fro,C.frp,C.frq,C.frr,C.frs,C.frt,C.fru,C.clP,C.clO,C.eT8,C.eT4,C.eT3,C.eT6,C.eT5,C.e2G,C.e2H,C.e2B,C.e2D,C.e2E,C.e2C,C.e2F,C.dOo,C.dOl,C.dOk,C.dOm,C.dOj,C.e_b,C.e_a,C.e_9,C.e_8,C.e_f,C.e_7,C.e_6,C.e_h,C.e_5,C.e_i,C.e_4,C.e_j,C.e_k,C.e_3,C.eq_,C.eq0,C.epZ,C.eq1,C.epY,C.eq4,C.eq6,C.eq2,C.eq7,C.eAM,C.eAN,C.eAK,C.eAL,C.eAJ,C.eAO,C.eAP,C.eAQ,C.eAR,C.eOH,C.eOJ,C.eOG,C.eOF,C.eOL,C.eOE,C.eoF,C.eoG,C.eoy,C.eox,C.eoz,C.eow,C.eoA,C.eov,C.eoB,C.eou,C.eot,C.eos,C.eor,C.clL])
t(C.bzv,C.aNE)
t(C.aFJ,C.bzv)
u(B.mg,[C.biU,C.bcU,C.bua,C.bby,C.bsM,C.bsc,C.bce,C.bse,C.bwg,C.biS,C.ajA,C.baK,C.bxk,C.afq,C.bxw,C.bsd,C.bnq])
t(C.aMK,C.aMJ)
t(C.aEc,C.aMK)
t(C.bzf,C.aMO)
t(C.aEe,C.bzf)
u(B.lB,[C.L5,C.a1h,C.K4])
u(B.ax,[C.bta,C.afJ,C.aeB,C.QV,C.btG,C.a95,C.bf0])
t(C.aIJ,C.aOt)
t(C.biR,B.p7)
t(C.aFI,C.aNC)
t(C.az4,C.az3)
t(C.ajz,C.az4)
t(C.aEH,C.bzi)
t(C.baL,C.aLa)
t(C.blm,C.aMX)
t(C.bzC,C.aNX)
t(C.aGa,C.bzC)
t(C.bzk,C.aN3)
t(C.blx,C.bzk)
t(C.bze,C.aML)
t(C.bl8,C.bze)
t(C.bzt,C.aNw)
t(C.bm8,C.bzt)
w(C.aNE,B.cd)
w(C.bzv,E.nB)
w(C.aMJ,B.cd)
w(C.aMK,E.nB)
w(C.aMO,B.cd)
w(C.bzf,E.nB)
w(C.aOt,B.eO)
w(C.aNC,B.cd)
w(C.az3,B.cd)
w(C.az4,E.nB)
w(C.aLa,B.cd)
v(C.bzi,B.eA)
w(C.aMX,B.cd)
w(C.aML,B.cd)
w(C.bze,E.nB)
w(C.aN3,B.cd)
w(C.bzk,E.nB)
w(C.aNw,B.cd)
w(C.bzt,E.nB)
w(C.aNX,B.cd)
w(C.bzC,E.nB)})()
B.j0(b.typeUniverse,JSON.parse('{"Ws":{"af":[],"v":[]},"blX":{"ah":["Ws"]},"WP":{"af":[],"v":[]},"aFJ":{"ah":["WP"]},"biU":{"aC":[]},"Vl":{"af":[],"v":[]},"aEc":{"ah":["Vl"]},"Vq":{"af":[],"v":[]},"aEe":{"ah":["Vq"]},"bcU":{"aC":[]},"afJ":{"ax":[],"v":[]},"aeB":{"ax":[],"v":[]},"aII":{"af":[],"v":[]},"O2":{"af":[],"v":[]},"aEv":{"ah":["O2"]},"bta":{"ax":[],"v":[]},"QV":{"ax":[],"v":[]},"bua":{"aC":[]},"btG":{"ax":[],"v":[]},"bby":{"aC":[]},"aIJ":{"ah":["aII"]},"bsM":{"aC":[]},"bsc":{"aC":[]},"bce":{"aC":[]},"bse":{"aC":[]},"bwg":{"aC":[]},"WO":{"af":[],"v":[]},"biR":{"aC":[]},"aFI":{"ah":["WO"]},"biS":{"aC":[]},"ajA":{"aC":[]},"ajy":{"af":[],"v":[]},"ajz":{"ah":["ajy"]},"W1":{"af":[],"v":[]},"ayK":{"af":[],"v":[]},"aEH":{"ah":["W1"],"eA":[]},"baL":{"ah":["ayK"]},"baK":{"aC":[]},"VL":{"af":[],"v":[]},"blm":{"ah":["VL"]},"bxk":{"aC":[]},"afq":{"aC":[]},"a95":{"ax":[],"v":[]},"Xl":{"af":[],"v":[]},"W9":{"af":[],"v":[]},"Vm":{"af":[],"v":[]},"W0":{"af":[],"v":[]},"WJ":{"af":[],"v":[]},"WT":{"af":[],"v":[]},"Xc":{"af":[],"v":[]},"WI":{"af":[],"v":[]},"aGa":{"ah":["Xl"]},"bxw":{"aC":[]},"blx":{"ah":["W9"]},"bsd":{"aC":[]},"bl8":{"ah":["Vm"]},"blo":{"ah":["W0"]},"bnq":{"aC":[]},"aFu":{"ah":["WJ"]},"aFP":{"ah":["WT"]},"bmE":{"ah":["Xc"]},"bm8":{"ah":["WI"]},"bf0":{"ax":[],"v":[]}}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.as
return{c:w("lJ<u?>"),G:w("u"),J:w("bv<m,H>"),Q:w("df<m>"),Z:w("a0"),M:w("O<d9>"),R:w("O<SH>"),a:w("O<a44>"),V:w("O<ac>"),O:w("O<u>"),k:w("O<V>"),D:w("O<aB<aF>>"),w:w("O<a0>"),E:w("O<ai<m>>"),b:w("O<ai<H>>"),U:w("O<ai<F?>>"),x:w("O<a8<m,aF>>"),g:w("O<q>"),C:w("O<tT>"),v:w("O<fT>"),F:w("O<+(m,m)>"),fT:w("O<+(H,v)>"),I:w("O<+(F,m)>"),u:w("O<+(F,F)>"),r:w("O<+(m,m,a0)>"),e:w("O<+(m,H,H,F)>"),o:w("O<+(m,F,m,F)>"),d:w("O<+(m,m,H,H,a8<m,H>)>"),_:w("O<vf>"),fQ:w("O<ab7>"),s:w("O<m>"),cF:w("O<au>"),X:w("O<G5>"),p:w("O<v>"),bL:w("O<ace>"),fH:w("O<lh>"),a_:w("O<acs>"),cB:w("O<nD>"),ba:w("O<acJ>"),eW:w("O<CX>"),fY:w("O<a_f>"),ac:w("O<aeE>"),cd:w("O<D7>"),fr:w("O<afx>"),e4:w("O<a1u>"),au:w("O<aJA>"),f7:w("O<P>"),n:w("O<H>"),t:w("O<F>"),dS:w("O<aC?>"),fs:w("O<tT?>"),bN:w("O<F?>"),q:w("cw<ajz>"),A:w("cw<ah<af>>"),bF:w("ai<u>"),gl:w("ai<V>"),ew:w("ai<aF>"),j:w("ai<@>"),P:w("a8<m,@>"),f:w("a8<@,@>"),bd:w("N<eh,m>"),fR:w("N<+(H,v),v>"),l:w("iA"),gA:w("zK"),gD:w("wg"),h:w("ct"),K:w("aF"),W:w("tT"),B:w("eh"),N:w("m"),bO:w("au"),Y:w("bp<H>"),gj:w("bP<m>"),bz:w("bP<F?>"),dg:w("e9<r6>"),m:w("bbQ"),a2:w("CT"),f3:w("r6"),es:w("Gw"),gV:w("mu"),y:w("P"),i:w("H"),z:w("@"),S:w("F"),L:w("ai<@>?"),cK:w("aF?"),T:w("m?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b1H=new B.d9(0,0.1)
D.b3C=new C.aTJ(0,0,0)
D.LF=new C.aTJ(0,0.5,0)
D.b4c=new B.ay(A.b9,1,A.r,-1)
D.b5F=new B.aZ(0,1/0,0,290)
D.b5M=new B.aZ(16,1/0,16,1/0)
D.b6Z=new B.o(A.bg,null,null,null,null,null,A.a7)
D.fnb=new B.G(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_q=new B.B("\u26a1",null,D.fnb,null,null,null,null,null,null,null,null,null)
D.bbx=new B.cc(A.A,null,null,D.h_q,null)
D.aVk=new B.G(!0,A.bV,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPU=new B.B("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aVk,null,A.K,null,null,null,null,null,null,null)
D.epE=new B.D(A.nC,D.fPU,null)
D.bbH=new B.cc(A.A,null,null,D.epE,null)
D.fFK=new B.B("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aVk,null,A.K,null,null,null,null,null,null,null)
D.eqw=new B.D(A.GR,D.fFK,null)
D.bcr=new B.cc(A.A,null,null,D.eqw,null)
D.afb=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.bgb=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.bgs=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bhK=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.bhQ=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.bic=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.bk4=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.bl5=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.blO=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.ahp=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.bmO=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.ahO=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.Z2=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.boz=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.boQ=new B.u(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.q)
D.ail=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.bqy=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.bqG=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.br8=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.w4=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.btd=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.ajP=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.byV=new B.bd(11e6)
D.bAI=new B.Q(10,34,10,26)
D.bAQ=new B.Q(10,6,10,2)
D.bAS=new B.Q(10,8,0,10)
D.bBv=new B.Q(12,8,8,8)
D.bBB=new B.Q(14,0,14,22)
D.bBD=new B.Q(14,0,14,30)
D.bCF=new B.Q(16,4,16,28)
D.bEX=new B.Q(26,12,26,58)
D.bFN=new B.Q(4,4,8,2)
D.bGq=new B.Q(8,14,8,12)
D.bGx=new B.Q(8,40,8,30)
D.bGC=new B.Q(8,6,16,0)
D.bGD=new B.Q(8,6,8,8)
D.bGZ=new B.Q(0,0,1.5,0)
D.b3o=new B.HL(26,"saturation")
D.bHh=new B.uH(A.d_,D.b3o,null,A.XW)
D.bHi=new B.hl(A.G,11)
D.bHm=new B.hl(A.G,30)
D.fEQ=new B.B("REACTION LAB",null,T.aVV,null,null,null,null,A.a2,null,1,null,null)
D.bHv=new B.by(1,A.bc,D.fEQ,null)
D.fvn=new B.G(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fI5=new B.B("CORE PROTOCOL",null,D.fvn,null,null,null,null,null,null,null,null,null)
D.bHJ=new B.by(1,A.bc,D.fI5,null)
D.fIT=new B.B("\ud83d\udce2 NGMY Ads",null,A.r6,null,null,null,null,A.eO,null,1,null,null)
D.bIt=new B.by(1,A.bc,D.fIT,null)
D.fDw=new B.B("Wire selected",null,A.fW,null,null,null,null,null,null,null,null,null)
D.bIH=new B.by(1,A.bc,D.fDw,null)
D.aoK=new B.a0(62712,"MaterialIcons",!1)
D.bON=new B.a0(62908,"MaterialIcons",!1)
D.bQu=new B.a0(983122,"MaterialIcons",!1)
D.bQH=new B.a0(983247,"MaterialIcons",!1)
D.bRd=new B.a0(983616,"MaterialIcons",!1)
D.bT2=new B.ae(A.Pw,null,A.ad,null,null,null)
D.bQt=new B.a0(983117,"MaterialIcons",!1)
D.bUW=new B.ae(D.bQt,28,A.c,null,null,null)
D.bVb=new B.ae(A.j2,18,null,null,null,null)
D.bX3=new B.ae(A.ef,21,A.c0,null,null,null)
D.bXi=new B.ae(A.ow,null,A.ad,null,null,null)
D.bXs=new B.ae(A.a33,21,A.ad,null,null,null)
D.bYj=new B.ae(A.eM,17,A.ad,null,null,null)
D.bZU=new B.ae(A.OZ,null,A.ad,null,null,null)
D.c02=new B.ae(A.j2,21,A.ad,null,null,null)
D.c1A=new B.ae(A.e8,null,A.aU,null,null,null)
D.drM=w([A.d9,A.d5,A.d9],x.O)
D.c4Z=new B.a9(A.a6,A.a9,A.x,D.drM,null,null)
D.d3v=w([A.bP,A.bo],x.O)
D.c56=new B.a9(A.b1,A.b7,A.x,D.d3v,null,null)
D.c5j=new B.a9(A.b1,A.b7,A.x,A.a5H,null,null)
D.asq=new B.a9(A.b1,A.b7,A.x,O.a4V,null,null)
D.d15=w([A.p4,A.iz],x.O)
D.c65=new B.a9(A.b1,A.b7,A.x,D.d15,null,null)
D.d3d=w([A.ed,A.av],x.O)
D.asx=new B.a9(A.b1,A.b7,A.x,D.d3d,null,null)
D.dlu=w([A.dj,A.jj,A.bo],x.O)
D.c6o=new B.a9(A.a6,A.a9,A.x,D.dlu,null,null)
D.dlA=w([A.hp,A.cs],x.O)
D.c6J=new B.a9(A.b1,A.b7,A.x,D.dlA,null,null)
D.cAe=w([A.bP,A.dj],x.O)
D.c6S=new B.a9(A.a6,A.a9,A.x,D.cAe,null,null)
D.aCy=w([A.ed,M.nq],x.O)
D.c6Z=new B.a9(A.b1,A.b7,A.x,D.aCy,null,null)
D.c7f=new B.a9(A.b1,A.b7,A.x,R.asT,null,null)
D.c84=new B.a9(A.aA,A.aF,A.x,A.RD,null,null)
D.dd0=w([A.av,A.w],x.O)
D.c8f=new B.a9(A.b1,A.b7,A.x,D.dd0,null,null)
D.c8i=new B.a9(A.b1,A.b7,A.x,H.aBR,null,null)
D.br3=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.brW=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cN7=w([A.N8,D.br3,D.brW],x.O)
D.c8s=new B.a9(A.b1,A.b7,A.x,D.cN7,null,null)
D.cAy=w([A.d2,A.fZ],x.O)
D.c8I=new B.a9(A.b1,A.b7,A.x,D.cAy,null,null)
D.c9s=w([0,4,7],x.t)
D.c9t=w([0,4,7,12],x.t)
D.c9u=w([0,4,7,4],x.t)
D.aBw=w([A.hk,A.qg],x.O)
D.aB1=w([A.hm,A.cS],x.O)
D.azj=w([A.bt,A.dJ],x.O)
D.cVN=w([A.aU,A.d2],x.O)
D.dmQ=w([A.c1,A.l9],x.O)
D.ayK=w([A.cJ,A.kq],x.O)
D.d_V=w([A.bM,A.aL],x.O)
D.c9Q=w([D.aBw,D.aB1,A.a5_,D.azj,D.cVN,A.azA,A.aAu,D.dmQ,D.ayK,D.d_V],B.as("O<ai<u>>"))
D.cew=w([120,220,380],x.t)
D.cig=w([12,16,19,24],x.t)
D.ciq=w([1400,800,450,2400],x.t)
D.cqR=w([250,450,900,1500],x.t)
D.bfx=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.brt=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.bph=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.bv4=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.boo=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.ay0=w([D.bfx,D.brt,D.bph,D.bv4,D.boo],x.O)
D.cI1=w([50,25,75],x.t)
D.cNF=w([0,5,10,15,18,20,25],x.t)
D.cW5=w([900,500,250,1600],x.t)
D.d_c=w([A.bt,A.bF,A.ba,A.bt],x.O)
D.a4Q=w([A.ax,A.bs,A.bg,A.aJ,A.od],x.O)
D.d0J=w([A.av,A.ax,A.cJ,A.bs,A.bg,A.cy,A.ch,A.bF,A.Yc],x.O)
D.a4T=w([0.04,0.17,0.3],x.n)
D.f6C=new C.vf("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.f6I=new C.vf("Medium engine","A good all-rounder.",0.3,0.9)
D.f6H=new C.vf("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.In=w([D.f6C,D.f6I,D.f6H],x._)
D.eDf=new B.y(6,"Easy")
D.eE0=new B.y(8,"Medium")
D.eyZ=new B.y(10,"Hard")
D.d2g=w([D.eDf,D.eE0,D.eyZ],x.I)
D.azK=w([0.55,0.78,1],x.n)
D.azV=w([A.c,A.fY,A.o4,A.av],x.O)
D.aA2=w([A.bg,A.ax,A.bs,A.d5],x.O)
D.f6z=new C.vf("Radar","Shows your height above the ground.",0.1,0)
D.f6A=new C.vf("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.f6x=new C.vf("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aA9=w([D.f6z,D.f6A,D.f6x],x._)
D.d8r=w([47,100,220,470,1000],x.n)
D.Jn={volts:0}
D.a6I=new B.bv(D.Jn,[3],x.J)
D.JO=new B.dW(["b","battery",0.2,0.3,D.a6I])
D.ejp={on:0}
D.dCz=new B.bv(D.ejp,[1],x.J)
D.El=new B.dW(["s","switch",0.5,0.3,D.dCz])
D.f4g=new B.dW(["l","bulb",0.8,0.3,A.jp])
D.d3E=w([D.JO,D.El,D.f4g],x.d)
D.Ej=new B.cu(["b",0,"s",0])
D.f3g=new B.cu(["s",1,"l",0])
D.aQY=new B.cu(["l",1,"b",1])
D.dlG=w([D.Ej,D.f3g,D.aQY],x.o)
D.d33=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.ey9=new C.mS("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.d3E,D.dlG,D.d33)
D.aKN={ohms:0}
D.aIt=new B.bv(D.aKN,[220],x.J)
D.f3J=new B.dW(["r","resistor",0.5,0.3,D.aIt])
D.f4v=new B.dW(["d","led",0.8,0.3,A.jp])
D.doW=w([D.JO,D.f3J,D.f4v],x.d)
D.f2B=new B.cu(["b",0,"r",0])
D.f3a=new B.cu(["r",1,"d",0])
D.f2H=new B.cu(["d",1,"b",1])
D.dye=w([D.f2B,D.f3a,D.f2H],x.o)
D.dpp=w(["led","diode","indicator"],x.s)
D.eyg=new C.mS("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.doW,D.dye,D.dpp)
D.a8_={level:0}
D.dBV=new B.bv(D.a8_,[0.2],x.J)
D.f3P=new B.dW(["p","pot",0.5,0.3,D.dBV])
D.f3R=new B.dW(["m","motor",0.8,0.3,A.jp])
D.d3Y=w([D.JO,D.f3P,D.f3R],x.d)
D.f2A=new B.cu(["b",0,"p",0])
D.f36=new B.cu(["p",1,"m",0])
D.f32=new B.cu(["m",1,"b",1])
D.dtO=w([D.f2A,D.f36,D.f32],x.o)
D.dln=w(["fan","motor","spin","dimmer"],x.s)
D.ey7=new C.mS("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.d3Y,D.dtO,D.dln)
D.a6F=new B.bv(D.a8_,[0.9],x.J)
D.aR6=new B.dW(["s","solar",0.25,0.3,D.a6F])
D.aR5=new B.dW(["l","bulb",0.75,0.3,A.jp])
D.d6M=w([D.aR6,D.aR5],x.d)
D.f3d=new B.cu(["s",0,"l",0])
D.f30=new B.cu(["l",1,"s",1])
D.d4M=w([D.f3d,D.f30],x.o)
D.duv=w(["solar","sun","without battery","no battery","free"],x.s)
D.eya=new C.mS("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.d6M,D.d4M,D.duv)
D.f4y=new B.dW(["c","crank",0.25,0.3,D.a6F])
D.djC=w([D.f4y,D.aR5],x.d)
D.f2E=new B.cu(["c",0,"l",0])
D.f3_=new B.cu(["l",1,"c",1])
D.dkc=w([D.f2E,D.f3_],x.o)
D.djM=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.ey6=new C.mS("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.djC,D.dkc,D.djM)
D.dBU=new B.bv(D.a8_,[0.7],x.J)
D.f3U=new B.dW(["t","turbine",0.25,0.3,D.dBU])
D.f3H=new B.dW(["m","motor",0.75,0.3,A.jp])
D.ddH=w([D.f3U,D.f3H],x.d)
D.f3o=new B.cu(["t",0,"m",0])
D.f33=new B.cu(["m",1,"t",1])
D.dcE=w([D.f3o,D.f33],x.o)
D.dik=w(["wind","turbine","windmill","water","hydro"],x.s)
D.ey3=new C.mS("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.ddH,D.dcE,D.dik)
D.aIq=new B.bv(D.Jn,[9],x.J)
D.a96=new B.dW(["b","battery",0.2,0.3,D.aIq])
D.aR3=new B.dW(["r","radio",0.8,0.3,A.jp])
D.dv4=w([D.a96,D.El,D.aR3],x.d)
D.f3i=new B.cu(["s",1,"r",0])
D.aR_=new B.cu(["r",1,"b",1])
D.c99=w([D.Ej,D.f3i,D.aR_],x.o)
D.dtA=w(["radio","music","listen"],x.s)
D.eyf=new C.mS("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dv4,D.c99,D.dtA)
D.dCZ=new B.bv(D.Jn,[12],x.J)
D.aR2=new B.dW(["b","battery",0.2,0.3,D.dCZ])
D.f4h=new B.dW(["t","tv",0.8,0.3,A.jp])
D.d3G=w([D.aR2,D.El,D.f4h],x.d)
D.f3j=new B.cu(["s",1,"t",0])
D.aR0=new B.cu(["t",1,"b",1])
D.dmT=w([D.Ej,D.f3j,D.aR0],x.o)
D.dv2=w(["tv","television","screen","watch"],x.s)
D.ey0=new C.mS("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.d3G,D.dmT,D.dv2)
D.f47=new B.dW(["z","buzzer",0.8,0.3,A.jp])
D.cKo=w([D.JO,D.El,D.f47],x.d)
D.f3k=new B.cu(["s",1,"z",0])
D.f3C=new B.cu(["z",1,"b",1])
D.cZp=w([D.Ej,D.f3k,D.f3C],x.o)
D.drS=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.eyc=new C.mS("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cKo,D.cZp,D.drS)
D.f3Q=new B.dW(["h","heater",0.8,0.3,A.jp])
D.dh_=w([D.a96,D.El,D.f3Q],x.d)
D.f3f=new B.cu(["s",1,"h",0])
D.f2P=new B.cu(["h",1,"b",1])
D.d_7=w([D.Ej,D.f3f,D.f2P],x.o)
D.cu9=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.ey1=new C.mS("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.dh_,D.d_7,D.cu9)
D.f4j=new B.dW(["s","solar",0.2,0.25,D.a6F])
D.dD1=new B.bv(D.aKN,[100],x.J)
D.f4m=new B.dW(["r","resistor",0.55,0.25,D.dD1])
D.f4t=new B.dW(["c","capacitor",0.85,0.25,A.jp])
D.f3M=new B.dW(["q","resistor",0.55,0.6,D.aIt])
D.f4k=new B.dW(["d","led",0.85,0.6,A.jp])
D.dmp=w([D.f4j,D.f4m,D.f4t,D.f3M,D.f4k],x.d)
D.f3e=new B.cu(["s",0,"r",0])
D.f39=new B.cu(["r",1,"c",0])
D.f2G=new B.cu(["c",1,"s",1])
D.f2F=new B.cu(["c",0,"q",0])
D.f38=new B.cu(["q",1,"d",0])
D.f2I=new B.cu(["d",1,"c",1])
D.daw=w([D.f3e,D.f39,D.f2G,D.f2F,D.f38,D.f2I],x.o)
D.diU=w(["capacitor","store","charge","flash"],x.s)
D.eye=new C.mS("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.dmp,D.daw,D.diU)
D.f3X=new B.dW(["b","battery",0.15,0.3,D.a6I])
D.f4z=new B.dW(["l1","bulb",0.5,0.3,A.jp])
D.f44=new B.dW(["l2","bulb",0.85,0.3,A.jp])
D.d1H=w([D.f3X,D.f4z,D.f44],x.d)
D.f2z=new B.cu(["b",0,"l1",0])
D.f2X=new B.cu(["l1",1,"l2",0])
D.f2Y=new B.cu(["l2",1,"b",1])
D.des=w([D.f2z,D.f2X,D.f2Y],x.o)
D.duO=w(["series","two bulbs","dim"],x.s)
D.ey4=new C.mS("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.d1H,D.des,D.duO)
D.ejK={volts:0,charge:1}
D.dD4=new B.bv(D.ejK,[1.5,0],x.J)
D.f4r=new B.dW(["b","battery",0.75,0.3,D.dD4])
D.d16=w([D.aR6,D.f4r],x.d)
D.f3c=new B.cu(["s",0,"b",0])
D.f2D=new B.cu(["b",1,"s",1])
D.daP=w([D.f3c,D.f2D],x.o)
D.dj3=w(["charge","rechargeable","flat","recharge"],x.s)
D.ey2=new C.mS("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.d16,D.daP,D.dj3)
D.dCY=new B.bv(D.Jn,[4.5],x.J)
D.f3S=new B.dW(["b","battery",0.2,0.3,D.dCY])
D.aR1=new B.dW(["p","phone",0.8,0.3,A.jp])
D.ddw=w([D.f3S,D.El,D.aR1],x.d)
D.f3h=new B.cu(["s",1,"p",0])
D.a95=new B.cu(["p",1,"b",1])
D.dqN=w([D.Ej,D.f3h,D.a95],x.o)
D.dsh=w(["phone","charger","usb","mobile"],x.s)
D.ey8=new C.mS("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.ddw,D.dqN,D.dsh)
D.f3E=new B.dW(["f","fan",0.8,0.3,A.jp])
D.cmf=w([D.JO,D.f3E],x.d)
D.f2y=new B.cu(["b",0,"f",0])
D.f2N=new B.cu(["f",1,"b",1])
D.d_H=w([D.f2y,D.f2N],x.o)
D.dlm=w(["fan","cool","air","wind"],x.s)
D.eyh=new C.mS("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.cmf,D.d_H,D.dlm)
D.f4b=new B.dW(["b","battery",0.15,0.2,D.a6I])
D.f3F=new B.dW(["a","ammeter",0.5,0.2,A.jp])
D.f3D=new B.dW(["l","bulb",0.85,0.2,A.jp])
D.f4d=new B.dW(["v","voltmeter",0.5,0.6,A.jp])
D.djp=w([D.f4b,D.f3F,D.f3D,D.f4d],x.d)
D.f2w=new B.cu(["b",0,"a",0])
D.f2v=new B.cu(["a",1,"l",0])
D.f3q=new B.cu(["v",0,"l",0])
D.f3r=new B.cu(["v",1,"l",1])
D.daG=w([D.f2w,D.f2v,D.aQY,D.f3q,D.f3r],x.o)
D.dyd=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.eyd=new C.mS("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.djp,D.daG,D.dyd)
D.f4C=new B.dW(["b","battery",0.15,0.2,D.aIq])
D.f3W=new B.dW(["t","tv",0.55,0.2,A.jp])
D.aIr=new B.bv(D.Jn,[5],x.J)
D.f3K=new B.dW(["c","buck",0.4,0.5,D.aIr])
D.f3Y=new B.dW(["p","phone",0.8,0.5,A.jp])
D.d8d=w([D.f4C,D.f3W,D.f3K,D.f3Y],x.d)
D.f2C=new B.cu(["b",0,"t",0])
D.aQW=new B.cu(["b",0,"c",0])
D.aQX=new B.cu(["c",1,"p",0])
D.ddt=w([D.f2C,D.aR0,D.aQW,D.aQX,D.a95],x.o)
D.d6k=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.ey5=new C.mS("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.d8d,D.ddt,D.d6k)
D.f3L=new B.dW(["c","buck",0.5,0.3,D.aIr])
D.cZX=w([D.aR2,D.f3L,D.aR1],x.d)
D.d47=w([D.aQW,D.aQX,D.a95],x.o)
D.cxD=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.ey_=new C.mS("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cZX,D.d47,D.cxD)
D.f42=new B.dW(["d","diode",0.5,0.3,A.jp])
D.deG=w([D.a96,D.f42,D.aR3],x.d)
D.f2x=new B.cu(["b",0,"d",0])
D.f2J=new B.cu(["d",1,"r",0])
D.cMW=w([D.f2x,D.f2J,D.aR_],x.o)
D.d5Z=w(["diode","protect","backwards","one way"],x.s)
D.eyb=new C.mS("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.deG,D.cMW,D.d5Z)
D.RQ=w([D.ey9,D.eyg,D.ey7,D.eya,D.ey6,D.ey3,D.eyf,D.ey0,D.eyc,D.ey1,D.eye,D.ey4,D.ey2,D.ey8,D.eyh,D.eyd,D.ey5,D.ey_,D.eyb],B.as("O<mS>"))
D.hB8=new C.GL("Moon",1.62,A.dj,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hB6=new C.GL("Mars",3.71,A.ax,"Mars has about 38 percent of Earth's gravity.")
D.hB9=new C.GL("Mercury",3.7,A.kp,"Mercury is small, so its gravity is like Mars.")
D.hB3=new C.GL("Venus",8.87,A.aU,"Venus is almost as heavy as Earth, with strong gravity.")
D.hB5=new C.GL("Earth",9.81,A.aJ,"On Earth gravity is strong, and the air also slows you down.")
D.hB7=new C.GL("Neptune",11.15,A.d5,"Neptune pulls a little harder than Earth.")
D.hB4=new C.GL("Jupiter",24.79,A.cJ,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.t2=w([D.hB8,D.hB6,D.hB9,D.hB3,D.hB5,D.hB7,D.hB4],B.as("O<GL>"))
D.dau=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.dbd=w([0.2,0.5,0.8],x.n)
D.b0w=new C.L5(0,"accordion")
D.d02=w([A.jH,A.CU,A.CA],x.w)
D.d7D=w(["Mail","SMS","Ad"],x.s)
D.d0B=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hzm=new C.B0(D.b0w,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aBw,D.d02,D.d7D,D.d0B)
D.acS=new C.L5(1,"flip")
D.diO=w([A.qH,Z.HP,A.uQ],x.w)
D.ddd=w(["Unlock","Verify","Secure"],x.s)
D.cZT=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hzl=new C.B0(D.acS,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.aB1,D.diO,D.ddd,D.cZT)
D.b0x=new C.L5(2,"towers")
D.dbY=w([A.zf,A.qK,A.ib],x.w)
D.dbw=w(["Save","Grow","Earn"],x.s)
D.cNQ=w(["","",""],x.s)
D.hzn=new C.B0(D.b0x,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a5_,D.dbY,D.dbw,D.cNQ)
D.acT=new C.L5(3,"assemble")
D.djP=w([A.oA,A.hr,A.e8],x.w)
D.d6Y=w(["Launch","Charge","Shine"],x.s)
D.dg3=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hzp=new C.B0(D.acT,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.azj,D.djP,D.d6Y,D.dg3)
D.b0y=new C.L5(4,"carousel")
D.djD=w([A.ba,A.eR],x.O)
D.d7M=w([A.mW,A.apc,A.PD],x.w)
D.d26=w(["Explore","Discover","Learn"],x.s)
D.ddC=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hzk=new C.B0(D.b0y,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.djD,D.d7M,D.d26,D.ddC)
D.b0z=new C.L5(5,"burst")
D.dbr=w([A.i3,A.u0],x.O)
D.d0w=w([A.ku,A.mT,A.hG],x.w)
D.d0R=w(["Cheer","Win","Love"],x.s)
D.d3b=w(["Make some noise","First place","Share the joy"],x.s)
D.hzo=new C.B0(D.b0z,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.dbr,D.d0w,D.d0R,D.d3b)
D.aAH=w([D.hzm,D.hzl,D.hzn,D.hzp,D.hzk,D.hzo],B.as("O<B0>"))
D.f_E=new B.b5("skin","Skin",A.apd)
D.f1i=new B.b5("muscle","Muscles",A.Pc)
D.f0W=new B.b5("organ","Organs",A.hG)
D.bOv=new B.a0(62747,"MaterialIcons",!1)
D.f13=new B.b5("bone","Skeleton",D.bOv)
D.f1q=new B.b5("vessel","Blood vessels",A.pu)
D.dc3=w([D.f_E,D.f1i,D.f0W,D.f13,D.f1q],x.r)
D.f6B=new C.vf("Simple legs","Light. Land gently.",0.15,0.2)
D.f6D=new C.vf("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.f6G=new C.vf("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.Dm=w([D.f6B,D.f6D,D.f6G],x._)
D.f2d=new B.cu(["beat",0.18,0.28,0])
D.f3l=new B.cu(["burst",0.7,0.2,0])
D.f3w=new B.cu(["delay",0.45,0.5,1])
D.f35=new B.cu(["ripple",0.75,0.6,3])
D.d6H=w([D.f2d,D.f3l,D.f3w,D.f35],x.e)
D.di7=w([P.lt,O.JN,F.Un],x.u)
D.hyi=new C.Gw("First spark","A clock lights a burst and a ripple",D.d6H,D.di7)
D.f2M=new B.cu(["beat",0.15,0.3,1])
D.f1S=new B.cu(["ripple",0.62,0.15,0])
D.f3s=new B.cu(["delay",0.4,0.45,0])
D.f2s=new B.cu(["ripple",0.7,0.45,0])
D.f29=new B.cu(["delay",0.4,0.7,1])
D.f37=new B.cu(["shake",0.75,0.75,0])
D.dvY=w([D.f2M,D.f1S,D.f3s,D.f2s,D.f29,D.f37],x.e)
D.eA5=new B.y(2,4)
D.aQD=new B.y(4,5)
D.dak=w([P.lt,O.JN,F.Un,D.eA5,D.aQD],x.u)
D.hyk=new C.Gw("Heartbeat","Two thumps, then a shake",D.dvY,D.dak)
D.f2i=new B.cu(["dice",0.15,0.7,1])
D.f3y=new B.cu(["echo",0.4,0.7,0])
D.f2q=new B.cu(["comet",0.7,0.5,4])
D.f3m=new B.cu(["burst",0.72,0.2,1])
D.f2K=new B.cu(["burst",0.3,0.25,0])
D.f2j=new B.cu(["pop",0.55,0.85,0])
D.ctH=w([D.f2i,D.f3y,D.f2q,D.f3m,D.f2K,D.f2j],x.e)
D.ezq=new B.y(1,3)
D.ezr=new B.y(1,4)
D.aQz=new B.y(0,5)
D.djy=w([P.lt,S.vp,D.ezq,D.ezr,D.aQz],x.u)
D.hyj=new C.Gw("Fireworks","Dice launch comets that burst in colour",D.ctH,D.djy)
D.f2n=new B.cu(["beat",0.15,0.2,2])
D.f2U=new B.cu(["chance",0.4,0.2,0])
D.f2f=new B.cu(["ball",0.7,0.12,3])
D.f22=new B.cu(["chance",0.4,0.5,1])
D.f3x=new B.cu(["ball",0.3,0.08,1])
D.f1W=new B.cu(["ripple",0.7,0.55,3])
D.cmI=w([D.f2n,D.f2U,D.f2f,D.f22,D.f3x,D.f1W],x.e)
D.eA6=new B.y(2,5)
D.cK6=w([P.lt,S.vp,O.a8Y,F.Uo,D.eA6],x.u)
D.hyh=new C.Gw("Rain","Balls fall at random and splash",D.cmI,D.cK6)
D.f2V=new B.cu(["beat",0.12,0.45,2])
D.f3n=new B.cu(["toggle",0.38,0.2,0])
D.f3u=new B.cu(["wash",0.7,0.15,4])
D.f2h=new B.cu(["count3",0.38,0.45,0])
D.f3p=new B.cu(["burst",0.72,0.4,0])
D.f2L=new B.cu(["light",0.55,0.7,1])
D.f23=new B.cu(["pop",0.8,0.8,4])
D.dmn=w([D.f2V,D.f3n,D.f3u,D.f2h,D.f3p,D.f2L,D.f23],x.e)
D.eAD=new B.y(3,6)
D.cpR=w([P.lt,S.vp,O.a8Y,F.Uo,D.aQz,D.eAD],x.u)
D.hyf=new C.Gw("Disco","A beat drives lights, washes and bursts",D.dmn,D.cpR)
D.f3B=new B.cu(["button",0.12,0.2,0])
D.f1Y=new B.cu(["delay",0.34,0.2,1])
D.f3A=new B.cu(["light",0.56,0.2,1])
D.f3t=new B.cu(["delay",0.56,0.45,1])
D.f2W=new B.cu(["ball",0.34,0.6,0])
D.f21=new B.cu(["delay",0.34,0.8,1])
D.f1R=new B.cu(["burst",0.7,0.8,5])
D.c9T=w([D.f3B,D.f1Y,D.f3A,D.f3t,D.f2W,D.f21,D.f1R],x.e)
D.eCP=new B.y(5,6)
D.ds0=w([P.lt,S.vp,F.Un,F.Uo,D.aQD,D.eCP],x.u)
D.hyg=new C.Gw("Domino","Tap the button and watch it run down the line",D.c9T,D.ds0)
D.aB5=w([D.hyi,D.hyk,D.hyj,D.hyh,D.hyf,D.hyg],B.as("O<Gw>"))
D.dho=w([0.05,0.15,0.25],x.n)
D.dij=w([1.5,3,4.5,9,12],x.n)
D.eYY=new B.b5("dice","Dice",A.os)
D.f_c=new B.b5("coin","Coin",Q.za)
D.f1l=new B.b5("num","Number",A.zj)
D.dix=w([D.eYY,D.f_c,D.f1l],x.r)
D.diB=w(["skin","muscle","organ","bone","vessel"],x.s)
D.aBb=w([A.c0,A.aU,A.b9,A.aJ,A.bt,A.c1,A.cJ,A.hm],x.O)
D.djE=w([A.c1,A.aJ,A.dE,A.b9],x.O)
D.dkF=w([],x.a)
D.erj=new C.eh("battery","Battery","\ud83d\udd0b",A.b9,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.erp=new C.eh("solar","Solar panel","\u2600\ufe0f",A.bs,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.es3=new C.eh("crank","Hand crank","\ud83d\udd04",A.cJ,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.erG=new C.eh("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aJ,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.erb=new C.eh("buck","Step-down converter","\ud83d\udd3d",A.hm,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.erE=new C.eh("regulator","5 V regulator","\ud83e\uddca",A.bM,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.es8=new C.eh("diode","Diode","\u27a1\ufe0f",A.aU,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.erQ=new C.eh("ldr","Light sensor","\ud83c\udf1e",A.dE,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.eru=new C.eh("switch","Switch","\ud83c\udf9a\ufe0f",A.bt,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.es5=new C.eh("fuse","Fuse","\ud83e\uddef",A.c0,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.er3=new C.eh("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hm,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.erR=new C.eh("resistor","Resistor","\u3030\ufe0f",A.aU,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.erT=new C.eh("bulb","Light bulb","\ud83d\udca1",A.dE,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.err=new C.eh("led","LED","\ud83d\udd34",A.ax,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.erv=new C.eh("motor","Motor","\u2699\ufe0f",A.bM,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.erN=new C.eh("buzzer","Buzzer","\ud83d\udd14",A.c1,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.erk=new C.eh("heater","Heater","\ud83d\udd25",A.cJ,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.erI=new C.eh("capacitor","Capacitor","\ud83e\udeab",A.cq,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.erA=new C.eh("radio","Radio","\ud83d\udcfb",A.od,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.erx=new C.eh("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.ba,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.era=new C.eh("voltmeter","Voltmeter","\ud83e\udded",A.bw,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.erh=new C.eh("ammeter","Ammeter","\ud83d\udcdf",A.aU,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.ern=new C.eh("fan","Fan","\ud83c\udf00",A.aJ,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.esa=new C.eh("speaker","Speaker","\ud83d\udd0a",A.c1,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.es_=new C.eh("clock","Digital clock","\u23f0",A.b9,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.erD=new C.eh("calculator","Calculator","\ud83e\uddee",A.M7,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.erg=new C.eh("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cq,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.es9=new C.eh("router","WiFi router","\ud83d\udcf6",A.hm,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.esc=new C.eh("siren","Siren","\ud83d\udea8",A.ax,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.er6=new C.eh("toycar","Toy car","\ud83d\ude97",A.cJ,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.esd=new C.eh("kettle","Kettle","\ud83e\uded6",A.mG,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.ere=new C.eh("lamp","Desk lamp","\ud83e\ude94",A.dE,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.erq=new C.eh("lights","Party lights","\ud83c\udf84",A.od,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.erB=new C.eh("fridge","Fridge","\ud83e\uddca",A.ho,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.er8=new C.eh("washer","Washing machine","\ud83e\udee7",A.cq,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.es0=new C.eh("blender","Blender","\ud83e\udd64",A.c0,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.ery=new C.eh("drone","Drone","\ud83d\ude81",A.bM,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.erd=new C.eh("drill","Power drill","\ud83d\udd29",A.aU,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.erC=new C.eh("torch","Torch","\ud83d\udd26",A.bN,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.erY=new C.eh("neon","Neon sign","\ud83e\udea7",A.c1,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.er9=new C.eh("microwave","Microwave","\ud83c\udf72",A.cJ,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.erS=new C.eh("doorbell","Doorbell","\ud83d\udd14",A.bs,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.erm=new C.eh("camera","Security camera","\ud83d\udcf7",A.am,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.erM=new C.eh("console","Game console","\ud83c\udfae",A.bt,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.es2=new C.eh("heartmon","Heart monitor","\ud83e\ude7a",A.hi,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.er7=new C.eh("aquarium","Aquarium","\ud83d\udc20",A.ba,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.erH=new C.eh("lighthouse","Lighthouse","\ud83d\uddfc",A.dE,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.erP=new C.eh("discoball","Disco ball","\ud83e\udea9",A.od,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.es7=new C.eh("robot","Robot","\ud83e\udd16",A.aJ,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.er5=new C.eh("toaster","Toaster","\ud83c\udf5e",A.e0,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.esb=new C.eh("ledstrip","LED strip","\ud83c\udf08",A.c1,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.erX=new C.eh("pump","Water pump","\ud83d\udeb0",A.aJ,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.erJ=new C.eh("hairdryer","Hair dryer","\ud83d\udca8",A.i3,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.erV=new C.eh("headphones","Headphones","\ud83c\udfa7",A.bt,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.erf=new C.eh("smartwatch","Apple Watch Ultra","\u231a",A.bw,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.es6=new C.eh("tablet","iPad Pro M5","\ud83d\udcf2",A.cq,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.er2=new C.eh("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hi,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.erz=new C.eh("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bv,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.ers=new C.eh("appletv","Apple TV 4K","\ud83d\udcfa",A.bP,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.erO=new C.eh("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.tX,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.er4=new C.eh("iphonefold","iPhone Fold","\ud83d\udcf1",A.b8,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.eri=new C.eh("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d5,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.es4=new C.eh("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cy,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.erK=new C.eh("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bg,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.erF=new C.eh("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.cf,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.erW=new C.eh("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.ax,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.ert=new C.eh("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.b9,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.erL=new C.eh("honor","Honor Magic V5","\ud83d\udcf1",A.cq,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.erU=new C.eh("vivo","vivo X300 Pro","\ud83d\udcf1",A.cJ,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.erZ=new C.eh("ereader","Kindle Scribe","\ud83d\udcd6",A.bv,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.er1=new C.eh("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.ch,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.erw=new C.eh("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cy,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.ero=new C.eh("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.ba,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.erc=new C.eh("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dE,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.erl=new C.eh("carscreen","Luxury car touchscreen","\ud83d\ude98",A.ax,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.es1=new C.eh("vision","Apple Vision Pro","\ud83e\udd7d",A.bt,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.Sf=w([D.erj,D.erp,D.es3,D.erG,D.erb,D.erE,D.es8,D.erQ,D.eru,D.es5,D.er3,D.erR,D.erT,D.err,D.erv,D.erN,D.erk,D.erI,D.erA,D.erx,D.era,D.erh,D.ern,D.esa,D.es_,D.erD,D.erg,D.es9,D.esc,D.er6,D.esd,D.ere,D.erq,D.erB,D.er8,D.es0,D.ery,D.erd,D.erC,D.erY,D.er9,D.erS,D.erm,D.erM,D.es2,D.er7,D.erH,D.erP,D.es7,D.er5,D.esb,D.erX,D.erJ,D.erV,D.erf,D.es6,D.er2,D.erz,D.ers,D.erO,D.er4,D.eri,D.es4,D.erK,D.erF,D.erW,D.ert,D.erL,D.erU,D.erZ,D.er1,D.erw,D.ero,D.erc,D.erl,D.es1],B.as("O<eh>"))
D.dli=w([5,10,15,25,45,60],x.t)
D.dlE=w([-0.045,0.03,-0.015],x.n)
D.aBE=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.v2=w([0.05,0.2,0.35],x.n)
D.b8f=new B.ac(0,A.G,A.hC,A.dF,6)
D.dol=w([D.b8f],x.V)
D.eyB=new B.y(0,"AND")
D.ezs=new B.y(1,"Adder")
D.eA7=new B.y(2,"Blinker")
D.eAE=new B.y(3,"Memory")
D.dp9=w([D.eyB,D.ezs,D.eA7,D.eAE],x.I)
D.aBS=w([-104,0,104],x.n)
D.aBT=w([-14,3],x.n)
D.dq5=w([-8,0,8],x.n)
D.aC1=w([-92,0,92],x.n)
D.dqv=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.f6y=new C.vf("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.f6F=new C.vf("Medium tank","Balanced.",0.35,1)
D.f6E=new C.vf("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.Su=w([D.f6y,D.f6F,D.f6E],x._)
D.nI=w([0.04,0.2,0.36],x.n)
D.aCd=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.f0V=new B.b5(D.b0w,"Fold",Q.aq8)
D.f_U=new B.b5(D.acS,"Flip",A.CJ)
D.bOM=new B.a0(62889,"MaterialIcons",!1)
D.f1h=new B.b5(D.b0x,"Rise",D.bOM)
D.aql=new B.a0(983870,"MaterialIcons",!1)
D.eYi=new B.b5(D.acT,"Assemble",D.aql)
D.eYw=new B.b5(D.b0y,"Spin",D.aoK)
D.eYq=new B.b5(D.b0z,"Pop",A.ku)
D.drY=w([D.f0V,D.f_U,D.f1h,D.eYi,D.eYw,D.eYq],B.as("O<+(L5,m,a0)>"))
D.aCi=w([A.c1,A.dE,A.bw,A.aJ,A.bt,A.c0],x.O)
D.dsn=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dtq=w([3,4.5,5,6,9],x.n)
D.b8O=new B.ac(0,A.G,A.aT,A.I,16)
D.dtS=w([D.b8O],x.V)
D.dur=w(["solar","turbine","crank","pot"],x.s)
D.duS=w([0,0.35,0.75,1],x.n)
D.dwc=w(["volts","level","ohms","on"],x.s)
D.dxD=w([A.jH,A.CU,A.CA,A.qH,Z.HP,A.uQ,A.zf,A.qK,A.ib,A.oA,A.hr,A.e8,A.hG,A.ic,A.mT,A.lM,A.uP,A.rZ,A.lh,A.Hm,A.wG,A.CI,A.CE,A.a2S,A.P2,A.CQ,A.Pc,A.apA,H.aqh,A.ku],x.w)
D.ehf={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.hqy=new C.yz("Switch",F.pp,A.bs,0,"Tap it to turn it ON or OFF.")
D.hqu=new C.yz("Blinker",A.oy,A.bw,0,"Turns itself ON and OFF. Tap to change the speed.")
D.hqv=new C.yz("AND",D.aql,A.cq,2,"ON only when BOTH inputs are ON.")
D.bQg=new B.a0(63671,"MaterialIcons",!1)
D.hqt=new C.yz("OR",D.bQg,A.bt,2,"ON when EITHER input is ON.")
D.hqw=new C.yz("XOR",Aa.a2f,A.c1,2,"ON when the inputs are DIFFERENT.")
D.hqq=new C.yz("NAND",A.uC,A.aJ,2,"OFF only when BOTH inputs are ON.")
D.bPm=new B.a0(63176,"MaterialIcons",!1)
D.hqr=new C.yz("NOR",D.bPm,A.hm,2,"ON only when BOTH inputs are OFF.")
D.hqs=new C.yz("NOT",Y.CV,A.cJ,1,"Flips the signal: ON becomes OFF.")
D.hqx=new C.yz("Light",A.mU,A.dE,1,"Glows when its input is ON.")
D.hqz=new C.yz("Buzzer",A.oz,A.c0,1,"Beeps while its input is ON.")
D.A_=new B.bv(D.ehf,[D.hqy,D.hqu,D.hqv,D.hqt,D.hqw,D.hqq,D.hqr,D.hqs,D.hqx,D.hqz],B.as("bv<m,yz>"))
D.d_q=w([A.A],x.M)
D.d_O=w([A.aA,A.aF],x.M)
D.d9l=w([A.aA,A.A,A.aF],x.M)
D.daV=w([A.aA,A.lx,A.A,A.ly,A.aF],x.M)
D.dp5=w([A.aA,A.lx,A.a6,A.a9,A.ly,A.aF],x.M)
D.dCn=new B.d3([1,D.d_q,2,D.d_O,3,D.d9l,4,A.aCQ,5,D.daV,6,D.dp5],B.as("d3<F,ai<d9>>"))
D.ejI={Calm:0,Box:1,Sleep:2}
D.cHv=w([4,2,6,0],x.n)
D.cHC=w([4,4,4,4],x.n)
D.cHD=w([4,7,8,0],x.n)
D.SX=new B.bv(D.ejI,[D.cHv,D.cHC,D.cHD],B.as("bv<m,ai<H>>"))
D.ehs={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.xA=new C.a1h(0,"source")
D.dan=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hwW=new C.qn("Clock",A.oy,D.xA,A.bw,D.dan)
D.hwS=new C.qn("Button",A.CY,D.xA,A.aU,A.Z)
D.dtC=w(["random","quick","slow"],x.s)
D.hx2=new C.qn("Dice",A.os,D.xA,A.c1,D.dtC)
D.bPV=new B.a0(63484,"MaterialIcons",!1)
D.F3=new C.a1h(1,"logic")
D.dyt=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hwZ=new C.qn("Delay",D.bPV,D.F3,A.cq,D.dyt)
D.dlp=w(["fast","mid","slow"],x.s)
D.hx3=new C.qn("Echo",A.apQ,D.F3,A.bt,D.dlp)
D.hx0=new C.qn("Every 2nd",Y.CV,D.F3,A.hm,A.Z)
D.bPA=new B.a0(63309,"MaterialIcons",!1)
D.hwY=new C.qn("Every 3rd",D.bPA,D.F3,A.aJ,A.Z)
D.bRy=new B.a0(983902,"MaterialIcons",!1)
D.c9g=w(["50%","25%","75%"],x.s)
D.hx5=new C.qn("Chance",D.bRy,D.F3,A.cJ,D.c9g)
D.rf=new C.a1h(2,"out")
D.hwU=new C.qn("Light",A.mU,D.rf,A.dE,A.Z)
D.hwV=new C.qn("Burst",A.ku,D.rf,A.c1,A.Z)
D.hwT=new C.qn("Ripple",A.zm,D.rf,A.ba,A.Z)
D.hx1=new C.qn("Ball",A.aq0,D.rf,A.cJ,A.Z)
D.hx_=new C.qn("Comet",A.oA,D.rf,A.bt,A.Z)
D.bRi=new B.a0(983669,"MaterialIcons",!1)
D.hx4=new C.qn("Shake",D.bRi,D.rf,A.c0,A.Z)
D.hx6=new C.qn("Pop",A.Hn,D.rf,A.b9,A.Z)
D.hwX=new C.qn("Wash",A.Pg,D.rf,A.p7,A.Z)
D.n0=new B.bv(D.ehs,[D.hwW,D.hwS,D.hx2,D.hwZ,D.hx3,D.hx0,D.hwY,D.hx5,D.hwU,D.hwV,D.hwT,D.hx1,D.hx_,D.hx4,D.hx6,D.hwX],B.as("bv<m,qn>"))
D.ehE={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.Ar=new C.K4(0,"tv")
D.f87=new C.mo("Samsung Neo QLED 8K",D.Ar,F.y5,A.aJ)
D.f7Z=new C.mo("LG OLED evo G5",D.Ar,A.em,A.hi)
D.f7Q=new C.mo("Sony Bravia 9",D.Ar,A.rq,A.bv)
D.f7U=new C.mo("Apple TV 4K",D.Ar,A.e5,A.bP)
D.f7R=new C.mo("Bang and Olufsen Beovision",D.Ar,F.Fz,F.tX)
D.a9h=new C.K4(1,"iphone")
D.aRs=new C.mo("iPhone 18 Pro Max",D.a9h,D.ajP,A.ch)
D.En=new C.K4(3,"fold")
D.buL=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.f83=new C.mo("iPhone Fold",D.En,D.buL,A.b8)
D.As=new C.K4(2,"android")
D.f84=new C.mo("Samsung Galaxy S26 Ultra",D.As,F.Y_,A.d5)
D.bnx=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.f7X=new C.mo("Samsung Galaxy Z Fold7",D.En,D.bnx,A.cy)
D.f7T=new C.mo("Google Pixel 10 Pro XL",D.As,A.dj,A.bg)
D.f80=new C.mo("Xiaomi 16 Ultra",D.As,A.i7,A.cf)
D.f7W=new C.mo("Huawei Mate 80 Pro Max",D.As,A.ep,A.ax)
D.f7S=new C.mo("OPPO Find X9 Ultra",D.As,A.e_,A.b9)
D.f89=new C.mo("Honor Magic V5",D.En,A.d9,A.cq)
D.f7Y=new C.mo("vivo X300 Pro",D.As,A.hR,A.cJ)
D.aRt=new C.K4(4,"tablet")
D.f82=new C.mo("iPad Pro M5",D.aRt,A.dj,A.aJ)
D.a9i=new C.K4(5,"reader")
D.f8a=new C.mo("Kindle Scribe",D.a9i,A.ed,A.bv)
D.At=new C.K4(6,"computer")
D.f81=new C.mo("MacBook Pro M5 Max",D.At,A.dj,A.ch)
D.f86=new C.mo("iMac 32 inch",D.At,A.bP,A.cy)
D.f8_=new C.mo("Pro Display XDR 8K",D.At,A.i7,A.ba)
D.f7V=new C.mo("Sony Laser Projector",D.At,A.cs,A.dE)
D.f85=new C.mo("Luxury car touchscreen",D.At,M.nq,A.ax)
D.f88=new C.mo("Apple Vision Pro",D.At,A.hp,A.bt)
D.mn=new B.bv(D.ehE,[D.f87,D.f7Z,D.f7Q,D.f7U,D.f7R,D.aRs,D.f83,D.f84,D.f7X,D.f7T,D.f80,D.f7W,D.f7S,D.f89,D.f7Y,D.f82,D.f8a,D.f81,D.f86,D.f8_,D.f7V,D.f85,D.f88],B.as("bv<m,mo>"))
D.ehO={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bxz=new C.fQ(20,4,13,!1)
D.by_=new C.fQ(14,5,13.5,!1)
D.bxR=new C.fQ(9,2.4,10,!1)
D.by4=new C.fQ(7,5,12.5,!1)
D.bxU=new C.fQ(8,3.5,12,!1)
D.bxv=new C.fQ(15,2,6,!1)
D.by2=new C.fQ(45,6,13.5,!0)
D.bxL=new C.fQ(10,8,13.5,!1)
D.bxD=new C.fQ(25,3,12,!0)
D.bxJ=new C.fQ(35,4,12,!0)
D.bxK=new C.fQ(40,4.5,9.5,!0)
D.bxM=new C.fQ(55,3,9,!0)
D.bxw=new C.fQ(18,3,9,!1)
D.by1=new C.fQ(22,4,13.5,!1)
D.bxV=new C.fQ(16,5,13.5,!1)
D.bxH=new C.fQ(30,4,9,!0)
D.byd=new C.fQ(5,3.5,13,!1)
D.bxP=new C.fQ(25,3,13.5,!0)
D.bxY=new C.fQ(14,2.5,9,!1)
D.bxO=new C.fQ(6,6,13,!1)
D.by5=new C.fQ(30,1.2,5,!0)
D.byc=new C.fQ(35,3,4.5,!0)
D.by8=new C.fQ(20,4.5,7.5,!0)
D.bxN=new C.fQ(55,5.5,13.5,!0)
D.bxu=new C.fQ(45,5.5,13.5,!0)
D.bxZ=new C.fQ(40,5.5,13.5,!0)
D.byb=new C.fQ(60,6,13.5,!0)
D.akj=new C.fQ(28,4,7,!0)
D.Gv=new C.fQ(25,4,7,!0)
D.bxG=new C.fQ(30,4,7,!0)
D.bxB=new C.fQ(22,4,7,!0)
D.bxC=new C.fQ(24,4,7,!0)
D.bxQ=new C.fQ(60,3,5.5,!0)
D.bxx=new C.fQ(18,9,14,!0)
D.bxE=new C.fQ(25,9,14,!0)
D.akk=new C.fQ(30,8,14,!0)
D.bxA=new C.fQ(20,8,14,!0)
D.bxI=new C.fQ(30,9,14,!0)
D.by6=new C.fQ(22,5,9.5,!0)
D.bxy=new C.fQ(30,2.5,10.5,!0)
D.bxW=new C.fQ(50,5.5,13.5,!0)
D.bya=new C.fQ(12,2,9.5,!1)
D.bxT=new C.fQ(16,1.3,9.5,!0)
D.by3=new C.fQ(40,2.5,7,!0)
D.by9=new C.fQ(60,1.2,4.8,!0)
D.by7=new C.fQ(18,5,13.5,!0)
D.by0=new C.fQ(8,2,9.5,!1)
D.bxS=new C.fQ(12,2.5,8,!1)
D.bxF=new C.fQ(20,3.5,13.5,!0)
D.bxX=new C.fQ(3.5,3,13,!1)
D.A0=new B.bv(D.ehO,[D.bxz,D.by_,D.bxR,D.by4,D.bxU,D.bxv,D.by2,D.bxL,D.bxD,D.bxJ,D.bxK,D.bxM,D.bxw,D.by1,D.bxV,D.bxH,D.byd,D.bxP,D.bxY,D.bxO,D.by5,D.byc,D.by8,D.bxN,D.bxu,D.bxZ,D.byb,D.akj,D.Gv,D.bxG,D.Gv,D.bxB,D.Gv,D.bxC,D.akj,D.Gv,D.bxQ,D.bxx,D.bxE,D.akk,D.bxA,D.bxI,D.by6,D.bxy,D.bxW,D.bya,D.bxT,D.by3,D.by9,D.Gv,D.akk,D.by7,D.by0,D.bxS,D.bxF,D.bxX],B.as("bv<m,fQ>"))
D.ehp={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eXO=new B.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eCM=new B.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eCH=new B.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.ePa=new B.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eQ8=new B.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eP6=new B.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eAN=new B.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.eN3=new B.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eXW=new B.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eQu=new B.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eG9=new B.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eAr=new B.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eF8=new B.y("Movement","They pull your legs together and help you balance.")
D.eH6=new B.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eCV=new B.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eVe=new B.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eWo=new B.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.eMM=new B.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eW7=new B.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eLm=new B.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eQD=new B.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eAy=new B.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eHt=new B.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eQh=new B.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.eLI=new B.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eWf=new B.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eOB=new B.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eAL=new B.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eRd=new B.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eUS=new B.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eSZ=new B.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eyN=new B.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eOj=new B.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eOn=new B.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.eId=new B.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eD8=new B.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.eGV=new B.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.eNd=new B.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eTO=new B.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eXT=new B.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eQA=new B.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.eyv=new B.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.eNp=new B.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.ezl=new B.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eU3=new B.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eVa=new B.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.eNQ=new B.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eUi=new B.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eAA=new B.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eVM=new B.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eEv=new B.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eTr=new B.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eHS=new B.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eLC=new B.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eQU=new B.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eVW=new B.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eVO=new B.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eVS=new B.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.eM9=new B.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eRM=new B.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eSW=new B.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eVy=new B.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.eNP=new B.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.eJW=new B.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eIE=new B.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eOe=new B.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eQN=new B.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.eKs=new B.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eL9=new B.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eET=new B.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eV6=new B.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eFJ=new B.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.ezi=new B.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.eIc=new B.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.ezd=new B.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eDA=new B.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.eIh=new B.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eFT=new B.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eR9=new B.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eH9=new B.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eXB=new B.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eIO=new B.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.eM2=new B.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eOJ=new B.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eG1=new B.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eFL=new B.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dDt=new B.bv(D.ehp,[D.eXO,D.eCM,D.eCH,D.ePa,D.eQ8,D.eP6,D.eAN,D.eN3,D.eXW,D.eQu,D.eG9,D.eAr,D.eF8,D.eH6,D.eCV,D.eVe,D.eWo,D.eMM,D.eW7,D.eLm,D.eQD,D.eAy,D.eHt,D.eQh,D.eLI,D.eWf,D.eOB,D.eAL,D.eRd,D.eUS,D.eSZ,D.eyN,D.eOj,D.eOn,D.eId,D.eD8,D.eGV,D.eNd,D.eTO,D.eXT,D.eQA,D.eyv,D.eNp,D.ezl,D.eU3,D.eVa,D.eNQ,D.eUi,D.eAA,D.eVM,D.eEv,D.eTr,D.eHS,D.eLC,D.eQU,D.eVW,D.eVO,D.eVS,D.eM9,D.eRM,D.eSW,D.eVy,D.eNP,D.eJW,D.eIE,D.eOe,D.eQN,D.eKs,D.eL9,D.eET,D.eV6,D.eFJ,D.ezi,D.eIc,D.ezd,D.eDA,D.eIh,D.eFT,D.eR9,D.eH9,D.eXB,D.eIO,D.eM2,D.eOJ,D.eG1,D.eFL],B.as("bv<m,+(m,m)>"))
D.dKx=new C.Vl(null)
D.dKK=new C.Vm(null)
D.dMN=new C.Vq(null)
D.dNB=new C.W0(null)
D.dNF=new C.W1(null)
D.dOd=new C.W9(null)
D.dRZ=new C.WI(null)
D.dSF=new C.WJ(null)
D.dWS=new C.WO(null)
D.ebL=new C.WP(null)
D.ebO=new C.WT(null)
D.edY=new C.Xc(null)
D.edZ=new C.a95(null)
D.eg1=new C.Xl(null)
D.ejV=new B.q(0,118)
D.aKT=new B.q(0,13)
D.ejW=new B.q(0,17)
D.ejZ=new B.q(0,330)
D.ek4=new B.q(0,-13)
D.ek5=new B.q(0,-17)
D.ek6=new B.q(0,-18)
D.ek7=new B.q(0,-19)
D.ek9=new B.q(0,-28)
D.ekb=new B.q(0,-31)
D.ekc=new B.q(0,-32)
D.eki=new B.q(-9.5,-11)
D.ekl=new B.q(10,20)
D.eko=new B.q(10,-13)
D.ekq=new B.q(10,-22)
D.ekr=new B.q(10,-4)
D.ekv=new B.q(11,0)
D.a85=new B.q(11,8)
D.ekB=new B.q(12,2)
D.ekC=new B.q(14,0)
D.ekD=new B.q(14,12)
D.aL4=new B.q(14,8)
D.ekE=new B.q(14,-17)
D.aL6=new B.q(14,-3)
D.aL7=new B.q(14,-4)
D.ekH=new B.q(15,0)
D.ekI=new B.q(15,-12)
D.ekL=new B.q(16,-8)
D.ekM=new B.q(18,14)
D.ekN=new B.q(18,-12)
D.aLc=new B.q(20,0)
D.ekV=new B.q(20,15)
D.ekW=new B.q(20,-17)
D.ekX=new B.q(20,-3)
D.ekY=new B.q(21,8)
D.el1=new B.q(22,10)
D.aLe=new B.q(22,8)
D.el2=new B.q(24,0)
D.el3=new B.q(24,2)
D.el6=new B.q(24,-18)
D.el7=new B.q(24,-22)
D.elb=new B.q(25,8)
D.elc=new B.q(26,0)
D.eli=new B.q(28,-30)
D.elp=new B.q(30,18)
D.elq=new B.q(30,2)
D.elt=new B.q(31,19)
D.elv=new B.q(32,0)
D.aLi=new B.q(34,0)
D.aLj=new B.q(34,-32)
D.Jr=new B.q(36,0)
D.elI=new B.q(3,-1)
D.elL=new B.q(40,3)
D.elZ=new B.q(4,11)
D.em1=new B.q(4,-2)
D.em6=new B.q(5,0)
D.em7=new B.q(5,17)
D.em8=new B.q(5,6)
D.emd=new B.q(6,11)
D.emj=new B.q(8,7)
D.emk=new B.q(8,-10)
D.eml=new B.q(8,-14)
D.aLo=new B.q(9,0)
D.emv=new B.q(-20.5,-17.6)
D.emw=new B.q(-9,18.5)
D.emz=new B.q(-2.6,-1)
D.emI=new B.q(2.6,1)
D.emP=new B.q(-9,12.2)
D.en8=new B.q(-9,20.5)
D.enu=new B.q(-10,0)
D.env=new B.q(-10,12)
D.aLw=new B.q(-10,4)
D.enz=new B.q(-11,0)
D.enC=new B.q(-11,-2)
D.enG=new B.q(-13,-5)
D.enH=new B.q(-14,0)
D.enI=new B.q(-14,13)
D.enJ=new B.q(-14,2)
D.enK=new B.q(-14,-12)
D.enL=new B.q(-14,-19)
D.enN=new B.q(-14,-23)
D.enO=new B.q(-15,6)
D.enR=new B.q(-16,14)
D.enT=new B.q(-16,-8)
D.enU=new B.q(-17,10)
D.enV=new B.q(-17,-18)
D.enW=new B.q(-17,-8)
D.enY=new B.q(-18,20)
D.enZ=new B.q(-18,-9)
D.aLy=new B.q(-20,0)
D.eo0=new B.q(-20,16)
D.eo1=new B.q(-20,-9)
D.TS=new B.q(-22,8)
D.eo2=new B.q(-22,-10)
D.eo3=new B.q(-22,-11)
D.eo4=new B.q(-24,10)
D.eo5=new B.q(-24,11)
D.eo6=new B.q(-24,14)
D.eo7=new B.q(-24,-22)
D.eo9=new B.q(-25,-11)
D.eoa=new B.q(-26,0)
D.eob=new B.q(-26,-18)
D.eoc=new B.q(-2,9)
D.eod=new B.q(-2,-10)
D.eoe=new B.q(-2,-20)
D.eoh=new B.q(-2,-9)
D.eoj=new B.q(-32,0)
D.aLA=new B.q(-34,0)
D.eoo=new B.q(-40,3)
D.eoq=new B.q(-4,11)
D.eor=new B.q(-4,-17)
D.eos=new B.q(-4,-2)
D.eow=new B.q(-5,0)
D.eox=new B.q(-5,20)
D.eoy=new B.q(-5,6)
D.eoz=new B.q(-6,26)
D.eoA=new B.q(-6,6)
D.eoB=new B.q(-6,-42)
D.eoD=new B.q(-7,-19)
D.eoE=new B.q(-7,-24)
D.eoH=new B.q(-8,-9)
D.a8e=new B.q(-9,0)
D.eoI=new B.q(-9,1)
D.eoK=new B.q(-9,-23)
D.fFs=new B.B("Thinking\u2026",null,A.hy,null,null,null,null,null,null,null,null,null)
D.epM=new B.D(A.jD,D.fFs,null)
D.fWb=new B.B("Start from a ready-made board",null,A.fC,null,null,null,null,null,null,null,null,null)
D.epZ=new B.D(A2.wh,D.fWb,null)
D.bFz=new B.Q(4,0,4,14)
D.fAF=new B.G(!0,A.aD,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGs=new B.B("Games and little helpers for a spare minute.",null,D.fAF,null,null,null,null,null,null,null,null,null)
D.eqa=new B.D(D.bFz,D.fGs,null)
D.dm_=w([A.iB,A.bo],x.O)
D.aQs=new B.c_(A.A,0.5,A.x,null,0,D.dm_,null,null)
D.exl=new B.c_(A.A,0.5,A.x,null,0,D.aCy,null,null)
D.dcK=w([A.c,A.bM],x.O)
D.exn=new B.c_(A.A,0.5,A.x,null,0,D.dcK,null,null)
D.duF=w([A.bP,A.hp],x.O)
D.aQt=new B.c_(A.A,0.5,A.x,null,0,D.duF,null,null)
D.cRu=w([A.c,A.bP],x.O)
D.exr=new B.c_(A.tH,0.5,A.x,null,0,D.cRu,null,null)
D.buP=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.dsF=w([A.fj,D.buP],x.O)
D.exx=new B.c_(A.tH,0.5,A.x,null,0,D.dsF,null,null)
D.cKE=w([A.dj,A.cs],x.O)
D.exy=new B.c_(A.A,0.5,A.x,null,0,D.cKE,null,null)
D.cZn=w([A.fY,A.aU,A.d2],x.O)
D.exB=new B.c_(A.tH,0.5,A.x,null,0,D.cZn,null,null)
D.dmE=w([A.hp,M.nq],x.O)
D.exC=new B.c_(A.tH,0.5,A.x,null,0,D.dmE,null,null)
D.exG=new B.c_(A.A,0.5,A.x,null,0,D.ayK,null,null)
D.dvv=w([A.hp,A.i0],x.O)
D.exO=new B.c_(A.A,0.5,A.x,null,0,D.dvv,null,null)
D.aQx=new B.aP(9,9)
D.exW=new B.aP(1.4,1.4)
D.f4G=new B.a2(10,-8,18,-2)
D.f4H=new B.a2(14,-14,20,14)
D.f4J=new B.a2(20,-2,30,2)
D.f4O=new B.a2(4,-13,30,-3)
D.f4U=new B.a2(8,-7,12,7)
D.f55=new B.a2(-12,12,12,19)
D.f56=new B.a2(-12,14,12,22)
D.f57=new B.a2(-12,-22,12,8)
D.f58=new B.a2(-12,-25,12,19)
D.f59=new B.a2(-12,-26,12,-6)
D.f5a=new B.a2(-12,-4,12,14)
D.f5c=new B.a2(-14,20,14,24)
D.f5d=new B.a2(-14,6,14,10)
D.f5e=new B.a2(-14,-17,14,15)
D.f5f=new B.a2(-14,-26,14,18)
D.f5g=new B.a2(-14,-4,14,20)
D.f5i=new B.a2(-15,-29,15,25)
D.f5j=new B.a2(-16,-16,16,16)
D.f5m=new B.a2(-16,-22,-9,18)
D.f5n=new B.a2(-16,-24,16,-10)
D.f5p=new B.a2(-16,-2,16,20)
D.f5r=new B.a2(-18,20,18,24)
D.f5s=new B.a2(-18,-18,18,20)
D.f5t=new B.a2(-20,12,20,22)
D.f5u=new B.a2(-20,-28,20,26)
D.f5v=new B.a2(-22,14,22,18)
D.aR9=new B.a2(-22,-26,22,24)
D.f5w=new B.a2(-22,-3,22,3)
D.f5x=new B.a2(-22,-4,22,12)
D.f5z=new B.a2(-24,-12,10,22)
D.f5A=new B.a2(-24,-14,22,8)
D.f5B=new B.a2(-24,-6,24,20)
D.aRa=new B.a2(-24,-9,24,9)
D.f5C=new B.a2(-25,14,25,19)
D.f5D=new B.a2(-26,-14,14,8)
D.f5E=new B.a2(-26,-4,26,20)
D.f5F=new B.a2(-26,-6,4,6)
D.aRb=new B.a2(-28,-13,28,13)
D.f5G=new B.a2(-28,-16,28,16)
D.f5H=new B.a2(-28,-16,28,8)
D.f5I=new B.a2(-28,-22,28,22)
D.f5J=new B.a2(-30,-12,30,14)
D.f5K=new B.a2(-30,-14,0,14)
D.f5L=new B.a2(-30,-18,30,20)
D.f5M=new B.a2(-30,-28,30,14)
D.f5N=new B.a2(-30,-2,30,18)
D.f5O=new B.a2(-30,-4,30,18)
D.f5P=new B.a2(-32,-17,32,17)
D.f5Q=new B.a2(-32,-28,32,18)
D.f5R=new B.a2(-33,-21,33,17)
D.f5S=new B.a2(-34,14,34,26)
D.a98=new B.a2(-34,-18,34,18)
D.f5T=new B.a2(-34,-4,34,7)
D.f5U=new B.a2(-36,-24,36,20)
D.f5V=new B.a2(-38,-22,38,22)
D.f5X=new B.a2(-3,12,3,22)
D.f5Y=new B.a2(-3,5,3,15)
D.f61=new B.a2(-46,-34,46,28)
D.f63=new B.a2(-48,-3,48,3)
D.f66=new B.a2(-6,18,24,24)
D.f67=new B.a2(-6,5,6,12)
D.f68=new B.a2(-6,-22,6,-15)
D.f6c=new B.a2(-9,-16,9,22)
D.f6d=new B.a2(-4.5,-24,4.5,-21.2)
D.f6f=new B.a2(14,-9,17.5,9)
D.ej6={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aSg=new B.df(D.ej6,5,x.Q)
D.eiB={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.f9Q=new B.df(D.eiB,10,x.Q)
D.fcb=new B.av(24,44)
D.fcz=new B.av(54,38)
D.fcG=new B.av(66,38)
D.bdr=new B.fk(2,null,null,null,null,A.bt,null,null,null,null)
D.fdI=new B.a5(16,16,D.bdr,null)
D.aTf=new B.hG(3,12,12,0.82,null)
D.fqr=new B.G(!0,A8.xV,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkZ=new B.en("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cH,null,null,null,null,null,null,D.fqr)
D.fvt=new B.G(!0,A.kK,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl4=new B.en("AI",null,null,A.cH,null,null,null,null,null,null,D.fvt)
D.flm=new B.G(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flT=new B.G(!0,A.bl,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmf=new B.G(!0,A.cq,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmM=new B.G(!0,A.bV,null,null,null,null,11,A.V,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmR=new B.G(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn7=new B.G(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnD=new B.G(!0,A.aS,null,null,null,null,12,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faA=new B.cT(A.hC,A.dF,6)
D.dfL=w([D.faA],B.as("O<cT>"))
D.foB=new B.G(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.dfL,null,null,null)
D.foG=new B.G(!0,A.et,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foL=new B.G(!0,A.bV,null,null,null,null,10.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpn=new B.G(!0,A.bV,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpv=new B.G(!0,A.aD,null,null,null,null,null,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqv=new B.G(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fr0=new B.G(!0,A.aD,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frx=new B.G(!0,A.aU,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frz=new B.G(!0,A.c,null,null,null,null,10.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.aCT,null,null,null)
D.frF=new B.G(!0,A.c,null,null,null,null,12.5,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftt=new B.G(!0,A.ua,null,null,null,null,12.5,A.V,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu3=new B.G(!0,A.bN,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu8=new B.G(!0,A.bV,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fud=new B.G(!0,A.aD,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv_=new B.G(!0,A.mJ,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fve=new B.G(!0,A.ad,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVp=new B.G(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwi=new B.G(!0,A.fZ,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwB=new B.G(!0,A.bV,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx7=new B.G(!0,A.b9,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyA=new B.G(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz4=new B.G(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzm=new B.G(!0,A.aU,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzI=new B.G(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzL=new B.G(!0,A.aU,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAv=new B.G(!0,A.aS,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAU=new B.G(!0,A.ua,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBg=new B.G(!0,A.b9,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foO=new B.G(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBF=new B.B("\u26a0\ufe0f ",null,D.foO,null,null,null,null,null,null,null,null,null)
D.fBS=new B.B("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.xd,null,null,null,null,null,null,null,null,null)
D.fDv=new B.B("Pick one, then change it and see what happens.",null,A.xd,null,null,null,null,null,null,null,null,null)
D.fDz=new B.B("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.fpX=new B.G(!0,A.ad,null,null,null,null,null,A.V,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEv=new B.B("What do you want to invent? Type it below, or tap an idea.",null,D.fpX,null,null,null,null,null,null,null,null,null)
D.fG2=new B.B("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fGG=new B.B("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.fW,null,null,null,null,null,null,null,null,null)
D.fHi=new B.B("Make it yours",null,A.kh,null,null,null,null,null,null,null,null,null)
D.fKt=new B.B("5G",null,X.aUK,null,null,null,null,null,null,null,null,null)
D.fwT=new B.G(!0,A.bV,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLF=new B.B("WHAT HAPPENS",null,D.fwT,null,null,null,null,null,null,null,null,null)
D.fNp=new B.B("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fO5=new B.B("Change the words and pictures on the three slabs.",null,A.xd,null,null,null,null,null,null,null,null,null)
D.fOg=new B.B("All the parts and wires will be removed.",null,A.hh,null,null,null,null,null,null,null,null,null)
D.fOA=new B.B("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fP9=new B.B("Tap the crank on the board again and again to spin it faster.",null,A.hy,null,null,null,null,null,null,null,null,null)
D.fQo=new B.B("\ud83c\udfaf Challenges",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fQX=new B.B("Remove this part",null,W.aUj,null,null,null,null,null,null,null,null,null)
D.fRf=new B.B("Clear the board?",null,A.dh,null,null,null,null,null,null,null,null,null)
D.fwj=new B.G(!0,A.bw,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRv=new B.B("How the Lab works",null,D.fwj,null,null,null,null,null,null,null,null,null)
D.fnk=new B.G(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRR=new B.B("Electronics Lab",null,D.fnk,null,null,null,null,A.a2,null,1,null,null)
D.fRV=new B.B("?",null,O.aVU,null,null,null,null,null,null,null,null,null)
D.fTc=new B.B("Ready-made circuits",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fTQ=new B.B("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hy,null,null,null,null,null,null,null,null,null)
D.fzq=new B.G(!0,A.aU,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXj=new B.B("\u26a0 There is no air here, so a parachute will not work.",null,D.fzq,null,null,null,null,null,null,null,null,null)
D.fYw=new B.B("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,W.aUh,null,null,null,null,null,null,null,null,null)
D.fZ0=new B.B("NGMY",null,A.vx,null,null,null,null,null,null,null,null,null)
D.fZd=new B.B("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.VB,null,null,null,null,null,null,null,null,null)
D.fZC=new B.B("Tap it to change its setting. Drag from the right dot to connect.",null,A.mu,null,null,null,null,null,null,null,null,null)
D.h_F=new B.B("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.xd,null,null,null,null,null,null,null,null,null)
D.h_H=new B.B("TOOLBOX",null,A7.aax,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hrW=null
$.hrV=null
$.hy7=0
$.i02=B.U(x.N,B.as("iF"))
$.i0B=B.U(x.N,B.as("iF"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ixK","bGh",()=>{var v="led"
return B.a([C.azD("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fqH(),v),C.azD("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fqI(),v),C.azD("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fqJ(),v),C.azD("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fqQ(),v),C.azD("Not both","Make the light go OFF only when both switches are ON.",2,new C.fqR(),v),C.azD("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.fqS(),"buzzer")],B.as("O<bcB>"))})
w($,"iyb","bGi",()=>B.a([C.R1("UNIVERSE","Earth, space and gravity",A.PD,A.aJ,new C.fr7()),C.R1("ELECTRONICS LAB","Batteries, wires, real circuits",Af.CF,A.aJ,new C.fr8()),C.R1("DISCOVERY LAB","Body Explorer: a real 3D human",D.bON,A.b9,new C.fr9()),C.R1("TOOLBOX","Converter, clock, games",H.aoY,A.cJ,new C.fra()),C.R1("REACTION LAB","Wire parts together",A.D1,A.bw,new C.frb()),C.R1("SPARK PAINTER","Paint with light",A.P1,A.c1,new C.frc()),C.R1("ROCKET LANDER","Land softly on the pad",A.oA,A.aJ,new C.frd()),C.R1("TITLE ANIMATOR","Make a moving title",A.wI,A.bs,new C.fre()),C.R1("CIRCUIT LAB","Connect logic, learn it",A.a2A,A.cq,new C.frf())],B.as("O<buN>")))
w($,"izQ","qz",()=>{var v,u,t=B.U(x.N,x.B)
for(v=0;v<76;++v){u=D.Sf[v]
t.n(0,u.a,u)}return t})
w($,"ixL","aiJ",()=>B.a([C.Gg("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fqT()),C.Gg("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fqU()),C.Gg("Spin the motor","A battery and a motor in a loop will make it spin.",new C.fqV()),C.Gg("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.fqW()),C.Gg("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fqX()),C.Gg("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fqK()),C.Gg("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fqL()),C.Gg("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fqM()),C.Gg("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fqN()),C.Gg("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fqO()),C.Gg("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fqP())],B.as("O<bcC>")))
w($,"iyd","hH5",()=>B.a([C.a1O("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aU,A.cf,new C.frn()),C.a1O("Focus Timer","Work, then rest","\u23f1\ufe0f",A.c0,A.bC,new C.fro()),C.a1O("Breathe","Calm down in a minute","\ud83e\udee7",A.hm,A.cy,new C.frp()),C.a1O("Draw Pad","Sketch and share","\ud83c\udfa8",A.bF,A.b8,new C.frq()),C.a1O("Memory Match","Find the pairs","\ud83c\udccf",A.aJ,A.ch,new C.frr()),C.a1O("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bs,A.bg,new C.frs()),C.a1O("Tip & Split","Share the bill","\ud83e\uddfe",A.b9,A.b2,new C.frt()),C.a1O("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bt,A.aE,new C.fru())],B.as("O<bw6>")))})()};
(a=>{a["QVdJZtw8n8RGcQIZciKBVBFvbjo="]=a.current})($__dart_deferred_initializers__);