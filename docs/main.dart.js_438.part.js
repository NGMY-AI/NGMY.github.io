((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,W,A9,A5,N,Aa,A6,Ab,A7,X,P,Y,Ac,O,Ad,Ae,Af,Ag,Ah,Ai,Aj,Ak,Al,Z,U,Am,An,Q,A_,R,S,A0,T,A1,Ao,E,I,G,L,Ap,Aq,Ar,A8,C={
bEK(d){return C.im2(d)},
im2(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bEK=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.rD(B.nI(""),d,A.ii,null,null).d8(0,At.a1F),$async$bEK)
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
return B.i($async$bEK,v)},
iyu(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.Tz[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.d_(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ag(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.fj(D.Tz,new C.fVp())
if(w==null)w=A.d.gH(D.Tz)
s=B.S(x.N,x.C)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.I)(r),++u){l=r[u].a
k=l[0]
l=$.qY().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.I)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gH(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.amE(w.a,w.b,m,w,s,!1)},
irY(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.O(D.U_,new C.fJt(),x.bd).aL(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
iGT(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.ca(b2,"{")
v=A.a.pr(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.V.aP(0,A.a.av(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aR(a5)
r=0
for(a6=x.j,a7=J.aO(a6.a(J.t(u,"parts"))),a8=x.i;a7.B();){q=a7.gP(a7)
p=B.v(J.t(q,"kind"))
o=B.v(J.t(q,"id"))
if(!$.qY().am(0,p)||J.eG(s,o)||J.aa(t)>=8)continue
J.bZ(s,o)
n=B.S(a5,a8)
for(a9=0;a9<4;++a9){m=D.dHR[a9]
l=J.t(q,m)
if(typeof l=="number")J.aL(n,m,l)}k=A.h.D(typeof J.t(q,"x")=="number"?B.dC(J.t(q,"x")):0.2+A.h.F(r,3)*0.3,0.16,0.84)
j=A.h.D(typeof J.t(q,"y")=="number"?B.dC(J.t(q,"y")):0.25+A.h.ao(r,3)*0.3,0.1,0.9)
J.bZ(t,new B.e1([o,p,k,j,n]));++r}if(J.aa(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aO(a6.a(J.t(u,"wires")));a5.B();){h=a5.gP(a5)
g=a6.a(h)
if(J.aa(g)<4)continue
f=B.v(J.t(g,0))
e=B.v(J.t(g,2))
d=A.n.D(A.h.M(B.dC(J.t(g,1))),0,1)
a0=A.n.D(A.h.M(B.dC(J.t(g,3))),0,1)
if(J.eG(s,f)&&J.eG(s,e)&&!J.z(f,e))J.bZ(i,new B.b7([f,d,e,a0]))}if(J.aa(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.R.a(J.t(u,"steps"))
a0=J.aO(a0==null?A.bN:a0)
while(a0.B()){a2=a0.gP(a0)
J.bZ(a1,B.v(a2))}a3=a1
a0=J.t(u,"title")
a0=B.v(a0==null?"My invention":a0)
a1=J.t(u,"explain")
a4=new C.nh(a0,B.v(a1==null?"":a1),t,i,A.M)
a0=a4.a
a1=a4.b
d=J.aa(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.t(u,"honest")
a5=B.v(a5==null?"":a5)
return new C.amE(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
iwY(d){var w,v,u=C.hyC()
d.C(u)
for(w=0;w<60;++w)u.w5(0,0.03333333333333333)
v=u.a
return A.d.aR(v,new C.fRo(u))&&!A.d.cC(v,new C.fRp())},
iwX(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.S(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.I)(l),++u){t=l[u];++v
k.n(0,t.a,$.qY().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.I)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.v(t.e)+" V")
if(p==="resistor")q.push(""+A.h.S(t.r)+" ohms")
if(A.d.q(D.dFU,p))q.push("level "+A.h.S(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.h.S(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aL(q,", ")+")"
s.push(B.v(p)+n+": "+o+", current "+A.h.a1(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.I)(w),++u){m=w[u]
l.push(B.v(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.v(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aL(s,"\n")+"\nWires: "+A.d.aL(l,"; ")},
iku(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.I)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aL(v,"\n")+"\n\n"}v=A.d.aL(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
iyt(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qY().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.U_[u]
if(A.d.aR(w,new C.fVm(s)))if(!B.d_(r,s.b.toLowerCase(),0))v=B.d_(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ag("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.X(w,new C.fVn(e),B.U(w).k("X<1>")).gar(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ag("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.h.a1(A.d.cF(w,0,new C.fVo())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ag("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gH(w)
w=$.qY().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
amE:function amE(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fVp:function fVp(){},
fJt:function fJt(){},
fRo:function fRo(d){this.a=d},
fRp:function fRp(){},
fVm:function fVm(d){this.a=d},
fVn:function fVn(d){this.a=d},
fVo:function fVo(){},
XE:function XE(d,e){this.c=d
this.a=e},
boY:function boY(d,e,f,g,h){var _=this
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
epY:function epY(d){this.a=d},
epZ:function epZ(d,e,f){this.a=d
this.b=e
this.c=f},
eq_:function eq_(d){this.a=d},
eqa:function eqa(d){this.a=d},
eqb:function eqb(d,e){this.a=d
this.b=e},
eq6:function eq6(d){this.a=d},
eq4:function eq4(d,e){this.a=d
this.b=e},
eq5:function eq5(d,e,f){this.a=d
this.b=e
this.c=f},
eq7:function eq7(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eq2:function eq2(d){this.a=d},
eq3:function eq3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eq8:function eq8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eq1:function eq1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eq9:function eq9(d,e){this.a=d
this.b=e},
eq0:function eq0(d,e){this.a=d
this.b=e},
eqe:function eqe(d){this.a=d},
eqd:function eqd(d){this.a=d},
eqf:function eqf(d){this.a=d},
eqc:function eqc(d){this.a=d},
eqg:function eqg(d,e){this.a=d
this.b=e},
eqh:function eqh(d,e){this.a=d
this.b=e},
eqi:function eqi(d,e){this.a=d
this.b=e},
eqj:function eqj(d,e){this.a=d
this.b=e},
bF6(d,e,f){var w=null
return B.w(B.a([B.c(d,w,w,w,w,w,w,D.fLW,w,w,w),B.c(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p)},
hMY(d,e,f,g){var w=null,v=B.n(24),u=B.K(f.j(0.6),A.r,1)
return B.at(B.q(w,B.w(B.a([B.c(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.aj,B.c(e,w,w,w,w,w,w,A.BG,A.K,w,w),A.aB,B.c0(A.fX,g,A.br,w,0,8)],x.p),A.l,w,A.e,A.P,0,A.p),A.f,w,w,new B.p(D.bl6,w,u,v,w,w,A.m),w,w,w,w,A.ae,w,w,w),w,w,w)},
Ho:function Ho(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vP:function vP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Y0:function Y0(d){this.a=d},
aHX:function aHX(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.fh$=j
_.hh$=k
_.bv$=l
_.ab$=m
_.c=_.a=null},
eFv:function eFv(){},
eFP:function eFP(d){this.a=d},
eFO:function eFO(d,e){this.a=d
this.b=e},
eFQ:function eFQ(){},
eFR:function eFR(){},
eFx:function eFx(d,e,f){this.a=d
this.b=e
this.c=f},
eFw:function eFw(d,e){this.a=d
this.b=e},
eFm:function eFm(d){this.a=d},
eFn:function eFn(d){this.a=d},
eFo:function eFo(d){this.a=d},
eFp:function eFp(d){this.a=d},
eFq:function eFq(d){this.a=d},
eFr:function eFr(d){this.a=d},
eFs:function eFs(d){this.a=d},
eFt:function eFt(d){this.a=d},
eFu:function eFu(d){this.a=d},
eFk:function eFk(d){this.a=d},
eFl:function eFl(d){this.a=d},
eFj:function eFj(d){this.a=d},
eFI:function eFI(d,e){this.a=d
this.b=e},
eFD:function eFD(d){this.a=d},
eFE:function eFE(d){this.a=d},
eFA:function eFA(d){this.a=d},
eFF:function eFF(d){this.a=d},
eFz:function eFz(d){this.a=d},
eFG:function eFG(d){this.a=d},
eFH:function eFH(d){this.a=d},
eFy:function eFy(d){this.a=d},
eFJ:function eFJ(d,e){this.a=d
this.b=e},
eFC:function eFC(d,e){this.a=d
this.b=e},
eFK:function eFK(d){this.a=d},
eFL:function eFL(d){this.a=d},
eFM:function eFM(d){this.a=d},
eFN:function eFN(d){this.a=d},
eFB:function eFB(d){this.a=d},
blQ:function blQ(d,e){this.b=d
this.a=e},
aQ3:function aQ3(){},
bCI:function bCI(){},
hHI(){var w=$.hHG
return w==null?$.hHG=$.oV().d05("assets/data/three.min.js"):w},
hHH(){var w=$.hHF
return w==null?$.hHF=C.cSY():w},
cSY(){var w=0,v=B.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cSY=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.oV().iA(0,"assets/data/body3d.bin"),$async$cSY)
case 3:d=a1
$.hHJ=J.eA(A.dM.gaS(d),d.byteOffset,d.byteLength)
t=B.U2(d)
s=t.getUint32(4,!0)
r=B.a([],x.h)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.k0(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.dsW[i]
g=B.b_((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a5z(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b7Z))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.beG(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cSY,v)},
c9J(){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$c9J=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.hc(B.a([C.hHH(),C.hHI()],x.D),x.K),$async$c9J)
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
return B.i($async$c9J,v)},
aWj:function aWj(d,e,f){this.a=d
this.b=e
this.c=f},
a5z:function a5z(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
beG:function beG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Wr:function Wr(d){this.a=d},
aGm:function aGm(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.fh$=u
_.hh$=v
_.bv$=w
_.ab$=a0
_.c=_.a=null},
dUE:function dUE(d){this.a=d},
dUD:function dUD(d,e){this.a=d
this.b=e},
dUe:function dUe(d){this.a=d},
dUf:function dUf(d,e){this.a=d
this.b=e},
dUg:function dUg(d){this.a=d},
dUh:function dUh(){},
dUF:function dUF(){},
dUi:function dUi(d,e){this.a=d
this.b=e},
dUj:function dUj(d){this.a=d},
dUk:function dUk(){},
dUl:function dUl(d){this.a=d},
dUn:function dUn(d,e){this.a=d
this.b=e},
dUm:function dUm(d){this.a=d},
dUb:function dUb(d,e,f){this.a=d
this.b=e
this.c=f},
dUc:function dUc(d){this.a=d},
dUd:function dUd(d){this.a=d},
dUu:function dUu(d){this.a=d},
dUv:function dUv(d,e){this.a=d
this.b=e},
dUw:function dUw(d,e){this.a=d
this.b=e},
dUx:function dUx(d){this.a=d},
dUt:function dUt(d,e){this.a=d
this.b=e},
dUy:function dUy(d,e){this.a=d
this.b=e},
dUs:function dUs(d,e){this.a=d
this.b=e},
dUz:function dUz(d){this.a=d},
dUr:function dUr(d){this.a=d},
dUA:function dUA(d){this.a=d},
dUq:function dUq(d){this.a=d},
dUB:function dUB(d){this.a=d},
dUp:function dUp(d){this.a=d},
dUC:function dUC(d){this.a=d},
dUo:function dUo(d){this.a=d},
aP7:function aP7(){},
aP8:function aP8(){},
c9K:function c9K(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c9L:function c9L(d,e){this.a=d
this.b=e},
c9M:function c9M(d){this.a=d},
aBE(d,e,f,g,h){return new C.bfu(d,e,f,g,h)},
hoo(d,e,f,g,h,i){return $.ihF.c0(0,d+"|"+B.v(e)+"|"+f.m()+"|"+B.v(g),new C.d_8(d,e,f,i,g,h))},
z2:function z2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Dr:function Dr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
o6:function o6(d,e,f){this.a=d
this.b=e
this.c=f},
bfu:function bfu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fCu:function fCu(){},
fCv:function fCv(){},
fCw:function fCw(){},
fCD:function fCD(){},
fCE:function fCE(){},
fCF:function fCF(){},
Wy:function Wy(d){this.a=d},
aGo:function aGo(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.fh$=o
_.hh$=p
_.bv$=q
_.ab$=r
_.c=_.a=null},
dWk:function dWk(d){this.a=d},
dVZ:function dVZ(d,e){this.a=d
this.b=e},
dW1:function dW1(){},
dWl:function dWl(){},
dVX:function dVX(d,e){this.a=d
this.b=e},
dVY:function dVY(d,e){this.a=d
this.b=e},
dW2:function dW2(d,e,f){this.a=d
this.b=e
this.c=f},
dVS:function dVS(){},
dVT:function dVT(){},
dVU:function dVU(d){this.a=d},
dVV:function dVV(d,e){this.a=d
this.b=e},
dVW:function dVW(d,e,f){this.a=d
this.b=e
this.c=f},
dW3:function dW3(){},
dW4:function dW4(d,e){this.a=d
this.b=e},
dW5:function dW5(d){this.a=d},
dW0:function dW0(d,e){this.a=d
this.b=e},
dW_:function dW_(d){this.a=d},
dVR:function dVR(d,e,f){this.a=d
this.b=e
this.c=f},
dWe:function dWe(d){this.a=d},
dWd:function dWd(d){this.a=d},
dWf:function dWf(d){this.a=d},
dWc:function dWc(d){this.a=d},
dWa:function dWa(d){this.a=d},
dWb:function dWb(d){this.a=d},
dW9:function dW9(d){this.a=d},
dW6:function dW6(d){this.a=d},
dW8:function dW8(d){this.a=d},
dWg:function dWg(d,e){this.a=d
this.b=e},
dWh:function dWh(d,e){this.a=d
this.b=e},
dWi:function dWi(d){this.a=d},
dW7:function dW7(d){this.a=d},
dWj:function dWj(d,e){this.a=d
this.b=e},
bfM:function bfM(d,e){this.b=d
this.a=e},
d_8:function d_8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aPc:function aPc(){},
bCr:function bCr(){},
i8a(){return new C.OS(null)},
S1(d,e,f,g,h){return new C.bxZ(d,e,f,g,h)},
bwj(d,e,f){return A.h.D((d-e)/(f-e),0,1)},
hoW(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
iAu(){return B.iL("construction","")},
OS:function OS(d){this.a=d},
LH:function LH(d,e){this.a=d
this.b=e},
Bq:function Bq(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aGF:function aGF(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
e1u:function e1u(d,e){this.a=d
this.b=e},
e1t:function e1t(d){this.a=d},
e1w:function e1w(d,e){this.a=d
this.b=e},
e1v:function e1v(d){this.a=d},
bxZ:function bxZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fCV:function fCV(){},
fCW:function fCW(){},
fCX:function fCX(){},
fCY:function fCY(){},
fCZ:function fCZ(){},
fD_:function fD_(){},
fD0:function fD0(){},
fD1:function fD1(){},
fD2:function fD2(){},
bwk:function bwk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fi7:function fi7(d){this.a=d},
fi6:function fi6(d,e){this.a=d
this.b=e},
fi4:function fi4(d){this.a=d},
fi8:function fi8(d){this.a=d},
fi5:function fi5(d,e){this.a=d
this.b=e},
ahp:function ahp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
agd:function agd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
RV:function RV(d,e,f,g,h,i,j,k,l,m){var _=this
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
bxm:function bxm(d,e){this.b=d
this.a=e},
bwS:function bwS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
beo:function beo(d,e){this.b=d
this.a=e},
aL3:function aL3(d,e){this.c=d
this.a=e},
aL4:function aL4(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.ch=-1
_.dt$=e
_.bc$=f
_.c=_.a=null},
fhO:function fhO(d){this.a=d},
fhN:function fhN(d){this.a=d},
fhD:function fhD(d){this.a=d},
fhE:function fhE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fhF:function fhF(d){this.a=d},
fhC:function fhC(d,e){this.a=d
this.b=e},
fhG:function fhG(d){this.a=d},
fhM:function fhM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fhL:function fhL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fhJ:function fhJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fhI:function fhI(d,e,f){this.a=d
this.b=e
this.c=f},
fhK:function fhK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fhH:function fhH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fhW:function fhW(d){this.a=d},
fhV:function fhV(d){this.a=d},
fhX:function fhX(d,e){this.a=d
this.b=e},
fhY:function fhY(d,e){this.a=d
this.b=e},
fhZ:function fhZ(d,e){this.a=d
this.b=e},
fhU:function fhU(d,e,f){this.a=d
this.b=e
this.c=f},
fi_:function fi_(d,e,f){this.a=d
this.b=e
this.c=f},
fhT:function fhT(d){this.a=d},
fhP:function fhP(d){this.a=d},
fi0:function fi0(d){this.a=d},
fi1:function fi1(d){this.a=d},
fhS:function fhS(d,e){this.a=d
this.b=e},
fi2:function fi2(d,e){this.a=d
this.b=e},
fhR:function fhR(d,e){this.a=d
this.b=e},
fi3:function fi3(d,e){this.a=d
this.b=e},
fhQ:function fhQ(d,e){this.a=d
this.b=e},
fhA:function fhA(){},
fhB:function fhB(){},
bvW:function bvW(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bvk:function bvk(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bf4:function bf4(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bvm:function bvm(d,e,f){this.b=d
this.c=e
this.a=f},
bzs:function bzs(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aQU:function aQU(){},
hOE(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a6(0,new B.m(w,0)),u=e.aI(0,new B.m(w,0)),t=1-f,s=3*t
return d.aM(0,t*t*t).a6(0,v.aM(0,s*t*f)).a6(0,u.aM(0,s*f*f)).a6(0,e.aM(0,f*f*f))},
blP(d,e,f,g,h,i){return $.iie.c0(0,d+"|"+B.v(e)+"|"+f.m()+"|"+B.v(g),new C.dvJ(d,e,f,i,g,h))},
a2C:function a2C(d,e){this.a=d
this.b=e},
qO:function qO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ry:function ry(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Dv:function Dv(d,e){this.a=d
this.b=e},
a0y:function a0y(d,e){this.a=d
this.b=e},
ahc:function ahc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2P:function a2P(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
DG:function DG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ae1:function ae1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aej:function aej(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
agh:function agh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
blN:function blN(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.c3$=_.bU$=0},
dvN:function dvN(d){this.a=d},
dvO:function dvO(d){this.a=d},
dvK:function dvK(d,e){this.a=d
this.b=e},
dvL:function dvL(d){this.a=d},
dvM:function dvM(d){this.a=d},
dvP:function dvP(d){this.a=d},
dvQ:function dvQ(d){this.a=d},
dvR:function dvR(d){this.a=d},
dvS:function dvS(d){this.a=d},
dvT:function dvT(d){this.a=d},
dvU:function dvU(d){this.a=d},
dvV:function dvV(d){this.a=d},
dvW:function dvW(d){this.a=d},
dvX:function dvX(d){this.a=d},
H9:function H9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Y_:function Y_(d){this.a=d},
aHW:function aHW(d,e,f,g,h,i,j){var _=this
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
eEQ:function eEQ(d){this.a=d},
eEF:function eEF(d){this.a=d},
eEH:function eEH(){},
eEI:function eEI(){},
eEL:function eEL(){},
eEM:function eEM(d,e,f){this.a=d
this.b=e
this.c=f},
eEN:function eEN(d){this.a=d},
eEO:function eEO(d){this.a=d},
eEJ:function eEJ(){},
eEK:function eEK(d){this.a=d},
eFf:function eFf(d){this.a=d},
eEP:function eEP(){},
eEB:function eEB(d){this.a=d},
eES:function eES(d){this.a=d},
eER:function eER(d){this.a=d},
eEU:function eEU(){},
eET:function eET(d,e){this.a=d
this.b=e},
eEE:function eEE(){},
eEC:function eEC(d){this.a=d},
eED:function eED(d){this.a=d},
eFd:function eFd(d){this.a=d},
eFc:function eFc(d){this.a=d},
eFe:function eFe(d){this.a=d},
eF3:function eF3(d,e){this.a=d
this.b=e},
eFb:function eFb(d){this.a=d},
eF9:function eF9(d){this.a=d},
eFa:function eFa(d){this.a=d},
eF8:function eF8(d){this.a=d},
eF7:function eF7(d){this.a=d},
eF4:function eF4(d){this.a=d},
eF5:function eF5(d){this.a=d},
eF6:function eF6(d){this.a=d},
eEG:function eEG(){},
eF_:function eF_(d){this.a=d},
eF0:function eF0(d){this.a=d},
eEZ:function eEZ(d){this.a=d},
eF1:function eF1(d){this.a=d},
eEY:function eEY(d){this.a=d},
eF2:function eF2(d){this.a=d},
eEX:function eEX(d){this.a=d},
eEW:function eEW(d){this.a=d},
eEV:function eEV(d,e){this.a=d
this.b=e},
blO:function blO(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dvJ:function dvJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aQ1:function aQ1(){},
hUy(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aI(0,e).gcE()*0.1
return new B.m((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
hyC(){var w=B.a([],x.bz),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a6H(w,v,u,A.cW,B.S(x.N,x.y))},
i1K(d,e,f){var w=d.c,v=e===0?-1:1
return new B.m(w*f.a+v*C.hyD(d),d.d*f.b)},
hyD(d){return 42+(D.mN.am(0,d.b)?(d.ch-1)*38:0)},
iml(d){var w,v,u,t,s
if(d.A(0,$.hKt))return $.hXG()
w=B.a([],x.n)
for(v=d.a,u=d.b,t=12;t<v;t+=24)for(s=12;s<u;s+=24){w.push(t)
w.push(s)}$.hKt=d
return $.imm=new Float32Array(B.cd(w))},
es:function es(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ui:function ui(d,e,f,g){var _=this
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
acF:function acF(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
adO:function adO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a6H:function a6H(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bSZ:function bSZ(){},
bT9:function bT9(d){this.a=d},
bT4:function bT4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bTa:function bTa(d){this.a=d},
bTb:function bTb(d){this.a=d},
bTd:function bTd(d){this.a=d},
bTe:function bTe(d){this.a=d},
bTc:function bTc(d){this.a=d},
bTf:function bTf(d,e,f){this.a=d
this.b=e
this.c=f},
bTg:function bTg(d){this.a=d},
bT0:function bT0(d){this.a=d},
bT1:function bT1(d){this.a=d},
bT_:function bT_(d){this.a=d},
bT2:function bT2(d,e,f){this.a=d
this.b=e
this.c=f},
bT3:function bT3(d){this.a=d},
bSY:function bSY(d){this.a=d},
bTh:function bTh(d,e){this.a=d
this.b=e},
bT5:function bT5(d,e){this.a=d
this.b=e},
bT8:function bT8(d){this.a=d},
bT7:function bT7(d){this.a=d},
bT6:function bT6(d){this.a=d},
alp:function alp(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bNj:function bNj(){},
bNk:function bNk(){},
bNi:function bNi(){},
nh:function nh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cxn:function cxn(d){this.a=d},
iGO(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new C.h7B(),c9=new C.h7D(),d0=new C.h7E(),d1=new C.h7C(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aq(w,d1.$3(new B.a4(w.a,w.b,w.c,w.d),A.cm,A.bQ))
d3.ah(D.eFT,D.eCP,c9.$2(A.e_,1.4))
d3.ah(D.eCu,D.eCs,c9.$2(A.bz,2.4))
d3.ah(D.eCv,U.aOt,c9.$2(A.bz,2.4))
if(c7){d2=c8.$1(A.fC.j(0.5))
d2.y=A.I5
d3.O(D.eCa,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.h.F(d2+v/3,1)
d6.$5(d3,"\u2744",new B.m(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aq(d0.$4(-22,-26,44,50),d1.$3(D.aUI,A.aS,A.cF))
d3.O(A.cN,16,c8.$1(A.bz))
d3.O(A.cN,13,c8.$1(c7?A.aH.j(0.85):A.a_))
if(c7){d2=d3.c
J.bs(d2.save())
d2.translate(0,4)
d3.jy(0,d4.y*0.6)
for(v=0;v<3;++v){t=v*2.09
d3.ah(A.J,new B.m(Math.cos(t)*11,Math.sin(t)*11),c9.$2(A.ab,3))}d2.restore()
for(d2=d5*0.8,v=0;v<4;++v){u=A.h.F(d2+v*0.25,1)
d3.O(new B.m(Math.sin(v*2+d5)*9,4-u*12),1.6+u*2,c8.$1(A.c.j(0.8*(1-u))))}}d3.O(D.eFL,2.4,c8.$1(c7?A.bk:A.an))
d3.O(D.aP5,2.4,c8.$1(A.an))
return!0
case"blender":d3.aq(d0.$5(-14,14,28,12,4),c8.$1(A.cU))
d2=$.T().r
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
d3.af(d2,c8.$1(A.aC.j(0.7)))}d3.af(s,c9.$2(A.ab,1.6))
d2=d3.c
J.bs(d2.save())
d2.translate(0,10)
d3.jy(0,d4.y)
d3.ah(D.aaG,D.aOQ,c9.$2(A.bP,3))
d2.restore()
if(c7)for(d2=d5*9,t=d5*1.6,v=0;v<3;++v)d3.O(new B.m(Math.sin(d2+v*2)*9,-10-A.h.F(t+v*0.33,1)*12),2.4,c8.$1(A.f5))
return!0
case"drone":d3.aq(d0.$5(-10,-4,20,10,4),c8.$1(A.aM))
d3.O(A.hF,3,c8.$1(c7?A.bk:A.an))
r=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.c,t=-4+r,q=-6+r,p=0;p<2;++p){o=F.Ud[p]
d3.ah(new B.m(o*0.4,1),new B.m(o,t),c9.$2(A.bz,3))
J.bs(d2.save())
d2.translate(o,q)
d3.ah(D.eFC,D.eCz,c9.$2(A.c.j(c7?0.35:0.9),3))
if(c7)d3.c2(B.c_(A.J,6,24+Math.sin(d4.y*3)*4),c8.$1(A.c.j(0.25)))
d2.restore()}return!0
case"drill":w=new B.aI($.T().r,A.ak,c6,c6,B.a([],x.v))
w.E(new B.aZ(-24,-12))
w.E(new B.aq(10,-12))
w.E(new B.aq(10,2))
w.E(new B.aq(-2,2))
w.E(new B.aq(-6,22))
w.E(new B.aq(-16,22))
w.E(new B.aq(-14,2))
w.E(new B.aq(-24,2))
w.E(new B.bz())
d3.af(w,d1.$3(D.frU,A.aQ,A.de))
d3.aE(D.fr_,c8.$1(A.d0))
d2=d3.c
J.bs(d2.save())
d2.translate(18,-5)
d3.jy(0,d4.y*2)
d3.ah(A.J,D.eCG,c9.$2(A.bP,2.4))
d3.ah(A.aaB,D.eCF,c9.$2(A.i0,1))
d2.restore()
if(c7)for(d2=d5*3,t=d5*20,v=0;v<4;++v){u=A.h.F(d2+v*0.25,1)
d3.O(new B.m(34+u*6,-5+Math.sin(v*3+t)*6*u),1.4,c8.$1(A.eI.j(1-u)))}return!0
case"torch":if(c7){v=A.h.D(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new B.aI($.T().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(16,-6))
d2.E(new B.aq(52,-26))
d2.E(new B.aq(52,18))
d2.E(new B.aq(16,4))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.bO.j(0.35*v)))}d3.aq(d0.$5(-26,-6,30,12,3),d1.$3(D.fs_,A.bl,A.cx))
n=new B.aI($.T().r,A.ak,c6,c6,B.a([],x.v))
n.E(new B.aZ(4,-6))
n.E(new B.aq(18,-12))
n.E(new B.aq(18,12))
n.E(new B.aq(4,6))
n.E(new B.bz())
d3.af(n,c8.$1(A.cU))
d3.O(D.eCL,7,c8.$1(c7?A.c:A.d0))
return!0
case"neon":d3.aq(d0.$5(-30,-14,60,28,6),c8.$1(M.ni))
if(c7)m=d4.ax>0.5||A.n.F(A.h.bd(d5*17),3)!==0
else m=!1
l=m?A.c5:D.bvU
if(m){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.c5.j(0.35))
t.y=A.nn
d3.aq(d2,t)}d3.aq(d0.$5(-27,-11,54,22,5),c9.$2(l,2.2))
d6.$5(d3,"OPEN",D.eFZ,l,17)
return!0
case"microwave":d3.aq(d0.$4(-30,-18,60,38),d1.$3(D.fs6,A.bP,A.bl))
d2=d0.$5(-26,-14,38,30,3)
d3.aq(d2,c8.$1(c7?A.bO.j(0.75):A.ax))
if(c7){d2=d3.c
J.bs(d2.save())
d2.translate(-7,8)
d3.jy(0,d4.y*0.5)
d3.c2(B.c_(A.J,7,22),c8.$1(A.de))
d2.restore()}d3.aq(d0.$5(15,-14,12,12,2),c8.$1(M.ni))
if(c7)d6.$5(d3,"0:"+A.a.aY(A.n.v(59-A.n.F(A.h.bd(d5),60)),2,"0"),D.eCM,A.bf,6.5)
d3.O(D.eD_,4,c8.$1(A.d0))
return!0
case"doorbell":d3.aq(d0.$5(-16,-26,32,52,8),c8.$1(A.bn))
d3.O(A.KC,10,c8.$1(c7?A.bu:A.bz))
d2=d3.c
J.bs(d2.save())
d2.translate(0,-8)
d3.jy(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.eGH,A.c,16)
d2.restore()
d3.O(A.kx,6,c8.$1(A.di))
d3.O(A.kx,6,c9.$2(A.c,1.6))
if(c7)for(d2=d5*14,v=1;v<=2;++v)d3.cR(B.bY(A.KC,14+v*6+A.h.F(d2,6)),-0.9,1.8,!1,c9.$2(A.bu.j(0.9-v*0.3),1.8))
return!0
case"camera":d3.ah(D.eFY,D.eGA,c9.$2(A.bz,4))
d2=d3.c
J.bs(d2.save())
d3.jy(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aq(d0.$5(-24,-14,46,22,5),d1.$3(D.frV,A.bP,A.an))
d3.O(D.aOx,8,c8.$1(A.ax))
d3.O(D.aOx,4.5,c8.$1(c7?A.aH:A.cx))
d3.O(D.eFW,2.2,c8.$1(c7&&A.n.F(A.h.bd(d5*1.6),2)===0?A.aC:A.kK))
d2.restore()
if(c7)d6.$5(d3,"REC",D.eG5,A.aC,9)
return!0
case"console":d3.aq(d0.$5(-28,-22,56,44,8),d1.$3(D.fs2,A.i2,A.fy))
d3.aq(d0.$5(-20,-17,40,22,3),c8.$1(A.dZ))
if(c7){d2=d5*2.3
d3.O(new B.m(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aE(new B.a4(-18,t,-15.6,t+8),c8.$1(A.bf))
d2=-9+Math.sin(d2-0.4)*6
d3.aE(new B.a4(15.6,d2,18,d2+8),c8.$1(A.c5))}d3.O(D.eFR,4,c8.$1(A.ba))
d3.O(D.eCH,2.4,c8.$1(A.aC))
d3.O(D.eCY,2.4,c8.$1(A.bk))
return!0
case"heartmon":d3.aq(d0.$5(-30,-22,60,44,6),c8.$1(A.ax))
d3.aq(d0.$5(-26,-18,52,28,3),c8.$1(A.dZ))
if(c7){d2=$.T()
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
d6.$5(d3,"72",D.eCI,A.hJ,11)
d2=d5*9
d6.$5(d3,"\u2665",D.eGa,A.hJ.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.O(D.eG0,3,c8.$1(c7?A.bk:A.bz))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aq(d2,c8.$1(A.cI.j(c7?0.5:0.3)))
d3.aq(d0.$5(-26,-20,52,40,4),c9.$2(A.ab,1.6))
d3.aE(D.frX,c8.$1(F.wS))
if(c7){d2=d5*1.1
t=Math.sin(d2)
q=d3.c
J.bs(q.save())
q.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.nT(0,-1,1)
d3.c2(B.c_(A.J,8,14),c8.$1(A.cX))
d2=new B.aI($.T().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-6,0))
d2.E(new B.aq(-12,-4))
d2.E(new B.aq(-12,4))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.c8))
d3.O(D.eDK,1.2,c8.$1(A.v))
q.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=A.h.F(d2+v*0.2,1)
d3.O(new B.m(-18+Math.sin(u*8+v)*2,13-u*30),1.4+A.n.F(v,2),c9.$2(A.ab,1))}}return!0
case"lighthouse":d2=$.T().r
t=x.v
g=new B.aI(d2,A.ak,c6,c6,B.a([],t))
g.E(new B.aZ(-9,22))
g.E(new B.aq(-5,-16))
g.E(new B.aq(5,-16))
g.E(new B.aq(9,22))
g.E(new B.bz())
d3.af(g,d1.$3(D.fsy,A.c,A.bC))
d3.aE(D.fsu,c8.$1(c7?A.eI:A.bz))
q=new B.aI(d2,A.ak,c6,c6,B.a([],t))
q.E(new B.aZ(-7,-22))
q.E(new B.aq(0,-29))
q.E(new B.aq(7,-22))
q.E(new B.bz())
d3.af(q,c8.$1(A.eA))
if(c7){f=Math.sin(d4.y*0.3)
d2=new B.aI(d2,A.ak,c6,c6,B.a([],t))
d2.E(new B.aZ(0,-19))
t=f*34
d2.E(new B.aq(t,-26))
d2.E(new B.aq(t,-12))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.eI.j(0.45)))
d2=c8.$1(A.eI.j(0.35))
d2.y=A.I5
d3.O(D.eCb,14,d2)}return!0
case"discoball":d3.ah(D.eCd,V.aOo,c9.$2(A.d0,1.4))
d3.O(A.J,16,d1.$3(D.frG,A.aS,A.an))
for(v=0;v<8;++v){d2=-12+v*3.4
d3.ah(new B.m(-16,d2),new B.m(16,d2),c9.$2(A.dJ,0.7))}for(v=0;v<5;++v){f=d4.y*0.5+v*1.26
d3.ah(new B.m(Math.cos(f)*16*0.3,Math.sin(f)*16*0.3),new B.m(Math.cos(f)*16,0),c9.$2(A.dJ,0.7))}if(c7)for(d2=d5*2,t=d5*9,v=0;v<10;++v){f=d2+v*0.63
e=22+A.n.F(v,3)*6
d3.O(new B.m(Math.cos(f)*e,Math.sin(f)*e*0.8),1.8,c8.$1(D.du2[A.n.F(v,4)].j(0.5+0.5*Math.sin(t+v))))}return!0
case"robot":d3.aq(d0.$5(-14,-4,28,24,5),d1.$3(D.frD,A.cF,A.an))
d3.aq(d0.$5(-12,-26,24,20,5),d1.$3(D.frv,A.bn,A.bQ))
d3.ah(H.aOq,D.eCf,c9.$2(A.bz,1.6))
d3.O(D.eCg,2.2,c8.$1(c7?A.aC:A.bz))
d=c7&&A.h.F(d5*0.8,1)>0.08
for(p=0;p<2;++p){o=F.a81[p]
if(c7)d2=d?A.be:A.ev
else d2=A.cx
d3.O(new B.m(o,-17),3.2,c8.$1(d2))}d2=d3.c
J.bs(d2.save())
d2.translate(14,0)
d3.jy(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.ah(A.J,D.aaw,c9.$2(A.bQ,4))
d2.restore()
d3.ah(D.eFJ,D.eG3,c9.$2(A.bQ,4))
d3.aE(D.fst,c8.$1(c7?A.be.j(0.7):A.aM))
return!0
case"toaster":a0=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a0*14,p=0;p<2;++p){t=d0.$5(D.aF8[p]+1,d2,10,14,2)
q=B.ap(A.bO,A.de,a0)
q.toString
d3.aq(t,c8.$1(q))}d3.aq(d0.$5(-24,-6,48,26,8),d1.$3(D.frW,A.bP,A.bl))
for(p=0;p<2;++p){o=D.aF8[p]
d2=d0.$5(o,-5,12,5,2)
d3.aq(d2,c8.$1(c7?A.fM:A.ax))
if(c7){d2=d0.$5(o,-5,12,5,2)
t=c8.$1(A.cX.j(0.5))
t.y=O.oZ
d3.aq(d2,t)}}d3.ah(D.eD7,D.eDs,c9.$2(A.ax,3))
return!0
case"ledstrip":d3.aq(d0.$5(-34,-4,68,10,4),c8.$1(A.cx))
for(d2=d5*90,v=0;v<9;++v){a1=A.h.F(d2+v*40,360)
l=c7?new Aw.pH(1,a1,0.8,1).jl():A.cU
if(c7){t=c8.$1(l.j(0.45))
t.y=O.oZ
d3.O(new B.m(-30+v*7.5,1),7,t)}d3.O(new B.m(-30+v*7.5,1),2.6,c8.$1(l))}d3.aq(d0.$5(-40,-2,6,6,1),c8.$1(A.d0))
return!0
case"pump":d3.aq(d0.$5(-16,-2,32,22,6),d1.$3(D.frM,A.cI,A.GY))
d3.O(D.eGd,8,c8.$1(A.tl))
d2=d3.c
J.bs(d2.save())
d2.translate(-2,9)
d3.jy(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
d3.ah(A.J,new B.m(Math.cos(t)*7,Math.sin(t)*7),c9.$2(A.fC,2.4))}d2.restore()
d2=new B.aI($.T().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(16,6))
d2.E(new B.aq(26,6))
d2.E(new B.aq(26,-20))
d2.E(new B.aq(10,-20))
d3.af(d2,c9.$2(A.bQ,4))
if(c7){for(d2=d5*0.9,v=0;v<5;++v)d3.O(new B.m(26,6-A.h.F(d2+v*0.2,1)*26),2.2,c8.$1(A.hm))
d3.O(D.eEo,3.2,c8.$1(A.hm.j(0.7)))}return!0
case"hairdryer":d2=d3.c
J.bs(d2.save())
d3.jy(0,-0.15)
d3.aq(d0.$5(-26,-14,40,22,10),d1.$3(D.frY,A.hZ,A.v1))
d3.aq(d0.$5(14,-10,12,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-10,6,12,22,4),c8.$1(A.cU))
d2.restore()
if(c7){for(d2=d5*3,v=0;v<4;++v){u=A.h.F(d2+v*0.25,1)
t=u*18
q=-10+v*5
d3.ah(new B.m(24+t,q),new B.m(32+t,q),c9.$2(A.c.j(1-u),1.8))}d2=c8.$1(A.cX.j(0.4))
d2.y=O.oZ
d3.O(D.eCZ,8,d2)}return!0
case"headphones":d3.cR(B.c_(A.dP,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bz,4))
for(d2=d5*12,p=0;p<2;++p){o=F.Uc[p]
t=o-7
d3.aq(d0.$5(t,0,14,20,6),d1.$3(new B.a4(t,0,t+14,20),A.bj,A.nb))
if(c7)for(t=o<0,v=1;v<=2;++v){q=B.bY(new B.m(o,10),10+v*5+A.h.F(d2,5))
h=t?2.2:-0.9
d3.cR(q,h,1.6,!1,c9.$2(A.eJ.j(0.9-v*0.3),1.6))}}if(c7)d6.$5(d3,"\u266a",new B.m(-4,-8-A.h.F(d5*14,8)),A.l3,12)
return!0
case"smartwatch":d3.aq(d0.$5(-8,-30,16,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-8,14,16,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-14,-17,28,32,8),d1.$3(D.frA,A.d0,A.cU))
d3.aq(d0.$5(-11,-14,22,26,6),c8.$1(A.dZ))
if(c7){a2=new B.W(Date.now(),0,!1)
d6.$5(d3,A.a.aY(A.n.v(B.cX(a2)),2,"0")+":"+A.a.aY(A.n.v(B.fx(a2)),2,"0"),D.eCm,A.bf,9.5)
j=(Math.sin(d5*9)+1)/2
d2=B.ap(A.GG,A.hJ,j)
d2.toString
d6.$5(d3,"\u2665",new B.m(-8,1),d2,8+j*2)
d6.$5(d3,""+(70+A.n.F(A.h.bd(d5*2),6)),A.dP,A.c,7)}return!0
case"tablet":d3.aq(d0.$5(-30,-22,60,44,6),c8.$1(M.ni))
d3.aq(d0.$5(-30,-22,60,44,6),c9.$2(A.bQ,1.6))
a3=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nk(a3),$.mZ(),!0)
d2.translate(-27,-19)
K.MH(d3,D.fyY,d5,!1,c6,c6)
d2.restore()}else d3.aq(a3,c8.$1(D.wY))
return!0
case"buck":a4=d0.$5(-26,-22,52,42,5)
d3.aq(a4,d1.$3(new B.a4(a4.a,a4.b,a4.c,a4.d),A.dU,A.dl))
d3.aq(a4,c9.$2(A.aT,1.2))
d3.O(D.aOZ,9,c8.$1(A.ax))
d3.O(D.aOZ,6,c9.$2(A.de,2))
d3.aq(d0.$5(4,-2,14,10,2),c8.$1(A.ax))
d3.aq(d0.$5(-22,-19,44,12,2),c8.$1(A.dZ))
d2=A.h.a1(d4.db,1)
t=A.h.a1(c7?d4.dx:d4.e,1)
q=c7?A.bf:A.an
d6.$5(d3,d2+"\u2192"+t+"V",D.eEz,q,8.2)
d3.O(D.eCQ,2.4,c8.$1(c7?A.bk:A.aM))
d6.$5(d3,"IN",D.eG4,A.ab,6)
d6.$5(d3,"OUT",D.eEe,A.ab,6)
return!0
case"regulator":a5=c7?A.h.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=B.ap(A.bQ,A.aC,a5)
t.toString
d3.aq(d2,c8.$1(t))
d3.O(H.aau,3,c8.$1(A.aM))
d3.aq(d0.$5(-12,-4,24,18,3),d1.$3(D.frw,A.cU,A.ip))
d6.$5(d3,"7805",D.aaG,A.ab,8)
for(p=0;p<3;++p){d2=D.dB5[p]-1
d3.aE(new B.a4(d2,14,d2+2,22),c8.$1(A.dV))}if(a5>0.2)for(d2=d5*0.9,v=0;v<3;++v){u=A.h.F(d2+v*0.33,1)
d3.O(new B.m(-6+v*6,-28-u*12),2+u*2,c8.$1(A.c.j(0.5*(1-u))))}d6.$5(d3,"5V",D.eGD,A.bq,9)
return!0
case"diode":d3.ah(D.aP3,D.aOK,c9.$2(A.dV,2.4))
d3.aq(d0.$5(-14,-7,28,14,6),c8.$1(A.as.j(0.85)))
d3.aE(D.frd,c8.$1(A.bq))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.eI.j(0.4))
t.y=A.ld
d3.aq(d2,t)}d2=new B.aI($.T().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-8,-4))
d2.E(new B.aq(-8,4))
d2.E(new B.aq(-1,0))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.ba))
d6.$5(d3,"one way",D.eFU,A.aF,8)
return!0
case"ldr":d3.ah(D.aP3,D.aaG,c9.$2(A.dV,2.4))
d3.ah(D.aOQ,D.aOK,c9.$2(A.dV,2.4))
d3.O(A.J,12,c8.$1(A.de))
d3.O(A.J,12,c9.$2(A.tr,1.6))
d2=$.T()
t=B.a([],x.v)
a6=new B.aI(d2.r,A.ak,c6,c6,t)
a6.E(new B.aZ(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new B.aq(d2,-6+v*3)
t.push(d2)
q=a6.f
if(q!=null)d2.aj(q)
a6.ac()}d3.af(a6,c9.$2(A.bO,1.4))
d2=B.ap(A.bz,A.eI,d4.f)
d2.toString
d6.$5(d3,"\u2600",new B.m(-6,-26),d2,14)
d6.$5(d3,""+A.h.S(20+980*(1-d4.f))+"\u03a9",D.eFK,A.ab,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":switch(d2){case"lgtv":t=A.ez
break
case"sonytv":t=A.tb
break
case"appletv":t=A.dV
break
default:t=F.Cp
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
h.clipRRect(B.nk(a3),$.mZ(),!0)
h.translate(t,q)
K.h7R(d3,new B.av(a3.c-t,a3.d-q),d4.at,d5,d4.ax,-1,c6,c6)
h.restore()
d3.O(D.eDv,1.6,c8.$1(A.bf))}else{d3.aq(a3,c8.$1(D.wY))
h=new B.aI($.T().r,A.ak,c6,c6,B.a([],x.v))
h.E(new B.aZ(t,q))
h.E(new B.aq(t+24,q))
h.E(new B.aq(t,q+22))
h.E(new B.bz())
d3.af(h,c8.$1(A.c.j(0.05)))}if(d2==="appletv"){d2=d3.c
J.bs(d2.save())
d2.translate(0,19.6)
d3.bW(0,3.7)
d2.translate(-0.5,-0.55)
d3.af(K.hQp(),c8.$1(A.cz))
d2.restore()}else{switch(d2){case"lgtv":d2=F.aUi
break
case"sonytv":d2=F.aUa
break
default:d2=F.aUc
break}a8=B.h0(c6,A.cJ,c6,c6,c6,B.cW(c6,c6,c6,c6,c6,c6,c6,c6,c6,B.l(c6,c6,d2.b,c6,c6,c6,c6,c6,c6,c6,c6,3.6,c6,c6,A.C,c6,1,!0,c6,0.25,c6,c6,c6,c6,c6,c6),d2.a),A.a7,A.ca,c6,A.e4,A.cb)
a8.eJ()
d2=a8.b
t=d2.c
d2=d2.a.c
a8.a5(d3,new B.m(-t/2,19.6-d2.gb4(d2)/2))}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":a9=D.mN.h(0,d2)
b0=a9.b===D.Bp
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
t.clipRRect(B.nk(a3),$.mZ(),!0)
q=a3.a
h=a3.b
t.translate(q,h)
K.MH(d3,new B.av(a3.c-q,a3.d-h),d5,!1,c6,c6)
t.restore()}else d3.aq(a3,c8.$1(D.wY))
if(b0){t=a3.b
q=a3.d
d3.ah(new B.m(0,t),new B.m(0,q),c9.$2(A.v.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aq(d0.$5(-4,a3.b+1.2,8,2.6,1.3),c8.$1(A.v))
else{d2=b0?b1/2-7:0
d3.O(new B.m(d2,a3.b+3),1.3,c8.$1(A.v))}return!0
case"ereader":d3.aq(d0.$5(-17,-28,34,52,4),c8.$1(A.cU))
d3.aq(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bP))
if(c7){d6.$5(d3,"NGMY",D.eGK,A.ax,9)
for(v=0;v<9;++v){d2=-9+v*3.6
t=A.n.F(v,4)===3?14:22
d3.aE(new B.a4(-11,d2,-11+t,d2+1.4),c8.$1(A.bl))}d3.O(A.aas,1.6,c8.$1(A.ax))}return!0
case"laptop":d3.aq(d0.$5(-30,-28,60,42,4),d1.$3(D.fs7,A.cF,A.bl))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nk(b8),$.mZ(),!0)
t=b8.a
q=b8.b
d2.translate(t,q)
K.MH(d3,new B.av(b8.c-t,b8.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(b8,c8.$1(D.wY))
d2=new B.aI($.T().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-38,16))
d2.E(new B.aq(38,16))
d2.E(new B.aq(34,21))
d2.E(new B.aq(-34,21))
d2.E(new B.bz())
d3.af(d2,c8.$1(D.akF))
d3.aq(d0.$5(-7,16,14,2,1),c8.$1(A.bl))
return!0
case"imac":d3.aq(d0.$5(-32,-28,64,46,5),d1.$3(D.fsb,A.cm,A.cF))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nk(b9),$.mZ(),!0)
t=b9.a
q=b9.b
d2.translate(t,q)
K.MH(d3,new B.av(b9.c-t,b9.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(b9,c8.$1(D.wY))
d3.O(D.eBZ,2,c8.$1(A.bQ))
d2=new B.aI($.T().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-6,18))
d2.E(new B.aq(6,18))
d2.E(new B.aq(10,26))
d2.E(new B.aq(-10,26))
d2.E(new B.bz())
d3.af(d2,c8.$1(D.akF))
return!0
case"monitor":d3.aq(d0.$5(-34,-28,68,40,3),c8.$1(A.ez))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nk(c0),$.mZ(),!0)
t=c0.a
q=c0.b
d2.translate(t,q)
K.MH(d3,new B.av(c0.c-t,c0.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(c0,c8.$1(D.wY))
d3.aE(D.fsi,c8.$1(A.bl))
d3.aq(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.d0))
return!0
case"projector":if(c7){d2=new B.aI($.T().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(14,4))
d2.E(new B.aq(-32,-42))
d2.E(new B.aq(34,-42))
d2.E(new B.bz())
d3.af(d2,c8.$1(A.eI.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nk(c1),$.mZ(),!0)
t=c1.a
q=c1.b
d2.translate(t,q)
K.MH(d3,new B.av(c1.c-t,c1.d-q),d5,!1,c6,c6)
d2.restore()}d3.aq(d0.$5(-26,-4,52,24,6),d1.$3(D.frZ,A.hX,A.d0))
d3.O(D.aOv,7,c8.$1(A.ax))
d3.O(D.aOv,4,c8.$1(c7?A.eI:A.cx))
for(v=0;v<4;++v){d2=-20+v*4
d3.ah(new B.m(d2,2),new B.m(d2,14),c9.$2(A.dJ,1))}return!0
case"carscreen":d3.aq(d0.$5(-34,-10,68,32,12),c8.$1(A.ax))
c2=d0.$5(-30,-20,60,28,8)
d3.aq(c2,c8.$1(M.ni))
d3.aq(c2,c9.$2(A.bz,1.2))
if(c7){c3=new B.aI($.T().r,A.ak,c6,c6,B.a([],x.v))
c3.E(new B.aZ(-26,4))
c3.E(new B.cm(-10,-14+Math.sin(d5)*3,6,-6))
c3.E(new B.aq(22,-16))
d3.af(c3,c9.$2(A.aH,2.2))
d2=A.h.F(d5*6,48)
d3.O(new B.m(-26+d2,4-d2*0.1),2.4,c8.$1(A.bf))
d6.$5(d3,""+(88+A.n.F(A.h.bd(d5*2),5)),H.aOP,A.c,10)
d6.$5(d3,"km/h",D.eEm,A.aF,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aq(c4,d1.$3(new B.a4(c4.a,c4.b,c4.c,c4.d),A.d0,A.cU))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nk(c5),$.mZ(),!0)
t=c5.a
q=c5.b
d2.translate(t,q)
K.MH(d3,new B.av(c5.c-t,c5.d-q),d5,!1,c6,c6)
d2.restore()
d2=c8.$1(A.bj.j(0.2))
d2.y=A.nn
d3.O(A.J,26,d2)}else d3.aq(c5,c8.$1(A.a_))
d3.ah(D.eGk,D.eGp,c9.$2(A.bl,4))
d3.ah(D.eDx,D.eDN,c9.$2(A.bl,4))
return!0}return!1},
h7B:function h7B(){},
h7D:function h7D(){},
h7E:function h7E(){},
h7C:function h7C(){},
hxs(d,e,f,g){return new C.aln(d,g,f,e)},
GU(d,e,f){return new C.bfv(d,e,f)},
aln:function aln(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
alo:function alo(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.fh$=k
_.hh$=l
_.bv$=m
_.ab$=n
_.c=_.a=null},
bMW:function bMW(d,e){this.a=d
this.b=e},
bMX:function bMX(d){this.a=d},
bMV:function bMV(d){this.a=d},
bMY:function bMY(){},
bMZ:function bMZ(d){this.a=d},
bN_:function bN_(d,e,f){this.a=d
this.b=e
this.c=f},
bMU:function bMU(d,e){this.a=d
this.b=e},
bMR:function bMR(d,e){this.a=d
this.b=e},
bMS:function bMS(d,e,f){this.a=d
this.b=e
this.c=f},
bML:function bML(d,e){this.a=d
this.b=e},
bMM:function bMM(){},
bMT:function bMT(d,e,f){this.a=d
this.b=e
this.c=f},
bMQ:function bMQ(d,e){this.a=d
this.b=e},
bMN:function bMN(d,e){this.a=d
this.b=e},
bMO:function bMO(d,e){this.a=d
this.b=e},
bMP:function bMP(d){this.a=d},
bNf:function bNf(d){this.a=d},
bNg:function bNg(){},
bMl:function bMl(){},
bNh:function bNh(d,e){this.a=d
this.b=e},
bNe:function bNe(d,e){this.a=d
this.b=e},
bN9:function bN9(d){this.a=d},
bN6:function bN6(d,e,f){this.a=d
this.b=e
this.c=f},
bN7:function bN7(d,e){this.a=d
this.b=e},
bNa:function bNa(d){this.a=d},
bN4:function bN4(d,e){this.a=d
this.b=e},
bN5:function bN5(d,e){this.a=d
this.b=e},
bN8:function bN8(d){this.a=d},
bNb:function bNb(d){this.a=d},
bN1:function bN1(d,e){this.a=d
this.b=e},
bN2:function bN2(d,e){this.a=d
this.b=e},
bN3:function bN3(d,e){this.a=d
this.b=e},
bNc:function bNc(d){this.a=d},
bN0:function bN0(d){this.a=d},
bNd:function bNd(d){this.a=d},
bMm:function bMm(d,e){this.a=d
this.b=e},
bMI:function bMI(d,e){this.a=d
this.b=e},
bMK:function bMK(d,e){this.a=d
this.b=e},
bMJ:function bMJ(d,e){this.a=d
this.b=e},
bMH:function bMH(){},
bMt:function bMt(d){this.a=d},
bMs:function bMs(d){this.a=d},
bMu:function bMu(d,e){this.a=d
this.b=e},
bMv:function bMv(d){this.a=d},
bMr:function bMr(d){this.a=d},
bMz:function bMz(d,e,f){this.a=d
this.b=e
this.c=f},
bMq:function bMq(d,e){this.a=d
this.b=e},
bMA:function bMA(d,e){this.a=d
this.b=e},
bMB:function bMB(d,e){this.a=d
this.b=e},
bMC:function bMC(d,e){this.a=d
this.b=e},
bMD:function bMD(d,e,f){this.a=d
this.b=e
this.c=f},
bMp:function bMp(d,e){this.a=d
this.b=e},
bME:function bME(d,e,f){this.a=d
this.b=e
this.c=f},
bMo:function bMo(d,e){this.a=d
this.b=e},
bMF:function bMF(d,e,f){this.a=d
this.b=e
this.c=f},
bMn:function bMn(d,e){this.a=d
this.b=e},
bMG:function bMG(d){this.a=d},
bMw:function bMw(d){this.a=d},
bMx:function bMx(d){this.a=d},
bMy:function bMy(d){this.a=d},
bfv:function bfv(d,e,f){this.a=d
this.b=e
this.c=f},
fCG:function fCG(){},
fCH:function fCH(){},
fCI:function fCI(){},
fCt:function fCt(){},
fCJ:function fCJ(){},
fCs:function fCs(){},
fCK:function fCK(){},
fCx:function fCx(){},
fCr:function fCr(){},
fCy:function fCy(){},
fCq:function fCq(){},
fCz:function fCz(){},
fCp:function fCp(){},
fCA:function fCA(){},
fCn:function fCn(){},
fCo:function fCo(){},
fCB:function fCB(){},
fCl:function fCl(){},
fCm:function fCm(){},
fCC:function fCC(){},
fCk:function fCk(){},
X9:function X9(d){this.a=d},
aGT:function aGT(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
e6C:function e6C(d,e){this.a=d
this.b=e},
e6L:function e6L(d){this.a=d},
e6M:function e6M(){},
e6N:function e6N(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6O:function e6O(){},
e6B:function e6B(d){this.a=d},
e6A:function e6A(d,e,f){this.a=d
this.b=e
this.c=f},
e6z:function e6z(d,e){this.a=d
this.b=e},
e6x:function e6x(d){this.a=d},
e6y:function e6y(){},
e6K:function e6K(d){this.a=d},
e6J:function e6J(d){this.a=d},
e6H:function e6H(d,e){this.a=d
this.b=e},
e6F:function e6F(d){this.a=d},
e6G:function e6G(){},
e6I:function e6I(d,e,f){this.a=d
this.b=e
this.c=f},
e6D:function e6D(d,e){this.a=d
this.b=e},
e6E:function e6E(){},
e6Q:function e6Q(d){this.a=d},
e6R:function e6R(d,e){this.a=d
this.b=e},
e6P:function e6P(){},
e6S:function e6S(d,e){this.a=d
this.b=e},
e6T:function e6T(d){this.a=d},
e6U:function e6U(d){this.a=d},
aAL:function aAL(d,e){this.c=d
this.a=e},
bdz:function bdz(d,e){var _=this
_.d=$
_.bv$=d
_.ab$=e
_.c=_.a=null},
cPc:function cPc(d){this.a=d},
bdy:function bdy(d,e){this.b=d
this.a=e},
cPb:function cPb(d){this.a=d},
aB5:function aB5(){},
aB6:function aB6(){},
aNz:function aNz(){},
bCu:function bCu(){},
iGP(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bY(A.wa,23)
$.T()
b8=B.L()
b8.r=A.ax.gp(0)
b9.O(A.wa,25,b8)
b8=B.L()
b8.san(D.ePy.az(0,v))
b9.O(A.wa,23,b8)
for(u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
b8=Math.cos(t)
s=Math.sin(t)
r=Math.cos(t)
q=Math.sin(t)
p=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p.r=A.bq.gp(0)
p.c=A.n.F(u,5)===0?1.8:1
b9.ah(new B.m(b8*17,s*17-2),new B.m(r*21,q*21-2),p)}o=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.h.D(o/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=B.L()
r.r=A.bC.gp(0)
r.c=2
r.d=A.bG
b9.ah(A.wa,new B.m(b8*18,s*18-2),r)
r=B.L()
r.r=A.bq.gp(0)
b9.O(A.wa,3,r)
c2.$5(b9,w?"V":"A",D.eGs,A.bq,12)
c2.$5(b9,w?A.h.a1(o,1)+" V":""+A.h.S(o*1000)+" mA",D.eFO,A.ax,9.5)
return!0
case"fan":b8=B.bx(D.frs,A.hs)
$.T()
s=B.L()
s.r=A.bz.gp(0)
b9.aq(b8,s)
s=B.L()
s.r=A.an.gp(0)
b9.aE(D.fsj,s)
s=B.L()
s.r=A.a_.j(0.6).gp(0)
b9.O(H.wb,22,s)
for(b8=b9.c,u=0;u<4;++u){J.bs(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.c_(A.aOn,18,10)
r=new B.ar(A.U,A.R,A.X,A.Y,A.W)
r.r=A.hm.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
b9.c2(s,r)
b8.restore()}b8=B.L()
b8.r=A.bt.gp(0)
b9.O(H.wb,4,b8)
b8=B.L()
b8.b=A.ad
b8.c=2
b8.r=A.cF.gp(0)
b9.O(H.wb,22,b8)
b8=B.L()
b8.b=A.ad
b8.c=0.8
b8.r=A.jW.gp(0)
b9.O(H.wb,14,b8)
return!0
case"speaker":n=B.bx(D.aUI,A.qr)
$.T()
b8=B.L()
b8.san(D.avL.az(0,new B.a4(n.a,n.b,n.c,n.d)))
b9.aq(n,b8)
m=b7?Math.sin(c1*40)*1.6:0
b8=B.L()
b8.san(D.ePV.az(0,B.bY(A.cy,15)))
b9.O(A.cy,14+m,b8)
b8=B.L()
b8.r=A.d0.gp(0)
b9.O(A.cy,5,b8)
b8=B.L()
b8.r=A.bl.gp(0)
b9.O(H.aat,5+m*0.4,b8)
if(b7)for(b8=c1*18,u=1;u<=3;++u){s=B.bY(D.eD6,6+u*6+A.h.F(b8,6))
r=new B.ar(A.U,A.R,A.X,A.Y,A.W)
r.b=A.ad
r.c=1.8
r.r=A.c5.j(0.9-u*0.2).gp(0)
b9.cR(s,-0.8,1.6,!1,r)}return!0
case"clock":l=B.bx(D.fsa,A.qr)
$.T()
b8=B.L()
b8.san(D.cdD.az(0,new B.a4(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
b8=B.bx(D.aUK,A.jL)
s=B.L()
s.r=A.ip.gp(0)
b9.aq(b8,s)
if(b7){k=new B.W(Date.now(),0,!1)
j=B.Ge(k)<500?":":" "
i=A.a.aY(A.n.v(B.cX(k)),2,"0")
h=A.a.aY(A.n.v(B.fx(k)),2,"0")
b8=B.L()
b8.r=A.bf.j(0.12).gp(0)
b9.aE(D.aUK,b8)
c2.$5(b9,i+j+h,D.eG8,A.bf,21)}b8=B.L()
b8.r=A.cF.gp(0)
b9.O(D.eG6,2.4,b8)
b8=B.L()
b8.r=A.cF.gp(0)
b9.O(D.eDb,2.4,b8)
return!0
case"calculator":l=B.bx(D.frR,A.iE)
$.T()
b8=B.L()
b8.san(D.avO.az(0,new B.a4(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
b8=B.bx(D.frK,A.hG)
s=B.L()
s.r=(b7?A.a0g:D.bww).gp(0)
b9.aq(b8,s)
if(b7)c2.$5(b9,"3.14159",D.eFN,A.ZV,10.5)
for(g=0;g<4;++g)for(b8=-6+g*8,s=b8+6,f=0;f<4;++f){r=-15+f*8
r=B.bx(new B.a4(r,b8,r+6,s),A.Fr)
$.T()
q=new B.ar(A.U,A.R,A.X,A.Y,A.W)
q.r=(f===3?A.c8:A.bP).gp(0)
b9.aq(r,q)}return!0
case"phone":l=B.bx(D.frF,A.iE)
$.T()
b8=B.L()
b8.r=M.ni.gp(0)
b9.aq(l,b8)
b8=B.L()
b8.b=A.ad
b8.c=1.9
b8.r=D.amF.gp(0)
b9.aq(l,b8)
e=B.bx(D.fru,A.hs)
if(b7){b8=B.L()
b8.san(D.cf_.az(0,new B.a4(e.a,e.b,e.c,e.d)))
b9.aq(e,b8)
b8=b9.c
J.bs(b8.save())
b8.clipRRect(B.nk(e),$.mZ(),!0)
b8.translate(-12,-25)
K.MH(b9,D.fyA,c1,!1,b6,b6)
b8.restore()
d=A.h.F(c1*0.12,1)
b8=B.bx(D.frr,A.hG)
s=B.L()
s.r=A.ba.gp(0)
b9.aq(b8,s)
s=B.L()
s.r=A.bf.gp(0)
b9.aE(new B.a4(-10,14.5,-10+20*d,16.9),s)
c2.$5(b9,"\u26a1"+A.h.S(d*100)+"%",D.eEV,A.c,6)}else{b8=B.L()
b8.r=D.wY.gp(0)
b9.aq(e,b8)}b8=B.bx(D.fsz,D.eQ3)
s=B.L()
s.r=A.v.gp(0)
b9.aq(b8,s)
return!0
case"router":l=B.bx(D.fs9,A.pm)
$.T()
b8=B.L()
b8.san(D.cdV.az(0,new B.a4(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
for(a0=0;a0<2;++a0){a1=F.Uc[a0]
b8=a1<0?-4:4
s=new B.ar(A.U,A.R,A.X,A.Y,A.W)
s.r=A.cx.gp(0)
s.c=4
s.d=A.bG
b9.ah(new B.m(a1,-4),new B.m(a1+b8,-28),s)}for(u=0;u<4;++u){if(b7)a2=A.n.F(A.h.bd(c1*(3+u*1.3)),2)===0||u===0
else a2=!1
b8=new B.ar(A.U,A.R,A.X,A.Y,A.W)
b8.r=(a2?A.bk:A.aM).gp(0)
b9.O(new B.m(-15+u*10,11),2.6,b8)}if(b7)for(b8=c1*10,u=1;u<=3;++u){s=B.bY(H.wb,8+u*6+A.h.F(b8,6))
r=new B.ar(A.U,A.R,A.X,A.Y,A.W)
r.b=A.ad
r.c=1.8
r.r=A.fK.j(0.9-u*0.2).gp(0)
b9.cR(s,-2.3,1.5,!1,r)}return!0
case"siren":a3=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bx(D.frQ,A.hs)
s=$.T()
r=B.L()
r.r=A.cU.gp(0)
b9.aq(b8,r)
if(b7){b8=B.L()
b8.r=A.aC.j(0.5*a3).gp(0)
b8.y=A.Ds
b9.O(A.wa,34,b8)}a4=new B.aI(s.r,A.ak,b6,b6,B.a([],x.v))
a4.E(new B.aZ(-16,12))
a4.E(new B.aq(-16,-2))
a4.E(new B.cm(0,-30,16,-2))
a4.E(new B.aq(16,12))
a4.E(new B.bz())
b8=B.L()
b8.r=B.ap(A.eA,D.bmQ,a3).gp(0)
b9.af(a4,b8)
b8=B.L()
b8.b=A.ad
b8.c=1.4
b8.r=A.bX.gp(0)
b9.af(a4,b8)
if(b7){b8=b9.c
J.bs(b8.save())
b8.translate(0,-2)
b9.jy(0,c1*7)
s=B.L()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.ah(A.J,H.aat,s)
b8.restore()}return!0
case"toycar":a5=b7?Math.sin(c1*30)*0.8:0
b8=b9.c
J.bs(b8.save())
b8.translate(0,a5)
s=$.T().r
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
q.san(D.cbT.az(0,D.fs1))
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
for(a0=0;a0<2;++a0){a1=F.aF9[a0]
s=new B.ar(A.U,A.R,A.X,A.Y,A.W)
s.r=A.ax.gp(0)
b9.O(new B.m(a1,10),7.5,s)
J.bs(b8.save())
b8.translate(a1,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.ar(A.U,A.R,A.X,A.Y,A.W)
q.r=A.bP.gp(0)
q.c=1.6
b9.ah(A.J,new B.m(r*5.5,s*5.5),q)}b8.restore()}b8.restore()
if(b7)for(b8=c1*40,u=0;u<3;++u){s=A.h.F(b8+u*8,14)
r=-4+u*5
q=new B.ar(A.U,A.R,A.X,A.Y,A.W)
q.r=A.aF.gp(0)
q.c=1.6
b9.ah(new B.m(-34-s,r),new B.m(-42-s,r),q)}return!0
case"kettle":b8=$.T().r
s=x.v
l=new B.aI(b8,A.ak,b6,b6,B.a([],s))
l.E(new B.aZ(-18,20))
l.E(new B.aq(-14,-12))
l.E(new B.cm(0,-20,14,-12))
l.E(new B.aq(18,20))
l.E(new B.bz())
r=B.L()
r.san(D.cd1.az(0,D.frP))
b9.af(l,r)
r=new B.aI(b8,A.ak,b6,b6,B.a([],s))
r.E(new B.aZ(14,-10))
r.E(new B.aq(30,-22))
r.E(new B.aq(32,-18))
r.E(new B.aq(16,-4))
r.E(new B.bz())
q=B.L()
q.r=A.dV.gp(0)
b9.af(r,q)
s=new B.aI(b8,A.ak,b6,b6,B.a([],s))
s.E(new B.aZ(-14,-8))
s.E(new B.cm(-34,-6,-18,12))
b8=B.L()
b8.b=A.ad
b8.c=5
b8.r=A.ax.gp(0)
b9.af(s,b8)
b8=B.L()
if(b7){s=B.ap(A.cX,A.v9,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.cU
b8.r=s.gp(0)
b9.aE(D.frO,b8)
if(b7){b8=B.L()
b8.r=A.cX.j(0.3).gp(0)
b8.y=A.nn
b9.O(A.aaq,24,b8)
for(b8=c1*0.9,u=0;u<4;++u){a6=A.h.F(b8+u*0.25,1)
s=Math.sin(a6*9+u)
r=new B.ar(A.U,A.R,A.X,A.Y,A.W)
r.r=A.c.j(0.6*(1-a6)).gp(0)
b9.O(new B.m(30+s*4,-26-a6*26),3+a6*5,r)}}b8=B.L()
b8.r=A.ax.gp(0)
b9.O(D.eC9,3,b8)
return!0
case"lamp":if(b7){u=A.h.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aI($.T().r,A.ak,b6,b6,B.a([],x.v))
b8.E(new B.aZ(-10,-14))
b8.E(new B.aq(-30,24))
b8.E(new B.aq(10,24))
b8.E(new B.aq(8,-14))
b8.E(new B.bz())
s=B.L()
s.r=A.eI.j(0.28*u).gp(0)
b9.af(b8,s)
s=B.L()
s.r=A.eI.j(0.5*u).gp(0)
s.y=Z.PL
b9.O(D.eGe,24,s)}b8=B.bx(D.fss,A.hs)
s=$.T()
r=B.L()
r.r=A.cU.gp(0)
b9.aq(b8,r)
r=B.L()
r.r=A.d0.gp(0)
r.c=3
r.d=A.bG
b9.ah(D.eCp,D.aOy,r)
r=B.L()
r.r=A.d0.gp(0)
r.c=3
r.d=A.bG
b9.ah(D.aOy,D.eGf,r)
a7=new B.aI(s.r,A.ak,b6,b6,B.a([],x.v))
a7.E(new B.aZ(-14,-16))
a7.E(new B.aq(6,-26))
a7.E(new B.aq(10,-12))
a7.E(new B.aq(-10,-6))
a7.E(new B.bz())
s=B.L()
s.r=(b7?A.aQ:A.kd).gp(0)
b9.af(a7,s)
b8=B.L()
b8.r=(b7?A.c:A.bl).gp(0)
b9.O(D.eGi,4,b8)
return!0
case"lights":b8=$.T().r
s=x.v
a8=new B.aI(b8,A.ak,b6,b6,B.a([],s))
a8.E(new B.aZ(-34,-6))
a8.E(new B.cm(0,22,34,-6))
r=B.L()
r.b=A.ad
r.c=2
r.r=A.hY.gp(0)
b9.af(a8,r)
for(r=c1*2.4,u=0;u<5;++u){a9=(u+0.5)/5
q=-34+68*a9
p=-6+4*a9*(1-a9)*4*4.2/1*0.75+0
b0=b7&&A.h.F(r+u*0.7,1.8)<1.1
if(b0){b1=new B.ar(A.U,A.R,A.X,A.Y,A.W)
b1.r=D.a6Z[u].j(0.6).gp(0)
b1.y=A.I5
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
q=new B.cm(q,p+17,q-5,b3)
b1.push(q)
p=b2.f
if(p!=null)q.aj(p)
b2.ac()
q=new B.bz()
b1.push(q)
p=b2.f
if(p!=null)q.aj(p)
b2.ac()
q=new B.ar(A.U,A.R,A.X,A.Y,A.W)
if(b0)p=D.a6Z[u]
else{p=B.ap(D.a6Z[u],A.v,0.65)
p.toString}q.r=p.gp(0)
b9.af(b2,q)}return!0}return C.iGO(b9,c0,c1,c2)},
h6:function h6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hsq(d){var w=D.mN.h(0,d)
return(w==null?null:w.b)===D.Bn},
iI4(d,e,f){return B.a8(d,!1).c9(B.vH(null,!1,!0,!0,new C.hcM(e,f),A.eZ,null,A.pU,new C.hcN(),x.H))},
KF:function KF(d,e){this.a=d
this.b=e},
mr:function mr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hcM:function hcM(d,e){this.a=d
this.b=e},
hcN:function hcN(){},
WT:function WT(d,e,f){this.c=d
this.d=e
this.a=f},
aGJ:function aGJ(d,e,f){var _=this
_.d=$
_.e=null
_.r=_.f=!1
_.w=-99
_.x=d
_.z=_.y=0
_.bv$=e
_.ab$=f
_.c=_.a=null},
e2y:function e2y(d,e){this.a=d
this.b=e},
e2z:function e2z(d,e,f){this.a=d
this.b=e
this.c=f},
e2J:function e2J(d,e,f){this.a=d
this.b=e
this.c=f},
e2x:function e2x(d,e){this.a=d
this.b=e},
e2w:function e2w(d,e){this.a=d
this.b=e},
e2K:function e2K(d,e){this.a=d
this.b=e},
e2L:function e2L(d){this.a=d},
e2q:function e2q(d,e){this.a=d
this.b=e},
e2p:function e2p(d,e){this.a=d
this.b=e},
e2o:function e2o(d){this.a=d},
e2H:function e2H(){},
e2D:function e2D(d){this.a=d},
e2E:function e2E(d){this.a=d},
e2F:function e2F(d){this.a=d},
e2G:function e2G(d){this.a=d},
e2M:function e2M(d){this.a=d},
e2C:function e2C(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2A:function e2A(){},
e2B:function e2B(d){this.a=d},
e2I:function e2I(d,e){this.a=d
this.b=e},
e2v:function e2v(d,e){this.a=d
this.b=e},
e2t:function e2t(d){this.a=d},
e2u:function e2u(d){this.a=d},
e2n:function e2n(d){this.a=d},
e2s:function e2s(d,e,f){this.a=d
this.b=e
this.c=f},
e2r:function e2r(d){this.a=d},
bAw:function bAw(d,e,f){this.b=d
this.c=e
this.a=f},
ah5:function ah5(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aPn:function aPn(){},
a38(d,e,f,g,h,i){return new C.bzi(d,e,f,g,h,i)},
bzi:function bzi(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fDa:function fDa(){},
fDb:function fDb(){},
fDc:function fDc(){},
fDd:function fDd(){},
fDe:function fDe(){},
fDf:function fDf(){},
fDg:function fDg(){},
fDh:function fDh(){},
aaF:function aaF(d){this.a=d},
cqg:function cqg(d){this.a=d},
cqh:function cqh(){},
cqf:function cqf(d,e){this.a=d
this.b=e},
cqe:function cqe(d){this.a=d},
Yy:function Yy(d){this.a=d},
aIs:function aIs(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.hg$=f
_.mk$=g
_.fh$=h
_.hh$=i
_.bv$=j
_.ab$=k
_.c=_.a=null},
f3h:function f3h(d){this.a=d},
f3d:function f3d(d){this.a=d},
f3c:function f3c(d,e){this.a=d
this.b=e},
f3f:function f3f(d,e){this.a=d
this.b=e},
f3e:function f3e(d,e){this.a=d
this.b=e},
f3g:function f3g(d){this.a=d},
bAI:function bAI(d,e,f){this.b=d
this.c=e
this.a=f},
Xh:function Xh(d){this.a=d},
box:function box(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.hg$=d
_.mk$=e
_.fh$=f
_.hh$=g
_.bv$=h
_.ab$=i
_.c=_.a=null},
eak:function eak(){},
eal:function eal(){},
eaf:function eaf(d,e){this.a=d
this.b=e},
eah:function eah(d,e){this.a=d
this.b=e},
eai:function eai(d){this.a=d},
eag:function eag(d){this.a=d},
eaj:function eaj(d){this.a=d},
bvl:function bvl(d,e,f){this.b=d
this.c=e
this.a=f},
Ws:function Ws(d){this.a=d},
bo6:function bo6(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.hg$=d
_.mk$=e
_.fh$=f
_.hh$=g
_.bv$=h
_.ab$=i
_.c=_.a=null},
dUL:function dUL(){},
dUM:function dUM(){},
dUG:function dUG(){},
dUJ:function dUJ(d,e){this.a=d
this.b=e},
dUI:function dUI(d,e){this.a=d
this.b=e},
dUK:function dUK(d){this.a=d},
dUH:function dUH(d){this.a=d},
aLY:function aLY(d,e,f){this.a=d
this.b=e
this.c=f},
X8:function X8(d){this.a=d},
boo:function boo(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
e66:function e66(d,e){this.a=d
this.b=e},
e67:function e67(d){this.a=d},
e65:function e65(d,e){this.a=d
this.b=e},
e68:function e68(d){this.a=d},
e64:function e64(d,e){this.a=d
this.b=e},
e69:function e69(d){this.a=d},
e63:function e63(d,e){this.a=d
this.b=e},
e6a:function e6a(d,e){this.a=d
this.b=e},
e62:function e62(d,e){this.a=d
this.b=e},
e6b:function e6b(d){this.a=d},
e61:function e61(d,e){this.a=d
this.b=e},
e6c:function e6c(d){this.a=d},
e60:function e60(d){this.a=d},
e6d:function e6d(d){this.a=d},
e6_:function e6_(d){this.a=d},
e6e:function e6e(d){this.a=d},
e6f:function e6f(d){this.a=d},
e5Z:function e5Z(d){this.a=d},
bqs:function bqs(d,e,f){this.b=d
this.c=e
this.a=f},
XV:function XV(d){this.a=d},
aHI:function aHI(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
eyg:function eyg(d,e){this.a=d
this.b=e},
eyh:function eyh(d,e,f){this.a=d
this.b=e
this.c=f},
eyf:function eyf(d,e,f){this.a=d
this.b=e
this.c=f},
eyi:function eyi(d){this.a=d},
eye:function eye(d){this.a=d},
eym:function eym(d){this.a=d},
eyl:function eyl(d,e){this.a=d
this.b=e},
eyk:function eyk(d,e){this.a=d
this.b=e},
eyn:function eyn(d,e){this.a=d
this.b=e},
eyj:function eyj(d,e){this.a=d
this.b=e},
eyo:function eyo(d){this.a=d},
Y5:function Y5(d){this.a=d},
aI5:function aI5(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eLo:function eLo(d){this.a=d},
eLp:function eLp(d){this.a=d},
eLm:function eLm(d,e){this.a=d
this.b=e},
eLn:function eLn(d){this.a=d},
eLl:function eLl(d){this.a=d},
eLq:function eLq(d){this.a=d},
eLr:function eLr(d){this.a=d},
eLs:function eLs(d){this.a=d},
eLt:function eLt(d,e){this.a=d
this.b=e},
Yp:function Yp(d){this.a=d},
bpG:function bpG(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eZD:function eZD(){},
eZM:function eZM(){},
eZI:function eZI(d){this.a=d},
eZH:function eZH(){},
eZJ:function eZJ(d,e){this.a=d
this.b=e},
eZG:function eZG(d,e){this.a=d
this.b=e},
eZK:function eZK(d){this.a=d},
eZF:function eZF(d,e){this.a=d
this.b=e},
eZL:function eZL(d){this.a=d},
eZE:function eZE(d){this.a=d},
XU:function XU(d){this.a=d},
bp9:function bp9(d,e,f,g,h,i,j,k){var _=this
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
_.fh$=h
_.hh$=i
_.bv$=j
_.ab$=k
_.c=_.a=null},
ewW:function ewW(){},
ewX:function ewX(){},
ewP:function ewP(d){this.a=d},
ewO:function ewO(d){this.a=d},
ewQ:function ewQ(d){this.a=d},
ewN:function ewN(d){this.a=d},
ewR:function ewR(d){this.a=d},
ewM:function ewM(d){this.a=d},
ewS:function ewS(d,e){this.a=d
this.b=e},
ewL:function ewL(d,e){this.a=d
this.b=e},
ewT:function ewT(d){this.a=d},
ewK:function ewK(d,e){this.a=d
this.b=e},
ewU:function ewU(d){this.a=d},
ewJ:function ewJ(d,e){this.a=d
this.b=e},
ewV:function ewV(d){this.a=d},
ewI:function ewI(d,e){this.a=d
this.b=e},
bhV:function bhV(d,e,f){this.c=d
this.d=e
this.a=f},
aP9:function aP9(){},
bCq:function bCq(){},
aPu:function aPu(){},
bCw:function bCw(){},
aPV:function aPV(){},
bCG:function bCG(){},
aQn:function aQn(){},
bCP:function bCP(){},
Kb(d,e,f,g){var w,v,u,t,s,r,q,p=$.av8
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.I)(e),++w)E.mP(d,e[w],f,g)
return}for(p=B.cJ(e,0,B.dx(4,"count",x.S),B.U(e).c),v=p.$ti,p=new B.bQ(p,p.gI(0),v.k("bQ<aj.E>")),u=x.H,v=v.k("aj.E"),t=0;p.B();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)E.mP(d,s,f,g)
else B.bM(new B.bh(1000*q),new C.cqc(d,s,f,g),u)}},
cny(d){return C.ibi(d)},
ibi(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$cny=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aB(),$async$cny)
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
return B.i($async$cny,v)},
b5n(d,e){return C.ibj(d,e)},
ibj(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b5n=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aB(),$async$b5n)
case 6:s=g
w=7
return B.b(s.aB("String","ngmy_play_progress_v1_"+d,A.V.au(e,null)),$async$b5n)
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
return B.i($async$b5n,v)},
cqc:function cqc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ixb(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.S(x.Y,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.B)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.I)(w),++q){p=w[q]
u.push(B.J(["k",p.b,"x",B.oQ(A.h.a1(p.c,4)),"y",B.oQ(A.h.a1(p.d,4)),"v",p.e,"l",B.oQ(A.h.a1(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.oQ(A.h.a1(p.as,3)),"ch",p.at,"vc",B.oQ(A.h.a1(p.z,3)),"s",B.oQ(A.h.a1(p.ch,2))],s,r))}w=B.a([],x.U)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.I)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.B(f,B.a3(f).k("ck.E"))
A.d.ff(l)
return A.V.au(B.J(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
iHd(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.V.aP(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a7(h)
A.d.a7(a6.b)
v=B.a([],x.fs)
g=x.R
f=g.a(J.t(w,"parts"))
f=J.aO(f==null?A.bN:f)
while(f.B()){u=f.gP(f)
t=i.a(u)
e=B.aV(J.t(t,"k"))
s=e==null?"":e
if(!$.qY().am(0,s)){J.bZ(v,null)
continue}d=s
a0=B.aK(J.t(t,"x"))
if(a0==null)a0=0.5
a1=B.aK(J.t(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.ui(a2,d,a0,a1)
a3.atS(a2,d,a0,a1)
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
d=B.kl(J.t(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.kl(J.t(t,"b"))
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
J.bZ(v,r)}i=g.a(J.t(w,"wires"))
i=J.aO(i==null?A.bN:i)
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
if(m!=null&&l!=null)a6.anN(m,A.h.M(B.dC(J.t(p,1))),l,A.h.M(B.dC(J.t(p,3))))}i=B.aK(J.t(w,"challenge"))
i=A.h.M(i==null?0:i)
k=B.aR(x.S)
h=g.a(J.t(w,"done"))
h=J.aO(h==null?A.bN:h)
while(h.B()){j=h.gP(h)
J.bZ(k,A.h.M(B.dC(j)))}return new B.btq(i,k)}catch(a4){return a5}},
fV1(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fV1=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.aB(),$async$fV1)
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
return B.i($async$fV1,v)},
bJr(d){return C.iIU(d)},
iIU(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bJr=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.aB(),$async$bJr)
case 7:w=6
return B.b(f.aB("String","ngmy_electronics_lab_v1",d),$async$bJr)
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
return B.i($async$bJr,v)},
h0Z(d,e,f){var w=0,v=B.j(x.I),u,t,s,r,q,p
var $async$h0Z=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(d.c===e&&d.d===f){u=d
w=1
break}$.T()
t=new B.p1(new B.oB())
s=B.v8(t,null)
r=B.L()
r.r=A.c7.gp(0)
s.aE(new B.a4(0,0,e,f),r)
s.bja(0,d,A.J,B.L())
q=t.n9()
w=3
return B.b(q.vW(e,f),$async$h0Z)
case 3:p=h
q.t()
d.t()
u=p
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h0Z,v)}},D,V,A2,As,K,F,M,A3,H,At,Au,Av,A4,Aw
J=c[1]
B=c[0]
A=c[2]
W=c[142]
A9=c[178]
A5=c[125]
N=c[90]
Aa=c[152]
A6=c[177]
Ab=c[183]
A7=c[182]
X=c[173]
P=c[46]
Y=c[169]
Ac=c[165]
O=c[176]
Ad=c[186]
Ae=c[191]
Af=c[138]
Ag=c[167]
Ah=c[106]
Ai=c[184]
Aj=c[92]
Ak=c[188]
Al=c[81]
Z=c[171]
U=c[89]
Am=c[93]
An=c[146]
Q=c[160]
A_=c[156]
R=c[190]
S=c[161]
A0=c[175]
T=c[174]
A1=c[187]
Ao=c[136]
E=c[34]
I=c[3]
G=c[45]
L=c[140]
Ap=c[134]
Aq=c[153]
Ar=c[180]
A8=c[189]
C=a.updateHolder(c[23],C)
D=c[170]
V=c[185]
A2=c[179]
As=c[31]
K=c[33]
F=c[132]
M=c[130]
A3=c[107]
H=c[172]
At=c[104]
Au=c[120]
Av=c[71]
A4=c[181]
Aw=c[62]
C.amE.prototype={}
C.XE.prototype={
R(){return new C.boY(B.S(x.N,x.i),new B.au(A.ay,$.ay()),B.a([],x.X),B.a([],x.eZ),B.ms(0,null,null))}}
C.boY.prototype={
gY6(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
t(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
this.ch.t()
this.a3()},
QP(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$QP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aS.bl$.d.c
if(s!=null)s.j5()
p.bM(0,A.ck)
t.l(new C.epY(t))
t.a.toString
p=t.gY6()
w=3
return B.b(C.bEK(C.iku(q,C.iwX(p),o,t.ay)),$async$QP)
case 3:s=e
r=s==null?null:J.j9(s)
if(r==null||r.length===0||A.a.Y(r,"{"))r=C.iyt(q,p,o)
if(t.c==null){w=1
break}t.l(new C.epZ(t,o,r))
$.aS.U$.push(new C.eq_(t))
case 1:return B.h(u,v)}})
return B.i($async$QP,v)},
a_c(d){return this.c6n(d)},
b_G(){return this.a_c(null)},
c6n(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$a_c=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aS.bl$.d.c
if(s!=null)s.j5()
t.f.sb1(0,o)
t.l(new C.eqa(t))
G.dI(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bEK(C.irY(o)),$async$a_c)
case 3:r=n.a=m.iGT(f)
p.b=""
if(r!=null&&!C.iwY(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.iyu(o)
q=B.ag(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.amE(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.l(new C.eqb(p,t))
t.cci(p.a)
case 1:return B.h(u,v)}})
return B.i($async$a_c,v)},
cci(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
A.d.a7(w)
w=++m.as
v=m.gY6()
A.d.a7(v.a)
A.d.a7(v.b)
m.e.a7(0)
m.l(new C.eq6(m))
t=d.d
s=B.S(x.N,x.Y)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.eq4(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.eq7(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.I)(r),++u){p.$2(o,new C.eq8(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.eq9(m,d))},
C(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bj.j(0.1),g=B.n(16),f=B.K(A.bj.j(0.35),A.r,1)
if(m.x)j=B.A(B.a([D.fA7,A.bc,B.E(B.c(m.Q,l,l,l,l,l,l,A.Bz,l,l,l),1)],x.p),A.l,l,A.e,A.i,0,l,l)
else if(k==null)j=D.h0H
else{w=B.E(B.c(k.a,l,l,l,l,l,l,A.LY,l,l,l),1)
v=x.p
w=B.a([B.A(B.a([w,B.c(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fLj,l,l,l)],v),A.l,l,A.e,A.i,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.C(A.rg,B.c(u,l,l,l,l,l,l,D.fOc,l,l,l),l))
w.push(A.cR)
w.push(B.c(k.b,l,l,l,l,l,l,A_.FQ,l,l,l))
u=k.e
if(u.length!==0){t=A.aQ.j(0.12)
s=B.n(10)
w.push(B.q(l,B.c(u,l,l,l,l,l,l,D.fQV,l,l,l),A.f,l,l,new B.p(t,l,l,s,l,l,A.m),l,l,l,A.hz,A.ct,l,l,l))}w.push(A.aj)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
t=B.c(t,l,l,l,l,l,l,A.mh,l,l,l)
q=u[r]
s=s?A.c:A.aF
w.push(new B.C(A.HJ,new B.c1(A.aK,A.e,A.i,A.B,l,A.p,l,0,B.a([t,A.b7,new B.bu(1,A.b8,B.c(q,l,l,l,l,l,l,new B.G(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.I)(j),++p){o=j[p]
t=A.bj.j(0.3)
s=new B.aQ(12,12)
s=B.q(l,B.c(o.a,l,l,l,l,l,l,A.X4,l,l,l),A.f,l,l,new B.p(t,l,l,new B.bc(s,s,s,s),l,l,A.m),l,l,l,l,A.h0,l,l,l)
t=A.c.j(0.07)
q=new B.aQ(12,12)
A.d.u(w,B.a([A.N,new B.bK(A.a9,l,l,s,l),A.at,B.q(l,B.c(o.b,l,l,l,l,l,l,D.fWN,l,l,l),A.f,l,l,new B.p(t,l,l,new B.bc(q,q,q,q),l,l,A.m),l,l,l,l,A.bS,l,l,l)],v))}if(m.ax)w.push(D.eHM)
j=B.cc(B.w(w,A.B,l,A.e,A.i,0,A.p),A.t,m.ch,A.y,l,l,l,l,l,A.ah)}w=x.p
g=B.w(B.a([B.akO(B.q(l,j,A.f,l,new B.aY(0,1/0,0,i),new B.p(h,l,f,g,l,l,A.m),l,l,l,D.bGt,A.ep,l,l,1/0),A.b_,A.id),B.E(C.hxs(m.gY6(),l,l,m.e),1)],w),A.l,l,A.e,A.i,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new E.e5("Ask about it",i,new C.eqe(m),l,A.bj,l),new E.e5("Invent something new",!i,new C.eqf(m),l,A.bj,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dDI[p]
i.push(new E.e5(n,!1,new C.eqg(m,n),l,A.bj,l))}f.push(new E.fm(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.djZ[p]
i.push(new E.e5(r,!1,new C.eqh(m,r),l,A.bj,l))}f.push(new E.fm(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aN(l,A.M,!1,l,!0,A.t,l,B.aP(),m.f,l,l,l,l,l,2,B.bC(l,new B.b6(4,B.n(16),A.a1),l,A.f_,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kC,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.am,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.eqi(m,k),l,!1,l,l,!1,l,!0,l,A.ae,l,l,l,l,l,l,l,l,l,l,l,A.du,!0,A.a7,l,A.ao,l,A.WU,l,l),1)
h=m.at
v=h&&j?D.bWH:A.eh
j=h&&j?"Ask":"Invent"
f.push(B.A(B.a([i,A.aa,new E.fL(v,j,new C.eqj(m,k),A.bj,l)],w),A.l,l,A.e,A.i,0,l,l))
return E.m0(A.bj,A.fh,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.w(f,A.l,l,A.e,A.P,0,A.p))}}
C.Ho.prototype={}
C.vP.prototype={}
C.Y0.prototype={
R(){return new C.aHX(A.J,A.J,A.aA,B.aR(x.S),$,A.bH,0,B.a([],x.X),null,null)}}
C.aHX.prototype={
gb10(){var w,v,u,t=this,s=D.Jr[t.cx],r=D.Uf[t.cy],q=D.Es[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.e8(w,w.r,B.a3(w).c),v=w.$ti.c;w.B();){u=w.d
p.push(D.aDp[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cF(p,0,new C.eFv())},
ga50(){return D.Jr[this.cx].d/this.gb10()},
gaSV(){return 0.1*(D.Jr[this.cx].d/0.9)/D.Uf[this.cy].d},
Z(){this.a4()
this.mv()
C.cny("rocket_lander").bD(new C.eFP(this),x.k)},
ccr(){var w=this
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
if(m.as!=="flying"){m.l(new C.eFQ())
return}w=D.u4[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.h.D(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.m(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga50()
v=v.a6(0,new B.m(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaSV())}if(m.dy){t=m.r
v=v.aI(0,t.aM(0,t.gcE()*6*D.aFs[m.d]))}t=m.r=m.r.a6(0,v.aM(0,d))
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
p=D.Es[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b5n("rocket_lander",B.J(["unlocked",t],x.N,x.z))
C.Kb("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga50()/(D.u4[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.h.a1(m.ga50()/(D.u4[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
G.dI(80,"",500,0,0.6,"noise")
B.fX()}}if(m.Q&&m.x>0&&A.n.F(A.h.bd(m.CW*20),2)===0)G.dI(90,"",70,0,0.12,"noise")
m.l(new C.eFR())},
aiV(d,e,f,g,h){var w,v=null,u=B.c(d,v,v,v,v,v,v,D.fNH,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new E.e5(e[w].a,f.$1(w),new C.eFx(this,g,w),v,h,v))
return new B.C(A.eC,B.w(B.a([u,A.cR,B.c0(A.bI,s,A.br,v,6,6)],t),A.B,v,A.e,A.i,0,A.p),v)},
bKX(d){var w,v,u,t,s=this,r=null,q=s.ga50()/(D.u4[s.d].b/9.81*0.28)>=1,p=A.h.S(1/s.gaSV()),o=D.aFs[s.d],n=B.n(24),m=d.c,l=B.K(m.j(0.6),A.r,1)
m=B.a([B.c("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.at,B.c(d.d+" Gravity here: "+B.v(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.adk,r,r,r),A.S,s.aiV("ENGINE: "+D.Jr[s.cx].b,D.Jr,new C.eFm(s),new C.eFn(s),A.cX),s.aiV("FUEL TANK: "+D.Uf[s.cy].b,D.Uf,new C.eFo(s),new C.eFp(s),A.bf),s.aiV("LANDING GEAR: "+D.Es[s.db].b,D.Es,new C.eFq(s),new C.eFr(s),A.aH),s.aiV("EXTRAS (tap to add)",D.aDp,new C.eFs(s),new C.eFt(s),A.bj)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.hjW)
o=(q?A.bf:A.c1).j(0.14)
w=B.n(12)
v=A.h.a1(s.gb10(),2)
u=A.h.a1(s.ga50()/(D.u4[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.q(r,B.c("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.h.S(D.Es[s.db].d*100)+".",r,r,r,r,r,r,D.fOm,r,r,r),A.f,r,r,new B.p(o,r,r,w,r,r,A.m),r,r,r,A.hz,A.bS,r,r,r))
m.push(A.S)
m.push(new B.bK(A.z,r,r,new E.fL(A.oh,"Launch",new C.eFu(s),A.bf,r),r))
return B.at(B.q(r,B.cc(B.w(m,A.B,r,A.e,A.P,0,A.p),A.t,r,A.y,r,r,A.bR,r,r,A.ah),A.f,r,A.mm,new B.p(D.bw1,r,l,n,r,r,A.m),r,r,r,A.bS,r,r,r,r),r,r,r)},
b2d(d,e,f,g){var w=null,v=f?A.cX:A.c.j(0.1),u=B.n(18),t=B.K(A.aT,A.r,1)
return B.n7(A.j6,B.q(w,B.V(d,A.c,w,w,w,30),A.f,w,w,new B.p(v,w,t,u,w,w,A.m),w,62,w,w,w,w,w,g),w,new C.eFj(e),new C.eFk(e),w,w,w,w,new C.eFl(e))},
b2c(d,e,f){return this.b2d(d,e,f,74)},
C(d){var w,v,u,t,s=this,r=null,q=B.cg(new C.eFI(s,D.u4[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.u4[w].a:"\ud83d\udd12"
o.push(new E.e5(v,s.d===w,new C.eFJ(s,w),r,D.u4[w].c,r))}v=B.a([s.b2c(F.asQ,new C.eFK(s),s.y),A.bc,s.b2d(A.vD,new C.eFL(s),s.Q,130),A.bc,s.b2c(A.R9,new C.eFM(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?A.aH:A.c.j(0.1)
t=B.n(18)
A.d.u(v,B.a([A.bc,B.aA(r,B.q(r,D.c04,A.f,r,r,new B.p(u,r,B.K(A.aT,A.r,1),t,r,r,A.m),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eFN(s),r,r,r,r,r,r,!1,A.a4)],p))}return E.m0(A.cX,A.fh,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.w(B.a([new E.fm(o,"WORLD",r),B.A(v,A.l,r,A.bb,A.i,0,r,r)],p),A.l,r,A.e,A.P,0,A.p))}}
C.blQ.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=this.b,l=D.u4[m.d],k=a1.a,j=a1.b,i=0+k,h=0+j,g=$.T(),f=B.L(),e=l.c,d=B.ap(I.a0S,e,0.25)
d.toString
f.san(new B.a6(A.aU,A.b2,A.w,B.a([F.ajw,d],x.O),n,n).az(0,new B.a4(0,0,i,h)))
a0.aE(new B.a4(0,0,i,h),f)
w=new B.e6()
w.cW(5)
for(v=0;v<70;++v){i=w.ai()
h=w.ai()
f=w.ai()
d=new B.ar(A.U,A.R,A.X,A.Y,A.W)
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
h=$.T()
g=B.L()
g.r=B.ap(e,A.v,0.6).gp(0)
a0.af(t,g)
q=B.c_(new B.m(m.ax*k,u+10),8,m.ay*k)
g=B.bx(q,A.jL)
e=B.L()
e.r=A.bk.gp(0)
a0.aq(g,e)
e=B.bx(q.cu(2),A.pm)
g=B.L()
g.b=A.ad
g.c=2
g.r=A.c.j(0.5+0.3*Math.sin(m.CW*4)).gp(0)
a0.aq(e,g)
if(m.as==="ready")return
g=m.f
f=a0.c
J.bs(f.save())
f.translate(g.a*k,g.b*j)
a0.jy(0,m.w)
k=m.as
if(k==="crashed"){m=B.L()
m.r=A.cX.j(0.6).gp(0)
m.y=Z.PL
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
o.E(new B.cm(14,-10,11,18))
o.E(new B.aq(-11,18))
o.E(new B.cm(-14,-10,0,-26))
o.E(new B.bz())
k=B.L()
k.san(F.avP.az(0,D.frB))
a0.af(o,k)
k=B.L()
k.r=A.aH.gp(0)
a0.O(H.wb,5,k)
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
C.aQ3.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bCI.prototype={
t(){var w,v,u
for(w=this.hh$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hg$
w===$&&B.d()
w.t()
this.bCJ()}}
C.aWj.prototype={}
C.a5z.prototype={}
C.beG.prototype={}
C.Wr.prototype={
R(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.eC(["skin"],x.N),o=new Float32Array(0)
return new C.aGm(w,v,u,t,s,r,q,new B.cB(null,x.A),p,D.N_,D.N_,A.aA,A.cW,o,new Int32Array(0),$,A.bH,0,B.a([],x.X),null,null)}}
C.aGm.prototype={
Z(){var w=this
w.a4()
w.mv()
w.as=new C.c9K(w.gclQ())
new C.dUE(w).$0()
return},
t(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a2(0)
v.d=null}this.bBM()},
clR(d){var w,v=this
if(v.c==null)return
w=J.a1(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.fe(0,B.J(["t","init","data",$.hHJ],x.N,x.z))
v.at=!0
v.ay=""
v.aCU()
break
case"parts":v.l(new C.dUe(v))
break
case"pick":v.l(new C.dUf(v,d))
break
case"shot":v.akN(B.v(w.h(d,"data")))
break
case"error":$.an.$1("[body viewer] "+B.v(w.h(d,"text")))
if(v.c!=null&&!v.ax)v.l(new C.dUg(v))
break}},
aCU(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.aBf[q.cx]
v=new C.dUh()
u=q.ch
u=B.B(u,B.a3(u).k("ck.E"))
A.d.ff(u)
t=x.N
s=B.J(["layers",u,"skinMode",q.CW,"tone","#"+B.v(v.$1(w.b))+B.v(v.$1(w.c))+B.v(v.$1(w.d)),"sel",q.cy,"bpm",A.h.S(q.k4),"spin",q.go],t,x.cK)
r=A.V.au(s,null)
if(r===q.ay)return
q.ay=r
v=q.as
if(v!=null){u=B.S(t,x.z)
u.n(0,"t","state")
u.u(0,s)
v.fe(0,u)}},
akN(d){return this.cDr(d)},
cDr(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$akN=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cL.aK(A.a.aV(d,A.a.ca(d,",")+1))
w=6
return B.b(B.ayx(B.a([B.cK5(r,"image/png","body.png")],x.fH),null,"Made in NGMY Core Protocol"),$async$akN)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.L(x.q).f.T(I.aX7)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$akN,v)},
aCi(d){var w=d.b
if(w==="skin")return this.CW>0
return this.ch.q(0,w)},
mO(d){var w,v=this
if(v.d==null)return
w=(v.k3+=d)*v.k4/60
if(v.ok&&v.ch.q(0,"organ")&&A.h.bd(w)!==A.h.bd(v.p1)){E.Yr("kick",0,0.4)
v.VH(170,new C.dUF())}v.p1=w
return},
agn(d){var w,v,u,t,s=this
s.l(new C.dUi(s,d))
if(d==null){s.fy=D.N_
s.fr=1
w=s.as
if(w!=null)w.fe(0,B.J(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.U(w).k("X<1>")
u=B.B(new B.X(w,new C.dUj(d),v),v.k("M.E"))
t=A.d.gH(u).b
if(t!=="skin"&&!s.ch.q(0,t)){s.ch.K(0,t)
if(s.CW===2)s.CW=1}s.aCU()
w=s.as
if(w!=null)w.fe(0,B.J(["t","focus","group",d],x.N,x.z))
s.id=0
s.cFZ(t,d)
return},
cFZ(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){E.Yr("kick",0,0.8)
this.VH(260,new C.dUk())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")G.dI(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.VH(w*70,new C.dUl(this))
else if(A.a.q(e,"intestine")||e==="Stomach")G.dI(110,"",360,0.7,0.3,"saw")
else E.hmy("organic",6+A.n.F(e.length,8),200,0.6)
break
case"bone":G.dI(210+e.length*4,"",80,0.6,0.55,"tri")
G.dI(2400,"",20,0,0.3,v)
break
case"muscle":G.dI(70,"",150,1,0.6,"sine")
break
case"vessel":G.dI(300,"",380,0.4,0.22,v)
E.Yr("kick",0,0.3)
break
default:E.hmy("organic",2+A.n.F(e.length,6),200,0.4)}},
cKL(d){this.l(new C.dUn(this,d))},
b2w(){var w,v,u,t,s,r,q,p=this,o=B.aR(x.N)
for(w=p.d.e,v=w.length,u=p.ch,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
if(p.aCi(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.K(0,s.a)}q=B.B(o,o.$ti.k("ck.E"))
w=q.length
if(w===0)return
p.p3=q[p.RG.aw(w)]
p.R8=""},
c22(d){var w,v,u=this
u.id=0
if(u.p2&&u.p3!=null){if(d==null)return
w=d===u.p3
u.l(new C.dUb(u,w,d))
v=x.t
C.Kb("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.VH(1100,new C.dUc(u))
return}if(d==null){if(u.cy!=null)u.agn(null)
return}u.agn(d)},
c5F(d,e){var w,v=this,u=null,t=B.n(18),s=B.K(A.c5.j(0.5),A.r,1)
if(v.p2){w=v.p3
w=B.c(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p4+"\n"+v.R8,u,u,u,u,u,u,D.fJD,u,u,u)}else if(d==null||e==null)w=D.fZ0
else{w=x.p
w=B.A(B.a([B.E(B.w(B.a([B.c(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hj,u,u,u),A.cR,B.c(e.b,u,u,u,u,u,u,A_.FQ,u,u,u)],w),A.B,u,A.e,A.P,0,A.p),1),B.aJ(u,u,u,u,D.c2M,u,u,u,new C.dUd(v),u,u,u,u,"Back to the whole body",A.cp)],w),A.B,u,A.e,A.i,0,u,u)}return B.q(u,w,A.f,u,u,new B.p(I.a_4,u,s,t,u,u,A.m),u,u,u,u,X.ao9,u,u,u)},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:D.dPL.h(0,g)
i.aCU()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.dve
u=v.length
t=i.ch
s=0
for(;s<v.length;v.length===u||(0,B.I)(v),++s){r=v[s]
if(i.aCi(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.q(w,q))w.push(q)}v=x.p
u=B.a([B.aJ(h,h,h,h,I.p9,h,h,h,new C.dUu(i),h,h,h,h,"Share",h)],v)
q=B.a([],v)
p=i.as
if((p==null?h:p.b!=null)===!0){p=p.b
q.push(p==null?A.bK:B.Cg(h,A.qp,p))}p=i.ax
o=p?0:1
q.push(new B.dn(p,B.xQ(B.q(A.z,B.w(D.dFk,A.l,h,A.e,A.P,0,A.p),A.f,h,h,D.bao,h,h,D.hMG,h,h,h,h,h),A.b_,A.nk,o),h))
q=B.w(B.a([B.E(new B.am(A.a0,h,A.b5,A.t,q,h),1),new B.C(F.anQ,i.c5F(g,f),h)],v),A.l,h,A.e,A.i,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){n=D.dlK[s]
o=n.a
m=o==="skin"
if(m){l=i.CW
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=n.b
o=m?i.CW>0:t.q(0,o)
p.push(new E.e5(l,o,new C.dUv(i,n),n.c,A.c5,h))}p=B.a([new E.fm(p,h,h)],v)
if(!i.p2&&w.length!==0){o=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.I)(w),++s){k=w[s]
o.push(new E.e5(k,k===i.cy,new C.dUw(i,k),h,A.aQ,h))}p.push(new E.fm(o,"FIND",h))}if(t.q(0,"organ")){o=i.k4
p.push(E.jd(A.c1,""+A.h.S(o)+" beats/min","Heart rate",180,40,new C.dUx(i),o))}if(i.CW>0&&t.a===0){o=B.a([],v)
for(j=0;j<5;++j)o.push(new E.Gy(D.aBf[j],i.cx===j,new C.dUy(i,j),!1,h))
p.push(new E.fm(o,"SKIN",h))}o=i.go
m=i.p2
l=m?"Quiz on":"Quiz"
v=B.a([new E.e5("Spin",o,new C.dUz(i),D.arP,A.aH,h),new E.fL(A.mF,"Reset view",new C.dUA(i),A.c,h),new E.e5(l,m,new C.dUB(i),A.IL,A.aQ,h)],v)
if(t.q(0,"organ"))v.push(new E.e5("Heartbeat sound",i.ok,new C.dUC(i),T.p7,A.c1,h))
p.push(new E.fm(v,h,h))
return E.m0(A.c5,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.w(p,A.l,h,A.e,A.P,0,A.p))}}
C.aP7.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.aP8.prototype={
t(){var w,v,u
for(w=this.hh$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hg$
w===$&&B.d()
w.t()
this.bBL()}}
C.c9K.prototype={
kZ(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aH(e,"</script","<\\/script")
v=$.hOD
$.hOD=v+1
u="ngmy-body-viewer-"+v
$.xM()
$.qh().py(u,new C.c9L(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fI(v,"message",new C.c9M(t),!1,x.gA)
t.b=u},
fe(d,e){var w,v
try{w=this.c
if(w!=null){w=B.Se(w.contentWindow)
if(w!=null)J.akA(w,e,"*")}}catch(v){}}}
C.z2.prototype={}
C.Dr.prototype={}
C.o6.prototype={}
C.bfu.prototype={}
C.Wy.prototype={
R(){var w=x.N,v=x.y,u=x.S
return new C.aGo(B.S(w,x.a2),B.a([],x.cB),B.S(w,v),B.S(w,v),B.S(w,u),A.aA,A.J,A.J,B.aR(u),$,A.bH,0,B.a([],x.X),null,null)}}
C.aGo.prototype={
Z(){var w=this
w.a4()
w.mv()
w.afh()
$.aS.U$.push(new C.dWk(w))},
afh(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$afh=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aB(),$async$afh)
case 6:q=e.nQ("ngmy_circuit_passed_v1")
r=q==null?A.M:q
if(s.c!=null)s.l(new C.dVZ(s,r))
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
return B.i($async$afh,v)},
afE(d){return this.c9W(d)},
c9W(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$afE=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.K(0,d)
u=3
w=6
return B.b(B.aB(),$async$afE)
case 6:r=f
q=s.cx
p=B.a3(q).k("kr<ck.E,o>")
q=B.B(new B.kr(q,new C.dW1(),p),p.k("M.E"))
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
return B.i($async$afE,v)},
aAM(d,e,f,g){var w="c"+this.y++,v=new C.Dr(w,e,f,g)
this.d.n(0,w,v)
return v},
n3(d,e,f){return this.aAM(0,e,f,0)},
aeB(d,e){var w
if(D.AW.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a6(0,new B.m(-36,w))},
uE(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aX8(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fh$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.du(w,w.r,w.e),r=!1;s.B();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.n.ec(m,D.d2Q[A.n.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.uE(p,0)&&n.uE(p,1)
break
case"or":p=q.a
o=n.uE(p,0)||n.uE(p,1)
break
case"xor":p=q.a
o=n.uE(p,0)!==n.uE(p,1)
break
case"nand":p=q.a
o=!(n.uE(p,0)&&n.uE(p,1))
break
case"nor":p=q.a
o=!(n.uE(p,0)||n.uE(p,1))
break
case"not":o=!n.uE(q.a,0)
break
default:o=n.uE(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bVt(){return this.aX8(null)},
mO(d){var w,v,u,t,s,r,q,p,o,n=this
n.bVt()
if(!n.ax)return
for(w=n.d,w=new B.b9(w,B.a3(w).k("b9<2>")).gae(0),v=new B.eT(w,new C.dWl()),u=n.f,t=n.w,s=0;v.B();){r=w.gP(0).a
if(u.h(0,r)===!0){q=n.fh$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fh$)
o=s+1
G.dI(520+90*A.n.F(s,4),"",200,0,0.25,"square")
s=o}}},
aAN(d){var w=this
w.d.a7(0)
A.d.a7(w.e)
w.f.a7(0)
w.r.a7(0)
w.cy=null},
mx(d,e){var w=this.x
return new B.m(d*w.a,e*w.b)},
awU(d){var w=this
if(w.x.A(0,A.aA)){$.aS.U$.push(new C.dVX(w,d))
return}w.l(new C.dVY(w,d))},
cGh(d){this.l(new C.dW2(this,d,$.bJP()[d]))},
ceO(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bJP()[a0]
v=d.d
u=B.a3(v).k("b9<2>")
t=u.k("X<M.E>")
s=t.k("M.E")
r=B.B(new B.X(new B.b9(v,u),new C.dVS(),t),s)
A.d.b_(r,new C.dVT())
q=B.B(new B.X(new B.b9(v,u),new C.dVU(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.l(new C.dVV(d,w))
return}u=d.r
p=B.dE(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.n.dJ(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.n.h5(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aX8(0)
h=m.h(0,A.d.gH(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.lC(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aL(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a7(0)
u.u(0,p)
d.l(new C.dVW(d,o,a0))},
aBO(d){var w,v,u,t,s=this.d,r=B.a3(s).k("b9<2>")
s=B.B(new B.b9(s,r),r.k("M.E"))
r=B.U(s).k("dp<1>")
s=new B.dp(s,r)
s=new B.bQ(s,s.gI(0),r.k("bQ<aj.E>"))
w=d.a
r=r.k("aj.E")
v=d.b
while(s.B()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cor(d){var w,v,u,t,s,r=this.d,q=B.a3(r).k("b9<2>")
r=B.B(new B.b9(r,q),q.k("M.E"))
q=B.U(r).k("dp<1>")
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
c5y(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.du(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.B();){r=w.d
q=D.AW.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.aeB(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.y(p,o)
s=l}}}return t},
bUd(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.aeB(p,o)
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
ceQ(d){var w,v,u,t=this,s=t.aBO(d)
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
t.l(new C.dW3())
return}u=t.bUd(d)
if(u!=null)t.l(new C.dW4(t,u))
else t.l(new C.dW5(t))},
azA(d){return this.c8T(d)},
c8T(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$azA=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.aBO(d)
if(s==null){w=1
break}B.jH()
t.l(new C.dW0(t,s))
case 1:return B.h(u,v)}})
return B.i($async$azA,v)},
bGG(d){if(this.x.A(0,A.aA))return
this.l(new C.dVR(this,d,A.cW))
B.f4()},
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bJP()[g]
g=x.p
v=B.a([B.aJ(h,h,h,h,B.V(i.ax?T.p7:A0.u_,A.ab,h,h,h,21),h,h,h,new C.dWe(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.n(16)
s=A.cw.j(0.14)
r=B.K(A.cw.j(0.5),A.r,1)
q=B.a([B.c("Challenge: "+w.a,h,h,h,h,h,h,D.fIL,h,h,h),B.c(w.b,h,h,h,h,h,h,A.Xi,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.C(A.kO,B.c(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.bf:A.f5,h,h,h,h,h,h,h,h,12,h,h,A.C,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.q(h,B.A(B.a([B.E(B.w(q,A.B,h,A.e,A.i,0,A.p),1),B.bH(D.h9P,h,i.gceN(),B.bp(A.cw,h,h,h,h,h,h,h,h,h,h,A.cp))],g),A.l,h,A.e,A.i,0,h,h),A.f,h,h,new B.p(s,h,r,t,h,h,A.m),h,h,h,U.Pm,D.bHc,h,h,1/0))}u.push(B.E(B.cg(new C.dWf(i)),1))
if(f!=null){t=B.n(14)
s=A.c.j(0.06)
r=f.b
u.push(B.q(h,B.c(D.AW.h(0,r).a+": "+D.AW.h(0,r).e,h,h,h,h,h,h,Aj.uC,h,h,h),A.f,h,h,new B.p(s,h,h,t,h,h,A.m),h,h,h,A.a25,A.bS,h,h,1/0))}u=B.w(u,A.l,h,A.e,A.i,0,A.p)
t=B.a([],g)
for(s=D.AW.gdW(D.AW),s=s.gae(s);s.B();){r=s.gP(s)
q=new B.aQ(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ax(o.j(0.5),1,A.r,-1)
t.push(B.aA(h,B.q(h,B.w(B.a([B.V(p.b,o,h,h,h,20),A.bs,B.c(p.a,h,h,h,h,h,h,D.aZa,h,h,h)],g),A.l,h,A.e,A.P,0,A.p),A.f,h,h,new B.p(n,h,new B.bE(m,m,m,m),new B.bc(q,q,q,q),h,h,A.m),h,h,h,A.f6,A.D8,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dWg(i,r),h,h,h,h,h,h,!1,A.a4))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dA5[l]
s.push(new E.fL(A.Ra,k.b,new C.dWh(i,k),A.cw,h))}s.push(new E.fL(I.xr,"Clear",new C.dWi(i),A.c1,h))
r=B.a([],g)
for(j=0;q=$.bJP(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?A.ea:A.m7
o=i.ay
n=i.cx.q(0,j)?A.bf:A.bu
r.push(new E.e5(q.a,o===j,new C.dWj(i,j),p,n,h))}return E.m0(A.cw,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.w(B.a([new E.fm(t,"PARTS",h),new E.fm(s,"TRY",h),new E.fm(r,"TASKS",h)],g),A.l,h,A.e,A.P,0,A.p))}}
C.bfM.prototype={
a5(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3=a6.a,a4=a6.b
$.T()
w=B.L()
w.r=D.ahL.gp(0)
a5.aE(new B.a4(0,0,0+a3,0+a4),w)
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
i=a3.aeB(l,o.c)
h=s.h(0,n)===!0
n=$.T()
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
if(h){n=new B.ar(A.U,A.R,A.X,A.Y,A.W)
n.b=A.ad
n.c=9
n.r=A.bu.j(0.28).gp(0)
n.y=O.oZ
a5.af(f,n)}n=new B.ar(A.U,A.R,A.X,A.Y,A.W)
n.b=A.ad
n.c=3.2
n.d=A.bG
n.r=(h?A.eI:A.bz).gp(0)
a5.af(f,n)}a0=a3.as
if(a0!=null&&q.h(0,a0)!=null){a1=q.h(0,a0).c.a6(0,D.KE)
i=a3.at
a3=i.a
a4=a1.a
e=Math.max(40,Math.abs(a3-a4)*0.5)
r=new B.aI($.T().r,A.ak,a2,a2,B.a([],r))
w=a1.b
r.E(new B.aZ(a4,w))
s=i.b
r.E(new B.i6(a4+e,w,a3-e,s,a3,s))
s=B.L()
s.b=A.ad
s.c=3
s.r=A.ab.gp(0)
a5.af(r,s)}for(a3=new B.du(q,q.r,q.e);a3.B();)this.ceP(a5,a3.d)},
ceP(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.AW.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.c_(a0.c,64,64)
s=B.bx(t,A.k3)
r=w.cy===v
q=s.eM(A.cy)
$.T()
p=B.L()
p.r=A.v.j(0.55).gp(0)
p.y=A.nn
d.aq(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.L()
p.san(new B.bU(A.z,0.5,A.w,g,0,B.a([e.c.j(0.6),A.L],x.O),g,g).az(0,B.bY(a0.c,52)))
d.O(q,52,p)}q=s.eM(A.cN)
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
q.san(new B.a6(A.aU,A.b2,A.w,B.a([p,m],x.O),g,g).az(0,t))
d.aq(s,q)
q=B.L()
q.b=A.ad
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aq(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.p5:D.bXg}else l=e.b
k=C.hoo(B.lC(l.a),30,A.c,l.b,g,A.C)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a5(d,v.aI(0,new B.m(p/2,q.gb4(q)/2)))
j=C.hoo(e.a,10.5,A.c,g,g,A.C)
j.a5(d,a0.c.a6(0,new B.m(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.hoo(f,9,u?A.eI:A.bX,g,g,A.u)
i.a5(d,a0.c.a6(0,new B.m(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b3b(d,w.aeB(a0,h),o)
this.b3b(d,a0.c.a6(0,D.KE),o)},
b3b(d,e,f){var w
$.T()
w=B.L()
w.r=D.ahL.gp(0)
d.O(e,8.5,w)
w=B.L()
w.b=A.ad
w.c=2.2
w.r=f.gp(0)
d.O(e,8.5,w)
w=B.L()
w.r=A.c.gp(0)
d.O(e,3.2,w)},
aD(d){return!0}}
C.aPc.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bCr.prototype={
t(){var w,v,u
for(w=this.hh$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hg$
w===$&&B.d()
w.t()
this.bBQ()}}
C.OS.prototype={
R(){return new C.aGF(B.ms(0,null,null))}}
C.LH.prototype={
a9(){return"_UnfoldStyle."+this.b}}
C.Bq.prototype={}
C.aGF.prototype={
Z(){this.a4()
B.bM(A.pT,C.iFQ(),x.H)},
ceW(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcs(0).at
v.toString
w.f=v}w.l(new C.e1u(w,e))},
c7w(){var w=this
w.e.t()
w.e=B.ms(w.f,null,null)
w.l(new C.e1t(w))},
t(){this.e.t()
this.a3()},
C(d){var w=this,v=null,u=w.d,t=u==null,s=t&&B.Q(d).ax.a===A.dg?A.c:A.c7
return B.pf(t,B.c6(v,s,t?new C.bwk(w.e,w.gceV(w),new C.e1v(d),v):new C.aL3(u,new B.bf(u.b,x.W)),v,!1,!1,v,!1),new C.e1w(w,u),x.K)}}
C.bxZ.prototype={}
C.bwk.prototype={
b3c(d,e,f){var w=null,v=B.c(d,w,w,w,w,w,w,B.l(w,w,f?A.bF:A.c,w,w,w,w,w,w,w,w,12.5,w,w,A.u,w,w,!0,w,1.6,w,w,w,w,w,w),w,w,w)
return new B.C(X.a2x,B.w(B.a([v,A.bs,B.c(e,w,w,w,w,w,w,B.l(w,w,f?A.cz:A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.B,w,A.e,A.i,0,A.p),w)},
C(d){var w,v,u,t=this,s=null,r=B.Q(d).ax.a===A.dg,q=B.aG(d,A.dL,x.w).w,p=B.aJ(s,s,s,s,B.V(A.eE,r?A.bF:A.ab,s,s,s,20),s,s,D.hN8,t.e,s,s,s,s,s,s)
if(r)w=new B.p(A.c,s,s,B.n(14),A.Ju,s,A.m)
else{w=B.a([A.aH.j(0.22),A.aH.j(0.06)],x.O)
v=B.n(14)
w=new B.p(s,s,B.K(A.aH.j(0.75),A.r,1.6),v,B.a([new B.ac(0,A.H,A.aH.j(0.22),A.J,8)],x.V),new B.a6(A.aw,A.aD,A.w,w,s,s),A.m)}v=B.c("\ud83e\uddea Core Protocol",s,s,s,s,s,s,B.l(s,s,r?A.bF:A.c,s,s,s,s,s,s,s,s,15,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)
u=x.p
w=B.A(B.a([p,B.E(B.at(B.q(s,B.w(B.a([v,B.c("Play, make things, keep them.",s,s,s,s,s,s,B.l(s,s,r?A.cz:A.aR,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)],u),A.l,s,A.e,A.P,0,A.p),A.f,s,s,w,s,s,D.hNd,s,A6.aoI,s,s,s),s,s,s),1),A.uv],u),A.l,s,A.e,A.i,0,s,s)
v=t.b3c("STUDIOS","Play, make things, and keep what you make",r)
$.bJQ()
return B.bn(!1,B.w(B.a([B.E(B.v9(0,s,A.t,t.c,A.y,s,s,s,s,s,!1,s,A.ah,!1,B.a([new B.nz(new B.R(8,q.r.b+6,8,4),new B.l2(w,s),s),new B.l2(v,s),new B.nz(A.ie,B.QC(new B.pi(new C.fi7(d),9,!0,!0,!0,0,B.tI(),s),D.aWX),s),new B.l2(t.b3c("SCENES","Each one is a studio too: change the style, colours and words",r),s),new B.nz(D.bHl,B.QC(new B.pi(new C.fi8(t),6,!0,!0,!0,0,B.tI(),s),D.aWX),s)],u)),1)],u),A.l,s,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!1)}}
C.ahp.prototype={
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m.d
if(B.Q(d).ax.a===A.dg){w=B.n(20)
v=(A.n.ao(o.c,3)&1)===0
u=B.a8w(v?A.aH:A.bj,20)
v=v?A.aH:A.bj
return B.aE(!1,A.a3,!0,n,B.aM(!1,w,!0,B.eM(B.w(B.a([new B.Ww(v,44,m.c,n,n),A.N,B.c(m.a,n,2,A.a2,n,n,n,D.fP6,A.K,n,n),A.cR,B.c(m.b,n,2,A.a2,n,n,n,D.fS1,A.K,n,n)],x.p),A.l,n,A.bb,A.i,0,A.p),n,u,n,A.Dn,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}w=B.n(20)
v=B.n(20)
u=B.ap(L.mt,l,0.3)
u.toString
t=x.O
u=B.a([u,D.al6],t)
s=B.K(l.j(0.6),A.r,1.2)
r=x.V
q=B.a([new B.ac(-4,A.H,l.j(0.22),A.J,14)],r)
p=B.ap(l,A.v,0.45)
p.toString
t=B.a([l,p],t)
r=B.a([new B.ac(0,A.H,l.j(0.5),A.J,12)],r)
return B.aE(!1,A.a3,!0,n,B.aM(!1,w,!0,B.eM(B.w(B.a([B.q(n,B.V(m.c,A.c,n,n,n,24),A.f,n,n,new B.p(n,n,n,n,r,new B.a6(A.aw,A.aD,A.w,t,n,n),A.a6),n,44,n,n,n,n,n,44),A.N,B.c(m.a,n,2,A.a2,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,10.5,n,n,A.u,n,1.15,!0,n,0.5,n,n,n,n,n,n),A.K,n,n),A.cR,B.c(m.b,n,2,A.a2,n,n,n,B.l(n,n,A.c.j(0.6),n,n,n,n,n,n,n,n,9.5,n,n,n,n,1.2,!0,n,n,n,n,n,n,n,n),A.K,n,n)],x.p),A.l,n,A.bb,A.i,0,A.p),n,new B.p(n,n,s,v,q,new B.a6(A.aw,A.aD,A.w,u,n,n),A.m),n,A.Dn,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}}
C.agd.prototype={
C(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.d,j=k.d,i=B.Q(d).ax.a===A.dg,h=(A.n.ao(this.c,3)&1)===0?A.aH:A.bj,g=B.n(20)
if(i)w=B.a8w(h,20)
else{w=B.n(20)
v=B.ap(L.mt,A.d.gH(j),0.24)
v.toString
v=B.a([v,D.al6],x.O)
v=new B.p(l,l,B.K(A.d.gH(j).j(0.35),A.r,1),w,B.a([new B.ac(0,A.H,A.v.j(0.4),A.cy,12)],x.V),new B.a6(A.aw,A.aD,A.w,v,l,l),A.m)
w=v}v=x.p
u=B.a([],v)
for(t=k.e,s=x.V,r=x.O,q=0;q<3;++q){p=q===2?0:4
o=new B.aQ(6,6)
if(i){n=B.ap(h,A.c,0.1)
n.toString
n=B.a([n,B.Wx(h,!0)[1]],r)}else n=B.a([A.d.gH(j),A.d.gal(j)],r)
m=i?l:B.a([new B.ac(0,A.H,A.v.j(0.45),A.aaD,0)],s)
u.push(B.q(l,B.V(t[q],A.c,l,l,l,11),A.f,l,l,new B.p(l,l,l,new B.bc(o,o,o,o),m,new B.a6(A.a5,A.a9,A.w,n,l,l),A.m),l,17,l,new B.R(q*4,0,(2-q)*4,p),l,l,l,l))}u=B.w(u,A.l,l,A.e,A.P,0,A.p)
if(i)t=A.bF
else{t=B.ap(A.d.gH(j),A.d.gal(j),0.4)
t.toString}t=B.c(k.b,l,2,A.a2,l,l,l,B.l(l,l,t,l,l,l,l,l,l,l,l,10.5,l,l,A.u,l,1.2,!0,l,0.6,l,l,l,l,l,l),A.K,l,l)
return B.aE(!1,A.a3,!0,l,B.aM(!1,g,!0,B.eM(B.w(B.a([new B.a5(58,l,u,l),A.S,t,A.at,B.V(A.E1,i?B.Wx(h,!0)[1]:A.d.gH(j),l,l,l,18)],v),A.l,l,A.bb,A.i,0,A.p),l,w,l,A.Dn,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,this.e,l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.ai)}}
C.RV.prototype={
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ap(A.d.gal(i),A.v,0.62)
h.toString
w=k.c
v=k.d
h=B.ao(-8,new B.bP(new B.p(h,j,j,B.n(22),j,j,A.m),A.bm,j,j),j,j,2,2,8,j)
u=B.n(22)
t=k.y
s=x.V
r=B.a([new B.ac(0,A.H,A.v.j(0.55),A.KA,26),new B.ac(-6,A.H,A.d.gH(i).j(0.1+0.4*t),A.J,30)],s)
q=B.n(22)
p=B.ap(A.d.gH(i),A.c,0.14)
p.toString
o=A.d.gH(i)
n=A.d.gal(i)
i=B.ap(A.d.gal(i),A.v,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bT(0,new B.bP(new B.p(j,j,j,j,j,new B.a6(A.aw,A.aD,A.w,B.a([p,o,n,i],m),D.dGo,j),A.m),A.bm,j,j),0,0,0),B.ao(j,new B.bP(new B.p(j,j,j,j,j,new B.a6(A.aU,A.b2,A.w,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.m),A.bm,j,j),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bT(0,B.b4(j,j,j,new C.bxm(i,j),A.aA),0,0,0))
i=A.c.j(0.16)
p=B.K(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ac(0,A.H,A.c.j(0.25*t),A.J,14)],s)
s=B.q(j,B.V(k.f,A.c,j,j,j,28),A.f,j,j,new B.p(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=B.a([B.c(k.r,j,j,j,j,j,j,D.fL9,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.u(p,B.a([A.at,B.c(i,j,1,A.a2,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a8,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.FB)
p.push(B.q(j,j,A.f,j,j,new B.p(A.c.j(0.28),j,j,B.n(3),j,j,A.m),j,5,j,j,j,j,j,w*0.42))
m.push(new B.C(A.he,B.A(B.a([s,A.er,B.E(B.w(p,A.B,j,A.e,A.P,0,A.p),1)],l),A.l,j,A.e,A.i,0,j,j),j))
i=k.x
if(i>0)m.push(B.bT(0,new B.dn(!0,B.el(j,A.v.j(A.h.D(i*0.6,0,0.7)),!0),j),0,0,0))
i=B.n(22)
m.push(B.bT(0,new B.dn(!0,new B.bP(new B.p(j,j,B.K(A.c.j(0.3),A.r,1.2),i,j,j,A.m),A.bm,j,j),j),0,0,0))
return new B.a5(w,v,new B.am(A.a0,j,A.ac,A.f,B.a([h,B.bT(0,new B.bP(new B.p(j,j,j,u,r,j,A.m),A.bm,B.bv(q,new B.am(A.a0,j,A.ac,A.t,m,j),A.ap),j),0,0,0)],l),j),j)}}
C.bxm.prototype={
a5(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a4(r,-10,s,w)
u=d.c
J.bs(u.save())
u.translate(v.gbE().a,v.gbE().b)
d.jy(0,0.35)
t=B.c_(A.J,(w- -10)*1.6,s-r)
$.T()
s=B.L()
s.san(new B.a6(A.a5,A.a9,A.w,B.a([A.L,A.c.j(0.3),A.L],x.O),null,null).az(0,t))
d.aE(t,s)
u.restore()},
aD(d){return d.b!==this.b}}
C.bwS.prototype={
C(d){var w=null,v=B.n(22),u=B.a([D.btR,D.ak8],x.O),t=this.e,s=B.K(A.d.gH(t).j(0.4),A.r,1.2),r=B.a([new B.ac(0,A.H,A.v.j(0.5),A.kx,24)],x.V),q=B.n(22),p=A.d.gH(t)
return new B.a5(this.c,this.d,new B.bP(new B.p(w,w,s,v,r,new B.a6(A.aw,A.aD,A.w,u,w,w),A.m),A.bm,B.bv(q,B.b4(B.at(B.V(A.j8,A.d.gH(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.beo(p,w),A.aA),A.ap),w),w)}}
C.beo.prototype={
a5(d,e){var w,v,u,t,s,r
$.T()
w=B.L()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=0;s<u;s+=18)d.ah(new B.m(s,0),new B.m(s,t),w)
for(r=0;r<t;r+=18)d.ah(new B.m(0,r),new B.m(u,r),w)
u=e.eq(A.J)
$.T()
t=B.L()
t.b=A.ad
t.c=1.4
t.r=v.j(0.35).gp(0)
d.O(u,30,t)},
aD(d){return!1}}
C.aL3.prototype={
R(){return new C.aL4(new B.cB(null,x.A),null,null)}}
C.aL4.prototype={
grd(){var w,v=this,u=v.d
if(u===$){w=B.br(null,D.bEB,null,1,null,v)
w.cU(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
gKg(){var w,v=this,u=v.e
if(u===$){w=B.br(null,A.fO,null,1,null,v)
w.fp(0,!0)
v.e!==$&&B.bF()
v.e=w
u=w}return u},
gaAO(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gceS(){var w=this.w
if(w===$){w=B.B(this.a.c.d,x.G)
this.w=w}return w},
gb_o(){var w=this.x
if(w===$){w=B.B(this.a.c.e,x.Z)
this.x=w}return w},
gb0b(){var w=this.y
if(w===$){w=B.B(this.a.c.f,x.N)
this.y=w}return w},
gbcn(){var w=this.z
if(w===$){w=B.B(this.a.c.r,x.N)
this.z=w}return w},
Z(){this.a4()
var w=this.grd()
w.dr()
w.e2$.K(0,this.gcG_())},
cG0(){var w,v,u,t,s,r,q,p=this,o=p.grd().x
o===$&&B.d()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as&&p.ch<0){switch(p.gaAO().a){case 0:w=D.om
break
case 1:w=D.vW
break
case 2:w=D.a71
break
case 3:w=D.om
break
case 4:w=D.drB
break
case 5:w=D.vW
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.afl)r=0.09
else r=s===D.afm?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){G.dI(260+90*v,"",260,1.6,0.18,"tri")
u=D.cgi[v]
E.mP("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.Kb("bell",D.cpa,1400,0.35)}}p.ax=o},
t(){this.grd().t()
this.gKg().t()
this.bDG()},
a0I(){var w=this
w.grd().d5y(0,B.dw(0,0,0,A.h.S(11e3/w.Q),0,0))
w.l(new C.fhO(w))},
cqx(){this.grd().bR(0)
this.l(new C.fhN(this))},
a0H(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$a0H=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:if(r.ch>=0){w=1
break}j=$.aS.bl$.x.h(0,r.f)
i=j==null?null:j.gbf()
if(!(i instanceof B.oD)||i.fy==null){w=1
break}h=r.as
j=r.grd()
j.bR(0)
g=r.gKg()
g.bR(0)
r.l(new C.fhD(r))
f=i.ga0(0)
e=f.a
d=f.b
q=Math.min(3.5,1600/Math.max(e,d))
p=A.h.bd(e*q)
o=A.h.bd(d*q)
n=A.h.S(11/r.Q*20)
m=null
t=4
w=7
return B.b(E.ajE(24*q,20,new C.fhE(r,n,q,p,o),n,o,new C.fhF(r),p),$async$a0H)
case 7:l=a3
if(J.aa(l)===0){e=B.bd("empty")
throw B.Y(e)}e=r.a.c
d=B.ag("[^a-z0-9]+",!0,!1,!1,!1)
k=B.aH(e.b.toLowerCase(),d,"_")
w=8
return B.b(E.aU8(l,k),$async$a0H)
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
break}r.l(new C.fhG(r))
g.fp(0,!0)
j.sp(0,0)
if(h)r.a0I()
r.c.L(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.c(m,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a0H,v)},
agN(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$agN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gb0b(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){q=t[r]
l.push(new B.au(new B.bb(q,A.b9,A.aP),$.ay()))}m=B.a([],m)
for(t=u.gbcn(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){p=t[r]
m.push(new B.au(new B.bb(p,A.b9,A.aP),$.ay()))}o=B.B(u.gb_o(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bV(L.mt,null,new C.fhM(u,l,m,o),t,!0,!0,!0,A.me,!1,!1,x.H),$async$agN)
case 2:l=B.B(l,x.bO)
A.d.u(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.V$=$.ay()
n.W$=0}return B.h(null,v)}})
return B.i($async$agN,v)},
C(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gaAO(),e=h.a.c,d=e.b,a0=h.gceS(),a1=new C.Bq(f,d,e.c,a0,h.gb_o(),h.gb0b(),h.gbcn())
e=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
e.toString
f=x.p
w=B.a([B.aJ(g,g,g,g,B.V(h.at?T.p7:A0.u_,A.ab,g,g,g,21),g,g,g,new C.fhW(h),g,g,g,g,"Sound",g),B.aJ(g,g,g,g,D.c6x,g,g,g,h.gceU(),g,g,g,g,"Edit words and pictures",g),B.aJ(g,g,g,g,I.p9,g,g,g,new C.fhX(h,a2),g,g,g,g,"Share",g)],f)
v=B.a([B.c9(h.gKg(),new C.fhY(h,a1),g),B.cg(new C.fhZ(h,a1))],f)
u=h.as
t=u?h.gcqw():h.gceX()
u=u?D.bWr:A.tX
s=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
s.toString
t=B.A(B.a([B.aJ(g,g,g,g,B.V(u,s,g,g,g,34),g,g,g,t,g,g,g,g,g,A.cp),B.E(B.c9(h.grd(),new C.fi_(h,a2,a1),g),1),B.aJ(g,g,g,g,D.c2C,g,g,g,new C.fi0(h),g,g,g,g,"Replay",A.cp)],f),A.l,g,A.e,A.i,0,g,g)
s=h.Q
u=A.h.a1(s,1)
r=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
r.toString
s=E.jd(r,u+"x","Speed",2.5,0.4,new C.fi1(h),s)
u=B.a([],f)
for(q=0;q<6;++q){p=D.dDh[q]
o=h.r
if(o===$)o=h.r=h.a.c.a
r=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
r.toString
u.push(new E.e5(p.b,o===p.a,new C.fi2(h,p),p.c,r,g))}r=B.a([],f)
for(n=x.G,q=0;q<10;++q){m=D.cgI[q]
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
r.push(B.aA(g,B.q(g,g,A.f,g,g,new B.p(g,g,new B.bE(i,i,i,i),g,g,new B.a6(A.aw,A.aD,A.w,m,g,g),A.a6),g,k,g,I.anE,g,g,g,l),A.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new C.fi3(h,m),g,g,g,g,g,g,!1,A.a4))}u=B.a([t,s,new E.fm(u,"STYLE",g),new E.fm(r,"THEME",g),A.aj],f)
t=h.ch
if(t>=0){s=B.n(6)
a0=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
a0.toString
u.push(new B.C(A.jY,B.w(B.a([B.bv(s,B.jI(A.by,g,a0,8,g,t,g),A.ap),A.at,B.c("Making your GIF\u2026 "+A.h.S(h.ch*100)+"%",g,g,g,g,g,g,A.nC,g,g,g)],f),A.l,g,A.e,A.i,0,A.p),g))}else{f=B.ap(A.d.gH(a0),A.d.gal(a0),0.4)
f.toString
u.push(new B.a5(1/0,g,B.df(A.oi,g,D.hl6,h.gceT(),B.bp(f,g,g,g,A.v,g,A.kN,g,g,g,g,g)),g))}return E.m0(e,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.e9(new B.am(A.a0,g,A.b5,A.t,v,g),h.f),d,B.w(u,A.l,g,A.e,A.P,0,A.p))},
bFQ(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.om[r]
p=A.h.D((1-A.eg.aA(0,A.h.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.h.D(p/1.5707963267948966,0,1)
q=D.om[r]
n=q+0.12
m=A.h.D((a0-n)/(q+0.2-n),0,1)
n=D.om[r]
q=n-0.01
q=A.h.D((a0-q)/(n+0.03-q),0,1)
n=B.dA()
l=n.a
l.$flags&2&&B.ak(l)
l[11]=0.0013
n.k9(p)
l=v[r]
k=u[r]
j=t[r]
i=D.om[r]
h=i+0.1
if(A.h.D((a0-h)/(i+0.3-h),0,1)>0){i=D.om[r]
h=i+0.1
h=A.h.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.om[r]
h=i+0.1
h=A.h.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cS(0,r*118,0,f,f,f,new B.l0(q,new B.jf(n,f,A.aU,!0,f,new C.RV(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.om[r]
u=v-0.02
g=A.h.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gH(w)
v=D.om[r]
t=v+0.12
e.push(new B.cS(0,r*118-3-2,0,f,f,4,new B.n1(new C.bvW(u,g,1-A.h.D((a0-t)/(v+0.22-t),0,1),f),f,A.aA,f,f),f))}return new B.a5(a2,358,new B.am(A.a0,f,A.ac,A.f,e,f),f)},
bX4(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.vW[r]
p=A.ra.aA(0,A.h.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.vW[r]
m=q+0.15
l=A.h.D((a0-m)/(q+0.25-m),0,1)
m=D.vW[r]
q=m-0.03
q=A.h.D((a0-q)/(m+0.01-q),0,1)
m=B.dA()
k=m.a
k.$flags&2&&B.ak(k)
k[11]=0.0011
m.kb(n,n,n,1)
m.fL(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new C.RV(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dA()
k.fL(3.141592653589793)
k=new B.jf(k,f,A.z,!0,f,new C.bwS(a2,108,w,f),f)}e.push(new B.cS(0,r*130,0,f,f,f,new B.l0(q,new B.jf(m,f,A.z,!0,f,k,f),f),f))}return new B.a5(a2,378,new B.am(A.a0,f,A.ac,A.f,e,f),f)},
cLe(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a71[w]
l.push(A.cn.aA(0,A.h.D((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bT(0,B.b4(n,n,n,new C.bzs(d.d,l,D.aCY,m,C.bwj(e,0.4,0.62),f,C.bwj(e,0.45,0.7),n),A.aA),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.hoW(g,w)
q=D.aCY[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cS(r,s-q*m*p+12,n,n,t,n,new B.l0(o,B.V(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.hoW(g,w)
r=D.a71[w]
q=r+0.15
v.push(new B.cS(s,l,n,n,t,n,new B.l0(A.h.D((e-q)/(r+0.25-q),0,1),B.c(u[w],n,n,n,n,n,n,A.Xu,A.K,n,n),n),n))}return new B.a5(g,m+90,new B.am(A.a0,n,A.ac,A.f,v,n),n)},
bMe(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cn.aA(0,C.bwj(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bT(0,B.at(B.dQ(B.b4(f,f,f,new C.bvk(A.d.gH(a1),C.bwj(a3,0,0.2),a4,f),new B.av(a5*0.95,70)),D.eBY),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.h.D((a3-l)/(0.12+m-l),0,1)
j=A.dS.aA(0,A.h.D((o-0.7)/0.3,0,1))
l=B.dA()
m=l.a
m.$flags&2&&B.ak(m)
m[11]=0.001
l.fL(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.kb(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.h.F(r,1):-1
w.push(new B.y(o,new B.cS(0,0,0,0,f,f,new B.cq(A.z,f,f,new B.l0(k*(0.45+0.55*o),B.dQ(new B.jf(l,f,A.z,!0,f,new C.RV(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.m(n*a5*0.34,-o*18)),f),f),f)))}A.d.b_(w,new C.fhA())
A.d.u(a0,new B.O(w,new C.fhB(),x.fR))
return new B.a5(a5,330,new B.am(A.a0,f,A.ac,A.f,a0,f),f)},
ceR(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.vW[q]
o=A.h.D((a2-p)/(p+0.22-p),0,1)
n=A.n1.aA(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.vW[q]
m=A.h.D((a2-m)/(m+0.02-m),0,1)
l=D.aF6[q]
k=B.dA()
k.nf(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.kb(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.vW[q]
g=h+0.1
g=A.h.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cS(0,0,0,0,e,e,new B.cq(A.z,e,e,new B.l0(m,B.dQ(new B.jf(k,e,A.z,!0,e,new C.RV(d,92,w,p,j,i,0,g*s,h,e),e),new B.m(0,l)),e),e),e))
l=D.vW[q]
h=l+0.02
f=A.h.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cS(0,0,0,0,e,e,new B.cq(A.z,e,e,B.dQ(new B.n1(new C.bf4(w,f,q,e),e,new B.av(r,212),e,e),new B.m(0,D.aF6[q])),e),e))}return new B.a5(a4,330,new B.am(A.a0,e,A.ac,A.f,a0,e),e)},
bIQ(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.m(-b0,-150),new B.m(b0,-40),D.eC2],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.om[r]
p=A.h.D((a8-q)/(q+0.2-q),0,1)
o=A.cn.aA(0,p)
q=D.aFg[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.om[r]
f=g+0.2
e=A.h.D((a8-f)/(g+0.3-f),0,1)
f=D.om[r]
g=f-0.01
g=A.h.D((a8-g)/(f+0.03-g),0,1)
f=B.dA()
d=f.a
d.$flags&2&&B.ak(d)
d[11]=0.001
f.nf(l*h+D.dwh[r]*o)
f.fL(l*0.9)
h=0.55+0.45*o
f.kb(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cS(0,0,0,0,a3,a3,new B.cq(A.z,a3,a3,new B.l0(g,B.dQ(new B.jf(f,a3,A.z,!0,a3,new C.RV(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.m(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.om[r]
i=q+0.17
a2=A.h.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aFg[r]
a6.push(new B.cS(0,0,0,0,a3,a3,new B.cq(A.z,a3,a3,B.dQ(new B.n1(new C.bvm(A.d.gH(w),a2,a3),a3,new B.av(a4,30),a3,a3),new B.m(0,q+48-4)),a3),a3))}}return new B.a5(b0,330,new B.am(A.a0,a3,A.ac,A.f,a6,a3),a3)}}
C.bvW.prototype={
a5(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a4(w-v,0,w+v,e.b)
q=B.bx(u,A.hG)
$.T()
t=B.L()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.y=O.oZ
d.aq(q,t)
t=B.bx(u,A.hG)
q=B.L()
q.r=A.c.j(s).gp(0)
d.aq(t,q)},
aD(d){return d.c!==this.c||d.d!==this.d}}
C.bvk.prototype={
a5(d,e){var w,v,u=this.c,t=B.c_(e.eq(A.J),e.b*u,e.a*u)
$.T()
u=B.L()
u.b=A.ad
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.y=Z.PL
d.c2(t,u)
u=B.L()
u.b=A.ad
u.c=2.5
u.r=w.j(0.7).gp(0)
d.c2(t,u)
u=t.cu(-14)
v=B.L()
v.b=A.ad
v.c=1
v.r=w.j(0.3).gp(0)
d.c2(u,v)},
aD(d){return!0}}
C.bf4.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.eq(A.J),h=this.c,g=A.cn.aA(0,h)
$.T()
w=B.L()
w.b=A.ad
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
k=new B.ar(A.U,A.R,A.X,A.Y,A.W)
j=(q&1)===0?A.d.gH(u):A.c
k.r=j.j(A.h.D(v,0,1)).gp(0)
d.O(new B.m(s+n*o*1.6,r+(m*o+w)),(2+l*3)*h,k)}},
aD(d){return!0}}
C.bvm.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o=e.eq(A.J)
for(w=e.a,v=e.b,u=this.b,t=this.c,s=0;s<2;++s){r=A.h.D(t-s*0.18,0,1)
if(r<=0)continue
q=B.c_(o,v*(0.3+r*0.9),w*(0.5+r*0.7))
$.T()
p=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p.b=A.ad
p.c=2
p.r=u.j((1-r)*0.7).gp(0)
d.c2(q,p)}},
aD(d){return d.c!==this.c}}
C.bzs.prototype={
a5(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2=c0.e,c3=c2+36,c4=d2.a,c5=c4*0.23,c6=c5*0.34,c7=c6*0.85,c8=-c6*0.5,c9=c3-4,d0=new B.a4(0,c9,0+c4,c9+60)
$.T()
c9=B.L()
w=c0.b
v=x.O
c9.san(new B.a6(A.aU,A.b2,A.w,B.a([A.d.gH(w).j(0.18),A.L],v),c1,c1).az(0,d0))
d1.aE(d0,c9)
c9=B.L()
c9.r=A.c.j(0.18).gp(0)
c9.c=1
d1.ah(new B.m(0,c3),new B.m(c4,c3),c9)
for(c9=c0.w,u=c9>0,t=(c5-16)/3,s=t-5,r=0.6+0.3*c0.r,q=c0.f,p=c3-14,o=x.v,n=c3+c8,m=c0.d,l=c3-6,k=c5+c7+8,j=l+16,i=c0.c,h=c9<1,g=d1.c,f=0;f<3;++f){e=i[f]
if(e<=0)continue
d=C.hoW(c4,f)
a0=m[f]*c2*e
a1=d-4
a2=$.T()
a3=new B.ar(A.U,A.R,A.X,A.Y,A.W)
a3.r=A.v.j(0.5).gp(0)
a3.y=A.nn
d1.c2(new B.a4(a1,l,a1+k,j),a3)
a3=c3-a0
a1=d+c5
a4=new B.a4(d,a3,a1,a3+a0)
a5=new B.ar(A.U,A.R,A.X,A.Y,A.W)
a6=B.ap(A.d.gH(w),A.c,0.1)
a6.toString
a5.san(new B.a6(A.aU,A.b2,A.w,B.a([a6,A.d.gal(w)],v),c1,c1).az(0,a4))
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
a5=new B.ar(A.U,A.R,A.X,A.Y,A.W)
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
a2=new B.ar(A.U,A.R,A.X,A.Y,A.W)
a2.r=B.ap(A.d.gH(w),A.c,0.45).gp(0)
d1.af(b1,a2)
b2=new B.ar(A.U,A.R,A.X,A.Y,A.W)
b2.b=A.ad
b2.c=1
b2.r=A.c.j(0.28).gp(0)
d1.aE(a4,b2)
d1.af(a7,b2)
d1.af(b1,b2)
b3=A.h.bd(a0/22)
for(a2=a3+6,a3=d+8,a5=q*b3*1.3,b4=0;b4<b3;++b4){b5=a5>b3-b4-1
for(a6=p-b4*22-12,a8=a6<a2,a9=a6+10,b6=0;b6<3;++b6){b7=a3+b6*t
if(a8)continue
b0=B.bx(new B.a4(b7,a6,b7+s,a9),A.hG)
$.T()
b8=new B.ar(A.U,A.R,A.X,A.Y,A.W)
b8.r=(b5?A.c.j(r):A.v.j(0.22)).gp(0)
d1.aq(b0,b8)}}if(u&&h){a2=c3-a0*c9-14
b9=new B.a4(d,a2,a1,a2+28)
J.bs(g.save())
g.clipRect(B.hS(a4),$.lH()[1],!0)
$.T()
a2=new B.ar(A.U,A.R,A.X,A.Y,A.W)
a2.san(new B.a6(A.aU,A.b2,A.w,B.a([A.L,A.c.j(0.4),A.L],v),c1,c1).az(0,b9))
d1.aE(b9,a2)
g.restore()}}},
aD(d){return!0}}
C.aQU.prototype={
b0(){this.b8()
this.b5()
this.dV()},
t(){var w=this,v=w.bc$
if(v!=null)v.a8(0,w.gdP())
w.bc$=null
w.a3()}}
C.a2C.prototype={
a9(){return"_Role."+this.b}}
C.qO.prototype={}
C.ry.prototype={}
C.Dv.prototype={}
C.a0y.prototype={}
C.ahc.prototype={}
C.a2P.prototype={
ga0(d){return this.d}}
C.DG.prototype={}
C.ae1.prototype={}
C.aej.prototype={}
C.agh.prototype={}
C.blN.prototype={
a5a(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
G.dI(d,"",e,g,h,f)},
bdw(d,e,f){return this.a5a(d,e,f,0,0.55)},
aFI(d,e,f,g){return this.a5a(d,e,f,0,g)},
bdx(d,e,f,g){return this.a5a(d,e,f,g,0.55)},
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
amZ(d,e,f,g){var w="n"+this.ay++,v=new C.ry(w,e,f,g)
this.a.n(0,w,v)
this.b3()
return v},
tC(d,e,f){return this.amZ(0,e,f,0)},
X(d,e){var w=this
w.a.X(0,e)
A.d.br(w.b,new C.dvN(e))
A.d.br(w.c,new C.dvO(e))
w.b3()},
bhp(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.nt.h(0,v.b).c===D.yB)return!1
w=this.b
if(A.d.aR(w,new C.dvK(d,e)))return!1
w.push(new C.Dv(d,e))
this.b3()
return!0},
c6k(d){var w
if(d.b==="beat")return D.cpm[A.n.F(d.d,4)]
w=this.at
switch(A.n.F(d.d,3)){case 1:return 350+w.aw(500)
case 2:return 1400+w.aw(2200)
default:return 450+w.aw(2000)}},
aJh(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.n.F(w,6)
t=D.aFx[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.DG(u,t,j.ax,90))
w.push(new C.DG(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ai()*3.141592653589793*2
v.push(new C.a2P(u,new B.m(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.bdw(261.63*Math.pow(2,([0,4,7,12,16,19][A.n.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ai()*3.141592653589793*2
p=100+w.ai()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ap(t,A.c,w.ai()*0.5)
m.toString
v.push(new C.a2P(u,new B.m(o*p,n*p),m,3+w.ai()*4.5,1000+w.aw(700),j.ax))}j.f.push(new C.DG(u,t,j.ax,120))
j.aFI(120,200,"noise",0.5)
j.bdw(261.63*Math.pow(2,([7,12,16,19][w.aw(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.DG(u,t,j.ax,230))
w.push(new C.DG(u,t,j.ax+160,160))
w.push(new C.DG(u,t,j.ax+320,100))
j.bdx(180+j.at.aw(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.ae1(u,new B.m((w.ai()-0.5)*220,-260-w.ai()*180),t,j.ax))
j.bdx(300+w.aw(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ai()*3.141592653589793*2
j.w.push(new C.aej(u,u.a6(0,new B.m(Math.cos(q),Math.sin(q)).aM(0,260+w.ai()*200)),t,j.ax))
j.a5a(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fX()
j.a5a(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.agh(u,D.aET[v],t,j.ax))
j.aFI(261.63*Math.pow(2,([0,5,9,12][j.at.aw(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aFI(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.clq[A.n.F(w,3)]
for(k=1;k<=3;++k)j.cAW(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new B.eT(w,new C.dvL(d));v.B();)j.aEa(w.gP(0),j.ax+D.cxV[A.n.F(g.d,4)])
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
case"chance":s=j.at.aw(100)<D.cPm[A.n.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new B.eT(w,new C.dvM(d));v.B();)j.aEa(w.gP(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.y6(w,0,v-700)},
cAW(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.a0y(e,"~"+d))},
aEa(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.ahc(d.a,v,e,w))
u.push(new C.a0y(w,v))},
a8Y(d){var w,v,u,t,s,r,q,p,o=this
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
else if(o.ax>=q){o.aJh(r)
u.n(0,r,o.ax+o.c6k(s))}}w=o.c
v=B.U(w).k("X<1>")
q=B.B(new B.X(w,new C.dvP(o),v),v.k("M.E"))
if(q.length!==0){A.d.br(w,new C.dvQ(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.I)(q),++t){u=q[t].b
if(A.a.Y(u,"~")){p=A.a.aV(u,1)
for(u=A.d.gae(v),r=new B.eT(u,new C.dvR(p));r.B();)o.aEa(u.gP(0),o.ax)}else o.aJh(u)}}A.d.br(o.d,new C.dvS(o))
A.d.br(o.e,new C.dvT(o))
A.d.br(o.f,new C.dvU(o))
A.d.br(o.w,new C.dvV(o))
A.d.br(o.x,new C.dvW(o))
A.d.br(o.r,new C.dvX(o))
o.b3()},
w5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
for(v=this.a,v=new B.du(v,v.r,v.e),u=x.N,t=x.K;v.B();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(B.J(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=B.a([],x.E)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,B.I)(t),++o){n=t[o]
v.push(B.a([n.a,n.b],r))}return A.V.au(B.J(["nodes",m,"edges",v],u,x.ew),null)},
Vk(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.V.aP(0,d,null))
k.a7(0)
for(o=x.j,n=J.aO(o.a(J.t(w,"nodes"))),m=k.a;n.B();){v=n.gP(n)
u=B.v(J.t(v,"k"))
if(!D.nt.am(0,u))continue
t=B.v(J.t(v,"id"))
m.n(0,t,new C.ry(t,u,new B.m(B.dC(J.t(v,"x"))*k.cy.a,B.dC(J.t(v,"y"))*k.cy.b),A.h.M(B.dC(J.t(v,"p")))))
s=B.ca(B.aH(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aO(o.a(J.t(w,"edges"))),n=k.b;o.B();){r=o.gP(o)
q=B.v(J.t(r,0))
p=B.v(J.t(r,1))
if(m.am(0,q)&&m.am(0,p))n.push(new C.Dv(q,p))}k.b3()
return!0}catch(l){return!1}},
d_U(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a7(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.ry(n,r,new B.m(q*p.a,o*p.b),s))
l.b3()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bhp(w[m.a],w[m.b])}},
ga0(d){return this.cy}}
C.H9.prototype={}
C.Y_.prototype={
R(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aHW(new C.blN(B.S(w,x.f3),v,u,t,s,r,q,p,o,B.S(w,n),B.S(w,n),B.S(w,n),B.S(w,n),A.cW,A.L,A.aA,$.ay()),A.bH,A.J,A.J,A.M,null,null)}}
C.aHW.prototype={
af9(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$af9=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.aB(),$async$af9)
case 6:q=n.kl(m.t(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.l(new C.eEQ(s))
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
return B.i($async$af9,v)},
ac1(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$ac1=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.l(new C.eEF(s))
u=3
w=6
return B.b(B.aB(),$async$ac1)
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
return B.i($async$ac1,v)},
bSl(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a3(n).k("b9<2>")
v=""+n.a+"|"+o.length+"|"+new B.b9(n,w).cF(0,0,new C.eEH())+"|"+A.d.cF(o,0,new C.eEI())
if(v===p.ch)return p.CW
u=new C.eEL()
t=x.s
s=B.a([],t)
r=new C.eEM(p,s,u)
for(n=new B.b9(n,w).gae(0),w=new B.eT(n,new C.eEJ());w.B();){q=n.gP(0)
if(!A.d.aR(o,new C.eEK(q)))s.push(B.v(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.cJ(s,0,B.dx(5,"count",x.S),x.N).de(0)},
Z(){var w,v=this
v.a4()
v.af9()
v.d.db=v.ay
w=v.qi(new C.eFf(v))
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
w.bCH()},
aeF(d){return this.c5L(d)},
c5L(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$aeF=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.aB(),$async$aeF)
case 6:q=m.aV(l.t(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.Vk(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.b0D(A.d.gH(D.aEj))
if(s.c!=null)s.l(new C.eEP())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aeF,v)},
b0D(d){this.d.d_U(0,d.c,d.d)
this.Fq()},
Fq(){var w=this.as
if(w!=null)w.a2(0)
this.as=B.cC(A.m3,new C.eEB(this))},
aAP(d){var w,v,u,t,s=this.d.a,r=B.a3(s).k("b9<2>")
s=B.B(new B.b9(s,r),r.k("M.E"))
r=B.U(s).k("dp<1>")
s=new B.dp(s,r)
s=new B.bQ(s,s.gI(0),r.k("bQ<aj.E>"))
w=d.a
r=r.k("aj.E")
v=d.b
while(s.B()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cos(d){var w,v,u,t,s,r=this.d.a,q=B.a3(r).k("b9<2>")
r=B.B(new B.b9(r,q),q.k("M.E"))
q=B.U(r).k("dp<1>")
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
c5z(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.du(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.B();){r=w.d
if(D.nt.h(0,r.b).c===D.yB)continue
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
cf_(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hOE(new B.m(n.a+36,n.b+0),new B.m(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cIQ(d){var w,v,u,t,s,r,q=this,p=q.aAP(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.f4()
u=v.b
if(u==="button"){w.aJh(p)
return}if(q.r)return
t=D.nt.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.rZ)s=6
else s=1
v.d=A.n.F(v.d+1,s)
w.b3()
q.Fq()
return}if(q.r)return
r=q.cf_(d)
if(r!=null){w=q.d
A.d.cP(w.b,r)
w.b3()
q.Fq()}},
cpO(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cos(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.aAP(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aI(0,d)}},
cpP(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b3()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.m(A.h.D(d.a+s.y.a,46,t.a-46),A.h.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b3()}}},
b6h(){var w,v,u=this
if(u.z!=null){w=u.c5z(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bhp(v,w)}else v=!1
if(v){B.kc()
u.Fq()}u.z=null
u.d.b3()}else if(u.x!=null){if(u.at)u.Fq()
u.x=null}},
afo(d){return this.c8U(d)},
c8U(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$afo=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.aAP(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jH()
p=t.c
p.toString
w=3
return B.b(B.bV(L.mt,null,new C.eES(q),p,!0,!0,!1,A.me,!1,!1,x.y),$async$afo)
case 3:if(f===!0){r.X(0,s)
t.Fq()}case 1:return B.h(u,v)}})
return B.i($async$afo,v)},
ceY(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.tC(0,d,new B.m(v.a*(0.25+u.ai()*0.5),v.b*(0.2+u.ai()*0.55)))
B.f4()
this.Fq()},
ajs(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ajs=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bV(L.mt,null,new C.eEU(),s,!0,!0,!0,A.me,!1,!1,x.es),$async$ajs)
case 2:t=e
if(t!=null)u.b0D(t)
return B.h(null,v)}})
return B.i($async$ajs,v)},
agO(d){var w=0,v=B.j(x.H),u=this,t
var $async$agO=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cf(null,null,!0,null,new C.eEE(),t,null,!0,!0,x.y),$async$agO)
case 2:if(f===!0){u.d.a7(0)
u.Fq()}return B.h(null,v)}})
return B.i($async$agO,v)},
C(d){var w=this,v=null,u=B.a([B.akO(w.r?new B.bK(A.a5,v,v,new B.C(A.I1,B.hy(D.c0m,D.h2l,new C.eFd(w),v),v),v):w.cf0(),A.b_,A.j4),B.E(B.cg(new C.eFe(w)),1)],x.p)
if(!w.r)u.push(w.cDu())
return B.c6(v,A.c7,B.bn(!0,B.w(u,A.l,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)},
bNY(){var w=null,v=new C.eEG(),u=A.v.j(0.7),t=B.n(26),s=B.K(A.bw.j(0.5),A.r,1)
return B.bT(0,B.el(B.at(B.q(w,B.cc(B.w(B.a([D.hdZ,A.at,D.hlS,A.aB,v.$4(A.mG,A.bw,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(W.DY,A.cw,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.kn,A.c5,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.QA,A.bu,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.hl9,new B.bK(A.a9,w,w,B.bL(!1,D.hb1,w,w,!0,w,w,w,this.gbNR(),w,w),w)],x.p),A.B,w,A.e,A.P,0,A.p),A.t,w,A.y,w,w,w,w,w,A.ah),A.f,w,A.Zg,new B.p(L.mt,w,s,t,w,w,A.m),w,w,w,A.f7,A9.ap0,w,w,w),w,w,w),u,!0),0,0,0)},
cf0(){var w=this,v=null,u=B.aJ(v,v,v,v,Ap.nr,v,v,v,new C.eF_(w),v,v,v,v,v,v),t=w.abs(A.DQ,"How it works",new C.eF0(w),!0),s=w.ay?T.p7:A0.u_
return new B.C(D.bLw,B.A(B.a([u,D.bNc,t,w.abs(s,"Sound",new C.eF1(w),!0),w.abs(A.eh,"Ideas",w.gctI(),!0),w.abs(I.xr,"Clear",w.gceZ(w),!0),w.aSd(A.fQ,"Show",new C.eF2(w),!0,!0)],x.p),A.l,v,A.e,A.i,0,v,v),v)},
aSd(d,e,f,g,h){var w=null,v=h?A.bw:A.c.j(0.08),u=B.n(14),t=B.n(14),s=B.a([B.V(d,h?A.v:A.c,w,w,w,20)],x.p)
return new B.C(Al.xi,B.aE(!1,A.a3,!0,u,B.aM(!1,t,!0,B.hb(new B.C(new B.R(8,8,8,8),B.A(s,A.l,w,A.e,A.P,0,w,w),w),w,e,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ai),w)},
abs(d,e,f,g){return this.aSd(d,e,f,g,!1)},
cDu(){var w=null,v=new C.eEW(this),u=A.c.j(0.08)
return B.q(w,B.cc(B.A(B.a([v.$2("START",D.yB),v.$2("CHANGE",D.Gc),v.$2("REACT",D.rZ)],x.p),A.B,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,w,A.aK),A.f,w,w,new B.p(L.CH,w,new B.bE(new B.ax(u,1,A.r,-1),A.a1,A.a1,A.a1),w,w,w,A.m),w,w,w,w,D.bGv,w,w,w)},
cDv(d){var w,v,u,t,s=null,r=D.nt.h(0,d)
r.toString
w=B.n(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.K(v.j(0.5),A.r,1)
return new B.C(A.f6,B.aA(s,B.q(s,B.w(B.a([B.V(r.b,v,s,s,s,22),A.cR,B.c(r.a,s,1,A.a2,s,s,s,D.aZa,s,s,s)],x.p),A.l,s,A.e,A.P,0,A.p),A.f,s,s,new B.p(s,s,t,w,s,new B.a6(A.aU,A.b2,A.w,u,s,s),A.m),s,s,s,s,A.hA,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eEV(this,d),s,s,s,s,s,s,!1,A.a4),s)}}
C.blO.prototype={
a5(b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=b2.b,b5=b4.ax,b6=b7.c
J.bs(b6.save())
w=b4.ch
if(b5<w){v=(w-b5)/380
b6.translate(Math.sin(b5*0.09)*9*v,Math.cos(b5*0.13)*7*v)}$.T()
u=B.L()
u.r=A.c.j(0.05).gp(0)
for(w=b8.b,t=b8.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28)b7.O(new B.m(r,s),1,u)
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
d=new B.aI(f.r,A.ak,b3,b3,e)
e.push(new B.aZ(i,j))
d.ac()
a0=Math.max(40,Math.abs(g-i)*0.5)
f=new B.i6(i+a0,j,g-a0,h,g,h)
e.push(f)
e=d.f
if(e!=null)f.aj(e)
d.ac()
a1=D.nt.h(0,l.b).d
a2=D.nt.h(0,k.b).d
f=new B.ar(A.U,A.R,A.X,A.Y,A.W)
f.b=A.ad
f.c=3
f.d=A.bG
e=B.a([a1.j(0.55),a2.j(0.55)],q)
h=B.ri(new B.m(i,j),new B.m(g,h))
f.san(new B.a6(A.a5,A.a9,A.w,e,b3,b3).az(0,new B.a4(h.a-2,h.b-2,h.c+2,h.d+2)))
b7.af(d,f)}for(w=b4.d,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a3=w[n]
l=o.h(0,a3.a)
k=o.h(0,a3.b)
if(l==null||k==null)continue
j=a3.c
a4=A.h.D((b5-j)/(a3.d-j),0,1)
j=l.c
i=k.c
a5=C.hOE(new B.m(j.a+36,j.b+0),new B.m(i.a-36,i.b),a4)
$.T()
i=new B.ar(A.U,A.R,A.X,A.Y,A.W)
i.r=A.c.j(0.35).gp(0)
i.y=O.oZ
b7.O(a5,8,i)
i=new B.ar(A.U,A.R,A.X,A.Y,A.W)
i.r=A.c.gp(0)
b7.O(a5,4,i)}a6=b2.d.$0()
if(a6!=null&&o.h(0,a6)!=null){a7=o.h(0,a6).c.a6(0,D.KE)
a8=b2.e.$0()
w=a8.a
t=a7.a
a0=Math.max(40,Math.abs(w-t)*0.5)
d=new B.aI($.T().r,A.ak,b3,b3,B.a([],p))
p=a7.b
d.E(new B.aZ(t,p))
j=a8.b
d.E(new B.i6(t+a0,p,w-a0,j,w,j))
j=B.L()
j.b=A.ad
j.c=3
j.r=A.c.j(0.7).gp(0)
b7.af(d,j)
j=B.L()
j.r=A.c.gp(0)
b7.O(a8,7,j)}for(w=b4.f,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a9=w[n]
p=a9.c
v=A.h.D((b5-p)/700,0,1)
if(b5<p)continue
p=A.ed.aA(0,v)
$.T()
j=new B.ar(A.U,A.R,A.X,A.Y,A.W)
j.b=A.ad
i=1-v
j.c=3.5*i+0.5
j.r=a9.b.j(i*0.9).gp(0)
b7.O(a9.a,14+a9.d*p,j)}for(w=b4.w,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){b0=w[n]
v=A.h.D((b5-b0.d)/600,0,1)
p=b0.a
j=b0.b
i=B.l_(p,j,A.ed.aA(0,v))
i.toString
j=B.l_(p,j,A.ed.aA(0,A.h.D(v-0.35,0,1)))
j.toString
$.T()
p=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p.c=5
p.d=A.bG
h=b0.c
g=B.a([h.j(0),h],q)
f=B.ri(j,i)
p.san(new B.a6(A.a5,A.a9,A.w,g,b3,b3).az(0,new B.a4(f.a-4,f.b-4,f.c+4,f.d+4)))
b7.ah(j,i,p)
p=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p.r=A.c.gp(0)
b7.O(i,6,p)
p=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p.r=h.j(0.5*(1-v)).gp(0)
p.y=A.ld
b7.O(i,12,p)}for(w=b4.e,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a3=w[n]
v=A.h.D((b5-a3.f)/a3.e,0,1)
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
j.y=A.ld
b7.O(p,11,j)
j=k.a
p=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p.san(new B.bU(Ac.C_,0.5,A.w,b3,0,B.a([A.c,i],q),b3,b3).az(0,B.bY(k.a,8)))
b7.O(j,8,p)}for(b4=b4.x,w=b4.length,n=0;n<b4.length;b4.length===w||(0,B.I)(b4),++n){a5=b4[n]
v=A.h.D((b5-a5.d)/1000,0,1)
t=1-v
b1=C.blP(a5.b,26+8*t,a5.c.j(t),b3,b3,A.u)
t=a5.a
q=b1.b
p=q.c
q=q.a.c
b1.a5(b7,new B.m(t.a-p/2,t.b-(40+60*v+q.gb4(q)/2)))}for(b4=new B.du(o,o.r,o.e);b4.B();)b2.cpk(b7,b4.d,b5)
b6.restore()},
cpk(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.nt.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.h.D(1-(f-w)/520,0,1)
u=B.c_(e.c,64,64)
t=B.bx(u,A.i8)
s=t.eM(A.cy)
$.T()
r=B.L()
r.r=A.v.j(0.55).gp(0)
r.y=A.nn
d.aq(s,r)
if(v>0){s=t.cu(6)
r=B.L()
r.r=h.d.j(0.6*v).gp(0)
r.y=A.Ds
d.aq(s,r)}s=t.eM(A.cN)
r=B.L()
q=h.d
r.r=B.ap(q,A.v,0.65).gp(0)
d.aq(s,r)
r=B.L()
s=B.ap(q,A.c,0.18+0.4*v)
s.toString
p=B.ap(q,A.v,0.35)
p.toString
r.san(new B.a6(A.aU,A.b2,A.w,B.a([s,p],x.O),j,j).az(0,u))
d.aq(t,r)
r=B.L()
r.b=A.ad
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aq(t,r)
r=h.b
p=e.c
o=C.blP(B.lC(r.a),30,A.c,r.b,j,A.C)
r=o.b
s=r.c
r=r.a.c
o.a5(d,p.aI(0,new B.m(s/2,r.gb4(r)/2)))
n=C.blP(h.a,11,A.c,j,j,A.C)
n.a5(d,e.c.a6(0,new B.m(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.n.F(e.d,r)]
else m=i==="pop"?D.aET[A.n.F(e.d,6)]:j
h=h.c
if(h===D.rZ){s=e.c.a6(0,new B.m(0,62))
r=B.L()
r.r=D.aFx[A.n.F(e.d,6)].gp(0)
d.O(s,5,r)}else if(m!=null){l=C.blP(m,9.5,A.aF,j,j,A.O)
l.a5(d,e.c.a6(0,new B.m(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.blP(m,9.5,A.aF,j,j,A.O)
l.a5(d,e.c.a6(0,new B.m(-l.b.c/2,54)))}if(k.c)return
if(h!==D.yB)k.b76(d,e.c.aI(0,D.KE),q)
k.b76(d,e.c.a6(0,D.KE),q)},
b76(d,e,f){var w
$.T()
w=B.L()
w.r=A.c7.gp(0)
d.O(e,9,w)
w=B.L()
w.b=A.ad
w.c=2.2
w.r=f.gp(0)
d.O(e,9,w)
w=B.L()
w.r=A.c.gp(0)
d.O(e,3.5,w)},
aD(d){return!0}}
C.aQ1.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.es.prototype={}
C.ui.prototype={
atS(d,e,f,g){var w=this
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
C.acF.prototype={}
C.adO.prototype={}
C.a6H.prototype={
bji(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.hc()?-1:1
v=t.ai()*3.141592653589793*2
u=f*(0.3+t.ai())
s.push(new C.acF(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ai()*0.45));++r}},
cb6(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.br(w,new C.bSZ())},
amZ(d,e,f,g){var w="p"+this.c++,v=new C.ui(w,e,f,g)
v.atS(w,e,f,g)
this.a.push(v)
return v},
X(d,e){A.d.X(this.a,e)
A.d.br(this.b,new C.bT9(e))},
a7(d){A.d.a7(this.a)
A.d.a7(this.b)},
cRO(d,e,f,g,h){return A.d.aR(this.b,new C.bT4(e,f,g,h))},
anN(d,e,f,g){var w
if(d===f||this.cRO(0,d,e,f,g))return null
w=new C.adO(d,e,f,g)
this.b.push(w)
return w},
aEI(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
AP(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
aqA(d){return this.Ne(d)&&!d.x&&d.cx>this.AP(d)},
bbx(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Ne(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
cfk(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.AX.h(0,v)
if(w!=null)return w.a
return 100},
w5(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.cb6(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.U(v).k("X<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.I)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.X(v,new C.bTa(a2),t).cF(0,0,new C.bTb(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.S(x.N,u)
n=new C.bTd(o)
m=B.a([],x.t)
l=new C.bTc(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.I)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.I)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.S(u,u)
f=new C.bTf(g,l,n)
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
a2.bbt(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.AP(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.bbt(e,d,w,!0)
a2.bUH(a4)},
bbt(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.S(x.N,b3),b5=new C.bT0(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bT_(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.I)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bT2(B.S(b3,b3),r,b5)
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
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.bbx(t)*(1+t.CW))
a4=b2.aEI(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.cfk(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bY4(e,a0,b8)
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
bY4(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
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
bUH(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.I)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aEI(o)/a1.bbx(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.AP(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bMz(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bji(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.uL(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.uL(o,"The "+$.qY().h(0,n).b+" got "+A.h.a1(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.uL(o,"More than 1.5 amps went through the "+$.qY().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.uL(o,"The regulator had to turn "+A.h.a1(o.cy,1)+" V into heat while "+A.h.S(i*1000)+" mA flowed. That is "+A.h.a1(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.uL(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.AX.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qY().h(0,n).b
l=f.b
l=l===A.h.bO(l)?""+A.h.S(l):B.v(l)
g=f.c
g=g===A.h.bO(g)?""+A.h.S(g):B.v(g)
a1.uL(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.h.a1(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.fwe.q(0,n)){m=o.fx>0?A.h.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.h.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.uL(o,"The bulb got "+A.h.a1(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.h.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.uL(o,"The LED had "+A.h.S(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.h.D(j/14,0,1)
break
case"motor":n=A.h.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.h.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.uL(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.h.D(i/1,0,1)
if(!o.x&&i>1)a1.uL(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.uL(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.h.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.uL(o,"The capacitor was charged to "+A.h.a1(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bMz(d){return A.d.aR(this.a,new C.bSY(d))},
uL(d,e){var w
d.x=!0
d.ay=e
this.bji(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bnY(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a7(0)},
aL4(d){var w=d.b
return D.aVR.q(0,w)||D.AX.am(0,w)||w==="buck"||w==="regulator"},
bkN(d){var w,v=!0
if(!this.Ne(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.AX.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
WC(d,e){var w=this.b
return new B.X(w,new C.bTh(d,e),B.U(w).k("X<1>")).gI(0)},
rL(d){var w,v
if(d.x)return!1
w=d.b
if(D.AX.am(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
biO(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qY().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aL4(d)||i.rL(d))return null
w=i.WC(d,0)
v=i.WC(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.U(u).k("X<1>")
s=B.B(new B.X(u,i.gd_r(),t),t.k("M.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.h.bO(r)?""+A.h.S(r):B.v(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.h.a1(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.AX.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.Nr("battery"),o=J.aO(t.a),t=new B.eT(o,t.b);t.B();){n=o.gP(o)
if(n.e===1.5&&n.as<=0.02&&i.WC(n,0)+i.WC(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.Nr("switch"),o=J.aO(t.a),t=new B.eT(o,t.b);t.B();)if(!o.gP(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qY().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.AP(k))return"The "+$.qY().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.h.a1(k.cx,2)+" amps, but it can only give about "+A.h.a1(i.AP(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.aR(u,new C.bT5(i,d))
h=q.b
h=h===A.h.bO(h)?""+A.h.S(h):B.v(h)
u=A.h.a1(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.h.a1(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.h.a1(Math.abs(d.dy),1)+" V). Try a bigger battery."},
Nr(d){var w=this.a
return new B.X(w,new C.bT8(d),B.U(w).k("X<1>"))},
aKG(d){return this.Nr(d).aR(0,new C.bT7(0.35))},
qs(d,e){return A.d.aR(this.a,new C.bT6(e))}}
C.alp.prototype={
a5(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.T()
w=B.L()
w.r=F.nR.gp(0)
c0.aE(new B.a4(0,0,b8,b9),w)
w=C.iml(c1)
v=$.hXH()
if(A.n.F(w.length,2)!==0)B.bi(B.dM('"points" must have an even number of values.',b5))
u=c0.b
if(u!=null)u.ov(v)
t=v.nh()
v=c0.c
v.drawPoints($.hYB()[0],w,t)
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
b4.cOv(c0,new B.m(n*b6+m*(42+l),o*b7),new B.m(j*b6+i*(42+h),k.d*b7),p,p===r)}u=b4.d
if(u!=null&&b4.e!=null){g=C.i1K(u.a,u.b,c1)
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
j.r=F.NR.j(A.h.D(f.Q*0.45,0,0.6)).gp(0)
j.y=A.Ds
c0.O(new B.m(m,l),46+14*k,j)}e=o.h(0,f.a)
if(e==null)e=1
J.bs(v.save())
v.translate(m,l)
k=A.h.D(A.n1.aA(0,A.h.D(e,0,1)),0.01,1.4)
v.scale(k,k)
b4.cql(c0,f,f===r)
v.restore()
k=f.b
if((k==="battery"||k==="solar"||k==="crank"||k==="turbine")&&!f.x&&f.cx>w.AP(f)){j=m+0
i=l+-40
h=Math.sin(w.d*10)
d=$.T().r
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
a0=new B.ar(A.U,A.R,A.X,A.Y,A.W)
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
h=new B.ar(A.U,A.R,A.X,A.Y,A.W)
h.b=A.ad
h.c=1.6
h.r=A.c.gp(0)
c0.af(d,h)
b4.lK(c0,"!",new B.m(j+-3,i+-8),A.c,14)}if(!f.x)j=(D.aVR.q(0,k)||D.AX.am(0,k)||k==="buck"||k==="regulator")&&!w.rL(f)&&w.WC(f,0)+w.WC(f,1)>0
else j=!1
if(j){m+=0
l+=-40
$.T()
j=new B.ar(A.U,A.R,A.X,A.Y,A.W)
j.r=A.as.gp(0)
c0.O(new B.m(m,l),10,j)
b4.lK(c0,"!",new B.m(m+-3,l+-8),A.v,14)}for(a8=0;a8<2;++a8){m=f.c
l=a8===0
j=l?-1:1
i=D.mN.am(0,k)?(f.ch-1)*38:0
i=m*b6+j*(42+i)
j=f.d*b7
a9=new B.m(i,j)
$.T()
m=new B.ar(A.U,A.R,A.X,A.Y,A.W)
m.r=F.nR.gp(0)
c0.O(a9,7,m)
m=new B.ar(A.U,A.R,A.X,A.Y,A.W)
m.b=A.ad
m.c=2.4
m.r=(l&&w.bkN(f)?A.c1:A.ab).gp(0)
c0.O(a9,6,m)
if(l&&w.bkN(f))b4.lK(c0,"+",new B.m(i+-4,j+-22),A.c1,13)}}for(v=w.f,s=v.length,q=0;q<v.length;v.length===s||(0,B.I)(v),++q){b0=v[q]
r=b0.a*b6+b0.c
o=b0.b*b7+b0.d
b1=new B.m(r,o)
b2=A.h.D(b0.r/0.8,0,1)
n=B.ap(M.OD,F.a0T,b2)
n.toString
m=b0.f
$.T()
l=new B.ar(A.U,A.R,A.X,A.Y,A.W)
l.r=n.gp(0)
l.c=2.4
l.d=A.bG
c0.ah(b1,new B.m(r-b0.e*0.035,o-m*0.035),l)
l=new B.ar(A.U,A.R,A.X,A.Y,A.W)
l.r=n.j(0.35*b2).gp(0)
l.y=A.PM
c0.O(b1,4.5*b2+1,l)}if(A.d.aR(u,new C.bNj())){b3=A.d.cF(u,0,new C.bNk())
$.T()
b7=B.L()
b7.r=D.bkQ.j(0.05+0.09*b3*(0.5+0.5*Math.sin(w.d*22))).gp(0)
c0.aE(new B.a4(0,0,b8,b9),b7)
b7="short|"+B.v(b6)
a9=$.aRr.h(0,b7)
if(a9==null){a9=B.h0(b5,A.cJ,b5,b5,b5,D.fHr,A.a7,A.ca,b5,A.e4,A.cb)
a9.nH(b6-24)
$.aRr.n(0,b7,a9)}a9.a5(c0,new B.m(12,10))}},
lK(d,e,f,g,h){var w,v=null,u=e+"|"+g.m()+"|"+B.v(h)
if($.aRr.a>300)$.aRr.a7(0)
w=$.aRr.h(0,u)
if(w==null){w=B.h0(v,A.cJ,v,v,v,B.cW(v,v,v,v,v,v,v,v,v,B.l(v,v,g,v,v,v,v,v,v,v,v,h,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),e),A.a7,A.ca,v,A.e4,A.cb)
w.eJ()
$.aRr.n(0,u,w)}w.a5(d,f)},
cOv(d,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.aI($.T().r,A.ak,null,null,B.a([],x.v))
e.E(new B.aZ(a0.a,a0.b))
w=C.hUy(a0,a1,a2)
e.E(new B.cm(w.a,w.b,a1.a,a1.b))
v=a2.a
u=Math.abs(v.fr)
t=a2.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ap(A.aQ,F.NR,A.h.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ap(A.aH,A.aQ,A.h.D(r*1.2,0,1))
u.toString
o=u}else o=A.bl
u=B.L()
u.b=A.ad
u.c=a3?7:5
u.d=A.bG
s=a3?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
d.af(e,u)
u=B.L()
u.b=A.ad
u.c=2.4
u.d=A.bG
u.r=(a3?A.c:o).gp(0)
d.af(e,u)
if(q){n=new B.and(new B.vc(B.zW(e),!1,B.a([],x.l))).gH(0)
m=40+A.h.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=this.b
k=0
for(;;){v.jW()
j=t[u].b
j===$&&B.d()
if(!(k<j.a.length()/22))break
j=s.d
v.jW()
i=t[u].b
i===$&&B.d()
i=A.h.F(k*22+j*m*l,i.a.length())
v.jW()
j=t[u].b
j===$&&B.d()
j=j.a.length()
v.jW()
h=t[u].b
h===$&&B.d()
g=A.h.F(i+j,h.a.length())
v.jW()
f=t[u].WR(g)
j=new B.ar(A.U,A.R,A.X,A.Y,A.W)
j.r=A.c.gp(0)
d.O(f.a,2.6,j);++k}}},
a_Z(d,e,f,g){var w,v,u,t
$.T()
w=B.L()
v=g?A.aU:A.a5
u=g?A.b2:A.a9
t=B.ap(e,A.v,0.3)
t.toString
w.san(new B.a6(v,u,A.w,B.a([e,f,e,t],x.O),A.Js,null).az(0,d))
return w},
b1k(d,e,f){return this.a_Z(d,e,f,!0)},
caG(d,e){return this.a_Z(d,A.bl,A.hX,e)},
akB(d,e){var w,v,u
$.T()
w=B.L()
w.san(D.ePq.az(0,B.bY(e,4.2)))
d.O(e,4.2,w)
w=e.a6(0,D.eEC)
v=e.a6(0,D.eEM)
u=B.L()
u.r=A.cU.gp(0)
u.c=1.2
d.ah(w,v,u)},
cql(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=4294626325,b5=4286331629,b6=4287322667,b7=4293870660,b8=$.T(),b9=B.L()
b9.san(D.cbE.az(0,D.fsp))
b9.c=3.4
b9.d=A.bG
w=B.L()
w.r=A.v.j(0.45).gp(0)
w.y=O.oZ
c0.c2(D.fse,w)
if(c2){w=B.bx(D.fsn,A.k2)
v=B.L()
v.r=A.c.j(0.14).gp(0)
c0.aq(w,v)}u=C.hyD(c1)
c0.ah(new B.m(-u,0),D.eG9,b9)
c0.ah(D.eDg,new B.m(u,0),b9)
t=c1.x
w=c1.b
s=D.mN.am(0,w)&&c1.ch!==1
if(s){J.bs(c0.c.save())
c0.bW(0,c1.ch)}switch(w){case"battery":b2.bJg(c0,c1)
break
case"solar":r=B.bx(D.fsg,A.jL)
c0.aq(r,b2.a_Z(new B.a4(r.a,r.b,r.c,r.d),A.d0,A.bP,!1))
b8=B.L()
w=B.ap(D.boU,A.di,0.25+0.55*c1.f)
w.toString
v=B.ap(D.byJ,A.m0,0.3+0.4*c1.f)
v.toString
b8.san(new B.a6(A.aw,A.aD,A.w,B.a([w,v],x.O),b3,b3).az(0,D.abz))
c0.aE(D.abz,b8)
q=B.L()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(p=1;p<6;++p){b8=-34+p*68/6
c0.ah(new B.m(b8,-18),new B.m(b8,18),q)}for(p=1;p<4;++p){b8=-18+p*9
c0.ah(new B.m(-34,b8),new B.m(34,b8),q)}for(p=0;p<6;++p){b8=-34+(p+0.5)*68/6
$.T()
w=new B.ar(A.U,A.R,A.X,A.Y,A.W)
w.r=A.cF.j(0.5).gp(0)
w.c=0.6
c0.ah(new B.m(b8,-18),new B.m(b8,18),w)}b8=new B.aI($.T().r,A.ak,b3,b3,B.a([],x.v))
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
b8.r=A.eI.j(0.9).gp(0)
c0.O(D.eDk,4+4*w,b8)
break
case"crank":o=B.bx(D.fs0,A.h4)
c0.aq(o,b2.b1k(new B.a4(o.a,o.b,o.c,o.d),A.bz,A.bQ))
b8=B.L()
b8.san(D.aTY.az(0,B.bY(A.J,12)))
c0.O(A.J,12,b8)
n=new B.m(Math.cos(c1.y)*22,Math.sin(c1.y)*22)
b8=B.L()
b8.r=A.cF.gp(0)
b8.c=5
b8.d=A.bG
c0.ah(A.J,n,b8)
b8=B.L()
b8.san(D.ePN.az(0,B.bY(n,7)))
c0.O(n,7,b8)
b2.akB(c0,D.eG2)
b2.akB(c0,D.eD4)
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
j=new B.cm(6,-14,2,-30)
m.push(j)
i=k.f
if(i!=null)j.aj(i)
k.ac()
j=new B.cm(-2,-14,0,-2)
m.push(j)
i=k.f
if(i!=null)j.aj(i)
k.ac()
j=new B.bz()
m.push(j)
m=k.f
if(m!=null)j.aj(m)
k.ac()
m=new B.ar(A.U,A.R,A.X,A.Y,A.W)
m.r=A.c.gp(0)
c0.af(k,m)
v.restore()}b8=B.L()
b8.san(D.ePt.az(0,B.bY(A.J,4.5)))
c0.O(A.J,4.5,b8)
break
case"switch":o=B.bx(D.fs8,A.pm)
b8=B.L()
b8.san(D.avL.az(0,new B.a4(o.a,o.b,o.c,o.d)))
c0.aq(o,b8)
b2.akB(c0,D.VD)
b2.akB(c0,D.aOG)
h=c1.w?D.aOG:H.aOw
b8=B.L()
b8.r=A.ax.gp(0)
b8.c=6
b8.d=A.bG
c0.ah(D.VD,h,b8)
b8=B.L()
b8.r=(c1.w?A.bf:A.bP).gp(0)
b8.c=4
b8.d=A.bG
c0.ah(D.VD,h,b8)
b8=B.l_(D.VD,h,0.85)
b8.toString
w=B.L()
w.r=A.aC.gp(0)
c0.O(b8,5,w)
break
case"fuse":g=B.bx(D.aUJ,D.aU2)
b8=B.L()
b8.r=A.fC.j(0.25).gp(0)
c0.aq(g,b8)
b8=B.L()
b8.b=A.ad
b8.c=1.4
b8.r=A.aF.gp(0)
c0.aq(g,b8)
if(!t){b8=B.L()
b8.c=1.6
b8.r=B.ap(A.bP,A.cX,c1.fx).gp(0)
c0.ah(D.aP1,D.aOE,b8)}else{b8=B.L()
b8.c=1.6
b8.r=A.bX.gp(0)
c0.ah(D.aP1,D.eGx,b8)
b8=B.L()
b8.c=1.6
b8.r=A.bX.gp(0)
c0.ah(D.eE7,D.aOE,b8)
b8=B.L()
b8.r=A.e_.gp(0)
c0.O(A.J,6,b8)}for(f=0;f<2;++f){e=B.c_(new B.m(M.hr[f]*22,0),20,9)
c0.aq(B.bx(e,A.hs),b2.a_Z(e,A.de,A.nL,!0))}break
case"pot":b8=B.L()
b8.san(D.ePE.az(0,B.bY(A.J,21)))
c0.O(A.J,21,b8)
for(l=0;l<=10;++l){d=2.356194490192345+l*3.141592653589793*1.5/10
b8=Math.cos(d)
w=Math.sin(d)
v=Math.cos(d)
m=Math.sin(d)
k=new B.ar(A.U,A.R,A.X,A.Y,A.W)
k.r=A.aF.gp(0)
k.c=1.2
c0.ah(new B.m(b8*18,w*18),new B.m(v*22,m*22),k)}b8=B.L()
b8.san(D.ePr.az(0,B.bY(A.J,13)))
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
case"resistor":a1=B.bx(D.aUJ,D.aU2)
b8=B.L()
b8.san(D.cfb.az(0,new B.a4(a1.a,a1.b,a1.c,a1.d)))
c0.aq(a1,b8)
b8=x.O
a2=B.J([47,B.a([B.b_(b4),B.b_(b5),A.v],b8),100,B.a([B.b_(b6),A.v,B.b_(b6)],b8),220,B.a([B.b_(b7),B.b_(b7),B.b_(b6)],b8),470,B.a([B.b_(b4),B.b_(b5),B.b_(b6)],b8),1000,B.a([B.b_(b6),A.v,B.b_(b7)],b8)],x.i,x.bF)
a3=a2.h(0,c1.r)
if(a3==null){b8=a2.h(0,100)
b8.toString
a3=b8}for(p=0;p<3;++p){b8=-14+p*9
w=new B.ar(A.U,A.R,A.X,A.Y,A.W)
w.r=a3[p].gp(0)
c0.aE(new B.a4(b8,-9,b8+4.5,9),w)}b8=B.L()
b8.r=A.aQ.gp(0)
c0.aE(D.fsB,b8)
b8=c1.r
b2.lK(c0,b8>=1000?"1k\u03a9":""+A.h.S(b8)+"\u03a9",D.eFy,A.ab,10)
break
case"bulb":w=c1.fx
if(w>0){v=B.L()
v.r=A.eI.j(0.55*w).gp(0)
v.y=A.Ds
c0.O(H.wb,34,v)}o=B.c_(D.eC_,12,18)
c0.aq(B.bx(o,A.hs),b2.a_Z(o,A.bl,A.dV,!0))
for(p=0;p<3;++p){w=13+p*3.5
v=new B.ar(A.U,A.R,A.X,A.Y,A.W)
v.r=A.dJ.gp(0)
v.c=1
c0.ah(new B.m(-9,w),new B.m(9,w),v)}w=B.L()
if(t)v=A.GN
else{v=B.ap(A.dV,A.i_,c1.fx)
m=c1.fx
v=v.j(0.25+0.7*m)}if(t)m=A.H8
else{m=B.ap(A.d0,A.eI,c1.fx)
m.toString}w.san(new B.bU(A.n_,0.5,A.w,b3,0,B.a([v,m.j(0.18+0.5*c1.fx)],x.O),b3,b3).az(0,B.bY(A.uj,17)))
c0.O(A.uj,17,w)
w=B.L()
w.b=A.ad
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c0.O(A.uj,17,w)
b8=b8.r
w=x.v
m=new B.aI(b8,A.ak,b3,b3,B.a([],w))
m.E(new B.aZ(-9,-12))
m.E(new B.cm(-12,-4,-9,0))
v=B.L()
v.b=A.ad
v.c=2
v.r=A.c.j(0.45).gp(0)
c0.af(m,v)
v=B.L()
v.r=A.cG.gp(0)
v.c=1.4
c0.ah(D.eGr,D.eGt,v)
v=B.L()
v.r=A.cG.gp(0)
v.c=1.4
c0.ah(D.eE0,D.eE3,v)
w=B.a([],w)
a4=new B.aI(b8,A.ak,b3,b3,w)
a4.E(new B.aZ(-4,-2))
for(l=0;l<6;l=a5){a5=l+1
b8=(l&1)===0?-6:1
b8=new B.aq(-4+a5*8/6,-2+b8)
w.push(b8)
v=a4.f
if(v!=null)b8.aj(v)
a4.ac()}$.T()
b8=B.L()
b8.b=A.ad
b8.c=1.8
if(t)w=A.ba
else{w=B.ap(A.d0,D.bq3,c1.fx)
w.toString}b8.r=w.gp(0)
c0.af(a4,b8)
break
case"led":w=c1.fx
if(w>0){v=B.L()
v.r=A.aC.j(0.6*w).gp(0)
v.y=D.bN_
c0.O(A.uj,30,v)}w=B.L()
w.r=A.dV.gp(0)
w.c=2.4
c0.ah(D.eGz,D.eGy,w)
w=B.L()
w.r=A.dV.gp(0)
w.c=2.4
c0.ah(D.eE9,D.eE8,w)
b8=b8.r
w=x.v
a6=new B.aI(b8,A.ak,b3,b3,B.a([],w))
a6.E(new B.aZ(-12,8))
a6.E(new B.aq(-12,-6))
a6.E(new B.cm(0,-26,12,-6))
a6.E(new B.aq(12,8))
a6.E(new B.bz())
v=B.L()
if(t)m=A.jB
else{m=B.ap(A.eA,D.brQ,c1.fx)
m.toString}if(t)k=A.l8
else{k=B.ap(A.kK,A.aC,c1.fx)
k.toString}v.san(new B.a6(A.aw,A.aD,A.w,B.a([m,k],x.O),b3,b3).az(0,D.frt))
c0.af(a6,v)
v=B.L()
v.b=A.ad
v.c=1.2
v.r=A.jW.gp(0)
c0.af(a6,v)
v=B.L()
v.r=A.eu.gp(0)
c0.aE(D.frz,v)
w=new B.aI(b8,A.ak,b3,b3,B.a([],w))
w.E(new B.aZ(-7,-4))
w.E(new B.cm(-6,-12,0,-15))
b8=B.L()
b8.b=A.ad
b8.c=2
b8.r=A.c.j(0.5).gp(0)
c0.af(w,b8)
break
case"motor":a7=new B.a4(-28,-14,20,14)
c0.aq(B.bx(a7,A.iE),b2.b1k(a7,A.an,A.bn))
b8=B.L()
b8.r=A.cx.gp(0)
c0.aE(D.fr0,b8)
b8=B.L()
b8.r=A.cF.gp(0)
c0.aE(D.fr2,b8)
b8=c0.c
J.bs(b8.save())
b8.translate(31,0)
for(l=0;l<3;++l){J.bs(b8.save())
b8.rotate((c1.y+l*2.094)*180/3.141592653589793,0,0)
w=B.c_(H.aOr,15,7)
v=new B.ar(A.U,A.R,A.X,A.Y,A.W)
v.r=A.cX.j(0.9).gp(0)
c0.c2(w,v)
b8.restore()}w=B.L()
w.r=A.ax.gp(0)
c0.O(A.J,3,w)
b8.restore()
b2.lK(c0,"M",D.eG1,A.ax,14)
break
case"buzzer":a8=B.c_(A.J,42,42)
b8=B.L()
b8.san(D.ePI.az(0,a8))
c0.c2(a8,b8)
b8=B.L()
b8.r=A.v.gp(0)
c0.O(A.J,6,b8)
b8=B.L()
b8.b=A.ad
b8.c=1.4
b8.r=A.aT.gp(0)
c0.O(A.J,6,b8)
b2.lK(c0,"+",D.eFV,A.ab,12)
for(b8=b2.b,l=1;l<=3;++l){w=c1.fx
v=w>0?A.h.F(b8.d*14,5):0
v=B.bY(A.J,24+l*5+v)
m=new B.ar(A.U,A.R,A.X,A.Y,A.W)
m.b=A.ad
m.c=2
m.r=A.c5.j(w*(1-l*0.22)).gp(0)
c0.cR(v,-0.7,1.4,!1,m)}break
case"heater":o=B.bx(D.fs4,A.iE)
w=B.L()
w.san(D.ccJ.az(0,new B.a4(o.a,o.b,o.c,o.d)))
c0.aq(o,w)
w=B.a([],x.v)
a9=new B.aI(b8.r,A.ak,b3,b3,w)
a9.E(new B.aZ(-24,0))
for(l=0;l<8;l=a5){b8=(l&1)===0?-10:10
a5=l+1
b8=new B.cm(-24+l*6+3,b8,-24+a5*6,0)
w.push(b8)
v=a9.f
if(v!=null)b8.aj(v)
a9.ac()}b8=c1.fx
if(b8>0.1){$.T()
w=B.L()
w.b=A.ad
w.c=10
w.r=D.bqP.j(0.5*b8).gp(0)
w.y=A.ld
c0.af(a9,w)}$.T()
b8=B.L()
b8.b=A.ad
b8.c=3.2
b8.d=A.bG
b8.r=B.ap(A.mq,Ag.zd,c1.fx).gp(0)
c0.af(a9,b8)
break
case"capacitor":a7=new B.a4(-16,-22,16,18)
b8=B.bx(a7,A.iE)
w=B.L()
w.san(D.avy.az(0,a7))
c0.aq(b8,w)
w=B.L()
w.r=A.bP.gp(0)
c0.aE(D.frJ,w)
for(p=0;p<4;++p)b2.lK(c0,"\u2212",new B.m(-14,-18+p*9),A.ax,11)
b0=new B.a4(-16,-24,16,-17)
c0.aq(B.bx(b0,A.hs),b2.caG(b0,!1))
b8=38*c1.fx
w=18-b8
$.T()
v=B.L()
v.r=A.bf.j(0.5).gp(0)
c0.aE(new B.a4(-3,w,11,w+b8),v)
b2.lK(c0,"1F",H.wb,A.c,11)
break
case"radio":a1=B.bx(D.abz,A.h4)
b8=B.L()
b8.san(D.cfq.az(0,new B.a4(a1.a,a1.b,a1.c,a1.d)))
c0.aq(a1,b8)
b8=B.L()
b8.b=A.ad
b8.c=1.4
b8.r=A.nL.j(0.6).gp(0)
c0.aq(a1,b8)
b8=B.bx(D.fs5,A.jL)
w=B.L()
w.r=A.e5.gp(0)
c0.aq(b8,w)
for(p=0;p<6;++p){b8=-10+p*4.4
w=new B.ar(A.U,A.R,A.X,A.Y,A.W)
w.r=A.mq.gp(0)
w.c=1.4
c0.ah(new B.m(-27,b8),new B.m(-3,b8),w)}b8=B.L()
b8.r=(c1.fx>0?A.h9:A.oI).gp(0)
c0.aE(D.fr7,b8)
if(c1.fx>0){b8=8+A.h.F(b2.b.d*7,18)
w=B.L()
w.r=A.bC.gp(0)
w.c=1.6
c0.ah(new B.m(b8,-13),new B.m(b8,-3),w)}b8=B.L()
b8.san(D.aTY.az(0,B.bY(D.aaw,6)))
c0.O(D.aaw,6,b8)
b8=B.L()
b8.r=A.nL.gp(0)
c0.O(D.eDf,4,b8)
b8=B.L()
b8.r=A.dV.gp(0)
b8.c=1.8
c0.ah(D.eDa,D.aOL,b8)
if(c1.fx>0)for(b8=b2.b,l=1;l<=2;++l){w=B.bY(D.aOL,4+l*5+A.h.F(b8.d*8,5))
v=new B.ar(A.U,A.R,A.X,A.Y,A.W)
v.b=A.ad
v.c=1.4
v.r=A.oP.j(0.7).gp(0)
c0.cR(w,-2.4,1.6,!1,v)}break
case"tv":w=B.bx(D.fsf,A.iE)
v=B.L()
v.r=M.ni.gp(0)
c0.aq(w,v)
b1=B.bx(D.fsc,A.hs)
if(c1.fx>0&&!c1.x){b8=c0.c
J.bs(b8.save())
b8.clipRRect(B.nk(b1),$.mZ(),!0)
b8.translate(-33,-21)
K.h7R(c0,D.fz3,c1.at,b2.b.d,c1.ax,-1,b3,b3)
b8.restore()
b8=B.L()
b8.r=A.bf.gp(0)
c0.O(D.eDr,1.6,b8)}else{w=B.L()
w.r=D.wY.gp(0)
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
c0.aE(D.fry,b8)
break}C.iGP(c0,c1,b2.b.d,b2.gcfl())
if(t)b2.lK(c0,"\u2716",D.eGB,A.aC,14)
if(s)c0.c.restore()},
aTk(d,e,f,g){var w,v,u,t,s,r,q,p,o=new C.bNi(),n=e.d,m=e.b,l=n-m,k=e.a,j=m+l*0.06,i=k+l*0.16,h=new B.a4(k,j,i,j+l*0.88)
j=l*0.08
k=B.bx(h,new B.aQ(j,j))
$.T()
w=B.L()
w.san(o.$2(h,D.dj3))
d.aq(k,w)
i-=0.5
w=l*0.2
k=e.c-w
v=new B.a4(i,m,k,n)
u=k-i
t=i+u*0.66
s=B.L()
s.san(o.$2(v,D.dHV))
d.aE(new B.a4(i,m,t,n),s)
s=B.L()
s.san(o.$2(v,D.dhe))
d.aE(new B.a4(t,m,k,n),s)
k-=0.5
s=m+j
n=l*0.12
r=k+n
q=new B.a4(k,s,r,s+l*0.84)
s=B.L()
s.san(o.$2(q,D.aEX))
d.aE(q,s)
r-=0.5
s=m+l*0.3
p=new B.a4(r,s,r+l*0.1,s+l*0.4)
s=l*0.05
s=B.bx(p,new B.aQ(s,s))
r=B.L()
r.san(o.$2(p,D.aEX))
d.aq(s,r)
r=i+2
s=m+l*0.18
o=B.L()
o.r=A.c.j(0.18).gp(0)
d.aE(new B.a4(r,s,r+(u-4),s+j),o)
if(f){o=l*0.42
this.lK(d,"+",new B.m(t+u*0.08,m+n),A.dl,o)
if(g!=null)this.lK(d,g,new B.m(i+u*0.12,m+w),A.bP,o)}},
bMl(d,e,f){return this.aTk(d,e,!0,f)},
bMk(d,e,f){return this.aTk(d,e,f,null)},
bJg(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a6.e,a4=B.v(a3===A.h.bO(a3)?A.h.S(a3):a3)+"V"
if(a3<=2){a2.bMl(a5,D.fs3,a4)
a2.lK(a5,"\u2212",D.eGb,A.ab,12)
a2.lK(a5,"+",D.eD5,A.aQ,12)
$.T()
w=B.L()
w.r=A.by.gp(0)
a5.aE(D.frS,w)
w=a6.as
v=B.L()
v.r=B.ap(A.aC,A.bf,w).gp(0)
a5.aE(new B.a4(-22,15,-22+44*w,19),v)
if(a6.as<=0.02)a2.lK(a5,"FLAT",D.eFI,A.c1,9)}else if(a3<=4.5){u=a3>3?3:2
t=u*13+6
w=-t/2
v=w+t
s=new B.a4(-31,w,31,v)
r=B.bx(s,A.jL)
$.T()
q=B.L()
q.san(D.ceQ.az(0,s))
a5.aq(r,q)
for(r=w+3,p=0;p<u;++p){q=r+p*13
a2.bMk(a5,new B.a4(-27,q,25,q+11.5),!1)}for(q=r+(t-6),o=0;o<2;++o){n=D.dh8[o]
$.T()
m=new B.ar(A.U,A.R,A.X,A.Y,A.W)
m.r=A.dV.gp(0)
a5.aE(new B.a4(n,r,n+1.6,q),m)}a2.lK(a5,a4,new B.m(-9,v+1),A.aQ,10)
a2.lK(a5,"+",new B.m(25,w-13),A.aQ,11)}else if(a3<=9){l=new B.a4(-18,-16,18,18)
w=B.bx(l,A.hs)
v=$.T()
r=B.L()
r.san(D.cf7.az(0,l))
a5.aq(w,r)
k=new B.a4(-18,-4,18,18)
r=B.rh(k,A.hs,A.hs,A.bJ,A.bJ)
w=B.L()
w.san(D.avy.az(0,k))
a5.aq(r,w)
j=new B.a4(-18,-16,18,-11)
w=B.rh(j,A.bJ,A.bJ,A.hs,A.hs)
r=B.L()
r.san(D.cfy.az(0,j))
a5.aq(w,r)
i=B.L()
i.san(D.ePY.az(0,D.frC))
a5.O(D.aP5,4,i)
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
$.T()
w=B.L()
w.r=A.cz.gp(0)
a5.O(D.eEg,2,w)
a2.lK(a5,"9V",D.eGE,A.c,13)
a2.lK(a5,"+",D.eFE,A.aQ,11)}else{e=new B.a4(-34,-12,34,18)
w=B.bx(e,A.hs)
$.T()
v=B.L()
v.san(D.ccD.az(0,e))
a5.aq(w,v)
d=new B.a4(-36,-18,36,-10)
v=B.bx(d,D.eQ5)
w=B.L()
w.san(D.avO.az(0,d))
a5.aq(v,w)
for(g=0;g<6;++g){w=new B.ar(A.U,A.R,A.X,A.Y,A.W)
w.r=A.ax.gp(0)
a5.O(new B.m(-14+g*5.6,-14),1.6,w)}w=B.L()
w.r=A.bu.j(0.92).gp(0)
a5.aE(D.fsd,w)
for(o=0;o<2;++o){w=D.cHP[o]
n=w.a
a0=w.b
a1=B.c_(new B.m(n,-21),7,8)
w=B.bx(a1,A.Fr)
v=new B.ar(A.U,A.R,A.X,A.Y,A.W)
v.san(D.cdc.az(0,a1))
a5.aq(w,v)
v=B.bx(B.c_(new B.m(n,-24),3.5,9),A.Fr)
w=new B.ar(A.U,A.R,A.X,A.Y,A.W)
w.r=a0.gp(a0)
a5.aq(v,w)}a2.lK(a5,"\u2212",D.eGc,A.ab,11)
a2.lK(a5,"+",D.eD0,A.aC,11)
a2.lK(a5,"12V",H.aP_,A.ax,11)}},
aD(d){return!0}}
C.nh.prototype={
C(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a7(k)
A.d.a7(d.b)
w=B.S(x.N,x.Y)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.I)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.ui(o,r,q,p)
n.atS(o,r,q,p)
k.push(n)
J.iw(s[4],new C.cxn(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.I)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.anN(m,u[1],l,u[3])}}}
C.aln.prototype={
R(){var w=x.N
return new C.alo(B.c3(2000,1,1,0,0,0,0,0),A.J,A.aA,B.S(w,x.gl),B.aR(w),$,A.bH,0,B.a([],x.X),null,null)}}
C.alo.prototype={
agZ(d){var w=this,v=w.ch
if(v!=null)v.a2(0)
w.l(new C.bMW(w,d))
w.ch=B.cC(A.mx,new C.bMX(w))},
t(){var w=this.ch
if(w!=null)w.a2(0)
w=this.db
if(w!=null)w.a2(0)
this.byN()},
a2h(d,e){return this.cob(d,e)},
b5L(d){return this.a2h(d,!1)},
cob(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a2h=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
r=d.at
q=e?A.o2:A.zn
p=d.b
w=3
return B.b(K.hv1(s,r,p,d.ax<3.2,q,$.qY().h(0,p).b),$async$a2h)
case 3:o=g
t.cy=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a2h,v)},
cBi(d){var w=this,v=new B.W(Date.now(),0,!1),u=w.CW.c0(0,d.a,new C.bMY()),t=J.cK(u)
t.K(u,v)
t.br(u,new C.bMZ(v))
if(t.gI(u)>=4){t.a7(u)
t=w.db
if(t!=null)t.a2(0)
w.a3E(d)
return}if(t.gI(u)===3){t=w.db
if(t!=null)t.a2(0)
w.db=B.cC(A.j5,new C.bN_(w,u,d))}},
a1W(d){return this.cmq(d)},
cmq(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a1W=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
w=3
return B.b(C.iI4(s,d.b,A.h.S(A.h.F(t.a.c.d*0.12,1)*100)),$async$a1W)
case 3:t.cy=!1
case 1:return B.h(u,v)}})
return B.i($async$a1W,v)},
a3E(d){return this.cyL(d)},
cyL(d){var w=0,v=B.j(x.H),u=this,t
var $async$a3E=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bV(A.L,null,new C.bMU(u,d),t,!0,!0,!0,null,!1,!1,x.H),$async$a3E)
case 2:return B.h(null,v)}})
return B.i($async$a3E,v)},
Z(){this.a4()
this.bkX()
this.mv()},
bkX(){this.a.c.e=new C.bNf(this)},
mO(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.w5(0,d)
for(w=q.a.c.a,v=w.length,u=q.cx,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=D.mN.h(0,s.b)
if((r==null?null:r.b)!==D.Bn)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.q(0,s.a)&&!q.cy){u.K(0,s.a)
q.a2h(s,!0)}}else u.X(0,s.a)}if((q.ax+=d)>0.16){q.ax=0
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
case"speaker":if(s.fx>0)G.dI(330+A.n.F(110*A.h.bd(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)G.dI((A.h.bd(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
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
q.l(new C.bNg())},
bcY(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
b6r(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.U(w).k("dp<1>"),w=new B.dp(w,v),w=new B.bQ(w,w.gI(0),v.k("bQ<aj.E>")),u=d.a,v=v.k("aj.E"),t=d.b;w.B();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.at
p=s.d
o=D.mN.am(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cOw(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
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
h=C.hUy(new B.m(k,n),new B.m(i,l),p)
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
agX(){this.a.toString
this.l(new C.bMl())},
bvq(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.dkN[v]
if(!A.d.aR(p.a.c.a,new C.bNh(u,w))){o=new B.m(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?A2.Bc:o
s=s?A2.Bc:o
q=t.amZ(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.x=null
G.dI(1200,"",50,0,0.3,"tri")
p.agX()},
C(d){var w,v,u,t,s,r,q,p,o,n=this
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.U_[v].a)
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
w.push(n.b6g(s,!0))
n.a.toString
if(t)w.push(n.b6g(r,!0))
w.push(B.E(B.cg(new C.bNe(n,q)),1))
return B.w(w,A.l,null,A.e,A.i,0,A.p)},
b6g(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=$.qY()
s=t.h(0,u).d.j(0.14)
r=new B.aQ(14,14)
q=new B.ax(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.aA(p,B.q(p,B.w(B.a([B.c(t.h(0,u).c,p,p,p,p,p,p,A.ye,p,p,p),B.c(t.h(0,u).b,p,1,A.a2,p,p,p,A.ot,p,p,p)],n),A.l,p,A.bb,A.i,0,A.p),A.f,p,p,new B.p(s,p,new B.bE(q,q,q,q),new B.bc(r,r,r,r),p,p,A.m),p,p,p,L.oY,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bMm(this,u),p,p,p,p,p,p,!1,A.a4))}return B.q(p,B.co(m,p,p,A.ho,p,p,A.aK,!1),A.f,p,p,new B.p(L.CH,p,new B.bE(A.a1,A.a1,new B.ax(o,1,A.r,-1),A.a1),p,p,p,A.m),p,58,p,p,p,p,p,p)},
cqm(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a2.b,a1=$.qY().h(0,a0)
a1.toString
w=a2.dy
v=a2.fr
u=new C.bMI(e,a1)
t=new C.bMH()
s=B.n(20)
r=a1.d
q=B.K(r.j(0.55),A.r,1.3)
p=B.a([new B.ac(0,A.H,r.j(0.18),A.cy,16)],x.V)
o=r.j(0.18)
n=B.n(10)
n=B.q(A.z,B.c(a1.c,d,d,d,d,d,d,A.ye,d,d,d),A.f,d,d,new B.p(o,d,d,n,d,d,A.m),d,34,d,d,d,d,d,34)
o=B.E(B.c(a1.b,d,1,A.a2,d,d,d,B.l(d,d,r,d,d,d,d,d,d,d,d,15,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d),1)
m=B.n(999)
l=B.K(A.aT,A.r,1)
k=x.p
m=B.a([B.A(B.a([n,A.aa,o,B.aA(d,B.q(d,B.c(e.f?"Less":"About",d,d,d,d,d,d,A.X9,d,d,d),A.f,d,d,new B.p(d,d,l,m,d,d,A.m),d,d,d,d,A.o9,d,d,d),A.y,!1,D.hMz,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.bMt(e),d,d,d,d,d,d,!1,A.a4),B.aJ(d,d,d,d,D.c72,d,d,d,new C.bMu(e,a2),d,d,d,d,"Remove part",A.cp),B.aJ(d,d,d,d,Ar.Rr,d,d,d,new C.bMv(e),d,d,d,d,d,A.cp)],k),A.l,d,A.e,A.i,0,d,d)],k)
if(e.f)A.d.u(m,B.a([B.c(a1.e,d,d,d,d,d,d,A.LF,d,d,d),A.cR,B.c("How it is made: "+a1.f,d,d,d,d,d,d,U.aYI,d,d,d)],k))
m.push(A.aj)
if(a2.x)m.push(D.h1d)
else m.push(new B.C(A.f6,B.A(B.a([t.$2(A.h.a1(Math.abs(a2.dy),2),"VOLTS"),A.b7,t.$2(A.h.a1(Math.abs(a2.fr)*1000,0),"MILLIAMPS"),A.b7,t.$2(A.h.a1(Math.abs(w*v),2),"WATTS")],k),A.l,d,A.e,A.i,0,d,d),d))
j=e.a.c.biO(a2)
if(j!=null){a1=(a2.x?A.aC:A.as).j(0.14)
w=B.n(10)
v=B.K((a2.x?A.aC:A.as).j(0.5),A.r,1)
m.push(new B.C(A.hz,B.q(d,B.c((a2.x?"Why it burnt out":"Why it is not working")+": "+j,d,d,d,d,d,d,D.fY2,d,d,d),A.f,d,d,new B.p(a1,d,v,w,d,d,A.m),d,d,d,d,A.ct,d,d,d),d))}if(C.hsq(a0)){a1=B.a([],k)
for(i=0;i<10;i=h){h=i+1
a1.push(new B.C(A.f6,new E.e5("CH "+h,a2.at===i,new C.bMz(e,a2,i),d,r,d),d))}a1=B.cc(B.A(a1,A.l,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,d,A.aK)
if(e.a.c.rL(a2)){w=F.TO[A.n.F(a2.at,10)]
v=e.f?" Tap the TV 3 times quickly to open the big screen.":""
v="Showing: "+w.a+"."+v
w=v}else w="The TV is off. Give it power with the + dot towards the battery +."
a1=B.a([A.aj,a1,A.at,B.c(w,d,e.f?4:1,A.a2,d,d,d,N.hI,d,d,d)],k)
if(e.a.c.rL(a2))a1.push(new E.fL(A.xt,"Open big screen",new C.bMA(e,a2),r,d))
A.d.u(m,a1)}if(D.mN.am(0,a0)&&!C.hsq(a0)){a1=B.a([A.aj],k)
if(e.f||!e.a.c.rL(a2))a1.push(B.c(e.a.c.rL(a2)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",d,d,d,d,d,d,N.hI,d,d,d))
if(e.a.c.rL(a2))a1.push(new E.fL(A.R5,"Open the "+$.qY().h(0,a0).b,new C.bMB(e,a2),r,d))
A.d.u(m,a1)}if(D.mN.am(0,a0))A.d.u(m,B.a([A.aj,new E.fL(A.DV,"Make it bigger (or tap it 4 times)",new C.bMC(e,a2),r,d)],k))
e.a.toString
a1=a0==="buck"
if(a1||a0==="regulator"){w=A.h.a1(a2.db,1)
if(e.a.c.rL(a2))v=a2.dx
else{e.a.toString
v=a0==="regulator"?5:a2.e}v=B.a([A.aj,B.c("Volts in: "+w+" V   \u2192   Volts out: "+A.h.a1(v,1)+" V",d,d,d,d,d,d,D.fRR,d,d,d)],k)
if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dEO[g]
w=f===A.h.bO(f)?A.h.S(f):f
a1.push(new E.e5(B.v(w)+" V out",a2.e===f,new C.bMD(e,a2,f),d,r,d))}v.push(new B.C(A.kO,B.c0(A.bI,a1,A.br,d,0,6),d))}if(a0==="regulator")v.push(D.hgo)
A.d.u(m,v)}if(e.a.c.Ne(a2)&&!a2.x){a1=A.h.a1(a2.cx,2)
w=A.h.a1(e.a.c.AP(a2),2)
v=e.a.c
o=v.aqA(a2)?"   \u26a0 OVERLOADED":""
a1=B.c("Supplying "+a1+" A of the "+w+" A it can give"+o,d,d,d,d,d,d,B.l(d,d,v.aqA(a2)?A.c1:A.eH,d,d,d,d,d,d,d,d,12.5,d,d,A.C,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
w=B.n(4)
o=A.h.D(a2.cx/e.a.c.AP(a2),0,1)
v=e.a.c.aqA(a2)?A.aC:A.bf
m.push(new B.C(A.hz,B.w(B.a([a1,A.cR,B.bv(w,B.jI(A.by,d,d,5,d,o,new B.lc(v,x.c)),A.ap)],k),A.B,d,A.e,A.i,0,A.p),d))}a1=a0==="battery"
if(a1&&a2.e===1.5){w=a2.as
v=A.h.S(w*100)
if(w<=0.02)w="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else w=w>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.C(A.hz,B.c("Charge: "+v+"%"+w,d,d,d,d,d,d,D.fLe,d,d,d),d))}if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dsD[g]
w=f===1.5?"1.5 V (rechargeable)":B.v(f)+" V"
a1.push(new E.e5(w,a2.e===f,new C.bME(e,a2,f),d,r,d))}m.push(B.c0(A.bI,a1,A.br,d,0,6))}if(a0==="resistor"){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dhC[g]
w=f>=1000?"1 k\u03a9":""+A.n.S(f)+" \u03a9"
a1.push(new E.e5(w,a2.r===f,new C.bMF(e,a2,f),d,r,d))}m.push(B.c0(A.bI,a1,A.br,d,0,6))}if(a0==="solar")m.push(u.$3("Sunlight",a2.f,new C.bMG(a2)))
if(a0==="turbine")m.push(u.$3("Wind",a2.f,new C.bMw(a2)))
if(a0==="pot")m.push(u.$3("Knob",a2.f,new C.bMx(a2)))
if(a0==="ldr")m.push(u.$3("Light",a2.f,new C.bMy(a2)))
if(a0==="crank")m.push(D.hbB)
if(a0==="switch")m.push(B.c(a2.w?"Closed: the loop is joined up.":"Open: the loop is broken.",d,d,d,d,d,d,N.hI,d,d,d))
return B.q(d,new B.cQ(D.bag,B.cc(B.w(m,A.B,d,A.e,A.P,0,A.p),A.t,d,A.y,d,d,d,d,d,A.ah),d),A.f,d,d,new B.p(F.ZT,d,q,s,p,d,A.m),d,d,D.hLR,d,D.bH9,d,d,d)}}
C.bfv.prototype={}
C.X9.prototype={
R(){return new C.aGT(C.hyC(),new B.cB(null,x.gJ),B.aR(x.S))}}
C.aGT.prototype={
Z(){this.a4()
$.aS.cT$.push(this)
this.agY()},
agY(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fV1(),$async$agY)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.iHd(t.d,r)
if(s!=null){t.l(new C.e6C(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$agY,v)},
Ge(){var w,v=this
if(!v.as)return
w=C.ixb(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bJr(w)},
jf(d){if(d!==A.fY)this.Ge()},
t(){$.aS.hP(this)
this.Ge()
this.a3()},
cfn(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.U(v).k("X<1>")
t=new B.X(v,new C.e6L(q),u).gI(0)
s=new B.X(v,new C.e6M(),u).gI(0)
r=new B.X(v,w.gd39(),u).gI(0)
if(t!==q.x||s!==q.y||r!==q.z)q.l(new C.e6N(q,t,s,r))}if(A.n.F(q.w,45)===0)q.Ge()
if(A.n.F(q.w,10)===0){w=q.f
$.aks()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.q(0,q.f)&&$.aks()[q.f].c.$1(q.d)){w.K(0,q.f)
C.Kb("bell",B.a([0,4,7,12],x.t),700,0.45)
q.l(new C.e6O())
q.Ge()
w=q.c
w.toString
w=B.KE(w)
if(w!=null)w.T(B.b2(p,p,p,p,p,A.t,p,B.c("\u2705 Challenge done: "+$.aks()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mv,p,p,p,p,p,p,p,p,p,p))}},
ajO(){var w=0,v=B.j(x.H),u=this,t
var $async$ajO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cf(null,null,!0,null,new C.e6B(u),t,null,!0,!0,x.H),$async$ajO)
case 2:return B.h(null,v)}})
return B.i($async$ajO,v)},
b3p(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.n(12),t=B.K(f.j(0.45),A.r,1)
u=B.a([B.ao(w,B.q(w,B.V(d,f,w,w,w,18),A.f,w,w,new B.p(v,w,t,u,w,w,A.m),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ao(w,h,w,w,w,-1,-3,w))
return B.aA(w,B.hb(new B.a5(40,38,new B.am(A.a0,w,A.ac,A.f,u,w),w),w,e,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4)},
b3o(d,e,f,g){return this.b3p(d,e,f,g,null)},
auz(d,e,f,g){var w=null,v=f.j(0.1),u=B.n(10),t=B.K(f.j(0.4),A.r,1)
return B.E(B.aA(w,B.q(w,B.A(B.a([B.V(d,f,w,w,w,15),A.dY,new B.d1(1,A.c9,B.c(e,w,1,A.a2,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.bb,A.i,0,w,w),A.f,w,w,new B.p(v,w,t,u,w,w,A.m),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),1)},
ai7(){var w=0,v=B.j(x.H),u=this,t
var $async$ai7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a8(t,!1).c9(B.e4(new C.e6x(u),!1,null,x.H)),$async$ai7)
case 2:t=u.e.gbm()
if(t!=null)t.bkX()
if(u.c!=null)u.l(new C.e6y())
u.Ge()
return B.h(null,v)}})
return B.i($async$ai7,v)},
bMs(){var w,v,u,t,s=null,r=this.f
$.aks()
if(r>=11)return s
w=this.r
v=w.q(0,r)
r=v?A.bk:A.aC
u=B.n(9)
t=B.K(L.CH,A.r,1.5)
return B.q(s,B.at(B.c(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.yh,s,s,s),s,s,s),A.f,s,D.ba5,new B.p(r,s,t,u,s,s,A.m),s,s,s,s,A.fd,s,s,s)},
akW(){var w=0,v=B.j(x.H),u=this,t
var $async$akW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bV(F.ng,null,new C.e6K(u),t,!0,!0,!0,A.kz,!1,!1,x.H),$async$akW)
case 2:return B.h(null,v)}})
return B.i($async$akW,v)},
cfo(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.aA(r,B.q(r,D.c3D,A.f,r,r,new B.p(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e6Q(d),r,r,r,r,r,r,!1,A.a4),o=B.n(11)
o=B.q(r,D.bg5,A.f,r,r,new B.p(A.bt,r,B.K(A.aH.j(0.45),A.r,1),o,r,r,A.m),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.q(r,B.w(B.a([B.A(B.a([p,A.aa,o,A.aa,B.E(B.w(B.a([D.hej,B.c(w,r,1,A.a2,r,r,r,B.l(r,r,s.y>0||s.z>0?A.f5:A.hm,r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.B,r,A.e,A.i,0,A.p),1),new C.aAL(s.gcm7(),r),A.uu,s.b3o(A.rr,"Construction Lab: real 3D wiring, plumbing and a house",A.cX,new C.e6R(s,d)),s.b3p(A.m7,"Challenges",A.aQ,s.gcDX(),s.bMs()),s.b3o(A.DQ,"How to play",A.aH,new C.e6S(d,e))],v),A.l,r,A.e,A.i,0,r,r),A.aj,B.A(B.a([s.auz(A.oc,"Circuits",A.bj,s.gcwC()),A.b7,s.auz(A.p1,"Repair",A.aQ,new C.e6T(s)),A.b7,s.auz(I.xr,"Clear",A.c1,new C.e6U(s))],v),A.l,r,A.e,A.i,0,r,r)],v),A.l,r,A.e,A.P,0,A.p),A.f,r,r,new B.p(L.CH,r,new B.bE(A.a1,A.a1,new B.ax(q,1,A.r,-1),A.a1),r,r,r,A.m),r,r,r,r,D.bMk,r,r,r)},
C(d){var w=this,v=null
$.av8="tech"
return B.c6(v,A.c7,B.bn(!0,B.w(B.a([w.cfo(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.hxs(w.d,w.e,w.gcfm(),v),1)],x.p),A.l,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
C.aAL.prototype={
R(){return new C.bdz(null,null)}}
C.bdz.prototype={
gaAX(){var w,v=this,u=v.d
if(u===$){w=B.br(null,A.Z,null,1,null,v)
w.cU(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
t(){this.gaAX().t()
this.bA8()},
C(d){var w=null,v=this.a.c
return B.aA(w,B.hb(new B.a5(42,42,B.c9(this.gaAX(),new C.cPc(this),w),w),w,"AI Inventor: say what you want to make",w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bdy.prototype={
a5(d,e){var w,v,u,t=null,s=e.eq(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.T()
w=B.L()
w.r=A.b0.j(0.25+0.15*o).gp(0)
w.y=O.oZ
d.O(s,r+2+o*2,w)
w=B.L()
w.san(D.ePD.az(0,B.bY(s,r)))
d.O(s,r,w)
v=B.L()
v.b=A.ad
v.c=2.2
v.san(new B.hf(A.z,0,6.283185307179586,A.w,D.d7b,t,new B.n5(p)).az(0,B.bY(s,r)))
d.O(s,r,v)
p=new C.cPb(d)
p.$3(s.a6(0,A.uj),8+o*1.5,1)
q*=4
p.$3(s.a6(0,D.eEn),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a6(0,D.eGI),2.6,0.5+0.5*Math.cos(q))
u=B.h0(t,A.cJ,t,t,t,D.fHx,A.a7,A.ca,t,A.e4,A.cb)
u.eJ()
u.a5(d,s.a6(0,new B.m(-u.b.c/2,5)))},
aD(d){return d.b!==this.b}}
C.aB5.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.aB6.prototype={
t(){var w,v,u
for(w=this.hh$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hg$
w===$&&B.d()
w.t()
this.byM()}}
C.aNz.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bCu.prototype={}
C.h6.prototype={}
C.KF.prototype={
a9(){return"ScreenStyle."+this.b}}
C.mr.prototype={}
C.WT.prototype={
R(){return new C.aGJ(A2.Bc,null,null)}}
C.aGJ.prototype={
gac_(){var w,v=this,u=v.d
if(u===$){w=B.br(null,A.oX,null,1,null,v)
w.ct(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
gacJ(){var w=D.mN.h(0,this.a.c)
return w==null?D.aV1:w},
t(){if(this.f){P.Dh(Y.Ly)
P.bHS()}this.gac_().t()
this.bC0()},
gCd(){var w=this.gac_().y
w=w==null?null:A.n.ao(w.a,1000)
return(w==null?0:w)/1000},
OQ(){var w,v=this,u=v.e
if(u==null)return null
w=F.iz[u].e
if(w===-2)return null
if(w===-1)return A.n.F(v.y+A.h.bd(Math.max(0,v.gCd()-v.z)/10),14)
return w},
Kz(d){this.l(new C.e2y(this,d))},
b6N(d){this.l(new C.e2z(this,d,14))},
aEY(d){var w=this.OQ()
if(w==null)w=d>0?-1:0
return this.b6N(w+d)},
cJ1(d,e){if(e.a<=0||e.b<=0||this.OQ()==null)return
this.l(new C.e2J(this,d,e))},
aeV(){return this.c7r()},
c7r(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aeV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.OQ()
if(q==null){w=1
break}r.a=!1
s=t.c
s.toString
w=3
return B.b(B.bV(A.L,null,new C.e2x(r,q),s,!0,!0,!0,null,!1,!1,x.H),$async$aeV)
case 3:if(t.c!=null&&r.a)t.b6N(q)
case 1:return B.h(u,v)}})
return B.i($async$aeV,v)},
cKA(){var w=this,v=!w.f
w.l(new C.e2K(w,v))
if(v){P.Dh(Y.acH)
P.hth(w.gacJ().b===D.y1)}else{P.Dh(Y.Ly)
P.bHS()}},
cfr(){var w,v=this
if(!v.f)return
B.jH()
v.l(new C.e2L(v))
w=v.c.L(x.q).f
w.N2()
if(v.r)w.T(F.aXa)},
aRG(d){return B.cg(new C.e2q(this,d))},
cpL(d){var w,v=this,u=null,t=v.gCd(),s=t-v.w,r=s<1.4?new K.b17(v.x,s):u
if(F.iz[d].e===-1){w=Math.max(0,t-v.z)
return new C.ah5(d,w,r,A.n.F(v.y+A.h.bd(w/10),14),u)}return new C.ah5(d,t,r,u,u)},
b0l(d){var w=null,v=A.c.j(0.92),u=d*0.42
return B.aE(!1,A.a3,!0,w,B.aM(!1,w,!0,new B.C(new B.R(u,0,u,0),B.A(B.a([B.V(A.kQ,A.ax,w,w,w,d*0.6),new B.a5(d*0.18,w,w,w),B.c("Learn more",w,w,w,w,w,w,B.l(w,w,A.ax,w,w,w,w,w,w,w,w,d*0.48,w,w,A.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,w,w),w),A.nz,!0,w,w,w,w,D.hLT,w,w,w,w,w,w,this.gc7q(),w,w,w,w,w,w,w),A.f,v,0,w,w,A.nz,w,w,A.ai)},
b3q(d,e,f,g){var w=null,v=B.ns(w,A.ba,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w)
return B.aJ(w,w,w,w,B.V(d,A.c,w,w,w,w),w,w,g,f,w,w,w,v,e,w)},
cfq(d,e,f){return this.b3q(d,e,f,null)},
cxV(){var w=this,v=null,u=new C.e2H(),t=A.v.j(0.72),s=B.n(22),r=B.K(w.gacJ().d.j(0.5),A.r,1),q=u.$3(D.bWY,"AD \u2212",new C.e2D(w)),p=u.$3(A.asX,"AD +",new C.e2E(w)),o=u.$5$color$on(A.kP,"HOME",new C.e2F(w),w.gacJ().d,w.e==null),n=w.e
n=n!=null&&F.iz[n].e===-1
return B.q(v,B.A(B.a([q,p,o,u.$5$color$on(A.A0,"ADS",new C.e2G(w),A.c5,n)],x.p),A.l,v,A.e,A.P,0,v,v),A.f,v,v,new B.p(t,v,r,s,v,v,A.m),v,v,D.hLZ,v,A.I2,v,v,v)},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.gacJ(),l=o.f,k=!l||!o.r
l=l?B.aG(d,A.dL,x.w).w.r.b+26:8
w=o.cfq(A.cC,"Back to the board",new C.e2M(d))
v=o.f
u=v?Ao.Iz:A.xt
v=v?"Leave full screen":"Full screen"
v=o.b3q(u,v,o.gbdr(),D.hMM)
u=B.n(20)
t=o.e
s=m.a
r=x.p
q=new B.C(new B.R(8,l,8,0),B.A(B.a([w,A.aa,v,A.aa,B.E(new B.bK(A.a9,n,n,B.q(n,B.c(t==null?s:s+" \xb7 "+F.iz[t].a,n,1,A.a2,n,n,n,Aq.y9,n,n,n),A.f,n,n,new B.p(A.ba,n,n,u,n,n,A.m),n,n,n,n,A.lE,n,n,n),n),1)],r),A.l,n,A.e,A.i,0,n,n),n)
p=m.b===D.y1?o.bOC(m):o.ctg(m)
l=o.f
w=!l
v=l?o.gb3r():n
if(l){l=B.at(p,n,n,n)
u=k?1:0
r=new B.am(A.a0,n,A.b5,A.t,B.a([l,B.ao(n,B.xQ(new B.dn(!k,q,n),A.b_,A.id,u),n,n,0,0,0,n)],r),n)
l=r}else l=B.w(B.a([q,A.aj,o.cxV(),B.E(new B.C(A.cB,B.at(p,n,n,n),n),1)],r),A.l,n,A.e,A.i,0,A.p)
return B.c6(n,A4.a0w,B.bn(w,B.aA(A.bZ,l,A.y,!1,n,v,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!1,A.a4),w,!1,A.ag,w,w),n,!1,!1,n,n)},
cfp(d){var w
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
ctg(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.abI
switch(n.a){case 1:w=44
break
case 2:w=30
break
case 3:w=22
break
case 4:w=26
break
default:w=14
break}v=B.c9(p.gac_(),new C.e2C(p,w,d,m),o)
if(n===D.abJ)v=new B.C_(D.bMZ,v,o)
n=p.cfp(n)
u=p.f?A.hO:Au.a2_
t=m?4:5
s=d.c
r=B.ap(s,A.c,m?0.25:0.08)
r.toString
q=B.ap(s,A.v,0.5)
q.toString
q=B.a([r,s,q],x.O)
s=B.n(w)
r=B.a([new B.ac(0,A.H,d.d.j(0.28),A.J,36)],x.V)
return new B.fK(n,B.q(o,B.q(o,v,A.f,o,o,new B.p(A.v,o,o,B.n(w-3),o,o,A.m),o,o,o,o,A7.I3,o,o,o),A.f,o,o,new B.p(o,o,o,s,r,new B.a6(A.aw,A.aD,A.w,q,o,o),A.m),o,o,o,u,new B.R(t,t,t,t),o,o,o),o)},
bc3(d){var w=Date.now(),v=A.n.D(this.a.d+A.h.bd(this.gCd()*0.4),0,100),u=d.b===D.abI,t=u?34:20,s=u?28:18
return new B.C(new B.R(t,12,s,2),B.cg(new C.e2I(new B.W(w,0,!1),v)),null)},
ayL(d,e,f){var w,v=null,u=d.d,t=B.ap(u,A.v,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.n(e*0.26)
w=x.p
t=B.a([B.q(v,B.at(B.c(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.p(v,v,v,u,D.dzi,new B.a6(A.aw,A.aD,A.w,t,v,v),A.m),v,e,v,v,v,v,v,e)],w)
if(f)A.d.u(t,B.a([A.at,B.c(d.a,v,1,A.a2,v,v,v,D.fOf,v,v,v)],w))
return B.aA(v,B.w(t,A.l,v,A.e,A.P,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.e2v(this,d),v,v,v,v,v,v,!1,A.a4)},
c5h(d,e){return this.ayL(d,e,!0)},
c4Z(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=o===D.aV2||o===D.Bp,m=d.d,l=B.ap(m,A.v,0.55)
l.toString
m=B.ap(m,A.k9,0.5)
m.toString
m=B.a([l,A.dD,m],x.O)
l=q.bc3(d)
w=n?190:138
v=B.n(24)
u=B.K(A.aT,A.r,1)
w=B.aA(p,B.q(p,B.bv(B.n(23),B.b4(p,p,p,new C.ah5(0,q.gCd(),p,p,p),A.hg),A.ap),A.f,p,p,new B.p(p,p,u,v,p,p,A.m),p,w,p,A.ie,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.e2t(q),p,p,p,p,p,p,!1,A.a4)
v=n?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.iz[s]
t.push(new B.cq(A.z,p,p,new B.d7(A.dn,A.z,A.f,q.c5h(r,n?58:54),p),p))}l=B.a([l,A.aj,w,A.af,B.E(B.lh(0.92,t,v,8,12,A.vm,p,!1),1)],u)
if(o!==D.abJ){o=A.c.j(0.16)
w=B.n(28)
l.push(B.q(p,B.cg(new C.e2u(q)),A.f,p,p,new B.p(o,p,p,w,p,p,A.m),p,p,p,D.bHj,H.apM,p,p,p))}return B.q(p,B.w(l,A.l,p,A.e,A.i,0,A.p),A.f,p,p,new B.p(p,p,p,p,p,new B.a6(A.aw,A.aD,A.w,m,p,p),A.m),p,p,p,p,p,p,p,p)},
bHR(d,e){var w=this,v=null,u=w.OQ(),t=w.bc3(d),s=B.E(w.aRG(e),1),r=x.p,q=B.a([B.bT(0,B.aA(v,B.q(v,B.at(B.c(F.iz[e].a,v,v,v,v,v,v,A.LI,v,v,v),v,v,v),A.f,A.v,v,v,v,v,v,v,v,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.e2n(w),v,v,v,v,v,v,!1,A.a4),0,0,0)],r)
if(u!=null)u=!w.f||!w.r
else u=!1
if(u)q.push(B.ao(8,w.b0l(22),v,v,v,10,8,v))
return B.q(v,B.w(B.a([t,s,new B.a5(v,38,new B.am(A.a0,v,A.ac,A.t,q,v),v)],r),A.l,v,A.e,A.i,0,A.p),A.f,A.v,v,v,v,v,v,v,v,v,v,v)},
aUJ(d,e){return B.c9(this.gac_(),new C.e2s(this,e,d),null)},
bOC(d){var w,v,u,t=this,s=null,r=t.a.c,q=r==="carscreen"
if(t.f)return B.qH(t.aUJ(d,q))
r=r==="imac"?26:8
w=d.c
v=B.ap(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.n(q?26:14)
u=B.a([new B.ac(0,A.H,d.d.j(0.25),A.J,36)],x.V)
return new B.fK(1.5384615384615383,B.q(s,B.bv(B.n(q?20:8),t.aUJ(d,q),A.ap),A.f,s,s,new B.p(s,s,s,v,u,new B.a6(A.aw,A.aD,A.w,w,s,s),A.m),s,s,s,A.apG,new B.R(8,8,8,r),s,s,s),s)}}
C.bAw.prototype={
a5(d,e){var w,v,u,t,s,r=e.a,q=e.b,p=0+r,o=0+q
$.T()
w=B.L()
v=this.c
u=B.ap(v,A.v,0.6)
u.toString
t=B.ap(v,A.k9,0.4)
t.toString
w.san(new B.a6(A.aw,A.aD,A.w,B.a([u,A.dD,t],x.O),null,null).az(0,new B.a4(0,0,p,o)))
d.aE(new B.a4(0,0,p,o),w)
for(p=this.b,o=p*0.4,p*=0.3,s=0;s<5;++s){w=Math.sin(o+s)
u=Math.sin(p+s*1.7)
t=new B.ar(A.U,A.R,A.X,A.Y,A.W)
t.r=v.j(0.1).gp(0)
t.y=D.bN3
d.O(new B.m(r*(0.15+0.2*s+0.05*w),q*(0.3+0.3*u)),q*(0.2+0.04*s),t)}},
aD(d){return!0}}
C.ah5.prototype={
a5(d,e){var w=this
return K.MI(d,e,w.b,w.c,w.e,w.d)},
aD(d){return!0}}
C.aPn.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bzi.prototype={}
C.aaF.prototype={
C(d){var w=null
return B.c6(B.eQ(w,w,w,!0,!0,D.akx,w,1,!0,w,0,!1,w,!1,w,w,B.aJ(w,w,w,w,I.auv,w,w,w,new C.cqg(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.hnn,w,w,w,1,w,!0),D.akx,B.co(B.a([D.eIc,B.cg(new C.cqh())],x.p),w,w,D.bIp,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.Yy.prototype={
R(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aIs(w,new B.au(A.ay,$.ay()),$,A.bH,0,B.a([],x.X),null,null)}}
C.aIs.prototype={
Z(){this.a4()
this.mv()},
b9U(d){var w=this.d.length
return A.n.F(A.h.bd(A.h.F(A.h.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
mO(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b9U(v.f)
if(w!==v.x){v.x=w
E.mP("bell",24+A.n.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.l(new C.f3h(v))
C.Kb("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
chm(){if(this.d.length<2)return
this.l(new C.f3d(this))},
b43(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.l(new C.f3c(w,v))},
C(d){var w,v,u,t,s=this,r=null,q=s.gchl(),p=s.d,o=B.E(B.aA(r,B.b4(r,r,r,new C.bAI(p,s.f,r),A.hg),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.w(B.a([o,new B.a5(r,40,B.at(B.c(n,r,r,r,r,r,r,D.fWp,r,r,r),r,r,r),r)],w),A.l,r,A.e,A.i,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.aEp[A.n.F(v,8)].j(0.9)
t=new B.aQ(20,20)
o.push(B.aA(r,B.q(r,B.c(p[v],r,r,r,r,r,r,D.fVB,r,r,r),A.f,r,r,new B.p(u,r,r,new B.bc(t,t,t,t),r,r,A.m),r,r,r,A.f6,A.hd,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.f3f(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a4))}p=A.c.j(0.07)
return E.m0(A.aQ,A.fh,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.w(B.a([new E.fm(o,r,r),B.A(B.a([B.E(B.aN(r,A.M,!1,r,!0,A.t,r,B.aP(),s.e,r,r,r,r,r,2,B.bC(r,new B.b6(4,B.n(14),A.a1),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kC,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.am,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.f3g(s),r,!1,r,r,!1,r,!0,r,A.ae,r,r,r,r,r,r,r,r,r,r,r,A.du,!0,A.a7,r,A.ao,r,r,r,r),1),A.aa,new E.fL(A.ig,"Add",s.gchj(s),A.c,r),A.b7,new E.fL(A.ob,"Spin",q,A.bf,r)],w),A.l,r,A.e,A.i,0,r,r)],w),A.l,r,A.e,A.P,0,A.p))}}
C.bAI.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=k/2,i=e.b,h=i/2+10,g=new B.m(j,h),f=Math.min(k,i)/2-24
i=f+8
k=$.T()
w=B.L()
w.r=D.bmt.gp(0)
d.O(g,i,w)
w=B.L()
w.b=A.ad
w.c=3
w.r=A.aQ.gp(0)
d.O(g,i,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(i=d.c,t=this.c,s=u/2,r=0;r<v;++r){q=t+r*u
p=B.bY(g,f)
o=new B.ar(A.U,A.R,A.X,A.Y,A.W)
o.r=D.aEp[A.n.F(r,8)].gp(0)
d.cR(p,q,u,!0,o)
o=B.bY(g,f)
p=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p.b=A.ad
p.c=2
p.r=A.c.j(0.6).gp(0)
d.cR(o,q,u,!0,p)
J.bs(i.save())
i.translate(j,h)
i.rotate((q+s)*180/3.141592653589793,0,0)
p=w[r]
if(p.length>12)p=A.a.av(p,0,11)+"\u2026"
n=new B.iS(new B.eE(p,l,l,A.cV,l,l,l,l,l,l,D.fIl),A.a7,A.ca,new B.k2(1),l,l,l,l,A.cb,l,A.cJ)
n.eJ()
p=n.b
o=p.c
p=p.a.c
n.a5(d,new B.m(f-o-16,-p.gb4(p)/2))
i.restore()}i=B.L()
i.r=D.ak8.gp(0)
d.O(g,20,i)
i=B.L()
i.b=A.ad
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
h.b=A.ad
h.c=2
h.r=A.ba.gp(0)
d.af(m,h)},
aD(d){return!0}}
C.Xh.prototype={
R(){return new C.box($,A.bH,0,B.a([],x.X),null,null)}}
C.box.prototype={
Z(){this.a4()
this.mv()},
mO(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.Kb("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.VH(900,new C.eak())}w.l(new C.eal())},
b45(d){return this.l(new C.eaf(this,d))},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aY(A.n.v(A.h.ao(m,60)),2,"0")
v=A.a.aY(A.n.v(A.n.F(A.h.cI(m),60)),2,"0")
m=B.b4(n,n,n,new C.bvl(l,A.c1,n),A.aWy)
u=B.c(w+":"+v,n,n,n,n,n,n,D.fN9,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.at(new B.a5(280,280,new B.am(A.z,n,A.ac,A.t,B.a([m,B.w(B.a([u,B.c(t,n,n,n,n,n,n,D.fM3,n,n,n),A.at,B.c("Sessions done: "+o.r,n,n,n,n,n,n,A.wm,n,n,n)],s),A.l,n,A.e,A.P,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.dvT[r]
u.push(new E.e5(""+q+" min",o.d===q,new C.eah(o,q),n,A.c1,n))}m=o.f
p=m?Ab.vF:A.fQ
m=m?"Pause":"Start"
return E.m0(A.c1,A.fh,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.w(B.a([new E.fm(u,n,n),new E.fm(B.a([new E.fL(p,m,new C.eai(o),A.bf,n),new E.fL(A.mF,"Reset",new C.eaj(o),A.c,n)],s),n,n)],s),A.l,n,A.e,A.P,0,A.p))}}
C.bvl.prototype={
a5(d,e){var w,v,u,t,s=e.eq(A.J),r=e.a/2-14
$.T()
w=B.L()
w.b=A.ad
w.c=16
w.r=A.c.j(0.08).gp(0)
d.O(s,r,w)
w=B.bY(s,r)
v=B.L()
v.b=A.ad
v.c=16
v.d=A.bG
u=this.c
t=B.ap(u,A.c,0.4)
t.toString
v.san(new B.hf(A.z,-1.5707963267948966,4.71238898038469,A.w,B.a([u,t,u],x.O),null,null).az(0,B.bY(s,r)))
d.cR(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aD(d){return d.b!==this.b}}
C.Ws.prototype={
R(){return new C.bo6($,A.bH,0,B.a([],x.X),null,null)}}
C.bo6.prototype={
Z(){this.a4()
this.mv()},
mO(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.UI.h(0,p.d)
w.toString
v=A.d.eL(w,new C.dUL())
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
E.mP("flute",D.cgk[t]+5,1400,0.35)}p.l(new C.dUM())},
gchp(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.Lu("Press Start",0.5)
w=D.UI.h(0,this.d)
w.toString
v=A.d.eL(w,new C.dUG())
u=A.h.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.Lu("Breathe in",0.5+0.5*A.dS.aA(0,p))
case 1:return new B.Lu("Hold",1)
case 2:return new B.Lu("Breathe out",1-0.5*A.dS.aA(0,p))
default:return new B.Lu("Hold",0.5)}}}return new B.Lu("",0.5)},
C(d){var w,v,u,t,s,r=this,q=null,p=r.gchp(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.fK.j(0.12+(3-u)*0.05)
n.push(B.q(q,q,A.f,q,q,new B.p(s,q,q,q,u===0?B.a([new B.ac(0,A.H,A.fK.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(B.c(p.a,q,q,q,q,q,q,A.qB,q,q,q))
n.push(B.ao(0,B.c("Breaths: "+r.w,q,q,q,q,q,q,A.kC,q,q,q),q,q,q,q,q,q))
n=B.at(new B.a5(300,340,new B.am(A.z,q,A.ac,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aO(D.UI.geD(D.UI));w.B();){v=w.gP(w)
o.push(new E.e5(v,r.d===v,new C.dUJ(r,v),q,A.fK,q))}w=r.e
v=w?A.vJ:A.fQ
w=w?"Stop":"Start"
o.push(new E.fL(v,w,new C.dUK(r),A.bf,q))
return E.m0(A.fK,A.fh,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new E.fm(o,q,q))}}
C.aLY.prototype={}
C.X8.prototype={
R(){return new C.boo(new B.cB(null,x.A),B.a([],x.au),A.ax,A.c)}}
C.boo.prototype={
C(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aJ(s,s,s,s,I.p9,s,s,s,new C.e66(t,d),s,s,s,s,"Share",s)],r),p=B.bv(B.n(18),new B.e9(B.aA(s,B.b4(s,s,s,new C.bqs(t.e,t.x,s),A.hg),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e67(t),new C.e68(t),s,s,s,s,s,s,s,s,s,new C.e69(t),s,s,s,s,!1,A.a4),t.d),A.ap),o=B.a([],r)
for(w=0;w<9;++w){v=D.d8Y[w]
u=!t.w&&t.f.A(0,v)
o.push(new E.Gy(v,u,new C.e6a(t,v),!1,s))}u=t.r
return E.m0(A.bE,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.C(A.bS,p,s),"DRAW PAD",B.w(B.a([new E.fm(o,s,s),E.jd(A.bE,""+A.h.S(u),"Brush",30,2,new C.e6b(t),u),new E.fm(B.a([new E.e5("Eraser",t.w,new C.e6c(t),A.A1,A.bE,s),new E.fL(A.q7,"Undo",new C.e6d(t),A.c,s),new E.fL(A.eq,"Clear",new C.e6e(t),A.c,s),new E.fL(A.QR,"Paper",new C.e6f(t),A.c,s)],r),s,s)],r),A.l,s,A.e,A.P,0,A.p))}}
C.bqs.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k
$.T()
w=B.L()
w.r=this.c.gp(0)
d.aE(new B.a4(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=x.v,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=$.T()
q=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p=s.a
q.r=p.gp(p)
o=s.b
q.c=o
q.d=A.bG
q.e=A.dQ
q.b=A.ad
n=s.c
if(n.length===1){r=A.d.gH(n)
n=new B.ar(A.U,A.R,A.X,A.Y,A.W)
n.r=p.gp(p)
d.O(r,o/2,n)}else{p=B.a([],u)
m=new B.aI(r.r,A.ak,null,null,p)
p.push(new B.aZ(A.d.gH(n).a,A.d.gH(n).b))
m.ac()
for(l=1;l<n.length-1;){r=n[l]
o=r.a;++l
k=n[l]
r=r.b
k=new B.cm(o,r,(o+k.a)/2,(r+k.b)/2)
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
C.XV.prototype={
R(){var w=x.S
return new C.aHI(B.aR(w),B.aR(w))}}
C.aHI.prototype={
Z(){this.a4()
this.aw5()},
aw5(){var w,v,u=this,t=x.N,s=B.bt(D.dBz,!0,t)
A.d.E8(s)
w=x.S
v=B.U(s).c
t=B.B(B.cJ(s,0,B.dx(u.d,"count",w),v),t)
A.d.u(t,B.cJ(s,0,B.dx(u.d,"count",w),v))
A.d.E8(t)
u.e=t
u.f.a7(0)
u.r.a7(0)
u.w=0
u.x=!1},
chk(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
E.mP("bell",12+A.n.F(d,9),150,0.35)
s.l(new C.eyg(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gH(0)
u=w.gal(0)
w=s.e
w===$&&B.d()
t=x.H
if(w[v]===w[u])B.bM(A.nj,new C.eyh(s,v,u),t)
else{s.x=!0
B.bM(Ai.D5,new C.eyi(s),t)}}},
C(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.d()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.c("Moves: "+r.w,q,q,q,q,q,q,A.Xg,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.n.ao(p,2)+" / "+o
o=x.p
p=B.w(B.a([new B.C(A.zy,B.A(B.a([u,B.c(p,q,q,q,q,q,q,B.l(q,q,w?A.aQ:A.ab,q,q,q,q,q,q,q,q,q,q,q,A.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.l,q,A.iB,A.i,0,q,q),q),B.E(B.iA(!0,q,q,A.y,new B.hZ(v,8,8,1,q),new C.eym(r),r.e.length,A.bg,q,A.ah,!1),1)],o),A.l,q,A.e,A.i,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.daK[t]
o.push(new E.e5(s.b,r.d===s.a,new C.eyn(r,s),q,A.aH,q))}o.push(new E.fL(I.asW,"New game",new C.eyo(r),A.bf,q))
return E.m0(A.aH,A.fh,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new E.fm(o,q,q))}}
C.Y5.prototype={
R(){return new C.aI5(B.a([],x.t))}}
C.aI5.prototype={
cho(d){A.d.a7(this.d)
this.w=!0
this.b44()},
b44(){this.d.push(A.cW.aw(4))
this.e=0
this.a1d()},
a1d(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a1d=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.l(new C.eLo(t))
s=x.H
w=3
return B.b(B.bM(A.m3,null,s),$async$a1d)
case 3:r=t.d,q=B.bt(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aXI(n)
w=7
return B.b(B.bM(new B.bh(1000*Math.max(280,600-r.length*18)),null,s),$async$a1d)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.l(new C.eLp(t))
case 1:return B.h(u,v)}})
return B.i($async$a1d,v)},
aXI(d){this.l(new C.eLm(this,d))
E.mP("marimba",D.cgj[d]+5,450,0.55)
B.bM(A.HH,new C.eLn(this),x.H)},
chq(d){var w,v,u=this
if(!u.w||u.r)return
u.aXI(d)
w=u.d
v=u.e
if(w[v]!==d){G.dI(90,"",600,0,0.5,"saw")
u.l(new C.eLq(u))
return}++v
u.e=v
if(v===w.length){u.l(new C.eLr(u))
B.bM(A.hy,new C.eLs(u),x.H)}},
C(d){var w,v,u,t,s,r,q=this,p=null,o=B.c("Best: "+q.x,p,p,p,p,p,p,V.aZd,p,p,p),n=B.c(q.y,p,p,p,p,p,p,D.fWQ,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aDg[v]
u=u.j(q.f===v?1:0.35)
t=new B.aQ(28,28)
s=q.f===v?B.a([new B.ac(0,A.H,D.aDg[v].j(0.8),A.J,30)],w):p
r=new B.ax(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.aA(p,B.cY(p,p,p,p,A.b_,new B.p(u,p,new B.bE(r,r,r,r),new B.bc(t,t,t,t),s,p,A.m),A.jC,p,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eLt(q,v),p,p,p,p,p,p,!1,A.a4))}o=B.at(new B.C(A.ae,B.w(B.a([o,A.aj,n,A.df,new B.fK(1,B.lh(1,l,2,12,12,p,A.e8,!1),p)],m),A.l,p,A.bb,A.i,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return E.m0(A.bu,A.fh,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new E.fm(B.a([new E.fL(A.fQ,n,q.gchn(q),A.bf,p)],m),p,p))}}
C.Yp.prototype={
R(){return new C.bpG(new B.au(A.ay,$.ay()))}}
C.bpG.prototype={
azH(d){return B.oe(A.h.a1(d,2),B.ag("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eZD(),null)},
C(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.cA(B.aH(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eZM()
l=B.aN(m,A.M,!1,m,!0,A.t,m,B.aP(),l,m,m,m,m,m,2,B.bC(m,m,m,m,m,m,m,m,!0,new B.b6(4,B.n(16),Ad.yH),m,m,m,m,m,m,m,m,m,m,m,new B.b6(4,B.n(16),D.b8A),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.mg,"Bill amount",!0,!0,!1,m,m,m,m,D.fU3,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.am,m,m,m,m,m,A.ei,m,m,m,1,m,m,!1,"\u2022",m,new C.eZI(n),m,m,m,!1,m,m,!1,m,!0,m,A.ae,m,m,m,m,m,m,m,m,m,m,m,A.aYb,!0,A.a7,m,A.ao,m,m,m,m)
k=A.bf.j(0.1)
s=B.n(20)
r=B.K(A.bf.j(0.35),A.r,1)
q=x.p
s=B.co(B.a([l,A.bx,B.q(m,B.w(B.a([t.$2("Tip ("+A.h.S(n.e)+"%)","$"+n.azH(w)),t.$2("Total","$"+n.azH(v)),Aa.P3,t.$3$big("Each of "+n.f+" pays","$"+n.azH(u),!0)],q),A.l,m,A.e,A.i,0,A.p),A.f,m,m,new B.p(k,m,r,s,m,m,A.m),m,m,m,m,A.bR,m,m,m)],q),m,m,A.f7,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cV9[p]
r.push(new E.e5(""+o+"%",A.h.S(n.e)===o,new C.eZJ(n,o),m,A.bf,m))}l=n.f
return E.m0(A.bf,A.fh,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.w(B.a([new E.fm(r,"TIP",m),E.jd(A.aH,""+l,"People",20,1,new C.eZK(n),l),new E.fm(B.a([new E.e5("Round up",n.r,new C.eZL(n),m,A.aQ,m)],q),m,m)],q),A.l,m,A.e,A.P,0,A.p))}}
C.XU.prototype={
R(){var w=B.a([3,5],x.t)
return new C.bp9(w,A.cW,$,A.bH,0,B.a([],x.X),null,null)}}
C.bp9.prototype={
Z(){this.a4()
this.mv()},
mO(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.n.F(A.h.bd(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t
E.Yr("snare",0,0.5)}u.l(new C.ewW())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.hc()
u.w=t
u.x=t?0:3.141592653589793
E.mP("bell",24,400,0.5)}u.l(new C.ewX())}},
C(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bhV(v,o.r>0,n))}u=B.aA(n,B.at(B.c0(A.fX,m,A.br,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ewP(o),n,n,n,n,n,n,!1,A.a4)}else if(m==="coin"){t=A.h.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.K(A.de,A.r,6)
s=B.a([new B.ac(0,A.H,A.aQ.j(0.4),A.J,30)],x.V)
u=B.aA(n,B.at(B.e0(A.z,B.q(A.z,B.c(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fTc,n,n,n),A.f,n,n,new B.p(n,n,v,n,s,D.ePH,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ewQ(o),n,n,n,n,n,n,!1,A.a4)}else{m=o.as
u=B.aA(n,B.at(B.w(B.a([B.c(m===0?"?":""+m,n,n,n,n,n,n,D.fHP,n,n,n),B.c("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kC,n,n,n)],x.p),A.l,n,A.e,A.P,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ewR(o),n,n,n,n,n,n,!1,A.a4)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.dsS[r]
v.push(new E.e5(q.b,o.d===q.a,new C.ewS(o,q),q.c,A.bj,n))}v=B.a([new E.fm(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(E.jd(A.bj,""+s,"Dice",4,1,new C.ewT(o),s))}if(o.d==="num"){s=o.z
s=E.jd(A.bj,""+s,"From",100,1,new C.ewU(o),s)
p=o.Q
A.d.u(v,B.a([s,E.jd(A.bj,""+p,"To",1000,2,new C.ewV(o),p)],m))}return E.m0(A.bj,A.fh,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.w(v,A.l,n,A.e,A.P,0,A.p))}}
C.bhV.prototype={
C(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cW.ai()-0.5)*0.6
else w=0
v=B.n(22)
u=B.a([new B.ac(0,A.H,A.v.j(0.4),A.cy,14)],x.V)
t=B.a([],x.p)
for(s=D.dOB.h(0,A.n.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bK(s[q],p,p,B.q(p,p,A.f,p,p,A.Zl,p,18,p,p,p,p,p,18),p))
return B.eN(A.z,w,B.q(p,new B.am(A.a0,p,A.ac,A.t,t,p),A.f,p,p,new B.p(A.c,p,p,v,u,p,A.m),p,100,p,p,A.bD,p,p,100),p)}}
C.aP9.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bCq.prototype={
t(){var w,v,u
for(w=this.hh$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hg$
w===$&&B.d()
w.t()
this.bBN()}}
C.aPu.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bCw.prototype={
t(){var w,v,u
for(w=this.hh$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hg$
w===$&&B.d()
w.t()
this.bC8()}}
C.aPV.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bCG.prototype={
t(){var w,v,u
for(w=this.hh$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hg$
w===$&&B.d()
w.t()
this.bCA()}}
C.aQn.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a3()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bCP.prototype={
t(){var w,v,u
for(w=this.hh$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a2(0)
w=this.hg$
w===$&&B.d()
w.t()
this.bD2()}}
var z=a.updateTypes(["P(ui)","~()","P(a6H)","az<~>()","P(Dv)","F(ui,F)","H(H,ui)","P(Dr)","P(a0y)","P(adO)","P(a5z)","P(o6)","Yq()","Wr()","aaF()","Y_()","Ye()","Y0()","P(nh)","Wy()","ahp(Z,F)","agd(Z,F)","~(a9<@,@>)","F(Dr,Dr)","o(es)","P(ahc)","P(a2P)","P(DG)","P(aej)","P(agh)","P(ae1)","F(F,ry)","F(F,Dv)","o(ry)","~(ry,ah<o>,F)","ry?(Dv)","XU()","x(o,a2C)","P(acF)","~(Bq)","Yt()","~(xY,o,m,u,H)","~(o,ui)","X9()","XE(Z)","OR(Z)","WT(Z,bA<H>,bA<H>)","Jn(Z)","Yy()","Xh()","Ws()","X8()","XV()","Y5()","Yp()","P(ry)"])
C.fVp.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+18}
C.fJt.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gH(d.e.split(". "))+"."},
$S:z+24}
C.fRo.prototype={
$1(d){var w
if(!this.a.Ne(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fRp.prototype={
$1(d){return d.x},
$S:z+0}
C.fVm.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fVn.prototype={
$1(d){var w
if(!this.a.Ne(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fVo.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.epY.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.epZ.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.y(this.b,this.c))},
$S:0}
C.eq_.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd4(v).Q
v.toString
w.me(v,A.ed,A.id)}},
$S:7}
C.eqa.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a7(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.eqb.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.eq6.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.eq4.prototype={
$2(d,e){var w=this.a
w.r.push(B.cC(B.dw(0,0,0,d,0,0),new C.eq5(w,this.b,e)))},
$S:1963}
C.eq5.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.eq7.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gY6().amZ(0,u[1],u[2],u[3])
u[4].bQ(0,new C.eq2(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
G.dI(700+w.e*120,"",80,0,0.25,"square")
v.l(new C.eq3(w.a,v,w.f,w.r))},
$S:0}
C.eq2.prototype={
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
C.eq3.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.n.D(A.h.bd(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.eq8.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gY6().anN(t,u[1],s,u[3])
G.dI(1500,"",45,0,0.25,"tri")
v=w.b
v.l(new C.eq1(w.a,v,w.e,w.f))},
$S:0}
C.eq1.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.n.D(A.h.bd(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.eq9.prototype={
$0(){G.dI(300,"",360,-1.2,0.3,"square")
var w=this.a
w.l(new C.eq0(w,this.b))},
$S:0}
C.eq0.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.eqe.prototype={
$0(){var w=this.a
return w.l(new C.eqd(w))},
$S:0}
C.eqd.prototype={
$0(){return this.a.at=!0},
$S:0}
C.eqf.prototype={
$0(){var w=this.a
return w.l(new C.eqc(w))},
$S:0}
C.eqc.prototype={
$0(){return this.a.at=!1},
$S:0}
C.eqg.prototype={
$0(){var w=this.a
w.f.sb1(0,this.b)
w.QP()},
$S:0}
C.eqh.prototype={
$0(){return this.a.a_c(this.b)},
$S:0}
C.eqi.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.QP():w.b_G()},
$S:2}
C.eqj.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.QP():w.b_G()},
$S:0}
C.eFv.prototype={
$2(d,e){return d+e},
$S:1964}
C.eFP.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.eFO(w,d))},
$S:576}
C.eFO.prototype={
$0(){var w=B.aK(J.t(this.b,"unlocked"))
w=w==null?null:A.h.M(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.eFQ.prototype={
$0(){},
$S:0}
C.eFR.prototype={
$0(){},
$S:0}
C.eFx.prototype={
$0(){return this.a.l(new C.eFw(this.b,this.c))},
$S:0}
C.eFw.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eFm.prototype={
$1(d){return this.a.cx===d},
$S:26}
C.eFn.prototype={
$1(d){return this.a.cx=d},
$S:32}
C.eFo.prototype={
$1(d){return this.a.cy===d},
$S:26}
C.eFp.prototype={
$1(d){return this.a.cy=d},
$S:32}
C.eFq.prototype={
$1(d){return this.a.db===d},
$S:26}
C.eFr.prototype={
$1(d){return this.a.db=d},
$S:32}
C.eFs.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:26}
C.eFt.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.X(0,d):w.K(0,d)},
$S:32}
C.eFu.prototype={
$0(){var w=this.a
return w.l(w.gaAh())},
$S:0}
C.eFk.prototype={
$1(d){return this.a.$1(!0)},
$S:68}
C.eFl.prototype={
$1(d){return this.a.$1(!1)},
$S:119}
C.eFj.prototype={
$1(d){return this.a.$1(!1)},
$S:149}
C.eFI.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.ch=n
n=B.b4(p,p,p,new C.blQ(o,p),n)
w=this.b
v=C.bF6("WORLD",w.a,w.c)
u=C.bF6("GRAVITY",B.v(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.h.S(t*100)
t=t<0.25?A.c1:A.bf
t=C.bF6("FUEL",""+s+"%",t)
s=o.r.b
r=A.h.S(s*100)
s=s>D.Es[o.db].d?A.c1:A.c
q=x.p
s=B.a([v,u,t,C.bF6("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(C.bF6("HEIGHT",""+A.h.S(A.h.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ao(p,B.A(s,A.l,p,A.iB,A.i,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bKX(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.u4[w].a+".":"You landed on every world!"
v=B.a([new E.fL(A.oe,"Again",new C.eFD(o),A.c,p),new E.fL(A.p1,"Rebuild",new C.eFE(o),A.aQ,p)],q)
if(o.d+1<7)v.push(new E.fL(A.jH,"Next world",new C.eFF(o),A.bf,p))
n.push(C.hMY("Perfect landing!",w,A.bf,v))}if(o.as==="crashed")n.push(C.hMY("Crash!",o.at,A.c1,B.a([new E.fL(A.oe,"Try again",new C.eFG(o),A.bf,p),new E.fL(A.p1,"Rebuild",new C.eFH(o),A.aQ,p)],q)))
return new B.am(A.a0,p,A.b5,A.t,n,p)},
$S:65}
C.eFD.prototype={
$0(){var w=this.a
return w.l(w.gaAh())},
$S:0}
C.eFE.prototype={
$0(){var w=this.a
return w.l(new C.eFA(w))},
$S:0}
C.eFA.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eFF.prototype={
$0(){var w=this.a
return w.l(new C.eFz(w))},
$S:0}
C.eFz.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.eFG.prototype={
$0(){var w=this.a
return w.l(w.gaAh())},
$S:0}
C.eFH.prototype={
$0(){var w=this.a
return w.l(new C.eFy(w))},
$S:0}
C.eFy.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eFJ.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.l(new C.eFC(v,w))},
$S:0}
C.eFC.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.eFK.prototype={
$1(d){return this.a.y=d},
$S:9}
C.eFL.prototype={
$1(d){return this.a.Q=d},
$S:9}
C.eFM.prototype={
$1(d){return this.a.z=d},
$S:9}
C.eFN.prototype={
$0(){var w=this.a
return w.l(new C.eFB(w))},
$S:0}
C.eFB.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dUE.prototype={
$0(){var w=0,v=B.j(x.k),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hc(B.a([C.hHH(),C.hHI()],x.D),x.K),$async$$0)
case 3:r=e
q=t.a
if(q.c==null){w=1
break}s=q.as
s.toString
s.kZ(0,B.cV(J.t(r,1)))
q.l(new C.dUD(q,r))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:40}
C.dUD.prototype={
$0(){return this.a.d=x.m.a(J.t(this.b,0))},
$S:0}
C.dUe.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dUf.prototype={
$0(){return this.a.c22(B.aV(J.t(this.b,"group")))},
$S:0}
C.dUg.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dUh.prototype={
$1(d){return A.a.aY(A.n.fs(A.n.D(A.h.S(d*255),0,255),16),2,"0")},
$S:288}
C.dUF.prototype={
$0(){return E.Yr("kick",0,0.25)},
$S:0}
C.dUi.prototype={
$0(){return this.a.cy=this.b},
$S:0}
C.dUj.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dUk.prototype={
$0(){return E.Yr("kick",0,0.5)},
$S:0}
C.dUl.prototype={
$0(){return G.dI(1300+this.a.RG.aw(900),"",40,0,0.2,"square")},
$S:0}
C.dUn.prototype={
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
u=w}if(u.cy!=null&&!A.d.aR(u.d.e,new C.dUm(u)))u.cy=null
u.id=0},
$S:0}
C.dUm.prototype={
$1(d){var w=this.a
return d.a===w.cy&&w.aCi(d)},
$S:z+10}
C.dUb.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p4
w=u.a
v=u.c
w.R8=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p3.toLowerCase()+"."},
$S:0}
C.dUc.prototype={
$0(){var w=this.a
return w.l(w.gcd0())},
$S:0}
C.dUd.prototype={
$0(){return this.a.agn(null)},
$S:0}
C.dUu.prototype={
$0(){var w=this.a.as
return w==null?null:w.fe(0,B.J(["t","shot"],x.N,x.z))},
$S:0}
C.dUv.prototype={
$0(){return this.a.cKL(this.b.a)},
$S:0}
C.dUw.prototype={
$0(){return this.a.agn(this.b)},
$S:0}
C.dUx.prototype={
$1(d){var w=this.a
return w.l(new C.dUt(w,d))},
$S:6}
C.dUt.prototype={
$0(){return this.a.k4=this.b},
$S:0}
C.dUy.prototype={
$0(){var w=this.a
return w.l(new C.dUs(w,this.b))},
$S:0}
C.dUs.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dUz.prototype={
$0(){var w=this.a
return w.l(new C.dUr(w))},
$S:0}
C.dUr.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.dUA.prototype={
$0(){var w=this.a
return w.l(new C.dUq(w))},
$S:0}
C.dUq.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.fe(0,B.J(["t","reset"],x.N,x.z))
w.cy=null
w.db=0.5
w.dx=0.05
w.fr=1
w.fy=D.N_},
$S:0}
C.dUB.prototype={
$0(){var w=this.a
return w.l(new C.dUp(w))},
$S:0}
C.dUp.prototype={
$0(){var w=this.a,v=!w.p2
w.p2=v
w.p4=0
w.cy=null
if(v)w.b2w()
else w.p3=null},
$S:0}
C.dUC.prototype={
$0(){var w=this.a
return w.l(new C.dUo(w))},
$S:0}
C.dUo.prototype={
$0(){var w=this.a
return w.ok=!w.ok},
$S:0}
C.c9L.prototype={
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
$S:326}
C.c9M.prototype={
$1(d){var w=new B.qN([],[]).og(d.data,!0)
if(x.f.b(w)&&J.t(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:656}
C.fCu.prototype={
$1(d){var w=J.a1(d)
return w.h(d,0)&&w.h(d,1)},
$S:232}
C.fCv.prototype={
$1(d){var w=J.a1(d)
return w.h(d,0)||w.h(d,1)},
$S:232}
C.fCw.prototype={
$1(d){var w=J.a1(d)
return w.h(d,0)!==w.h(d,1)},
$S:232}
C.fCD.prototype={
$1(d){return!J.t(d,0)},
$S:232}
C.fCE.prototype={
$1(d){var w=J.a1(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:232}
C.fCF.prototype={
$1(d){var w=J.a1(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:232}
C.dWk.prototype={
$1(d){return this.a.awU(0)},
$S:7}
C.dVZ.prototype={
$0(){var w=this.b
return this.a.cx=new B.O(w,B.iwA(),B.U(w).k("O<1,F>")).fG(0)},
$S:0}
C.dW1.prototype={
$1(d){return""+d},
$S:80}
C.dWl.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dVX.prototype={
$1(d){return this.a.awU(this.b)},
$S:7}
C.dVY.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.aAN(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.n3(0,d,a1.mx(0.15,0.3))
u=a1.n3(0,d,a1.mx(0.15,0.62))
t=a1.n3(0,"and",a1.mx(0.48,0.46))
s=a1.n3(0,a0,a1.mx(0.82,0.46))
a1=t.a
w.push(new C.o6(v.a,a1,0))
w.push(new C.o6(u.a,a1,1))
w.push(new C.o6(a1,s.a,0))
break
case 1:v=a1.n3(0,d,a1.mx(0.12,0.25))
u=a1.n3(0,d,a1.mx(0.12,0.65))
r=a1.n3(0,"xor",a1.mx(0.46,0.25))
q=a1.n3(0,"and",a1.mx(0.46,0.65))
p=a1.aAM(0,a0,a1.mx(0.82,0.25),0)
o=a1.aAM(0,a0,a1.mx(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.o6(a1,n,0))
m=u.a
w.push(new C.o6(m,n,1))
l=q.a
w.push(new C.o6(a1,l,0))
w.push(new C.o6(m,l,1))
w.push(new C.o6(n,p.a,0))
w.push(new C.o6(l,o.a,0))
break
case 2:k=a1.n3(0,"clock",a1.mx(0.15,0.4))
j=a1.n3(0,"not",a1.mx(0.45,0.65))
s=a1.n3(0,a0,a1.mx(0.82,0.3))
i=a1.n3(0,"buzzer",a1.mx(0.82,0.65))
a1=k.a
w.push(new C.o6(a1,s.a,0))
n=j.a
w.push(new C.o6(a1,n,0))
w.push(new C.o6(n,i.a,0))
break
default:h=a1.n3(0,d,a1.mx(0.12,0.25))
g=a1.n3(0,d,a1.mx(0.12,0.7))
f=a1.n3(0,"nor",a1.mx(0.5,0.25))
e=a1.n3(0,"nor",a1.mx(0.5,0.7))
s=a1.n3(0,a0,a1.mx(0.86,0.25))
a1=f.a
w.push(new C.o6(g.a,a1,0))
n=e.a
w.push(new C.o6(n,a1,1))
w.push(new C.o6(h.a,n,0))
w.push(new C.o6(a1,n,1))
w.push(new C.o6(a1,s.a,0))}},
$S:0}
C.dW2.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.aAN(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.Dr(p,"switch",new B.m(0.14*q.a,r*q.b),0))}o.n3(0,w.e,o.mx(0.86,0.5))},
$S:0}
C.dVS.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dVT.prototype={
$2(d,e){return A.h.aQ(d.c.b,e.c.b)},
$S:z+23}
C.dVU.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dVV.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dVW.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.afE(this.c)
if(v.ax)C.Kb("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gH(w)
v.CW=!1
if(v.ax)G.dI(140,"",250,0,0.3,"square")}},
$S:0}
C.dW3.prototype={
$0(){},
$S:0}
C.dW4.prototype={
$0(){return A.d.cP(this.a.e,this.b)},
$S:0}
C.dW5.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dW0.prototype={
$0(){var w=this.a,v=this.b
w.d.X(0,v)
A.d.br(w.e,new C.dW_(v))
w.cy=null},
$S:0}
C.dW_.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
C.dVR.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.n3(0,this.b,new B.m(w.x.a*(0.3+v.ai()*0.4),w.x.b*(0.2+v.ai()*0.6))).a},
$S:0}
C.dWe.prototype={
$0(){var w=this.a
return w.l(new C.dWd(w))},
$S:0}
C.dWd.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dWf.prototype={
$2(d,e){var w=null,v=this.a,u=new B.av(e.b,e.d)
v.x=u
return B.aA(A.bZ,B.ju(B.b4(w,w,w,new C.bfM(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dW8(v),w,w,w,new C.dW9(v),new C.dWa(v),new C.dWb(v),w,w,w,w,w,w,w,w,w,w,new C.dWc(v),w,w,w,!1,A.a4)},
$S:36}
C.dWc.prototype={
$1(d){return this.a.ceQ(d.b)},
$S:56}
C.dWa.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cor(u)
if(t!=null){v.as=t
v.at=u
return}w=v.aBO(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aI(0,u)}},
$S:50}
C.dWb.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.m(A.h.D(w.a+u.Q.a,46,u.x.a-46),A.h.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:19}
C.dW9.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c5y(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.br(v,new C.dW6(w))
u=t.as
u.toString
v.push(new C.o6(u,w.a,w.b))
B.kc()}}t.z=t.as=null},
$S:38}
C.dW6.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
C.dW8.prototype={
$1(d){return this.a.azA(d.b)},
$S:291}
C.dWg.prototype={
$0(){return this.a.bGG(this.b.a)},
$S:0}
C.dWh.prototype={
$0(){return this.a.awU(this.b.a)},
$S:0}
C.dWi.prototype={
$0(){var w=this.a
return w.l(new C.dW7(w))},
$S:0}
C.dW7.prototype={
$0(){var w=this.a
w.aAN(0)
w.ay=null},
$S:0}
C.dWj.prototype={
$0(){return this.a.cGh(this.b)},
$S:0}
C.d_8.prototype={
$0(){var w=this,v=null,u=B.h0(v,A.cJ,v,v,v,B.cW(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a7,A.ca,v,A.e4,A.cb)
u.eJ()
return u},
$S:276}
C.e1u.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e1t.prototype={
$0(){return this.a.d=null},
$S:0}
C.e1w.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c7w()},
$S:137}
C.e1v.prototype={
$0(){return B.a8(this.a,!1).i1()},
$S:0}
C.fCV.prototype={
$0(){return I.aO5},
$S:z+40}
C.fCW.prototype={
$0(){return D.e44},
$S:z+43}
C.fCX.prototype={
$0(){return D.dYE},
$S:z+13}
C.fCY.prototype={
$0(){return D.evP},
$S:z+14}
C.fCZ.prototype={
$0(){return D.edI},
$S:z+15}
C.fD_.prototype={
$0(){return I.aNX},
$S:z+16}
C.fD0.prototype={
$0(){return D.etB},
$S:z+17}
C.fD1.prototype={
$0(){return I.aO4},
$S:z+12}
C.fD2.prototype={
$0(){return D.e_V},
$S:z+19}
C.fi7.prototype={
$2(d,e){return new C.ahp(e,$.bJQ()[e],new C.fi6(e,this.a),null)},
$S:z+20}
C.fi6.prototype={
$0(){var w=this.a,v=L.aLA.h(0,$.bJQ()[w].a)
$.av8=v==null?"music":v
B.a8(this.b,!1).c9(B.e4(new C.fi4(w),!1,null,x.H))},
$S:0}
C.fi4.prototype={
$1(d){return $.bJQ()[this.a].e.$0()},
$S:42}
C.fi8.prototype={
$2(d,e){return new C.agd(e,D.aDX[e],new C.fi5(this.a,e),null)},
$S:z+21}
C.fi5.prototype={
$0(){return this.a.d.$1(D.aDX[this.b])},
$S:0}
C.fhO.prototype={
$0(){return this.a.as=!0},
$S:0}
C.fhN.prototype={
$0(){return this.a.as=!1},
$S:0}
C.fhD.prototype={
$0(){var w=this.a
w.ch=0
w.as=!1},
$S:0}
C.fhE.prototype={
$1(d){return this.br7(d)},
br7(d){var w=0,v=B.j(x.I),u,t=this,s,r,q
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
r.grd().sp(0,d/t.b)
r.gKg().sp(0,0.5)
w=3
return B.b($.aS.glQ(),$async$$1)
case 3:r=$.aS.bl$.x.h(0,r.f)
s=r==null?null:r.gbf()
if(!(s instanceof B.oD))throw B.Y(B.bd("closed"))
q=C
w=4
return B.b(s.lC(t.c),$async$$1)
case 4:u=q.h0Z(f,t.d,t.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:758}
C.fhF.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.fhC(w,d))},
$S:6}
C.fhC.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.fhG.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.fhM.prototype={
$1(d){var w=this
return new B.eb(new C.fhL(w.a,w.b,w.c,w.d),null)},
$S:20}
C.fhL.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=x.w,a2=B.aG(a3,a0,a1).w
a1=B.aG(a3,a0,a1).w
w=x.p
v=B.a([D.h3C,A.at,D.hau,A.af],w)
for(u=d.d,t=d.a,s=x.G,r=d.b,q=d.c,p=0;p<3;p=o){o=p+1
n=B.c("SLAB "+o,a0,a0,a0,a0,a0,a0,D.fTw,a0,a0,a0)
m=new B.aQ(12,12)
l=new B.aQ(12,12)
l=B.a([new B.bu(1,A.b8,B.aN(a0,A.M,!1,a0,!0,A.t,a0,B.aP(),r[p],a0,a0,a0,a0,a0,2,new B.ef(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Title",a0,A.FP,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.bc(m,m,m,m),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.am,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ae,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jO,!0,A.a7,a0,A.ao,a0,a0,a0,a0),a0),A.aa,new B.bu(2,A.b8,B.aN(a0,A.M,!1,a0,!0,A.t,a0,B.aP(),q[p],a0,a0,a0,a0,a0,2,new B.ef(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Small line",a0,A.FP,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.bc(l,l,l,l),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.am,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ae,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jO,!0,A.a7,a0,A.ao,a0,a0,a0,a0),a0)],w)
m=B.a([],w)
for(k=0;k<30;++k){j=D.dJt[k]
i=new B.aQ(12,12)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.B(t.a.c.d,s)
t.w=h}g=A.d.gH(h).j(0.3)}else g=A.c.j(0.06)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.B(t.a.c.d,s)
t.w=h}f=A.d.gH(h)}else f=A.by
e=new B.ax(f,u[p].A(0,j)?1.8:1,A.r,-1)
m.push(B.aA(a0,B.q(a0,B.V(j,u[p].A(0,j)?A.c:A.aR,a0,a0,a0,22),A.f,a0,a0,new B.p(g,a0,new B.bE(e,e,e,e),new B.bc(i,i,i,i),a0,a0,A.m),a0,a0,a0,A.f6,a0,a0,a0,42),A.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.fhJ(a4,p,u,j),a0,a0,a0,a0,a0,a0,!1,A.a4))}A.d.u(v,B.a([n,A.aj,new B.c1(A.aK,A.e,A.i,A.l,a0,A.p,a0,0,l,a0),A.N,new B.a5(a0,44,B.co(m,a0,a0,a0,a0,a0,A.aK,!1),a0),A.aB],w))}v.push(B.bH(A.BJ,a0,new C.fhK(t,r,q,u,a3),a0))
return new B.C(new B.R(0,0,0,a2.f.d),B.bn(!0,new B.cQ(new B.aY(0,1/0,0,a1.a.b*0.86),B.co(v,a0,a0,A.xc,a0,a0,A.ah,!0),a0),!0,!1,A.ag,!0,!0),a0)},
$S:105}
C.fhJ.prototype={
$0(){var w=this
return w.a.$1(new C.fhI(w.b,w.c,w.d))},
$S:0}
C.fhI.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.fhK.prototype={
$0(){var w=this,v=w.a
v.l(new C.fhH(v,w.b,w.c,w.d))
B.a8(w.e,!1).N(null)},
$S:0}
C.fhH.prototype={
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
C.fhW.prototype={
$0(){var w=this.a
return w.l(new C.fhV(w))},
$S:0}
C.fhV.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.fhX.prototype={
$0(){return E.uX(this.b,this.a.f,"scene")},
$S:0}
C.fhY.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ap(A.d.gH(u),A.d.gal(u),0.4)
u.toString
w=this.a.gKg().x
w===$&&B.d()
return new B.bP(new B.p(v,v,v,v,v,new B.bU(D.b61,0.9,A.w,v,0,B.a([u.j(0.06+0.03*w),A.c7],x.O),v,v),A.m),A.bm,v,v)},
$S:345}
C.fhZ.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.at(new B.d7(A.dn,A.z,A.f,B.c9(new B.hB(B.a([u.grd(),u.gKg()],x.dS)),new C.fhU(u,this.b,v),w),w),w,w,w)},
$S:210}
C.fhU.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.grd().x
r===$&&B.d()
w=r<0.9?1:1-C.bwj(r,0.9,0.98)
v=s.gKg().x
v===$&&B.d()
u=A.dS.aA(0,v)
switch(s.gaAO().a){case 0:s=s.bFQ(t.b,r,u,t.c)
break
case 1:s=s.bX4(t.b,r,u,t.c)
break
case 2:s=s.cLe(t.b,r,u,t.c)
break
case 3:s=s.bIQ(t.b,r,u,t.c)
break
case 4:s=s.bMe(t.b,r,u,t.c)
break
case 5:s=s.ceR(t.b,r,u,t.c)
break
default:s=null}return B.d3(s,w)},
$S:160}
C.fi_.prototype={
$2(d,e){var w=B.acs(this.b),v=this.c.d,u=B.ap(A.d.gH(v),A.d.gal(v),0.4)
u.toString
v=B.ap(A.d.gH(v),A.d.gal(v),0.4)
v.toString
v=w.cUi(u,A.by,v,3.5)
u=this.a
w=u.grd().x
w===$&&B.d()
return B.ZR(B.li(null,null,null,1,0,new C.fhT(u),A.h.D(w,0,1)),v)},
$S:1968}
C.fhT.prototype={
$1(d){var w=this.a
w.grd().sp(0,d)
if(w.as)w.l(new C.fhP(w))},
$S:6}
C.fhP.prototype={
$0(){return this.a.as=!1},
$S:0}
C.fi0.prototype={
$0(){var w=this.a
w.grd().sp(0,0)
w.a0I()},
$S:0}
C.fi1.prototype={
$1(d){var w=this.a
w.l(new C.fhS(w,d))
if(w.as)w.a0I()},
$S:6}
C.fhS.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.fi2.prototype={
$0(){var w=this.a
w.l(new C.fhR(w,this.b))
w.grd().sp(0,0)
if(w.as)w.a0I()},
$S:0}
C.fhR.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.fi3.prototype={
$0(){var w=this.a
return w.l(new C.fhQ(w,this.b))},
$S:0}
C.fhQ.prototype={
$0(){var w=B.B(this.b,x.G)
return this.a.w=w},
$S:0}
C.fhA.prototype={
$2(d,e){return A.h.aQ(d.a,e.a)},
$S:1969}
C.fhB.prototype={
$1(d){return d.b},
$S:1970}
C.dvN.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.dvO.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.dvK.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.dvL.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dvM.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dvP.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dvQ.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dvR.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dvS.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.dvT.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.dvU.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.dvV.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.dvW.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.dvX.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.eEQ.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eEF.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.eEH.prototype={
$2(d,e){return d+e.d*7+A.n.F(A.a.ga_(e.b),97)},
$S:z+31}
C.eEI.prototype={
$2(d,e){return d+A.n.F(A.a.ga_(e.a),31)+A.n.F(A.a.ga_(e.b),17)},
$S:z+32}
C.eEL.prototype={
$1(d){var w=D.nt.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.n.F(d.d,u)]+")":t},
$S:z+33}
C.eEM.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.U(q),o=x.dg,n=B.B(new B.ee(new B.cR(new B.X(q,new C.eEN(d),p.k("X<1>")),new C.eEO(r),p.k("cR<1,ry?>")),o),o.k("M.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aL(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.I)(n),++v){u=n[v]
if(w.length>=6)return
t=B.B(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.eEN.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eEO.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.eEJ.prototype={
$1(d){return D.nt.h(0,d.b).c===D.yB},
$S:z+55}
C.eEK.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eFf.prototype={
$1(d){var w=this.a,v=d.a,u=A.h.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.w5(0,u)
w.a8Y(A.n.ao(v,1000))},
$S:7}
C.eEP.prototype={
$0(){},
$S:0}
C.eEB.prototype={
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
C.eES.prototype={
$1(d){var w=null,v=this.a.b
return B.bn(!0,B.w(B.a([A.N,B.dP(!1,w,w,w,!0,w,w,w,!0,w,w,B.V(D.nt.h(0,v).b,D.nt.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.hmg,w,B.c(D.nt.h(0,v).a,w,w,w,w,w,w,A.hi,w,w,w),w,w,w),B.dP(!1,w,w,w,!0,w,w,w,!0,w,w,A1.auz,w,w,w,w,new C.eER(d),!1,w,w,w,w,w,w,w,D.hdm,w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!0)},
$S:28}
C.eER.prototype={
$0(){B.a8(this.a,!1).N(!0)
return null},
$S:0}
C.eEU.prototype={
$1(d){var w,v,u,t=null,s=B.aG(d,t,x.w).w,r=B.a([D.eI_],x.p)
for(w=0;w<6;++w){v=D.aEj[w]
u=B.c(v.a,t,t,t,t,t,t,A.hi,t,t,t)
r.push(B.dP(!1,t,t,t,!0,t,t,t,!0,t,t,D.c88,t,t,t,t,new C.eET(d,v),!1,t,t,t,t,t,B.c(v.b,t,t,t,t,t,t,A.mg,t,t,t),t,u,t,t,t))}return B.bn(!0,new B.cQ(new B.aY(0,1/0,0,s.a.b*0.7),B.co(r,t,t,D.bM9,t,t,A.ah,!0),t),!0,!1,A.ag,!0,!0)},
$S:28}
C.eET.prototype={
$0(){B.a8(this.a,!1).N(this.b)
return null},
$S:0}
C.eEE.prototype={
$1(d){var w=null
return B.ek(B.a([B.bL(!1,A.dy,w,w,!0,w,w,w,new C.eEC(d),w,w),B.bL(!1,A.FV,w,w,!0,w,w,w,new C.eED(d),w,w)],x.p),w,w,L.mt,D.haH,w,w,w,w,D.hdH,w)},
$S:17}
C.eEC.prototype={
$0(){B.a8(this.a,!1).N(!1)
return null},
$S:0}
C.eED.prototype={
$0(){B.a8(this.a,!1).N(!0)
return null},
$S:0}
C.eFd.prototype={
$0(){var w=this.a
return w.l(new C.eFc(w))},
$S:0}
C.eFc.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eFe.prototype={
$2(d,e){var w,v,u,t=null,s=new B.av(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.nJ(new C.eF3(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.bgZ:t
v=B.a([B.b4(u,t,t,new C.blO(w,v,new C.eF4(r),new C.eF5(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ao(t,new B.dn(!0,B.c9(w,new C.eF6(r),t),t),t,t,10,10,6,t))
if(r.ax)v.push(r.bNY())
return B.aA(A.bZ,B.ju(new B.am(A.a0,t,A.b5,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.eF7(r),t,r.gcpN(),t,new C.eF8(r),new C.eF9(r),new C.eFa(r),t,t,t,t,t,t,t,t,t,t,new C.eFb(r),t,t,t,!1,A.a4)},
$S:36}
C.eF3.prototype={
$0(){return this.a.aeF(this.b)},
$S:0}
C.eFb.prototype={
$1(d){return this.a.cIQ(d.b)},
$S:56}
C.eF9.prototype={
$1(d){return this.a.cpO(d.b)},
$S:50}
C.eFa.prototype={
$1(d){return this.a.cpP(d.b)},
$S:19}
C.eF8.prototype={
$1(d){return this.a.b6h()},
$S:38}
C.eF7.prototype={
$1(d){return this.a.afo(d.b)},
$S:291}
C.eF4.prototype={
$0(){return this.a.z},
$S:674}
C.eF5.prototype={
$0(){return this.a.Q},
$S:459}
C.eF6.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bSl()
if(p.length===0)return A.bK
w=A.v.j(0.55)
v=B.n(14)
u=B.K(A.by,A.r,1)
t=B.a([D.h83,A.cR],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.I)(p),++r)t.push(B.c(p[r],q,2,A.a2,q,q,q,A.aZ9,q,q,q))
return B.q(q,B.w(t,A.B,q,A.e,A.P,0,A.p),A.f,q,q,new B.p(w,q,u,v,q,q,A.m),q,q,q,q,A.hd,q,q,q)},
$S:69}
C.eEG.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.n(12),t=B.K(e.j(0.6),A.r,1),s=x.p
return new B.C(A.dW,B.A(B.a([B.q(w,B.V(d,e,w,w,w,21),A.f,w,w,new B.p(v,w,t,u,w,w,A.m),w,38,w,w,w,w,w,38),A.bc,B.E(B.w(B.a([B.c(f,w,w,w,w,w,w,Ak.Xb,w,w,w),A.bs,B.c(g,w,w,w,w,w,w,F.adk,w,w,w)],s),A.B,w,A.e,A.i,0,A.p),1)],s),A.B,w,A.e,A.i,0,w,w),w)},
$S:1971}
C.eF_.prototype={
$0(){var w=this.a.c
w.toString
return B.a8(w,!1).i1()},
$S:0}
C.eF0.prototype={
$0(){var w=this.a
return w.l(new C.eEZ(w))},
$S:0}
C.eEZ.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eF1.prototype={
$0(){var w=this.a
return w.l(new C.eEY(w))},
$S:0}
C.eEY.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.eF2.prototype={
$0(){var w=this.a
return w.l(new C.eEX(w))},
$S:0}
C.eEX.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eEW.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.nt.gdW(D.nt),w=w.gae(w);w.B();){v=w.gP(w)
if(v.b.c===e)p.push(v.a)}w=B.c(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.I)(p),++r)u.push(s.cDv(p[r]))
return new B.C(A.a1T,B.w(B.a([new B.C(A.apt,w,q),B.A(u,A.l,q,A.e,A.i,0,q,q)],v),A.B,q,A.e,A.i,0,A.p),q)},
$S:z+37}
C.eEV.prototype={
$0(){return this.a.ceY(this.b)},
$S:0}
C.dvJ.prototype={
$0(){var w=this,v=null,u=B.h0(v,A.cJ,v,v,v,B.cW(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a7,A.ca,v,A.e4,A.cb)
u.eJ()
return u},
$S:276}
C.bSZ.prototype={
$1(d){return d.r<=0},
$S:z+38}
C.bT9.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bT4.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bTa.prototype={
$1(d){return this.a.Ne(d)&&!d.x},
$S:z+0}
C.bTb.prototype={
$2(d,e){return Math.max(d,this.a.aEI(e))},
$S:z+6}
C.bTd.prototype={
$2(d,e){var w=this.a
return w.c0(0,d.a+"."+e,new C.bTe(w))},
$S:z+5}
C.bTe.prototype={
$0(){return this.a.a},
$S:93}
C.bTc.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:70}
C.bTf.prototype={
$2(d,e){var w=this.a
return w.c0(0,this.b.$1(this.c.$2(d,e)),new C.bTg(w))},
$S:z+5}
C.bTg.prototype={
$0(){return this.a.a},
$S:93}
C.bT0.prototype={
$2(d,e){var w=this.a
return w.c0(0,d.a+"."+e,new C.bT1(w))},
$S:z+5}
C.bT1.prototype={
$0(){return this.a.a},
$S:93}
C.bT_.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:70}
C.bT2.prototype={
$2(d,e){var w=this.a
return w.c0(0,this.b.$1(this.c.$2(d,e)),new C.bT3(w))},
$S:z+5}
C.bT3.prototype={
$0(){return this.a.a},
$S:93}
C.bSY.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bTh.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bT5.prototype={
$1(d){return d!==this.b&&this.a.aL4(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bT8.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bT7.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bT6.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bNj.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bNk.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.bNi.prototype={
$2(d,e){return new B.a6(A.aU,A.b2,A.w,e,D.diZ,null).az(0,d)},
$S:1972}
C.cxn.prototype={
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
C.h7B.prototype={
$1(d){var w
$.T()
w=B.L()
w.r=d.gp(0)
return w},
$S:1973}
C.h7D.prototype={
$2(d,e){var w
$.T()
w=B.L()
w.b=A.ad
w.c=e
w.r=d.gp(0)
w.d=A.bG
return w},
$S:1974}
C.h7E.prototype={
$5(d,e,f,g,h){return B.bx(new B.a4(d,e,d+f,e+g),new B.aQ(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1975}
C.h7C.prototype={
$3(d,e,f){var w
$.T()
w=B.L()
w.san(new B.a6(A.aU,A.b2,A.w,B.a([e,f],x.O),null,null).az(0,d))
return w},
$S:1976}
C.bMW.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.bMX.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bMV(w))},
$S:0}
C.bMV.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bMY.prototype={
$0(){return B.a([],x.F)},
$S:1977}
C.bMZ.prototype={
$1(d){return this.a.bx(d).a>15e5},
$S:362}
C.bN_.prototype={
$0(){var w,v,u
J.bK_(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.rL(v))if(C.hsq(v.b))w.b5L(v)
else w.a1W(v)
else{u=w.a.c.biO(v)
w.agZ(u==null?"The "+$.qY().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bMU.prototype={
$1(d){return new B.eb(new C.bMR(this.a,this.b),null)},
$S:20}
C.bMR.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p=null,o=this.b,n=new C.bMS(this.a,o,a3),m=$.qY(),l=o.b,k=m.h(0,l).d,j=A.h.S(o.ch/1.04),i=new C.bMT(o,n,k),h=B.n(26),g=B.K(k.j(0.55),A.r,1.4),f=x.V,e=B.a([new B.ac(0,A.H,k.j(0.25),A.J,26)],f),d=B.q(p,p,A.f,p,p,new B.p(A.aT,p,p,B.n(3),p,p,A.m),p,4,p,p,p,p,p,42),a0=k.j(0.2),a1=B.K(k,A.r,1)
a1=B.q(p,B.at(B.c(m.h(0,l).c,p,p,p,p,p,p,A.qz,p,p,p),p,p,p),A.f,p,p,new B.p(a0,p,a1,p,p,p,A.a6),p,42,p,p,p,p,p,42)
a0=x.p
w=B.E(B.w(B.a([B.c(m.h(0,l).b,p,1,A.a2,p,p,p,A.jr,p,p,p),D.h7S],a0),A.B,p,A.e,A.i,0,A.p),1)
v=k.j(0.2)
u=B.n(14)
t=B.K(k,A.r,1)
u=B.A(B.a([a1,A.bc,w,B.q(p,B.c(""+A.h.S(o.ch*100)+"%",p,p,p,p,p,p,B.l(p,p,k,p,p,p,p,p,p,p,p,15,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.p(v,p,t,u,p,p,A.m),p,p,p,p,A.lE,p,p,p)],a0),A.l,p,A.e,A.i,0,p,p)
t=A.v.j(0.35)
v=B.n(18)
w=B.K(A.dA,A.r,1)
a1=30+28*o.ch
s=B.n(8)
r=B.a([k.j(0.85),A.ax],x.O)
q=B.K(A.aF,A.r,2)
f=B.a([new B.ac(0,A.H,k.j(0.5),A.J,14)],f)
v=B.q(p,B.at(B.cY(p,B.at(new B.d7(A.dE,A.z,A.f,new B.C(A.hO,B.c(m.h(0,l).c,p,p,p,p,p,p,A.mV,p,p,p),p),p),p,p,p),p,p,A.b_,new B.p(p,p,q,s,f,new B.a6(A.aw,A.aD,A.w,r,p,p),A.m),A.eK,p,a1*0.58,p,p,p,p,p,a1),p,p,p),A.f,p,p,new B.p(t,p,w,v,p,p,A.m),p,120,p,p,p,p,p,1/0)
i=B.A(B.a([i.$2("1\xd7",1),i.$2("2\xd7",2),i.$2("3\xd7",3),i.$2("4\xd7",4),i.$2("5\xd7",5)],a0),A.l,p,A.e,A.i,0,p,p)
w=B.aJ(p,p,p,p,B.V(A.asN,k,p,p,p,30),p,p,p,new C.bMN(n,o),p,p,p,p,p,p)
t=B.acs(a2).bih(k,A.by,k.j(0.2),A.c,8)
o=B.A(B.a([w,B.E(B.ZR(B.li(p,p,p,5.2,1,n,A.h.D(o.ch,1,5.2)),t),1),B.aJ(p,p,p,p,B.V(A.a4k,k,p,p,p,30),p,p,p,new C.bMO(n,o),p,p,p,p,p,p)],a0),A.l,p,A.e,A.i,0,p,p)
return B.bn(!0,B.q(p,B.w(B.a([d,A.af,u,A.aB,v,A.af,i,A.at,o,B.A(B.a([B.E(B.c(j<=1?"Normal size":"About "+j+" times the normal size",p,p,p,p,p,p,N.hI,p,p,p),1),B.bL(!1,A6.b_d,p,p,!0,p,p,p,new C.bMP(a2),p,B.fu(p,p,k.j(0.25),p,p,p,p,p,p,p,p,A.c,p,p,p,p,p,A.tK,p,p,p,p,p,p,p,p))],a0),A.l,p,A.e,A.i,0,p,p)],a0),A.l,p,A.e,A.P,0,A.p),A.f,p,p,new B.p(p,p,g,h,e,D.cfE,A.m),p,p,p,A.zr,D.bII,p,p,p),!0,!1,A.ag,!0,!0)},
$S:90}
C.bMS.prototype={
$1(d){var w=this.a
w.l(new C.bML(this.b,d))
this.c.$1(new C.bMM())
w.a.toString},
$S:6}
C.bML.prototype={
$0(){return this.a.ch=A.h.D(this.b,1,5.2)},
$S:0}
C.bMM.prototype={
$0(){},
$S:0}
C.bMT.prototype={
$2(d,e){var w=this,v=null,u=Math.abs(w.a.ch-e)<0.05,t=u?w.c.j(0.28):A.c.j(0.06),s=B.n(14),r=u?w.c:A.by
r=B.K(r,A.r,u?2:1)
return B.E(B.aA(v,B.cY(v,B.at(new B.d7(A.dn,A.z,A.f,B.c(d,v,v,v,v,v,v,B.l(v,v,u?w.c:A.ab,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),v,v,v),v,v,A.b_,new B.p(t,v,r,s,v,v,A.m),A.hn,v,v,v,A.jk,A.rf,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.bMQ(w.b,e),v,v,v,v,v,v,!1,A.a4),1)},
$S:697}
C.bMQ.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bMN.prototype={
$0(){return this.a.$1(this.b.ch-0.4)},
$S:0}
C.bMO.prototype={
$0(){return this.a.$1(this.b.ch+0.4)},
$S:0}
C.bMP.prototype={
$0(){B.a8(this.a,!1).N(null)
return null},
$S:0}
C.bNf.prototype={
$2(d,e){var w
if(d==="short"){G.dI(1800,"",120,0,0.55,"noise")
G.dI(200,"",160,2.2,0.4,"saw")
B.fX()
w=this.a
if(w.c!=null)w.agZ("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){G.dI(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.agZ("\u26a0 Overloaded! The "+$.qY().h(0,e.b).b+" can only give about "+A.h.a1(w.a.c.AP(e),2)+" amps but your gadgets are asking for "+A.h.a1(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.agZ("Burnt out! "+e.ay)
G.dI(140,"",320,0,0.6,"noise")
G.dI(900,"",160,1.5,0.35,"square")}},
$S:z+42}
C.bNg.prototype={
$0(){},
$S:0}
C.bMl.prototype={
$0(){},
$S:0}
C.bNh.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bNe.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.at=n
w=o.a.c
v=o.d
u=o.y
t=o.z
s=o.x
r=this.b
q=x.p
n=B.a([B.aA(A.bZ,new B.e9(B.b4(p,p,p,new C.alp(w,v,u,t,s,r==null?A.jK:r,p),n),p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bN8(o),new C.bN9(o),new C.bNa(o),p,p,p,p,p,p,p,p,p,p,new C.bNb(o),p,p,p,!1,A.a4)],q)
if(o.a.c.a.length===0)n.push(D.bgg)
w=o.ay
if(w!=null){v=B.n(14)
u=B.K(A.cX,A.r,1)
n.push(B.ao(p,B.aA(p,B.q(p,B.A(B.a([D.fYO,B.E(B.c(w,p,p,p,p,p,p,D.fQg,p,p,p),1)],q),A.B,p,A.e,A.i,0,p,p),A.f,p,p,new B.p(D.bmm,p,u,v,p,p,A.m),p,p,p,p,A.o5,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bNc(o),p,p,p,p,p,p,!1,A.a4),p,p,10,10,8,p))}if(o.x!=null){o=B.A(B.a([D.bOn,new E.fL(A.A3,"Cut wire",new C.bNd(o),A.c1,p)],q),A.l,p,A.e,A.i,0,p,p)
w=B.n(18)
n.push(B.ao(8,B.q(p,o,A.f,p,p,new B.p(F.ZT,p,B.K(A.by,A.r,1),w,p,p,A.m),p,p,p,p,F.ao6,p,p,p),p,p,12,12,p,p))}else{w=o.e
if(w!=null&&A.d.q(o.a.c.a,w)){w=o.e
w.toString
n.push(B.ao(8,o.cqm(w),p,p,10,10,p,p))}}return B.ju(new B.am(A.a0,p,A.b5,A.t,n,p),A.t,p)},
$S:312}
C.bN9.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.bcY(s)
if(r!=null){t.l(new C.bN6(t,r,d))
return}w=t.b6r(s)
if(w!=null){t.Q=w
v=w.c
u=t.at
t.as=new B.m(v*u.a,w.d*u.b).aI(0,s)
t.l(new C.bN7(t,w))}},
$S:50}
C.bN6.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c.b},
$S:0}
C.bN7.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bNa.prototype={
$1(d){var w=this.a
if(w.y!=null)w.l(new C.bN4(w,d))
else if(w.Q!=null)w.l(new C.bN5(w,d.b.a6(0,w.as)))},
$S:19}
C.bN4.prototype={
$0(){return this.a.z=this.b.b},
$S:0}
C.bN5.prototype={
$0(){var w,v=this.a,u=v.Q
u.toString
w=this.b
u.c=A.h.D(w.a/v.at.a,0.14,0.86)
u=v.Q
u.toString
u.d=A.h.D(w.b/v.at.b,0.08,0.92)},
$S:0}
C.bN8.prototype={
$1(d){var w,v,u,t=this.a
if(t.y!=null&&t.z!=null){w=t.z
w.toString
v=t.bcY(w)
if(v!=null&&v.a!==t.y.a){w=t.a.c
u=t.y
if(w.anN(u.a,u.b,v.a,v.b)!=null)G.dI(1500,"",40,0,0.22,"square")}}t.Q=t.z=t.y=null
t.agX()},
$S:38}
C.bNb.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.b6r(u)
if(t!=null){v.l(new C.bN1(v,t))
if(D.mN.am(0,t.b))v.cBi(t)
w=new B.W(Date.now(),0,!1)
if(v.r===t&&w.bx(v.w).a<38e4){v.l(new C.bN2(v,t))
v.r=null}else{v.r=t
v.w=w}v.a.toString
return}v.l(new C.bN3(v,v.cOw(u)))},
$S:56}
C.bN1.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.x=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
G.dI(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
G.dI(200,"",70,0,0.2,"saw")}},
$S:0}
C.bN2.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.bN3.prototype={
$0(){var w=this.a
w.x=this.b
w.e=w.d=null},
$S:0}
C.bNc.prototype={
$0(){var w=this.a
return w.l(new C.bN0(w))},
$S:0}
C.bN0.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bNd.prototype={
$0(){var w=this.a
A.d.X(w.a.c.b,w.x)
w.x=null
G.dI(300,"",50,0,0.35,"noise")
w.agX()},
$S:0}
C.bMm.prototype={
$0(){return this.a.bvq(this.b)},
$S:0}
C.bMI.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.A(B.a([B.c(d,w,w,w,w,w,w,D.fK9,w,w,w),B.E(B.li(this.b.d,w,w,g,h,new C.bMK(this.a,f),A.h.D(e,h,g)),1)],x.p),A.l,w,A.e,A.i,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1978}
C.bMK.prototype={
$1(d){var w=this.a
w.l(new C.bMJ(this.b,d))
w.a.toString},
$S:6}
C.bMJ.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bMH.prototype={
$2(d,e){var w=null,v=A.c.j(0.06),u=B.n(10)
return B.E(B.q(w,B.w(B.a([B.c(d,w,w,w,w,w,w,A.ada,w,w,w),B.c(e,w,w,w,w,w,w,D.fN1,w,w,w)],x.p),A.l,w,A.e,A.i,0,A.p),A.f,w,w,new B.p(v,w,w,u,w,w,A.m),w,w,w,w,A.vj,w,w,w),1)},
$S:113}
C.bMt.prototype={
$0(){var w=this.a
return w.l(new C.bMs(w))},
$S:0}
C.bMs.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.bMu.prototype={
$0(){var w=this.a
w.a.c.X(0,this.b)
w.e=w.d=null
G.dI(260,"",70,0,0.35,"noise")
w.agX()},
$S:0}
C.bMv.prototype={
$0(){var w=this.a
return w.l(new C.bMr(w))},
$S:0}
C.bMr.prototype={
$0(){return this.a.e=null},
$S:0}
C.bMz.prototype={
$0(){this.a.l(new C.bMq(this.b,this.c))
G.dI(900,"",40,0,0.3,"noise")},
$S:0}
C.bMq.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bMA.prototype={
$0(){return this.a.b5L(this.b)},
$S:0}
C.bMB.prototype={
$0(){return this.a.a1W(this.b)},
$S:0}
C.bMC.prototype={
$0(){return this.a.a3E(this.b)},
$S:0}
C.bMD.prototype={
$0(){var w=this.a
w.l(new C.bMp(this.b,this.c))
w.a.toString},
$S:0}
C.bMp.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bME.prototype={
$0(){var w=this.a
w.l(new C.bMo(this.b,this.c))
w.a.toString},
$S:0}
C.bMo.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bMF.prototype={
$0(){var w=this.a
w.l(new C.bMn(this.b,this.c))
w.a.toString},
$S:0}
C.bMn.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bMG.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bMw.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bMx.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bMy.prototype={
$1(d){return this.a.f=d},
$S:6}
C.fCG.prototype={
$1(d){return d.aKG("bulb")},
$S:z+2}
C.fCH.prototype={
$1(d){return d.qs(0,"switch")&&d.aKG("bulb")},
$S:z+2}
C.fCI.prototype={
$1(d){return A.d.aR(d.a,new C.fCt())},
$S:z+2}
C.fCt.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.fCJ.prototype={
$1(d){return d.qs(0,"resistor")&&A.d.aR(d.a,new C.fCs())},
$S:z+2}
C.fCs.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fCK.prototype={
$1(d){return!d.qs(0,"battery")&&d.aKG("bulb")},
$S:z+2}
C.fCx.prototype={
$1(d){return A.d.aR(d.a,new C.fCr())},
$S:z+2}
C.fCr.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fCy.prototype={
$1(d){return A.d.aR(d.a,new C.fCq())},
$S:z+2}
C.fCq.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fCz.prototype={
$1(d){return A.d.aR(d.a,new C.fCp())},
$S:z+2}
C.fCp.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fCA.prototype={
$1(d){var w=d.a
return A.d.aR(w,new C.fCn())&&A.d.aR(w,new C.fCo())&&d.qs(0,"buck")},
$S:z+2}
C.fCn.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fCo.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fCB.prototype={
$1(d){var w=d.a
return A.d.aR(w,new C.fCl())&&A.d.aR(w,new C.fCm())},
$S:z+2}
C.fCl.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fCm.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fCC.prototype={
$1(d){return A.d.aR(d.a,new C.fCk())},
$S:z+2}
C.fCk.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.e6C.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a7(0)
w.u(0,v.b)},
$S:0}
C.e6L.prototype={
$1(d){var w=this.a.d
return w.aL4(d)&&w.rL(d)},
$S:z+0}
C.e6M.prototype={
$1(d){return d.x},
$S:z+0}
C.e6N.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.e6O.prototype={
$0(){},
$S:0}
C.e6B.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.n(22),o=x.p,n=B.a([D.hfJ,A.at,D.h_G,A.S],o)
for(w=this.a,v=0;v<19;++v){u=D.Tz[v]
t=A.c.j(0.06)
s=new B.aQ(14,14)
r=new B.ax(A.by,1,A.r,-1)
n.push(B.aA(q,B.q(q,B.w(B.a([B.c(u.a,q,q,q,q,q,q,A.iX,q,q,q),A.bs,B.c(u.b,q,3,A.a2,q,q,q,D.fR3,q,q,q)],o),A.B,q,A.e,A.i,0,A.p),A.f,q,q,new B.p(t,q,new B.bE(r,r,r,r),new B.bc(s,s,s,s),q,q,A.m),q,q,q,A.cB,A.bg,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.e6A(w,d,u),q,q,q,q,q,q,!1,A.a4))}return B.eB(q,F.ng,new B.C(A.bR,new B.a5(340,q,B.co(n,q,q,q,q,q,A.ah,!0),q),q),q,q,q,q,q,A.db,q,new B.ba(p,A.a1),q)},
$S:46}
C.e6A.prototype={
$0(){B.a8(this.b,!1).N(null)
var w=this.a
w.l(new C.e6z(w,this.c))
G.dI(800,"",120,-0.5,0.3,"square")},
$S:0}
C.e6z.prototype={
$0(){var w=this.a.d
this.b.C(w)
w.bnY()},
$S:0}
C.e6x.prototype={
$1(d){return new C.XE(this.a.d,null)},
$S:z+44}
C.e6y.prototype={
$0(){},
$S:0}
C.e6K.prototype={
$1(d){return new B.eb(new C.e6J(this.a),null)},
$S:20}
C.e6J.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.aks(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.q(0,k),f=g?A.bf:A.aH
k=B.aG(d,m,x.w).w
w=l.r
v=x.p
u=B.a([B.A(B.a([D.hcQ,A.aX,B.c(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.C,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.l,m,A.e,A.i,0,m,m),A.N,B.bv(B.n(4),B.jI(A.by,m,m,5,m,w.a/11,new B.lc(f,x.c)),A.ap),A.af],v)
if(h)u.push(D.h2Z)
else{h=f.j(0.1)
t=B.n(14)
s=B.K(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.c(r+" Now: "+i.a,m,m,m,m,m,m,Am.LR,m,m,m)
q=B.c(g?"Well done! You did it.":i.b,m,m,m,m,m,m,A_.FQ,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.q(m,B.w(B.a([r,A.at,q,new B.bK(A.a9,m,m,B.bL(!1,B.c(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.C,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.e6H(l,e),m,m),m)],v),A.B,m,A.e,A.i,0,A.p),A.f,m,m,new B.p(h,m,s,t,m,m,A.m),m,m,m,m,A.bg,m,m,m))}u.push(A.S)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aQ(12,12)
n=new B.ax(o===l.f?f.j(0.6):A.dA,1,A.r,-1)
if(w.q(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
s=B.c(s,m,m,m,m,m,m,A.adj,m,m,m)
r=j[o]
q=w.q(0,o)?A.aF:A.c
u.push(B.aA(m,B.q(m,new B.c1(A.aK,A.e,A.i,A.l,m,A.p,m,0,B.a([s,A.ar,new B.bu(1,A.b8,B.c(r.a,m,m,m,m,m,m,new B.G(!0,q,m,m,m,m,13,A.C,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],v),m),A.f,m,m,new B.p(h,m,new B.bE(n,n,n,n),new B.bc(t,t,t,t),m,m,A.m),m,m,m,A.eC,A.o5,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.e6I(l,o,e),m,m,m,m,m,m,!1,A.a4))}return B.bn(!0,new B.cQ(new B.aY(0,1/0,0,k.a.b*0.75),B.co(u,m,m,A.xc,m,m,A.ah,!0),m),!0,!1,A.ag,!0,!0)},
$S:90}
C.e6H.prototype={
$0(){var w=this.a
w.l(new C.e6F(w))
this.b.$1(new C.e6G())
w.Ge()},
$S:0}
C.e6F.prototype={
$0(){var w=this.a
$.aks()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.e6G.prototype={
$0(){},
$S:0}
C.e6I.prototype={
$0(){var w=this.a
w.l(new C.e6D(w,this.b))
this.c.$1(new C.e6E())
w.Ge()},
$S:0}
C.e6D.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e6E.prototype={
$0(){},
$S:0}
C.e6Q.prototype={
$0(){return B.a8(this.a,!1).i1()},
$S:0}
C.e6R.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.iL("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a8(t.b,!1).c9(B.e4(new C.e6P(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.e6P.prototype={
$1(d){B.j8("construction")
return As.i89()},
$S:z+45}
C.e6S.prototype={
$0(){return E.hUg(this.a,"ELECTRONICS LAB",this.b,A.aH)},
$S:0}
C.e6T.prototype={
$0(){var w=this.a
return w.l(w.d.gd5x())},
$S:0}
C.e6U.prototype={
$0(){var w=this.a,v=w.d
w.l(v.gtF(v))
w.Ge()},
$S:0}
C.cPc.prototype={
$2(d,e){var w=null,v=this.a.gaAX().x
v===$&&B.d()
return B.b4(w,w,w,new C.bdy(v,w),A.aA)},
$S:52}
C.cPb.prototype={
$3(d,e,f){var w=new B.aI($.T().r,A.ak,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.E(new B.aZ(v,t))
w.E(new B.cm(v,u,v+e,u))
w.E(new B.cm(v,u,v,u+e))
w.E(new B.cm(v,u,v-e,u))
w.E(new B.cm(v,u,v,t))
w.E(new B.bz())
t=B.L()
t.r=A.c.j(f).gp(0)
this.a.af(w,t)},
$S:453}
C.hcM.prototype={
$3(d,e,f){return new C.WT(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+46}
C.hcN.prototype={
$4(d,e,f,g){var w=x.a
return new B.de(e,!1,B.iE(A.z,g,null,new B.bk(B.cN(A.cn,e,null),new B.bq(0.85,1,w),w.k("bk<bS.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
C.e2y.prototype={
$0(){var w=this.a
w.e=this.b
w.y=0
w.z=w.gCd()},
$S:0}
C.e2z.prototype={
$0(){var w,v=this.a
v.e=0
w=this.c
v.y=A.n.F(A.n.F(this.b,w)+w,w)
v.z=v.gCd()},
$S:0}
C.e2J.prototype={
$0(){var w=this.a,v=this.b,u=this.c
w.x=new B.m(v.a/u.a,v.b/u.b)
w.w=w.gCd()},
$S:0}
C.e2x.prototype={
$1(d){return new K.Jn(F.Tk[this.b],new C.e2w(this.a,d),null)},
$S:z+47}
C.e2w.prototype={
$0(){this.a.a=!0
B.a8(this.b,!1).e6()},
$S:0}
C.e2K.prototype={
$0(){var w=this.a
w.f=this.b
w.r=!1},
$S:0}
C.e2L.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.e2q.prototype={
$2(d,e){var w=null,v=this.a,u=v.f?v.gb3r():w
return B.aA(A.bZ,B.b4(w,w,w,v.cpL(this.b),A.hg),A.y,!1,D.hM3,u,w,w,w,new C.e2o(v),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e2p(v,e),w,w,w,!1,A.a4)},
$S:36}
C.e2p.prototype={
$1(d){var w=this.b
return this.a.cJ1(d.b,new B.av(B.aU(1/0,w.a,w.b),B.aU(1/0,w.c,w.d)))},
$S:56}
C.e2o.prototype={
$1(d){var w,v=d.d
if(v==null)v=0
if(Math.abs(v)>120&&this.a.OQ()!=null){w=v<0?1:-1
this.a.aEY(w)}},
$S:38}
C.e2H.prototype={
$5$color$on(d,e,f,g,h){var w=null,v=h?g.j(0.28):A.c.j(0.08),u=B.n(14),t=B.K(h?g:A.aT,A.r,1)
return B.aA(w,B.q(w,B.w(B.a([B.V(d,g,w,w,w,20),A.rR,B.c(e,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,9.5,w,w,A.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p),A.f,w,w,new B.p(v,w,t,u,w,w,A.m),w,w,w,A.jk,A.jY,w,w,56),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:679}
C.e2D.prototype={
$0(){return this.a.aEY(-1)},
$S:0}
C.e2E.prototype={
$0(){return this.a.aEY(1)},
$S:0}
C.e2F.prototype={
$0(){return this.a.Kz(null)},
$S:0}
C.e2G.prototype={
$0(){return this.a.Kz(0)},
$S:0}
C.e2M.prototype={
$0(){return B.a8(this.a,!1).i1()},
$S:0}
C.e2C.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.n(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c4Z(o):q.bHR(o,p),m=x.p
p=B.a([B.p_(new B.mj(n,new B.bf(p,x.aC)),A.pU,B.qc(),A.b_,A.b_,new C.e2A())],m)
n=t.d
if(n){w=A.h.F(q.gCd(),12)<4
v=w?150:96
u=B.n(16)
m=B.a([A.ar],m)
if(w)m.push(D.bO9)
else m.push(A.aX)
m.push(B.q(s,s,A.f,s,s,new B.p(w?A.bf:A.ax,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.ar)
p.push(B.ao(s,B.at(B.cY(s,B.A(m,A.l,s,A.e,A.i,0,s,s),s,s,A.eg,new B.p(A.v,s,s,u,s,s,A.m),A.nj,s,28,s,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.Bo)p.push(B.ao(s,B.at(B.q(s,s,A.f,s,s,A.N7,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.Bp)p.push(B.ao(s,B.q(s,s,A.f,s,s,A.N7,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ao(6,B.aA(s,B.at(B.q(s,s,A.f,s,s,new B.p(A.c.j(0.75),s,s,B.n(3),s,s,A.m),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e2B(q),s,s,s,s,s,s,!1,A.a4),s,s,0,0,s,s))
return B.bv(r,new B.am(A.a0,s,A.b5,A.t,p,s),A.ap)},
$S:491}
C.e2A.prototype={
$2(d,e){var w=x.a
return new B.de(e,!1,B.iE(A.z,d,null,new B.bk(e,new B.bq(0.92,1,w),w.k("bk<bS.T>"))),null)},
$S:376}
C.e2B.prototype={
$0(){return this.a.Kz(null)},
$S:0}
C.e2I.prototype={
$2(d,e){var w,v,u,t,s=null,r=Math.max(e.b,230),q=this.a
q=B.a([B.c(A.a.aY(A.n.v(B.cX(q)),2,"0")+":"+A.a.aY(A.n.v(B.fx(q)),2,"0"),s,s,s,s,s,s,A.uD,s,s,s),A.aX],x.p)
for(w=0;w<4;++w){v=new B.aQ(1,1)
q.push(B.q(s,s,A.f,s,s,new B.p(A.c,s,s,new B.bc(v,v,v,v),s,s,A.m),s,4+w*2,s,D.bMG,s,s,s,3))}q.push(A.da)
q.push(D.h6R)
q.push(A.b7)
v=B.K(A.ab,A.r,1)
u=B.n(4)
t=this.b
q.push(B.q(s,new B.bK(A.a5,s,s,B.Ce(A.z,B.q(s,s,A.f,s,s,new B.p(A.bf,s,s,B.n(2),s,s,A.m),s,s,s,A7.I3,s,s,s,s),s,t/100),s),A.f,s,s,new B.p(s,s,v,u,s,s,A.m),s,12,s,s,s,s,s,26))
q.push(A.pr)
q.push(B.c(""+t+"%",s,s,s,s,s,s,D.fYp,s,s,s))
return new B.d7(A.dn,A.a5,A.f,new B.a5(r,s,B.A(q,A.l,s,A.e,A.i,0,s,s),s),s)},
$S:248}
C.e2v.prototype={
$0(){return this.a.Kz(A.d.ca(F.iz,this.b))},
$S:0}
C.e2t.prototype={
$0(){return this.a.Kz(0)},
$S:0}
C.e2u.prototype={
$2(d,e){var w,v,u,t,s=null,r=Math.max(e.b,216),q=B.a([],x.p)
for(w=B.cJ(F.iz,0,B.dx(4,"count",x.S),x.gD),v=w.$ti,w=new B.bQ(w,w.gI(0),v.k("bQ<aj.E>")),u=this.a,v=v.k("aj.E");w.B();){t=w.d
q.push(u.ayL(t==null?v.a(t):t,50,!1))}return new B.d7(A.dn,A.z,A.f,new B.a5(r,s,B.A(q,A.l,s,A.rF,A.i,0,s,s),s),s)},
$S:248}
C.e2n.prototype={
$0(){return this.a.Kz(null)},
$S:0}
C.e2s.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=A.v.j(0.55),l=this.a,k=l.f,j=k?112:10
if(k){k=l.c
k.toString
k=B.aG(k,A.c_,x.w).w.a.a>700}else k=!1
k=k?250:10
w=x.p
k=B.q(n,B.A(B.a([D.hlF,A.ar,B.E(B.c(this.b?"Navigation   Media   Climate":"File   Edit   View   Window   Help",n,1,A.f3,n,n,n,A.M1,n,n,n),1),B.c(A.a.aY(A.n.v(B.cX(new B.W(Date.now(),0,!1))),2,"0")+":"+A.a.aY(A.n.v(B.fx(new B.W(Date.now(),0,!1))),2,"0"),n,n,n,n,n,n,A.qA,n,n,n)],w),A.l,n,A.e,A.i,0,n,n),A.f,m,n,n,n,24,n,n,new B.R(j,0,k,0),n,n,n)
j=B.a([B.b4(n,n,n,new C.bAw(l.gCd(),this.c.d,n),A.aA)],w)
if(l.e!=null){if(l.f){m=l.c
m.toString
m=B.aG(m,A.dL,x.w).w.r.b+52}else m=12
v=B.n(10)
u=B.K(A.aT,A.r,1)
t=B.n(10)
s=B.aA(n,B.q(n,n,A.f,n,n,A.agK,n,12,n,n,n,n,n,12),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.e2r(l),n,n,n,n,n,n,!1,A.a4)
r=B.q(n,n,A.f,n,n,A.Zk,n,12,n,n,n,n,n,12)
q=B.aA(n,B.q(n,n,A.f,n,n,D.bbl,n,12,n,n,n,n,n,12),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,l.gbdr(),n,n,n,n,n,n,!1,A.a4)
p=l.e
p.toString
p=B.a([s,A.dY,r,A.dY,q,A.ar,B.E(B.c(F.iz[p].a,n,1,A.a2,n,n,n,A.X9,n,n,n),1)],w)
if(l.OQ()!=null)s=!l.f||!l.r
else s=!1
if(s)p.push(l.b0l(19))
s=B.q(n,B.A(p,A.l,n,A.e,A.i,0,n,n),A.f,A.cx,n,n,n,26,n,n,A.fD,n,n,n)
r=l.e
r.toString
j.push(B.bT(0,new B.C(new B.R(26,m,26,58),B.q(n,B.bv(t,B.w(B.a([s,B.E(l.aRG(r),1)],w),A.l,n,A.e,A.i,0,A.p),A.ap),A.f,n,n,new B.p(A.v,n,u,v,D.dFh,n,A.m),n,n,n,n,n,n,n,n),n),0,0,0))}m=A.c.j(0.16)
v=B.n(18)
u=B.K(A.aT,A.r,1)
t=B.a([],w)
for(o=0;o<8;++o)t.push(new B.C(A.jk,l.ayL(F.iz[o],34,!1),n))
j.push(B.ao(8,B.at(B.q(n,B.A(t,A.l,n,A.e,A.P,0,n,n),A.f,n,n,new B.p(m,n,u,v,n,n,A.m),n,n,n,n,A.lF,n,n,n),n,n,n),n,n,0,0,n,n))
return B.q(n,B.w(B.a([k,B.E(new B.am(A.a0,n,A.b5,A.t,j,n),1)],w),A.l,n,A.e,A.i,0,A.p),A.f,A4.a0w,n,n,n,n,n,n,n,n,n,n)},
$S:85}
C.e2r.prototype={
$0(){return this.a.Kz(null)},
$S:0}
C.fDa.prototype={
$0(){return D.exS},
$S:z+48}
C.fDb.prototype={
$0(){return D.e4D},
$S:z+49}
C.fDc.prototype={
$0(){return D.dYR},
$S:z+50}
C.fDd.prototype={
$0(){return D.e40},
$S:z+51}
C.fDe.prototype={
$0(){return D.e9v},
$S:z+52}
C.fDf.prototype={
$0(){return D.etE},
$S:z+53}
C.fDg.prototype={
$0(){return D.evO},
$S:z+54}
C.fDh.prototype={
$0(){return D.e8y},
$S:z+36}
C.cqg.prototype={
$0(){return B.a8(this.a,!1).i1()},
$S:0}
C.cqh.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=(e.b-14)/2,i=x.p,h=B.a([],i)
for(w=$.hYa(),v=j*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aQ(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ac(0,A.H,p.j(0.4),A.dv,16)],t)
n=B.c(r.c,k,k,k,k,k,k,A.LP,k,k,k)
m=B.c(r.a,k,k,k,k,k,k,D.fW7,k,k,k)
l=A.c.j(0.85)
h.push(B.aA(k,B.q(k,new B.am(A.a0,k,A.ac,A.t,B.a([new B.cS(k,-6,-6,k,k,k,n,k),new B.bK(A.ls,k,k,B.w(B.a([m,A.cR,B.c(r.b,k,k,k,k,k,k,new B.G(!0,l,k,k,k,k,12,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)],i),A.B,k,A.e,A.P,0,A.p),k)],i),k),A.f,k,k,new B.p(k,k,k,new B.bc(q,q,q,q),p,new B.a6(A.aw,A.aD,A.w,o,k,k),A.m),k,v,k,k,A.bD,k,k,j),A.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.cqf(d,r),k,k,k,k,k,k,!1,A.a4))}return B.c0(A.bI,h,A.br,k,14,14)},
$S:177}
C.cqf.prototype={
$0(){return B.a8(this.a,!1).c9(B.e4(new C.cqe(this.b),!1,null,x.H))},
$S:0}
C.cqe.prototype={
$1(d){return this.a.f.$0()},
$S:42}
C.f3h.prototype={
$0(){var w=this.a
return w.w=w.d[w.b9U(w.f)]},
$S:0}
C.f3d.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cW.ai()*7},
$S:0}
C.f3c.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bM(0,A.ck)
w.w=""},
$S:0}
C.f3f.prototype={
$0(){var w=this.a
return w.l(new C.f3e(w,this.b))},
$S:0}
C.f3e.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cP(w,this.b)},
$S:0}
C.f3g.prototype={
$1(d){return this.a.b43(0)},
$S:2}
C.eak.prototype={
$0(){return C.Kb("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.eal.prototype={
$0(){},
$S:0}
C.eaf.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.eah.prototype={
$0(){return this.a.b45(this.b)},
$S:0}
C.eai.prototype={
$0(){var w=this.a
return w.l(new C.eag(w))},
$S:0}
C.eag.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.eaj.prototype={
$0(){var w=this.a
return w.b45(w.d)},
$S:0}
C.dUL.prototype={
$2(d,e){return d+e},
$S:84}
C.dUM.prototype={
$0(){},
$S:0}
C.dUG.prototype={
$2(d,e){return d+e},
$S:84}
C.dUJ.prototype={
$0(){var w=this.a
return w.l(new C.dUI(w,this.b))},
$S:0}
C.dUI.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dUK.prototype={
$0(){var w=this.a
return w.l(new C.dUH(w))},
$S:0}
C.dUH.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.e66.prototype={
$0(){return E.uX(this.b,this.a.d,"drawing")},
$S:0}
C.e67.prototype={
$1(d){var w=this.a
return w.l(new C.e65(w,d))},
$S:50}
C.e65.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aLY(u,v,t))},
$S:0}
C.e68.prototype={
$1(d){var w=this.a
return w.l(new C.e64(w,d))},
$S:19}
C.e64.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
C.e69.prototype={
$1(d){var w=this.a
return w.l(new C.e63(w,d))},
$S:24}
C.e63.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aLY(u,v,t))},
$S:0}
C.e6a.prototype={
$0(){var w=this.a
return w.l(new C.e62(w,this.b))},
$S:0}
C.e62.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.e6b.prototype={
$1(d){var w=this.a
return w.l(new C.e61(w,d))},
$S:6}
C.e61.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.e6c.prototype={
$0(){var w=this.a
return w.l(new C.e60(w))},
$S:0}
C.e60.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.e6d.prototype={
$0(){var w=this.a
return w.l(new C.e6_(w))},
$S:0}
C.e6_.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.e6e.prototype={
$0(){var w=this.a
return w.l(A.d.gtF(w.e))},
$S:0}
C.e6f.prototype={
$0(){var w=this.a
return w.l(new C.e5Z(w))},
$S:0}
C.e5Z.prototype={
$0(){var w=this.a
w.x=D.aD8[A.n.F(A.d.ca(D.aD8,w.x)+1,4)]},
$S:0}
C.eyg.prototype={
$0(){return this.a.f.K(0,this.b)},
$S:0}
C.eyh.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.Kb("bell",B.a([0,4,7],w),500,0.45)
u.l(new C.eyf(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.d()
if(v===u.length)C.Kb("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:12}
C.eyf.prototype={
$0(){var w=this.a
w.r.u(0,B.a([this.b,this.c],x.t))
w.f.a7(0)},
$S:0}
C.eyi.prototype={
$0(){var w=this.a
if(w.c==null)return
w.l(new C.eye(w))},
$S:12}
C.eye.prototype={
$0(){var w=this.a
w.f.a7(0)
w.x=!1},
$S:0}
C.eym.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return B.aA(w,B.l3(new C.eyk(v,e),w,A.b_,A.pU,w,w,new B.bq(0,u,x.a),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eyl(v,e),w,w,w,w,w,w,!1,A.a4)},
$S:79}
C.eyl.prototype={
$0(){return this.a.chk(this.b)},
$S:0}
C.eyk.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dA(),m=n.a
m.$flags&2&&B.ak(m)
m[11]=0.001
n.fL(3.141592653589793*e)
m=B.n(16)
w=o?p:D.ceM
if(o)v=q.a.r.q(0,q.b)?A.bf.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.K(u.r.q(0,t)?A.bf:A.aT,A.r,1)
if(o){r=B.dA()
r.fL(3.141592653589793)
u=u.e
u===$&&B.d()
r=B.fG(A.z,B.c(u[t],p,p,p,p,p,p,H.adn,p,p,p),p,r,!0)
u=r}else u=D.hen
return B.fG(A.z,B.q(A.z,u,A.f,p,p,new B.p(v,p,s,m,p,w,A.m),p,p,p,p,p,p,p,p),p,n,!0)},
$S:111}
C.eyn.prototype={
$0(){var w=this.a
return w.l(new C.eyj(w,this.b))},
$S:0}
C.eyj.prototype={
$0(){var w=this.a
w.d=this.b.a
w.aw5()},
$S:0}
C.eyo.prototype={
$0(){var w=this.a
return w.l(w.gbQN())},
$S:0}
C.eLo.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.eLp.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.eLm.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eLn.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.eLl(w))},
$S:12}
C.eLl.prototype={
$0(){return this.a.f=-1},
$S:0}
C.eLq.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.eLr.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.eLs.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b44()},
$S:12}
C.eLt.prototype={
$0(){return this.a.chq(this.b)},
$S:0}
C.eZD.prototype={
$1(d){return B.v(d.h(0,1))+","},
$S:58}
C.eZM.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.c(d,w,1,A.a2,w,w,w,B.l(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.C(A.jY,B.A(B.a([v,A.aa,new B.d1(1,A.c9,new B.d7(A.dn,A.z,A.f,B.c(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w),w)],x.p),A.l,w,A.e,A.i,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1979}
C.eZI.prototype={
$1(d){return this.a.l(new C.eZH())},
$S:2}
C.eZH.prototype={
$0(){},
$S:0}
C.eZJ.prototype={
$0(){var w=this.a
return w.l(new C.eZG(w,this.b))},
$S:0}
C.eZG.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eZK.prototype={
$1(d){var w=this.a
return w.l(new C.eZF(w,d))},
$S:6}
C.eZF.prototype={
$0(){return this.a.f=A.h.S(this.b)},
$S:0}
C.eZL.prototype={
$0(){var w=this.a
return w.l(new C.eZE(w))},
$S:0}
C.eZE.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.ewW.prototype={
$0(){},
$S:0}
C.ewX.prototype={
$0(){},
$S:0}
C.ewP.prototype={
$0(){var w=this.a
return w.l(new C.ewO(w))},
$S:0}
C.ewO.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.c4(u,1,!1,x.S)
w.r=0.9
E.Yr("hat",0,0.6)},
$S:0}
C.ewQ.prototype={
$0(){var w=this.a
return w.l(new C.ewN(w))},
$S:0}
C.ewN.prototype={
$0(){this.a.y=1.1
E.mP("bell",36,200,0.4)},
$S:0}
C.ewR.prototype={
$0(){var w=this.a
return w.l(new C.ewM(w))},
$S:0}
C.ewM.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aw(Math.max(v,u)-t+1)
w.as=u
E.mP("bell",12+A.n.F(u,12),500,0.5)},
$S:0}
C.ewS.prototype={
$0(){var w=this.a
return w.l(new C.ewL(w,this.b))},
$S:0}
C.ewL.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.ewT.prototype={
$1(d){var w=this.a
return w.l(new C.ewK(w,d))},
$S:6}
C.ewK.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.h.S(this.b),r=J.e3(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.ewU.prototype={
$1(d){var w=this.a
return w.l(new C.ewJ(w,d))},
$S:6}
C.ewJ.prototype={
$0(){return this.a.z=A.h.S(this.b)},
$S:0}
C.ewV.prototype={
$1(d){var w=this.a
return w.l(new C.ewI(w,d))},
$S:6}
C.ewI.prototype={
$0(){return this.a.Q=A.h.S(this.b)},
$S:0}
C.cqc.prototype={
$0(){var w=this
return E.mP(w.a,w.b,w.c,w.d)},
$S:1};(function aliases(){var w=C.aQ3.prototype
w.bCJ=w.t
w=C.aP7.prototype
w.bBL=w.t
w=C.aP8.prototype
w.bBM=w.t
w=C.aPc.prototype
w.bBQ=w.t
w=C.aQU.prototype
w.bDG=w.t
w=C.aQ1.prototype
w.bCH=w.t
w=C.aB5.prototype
w.byM=w.t
w=C.aB6.prototype
w.byN=w.t
w=C.aNz.prototype
w.bA8=w.t
w=C.aPn.prototype
w.bC0=w.t
w=C.aP9.prototype
w.bBN=w.t
w=C.aPu.prototype
w.bC8=w.t
w=C.aPV.prototype
w.bCA=w.t
w=C.aQn.prototype
w.bD2=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0,u=a._instance_1u,t=a._instance_1i,s=a._instance_0i,r=a.installInstanceTearOff
w(C.aHX.prototype,"gaAh","ccr",1)
v(C,"iFQ","c9J",3)
var q
u(q=C.aGm.prototype,"gclQ","clR",22)
w(q,"gcd0","b2w",1)
w(C.aGo.prototype,"gceN","ceO",1)
t(C.aGF.prototype,"gceV","ceW",39)
w(q=C.aL4.prototype,"gcG_","cG0",1)
w(q,"gceX","a0I",1)
w(q,"gcqw","cqx",1)
w(q,"gceT","a0H",3)
w(q,"gceU","agN",3)
w(q=C.aHW.prototype,"gbNR","ac1",3)
w(q,"gcpN","b6h",1)
w(q,"gctI","ajs",3)
s(q,"gceZ","agO",3)
s(q=C.a6H.prototype,"gtF","a7",1)
u(q,"gd39","aqA",0)
u(q,"gd_r","Ne",0)
w(q,"gd5x","bnY",1)
r(C.alp.prototype,"gcfl",0,5,null,["$5"],["lK"],41,0,0)
w(q=C.aGT.prototype,"gcfm","cfn",1)
w(q,"gcwC","ajO",3)
w(q,"gcm7","ai7",3)
w(q,"gcDX","akW",3)
w(q=C.aGJ.prototype,"gc7q","aeV",3)
w(q,"gbdr","cKA",1)
w(q,"gb3r","cfr",1)
w(q=C.aIs.prototype,"gchl","chm",1)
s(q,"gchj","b43",1)
w(C.aHI.prototype,"gbQN","aw5",1)
s(C.aI5.prototype,"gchn","cho",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aF,[C.amE,C.Ho,C.vP,C.aWj,C.a5z,C.beG,C.c9K,C.z2,C.Dr,C.o6,C.bfu,C.Bq,C.bxZ,C.qO,C.ry,C.Dv,C.a0y,C.ahc,C.a2P,C.DG,C.ae1,C.aej,C.agh,C.H9,C.es,C.ui,C.acF,C.adO,C.a6H,C.nh,C.bfv,C.h6,C.mr,C.bzi,C.aLY])
u(B.hq,[C.fVp,C.fJt,C.fRo,C.fRp,C.fVm,C.fVn,C.eq_,C.eqi,C.eFP,C.eFm,C.eFn,C.eFo,C.eFp,C.eFq,C.eFr,C.eFs,C.eFt,C.eFk,C.eFl,C.eFj,C.eFK,C.eFL,C.eFM,C.dUh,C.dUj,C.dUm,C.dUx,C.c9L,C.c9M,C.fCu,C.fCv,C.fCw,C.fCD,C.fCE,C.fCF,C.dWk,C.dW1,C.dWl,C.dVX,C.dVS,C.dVU,C.dW_,C.dWc,C.dWa,C.dWb,C.dW9,C.dW6,C.dW8,C.fi4,C.fhE,C.fhF,C.fhM,C.fhT,C.fi1,C.fhB,C.dvN,C.dvO,C.dvK,C.dvL,C.dvM,C.dvP,C.dvQ,C.dvR,C.dvS,C.dvT,C.dvU,C.dvV,C.dvW,C.dvX,C.eEL,C.eEM,C.eEN,C.eEO,C.eEJ,C.eEK,C.eFf,C.eES,C.eEU,C.eEE,C.eFb,C.eF9,C.eFa,C.eF8,C.eF7,C.eEG,C.bSZ,C.bT9,C.bT4,C.bTa,C.bTc,C.bT_,C.bSY,C.bTh,C.bT5,C.bT8,C.bT7,C.bT6,C.bNj,C.h7B,C.h7E,C.h7C,C.bMZ,C.bMU,C.bMS,C.bNh,C.bN9,C.bNa,C.bN8,C.bNb,C.bMI,C.bMK,C.bMG,C.bMw,C.bMx,C.bMy,C.fCG,C.fCH,C.fCI,C.fCt,C.fCJ,C.fCs,C.fCK,C.fCx,C.fCr,C.fCy,C.fCq,C.fCz,C.fCp,C.fCA,C.fCn,C.fCo,C.fCB,C.fCl,C.fCm,C.fCC,C.fCk,C.e6L,C.e6M,C.e6B,C.e6x,C.e6K,C.e6P,C.cPb,C.hcM,C.hcN,C.e2x,C.e2p,C.e2o,C.e2H,C.cqe,C.f3g,C.e67,C.e68,C.e69,C.e6b,C.eyk,C.eZD,C.eZM,C.eZI,C.eZK,C.ewT,C.ewU,C.ewV])
u(B.iZ,[C.fVo,C.eq4,C.eq2,C.eFv,C.eFI,C.dVT,C.dWf,C.e1w,C.fi7,C.fi8,C.fhL,C.fhY,C.fhZ,C.fhU,C.fi_,C.fhA,C.eEH,C.eEI,C.eFe,C.eF6,C.eEW,C.bTb,C.bTd,C.bTf,C.bT0,C.bT2,C.bNk,C.bNi,C.cxn,C.h7D,C.bMR,C.bMT,C.bNf,C.bNe,C.bMH,C.e6J,C.cPc,C.e2q,C.e2C,C.e2A,C.e2I,C.e2u,C.e2s,C.cqh,C.dUL,C.dUG,C.eym])
u(B.af,[C.XE,C.Y0,C.Wr,C.Wy,C.OS,C.aL3,C.Y_,C.aln,C.X9,C.aAL,C.WT,C.Yy,C.Xh,C.Ws,C.X8,C.XV,C.Y5,C.Yp,C.XU])
u(B.ai,[C.boY,C.aQ3,C.aP7,C.aPc,C.aGF,C.aQU,C.aQ1,C.aB5,C.bCu,C.aNz,C.aPn,C.aQn,C.aPu,C.aP9,C.boo,C.aHI,C.aI5,C.bpG,C.aPV])
u(B.iY,[C.epY,C.epZ,C.eqa,C.eqb,C.eq6,C.eq5,C.eq7,C.eq3,C.eq8,C.eq1,C.eq9,C.eq0,C.eqe,C.eqd,C.eqf,C.eqc,C.eqg,C.eqh,C.eqj,C.eFO,C.eFQ,C.eFR,C.eFx,C.eFw,C.eFu,C.eFD,C.eFE,C.eFA,C.eFF,C.eFz,C.eFG,C.eFH,C.eFy,C.eFJ,C.eFC,C.eFN,C.eFB,C.dUE,C.dUD,C.dUe,C.dUf,C.dUg,C.dUF,C.dUi,C.dUk,C.dUl,C.dUn,C.dUb,C.dUc,C.dUd,C.dUu,C.dUv,C.dUw,C.dUt,C.dUy,C.dUs,C.dUz,C.dUr,C.dUA,C.dUq,C.dUB,C.dUp,C.dUC,C.dUo,C.dVZ,C.dVY,C.dW2,C.dVV,C.dVW,C.dW3,C.dW4,C.dW5,C.dW0,C.dVR,C.dWe,C.dWd,C.dWg,C.dWh,C.dWi,C.dW7,C.dWj,C.d_8,C.e1u,C.e1t,C.e1v,C.fCV,C.fCW,C.fCX,C.fCY,C.fCZ,C.fD_,C.fD0,C.fD1,C.fD2,C.fi6,C.fi5,C.fhO,C.fhN,C.fhD,C.fhC,C.fhG,C.fhJ,C.fhI,C.fhK,C.fhH,C.fhW,C.fhV,C.fhX,C.fhP,C.fi0,C.fhS,C.fi2,C.fhR,C.fi3,C.fhQ,C.eEQ,C.eEF,C.eEP,C.eEB,C.eER,C.eET,C.eEC,C.eED,C.eFd,C.eFc,C.eF3,C.eF4,C.eF5,C.eF_,C.eF0,C.eEZ,C.eF1,C.eEY,C.eF2,C.eEX,C.eEV,C.dvJ,C.bTe,C.bTg,C.bT1,C.bT3,C.bMW,C.bMX,C.bMV,C.bMY,C.bN_,C.bML,C.bMM,C.bMQ,C.bMN,C.bMO,C.bMP,C.bNg,C.bMl,C.bN6,C.bN7,C.bN4,C.bN5,C.bN1,C.bN2,C.bN3,C.bNc,C.bN0,C.bNd,C.bMm,C.bMJ,C.bMt,C.bMs,C.bMu,C.bMv,C.bMr,C.bMz,C.bMq,C.bMA,C.bMB,C.bMC,C.bMD,C.bMp,C.bME,C.bMo,C.bMF,C.bMn,C.e6C,C.e6N,C.e6O,C.e6A,C.e6z,C.e6y,C.e6H,C.e6F,C.e6G,C.e6I,C.e6D,C.e6E,C.e6Q,C.e6R,C.e6S,C.e6T,C.e6U,C.e2y,C.e2z,C.e2J,C.e2w,C.e2K,C.e2L,C.e2D,C.e2E,C.e2F,C.e2G,C.e2M,C.e2B,C.e2v,C.e2t,C.e2n,C.e2r,C.fDa,C.fDb,C.fDc,C.fDd,C.fDe,C.fDf,C.fDg,C.fDh,C.cqg,C.cqf,C.f3h,C.f3d,C.f3c,C.f3f,C.f3e,C.eak,C.eal,C.eaf,C.eah,C.eai,C.eag,C.eaj,C.dUM,C.dUJ,C.dUI,C.dUK,C.dUH,C.e66,C.e65,C.e64,C.e63,C.e6a,C.e62,C.e61,C.e6c,C.e60,C.e6d,C.e6_,C.e6e,C.e6f,C.e5Z,C.eyg,C.eyh,C.eyf,C.eyi,C.eye,C.eyl,C.eyn,C.eyj,C.eyo,C.eLo,C.eLp,C.eLm,C.eLn,C.eLl,C.eLq,C.eLr,C.eLs,C.eLt,C.eZH,C.eZJ,C.eZG,C.eZF,C.eZL,C.eZE,C.ewW,C.ewX,C.ewP,C.ewO,C.ewQ,C.ewN,C.ewR,C.ewM,C.ewS,C.ewL,C.ewK,C.ewJ,C.ewI,C.cqc])
t(C.bCI,C.aQ3)
t(C.aHX,C.bCI)
u(B.lO,[C.blQ,C.bfM,C.bxm,C.beo,C.bvW,C.bvk,C.bf4,C.bvm,C.bzs,C.blO,C.alp,C.bdy,C.bAw,C.ah5,C.bAI,C.bvl,C.bqs])
t(C.aP8,C.aP7)
t(C.aGm,C.aP8)
t(C.bCr,C.aPc)
t(C.aGo,C.bCr)
u(B.lm,[C.LH,C.a2C,C.KF])
u(B.aw,[C.bwk,C.ahp,C.agd,C.RV,C.bwS,C.aaF,C.bhV])
t(C.aL4,C.aQU)
t(C.blN,B.p0)
t(C.aHW,C.aQ1)
t(C.aB6,C.aB5)
t(C.alo,C.aB6)
t(C.aGT,C.bCu)
t(C.bdz,C.aNz)
t(C.aGJ,C.aPn)
t(C.bCP,C.aQn)
t(C.aIs,C.bCP)
t(C.bCw,C.aPu)
t(C.box,C.bCw)
t(C.bCq,C.aP9)
t(C.bo6,C.bCq)
t(C.bCG,C.aPV)
t(C.bp9,C.bCG)
w(C.aQ3,B.cl)
w(C.bCI,E.o3)
w(C.aP7,B.cl)
w(C.aP8,E.o3)
w(C.aPc,B.cl)
w(C.bCr,E.o3)
w(C.aQU,B.eZ)
w(C.aQ1,B.cl)
w(C.aB5,B.cl)
w(C.aB6,E.o3)
w(C.aNz,B.cl)
v(C.bCu,B.eF)
w(C.aPn,B.cl)
w(C.aP9,B.cl)
w(C.bCq,E.o3)
w(C.aPu,B.cl)
w(C.bCw,E.o3)
w(C.aPV,B.cl)
w(C.bCG,E.o3)
w(C.aQn,B.cl)
w(C.bCP,E.o3)})()
B.jg(b.typeUniverse,JSON.parse('{"XE":{"af":[],"x":[]},"boY":{"ai":["XE"]},"Y0":{"af":[],"x":[]},"aHX":{"ai":["Y0"]},"blQ":{"aC":[]},"Wr":{"af":[],"x":[]},"aGm":{"ai":["Wr"]},"Wy":{"af":[],"x":[]},"aGo":{"ai":["Wy"]},"bfM":{"aC":[]},"ahp":{"aw":[],"x":[]},"agd":{"aw":[],"x":[]},"aL3":{"af":[],"x":[]},"OS":{"af":[],"x":[]},"aGF":{"ai":["OS"]},"bwk":{"aw":[],"x":[]},"RV":{"aw":[],"x":[]},"bxm":{"aC":[]},"bwS":{"aw":[],"x":[]},"beo":{"aC":[]},"aL4":{"ai":["aL3"]},"bvW":{"aC":[]},"bvk":{"aC":[]},"bf4":{"aC":[]},"bvm":{"aC":[]},"bzs":{"aC":[]},"Y_":{"af":[],"x":[]},"blN":{"aC":[]},"aHW":{"ai":["Y_"]},"blO":{"aC":[]},"alp":{"aC":[]},"aln":{"af":[],"x":[]},"alo":{"ai":["aln"]},"X9":{"af":[],"x":[]},"aAL":{"af":[],"x":[]},"aGT":{"ai":["X9"],"eF":[]},"bdz":{"ai":["aAL"]},"bdy":{"aC":[]},"WT":{"af":[],"x":[]},"aGJ":{"ai":["WT"]},"bAw":{"aC":[]},"ah5":{"aC":[]},"aaF":{"aw":[],"x":[]},"Yy":{"af":[],"x":[]},"Xh":{"af":[],"x":[]},"Ws":{"af":[],"x":[]},"X8":{"af":[],"x":[]},"XV":{"af":[],"x":[]},"Y5":{"af":[],"x":[]},"Yp":{"af":[],"x":[]},"XU":{"af":[],"x":[]},"aIs":{"ai":["Yy"]},"bAI":{"aC":[]},"box":{"ai":["Xh"]},"bvl":{"aC":[]},"bo6":{"ai":["Ws"]},"boo":{"ai":["X8"]},"bqs":{"aC":[]},"aHI":{"ai":["XV"]},"aI5":{"ai":["Y5"]},"bpG":{"ai":["Yp"]},"bp9":{"ai":["XU"]},"bhV":{"aw":[],"x":[]}}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.as
return{c:w("lc<u?>"),G:w("u"),J:w("bm<o,H>"),Q:w("dd<o>"),Z:w("a_"),I:w("vn"),M:w("N<dl>"),l:w("N<a5u>"),h:w("N<a5z>"),V:w("N<ac>"),O:w("N<u>"),F:w("N<W>"),D:w("N<az<aF>>"),x:w("N<a_>"),E:w("N<ah<o>>"),b:w("N<ah<H>>"),U:w("N<ah<F?>>"),B:w("N<a9<o,aF>>"),g:w("N<m>"),bz:w("N<ui>"),v:w("N<h_>"),eZ:w("N<+(o,o)>"),fT:w("N<+(H,x)>"),L:w("N<+(F,o)>"),u:w("N<+(F,F)>"),r:w("N<+(o,o,a_)>"),e:w("N<+(o,H,H,F)>"),o:w("N<+(o,F,o,F)>"),d:w("N<+(o,o,H,H,a9<o,H>)>"),_:w("N<vP>"),fQ:w("N<acF>"),s:w("N<o>"),cF:w("N<au>"),X:w("N<KV>"),p:w("N<x>"),bL:w("N<adO>"),fH:w("N<lk>"),a_:w("N<ae1>"),cB:w("N<o6>"),ba:w("N<aej>"),eW:w("N<Dv>"),fY:w("N<a0y>"),ac:w("N<agh>"),cd:w("N<DG>"),fr:w("N<ahc>"),e4:w("N<a2P>"),au:w("N<aLY>"),f7:w("N<P>"),n:w("N<H>"),t:w("N<F>"),dS:w("N<aC?>"),fs:w("N<ui?>"),bN:w("N<F?>"),gJ:w("cB<alo>"),A:w("cB<ai<af>>"),bF:w("ah<u>"),gl:w("ah<W>"),ew:w("ah<aF>"),j:w("ah<@>"),P:w("a9<o,@>"),f:w("a9<@,@>"),bd:w("O<es,o>"),fR:w("O<+(H,x),x>"),w:w("io"),gA:w("vr"),gD:w("wO"),k:w("cr"),K:w("aF"),Y:w("ui"),C:w("es"),N:w("o"),bO:w("au"),a:w("bq<H>"),W:w("bf<o>"),aC:w("bf<F?>"),dg:w("ee<ry>"),m:w("beG"),a2:w("Dr"),f3:w("ry"),es:w("H9"),q:w("l4"),y:w("P"),i:w("H"),z:w("@"),S:w("F"),R:w("ah<@>?"),cK:w("aF?"),T:w("o?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b61=new B.dl(0,0.1)
D.b7Z=new C.aWj(0,0,0)
D.N_=new C.aWj(0,0.5,0)
D.b8A=new B.ax(A.bf,1,A.r,-1)
D.ba5=new B.aY(16,1/0,16,1/0)
D.bag=new B.aY(0,1/0,0,210)
D.bsm=new B.u(1,0.10588235294117647,0.12549019607843137,0.18823529411764706,A.q)
D.dFv=w([D.bsm,Av.al1],x.O)
D.ePz=new B.bU(A.C0,1.1,A.w,null,0,D.dFv,null,null)
D.bao=new B.p(null,null,null,null,null,D.ePz,A.m)
D.bbl=new B.p(A.bk,null,null,null,null,null,A.a6)
D.fJH=new B.G(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hn4=new B.D("\u26a1",null,D.fJH,null,null,null,null,null,null,null,null,null)
D.bg5=new B.cq(A.z,null,null,D.hn4,null)
D.aZ4=new B.G(!0,A.bX,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hcl=new B.D("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aZ4,null,A.K,null,null,null,null,null,null,null)
D.eHF=new B.C(A.o8,D.hcl,null)
D.bgg=new B.cq(A.z,null,null,D.eHF,null)
D.h22=new B.D("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aZ4,null,A.K,null,null,null,null,null,null,null)
D.eIy=new B.C(A.HY,D.h22,null)
D.bgZ=new B.cq(A.z,null,null,D.eIy,null)
D.ahL=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.bkQ=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.bl6=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bmm=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.bmt=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.bmQ=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.boU=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.bq3=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.bqP=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.ak8=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.brQ=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.akx=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.akF=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.btR=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.al6=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.bvU=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.bw1=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bww=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.wY=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.byJ=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.amF=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.bEB=new B.bh(11e6)
D.bGt=new B.R(10,6,10,2)
D.bGv=new B.R(10,8,0,10)
D.bH9=new B.R(12,8,6,10)
D.bHc=new B.R(12,8,8,8)
D.bHj=new B.R(14,0,14,22)
D.bHl=new B.R(14,0,14,30)
D.bIp=new B.R(16,4,16,28)
D.bII=new B.R(18,10,18,16)
D.bLw=new B.R(4,4,8,2)
D.bM9=new B.R(8,14,8,12)
D.bMk=new B.R(8,6,8,8)
D.bMG=new B.R(0,0,1.5,0)
D.b7L=new B.Er(26,"saturation")
D.bMZ=new B.vb(A.cG,D.b7L,null,A.ZP)
D.bN_=new B.h3(A.H,11)
D.bN3=new B.h3(A.H,30)
D.h14=new B.D("REACTION LAB",null,U.aZJ,null,null,null,null,A.a2,null,1,null,null)
D.bNc=new B.bu(1,A.b8,D.h14,null)
D.h5d=new B.D("\ud83d\udce2 NGMY Ads",null,A.qA,null,null,null,null,A.f3,null,1,null,null)
D.bO9=new B.bu(1,A.b8,D.h5d,null)
D.h_H=new B.D("Wire selected",null,A.hi,null,null,null,null,null,null,null,null,null)
D.bOn=new B.bu(1,A.b8,D.h_H,null)
D.arP=new B.a_(62712,"MaterialIcons",!1)
D.bUL=new B.a_(62908,"MaterialIcons",!1)
D.bWr=new B.a_(983122,"MaterialIcons",!1)
D.bWH=new B.a_(983247,"MaterialIcons",!1)
D.bWY=new B.a_(983443,"MaterialIcons",!1)
D.bXg=new B.a_(983616,"MaterialIcons",!1)
D.bWq=new B.a_(983117,"MaterialIcons",!1)
D.c04=new B.ae(D.bWq,28,A.c,null,null,null)
D.c0m=new B.ae(A.jm,18,null,null,null,null)
D.c2C=new B.ae(A.oe,null,A.ab,null,null,null)
D.c2M=new B.ae(A.a5g,21,A.ab,null,null,null)
D.c3D=new B.ae(A.eE,17,A.ab,null,null,null)
D.c6x=new B.ae(A.jm,21,A.ab,null,null,null)
D.c72=new B.ae(A.eq,20,A.c1,null,null,null)
D.c88=new B.ae(A.eh,null,A.aQ,null,null,null)
D.dD1=w([A.dl,A.di,A.dl],x.O)
D.avy=new B.a6(A.a5,A.a9,A.w,D.dD1,null,null)
D.dc2=w([A.bP,A.bl],x.O)
D.cbE=new B.a6(A.aU,A.b2,A.w,D.dc2,null,null)
D.cbT=new B.a6(A.aU,A.b2,A.w,A.a7U,null,null)
D.dye=w([F.Ns,A8.amP],x.O)
D.ccD=new B.a6(A.aU,A.b2,A.w,D.dye,null,null)
D.d9l=w([A.pF,A.iJ],x.O)
D.ccJ=new B.a6(A.aU,A.b2,A.w,D.d9l,null,null)
D.dbL=w([A.cU,A.ax],x.O)
D.avL=new B.a6(A.aU,A.b2,A.w,D.dbL,null,null)
D.dw6=w([A.d0,A.iM,A.bl],x.O)
D.cd1=new B.a6(A.a5,A.a9,A.w,D.dw6,null,null)
D.dIm=w([A.d0,A.bP,A.bl],x.O)
D.cdc=new B.a6(A.a5,A.a9,A.w,D.dIm,null,null)
D.dwd=w([A.cz,A.cx],x.O)
D.avO=new B.a6(A.aU,A.b2,A.w,D.dwd,null,null)
D.aFO=w([A.cU,M.ni],x.O)
D.cdD=new B.a6(A.aU,A.b2,A.w,D.aFO,null,null)
D.cdV=new B.a6(A.aU,A.b2,A.w,X.aw7,null,null)
D.ceM=new B.a6(A.aw,A.aD,A.w,A.Tl,null,null)
D.bxs=new B.u(1,0.16470588235294117,0.16470588235294117,0.1803921568627451,A.q)
D.bsC=new B.u(1,0.0392156862745098,0.0392156862745098,0.043137254901960784,A.q)
D.dlC=w([D.bxs,D.bsC],x.O)
D.ceQ=new B.a6(A.aU,A.b2,A.w,D.dlC,null,null)
D.cf_=new B.a6(A.aU,A.b2,A.w,H.aF5,null,null)
D.amo=new B.u(1,0.043137254901960784,0.043137254901960784,0.047058823529411764,A.q)
D.bx3=new B.u(1,0.22745098039215686,0.22745098039215686,0.23921568627450981,A.q)
D.dEV=w([D.amo,D.bx3,D.amo],x.O)
D.cf7=new B.a6(A.a5,A.a9,A.w,D.dEV,null,null)
D.bwq=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.bxl=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cUA=w([A.OB,D.bwq,D.bxl],x.O)
D.cfb=new B.a6(A.aU,A.b2,A.w,D.cUA,null,null)
D.cHJ=w([A.de,A.j0],x.O)
D.cfq=new B.a6(A.aU,A.b2,A.w,D.cHJ,null,null)
D.cVg=w([A.d0,A.hX,A.d0],x.O)
D.cfy=new B.a6(A.a5,A.a9,A.w,D.cVg,null,null)
D.bAa=new B.u(1,0.07058823529411765,0.0784313725490196,0.10196078431372549,A.q)
D.cIv=w([F.ahT,D.bAa],x.O)
D.cfE=new B.a6(A.aU,A.b2,A.w,D.cIv,null,null)
D.cgi=w([0,4,7],x.t)
D.cgj=w([0,4,7,12],x.t)
D.cgk=w([0,4,7,4],x.t)
D.aEL=w([A.hl,A.tq],x.O)
D.aEf=w([A.fK,A.cY],x.O)
D.aCz=w([A.bj,A.e0],x.O)
D.d2w=w([A.aQ,A.de],x.O)
D.dxE=w([A.c5,A.lW],x.O)
D.aC_=w([A.cX,A.kd],x.O)
D.d8_=w([A.bQ,A.aM],x.O)
D.cgI=w([D.aEL,D.aEf,A.a77,D.aCz,D.d2w,A.a73,A.a7k,D.dxE,D.aC_,D.d8_],B.as("N<ah<u>>"))
D.clq=w([120,220,380],x.t)
D.cpa=w([12,16,19,24],x.t)
D.cpm=w([1400,800,450,2400],x.t)
D.cxV=w([250,450,900,1500],x.t)
D.bk8=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.bwQ=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.buw=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.bAM=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.btD=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.aBf=w([D.bk8,D.bwQ,D.buw,D.bAM,D.btD],x.O)
D.f9l=new B.y(-25,A.ax)
D.eYs=new B.y(25,A.bC)
D.cHP=w([D.f9l,D.eYs],B.as("N<+(H,u)>"))
D.cPm=w([50,25,75],x.t)
D.cV9=w([0,5,10,15,18,20,25],x.t)
D.d2Q=w([900,500,250,1600],x.t)
D.d7b=w([A.bj,A.bE,A.be,A.bj],x.O)
D.a6Z=w([A.aC,A.bu,A.bk,A.aH,A.oP],x.O)
D.d8Y=w([A.ax,A.aC,A.cX,A.bu,A.bk,A.cI,A.ci,A.bE,A.a_9],x.O)
D.a71=w([0.04,0.17,0.3],x.n)
D.fsZ=new C.vP("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.ft4=new C.vP("Medium engine","A good all-rounder.",0.3,0.9)
D.ft3=new C.vP("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Jr=w([D.fsZ,D.ft4,D.ft3],x._)
D.eVC=new B.y(6,"Easy")
D.eWq=new B.y(8,"Medium")
D.eRb=new B.y(10,"Hard")
D.daK=w([D.eVC,D.eWq,D.eRb],x.L)
D.aCY=w([0.55,0.78,1],x.n)
D.aD8=w([A.c,A.h9,A.pH,A.ax],x.O)
D.aDg=w([A.bk,A.aC,A.bu,A.di],x.O)
D.fsW=new C.vP("Radar","Shows your height above the ground.",0.1,0)
D.fsX=new C.vP("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.fsU=new C.vP("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aDp=w([D.fsW,D.fsX,D.fsU],x._)
D.dh8=w([-29.5,28.5],x.n)
D.dhe=w([A.bl,A.cm,F.NX,A.cz],x.O)
D.dhC=w([47,100,220,470,1000],x.n)
D.diZ=w([0,0.32,0.62,1],x.n)
D.dj3=w([A.d0,A.hX,A.d0,A.cz],x.O)
D.Kz={volts:0}
D.a8V=new B.bm(D.Kz,[3],x.J)
D.L1=new B.e1(["b","battery",0.2,0.3,D.a8V])
D.eBp={on:0}
D.dOM=new B.bm(D.eBp,[1],x.J)
D.Fu=new B.e1(["s","switch",0.5,0.3,D.dOM])
D.fqv=new B.e1(["l","bulb",0.8,0.3,A.jK])
D.dcd=w([D.L1,D.Fu,D.fqv],x.d)
D.Fs=new B.b7(["b",0,"s",0])
D.fpp=new B.b7(["s",1,"l",0])
D.aUw=new B.b7(["l",1,"b",1])
D.dwl=w([D.Fs,D.fpp,D.aUw],x.o)
D.dbz=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.eQi=new C.nh("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.dcd,D.dwl,D.dbz)
D.aOf={ohms:0}
D.aLP=new B.bm(D.aOf,[220],x.J)
D.fpU=new B.e1(["r","resistor",0.5,0.3,D.aLP])
D.fqM=new B.e1(["d","led",0.8,0.3,A.jK])
D.dzS=w([D.L1,D.fpU,D.fqM],x.d)
D.foD=new B.b7(["b",0,"r",0])
D.fpj=new B.b7(["r",1,"d",0])
D.foK=new B.b7(["d",1,"b",1])
D.dKa=w([D.foD,D.fpj,D.foK],x.o)
D.dAk=w(["led","diode","indicator"],x.s)
D.eQp=new C.nh("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dzS,D.dKa,D.dAk)
D.aap={level:0}
D.dO7=new B.bm(D.aap,[0.2],x.J)
D.fq0=new B.e1(["p","pot",0.5,0.3,D.dO7])
D.fq2=new B.e1(["m","motor",0.8,0.3,A.jK])
D.dcz=w([D.L1,D.fq0,D.fq2],x.d)
D.foC=new B.b7(["b",0,"p",0])
D.fpe=new B.b7(["p",1,"m",0])
D.fp9=new B.b7(["m",1,"b",1])
D.dFd=w([D.foC,D.fpe,D.fp9],x.o)
D.dw_=w(["fan","motor","spin","dimmer"],x.s)
D.eQg=new C.nh("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.dcz,D.dFd,D.dw_)
D.a8R=new B.bm(D.aap,[0.9],x.J)
D.aUF=new B.e1(["s","solar",0.25,0.3,D.a8R])
D.aUE=new B.e1(["l","bulb",0.75,0.3,A.jK])
D.dfJ=w([D.aUF,D.aUE],x.d)
D.fpm=new B.b7(["s",0,"l",0])
D.fp6=new B.b7(["l",1,"s",1])
D.ddt=w([D.fpm,D.fp6],x.o)
D.dFZ=w(["solar","sun","without battery","no battery","free"],x.s)
D.eQj=new C.nh("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.dfJ,D.ddt,D.dFZ)
D.fqR=new B.e1(["c","crank",0.25,0.3,D.a8R])
D.du0=w([D.fqR,D.aUE],x.d)
D.foG=new B.b7(["c",0,"l",0])
D.fp5=new B.b7(["l",1,"c",1])
D.duH=w([D.foG,D.fp5],x.o)
D.dub=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.eQf=new C.nh("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.du0,D.duH,D.dub)
D.dO6=new B.bm(D.aap,[0.7],x.J)
D.fq7=new B.e1(["t","turbine",0.25,0.3,D.dO6])
D.fpS=new B.e1(["m","motor",0.75,0.3,A.jK])
D.dnz=w([D.fq7,D.fpS],x.d)
D.fpx=new B.b7(["t",0,"m",0])
D.fpa=new B.b7(["m",1,"t",1])
D.dmn=w([D.fpx,D.fpa],x.o)
D.dsF=w(["wind","turbine","windmill","water","hydro"],x.s)
D.eQc=new C.nh("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.dnz,D.dmn,D.dsF)
D.aLM=new B.bm(D.Kz,[9],x.J)
D.abx=new B.e1(["b","battery",0.2,0.3,D.aLM])
D.aUC=new B.e1(["r","radio",0.8,0.3,A.jK])
D.dGC=w([D.abx,D.Fu,D.aUC],x.d)
D.fpr=new B.b7(["s",1,"r",0])
D.aUy=new B.b7(["r",1,"b",1])
D.cfW=w([D.Fs,D.fpr,D.aUy],x.o)
D.dEZ=w(["radio","music","listen"],x.s)
D.eQo=new C.nh("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dGC,D.cfW,D.dEZ)
D.dPb=new B.bm(D.Kz,[12],x.J)
D.aUB=new B.e1(["b","battery",0.2,0.3,D.dPb])
D.fqw=new B.e1(["t","tv",0.8,0.3,A.jK])
D.dcf=w([D.aUB,D.Fu,D.fqw],x.d)
D.fps=new B.b7(["s",1,"t",0])
D.aUz=new B.b7(["t",1,"b",1])
D.dxI=w([D.Fs,D.fps,D.aUz],x.o)
D.dGA=w(["tv","television","screen","watch"],x.s)
D.eQ9=new C.nh("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.dcf,D.dxI,D.dGA)
D.fql=new B.e1(["z","buzzer",0.8,0.3,A.jK])
D.cRL=w([D.L1,D.Fu,D.fql],x.d)
D.fpt=new B.b7(["s",1,"z",0])
D.fpL=new B.b7(["z",1,"b",1])
D.d6c=w([D.Fs,D.fpt,D.fpL],x.o)
D.dD9=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.eQl=new C.nh("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cRL,D.d6c,D.dD9)
D.fq1=new B.e1(["h","heater",0.8,0.3,A.jK])
D.dr8=w([D.abx,D.Fu,D.fq1],x.d)
D.fpo=new B.b7(["s",1,"h",0])
D.foT=new B.b7(["h",1,"b",1])
D.d76=w([D.Fs,D.fpo,D.foT],x.o)
D.cBe=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.eQa=new C.nh("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.dr8,D.d76,D.cBe)
D.fqy=new B.e1(["s","solar",0.2,0.25,D.a8R])
D.dPg=new B.bm(D.aOf,[100],x.J)
D.fqB=new B.e1(["r","resistor",0.55,0.25,D.dPg])
D.fqK=new B.e1(["c","capacitor",0.85,0.25,A.jK])
D.fpY=new B.e1(["q","resistor",0.55,0.6,D.aLP])
D.fqz=new B.e1(["d","led",0.85,0.6,A.jK])
D.dx6=w([D.fqy,D.fqB,D.fqK,D.fpY,D.fqz],x.d)
D.fpn=new B.b7(["s",0,"r",0])
D.fpi=new B.b7(["r",1,"c",0])
D.foI=new B.b7(["c",1,"s",1])
D.foH=new B.b7(["c",0,"q",0])
D.fph=new B.b7(["q",1,"d",0])
D.foL=new B.b7(["d",1,"c",1])
D.dk0=w([D.fpn,D.fpi,D.foI,D.foH,D.fph,D.foL],x.o)
D.dtf=w(["capacitor","store","charge","flash"],x.s)
D.eQn=new C.nh("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.dx6,D.dk0,D.dtf)
D.fqa=new B.e1(["b","battery",0.15,0.3,D.a8V])
D.fqT=new B.e1(["l1","bulb",0.5,0.3,A.jK])
D.fqi=new B.e1(["l2","bulb",0.85,0.3,A.jK])
D.da3=w([D.fqa,D.fqT,D.fqi],x.d)
D.foB=new B.b7(["b",0,"l1",0])
D.fp2=new B.b7(["l1",1,"l2",0])
D.fp3=new B.b7(["l2",1,"b",1])
D.dop=w([D.foB,D.fp2,D.fp3],x.o)
D.dGk=w(["series","two bulbs","dim"],x.s)
D.eQd=new C.nh("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.da3,D.dop,D.dGk)
D.eBM={volts:0,charge:1}
D.dPk=new B.bm(D.eBM,[1.5,0],x.J)
D.fqH=new B.e1(["b","battery",0.75,0.3,D.dPk])
D.d9m=w([D.aUF,D.fqH],x.d)
D.fpl=new B.b7(["s",0,"b",0])
D.foF=new B.b7(["b",1,"s",1])
D.dkl=w([D.fpl,D.foF],x.o)
D.dtq=w(["charge","rechargeable","flat","recharge"],x.s)
D.eQb=new C.nh("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.d9m,D.dkl,D.dtq)
D.dPa=new B.bm(D.Kz,[4.5],x.J)
D.fq3=new B.e1(["b","battery",0.2,0.3,D.dPa])
D.aUA=new B.e1(["p","phone",0.8,0.3,A.jK])
D.dnn=w([D.fq3,D.Fu,D.aUA],x.d)
D.fpq=new B.b7(["s",1,"p",0])
D.abw=new B.b7(["p",1,"b",1])
D.dBR=w([D.Fs,D.fpq,D.abw],x.o)
D.dDC=w(["phone","charger","usb","mobile"],x.s)
D.eQh=new C.nh("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.dnn,D.dBR,D.dDC)
D.fpP=new B.e1(["f","fan",0.8,0.3,A.jK])
D.ctd=w([D.L1,D.fpP],x.d)
D.foA=new B.b7(["b",0,"f",0])
D.foR=new B.b7(["f",1,"b",1])
D.d7K=w([D.foA,D.foR],x.o)
D.dvZ=w(["fan","cool","air","wind"],x.s)
D.eQq=new C.nh("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.ctd,D.d7K,D.dvZ)
D.fqp=new B.e1(["b","battery",0.15,0.2,D.a8V])
D.fpQ=new B.e1(["a","ammeter",0.5,0.2,A.jK])
D.fpO=new B.e1(["l","bulb",0.85,0.2,A.jK])
D.fqr=new B.e1(["v","voltmeter",0.5,0.6,A.jK])
D.dtN=w([D.fqp,D.fpQ,D.fpO,D.fqr],x.d)
D.foy=new B.b7(["b",0,"a",0])
D.fow=new B.b7(["a",1,"l",0])
D.fpz=new B.b7(["v",0,"l",0])
D.fpA=new B.b7(["v",1,"l",1])
D.dkc=w([D.foy,D.fow,D.aUw,D.fpz,D.fpA],x.o)
D.dK9=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.eQm=new C.nh("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.dtN,D.dkc,D.dK9)
D.fqW=new B.e1(["b","battery",0.15,0.2,D.aLM])
D.fq9=new B.e1(["t","tv",0.55,0.2,A.jK])
D.aLN=new B.bm(D.Kz,[5],x.J)
D.fpV=new B.e1(["c","buck",0.4,0.5,D.aLN])
D.fqb=new B.e1(["p","phone",0.8,0.5,A.jK])
D.dho=w([D.fqW,D.fq9,D.fpV,D.fqb],x.d)
D.foE=new B.b7(["b",0,"t",0])
D.aUu=new B.b7(["b",0,"c",0])
D.aUv=new B.b7(["c",1,"p",0])
D.dnk=w([D.foE,D.aUz,D.aUu,D.aUv,D.abw],x.o)
D.dfd=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.eQe=new C.nh("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.dho,D.dnk,D.dfd)
D.fpX=new B.e1(["c","buck",0.5,0.3,D.aLN])
D.d6T=w([D.aUB,D.fpX,D.aUA],x.d)
D.dcK=w([D.aUu,D.aUv,D.abw],x.o)
D.cEN=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.eQ8=new C.nh("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.d6T,D.dcK,D.cEN)
D.fqg=new B.e1(["d","diode",0.5,0.3,A.jK])
D.doF=w([D.abx,D.fqg,D.aUC],x.d)
D.foz=new B.b7(["b",0,"d",0])
D.foM=new B.b7(["d",1,"r",0])
D.cUl=w([D.foz,D.foM,D.aUy],x.o)
D.deS=w(["diode","protect","backwards","one way"],x.s)
D.eQk=new C.nh("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.doF,D.cUl,D.deS)
D.Tz=w([D.eQi,D.eQp,D.eQg,D.eQj,D.eQf,D.eQc,D.eQo,D.eQ9,D.eQl,D.eQa,D.eQn,D.eQd,D.eQb,D.eQh,D.eQq,D.eQm,D.eQe,D.eQ8,D.eQk],B.as("N<nh>"))
D.i1j=new C.Ho("Moon",1.62,A.d0,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.i1h=new C.Ho("Mars",3.71,A.aC,"Mars has about 38 percent of Earth's gravity.")
D.i1k=new C.Ho("Mercury",3.7,A.kJ,"Mercury is small, so its gravity is like Mars.")
D.i1e=new C.Ho("Venus",8.87,A.aQ,"Venus is almost as heavy as Earth, with strong gravity.")
D.i1g=new C.Ho("Earth",9.81,A.aH,"On Earth gravity is strong, and the air also slows you down.")
D.i1i=new C.Ho("Neptune",11.15,A.di,"Neptune pulls a little harder than Earth.")
D.i1f=new C.Ho("Jupiter",24.79,A.cX,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.u4=w([D.i1j,D.i1h,D.i1k,D.i1e,D.i1g,D.i1i,D.i1f],B.as("N<Ho>"))
D.djZ=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.dkN=w([0.2,0.5,0.8],x.n)
D.b4K=new C.LH(0,"accordion")
D.d87=w([A.jZ,A.Ag,A.A0],x.x)
D.dgJ=w(["Mail","SMS","Ad"],x.s)
D.d8Q=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.i_t=new C.Bq(D.b4K,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aEL,D.d87,D.dgJ,D.d8Q)
D.afl=new C.LH(1,"flip")
D.dt9=w([A.rv,A.E5,A.ry],x.x)
D.dn2=w(["Unlock","Verify","Secure"],x.s)
D.d6O=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.i_s=new C.Bq(D.afl,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.aEf,D.dt9,D.dn2,D.d6O)
D.b4L=new C.LH(2,"towers")
D.dlE=w([A.Ae,A.mH,A.ix],x.x)
D.dl5=w(["Save","Grow","Earn"],x.s)
D.cVm=w(["","",""],x.s)
D.i_u=new C.Bq(D.b4L,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a77,D.dlE,D.dl5,D.cVm)
D.afm=new C.LH(3,"assemble")
D.duf=w([A.oh,A.fP,A.eh],x.x)
D.dfY=w(["Launch","Charge","Shine"],x.s)
D.dq5=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.i_w=new C.Bq(D.afm,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.aCz,D.duf,D.dfY,D.dq5)
D.b4M=new C.LH(4,"carousel")
D.du1=w([A.be,A.ev],x.O)
D.dgU=w([A.np,A.asc,A.Rf],x.x)
D.daz=w(["Explore","Discover","Learn"],x.s)
D.dnu=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.i_r=new C.Bq(D.b4M,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.du1,D.dgU,D.daz,D.dnu)
D.b4N=new C.LH(5,"burst")
D.dl0=w([A.hZ,A.v1],x.O)
D.d8J=w([A.kn,A.m6,A.hQ],x.x)
D.d97=w(["Cheer","Win","Love"],x.s)
D.dbI=w(["Make some noise","First place","Share the joy"],x.s)
D.i_v=new C.Bq(D.b4N,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.dl0,D.d8J,D.d97,D.dbI)
D.aDX=w([D.i_t,D.i_s,D.i_u,D.i_w,D.i_r,D.i_v],B.as("N<Bq>"))
D.fj7=new B.b1("skin","Skin",A.a4B)
D.fkS=new B.b1("muscle","Muscles",A.QN)
D.fku=new B.b1("organ","Organs",A.hQ)
D.bUr=new B.a_(62747,"MaterialIcons",!1)
D.fkE=new B.b1("bone","Skeleton",D.bUr)
D.fl_=new B.b1("vessel","Blood vessels",A.qb)
D.dlK=w([D.fj7,D.fkS,D.fku,D.fkE,D.fl_],x.r)
D.fsY=new C.vP("Simple legs","Light. Land gently.",0.15,0.2)
D.ft_=new C.vP("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.ft2=new C.vP("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.Es=w([D.fsY,D.ft_,D.ft2],x._)
D.fo3=new B.b7(["beat",0.18,0.28,0])
D.fpu=new B.b7(["burst",0.7,0.2,0])
D.fpF=new B.b7(["delay",0.45,0.5,1])
D.fpc=new B.b7(["ripple",0.75,0.6,3])
D.dfE=w([D.fo3,D.fpu,D.fpF,D.fpc],x.e)
D.dsp=w([Q.lm,R.L_,F.W8],x.u)
D.hXj=new C.H9("First spark","A clock lights a burst and a ripple",D.dfE,D.dsp)
D.foQ=new B.b7(["beat",0.15,0.3,1])
D.fmj=new B.b7(["ripple",0.62,0.15,0])
D.fpB=new B.b7(["delay",0.4,0.45,0])
D.fos=new B.b7(["ripple",0.7,0.45,0])
D.fnY=new B.b7(["delay",0.4,0.7,1])
D.fpf=new B.b7(["shake",0.75,0.75,0])
D.dHB=w([D.foQ,D.fmj,D.fpB,D.fos,D.fnY,D.fpf],x.e)
D.eSj=new B.y(2,4)
D.aU8=new B.y(4,5)
D.djN=w([Q.lm,R.L_,F.W8,D.eSj,D.aU8],x.u)
D.hXl=new C.H9("Heartbeat","Two thumps, then a shake",D.dHB,D.djN)
D.fo9=new B.b7(["dice",0.15,0.7,1])
D.fpH=new B.b7(["echo",0.4,0.7,0])
D.fon=new B.b7(["comet",0.7,0.5,4])
D.fpv=new B.b7(["burst",0.72,0.2,1])
D.foN=new B.b7(["burst",0.3,0.25,0])
D.foa=new B.b7(["pop",0.55,0.85,0])
D.cAM=w([D.fo9,D.fpH,D.fon,D.fpv,D.foN,D.foa],x.e)
D.eRD=new B.y(1,3)
D.eRE=new B.y(1,4)
D.aU4=new B.y(0,5)
D.dtW=w([Q.lm,S.wh,D.eRD,D.eRE,D.aU4],x.u)
D.hXk=new C.H9("Fireworks","Dice launch comets that burst in colour",D.cAM,D.dtW)
D.foh=new B.b7(["beat",0.15,0.2,2])
D.fp_=new B.b7(["chance",0.4,0.2,0])
D.fo6=new B.b7(["ball",0.7,0.12,3])
D.fnR=new B.b7(["chance",0.4,0.5,1])
D.fpG=new B.b7(["ball",0.3,0.08,1])
D.fn8=new B.b7(["ripple",0.7,0.55,3])
D.ctI=w([D.foh,D.fp_,D.fo6,D.fnR,D.fpG,D.fn8],x.e)
D.eSk=new B.y(2,5)
D.cRu=w([Q.lm,S.wh,R.abn,F.W9,D.eSk],x.u)
D.hXi=new C.H9("Rain","Balls fall at random and splash",D.ctI,D.cRu)
D.fp0=new B.b7(["beat",0.12,0.45,2])
D.fpw=new B.b7(["toggle",0.38,0.2,0])
D.fpD=new B.b7(["wash",0.7,0.15,4])
D.fo8=new B.b7(["count3",0.38,0.45,0])
D.fpy=new B.b7(["burst",0.72,0.4,0])
D.foO=new B.b7(["light",0.55,0.7,1])
D.fnS=new B.b7(["pop",0.8,0.8,4])
D.dx4=w([D.fp0,D.fpw,D.fpD,D.fo8,D.fpy,D.foO,D.fnS],x.e)
D.eSR=new B.y(3,6)
D.cwV=w([Q.lm,S.wh,R.abn,F.W9,D.aU4,D.eSR],x.u)
D.hXg=new C.H9("Disco","A beat drives lights, washes and bursts",D.dx4,D.cwV)
D.fpK=new B.b7(["button",0.12,0.2,0])
D.fnz=new B.b7(["delay",0.34,0.2,1])
D.fpJ=new B.b7(["light",0.56,0.2,1])
D.fpC=new B.b7(["delay",0.56,0.45,1])
D.fp1=new B.b7(["ball",0.34,0.6,0])
D.fnQ=new B.b7(["delay",0.34,0.8,1])
D.fm9=new B.b7(["burst",0.7,0.8,5])
D.cgL=w([D.fpK,D.fnz,D.fpJ,D.fpC,D.fp1,D.fnQ,D.fm9],x.e)
D.eV6=new B.y(5,6)
D.dDk=w([Q.lm,S.wh,F.W8,F.W9,D.aU8,D.eV6],x.u)
D.hXh=new C.H9("Domino","Tap the button and watch it run down the line",D.cgL,D.dDk)
D.aEj=w([D.hXj,D.hXl,D.hXk,D.hXi,D.hXg,D.hXh],B.as("N<H9>"))
D.drB=w([0.05,0.15,0.25],x.n)
D.dsD=w([1.5,3,4.5,9,12],x.n)
D.fhk=new B.b1("dice","Dice",A.ob)
D.fiE=new B.b1("coin","Coin",V.A7)
D.fkV=new B.b1("num","Number",A.xB)
D.dsS=w([D.fhk,D.fiE,D.fkV],x.r)
D.dsW=w(["skin","muscle","organ","bone","vessel"],x.s)
D.aEp=w([A.c1,A.aQ,A.bf,A.aH,A.bj,A.c5,A.cX,A.fK],x.O)
D.du2=w([A.c5,A.aH,A.eI,A.bf],x.O)
D.dve=w([],x.h)
D.eJl=new C.es("battery","Battery","\ud83d\udd0b",A.bf,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.eJr=new C.es("solar","Solar panel","\u2600\ufe0f",A.bu,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.eK5=new C.es("crank","Hand crank","\ud83d\udd04",A.cX,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.eJI=new C.es("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aH,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.eJd=new C.es("buck","Step-down converter","\ud83d\udd3d",A.fK,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.eJG=new C.es("regulator","5 V regulator","\ud83e\uddca",A.bQ,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.eKa=new C.es("diode","Diode","\u27a1\ufe0f",A.aQ,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.eJS=new C.es("ldr","Light sensor","\ud83c\udf1e",A.eI,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.eJw=new C.es("switch","Switch","\ud83c\udf9a\ufe0f",A.bj,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.eK7=new C.es("fuse","Fuse","\ud83e\uddef",A.c1,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.eJ5=new C.es("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.fK,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.eJT=new C.es("resistor","Resistor","\u3030\ufe0f",A.aQ,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.eJV=new C.es("bulb","Light bulb","\ud83d\udca1",A.eI,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.eJt=new C.es("led","LED","\ud83d\udd34",A.aC,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.eJx=new C.es("motor","Motor","\u2699\ufe0f",A.bQ,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.eJP=new C.es("buzzer","Buzzer","\ud83d\udd14",A.c5,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.eJm=new C.es("heater","Heater","\ud83d\udd25",A.cX,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.eJK=new C.es("capacitor","Capacitor","\ud83e\udeab",A.cw,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.eJC=new C.es("radio","Radio","\ud83d\udcfb",A.oP,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.eJz=new C.es("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.be,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.eJc=new C.es("voltmeter","Voltmeter","\ud83e\udded",A.bw,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.eJj=new C.es("ammeter","Ammeter","\ud83d\udcdf",A.aQ,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.eJp=new C.es("fan","Fan","\ud83c\udf00",A.aH,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.eKc=new C.es("speaker","Speaker","\ud83d\udd0a",A.c5,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.eK1=new C.es("clock","Digital clock","\u23f0",A.bf,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.eJF=new C.es("calculator","Calculator","\ud83e\uddee",A.Nv,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.eJi=new C.es("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cw,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.eKb=new C.es("router","WiFi router","\ud83d\udcf6",A.fK,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.eKe=new C.es("siren","Siren","\ud83d\udea8",A.aC,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.eJ8=new C.es("toycar","Toy car","\ud83d\ude97",A.cX,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.eKf=new C.es("kettle","Kettle","\ud83e\uded6",A.ne,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.eJg=new C.es("lamp","Desk lamp","\ud83e\ude94",A.eI,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.eJs=new C.es("lights","Party lights","\ud83c\udf84",A.oP,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.eJD=new C.es("fridge","Fridge","\ud83e\uddca",A.hm,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.eJa=new C.es("washer","Washing machine","\ud83e\udee7",A.cw,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.eK2=new C.es("blender","Blender","\ud83e\udd64",A.c1,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.eJA=new C.es("drone","Drone","\ud83d\ude81",A.bQ,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.eJf=new C.es("drill","Power drill","\ud83d\udd29",A.aQ,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.eJE=new C.es("torch","Torch","\ud83d\udd26",A.bO,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.eK_=new C.es("neon","Neon sign","\ud83e\udea7",A.c5,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.eJb=new C.es("microwave","Microwave","\ud83c\udf72",A.cX,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.eJU=new C.es("doorbell","Doorbell","\ud83d\udd14",A.bu,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.eJo=new C.es("camera","Security camera","\ud83d\udcf7",A.an,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.eJO=new C.es("console","Game console","\ud83c\udfae",A.bj,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.eK4=new C.es("heartmon","Heart monitor","\ud83e\ude7a",A.hJ,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.eJ9=new C.es("aquarium","Aquarium","\ud83d\udc20",A.be,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.eJJ=new C.es("lighthouse","Lighthouse","\ud83d\uddfc",A.eI,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.eJR=new C.es("discoball","Disco ball","\ud83e\udea9",A.oP,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.eK9=new C.es("robot","Robot","\ud83e\udd16",A.aH,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.eJ7=new C.es("toaster","Toaster","\ud83c\udf5e",A.ec,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.eKd=new C.es("ledstrip","LED strip","\ud83c\udf08",A.c5,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.eJZ=new C.es("pump","Water pump","\ud83d\udeb0",A.aH,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.eJL=new C.es("hairdryer","Hair dryer","\ud83d\udca8",A.hZ,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.eJX=new C.es("headphones","Headphones","\ud83c\udfa7",A.bj,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.eJh=new C.es("smartwatch","Apple Watch Ultra","\u231a",A.bw,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.eK8=new C.es("tablet","iPad Pro M5","\ud83d\udcf2",A.cw,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.eJ4=new C.es("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hJ,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.eJB=new C.es("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bv,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.eJu=new C.es("appletv","Apple TV 4K","\ud83d\udcfa",A.bP,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.eJQ=new C.es("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.wS,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.eJ6=new C.es("iphonefold","iPhone Fold","\ud83d\udcf1",A.b0,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.eJk=new C.es("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.di,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.eK6=new C.es("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cI,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.eJM=new C.es("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bk,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.eJH=new C.es("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.c8,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.eJY=new C.es("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.aC,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.eJv=new C.es("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.bf,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.eJN=new C.es("honor","Honor Magic V5","\ud83d\udcf1",A.cw,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.eJW=new C.es("vivo","vivo X300 Pro","\ud83d\udcf1",A.cX,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.eK0=new C.es("ereader","Kindle Scribe","\ud83d\udcd6",A.bv,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.eJ3=new C.es("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.ci,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.eJy=new C.es("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cI,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.eJq=new C.es("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.be,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.eJe=new C.es("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.eI,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.eJn=new C.es("carscreen","Luxury car touchscreen","\ud83d\ude98",A.aC,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.eK3=new C.es("vision","Apple Vision Pro","\ud83e\udd7d",A.bj,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.U_=w([D.eJl,D.eJr,D.eK5,D.eJI,D.eJd,D.eJG,D.eKa,D.eJS,D.eJw,D.eK7,D.eJ5,D.eJT,D.eJV,D.eJt,D.eJx,D.eJP,D.eJm,D.eJK,D.eJC,D.eJz,D.eJc,D.eJj,D.eJp,D.eKc,D.eK1,D.eJF,D.eJi,D.eKb,D.eKe,D.eJ8,D.eKf,D.eJg,D.eJs,D.eJD,D.eJa,D.eK2,D.eJA,D.eJf,D.eJE,D.eK_,D.eJb,D.eJU,D.eJo,D.eJO,D.eK4,D.eJ9,D.eJJ,D.eJR,D.eK9,D.eJ7,D.eKd,D.eJZ,D.eJL,D.eJX,D.eJh,D.eK8,D.eJ4,D.eJB,D.eJu,D.eJQ,D.eJ6,D.eJk,D.eK6,D.eJM,D.eJH,D.eJY,D.eJv,D.eJN,D.eJW,D.eK0,D.eJ3,D.eJy,D.eJq,D.eJe,D.eJn,D.eK3],B.as("N<es>"))
D.dvT=w([5,10,15,25,45,60],x.t)
D.dwh=w([-0.045,0.03,-0.015],x.n)
D.aET=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.vW=w([0.05,0.2,0.35],x.n)
D.aEX=w([A.d0,A.iM,A.v4,A.GN],x.O)
D.bcF=new B.ac(0,A.H,A.i0,A.dP,6)
D.dzi=w([D.bcF],x.V)
D.eQM=new B.y(0,"AND")
D.eRG=new B.y(1,"Adder")
D.eSl=new B.y(2,"Blinker")
D.eSS=new B.y(3,"Memory")
D.dA5=w([D.eQM,D.eRG,D.eSl,D.eSS],x.L)
D.aF6=w([-104,0,104],x.n)
D.aF8=w([-14,3],x.n)
D.dB5=w([-8,0,8],x.n)
D.aFg=w([-92,0,92],x.n)
D.dBz=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.fsV=new C.vP("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.ft1=new C.vP("Medium tank","Balanced.",0.35,1)
D.ft0=new C.vP("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.Uf=w([D.fsV,D.ft1,D.ft0],x._)
D.om=w([0.04,0.2,0.36],x.n)
D.aFs=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.fkt=new B.b1(D.b4K,"Fold",V.at9)
D.fjn=new B.b1(D.afl,"Flip",A.DM)
D.bUI=new B.a_(62889,"MaterialIcons",!1)
D.fkR=new B.b1(D.b4L,"Rise",D.bUI)
D.atm=new B.a_(983870,"MaterialIcons",!1)
D.fgF=new B.b1(D.afm,"Assemble",D.atm)
D.fgS=new B.b1(D.b4M,"Spin",D.arP)
D.fgM=new B.b1(D.b4N,"Pop",A.kn)
D.dDh=w([D.fkt,D.fjn,D.fkR,D.fgF,D.fgS,D.fgM],B.as("N<+(LH,o,a_)>"))
D.aFx=w([A.c5,A.eI,A.bw,A.aH,A.bj,A.c1],x.O)
D.dDI=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dEO=w([3,4.5,5,6,9],x.n)
D.bdk=new B.ac(0,A.H,A.ba,A.J,16)
D.dFh=w([D.bdk],x.V)
D.haA=new B.D("\ud83e\uddcd",null,S.LU,null,null,null,null,null,null,null,null,null)
D.cfI=new B.Jg(5,null,null,A.by,A.c5,null,null,null,null)
D.fA_=new B.a5(150,null,D.cfI,null)
D.fSx=new B.G(!0,A.ab,null,null,null,null,14,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hdV=new B.D("Getting the body ready...",null,D.fSx,null,null,null,null,null,null,null,null,null)
D.haD=new B.D("Real 3D anatomy, kept on your phone",null,Af.BC,null,null,null,null,null,null,null,null,null)
D.dFk=w([D.haA,A.aB,D.fA_,A.af,D.hdV,A.at,D.haD],x.p)
D.dFU=w(["solar","turbine","crank","pot"],x.s)
D.dGo=w([0,0.35,0.75,1],x.n)
D.dHR=w(["volts","level","ohms","on"],x.s)
D.bp4=new B.u(1,0.23137254901960785,0.43529411764705883,0.8470588235294118,A.q)
D.bAe=new B.u(1,0.0392156862745098,0.10196078431372549,0.25098039215686274,A.q)
D.dHV=w([A.al5,D.bp4,A.m0,D.bAe],x.O)
D.dJt=w([A.jZ,A.Ag,A.A0,A.rv,A.E5,A.ry,A.Ae,A.mH,A.ix,A.oh,A.fP,A.eh,A.hQ,A.ih,A.m6,A.kP,A.rx,A.q9,A.lH,A.Iq,A.vI,A.DL,A.DJ,A.Rc,A.Ip,A.DW,A.QN,A.asy,H.ati,A.kn],x.x)
D.ez5={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.hPc=new C.z2("Switch",F.p5,A.bu,0,"Tap it to turn it ON or OFF.")
D.hP8=new C.z2("Blinker",A.mG,A.bw,0,"Turns itself ON and OFF. Tap to change the speed.")
D.hP9=new C.z2("AND",D.atm,A.cw,2,"ON only when BOTH inputs are ON.")
D.bWe=new B.a_(63671,"MaterialIcons",!1)
D.hP7=new C.z2("OR",D.bWe,A.bj,2,"ON when EITHER input is ON.")
D.hPa=new C.z2("XOR",A.a4t,A.c5,2,"ON when the inputs are DIFFERENT.")
D.hP4=new C.z2("NAND",A.tP,A.aH,2,"OFF only when BOTH inputs are ON.")
D.bVi=new B.a_(63176,"MaterialIcons",!1)
D.hP5=new C.z2("NOR",D.bVi,A.fK,2,"ON only when BOTH inputs are OFF.")
D.hP6=new C.z2("NOT",W.DY,A.cX,1,"Flips the signal: ON becomes OFF.")
D.hPb=new C.z2("Light",A5.lf,A.eI,1,"Glows when its input is ON.")
D.hPd=new C.z2("Buzzer",T.p7,A.c1,1,"Beeps while its input is ON.")
D.AW=new B.bm(D.ez5,[D.hPc,D.hP8,D.hP9,D.hP7,D.hPa,D.hP4,D.hP5,D.hP6,D.hPb,D.hPd],B.as("bm<o,z2>"))
D.eAV={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22,smartwatch:23}
D.Bn=new C.KF(0,"tv")
D.fuv=new C.mr("Samsung Neo QLED 8K",D.Bn,F.z2,A.aH)
D.ful=new C.mr("LG OLED evo G5",D.Bn,A.ez,A.hJ)
D.fuc=new C.mr("Sony Bravia 9",D.Bn,A.tb,A.bv)
D.fug=new C.mr("Apple TV 4K",D.Bn,A.dV,A.bP)
D.fud=new C.mr("Bang and Olufsen Beovision",D.Bn,F.Cp,F.wS)
D.abI=new C.KF(1,"iphone")
D.aV1=new C.mr("iPhone 18 Pro Max",D.abI,D.amF,A.ci)
D.Bp=new C.KF(3,"fold")
D.bAs=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.fuq=new C.mr("iPhone Fold",D.Bp,D.bAs,A.b0)
D.Bo=new C.KF(2,"android")
D.fur=new C.mr("Samsung Galaxy S26 Ultra",D.Bo,F.Ns,A.di)
D.bsH=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.fuj=new C.mr("Samsung Galaxy Z Fold7",D.Bp,D.bsH,A.cI)
D.fuf=new C.mr("Google Pixel 10 Pro XL",D.Bo,A.d0,A.bk)
D.fun=new C.mr("Xiaomi 16 Ultra",D.Bo,A.iu,A.c8)
D.fui=new C.mr("Huawei Mate 80 Pro Max",D.Bo,A.eu,A.aC)
D.fue=new C.mr("OPPO Find X9 Ultra",D.Bo,A.ej,A.bf)
D.fux=new C.mr("Honor Magic V5",D.Bp,A.dl,A.cw)
D.fuk=new C.mr("vivo X300 Pro",D.Bo,A.h_,A.cX)
D.aV2=new C.KF(4,"tablet")
D.fup=new C.mr("iPad Pro M5",D.aV2,A.d0,A.aH)
D.abJ=new C.KF(5,"reader")
D.fuy=new C.mr("Kindle Scribe",D.abJ,A.cU,A.bv)
D.y1=new C.KF(6,"computer")
D.fuo=new C.mr("MacBook Pro M5 Max",D.y1,A.d0,A.ci)
D.fuu=new C.mr("iMac 32 inch",D.y1,A.bP,A.cI)
D.fum=new C.mr("Pro Display XDR 8K",D.y1,A.iu,A.be)
D.fuh=new C.mr("Sony Laser Projector",D.y1,A.cx,A.eI)
D.fus=new C.mr("Luxury car touchscreen",D.y1,M.ni,A.aC)
D.fuw=new C.mr("Apple Vision Pro",D.y1,A.cz,A.bj)
D.fut=new C.mr("Apple Watch Ultra",D.Bp,F.Cp,A.bw)
D.mN=new B.bm(D.eAV,[D.fuv,D.ful,D.fuc,D.fug,D.fud,D.aV1,D.fuq,D.fur,D.fuj,D.fuf,D.fun,D.fui,D.fue,D.fux,D.fuk,D.fup,D.fuy,D.fuo,D.fuu,D.fum,D.fuh,D.fus,D.fuw,D.fut],B.as("bm<o,mr>"))
D.d7p=w([A.z],x.M)
D.d7U=w([A.aw,A.aD],x.M)
D.diJ=w([A.aw,A.z,A.aD],x.M)
D.dks=w([A.aw,A.lU,A.z,A.ls,A.aD],x.M)
D.dA1=w([A.aw,A.lU,A.a5,A.a9,A.ls,A.aD],x.M)
D.dOB=new B.d2([1,D.d7p,2,D.d7U,3,D.diJ,4,A.aG8,5,D.dks,6,D.dA1],B.as("d2<F,ah<dl>>"))
D.eBJ={Calm:0,Box:1,Sleep:2}
D.cOO=w([4,2,6,0],x.n)
D.cOV=w([4,4,4,4],x.n)
D.cOW=w([4,7,8,0],x.n)
D.UI=new B.bm(D.eBJ,[D.cOO,D.cOV,D.cOW],B.as("bm<o,ah<H>>"))
D.ezh={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.yB=new C.a2C(0,"source")
D.djR=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hVX=new C.qO("Clock",A.mG,D.yB,A.bw,D.djR)
D.hVT=new C.qO("Button",A.E0,D.yB,A.aQ,A.M)
D.dF0=w(["random","quick","slow"],x.s)
D.hW3=new C.qO("Dice",A.ob,D.yB,A.c5,D.dF0)
D.bVR=new B.a_(63484,"MaterialIcons",!1)
D.Gc=new C.a2C(1,"logic")
D.dKp=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hW_=new C.qO("Delay",D.bVR,D.Gc,A.cw,D.dKp)
D.dw0=w(["fast","mid","slow"],x.s)
D.hW4=new C.qO("Echo",A.asO,D.Gc,A.bj,D.dw0)
D.hW1=new C.qO("Every 2nd",W.DY,D.Gc,A.fK,A.M)
D.bVx=new B.a_(63309,"MaterialIcons",!1)
D.hVZ=new C.qO("Every 3rd",D.bVx,D.Gc,A.aH,A.M)
D.cg2=w(["50%","25%","75%"],x.s)
D.hW6=new C.qO("Chance",A8.ato,D.Gc,A.cX,D.cg2)
D.rZ=new C.a2C(2,"out")
D.hVV=new C.qO("Light",A5.lf,D.rZ,A.eI,A.M)
D.hVW=new C.qO("Burst",A.kn,D.rZ,A.c5,A.M)
D.hVU=new C.qO("Ripple",A.Al,D.rZ,A.be,A.M)
D.hW2=new C.qO("Ball",A.at0,D.rZ,A.cX,A.M)
D.hW0=new C.qO("Comet",A.oh,D.rZ,A.bj,A.M)
D.bXn=new B.a_(983669,"MaterialIcons",!1)
D.hW5=new C.qO("Shake",D.bXn,D.rZ,A.c1,A.M)
D.hW7=new C.qO("Pop",A.DI,D.rZ,A.bf,A.M)
D.hVY=new C.qO("Wash",A.QR,D.rZ,A.pM,A.M)
D.nt=new B.bm(D.ezh,[D.hVX,D.hVT,D.hW3,D.hW_,D.hW4,D.hW1,D.hVZ,D.hW6,D.hVV,D.hVW,D.hVU,D.hW2,D.hW0,D.hW5,D.hW7,D.hVY],B.as("bm<o,qO>"))
D.ezI={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bDf=new C.h6(20,4,13,!1)
D.bDG=new C.h6(14,5,13.5,!1)
D.bDx=new C.h6(9,2.4,10,!1)
D.bDL=new C.h6(7,5,12.5,!1)
D.bDA=new C.h6(8,3.5,12,!1)
D.bDb=new C.h6(15,2,6,!1)
D.bDJ=new C.h6(45,6,13.5,!0)
D.bDr=new C.h6(10,8,13.5,!1)
D.bDj=new C.h6(25,3,12,!0)
D.bDp=new C.h6(35,4,12,!0)
D.bDq=new C.h6(40,4.5,9.5,!0)
D.bDs=new C.h6(55,3,9,!0)
D.bDc=new C.h6(18,3,9,!1)
D.bDI=new C.h6(22,4,13.5,!1)
D.bDB=new C.h6(16,5,13.5,!1)
D.bDn=new C.h6(30,4,9,!0)
D.bDU=new C.h6(5,3.5,13,!1)
D.bDv=new C.h6(25,3,13.5,!0)
D.bDE=new C.h6(14,2.5,9,!1)
D.bDu=new C.h6(6,6,13,!1)
D.bDM=new C.h6(30,1.2,5,!0)
D.bDT=new C.h6(35,3,4.5,!0)
D.bDP=new C.h6(20,4.5,7.5,!0)
D.bDt=new C.h6(55,5.5,13.5,!0)
D.bDa=new C.h6(45,5.5,13.5,!0)
D.bDF=new C.h6(40,5.5,13.5,!0)
D.bDS=new C.h6(60,6,13.5,!0)
D.ana=new C.h6(28,4,7,!0)
D.HE=new C.h6(25,4,7,!0)
D.bDm=new C.h6(30,4,7,!0)
D.bDh=new C.h6(22,4,7,!0)
D.bDi=new C.h6(24,4,7,!0)
D.bDw=new C.h6(60,3,5.5,!0)
D.bDd=new C.h6(18,9,14,!0)
D.bDk=new C.h6(25,9,14,!0)
D.anb=new C.h6(30,8,14,!0)
D.bDg=new C.h6(20,8,14,!0)
D.bDo=new C.h6(30,9,14,!0)
D.bDN=new C.h6(22,5,9.5,!0)
D.bDe=new C.h6(30,2.5,10.5,!0)
D.bDC=new C.h6(50,5.5,13.5,!0)
D.bDR=new C.h6(12,2,9.5,!1)
D.bDz=new C.h6(16,1.3,9.5,!0)
D.bDK=new C.h6(40,2.5,7,!0)
D.bDQ=new C.h6(60,1.2,4.8,!0)
D.bDO=new C.h6(18,5,13.5,!0)
D.bDH=new C.h6(8,2,9.5,!1)
D.bDy=new C.h6(12,2.5,8,!1)
D.bDl=new C.h6(20,3.5,13.5,!0)
D.bDD=new C.h6(3.5,3,13,!1)
D.AX=new B.bm(D.ezI,[D.bDf,D.bDG,D.bDx,D.bDL,D.bDA,D.bDb,D.bDJ,D.bDr,D.bDj,D.bDp,D.bDq,D.bDs,D.bDc,D.bDI,D.bDB,D.bDn,D.bDU,D.bDv,D.bDE,D.bDu,D.bDM,D.bDT,D.bDP,D.bDt,D.bDa,D.bDF,D.bDS,D.ana,D.HE,D.bDm,D.HE,D.bDh,D.HE,D.bDi,D.ana,D.HE,D.bDw,D.bDd,D.bDk,D.anb,D.bDg,D.bDo,D.bDN,D.bDe,D.bDC,D.bDR,D.bDz,D.bDK,D.bDQ,D.HE,D.anb,D.bDO,D.bDH,D.bDy,D.bDl,D.bDD],B.as("bm<o,h6>"))
D.eze={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.fg8=new B.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eV3=new B.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eUZ=new B.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.f72=new B.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.f80=new B.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.f6Z=new B.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eT0=new B.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.f4M=new B.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.fgh=new B.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.f8n=new B.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eYB=new B.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eSF=new B.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eXA=new B.y("Movement","They pull your legs together and help you balance.")
D.eZC=new B.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eVc=new B.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.fdu=new B.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.feH=new B.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.f4w=new B.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.fep=new B.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.f2Z=new B.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.f8v=new B.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eSM=new B.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.f__=new B.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.f89=new B.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.f3m=new B.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.fey=new B.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.f6r=new B.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eSZ=new B.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.f97=new B.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.fd5=new B.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.fb2=new B.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eQZ=new B.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.f68=new B.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.f6d=new B.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.f_L=new B.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eVu=new B.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.eZo=new B.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.f5_=new B.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.fbW=new B.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.fgd=new B.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.f8s=new B.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.eQE=new B.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.f5b=new B.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.eRy=new B.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.fcb=new B.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.fdq=new B.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.f5E=new B.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.fcr=new B.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eSO=new B.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.fe3=new B.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eWW=new B.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.fby=new B.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.f_p=new B.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.f3g=new B.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.f8O=new B.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.fed=new B.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.fe5=new B.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.fe9=new B.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.f3P=new B.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.f9M=new B.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.fb_=new B.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.fdQ=new B.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.f5D=new B.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.f1v=new B.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.f0d=new B.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.f62=new B.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.f8H=new B.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.f24=new B.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.f2M=new B.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eXk=new B.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.fdm=new B.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eYa=new B.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.eRv=new B.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.f_K=new B.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.eRq=new B.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eW_=new B.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.f_P=new B.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eYj=new B.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.f93=new B.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eZF=new B.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.ffU=new B.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.f0n=new B.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.f3H=new B.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.f6A=new B.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eYt=new B.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eYc=new B.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dPL=new B.bm(D.eze,[D.fg8,D.eV3,D.eUZ,D.f72,D.f80,D.f6Z,D.eT0,D.f4M,D.fgh,D.f8n,D.eYB,D.eSF,D.eXA,D.eZC,D.eVc,D.fdu,D.feH,D.f4w,D.fep,D.f2Z,D.f8v,D.eSM,D.f__,D.f89,D.f3m,D.fey,D.f6r,D.eSZ,D.f97,D.fd5,D.fb2,D.eQZ,D.f68,D.f6d,D.f_L,D.eVu,D.eZo,D.f5_,D.fbW,D.fgd,D.f8s,D.eQE,D.f5b,D.eRy,D.fcb,D.fdq,D.f5E,D.fcr,D.eSO,D.fe3,D.eWW,D.fby,D.f_p,D.f3g,D.f8O,D.fed,D.fe5,D.fe9,D.f3P,D.f9M,D.fb_,D.fdQ,D.f5D,D.f1v,D.f0d,D.f62,D.f8H,D.f24,D.f2M,D.eXk,D.fdm,D.eYa,D.eRv,D.f_K,D.eRq,D.eW_,D.f_P,D.eYj,D.f93,D.eZF,D.ffU,D.f0n,D.f3H,D.f6A,D.eYt,D.eYc],B.as("bm<o,+(o,o)>"))
D.dYE=new C.Wr(null)
D.dYR=new C.Ws(null)
D.e_V=new C.Wy(null)
D.e40=new C.X8(null)
D.e44=new C.X9(null)
D.e4D=new C.Xh(null)
D.e8y=new C.XU(null)
D.e9v=new C.XV(null)
D.edI=new C.Y_(null)
D.etB=new C.Y0(null)
D.etE=new C.Y5(null)
D.evO=new C.Yp(null)
D.evP=new C.aaF(null)
D.exS=new C.Yy(null)
D.eBY=new B.m(0,118)
D.eBZ=new B.m(0,13)
D.eC_=new B.m(0,17)
D.eC2=new B.m(0,330)
D.eC9=new B.m(0,-17)
D.eCa=new B.m(0,-18)
D.eCb=new B.m(0,-19)
D.eCd=new B.m(0,-28)
D.eCf=new B.m(0,-31)
D.eCg=new B.m(0,-32)
D.eCm=new B.m(-9.5,-11)
D.eCp=new B.m(10,20)
D.eCs=new B.m(10,-13)
D.eCu=new B.m(10,-22)
D.eCv=new B.m(10,-4)
D.eCz=new B.m(11,0)
D.aaw=new B.m(11,8)
D.eCF=new B.m(12,2)
D.eCG=new B.m(14,0)
D.eCH=new B.m(14,12)
D.aOv=new B.m(14,8)
D.eCI=new B.m(14,-17)
D.aOx=new B.m(14,-3)
D.aOy=new B.m(14,-4)
D.eCL=new B.m(15,0)
D.eCM=new B.m(15,-12)
D.eCP=new B.m(16,-8)
D.eCQ=new B.m(18,14)
D.aOE=new B.m(20,0)
D.eCY=new B.m(20,15)
D.eCZ=new B.m(20,-3)
D.eD_=new B.m(21,8)
D.eD0=new B.m(21,-36)
D.eD4=new B.m(22,10)
D.aOG=new B.m(22,8)
D.eD5=new B.m(22,-25)
D.eD6=new B.m(24,0)
D.eD7=new B.m(24,2)
D.eDa=new B.m(24,-18)
D.eDb=new B.m(24,-22)
D.eDf=new B.m(25,8)
D.eDg=new B.m(26,0)
D.eDk=new B.m(28,-30)
D.eDr=new B.m(30,18)
D.eDs=new B.m(30,2)
D.eDv=new B.m(31,19)
D.eDx=new B.m(32,0)
D.aOK=new B.m(34,0)
D.aOL=new B.m(34,-32)
D.KE=new B.m(36,0)
D.eDK=new B.m(3,-1)
D.eDN=new B.m(40,3)
D.eE0=new B.m(4,11)
D.eE3=new B.m(4,-2)
D.eE7=new B.m(5,0)
D.eE8=new B.m(5,17)
D.eE9=new B.m(5,6)
D.eEe=new B.m(6,11)
D.eEg=new B.m(7,-19)
D.eEm=new B.m(8,7)
D.eEn=new B.m(8,-10)
D.eEo=new B.m(8,-14)
D.aOQ=new B.m(9,0)
D.eEz=new B.m(-20.5,-17.6)
D.eEC=new B.m(-2.6,-1)
D.eEM=new B.m(2.6,1)
D.eEV=new B.m(-9,12.2)
D.eFy=new B.m(-10,12)
D.aOZ=new B.m(-10,4)
D.eFC=new B.m(-11,0)
D.eFE=new B.m(-11,-34)
D.eFI=new B.m(-12,-5)
D.eFJ=new B.m(-14,0)
D.eFK=new B.m(-14,13)
D.eFL=new B.m(-14,-19)
D.eFN=new B.m(-14,-23)
D.eFO=new B.m(-15,6)
D.eFR=new B.m(-16,14)
D.eFT=new B.m(-16,-8)
D.eFU=new B.m(-17,10)
D.eFV=new B.m(-17,-18)
D.eFW=new B.m(-17,-8)
D.eFY=new B.m(-18,20)
D.eFZ=new B.m(-18,-9)
D.aP1=new B.m(-20,0)
D.eG0=new B.m(-20,16)
D.eG1=new B.m(-20,-9)
D.VD=new B.m(-22,8)
D.eG2=new B.m(-22,-10)
D.eG3=new B.m(-24,10)
D.eG4=new B.m(-24,11)
D.eG5=new B.m(-24,14)
D.eG6=new B.m(-24,-22)
D.eG8=new B.m(-25,-11)
D.eG9=new B.m(-26,0)
D.eGa=new B.m(-26,-18)
D.eGb=new B.m(-27,-24)
D.eGc=new B.m(-28,-36)
D.eGd=new B.m(-2,9)
D.eGe=new B.m(-2,-10)
D.eGf=new B.m(-2,-20)
D.eGi=new B.m(-2,-9)
D.eGk=new B.m(-32,0)
D.aP3=new B.m(-34,0)
D.eGp=new B.m(-40,3)
D.eGr=new B.m(-4,11)
D.eGs=new B.m(-4,-17)
D.eGt=new B.m(-4,-2)
D.eGx=new B.m(-5,0)
D.eGy=new B.m(-5,20)
D.eGz=new B.m(-5,6)
D.eGA=new B.m(-6,6)
D.eGB=new B.m(-6,-42)
D.aP5=new B.m(-7,-19)
D.eGD=new B.m(-7,-24)
D.eGE=new B.m(-8,-1)
D.eGH=new B.m(-8,-9)
D.aaG=new B.m(-9,0)
D.eGI=new B.m(-9,1)
D.eGK=new B.m(-9,-23)
D.h1K=new B.D("Thinking\u2026",null,N.hI,null,null,null,null,null,null,null,null,null)
D.eHM=new B.C(A.jE,D.h1K,null)
D.hiM=new B.D("Start from a ready-made board",null,A.fT,null,null,null,null,null,null,null,null,null)
D.eI_=new B.C(A.vm,D.hiM,null)
D.bLj=new B.R(4,0,4,14)
D.fXM=new B.G(!0,A.aF,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2L=new B.D("Games and little helpers for a spare minute.",null,D.fXM,null,null,null,null,null,null,null,null,null)
D.eIc=new B.C(D.bLj,D.h2L,null)
D.dwH=w([A.hX,A.bl],x.O)
D.ePq=new B.bU(A.z,0.5,A.w,null,0,D.dwH,null,null)
D.ePr=new B.bU(A.z,0.5,A.w,null,0,D.aFO,null,null)
D.dmv=w([A.c,A.bQ],x.O)
D.ePt=new B.bU(A.z,0.5,A.w,null,0,D.dmv,null,null)
D.dGa=w([A.bP,A.cz],x.O)
D.aTY=new B.bU(A.z,0.5,A.w,null,0,D.dGa,null,null)
D.cZ4=w([A.c,A.bP],x.O)
D.ePy=new B.bU(A.n_,0.5,A.w,null,0,D.cZ4,null,null)
D.bAw=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.dE2=w([A.fy,D.bAw],x.O)
D.ePD=new B.bU(A.n_,0.5,A.w,null,0,D.dE2,null,null)
D.cS1=w([A.d0,A.cx],x.O)
D.ePE=new B.bU(A.z,0.5,A.w,null,0,D.cS1,null,null)
D.d69=w([A.h9,A.aQ,A.de],x.O)
D.ePH=new B.bU(A.n_,0.5,A.w,null,0,D.d69,null,null)
D.dxr=w([A.cz,M.ni],x.O)
D.ePI=new B.bU(A.n_,0.5,A.w,null,0,D.dxr,null,null)
D.ePN=new B.bU(A.z,0.5,A.w,null,0,D.aC_,null,null)
D.dH5=w([A.cz,A.ip],x.O)
D.ePV=new B.bU(A.z,0.5,A.w,null,0,D.dH5,null,null)
D.dg2=w([A.iM,A.bl],x.O)
D.ePY=new B.bU(A.n_,0.5,A.w,null,0,D.dg2,null,null)
D.aU2=new B.aQ(9,9)
D.eQ3=new B.aQ(1.4,1.4)
D.eQ5=new B.aQ(2.5,2.5)
D.fr_=new B.a4(10,-8,18,-2)
D.fr0=new B.a4(14,-14,20,14)
D.fr2=new B.a4(20,-2,30,2)
D.fr7=new B.a4(4,-13,30,-3)
D.frd=new B.a4(8,-7,12,7)
D.frr=new B.a4(-12,12,12,19)
D.frs=new B.a4(-12,14,12,22)
D.frt=new B.a4(-12,-22,12,8)
D.fru=new B.a4(-12,-25,12,19)
D.frv=new B.a4(-12,-26,12,-6)
D.frw=new B.a4(-12,-4,12,14)
D.fry=new B.a4(-14,20,14,24)
D.frz=new B.a4(-14,6,14,10)
D.frA=new B.a4(-14,-17,14,15)
D.frB=new B.a4(-14,-26,14,18)
D.frC=new B.a4(-14,-26,14,-14)
D.frD=new B.a4(-14,-4,14,20)
D.frF=new B.a4(-15,-29,15,25)
D.frG=new B.a4(-16,-16,16,16)
D.frJ=new B.a4(-16,-22,-9,18)
D.frK=new B.a4(-16,-24,16,-10)
D.frM=new B.a4(-16,-2,16,20)
D.frO=new B.a4(-18,20,18,24)
D.frP=new B.a4(-18,-18,18,20)
D.frQ=new B.a4(-20,12,20,22)
D.frR=new B.a4(-20,-28,20,26)
D.frS=new B.a4(-22,15,22,19)
D.aUI=new B.a4(-22,-26,22,24)
D.frU=new B.a4(-24,-12,10,22)
D.frV=new B.a4(-24,-14,22,8)
D.frW=new B.a4(-24,-6,24,20)
D.aUJ=new B.a4(-24,-9,24,9)
D.frX=new B.a4(-25,14,25,19)
D.frY=new B.a4(-26,-14,14,8)
D.frZ=new B.a4(-26,-4,26,20)
D.fs_=new B.a4(-26,-6,4,6)
D.aUK=new B.a4(-28,-13,28,13)
D.fs0=new B.a4(-28,-16,28,16)
D.fs1=new B.a4(-28,-16,28,8)
D.fs2=new B.a4(-28,-22,28,22)
D.fs3=new B.a4(-29,-11,29,11)
D.fs4=new B.a4(-30,-12,30,14)
D.fs5=new B.a4(-30,-14,0,14)
D.fs6=new B.a4(-30,-18,30,20)
D.fs7=new B.a4(-30,-28,30,14)
D.fs8=new B.a4(-30,-2,30,18)
D.fs9=new B.a4(-30,-4,30,18)
D.fsa=new B.a4(-32,-17,32,17)
D.fsb=new B.a4(-32,-28,32,18)
D.fsc=new B.a4(-33,-21,33,17)
D.fsd=new B.a4(-34,0,34,10)
D.fse=new B.a4(-34,14,34,26)
D.abz=new B.a4(-34,-18,34,18)
D.fsf=new B.a4(-36,-24,36,20)
D.fsg=new B.a4(-38,-22,38,22)
D.fsi=new B.a4(-3,12,3,22)
D.fsj=new B.a4(-3,5,3,15)
D.fsn=new B.a4(-46,-34,46,28)
D.fsp=new B.a4(-48,-3,48,3)
D.fss=new B.a4(-6,18,24,24)
D.fst=new B.a4(-6,5,6,12)
D.fsu=new B.a4(-6,-22,6,-15)
D.fsy=new B.a4(-9,-16,9,22)
D.fsz=new B.a4(-4.5,-24,4.5,-21.2)
D.fsB=new B.a4(14,-9,17.5,9)
D.eB4={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aVR=new B.dd(D.eB4,5,x.Q)
D.eAx={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.fwe=new B.dd(D.eAx,10,x.Q)
D.fyA=new B.av(24,44)
D.fyY=new B.av(54,38)
D.fz3=new B.av(66,38)
D.bi_=new B.fs(2,null,null,null,null,A.bj,null,null,null,null)
D.fA7=new B.a5(16,16,D.bi_,null)
D.aWX=new B.hZ(3,12,12,0.82,null)
D.fN5=new B.G(!0,A.wO,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHr=new B.eE("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cV,null,null,null,null,null,null,D.fN5)
D.fSl=new B.G(!0,A.l3,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHx=new B.eE("AI",null,null,A.cV,null,null,null,null,null,null,D.fSl)
D.fHP=new B.G(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIl=new B.G(!0,A.bq,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIL=new B.G(!0,A.cw,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJD=new B.G(!0,A.c,null,null,null,null,13.5,A.C,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fK9=new B.G(!0,A.aR,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx_=new B.d4(A.i0,A.dP,6)
D.dpN=w([D.fx_],B.as("N<d4>"))
D.fL9=new B.G(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.dpN,null,null,null)
D.fLe=new B.G(!0,A.eH,null,null,null,null,12.5,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLj=new B.G(!0,A.bX,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLW=new B.G(!0,A.bX,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fM3=new B.G(!0,A.aF,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fN1=new B.G(!0,A.bX,null,null,null,null,9.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fN9=new B.G(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNH=new B.G(!0,A.aF,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOc=new B.G(!0,A.aQ,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOf=new B.G(!0,A.c,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.aGb,null,null,null)
D.fOm=new B.G(!0,A.c,null,null,null,null,12.5,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fP6=new B.G(!0,A.bF,null,null,null,null,10.5,A.u,null,0.5,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQg=new B.G(!0,A.v9,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQV=new B.G(!0,A.bO,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fR3=new B.G(!0,A.aF,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRR=new B.G(!0,A.ms,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fS1=new B.G(!0,A.cz,null,null,null,null,9.5,null,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aZa=new B.G(!0,A.c,null,null,null,null,9.5,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTc=new B.G(!0,A.j0,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTw=new B.G(!0,A.bX,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fU3=new B.G(!0,A.bf,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVB=new B.G(!0,A.v,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fW7=new B.G(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWp=new B.G(!0,A.aQ,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWN=new B.G(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWQ=new B.G(!0,A.aQ,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fY2=new B.G(!0,A.v9,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYp=new B.G(!0,A.bf,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLm=new B.G(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYO=new B.D("\u26a0\ufe0f ",null,D.fLm,null,null,null,null,null,null,null,null,null)
D.fZ0=new B.D("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A3.BE,null,null,null,null,null,null,null,null,null)
D.h_G=new B.D("Pick one, then change it and see what happens.",null,A3.BE,null,null,null,null,null,null,null,null,null)
D.fMx=new B.G(!0,A.ab,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0H=new B.D("What do you want to invent? Type it below, or tap an idea.",null,D.fMx,null,null,null,null,null,null,null,null,null)
D.fQQ=new B.G(!0,A.c1,null,null,null,null,12.5,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1d=new B.D("Burnt out! Press Repair.",null,D.fQQ,null,null,null,null,null,null,null,null,null)
D.h2l=new B.D("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.h2Z=new B.D("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.hi,null,null,null,null,null,null,null,null,null)
D.h3C=new B.D("Make it yours",null,A.jr,null,null,null,null,null,null,null,null,null)
D.h6R=new B.D("5G",null,A4.aYv,null,null,null,null,null,null,null,null,null)
D.h7S=new B.D("Pick how big the screen is on the board",null,N.hI,null,null,null,null,null,null,null,null,null)
D.fTO=new B.G(!0,A.bX,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h83=new B.D("WHAT HAPPENS",null,D.fTO,null,null,null,null,null,null,null,null,null)
D.h9P=new B.D("Check",null,null,null,null,null,null,null,null,null,null,null)
D.hau=new B.D("Change the words and pictures on the three slabs.",null,A3.BE,null,null,null,null,null,null,null,null,null)
D.haH=new B.D("All the parts and wires will be removed.",null,A.hH,null,null,null,null,null,null,null,null,null)
D.hb1=new B.D("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.hbB=new B.D("Tap the crank on the board again and again to spin it faster.",null,N.hI,null,null,null,null,null,null,null,null,null)
D.hcQ=new B.D("\ud83c\udfaf Challenges",null,A.dw,null,null,null,null,null,null,null,null,null)
D.hdm=new B.D("Remove this part",null,A1.aY5,null,null,null,null,null,null,null,null,null)
D.hdH=new B.D("Clear the board?",null,A.du,null,null,null,null,null,null,null,null,null)
D.fTd=new B.G(!0,A.bw,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hdZ=new B.D("How the Lab works",null,D.fTd,null,null,null,null,null,null,null,null,null)
D.fJQ=new B.G(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hej=new B.D("Electronics Lab",null,D.fJQ,null,null,null,null,A.a2,null,1,null,null)
D.hen=new B.D("?",null,R.aZI,null,null,null,null,null,null,null,null,null)
D.hfJ=new B.D("Ready-made circuits",null,A.dw,null,null,null,null,null,null,null,null,null)
D.hgo=new B.D("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,N.hI,null,null,null,null,null,null,null,null,null)
D.fWu=new B.G(!0,A.aQ,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hjW=new B.D("\u26a0 There is no air here, so a parachute will not work.",null,D.fWu,null,null,null,null,null,null,null,null,null)
D.hl6=new B.D("Download the scene (GIF)",null,A.cK,null,null,null,null,null,null,null,null,null)
D.hl9=new B.D("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,A1.aY2,null,null,null,null,null,null,null,null,null)
D.hlF=new B.D("NGMY",null,A.wo,null,null,null,null,null,null,null,null,null)
D.hlS=new B.D("You build a machine. A little light runs along the wires, and every part it touches does something.",null,Ah.Xl,null,null,null,null,null,null,null,null,null)
D.hmg=new B.D("Tap it to change its setting. Drag from the right dot to connect.",null,A.mg,null,null,null,null,null,null,null,null,null)
D.hnn=new B.D("TOOLBOX",null,Ae.acX,null,null,null,null,null,null,null,null,null)
D.hLR=new B.bf("electronics-part-card",x.W)
D.hLT=new B.bf("device-learn-more",x.W)
D.hLZ=new B.bf("device-remote",x.W)
D.hM3=new B.bf("device-picture",x.W)
D.hMz=new B.bf("electronics-part-about",x.W)
D.hMG=new B.bf("body-loading",x.W)
D.hMM=new B.bf("device-fullscreen",x.W)
D.hN8=new B.bf("core-protocol-back",x.W)
D.hNd=new B.bf("core-protocol-title-frame",x.W)})();(function staticFields(){$.hHJ=null
$.hHF=null
$.hHG=null
$.hOD=0
$.ihF=B.S(x.N,B.as("iS"))
$.iie=B.S(x.N,B.as("iS"))
$.aRr=B.S(x.N,B.as("iS"))
$.hKt=A.aA})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"iQL","bJP",()=>{var u="led"
return B.a([C.aBE("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fCu(),u),C.aBE("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fCv(),u),C.aBE("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fCw(),u),C.aBE("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fCD(),u),C.aBE("Not both","Make the light go OFF only when both switches are ON.",2,new C.fCE(),u),C.aBE("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.fCF(),"buzzer")],B.as("N<bfu>"))})
w($,"iRc","bJQ",()=>B.a([C.S1("UNIVERSE","Earth, space and gravity",A.Rf,A.aH,new C.fCV()),C.S1("ELECTRONICS LAB","Batteries, wires, real circuits",An.vx,A.aH,new C.fCW()),C.S1("DISCOVERY LAB","Body Explorer: a real 3D human",D.bUL,A.bf,new C.fCX()),C.S1("TOOLBOX","Converter, clock, games",H.as_,A.cX,new C.fCY()),C.S1("REACTION LAB","Wire parts together",A.E4,A.bw,new C.fCZ()),C.S1("SPARK PAINTER","Paint with light",A.Io,A.c5,new C.fD_()),C.S1("ROCKET LANDER","Land softly on the pad",A.oh,A.aH,new C.fD0()),C.S1("TITLE ANIMATOR","Make a moving title",A.xC,A.bu,new C.fD1()),C.S1("CIRCUIT LAB","Connect logic, learn it",A.a4R,A.cw,new C.fD2())],B.as("N<bxZ>")))
w($,"iT0","qY",()=>{var u,t,s=B.S(x.N,x.C)
for(u=0;u<76;++u){t=D.U_[u]
s.n(0,t.a,t)}return s})
v($,"imm","hXG",()=>B.aqj(0))
w($,"iQt","hXH",()=>{var u=B.csL()
u.seC(0,A.c.j(0.06))
u.c=2.2
u.d=A.bG
return u})
w($,"iQM","aks",()=>B.a([C.GU("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fCG()),C.GU("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fCH()),C.GU("Spin the motor","A battery and a motor in a loop will make it spin.",new C.fCI()),C.GU("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.fCJ()),C.GU("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fCK()),C.GU("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fCx()),C.GU("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fCy()),C.GU("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fCz()),C.GU("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fCA()),C.GU("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fCB()),C.GU("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fCC())],B.as("N<bfv>")))
w($,"iRe","hYa",()=>B.a([C.a38("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aQ,A.c8,new C.fDa()),C.a38("Focus Timer","Work, then rest","\u23f1\ufe0f",A.c1,A.bC,new C.fDb()),C.a38("Breathe","Calm down in a minute","\ud83e\udee7",A.fK,A.cI,new C.fDc()),C.a38("Draw Pad","Sketch and share","\ud83c\udfa8",A.bE,A.b0,new C.fDd()),C.a38("Memory Match","Find the pairs","\ud83c\udccf",A.aH,A.ci,new C.fDe()),C.a38("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bu,A.bk,new C.fDf()),C.a38("Tip & Split","Share the bill","\ud83e\uddfe",A.bf,A.b6,new C.fDg()),C.a38("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bj,A.az,new C.fDh())],B.as("N<bzi>")))})()};
(a=>{a["Y7lKmE8cuU6VDFBP9PwzeFzj4yM="]=a.current})($__dart_deferred_initializers__);