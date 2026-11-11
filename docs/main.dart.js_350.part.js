((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,A3,Z,A4,A_,R,A5,A6,A7,A8,A9,A0,N,Aa,Ab,Ac,Ad,T,Ae,P,Af,U,V,W,E,K,G,I,A1,O,Ag,Ah,S,Ai,Q,Aj,L,F,M,C={
bBt(d){return C.i2z(d)},
i2z(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bBt=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.re(B.nk(""),d,A.hU,null,null).dc(0,A.a_d),$async$bBt)
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
return B.i($async$bBt,v)},
ieF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.Ry[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cV(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ag(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.fF(D.Ry,new C.fHu())
if(w==null)w=A.d.gI(D.Ry)
s=B.U(x.N,x.B)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.K)(r),++u){l=r[u].a
k=l[0]
l=$.qA().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.K)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gI(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.akE(w.a,w.b,m,w,s,!1)},
i88(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.N(D.RZ,new C.fwE(),x.bd).aI(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
imB(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cp(b2,"{")
v=A.a.oU(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.X.aN(0,A.a.au(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aV(a5)
r=0
for(a6=x.j,a7=J.aX(a6.a(J.r(u,"parts"))),a8=x.i;a7.C();){q=a7.gS(a7)
p=B.w(J.r(q,"kind"))
o=B.w(J.r(q,"id"))
if(!$.qA().aj(0,p)||J.f2(s,o)||J.ad(t)>=8)continue
J.cc(s,o)
n=B.U(a5,a8)
for(a9=0;a9<4;++a9){m=D.duX[a9]
l=J.r(q,m)
if(typeof l=="number")J.aJ(n,m,l)}k=A.k.E(typeof J.r(q,"x")=="number"?B.e3(J.r(q,"x")):0.2+A.k.F(r,3)*0.3,0.16,0.84)
j=A.k.E(typeof J.r(q,"y")=="number"?B.e3(J.r(q,"y")):0.25+A.k.ao(r,3)*0.3,0.1,0.9)
J.cc(t,new B.dY([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aX(a6.a(J.r(u,"wires")));a5.C();){h=a5.gS(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.w(J.r(g,0))
e=B.w(J.r(g,2))
d=A.o.E(A.k.N(B.e3(J.r(g,1))),0,1)
a0=A.o.E(A.k.N(B.e3(J.r(g,3))),0,1)
if(J.f2(s,f)&&J.f2(s,e)&&!J.A(f,e))J.cc(i,new B.cw([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.L.a(J.r(u,"steps"))
a0=J.aX(a0==null?A.cv:a0)
while(a0.C()){a2=a0.gS(a0)
J.cc(a1,B.w(a2))}a3=a1
a0=J.r(u,"title")
a0=B.w(a0==null?"My invention":a0)
a1=J.r(u,"explain")
a4=new C.mS(a0,B.w(a1==null?"":a1),t,i,A.Y)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.r(u,"honest")
a5=B.w(a5==null?"":a5)
return new C.akE(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
ide(d){var w,v,u=C.hhV()
d.B(u)
for(w=0;w<60;++w)u.vt(0,0.03333333333333333)
v=u.a
return A.d.b_(v,new C.fE2(u))&&!A.d.cJ(v,new C.fE3())},
idd(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.U(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.K)(l),++u){t=l[u];++v
k.n(0,t.a,$.qA().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.K)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.w(t.e)+" V")
if(p==="resistor")q.push(""+A.k.V(t.r)+" ohms")
if(A.d.q(D.dta,p))q.push("level "+A.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aI(q,", ")+")"
s.push(B.w(p)+n+": "+o+", current "+A.k.ac(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.K)(w),++u){m=w[u]
l.push(B.w(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.w(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aI(s,"\n")+"\nWires: "+A.d.aI(l,"; ")},
i11(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.K)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aI(v,"\n")+"\n\n"}v=A.d.aI(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
ieE(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qA().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.RZ[u]
if(A.d.b_(w,new C.fHr(s)))if(!B.cV(r,s.b.toLowerCase(),0))v=B.cV(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ag("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.Y(w,new C.fHs(e),B.T(w).k("Y<1>")).gan(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ag("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.ac(A.d.cG(w,0,new C.fHt())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ag("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gI(w)
w=$.qA().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
akE:function akE(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fHu:function fHu(){},
fwE:function fwE(){},
fE2:function fE2(d){this.a=d},
fE3:function fE3(){},
fHr:function fHr(d){this.a=d},
fHs:function fHs(d){this.a=d},
fHt:function fHt(){},
W8:function W8(d,e){this.c=d
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
egU:function egU(d){this.a=d},
egV:function egV(d,e,f){this.a=d
this.b=e
this.c=f},
egW:function egW(d){this.a=d},
eh6:function eh6(d){this.a=d},
eh7:function eh7(d,e){this.a=d
this.b=e},
eh2:function eh2(d){this.a=d},
eh0:function eh0(d,e){this.a=d
this.b=e},
eh1:function eh1(d,e,f){this.a=d
this.b=e
this.c=f},
eh3:function eh3(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
egZ:function egZ(d){this.a=d},
eh_:function eh_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eh4:function eh4(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
egY:function egY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eh5:function eh5(d,e){this.a=d
this.b=e},
egX:function egX(d,e){this.a=d
this.b=e},
eha:function eha(d){this.a=d},
eh9:function eh9(d){this.a=d},
ehb:function ehb(d){this.a=d},
eh8:function eh8(d){this.a=d},
ehc:function ehc(d,e){this.a=d
this.b=e},
ehd:function ehd(d,e){this.a=d
this.b=e},
ehe:function ehe(d,e){this.a=d
this.b=e},
ehf:function ehf(d,e){this.a=d
this.b=e},
bBO(d,e,f){var w=null
return B.x(B.a([B.d(d,w,w,w,w,w,w,D.fnn,w,w,w),B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p)},
hvw(d,e,f,g){var w=null,v=B.n(24),u=B.L(f.j(0.6),A.r,1)
return B.at(B.p(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.am,B.d(e,w,w,w,w,w,w,A.xb,A.K,w,w),A.aB,B.bY(A.fI,g,A.br,w,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new B.o(D.bfC,w,u,v,w,w,A.n),w,w,w,w,A.aa,w,w,w),w,w,w)},
GB:function GB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vf:function vf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Wv:function Wv(d){this.a=d},
aFD:function aFD(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.h6$=h
_.m0$=i
_.f7$=j
_.h7$=k
_.bw$=l
_.a8$=m
_.c=_.a=null},
ewc:function ewc(){},
eww:function eww(d){this.a=d},
ewv:function ewv(d,e){this.a=d
this.b=e},
ewx:function ewx(){},
ewy:function ewy(){},
ewe:function ewe(d,e,f){this.a=d
this.b=e
this.c=f},
ewd:function ewd(d,e){this.a=d
this.b=e},
ew3:function ew3(d){this.a=d},
ew4:function ew4(d){this.a=d},
ew5:function ew5(d){this.a=d},
ew6:function ew6(d){this.a=d},
ew7:function ew7(d){this.a=d},
ew8:function ew8(d){this.a=d},
ew9:function ew9(d){this.a=d},
ewa:function ewa(d){this.a=d},
ewb:function ewb(d){this.a=d},
ew1:function ew1(d){this.a=d},
ew2:function ew2(d){this.a=d},
ew0:function ew0(d){this.a=d},
ewp:function ewp(d,e){this.a=d
this.b=e},
ewk:function ewk(d){this.a=d},
ewl:function ewl(d){this.a=d},
ewh:function ewh(d){this.a=d},
ewm:function ewm(d){this.a=d},
ewg:function ewg(d){this.a=d},
ewn:function ewn(d){this.a=d},
ewo:function ewo(d){this.a=d},
ewf:function ewf(d){this.a=d},
ewq:function ewq(d,e){this.a=d
this.b=e},
ewj:function ewj(d,e){this.a=d
this.b=e},
ewr:function ewr(d){this.a=d},
ews:function ews(d){this.a=d},
ewt:function ewt(d){this.a=d},
ewu:function ewu(d){this.a=d},
ewi:function ewi(d){this.a=d},
biT:function biT(d,e){this.b=d
this.a=e},
aNB:function aNB(){},
bzt:function bzt(){},
cN9(){var w=0,v=B.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cN9=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.rg().jl(0,"assets/data/body3d.bin"),$async$cN9)
case 3:d=a1
$.hqL=J.eH(A.dK.gaS(d),d.byteOffset,d.byteLength)
t=B.aTQ(d)
s=t.getUint32(4,!0)
r=B.a([],x.a)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.jG(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.dhm[i]
g=B.b1((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a3M(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b2K))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.bbP(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cN9,v)},
aTD:function aTD(d,e,f){this.a=d
this.b=e
this.c=f},
a3M:function a3M(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
bbP:function bbP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
V1:function V1(d){this.a=d},
aE6:function aE6(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.h6$=s
_.m0$=t
_.f7$=u
_.h7$=v
_.bw$=w
_.a8$=a0
_.c=_.a=null},
dNn:function dNn(d){this.a=d},
dNm:function dNm(d,e){this.a=d
this.b=e},
dN_:function dN_(d,e){this.a=d
this.b=e},
dN0:function dN0(){},
dNo:function dNo(){},
dN1:function dN1(d,e){this.a=d
this.b=e},
dN2:function dN2(d){this.a=d},
dN3:function dN3(){},
dN4:function dN4(d){this.a=d},
dN6:function dN6(d,e){this.a=d
this.b=e},
dN5:function dN5(d){this.a=d},
dMX:function dMX(d,e,f){this.a=d
this.b=e
this.c=f},
dMY:function dMY(d){this.a=d},
dMZ:function dMZ(d){this.a=d},
dNd:function dNd(d){this.a=d},
dNe:function dNe(d,e){this.a=d
this.b=e},
dNf:function dNf(d,e){this.a=d
this.b=e},
dNg:function dNg(d){this.a=d},
dNc:function dNc(d,e){this.a=d
this.b=e},
dNh:function dNh(d,e){this.a=d
this.b=e},
dNb:function dNb(d,e){this.a=d
this.b=e},
dNi:function dNi(d){this.a=d},
dNa:function dNa(d){this.a=d},
dNj:function dNj(d){this.a=d},
dN9:function dN9(d){this.a=d},
dNk:function dNk(d){this.a=d},
dN8:function dN8(d){this.a=d},
dNl:function dNl(d){this.a=d},
dN7:function dN7(d){this.a=d},
aMG:function aMG(){},
aMH:function aMH(){},
c5P:function c5P(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c5Q:function c5Q(d,e){this.a=d
this.b=e},
c5R:function c5R(d){this.a=d},
azu(d,e,f,g,h){return new C.bcy(d,e,f,g,h)},
h8p(d,e,f,g,h,i){return $.hZo.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.cU3(d,e,f,i,g,h))},
yt:function yt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
CM:function CM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nC:function nC(d,e,f){this.a=d
this.b=e
this.c=f},
bcy:function bcy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fq1:function fq1(){},
fq2:function fq2(){},
fq3:function fq3(){},
fqa:function fqa(){},
fqb:function fqb(){},
fqc:function fqc(){},
V6:function V6(d){this.a=d},
aE8:function aE8(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.h6$=m
_.m0$=n
_.f7$=o
_.h7$=p
_.bw$=q
_.a8$=r
_.c=_.a=null},
dP2:function dP2(d){this.a=d},
dOH:function dOH(d,e){this.a=d
this.b=e},
dOK:function dOK(){},
dP3:function dP3(){},
dOF:function dOF(d,e){this.a=d
this.b=e},
dOG:function dOG(d,e){this.a=d
this.b=e},
dOL:function dOL(d,e,f){this.a=d
this.b=e
this.c=f},
dOA:function dOA(){},
dOB:function dOB(){},
dOC:function dOC(d){this.a=d},
dOD:function dOD(d,e){this.a=d
this.b=e},
dOE:function dOE(d,e,f){this.a=d
this.b=e
this.c=f},
dOM:function dOM(){},
dON:function dON(d,e){this.a=d
this.b=e},
dOO:function dOO(d){this.a=d},
dOJ:function dOJ(d,e){this.a=d
this.b=e},
dOI:function dOI(d){this.a=d},
dOz:function dOz(d,e,f){this.a=d
this.b=e
this.c=f},
dOX:function dOX(d){this.a=d},
dOW:function dOW(d){this.a=d},
dOY:function dOY(d){this.a=d},
dOV:function dOV(d){this.a=d},
dOT:function dOT(d){this.a=d},
dOU:function dOU(d){this.a=d},
dOS:function dOS(d){this.a=d},
dOP:function dOP(d){this.a=d},
dOR:function dOR(d){this.a=d},
dOZ:function dOZ(d,e){this.a=d
this.b=e},
dP_:function dP_(d,e){this.a=d
this.b=e},
dP0:function dP0(d){this.a=d},
dOQ:function dOQ(d){this.a=d},
dP1:function dP1(d,e){this.a=d
this.b=e},
bcR:function bcR(d,e){this.b=d
this.a=e},
cU3:function cU3(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aML:function aML(){},
bzd:function bzd(){},
hQd(){return new C.NV(null)},
QS(d,e,f,g,h){return new C.buI(d,e,f,g,h)},
bt6(d,e,f){return A.k.E((d-e)/(f-e),0,1)},
h8W(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
NV:function NV(d){this.a=d},
KU:function KU(d,e){this.a=d
this.b=e},
AS:function AS(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aEp:function aEp(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dV0:function dV0(d,e){this.a=d
this.b=e},
dV_:function dV_(d){this.a=d},
dV2:function dV2(d,e){this.a=d
this.b=e},
dV1:function dV1(d){this.a=d},
buI:function buI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fqs:function fqs(){},
fqt:function fqt(){},
fqu:function fqu(){},
fqv:function fqv(){},
fqw:function fqw(){},
fqx:function fqx(){},
fqy:function fqy(){},
fqz:function fqz(){},
fqA:function fqA(){},
bt7:function bt7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f5V:function f5V(d){this.a=d},
f5U:function f5U(d,e){this.a=d
this.b=e},
f5S:function f5S(d){this.a=d},
f5W:function f5W(d){this.a=d},
f5T:function f5T(d,e){this.a=d
this.b=e},
afy:function afy(d,e,f){this.c=d
this.d=e
this.a=f},
aeq:function aeq(d,e,f){this.c=d
this.d=e
this.a=f},
QL:function QL(d,e,f,g,h,i,j,k,l,m){var _=this
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
bu6:function bu6(d,e){this.b=d
this.a=e},
btC:function btC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbx:function bbx(d,e){this.b=d
this.a=e},
aIE:function aIE(d,e){this.c=d
this.a=e},
aIF:function aIF(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cP$=e
_.b7$=f
_.c=_.a=null},
f5B:function f5B(d){this.a=d},
f5A:function f5A(d){this.a=d},
f5z:function f5z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f5y:function f5y(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f5w:function f5w(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f5v:function f5v(d,e,f){this.a=d
this.b=e
this.c=f},
f5x:function f5x(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f5u:function f5u(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f5J:function f5J(d){this.a=d},
f5I:function f5I(d){this.a=d},
f5K:function f5K(d,e){this.a=d
this.b=e},
f5L:function f5L(d,e){this.a=d
this.b=e},
f5M:function f5M(d,e){this.a=d
this.b=e},
f5H:function f5H(d,e,f){this.a=d
this.b=e
this.c=f},
f5N:function f5N(d,e,f){this.a=d
this.b=e
this.c=f},
f5G:function f5G(d){this.a=d},
f5C:function f5C(d){this.a=d},
f5O:function f5O(d){this.a=d},
f5P:function f5P(d){this.a=d},
f5F:function f5F(d,e){this.a=d
this.b=e},
f5Q:function f5Q(d,e){this.a=d
this.b=e},
f5E:function f5E(d,e){this.a=d
this.b=e},
f5R:function f5R(d,e){this.a=d
this.b=e},
f5D:function f5D(d,e){this.a=d
this.b=e},
f5s:function f5s(){},
f5t:function f5t(){},
bsK:function bsK(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bs9:function bs9(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bcc:function bcc(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bsb:function bsb(d,e,f){this.b=d
this.c=e
this.a=f},
bwb:function bwb(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aOq:function aOq(){},
hx0(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a7(0,new B.u(w,0)),u=e.aF(0,new B.u(w,0)),t=1-f,s=3*t
return d.aJ(0,t*t*t).a7(0,v.aJ(0,s*t*f)).a7(0,u.aJ(0,s*f*f)).a7(0,e.aJ(0,f*f*f))},
biS(d,e,f,g,h,i){return $.hZZ.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.dpc(d,e,f,i,g,h))},
a10:function a10(d,e){this.a=d
this.b=e},
qm:function qm(d,e,f,g,h){var _=this
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
CQ:function CQ(d,e){this.a=d
this.b=e},
ZY:function ZY(d,e){this.a=d
this.b=e},
afm:function afm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a1d:function a1d(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
D_:function D_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aci:function aci(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acy:function acy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aet:function aet(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
biQ:function biQ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.by$=_.bK$=0},
dpg:function dpg(d){this.a=d},
dph:function dph(d){this.a=d},
dpd:function dpd(d,e){this.a=d
this.b=e},
dpe:function dpe(d){this.a=d},
dpf:function dpf(d){this.a=d},
dpi:function dpi(d){this.a=d},
dpj:function dpj(d){this.a=d},
dpk:function dpk(d){this.a=d},
dpl:function dpl(d){this.a=d},
dpm:function dpm(d){this.a=d},
dpn:function dpn(d){this.a=d},
dpo:function dpo(d){this.a=d},
dpp:function dpp(d){this.a=d},
dpq:function dpq(d){this.a=d},
Gm:function Gm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Wu:function Wu(d){this.a=d},
aFC:function aFC(d,e,f,g,h,i,j){var _=this
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
_.a8$=j
_.c=_.a=null},
evx:function evx(d){this.a=d},
evm:function evm(d){this.a=d},
evo:function evo(){},
evp:function evp(){},
evs:function evs(){},
evt:function evt(d,e,f){this.a=d
this.b=e
this.c=f},
evu:function evu(d){this.a=d},
evv:function evv(d){this.a=d},
evq:function evq(){},
evr:function evr(d){this.a=d},
evX:function evX(d){this.a=d},
evw:function evw(){},
evi:function evi(d){this.a=d},
evz:function evz(d){this.a=d},
evy:function evy(d){this.a=d},
evB:function evB(){},
evA:function evA(d,e){this.a=d
this.b=e},
evl:function evl(){},
evj:function evj(d){this.a=d},
evk:function evk(d){this.a=d},
evV:function evV(d){this.a=d},
evU:function evU(d){this.a=d},
evW:function evW(d){this.a=d},
evL:function evL(d,e){this.a=d
this.b=e},
evT:function evT(d){this.a=d},
evR:function evR(d){this.a=d},
evS:function evS(d){this.a=d},
evQ:function evQ(d){this.a=d},
evP:function evP(d){this.a=d},
evM:function evM(d){this.a=d},
evN:function evN(d){this.a=d},
evO:function evO(d){this.a=d},
evn:function evn(){},
evH:function evH(d){this.a=d},
evI:function evI(d){this.a=d},
evG:function evG(d){this.a=d},
evJ:function evJ(d){this.a=d},
evF:function evF(d){this.a=d},
evK:function evK(d){this.a=d},
evE:function evE(d){this.a=d},
evD:function evD(d){this.a=d},
evC:function evC(d,e){this.a=d
this.b=e},
biR:function biR(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dpc:function dpc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aNz:function aNz(){},
hCm(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aF(0,e).gcC()*0.1
return new B.u((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
hhV(){var w=B.a([],x.C),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a57(w,v,u,A.cM,B.U(x.N,x.y))},
hK1(d,e,f){var w=d.c,v=e===0?-1:1
return new B.u(w*f.a+v*C.hhW(d),d.d*f.b)},
hhW(d){return 42+(D.ml.aj(0,d.b)?(d.ch-1)*38:0)},
ek:function ek(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
tR:function tR(d,e,f,g){var _=this
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
aaZ:function aaZ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ac4:function ac4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a57:function a57(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bPa:function bPa(){},
bPl:function bPl(d){this.a=d},
bPg:function bPg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bPm:function bPm(d){this.a=d},
bPn:function bPn(d){this.a=d},
bPp:function bPp(d){this.a=d},
bPq:function bPq(d){this.a=d},
bPo:function bPo(d){this.a=d},
bPr:function bPr(d,e,f){this.a=d
this.b=e
this.c=f},
bPs:function bPs(d){this.a=d},
bPc:function bPc(d){this.a=d},
bPd:function bPd(d){this.a=d},
bPb:function bPb(d){this.a=d},
bPe:function bPe(d,e,f){this.a=d
this.b=e
this.c=f},
bPf:function bPf(d){this.a=d},
bP9:function bP9(d){this.a=d},
bPt:function bPt(d,e){this.a=d
this.b=e},
bPh:function bPh(d,e){this.a=d
this.b=e},
bPk:function bPk(d){this.a=d},
bPj:function bPj(d){this.a=d},
bPi:function bPi(d){this.a=d},
ajo:function ajo(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bJB:function bJB(){},
bJC:function bJC(){},
mS:function mS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
csh:function csh(d){this.a=d},
imw(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new C.fTh(),c9=new C.fTj(),d0=new C.fTk(),d1=new C.fTi(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.az(w,d1.$3(new B.a3(w.a,w.b,w.c,w.d),A.bN,A.bL))
d3.bo(D.emu,D.ejo,c9.$2(A.dL,1.4))
d3.bo(D.ej5,D.ej4,c9.$2(A.bt,2.4))
d3.bo(D.ej6,T.aKQ,c9.$2(A.bt,2.4))
if(c7){d2=c8.$1(A.fl.j(0.5))
d2.z=A.IO
d3.ad(D.eiP,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.F(d2+v/3,1)
d6.$5(d3,"\u2744",new B.u(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.az(d0.$4(-22,-26,44,50),d1.$3(D.aQX,A.aP,A.cq))
d3.ad(A.cI,16,c8.$1(A.bt))
d3.ad(A.cI,13,c8.$1(c7?A.aJ.j(0.85):A.O))
if(c7){d2=d3.a
J.bl(d2.save())
d2.translate(0,4)
d3.io(0,d4.y*0.6)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.ac,3).G()
d2.drawLine.apply(d2,[0,0,s*11,t*11,r])
r.delete()}d2.restore()
for(t=d5*0.8,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
s=Math.sin(v*2+d5)
r=c8.$1(A.c.j(0.8*(1-u))).G()
d2.drawCircle(s*9,4-u*12,1.6+u*2,r)
r.delete()}}d3.ad(D.emm,2.4,c8.$1(c7?A.bf:A.al))
d3.ad(D.end,2.4,c8.$1(A.al))
return!0
case"blender":d3.az(d0.$5(-14,14,28,12,4),c8.$1(A.e9))
d2=$.S().r
t=x.v
q=new B.aF(d2,A.ag,c6,c6,B.a([],t))
q.D(new B.aY(-16,-26))
q.D(new B.aq(16,-26))
q.D(new B.aq(12,14))
q.D(new B.aq(-12,14))
q.D(new B.bt())
d3.aK(q,c8.$1(A.fl.j(0.35)))
if(c7){d2=new B.aF(d2,A.ag,c6,c6,B.a([],t))
d2.D(new B.aY(-14,-10))
d2.D(new B.aq(14,-10))
d2.D(new B.aq(12,14))
d2.D(new B.aq(-12,14))
d2.D(new B.bt())
d3.aK(d2,c8.$1(A.ax.j(0.7)))}d3.aK(q,c9.$2(A.ac,1.6))
d2=d3.a
J.bl(d2.save())
d2.translate(0,10)
d3.io(0,d4.y)
d3.bo(D.a7Y,D.aLb,c9.$2(A.bO,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.F(s+v*0.33,1)
r=c8.$1(A.eO).G()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.az(d0.$5(-10,-4,20,10,4),c8.$1(A.aL))
d3.ad(A.ig,3,c8.$1(c7?A.bf:A.al))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=F.Sc[m]
r=c9.$2(A.bt,3).G()
d2.drawLine.apply(d2,[l*0.4,1,l,t,r])
r.delete()
J.bl(d2.save())
d2.translate(l,s)
r=c9.$2(A.c.j(c7?0.35:0.9),3).G()
d2.drawLine.apply(d2,[-11,0,11,0,r])
r.delete()
if(c7){p=B.bK(A.I,6,24+Math.sin(d4.y*3)*4)
r=c8.$1(A.c.j(0.25)).G()
d2.drawOval(B.bH(p),r)
r.delete()}d2.restore()}return!0
case"drill":w=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
w.D(new B.aY(-24,-12))
w.D(new B.aq(10,-12))
w.D(new B.aq(10,2))
w.D(new B.aq(-2,2))
w.D(new B.aq(-6,22))
w.D(new B.aq(-16,22))
w.D(new B.aq(-14,2))
w.D(new B.aq(-24,2))
w.D(new B.bt())
d3.aK(w,d1.$3(D.f4_,A.aT,A.d0))
d3.aQ(D.f36,c8.$1(A.dn))
d2=d3.a
J.bl(d2.save())
d2.translate(18,-5)
d3.io(0,d4.y*2)
d3.bo(A.I,D.ejf,c9.$2(A.bO,2.4))
d3.bo(A.a7V,D.eje,c9.$2(A.hy,1))
d2.restore()
if(c7)for(t=d5*3,s=d5*20,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
p=Math.sin(v*3+s)
r=c8.$1(A.dB.j(1-u)).G()
d2.drawCircle(34+u*6,-5+p*6*u,1.4,r)
r.delete()}return!0
case"torch":if(c7){v=A.k.E(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aY(16,-6))
d2.D(new B.aq(52,-26))
d2.D(new B.aq(52,18))
d2.D(new B.aq(16,4))
d2.D(new B.bt())
d3.aK(d2,c8.$1(A.bM.j(0.35*v)))}d3.az(d0.$5(-26,-6,30,12,3),d1.$3(D.f45,A.bn,A.cr))
k=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
k.D(new B.aY(4,-6))
k.D(new B.aq(18,-12))
k.D(new B.aq(18,12))
k.D(new B.aq(4,6))
k.D(new B.bt())
d3.aK(k,c8.$1(A.e9))
d3.ad(D.ejk,7,c8.$1(c7?A.c:A.dn))
return!0
case"neon":d3.az(d0.$5(-30,-14,60,28,6),c8.$1(M.nl))
if(c7)j=d4.ax>0.5||A.o.F(A.k.bf(d5*17),3)!==0
else j=!1
i=j?A.c_:D.bpL
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.c_.j(0.35))
t.z=A.mX
d3.az(d2,t)}d3.az(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.emA,i,17)
return!0
case"microwave":d3.az(d0.$4(-30,-18,60,38),d1.$3(D.f4b,A.bO,A.bn))
d2=d0.$5(-26,-14,38,30,3)
d3.az(d2,c8.$1(c7?A.bM.j(0.75):A.au))
if(c7){d2=d3.a
J.bl(d2.save())
d2.translate(-7,8)
d3.io(0,d4.y*0.5)
d3.dQ(B.bK(A.I,7,22),c8.$1(A.d0))
d2.restore()}d3.az(d0.$5(15,-14,12,12,2),c8.$1(M.nl))
if(c7)d6.$5(d3,"0:"+A.a.aY(A.o.u(59-A.o.F(A.k.bf(d5),60)),2,"0"),D.ejl,A.ba,6.5)
d3.ad(D.ejB,4,c8.$1(A.dn))
return!0
case"doorbell":d3.az(d0.$5(-16,-26,32,52,8),c8.$1(A.aN))
d3.ad(A.Jm,10,c8.$1(c7?A.bs:A.bt))
d2=d3.a
J.bl(d2.save())
d2.translate(0,-8)
d3.io(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.enh,A.c,16)
d2.restore()
d3.ad(A.kv,6,c8.$1(A.d3))
d3.ad(A.kv,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=B.bX(A.Jm,14+v*6+A.k.F(t,6))
r=c9.$2(A.bs.j(0.9-v*0.3),1.8).G()
d2.drawArc.apply(d2,[B.bH(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.bo(D.emz,D.enb,c9.$2(A.bt,4))
d2=d3.a
J.bl(d2.save())
d3.io(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.az(d0.$5(-24,-14,46,22,5),d1.$3(D.f40,A.bO,A.al))
d3.ad(D.aKU,8,c8.$1(A.au))
d3.ad(D.aKU,4.5,c8.$1(c7?A.aJ:A.cr))
d3.ad(D.emx,2.2,c8.$1(c7&&A.o.F(A.k.bf(d5*1.6),2)===0?A.ax:A.jR))
d2.restore()
if(c7)d6.$5(d3,"REC",D.emI,A.ax,9)
return!0
case"console":d3.az(d0.$5(-28,-22,56,44,8),d1.$3(D.f48,A.iY,A.fe))
d3.az(d0.$5(-20,-17,40,22,3),c8.$1(A.dG))
if(c7){d2=d5*2.3
d3.ad(new B.u(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aQ(new B.a3(-18,t,-15.6,t+8),c8.$1(A.ba))
d2=-9+Math.sin(d2-0.4)*6
d3.aQ(new B.a3(15.6,d2,18,d2+8),c8.$1(A.c_))}d3.ad(D.ems,4,c8.$1(A.aS))
d3.ad(D.ejg,2.4,c8.$1(A.ax))
d3.ad(D.ejy,2.4,c8.$1(A.bf))
return!0
case"heartmon":d3.az(d0.$5(-30,-22,60,44,6),c8.$1(A.au))
d3.az(d0.$5(-26,-18,52,28,3),c8.$1(A.dG))
if(c7){d2=$.S()
t=B.a([],x.v)
h=new B.aF(d2.r,A.ag,c6,c6,t)
for(d2=d5*0.5,l=-25;l<=25;++l){u=A.k.F((l+25)/50-d2,1)
if(u<0.1)g=Math.sin(u/0.1*3.141592653589793)*-1
else if(u<0.14)g=0.6
else{s=u<0.2?-0.4:0
g=s}f=-4+g*11
if(l===-25){s=new B.aY(l,f)
t.push(s)
p=h.f
if(p!=null)s.bx(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}else{s=new B.aq(l,f)
t.push(s)
p=h.f
if(p!=null)s.bx(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}}d3.aK(h,c9.$2(A.ba,1.8))
d6.$5(d3,"72",D.ejh,A.hf,11)
d2=d5*9
d6.$5(d3,"\u2665",D.emN,A.hf.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.ad(D.emC,3,c8.$1(c7?A.bf:A.bt))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.az(d2,c8.$1(A.cw.j(c7?0.5:0.3)))
d3.az(d0.$5(-26,-20,52,40,4),c9.$2(A.ac,1.6))
d3.aQ(D.f42,c8.$1(F.tR))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.bl(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.pc(0,-1,1)
d3.dQ(B.bK(A.I,8,14),c8.$1(A.cG))
d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aY(-6,0))
d2.D(new B.aq(-12,-4))
d2.D(new B.aq(-12,4))
d2.D(new B.bt())
d3.aK(d2,c8.$1(A.cd))
d3.ad(D.ekk,1.2,c8.$1(A.w))
s.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=A.k.F(d2+v*0.2,1)
t=Math.sin(u*8+v)
p=A.o.F(v,2)
r=c9.$2(A.ac,1).G()
s.drawCircle(-18+t*2,13-u*30,1.4+p,r)
r.delete()}}return!0
case"lighthouse":d2=$.S().r
t=x.v
e=new B.aF(d2,A.ag,c6,c6,B.a([],t))
e.D(new B.aY(-9,22))
e.D(new B.aq(-5,-16))
e.D(new B.aq(5,-16))
e.D(new B.aq(9,22))
e.D(new B.bt())
d3.aK(e,d1.$3(D.f4D,A.c,A.bB))
d3.aQ(D.f4z,c8.$1(c7?A.dB:A.bt))
s=new B.aF(d2,A.ag,c6,c6,B.a([],t))
s.D(new B.aY(-7,-22))
s.D(new B.aq(0,-29))
s.D(new B.aq(7,-22))
s.D(new B.bt())
d3.aK(s,c8.$1(A.ek))
if(c7){d=Math.sin(d4.y*0.3)
d2=new B.aF(d2,A.ag,c6,c6,B.a([],t))
d2.D(new B.aY(0,-19))
t=d*34
d2.D(new B.aq(t,-26))
d2.D(new B.aq(t,-12))
d2.D(new B.bt())
d3.aK(d2,c8.$1(A.dB.j(0.45)))
d2=c8.$1(A.dB.j(0.35))
d2.z=A.IO
d3.ad(D.eiQ,14,d2)}return!0
case"discoball":d3.bo(D.eiT,Q.aKM,c9.$2(A.dn,1.4))
d3.ad(A.I,16,d1.$3(D.f3K,A.aP,A.al))
for(d2=d3.a,v=0;v<8;++v){t=-12+v*3.4
r=c9.$2(A.dm,0.7).G()
d2.drawLine.apply(d2,[-16,t,16,t,r])
r.delete()}for(v=0;v<5;++v){d=d4.y*0.5+v*1.26
t=Math.cos(d)
s=Math.sin(d)
p=Math.cos(d)
r=c9.$2(A.dm,0.7).G()
d2.drawLine.apply(d2,[t*16*0.3,s*16*0.3,p*16,0,r])
r.delete()}if(c7)for(t=d5*2,s=d5*9,v=0;v<10;++v){d=t+v*0.63
a0=22+A.o.F(v,3)*6
p=Math.cos(d)
o=Math.sin(d)
r=c8.$1(D.dio[A.o.F(v,4)].j(0.5+0.5*Math.sin(s+v))).G()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.az(d0.$5(-14,-4,28,24,5),d1.$3(D.f3H,A.cq,A.al))
d3.az(d0.$5(-12,-26,24,20,5),d1.$3(D.f3A,A.aN,A.bL))
d3.bo(H.aKN,D.eiU,c9.$2(A.bt,1.6))
d3.ad(D.eiV,2.2,c8.$1(c7?A.ax:A.bt))
a1=c7&&A.k.F(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=F.a5B[m]
if(c7)t=a1?A.b8:A.eP
else t=A.cr
r=c8.$1(t).G()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.bl(d2.save())
d2.translate(14,0)
d3.io(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.bo(A.I,D.a7Q,c9.$2(A.bL,4))
d2.restore()
d3.bo(D.emi,D.emG,c9.$2(A.bL,4))
d3.aQ(D.f4y,c8.$1(c7?A.b8.j(0.7):A.aL))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.aBB[m]+1,d2,10,14,2)
p=B.ar(A.bM,A.d0,a2)
p.toString
r=c8.$1(p).G()
t.drawRRect(B.e7(s),r)
r.delete()}d3.az(d0.$5(-24,-6,48,26,8),d1.$3(D.f41,A.bO,A.bn))
for(m=0;m<2;++m){l=D.aBB[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.fs:A.au).G()
t.drawRRect(B.e7(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.cG.j(0.5))
s.z=N.oE
r=s.G()
t.drawRRect(B.e7(d2),r)
r.delete()}}d3.bo(D.ejH,D.ek2,c9.$2(A.au,3))
return!0
case"ledstrip":d3.az(d0.$5(-34,-4,68,10,4),c8.$1(A.cr))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=A.k.F(t+v*40,360)
i=c7?new Ak.pb(1,a3,0.8,1).jY():A.e9
if(c7){s=c8.$1(i.j(0.45))
s.z=N.oE
r=s.G()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).G()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.az(d0.$5(-40,-2,6,6,1),c8.$1(A.dn))
return!0
case"pump":d3.az(d0.$5(-16,-2,32,22,6),d1.$3(D.f3Q,A.cw,A.FI))
d3.ad(D.emO,8,c8.$1(A.q2))
d2=d3.a
J.bl(d2.save())
d2.translate(-2,9)
d3.io(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.fl,2.4).G()
d2.drawLine.apply(d2,[0,0,s*7,t*7,r])
r.delete()}d2.restore()
t=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
t.D(new B.aY(16,6))
t.D(new B.aq(26,6))
t.D(new B.aq(26,-20))
t.D(new B.aq(10,-20))
d3.aK(t,c9.$2(A.bL,4))
if(c7){for(t=d5*0.9,v=0;v<5;++v){u=A.k.F(t+v*0.2,1)
r=c8.$1(A.hl).G()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.ad(D.ekY,3.2,c8.$1(A.hl.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.bl(d2.save())
d3.io(0,-0.15)
d3.az(d0.$5(-26,-14,40,22,10),d1.$3(D.f43,A.i1,A.tV))
d3.az(d0.$5(14,-10,12,14,3),c8.$1(A.cr))
d3.az(d0.$5(-10,6,12,22,4),c8.$1(A.e9))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(A.c.j(1-u),1.8).G()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(A.cG.j(0.4))
d2.z=N.oE
d3.ad(D.ejA,8,d2)}return!0
case"headphones":d3.e4(B.bK(A.dC,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bt,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=F.Sb[m]
s=l-7
p=d0.$5(s,0,14,20,6)
r=d1.$3(new B.a3(s,0,s+14,20),A.bq,A.ob).G()
d2.drawRRect(B.e7(p),r)
r.delete()
if(c7)for(s=l<0,v=1;v<=2;++v){p=B.bX(new B.u(l,10),10+v*5+A.k.F(t,5))
o=s?2.2:-0.9
r=c9.$2(A.eG.j(0.9-v*0.3),1.6).G()
d2.drawArc.apply(d2,[B.bH(p),o*57.29577951308232,91.67324722093173,!1,r])
r.delete()}}if(c7)d6.$5(d3,"\u266a",new B.u(-4,-8-A.k.F(d5*14,8)),A.kF,12)
return!0
case"smartwatch":d3.az(d0.$5(-8,-30,16,14,3),c8.$1(A.cr))
d3.az(d0.$5(-8,14,16,14,3),c8.$1(A.cr))
d3.az(d0.$5(-14,-17,28,32,8),d1.$3(D.f3F,A.dn,A.e9))
d3.az(d0.$5(-11,-14,22,26,6),c8.$1(A.dG))
if(c7){a4=new B.V(Date.now(),0,!1)
d6.$5(d3,A.a.aY(A.o.u(B.dh(a4)),2,"0")+":"+A.a.aY(A.o.u(B.fS(a4)),2,"0"),D.eiZ,A.ba,9.5)
g=(Math.sin(d5*9)+1)/2
d2=B.ar(A.Fn,A.hf,g)
d2.toString
d6.$5(d3,"\u2665",new B.u(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+A.o.F(A.k.bf(d5*2),6)),A.dC,A.c,7)}return!0
case"tablet":d3.az(d0.$5(-30,-22,60,44,6),c8.$1(M.nl))
d3.az(d0.$5(-30,-22,60,44,6),c9.$2(A.bL,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.bl(d2.save())
d2.clipRRect(B.e7(a5),$.nI(),!0)
d2.translate(-27,-19)
L.LJ(d3,D.faz,d5,c6)
d2.restore()}else d3.az(a5,c8.$1(D.w_))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.az(a6,d1.$3(new B.a3(a6.a,a6.b,a6.c,a6.d),A.dF,A.d7))
d3.az(a6,c9.$2(A.aV,1.2))
d3.ad(D.aLj,9,c8.$1(A.au))
d3.ad(D.aLj,6,c9.$2(A.d0,2))
d3.az(d0.$5(4,-2,14,10,2),c8.$1(A.au))
d3.az(d0.$5(-22,-19,44,12,2),c8.$1(A.dG))
d2=A.k.ac(d4.db,1)
t=A.k.ac(c7?d4.dx:d4.e,1)
s=c7?A.ba:A.al
d6.$5(d3,d2+"\u2192"+t+"V",D.el7,s,8.2)
d3.ad(D.ejp,2.4,c8.$1(c7?A.bf:A.aL))
d6.$5(d3,"IN",D.emH,A.ac,6)
d6.$5(d3,"OUT",D.ekQ,A.ac,6)
return!0
case"regulator":a7=c7?A.k.E(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=B.ar(A.bL,A.ax,a7)
t.toString
d3.az(d2,c8.$1(t))
d3.ad(H.a7O,3,c8.$1(A.aL))
d3.az(d0.$5(-12,-4,24,18,3),d1.$3(D.f3B,A.e9,A.hY))
d6.$5(d3,"7805",D.a7Y,A.ac,8)
for(d2=d3.a,m=0;m<3;++m){t=D.doO[m]-1
r=c8.$1(A.e2).G()
d2.drawRect(B.bH(new B.a3(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.F(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).G()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.ene,A.bk,9)
return!0
case"diode":d3.bo(D.aLn,D.aL5,c9.$2(A.e2,2.4))
d3.az(d0.$5(-14,-7,28,14,6),c8.$1(A.ay.j(0.85)))
d3.aQ(D.f3k,c8.$1(A.bk))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dB.j(0.4))
t.z=A.kR
d3.az(d2,t)}d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aY(-8,-4))
d2.D(new B.aq(-8,4))
d2.D(new B.aq(-1,0))
d2.D(new B.bt())
d3.aK(d2,c8.$1(A.aS))
d6.$5(d3,"one way",D.emv,A.aC,8)
return!0
case"ldr":d3.bo(D.aLn,D.a7Y,c9.$2(A.e2,2.4))
d3.bo(D.aLb,D.aL5,c9.$2(A.e2,2.4))
d3.ad(A.I,12,c8.$1(A.d0))
d3.ad(A.I,12,c9.$2(A.rt,1.6))
d2=$.S()
t=B.a([],x.v)
a8=new B.aF(d2.r,A.ag,c6,c6,t)
a8.D(new B.aY(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new B.aq(d2,-6+v*3)
t.push(d2)
s=a8.f
if(s!=null)d2.bx(s)
d2=a8.e
if(d2!=null)d2.a.delete()
a8.e=null}d3.aK(a8,c9.$2(A.bM,1.4))
d2=B.ar(A.bt,A.dB,d4.f)
d2.toString
d6.$5(d3,"\u2600",new B.u(-6,-26),d2,14)
d6.$5(d3,""+A.k.V(20+980*(1-d4.f))+"\u03a9",D.emj,A.ac,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=A.ei
break A}if("sonytv"===d2){t=A.rk
break A}if("appletv"===d2){t=A.e2
break A}t=F.Fp
break A}a9=d2==="lgtv"||d2==="appletv"
d3.az(d0.$5(-36,-24,72,a9?42:44,6),c8.$1(t))
t=a9?-35:-33
s=a9?-23:-21
p=a9?70:66
a5=d0.$5(t,s,p,a9?40:38,3)
t=a5.a
s=a5.b
if(c7){p=d3.a
J.bl(p.save())
p.clipRRect(B.e7(a5),$.nI(),!0)
p.translate(t,s)
L.he_(d3,new B.av(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.ad(D.ek5,1.6,c8.$1(A.ba))}else{d3.az(a5,c8.$1(D.w_))
p=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
p.D(new B.aY(t,s))
p.D(new B.aq(t+24,s))
p.D(new B.aq(t,s+22))
p.D(new B.bt())
d3.aK(p,c8.$1(A.c.j(0.05)))}switch(d2){case"lgtv":d3.az(d0.$5(-22,19,44,3,1.5),c8.$1(A.dn))
break
case"sonytv":for(d2=d3.a,t=x.v,m=0;m<2;++m){l=M.hd[m]
s=$.S()
p=B.a([],t)
s=new B.aF(s.r,A.ag,c6,c6,p)
p.push(new B.aY(l*30,20))
p.push(new B.aq(l*22,20))
p.push(new B.aq(l*26,26))
p.push(new B.bt())
r=c8.$1(A.dn).G()
p=s.gbu().a.snapshot()
d2.drawPath((s.e=new B.cd(p)).a,r)
r.delete()}d6.$5(d3,"SONY",D.elL,A.bO,5.5)
break
case"appletv":d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aY(-8,18))
d2.D(new B.aq(8,18))
d2.D(new B.aq(12,25))
d2.D(new B.aq(-12,25))
d2.D(new B.bt())
d3.aK(d2,c8.$1(D.YR))
d6.$5(d3,"Apple TV",D.el8,A.bt,4.8)
break
default:d3.az(d0.$5(-34,19,68,7,3),c8.$1(D.bo2))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.dm,0.6).G()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.ena,F.tR,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.ml.h(0,d2)
b1=b0.b===D.wZ
b2=b1?44:30
b3=b1?48:54
t=-b2/2
s=-b3/2
p=b1?5:6.5
w=d0.$5(t,s-2,b2,b3,p)
p=w.a
o=w.b
b4=w.c
b5=w.d
b6=b0.c
b7=B.ar(b6,A.c,0.35)
b7.toString
d3.az(w,d1.$3(new B.a3(p,o,b4,b5),b7,b6))
a5=d0.$5(t+2,s,b2-4,b3-4,3.5)
if(c7){t=d3.a
J.bl(t.save())
t.clipRRect(B.e7(a5),$.nI(),!0)
s=a5.a
p=a5.b
t.translate(s,p)
L.LJ(d3,new B.av(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.az(a5,c8.$1(D.w_))
if(b1){t=a5.b
s=a5.d
d3.bo(new B.u(0,t),new B.u(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.az(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.ad(new B.u(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.az(d0.$5(-17,-28,34,52,4),c8.$1(A.e9))
d3.az(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bO))
if(c7){d6.$5(d3,"NGMY",D.enk,A.au,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.F(v,4)===3?14:22
r=c8.$1(A.bn).G()
d2.drawRect(B.bH(new B.a3(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.ad(A.a7M,1.6,c8.$1(A.au))}return!0
case"laptop":d3.az(d0.$5(-30,-28,60,42,4),d1.$3(D.f4c,A.cq,A.bn))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.bl(d2.save())
d2.clipRRect(B.e7(b8),$.nI(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
L.LJ(d3,new B.av(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.az(b8,c8.$1(D.w_))
d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aY(-38,16))
d2.D(new B.aq(38,16))
d2.D(new B.aq(34,21))
d2.D(new B.aq(-34,21))
d2.D(new B.bt())
d3.aK(d2,c8.$1(D.YR))
d3.az(d0.$5(-7,16,14,2,1),c8.$1(A.bn))
return!0
case"imac":d3.az(d0.$5(-32,-28,64,46,5),d1.$3(D.f4g,A.bN,A.cq))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.bl(d2.save())
d2.clipRRect(B.e7(b9),$.nI(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
L.LJ(d3,new B.av(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.az(b9,c8.$1(D.w_))
d3.ad(D.aKH,2,c8.$1(A.bL))
d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aY(-6,18))
d2.D(new B.aq(6,18))
d2.D(new B.aq(10,26))
d2.D(new B.aq(-10,26))
d2.D(new B.bt())
d3.aK(d2,c8.$1(D.YR))
return!0
case"monitor":d3.az(d0.$5(-34,-28,68,40,3),c8.$1(A.ei))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.a
J.bl(d2.save())
d2.clipRRect(B.e7(c0),$.nI(),!0)
t=c0.a
s=c0.b
d2.translate(t,s)
L.LJ(d3,new B.av(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.az(c0,c8.$1(D.w_))
d3.aQ(D.f4n,c8.$1(A.bn))
d3.az(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.dn))
return!0
case"projector":if(c7){d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aY(14,4))
d2.D(new B.aq(-32,-42))
d2.D(new B.aq(34,-42))
d2.D(new B.bt())
d3.aK(d2,c8.$1(A.dB.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.bl(d2.save())
d2.clipRRect(B.e7(c1),$.nI(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
L.LJ(d3,new B.av(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.az(d0.$5(-26,-4,52,24,6),d1.$3(D.f44,A.iA,A.dn))
d3.ad(D.aKS,7,c8.$1(A.au))
d3.ad(D.aKS,4,c8.$1(c7?A.dB:A.cr))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(A.dm,1).G()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.az(d0.$5(-34,-10,68,32,12),c8.$1(A.au))
c2=d0.$5(-30,-20,60,28,8)
d3.az(c2,c8.$1(M.nl))
d3.az(c2,c9.$2(A.bt,1.2))
if(c7){c3=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
c3.D(new B.aY(-26,4))
c3.D(new B.c5(-10,-14+Math.sin(d5)*3,6,-6))
c3.D(new B.aq(22,-16))
d3.aK(c3,c9.$2(A.aJ,2.2))
d2=A.k.F(d5*6,48)
d3.ad(new B.u(-26+d2,4-d2*0.1),2.4,c8.$1(A.ba))
d6.$5(d3,""+(88+A.o.F(A.k.bf(d5*2),5)),H.aLa,A.c,10)
d6.$5(d3,"km/h",D.ekW,A.aC,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.az(c4,d1.$3(new B.a3(c4.a,c4.b,c4.c,c4.d),A.dn,A.e9))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.a
J.bl(d2.save())
d2.clipRRect(B.e7(c5),$.nI(),!0)
t=c5.a
s=c5.b
d2.translate(t,s)
L.LJ(d3,new B.av(c5.c-t,c5.d-s),d5,c6)
d2.restore()
d2=c8.$1(A.bq.j(0.2))
d2.z=A.mX
d3.ad(A.I,26,d2)}else d3.az(c5,c8.$1(A.O))
d3.bo(D.emV,D.en_,c9.$2(A.bn,4))
d3.bo(D.ek7,D.ekn,c9.$2(A.bn,4))
return!0}return!1},
fTh:function fTh(){},
fTj:function fTj(){},
fTk:function fTk(){},
fTi:function fTi(){},
hgK(d,e,f,g){return new C.ajm(d,g,f,e)},
G6(d,e,f){return new C.bcz(d,e,f)},
ajm:function ajm(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
ajn:function ajn(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.ch=null
_.h6$=h
_.m0$=i
_.f7$=j
_.h7$=k
_.bw$=l
_.a8$=m
_.c=_.a=null},
bJf:function bJf(d,e){this.a=d
this.b=e},
bJg:function bJg(d){this.a=d},
bJe:function bJe(d){this.a=d},
bJh:function bJh(){},
bJi:function bJi(d){this.a=d},
bJj:function bJj(d,e,f){this.a=d
this.b=e
this.c=f},
bJd:function bJd(d,e){this.a=d
this.b=e},
bJb:function bJb(d,e){this.a=d
this.b=e},
bJc:function bJc(d,e,f){this.a=d
this.b=e
this.c=f},
bJ5:function bJ5(d,e){this.a=d
this.b=e},
bJ6:function bJ6(){},
bJ7:function bJ7(d,e){this.a=d
this.b=e},
bJ8:function bJ8(d,e){this.a=d
this.b=e},
bJ9:function bJ9(d){this.a=d},
bJa:function bJa(d){this.a=d},
bJy:function bJy(d){this.a=d},
bJz:function bJz(){},
bIJ:function bIJ(){},
bJA:function bJA(d,e){this.a=d
this.b=e},
bJx:function bJx(d,e,f){this.a=d
this.b=e
this.c=f},
bJs:function bJs(d){this.a=d},
bJp:function bJp(d,e,f){this.a=d
this.b=e
this.c=f},
bJq:function bJq(d,e){this.a=d
this.b=e},
bJt:function bJt(d){this.a=d},
bJn:function bJn(d,e){this.a=d
this.b=e},
bJo:function bJo(d,e){this.a=d
this.b=e},
bJr:function bJr(d){this.a=d},
bJu:function bJu(d){this.a=d},
bJl:function bJl(d,e){this.a=d
this.b=e},
bJm:function bJm(d,e){this.a=d
this.b=e},
bJv:function bJv(d){this.a=d},
bJk:function bJk(d){this.a=d},
bJw:function bJw(d){this.a=d},
bIK:function bIK(d,e){this.a=d
this.b=e},
bJ2:function bJ2(d,e){this.a=d
this.b=e},
bJ4:function bJ4(d,e){this.a=d
this.b=e},
bJ3:function bJ3(d,e){this.a=d
this.b=e},
bIQ:function bIQ(d,e){this.a=d
this.b=e},
bIR:function bIR(d){this.a=d},
bIP:function bIP(d){this.a=d},
bIS:function bIS(d,e,f){this.a=d
this.b=e
this.c=f},
bIO:function bIO(d,e){this.a=d
this.b=e},
bIV:function bIV(d,e){this.a=d
this.b=e},
bIW:function bIW(d,e){this.a=d
this.b=e},
bIX:function bIX(d,e){this.a=d
this.b=e},
bIY:function bIY(d,e,f){this.a=d
this.b=e
this.c=f},
bIN:function bIN(d,e){this.a=d
this.b=e},
bIZ:function bIZ(d,e,f){this.a=d
this.b=e
this.c=f},
bIM:function bIM(d,e){this.a=d
this.b=e},
bJ_:function bJ_(d,e,f){this.a=d
this.b=e
this.c=f},
bIL:function bIL(d,e){this.a=d
this.b=e},
bJ0:function bJ0(d){this.a=d},
bJ1:function bJ1(d){this.a=d},
bIT:function bIT(d){this.a=d},
bIU:function bIU(d){this.a=d},
bcz:function bcz(d,e,f){this.a=d
this.b=e
this.c=f},
fqd:function fqd(){},
fqe:function fqe(){},
fqf:function fqf(){},
fq0:function fq0(){},
fqg:function fqg(){},
fq_:function fq_(){},
fqh:function fqh(){},
fq4:function fq4(){},
fpZ:function fpZ(){},
fq5:function fq5(){},
fpY:function fpY(){},
fq6:function fq6(){},
fpX:function fpX(){},
fq7:function fq7(){},
fpV:function fpV(){},
fpW:function fpW(){},
fq8:function fq8(){},
fpT:function fpT(){},
fpU:function fpU(){},
fq9:function fq9(){},
fpS:function fpS(){},
VI:function VI(d){this.a=d},
aEB:function aEB(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dZO:function dZO(d,e){this.a=d
this.b=e},
dZX:function dZX(d){this.a=d},
dZY:function dZY(){},
dZZ:function dZZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e__:function e__(){},
dZN:function dZN(d){this.a=d},
dZM:function dZM(d,e,f){this.a=d
this.b=e
this.c=f},
dZL:function dZL(d,e){this.a=d
this.b=e},
dZJ:function dZJ(d){this.a=d},
dZK:function dZK(){},
dZW:function dZW(d){this.a=d},
dZV:function dZV(d){this.a=d},
dZT:function dZT(d,e){this.a=d
this.b=e},
dZR:function dZR(d){this.a=d},
dZS:function dZS(){},
dZU:function dZU(d,e,f){this.a=d
this.b=e
this.c=f},
dZP:function dZP(d,e){this.a=d
this.b=e},
dZQ:function dZQ(){},
e_1:function e_1(d){this.a=d},
e_2:function e_2(d,e){this.a=d
this.b=e},
e_0:function e_0(){},
e_3:function e_3(d,e){this.a=d
this.b=e},
e_4:function e_4(d){this.a=d},
e_5:function e_5(d){this.a=d},
ayA:function ayA(d,e){this.c=d
this.a=e},
baL:function baL(d,e){var _=this
_.d=$
_.bw$=d
_.a8$=e
_.c=_.a=null},
cJy:function cJy(d){this.a=d},
baK:function baK(d,e){this.b=d
this.a=e},
cJx:function cJx(d){this.a=d},
ayU:function ayU(){},
ayV:function ayV(){},
aL7:function aL7(){},
bzg:function bzg(){},
imy(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bX(A.vc,23)
$.S()
b8=B.J()
b8.r=A.au.gp(0)
b9.ad(A.vc,25,b8)
b8=B.J()
b8.sam(D.ew1.aA(0,v))
b9.ad(A.vc,23,b8)
for(b8=b9.a,u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
s=Math.cos(t)
r=Math.sin(t)
q=Math.cos(t)
p=Math.sin(t)
o=new B.ao(A.P,A.M,A.S,A.T,A.R)
o.r=A.bk.gp(0)
o.c=A.o.F(u,5)===0?1.8:1
n=o.G()
b8.drawLine.apply(b8,[s*17,r*17-2,q*21,p*21-2,n])
n.delete()}m=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.k.E(m/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=B.J()
r.r=A.bB.gp(0)
r.c=2
r.d=A.by
b9.bo(A.vc,new B.u(b8*18,s*18-2),r)
r=B.J()
r.r=A.bk.gp(0)
b9.ad(A.vc,3,r)
c2.$5(b9,w?"V":"A",D.en2,A.bk,12)
c2.$5(b9,w?A.k.ac(m,1)+" V":""+A.k.V(m*1000)+" mA",D.emp,A.au,9.5)
return!0
case"fan":b8=B.br(D.f3x,A.hH)
$.S()
s=B.J()
s.r=A.bt.gp(0)
b9.az(b8,s)
s=B.J()
s.r=A.al.gp(0)
b9.aQ(D.f4o,s)
s=B.J()
s.r=A.O.j(0.6).gp(0)
b9.ad(H.vd,22,s)
for(b8=b9.a,u=0;u<4;++u){J.bl(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.bK(A.aKL,18,10)
r=new B.ao(A.P,A.M,A.S,A.T,A.R)
r.r=A.hl.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.G()
b8.drawOval(B.bH(s),n)
n.delete()
b8.restore()}b8=B.J()
b8.r=A.bo.gp(0)
b9.ad(H.vd,4,b8)
b8=B.J()
b8.b=A.a9
b8.c=2
b8.r=A.cq.gp(0)
b9.ad(H.vd,22,b8)
b8=B.J()
b8.b=A.a9
b8.c=0.8
b8.r=A.jS.gp(0)
b9.ad(H.vd,14,b8)
return!0
case"speaker":l=B.br(D.aQX,A.qT)
$.S()
b8=B.J()
b8.sam(D.asi.aA(0,new B.a3(l.a,l.b,l.c,l.d)))
b9.az(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=B.J()
b8.sam(D.ewo.aA(0,B.bX(A.cy,15)))
b9.ad(A.cy,14+k,b8)
b8=B.J()
b8.r=A.dn.gp(0)
b9.ad(A.cy,5,b8)
b8=B.J()
b8.r=A.bn.gp(0)
b9.ad(H.a7N,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=B.bX(D.ejG,6+u*6+A.k.F(b8,6))
q=new B.ao(A.P,A.M,A.S,A.T,A.R)
q.b=A.a9
q.c=1.8
q.r=A.c_.j(0.9-u*0.2).gp(0)
n=q.G()
s.drawArc.apply(s,[B.bH(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=B.br(D.f4f,A.qT)
$.S()
b8=B.J()
b8.sam(D.c5Q.aA(0,new B.a3(j.a,j.b,j.c,j.d)))
b9.az(j,b8)
b8=B.br(D.aQZ,A.ii)
s=B.J()
s.r=A.hY.gp(0)
b9.az(b8,s)
if(b7){i=new B.V(Date.now(),0,!1)
h=B.Fq(i)<500?":":" "
g=A.a.aY(A.o.u(B.dh(i)),2,"0")
f=A.a.aY(A.o.u(B.fS(i)),2,"0")
b8=B.J()
b8.r=A.ba.j(0.12).gp(0)
b9.aQ(D.aQZ,b8)
c2.$5(b9,g+h+f,D.emL,A.ba,21)}b8=B.J()
b8.r=A.cq.gp(0)
b9.ad(D.emJ,2.4,b8)
b8=B.J()
b8.r=A.cq.gp(0)
b9.ad(D.ejL,2.4,b8)
return!0
case"calculator":j=B.br(D.f3V,A.hI)
$.S()
b8=B.J()
b8.sam(D.c5A.aA(0,new B.a3(j.a,j.b,j.c,j.d)))
b9.az(j,b8)
b8=B.br(D.f3O,A.ht)
s=B.J()
s.r=(b7?A.Z1:D.bql).gp(0)
b9.az(b8,s)
if(b7)c2.$5(b9,"3.14159",D.emo,A.XQ,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=B.br(new B.a3(q,s,q+6,r),A.U6)
$.S()
p=new B.ao(A.P,A.M,A.S,A.T,A.R)
p.r=(d===3?A.cd:A.bO).gp(0)
n=p.G()
b8.drawRRect(B.e7(q),n)
n.delete()}return!0
case"phone":j=B.br(D.f3J,A.hI)
$.S()
b8=B.J()
b8.r=M.nl.gp(0)
b9.az(j,b8)
b8=B.J()
b8.b=A.a9
b8.c=1.9
b8.r=D.ajG.gp(0)
b9.az(j,b8)
a0=B.br(D.f3z,A.hH)
if(b7){b8=B.J()
b8.sam(D.c79.aA(0,new B.a3(a0.a,a0.b,a0.c,a0.d)))
b9.az(a0,b8)
b8=b9.a
J.bl(b8.save())
b8.clipRRect(B.e7(a0),$.nI(),!0)
b8.translate(-12,-25)
L.LJ(b9,D.fab,c1,b6)
b8.restore()
a1=A.k.F(c1*0.12,1)
b8=B.br(D.f3w,A.ht)
s=B.J()
s.r=A.aS.gp(0)
b9.az(b8,s)
s=B.J()
s.r=A.ba.gp(0)
b9.aQ(new B.a3(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.V(a1*100)+"%",D.elr,A.c,6)}else{b8=B.J()
b8.r=D.w_.gp(0)
b9.az(a0,b8)}b8=B.br(D.f4E,D.eww)
s=B.J()
s.r=A.w.gp(0)
b9.az(b8,s)
return!0
case"router":j=B.br(D.f4e,A.n_)
$.S()
b8=B.J()
b8.sam(D.c66.aA(0,new B.a3(j.a,j.b,j.c,j.d)))
b9.az(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=F.Sb[a2]
s=a3<0?-4:4
r=new B.ao(A.P,A.M,A.S,A.T,A.R)
r.r=A.cr.gp(0)
r.c=4
r.d=A.by
n=r.G()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=A.o.F(A.k.bf(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new B.ao(A.P,A.M,A.S,A.T,A.R)
s.r=(a4?A.bf:A.aL).gp(0)
n=s.G()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=B.bX(H.vd,8+u*6+A.k.F(s,6))
q=new B.ao(A.P,A.M,A.S,A.T,A.R)
q.b=A.a9
q.c=1.8
q.r=A.hj.j(0.9-u*0.2).gp(0)
n=q.G()
b8.drawArc.apply(b8,[B.bH(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=B.br(D.f3U,A.hH)
s=$.S()
r=B.J()
r.r=A.e9.gp(0)
b9.az(b8,r)
if(b7){b8=B.J()
b8.r=A.ax.j(0.5*a5).gp(0)
b8.z=A.zN
b9.ad(A.vc,34,b8)}a6=new B.aF(s.r,A.ag,b6,b6,B.a([],x.v))
a6.D(new B.aY(-16,12))
a6.D(new B.aq(-16,-2))
a6.D(new B.c5(0,-30,16,-2))
a6.D(new B.aq(16,12))
a6.D(new B.bt())
b8=B.J()
b8.r=B.ar(A.ek,D.bhn,a5).gp(0)
b9.aK(a6,b8)
b8=B.J()
b8.b=A.a9
b8.c=1.4
b8.r=A.bU.gp(0)
b9.aK(a6,b8)
if(b7){b8=b9.a
J.bl(b8.save())
b8.translate(0,-2)
b9.io(0,c1*7)
s=B.J()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.bo(A.I,H.a7N,s)
b8.restore()}return!0
case"toycar":a7=b7?Math.sin(c1*30)*0.8:0
b8=b9.a
J.bl(b8.save())
b8.translate(0,a7)
s=$.S().r
r=x.v
j=new B.aF(s,A.ag,b6,b6,B.a([],r))
j.D(new B.aY(-28,8))
j.D(new B.aq(-28,-2))
j.D(new B.aq(-16,-4))
j.D(new B.aq(-10,-16))
j.D(new B.aq(10,-16))
j.D(new B.aq(18,-4))
j.D(new B.aq(28,-2))
j.D(new B.aq(28,8))
j.D(new B.bt())
q=B.J()
q.sam(D.c4a.aA(0,D.f47))
b9.aK(j,q)
q=new B.aF(s,A.ag,b6,b6,B.a([],r))
q.D(new B.aY(-8,-4))
q.D(new B.aq(-4,-13))
q.D(new B.aq(4,-13))
q.D(new B.aq(4,-4))
q.D(new B.bt())
p=B.J()
p.r=A.fl.gp(0)
b9.aK(q,p)
r=new B.aF(s,A.ag,b6,b6,B.a([],r))
r.D(new B.aY(8,-4))
r.D(new B.aq(8,-13))
r.D(new B.aq(11,-13))
r.D(new B.aq(15,-4))
r.D(new B.bt())
s=B.J()
s.r=A.fl.gp(0)
b9.aK(r,s)
for(a2=0;a2<2;++a2){a3=F.aBC[a2]
s=new B.ao(A.P,A.M,A.S,A.T,A.R)
s.r=A.au.gp(0)
n=s.G()
b8.drawCircle(a3,10,7.5,n)
n.delete()
J.bl(b8.save())
b8.translate(a3,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.ao(A.P,A.M,A.S,A.T,A.R)
q.r=A.bO.gp(0)
q.c=1.6
n=q.G()
b8.drawLine.apply(b8,[0,0,r*5.5,s*5.5,n])
n.delete()}b8.restore()}b8.restore()
if(b7)for(s=c1*40,u=0;u<3;++u){r=A.k.F(s+u*8,14)
q=-4+u*5
p=new B.ao(A.P,A.M,A.S,A.T,A.R)
p.r=A.aC.gp(0)
p.c=1.6
n=p.G()
b8.drawLine.apply(b8,[-34-r,q,-42-r,q,n])
n.delete()}return!0
case"kettle":b8=$.S().r
s=x.v
j=new B.aF(b8,A.ag,b6,b6,B.a([],s))
j.D(new B.aY(-18,20))
j.D(new B.aq(-14,-12))
j.D(new B.c5(0,-20,14,-12))
j.D(new B.aq(18,20))
j.D(new B.bt())
r=B.J()
r.sam(D.c5f.aA(0,D.f3T))
b9.aK(j,r)
r=new B.aF(b8,A.ag,b6,b6,B.a([],s))
r.D(new B.aY(14,-10))
r.D(new B.aq(30,-22))
r.D(new B.aq(32,-18))
r.D(new B.aq(16,-4))
r.D(new B.bt())
q=B.J()
q.r=A.e2.gp(0)
b9.aK(r,q)
s=new B.aF(b8,A.ag,b6,b6,B.a([],s))
s.D(new B.aY(-14,-8))
s.D(new B.c5(-34,-6,-18,12))
b8=B.J()
b8.b=A.a9
b8.c=5
b8.r=A.au.gp(0)
b9.aK(s,b8)
b8=B.J()
if(b7){s=B.ar(A.cG,A.u4,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.e9
b8.r=s.gp(0)
b9.aQ(D.f3S,b8)
if(b7){b8=B.J()
b8.r=A.cG.j(0.3).gp(0)
b8.z=A.mX
b9.ad(A.aKJ,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.F(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new B.ao(A.P,A.M,A.S,A.T,A.R)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.G()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=B.J()
b8.r=A.au.gp(0)
b9.ad(D.eiO,3,b8)
return!0
case"lamp":if(b7){u=A.k.E(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aF($.S().r,A.ag,b6,b6,B.a([],x.v))
b8.D(new B.aY(-10,-14))
b8.D(new B.aq(-30,24))
b8.D(new B.aq(10,24))
b8.D(new B.aq(8,-14))
b8.D(new B.bt())
s=B.J()
s.r=A.dB.j(0.28*u).gp(0)
b9.aK(b8,s)
s=B.J()
s.r=A.dB.j(0.5*u).gp(0)
s.z=U.IM
b9.ad(D.emP,24,s)}b8=B.br(D.f4x,A.hH)
s=$.S()
r=B.J()
r.r=A.e9.gp(0)
b9.az(b8,r)
r=B.J()
r.r=A.dn.gp(0)
r.c=3
r.d=A.by
b9.bo(D.ej1,D.aKV,r)
r=B.J()
r.r=A.dn.gp(0)
r.c=3
r.d=A.by
b9.bo(D.aKV,D.emQ,r)
a9=new B.aF(s.r,A.ag,b6,b6,B.a([],x.v))
a9.D(new B.aY(-14,-16))
a9.D(new B.aq(6,-26))
a9.D(new B.aq(10,-12))
a9.D(new B.aq(-10,-6))
a9.D(new B.bt())
s=B.J()
s.r=(b7?A.aT:A.kj).gp(0)
b9.aK(a9,s)
b8=B.J()
b8.r=(b7?A.c:A.bn).gp(0)
b9.ad(D.emT,4,b8)
return!0
case"lights":b8=$.S().r
s=x.v
b0=new B.aF(b8,A.ag,b6,b6,B.a([],s))
b0.D(new B.aY(-34,-6))
b0.D(new B.c5(0,22,34,-6))
r=B.J()
r.b=A.a9
r.c=2
r.r=A.hi.gp(0)
b9.aK(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.F(q+u*0.7,1.8)<1.1
if(b2){b3=new B.ao(A.P,A.M,A.S,A.T,A.R)
b3.r=D.a4E[u].j(0.6).gp(0)
b3.z=A.IO
n=b3.G()
r.drawCircle(p+0,o+6,12,n)
n.delete()}b3=B.a([],s)
b4=new B.aF(b8,A.ag,b6,b6,b3)
b3.push(new B.aY(p-3,o))
b3.push(new B.aq(p+3,o))
b5=o+11
b3.push(new B.aq(p+5,b5))
b3.push(new B.c5(p,o+17,p-5,b5))
b3.push(new B.bt())
p=new B.ao(A.P,A.M,A.S,A.T,A.R)
if(b2)o=D.a4E[u]
else{o=B.ar(D.a4E[u],A.w,0.65)
o.toString}p.r=o.gp(0)
n=p.G()
p=b4.gbu().a.snapshot()
r.drawPath((b4.e=new B.cd(p)).a,n)
n.delete()}return!0}return C.imw(b9,c0,c1,c2)},
fT:function fT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hc3(d){var w=D.ml.h(0,d)
return(w==null?null:w.b)===D.Ac},
inJ(d,e,f){return B.a5(d,!1).cc(B.v8(null,!1,!0,!0,new C.fY6(e,f),A.eS,null,A.pb,new C.fY7(),x.H))},
JR:function JR(d,e){this.a=d
this.b=e},
mo:function mo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fY6:function fY6(d,e){this.a=d
this.b=e},
fY7:function fY7(){},
Vr:function Vr(d,e,f){this.c=d
this.d=e
this.a=f},
blm:function blm(d,e){var _=this
_.d=$
_.e=null
_.bw$=d
_.a8$=e
_.c=_.a=null},
dVY:function dVY(d){this.a=d},
dVX:function dVX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dVV:function dVV(){},
dVW:function dVW(d){this.a=d},
dVU:function dVU(d){this.a=d},
dVT:function dVT(d,e){this.a=d
this.b=e},
dVS:function dVS(d,e){this.a=d
this.b=e},
dVR:function dVR(d){this.a=d},
dVQ:function dVQ(d){this.a=d},
dVM:function dVM(d){this.a=d},
dVL:function dVL(d){this.a=d},
dVP:function dVP(d,e,f){this.a=d
this.b=e
this.c=f},
dVO:function dVO(d){this.a=d},
dVN:function dVN(d){this.a=d},
bxf:function bxf(d,e,f){this.b=d
this.c=e
this.a=f},
aff:function aff(d,e,f){this.b=d
this.c=e
this.a=f},
aMU:function aMU(){},
a1x(d,e,f,g,h,i){return new C.bw1(d,e,f,g,h,i)},
bw1:function bw1(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fqI:function fqI(){},
fqJ:function fqJ(){},
fqK:function fqK(){},
fqL:function fqL(){},
fqM:function fqM(){},
fqN:function fqN(){},
fqO:function fqO(){},
fqP:function fqP(){},
a8Y:function a8Y(d){this.a=d},
clG:function clG(d){this.a=d},
clH:function clH(){},
clF:function clF(d,e){this.a=d
this.b=e},
clE:function clE(d){this.a=d},
X1:function X1(d){this.a=d},
aG4:function aG4(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.h6$=f
_.m0$=g
_.f7$=h
_.h7$=i
_.bw$=j
_.a8$=k
_.c=_.a=null},
eSf:function eSf(d){this.a=d},
eSb:function eSb(d){this.a=d},
eSa:function eSa(d,e){this.a=d
this.b=e},
eSd:function eSd(d,e){this.a=d
this.b=e},
eSc:function eSc(d,e){this.a=d
this.b=e},
eSe:function eSe(d){this.a=d},
bxr:function bxr(d,e,f){this.b=d
this.c=e
this.a=f},
VQ:function VQ(d){this.a=d},
blx:function blx(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.h6$=d
_.m0$=e
_.f7$=f
_.h7$=g
_.bw$=h
_.a8$=i
_.c=_.a=null},
e1N:function e1N(){},
e1O:function e1O(){},
e1I:function e1I(d,e){this.a=d
this.b=e},
e1K:function e1K(d,e){this.a=d
this.b=e},
e1L:function e1L(d){this.a=d},
e1J:function e1J(d){this.a=d},
e1M:function e1M(d){this.a=d},
bsa:function bsa(d,e,f){this.b=d
this.c=e
this.a=f},
V2:function V2(d){this.a=d},
bl8:function bl8(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.h6$=d
_.m0$=e
_.f7$=f
_.h7$=g
_.bw$=h
_.a8$=i
_.c=_.a=null},
dNu:function dNu(){},
dNv:function dNv(){},
dNp:function dNp(){},
dNs:function dNs(d,e){this.a=d
this.b=e},
dNr:function dNr(d,e){this.a=d
this.b=e},
dNt:function dNt(d){this.a=d},
dNq:function dNq(d){this.a=d},
aJw:function aJw(d,e,f){this.a=d
this.b=e
this.c=f},
VH:function VH(d){this.a=d},
blo:function blo(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dZi:function dZi(d,e){this.a=d
this.b=e},
dZj:function dZj(d){this.a=d},
dZh:function dZh(d,e){this.a=d
this.b=e},
dZk:function dZk(d){this.a=d},
dZg:function dZg(d,e){this.a=d
this.b=e},
dZl:function dZl(d){this.a=d},
dZf:function dZf(d,e){this.a=d
this.b=e},
dZm:function dZm(d,e){this.a=d
this.b=e},
dZe:function dZe(d,e){this.a=d
this.b=e},
dZn:function dZn(d){this.a=d},
dZd:function dZd(d,e){this.a=d
this.b=e},
dZo:function dZo(d){this.a=d},
dZc:function dZc(d){this.a=d},
dZp:function dZp(d){this.a=d},
dZb:function dZb(d){this.a=d},
dZq:function dZq(d){this.a=d},
dZr:function dZr(d){this.a=d},
dZa:function dZa(d){this.a=d},
bnq:function bnq(d,e,f){this.b=d
this.c=e
this.a=f},
Wp:function Wp(d){this.a=d},
aFo:function aFo(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
ep6:function ep6(d,e){this.a=d
this.b=e},
ep7:function ep7(d,e,f){this.a=d
this.b=e
this.c=f},
ep5:function ep5(d,e,f){this.a=d
this.b=e
this.c=f},
ep8:function ep8(d){this.a=d},
ep4:function ep4(d){this.a=d},
epc:function epc(d){this.a=d},
epb:function epb(d,e){this.a=d
this.b=e},
epa:function epa(d,e){this.a=d
this.b=e},
epd:function epd(d,e){this.a=d
this.b=e},
ep9:function ep9(d,e){this.a=d
this.b=e},
epe:function epe(d){this.a=d},
Wz:function Wz(d){this.a=d},
aFJ:function aFJ(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
ezT:function ezT(d){this.a=d},
ezU:function ezU(d){this.a=d},
ezR:function ezR(d,e){this.a=d
this.b=e},
ezS:function ezS(d){this.a=d},
ezQ:function ezQ(d){this.a=d},
ezV:function ezV(d){this.a=d},
ezW:function ezW(d){this.a=d},
ezX:function ezX(d){this.a=d},
ezY:function ezY(d,e){this.a=d
this.b=e},
WT:function WT(d){this.a=d},
bmE:function bmE(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eNK:function eNK(){},
eNT:function eNT(){},
eNP:function eNP(d){this.a=d},
eNO:function eNO(){},
eNQ:function eNQ(d,e){this.a=d
this.b=e},
eNN:function eNN(d,e){this.a=d
this.b=e},
eNR:function eNR(d){this.a=d},
eNM:function eNM(d,e){this.a=d
this.b=e},
eNS:function eNS(d){this.a=d},
eNL:function eNL(d){this.a=d},
Wo:function Wo(d){this.a=d},
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
_.h6$=f
_.m0$=g
_.f7$=h
_.h7$=i
_.bw$=j
_.a8$=k
_.c=_.a=null},
enM:function enM(){},
enN:function enN(){},
enF:function enF(d){this.a=d},
enE:function enE(d){this.a=d},
enG:function enG(d){this.a=d},
enD:function enD(d){this.a=d},
enH:function enH(d){this.a=d},
enC:function enC(d){this.a=d},
enI:function enI(d,e){this.a=d
this.b=e},
enB:function enB(d,e){this.a=d
this.b=e},
enJ:function enJ(d){this.a=d},
enA:function enA(d,e){this.a=d
this.b=e},
enK:function enK(d){this.a=d},
enz:function enz(d,e){this.a=d
this.b=e},
enL:function enL(d){this.a=d},
eny:function eny(d,e){this.a=d
this.b=e},
beZ:function beZ(d,e,f){this.c=d
this.d=e
this.a=f},
aMI:function aMI(){},
bzc:function bzc(){},
aN0:function aN0(){},
bzi:function bzi(){},
aNt:function aNt(){},
bzr:function bzr(){},
aNU:function aNU(){},
bzA:function bzA(){},
Jn(d,e,f,g){var w,v,u,t,s,r,q,p=$.asW
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.K)(e),++w)E.mm(d,e[w],f,g)
return}for(p=B.d2(e,0,B.dz(4,"count",x.S),B.T(e).c),v=p.$ti,p=new B.bS(p,p.gJ(0),v.k("bS<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)E.mm(d,s,f,g)
else B.bP(new B.bc(1000*q),new C.clC(d,s,f,g),u)}},
cja(d){return C.hTf(d)},
hTf(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$cja=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$cja)
case 7:r=f
q=B.aS(J.r(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.U(x.N,x.z)
w=1
break}p=A.X.aN(0,q,null)
o=x.N
n=x.z
o=x.f.b(p)?B.a2(p,o,n):B.U(o,n)
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
return B.i($async$cja,v)},
b2B(d,e){return C.hTg(d,e)},
hTg(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b2B=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b2B)
case 6:s=g
w=7
return B.b(s.ar("String","ngmy_play_progress_v1_"+d,A.X.aq(e,null)),$async$b2B)
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
return B.i($async$b2B,v)},
clC:function clC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
idm(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.U(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.x)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.K)(w),++q){p=w[q]
u.push(B.H(["k",p.b,"x",B.og(A.k.ac(p.c,4)),"y",B.og(A.k.ac(p.d,4)),"v",p.e,"l",B.og(A.k.ac(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.og(A.k.ac(p.as,3)),"ch",p.at,"vc",B.og(A.k.ac(p.z,3)),"s",B.og(A.k.ac(p.ch,2))],s,r))}w=B.a([],x.U)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.K)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.C(f,B.a6(f).k("cs.E"))
A.d.ff(l)
return A.X.aq(B.H(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
imW(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.X.aN(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.aa(h)
A.d.aa(a6.b)
v=B.a([],x.fs)
g=x.L
f=g.a(J.r(w,"parts"))
f=J.aX(f==null?A.cv:f)
while(f.C()){u=f.gS(f)
t=i.a(u)
e=B.aS(J.r(t,"k"))
s=e==null?"":e
if(!$.qA().aj(0,s)){J.cc(v,null)
continue}d=s
a0=B.aK(J.r(t,"x"))
if(a0==null)a0=0.5
a1=B.aK(J.r(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.tR(a2,d,a0,a1)
a3.arn(a2,d,a0,a1)
h.push(a3)
r=a3
a1=B.aK(J.r(t,"v"))
d=a1==null?r.e:a1
r.e=d
d=B.aK(J.r(t,"l"))
if(d==null)d=r.f
r.f=d
d=B.aK(J.r(t,"o"))
if(d==null)d=r.r
r.r=d
d=B.k_(J.r(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.k_(J.r(t,"b"))
r.x=d===!0
d=B.aS(J.r(t,"bw"))
if(d==null)d=""
r.ay=d
d=B.aK(J.r(t,"c"))
if(d==null)d=r.as
r.as=d
d=B.aK(J.r(t,"ch"))
r.at=A.k.N(d==null?0:d)
d=B.aK(J.r(t,"vc"))
if(d==null)d=0
r.z=d
d=B.aK(J.r(t,"s"))
r.ch=A.k.E(d==null?1:d,1,2.6)
J.cc(v,r)}i=g.a(J.r(w,"wires"))
i=J.aX(i==null?A.cv:i)
h=x.j
while(i.C()){q=i.gS(i)
p=h.a(q)
f=B.aK(J.r(p,0))
o=f==null?a5:A.k.N(f)
f=B.aK(J.r(p,2))
n=f==null?a5:A.k.N(f)
if(o==null||n==null||o<0||n<0||o>=J.ad(v)||n>=J.ad(v))continue
m=J.r(v,o)
l=J.r(v,n)
if(m!=null&&l!=null)a6.alB(m,A.k.N(B.e3(J.r(p,1))),l,A.k.N(B.e3(J.r(p,3))))}i=B.aK(J.r(w,"challenge"))
i=A.k.N(i==null?0:i)
k=B.aV(x.S)
h=g.a(J.r(w,"done"))
h=J.aX(h==null?A.cv:h)
while(h.C()){j=h.gS(h)
J.cc(k,A.k.N(B.e3(j)))}return new B.bqm(i,k)}catch(a4){return a5}},
fH6(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fH6=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.az(),$async$fH6)
case 7:r=o.aS(n.r(e.a,"ngmy_electronics_lab_v1"))
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
return B.i($async$fH6,v)},
bFX(d){return C.iov(d)},
iov(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bFX=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.az(),$async$bFX)
case 7:w=6
return B.b(f.ar("String","ngmy_electronics_lab_v1",d),$async$bFX)
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
return B.i($async$bFX,v)}},D,H,X,Ak,Y,A2,Al
J=c[1]
B=c[0]
A=c[2]
A3=c[118]
Z=c[156]
A4=c[148]
A_=c[146]
R=c[140]
A5=c[133]
A6=c[150]
A7=c[158]
A8=c[106]
A9=c[135]
A0=c[117]
N=c[142]
Aa=c[157]
Ab=c[149]
Ac=c[153]
Ad=c[75]
T=c[84]
Ae=c[87]
P=c[127]
Af=c[131]
U=c[138]
V=c[141]
W=c[152]
E=c[29]
K=c[3]
G=c[38]
I=c[108]
A1=c[102]
O=c[151]
Ag=c[101]
Ah=c[154]
S=c[128]
Ai=c[155]
Q=c[144]
Aj=c[26]
L=c[28]
F=c[99]
M=c[97]
C=a.updateHolder(c[18],C)
D=c[137]
H=c[139]
X=c[145]
Ak=c[57]
Y=c[110]
A2=c[147]
Al=c[143]
C.akE.prototype={}
C.W8.prototype={
R(){return new C.blX(B.U(x.N,x.i),new B.au(A.at,$.aw()),B.a([],x.X),B.a([],x.F),B.mT(0,null,null))}}
C.blX.prototype={
gWR(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
t(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a2(0)
this.ch.t()
this.a1()},
PC(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$PC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aW.al$.d.c
if(s!=null)s.jp()
p.bP(0,A.cb)
t.m(new C.egU(t))
t.a.toString
p=t.gWR()
w=3
return B.b(C.bBt(C.i11(q,C.idd(p),o,t.ay)),$async$PC)
case 3:s=e
r=s==null?null:J.j7(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=C.ieE(q,p,o)
if(t.c==null){w=1
break}t.m(new C.egV(t,o,r))
$.aW.x1$.push(new C.egW(t))
case 1:return B.h(u,v)}})
return B.i($async$PC,v)},
YV(d){return this.c1E(d)},
aXq(){return this.YV(null)},
c1E(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$YV=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aW.al$.d.c
if(s!=null)s.jp()
t.f.saZ(0,o)
t.m(new C.eh6(t))
G.dG(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bBt(C.i88(o)),$async$YV)
case 3:r=n.a=m.imB(f)
p.b=""
if(r!=null&&!C.ide(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.ieF(o)
q=B.ag(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.akE(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new C.eh7(p,t))
t.c78(p.a)
case 1:return B.h(u,v)}})
return B.i($async$YV,v)},
c78(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a2(0)
A.d.aa(w)
w=++m.as
v=m.gWR()
A.d.aa(v.a)
A.d.aa(v.b)
m.e.aa(0)
m.m(new C.eh2(m))
t=d.d
s=B.U(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.eh0(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.eh3(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.K)(r),++u){p.$2(o,new C.eh4(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.eh5(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bq.j(0.1),g=B.n(16),f=B.L(A.bq.j(0.35),A.r,1)
if(m.x)j=B.B(B.a([D.fbI,A.bd,B.E(B.d(m.Q,l,l,l,l,l,l,A.An,l,l,l),1)],x.p),A.m,l,A.e,A.i,0,l,l)
else if(k==null)j=D.fCw
else{w=B.E(B.d(k.a,l,l,l,l,l,l,A.Vv,l,l,l),1)
v=x.p
w=B.a([B.B(B.a([w,B.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fmL,l,l,l)],v),A.m,l,A.e,A.i,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.D(A.uj,B.d(u,l,l,l,l,l,l,D.fpy,l,l,l),l))
w.push(A.cS)
w.push(B.d(k.b,l,l,l,l,l,l,I.Ex,l,l,l))
u=k.e
if(u.length!==0){t=A.aT.j(0.12)
s=B.n(10)
w.push(B.p(l,B.d(u,l,l,l,l,l,l,D.fs4,l,l,l),A.f,l,l,new B.o(t,l,l,s,l,l,A.n),l,l,l,A.i7,A.ck,l,l,l))}w.push(A.am)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.aC
w.push(new B.D(A.Ny,new B.c9(A.aK,A.e,A.i,A.E,l,A.p,l,0,B.a([new B.y(t,l,A.lR,l,l,l,l,l,l,l,l,l),A.bm,new B.by(1,A.bb,new B.y(q,l,new B.F(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.K)(j),++p){o=j[p]
t=new B.aP(12,12)
s=new B.aP(12,12)
A.d.v(w,B.a([A.N,new B.bN(A.a8,l,l,B.p(l,new B.y(o.a,l,A.Vc,l,l,l,l,l,l,l,l,l),A.f,l,l,new B.o(A.bq.j(0.3),l,l,new B.bg(t,t,t,t),l,l,A.n),l,l,l,l,A.h7,l,l,l),l),A.av,B.p(l,new B.y(o.b,l,D.fxJ,l,l,l,l,l,l,l,l,l),A.f,l,l,new B.o(A.c.j(0.07),l,l,new B.bg(s,s,s,s),l,l,A.n),l,l,l,l,A.bT,l,l,l)],v))}if(m.ax)w.push(D.eom)
j=B.cj(B.x(w,A.E,l,A.e,A.i,0,A.p),A.t,m.ch,A.y,l,l,l,l,A.ah)}w=x.p
g=B.x(B.a([B.aiR(B.p(l,j,A.f,l,new B.aZ(0,1/0,0,i),new B.o(h,l,f,g,l,l,A.n),l,l,l,D.bA_,A.eB,l,l,1/0),A.b5,A.iH),B.E(C.hgK(m.gWR(),l,l,m.e),1)],w),A.m,l,A.e,A.i,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new E.dX("Ask about it",i,new C.eha(m),l,A.bq,l),new E.dX("Invent something new",!i,new C.ehb(m),l,A.bq,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dr6[p]
i.push(new E.dX(n,!1,new C.ehc(m,n),l,A.bq,l))}f.push(new E.fd(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.d9g[p]
i.push(new E.dX(r,!1,new C.ehd(m,r),l,A.bq,l))}f.push(new E.fd(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aM(l,A.Y,!1,l,!0,A.t,l,B.aN(),m.f,l,l,l,l,l,2,B.bs(l,new B.b5(4,B.n(16),A.a0),l,A.eT,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kz,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.aj,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.ehe(m,k),l,!1,l,l,!1,l,!0,l,A.aa,l,l,l,l,l,l,l,l,l,l,l,A.df,!0,A.a4,l,A.an,l,A.V_,l,l),1)
h=m.at
v=h&&j?D.bPz:A.e5
j=h&&j?"Ask":"Invent"
f.push(B.B(B.a([i,A.ad,new E.fE(v,j,new C.ehf(m,k),A.bq,l)],w),A.m,l,A.e,A.i,0,l,l))
return E.lx(A.bq,A.f2,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.x(f,A.m,l,A.e,A.Q,0,A.p))}}
C.GB.prototype={}
C.vf.prototype={}
C.Wv.prototype={
R(){return new C.aFD(A.I,A.I,A.aw,B.aV(x.S),$,A.bC,0,B.a([],x.X),null,null)}}
C.aFD.prototype={
gaYH(){var w,v,u,t=this,s=D.Ie[t.cx],r=D.Sd[t.cy],q=D.Da[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.eg(w,w.r,B.a6(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.azU[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cG(p,0,new C.ewc())},
ga3i(){return D.Ie[this.cx].d/this.gaYH()},
gaPR(){return 0.1*(D.Ie[this.cx].d/0.9)/D.Sd[this.cy].d},
Z(){this.a3()
this.ma()
C.cja("rocket_lander").bJ(new C.eww(this),x.h)},
c7h(){var w=this
w.ay=A.k.E(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cM.ag()*0.6
w.f=new B.u(0.15+A.cM.ag()*0.7,0.08)
w.r=new B.u((A.cM.ag()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
mt(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new C.ewx())
return}w=D.rY[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.E(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.u(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga3i()
v=v.a7(0,new B.u(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaPR())}if(m.dy){t=m.r
v=v.aF(0,t.aJ(0,t.gcC()*6*D.aBW[m.d]))}t=m.r=m.r.a7(0,v.aJ(0,d))
s=m.f=m.f.a7(0,t.aJ(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new B.u(-t.a*0.4,t.b)
t=new B.u(A.k.E(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new B.u(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.Da[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b2B("rocket_lander",B.H(["unlocked",t],x.N,x.z))
C.Jn("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga3i()/(D.rY[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.ac(m.ga3i()/(D.rY[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
G.dG(80,"",500,0,0.6,"noise")
B.fP()}}if(m.Q&&m.x>0&&A.o.F(A.k.bf(m.CW*20),2)===0)G.dG(90,"",70,0,0.12,"noise")
m.m(new C.ewy())},
agM(d,e,f,g,h){var w,v=null,u=B.d(d,v,v,v,v,v,v,D.fp1,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new E.dX(e[w].a,f.$1(w),new C.ewe(this,g,w),v,h,v))
return new B.D(A.eI,B.x(B.a([u,A.cS,B.bY(A.bG,s,A.br,v,6,6)],t),A.E,v,A.e,A.i,0,A.p),v)},
bGw(d){var w,v,u,t,s=this,r=null,q=s.ga3i()/(D.rY[s.d].b/9.81*0.28)>=1,p=A.k.V(1/s.gaPR()),o=D.aBW[s.d],n=B.n(24),m=d.c,l=B.L(m.j(0.6),A.r,1)
m=B.a([B.d("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.av,B.d(d.d+" Gravity here: "+B.w(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.aax,r,r,r),A.W,s.agM("ENGINE: "+D.Ie[s.cx].b,D.Ie,new C.ew3(s),new C.ew4(s),A.cG),s.agM("FUEL TANK: "+D.Sd[s.cy].b,D.Sd,new C.ew5(s),new C.ew6(s),A.ba),s.agM("LANDING GEAR: "+D.Da[s.db].b,D.Da,new C.ew7(s),new C.ew8(s),A.aJ),s.agM("EXTRAS (tap to add)",D.azU,new C.ew9(s),new C.ewa(s),A.bq)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.fVj)
o=(q?A.ba:A.c0).j(0.14)
w=B.n(12)
v=A.k.ac(s.gaYH(),2)
u=A.k.ac(s.ga3i()/(D.rY[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.p(r,B.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.V(D.Da[s.db].d*100)+".",r,r,r,r,r,r,D.fpG,r,r,r),A.f,r,r,new B.o(o,r,r,w,r,r,A.n),r,r,r,A.i7,A.bT,r,r,r))
m.push(A.W)
m.push(new B.bN(A.A,r,r,new E.fE(A.ou,"Launch",new C.ewb(s),A.ba,r),r))
return B.at(B.p(r,B.cj(B.x(m,A.E,r,A.e,A.Q,0,A.p),A.t,r,A.y,r,A.bQ,r,r,A.ah),A.f,r,A.lW,new B.o(D.bpT,r,l,n,r,r,A.n),r,r,r,A.bT,r,r,r,r),r,r,r)},
aZS(d,e,f,g){var w=null,v=f?A.cG:A.c.j(0.1),u=B.n(18),t=B.L(A.aV,A.r,1)
return B.mI(A.iK,B.p(w,B.X(d,A.c,w,w,w,30),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new C.ew0(e),new C.ew1(e),w,w,w,w,new C.ew2(e))},
aZR(d,e,f){return this.aZS(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cu(new C.ewp(s,D.rY[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.rY[w].a:"\ud83d\udd12"
o.push(new E.dX(v,s.d===w,new C.ewq(s,w),r,D.rY[w].c,r))}v=B.a([s.aZR(F.apE,new C.ewr(s),s.y),A.bd,s.aZS(A.wt,new C.ews(s),s.Q,130),A.bd,s.aZR(A.Pg,new C.ewt(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?A.aJ:A.c.j(0.1)
t=B.n(18)
A.d.v(v,B.a([A.bd,B.aA(r,B.p(r,D.bTO,A.f,r,r,new B.o(u,r,B.L(A.aV,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.ewu(s),r,r,r,r,r,r,!1,A.a3)],p))}return E.lx(A.cG,A.f2,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.x(B.a([new E.fd(o,"WORLD",r),B.B(v,A.m,r,A.b9,A.i,0,r,r)],p),A.m,r,A.e,A.Q,0,A.p))}}
C.biT.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.rY[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.S(),d=B.J(),a0=j.c,a1=B.ar(K.Zu,a0,0.25)
a1.toString
d.sam(new B.a9(A.b0,A.b6,A.x,B.a([F.agA,a1],x.O),l,l).aA(0,new B.a3(0,0,g,f)))
a2.aQ(new B.a3(0,0,g,f),d)
w=new B.e6()
w.cZ(5)
for(g=a2.a,v=0;v<70;++v){f=w.ag()
d=w.ag()
a1=w.ag()
u=new B.ao(A.P,A.M,A.S,A.T,A.R)
u.r=A.c.j(0.2+w.ag()*0.5).gp(0)
t=u.G()
g.drawCircle(f*i,d*h*0.8,a1*1.2+0.3,t)
t.delete()}s=h*0.88
f=x.v
d=B.a([],f)
r=new B.aF(e.r,A.ag,l,l,d)
r.D(new B.aY(0,s+14))
q=new B.e6()
q.cZ(2)
for(p=0;p<=i;p+=18){e=new B.aq(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.ag()*18))
d.push(e)
a1=r.f
if(a1!=null)e.bx(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.D(new B.aq(i,h))
r.D(new B.aq(0,h))
r.D(new B.bt())
e=$.S()
d=B.J()
d.r=B.ar(a0,A.w,0.6).gp(0)
a2.aK(r,d)
o=B.bK(new B.u(k.ax*i,s+10),8,k.ay*i)
d=B.br(o,A.ii)
a0=B.J()
a0.r=A.bf.gp(0)
a2.az(d,a0)
a0=B.br(o.cr(2),A.n_)
d=B.J()
d.b=A.a9
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gp(0)
a2.az(a0,d)
if(k.as==="ready")return
d=k.f
J.bl(g.save())
g.translate(d.a*i,d.b*h)
a2.io(0,k.w)
i=k.as
if(i==="crashed"){k=B.J()
k.r=A.cG.j(0.6).gp(0)
k.z=U.IM
a2.ad(A.I,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new B.aF(i,A.ag,l,l,B.a([],f))
n.D(new B.aY(-8,18))
n.D(new B.aq(0,44+Math.sin(k.CW*40)*8))
n.D(new B.aq(8,18))
n.D(new B.bt())
k=B.J()
k.r=A.aT.gp(0)
a2.aK(n,k)
i=new B.aF(i,A.ag,l,l,B.a([],f))
i.D(new B.aY(-4,18))
i.D(new B.aq(0,32))
i.D(new B.aq(4,18))
i.D(new B.bt())
k=B.J()
k.r=A.c.gp(0)
a2.aK(i,k)}k=e.r
m=new B.aF(k,A.ag,l,l,B.a([],f))
m.D(new B.aY(0,-26))
m.D(new B.c5(14,-10,11,18))
m.D(new B.aq(-11,18))
m.D(new B.c5(-14,-10,0,-26))
m.D(new B.bt())
i=B.J()
i.sam(D.c5J.aA(0,D.f3G))
a2.aK(m,i)
i=B.J()
i.r=A.aJ.gp(0)
a2.ad(H.vd,5,i)
i=new B.aF(k,A.ag,l,l,B.a([],f))
i.D(new B.aY(-11,6))
i.D(new B.aq(-20,20))
i.D(new B.aq(-11,18))
i.D(new B.bt())
h=B.J()
h.r=A.ax.gp(0)
a2.aK(i,h)
f=new B.aF(k,A.ag,l,l,B.a([],f))
f.D(new B.aY(11,6))
f.D(new B.aq(20,20))
f.D(new B.aq(11,18))
f.D(new B.bt())
k=B.J()
k.r=A.ax.gp(0)
a2.aK(f,k)
g.restore()},
av(d){return!0}}
C.aNB.prototype={
t(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
C.bzt.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a2(0)
w=this.h6$
w===$&&B.c()
w.t()
this.byx()}}
C.aTD.prototype={}
C.a3M.prototype={}
C.bbP.prototype={}
C.V1.prototype={
R(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.eD(["skin"],x.N),o=new Float32Array(0)
return new C.aE6(w,v,u,t,s,r,q,new B.cx(null,x.A),p,D.Ly,D.Ly,A.aw,A.cM,o,new Int32Array(0),$,A.bC,0,B.a([],x.X),null,null)}}
C.aE6.prototype={
Z(){var w=this
w.a3()
w.ma()
w.as=new C.c5P(w.gcg_())
new C.dNn(w).$0()
return},
t(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a2(0)
v.d=null}this.bxB()},
cg0(d){var w,v=this
if(v.c==null)return
w=J.a7(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.f6(0,B.H(["t","init","data",$.hqL],x.N,x.z))
v.at=!0
v.ax=""
v.aA1()
break
case"pick":v.m(new C.dN_(v,d))
break
case"shot":v.aiE(B.w(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+B.w(w.h(d,"text")))
break}},
aA1(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.axK[q.CW]
v=new C.dN0()
u=q.ay
u=B.C(u,B.a6(u).k("cs.E"))
A.d.ff(u)
t=x.N
s=B.H(["layers",u,"skinMode",q.ch,"tone","#"+B.w(v.$1(w.b))+B.w(v.$1(w.c))+B.w(v.$1(w.d)),"sel",q.cx,"bpm",A.k.V(q.k3),"spin",q.fy],t,x.cK)
r=A.X.aq(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=B.U(t,x.z)
u.n(0,"t","state")
u.v(0,s)
v.f6(0,u)}},
aiE(d){return this.cx0(d)},
cx0(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aiE=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cF.aP(A.a.b3(d,A.a.cp(d,",")+1))
w=6
return B.b(B.awl(B.a([B.cEO(r,"image/png","body.png")],x.fH),null,"Made in NGMY Core Protocol"),$async$aiE)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.L(x.gV).f.U(K.aT2)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aiE,v)},
azr(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.q(0,w)},
mt(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.q(0,"organ")&&A.k.bf(w)!==A.k.bf(v.ok)){E.WV("kick",0,0.4)
v.Uq(170,new C.dNo())}v.ok=w
return},
ael(d){var w,v,u,t,s=this
s.m(new C.dN1(s,d))
if(d==null){s.fx=D.Ly
s.dy=1
w=s.as
if(w!=null)w.f6(0,B.H(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.T(w).k("Y<1>")
u=B.C(new B.Y(w,new C.dN2(d),v),v.k("M.E"))
t=A.d.gI(u).b
if(t!=="skin"&&!s.ay.q(0,t)){s.ay.M(0,t)
if(s.ch===2)s.ch=1}s.aA1()
w=s.as
if(w!=null)w.f6(0,B.H(["t","focus","group",d],x.N,x.z))
s.go=0
s.czu(t,d)
return},
czu(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){E.WV("kick",0,0.8)
this.Uq(260,new C.dN3())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")G.dG(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.Uq(w*70,new C.dN4(this))
else if(A.a.q(e,"intestine")||e==="Stomach")G.dG(110,"",360,0.7,0.3,"saw")
else E.h6z("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":G.dG(210+e.length*4,"",80,0.6,0.55,"tri")
G.dG(2400,"",20,0,0.3,v)
break
case"muscle":G.dG(70,"",150,1,0.6,"sine")
break
case"vessel":G.dG(300,"",380,0.4,0.22,v)
E.WV("kick",0,0.3)
break
default:E.h6z("organic",2+A.o.F(e.length,6),200,0.4)}},
cE5(d){this.m(new C.dN6(this,d))},
b_9(){var w,v,u,t,s,r,q,p=this,o=B.aV(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
if(p.azr(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.M(0,s.a)}q=B.C(o,o.$ti.k("cs.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.ap(w)]
p.p4=""},
bYe(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new C.dMX(u,w,d))
v=x.t
C.Jn("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.Uq(1100,new C.dMY(u))
return}if(d==null){if(u.cx!=null)u.ael(null)
return}u.ael(d)},
c0X(d,e){var w,v=this,u=null,t=B.n(18),s=B.L(A.c_.j(0.5),A.r,1)
if(v.p1){w=v.p2
w=B.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.fl8,u,u,u)}else if(d==null||e==null)w=D.fzT
else{w=x.p
w=B.B(B.a([B.E(B.x(B.a([B.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hv,u,u,u),A.cS,B.d(e.b,u,u,u,u,u,u,I.Ex,u,u,u)],w),A.E,u,A.e,A.Q,0,A.p),1),B.aH(u,u,u,u,D.bWk,u,u,u,new C.dMZ(v),u,u,u,u,"Back to the whole body",A.cc)],w),A.E,u,A.e,A.i,0,u,u)}return B.p(u,w,A.f,u,u,new B.o(K.XX,u,s,t,u,u,A.n),u,u,u,u,R.alb,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.dCh.h(0,g)
i.aA1()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.djn
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,B.K)(v),++s){r=v[s]
if(i.azr(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.q(w,q))w.push(q)}v=x.p
u=B.a([B.aH(h,h,h,h,K.ox,h,h,h,new C.dNd(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bK:B.BH(h,A.pz,q)}else q=A.kx
q=B.x(B.a([B.E(q,1),new B.D(F.a_x,i.c0X(g,f),h)],v),A.m,h,A.e,A.i,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){o=D.daQ[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.q(0,n)
p.push(new E.dX(l,n,new C.dNe(i,o),o.c,A.c_,h))}p=B.a([new E.fd(p,h,h)],v)
if(!i.p1&&w.length!==0){n=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.K)(w),++s){k=w[s]
n.push(new E.dX(k,k===i.cx,new C.dNf(i,k),h,A.aT,h))}p.push(new E.fd(n,"FIND",h))}if(t.q(0,"organ")){n=i.k3
p.push(E.iO(A.c0,""+A.k.V(n)+" beats/min","Heart rate",180,40,new C.dNg(i),n))}if(i.ch>0&&t.a===0){n=B.a([],v)
for(j=0;j<5;++j)n.push(new E.FM(D.axK[j],i.CW===j,new C.dNh(i,j),!1,h))
p.push(new E.fd(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=B.a([new E.dX("Spin",n,new C.dNi(i),D.aov,A.aJ,h),new E.fE(A.op,"Reset view",new C.dNj(i),A.c,h),new E.dX(l,m,new C.dNk(i),A.Hx,A.aT,h)],v)
if(t.q(0,"organ"))v.push(new E.dX("Heartbeat sound",i.k4,new C.dNl(i),A.ot,A.c0,h))
p.push(new E.fd(v,h,h))
return E.lx(A.c_,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.x(p,A.m,h,A.e,A.Q,0,A.p))}}
C.aMG.prototype={
t(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
C.aMH.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a2(0)
w=this.h6$
w===$&&B.c()
w.t()
this.bxA()}}
C.c5P.prototype={
kV(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aL(e,"</script","<\\/script")
v=$.hx_
$.hx_=v+1
u="ngmy-body-viewer-"+v
$.xf()
$.pO().p0(u,new C.c5Q(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fB(v,"message",new C.c5R(t),!1,x.gA)
t.b=u},
f6(d,e){var w,v
try{w=this.c
if(w!=null){w=B.R4(w.contentWindow)
if(w!=null)J.aiH(w,e,"*")}}catch(v){}}}
C.yt.prototype={}
C.CM.prototype={}
C.nC.prototype={}
C.bcy.prototype={}
C.V6.prototype={
R(){var w=x.N,v=x.y,u=x.S
return new C.aE8(B.U(w,x.a2),B.a([],x.cB),B.U(w,v),B.U(w,v),B.U(w,u),A.aw,A.I,A.I,B.aV(u),$,A.bC,0,B.a([],x.X),null,null)}}
C.aE8.prototype={
Z(){var w=this
w.a3()
w.ma()
w.adk()
$.aW.x1$.push(new C.dP2(w))},
adk(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$adk=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$adk)
case 6:q=e.tH("ngmy_circuit_passed_v1")
r=q==null?A.Y:q
if(s.c!=null)s.m(new C.dOH(s,r))
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
adF(d){return this.c4Q(d)},
c4Q(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$adF=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.M(0,d)
u=3
w=6
return B.b(B.az(),$async$adF)
case 6:r=f
q=s.cx
p=B.a6(q).k("k5<cs.E,m>")
q=B.C(new B.k5(q,new C.dOK(),p),p.k("M.E"))
r.ar("StringList","ngmy_circuit_passed_v1",q)
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
return B.i($async$adF,v)},
ay8(d,e,f,g){var w="c"+this.y++,v=new C.CM(w,e,f,g)
this.d.n(0,w,v)
return v},
mI(d,e,f){return this.ay8(0,e,f,0)},
acF(d,e){var w
if(D.zL.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a7(0,new B.u(-36,w))},
u3(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aTU(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.f7$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.du(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.ec(m,D.cUU[A.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.u3(p,0)&&n.u3(p,1)
break
case"or":p=q.a
o=n.u3(p,0)||n.u3(p,1)
break
case"xor":p=q.a
o=n.u3(p,0)!==n.u3(p,1)
break
case"nand":p=q.a
o=!(n.u3(p,0)&&n.u3(p,1))
break
case"nor":p=q.a
o=!(n.u3(p,0)||n.u3(p,1))
break
case"not":o=!n.u3(q.a,0)
break
default:o=n.u3(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bQN(){return this.aTU(null)},
mt(d){var w,v,u,t,s,r,q,p,o,n=this
n.bQN()
if(!n.ax)return
for(w=n.d,w=new B.b9(w,B.a6(w).k("b9<2>")).gaf(0),v=new B.eR(w,new C.dP3()),u=n.f,t=n.w,s=0;v.C();){r=w.gS(0).a
if(u.h(0,r)===!0){q=n.f7$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.f7$)
o=s+1
G.dG(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
ay9(d){var w=this
w.d.aa(0)
A.d.aa(w.e)
w.f.aa(0)
w.r.aa(0)
w.cy=null},
mb(d,e){var w=this.x
return new B.u(d*w.a,e*w.b)},
aum(d){var w=this
if(w.x.A(0,A.aw)){$.aW.x1$.push(new C.dOF(w,d))
return}w.m(new C.dOG(w,d))},
czM(d){this.m(new C.dOL(this,d,$.bGh()[d]))},
c9A(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bGh()[a0]
v=d.d
u=B.a6(v).k("b9<2>")
t=u.k("Y<M.E>")
s=t.k("M.E")
r=B.C(new B.Y(new B.b9(v,u),new C.dOA(),t),s)
A.d.aX(r,new C.dOB())
q=B.C(new B.Y(new B.b9(v,u),new C.dOC(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new C.dOD(d,w))
return}u=d.r
p=B.dO(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dv(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.hb(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aTU(0)
h=m.h(0,A.d.gI(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.lw(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aI(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.aa(0)
u.v(0,p)
d.m(new C.dOE(d,o,a0))},
ayZ(d){var w,v,u,t,s=this.d,r=B.a6(s).k("b9<2>")
s=B.C(new B.b9(s,r),r.k("M.E"))
r=B.T(s).k("dy<1>")
s=new B.dy(s,r)
s=new B.bS(s,s.gJ(0),r.k("bS<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cip(d){var w,v,u,t,s,r=this.d,q=B.a6(r).k("b9<2>")
r=B.C(new B.b9(r,q),q.k("M.E"))
q=B.T(r).k("dy<1>")
r=new B.dy(r,q)
r=new B.bS(r,r.gJ(0),q.k("bS<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c0Q(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.du(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.zL.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.acF(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.z(p,o)
s=l}}}return t},
bPy(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.acF(p,o)
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
c9C(d){var w,v,u,t=this,s=t.ayZ(d)
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
G.dG(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new C.dOM())
return}u=t.bPy(d)
if(u!=null)t.m(new C.dON(t,u))
else t.m(new C.dOO(t))},
awY(d){return this.c3P(d)},
c3P(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$awY=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.ayZ(d)
if(s==null){w=1
break}B.jR()
t.m(new C.dOJ(t,s))
case 1:return B.h(u,v)}})
return B.i($async$awY,v)},
bCk(d){if(this.x.A(0,A.aw))return
this.m(new C.dOz(this,d,A.cM))
B.eZ()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bGh()[g]
g=x.p
v=B.a([B.aH(h,h,h,h,B.X(i.ax?A.ot:V.rT,A.ac,h,h,h,21),h,h,h,new C.dOX(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.n(16)
s=A.cp.j(0.14)
r=B.L(A.cp.j(0.5),A.r,1)
q=B.a([B.d("Challenge: "+w.a,h,h,h,h,h,h,D.fkg,h,h,h),B.d(w.b,h,h,h,h,h,h,H.aaw,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.D(A.l8,B.d(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.ba:A.eO,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.p(h,B.B(B.a([B.E(B.x(q,A.E,h,A.e,A.i,0,A.p),1),B.bI(D.fLp,h,i.gc9z(),B.bo(A.cp,h,h,h,h,h,h,h,h,h,h,A.cc))],g),A.m,h,A.e,A.i,0,h,h),A.f,h,h,new B.o(s,h,r,t,h,h,A.n),h,h,h,T.NG,D.bAF,h,h,1/0))}u.push(B.E(B.cu(new C.dOY(i)),1))
if(f!=null){t=B.n(14)
s=A.c.j(0.06)
r=f.b
u.push(B.p(h,B.d(D.zL.h(0,r).a+": "+D.zL.h(0,r).e,h,h,h,h,h,h,A.tt,h,h,h),A.f,h,h,new B.o(s,h,h,t,h,h,A.n),h,h,h,A.a_B,A.bT,h,h,1/0))}u=B.x(u,A.m,h,A.e,A.i,0,A.p)
t=B.a([],g)
for(s=D.zL.gdW(D.zL),s=s.gaf(s);s.C();){r=s.gS(s)
q=new B.aP(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ay(o.j(0.5),1,A.r,-1)
t.push(B.aA(h,B.p(h,B.x(B.a([B.X(p.b,o,h,h,h,20),A.bF,new B.y(p.a,h,D.aV0,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.Q,0,A.p),A.f,h,h,new B.o(n,h,new B.bG(m,m,m,m),new B.bg(q,q,q,q),h,h,A.n),h,h,h,A.fv,Ag.ND,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dOZ(i,r),h,h,h,h,h,h,!1,A.a3))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dnS[l]
s.push(new E.fE(A.Ph,k.b,new C.dP_(i,k),A.cp,h))}s.push(new E.fE(K.wq,"Clear",new C.dP0(i),A.c0,h))
r=B.a([],g)
for(j=0;q=$.bGh(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?A.e6:A.lI
o=i.ay
n=i.cx.q(0,j)?A.ba:A.bs
r.push(new E.dX(q.a,o===j,new C.dP1(i,j),p,n,h))}return E.lx(A.cp,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.x(B.a([new E.fd(t,"PARTS",h),new E.fd(s,"TRY",h),new E.fd(r,"TASKS",h)],g),A.m,h,A.e,A.Q,0,A.p))}}
C.bcR.prototype={
a4(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.S()
w=B.J()
w.r=D.aeS.gp(0)
a7.aQ(new B.a3(0,0,0+a5,0+a6),w)
v=B.J()
v.r=A.c.j(0.05).gp(0)
for(w=a7.a,u=20;u<a6;u+=28)for(t=14;t<a5;t+=28){s=v.G()
w.drawCircle(t,u,1,s)
s.delete()}for(a5=this.b,a6=a5.e,r=a6.length,q=a5.f,p=x.v,o=a5.d,n=0;n<a6.length;a6.length===r||(0,B.K)(a6),++n){m=a6[n]
l=m.a
k=o.h(0,l)
j=o.h(0,m.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=a5.acF(j,m.c)
f=q.h(0,l)===!0
l=$.S()
e=B.a([],p)
d=new B.aF(l.r,A.ag,a4,a4,e)
e.push(new B.aY(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new B.kO(h+a0,i,l-a0,a1,l,a1))
if(f){l=new B.ao(A.P,A.M,A.S,A.T,A.R)
l.b=A.a9
l.c=9
l.r=A.bs.j(0.28).gp(0)
l.z=N.oE
s=l.G()
l=d.gbu().a.snapshot()
w.drawPath((d.e=new B.cd(l)).a,s)
s.delete()}l=new B.ao(A.P,A.M,A.S,A.T,A.R)
l.b=A.a9
l.c=3.2
l.d=A.by
l.r=(f?A.dB:A.bt).gp(0)
s=l.G()
l=d.e
w.drawPath((l==null?d.e=new B.cd(d.gbu().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.a7(0,D.Jo)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new B.aF($.S().r,A.ag,a4,a4,B.a([],p))
w=a3.b
p.D(new B.aY(a6,w))
r=g.b
p.D(new B.kO(a6+a0,w,a5-a0,r,a5,r))
r=B.J()
r.b=A.a9
r.c=3
r.r=A.ac.gp(0)
a7.aK(p,r)}for(a5=new B.du(o,o.r,o.e);a5.C();)this.c9B(a7,a5.d)},
c9B(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.zL.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.bK(a0.c,64,64)
s=B.br(t,A.jK)
r=w.cy===v
q=s.eP(A.cy)
$.S()
p=B.J()
p.r=A.w.j(0.55).gp(0)
p.z=A.mX
d.az(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.J()
p.sam(new B.c_(A.A,0.5,A.x,g,0,B.a([e.c.j(0.6),A.L],x.O),g,g).aA(0,B.bX(a0.c,52)))
d.ad(q,52,p)}q=s.eP(A.cI)
p=B.J()
o=e.c
p.r=B.ar(o,A.w,0.65).gp(0)
d.az(q,p)
n=u?0.35:0
q=B.J()
p=B.ar(o,A.c,0.1+n)
p.toString
m=B.ar(o,A.w,u?0.2:0.45)
m.toString
q.sam(new B.a9(A.b0,A.b6,A.x,B.a([p,m],x.O),g,g).aA(0,t))
d.az(s,q)
q=B.J()
q.b=A.a9
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.az(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.rS:D.bQ4}else l=e.b
k=C.h8p(B.lw(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a4(d,v.aF(0,new B.u(p/2,q.gba(q)/2)))
j=C.h8p(e.a,10.5,A.c,g,g,A.H)
j.a4(d,a0.c.a7(0,new B.u(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.h8p(f,9,u?A.dB:A.bU,g,g,A.u)
i.a4(d,a0.c.a7(0,new B.u(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b_P(d,w.acF(a0,h),o)
this.b_P(d,a0.c.a7(0,D.Jo),o)},
b_P(d,e,f){var w
$.S()
w=B.J()
w.r=D.aeS.gp(0)
d.ad(e,8.5,w)
w=B.J()
w.b=A.a9
w.c=2.2
w.r=f.gp(0)
d.ad(e,8.5,w)
w=B.J()
w.r=A.c.gp(0)
d.ad(e,3.2,w)},
av(d){return!0}}
C.aML.prototype={
t(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
C.bzd.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a2(0)
w=this.h6$
w===$&&B.c()
w.t()
this.bxF()}}
C.NV.prototype={
R(){return new C.aEp(B.mT(0,null,null))}}
C.KU.prototype={
a6(){return"_UnfoldStyle."+this.b}}
C.AS.prototype={}
C.aEp.prototype={
c9H(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gco(0).at
v.toString
w.f=v}w.m(new C.dV0(w,e))},
c2E(){var w=this
w.e.t()
w.e=B.mT(w.f,null,null)
w.m(new C.dV_(w))},
t(){this.e.t()
this.a1()},
B(d){var w=this,v=null,u=w.d,t=u==null
return B.oG(t,B.c6(v,A.c2,t?new C.bt7(w.e,w.gc9G(w),new C.dV1(d),v):new C.aIE(u,new B.bQ(u.b,x.gj)),v,!1,!1,v,!1),new C.dV2(w,u),x.K)}}
C.buI.prototype={}
C.bt7.prototype={
b_Q(d,e){var w=null
return new B.D(R.a01,B.x(B.a([B.d(d,w,w,w,w,w,w,D.fkS,w,w,w),A.bF,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.E,w,A.e,A.i,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=B.B(B.a([B.aH(v,v,v,v,A1.nB,v,v,v,w.e,v,v,v,v,v,v),A.tl,D.bGK],u),A.m,v,A.e,A.i,0,v,v),s=w.b_Q("STUDIOS","Play, make things, and keep what you make")
$.bGi()
return B.bn(!0,B.x(B.a([new B.D(D.bFM,t,v),B.E(B.w_(0,v,A.t,w.c,A.y,v,v,v,v,v,!1,v,A.ah,!1,B.a([new B.mq(s,v),new B.o7(A.hQ,B.Px(new B.oJ(new C.f5V(d),9,!0,!0,!0,0,B.ti(),v),D.aSS),v),new B.mq(w.b_Q("SCENES","Each one is a studio too: change the style, colours and words"),v),new B.o7(D.bAN,B.Px(new B.oJ(new C.f5W(w),6,!0,!0,!0,0,B.ti(),v),D.aSS),v)],u)),1)],u),A.m,v,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0)}}
C.afy.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=B.n(20),n=B.n(20),m=B.ar(I.m4,p,0.3)
m.toString
w=x.O
m=B.a([m,D.ai8],w)
v=B.L(p.j(0.6),A.r,1.2)
u=x.V
t=B.a([new B.ac(-4,A.G,p.j(0.22),A.I,14)],u)
s=B.ar(p,A.w,0.45)
s.toString
w=B.a([p,s],w)
u=B.a([new B.ac(0,A.G,p.j(0.5),A.I,12)],u)
return B.aI(!1,A.a2,!0,r,B.aO(!1,o,!0,B.eK(B.x(B.a([B.p(r,B.X(q.c,A.c,r,r,r,24),A.f,r,r,new B.o(r,r,r,r,u,new B.a9(A.az,A.aE,A.x,w,r,r),A.a6),r,44,r,r,r,r,r,44),A.N,B.d(q.a,r,2,A.a1,r,r,r,B.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.K,r,r),A.cS,B.d(q.b,r,2,A.a1,r,r,r,B.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.K,r,r)],x.p),A.m,r,A.b9,A.i,0,A.p),r,new B.o(r,r,v,n,t,new B.a9(A.az,A.aE,A.x,m,r,r),A.n),r,A.GP,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.ai)}}
C.aeq.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=B.n(20),g=B.n(20),f=B.ar(I.m4,A.d.gI(i),0.24)
f.toString
w=x.O
f=B.a([f,D.ai8],w)
v=B.L(A.d.gI(i).j(0.35),A.r,1)
u=x.V
t=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cy,12)],u)
s=x.p
r=B.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new B.aP(6,6)
m=B.a([A.d.gI(i),A.d.gak(i)],w)
l=B.a([new B.ac(0,A.G,A.w.j(0.45),R.aLi,0)],u)
r.push(B.p(k,B.X(q[p],A.c,k,k,k,11),A.f,k,k,new B.o(k,k,k,new B.bg(n,n,n,n),l,new B.a9(A.a5,A.a8,A.x,m,k,k),A.n),k,17,k,new B.Q(p*4,0,(2-p)*4,o),k,k,k,k))}w=B.x(r,A.m,k,A.e,A.Q,0,A.p)
u=B.ar(A.d.gI(i),A.d.gak(i),0.4)
u.toString
return B.aI(!1,A.a2,!0,k,B.aO(!1,h,!0,B.eK(B.x(B.a([new B.a4(58,k,w,k),A.W,B.d(j.b,k,2,A.a1,k,k,k,B.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.K,k,k),A.av,B.X(A.CL,A.d.gI(i),k,k,k,18)],s),A.m,k,A.b9,A.i,0,A.p),k,new B.o(k,k,v,g,t,new B.a9(A.az,A.aE,A.x,f,k,k),A.n),k,A.GP,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.L,0,k,k,k,k,k,A.ai)}}
C.QL.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ar(A.d.gak(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=B.ap(-8,B.c4(j,new B.o(h,j,j,B.n(22),j,j,A.n),A.bh),j,j,2,2,8,j)
u=B.n(22)
t=k.y
s=x.V
r=B.a([new B.ac(0,A.G,A.w.j(0.55),A.Jl,26),new B.ac(-6,A.G,A.d.gI(i).j(0.1+0.4*t),A.I,30)],s)
q=B.n(22)
p=B.ar(A.d.gI(i),A.c,0.14)
p.toString
o=A.d.gI(i)
n=A.d.gak(i)
i=B.ar(A.d.gak(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bT(0,B.c4(j,new B.o(j,j,j,j,j,new B.a9(A.az,A.aE,A.x,B.a([p,o,n,i],m),D.dtB,j),A.n),A.bh),0,0,0),B.ap(j,B.c4(j,new B.o(j,j,j,j,j,new B.a9(A.b0,A.b6,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bh),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bT(0,B.b4(j,j,j,new C.bu6(i,j),A.aw),0,0,0))
i=A.c.j(0.16)
p=B.L(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ac(0,A.G,A.c.j(0.25*t),A.I,14)],s)
s=B.p(j,B.X(k.f,A.c,j,j,j,28),A.f,j,j,new B.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=B.a([B.d(k.r,j,j,j,j,j,j,D.fmB,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,B.a([A.av,B.d(i,j,1,A.a1,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a7,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.UO)
p.push(B.p(j,j,A.f,j,j,new B.o(A.c.j(0.28),j,j,B.n(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new B.D(A.fZ,B.B(B.a([s,A.es,B.E(B.x(p,A.E,j,A.e,A.Q,0,A.p),1)],l),A.m,j,A.e,A.i,0,j,j),j))
i=k.x
if(i>0)m.push(B.bT(0,B.e_(B.ec(j,A.w.j(A.k.E(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=B.n(22)
m.push(B.bT(0,B.e_(B.c4(j,new B.o(j,j,B.L(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.bh),!0,j),0,0,0))
return new B.a4(w,v,new B.an(A.a_,j,A.ab,A.f,B.a([h,B.bT(0,B.c4(B.bx(q,new B.an(A.a_,j,A.ab,A.t,m,j),A.ap),new B.o(j,j,j,u,r,j,A.n),A.bh),0,0,0)],l),j),j)}}
C.bu6.prototype={
a4(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a3(r,-10,s,w)
u=d.a
J.bl(u.save())
u.translate(v.gbL().a,v.gbL().b)
d.io(0,0.35)
t=B.bK(A.I,(w- -10)*1.6,s-r)
$.S()
s=B.J()
s.sam(new B.a9(A.a5,A.a8,A.x,B.a([A.L,A.c.j(0.3),A.L],x.O),null,null).aA(0,t))
d.aQ(t,s)
u.restore()},
av(d){return d.b!==this.b}}
C.btC.prototype={
B(d){var w=null,v=B.n(22),u=B.a([D.bnL,D.aha],x.O),t=this.e,s=B.L(A.d.gI(t).j(0.4),A.r,1.2),r=B.a([new B.ac(0,A.G,A.w.j(0.5),A.kv,24)],x.V),q=B.n(22),p=A.d.gI(t)
return new B.a4(this.c,this.d,B.c4(B.bx(q,B.b4(B.at(B.X(A.jE,A.d.gI(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.bbx(p,w),A.aw),A.ap),new B.o(w,w,s,v,r,new B.a9(A.az,A.aE,A.x,u,w,w),A.n),A.bh),w)}}
C.bbx.prototype={
a4(d,e){var w,v,u,t,s,r,q,p
$.S()
w=B.J()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=d.a,r=0;r<u;r+=18){q=w.G()
s.drawLine.apply(s,[r,0,r,t,q])
q.delete()}for(p=0;p<t;p+=18){q=w.G()
s.drawLine.apply(s,[0,p,u,p,q])
q.delete()}u=e.ek(A.I)
$.S()
t=B.J()
t.b=A.a9
t.c=1.4
t.r=v.j(0.35).gp(0)
d.ad(u,30,t)},
av(d){return!1}}
C.aIE.prototype={
R(){return new C.aIF(new B.cx(null,x.A),null,null)}}
C.aIF.prototype={
gus(){var w,v=this,u=v.d
if(u===$){w=B.bm(null,D.by4,null,1,null,v)
w.cM(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
ga_g(){var w,v=this,u=v.e
if(u===$){w=B.bm(null,A.fY,null,1,null,v)
w.fo(0,!0)
v.e!==$&&B.bE()
v.e=w
u=w}return u},
gaya(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gc9E(){var w=this.w
if(w===$){w=B.C(this.a.c.d,x.G)
this.w=w}return w},
gaX7(){var w=this.x
if(w===$){w=B.C(this.a.c.e,x.Z)
this.x=w}return w},
gaXU(){var w=this.y
if(w===$){w=B.C(this.a.c.f,x.N)
this.y=w}return w},
gb8D(){var w=this.z
if(w===$){w=B.C(this.a.c.r,x.N)
this.z=w}return w},
Z(){this.a3()
var w=this.gus()
w.dh()
w.dT$.M(0,this.gczv())},
czw(){var w,v,u,t,s,r,q,p=this,o=p.gus().x
o===$&&B.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gaya().a){case 0:w=D.nF
break
case 1:w=D.uV
break
case 2:w=D.a4H
break
case 3:w=D.nF
break
case 4:w=D.dg9
break
case 5:w=D.uV
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.acx)r=0.09
else r=s===D.acy?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){G.dG(260+90*v,"",260,1.6,0.18,"tri")
u=D.c8h[v]
E.mm("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.Jn("bell",D.ch6,1400,0.35)}}p.ax=o},
t(){this.gus().t()
this.ga_g().t()
this.bzt()},
aeL(){var w=this
w.gus().cZr(0,B.dA(0,0,0,A.k.V(11e3/w.Q),0,0))
w.m(new C.f5B(w))},
cks(){this.gus().bR(0)
this.m(new C.f5A(this))},
aeK(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$aeK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gaXU(),s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
l.push(new B.au(new B.bb(q,A.b4,A.aO),$.aw()))}m=B.a([],m)
for(t=u.gb8D(),s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){p=t[r]
m.push(new B.au(new B.bb(p,A.b4,A.aO),$.aw()))}o=B.C(u.gaX7(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bV(I.m4,null,new C.f5z(u,l,m,o),t,!0,!0,!0,A.lP,!1,!1,x.H),$async$aeK)
case 2:l=B.C(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.T$=$.aw()
n.P$=0}return B.h(null,v)}})
return B.i($async$aeK,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gaya(),f=i.a.c,e=f.b,d=i.gc9E(),a0=new C.AS(g,e,f.c,d,i.gaX7(),i.gaXU(),i.gb8D())
f=B.ar(A.d.gI(d),A.d.gak(d),0.4)
f.toString
g=x.p
w=B.a([B.aH(h,h,h,h,B.X(i.at?A.ot:V.rT,A.ac,h,h,h,21),h,h,h,new C.f5J(i),h,h,h,h,"Sound",h),B.aH(h,h,h,h,D.bZU,h,h,h,i.gc9F(),h,h,h,h,"Edit words and pictures",h),B.aH(h,h,h,h,K.ox,h,h,h,new C.f5K(i,a1),h,h,h,h,"Share",h)],g)
v=B.a([B.cb(i.ga_g(),new C.f5L(i,a0),h),B.cu(new C.f5M(i,a0))],g)
u=i.as
t=u?i.gckr():i.gc9I()
u=u?D.bPn:A.rR
s=B.ar(A.d.gI(d),A.d.gak(d),0.4)
s.toString
t=B.B(B.a([B.aH(h,h,h,h,B.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.cc),B.E(B.cb(i.gus(),new C.f5N(i,a1,a0),h),1),B.aH(h,h,h,h,D.bWa,h,h,h,new C.f5O(i),h,h,h,h,"Replay",A.cc)],g),A.m,h,A.e,A.i,0,h,h)
s=i.Q
u=A.k.ac(s,1)
r=B.ar(A.d.gI(d),A.d.gak(d),0.4)
r.toString
s=E.iO(r,u+"x","Speed",2.5,0.4,new C.f5P(i),s)
u=B.a([],g)
for(q=0;q<6;++q){p=D.dqH[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=B.ar(A.d.gI(d),A.d.gak(d),0.4)
r.toString
u.push(new E.dX(p.b,o===p.a,new C.f5Q(i,p),p.c,r,h))}d=B.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.c8G[q]
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}m=A.d.gI(o).A(0,A.d.gI(n))?34:28
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}l=A.d.gI(o).A(0,A.d.gI(n))?34:28
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}k=A.d.gI(o).A(0,A.d.gI(n))?A.c:A.aV
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}j=new B.ay(k,A.d.gI(o).A(0,A.d.gI(n))?2.5:1,A.r,-1)
d.push(B.aA(h,B.p(h,h,A.f,h,h,new B.o(h,h,new B.bG(j,j,j,j),h,h,new B.a9(A.az,A.aE,A.x,n,h,h),A.a6),h,l,h,K.akH,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f5R(i,n),h,h,h,h,h,h,!1,A.a3))}return E.lx(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.er(new B.an(A.a_,h,A.b3,A.t,v,h),i.f),e,B.x(B.a([t,s,new E.fd(u,"STYLE",h),new E.fd(d,"THEME",h)],g),A.m,h,A.e,A.Q,0,A.p))},
bBw(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nF[r]
p=A.k.E((1-A.et.aw(0,A.k.E((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.E(p/1.5707963267948966,0,1)
q=D.nF[r]
n=q+0.12
m=A.k.E((a0-n)/(q+0.2-n),0,1)
n=D.nF[r]
q=n-0.01
q=A.k.E((a0-q)/(n+0.03-q),0,1)
n=B.dt()
l=n.a
l.$flags&2&&B.aj(l)
l[11]=0.0013
n.km(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nF[r]
h=i+0.1
if(A.k.E((a0-h)/(i+0.3-h),0,1)>0){i=D.nF[r]
h=i+0.1
h=A.k.E((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nF[r]
h=i+0.1
h=A.k.E((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cO(0,r*118,0,f,f,f,new B.kC(q,new B.iQ(n,f,A.b0,!0,f,new C.QL(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nF[r]
u=v-0.02
g=A.k.E((a0-u)/(v+0.1-u),0,1)
u=A.d.gI(w)
v=D.nF[r]
t=v+0.12
e.push(new B.cO(0,r*118-3-2,0,f,f,4,new B.mB(new C.bsK(u,g,1-A.k.E((a0-t)/(v+0.22-t),0,1),f),f,A.aw,f,f),f))}return new B.a4(a2,358,new B.an(A.a_,f,A.ab,A.f,e,f),f)},
bSl(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.uV[r]
p=A.qf.aw(0,A.k.E((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.uV[r]
m=q+0.15
l=A.k.E((a0-m)/(q+0.25-m),0,1)
m=D.uV[r]
q=m-0.03
q=A.k.E((a0-q)/(m+0.01-q),0,1)
m=B.dt()
k=m.a
k.$flags&2&&B.aj(k)
k[11]=0.0011
m.k0(n,n,n,1)
m.fM(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new C.QL(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dt()
k.fM(3.141592653589793)
k=new B.iQ(k,f,A.A,!0,f,new C.btC(a2,108,w,f),f)}e.push(new B.cO(0,r*130,0,f,f,f,new B.kC(q,new B.iQ(m,f,A.A,!0,f,k,f),f),f))}return new B.a4(a2,378,new B.an(A.a_,f,A.ab,A.f,e,f),f)},
cEA(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a4H[w]
l.push(A.cu.aw(0,A.k.E((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bT(0,B.b4(n,n,n,new C.bwb(d.d,l,D.azt,m,C.bt6(e,0.4,0.62),f,C.bt6(e,0.45,0.7),n),A.aw),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.h8W(g,w)
q=D.azt[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cO(r,s-q*m*p+12,n,n,t,n,new B.kC(o,B.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.h8W(g,w)
r=D.a4H[w]
q=r+0.15
v.push(new B.cO(s,l,n,n,t,n,new B.kC(A.k.E((e-q)/(r+0.25-q),0,1),new B.y(u[w],n,A.VB,n,A.K,n,n,n,n,n,n,n),n),n))}return new B.a4(g,m+90,new B.an(A.a_,n,A.ab,A.f,v,n),n)},
bHM(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cu.aw(0,C.bt6(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bT(0,B.at(B.dR(B.b4(f,f,f,new C.bs9(A.d.gI(a1),C.bt6(a3,0,0.2),a4,f),new B.av(a5*0.95,70)),D.eiD),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.k.E((a3-l)/(0.12+m-l),0,1)
j=A.dw.aw(0,A.k.E((o-0.7)/0.3,0,1))
l=B.dt()
m=l.a
m.$flags&2&&B.aj(m)
m[11]=0.001
l.fM(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.k0(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.k.F(r,1):-1
w.push(new B.z(o,new B.cO(0,0,0,0,f,f,new B.cf(A.A,f,f,new B.kC(k*(0.45+0.55*o),B.dR(new B.iQ(l,f,A.A,!0,f,new C.QL(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.u(n*a5*0.34,-o*18)),f),f),f)))}A.d.aX(w,new C.f5s())
A.d.v(a0,new B.N(w,new C.f5t(),x.fR))
return new B.a4(a5,330,new B.an(A.a_,f,A.ab,A.f,a0,f),f)},
c9D(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.uV[q]
o=A.k.E((a2-p)/(p+0.22-p),0,1)
n=A.lw.aw(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.uV[q]
m=A.k.E((a2-m)/(m+0.02-m),0,1)
l=D.aBA[q]
k=B.dt()
k.mV(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.k0(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.uV[q]
g=h+0.1
g=A.k.E((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cO(0,0,0,0,e,e,new B.cf(A.A,e,e,new B.kC(m,B.dR(new B.iQ(k,e,A.A,!0,e,new C.QL(d,92,w,p,j,i,0,g*s,h,e),e),new B.u(0,l)),e),e),e))
l=D.uV[q]
h=l+0.02
f=A.k.E((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cO(0,0,0,0,e,e,new B.cf(A.A,e,e,B.dR(new B.mB(new C.bcc(w,f,q,e),e,new B.av(r,212),e,e),new B.u(0,D.aBA[q])),e),e))}return new B.a4(a4,330,new B.an(A.a_,e,A.ab,A.f,a0,e),e)},
bEr(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.u(-b0,-150),new B.u(b0,-40),D.eiH],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nF[r]
p=A.k.E((a8-q)/(q+0.2-q),0,1)
o=A.cu.aw(0,p)
q=D.aBL[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.nF[r]
f=g+0.2
e=A.k.E((a8-f)/(g+0.3-f),0,1)
f=D.nF[r]
g=f-0.01
g=A.k.E((a8-g)/(f+0.03-g),0,1)
f=B.dt()
d=f.a
d.$flags&2&&B.aj(d)
d[11]=0.001
f.mV(l*h+D.dkl[r]*o)
f.fM(l*0.9)
h=0.55+0.45*o
f.k0(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cO(0,0,0,0,a3,a3,new B.cf(A.A,a3,a3,new B.kC(g,B.dR(new B.iQ(f,a3,A.A,!0,a3,new C.QL(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.u(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nF[r]
i=q+0.17
a2=A.k.E((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aBL[r]
a6.push(new B.cO(0,0,0,0,a3,a3,new B.cf(A.A,a3,a3,B.dR(new B.mB(new C.bsb(A.d.gI(w),a2,a3),a3,new B.av(a4,30),a3,a3),new B.u(0,q+48-4)),a3),a3))}}return new B.a4(b0,330,new B.an(A.a_,a3,A.ab,A.f,a6,a3),a3)}}
C.bsK.prototype={
a4(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a3(w-v,0,w+v,e.b)
q=B.br(u,A.ht)
$.S()
t=B.J()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.z=N.oE
d.az(q,t)
t=B.br(u,A.ht)
q=B.J()
q.r=A.c.j(s).gp(0)
d.az(t,q)},
av(d){return d.c!==this.c||d.d!==this.d}}
C.bs9.prototype={
a4(d,e){var w,v,u=this.c,t=B.bK(e.ek(A.I),e.b*u,e.a*u)
$.S()
u=B.J()
u.b=A.a9
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=U.IM
d.dQ(t,u)
u=B.J()
u.b=A.a9
u.c=2.5
u.r=w.j(0.7).gp(0)
d.dQ(t,u)
u=t.cr(-14)
v=B.J()
v.b=A.a9
v.c=1
v.r=w.j(0.3).gp(0)
d.dQ(u,v)},
av(d){return!0}}
C.bcc.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.ek(A.I),f=this.c,e=A.cu.aw(0,f)
$.S()
w=B.J()
w.b=A.a9
v=1-f
w.c=5*v
u=this.b
w.r=A.d.gI(u).j(0.6*v).gp(0)
d.ad(g,40+e*a0.a*0.42,w)
t=new B.e6()
t.cZ(this.d*17+3)
for(w=d.a,s=40*f*f*3,r=g.a,q=g.b,f=1-f*0.6,p=0;p<26;++p){o=t.ag()*3.141592653589793*2
n=(40+t.ag()*110)*e
m=Math.cos(o)
l=Math.sin(o)
k=t.ag()
j=new B.ao(A.P,A.M,A.S,A.T,A.R)
i=(p&1)===0?A.d.gI(u):A.c
j.r=i.j(A.k.E(v,0,1)).gp(0)
h=j.G()
w.drawCircle(r+m*n*1.6,q+(l*n+s),(2+k*3)*f,h)
h.delete()}},
av(d){return!0}}
C.bsb.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.ek(A.I)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=A.k.E(s-r*0.18,0,1)
if(q<=0)continue
p=B.bK(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.S()
o=new B.ao(A.P,A.M,A.S,A.T,A.R)
o.b=A.a9
o.c=2
o.r=u.j((1-q)*0.7).gp(0)
n=o.G()
t.drawOval(B.bH(p),n)
n.delete()}},
av(d){return d.c!==this.c}}
C.bwb.prototype={
a4(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new B.a3(0,d0,0+c5,d0+60)
$.S()
d0=B.J()
w=c1.b
v=x.O
d0.sam(new B.a9(A.b0,A.b6,A.x,B.a([A.d.gI(w).j(0.18),A.L],v),c2,c2).aA(0,d1))
d2.aQ(d1,d0)
d0=B.J()
d0.r=A.c.j(0.18).gp(0)
d0.c=1
d2.bo(new B.u(0,c4),new B.u(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=C.h8W(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.S()
a3=new B.ao(A.P,A.M,A.S,A.T,A.R)
a3.r=A.w.j(0.5).gp(0)
a3.z=A.mX
a4=a3.G()
t.drawOval(B.bH(new B.a3(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new B.a3(d,a1,a3,a1+a0)
a6=new B.ao(A.P,A.M,A.S,A.T,A.R)
a7=B.ar(A.d.gI(w),A.c,0.1)
a7.toString
a6.sam(new B.a9(A.b0,A.b6,A.x,B.a([a7,A.d.gak(w)],v),c2,c2).aA(0,a5))
a4=a6.G()
t.drawRect(B.bH(a5),a4)
a4.delete()
a2=a2.r
a6=B.a([],n)
a8=new B.aF(a2,A.ag,c2,c2,a6)
a6.push(new B.aY(a3,a1))
a7=a3+c8
a9=a1+c9
a6.push(new B.aq(a7,a9))
a6.push(new B.aq(a7,m))
a6.push(new B.aq(a3,c4))
a6.push(new B.bt())
a6=new B.ao(A.P,A.M,A.S,A.T,A.R)
a6.r=B.ar(A.d.gak(w),A.w,0.5).gp(0)
a4=a6.G()
a6=a8.gbu().a.snapshot()
t.drawPath((a8.e=new B.cd(a6)).a,a4)
a4.delete()
a6=B.a([],n)
b0=new B.aF(a2,A.ag,c2,c2,a6)
a6.push(new B.aY(d,a1))
a6.push(new B.aq(d+c8,a9))
a6.push(new B.aq(a7,a9))
a6.push(new B.aq(a3,a1))
a6.push(new B.bt())
a2=new B.ao(A.P,A.M,A.S,A.T,A.R)
a2.r=B.ar(A.d.gI(w),A.c,0.45).gp(0)
a4=a2.G()
a2=b0.gbu().a.snapshot()
t.drawPath((b0.e=new B.cd(a2)).a,a4)
a4.delete()
b1=new B.ao(A.P,A.M,A.S,A.T,A.R)
b1.b=A.a9
b1.c=1
b1.r=A.c.j(0.28).gp(0)
a4=b1.G()
t.drawRect(B.bH(a5),a4)
a4.delete()
a4=b1.G()
a2=a8.e
t.drawPath((a2==null?a8.e=new B.cd(a8.gbu().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.G()
a2=b0.e
t.drawPath((a2==null?b0.e=new B.cd(b0.gbu().a.snapshot()):a2).a,a4)
a4.delete()
b2=A.k.bf(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=B.br(new B.a3(b7,a7,b7+r,b5),A.ht)
$.S()
b9=new B.ao(A.P,A.M,A.S,A.T,A.R)
b9.r=(b4?A.c.j(q):A.w.j(0.22)).gp(0)
a4=b9.G()
t.drawRRect(B.e7(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new B.a3(d,a1,a3,a1+28)
J.bl(t.save())
t.clipRect(B.bH(a5),$.mz()[1],!0)
$.S()
a1=new B.ao(A.P,A.M,A.S,A.T,A.R)
a1.sam(new B.a9(A.b0,A.b6,A.x,B.a([A.L,A.c.j(0.4),A.L],v),c2,c2).aA(0,c0))
a4=a1.G()
t.drawRect(B.bH(c0),a4)
a4.delete()
t.restore()}}},
av(d){return!0}}
C.aOq.prototype={
aV(){this.b2()
this.b1()
this.dK()},
t(){var w=this,v=w.b7$
if(v!=null)v.a5(0,w.gdF())
w.b7$=null
w.a1()}}
C.a10.prototype={
a6(){return"_Role."+this.b}}
C.qm.prototype={}
C.r6.prototype={}
C.CQ.prototype={}
C.ZY.prototype={}
C.afm.prototype={}
C.a1d.prototype={
gY(d){return this.d}}
C.D_.prototype={}
C.aci.prototype={}
C.acy.prototype={}
C.aet.prototype={}
C.biQ.prototype={
a3r(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
G.dG(d,"",e,g,h,f)},
b9I(d,e,f){return this.a3r(d,e,f,0,0.55)},
aCN(d,e,f,g){return this.a3r(d,e,f,0,g)},
b9J(d,e,f,g){return this.a3r(d,e,f,g,0.55)},
aa(d){var w=this
w.a.aa(0)
A.d.aa(w.b)
A.d.aa(w.c)
A.d.aa(w.d)
A.d.aa(w.e)
A.d.aa(w.f)
A.d.aa(w.r)
A.d.aa(w.w)
A.d.aa(w.x)
w.y.aa(0)
w.Q.aa(0)
w.as.aa(0)
w.aW()},
akR(d,e,f,g){var w="n"+this.ay++,v=new C.r6(w,e,f,g)
this.a.n(0,w,v)
this.aW()
return v},
t2(d,e,f){return this.akR(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bs(w.b,new C.dpg(e))
A.d.bs(w.c,new C.dph(e))
w.aW()},
bdz(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.mW.h(0,v.b).c===D.xv)return!1
w=this.b
if(A.d.b_(w,new C.dpd(d,e)))return!1
w.push(new C.CQ(d,e))
this.aW()
return!0},
c1B(d){var w
if(d.b==="beat")return D.chg[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.ap(500)
case 2:return 1400+w.ap(2200)
default:return 450+w.ap(2000)}},
aGp(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.aC0[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.D_(u,t,j.ax,90))
w.push(new C.D_(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ag()*3.141592653589793*2
v.push(new C.a1d(u,new B.u(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b9I(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ag()*3.141592653589793*2
p=100+w.ag()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ar(t,A.c,w.ag()*0.5)
m.toString
v.push(new C.a1d(u,new B.u(o*p,n*p),m,3+w.ag()*4.5,1000+w.ap(700),j.ax))}j.f.push(new C.D_(u,t,j.ax,120))
j.aCN(120,200,"noise",0.5)
j.b9I(261.63*Math.pow(2,([7,12,16,19][w.ap(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.D_(u,t,j.ax,230))
w.push(new C.D_(u,t,j.ax+160,160))
w.push(new C.D_(u,t,j.ax+320,100))
j.b9J(180+j.at.ap(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.aci(u,new B.u((w.ag()-0.5)*220,-260-w.ag()*180),t,j.ax))
j.b9J(300+w.ap(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ag()*3.141592653589793*2
j.w.push(new C.acy(u,u.a7(0,new B.u(Math.cos(q),Math.sin(q)).aJ(0,260+w.ag()*200)),t,j.ax))
j.a3r(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fP()
j.a3r(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.aet(u,D.aBn[v],t,j.ax))
j.aCN(261.63*Math.pow(2,([0,5,9,12][j.at.ap(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aCN(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.cdm[A.o.F(w,3)]
for(k=1;k<=3;++k)j.cuA(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gaf(j.b),v=new B.eR(w,new C.dpe(d));v.C();)j.aBi(w.gS(0),j.ax+D.cpI[A.o.F(g.d,4)])
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
case"chance":s=j.at.ap(100)<D.cGS[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gaf(j.b),v=new B.eR(w,new C.dpf(d));v.C();)j.aBi(w.gS(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.xg(w,0,v-700)},
cuA(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.ZY(e,"~"+d))},
aBi(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.afm(d.a,v,e,w))
u.push(new C.ZY(w,v))},
a7b(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=B.a6(w).k("b9<2>")
w=B.C(new B.b9(w,v),v.k("M.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aGp(r)
u.n(0,r,o.ax+o.c1B(s))}}w=o.c
v=B.T(w).k("Y<1>")
q=B.C(new B.Y(w,new C.dpi(o),v),v.k("M.E"))
if(q.length!==0){A.d.bs(w,new C.dpj(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.K)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b3(u,1)
for(u=A.d.gaf(v),r=new B.eR(u,new C.dpk(p));r.C();)o.aBi(u.gS(0),o.ax)}else o.aGp(u)}}A.d.bs(o.d,new C.dpl(o))
A.d.bs(o.e,new C.dpm(o))
A.d.bs(o.f,new C.dpn(o))
A.d.bs(o.w,new C.dpo(o))
A.d.bs(o.x,new C.dpp(o))
A.d.bs(o.r,new C.dpq(o))
o.aW()},
vt(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.e,v=w.length,u=1-1.6*e,t=120*e,s=0;s<v;++s){r=w[s]
q=r.a
p=r.b
o=p.a
p=p.b
r.a=new B.u(q.a+o*e,q.b+p*e)
r.b=new B.u(o*u,p*u+t)}n=j.cy.b-8
for(w=j.r,v=w.length,u=900*e,s=0;s<v;++s){m=w[s]
t=m.b
q=t.a
t=t.b+u
p=m.b=new B.u(q,t)
o=m.a
l=o.a+q*e
o=o.b+t*e
k=m.a=new B.u(l,o)
if(o>n){p=m.a=new B.u(l,n)
t=m.b=new B.u(q*0.9,-t*0.62)
q=p}else{q=k
t=p}q=q.a
if(q<10||q>j.cy.a-10)m.b=new B.u(-t.a*0.8,t.b)}},
ah(){var w,v,u,t,s,r,q,p,o,n,m=this.cy,l=m.a
if(l<=0)l=1
w=m.b
if(w<=0)w=1
m=B.a([],x.x)
for(v=this.a,v=new B.du(v,v.r,v.e),u=x.N,t=x.K;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(B.H(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=B.a([],x.E)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,B.K)(t),++o){n=t[o]
v.push(B.a([n.a,n.b],r))}return A.X.aq(B.H(["nodes",m,"edges",v],u,x.ew),null)},
U3(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.X.aN(0,d,null))
k.aa(0)
for(o=x.j,n=J.aX(o.a(J.r(w,"nodes"))),m=k.a;n.C();){v=n.gS(n)
u=B.w(J.r(v,"k"))
if(!D.mW.aj(0,u))continue
t=B.w(J.r(v,"id"))
m.n(0,t,new C.r6(t,u,new B.u(B.e3(J.r(v,"x"))*k.cy.a,B.e3(J.r(v,"y"))*k.cy.b),A.k.N(B.e3(J.r(v,"p")))))
s=B.ce(B.aL(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aX(o.a(J.r(w,"edges"))),n=k.b;o.C();){r=o.gS(o)
q=B.w(J.r(r,0))
p=B.w(J.r(r,1))
if(m.aj(0,q)&&m.aj(0,p))n.push(new C.CQ(q,p))}k.aW()
return!0}catch(l){return!1}},
cU0(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.aa(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.r6(n,r,new B.u(q*p.a,o*p.b),s))
l.aW()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bdz(w[m.a],w[m.b])}},
gY(d){return this.cy}}
C.Gm.prototype={}
C.Wu.prototype={
R(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aFC(new C.biQ(B.U(w,x.f3),v,u,t,s,r,q,p,o,B.U(w,n),B.U(w,n),B.U(w,n),B.U(w,n),A.cM,A.L,A.aw,$.aw()),A.bC,A.I,A.I,A.Y,null,null)}}
C.aFC.prototype={
adc(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$adc=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.az(),$async$adc)
case 6:q=n.k_(m.r(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new C.evx(s))
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
return B.i($async$adc,v)},
aa9(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$aa9=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new C.evm(s))
u=3
w=6
return B.b(B.az(),$async$aa9)
case 6:e.ar("Bool","ngmy_core_lab_coach_v1",!0)
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
return B.i($async$aa9,v)},
bNJ(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a6(n).k("b9<2>")
v=""+n.a+"|"+o.length+"|"+new B.b9(n,w).cG(0,0,new C.evo())+"|"+A.d.cG(o,0,new C.evp())
if(v===p.ch)return p.CW
u=new C.evs()
t=x.s
s=B.a([],t)
r=new C.evt(p,s,u)
for(n=new B.b9(n,w).gaf(0),w=new B.eR(n,new C.evq());w.C();){q=n.gS(0)
if(!A.d.b_(o,new C.evr(q)))s.push(B.w(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.d2(s,0,B.dz(5,"count",x.S),x.N).dq(0)},
Z(){var w,v=this
v.a3()
v.adc()
v.d.db=v.ay
w=v.pW(new C.evX(v))
w.fY(0)
v.e!==$&&B.aQ()
v.e=w},
t(){var w=this,v=w.as
if(v!=null)v.a2(0)
v=w.e
v===$&&B.c()
v.t()
v=w.d
v.T$=$.aw()
v.P$=0
w.byv()},
acJ(d){return this.c12(d)},
c12(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$acJ=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.az(),$async$acJ)
case 6:q=m.aS(l.r(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.U3(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aYj(A.d.gI(D.aAO))
if(s.c!=null)s.m(new C.evw())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$acJ,v)},
aYj(d){this.d.cU0(0,d.c,d.d)
this.Eu()},
Eu(){var w=this.as
if(w!=null)w.a2(0)
this.as=B.cD(A.lE,new C.evi(this))},
ayb(d){var w,v,u,t,s=this.d.a,r=B.a6(s).k("b9<2>")
s=B.C(new B.b9(s,r),r.k("M.E"))
r=B.T(s).k("dy<1>")
s=new B.dy(s,r)
s=new B.bS(s,s.gJ(0),r.k("bS<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
ciq(d){var w,v,u,t,s,r=this.d.a,q=B.a6(r).k("b9<2>")
r=B.C(new B.b9(r,q),q.k("M.E"))
q=B.T(r).k("dy<1>")
r=new B.dy(r,q)
r=new B.bS(r,r.gJ(0),q.k("bS<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c0R(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.du(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.mW.h(0,r.b).c===D.xv)continue
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
c9L(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hx0(new B.u(n.a+36,n.b+0),new B.u(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cCk(d){var w,v,u,t,s,r,q=this,p=q.ayb(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.eZ()
u=v.b
if(u==="button"){w.aGp(p)
return}if(q.r)return
t=D.mW.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.ra)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.aW()
q.Eu()
return}if(q.r)return
r=q.c9L(d)
if(r!=null){w=q.d
A.d.cz(w.b,r)
w.aW()
q.Eu()}},
cjJ(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.ciq(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.ayb(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aF(0,d)}},
cjK(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.aW()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.u(A.k.E(d.a+s.y.a,46,t.a-46),A.k.E(d.b+s.y.b,46,t.b-60))
s.at=!0
v.aW()}}},
b2G(){var w,v,u=this
if(u.z!=null){w=u.c0R(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bdz(v,w)}else v=!1
if(v){B.jQ()
u.Eu()}u.z=null
u.d.aW()}else if(u.x!=null){if(u.at)u.Eu()
u.x=null}},
adq(d){return this.c3Q(d)},
c3Q(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$adq=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.ayb(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jR()
p=t.c
p.toString
w=3
return B.b(B.bV(I.m4,null,new C.evz(q),p,!0,!0,!1,A.lP,!1,!1,x.y),$async$adq)
case 3:if(f===!0){r.W(0,s)
t.Eu()}case 1:return B.h(u,v)}})
return B.i($async$adq,v)},
c9J(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.t2(0,d,new B.u(v.a*(0.25+u.ag()*0.5),v.b*(0.2+u.ag()*0.55)))
B.eZ()
this.Eu()},
ahj(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ahj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bV(I.m4,null,new C.evB(),s,!0,!0,!0,A.lP,!1,!1,x.es),$async$ahj)
case 2:t=e
if(t!=null)u.aYj(t)
return B.h(null,v)}})
return B.i($async$ahj,v)},
aeM(d){var w=0,v=B.j(x.H),u=this,t
var $async$aeM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.ch(null,null,!0,null,new C.evl(),t,null,!0,!0,x.y),$async$aeM)
case 2:if(f===!0){u.d.aa(0)
u.Eu()}return B.h(null,v)}})
return B.i($async$aeM,v)},
B(d){var w=this,v=null,u=B.a([B.aiR(w.r?new B.bN(A.a5,v,v,new B.D(A.GQ,B.ht(D.bU3,D.fE3,new C.evV(w),v),v),v):w.c9M(),A.b5,A.iG),B.E(B.cu(new C.evW(w)),1)],x.p)
if(!w.r)u.push(w.cx3())
return B.c6(v,A.c2,B.bn(!0,B.x(u,A.m,v,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)},
bJr(){var w=null,v=new C.evn(),u=A.w.j(0.7),t=B.n(26),s=B.L(A.bv.j(0.5),A.r,1)
return B.bT(0,B.ec(B.at(B.p(w,B.cj(B.x(B.a([D.fPv,A.av,D.fXd,A.aB,v.$4(A.os,A.bv,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(Y.CH,A.cp,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.kp,A.c_,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.a1X,A.bs,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fWw,new B.bN(A.a8,w,w,B.bM(!1,D.fMB,w,w,!0,w,w,w,this.gbJk(),w,w),w)],x.p),A.E,w,A.e,A.Q,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),A.f,w,A.Xh,new B.o(I.m4,w,s,t,w,w,A.n),w,w,w,A.fm,Al.alV,w,w,w),w,w,w),u,!0),0,0,0)},
c9M(){var w=this,v=null,u=B.aH(v,v,v,v,A1.nB,v,v,v,new C.evH(w),v,v,v,v,v,v),t=w.a9B(A.P6,"How it works",new C.evI(w),!0),s=w.ay?A.ot:V.rT
return new B.D(D.bEX,B.B(B.a([u,D.bGw,t,w.a9B(s,"Sound",new C.evJ(w),!0),w.a9B(A.e5,"Ideas",w.gcnu(),!0),w.a9B(K.wq,"Clear",w.gc9K(w),!0),w.aP9(A.hp,"Show",new C.evK(w),!0,!0)],x.p),A.m,v,A.e,A.i,0,v,v),v)},
aP9(d,e,f,g,h){var w=null,v=h?A.bv:A.c.j(0.08),u=B.n(14),t=B.n(14),s=B.a([B.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new B.D(Ad.wf,B.aI(!1,A.a2,!0,u,B.aO(!1,t,!0,B.hf(new B.D(new B.Q(8,8,8,8),B.B(s,A.m,w,A.e,A.Q,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ai),w)},
a9B(d,e,f,g){return this.aP9(d,e,f,g,!1)},
cx3(){var w=null,v=new C.evD(this),u=A.c.j(0.08)
return B.p(w,B.cj(B.B(B.a([v.$2("START",D.xv),v.$2("CHANGE",D.EU),v.$2("REACT",D.ra)],x.p),A.E,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,A.aK),A.f,w,w,new B.o(I.Bs,w,new B.bG(new B.ay(u,1,A.r,-1),A.a0,A.a0,A.a0),w,w,w,A.n),w,w,w,w,D.bA1,w,w,w)},
cx4(d){var w,v,u,t,s=null,r=D.mW.h(0,d)
r.toString
w=B.n(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.L(v.j(0.5),A.r,1)
return new B.D(A.fv,B.aA(s,B.p(s,B.x(B.a([B.X(r.b,v,s,s,s,22),A.cS,B.d(r.a,s,1,A.a1,s,s,s,D.aV0,s,s,s)],x.p),A.m,s,A.e,A.Q,0,A.p),A.f,s,s,new B.o(s,s,t,w,s,new B.a9(A.b0,A.b6,A.x,u,s,s),A.n),s,s,s,s,A.hA,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.evC(this,d),s,s,s,s,s,s,!1,A.a3),s)}}
C.biR.prototype={
a4(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=b3.b,b6=b5.ax,b7=b8.a
J.bl(b7.save())
w=b5.ch
if(b6<w){v=(w-b6)/380
b7.translate(Math.sin(b6*0.09)*9*v,Math.cos(b6*0.13)*7*v)}$.S()
u=B.J()
u.r=A.c.j(0.05).gp(0)
for(w=b9.b,t=b9.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28){q=u.G()
b7.drawCircle(r,s,1,q)
q.delete()}p=b5.CW
if(b6<p){$.S()
o=B.J()
o.r=b5.cx.j(0.4*((p-b6)/800)).gp(0)
b8.aQ(new B.a3(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,B.K)(w),++m){l=w[m]
k=n.h(0,l.a)
j=n.h(0,l.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=j.c
f=g.a-36
g=g.b
e=$.S()
d=B.a([],o)
a0=new B.aF(e.r,A.ag,b4,b4,d)
d.push(new B.aY(h,i))
a1=Math.max(40,Math.abs(f-h)*0.5)
d.push(new B.kO(h+a1,i,f-a1,g,f,g))
a2=D.mW.h(0,k.b).d
a3=D.mW.h(0,j.b).d
e=new B.ao(A.P,A.M,A.S,A.T,A.R)
e.b=A.a9
e.c=3
e.d=A.by
d=B.a([a2.j(0.55),a3.j(0.55)],p)
g=B.rU(new B.u(h,i),new B.u(f,g))
e.sam(new B.a9(A.a5,A.a8,A.x,d,b4,b4).aA(0,new B.a3(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.G()
i=a0.gbu().a.snapshot()
b7.drawPath((a0.e=new B.cd(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,B.K)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.E((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=C.hx0(new B.u(i.a+36,i.b+0),new B.u(h.a-36,h.b),a5)
$.S()
h=new B.ao(A.P,A.M,A.S,A.T,A.R)
h.r=A.c.j(0.35).gp(0)
h.z=N.oE
q=h.G()
h=a6.a
i=a6.b
b7.drawCircle(h,i,8,q)
q.delete()
g=new B.ao(A.P,A.M,A.S,A.T,A.R)
g.r=A.c.gp(0)
q=g.G()
b7.drawCircle(h,i,4,q)
q.delete()}a7=b3.d.$0()
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.a7(0,D.Jo)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new B.aF($.S().r,A.ag,b4,b4,B.a([],o))
o=a8.b
a0.D(new B.aY(t,o))
i=a9.b
a0.D(new B.kO(t+a1,o,w-a1,i,w,i))
i=B.J()
i.b=A.a9
i.c=3
i.r=A.c.j(0.7).gp(0)
b8.aK(a0,i)
i=B.J()
i.r=A.c.gp(0)
b8.ad(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,B.K)(w),++m){b0=w[m]
o=b0.c
v=A.k.E((b6-o)/700,0,1)
if(b6<o)continue
o=b0.a
i=A.dU.aw(0,v)
$.S()
h=new B.ao(A.P,A.M,A.S,A.T,A.R)
h.b=A.a9
g=1-v
h.c=3.5*g+0.5
h.r=b0.b.j(g*0.9).gp(0)
q=h.G()
b7.drawCircle(o.a,o.b,14+b0.d*i,q)
q.delete()}for(w=b5.w,t=w.length,m=0;m<w.length;w.length===t||(0,B.K)(w),++m){b1=w[m]
v=A.k.E((b6-b1.d)/600,0,1)
o=b1.a
i=b1.b
h=B.kB(o,i,A.dU.aw(0,v))
h.toString
i=B.kB(o,i,A.dU.aw(0,A.k.E(v-0.35,0,1)))
i.toString
$.S()
o=new B.ao(A.P,A.M,A.S,A.T,A.R)
o.c=5
o.d=A.by
g=b1.c
f=B.a([g.j(0),g],p)
e=B.rU(i,h)
o.sam(new B.a9(A.a5,A.a8,A.x,f,b4,b4).aA(0,new B.a3(e.a-4,e.b-4,e.c+4,e.d+4)))
q=o.G()
o=h.a
h=h.b
b7.drawLine.apply(b7,[i.a,i.b,o,h,q])
q.delete()
i=new B.ao(A.P,A.M,A.S,A.T,A.R)
i.r=A.c.gp(0)
q=i.G()
b7.drawCircle(o,h,6,q)
q.delete()
i=new B.ao(A.P,A.M,A.S,A.T,A.R)
i.r=g.j(0.5*(1-v)).gp(0)
i.z=A.kR
q=i.G()
b7.drawCircle(o,h,12,q)
q.delete()}for(w=b5.e,t=w.length,m=0;m<w.length;w.length===t||(0,B.K)(w),++m){a4=w[m]
v=A.k.E((b6-a4.f)/a4.e,0,1)
o=a4.a
$.S()
i=new B.ao(A.P,A.M,A.S,A.T,A.R)
i.r=a4.c.j(1-v).gp(0)
q=i.G()
b7.drawCircle(o.a,o.b,a4.d*(1-0.5*v),q)
q.delete()}for(w=b5.r,t=w.length,m=0;m<w.length;w.length===t||(0,B.K)(w),++m){j=w[m]
o=j.a
$.S()
i=new B.ao(A.P,A.M,A.S,A.T,A.R)
h=j.c
i.r=h.j(0.35).gp(0)
i.z=A.kR
q=i.G()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new B.ao(A.P,A.M,A.S,A.T,A.R)
i.sam(new B.c_(A5.xy,0.5,A.x,b4,0,B.a([A.c,h],p),b4,b4).aA(0,B.bX(j.a,8)))
q=i.G()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,B.K)(b5),++m){a6=b5[m]
v=A.k.E((b6-a6.d)/1000,0,1)
t=1-v
b2=C.biS(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a4(b8,new B.u(t.a-o/2,t.b-(40+60*v+p.gba(p)/2)))}for(b5=new B.du(n,n.r,n.e);b5.C();)b3.cjh(b8,b5.d,b6)
b7.restore()},
cjh(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.mW.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.E(1-(f-w)/520,0,1)
u=B.bK(e.c,64,64)
t=B.br(u,A.ih)
s=t.eP(A.cy)
$.S()
r=B.J()
r.r=A.w.j(0.55).gp(0)
r.z=A.mX
d.az(s,r)
if(v>0){s=t.cr(6)
r=B.J()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.zN
d.az(s,r)}s=t.eP(A.cI)
r=B.J()
q=h.d
r.r=B.ar(q,A.w,0.65).gp(0)
d.az(s,r)
r=B.J()
s=B.ar(q,A.c,0.18+0.4*v)
s.toString
p=B.ar(q,A.w,0.35)
p.toString
r.sam(new B.a9(A.b0,A.b6,A.x,B.a([s,p],x.O),j,j).aA(0,u))
d.az(t,r)
r=B.J()
r.b=A.a9
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.az(t,r)
r=h.b
p=e.c
o=C.biS(B.lw(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a4(d,p.aF(0,new B.u(s/2,r.gba(r)/2)))
n=C.biS(h.a,11,A.c,j,j,A.H)
n.a4(d,e.c.a7(0,new B.u(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.aBn[A.o.F(e.d,6)]:j
h=h.c
if(h===D.ra){s=e.c.a7(0,new B.u(0,62))
r=B.J()
r.r=D.aC0[A.o.F(e.d,6)].gp(0)
d.ad(s,5,r)}else if(m!=null){l=C.biS(m,9.5,A.aC,j,j,A.U)
l.a4(d,e.c.a7(0,new B.u(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.biS(m,9.5,A.aC,j,j,A.U)
l.a4(d,e.c.a7(0,new B.u(-l.b.c/2,54)))}if(k.c)return
if(h!==D.xv)k.b3r(d,e.c.aF(0,D.Jo),q)
k.b3r(d,e.c.a7(0,D.Jo),q)},
b3r(d,e,f){var w
$.S()
w=B.J()
w.r=A.c2.gp(0)
d.ad(e,9,w)
w=B.J()
w.b=A.a9
w.c=2.2
w.r=f.gp(0)
d.ad(e,9,w)
w=B.J()
w.r=A.c.gp(0)
d.ad(e,3.5,w)},
av(d){return!0}}
C.aNz.prototype={
t(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
C.ek.prototype={}
C.tR.prototype={
arn(d,e,f,g){var w=this
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
C.aaZ.prototype={}
C.ac4.prototype={}
C.a57.prototype={
bfm(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.h9()?-1:1
v=t.ag()*3.141592653589793*2
u=f*(0.3+t.ag())
s.push(new C.aaZ(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ag()*0.45));++r}},
c5Z(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bs(w,new C.bPa())},
akR(d,e,f,g){var w="p"+this.c++,v=new C.tR(w,e,f,g)
v.arn(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bs(this.b,new C.bPl(e))},
aa(d){A.d.aa(this.a)
A.d.aa(this.b)},
cKW(d,e,f,g,h){return A.d.b_(this.b,new C.bPg(e,f,g,h))},
alB(d,e,f,g){var w
if(d===f||this.cKW(0,d,e,f,g))return null
w=new C.ac4(d,e,f,g)
this.b.push(w)
return w},
aBP(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
zX(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
aoj(d){return this.Ma(d)&&!d.x&&d.cx>this.zX(d)},
b7O(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Ma(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
ca5(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.zM.h(0,v)
if(w!=null)return w.a
return 100},
vt(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c5Z(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.T(v).k("Y<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.K)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.Y(v,new C.bPm(a2),t).cG(0,0,new C.bPn(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.U(x.N,u)
n=new C.bPp(o)
m=B.a([],x.t)
l=new C.bPo(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.K)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.K)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.U(u,u)
f=new C.bPr(g,l,n)
for(u=v.length,s=0;t=v.length,s<t;v.length===u||(0,B.K)(v),++s){q=v[s]
f.$2(q,0)
f.$2(q,1)}e=g.a
if(e===0)return
s=0
for(;;){if(!(s<t)){d=0
break}q=v[s]
u=q.b
if(u==="battery"||u==="solar"||u==="crank"||u==="turbine"){d=f.$2(q,1)
break}++s}for(u=v.length,s=0;s<u;++s)v[s].CW=0
a2.b7K(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.zX(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b7K(e,d,w,!0)
a2.bQ1(a4)},
b7K(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.U(x.N,b3),b5=new C.bPc(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bPb(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.K)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bPe(B.U(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.K)(w),++u){t=w[u]
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
if(h)B.ba(B.dM(g,null))
e=B.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=B.bZ(b7,0,!1,b3)
a0=B.bZ(b7,0,!1,b3)
k.aa(0)
j.aa(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.K)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b7O(t)*(1+t.CW))
a4=b2.aBP(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.ca5(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bTk(e,a0,b8)
if(!c0)break
for(a1=w.length,a8=!1,u=0;u<w.length;w.length===a1||(0,B.K)(w),++u){t=w[u]
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
c0=!0}for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.K)(w),++u){t=w[u]
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
bTk(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return B.bZ(d,0,!1,x.i)
u=B.a([],x.b)
for(t=a0.length,s=x.n,r=0;r<a0.length;a0.length===t||(0,B.K)(a0),++r){q=a0[r]
p=B.a([],s)
for(o=a0.length,n=0;n<a0.length;a0.length===o||(0,B.K)(a0),++n){m=a0[n]
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
bQ1(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.K)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aBP(o)/a1.b7O(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.zX(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bI4(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bfm(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.u9(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
l=o.fr
j=Math.abs(m*l)
i=Math.abs(l)
if((n==="buck"||n==="regulator")&&!o.x){m=n==="regulator"
h=m?5:o.e
if(i<0.002)o.cy=A.k.E(o.db-h,0,24)
else o.cy=A.k.E(o.cy+(o.dx-h)*0.7,0,24)
l=o.db
g=l>h+0.2&&Math.abs(o.dx-h)<0.35?1:0
o.fx=g
o.ax=g>0?o.ax+a2:0
if(l>26)a1.u9(o,"The "+$.qA().h(0,n).b+" got "+A.k.ac(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.u9(o,"More than 1.5 amps went through the "+$.qA().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.u9(o,"The regulator had to turn "+A.k.ac(o.cy,1)+" V into heat while "+A.k.V(i*1000)+" mA flowed. That is "+A.k.ac(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.u9(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.zM.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qA().h(0,n).b
l=f.b
l=l===A.k.jo(l)?""+A.k.V(l):B.w(l)
g=f.c
g=g===A.k.jo(g)?""+A.k.V(g):B.w(g)
a1.u9(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.ac(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.f7T.q(0,n)){m=o.fx>0?A.k.E((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.k.E(j/0.9,0,1)
if(!o.x&&j>2.4)a1.u9(o,"The bulb got "+A.k.ac(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.k.E((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.u9(o,"The LED had "+A.k.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.k.E(j/14,0,1)
break
case"motor":n=A.k.E(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.k.E(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.u9(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.k.E(i/1,0,1)
if(!o.x&&i>1)a1.u9(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.u9(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.k.E(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.u9(o,"The capacitor was charged to "+A.k.ac(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bI4(d){return A.d.b_(this.a,new C.bP9(d))},
u9(d,e){var w
d.x=!0
d.ay=e
this.bfm(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bk2(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.aa(0)},
aI7(d){var w=d.b
return D.aRT.q(0,w)||D.zM.aj(0,w)||w==="buck"||w==="regulator"},
bgO(d){var w,v=!0
if(!this.Ma(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.zM.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
Vm(d,e){var w=this.b
return new B.Y(w,new C.bPt(d,e),B.T(w).k("Y<1>")).gJ(0)},
CM(d){var w,v
if(d.x)return!1
w=d.b
if(D.zM.aj(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
beT(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qA().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aI7(d)||i.CM(d))return null
w=i.Vm(d,0)
v=i.Vm(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.T(u).k("Y<1>")
s=B.C(new B.Y(u,i.gcTA(),t),t.k("M.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.jo(r)?""+A.k.V(r):B.w(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.ac(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.zM.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.Mn("battery"),o=J.aX(t.a),t=new B.eR(o,t.b);t.C();){n=o.gS(o)
if(n.e===1.5&&n.as<=0.02&&i.Vm(n,0)+i.Vm(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.Mn("switch"),o=J.aX(t.a),t=new B.eR(o,t.b);t.C();)if(!o.gS(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qA().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.zX(k))return"The "+$.qA().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.ac(k.cx,2)+" amps, but it can only give about "+A.k.ac(i.zX(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.b_(u,new C.bPh(i,d))
h=q.b
h=h===A.k.jo(h)?""+A.k.V(h):B.w(h)
u=A.k.ac(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.ac(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.ac(Math.abs(d.dy),1)+" V). Try a bigger battery."},
Mn(d){var w=this.a
return new B.Y(w,new C.bPk(d),B.T(w).k("Y<1>"))},
aHM(d){return this.Mn(d).b_(0,new C.bPj(0.35))},
q5(d,e){return A.d.b_(this.a,new C.bPi(e))}}
C.ajo.prototype={
a4(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.S()
w=B.J()
w.r=F.y3.gp(0)
c0.aQ(new B.a3(0,0,b8,b9),w)
v=B.J()
v.r=A.c.j(0.06).gp(0)
for(w=c0.a,u=12;u<b6;u+=24)for(t=12;t<b7;t+=24){s=v.G()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b4.b,q=r.b,p=q.length,o=b4.f,n=0;n<q.length;q.length===p||(0,B.K)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-1:1
i=D.ml.aj(0,l.b)?(l.ch-1)*38:0
l=l.d
h=m.c
g=h.c
f=m.d===0?-1:1
e=D.ml.aj(0,h.b)?(h.ch-1)*38:0
b4.cHG(c0,new B.u(k*b6+j*(42+i),l*b7),new B.u(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=C.hK1(q.a,q.b,c1)
q=b4.e
q.toString
$.S()
p=B.J()
p.r=A.ac.gp(0)
p.c=3
p.d=A.by
c0.bo(d,q,p)}for(q=r.a,p=q.length,o=b4.c,l=b4.r,k=x.v,n=0;n<q.length;q.length===p||(0,B.K)(q),++n){a0=q[n]
j=a0.c*b6
i=a0.d*b7
if(a0.Q>0){h=Math.sin(r.d*30)
$.S()
g=new B.ao(A.P,A.M,A.S,A.T,A.R)
g.r=F.Yo.j(A.k.E(a0.Q*0.45,0,0.6)).gp(0)
g.z=A.zN
s=g.G()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.bl(w.save())
w.translate(j,i)
h=A.k.E(A.lw.aw(0,A.k.E(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.ckg(c0,a0,a0===o)
w.restore()
h=a0.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!a0.x&&a0.cx>r.zX(a0)){g=j+0
f=i+-40
e=Math.sin(r.d*10)
a2=$.S().r
a3=B.a([],k)
a4=new B.aF(a2,A.ag,b5,b5,a3)
a5=f-13
a3.push(new B.aY(g,a5))
a6=g+13
a7=f+10
a3.push(new B.aq(a6,a7))
a8=g-13
a3.push(new B.aq(a8,a7))
a3.push(new B.bt())
a3=new B.ao(A.P,A.M,A.S,A.T,A.R)
a3.r=A.ax.j(0.65+0.35*e).gp(0)
s=a3.G()
e=a4.gbu().a.snapshot()
w.drawPath((a4.e=new B.cd(e)).a,s)
s.delete()
e=B.a([],k)
a2=new B.aF(a2,A.ag,b5,b5,e)
e.push(new B.aY(g,a5))
e.push(new B.aq(a6,a7))
e.push(new B.aq(a8,a7))
e.push(new B.bt())
e=new B.ao(A.P,A.M,A.S,A.T,A.R)
e.b=A.a9
e.c=1.6
e.r=A.c.gp(0)
s=e.G()
e=a2.gbu().a.snapshot()
w.drawPath((a2.e=new B.cd(e)).a,s)
s.delete()
a9=new B.iH(new B.es("!",b5,b5,A.cL,b5,b5,b5,b5,b5,b5,new B.F(!0,A.c,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.bX,new B.jg(1),b5,b5,b5,b5,A.bV,b5)
a9.eg()
a9.a4(c0,new B.u(g+-3,f+-8))}if(!a0.x)g=(D.aRT.q(0,h)||D.zM.aj(0,h)||h==="buck"||h==="regulator")&&!r.CM(a0)&&r.Vm(a0,0)+r.Vm(a0,1)>0
else g=!1
if(g){j+=0
i+=-40
$.S()
g=new B.ao(A.P,A.M,A.S,A.T,A.R)
g.r=A.ay.gp(0)
s=g.G()
w.drawCircle(j,i,10,s)
s.delete()
a9=new B.iH(new B.es("!",b5,b5,A.cL,b5,b5,b5,b5,b5,b5,new B.F(!0,A.w,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.bX,new B.jg(1),b5,b5,b5,b5,A.bV,b5)
a9.eg()
a9.a4(c0,new B.u(j+-3,i+-8))}for(b0=0;b0<2;++b0){j=a0.c
i=b0===0
g=i?-1:1
f=D.ml.aj(0,h)?(a0.ch-1)*38:0
f=j*b6+g*(42+f)
g=a0.d*b7
$.S()
j=new B.ao(A.P,A.M,A.S,A.T,A.R)
j.r=F.y3.gp(0)
s=j.G()
w.drawCircle(f,g,7,s)
s.delete()
j=new B.ao(A.P,A.M,A.S,A.T,A.R)
j.b=A.a9
j.c=2.4
j.r=(i&&r.bgO(a0)?A.c0:A.ac).gp(0)
s=j.G()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.bgO(a0)){a9=new B.iH(new B.es("+",b5,b5,A.cL,b5,b5,b5,b5,b5,b5,new B.F(!0,A.c0,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a4,A.bX,new B.jg(1),b5,b5,b5,b5,A.bV,b5)
a9.eg()
a9.a4(c0,new B.u(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,B.K)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.E(b1.r/0.8,0,1)
j=B.ar(M.MX,F.Zv,b2)
j.toString
i=b1.f
$.S()
h=new B.ao(A.P,A.M,A.S,A.T,A.R)
h.r=j.gp(0)
h.c=2.4
h.d=A.by
s=h.G()
w.drawLine.apply(w,[l,k,l-b1.e*0.035,k-i*0.035,s])
s.delete()
i=new B.ao(A.P,A.M,A.S,A.T,A.R)
i.r=j.j(0.35*b2).gp(0)
i.z=A.IN
s=i.G()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.b_(q,new C.bJB())){b3=A.d.cG(q,0,new C.bJC())
$.S()
b7=B.J()
b7.r=D.bfl.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.aQ(new B.a3(0,0,b8,b9),b7)
a9=B.fy(b5,b5,b5,b5,D.fj_,A.a4,A.bX,b5,A.dA,A.bV)
a9.o1(b6-24)
a9.a4(c0,new B.u(12,10))}},
qJ(d,e,f,g,h){var w=null,v=B.fy(w,w,w,w,B.cT(w,w,w,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a4,A.bX,w,A.dA,A.bV)
v.eg()
v.a4(d,f)},
cHG(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new B.aF($.S().r,A.ag,null,null,B.a([],x.v))
d.D(new B.aY(a1.a,a1.b))
w=C.hCm(a1,a2,a3)
d.D(new B.c5(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ar(A.aT,F.Yo,A.k.E(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ar(A.aJ,A.aT,A.k.E(r*1.2,0,1))
u.toString
o=u}else o=A.bn
u=B.J()
u.b=A.a9
u.c=a4?7:5
u.d=A.by
s=a4?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
a0.aK(d,u)
u=B.J()
u.b=A.a9
u.c=2.4
u.d=A.by
u.r=(a4?A.c:o).gp(0)
a0.aK(d,u)
if(q){n=new B.Tj(new B.rs(B.xz(d),!1,B.a([],x.R))).gI(0)
m=40+A.k.E(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.ii()
i=t[u].b
i===$&&B.c()
if(!(j<i.a.length()/22))break
i=k.d
v.ii()
h=t[u].b
h===$&&B.c()
h=A.k.F(j*22+i*m*l,h.a.length())
v.ii()
i=t[u].b
i===$&&B.c()
i=i.a.length()
v.ii()
g=t[u].b
g===$&&B.c()
f=A.k.F(h+i,g.a.length())
v.ii()
i=t[u].Hh(f).a
h=new B.ao(A.P,A.M,A.S,A.T,A.R)
h.r=A.c.gp(0)
e=h.G()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
Pu(d,e,f,g){var w,v,u,t
$.S()
w=B.J()
v=g?A.b0:A.a5
u=g?A.b6:A.a8
t=B.ar(e,A.w,0.3)
t.toString
w.sam(new B.a9(v,u,A.x,B.a([e,f,e,t],x.O),A.If,null).aA(0,d))
return w},
axn(d,e,f){return this.Pu(d,e,f,!0)},
c5z(d,e){return this.Pu(d,A.bn,A.iA,e)},
air(d,e){var w,v,u
$.S()
w=B.J()
w.sam(D.aQe.aA(0,B.bX(e,4.2)))
d.ad(e,4.2,w)
w=e.a7(0,D.elb)
v=e.a7(0,D.elk)
u=B.J()
u.r=A.e9.gp(0)
u.c=1.2
d.bo(w,v,u)},
ckg(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.S(),c0=B.J()
c0.sam(D.c3Y.aA(0,D.f4u))
c0.c=3.4
c0.d=A.by
w=B.J()
w.r=A.w.j(0.45).gp(0)
w.z=N.oE
c1.dQ(D.f4i,w)
if(c3){w=B.br(D.f4s,A.jJ)
v=B.J()
v.r=A.c.j(0.14).gp(0)
c1.az(w,v)}u=C.hhW(c2)
c1.bo(new B.u(-u,0),D.emM,c0)
c1.bo(D.ejQ,new B.u(u,0),c0)
t=c2.x
w=c2.b
s=D.ml.aj(0,w)&&c2.ch!==1
if(s){J.bl(c1.a.save())
c1.bW(0,c2.ch)}switch(w){case"battery":b3.bER(c1,c2)
break
case"solar":r=B.br(D.f4l,A.ii)
c1.az(r,b3.Pu(new B.a3(r.a,r.b,r.c,r.d),A.dn,A.bO,!1))
b9=B.J()
w=B.ar(D.bjf,A.d3,0.25+0.55*c2.f)
w.toString
v=B.ar(D.bsp,A.mF,0.3+0.4*c2.f)
v.toString
b9.sam(new B.a9(A.az,A.aE,A.x,B.a([w,v],x.O),b4,b4).aA(0,D.a8S))
c1.aQ(D.a8S,b9)
q=B.J()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(b9=c1.a,p=1;p<6;++p){w=-34+p*68/6
o=q.G()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}for(p=1;p<4;++p){w=-18+p*9
o=q.G()
b9.drawLine.apply(b9,[-34,w,34,w,o])
o.delete()}for(p=0;p<6;++p){w=-34+(p+0.5)*68/6
$.S()
v=new B.ao(A.P,A.M,A.S,A.T,A.R)
v.r=A.cq.j(0.5).gp(0)
v.c=0.6
o=v.G()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}b9=new B.aF($.S().r,A.ag,b4,b4,B.a([],x.v))
b9.D(new B.aY(-34,18))
b9.D(new B.aq(-6+40*c2.f,-18))
b9.D(new B.aq(4+40*c2.f,-18))
b9.D(new B.aq(-24,18))
b9.D(new B.bt())
w=B.J()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.aK(b9,w)
w=c2.f
b9=B.J()
b9.r=A.dB.j(0.9).gp(0)
c1.ad(D.ejW,4+4*w,b9)
break
case"crank":n=B.br(D.f46,A.fE)
c1.az(n,b3.axn(new B.a3(n.a,n.b,n.c,n.d),A.bt,A.bL))
b9=B.J()
b9.sam(D.aQf.aA(0,B.bX(A.I,12)))
c1.ad(A.I,12,b9)
m=new B.u(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=B.J()
b9.r=A.cq.gp(0)
b9.c=5
b9.d=A.by
c1.bo(A.I,m,b9)
b9=B.J()
b9.sam(D.ewg.aA(0,B.bX(m,7)))
c1.ad(m,7,b9)
b3.air(c1,D.emE)
b3.air(c1,D.ejF)
break
case"turbine":b9=b9.r
w=x.v
v=new B.aF(b9,A.ag,b4,b4,B.a([],w))
v.D(new B.aY(-3,24))
v.D(new B.aq(3,24))
v.D(new B.aq(1.5,0))
v.D(new B.aq(-1.5,0))
v.D(new B.bt())
l=B.J()
l.r=A.bO.gp(0)
c1.aK(v,l)
for(v=c1.a,k=0;k<3;++k){l=c2.y
J.bl(v.save())
v.rotate((l+k*2.094)*180/3.141592653589793,0,0)
l=B.a([],w)
j=new B.aF(b9,A.ag,b4,b4,l)
l.push(new B.aY(0,-2))
l.push(new B.c5(6,-14,2,-30))
l.push(new B.c5(-2,-14,0,-2))
l.push(new B.bt())
l=new B.ao(A.P,A.M,A.S,A.T,A.R)
l.r=A.c.gp(0)
o=l.G()
l=j.gbu().a.snapshot()
v.drawPath((j.e=new B.cd(l)).a,o)
o.delete()
v.restore()}b9=B.J()
b9.sam(D.evY.aA(0,B.bX(A.I,4.5)))
c1.ad(A.I,4.5,b9)
break
case"switch":n=B.br(D.f4d,A.n_)
b9=B.J()
b9.sam(D.asi.aA(0,new B.a3(n.a,n.b,n.c,n.d)))
c1.az(n,b9)
b3.air(c1,D.TC)
b3.air(c1,D.aL1)
i=c2.w?D.aL1:H.aKT
b9=B.J()
b9.r=A.au.gp(0)
b9.c=6
b9.d=A.by
c1.bo(D.TC,i,b9)
b9=B.J()
b9.r=(c2.w?A.ba:A.bO).gp(0)
b9.c=4
b9.d=A.by
c1.bo(D.TC,i,b9)
b9=B.kB(D.TC,i,0.85)
b9.toString
w=B.J()
w.r=A.ax.gp(0)
c1.ad(b9,5,w)
break
case"fuse":h=B.br(D.aQY,D.aQj)
b9=B.J()
b9.r=A.fl.j(0.25).gp(0)
c1.az(h,b9)
b9=B.J()
b9.b=A.a9
b9.c=1.4
b9.r=A.aC.gp(0)
c1.az(h,b9)
if(!t){b9=B.J()
b9.c=1.6
b9.r=B.ar(A.bO,A.cG,c2.fx).gp(0)
c1.bo(D.aLl,D.aL_,b9)}else{b9=B.J()
b9.c=1.6
b9.r=A.bU.gp(0)
c1.bo(D.aLl,D.en7,b9)
b9=B.J()
b9.c=1.6
b9.r=A.bU.gp(0)
c1.bo(D.ekJ,D.aL_,b9)
b9=B.J()
b9.r=A.dL.gp(0)
c1.ad(A.I,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=B.bK(new B.u(M.hd[g]*22,0),20,9)
w=B.br(f,A.hH)
o=b3.Pu(f,A.d0,A.o1,!0).G()
b9.drawRRect(B.e7(w),o)
o.delete()}break
case"pot":b9=B.J()
b9.sam(D.ew8.aA(0,B.bX(A.I,21)))
c1.ad(A.I,21,b9)
for(b9=c1.a,k=0;k<=10;++k){e=2.356194490192345+k*3.141592653589793*1.5/10
w=Math.cos(e)
v=Math.sin(e)
l=Math.cos(e)
j=Math.sin(e)
d=new B.ao(A.P,A.M,A.S,A.T,A.R)
d.r=A.aC.gp(0)
d.c=1.2
o=d.G()
b9.drawLine.apply(b9,[w*18,v*18,l*22,j*22,o])
o.delete()}b9=B.J()
b9.sam(D.evW.aA(0,B.bX(A.I,13)))
c1.ad(A.I,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
l=Math.sin(a0)
j=B.J()
j.r=A.aT.gp(0)
j.c=3
j.d=A.by
c1.bo(new B.u(b9*3,w*3),new B.u(v*12,l*12),j)
break
case"resistor":a1=B.br(D.aQY,D.aQj)
b9=B.J()
b9.sam(D.c7j.aA(0,new B.a3(a1.a,a1.b,a1.c,a1.d)))
c1.az(a1,b9)
b9=x.O
a2=B.H([47,B.a([B.b1(b5),B.b1(b6),A.w],b9),100,B.a([B.b1(b7),A.w,B.b1(b7)],b9),220,B.a([B.b1(b8),B.b1(b8),B.b1(b7)],b9),470,B.a([B.b1(b5),B.b1(b6),B.b1(b7)],b9),1000,B.a([B.b1(b7),A.w,B.b1(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(b9=c1.a,p=0;p<3;++p){w=-14+p*9
v=new B.ao(A.P,A.M,A.S,A.T,A.R)
v.r=a3[p].gp(0)
o=v.G()
b9.drawRect(B.bH(new B.a3(w,-9,w+4.5,9)),o)
o.delete()}b9=B.J()
b9.r=A.aT.gp(0)
c1.aQ(D.f4G,b9)
b9=c2.r
b3.qJ(c1,b9>=1000?"1k\u03a9":""+A.k.V(b9)+"\u03a9",D.em7,A.ac,10)
break
case"bulb":w=c2.fx
if(w>0){v=B.J()
v.r=A.dB.j(0.55*w).gp(0)
v.z=A.zN
c1.ad(H.vd,34,v)}n=B.bK(D.eiE,12,18)
c1.az(B.br(n,A.hH),b3.Pu(n,A.bn,A.e2,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new B.ao(A.P,A.M,A.S,A.T,A.R)
l.r=A.dm.gp(0)
l.c=1
o=l.G()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=B.J()
if(t)v=A.Mb
else{v=B.ar(A.e2,A.i2,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=A.FS
else{l=B.ar(A.dn,A.dB,c2.fx)
l.toString}w.sam(new B.c_(A.tB,0.5,A.x,b4,0,B.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).aA(0,B.bX(A.tb,17)))
c1.ad(A.tb,17,w)
w=B.J()
w.b=A.a9
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.ad(A.tb,17,w)
b9=b9.r
w=x.v
l=new B.aF(b9,A.ag,b4,b4,B.a([],w))
l.D(new B.aY(-9,-12))
l.D(new B.c5(-12,-4,-9,0))
v=B.J()
v.b=A.a9
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.aK(l,v)
v=B.J()
v.r=A.cY.gp(0)
v.c=1.4
c1.bo(D.en1,D.en3,v)
v=B.J()
v.r=A.cY.gp(0)
v.c=1.4
c1.bo(D.ekB,D.ekE,v)
w=B.a([],w)
a4=new B.aF(b9,A.ag,b4,b4,w)
a4.D(new B.aY(-4,-2))
for(k=0;k<6;k=a5){a5=k+1
b9=(k&1)===0?-6:1
b9=new B.aq(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.bx(v)
b9=a4.e
if(b9!=null)b9.a.delete()
a4.e=null}$.S()
b9=B.J()
b9.b=A.a9
b9.c=1.8
if(t)w=A.aS
else{w=B.ar(A.dn,D.bkg,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aK(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=B.J()
v.r=A.ax.j(0.6*w).gp(0)
v.z=D.dCj
c1.ad(A.tb,30,v)}w=B.J()
w.r=A.e2.gp(0)
w.c=2.4
c1.bo(D.en9,D.en8,w)
w=B.J()
w.r=A.e2.gp(0)
w.c=2.4
c1.bo(D.ekL,D.ekK,w)
b9=b9.r
w=x.v
a6=new B.aF(b9,A.ag,b4,b4,B.a([],w))
a6.D(new B.aY(-12,8))
a6.D(new B.aq(-12,-6))
a6.D(new B.c5(0,-26,12,-6))
a6.D(new B.aq(12,8))
a6.D(new B.bt())
v=B.J()
if(t)l=A.iF
else{l=B.ar(A.ek,D.bm_,c2.fx)
l.toString}if(t)j=A.kK
else{j=B.ar(A.jR,A.ax,c2.fx)
j.toString}v.sam(new B.a9(A.az,A.aE,A.x,B.a([l,j],x.O),b4,b4).aA(0,D.f3y))
c1.aK(a6,v)
v=B.J()
v.b=A.a9
v.c=1.2
v.r=A.jS.gp(0)
c1.aK(a6,v)
v=B.J()
v.r=A.el.gp(0)
c1.aQ(D.f3E,v)
w=new B.aF(b9,A.ag,b4,b4,B.a([],w))
w.D(new B.aY(-7,-4))
w.D(new B.c5(-6,-12,0,-15))
b9=B.J()
b9.b=A.a9
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.aK(w,b9)
break
case"motor":a7=new B.a3(-28,-14,20,14)
c1.az(B.br(a7,A.hI),b3.axn(a7,A.al,A.aN))
b9=B.J()
b9.r=A.cr.gp(0)
c1.aQ(D.f37,b9)
b9=B.J()
b9.r=A.cq.gp(0)
c1.aQ(D.f39,b9)
b9=c1.a
J.bl(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.bl(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=B.bK(H.aKO,15,7)
v=new B.ao(A.P,A.M,A.S,A.T,A.R)
v.r=A.cG.j(0.9).gp(0)
o=v.G()
b9.drawOval(B.bH(w),o)
o.delete()
b9.restore()}w=B.J()
w.r=A.au.gp(0)
c1.ad(A.I,3,w)
b9.restore()
b3.qJ(c1,"M",D.emD,A.au,14)
break
case"buzzer":a8=B.bK(A.I,42,42)
b9=B.J()
b9.sam(D.ewc.aA(0,a8))
c1.dQ(a8,b9)
b9=B.J()
b9.r=A.w.gp(0)
c1.ad(A.I,6,b9)
b9=B.J()
b9.b=A.a9
b9.c=1.4
b9.r=A.aV.gp(0)
c1.ad(A.I,6,b9)
b3.qJ(c1,"+",D.emw,A.ac,12)
for(b9=c1.a,w=b3.b,k=1;k<=3;++k){v=c2.fx
l=v>0?A.k.F(w.d*14,5):0
l=B.bX(A.I,24+k*5+l)
j=new B.ao(A.P,A.M,A.S,A.T,A.R)
j.b=A.a9
j.c=2
j.r=A.c_.j(v*(1-k*0.22)).gp(0)
o=j.G()
b9.drawArc.apply(b9,[B.bH(l),-40.10704565915762,80.21409131831524,!1,o])
o.delete()}break
case"heater":n=B.br(D.f49,A.hI)
w=B.J()
w.sam(D.c4X.aA(0,new B.a3(n.a,n.b,n.c,n.d)))
c1.az(n,w)
w=B.a([],x.v)
a9=new B.aF(b9.r,A.ag,b4,b4,w)
a9.D(new B.aY(-24,0))
for(k=0;k<8;k=a5){b9=(k&1)===0?-10:10
a5=k+1
b9=new B.c5(-24+k*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.bx(v)
b9=a9.e
if(b9!=null)b9.a.delete()
a9.e=null}b9=c2.fx
if(b9>0.1){$.S()
w=B.J()
w.b=A.a9
w.c=10
w.r=D.bl_.j(0.5*b9).gp(0)
w.z=A.kR
c1.aK(a9,w)}$.S()
b9=B.J()
b9.b=A.a9
b9.c=3.2
b9.d=A.by
b9.r=B.ar(A.m2,A9.G3,c2.fx).gp(0)
c1.aK(a9,b9)
break
case"capacitor":a7=new B.a3(-16,-22,16,18)
b9=B.br(a7,A.hI)
w=B.J()
w.sam(D.c3Q.aA(0,a7))
c1.az(b9,w)
w=B.J()
w.r=A.bO.gp(0)
c1.aQ(D.f3N,w)
for(p=0;p<4;++p){b0=new B.iH(new B.es("\u2212",b4,b4,A.cL,b4,b4,b4,b4,b4,b4,new B.F(!0,A.au,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a4,A.bX,new B.jg(1),b4,b4,b4,b4,A.bV,b4)
b0.eg()
b0.a4(c1,new B.u(-14,-18+p*9))}b1=new B.a3(-16,-24,16,-17)
c1.az(B.br(b1,A.hH),b3.c5z(b1,!1))
b9=38*c2.fx
w=18-b9
$.S()
v=B.J()
v.r=A.ba.j(0.5).gp(0)
c1.aQ(new B.a3(-3,w,11,w+b9),v)
b3.qJ(c1,"1F",H.vd,A.c,11)
break
case"radio":a1=B.br(D.a8S,A.fE)
b9=B.J()
b9.sam(D.c7z.aA(0,new B.a3(a1.a,a1.b,a1.c,a1.d)))
c1.az(a1,b9)
b9=B.J()
b9.b=A.a9
b9.c=1.4
b9.r=A.o1.j(0.6).gp(0)
c1.az(a1,b9)
b9=B.br(D.f4a,A.ii)
w=B.J()
w.r=A.dP.gp(0)
c1.az(b9,w)
for(b9=c1.a,p=0;p<6;++p){w=-10+p*4.4
v=new B.ao(A.P,A.M,A.S,A.T,A.R)
v.r=A.m2.gp(0)
v.c=1.4
o=v.G()
b9.drawLine.apply(b9,[-27,w,-3,w,o])
o.delete()}w=B.J()
w.r=(c2.fx>0?A.fU:A.o4).gp(0)
c1.aQ(D.f3e,w)
if(c2.fx>0){w=8+A.k.F(b3.b.d*7,18)
v=B.J()
v.r=A.bB.gp(0)
v.c=1.6
c1.bo(new B.u(w,-13),new B.u(w,-3),v)}w=B.J()
w.sam(D.aQf.aA(0,B.bX(D.a7Q,6)))
c1.ad(D.a7Q,6,w)
w=B.J()
w.r=A.o1.gp(0)
c1.ad(D.ejP,4,w)
w=B.J()
w.r=A.e2.gp(0)
w.c=1.8
c1.bo(D.ejK,D.aL6,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=B.bX(D.aL6,4+k*5+A.k.F(w.d*8,5))
l=new B.ao(A.P,A.M,A.S,A.T,A.R)
l.b=A.a9
l.c=1.4
l.r=A.o9.j(0.7).gp(0)
o=l.G()
b9.drawArc.apply(b9,[B.bH(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=B.br(D.f4k,A.hI)
v=B.J()
v.r=M.nl.gp(0)
c1.az(w,v)
b2=B.br(D.f4h,A.hH)
if(c2.fx>0&&!c2.x){b9=c1.a
J.bl(b9.save())
b9.clipRRect(B.e7(b2),$.nI(),!0)
b9.translate(-33,-21)
L.he_(c1,D.faG,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=B.J()
b9.r=A.ba.gp(0)
c1.ad(D.ek1,1.6,b9)}else{w=B.J()
w.r=D.w_.gp(0)
c1.az(b2,w)
b9=new B.aF(b9.r,A.ag,b4,b4,B.a([],x.v))
b9.D(new B.aY(-33,-21))
b9.D(new B.aq(-10,-21))
b9.D(new B.aq(-33,0))
b9.D(new B.bt())
w=B.J()
w.r=A.c.j(0.05).gp(0)
c1.aK(b9,w)}b9=B.J()
b9.r=A.bt.gp(0)
c1.aQ(D.f3D,b9)
break}C.imy(c1,c2,b3.b.d,b3.gca6())
if(t)b3.qJ(c1,"\u2716",D.enc,A.ax,14)
if(s)c1.a.restore()},
bER(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new B.a3(-28,-13,28,13)
d.az(B.br(w,A.n_),m.axn(w,A.dn,A.jg))
v=new B.a3(-22,-13,22,13)
$.S()
u=B.J()
u.sam(D.asb.aA(0,v))
d.aQ(v,u)
u=B.J()
u.r=A.dZ.gp(0)
d.aQ(D.f3X,u)
t=new B.a3(28,-5,34,5)
d.az(B.br(t,A.ht),m.Pu(t,A.dn,A.iA,!0))
m.qJ(d,"+",D.ejq,A.aT,11)
m.qJ(d,"\u2212",D.emF,A.ac,11)
m.qJ(d,B.w(l===A.k.jo(l)?A.k.V(l):l)+"V",D.eml,A.aT,13)
if(l===1.5){u=B.J()
u.r=A.bz.gp(0)
d.aQ(D.f3W,u)
u=e.as
s=B.J()
s.r=B.ar(A.ax,A.ba,u).gp(0)
d.aQ(new B.a3(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.qJ(d,"FLAT",D.em6,A.c0,9)}if(l>2){u=B.J()
u.r=A.aV.gp(0)
u.c=1
d.bo(D.eiN,D.aKH,u)
m.qJ(d,l>3?"3 cells":"2 cells",D.emk,A.aC,8)}}else if(l<=9){r=new B.a3(-22,-17,22,17)
u=B.br(r,A.n_)
$.S()
s=B.J()
s.sam(D.c76.aA(0,r))
d.az(u,s)
s=B.J()
s.r=A.cT.gp(0)
d.aQ(D.f3Y,s)
for(u=d.a,q=0;q<2;++q){p=F.aBK[q]
s=p<0?5:3.6
o=new B.ao(A.P,A.M,A.S,A.T,A.R)
o.sam(D.aQe.aA(0,B.bX(new B.u(p,-18),5)))
n=o.G()
u.drawCircle(p,-18,s,n)
n.delete()}m.qJ(d,"9V",D.emd,A.c,16)}else{r=new B.a3(-34,-16,34,16)
u=B.br(r,A.ii)
$.S()
s=B.J()
s.sam(D.asb.aA(0,r))
d.az(u,s)
s=B.J()
s.r=A.bs.gp(0)
d.aQ(D.f4j,s)
for(u=d.a,q=0;q<2;++q){s=B.br(B.bK(new B.u(F.Sc[q],-20),8,10),A.ht)
o=new B.ao(A.P,A.M,A.S,A.T,A.R)
o.r=A.cq.gp(0)
n=o.G()
u.drawRRect(B.e7(s),n)
n.delete()}m.qJ(d,"+",D.ejz,A.ax,10)
m.qJ(d,"12V",D.emh,A.au,15)}},
av(d){return!0}}
C.mS.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.aa(k)
A.d.aa(d.b)
w=B.U(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.K)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.tR(o,r,q,p)
n.arn(o,r,q,p)
k.push(n)
J.iA(s[4],new C.csh(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.K)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.alB(m,u[1],l,u[3])}}}
C.ajm.prototype={
R(){var w=x.N
return new C.ajn(A.I,A.aw,B.U(w,x.gl),B.aV(w),$,A.bC,0,B.a([],x.X),null,null)}}
C.ajn.prototype={
aeX(d){var w=this,v=w.as
if(v!=null)v.a2(0)
w.m(new C.bJf(w,d))
w.as=B.cD(A.lF,new C.bJg(w))},
t(){var w=this.as
if(w!=null)w.a2(0)
w=this.ch
if(w!=null)w.a2(0)
this.buB()},
a0E(d,e){return this.cib(d,e)},
b29(d){return this.a0E(d,!1)},
cib(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a0E=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.rE:A.yk
p=d.b
w=3
return B.b(L.hej(s,r,p,d.ax<3.2,q,$.qA().h(0,p).b),$async$a0E)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a0E,v)},
cuX(d){var w=this,v=new B.V(Date.now(),0,!1),u=w.at.c3(0,d.a,new C.bJh()),t=J.cF(u)
t.M(u,v)
t.bs(u,new C.bJi(v))
if(t.gJ(u)>=4){t.aa(u)
t=w.ch
if(t!=null)t.a2(0)
w.a1Z(d)
return}if(t.gJ(u)===3){t=w.ch
if(t!=null)t.a2(0)
w.ch=B.cD(A.iI,new C.bJj(w,u,d))}},
a0k(d){return this.cgy(d)},
cgy(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a0k=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return B.b(C.inJ(s,d.b,A.k.V(A.k.F(t.a.c.d*0.12,1)*100)),$async$a0k)
case 3:t.ay=!1
case 1:return B.h(u,v)}})
return B.i($async$a0k,v)},
a1Z(d){return this.csu(d)},
csu(d){var w=0,v=B.j(x.H),u=this,t
var $async$a1Z=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bV(F.mE,null,new C.bJd(u,d),t,!0,!0,!1,A.k7,!1,!1,x.H),$async$a1Z)
case 2:return B.h(null,v)}})
return B.i($async$a1Z,v)},
Z(){this.a3()
this.bgY()
this.ma()},
bgY(){this.a.c.e=new C.bJy(this)},
mt(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.vt(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
r=D.ml.h(0,s.b)
if((r==null?null:r.b)!==D.Ac)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.q(0,s.a)&&!q.ay){u.M(0,s.a)
q.a0E(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)G.dG(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)G.dG(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cM.ag()<0.5
else u=!1
if(u)G.dG(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){G.dG(900+A.cM.ap(800),"",90,0,0.1,o)
if(A.cM.ag()<0.35)G.dG(300+A.cM.ap(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cM.ag()<0.4
else u=!1
if(u)G.dG(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)G.dG(330+A.o.F(110*A.k.bf(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)G.dG((A.k.bf(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)G.dG(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)G.dG(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cM.ag()<0.5
else u=!1
if(u)G.dG(1200,"",30,0,0.07,o)
break
case"turbine":u=s.f
if(u>0.1)G.dG(80,"",150,0,0.05*u,o)
break
case"crank":u=s.f
if(u>0.15)G.dG(110+u*140,"",70,0,0.08,"saw")
break}}}w=q.a.w
if(w!=null)w.$0()
q.m(new C.bJz())},
b9b(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.K)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.ml.aj(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new B.z(p,n)
r=i}}}return s},
b2P(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.T(w).k("dy<1>"),w=new B.dy(w,v),w=new B.bS(w,w.gJ(0),v.k("bS<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.ml.aj(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cHH(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.K)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.ml.aj(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.ml.aj(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=C.hCm(new B.u(k,n),new B.u(i,l),p)
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
aeV(){this.a.toString
this.m(new C.bIJ())},
brj(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.da_[v]
if(!A.d.b_(p.a.c.a,new C.bJA(u,w))){o=new B.u(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?Q.Jq:o
s=s?Q.Jq:o
q=t.akR(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
G.dG(1200,"",50,0,0.3,"tri")
p.aeV()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.RZ[v].a)
u=w.length
t=u>8
s=t?A.d.du(w,0,A.o.ao(u+1,2)):w
r=t?A.d.fP(w,A.o.ao(w.length+1,2)):A.Y
q=n.a.d
if(q!=null){w=B.a6(q).k("cy<1>")
w=B.C(new B.cy(q,w),w.k("M.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.K)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b2F(s,!0))
n.a.toString
if(t)w.push(n.b2F(r,!0))
w.push(B.E(B.cu(new C.bJx(n,q,m)),1))
return B.x(w,A.m,null,A.e,A.i,0,A.p)},
b2F(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.K)(d),++v){u=d[v]
t=$.qA()
s=t.h(0,u).d.j(0.14)
r=new B.aP(14,14)
q=new B.ay(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.aA(p,B.p(p,B.x(B.a([new B.y(t.h(0,u).c,p,A.Av,p,p,p,p,p,p,p,p,p),new B.y(t.h(0,u).b,p,A.nL,p,p,p,p,A.a1,p,1,p,p)],n),A.m,p,A.b9,A.i,0,A.p),A.f,p,p,new B.o(s,p,new B.bG(q,q,q,q),new B.bg(r,r,r,r),p,p,A.n),p,p,p,I.mL,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bIK(this,u),p,p,p,p,p,p,!1,A.a3))}return B.p(p,B.ci(m,p,p,A.h6,p,p,A.aK,!1),A.f,p,p,new B.o(I.Bs,p,new B.bG(A.a0,A.a0,new B.ay(o,1,A.r,-1),A.a0),p,p,p,A.n),p,58,p,p,p,p,p,p)},
b02(d){var w=null,v=B.n(18)
return B.p(w,d,A.f,w,w,new B.o(F.aeZ,w,B.L(A.bz,A.r,1),v,w,w,A.n),w,w,w,w,F.al7,w,w,w)},
ckh(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qA().h(0,o),m=d.dy,l=d.fr,k=new C.bJ2(q,n),j=B.d(n.c,p,p,p,p,p,p,A.Kt,p,p,p),i=n.b,h=n.d,g=x.p
i=B.B(B.a([j,A.ad,B.E(B.d(i,p,p,p,p,p,p,B.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),B.aH(p,p,p,p,D.bVW,p,p,p,new C.bIQ(q,d),p,p,p,p,"Remove part",A.cc),B.aH(p,p,p,p,A.Pw,p,p,p,new C.bIR(q),p,p,p,p,p,A.cc)],g),A.m,p,A.e,A.i,0,p,p)
j=B.d(n.e,p,p,p,p,p,p,I.Ex,p,p,p)
w=B.d("How it is made: "+n.f,p,p,p,p,p,p,D.fs9,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.ac(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.ac(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.ac(Math.abs(m*l),2)+" watts"
m=B.a([i,j,A.av,w,A.am,B.d(m,p,p,p,p,p,p,B.l(p,p,d.x?A.c0:A.aT,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.beT(d)
if(v!=null){l=(d.x?A.ax:A.ay).j(0.14)
j=B.n(10)
i=B.L((d.x?A.ax:A.ay).j(0.5),A.r,1)
m.push(new B.D(A.i7,B.p(p,B.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.fyV,p,p,p),A.f,p,p,new B.o(l,p,i,j,p,p,A.n),p,p,p,p,A.ck,p,p,p),p))}if(C.hc3(o)){l=B.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new E.dX("CH "+t,d.at===u,new C.bIS(q,d,u),p,h,p))}l=B.bY(A.bG,l,A.br,p,4,6)
l=B.a([A.am,l,A.av,B.d(q.a.c.CM(d)?"Showing: "+F.Rz[A.o.F(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hu,p,p,p)],g)
if(q.a.c.CM(d))l.push(new E.fE(A.Hk,"Open big screen",new C.bIV(q,d),h,p))
A.d.v(m,l)}if(D.ml.aj(0,o)&&!C.hc3(o)){l=B.a([A.am,B.d(q.a.c.CM(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hu,p,p,p)],g)
if(q.a.c.CM(d))l.push(new E.fE(A.Pc,"Open the "+$.qA().h(0,o).b,new C.bIW(q,d),h,p))
A.d.v(m,l)}if(D.ml.aj(0,o))A.d.v(m,B.a([A.am,new E.fE(A.CB,"Make it bigger (or tap it 4 times)",new C.bIX(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.ac(d.db,1)
if(q.a.c.CM(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=B.a([A.am,B.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.ac(i,1)+" V",p,p,p,p,p,p,D.ft0,p,p,p)],g)
if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.ds9[s]
j=r===A.k.jo(r)?A.k.V(r):r
l.push(new E.dX(B.w(j)+" V out",d.e===r,new C.bIY(q,d,r),p,h,p))}i.push(new B.D(A.l8,B.bY(A.bG,l,A.br,p,0,6),p))}if(o==="regulator")i.push(D.fRQ)
A.d.v(m,i)}if(q.a.c.Ma(d)&&!d.x){l=A.k.ac(d.cx,2)
j=A.k.ac(q.a.c.zX(d),2)
i=q.a.c
w=i.aoj(d)?"   \u26a0 OVERLOADED":""
l=B.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,B.l(p,p,i.aoj(d)?A.c0:A.ep,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=B.n(4)
w=A.k.E(d.cx/q.a.c.zX(d),0,1)
i=q.a.c.aoj(d)?A.ax:A.ba
m.push(new B.D(A.i7,B.x(B.a([l,A.cS,B.bx(j,B.kk(A.bz,p,p,5,p,w,new B.lI(i,x.c)),A.ap)],g),A.E,p,A.e,A.i,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.D(A.i7,B.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.fmG,p,p,p),p))}if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.dh4[s]
j=r===1.5?"1.5 V (rechargeable)":B.w(r)+" V"
l.push(new E.dX(j,d.e===r,new C.bIZ(q,d,r),p,h,p))}m.push(B.bY(A.bG,l,A.br,p,0,6))}if(o==="resistor"){l=B.a([],g)
for(s=0;s<5;++s){r=D.d7d[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new E.dX(j,d.r===r,new C.bJ_(q,d,r),p,h,p))}m.push(B.bY(A.bG,l,A.br,p,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new C.bJ0(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new C.bJ1(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new C.bIT(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new C.bIU(d)))
if(o==="crank")m.push(D.fNa)
if(o==="switch")m.push(B.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hu,p,p,p))
return q.b02(new B.cU(D.b4N,B.cj(B.x(m,A.E,p,A.e,A.Q,0,A.p),A.t,p,A.y,p,p,p,p,A.ah),p))}}
C.bcz.prototype={}
C.VI.prototype={
R(){return new C.aEB(C.hhV(),new B.cx(null,x.q),B.aV(x.S))}}
C.aEB.prototype={
Z(){this.a3()
$.aW.c1$.push(this)
this.aeW()},
aeW(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fH6(),$async$aeW)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.imW(t.d,r)
if(s!=null){t.m(new C.dZO(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$aeW,v)},
Ff(){var w,v=this
if(!v.as)return
w=C.idm(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bFX(w)},
ji(d){if(d!==A.fK)this.Ff()},
t(){$.aW.hV(this)
this.Ff()
this.a1()},
ca8(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.T(v).k("Y<1>")
t=new B.Y(v,new C.dZX(q),u).gJ(0)
s=new B.Y(v,new C.dZY(),u).gJ(0)
r=new B.Y(v,w.gcXc(),u).gJ(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new C.dZZ(q,t,s,r))}if(A.o.F(q.w,45)===0)q.Ff()
if(A.o.F(q.w,10)===0){w=q.f
$.aiz()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.q(0,q.f)&&$.aiz()[q.f].c.$1(q.d)){w.M(0,q.f)
C.Jn("bell",B.a([0,4,7,12],x.t),700,0.45)
q.m(new C.e__())
q.Ff()
w=q.c
w.toString
w=B.Y1(w)
if(w!=null)w.U(B.b3(p,p,p,p,p,A.t,p,B.d("\u2705 Challenge done: "+$.aiz()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.m7,p,p,p,p,p,p,p,p,p,p))}},
ahF(){var w=0,v=B.j(x.H),u=this,t
var $async$ahF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.ch(null,null,!0,null,new C.dZN(u),t,null,!0,!0,x.H),$async$ahF)
case 2:return B.h(null,v)}})
return B.i($async$ahF,v)},
b01(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.n(12),t=B.L(f.j(0.45),A.r,1)
u=B.a([B.ap(w,B.p(w,B.X(d,f,w,w,w,18),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ap(w,h,w,w,w,-1,-3,w))
return B.aA(w,B.hf(new B.a4(40,38,new B.an(A.a_,w,A.ab,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a3)},
b00(d,e,f,g){return this.b01(d,e,f,g,null)},
as2(d,e,f,g){var w=null,v=f.j(0.1),u=B.n(10),t=B.L(f.j(0.4),A.r,1)
return B.E(B.aA(w,B.p(w,B.B(B.a([B.X(d,f,w,w,w,15),A.eg,new B.ds(1,A.cn,B.d(e,w,1,A.a1,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.b9,A.i,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a3),1)},
ag_(){var w=0,v=B.j(x.H),u=this,t
var $async$ag_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a5(t,!1).cc(B.ej(new C.dZJ(u),!1,null,x.H)),$async$ag_)
case 2:t=u.e.gbl()
if(t!=null)t.bgY()
if(u.c!=null)u.m(new C.dZK())
u.Ff()
return B.h(null,v)}})
return B.i($async$ag_,v)},
bHY(){var w,v,u,t,s=null,r=this.f
$.aiz()
if(r>=11)return s
w=this.r
v=w.q(0,r)
r=v?A.bf:A.ax
u=B.n(9)
t=B.L(I.Bs,A.r,1.5)
return B.p(s,B.at(B.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.xa,s,s,s),s,s,s),A.f,s,D.b4U,new B.o(r,s,t,u,s,s,A.n),s,s,s,s,A.f_,s,s,s)},
aiN(){var w=0,v=B.j(x.H),u=this,t
var $async$aiN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bV(F.mE,null,new C.dZW(u),t,!0,!0,!0,A.k7,!1,!1,x.H),$async$aiN)
case 2:return B.h(null,v)}})
return B.i($async$aiN,v)},
ca9(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.aA(r,B.p(r,D.bXb,A.f,r,r,new B.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e_1(d),r,r,r,r,r,r,!1,A.a3),o=B.n(11)
o=B.p(r,D.baG,A.f,r,r,new B.o(A.bo,r,B.L(A.aJ.j(0.45),A.r,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.p(r,B.x(B.a([B.B(B.a([p,A.ad,o,A.ad,B.E(B.x(B.a([D.fPR,B.d(w,r,1,A.a1,r,r,r,B.l(r,r,s.y>0||s.z>0?A.eO:A.hl,r,r,r,r,r,r,r,r,11.5,r,r,A.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.E,r,A.e,A.i,0,A.p),1),new C.ayA(s.gcgf(),r),A.tl,s.b00(A.wp,"Construction Lab: real 3D wiring, plumbing and a house",A.cG,new C.e_2(s,d)),s.b01(A.lI,"Challenges",A.aT,s.gcxw(),s.bHY()),s.b00(A.P6,"How to play",A.aJ,new C.e_3(d,e))],v),A.m,r,A.e,A.i,0,r,r),A.am,B.B(B.a([s.as2(A.on,"Circuits",A.bq,s.gcqj()),A.bm,s.as2(A.ol,"Repair",A.aT,new C.e_4(s)),A.bm,s.as2(K.wq,"Clear",A.c0,new C.e_5(s))],v),A.m,r,A.e,A.i,0,r,r)],v),A.m,r,A.e,A.Q,0,A.p),A.f,r,r,new B.o(I.Bs,r,new B.bG(A.a0,A.a0,new B.ay(q,1,A.r,-1),A.a0),r,r,r,A.n),r,r,r,r,D.bFN,r,r,r)},
B(d){var w=this,v=null
$.asW="tech"
return B.c6(v,A.c2,B.bn(!0,B.x(B.a([w.ca9(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.hgK(w.d,w.e,w.gca7(),v),1)],x.p),A.m,v,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)}}
C.ayA.prototype={
R(){return new C.baL(null,null)}}
C.baL.prototype={
gayh(){var w,v=this,u=v.d
if(u===$){w=B.bm(null,A.Z,null,1,null,v)
w.cM(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gayh().t()
this.bvY()},
B(d){var w=null,v=this.a.c
return B.aA(w,B.hf(new B.a4(42,42,B.cb(this.gayh(),new C.cJy(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a3)}}
C.baK.prototype={
a4(d,e){var w,v,u,t=null,s=e.ek(A.I),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.S()
w=B.J()
w.r=A.b7.j(0.25+0.15*o).gp(0)
w.z=N.oE
d.ad(s,r+2+o*2,w)
w=B.J()
w.sam(D.ew7.aA(0,B.bX(s,r)))
d.ad(s,r,w)
v=B.J()
v.b=A.a9
v.c=2.2
v.sam(new B.h1(A.A,0,6.283185307179586,A.x,D.cZ0,t,new B.mF(p)).aA(0,B.bX(s,r)))
d.ad(s,r,v)
p=new C.cJx(d)
p.$3(s.a7(0,A.tb),8+o*1.5,1)
q*=4
p.$3(s.a7(0,D.ekX),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a7(0,D.eni),2.6,0.5+0.5*Math.cos(q))
u=B.fy(t,t,t,t,D.fj5,A.a4,A.bX,t,A.dA,A.bV)
u.eg()
u.a4(d,s.a7(0,new B.u(-u.b.c/2,5)))},
av(d){return d.b!==this.b}}
C.ayU.prototype={
t(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
C.ayV.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a2(0)
w=this.h6$
w===$&&B.c()
w.t()
this.buA()}}
C.aL7.prototype={
t(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
C.bzg.prototype={}
C.fT.prototype={}
C.JR.prototype={
a6(){return"ScreenStyle."+this.b}}
C.mo.prototype={}
C.Vr.prototype={
R(){return new C.blm(null,null)}}
C.blm.prototype={
gaa7(){var w,v=this,u=v.d
if(u===$){w=B.bm(null,A.oh,null,1,null,v)
w.cq(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gaa7().t()
this.bxO()},
gSn(){var w=this.gaa7().y
w=w==null?null:A.o.ao(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.ml.h(0,this.a.c)
if(v==null)v=D.aRf
return B.c6(w,X.Zc,B.bn(!0,new B.an(A.a_,w,A.ab,A.t,B.a([B.at(v.b===D.Ad?this.bK5(v):this.cn4(v),w,w,w),B.ap(w,B.aH(w,w,w,w,A.mU,w,w,w,new C.dVY(d),w,w,w,B.nS(w,A.aS,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),B.ap(6,B.at(B.d(v.a,w,w,w,w,w,w,D.fkN,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.af,!0,!0),w,!1,!1,w,w)},
caa(d){var w
A:{if(D.JQ===d){w=0.46153846153846156
break A}if(D.vl===d){w=0.45
break A}if(D.wZ===d){w=0.9259259259259258
break A}if(D.Ui===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
cn4(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.JQ
A:{if(D.JQ===p){w=44
break A}if(D.vl===p){w=30
break A}if(D.wZ===p){w=22
break A}if(D.Ui===p){w=26
break A}w=14
break A}v=B.cb(this.gaa7(),new C.dVX(this,w,d,o),q)
if(p===D.a90)v=new B.Bs(D.bGq,v,q)
p=this.caa(p)
u=o?4:5
t=d.c
s=B.ar(t,A.c,o?0.25:0.08)
s.toString
r=B.ar(t,A.w,0.5)
r.toString
r=B.a([s,t,r],x.O)
t=B.n(w)
s=B.a([new B.ac(0,A.G,d.d.j(0.28),A.I,36)],x.V)
return new B.fJ(p,B.p(q,B.p(q,v,A.f,q,q,new B.o(A.w,q,q,B.n(w-3),q,q,A.n),q,q,q,q,A_.GS,q,q,q),A.f,q,q,new B.o(q,q,q,t,s,new B.a9(A.az,A.aE,A.x,r,q,q),A.n),q,q,q,D.bzS,new B.Q(u,u,u,u),q,q,q),q)},
b8k(d){var w,v,u,t=null,s=new B.V(Date.now(),0,!1),r=A.o.E(this.a.d+A.k.bf(this.gSn()*0.4),0,100),q=d.b===D.JQ,p=q?34:20,o=q?28:18,n=B.a([B.d(A.a.aY(A.o.u(B.dh(s)),2,"0")+":"+A.a.aY(A.o.u(B.fS(s)),2,"0"),t,t,t,t,t,t,A.tu,t,t,t),A.b2],x.p)
for(w=0;w<4;++w){v=new B.aP(1,1)
n.push(B.p(t,t,A.f,t,t,new B.o(A.c,t,t,new B.bg(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bG8,t,t,t,3))}n.push(A.db)
n.push(D.fIu)
n.push(A.bm)
v=B.L(A.ac,A.r,1)
u=B.n(4)
n.push(B.p(t,new B.bN(A.a5,t,t,B.BF(A.A,B.p(t,t,A.f,t,t,new B.o(A.ba,t,t,B.n(2),t,t,A.n),t,t,t,A_.GS,t,t,t,t),t,r/100),t),A.f,t,t,new B.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.qY)
n.push(B.d(""+r+"%",t,t,t,t,t,t,D.fzh,t,t,t))
return new B.D(new B.Q(p,12,o,2),B.B(n,A.m,t,A.e,A.i,0,t,t),t)},
awd(d,e,f){var w,v=null,u=d.d,t=B.ar(u,A.w,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.n(e*0.26)
w=x.p
t=B.a([B.p(v,B.at(B.d(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.o(v,v,v,u,D.dn2,new B.a9(A.az,A.aE,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,B.a([A.av,B.d(d.a,v,1,A.a1,v,v,v,D.fpA,v,v,v)],w))
return B.aA(v,B.x(t,A.m,v,A.e,A.Q,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dVT(this,d),v,v,v,v,v,v,!1,A.a3)},
c0z(d,e){return this.awd(d,e,!0)},
c0g(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.Ui||n===D.wZ,l=d.d,k=B.ar(l,A.w,0.55)
k.toString
l=B.ar(l,A.kf,0.5)
l.toString
l=B.a([k,A.dv,l],x.O)
k=p.b8k(d)
w=m?190:138
v=B.n(24)
u=B.L(A.aV,A.r,1)
w=B.aA(o,B.p(o,B.bx(B.n(23),B.b4(o,o,o,new C.aff(0,p.gSn(),o),A.fF),A.ap),A.f,o,o,new B.o(o,o,u,v,o,o,A.n),o,w,o,A.hQ,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.dVR(p),o,o,o,o,o,o,!1,A.a3)
v=m?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.kr[s]
t.push(new B.cf(A.A,o,o,p.c0z(r,m?58:54),o))}k=B.a([k,A.am,w,A.ae,B.E(B.kR(0.92,t,v,8,12,A2.wb,o,!1),1)],u)
if(n!==D.a90){n=A.c.j(0.16)
w=B.n(28)
u=B.a([],u)
for(v=B.d2(F.kr,0,B.dz(4,"count",x.S),x.gD),t=v.$ti,v=new B.bS(v,v.gJ(0),t.k("bS<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.awd(q==null?t.a(q):q,50,!1))}k.push(B.p(o,B.B(u,A.m,o,A.qK,A.i,0,o,o),A.f,o,o,new B.o(n,o,o,w,o,o,A.n),o,o,o,D.bAL,H.amA,o,o,o))}return B.p(o,B.x(k,A.m,o,A.e,A.i,0,A.p),A.f,o,o,new B.o(o,o,o,o,o,new B.a9(A.az,A.aE,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bDu(d,e){var w=null
return B.p(w,B.x(B.a([this.b8k(d),B.E(B.b4(w,w,w,new C.aff(e,this.gSn(),w),A.fF),1),B.aA(w,B.p(w,B.at(B.d(F.kr[e].a,w,w,w,w,w,w,A.Kg,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dVM(this),w,w,w,w,w,w,!1,A.a3)],x.p),A.m,w,A.e,A.i,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bK5(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=B.ar(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.n(r?26:14)
u=B.a([new B.ac(0,A.G,d.d.j(0.25),A.I,36)],x.V)
return new B.fJ(1.5384615384615383,B.p(t,B.cb(this.gaa7(),new C.dVP(this,r,d),t),A.f,t,t,new B.o(t,t,t,v,u,new B.a9(A.az,A.aE,A.x,w,t,t),A.n),t,t,t,D.bFH,new B.Q(8,8,8,s),t,t,t),t)}}
C.bxf.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=e.a,o=e.b,n=0+p,m=0+o
$.S()
w=B.J()
v=this.c
u=B.ar(v,A.w,0.6)
u.toString
t=B.ar(v,A.kf,0.4)
t.toString
w.sam(new B.a9(A.az,A.aE,A.x,B.a([u,A.dv,t],x.O),null,null).aA(0,new B.a3(0,0,n,m)))
d.aQ(new B.a3(0,0,n,m),w)
for(n=this.b,m=n*0.4,n*=0.3,w=d.a,s=0;s<5;++s){u=Math.sin(m+s)
t=Math.sin(n+s*1.7)
r=new B.ao(A.P,A.M,A.S,A.T,A.R)
r.r=v.j(0.1).gp(0)
r.z=D.dCn
q=r.G()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
av(d){return!0}}
C.aff.prototype={
a4(d,e){return L.Sc(d,e,this.b,this.c)},
av(d){return!0}}
C.aMU.prototype={
t(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
C.bw1.prototype={}
C.a8Y.prototype={
B(d){var w=null
return B.c6(B.eI(w,w,w,!0,!0,D.ahA,w,1,!0,w,0,!1,w,!1,w,w,B.aH(w,w,w,w,K.ar9,w,w,w,new C.clG(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fYH,w,w,w,1,w,!0),D.ahA,B.ci(B.a([D.eoL,B.cu(new C.clH())],x.p),w,w,D.bBP,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.X1.prototype={
R(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aG4(w,new B.au(A.at,$.aw()),$,A.bC,0,B.a([],x.X),null,null)}}
C.aG4.prototype={
Z(){this.a3()
this.ma()},
b6f(d){var w=this.d.length
return A.o.F(A.k.bf(A.k.F(A.k.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
mt(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b6f(v.f)
if(w!==v.x){v.x=w
E.mm("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new C.eSf(v))
C.Jn("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
cbG(){if(this.d.length<2)return
this.m(new C.eSb(this))},
b0x(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new C.eSa(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gcbF(),p=s.d,o=B.E(B.aA(r,B.b4(r,r,r,new C.bxr(p,s.f,r),A.fF),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a3),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.x(B.a([o,new B.a4(r,40,B.at(B.d(n,r,r,r,r,r,r,D.fxn,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.i,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.aAU[A.o.F(v,8)].j(0.9)
t=new B.aP(20,20)
o.push(B.aA(r,B.p(r,new B.y(p[v],r,D.fwB,r,r,r,r,r,r,r,r,r),A.f,r,r,new B.o(u,r,r,new B.bg(t,t,t,t),r,r,A.n),r,r,r,A.fv,A.h8,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.eSd(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a3))}p=A.c.j(0.07)
return E.lx(A.aT,A.f2,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.x(B.a([new E.fd(o,r,r),B.B(B.a([B.E(B.aM(r,A.Y,!1,r,!0,A.t,r,B.aN(),s.e,r,r,r,r,r,2,B.bs(r,new B.b5(4,B.n(14),A.a0),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kz,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.aj,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.eSe(s),r,!1,r,r,!1,r,!0,r,A.aa,r,r,r,r,r,r,r,r,r,r,r,A.df,!0,A.a4,r,A.an,r,r,r,r),1),A.ad,new E.fE(A.hS,"Add",s.gcbD(s),A.c,r),A.bm,new E.fE(A.om,"Spin",q,A.ba,r)],w),A.m,r,A.e,A.i,0,r,r)],w),A.m,r,A.e,A.Q,0,A.p))}}
C.bxr.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new B.u(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.S()
w=B.J()
w.r=D.bh0.gp(0)
a1.ad(d,f,w)
w=B.J()
w.b=A.a9
w.c=3
w.r=A.aT.gp(0)
a1.ad(d,f,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(f=a1.a,t=this.c,s=u*57.29577951308232,r=u/2,q=0;q<v;++q){p=t+q*u
o=B.bX(d,a0)
n=new B.ao(A.P,A.M,A.S,A.T,A.R)
n.r=D.aAU[A.o.F(q,8)].gp(0)
m=n.G()
n=p*57.29577951308232
f.drawArc.apply(f,[B.bH(o),n,s,!0,m])
m.delete()
o=B.bX(d,a0)
l=new B.ao(A.P,A.M,A.S,A.T,A.R)
l.b=A.a9
l.c=2
l.r=A.c.j(0.6).gp(0)
m=l.G()
f.drawArc.apply(f,[B.bH(o),n,s,!0,m])
m.delete()
J.bl(f.save())
f.translate(g,e)
f.rotate((p+r)*180/3.141592653589793,0,0)
o=w[q]
if(o.length>12)o=A.a.au(o,0,11)+"\u2026"
k=new B.iH(new B.es(o,i,i,A.cL,i,i,i,i,i,i,D.fjU),A.a4,A.bX,new B.jg(1),i,i,i,i,A.bV,i)
k.eg()
o=k.b
n=o.c
o=o.a.c
k.a4(a1,new B.u(a0-n-16,-o.gba(o)/2))
f.restore()}f=B.J()
f.r=D.aha.gp(0)
a1.ad(d,20,f)
f=B.J()
f.b=A.a9
f.c=3
f.r=A.aT.gp(0)
a1.ad(d,20,f)
j=new B.aF(h.r,A.ag,i,i,B.a([],x.v))
e-=a0
j.D(new B.aY(g,e+26))
e-=10
j.D(new B.aq(g-14,e))
j.D(new B.aq(g+14,e))
j.D(new B.bt())
e=B.J()
e.r=A.c.gp(0)
a1.aK(j,e)
e=B.J()
e.b=A.a9
e.c=2
e.r=A.aS.gp(0)
a1.aK(j,e)},
av(d){return!0}}
C.VQ.prototype={
R(){return new C.blx($,A.bC,0,B.a([],x.X),null,null)}}
C.blx.prototype={
Z(){this.a3()
this.ma()},
mt(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.Jn("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.Uq(900,new C.e1N())}w.m(new C.e1O())},
b0z(d){return this.m(new C.e1I(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aY(A.o.u(A.k.ao(m,60)),2,"0")
v=A.a.aY(A.o.u(A.o.F(A.k.cO(m),60)),2,"0")
m=B.b4(n,n,n,new C.bsa(l,A.c0,n),A.aSx)
u=B.d(w+":"+v,n,n,n,n,n,n,D.fow,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.at(new B.a4(280,280,new B.an(A.A,n,A.ab,A.t,B.a([m,B.x(B.a([u,B.d(t,n,n,n,n,n,n,D.fnv,n,n,n),A.av,B.d("Sessions done: "+o.r,n,n,n,n,n,n,A.vr,n,n,n)],s),A.m,n,A.e,A.Q,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.dk_[r]
u.push(new E.dX(""+q+" min",o.d===q,new C.e1K(o,q),n,A.c0,n))}m=o.f
p=m?A4.uG:A.hp
m=m?"Pause":"Start"
return E.lx(A.c0,A.f2,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.x(B.a([new E.fd(u,n,n),new E.fd(B.a([new E.fE(p,m,new C.e1L(o),A.ba,n),new E.fE(A.op,"Reset",new C.e1M(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.Q,0,A.p))}}
C.bsa.prototype={
a4(d,e){var w,v,u,t,s=e.ek(A.I),r=e.a/2-14
$.S()
w=B.J()
w.b=A.a9
w.c=16
w.r=A.c.j(0.08).gp(0)
d.ad(s,r,w)
w=B.bX(s,r)
v=B.J()
v.b=A.a9
v.c=16
v.d=A.by
u=this.c
t=B.ar(u,A.c,0.4)
t.toString
v.sam(new B.h1(A.A,-1.5707963267948966,4.71238898038469,A.x,B.a([u,t,u],x.O),null,null).aA(0,B.bX(s,r)))
d.e4(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
av(d){return d.b!==this.b}}
C.V2.prototype={
R(){return new C.bl8($,A.bC,0,B.a([],x.X),null,null)}}
C.bl8.prototype={
Z(){this.a3()
this.ma()},
mt(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.SG.h(0,p.d)
w.toString
v=A.d.f4(w,new C.dNu())
u=A.k.F(p.f,v)
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
E.mm("flute",D.c8j[t]+5,1400,0.35)}p.m(new C.dNv())},
gcbJ(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.KH("Press Start",0.5)
w=D.SG.h(0,this.d)
w.toString
v=A.d.f4(w,new C.dNp())
u=A.k.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.KH("Breathe in",0.5+0.5*A.dw.aw(0,p))
case 1:return new B.KH("Hold",1)
case 2:return new B.KH("Breathe out",1-0.5*A.dw.aw(0,p))
default:return new B.KH("Hold",0.5)}}}return new B.KH("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gcbJ(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hj.j(0.12+(3-u)*0.05)
n.push(B.p(q,q,A.f,q,q,new B.o(s,q,q,q,u===0?B.a([new B.ac(0,A.G,A.hj.j(0.35),A.I,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(B.d(p.a,q,q,q,q,q,q,A.pK,q,q,q))
n.push(B.ap(0,B.d("Breaths: "+r.w,q,q,q,q,q,q,A.kz,q,q,q),q,q,q,q,q,q))
n=B.at(new B.a4(300,340,new B.an(A.A,q,A.ab,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aX(D.SG.gev(D.SG));w.C();){v=w.gS(w)
o.push(new E.dX(v,r.d===v,new C.dNs(r,v),q,A.hj,q))}w=r.e
v=w?A.z6:A.hp
w=w?"Stop":"Start"
o.push(new E.fE(v,w,new C.dNt(r),A.ba,q))
return E.lx(A.hj,A.f2,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new E.fd(o,q,q))}}
C.aJw.prototype={}
C.VH.prototype={
R(){return new C.blo(new B.cx(null,x.A),B.a([],x.au),A.au,A.c)}}
C.blo.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aH(s,s,s,s,K.ox,s,s,s,new C.dZi(t,d),s,s,s,s,"Share",s)],r),p=B.bx(B.n(18),new B.er(B.aA(s,B.b4(s,s,s,new C.bnq(t.e,t.x,s),A.fF),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dZj(t),new C.dZk(t),s,s,s,s,s,s,s,s,s,new C.dZl(t),s,s,s,s,!1,A.a3),t.d),A.ap),o=B.a([],r)
for(w=0;w<9;++w){v=D.d_w[w]
u=!t.w&&t.f.A(0,v)
o.push(new E.FM(v,u,new C.dZm(t,v),!1,s))}u=t.r
return E.lx(A.bE,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.D(A.bT,p,s),"DRAW PAD",B.x(B.a([new E.fd(o,s,s),E.iO(A.bE,""+A.k.V(u),"Brush",30,2,new C.dZn(t),u),new E.fd(B.a([new E.dX("Eraser",t.w,new C.dZo(t),A.Co,A.bE,s),new E.fE(A.pl,"Undo",new C.dZp(t),A.c,s),new E.fE(A.eb,"Clear",new C.dZq(t),A.c,s),new E.fE(A.P_,"Paper",new C.dZr(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.Q,0,A.p))}}
C.bnq.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.S()
w=B.J()
w.r=this.c.gp(0)
d.aQ(new B.a3(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,B.K)(w),++s){r=w[s]
q=$.S()
p=new B.ao(A.P,A.M,A.S,A.T,A.R)
o=r.a
p.r=o.gp(o)
n=r.b
p.c=n
p.d=A.by
p.e=A.dQ
p.b=A.a9
m=r.c
if(m.length===1){q=A.d.gI(m)
m=new B.ao(A.P,A.M,A.S,A.T,A.R)
m.r=o.gp(o)
l=m.G()
u.drawCircle(q.a,q.b,n/2,l)
l.delete()}else{o=B.a([],t)
k=new B.aF(q.r,A.ag,null,null,o)
o.push(new B.aY(A.d.gI(m).a,A.d.gI(m).b))
for(j=1;j<m.length-1;){q=m[j]
n=q.a;++j
i=m[j]
q=q.b
i=new B.c5(n,q,(n+i.a)/2,(q+i.b)/2)
o.push(i)
q=k.f
if(q!=null)i.bx(q)
q=k.e
if(q!=null)q.a.delete()
k.e=null}q=new B.aq(A.d.gak(m).a,A.d.gak(m).b)
o.push(q)
o=k.f
if(o!=null)q.bx(o)
q=k.e
if(q!=null)q.a.delete()
k.e=null
l=p.G()
q=k.e
u.drawPath((q==null?k.e=new B.cd(k.gbu().a.snapshot()):q).a,l)
l.delete()}}},
av(d){return!0}}
C.Wp.prototype={
R(){var w=x.S
return new C.aFo(B.aV(w),B.aV(w))}}
C.aFo.prototype={
Z(){this.a3()
this.atx()},
atx(){var w,v,u=this,t=x.N,s=B.bp(D.dpe,!0,t)
A.d.D7(s)
w=x.S
v=B.T(s).c
t=B.C(B.d2(s,0,B.dz(u.d,"count",w),v),t)
A.d.v(t,B.d2(s,0,B.dz(u.d,"count",w),v))
A.d.D7(t)
u.e=t
u.f.aa(0)
u.r.aa(0)
u.w=0
u.x=!1},
cbE(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
E.mm("bell",12+A.o.F(d,9),150,0.35)
s.m(new C.ep6(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gI(0)
u=w.gak(0)
w=s.e
w===$&&B.c()
t=x.H
if(w[v]===w[u])B.bP(A.mI,new C.ep7(s,v,u),t)
else{s.x=!0
B.bP(Ab.Gt,new C.ep8(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.d("Moves: "+r.w,q,q,q,q,q,q,A.Vn,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.ao(p,2)+" / "+o
o=x.p
p=B.x(B.a([new B.D(A.yv,B.B(B.a([u,B.d(p,q,q,q,q,q,q,B.l(q,q,w?A.aT:A.ac,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.iP,A.i,0,q,q),q),B.E(B.ip(!0,q,q,A.y,new B.hL(v,8,8,1,q),new C.epc(r),r.e.length,A.bg,q,A.ah,!1),1)],o),A.m,q,A.e,A.i,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.d12[t]
o.push(new E.dX(s.b,r.d===s.a,new C.epd(r,s),q,A.aJ,q))}o.push(new E.fE(K.apJ,"New game",new C.epe(r),A.ba,q))
return E.lx(A.aJ,A.f2,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new E.fd(o,q,q))}}
C.Wz.prototype={
R(){return new C.aFJ(B.a([],x.t))}}
C.aFJ.prototype={
cbI(d){A.d.aa(this.d)
this.w=!0
this.b0y()},
b0y(){this.d.push(A.cM.ap(4))
this.e=0
this.a_I()},
a_I(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_I=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.ezT(t))
s=x.H
w=3
return B.b(B.bP(A.lE,null,s),$async$a_I)
case 3:r=t.d,q=B.bp(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aUs(n)
w=7
return B.b(B.bP(new B.bc(1000*Math.max(280,600-r.length*18)),null,s),$async$a_I)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new C.ezU(t))
case 1:return B.h(u,v)}})
return B.i($async$a_I,v)},
aUs(d){this.m(new C.ezR(this,d))
E.mm("marimba",D.c8i[d]+5,450,0.55)
B.bP(A.Gr,new C.ezS(this),x.H)},
cbK(d){var w,v,u=this
if(!u.w||u.r)return
u.aUs(d)
w=u.d
v=u.e
if(w[v]!==d){G.dG(90,"",600,0,0.5,"saw")
u.m(new C.ezV(u))
return}++v
u.e=v
if(v===w.length){u.m(new C.ezW(u))
B.bP(A.hz,new C.ezX(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.d("Best: "+q.x,p,p,p,p,p,p,Q.aV3,p,p,p),n=B.d(q.y,p,p,p,p,p,p,D.fxM,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.azM[v]
u=u.j(q.f===v?1:0.35)
t=new B.aP(28,28)
s=q.f===v?B.a([new B.ac(0,A.G,D.azM[v].j(0.8),A.I,30)],w):p
r=new B.ay(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.aA(p,B.cY(p,p,p,p,A.b5,new B.o(u,p,new B.bG(r,r,r,r),new B.bg(t,t,t,t),s,p,A.n),A.ji,p,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.ezY(q,v),p,p,p,p,p,p,!1,A.a3))}o=B.at(new B.D(A.aa,B.x(B.a([o,A.am,n,A.d4,new B.fJ(1,B.kR(1,l,2,12,12,p,A.dS,!1),p)],m),A.m,p,A.b9,A.i,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return E.lx(A.bs,A.f2,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new E.fd(B.a([new E.fE(A.hp,n,q.gcbH(q),A.ba,p)],m),p,p))}}
C.WT.prototype={
R(){return new C.bmE(new B.au(A.at,$.aw()))}}
C.bmE.prototype={
ax4(d){return B.p_(A.k.ac(d,2),B.ag("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eNK(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.d5(B.aL(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eNT()
l=B.aM(m,A.Y,!1,m,!0,A.t,m,B.aN(),l,m,m,m,m,m,2,B.bs(m,m,m,m,m,m,m,m,!0,new B.b5(4,B.n(16),A6.xC),m,m,m,m,m,m,m,m,m,m,m,new B.b5(4,B.n(16),D.b3k),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.ms,"Bill amount",!0,!0,!1,m,m,m,m,D.fv8,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,A.e1,m,m,m,1,m,m,!1,"\u2022",m,new C.eNP(n),m,m,m,!1,m,m,!1,m,!0,m,A.aa,m,m,m,m,m,m,m,m,m,m,m,A.aU1,!0,A.a4,m,A.an,m,m,m,m)
k=A.ba.j(0.1)
s=B.n(20)
r=B.L(A.ba.j(0.35),A.r,1)
q=x.p
s=B.ci(B.a([l,A.bx,B.p(m,B.x(B.a([t.$2("Tip ("+A.k.V(n.e)+"%)","$"+n.ax4(w)),t.$2("Total","$"+n.ax4(v)),A3.No,t.$3$big("Each of "+n.f+" pays","$"+n.ax4(u),!0)],q),A.m,m,A.e,A.i,0,A.p),A.f,m,m,new B.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bQ,m,m,m)],q),m,m,A.fm,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cMt[p]
r.push(new E.dX(""+o+"%",A.k.V(n.e)===o,new C.eNQ(n,o),m,A.ba,m))}l=n.f
return E.lx(A.ba,A.f2,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.x(B.a([new E.fd(r,"TIP",m),E.iO(A.aJ,""+l,"People",20,1,new C.eNR(n),l),new E.fd(B.a([new E.dX("Round up",n.r,new C.eNS(n),m,A.aT,m)],q),m,m)],q),A.m,m,A.e,A.Q,0,A.p))}}
C.Wo.prototype={
R(){var w=B.a([3,5],x.t)
return new C.bm8(w,A.cM,$,A.bC,0,B.a([],x.X),null,null)}}
C.bm8.prototype={
Z(){this.a3()
this.ma()},
mt(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.k.bf(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.ap(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.ap(6)+1)
u.f=t
E.WV("snare",0,0.5)}u.m(new C.enM())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.h9()
u.w=t
u.x=t?0:3.141592653589793
E.mm("bell",24,400,0.5)}u.m(new C.enN())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.beZ(v,o.r>0,n))}u=B.aA(n,B.at(B.bY(A.fI,m,A.br,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.enF(o),n,n,n,n,n,n,!1,A.a3)}else if(m==="coin"){t=A.k.E(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.L(A.d0,A.r,6)
s=B.a([new B.ac(0,A.G,A.aT.j(0.4),A.I,30)],x.V)
u=B.aA(n,B.at(B.ee(A.A,B.p(A.A,B.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fuj,n,n,n),A.f,n,n,new B.o(n,n,v,n,s,D.ewb,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.enG(o),n,n,n,n,n,n,!1,A.a3)}else{m=o.as
u=B.aA(n,B.at(B.x(B.a([B.d(m===0?"?":""+m,n,n,n,n,n,n,D.fjn,n,n,n),B.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kz,n,n,n)],x.p),A.m,n,A.e,A.Q,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.enH(o),n,n,n,n,n,n,!1,A.a3)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.dhi[r]
v.push(new E.dX(q.b,o.d===q.a,new C.enI(o,q),q.c,A.bq,n))}v=B.a([new E.fd(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(E.iO(A.bq,""+s,"Dice",4,1,new C.enJ(o),s))}if(o.d==="num"){s=o.z
s=E.iO(A.bq,""+s,"From",100,1,new C.enK(o),s)
p=o.Q
A.d.v(v,B.a([s,E.iO(A.bq,""+p,"To",1000,2,new C.enL(o),p)],m))}return E.lx(A.bq,A.f2,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.x(v,A.m,n,A.e,A.Q,0,A.p))}}
C.beZ.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cM.ag()-0.5)*0.6
else w=0
v=B.n(22)
u=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cy,14)],x.V)
t=B.a([],x.p)
for(s=D.dB8.h(0,A.o.E(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bN(s[q],p,p,B.p(p,p,A.f,p,p,O.adX,p,18,p,p,p,p,p,18),p))
return B.eM(A.A,w,B.p(p,new B.an(A.a_,p,A.ab,A.t,t,p),A.f,p,p,new B.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bD,p,p,100),p)}}
C.aMI.prototype={
t(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
C.bzc.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a2(0)
w=this.h6$
w===$&&B.c()
w.t()
this.bxC()}}
C.aN0.prototype={
t(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
C.bzi.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a2(0)
w=this.h6$
w===$&&B.c()
w.t()
this.bxW()}}
C.aNt.prototype={
t(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
C.bzr.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a2(0)
w=this.h6$
w===$&&B.c()
w.t()
this.byp()}}
C.aNU.prototype={
t(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
C.bzA.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a2(0)
w=this.h6$
w===$&&B.c()
w.t()
this.byQ()}}
var z=a.updateTypes(["P(tR)","~()","P(a57)","aB<~>()","P(CQ)","G(tR,G)","I(I,tR)","P(CM)","P(ZY)","P(ac4)","P(a3M)","P(nC)","WU()","V1()","a8Y()","Wu()","WJ()","Wv()","P(mS)","V6()","afy(Z,G)","aeq(Z,G)","~(a8<@,@>)","G(CM,CM)","m(ek)","P(afm)","P(a1d)","P(D_)","P(acy)","P(aet)","P(aci)","G(G,r6)","G(G,CQ)","m(r6)","~(r6,ai<m>,G)","r6?(CQ)","Wo()","v(m,a10)","P(aaZ)","~(AS)","WX()","~(xp,m,u,t,I)","~(m,tR)","VI()","W8(Z)","NU(Z)","Vr(Z,bv<I>,bv<I>)","X1()","VQ()","V2()","VH()","Wp()","Wz()","WT()","P(r6)"])
C.fHu.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+18}
C.fwE.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gI(d.e.split(". "))+"."},
$S:z+24}
C.fE2.prototype={
$1(d){var w
if(!this.a.Ma(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fE3.prototype={
$1(d){return d.x},
$S:z+0}
C.fHr.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fHs.prototype={
$1(d){var w
if(!this.a.Ma(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fHt.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.egU.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.egV.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.z(this.b,this.c))},
$S:0}
C.egW.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd4(v).Q
v.toString
w.ml(v,A.dU,A.iH)}},
$S:8}
C.eh6.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.aa(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.eh7.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.eh2.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.eh0.prototype={
$2(d,e){var w=this.a
w.r.push(B.cD(B.dA(0,0,0,d,0,0),new C.eh1(w,this.b,e)))},
$S:1888}
C.eh1.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.eh3.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gWR().akR(0,u[1],u[2],u[3])
u[4].bQ(0,new C.egZ(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
G.dG(700+w.e*120,"",80,0,0.25,"square")
v.m(new C.eh_(w.a,v,w.f,w.r))},
$S:0}
C.egZ.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:198}
C.eh_.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.E(A.k.bf(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.eh4.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gWR().alB(t,u[1],s,u[3])
G.dG(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new C.egY(w.a,v,w.e,w.f))},
$S:0}
C.egY.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.E(A.k.bf(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.eh5.prototype={
$0(){G.dG(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new C.egX(w,this.b))},
$S:0}
C.egX.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.eha.prototype={
$0(){var w=this.a
return w.m(new C.eh9(w))},
$S:0}
C.eh9.prototype={
$0(){return this.a.at=!0},
$S:0}
C.ehb.prototype={
$0(){var w=this.a
return w.m(new C.eh8(w))},
$S:0}
C.eh8.prototype={
$0(){return this.a.at=!1},
$S:0}
C.ehc.prototype={
$0(){var w=this.a
w.f.saZ(0,this.b)
w.PC()},
$S:0}
C.ehd.prototype={
$0(){return this.a.YV(this.b)},
$S:0}
C.ehe.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.PC():w.aXq()},
$S:2}
C.ehf.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.PC():w.aXq()},
$S:0}
C.ewc.prototype={
$2(d,e){return d+e},
$S:1889}
C.eww.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ewv(w,d))},
$S:1890}
C.ewv.prototype={
$0(){var w=B.aK(J.r(this.b,"unlocked"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.ewx.prototype={
$0(){},
$S:0}
C.ewy.prototype={
$0(){},
$S:0}
C.ewe.prototype={
$0(){return this.a.m(new C.ewd(this.b,this.c))},
$S:0}
C.ewd.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.ew3.prototype={
$1(d){return this.a.cx===d},
$S:34}
C.ew4.prototype={
$1(d){return this.a.cx=d},
$S:32}
C.ew5.prototype={
$1(d){return this.a.cy===d},
$S:34}
C.ew6.prototype={
$1(d){return this.a.cy=d},
$S:32}
C.ew7.prototype={
$1(d){return this.a.db===d},
$S:34}
C.ew8.prototype={
$1(d){return this.a.db=d},
$S:32}
C.ew9.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:34}
C.ewa.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.W(0,d):w.M(0,d)},
$S:32}
C.ewb.prototype={
$0(){var w=this.a
return w.m(w.gaxF())},
$S:0}
C.ew1.prototype={
$1(d){return this.a.$1(!0)},
$S:70}
C.ew2.prototype={
$1(d){return this.a.$1(!1)},
$S:111}
C.ew0.prototype={
$1(d){return this.a.$1(!1)},
$S:142}
C.ewp.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.ch=n
n=B.b4(p,p,p,new C.biT(o,p),n)
w=this.b
v=C.bBO("WORLD",w.a,w.c)
u=C.bBO("GRAVITY",B.w(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.V(t*100)
t=t<0.25?A.c0:A.ba
t=C.bBO("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.V(s*100)
s=s>D.Da[o.db].d?A.c0:A.c
q=x.p
s=B.a([v,u,t,C.bBO("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(C.bBO("HEIGHT",""+A.k.V(A.k.E(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ap(p,B.B(s,A.m,p,A.iP,A.i,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bGw(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.rY[w].a+".":"You landed on every world!"
v=B.a([new E.fE(A.oq,"Again",new C.ewk(o),A.c,p),new E.fE(A.ol,"Rebuild",new C.ewl(o),A.aT,p)],q)
if(o.d+1<7)v.push(new E.fE(A.jD,"Next world",new C.ewm(o),A.ba,p))
n.push(C.hvw("Perfect landing!",w,A.ba,v))}if(o.as==="crashed")n.push(C.hvw("Crash!",o.at,A.c0,B.a([new E.fE(A.oq,"Try again",new C.ewn(o),A.ba,p),new E.fE(A.ol,"Rebuild",new C.ewo(o),A.aT,p)],q)))
return new B.an(A.a_,p,A.b3,A.t,n,p)},
$S:66}
C.ewk.prototype={
$0(){var w=this.a
return w.m(w.gaxF())},
$S:0}
C.ewl.prototype={
$0(){var w=this.a
return w.m(new C.ewh(w))},
$S:0}
C.ewh.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.ewm.prototype={
$0(){var w=this.a
return w.m(new C.ewg(w))},
$S:0}
C.ewg.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.ewn.prototype={
$0(){var w=this.a
return w.m(w.gaxF())},
$S:0}
C.ewo.prototype={
$0(){var w=this.a
return w.m(new C.ewf(w))},
$S:0}
C.ewf.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.ewq.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new C.ewj(v,w))},
$S:0}
C.ewj.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.ewr.prototype={
$1(d){return this.a.y=d},
$S:9}
C.ews.prototype={
$1(d){return this.a.Q=d},
$S:9}
C.ewt.prototype={
$1(d){return this.a.z=d},
$S:9}
C.ewu.prototype={
$0(){var w=this.a
return w.m(new C.ewi(w))},
$S:0}
C.ewi.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dNn.prototype={
$0(){var w=0,v=B.j(x.h),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=$.hqK
if(q==null)q=$.hqK=C.cN9()
w=3
return B.b(B.iX(B.a([q,$.rg().cUc("assets/data/three.min.js")],x.D),x.K),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kV(0,B.cR(J.r(s,1)))
q.m(new C.dNm(q,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:51}
C.dNm.prototype={
$0(){return this.a.d=x.m.a(J.r(this.b,0))},
$S:0}
C.dN_.prototype={
$0(){return this.a.bYe(B.aS(J.r(this.b,"group")))},
$S:0}
C.dN0.prototype={
$1(d){return A.a.aY(A.o.fw(A.o.E(A.k.V(d*255),0,255),16),2,"0")},
$S:290}
C.dNo.prototype={
$0(){return E.WV("kick",0,0.25)},
$S:0}
C.dN1.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dN2.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dN3.prototype={
$0(){return E.WV("kick",0,0.5)},
$S:0}
C.dN4.prototype={
$0(){return G.dG(1300+this.a.R8.ap(900),"",40,0,0.2,"square")},
$S:0}
C.dN6.prototype={
$0(){var w,v,u=this.b
if(u==="skin"){u=this.a
w=u.ch
if(w===2)w=1
else w=w===1?0:2
u.ch=w}else{w=this.a
v=w.ay
if(v.q(0,u))v.W(0,u)
else{v.M(0,u)
if(w.ch===2)w.ch=1}if(v.a===0&&w.ch===0)w.ch=2
u=w}if(u.cx!=null&&!A.d.b_(u.d.e,new C.dN5(u)))u.cx=null
u.go=0},
$S:0}
C.dN5.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.azr(d)},
$S:z+10}
C.dMX.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
C.dMY.prototype={
$0(){var w=this.a
return w.m(w.gc7R())},
$S:0}
C.dMZ.prototype={
$0(){return this.a.ael(null)},
$S:0}
C.dNd.prototype={
$0(){var w=this.a.as
return w==null?null:w.f6(0,B.H(["t","shot"],x.N,x.z))},
$S:0}
C.dNe.prototype={
$0(){return this.a.cE5(this.b.a)},
$S:0}
C.dNf.prototype={
$0(){return this.a.ael(this.b)},
$S:0}
C.dNg.prototype={
$1(d){var w=this.a
return w.m(new C.dNc(w,d))},
$S:6}
C.dNc.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.dNh.prototype={
$0(){var w=this.a
return w.m(new C.dNb(w,this.b))},
$S:0}
C.dNb.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.dNi.prototype={
$0(){var w=this.a
return w.m(new C.dNa(w))},
$S:0}
C.dNa.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.dNj.prototype={
$0(){var w=this.a
return w.m(new C.dN9(w))},
$S:0}
C.dN9.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.f6(0,B.H(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.Ly},
$S:0}
C.dNk.prototype={
$0(){var w=this.a
return w.m(new C.dN8(w))},
$S:0}
C.dN8.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.b_9()
else w.p2=null},
$S:0}
C.dNl.prototype={
$0(){var w=this.a
return w.m(new C.dN7(w))},
$S:0}
C.dN7.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
C.c5Q.prototype={
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
C.c5R.prototype={
$1(d){var w=new B.r3([],[]).oC(d.data,!0)
if(x.f.b(w)&&J.r(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:393}
C.fq1.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)&&w.h(d,1)},
$S:211}
C.fq2.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)||w.h(d,1)},
$S:211}
C.fq3.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)!==w.h(d,1)},
$S:211}
C.fqa.prototype={
$1(d){return!J.r(d,0)},
$S:211}
C.fqb.prototype={
$1(d){var w=J.a7(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:211}
C.fqc.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:211}
C.dP2.prototype={
$1(d){return this.a.aum(0)},
$S:8}
C.dOH.prototype={
$0(){var w=this.b
return this.a.cx=new B.N(w,B.icQ(),B.T(w).k("N<1,G>")).fN(0)},
$S:0}
C.dOK.prototype={
$1(d){return""+d},
$S:73}
C.dP3.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dOF.prototype={
$1(d){return this.a.aum(this.b)},
$S:8}
C.dOG.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.ay9(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mI(0,d,a1.mb(0.15,0.3))
u=a1.mI(0,d,a1.mb(0.15,0.62))
t=a1.mI(0,"and",a1.mb(0.48,0.46))
s=a1.mI(0,a0,a1.mb(0.82,0.46))
a1=t.a
w.push(new C.nC(v.a,a1,0))
w.push(new C.nC(u.a,a1,1))
w.push(new C.nC(a1,s.a,0))
break
case 1:v=a1.mI(0,d,a1.mb(0.12,0.25))
u=a1.mI(0,d,a1.mb(0.12,0.65))
r=a1.mI(0,"xor",a1.mb(0.46,0.25))
q=a1.mI(0,"and",a1.mb(0.46,0.65))
p=a1.ay8(0,a0,a1.mb(0.82,0.25),0)
o=a1.ay8(0,a0,a1.mb(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.nC(a1,n,0))
m=u.a
w.push(new C.nC(m,n,1))
l=q.a
w.push(new C.nC(a1,l,0))
w.push(new C.nC(m,l,1))
w.push(new C.nC(n,p.a,0))
w.push(new C.nC(l,o.a,0))
break
case 2:k=a1.mI(0,"clock",a1.mb(0.15,0.4))
j=a1.mI(0,"not",a1.mb(0.45,0.65))
s=a1.mI(0,a0,a1.mb(0.82,0.3))
i=a1.mI(0,"buzzer",a1.mb(0.82,0.65))
a1=k.a
w.push(new C.nC(a1,s.a,0))
n=j.a
w.push(new C.nC(a1,n,0))
w.push(new C.nC(n,i.a,0))
break
default:h=a1.mI(0,d,a1.mb(0.12,0.25))
g=a1.mI(0,d,a1.mb(0.12,0.7))
f=a1.mI(0,"nor",a1.mb(0.5,0.25))
e=a1.mI(0,"nor",a1.mb(0.5,0.7))
s=a1.mI(0,a0,a1.mb(0.86,0.25))
a1=f.a
w.push(new C.nC(g.a,a1,0))
n=e.a
w.push(new C.nC(n,a1,1))
w.push(new C.nC(h.a,n,0))
w.push(new C.nC(a1,n,1))
w.push(new C.nC(a1,s.a,0))}},
$S:0}
C.dOL.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.ay9(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.CM(p,"switch",new B.u(0.14*q.a,r*q.b),0))}o.mI(0,w.e,o.mb(0.86,0.5))},
$S:0}
C.dOA.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dOB.prototype={
$2(d,e){return A.k.aO(d.c.b,e.c.b)},
$S:z+23}
C.dOC.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dOD.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dOE.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.adF(this.c)
if(v.ax)C.Jn("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gI(w)
v.CW=!1
if(v.ax)G.dG(140,"",250,0,0.3,"square")}},
$S:0}
C.dOM.prototype={
$0(){},
$S:0}
C.dON.prototype={
$0(){return A.d.cz(this.a.e,this.b)},
$S:0}
C.dOO.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dOJ.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bs(w.e,new C.dOI(v))
w.cy=null},
$S:0}
C.dOI.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
C.dOz.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mI(0,this.b,new B.u(w.x.a*(0.3+v.ag()*0.4),w.x.b*(0.2+v.ag()*0.6))).a},
$S:0}
C.dOX.prototype={
$0(){var w=this.a
return w.m(new C.dOW(w))},
$S:0}
C.dOW.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dOY.prototype={
$2(d,e){var w=null,v=this.a,u=new B.av(e.b,e.d)
v.x=u
return B.aA(A.c6,B.jm(B.b4(w,w,w,new C.bcR(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dOR(v),w,w,w,new C.dOS(v),new C.dOT(v),new C.dOU(v),w,w,w,w,w,w,w,w,w,w,new C.dOV(v),w,w,w,!1,A.a3)},
$S:36}
C.dOV.prototype={
$1(d){return this.a.c9C(d.b)},
$S:69}
C.dOT.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cip(u)
if(t!=null){v.as=t
v.at=u
return}w=v.ayZ(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aF(0,u)}},
$S:47}
C.dOU.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.u(A.k.E(w.a+u.Q.a,46,u.x.a-46),A.k.E(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:19}
C.dOS.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c0Q(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bs(v,new C.dOP(w))
u=t.as
u.toString
v.push(new C.nC(u,w.a,w.b))
B.jQ()}}t.z=t.as=null},
$S:38}
C.dOP.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
C.dOR.prototype={
$1(d){return this.a.awY(d.b)},
$S:326}
C.dOZ.prototype={
$0(){return this.a.bCk(this.b.a)},
$S:0}
C.dP_.prototype={
$0(){return this.a.aum(this.b.a)},
$S:0}
C.dP0.prototype={
$0(){var w=this.a
return w.m(new C.dOQ(w))},
$S:0}
C.dOQ.prototype={
$0(){var w=this.a
w.ay9(0)
w.ay=null},
$S:0}
C.dP1.prototype={
$0(){return this.a.czM(this.b)},
$S:0}
C.cU3.prototype={
$0(){var w=this,v=null,u=B.fy(v,v,v,v,B.cT(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.bX,v,A.dA,A.bV)
u.eg()
return u},
$S:271}
C.dV0.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dV_.prototype={
$0(){return this.a.d=null},
$S:0}
C.dV2.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c2E()},
$S:124}
C.dV1.prototype={
$0(){return B.a5(this.a,!1).im()},
$S:0}
C.fqs.prototype={
$0(){return K.aKr},
$S:z+40}
C.fqt.prototype={
$0(){return D.dMy},
$S:z+43}
C.fqu.prototype={
$0(){return D.dJs},
$S:z+13}
C.fqv.prototype={
$0(){return D.ecL},
$S:z+14}
C.fqw.prototype={
$0(){return D.dVE},
$S:z+15}
C.fqx.prototype={
$0(){return K.aKi},
$S:z+16}
C.fqy.prototype={
$0(){return D.eax},
$S:z+17}
C.fqz.prototype={
$0(){return K.aKq},
$S:z+12}
C.fqA.prototype={
$0(){return D.dLG},
$S:z+19}
C.f5V.prototype={
$2(d,e){return new C.afy($.bGi()[e],new C.f5U(e,this.a),null)},
$S:z+20}
C.f5U.prototype={
$0(){var w=this.a,v=I.aHX.h(0,$.bGi()[w].a)
$.asW=v==null?"music":v
B.a5(this.b,!1).cc(B.ej(new C.f5S(w),!1,null,x.H))},
$S:0}
C.f5S.prototype={
$1(d){return $.bGi()[this.a].e.$0()},
$S:39}
C.f5W.prototype={
$2(d,e){return new C.aeq(D.aAq[e],new C.f5T(this.a,e),null)},
$S:z+21}
C.f5T.prototype={
$0(){return this.a.d.$1(D.aAq[this.b])},
$S:0}
C.f5B.prototype={
$0(){return this.a.as=!0},
$S:0}
C.f5A.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f5z.prototype={
$1(d){var w=this
return new B.e2(new C.f5y(w.a,w.b,w.c,w.d),null)},
$S:20}
C.f5y.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.l,a1=B.aG(a2,d,a0).w
a0=B.aG(a2,d,a0).w
w=x.p
v=B.a([D.fFj,A.av,D.fM6,A.ae],w)
for(u=e.d,t=e.a,s=x.G,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new B.aP(12,12)
m=new B.aP(12,12)
m=B.a([new B.by(1,A.bb,B.aM(d,A.Y,!1,d,!0,A.t,d,B.aN(),r[p],d,d,d,d,d,2,new B.e8(d,d,d,d,d,d,d,d,d,d,"Title",d,N.Ew,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new B.b5(4,new B.bg(n,n,n,n),A.a0),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.aj,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.aa,d,d,d,d,d,d,d,d,d,d,d,A.jq,!0,A.a4,d,A.an,d,d,d,d),d),A.ad,new B.by(2,A.bb,B.aM(d,A.Y,!1,d,!0,A.t,d,B.aN(),q[p],d,d,d,d,d,2,new B.e8(d,d,d,d,d,d,d,d,d,d,"Small line",d,N.Ew,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new B.b5(4,new B.bg(m,m,m,m),A.a0),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.aj,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.aa,d,d,d,d,d,d,d,d,d,d,d,A.jq,!0,A.a4,d,A.an,d,d,d,d),d)],w)
n=B.a([],w)
for(l=0;l<30;++l){k=D.dwn[l]
j=new B.aP(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=B.C(t.a.c.d,s)
t.w=i}h=A.d.gI(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=B.C(t.a.c.d,s)
t.w=i}g=A.d.gI(i)}else g=A.bz
f=new B.ay(g,u[p].A(0,k)?1.8:1,A.r,-1)
n.push(B.aA(d,B.p(d,B.X(k,u[p].A(0,k)?A.c:A.aR,d,d,d,22),A.f,d,d,new B.o(h,d,new B.bG(f,f,f,f),new B.bg(j,j,j,j),d,d,A.n),d,d,d,A.fv,d,d,d,42),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.f5w(a3,p,u,k),d,d,d,d,d,d,!1,A.a3))}A.d.v(v,B.a([new B.y("SLAB "+o,d,D.fuC,d,d,d,d,d,d,d,d,d),A.am,new B.c9(A.aK,A.e,A.i,A.m,d,A.p,d,0,m,d),A.N,new B.a4(d,44,B.ci(n,d,d,d,d,d,A.aK,!1),d),A.aB],w))}v.push(B.bI(A.xc,d,new C.f5x(t,r,q,u,a2),d))
return new B.D(new B.Q(0,0,0,a1.f.d),B.bn(!0,new B.cU(new B.aZ(0,1/0,0,a0.a.b*0.86),B.ci(v,d,d,A0.yw,d,d,A.ah,!0),d),!0,!1,A.af,!0,!0),d)},
$S:102}
C.f5w.prototype={
$0(){var w=this
return w.a.$1(new C.f5v(w.b,w.c,w.d))},
$S:0}
C.f5v.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.f5x.prototype={
$0(){var w=this,v=w.a
v.m(new C.f5u(v,w.b,w.c,w.d))
B.a5(w.e,!1).O(null)},
$S:0}
C.f5u.prototype={
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
C.f5J.prototype={
$0(){var w=this.a
return w.m(new C.f5I(w))},
$S:0}
C.f5I.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.f5K.prototype={
$0(){return E.uy(this.b,this.a.f,"scene")},
$S:0}
C.f5L.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ar(A.d.gI(u),A.d.gak(u),0.4)
u.toString
w=this.a.ga_g().x
w===$&&B.c()
return B.c4(v,new B.o(v,v,v,v,v,new B.c_(D.b12,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.c2],x.O),v,v),A.n),A.bh)},
$S:323}
C.f5M.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.at(B.eO(A.A,B.cb(new B.h9(B.a([u.gus(),u.ga_g()],x.dS)),new C.f5H(u,this.b,v),w),A.f,A.e3),w,w,w)},
$S:223}
C.f5H.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gus().x
r===$&&B.c()
w=r<0.9?1:1-C.bt6(r,0.9,0.98)
v=s.ga_g().x
v===$&&B.c()
u=A.dw.aw(0,v)
switch(s.gaya().a){case 0:s=s.bBw(t.b,r,u,t.c)
break
case 1:s=s.bSl(t.b,r,u,t.c)
break
case 2:s=s.cEA(t.b,r,u,t.c)
break
case 3:s=s.bEr(t.b,r,u,t.c)
break
case 4:s=s.bHM(t.b,r,u,t.c)
break
case 5:s=s.c9D(t.b,r,u,t.c)
break
default:s=null}return B.db(s,w)},
$S:237}
C.f5N.prototype={
$2(d,e){var w=B.awx(this.b),v=this.c.d,u=B.ar(A.d.gI(v),A.d.gak(v),0.4)
u.toString
v=B.ar(A.d.gI(v),A.d.gak(v),0.4)
v.toString
v=w.cNs(u,A.bz,v,3.5)
u=this.a
w=u.gus().x
w===$&&B.c()
return B.aaL(B.kS(null,null,null,1,0,new C.f5G(u),A.k.E(w,0,1)),v)},
$S:1892}
C.f5G.prototype={
$1(d){var w=this.a
w.gus().sp(0,d)
if(w.as)w.m(new C.f5C(w))},
$S:6}
C.f5C.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f5O.prototype={
$0(){var w=this.a
w.gus().sp(0,0)
w.aeL()},
$S:0}
C.f5P.prototype={
$1(d){var w=this.a
w.m(new C.f5F(w,d))
if(w.as)w.aeL()},
$S:6}
C.f5F.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f5Q.prototype={
$0(){var w=this.a
w.m(new C.f5E(w,this.b))
w.gus().sp(0,0)
if(w.as)w.aeL()},
$S:0}
C.f5E.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.f5R.prototype={
$0(){var w=this.a
return w.m(new C.f5D(w,this.b))},
$S:0}
C.f5D.prototype={
$0(){var w=B.C(this.b,x.G)
return this.a.w=w},
$S:0}
C.f5s.prototype={
$2(d,e){return A.k.aO(d.a,e.a)},
$S:1893}
C.f5t.prototype={
$1(d){return d.b},
$S:1894}
C.dpg.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.dph.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.dpd.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.dpe.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dpf.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dpi.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dpj.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dpk.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dpl.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.dpm.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.dpn.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.dpo.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.dpp.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.dpq.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.evx.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.evm.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.evo.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gX(e.b),97)},
$S:z+31}
C.evp.prototype={
$2(d,e){return d+A.o.F(A.a.gX(e.a),31)+A.o.F(A.a.gX(e.b),17)},
$S:z+32}
C.evs.prototype={
$1(d){var w=D.mW.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+33}
C.evt.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.T(q),o=x.dg,n=B.C(new B.ef(new B.cP(new B.Y(q,new C.evu(d),p.k("Y<1>")),new C.evv(r),p.k("cP<1,r6?>")),o),o.k("M.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aI(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.K)(n),++v){u=n[v]
if(w.length>=6)return
t=B.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.evu.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.evv.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.evq.prototype={
$1(d){return D.mW.h(0,d.b).c===D.xv},
$S:z+54}
C.evr.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.evX.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.E((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.vt(0,u)
w.a7b(A.o.ao(v,1000))},
$S:8}
C.evw.prototype={
$0(){},
$S:0}
C.evi.prototype={
$0(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$$0)
case 6:e.ar("String","ngmy_core_reaction_lab_v1",s.a.d.ah())
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
C.evz.prototype={
$1(d){var w=null,v=this.a.b
return B.bn(!0,B.x(B.a([A.N,B.dH(!1,w,w,w,!0,w,w,w,!0,w,w,B.X(D.mW.h(0,v).b,D.mW.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fXC,w,B.d(D.mW.h(0,v).a,w,w,w,w,w,w,A.fS,w,w,w),w,w,w),B.dH(!1,w,w,w,!0,w,w,w,!0,w,w,W.ard,w,w,w,w,new C.evy(d),!1,w,w,w,w,w,w,w,D.fOY,w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.evy.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.evB.prototype={
$1(d){var w,v,u=null,t=B.aG(d,u,x.l).w,s=B.a([D.eoz],x.p)
for(w=0;w<6;++w){v=D.aAO[w]
s.push(B.dH(!1,u,u,u,!0,u,u,u,!0,u,u,D.c0r,u,u,u,u,new C.evA(d,v),!1,u,u,u,u,u,new B.y(v.b,u,A.ms,u,u,u,u,u,u,u,u,u),u,new B.y(v.a,u,A.fS,u,u,u,u,u,u,u,u,u),u,u,u))}return B.bn(!0,new B.cU(new B.aZ(0,1/0,0,t.a.b*0.7),B.ci(s,u,u,D.bFA,u,u,A.ah,!0),u),!0,!1,A.af,!0,!0)},
$S:26}
C.evA.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.evl.prototype={
$1(d){var w=null
return B.ei(B.a([B.bM(!1,A.di,w,w,!0,w,w,w,new C.evj(d),w,w),B.bM(!1,A.EB,w,w,!0,w,w,w,new C.evk(d),w,w)],x.p),w,w,I.m4,D.fMh,w,w,w,w,D.fPf,w)},
$S:18}
C.evj.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.evk.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.evV.prototype={
$0(){var w=this.a
return w.m(new C.evU(w))},
$S:0}
C.evU.prototype={
$0(){return this.a.r=!1},
$S:0}
C.evW.prototype={
$2(d,e){var w,v,u,t=null,s=new B.av(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.my(new C.evL(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.bbA:t
v=B.a([B.b4(u,t,t,new C.biR(w,v,new C.evM(r),new C.evN(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ap(t,B.e_(B.cb(w,new C.evO(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bJr())
return B.aA(A.c6,B.jm(new B.an(A.a_,t,A.b3,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.evP(r),t,r.gcjI(),t,new C.evQ(r),new C.evR(r),new C.evS(r),t,t,t,t,t,t,t,t,t,t,new C.evT(r),t,t,t,!1,A.a3)},
$S:36}
C.evL.prototype={
$0(){return this.a.acJ(this.b)},
$S:0}
C.evT.prototype={
$1(d){return this.a.cCk(d.b)},
$S:69}
C.evR.prototype={
$1(d){return this.a.cjJ(d.b)},
$S:47}
C.evS.prototype={
$1(d){return this.a.cjK(d.b)},
$S:19}
C.evQ.prototype={
$1(d){return this.a.b2G()},
$S:38}
C.evP.prototype={
$1(d){return this.a.adq(d.b)},
$S:326}
C.evM.prototype={
$0(){return this.a.z},
$S:673}
C.evN.prototype={
$0(){return this.a.Q},
$S:642}
C.evO.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bNJ()
if(p.length===0)return A.bK
w=A.w.j(0.55)
v=B.n(14)
u=B.L(A.bz,A.r,1)
t=B.a([D.fJF,A.cS],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.K)(p),++r)t.push(new B.y(p[r],q,D.ftf,q,q,q,q,A.a1,q,2,q,q))
return B.p(q,B.x(t,A.E,q,A.e,A.Q,0,A.p),A.f,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.h8,q,q,q)},
$S:59}
C.evn.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.n(12),t=B.L(e.j(0.6),A.r,1),s=x.p
return new B.D(A.ed,B.B(B.a([B.p(w,B.X(d,e,w,w,w,21),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bd,B.E(B.x(B.a([B.d(f,w,w,w,w,w,w,Ac.Vi,w,w,w),A.bF,B.d(g,w,w,w,w,w,w,F.aax,w,w,w)],s),A.E,w,A.e,A.i,0,A.p),1)],s),A.E,w,A.e,A.i,0,w,w),w)},
$S:1896}
C.evH.prototype={
$0(){var w=this.a.c
w.toString
return B.a5(w,!1).im()},
$S:0}
C.evI.prototype={
$0(){var w=this.a
return w.m(new C.evG(w))},
$S:0}
C.evG.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.evJ.prototype={
$0(){var w=this.a
return w.m(new C.evF(w))},
$S:0}
C.evF.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.evK.prototype={
$0(){var w=this.a
return w.m(new C.evE(w))},
$S:0}
C.evE.prototype={
$0(){return this.a.r=!0},
$S:0}
C.evD.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.mW.gdW(D.mW),w=w.gaf(w);w.C();){v=w.gS(w)
if(v.b.c===e)p.push(v.a)}w=B.d(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.K)(p),++r)u.push(s.cx4(p[r]))
return new B.D(R.akE,B.x(B.a([new B.D(Ah.amj,w,q),B.B(u,A.m,q,A.e,A.i,0,q,q)],v),A.E,q,A.e,A.i,0,A.p),q)},
$S:z+37}
C.evC.prototype={
$0(){return this.a.c9J(this.b)},
$S:0}
C.dpc.prototype={
$0(){var w=this,v=null,u=B.fy(v,v,v,v,B.cT(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a4,A.bX,v,A.dA,A.bV)
u.eg()
return u},
$S:271}
C.bPa.prototype={
$1(d){return d.r<=0},
$S:z+38}
C.bPl.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bPg.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bPm.prototype={
$1(d){return this.a.Ma(d)&&!d.x},
$S:z+0}
C.bPn.prototype={
$2(d,e){return Math.max(d,this.a.aBP(e))},
$S:z+6}
C.bPp.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bPq(w))},
$S:z+5}
C.bPq.prototype={
$0(){return this.a.a},
$S:96}
C.bPo.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:72}
C.bPr.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bPs(w))},
$S:z+5}
C.bPs.prototype={
$0(){return this.a.a},
$S:96}
C.bPc.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bPd(w))},
$S:z+5}
C.bPd.prototype={
$0(){return this.a.a},
$S:96}
C.bPb.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:72}
C.bPe.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bPf(w))},
$S:z+5}
C.bPf.prototype={
$0(){return this.a.a},
$S:96}
C.bP9.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bPt.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bPh.prototype={
$1(d){return d!==this.b&&this.a.aI7(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bPk.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bPj.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bPi.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bJB.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bJC.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.csh.prototype={
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
$S:198}
C.fTh.prototype={
$1(d){var w
$.S()
w=B.J()
w.r=d.gp(0)
return w},
$S:1897}
C.fTj.prototype={
$2(d,e){var w
$.S()
w=B.J()
w.b=A.a9
w.c=e
w.r=d.gp(0)
w.d=A.by
return w},
$S:1898}
C.fTk.prototype={
$5(d,e,f,g,h){return B.br(new B.a3(d,e,d+f,e+g),new B.aP(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1899}
C.fTi.prototype={
$3(d,e,f){var w
$.S()
w=B.J()
w.sam(new B.a9(A.b0,A.b6,A.x,B.a([e,f],x.O),null,null).aA(0,d))
return w},
$S:1900}
C.bJf.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.bJg.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bJe(w))},
$S:0}
C.bJe.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bJh.prototype={
$0(){return B.a([],x.k)},
$S:1901}
C.bJi.prototype={
$1(d){return this.a.bF(d).a>15e5},
$S:424}
C.bJj.prototype={
$0(){var w,v,u
J.bGr(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.CM(v))if(C.hc3(v.b))w.b29(v)
else w.a0k(v)
else{u=w.a.c.beT(v)
w.aeX(u==null?"The "+$.qA().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bJd.prototype={
$1(d){return new B.e2(new C.bJb(this.a,this.b),null)},
$S:20}
C.bJb.prototype={
$2(d,e){var w=null,v=this.b,u=new C.bJc(this.a,v,e),t=$.qA(),s=v.b,r=B.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.ka,w,w,w),q=B.aH(w,w,w,w,D.bRV,w,w,w,new C.bJ7(u,v),w,w,w,w,w,w),p=A.k.E(v.ch,1,2.6),o=x.p
return B.bn(!0,new B.D(A.wc,B.x(B.a([r,A.av,D.fYF,A.W,B.B(B.a([q,B.E(B.kS(t.h(0,s).d,w,w,2.6,1,u,p),1),B.aH(w,w,w,w,D.bYL,w,w,w,new C.bJ8(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.i,0,w,w),B.B(B.a([B.d(""+A.k.V(v.ch*100)+"%",w,w,w,w,w,w,B.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b2,B.bM(!1,D.fBA,w,w,!0,w,w,w,new C.bJ9(u),w,w),B.bM(!1,A.xc,w,w,!0,w,w,w,new C.bJa(d),w,w)],o),A.m,w,A.e,A.i,0,w,w)],o),A.E,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:87}
C.bJc.prototype={
$1(d){var w=this.a
w.m(new C.bJ5(this.b,d))
this.c.$1(new C.bJ6())
w.a.toString},
$S:6}
C.bJ5.prototype={
$0(){return this.a.ch=A.k.E(this.b,1,2.6)},
$S:0}
C.bJ6.prototype={
$0(){},
$S:0}
C.bJ7.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
C.bJ8.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
C.bJ9.prototype={
$0(){return this.a.$1(1)},
$S:0}
C.bJa.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.bJy.prototype={
$2(d,e){var w
if(d==="short"){G.dG(1800,"",120,0,0.55,"noise")
G.dG(200,"",160,2.2,0.4,"saw")
B.fP()
w=this.a
if(w.c!=null)w.aeX("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){G.dG(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.aeX("\u26a0 Overloaded! The "+$.qA().h(0,e.b).b+" can only give about "+A.k.ac(w.a.c.zX(e),2)+" amps but your gadgets are asking for "+A.k.ac(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.aeX("Burnt out! "+e.ay)
G.dG(140,"",320,0,0.6,"noise")
G.dG(900,"",160,1.5,0.35,"square")}},
$S:z+42}
C.bJz.prototype={
$0(){},
$S:0}
C.bIJ.prototype={
$0(){},
$S:0}
C.bJA.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bJx.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=B.a([B.aA(A.c6,B.b4(p,p,p,new C.ajo(w,v,u,t,s,r==null?A.jm:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bJr(o),new C.bJs(o),new C.bJt(o),p,p,p,p,p,p,p,p,p,p,new C.bJu(o),p,p,p,!1,A.a3)],q)
if(o.a.c.a.length===0)n.push(D.baQ)
w=o.Q
if(w!=null){v=B.n(14)
u=B.L(A.cG,A.r,1)
n.push(B.ap(p,B.aA(p,B.p(p,B.B(B.a([D.fzG,B.E(B.d(w,p,p,p,p,p,p,D.fru,p,p,p),1)],q),A.E,p,A.e,A.i,0,p,p),A.f,p,p,new B.o(D.bgV,p,u,v,p,p,A.n),p,p,p,p,A.nv,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bJv(o),p,p,p,p,p,p,!1,A.a3),p,p,10,10,8,p))}if(o.e!=null)n.push(B.ap(8,o.b02(B.B(B.a([D.bHI,new E.fE(A.Cp,"Cut wire",new C.bJw(o),A.c0,p)],q),A.m,p,A.e,A.i,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(B.ap(8,o.ckh(w),p,p,10,10,p,p))}return B.jm(new B.an(A.a_,p,A.b3,A.t,n,p),A.t,p)},
$S:289}
C.bJs.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b9b(s)
if(r!=null){t.m(new C.bJp(t,r,d))
return}w=t.b2P(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new B.u(v*u.a,w.d*u.b).aF(0,s)
t.m(new C.bJq(t,w))}},
$S:47}
C.bJp.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
C.bJq.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bJt.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new C.bJn(w,d))
else if(w.w!=null)w.m(new C.bJo(w,d.b.a7(0,w.x)))},
$S:19}
C.bJn.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
C.bJo.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.E(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.E(w.b/v.y.b,0.08,0.92)},
$S:0}
C.bJr.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b9b(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.alB(u.a,u.b,v.a,v.b)!=null)G.dG(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.aeV()},
$S:38}
C.bJu.prototype={
$1(d){var w=this.a,v=d.b,u=w.b2P(v)
if(u!=null){w.m(new C.bJl(w,u))
if(D.ml.aj(0,u.b))w.cuX(u)
w.a.toString
return}w.m(new C.bJm(w,w.cHH(v)))},
$S:69}
C.bJl.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
G.dG(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
G.dG(200,"",70,0,0.2,"saw")}},
$S:0}
C.bJm.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
C.bJv.prototype={
$0(){var w=this.a
return w.m(new C.bJk(w))},
$S:0}
C.bJk.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bJw.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
G.dG(300,"",50,0,0.35,"noise")
w.aeV()},
$S:0}
C.bIK.prototype={
$0(){return this.a.brj(this.b)},
$S:0}
C.bJ2.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.B(B.a([B.d(d,w,w,w,w,w,w,D.flE,w,w,w),B.E(B.kS(this.b.d,w,w,g,h,new C.bJ4(this.a,f),A.k.E(e,h,g)),1)],x.p),A.m,w,A.e,A.i,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1902}
C.bJ4.prototype={
$1(d){var w=this.a
w.m(new C.bJ3(this.b,d))
w.a.toString},
$S:6}
C.bJ3.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bIQ.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
G.dG(260,"",70,0,0.35,"noise")
w.aeV()},
$S:0}
C.bIR.prototype={
$0(){var w=this.a
return w.m(new C.bIP(w))},
$S:0}
C.bIP.prototype={
$0(){return this.a.d=null},
$S:0}
C.bIS.prototype={
$0(){this.a.m(new C.bIO(this.b,this.c))
G.dG(900,"",40,0,0.3,"noise")},
$S:0}
C.bIO.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bIV.prototype={
$0(){return this.a.b29(this.b)},
$S:0}
C.bIW.prototype={
$0(){return this.a.a0k(this.b)},
$S:0}
C.bIX.prototype={
$0(){return this.a.a1Z(this.b)},
$S:0}
C.bIY.prototype={
$0(){var w=this.a
w.m(new C.bIN(this.b,this.c))
w.a.toString},
$S:0}
C.bIN.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bIZ.prototype={
$0(){var w=this.a
w.m(new C.bIM(this.b,this.c))
w.a.toString},
$S:0}
C.bIM.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bJ_.prototype={
$0(){var w=this.a
w.m(new C.bIL(this.b,this.c))
w.a.toString},
$S:0}
C.bIL.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bJ0.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJ1.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bIT.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bIU.prototype={
$1(d){return this.a.f=d},
$S:6}
C.fqd.prototype={
$1(d){return d.aHM("bulb")},
$S:z+2}
C.fqe.prototype={
$1(d){return d.q5(0,"switch")&&d.aHM("bulb")},
$S:z+2}
C.fqf.prototype={
$1(d){return A.d.b_(d.a,new C.fq0())},
$S:z+2}
C.fq0.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.fqg.prototype={
$1(d){return d.q5(0,"resistor")&&A.d.b_(d.a,new C.fq_())},
$S:z+2}
C.fq_.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fqh.prototype={
$1(d){return!d.q5(0,"battery")&&d.aHM("bulb")},
$S:z+2}
C.fq4.prototype={
$1(d){return A.d.b_(d.a,new C.fpZ())},
$S:z+2}
C.fpZ.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fq5.prototype={
$1(d){return A.d.b_(d.a,new C.fpY())},
$S:z+2}
C.fpY.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fq6.prototype={
$1(d){return A.d.b_(d.a,new C.fpX())},
$S:z+2}
C.fpX.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fq7.prototype={
$1(d){var w=d.a
return A.d.b_(w,new C.fpV())&&A.d.b_(w,new C.fpW())&&d.q5(0,"buck")},
$S:z+2}
C.fpV.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fpW.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fq8.prototype={
$1(d){var w=d.a
return A.d.b_(w,new C.fpT())&&A.d.b_(w,new C.fpU())},
$S:z+2}
C.fpT.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fpU.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fq9.prototype={
$1(d){return A.d.b_(d.a,new C.fpS())},
$S:z+2}
C.fpS.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.dZO.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.aa(0)
w.v(0,v.b)},
$S:0}
C.dZX.prototype={
$1(d){var w=this.a.d
return w.aI7(d)&&w.CM(d)},
$S:z+0}
C.dZY.prototype={
$1(d){return d.x},
$S:z+0}
C.dZZ.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.e__.prototype={
$0(){},
$S:0}
C.dZN.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.n(22),o=x.p,n=B.a([D.fRc,A.av,D.fBw,A.W],o)
for(w=this.a,v=0;v<19;++v){u=D.Ry[v]
t=A.c.j(0.06)
s=new B.aP(14,14)
r=new B.ay(A.bz,1,A.r,-1)
n.push(B.aA(q,B.p(q,B.x(B.a([new B.y(u.a,q,A.iw,q,q,q,q,q,q,q,q,q),A.bF,new B.y(u.b,q,D.fse,q,q,q,q,A.a1,q,3,q,q)],o),A.E,q,A.e,A.i,0,A.p),A.f,q,q,new B.o(t,q,new B.bG(r,r,r,r),new B.bg(s,s,s,s),q,q,A.n),q,q,q,A.ct,A.bg,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dZM(w,d,u),q,q,q,q,q,q,!1,A.a3))}return B.eU(q,F.mE,new B.D(A.bQ,new B.a4(340,q,B.ci(n,q,q,q,q,q,A.ah,!0),q),q),q,q,q,q,A.d8,q,new B.b8(p,A.a0),q)},
$S:49}
C.dZM.prototype={
$0(){B.a5(this.b,!1).O(null)
var w=this.a
w.m(new C.dZL(w,this.c))
G.dG(800,"",120,-0.5,0.3,"square")},
$S:0}
C.dZL.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bk2()},
$S:0}
C.dZJ.prototype={
$1(d){return new C.W8(this.a.d,null)},
$S:z+44}
C.dZK.prototype={
$0(){},
$S:0}
C.dZW.prototype={
$1(d){return new B.e2(new C.dZV(this.a),null)},
$S:20}
C.dZV.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.aiz(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.q(0,k),f=g?A.ba:A.aJ
k=B.aG(d,m,x.l).w
w=l.r
v=x.p
u=B.a([B.B(B.a([D.fOp,A.b2,B.d(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.i,0,m,m),A.N,B.bx(B.n(4),B.kk(A.bz,m,m,5,m,w.a/11,new B.lI(f,x.c)),A.ap),A.ae],v)
if(h)u.push(D.fEH)
else{h=f.j(0.1)
t=B.n(14)
s=B.L(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.d(r+" Now: "+i.a,m,m,m,m,m,m,Ae.Kp,m,m,m)
q=B.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,I.Ex,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.p(m,B.x(B.a([r,A.av,q,new B.bN(A.a8,m,m,B.bM(!1,B.d(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.dZT(l,e),m,m),m)],v),A.E,m,A.e,A.i,0,A.p),A.f,m,m,new B.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bg,m,m,m))}u.push(A.W)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aP(12,12)
n=new B.ay(o===l.f?f.j(0.6):A.dr,1,A.r,-1)
if(w.q(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.q(0,o)?A.aC:A.c
u.push(B.aA(m,B.p(m,new B.c9(A.aK,A.e,A.i,A.m,m,A.p,m,0,B.a([new B.y(s,m,A.aav,m,m,m,m,m,m,m,m,m),A.as,new B.by(1,A.bb,new B.y(r.a,m,new B.F(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new B.o(h,m,new B.bG(n,n,n,n),new B.bg(t,t,t,t),m,m,A.n),m,m,m,A.eI,A.nv,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.dZU(l,o,e),m,m,m,m,m,m,!1,A.a3))}return B.bn(!0,new B.cU(new B.aZ(0,1/0,0,k.a.b*0.75),B.ci(u,m,m,A0.yw,m,m,A.ah,!0),m),!0,!1,A.af,!0,!0)},
$S:87}
C.dZT.prototype={
$0(){var w=this.a
w.m(new C.dZR(w))
this.b.$1(new C.dZS())
w.Ff()},
$S:0}
C.dZR.prototype={
$0(){var w=this.a
$.aiz()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.dZS.prototype={
$0(){},
$S:0}
C.dZU.prototype={
$0(){var w=this.a
w.m(new C.dZP(w,this.b))
this.c.$1(new C.dZQ())
w.Ff()},
$S:0}
C.dZP.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dZQ.prototype={
$0(){},
$S:0}
C.e_1.prototype={
$0(){return B.a5(this.a,!1).im()},
$S:0}
C.e_2.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.m8("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a5(t.b,!1).cc(B.ej(new C.e_0(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.e_0.prototype={
$1(d){B.lh("construction")
return Aj.hQc()},
$S:z+45}
C.e_3.prototype={
$0(){return E.hC3(this.a,"ELECTRONICS LAB",this.b,A.aJ)},
$S:0}
C.e_4.prototype={
$0(){var w=this.a
return w.m(w.d.gcZq())},
$S:0}
C.e_5.prototype={
$0(){var w=this.a,v=w.d
w.m(v.gt4(v))
w.Ff()},
$S:0}
C.cJy.prototype={
$2(d,e){var w=null,v=this.a.gayh().x
v===$&&B.c()
return B.b4(w,w,w,new C.baK(v,w),A.aw)},
$S:63}
C.cJx.prototype={
$3(d,e,f){var w=new B.aF($.S().r,A.ag,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.D(new B.aY(v,t))
w.D(new B.c5(v,u,v+e,u))
w.D(new B.c5(v,u,v,u+e))
w.D(new B.c5(v,u,v-e,u))
w.D(new B.c5(v,u,v,t))
w.D(new B.bt())
t=B.J()
t.r=A.c.j(f).gp(0)
this.a.aK(w,t)},
$S:378}
C.fY6.prototype={
$3(d,e,f){return new C.Vr(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+46}
C.fY7.prototype={
$4(d,e,f,g){var w=x.Y
return new B.d1(e,!1,B.iv(A.A,g,null,new B.bh(B.cK(A.cu,e,null),new B.bq(0.85,1,w),w.k("bh<bO.T>"))),null)},
$C:"$4",
$R:4,
$S:33}
C.dVY.prototype={
$0(){return B.a5(this.a,!1).im()},
$S:0}
C.dVX.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.n(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c0g(o):q.bDu(o,p),m=x.p
p=B.a([B.p4(new B.mH(n,new B.bQ(p,x.bz)),A.pb,B.qv(),A.b5,A.b5,new C.dVV())],m)
n=t.d
if(n){w=A.k.F(q.gSn(),12)<4
v=w?150:96
u=B.n(16)
m=B.a([A.as],m)
if(w)m.push(D.bHu)
else m.push(A.b2)
m.push(B.p(s,s,A.f,s,s,new B.o(w?A.ba:A.au,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.as)
p.push(B.ap(s,B.at(B.cY(s,B.B(m,A.m,s,A.e,A.i,0,s,s),s,s,A.et,new B.o(A.w,s,s,u,s,s,A.n),A.mI,s,28,s,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.vl)p.push(B.ap(s,B.at(B.p(s,s,A.f,s,s,A.LD,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.wZ)p.push(B.ap(s,B.p(s,s,A.f,s,s,A.LD,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ap(6,B.aA(s,B.at(B.p(s,s,A.f,s,s,new B.o(A.c.j(0.75),s,s,B.n(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dVW(q),s,s,s,s,s,s,!1,A.a3),s,s,0,0,s,s))
return B.bx(r,new B.an(A.a_,s,A.b3,A.t,p,s),A.ap)},
$S:313}
C.dVV.prototype={
$2(d,e){var w=x.Y
return new B.d1(e,!1,B.iv(A.A,d,null,new B.bh(e,new B.bq(0.92,1,w),w.k("bh<bO.T>"))),null)},
$S:368}
C.dVW.prototype={
$0(){var w=this.a
return w.m(new C.dVU(w))},
$S:0}
C.dVU.prototype={
$0(){return this.a.e=null},
$S:0}
C.dVT.prototype={
$0(){var w=this.a
return w.m(new C.dVS(w,this.b))},
$S:0}
C.dVS.prototype={
$0(){return this.a.e=A.d.cp(F.kr,this.b)},
$S:0}
C.dVR.prototype={
$0(){var w=this.a
return w.m(new C.dVQ(w))},
$S:0}
C.dVQ.prototype={
$0(){return this.a.e=0},
$S:0}
C.dVM.prototype={
$0(){var w=this.a
return w.m(new C.dVL(w))},
$S:0}
C.dVL.prototype={
$0(){return this.a.e=null},
$S:0}
C.dVP.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=B.n(o?20:8),m=A.w.j(0.55),l=x.p
m=B.p(p,B.B(B.a([D.fX0,A.as,B.E(B.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eM,p,p,p,D.fyw,p,p,p),1),B.d(A.a.aY(A.o.u(B.dh(new B.V(Date.now(),0,!1))),2,"0")+":"+A.a.aY(A.o.u(B.fS(new B.V(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.r1,p,p,p)],l),A.m,p,A.e,A.i,0,p,p),A.f,m,p,p,p,24,p,p,A.km,p,p,p)
w=this.a
v=B.a([B.b4(p,p,p,new C.bxf(w.gSn(),this.c.d,p),A.aw)],l)
o=w.e
if(o!=null){u=B.n(10)
t=B.L(A.aV,A.r,1)
s=B.n(10)
o=B.p(p,B.B(B.a([B.aA(p,B.p(p,p,A.f,p,p,A.adQ,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dVO(w),p,p,p,p,p,p,!1,A.a3),A.eg,B.p(p,p,A.f,p,p,A.adW,p,12,p,p,p,p,p,12),A.eg,B.p(p,p,A.f,p,p,D.b66,p,12,p,p,p,p,p,12),A.as,B.E(B.d(F.kr[o].a,p,1,A.a1,p,p,p,A.aap,p,p,p),1)],l),A.m,p,A.e,A.i,0,p,p),A.f,A.cr,p,p,p,24,p,p,A.fC,p,p,p)
r=w.e
r.toString
v.push(B.bT(0,new B.D(D.bE6,B.p(p,B.bx(s,B.x(B.a([o,B.E(B.b4(p,p,p,new C.aff(r,w.gSn(),p),A.fF),1)],l),A.m,p,A.e,A.i,0,A.p),A.ap),A.f,p,p,new B.o(A.w,p,t,u,D.dsB,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=B.n(18)
t=B.L(A.aV,A.r,1)
s=B.a([],l)
for(q=0;q<8;++q)s.push(new B.D(A.jC,w.awd(F.kr[q],34,!1),p))
v.push(B.ap(8,B.at(B.p(p,B.B(s,A.m,p,A.e,A.Q,0,p,p),A.f,p,p,new B.o(o,p,t,u,p,p,A.n),p,p,p,p,A.lH,p,p,p),p,p,p),p,p,0,0,p,p))
return B.bx(n,B.p(p,B.x(B.a([m,B.E(new B.an(A.a_,p,A.b3,A.t,v,p),1)],l),A.m,p,A.e,A.i,0,A.p),A.f,X.Zc,p,p,p,p,p,p,p,p,p,p),A.ap)},
$S:313}
C.dVO.prototype={
$0(){var w=this.a
return w.m(new C.dVN(w))},
$S:0}
C.dVN.prototype={
$0(){return this.a.e=null},
$S:0}
C.fqI.prototype={
$0(){return D.eeO},
$S:z+47}
C.fqJ.prototype={
$0(){return D.dN6},
$S:z+48}
C.fqK.prototype={
$0(){return D.dJF},
$S:z+49}
C.fqL.prototype={
$0(){return D.dMu},
$S:z+50}
C.fqM.prototype={
$0(){return D.dRr},
$S:z+51}
C.fqN.prototype={
$0(){return D.eaA},
$S:z+52}
C.fqO.prototype={
$0(){return D.ecK},
$S:z+53}
C.fqP.prototype={
$0(){return D.dQL},
$S:z+36}
C.clG.prototype={
$0(){return B.a5(this.a,!1).im()},
$S:0}
C.clH.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=B.a([],k)
for(w=$.hFI(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aP(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ac(0,A.G,p.j(0.4),A.ds,16)],t)
n=A.c.j(0.85)
j.push(B.aA(m,B.p(m,new B.an(A.a_,m,A.ab,A.t,B.a([new B.cO(m,-6,-6,m,m,m,new B.y(r.c,m,Ai.Kn,m,m,m,m,m,m,m,m,m),m),new B.bN(A.lv,m,m,B.x(B.a([new B.y(r.a,m,D.fx5,m,m,m,m,m,m,m,m,m),A.cS,new B.y(r.b,m,new B.F(!0,n,m,m,m,m,12,A.a7,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.E,m,A.e,A.Q,0,A.p),m)],k),m),A.f,m,m,new B.o(m,m,m,new B.bg(q,q,q,q),p,new B.a9(A.az,A.aE,A.x,o,m,m),A.n),m,v,m,m,A.bD,m,m,l),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.clF(d,r),m,m,m,m,m,m,!1,A.a3))}return B.bY(A.bG,j,A.br,m,14,14)},
$S:169}
C.clF.prototype={
$0(){return B.a5(this.a,!1).cc(B.ej(new C.clE(this.b),!1,null,x.H))},
$S:0}
C.clE.prototype={
$1(d){return this.a.f.$0()},
$S:39}
C.eSf.prototype={
$0(){var w=this.a
return w.w=w.d[w.b6f(w.f)]},
$S:0}
C.eSb.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cM.ag()*7},
$S:0}
C.eSa.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bP(0,A.cb)
w.w=""},
$S:0}
C.eSd.prototype={
$0(){var w=this.a
return w.m(new C.eSc(w,this.b))},
$S:0}
C.eSc.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cz(w,this.b)},
$S:0}
C.eSe.prototype={
$1(d){return this.a.b0x(0)},
$S:2}
C.e1N.prototype={
$0(){return C.Jn("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.e1O.prototype={
$0(){},
$S:0}
C.e1I.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.e1K.prototype={
$0(){return this.a.b0z(this.b)},
$S:0}
C.e1L.prototype={
$0(){var w=this.a
return w.m(new C.e1J(w))},
$S:0}
C.e1J.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.e1M.prototype={
$0(){var w=this.a
return w.b0z(w.d)},
$S:0}
C.dNu.prototype={
$2(d,e){return d+e},
$S:80}
C.dNv.prototype={
$0(){},
$S:0}
C.dNp.prototype={
$2(d,e){return d+e},
$S:80}
C.dNs.prototype={
$0(){var w=this.a
return w.m(new C.dNr(w,this.b))},
$S:0}
C.dNr.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dNt.prototype={
$0(){var w=this.a
return w.m(new C.dNq(w))},
$S:0}
C.dNq.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.dZi.prototype={
$0(){return E.uy(this.b,this.a.d,"drawing")},
$S:0}
C.dZj.prototype={
$1(d){var w=this.a
return w.m(new C.dZh(w,d))},
$S:47}
C.dZh.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aJw(u,v,t))},
$S:0}
C.dZk.prototype={
$1(d){var w=this.a
return w.m(new C.dZg(w,d))},
$S:19}
C.dZg.prototype={
$0(){return A.d.gak(this.a.e).c.push(this.b.b)},
$S:0}
C.dZl.prototype={
$1(d){var w=this.a
return w.m(new C.dZf(w,d))},
$S:22}
C.dZf.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aJw(u,v,t))},
$S:0}
C.dZm.prototype={
$0(){var w=this.a
return w.m(new C.dZe(w,this.b))},
$S:0}
C.dZe.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.dZn.prototype={
$1(d){var w=this.a
return w.m(new C.dZd(w,d))},
$S:6}
C.dZd.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dZo.prototype={
$0(){var w=this.a
return w.m(new C.dZc(w))},
$S:0}
C.dZc.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dZp.prototype={
$0(){var w=this.a
return w.m(new C.dZb(w))},
$S:0}
C.dZb.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.dZq.prototype={
$0(){var w=this.a
return w.m(A.d.gt4(w.e))},
$S:0}
C.dZr.prototype={
$0(){var w=this.a
return w.m(new C.dZa(w))},
$S:0}
C.dZa.prototype={
$0(){var w=this.a
w.x=D.azE[A.o.F(A.d.cp(D.azE,w.x)+1,4)]},
$S:0}
C.ep6.prototype={
$0(){return this.a.f.M(0,this.b)},
$S:0}
C.ep7.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.Jn("bell",B.a([0,4,7],w),500,0.45)
u.m(new C.ep5(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.c()
if(v===u.length)C.Jn("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:12}
C.ep5.prototype={
$0(){var w=this.a
w.r.v(0,B.a([this.b,this.c],x.t))
w.f.aa(0)},
$S:0}
C.ep8.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.ep4(w))},
$S:12}
C.ep4.prototype={
$0(){var w=this.a
w.f.aa(0)
w.x=!1},
$S:0}
C.epc.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return B.aA(w,B.ly(new C.epa(v,e),w,A.b5,A.pb,w,w,new B.bq(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.epb(v,e),w,w,w,w,w,w,!1,A.a3)},
$S:84}
C.epb.prototype={
$0(){return this.a.cbE(this.b)},
$S:0}
C.epa.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dt(),m=n.a
m.$flags&2&&B.aj(m)
m[11]=0.001
n.fM(3.141592653589793*e)
m=B.n(16)
w=o?p:D.c6W
if(o)v=q.a.r.q(0,q.b)?A.ba.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.L(u.r.q(0,t)?A.ba:A.aV,A.r,1)
if(o){r=B.dt()
r.fM(3.141592653589793)
u=u.e
u===$&&B.c()
r=B.fz(A.A,B.d(u[t],p,p,p,p,p,p,H.aaA,p,p,p),p,r,!0)
u=r}else u=D.fPV
return B.fz(A.A,B.p(A.A,u,A.f,p,p,new B.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:113}
C.epd.prototype={
$0(){var w=this.a
return w.m(new C.ep9(w,this.b))},
$S:0}
C.ep9.prototype={
$0(){var w=this.a
w.d=this.b.a
w.atx()},
$S:0}
C.epe.prototype={
$0(){var w=this.a
return w.m(w.gbMc())},
$S:0}
C.ezT.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.ezU.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.ezR.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ezS.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.ezQ(w))},
$S:12}
C.ezQ.prototype={
$0(){return this.a.f=-1},
$S:0}
C.ezV.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.ezW.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.ezX.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b0y()},
$S:12}
C.ezY.prototype={
$0(){return this.a.cbK(this.b)},
$S:0}
C.eNK.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:75}
C.eNT.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.d(d,w,1,A.a1,w,w,w,B.l(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.D(A.kN,B.B(B.a([v,A.ad,new B.ds(1,A.cn,B.eO(A.A,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.e3),w)],x.p),A.m,w,A.e,A.i,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1903}
C.eNP.prototype={
$1(d){return this.a.m(new C.eNO())},
$S:2}
C.eNO.prototype={
$0(){},
$S:0}
C.eNQ.prototype={
$0(){var w=this.a
return w.m(new C.eNN(w,this.b))},
$S:0}
C.eNN.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eNR.prototype={
$1(d){var w=this.a
return w.m(new C.eNM(w,d))},
$S:6}
C.eNM.prototype={
$0(){return this.a.f=A.k.V(this.b)},
$S:0}
C.eNS.prototype={
$0(){var w=this.a
return w.m(new C.eNL(w))},
$S:0}
C.eNL.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.enM.prototype={
$0(){},
$S:0}
C.enN.prototype={
$0(){},
$S:0}
C.enF.prototype={
$0(){var w=this.a
return w.m(new C.enE(w))},
$S:0}
C.enE.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.bZ(u,1,!1,x.S)
w.r=0.9
E.WV("hat",0,0.6)},
$S:0}
C.enG.prototype={
$0(){var w=this.a
return w.m(new C.enD(w))},
$S:0}
C.enD.prototype={
$0(){this.a.y=1.1
E.mm("bell",36,200,0.4)},
$S:0}
C.enH.prototype={
$0(){var w=this.a
return w.m(new C.enC(w))},
$S:0}
C.enC.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.ap(Math.max(v,u)-t+1)
w.as=u
E.mm("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.enI.prototype={
$0(){var w=this.a
return w.m(new C.enB(w,this.b))},
$S:0}
C.enB.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.enJ.prototype={
$1(d){var w=this.a
return w.m(new C.enA(w,d))},
$S:6}
C.enA.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.V(this.b),r=J.e0(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.enK.prototype={
$1(d){var w=this.a
return w.m(new C.enz(w,d))},
$S:6}
C.enz.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
C.enL.prototype={
$1(d){var w=this.a
return w.m(new C.eny(w,d))},
$S:6}
C.eny.prototype={
$0(){return this.a.Q=A.k.V(this.b)},
$S:0}
C.clC.prototype={
$0(){var w=this
return E.mm(w.a,w.b,w.c,w.d)},
$S:1};(function aliases(){var w=C.aNB.prototype
w.byx=w.t
w=C.aMG.prototype
w.bxA=w.t
w=C.aMH.prototype
w.bxB=w.t
w=C.aML.prototype
w.bxF=w.t
w=C.aOq.prototype
w.bzt=w.t
w=C.aNz.prototype
w.byv=w.t
w=C.ayU.prototype
w.buA=w.t
w=C.ayV.prototype
w.buB=w.t
w=C.aL7.prototype
w.bvY=w.t
w=C.aMU.prototype
w.bxO=w.t
w=C.aMI.prototype
w.bxC=w.t
w=C.aN0.prototype
w.bxW=w.t
w=C.aNt.prototype
w.byp=w.t
w=C.aNU.prototype
w.byQ=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(C.aFD.prototype,"gaxF","c7h",1)
var r
v(r=C.aE6.prototype,"gcg_","cg0",22)
w(r,"gc7R","b_9",1)
w(C.aE8.prototype,"gc9z","c9A",1)
u(C.aEp.prototype,"gc9G","c9H",39)
w(r=C.aIF.prototype,"gczv","czw",1)
w(r,"gc9I","aeL",1)
w(r,"gckr","cks",1)
w(r,"gc9F","aeK",3)
w(r=C.aFC.prototype,"gbJk","aa9",3)
w(r,"gcjI","b2G",1)
w(r,"gcnu","ahj",3)
t(r,"gc9K","aeM",3)
t(r=C.a57.prototype,"gt4","aa",1)
v(r,"gcXc","aoj",0)
v(r,"gcTA","Ma",0)
w(r,"gcZq","bk2",1)
s(C.ajo.prototype,"gca6",0,5,null,["$5"],["qJ"],41,0,0)
w(r=C.aEB.prototype,"gca7","ca8",1)
w(r,"gcqj","ahF",3)
w(r,"gcgf","ag_",3)
w(r,"gcxw","aiN",3)
w(r=C.aG4.prototype,"gcbF","cbG",1)
t(r,"gcbD","b0x",1)
w(C.aFo.prototype,"gbMc","atx",1)
t(C.aFJ.prototype,"gcbH","cbI",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aD,[C.akE,C.GB,C.vf,C.aTD,C.a3M,C.bbP,C.c5P,C.yt,C.CM,C.nC,C.bcy,C.AS,C.buI,C.qm,C.r6,C.CQ,C.ZY,C.afm,C.a1d,C.D_,C.aci,C.acy,C.aet,C.Gm,C.ek,C.tR,C.aaZ,C.ac4,C.a57,C.mS,C.bcz,C.fT,C.mo,C.bw1,C.aJw])
u(B.hz,[C.fHu,C.fwE,C.fE2,C.fE3,C.fHr,C.fHs,C.egW,C.ehe,C.eww,C.ew3,C.ew4,C.ew5,C.ew6,C.ew7,C.ew8,C.ew9,C.ewa,C.ew1,C.ew2,C.ew0,C.ewr,C.ews,C.ewt,C.dN0,C.dN2,C.dN5,C.dNg,C.c5Q,C.c5R,C.fq1,C.fq2,C.fq3,C.fqa,C.fqb,C.fqc,C.dP2,C.dOK,C.dP3,C.dOF,C.dOA,C.dOC,C.dOI,C.dOV,C.dOT,C.dOU,C.dOS,C.dOP,C.dOR,C.f5S,C.f5z,C.f5G,C.f5P,C.f5t,C.dpg,C.dph,C.dpd,C.dpe,C.dpf,C.dpi,C.dpj,C.dpk,C.dpl,C.dpm,C.dpn,C.dpo,C.dpp,C.dpq,C.evs,C.evt,C.evu,C.evv,C.evq,C.evr,C.evX,C.evz,C.evB,C.evl,C.evT,C.evR,C.evS,C.evQ,C.evP,C.evn,C.bPa,C.bPl,C.bPg,C.bPm,C.bPo,C.bPb,C.bP9,C.bPt,C.bPh,C.bPk,C.bPj,C.bPi,C.bJB,C.fTh,C.fTk,C.fTi,C.bJi,C.bJd,C.bJc,C.bJA,C.bJs,C.bJt,C.bJr,C.bJu,C.bJ2,C.bJ4,C.bJ0,C.bJ1,C.bIT,C.bIU,C.fqd,C.fqe,C.fqf,C.fq0,C.fqg,C.fq_,C.fqh,C.fq4,C.fpZ,C.fq5,C.fpY,C.fq6,C.fpX,C.fq7,C.fpV,C.fpW,C.fq8,C.fpT,C.fpU,C.fq9,C.fpS,C.dZX,C.dZY,C.dZN,C.dZJ,C.dZW,C.e_0,C.cJx,C.fY6,C.fY7,C.clE,C.eSe,C.dZj,C.dZk,C.dZl,C.dZn,C.epa,C.eNK,C.eNT,C.eNP,C.eNR,C.enJ,C.enK,C.enL])
u(B.jx,[C.fHt,C.eh0,C.egZ,C.ewc,C.ewp,C.dOB,C.dOY,C.dV2,C.f5V,C.f5W,C.f5y,C.f5L,C.f5M,C.f5H,C.f5N,C.f5s,C.evo,C.evp,C.evW,C.evO,C.evD,C.bPn,C.bPp,C.bPr,C.bPc,C.bPe,C.bJC,C.csh,C.fTj,C.bJb,C.bJy,C.bJx,C.dZV,C.cJy,C.dVX,C.dVV,C.dVP,C.clH,C.dNu,C.dNp,C.epc])
u(B.af,[C.W8,C.Wv,C.V1,C.V6,C.NV,C.aIE,C.Wu,C.ajm,C.VI,C.ayA,C.Vr,C.X1,C.VQ,C.V2,C.VH,C.Wp,C.Wz,C.WT,C.Wo])
u(B.ah,[C.blX,C.aNB,C.aMG,C.aML,C.aEp,C.aOq,C.aNz,C.ayU,C.bzg,C.aL7,C.aMU,C.aNU,C.aN0,C.aMI,C.blo,C.aFo,C.aFJ,C.bmE,C.aNt])
u(B.iI,[C.egU,C.egV,C.eh6,C.eh7,C.eh2,C.eh1,C.eh3,C.eh_,C.eh4,C.egY,C.eh5,C.egX,C.eha,C.eh9,C.ehb,C.eh8,C.ehc,C.ehd,C.ehf,C.ewv,C.ewx,C.ewy,C.ewe,C.ewd,C.ewb,C.ewk,C.ewl,C.ewh,C.ewm,C.ewg,C.ewn,C.ewo,C.ewf,C.ewq,C.ewj,C.ewu,C.ewi,C.dNn,C.dNm,C.dN_,C.dNo,C.dN1,C.dN3,C.dN4,C.dN6,C.dMX,C.dMY,C.dMZ,C.dNd,C.dNe,C.dNf,C.dNc,C.dNh,C.dNb,C.dNi,C.dNa,C.dNj,C.dN9,C.dNk,C.dN8,C.dNl,C.dN7,C.dOH,C.dOG,C.dOL,C.dOD,C.dOE,C.dOM,C.dON,C.dOO,C.dOJ,C.dOz,C.dOX,C.dOW,C.dOZ,C.dP_,C.dP0,C.dOQ,C.dP1,C.cU3,C.dV0,C.dV_,C.dV1,C.fqs,C.fqt,C.fqu,C.fqv,C.fqw,C.fqx,C.fqy,C.fqz,C.fqA,C.f5U,C.f5T,C.f5B,C.f5A,C.f5w,C.f5v,C.f5x,C.f5u,C.f5J,C.f5I,C.f5K,C.f5C,C.f5O,C.f5F,C.f5Q,C.f5E,C.f5R,C.f5D,C.evx,C.evm,C.evw,C.evi,C.evy,C.evA,C.evj,C.evk,C.evV,C.evU,C.evL,C.evM,C.evN,C.evH,C.evI,C.evG,C.evJ,C.evF,C.evK,C.evE,C.evC,C.dpc,C.bPq,C.bPs,C.bPd,C.bPf,C.bJf,C.bJg,C.bJe,C.bJh,C.bJj,C.bJ5,C.bJ6,C.bJ7,C.bJ8,C.bJ9,C.bJa,C.bJz,C.bIJ,C.bJp,C.bJq,C.bJn,C.bJo,C.bJl,C.bJm,C.bJv,C.bJk,C.bJw,C.bIK,C.bJ3,C.bIQ,C.bIR,C.bIP,C.bIS,C.bIO,C.bIV,C.bIW,C.bIX,C.bIY,C.bIN,C.bIZ,C.bIM,C.bJ_,C.bIL,C.dZO,C.dZZ,C.e__,C.dZM,C.dZL,C.dZK,C.dZT,C.dZR,C.dZS,C.dZU,C.dZP,C.dZQ,C.e_1,C.e_2,C.e_3,C.e_4,C.e_5,C.dVY,C.dVW,C.dVU,C.dVT,C.dVS,C.dVR,C.dVQ,C.dVM,C.dVL,C.dVO,C.dVN,C.fqI,C.fqJ,C.fqK,C.fqL,C.fqM,C.fqN,C.fqO,C.fqP,C.clG,C.clF,C.eSf,C.eSb,C.eSa,C.eSd,C.eSc,C.e1N,C.e1O,C.e1I,C.e1K,C.e1L,C.e1J,C.e1M,C.dNv,C.dNs,C.dNr,C.dNt,C.dNq,C.dZi,C.dZh,C.dZg,C.dZf,C.dZm,C.dZe,C.dZd,C.dZo,C.dZc,C.dZp,C.dZb,C.dZq,C.dZr,C.dZa,C.ep6,C.ep7,C.ep5,C.ep8,C.ep4,C.epb,C.epd,C.ep9,C.epe,C.ezT,C.ezU,C.ezR,C.ezS,C.ezQ,C.ezV,C.ezW,C.ezX,C.ezY,C.eNO,C.eNQ,C.eNN,C.eNM,C.eNS,C.eNL,C.enM,C.enN,C.enF,C.enE,C.enG,C.enD,C.enH,C.enC,C.enI,C.enB,C.enA,C.enz,C.eny,C.clC])
t(C.bzt,C.aNB)
t(C.aFD,C.bzt)
u(B.mg,[C.biT,C.bcR,C.bu6,C.bbx,C.bsK,C.bs9,C.bcc,C.bsb,C.bwb,C.biR,C.ajo,C.baK,C.bxf,C.aff,C.bxr,C.bsa,C.bnq])
t(C.aMH,C.aMG)
t(C.aE6,C.aMH)
t(C.bzd,C.aML)
t(C.aE8,C.bzd)
u(B.lB,[C.KU,C.a10,C.JR])
u(B.ax,[C.bt7,C.afy,C.aeq,C.QL,C.btC,C.a8Y,C.beZ])
t(C.aIF,C.aOq)
t(C.biQ,B.p6)
t(C.aFC,C.aNz)
t(C.ayV,C.ayU)
t(C.ajn,C.ayV)
t(C.aEB,C.bzg)
t(C.baL,C.aL7)
t(C.blm,C.aMU)
t(C.bzA,C.aNU)
t(C.aG4,C.bzA)
t(C.bzi,C.aN0)
t(C.blx,C.bzi)
t(C.bzc,C.aMI)
t(C.bl8,C.bzc)
t(C.bzr,C.aNt)
t(C.bm8,C.bzr)
w(C.aNB,B.cg)
w(C.bzt,E.nB)
w(C.aMG,B.cg)
w(C.aMH,E.nB)
w(C.aML,B.cg)
w(C.bzd,E.nB)
w(C.aOq,B.eQ)
w(C.aNz,B.cg)
w(C.ayU,B.cg)
w(C.ayV,E.nB)
w(C.aL7,B.cg)
v(C.bzg,B.eE)
w(C.aMU,B.cg)
w(C.aMI,B.cg)
w(C.bzc,E.nB)
w(C.aN0,B.cg)
w(C.bzi,E.nB)
w(C.aNt,B.cg)
w(C.bzr,E.nB)
w(C.aNU,B.cg)
w(C.bzA,E.nB)})()
B.j2(b.typeUniverse,JSON.parse('{"W8":{"af":[],"v":[]},"blX":{"ah":["W8"]},"Wv":{"af":[],"v":[]},"aFD":{"ah":["Wv"]},"biT":{"aC":[]},"V1":{"af":[],"v":[]},"aE6":{"ah":["V1"]},"V6":{"af":[],"v":[]},"aE8":{"ah":["V6"]},"bcR":{"aC":[]},"afy":{"ax":[],"v":[]},"aeq":{"ax":[],"v":[]},"aIE":{"af":[],"v":[]},"NV":{"af":[],"v":[]},"aEp":{"ah":["NV"]},"bt7":{"ax":[],"v":[]},"QL":{"ax":[],"v":[]},"bu6":{"aC":[]},"btC":{"ax":[],"v":[]},"bbx":{"aC":[]},"aIF":{"ah":["aIE"]},"bsK":{"aC":[]},"bs9":{"aC":[]},"bcc":{"aC":[]},"bsb":{"aC":[]},"bwb":{"aC":[]},"Wu":{"af":[],"v":[]},"biQ":{"aC":[]},"aFC":{"ah":["Wu"]},"biR":{"aC":[]},"ajo":{"aC":[]},"ajm":{"af":[],"v":[]},"ajn":{"ah":["ajm"]},"VI":{"af":[],"v":[]},"ayA":{"af":[],"v":[]},"aEB":{"ah":["VI"],"eE":[]},"baL":{"ah":["ayA"]},"baK":{"aC":[]},"Vr":{"af":[],"v":[]},"blm":{"ah":["Vr"]},"bxf":{"aC":[]},"aff":{"aC":[]},"a8Y":{"ax":[],"v":[]},"X1":{"af":[],"v":[]},"VQ":{"af":[],"v":[]},"V2":{"af":[],"v":[]},"VH":{"af":[],"v":[]},"Wp":{"af":[],"v":[]},"Wz":{"af":[],"v":[]},"WT":{"af":[],"v":[]},"Wo":{"af":[],"v":[]},"aG4":{"ah":["X1"]},"bxr":{"aC":[]},"blx":{"ah":["VQ"]},"bsa":{"aC":[]},"bl8":{"ah":["V2"]},"blo":{"ah":["VH"]},"bnq":{"aC":[]},"aFo":{"ah":["Wp"]},"aFJ":{"ah":["Wz"]},"bmE":{"ah":["WT"]},"bm8":{"ah":["Wo"]},"beZ":{"ax":[],"v":[]}}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.as
return{c:w("lI<t?>"),G:w("t"),J:w("bu<m,I>"),Q:w("dx<m>"),Z:w("a0"),M:w("O<da>"),R:w("O<Sz>"),a:w("O<a3M>"),V:w("O<ac>"),O:w("O<t>"),k:w("O<V>"),D:w("O<aB<aD>>"),w:w("O<a0>"),E:w("O<ai<m>>"),b:w("O<ai<I>>"),U:w("O<ai<G?>>"),x:w("O<a8<m,aD>>"),g:w("O<u>"),C:w("O<tR>"),v:w("O<fW>"),F:w("O<+(m,m)>"),fT:w("O<+(I,v)>"),I:w("O<+(G,m)>"),u:w("O<+(G,G)>"),r:w("O<+(m,m,a0)>"),e:w("O<+(m,I,I,G)>"),o:w("O<+(m,G,m,G)>"),d:w("O<+(m,m,I,I,a8<m,I>)>"),_:w("O<vf>"),fQ:w("O<aaZ>"),s:w("O<m>"),cF:w("O<au>"),X:w("O<u7>"),p:w("O<v>"),bL:w("O<ac4>"),fH:w("O<lf>"),a_:w("O<aci>"),cB:w("O<nC>"),ba:w("O<acy>"),eW:w("O<CQ>"),fY:w("O<ZY>"),ac:w("O<aet>"),cd:w("O<D_>"),fr:w("O<afm>"),e4:w("O<a1d>"),au:w("O<aJw>"),f7:w("O<P>"),n:w("O<I>"),t:w("O<G>"),dS:w("O<aC?>"),fs:w("O<tR?>"),bN:w("O<G?>"),q:w("cx<ajn>"),A:w("cx<ah<af>>"),bF:w("ai<t>"),gl:w("ai<V>"),ew:w("ai<aD>"),j:w("ai<@>"),P:w("a8<m,@>"),f:w("a8<@,@>"),bd:w("N<ek,m>"),fR:w("N<+(I,v),v>"),l:w("iC"),gA:w("zD"),gD:w("wf"),h:w("cv"),K:w("aD"),W:w("tR"),B:w("ek"),N:w("m"),bO:w("au"),Y:w("bq<I>"),gj:w("bQ<m>"),bz:w("bQ<G?>"),dg:w("ef<r6>"),m:w("bbP"),a2:w("CM"),f3:w("r6"),es:w("Gm"),gV:w("mu"),y:w("P"),i:w("I"),z:w("@"),S:w("G"),L:w("ai<@>?"),cK:w("aD?"),T:w("m?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b12=new B.da(0,0.1)
D.b2K=new C.aTD(0,0,0)
D.Ly=new C.aTD(0,0.5,0)
D.b3k=new B.ay(A.ba,1,A.r,-1)
D.b4N=new B.aZ(0,1/0,0,290)
D.b4U=new B.aZ(16,1/0,16,1/0)
D.b66=new B.o(A.bf,null,null,null,null,null,A.a6)
D.flc=new B.F(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYq=new B.y("\u26a1",null,D.flc,null,null,null,null,null,null,null,null,null)
D.baG=new B.cf(A.A,null,null,D.fYq,null)
D.aUW=new B.F(!0,A.bU,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNV=new B.y("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aUW,null,A.K,null,null,null,null,null,null,null)
D.eoe=new B.D(A.ny,D.fNV,null)
D.baQ=new B.cf(A.A,null,null,D.eoe,null)
D.fDL=new B.y("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aUW,null,A.K,null,null,null,null,null,null,null)
D.ep6=new B.D(A.GK,D.fDL,null)
D.bbA=new B.cf(A.A,null,null,D.ep6,null)
D.aeS=new B.t(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.bfl=new B.t(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.bfC=new B.t(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bgV=new B.t(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.bh0=new B.t(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.bhn=new B.t(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.bjf=new B.t(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.bkg=new B.t(1,1,0.9686274509803922,0.8,A.q)
D.bl_=new B.t(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.aha=new B.t(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.bm_=new B.t(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.ahA=new B.t(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.YR=new B.t(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.bnL=new B.t(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.bo2=new B.t(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.q)
D.ai8=new B.t(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.bpL=new B.t(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.bpT=new B.t(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bql=new B.t(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.w_=new B.t(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.bsp=new B.t(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.ajG=new B.t(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.by4=new B.bc(11e6)
D.bzS=new B.Q(10,34,10,26)
D.bA_=new B.Q(10,6,10,2)
D.bA1=new B.Q(10,8,0,10)
D.bAF=new B.Q(12,8,8,8)
D.bAL=new B.Q(14,0,14,22)
D.bAN=new B.Q(14,0,14,30)
D.bBP=new B.Q(16,4,16,28)
D.bE6=new B.Q(26,12,26,58)
D.bEX=new B.Q(4,4,8,2)
D.bFA=new B.Q(8,14,8,12)
D.bFH=new B.Q(8,40,8,30)
D.bFM=new B.Q(8,6,16,0)
D.bFN=new B.Q(8,6,8,8)
D.bG8=new B.Q(0,0,1.5,0)
D.b2w=new B.Hz(26,"saturation")
D.bGq=new B.xy(A.cY,D.b2w,null,A.XO)
D.fCR=new B.y("REACTION LAB",null,T.aVw,null,null,null,null,A.a1,null,1,null,null)
D.bGw=new B.by(1,A.bb,D.fCR,null)
D.fto=new B.F(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fG6=new B.y("CORE PROTOCOL",null,D.fto,null,null,null,null,null,null,null,null,null)
D.bGK=new B.by(1,A.bb,D.fG6,null)
D.fGU=new B.y("\ud83d\udce2 NGMY Ads",null,A.r1,null,null,null,null,A.eM,null,1,null,null)
D.bHu=new B.by(1,A.bb,D.fGU,null)
D.fBx=new B.y("Wire selected",null,A.fS,null,null,null,null,null,null,null,null,null)
D.bHI=new B.by(1,A.bb,D.fBx,null)
D.aov=new B.a0(62712,"MaterialIcons",!1)
D.bNG=new B.a0(62908,"MaterialIcons",!1)
D.bPn=new B.a0(983122,"MaterialIcons",!1)
D.bPz=new B.a0(983247,"MaterialIcons",!1)
D.bQ4=new B.a0(983616,"MaterialIcons",!1)
D.bRV=new B.ae(A.Pf,null,A.ac,null,null,null)
D.bPm=new B.a0(983117,"MaterialIcons",!1)
D.bTO=new B.ae(D.bPm,28,A.c,null,null,null)
D.bU3=new B.ae(A.j1,18,null,null,null,null)
D.bVW=new B.ae(A.eb,21,A.c0,null,null,null)
D.bWa=new B.ae(A.oq,null,A.ac,null,null,null)
D.bWk=new B.ae(A.a2S,21,A.ac,null,null,null)
D.bXb=new B.ae(A.eK,17,A.ac,null,null,null)
D.bYL=new B.ae(A.OJ,null,A.ac,null,null,null)
D.bZU=new B.ae(A.j1,21,A.ac,null,null,null)
D.c0r=new B.ae(A.e5,null,A.aT,null,null,null)
D.dqv=w([A.d7,A.d3,A.d7],x.O)
D.c3Q=new B.a9(A.a5,A.a8,A.x,D.dqv,null,null)
D.d2h=w([A.bO,A.bn],x.O)
D.c3Y=new B.a9(A.b0,A.b6,A.x,D.d2h,null,null)
D.c4a=new B.a9(A.b0,A.b6,A.x,A.a5u,null,null)
D.asb=new B.a9(A.b0,A.b6,A.x,O.a4J,null,null)
D.d_T=w([A.p0,A.iy],x.O)
D.c4X=new B.a9(A.b0,A.b6,A.x,D.d_T,null,null)
D.d2_=w([A.e9,A.au],x.O)
D.asi=new B.a9(A.b0,A.b6,A.x,D.d2_,null,null)
D.dkb=w([A.dn,A.jg,A.bn],x.O)
D.c5f=new B.a9(A.a5,A.a8,A.x,D.dkb,null,null)
D.dkh=w([A.hm,A.cr],x.O)
D.c5A=new B.a9(A.b0,A.b6,A.x,D.dkh,null,null)
D.cz4=w([A.bO,A.dn],x.O)
D.c5J=new B.a9(A.a5,A.a8,A.x,D.cz4,null,null)
D.aCg=w([A.e9,M.nl],x.O)
D.c5Q=new B.a9(A.b0,A.b6,A.x,D.aCg,null,null)
D.c66=new B.a9(A.b0,A.b6,A.x,R.asE,null,null)
D.c6W=new B.a9(A.az,A.aE,A.x,A.Rl,null,null)
D.dbN=w([A.au,A.w],x.O)
D.c76=new B.a9(A.b0,A.b6,A.x,D.dbN,null,null)
D.c79=new B.a9(A.b0,A.b6,A.x,H.aBz,null,null)
D.bqg=new B.t(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.br7=new B.t(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cLX=w([A.MV,D.bqg,D.br7],x.O)
D.c7j=new B.a9(A.b0,A.b6,A.x,D.cLX,null,null)
D.czo=w([A.d0,A.fV],x.O)
D.c7z=new B.a9(A.b0,A.b6,A.x,D.czo,null,null)
D.c8h=w([0,4,7],x.t)
D.c8i=w([0,4,7,12],x.t)
D.c8j=w([0,4,7,4],x.t)
D.aBf=w([A.hh,A.qb],x.O)
D.aAK=w([A.hj,A.cQ],x.O)
D.az2=w([A.bq,A.dH],x.O)
D.cUB=w([A.aT,A.d0],x.O)
D.dlx=w([A.c_,A.l3],x.O)
D.ayt=w([A.cG,A.kj],x.O)
D.cZI=w([A.bL,A.aL],x.O)
D.c8G=w([D.aBf,D.aAK,A.a4O,D.az2,D.cUB,A.azj,A.aAe,D.dlx,D.ayt,D.cZI],B.as("O<ai<t>>"))
D.cdm=w([120,220,380],x.t)
D.ch6=w([12,16,19,24],x.t)
D.chg=w([1400,800,450,2400],x.t)
D.cpI=w([250,450,900,1500],x.t)
D.beG=new B.t(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.bqG=new B.t(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.bou=new B.t(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.bug=new B.t(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.bnA=new B.t(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.axK=w([D.beG,D.bqG,D.bou,D.bug,D.bnA],x.O)
D.cGS=w([50,25,75],x.t)
D.cMt=w([0,5,10,15,18,20,25],x.t)
D.cUU=w([900,500,250,1600],x.t)
D.cZ0=w([A.bq,A.bE,A.b8,A.bq],x.O)
D.a4E=w([A.ax,A.bs,A.bf,A.aJ,A.o9],x.O)
D.d_w=w([A.au,A.ax,A.cG,A.bs,A.bf,A.cw,A.cf,A.bE,A.Y2],x.O)
D.a4H=w([0.04,0.17,0.3],x.n)
D.f52=new C.vf("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.f58=new C.vf("Medium engine","A good all-rounder.",0.3,0.9)
D.f57=new C.vf("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Ie=w([D.f52,D.f58,D.f57],x._)
D.eBQ=new B.z(6,"Easy")
D.eCB=new B.z(8,"Medium")
D.exz=new B.z(10,"Hard")
D.d12=w([D.eBQ,D.eCB,D.exz],x.I)
D.azt=w([0.55,0.78,1],x.n)
D.azE=w([A.c,A.fU,A.o0,A.au],x.O)
D.azM=w([A.bf,A.ax,A.bs,A.d3],x.O)
D.f5_=new C.vf("Radar","Shows your height above the ground.",0.1,0)
D.f50=new C.vf("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.f4Y=new C.vf("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.azU=w([D.f5_,D.f50,D.f4Y],x._)
D.d7d=w([47,100,220,470,1000],x.n)
D.Jk={volts:0}
D.a6t=new B.bu(D.Jk,[3],x.J)
D.JL=new B.dY(["b","battery",0.2,0.3,D.a6t])
D.ei8={on:0}
D.dBl=new B.bu(D.ei8,[1],x.J)
D.Eb=new B.dY(["s","switch",0.5,0.3,D.dBl])
D.f2H=new B.dY(["l","bulb",0.8,0.3,A.jm])
D.d2q=w([D.JL,D.Eb,D.f2H],x.d)
D.Ea=new B.cw(["b",0,"s",0])
D.f1H=new B.cw(["s",1,"l",0])
D.aQL=new B.cw(["l",1,"b",1])
D.dkn=w([D.Ea,D.f1H,D.aQL],x.o)
D.d1Q=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.ewK=new C.mS("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.d2q,D.dkn,D.d1Q)
D.aKB={ohms:0}
D.aI8=new B.bu(D.aKB,[220],x.J)
D.f29=new B.dY(["r","resistor",0.5,0.3,D.aI8])
D.f2W=new B.dY(["d","led",0.8,0.3,A.jm])
D.dnE=w([D.JL,D.f29,D.f2W],x.d)
D.f11=new B.cw(["b",0,"r",0])
D.f1B=new B.cw(["r",1,"d",0])
D.f17=new B.cw(["d",1,"b",1])
D.dwZ=w([D.f11,D.f1B,D.f17],x.o)
D.do7=w(["led","diode","indicator"],x.s)
D.ewR=new C.mS("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dnE,D.dwZ,D.do7)
D.a7K={level:0}
D.dAG=new B.bu(D.a7K,[0.2],x.J)
D.f2f=new B.dY(["p","pot",0.5,0.3,D.dAG])
D.f2h=new B.dY(["m","motor",0.8,0.3,A.jm])
D.d2K=w([D.JL,D.f2f,D.f2h],x.d)
D.f10=new B.cw(["b",0,"p",0])
D.f1x=new B.cw(["p",1,"m",0])
D.f1t=new B.cw(["m",1,"b",1])
D.dsx=w([D.f10,D.f1x,D.f1t],x.o)
D.dk4=w(["fan","motor","spin","dimmer"],x.s)
D.ewI=new C.mS("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.d2K,D.dsx,D.dk4)
D.a6q=new B.bu(D.a7K,[0.9],x.J)
D.aQU=new B.dY(["s","solar",0.25,0.3,D.a6q])
D.aQT=new B.dY(["l","bulb",0.75,0.3,A.jm])
D.d5y=w([D.aQU,D.aQT],x.d)
D.f1E=new B.cw(["s",0,"l",0])
D.f1r=new B.cw(["l",1,"s",1])
D.d3y=w([D.f1E,D.f1r],x.o)
D.dte=w(["solar","sun","without battery","no battery","free"],x.s)
D.ewL=new C.mS("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.d5y,D.d3y,D.dte)
D.f2Z=new B.dY(["c","crank",0.25,0.3,D.a6q])
D.dim=w([D.f2Z,D.aQT],x.d)
D.f14=new B.cw(["c",0,"l",0])
D.f1q=new B.cw(["l",1,"c",1])
D.diX=w([D.f14,D.f1q],x.o)
D.diw=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.ewH=new C.mS("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.dim,D.diX,D.diw)
D.dAF=new B.bu(D.a7K,[0.7],x.J)
D.f2k=new B.dY(["t","turbine",0.25,0.3,D.dAF])
D.f27=new B.dY(["m","motor",0.75,0.3,A.jm])
D.dct=w([D.f2k,D.f27],x.d)
D.f1P=new B.cw(["t",0,"m",0])
D.f1u=new B.cw(["m",1,"t",1])
D.dbq=w([D.f1P,D.f1u],x.o)
D.dh5=w(["wind","turbine","windmill","water","hydro"],x.s)
D.ewE=new C.mS("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.dct,D.dbq,D.dh5)
D.aI5=new B.bu(D.Jk,[9],x.J)
D.a8Q=new B.dY(["b","battery",0.2,0.3,D.aI5])
D.aQR=new B.dY(["r","radio",0.8,0.3,A.jm])
D.dtO=w([D.a8Q,D.Eb,D.aQR],x.d)
D.f1J=new B.cw(["s",1,"r",0])
D.aQN=new B.cw(["r",1,"b",1])
D.c8_=w([D.Ea,D.f1J,D.aQN],x.o)
D.dsj=w(["radio","music","listen"],x.s)
D.ewQ=new C.mS("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dtO,D.c8_,D.dsj)
D.dBM=new B.bu(D.Jk,[12],x.J)
D.aQQ=new B.dY(["b","battery",0.2,0.3,D.dBM])
D.f2I=new B.dY(["t","tv",0.8,0.3,A.jm])
D.d2s=w([D.aQQ,D.Eb,D.f2I],x.d)
D.f1K=new B.cw(["s",1,"t",0])
D.aQO=new B.cw(["t",1,"b",1])
D.dlA=w([D.Ea,D.f1K,D.aQO],x.o)
D.dtM=w(["tv","television","screen","watch"],x.s)
D.ewB=new C.mS("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.d2s,D.dlA,D.dtM)
D.f2y=new B.dY(["z","buzzer",0.8,0.3,A.jm])
D.cJd=w([D.JL,D.Eb,D.f2y],x.d)
D.f1L=new B.cw(["s",1,"z",0])
D.f22=new B.cw(["z",1,"b",1])
D.cYd=w([D.Ea,D.f1L,D.f22],x.o)
D.dqB=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.ewN=new C.mS("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cJd,D.cYd,D.dqB)
D.f2g=new B.dY(["h","heater",0.8,0.3,A.jm])
D.dfL=w([D.a8Q,D.Eb,D.f2g],x.d)
D.f1G=new B.cw(["s",1,"h",0])
D.f1f=new B.cw(["h",1,"b",1])
D.cYW=w([D.Ea,D.f1G,D.f1f],x.o)
D.ct0=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.ewC=new C.mS("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.dfL,D.cYW,D.ct0)
D.f2K=new B.dY(["s","solar",0.2,0.25,D.a6q])
D.dBP=new B.bu(D.aKB,[100],x.J)
D.f2N=new B.dY(["r","resistor",0.55,0.25,D.dBP])
D.f2U=new B.dY(["c","capacitor",0.85,0.25,A.jm])
D.f2c=new B.dY(["q","resistor",0.55,0.6,D.aI8])
D.f2L=new B.dY(["d","led",0.85,0.6,A.jm])
D.dl6=w([D.f2K,D.f2N,D.f2U,D.f2c,D.f2L],x.d)
D.f1F=new B.cw(["s",0,"r",0])
D.f1A=new B.cw(["r",1,"c",0])
D.f16=new B.cw(["c",1,"s",1])
D.f15=new B.cw(["c",0,"q",0])
D.f1z=new B.cw(["q",1,"d",0])
D.f18=new B.cw(["d",1,"c",1])
D.d9i=w([D.f1F,D.f1A,D.f16,D.f15,D.f1z,D.f18],x.o)
D.dhF=w(["capacitor","store","charge","flash"],x.s)
D.ewP=new C.mS("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.dl6,D.d9i,D.dhF)
D.f2n=new B.dY(["b","battery",0.15,0.3,D.a6t])
D.f3_=new B.dY(["l1","bulb",0.5,0.3,A.jm])
D.f2v=new B.dY(["l2","bulb",0.85,0.3,A.jm])
D.d0t=w([D.f2n,D.f3_,D.f2v],x.d)
D.f1_=new B.cw(["b",0,"l1",0])
D.f1n=new B.cw(["l1",1,"l2",0])
D.f1o=new B.cw(["l2",1,"b",1])
D.dde=w([D.f1_,D.f1n,D.f1o],x.o)
D.dtx=w(["series","two bulbs","dim"],x.s)
D.ewF=new C.mS("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.d0t,D.dde,D.dtx)
D.eis={volts:0,charge:1}
D.dBS=new B.bu(D.eis,[1.5,0],x.J)
D.f2S=new B.dY(["b","battery",0.75,0.3,D.dBS])
D.d_U=w([D.aQU,D.f2S],x.d)
D.f1D=new B.cw(["s",0,"b",0])
D.f13=new B.cw(["b",1,"s",1])
D.d9B=w([D.f1D,D.f13],x.o)
D.dhP=w(["charge","rechargeable","flat","recharge"],x.s)
D.ewD=new C.mS("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.d_U,D.d9B,D.dhP)
D.dBL=new B.bu(D.Jk,[4.5],x.J)
D.f2i=new B.dY(["b","battery",0.2,0.3,D.dBL])
D.aQP=new B.dY(["p","phone",0.8,0.3,A.jm])
D.dci=w([D.f2i,D.Eb,D.aQP],x.d)
D.f1I=new B.cw(["s",1,"p",0])
D.a8P=new B.cw(["p",1,"b",1])
D.dpw=w([D.Ea,D.f1I,D.a8P],x.o)
D.dr0=w(["phone","charger","usb","mobile"],x.s)
D.ewJ=new C.mS("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.dci,D.dpw,D.dr0)
D.f24=new B.dY(["f","fan",0.8,0.3,A.jm])
D.cl5=w([D.JL,D.f24],x.d)
D.f0Z=new B.cw(["b",0,"f",0])
D.f1d=new B.cw(["f",1,"b",1])
D.cZu=w([D.f0Z,D.f1d],x.o)
D.dk3=w(["fan","cool","air","wind"],x.s)
D.ewS=new C.mS("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.cl5,D.cZu,D.dk3)
D.f2C=new B.dY(["b","battery",0.15,0.2,D.a6t])
D.f25=new B.dY(["a","ammeter",0.5,0.2,A.jm])
D.f23=new B.dY(["l","bulb",0.85,0.2,A.jm])
D.f2E=new B.dY(["v","voltmeter",0.5,0.6,A.jm])
D.dia=w([D.f2C,D.f25,D.f23,D.f2E],x.d)
D.f0X=new B.cw(["b",0,"a",0])
D.f0W=new B.cw(["a",1,"l",0])
D.f1R=new B.cw(["v",0,"l",0])
D.f1S=new B.cw(["v",1,"l",1])
D.d9s=w([D.f0X,D.f0W,D.aQL,D.f1R,D.f1S],x.o)
D.dwY=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.ewO=new C.mS("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.dia,D.d9s,D.dwY)
D.f32=new B.dY(["b","battery",0.15,0.2,D.aI5])
D.f2m=new B.dY(["t","tv",0.55,0.2,A.jm])
D.aI6=new B.bu(D.Jk,[5],x.J)
D.f2a=new B.dY(["c","buck",0.4,0.5,D.aI6])
D.f2o=new B.dY(["p","phone",0.8,0.5,A.jm])
D.d7_=w([D.f32,D.f2m,D.f2a,D.f2o],x.d)
D.f12=new B.cw(["b",0,"t",0])
D.aQJ=new B.cw(["b",0,"c",0])
D.aQK=new B.cw(["c",1,"p",0])
D.dcf=w([D.f12,D.aQO,D.aQJ,D.aQK,D.a8P],x.o)
D.d56=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.ewG=new C.mS("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.d7_,D.dcf,D.d56)
D.f2b=new B.dY(["c","buck",0.5,0.3,D.aI6])
D.cYL=w([D.aQQ,D.f2b,D.aQP],x.d)
D.d2U=w([D.aQJ,D.aQK,D.a8P],x.o)
D.cwt=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.ewA=new C.mS("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cYL,D.d2U,D.cwt)
D.f2t=new B.dY(["d","diode",0.5,0.3,A.jm])
D.dds=w([D.a8Q,D.f2t,D.aQR],x.d)
D.f0Y=new B.cw(["b",0,"d",0])
D.f19=new B.cw(["d",1,"r",0])
D.cLL=w([D.f0Y,D.f19,D.aQN],x.o)
D.d4L=w(["diode","protect","backwards","one way"],x.s)
D.ewM=new C.mS("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.dds,D.cLL,D.d4L)
D.Ry=w([D.ewK,D.ewR,D.ewI,D.ewL,D.ewH,D.ewE,D.ewQ,D.ewB,D.ewN,D.ewC,D.ewP,D.ewF,D.ewD,D.ewJ,D.ewS,D.ewO,D.ewG,D.ewA,D.ewM],B.as("O<mS>"))
D.hy3=new C.GB("Moon",1.62,A.dn,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hy1=new C.GB("Mars",3.71,A.ax,"Mars has about 38 percent of Earth's gravity.")
D.hy4=new C.GB("Mercury",3.7,A.ki,"Mercury is small, so its gravity is like Mars.")
D.hxZ=new C.GB("Venus",8.87,A.aT,"Venus is almost as heavy as Earth, with strong gravity.")
D.hy0=new C.GB("Earth",9.81,A.aJ,"On Earth gravity is strong, and the air also slows you down.")
D.hy2=new C.GB("Neptune",11.15,A.d3,"Neptune pulls a little harder than Earth.")
D.hy_=new C.GB("Jupiter",24.79,A.cG,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.rY=w([D.hy3,D.hy1,D.hy4,D.hxZ,D.hy0,D.hy2,D.hy_],B.as("O<GB>"))
D.d9g=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.da_=w([0.2,0.5,0.8],x.n)
D.b_S=new C.KU(0,"accordion")
D.cZQ=w([A.jF,A.CG,A.Cm],x.w)
D.d6p=w(["Mail","SMS","Ad"],x.s)
D.d_o=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hwg=new C.AS(D.b_S,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aBf,D.cZQ,D.d6p,D.d_o)
D.acx=new C.KU(1,"flip")
D.dhz=w([A.qB,Z.HF,A.uK],x.w)
D.dc_=w(["Unlock","Verify","Secure"],x.s)
D.cYH=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hwf=new C.AS(D.acx,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.aAK,D.dhz,D.dc_,D.cYH)
D.b_T=new C.KU(2,"towers")
D.daK=w([A.z5,A.qE,A.i9],x.w)
D.dai=w(["Save","Grow","Earn"],x.s)
D.cME=w(["","",""],x.s)
D.hwh=new C.AS(D.b_T,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a4O,D.daK,D.dai,D.cME)
D.acy=new C.KU(3,"assemble")
D.diz=w([A.ou,A.ho,A.e5],x.w)
D.d5K=w(["Launch","Charge","Shine"],x.s)
D.deQ=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hwj=new C.AS(D.acy,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.az2,D.diz,D.d5K,D.deQ)
D.b_U=new C.KU(4,"carousel")
D.din=w([A.b8,A.eP],x.O)
D.d6y=w([A.mS,A.aoY,A.Pm],x.w)
D.d0T=w(["Explore","Discover","Learn"],x.s)
D.dco=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hwe=new C.AS(D.b_U,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.din,D.d6y,D.d0T,D.dco)
D.b_V=new C.KU(5,"burst")
D.dad=w([A.i1,A.tV],x.O)
D.d_j=w([A.kp,A.mQ,A.hC],x.w)
D.d_E=w(["Cheer","Win","Love"],x.s)
D.d1Y=w(["Make some noise","First place","Share the joy"],x.s)
D.hwi=new C.AS(D.b_V,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.dad,D.d_j,D.d_E,D.d1Y)
D.aAq=w([D.hwg,D.hwf,D.hwh,D.hwj,D.hwe,D.hwi],B.as("O<AS>"))
D.eZ7=new B.b6("skin","Skin",A.aoZ)
D.f_J=new B.b6("muscle","Muscles",A.OW)
D.f_n=new B.b6("organ","Organs",A.hC)
D.bNo=new B.a0(62747,"MaterialIcons",!1)
D.f_u=new B.b6("bone","Skeleton",D.bNo)
D.f_R=new B.b6("vessel","Blood vessels",A.pp)
D.daQ=w([D.eZ7,D.f_J,D.f_n,D.f_u,D.f_R],x.r)
D.f51=new C.vf("Simple legs","Light. Land gently.",0.15,0.2)
D.f53=new C.vf("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.f56=new C.vf("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.Da=w([D.f51,D.f53,D.f56],x._)
D.f0E=new B.cw(["beat",0.18,0.28,0])
D.f1M=new B.cw(["burst",0.7,0.2,0])
D.f1X=new B.cw(["delay",0.45,0.5,1])
D.f1w=new B.cw(["ripple",0.75,0.6,3])
D.d5t=w([D.f0E,D.f1M,D.f1X,D.f1w],x.e)
D.dgT=w([P.lq,O.JK,F.U7],x.u)
D.hvc=new C.Gm("First spark","A clock lights a burst and a ripple",D.d5t,D.dgT)
D.f1c=new B.cw(["beat",0.15,0.3,1])
D.f0i=new B.cw(["ripple",0.62,0.15,0])
D.f1T=new B.cw(["delay",0.4,0.45,0])
D.f0T=new B.cw(["ripple",0.7,0.45,0])
D.f0A=new B.cw(["delay",0.4,0.7,1])
D.f1y=new B.cw(["shake",0.75,0.75,0])
D.duH=w([D.f1c,D.f0i,D.f1T,D.f0T,D.f0A,D.f1y],x.e)
D.eyG=new B.z(2,4)
D.aQp=new B.z(4,5)
D.d96=w([P.lq,O.JK,F.U7,D.eyG,D.aQp],x.u)
D.hve=new C.Gm("Heartbeat","Two thumps, then a shake",D.duH,D.d96)
D.f0J=new B.cw(["dice",0.15,0.7,1])
D.f1Z=new B.cw(["echo",0.4,0.7,0])
D.f0R=new B.cw(["comet",0.7,0.5,4])
D.f1N=new B.cw(["burst",0.72,0.2,1])
D.f1a=new B.cw(["burst",0.3,0.25,0])
D.f0K=new B.cw(["pop",0.55,0.85,0])
D.csy=w([D.f0J,D.f1Z,D.f0R,D.f1N,D.f1a,D.f0K],x.e)
D.ey0=new B.z(1,3)
D.ey1=new B.z(1,4)
D.aQl=new B.z(0,5)
D.dii=w([P.lq,S.vi,D.ey0,D.ey1,D.aQl],x.u)
D.hvd=new C.Gm("Fireworks","Dice launch comets that burst in colour",D.csy,D.dii)
D.f0O=new B.cw(["beat",0.15,0.2,2])
D.f1k=new B.cw(["chance",0.4,0.2,0])
D.f0G=new B.cw(["ball",0.7,0.12,3])
D.f0t=new B.cw(["chance",0.4,0.5,1])
D.f1Y=new B.cw(["ball",0.3,0.08,1])
D.f0m=new B.cw(["ripple",0.7,0.55,3])
D.clA=w([D.f0O,D.f1k,D.f0G,D.f0t,D.f1Y,D.f0m],x.e)
D.eyH=new B.z(2,5)
D.cIW=w([P.lq,S.vi,O.a8H,F.U8,D.eyH],x.u)
D.hvb=new C.Gm("Rain","Balls fall at random and splash",D.clA,D.cIW)
D.f1l=new B.cw(["beat",0.12,0.45,2])
D.f1O=new B.cw(["toggle",0.38,0.2,0])
D.f1V=new B.cw(["wash",0.7,0.15,4])
D.f0I=new B.cw(["count3",0.38,0.45,0])
D.f1Q=new B.cw(["burst",0.72,0.4,0])
D.f1b=new B.cw(["light",0.55,0.7,1])
D.f0u=new B.cw(["pop",0.8,0.8,4])
D.dl4=w([D.f1l,D.f1O,D.f1V,D.f0I,D.f1Q,D.f1b,D.f0u],x.e)
D.ezd=new B.z(3,6)
D.coI=w([P.lq,S.vi,O.a8H,F.U8,D.aQl,D.ezd],x.u)
D.hv9=new C.Gm("Disco","A beat drives lights, washes and bursts",D.dl4,D.coI)
D.f21=new B.cw(["button",0.12,0.2,0])
D.f0o=new B.cw(["delay",0.34,0.2,1])
D.f20=new B.cw(["light",0.56,0.2,1])
D.f1U=new B.cw(["delay",0.56,0.45,1])
D.f1m=new B.cw(["ball",0.34,0.6,0])
D.f0s=new B.cw(["delay",0.34,0.8,1])
D.f0h=new B.cw(["burst",0.7,0.8,5])
D.c8J=w([D.f21,D.f0o,D.f20,D.f1U,D.f1m,D.f0s,D.f0h],x.e)
D.eBp=new B.z(5,6)
D.dqK=w([P.lq,S.vi,F.U7,F.U8,D.aQp,D.eBp],x.u)
D.hva=new C.Gm("Domino","Tap the button and watch it run down the line",D.c8J,D.dqK)
D.aAO=w([D.hvc,D.hve,D.hvd,D.hvb,D.hv9,D.hva],B.as("O<Gm>"))
D.dg9=w([0.05,0.15,0.25],x.n)
D.dh4=w([1.5,3,4.5,9,12],x.n)
D.eXt=new B.b6("dice","Dice",A.om)
D.eYH=new B.b6("coin","Coin",Q.z1)
D.f_M=new B.b6("num","Number",A.z8)
D.dhi=w([D.eXt,D.eYH,D.f_M],x.r)
D.dhm=w(["skin","muscle","organ","bone","vessel"],x.s)
D.aAU=w([A.c0,A.aT,A.ba,A.aJ,A.bq,A.c_,A.cG,A.hj],x.O)
D.dio=w([A.c_,A.aJ,A.dB,A.ba],x.O)
D.djn=w([],x.a)
D.epU=new C.ek("battery","Battery","\ud83d\udd0b",A.ba,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.eq_=new C.ek("solar","Solar panel","\u2600\ufe0f",A.bs,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.eqE=new C.ek("crank","Hand crank","\ud83d\udd04",A.cG,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.eqg=new C.ek("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aJ,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.epM=new C.ek("buck","Step-down converter","\ud83d\udd3d",A.hj,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.eqe=new C.ek("regulator","5 V regulator","\ud83e\uddca",A.bL,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.eqJ=new C.ek("diode","Diode","\u27a1\ufe0f",A.aT,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.eqq=new C.ek("ldr","Light sensor","\ud83c\udf1e",A.dB,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.eq4=new C.ek("switch","Switch","\ud83c\udf9a\ufe0f",A.bq,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.eqG=new C.ek("fuse","Fuse","\ud83e\uddef",A.c0,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.epE=new C.ek("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hj,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.eqr=new C.ek("resistor","Resistor","\u3030\ufe0f",A.aT,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.eqt=new C.ek("bulb","Light bulb","\ud83d\udca1",A.dB,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.eq1=new C.ek("led","LED","\ud83d\udd34",A.ax,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.eq5=new C.ek("motor","Motor","\u2699\ufe0f",A.bL,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.eqn=new C.ek("buzzer","Buzzer","\ud83d\udd14",A.c_,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.epV=new C.ek("heater","Heater","\ud83d\udd25",A.cG,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.eqi=new C.ek("capacitor","Capacitor","\ud83e\udeab",A.cp,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.eqa=new C.ek("radio","Radio","\ud83d\udcfb",A.o9,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.eq7=new C.ek("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b8,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.epL=new C.ek("voltmeter","Voltmeter","\ud83e\udded",A.bv,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.epS=new C.ek("ammeter","Ammeter","\ud83d\udcdf",A.aT,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.epY=new C.ek("fan","Fan","\ud83c\udf00",A.aJ,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.eqL=new C.ek("speaker","Speaker","\ud83d\udd0a",A.c_,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.eqA=new C.ek("clock","Digital clock","\u23f0",A.ba,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.eqd=new C.ek("calculator","Calculator","\ud83e\uddee",A.M0,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.epR=new C.ek("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cp,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.eqK=new C.ek("router","WiFi router","\ud83d\udcf6",A.hj,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.eqN=new C.ek("siren","Siren","\ud83d\udea8",A.ax,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.epH=new C.ek("toycar","Toy car","\ud83d\ude97",A.cG,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.eqO=new C.ek("kettle","Kettle","\ud83e\uded6",A.mD,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.epP=new C.ek("lamp","Desk lamp","\ud83e\ude94",A.dB,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.eq0=new C.ek("lights","Party lights","\ud83c\udf84",A.o9,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.eqb=new C.ek("fridge","Fridge","\ud83e\uddca",A.hl,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.epJ=new C.ek("washer","Washing machine","\ud83e\udee7",A.cp,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.eqB=new C.ek("blender","Blender","\ud83e\udd64",A.c0,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.eq8=new C.ek("drone","Drone","\ud83d\ude81",A.bL,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.epO=new C.ek("drill","Power drill","\ud83d\udd29",A.aT,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.eqc=new C.ek("torch","Torch","\ud83d\udd26",A.bM,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.eqy=new C.ek("neon","Neon sign","\ud83e\udea7",A.c_,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.epK=new C.ek("microwave","Microwave","\ud83c\udf72",A.cG,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.eqs=new C.ek("doorbell","Doorbell","\ud83d\udd14",A.bs,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.epX=new C.ek("camera","Security camera","\ud83d\udcf7",A.al,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.eqm=new C.ek("console","Game console","\ud83c\udfae",A.bq,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.eqD=new C.ek("heartmon","Heart monitor","\ud83e\ude7a",A.hf,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.epI=new C.ek("aquarium","Aquarium","\ud83d\udc20",A.b8,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.eqh=new C.ek("lighthouse","Lighthouse","\ud83d\uddfc",A.dB,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.eqp=new C.ek("discoball","Disco ball","\ud83e\udea9",A.o9,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.eqI=new C.ek("robot","Robot","\ud83e\udd16",A.aJ,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.epG=new C.ek("toaster","Toaster","\ud83c\udf5e",A.dZ,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.eqM=new C.ek("ledstrip","LED strip","\ud83c\udf08",A.c_,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.eqx=new C.ek("pump","Water pump","\ud83d\udeb0",A.aJ,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.eqj=new C.ek("hairdryer","Hair dryer","\ud83d\udca8",A.i1,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.eqv=new C.ek("headphones","Headphones","\ud83c\udfa7",A.bq,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.epQ=new C.ek("smartwatch","Apple Watch Ultra","\u231a",A.bv,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.eqH=new C.ek("tablet","iPad Pro M5","\ud83d\udcf2",A.cp,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.epD=new C.ek("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hf,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.eq9=new C.ek("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bu,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.eq2=new C.ek("appletv","Apple TV 4K","\ud83d\udcfa",A.bO,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.eqo=new C.ek("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.tR,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.epF=new C.ek("iphonefold","iPhone Fold","\ud83d\udcf1",A.b7,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.epT=new C.ek("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d3,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.eqF=new C.ek("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cw,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.eqk=new C.ek("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bf,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.eqf=new C.ek("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.cd,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.eqw=new C.ek("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.ax,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.eq3=new C.ek("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.ba,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.eql=new C.ek("honor","Honor Magic V5","\ud83d\udcf1",A.cp,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.equ=new C.ek("vivo","vivo X300 Pro","\ud83d\udcf1",A.cG,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.eqz=new C.ek("ereader","Kindle Scribe","\ud83d\udcd6",A.bu,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.epC=new C.ek("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.cf,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.eq6=new C.ek("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cw,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.epZ=new C.ek("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b8,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.epN=new C.ek("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dB,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.epW=new C.ek("carscreen","Luxury car touchscreen","\ud83d\ude98",A.ax,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.eqC=new C.ek("vision","Apple Vision Pro","\ud83e\udd7d",A.bq,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.RZ=w([D.epU,D.eq_,D.eqE,D.eqg,D.epM,D.eqe,D.eqJ,D.eqq,D.eq4,D.eqG,D.epE,D.eqr,D.eqt,D.eq1,D.eq5,D.eqn,D.epV,D.eqi,D.eqa,D.eq7,D.epL,D.epS,D.epY,D.eqL,D.eqA,D.eqd,D.epR,D.eqK,D.eqN,D.epH,D.eqO,D.epP,D.eq0,D.eqb,D.epJ,D.eqB,D.eq8,D.epO,D.eqc,D.eqy,D.epK,D.eqs,D.epX,D.eqm,D.eqD,D.epI,D.eqh,D.eqp,D.eqI,D.epG,D.eqM,D.eqx,D.eqj,D.eqv,D.epQ,D.eqH,D.epD,D.eq9,D.eq2,D.eqo,D.epF,D.epT,D.eqF,D.eqk,D.eqf,D.eqw,D.eq3,D.eql,D.equ,D.eqz,D.epC,D.eq6,D.epZ,D.epN,D.epW,D.eqC],B.as("O<ek>"))
D.dk_=w([5,10,15,25,45,60],x.t)
D.dkl=w([-0.045,0.03,-0.015],x.n)
D.aBn=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.uV=w([0.05,0.2,0.35],x.n)
D.b7n=new B.ac(0,A.G,A.hy,A.dC,6)
D.dn2=w([D.b7n],x.V)
D.exb=new B.z(0,"AND")
D.ey2=new B.z(1,"Adder")
D.eyI=new B.z(2,"Blinker")
D.eze=new B.z(3,"Memory")
D.dnS=w([D.exb,D.ey2,D.eyI,D.eze],x.I)
D.aBA=w([-104,0,104],x.n)
D.aBB=w([-14,3],x.n)
D.doO=w([-8,0,8],x.n)
D.aBL=w([-92,0,92],x.n)
D.dpe=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.f4Z=new C.vf("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.f55=new C.vf("Medium tank","Balanced.",0.35,1)
D.f54=new C.vf("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.Sd=w([D.f4Z,D.f55,D.f54],x._)
D.nF=w([0.04,0.2,0.36],x.n)
D.aBW=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.f_m=new B.b6(D.b_S,"Fold",Q.apV)
D.eZo=new B.b6(D.acx,"Flip",A.Cv)
D.bNF=new B.a0(62889,"MaterialIcons",!1)
D.f_I=new B.b6(D.b_T,"Rise",D.bNF)
D.aq7=new B.a0(983870,"MaterialIcons",!1)
D.eWR=new B.b6(D.acy,"Assemble",D.aq7)
D.eX3=new B.b6(D.b_U,"Spin",D.aov)
D.eWZ=new B.b6(D.b_V,"Pop",A.kp)
D.dqH=w([D.f_m,D.eZo,D.f_I,D.eWR,D.eX3,D.eWZ],B.as("O<+(KU,m,a0)>"))
D.aC0=w([A.c_,A.dB,A.bv,A.aJ,A.bq,A.c0],x.O)
D.dr6=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.ds9=w([3,4.5,5,6,9],x.n)
D.b7W=new B.ac(0,A.G,A.aS,A.I,16)
D.dsB=w([D.b7W],x.V)
D.dta=w(["solar","turbine","crank","pot"],x.s)
D.dtB=w([0,0.35,0.75,1],x.n)
D.duX=w(["volts","level","ohms","on"],x.s)
D.dwn=w([A.jF,A.CG,A.Cm,A.qB,Z.HF,A.uK,A.z5,A.qE,A.i9,A.ou,A.ho,A.e5,A.hC,A.ia,A.mQ,A.lJ,A.uJ,A.rU,A.lc,A.Hc,A.wB,A.Cu,A.Cq,A.a2F,A.ON,A.CC,A.OW,A.apm,H.aq3,A.kp],x.w)
D.eg1={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.hnv=new C.yt("Switch",F.rS,A.bs,0,"Tap it to turn it ON or OFF.")
D.hnr=new C.yt("Blinker",A.os,A.bv,0,"Turns itself ON and OFF. Tap to change the speed.")
D.hns=new C.yt("AND",D.aq7,A.cp,2,"ON only when BOTH inputs are ON.")
D.bP9=new B.a0(63671,"MaterialIcons",!1)
D.hnq=new C.yt("OR",D.bP9,A.bq,2,"ON when EITHER input is ON.")
D.hnt=new C.yt("XOR",Aa.a21,A.c_,2,"ON when the inputs are DIFFERENT.")
D.hnn=new C.yt("NAND",A.ux,A.aJ,2,"OFF only when BOTH inputs are ON.")
D.bOf=new B.a0(63176,"MaterialIcons",!1)
D.hno=new C.yt("NOR",D.bOf,A.hj,2,"ON only when BOTH inputs are OFF.")
D.hnp=new C.yt("NOT",Y.CH,A.cG,1,"Flips the signal: ON becomes OFF.")
D.hnu=new C.yt("Light",A.qA,A.dB,1,"Glows when its input is ON.")
D.hnw=new C.yt("Buzzer",A.ot,A.c0,1,"Beeps while its input is ON.")
D.zL=new B.bu(D.eg1,[D.hnv,D.hnr,D.hns,D.hnq,D.hnt,D.hnn,D.hno,D.hnp,D.hnu,D.hnw],B.as("bu<m,yt>"))
D.cZe=w([A.A],x.M)
D.cZB=w([A.az,A.aE],x.M)
D.d87=w([A.az,A.A,A.aE],x.M)
D.d9H=w([A.az,A.lu,A.A,A.lv,A.aE],x.M)
D.dnO=w([A.az,A.lu,A.a5,A.a8,A.lv,A.aE],x.M)
D.dB8=new B.dq([1,D.cZe,2,D.cZB,3,D.d87,4,A.aCy,5,D.d9H,6,D.dnO],B.as("dq<G,ai<da>>"))
D.eiq={Calm:0,Box:1,Sleep:2}
D.cGl=w([4,2,6,0],x.n)
D.cGs=w([4,4,4,4],x.n)
D.cGt=w([4,7,8,0],x.n)
D.SG=new B.bu(D.eiq,[D.cGl,D.cGs,D.cGt],B.as("bu<m,ai<I>>"))
D.egd={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.xv=new C.a10(0,"source")
D.d99=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.htQ=new C.qm("Clock",A.os,D.xv,A.bv,D.d99)
D.htM=new C.qm("Button",A.CK,D.xv,A.aT,A.Y)
D.dsl=w(["random","quick","slow"],x.s)
D.htX=new C.qm("Dice",A.om,D.xv,A.c_,D.dsl)
D.bOO=new B.a0(63484,"MaterialIcons",!1)
D.EU=new C.a10(1,"logic")
D.dxd=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.htT=new C.qm("Delay",D.bOO,D.EU,A.cp,D.dxd)
D.dk6=w(["fast","mid","slow"],x.s)
D.htY=new C.qm("Echo",A.apC,D.EU,A.bq,D.dk6)
D.htV=new C.qm("Every 2nd",Y.CH,D.EU,A.hj,A.Y)
D.bOt=new B.a0(63309,"MaterialIcons",!1)
D.htS=new C.qm("Every 3rd",D.bOt,D.EU,A.aJ,A.Y)
D.bQp=new B.a0(983902,"MaterialIcons",!1)
D.c85=w(["50%","25%","75%"],x.s)
D.hu_=new C.qm("Chance",D.bQp,D.EU,A.cG,D.c85)
D.ra=new C.a10(2,"out")
D.htO=new C.qm("Light",A.qA,D.ra,A.dB,A.Y)
D.htP=new C.qm("Burst",A.kp,D.ra,A.c_,A.Y)
D.htN=new C.qm("Ripple",A.zb,D.ra,A.b8,A.Y)
D.htW=new C.qm("Ball",A.apN,D.ra,A.cG,A.Y)
D.htU=new C.qm("Comet",A.ou,D.ra,A.bq,A.Y)
D.bQ9=new B.a0(983669,"MaterialIcons",!1)
D.htZ=new C.qm("Shake",D.bQ9,D.ra,A.c0,A.Y)
D.hu0=new C.qm("Pop",A.Hd,D.ra,A.ba,A.Y)
D.htR=new C.qm("Wash",A.P_,D.ra,A.p3,A.Y)
D.mW=new B.bu(D.egd,[D.htQ,D.htM,D.htX,D.htT,D.htY,D.htV,D.htS,D.hu_,D.htO,D.htP,D.htN,D.htW,D.htU,D.htZ,D.hu0,D.htR],B.as("bu<m,qm>"))
D.egp={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.Ac=new C.JR(0,"tv")
D.f6x=new C.mo("Samsung Neo QLED 8K",D.Ac,F.FL,A.aJ)
D.f6o=new C.mo("LG OLED evo G5",D.Ac,A.ei,A.hf)
D.f6f=new C.mo("Sony Bravia 9",D.Ac,A.rk,A.bu)
D.f6j=new C.mo("Apple TV 4K",D.Ac,A.e2,A.bO)
D.f6g=new C.mo("Bang and Olufsen Beovision",D.Ac,F.Fp,F.tR)
D.JQ=new C.JR(1,"iphone")
D.aRf=new C.mo("iPhone 18 Pro Max",D.JQ,D.ajG,A.cf)
D.wZ=new C.JR(3,"fold")
D.btX=new B.t(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.f6t=new C.mo("iPhone Fold",D.wZ,D.btX,A.b7)
D.vl=new C.JR(2,"android")
D.f6u=new C.mo("Samsung Galaxy S26 Ultra",D.vl,F.XR,A.d3)
D.bmJ=new B.t(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.f6m=new C.mo("Samsung Galaxy Z Fold7",D.wZ,D.bmJ,A.cw)
D.f6i=new C.mo("Google Pixel 10 Pro XL",D.vl,A.dn,A.bf)
D.f6q=new C.mo("Xiaomi 16 Ultra",D.vl,A.i5,A.cd)
D.f6l=new C.mo("Huawei Mate 80 Pro Max",D.vl,A.el,A.ax)
D.f6h=new C.mo("OPPO Find X9 Ultra",D.vl,A.dY,A.ba)
D.f6z=new C.mo("Honor Magic V5",D.wZ,A.d7,A.cp)
D.f6n=new C.mo("vivo X300 Pro",D.vl,A.hP,A.cG)
D.Ui=new C.JR(4,"tablet")
D.f6s=new C.mo("iPad Pro M5",D.Ui,A.dn,A.aJ)
D.a90=new C.JR(5,"reader")
D.f6A=new C.mo("Kindle Scribe",D.a90,A.e9,A.bu)
D.Ad=new C.JR(6,"computer")
D.f6r=new C.mo("MacBook Pro M5 Max",D.Ad,A.dn,A.cf)
D.f6w=new C.mo("iMac 32 inch",D.Ad,A.bO,A.cw)
D.f6p=new C.mo("Pro Display XDR 8K",D.Ad,A.i5,A.b8)
D.f6k=new C.mo("Sony Laser Projector",D.Ad,A.cr,A.dB)
D.f6v=new C.mo("Luxury car touchscreen",D.Ad,M.nl,A.ax)
D.f6y=new C.mo("Apple Vision Pro",D.Ad,A.hm,A.bq)
D.ml=new B.bu(D.egp,[D.f6x,D.f6o,D.f6f,D.f6j,D.f6g,D.aRf,D.f6t,D.f6u,D.f6m,D.f6i,D.f6q,D.f6l,D.f6h,D.f6z,D.f6n,D.f6s,D.f6A,D.f6r,D.f6w,D.f6p,D.f6k,D.f6v,D.f6y],B.as("bu<m,mo>"))
D.egz={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bwJ=new C.fT(20,4,13,!1)
D.bx9=new C.fT(14,5,13.5,!1)
D.bx0=new C.fT(9,2.4,10,!1)
D.bxe=new C.fT(7,5,12.5,!1)
D.bx3=new C.fT(8,3.5,12,!1)
D.bwF=new C.fT(15,2,6,!1)
D.bxc=new C.fT(45,6,13.5,!0)
D.bwV=new C.fT(10,8,13.5,!1)
D.bwN=new C.fT(25,3,12,!0)
D.bwT=new C.fT(35,4,12,!0)
D.bwU=new C.fT(40,4.5,9.5,!0)
D.bwW=new C.fT(55,3,9,!0)
D.bwG=new C.fT(18,3,9,!1)
D.bxb=new C.fT(22,4,13.5,!1)
D.bx4=new C.fT(16,5,13.5,!1)
D.bwR=new C.fT(30,4,9,!0)
D.bxn=new C.fT(5,3.5,13,!1)
D.bwZ=new C.fT(25,3,13.5,!0)
D.bx7=new C.fT(14,2.5,9,!1)
D.bwY=new C.fT(6,6,13,!1)
D.bxf=new C.fT(30,1.2,5,!0)
D.bxm=new C.fT(35,3,4.5,!0)
D.bxi=new C.fT(20,4.5,7.5,!0)
D.bwX=new C.fT(55,5.5,13.5,!0)
D.bwE=new C.fT(45,5.5,13.5,!0)
D.bx8=new C.fT(40,5.5,13.5,!0)
D.bxl=new C.fT(60,6,13.5,!0)
D.aka=new C.fT(28,4,7,!0)
D.Go=new C.fT(25,4,7,!0)
D.bwQ=new C.fT(30,4,7,!0)
D.bwL=new C.fT(22,4,7,!0)
D.bwM=new C.fT(24,4,7,!0)
D.bx_=new C.fT(60,3,5.5,!0)
D.bwH=new C.fT(18,9,14,!0)
D.bwO=new C.fT(25,9,14,!0)
D.akb=new C.fT(30,8,14,!0)
D.bwK=new C.fT(20,8,14,!0)
D.bwS=new C.fT(30,9,14,!0)
D.bxg=new C.fT(22,5,9.5,!0)
D.bwI=new C.fT(30,2.5,10.5,!0)
D.bx5=new C.fT(50,5.5,13.5,!0)
D.bxk=new C.fT(12,2,9.5,!1)
D.bx2=new C.fT(16,1.3,9.5,!0)
D.bxd=new C.fT(40,2.5,7,!0)
D.bxj=new C.fT(60,1.2,4.8,!0)
D.bxh=new C.fT(18,5,13.5,!0)
D.bxa=new C.fT(8,2,9.5,!1)
D.bx1=new C.fT(12,2.5,8,!1)
D.bwP=new C.fT(20,3.5,13.5,!0)
D.bx6=new C.fT(3.5,3,13,!1)
D.zM=new B.bu(D.egz,[D.bwJ,D.bx9,D.bx0,D.bxe,D.bx3,D.bwF,D.bxc,D.bwV,D.bwN,D.bwT,D.bwU,D.bwW,D.bwG,D.bxb,D.bx4,D.bwR,D.bxn,D.bwZ,D.bx7,D.bwY,D.bxf,D.bxm,D.bxi,D.bwX,D.bwE,D.bx8,D.bxl,D.aka,D.Go,D.bwQ,D.Go,D.bwL,D.Go,D.bwM,D.aka,D.Go,D.bx_,D.bwH,D.bwO,D.akb,D.bwK,D.bwS,D.bxg,D.bwI,D.bx5,D.bxk,D.bx2,D.bxd,D.bxj,D.Go,D.akb,D.bxh,D.bxa,D.bx1,D.bwP,D.bx6],B.as("bu<m,fT>"))
D.egb={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eWm=new B.z("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eBm=new B.z("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eBh=new B.z("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eNL=new B.z("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eOI=new B.z("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eNH=new B.z("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.ezn=new B.z("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.eLE=new B.z("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eWu=new B.z("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eP3=new B.z("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eEK=new B.z("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.ez1=new B.z("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eDJ=new B.z("Movement","They pull your legs together and help you balance.")
D.eFH=new B.z("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eBv=new B.z("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eTO=new B.z("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eUY=new B.z("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.eLm=new B.z("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eUH=new B.z("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eJX=new B.z("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.ePc=new B.z("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.ez8=new B.z("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eG3=new B.z("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eOR=new B.z("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.eKi=new B.z("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eUP=new B.z("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eNb=new B.z("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.ezl=new B.z("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.ePN=new B.z("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eTr=new B.z("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eRy=new B.z("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.exn=new B.z("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eMU=new B.z("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eMY=new B.z("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.eGO=new B.z("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eBJ=new B.z("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.eFv=new B.z("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.eLO=new B.z("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eSn=new B.z("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eWr=new B.z("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eP9=new B.z("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.ex5=new B.z("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.eM_=new B.z("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.exW=new B.z("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eSD=new B.z("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eTK=new B.z("Movement","These lift your foot up so your toes do not drag on the ground.")
D.eMq=new B.z("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eSS=new B.z("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eza=new B.z("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eUl=new B.z("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eD5=new B.z("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eS0=new B.z("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eGs=new B.z("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eKc=new B.z("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.ePt=new B.z("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eUv=new B.z("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eUn=new B.z("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eUr=new B.z("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.eKK=new B.z("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eQl=new B.z("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eRv=new B.z("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eU7=new B.z("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.eMp=new B.z("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.eIw=new B.z("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eHe=new B.z("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eMP=new B.z("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.ePm=new B.z("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.eJ2=new B.z("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eJK=new B.z("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eDt=new B.z("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eTG=new B.z("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eEj=new B.z("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.exT=new B.z("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.eGN=new B.z("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.exO=new B.z("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eCa=new B.z("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.eGS=new B.z("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eEt=new B.z("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.ePJ=new B.z("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eFK=new B.z("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eW9=new B.z("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eHo=new B.z("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.eKD=new B.z("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eNj=new B.z("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eEC=new B.z("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eEl=new B.z("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dCh=new B.bu(D.egb,[D.eWm,D.eBm,D.eBh,D.eNL,D.eOI,D.eNH,D.ezn,D.eLE,D.eWu,D.eP3,D.eEK,D.ez1,D.eDJ,D.eFH,D.eBv,D.eTO,D.eUY,D.eLm,D.eUH,D.eJX,D.ePc,D.ez8,D.eG3,D.eOR,D.eKi,D.eUP,D.eNb,D.ezl,D.ePN,D.eTr,D.eRy,D.exn,D.eMU,D.eMY,D.eGO,D.eBJ,D.eFv,D.eLO,D.eSn,D.eWr,D.eP9,D.ex5,D.eM_,D.exW,D.eSD,D.eTK,D.eMq,D.eSS,D.eza,D.eUl,D.eD5,D.eS0,D.eGs,D.eKc,D.ePt,D.eUv,D.eUn,D.eUr,D.eKK,D.eQl,D.eRv,D.eU7,D.eMp,D.eIw,D.eHe,D.eMP,D.ePm,D.eJ2,D.eJK,D.eDt,D.eTG,D.eEj,D.exT,D.eGN,D.exO,D.eCa,D.eGS,D.eEt,D.ePJ,D.eFK,D.eW9,D.eHo,D.eKD,D.eNj,D.eEC,D.eEl],B.as("bu<m,+(m,m)>"))
D.dCj=new B.hj(A.G,11)
D.dCn=new B.hj(A.G,30)
D.dJs=new C.V1(null)
D.dJF=new C.V2(null)
D.dLG=new C.V6(null)
D.dMu=new C.VH(null)
D.dMy=new C.VI(null)
D.dN6=new C.VQ(null)
D.dQL=new C.Wo(null)
D.dRr=new C.Wp(null)
D.dVE=new C.Wu(null)
D.eax=new C.Wv(null)
D.eaA=new C.Wz(null)
D.ecK=new C.WT(null)
D.ecL=new C.a8Y(null)
D.eeO=new C.X1(null)
D.eiD=new B.u(0,118)
D.aKH=new B.u(0,13)
D.eiE=new B.u(0,17)
D.eiH=new B.u(0,330)
D.eiN=new B.u(0,-13)
D.eiO=new B.u(0,-17)
D.eiP=new B.u(0,-18)
D.eiQ=new B.u(0,-19)
D.eiT=new B.u(0,-28)
D.eiU=new B.u(0,-31)
D.eiV=new B.u(0,-32)
D.eiZ=new B.u(-9.5,-11)
D.ej1=new B.u(10,20)
D.ej4=new B.u(10,-13)
D.ej5=new B.u(10,-22)
D.ej6=new B.u(10,-4)
D.a7Q=new B.u(11,8)
D.eje=new B.u(12,2)
D.ejf=new B.u(14,0)
D.ejg=new B.u(14,12)
D.aKS=new B.u(14,8)
D.ejh=new B.u(14,-17)
D.aKU=new B.u(14,-3)
D.aKV=new B.u(14,-4)
D.ejk=new B.u(15,0)
D.ejl=new B.u(15,-12)
D.ejo=new B.u(16,-8)
D.ejp=new B.u(18,14)
D.ejq=new B.u(18,-12)
D.aL_=new B.u(20,0)
D.ejy=new B.u(20,15)
D.ejz=new B.u(20,-17)
D.ejA=new B.u(20,-3)
D.ejB=new B.u(21,8)
D.ejF=new B.u(22,10)
D.aL1=new B.u(22,8)
D.ejG=new B.u(24,0)
D.ejH=new B.u(24,2)
D.ejK=new B.u(24,-18)
D.ejL=new B.u(24,-22)
D.ejP=new B.u(25,8)
D.ejQ=new B.u(26,0)
D.ejW=new B.u(28,-30)
D.ek1=new B.u(30,18)
D.ek2=new B.u(30,2)
D.ek5=new B.u(31,19)
D.ek7=new B.u(32,0)
D.aL5=new B.u(34,0)
D.aL6=new B.u(34,-32)
D.Jo=new B.u(36,0)
D.ekk=new B.u(3,-1)
D.ekn=new B.u(40,3)
D.ekB=new B.u(4,11)
D.ekE=new B.u(4,-2)
D.ekJ=new B.u(5,0)
D.ekK=new B.u(5,17)
D.ekL=new B.u(5,6)
D.ekQ=new B.u(6,11)
D.ekW=new B.u(8,7)
D.ekX=new B.u(8,-10)
D.ekY=new B.u(8,-14)
D.aLb=new B.u(9,0)
D.el7=new B.u(-20.5,-17.6)
D.el8=new B.u(-9,18.5)
D.elb=new B.u(-2.6,-1)
D.elk=new B.u(2.6,1)
D.elr=new B.u(-9,12.2)
D.elL=new B.u(-9,20.5)
D.em6=new B.u(-10,0)
D.em7=new B.u(-10,12)
D.aLj=new B.u(-10,4)
D.emd=new B.u(-11,-2)
D.emh=new B.u(-13,-5)
D.emi=new B.u(-14,0)
D.emj=new B.u(-14,13)
D.emk=new B.u(-14,2)
D.eml=new B.u(-14,-12)
D.emm=new B.u(-14,-19)
D.emo=new B.u(-14,-23)
D.emp=new B.u(-15,6)
D.ems=new B.u(-16,14)
D.emu=new B.u(-16,-8)
D.emv=new B.u(-17,10)
D.emw=new B.u(-17,-18)
D.emx=new B.u(-17,-8)
D.emz=new B.u(-18,20)
D.emA=new B.u(-18,-9)
D.aLl=new B.u(-20,0)
D.emC=new B.u(-20,16)
D.emD=new B.u(-20,-9)
D.TC=new B.u(-22,8)
D.emE=new B.u(-22,-10)
D.emF=new B.u(-22,-11)
D.emG=new B.u(-24,10)
D.emH=new B.u(-24,11)
D.emI=new B.u(-24,14)
D.emJ=new B.u(-24,-22)
D.emL=new B.u(-25,-11)
D.emM=new B.u(-26,0)
D.emN=new B.u(-26,-18)
D.emO=new B.u(-2,9)
D.emP=new B.u(-2,-10)
D.emQ=new B.u(-2,-20)
D.emT=new B.u(-2,-9)
D.emV=new B.u(-32,0)
D.aLn=new B.u(-34,0)
D.en_=new B.u(-40,3)
D.en1=new B.u(-4,11)
D.en2=new B.u(-4,-17)
D.en3=new B.u(-4,-2)
D.en7=new B.u(-5,0)
D.en8=new B.u(-5,20)
D.en9=new B.u(-5,6)
D.ena=new B.u(-6,26)
D.enb=new B.u(-6,6)
D.enc=new B.u(-6,-42)
D.end=new B.u(-7,-19)
D.ene=new B.u(-7,-24)
D.enh=new B.u(-8,-9)
D.a7Y=new B.u(-9,0)
D.eni=new B.u(-9,1)
D.enk=new B.u(-9,-23)
D.fDt=new B.y("Thinking\u2026",null,A.hu,null,null,null,null,null,null,null,null,null)
D.eom=new B.D(A.jB,D.fDt,null)
D.fUb=new B.y("Start from a ready-made board",null,A.fy,null,null,null,null,null,null,null,null,null)
D.eoz=new B.D(A2.wb,D.fUb,null)
D.bEJ=new B.Q(4,0,4,14)
D.fyG=new B.F(!0,A.aC,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEt=new B.y("Games and little helpers for a spare minute.",null,D.fyG,null,null,null,null,null,null,null,null,null)
D.eoL=new B.D(D.bEJ,D.fEt,null)
D.dkH=w([A.iA,A.bn],x.O)
D.aQe=new B.c_(A.A,0.5,A.x,null,0,D.dkH,null,null)
D.evW=new B.c_(A.A,0.5,A.x,null,0,D.aCg,null,null)
D.dbw=w([A.c,A.bL],x.O)
D.evY=new B.c_(A.A,0.5,A.x,null,0,D.dbw,null,null)
D.dto=w([A.bO,A.hm],x.O)
D.aQf=new B.c_(A.A,0.5,A.x,null,0,D.dto,null,null)
D.cQi=w([A.c,A.bO],x.O)
D.ew1=new B.c_(A.tB,0.5,A.x,null,0,D.cQi,null,null)
D.bu0=new B.t(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.dro=w([A.fe,D.bu0],x.O)
D.ew7=new B.c_(A.tB,0.5,A.x,null,0,D.dro,null,null)
D.cJt=w([A.dn,A.cr],x.O)
D.ew8=new B.c_(A.A,0.5,A.x,null,0,D.cJt,null,null)
D.cYb=w([A.fU,A.aT,A.d0],x.O)
D.ewb=new B.c_(A.tB,0.5,A.x,null,0,D.cYb,null,null)
D.dll=w([A.hm,M.nl],x.O)
D.ewc=new B.c_(A.tB,0.5,A.x,null,0,D.dll,null,null)
D.ewg=new B.c_(A.A,0.5,A.x,null,0,D.ayt,null,null)
D.due=w([A.hm,A.hY],x.O)
D.ewo=new B.c_(A.A,0.5,A.x,null,0,D.due,null,null)
D.aQj=new B.aP(9,9)
D.eww=new B.aP(1.4,1.4)
D.f36=new B.a3(10,-8,18,-2)
D.f37=new B.a3(14,-14,20,14)
D.f39=new B.a3(20,-2,30,2)
D.f3e=new B.a3(4,-13,30,-3)
D.f3k=new B.a3(8,-7,12,7)
D.f3w=new B.a3(-12,12,12,19)
D.f3x=new B.a3(-12,14,12,22)
D.f3y=new B.a3(-12,-22,12,8)
D.f3z=new B.a3(-12,-25,12,19)
D.f3A=new B.a3(-12,-26,12,-6)
D.f3B=new B.a3(-12,-4,12,14)
D.f3D=new B.a3(-14,20,14,24)
D.f3E=new B.a3(-14,6,14,10)
D.f3F=new B.a3(-14,-17,14,15)
D.f3G=new B.a3(-14,-26,14,18)
D.f3H=new B.a3(-14,-4,14,20)
D.f3J=new B.a3(-15,-29,15,25)
D.f3K=new B.a3(-16,-16,16,16)
D.f3N=new B.a3(-16,-22,-9,18)
D.f3O=new B.a3(-16,-24,16,-10)
D.f3Q=new B.a3(-16,-2,16,20)
D.f3S=new B.a3(-18,20,18,24)
D.f3T=new B.a3(-18,-18,18,20)
D.f3U=new B.a3(-20,12,20,22)
D.f3V=new B.a3(-20,-28,20,26)
D.f3W=new B.a3(-22,14,22,18)
D.aQX=new B.a3(-22,-26,22,24)
D.f3X=new B.a3(-22,-3,22,3)
D.f3Y=new B.a3(-22,-4,22,12)
D.f4_=new B.a3(-24,-12,10,22)
D.f40=new B.a3(-24,-14,22,8)
D.f41=new B.a3(-24,-6,24,20)
D.aQY=new B.a3(-24,-9,24,9)
D.f42=new B.a3(-25,14,25,19)
D.f43=new B.a3(-26,-14,14,8)
D.f44=new B.a3(-26,-4,26,20)
D.f45=new B.a3(-26,-6,4,6)
D.aQZ=new B.a3(-28,-13,28,13)
D.f46=new B.a3(-28,-16,28,16)
D.f47=new B.a3(-28,-16,28,8)
D.f48=new B.a3(-28,-22,28,22)
D.f49=new B.a3(-30,-12,30,14)
D.f4a=new B.a3(-30,-14,0,14)
D.f4b=new B.a3(-30,-18,30,20)
D.f4c=new B.a3(-30,-28,30,14)
D.f4d=new B.a3(-30,-2,30,18)
D.f4e=new B.a3(-30,-4,30,18)
D.f4f=new B.a3(-32,-17,32,17)
D.f4g=new B.a3(-32,-28,32,18)
D.f4h=new B.a3(-33,-21,33,17)
D.f4i=new B.a3(-34,14,34,26)
D.a8S=new B.a3(-34,-18,34,18)
D.f4j=new B.a3(-34,-4,34,7)
D.f4k=new B.a3(-36,-24,36,20)
D.f4l=new B.a3(-38,-22,38,22)
D.f4n=new B.a3(-3,12,3,22)
D.f4o=new B.a3(-3,5,3,15)
D.f4s=new B.a3(-46,-34,46,28)
D.f4u=new B.a3(-48,-3,48,3)
D.f4x=new B.a3(-6,18,24,24)
D.f4y=new B.a3(-6,5,6,12)
D.f4z=new B.a3(-6,-22,6,-15)
D.f4D=new B.a3(-9,-16,9,22)
D.f4E=new B.a3(-4.5,-24,4.5,-21.2)
D.f4G=new B.a3(14,-9,17.5,9)
D.ehQ={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aRT=new B.dx(D.ehQ,5,x.Q)
D.ehk={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.f7T=new B.dx(D.ehk,10,x.Q)
D.fab=new B.av(24,44)
D.faz=new B.av(54,38)
D.faG=new B.av(66,38)
D.bcA=new B.fl(2,null,null,null,null,A.bq,null,null,null,null)
D.fbI=new B.a4(16,16,D.bcA,null)
D.aSS=new B.hL(3,12,12,0.82,null)
D.fos=new B.F(!0,A8.xQ,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fj_=new B.es("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cL,null,null,null,null,null,null,D.fos)
D.ftu=new B.F(!0,A.kF,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fj5=new B.es("AI",null,null,A.cL,null,null,null,null,null,null,D.ftu)
D.fjn=new B.F(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjU=new B.F(!0,A.bk,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkg=new B.F(!0,A.cp,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkN=new B.F(!0,A.bU,null,null,null,null,11,A.U,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkS=new B.F(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl8=new B.F(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flE=new B.F(!0,A.aR,null,null,null,null,12,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8A=new B.cW(A.hy,A.dC,6)
D.dex=w([D.f8A],B.as("O<cW>"))
D.fmB=new B.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.dex,null,null,null)
D.fmG=new B.F(!0,A.ep,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmL=new B.F(!0,A.bU,null,null,null,null,10.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnn=new B.F(!0,A.bU,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnv=new B.F(!0,A.aC,null,null,null,null,null,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fow=new B.F(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fp1=new B.F(!0,A.aC,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpy=new B.F(!0,A.aT,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpA=new B.F(!0,A.c,null,null,null,null,10.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.aCB,null,null,null)
D.fpG=new B.F(!0,A.c,null,null,null,null,12.5,A.a7,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fru=new B.F(!0,A.u4,null,null,null,null,12.5,A.U,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs4=new B.F(!0,A.bM,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fs9=new B.F(!0,A.bU,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fse=new B.F(!0,A.aC,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft0=new B.F(!0,A.mG,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftf=new B.F(!0,A.ac,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aV0=new B.F(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuj=new B.F(!0,A.fV,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuC=new B.F(!0,A.bU,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv8=new B.F(!0,A.ba,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwB=new B.F(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx5=new B.F(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxn=new B.F(!0,A.aT,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxJ=new B.F(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxM=new B.F(!0,A.aT,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyw=new B.F(!0,A.aR,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyV=new B.F(!0,A.u4,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzh=new B.F(!0,A.ba,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmO=new B.F(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzG=new B.y("\u26a0\ufe0f ",null,D.fmO,null,null,null,null,null,null,null,null,null)
D.fzT=new B.y("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.x8,null,null,null,null,null,null,null,null,null)
D.fBw=new B.y("Pick one, then change it and see what happens.",null,A.x8,null,null,null,null,null,null,null,null,null)
D.fBA=new B.y("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.fnX=new B.F(!0,A.ac,null,null,null,null,null,A.U,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCw=new B.y("What do you want to invent? Type it below, or tap an idea.",null,D.fnX,null,null,null,null,null,null,null,null,null)
D.fE3=new B.y("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fEH=new B.y("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fFj=new B.y("Make it yours",null,A.ka,null,null,null,null,null,null,null,null,null)
D.fIu=new B.y("5G",null,X.aUl,null,null,null,null,null,null,null,null,null)
D.fuU=new B.F(!0,A.bU,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJF=new B.y("WHAT HAPPENS",null,D.fuU,null,null,null,null,null,null,null,null,null)
D.fLp=new B.y("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fM6=new B.y("Change the words and pictures on the three slabs.",null,A.x8,null,null,null,null,null,null,null,null,null)
D.fMh=new B.y("All the parts and wires will be removed.",null,A.he,null,null,null,null,null,null,null,null,null)
D.fMB=new B.y("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fNa=new B.y("Tap the crank on the board again and again to spin it faster.",null,A.hu,null,null,null,null,null,null,null,null,null)
D.fOp=new B.y("\ud83c\udfaf Challenges",null,A.de,null,null,null,null,null,null,null,null,null)
D.fOY=new B.y("Remove this part",null,W.aTW,null,null,null,null,null,null,null,null,null)
D.fPf=new B.y("Clear the board?",null,A.df,null,null,null,null,null,null,null,null,null)
D.fuk=new B.F(!0,A.bv,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPv=new B.y("How the Lab works",null,D.fuk,null,null,null,null,null,null,null,null,null)
D.fll=new B.F(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPR=new B.y("Electronics Lab",null,D.fll,null,null,null,null,A.a1,null,1,null,null)
D.fPV=new B.y("?",null,O.aVv,null,null,null,null,null,null,null,null,null)
D.fRc=new B.y("Ready-made circuits",null,A.de,null,null,null,null,null,null,null,null,null)
D.fRQ=new B.y("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hu,null,null,null,null,null,null,null,null,null)
D.fxr=new B.F(!0,A.aT,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVj=new B.y("\u26a0 There is no air here, so a parachute will not work.",null,D.fxr,null,null,null,null,null,null,null,null,null)
D.fWw=new B.y("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,W.aTU,null,null,null,null,null,null,null,null,null)
D.fX0=new B.y("NGMY",null,A.vu,null,null,null,null,null,null,null,null,null)
D.fXd=new B.y("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.Vs,null,null,null,null,null,null,null,null,null)
D.fXC=new B.y("Tap it to change its setting. Drag from the right dot to connect.",null,A.ms,null,null,null,null,null,null,null,null,null)
D.fYF=new B.y("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.x8,null,null,null,null,null,null,null,null,null)
D.fYH=new B.y("TOOLBOX",null,A7.aab,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hqL=null
$.hqK=null
$.hx_=0
$.hZo=B.U(x.N,B.as("iH"))
$.hZZ=B.U(x.N,B.as("iH"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iw3","bGh",()=>{var v="led"
return B.a([C.azu("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fq1(),v),C.azu("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fq2(),v),C.azu("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fq3(),v),C.azu("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fqa(),v),C.azu("Not both","Make the light go OFF only when both switches are ON.",2,new C.fqb(),v),C.azu("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.fqc(),"buzzer")],B.as("O<bcy>"))})
w($,"iwv","bGi",()=>B.a([C.QS("UNIVERSE","Earth, space and gravity",A.Pm,A.aJ,new C.fqs()),C.QS("ELECTRONICS LAB","Batteries, wires, real circuits",Af.Cr,A.aJ,new C.fqt()),C.QS("DISCOVERY LAB","Body Explorer: a real 3D human",D.bNG,A.ba,new C.fqu()),C.QS("TOOLBOX","Converter, clock, games",H.aoJ,A.cG,new C.fqv()),C.QS("REACTION LAB","Wire parts together",A.CO,A.bv,new C.fqw()),C.QS("SPARK PAINTER","Paint with light",A.OM,A.c_,new C.fqx()),C.QS("ROCKET LANDER","Land softly on the pad",A.ou,A.aJ,new C.fqy()),C.QS("TITLE ANIMATOR","Make a moving title",A.wD,A.bs,new C.fqz()),C.QS("CIRCUIT LAB","Connect logic, learn it",A.a2n,A.cp,new C.fqA())],B.as("O<buI>")))
w($,"iy5","qA",()=>{var v,u,t=B.U(x.N,x.B)
for(v=0;v<76;++v){u=D.RZ[v]
t.n(0,u.a,u)}return t})
w($,"iw4","aiz",()=>B.a([C.G6("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fqd()),C.G6("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fqe()),C.G6("Spin the motor","A battery and a motor in a loop will make it spin.",new C.fqf()),C.G6("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.fqg()),C.G6("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fqh()),C.G6("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fq4()),C.G6("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fq5()),C.G6("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fq6()),C.G6("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fq7()),C.G6("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fq8()),C.G6("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fq9())],B.as("O<bcz>")))
w($,"iwx","hFI",()=>B.a([C.a1x("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aT,A.cd,new C.fqI()),C.a1x("Focus Timer","Work, then rest","\u23f1\ufe0f",A.c0,A.bB,new C.fqJ()),C.a1x("Breathe","Calm down in a minute","\ud83e\udee7",A.hj,A.cw,new C.fqK()),C.a1x("Draw Pad","Sketch and share","\ud83c\udfa8",A.bE,A.b7,new C.fqL()),C.a1x("Memory Match","Find the pairs","\ud83c\udccf",A.aJ,A.cf,new C.fqM()),C.a1x("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bs,A.bf,new C.fqN()),C.a1x("Tip & Split","Share the bill","\ud83e\uddfe",A.ba,A.b1,new C.fqO()),C.a1x("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bq,A.aD,new C.fqP())],B.as("O<bw1>")))})()};
(a=>{a["dtC3rdZq1Bungh6magJoGQGW9hE="]=a.current})($__dart_deferred_initializers__);