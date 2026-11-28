((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,W,A9,A5,N,Aa,A6,Ab,A7,X,P,Y,Ac,O,Ad,Ae,Af,Ag,Ah,Z,Ai,Aj,Ak,Al,A_,U,Am,Q,An,A0,R,S,A1,T,A2,Ao,E,I,G,L,Ap,Aq,Ar,A8,C={
bFt(d){return C.ipg(d)},
ipg(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bFt=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.r_(B.nl(""),d,A.i8,null,null).d9(0,At.a1W),$async$bFt)
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
return B.i($async$bFt,v)},
iC0(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.TR[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cW(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ag(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.f8(D.TR,new C.fXK())
if(w==null)w=A.d.gH(D.TR)
s=B.S(x.N,x.C)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.I)(r),++u){l=r[u].a
k=l[0]
l=$.r2().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.I)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gH(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.amY(w.a,w.b,m,w,s,!1)},
ivl(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.O(D.Uh,new C.fLF(),x.bd).aJ(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
iKG(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.c8(b2,"{")
v=A.a.oy(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.T.aN(0,A.a.av(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aR(a5)
r=0
for(a6=x.j,a7=J.aM(a6.a(J.t(u,"parts"))),a8=x.i;a7.A();){q=a7.gO(a7)
p=B.v(J.t(q,"kind"))
o=B.v(J.t(q,"id"))
if(!$.r2().am(0,p)||J.eI(s,o)||J.ab(t)>=8)continue
J.bU(s,o)
n=B.S(a5,a8)
for(a9=0;a9<4;++a9){m=D.dKi[a9]
l=J.t(q,m)
if(typeof l=="number")J.aL(n,m,l)}k=A.h.D(typeof J.t(q,"x")=="number"?B.d6(J.t(q,"x")):0.2+A.h.F(r,3)*0.3,0.16,0.84)
j=A.h.D(typeof J.t(q,"y")=="number"?B.d6(J.t(q,"y")):0.25+A.h.ao(r,3)*0.3,0.1,0.9)
J.bU(t,new B.e1([o,p,k,j,n]));++r}if(J.ab(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aM(a6.a(J.t(u,"wires")));a5.A();){h=a5.gO(a5)
g=a6.a(h)
if(J.ab(g)<4)continue
f=B.v(J.t(g,0))
e=B.v(J.t(g,2))
d=A.n.D(A.h.L(B.d6(J.t(g,1))),0,1)
a0=A.n.D(A.h.L(B.d6(J.t(g,3))),0,1)
if(J.eI(s,f)&&J.eI(s,e)&&!J.z(f,e))J.bU(i,new B.b3([f,d,e,a0]))}if(J.ab(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.R.a(J.t(u,"steps"))
a0=J.aM(a0==null?A.bK:a0)
while(a0.A()){a2=a0.gO(a0)
J.bU(a1,B.v(a2))}a3=a1
a0=J.t(u,"title")
a0=B.v(a0==null?"My invention":a0)
a1=J.t(u,"explain")
a4=new C.nj(a0,B.v(a1==null?"":a1),t,i,A.M)
a0=a4.a
a1=a4.b
d=J.ab(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.t(u,"honest")
a5=B.v(a5==null?"":a5)
return new C.amY(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
iAu(d){var w,v,u=C.hBu()
d.C(u)
for(w=0;w<60;++w)u.wj(0,0.03333333333333333)
v=u.a
return A.d.aR(v,new C.fTG(u))&&!A.d.cE(v,new C.fTH())},
iAt(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.S(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.I)(l),++u){t=l[u];++v
k.n(0,t.a,$.r2().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.I)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.v(t.e)+" V")
if(p==="resistor")q.push(""+A.h.S(t.r)+" ohms")
if(A.d.q(D.dIg,p))q.push("level "+A.h.S(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.h.S(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aJ(q,", ")+")"
s.push(B.v(p)+n+": "+o+", current "+A.h.a1(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.I)(w),++u){m=w[u]
l.push(B.v(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.v(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aJ(s,"\n")+"\nWires: "+A.d.aJ(l,"; ")},
inE(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.I)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aJ(v,"\n")+"\n\n"}v=A.d.aJ(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
iC_(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.r2().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.Uh[u]
if(A.d.aR(w,new C.fXH(s)))if(!B.cW(r,s.b.toLowerCase(),0))v=B.cW(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ag("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.X(w,new C.fXI(e),B.T(w).k("X<1>")).gar(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ag("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.h.a1(A.d.cH(w,0,new C.fXJ())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ag("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gH(w)
w=$.r2().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
amY:function amY(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fXK:function fXK(){},
fLF:function fLF(){},
fTG:function fTG(d){this.a=d},
fTH:function fTH(){},
fXH:function fXH(d){this.a=d},
fXI:function fXI(d){this.a=d},
fXJ:function fXJ(){},
XM:function XM(d,e){this.c=d
this.a=e},
bpE:function bpE(d,e,f,g,h){var _=this
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
ert:function ert(d){this.a=d},
eru:function eru(d,e,f){this.a=d
this.b=e
this.c=f},
erv:function erv(d){this.a=d},
erG:function erG(d){this.a=d},
erH:function erH(d,e){this.a=d
this.b=e},
erC:function erC(d){this.a=d},
erA:function erA(d,e){this.a=d
this.b=e},
erB:function erB(d,e,f){this.a=d
this.b=e
this.c=f},
erD:function erD(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ery:function ery(d){this.a=d},
erz:function erz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
erE:function erE(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
erx:function erx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
erF:function erF(d,e){this.a=d
this.b=e},
erw:function erw(d,e){this.a=d
this.b=e},
erK:function erK(d){this.a=d},
erJ:function erJ(d){this.a=d},
erL:function erL(d){this.a=d},
erI:function erI(d){this.a=d},
erM:function erM(d,e){this.a=d
this.b=e},
erN:function erN(d,e){this.a=d
this.b=e},
erO:function erO(d,e){this.a=d
this.b=e},
erP:function erP(d,e){this.a=d
this.b=e},
bFR(d,e,f){var w=null
return B.w(B.a([B.c(d,w,w,w,w,w,w,D.fQl,w,w,w),B.c(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p)},
hQ_(d,e,f,g){var w=null,v=B.n(24),u=B.K(f.j(0.6),A.r,1)
return B.at(B.q(w,B.w(B.a([B.c(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.aj,B.c(e,w,w,w,w,w,w,A.BN,A.K,w,w),A.aA,B.bX(A.fL,g,A.bq,w,0,8)],x.p),A.l,w,A.e,A.P,0,A.p),A.f,w,w,new B.p(D.blY,w,u,v,w,w,A.m),w,w,w,w,A.ad,w,w,w),w,w,w)},
Ht:function Ht(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vU:function vU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Y9:function Y9(d){this.a=d},
aIm:function aIm(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.hi$=h
_.mp$=i
_.fm$=j
_.hj$=k
_.bw$=l
_.ab$=m
_.c=_.a=null},
eH0:function eH0(){},
eHk:function eHk(d){this.a=d},
eHj:function eHj(d,e){this.a=d
this.b=e},
eHl:function eHl(){},
eHm:function eHm(){},
eH2:function eH2(d,e,f){this.a=d
this.b=e
this.c=f},
eH1:function eH1(d,e){this.a=d
this.b=e},
eGS:function eGS(d){this.a=d},
eGT:function eGT(d){this.a=d},
eGU:function eGU(d){this.a=d},
eGV:function eGV(d){this.a=d},
eGW:function eGW(d){this.a=d},
eGX:function eGX(d){this.a=d},
eGY:function eGY(d){this.a=d},
eGZ:function eGZ(d){this.a=d},
eH_:function eH_(d){this.a=d},
eGQ:function eGQ(d){this.a=d},
eGR:function eGR(d){this.a=d},
eGP:function eGP(d){this.a=d},
eHd:function eHd(d,e){this.a=d
this.b=e},
eH8:function eH8(d){this.a=d},
eH9:function eH9(d){this.a=d},
eH5:function eH5(d){this.a=d},
eHa:function eHa(d){this.a=d},
eH4:function eH4(d){this.a=d},
eHb:function eHb(d){this.a=d},
eHc:function eHc(d){this.a=d},
eH3:function eH3(d){this.a=d},
eHe:function eHe(d,e){this.a=d
this.b=e},
eH7:function eH7(d,e){this.a=d
this.b=e},
eHf:function eHf(d){this.a=d},
eHg:function eHg(d){this.a=d},
eHh:function eHh(d){this.a=d},
eHi:function eHi(d){this.a=d},
eH6:function eH6(d){this.a=d},
bmv:function bmv(d,e){this.b=d
this.a=e},
aQw:function aQw(){},
bDr:function bDr(){},
hKA(){var w=$.hKy
return w==null?$.hKy=$.oj().d1f("assets/data/three.min.js"):w},
hKz(){var w=$.hKx
return w==null?$.hKx=C.cTQ():w},
cTQ(){var w=0,v=B.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cTQ=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.oj().ii(0,"assets/data/body3d.bin"),$async$cTQ)
case 3:d=a1
$.hKB=J.eD(A.dN.gaS(d),d.byteOffset,d.byteLength)
t=B.U9(d)
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
e=D.duS[i]
g=B.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a5Q(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b8O))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.bfk(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cTQ,v)},
cau(){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$cau=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.he(B.a([C.hKz(),C.hKA()],x.D),x.K),$async$cau)
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
return B.i($async$cau,v)},
aWS:function aWS(d,e,f){this.a=d
this.b=e
this.c=f},
a5Q:function a5Q(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
bfk:function bfk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Wy:function Wy(d){this.a=d},
aGM:function aGM(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.hi$=s
_.mp$=t
_.fm$=u
_.hj$=v
_.bw$=w
_.ab$=a0
_.c=_.a=null},
dW5:function dW5(d){this.a=d},
dW4:function dW4(d,e){this.a=d
this.b=e},
dVG:function dVG(d){this.a=d},
dVH:function dVH(d,e){this.a=d
this.b=e},
dVI:function dVI(d){this.a=d},
dVJ:function dVJ(){},
dW6:function dW6(){},
dVK:function dVK(d,e){this.a=d
this.b=e},
dVL:function dVL(d){this.a=d},
dVM:function dVM(){},
dVN:function dVN(d){this.a=d},
dVP:function dVP(d,e){this.a=d
this.b=e},
dVO:function dVO(d){this.a=d},
dVD:function dVD(d,e,f){this.a=d
this.b=e
this.c=f},
dVE:function dVE(d){this.a=d},
dVF:function dVF(d){this.a=d},
dVW:function dVW(d){this.a=d},
dVX:function dVX(d,e){this.a=d
this.b=e},
dVY:function dVY(d,e){this.a=d
this.b=e},
dVZ:function dVZ(d){this.a=d},
dVV:function dVV(d,e){this.a=d
this.b=e},
dW_:function dW_(d,e){this.a=d
this.b=e},
dVU:function dVU(d,e){this.a=d
this.b=e},
dW0:function dW0(d){this.a=d},
dVT:function dVT(d){this.a=d},
dW1:function dW1(d){this.a=d},
dVS:function dVS(d){this.a=d},
dW2:function dW2(d){this.a=d},
dVR:function dVR(d){this.a=d},
dW3:function dW3(d){this.a=d},
dVQ:function dVQ(d){this.a=d},
aPA:function aPA(){},
aPB:function aPB(){},
cav:function cav(d){var _=this
_.a=d
_.d=_.c=_.b=null},
caw:function caw(d,e){this.a=d
this.b=e},
cax:function cax(d){this.a=d},
aC0(d,e,f,g,h){return new C.bg8(d,e,f,g,h)},
hr5(d,e,f,g,h,i){return $.ikP.c0(0,d+"|"+B.v(e)+"|"+f.m()+"|"+B.v(g),new C.d00(d,e,f,i,g,h))},
z7:function z7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Dw:function Dw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
o8:function o8(d,e,f){this.a=d
this.b=e
this.c=f},
bg8:function bg8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fEG:function fEG(){},
fEH:function fEH(){},
fEI:function fEI(){},
fEP:function fEP(){},
fEQ:function fEQ(){},
fER:function fER(){},
WF:function WF(d){this.a=d},
aGO:function aGO(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.hi$=m
_.mp$=n
_.fm$=o
_.hj$=p
_.bw$=q
_.ab$=r
_.c=_.a=null},
dXM:function dXM(d){this.a=d},
dXq:function dXq(d,e){this.a=d
this.b=e},
dXt:function dXt(){},
dXN:function dXN(){},
dXo:function dXo(d,e){this.a=d
this.b=e},
dXp:function dXp(d,e){this.a=d
this.b=e},
dXu:function dXu(d,e,f){this.a=d
this.b=e
this.c=f},
dXj:function dXj(){},
dXk:function dXk(){},
dXl:function dXl(d){this.a=d},
dXm:function dXm(d,e){this.a=d
this.b=e},
dXn:function dXn(d,e,f){this.a=d
this.b=e
this.c=f},
dXv:function dXv(){},
dXw:function dXw(d,e){this.a=d
this.b=e},
dXx:function dXx(d){this.a=d},
dXs:function dXs(d,e){this.a=d
this.b=e},
dXr:function dXr(d){this.a=d},
dXi:function dXi(d,e,f){this.a=d
this.b=e
this.c=f},
dXG:function dXG(d){this.a=d},
dXF:function dXF(d){this.a=d},
dXH:function dXH(d){this.a=d},
dXE:function dXE(d){this.a=d},
dXC:function dXC(d){this.a=d},
dXD:function dXD(d){this.a=d},
dXB:function dXB(d){this.a=d},
dXy:function dXy(d){this.a=d},
dXA:function dXA(d){this.a=d},
dXI:function dXI(d,e){this.a=d
this.b=e},
dXJ:function dXJ(d,e){this.a=d
this.b=e},
dXK:function dXK(d){this.a=d},
dXz:function dXz(d){this.a=d},
dXL:function dXL(d,e){this.a=d
this.b=e},
bgq:function bgq(d,e){this.b=d
this.a=e},
d00:function d00(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aPF:function aPF(){},
bDa:function bDa(){},
ibk(){return new C.P_(null)},
S9(d,e,f,g,h){return new C.byH(d,e,f,g,h)},
bx_(d,e,f){return A.h.D((d-e)/(f-e),0,1)},
hrD(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
iE2(){return B.iN("construction","")},
P_:function P_(d){this.a=d},
LQ:function LQ(d,e){this.a=d
this.b=e},
Bw:function Bw(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aH4:function aH4(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
e2W:function e2W(d,e){this.a=d
this.b=e},
e2V:function e2V(d){this.a=d},
e2Y:function e2Y(d,e){this.a=d
this.b=e},
e2X:function e2X(d){this.a=d},
byH:function byH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fF6:function fF6(){},
fF7:function fF7(){},
fF8:function fF8(){},
fF9:function fF9(){},
fFa:function fFa(){},
fFb:function fFb(){},
fFc:function fFc(){},
fFd:function fFd(){},
fFe:function fFe(){},
bx0:function bx0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fjV:function fjV(d){this.a=d},
fjU:function fjU(d,e){this.a=d
this.b=e},
fjS:function fjS(d){this.a=d},
fjW:function fjW(d){this.a=d},
fjT:function fjT(d,e){this.a=d
this.b=e},
ahH:function ahH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
agu:function agu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
S2:function S2(d,e,f,g,h,i,j,k,l,m){var _=this
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
by2:function by2(d,e){this.b=d
this.a=e},
bxy:function bxy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bf2:function bf2(d,e){this.b=d
this.a=e},
aLw:function aLw(d,e){this.c=d
this.a=e},
aLx:function aLx(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.ch=-1
_.du$=e
_.be$=f
_.c=_.a=null},
fjB:function fjB(d){this.a=d},
fjA:function fjA(d){this.a=d},
fjq:function fjq(d){this.a=d},
fjr:function fjr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fjs:function fjs(d){this.a=d},
fjp:function fjp(d,e){this.a=d
this.b=e},
fjt:function fjt(d){this.a=d},
fjz:function fjz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fjy:function fjy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fjw:function fjw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fjv:function fjv(d,e,f){this.a=d
this.b=e
this.c=f},
fjx:function fjx(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fju:function fju(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fjJ:function fjJ(d){this.a=d},
fjI:function fjI(d){this.a=d},
fjK:function fjK(d,e){this.a=d
this.b=e},
fjL:function fjL(d,e){this.a=d
this.b=e},
fjM:function fjM(d,e){this.a=d
this.b=e},
fjH:function fjH(d,e,f){this.a=d
this.b=e
this.c=f},
fjN:function fjN(d,e,f){this.a=d
this.b=e
this.c=f},
fjG:function fjG(d){this.a=d},
fjC:function fjC(d){this.a=d},
fjO:function fjO(d){this.a=d},
fjP:function fjP(d){this.a=d},
fjF:function fjF(d,e){this.a=d
this.b=e},
fjQ:function fjQ(d,e){this.a=d
this.b=e},
fjE:function fjE(d,e){this.a=d
this.b=e},
fjR:function fjR(d,e){this.a=d
this.b=e},
fjD:function fjD(d,e){this.a=d
this.b=e},
fjn:function fjn(){},
fjo:function fjo(){},
bwC:function bwC(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bw0:function bw0(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bfJ:function bfJ(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bw2:function bw2(d,e,f){this.b=d
this.c=e
this.a=f},
bAa:function bAa(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aRm:function aRm(){},
hRI(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a6(0,new B.m(w,0)),u=e.aI(0,new B.m(w,0)),t=1-f,s=3*t
return d.aK(0,t*t*t).a6(0,v.aK(0,s*t*f)).a6(0,u.aK(0,s*f*f)).a6(0,e.aK(0,f*f*f))},
bmu(d,e,f,g,h,i){return $.ilo.c0(0,d+"|"+B.v(e)+"|"+f.m()+"|"+B.v(g),new C.dxa(d,e,f,i,g,h))},
a2P:function a2P(d,e){this.a=d
this.b=e},
qS:function qS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
rD:function rD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
DA:function DA(d,e){this.a=d
this.b=e},
a0J:function a0J(d,e){this.a=d
this.b=e},
ahu:function ahu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a31:function a31(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
DL:function DL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aei:function aei(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aeA:function aeA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
agy:function agy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bms:function bms(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
dxe:function dxe(d){this.a=d},
dxf:function dxf(d){this.a=d},
dxb:function dxb(d,e){this.a=d
this.b=e},
dxc:function dxc(d){this.a=d},
dxd:function dxd(d){this.a=d},
dxg:function dxg(d){this.a=d},
dxh:function dxh(d){this.a=d},
dxi:function dxi(d){this.a=d},
dxj:function dxj(d){this.a=d},
dxk:function dxk(d){this.a=d},
dxl:function dxl(d){this.a=d},
dxm:function dxm(d){this.a=d},
dxn:function dxn(d){this.a=d},
dxo:function dxo(d){this.a=d},
He:function He(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Y8:function Y8(d){this.a=d},
aIl:function aIl(d,e,f,g,h,i,j){var _=this
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
eGl:function eGl(d){this.a=d},
eGa:function eGa(d){this.a=d},
eGc:function eGc(){},
eGd:function eGd(){},
eGg:function eGg(){},
eGh:function eGh(d,e,f){this.a=d
this.b=e
this.c=f},
eGi:function eGi(d){this.a=d},
eGj:function eGj(d){this.a=d},
eGe:function eGe(){},
eGf:function eGf(d){this.a=d},
eGL:function eGL(d){this.a=d},
eGk:function eGk(){},
eG6:function eG6(d){this.a=d},
eGn:function eGn(d){this.a=d},
eGm:function eGm(d){this.a=d},
eGp:function eGp(){},
eGo:function eGo(d,e){this.a=d
this.b=e},
eG9:function eG9(){},
eG7:function eG7(d){this.a=d},
eG8:function eG8(d){this.a=d},
eGJ:function eGJ(d){this.a=d},
eGI:function eGI(d){this.a=d},
eGK:function eGK(d){this.a=d},
eGz:function eGz(d,e){this.a=d
this.b=e},
eGH:function eGH(d){this.a=d},
eGF:function eGF(d){this.a=d},
eGG:function eGG(d){this.a=d},
eGE:function eGE(d){this.a=d},
eGD:function eGD(d){this.a=d},
eGA:function eGA(d){this.a=d},
eGB:function eGB(d){this.a=d},
eGC:function eGC(d){this.a=d},
eGb:function eGb(){},
eGv:function eGv(d){this.a=d},
eGw:function eGw(d){this.a=d},
eGu:function eGu(d){this.a=d},
eGx:function eGx(d){this.a=d},
eGt:function eGt(d){this.a=d},
eGy:function eGy(d){this.a=d},
eGs:function eGs(d){this.a=d},
eGr:function eGr(d){this.a=d},
eGq:function eGq(d,e){this.a=d
this.b=e},
bmt:function bmt(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dxa:function dxa(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aQu:function aQu(){},
hXJ(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aI(0,e).gcD()*0.1
return new B.m((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
hBu(){var w=B.a([],x.bz),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a6Y(w,v,u,A.cX,B.S(x.N,x.y))},
i4U(d,e,f){var w=d.c,v=e===0?-1:1
return new B.m(w*f.a+v*C.hBv(d),d.d*f.b)},
hBv(d){return 42+(D.mP.am(0,d.b)?(d.ch-1)*38:0)},
ipB(d){var w,v,u,t,s
if(d.B(0,$.hNo))return $.i_R()
w=B.a([],x.n)
for(v=d.a,u=d.b,t=12;t<v;t+=24)for(s=12;s<u;s+=24){w.push(t)
w.push(s)}$.hNo=d
return $.ipC=new Float32Array(B.cd(w))},
es:function es(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
um:function um(d,e,f,g){var _=this
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
acW:function acW(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ae4:function ae4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a6Y:function a6Y(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bTK:function bTK(){},
bTV:function bTV(d){this.a=d},
bTQ:function bTQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTW:function bTW(d){this.a=d},
bTX:function bTX(d){this.a=d},
bTZ:function bTZ(d){this.a=d},
bU_:function bU_(d){this.a=d},
bTY:function bTY(d){this.a=d},
bU0:function bU0(d,e,f){this.a=d
this.b=e
this.c=f},
bU1:function bU1(d){this.a=d},
bTM:function bTM(d){this.a=d},
bTN:function bTN(d){this.a=d},
bTL:function bTL(d){this.a=d},
bTO:function bTO(d,e,f){this.a=d
this.b=e
this.c=f},
bTP:function bTP(d){this.a=d},
bTJ:function bTJ(d){this.a=d},
bU2:function bU2(d,e){this.a=d
this.b=e},
bTR:function bTR(d,e){this.a=d
this.b=e},
bTU:function bTU(d){this.a=d},
bTT:function bTT(d){this.a=d},
bTS:function bTS(d){this.a=d},
alJ:function alJ(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bO4:function bO4(){},
bO5:function bO5(){},
bO3:function bO3(){},
nj:function nj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cye:function cye(d){this.a=d},
iKB(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new C.haa(),c9=new C.hac(),d0=new C.had(),d1=new C.hab(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aq(w,d1.$3(new B.a5(w.a,w.b,w.c,w.d),A.cn,A.bQ))
d3.ah(D.eJm,D.eGi,c9.$2(A.e0,1.4))
d3.ah(D.eFY,D.eFW,c9.$2(A.bz,2.4))
d3.ah(D.eFZ,U.aPd,c9.$2(A.bz,2.4))
if(c7){d2=c8.$1(A.fD.j(0.5))
d2.y=A.Ie
d3.P(D.eFE,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.h.F(d2+v/3,1)
d6.$5(d3,"\u2744",new B.m(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aq(d0.$4(-22,-26,44,50),d1.$3(D.aVw,A.aS,A.cG))
d3.P(A.cO,16,c8.$1(A.bz))
d3.P(A.cO,13,c8.$1(c7?A.aH.j(0.85):A.a_))
if(c7){d2=d3.c
J.bs(d2.save())
d2.translate(0,4)
d3.jC(0,d4.y*0.6)
for(v=0;v<3;++v){t=v*2.09
d3.ah(A.J,new B.m(Math.cos(t)*11,Math.sin(t)*11),c9.$2(A.ab,3))}d2.restore()
for(d2=d5*0.8,v=0;v<4;++v){u=A.h.F(d2+v*0.25,1)
d3.P(new B.m(Math.sin(v*2+d5)*9,4-u*12),1.6+u*2,c8.$1(A.c.j(0.8*(1-u))))}}d3.P(D.eJe,2.4,c8.$1(c7?A.bh:A.an))
d3.P(D.aPQ,2.4,c8.$1(A.an))
return!0
case"blender":d3.aq(d0.$5(-14,14,28,12,4),c8.$1(A.cU))
d2=$.U().r
t=x.v
s=new B.aI(d2,A.ak,c6,c6,B.a([],t))
s.E(new B.b_(-16,-26))
s.E(new B.aq(16,-26))
s.E(new B.aq(12,14))
s.E(new B.aq(-12,14))
s.E(new B.bz())
d3.af(s,c8.$1(A.fD.j(0.35)))
if(c7){d2=new B.aI(d2,A.ak,c6,c6,B.a([],t))
d2.E(new B.b_(-14,-10))
d2.E(new B.aq(14,-10))
d2.E(new B.aq(12,14))
d2.E(new B.aq(-12,14))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.aC.j(0.7)))}d3.af(s,c9.$2(A.ab,1.6))
d2=d3.c
J.bs(d2.save())
d2.translate(0,10)
d3.jC(0,d4.y)
d3.ah(D.ab5,D.aPA,c9.$2(A.bP,3))
d2.restore()
if(c7)for(d2=d5*9,t=d5*1.6,v=0;v<3;++v)d3.P(new B.m(Math.sin(d2+v*2)*9,-10-A.h.F(t+v*0.33,1)*12),2.4,c8.$1(A.f1))
return!0
case"drone":d3.aq(d0.$5(-10,-4,20,10,4),c8.$1(A.aM))
d3.P(A.hu,3,c8.$1(c7?A.bh:A.an))
r=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.c,t=-4+r,q=-6+r,p=0;p<2;++p){o=F.Uv[p]
d3.ah(new B.m(o*0.4,1),new B.m(o,t),c9.$2(A.bz,3))
J.bs(d2.save())
d2.translate(o,q)
d3.ah(D.eJ5,D.eG2,c9.$2(A.c.j(c7?0.35:0.9),3))
if(c7)d3.c3(B.c1(A.J,6,24+Math.sin(d4.y*3)*4),c8.$1(A.c.j(0.25)))
d2.restore()}return!0
case"drill":w=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
w.E(new B.b_(-24,-12))
w.E(new B.aq(10,-12))
w.E(new B.aq(10,2))
w.E(new B.aq(-2,2))
w.E(new B.aq(-6,22))
w.E(new B.aq(-16,22))
w.E(new B.aq(-14,2))
w.E(new B.aq(-24,2))
w.E(new B.bz())
d3.af(w,d1.$3(D.fwf,A.aQ,A.de))
d3.aE(D.fvl,c8.$1(A.d1))
d2=d3.c
J.bs(d2.save())
d2.translate(18,-5)
d3.jC(0,d4.y*2)
d3.ah(A.J,D.eG9,c9.$2(A.bP,2.4))
d3.ah(A.ab0,D.eG8,c9.$2(A.i1,1))
d2.restore()
if(c7)for(d2=d5*3,t=d5*20,v=0;v<4;++v){u=A.h.F(d2+v*0.25,1)
d3.P(new B.m(34+u*6,-5+Math.sin(v*3+t)*6*u),1.4,c8.$1(A.eL.j(1-u)))}return!0
case"torch":if(c7){v=A.h.D(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.b_(16,-6))
d2.E(new B.aq(52,-26))
d2.E(new B.aq(52,18))
d2.E(new B.aq(16,4))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.bO.j(0.35*v)))}d3.aq(d0.$5(-26,-6,30,12,3),d1.$3(D.fwl,A.bl,A.cx))
n=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
n.E(new B.b_(4,-6))
n.E(new B.aq(18,-12))
n.E(new B.aq(18,12))
n.E(new B.aq(4,6))
n.E(new B.bz())
d3.af(n,c8.$1(A.cU))
d3.P(D.eGe,7,c8.$1(c7?A.c:A.d1))
return!0
case"neon":d3.aq(d0.$5(-30,-14,60,28,6),c8.$1(M.nk))
if(c7)m=d4.ax>0.5||A.n.F(A.h.bb(d5*17),3)!==0
else m=!1
l=m?A.c7:D.bwM
if(m){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.c7.j(0.35))
t.y=A.nq
d3.aq(d2,t)}d3.aq(d0.$5(-27,-11,54,22,5),c9.$2(l,2.2))
d6.$5(d3,"OPEN",D.eJs,l,17)
return!0
case"microwave":d3.aq(d0.$4(-30,-18,60,38),d1.$3(D.fws,A.bP,A.bl))
d2=d0.$5(-26,-14,38,30,3)
d3.aq(d2,c8.$1(c7?A.bO.j(0.75):A.ax))
if(c7){d2=d3.c
J.bs(d2.save())
d2.translate(-7,8)
d3.jC(0,d4.y*0.5)
d3.c3(B.c1(A.J,7,22),c8.$1(A.de))
d2.restore()}d3.aq(d0.$5(15,-14,12,12,2),c8.$1(M.nk))
if(c7)d6.$5(d3,"0:"+A.a.aY(A.n.v(59-A.n.F(A.h.bb(d5),60)),2,"0"),D.eGf,A.bf,6.5)
d3.P(D.eGt,4,c8.$1(A.d1))
return!0
case"doorbell":d3.aq(d0.$5(-16,-26,32,52,8),c8.$1(A.bo))
d3.P(A.KO,10,c8.$1(c7?A.bu:A.bz))
d2=d3.c
J.bs(d2.save())
d2.translate(0,-8)
d3.jC(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.eKa,A.c,16)
d2.restore()
d3.P(A.ky,6,c8.$1(A.di))
d3.P(A.ky,6,c9.$2(A.c,1.6))
if(c7)for(d2=d5*14,v=1;v<=2;++v)d3.cR(B.c0(A.KO,14+v*6+A.h.F(d2,6)),-0.9,1.8,!1,c9.$2(A.bu.j(0.9-v*0.3),1.8))
return!0
case"camera":d3.ah(D.eJr,D.eK3,c9.$2(A.bz,4))
d2=d3.c
J.bs(d2.save())
d3.jC(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aq(d0.$5(-24,-14,46,22,5),d1.$3(D.fwg,A.bP,A.an))
d3.P(D.aPh,8,c8.$1(A.ax))
d3.P(D.aPh,4.5,c8.$1(c7?A.aH:A.cx))
d3.P(D.eJp,2.2,c8.$1(c7&&A.n.F(A.h.bb(d5*1.6),2)===0?A.aC:A.kL))
d2.restore()
if(c7)d6.$5(d3,"REC",D.eJz,A.aC,9)
return!0
case"console":d3.aq(d0.$5(-28,-22,56,44,8),d1.$3(D.fwo,A.i3,A.fA))
d3.aq(d0.$5(-20,-17,40,22,3),c8.$1(A.e_))
if(c7){d2=d5*2.3
d3.P(new B.m(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aE(new B.a5(-18,t,-15.6,t+8),c8.$1(A.bf))
d2=-9+Math.sin(d2-0.4)*6
d3.aE(new B.a5(15.6,d2,18,d2+8),c8.$1(A.c7))}d3.P(D.eJk,4,c8.$1(A.bc))
d3.P(D.eGa,2.4,c8.$1(A.aC))
d3.P(D.eGr,2.4,c8.$1(A.bh))
return!0
case"heartmon":d3.aq(d0.$5(-30,-22,60,44,6),c8.$1(A.ax))
d3.aq(d0.$5(-26,-18,52,28,3),c8.$1(A.e_))
if(c7){d2=$.U()
t=B.a([],x.v)
k=new B.aI(d2.r,A.ak,c6,c6,t)
for(d2=d5*0.5,o=-25;o<=25;++o){u=A.h.F((o+25)/50-d2,1)
if(u<0.1)j=Math.sin(u/0.1*3.141592653589793)*-1
else if(u<0.14)j=0.6
else{q=u<0.2?-0.4:0
j=q}i=-4+j*11
if(o===-25){q=new B.b_(o,i)
t.push(q)
h=k.f
if(h!=null)q.aj(h)
k.ac()}else{q=new B.aq(o,i)
t.push(q)
h=k.f
if(h!=null)q.aj(h)
k.ac()}}d3.af(k,c9.$2(A.bf,1.8))
d6.$5(d3,"72",D.eGb,A.hJ,11)
d2=d5*9
d6.$5(d3,"\u2665",D.eJE,A.hJ.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.P(D.eJu,3,c8.$1(c7?A.bh:A.bz))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aq(d2,c8.$1(A.cJ.j(c7?0.5:0.3)))
d3.aq(d0.$5(-26,-20,52,40,4),c9.$2(A.ab,1.6))
d3.aE(D.fwi,c8.$1(F.wY))
if(c7){d2=d5*1.1
t=Math.sin(d2)
q=d3.c
J.bs(q.save())
q.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.nZ(0,-1,1)
d3.c3(B.c1(A.J,8,14),c8.$1(A.cY))
d2=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.b_(-6,0))
d2.E(new B.aq(-12,-4))
d2.E(new B.aq(-12,4))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.ca))
d3.P(D.eHd,1.2,c8.$1(A.v))
q.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=A.h.F(d2+v*0.2,1)
d3.P(new B.m(-18+Math.sin(u*8+v)*2,13-u*30),1.4+A.n.F(v,2),c9.$2(A.ab,1))}}return!0
case"lighthouse":d2=$.U().r
t=x.v
g=new B.aI(d2,A.ak,c6,c6,B.a([],t))
g.E(new B.b_(-9,22))
g.E(new B.aq(-5,-16))
g.E(new B.aq(5,-16))
g.E(new B.aq(9,22))
g.E(new B.bz())
d3.af(g,d1.$3(D.fwU,A.c,A.bC))
d3.aE(D.fwQ,c8.$1(c7?A.eL:A.bz))
q=new B.aI(d2,A.ak,c6,c6,B.a([],t))
q.E(new B.b_(-7,-22))
q.E(new B.aq(0,-29))
q.E(new B.aq(7,-22))
q.E(new B.bz())
d3.af(q,c8.$1(A.eE))
if(c7){f=Math.sin(d4.y*0.3)
d2=new B.aI(d2,A.ak,c6,c6,B.a([],t))
d2.E(new B.b_(0,-19))
t=f*34
d2.E(new B.aq(t,-26))
d2.E(new B.aq(t,-12))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.eL.j(0.45)))
d2=c8.$1(A.eL.j(0.35))
d2.y=A.Ie
d3.P(D.eFF,14,d2)}return!0
case"discoball":d3.ah(D.eFH,V.aP8,c9.$2(A.d1,1.4))
d3.P(A.J,16,d1.$3(D.fw1,A.aS,A.an))
for(v=0;v<8;++v){d2=-12+v*3.4
d3.ah(new B.m(-16,d2),new B.m(16,d2),c9.$2(A.dJ,0.7))}for(v=0;v<5;++v){f=d4.y*0.5+v*1.26
d3.ah(new B.m(Math.cos(f)*16*0.3,Math.sin(f)*16*0.3),new B.m(Math.cos(f)*16,0),c9.$2(A.dJ,0.7))}if(c7)for(d2=d5*2,t=d5*9,v=0;v<10;++v){f=d2+v*0.63
e=22+A.n.F(v,3)*6
d3.P(new B.m(Math.cos(f)*e,Math.sin(f)*e*0.8),1.8,c8.$1(D.dw2[A.n.F(v,4)].j(0.5+0.5*Math.sin(t+v))))}return!0
case"robot":d3.aq(d0.$5(-14,-4,28,24,5),d1.$3(D.fvZ,A.cG,A.an))
d3.aq(d0.$5(-12,-26,24,20,5),d1.$3(D.fvR,A.bo,A.bQ))
d3.ah(H.aPa,D.eFJ,c9.$2(A.bz,1.6))
d3.P(D.eFK,2.2,c8.$1(c7?A.aC:A.bz))
d=c7&&A.h.F(d5*0.8,1)>0.08
for(p=0;p<2;++p){o=F.a8l[p]
if(c7)d2=d?A.be:A.ey
else d2=A.cx
d3.P(new B.m(o,-17),3.2,c8.$1(d2))}d2=d3.c
J.bs(d2.save())
d2.translate(14,0)
d3.jC(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.ah(A.J,D.aaW,c9.$2(A.bQ,4))
d2.restore()
d3.ah(D.eJc,D.eJx,c9.$2(A.bQ,4))
d3.aE(D.fwP,c8.$1(c7?A.be.j(0.7):A.aM))
return!0
case"toaster":a0=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a0*14,p=0;p<2;++p){t=d0.$5(D.aFL[p]+1,d2,10,14,2)
q=B.ap(A.bO,A.de,a0)
q.toString
d3.aq(t,c8.$1(q))}d3.aq(d0.$5(-24,-6,48,26,8),d1.$3(D.fwh,A.bP,A.bl))
for(p=0;p<2;++p){o=D.aFL[p]
d2=d0.$5(o,-5,12,5,2)
d3.aq(d2,c8.$1(c7?A.fO:A.ax))
if(c7){d2=d0.$5(o,-5,12,5,2)
t=c8.$1(A.cY.j(0.5))
t.y=O.p2
d3.aq(d2,t)}}d3.ah(D.eGB,D.eGW,c9.$2(A.ax,3))
return!0
case"ledstrip":d3.aq(d0.$5(-34,-4,68,10,4),c8.$1(A.cx))
for(d2=d5*90,v=0;v<9;++v){a1=A.h.F(d2+v*40,360)
l=c7?new Aw.pI(1,a1,0.8,1).jq():A.cU
if(c7){t=c8.$1(l.j(0.45))
t.y=O.p2
d3.P(new B.m(-30+v*7.5,1),7,t)}d3.P(new B.m(-30+v*7.5,1),2.6,c8.$1(l))}d3.aq(d0.$5(-40,-2,6,6,1),c8.$1(A.d1))
return!0
case"pump":d3.aq(d0.$5(-16,-2,32,22,6),d1.$3(D.fw7,A.cJ,A.H6))
d3.P(D.eJH,8,c8.$1(A.ts))
d2=d3.c
J.bs(d2.save())
d2.translate(-2,9)
d3.jC(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
d3.ah(A.J,new B.m(Math.cos(t)*7,Math.sin(t)*7),c9.$2(A.fD,2.4))}d2.restore()
d2=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.b_(16,6))
d2.E(new B.aq(26,6))
d2.E(new B.aq(26,-20))
d2.E(new B.aq(10,-20))
d3.af(d2,c9.$2(A.bQ,4))
if(c7){for(d2=d5*0.9,v=0;v<5;++v)d3.P(new B.m(26,6-A.h.F(d2+v*0.2,1)*26),2.2,c8.$1(A.ho))
d3.P(D.eHS,3.2,c8.$1(A.ho.j(0.7)))}return!0
case"hairdryer":d2=d3.c
J.bs(d2.save())
d3.jC(0,-0.15)
d3.aq(d0.$5(-26,-14,40,22,10),d1.$3(D.fwj,A.i_,A.v4))
d3.aq(d0.$5(14,-10,12,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-10,6,12,22,4),c8.$1(A.cU))
d2.restore()
if(c7){for(d2=d5*3,v=0;v<4;++v){u=A.h.F(d2+v*0.25,1)
t=u*18
q=-10+v*5
d3.ah(new B.m(24+t,q),new B.m(32+t,q),c9.$2(A.c.j(1-u),1.8))}d2=c8.$1(A.cY.j(0.4))
d2.y=O.p2
d3.P(D.eGs,8,d2)}return!0
case"headphones":d3.cR(B.c1(A.dQ,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bz,4))
for(d2=d5*12,p=0;p<2;++p){o=F.Uu[p]
t=o-7
d3.aq(d0.$5(t,0,14,20,6),d1.$3(new B.a5(t,0,t+14,20),A.bk,A.nd))
if(c7)for(t=o<0,v=1;v<=2;++v){q=B.c0(new B.m(o,10),10+v*5+A.h.F(d2,5))
h=t?2.2:-0.9
d3.cR(q,h,1.6,!1,c9.$2(A.eM.j(0.9-v*0.3),1.6))}}if(c7)d6.$5(d3,"\u266a",new B.m(-4,-8-A.h.F(d5*14,8)),A.l5,12)
return!0
case"smartwatch":d3.aq(d0.$5(-8,-30,16,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-8,14,16,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-14,-17,28,32,8),d1.$3(D.fvW,A.d1,A.cU))
d3.aq(d0.$5(-11,-14,22,26,6),c8.$1(A.e_))
if(c7){a2=new B.W(Date.now(),0,!1)
d6.$5(d3,A.a.aY(A.n.v(B.d_(a2)),2,"0")+":"+A.a.aY(A.n.v(B.fy(a2)),2,"0"),D.eFQ,A.bf,9.5)
j=(Math.sin(d5*9)+1)/2
d2=B.ap(A.GO,A.hJ,j)
d2.toString
d6.$5(d3,"\u2665",new B.m(-8,1),d2,8+j*2)
d6.$5(d3,""+(70+A.n.F(A.h.bb(d5*2),6)),A.dQ,A.c,7)}return!0
case"tablet":d3.aq(d0.$5(-30,-22,60,44,6),c8.$1(M.nk))
d3.aq(d0.$5(-30,-22,60,44,6),c9.$2(A.bQ,1.6))
a3=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nn(a3),$.n0(),!0)
d2.translate(-27,-19)
K.MQ(d3,D.fDm,d5,!1,c6,c6)
d2.restore()}else d3.aq(a3,c8.$1(D.x3))
return!0
case"buck":a4=d0.$5(-26,-22,52,42,5)
d3.aq(a4,d1.$3(new B.a5(a4.a,a4.b,a4.c,a4.d),A.dV,A.dl))
d3.aq(a4,c9.$2(A.aT,1.2))
d3.P(D.aPJ,9,c8.$1(A.ax))
d3.P(D.aPJ,6,c9.$2(A.de,2))
d3.aq(d0.$5(4,-2,14,10,2),c8.$1(A.ax))
d3.aq(d0.$5(-22,-19,44,12,2),c8.$1(A.e_))
d2=A.h.a1(d4.db,1)
t=A.h.a1(c7?d4.dx:d4.e,1)
q=c7?A.bf:A.an
d6.$5(d3,d2+"\u2192"+t+"V",D.eI2,q,8.2)
d3.P(D.eGj,2.4,c8.$1(c7?A.bh:A.aM))
d6.$5(d3,"IN",D.eJy,A.ab,6)
d6.$5(d3,"OUT",D.eHI,A.ab,6)
return!0
case"regulator":a5=c7?A.h.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=B.ap(A.bQ,A.aC,a5)
t.toString
d3.aq(d2,c8.$1(t))
d3.P(H.aaU,3,c8.$1(A.aM))
d3.aq(d0.$5(-12,-4,24,18,3),d1.$3(D.fvS,A.cU,A.iq))
d6.$5(d3,"7805",D.ab5,A.ab,8)
for(p=0;p<3;++p){d2=D.dDf[p]-1
d3.aE(new B.a5(d2,14,d2+2,22),c8.$1(A.dW))}if(a5>0.2)for(d2=d5*0.9,v=0;v<3;++v){u=A.h.F(d2+v*0.33,1)
d3.P(new B.m(-6+v*6,-28-u*12),2+u*2,c8.$1(A.c.j(0.5*(1-u))))}d6.$5(d3,"5V",D.eK6,A.br,9)
return!0
case"diode":d3.ah(D.aPO,D.aPu,c9.$2(A.dW,2.4))
d3.aq(d0.$5(-14,-7,28,14,6),c8.$1(A.as.j(0.85)))
d3.aE(D.fvz,c8.$1(A.br))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.eL.j(0.4))
t.y=A.le
d3.aq(d2,t)}d2=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.b_(-8,-4))
d2.E(new B.aq(-8,4))
d2.E(new B.aq(-1,0))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.bc))
d6.$5(d3,"one way",D.eJn,A.aE,8)
return!0
case"ldr":d3.ah(D.aPO,D.ab5,c9.$2(A.dW,2.4))
d3.ah(D.aPA,D.aPu,c9.$2(A.dW,2.4))
d3.P(A.J,12,c8.$1(A.de))
d3.P(A.J,12,c9.$2(A.ty,1.6))
d2=$.U()
t=B.a([],x.v)
a6=new B.aI(d2.r,A.ak,c6,c6,t)
a6.E(new B.b_(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new B.aq(d2,-6+v*3)
t.push(d2)
q=a6.f
if(q!=null)d2.aj(q)
a6.ac()}d3.af(a6,c9.$2(A.bO,1.4))
d2=B.ap(A.bz,A.eL,d4.f)
d2.toString
d6.$5(d3,"\u2600",new B.m(-6,-26),d2,14)
d6.$5(d3,""+A.h.S(20+980*(1-d4.f))+"\u03a9",D.eJd,A.ab,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":switch(d2){case"lgtv":t=A.eD
break
case"sonytv":t=A.ti
break
case"appletv":t=A.dW
break
default:t=F.Cx
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
h.clipRRect(B.nn(a3),$.n0(),!0)
h.translate(t,q)
K.haq(d3,new B.aw(a3.c-t,a3.d-q),d4.at,d5,d4.ax,-1,c6,c6)
h.restore()
d3.P(D.eGZ,1.6,c8.$1(A.bf))}else{d3.aq(a3,c8.$1(D.x3))
h=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
h.E(new B.b_(t,q))
h.E(new B.aq(t+24,q))
h.E(new B.aq(t,q+22))
h.E(new B.bz())
d3.af(h,c8.$1(A.c.j(0.05)))}if(d2==="appletv"){d2=d3.c
J.bs(d2.save())
d2.translate(0,19.6)
d3.bW(0,3.7)
d2.translate(-0.5,-0.55)
d3.af(K.hTt(),c8.$1(A.cz))
d2.restore()}else{switch(d2){case"lgtv":d2=F.aV6
break
case"sonytv":d2=F.aUV
break
default:d2=F.aUX
break}a8=B.h2(c6,A.cK,c6,c6,c6,B.cX(c6,c6,c6,c6,c6,c6,c6,c6,c6,B.l(c6,c6,d2.b,c6,c6,c6,c6,c6,c6,c6,c6,3.6,c6,c6,A.C,c6,1,!0,c6,0.25,c6,c6,c6,c6,c6,c6),d2.a),A.a8,A.cb,c6,A.e6,A.cc)
a8.eL()
d2=a8.b
t=d2.c
d2=d2.a.c
a8.a5(d3,new B.m(-t/2,19.6-d2.gb4(d2)/2))}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":a9=D.mP.h(0,d2)
b0=a9.b===D.Bx
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
t.clipRRect(B.nn(a3),$.n0(),!0)
q=a3.a
h=a3.b
t.translate(q,h)
K.MQ(d3,new B.aw(a3.c-q,a3.d-h),d5,!1,c6,c6)
t.restore()}else d3.aq(a3,c8.$1(D.x3))
if(b0){t=a3.b
q=a3.d
d3.ah(new B.m(0,t),new B.m(0,q),c9.$2(A.v.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aq(d0.$5(-4,a3.b+1.2,8,2.6,1.3),c8.$1(A.v))
else{d2=b0?b1/2-7:0
d3.P(new B.m(d2,a3.b+3),1.3,c8.$1(A.v))}return!0
case"ereader":d3.aq(d0.$5(-17,-28,34,52,4),c8.$1(A.cU))
d3.aq(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bP))
if(c7){d6.$5(d3,"NGMY",D.eKd,A.ax,9)
for(v=0;v<9;++v){d2=-9+v*3.6
t=A.n.F(v,4)===3?14:22
d3.aE(new B.a5(-11,d2,-11+t,d2+1.4),c8.$1(A.bl))}d3.P(A.aaS,1.6,c8.$1(A.ax))}return!0
case"laptop":d3.aq(d0.$5(-30,-28,60,42,4),d1.$3(D.fwt,A.cG,A.bl))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nn(b8),$.n0(),!0)
t=b8.a
q=b8.b
d2.translate(t,q)
K.MQ(d3,new B.aw(b8.c-t,b8.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(b8,c8.$1(D.x3))
d2=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.b_(-38,16))
d2.E(new B.aq(38,16))
d2.E(new B.aq(34,21))
d2.E(new B.aq(-34,21))
d2.E(new B.bz())
d3.af(d2,c8.$1(D.al8))
d3.aq(d0.$5(-7,16,14,2,1),c8.$1(A.bl))
return!0
case"imac":d3.aq(d0.$5(-32,-28,64,46,5),d1.$3(D.fwx,A.cn,A.cG))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nn(b9),$.n0(),!0)
t=b9.a
q=b9.b
d2.translate(t,q)
K.MQ(d3,new B.aw(b9.c-t,b9.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(b9,c8.$1(D.x3))
d3.P(D.eFs,2,c8.$1(A.bQ))
d2=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.b_(-6,18))
d2.E(new B.aq(6,18))
d2.E(new B.aq(10,26))
d2.E(new B.aq(-10,26))
d2.E(new B.bz())
d3.af(d2,c8.$1(D.al8))
return!0
case"monitor":d3.aq(d0.$5(-34,-28,68,40,3),c8.$1(A.eD))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nn(c0),$.n0(),!0)
t=c0.a
q=c0.b
d2.translate(t,q)
K.MQ(d3,new B.aw(c0.c-t,c0.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(c0,c8.$1(D.x3))
d3.aE(D.fwE,c8.$1(A.bl))
d3.aq(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.d1))
return!0
case"projector":if(c7){d2=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.b_(14,4))
d2.E(new B.aq(-32,-42))
d2.E(new B.aq(34,-42))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.eL.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nn(c1),$.n0(),!0)
t=c1.a
q=c1.b
d2.translate(t,q)
K.MQ(d3,new B.aw(c1.c-t,c1.d-q),d5,!1,c6,c6)
d2.restore()}d3.aq(d0.$5(-26,-4,52,24,6),d1.$3(D.fwk,A.hY,A.d1))
d3.P(D.aPf,7,c8.$1(A.ax))
d3.P(D.aPf,4,c8.$1(c7?A.eL:A.cx))
for(v=0;v<4;++v){d2=-20+v*4
d3.ah(new B.m(d2,2),new B.m(d2,14),c9.$2(A.dJ,1))}return!0
case"carscreen":d3.aq(d0.$5(-34,-10,68,32,12),c8.$1(A.ax))
c2=d0.$5(-30,-20,60,28,8)
d3.aq(c2,c8.$1(M.nk))
d3.aq(c2,c9.$2(A.bz,1.2))
if(c7){c3=new B.aI($.U().r,A.ak,c6,c6,B.a([],x.v))
c3.E(new B.b_(-26,4))
c3.E(new B.cn(-10,-14+Math.sin(d5)*3,6,-6))
c3.E(new B.aq(22,-16))
d3.af(c3,c9.$2(A.aH,2.2))
d2=A.h.F(d5*6,48)
d3.P(new B.m(-26+d2,4-d2*0.1),2.4,c8.$1(A.bf))
d6.$5(d3,""+(88+A.n.F(A.h.bb(d5*2),5)),H.aPz,A.c,10)
d6.$5(d3,"km/h",D.eHQ,A.aE,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aq(c4,d1.$3(new B.a5(c4.a,c4.b,c4.c,c4.d),A.d1,A.cU))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nn(c5),$.n0(),!0)
t=c5.a
q=c5.b
d2.translate(t,q)
K.MQ(d3,new B.aw(c5.c-t,c5.d-q),d5,!1,c6,c6)
d2.restore()
d2=c8.$1(A.bk.j(0.2))
d2.y=A.nq
d3.P(A.J,26,d2)}else d3.aq(c5,c8.$1(A.a_))
d3.ah(D.eJO,D.eJT,c9.$2(A.bl,4))
d3.ah(D.eH0,D.eHg,c9.$2(A.bl,4))
return!0}return!1},
haa:function haa(){},
hac:function hac(){},
had:function had(){},
hab:function hab(){},
hAj(d,e,f,g){return new C.alH(d,g,f,e)},
GZ(d,e,f){return new C.bg9(d,e,f)},
alH:function alH(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
alI:function alI(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.hi$=i
_.mp$=j
_.fm$=k
_.hj$=l
_.bw$=m
_.ab$=n
_.c=_.a=null},
bNH:function bNH(d,e){this.a=d
this.b=e},
bNI:function bNI(d){this.a=d},
bNG:function bNG(d){this.a=d},
bNJ:function bNJ(){},
bNK:function bNK(d){this.a=d},
bNL:function bNL(d,e,f){this.a=d
this.b=e
this.c=f},
bNF:function bNF(d,e){this.a=d
this.b=e},
bNC:function bNC(d,e){this.a=d
this.b=e},
bND:function bND(d,e,f){this.a=d
this.b=e
this.c=f},
bNw:function bNw(d,e){this.a=d
this.b=e},
bNx:function bNx(){},
bNE:function bNE(d,e,f){this.a=d
this.b=e
this.c=f},
bNB:function bNB(d,e){this.a=d
this.b=e},
bNy:function bNy(d,e){this.a=d
this.b=e},
bNz:function bNz(d,e){this.a=d
this.b=e},
bNA:function bNA(d){this.a=d},
bO0:function bO0(d){this.a=d},
bO1:function bO1(){},
bN6:function bN6(){},
bO2:function bO2(d,e){this.a=d
this.b=e},
bO_:function bO_(d,e){this.a=d
this.b=e},
bNV:function bNV(d){this.a=d},
bNS:function bNS(d,e,f){this.a=d
this.b=e
this.c=f},
bNT:function bNT(d,e){this.a=d
this.b=e},
bNW:function bNW(d){this.a=d},
bNQ:function bNQ(d,e){this.a=d
this.b=e},
bNR:function bNR(d,e){this.a=d
this.b=e},
bNU:function bNU(d){this.a=d},
bNX:function bNX(d){this.a=d},
bNN:function bNN(d,e){this.a=d
this.b=e},
bNO:function bNO(d,e){this.a=d
this.b=e},
bNP:function bNP(d,e){this.a=d
this.b=e},
bNY:function bNY(d){this.a=d},
bNM:function bNM(d){this.a=d},
bNZ:function bNZ(d){this.a=d},
bN7:function bN7(d,e){this.a=d
this.b=e},
bNt:function bNt(d,e){this.a=d
this.b=e},
bNv:function bNv(d,e){this.a=d
this.b=e},
bNu:function bNu(d,e){this.a=d
this.b=e},
bNs:function bNs(){},
bNe:function bNe(d){this.a=d},
bNd:function bNd(d){this.a=d},
bNf:function bNf(d,e){this.a=d
this.b=e},
bNg:function bNg(d){this.a=d},
bNc:function bNc(d){this.a=d},
bNk:function bNk(d,e,f){this.a=d
this.b=e
this.c=f},
bNb:function bNb(d,e){this.a=d
this.b=e},
bNl:function bNl(d,e){this.a=d
this.b=e},
bNm:function bNm(d,e){this.a=d
this.b=e},
bNn:function bNn(d,e){this.a=d
this.b=e},
bNo:function bNo(d,e,f){this.a=d
this.b=e
this.c=f},
bNa:function bNa(d,e){this.a=d
this.b=e},
bNp:function bNp(d,e,f){this.a=d
this.b=e
this.c=f},
bN9:function bN9(d,e){this.a=d
this.b=e},
bNq:function bNq(d,e,f){this.a=d
this.b=e
this.c=f},
bN8:function bN8(d,e){this.a=d
this.b=e},
bNr:function bNr(d){this.a=d},
bNh:function bNh(d){this.a=d},
bNi:function bNi(d){this.a=d},
bNj:function bNj(d){this.a=d},
bg9:function bg9(d,e,f){this.a=d
this.b=e
this.c=f},
fES:function fES(){},
fET:function fET(){},
fEU:function fEU(){},
fEF:function fEF(){},
fEV:function fEV(){},
fEE:function fEE(){},
fEW:function fEW(){},
fEJ:function fEJ(){},
fED:function fED(){},
fEK:function fEK(){},
fEC:function fEC(){},
fEL:function fEL(){},
fEB:function fEB(){},
fEM:function fEM(){},
fEz:function fEz(){},
fEA:function fEA(){},
fEN:function fEN(){},
fEx:function fEx(){},
fEy:function fEy(){},
fEO:function fEO(){},
fEw:function fEw(){},
Xh:function Xh(d){this.a=d},
aHi:function aHi(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
e87:function e87(d,e){this.a=d
this.b=e},
e8g:function e8g(d){this.a=d},
e8h:function e8h(){},
e8i:function e8i(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e8j:function e8j(){},
e86:function e86(d){this.a=d},
e85:function e85(d,e,f){this.a=d
this.b=e
this.c=f},
e84:function e84(d,e){this.a=d
this.b=e},
e82:function e82(d){this.a=d},
e83:function e83(){},
e8f:function e8f(d){this.a=d},
e8e:function e8e(d){this.a=d},
e8c:function e8c(d,e){this.a=d
this.b=e},
e8a:function e8a(d){this.a=d},
e8b:function e8b(){},
e8d:function e8d(d,e,f){this.a=d
this.b=e
this.c=f},
e88:function e88(d,e){this.a=d
this.b=e},
e89:function e89(){},
e8l:function e8l(d){this.a=d},
e8m:function e8m(d,e){this.a=d
this.b=e},
e8k:function e8k(){},
e8n:function e8n(d,e){this.a=d
this.b=e},
e8o:function e8o(d){this.a=d},
e8p:function e8p(d){this.a=d},
aB7:function aB7(d,e){this.c=d
this.a=e},
bed:function bed(d,e){var _=this
_.d=$
_.bw$=d
_.ab$=e
_.c=_.a=null},
cQ4:function cQ4(d){this.a=d},
bec:function bec(d,e){this.b=d
this.a=e},
cQ3:function cQ3(d){this.a=d},
aBs:function aBs(){},
aBt:function aBt(){},
aO1:function aO1(){},
bDd:function bDd(){},
iKC(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.c0(A.we,23)
$.U()
b8=B.M()
b8.r=A.ax.gp(0)
b9.P(A.we,25,b8)
b8=B.M()
b8.san(D.eT4.az(0,v))
b9.P(A.we,23,b8)
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
r=B.M()
r.r=A.bC.gp(0)
r.c=2
r.d=A.bH
b9.ah(A.we,new B.m(b8*18,s*18-2),r)
r=B.M()
r.r=A.br.gp(0)
b9.P(A.we,3,r)
c2.$5(b9,w?"V":"A",D.eJW,A.br,12)
c2.$5(b9,w?A.h.a1(o,1)+" V":""+A.h.S(o*1000)+" mA",D.eJh,A.ax,9.5)
return!0
case"fan":b8=B.bx(D.fvO,A.hv)
$.U()
s=B.M()
s.r=A.bz.gp(0)
b9.aq(b8,s)
s=B.M()
s.r=A.an.gp(0)
b9.aE(D.fwF,s)
s=B.M()
s.r=A.a_.j(0.6).gp(0)
b9.P(H.wf,22,s)
for(b8=b9.c,u=0;u<4;++u){J.bs(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.c1(A.aP7,18,10)
r=new B.ar(A.V,A.R,A.X,A.Y,A.W)
r.r=A.ho.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
b9.c3(s,r)
b8.restore()}b8=B.M()
b8.r=A.bt.gp(0)
b9.P(H.wf,4,b8)
b8=B.M()
b8.b=A.ae
b8.c=2
b8.r=A.cG.gp(0)
b9.P(H.wf,22,b8)
b8=B.M()
b8.b=A.ae
b8.c=0.8
b8.r=A.jX.gp(0)
b9.P(H.wf,14,b8)
return!0
case"speaker":n=B.bx(D.aVw,A.qy)
$.U()
b8=B.M()
b8.san(D.awk.az(0,new B.a5(n.a,n.b,n.c,n.d)))
b9.aq(n,b8)
m=b7?Math.sin(c1*40)*1.6:0
b8=B.M()
b8.san(D.eTr.az(0,B.c0(A.cy,15)))
b9.P(A.cy,14+m,b8)
b8=B.M()
b8.r=A.d1.gp(0)
b9.P(A.cy,5,b8)
b8=B.M()
b8.r=A.bl.gp(0)
b9.P(H.aaT,5+m*0.4,b8)
if(b7)for(b8=c1*18,u=1;u<=3;++u){s=B.c0(D.eGA,6+u*6+A.h.F(b8,6))
r=new B.ar(A.V,A.R,A.X,A.Y,A.W)
r.b=A.ae
r.c=1.8
r.r=A.c7.j(0.9-u*0.2).gp(0)
b9.cR(s,-0.8,1.6,!1,r)}return!0
case"clock":l=B.bx(D.fww,A.qy)
$.U()
b8=B.M()
b8.san(D.ceJ.az(0,new B.a5(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
b8=B.bx(D.aVy,A.jL)
s=B.M()
s.r=A.iq.gp(0)
b9.aq(b8,s)
if(b7){k=new B.W(Date.now(),0,!1)
j=B.Gj(k)<500?":":" "
i=A.a.aY(A.n.v(B.d_(k)),2,"0")
h=A.a.aY(A.n.v(B.fy(k)),2,"0")
b8=B.M()
b8.r=A.bf.j(0.12).gp(0)
b9.aE(D.aVy,b8)
c2.$5(b9,i+j+h,D.eJC,A.bf,21)}b8=B.M()
b8.r=A.cG.gp(0)
b9.P(D.eJA,2.4,b8)
b8=B.M()
b8.r=A.cG.gp(0)
b9.P(D.eGF,2.4,b8)
return!0
case"calculator":l=B.bx(D.fwc,A.iF)
$.U()
b8=B.M()
b8.san(D.awn.az(0,new B.a5(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
b8=B.bx(D.fw5,A.hG)
s=B.M()
s.r=(b7?A.a0x:D.bxo).gp(0)
b9.aq(b8,s)
if(b7)c2.$5(b9,"3.14159",D.eJg,A.a_b,10.5)
for(g=0;g<4;++g)for(b8=-6+g*8,s=b8+6,f=0;f<4;++f){r=-15+f*8
r=B.bx(new B.a5(r,b8,r+6,s),A.FB)
$.U()
q=new B.ar(A.V,A.R,A.X,A.Y,A.W)
q.r=(f===3?A.ca:A.bP).gp(0)
b9.aq(r,q)}return!0
case"phone":l=B.bx(D.fw0,A.iF)
$.U()
b8=B.M()
b8.r=M.nk.gp(0)
b9.aq(l,b8)
b8=B.M()
b8.b=A.ae
b8.c=1.9
b8.r=D.an8.gp(0)
b9.aq(l,b8)
e=B.bx(D.fvQ,A.hv)
if(b7){b8=B.M()
b8.san(D.cg7.az(0,new B.a5(e.a,e.b,e.c,e.d)))
b9.aq(e,b8)
b8=b9.c
J.bs(b8.save())
b8.clipRRect(B.nn(e),$.n0(),!0)
b8.translate(-12,-25)
K.MQ(b9,D.fCZ,c1,!1,b6,b6)
b8.restore()
d=A.h.F(c1*0.12,1)
b8=B.bx(D.fvN,A.hG)
s=B.M()
s.r=A.bc.gp(0)
b9.aq(b8,s)
s=B.M()
s.r=A.bf.gp(0)
b9.aE(new B.a5(-10,14.5,-10+20*d,16.9),s)
c2.$5(b9,"\u26a1"+A.h.S(d*100)+"%",D.eIo,A.c,6)}else{b8=B.M()
b8.r=D.x3.gp(0)
b9.aq(e,b8)}b8=B.bx(D.fwV,D.eTA)
s=B.M()
s.r=A.v.gp(0)
b9.aq(b8,s)
return!0
case"router":l=B.bx(D.fwv,A.pr)
$.U()
b8=B.M()
b8.san(D.cf0.az(0,new B.a5(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
for(a0=0;a0<2;++a0){a1=F.Uu[a0]
b8=a1<0?-4:4
s=new B.ar(A.V,A.R,A.X,A.Y,A.W)
s.r=A.cx.gp(0)
s.c=4
s.d=A.bH
b9.ah(new B.m(a1,-4),new B.m(a1+b8,-28),s)}for(u=0;u<4;++u){if(b7)a2=A.n.F(A.h.bb(c1*(3+u*1.3)),2)===0||u===0
else a2=!1
b8=new B.ar(A.V,A.R,A.X,A.Y,A.W)
b8.r=(a2?A.bh:A.aM).gp(0)
b9.P(new B.m(-15+u*10,11),2.6,b8)}if(b7)for(b8=c1*10,u=1;u<=3;++u){s=B.c0(H.wf,8+u*6+A.h.F(b8,6))
r=new B.ar(A.V,A.R,A.X,A.Y,A.W)
r.b=A.ae
r.c=1.8
r.r=A.fM.j(0.9-u*0.2).gp(0)
b9.cR(s,-2.3,1.5,!1,r)}return!0
case"siren":a3=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bx(D.fwb,A.hv)
s=$.U()
r=B.M()
r.r=A.cU.gp(0)
b9.aq(b8,r)
if(b7){b8=B.M()
b8.r=A.aC.j(0.5*a3).gp(0)
b8.y=A.DC
b9.P(A.we,34,b8)}a4=new B.aI(s.r,A.ak,b6,b6,B.a([],x.v))
a4.E(new B.b_(-16,12))
a4.E(new B.aq(-16,-2))
a4.E(new B.cn(0,-30,16,-2))
a4.E(new B.aq(16,12))
a4.E(new B.bz())
b8=B.M()
b8.r=B.ap(A.eE,D.bnI,a3).gp(0)
b9.af(a4,b8)
b8=B.M()
b8.b=A.ae
b8.c=1.4
b8.r=A.bX.gp(0)
b9.af(a4,b8)
if(b7){b8=b9.c
J.bs(b8.save())
b8.translate(0,-2)
b9.jC(0,c1*7)
s=B.M()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.ah(A.J,H.aaT,s)
b8.restore()}return!0
case"toycar":a5=b7?Math.sin(c1*30)*0.8:0
b8=b9.c
J.bs(b8.save())
b8.translate(0,a5)
s=$.U().r
r=x.v
l=new B.aI(s,A.ak,b6,b6,B.a([],r))
l.E(new B.b_(-28,8))
l.E(new B.aq(-28,-2))
l.E(new B.aq(-16,-4))
l.E(new B.aq(-10,-16))
l.E(new B.aq(10,-16))
l.E(new B.aq(18,-4))
l.E(new B.aq(28,-2))
l.E(new B.aq(28,8))
l.E(new B.bz())
q=B.M()
q.san(D.cd_.az(0,D.fwn))
b9.af(l,q)
q=new B.aI(s,A.ak,b6,b6,B.a([],r))
q.E(new B.b_(-8,-4))
q.E(new B.aq(-4,-13))
q.E(new B.aq(4,-13))
q.E(new B.aq(4,-4))
q.E(new B.bz())
p=B.M()
p.r=A.fD.gp(0)
b9.af(q,p)
r=new B.aI(s,A.ak,b6,b6,B.a([],r))
r.E(new B.b_(8,-4))
r.E(new B.aq(8,-13))
r.E(new B.aq(11,-13))
r.E(new B.aq(15,-4))
r.E(new B.bz())
s=B.M()
s.r=A.fD.gp(0)
b9.af(r,s)
for(a0=0;a0<2;++a0){a1=F.aFM[a0]
s=new B.ar(A.V,A.R,A.X,A.Y,A.W)
s.r=A.ax.gp(0)
b9.P(new B.m(a1,10),7.5,s)
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
l.E(new B.b_(-18,20))
l.E(new B.aq(-14,-12))
l.E(new B.cn(0,-20,14,-12))
l.E(new B.aq(18,20))
l.E(new B.bz())
r=B.M()
r.san(D.ce7.az(0,D.fwa))
b9.af(l,r)
r=new B.aI(b8,A.ak,b6,b6,B.a([],s))
r.E(new B.b_(14,-10))
r.E(new B.aq(30,-22))
r.E(new B.aq(32,-18))
r.E(new B.aq(16,-4))
r.E(new B.bz())
q=B.M()
q.r=A.dW.gp(0)
b9.af(r,q)
s=new B.aI(b8,A.ak,b6,b6,B.a([],s))
s.E(new B.b_(-14,-8))
s.E(new B.cn(-34,-6,-18,12))
b8=B.M()
b8.b=A.ae
b8.c=5
b8.r=A.ax.gp(0)
b9.af(s,b8)
b8=B.M()
if(b7){s=B.ap(A.cY,A.vc,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.cU
b8.r=s.gp(0)
b9.aE(D.fw9,b8)
if(b7){b8=B.M()
b8.r=A.cY.j(0.3).gp(0)
b8.y=A.nq
b9.P(A.aaQ,24,b8)
for(b8=c1*0.9,u=0;u<4;++u){a6=A.h.F(b8+u*0.25,1)
s=Math.sin(a6*9+u)
r=new B.ar(A.V,A.R,A.X,A.Y,A.W)
r.r=A.c.j(0.6*(1-a6)).gp(0)
b9.P(new B.m(30+s*4,-26-a6*26),3+a6*5,r)}}b8=B.M()
b8.r=A.ax.gp(0)
b9.P(D.eFD,3,b8)
return!0
case"lamp":if(b7){u=A.h.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aI($.U().r,A.ak,b6,b6,B.a([],x.v))
b8.E(new B.b_(-10,-14))
b8.E(new B.aq(-30,24))
b8.E(new B.aq(10,24))
b8.E(new B.aq(8,-14))
b8.E(new B.bz())
s=B.M()
s.r=A.eL.j(0.28*u).gp(0)
b9.af(b8,s)
s=B.M()
s.r=A.eL.j(0.5*u).gp(0)
s.y=A_.Q0
b9.P(D.eJI,24,s)}b8=B.bx(D.fwO,A.hv)
s=$.U()
r=B.M()
r.r=A.cU.gp(0)
b9.aq(b8,r)
r=B.M()
r.r=A.d1.gp(0)
r.c=3
r.d=A.bH
b9.ah(D.eFT,D.aPi,r)
r=B.M()
r.r=A.d1.gp(0)
r.c=3
r.d=A.bH
b9.ah(D.aPi,D.eJJ,r)
a7=new B.aI(s.r,A.ak,b6,b6,B.a([],x.v))
a7.E(new B.b_(-14,-16))
a7.E(new B.aq(6,-26))
a7.E(new B.aq(10,-12))
a7.E(new B.aq(-10,-6))
a7.E(new B.bz())
s=B.M()
s.r=(b7?A.aQ:A.kg).gp(0)
b9.af(a7,s)
b8=B.M()
b8.r=(b7?A.c:A.bl).gp(0)
b9.P(D.eJM,4,b8)
return!0
case"lights":b8=$.U().r
s=x.v
a8=new B.aI(b8,A.ak,b6,b6,B.a([],s))
a8.E(new B.b_(-34,-6))
a8.E(new B.cn(0,22,34,-6))
r=B.M()
r.b=A.ae
r.c=2
r.r=A.hZ.gp(0)
b9.af(a8,r)
for(r=c1*2.4,u=0;u<5;++u){a9=(u+0.5)/5
q=-34+68*a9
p=-6+4*a9*(1-a9)*4*4.2/1*0.75+0
b0=b7&&A.h.F(r+u*0.7,1.8)<1.1
if(b0){b1=new B.ar(A.V,A.R,A.X,A.Y,A.W)
b1.r=D.a7f[u].j(0.6).gp(0)
b1.y=A.Ie
b9.P(new B.m(q+0,p+6),12,b1)}b1=B.a([],s)
b2=new B.aI(b8,A.ak,b6,b6,b1)
b1.push(new B.b_(q-3,p))
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
if(b0)p=D.a7f[u]
else{p=B.ap(D.a7f[u],A.v,0.65)
p.toString}q.r=p.gp(0)
b9.af(b2,q)}return!0}return C.iKB(b9,c0,c1,c2)},
h9:function h9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hva(d){var w=D.mP.h(0,d)
return(w==null?null:w.b)===D.Bv},
iLV(d,e,f){return B.a7(d,!1).ca(B.vM(null,!1,!0,!0,new C.hfr(e,f),A.f2,null,A.q_,new C.hfs(),x.H))},
KN:function KN(d,e){this.a=d
this.b=e},
mw:function mw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hfr:function hfr(d,e){this.a=d
this.b=e},
hfs:function hfs(){},
X0:function X0(d,e,f){this.c=d
this.d=e
this.a=f},
aH8:function aH8(d,e,f){var _=this
_.d=$
_.e=null
_.r=_.f=!1
_.w=-99
_.x=d
_.z=_.y=0
_.bw$=e
_.ab$=f
_.c=_.a=null},
e43:function e43(d,e){this.a=d
this.b=e},
e44:function e44(d,e,f){this.a=d
this.b=e
this.c=f},
e4e:function e4e(d,e,f){this.a=d
this.b=e
this.c=f},
e42:function e42(d,e){this.a=d
this.b=e},
e41:function e41(d,e){this.a=d
this.b=e},
e4f:function e4f(d,e){this.a=d
this.b=e},
e4g:function e4g(d){this.a=d},
e3W:function e3W(d,e){this.a=d
this.b=e},
e3V:function e3V(d,e){this.a=d
this.b=e},
e3U:function e3U(d){this.a=d},
e4c:function e4c(){},
e48:function e48(d){this.a=d},
e49:function e49(d){this.a=d},
e4a:function e4a(d){this.a=d},
e4b:function e4b(d){this.a=d},
e4h:function e4h(d){this.a=d},
e47:function e47(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e45:function e45(){},
e46:function e46(d){this.a=d},
e4d:function e4d(d,e){this.a=d
this.b=e},
e40:function e40(d,e){this.a=d
this.b=e},
e3Z:function e3Z(d){this.a=d},
e4_:function e4_(d){this.a=d},
e3T:function e3T(d){this.a=d},
e3Y:function e3Y(d,e,f){this.a=d
this.b=e
this.c=f},
e3X:function e3X(d){this.a=d},
bBe:function bBe(d,e,f){this.b=d
this.c=e
this.a=f},
ahn:function ahn(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aPQ:function aPQ(){},
a3m(d,e,f,g,h,i){return new C.bA0(d,e,f,g,h,i)},
bA0:function bA0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fFm:function fFm(){},
fFn:function fFn(){},
fFo:function fFo(){},
fFp:function fFp(){},
fFq:function fFq(){},
fFr:function fFr(){},
fFs:function fFs(){},
fFt:function fFt(){},
aaV:function aaV(d){this.a=d},
cr7:function cr7(d){this.a=d},
cr8:function cr8(){},
cr6:function cr6(d,e){this.a=d
this.b=e},
cr5:function cr5(d){this.a=d},
YH:function YH(d){this.a=d},
aIS:function aIS(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.hi$=f
_.mp$=g
_.fm$=h
_.hj$=i
_.bw$=j
_.ab$=k
_.c=_.a=null},
f52:function f52(d){this.a=d},
f4Z:function f4Z(d){this.a=d},
f4Y:function f4Y(d,e){this.a=d
this.b=e},
f50:function f50(d,e){this.a=d
this.b=e},
f5_:function f5_(d,e){this.a=d
this.b=e},
f51:function f51(d){this.a=d},
bBr:function bBr(d,e,f){this.b=d
this.c=e
this.a=f},
Xp:function Xp(d){this.a=d},
bpd:function bpd(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.hi$=d
_.mp$=e
_.fm$=f
_.hj$=g
_.bw$=h
_.ab$=i
_.c=_.a=null},
ebQ:function ebQ(){},
ebR:function ebR(){},
ebL:function ebL(d,e){this.a=d
this.b=e},
ebN:function ebN(d,e){this.a=d
this.b=e},
ebO:function ebO(d){this.a=d},
ebM:function ebM(d){this.a=d},
ebP:function ebP(d){this.a=d},
bw1:function bw1(d,e,f){this.b=d
this.c=e
this.a=f},
Wz:function Wz(d){this.a=d},
boM:function boM(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.hi$=d
_.mp$=e
_.fm$=f
_.hj$=g
_.bw$=h
_.ab$=i
_.c=_.a=null},
dWc:function dWc(){},
dWd:function dWd(){},
dW7:function dW7(){},
dWa:function dWa(d,e){this.a=d
this.b=e},
dW9:function dW9(d,e){this.a=d
this.b=e},
dWb:function dWb(d){this.a=d},
dW8:function dW8(d){this.a=d},
aMq:function aMq(d,e,f){this.a=d
this.b=e
this.c=f},
Xg:function Xg(d){this.a=d},
bp4:function bp4(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
e7C:function e7C(d,e){this.a=d
this.b=e},
e7D:function e7D(d){this.a=d},
e7B:function e7B(d,e){this.a=d
this.b=e},
e7E:function e7E(d){this.a=d},
e7A:function e7A(d,e){this.a=d
this.b=e},
e7F:function e7F(d){this.a=d},
e7z:function e7z(d,e){this.a=d
this.b=e},
e7G:function e7G(d,e){this.a=d
this.b=e},
e7y:function e7y(d,e){this.a=d
this.b=e},
e7H:function e7H(d){this.a=d},
e7x:function e7x(d,e){this.a=d
this.b=e},
e7I:function e7I(d){this.a=d},
e7w:function e7w(d){this.a=d},
e7J:function e7J(d){this.a=d},
e7v:function e7v(d){this.a=d},
e7K:function e7K(d){this.a=d},
e7L:function e7L(d){this.a=d},
e7u:function e7u(d){this.a=d},
br8:function br8(d,e,f){this.b=d
this.c=e
this.a=f},
Y2:function Y2(d){this.a=d},
aI7:function aI7(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
ezM:function ezM(d,e){this.a=d
this.b=e},
ezN:function ezN(d,e,f){this.a=d
this.b=e
this.c=f},
ezL:function ezL(d,e,f){this.a=d
this.b=e
this.c=f},
ezO:function ezO(d){this.a=d},
ezK:function ezK(d){this.a=d},
ezS:function ezS(d){this.a=d},
ezR:function ezR(d,e){this.a=d
this.b=e},
ezQ:function ezQ(d,e){this.a=d
this.b=e},
ezT:function ezT(d,e){this.a=d
this.b=e},
ezP:function ezP(d,e){this.a=d
this.b=e},
ezU:function ezU(d){this.a=d},
Ye:function Ye(d){this.a=d},
aIv:function aIv(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eMU:function eMU(d){this.a=d},
eMV:function eMV(d){this.a=d},
eMS:function eMS(d,e){this.a=d
this.b=e},
eMT:function eMT(d){this.a=d},
eMR:function eMR(d){this.a=d},
eMW:function eMW(d){this.a=d},
eMX:function eMX(d){this.a=d},
eMY:function eMY(d){this.a=d},
eMZ:function eMZ(d,e){this.a=d
this.b=e},
Yy:function Yy(d){this.a=d},
bqm:function bqm(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
f0o:function f0o(){},
f0x:function f0x(){},
f0t:function f0t(d){this.a=d},
f0s:function f0s(){},
f0u:function f0u(d,e){this.a=d
this.b=e},
f0r:function f0r(d,e){this.a=d
this.b=e},
f0v:function f0v(d){this.a=d},
f0q:function f0q(d,e){this.a=d
this.b=e},
f0w:function f0w(d){this.a=d},
f0p:function f0p(d){this.a=d},
Y1:function Y1(d){this.a=d},
bpQ:function bpQ(d,e,f,g,h,i,j,k){var _=this
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
_.hi$=f
_.mp$=g
_.fm$=h
_.hj$=i
_.bw$=j
_.ab$=k
_.c=_.a=null},
eyr:function eyr(){},
eys:function eys(){},
eyk:function eyk(d){this.a=d},
eyj:function eyj(d){this.a=d},
eyl:function eyl(d){this.a=d},
eyi:function eyi(d){this.a=d},
eym:function eym(d){this.a=d},
eyh:function eyh(d){this.a=d},
eyn:function eyn(d,e){this.a=d
this.b=e},
eyg:function eyg(d,e){this.a=d
this.b=e},
eyo:function eyo(d){this.a=d},
eyf:function eyf(d,e){this.a=d
this.b=e},
eyp:function eyp(d){this.a=d},
eye:function eye(d,e){this.a=d
this.b=e},
eyq:function eyq(d){this.a=d},
eyd:function eyd(d,e){this.a=d
this.b=e},
biz:function biz(d,e,f){this.c=d
this.d=e
this.a=f},
aPC:function aPC(){},
bD9:function bD9(){},
aPX:function aPX(){},
bDf:function bDf(){},
aQn:function aQn(){},
bDp:function bDp(){},
aQQ:function aQQ(){},
bDy:function bDy(){},
Kj(d,e,f,g){var w,v,u,t,s,r,q,p=$.avw
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.I)(e),++w)E.mS(d,e[w],f,g)
return}for(p=B.cD(e,0,B.dy(4,"count",x.S),B.T(e).c),v=p.$ti,p=new B.bQ(p,p.gI(0),v.k("bQ<aj.E>")),u=x.H,v=v.k("aj.E"),t=0;p.A();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)E.mS(d,s,f,g)
else B.bM(new B.bh(1000*q),new C.cr3(d,s,f,g),u)}},
cop(d){return C.ies(d)},
ies(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$cop=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aB(),$async$cop)
case 7:r=f
q=B.aW(J.t(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.S(x.N,x.z)
w=1
break}p=A.T.aN(0,q,null)
o=x.N
n=x.z
o=x.f.b(p)?B.a1(p,o,n):B.S(o,n)
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
return B.i($async$cop,v)},
b63(d,e){return C.iet(d,e)},
iet(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b63=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aB(),$async$b63)
case 6:s=g
w=7
return B.b(s.aB("String","ngmy_play_progress_v1_"+d,A.T.au(e,null)),$async$b63)
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
return B.i($async$b63,v)},
cr3:function cr3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
iAI(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.S(x.Y,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.B)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.I)(w),++q){p=w[q]
u.push(B.J(["k",p.b,"x",B.oS(A.h.a1(p.c,4)),"y",B.oS(A.h.a1(p.d,4)),"v",p.e,"l",B.oS(A.h.a1(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.oS(A.h.a1(p.as,3)),"ch",p.at,"vc",B.oS(A.h.a1(p.z,3)),"s",B.oS(A.h.a1(p.ch,2))],s,r))}w=B.a([],x.U)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.I)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.B(f,B.a3(f).k("cl.E"))
A.d.fk(l)
return A.T.au(B.J(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
iL0(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.T.aN(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a7(h)
A.d.a7(a6.b)
v=B.a([],x.fs)
g=x.R
f=g.a(J.t(w,"parts"))
f=J.aM(f==null?A.bK:f)
while(f.A()){u=f.gO(f)
t=i.a(u)
e=B.aW(J.t(t,"k"))
s=e==null?"":e
if(!$.r2().am(0,s)){J.bU(v,null)
continue}d=s
a0=B.aK(J.t(t,"x"))
if(a0==null)a0=0.5
a1=B.aK(J.t(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.um(a2,d,a0,a1)
a3.aut(a2,d,a0,a1)
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
d=B.aW(J.t(t,"bw"))
if(d==null)d=""
r.ay=d
d=B.aK(J.t(t,"c"))
if(d==null)d=r.as
r.as=d
d=B.aK(J.t(t,"ch"))
r.at=A.h.L(d==null?0:d)
d=B.aK(J.t(t,"vc"))
if(d==null)d=0
r.z=d
d=B.aK(J.t(t,"s"))
r.ch=A.h.D(d==null?1:d,1,5.2)
J.bU(v,r)}i=g.a(J.t(w,"wires"))
i=J.aM(i==null?A.bK:i)
h=x.j
while(i.A()){q=i.gO(i)
p=h.a(q)
f=B.aK(J.t(p,0))
o=f==null?a5:A.h.L(f)
f=B.aK(J.t(p,2))
n=f==null?a5:A.h.L(f)
if(o==null||n==null||o<0||n<0||o>=J.ab(v)||n>=J.ab(v))continue
m=J.t(v,o)
l=J.t(v,n)
if(m!=null&&l!=null)a6.aol(m,A.h.L(B.d6(J.t(p,1))),l,A.h.L(B.d6(J.t(p,3))))}i=B.aK(J.t(w,"challenge"))
i=A.h.L(i==null?0:i)
k=B.aR(x.S)
h=g.a(J.t(w,"done"))
h=J.aM(h==null?A.bK:h)
while(h.A()){j=h.gO(h)
J.bU(k,A.h.L(B.d6(j)))}return new B.bu7(i,k)}catch(a4){return a5}},
fXm(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fXm=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.aB(),$async$fXm)
case 7:r=o.aW(n.t(e.a,"ngmy_electronics_lab_v1"))
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
return B.i($async$fXm,v)},
bKc(d){return C.iML(d)},
iML(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bKc=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.aB(),$async$bKc)
case 7:w=6
return B.b(f.aB("String","ngmy_electronics_lab_v1",d),$async$bKc)
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
return B.i($async$bKc,v)},
h3r(d,e,f){var w=0,v=B.j(x.I),u,t,s,r,q,p
var $async$h3r=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(d.c===e&&d.d===f){u=d
w=1
break}$.U()
t=new B.p2(new B.oE())
s=B.vc(t,null)
r=B.M()
r.r=A.c9.gp(0)
s.aE(new B.a5(0,0,e,f),r)
s.bk3(0,d,A.J,B.M())
q=t.nf()
w=3
return B.b(q.w8(e,f),$async$h3r)
case 3:p=h
q.t()
d.t()
u=p
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h3r,v)}},D,V,A3,As,K,F,M,H,At,Au,Av,A4,Aw
J=c[1]
B=c[0]
A=c[2]
W=c[143]
A9=c[181]
A5=c[126]
N=c[90]
Aa=c[153]
A6=c[180]
Ab=c[186]
A7=c[185]
X=c[176]
P=c[46]
Y=c[172]
Ac=c[168]
O=c[179]
Ad=c[189]
Ae=c[194]
Af=c[139]
Ag=c[170]
Ah=c[106]
Z=c[107]
Ai=c[187]
Aj=c[92]
Ak=c[191]
Al=c[81]
A_=c[174]
U=c[89]
Am=c[93]
Q=c[163]
An=c[147]
A0=c[159]
R=c[193]
S=c[164]
A1=c[178]
T=c[177]
A2=c[190]
Ao=c[137]
E=c[34]
I=c[3]
G=c[45]
L=c[141]
Ap=c[135]
Aq=c[155]
Ar=c[183]
A8=c[192]
C=a.updateHolder(c[23],C)
D=c[173]
V=c[188]
A3=c[182]
As=c[31]
K=c[33]
F=c[133]
M=c[131]
H=c[175]
At=c[104]
Au=c[121]
Av=c[71]
A4=c[184]
Aw=c[62]
C.amY.prototype={}
C.XM.prototype={
R(){return new C.bpE(B.S(x.N,x.i),new B.au(A.ay,$.ay()),B.a([],x.X),B.a([],x.eZ),B.m4(0,null,null))}}
C.bpE.prototype={
gYx(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
t(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
this.ch.t()
this.a3()},
Rc(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Rc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aS.bl$.d.c
if(s!=null)s.j9()
p.bN(0,A.ck)
t.l(new C.ert(t))
t.a.toString
p=t.gYx()
w=3
return B.b(C.bFt(C.inE(q,C.iAt(p),o,t.ay)),$async$Rc)
case 3:s=e
r=s==null?null:J.j_(s)
if(r==null||r.length===0||A.a.Y(r,"{"))r=C.iC_(q,p,o)
if(t.c==null){w=1
break}t.l(new C.eru(t,o,r))
$.aS.U$.push(new C.erv(t))
case 1:return B.h(u,v)}})
return B.i($async$Rc,v)},
a_D(d){return this.c7k(d)},
b0t(){return this.a_D(null)},
c7k(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a_D=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aS.bl$.d.c
if(s!=null)s.j9()
t.f.sb1(0,o)
t.l(new C.erG(t))
G.dI(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bFt(C.ivl(o)),$async$a_D)
case 3:r=n.a=m.iKG(f)
p.b=""
if(r!=null&&!C.iAu(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.iC0(o)
q=B.ag(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.amY(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.l(new C.erH(p,t))
t.cde(p.a)
case 1:return B.h(u,v)}})
return B.i($async$a_D,v)},
cde(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
A.d.a7(w)
w=++m.as
v=m.gYx()
A.d.a7(v.a)
A.d.a7(v.b)
m.e.a7(0)
m.l(new C.erC(m))
t=d.d
s=B.S(x.N,x.Y)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.erA(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.erD(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.I)(r),++u){p.$2(o,new C.erE(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.erF(m,d))},
C(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bk.j(0.1),g=B.n(16),f=B.K(A.bk.j(0.35),A.r,1)
if(m.x)j=B.A(B.a([D.fEx,A.bd,B.E(B.c(m.Q,l,l,l,l,l,l,A.yf,l,l,l),1)],x.p),A.l,l,A.e,A.i,0,l,l)
else if(k==null)j=D.h58
else{w=B.E(B.c(k.a,l,l,l,l,l,l,A.Ma,l,l,l),1)
v=x.p
w=B.a([B.A(B.a([w,B.c(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fPI,l,l,l)],v),A.l,l,A.e,A.i,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.C(A.rm,B.c(u,l,l,l,l,l,l,D.fSD,l,l,l),l))
w.push(A.cR)
w.push(B.c(k.b,l,l,l,l,l,l,A0.FY,l,l,l))
u=k.e
if(u.length!==0){t=A.aQ.j(0.12)
s=B.n(10)
w.push(B.q(l,B.c(u,l,l,l,l,l,l,D.fVk,l,l,l),A.f,l,l,new B.p(t,l,l,s,l,l,A.m),l,l,l,A.hp,A.ct,l,l,l))}w.push(A.aj)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
t=B.c(t,l,l,l,l,l,l,A.mj,l,l,l)
q=u[r]
s=s?A.c:A.aE
w.push(new B.C(A.HS,new B.c_(A.aJ,A.e,A.i,A.B,l,A.p,l,0,B.a([t,A.b7,new B.bu(1,A.b9,B.c(q,l,l,l,l,l,l,new B.H(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.I)(j),++p){o=j[p]
t=A.bk.j(0.3)
s=new B.aQ(12,12)
s=B.q(l,B.c(o.a,l,l,l,l,l,l,A.Xn,l,l,l),A.f,l,l,new B.p(t,l,l,new B.bc(s,s,s,s),l,l,A.m),l,l,l,l,A.h0,l,l,l)
t=A.c.j(0.07)
q=new B.aQ(12,12)
A.d.u(w,B.a([A.N,new B.bK(A.a9,l,l,s,l),A.at,B.q(l,B.c(o.b,l,l,l,l,l,l,D.h0d,l,l,l),A.f,l,l,new B.p(t,l,l,new B.bc(q,q,q,q),l,l,A.m),l,l,l,l,A.bS,l,l,l)],v))}if(m.ax)w.push(D.eLf)
j=B.cb(B.w(w,A.B,l,A.e,A.i,0,A.p),A.t,m.ch,A.y,l,l,l,l,l,A.ah)}w=x.p
g=B.w(B.a([B.al7(B.q(l,j,A.f,l,new B.aY(0,1/0,0,i),new B.p(h,l,f,g,l,l,A.m),l,l,l,D.bHm,A.es,l,l,1/0),A.b0,A.ig),B.E(C.hAj(m.gYx(),l,l,m.e),1)],w),A.l,l,A.e,A.i,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new E.e6("Ask about it",i,new C.erK(m),l,A.bk,l),new E.e6("Invent something new",!i,new C.erL(m),l,A.bk,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dFZ[p]
i.push(new E.e6(n,!1,new C.erM(m,n),l,A.bk,l))}f.push(new E.fm(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.dlG[p]
i.push(new E.e6(r,!1,new C.erN(m,r),l,A.bk,l))}f.push(new E.fm(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aO(l,A.M,!1,l,!0,A.t,l,B.aP(),m.f,l,l,l,l,l,2,B.bB(l,new B.b6(4,B.n(16),A.a1),l,A.f3,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.jP,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.am,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.erO(m,k),l,!1,l,l,!1,l,!0,l,A.ad,l,l,l,l,l,l,l,l,l,l,l,A.dr,!0,A.a8,l,A.ao,l,A.Xb,l,l),1)
h=m.at
v=h&&j?D.bXE:A.eb
j=h&&j?"Ask":"Invent"
f.push(B.A(B.a([i,A.aa,new E.fO(v,j,new C.erP(m,k),A.bk,l)],w),A.l,l,A.e,A.i,0,l,l))
return E.m5(A.bk,A.fh,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.w(f,A.l,l,A.e,A.P,0,A.p))}}
C.Ht.prototype={}
C.vU.prototype={}
C.Y9.prototype={
R(){return new C.aIm(A.J,A.J,A.az,B.aR(x.S),$,A.bI,0,B.a([],x.X),null,null)}}
C.aIm.prototype={
gb1P(){var w,v,u,t=this,s=D.JA[t.cx],r=D.Ux[t.cy],q=D.EB[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.e9(w,w.r,B.a3(w).c),v=w.$ti.c;w.A();){u=w.d
p.push(D.aE0[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cH(p,0,new C.eH0())},
ga5r(){return D.JA[this.cx].d/this.gb1P()},
gaTF(){return 0.1*(D.JA[this.cx].d/0.9)/D.Ux[this.cy].d},
Z(){this.a4()
this.mA()
C.cop("rocket_lander").bB(new C.eHk(this),x.k)},
cdn(){var w=this
w.ay=A.h.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cX.ai()*0.6
w.f=new B.m(0.15+A.cX.ai()*0.7,0.08)
w.r=new B.m((A.cX.ai()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
mT(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.l(new C.eHl())
return}w=D.u9[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.h.D(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.m(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga5r()
v=v.a6(0,new B.m(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaTF())}if(m.dy){t=m.r
v=v.aI(0,t.aK(0,t.gcD()*6*D.aG5[m.d]))}t=m.r=m.r.a6(0,v.aK(0,d))
s=m.f=m.f.a6(0,t.aK(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new B.m(-t.a*0.4,t.b)
t=new B.m(A.h.D(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new B.m(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.EB[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b63("rocket_lander",B.J(["unlocked",t],x.N,x.z))
C.Kj("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga5r()/(D.u9[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.h.a1(m.ga5r()/(D.u9[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
G.dI(80,"",500,0,0.6,"noise")
B.fZ()}}if(m.Q&&m.x>0&&A.n.F(A.h.bb(m.CW*20),2)===0)G.dI(90,"",70,0,0.12,"noise")
m.l(new C.eHm())},
ajs(d,e,f,g,h){var w,v=null,u=B.c(d,v,v,v,v,v,v,D.fS7,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new E.e6(e[w].a,f.$1(w),new C.eH2(this,g,w),v,h,v))
return new B.C(A.ez,B.w(B.a([u,A.cR,B.bX(A.bG,s,A.bq,v,6,6)],t),A.B,v,A.e,A.i,0,A.p),v)},
bLT(d){var w,v,u,t,s=this,r=null,q=s.ga5r()/(D.u9[s.d].b/9.81*0.28)>=1,p=A.h.S(1/s.gaTF()),o=D.aG5[s.d],n=B.n(24),m=d.c,l=B.K(m.j(0.6),A.r,1)
m=B.a([B.c("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.at,B.c(d.d+" Gravity here: "+B.v(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.adN,r,r,r),A.S,s.ajs("ENGINE: "+D.JA[s.cx].b,D.JA,new C.eGS(s),new C.eGT(s),A.cY),s.ajs("FUEL TANK: "+D.Ux[s.cy].b,D.Ux,new C.eGU(s),new C.eGV(s),A.bf),s.ajs("LANDING GEAR: "+D.EB[s.db].b,D.EB,new C.eGW(s),new C.eGX(s),A.aH),s.ajs("EXTRAS (tap to add)",D.aE0,new C.eGY(s),new C.eGZ(s),A.bk)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.hox)
o=(q?A.bf:A.c3).j(0.14)
w=B.n(12)
v=A.h.a1(s.gb1P(),2)
u=A.h.a1(s.ga5r()/(D.u9[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.q(r,B.c("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.h.S(D.EB[s.db].d*100)+".",r,r,r,r,r,r,D.fSN,r,r,r),A.f,r,r,new B.p(o,r,r,w,r,r,A.m),r,r,r,A.hp,A.bS,r,r,r))
m.push(A.S)
m.push(new B.bK(A.z,r,r,new E.fO(A.ol,"Launch",new C.eH_(s),A.bf,r),r))
return B.at(B.q(r,B.cb(B.w(m,A.B,r,A.e,A.P,0,A.p),A.t,r,A.y,r,r,A.bR,r,r,A.ah),A.f,r,A.mo,new B.p(D.bwU,r,l,n,r,r,A.m),r,r,r,A.bS,r,r,r,r),r,r,r)},
b31(d,e,f,g){var w=null,v=f?A.cY:A.c.j(0.1),u=B.n(18),t=B.K(A.aT,A.r,1)
return B.na(A.j6,B.q(w,B.V(d,A.c,w,w,w,30),A.f,w,w,new B.p(v,w,t,u,w,w,A.m),w,62,w,w,w,w,w,g),w,new C.eGP(e),new C.eGQ(e),w,w,w,w,new C.eGR(e))},
b30(d,e,f){return this.b31(d,e,f,74)},
C(d){var w,v,u,t,s=this,r=null,q=B.cg(new C.eHd(s,D.u9[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.u9[w].a:"\ud83d\udd12"
o.push(new E.e6(v,s.d===w,new C.eHe(s,w),r,D.u9[w].c,r))}v=B.a([s.b30(F.atn,new C.eHf(s),s.y),A.bd,s.b31(A.vH,new C.eHg(s),s.Q,130),A.bd,s.b30(A.Rp,new C.eHh(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?A.aH:A.c.j(0.1)
t=B.n(18)
A.d.u(v,B.a([A.bd,B.aA(r,B.q(r,D.c15,A.f,r,r,new B.p(u,r,B.K(A.aT,A.r,1),t,r,r,A.m),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eHi(s),r,r,r,r,r,r,!1,A.a4)],p))}return E.m5(A.cY,A.fh,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.w(B.a([new E.fm(o,"WORLD",r),B.A(v,A.l,r,A.ba,A.i,0,r,r)],p),A.l,r,A.e,A.P,0,A.p))}}
C.bmv.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=this.b,l=D.u9[m.d],k=a1.a,j=a1.b,i=0+k,h=0+j,g=$.U(),f=B.M(),e=l.c,d=B.ap(I.a18,e,0.25)
d.toString
f.san(new B.a6(A.aV,A.b1,A.w,B.a([F.ak_,d],x.O),n,n).az(0,new B.a5(0,0,i,h)))
a0.aE(new B.a5(0,0,i,h),f)
w=new B.e7()
w.cW(5)
for(v=0;v<70;++v){i=w.ai()
h=w.ai()
f=w.ai()
d=new B.ar(A.V,A.R,A.X,A.Y,A.W)
d.r=A.c.j(0.2+w.ai()*0.5).gp(0)
a0.P(new B.m(i*k,h*j*0.8),f*1.2+0.3,d)}u=j*0.88
i=x.v
h=B.a([],i)
t=new B.aI(g.r,A.ak,n,n,h)
t.E(new B.b_(0,u+14))
s=new B.e7()
s.cW(2)
for(r=0;r<=k;r+=18){g=new B.aq(r,u+(Math.abs(r/k-m.ax)<m.ay/2+0.02?14:14-s.ai()*18))
h.push(g)
f=t.f
if(f!=null)g.aj(f)
t.ac()}t.E(new B.aq(k,j))
t.E(new B.aq(0,j))
t.E(new B.bz())
h=$.U()
g=B.M()
g.r=B.ap(e,A.v,0.6).gp(0)
a0.af(t,g)
q=B.c1(new B.m(m.ax*k,u+10),8,m.ay*k)
g=B.bx(q,A.jL)
e=B.M()
e.r=A.bh.gp(0)
a0.aq(g,e)
e=B.bx(q.cu(2),A.pr)
g=B.M()
g.b=A.ae
g.c=2
g.r=A.c.j(0.5+0.3*Math.sin(m.CW*4)).gp(0)
a0.aq(e,g)
if(m.as==="ready")return
g=m.f
f=a0.c
J.bs(f.save())
f.translate(g.a*k,g.b*j)
a0.jC(0,m.w)
k=m.as
if(k==="crashed"){m=B.M()
m.r=A.cY.j(0.6).gp(0)
m.y=A_.Q0
a0.P(A.J,34,m)
f.restore()
return}if(m.Q&&m.x>0&&k==="flying"){k=h.r
p=new B.aI(k,A.ak,n,n,B.a([],i))
p.E(new B.b_(-8,18))
p.E(new B.aq(0,44+Math.sin(m.CW*40)*8))
p.E(new B.aq(8,18))
p.E(new B.bz())
m=B.M()
m.r=A.aQ.gp(0)
a0.af(p,m)
k=new B.aI(k,A.ak,n,n,B.a([],i))
k.E(new B.b_(-4,18))
k.E(new B.aq(0,32))
k.E(new B.aq(4,18))
k.E(new B.bz())
m=B.M()
m.r=A.c.gp(0)
a0.af(k,m)}m=h.r
o=new B.aI(m,A.ak,n,n,B.a([],i))
o.E(new B.b_(0,-26))
o.E(new B.cn(14,-10,11,18))
o.E(new B.aq(-11,18))
o.E(new B.cn(-14,-10,0,-26))
o.E(new B.bz())
k=B.M()
k.san(F.awo.az(0,D.fvX))
a0.af(o,k)
k=B.M()
k.r=A.aH.gp(0)
a0.P(H.wf,5,k)
k=new B.aI(m,A.ak,n,n,B.a([],i))
k.E(new B.b_(-11,6))
k.E(new B.aq(-20,20))
k.E(new B.aq(-11,18))
k.E(new B.bz())
j=B.M()
j.r=A.aC.gp(0)
a0.af(k,j)
i=new B.aI(m,A.ak,n,n,B.a([],i))
i.E(new B.b_(11,6))
i.E(new B.aq(20,20))
i.E(new B.aq(11,18))
i.E(new B.bz())
m=B.M()
m.r=A.aC.gp(0)
a0.af(i,m)
f.restore()},
aC(d){return!0}}
C.aQw.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bF()}}
C.bDr.prototype={
t(){var w,v,u
for(w=this.hj$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hi$
w===$&&B.d()
w.t()
this.bDF()}}
C.aWS.prototype={}
C.a5Q.prototype={}
C.bfk.prototype={}
C.Wy.prototype={
R(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.eB(["skin"],x.N),o=new Float32Array(0)
return new C.aGM(w,v,u,t,s,r,q,new B.cB(null,x.A),p,D.Nf,D.Nf,A.az,A.cX,o,new Int32Array(0),$,A.bI,0,B.a([],x.X),null,null)}}
C.aGM.prototype={
Z(){var w=this
w.a4()
w.mA()
w.as=new C.cav(w.gcmR())
new C.dW5(w).$0()
return},
t(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a2(0)
v.d=null}this.bCI()},
cmS(d){var w,v=this
if(v.c==null)return
w=J.a0(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.fj(0,B.J(["t","init","data",$.hKB],x.N,x.z))
v.at=!0
v.ay=""
v.aDy()
break
case"parts":v.l(new C.dVG(v))
break
case"pick":v.l(new C.dVH(v,d))
break
case"shot":v.alk(B.v(w.h(d,"data")))
break
case"error":$.an.$1("[body viewer] "+B.v(w.h(d,"text")))
if(v.c!=null&&!v.ax)v.l(new C.dVI(v))
break}},
aDy(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.aBQ[q.cx]
v=new C.dVJ()
u=q.ch
u=B.B(u,B.a3(u).k("cl.E"))
A.d.fk(u)
t=x.N
s=B.J(["layers",u,"skinMode",q.CW,"tone","#"+B.v(v.$1(w.b))+B.v(v.$1(w.c))+B.v(v.$1(w.d)),"sel",q.cy,"bpm",A.h.S(q.k4),"spin",q.go],t,x.cK)
r=A.T.au(s,null)
if(r===q.ay)return
q.ay=r
v=q.as
if(v!=null){u=B.S(t,x.z)
u.n(0,"t","state")
u.u(0,s)
v.fj(0,u)}},
alk(d){return this.cEu(d)},
cEu(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$alk=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cM.aL(A.a.aV(d,A.a.c8(d,",")+1))
w=6
return B.b(B.ayU(B.a([B.cKY(r,"image/png","body.png")],x.fH),null,"Made in NGMY Core Protocol"),$async$alk)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.M(x.q).f.T(I.aXV)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$alk,v)},
aCX(d){var w=d.b
if(w==="skin")return this.CW>0
return this.ch.q(0,w)},
mT(d){var w,v=this
if(v.d==null)return
w=(v.k3+=d)*v.k4/60
if(v.ok&&v.ch.q(0,"organ")&&A.h.bb(w)!==A.h.bb(v.p1)){E.YA("kick",0,0.4)
v.W3(170,new C.dW6())}v.p1=w
return},
agP(d){var w,v,u,t,s=this
s.l(new C.dVK(s,d))
if(d==null){s.fy=D.Nf
s.fr=1
w=s.as
if(w!=null)w.fj(0,B.J(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.T(w).k("X<1>")
u=B.B(new B.X(w,new C.dVL(d),v),v.k("L.E"))
t=A.d.gH(u).b
if(t!=="skin"&&!s.ch.q(0,t)){s.ch.K(0,t)
if(s.CW===2)s.CW=1}s.aDy()
w=s.as
if(w!=null)w.fj(0,B.J(["t","focus","group",d],x.N,x.z))
s.id=0
s.cH1(t,d)
return},
cH1(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){E.YA("kick",0,0.8)
this.W3(260,new C.dVM())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")G.dI(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.W3(w*70,new C.dVN(this))
else if(A.a.q(e,"intestine")||e==="Stomach")G.dI(110,"",360,0.7,0.3,"saw")
else E.hpf("organic",6+A.n.F(e.length,8),200,0.6)
break
case"bone":G.dI(210+e.length*4,"",80,0.6,0.55,"tri")
G.dI(2400,"",20,0,0.3,v)
break
case"muscle":G.dI(70,"",150,1,0.6,"sine")
break
case"vessel":G.dI(300,"",380,0.4,0.22,v)
E.YA("kick",0,0.3)
break
default:E.hpf("organic",2+A.n.F(e.length,6),200,0.4)}},
cLO(d){this.l(new C.dVP(this,d))},
b3k(){var w,v,u,t,s,r,q,p=this,o=B.aR(x.N)
for(w=p.d.e,v=w.length,u=p.ch,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
if(p.aCX(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.K(0,s.a)}q=B.B(o,o.$ti.k("cl.E"))
w=q.length
if(w===0)return
p.p3=q[p.RG.aw(w)]
p.R8=""},
c3_(d){var w,v,u=this
u.id=0
if(u.p2&&u.p3!=null){if(d==null)return
w=d===u.p3
u.l(new C.dVD(u,w,d))
v=x.t
C.Kj("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.W3(1100,new C.dVE(u))
return}if(d==null){if(u.cy!=null)u.agP(null)
return}u.agP(d)},
c6C(d,e){var w,v=this,u=null,t=B.n(18),s=B.K(A.c7.j(0.5),A.r,1)
if(v.p2){w=v.p3
w=B.c(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p4+"\n"+v.R8,u,u,u,u,u,u,D.fO1,u,u,u)}else if(d==null||e==null)w=D.h2r
else{w=x.p
w=B.A(B.a([B.E(B.w(B.a([B.c(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hl,u,u,u),A.cR,B.c(e.b,u,u,u,u,u,u,A0.FY,u,u,u)],w),A.B,u,A.e,A.P,0,A.p),1),B.aJ(u,u,u,u,D.c3P,u,u,u,new C.dVF(v),u,u,u,u,"Back to the whole body",A.cp)],w),A.B,u,A.e,A.i,0,u,u)}return B.q(u,w,A.f,u,u,new B.p(I.a_l,u,s,t,u,u,A.m),u,u,u,u,X.aoC,u,u,u)},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:D.dSj.h(0,g)
i.aDy()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.dxg
u=v.length
t=i.ch
s=0
for(;s<v.length;v.length===u||(0,B.I)(v),++s){r=v[s]
if(i.aCX(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.q(w,q))w.push(q)}v=x.p
u=B.a([B.aJ(h,h,h,h,I.pe,h,h,h,new C.dVW(i),h,h,h,h,"Share",h)],v)
q=B.a([],v)
p=i.as
if((p==null?h:p.b!=null)===!0){p=p.b
q.push(p==null?A.bL:B.Cl(h,A.qw,p))}p=i.ax
o=p?0:1
q.push(new B.dp(p,B.xV(B.q(A.z,B.w(D.dHG,A.l,h,A.e,A.P,0,A.p),A.f,h,h,D.bbc,h,h,D.hRy,h,h,h,h,h),A.b0,A.nm,o),h))
q=B.w(B.a([B.E(new B.am(A.a0,h,A.b6,A.t,q,h),1),new B.C(F.aoi,i.c6C(g,f),h)],v),A.l,h,A.e,A.i,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){n=D.dnv[s]
o=n.a
m=o==="skin"
if(m){l=i.CW
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=n.b
o=m?i.CW>0:t.q(0,o)
p.push(new E.e6(l,o,new C.dVX(i,n),n.c,A.c7,h))}p=B.a([new E.fm(p,h,h)],v)
if(!i.p2&&w.length!==0){o=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.I)(w),++s){k=w[s]
o.push(new E.e6(k,k===i.cy,new C.dVY(i,k),h,A.aQ,h))}p.push(new E.fm(o,"FIND",h))}if(t.q(0,"organ")){o=i.k4
p.push(E.jh(A.c3,""+A.h.S(o)+" beats/min","Heart rate",180,40,new C.dVZ(i),o))}if(i.CW>0&&t.a===0){o=B.a([],v)
for(j=0;j<5;++j)o.push(new E.GD(D.aBQ[j],i.cx===j,new C.dW_(i,j),!1,h))
p.push(new E.fm(o,"SKIN",h))}o=i.go
m=i.p2
l=m?"Quiz on":"Quiz"
v=B.a([new E.e6("Spin",o,new C.dW0(i),D.asl,A.aH,h),new E.fO(A.mH,"Reset view",new C.dW1(i),A.c,h),new E.e6(l,m,new C.dW2(i),A.IU,A.aQ,h)],v)
if(t.q(0,"organ"))v.push(new E.e6("Heartbeat sound",i.ok,new C.dW3(i),T.pb,A.c3,h))
p.push(new E.fm(v,h,h))
return E.m5(A.c7,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.w(p,A.l,h,A.e,A.P,0,A.p))}}
C.aPA.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bF()}}
C.aPB.prototype={
t(){var w,v,u
for(w=this.hj$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hi$
w===$&&B.d()
w.t()
this.bCH()}}
C.cav.prototype={
l3(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aE(e,"</script","<\\/script")
v=$.hRH
$.hRH=v+1
u="ngmy-body-viewer-"+v
$.xR()
$.qj().pG(u,new C.caw(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fL(v,"message",new C.cax(t),!1,x.gA)
t.b=u},
fj(d,e){var w,v
try{w=this.c
if(w!=null){w=B.Sm(w.contentWindow)
if(w!=null)J.akU(w,e,"*")}}catch(v){}}}
C.z7.prototype={}
C.Dw.prototype={}
C.o8.prototype={}
C.bg8.prototype={}
C.WF.prototype={
R(){var w=x.N,v=x.y,u=x.S
return new C.aGO(B.S(w,x.a2),B.a([],x.cB),B.S(w,v),B.S(w,v),B.S(w,u),A.az,A.J,A.J,B.aR(u),$,A.bI,0,B.a([],x.X),null,null)}}
C.aGO.prototype={
Z(){var w=this
w.a4()
w.mA()
w.afJ()
$.aS.U$.push(new C.dXM(w))},
afJ(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$afJ=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aB(),$async$afJ)
case 6:q=e.nW("ngmy_circuit_passed_v1")
r=q==null?A.M:q
if(s.c!=null)s.l(new C.dXq(s,r))
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
return B.i($async$afJ,v)},
ag5(d){return this.caS(d)},
caS(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$ag5=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.K(0,d)
u=3
w=6
return B.b(B.aB(),$async$ag5)
case 6:r=f
q=s.cx
p=B.a3(q).k("ks<cl.E,o>")
q=B.B(new B.ks(q,new C.dXt(),p),p.k("L.E"))
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
return B.i($async$ag5,v)},
aBn(d,e,f,g){var w="c"+this.y++,v=new C.Dw(w,e,f,g)
this.d.n(0,w,v)
return v},
n8(d,e,f){return this.aBn(0,e,f,0)},
af2(d,e){var w
if(D.B3.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a6(0,new B.m(-36,w))},
uO(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aXW(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fm$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.ds(w,w.r,w.e),r=!1;s.A();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.n.ed(m,D.d49[A.n.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.uO(p,0)&&n.uO(p,1)
break
case"or":p=q.a
o=n.uO(p,0)||n.uO(p,1)
break
case"xor":p=q.a
o=n.uO(p,0)!==n.uO(p,1)
break
case"nand":p=q.a
o=!(n.uO(p,0)&&n.uO(p,1))
break
case"nor":p=q.a
o=!(n.uO(p,0)||n.uO(p,1))
break
case"not":o=!n.uO(q.a,0)
break
default:o=n.uO(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bWq(){return this.aXW(null)},
mT(d){var w,v,u,t,s,r,q,p,o,n=this
n.bWq()
if(!n.ax)return
for(w=n.d,w=new B.bb(w,B.a3(w).k("bb<2>")).gae(0),v=new B.eu(w,new C.dXN()),u=n.f,t=n.w,s=0;v.A();){r=w.gO(0).a
if(u.h(0,r)===!0){q=n.fm$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fm$)
o=s+1
G.dI(520+90*A.n.F(s,4),"",200,0,0.25,"square")
s=o}}},
aBo(d){var w=this
w.d.a7(0)
A.d.a7(w.e)
w.f.a7(0)
w.r.a7(0)
w.cy=null},
mC(d,e){var w=this.x
return new B.m(d*w.a,e*w.b)},
axv(d){var w=this
if(w.x.B(0,A.az)){$.aS.U$.push(new C.dXo(w,d))
return}w.l(new C.dXp(w,d))},
cHk(d){this.l(new C.dXu(this,d,$.bKA()[d]))},
cfL(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bKA()[a0]
v=d.d
u=B.a3(v).k("bb<2>")
t=u.k("X<L.E>")
s=t.k("L.E")
r=B.B(new B.X(new B.bb(v,u),new C.dXj(),t),s)
A.d.b_(r,new C.dXk())
q=B.B(new B.X(new B.bb(v,u),new C.dXl(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.l(new C.dXm(d,w))
return}u=d.r
p=B.dE(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.n.dK(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.n.h8(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aXW(0)
h=m.h(0,A.d.gH(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.lF(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aJ(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a7(0)
u.u(0,p)
d.l(new C.dXn(d,o,a0))},
aCs(d){var w,v,u,t,s=this.d,r=B.a3(s).k("bb<2>")
s=B.B(new B.bb(s,r),r.k("L.E"))
r=B.T(s).k("dn<1>")
s=new B.dn(s,r)
s=new B.bQ(s,s.gI(0),r.k("bQ<aj.E>"))
w=d.a
r=r.k("aj.E")
v=d.b
while(s.A()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cpr(d){var w,v,u,t,s,r=this.d,q=B.a3(r).k("bb<2>")
r=B.B(new B.bb(r,q),q.k("L.E"))
q=B.T(r).k("dn<1>")
r=new B.dn(r,q)
r=new B.bQ(r,r.gI(0),q.k("bQ<aj.E>"))
w=d.a
v=d.b
q=q.k("aj.E")
while(r.A()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c6v(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.ds(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.A();){r=w.d
q=D.B3.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.af2(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.y(p,o)
s=l}}}return t},
bVa(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.af2(p,o)
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
cfN(d){var w,v,u,t=this,s=t.aCs(d)
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
t.l(new C.dXv())
return}u=t.bVa(d)
if(u!=null)t.l(new C.dXw(t,u))
else t.l(new C.dXx(t))},
aAb(d){return this.c9P(d)},
c9P(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$aAb=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.aCs(d)
if(s==null){w=1
break}B.jJ()
t.l(new C.dXs(t,s))
case 1:return B.h(u,v)}})
return B.i($async$aAb,v)},
bHC(d){if(this.x.B(0,A.az))return
this.l(new C.dXi(this,d,A.cX))
B.f4()},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bKA()[g]
g=x.p
v=B.a([B.aJ(h,h,h,h,B.V(i.ax?T.pb:A1.u4,A.ab,h,h,h,21),h,h,h,new C.dXG(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.n(16)
s=A.cw.j(0.14)
r=B.K(A.cw.j(0.5),A.r,1)
q=B.a([B.c("Challenge: "+w.a,h,h,h,h,h,h,D.fN8,h,h,h),B.c(w.b,h,h,h,h,h,h,A.XB,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.C(A.kQ,B.c(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.bf:A.f1,h,h,h,h,h,h,h,h,12,h,h,A.C,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.q(h,B.A(B.a([B.E(B.w(q,A.B,h,A.e,A.i,0,A.p),1),B.bH(D.hej,h,i.gcfK(),B.bp(A.cw,h,h,h,h,h,h,h,h,h,h,A.cp))],g),A.l,h,A.e,A.i,0,h,h),A.f,h,h,new B.p(s,h,r,t,h,h,A.m),h,h,h,U.PC,D.bI5,h,h,1/0))}u.push(B.E(B.cg(new C.dXH(i)),1))
if(f!=null){t=B.n(14)
s=A.c.j(0.06)
r=f.b
u.push(B.q(h,B.c(D.B3.h(0,r).a+": "+D.B3.h(0,r).e,h,h,h,h,h,h,Aj.uG,h,h,h),A.f,h,h,new B.p(s,h,h,t,h,h,A.m),h,h,h,A.a2m,A.bS,h,h,1/0))}u=B.w(u,A.l,h,A.e,A.i,0,A.p)
t=B.a([],g)
for(s=D.B3.gdW(D.B3),s=s.gae(s);s.A();){r=s.gO(s)
q=new B.aQ(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ax(o.j(0.5),1,A.r,-1)
t.push(B.aA(h,B.q(h,B.w(B.a([B.V(p.b,o,h,h,h,20),A.bs,B.c(p.a,h,h,h,h,h,h,D.b_0,h,h,h)],g),A.l,h,A.e,A.P,0,A.p),A.f,h,h,new B.p(n,h,new B.bE(m,m,m,m),new B.bc(q,q,q,q),h,h,A.m),h,h,h,A.eW,A.Dg,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dXI(i,r),h,h,h,h,h,h,!1,A.a4))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dCe[l]
s.push(new E.fO(A.Rq,k.b,new C.dXJ(i,k),A.cw,h))}s.push(new E.fO(I.xv,"Clear",new C.dXK(i),A.c3,h))
r=B.a([],g)
for(j=0;q=$.bKA(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?A.e8:A.m9
o=i.ay
n=i.cx.q(0,j)?A.bf:A.bu
r.push(new E.e6(q.a,o===j,new C.dXL(i,j),p,n,h))}return E.m5(A.cw,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.w(B.a([new E.fm(t,"PARTS",h),new E.fm(s,"TRY",h),new E.fm(r,"TASKS",h)],g),A.l,h,A.e,A.P,0,A.p))}}
C.bgq.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3=a6.a,a4=a6.b
$.U()
w=B.M()
w.r=D.aie.gp(0)
a5.aE(new B.a5(0,0,0+a3,0+a4),w)
v=B.M()
v.r=A.c.j(0.05).gp(0)
for(u=20;u<a4;u+=28)for(t=14;t<a3;t+=28)a5.P(new B.m(t,u),1,v)
for(a3=this.b,a4=a3.e,w=a4.length,s=a3.f,r=x.v,q=a3.d,p=0;p<a4.length;a4.length===w||(0,B.I)(a4),++p){o=a4[p]
n=o.a
m=q.h(0,n)
l=q.h(0,o.b)
if(m==null||l==null)continue
k=m.c
j=k.a+36
k=k.b+0
i=a3.af2(l,o.c)
h=s.h(0,n)===!0
n=$.U()
g=B.a([],r)
f=new B.aI(n.r,A.ak,a2,a2,g)
g.push(new B.b_(j,k))
f.ac()
n=i.a
e=Math.max(40,Math.abs(n-j)*0.5)
d=i.b
d=new B.i7(j+e,k,n-e,d,n,d)
g.push(d)
n=f.f
if(n!=null)d.aj(n)
f.ac()
if(h){n=new B.ar(A.V,A.R,A.X,A.Y,A.W)
n.b=A.ae
n.c=9
n.r=A.bu.j(0.28).gp(0)
n.y=O.p2
a5.af(f,n)}n=new B.ar(A.V,A.R,A.X,A.Y,A.W)
n.b=A.ae
n.c=3.2
n.d=A.bH
n.r=(h?A.eL:A.bz).gp(0)
a5.af(f,n)}a0=a3.as
if(a0!=null&&q.h(0,a0)!=null){a1=q.h(0,a0).c.a6(0,D.KQ)
i=a3.at
a3=i.a
a4=a1.a
e=Math.max(40,Math.abs(a3-a4)*0.5)
r=new B.aI($.U().r,A.ak,a2,a2,B.a([],r))
w=a1.b
r.E(new B.b_(a4,w))
s=i.b
r.E(new B.i7(a4+e,w,a3-e,s,a3,s))
s=B.M()
s.b=A.ae
s.c=3
s.r=A.ab.gp(0)
a5.af(r,s)}for(a3=new B.ds(q,q.r,q.e);a3.A();)this.cfM(a5,a3.d)},
cfM(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.B3.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.c1(a0.c,64,64)
s=B.bx(t,A.k6)
r=w.cy===v
q=s.eN(A.cy)
$.U()
p=B.M()
p.r=A.v.j(0.55).gp(0)
p.y=A.nq
d.aq(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.M()
p.san(new B.bV(A.z,0.5,A.w,g,0,B.a([e.c.j(0.6),A.L],x.O),g,g).az(0,B.c0(a0.c,52)))
d.P(q,52,p)}q=s.eN(A.cO)
p=B.M()
o=e.c
p.r=B.ap(o,A.v,0.65).gp(0)
d.aq(q,p)
n=u?0.35:0
q=B.M()
p=B.ap(o,A.c,0.1+n)
p.toString
m=B.ap(o,A.v,u?0.2:0.45)
m.toString
q.san(new B.a6(A.aV,A.b1,A.w,B.a([p,m],x.O),g,g).az(0,t))
d.aq(s,q)
q=B.M()
q.b=A.ae
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aq(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.p9:D.bYd}else l=e.b
k=C.hr5(B.lF(l.a),30,A.c,l.b,g,A.C)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a5(d,v.aI(0,new B.m(p/2,q.gb4(q)/2)))
j=C.hr5(e.a,10.5,A.c,g,g,A.C)
j.a5(d,a0.c.a6(0,new B.m(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.hr5(f,9,u?A.eL:A.bX,g,g,A.u)
i.a5(d,a0.c.a6(0,new B.m(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b40(d,w.af2(a0,h),o)
this.b40(d,a0.c.a6(0,D.KQ),o)},
b40(d,e,f){var w
$.U()
w=B.M()
w.r=D.aie.gp(0)
d.P(e,8.5,w)
w=B.M()
w.b=A.ae
w.c=2.2
w.r=f.gp(0)
d.P(e,8.5,w)
w=B.M()
w.r=A.c.gp(0)
d.P(e,3.2,w)},
aC(d){return!0}}
C.aPF.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bF()}}
C.bDa.prototype={
t(){var w,v,u
for(w=this.hj$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hi$
w===$&&B.d()
w.t()
this.bCM()}}
C.P_.prototype={
R(){return new C.aH4(B.m4(0,null,null))}}
C.LQ.prototype={
a9(){return"_UnfoldStyle."+this.b}}
C.Bw.prototype={}
C.aH4.prototype={
Z(){this.a4()
B.bM(A.pZ,C.iJC(),x.H)},
cfT(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcs(0).at
v.toString
w.f=v}w.l(new C.e2W(w,e))},
c8t(){var w=this
w.e.t()
w.e=B.m4(w.f,null,null)
w.l(new C.e2V(w))},
t(){this.e.t()
this.a3()},
C(d){var w=this,v=null,u=w.d,t=u==null,s=t&&B.R(d).ax.a===A.dg?A.c:A.c9
return B.pg(t,B.c6(v,s,t?new C.bx0(w.e,w.gcfS(w),new C.e2X(d),v):new C.aLw(u,new B.b9(u.b,x.W)),v,!1,!1,v,!1),new C.e2Y(w,u),x.K)}}
C.byH.prototype={}
C.bx0.prototype={
b41(d,e,f){var w=null,v=B.c(d,w,w,w,w,w,w,B.l(w,w,f?A.bF:A.c,w,w,w,w,w,w,w,w,12.5,w,w,A.u,w,w,!0,w,1.6,w,w,w,w,w,w),w,w,w)
return new B.C(X.a2N,B.w(B.a([v,A.bs,B.c(e,w,w,w,w,w,w,B.l(w,w,f?A.cz:A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.B,w,A.e,A.i,0,A.p),w)},
C(d){var w,v,u,t=this,s=null,r=B.R(d).ax.a===A.dg,q=B.aH(d,A.dM,x.w).w,p=B.aJ(s,s,s,s,B.V(A.eI,r?A.bF:A.ab,s,s,s,20),s,s,D.hS0,t.e,s,s,s,s,s,s)
if(r)w=new B.p(A.c,s,s,B.n(14),A.JD,s,A.m)
else{w=B.a([A.aH.j(0.22),A.aH.j(0.06)],x.O)
v=B.n(14)
w=new B.p(s,s,B.K(A.aH.j(0.75),A.r,1.6),v,B.a([new B.ac(0,A.G,A.aH.j(0.22),A.J,8)],x.V),new B.a6(A.aw,A.aD,A.w,w,s,s),A.m)}v=B.c("\ud83e\uddea Core Protocol",s,s,s,s,s,s,B.l(s,s,r?A.bF:A.c,s,s,s,s,s,s,s,s,15,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)
u=x.p
w=B.A(B.a([p,B.E(B.at(B.q(s,B.w(B.a([v,B.c("Play, make things, keep them.",s,s,s,s,s,s,B.l(s,s,r?A.cz:A.aR,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)],u),A.l,s,A.e,A.P,0,A.p),A.f,s,s,w,s,s,D.hS5,s,A6.apa,s,s,s),s,s,s),1),A.uz],u),A.l,s,A.e,A.i,0,s,s)
v=t.b41("STUDIOS","Play, make things, and keep what you make",r)
$.bKB()
return B.bn(!1,B.w(B.a([B.E(B.vd(0,s,A.t,t.c,A.y,s,s,s,s,s,!1,s,A.ah,!1,B.a([new B.nB(new B.Q(8,q.r.b+6,8,4),new B.l5(w,s),s),new B.l5(v,s),new B.nB(A.ih,B.QK(new B.pj(new C.fjV(d),9,!0,!0,!0,0,B.tL(),s),D.aXK),s),new B.l5(t.b41("SCENES","Each one is a studio too: change the style, colours and words",r),s),new B.nB(D.bIe,B.QK(new B.pj(new C.fjW(t),6,!0,!0,!0,0,B.tL(),s),D.aXK),s)],u)),1)],u),A.l,s,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!1)}}
C.ahH.prototype={
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m.d
if(B.R(d).ax.a===A.dg){w=B.n(20)
v=(A.n.ao(o.c,3)&1)===0
u=B.a8N(v?A.aH:A.bk,20)
v=v?A.aH:A.bk
return B.aD(!1,A.a3,!0,n,B.aN(!1,w,!0,B.eK(B.w(B.a([new B.WD(v,44,m.c,n,n),A.N,B.c(m.a,n,2,A.a2,n,n,n,D.fTx,A.K,n,n),A.cR,B.c(m.b,n,2,A.a2,n,n,n,D.fWr,A.K,n,n)],x.p),A.l,n,A.ba,A.i,0,A.p),n,u,n,A.Dx,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}w=B.n(20)
v=B.n(20)
u=B.ap(L.mv,l,0.3)
u.toString
t=x.O
u=B.a([u,D.alA],t)
s=B.K(l.j(0.6),A.r,1.2)
r=x.V
q=B.a([new B.ac(-4,A.G,l.j(0.22),A.J,14)],r)
p=B.ap(l,A.v,0.45)
p.toString
t=B.a([l,p],t)
r=B.a([new B.ac(0,A.G,l.j(0.5),A.J,12)],r)
return B.aD(!1,A.a3,!0,n,B.aN(!1,w,!0,B.eK(B.w(B.a([B.q(n,B.V(m.c,A.c,n,n,n,24),A.f,n,n,new B.p(n,n,n,n,r,new B.a6(A.aw,A.aD,A.w,t,n,n),A.a6),n,44,n,n,n,n,n,44),A.N,B.c(m.a,n,2,A.a2,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,10.5,n,n,A.u,n,1.15,!0,n,0.5,n,n,n,n,n,n),A.K,n,n),A.cR,B.c(m.b,n,2,A.a2,n,n,n,B.l(n,n,A.c.j(0.6),n,n,n,n,n,n,n,n,9.5,n,n,n,n,1.2,!0,n,n,n,n,n,n,n,n),A.K,n,n)],x.p),A.l,n,A.ba,A.i,0,A.p),n,new B.p(n,n,s,v,q,new B.a6(A.aw,A.aD,A.w,u,n,n),A.m),n,A.Dx,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}}
C.agu.prototype={
C(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.d,j=k.d,i=B.R(d).ax.a===A.dg,h=(A.n.ao(this.c,3)&1)===0?A.aH:A.bk,g=B.n(20)
if(i)w=B.a8N(h,20)
else{w=B.n(20)
v=B.ap(L.mv,A.d.gH(j),0.24)
v.toString
v=B.a([v,D.alA],x.O)
v=new B.p(l,l,B.K(A.d.gH(j).j(0.35),A.r,1),w,B.a([new B.ac(0,A.G,A.v.j(0.4),A.cy,12)],x.V),new B.a6(A.aw,A.aD,A.w,v,l,l),A.m)
w=v}v=x.p
u=B.a([],v)
for(t=k.e,s=x.V,r=x.O,q=0;q<3;++q){p=q===2?0:4
o=new B.aQ(6,6)
if(i){n=B.ap(h,A.c,0.1)
n.toString
n=B.a([n,B.WE(h,!0)[1]],r)}else n=B.a([A.d.gH(j),A.d.gal(j)],r)
m=i?l:B.a([new B.ac(0,A.G,A.v.j(0.45),A.ab2,0)],s)
u.push(B.q(l,B.V(t[q],A.c,l,l,l,11),A.f,l,l,new B.p(l,l,l,new B.bc(o,o,o,o),m,new B.a6(A.a5,A.a9,A.w,n,l,l),A.m),l,17,l,new B.Q(q*4,0,(2-q)*4,p),l,l,l,l))}u=B.w(u,A.l,l,A.e,A.P,0,A.p)
if(i)t=A.bF
else{t=B.ap(A.d.gH(j),A.d.gal(j),0.4)
t.toString}t=B.c(k.b,l,2,A.a2,l,l,l,B.l(l,l,t,l,l,l,l,l,l,l,l,10.5,l,l,A.u,l,1.2,!0,l,0.6,l,l,l,l,l,l),A.K,l,l)
return B.aD(!1,A.a3,!0,l,B.aN(!1,g,!0,B.eK(B.w(B.a([new B.a4(58,l,u,l),A.S,t,A.at,B.V(A.Ea,i?B.WE(h,!0)[1]:A.d.gH(j),l,l,l,18)],v),A.l,l,A.ba,A.i,0,A.p),l,w,l,A.Dx,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,this.e,l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.ai)}}
C.S2.prototype={
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ap(A.d.gal(i),A.v,0.62)
h.toString
w=k.c
v=k.d
h=B.ao(-8,new B.bP(new B.p(h,j,j,B.n(22),j,j,A.m),A.bn,j,j),j,j,2,2,8,j)
u=B.n(22)
t=k.y
s=x.V
r=B.a([new B.ac(0,A.G,A.v.j(0.55),A.KM,26),new B.ac(-6,A.G,A.d.gH(i).j(0.1+0.4*t),A.J,30)],s)
q=B.n(22)
p=B.ap(A.d.gH(i),A.c,0.14)
p.toString
o=A.d.gH(i)
n=A.d.gal(i)
i=B.ap(A.d.gal(i),A.v,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bT(0,new B.bP(new B.p(j,j,j,j,j,new B.a6(A.aw,A.aD,A.w,B.a([p,o,n,i],m),D.dIM,j),A.m),A.bn,j,j),0,0,0),B.ao(j,new B.bP(new B.p(j,j,j,j,j,new B.a6(A.aV,A.b1,A.w,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.m),A.bn,j,j),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bT(0,B.b5(j,j,j,new C.by2(i,j),A.az),0,0,0))
i=A.c.j(0.16)
p=B.K(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ac(0,A.G,A.c.j(0.25*t),A.J,14)],s)
s=B.q(j,B.V(k.f,A.c,j,j,j,28),A.f,j,j,new B.p(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=B.a([B.c(k.r,j,j,j,j,j,j,D.fPy,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.u(p,B.a([A.at,B.c(i,j,1,A.a2,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a7,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.FL)
p.push(B.q(j,j,A.f,j,j,new B.p(A.c.j(0.28),j,j,B.n(3),j,j,A.m),j,5,j,j,j,j,j,w*0.42))
m.push(new B.C(A.hg,B.A(B.a([s,A.eu,B.E(B.w(p,A.B,j,A.e,A.P,0,A.p),1)],l),A.l,j,A.e,A.i,0,j,j),j))
i=k.x
if(i>0)m.push(B.bT(0,new B.dp(!0,B.en(j,A.v.j(A.h.D(i*0.6,0,0.7)),!0),j),0,0,0))
i=B.n(22)
m.push(B.bT(0,new B.dp(!0,new B.bP(new B.p(j,j,B.K(A.c.j(0.3),A.r,1.2),i,j,j,A.m),A.bn,j,j),j),0,0,0))
return new B.a4(w,v,new B.am(A.a0,j,A.ac,A.f,B.a([h,B.bT(0,new B.bP(new B.p(j,j,j,u,r,j,A.m),A.bn,B.bv(q,new B.am(A.a0,j,A.ac,A.t,m,j),A.ap),j),0,0,0)],l),j),j)}}
C.by2.prototype={
a5(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a5(r,-10,s,w)
u=d.c
J.bs(u.save())
u.translate(v.gbD().a,v.gbD().b)
d.jC(0,0.35)
t=B.c1(A.J,(w- -10)*1.6,s-r)
$.U()
s=B.M()
s.san(new B.a6(A.a5,A.a9,A.w,B.a([A.L,A.c.j(0.3),A.L],x.O),null,null).az(0,t))
d.aE(t,s)
u.restore()},
aC(d){return d.b!==this.b}}
C.bxy.prototype={
C(d){var w=null,v=B.n(22),u=B.a([D.buI,D.akC],x.O),t=this.e,s=B.K(A.d.gH(t).j(0.4),A.r,1.2),r=B.a([new B.ac(0,A.G,A.v.j(0.5),A.ky,24)],x.V),q=B.n(22),p=A.d.gH(t)
return new B.a4(this.c,this.d,new B.bP(new B.p(w,w,s,v,r,new B.a6(A.aw,A.aD,A.w,u,w,w),A.m),A.bn,B.bv(q,B.b5(B.at(B.V(A.j8,A.d.gH(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.bf2(p,w),A.az),A.ap),w),w)}}
C.bf2.prototype={
a5(d,e){var w,v,u,t,s,r
$.U()
w=B.M()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=0;s<u;s+=18)d.ah(new B.m(s,0),new B.m(s,t),w)
for(r=0;r<t;r+=18)d.ah(new B.m(0,r),new B.m(u,r),w)
u=e.er(A.J)
$.U()
t=B.M()
t.b=A.ae
t.c=1.4
t.r=v.j(0.35).gp(0)
d.P(u,30,t)},
aC(d){return!1}}
C.aLw.prototype={
R(){return new C.aLx(new B.cB(null,x.A),null,null)}}
C.aLx.prototype={
grk(){var w,v=this,u=v.d
if(u===$){w=B.br(null,D.bFt,null,1,null,v)
w.cU(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
gKD(){var w,v=this,u=v.e
if(u===$){w=B.br(null,A.fQ,null,1,null,v)
w.fu(0,!0)
v.e!==$&&B.bF()
v.e=w
u=w}return u},
gaBp(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gcfP(){var w=this.w
if(w===$){w=B.B(this.a.c.d,x.G)
this.w=w}return w},
gb0b(){var w=this.x
if(w===$){w=B.B(this.a.c.e,x.Z)
this.x=w}return w},
gb0Z(){var w=this.y
if(w===$){w=B.B(this.a.c.f,x.N)
this.y=w}return w},
gbdc(){var w=this.z
if(w===$){w=B.B(this.a.c.r,x.N)
this.z=w}return w},
Z(){this.a4()
var w=this.grk()
w.ds()
w.e2$.K(0,this.gcH2())},
cH3(){var w,v,u,t,s,r,q,p=this,o=p.grk().x
o===$&&B.d()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as&&p.ch<0){switch(p.gaBp().a){case 0:w=D.oq
break
case 1:w=D.w_
break
case 2:w=D.a7i
break
case 3:w=D.oq
break
case 4:w=D.dtx
break
case 5:w=D.w_
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.afO)r=0.09
else r=s===D.afP?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){G.dI(260+90*v,"",260,1.6,0.18,"tri")
u=D.chq[v]
E.mS("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.Kj("bell",D.cqi,1400,0.35)}}p.ax=o},
t(){this.grk().t()
this.gKD().t()
this.bEC()},
a18(){var w=this
w.grk().d6J(0,B.dw(0,0,0,A.h.S(11e3/w.Q),0,0))
w.l(new C.fjB(w))},
cry(){this.grk().bR(0)
this.l(new C.fjA(this))},
a17(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$a17=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:if(r.ch>=0){w=1
break}j=$.aS.bl$.x.h(0,r.f)
i=j==null?null:j.gbg()
if(!(i instanceof B.oG)||i.fy==null){w=1
break}h=r.as
j=r.grk()
j.bR(0)
g=r.gKD()
g.bR(0)
r.l(new C.fjq(r))
f=i.ga0(0)
e=f.a
d=f.b
q=Math.min(3.5,1600/Math.max(e,d))
p=A.h.bb(e*q)
o=A.h.bb(d*q)
n=A.h.S(11/r.Q*20)
m=null
t=4
w=7
return B.b(E.ajX(24*q,20,new C.fjr(r,n,q,p,o),n,o,new C.fjs(r),p),$async$a17)
case 7:l=a3
if(J.ab(l)===0){e=B.be("empty")
throw B.Y(e)}e=r.a.c
d=B.ag("[^a-z0-9]+",!0,!1,!1,!1)
k=B.aE(e.b.toLowerCase(),d,"_")
w=8
return B.b(E.aUH(l,k),$async$a17)
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
break}r.l(new C.fjt(r))
g.fu(0,!0)
j.sp(0,0)
if(h)r.a18()
r.c.M(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.c(m,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a17,v)},
ahe(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$ahe=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gb0Z(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){q=t[r]
l.push(new B.au(new B.bd(q,A.bb,A.aP),$.ay()))}m=B.a([],m)
for(t=u.gbdc(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){p=t[r]
m.push(new B.au(new B.bd(p,A.bb,A.aP),$.ay()))}o=B.B(u.gb0b(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bW(L.mv,null,new C.fjz(u,l,m,o),t,!0,!0,!0,A.mg,!1,!1,x.H),$async$ahe)
case 2:l=B.B(l,x.bO)
A.d.u(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.V$=$.ay()
n.W$=0}return B.h(null,v)}})
return B.i($async$ahe,v)},
C(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gaBp(),e=h.a.c,d=e.b,a0=h.gcfP(),a1=new C.Bw(f,d,e.c,a0,h.gb0b(),h.gb0Z(),h.gbdc())
e=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
e.toString
f=x.p
w=B.a([B.aJ(g,g,g,g,B.V(h.at?T.pb:A1.u4,A.ab,g,g,g,21),g,g,g,new C.fjJ(h),g,g,g,g,"Sound",g),B.aJ(g,g,g,g,D.c7C,g,g,g,h.gcfR(),g,g,g,g,"Edit words and pictures",g),B.aJ(g,g,g,g,I.pe,g,g,g,new C.fjK(h,a2),g,g,g,g,"Share",g)],f)
v=B.a([B.ca(h.gKD(),new C.fjL(h,a1),g),B.cg(new C.fjM(h,a1))],f)
u=h.as
t=u?h.gcrx():h.gcfU()
u=u?D.bXo:A.u1
s=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
s.toString
t=B.A(B.a([B.aJ(g,g,g,g,B.V(u,s,g,g,g,34),g,g,g,t,g,g,g,g,g,A.cp),B.E(B.ca(h.grk(),new C.fjN(h,a2,a1),g),1),B.aJ(g,g,g,g,D.c3F,g,g,g,new C.fjO(h),g,g,g,g,"Replay",A.cp)],f),A.l,g,A.e,A.i,0,g,g)
s=h.Q
u=A.h.a1(s,1)
r=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
r.toString
s=E.jh(r,u+"x","Speed",2.5,0.4,new C.fjP(h),s)
u=B.a([],f)
for(q=0;q<6;++q){p=D.dFw[q]
o=h.r
if(o===$)o=h.r=h.a.c.a
r=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
r.toString
u.push(new E.e6(p.b,o===p.a,new C.fjQ(h,p),p.c,r,g))}r=B.a([],f)
for(n=x.G,q=0;q<10;++q){m=D.chQ[q]
o=h.w
if(o===$){o=B.B(h.a.c.d,n)
h.w=o}l=A.d.gH(o).B(0,A.d.gH(m))?34:28
o=h.w
if(o===$){o=B.B(h.a.c.d,n)
h.w=o}k=A.d.gH(o).B(0,A.d.gH(m))?34:28
o=h.w
if(o===$){o=B.B(h.a.c.d,n)
h.w=o}j=A.d.gH(o).B(0,A.d.gH(m))?A.c:A.aT
o=h.w
if(o===$){o=B.B(h.a.c.d,n)
h.w=o}i=new B.ax(j,A.d.gH(o).B(0,A.d.gH(m))?2.5:1,A.r,-1)
r.push(B.aA(g,B.q(g,g,A.f,g,g,new B.p(g,g,new B.bE(i,i,i,i),g,g,new B.a6(A.aw,A.aD,A.w,m,g,g),A.a6),g,k,g,I.ao7,g,g,g,l),A.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new C.fjR(h,m),g,g,g,g,g,g,!1,A.a4))}u=B.a([t,s,new E.fm(u,"STYLE",g),new E.fm(r,"THEME",g),A.aj],f)
t=h.ch
if(t>=0){s=B.n(6)
a0=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
a0.toString
u.push(new B.C(A.jZ,B.w(B.a([B.bv(s,B.jK(A.by,g,a0,8,g,t,g),A.ap),A.at,B.c("Making your GIF\u2026 "+A.h.S(h.ch*100)+"%",g,g,g,g,g,g,A.nG,g,g,g)],f),A.l,g,A.e,A.i,0,A.p),g))}else{f=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
f.toString
u.push(new B.a4(1/0,g,B.dg(A.om,g,D.hpI,h.gcfQ(),B.bp(f,g,g,g,A.v,g,A.kP,g,g,g,g,g)),g))}return E.m5(e,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.ea(new B.am(A.a0,g,A.b6,A.t,v,g),h.f),d,B.w(u,A.l,g,A.e,A.P,0,A.p))},
bGM(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.oq[r]
p=A.h.D((1-A.ej.aA(0,A.h.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
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
n.kd(p)
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
e.push(new B.cS(0,r*118,0,f,f,f,new B.l3(q,new B.ja(n,f,A.aV,!0,f,new C.S2(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.oq[r]
u=v-0.02
g=A.h.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gH(w)
v=D.oq[r]
t=v+0.12
e.push(new B.cS(0,r*118-3-2,0,f,f,4,new B.n4(new C.bwC(u,g,1-A.h.D((a0-t)/(v+0.22-t),0,1),f),f,A.az,f,f),f))}return new B.a4(a2,358,new B.am(A.a0,f,A.ac,A.f,e,f),f)},
bY1(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.w_[r]
p=A.rf.aA(0,A.h.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.w_[r]
m=q+0.15
l=A.h.D((a0-m)/(q+0.25-m),0,1)
m=D.w_[r]
q=m-0.03
q=A.h.D((a0-q)/(m+0.01-q),0,1)
m=B.dB()
k=m.a
k.$flags&2&&B.ak(k)
k[11]=0.0011
m.kh(n,n,n,1)
m.fP(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new C.S2(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dB()
k.fP(3.141592653589793)
k=new B.ja(k,f,A.z,!0,f,new C.bxy(a2,108,w,f),f)}e.push(new B.cS(0,r*130,0,f,f,f,new B.l3(q,new B.ja(m,f,A.z,!0,f,k,f),f),f))}return new B.a4(a2,378,new B.am(A.a0,f,A.ac,A.f,e,f),f)},
cMh(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a7i[w]
l.push(A.cm.aA(0,A.h.D((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bT(0,B.b5(n,n,n,new C.bAa(d.d,l,D.aDz,m,C.bx_(e,0.4,0.62),f,C.bx_(e,0.45,0.7),n),A.az),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.hrD(g,w)
q=D.aDz[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cS(r,s-q*m*p+12,n,n,t,n,new B.l3(o,B.V(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.hrD(g,w)
r=D.a7i[w]
q=r+0.15
v.push(new B.cS(s,l,n,n,t,n,new B.l3(A.h.D((e-q)/(r+0.25-q),0,1),B.c(u[w],n,n,n,n,n,n,A.XL,A.K,n,n),n),n))}return new B.a4(g,m+90,new B.am(A.a0,n,A.ac,A.f,v,n),n)},
bNa(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cm.aA(0,C.bx_(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bT(0,B.at(B.dQ(B.b5(f,f,f,new C.bw0(A.d.gH(a1),C.bx_(a3,0,0.2),a4,f),new B.aw(a5*0.95,70)),D.eFr),f,f,f),0,0,0))
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
l.fP(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.kh(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.h.F(r,1):-1
w.push(new B.y(o,new B.cS(0,0,0,0,f,f,new B.cp(A.z,f,f,new B.l3(k*(0.45+0.55*o),B.dQ(new B.ja(l,f,A.z,!0,f,new C.S2(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.m(n*a5*0.34,-o*18)),f),f),f)))}A.d.b_(w,new C.fjn())
A.d.u(a0,new B.O(w,new C.fjo(),x.fR))
return new B.a4(a5,330,new B.am(A.a0,f,A.ac,A.f,a0,f),f)},
cfO(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.w_[q]
o=A.h.D((a2-p)/(p+0.22-p),0,1)
n=A.n3.aA(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.w_[q]
m=A.h.D((a2-m)/(m+0.02-m),0,1)
l=D.aFJ[q]
k=B.dB()
k.nl(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.kh(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.w_[q]
g=h+0.1
g=A.h.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cS(0,0,0,0,e,e,new B.cp(A.z,e,e,new B.l3(m,B.dQ(new B.ja(k,e,A.z,!0,e,new C.S2(d,92,w,p,j,i,0,g*s,h,e),e),new B.m(0,l)),e),e),e))
l=D.w_[q]
h=l+0.02
f=A.h.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cS(0,0,0,0,e,e,new B.cp(A.z,e,e,B.dQ(new B.n4(new C.bfJ(w,f,q,e),e,new B.aw(r,212),e,e),new B.m(0,D.aFJ[q])),e),e))}return new B.a4(a4,330,new B.am(A.a0,e,A.ac,A.f,a0,e),e)},
bJM(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.m(-b0,-150),new B.m(b0,-40),D.eFw],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.oq[r]
p=A.h.D((a8-q)/(q+0.2-q),0,1)
o=A.cm.aA(0,p)
q=D.aFT[r]
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
f.nl(l*h+D.dyl[r]*o)
f.fP(l*0.9)
h=0.55+0.45*o
f.kh(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cS(0,0,0,0,a3,a3,new B.cp(A.z,a3,a3,new B.l3(g,B.dQ(new B.ja(f,a3,A.z,!0,a3,new C.S2(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.m(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.oq[r]
i=q+0.17
a2=A.h.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aFT[r]
a6.push(new B.cS(0,0,0,0,a3,a3,new B.cp(A.z,a3,a3,B.dQ(new B.n4(new C.bw2(A.d.gH(w),a2,a3),a3,new B.aw(a4,30),a3,a3),new B.m(0,q+48-4)),a3),a3))}}return new B.a4(b0,330,new B.am(A.a0,a3,A.ac,A.f,a6,a3),a3)}}
C.bwC.prototype={
a5(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a5(w-v,0,w+v,e.b)
q=B.bx(u,A.hG)
$.U()
t=B.M()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.y=O.p2
d.aq(q,t)
t=B.bx(u,A.hG)
q=B.M()
q.r=A.c.j(s).gp(0)
d.aq(t,q)},
aC(d){return d.c!==this.c||d.d!==this.d}}
C.bw0.prototype={
a5(d,e){var w,v,u=this.c,t=B.c1(e.er(A.J),e.b*u,e.a*u)
$.U()
u=B.M()
u.b=A.ae
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.y=A_.Q0
d.c3(t,u)
u=B.M()
u.b=A.ae
u.c=2.5
u.r=w.j(0.7).gp(0)
d.c3(t,u)
u=t.cu(-14)
v=B.M()
v.b=A.ae
v.c=1
v.r=w.j(0.3).gp(0)
d.c3(u,v)},
aC(d){return!0}}
C.bfJ.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.er(A.J),h=this.c,g=A.cm.aA(0,h)
$.U()
w=B.M()
w.b=A.ae
v=1-h
w.c=5*v
u=this.b
w.r=A.d.gH(u).j(0.6*v).gp(0)
d.P(i,40+g*e.a*0.42,w)
t=new B.e7()
t.cW(this.d*17+3)
for(w=40*h*h*3,s=i.a,r=i.b,h=1-h*0.6,q=0;q<26;++q){p=t.ai()*3.141592653589793*2
o=(40+t.ai()*110)*g
n=Math.cos(p)
m=Math.sin(p)
l=t.ai()
k=new B.ar(A.V,A.R,A.X,A.Y,A.W)
j=(q&1)===0?A.d.gH(u):A.c
k.r=j.j(A.h.D(v,0,1)).gp(0)
d.P(new B.m(s+n*o*1.6,r+(m*o+w)),(2+l*3)*h,k)}},
aC(d){return!0}}
C.bw2.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o=e.er(A.J)
for(w=e.a,v=e.b,u=this.b,t=this.c,s=0;s<2;++s){r=A.h.D(t-s*0.18,0,1)
if(r<=0)continue
q=B.c1(o,v*(0.3+r*0.9),w*(0.5+r*0.7))
$.U()
p=new B.ar(A.V,A.R,A.X,A.Y,A.W)
p.b=A.ae
p.c=2
p.r=u.j((1-r)*0.7).gp(0)
d.c3(q,p)}},
aC(d){return d.c!==this.c}}
C.bAa.prototype={
a5(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2=c0.e,c3=c2+36,c4=d2.a,c5=c4*0.23,c6=c5*0.34,c7=c6*0.85,c8=-c6*0.5,c9=c3-4,d0=new B.a5(0,c9,0+c4,c9+60)
$.U()
c9=B.M()
w=c0.b
v=x.O
c9.san(new B.a6(A.aV,A.b1,A.w,B.a([A.d.gH(w).j(0.18),A.L],v),c1,c1).az(0,d0))
d1.aE(d0,c9)
c9=B.M()
c9.r=A.c.j(0.18).gp(0)
c9.c=1
d1.ah(new B.m(0,c3),new B.m(c4,c3),c9)
for(c9=c0.w,u=c9>0,t=(c5-16)/3,s=t-5,r=0.6+0.3*c0.r,q=c0.f,p=c3-14,o=x.v,n=c3+c8,m=c0.d,l=c3-6,k=c5+c7+8,j=l+16,i=c0.c,h=c9<1,g=d1.c,f=0;f<3;++f){e=i[f]
if(e<=0)continue
d=C.hrD(c4,f)
a0=m[f]*c2*e
a1=d-4
a2=$.U()
a3=new B.ar(A.V,A.R,A.X,A.Y,A.W)
a3.r=A.v.j(0.5).gp(0)
a3.y=A.nq
d1.c3(new B.a5(a1,l,a1+k,j),a3)
a3=c3-a0
a1=d+c5
a4=new B.a5(d,a3,a1,a3+a0)
a5=new B.ar(A.V,A.R,A.X,A.Y,A.W)
a6=B.ap(A.d.gH(w),A.c,0.1)
a6.toString
a5.san(new B.a6(A.aV,A.b1,A.w,B.a([a6,A.d.gal(w)],v),c1,c1).az(0,a4))
d1.aE(a4,a5)
a2=a2.r
a5=B.a([],o)
a7=new B.aI(a2,A.ak,c1,c1,a5)
a5.push(new B.b_(a1,a3))
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
a5.push(new B.b_(d,a3))
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
b3=A.h.bb(a0/22)
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
g.clipRect(B.hV(a4),$.lK()[1],!0)
$.U()
a2=new B.ar(A.V,A.R,A.X,A.Y,A.W)
a2.san(new B.a6(A.aV,A.b1,A.w,B.a([A.L,A.c.j(0.4),A.L],v),c1,c1).az(0,b9))
d1.aE(b9,a2)
g.restore()}}},
aC(d){return!0}}
C.aRm.prototype={
b0(){this.b8()
this.b6()
this.dV()},
t(){var w=this,v=w.be$
if(v!=null)v.a8(0,w.gdQ())
w.be$=null
w.a3()}}
C.a2P.prototype={
a9(){return"_Role."+this.b}}
C.qS.prototype={}
C.rD.prototype={}
C.DA.prototype={}
C.a0J.prototype={}
C.ahu.prototype={}
C.a31.prototype={
ga0(d){return this.d}}
C.DL.prototype={}
C.aei.prototype={}
C.aeA.prototype={}
C.agy.prototype={}
C.bms.prototype={
a5B(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
G.dI(d,"",e,g,h,f)},
bel(d,e,f){return this.a5B(d,e,f,0,0.55)},
aGn(d,e,f,g){return this.a5B(d,e,f,0,g)},
bem(d,e,f,g){return this.a5B(d,e,f,g,0.55)},
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
anw(d,e,f,g){var w="n"+this.ay++,v=new C.rD(w,e,f,g)
this.a.n(0,w,v)
this.b3()
return v},
tK(d,e,f){return this.anw(0,e,f,0)},
X(d,e){var w=this
w.a.X(0,e)
A.d.bs(w.b,new C.dxe(e))
A.d.bs(w.c,new C.dxf(e))
w.b3()},
bif(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.nw.h(0,v.b).c===D.yK)return!1
w=this.b
if(A.d.aR(w,new C.dxb(d,e)))return!1
w.push(new C.DA(d,e))
this.b3()
return!0},
c7h(d){var w
if(d.b==="beat")return D.cqu[A.n.F(d.d,4)]
w=this.at
switch(A.n.F(d.d,3)){case 1:return 350+w.aw(500)
case 2:return 1400+w.aw(2200)
default:return 450+w.aw(2000)}},
aK_(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.n.F(w,6)
t=D.aGa[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.DL(u,t,j.ax,90))
w.push(new C.DL(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ai()*3.141592653589793*2
v.push(new C.a31(u,new B.m(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.bel(261.63*Math.pow(2,([0,4,7,12,16,19][A.n.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ai()*3.141592653589793*2
p=100+w.ai()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ap(t,A.c,w.ai()*0.5)
m.toString
v.push(new C.a31(u,new B.m(o*p,n*p),m,3+w.ai()*4.5,1000+w.aw(700),j.ax))}j.f.push(new C.DL(u,t,j.ax,120))
j.aGn(120,200,"noise",0.5)
j.bel(261.63*Math.pow(2,([7,12,16,19][w.aw(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.DL(u,t,j.ax,230))
w.push(new C.DL(u,t,j.ax+160,160))
w.push(new C.DL(u,t,j.ax+320,100))
j.bem(180+j.at.aw(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.aei(u,new B.m((w.ai()-0.5)*220,-260-w.ai()*180),t,j.ax))
j.bem(300+w.aw(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ai()*3.141592653589793*2
j.w.push(new C.aeA(u,u.a6(0,new B.m(Math.cos(q),Math.sin(q)).aK(0,260+w.ai()*200)),t,j.ax))
j.a5B(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fZ()
j.a5B(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.agy(u,D.aFv[v],t,j.ax))
j.aGn(261.63*Math.pow(2,([0,5,9,12][j.at.aw(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aGn(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.cmy[A.n.F(w,3)]
for(k=1;k<=3;++k)j.cBX(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new B.eu(w,new C.dxc(d));v.A();)j.aEP(w.gO(0),j.ax+D.cz4[A.n.F(g.d,4)])
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
case"chance":s=j.at.aw(100)<D.cQB[A.n.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new B.eu(w,new C.dxd(d));v.A();)j.aEP(w.gO(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.ym(w,0,v-700)},
cBX(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.a0J(e,"~"+d))},
aEP(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.ahu(d.a,v,e,w))
u.push(new C.a0J(w,v))},
a9p(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=B.a3(w).k("bb<2>")
w=B.B(new B.bb(w,v),v.k("L.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aK_(r)
u.n(0,r,o.ax+o.c7h(s))}}w=o.c
v=B.T(w).k("X<1>")
q=B.B(new B.X(w,new C.dxg(o),v),v.k("L.E"))
if(q.length!==0){A.d.bs(w,new C.dxh(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.I)(q),++t){u=q[t].b
if(A.a.Y(u,"~")){p=A.a.aV(u,1)
for(u=A.d.gae(v),r=new B.eu(u,new C.dxi(p));r.A();)o.aEP(u.gO(0),o.ax)}else o.aK_(u)}}A.d.bs(o.d,new C.dxj(o))
A.d.bs(o.e,new C.dxk(o))
A.d.bs(o.f,new C.dxl(o))
A.d.bs(o.w,new C.dxm(o))
A.d.bs(o.x,new C.dxn(o))
A.d.bs(o.r,new C.dxo(o))
o.b3()},
wj(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
for(v=this.a,v=new B.ds(v,v.r,v.e),u=x.N,t=x.K;v.A();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(B.J(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=B.a([],x.E)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,B.I)(t),++o){n=t[o]
v.push(B.a([n.a,n.b],r))}return A.T.au(B.J(["nodes",m,"edges",v],u,x.ew),null)},
VH(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.T.aN(0,d,null))
k.a7(0)
for(o=x.j,n=J.aM(o.a(J.t(w,"nodes"))),m=k.a;n.A();){v=n.gO(n)
u=B.v(J.t(v,"k"))
if(!D.nw.am(0,u))continue
t=B.v(J.t(v,"id"))
m.n(0,t,new C.rD(t,u,new B.m(B.d6(J.t(v,"x"))*k.cy.a,B.d6(J.t(v,"y"))*k.cy.b),A.h.L(B.d6(J.t(v,"p")))))
s=B.c9(B.aE(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aM(o.a(J.t(w,"edges"))),n=k.b;o.A();){r=o.gO(o)
q=B.v(J.t(r,0))
p=B.v(J.t(r,1))
if(m.am(0,q)&&m.am(0,p))n.push(new C.DA(q,p))}k.b3()
return!0}catch(l){return!1}},
d13(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a7(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.rD(n,r,new B.m(q*p.a,o*p.b),s))
l.b3()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bif(w[m.a],w[m.b])}},
ga0(d){return this.cy}}
C.He.prototype={}
C.Y8.prototype={
R(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aIl(new C.bms(B.S(w,x.f3),v,u,t,s,r,q,p,o,B.S(w,n),B.S(w,n),B.S(w,n),B.S(w,n),A.cX,A.L,A.az,$.ay()),A.bI,A.J,A.J,A.M,null,null)}}
C.aIl.prototype={
afB(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$afB=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.aB(),$async$afB)
case 6:q=n.kn(m.t(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.l(new C.eGl(s))
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
return B.i($async$afB,v)},
act(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$act=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.l(new C.eGa(s))
u=3
w=6
return B.b(B.aB(),$async$act)
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
return B.i($async$act,v)},
bTh(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a3(n).k("bb<2>")
v=""+n.a+"|"+o.length+"|"+new B.bb(n,w).cH(0,0,new C.eGc())+"|"+A.d.cH(o,0,new C.eGd())
if(v===p.ch)return p.CW
u=new C.eGg()
t=x.s
s=B.a([],t)
r=new C.eGh(p,s,u)
for(n=new B.bb(n,w).gae(0),w=new B.eu(n,new C.eGe());w.A();){q=n.gO(0)
if(!A.d.aR(o,new C.eGf(q)))s.push(B.v(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.cD(s,0,B.dy(5,"count",x.S),x.N).de(0)},
Z(){var w,v=this
v.a4()
v.afB()
v.d.db=v.ay
w=v.qr(new C.eGL(v))
w.fX(0)
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
w.bDD()},
af6(d){return this.c6I(d)},
c6I(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$af6=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.aB(),$async$af6)
case 6:q=m.aW(l.t(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.VH(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.b1r(A.d.gH(D.aEV))
if(s.c!=null)s.l(new C.eGk())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$af6,v)},
b1r(d){this.d.d13(0,d.c,d.d)
this.FJ()},
FJ(){var w=this.as
if(w!=null)w.a2(0)
this.as=B.cE(A.m5,new C.eG6(this))},
aBq(d){var w,v,u,t,s=this.d.a,r=B.a3(s).k("bb<2>")
s=B.B(new B.bb(s,r),r.k("L.E"))
r=B.T(s).k("dn<1>")
s=new B.dn(s,r)
s=new B.bQ(s,s.gI(0),r.k("bQ<aj.E>"))
w=d.a
r=r.k("aj.E")
v=d.b
while(s.A()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cps(d){var w,v,u,t,s,r=this.d.a,q=B.a3(r).k("bb<2>")
r=B.B(new B.bb(r,q),q.k("L.E"))
q=B.T(r).k("dn<1>")
r=new B.dn(r,q)
r=new B.bQ(r,r.gI(0),q.k("bQ<aj.E>"))
w=d.a
v=d.b
q=q.k("aj.E")
while(r.A()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c6w(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.ds(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.A();){r=w.d
if(D.nw.h(0,r.b).c===D.yK)continue
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
cfX(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hRI(new B.m(n.a+36,n.b+0),new B.m(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cJT(d){var w,v,u,t,s,r,q=this,p=q.aBq(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.f4()
u=v.b
if(u==="button"){w.aK_(p)
return}if(q.r)return
t=D.nw.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.t5)s=6
else s=1
v.d=A.n.F(v.d+1,s)
w.b3()
q.FJ()
return}if(q.r)return
r=q.cfX(d)
if(r!=null){w=q.d
A.d.cP(w.b,r)
w.b3()
q.FJ()}},
cqP(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cps(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.aBq(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aI(0,d)}},
cqQ(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b3()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.m(A.h.D(d.a+s.y.a,46,t.a-46),A.h.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b3()}}},
b76(){var w,v,u=this
if(u.z!=null){w=u.c6w(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bif(v,w)}else v=!1
if(v){B.ke()
u.FJ()}u.z=null
u.d.b3()}else if(u.x!=null){if(u.at)u.FJ()
u.x=null}},
afQ(d){return this.c9Q(d)},
c9Q(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$afQ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.aBq(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jJ()
p=t.c
p.toString
w=3
return B.b(B.bW(L.mv,null,new C.eGn(q),p,!0,!0,!1,A.mg,!1,!1,x.y),$async$afQ)
case 3:if(f===!0){r.X(0,s)
t.FJ()}case 1:return B.h(u,v)}})
return B.i($async$afQ,v)},
cfV(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.tK(0,d,new B.m(v.a*(0.25+u.ai()*0.5),v.b*(0.2+u.ai()*0.55)))
B.f4()
this.FJ()},
ak_(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ak_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bW(L.mv,null,new C.eGp(),s,!0,!0,!0,A.mg,!1,!1,x.es),$async$ak_)
case 2:t=e
if(t!=null)u.b1r(t)
return B.h(null,v)}})
return B.i($async$ak_,v)},
ahf(d){var w=0,v=B.j(x.H),u=this,t
var $async$ahf=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cf(null,null,!0,null,new C.eG9(),t,null,!0,!0,x.y),$async$ahf)
case 2:if(f===!0){u.d.a7(0)
u.FJ()}return B.h(null,v)}})
return B.i($async$ahf,v)},
C(d){var w=this,v=null,u=B.a([B.al7(w.r?new B.bK(A.a5,v,v,new B.C(A.Ia,B.hA(D.c1n,D.h6O,new C.eGJ(w),v),v),v):w.cfY(),A.b0,A.iw),B.E(B.cg(new C.eGK(w)),1)],x.p)
if(!w.r)u.push(w.cEx())
return B.c6(v,A.c9,B.bn(!0,B.w(u,A.l,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)},
bOU(){var w=null,v=new C.eGb(),u=A.v.j(0.7),t=B.n(26),s=B.K(A.bw.j(0.5),A.r,1)
return B.bT(0,B.en(B.at(B.q(w,B.cb(B.w(B.a([D.hiu,A.at,D.hqv,A.aA,v.$4(A.mI,A.bw,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(W.E6,A.cw,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.kp,A.c7,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.QQ,A.bu,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.hpL,new B.bK(A.a9,w,w,B.bJ(!1,D.hfw,w,w,!0,w,w,w,this.gbON(),w,w),w)],x.p),A.B,w,A.e,A.P,0,A.p),A.t,w,A.y,w,w,w,w,w,A.ah),A.f,w,A.Nl,new B.p(L.mv,w,s,t,w,w,A.m),w,w,w,A.f7,A9.apt,w,w,w),w,w,w),u,!0),0,0,0)},
cfY(){var w=this,v=null,u=B.aJ(v,v,v,v,Ap.nu,v,v,v,new C.eGv(w),v,v,v,v,v,v),t=w.abU(A.DZ,"How it works",new C.eGw(w),!0),s=w.ay?T.pb:A1.u4
return new B.C(D.bMs,B.A(B.a([u,D.bO8,t,w.abU(s,"Sound",new C.eGx(w),!0),w.abU(A.eb,"Ideas",w.gcuJ(),!0),w.abU(I.xv,"Clear",w.gcfW(w),!0),w.aSY(A.fS,"Show",new C.eGy(w),!0,!0)],x.p),A.l,v,A.e,A.i,0,v,v),v)},
aSY(d,e,f,g,h){var w=null,v=h?A.bw:A.c.j(0.08),u=B.n(14),t=B.n(14),s=B.a([B.V(d,h?A.v:A.c,w,w,w,20)],x.p)
return new B.C(Al.xn,B.aD(!1,A.a3,!0,u,B.aN(!1,t,!0,B.fQ(new B.C(new B.Q(8,8,8,8),B.A(s,A.l,w,A.e,A.P,0,w,w),w),w,e,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ai),w)},
abU(d,e,f,g){return this.aSY(d,e,f,g,!1)},
cEx(){var w=null,v=new C.eGr(this),u=A.c.j(0.08)
return B.q(w,B.cb(B.A(B.a([v.$2("START",D.yK),v.$2("CHANGE",D.Gj),v.$2("REACT",D.t5)],x.p),A.B,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,w,A.aJ),A.f,w,w,new B.p(L.CP,w,new B.bE(new B.ax(u,1,A.r,-1),A.a1,A.a1,A.a1),w,w,w,A.m),w,w,w,w,D.bHo,w,w,w)},
cEy(d){var w,v,u,t,s=null,r=D.nw.h(0,d)
r.toString
w=B.n(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.K(v.j(0.5),A.r,1)
return new B.C(A.eW,B.aA(s,B.q(s,B.w(B.a([B.V(r.b,v,s,s,s,22),A.cR,B.c(r.a,s,1,A.a2,s,s,s,D.b_0,s,s,s)],x.p),A.l,s,A.e,A.P,0,A.p),A.f,s,s,new B.p(s,s,t,w,s,new B.a6(A.aV,A.b1,A.w,u,s,s),A.m),s,s,s,s,A.hC,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eGq(this,d),s,s,s,s,s,s,!1,A.a4),s)}}
C.bmt.prototype={
a5(b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=b2.b,b5=b4.ax,b6=b7.c
J.bs(b6.save())
w=b4.ch
if(b5<w){v=(w-b5)/380
b6.translate(Math.sin(b5*0.09)*9*v,Math.cos(b5*0.13)*7*v)}$.U()
u=B.M()
u.r=A.c.j(0.05).gp(0)
for(w=b8.b,t=b8.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28)b7.P(new B.m(r,s),1,u)
q=b4.CW
if(b5<q){$.U()
p=B.M()
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
e.push(new B.b_(i,j))
d.ac()
a0=Math.max(40,Math.abs(g-i)*0.5)
f=new B.i7(i+a0,j,g-a0,h,g,h)
e.push(f)
e=d.f
if(e!=null)f.aj(e)
d.ac()
a1=D.nw.h(0,l.b).d
a2=D.nw.h(0,k.b).d
f=new B.ar(A.V,A.R,A.X,A.Y,A.W)
f.b=A.ae
f.c=3
f.d=A.bH
e=B.a([a1.j(0.55),a2.j(0.55)],q)
h=B.rn(new B.m(i,j),new B.m(g,h))
f.san(new B.a6(A.a5,A.a9,A.w,e,b3,b3).az(0,new B.a5(h.a-2,h.b-2,h.c+2,h.d+2)))
b7.af(d,f)}for(w=b4.d,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a3=w[n]
l=o.h(0,a3.a)
k=o.h(0,a3.b)
if(l==null||k==null)continue
j=a3.c
a4=A.h.D((b5-j)/(a3.d-j),0,1)
j=l.c
i=k.c
a5=C.hRI(new B.m(j.a+36,j.b+0),new B.m(i.a-36,i.b),a4)
$.U()
i=new B.ar(A.V,A.R,A.X,A.Y,A.W)
i.r=A.c.j(0.35).gp(0)
i.y=O.p2
b7.P(a5,8,i)
i=new B.ar(A.V,A.R,A.X,A.Y,A.W)
i.r=A.c.gp(0)
b7.P(a5,4,i)}a6=b2.d.$0()
if(a6!=null&&o.h(0,a6)!=null){a7=o.h(0,a6).c.a6(0,D.KQ)
a8=b2.e.$0()
w=a8.a
t=a7.a
a0=Math.max(40,Math.abs(w-t)*0.5)
d=new B.aI($.U().r,A.ak,b3,b3,B.a([],p))
p=a7.b
d.E(new B.b_(t,p))
j=a8.b
d.E(new B.i7(t+a0,p,w-a0,j,w,j))
j=B.M()
j.b=A.ae
j.c=3
j.r=A.c.j(0.7).gp(0)
b7.af(d,j)
j=B.M()
j.r=A.c.gp(0)
b7.P(a8,7,j)}for(w=b4.f,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a9=w[n]
p=a9.c
v=A.h.D((b5-p)/700,0,1)
if(b5<p)continue
p=A.ed.aA(0,v)
$.U()
j=new B.ar(A.V,A.R,A.X,A.Y,A.W)
j.b=A.ae
i=1-v
j.c=3.5*i+0.5
j.r=a9.b.j(i*0.9).gp(0)
b7.P(a9.a,14+a9.d*p,j)}for(w=b4.w,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){b0=w[n]
v=A.h.D((b5-b0.d)/600,0,1)
p=b0.a
j=b0.b
i=B.l2(p,j,A.ed.aA(0,v))
i.toString
j=B.l2(p,j,A.ed.aA(0,A.h.D(v-0.35,0,1)))
j.toString
$.U()
p=new B.ar(A.V,A.R,A.X,A.Y,A.W)
p.c=5
p.d=A.bH
h=b0.c
g=B.a([h.j(0),h],q)
f=B.rn(j,i)
p.san(new B.a6(A.a5,A.a9,A.w,g,b3,b3).az(0,new B.a5(f.a-4,f.b-4,f.c+4,f.d+4)))
b7.ah(j,i,p)
p=new B.ar(A.V,A.R,A.X,A.Y,A.W)
p.r=A.c.gp(0)
b7.P(i,6,p)
p=new B.ar(A.V,A.R,A.X,A.Y,A.W)
p.r=h.j(0.5*(1-v)).gp(0)
p.y=A.le
b7.P(i,12,p)}for(w=b4.e,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a3=w[n]
v=A.h.D((b5-a3.f)/a3.e,0,1)
p=a3.a
$.U()
j=new B.ar(A.V,A.R,A.X,A.Y,A.W)
j.r=a3.c.j(1-v).gp(0)
b7.P(p,a3.d*(1-0.5*v),j)}for(w=b4.r,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){k=w[n]
p=k.a
$.U()
j=new B.ar(A.V,A.R,A.X,A.Y,A.W)
i=k.c
j.r=i.j(0.35).gp(0)
j.y=A.le
b7.P(p,11,j)
j=k.a
p=new B.ar(A.V,A.R,A.X,A.Y,A.W)
p.san(new B.bV(Ac.C7,0.5,A.w,b3,0,B.a([A.c,i],q),b3,b3).az(0,B.c0(k.a,8)))
b7.P(j,8,p)}for(b4=b4.x,w=b4.length,n=0;n<b4.length;b4.length===w||(0,B.I)(b4),++n){a5=b4[n]
v=A.h.D((b5-a5.d)/1000,0,1)
t=1-v
b1=C.bmu(a5.b,26+8*t,a5.c.j(t),b3,b3,A.u)
t=a5.a
q=b1.b
p=q.c
q=q.a.c
b1.a5(b7,new B.m(t.a-p/2,t.b-(40+60*v+q.gb4(q)/2)))}for(b4=new B.ds(o,o.r,o.e);b4.A();)b2.cql(b7,b4.d,b5)
b6.restore()},
cql(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.nw.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.h.D(1-(f-w)/520,0,1)
u=B.c1(e.c,64,64)
t=B.bx(u,A.ia)
s=t.eN(A.cy)
$.U()
r=B.M()
r.r=A.v.j(0.55).gp(0)
r.y=A.nq
d.aq(s,r)
if(v>0){s=t.cu(6)
r=B.M()
r.r=h.d.j(0.6*v).gp(0)
r.y=A.DC
d.aq(s,r)}s=t.eN(A.cO)
r=B.M()
q=h.d
r.r=B.ap(q,A.v,0.65).gp(0)
d.aq(s,r)
r=B.M()
s=B.ap(q,A.c,0.18+0.4*v)
s.toString
p=B.ap(q,A.v,0.35)
p.toString
r.san(new B.a6(A.aV,A.b1,A.w,B.a([s,p],x.O),j,j).az(0,u))
d.aq(t,r)
r=B.M()
r.b=A.ae
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aq(t,r)
r=h.b
p=e.c
o=C.bmu(B.lF(r.a),30,A.c,r.b,j,A.C)
r=o.b
s=r.c
r=r.a.c
o.a5(d,p.aI(0,new B.m(s/2,r.gb4(r)/2)))
n=C.bmu(h.a,11,A.c,j,j,A.C)
n.a5(d,e.c.a6(0,new B.m(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.n.F(e.d,r)]
else m=i==="pop"?D.aFv[A.n.F(e.d,6)]:j
h=h.c
if(h===D.t5){s=e.c.a6(0,new B.m(0,62))
r=B.M()
r.r=D.aGa[A.n.F(e.d,6)].gp(0)
d.P(s,5,r)}else if(m!=null){l=C.bmu(m,9.5,A.aE,j,j,A.O)
l.a5(d,e.c.a6(0,new B.m(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bmu(m,9.5,A.aE,j,j,A.O)
l.a5(d,e.c.a6(0,new B.m(-l.b.c/2,54)))}if(k.c)return
if(h!==D.yK)k.b7W(d,e.c.aI(0,D.KQ),q)
k.b7W(d,e.c.a6(0,D.KQ),q)},
b7W(d,e,f){var w
$.U()
w=B.M()
w.r=A.c9.gp(0)
d.P(e,9,w)
w=B.M()
w.b=A.ae
w.c=2.2
w.r=f.gp(0)
d.P(e,9,w)
w=B.M()
w.r=A.c.gp(0)
d.P(e,3.5,w)},
aC(d){return!0}}
C.aQu.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bF()}}
C.es.prototype={}
C.um.prototype={
aut(d,e,f,g){var w=this
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
C.acW.prototype={}
C.ae4.prototype={}
C.a6Y.prototype={
bkb(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.he()?-1:1
v=t.ai()*3.141592653589793*2
u=f*(0.3+t.ai())
s.push(new C.acW(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ai()*0.45));++r}},
cc2(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bs(w,new C.bTK())},
anw(d,e,f,g){var w="p"+this.c++,v=new C.um(w,e,f,g)
v.aut(w,e,f,g)
this.a.push(v)
return v},
X(d,e){A.d.X(this.a,e)
A.d.bs(this.b,new C.bTV(e))},
a7(d){A.d.a7(this.a)
A.d.a7(this.b)},
cSU(d,e,f,g,h){return A.d.aR(this.b,new C.bTQ(e,f,g,h))},
aol(d,e,f,g){var w
if(d===f||this.cSU(0,d,e,f,g))return null
w=new C.ae4(d,e,f,g)
this.b.push(w)
return w},
aFm(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
B8(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
ar9(d){return this.NB(d)&&!d.x&&d.cx>this.B8(d)},
bcm(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
NB(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
cgh(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.B4.h(0,v)
if(w!=null)return w.a
return 100},
wj(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.cc2(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.T(v).k("X<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.I)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.X(v,new C.bTW(a2),t).cH(0,0,new C.bTX(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.S(x.N,u)
n=new C.bTZ(o)
m=B.a([],x.t)
l=new C.bTY(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.I)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.I)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.S(u,u)
f=new C.bU0(g,l,n)
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
a2.bci(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.B8(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.bci(e,d,w,!0)
a2.bVE(a4)},
bci(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.S(x.N,b3),b5=new C.bTM(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bTL(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.I)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bTO(B.S(b3,b3),r,b5)
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
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.bcm(t)*(1+t.CW))
a4=b2.aFm(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.cgh(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bZ1(e,a0,b8)
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
bZ1(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
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
bVE(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.I)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aFm(o)/a1.bcm(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.B8(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bNv(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bkb(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.uV(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.uV(o,"The "+$.r2().h(0,n).b+" got "+A.h.a1(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.uV(o,"More than 1.5 amps went through the "+$.r2().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.uV(o,"The regulator had to turn "+A.h.a1(o.cy,1)+" V into heat while "+A.h.S(i*1000)+" mA flowed. That is "+A.h.a1(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.uV(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.B4.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.r2().h(0,n).b
l=f.b
l=l===A.h.b9(l)?""+A.h.S(l):B.v(l)
g=f.c
g=g===A.h.b9(g)?""+A.h.S(g):B.v(g)
a1.uV(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.h.a1(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.fAD.q(0,n)){m=o.fx>0?A.h.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.h.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.uV(o,"The bulb got "+A.h.a1(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.h.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.uV(o,"The LED had "+A.h.S(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.h.D(j/14,0,1)
break
case"motor":n=A.h.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.h.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.uV(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.h.D(i/1,0,1)
if(!o.x&&i>1)a1.uV(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.uV(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.h.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.uV(o,"The capacitor was charged to "+A.h.a1(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bNv(d){return A.d.aR(this.a,new C.bTJ(d))},
uV(d,e){var w
d.x=!0
d.ay=e
this.bkb(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
boR(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a7(0)},
aLM(d){var w=d.b
return D.aWF.q(0,w)||D.B4.am(0,w)||w==="buck"||w==="regulator"},
blG(d){var w,v=!0
if(!this.NB(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.B4.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
X0(d,e){var w=this.b
return new B.X(w,new C.bU2(d,e),B.T(w).k("X<1>")).gI(0)},
rT(d){var w,v
if(d.x)return!1
w=d.b
if(D.B4.am(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bjH(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.r2().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aLM(d)||i.rT(d))return null
w=i.X0(d,0)
v=i.X0(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.T(u).k("X<1>")
s=B.B(new B.X(u,i.gd0B(),t),t.k("L.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.h.b9(r)?""+A.h.S(r):B.v(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.h.a1(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.B4.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.NN("battery"),o=J.aM(t.a),t=new B.eu(o,t.b);t.A();){n=o.gO(o)
if(n.e===1.5&&n.as<=0.02&&i.X0(n,0)+i.X0(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.NN("switch"),o=J.aM(t.a),t=new B.eu(o,t.b);t.A();)if(!o.gO(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.r2().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.B8(k))return"The "+$.r2().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.h.a1(k.cx,2)+" amps, but it can only give about "+A.h.a1(i.B8(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.aR(u,new C.bTR(i,d))
h=q.b
h=h===A.h.b9(h)?""+A.h.S(h):B.v(h)
u=A.h.a1(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.h.a1(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.h.a1(Math.abs(d.dy),1)+" V). Try a bigger battery."},
NN(d){var w=this.a
return new B.X(w,new C.bTU(d),B.T(w).k("X<1>"))},
aLn(d){return this.NN(d).aR(0,new C.bTT(0.35))},
qB(d,e){return A.d.aR(this.a,new C.bTS(e))}}
C.alJ.prototype={
a5(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.U()
w=B.M()
w.r=F.nV.gp(0)
c0.aE(new B.a5(0,0,b8,b9),w)
w=C.ipB(c1)
v=$.i_S()
if(A.n.F(w.length,2)!==0)B.bi(B.dM('"points" must have an even number of values.',b5))
u=c0.b
if(u!=null)u.oC(v)
t=v.nn()
v=c0.c
v.drawPoints($.i0M()[0],w,t)
t.delete()
for(w=b4.b,u=w.b,s=u.length,r=b4.f,q=0;q<u.length;u.length===s||(0,B.I)(u),++q){p=u[q]
o=p.a
n=o.c
m=p.b===0?-1:1
l=D.mP.am(0,o.b)?(o.ch-1)*38:0
o=o.d
k=p.c
j=k.c
i=p.d===0?-1:1
h=D.mP.am(0,k.b)?(k.ch-1)*38:0
b4.cPA(c0,new B.m(n*b6+m*(42+l),o*b7),new B.m(j*b6+i*(42+h),k.d*b7),p,p===r)}u=b4.d
if(u!=null&&b4.e!=null){g=C.i4U(u.a,u.b,c1)
u=b4.e
u.toString
$.U()
s=B.M()
s.r=A.ab.gp(0)
s.c=3
s.d=A.bH
c0.ah(g,u,s)}for(u=w.a,s=u.length,r=b4.c,o=b4.r,n=x.v,q=0;q<u.length;u.length===s||(0,B.I)(u),++q){f=u[q]
m=f.c*b6
l=f.d*b7
if(f.Q>0){k=Math.sin(w.d*30)
$.U()
j=new B.ar(A.V,A.R,A.X,A.Y,A.W)
j.r=F.O6.j(A.h.D(f.Q*0.45,0,0.6)).gp(0)
j.y=A.DC
c0.P(new B.m(m,l),46+14*k,j)}e=o.h(0,f.a)
if(e==null)e=1
J.bs(v.save())
v.translate(m,l)
k=A.h.D(A.n3.aA(0,A.h.D(e,0,1)),0.01,1.4)
v.scale(k,k)
b4.crm(c0,f,f===r)
v.restore()
k=f.b
if((k==="battery"||k==="solar"||k==="crank"||k==="turbine")&&!f.x&&f.cx>w.B8(f)){j=m+0
i=l+-40
h=Math.sin(w.d*10)
d=$.U().r
a0=B.a([],n)
a1=new B.aI(d,A.ak,b5,b5,a0)
a2=i-13
a0.push(new B.b_(j,a2))
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
a0.push(new B.b_(j,a2))
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
b4.lQ(c0,"!",new B.m(j+-3,i+-8),A.c,14)}if(!f.x)j=(D.aWF.q(0,k)||D.B4.am(0,k)||k==="buck"||k==="regulator")&&!w.rT(f)&&w.X0(f,0)+w.X0(f,1)>0
else j=!1
if(j){m+=0
l+=-40
$.U()
j=new B.ar(A.V,A.R,A.X,A.Y,A.W)
j.r=A.as.gp(0)
c0.P(new B.m(m,l),10,j)
b4.lQ(c0,"!",new B.m(m+-3,l+-8),A.v,14)}for(a8=0;a8<2;++a8){m=f.c
l=a8===0
j=l?-1:1
i=D.mP.am(0,k)?(f.ch-1)*38:0
i=m*b6+j*(42+i)
j=f.d*b7
a9=new B.m(i,j)
$.U()
m=new B.ar(A.V,A.R,A.X,A.Y,A.W)
m.r=F.nV.gp(0)
c0.P(a9,7,m)
m=new B.ar(A.V,A.R,A.X,A.Y,A.W)
m.b=A.ae
m.c=2.4
m.r=(l&&w.blG(f)?A.c3:A.ab).gp(0)
c0.P(a9,6,m)
if(l&&w.blG(f))b4.lQ(c0,"+",new B.m(i+-4,j+-22),A.c3,13)}}for(v=w.f,s=v.length,q=0;q<v.length;v.length===s||(0,B.I)(v),++q){b0=v[q]
r=b0.a*b6+b0.c
o=b0.b*b7+b0.d
b1=new B.m(r,o)
b2=A.h.D(b0.r/0.8,0,1)
n=B.ap(M.OT,F.a19,b2)
n.toString
m=b0.f
$.U()
l=new B.ar(A.V,A.R,A.X,A.Y,A.W)
l.r=n.gp(0)
l.c=2.4
l.d=A.bH
c0.ah(b1,new B.m(r-b0.e*0.035,o-m*0.035),l)
l=new B.ar(A.V,A.R,A.X,A.Y,A.W)
l.r=n.j(0.35*b2).gp(0)
l.y=A.Q1
c0.P(b1,4.5*b2+1,l)}if(A.d.aR(u,new C.bO4())){b3=A.d.cH(u,0,new C.bO5())
$.U()
b7=B.M()
b7.r=D.blH.j(0.05+0.09*b3*(0.5+0.5*Math.sin(w.d*22))).gp(0)
c0.aE(new B.a5(0,0,b8,b9),b7)
b7="short|"+B.v(b6)
a9=$.aRV.h(0,b7)
if(a9==null){a9=B.h2(b5,A.cK,b5,b5,b5,D.fLQ,A.a8,A.cb,b5,A.e6,A.cc)
a9.nN(b6-24)
$.aRV.n(0,b7,a9)}a9.a5(c0,new B.m(12,10))}},
lQ(d,e,f,g,h){var w,v=null,u=e+"|"+g.m()+"|"+B.v(h)
if($.aRV.a>300)$.aRV.a7(0)
w=$.aRV.h(0,u)
if(w==null){w=B.h2(v,A.cK,v,v,v,B.cX(v,v,v,v,v,v,v,v,v,B.l(v,v,g,v,v,v,v,v,v,v,v,h,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),e),A.a8,A.cb,v,A.e6,A.cc)
w.eL()
$.aRV.n(0,u,w)}w.a5(d,f)},
cPA(d,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.aI($.U().r,A.ak,null,null,B.a([],x.v))
e.E(new B.b_(a0.a,a0.b))
w=C.hXJ(a0,a1,a2)
e.E(new B.cn(w.a,w.b,a1.a,a1.b))
v=a2.a
u=Math.abs(v.fr)
t=a2.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ap(A.aQ,F.O6,A.h.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ap(A.aH,A.aQ,A.h.D(r*1.2,0,1))
u.toString
o=u}else o=A.bl
u=B.M()
u.b=A.ae
u.c=a3?7:5
u.d=A.bH
s=a3?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
d.af(e,u)
u=B.M()
u.b=A.ae
u.c=2.4
u.d=A.bH
u.r=(a3?A.c:o).gp(0)
d.af(e,u)
if(q){n=new B.anx(new B.vg(B.A1(e),!1,B.a([],x.l))).gH(0)
m=40+A.h.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=this.b
k=0
for(;;){v.k_()
j=t[u].b
j===$&&B.d()
if(!(k<j.a.length()/22))break
j=s.d
v.k_()
i=t[u].b
i===$&&B.d()
i=A.h.F(k*22+j*m*l,i.a.length())
v.k_()
j=t[u].b
j===$&&B.d()
j=j.a.length()
v.k_()
h=t[u].b
h===$&&B.d()
g=A.h.F(i+j,h.a.length())
v.k_()
f=t[u].Xf(g)
j=new B.ar(A.V,A.R,A.X,A.Y,A.W)
j.r=A.c.gp(0)
d.P(f.a,2.6,j);++k}}},
a0p(d,e,f,g){var w,v,u,t
$.U()
w=B.M()
v=g?A.aV:A.a5
u=g?A.b1:A.a9
t=B.ap(e,A.v,0.3)
t.toString
w.san(new B.a6(v,u,A.w,B.a([e,f,e,t],x.O),A.JB,null).az(0,d))
return w},
b28(d,e,f){return this.a0p(d,e,f,!0)},
cbC(d,e){return this.a0p(d,A.bl,A.hY,e)},
al8(d,e){var w,v,u
$.U()
w=B.M()
w.san(D.eSX.az(0,B.c0(e,4.2)))
d.P(e,4.2,w)
w=e.a6(0,D.eI5)
v=e.a6(0,D.eIf)
u=B.M()
u.r=A.cU.gp(0)
u.c=1.2
d.ah(w,v,u)},
crm(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=4294626325,b5=4286331629,b6=4287322667,b7=4293870660,b8=$.U(),b9=B.M()
b9.san(D.ccL.az(0,D.fwL))
b9.c=3.4
b9.d=A.bH
w=B.M()
w.r=A.v.j(0.45).gp(0)
w.y=O.p2
c0.c3(D.fwA,w)
if(c2){w=B.bx(D.fwJ,A.k5)
v=B.M()
v.r=A.c.j(0.14).gp(0)
c0.aq(w,v)}u=C.hBv(c1)
c0.ah(new B.m(-u,0),D.eJD,b9)
c0.ah(D.eGK,new B.m(u,0),b9)
t=c1.x
w=c1.b
s=D.mP.am(0,w)&&c1.ch!==1
if(s){J.bs(c0.c.save())
c0.bW(0,c1.ch)}switch(w){case"battery":b2.bKc(c0,c1)
break
case"solar":r=B.bx(D.fwC,A.jL)
c0.aq(r,b2.a0p(new B.a5(r.a,r.b,r.c,r.d),A.d1,A.bP,!1))
b8=B.M()
w=B.ap(D.bpM,A.di,0.25+0.55*c1.f)
w.toString
v=B.ap(D.bzB,A.m2,0.3+0.4*c1.f)
v.toString
b8.san(new B.a6(A.aw,A.aD,A.w,B.a([w,v],x.O),b3,b3).az(0,D.ac_))
c0.aE(D.ac_,b8)
q=B.M()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(p=1;p<6;++p){b8=-34+p*68/6
c0.ah(new B.m(b8,-18),new B.m(b8,18),q)}for(p=1;p<4;++p){b8=-18+p*9
c0.ah(new B.m(-34,b8),new B.m(34,b8),q)}for(p=0;p<6;++p){b8=-34+(p+0.5)*68/6
$.U()
w=new B.ar(A.V,A.R,A.X,A.Y,A.W)
w.r=A.cG.j(0.5).gp(0)
w.c=0.6
c0.ah(new B.m(b8,-18),new B.m(b8,18),w)}b8=new B.aI($.U().r,A.ak,b3,b3,B.a([],x.v))
b8.E(new B.b_(-34,18))
b8.E(new B.aq(-6+40*c1.f,-18))
b8.E(new B.aq(4+40*c1.f,-18))
b8.E(new B.aq(-24,18))
b8.E(new B.bz())
w=B.M()
w.r=A.c.j(0.1+0.22*c1.f).gp(0)
c0.af(b8,w)
w=c1.f
b8=B.M()
b8.r=A.eL.j(0.9).gp(0)
c0.P(D.eGO,4+4*w,b8)
break
case"crank":o=B.bx(D.fwm,A.h5)
c0.aq(o,b2.b28(new B.a5(o.a,o.b,o.c,o.d),A.bz,A.bQ))
b8=B.M()
b8.san(D.aUI.az(0,B.c0(A.J,12)))
c0.P(A.J,12,b8)
n=new B.m(Math.cos(c1.y)*22,Math.sin(c1.y)*22)
b8=B.M()
b8.r=A.cG.gp(0)
b8.c=5
b8.d=A.bH
c0.ah(A.J,n,b8)
b8=B.M()
b8.san(D.eTj.az(0,B.c0(n,7)))
c0.P(n,7,b8)
b2.al8(c0,D.eJw)
b2.al8(c0,D.eGy)
break
case"turbine":b8=b8.r
w=x.v
v=new B.aI(b8,A.ak,b3,b3,B.a([],w))
v.E(new B.b_(-3,24))
v.E(new B.aq(3,24))
v.E(new B.aq(1.5,0))
v.E(new B.aq(-1.5,0))
v.E(new B.bz())
m=B.M()
m.r=A.bP.gp(0)
c0.af(v,m)
for(v=c0.c,l=0;l<3;++l){m=c1.y
J.bs(v.save())
v.rotate((m+l*2.094)*180/3.141592653589793,0,0)
m=B.a([],w)
k=new B.aI(b8,A.ak,b3,b3,m)
m.push(new B.b_(0,-2))
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
v.restore()}b8=B.M()
b8.san(D.eT_.az(0,B.c0(A.J,4.5)))
c0.P(A.J,4.5,b8)
break
case"switch":o=B.bx(D.fwu,A.pr)
b8=B.M()
b8.san(D.awk.az(0,new B.a5(o.a,o.b,o.c,o.d)))
c0.aq(o,b8)
b2.al8(c0,D.VV)
b2.al8(c0,D.aPq)
h=c1.w?D.aPq:H.aPg
b8=B.M()
b8.r=A.ax.gp(0)
b8.c=6
b8.d=A.bH
c0.ah(D.VV,h,b8)
b8=B.M()
b8.r=(c1.w?A.bf:A.bP).gp(0)
b8.c=4
b8.d=A.bH
c0.ah(D.VV,h,b8)
b8=B.l2(D.VV,h,0.85)
b8.toString
w=B.M()
w.r=A.aC.gp(0)
c0.P(b8,5,w)
break
case"fuse":g=B.bx(D.aVx,D.aUN)
b8=B.M()
b8.r=A.fD.j(0.25).gp(0)
c0.aq(g,b8)
b8=B.M()
b8.b=A.ae
b8.c=1.4
b8.r=A.aE.gp(0)
c0.aq(g,b8)
if(!t){b8=B.M()
b8.c=1.6
b8.r=B.ap(A.bP,A.cY,c1.fx).gp(0)
c0.ah(D.aPM,D.aPo,b8)}else{b8=B.M()
b8.c=1.6
b8.r=A.bX.gp(0)
c0.ah(D.aPM,D.eK0,b8)
b8=B.M()
b8.c=1.6
b8.r=A.bX.gp(0)
c0.ah(D.eHB,D.aPo,b8)
b8=B.M()
b8.r=A.e0.gp(0)
c0.P(A.J,6,b8)}for(f=0;f<2;++f){e=B.c1(new B.m(M.ht[f]*22,0),20,9)
c0.aq(B.bx(e,A.hv),b2.a0p(e,A.de,A.nP,!0))}break
case"pot":b8=B.M()
b8.san(D.eTa.az(0,B.c0(A.J,21)))
c0.P(A.J,21,b8)
for(l=0;l<=10;++l){d=2.356194490192345+l*3.141592653589793*1.5/10
b8=Math.cos(d)
w=Math.sin(d)
v=Math.cos(d)
m=Math.sin(d)
k=new B.ar(A.V,A.R,A.X,A.Y,A.W)
k.r=A.aE.gp(0)
k.c=1.2
c0.ah(new B.m(b8*18,w*18),new B.m(v*22,m*22),k)}b8=B.M()
b8.san(D.eSY.az(0,B.c0(A.J,13)))
c0.P(A.J,13,b8)
a0=2.356194490192345+c1.f*3.141592653589793*1.5
b8=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
m=Math.sin(a0)
k=B.M()
k.r=A.aQ.gp(0)
k.c=3
k.d=A.bH
c0.ah(new B.m(b8*3,w*3),new B.m(v*12,m*12),k)
break
case"resistor":a1=B.bx(D.aVx,D.aUN)
b8=B.M()
b8.san(D.cgj.az(0,new B.a5(a1.a,a1.b,a1.c,a1.d)))
c0.aq(a1,b8)
b8=x.O
a2=B.J([47,B.a([B.b0(b4),B.b0(b5),A.v],b8),100,B.a([B.b0(b6),A.v,B.b0(b6)],b8),220,B.a([B.b0(b7),B.b0(b7),B.b0(b6)],b8),470,B.a([B.b0(b4),B.b0(b5),B.b0(b6)],b8),1000,B.a([B.b0(b6),A.v,B.b0(b7)],b8)],x.i,x.bF)
a3=a2.h(0,c1.r)
if(a3==null){b8=a2.h(0,100)
b8.toString
a3=b8}for(p=0;p<3;++p){b8=-14+p*9
w=new B.ar(A.V,A.R,A.X,A.Y,A.W)
w.r=a3[p].gp(0)
c0.aE(new B.a5(b8,-9,b8+4.5,9),w)}b8=B.M()
b8.r=A.aQ.gp(0)
c0.aE(D.fwX,b8)
b8=c1.r
b2.lQ(c0,b8>=1000?"1k\u03a9":""+A.h.S(b8)+"\u03a9",D.eJ1,A.ab,10)
break
case"bulb":w=c1.fx
if(w>0){v=B.M()
v.r=A.eL.j(0.55*w).gp(0)
v.y=A.DC
c0.P(H.wf,34,v)}o=B.c1(D.eFt,12,18)
c0.aq(B.bx(o,A.hv),b2.a0p(o,A.bl,A.dW,!0))
for(p=0;p<3;++p){w=13+p*3.5
v=new B.ar(A.V,A.R,A.X,A.Y,A.W)
v.r=A.dJ.gp(0)
v.c=1
c0.ah(new B.m(-9,w),new B.m(9,w),v)}w=B.M()
if(t)v=A.GW
else{v=B.ap(A.dW,A.i0,c1.fx)
m=c1.fx
v=v.j(0.25+0.7*m)}if(t)m=A.Hh
else{m=B.ap(A.d1,A.eL,c1.fx)
m.toString}w.san(new B.bV(A.n1,0.5,A.w,b3,0,B.a([v,m.j(0.18+0.5*c1.fx)],x.O),b3,b3).az(0,B.c0(A.un,17)))
c0.P(A.un,17,w)
w=B.M()
w.b=A.ae
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c0.P(A.un,17,w)
b8=b8.r
w=x.v
m=new B.aI(b8,A.ak,b3,b3,B.a([],w))
m.E(new B.b_(-9,-12))
m.E(new B.cn(-12,-4,-9,0))
v=B.M()
v.b=A.ae
v.c=2
v.r=A.c.j(0.45).gp(0)
c0.af(m,v)
v=B.M()
v.r=A.cH.gp(0)
v.c=1.4
c0.ah(D.eJV,D.eJX,v)
v=B.M()
v.r=A.cH.gp(0)
v.c=1.4
c0.ah(D.eHu,D.eHx,v)
w=B.a([],w)
a4=new B.aI(b8,A.ak,b3,b3,w)
a4.E(new B.b_(-4,-2))
for(l=0;l<6;l=a5){a5=l+1
b8=(l&1)===0?-6:1
b8=new B.aq(-4+a5*8/6,-2+b8)
w.push(b8)
v=a4.f
if(v!=null)b8.aj(v)
a4.ac()}$.U()
b8=B.M()
b8.b=A.ae
b8.c=1.8
if(t)w=A.bc
else{w=B.ap(A.d1,D.bqW,c1.fx)
w.toString}b8.r=w.gp(0)
c0.af(a4,b8)
break
case"led":w=c1.fx
if(w>0){v=B.M()
v.r=A.aC.j(0.6*w).gp(0)
v.y=D.bNW
c0.P(A.un,30,v)}w=B.M()
w.r=A.dW.gp(0)
w.c=2.4
c0.ah(D.eK2,D.eK1,w)
w=B.M()
w.r=A.dW.gp(0)
w.c=2.4
c0.ah(D.eHD,D.eHC,w)
b8=b8.r
w=x.v
a6=new B.aI(b8,A.ak,b3,b3,B.a([],w))
a6.E(new B.b_(-12,8))
a6.E(new B.aq(-12,-6))
a6.E(new B.cn(0,-26,12,-6))
a6.E(new B.aq(12,8))
a6.E(new B.bz())
v=B.M()
if(t)m=A.jB
else{m=B.ap(A.eE,D.bsI,c1.fx)
m.toString}if(t)k=A.la
else{k=B.ap(A.kL,A.aC,c1.fx)
k.toString}v.san(new B.a6(A.aw,A.aD,A.w,B.a([m,k],x.O),b3,b3).az(0,D.fvP))
c0.af(a6,v)
v=B.M()
v.b=A.ae
v.c=1.2
v.r=A.jX.gp(0)
c0.af(a6,v)
v=B.M()
v.r=A.ex.gp(0)
c0.aE(D.fvV,v)
w=new B.aI(b8,A.ak,b3,b3,B.a([],w))
w.E(new B.b_(-7,-4))
w.E(new B.cn(-6,-12,0,-15))
b8=B.M()
b8.b=A.ae
b8.c=2
b8.r=A.c.j(0.5).gp(0)
c0.af(w,b8)
break
case"motor":a7=new B.a5(-28,-14,20,14)
c0.aq(B.bx(a7,A.iF),b2.b28(a7,A.an,A.bo))
b8=B.M()
b8.r=A.cx.gp(0)
c0.aE(D.fvm,b8)
b8=B.M()
b8.r=A.cG.gp(0)
c0.aE(D.fvo,b8)
b8=c0.c
J.bs(b8.save())
b8.translate(31,0)
for(l=0;l<3;++l){J.bs(b8.save())
b8.rotate((c1.y+l*2.094)*180/3.141592653589793,0,0)
w=B.c1(H.aPb,15,7)
v=new B.ar(A.V,A.R,A.X,A.Y,A.W)
v.r=A.cY.j(0.9).gp(0)
c0.c3(w,v)
b8.restore()}w=B.M()
w.r=A.ax.gp(0)
c0.P(A.J,3,w)
b8.restore()
b2.lQ(c0,"M",D.eJv,A.ax,14)
break
case"buzzer":a8=B.c1(A.J,42,42)
b8=B.M()
b8.san(D.eTe.az(0,a8))
c0.c3(a8,b8)
b8=B.M()
b8.r=A.v.gp(0)
c0.P(A.J,6,b8)
b8=B.M()
b8.b=A.ae
b8.c=1.4
b8.r=A.aT.gp(0)
c0.P(A.J,6,b8)
b2.lQ(c0,"+",D.eJo,A.ab,12)
for(b8=b2.b,l=1;l<=3;++l){w=c1.fx
v=w>0?A.h.F(b8.d*14,5):0
v=B.c0(A.J,24+l*5+v)
m=new B.ar(A.V,A.R,A.X,A.Y,A.W)
m.b=A.ae
m.c=2
m.r=A.c7.j(w*(1-l*0.22)).gp(0)
c0.cR(v,-0.7,1.4,!1,m)}break
case"heater":o=B.bx(D.fwq,A.iF)
w=B.M()
w.san(D.cdP.az(0,new B.a5(o.a,o.b,o.c,o.d)))
c0.aq(o,w)
w=B.a([],x.v)
a9=new B.aI(b8.r,A.ak,b3,b3,w)
a9.E(new B.b_(-24,0))
for(l=0;l<8;l=a5){b8=(l&1)===0?-10:10
a5=l+1
b8=new B.cn(-24+l*6+3,b8,-24+a5*6,0)
w.push(b8)
v=a9.f
if(v!=null)b8.aj(v)
a9.ac()}b8=c1.fx
if(b8>0.1){$.U()
w=B.M()
w.b=A.ae
w.c=10
w.r=D.brH.j(0.5*b8).gp(0)
w.y=A.le
c0.af(a9,w)}$.U()
b8=B.M()
b8.b=A.ae
b8.c=3.2
b8.d=A.bH
b8.r=B.ap(A.ms,Ag.zl,c1.fx).gp(0)
c0.af(a9,b8)
break
case"capacitor":a7=new B.a5(-16,-22,16,18)
b8=B.bx(a7,A.iF)
w=B.M()
w.san(D.aw6.az(0,a7))
c0.aq(b8,w)
w=B.M()
w.r=A.bP.gp(0)
c0.aE(D.fw4,w)
for(p=0;p<4;++p)b2.lQ(c0,"\u2212",new B.m(-14,-18+p*9),A.ax,11)
b0=new B.a5(-16,-24,16,-17)
c0.aq(B.bx(b0,A.hv),b2.cbC(b0,!1))
b8=38*c1.fx
w=18-b8
$.U()
v=B.M()
v.r=A.bf.j(0.5).gp(0)
c0.aE(new B.a5(-3,w,11,w+b8),v)
b2.lQ(c0,"1F",H.wf,A.c,11)
break
case"radio":a1=B.bx(D.ac_,A.h5)
b8=B.M()
b8.san(D.cgy.az(0,new B.a5(a1.a,a1.b,a1.c,a1.d)))
c0.aq(a1,b8)
b8=B.M()
b8.b=A.ae
b8.c=1.4
b8.r=A.nP.j(0.6).gp(0)
c0.aq(a1,b8)
b8=B.bx(D.fwr,A.jL)
w=B.M()
w.r=A.e7.gp(0)
c0.aq(b8,w)
for(p=0;p<6;++p){b8=-10+p*4.4
w=new B.ar(A.V,A.R,A.X,A.Y,A.W)
w.r=A.ms.gp(0)
w.c=1.4
c0.ah(new B.m(-27,b8),new B.m(-3,b8),w)}b8=B.M()
b8.r=(c1.fx>0?A.hb:A.oM).gp(0)
c0.aE(D.fvt,b8)
if(c1.fx>0){b8=8+A.h.F(b2.b.d*7,18)
w=B.M()
w.r=A.bC.gp(0)
w.c=1.6
c0.ah(new B.m(b8,-13),new B.m(b8,-3),w)}b8=B.M()
b8.san(D.aUI.az(0,B.c0(D.aaW,6)))
c0.P(D.aaW,6,b8)
b8=B.M()
b8.r=A.nP.gp(0)
c0.P(D.eGJ,4,b8)
b8=B.M()
b8.r=A.dW.gp(0)
b8.c=1.8
c0.ah(D.eGE,D.aPv,b8)
if(c1.fx>0)for(b8=b2.b,l=1;l<=2;++l){w=B.c0(D.aPv,4+l*5+A.h.F(b8.d*8,5))
v=new B.ar(A.V,A.R,A.X,A.Y,A.W)
v.b=A.ae
v.c=1.4
v.r=A.oT.j(0.7).gp(0)
c0.cR(w,-2.4,1.6,!1,v)}break
case"tv":w=B.bx(D.fwB,A.iF)
v=B.M()
v.r=M.nk.gp(0)
c0.aq(w,v)
b1=B.bx(D.fwy,A.hv)
if(c1.fx>0&&!c1.x){b8=c0.c
J.bs(b8.save())
b8.clipRRect(B.nn(b1),$.n0(),!0)
b8.translate(-33,-21)
K.haq(c0,D.fDs,c1.at,b2.b.d,c1.ax,-1,b3,b3)
b8.restore()
b8=B.M()
b8.r=A.bf.gp(0)
c0.P(D.eGV,1.6,b8)}else{w=B.M()
w.r=D.x3.gp(0)
c0.aq(b1,w)
b8=new B.aI(b8.r,A.ak,b3,b3,B.a([],x.v))
b8.E(new B.b_(-33,-21))
b8.E(new B.aq(-10,-21))
b8.E(new B.aq(-33,0))
b8.E(new B.bz())
w=B.M()
w.r=A.c.j(0.05).gp(0)
c0.af(b8,w)}b8=B.M()
b8.r=A.bz.gp(0)
c0.aE(D.fvU,b8)
break}C.iKC(c0,c1,b2.b.d,b2.gcgi())
if(t)b2.lQ(c0,"\u2716",D.eK4,A.aC,14)
if(s)c0.c.restore()},
aU4(d,e,f,g){var w,v,u,t,s,r,q,p,o=new C.bO3(),n=e.d,m=e.b,l=n-m,k=e.a,j=m+l*0.06,i=k+l*0.16,h=new B.a5(k,j,i,j+l*0.88)
j=l*0.08
k=B.bx(h,new B.aQ(j,j))
$.U()
w=B.M()
w.san(o.$2(h,D.dkK))
d.aq(k,w)
i-=0.5
w=l*0.2
k=e.c-w
v=new B.a5(i,m,k,n)
u=k-i
t=i+u*0.66
s=B.M()
s.san(o.$2(v,D.dKm))
d.aE(new B.a5(i,m,t,n),s)
s=B.M()
s.san(o.$2(v,D.diR))
d.aE(new B.a5(t,m,k,n),s)
k-=0.5
s=m+j
n=l*0.12
r=k+n
q=new B.a5(k,s,r,s+l*0.84)
s=B.M()
s.san(o.$2(q,D.aFz))
d.aE(q,s)
r-=0.5
s=m+l*0.3
p=new B.a5(r,s,r+l*0.1,s+l*0.4)
s=l*0.05
s=B.bx(p,new B.aQ(s,s))
r=B.M()
r.san(o.$2(p,D.aFz))
d.aq(s,r)
r=i+2
s=m+l*0.18
o=B.M()
o.r=A.c.j(0.18).gp(0)
d.aE(new B.a5(r,s,r+(u-4),s+j),o)
if(f){o=l*0.42
this.lQ(d,"+",new B.m(t+u*0.08,m+n),A.dl,o)
if(g!=null)this.lQ(d,g,new B.m(i+u*0.12,m+w),A.bP,o)}},
bNh(d,e,f){return this.aU4(d,e,!0,f)},
bNg(d,e,f){return this.aU4(d,e,f,null)},
bKc(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a6.e,a4=B.v(a3===A.h.b9(a3)?A.h.S(a3):a3)+"V"
if(a3<=2){a2.bNh(a5,D.fwp,a4)
a2.lQ(a5,"\u2212",D.eJF,A.ab,12)
a2.lQ(a5,"+",D.eGz,A.aQ,12)
$.U()
w=B.M()
w.r=A.by.gp(0)
a5.aE(D.fwd,w)
w=a6.as
v=B.M()
v.r=B.ap(A.aC,A.bf,w).gp(0)
a5.aE(new B.a5(-22,15,-22+44*w,19),v)
if(a6.as<=0.02)a2.lQ(a5,"FLAT",D.eJb,A.c3,9)}else if(a3<=4.5){u=a3>3?3:2
t=u*13+6
w=-t/2
v=w+t
s=new B.a5(-31,w,31,v)
r=B.bx(s,A.jL)
$.U()
q=B.M()
q.san(D.cfY.az(0,s))
a5.aq(r,q)
for(r=w+3,p=0;p<u;++p){q=r+p*13
a2.bNg(a5,new B.a5(-27,q,25,q+11.5),!1)}for(q=r+(t-6),o=0;o<2;++o){n=D.diL[o]
$.U()
m=new B.ar(A.V,A.R,A.X,A.Y,A.W)
m.r=A.dW.gp(0)
a5.aE(new B.a5(n,r,n+1.6,q),m)}a2.lQ(a5,a4,new B.m(-9,v+1),A.aQ,10)
a2.lQ(a5,"+",new B.m(25,w-13),A.aQ,11)}else if(a3<=9){l=new B.a5(-18,-16,18,18)
w=B.bx(l,A.hv)
v=$.U()
r=B.M()
r.san(D.cgf.az(0,l))
a5.aq(w,r)
k=new B.a5(-18,-4,18,18)
r=B.rm(k,A.hv,A.hv,A.bJ,A.bJ)
w=B.M()
w.san(D.aw6.az(0,k))
a5.aq(r,w)
j=new B.a5(-18,-16,18,-11)
w=B.rm(j,A.bJ,A.bJ,A.hv,A.hv)
r=B.M()
r.san(D.cgG.az(0,j))
a5.aq(w,r)
i=B.M()
i.san(D.eTu.az(0,D.fvY))
a5.P(D.aPQ,4,i)
r=B.a([],x.v)
h=new B.aI(v.r,A.ak,null,null,r)
for(g=0;g<6;++g){f=g*3.141592653589793/3
w=7+Math.cos(f)*5
v=-19+Math.sin(f)*5
if(g===0){w=new B.b_(w,v)
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
w=B.M()
w.r=A.cz.gp(0)
a5.P(D.eHK,2,w)
a2.lQ(a5,"9V",D.eK7,A.c,13)
a2.lQ(a5,"+",D.eJ7,A.aQ,11)}else{e=new B.a5(-34,-12,34,18)
w=B.bx(e,A.hv)
$.U()
v=B.M()
v.san(D.cdK.az(0,e))
a5.aq(w,v)
d=new B.a5(-36,-18,36,-10)
v=B.bx(d,D.eTC)
w=B.M()
w.san(D.awn.az(0,d))
a5.aq(v,w)
for(g=0;g<6;++g){w=new B.ar(A.V,A.R,A.X,A.Y,A.W)
w.r=A.ax.gp(0)
a5.P(new B.m(-14+g*5.6,-14),1.6,w)}w=B.M()
w.r=A.bu.j(0.92).gp(0)
a5.aE(D.fwz,w)
for(o=0;o<2;++o){w=D.cJ2[o]
n=w.a
a0=w.b
a1=B.c1(new B.m(n,-21),7,8)
w=B.bx(a1,A.FB)
v=new B.ar(A.V,A.R,A.X,A.Y,A.W)
v.san(D.cei.az(0,a1))
a5.aq(w,v)
v=B.bx(B.c1(new B.m(n,-24),3.5,9),A.FB)
w=new B.ar(A.V,A.R,A.X,A.Y,A.W)
w.r=a0.gp(a0)
a5.aq(v,w)}a2.lQ(a5,"\u2212",D.eJG,A.ab,11)
a2.lQ(a5,"+",D.eGu,A.aC,11)
a2.lQ(a5,"12V",H.aPK,A.ax,11)}},
aC(d){return!0}}
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
n=new C.um(o,r,q,p)
n.aut(o,r,q,p)
k.push(n)
J.il(s[4],new C.cye(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.I)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.aol(m,u[1],l,u[3])}}}
C.alH.prototype={
R(){var w=x.N
return new C.alI(B.c3(2000,1,1,0,0,0,0,0),A.J,A.az,B.S(w,x.gl),B.aR(w),$,A.bI,0,B.a([],x.X),null,null)}}
C.alI.prototype={
ahq(d){var w=this,v=w.ch
if(v!=null)v.a2(0)
w.l(new C.bNH(w,d))
w.ch=B.cE(A.mz,new C.bNI(w))},
t(){var w=this.ch
if(w!=null)w.a2(0)
w=this.db
if(w!=null)w.a2(0)
this.bzJ()},
a2J(d,e){return this.cpb(d,e)},
b6B(d){return this.a2J(d,!1)},
cpb(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a2J=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
r=d.at
q=e?A.o6:A.zv
p=d.b
w=3
return B.b(K.hxU(s,r,p,d.ax<3.2,q,$.r2().h(0,p).b),$async$a2J)
case 3:o=g
t.cy=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a2J,v)},
cCj(d){var w=this,v=new B.W(Date.now(),0,!1),u=w.CW.c0(0,d.a,new C.bNJ()),t=J.cK(u)
t.K(u,v)
t.bs(u,new C.bNK(v))
if(t.gI(u)>=4){t.a7(u)
t=w.db
if(t!=null)t.a2(0)
w.a45(d)
return}if(t.gI(u)===3){t=w.db
if(t!=null)t.a2(0)
w.db=B.cE(A.j5,new C.bNL(w,u,d))}},
a2n(d){return this.cnq(d)},
cnq(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a2n=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
w=3
return B.b(C.iLV(s,d.b,A.h.S(A.h.F(t.a.c.d*0.12,1)*100)),$async$a2n)
case 3:t.cy=!1
case 1:return B.h(u,v)}})
return B.i($async$a2n,v)},
a45(d){return this.czM(d)},
czM(d){var w=0,v=B.j(x.H),u=this,t
var $async$a45=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bW(A.L,null,new C.bNF(u,d),t,!0,!0,!0,null,!1,!1,x.H),$async$a45)
case 2:return B.h(null,v)}})
return B.i($async$a45,v)},
Z(){this.a4()
this.blQ()
this.mA()},
blQ(){this.a.c.e=new C.bO0(this)},
mT(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.wj(0,d)
for(w=q.a.c.a,v=w.length,u=q.cx,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=D.mP.h(0,s.b)
if((r==null?null:r.b)!==D.Bv)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.q(0,s.a)&&!q.cy){u.K(0,s.a)
q.a2J(s,!0)}}else u.X(0,s.a)}if((q.ax+=d)>0.16){q.ax=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)G.dI(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)G.dI(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cX.ai()<0.5
else u=!1
if(u)G.dI(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){G.dI(900+A.cX.aw(800),"",90,0,0.1,o)
if(A.cX.ai()<0.35)G.dI(300+A.cX.aw(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cX.ai()<0.4
else u=!1
if(u)G.dI(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)G.dI(330+A.n.F(110*A.h.bb(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)G.dI((A.h.bb(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)G.dI(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)G.dI(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cX.ai()<0.5
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
q.l(new C.bO1())},
bdN(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.at
l=p.c
k=n===0?-1:1
j=D.mP.am(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new B.y(p,n)
r=i}}}return s},
b7g(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.T(w).k("dn<1>"),w=new B.dn(w,v),w=new B.bQ(w,w.gI(0),v.k("bQ<aj.E>")),u=d.a,v=v.k("aj.E"),t=d.b;w.A();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.at
p=s.d
o=D.mP.am(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cPB(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.I)(w),++q){p=w[q]
o=p.a
n=this.at
m=o.c
l=p.b===0?-1:1
k=D.mP.am(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.at
m=o.c
j=p.d===0?-1:1
i=D.mP.am(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=C.hXJ(new B.m(k,n),new B.m(i,l),p)
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
aho(){this.a.toString
this.l(new C.bN6())},
bwm(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.dmv[v]
if(!A.d.aR(p.a.c.a,new C.bO2(u,w))){o=new B.m(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?A3.Bk:o
s=s?A3.Bk:o
q=t.anw(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.x=null
G.dI(1200,"",50,0,0.3,"tri")
p.aho()},
C(d){var w,v,u,t,s,r,q,p,o,n=this
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.Uh[v].a)
u=w.length
t=u>8
s=t?A.d.dr(w,0,A.n.ao(u+1,2)):w
r=t?A.d.fH(w,A.n.ao(w.length+1,2)):A.M
q=n.a.d
if(q!=null){w=B.a3(q).k("cv<1>")
w=B.B(new B.cv(q,w),w.k("L.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.I)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b75(s,!0))
n.a.toString
if(t)w.push(n.b75(r,!0))
w.push(B.E(B.cg(new C.bO_(n,q)),1))
return B.w(w,A.l,null,A.e,A.i,0,A.p)},
b75(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=$.r2()
s=t.h(0,u).d.j(0.14)
r=new B.aQ(14,14)
q=new B.ax(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.aA(p,B.q(p,B.w(B.a([B.c(t.h(0,u).c,p,p,p,p,p,p,A.ym,p,p,p),B.c(t.h(0,u).b,p,1,A.a2,p,p,p,A.ox,p,p,p)],n),A.l,p,A.ba,A.i,0,A.p),A.f,p,p,new B.p(s,p,new B.bE(q,q,q,q),new B.bc(r,r,r,r),p,p,A.m),p,p,p,L.p1,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bN7(this,u),p,p,p,p,p,p,!1,A.a4))}return B.q(p,B.ck(m,p,p,A.hq,p,p,A.aJ,!1),A.f,p,p,new B.p(L.CP,p,new B.bE(A.a1,A.a1,new B.ax(o,1,A.r,-1),A.a1),p,p,p,A.m),p,58,p,p,p,p,p,p)},
crn(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a2.b,a1=$.r2().h(0,a0)
a1.toString
w=a2.dy
v=a2.fr
u=new C.bNt(e,a1)
t=new C.bNs()
s=B.n(20)
r=a1.d
q=B.K(r.j(0.55),A.r,1.3)
p=B.a([new B.ac(0,A.G,r.j(0.18),A.cy,16)],x.V)
o=r.j(0.18)
n=B.n(10)
n=B.q(A.z,B.c(a1.c,d,d,d,d,d,d,A.ym,d,d,d),A.f,d,d,new B.p(o,d,d,n,d,d,A.m),d,34,d,d,d,d,d,34)
o=B.E(B.c(a1.b,d,1,A.a2,d,d,d,B.l(d,d,r,d,d,d,d,d,d,d,d,15,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d),1)
m=B.n(999)
l=B.K(A.aT,A.r,1)
k=x.p
m=B.a([B.A(B.a([n,A.aa,o,B.aA(d,B.q(d,B.c(e.f?"Less":"About",d,d,d,d,d,d,A.Xs,d,d,d),A.f,d,d,new B.p(d,d,l,m,d,d,A.m),d,d,d,d,A.oc,d,d,d),A.y,!1,D.hRr,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.bNe(e),d,d,d,d,d,d,!1,A.a4),B.aJ(d,d,d,d,D.c87,d,d,d,new C.bNf(e,a2),d,d,d,d,"Remove part",A.cp),B.aJ(d,d,d,d,Ar.RI,d,d,d,new C.bNg(e),d,d,d,d,d,A.cp)],k),A.l,d,A.e,A.i,0,d,d)],k)
if(e.f)A.d.u(m,B.a([B.c(a1.e,d,d,d,d,d,d,A.LR,d,d,d),A.cR,B.c("How it is made: "+a1.f,d,d,d,d,d,d,U.aZy,d,d,d)],k))
m.push(A.aj)
if(a2.x)m.push(D.h5G)
else m.push(new B.C(A.eW,B.A(B.a([t.$2(A.h.a1(Math.abs(a2.dy),2),"VOLTS"),A.b7,t.$2(A.h.a1(Math.abs(a2.fr)*1000,0),"MILLIAMPS"),A.b7,t.$2(A.h.a1(Math.abs(w*v),2),"WATTS")],k),A.l,d,A.e,A.i,0,d,d),d))
j=e.a.c.bjH(a2)
if(j!=null){a1=(a2.x?A.aC:A.as).j(0.14)
w=B.n(10)
v=B.K((a2.x?A.aC:A.as).j(0.5),A.r,1)
m.push(new B.C(A.hp,B.q(d,B.c((a2.x?"Why it burnt out":"Why it is not working")+": "+j,d,d,d,d,d,d,D.h1t,d,d,d),A.f,d,d,new B.p(a1,d,v,w,d,d,A.m),d,d,d,d,A.ct,d,d,d),d))}if(C.hva(a0)){a1=B.a([],k)
for(i=0;i<10;i=h){h=i+1
a1.push(new B.C(A.eW,new E.e6("CH "+h,a2.at===i,new C.bNk(e,a2,i),d,r,d),d))}a1=B.cb(B.A(a1,A.l,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,d,A.aJ)
if(e.a.c.rT(a2)){w=F.U5[A.n.F(a2.at,10)]
v=e.f?" Tap the TV 3 times quickly to open the big screen.":""
v="Showing: "+w.a+"."+v
w=v}else w="The TV is off. Give it power with the + dot towards the battery +."
a1=B.a([A.aj,a1,A.at,B.c(w,d,e.f?4:1,A.a2,d,d,d,N.hI,d,d,d)],k)
if(e.a.c.rT(a2))a1.push(new E.fO(A.xx,"Open big screen",new C.bNl(e,a2),r,d))
A.d.u(m,a1)}if(D.mP.am(0,a0)&&!C.hva(a0)){a1=B.a([A.aj],k)
if(e.f||!e.a.c.rT(a2))a1.push(B.c(e.a.c.rT(a2)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",d,d,d,d,d,d,N.hI,d,d,d))
if(e.a.c.rT(a2))a1.push(new E.fO(A.Rl,"Open the "+$.r2().h(0,a0).b,new C.bNm(e,a2),r,d))
A.d.u(m,a1)}if(D.mP.am(0,a0))A.d.u(m,B.a([A.aj,new E.fO(A.E3,"Make it bigger (or tap it 4 times)",new C.bNn(e,a2),r,d)],k))
e.a.toString
a1=a0==="buck"
if(a1||a0==="regulator"){w=A.h.a1(a2.db,1)
if(e.a.c.rT(a2))v=a2.dx
else{e.a.toString
v=a0==="regulator"?5:a2.e}v=B.a([A.aj,B.c("Volts in: "+w+" V   \u2192   Volts out: "+A.h.a1(v,1)+" V",d,d,d,d,d,d,D.fWg,d,d,d)],k)
if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dH7[g]
w=f===A.h.b9(f)?A.h.S(f):f
a1.push(new E.e6(B.v(w)+" V out",a2.e===f,new C.bNo(e,a2,f),d,r,d))}v.push(new B.C(A.kQ,B.bX(A.bG,a1,A.bq,d,0,6),d))}if(a0==="regulator")v.push(D.hkW)
A.d.u(m,v)}if(e.a.c.NB(a2)&&!a2.x){a1=A.h.a1(a2.cx,2)
w=A.h.a1(e.a.c.B8(a2),2)
v=e.a.c
o=v.ar9(a2)?"   \u26a0 OVERLOADED":""
a1=B.c("Supplying "+a1+" A of the "+w+" A it can give"+o,d,d,d,d,d,d,B.l(d,d,v.ar9(a2)?A.c3:A.el,d,d,d,d,d,d,d,d,12.5,d,d,A.C,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
w=B.n(4)
o=A.h.D(a2.cx/e.a.c.B8(a2),0,1)
v=e.a.c.ar9(a2)?A.aC:A.bf
m.push(new B.C(A.hp,B.w(B.a([a1,A.cR,B.bv(w,B.jK(A.by,d,d,5,d,o,new B.lf(v,x.c)),A.ap)],k),A.B,d,A.e,A.i,0,A.p),d))}a1=a0==="battery"
if(a1&&a2.e===1.5){w=a2.as
v=A.h.S(w*100)
if(w<=0.02)w="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else w=w>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.C(A.hp,B.c("Charge: "+v+"%"+w,d,d,d,d,d,d,D.fPD,d,d,d),d))}if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.duz[g]
w=f===1.5?"1.5 V (rechargeable)":B.v(f)+" V"
a1.push(new E.e6(w,a2.e===f,new C.bNp(e,a2,f),d,r,d))}m.push(B.bX(A.bG,a1,A.bq,d,0,6))}if(a0==="resistor"){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dje[g]
w=f>=1000?"1 k\u03a9":""+A.n.S(f)+" \u03a9"
a1.push(new E.e6(w,a2.r===f,new C.bNq(e,a2,f),d,r,d))}m.push(B.bX(A.bG,a1,A.bq,d,0,6))}if(a0==="solar")m.push(u.$3("Sunlight",a2.f,new C.bNr(a2)))
if(a0==="turbine")m.push(u.$3("Wind",a2.f,new C.bNh(a2)))
if(a0==="pot")m.push(u.$3("Knob",a2.f,new C.bNi(a2)))
if(a0==="ldr")m.push(u.$3("Light",a2.f,new C.bNj(a2)))
if(a0==="crank")m.push(D.hg6)
if(a0==="switch")m.push(B.c(a2.w?"Closed: the loop is joined up.":"Open: the loop is broken.",d,d,d,d,d,d,N.hI,d,d,d))
return B.q(d,new B.cO(D.bb4,B.cb(B.w(m,A.B,d,A.e,A.P,0,A.p),A.t,d,A.y,d,d,d,d,d,A.ah),d),A.f,d,d,new B.p(F.a_9,d,q,s,p,d,A.m),d,d,D.hQu,d,D.bI2,d,d,d)}}
C.bg9.prototype={}
C.Xh.prototype={
R(){return new C.aHi(C.hBu(),new B.cB(null,x.gJ),B.aR(x.S))}}
C.aHi.prototype={
Z(){this.a4()
$.aS.cT$.push(this)
this.ahp()},
ahp(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahp=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fXm(),$async$ahp)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.iL0(t.d,r)
if(s!=null){t.l(new C.e87(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$ahp,v)},
Gx(){var w,v=this
if(!v.as)return
w=C.iAI(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bKc(w)},
jj(d){if(d!==A.fY)this.Gx()},
t(){$.aS.hR(this)
this.Gx()
this.a3()},
cgk(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.T(v).k("X<1>")
t=new B.X(v,new C.e8g(q),u).gI(0)
s=new B.X(v,new C.e8h(),u).gI(0)
r=new B.X(v,w.gd4j(),u).gI(0)
if(t!==q.x||s!==q.y||r!==q.z)q.l(new C.e8i(q,t,s,r))}if(A.n.F(q.w,45)===0)q.Gx()
if(A.n.F(q.w,10)===0){w=q.f
$.akM()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.q(0,q.f)&&$.akM()[q.f].c.$1(q.d)){w.K(0,q.f)
C.Kj("bell",B.a([0,4,7,12],x.t),700,0.45)
q.l(new C.e8j())
q.Gx()
w=q.c
w.toString
w=B.KM(w)
if(w!=null)w.T(B.b2(p,p,p,p,p,A.t,p,B.c("\u2705 Challenge done: "+$.akM()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mx,p,p,p,p,p,p,p,p,p,p))}},
akl(){var w=0,v=B.j(x.H),u=this,t
var $async$akl=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cf(null,null,!0,null,new C.e86(u),t,null,!0,!0,x.H),$async$akl)
case 2:return B.h(null,v)}})
return B.i($async$akl,v)},
b4e(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.n(12),t=B.K(f.j(0.45),A.r,1)
u=B.a([B.ao(w,B.q(w,B.V(d,f,w,w,w,18),A.f,w,w,new B.p(v,w,t,u,w,w,A.m),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ao(w,h,w,w,w,-1,-3,w))
return B.aA(w,B.fQ(new B.a4(40,38,new B.am(A.a0,w,A.ac,A.f,u,w),w),w,e,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4)},
b4d(d,e,f,g){return this.b4e(d,e,f,g,null)},
ava(d,e,f,g){var w=null,v=f.j(0.1),u=B.n(10),t=B.K(f.j(0.4),A.r,1)
return B.E(B.aA(w,B.q(w,B.A(B.a([B.V(d,f,w,w,w,15),A.dU,new B.cZ(1,A.c6,B.c(e,w,1,A.a2,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.ba,A.i,0,w,w),A.f,w,w,new B.p(v,w,t,u,w,w,A.m),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),1)},
aiC(){var w=0,v=B.j(x.H),u=this,t
var $async$aiC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a7(t,!1).ca(B.e4(new C.e82(u),!1,null,x.H)),$async$aiC)
case 2:t=u.e.gbn()
if(t!=null)t.blQ()
if(u.c!=null)u.l(new C.e83())
u.Gx()
return B.h(null,v)}})
return B.i($async$aiC,v)},
bNo(){var w,v,u,t,s=null,r=this.f
$.akM()
if(r>=11)return s
w=this.r
v=w.q(0,r)
r=v?A.bh:A.aC
u=B.n(9)
t=B.K(L.CP,A.r,1.5)
return B.q(s,B.at(B.c(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.yq,s,s,s),s,s,s),A.f,s,D.baV,new B.p(r,s,t,u,s,s,A.m),s,s,s,s,A.fd,s,s,s)},
alv(){var w=0,v=B.j(x.H),u=this,t
var $async$alv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bW(F.ni,null,new C.e8f(u),t,!0,!0,!0,A.kA,!1,!1,x.H),$async$alv)
case 2:return B.h(null,v)}})
return B.i($async$alv,v)},
cgl(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.aA(r,B.q(r,D.c4H,A.f,r,r,new B.p(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e8l(d),r,r,r,r,r,r,!1,A.a4),o=B.n(11)
o=B.q(r,D.bgV,A.f,r,r,new B.p(A.bt,r,B.K(A.aH.j(0.45),A.r,1),o,r,r,A.m),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.q(r,B.w(B.a([B.A(B.a([p,A.aa,o,A.aa,B.E(B.w(B.a([D.hiP,B.c(w,r,1,A.a2,r,r,r,B.l(r,r,s.y>0||s.z>0?A.f1:A.ho,r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.B,r,A.e,A.i,0,A.p),1),new C.aB7(s.gcn8(),r),A.uy,s.b4d(A.rw,"Construction Lab: real 3D wiring, plumbing and a house",A.cY,new C.e8m(s,d)),s.b4e(A.m9,"Challenges",A.aQ,s.gcF_(),s.bNo()),s.b4d(A.DZ,"How to play",A.aH,new C.e8n(d,e))],v),A.l,r,A.e,A.i,0,r,r),A.aj,B.A(B.a([s.ava(A.of,"Circuits",A.bk,s.gcxD()),A.b7,s.ava(A.p6,"Repair",A.aQ,new C.e8o(s)),A.b7,s.ava(I.xv,"Clear",A.c3,new C.e8p(s))],v),A.l,r,A.e,A.i,0,r,r)],v),A.l,r,A.e,A.P,0,A.p),A.f,r,r,new B.p(L.CP,r,new B.bE(A.a1,A.a1,new B.ax(q,1,A.r,-1),A.a1),r,r,r,A.m),r,r,r,r,D.bNg,r,r,r)},
C(d){var w=this,v=null
$.avw="tech"
return B.c6(v,A.c9,B.bn(!0,B.w(B.a([w.cgl(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.hAj(w.d,w.e,w.gcgj(),v),1)],x.p),A.l,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
C.aB7.prototype={
R(){return new C.bed(null,null)}}
C.bed.prototype={
gaBy(){var w,v=this,u=v.d
if(u===$){w=B.br(null,A.Z,null,1,null,v)
w.cU(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
t(){this.gaBy().t()
this.bB4()},
C(d){var w=null,v=this.a.c
return B.aA(w,B.fQ(new B.a4(42,42,B.ca(this.gaBy(),new C.cQ4(this),w),w),w,"AI Inventor: say what you want to make",w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bec.prototype={
a5(d,e){var w,v,u,t=null,s=e.er(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.U()
w=B.M()
w.r=A.b2.j(0.25+0.15*o).gp(0)
w.y=O.p2
d.P(s,r+2+o*2,w)
w=B.M()
w.san(D.eT9.az(0,B.c0(s,r)))
d.P(s,r,w)
v=B.M()
v.b=A.ae
v.c=2.2
v.san(new B.hh(A.z,0,6.283185307179586,A.w,D.d8x,t,new B.n8(p)).az(0,B.c0(s,r)))
d.P(s,r,v)
p=new C.cQ3(d)
p.$3(s.a6(0,A.un),8+o*1.5,1)
q*=4
p.$3(s.a6(0,D.eHR),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a6(0,D.eKb),2.6,0.5+0.5*Math.cos(q))
u=B.h2(t,A.cK,t,t,t,D.fLW,A.a8,A.cb,t,A.e6,A.cc)
u.eL()
u.a5(d,s.a6(0,new B.m(-u.b.c/2,5)))},
aC(d){return d.b!==this.b}}
C.aBs.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bF()}}
C.aBt.prototype={
t(){var w,v,u
for(w=this.hj$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hi$
w===$&&B.d()
w.t()
this.bzI()}}
C.aO1.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bF()}}
C.bDd.prototype={}
C.h9.prototype={}
C.KN.prototype={
a9(){return"ScreenStyle."+this.b}}
C.mw.prototype={}
C.X0.prototype={
R(){return new C.aH8(A3.Bk,null,null)}}
C.aH8.prototype={
gacr(){var w,v=this,u=v.d
if(u===$){w=B.br(null,A.p0,null,1,null,v)
w.ct(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
gada(){var w=D.mP.h(0,this.a.c)
return w==null?D.aVQ:w},
t(){if(this.f){P.Dm(Y.LK)
P.bID()}this.gacr().t()
this.bCX()},
gCy(){var w=this.gacr().y
w=w==null?null:A.n.ao(w.a,1000)
return(w==null?0:w)/1000},
Pb(){var w,v=this,u=v.e
if(u==null)return null
w=F.iA[u].e
if(w===-2)return null
if(w===-1)return A.n.F(v.y+A.h.bb(Math.max(0,v.gCy()-v.z)/10),14)
return w},
KX(d){this.l(new C.e43(this,d))},
b7C(d){this.l(new C.e44(this,d,14))},
aFC(d){var w=this.Pb()
if(w==null)w=d>0?-1:0
return this.b7C(w+d)},
cK4(d,e){if(e.a<=0||e.b<=0||this.Pb()==null)return
this.l(new C.e4e(this,d,e))},
afm(){return this.c8o()},
c8o(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$afm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.Pb()
if(q==null){w=1
break}r.a=!1
s=t.c
s.toString
w=3
return B.b(B.bW(A.L,null,new C.e42(r,q),s,!0,!0,!0,null,!1,!1,x.H),$async$afm)
case 3:if(t.c!=null&&r.a)t.b7C(q)
case 1:return B.h(u,v)}})
return B.i($async$afm,v)},
cLD(){var w=this,v=!w.f
w.l(new C.e4f(w,v))
if(v){P.Dm(Y.ad8)
P.hw6(w.gada().b===D.y7)}else{P.Dm(Y.LK)
P.bID()}},
cgo(){var w,v=this
if(!v.f)return
B.jJ()
v.l(new C.e4g(v))
w=v.c.M(x.q).f
w.Np()
if(v.r)w.T(F.aXY)},
aSq(d){return B.cg(new C.e3W(this,d))},
cqM(d){var w,v=this,u=null,t=v.gCy(),s=t-v.w,r=s<1.4?new K.b1G(v.x,s):u
if(F.iA[d].e===-1){w=Math.max(0,t-v.z)
return new C.ahn(d,w,r,A.n.F(v.y+A.h.bb(w/10),14),u)}return new C.ahn(d,t,r,u,u)},
b18(d){var w=null,v=A.c.j(0.92),u=d*0.42
return B.aD(!1,A.a3,!0,w,B.aN(!1,w,!0,new B.C(new B.Q(u,0,u,0),B.A(B.a([B.V(A.kS,A.ax,w,w,w,d*0.6),new B.a4(d*0.18,w,w,w),B.c("Learn more",w,w,w,w,w,w,B.l(w,w,A.ax,w,w,w,w,w,w,w,w,d*0.48,w,w,A.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,w,w),w),A.nC,!0,w,w,w,w,D.hQw,w,w,w,w,w,w,this.gc8n(),w,w,w,w,w,w,w),A.f,v,0,w,w,A.nC,w,w,A.ai)},
b4f(d,e,f,g){var w=null,v=B.nu(w,A.bc,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w)
return B.aJ(w,w,w,w,B.V(d,A.c,w,w,w,w),w,w,g,f,w,w,w,v,e,w)},
cgn(d,e,f){return this.b4f(d,e,f,null)},
cyW(){var w=this,v=null,u=new C.e4c(),t=A.v.j(0.72),s=B.n(22),r=B.K(w.gada().d.j(0.5),A.r,1),q=u.$3(D.bXV,"AD \u2212",new C.e48(w)),p=u.$3(A.atu,"AD +",new C.e49(w)),o=u.$5$color$on(A.kR,"HOME",new C.e4a(w),w.gada().d,w.e==null),n=w.e
n=n!=null&&F.iA[n].e===-1
return B.q(v,B.A(B.a([q,p,o,u.$5$color$on(A.A9,"ADS",new C.e4b(w),A.c7,n)],x.p),A.l,v,A.e,A.P,0,v,v),A.f,v,v,new B.p(t,v,r,s,v,v,A.m),v,v,D.hQC,v,A.Ib,v,v,v)},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.gada(),l=o.f,k=!l||!o.r
l=l?B.aH(d,A.dM,x.w).w.r.b+26:8
w=o.cgn(A.cD,"Back to the board",new C.e4h(d))
v=o.f
u=v?Ao.II:A.xx
v=v?"Leave full screen":"Full screen"
v=o.b4f(u,v,o.gbeg(),D.hRE)
u=B.n(20)
t=o.e
s=m.a
r=x.p
q=new B.C(new B.Q(8,l,8,0),B.A(B.a([w,A.aa,v,A.aa,B.E(new B.bK(A.a9,n,n,B.q(n,B.c(t==null?s:s+" \xb7 "+F.iA[t].a,n,1,A.a2,n,n,n,Aq.yg,n,n,n),A.f,n,n,new B.p(A.bc,n,n,u,n,n,A.m),n,n,n,n,A.lG,n,n,n),n),1)],r),A.l,n,A.e,A.i,0,n,n),n)
p=m.b===D.y7?o.bPy(m):o.cui(m)
l=o.f
w=!l
v=l?o.gb4g():n
if(l){l=B.at(p,n,n,n)
u=k?1:0
r=new B.am(A.a0,n,A.b6,A.t,B.a([l,B.ao(n,B.xV(new B.dp(!k,q,n),A.b0,A.ig,u),n,n,0,0,0,n)],r),n)
l=r}else l=B.w(B.a([q,A.aj,o.cyW(),B.E(new B.C(A.cB,B.at(p,n,n,n),n),1)],r),A.l,n,A.e,A.i,0,A.p)
return B.c6(n,A4.a0N,B.bn(w,B.aA(A.c0,l,A.y,!1,n,v,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!1,A.a4),w,!1,A.ag,w,w),n,!1,!1,n,n)},
cgm(d){var w
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
cui(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.ac8
switch(n.a){case 1:w=44
break
case 2:w=30
break
case 3:w=22
break
case 4:w=26
break
default:w=14
break}v=B.ca(p.gacr(),new C.e47(p,w,d,m),o)
if(n===D.ac9)v=new B.C4(D.bNV,v,o)
n=p.cgm(n)
u=p.f?A.hO:Au.a2g
t=m?4:5
s=d.c
r=B.ap(s,A.c,m?0.25:0.08)
r.toString
q=B.ap(s,A.v,0.5)
q.toString
q=B.a([r,s,q],x.O)
s=B.n(w)
r=B.a([new B.ac(0,A.G,d.d.j(0.28),A.J,36)],x.V)
return new B.fC(n,B.q(o,B.q(o,v,A.f,o,o,new B.p(A.v,o,o,B.n(w-3),o,o,A.m),o,o,o,o,A7.Ic,o,o,o),A.f,o,o,new B.p(o,o,o,s,r,new B.a6(A.aw,A.aD,A.w,q,o,o),A.m),o,o,o,u,new B.Q(t,t,t,t),o,o,o),o)},
bcT(d){var w=Date.now(),v=A.n.D(this.a.d+A.h.bb(this.gCy()*0.4),0,100),u=d.b===D.ac8,t=u?34:20,s=u?28:18
return new B.C(new B.Q(t,12,s,2),B.cg(new C.e4d(new B.W(w,0,!1),v)),null)},
azm(d,e,f){var w,v=null,u=d.d,t=B.ap(u,A.v,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.n(e*0.26)
w=x.p
t=B.a([B.q(v,B.at(B.c(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.p(v,v,v,u,D.dBq,new B.a6(A.aw,A.aD,A.w,t,v,v),A.m),v,e,v,v,v,v,v,e)],w)
if(f)A.d.u(t,B.a([A.at,B.c(d.a,v,1,A.a2,v,v,v,D.fSG,v,v,v)],w))
return B.aA(v,B.w(t,A.l,v,A.e,A.P,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.e40(this,d),v,v,v,v,v,v,!1,A.a4)},
c6e(d,e){return this.azm(d,e,!0)},
c5W(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=o===D.aVR||o===D.Bx,m=d.d,l=B.ap(m,A.v,0.55)
l.toString
m=B.ap(m,A.kc,0.5)
m.toString
m=B.a([l,A.dD,m],x.O)
l=q.bcT(d)
w=n?190:138
v=B.n(24)
u=B.K(A.aT,A.r,1)
w=B.aA(p,B.q(p,B.bv(B.n(23),B.b5(p,p,p,new C.ahn(0,q.gCy(),p,p,p),A.hj),A.ap),A.f,p,p,new B.p(p,p,u,v,p,p,A.m),p,w,p,A.ih,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.e3Z(q),p,p,p,p,p,p,!1,A.a4)
v=n?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.iA[s]
t.push(new B.cp(A.z,p,p,new B.d8(A.dn,A.z,A.f,q.c6e(r,n?58:54),p),p))}l=B.a([l,A.aj,w,A.af,B.E(B.lk(0.92,t,v,8,12,A.vp,p,!1),1)],u)
if(o!==D.ac9){o=A.c.j(0.16)
w=B.n(28)
l.push(B.q(p,B.cg(new C.e4_(q)),A.f,p,p,new B.p(o,p,p,w,p,p,A.m),p,p,p,D.bIc,H.aqf,p,p,p))}return B.q(p,B.w(l,A.l,p,A.e,A.i,0,A.p),A.f,p,p,new B.p(p,p,p,p,p,new B.a6(A.aw,A.aD,A.w,m,p,p),A.m),p,p,p,p,p,p,p,p)},
bIN(d,e){var w=this,v=null,u=w.Pb(),t=w.bcT(d),s=B.E(w.aSq(e),1),r=x.p,q=B.a([B.bT(0,B.aA(v,B.q(v,B.at(B.c(F.iA[e].a,v,v,v,v,v,v,A.LU,v,v,v),v,v,v),A.f,A.v,v,v,v,v,v,v,v,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.e3T(w),v,v,v,v,v,v,!1,A.a4),0,0,0)],r)
if(u!=null)u=!w.f||!w.r
else u=!1
if(u)q.push(B.ao(8,w.b18(22),v,v,v,10,8,v))
return B.q(v,B.w(B.a([t,s,new B.a4(v,38,new B.am(A.a0,v,A.ac,A.t,q,v),v)],r),A.l,v,A.e,A.i,0,A.p),A.f,A.v,v,v,v,v,v,v,v,v,v,v)},
aVt(d,e){return B.ca(this.gacr(),new C.e3Y(this,e,d),null)},
bPy(d){var w,v,u,t=this,s=null,r=t.a.c,q=r==="carscreen"
if(t.f)return B.qL(t.aVt(d,q))
r=r==="imac"?26:8
w=d.c
v=B.ap(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.n(q?26:14)
u=B.a([new B.ac(0,A.G,d.d.j(0.25),A.J,36)],x.V)
return new B.fC(1.5384615384615383,B.q(s,B.bv(B.n(q?20:8),t.aVt(d,q),A.ap),A.f,s,s,new B.p(s,s,s,v,u,new B.a6(A.aw,A.aD,A.w,w,s,s),A.m),s,s,s,A.aq9,new B.Q(8,8,8,r),s,s,s),s)}}
C.bBe.prototype={
a5(d,e){var w,v,u,t,s,r=e.a,q=e.b,p=0+r,o=0+q
$.U()
w=B.M()
v=this.c
u=B.ap(v,A.v,0.6)
u.toString
t=B.ap(v,A.kc,0.4)
t.toString
w.san(new B.a6(A.aw,A.aD,A.w,B.a([u,A.dD,t],x.O),null,null).az(0,new B.a5(0,0,p,o)))
d.aE(new B.a5(0,0,p,o),w)
for(p=this.b,o=p*0.4,p*=0.3,s=0;s<5;++s){w=Math.sin(o+s)
u=Math.sin(p+s*1.7)
t=new B.ar(A.V,A.R,A.X,A.Y,A.W)
t.r=v.j(0.1).gp(0)
t.y=D.bO_
d.P(new B.m(r*(0.15+0.2*s+0.05*w),q*(0.3+0.3*u)),q*(0.2+0.04*s),t)}},
aC(d){return!0}}
C.ahn.prototype={
a5(d,e){var w=this
return K.MR(d,e,w.b,w.c,w.e,w.d)},
aC(d){return!0}}
C.aPQ.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bF()}}
C.bA0.prototype={}
C.aaV.prototype={
C(d){var w=null
return B.c6(B.eR(w,w,w,!0,!0,D.al0,w,1,!0,w,0,!1,w,!1,w,w,B.aJ(w,w,w,w,I.av2,w,w,w,new C.cr7(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.hs0,w,w,w,1,w,!0),D.al0,B.ck(B.a([D.eLI,B.cg(new C.cr8())],x.p),w,w,D.bJj,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.YH.prototype={
R(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aIS(w,new B.au(A.ay,$.ay()),$,A.bI,0,B.a([],x.X),null,null)}}
C.aIS.prototype={
Z(){this.a4()
this.mA()},
baJ(d){var w=this.d.length
return A.n.F(A.h.bb(A.h.F(A.h.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
mT(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.baJ(v.f)
if(w!==v.x){v.x=w
E.mS("bell",24+A.n.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.l(new C.f52(v))
C.Kj("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
cim(){if(this.d.length<2)return
this.l(new C.f4Z(this))},
b4U(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.l(new C.f4Y(w,v))},
C(d){var w,v,u,t,s=this,r=null,q=s.gcil(),p=s.d,o=B.E(B.aA(r,B.b5(r,r,r,new C.bBr(p,s.f,r),A.hj),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.w(B.a([o,new B.a4(r,40,B.at(B.c(n,r,r,r,r,r,r,D.h_Q,r,r,r),r,r,r),r)],w),A.l,r,A.e,A.i,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.aF0[A.n.F(v,8)].j(0.9)
t=new B.aQ(20,20)
o.push(B.aA(r,B.q(r,B.c(p[v],r,r,r,r,r,r,D.h_1,r,r,r),A.f,r,r,new B.p(u,r,r,new B.bc(t,t,t,t),r,r,A.m),r,r,r,A.eW,A.h1,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.f50(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a4))}p=A.c.j(0.07)
return E.m5(A.aQ,A.fh,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.w(B.a([new E.fm(o,r,r),B.A(B.a([B.E(B.aO(r,A.M,!1,r,!0,A.t,r,B.aP(),s.e,r,r,r,r,r,2,B.bB(r,new B.b6(4,B.n(14),A.a1),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.jP,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.am,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.f51(s),r,!1,r,r,!1,r,!0,r,A.ad,r,r,r,r,r,r,r,r,r,r,r,A.dr,!0,A.a8,r,A.ao,r,r,r,r),1),A.aa,new E.fO(A.ii,"Add",s.gcij(s),A.c,r),A.b7,new E.fO(A.oe,"Spin",q,A.bf,r)],w),A.l,r,A.e,A.i,0,r,r)],w),A.l,r,A.e,A.P,0,A.p))}}
C.bBr.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=k/2,i=e.b,h=i/2+10,g=new B.m(j,h),f=Math.min(k,i)/2-24
i=f+8
k=$.U()
w=B.M()
w.r=D.bnk.gp(0)
d.P(g,i,w)
w=B.M()
w.b=A.ae
w.c=3
w.r=A.aQ.gp(0)
d.P(g,i,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(i=d.c,t=this.c,s=u/2,r=0;r<v;++r){q=t+r*u
p=B.c0(g,f)
o=new B.ar(A.V,A.R,A.X,A.Y,A.W)
o.r=D.aF0[A.n.F(r,8)].gp(0)
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
n=new B.iU(new B.eG(p,l,l,A.cW,l,l,l,l,l,l,D.fML),A.a8,A.cb,new B.k3(1),l,l,l,l,A.cc,l,A.cK)
n.eL()
p=n.b
o=p.c
p=p.a.c
n.a5(d,new B.m(f-o-16,-p.gb4(p)/2))
i.restore()}i=B.M()
i.r=D.akC.gp(0)
d.P(g,20,i)
i=B.M()
i.b=A.ae
i.c=3
i.r=A.aQ.gp(0)
d.P(g,20,i)
m=new B.aI(k.r,A.ak,l,l,B.a([],x.v))
h-=f
m.E(new B.b_(j,h+26))
h-=10
m.E(new B.aq(j-14,h))
m.E(new B.aq(j+14,h))
m.E(new B.bz())
h=B.M()
h.r=A.c.gp(0)
d.af(m,h)
h=B.M()
h.b=A.ae
h.c=2
h.r=A.bc.gp(0)
d.af(m,h)},
aC(d){return!0}}
C.Xp.prototype={
R(){return new C.bpd($,A.bI,0,B.a([],x.X),null,null)}}
C.bpd.prototype={
Z(){this.a4()
this.mA()},
mT(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.Kj("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.W3(900,new C.ebQ())}w.l(new C.ebR())},
b4W(d){return this.l(new C.ebL(this,d))},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aY(A.n.v(A.h.ao(m,60)),2,"0")
v=A.a.aY(A.n.v(A.n.F(A.h.cB(m),60)),2,"0")
m=B.b5(n,n,n,new C.bw1(l,A.c3,n),A.aXm)
u=B.c(w+":"+v,n,n,n,n,n,n,D.fRB,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.at(new B.a4(280,280,new B.am(A.z,n,A.ac,A.t,B.a([m,B.w(B.a([u,B.c(t,n,n,n,n,n,n,D.fQt,n,n,n),A.at,B.c("Sessions done: "+o.r,n,n,n,n,n,n,A.wq,n,n,n)],s),A.l,n,A.e,A.P,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.dxU[r]
u.push(new E.e6(""+q+" min",o.d===q,new C.ebN(o,q),n,A.c3,n))}m=o.f
p=m?Ab.vJ:A.fS
m=m?"Pause":"Start"
return E.m5(A.c3,A.fh,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.w(B.a([new E.fm(u,n,n),new E.fm(B.a([new E.fO(p,m,new C.ebO(o),A.bf,n),new E.fO(A.mH,"Reset",new C.ebP(o),A.c,n)],s),n,n)],s),A.l,n,A.e,A.P,0,A.p))}}
C.bw1.prototype={
a5(d,e){var w,v,u,t,s=e.er(A.J),r=e.a/2-14
$.U()
w=B.M()
w.b=A.ae
w.c=16
w.r=A.c.j(0.08).gp(0)
d.P(s,r,w)
w=B.c0(s,r)
v=B.M()
v.b=A.ae
v.c=16
v.d=A.bH
u=this.c
t=B.ap(u,A.c,0.4)
t.toString
v.san(new B.hh(A.z,-1.5707963267948966,4.71238898038469,A.w,B.a([u,t,u],x.O),null,null).az(0,B.c0(s,r)))
d.cR(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aC(d){return d.b!==this.b}}
C.Wz.prototype={
R(){return new C.boM($,A.bI,0,B.a([],x.X),null,null)}}
C.boM.prototype={
Z(){this.a4()
this.mA()},
mT(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.V_.h(0,p.d)
w.toString
v=A.d.eJ(w,new C.dWc())
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
E.mS("flute",D.chs[t]+5,1400,0.35)}p.l(new C.dWd())},
gcip(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.LD("Press Start",0.5)
w=D.V_.h(0,this.d)
w.toString
v=A.d.eJ(w,new C.dW7())
u=A.h.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.LD("Breathe in",0.5+0.5*A.dS.aA(0,p))
case 1:return new B.LD("Hold",1)
case 2:return new B.LD("Breathe out",1-0.5*A.dS.aA(0,p))
default:return new B.LD("Hold",0.5)}}}return new B.LD("",0.5)},
C(d){var w,v,u,t,s,r=this,q=null,p=r.gcip(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.fM.j(0.12+(3-u)*0.05)
n.push(B.q(q,q,A.f,q,q,new B.p(s,q,q,q,u===0?B.a([new B.ac(0,A.G,A.fM.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(B.c(p.a,q,q,q,q,q,q,A.qH,q,q,q))
n.push(B.ao(0,B.c("Breaths: "+r.w,q,q,q,q,q,q,A.jP,q,q,q),q,q,q,q,q,q))
n=B.at(new B.a4(300,340,new B.am(A.z,q,A.ac,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aM(D.V_.geF(D.V_));w.A();){v=w.gO(w)
o.push(new E.e6(v,r.d===v,new C.dWa(r,v),q,A.fM,q))}w=r.e
v=w?A.vN:A.fS
w=w?"Stop":"Start"
o.push(new E.fO(v,w,new C.dWb(r),A.bf,q))
return E.m5(A.fM,A.fh,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new E.fm(o,q,q))}}
C.aMq.prototype={}
C.Xg.prototype={
R(){return new C.bp4(new B.cB(null,x.A),B.a([],x.au),A.ax,A.c)}}
C.bp4.prototype={
C(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aJ(s,s,s,s,I.pe,s,s,s,new C.e7C(t,d),s,s,s,s,"Share",s)],r),p=B.bv(B.n(18),new B.ea(B.aA(s,B.b5(s,s,s,new C.br8(t.e,t.x,s),A.hj),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e7D(t),new C.e7E(t),s,s,s,s,s,s,s,s,s,new C.e7F(t),s,s,s,s,!1,A.a4),t.d),A.ap),o=B.a([],r)
for(w=0;w<9;++w){v=D.dan[w]
u=!t.w&&t.f.B(0,v)
o.push(new E.GD(v,u,new C.e7G(t,v),!1,s))}u=t.r
return E.m5(A.bE,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.C(A.bS,p,s),"DRAW PAD",B.w(B.a([new E.fm(o,s,s),E.jh(A.bE,""+A.h.S(u),"Brush",30,2,new C.e7H(t),u),new E.fm(B.a([new E.e6("Eraser",t.w,new C.e7I(t),A.Aa,A.bE,s),new E.fO(A.qf,"Undo",new C.e7J(t),A.c,s),new E.fO(A.et,"Clear",new C.e7K(t),A.c,s),new E.fO(A.R6,"Paper",new C.e7L(t),A.c,s)],r),s,s)],r),A.l,s,A.e,A.P,0,A.p))}}
C.br8.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k
$.U()
w=B.M()
w.r=this.c.gp(0)
d.aE(new B.a5(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=x.v,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=$.U()
q=new B.ar(A.V,A.R,A.X,A.Y,A.W)
p=s.a
q.r=p.gp(p)
o=s.b
q.c=o
q.d=A.bH
q.e=A.dR
q.b=A.ae
n=s.c
if(n.length===1){r=A.d.gH(n)
n=new B.ar(A.V,A.R,A.X,A.Y,A.W)
n.r=p.gp(p)
d.P(r,o/2,n)}else{p=B.a([],u)
m=new B.aI(r.r,A.ak,null,null,p)
p.push(new B.b_(A.d.gH(n).a,A.d.gH(n).b))
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
aC(d){return!0}}
C.Y2.prototype={
R(){var w=x.S
return new C.aI7(B.aR(w),B.aR(w))}}
C.aI7.prototype={
Z(){this.a4()
this.awH()},
awH(){var w,v,u=this,t=x.N,s=B.bt(D.dDK,!0,t)
A.d.Er(s)
w=x.S
v=B.T(s).c
t=B.B(B.cD(s,0,B.dy(u.d,"count",w),v),t)
A.d.u(t,B.cD(s,0,B.dy(u.d,"count",w),v))
A.d.Er(t)
u.e=t
u.f.a7(0)
u.r.a7(0)
u.w=0
u.x=!1},
cik(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
E.mS("bell",12+A.n.F(d,9),150,0.35)
s.l(new C.ezM(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gH(0)
u=w.gal(0)
w=s.e
w===$&&B.d()
t=x.H
if(w[v]===w[u])B.bM(A.nl,new C.ezN(s,v,u),t)
else{s.x=!0
B.bM(Ai.Dd,new C.ezO(s),t)}}},
C(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.d()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.c("Moves: "+r.w,q,q,q,q,q,q,A.Xz,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.n.ao(p,2)+" / "+o
o=x.p
p=B.w(B.a([new B.C(A.zG,B.A(B.a([u,B.c(p,q,q,q,q,q,q,B.l(q,q,w?A.aQ:A.ab,q,q,q,q,q,q,q,q,q,q,q,A.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.l,q,A.iC,A.i,0,q,q),q),B.E(B.ip(!0,q,q,A.y,new B.hG(v,8,8,1,q),new C.ezS(r),r.e.length,A.bg,q,A.ah,!1),1)],o),A.l,q,A.e,A.i,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.dcb[t]
o.push(new E.e6(s.b,r.d===s.a,new C.ezT(r,s),q,A.aH,q))}o.push(new E.fO(I.att,"New game",new C.ezU(r),A.bf,q))
return E.m5(A.aH,A.fh,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new E.fm(o,q,q))}}
C.Ye.prototype={
R(){return new C.aIv(B.a([],x.t))}}
C.aIv.prototype={
cio(d){A.d.a7(this.d)
this.w=!0
this.b4V()},
b4V(){this.d.push(A.cX.aw(4))
this.e=0
this.a1F()},
a1F(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a1F=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.l(new C.eMU(t))
s=x.H
w=3
return B.b(B.bM(A.m5,null,s),$async$a1F)
case 3:r=t.d,q=B.bt(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aYv(n)
w=7
return B.b(B.bM(new B.bh(1000*Math.max(280,600-r.length*18)),null,s),$async$a1F)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.l(new C.eMV(t))
case 1:return B.h(u,v)}})
return B.i($async$a1F,v)},
aYv(d){this.l(new C.eMS(this,d))
E.mS("marimba",D.chr[d]+5,450,0.55)
B.bM(A.HQ,new C.eMT(this),x.H)},
ciq(d){var w,v,u=this
if(!u.w||u.r)return
u.aYv(d)
w=u.d
v=u.e
if(w[v]!==d){G.dI(90,"",600,0,0.5,"saw")
u.l(new C.eMW(u))
return}++v
u.e=v
if(v===w.length){u.l(new C.eMX(u))
B.bM(A.hB,new C.eMY(u),x.H)}},
C(d){var w,v,u,t,s,r,q=this,p=null,o=B.c("Best: "+q.x,p,p,p,p,p,p,V.b_3,p,p,p),n=B.c(q.y,p,p,p,p,p,p,D.h0g,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aDS[v]
u=u.j(q.f===v?1:0.35)
t=new B.aQ(28,28)
s=q.f===v?B.a([new B.ac(0,A.G,D.aDS[v].j(0.8),A.J,30)],w):p
r=new B.ax(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.aA(p,B.cY(p,p,p,p,A.b0,new B.p(u,p,new B.bE(r,r,r,r),new B.bc(t,t,t,t),s,p,A.m),A.jC,p,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eMZ(q,v),p,p,p,p,p,p,!1,A.a4))}o=B.at(new B.C(A.ad,B.w(B.a([o,A.aj,n,A.df,new B.fC(1,B.lk(1,l,2,12,12,p,A.e9,!1),p)],m),A.l,p,A.ba,A.i,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return E.m5(A.bu,A.fh,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new E.fm(B.a([new E.fO(A.fS,n,q.gcin(q),A.bf,p)],m),p,p))}}
C.Yy.prototype={
R(){return new C.bqm(new B.au(A.ay,$.ay()))}}
C.bqm.prototype={
aAi(d){return B.og(A.h.a1(d,2),B.ag("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.f0o(),null)},
C(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.cA(B.aE(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.f0x()
l=B.aO(m,A.M,!1,m,!0,A.t,m,B.aP(),l,m,m,m,m,m,2,B.bB(m,m,m,m,m,m,m,m,!0,new B.b6(4,B.n(16),Ad.yQ),m,m,m,m,m,m,m,m,m,m,m,new B.b6(4,B.n(16),D.b9p),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.mi,"Bill amount",!0,!0,!1,m,m,m,m,D.fYt,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.am,m,m,m,m,m,A.ek,m,m,m,1,m,m,!1,"\u2022",m,new C.f0t(n),m,m,m,!1,m,m,!1,m,!0,m,A.ad,m,m,m,m,m,m,m,m,m,m,m,A.aZ0,!0,A.a8,m,A.ao,m,m,m,m)
k=A.bf.j(0.1)
s=B.n(20)
r=B.K(A.bf.j(0.35),A.r,1)
q=x.p
s=B.ck(B.a([l,A.bx,B.q(m,B.w(B.a([t.$2("Tip ("+A.h.S(n.e)+"%)","$"+n.aAi(w)),t.$2("Total","$"+n.aAi(v)),Aa.Pj,t.$3$big("Each of "+n.f+" pays","$"+n.aAi(u),!0)],q),A.l,m,A.e,A.i,0,A.p),A.f,m,m,new B.p(k,m,r,s,m,m,A.m),m,m,m,m,A.bR,m,m,m)],q),m,m,A.f7,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cWq[p]
r.push(new E.e6(""+o+"%",A.h.S(n.e)===o,new C.f0u(n,o),m,A.bf,m))}l=n.f
return E.m5(A.bf,A.fh,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.w(B.a([new E.fm(r,"TIP",m),E.jh(A.aH,""+l,"People",20,1,new C.f0v(n),l),new E.fm(B.a([new E.e6("Round up",n.r,new C.f0w(n),m,A.aQ,m)],q),m,m)],q),A.l,m,A.e,A.P,0,A.p))}}
C.Y1.prototype={
R(){var w=B.a([3,5],x.t)
return new C.bpQ(w,A.cX,$,A.bI,0,B.a([],x.X),null,null)}}
C.bpQ.prototype={
Z(){this.a4()
this.mA()},
mT(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.n.F(A.h.bb(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t
E.YA("snare",0,0.5)}u.l(new C.eyr())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.he()
u.w=t
u.x=t?0:3.141592653589793
E.mS("bell",24,400,0.5)}u.l(new C.eys())}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.biz(v,o.r>0,n))}u=B.aA(n,B.at(B.bX(A.fL,m,A.bq,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eyk(o),n,n,n,n,n,n,!1,A.a4)}else if(m==="coin"){t=A.h.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.K(A.de,A.r,6)
s=B.a([new B.ac(0,A.G,A.aQ.j(0.4),A.J,30)],x.V)
u=B.aA(n,B.at(B.e0(A.z,B.q(A.z,B.c(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fXC,n,n,n),A.f,n,n,new B.p(n,n,v,n,s,D.eTd,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eyl(o),n,n,n,n,n,n,!1,A.a4)}else{m=o.as
u=B.aA(n,B.at(B.w(B.a([B.c(m===0?"?":""+m,n,n,n,n,n,n,D.fMd,n,n,n),B.c("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.jP,n,n,n)],x.p),A.l,n,A.e,A.P,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eym(o),n,n,n,n,n,n,!1,A.a4)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.duO[r]
v.push(new E.e6(q.b,o.d===q.a,new C.eyn(o,q),q.c,A.bk,n))}v=B.a([new E.fm(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(E.jh(A.bk,""+s,"Dice",4,1,new C.eyo(o),s))}if(o.d==="num"){s=o.z
s=E.jh(A.bk,""+s,"From",100,1,new C.eyp(o),s)
p=o.Q
A.d.u(v,B.a([s,E.jh(A.bk,""+p,"To",1000,2,new C.eyq(o),p)],m))}return E.m5(A.bk,A.fh,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.w(v,A.l,n,A.e,A.P,0,A.p))}}
C.biz.prototype={
C(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cX.ai()-0.5)*0.6
else w=0
v=B.n(22)
u=B.a([new B.ac(0,A.G,A.v.j(0.4),A.cy,14)],x.V)
t=B.a([],x.p)
for(s=D.dR8.h(0,A.n.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bK(s[q],p,p,B.q(p,p,A.f,p,p,A.ZC,p,18,p,p,p,p,p,18),p))
return B.eO(A.z,w,B.q(p,new B.am(A.a0,p,A.ac,A.t,t,p),A.f,p,p,new B.p(A.c,p,p,v,u,p,A.m),p,100,p,p,A.bD,p,p,100),p)}}
C.aPC.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bF()}}
C.bD9.prototype={
t(){var w,v,u
for(w=this.hj$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hi$
w===$&&B.d()
w.t()
this.bCJ()}}
C.aPX.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bF()}}
C.bDf.prototype={
t(){var w,v,u
for(w=this.hj$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hi$
w===$&&B.d()
w.t()
this.bD4()}}
C.aQn.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bF()}}
C.bDp.prototype={
t(){var w,v,u
for(w=this.hj$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hi$
w===$&&B.d()
w.t()
this.bDw()}}
C.aQQ.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbE())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b6()
this.bF()}}
C.bDy.prototype={
t(){var w,v,u
for(w=this.hj$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hi$
w===$&&B.d()
w.t()
this.bDZ()}}
var z=a.updateTypes(["P(um)","~()","P(a6Y)","az<~>()","P(DA)","F(um,F)","G(G,um)","P(Dw)","P(a0J)","P(ae4)","P(a5Q)","P(o8)","Yz()","Wy()","aaV()","Y8()","Yn()","Y9()","P(nj)","WF()","ahH(Z,F)","agu(Z,F)","~(a9<@,@>)","F(Dw,Dw)","o(es)","P(ahu)","P(a31)","P(DL)","P(aeA)","P(agy)","P(aei)","F(F,rD)","F(F,DA)","o(rD)","~(rD,ah<o>,F)","rD?(DA)","Y1()","x(o,a2P)","P(acW)","~(Bw)","YC()","~(y2,o,m,u,G)","~(o,um)","Xh()","XM(Z)","OZ(Z)","X0(Z,bA<G>,bA<G>)","Jv(Z)","YH()","Xp()","Wz()","Xg()","Y2()","Ye()","Yy()","P(rD)"])
C.fXK.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+18}
C.fLF.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gH(d.e.split(". "))+"."},
$S:z+24}
C.fTG.prototype={
$1(d){var w
if(!this.a.NB(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fTH.prototype={
$1(d){return d.x},
$S:z+0}
C.fXH.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fXI.prototype={
$1(d){var w
if(!this.a.NB(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fXJ.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.ert.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eru.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.y(this.b,this.c))},
$S:0}
C.erv.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd3(v).Q
v.toString
w.lU(v,A.ed,A.ig)}},
$S:7}
C.erG.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a7(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.erH.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.erC.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.erA.prototype={
$2(d,e){var w=this.a
w.r.push(B.cE(B.dw(0,0,0,d,0,0),new C.erB(w,this.b,e)))},
$S:1971}
C.erB.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.erD.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gYx().anw(0,u[1],u[2],u[3])
u[4].bP(0,new C.ery(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
G.dI(700+w.e*120,"",80,0,0.25,"square")
v.l(new C.erz(w.a,v,w.f,w.r))},
$S:0}
C.ery.prototype={
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
C.erz.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.n.D(A.h.bb(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.erE.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gYx().aol(t,u[1],s,u[3])
G.dI(1500,"",45,0,0.25,"tri")
v=w.b
v.l(new C.erx(w.a,v,w.e,w.f))},
$S:0}
C.erx.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.n.D(A.h.bb(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.erF.prototype={
$0(){G.dI(300,"",360,-1.2,0.3,"square")
var w=this.a
w.l(new C.erw(w,this.b))},
$S:0}
C.erw.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.erK.prototype={
$0(){var w=this.a
return w.l(new C.erJ(w))},
$S:0}
C.erJ.prototype={
$0(){return this.a.at=!0},
$S:0}
C.erL.prototype={
$0(){var w=this.a
return w.l(new C.erI(w))},
$S:0}
C.erI.prototype={
$0(){return this.a.at=!1},
$S:0}
C.erM.prototype={
$0(){var w=this.a
w.f.sb1(0,this.b)
w.Rc()},
$S:0}
C.erN.prototype={
$0(){return this.a.a_D(this.b)},
$S:0}
C.erO.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.Rc():w.b0t()},
$S:2}
C.erP.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.Rc():w.b0t()},
$S:0}
C.eH0.prototype={
$2(d,e){return d+e},
$S:1972}
C.eHk.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.eHj(w,d))},
$S:675}
C.eHj.prototype={
$0(){var w=B.aK(J.t(this.b,"unlocked"))
w=w==null?null:A.h.L(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.eHl.prototype={
$0(){},
$S:0}
C.eHm.prototype={
$0(){},
$S:0}
C.eH2.prototype={
$0(){return this.a.l(new C.eH1(this.b,this.c))},
$S:0}
C.eH1.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eGS.prototype={
$1(d){return this.a.cx===d},
$S:29}
C.eGT.prototype={
$1(d){return this.a.cx=d},
$S:27}
C.eGU.prototype={
$1(d){return this.a.cy===d},
$S:29}
C.eGV.prototype={
$1(d){return this.a.cy=d},
$S:27}
C.eGW.prototype={
$1(d){return this.a.db===d},
$S:29}
C.eGX.prototype={
$1(d){return this.a.db=d},
$S:27}
C.eGY.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:29}
C.eGZ.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.X(0,d):w.K(0,d)},
$S:27}
C.eH_.prototype={
$0(){var w=this.a
return w.l(w.gaAT())},
$S:0}
C.eGQ.prototype={
$1(d){return this.a.$1(!0)},
$S:66}
C.eGR.prototype={
$1(d){return this.a.$1(!1)},
$S:116}
C.eGP.prototype={
$1(d){return this.a.$1(!1)},
$S:152}
C.eHd.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.aw(e.b,e.d)
o.ch=n
n=B.b5(p,p,p,new C.bmv(o,p),n)
w=this.b
v=C.bFR("WORLD",w.a,w.c)
u=C.bFR("GRAVITY",B.v(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.h.S(t*100)
t=t<0.25?A.c3:A.bf
t=C.bFR("FUEL",""+s+"%",t)
s=o.r.b
r=A.h.S(s*100)
s=s>D.EB[o.db].d?A.c3:A.c
q=x.p
s=B.a([v,u,t,C.bFR("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(C.bFR("HEIGHT",""+A.h.S(A.h.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ao(p,B.A(s,A.l,p,A.iC,A.i,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bLT(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.u9[w].a+".":"You landed on every world!"
v=B.a([new E.fO(A.oi,"Again",new C.eH8(o),A.c,p),new E.fO(A.p6,"Rebuild",new C.eH9(o),A.aQ,p)],q)
if(o.d+1<7)v.push(new E.fO(A.jH,"Next world",new C.eHa(o),A.bf,p))
n.push(C.hQ_("Perfect landing!",w,A.bf,v))}if(o.as==="crashed")n.push(C.hQ_("Crash!",o.at,A.c3,B.a([new E.fO(A.oi,"Try again",new C.eHb(o),A.bf,p),new E.fO(A.p6,"Rebuild",new C.eHc(o),A.aQ,p)],q)))
return new B.am(A.a0,p,A.b6,A.t,n,p)},
$S:63}
C.eH8.prototype={
$0(){var w=this.a
return w.l(w.gaAT())},
$S:0}
C.eH9.prototype={
$0(){var w=this.a
return w.l(new C.eH5(w))},
$S:0}
C.eH5.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eHa.prototype={
$0(){var w=this.a
return w.l(new C.eH4(w))},
$S:0}
C.eH4.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.eHb.prototype={
$0(){var w=this.a
return w.l(w.gaAT())},
$S:0}
C.eHc.prototype={
$0(){var w=this.a
return w.l(new C.eH3(w))},
$S:0}
C.eH3.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eHe.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.l(new C.eH7(v,w))},
$S:0}
C.eH7.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.eHf.prototype={
$1(d){return this.a.y=d},
$S:8}
C.eHg.prototype={
$1(d){return this.a.Q=d},
$S:8}
C.eHh.prototype={
$1(d){return this.a.z=d},
$S:8}
C.eHi.prototype={
$0(){var w=this.a
return w.l(new C.eH6(w))},
$S:0}
C.eH6.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dW5.prototype={
$0(){var w=0,v=B.j(x.k),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.he(B.a([C.hKz(),C.hKA()],x.D),x.K),$async$$0)
case 3:r=e
q=t.a
if(q.c==null){w=1
break}s=q.as
s.toString
s.l3(0,B.cV(J.t(r,1)))
q.l(new C.dW4(q,r))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:40}
C.dW4.prototype={
$0(){return this.a.d=x.m.a(J.t(this.b,0))},
$S:0}
C.dVG.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dVH.prototype={
$0(){return this.a.c3_(B.aW(J.t(this.b,"group")))},
$S:0}
C.dVI.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dVJ.prototype={
$1(d){return A.a.aY(A.n.fw(A.n.D(A.h.S(d*255),0,255),16),2,"0")},
$S:279}
C.dW6.prototype={
$0(){return E.YA("kick",0,0.25)},
$S:0}
C.dVK.prototype={
$0(){return this.a.cy=this.b},
$S:0}
C.dVL.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dVM.prototype={
$0(){return E.YA("kick",0,0.5)},
$S:0}
C.dVN.prototype={
$0(){return G.dI(1300+this.a.RG.aw(900),"",40,0,0.2,"square")},
$S:0}
C.dVP.prototype={
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
u=w}if(u.cy!=null&&!A.d.aR(u.d.e,new C.dVO(u)))u.cy=null
u.id=0},
$S:0}
C.dVO.prototype={
$1(d){var w=this.a
return d.a===w.cy&&w.aCX(d)},
$S:z+10}
C.dVD.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p4
w=u.a
v=u.c
w.R8=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p3.toLowerCase()+"."},
$S:0}
C.dVE.prototype={
$0(){var w=this.a
return w.l(w.gcdY())},
$S:0}
C.dVF.prototype={
$0(){return this.a.agP(null)},
$S:0}
C.dVW.prototype={
$0(){var w=this.a.as
return w==null?null:w.fj(0,B.J(["t","shot"],x.N,x.z))},
$S:0}
C.dVX.prototype={
$0(){return this.a.cLO(this.b.a)},
$S:0}
C.dVY.prototype={
$0(){return this.a.agP(this.b)},
$S:0}
C.dVZ.prototype={
$1(d){var w=this.a
return w.l(new C.dVV(w,d))},
$S:6}
C.dVV.prototype={
$0(){return this.a.k4=this.b},
$S:0}
C.dW_.prototype={
$0(){var w=this.a
return w.l(new C.dVU(w,this.b))},
$S:0}
C.dVU.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dW0.prototype={
$0(){var w=this.a
return w.l(new C.dVT(w))},
$S:0}
C.dVT.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.dW1.prototype={
$0(){var w=this.a
return w.l(new C.dVS(w))},
$S:0}
C.dVS.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.fj(0,B.J(["t","reset"],x.N,x.z))
w.cy=null
w.db=0.5
w.dx=0.05
w.fr=1
w.fy=D.Nf},
$S:0}
C.dW2.prototype={
$0(){var w=this.a
return w.l(new C.dVR(w))},
$S:0}
C.dVR.prototype={
$0(){var w=this.a,v=!w.p2
w.p2=v
w.p4=0
w.cy=null
if(v)w.b3k()
else w.p3=null},
$S:0}
C.dW3.prototype={
$0(){var w=this.a
return w.l(new C.dVQ(w))},
$S:0}
C.dVQ.prototype={
$0(){var w=this.a
return w.ok=!w.ok},
$S:0}
C.caw.prototype={
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
$S:334}
C.cax.prototype={
$1(d){var w=new B.qR([],[]).on(d.data,!0)
if(x.f.b(w)&&J.t(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:620}
C.fEG.prototype={
$1(d){var w=J.a0(d)
return w.h(d,0)&&w.h(d,1)},
$S:211}
C.fEH.prototype={
$1(d){var w=J.a0(d)
return w.h(d,0)||w.h(d,1)},
$S:211}
C.fEI.prototype={
$1(d){var w=J.a0(d)
return w.h(d,0)!==w.h(d,1)},
$S:211}
C.fEP.prototype={
$1(d){return!J.t(d,0)},
$S:211}
C.fEQ.prototype={
$1(d){var w=J.a0(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:211}
C.fER.prototype={
$1(d){var w=J.a0(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:211}
C.dXM.prototype={
$1(d){return this.a.axv(0)},
$S:7}
C.dXq.prototype={
$0(){var w=this.b
return this.a.cx=new B.O(w,B.iA6(),B.T(w).k("O<1,F>")).fJ(0)},
$S:0}
C.dXt.prototype={
$1(d){return""+d},
$S:80}
C.dXN.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dXo.prototype={
$1(d){return this.a.axv(this.b)},
$S:7}
C.dXp.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.aBo(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.n8(0,d,a1.mC(0.15,0.3))
u=a1.n8(0,d,a1.mC(0.15,0.62))
t=a1.n8(0,"and",a1.mC(0.48,0.46))
s=a1.n8(0,a0,a1.mC(0.82,0.46))
a1=t.a
w.push(new C.o8(v.a,a1,0))
w.push(new C.o8(u.a,a1,1))
w.push(new C.o8(a1,s.a,0))
break
case 1:v=a1.n8(0,d,a1.mC(0.12,0.25))
u=a1.n8(0,d,a1.mC(0.12,0.65))
r=a1.n8(0,"xor",a1.mC(0.46,0.25))
q=a1.n8(0,"and",a1.mC(0.46,0.65))
p=a1.aBn(0,a0,a1.mC(0.82,0.25),0)
o=a1.aBn(0,a0,a1.mC(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.o8(a1,n,0))
m=u.a
w.push(new C.o8(m,n,1))
l=q.a
w.push(new C.o8(a1,l,0))
w.push(new C.o8(m,l,1))
w.push(new C.o8(n,p.a,0))
w.push(new C.o8(l,o.a,0))
break
case 2:k=a1.n8(0,"clock",a1.mC(0.15,0.4))
j=a1.n8(0,"not",a1.mC(0.45,0.65))
s=a1.n8(0,a0,a1.mC(0.82,0.3))
i=a1.n8(0,"buzzer",a1.mC(0.82,0.65))
a1=k.a
w.push(new C.o8(a1,s.a,0))
n=j.a
w.push(new C.o8(a1,n,0))
w.push(new C.o8(n,i.a,0))
break
default:h=a1.n8(0,d,a1.mC(0.12,0.25))
g=a1.n8(0,d,a1.mC(0.12,0.7))
f=a1.n8(0,"nor",a1.mC(0.5,0.25))
e=a1.n8(0,"nor",a1.mC(0.5,0.7))
s=a1.n8(0,a0,a1.mC(0.86,0.25))
a1=f.a
w.push(new C.o8(g.a,a1,0))
n=e.a
w.push(new C.o8(n,a1,1))
w.push(new C.o8(h.a,n,0))
w.push(new C.o8(a1,n,1))
w.push(new C.o8(a1,s.a,0))}},
$S:0}
C.dXu.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.aBo(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.Dw(p,"switch",new B.m(0.14*q.a,r*q.b),0))}o.n8(0,w.e,o.mC(0.86,0.5))},
$S:0}
C.dXj.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dXk.prototype={
$2(d,e){return A.h.aQ(d.c.b,e.c.b)},
$S:z+23}
C.dXl.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dXm.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dXn.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.ag5(this.c)
if(v.ax)C.Kj("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gH(w)
v.CW=!1
if(v.ax)G.dI(140,"",250,0,0.3,"square")}},
$S:0}
C.dXv.prototype={
$0(){},
$S:0}
C.dXw.prototype={
$0(){return A.d.cP(this.a.e,this.b)},
$S:0}
C.dXx.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dXs.prototype={
$0(){var w=this.a,v=this.b
w.d.X(0,v)
A.d.bs(w.e,new C.dXr(v))
w.cy=null},
$S:0}
C.dXr.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
C.dXi.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.n8(0,this.b,new B.m(w.x.a*(0.3+v.ai()*0.4),w.x.b*(0.2+v.ai()*0.6))).a},
$S:0}
C.dXG.prototype={
$0(){var w=this.a
return w.l(new C.dXF(w))},
$S:0}
C.dXF.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dXH.prototype={
$2(d,e){var w=null,v=this.a,u=new B.aw(e.b,e.d)
v.x=u
return B.aA(A.c0,B.jn(B.b5(w,w,w,new C.bgq(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dXA(v),w,w,w,new C.dXB(v),new C.dXC(v),new C.dXD(v),w,w,w,w,w,w,w,w,w,w,new C.dXE(v),w,w,w,!1,A.a4)},
$S:35}
C.dXE.prototype={
$1(d){return this.a.cfN(d.b)},
$S:55}
C.dXC.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cpr(u)
if(t!=null){v.as=t
v.at=u
return}w=v.aCs(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aI(0,u)}},
$S:51}
C.dXD.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.m(A.h.D(w.a+u.Q.a,46,u.x.a-46),A.h.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:19}
C.dXB.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c6v(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bs(v,new C.dXy(w))
u=t.as
u.toString
v.push(new C.o8(u,w.a,w.b))
B.ke()}}t.z=t.as=null},
$S:38}
C.dXy.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
C.dXA.prototype={
$1(d){return this.a.aAb(d.b)},
$S:318}
C.dXI.prototype={
$0(){return this.a.bHC(this.b.a)},
$S:0}
C.dXJ.prototype={
$0(){return this.a.axv(this.b.a)},
$S:0}
C.dXK.prototype={
$0(){var w=this.a
return w.l(new C.dXz(w))},
$S:0}
C.dXz.prototype={
$0(){var w=this.a
w.aBo(0)
w.ay=null},
$S:0}
C.dXL.prototype={
$0(){return this.a.cHk(this.b)},
$S:0}
C.d00.prototype={
$0(){var w=this,v=null,u=B.h2(v,A.cK,v,v,v,B.cX(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a8,A.cb,v,A.e6,A.cc)
u.eL()
return u},
$S:286}
C.e2W.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e2V.prototype={
$0(){return this.a.d=null},
$S:0}
C.e2Y.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c8t()},
$S:135}
C.e2X.prototype={
$0(){return B.a7(this.a,!1).i2()},
$S:0}
C.fF6.prototype={
$0(){return I.aOQ},
$S:z+40}
C.fF7.prototype={
$0(){return D.e7w},
$S:z+43}
C.fF8.prototype={
$0(){return D.e0c},
$S:z+13}
C.fF9.prototype={
$0(){return D.ezg},
$S:z+14}
C.fFa.prototype={
$0(){return D.eh9},
$S:z+15}
C.fFb.prototype={
$0(){return I.aOH},
$S:z+16}
C.fFc.prototype={
$0(){return D.ex2},
$S:z+17}
C.fFd.prototype={
$0(){return I.aOP},
$S:z+12}
C.fFe.prototype={
$0(){return D.e2t},
$S:z+19}
C.fjV.prototype={
$2(d,e){return new C.ahH(e,$.bKB()[e],new C.fjU(e,this.a),null)},
$S:z+20}
C.fjU.prototype={
$0(){var w=this.a,v=L.aMd.h(0,$.bKB()[w].a)
$.avw=v==null?"music":v
B.a7(this.b,!1).ca(B.e4(new C.fjS(w),!1,null,x.H))},
$S:0}
C.fjS.prototype={
$1(d){return $.bKB()[this.a].e.$0()},
$S:43}
C.fjW.prototype={
$2(d,e){return new C.agu(e,D.aEy[e],new C.fjT(this.a,e),null)},
$S:z+21}
C.fjT.prototype={
$0(){return this.a.d.$1(D.aEy[this.b])},
$S:0}
C.fjB.prototype={
$0(){return this.a.as=!0},
$S:0}
C.fjA.prototype={
$0(){return this.a.as=!1},
$S:0}
C.fjq.prototype={
$0(){var w=this.a
w.ch=0
w.as=!1},
$S:0}
C.fjr.prototype={
$1(d){return this.bs3(d)},
bs3(d){var w=0,v=B.j(x.I),u,t=this,s,r,q
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
r.grk().sp(0,d/t.b)
r.gKD().sp(0,0.5)
w=3
return B.b($.aS.glX(),$async$$1)
case 3:r=$.aS.bl$.x.h(0,r.f)
s=r==null?null:r.gbg()
if(!(s instanceof B.oG))throw B.Y(B.be("closed"))
q=C
w=4
return B.b(s.lI(t.c),$async$$1)
case 4:u=q.h3r(f,t.d,t.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:749}
C.fjs.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.fjp(w,d))},
$S:6}
C.fjp.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.fjt.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.fjz.prototype={
$1(d){var w=this
return new B.ec(new C.fjy(w.a,w.b,w.c,w.d),null)},
$S:20}
C.fjy.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=x.w,a2=B.aH(a3,a0,a1).w
a1=B.aH(a3,a0,a1).w
w=x.p
v=B.a([D.h85,A.at,D.heZ,A.af],w)
for(u=d.d,t=d.a,s=x.G,r=d.b,q=d.c,p=0;p<3;p=o){o=p+1
n=B.c("SLAB "+o,a0,a0,a0,a0,a0,a0,D.fXW,a0,a0,a0)
m=new B.aQ(12,12)
l=new B.aQ(12,12)
l=B.a([new B.bu(1,A.b9,B.aO(a0,A.M,!1,a0,!0,A.t,a0,B.aP(),r[p],a0,a0,a0,a0,a0,2,new B.ee(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Title",a0,A.FX,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.bc(m,m,m,m),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.am,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ad,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jO,!0,A.a8,a0,A.ao,a0,a0,a0,a0),a0),A.aa,new B.bu(2,A.b9,B.aO(a0,A.M,!1,a0,!0,A.t,a0,B.aP(),q[p],a0,a0,a0,a0,a0,2,new B.ee(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Small line",a0,A.FX,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.bc(l,l,l,l),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.am,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ad,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jO,!0,A.a8,a0,A.ao,a0,a0,a0,a0),a0)],w)
m=B.a([],w)
for(k=0;k<30;++k){j=D.dLW[k]
i=new B.aQ(12,12)
if(u[p].B(0,j)){h=t.w
if(h===$){h=B.B(t.a.c.d,s)
t.w=h}g=A.d.gH(h).j(0.3)}else g=A.c.j(0.06)
if(u[p].B(0,j)){h=t.w
if(h===$){h=B.B(t.a.c.d,s)
t.w=h}f=A.d.gH(h)}else f=A.by
e=new B.ax(f,u[p].B(0,j)?1.8:1,A.r,-1)
m.push(B.aA(a0,B.q(a0,B.V(j,u[p].B(0,j)?A.c:A.aR,a0,a0,a0,22),A.f,a0,a0,new B.p(g,a0,new B.bE(e,e,e,e),new B.bc(i,i,i,i),a0,a0,A.m),a0,a0,a0,A.eW,a0,a0,a0,42),A.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.fjw(a4,p,u,j),a0,a0,a0,a0,a0,a0,!1,A.a4))}A.d.u(v,B.a([n,A.aj,new B.c_(A.aJ,A.e,A.i,A.l,a0,A.p,a0,0,l,a0),A.N,new B.a4(a0,44,B.ck(m,a0,a0,a0,a0,a0,A.aJ,!1),a0),A.aA],w))}v.push(B.bH(A.BQ,a0,new C.fjx(t,r,q,u,a3),a0))
return new B.C(new B.Q(0,0,0,a2.f.d),B.bn(!0,new B.cO(new B.aY(0,1/0,0,a1.a.b*0.86),B.ck(v,a0,a0,A.xi,a0,a0,A.ah,!0),a0),!0,!1,A.ag,!0,!0),a0)},
$S:106}
C.fjw.prototype={
$0(){var w=this
return w.a.$1(new C.fjv(w.b,w.c,w.d))},
$S:0}
C.fjv.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.fjx.prototype={
$0(){var w=this,v=w.a
v.l(new C.fju(v,w.b,w.c,w.d))
B.a7(w.e,!1).N(null)},
$S:0}
C.fju.prototype={
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
C.fjJ.prototype={
$0(){var w=this.a
return w.l(new C.fjI(w))},
$S:0}
C.fjI.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.fjK.prototype={
$0(){return E.v1(this.b,this.a.f,"scene")},
$S:0}
C.fjL.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ap(A.d.gH(u),A.d.gal(u),0.4)
u.toString
w=this.a.gKD().x
w===$&&B.d()
return new B.bP(new B.p(v,v,v,v,v,new B.bV(D.b6R,0.9,A.w,v,0,B.a([u.j(0.06+0.03*w),A.c9],x.O),v,v),A.m),A.bn,v,v)},
$S:352}
C.fjM.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.at(new B.d8(A.dn,A.z,A.f,B.ca(new B.hD(B.a([u.grk(),u.gKD()],x.dS)),new C.fjH(u,this.b,v),w),w),w,w,w)},
$S:243}
C.fjH.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.grk().x
r===$&&B.d()
w=r<0.9?1:1-C.bx_(r,0.9,0.98)
v=s.gKD().x
v===$&&B.d()
u=A.dS.aA(0,v)
switch(s.gaBp().a){case 0:s=s.bGM(t.b,r,u,t.c)
break
case 1:s=s.bY1(t.b,r,u,t.c)
break
case 2:s=s.cMh(t.b,r,u,t.c)
break
case 3:s=s.bJM(t.b,r,u,t.c)
break
case 4:s=s.bNa(t.b,r,u,t.c)
break
case 5:s=s.cfO(t.b,r,u,t.c)
break
default:s=null}return B.d3(s,w)},
$S:157}
C.fjN.prototype={
$2(d,e){var w=null,v=B.acJ(this.b),u=this.c.d,t=B.ap(A.d.gH(u),A.d.gal(u),0.4)
t.toString
u=B.ap(A.d.gH(u),A.d.gal(u),0.4)
u.toString
u=v.cVs(t,A.by,u,3.5)
t=this.a
v=t.grk().x
v===$&&B.d()
return B.a__(B.kT(w,w,w,w,1,0,w,new C.fjG(t),A.h.D(v,0,1)),u)},
$S:1976}
C.fjG.prototype={
$1(d){var w=this.a
w.grk().sp(0,d)
if(w.as)w.l(new C.fjC(w))},
$S:6}
C.fjC.prototype={
$0(){return this.a.as=!1},
$S:0}
C.fjO.prototype={
$0(){var w=this.a
w.grk().sp(0,0)
w.a18()},
$S:0}
C.fjP.prototype={
$1(d){var w=this.a
w.l(new C.fjF(w,d))
if(w.as)w.a18()},
$S:6}
C.fjF.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.fjQ.prototype={
$0(){var w=this.a
w.l(new C.fjE(w,this.b))
w.grk().sp(0,0)
if(w.as)w.a18()},
$S:0}
C.fjE.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.fjR.prototype={
$0(){var w=this.a
return w.l(new C.fjD(w,this.b))},
$S:0}
C.fjD.prototype={
$0(){var w=B.B(this.b,x.G)
return this.a.w=w},
$S:0}
C.fjn.prototype={
$2(d,e){return A.h.aQ(d.a,e.a)},
$S:1977}
C.fjo.prototype={
$1(d){return d.b},
$S:1978}
C.dxe.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.dxf.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.dxb.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.dxc.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dxd.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dxg.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dxh.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dxi.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dxj.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.dxk.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.dxl.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.dxm.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.dxn.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.dxo.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.eGl.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eGa.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.eGc.prototype={
$2(d,e){return d+e.d*7+A.n.F(A.a.ga_(e.b),97)},
$S:z+31}
C.eGd.prototype={
$2(d,e){return d+A.n.F(A.a.ga_(e.a),31)+A.n.F(A.a.ga_(e.b),17)},
$S:z+32}
C.eGg.prototype={
$1(d){var w=D.nw.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.n.F(d.d,u)]+")":t},
$S:z+33}
C.eGh.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.T(q),o=x.dg,n=B.B(new B.eh(new B.cQ(new B.X(q,new C.eGi(d),p.k("X<1>")),new C.eGj(r),p.k("cQ<1,rD?>")),o),o.k("L.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aJ(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.I)(n),++v){u=n[v]
if(w.length>=6)return
t=B.B(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.eGi.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eGj.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.eGe.prototype={
$1(d){return D.nw.h(0,d.b).c===D.yK},
$S:z+55}
C.eGf.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eGL.prototype={
$1(d){var w=this.a,v=d.a,u=A.h.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.wj(0,u)
w.a9p(A.n.ao(v,1000))},
$S:7}
C.eGk.prototype={
$0(){},
$S:0}
C.eG6.prototype={
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
C.eGn.prototype={
$1(d){var w=null,v=this.a.b
return B.bn(!0,B.w(B.a([A.N,B.dP(!1,w,w,w,!0,w,w,w,!0,w,w,B.V(D.nw.h(0,v).b,D.nw.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.hqU,w,B.c(D.nw.h(0,v).a,w,w,w,w,w,w,A.h6,w,w,w),w,w,w),B.dP(!1,w,w,w,!0,w,w,w,!0,w,w,A2.av6,w,w,w,w,new C.eGm(d),!1,w,w,w,w,w,w,w,D.hhS,w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!0)},
$S:28}
C.eGm.prototype={
$0(){B.a7(this.a,!1).N(!0)
return null},
$S:0}
C.eGp.prototype={
$1(d){var w,v,u,t=null,s=B.aH(d,t,x.w).w,r=B.a([D.eLu],x.p)
for(w=0;w<6;++w){v=D.aEV[w]
u=B.c(v.a,t,t,t,t,t,t,A.h6,t,t,t)
r.push(B.dP(!1,t,t,t,!0,t,t,t,!0,t,t,D.c9e,t,t,t,t,new C.eGo(d,v),!1,t,t,t,t,t,B.c(v.b,t,t,t,t,t,t,A.mi,t,t,t),t,u,t,t,t))}return B.bn(!0,new B.cO(new B.aY(0,1/0,0,s.a.b*0.7),B.ck(r,t,t,D.bN5,t,t,A.ah,!0),t),!0,!1,A.ag,!0,!0)},
$S:28}
C.eGo.prototype={
$0(){B.a7(this.a,!1).N(this.b)
return null},
$S:0}
C.eG9.prototype={
$1(d){var w=null
return B.em(B.a([B.bJ(!1,A.dy,w,w,!0,w,w,w,new C.eG7(d),w,w),B.bJ(!1,A.G1,w,w,!0,w,w,w,new C.eG8(d),w,w)],x.p),w,w,L.mv,D.hfb,w,w,w,w,D.hic,w)},
$S:17}
C.eG7.prototype={
$0(){B.a7(this.a,!1).N(!1)
return null},
$S:0}
C.eG8.prototype={
$0(){B.a7(this.a,!1).N(!0)
return null},
$S:0}
C.eGJ.prototype={
$0(){var w=this.a
return w.l(new C.eGI(w))},
$S:0}
C.eGI.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eGK.prototype={
$2(d,e){var w,v,u,t=null,s=new B.aw(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.nK(new C.eGz(r,s))}else{w=r.d
if(!w.cy.B(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.bhP:t
v=B.a([B.b5(u,t,t,new C.bmt(w,v,new C.eGA(r),new C.eGB(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ao(t,new B.dp(!0,B.ca(w,new C.eGC(r),t),t),t,t,10,10,6,t))
if(r.ax)v.push(r.bOU())
return B.aA(A.c0,B.jn(new B.am(A.a0,t,A.b6,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.eGD(r),t,r.gcqO(),t,new C.eGE(r),new C.eGF(r),new C.eGG(r),t,t,t,t,t,t,t,t,t,t,new C.eGH(r),t,t,t,!1,A.a4)},
$S:35}
C.eGz.prototype={
$0(){return this.a.af6(this.b)},
$S:0}
C.eGH.prototype={
$1(d){return this.a.cJT(d.b)},
$S:55}
C.eGF.prototype={
$1(d){return this.a.cqP(d.b)},
$S:51}
C.eGG.prototype={
$1(d){return this.a.cqQ(d.b)},
$S:19}
C.eGE.prototype={
$1(d){return this.a.b76()},
$S:38}
C.eGD.prototype={
$1(d){return this.a.afQ(d.b)},
$S:318}
C.eGA.prototype={
$0(){return this.a.z},
$S:603}
C.eGB.prototype={
$0(){return this.a.Q},
$S:340}
C.eGC.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bTh()
if(p.length===0)return A.bL
w=A.v.j(0.55)
v=B.n(14)
u=B.K(A.by,A.r,1)
t=B.a([D.hcy,A.cR],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.I)(p),++r)t.push(B.c(p[r],q,2,A.a2,q,q,q,A.b__,q,q,q))
return B.q(q,B.w(t,A.B,q,A.e,A.P,0,A.p),A.f,q,q,new B.p(w,q,u,v,q,q,A.m),q,q,q,q,A.h1,q,q,q)},
$S:70}
C.eGb.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.n(12),t=B.K(e.j(0.6),A.r,1),s=x.p
return new B.C(A.dX,B.A(B.a([B.q(w,B.V(d,e,w,w,w,21),A.f,w,w,new B.p(v,w,t,u,w,w,A.m),w,38,w,w,w,w,w,38),A.bd,B.E(B.w(B.a([B.c(f,w,w,w,w,w,w,Ak.Xu,w,w,w),A.bs,B.c(g,w,w,w,w,w,w,F.adN,w,w,w)],s),A.B,w,A.e,A.i,0,A.p),1)],s),A.B,w,A.e,A.i,0,w,w),w)},
$S:1979}
C.eGv.prototype={
$0(){var w=this.a.c
w.toString
return B.a7(w,!1).i2()},
$S:0}
C.eGw.prototype={
$0(){var w=this.a
return w.l(new C.eGu(w))},
$S:0}
C.eGu.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eGx.prototype={
$0(){var w=this.a
return w.l(new C.eGt(w))},
$S:0}
C.eGt.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.eGy.prototype={
$0(){var w=this.a
return w.l(new C.eGs(w))},
$S:0}
C.eGs.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eGr.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.nw.gdW(D.nw),w=w.gae(w);w.A();){v=w.gO(w)
if(v.b.c===e)p.push(v.a)}w=B.c(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.I)(p),++r)u.push(s.cEy(p[r]))
return new B.C(A.Pw,B.w(B.a([new B.C(A.apW,w,q),B.A(u,A.l,q,A.e,A.i,0,q,q)],v),A.B,q,A.e,A.i,0,A.p),q)},
$S:z+37}
C.eGq.prototype={
$0(){return this.a.cfV(this.b)},
$S:0}
C.dxa.prototype={
$0(){var w=this,v=null,u=B.h2(v,A.cK,v,v,v,B.cX(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a8,A.cb,v,A.e6,A.cc)
u.eL()
return u},
$S:286}
C.bTK.prototype={
$1(d){return d.r<=0},
$S:z+38}
C.bTV.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bTQ.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bTW.prototype={
$1(d){return this.a.NB(d)&&!d.x},
$S:z+0}
C.bTX.prototype={
$2(d,e){return Math.max(d,this.a.aFm(e))},
$S:z+6}
C.bTZ.prototype={
$2(d,e){var w=this.a
return w.c0(0,d.a+"."+e,new C.bU_(w))},
$S:z+5}
C.bU_.prototype={
$0(){return this.a.a},
$S:91}
C.bTY.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:69}
C.bU0.prototype={
$2(d,e){var w=this.a
return w.c0(0,this.b.$1(this.c.$2(d,e)),new C.bU1(w))},
$S:z+5}
C.bU1.prototype={
$0(){return this.a.a},
$S:91}
C.bTM.prototype={
$2(d,e){var w=this.a
return w.c0(0,d.a+"."+e,new C.bTN(w))},
$S:z+5}
C.bTN.prototype={
$0(){return this.a.a},
$S:91}
C.bTL.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:69}
C.bTO.prototype={
$2(d,e){var w=this.a
return w.c0(0,this.b.$1(this.c.$2(d,e)),new C.bTP(w))},
$S:z+5}
C.bTP.prototype={
$0(){return this.a.a},
$S:91}
C.bTJ.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bU2.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bTR.prototype={
$1(d){return d!==this.b&&this.a.aLM(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bTU.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bTT.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bTS.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bO4.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bO5.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.bO3.prototype={
$2(d,e){return new B.a6(A.aV,A.b1,A.w,e,D.dkF,null).az(0,d)},
$S:1980}
C.cye.prototype={
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
C.haa.prototype={
$1(d){var w
$.U()
w=B.M()
w.r=d.gp(0)
return w},
$S:1981}
C.hac.prototype={
$2(d,e){var w
$.U()
w=B.M()
w.b=A.ae
w.c=e
w.r=d.gp(0)
w.d=A.bH
return w},
$S:1982}
C.had.prototype={
$5(d,e,f,g,h){return B.bx(new B.a5(d,e,d+f,e+g),new B.aQ(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1983}
C.hab.prototype={
$3(d,e,f){var w
$.U()
w=B.M()
w.san(new B.a6(A.aV,A.b1,A.w,B.a([e,f],x.O),null,null).az(0,d))
return w},
$S:1984}
C.bNH.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.bNI.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bNG(w))},
$S:0}
C.bNG.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bNJ.prototype={
$0(){return B.a([],x.F)},
$S:1985}
C.bNK.prototype={
$1(d){return this.a.by(d).a>15e5},
$S:372}
C.bNL.prototype={
$0(){var w,v,u
J.bKL(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.rT(v))if(C.hva(v.b))w.b6B(v)
else w.a2n(v)
else{u=w.a.c.bjH(v)
w.ahq(u==null?"The "+$.r2().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bNF.prototype={
$1(d){return new B.ec(new C.bNC(this.a,this.b),null)},
$S:20}
C.bNC.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p=null,o=this.b,n=new C.bND(this.a,o,a3),m=$.r2(),l=o.b,k=m.h(0,l).d,j=A.h.S(o.ch/1.04),i=new C.bNE(o,n,k),h=B.n(26),g=B.K(k.j(0.55),A.r,1.4),f=x.V,e=B.a([new B.ac(0,A.G,k.j(0.25),A.J,26)],f),d=B.q(p,p,A.f,p,p,new B.p(A.aT,p,p,B.n(3),p,p,A.m),p,4,p,p,p,p,p,42),a0=k.j(0.2),a1=B.K(k,A.r,1)
a1=B.q(p,B.at(B.c(m.h(0,l).c,p,p,p,p,p,p,A.qF,p,p,p),p,p,p),A.f,p,p,new B.p(a0,p,a1,p,p,p,A.a6),p,42,p,p,p,p,p,42)
a0=x.p
w=B.E(B.w(B.a([B.c(m.h(0,l).b,p,1,A.a2,p,p,p,A.jr,p,p,p),D.hcm],a0),A.B,p,A.e,A.i,0,A.p),1)
v=k.j(0.2)
u=B.n(14)
t=B.K(k,A.r,1)
u=B.A(B.a([a1,A.bd,w,B.q(p,B.c(""+A.h.S(o.ch*100)+"%",p,p,p,p,p,p,B.l(p,p,k,p,p,p,p,p,p,p,p,15,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.p(v,p,t,u,p,p,A.m),p,p,p,p,A.lG,p,p,p)],a0),A.l,p,A.e,A.i,0,p,p)
t=A.v.j(0.35)
v=B.n(18)
w=B.K(A.dA,A.r,1)
a1=30+28*o.ch
s=B.n(8)
r=B.a([k.j(0.85),A.ax],x.O)
q=B.K(A.aE,A.r,2)
f=B.a([new B.ac(0,A.G,k.j(0.5),A.J,14)],f)
v=B.q(p,B.at(B.cY(p,B.at(new B.d8(A.dE,A.z,A.f,new B.C(A.hO,B.c(m.h(0,l).c,p,p,p,p,p,p,A.mX,p,p,p),p),p),p,p,p),p,p,A.b0,new B.p(p,p,q,s,f,new B.a6(A.aw,A.aD,A.w,r,p,p),A.m),A.eN,p,a1*0.58,p,p,p,p,p,a1),p,p,p),A.f,p,p,new B.p(t,p,w,v,p,p,A.m),p,120,p,p,p,p,p,1/0)
i=B.A(B.a([i.$2("1\xd7",1),i.$2("2\xd7",2),i.$2("3\xd7",3),i.$2("4\xd7",4),i.$2("5\xd7",5)],a0),A.l,p,A.e,A.i,0,p,p)
w=B.aJ(p,p,p,p,B.V(A.atk,k,p,p,p,30),p,p,p,new C.bNy(n,o),p,p,p,p,p,p)
t=B.acJ(a2).bj9(k,A.by,k.j(0.2),A.c,8)
o=B.A(B.a([w,B.E(B.a__(B.kT(p,p,p,p,5.2,1,p,n,A.h.D(o.ch,1,5.2)),t),1),B.aJ(p,p,p,p,B.V(A.a4B,k,p,p,p,30),p,p,p,new C.bNz(n,o),p,p,p,p,p,p)],a0),A.l,p,A.e,A.i,0,p,p)
return B.bn(!0,B.q(p,B.w(B.a([d,A.af,u,A.aA,v,A.af,i,A.at,o,B.A(B.a([B.E(B.c(j<=1?"Normal size":"About "+j+" times the normal size",p,p,p,p,p,p,N.hI,p,p,p),1),B.bJ(!1,A6.b02,p,p,!0,p,p,p,new C.bNA(a2),p,B.fu(p,p,k.j(0.25),p,p,p,p,p,p,p,p,A.c,p,p,p,p,p,A.tQ,p,p,p,p,p,p,p,p))],a0),A.l,p,A.e,A.i,0,p,p)],a0),A.l,p,A.e,A.P,0,A.p),A.f,p,p,new B.p(p,p,g,h,e,D.cgM,A.m),p,p,p,A.zz,D.bJD,p,p,p),!0,!1,A.ag,!0,!0)},
$S:88}
C.bND.prototype={
$1(d){var w=this.a
w.l(new C.bNw(this.b,d))
this.c.$1(new C.bNx())
w.a.toString},
$S:6}
C.bNw.prototype={
$0(){return this.a.ch=A.h.D(this.b,1,5.2)},
$S:0}
C.bNx.prototype={
$0(){},
$S:0}
C.bNE.prototype={
$2(d,e){var w=this,v=null,u=Math.abs(w.a.ch-e)<0.05,t=u?w.c.j(0.28):A.c.j(0.06),s=B.n(14),r=u?w.c:A.by
r=B.K(r,A.r,u?2:1)
return B.E(B.aA(v,B.cY(v,B.at(new B.d8(A.dn,A.z,A.f,B.c(d,v,v,v,v,v,v,B.l(v,v,u?w.c:A.ab,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),v,v,v),v,v,A.b0,new B.p(t,v,r,s,v,v,A.m),A.he,v,v,v,A.jk,A.rk,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.bNB(w.b,e),v,v,v,v,v,v,!1,A.a4),1)},
$S:583}
C.bNB.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bNy.prototype={
$0(){return this.a.$1(this.b.ch-0.4)},
$S:0}
C.bNz.prototype={
$0(){return this.a.$1(this.b.ch+0.4)},
$S:0}
C.bNA.prototype={
$0(){B.a7(this.a,!1).N(null)
return null},
$S:0}
C.bO0.prototype={
$2(d,e){var w
if(d==="short"){G.dI(1800,"",120,0,0.55,"noise")
G.dI(200,"",160,2.2,0.4,"saw")
B.fZ()
w=this.a
if(w.c!=null)w.ahq("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){G.dI(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.ahq("\u26a0 Overloaded! The "+$.r2().h(0,e.b).b+" can only give about "+A.h.a1(w.a.c.B8(e),2)+" amps but your gadgets are asking for "+A.h.a1(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.ahq("Burnt out! "+e.ay)
G.dI(140,"",320,0,0.6,"noise")
G.dI(900,"",160,1.5,0.35,"square")}},
$S:z+42}
C.bO1.prototype={
$0(){},
$S:0}
C.bN6.prototype={
$0(){},
$S:0}
C.bO2.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bO_.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.aw(e.b,e.d)
o.at=n
w=o.a.c
v=o.d
u=o.y
t=o.z
s=o.x
r=this.b
q=x.p
n=B.a([B.aA(A.c0,new B.ea(B.b5(p,p,p,new C.alJ(w,v,u,t,s,r==null?A.jK:r,p),n),p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bNU(o),new C.bNV(o),new C.bNW(o),p,p,p,p,p,p,p,p,p,p,new C.bNX(o),p,p,p,!1,A.a4)],q)
if(o.a.c.a.length===0)n.push(D.bh5)
w=o.ay
if(w!=null){v=B.n(14)
u=B.K(A.cY,A.r,1)
n.push(B.ao(p,B.aA(p,B.q(p,B.A(B.a([D.h2e,B.E(B.c(w,p,p,p,p,p,p,D.fUG,p,p,p),1)],q),A.B,p,A.e,A.i,0,p,p),A.f,p,p,new B.p(D.bnd,p,u,v,p,p,A.m),p,p,p,p,A.o9,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bNY(o),p,p,p,p,p,p,!1,A.a4),p,p,10,10,8,p))}if(o.x!=null){o=B.A(B.a([D.bPj,new E.fO(A.Ac,"Cut wire",new C.bNZ(o),A.c3,p)],q),A.l,p,A.e,A.i,0,p,p)
w=B.n(18)
n.push(B.ao(8,B.q(p,o,A.f,p,p,new B.p(F.a_9,p,B.K(A.by,A.r,1),w,p,p,A.m),p,p,p,p,F.aoz,p,p,p),p,p,12,12,p,p))}else{w=o.e
if(w!=null&&A.d.q(o.a.c.a,w)){w=o.e
w.toString
n.push(B.ao(8,o.crn(w),p,p,10,10,p,p))}}return B.jn(new B.am(A.a0,p,A.b6,A.t,n,p),A.t,p)},
$S:267}
C.bNV.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.bdN(s)
if(r!=null){t.l(new C.bNS(t,r,d))
return}w=t.b7g(s)
if(w!=null){t.Q=w
v=w.c
u=t.at
t.as=new B.m(v*u.a,w.d*u.b).aI(0,s)
t.l(new C.bNT(t,w))}},
$S:51}
C.bNS.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c.b},
$S:0}
C.bNT.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bNW.prototype={
$1(d){var w=this.a
if(w.y!=null)w.l(new C.bNQ(w,d))
else if(w.Q!=null)w.l(new C.bNR(w,d.b.a6(0,w.as)))},
$S:19}
C.bNQ.prototype={
$0(){return this.a.z=this.b.b},
$S:0}
C.bNR.prototype={
$0(){var w,v=this.a,u=v.Q
u.toString
w=this.b
u.c=A.h.D(w.a/v.at.a,0.14,0.86)
u=v.Q
u.toString
u.d=A.h.D(w.b/v.at.b,0.08,0.92)},
$S:0}
C.bNU.prototype={
$1(d){var w,v,u,t=this.a
if(t.y!=null&&t.z!=null){w=t.z
w.toString
v=t.bdN(w)
if(v!=null&&v.a!==t.y.a){w=t.a.c
u=t.y
if(w.aol(u.a,u.b,v.a,v.b)!=null)G.dI(1500,"",40,0,0.22,"square")}}t.Q=t.z=t.y=null
t.aho()},
$S:38}
C.bNX.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.b7g(u)
if(t!=null){v.l(new C.bNN(v,t))
if(D.mP.am(0,t.b))v.cCj(t)
w=new B.W(Date.now(),0,!1)
if(v.r===t&&w.by(v.w).a<38e4){v.l(new C.bNO(v,t))
v.r=null}else{v.r=t
v.w=w}v.a.toString
return}v.l(new C.bNP(v,v.cPB(u)))},
$S:55}
C.bNN.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.x=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
G.dI(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
G.dI(200,"",70,0,0.2,"saw")}},
$S:0}
C.bNO.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.bNP.prototype={
$0(){var w=this.a
w.x=this.b
w.e=w.d=null},
$S:0}
C.bNY.prototype={
$0(){var w=this.a
return w.l(new C.bNM(w))},
$S:0}
C.bNM.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bNZ.prototype={
$0(){var w=this.a
A.d.X(w.a.c.b,w.x)
w.x=null
G.dI(300,"",50,0,0.35,"noise")
w.aho()},
$S:0}
C.bN7.prototype={
$0(){return this.a.bwm(this.b)},
$S:0}
C.bNt.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.A(B.a([B.c(d,w,w,w,w,w,w,D.fOy,w,w,w),B.E(B.kT(this.b.d,w,w,w,g,h,w,new C.bNv(this.a,f),A.h.D(e,h,g)),1)],x.p),A.l,w,A.e,A.i,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1986}
C.bNv.prototype={
$1(d){var w=this.a
w.l(new C.bNu(this.b,d))
w.a.toString},
$S:6}
C.bNu.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bNs.prototype={
$2(d,e){var w=null,v=A.c.j(0.06),u=B.n(10)
return B.E(B.q(w,B.w(B.a([B.c(d,w,w,w,w,w,w,A.adB,w,w,w),B.c(e,w,w,w,w,w,w,D.fRt,w,w,w)],x.p),A.l,w,A.e,A.i,0,A.p),A.f,w,w,new B.p(v,w,w,u,w,w,A.m),w,w,w,w,A.vm,w,w,w),1)},
$S:108}
C.bNe.prototype={
$0(){var w=this.a
return w.l(new C.bNd(w))},
$S:0}
C.bNd.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.bNf.prototype={
$0(){var w=this.a
w.a.c.X(0,this.b)
w.e=w.d=null
G.dI(260,"",70,0,0.35,"noise")
w.aho()},
$S:0}
C.bNg.prototype={
$0(){var w=this.a
return w.l(new C.bNc(w))},
$S:0}
C.bNc.prototype={
$0(){return this.a.e=null},
$S:0}
C.bNk.prototype={
$0(){this.a.l(new C.bNb(this.b,this.c))
G.dI(900,"",40,0,0.3,"noise")},
$S:0}
C.bNb.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bNl.prototype={
$0(){return this.a.b6B(this.b)},
$S:0}
C.bNm.prototype={
$0(){return this.a.a2n(this.b)},
$S:0}
C.bNn.prototype={
$0(){return this.a.a45(this.b)},
$S:0}
C.bNo.prototype={
$0(){var w=this.a
w.l(new C.bNa(this.b,this.c))
w.a.toString},
$S:0}
C.bNa.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bNp.prototype={
$0(){var w=this.a
w.l(new C.bN9(this.b,this.c))
w.a.toString},
$S:0}
C.bN9.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bNq.prototype={
$0(){var w=this.a
w.l(new C.bN8(this.b,this.c))
w.a.toString},
$S:0}
C.bN8.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bNr.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bNh.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bNi.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bNj.prototype={
$1(d){return this.a.f=d},
$S:6}
C.fES.prototype={
$1(d){return d.aLn("bulb")},
$S:z+2}
C.fET.prototype={
$1(d){return d.qB(0,"switch")&&d.aLn("bulb")},
$S:z+2}
C.fEU.prototype={
$1(d){return A.d.aR(d.a,new C.fEF())},
$S:z+2}
C.fEF.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.fEV.prototype={
$1(d){return d.qB(0,"resistor")&&A.d.aR(d.a,new C.fEE())},
$S:z+2}
C.fEE.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fEW.prototype={
$1(d){return!d.qB(0,"battery")&&d.aLn("bulb")},
$S:z+2}
C.fEJ.prototype={
$1(d){return A.d.aR(d.a,new C.fED())},
$S:z+2}
C.fED.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fEK.prototype={
$1(d){return A.d.aR(d.a,new C.fEC())},
$S:z+2}
C.fEC.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fEL.prototype={
$1(d){return A.d.aR(d.a,new C.fEB())},
$S:z+2}
C.fEB.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fEM.prototype={
$1(d){var w=d.a
return A.d.aR(w,new C.fEz())&&A.d.aR(w,new C.fEA())&&d.qB(0,"buck")},
$S:z+2}
C.fEz.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fEA.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fEN.prototype={
$1(d){var w=d.a
return A.d.aR(w,new C.fEx())&&A.d.aR(w,new C.fEy())},
$S:z+2}
C.fEx.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fEy.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fEO.prototype={
$1(d){return A.d.aR(d.a,new C.fEw())},
$S:z+2}
C.fEw.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.e87.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a7(0)
w.u(0,v.b)},
$S:0}
C.e8g.prototype={
$1(d){var w=this.a.d
return w.aLM(d)&&w.rT(d)},
$S:z+0}
C.e8h.prototype={
$1(d){return d.x},
$S:z+0}
C.e8i.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.e8j.prototype={
$0(){},
$S:0}
C.e86.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.n(22),o=x.p,n=B.a([D.hkg,A.at,D.h46,A.S],o)
for(w=this.a,v=0;v<19;++v){u=D.TR[v]
t=A.c.j(0.06)
s=new B.aQ(14,14)
r=new B.ax(A.by,1,A.r,-1)
n.push(B.aA(q,B.q(q,B.w(B.a([B.c(u.a,q,q,q,q,q,q,A.iY,q,q,q),A.bs,B.c(u.b,q,3,A.a2,q,q,q,D.fVt,q,q,q)],o),A.B,q,A.e,A.i,0,A.p),A.f,q,q,new B.p(t,q,new B.bE(r,r,r,r),new B.bc(s,s,s,s),q,q,A.m),q,q,q,A.cB,A.bg,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.e85(w,d,u),q,q,q,q,q,q,!1,A.a4))}return B.eE(q,F.ni,new B.C(A.bR,new B.a4(340,q,B.ck(n,q,q,q,q,q,A.ah,!0),q),q),q,q,q,q,q,A.db,q,new B.ba(p,A.a1),q)},
$S:46}
C.e85.prototype={
$0(){B.a7(this.b,!1).N(null)
var w=this.a
w.l(new C.e84(w,this.c))
G.dI(800,"",120,-0.5,0.3,"square")},
$S:0}
C.e84.prototype={
$0(){var w=this.a.d
this.b.C(w)
w.boR()},
$S:0}
C.e82.prototype={
$1(d){return new C.XM(this.a.d,null)},
$S:z+44}
C.e83.prototype={
$0(){},
$S:0}
C.e8f.prototype={
$1(d){return new B.ec(new C.e8e(this.a),null)},
$S:20}
C.e8e.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.akM(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.q(0,k),f=g?A.bf:A.aH
k=B.aH(d,m,x.w).w
w=l.r
v=x.p
u=B.a([B.A(B.a([D.hhl,A.aY,B.c(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.C,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.l,m,A.e,A.i,0,m,m),A.N,B.bv(B.n(4),B.jK(A.by,m,m,5,m,w.a/11,new B.lf(f,x.c)),A.ap),A.af],v)
if(h)u.push(D.h7r)
else{h=f.j(0.1)
t=B.n(14)
s=B.K(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.c(r+" Now: "+i.a,m,m,m,m,m,m,Am.M2,m,m,m)
q=B.c(g?"Well done! You did it.":i.b,m,m,m,m,m,m,A0.FY,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.q(m,B.w(B.a([r,A.at,q,new B.bK(A.a9,m,m,B.bJ(!1,B.c(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.C,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.e8c(l,e),m,m),m)],v),A.B,m,A.e,A.i,0,A.p),A.f,m,m,new B.p(h,m,s,t,m,m,A.m),m,m,m,m,A.bg,m,m,m))}u.push(A.S)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aQ(12,12)
n=new B.ax(o===l.f?f.j(0.6):A.dA,1,A.r,-1)
if(w.q(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
s=B.c(s,m,m,m,m,m,m,A.adM,m,m,m)
r=j[o]
q=w.q(0,o)?A.aE:A.c
u.push(B.aA(m,B.q(m,new B.c_(A.aJ,A.e,A.i,A.l,m,A.p,m,0,B.a([s,A.ar,new B.bu(1,A.b9,B.c(r.a,m,m,m,m,m,m,new B.H(!0,q,m,m,m,m,13,A.C,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],v),m),A.f,m,m,new B.p(h,m,new B.bE(n,n,n,n),new B.bc(t,t,t,t),m,m,A.m),m,m,m,A.ez,A.o9,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.e8d(l,o,e),m,m,m,m,m,m,!1,A.a4))}return B.bn(!0,new B.cO(new B.aY(0,1/0,0,k.a.b*0.75),B.ck(u,m,m,A.xi,m,m,A.ah,!0),m),!0,!1,A.ag,!0,!0)},
$S:88}
C.e8c.prototype={
$0(){var w=this.a
w.l(new C.e8a(w))
this.b.$1(new C.e8b())
w.Gx()},
$S:0}
C.e8a.prototype={
$0(){var w=this.a
$.akM()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.e8b.prototype={
$0(){},
$S:0}
C.e8d.prototype={
$0(){var w=this.a
w.l(new C.e88(w,this.b))
this.c.$1(new C.e89())
w.Gx()},
$S:0}
C.e88.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e89.prototype={
$0(){},
$S:0}
C.e8l.prototype={
$0(){return B.a7(this.a,!1).i2()},
$S:0}
C.e8m.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.iN("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a7(t.b,!1).ca(B.e4(new C.e8k(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.e8k.prototype={
$1(d){B.jb("construction")
return As.ibj()},
$S:z+45}
C.e8n.prototype={
$0(){return E.hXr(this.a,"ELECTRONICS LAB",this.b,A.aH)},
$S:0}
C.e8o.prototype={
$0(){var w=this.a
return w.l(w.d.gd6I())},
$S:0}
C.e8p.prototype={
$0(){var w=this.a,v=w.d
w.l(v.gtN(v))
w.Gx()},
$S:0}
C.cQ4.prototype={
$2(d,e){var w=null,v=this.a.gaBy().x
v===$&&B.d()
return B.b5(w,w,w,new C.bec(v,w),A.az)},
$S:52}
C.cQ3.prototype={
$3(d,e,f){var w=new B.aI($.U().r,A.ak,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.E(new B.b_(v,t))
w.E(new B.cn(v,u,v+e,u))
w.E(new B.cn(v,u,v,u+e))
w.E(new B.cn(v,u,v-e,u))
w.E(new B.cn(v,u,v,t))
w.E(new B.bz())
t=B.M()
t.r=A.c.j(f).gp(0)
this.a.af(w,t)},
$S:437}
C.hfr.prototype={
$3(d,e,f){return new C.X0(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+46}
C.hfs.prototype={
$4(d,e,f,g){var w=x.a
return new B.dc(e,!1,B.iz(A.z,g,null,new B.bj(B.cN(A.cm,e,null),new B.bq(0.85,1,w),w.k("bj<bS.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
C.e43.prototype={
$0(){var w=this.a
w.e=this.b
w.y=0
w.z=w.gCy()},
$S:0}
C.e44.prototype={
$0(){var w,v=this.a
v.e=0
w=this.c
v.y=A.n.F(A.n.F(this.b,w)+w,w)
v.z=v.gCy()},
$S:0}
C.e4e.prototype={
$0(){var w=this.a,v=this.b,u=this.c
w.x=new B.m(v.a/u.a,v.b/u.b)
w.w=w.gCy()},
$S:0}
C.e42.prototype={
$1(d){return new K.Jv(F.TB[this.b],new C.e41(this.a,d),null)},
$S:z+47}
C.e41.prototype={
$0(){this.a.a=!0
B.a7(this.b,!1).e3()},
$S:0}
C.e4f.prototype={
$0(){var w=this.a
w.f=this.b
w.r=!1},
$S:0}
C.e4g.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.e3W.prototype={
$2(d,e){var w=null,v=this.a,u=v.f?v.gb4g():w
return B.aA(A.c0,B.b5(w,w,w,v.cqM(this.b),A.hj),A.y,!1,D.hQH,u,w,w,w,new C.e3U(v),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e3V(v,e),w,w,w,!1,A.a4)},
$S:35}
C.e3V.prototype={
$1(d){var w=this.b
return this.a.cK4(d.b,new B.aw(B.aU(1/0,w.a,w.b),B.aU(1/0,w.c,w.d)))},
$S:55}
C.e3U.prototype={
$1(d){var w,v=d.d
if(v==null)v=0
if(Math.abs(v)>120&&this.a.Pb()!=null){w=v<0?1:-1
this.a.aFC(w)}},
$S:38}
C.e4c.prototype={
$5$color$on(d,e,f,g,h){var w=null,v=h?g.j(0.28):A.c.j(0.08),u=B.n(14),t=B.K(h?g:A.aT,A.r,1)
return B.aA(w,B.q(w,B.w(B.a([B.V(d,g,w,w,w,20),A.rX,B.c(e,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,9.5,w,w,A.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p),A.f,w,w,new B.p(v,w,t,u,w,w,A.m),w,w,w,A.jk,A.jZ,w,w,56),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:601}
C.e48.prototype={
$0(){return this.a.aFC(-1)},
$S:0}
C.e49.prototype={
$0(){return this.a.aFC(1)},
$S:0}
C.e4a.prototype={
$0(){return this.a.KX(null)},
$S:0}
C.e4b.prototype={
$0(){return this.a.KX(0)},
$S:0}
C.e4h.prototype={
$0(){return B.a7(this.a,!1).i2()},
$S:0}
C.e47.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.n(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c5W(o):q.bIN(o,p),m=x.p
p=B.a([B.p0(new B.mo(n,new B.b9(p,x.aC)),A.q_,B.qe(),A.b0,A.b0,new C.e45())],m)
n=t.d
if(n){w=A.h.F(q.gCy(),12)<4
v=w?150:96
u=B.n(16)
m=B.a([A.ar],m)
if(w)m.push(D.bP5)
else m.push(A.aY)
m.push(B.q(s,s,A.f,s,s,new B.p(w?A.bf:A.ax,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.ar)
p.push(B.ao(s,B.at(B.cY(s,B.A(m,A.l,s,A.e,A.i,0,s,s),s,s,A.ej,new B.p(A.v,s,s,u,s,s,A.m),A.nl,s,28,s,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.Bw)p.push(B.ao(s,B.at(B.q(s,s,A.f,s,s,A.Nn,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.Bx)p.push(B.ao(s,B.q(s,s,A.f,s,s,A.Nn,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ao(6,B.aA(s,B.at(B.q(s,s,A.f,s,s,new B.p(A.c.j(0.75),s,s,B.n(3),s,s,A.m),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e46(q),s,s,s,s,s,s,!1,A.a4),s,s,0,0,s,s))
return B.bv(r,new B.am(A.a0,s,A.b6,A.t,p,s),A.ap)},
$S:397}
C.e45.prototype={
$2(d,e){var w=x.a
return new B.dc(e,!1,B.iz(A.z,d,null,new B.bj(e,new B.bq(0.92,1,w),w.k("bj<bS.T>"))),null)},
$S:416}
C.e46.prototype={
$0(){return this.a.KX(null)},
$S:0}
C.e4d.prototype={
$2(d,e){var w,v,u,t,s=null,r=Math.max(e.b,230),q=this.a
q=B.a([B.c(A.a.aY(A.n.v(B.d_(q)),2,"0")+":"+A.a.aY(A.n.v(B.fy(q)),2,"0"),s,s,s,s,s,s,A.uH,s,s,s),A.aY],x.p)
for(w=0;w<4;++w){v=new B.aQ(1,1)
q.push(B.q(s,s,A.f,s,s,new B.p(A.c,s,s,new B.bc(v,v,v,v),s,s,A.m),s,4+w*2,s,D.bNC,s,s,s,3))}q.push(A.da)
q.push(D.hbl)
q.push(A.b7)
v=B.K(A.ab,A.r,1)
u=B.n(4)
t=this.b
q.push(B.q(s,new B.bK(A.a5,s,s,B.Cj(A.z,B.q(s,s,A.f,s,s,new B.p(A.bf,s,s,B.n(2),s,s,A.m),s,s,s,A7.Ic,s,s,s,s),s,t/100),s),A.f,s,s,new B.p(s,s,v,u,s,s,A.m),s,12,s,s,s,s,s,26))
q.push(A.pw)
q.push(B.c(""+t+"%",s,s,s,s,s,s,D.h1Q,s,s,s))
return new B.d8(A.dn,A.a5,A.f,new B.a4(r,s,B.A(q,A.l,s,A.e,A.i,0,s,s),s),s)},
$S:271}
C.e40.prototype={
$0(){return this.a.KX(A.d.c8(F.iA,this.b))},
$S:0}
C.e3Z.prototype={
$0(){return this.a.KX(0)},
$S:0}
C.e4_.prototype={
$2(d,e){var w,v,u,t,s=null,r=Math.max(e.b,216),q=B.a([],x.p)
for(w=B.cD(F.iA,0,B.dy(4,"count",x.S),x.gD),v=w.$ti,w=new B.bQ(w,w.gI(0),v.k("bQ<aj.E>")),u=this.a,v=v.k("aj.E");w.A();){t=w.d
q.push(u.azm(t==null?v.a(t):t,50,!1))}return new B.d8(A.dn,A.z,A.f,new B.a4(r,s,B.A(q,A.l,s,A.rK,A.i,0,s,s),s),s)},
$S:271}
C.e3T.prototype={
$0(){return this.a.KX(null)},
$S:0}
C.e3Y.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=A.v.j(0.55),l=this.a,k=l.f,j=k?112:10
if(k){k=l.c
k.toString
k=B.aH(k,A.bZ,x.w).w.a.a>700}else k=!1
k=k?250:10
w=x.p
k=B.q(n,B.A(B.a([D.hqh,A.ar,B.E(B.c(this.b?"Navigation   Media   Climate":"File   Edit   View   Window   Help",n,1,A.f6,n,n,n,A.Mh,n,n,n),1),B.c(A.a.aY(A.n.v(B.d_(new B.W(Date.now(),0,!1))),2,"0")+":"+A.a.aY(A.n.v(B.fy(new B.W(Date.now(),0,!1))),2,"0"),n,n,n,n,n,n,A.qG,n,n,n)],w),A.l,n,A.e,A.i,0,n,n),A.f,m,n,n,n,24,n,n,new B.Q(j,0,k,0),n,n,n)
j=B.a([B.b5(n,n,n,new C.bBe(l.gCy(),this.c.d,n),A.az)],w)
if(l.e!=null){if(l.f){m=l.c
m.toString
m=B.aH(m,A.dM,x.w).w.r.b+52}else m=12
v=B.n(10)
u=B.K(A.aT,A.r,1)
t=B.n(10)
s=B.aA(n,B.q(n,n,A.f,n,n,A.ahe,n,12,n,n,n,n,n,12),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.e3X(l),n,n,n,n,n,n,!1,A.a4)
r=B.q(n,n,A.f,n,n,A.ZB,n,12,n,n,n,n,n,12)
q=B.aA(n,B.q(n,n,A.f,n,n,D.bc9,n,12,n,n,n,n,n,12),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,l.gbeg(),n,n,n,n,n,n,!1,A.a4)
p=l.e
p.toString
p=B.a([s,A.dU,r,A.dU,q,A.ar,B.E(B.c(F.iA[p].a,n,1,A.a2,n,n,n,A.Xs,n,n,n),1)],w)
if(l.Pb()!=null)s=!l.f||!l.r
else s=!1
if(s)p.push(l.b18(19))
s=B.q(n,B.A(p,A.l,n,A.e,A.i,0,n,n),A.f,A.cx,n,n,n,26,n,n,A.fE,n,n,n)
r=l.e
r.toString
j.push(B.bT(0,new B.C(new B.Q(26,m,26,58),B.q(n,B.bv(t,B.w(B.a([s,B.E(l.aSq(r),1)],w),A.l,n,A.e,A.i,0,A.p),A.ap),A.f,n,n,new B.p(A.v,n,u,v,D.dHC,n,A.m),n,n,n,n,n,n,n,n),n),0,0,0))}m=A.c.j(0.16)
v=B.n(18)
u=B.K(A.aT,A.r,1)
t=B.a([],w)
for(o=0;o<8;++o)t.push(new B.C(A.jk,l.azm(F.iA[o],34,!1),n))
j.push(B.ao(8,B.at(B.q(n,B.A(t,A.l,n,A.e,A.P,0,n,n),A.f,n,n,new B.p(m,n,u,v,n,n,A.m),n,n,n,n,A.lH,n,n,n),n,n,n),n,n,0,0,n,n))
return B.q(n,B.w(B.a([k,B.E(new B.am(A.a0,n,A.b6,A.t,j,n),1)],w),A.l,n,A.e,A.i,0,A.p),A.f,A4.a0N,n,n,n,n,n,n,n,n,n,n)},
$S:85}
C.e3X.prototype={
$0(){return this.a.KX(null)},
$S:0}
C.fFm.prototype={
$0(){return D.eBj},
$S:z+48}
C.fFn.prototype={
$0(){return D.e84},
$S:z+49}
C.fFo.prototype={
$0(){return D.e0p},
$S:z+50}
C.fFp.prototype={
$0(){return D.e7s},
$S:z+51}
C.fFq.prototype={
$0(){return D.ecX},
$S:z+52}
C.fFr.prototype={
$0(){return D.ex5},
$S:z+53}
C.fFs.prototype={
$0(){return D.ezf},
$S:z+54}
C.fFt.prototype={
$0(){return D.ec_},
$S:z+36}
C.cr7.prototype={
$0(){return B.a7(this.a,!1).i2()},
$S:0}
C.cr8.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=(e.b-14)/2,i=x.p,h=B.a([],i)
for(w=$.i0l(),v=j*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aQ(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ac(0,A.G,p.j(0.4),A.dv,16)],t)
n=B.c(r.c,k,k,k,k,k,k,A.M0,k,k,k)
m=B.c(r.a,k,k,k,k,k,k,D.h_y,k,k,k)
l=A.c.j(0.85)
h.push(B.aA(k,B.q(k,new B.am(A.a0,k,A.ac,A.t,B.a([new B.cS(k,-6,-6,k,k,k,n,k),new B.bK(A.lu,k,k,B.w(B.a([m,A.cR,B.c(r.b,k,k,k,k,k,k,new B.H(!0,l,k,k,k,k,12,A.a7,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)],i),A.B,k,A.e,A.P,0,A.p),k)],i),k),A.f,k,k,new B.p(k,k,k,new B.bc(q,q,q,q),p,new B.a6(A.aw,A.aD,A.w,o,k,k),A.m),k,v,k,k,A.bD,k,k,j),A.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.cr6(d,r),k,k,k,k,k,k,!1,A.a4))}return B.bX(A.bG,h,A.bq,k,14,14)},
$S:176}
C.cr6.prototype={
$0(){return B.a7(this.a,!1).ca(B.e4(new C.cr5(this.b),!1,null,x.H))},
$S:0}
C.cr5.prototype={
$1(d){return this.a.f.$0()},
$S:43}
C.f52.prototype={
$0(){var w=this.a
return w.w=w.d[w.baJ(w.f)]},
$S:0}
C.f4Z.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cX.ai()*7},
$S:0}
C.f4Y.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bN(0,A.ck)
w.w=""},
$S:0}
C.f50.prototype={
$0(){var w=this.a
return w.l(new C.f5_(w,this.b))},
$S:0}
C.f5_.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cP(w,this.b)},
$S:0}
C.f51.prototype={
$1(d){return this.a.b4U(0)},
$S:2}
C.ebQ.prototype={
$0(){return C.Kj("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.ebR.prototype={
$0(){},
$S:0}
C.ebL.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.ebN.prototype={
$0(){return this.a.b4W(this.b)},
$S:0}
C.ebO.prototype={
$0(){var w=this.a
return w.l(new C.ebM(w))},
$S:0}
C.ebM.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.ebP.prototype={
$0(){var w=this.a
return w.b4W(w.d)},
$S:0}
C.dWc.prototype={
$2(d,e){return d+e},
$S:83}
C.dWd.prototype={
$0(){},
$S:0}
C.dW7.prototype={
$2(d,e){return d+e},
$S:83}
C.dWa.prototype={
$0(){var w=this.a
return w.l(new C.dW9(w,this.b))},
$S:0}
C.dW9.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dWb.prototype={
$0(){var w=this.a
return w.l(new C.dW8(w))},
$S:0}
C.dW8.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.e7C.prototype={
$0(){return E.v1(this.b,this.a.d,"drawing")},
$S:0}
C.e7D.prototype={
$1(d){var w=this.a
return w.l(new C.e7B(w,d))},
$S:51}
C.e7B.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aMq(u,v,t))},
$S:0}
C.e7E.prototype={
$1(d){var w=this.a
return w.l(new C.e7A(w,d))},
$S:19}
C.e7A.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
C.e7F.prototype={
$1(d){var w=this.a
return w.l(new C.e7z(w,d))},
$S:24}
C.e7z.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aMq(u,v,t))},
$S:0}
C.e7G.prototype={
$0(){var w=this.a
return w.l(new C.e7y(w,this.b))},
$S:0}
C.e7y.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.e7H.prototype={
$1(d){var w=this.a
return w.l(new C.e7x(w,d))},
$S:6}
C.e7x.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.e7I.prototype={
$0(){var w=this.a
return w.l(new C.e7w(w))},
$S:0}
C.e7w.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.e7J.prototype={
$0(){var w=this.a
return w.l(new C.e7v(w))},
$S:0}
C.e7v.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.e7K.prototype={
$0(){var w=this.a
return w.l(A.d.gtN(w.e))},
$S:0}
C.e7L.prototype={
$0(){var w=this.a
return w.l(new C.e7u(w))},
$S:0}
C.e7u.prototype={
$0(){var w=this.a
w.x=D.aDK[A.n.F(A.d.c8(D.aDK,w.x)+1,4)]},
$S:0}
C.ezM.prototype={
$0(){return this.a.f.K(0,this.b)},
$S:0}
C.ezN.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.Kj("bell",B.a([0,4,7],w),500,0.45)
u.l(new C.ezL(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.d()
if(v===u.length)C.Kj("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:12}
C.ezL.prototype={
$0(){var w=this.a
w.r.u(0,B.a([this.b,this.c],x.t))
w.f.a7(0)},
$S:0}
C.ezO.prototype={
$0(){var w=this.a
if(w.c==null)return
w.l(new C.ezK(w))},
$S:12}
C.ezK.prototype={
$0(){var w=this.a
w.f.a7(0)
w.x=!1},
$S:0}
C.ezS.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return B.aA(w,B.l6(new C.ezQ(v,e),w,A.b0,A.q_,w,w,new B.bq(0,u,x.a),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ezR(v,e),w,w,w,w,w,w,!1,A.a4)},
$S:81}
C.ezR.prototype={
$0(){return this.a.cik(this.b)},
$S:0}
C.ezQ.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dB(),m=n.a
m.$flags&2&&B.ak(m)
m[11]=0.001
n.fP(3.141592653589793*e)
m=B.n(16)
w=o?p:D.cfU
if(o)v=q.a.r.q(0,q.b)?A.bf.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.K(u.r.q(0,t)?A.bf:A.aT,A.r,1)
if(o){r=B.dB()
r.fP(3.141592653589793)
u=u.e
u===$&&B.d()
r=B.fJ(A.z,B.c(u[t],p,p,p,p,p,p,H.adQ,p,p,p),p,r,!0)
u=r}else u=D.hiT
return B.fJ(A.z,B.q(A.z,u,A.f,p,p,new B.p(v,p,s,m,p,w,A.m),p,p,p,p,p,p,p,p),p,n,!0)},
$S:111}
C.ezT.prototype={
$0(){var w=this.a
return w.l(new C.ezP(w,this.b))},
$S:0}
C.ezP.prototype={
$0(){var w=this.a
w.d=this.b.a
w.awH()},
$S:0}
C.ezU.prototype={
$0(){var w=this.a
return w.l(w.gbRJ())},
$S:0}
C.eMU.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.eMV.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.eMS.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eMT.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.eMR(w))},
$S:12}
C.eMR.prototype={
$0(){return this.a.f=-1},
$S:0}
C.eMW.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.eMX.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.eMY.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b4V()},
$S:12}
C.eMZ.prototype={
$0(){return this.a.ciq(this.b)},
$S:0}
C.f0o.prototype={
$1(d){return B.v(d.h(0,1))+","},
$S:58}
C.f0x.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.c(d,w,1,A.a2,w,w,w,B.l(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.C(A.jZ,B.A(B.a([v,A.aa,new B.cZ(1,A.c6,new B.d8(A.dn,A.z,A.f,B.c(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w),w)],x.p),A.l,w,A.e,A.i,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1987}
C.f0t.prototype={
$1(d){return this.a.l(new C.f0s())},
$S:2}
C.f0s.prototype={
$0(){},
$S:0}
C.f0u.prototype={
$0(){var w=this.a
return w.l(new C.f0r(w,this.b))},
$S:0}
C.f0r.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.f0v.prototype={
$1(d){var w=this.a
return w.l(new C.f0q(w,d))},
$S:6}
C.f0q.prototype={
$0(){return this.a.f=A.h.S(this.b)},
$S:0}
C.f0w.prototype={
$0(){var w=this.a
return w.l(new C.f0p(w))},
$S:0}
C.f0p.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eyr.prototype={
$0(){},
$S:0}
C.eys.prototype={
$0(){},
$S:0}
C.eyk.prototype={
$0(){var w=this.a
return w.l(new C.eyj(w))},
$S:0}
C.eyj.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.c4(u,1,!1,x.S)
w.r=0.9
E.YA("hat",0,0.6)},
$S:0}
C.eyl.prototype={
$0(){var w=this.a
return w.l(new C.eyi(w))},
$S:0}
C.eyi.prototype={
$0(){this.a.y=1.1
E.mS("bell",36,200,0.4)},
$S:0}
C.eym.prototype={
$0(){var w=this.a
return w.l(new C.eyh(w))},
$S:0}
C.eyh.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aw(Math.max(v,u)-t+1)
w.as=u
E.mS("bell",12+A.n.F(u,12),500,0.5)},
$S:0}
C.eyn.prototype={
$0(){var w=this.a
return w.l(new C.eyg(w,this.b))},
$S:0}
C.eyg.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.eyo.prototype={
$1(d){var w=this.a
return w.l(new C.eyf(w,d))},
$S:6}
C.eyf.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.h.S(this.b),r=J.e3(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.eyp.prototype={
$1(d){var w=this.a
return w.l(new C.eye(w,d))},
$S:6}
C.eye.prototype={
$0(){return this.a.z=A.h.S(this.b)},
$S:0}
C.eyq.prototype={
$1(d){var w=this.a
return w.l(new C.eyd(w,d))},
$S:6}
C.eyd.prototype={
$0(){return this.a.Q=A.h.S(this.b)},
$S:0}
C.cr3.prototype={
$0(){var w=this
return E.mS(w.a,w.b,w.c,w.d)},
$S:1};(function aliases(){var w=C.aQw.prototype
w.bDF=w.t
w=C.aPA.prototype
w.bCH=w.t
w=C.aPB.prototype
w.bCI=w.t
w=C.aPF.prototype
w.bCM=w.t
w=C.aRm.prototype
w.bEC=w.t
w=C.aQu.prototype
w.bDD=w.t
w=C.aBs.prototype
w.bzI=w.t
w=C.aBt.prototype
w.bzJ=w.t
w=C.aO1.prototype
w.bB4=w.t
w=C.aPQ.prototype
w.bCX=w.t
w=C.aPC.prototype
w.bCJ=w.t
w=C.aPX.prototype
w.bD4=w.t
w=C.aQn.prototype
w.bDw=w.t
w=C.aQQ.prototype
w.bDZ=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0,u=a._instance_1u,t=a._instance_1i,s=a._instance_0i,r=a.installInstanceTearOff
w(C.aIm.prototype,"gaAT","cdn",1)
v(C,"iJC","cau",3)
var q
u(q=C.aGM.prototype,"gcmR","cmS",22)
w(q,"gcdY","b3k",1)
w(C.aGO.prototype,"gcfK","cfL",1)
t(C.aH4.prototype,"gcfS","cfT",39)
w(q=C.aLx.prototype,"gcH2","cH3",1)
w(q,"gcfU","a18",1)
w(q,"gcrx","cry",1)
w(q,"gcfQ","a17",3)
w(q,"gcfR","ahe",3)
w(q=C.aIl.prototype,"gbON","act",3)
w(q,"gcqO","b76",1)
w(q,"gcuJ","ak_",3)
s(q,"gcfW","ahf",3)
s(q=C.a6Y.prototype,"gtN","a7",1)
u(q,"gd4j","ar9",0)
u(q,"gd0B","NB",0)
w(q,"gd6I","boR",1)
r(C.alJ.prototype,"gcgi",0,5,null,["$5"],["lQ"],41,0,0)
w(q=C.aHi.prototype,"gcgj","cgk",1)
w(q,"gcxD","akl",3)
w(q,"gcn8","aiC",3)
w(q,"gcF_","alv",3)
w(q=C.aH8.prototype,"gc8n","afm",3)
w(q,"gbeg","cLD",1)
w(q,"gb4g","cgo",1)
w(q=C.aIS.prototype,"gcil","cim",1)
s(q,"gcij","b4U",1)
w(C.aI7.prototype,"gbRJ","awH",1)
s(C.aIv.prototype,"gcin","cio",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aG,[C.amY,C.Ht,C.vU,C.aWS,C.a5Q,C.bfk,C.cav,C.z7,C.Dw,C.o8,C.bg8,C.Bw,C.byH,C.qS,C.rD,C.DA,C.a0J,C.ahu,C.a31,C.DL,C.aei,C.aeA,C.agy,C.He,C.es,C.um,C.acW,C.ae4,C.a6Y,C.nj,C.bg9,C.h9,C.mw,C.bA0,C.aMq])
u(B.hs,[C.fXK,C.fLF,C.fTG,C.fTH,C.fXH,C.fXI,C.erv,C.erO,C.eHk,C.eGS,C.eGT,C.eGU,C.eGV,C.eGW,C.eGX,C.eGY,C.eGZ,C.eGQ,C.eGR,C.eGP,C.eHf,C.eHg,C.eHh,C.dVJ,C.dVL,C.dVO,C.dVZ,C.caw,C.cax,C.fEG,C.fEH,C.fEI,C.fEP,C.fEQ,C.fER,C.dXM,C.dXt,C.dXN,C.dXo,C.dXj,C.dXl,C.dXr,C.dXE,C.dXC,C.dXD,C.dXB,C.dXy,C.dXA,C.fjS,C.fjr,C.fjs,C.fjz,C.fjG,C.fjP,C.fjo,C.dxe,C.dxf,C.dxb,C.dxc,C.dxd,C.dxg,C.dxh,C.dxi,C.dxj,C.dxk,C.dxl,C.dxm,C.dxn,C.dxo,C.eGg,C.eGh,C.eGi,C.eGj,C.eGe,C.eGf,C.eGL,C.eGn,C.eGp,C.eG9,C.eGH,C.eGF,C.eGG,C.eGE,C.eGD,C.eGb,C.bTK,C.bTV,C.bTQ,C.bTW,C.bTY,C.bTL,C.bTJ,C.bU2,C.bTR,C.bTU,C.bTT,C.bTS,C.bO4,C.haa,C.had,C.hab,C.bNK,C.bNF,C.bND,C.bO2,C.bNV,C.bNW,C.bNU,C.bNX,C.bNt,C.bNv,C.bNr,C.bNh,C.bNi,C.bNj,C.fES,C.fET,C.fEU,C.fEF,C.fEV,C.fEE,C.fEW,C.fEJ,C.fED,C.fEK,C.fEC,C.fEL,C.fEB,C.fEM,C.fEz,C.fEA,C.fEN,C.fEx,C.fEy,C.fEO,C.fEw,C.e8g,C.e8h,C.e86,C.e82,C.e8f,C.e8k,C.cQ3,C.hfr,C.hfs,C.e42,C.e3V,C.e3U,C.e4c,C.cr5,C.f51,C.e7D,C.e7E,C.e7F,C.e7H,C.ezQ,C.f0o,C.f0x,C.f0t,C.f0v,C.eyo,C.eyp,C.eyq])
u(B.j1,[C.fXJ,C.erA,C.ery,C.eH0,C.eHd,C.dXk,C.dXH,C.e2Y,C.fjV,C.fjW,C.fjy,C.fjL,C.fjM,C.fjH,C.fjN,C.fjn,C.eGc,C.eGd,C.eGK,C.eGC,C.eGr,C.bTX,C.bTZ,C.bU0,C.bTM,C.bTO,C.bO5,C.bO3,C.cye,C.hac,C.bNC,C.bNE,C.bO0,C.bO_,C.bNs,C.e8e,C.cQ4,C.e3W,C.e47,C.e45,C.e4d,C.e4_,C.e3Y,C.cr8,C.dWc,C.dW7,C.ezS])
u(B.af,[C.XM,C.Y9,C.Wy,C.WF,C.P_,C.aLw,C.Y8,C.alH,C.Xh,C.aB7,C.X0,C.YH,C.Xp,C.Wz,C.Xg,C.Y2,C.Ye,C.Yy,C.Y1])
u(B.ai,[C.bpE,C.aQw,C.aPA,C.aPF,C.aH4,C.aRm,C.aQu,C.aBs,C.bDd,C.aO1,C.aPQ,C.aQQ,C.aPX,C.aPC,C.bp4,C.aI7,C.aIv,C.bqm,C.aQn])
u(B.j0,[C.ert,C.eru,C.erG,C.erH,C.erC,C.erB,C.erD,C.erz,C.erE,C.erx,C.erF,C.erw,C.erK,C.erJ,C.erL,C.erI,C.erM,C.erN,C.erP,C.eHj,C.eHl,C.eHm,C.eH2,C.eH1,C.eH_,C.eH8,C.eH9,C.eH5,C.eHa,C.eH4,C.eHb,C.eHc,C.eH3,C.eHe,C.eH7,C.eHi,C.eH6,C.dW5,C.dW4,C.dVG,C.dVH,C.dVI,C.dW6,C.dVK,C.dVM,C.dVN,C.dVP,C.dVD,C.dVE,C.dVF,C.dVW,C.dVX,C.dVY,C.dVV,C.dW_,C.dVU,C.dW0,C.dVT,C.dW1,C.dVS,C.dW2,C.dVR,C.dW3,C.dVQ,C.dXq,C.dXp,C.dXu,C.dXm,C.dXn,C.dXv,C.dXw,C.dXx,C.dXs,C.dXi,C.dXG,C.dXF,C.dXI,C.dXJ,C.dXK,C.dXz,C.dXL,C.d00,C.e2W,C.e2V,C.e2X,C.fF6,C.fF7,C.fF8,C.fF9,C.fFa,C.fFb,C.fFc,C.fFd,C.fFe,C.fjU,C.fjT,C.fjB,C.fjA,C.fjq,C.fjp,C.fjt,C.fjw,C.fjv,C.fjx,C.fju,C.fjJ,C.fjI,C.fjK,C.fjC,C.fjO,C.fjF,C.fjQ,C.fjE,C.fjR,C.fjD,C.eGl,C.eGa,C.eGk,C.eG6,C.eGm,C.eGo,C.eG7,C.eG8,C.eGJ,C.eGI,C.eGz,C.eGA,C.eGB,C.eGv,C.eGw,C.eGu,C.eGx,C.eGt,C.eGy,C.eGs,C.eGq,C.dxa,C.bU_,C.bU1,C.bTN,C.bTP,C.bNH,C.bNI,C.bNG,C.bNJ,C.bNL,C.bNw,C.bNx,C.bNB,C.bNy,C.bNz,C.bNA,C.bO1,C.bN6,C.bNS,C.bNT,C.bNQ,C.bNR,C.bNN,C.bNO,C.bNP,C.bNY,C.bNM,C.bNZ,C.bN7,C.bNu,C.bNe,C.bNd,C.bNf,C.bNg,C.bNc,C.bNk,C.bNb,C.bNl,C.bNm,C.bNn,C.bNo,C.bNa,C.bNp,C.bN9,C.bNq,C.bN8,C.e87,C.e8i,C.e8j,C.e85,C.e84,C.e83,C.e8c,C.e8a,C.e8b,C.e8d,C.e88,C.e89,C.e8l,C.e8m,C.e8n,C.e8o,C.e8p,C.e43,C.e44,C.e4e,C.e41,C.e4f,C.e4g,C.e48,C.e49,C.e4a,C.e4b,C.e4h,C.e46,C.e40,C.e3Z,C.e3T,C.e3X,C.fFm,C.fFn,C.fFo,C.fFp,C.fFq,C.fFr,C.fFs,C.fFt,C.cr7,C.cr6,C.f52,C.f4Z,C.f4Y,C.f50,C.f5_,C.ebQ,C.ebR,C.ebL,C.ebN,C.ebO,C.ebM,C.ebP,C.dWd,C.dWa,C.dW9,C.dWb,C.dW8,C.e7C,C.e7B,C.e7A,C.e7z,C.e7G,C.e7y,C.e7x,C.e7I,C.e7w,C.e7J,C.e7v,C.e7K,C.e7L,C.e7u,C.ezM,C.ezN,C.ezL,C.ezO,C.ezK,C.ezR,C.ezT,C.ezP,C.ezU,C.eMU,C.eMV,C.eMS,C.eMT,C.eMR,C.eMW,C.eMX,C.eMY,C.eMZ,C.f0s,C.f0u,C.f0r,C.f0q,C.f0w,C.f0p,C.eyr,C.eys,C.eyk,C.eyj,C.eyl,C.eyi,C.eym,C.eyh,C.eyn,C.eyg,C.eyf,C.eye,C.eyd,C.cr3])
t(C.bDr,C.aQw)
t(C.aIm,C.bDr)
u(B.lS,[C.bmv,C.bgq,C.by2,C.bf2,C.bwC,C.bw0,C.bfJ,C.bw2,C.bAa,C.bmt,C.alJ,C.bec,C.bBe,C.ahn,C.bBr,C.bw1,C.br8])
t(C.aPB,C.aPA)
t(C.aGM,C.aPB)
t(C.bDa,C.aPF)
t(C.aGO,C.bDa)
u(B.lo,[C.LQ,C.a2P,C.KN])
u(B.av,[C.bx0,C.ahH,C.agu,C.S2,C.bxy,C.aaV,C.biz])
t(C.aLx,C.aRm)
t(C.bms,B.p1)
t(C.aIl,C.aQu)
t(C.aBt,C.aBs)
t(C.alI,C.aBt)
t(C.aHi,C.bDd)
t(C.bed,C.aO1)
t(C.aH8,C.aPQ)
t(C.bDy,C.aQQ)
t(C.aIS,C.bDy)
t(C.bDf,C.aPX)
t(C.bpd,C.bDf)
t(C.bD9,C.aPC)
t(C.boM,C.bD9)
t(C.bDp,C.aQn)
t(C.bpQ,C.bDp)
w(C.aQw,B.cm)
w(C.bDr,E.o4)
w(C.aPA,B.cm)
w(C.aPB,E.o4)
w(C.aPF,B.cm)
w(C.bDa,E.o4)
w(C.aRm,B.eZ)
w(C.aQu,B.cm)
w(C.aBs,B.cm)
w(C.aBt,E.o4)
w(C.aO1,B.cm)
v(C.bDd,B.eH)
w(C.aPQ,B.cm)
w(C.aPC,B.cm)
w(C.bD9,E.o4)
w(C.aPX,B.cm)
w(C.bDf,E.o4)
w(C.aQn,B.cm)
w(C.bDp,E.o4)
w(C.aQQ,B.cm)
w(C.bDy,E.o4)})()
B.jj(b.typeUniverse,JSON.parse('{"XM":{"af":[],"x":[]},"bpE":{"ai":["XM"]},"Y9":{"af":[],"x":[]},"aIm":{"ai":["Y9"]},"bmv":{"aC":[]},"Wy":{"af":[],"x":[]},"aGM":{"ai":["Wy"]},"WF":{"af":[],"x":[]},"aGO":{"ai":["WF"]},"bgq":{"aC":[]},"ahH":{"av":[],"x":[]},"agu":{"av":[],"x":[]},"aLw":{"af":[],"x":[]},"P_":{"af":[],"x":[]},"aH4":{"ai":["P_"]},"bx0":{"av":[],"x":[]},"S2":{"av":[],"x":[]},"by2":{"aC":[]},"bxy":{"av":[],"x":[]},"bf2":{"aC":[]},"aLx":{"ai":["aLw"]},"bwC":{"aC":[]},"bw0":{"aC":[]},"bfJ":{"aC":[]},"bw2":{"aC":[]},"bAa":{"aC":[]},"Y8":{"af":[],"x":[]},"bms":{"aC":[]},"aIl":{"ai":["Y8"]},"bmt":{"aC":[]},"alJ":{"aC":[]},"alH":{"af":[],"x":[]},"alI":{"ai":["alH"]},"Xh":{"af":[],"x":[]},"aB7":{"af":[],"x":[]},"aHi":{"ai":["Xh"],"eH":[]},"bed":{"ai":["aB7"]},"bec":{"aC":[]},"X0":{"af":[],"x":[]},"aH8":{"ai":["X0"]},"bBe":{"aC":[]},"ahn":{"aC":[]},"aaV":{"av":[],"x":[]},"YH":{"af":[],"x":[]},"Xp":{"af":[],"x":[]},"Wz":{"af":[],"x":[]},"Xg":{"af":[],"x":[]},"Y2":{"af":[],"x":[]},"Ye":{"af":[],"x":[]},"Yy":{"af":[],"x":[]},"Y1":{"af":[],"x":[]},"aIS":{"ai":["YH"]},"bBr":{"aC":[]},"bpd":{"ai":["Xp"]},"bw1":{"aC":[]},"boM":{"ai":["Wz"]},"bp4":{"ai":["Xg"]},"br8":{"aC":[]},"aI7":{"ai":["Y2"]},"aIv":{"ai":["Ye"]},"bqm":{"ai":["Yy"]},"bpQ":{"ai":["Y1"]},"biz":{"av":[],"x":[]}}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.as
return{c:w("lf<u?>"),G:w("u"),J:w("bl<o,G>"),Q:w("df<o>"),Z:w("a_"),I:w("vr"),M:w("N<dl>"),l:w("N<a5L>"),h:w("N<a5Q>"),V:w("N<ac>"),O:w("N<u>"),F:w("N<W>"),D:w("N<az<aG>>"),x:w("N<a_>"),E:w("N<ah<o>>"),b:w("N<ah<G>>"),U:w("N<ah<F?>>"),B:w("N<a9<o,aG>>"),g:w("N<m>"),bz:w("N<um>"),v:w("N<h1>"),eZ:w("N<+(o,o)>"),fT:w("N<+(G,x)>"),L:w("N<+(F,o)>"),u:w("N<+(F,F)>"),r:w("N<+(o,o,a_)>"),e:w("N<+(o,G,G,F)>"),o:w("N<+(o,F,o,F)>"),d:w("N<+(o,o,G,G,a9<o,G>)>"),_:w("N<vU>"),fQ:w("N<acW>"),s:w("N<o>"),cF:w("N<au>"),X:w("N<L2>"),p:w("N<x>"),bL:w("N<ae4>"),fH:w("N<lm>"),a_:w("N<aei>"),cB:w("N<o8>"),ba:w("N<aeA>"),eW:w("N<DA>"),fY:w("N<a0J>"),ac:w("N<agy>"),cd:w("N<DL>"),fr:w("N<ahu>"),e4:w("N<a31>"),au:w("N<aMq>"),f7:w("N<P>"),n:w("N<G>"),t:w("N<F>"),dS:w("N<aC?>"),fs:w("N<um?>"),bN:w("N<F?>"),gJ:w("cB<alI>"),A:w("cB<ai<af>>"),bF:w("ah<u>"),gl:w("ah<W>"),ew:w("ah<aG>"),j:w("ah<@>"),P:w("a9<o,@>"),f:w("a9<@,@>"),bd:w("O<es,o>"),fR:w("O<+(G,x),x>"),w:w("it"),gA:w("vv"),gD:w("wT"),k:w("cr"),K:w("aG"),Y:w("um"),C:w("es"),N:w("o"),bO:w("au"),a:w("bq<G>"),W:w("b9<o>"),aC:w("b9<F?>"),dg:w("eh<rD>"),m:w("bfk"),a2:w("Dw"),f3:w("rD"),es:w("He"),q:w("l7"),y:w("P"),i:w("G"),z:w("@"),S:w("F"),R:w("ah<@>?"),cK:w("aG?"),T:w("o?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b6R=new B.dl(0,0.1)
D.b8O=new C.aWS(0,0,0)
D.Nf=new C.aWS(0,0.5,0)
D.b9p=new B.ax(A.bf,1,A.r,-1)
D.baV=new B.aY(16,1/0,16,1/0)
D.bb4=new B.aY(0,1/0,0,210)
D.bte=new B.u(1,0.10588235294117647,0.12549019607843137,0.18823529411764706,A.q)
D.dHR=w([D.bte,Av.alv],x.O)
D.eT5=new B.bV(A.C8,1.1,A.w,null,0,D.dHR,null,null)
D.bbc=new B.p(null,null,null,null,null,D.eT5,A.m)
D.bc9=new B.p(A.bh,null,null,null,null,null,A.a6)
D.fO5=new B.H(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hrI=new B.D("\u26a1",null,D.fO5,null,null,null,null,null,null,null,null,null)
D.bgV=new B.cp(A.z,null,null,D.hrI,null)
D.aZV=new B.H(!0,A.bX,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hgR=new B.D("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aZV,null,A.K,null,null,null,null,null,null,null)
D.eL8=new B.C(A.ob,D.hgR,null)
D.bh5=new B.cp(A.z,null,null,D.eL8,null)
D.h6v=new B.D("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aZV,null,A.K,null,null,null,null,null,null,null)
D.eM4=new B.C(A.I7,D.h6v,null)
D.bhP=new B.cp(A.z,null,null,D.eM4,null)
D.aie=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.blH=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.blY=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bnd=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.bnk=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.bnI=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.bpM=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.bqW=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.brH=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.akC=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.bsI=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.al0=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.al8=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.buI=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.alA=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.bwM=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.bwU=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bxo=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.x3=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.bzB=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.an8=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.bFt=new B.bh(11e6)
D.bHm=new B.Q(10,6,10,2)
D.bHo=new B.Q(10,8,0,10)
D.bI2=new B.Q(12,8,6,10)
D.bI5=new B.Q(12,8,8,8)
D.bIc=new B.Q(14,0,14,22)
D.bIe=new B.Q(14,0,14,30)
D.bJj=new B.Q(16,4,16,28)
D.bJD=new B.Q(18,10,18,16)
D.bMs=new B.Q(4,4,8,2)
D.bN5=new B.Q(8,14,8,12)
D.bNg=new B.Q(8,6,8,8)
D.bNC=new B.Q(0,0,1.5,0)
D.b8A=new B.Ew(26,"saturation")
D.bNV=new B.vf(A.cH,D.b8A,null,A.a_5)
D.bNW=new B.h5(A.G,11)
D.bO_=new B.h5(A.G,30)
D.h5x=new B.D("REACTION LAB",null,U.b_y,null,null,null,null,A.a2,null,1,null,null)
D.bO8=new B.bu(1,A.b9,D.h5x,null)
D.h9I=new B.D("\ud83d\udce2 NGMY Ads",null,A.qG,null,null,null,null,A.f6,null,1,null,null)
D.bP5=new B.bu(1,A.b9,D.h9I,null)
D.h47=new B.D("Wire selected",null,A.h6,null,null,null,null,null,null,null,null,null)
D.bPj=new B.bu(1,A.b9,D.h47,null)
D.asl=new B.a_(62712,"MaterialIcons",!1)
D.bVI=new B.a_(62908,"MaterialIcons",!1)
D.bXo=new B.a_(983122,"MaterialIcons",!1)
D.bXE=new B.a_(983247,"MaterialIcons",!1)
D.bXV=new B.a_(983443,"MaterialIcons",!1)
D.bYd=new B.a_(983616,"MaterialIcons",!1)
D.bXn=new B.a_(983117,"MaterialIcons",!1)
D.c15=new B.ae(D.bXn,28,A.c,null,null,null)
D.c1n=new B.ae(A.jm,18,null,null,null,null)
D.c3F=new B.ae(A.oi,null,A.ab,null,null,null)
D.c3P=new B.ae(A.a5x,21,A.ab,null,null,null)
D.c4H=new B.ae(A.eI,17,A.ab,null,null,null)
D.c7C=new B.ae(A.jm,21,A.ab,null,null,null)
D.c87=new B.ae(A.et,20,A.c3,null,null,null)
D.c9e=new B.ae(A.eb,null,A.aQ,null,null,null)
D.dFg=w([A.dl,A.di,A.dl],x.O)
D.aw6=new B.a6(A.a5,A.a9,A.w,D.dFg,null,null)
D.ddv=w([A.bP,A.bl],x.O)
D.ccL=new B.a6(A.aV,A.b1,A.w,D.ddv,null,null)
D.cd_=new B.a6(A.aV,A.b1,A.w,A.a8c,null,null)
D.dAk=w([F.NI,A8.ani],x.O)
D.cdK=new B.a6(A.aV,A.b1,A.w,D.dAk,null,null)
D.daL=w([A.pK,A.iK],x.O)
D.cdP=new B.a6(A.aV,A.b1,A.w,D.daL,null,null)
D.ddc=w([A.cU,A.ax],x.O)
D.awk=new B.a6(A.aV,A.b1,A.w,D.ddc,null,null)
D.dy7=w([A.d1,A.iN,A.bl],x.O)
D.ce7=new B.a6(A.a5,A.a9,A.w,D.dy7,null,null)
D.dKP=w([A.d1,A.bP,A.bl],x.O)
D.cei=new B.a6(A.a5,A.a9,A.w,D.dKP,null,null)
D.dyh=w([A.cz,A.cx],x.O)
D.awn=new B.a6(A.aV,A.b1,A.w,D.dyh,null,null)
D.aGr=w([A.cU,M.nk],x.O)
D.ceJ=new B.a6(A.aV,A.b1,A.w,D.aGr,null,null)
D.cf0=new B.a6(A.aV,A.b1,A.w,X.awH,null,null)
D.cfU=new B.a6(A.aw,A.aD,A.w,A.TC,null,null)
D.byj=new B.u(1,0.16470588235294117,0.16470588235294117,0.1803921568627451,A.q)
D.btu=new B.u(1,0.0392156862745098,0.0392156862745098,0.043137254901960784,A.q)
D.dnn=w([D.byj,D.btu],x.O)
D.cfY=new B.a6(A.aV,A.b1,A.w,D.dnn,null,null)
D.cg7=new B.a6(A.aV,A.b1,A.w,H.aFI,null,null)
D.amS=new B.u(1,0.043137254901960784,0.043137254901960784,0.047058823529411764,A.q)
D.bxV=new B.u(1,0.22745098039215686,0.22745098039215686,0.23921568627450981,A.q)
D.dHe=w([D.amS,D.bxV,D.amS],x.O)
D.cgf=new B.a6(A.a5,A.a9,A.w,D.dHe,null,null)
D.bxi=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.byc=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cVQ=w([A.OR,D.bxi,D.byc],x.O)
D.cgj=new B.a6(A.aV,A.b1,A.w,D.cVQ,null,null)
D.cIX=w([A.de,A.j1],x.O)
D.cgy=new B.a6(A.aV,A.b1,A.w,D.cIX,null,null)
D.cWy=w([A.d1,A.hY,A.d1],x.O)
D.cgG=new B.a6(A.a5,A.a9,A.w,D.cWy,null,null)
D.bB2=new B.u(1,0.07058823529411765,0.0784313725490196,0.10196078431372549,A.q)
D.cJK=w([F.aim,D.bB2],x.O)
D.cgM=new B.a6(A.aV,A.b1,A.w,D.cJK,null,null)
D.chq=w([0,4,7],x.t)
D.chr=w([0,4,7,12],x.t)
D.chs=w([0,4,7,4],x.t)
D.aFn=w([A.hn,A.tx],x.O)
D.aER=w([A.fM,A.cZ],x.O)
D.aDa=w([A.bk,A.e1],x.O)
D.d3Q=w([A.aQ,A.de],x.O)
D.dzK=w([A.c7,A.lY],x.O)
D.aCB=w([A.cY,A.kg],x.O)
D.d9m=w([A.bQ,A.aM],x.O)
D.chQ=w([D.aFn,D.aER,A.a7o,D.aDa,D.d3Q,A.a7k,A.a7B,D.dzK,D.aCB,D.d9m],B.as("N<ah<u>>"))
D.cmy=w([120,220,380],x.t)
D.cqi=w([12,16,19,24],x.t)
D.cqu=w([1400,800,450,2400],x.t)
D.cz4=w([250,450,900,1500],x.t)
D.bl_=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.bxI=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.bvn=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.bBE=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.buv=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.aBQ=w([D.bl_,D.bxI,D.bvn,D.bBE,D.buv],x.O)
D.fde=new B.y(-25,A.ax)
D.f17=new B.y(25,A.bC)
D.cJ2=w([D.fde,D.f17],B.as("N<+(G,u)>"))
D.cQB=w([50,25,75],x.t)
D.cWq=w([0,5,10,15,18,20,25],x.t)
D.d49=w([900,500,250,1600],x.t)
D.d8x=w([A.bk,A.bE,A.be,A.bk],x.O)
D.a7f=w([A.aC,A.bu,A.bh,A.aH,A.oT],x.O)
D.dan=w([A.ax,A.aC,A.cY,A.bu,A.bh,A.cJ,A.cj,A.bE,A.a_q],x.O)
D.a7i=w([0.04,0.17,0.3],x.n)
D.fxk=new C.vU("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.fxq=new C.vU("Medium engine","A good all-rounder.",0.3,0.9)
D.fxp=new C.vU("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.JA=w([D.fxk,D.fxq,D.fxp],x._)
D.eZf=new B.y(6,"Easy")
D.f_3=new B.y(8,"Medium")
D.eUI=new B.y(10,"Hard")
D.dcb=w([D.eZf,D.f_3,D.eUI],x.L)
D.aDz=w([0.55,0.78,1],x.n)
D.aDK=w([A.c,A.hb,A.pM,A.ax],x.O)
D.aDS=w([A.bh,A.aC,A.bu,A.di],x.O)
D.fxh=new C.vU("Radar","Shows your height above the ground.",0.1,0)
D.fxi=new C.vU("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.fxf=new C.vU("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aE0=w([D.fxh,D.fxi,D.fxf],x._)
D.diL=w([-29.5,28.5],x.n)
D.diR=w([A.bl,A.cn,F.Oc,A.cz],x.O)
D.dje=w([47,100,220,470,1000],x.n)
D.dkF=w([0,0.32,0.62,1],x.n)
D.dkK=w([A.d1,A.hY,A.d1,A.cz],x.O)
D.KL={volts:0}
D.a9f=new B.bl(D.KL,[3],x.J)
D.Ld=new B.e1(["b","battery",0.2,0.3,D.a9f])
D.eET={on:0}
D.dRj=new B.bl(D.eET,[1],x.J)
D.FE=new B.e1(["s","switch",0.5,0.3,D.dRj])
D.fuR=new B.e1(["l","bulb",0.8,0.3,A.jK])
D.ddG=w([D.Ld,D.FE,D.fuR],x.d)
D.FC=new B.b3(["b",0,"s",0])
D.ftJ=new B.b3(["s",1,"l",0])
D.aVk=new B.b3(["l",1,"b",1])
D.dyp=w([D.FC,D.ftJ,D.aVk],x.o)
D.dd0=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.eTP=new C.nj("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.ddG,D.dyp,D.dd0)
D.aP_={ohms:0}
D.aMs=new B.bl(D.aP_,[220],x.J)
D.fuf=new B.e1(["r","resistor",0.5,0.3,D.aMs])
D.fv7=new B.e1(["d","led",0.8,0.3,A.jK])
D.dC0=w([D.Ld,D.fuf,D.fv7],x.d)
D.fsV=new B.b3(["b",0,"r",0])
D.ftC=new B.b3(["r",1,"d",0])
D.ft1=new B.b3(["d",1,"b",1])
D.dMF=w([D.fsV,D.ftC,D.ft1],x.o)
D.dCt=w(["led","diode","indicator"],x.s)
D.eTW=new C.nj("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dC0,D.dMF,D.dCt)
D.aaP={level:0}
D.dQF=new B.bl(D.aaP,[0.2],x.J)
D.fum=new B.e1(["p","pot",0.5,0.3,D.dQF])
D.fuo=new B.e1(["m","motor",0.8,0.3,A.jK])
D.de3=w([D.Ld,D.fum,D.fuo],x.d)
D.fsU=new B.b3(["b",0,"p",0])
D.ftx=new B.b3(["p",1,"m",0])
D.fts=new B.b3(["m",1,"b",1])
D.dHy=w([D.fsU,D.ftx,D.fts],x.o)
D.dy0=w(["fan","motor","spin","dimmer"],x.s)
D.eTN=new C.nj("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.de3,D.dHy,D.dy0)
D.a9b=new B.bl(D.aaP,[0.9],x.J)
D.aVt=new B.e1(["s","solar",0.25,0.3,D.a9b])
D.aVs=new B.e1(["l","bulb",0.75,0.3,A.jK])
D.dhg=w([D.aVt,D.aVs],x.d)
D.ftG=new B.b3(["s",0,"l",0])
D.fto=new B.b3(["l",1,"s",1])
D.deZ=w([D.ftG,D.fto],x.o)
D.dIl=w(["solar","sun","without battery","no battery","free"],x.s)
D.eTQ=new C.nj("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.dhg,D.deZ,D.dIl)
D.fvc=new B.e1(["c","crank",0.25,0.3,D.a9b])
D.dw_=w([D.fvc,D.aVs],x.d)
D.fsY=new B.b3(["c",0,"l",0])
D.ftn=new B.b3(["l",1,"c",1])
D.dwI=w([D.fsY,D.ftn],x.o)
D.dwc=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.eTM=new C.nj("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.dw_,D.dwI,D.dwc)
D.dQE=new B.bl(D.aaP,[0.7],x.J)
D.fut=new B.e1(["t","turbine",0.25,0.3,D.dQE])
D.fud=new B.e1(["m","motor",0.75,0.3,A.jK])
D.dpm=w([D.fut,D.fud],x.d)
D.ftR=new B.b3(["t",0,"m",0])
D.ftt=new B.b3(["m",1,"t",1])
D.do8=w([D.ftR,D.ftt],x.o)
D.duB=w(["wind","turbine","windmill","water","hydro"],x.s)
D.eTJ=new C.nj("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.dpm,D.do8,D.duB)
D.aMp=new B.bl(D.KL,[9],x.J)
D.abY=new B.e1(["b","battery",0.2,0.3,D.aMp])
D.aVq=new B.e1(["r","radio",0.8,0.3,A.jK])
D.dJ0=w([D.abY,D.FE,D.aVq],x.d)
D.ftL=new B.b3(["s",1,"r",0])
D.aVm=new B.b3(["r",1,"b",1])
D.ch3=w([D.FC,D.ftL,D.aVm],x.o)
D.dHi=w(["radio","music","listen"],x.s)
D.eTV=new C.nj("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dJ0,D.ch3,D.dHi)
D.dRJ=new B.bl(D.KL,[12],x.J)
D.aVp=new B.e1(["b","battery",0.2,0.3,D.dRJ])
D.fuS=new B.e1(["t","tv",0.8,0.3,A.jK])
D.ddI=w([D.aVp,D.FE,D.fuS],x.d)
D.ftM=new B.b3(["s",1,"t",0])
D.aVn=new B.b3(["t",1,"b",1])
D.dzO=w([D.FC,D.ftM,D.aVn],x.o)
D.dIY=w(["tv","television","screen","watch"],x.s)
D.eTG=new C.nj("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.ddI,D.dzO,D.dIY)
D.fuH=new B.e1(["z","buzzer",0.8,0.3,A.jK])
D.cT_=w([D.Ld,D.FE,D.fuH],x.d)
D.ftN=new B.b3(["s",1,"z",0])
D.fu6=new B.b3(["z",1,"b",1])
D.d7y=w([D.FC,D.ftN,D.fu6],x.o)
D.dFo=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.eTS=new C.nj("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cT_,D.d7y,D.dFo)
D.fun=new B.e1(["h","heater",0.8,0.3,A.jK])
D.dt3=w([D.abY,D.FE,D.fun],x.d)
D.ftI=new B.b3(["s",1,"h",0])
D.fta=new B.b3(["h",1,"b",1])
D.d8s=w([D.FC,D.ftI,D.fta],x.o)
D.cCq=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.eTH=new C.nj("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.dt3,D.d8s,D.cCq)
D.fuU=new B.e1(["s","solar",0.2,0.25,D.a9b])
D.dRO=new B.bl(D.aP_,[100],x.J)
D.fuX=new B.e1(["r","resistor",0.55,0.25,D.dRO])
D.fv5=new B.e1(["c","capacitor",0.85,0.25,A.jK])
D.fuj=new B.e1(["q","resistor",0.55,0.6,D.aMs])
D.fuV=new B.e1(["d","led",0.85,0.6,A.jK])
D.dza=w([D.fuU,D.fuX,D.fv5,D.fuj,D.fuV],x.d)
D.ftH=new B.b3(["s",0,"r",0])
D.ftB=new B.b3(["r",1,"c",0])
D.ft_=new B.b3(["c",1,"s",1])
D.fsZ=new B.b3(["c",0,"q",0])
D.ftA=new B.b3(["q",1,"d",0])
D.ft2=new B.b3(["d",1,"c",1])
D.dlI=w([D.ftH,D.ftB,D.ft_,D.fsZ,D.ftA,D.ft2],x.o)
D.dvc=w(["capacitor","store","charge","flash"],x.s)
D.eTU=new C.nj("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.dza,D.dlI,D.dvc)
D.fuw=new B.e1(["b","battery",0.15,0.3,D.a9f])
D.fve=new B.e1(["l1","bulb",0.5,0.3,A.jK])
D.fuE=new B.e1(["l2","bulb",0.85,0.3,A.jK])
D.dbu=w([D.fuw,D.fve,D.fuE],x.d)
D.fsT=new B.b3(["b",0,"l1",0])
D.ftk=new B.b3(["l1",1,"l2",0])
D.ftl=new B.b3(["l2",1,"b",1])
D.dqd=w([D.fsT,D.ftk,D.ftl],x.o)
D.dIH=w(["series","two bulbs","dim"],x.s)
D.eTK=new C.nj("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.dbu,D.dqd,D.dIH)
D.eFf={volts:0,charge:1}
D.dRS=new B.bl(D.eFf,[1.5,0],x.J)
D.fv2=new B.e1(["b","battery",0.75,0.3,D.dRS])
D.daM=w([D.aVt,D.fv2],x.d)
D.ftF=new B.b3(["s",0,"b",0])
D.fsX=new B.b3(["b",1,"s",1])
D.dm3=w([D.ftF,D.fsX],x.o)
D.dvo=w(["charge","rechargeable","flat","recharge"],x.s)
D.eTI=new C.nj("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.daM,D.dm3,D.dvo)
D.dRI=new B.bl(D.KL,[4.5],x.J)
D.fup=new B.e1(["b","battery",0.2,0.3,D.dRI])
D.aVo=new B.e1(["p","phone",0.8,0.3,A.jK])
D.dp9=w([D.fup,D.FE,D.aVo],x.d)
D.ftK=new B.b3(["s",1,"p",0])
D.abX=new B.b3(["p",1,"b",1])
D.dE3=w([D.FC,D.ftK,D.abX],x.o)
D.dFT=w(["phone","charger","usb","mobile"],x.s)
D.eTO=new C.nj("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.dp9,D.dE3,D.dFT)
D.fua=new B.e1(["f","fan",0.8,0.3,A.jK])
D.cum=w([D.Ld,D.fua],x.d)
D.fsS=new B.b3(["b",0,"f",0])
D.ft8=new B.b3(["f",1,"b",1])
D.d95=w([D.fsS,D.ft8],x.o)
D.dy_=w(["fan","cool","air","wind"],x.s)
D.eTX=new C.nj("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.cum,D.d95,D.dy_)
D.fuL=new B.e1(["b","battery",0.15,0.2,D.a9f])
D.fub=new B.e1(["a","ammeter",0.5,0.2,A.jK])
D.fu9=new B.e1(["l","bulb",0.85,0.2,A.jK])
D.fuN=new B.e1(["v","voltmeter",0.5,0.6,A.jK])
D.dvL=w([D.fuL,D.fub,D.fu9,D.fuN],x.d)
D.fsQ=new B.b3(["b",0,"a",0])
D.fsO=new B.b3(["a",1,"l",0])
D.ftT=new B.b3(["v",0,"l",0])
D.ftU=new B.b3(["v",1,"l",1])
D.dlV=w([D.fsQ,D.fsO,D.aVk,D.ftT,D.ftU],x.o)
D.dME=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.eTT=new C.nj("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.dvL,D.dlV,D.dME)
D.fvh=new B.e1(["b","battery",0.15,0.2,D.aMp])
D.fuv=new B.e1(["t","tv",0.55,0.2,A.jK])
D.aMq=new B.bl(D.KL,[5],x.J)
D.fug=new B.e1(["c","buck",0.4,0.5,D.aMq])
D.fux=new B.e1(["p","phone",0.8,0.5,A.jK])
D.dj0=w([D.fvh,D.fuv,D.fug,D.fux],x.d)
D.fsW=new B.b3(["b",0,"t",0])
D.aVi=new B.b3(["b",0,"c",0])
D.aVj=new B.b3(["c",1,"p",0])
D.dp6=w([D.fsW,D.aVn,D.aVi,D.aVj,D.abX],x.o)
D.dgM=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.eTL=new C.nj("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.dj0,D.dp6,D.dgM)
D.fui=new B.e1(["c","buck",0.5,0.3,D.aMq])
D.d8e=w([D.aVp,D.fui,D.aVo],x.d)
D.dee=w([D.aVi,D.aVj,D.abX],x.o)
D.cG_=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.eTF=new C.nj("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.d8e,D.dee,D.cG_)
D.fuC=new B.e1(["d","diode",0.5,0.3,A.jK])
D.dqu=w([D.abY,D.fuC,D.aVq],x.d)
D.fsR=new B.b3(["b",0,"d",0])
D.ft3=new B.b3(["d",1,"r",0])
D.cVB=w([D.fsR,D.ft3,D.aVm],x.o)
D.dgo=w(["diode","protect","backwards","one way"],x.s)
D.eTR=new C.nj("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.dqu,D.cVB,D.dgo)
D.TR=w([D.eTP,D.eTW,D.eTN,D.eTQ,D.eTM,D.eTJ,D.eTV,D.eTG,D.eTS,D.eTH,D.eTU,D.eTK,D.eTI,D.eTO,D.eTX,D.eTT,D.eTL,D.eTF,D.eTR],B.as("N<nj>"))
D.i6a=new C.Ht("Moon",1.62,A.d1,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.i68=new C.Ht("Mars",3.71,A.aC,"Mars has about 38 percent of Earth's gravity.")
D.i6b=new C.Ht("Mercury",3.7,A.kK,"Mercury is small, so its gravity is like Mars.")
D.i65=new C.Ht("Venus",8.87,A.aQ,"Venus is almost as heavy as Earth, with strong gravity.")
D.i67=new C.Ht("Earth",9.81,A.aH,"On Earth gravity is strong, and the air also slows you down.")
D.i69=new C.Ht("Neptune",11.15,A.di,"Neptune pulls a little harder than Earth.")
D.i66=new C.Ht("Jupiter",24.79,A.cY,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.u9=w([D.i6a,D.i68,D.i6b,D.i65,D.i67,D.i69,D.i66],B.as("N<Ht>"))
D.dlG=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.dmv=w([0.2,0.5,0.8],x.n)
D.b5z=new C.LQ(0,"accordion")
D.d9u=w([A.k0,A.Ap,A.A9],x.x)
D.dik=w(["Mail","SMS","Ad"],x.s)
D.daf=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.i4k=new C.Bw(D.b5z,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aFn,D.d9u,D.dik,D.daf)
D.afO=new C.LQ(1,"flip")
D.dv6=w([A.rB,A.Ee,A.rD],x.x)
D.doP=w(["Unlock","Verify","Secure"],x.s)
D.d89=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.i4j=new C.Bw(D.afO,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.aER,D.dv6,D.doP,D.d89)
D.b5A=new C.LQ(2,"towers")
D.dnp=w([A.An,A.mJ,A.iy],x.x)
D.dmO=w(["Save","Grow","Earn"],x.s)
D.cWE=w(["","",""],x.s)
D.i4l=new C.Bw(D.b5A,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a7o,D.dnp,D.dmO,D.cWE)
D.afP=new C.LQ(3,"assemble")
D.dwg=w([A.ol,A.fR,A.eb],x.x)
D.dhw=w(["Launch","Charge","Shine"],x.s)
D.drZ=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.i4n=new C.Bw(D.afP,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.aDa,D.dwg,D.dhw,D.drZ)
D.b5B=new C.LQ(4,"carousel")
D.dw0=w([A.be,A.ey],x.O)
D.div=w([A.ns,A.asJ,A.Rv],x.x)
D.dc0=w(["Explore","Discover","Learn"],x.s)
D.dph=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.i4i=new C.Bw(D.b5B,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.dw0,D.div,D.dc0,D.dph)
D.b5C=new C.LQ(5,"burst")
D.dmJ=w([A.i_,A.v4],x.O)
D.da8=w([A.kp,A.m8,A.hQ],x.x)
D.dax=w(["Cheer","Win","Love"],x.s)
D.dd9=w(["Make some noise","First place","Share the joy"],x.s)
D.i4m=new C.Bw(D.b5C,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.dmJ,D.da8,D.dax,D.dd9)
D.aEy=w([D.i4k,D.i4j,D.i4l,D.i4n,D.i4i,D.i4m],B.as("N<Bw>"))
D.fnj=new B.aV("skin","Skin",A.a4S)
D.fp5=new B.aV("muscle","Muscles",A.R2)
D.foI=new B.aV("organ","Organs",A.hQ)
D.bVo=new B.a_(62747,"MaterialIcons",!1)
D.foS=new B.aV("bone","Skeleton",D.bVo)
D.fpd=new B.aV("vessel","Blood vessels",A.qi)
D.dnv=w([D.fnj,D.fp5,D.foI,D.foS,D.fpd],x.r)
D.fxj=new C.vU("Simple legs","Light. Land gently.",0.15,0.2)
D.fxl=new C.vU("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.fxo=new C.vU("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.EB=w([D.fxj,D.fxl,D.fxo],x._)
D.fsk=new B.b3(["beat",0.18,0.28,0])
D.ftO=new B.b3(["burst",0.7,0.2,0])
D.ftZ=new B.b3(["delay",0.45,0.5,1])
D.ftv=new B.b3(["ripple",0.75,0.6,3])
D.dhb=w([D.fsk,D.ftO,D.ftZ,D.ftv],x.e)
D.dul=w([Q.lo,R.Lb,F.Wq],x.u)
D.i1a=new C.He("First spark","A clock lights a burst and a ripple",D.dhb,D.dul)
D.ft7=new B.b3(["beat",0.15,0.3,1])
D.fqx=new B.b3(["ripple",0.62,0.15,0])
D.ftV=new B.b3(["delay",0.4,0.45,0])
D.fsJ=new B.b3(["ripple",0.7,0.45,0])
D.fse=new B.b3(["delay",0.4,0.7,1])
D.fty=new B.b3(["shake",0.75,0.75,0])
D.dK2=w([D.ft7,D.fqx,D.ftV,D.fsJ,D.fse,D.fty],x.e)
D.eVS=new B.y(2,4)
D.aUT=new B.y(4,5)
D.dlu=w([Q.lo,R.Lb,F.Wq,D.eVS,D.aUT],x.u)
D.i1c=new C.He("Heartbeat","Two thumps, then a shake",D.dK2,D.dlu)
D.fsq=new B.b3(["dice",0.15,0.7,1])
D.fu1=new B.b3(["echo",0.4,0.7,0])
D.fsF=new B.b3(["comet",0.7,0.5,4])
D.ftP=new B.b3(["burst",0.72,0.2,1])
D.ft4=new B.b3(["burst",0.3,0.25,0])
D.fsr=new B.b3(["pop",0.55,0.85,0])
D.cBY=w([D.fsq,D.fu1,D.fsF,D.ftP,D.ft4,D.fsr],x.e)
D.eVb=new B.y(1,3)
D.eVc=new B.y(1,4)
D.aUP=new B.y(0,5)
D.dvV=w([Q.lo,S.wl,D.eVb,D.eVc,D.aUP],x.u)
D.i1b=new C.He("Fireworks","Dice launch comets that burst in colour",D.cBY,D.dvV)
D.fsz=new B.b3(["beat",0.15,0.2,2])
D.fth=new B.b3(["chance",0.4,0.2,0])
D.fsn=new B.b3(["ball",0.7,0.12,3])
D.fs7=new B.b3(["chance",0.4,0.5,1])
D.fu_=new B.b3(["ball",0.3,0.08,1])
D.frn=new B.b3(["ripple",0.7,0.55,3])
D.cuS=w([D.fsz,D.fth,D.fsn,D.fs7,D.fu_,D.frn],x.e)
D.eVT=new B.y(2,5)
D.cSJ=w([Q.lo,S.wl,R.abN,F.Wr,D.eVT],x.u)
D.i19=new C.He("Rain","Balls fall at random and splash",D.cuS,D.cSJ)
D.fti=new B.b3(["beat",0.12,0.45,2])
D.ftQ=new B.b3(["toggle",0.38,0.2,0])
D.ftX=new B.b3(["wash",0.7,0.15,4])
D.fsp=new B.b3(["count3",0.38,0.45,0])
D.ftS=new B.b3(["burst",0.72,0.4,0])
D.ft5=new B.b3(["light",0.55,0.7,1])
D.fs8=new B.b3(["pop",0.8,0.8,4])
D.dz8=w([D.fti,D.ftQ,D.ftX,D.fsp,D.ftS,D.ft5,D.fs8],x.e)
D.eWr=new B.y(3,6)
D.cy4=w([Q.lo,S.wl,R.abN,F.Wr,D.aUP,D.eWr],x.u)
D.i17=new C.He("Disco","A beat drives lights, washes and bursts",D.dz8,D.cy4)
D.fu5=new B.b3(["button",0.12,0.2,0])
D.frO=new B.b3(["delay",0.34,0.2,1])
D.fu4=new B.b3(["light",0.56,0.2,1])
D.ftW=new B.b3(["delay",0.56,0.45,1])
D.ftj=new B.b3(["ball",0.34,0.6,0])
D.fs6=new B.b3(["delay",0.34,0.8,1])
D.fqn=new B.b3(["burst",0.7,0.8,5])
D.chT=w([D.fu5,D.frO,D.fu4,D.ftW,D.ftj,D.fs6,D.fqn],x.e)
D.eYK=new B.y(5,6)
D.dFz=w([Q.lo,S.wl,F.Wq,F.Wr,D.aUT,D.eYK],x.u)
D.i18=new C.He("Domino","Tap the button and watch it run down the line",D.chT,D.dFz)
D.aEV=w([D.i1a,D.i1c,D.i1b,D.i19,D.i17,D.i18],B.as("N<He>"))
D.dtx=w([0.05,0.15,0.25],x.n)
D.duz=w([1.5,3,4.5,9,12],x.n)
D.flw=new B.aV("dice","Dice",A.oe)
D.fmQ=new B.aV("coin","Coin",V.Ag)
D.fp8=new B.aV("num","Number",A.xF)
D.duO=w([D.flw,D.fmQ,D.fp8],x.r)
D.duS=w(["skin","muscle","organ","bone","vessel"],x.s)
D.aF0=w([A.c3,A.aQ,A.bf,A.aH,A.bk,A.c7,A.cY,A.fM],x.O)
D.dw2=w([A.c7,A.aH,A.eL,A.bf],x.O)
D.dxg=w([],x.h)
D.eMT=new C.es("battery","Battery","\ud83d\udd0b",A.bf,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.eMZ=new C.es("solar","Solar panel","\u2600\ufe0f",A.bu,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.eND=new C.es("crank","Hand crank","\ud83d\udd04",A.cY,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.eNf=new C.es("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aH,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.eML=new C.es("buck","Step-down converter","\ud83d\udd3d",A.fM,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.eNd=new C.es("regulator","5 V regulator","\ud83e\uddca",A.bQ,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.eNI=new C.es("diode","Diode","\u27a1\ufe0f",A.aQ,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.eNp=new C.es("ldr","Light sensor","\ud83c\udf1e",A.eL,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.eN3=new C.es("switch","Switch","\ud83c\udf9a\ufe0f",A.bk,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.eNF=new C.es("fuse","Fuse","\ud83e\uddef",A.c3,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.eMD=new C.es("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.fM,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.eNq=new C.es("resistor","Resistor","\u3030\ufe0f",A.aQ,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.eNs=new C.es("bulb","Light bulb","\ud83d\udca1",A.eL,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.eN0=new C.es("led","LED","\ud83d\udd34",A.aC,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.eN4=new C.es("motor","Motor","\u2699\ufe0f",A.bQ,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.eNm=new C.es("buzzer","Buzzer","\ud83d\udd14",A.c7,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.eMU=new C.es("heater","Heater","\ud83d\udd25",A.cY,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.eNh=new C.es("capacitor","Capacitor","\ud83e\udeab",A.cw,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.eN9=new C.es("radio","Radio","\ud83d\udcfb",A.oT,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.eN6=new C.es("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.be,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.eMK=new C.es("voltmeter","Voltmeter","\ud83e\udded",A.bw,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.eMR=new C.es("ammeter","Ammeter","\ud83d\udcdf",A.aQ,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.eMX=new C.es("fan","Fan","\ud83c\udf00",A.aH,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.eNK=new C.es("speaker","Speaker","\ud83d\udd0a",A.c7,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.eNz=new C.es("clock","Digital clock","\u23f0",A.bf,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.eNc=new C.es("calculator","Calculator","\ud83e\uddee",A.NL,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.eMQ=new C.es("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cw,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.eNJ=new C.es("router","WiFi router","\ud83d\udcf6",A.fM,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.eNM=new C.es("siren","Siren","\ud83d\udea8",A.aC,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.eMG=new C.es("toycar","Toy car","\ud83d\ude97",A.cY,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.eNN=new C.es("kettle","Kettle","\ud83e\uded6",A.ng,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.eMO=new C.es("lamp","Desk lamp","\ud83e\ude94",A.eL,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.eN_=new C.es("lights","Party lights","\ud83c\udf84",A.oT,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.eNa=new C.es("fridge","Fridge","\ud83e\uddca",A.ho,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.eMI=new C.es("washer","Washing machine","\ud83e\udee7",A.cw,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.eNA=new C.es("blender","Blender","\ud83e\udd64",A.c3,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.eN7=new C.es("drone","Drone","\ud83d\ude81",A.bQ,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.eMN=new C.es("drill","Power drill","\ud83d\udd29",A.aQ,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.eNb=new C.es("torch","Torch","\ud83d\udd26",A.bO,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.eNx=new C.es("neon","Neon sign","\ud83e\udea7",A.c7,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.eMJ=new C.es("microwave","Microwave","\ud83c\udf72",A.cY,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.eNr=new C.es("doorbell","Doorbell","\ud83d\udd14",A.bu,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.eMW=new C.es("camera","Security camera","\ud83d\udcf7",A.an,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.eNl=new C.es("console","Game console","\ud83c\udfae",A.bk,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.eNC=new C.es("heartmon","Heart monitor","\ud83e\ude7a",A.hJ,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.eMH=new C.es("aquarium","Aquarium","\ud83d\udc20",A.be,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.eNg=new C.es("lighthouse","Lighthouse","\ud83d\uddfc",A.eL,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.eNo=new C.es("discoball","Disco ball","\ud83e\udea9",A.oT,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.eNH=new C.es("robot","Robot","\ud83e\udd16",A.aH,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.eMF=new C.es("toaster","Toaster","\ud83c\udf5e",A.ef,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.eNL=new C.es("ledstrip","LED strip","\ud83c\udf08",A.c7,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.eNw=new C.es("pump","Water pump","\ud83d\udeb0",A.aH,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.eNi=new C.es("hairdryer","Hair dryer","\ud83d\udca8",A.i_,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.eNu=new C.es("headphones","Headphones","\ud83c\udfa7",A.bk,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.eMP=new C.es("smartwatch","Apple Watch Ultra","\u231a",A.bw,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.eNG=new C.es("tablet","iPad Pro M5","\ud83d\udcf2",A.cw,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.eMC=new C.es("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hJ,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.eN8=new C.es("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bv,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.eN1=new C.es("appletv","Apple TV 4K","\ud83d\udcfa",A.bP,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.eNn=new C.es("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.wY,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.eME=new C.es("iphonefold","iPhone Fold","\ud83d\udcf1",A.b2,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.eMS=new C.es("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.di,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.eNE=new C.es("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cJ,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.eNj=new C.es("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bh,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.eNe=new C.es("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.ca,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.eNv=new C.es("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.aC,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.eN2=new C.es("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.bf,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.eNk=new C.es("honor","Honor Magic V5","\ud83d\udcf1",A.cw,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.eNt=new C.es("vivo","vivo X300 Pro","\ud83d\udcf1",A.cY,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.eNy=new C.es("ereader","Kindle Scribe","\ud83d\udcd6",A.bv,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.eMB=new C.es("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.cj,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.eN5=new C.es("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cJ,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.eMY=new C.es("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.be,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.eMM=new C.es("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.eL,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.eMV=new C.es("carscreen","Luxury car touchscreen","\ud83d\ude98",A.aC,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.eNB=new C.es("vision","Apple Vision Pro","\ud83e\udd7d",A.bk,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.Uh=w([D.eMT,D.eMZ,D.eND,D.eNf,D.eML,D.eNd,D.eNI,D.eNp,D.eN3,D.eNF,D.eMD,D.eNq,D.eNs,D.eN0,D.eN4,D.eNm,D.eMU,D.eNh,D.eN9,D.eN6,D.eMK,D.eMR,D.eMX,D.eNK,D.eNz,D.eNc,D.eMQ,D.eNJ,D.eNM,D.eMG,D.eNN,D.eMO,D.eN_,D.eNa,D.eMI,D.eNA,D.eN7,D.eMN,D.eNb,D.eNx,D.eMJ,D.eNr,D.eMW,D.eNl,D.eNC,D.eMH,D.eNg,D.eNo,D.eNH,D.eMF,D.eNL,D.eNw,D.eNi,D.eNu,D.eMP,D.eNG,D.eMC,D.eN8,D.eN1,D.eNn,D.eME,D.eMS,D.eNE,D.eNj,D.eNe,D.eNv,D.eN2,D.eNk,D.eNt,D.eNy,D.eMB,D.eN5,D.eMY,D.eMM,D.eMV,D.eNB],B.as("N<es>"))
D.dxU=w([5,10,15,25,45,60],x.t)
D.dyl=w([-0.045,0.03,-0.015],x.n)
D.aFv=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.w_=w([0.05,0.2,0.35],x.n)
D.aFz=w([A.d1,A.iN,A.v7,A.GW],x.O)
D.bdt=new B.ac(0,A.G,A.i1,A.dQ,6)
D.dBq=w([D.bdt],x.V)
D.eUi=new B.y(0,"AND")
D.eVe=new B.y(1,"Adder")
D.eVU=new B.y(2,"Blinker")
D.eWs=new B.y(3,"Memory")
D.dCe=w([D.eUi,D.eVe,D.eVU,D.eWs],x.L)
D.aFJ=w([-104,0,104],x.n)
D.aFL=w([-14,3],x.n)
D.dDf=w([-8,0,8],x.n)
D.aFT=w([-92,0,92],x.n)
D.dDK=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.fxg=new C.vU("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.fxn=new C.vU("Medium tank","Balanced.",0.35,1)
D.fxm=new C.vU("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.Ux=w([D.fxg,D.fxn,D.fxm],x._)
D.oq=w([0.04,0.2,0.36],x.n)
D.aG5=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.foG=new B.aV(D.b5z,"Fold",V.atH)
D.fnz=new B.aV(D.afO,"Flip",A.DV)
D.bVF=new B.a_(62889,"MaterialIcons",!1)
D.fp4=new B.aV(D.b5A,"Rise",D.bVF)
D.atU=new B.a_(983870,"MaterialIcons",!1)
D.fkR=new B.aV(D.afP,"Assemble",D.atU)
D.fl3=new B.aV(D.b5B,"Spin",D.asl)
D.fkY=new B.aV(D.b5C,"Pop",A.kp)
D.dFw=w([D.foG,D.fnz,D.fp4,D.fkR,D.fl3,D.fkY],B.as("N<+(LQ,o,a_)>"))
D.aGa=w([A.c7,A.eL,A.bw,A.aH,A.bk,A.c3],x.O)
D.dFZ=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dH7=w([3,4.5,5,6,9],x.n)
D.be8=new B.ac(0,A.G,A.bc,A.J,16)
D.dHC=w([D.be8],x.V)
D.hf4=new B.D("\ud83e\uddcd",null,S.M5,null,null,null,null,null,null,null,null,null)
D.cgQ=new B.Jo(5,null,null,A.by,A.c7,null,null,null,null)
D.fEp=new B.a4(150,null,D.cgQ,null)
D.fWX=new B.H(!0,A.ab,null,null,null,null,14,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hiq=new B.D("Getting the body ready...",null,D.fWX,null,null,null,null,null,null,null,null,null)
D.hf7=new B.D("Real 3D anatomy, kept on your phone",null,Af.yk,null,null,null,null,null,null,null,null,null)
D.dHG=w([D.hf4,A.aA,D.fEp,A.af,D.hiq,A.at,D.hf7],x.p)
D.dIg=w(["solar","turbine","crank","pot"],x.s)
D.dIM=w([0,0.35,0.75,1],x.n)
D.dKi=w(["volts","level","ohms","on"],x.s)
D.bpX=new B.u(1,0.23137254901960785,0.43529411764705883,0.8470588235294118,A.q)
D.bB6=new B.u(1,0.0392156862745098,0.10196078431372549,0.25098039215686274,A.q)
D.dKm=w([A.alz,D.bpX,A.m2,D.bB6],x.O)
D.dLW=w([A.k0,A.Ap,A.A9,A.rB,A.Ee,A.rD,A.An,A.mJ,A.iy,A.ol,A.fR,A.eb,A.hQ,A.ij,A.m8,A.kR,A.rC,A.qh,A.lJ,A.Iz,A.vM,A.DU,A.DS,A.Rs,A.Iy,A.E4,A.R2,A.at5,H.atQ,A.kp],x.x)
D.eCx={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.hU4=new C.z7("Switch",F.p9,A.bu,0,"Tap it to turn it ON or OFF.")
D.hU0=new C.z7("Blinker",A.mI,A.bw,0,"Turns itself ON and OFF. Tap to change the speed.")
D.hU1=new C.z7("AND",D.atU,A.cw,2,"ON only when BOTH inputs are ON.")
D.bXb=new B.a_(63671,"MaterialIcons",!1)
D.hU_=new C.z7("OR",D.bXb,A.bk,2,"ON when EITHER input is ON.")
D.hU2=new C.z7("XOR",A.a4K,A.c7,2,"ON when the inputs are DIFFERENT.")
D.hTX=new C.z7("NAND",A.tV,A.aH,2,"OFF only when BOTH inputs are ON.")
D.bWg=new B.a_(63176,"MaterialIcons",!1)
D.hTY=new C.z7("NOR",D.bWg,A.fM,2,"ON only when BOTH inputs are OFF.")
D.hTZ=new C.z7("NOT",W.E6,A.cY,1,"Flips the signal: ON becomes OFF.")
D.hU3=new C.z7("Light",A5.lg,A.eL,1,"Glows when its input is ON.")
D.hU5=new C.z7("Buzzer",T.pb,A.c3,1,"Beeps while its input is ON.")
D.B3=new B.bl(D.eCx,[D.hU4,D.hU0,D.hU1,D.hU_,D.hU2,D.hTX,D.hTY,D.hTZ,D.hU3,D.hU5],B.as("bl<o,z7>"))
D.eEo={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22,smartwatch:23}
D.Bv=new C.KN(0,"tv")
D.fyU=new C.mw("Samsung Neo QLED 8K",D.Bv,F.za,A.aH)
D.fyK=new C.mw("LG OLED evo G5",D.Bv,A.eD,A.hJ)
D.fyB=new C.mw("Sony Bravia 9",D.Bv,A.ti,A.bv)
D.fyF=new C.mw("Apple TV 4K",D.Bv,A.dW,A.bP)
D.fyC=new C.mw("Bang and Olufsen Beovision",D.Bv,F.Cx,F.wY)
D.ac8=new C.KN(1,"iphone")
D.aVQ=new C.mw("iPhone 18 Pro Max",D.ac8,D.an8,A.cj)
D.Bx=new C.KN(3,"fold")
D.bBk=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.fyP=new C.mw("iPhone Fold",D.Bx,D.bBk,A.b2)
D.Bw=new C.KN(2,"android")
D.fyQ=new C.mw("Samsung Galaxy S26 Ultra",D.Bw,F.NI,A.di)
D.btz=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.fyI=new C.mw("Samsung Galaxy Z Fold7",D.Bx,D.btz,A.cJ)
D.fyE=new C.mw("Google Pixel 10 Pro XL",D.Bw,A.d1,A.bh)
D.fyM=new C.mw("Xiaomi 16 Ultra",D.Bw,A.iv,A.ca)
D.fyH=new C.mw("Huawei Mate 80 Pro Max",D.Bw,A.ex,A.aC)
D.fyD=new C.mw("OPPO Find X9 Ultra",D.Bw,A.em,A.bf)
D.fyW=new C.mw("Honor Magic V5",D.Bx,A.dl,A.cw)
D.fyJ=new C.mw("vivo X300 Pro",D.Bw,A.h_,A.cY)
D.aVR=new C.KN(4,"tablet")
D.fyO=new C.mw("iPad Pro M5",D.aVR,A.d1,A.aH)
D.ac9=new C.KN(5,"reader")
D.fyX=new C.mw("Kindle Scribe",D.ac9,A.cU,A.bv)
D.y7=new C.KN(6,"computer")
D.fyN=new C.mw("MacBook Pro M5 Max",D.y7,A.d1,A.cj)
D.fyT=new C.mw("iMac 32 inch",D.y7,A.bP,A.cJ)
D.fyL=new C.mw("Pro Display XDR 8K",D.y7,A.iv,A.be)
D.fyG=new C.mw("Sony Laser Projector",D.y7,A.cx,A.eL)
D.fyR=new C.mw("Luxury car touchscreen",D.y7,M.nk,A.aC)
D.fyV=new C.mw("Apple Vision Pro",D.y7,A.cz,A.bk)
D.fyS=new C.mw("Apple Watch Ultra",D.Bx,F.Cx,A.bw)
D.mP=new B.bl(D.eEo,[D.fyU,D.fyK,D.fyB,D.fyF,D.fyC,D.aVQ,D.fyP,D.fyQ,D.fyI,D.fyE,D.fyM,D.fyH,D.fyD,D.fyW,D.fyJ,D.fyO,D.fyX,D.fyN,D.fyT,D.fyL,D.fyG,D.fyR,D.fyV,D.fyS],B.as("bl<o,mw>"))
D.d8L=w([A.z],x.M)
D.d9g=w([A.aw,A.aD],x.M)
D.dkp=w([A.aw,A.z,A.aD],x.M)
D.dma=w([A.aw,A.lW,A.z,A.lu,A.aD],x.M)
D.dCa=w([A.aw,A.lW,A.a5,A.a9,A.lu,A.aD],x.M)
D.dR8=new B.d2([1,D.d8L,2,D.d9g,3,D.dkp,4,A.aGM,5,D.dma,6,D.dCa],B.as("d2<F,ah<dl>>"))
D.eFc={Calm:0,Box:1,Sleep:2}
D.cQ2=w([4,2,6,0],x.n)
D.cQ9=w([4,4,4,4],x.n)
D.cQa=w([4,7,8,0],x.n)
D.V_=new B.bl(D.eFc,[D.cQ2,D.cQ9,D.cQa],B.as("bl<o,ah<G>>"))
D.eCJ={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.yK=new C.a2P(0,"source")
D.dly=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.i_O=new C.qS("Clock",A.mI,D.yK,A.bw,D.dly)
D.i_K=new C.qS("Button",A.E9,D.yK,A.aQ,A.M)
D.dHk=w(["random","quick","slow"],x.s)
D.i_V=new C.qS("Dice",A.oe,D.yK,A.c7,D.dHk)
D.bWO=new B.a_(63484,"MaterialIcons",!1)
D.Gj=new C.a2P(1,"logic")
D.dMU=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.i_R=new C.qS("Delay",D.bWO,D.Gj,A.cw,D.dMU)
D.dy1=w(["fast","mid","slow"],x.s)
D.i_W=new C.qS("Echo",A.atl,D.Gj,A.bk,D.dy1)
D.i_T=new C.qS("Every 2nd",W.E6,D.Gj,A.fM,A.M)
D.bWv=new B.a_(63309,"MaterialIcons",!1)
D.i_Q=new C.qS("Every 3rd",D.bWv,D.Gj,A.aH,A.M)
D.cha=w(["50%","25%","75%"],x.s)
D.i_Y=new C.qS("Chance",A8.atW,D.Gj,A.cY,D.cha)
D.t5=new C.a2P(2,"out")
D.i_M=new C.qS("Light",A5.lg,D.t5,A.eL,A.M)
D.i_N=new C.qS("Burst",A.kp,D.t5,A.c7,A.M)
D.i_L=new C.qS("Ripple",A.Au,D.t5,A.be,A.M)
D.i_U=new C.qS("Ball",A.aty,D.t5,A.cY,A.M)
D.i_S=new C.qS("Comet",A.ol,D.t5,A.bk,A.M)
D.bYk=new B.a_(983669,"MaterialIcons",!1)
D.i_X=new C.qS("Shake",D.bYk,D.t5,A.c3,A.M)
D.i_Z=new C.qS("Pop",A.DR,D.t5,A.bf,A.M)
D.i_P=new C.qS("Wash",A.R6,D.t5,A.pR,A.M)
D.nw=new B.bl(D.eCJ,[D.i_O,D.i_K,D.i_V,D.i_R,D.i_W,D.i_T,D.i_Q,D.i_Y,D.i_M,D.i_N,D.i_L,D.i_U,D.i_S,D.i_X,D.i_Z,D.i_P],B.as("bl<o,qS>"))
D.eDa={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bE7=new C.h9(20,4,13,!1)
D.bEy=new C.h9(14,5,13.5,!1)
D.bEp=new C.h9(9,2.4,10,!1)
D.bED=new C.h9(7,5,12.5,!1)
D.bEs=new C.h9(8,3.5,12,!1)
D.bE3=new C.h9(15,2,6,!1)
D.bEB=new C.h9(45,6,13.5,!0)
D.bEj=new C.h9(10,8,13.5,!1)
D.bEb=new C.h9(25,3,12,!0)
D.bEh=new C.h9(35,4,12,!0)
D.bEi=new C.h9(40,4.5,9.5,!0)
D.bEk=new C.h9(55,3,9,!0)
D.bE4=new C.h9(18,3,9,!1)
D.bEA=new C.h9(22,4,13.5,!1)
D.bEt=new C.h9(16,5,13.5,!1)
D.bEf=new C.h9(30,4,9,!0)
D.bEM=new C.h9(5,3.5,13,!1)
D.bEn=new C.h9(25,3,13.5,!0)
D.bEw=new C.h9(14,2.5,9,!1)
D.bEm=new C.h9(6,6,13,!1)
D.bEE=new C.h9(30,1.2,5,!0)
D.bEL=new C.h9(35,3,4.5,!0)
D.bEH=new C.h9(20,4.5,7.5,!0)
D.bEl=new C.h9(55,5.5,13.5,!0)
D.bE2=new C.h9(45,5.5,13.5,!0)
D.bEx=new C.h9(40,5.5,13.5,!0)
D.bEK=new C.h9(60,6,13.5,!0)
D.anE=new C.h9(28,4,7,!0)
D.HN=new C.h9(25,4,7,!0)
D.bEe=new C.h9(30,4,7,!0)
D.bE9=new C.h9(22,4,7,!0)
D.bEa=new C.h9(24,4,7,!0)
D.bEo=new C.h9(60,3,5.5,!0)
D.bE5=new C.h9(18,9,14,!0)
D.bEc=new C.h9(25,9,14,!0)
D.anF=new C.h9(30,8,14,!0)
D.bE8=new C.h9(20,8,14,!0)
D.bEg=new C.h9(30,9,14,!0)
D.bEF=new C.h9(22,5,9.5,!0)
D.bE6=new C.h9(30,2.5,10.5,!0)
D.bEu=new C.h9(50,5.5,13.5,!0)
D.bEJ=new C.h9(12,2,9.5,!1)
D.bEr=new C.h9(16,1.3,9.5,!0)
D.bEC=new C.h9(40,2.5,7,!0)
D.bEI=new C.h9(60,1.2,4.8,!0)
D.bEG=new C.h9(18,5,13.5,!0)
D.bEz=new C.h9(8,2,9.5,!1)
D.bEq=new C.h9(12,2.5,8,!1)
D.bEd=new C.h9(20,3.5,13.5,!0)
D.bEv=new C.h9(3.5,3,13,!1)
D.B4=new B.bl(D.eDa,[D.bE7,D.bEy,D.bEp,D.bED,D.bEs,D.bE3,D.bEB,D.bEj,D.bEb,D.bEh,D.bEi,D.bEk,D.bE4,D.bEA,D.bEt,D.bEf,D.bEM,D.bEn,D.bEw,D.bEm,D.bEE,D.bEL,D.bEH,D.bEl,D.bE2,D.bEx,D.bEK,D.anE,D.HN,D.bEe,D.HN,D.bE9,D.HN,D.bEa,D.anE,D.HN,D.bEo,D.bE5,D.bEc,D.anF,D.bE8,D.bEg,D.bEF,D.bE6,D.bEu,D.bEJ,D.bEr,D.bEC,D.bEI,D.HN,D.anF,D.bEG,D.bEz,D.bEq,D.bEd,D.bEv],B.as("bl<o,h9>"))
D.eCG={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.fkk=new B.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eYH=new B.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eYB=new B.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.faU=new B.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.fbT=new B.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.faQ=new B.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eWB=new B.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.f8x=new B.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.fkt=new B.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.fcf=new B.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.f1g=new B.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eWf=new B.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.f0f=new B.y("Movement","They pull your legs together and help you balance.")
D.f2h=new B.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eYQ=new B.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.fhr=new B.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.fiO=new B.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.f8h=new B.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.fiw=new B.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.f6I=new B.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.fcn=new B.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eWm=new B.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.f2F=new B.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.fc1=new B.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.f75=new B.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.fiF=new B.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.fag=new B.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eWz=new B.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.fd0=new B.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.fh1=new B.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.feY=new B.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eUv=new B.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.f9Y=new B.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.fa2=new B.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.f3t=new B.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eZ7=new B.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.f23=new B.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.f8L=new B.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.ffR=new B.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.fkp=new B.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.fck=new B.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.eUa=new B.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.f8Y=new B.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.eV5=new B.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.fg6=new B.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.fhn=new B.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.f9q=new B.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.fgn=new B.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eWo=new B.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.fi9=new B.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.f_A=new B.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.fft=new B.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.f37=new B.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.f7_=new B.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.fcG=new B.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.fik=new B.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.fib=new B.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.fif=new B.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.f7A=new B.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.fdF=new B.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.feV=new B.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.fhR=new B.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.f9p=new B.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.f5d=new B.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.f3W=new B.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.f9S=new B.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.fcz=new B.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.f5N=new B.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.f6v=new B.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.f_Z=new B.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.fhj=new B.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.f0Q=new B.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.eV2=new B.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.f3s=new B.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.eUY=new B.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eZD=new B.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.f3x=new B.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.f0Z=new B.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.fcX=new B.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.f2k=new B.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.fk4=new B.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.f45=new B.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.f7r=new B.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.fap=new B.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.f18=new B.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.f0S=new B.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dSj=new B.bl(D.eCG,[D.fkk,D.eYH,D.eYB,D.faU,D.fbT,D.faQ,D.eWB,D.f8x,D.fkt,D.fcf,D.f1g,D.eWf,D.f0f,D.f2h,D.eYQ,D.fhr,D.fiO,D.f8h,D.fiw,D.f6I,D.fcn,D.eWm,D.f2F,D.fc1,D.f75,D.fiF,D.fag,D.eWz,D.fd0,D.fh1,D.feY,D.eUv,D.f9Y,D.fa2,D.f3t,D.eZ7,D.f23,D.f8L,D.ffR,D.fkp,D.fck,D.eUa,D.f8Y,D.eV5,D.fg6,D.fhn,D.f9q,D.fgn,D.eWo,D.fi9,D.f_A,D.fft,D.f37,D.f7_,D.fcG,D.fik,D.fib,D.fif,D.f7A,D.fdF,D.feV,D.fhR,D.f9p,D.f5d,D.f3W,D.f9S,D.fcz,D.f5N,D.f6v,D.f_Z,D.fhj,D.f0Q,D.eV2,D.f3s,D.eUY,D.eZD,D.f3x,D.f0Z,D.fcX,D.f2k,D.fk4,D.f45,D.f7r,D.fap,D.f18,D.f0S],B.as("bl<o,+(o,o)>"))
D.e0c=new C.Wy(null)
D.e0p=new C.Wz(null)
D.e2t=new C.WF(null)
D.e7s=new C.Xg(null)
D.e7w=new C.Xh(null)
D.e84=new C.Xp(null)
D.ec_=new C.Y1(null)
D.ecX=new C.Y2(null)
D.eh9=new C.Y8(null)
D.ex2=new C.Y9(null)
D.ex5=new C.Ye(null)
D.ezf=new C.Yy(null)
D.ezg=new C.aaV(null)
D.eBj=new C.YH(null)
D.eFr=new B.m(0,118)
D.eFs=new B.m(0,13)
D.eFt=new B.m(0,17)
D.eFw=new B.m(0,330)
D.eFD=new B.m(0,-17)
D.eFE=new B.m(0,-18)
D.eFF=new B.m(0,-19)
D.eFH=new B.m(0,-28)
D.eFJ=new B.m(0,-31)
D.eFK=new B.m(0,-32)
D.eFQ=new B.m(-9.5,-11)
D.eFT=new B.m(10,20)
D.eFW=new B.m(10,-13)
D.eFY=new B.m(10,-22)
D.eFZ=new B.m(10,-4)
D.eG2=new B.m(11,0)
D.aaW=new B.m(11,8)
D.eG8=new B.m(12,2)
D.eG9=new B.m(14,0)
D.eGa=new B.m(14,12)
D.aPf=new B.m(14,8)
D.eGb=new B.m(14,-17)
D.aPh=new B.m(14,-3)
D.aPi=new B.m(14,-4)
D.eGe=new B.m(15,0)
D.eGf=new B.m(15,-12)
D.eGi=new B.m(16,-8)
D.eGj=new B.m(18,14)
D.aPo=new B.m(20,0)
D.eGr=new B.m(20,15)
D.eGs=new B.m(20,-3)
D.eGt=new B.m(21,8)
D.eGu=new B.m(21,-36)
D.eGy=new B.m(22,10)
D.aPq=new B.m(22,8)
D.eGz=new B.m(22,-25)
D.eGA=new B.m(24,0)
D.eGB=new B.m(24,2)
D.eGE=new B.m(24,-18)
D.eGF=new B.m(24,-22)
D.eGJ=new B.m(25,8)
D.eGK=new B.m(26,0)
D.eGO=new B.m(28,-30)
D.eGV=new B.m(30,18)
D.eGW=new B.m(30,2)
D.eGZ=new B.m(31,19)
D.eH0=new B.m(32,0)
D.aPu=new B.m(34,0)
D.aPv=new B.m(34,-32)
D.KQ=new B.m(36,0)
D.eHd=new B.m(3,-1)
D.eHg=new B.m(40,3)
D.eHu=new B.m(4,11)
D.eHx=new B.m(4,-2)
D.eHB=new B.m(5,0)
D.eHC=new B.m(5,17)
D.eHD=new B.m(5,6)
D.eHI=new B.m(6,11)
D.eHK=new B.m(7,-19)
D.eHQ=new B.m(8,7)
D.eHR=new B.m(8,-10)
D.eHS=new B.m(8,-14)
D.aPA=new B.m(9,0)
D.eI2=new B.m(-20.5,-17.6)
D.eI5=new B.m(-2.6,-1)
D.eIf=new B.m(2.6,1)
D.eIo=new B.m(-9,12.2)
D.eJ1=new B.m(-10,12)
D.aPJ=new B.m(-10,4)
D.eJ5=new B.m(-11,0)
D.eJ7=new B.m(-11,-34)
D.eJb=new B.m(-12,-5)
D.eJc=new B.m(-14,0)
D.eJd=new B.m(-14,13)
D.eJe=new B.m(-14,-19)
D.eJg=new B.m(-14,-23)
D.eJh=new B.m(-15,6)
D.eJk=new B.m(-16,14)
D.eJm=new B.m(-16,-8)
D.eJn=new B.m(-17,10)
D.eJo=new B.m(-17,-18)
D.eJp=new B.m(-17,-8)
D.eJr=new B.m(-18,20)
D.eJs=new B.m(-18,-9)
D.aPM=new B.m(-20,0)
D.eJu=new B.m(-20,16)
D.eJv=new B.m(-20,-9)
D.VV=new B.m(-22,8)
D.eJw=new B.m(-22,-10)
D.eJx=new B.m(-24,10)
D.eJy=new B.m(-24,11)
D.eJz=new B.m(-24,14)
D.eJA=new B.m(-24,-22)
D.eJC=new B.m(-25,-11)
D.eJD=new B.m(-26,0)
D.eJE=new B.m(-26,-18)
D.eJF=new B.m(-27,-24)
D.eJG=new B.m(-28,-36)
D.eJH=new B.m(-2,9)
D.eJI=new B.m(-2,-10)
D.eJJ=new B.m(-2,-20)
D.eJM=new B.m(-2,-9)
D.eJO=new B.m(-32,0)
D.aPO=new B.m(-34,0)
D.eJT=new B.m(-40,3)
D.eJV=new B.m(-4,11)
D.eJW=new B.m(-4,-17)
D.eJX=new B.m(-4,-2)
D.eK0=new B.m(-5,0)
D.eK1=new B.m(-5,20)
D.eK2=new B.m(-5,6)
D.eK3=new B.m(-6,6)
D.eK4=new B.m(-6,-42)
D.aPQ=new B.m(-7,-19)
D.eK6=new B.m(-7,-24)
D.eK7=new B.m(-8,-1)
D.eKa=new B.m(-8,-9)
D.ab5=new B.m(-9,0)
D.eKb=new B.m(-9,1)
D.eKd=new B.m(-9,-23)
D.h6c=new B.D("Thinking\u2026",null,N.hI,null,null,null,null,null,null,null,null,null)
D.eLf=new B.C(A.jE,D.h6c,null)
D.hnn=new B.D("Start from a ready-made board",null,A.fK,null,null,null,null,null,null,null,null,null)
D.eLu=new B.C(A.vp,D.hnn,null)
D.bMf=new B.Q(4,0,4,14)
D.h1c=new B.H(!0,A.aE,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h7d=new B.D("Games and little helpers for a spare minute.",null,D.h1c,null,null,null,null,null,null,null,null,null)
D.eLI=new B.C(D.bMf,D.h7d,null)
D.dyL=w([A.hY,A.bl],x.O)
D.eSX=new B.bV(A.z,0.5,A.w,null,0,D.dyL,null,null)
D.eSY=new B.bV(A.z,0.5,A.w,null,0,D.aGr,null,null)
D.doh=w([A.c,A.bQ],x.O)
D.eT_=new B.bV(A.z,0.5,A.w,null,0,D.doh,null,null)
D.dIx=w([A.bP,A.cz],x.O)
D.aUI=new B.bV(A.z,0.5,A.w,null,0,D.dIx,null,null)
D.d_n=w([A.c,A.bP],x.O)
D.eT4=new B.bV(A.n1,0.5,A.w,null,0,D.d_n,null,null)
D.bBo=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.dGk=w([A.fA,D.bBo],x.O)
D.eT9=new B.bV(A.n1,0.5,A.w,null,0,D.dGk,null,null)
D.cTh=w([A.d1,A.cx],x.O)
D.eTa=new B.bV(A.z,0.5,A.w,null,0,D.cTh,null,null)
D.d7v=w([A.hb,A.aQ,A.de],x.O)
D.eTd=new B.bV(A.n1,0.5,A.w,null,0,D.d7v,null,null)
D.dzw=w([A.cz,M.nk],x.O)
D.eTe=new B.bV(A.n1,0.5,A.w,null,0,D.dzw,null,null)
D.eTj=new B.bV(A.z,0.5,A.w,null,0,D.aCB,null,null)
D.dJv=w([A.cz,A.iq],x.O)
D.eTr=new B.bV(A.z,0.5,A.w,null,0,D.dJv,null,null)
D.dhB=w([A.iN,A.bl],x.O)
D.eTu=new B.bV(A.n1,0.5,A.w,null,0,D.dhB,null,null)
D.aUN=new B.aQ(9,9)
D.eTA=new B.aQ(1.4,1.4)
D.eTC=new B.aQ(2.5,2.5)
D.fvl=new B.a5(10,-8,18,-2)
D.fvm=new B.a5(14,-14,20,14)
D.fvo=new B.a5(20,-2,30,2)
D.fvt=new B.a5(4,-13,30,-3)
D.fvz=new B.a5(8,-7,12,7)
D.fvN=new B.a5(-12,12,12,19)
D.fvO=new B.a5(-12,14,12,22)
D.fvP=new B.a5(-12,-22,12,8)
D.fvQ=new B.a5(-12,-25,12,19)
D.fvR=new B.a5(-12,-26,12,-6)
D.fvS=new B.a5(-12,-4,12,14)
D.fvU=new B.a5(-14,20,14,24)
D.fvV=new B.a5(-14,6,14,10)
D.fvW=new B.a5(-14,-17,14,15)
D.fvX=new B.a5(-14,-26,14,18)
D.fvY=new B.a5(-14,-26,14,-14)
D.fvZ=new B.a5(-14,-4,14,20)
D.fw0=new B.a5(-15,-29,15,25)
D.fw1=new B.a5(-16,-16,16,16)
D.fw4=new B.a5(-16,-22,-9,18)
D.fw5=new B.a5(-16,-24,16,-10)
D.fw7=new B.a5(-16,-2,16,20)
D.fw9=new B.a5(-18,20,18,24)
D.fwa=new B.a5(-18,-18,18,20)
D.fwb=new B.a5(-20,12,20,22)
D.fwc=new B.a5(-20,-28,20,26)
D.fwd=new B.a5(-22,15,22,19)
D.aVw=new B.a5(-22,-26,22,24)
D.fwf=new B.a5(-24,-12,10,22)
D.fwg=new B.a5(-24,-14,22,8)
D.fwh=new B.a5(-24,-6,24,20)
D.aVx=new B.a5(-24,-9,24,9)
D.fwi=new B.a5(-25,14,25,19)
D.fwj=new B.a5(-26,-14,14,8)
D.fwk=new B.a5(-26,-4,26,20)
D.fwl=new B.a5(-26,-6,4,6)
D.aVy=new B.a5(-28,-13,28,13)
D.fwm=new B.a5(-28,-16,28,16)
D.fwn=new B.a5(-28,-16,28,8)
D.fwo=new B.a5(-28,-22,28,22)
D.fwp=new B.a5(-29,-11,29,11)
D.fwq=new B.a5(-30,-12,30,14)
D.fwr=new B.a5(-30,-14,0,14)
D.fws=new B.a5(-30,-18,30,20)
D.fwt=new B.a5(-30,-28,30,14)
D.fwu=new B.a5(-30,-2,30,18)
D.fwv=new B.a5(-30,-4,30,18)
D.fww=new B.a5(-32,-17,32,17)
D.fwx=new B.a5(-32,-28,32,18)
D.fwy=new B.a5(-33,-21,33,17)
D.fwz=new B.a5(-34,0,34,10)
D.fwA=new B.a5(-34,14,34,26)
D.ac_=new B.a5(-34,-18,34,18)
D.fwB=new B.a5(-36,-24,36,20)
D.fwC=new B.a5(-38,-22,38,22)
D.fwE=new B.a5(-3,12,3,22)
D.fwF=new B.a5(-3,5,3,15)
D.fwJ=new B.a5(-46,-34,46,28)
D.fwL=new B.a5(-48,-3,48,3)
D.fwO=new B.a5(-6,18,24,24)
D.fwP=new B.a5(-6,5,6,12)
D.fwQ=new B.a5(-6,-22,6,-15)
D.fwU=new B.a5(-9,-16,9,22)
D.fwV=new B.a5(-4.5,-24,4.5,-21.2)
D.fwX=new B.a5(14,-9,17.5,9)
D.eEy={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aWF=new B.df(D.eEy,5,x.Q)
D.eE_={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.fAD=new B.df(D.eE_,10,x.Q)
D.fCZ=new B.aw(24,44)
D.fDm=new B.aw(54,38)
D.fDs=new B.aw(66,38)
D.biQ=new B.fp(2,null,null,null,null,A.bk,null,null,null,null)
D.fEx=new B.a4(16,16,D.biQ,null)
D.aXK=new B.hG(3,12,12,0.82,null)
D.fRx=new B.H(!0,A.wU,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLQ=new B.eG("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cW,null,null,null,null,null,null,D.fRx)
D.fWL=new B.H(!0,A.l5,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLW=new B.eG("AI",null,null,A.cW,null,null,null,null,null,null,D.fWL)
D.fMd=new B.H(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fML=new B.H(!0,A.br,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fN8=new B.H(!0,A.cw,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fO1=new B.H(!0,A.c,null,null,null,null,13.5,A.C,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOy=new B.H(!0,A.aR,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBo=new B.d4(A.i1,A.dQ,6)
D.drF=w([D.fBo],B.as("N<d4>"))
D.fPy=new B.H(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.drF,null,null,null)
D.fPD=new B.H(!0,A.el,null,null,null,null,12.5,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPI=new B.H(!0,A.bX,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQl=new B.H(!0,A.bX,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQt=new B.H(!0,A.aE,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRt=new B.H(!0,A.bX,null,null,null,null,9.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRB=new B.H(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fS7=new B.H(!0,A.aE,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSD=new B.H(!0,A.aQ,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSG=new B.H(!0,A.c,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.aGP,null,null,null)
D.fSN=new B.H(!0,A.c,null,null,null,null,12.5,A.a7,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTx=new B.H(!0,A.bF,null,null,null,null,10.5,A.u,null,0.5,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUG=new B.H(!0,A.vc,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVk=new B.H(!0,A.bO,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVt=new B.H(!0,A.aE,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWg=new B.H(!0,A.mu,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWr=new B.H(!0,A.cz,null,null,null,null,9.5,null,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.b_0=new B.H(!0,A.c,null,null,null,null,9.5,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXC=new B.H(!0,A.j1,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXW=new B.H(!0,A.bX,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYt=new B.H(!0,A.bf,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_1=new B.H(!0,A.v,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_y=new B.H(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_Q=new B.H(!0,A.aQ,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0d=new B.H(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0g=new B.H(!0,A.aQ,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1t=new B.H(!0,A.vc,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1Q=new B.H(!0,A.bf,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPL=new B.H(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2e=new B.D("\u26a0\ufe0f ",null,D.fPL,null,null,null,null,null,null,null,null,null)
D.h2r=new B.D("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,Z.yo,null,null,null,null,null,null,null,null,null)
D.h46=new B.D("Pick one, then change it and see what happens.",null,Z.yo,null,null,null,null,null,null,null,null,null)
D.fQZ=new B.H(!0,A.ab,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h58=new B.D("What do you want to invent? Type it below, or tap an idea.",null,D.fQZ,null,null,null,null,null,null,null,null,null)
D.fVf=new B.H(!0,A.c3,null,null,null,null,12.5,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h5G=new B.D("Burnt out! Press Repair.",null,D.fVf,null,null,null,null,null,null,null,null,null)
D.h6O=new B.D("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.h7r=new B.D("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.h6,null,null,null,null,null,null,null,null,null)
D.h85=new B.D("Make it yours",null,A.jr,null,null,null,null,null,null,null,null,null)
D.hbl=new B.D("5G",null,A4.aZk,null,null,null,null,null,null,null,null,null)
D.hcm=new B.D("Pick how big the screen is on the board",null,N.hI,null,null,null,null,null,null,null,null,null)
D.fYd=new B.H(!0,A.bX,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hcy=new B.D("WHAT HAPPENS",null,D.fYd,null,null,null,null,null,null,null,null,null)
D.hej=new B.D("Check",null,null,null,null,null,null,null,null,null,null,null)
D.heZ=new B.D("Change the words and pictures on the three slabs.",null,Z.yo,null,null,null,null,null,null,null,null,null)
D.hfb=new B.D("All the parts and wires will be removed.",null,A.hH,null,null,null,null,null,null,null,null,null)
D.hfw=new B.D("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.hg6=new B.D("Tap the crank on the board again and again to spin it faster.",null,N.hI,null,null,null,null,null,null,null,null,null)
D.hhl=new B.D("\ud83c\udfaf Challenges",null,A.dw,null,null,null,null,null,null,null,null,null)
D.hhS=new B.D("Remove this part",null,A2.aYV,null,null,null,null,null,null,null,null,null)
D.hic=new B.D("Clear the board?",null,A.dr,null,null,null,null,null,null,null,null,null)
D.fXD=new B.H(!0,A.bw,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hiu=new B.D("How the Lab works",null,D.fXD,null,null,null,null,null,null,null,null,null)
D.fOe=new B.H(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hiP=new B.D("Electronics Lab",null,D.fOe,null,null,null,null,A.a2,null,1,null,null)
D.hiT=new B.D("?",null,R.b_x,null,null,null,null,null,null,null,null,null)
D.hkg=new B.D("Ready-made circuits",null,A.dw,null,null,null,null,null,null,null,null,null)
D.hkW=new B.D("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,N.hI,null,null,null,null,null,null,null,null,null)
D.h_V=new B.H(!0,A.aQ,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hox=new B.D("\u26a0 There is no air here, so a parachute will not work.",null,D.h_V,null,null,null,null,null,null,null,null,null)
D.hpI=new B.D("Download the scene (GIF)",null,A.cL,null,null,null,null,null,null,null,null,null)
D.hpL=new B.D("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,A2.aYQ,null,null,null,null,null,null,null,null,null)
D.hqh=new B.D("NGMY",null,A.wt,null,null,null,null,null,null,null,null,null)
D.hqv=new B.D("You build a machine. A little light runs along the wires, and every part it touches does something.",null,Ah.M6,null,null,null,null,null,null,null,null,null)
D.hqU=new B.D("Tap it to change its setting. Drag from the right dot to connect.",null,A.mi,null,null,null,null,null,null,null,null,null)
D.hs0=new B.D("TOOLBOX",null,Ae.adn,null,null,null,null,null,null,null,null,null)
D.hQu=new B.b9("electronics-part-card",x.W)
D.hQw=new B.b9("device-learn-more",x.W)
D.hQC=new B.b9("device-remote",x.W)
D.hQH=new B.b9("device-picture",x.W)
D.hRr=new B.b9("electronics-part-about",x.W)
D.hRy=new B.b9("body-loading",x.W)
D.hRE=new B.b9("device-fullscreen",x.W)
D.hS0=new B.b9("core-protocol-back",x.W)
D.hS5=new B.b9("core-protocol-title-frame",x.W)})();(function staticFields(){$.hKB=null
$.hKx=null
$.hKy=null
$.hRH=0
$.ikP=B.S(x.N,B.as("iU"))
$.ilo=B.S(x.N,B.as("iU"))
$.aRV=B.S(x.N,B.as("iU"))
$.hNo=A.az})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"iUC","bKA",()=>{var u="led"
return B.a([C.aC0("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fEG(),u),C.aC0("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fEH(),u),C.aC0("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fEI(),u),C.aC0("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fEP(),u),C.aC0("Not both","Make the light go OFF only when both switches are ON.",2,new C.fEQ(),u),C.aC0("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.fER(),"buzzer")],B.as("N<bg8>"))})
w($,"iV3","bKB",()=>B.a([C.S9("UNIVERSE","Earth, space and gravity",A.Rv,A.aH,new C.fF6()),C.S9("ELECTRONICS LAB","Batteries, wires, real circuits",An.vC,A.aH,new C.fF7()),C.S9("DISCOVERY LAB","Body Explorer: a real 3D human",D.bVI,A.bf,new C.fF8()),C.S9("TOOLBOX","Converter, clock, games",H.asw,A.cY,new C.fF9()),C.S9("REACTION LAB","Wire parts together",A.Ed,A.bw,new C.fFa()),C.S9("SPARK PAINTER","Paint with light",A.Ix,A.c7,new C.fFb()),C.S9("ROCKET LANDER","Land softly on the pad",A.ol,A.aH,new C.fFc()),C.S9("TITLE ANIMATOR","Make a moving title",A.xG,A.bu,new C.fFd()),C.S9("CIRCUIT LAB","Connect logic, learn it",A.a57,A.cw,new C.fFe())],B.as("N<byH>")))
w($,"iWS","r2",()=>{var u,t,s=B.S(x.N,x.C)
for(u=0;u<76;++u){t=D.Uh[u]
s.n(0,t.a,t)}return s})
v($,"ipC","i_R",()=>B.aqD(0))
w($,"iUk","i_S",()=>{var u=B.ctC()
u.seE(0,A.c.j(0.06))
u.c=2.2
u.d=A.bH
return u})
w($,"iUD","akM",()=>B.a([C.GZ("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fES()),C.GZ("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fET()),C.GZ("Spin the motor","A battery and a motor in a loop will make it spin.",new C.fEU()),C.GZ("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.fEV()),C.GZ("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fEW()),C.GZ("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fEJ()),C.GZ("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fEK()),C.GZ("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fEL()),C.GZ("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fEM()),C.GZ("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fEN()),C.GZ("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fEO())],B.as("N<bg9>")))
w($,"iV5","i0l",()=>B.a([C.a3m("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aQ,A.ca,new C.fFm()),C.a3m("Focus Timer","Work, then rest","\u23f1\ufe0f",A.c3,A.bC,new C.fFn()),C.a3m("Breathe","Calm down in a minute","\ud83e\udee7",A.fM,A.cJ,new C.fFo()),C.a3m("Draw Pad","Sketch and share","\ud83c\udfa8",A.bE,A.b2,new C.fFp()),C.a3m("Memory Match","Find the pairs","\ud83c\udccf",A.aH,A.cj,new C.fFq()),C.a3m("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bu,A.bh,new C.fFr()),C.a3m("Tip & Split","Share the bill","\ud83e\uddfe",A.bf,A.b8,new C.fFs()),C.a3m("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bk,A.aB,new C.fFt())],B.as("N<bA0>")))})()};
(a=>{a["8qDUY3Jp5HaA0Ykel5lJOMkABug="]=a.current})($__dart_deferred_initializers__);