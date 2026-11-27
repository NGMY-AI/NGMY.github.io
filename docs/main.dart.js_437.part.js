((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,W,A9,A5,N,Aa,A6,Ab,A7,X,P,Y,Ac,O,Ad,Ae,Af,Ag,Ah,Ai,Aj,Ak,Al,Z,U,Am,An,Q,A_,R,S,A0,T,A1,Ao,E,I,G,L,Ap,Aq,Ar,A8,C={
bEv(d){return C.ikS(d)},
ikS(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bEv=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.rx(B.nF(""),d,A.ii,null,null).d7(0,At.a1z),$async$bEv)
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
return B.i($async$bEv,v)},
ix_(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.Tt[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.d_(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ag(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.fg(D.Tt,new C.fUA())
if(w==null)w=A.d.gG(D.Tt)
s=B.S(x.N,x.C)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.I)(r),++u){l=r[u].a
k=l[0]
l=$.qU().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.I)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gG(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.amt(w.a,w.b,m,w,s,!1)},
iqx(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.O(D.TT,new C.fJ4(),x.bd).aL(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
iFg(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.c8(b2,"{")
v=A.a.pl(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.V.aP(0,A.a.av(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aR(a5)
r=0
for(a6=x.j,a7=J.aQ(a6.a(J.t(u,"parts"))),a8=x.i;a7.C();){q=a7.gP(a7)
p=B.v(J.t(q,"kind"))
o=B.v(J.t(q,"id"))
if(!$.qU().am(0,p)||J.eF(s,o)||J.ad(t)>=8)continue
J.c8(s,o)
n=B.S(a5,a8)
for(a9=0;a9<4;++a9){m=D.dHe[a9]
l=J.t(q,m)
if(typeof l=="number")J.aL(n,m,l)}k=A.i.D(typeof J.t(q,"x")=="number"?B.dJ(J.t(q,"x")):0.2+A.i.F(r,3)*0.3,0.16,0.84)
j=A.i.D(typeof J.t(q,"y")=="number"?B.dJ(J.t(q,"y")):0.25+A.i.ao(r,3)*0.3,0.1,0.9)
J.c8(t,new B.e1([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aQ(a6.a(J.t(u,"wires")));a5.C();){h=a5.gP(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.v(J.t(g,0))
e=B.v(J.t(g,2))
d=A.o.D(A.i.M(B.dJ(J.t(g,1))),0,1)
a0=A.o.D(A.i.M(B.dJ(J.t(g,3))),0,1)
if(J.eF(s,f)&&J.eF(s,e)&&!J.z(f,e))J.c8(i,new B.b7([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.R.a(J.t(u,"steps"))
a0=J.aQ(a0==null?A.bO:a0)
while(a0.C()){a2=a0.gP(a0)
J.c8(a1,B.v(a2))}a3=a1
a0=J.t(u,"title")
a0=B.v(a0==null?"My invention":a0)
a1=J.t(u,"explain")
a4=new C.nc(a0,B.v(a1==null?"":a1),t,i,A.M)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.t(u,"honest")
a5=B.v(a5==null?"":a5)
return new C.amt(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
ivt(d){var w,v,u=C.hxy()
d.B(u)
for(w=0;w<60;++w)u.vX(0,0.03333333333333333)
v=u.a
return A.d.aR(v,new C.fQV(u))&&!A.d.cw(v,new C.fQW())},
ivs(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.S(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.I)(l),++u){t=l[u];++v
k.n(0,t.a,$.qU().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.I)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.v(t.e)+" V")
if(p==="resistor")q.push(""+A.i.S(t.r)+" ohms")
if(A.d.q(D.dFh,p))q.push("level "+A.i.S(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.i.S(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aL(q,", ")+")"
s.push(B.v(p)+n+": "+o+", current "+A.i.a5(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.I)(w),++u){m=w[u]
l.push(B.v(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.v(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aL(s,"\n")+"\nWires: "+A.d.aL(l,"; ")},
ijl(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.I)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aL(v,"\n")+"\n\n"}v=A.d.aL(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
iwZ(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qU().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.TT[u]
if(A.d.aR(w,new C.fUx(s)))if(!B.d_(r,s.b.toLowerCase(),0))v=B.d_(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ag("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.X(w,new C.fUy(e),B.U(w).k("X<1>")).gar(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ag("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.i.a5(A.d.cD(w,0,new C.fUz())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ag("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gG(w)
w=$.qU().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
amt:function amt(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fUA:function fUA(){},
fJ4:function fJ4(){},
fQV:function fQV(d){this.a=d},
fQW:function fQW(){},
fUx:function fUx(d){this.a=d},
fUy:function fUy(d){this.a=d},
fUz:function fUz(){},
Xy:function Xy(d,e){this.c=d
this.a=e},
boJ:function boJ(d,e,f,g,h){var _=this
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
epE:function epE(d){this.a=d},
epF:function epF(d,e,f){this.a=d
this.b=e
this.c=f},
epG:function epG(d){this.a=d},
epR:function epR(d){this.a=d},
epS:function epS(d,e){this.a=d
this.b=e},
epN:function epN(d){this.a=d},
epL:function epL(d,e){this.a=d
this.b=e},
epM:function epM(d,e,f){this.a=d
this.b=e
this.c=f},
epO:function epO(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
epJ:function epJ(d){this.a=d},
epK:function epK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
epP:function epP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
epI:function epI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
epQ:function epQ(d,e){this.a=d
this.b=e},
epH:function epH(d,e){this.a=d
this.b=e},
epV:function epV(d){this.a=d},
epU:function epU(d){this.a=d},
epW:function epW(d){this.a=d},
epT:function epT(d){this.a=d},
epX:function epX(d,e){this.a=d
this.b=e},
epY:function epY(d,e){this.a=d
this.b=e},
epZ:function epZ(d,e){this.a=d
this.b=e},
eq_:function eq_(d,e){this.a=d
this.b=e},
bER(d,e,f){var w=null
return B.w(B.a([B.c(d,w,w,w,w,w,w,D.fKV,w,w,w),B.c(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p)},
hLU(d,e,f,g){var w=null,v=B.m(24),u=B.K(f.j(0.6),A.r,1)
return B.at(B.p(w,B.w(B.a([B.c(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.aj,B.c(e,w,w,w,w,w,w,A.BF,A.K,w,w),A.aB,B.c_(A.fX,g,A.br,w,0,8)],x.p),A.l,w,A.e,A.P,0,A.p),A.f,w,w,new B.o(D.bkP,w,u,v,w,w,A.m),w,w,w,w,A.ae,w,w,w),w,w,w)},
Hi:function Hi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vK:function vK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XV:function XV(d){this.a=d},
aHJ:function aHJ(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.mf$=i
_.fe$=j
_.hf$=k
_.bv$=l
_.ab$=m
_.c=_.a=null},
eFb:function eFb(){},
eFv:function eFv(d){this.a=d},
eFu:function eFu(d,e){this.a=d
this.b=e},
eFw:function eFw(){},
eFx:function eFx(){},
eFd:function eFd(d,e,f){this.a=d
this.b=e
this.c=f},
eFc:function eFc(d,e){this.a=d
this.b=e},
eF2:function eF2(d){this.a=d},
eF3:function eF3(d){this.a=d},
eF4:function eF4(d){this.a=d},
eF5:function eF5(d){this.a=d},
eF6:function eF6(d){this.a=d},
eF7:function eF7(d){this.a=d},
eF8:function eF8(d){this.a=d},
eF9:function eF9(d){this.a=d},
eFa:function eFa(d){this.a=d},
eF0:function eF0(d){this.a=d},
eF1:function eF1(d){this.a=d},
eF_:function eF_(d){this.a=d},
eFo:function eFo(d,e){this.a=d
this.b=e},
eFj:function eFj(d){this.a=d},
eFk:function eFk(d){this.a=d},
eFg:function eFg(d){this.a=d},
eFl:function eFl(d){this.a=d},
eFf:function eFf(d){this.a=d},
eFm:function eFm(d){this.a=d},
eFn:function eFn(d){this.a=d},
eFe:function eFe(d){this.a=d},
eFp:function eFp(d,e){this.a=d
this.b=e},
eFi:function eFi(d,e){this.a=d
this.b=e},
eFq:function eFq(d){this.a=d},
eFr:function eFr(d){this.a=d},
eFs:function eFs(d){this.a=d},
eFt:function eFt(d){this.a=d},
eFh:function eFh(d){this.a=d},
blB:function blB(d,e){this.b=d
this.a=e},
aPQ:function aPQ(){},
bCt:function bCt(){},
hGF(){var w=$.hGD
return w==null?$.hGD=$.oR().d_H("assets/data/three.min.js"):w},
hGE(){var w=$.hGC
return w==null?$.hGC=C.cSL():w},
cSL(){var w=0,v=B.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cSL=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.oR().iv(0,"assets/data/body3d.bin"),$async$cSL)
case 3:d=a1
$.hGG=J.eA(A.dM.gaS(d),d.byteOffset,d.byteLength)
t=B.TX(d)
s=t.getUint32(4,!0)
r=B.a([],x.h)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.k_(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.dsp[i]
g=B.b2((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a5s(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b7H))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.bes(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cSL,v)},
c9u(){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$c9u=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.hc(B.a([C.hGE(),C.hGF()],x.D),x.K),$async$c9u)
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
return B.i($async$c9u,v)},
aW4:function aW4(d,e,f){this.a=d
this.b=e
this.c=f},
a5s:function a5s(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
bes:function bes(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Wl:function Wl(d){this.a=d},
aG8:function aG8(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.mf$=t
_.fe$=u
_.hf$=v
_.bv$=w
_.ab$=a0
_.c=_.a=null},
dUk:function dUk(d){this.a=d},
dUj:function dUj(d,e){this.a=d
this.b=e},
dTV:function dTV(d){this.a=d},
dTW:function dTW(d,e){this.a=d
this.b=e},
dTX:function dTX(d){this.a=d},
dTY:function dTY(){},
dUl:function dUl(){},
dTZ:function dTZ(d,e){this.a=d
this.b=e},
dU_:function dU_(d){this.a=d},
dU0:function dU0(){},
dU1:function dU1(d){this.a=d},
dU3:function dU3(d,e){this.a=d
this.b=e},
dU2:function dU2(d){this.a=d},
dTS:function dTS(d,e,f){this.a=d
this.b=e
this.c=f},
dTT:function dTT(d){this.a=d},
dTU:function dTU(d){this.a=d},
dUa:function dUa(d){this.a=d},
dUb:function dUb(d,e){this.a=d
this.b=e},
dUc:function dUc(d,e){this.a=d
this.b=e},
dUd:function dUd(d){this.a=d},
dU9:function dU9(d,e){this.a=d
this.b=e},
dUe:function dUe(d,e){this.a=d
this.b=e},
dU8:function dU8(d,e){this.a=d
this.b=e},
dUf:function dUf(d){this.a=d},
dU7:function dU7(d){this.a=d},
dUg:function dUg(d){this.a=d},
dU6:function dU6(d){this.a=d},
dUh:function dUh(d){this.a=d},
dU5:function dU5(d){this.a=d},
dUi:function dUi(d){this.a=d},
dU4:function dU4(d){this.a=d},
aOU:function aOU(){},
aOV:function aOV(){},
c9v:function c9v(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c9w:function c9w(d,e){this.a=d
this.b=e},
c9x:function c9x(d){this.a=d},
aBs(d,e,f,g,h){return new C.bfg(d,e,f,g,h)},
hnl(d,e,f,g,h,i){return $.igx.c_(0,d+"|"+B.v(e)+"|"+f.m()+"|"+B.v(g),new C.cZW(d,e,f,i,g,h))},
yY:function yY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Dm:function Dm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
o2:function o2(d,e,f){this.a=d
this.b=e
this.c=f},
bfg:function bfg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fC5:function fC5(){},
fC6:function fC6(){},
fC7:function fC7(){},
fCe:function fCe(){},
fCf:function fCf(){},
fCg:function fCg(){},
Ws:function Ws(d){this.a=d},
aGa:function aGa(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.mf$=n
_.fe$=o
_.hf$=p
_.bv$=q
_.ab$=r
_.c=_.a=null},
dW0:function dW0(d){this.a=d},
dVF:function dVF(d,e){this.a=d
this.b=e},
dVI:function dVI(){},
dW1:function dW1(){},
dVD:function dVD(d,e){this.a=d
this.b=e},
dVE:function dVE(d,e){this.a=d
this.b=e},
dVJ:function dVJ(d,e,f){this.a=d
this.b=e
this.c=f},
dVy:function dVy(){},
dVz:function dVz(){},
dVA:function dVA(d){this.a=d},
dVB:function dVB(d,e){this.a=d
this.b=e},
dVC:function dVC(d,e,f){this.a=d
this.b=e
this.c=f},
dVK:function dVK(){},
dVL:function dVL(d,e){this.a=d
this.b=e},
dVM:function dVM(d){this.a=d},
dVH:function dVH(d,e){this.a=d
this.b=e},
dVG:function dVG(d){this.a=d},
dVx:function dVx(d,e,f){this.a=d
this.b=e
this.c=f},
dVV:function dVV(d){this.a=d},
dVU:function dVU(d){this.a=d},
dVW:function dVW(d){this.a=d},
dVT:function dVT(d){this.a=d},
dVR:function dVR(d){this.a=d},
dVS:function dVS(d){this.a=d},
dVQ:function dVQ(d){this.a=d},
dVN:function dVN(d){this.a=d},
dVP:function dVP(d){this.a=d},
dVX:function dVX(d,e){this.a=d
this.b=e},
dVY:function dVY(d,e){this.a=d
this.b=e},
dVZ:function dVZ(d){this.a=d},
dVO:function dVO(d){this.a=d},
dW_:function dW_(d,e){this.a=d
this.b=e},
bfy:function bfy(d,e){this.b=d
this.a=e},
cZW:function cZW(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aOZ:function aOZ(){},
bCc:function bCc(){},
i72(){return new C.OM(null)},
RV(d,e,f,g,h){return new C.bxK(d,e,f,g,h)},
bw4(d,e,f){return A.i.D((d-e)/(f-e),0,1)},
hnT(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
iz_(){return B.iI("construction","")},
OM:function OM(d){this.a=d},
LB:function LB(d,e){this.a=d
this.b=e},
Bj:function Bj(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aGr:function aGr(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
e1a:function e1a(d,e){this.a=d
this.b=e},
e19:function e19(d){this.a=d},
e1c:function e1c(d,e){this.a=d
this.b=e},
e1b:function e1b(d){this.a=d},
bxK:function bxK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fCw:function fCw(){},
fCx:function fCx(){},
fCy:function fCy(){},
fCz:function fCz(){},
fCA:function fCA(){},
fCB:function fCB(){},
fCC:function fCC(){},
fCD:function fCD(){},
fCE:function fCE(){},
bw5:function bw5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fhL:function fhL(d){this.a=d},
fhK:function fhK(d,e){this.a=d
this.b=e},
fhI:function fhI(d){this.a=d},
fhM:function fhM(d){this.a=d},
fhJ:function fhJ(d,e){this.a=d
this.b=e},
ahh:function ahh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ag5:function ag5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
RO:function RO(d,e,f,g,h,i,j,k,l,m){var _=this
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
bx7:function bx7(d,e){this.b=d
this.a=e},
bwD:function bwD(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bea:function bea(d,e){this.b=d
this.a=e},
aKQ:function aKQ(d,e){this.c=d
this.a=e},
aKR:function aKR(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.ch=-1
_.ds$=e
_.bc$=f
_.c=_.a=null},
fhr:function fhr(d){this.a=d},
fhq:function fhq(d){this.a=d},
fhg:function fhg(d){this.a=d},
fhh:function fhh(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fhi:function fhi(d){this.a=d},
fhf:function fhf(d,e){this.a=d
this.b=e},
fhj:function fhj(d){this.a=d},
fhp:function fhp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fho:function fho(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fhm:function fhm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fhl:function fhl(d,e,f){this.a=d
this.b=e
this.c=f},
fhn:function fhn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fhk:function fhk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fhz:function fhz(d){this.a=d},
fhy:function fhy(d){this.a=d},
fhA:function fhA(d,e){this.a=d
this.b=e},
fhB:function fhB(d,e){this.a=d
this.b=e},
fhC:function fhC(d,e){this.a=d
this.b=e},
fhx:function fhx(d,e,f){this.a=d
this.b=e
this.c=f},
fhD:function fhD(d,e,f){this.a=d
this.b=e
this.c=f},
fhw:function fhw(d){this.a=d},
fhs:function fhs(d){this.a=d},
fhE:function fhE(d){this.a=d},
fhF:function fhF(d){this.a=d},
fhv:function fhv(d,e){this.a=d
this.b=e},
fhG:function fhG(d,e){this.a=d
this.b=e},
fhu:function fhu(d,e){this.a=d
this.b=e},
fhH:function fhH(d,e){this.a=d
this.b=e},
fht:function fht(d,e){this.a=d
this.b=e},
fhd:function fhd(){},
fhe:function fhe(){},
bvH:function bvH(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bv5:function bv5(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
beR:function beR(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bv7:function bv7(d,e,f){this.b=d
this.c=e
this.a=f},
bzd:function bzd(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aQG:function aQG(){},
hNw(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a7(0,new B.r(w,0)),u=e.aI(0,new B.r(w,0)),t=1-f,s=3*t
return d.aO(0,t*t*t).a7(0,v.aO(0,s*t*f)).a7(0,u.aO(0,s*f*f)).a7(0,e.aO(0,f*f*f))},
blA(d,e,f,g,h,i){return $.ih5.c_(0,d+"|"+B.v(e)+"|"+f.m()+"|"+B.v(g),new C.dvp(d,e,f,i,g,h))},
a2w:function a2w(d,e){this.a=d
this.b=e},
qL:function qL(d,e,f,g,h){var _=this
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
Dq:function Dq(d,e){this.a=d
this.b=e},
a0s:function a0s(d,e){this.a=d
this.b=e},
ah4:function ah4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2J:function a2J(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
DB:function DB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adU:function adU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aeb:function aeb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ag9:function ag9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bly:function bly(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
dvt:function dvt(d){this.a=d},
dvu:function dvu(d){this.a=d},
dvq:function dvq(d,e){this.a=d
this.b=e},
dvr:function dvr(d){this.a=d},
dvs:function dvs(d){this.a=d},
dvv:function dvv(d){this.a=d},
dvw:function dvw(d){this.a=d},
dvx:function dvx(d){this.a=d},
dvy:function dvy(d){this.a=d},
dvz:function dvz(d){this.a=d},
dvA:function dvA(d){this.a=d},
dvB:function dvB(d){this.a=d},
dvC:function dvC(d){this.a=d},
dvD:function dvD(d){this.a=d},
H3:function H3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XU:function XU(d){this.a=d},
aHI:function aHI(d,e,f,g,h,i,j){var _=this
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
eEw:function eEw(d){this.a=d},
eEl:function eEl(d){this.a=d},
eEn:function eEn(){},
eEo:function eEo(){},
eEr:function eEr(){},
eEs:function eEs(d,e,f){this.a=d
this.b=e
this.c=f},
eEt:function eEt(d){this.a=d},
eEu:function eEu(d){this.a=d},
eEp:function eEp(){},
eEq:function eEq(d){this.a=d},
eEW:function eEW(d){this.a=d},
eEv:function eEv(){},
eEh:function eEh(d){this.a=d},
eEy:function eEy(d){this.a=d},
eEx:function eEx(d){this.a=d},
eEA:function eEA(){},
eEz:function eEz(d,e){this.a=d
this.b=e},
eEk:function eEk(){},
eEi:function eEi(d){this.a=d},
eEj:function eEj(d){this.a=d},
eEU:function eEU(d){this.a=d},
eET:function eET(d){this.a=d},
eEV:function eEV(d){this.a=d},
eEK:function eEK(d,e){this.a=d
this.b=e},
eES:function eES(d){this.a=d},
eEQ:function eEQ(d){this.a=d},
eER:function eER(d){this.a=d},
eEP:function eEP(d){this.a=d},
eEO:function eEO(d){this.a=d},
eEL:function eEL(d){this.a=d},
eEM:function eEM(d){this.a=d},
eEN:function eEN(d){this.a=d},
eEm:function eEm(){},
eEG:function eEG(d){this.a=d},
eEH:function eEH(d){this.a=d},
eEF:function eEF(d){this.a=d},
eEI:function eEI(d){this.a=d},
eEE:function eEE(d){this.a=d},
eEJ:function eEJ(d){this.a=d},
eED:function eED(d){this.a=d},
eEC:function eEC(d){this.a=d},
eEB:function eEB(d,e){this.a=d
this.b=e},
blz:function blz(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dvp:function dvp(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aPO:function aPO(){},
hTr(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aI(0,e).gcM()*0.1
return new B.r((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
hxy(){var w=B.a([],x.bz),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a6A(w,v,u,A.cV,B.S(x.N,x.y))},
i0C(d,e,f){var w=d.c,v=e===0?-1:1
return new B.r(w*f.a+v*C.hxz(d),d.d*f.b)},
hxz(d){return 42+(D.mN.am(0,d.b)?(d.ch-1)*38:0)},
il9(d){var w,v,u,t,s
if(d.A(0,$.hJp))return $.hWy()
w=B.a([],x.n)
for(v=d.a,u=d.b,t=12;t<v;t+=24)for(s=12;s<u;s+=24){w.push(t)
w.push(s)}$.hJp=d
return $.ila=new Float32Array(B.cd(w))},
es:function es(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ud:function ud(d,e,f,g){var _=this
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
acx:function acx(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
adG:function adG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a6A:function a6A(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bSK:function bSK(){},
bSV:function bSV(d){this.a=d},
bSQ:function bSQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSW:function bSW(d){this.a=d},
bSX:function bSX(d){this.a=d},
bSZ:function bSZ(d){this.a=d},
bT_:function bT_(d){this.a=d},
bSY:function bSY(d){this.a=d},
bT0:function bT0(d,e,f){this.a=d
this.b=e
this.c=f},
bT1:function bT1(d){this.a=d},
bSM:function bSM(d){this.a=d},
bSN:function bSN(d){this.a=d},
bSL:function bSL(d){this.a=d},
bSO:function bSO(d,e,f){this.a=d
this.b=e
this.c=f},
bSP:function bSP(d){this.a=d},
bSJ:function bSJ(d){this.a=d},
bT2:function bT2(d,e){this.a=d
this.b=e},
bSR:function bSR(d,e){this.a=d
this.b=e},
bSU:function bSU(d){this.a=d},
bST:function bST(d){this.a=d},
bSS:function bSS(d){this.a=d},
alg:function alg(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bN4:function bN4(){},
bN5:function bN5(){},
bN3:function bN3(){},
nc:function nc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cx8:function cx8(d){this.a=d},
iFb(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new C.h6B(),c9=new C.h6D(),d0=new C.h6E(),d1=new C.h6C(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aq(w,d1.$3(new B.a5(w.a,w.b,w.c,w.d),A.cm,A.bQ))
d3.ah(D.eF5,D.eC4,c9.$2(A.dZ,1.4))
d3.ah(D.eBK,D.eBI,c9.$2(A.bz,2.4))
d3.ah(D.eBL,U.aOg,c9.$2(A.bz,2.4))
if(c7){d2=c8.$1(A.fC.j(0.5))
d2.y=A.I2
d3.O(D.eBq,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.i.F(d2+v/3,1)
d6.$5(d3,"\u2744",new B.r(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aq(d0.$4(-22,-26,44,50),d1.$3(D.aUs,A.aS,A.cE))
d3.O(A.cN,16,c8.$1(A.bz))
d3.O(A.cN,13,c8.$1(c7?A.aH.j(0.85):A.a_))
if(c7){d2=d3.c
J.bs(d2.save())
d2.translate(0,4)
d3.ju(0,d4.y*0.6)
for(v=0;v<3;++v){t=v*2.09
d3.ah(A.J,new B.r(Math.cos(t)*11,Math.sin(t)*11),c9.$2(A.ab,3))}d2.restore()
for(d2=d5*0.8,v=0;v<4;++v){u=A.i.F(d2+v*0.25,1)
d3.O(new B.r(Math.sin(v*2+d5)*9,4-u*12),1.6+u*2,c8.$1(A.c.j(0.8*(1-u))))}}d3.O(D.eEY,2.4,c8.$1(c7?A.bk:A.an))
d3.O(D.aOR,2.4,c8.$1(A.an))
return!0
case"blender":d3.aq(d0.$5(-14,14,28,12,4),c8.$1(A.cU))
d2=$.T().r
t=x.v
s=new B.aI(d2,A.ak,c6,c6,B.a([],t))
s.E(new B.aZ(-16,-26))
s.E(new B.aq(16,-26))
s.E(new B.aq(12,14))
s.E(new B.aq(-12,14))
s.E(new B.bA())
d3.af(s,c8.$1(A.fC.j(0.35)))
if(c7){d2=new B.aI(d2,A.ak,c6,c6,B.a([],t))
d2.E(new B.aZ(-14,-10))
d2.E(new B.aq(14,-10))
d2.E(new B.aq(12,14))
d2.E(new B.aq(-12,14))
d2.E(new B.bA())
d3.af(d2,c8.$1(A.aC.j(0.7)))}d3.af(s,c9.$2(A.ab,1.6))
d2=d3.c
J.bs(d2.save())
d2.translate(0,10)
d3.ju(0,d4.y)
d3.ah(D.aaz,D.aOD,c9.$2(A.bP,3))
d2.restore()
if(c7)for(d2=d5*9,t=d5*1.6,v=0;v<3;++v)d3.O(new B.r(Math.sin(d2+v*2)*9,-10-A.i.F(t+v*0.33,1)*12),2.4,c8.$1(A.f4))
return!0
case"drone":d3.aq(d0.$5(-10,-4,20,10,4),c8.$1(A.aM))
d3.O(A.hF,3,c8.$1(c7?A.bk:A.an))
r=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.c,t=-4+r,q=-6+r,p=0;p<2;++p){o=F.U6[p]
d3.ah(new B.r(o*0.4,1),new B.r(o,t),c9.$2(A.bz,3))
J.bs(d2.save())
d2.translate(o,q)
d3.ah(D.eEP,D.eBP,c9.$2(A.c.j(c7?0.35:0.9),3))
if(c7)d3.c1(B.bZ(A.J,6,24+Math.sin(d4.y*3)*4),c8.$1(A.c.j(0.25)))
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
w.E(new B.bA())
d3.af(w,d1.$3(D.fqW,A.aQ,A.de))
d3.aE(D.fq3,c8.$1(A.d0))
d2=d3.c
J.bs(d2.save())
d2.translate(18,-5)
d3.ju(0,d4.y*2)
d3.ah(A.J,D.eBW,c9.$2(A.bP,2.4))
d3.ah(A.aav,D.eBV,c9.$2(A.i0,1))
d2.restore()
if(c7)for(d2=d5*3,t=d5*20,v=0;v<4;++v){u=A.i.F(d2+v*0.25,1)
d3.O(new B.r(34+u*6,-5+Math.sin(v*3+t)*6*u),1.4,c8.$1(A.eI.j(1-u)))}return!0
case"torch":if(c7){v=A.i.D(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new B.aI($.T().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(16,-6))
d2.E(new B.aq(52,-26))
d2.E(new B.aq(52,18))
d2.E(new B.aq(16,4))
d2.E(new B.bA())
d3.af(d2,c8.$1(A.bN.j(0.35*v)))}d3.aq(d0.$5(-26,-6,30,12,3),d1.$3(D.fr1,A.bl,A.cx))
n=new B.aI($.T().r,A.ak,c6,c6,B.a([],x.v))
n.E(new B.aZ(4,-6))
n.E(new B.aq(18,-12))
n.E(new B.aq(18,12))
n.E(new B.aq(4,6))
n.E(new B.bA())
d3.af(n,c8.$1(A.cU))
d3.O(D.eC0,7,c8.$1(c7?A.c:A.d0))
return!0
case"neon":d3.aq(d0.$5(-30,-14,60,28,6),c8.$1(M.ni))
if(c7)m=d4.ax>0.5||A.o.F(A.i.bd(d5*17),3)!==0
else m=!1
l=m?A.c5:D.bvC
if(m){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.c5.j(0.35))
t.y=A.nn
d3.aq(d2,t)}d3.aq(d0.$5(-27,-11,54,22,5),c9.$2(l,2.2))
d6.$5(d3,"OPEN",D.eFb,l,17)
return!0
case"microwave":d3.aq(d0.$4(-30,-18,60,38),d1.$3(D.fr8,A.bP,A.bl))
d2=d0.$5(-26,-14,38,30,3)
d3.aq(d2,c8.$1(c7?A.bN.j(0.75):A.ax))
if(c7){d2=d3.c
J.bs(d2.save())
d2.translate(-7,8)
d3.ju(0,d4.y*0.5)
d3.c1(B.bZ(A.J,7,22),c8.$1(A.de))
d2.restore()}d3.aq(d0.$5(15,-14,12,12,2),c8.$1(M.ni))
if(c7)d6.$5(d3,"0:"+A.a.aY(A.o.v(59-A.o.F(A.i.bd(d5),60)),2,"0"),D.eC1,A.bf,6.5)
d3.O(D.eCf,4,c8.$1(A.d0))
return!0
case"doorbell":d3.aq(d0.$5(-16,-26,32,52,8),c8.$1(A.bn))
d3.O(A.KB,10,c8.$1(c7?A.bu:A.bz))
d2=d3.c
J.bs(d2.save())
d2.translate(0,-8)
d3.ju(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.eFU,A.c,16)
d2.restore()
d3.O(A.kx,6,c8.$1(A.di))
d3.O(A.kx,6,c9.$2(A.c,1.6))
if(c7)for(d2=d5*14,v=1;v<=2;++v)d3.cQ(B.bY(A.KB,14+v*6+A.i.F(d2,6)),-0.9,1.8,!1,c9.$2(A.bu.j(0.9-v*0.3),1.8))
return!0
case"camera":d3.ah(D.eFa,D.eFN,c9.$2(A.bz,4))
d2=d3.c
J.bs(d2.save())
d3.ju(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aq(d0.$5(-24,-14,46,22,5),d1.$3(D.fqX,A.bP,A.an))
d3.O(D.aOk,8,c8.$1(A.ax))
d3.O(D.aOk,4.5,c8.$1(c7?A.aH:A.cx))
d3.O(D.eF8,2.2,c8.$1(c7&&A.o.F(A.i.bd(d5*1.6),2)===0?A.aC:A.kK))
d2.restore()
if(c7)d6.$5(d3,"REC",D.eFi,A.aC,9)
return!0
case"console":d3.aq(d0.$5(-28,-22,56,44,8),d1.$3(D.fr4,A.i2,A.fy))
d3.aq(d0.$5(-20,-17,40,22,3),c8.$1(A.dY))
if(c7){d2=d5*2.3
d3.O(new B.r(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aE(new B.a5(-18,t,-15.6,t+8),c8.$1(A.bf))
d2=-9+Math.sin(d2-0.4)*6
d3.aE(new B.a5(15.6,d2,18,d2+8),c8.$1(A.c5))}d3.O(D.eF3,4,c8.$1(A.b9))
d3.O(D.eBX,2.4,c8.$1(A.aC))
d3.O(D.eCd,2.4,c8.$1(A.bk))
return!0
case"heartmon":d3.aq(d0.$5(-30,-22,60,44,6),c8.$1(A.ax))
d3.aq(d0.$5(-26,-18,52,28,3),c8.$1(A.dY))
if(c7){d2=$.T()
t=B.a([],x.v)
k=new B.aI(d2.r,A.ak,c6,c6,t)
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
d6.$5(d3,"72",D.eBY,A.hJ,11)
d2=d5*9
d6.$5(d3,"\u2665",D.eFn,A.hJ.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.O(D.eFd,3,c8.$1(c7?A.bk:A.bz))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aq(d2,c8.$1(A.cI.j(c7?0.5:0.3)))
d3.aq(d0.$5(-26,-20,52,40,4),c9.$2(A.ab,1.6))
d3.aE(D.fqZ,c8.$1(F.wQ))
if(c7){d2=d5*1.1
t=Math.sin(d2)
q=d3.c
J.bs(q.save())
q.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.nO(0,-1,1)
d3.c1(B.bZ(A.J,8,14),c8.$1(A.cW))
d2=new B.aI($.T().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-6,0))
d2.E(new B.aq(-12,-4))
d2.E(new B.aq(-12,4))
d2.E(new B.bA())
d3.af(d2,c8.$1(A.c8))
d3.O(D.eD_,1.2,c8.$1(A.v))
q.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=A.i.F(d2+v*0.2,1)
d3.O(new B.r(-18+Math.sin(u*8+v)*2,13-u*30),1.4+A.o.F(v,2),c9.$2(A.ab,1))}}return!0
case"lighthouse":d2=$.T().r
t=x.v
g=new B.aI(d2,A.ak,c6,c6,B.a([],t))
g.E(new B.aZ(-9,22))
g.E(new B.aq(-5,-16))
g.E(new B.aq(5,-16))
g.E(new B.aq(9,22))
g.E(new B.bA())
d3.af(g,d1.$3(D.frA,A.c,A.bC))
d3.aE(D.frw,c8.$1(c7?A.eI:A.bz))
q=new B.aI(d2,A.ak,c6,c6,B.a([],t))
q.E(new B.aZ(-7,-22))
q.E(new B.aq(0,-29))
q.E(new B.aq(7,-22))
q.E(new B.bA())
d3.af(q,c8.$1(A.eA))
if(c7){f=Math.sin(d4.y*0.3)
d2=new B.aI(d2,A.ak,c6,c6,B.a([],t))
d2.E(new B.aZ(0,-19))
t=f*34
d2.E(new B.aq(t,-26))
d2.E(new B.aq(t,-12))
d2.E(new B.bA())
d3.af(d2,c8.$1(A.eI.j(0.45)))
d2=c8.$1(A.eI.j(0.35))
d2.y=A.I2
d3.O(D.eBr,14,d2)}return!0
case"discoball":d3.ah(D.eBt,V.aOb,c9.$2(A.d0,1.4))
d3.O(A.J,16,d1.$3(D.fqI,A.aS,A.an))
for(v=0;v<8;++v){d2=-12+v*3.4
d3.ah(new B.r(-16,d2),new B.r(16,d2),c9.$2(A.dJ,0.7))}for(v=0;v<5;++v){f=d4.y*0.5+v*1.26
d3.ah(new B.r(Math.cos(f)*16*0.3,Math.sin(f)*16*0.3),new B.r(Math.cos(f)*16,0),c9.$2(A.dJ,0.7))}if(c7)for(d2=d5*2,t=d5*9,v=0;v<10;++v){f=d2+v*0.63
e=22+A.o.F(v,3)*6
d3.O(new B.r(Math.cos(f)*e,Math.sin(f)*e*0.8),1.8,c8.$1(D.dtv[A.o.F(v,4)].j(0.5+0.5*Math.sin(t+v))))}return!0
case"robot":d3.aq(d0.$5(-14,-4,28,24,5),d1.$3(D.fqF,A.cE,A.an))
d3.aq(d0.$5(-12,-26,24,20,5),d1.$3(D.fqx,A.bn,A.bQ))
d3.ah(H.aOd,D.eBv,c9.$2(A.bz,1.6))
d3.O(D.eBw,2.2,c8.$1(c7?A.aC:A.bz))
d=c7&&A.i.F(d5*0.8,1)>0.08
for(p=0;p<2;++p){o=F.a7W[p]
if(c7)d2=d?A.bd:A.ev
else d2=A.cx
d3.O(new B.r(o,-17),3.2,c8.$1(d2))}d2=d3.c
J.bs(d2.save())
d2.translate(14,0)
d3.ju(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.ah(A.J,D.aaq,c9.$2(A.bQ,4))
d2.restore()
d3.ah(D.eEW,D.eFg,c9.$2(A.bQ,4))
d3.aE(D.frv,c8.$1(c7?A.bd.j(0.7):A.aM))
return!0
case"toaster":a0=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a0*14,p=0;p<2;++p){t=d0.$5(D.aEW[p]+1,d2,10,14,2)
q=B.ap(A.bN,A.de,a0)
q.toString
d3.aq(t,c8.$1(q))}d3.aq(d0.$5(-24,-6,48,26,8),d1.$3(D.fqY,A.bP,A.bl))
for(p=0;p<2;++p){o=D.aEW[p]
d2=d0.$5(o,-5,12,5,2)
d3.aq(d2,c8.$1(c7?A.fM:A.ax))
if(c7){d2=d0.$5(o,-5,12,5,2)
t=c8.$1(A.cW.j(0.5))
t.y=O.oX
d3.aq(d2,t)}}d3.ah(D.eCn,D.eCI,c9.$2(A.ax,3))
return!0
case"ledstrip":d3.aq(d0.$5(-34,-4,68,10,4),c8.$1(A.cx))
for(d2=d5*90,v=0;v<9;++v){a1=A.i.F(d2+v*40,360)
l=c7?new Aw.pE(1,a1,0.8,1).jh():A.cU
if(c7){t=c8.$1(l.j(0.45))
t.y=O.oX
d3.O(new B.r(-30+v*7.5,1),7,t)}d3.O(new B.r(-30+v*7.5,1),2.6,c8.$1(l))}d3.aq(d0.$5(-40,-2,6,6,1),c8.$1(A.d0))
return!0
case"pump":d3.aq(d0.$5(-16,-2,32,22,6),d1.$3(D.fqO,A.cI,A.GV))
d3.O(D.eFq,8,c8.$1(A.tj))
d2=d3.c
J.bs(d2.save())
d2.translate(-2,9)
d3.ju(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
d3.ah(A.J,new B.r(Math.cos(t)*7,Math.sin(t)*7),c9.$2(A.fC,2.4))}d2.restore()
d2=new B.aI($.T().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(16,6))
d2.E(new B.aq(26,6))
d2.E(new B.aq(26,-20))
d2.E(new B.aq(10,-20))
d3.af(d2,c9.$2(A.bQ,4))
if(c7){for(d2=d5*0.9,v=0;v<5;++v)d3.O(new B.r(26,6-A.i.F(d2+v*0.2,1)*26),2.2,c8.$1(A.hm))
d3.O(D.eDE,3.2,c8.$1(A.hm.j(0.7)))}return!0
case"hairdryer":d2=d3.c
J.bs(d2.save())
d3.ju(0,-0.15)
d3.aq(d0.$5(-26,-14,40,22,10),d1.$3(D.fr_,A.hZ,A.v0))
d3.aq(d0.$5(14,-10,12,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-10,6,12,22,4),c8.$1(A.cU))
d2.restore()
if(c7){for(d2=d5*3,v=0;v<4;++v){u=A.i.F(d2+v*0.25,1)
t=u*18
q=-10+v*5
d3.ah(new B.r(24+t,q),new B.r(32+t,q),c9.$2(A.c.j(1-u),1.8))}d2=c8.$1(A.cW.j(0.4))
d2.y=O.oX
d3.O(D.eCe,8,d2)}return!0
case"headphones":d3.cQ(B.bZ(A.dS,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bz,4))
for(d2=d5*12,p=0;p<2;++p){o=F.U5[p]
t=o-7
d3.aq(d0.$5(t,0,14,20,6),d1.$3(new B.a5(t,0,t+14,20),A.bj,A.nb))
if(c7)for(t=o<0,v=1;v<=2;++v){q=B.bY(new B.r(o,10),10+v*5+A.i.F(d2,5))
h=t?2.2:-0.9
d3.cQ(q,h,1.6,!1,c9.$2(A.eJ.j(0.9-v*0.3),1.6))}}if(c7)d6.$5(d3,"\u266a",new B.r(-4,-8-A.i.F(d5*14,8)),A.l3,12)
return!0
case"smartwatch":d3.aq(d0.$5(-8,-30,16,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-8,14,16,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-14,-17,28,32,8),d1.$3(D.fqC,A.d0,A.cU))
d3.aq(d0.$5(-11,-14,22,26,6),c8.$1(A.dY))
if(c7){a2=new B.W(Date.now(),0,!1)
d6.$5(d3,A.a.aY(A.o.v(B.cX(a2)),2,"0")+":"+A.a.aY(A.o.v(B.fx(a2)),2,"0"),D.eBC,A.bf,9.5)
j=(Math.sin(d5*9)+1)/2
d2=B.ap(A.GD,A.hJ,j)
d2.toString
d6.$5(d3,"\u2665",new B.r(-8,1),d2,8+j*2)
d6.$5(d3,""+(70+A.o.F(A.i.bd(d5*2),6)),A.dS,A.c,7)}return!0
case"tablet":d3.aq(d0.$5(-30,-22,60,44,6),c8.$1(M.ni))
d3.aq(d0.$5(-30,-22,60,44,6),c9.$2(A.bQ,1.6))
a3=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nf(a3),$.mT(),!0)
d2.translate(-27,-19)
K.MB(d3,D.fxZ,d5,!1,c6,c6)
d2.restore()}else d3.aq(a3,c8.$1(D.wW))
return!0
case"buck":a4=d0.$5(-26,-22,52,42,5)
d3.aq(a4,d1.$3(new B.a5(a4.a,a4.b,a4.c,a4.d),A.dT,A.dl))
d3.aq(a4,c9.$2(A.aT,1.2))
d3.O(D.aOK,9,c8.$1(A.ax))
d3.O(D.aOK,6,c9.$2(A.de,2))
d3.aq(d0.$5(4,-2,14,10,2),c8.$1(A.ax))
d3.aq(d0.$5(-22,-19,44,12,2),c8.$1(A.dY))
d2=A.i.a5(d4.db,1)
t=A.i.a5(c7?d4.dx:d4.e,1)
q=c7?A.bf:A.an
d6.$5(d3,d2+"\u2192"+t+"V",D.eDO,q,8.2)
d3.O(D.eC5,2.4,c8.$1(c7?A.bk:A.aM))
d6.$5(d3,"IN",D.eFh,A.ab,6)
d6.$5(d3,"OUT",D.eDu,A.ab,6)
return!0
case"regulator":a5=c7?A.i.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=B.ap(A.bQ,A.aC,a5)
t.toString
d3.aq(d2,c8.$1(t))
d3.O(H.aao,3,c8.$1(A.aM))
d3.aq(d0.$5(-12,-4,24,18,3),d1.$3(D.fqy,A.cU,A.ip))
d6.$5(d3,"7805",D.aaz,A.ab,8)
for(p=0;p<3;++p){d2=D.dAv[p]-1
d3.aE(new B.a5(d2,14,d2+2,22),c8.$1(A.dU))}if(a5>0.2)for(d2=d5*0.9,v=0;v<3;++v){u=A.i.F(d2+v*0.33,1)
d3.O(new B.r(-6+v*6,-28-u*12),2+u*2,c8.$1(A.c.j(0.5*(1-u))))}d6.$5(d3,"5V",D.eFQ,A.bq,9)
return!0
case"diode":d3.ah(D.aOP,D.aOx,c9.$2(A.dU,2.4))
d3.aq(d0.$5(-14,-7,28,14,6),c8.$1(A.as.j(0.85)))
d3.aE(D.fqh,c8.$1(A.bq))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.eI.j(0.4))
t.y=A.ld
d3.aq(d2,t)}d2=new B.aI($.T().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-8,-4))
d2.E(new B.aq(-8,4))
d2.E(new B.aq(-1,0))
d2.E(new B.bA())
d3.af(d2,c8.$1(A.b9))
d6.$5(d3,"one way",D.eF6,A.aF,8)
return!0
case"ldr":d3.ah(D.aOP,D.aaz,c9.$2(A.dU,2.4))
d3.ah(D.aOD,D.aOx,c9.$2(A.dU,2.4))
d3.O(A.J,12,c8.$1(A.de))
d3.O(A.J,12,c9.$2(A.to,1.6))
d2=$.T()
t=B.a([],x.v)
a6=new B.aI(d2.r,A.ak,c6,c6,t)
a6.E(new B.aZ(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new B.aq(d2,-6+v*3)
t.push(d2)
q=a6.f
if(q!=null)d2.aj(q)
a6.ac()}d3.af(a6,c9.$2(A.bN,1.4))
d2=B.ap(A.bz,A.eI,d4.f)
d2.toString
d6.$5(d3,"\u2600",new B.r(-6,-26),d2,14)
d6.$5(d3,""+A.i.S(20+980*(1-d4.f))+"\u03a9",D.eEX,A.ab,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":switch(d2){case"lgtv":t=A.ez
break
case"sonytv":t=A.t9
break
case"appletv":t=A.dU
break
default:t=F.Co
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
h.clipRRect(B.nf(a3),$.mT(),!0)
h.translate(t,q)
K.h6R(d3,new B.av(a3.c-t,a3.d-q),d4.at,d5,d4.ax,-1,c6,c6)
h.restore()
d3.O(D.eCL,1.6,c8.$1(A.bf))}else{d3.aq(a3,c8.$1(D.wW))
h=new B.aI($.T().r,A.ak,c6,c6,B.a([],x.v))
h.E(new B.aZ(t,q))
h.E(new B.aq(t+24,q))
h.E(new B.aq(t,q+22))
h.E(new B.bA())
d3.af(h,c8.$1(A.c.j(0.05)))}if(d2==="appletv"){d2=d3.c
J.bs(d2.save())
d2.translate(0,19.6)
d3.bV(0,3.7)
d2.translate(-0.5,-0.55)
d3.af(K.hPh(),c8.$1(A.cz))
d2.restore()}else{switch(d2){case"lgtv":d2=F.aU2
break
case"sonytv":d2=F.aTV
break
default:d2=F.aTX
break}a8=B.h0(c6,A.cL,c6,c6,c6,B.cW(c6,c6,c6,c6,c6,c6,c6,c6,c6,B.l(c6,c6,d2.b,c6,c6,c6,c6,c6,c6,c6,c6,3.6,c6,c6,A.C,c6,1,!0,c6,0.25,c6,c6,c6,c6,c6,c6),d2.a),A.a7,A.cd,c6,A.e4,A.ce)
a8.eL()
d2=a8.b
t=d2.c
d2=d2.a.c
a8.a4(d3,new B.r(-t/2,19.6-d2.gb4(d2)/2))}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":a9=D.mN.h(0,d2)
b0=a9.b===D.Bo
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
t.clipRRect(B.nf(a3),$.mT(),!0)
q=a3.a
h=a3.b
t.translate(q,h)
K.MB(d3,new B.av(a3.c-q,a3.d-h),d5,!1,c6,c6)
t.restore()}else d3.aq(a3,c8.$1(D.wW))
if(b0){t=a3.b
q=a3.d
d3.ah(new B.r(0,t),new B.r(0,q),c9.$2(A.v.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aq(d0.$5(-4,a3.b+1.2,8,2.6,1.3),c8.$1(A.v))
else{d2=b0?b1/2-7:0
d3.O(new B.r(d2,a3.b+3),1.3,c8.$1(A.v))}return!0
case"ereader":d3.aq(d0.$5(-17,-28,34,52,4),c8.$1(A.cU))
d3.aq(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bP))
if(c7){d6.$5(d3,"NGMY",D.eFX,A.ax,9)
for(v=0;v<9;++v){d2=-9+v*3.6
t=A.o.F(v,4)===3?14:22
d3.aE(new B.a5(-11,d2,-11+t,d2+1.4),c8.$1(A.bl))}d3.O(A.aam,1.6,c8.$1(A.ax))}return!0
case"laptop":d3.aq(d0.$5(-30,-28,60,42,4),d1.$3(D.fr9,A.cE,A.bl))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nf(b8),$.mT(),!0)
t=b8.a
q=b8.b
d2.translate(t,q)
K.MB(d3,new B.av(b8.c-t,b8.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(b8,c8.$1(D.wW))
d2=new B.aI($.T().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-38,16))
d2.E(new B.aq(38,16))
d2.E(new B.aq(34,21))
d2.E(new B.aq(-34,21))
d2.E(new B.bA())
d3.af(d2,c8.$1(D.aky))
d3.aq(d0.$5(-7,16,14,2,1),c8.$1(A.bl))
return!0
case"imac":d3.aq(d0.$5(-32,-28,64,46,5),d1.$3(D.frd,A.cm,A.cE))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nf(b9),$.mT(),!0)
t=b9.a
q=b9.b
d2.translate(t,q)
K.MB(d3,new B.av(b9.c-t,b9.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(b9,c8.$1(D.wW))
d3.O(D.eBe,2,c8.$1(A.bQ))
d2=new B.aI($.T().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-6,18))
d2.E(new B.aq(6,18))
d2.E(new B.aq(10,26))
d2.E(new B.aq(-10,26))
d2.E(new B.bA())
d3.af(d2,c8.$1(D.aky))
return!0
case"monitor":d3.aq(d0.$5(-34,-28,68,40,3),c8.$1(A.ez))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nf(c0),$.mT(),!0)
t=c0.a
q=c0.b
d2.translate(t,q)
K.MB(d3,new B.av(c0.c-t,c0.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(c0,c8.$1(D.wW))
d3.aE(D.frk,c8.$1(A.bl))
d3.aq(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.d0))
return!0
case"projector":if(c7){d2=new B.aI($.T().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(14,4))
d2.E(new B.aq(-32,-42))
d2.E(new B.aq(34,-42))
d2.E(new B.bA())
d3.af(d2,c8.$1(A.eI.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nf(c1),$.mT(),!0)
t=c1.a
q=c1.b
d2.translate(t,q)
K.MB(d3,new B.av(c1.c-t,c1.d-q),d5,!1,c6,c6)
d2.restore()}d3.aq(d0.$5(-26,-4,52,24,6),d1.$3(D.fr0,A.hX,A.d0))
d3.O(D.aOi,7,c8.$1(A.ax))
d3.O(D.aOi,4,c8.$1(c7?A.eI:A.cx))
for(v=0;v<4;++v){d2=-20+v*4
d3.ah(new B.r(d2,2),new B.r(d2,14),c9.$2(A.dJ,1))}return!0
case"carscreen":d3.aq(d0.$5(-34,-10,68,32,12),c8.$1(A.ax))
c2=d0.$5(-30,-20,60,28,8)
d3.aq(c2,c8.$1(M.ni))
d3.aq(c2,c9.$2(A.bz,1.2))
if(c7){c3=new B.aI($.T().r,A.ak,c6,c6,B.a([],x.v))
c3.E(new B.aZ(-26,4))
c3.E(new B.ck(-10,-14+Math.sin(d5)*3,6,-6))
c3.E(new B.aq(22,-16))
d3.af(c3,c9.$2(A.aH,2.2))
d2=A.i.F(d5*6,48)
d3.O(new B.r(-26+d2,4-d2*0.1),2.4,c8.$1(A.bf))
d6.$5(d3,""+(88+A.o.F(A.i.bd(d5*2),5)),H.aOC,A.c,10)
d6.$5(d3,"km/h",D.eDC,A.aF,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aq(c4,d1.$3(new B.a5(c4.a,c4.b,c4.c,c4.d),A.d0,A.cU))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nf(c5),$.mT(),!0)
t=c5.a
q=c5.b
d2.translate(t,q)
K.MB(d3,new B.av(c5.c-t,c5.d-q),d5,!1,c6,c6)
d2.restore()
d2=c8.$1(A.bj.j(0.2))
d2.y=A.nn
d3.O(A.J,26,d2)}else d3.aq(c5,c8.$1(A.a_))
d3.ah(D.eFx,D.eFC,c9.$2(A.bl,4))
d3.ah(D.eCN,D.eD2,c9.$2(A.bl,4))
return!0}return!1},
h6B:function h6B(){},
h6D:function h6D(){},
h6E:function h6E(){},
h6C:function h6C(){},
hwo(d,e,f,g){return new C.ale(d,g,f,e)},
GO(d,e,f){return new C.bfh(d,e,f)},
ale:function ale(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
alf:function alf(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.mf$=j
_.fe$=k
_.hf$=l
_.bv$=m
_.ab$=n
_.c=_.a=null},
bMH:function bMH(d,e){this.a=d
this.b=e},
bMI:function bMI(d){this.a=d},
bMG:function bMG(d){this.a=d},
bMJ:function bMJ(){},
bMK:function bMK(d){this.a=d},
bML:function bML(d,e,f){this.a=d
this.b=e
this.c=f},
bMF:function bMF(d,e){this.a=d
this.b=e},
bMC:function bMC(d,e){this.a=d
this.b=e},
bMD:function bMD(d,e,f){this.a=d
this.b=e
this.c=f},
bMw:function bMw(d,e){this.a=d
this.b=e},
bMx:function bMx(){},
bME:function bME(d,e,f){this.a=d
this.b=e
this.c=f},
bMB:function bMB(d,e){this.a=d
this.b=e},
bMy:function bMy(d,e){this.a=d
this.b=e},
bMz:function bMz(d,e){this.a=d
this.b=e},
bMA:function bMA(d){this.a=d},
bN0:function bN0(d){this.a=d},
bN1:function bN1(){},
bM6:function bM6(){},
bN2:function bN2(d,e){this.a=d
this.b=e},
bN_:function bN_(d,e){this.a=d
this.b=e},
bMV:function bMV(d){this.a=d},
bMS:function bMS(d,e,f){this.a=d
this.b=e
this.c=f},
bMT:function bMT(d,e){this.a=d
this.b=e},
bMW:function bMW(d){this.a=d},
bMQ:function bMQ(d,e){this.a=d
this.b=e},
bMR:function bMR(d,e){this.a=d
this.b=e},
bMU:function bMU(d){this.a=d},
bMX:function bMX(d){this.a=d},
bMN:function bMN(d,e){this.a=d
this.b=e},
bMO:function bMO(d,e){this.a=d
this.b=e},
bMP:function bMP(d,e){this.a=d
this.b=e},
bMY:function bMY(d){this.a=d},
bMM:function bMM(d){this.a=d},
bMZ:function bMZ(d){this.a=d},
bM7:function bM7(d,e){this.a=d
this.b=e},
bMt:function bMt(d,e){this.a=d
this.b=e},
bMv:function bMv(d,e){this.a=d
this.b=e},
bMu:function bMu(d,e){this.a=d
this.b=e},
bMs:function bMs(){},
bMe:function bMe(d){this.a=d},
bMd:function bMd(d){this.a=d},
bMf:function bMf(d,e){this.a=d
this.b=e},
bMg:function bMg(d){this.a=d},
bMc:function bMc(d){this.a=d},
bMk:function bMk(d,e,f){this.a=d
this.b=e
this.c=f},
bMb:function bMb(d,e){this.a=d
this.b=e},
bMl:function bMl(d,e){this.a=d
this.b=e},
bMm:function bMm(d,e){this.a=d
this.b=e},
bMn:function bMn(d,e){this.a=d
this.b=e},
bMo:function bMo(d,e,f){this.a=d
this.b=e
this.c=f},
bMa:function bMa(d,e){this.a=d
this.b=e},
bMp:function bMp(d,e,f){this.a=d
this.b=e
this.c=f},
bM9:function bM9(d,e){this.a=d
this.b=e},
bMq:function bMq(d,e,f){this.a=d
this.b=e
this.c=f},
bM8:function bM8(d,e){this.a=d
this.b=e},
bMr:function bMr(d){this.a=d},
bMh:function bMh(d){this.a=d},
bMi:function bMi(d){this.a=d},
bMj:function bMj(d){this.a=d},
bfh:function bfh(d,e,f){this.a=d
this.b=e
this.c=f},
fCh:function fCh(){},
fCi:function fCi(){},
fCj:function fCj(){},
fC4:function fC4(){},
fCk:function fCk(){},
fC3:function fC3(){},
fCl:function fCl(){},
fC8:function fC8(){},
fC2:function fC2(){},
fC9:function fC9(){},
fC1:function fC1(){},
fCa:function fCa(){},
fC0:function fC0(){},
fCb:function fCb(){},
fBZ:function fBZ(){},
fC_:function fC_(){},
fCc:function fCc(){},
fBX:function fBX(){},
fBY:function fBY(){},
fCd:function fCd(){},
fBW:function fBW(){},
X3:function X3(d){this.a=d},
aGF:function aGF(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
e6i:function e6i(d,e){this.a=d
this.b=e},
e6r:function e6r(d){this.a=d},
e6s:function e6s(){},
e6t:function e6t(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6u:function e6u(){},
e6h:function e6h(d){this.a=d},
e6g:function e6g(d,e,f){this.a=d
this.b=e
this.c=f},
e6f:function e6f(d,e){this.a=d
this.b=e},
e6d:function e6d(d){this.a=d},
e6e:function e6e(){},
e6q:function e6q(d){this.a=d},
e6p:function e6p(d){this.a=d},
e6n:function e6n(d,e){this.a=d
this.b=e},
e6l:function e6l(d){this.a=d},
e6m:function e6m(){},
e6o:function e6o(d,e,f){this.a=d
this.b=e
this.c=f},
e6j:function e6j(d,e){this.a=d
this.b=e},
e6k:function e6k(){},
e6w:function e6w(d){this.a=d},
e6x:function e6x(d,e){this.a=d
this.b=e},
e6v:function e6v(){},
e6y:function e6y(d,e){this.a=d
this.b=e},
e6z:function e6z(d){this.a=d},
e6A:function e6A(d){this.a=d},
aAz:function aAz(d,e){this.c=d
this.a=e},
bdl:function bdl(d,e){var _=this
_.d=$
_.bv$=d
_.ab$=e
_.c=_.a=null},
cP_:function cP_(d){this.a=d},
bdk:function bdk(d,e){this.b=d
this.a=e},
cOZ:function cOZ(d){this.a=d},
aAU:function aAU(){},
aAV:function aAV(){},
aNl:function aNl(){},
bCf:function bCf(){},
iFc(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bY(A.w9,23)
$.T()
b8=B.L()
b8.r=A.ax.gp(0)
b9.O(A.w9,25,b8)
b8=B.L()
b8.san(D.eOH.az(0,v))
b9.O(A.w9,23,b8)
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
r.r=A.bC.gp(0)
r.c=2
r.d=A.bG
b9.ah(A.w9,new B.r(b8*18,s*18-2),r)
r=B.L()
r.r=A.bq.gp(0)
b9.O(A.w9,3,r)
c2.$5(b9,w?"V":"A",D.eFF,A.bq,12)
c2.$5(b9,w?A.i.a5(o,1)+" V":""+A.i.S(o*1000)+" mA",D.eF0,A.ax,9.5)
return!0
case"fan":b8=B.bx(D.fqu,A.hs)
$.T()
s=B.L()
s.r=A.bz.gp(0)
b9.aq(b8,s)
s=B.L()
s.r=A.an.gp(0)
b9.aE(D.frl,s)
s=B.L()
s.r=A.a_.j(0.6).gp(0)
b9.O(H.wa,22,s)
for(b8=b9.c,u=0;u<4;++u){J.bs(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.bZ(A.aOa,18,10)
r=new B.ar(A.U,A.R,A.X,A.Y,A.W)
r.r=A.hm.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
b9.c1(s,r)
b8.restore()}b8=B.L()
b8.r=A.bt.gp(0)
b9.O(H.wa,4,b8)
b8=B.L()
b8.b=A.ad
b8.c=2
b8.r=A.cE.gp(0)
b9.O(H.wa,22,b8)
b8=B.L()
b8.b=A.ad
b8.c=0.8
b8.r=A.jW.gp(0)
b9.O(H.wa,14,b8)
return!0
case"speaker":n=B.bx(D.aUs,A.qo)
$.T()
b8=B.L()
b8.san(D.avA.az(0,new B.a5(n.a,n.b,n.c,n.d)))
b9.aq(n,b8)
m=b7?Math.sin(c1*40)*1.6:0
b8=B.L()
b8.san(D.eP3.az(0,B.bY(A.cy,15)))
b9.O(A.cy,14+m,b8)
b8=B.L()
b8.r=A.d0.gp(0)
b9.O(A.cy,5,b8)
b8=B.L()
b8.r=A.bl.gp(0)
b9.O(H.aan,5+m*0.4,b8)
if(b7)for(b8=c1*18,u=1;u<=3;++u){s=B.bY(D.eCm,6+u*6+A.i.F(b8,6))
r=new B.ar(A.U,A.R,A.X,A.Y,A.W)
r.b=A.ad
r.c=1.8
r.r=A.c5.j(0.9-u*0.2).gp(0)
b9.cQ(s,-0.8,1.6,!1,r)}return!0
case"clock":l=B.bx(D.frc,A.qo)
$.T()
b8=B.L()
b8.san(D.cda.az(0,new B.a5(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
b8=B.bx(D.aUu,A.jL)
s=B.L()
s.r=A.ip.gp(0)
b9.aq(b8,s)
if(b7){k=new B.W(Date.now(),0,!1)
j=B.G8(k)<500?":":" "
i=A.a.aY(A.o.v(B.cX(k)),2,"0")
h=A.a.aY(A.o.v(B.fx(k)),2,"0")
b8=B.L()
b8.r=A.bf.j(0.12).gp(0)
b9.aE(D.aUu,b8)
c2.$5(b9,i+j+h,D.eFl,A.bf,21)}b8=B.L()
b8.r=A.cE.gp(0)
b9.O(D.eFj,2.4,b8)
b8=B.L()
b8.r=A.cE.gp(0)
b9.O(D.eCr,2.4,b8)
return!0
case"calculator":l=B.bx(D.fqT,A.iD)
$.T()
b8=B.L()
b8.san(D.avD.az(0,new B.a5(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
b8=B.bx(D.fqM,A.hG)
s=B.L()
s.r=(b7?A.a0a:D.bwf).gp(0)
b9.aq(b8,s)
if(b7)c2.$5(b9,"3.14159",D.eF_,A.ZO,10.5)
for(g=0;g<4;++g)for(b8=-6+g*8,s=b8+6,f=0;f<4;++f){r=-15+f*8
r=B.bx(new B.a5(r,b8,r+6,s),A.Fo)
$.T()
q=new B.ar(A.U,A.R,A.X,A.Y,A.W)
q.r=(f===3?A.c8:A.bP).gp(0)
b9.aq(r,q)}return!0
case"phone":l=B.bx(D.fqH,A.iD)
$.T()
b8=B.L()
b8.r=M.ni.gp(0)
b9.aq(l,b8)
b8=B.L()
b8.b=A.ad
b8.c=1.9
b8.r=D.amx.gp(0)
b9.aq(l,b8)
e=B.bx(D.fqw,A.hs)
if(b7){b8=B.L()
b8.san(D.cex.az(0,new B.a5(e.a,e.b,e.c,e.d)))
b9.aq(e,b8)
b8=b9.c
J.bs(b8.save())
b8.clipRRect(B.nf(e),$.mT(),!0)
b8.translate(-12,-25)
K.MB(b9,D.fxB,c1,!1,b6,b6)
b8.restore()
d=A.i.F(c1*0.12,1)
b8=B.bx(D.fqt,A.hG)
s=B.L()
s.r=A.b9.gp(0)
b9.aq(b8,s)
s=B.L()
s.r=A.bf.gp(0)
b9.aE(new B.a5(-10,14.5,-10+20*d,16.9),s)
c2.$5(b9,"\u26a1"+A.i.S(d*100)+"%",D.eE7,A.c,6)}else{b8=B.L()
b8.r=D.wW.gp(0)
b9.aq(e,b8)}b8=B.bx(D.frB,D.ePc)
s=B.L()
s.r=A.v.gp(0)
b9.aq(b8,s)
return!0
case"router":l=B.bx(D.frb,A.pl)
$.T()
b8=B.L()
b8.san(D.cds.az(0,new B.a5(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
for(a0=0;a0<2;++a0){a1=F.U5[a0]
b8=a1<0?-4:4
s=new B.ar(A.U,A.R,A.X,A.Y,A.W)
s.r=A.cx.gp(0)
s.c=4
s.d=A.bG
b9.ah(new B.r(a1,-4),new B.r(a1+b8,-28),s)}for(u=0;u<4;++u){if(b7)a2=A.o.F(A.i.bd(c1*(3+u*1.3)),2)===0||u===0
else a2=!1
b8=new B.ar(A.U,A.R,A.X,A.Y,A.W)
b8.r=(a2?A.bk:A.aM).gp(0)
b9.O(new B.r(-15+u*10,11),2.6,b8)}if(b7)for(b8=c1*10,u=1;u<=3;++u){s=B.bY(H.wa,8+u*6+A.i.F(b8,6))
r=new B.ar(A.U,A.R,A.X,A.Y,A.W)
r.b=A.ad
r.c=1.8
r.r=A.fK.j(0.9-u*0.2).gp(0)
b9.cQ(s,-2.3,1.5,!1,r)}return!0
case"siren":a3=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bx(D.fqS,A.hs)
s=$.T()
r=B.L()
r.r=A.cU.gp(0)
b9.aq(b8,r)
if(b7){b8=B.L()
b8.r=A.aC.j(0.5*a3).gp(0)
b8.y=A.Dr
b9.O(A.w9,34,b8)}a4=new B.aI(s.r,A.ak,b6,b6,B.a([],x.v))
a4.E(new B.aZ(-16,12))
a4.E(new B.aq(-16,-2))
a4.E(new B.ck(0,-30,16,-2))
a4.E(new B.aq(16,12))
a4.E(new B.bA())
b8=B.L()
b8.r=B.ap(A.eA,D.bmy,a3).gp(0)
b9.af(a4,b8)
b8=B.L()
b8.b=A.ad
b8.c=1.4
b8.r=A.bX.gp(0)
b9.af(a4,b8)
if(b7){b8=b9.c
J.bs(b8.save())
b8.translate(0,-2)
b9.ju(0,c1*7)
s=B.L()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.ah(A.J,H.aan,s)
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
l.E(new B.bA())
q=B.L()
q.san(D.cbq.az(0,D.fr3))
b9.af(l,q)
q=new B.aI(s,A.ak,b6,b6,B.a([],r))
q.E(new B.aZ(-8,-4))
q.E(new B.aq(-4,-13))
q.E(new B.aq(4,-13))
q.E(new B.aq(4,-4))
q.E(new B.bA())
p=B.L()
p.r=A.fC.gp(0)
b9.af(q,p)
r=new B.aI(s,A.ak,b6,b6,B.a([],r))
r.E(new B.aZ(8,-4))
r.E(new B.aq(8,-13))
r.E(new B.aq(11,-13))
r.E(new B.aq(15,-4))
r.E(new B.bA())
s=B.L()
s.r=A.fC.gp(0)
b9.af(r,s)
for(a0=0;a0<2;++a0){a1=F.aEX[a0]
s=new B.ar(A.U,A.R,A.X,A.Y,A.W)
s.r=A.ax.gp(0)
b9.O(new B.r(a1,10),7.5,s)
J.bs(b8.save())
b8.translate(a1,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.ar(A.U,A.R,A.X,A.Y,A.W)
q.r=A.bP.gp(0)
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
l=new B.aI(b8,A.ak,b6,b6,B.a([],s))
l.E(new B.aZ(-18,20))
l.E(new B.aq(-14,-12))
l.E(new B.ck(0,-20,14,-12))
l.E(new B.aq(18,20))
l.E(new B.bA())
r=B.L()
r.san(D.ccz.az(0,D.fqR))
b9.af(l,r)
r=new B.aI(b8,A.ak,b6,b6,B.a([],s))
r.E(new B.aZ(14,-10))
r.E(new B.aq(30,-22))
r.E(new B.aq(32,-18))
r.E(new B.aq(16,-4))
r.E(new B.bA())
q=B.L()
q.r=A.dU.gp(0)
b9.af(r,q)
s=new B.aI(b8,A.ak,b6,b6,B.a([],s))
s.E(new B.aZ(-14,-8))
s.E(new B.ck(-34,-6,-18,12))
b8=B.L()
b8.b=A.ad
b8.c=5
b8.r=A.ax.gp(0)
b9.af(s,b8)
b8=B.L()
if(b7){s=B.ap(A.cW,A.v9,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.cU
b8.r=s.gp(0)
b9.aE(D.fqQ,b8)
if(b7){b8=B.L()
b8.r=A.cW.j(0.3).gp(0)
b8.y=A.nn
b9.O(A.aak,24,b8)
for(b8=c1*0.9,u=0;u<4;++u){a6=A.i.F(b8+u*0.25,1)
s=Math.sin(a6*9+u)
r=new B.ar(A.U,A.R,A.X,A.Y,A.W)
r.r=A.c.j(0.6*(1-a6)).gp(0)
b9.O(new B.r(30+s*4,-26-a6*26),3+a6*5,r)}}b8=B.L()
b8.r=A.ax.gp(0)
b9.O(D.eBp,3,b8)
return!0
case"lamp":if(b7){u=A.i.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aI($.T().r,A.ak,b6,b6,B.a([],x.v))
b8.E(new B.aZ(-10,-14))
b8.E(new B.aq(-30,24))
b8.E(new B.aq(10,24))
b8.E(new B.aq(8,-14))
b8.E(new B.bA())
s=B.L()
s.r=A.eI.j(0.28*u).gp(0)
b9.af(b8,s)
s=B.L()
s.r=A.eI.j(0.5*u).gp(0)
s.y=Z.PI
b9.O(D.eFr,24,s)}b8=B.bx(D.fru,A.hs)
s=$.T()
r=B.L()
r.r=A.cU.gp(0)
b9.aq(b8,r)
r=B.L()
r.r=A.d0.gp(0)
r.c=3
r.d=A.bG
b9.ah(D.eBF,D.aOl,r)
r=B.L()
r.r=A.d0.gp(0)
r.c=3
r.d=A.bG
b9.ah(D.aOl,D.eFs,r)
a7=new B.aI(s.r,A.ak,b6,b6,B.a([],x.v))
a7.E(new B.aZ(-14,-16))
a7.E(new B.aq(6,-26))
a7.E(new B.aq(10,-12))
a7.E(new B.aq(-10,-6))
a7.E(new B.bA())
s=B.L()
s.r=(b7?A.aQ:A.kd).gp(0)
b9.af(a7,s)
b8=B.L()
b8.r=(b7?A.c:A.bl).gp(0)
b9.O(D.eFv,4,b8)
return!0
case"lights":b8=$.T().r
s=x.v
a8=new B.aI(b8,A.ak,b6,b6,B.a([],s))
a8.E(new B.aZ(-34,-6))
a8.E(new B.ck(0,22,34,-6))
r=B.L()
r.b=A.ad
r.c=2
r.r=A.hY.gp(0)
b9.af(a8,r)
for(r=c1*2.4,u=0;u<5;++u){a9=(u+0.5)/5
q=-34+68*a9
p=-6+4*a9*(1-a9)*4*4.2/1*0.75+0
b0=b7&&A.i.F(r+u*0.7,1.8)<1.1
if(b0){b1=new B.ar(A.U,A.R,A.X,A.Y,A.W)
b1.r=D.a6U[u].j(0.6).gp(0)
b1.y=A.I2
b9.O(new B.r(q+0,p+6),12,b1)}b1=B.a([],s)
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
if(b0)p=D.a6U[u]
else{p=B.ap(D.a6U[u],A.v,0.65)
p.toString}q.r=p.gp(0)
b9.af(b2,q)}return!0}return C.iFb(b9,c0,c1,c2)},
h5:function h5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hrm(d){var w=D.mN.h(0,d)
return(w==null?null:w.b)===D.Bm},
iGs(d,e,f){return B.a8(d,!1).ca(B.vD(null,!1,!0,!0,new C.hbM(e,f),A.eY,null,A.pT,new C.hbN(),x.H))},
Kz:function Kz(d,e){this.a=d
this.b=e},
mn:function mn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hbM:function hbM(d,e){this.a=d
this.b=e},
hbN:function hbN(){},
WN:function WN(d,e,f){this.c=d
this.d=e
this.a=f},
aGv:function aGv(d,e,f){var _=this
_.d=$
_.e=null
_.r=_.f=!1
_.w=-99
_.x=d
_.z=_.y=0
_.bv$=e
_.ab$=f
_.c=_.a=null},
e2e:function e2e(d,e){this.a=d
this.b=e},
e2f:function e2f(d,e,f){this.a=d
this.b=e
this.c=f},
e2p:function e2p(d,e,f){this.a=d
this.b=e
this.c=f},
e2d:function e2d(d,e){this.a=d
this.b=e},
e2c:function e2c(d,e){this.a=d
this.b=e},
e2q:function e2q(d,e){this.a=d
this.b=e},
e2r:function e2r(d){this.a=d},
e26:function e26(d,e){this.a=d
this.b=e},
e25:function e25(d,e){this.a=d
this.b=e},
e24:function e24(d){this.a=d},
e2n:function e2n(){},
e2j:function e2j(d){this.a=d},
e2k:function e2k(d){this.a=d},
e2l:function e2l(d){this.a=d},
e2m:function e2m(d){this.a=d},
e2s:function e2s(d){this.a=d},
e2i:function e2i(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e2g:function e2g(){},
e2h:function e2h(d){this.a=d},
e2o:function e2o(d,e){this.a=d
this.b=e},
e2b:function e2b(d,e){this.a=d
this.b=e},
e29:function e29(d){this.a=d},
e2a:function e2a(d){this.a=d},
e23:function e23(d){this.a=d},
e28:function e28(d,e,f){this.a=d
this.b=e
this.c=f},
e27:function e27(d){this.a=d},
bAh:function bAh(d,e,f){this.b=d
this.c=e
this.a=f},
agY:function agY(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aP9:function aP9(){},
a32(d,e,f,g,h,i){return new C.bz3(d,e,f,g,h,i)},
bz3:function bz3(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fCM:function fCM(){},
fCN:function fCN(){},
fCO:function fCO(){},
fCP:function fCP(){},
fCQ:function fCQ(){},
fCR:function fCR(){},
fCS:function fCS(){},
fCT:function fCT(){},
aax:function aax(d){this.a=d},
cq1:function cq1(d){this.a=d},
cq2:function cq2(){},
cq0:function cq0(d,e){this.a=d
this.b=e},
cq_:function cq_(d){this.a=d},
Ys:function Ys(d){this.a=d},
aIe:function aIe(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.he$=f
_.mf$=g
_.fe$=h
_.hf$=i
_.bv$=j
_.ab$=k
_.c=_.a=null},
f2W:function f2W(d){this.a=d},
f2S:function f2S(d){this.a=d},
f2R:function f2R(d,e){this.a=d
this.b=e},
f2U:function f2U(d,e){this.a=d
this.b=e},
f2T:function f2T(d,e){this.a=d
this.b=e},
f2V:function f2V(d){this.a=d},
bAt:function bAt(d,e,f){this.b=d
this.c=e
this.a=f},
Xb:function Xb(d){this.a=d},
boi:function boi(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.he$=d
_.mf$=e
_.fe$=f
_.hf$=g
_.bv$=h
_.ab$=i
_.c=_.a=null},
ea0:function ea0(){},
ea1:function ea1(){},
e9W:function e9W(d,e){this.a=d
this.b=e},
e9Y:function e9Y(d,e){this.a=d
this.b=e},
e9Z:function e9Z(d){this.a=d},
e9X:function e9X(d){this.a=d},
ea_:function ea_(d){this.a=d},
bv6:function bv6(d,e,f){this.b=d
this.c=e
this.a=f},
Wm:function Wm(d){this.a=d},
bnS:function bnS(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.he$=d
_.mf$=e
_.fe$=f
_.hf$=g
_.bv$=h
_.ab$=i
_.c=_.a=null},
dUr:function dUr(){},
dUs:function dUs(){},
dUm:function dUm(){},
dUp:function dUp(d,e){this.a=d
this.b=e},
dUo:function dUo(d,e){this.a=d
this.b=e},
dUq:function dUq(d){this.a=d},
dUn:function dUn(d){this.a=d},
aLK:function aLK(d,e,f){this.a=d
this.b=e
this.c=f},
X2:function X2(d){this.a=d},
bo9:function bo9(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
e5N:function e5N(d,e){this.a=d
this.b=e},
e5O:function e5O(d){this.a=d},
e5M:function e5M(d,e){this.a=d
this.b=e},
e5P:function e5P(d){this.a=d},
e5L:function e5L(d,e){this.a=d
this.b=e},
e5Q:function e5Q(d){this.a=d},
e5K:function e5K(d,e){this.a=d
this.b=e},
e5R:function e5R(d,e){this.a=d
this.b=e},
e5J:function e5J(d,e){this.a=d
this.b=e},
e5S:function e5S(d){this.a=d},
e5I:function e5I(d,e){this.a=d
this.b=e},
e5T:function e5T(d){this.a=d},
e5H:function e5H(d){this.a=d},
e5U:function e5U(d){this.a=d},
e5G:function e5G(d){this.a=d},
e5V:function e5V(d){this.a=d},
e5W:function e5W(d){this.a=d},
e5F:function e5F(d){this.a=d},
bqd:function bqd(d,e,f){this.b=d
this.c=e
this.a=f},
XP:function XP(d){this.a=d},
aHu:function aHu(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
exX:function exX(d,e){this.a=d
this.b=e},
exY:function exY(d,e,f){this.a=d
this.b=e
this.c=f},
exW:function exW(d,e,f){this.a=d
this.b=e
this.c=f},
exZ:function exZ(d){this.a=d},
exV:function exV(d){this.a=d},
ey2:function ey2(d){this.a=d},
ey1:function ey1(d,e){this.a=d
this.b=e},
ey0:function ey0(d,e){this.a=d
this.b=e},
ey3:function ey3(d,e){this.a=d
this.b=e},
ey_:function ey_(d,e){this.a=d
this.b=e},
ey4:function ey4(d){this.a=d},
Y_:function Y_(d){this.a=d},
aHS:function aHS(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eL4:function eL4(d){this.a=d},
eL5:function eL5(d){this.a=d},
eL2:function eL2(d,e){this.a=d
this.b=e},
eL3:function eL3(d){this.a=d},
eL1:function eL1(d){this.a=d},
eL6:function eL6(d){this.a=d},
eL7:function eL7(d){this.a=d},
eL8:function eL8(d){this.a=d},
eL9:function eL9(d,e){this.a=d
this.b=e},
Yj:function Yj(d){this.a=d},
bpr:function bpr(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eZh:function eZh(){},
eZq:function eZq(){},
eZm:function eZm(d){this.a=d},
eZl:function eZl(){},
eZn:function eZn(d,e){this.a=d
this.b=e},
eZk:function eZk(d,e){this.a=d
this.b=e},
eZo:function eZo(d){this.a=d},
eZj:function eZj(d,e){this.a=d
this.b=e},
eZp:function eZp(d){this.a=d},
eZi:function eZi(d){this.a=d},
XO:function XO(d){this.a=d},
boV:function boV(d,e,f,g,h,i,j,k){var _=this
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
_.mf$=g
_.fe$=h
_.hf$=i
_.bv$=j
_.ab$=k
_.c=_.a=null},
ewC:function ewC(){},
ewD:function ewD(){},
ewv:function ewv(d){this.a=d},
ewu:function ewu(d){this.a=d},
eww:function eww(d){this.a=d},
ewt:function ewt(d){this.a=d},
ewx:function ewx(d){this.a=d},
ews:function ews(d){this.a=d},
ewy:function ewy(d,e){this.a=d
this.b=e},
ewr:function ewr(d,e){this.a=d
this.b=e},
ewz:function ewz(d){this.a=d},
ewq:function ewq(d,e){this.a=d
this.b=e},
ewA:function ewA(d){this.a=d},
ewp:function ewp(d,e){this.a=d
this.b=e},
ewB:function ewB(d){this.a=d},
ewo:function ewo(d,e){this.a=d
this.b=e},
bhG:function bhG(d,e,f){this.c=d
this.d=e
this.a=f},
aOW:function aOW(){},
bCb:function bCb(){},
aPg:function aPg(){},
bCh:function bCh(){},
aPH:function aPH(){},
bCr:function bCr(){},
aQ9:function aQ9(){},
bCA:function bCA(){},
K5(d,e,f,g){var w,v,u,t,s,r,q,p=$.auX
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.I)(e),++w)E.mJ(d,e[w],f,g)
return}for(p=B.cU(e,0,B.dw(4,"count",x.S),B.U(e).c),v=p.$ti,p=new B.bR(p,p.gJ(0),v.k("bR<aj.E>")),u=x.H,v=v.k("aj.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)E.mJ(d,s,f,g)
else B.bM(new B.bh(1000*q),new C.cpY(d,s,f,g),u)}},
cnj(d){return C.iaa(d)},
iaa(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$cnj=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aB(),$async$cnj)
case 7:r=f
q=B.aV(J.t(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.S(x.N,x.z)
w=1
break}p=A.V.aP(0,q,null)
o=x.N
n=x.z
o=x.f.b(p)?B.a_(p,o,n):B.S(o,n)
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
return B.i($async$cnj,v)},
b5a(d,e){return C.iab(d,e)},
iab(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b5a=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aB(),$async$b5a)
case 6:s=g
w=7
return B.b(s.aB("String","ngmy_play_progress_v1_"+d,A.V.au(e,null)),$async$b5a)
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
return B.i($async$b5a,v)},
cpY:function cpY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ivH(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.S(x.Y,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.B)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.I)(w),++q){p=w[q]
u.push(B.J(["k",p.b,"x",B.oM(A.i.a5(p.c,4)),"y",B.oM(A.i.a5(p.d,4)),"v",p.e,"l",B.oM(A.i.a5(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.oM(A.i.a5(p.as,3)),"ch",p.at,"vc",B.oM(A.i.a5(p.z,3)),"s",B.oM(A.i.a5(p.ch,2))],s,r))}w=B.a([],x.U)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.I)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.B(f,B.a3(f).k("ci.E"))
A.d.fd(l)
return A.V.au(B.J(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
iFB(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.V.aP(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a6(h)
A.d.a6(a6.b)
v=B.a([],x.fs)
g=x.R
f=g.a(J.t(w,"parts"))
f=J.aQ(f==null?A.bO:f)
while(f.C()){u=f.gP(f)
t=i.a(u)
e=B.aV(J.t(t,"k"))
s=e==null?"":e
if(!$.qU().am(0,s)){J.c8(v,null)
continue}d=s
a0=B.aJ(J.t(t,"x"))
if(a0==null)a0=0.5
a1=B.aJ(J.t(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.ud(a2,d,a0,a1)
a3.aty(a2,d,a0,a1)
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
d=B.kk(J.t(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.kk(J.t(t,"b"))
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
i=J.aQ(i==null?A.bO:i)
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
if(m!=null&&l!=null)a6.anu(m,A.i.M(B.dJ(J.t(p,1))),l,A.i.M(B.dJ(J.t(p,3))))}i=B.aJ(J.t(w,"challenge"))
i=A.i.M(i==null?0:i)
k=B.aR(x.S)
h=g.a(J.t(w,"done"))
h=J.aQ(h==null?A.bO:h)
while(h.C()){j=h.gP(h)
J.c8(k,A.i.M(B.dJ(j)))}return new B.btb(i,k)}catch(a4){return a5}},
fUc(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fUc=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.aB(),$async$fUc)
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
return B.i($async$fUc,v)},
bJb(d){return C.iHg(d)},
iHg(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bJb=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.aB(),$async$bJb)
case 7:w=6
return B.b(f.aB("String","ngmy_electronics_lab_v1",d),$async$bJb)
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
return B.i($async$bJb,v)},
h02(d,e,f){var w=0,v=B.j(x.I),u,t,s,r,q,p
var $async$h02=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(d.c===e&&d.d===f){u=d
w=1
break}$.T()
t=new B.oZ(new B.ox())
s=B.v4(t,null)
r=B.L()
r.r=A.c7.gp(0)
s.aE(new B.a5(0,0,e,f),r)
s.biQ(0,d,A.J,B.L())
q=t.n3()
w=3
return B.b(q.vN(e,f),$async$h02)
case 3:p=h
q.t()
d.t()
u=p
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h02,v)}},D,V,A2,As,K,F,M,A3,H,At,Au,Av,A4,Aw
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
C.amt.prototype={}
C.Xy.prototype={
R(){return new C.boJ(B.S(x.N,x.i),new B.au(A.ay,$.ay()),B.a([],x.X),B.a([],x.eZ),B.mo(0,null,null))}}
C.boJ.prototype={
gXT(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
t(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
this.ch.t()
this.a2()},
QD(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$QD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aS.bk$.d.c
if(s!=null)s.j1()
p.bM(0,A.ck)
t.l(new C.epE(t))
t.a.toString
p=t.gXT()
w=3
return B.b(C.bEv(C.ijl(q,C.ivs(p),o,t.ay)),$async$QD)
case 3:s=e
r=s==null?null:J.j7(s)
if(r==null||r.length===0||A.a.Y(r,"{"))r=C.iwZ(q,p,o)
if(t.c==null){w=1
break}t.l(new C.epF(t,o,r))
$.aS.U$.push(new C.epG(t))
case 1:return B.h(u,v)}})
return B.i($async$QD,v)},
ZZ(d){return this.c6_(d)},
b_l(){return this.ZZ(null)},
c6_(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$ZZ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aS.bk$.d.c
if(s!=null)s.j1()
t.f.sb1(0,o)
t.l(new C.epR(t))
G.dH(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bEv(C.iqx(o)),$async$ZZ)
case 3:r=n.a=m.iFg(f)
p.b=""
if(r!=null&&!C.ivt(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.ix_(o)
q=B.ag(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.amt(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.l(new C.epS(p,t))
t.cbV(p.a)
case 1:return B.h(u,v)}})
return B.i($async$ZZ,v)},
cbV(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
A.d.a6(w)
w=++m.as
v=m.gXT()
A.d.a6(v.a)
A.d.a6(v.b)
m.e.a6(0)
m.l(new C.epN(m))
t=d.d
s=B.S(x.N,x.Y)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.epL(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.epO(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.I)(r),++u){p.$2(o,new C.epP(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.epQ(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bj.j(0.1),g=B.m(16),f=B.K(A.bj.j(0.35),A.r,1)
if(m.x)j=B.A(B.a([D.fz8,A.bc,B.E(B.c(m.Q,l,l,l,l,l,l,A.By,l,l,l),1)],x.p),A.l,l,A.e,A.h,0,l,l)
else if(k==null)j=D.h_G
else{w=B.E(B.c(k.a,l,l,l,l,l,l,A.LW,l,l,l),1)
v=x.p
w=B.a([B.A(B.a([w,B.c(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fKi,l,l,l)],v),A.l,l,A.e,A.h,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.C(A.re,B.c(u,l,l,l,l,l,l,D.fNb,l,l,l),l))
w.push(A.cQ)
w.push(B.c(k.b,l,l,l,l,l,l,A_.FN,l,l,l))
u=k.e
if(u.length!==0){t=A.aQ.j(0.12)
s=B.m(10)
w.push(B.p(l,B.c(u,l,l,l,l,l,l,D.fPU,l,l,l),A.f,l,l,new B.o(t,l,l,s,l,l,A.m),l,l,l,A.hz,A.cu,l,l,l))}w.push(A.aj)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
t=B.c(t,l,l,l,l,l,l,A.mg,l,l,l)
q=u[r]
s=s?A.c:A.aF
w.push(new B.C(A.HG,new B.c0(A.aK,A.e,A.h,A.B,l,A.p,l,0,B.a([t,A.b6,new B.bu(1,A.b7,B.c(q,l,l,l,l,l,l,new B.F(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.I)(j),++p){o=j[p]
t=A.bj.j(0.3)
s=new B.aP(12,12)
s=B.p(l,B.c(o.a,l,l,l,l,l,l,A.WZ,l,l,l),A.f,l,l,new B.o(t,l,l,new B.bc(s,s,s,s),l,l,A.m),l,l,l,l,A.h0,l,l,l)
t=A.c.j(0.07)
q=new B.aP(12,12)
A.d.u(w,B.a([A.N,new B.bK(A.a9,l,l,s,l),A.at,B.p(l,B.c(o.b,l,l,l,l,l,l,D.fVM,l,l,l),A.f,l,l,new B.o(t,l,l,new B.bc(q,q,q,q),l,l,A.m),l,l,l,l,A.bS,l,l,l)],v))}if(m.ax)w.push(D.eGX)
j=B.cc(B.w(w,A.B,l,A.e,A.h,0,A.p),A.t,m.ch,A.y,l,l,l,l,l,A.ah)}w=x.p
g=B.w(B.a([B.akF(B.p(l,j,A.f,l,new B.aY(0,1/0,0,i),new B.o(h,l,f,g,l,l,A.m),l,l,l,D.bGc,A.ep,l,l,1/0),A.aZ,A.id),B.E(C.hwo(m.gXT(),l,l,m.e),1)],w),A.l,l,A.e,A.h,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new E.e4("Ask about it",i,new C.epV(m),l,A.bj,l),new E.e4("Invent something new",!i,new C.epW(m),l,A.bj,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dD5[p]
i.push(new E.e4(n,!1,new C.epX(m,n),l,A.bj,l))}f.push(new E.fj(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.djt[p]
i.push(new E.e4(r,!1,new C.epY(m,r),l,A.bj,l))}f.push(new E.fj(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aN(l,A.M,!1,l,!0,A.t,l,B.aO(),m.f,l,l,l,l,l,2,B.bC(l,new B.b6(4,B.m(16),A.a1),l,A.f_,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kC,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.am,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.epZ(m,k),l,!1,l,l,!1,l,!0,l,A.ae,l,l,l,l,l,l,l,l,l,l,l,A.du,!0,A.a7,l,A.ao,l,A.WO,l,l),1)
h=m.at
v=h&&j?D.bWh:A.eh
j=h&&j?"Ask":"Invent"
f.push(B.A(B.a([i,A.aa,new E.fK(v,j,new C.eq_(m,k),A.bj,l)],w),A.l,l,A.e,A.h,0,l,l))
return E.lZ(A.bj,A.fh,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.w(f,A.l,l,A.e,A.P,0,A.p))}}
C.Hi.prototype={}
C.vK.prototype={}
C.XV.prototype={
R(){return new C.aHJ(A.J,A.J,A.aA,B.aR(x.S),$,A.bH,0,B.a([],x.X),null,null)}}
C.aHJ.prototype={
gb0G(){var w,v,u,t=this,s=D.Jq[t.cx],r=D.U8[t.cy],q=D.Eq[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.e8(w,w.r,B.a3(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.aDe[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cD(p,0,new C.eFb())},
ga4L(){return D.Jq[this.cx].d/this.gb0G()},
gaSA(){return 0.1*(D.Jq[this.cx].d/0.9)/D.U8[this.cy].d},
Z(){this.a3()
this.mq()
C.cnj("rocket_lander").bD(new C.eFv(this),x.k)},
cc3(){var w=this
w.ay=A.i.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cV.ai()*0.6
w.f=new B.r(0.15+A.cV.ai()*0.7,0.08)
w.r=new B.r((A.cV.ai()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
mI(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.l(new C.eFw())
return}w=D.u3[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.i.D(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.r(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga4L()
v=v.a7(0,new B.r(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaSA())}if(m.dy){t=m.r
v=v.aI(0,t.aO(0,t.gcM()*6*D.aFf[m.d]))}t=m.r=m.r.a7(0,v.aO(0,d))
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
p=D.Eq[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b5a("rocket_lander",B.J(["unlocked",t],x.N,x.z))
C.K5("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga4L()/(D.u3[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.i.a5(m.ga4L()/(D.u3[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
G.dH(80,"",500,0,0.6,"noise")
B.fX()}}if(m.Q&&m.x>0&&A.o.F(A.i.bd(m.CW*20),2)===0)G.dH(90,"",70,0,0.12,"noise")
m.l(new C.eFx())},
aiC(d,e,f,g,h){var w,v=null,u=B.c(d,v,v,v,v,v,v,D.fMG,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new E.e4(e[w].a,f.$1(w),new C.eFd(this,g,w),v,h,v))
return new B.C(A.eC,B.w(B.a([u,A.cQ,B.c_(A.bI,s,A.br,v,6,6)],t),A.B,v,A.e,A.h,0,A.p),v)},
bKz(d){var w,v,u,t,s=this,r=null,q=s.ga4L()/(D.u3[s.d].b/9.81*0.28)>=1,p=A.i.S(1/s.gaSA()),o=D.aFf[s.d],n=B.m(24),m=d.c,l=B.K(m.j(0.6),A.r,1)
m=B.a([B.c("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.at,B.c(d.d+" Gravity here: "+B.v(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.add,r,r,r),A.S,s.aiC("ENGINE: "+D.Jq[s.cx].b,D.Jq,new C.eF2(s),new C.eF3(s),A.cW),s.aiC("FUEL TANK: "+D.U8[s.cy].b,D.U8,new C.eF4(s),new C.eF5(s),A.bf),s.aiC("LANDING GEAR: "+D.Eq[s.db].b,D.Eq,new C.eF6(s),new C.eF7(s),A.aH),s.aiC("EXTRAS (tap to add)",D.aDe,new C.eF8(s),new C.eF9(s),A.bj)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.hiT)
o=(q?A.bf:A.c1).j(0.14)
w=B.m(12)
v=A.i.a5(s.gb0G(),2)
u=A.i.a5(s.ga4L()/(D.u3[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.p(r,B.c("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.i.S(D.Eq[s.db].d*100)+".",r,r,r,r,r,r,D.fNl,r,r,r),A.f,r,r,new B.o(o,r,r,w,r,r,A.m),r,r,r,A.hz,A.bS,r,r,r))
m.push(A.S)
m.push(new B.bK(A.z,r,r,new E.fK(A.og,"Launch",new C.eFa(s),A.bf,r),r))
return B.at(B.p(r,B.cc(B.w(m,A.B,r,A.e,A.P,0,A.p),A.t,r,A.y,r,r,A.bR,r,r,A.ah),A.f,r,A.ml,new B.o(D.bvK,r,l,n,r,r,A.m),r,r,r,A.bS,r,r,r,r),r,r,r)},
b1T(d,e,f,g){var w=null,v=f?A.cW:A.c.j(0.1),u=B.m(18),t=B.K(A.aT,A.r,1)
return B.n2(A.j6,B.p(w,B.V(d,A.c,w,w,w,30),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,62,w,w,w,w,w,g),w,new C.eF_(e),new C.eF0(e),w,w,w,w,new C.eF1(e))},
b1S(d,e,f){return this.b1T(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cg(new C.eFo(s,D.u3[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.u3[w].a:"\ud83d\udd12"
o.push(new E.e4(v,s.d===w,new C.eFp(s,w),r,D.u3[w].c,r))}v=B.a([s.b1S(F.asF,new C.eFq(s),s.y),A.bc,s.b1T(A.vC,new C.eFr(s),s.Q,130),A.bc,s.b1S(A.R3,new C.eFs(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?A.aH:A.c.j(0.1)
t=B.m(18)
A.d.u(v,B.a([A.bc,B.aA(r,B.p(r,D.c_D,A.f,r,r,new B.o(u,r,B.K(A.aT,A.r,1),t,r,r,A.m),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eFt(s),r,r,r,r,r,r,!1,A.a4)],p))}return E.lZ(A.cW,A.fh,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.w(B.a([new E.fj(o,"WORLD",r),B.A(v,A.l,r,A.bb,A.h,0,r,r)],p),A.l,r,A.e,A.P,0,A.p))}}
C.blB.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=this.b,l=D.u3[m.d],k=a1.a,j=a1.b,i=0+k,h=0+j,g=$.T(),f=B.L(),e=l.c,d=B.ap(I.a0M,e,0.25)
d.toString
f.san(new B.a6(A.aU,A.b1,A.w,B.a([F.ajq,d],x.O),n,n).az(0,new B.a5(0,0,i,h)))
a0.aE(new B.a5(0,0,i,h),f)
w=new B.e5()
w.cV(5)
for(v=0;v<70;++v){i=w.ai()
h=w.ai()
f=w.ai()
d=new B.ar(A.U,A.R,A.X,A.Y,A.W)
d.r=A.c.j(0.2+w.ai()*0.5).gp(0)
a0.O(new B.r(i*k,h*j*0.8),f*1.2+0.3,d)}u=j*0.88
i=x.v
h=B.a([],i)
t=new B.aI(g.r,A.ak,n,n,h)
t.E(new B.aZ(0,u+14))
s=new B.e5()
s.cV(2)
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
g=B.bx(q,A.jL)
e=B.L()
e.r=A.bk.gp(0)
a0.aq(g,e)
e=B.bx(q.ct(2),A.pl)
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
a0.ju(0,m.w)
k=m.as
if(k==="crashed"){m=B.L()
m.r=A.cW.j(0.6).gp(0)
m.y=Z.PI
a0.O(A.J,34,m)
f.restore()
return}if(m.Q&&m.x>0&&k==="flying"){k=h.r
p=new B.aI(k,A.ak,n,n,B.a([],i))
p.E(new B.aZ(-8,18))
p.E(new B.aq(0,44+Math.sin(m.CW*40)*8))
p.E(new B.aq(8,18))
p.E(new B.bA())
m=B.L()
m.r=A.aQ.gp(0)
a0.af(p,m)
k=new B.aI(k,A.ak,n,n,B.a([],i))
k.E(new B.aZ(-4,18))
k.E(new B.aq(0,32))
k.E(new B.aq(4,18))
k.E(new B.bA())
m=B.L()
m.r=A.c.gp(0)
a0.af(k,m)}m=h.r
o=new B.aI(m,A.ak,n,n,B.a([],i))
o.E(new B.aZ(0,-26))
o.E(new B.ck(14,-10,11,18))
o.E(new B.aq(-11,18))
o.E(new B.ck(-14,-10,0,-26))
o.E(new B.bA())
k=B.L()
k.san(F.avE.az(0,D.fqD))
a0.af(o,k)
k=B.L()
k.r=A.aH.gp(0)
a0.O(H.wa,5,k)
k=new B.aI(m,A.ak,n,n,B.a([],i))
k.E(new B.aZ(-11,6))
k.E(new B.aq(-20,20))
k.E(new B.aq(-11,18))
k.E(new B.bA())
j=B.L()
j.r=A.aC.gp(0)
a0.af(k,j)
i=new B.aI(m,A.ak,n,n,B.a([],i))
i.E(new B.aZ(11,6))
i.E(new B.aq(20,20))
i.E(new B.aq(11,18))
i.E(new B.bA())
m=B.L()
m.r=A.aC.gp(0)
a0.af(i,m)
f.restore()},
aD(d){return!0}}
C.aPQ.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bCt.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bCl()}}
C.aW4.prototype={}
C.a5s.prototype={}
C.bes.prototype={}
C.Wl.prototype={
R(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.eC(["skin"],x.N),o=new Float32Array(0)
return new C.aG8(w,v,u,t,s,r,q,new B.cB(null,x.A),p,D.MY,D.MY,A.aA,A.cV,o,new Int32Array(0),$,A.bH,0,B.a([],x.X),null,null)}}
C.aG8.prototype={
Z(){var w=this
w.a3()
w.mq()
w.as=new C.c9v(w.gcls())
new C.dUk(w).$0()
return},
t(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a1(0)
v.d=null}this.bBo()},
clt(d){var w,v=this
if(v.c==null)return
w=J.a1(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.fc(0,B.J(["t","init","data",$.hGG],x.N,x.z))
v.at=!0
v.ay=""
v.aCA()
break
case"parts":v.l(new C.dTV(v))
break
case"pick":v.l(new C.dTW(v,d))
break
case"shot":v.aku(B.v(w.h(d,"data")))
break
case"error":$.an.$1("[body viewer] "+B.v(w.h(d,"text")))
if(v.c!=null&&!v.ax)v.l(new C.dTX(v))
break}},
aCA(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.aB4[q.cx]
v=new C.dTY()
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
aku(d){return this.cD3(d)},
cD3(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aku=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cK.aK(A.a.aV(d,A.a.c8(d,",")+1))
w=6
return B.b(B.ayl(B.a([B.cJT(r,"image/png","body.png")],x.fH),null,"Made in NGMY Core Protocol"),$async$aku)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.K(x.q).f.T(I.aWS)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aku,v)},
aBZ(d){var w=d.b
if(w==="skin")return this.CW>0
return this.ch.q(0,w)},
mI(d){var w,v=this
if(v.d==null)return
w=(v.k3+=d)*v.k4/60
if(v.ok&&v.ch.q(0,"organ")&&A.i.bd(w)!==A.i.bd(v.p1)){E.Yl("kick",0,0.4)
v.Vv(170,new C.dUl())}v.p1=w
return},
ag3(d){var w,v,u,t,s=this
s.l(new C.dTZ(s,d))
if(d==null){s.fy=D.MY
s.fr=1
w=s.as
if(w!=null)w.fc(0,B.J(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.U(w).k("X<1>")
u=B.B(new B.X(w,new C.dU_(d),v),v.k("M.E"))
t=A.d.gG(u).b
if(t!=="skin"&&!s.ch.q(0,t)){s.ch.I(0,t)
if(s.CW===2)s.CW=1}s.aCA()
w=s.as
if(w!=null)w.fc(0,B.J(["t","focus","group",d],x.N,x.z))
s.id=0
s.cFB(t,d)
return},
cFB(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){E.Yl("kick",0,0.8)
this.Vv(260,new C.dU0())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")G.dH(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.Vv(w*70,new C.dU1(this))
else if(A.a.q(e,"intestine")||e==="Stomach")G.dH(110,"",360,0.7,0.3,"saw")
else E.hlw("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":G.dH(210+e.length*4,"",80,0.6,0.55,"tri")
G.dH(2400,"",20,0,0.3,v)
break
case"muscle":G.dH(70,"",150,1,0.6,"sine")
break
case"vessel":G.dH(300,"",380,0.4,0.22,v)
E.Yl("kick",0,0.3)
break
default:E.hlw("organic",2+A.o.F(e.length,6),200,0.4)}},
cKn(d){this.l(new C.dU3(this,d))},
b2b(){var w,v,u,t,s,r,q,p=this,o=B.aR(x.N)
for(w=p.d.e,v=w.length,u=p.ch,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
if(p.aBZ(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.I(0,s.a)}q=B.B(o,o.$ti.k("ci.E"))
w=q.length
if(w===0)return
p.p3=q[p.RG.aw(w)]
p.R8=""},
c1F(d){var w,v,u=this
u.id=0
if(u.p2&&u.p3!=null){if(d==null)return
w=d===u.p3
u.l(new C.dTS(u,w,d))
v=x.t
C.K5("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.Vv(1100,new C.dTT(u))
return}if(d==null){if(u.cy!=null)u.ag3(null)
return}u.ag3(d)},
c5h(d,e){var w,v=this,u=null,t=B.m(18),s=B.K(A.c5.j(0.5),A.r,1)
if(v.p2){w=v.p3
w=B.c(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p4+"\n"+v.R8,u,u,u,u,u,u,D.fIC,u,u,u)}else if(d==null||e==null)w=D.fY_
else{w=x.p
w=B.A(B.a([B.E(B.w(B.a([B.c(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hj,u,u,u),A.cQ,B.c(e.b,u,u,u,u,u,u,A_.FN,u,u,u)],w),A.B,u,A.e,A.P,0,A.p),1),B.aH(u,u,u,u,D.c2j,u,u,u,new C.dTU(v),u,u,u,u,"Back to the whole body",A.cp)],w),A.B,u,A.e,A.h,0,u,u)}return B.p(u,w,A.f,u,u,new B.o(I.ZY,u,s,t,u,u,A.m),u,u,u,u,X.ao_,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:D.dP7.h(0,g)
i.aCA()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.duE
u=v.length
t=i.ch
s=0
for(;s<v.length;v.length===u||(0,B.I)(v),++s){r=v[s]
if(i.aBZ(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.q(w,q))w.push(q)}v=x.p
u=B.a([B.aH(h,h,h,h,I.p8,h,h,h,new C.dUa(i),h,h,h,h,"Share",h)],v)
q=B.a([],v)
p=i.as
if((p==null?h:p.b!=null)===!0){p=p.b
q.push(p==null?A.bK:B.C9(h,A.qm,p))}p=i.ax
o=p?0:1
q.push(new B.dp(p,B.xM(B.p(A.z,B.w(D.dEI,A.l,h,A.e,A.P,0,A.p),A.f,h,h,D.ba6,h,h,D.hLC,h,h,h,h,h),A.aZ,A.nk,o),h))
q=B.w(B.a([B.E(new B.am(A.a0,h,A.b4,A.t,q,h),1),new B.C(F.anH,i.c5h(g,f),h)],v),A.l,h,A.e,A.h,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){n=D.dle[s]
o=n.a
m=o==="skin"
if(m){l=i.CW
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=n.b
o=m?i.CW>0:t.q(0,o)
p.push(new E.e4(l,o,new C.dUb(i,n),n.c,A.c5,h))}p=B.a([new E.fj(p,h,h)],v)
if(!i.p2&&w.length!==0){o=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.I)(w),++s){k=w[s]
o.push(new E.e4(k,k===i.cy,new C.dUc(i,k),h,A.aQ,h))}p.push(new E.fj(o,"FIND",h))}if(t.q(0,"organ")){o=i.k4
p.push(E.jb(A.c1,""+A.i.S(o)+" beats/min","Heart rate",180,40,new C.dUd(i),o))}if(i.CW>0&&t.a===0){o=B.a([],v)
for(j=0;j<5;++j)o.push(new E.Gs(D.aB4[j],i.cx===j,new C.dUe(i,j),!1,h))
p.push(new E.fj(o,"SKIN",h))}o=i.go
m=i.p2
l=m?"Quiz on":"Quiz"
v=B.a([new E.e4("Spin",o,new C.dUf(i),D.arE,A.aH,h),new E.fK(A.mE,"Reset view",new C.dUg(i),A.c,h),new E.e4(l,m,new C.dUh(i),A.IK,A.aQ,h)],v)
if(t.q(0,"organ"))v.push(new E.e4("Heartbeat sound",i.ok,new C.dUi(i),T.p6,A.c1,h))
p.push(new E.fj(v,h,h))
return E.lZ(A.c5,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.w(p,A.l,h,A.e,A.P,0,A.p))}}
C.aOU.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.aOV.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bBn()}}
C.c9v.prototype={
kV(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aK(e,"</script","<\\/script")
v=$.hNv
$.hNv=v+1
u="ngmy-body-viewer-"+v
$.xI()
$.qe().ps(u,new C.c9w(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fI(v,"message",new C.c9x(t),!1,x.gA)
t.b=u},
fc(d,e){var w,v
try{w=this.c
if(w!=null){w=B.S7(w.contentWindow)
if(w!=null)J.aks(w,e,"*")}}catch(v){}}}
C.yY.prototype={}
C.Dm.prototype={}
C.o2.prototype={}
C.bfg.prototype={}
C.Ws.prototype={
R(){var w=x.N,v=x.y,u=x.S
return new C.aGa(B.S(w,x.a2),B.a([],x.cB),B.S(w,v),B.S(w,v),B.S(w,u),A.aA,A.J,A.J,B.aR(u),$,A.bH,0,B.a([],x.X),null,null)}}
C.aGa.prototype={
Z(){var w=this
w.a3()
w.mq()
w.aeY()
$.aS.U$.push(new C.dW0(w))},
aeY(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aeY=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aB(),$async$aeY)
case 6:q=e.nL("ngmy_circuit_passed_v1")
r=q==null?A.M:q
if(s.c!=null)s.l(new C.dVF(s,r))
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
return B.i($async$aeY,v)},
afk(d){return this.c9y(d)},
c9y(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$afk=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.I(0,d)
u=3
w=6
return B.b(B.aB(),$async$afk)
case 6:r=f
q=s.cx
p=B.a3(q).k("kq<ci.E,n>")
q=B.B(new B.kq(q,new C.dVI(),p),p.k("M.E"))
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
return B.i($async$afk,v)},
aAs(d,e,f,g){var w="c"+this.y++,v=new C.Dm(w,e,f,g)
this.d.n(0,w,v)
return v},
mY(d,e,f){return this.aAs(0,e,f,0)},
aeh(d,e){var w
if(D.AV.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a7(0,new B.r(-36,w))},
uv(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aWO(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fe$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.ds(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.ea(m,D.d2m[A.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.uv(p,0)&&n.uv(p,1)
break
case"or":p=q.a
o=n.uv(p,0)||n.uv(p,1)
break
case"xor":p=q.a
o=n.uv(p,0)!==n.uv(p,1)
break
case"nand":p=q.a
o=!(n.uv(p,0)&&n.uv(p,1))
break
case"nor":p=q.a
o=!(n.uv(p,0)||n.uv(p,1))
break
case"not":o=!n.uv(q.a,0)
break
default:o=n.uv(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bV5(){return this.aWO(null)},
mI(d){var w,v,u,t,s,r,q,p,o,n=this
n.bV5()
if(!n.ax)return
for(w=n.d,w=new B.ba(w,B.a3(w).k("ba<2>")).gae(0),v=new B.eR(w,new C.dW1()),u=n.f,t=n.w,s=0;v.C();){r=w.gP(0).a
if(u.h(0,r)===!0){q=n.fe$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fe$)
o=s+1
G.dH(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
aAt(d){var w=this
w.d.a6(0)
A.d.a6(w.e)
w.f.a6(0)
w.r.a6(0)
w.cy=null},
mr(d,e){var w=this.x
return new B.r(d*w.a,e*w.b)},
awA(d){var w=this
if(w.x.A(0,A.aA)){$.aS.U$.push(new C.dVD(w,d))
return}w.l(new C.dVE(w,d))},
cFU(d){this.l(new C.dVJ(this,d,$.bJz()[d]))},
ceq(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bJz()[a0]
v=d.d
u=B.a3(v).k("ba<2>")
t=u.k("X<M.E>")
s=t.k("M.E")
r=B.B(new B.X(new B.ba(v,u),new C.dVy(),t),s)
A.d.b_(r,new C.dVz())
q=B.B(new B.X(new B.ba(v,u),new C.dVA(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.l(new C.dVB(d,w))
return}u=d.r
p=B.dD(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dI(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.h3(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aWO(0)
h=m.h(0,A.d.gG(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.lA(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aL(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a6(0)
u.u(0,p)
d.l(new C.dVC(d,o,a0))},
aBu(d){var w,v,u,t,s=this.d,r=B.a3(s).k("ba<2>")
s=B.B(new B.ba(s,r),r.k("M.E"))
r=B.U(s).k("dz<1>")
s=new B.dz(s,r)
s=new B.bR(s,s.gJ(0),r.k("bR<aj.E>"))
w=d.a
r=r.k("aj.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
co3(d){var w,v,u,t,s,r=this.d,q=B.a3(r).k("ba<2>")
r=B.B(new B.ba(r,q),q.k("M.E"))
q=B.U(r).k("dz<1>")
r=new B.dz(r,q)
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
c5a(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.ds(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.AV.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.aeh(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.y(p,o)
s=l}}}return t},
bTQ(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.aeh(p,o)
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
ces(d){var w,v,u,t=this,s=t.aBu(d)
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
t.l(new C.dVK())
return}u=t.bTQ(d)
if(u!=null)t.l(new C.dVL(t,u))
else t.l(new C.dVM(t))},
azg(d){return this.c8v(d)},
c8v(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$azg=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.aBu(d)
if(s==null){w=1
break}B.jG()
t.l(new C.dVH(t,s))
case 1:return B.h(u,v)}})
return B.i($async$azg,v)},
bGi(d){if(this.x.A(0,A.aA))return
this.l(new C.dVx(this,d,A.cV))
B.f3()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bJz()[g]
g=x.p
v=B.a([B.aH(h,h,h,h,B.V(i.ax?T.p6:A0.tZ,A.ab,h,h,h,21),h,h,h,new C.dVV(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.m(16)
s=A.cw.j(0.14)
r=B.K(A.cw.j(0.5),A.r,1)
q=B.a([B.c("Challenge: "+w.a,h,h,h,h,h,h,D.fHK,h,h,h),B.c(w.b,h,h,h,h,h,h,A.Xc,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.C(A.kO,B.c(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.bf:A.f4,h,h,h,h,h,h,h,h,12,h,h,A.C,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.p(h,B.A(B.a([B.E(B.w(q,A.B,h,A.e,A.h,0,A.p),1),B.bH(D.h8O,h,i.gcep(),B.bp(A.cw,h,h,h,h,h,h,h,h,h,h,A.cp))],g),A.l,h,A.e,A.h,0,h,h),A.f,h,h,new B.o(s,h,r,t,h,h,A.m),h,h,h,U.Pj,D.bGX,h,h,1/0))}u.push(B.E(B.cg(new C.dVW(i)),1))
if(f!=null){t=B.m(14)
s=A.c.j(0.06)
r=f.b
u.push(B.p(h,B.c(D.AV.h(0,r).a+": "+D.AV.h(0,r).e,h,h,h,h,h,h,Aj.uB,h,h,h),A.f,h,h,new B.o(s,h,h,t,h,h,A.m),h,h,h,A.a2_,A.bS,h,h,1/0))}u=B.w(u,A.l,h,A.e,A.h,0,A.p)
t=B.a([],g)
for(s=D.AV.gdU(D.AV),s=s.gae(s);s.C();){r=s.gP(s)
q=new B.aP(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ax(o.j(0.5),1,A.r,-1)
t.push(B.aA(h,B.p(h,B.w(B.a([B.V(p.b,o,h,h,h,20),A.bs,B.c(p.a,h,h,h,h,h,h,D.aYV,h,h,h)],g),A.l,h,A.e,A.P,0,A.p),A.f,h,h,new B.o(n,h,new B.bE(m,m,m,m),new B.bc(q,q,q,q),h,h,A.m),h,h,h,A.fb,A.D7,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dVX(i,r),h,h,h,h,h,h,!1,A.a4))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dzv[l]
s.push(new E.fK(A.R4,k.b,new C.dVY(i,k),A.cw,h))}s.push(new E.fK(I.xq,"Clear",new C.dVZ(i),A.c1,h))
r=B.a([],g)
for(j=0;q=$.bJz(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?A.ea:A.m7
o=i.ay
n=i.cx.q(0,j)?A.bf:A.bu
r.push(new E.e4(q.a,o===j,new C.dW_(i,j),p,n,h))}return E.lZ(A.cw,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.w(B.a([new E.fj(t,"PARTS",h),new E.fj(s,"TRY",h),new E.fj(r,"TASKS",h)],g),A.l,h,A.e,A.P,0,A.p))}}
C.bfy.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3=a6.a,a4=a6.b
$.T()
w=B.L()
w.r=D.ahF.gp(0)
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
i=a3.aeh(l,o.c)
h=s.h(0,n)===!0
n=$.T()
g=B.a([],r)
f=new B.aI(n.r,A.ak,a2,a2,g)
g.push(new B.aZ(j,k))
f.ac()
n=i.a
e=Math.max(40,Math.abs(n-j)*0.5)
d=i.b
d=new B.i5(j+e,k,n-e,d,n,d)
g.push(d)
n=f.f
if(n!=null)d.aj(n)
f.ac()
if(h){n=new B.ar(A.U,A.R,A.X,A.Y,A.W)
n.b=A.ad
n.c=9
n.r=A.bu.j(0.28).gp(0)
n.y=O.oX
a5.af(f,n)}n=new B.ar(A.U,A.R,A.X,A.Y,A.W)
n.b=A.ad
n.c=3.2
n.d=A.bG
n.r=(h?A.eI:A.bz).gp(0)
a5.af(f,n)}a0=a3.as
if(a0!=null&&q.h(0,a0)!=null){a1=q.h(0,a0).c.a7(0,D.KD)
i=a3.at
a3=i.a
a4=a1.a
e=Math.max(40,Math.abs(a3-a4)*0.5)
r=new B.aI($.T().r,A.ak,a2,a2,B.a([],r))
w=a1.b
r.E(new B.aZ(a4,w))
s=i.b
r.E(new B.i5(a4+e,w,a3-e,s,a3,s))
s=B.L()
s.b=A.ad
s.c=3
s.r=A.ab.gp(0)
a5.af(r,s)}for(a3=new B.ds(q,q.r,q.e);a3.C();)this.cer(a5,a3.d)},
cer(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.AV.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.bZ(a0.c,64,64)
s=B.bx(t,A.k3)
r=w.cy===v
q=s.eI(A.cy)
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
q.san(new B.a6(A.aU,A.b1,A.w,B.a([p,m],x.O),g,g).az(0,t))
d.aq(s,q)
q=B.L()
q.b=A.ad
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aq(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.p4:D.bWQ}else l=e.b
k=C.hnl(B.lA(l.a),30,A.c,l.b,g,A.C)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a4(d,v.aI(0,new B.r(p/2,q.gb4(q)/2)))
j=C.hnl(e.a,10.5,A.c,g,g,A.C)
j.a4(d,a0.c.a7(0,new B.r(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.hnl(f,9,u?A.eI:A.bX,g,g,A.u)
i.a4(d,a0.c.a7(0,new B.r(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b2R(d,w.aeh(a0,h),o)
this.b2R(d,a0.c.a7(0,D.KD),o)},
b2R(d,e,f){var w
$.T()
w=B.L()
w.r=D.ahF.gp(0)
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
C.aOZ.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bCc.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bBs()}}
C.OM.prototype={
R(){return new C.aGr(B.mo(0,null,null))}}
C.LB.prototype={
a9(){return"_UnfoldStyle."+this.b}}
C.Bj.prototype={}
C.aGr.prototype={
Z(){this.a3()
B.bM(A.pS,C.iEh(),x.H)},
cey(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcr(0).at
v.toString
w.f=v}w.l(new C.e1a(w,e))},
c78(){var w=this
w.e.t()
w.e=B.mo(w.f,null,null)
w.l(new C.e19(w))},
t(){this.e.t()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null,s=t&&B.Q(d).ax.a===A.dg?A.c:A.c7
return B.pc(t,B.c6(v,s,t?new C.bw5(w.e,w.gcex(w),new C.e1b(d),v):new C.aKQ(u,new B.bg(u.b,x.W)),v,!1,!1,v,!1),new C.e1c(w,u),x.K)}}
C.bxK.prototype={}
C.bw5.prototype={
b2S(d,e,f){var w=null,v=B.c(d,w,w,w,w,w,w,B.l(w,w,f?A.bF:A.c,w,w,w,w,w,w,w,w,12.5,w,w,A.u,w,w,!0,w,1.6,w,w,w,w,w,w),w,w,w)
return new B.C(X.a2r,B.w(B.a([v,A.bs,B.c(e,w,w,w,w,w,w,B.l(w,w,f?A.cz:A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.B,w,A.e,A.h,0,A.p),w)},
B(d){var w,v,u,t=this,s=null,r=B.Q(d).ax.a===A.dg,q=B.aF(d,A.dK,x.w).w,p=B.aH(s,s,s,s,B.V(A.eE,r?A.bF:A.ab,s,s,s,20),s,s,D.hM4,t.e,s,s,s,s,s,s)
if(r)w=new B.o(A.c,s,s,B.m(14),A.Jt,s,A.m)
else{w=B.a([A.aH.j(0.22),A.aH.j(0.06)],x.O)
v=B.m(14)
w=new B.o(s,s,B.K(A.aH.j(0.75),A.r,1.6),v,B.a([new B.aa(0,A.H,A.aH.j(0.22),A.J,8)],x.V),new B.a6(A.aw,A.aD,A.w,w,s,s),A.m)}v=B.c("\ud83e\uddea Core Protocol",s,s,s,s,s,s,B.l(s,s,r?A.bF:A.c,s,s,s,s,s,s,s,s,15,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)
u=x.p
w=B.A(B.a([p,B.E(B.at(B.p(s,B.w(B.a([v,B.c("Play, make things, keep them.",s,s,s,s,s,s,B.l(s,s,r?A.cz:A.aR,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)],u),A.l,s,A.e,A.P,0,A.p),A.f,s,s,w,s,s,D.hM9,s,A6.aoy,s,s,s),s,s,s),1),A.uu],u),A.l,s,A.e,A.h,0,s,s)
v=t.b2S("STUDIOS","Play, make things, and keep what you make",r)
$.bJA()
return B.bo(!1,B.w(B.a([B.E(B.v5(0,s,A.t,t.c,A.y,s,s,s,s,s,!1,s,A.ah,!1,B.a([new B.nw(new B.R(8,q.r.b+6,8,4),new B.l0(w,s),s),new B.l0(v,s),new B.nw(A.ie,B.Qv(new B.pf(new C.fhL(d),9,!0,!0,!0,0,B.tD(),s),D.aWH),s),new B.l0(t.b2S("SCENES","Each one is a studio too: change the style, colours and words",r),s),new B.nw(D.bH5,B.Qv(new B.pf(new C.fhM(t),6,!0,!0,!0,0,B.tD(),s),D.aWH),s)],u)),1)],u),A.l,s,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!1)}}
C.ahh.prototype={
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m.d
if(B.Q(d).ax.a===A.dg){w=B.m(20)
v=(A.o.ao(o.c,3)&1)===0
u=B.a8p(v?A.aH:A.bj,20)
v=v?A.aH:A.bj
return B.aE(!1,A.a3,!0,n,B.aM(!1,w,!0,B.eL(B.w(B.a([new B.Wq(v,44,m.c,n,n),A.N,B.c(m.a,n,2,A.a2,n,n,n,D.fO5,A.K,n,n),A.cQ,B.c(m.b,n,2,A.a2,n,n,n,D.fR0,A.K,n,n)],x.p),A.l,n,A.bb,A.h,0,A.p),n,u,n,A.Dm,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}w=B.m(20)
v=B.m(20)
u=B.ap(L.ms,l,0.3)
u.toString
t=x.O
u=B.a([u,D.al_],t)
s=B.K(l.j(0.6),A.r,1.2)
r=x.V
q=B.a([new B.aa(-4,A.H,l.j(0.22),A.J,14)],r)
p=B.ap(l,A.v,0.45)
p.toString
t=B.a([l,p],t)
r=B.a([new B.aa(0,A.H,l.j(0.5),A.J,12)],r)
return B.aE(!1,A.a3,!0,n,B.aM(!1,w,!0,B.eL(B.w(B.a([B.p(n,B.V(m.c,A.c,n,n,n,24),A.f,n,n,new B.o(n,n,n,n,r,new B.a6(A.aw,A.aD,A.w,t,n,n),A.a6),n,44,n,n,n,n,n,44),A.N,B.c(m.a,n,2,A.a2,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,10.5,n,n,A.u,n,1.15,!0,n,0.5,n,n,n,n,n,n),A.K,n,n),A.cQ,B.c(m.b,n,2,A.a2,n,n,n,B.l(n,n,A.c.j(0.6),n,n,n,n,n,n,n,n,9.5,n,n,n,n,1.2,!0,n,n,n,n,n,n,n,n),A.K,n,n)],x.p),A.l,n,A.bb,A.h,0,A.p),n,new B.o(n,n,s,v,q,new B.a6(A.aw,A.aD,A.w,u,n,n),A.m),n,A.Dm,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}}
C.ag5.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.d,j=k.d,i=B.Q(d).ax.a===A.dg,h=(A.o.ao(this.c,3)&1)===0?A.aH:A.bj,g=B.m(20)
if(i)w=B.a8p(h,20)
else{w=B.m(20)
v=B.ap(L.ms,A.d.gG(j),0.24)
v.toString
v=B.a([v,D.al_],x.O)
v=new B.o(l,l,B.K(A.d.gG(j).j(0.35),A.r,1),w,B.a([new B.aa(0,A.H,A.v.j(0.4),A.cy,12)],x.V),new B.a6(A.aw,A.aD,A.w,v,l,l),A.m)
w=v}v=x.p
u=B.a([],v)
for(t=k.e,s=x.V,r=x.O,q=0;q<3;++q){p=q===2?0:4
o=new B.aP(6,6)
if(i){n=B.ap(h,A.c,0.1)
n.toString
n=B.a([n,B.Wr(h,!0)[1]],r)}else n=B.a([A.d.gG(j),A.d.gal(j)],r)
m=i?l:B.a([new B.aa(0,A.H,A.v.j(0.45),A.aax,0)],s)
u.push(B.p(l,B.V(t[q],A.c,l,l,l,11),A.f,l,l,new B.o(l,l,l,new B.bc(o,o,o,o),m,new B.a6(A.a5,A.a9,A.w,n,l,l),A.m),l,17,l,new B.R(q*4,0,(2-q)*4,p),l,l,l,l))}u=B.w(u,A.l,l,A.e,A.P,0,A.p)
if(i)t=A.bF
else{t=B.ap(A.d.gG(j),A.d.gal(j),0.4)
t.toString}t=B.c(k.b,l,2,A.a2,l,l,l,B.l(l,l,t,l,l,l,l,l,l,l,l,10.5,l,l,A.u,l,1.2,!0,l,0.6,l,l,l,l,l,l),A.K,l,l)
return B.aE(!1,A.a3,!0,l,B.aM(!1,g,!0,B.eL(B.w(B.a([new B.a4(58,l,u,l),A.S,t,A.at,B.V(A.E_,i?B.Wr(h,!0)[1]:A.d.gG(j),l,l,l,18)],v),A.l,l,A.bb,A.h,0,A.p),l,w,l,A.Dm,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,this.e,l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.ai)}}
C.RO.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ap(A.d.gal(i),A.v,0.62)
h.toString
w=k.c
v=k.d
h=B.ao(-8,new B.bP(new B.o(h,j,j,B.m(22),j,j,A.m),A.bm,j,j),j,j,2,2,8,j)
u=B.m(22)
t=k.y
s=x.V
r=B.a([new B.aa(0,A.H,A.v.j(0.55),A.Kz,26),new B.aa(-6,A.H,A.d.gG(i).j(0.1+0.4*t),A.J,30)],s)
q=B.m(22)
p=B.ap(A.d.gG(i),A.c,0.14)
p.toString
o=A.d.gG(i)
n=A.d.gal(i)
i=B.ap(A.d.gal(i),A.v,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bT(0,new B.bP(new B.o(j,j,j,j,j,new B.a6(A.aw,A.aD,A.w,B.a([p,o,n,i],m),D.dFM,j),A.m),A.bm,j,j),0,0,0),B.ao(j,new B.bP(new B.o(j,j,j,j,j,new B.a6(A.aU,A.b1,A.w,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.m),A.bm,j,j),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bT(0,B.b4(j,j,j,new C.bx7(i,j),A.aA),0,0,0))
i=A.c.j(0.16)
p=B.K(A.c.j(0.5),A.r,1.4)
s=B.a([new B.aa(0,A.H,A.c.j(0.25*t),A.J,14)],s)
s=B.p(j,B.V(k.f,A.c,j,j,j,28),A.f,j,j,new B.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=B.a([B.c(k.r,j,j,j,j,j,j,D.fK8,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.u(p,B.a([A.at,B.c(i,j,1,A.a2,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a8,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.Fy)
p.push(B.p(j,j,A.f,j,j,new B.o(A.c.j(0.28),j,j,B.m(3),j,j,A.m),j,5,j,j,j,j,j,w*0.42))
m.push(new B.C(A.he,B.A(B.a([s,A.er,B.E(B.w(p,A.B,j,A.e,A.P,0,A.p),1)],l),A.l,j,A.e,A.h,0,j,j),j))
i=k.x
if(i>0)m.push(B.bT(0,new B.dp(!0,B.el(j,A.v.j(A.i.D(i*0.6,0,0.7)),!0),j),0,0,0))
i=B.m(22)
m.push(B.bT(0,new B.dp(!0,new B.bP(new B.o(j,j,B.K(A.c.j(0.3),A.r,1.2),i,j,j,A.m),A.bm,j,j),j),0,0,0))
return new B.a4(w,v,new B.am(A.a0,j,A.ac,A.f,B.a([h,B.bT(0,new B.bP(new B.o(j,j,j,u,r,j,A.m),A.bm,B.bv(q,new B.am(A.a0,j,A.ac,A.t,m,j),A.ap),j),0,0,0)],l),j),j)}}
C.bx7.prototype={
a4(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a5(r,-10,s,w)
u=d.c
J.bs(u.save())
u.translate(v.gbE().a,v.gbE().b)
d.ju(0,0.35)
t=B.bZ(A.J,(w- -10)*1.6,s-r)
$.T()
s=B.L()
s.san(new B.a6(A.a5,A.a9,A.w,B.a([A.L,A.c.j(0.3),A.L],x.O),null,null).az(0,t))
d.aE(t,s)
u.restore()},
aD(d){return d.b!==this.b}}
C.bwD.prototype={
B(d){var w=null,v=B.m(22),u=B.a([D.btz,D.ak2],x.O),t=this.e,s=B.K(A.d.gG(t).j(0.4),A.r,1.2),r=B.a([new B.aa(0,A.H,A.v.j(0.5),A.kx,24)],x.V),q=B.m(22),p=A.d.gG(t)
return new B.a4(this.c,this.d,new B.bP(new B.o(w,w,s,v,r,new B.a6(A.aw,A.aD,A.w,u,w,w),A.m),A.bm,B.bv(q,B.b4(B.at(B.V(A.j8,A.d.gG(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.bea(p,w),A.aA),A.ap),w),w)}}
C.bea.prototype={
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
t.b=A.ad
t.c=1.4
t.r=v.j(0.35).gp(0)
d.O(u,30,t)},
aD(d){return!1}}
C.aKQ.prototype={
R(){return new C.aKR(new B.cB(null,x.A),null,null)}}
C.aKR.prototype={
gr4(){var w,v=this,u=v.d
if(u===$){w=B.br(null,D.bEj,null,1,null,v)
w.cT(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
gK2(){var w,v=this,u=v.e
if(u===$){w=B.br(null,A.fO,null,1,null,v)
w.fm(0,!0)
v.e!==$&&B.bF()
v.e=w
u=w}return u},
gaAu(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gceu(){var w=this.w
if(w===$){w=B.B(this.a.c.d,x.G)
this.w=w}return w},
gb_3(){var w=this.x
if(w===$){w=B.B(this.a.c.e,x.Z)
this.x=w}return w},
gb_R(){var w=this.y
if(w===$){w=B.B(this.a.c.f,x.N)
this.y=w}return w},
gbc2(){var w=this.z
if(w===$){w=B.B(this.a.c.r,x.N)
this.z=w}return w},
Z(){this.a3()
var w=this.gr4()
w.dq()
w.e0$.I(0,this.gcFC())},
cFD(){var w,v,u,t,s,r,q,p=this,o=p.gr4().x
o===$&&B.d()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as&&p.ch<0){switch(p.gaAu().a){case 0:w=D.ol
break
case 1:w=D.vV
break
case 2:w=D.a6X
break
case 3:w=D.ol
break
case 4:w=D.dr4
break
case 5:w=D.vV
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.aff)r=0.09
else r=s===D.afg?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){G.dH(260+90*v,"",260,1.6,0.18,"tri")
u=D.cfQ[v]
E.mJ("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.K5("bell",D.coI,1400,0.35)}}p.ax=o},
t(){this.gr4().t()
this.gK2().t()
this.bDi()},
a0u(){var w=this
w.gr4().d59(0,B.du(0,0,0,A.i.S(11e3/w.Q),0,0))
w.l(new C.fhr(w))},
cq9(){this.gr4().bQ(0)
this.l(new C.fhq(this))},
a0t(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$a0t=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:if(r.ch>=0){w=1
break}j=$.aS.bk$.x.h(0,r.f)
i=j==null?null:j.gbf()
if(!(i instanceof B.oz)||i.fy==null){w=1
break}h=r.as
j=r.gr4()
j.bQ(0)
g=r.gK2()
g.bQ(0)
r.l(new C.fhg(r))
f=i.ga0(0)
e=f.a
d=f.b
q=Math.min(3.5,1600/Math.max(e,d))
p=A.i.bd(e*q)
o=A.i.bd(d*q)
n=A.i.S(11/r.Q*20)
m=null
t=4
w=7
return B.b(E.ajw(24*q,20,new C.fhh(r,n,q,p,o),n,o,new C.fhi(r),p),$async$a0t)
case 7:l=a3
if(J.ad(l)===0){e=B.bd("empty")
throw B.Y(e)}e=r.a.c
d=B.ag("[^a-z0-9]+",!0,!1,!1,!1)
k=B.aK(e.b.toLowerCase(),d,"_")
w=8
return B.b(E.aTV(l,k),$async$a0t)
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
break}r.l(new C.fhj(r))
g.fm(0,!0)
j.sp(0,0)
if(h)r.a0u()
r.c.K(x.q).f.T(B.b0(null,null,null,null,null,A.t,null,B.c(m,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a0t,v)},
agt(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$agt=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gb_R(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){q=t[r]
l.push(new B.au(new B.bb(q,A.b8,A.aP),$.ay()))}m=B.a([],m)
for(t=u.gbc2(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){p=t[r]
m.push(new B.au(new B.bb(p,A.b8,A.aP),$.ay()))}o=B.B(u.gb_3(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bV(L.ms,null,new C.fhp(u,l,m,o),t,!0,!0,!0,A.md,!1,!1,x.H),$async$agt)
case 2:l=B.B(l,x.bO)
A.d.u(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.V$=$.ay()
n.W$=0}return B.h(null,v)}})
return B.i($async$agt,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gaAu(),e=h.a.c,d=e.b,a0=h.gceu(),a1=new C.Bj(f,d,e.c,a0,h.gb_3(),h.gb_R(),h.gbc2())
e=B.ap(A.d.gG(a0),A.d.gal(a0),0.4)
e.toString
f=x.p
w=B.a([B.aH(g,g,g,g,B.V(h.at?T.p6:A0.tZ,A.ab,g,g,g,21),g,g,g,new C.fhz(h),g,g,g,g,"Sound",g),B.aH(g,g,g,g,D.c64,g,g,g,h.gcew(),g,g,g,g,"Edit words and pictures",g),B.aH(g,g,g,g,I.p8,g,g,g,new C.fhA(h,a2),g,g,g,g,"Share",g)],f)
v=B.a([B.c9(h.gK2(),new C.fhB(h,a1),g),B.cg(new C.fhC(h,a1))],f)
u=h.as
t=u?h.gcq8():h.gcez()
u=u?D.bW1:A.tW
s=B.ap(A.d.gG(a0),A.d.gal(a0),0.4)
s.toString
t=B.A(B.a([B.aH(g,g,g,g,B.V(u,s,g,g,g,34),g,g,g,t,g,g,g,g,g,A.cp),B.E(B.c9(h.gr4(),new C.fhD(h,a2,a1),g),1),B.aH(g,g,g,g,D.c29,g,g,g,new C.fhE(h),g,g,g,g,"Replay",A.cp)],f),A.l,g,A.e,A.h,0,g,g)
s=h.Q
u=A.i.a5(s,1)
r=B.ap(A.d.gG(a0),A.d.gal(a0),0.4)
r.toString
s=E.jb(r,u+"x","Speed",2.5,0.4,new C.fhF(h),s)
u=B.a([],f)
for(q=0;q<6;++q){p=D.dCF[q]
o=h.r
if(o===$)o=h.r=h.a.c.a
r=B.ap(A.d.gG(a0),A.d.gal(a0),0.4)
r.toString
u.push(new E.e4(p.b,o===p.a,new C.fhG(h,p),p.c,r,g))}r=B.a([],f)
for(n=x.G,q=0;q<10;++q){m=D.cgf[q]
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
r.push(B.aA(g,B.p(g,g,A.f,g,g,new B.o(g,g,new B.bE(i,i,i,i),g,g,new B.a6(A.aw,A.aD,A.w,m,g,g),A.a6),g,k,g,I.anv,g,g,g,l),A.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new C.fhH(h,m),g,g,g,g,g,g,!1,A.a4))}u=B.a([t,s,new E.fj(u,"STYLE",g),new E.fj(r,"THEME",g),A.aj],f)
t=h.ch
if(t>=0){s=B.m(6)
a0=B.ap(A.d.gG(a0),A.d.gal(a0),0.4)
a0.toString
u.push(new B.C(A.jY,B.w(B.a([B.bv(s,B.jH(A.by,g,a0,8,g,t,g),A.ap),A.at,B.c("Making your GIF\u2026 "+A.i.S(h.ch*100)+"%",g,g,g,g,g,g,A.nC,g,g,g)],f),A.l,g,A.e,A.h,0,A.p),g))}else{f=B.ap(A.d.gG(a0),A.d.gal(a0),0.4)
f.toString
u.push(new B.a4(1/0,g,B.de(A.oh,g,D.hk3,h.gcev(),B.bp(f,g,g,g,A.v,g,A.kN,g,g,g,g,g)),g))}return E.lZ(e,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.e9(new B.am(A.a0,g,A.b4,A.t,v,g),h.f),d,B.w(u,A.l,g,A.e,A.P,0,A.p))},
bFs(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.ol[r]
p=A.i.D((1-A.eg.aA(0,A.i.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.i.D(p/1.5707963267948966,0,1)
q=D.ol[r]
n=q+0.12
m=A.i.D((a0-n)/(q+0.2-n),0,1)
n=D.ol[r]
q=n-0.01
q=A.i.D((a0-q)/(n+0.03-q),0,1)
n=B.dA()
l=n.a
l.$flags&2&&B.ak(l)
l[11]=0.0013
n.k0(p)
l=v[r]
k=u[r]
j=t[r]
i=D.ol[r]
h=i+0.1
if(A.i.D((a0-h)/(i+0.3-h),0,1)>0){i=D.ol[r]
h=i+0.1
h=A.i.D((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.ol[r]
h=i+0.1
h=A.i.D((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cR(0,r*118,0,f,f,f,new B.kZ(q,new B.jd(n,f,A.aU,!0,f,new C.RO(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.ol[r]
u=v-0.02
g=A.i.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gG(w)
v=D.ol[r]
t=v+0.12
e.push(new B.cR(0,r*118-3-2,0,f,f,4,new B.mX(new C.bvH(u,g,1-A.i.D((a0-t)/(v+0.22-t),0,1),f),f,A.aA,f,f),f))}return new B.a4(a2,358,new B.am(A.a0,f,A.ac,A.f,e,f),f)},
bWH(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.vV[r]
p=A.r8.aA(0,A.i.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.vV[r]
m=q+0.15
l=A.i.D((a0-m)/(q+0.25-m),0,1)
m=D.vV[r]
q=m-0.03
q=A.i.D((a0-q)/(m+0.01-q),0,1)
m=B.dA()
k=m.a
k.$flags&2&&B.ak(k)
k[11]=0.0011
m.k6(n,n,n,1)
m.fI(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new C.RO(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dA()
k.fI(3.141592653589793)
k=new B.jd(k,f,A.z,!0,f,new C.bwD(a2,108,w,f),f)}e.push(new B.cR(0,r*130,0,f,f,f,new B.kZ(q,new B.jd(m,f,A.z,!0,f,k,f),f),f))}return new B.a4(a2,378,new B.am(A.a0,f,A.ac,A.f,e,f),f)},
cKR(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a6X[w]
l.push(A.cn.aA(0,A.i.D((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bT(0,B.b4(n,n,n,new C.bzd(d.d,l,D.aCN,m,C.bw4(e,0.4,0.62),f,C.bw4(e,0.45,0.7),n),A.aA),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.hnT(g,w)
q=D.aCN[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cR(r,s-q*m*p+12,n,n,t,n,new B.kZ(o,B.V(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.hnT(g,w)
r=D.a6X[w]
q=r+0.15
v.push(new B.cR(s,l,n,n,t,n,new B.kZ(A.i.D((e-q)/(r+0.25-q),0,1),B.c(u[w],n,n,n,n,n,n,A.Xo,A.K,n,n),n),n))}return new B.a4(g,m+90,new B.am(A.a0,n,A.ac,A.f,v,n),n)},
bLR(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cn.aA(0,C.bw4(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bT(0,B.at(B.dQ(B.b4(f,f,f,new C.bv5(A.d.gG(a1),C.bw4(a3,0,0.2),a4,f),new B.av(a5*0.95,70)),D.eBd),f,f,f),0,0,0))
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
l.k6(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.i.F(r,1):-1
w.push(new B.y(o,new B.cR(0,0,0,0,f,f,new B.cn(A.z,f,f,new B.kZ(k*(0.45+0.55*o),B.dQ(new B.jd(l,f,A.z,!0,f,new C.RO(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.r(n*a5*0.34,-o*18)),f),f),f)))}A.d.b_(w,new C.fhd())
A.d.u(a0,new B.O(w,new C.fhe(),x.fR))
return new B.a4(a5,330,new B.am(A.a0,f,A.ac,A.f,a0,f),f)},
cet(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.vV[q]
o=A.i.D((a2-p)/(p+0.22-p),0,1)
n=A.n1.aA(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.vV[q]
m=A.i.D((a2-m)/(m+0.02-m),0,1)
l=D.aEU[q]
k=B.dA()
k.n9(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.k6(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.vV[q]
g=h+0.1
g=A.i.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cR(0,0,0,0,e,e,new B.cn(A.z,e,e,new B.kZ(m,B.dQ(new B.jd(k,e,A.z,!0,e,new C.RO(d,92,w,p,j,i,0,g*s,h,e),e),new B.r(0,l)),e),e),e))
l=D.vV[q]
h=l+0.02
f=A.i.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cR(0,0,0,0,e,e,new B.cn(A.z,e,e,B.dQ(new B.mX(new C.beR(w,f,q,e),e,new B.av(r,212),e,e),new B.r(0,D.aEU[q])),e),e))}return new B.a4(a4,330,new B.am(A.a0,e,A.ac,A.f,a0,e),e)},
bIs(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.r(-b0,-150),new B.r(b0,-40),D.eBi],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.ol[r]
p=A.i.D((a8-q)/(q+0.2-q),0,1)
o=A.cn.aA(0,p)
q=D.aF3[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.ol[r]
f=g+0.2
e=A.i.D((a8-f)/(g+0.3-f),0,1)
f=D.ol[r]
g=f-0.01
g=A.i.D((a8-g)/(f+0.03-g),0,1)
f=B.dA()
d=f.a
d.$flags&2&&B.ak(d)
d[11]=0.001
f.n9(l*h+D.dvH[r]*o)
f.fI(l*0.9)
h=0.55+0.45*o
f.k6(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cR(0,0,0,0,a3,a3,new B.cn(A.z,a3,a3,new B.kZ(g,B.dQ(new B.jd(f,a3,A.z,!0,a3,new C.RO(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.r(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.ol[r]
i=q+0.17
a2=A.i.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aF3[r]
a6.push(new B.cR(0,0,0,0,a3,a3,new B.cn(A.z,a3,a3,B.dQ(new B.mX(new C.bv7(A.d.gG(w),a2,a3),a3,new B.av(a4,30),a3,a3),new B.r(0,q+48-4)),a3),a3))}}return new B.a4(b0,330,new B.am(A.a0,a3,A.ac,A.f,a6,a3),a3)}}
C.bvH.prototype={
a4(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a5(w-v,0,w+v,e.b)
q=B.bx(u,A.hG)
$.T()
t=B.L()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.y=O.oX
d.aq(q,t)
t=B.bx(u,A.hG)
q=B.L()
q.r=A.c.j(s).gp(0)
d.aq(t,q)},
aD(d){return d.c!==this.c||d.d!==this.d}}
C.bv5.prototype={
a4(d,e){var w,v,u=this.c,t=B.bZ(e.eo(A.J),e.b*u,e.a*u)
$.T()
u=B.L()
u.b=A.ad
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.y=Z.PI
d.c1(t,u)
u=B.L()
u.b=A.ad
u.c=2.5
u.r=w.j(0.7).gp(0)
d.c1(t,u)
u=t.ct(-14)
v=B.L()
v.b=A.ad
v.c=1
v.r=w.j(0.3).gp(0)
d.c1(u,v)},
aD(d){return!0}}
C.beR.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.eo(A.J),h=this.c,g=A.cn.aA(0,h)
$.T()
w=B.L()
w.b=A.ad
v=1-h
w.c=5*v
u=this.b
w.r=A.d.gG(u).j(0.6*v).gp(0)
d.O(i,40+g*e.a*0.42,w)
t=new B.e5()
t.cV(this.d*17+3)
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
C.bv7.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o=e.eo(A.J)
for(w=e.a,v=e.b,u=this.b,t=this.c,s=0;s<2;++s){r=A.i.D(t-s*0.18,0,1)
if(r<=0)continue
q=B.bZ(o,v*(0.3+r*0.9),w*(0.5+r*0.7))
$.T()
p=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p.b=A.ad
p.c=2
p.r=u.j((1-r)*0.7).gp(0)
d.c1(q,p)}},
aD(d){return d.c!==this.c}}
C.bzd.prototype={
a4(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2=c0.e,c3=c2+36,c4=d2.a,c5=c4*0.23,c6=c5*0.34,c7=c6*0.85,c8=-c6*0.5,c9=c3-4,d0=new B.a5(0,c9,0+c4,c9+60)
$.T()
c9=B.L()
w=c0.b
v=x.O
c9.san(new B.a6(A.aU,A.b1,A.w,B.a([A.d.gG(w).j(0.18),A.L],v),c1,c1).az(0,d0))
d1.aE(d0,c9)
c9=B.L()
c9.r=A.c.j(0.18).gp(0)
c9.c=1
d1.ah(new B.r(0,c3),new B.r(c4,c3),c9)
for(c9=c0.w,u=c9>0,t=(c5-16)/3,s=t-5,r=0.6+0.3*c0.r,q=c0.f,p=c3-14,o=x.v,n=c3+c8,m=c0.d,l=c3-6,k=c5+c7+8,j=l+16,i=c0.c,h=c9<1,g=d1.c,f=0;f<3;++f){e=i[f]
if(e<=0)continue
d=C.hnT(c4,f)
a0=m[f]*c2*e
a1=d-4
a2=$.T()
a3=new B.ar(A.U,A.R,A.X,A.Y,A.W)
a3.r=A.v.j(0.5).gp(0)
a3.y=A.nn
d1.c1(new B.a5(a1,l,a1+k,j),a3)
a3=c3-a0
a1=d+c5
a4=new B.a5(d,a3,a1,a3+a0)
a5=new B.ar(A.U,A.R,A.X,A.Y,A.W)
a6=B.ap(A.d.gG(w),A.c,0.1)
a6.toString
a5.san(new B.a6(A.aU,A.b1,A.w,B.a([a6,A.d.gal(w)],v),c1,c1).az(0,a4))
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
a9=new B.bA()
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
a2=new B.bA()
a5.push(a2)
a5=b1.f
if(a5!=null)a2.aj(a5)
b1.ac()
a2=new B.ar(A.U,A.R,A.X,A.Y,A.W)
a2.r=B.ap(A.d.gG(w),A.c,0.45).gp(0)
d1.af(b1,a2)
b2=new B.ar(A.U,A.R,A.X,A.Y,A.W)
b2.b=A.ad
b2.c=1
b2.r=A.c.j(0.28).gp(0)
d1.aE(a4,b2)
d1.af(a7,b2)
d1.af(b1,b2)
b3=A.i.bd(a0/22)
for(a2=a3+6,a3=d+8,a5=q*b3*1.3,b4=0;b4<b3;++b4){b5=a5>b3-b4-1
for(a6=p-b4*22-12,a8=a6<a2,a9=a6+10,b6=0;b6<3;++b6){b7=a3+b6*t
if(a8)continue
b0=B.bx(new B.a5(b7,a6,b7+s,a9),A.hG)
$.T()
b8=new B.ar(A.U,A.R,A.X,A.Y,A.W)
b8.r=(b5?A.c.j(r):A.v.j(0.22)).gp(0)
d1.aq(b0,b8)}}if(u&&h){a2=c3-a0*c9-14
b9=new B.a5(d,a2,a1,a2+28)
J.bs(g.save())
g.clipRect(B.hS(a4),$.lF()[1],!0)
$.T()
a2=new B.ar(A.U,A.R,A.X,A.Y,A.W)
a2.san(new B.a6(A.aU,A.b1,A.w,B.a([A.L,A.c.j(0.4),A.L],v),c1,c1).az(0,b9))
d1.aE(b9,a2)
g.restore()}}},
aD(d){return!0}}
C.aQG.prototype={
b0(){this.b8()
this.b5()
this.dT()},
t(){var w=this,v=w.bc$
if(v!=null)v.a8(0,w.gdO())
w.bc$=null
w.a2()}}
C.a2w.prototype={
a9(){return"_Role."+this.b}}
C.qL.prototype={}
C.rs.prototype={}
C.Dq.prototype={}
C.a0s.prototype={}
C.ah4.prototype={}
C.a2J.prototype={
ga0(d){return this.d}}
C.DB.prototype={}
C.adU.prototype={}
C.aeb.prototype={}
C.ag9.prototype={}
C.bly.prototype={
a4V(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
G.dH(d,"",e,g,h,f)},
bdb(d,e,f){return this.a4V(d,e,f,0,0.55)},
aFo(d,e,f,g){return this.a4V(d,e,f,0,g)},
bdc(d,e,f,g){return this.a4V(d,e,f,g,0.55)},
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
amG(d,e,f,g){var w="n"+this.ay++,v=new C.rs(w,e,f,g)
this.a.n(0,w,v)
this.b3()
return v},
tr(d,e,f){return this.amG(0,e,f,0)},
X(d,e){var w=this
w.a.X(0,e)
A.d.br(w.b,new C.dvt(e))
A.d.br(w.c,new C.dvu(e))
w.b3()},
bh4(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.nt.h(0,v.b).c===D.yB)return!1
w=this.b
if(A.d.aR(w,new C.dvq(d,e)))return!1
w.push(new C.Dq(d,e))
this.b3()
return!0},
c5X(d){var w
if(d.b==="beat")return D.coU[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.aw(500)
case 2:return 1400+w.aw(2200)
default:return 450+w.aw(2000)}},
aIZ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.aFk[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.DB(u,t,j.ax,90))
w.push(new C.DB(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ai()*3.141592653589793*2
v.push(new C.a2J(u,new B.r(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.bdb(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ai()*3.141592653589793*2
p=100+w.ai()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ap(t,A.c,w.ai()*0.5)
m.toString
v.push(new C.a2J(u,new B.r(o*p,n*p),m,3+w.ai()*4.5,1000+w.aw(700),j.ax))}j.f.push(new C.DB(u,t,j.ax,120))
j.aFo(120,200,"noise",0.5)
j.bdb(261.63*Math.pow(2,([7,12,16,19][w.aw(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.DB(u,t,j.ax,230))
w.push(new C.DB(u,t,j.ax+160,160))
w.push(new C.DB(u,t,j.ax+320,100))
j.bdc(180+j.at.aw(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.adU(u,new B.r((w.ai()-0.5)*220,-260-w.ai()*180),t,j.ax))
j.bdc(300+w.aw(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ai()*3.141592653589793*2
j.w.push(new C.aeb(u,u.a7(0,new B.r(Math.cos(q),Math.sin(q)).aO(0,260+w.ai()*200)),t,j.ax))
j.a4V(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fX()
j.a4V(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.ag9(u,D.aEG[v],t,j.ax))
j.aFo(261.63*Math.pow(2,([0,5,9,12][j.at.aw(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aFo(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.ckY[A.o.F(w,3)]
for(k=1;k<=3;++k)j.cAy(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new B.eR(w,new C.dvr(d));v.C();)j.aDR(w.gP(0),j.ax+D.cxs[A.o.F(g.d,4)])
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
case"chance":s=j.at.aw(100)<D.cOU[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new B.eR(w,new C.dvs(d));v.C();)j.aDR(w.gP(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.xU(w,0,v-700)},
cAy(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.a0s(e,"~"+d))},
aDR(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.ah4(d.a,v,e,w))
u.push(new C.a0s(w,v))},
a8G(d){var w,v,u,t,s,r,q,p,o=this
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
else if(o.ax>=q){o.aIZ(r)
u.n(0,r,o.ax+o.c5X(s))}}w=o.c
v=B.U(w).k("X<1>")
q=B.B(new B.X(w,new C.dvv(o),v),v.k("M.E"))
if(q.length!==0){A.d.br(w,new C.dvw(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.I)(q),++t){u=q[t].b
if(A.a.Y(u,"~")){p=A.a.aV(u,1)
for(u=A.d.gae(v),r=new B.eR(u,new C.dvx(p));r.C();)o.aDR(u.gP(0),o.ax)}else o.aIZ(u)}}A.d.br(o.d,new C.dvy(o))
A.d.br(o.e,new C.dvz(o))
A.d.br(o.f,new C.dvA(o))
A.d.br(o.w,new C.dvB(o))
A.d.br(o.x,new C.dvC(o))
A.d.br(o.r,new C.dvD(o))
o.b3()},
vX(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
for(v=this.a,v=new B.ds(v,v.r,v.e),u=x.N,t=x.K;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(B.J(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=B.a([],x.E)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,B.I)(t),++o){n=t[o]
v.push(B.a([n.a,n.b],r))}return A.V.au(B.J(["nodes",m,"edges",v],u,x.ew),null)},
V8(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.V.aP(0,d,null))
k.a6(0)
for(o=x.j,n=J.aQ(o.a(J.t(w,"nodes"))),m=k.a;n.C();){v=n.gP(n)
u=B.v(J.t(v,"k"))
if(!D.nt.am(0,u))continue
t=B.v(J.t(v,"id"))
m.n(0,t,new C.rs(t,u,new B.r(B.dJ(J.t(v,"x"))*k.cy.a,B.dJ(J.t(v,"y"))*k.cy.b),A.i.M(B.dJ(J.t(v,"p")))))
s=B.ca(B.aK(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aQ(o.a(J.t(w,"edges"))),n=k.b;o.C();){r=o.gP(o)
q=B.v(J.t(r,0))
p=B.v(J.t(r,1))
if(m.am(0,q)&&m.am(0,p))n.push(new C.Dq(q,p))}k.b3()
return!0}catch(l){return!1}},
d_v(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
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
l.bh4(w[m.a],w[m.b])}},
ga0(d){return this.cy}}
C.H3.prototype={}
C.XU.prototype={
R(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aHI(new C.bly(B.S(w,x.f3),v,u,t,s,r,q,p,o,B.S(w,n),B.S(w,n),B.S(w,n),B.S(w,n),A.cV,A.L,A.aA,$.ay()),A.bH,A.J,A.J,A.M,null,null)}}
C.aHI.prototype={
aeQ(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$aeQ=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.aB(),$async$aeQ)
case 6:q=n.kk(m.t(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.l(new C.eEw(s))
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
return B.i($async$aeQ,v)},
abI(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$abI=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.l(new C.eEl(s))
u=3
w=6
return B.b(B.aB(),$async$abI)
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
return B.i($async$abI,v)},
bRY(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a3(n).k("ba<2>")
v=""+n.a+"|"+o.length+"|"+new B.ba(n,w).cD(0,0,new C.eEn())+"|"+A.d.cD(o,0,new C.eEo())
if(v===p.ch)return p.CW
u=new C.eEr()
t=x.s
s=B.a([],t)
r=new C.eEs(p,s,u)
for(n=new B.ba(n,w).gae(0),w=new B.eR(n,new C.eEp());w.C();){q=n.gP(0)
if(!A.d.aR(o,new C.eEq(q)))s.push(B.v(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.cU(s,0,B.dw(5,"count",x.S),x.N).dd(0)},
Z(){var w,v=this
v.a3()
v.aeQ()
v.d.db=v.ay
w=v.qc(new C.eEW(v))
w.fS(0)
v.e!==$&&B.aT()
v.e=w},
t(){var w=this,v=w.as
if(v!=null)v.a1(0)
v=w.e
v===$&&B.d()
v.t()
v=w.d
v.V$=$.ay()
v.W$=0
w.bCj()},
ael(d){return this.c5n(d)},
c5n(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$ael=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.aB(),$async$ael)
case 6:q=m.aV(l.t(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.V8(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.b0i(A.d.gG(D.aE7))
if(s.c!=null)s.l(new C.eEv())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ael,v)},
b0i(d){this.d.d_v(0,d.c,d.d)
this.Fd()},
Fd(){var w=this.as
if(w!=null)w.a1(0)
this.as=B.cC(A.m3,new C.eEh(this))},
aAv(d){var w,v,u,t,s=this.d.a,r=B.a3(s).k("ba<2>")
s=B.B(new B.ba(s,r),r.k("M.E"))
r=B.U(s).k("dz<1>")
s=new B.dz(s,r)
s=new B.bR(s,s.gJ(0),r.k("bR<aj.E>"))
w=d.a
r=r.k("aj.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
co4(d){var w,v,u,t,s,r=this.d.a,q=B.a3(r).k("ba<2>")
r=B.B(new B.ba(r,q),q.k("M.E"))
q=B.U(r).k("dz<1>")
r=new B.dz(r,q)
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
c5b(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.ds(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
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
ceC(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hNw(new B.r(n.a+36,n.b+0),new B.r(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cIs(d){var w,v,u,t,s,r,q=this,p=q.aAv(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.f3()
u=v.b
if(u==="button"){w.aIZ(p)
return}if(q.r)return
t=D.nt.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.rX)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.b3()
q.Fd()
return}if(q.r)return
r=q.ceC(d)
if(r!=null){w=q.d
A.d.cJ(w.b,r)
w.b3()
q.Fd()}},
cpq(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.co4(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.aAv(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aI(0,d)}},
cpr(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b3()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.r(A.i.D(d.a+s.y.a,46,t.a-46),A.i.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b3()}}},
b5X(){var w,v,u=this
if(u.z!=null){w=u.c5b(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bh4(v,w)}else v=!1
if(v){B.ka()
u.Fd()}u.z=null
u.d.b3()}else if(u.x!=null){if(u.at)u.Fd()
u.x=null}},
af4(d){return this.c8w(d)},
c8w(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$af4=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.aAv(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jG()
p=t.c
p.toString
w=3
return B.b(B.bV(L.ms,null,new C.eEy(q),p,!0,!0,!1,A.md,!1,!1,x.y),$async$af4)
case 3:if(f===!0){r.X(0,s)
t.Fd()}case 1:return B.h(u,v)}})
return B.i($async$af4,v)},
ceA(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.tr(0,d,new B.r(v.a*(0.25+u.ai()*0.5),v.b*(0.2+u.ai()*0.55)))
B.f3()
this.Fd()},
aj9(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aj9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bV(L.ms,null,new C.eEA(),s,!0,!0,!0,A.md,!1,!1,x.es),$async$aj9)
case 2:t=e
if(t!=null)u.b0i(t)
return B.h(null,v)}})
return B.i($async$aj9,v)},
agu(d){var w=0,v=B.j(x.H),u=this,t
var $async$agu=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cf(null,null,!0,null,new C.eEk(),t,null,!0,!0,x.y),$async$agu)
case 2:if(f===!0){u.d.a6(0)
u.Fd()}return B.h(null,v)}})
return B.i($async$agu,v)},
B(d){var w=this,v=null,u=B.a([B.akF(w.r?new B.bK(A.a5,v,v,new B.C(A.HZ,B.hy(D.c_V,D.h1k,new C.eEU(w),v),v),v):w.ceD(),A.aZ,A.j3),B.E(B.cg(new C.eEV(w)),1)],x.p)
if(!w.r)u.push(w.cD6())
return B.c6(v,A.c7,B.bo(!0,B.w(u,A.l,v,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)},
bNA(){var w=null,v=new C.eEm(),u=A.v.j(0.7),t=B.m(26),s=B.K(A.bw.j(0.5),A.r,1)
return B.bT(0,B.el(B.at(B.p(w,B.cc(B.w(B.a([D.hcX,A.at,D.hkP,A.aB,v.$4(A.mF,A.bw,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(W.DW,A.cw,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.kn,A.c5,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.Qw,A.bu,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.hk6,new B.bK(A.a9,w,w,B.bL(!1,D.ha0,w,w,!0,w,w,w,this.gbNt(),w,w),w)],x.p),A.B,w,A.e,A.P,0,A.p),A.t,w,A.y,w,w,w,w,w,A.ah),A.f,w,A.Z9,new B.o(L.ms,w,s,t,w,w,A.m),w,w,w,A.f5,A9.aoR,w,w,w),w,w,w),u,!0),0,0,0)},
ceD(){var w=this,v=null,u=B.aH(v,v,v,v,Ap.nr,v,v,v,new C.eEG(w),v,v,v,v,v,v),t=w.ab8(A.DP,"How it works",new C.eEH(w),!0),s=w.ay?T.p6:A0.tZ
return new B.C(D.bLg,B.A(B.a([u,D.bMX,t,w.ab8(s,"Sound",new C.eEI(w),!0),w.ab8(A.eh,"Ideas",w.gctj(),!0),w.ab8(I.xq,"Clear",w.gceB(w),!0),w.aRT(A.fQ,"Show",new C.eEJ(w),!0,!0)],x.p),A.l,v,A.e,A.h,0,v,v),v)},
aRT(d,e,f,g,h){var w=null,v=h?A.bw:A.c.j(0.08),u=B.m(14),t=B.m(14),s=B.a([B.V(d,h?A.v:A.c,w,w,w,20)],x.p)
return new B.C(Al.xh,B.aE(!1,A.a3,!0,u,B.aM(!1,t,!0,B.hb(new B.C(new B.R(8,8,8,8),B.A(s,A.l,w,A.e,A.P,0,w,w),w),w,e,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ai),w)},
ab8(d,e,f,g){return this.aRT(d,e,f,g,!1)},
cD6(){var w=null,v=new C.eEC(this),u=A.c.j(0.08)
return B.p(w,B.cc(B.A(B.a([v.$2("START",D.yB),v.$2("CHANGE",D.G9),v.$2("REACT",D.rX)],x.p),A.B,w,A.e,A.h,0,w,w),A.t,w,A.y,w,w,w,w,w,A.aK),A.f,w,w,new B.o(L.CG,w,new B.bE(new B.ax(u,1,A.r,-1),A.a1,A.a1,A.a1),w,w,w,A.m),w,w,w,w,D.bGe,w,w,w)},
cD7(d){var w,v,u,t,s=null,r=D.nt.h(0,d)
r.toString
w=B.m(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.K(v.j(0.5),A.r,1)
return new B.C(A.fb,B.aA(s,B.p(s,B.w(B.a([B.V(r.b,v,s,s,s,22),A.cQ,B.c(r.a,s,1,A.a2,s,s,s,D.aYV,s,s,s)],x.p),A.l,s,A.e,A.P,0,A.p),A.f,s,s,new B.o(s,s,t,w,s,new B.a6(A.aU,A.b1,A.w,u,s,s),A.m),s,s,s,s,A.hA,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eEB(this,d),s,s,s,s,s,s,!1,A.a4),s)}}
C.blz.prototype={
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
d=new B.aI(f.r,A.ak,b3,b3,e)
e.push(new B.aZ(i,j))
d.ac()
a0=Math.max(40,Math.abs(g-i)*0.5)
f=new B.i5(i+a0,j,g-a0,h,g,h)
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
h=B.rc(new B.r(i,j),new B.r(g,h))
f.san(new B.a6(A.a5,A.a9,A.w,e,b3,b3).az(0,new B.a5(h.a-2,h.b-2,h.c+2,h.d+2)))
b7.af(d,f)}for(w=b4.d,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a3=w[n]
l=o.h(0,a3.a)
k=o.h(0,a3.b)
if(l==null||k==null)continue
j=a3.c
a4=A.i.D((b5-j)/(a3.d-j),0,1)
j=l.c
i=k.c
a5=C.hNw(new B.r(j.a+36,j.b+0),new B.r(i.a-36,i.b),a4)
$.T()
i=new B.ar(A.U,A.R,A.X,A.Y,A.W)
i.r=A.c.j(0.35).gp(0)
i.y=O.oX
b7.O(a5,8,i)
i=new B.ar(A.U,A.R,A.X,A.Y,A.W)
i.r=A.c.gp(0)
b7.O(a5,4,i)}a6=b2.d.$0()
if(a6!=null&&o.h(0,a6)!=null){a7=o.h(0,a6).c.a7(0,D.KD)
a8=b2.e.$0()
w=a8.a
t=a7.a
a0=Math.max(40,Math.abs(w-t)*0.5)
d=new B.aI($.T().r,A.ak,b3,b3,B.a([],p))
p=a7.b
d.E(new B.aZ(t,p))
j=a8.b
d.E(new B.i5(t+a0,p,w-a0,j,w,j))
j=B.L()
j.b=A.ad
j.c=3
j.r=A.c.j(0.7).gp(0)
b7.af(d,j)
j=B.L()
j.r=A.c.gp(0)
b7.O(a8,7,j)}for(w=b4.f,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a9=w[n]
p=a9.c
v=A.i.D((b5-p)/700,0,1)
if(b5<p)continue
p=A.ed.aA(0,v)
$.T()
j=new B.ar(A.U,A.R,A.X,A.Y,A.W)
j.b=A.ad
i=1-v
j.c=3.5*i+0.5
j.r=a9.b.j(i*0.9).gp(0)
b7.O(a9.a,14+a9.d*p,j)}for(w=b4.w,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){b0=w[n]
v=A.i.D((b5-b0.d)/600,0,1)
p=b0.a
j=b0.b
i=B.kY(p,j,A.ed.aA(0,v))
i.toString
j=B.kY(p,j,A.ed.aA(0,A.i.D(v-0.35,0,1)))
j.toString
$.T()
p=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p.c=5
p.d=A.bG
h=b0.c
g=B.a([h.j(0),h],q)
f=B.rc(j,i)
p.san(new B.a6(A.a5,A.a9,A.w,g,b3,b3).az(0,new B.a5(f.a-4,f.b-4,f.c+4,f.d+4)))
b7.ah(j,i,p)
p=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p.r=A.c.gp(0)
b7.O(i,6,p)
p=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p.r=h.j(0.5*(1-v)).gp(0)
p.y=A.ld
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
j.y=A.ld
b7.O(p,11,j)
j=k.a
p=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p.san(new B.bU(Ac.BZ,0.5,A.w,b3,0,B.a([A.c,i],q),b3,b3).az(0,B.bY(k.a,8)))
b7.O(j,8,p)}for(b4=b4.x,w=b4.length,n=0;n<b4.length;b4.length===w||(0,B.I)(b4),++n){a5=b4[n]
v=A.i.D((b5-a5.d)/1000,0,1)
t=1-v
b1=C.blA(a5.b,26+8*t,a5.c.j(t),b3,b3,A.u)
t=a5.a
q=b1.b
p=q.c
q=q.a.c
b1.a4(b7,new B.r(t.a-p/2,t.b-(40+60*v+q.gb4(q)/2)))}for(b4=new B.ds(o,o.r,o.e);b4.C();)b2.coX(b7,b4.d,b5)
b6.restore()},
coX(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.nt.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.i.D(1-(f-w)/520,0,1)
u=B.bZ(e.c,64,64)
t=B.bx(u,A.i8)
s=t.eI(A.cy)
$.T()
r=B.L()
r.r=A.v.j(0.55).gp(0)
r.y=A.nn
d.aq(s,r)
if(v>0){s=t.ct(6)
r=B.L()
r.r=h.d.j(0.6*v).gp(0)
r.y=A.Dr
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
r.san(new B.a6(A.aU,A.b1,A.w,B.a([s,p],x.O),j,j).az(0,u))
d.aq(t,r)
r=B.L()
r.b=A.ad
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aq(t,r)
r=h.b
p=e.c
o=C.blA(B.lA(r.a),30,A.c,r.b,j,A.C)
r=o.b
s=r.c
r=r.a.c
o.a4(d,p.aI(0,new B.r(s/2,r.gb4(r)/2)))
n=C.blA(h.a,11,A.c,j,j,A.C)
n.a4(d,e.c.a7(0,new B.r(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.aEG[A.o.F(e.d,6)]:j
h=h.c
if(h===D.rX){s=e.c.a7(0,new B.r(0,62))
r=B.L()
r.r=D.aFk[A.o.F(e.d,6)].gp(0)
d.O(s,5,r)}else if(m!=null){l=C.blA(m,9.5,A.aF,j,j,A.O)
l.a4(d,e.c.a7(0,new B.r(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.blA(m,9.5,A.aF,j,j,A.O)
l.a4(d,e.c.a7(0,new B.r(-l.b.c/2,54)))}if(k.c)return
if(h!==D.yB)k.b6M(d,e.c.aI(0,D.KD),q)
k.b6M(d,e.c.a7(0,D.KD),q)},
b6M(d,e,f){var w
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
C.aPO.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.es.prototype={}
C.ud.prototype={
aty(d,e,f,g){var w=this
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
C.acx.prototype={}
C.adG.prototype={}
C.a6A.prototype={
biY(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.h9()?-1:1
v=t.ai()*3.141592653589793*2
u=f*(0.3+t.ai())
s.push(new C.acx(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ai()*0.45));++r}},
caJ(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.br(w,new C.bSK())},
amG(d,e,f,g){var w="p"+this.c++,v=new C.ud(w,e,f,g)
v.aty(w,e,f,g)
this.a.push(v)
return v},
X(d,e){A.d.X(this.a,e)
A.d.br(this.b,new C.bSV(e))},
a6(d){A.d.a6(this.a)
A.d.a6(this.b)},
cRp(d,e,f,g,h){return A.d.aR(this.b,new C.bSQ(e,f,g,h))},
anu(d,e,f,g){var w
if(d===f||this.cRp(0,d,e,f,g))return null
w=new C.adG(d,e,f,g)
this.b.push(w)
return w},
aEo(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
AE(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
aqf(d){return this.N1(d)&&!d.x&&d.cx>this.AE(d)},
bbc(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
N1(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
ceX(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.AW.h(0,v)
if(w!=null)return w.a
return 100},
vX(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.caJ(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.U(v).k("X<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.I)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.X(v,new C.bSW(a2),t).cD(0,0,new C.bSX(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.S(x.N,u)
n=new C.bSZ(o)
m=B.a([],x.t)
l=new C.bSY(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.I)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.I)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.S(u,u)
f=new C.bT0(g,l,n)
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
a2.bb8(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.AE(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.bb8(e,d,w,!0)
a2.bUj(a4)},
bb8(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.S(x.N,b3),b5=new C.bSM(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bSL(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.I)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bSO(B.S(b3,b3),r,b5)
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
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.bbc(t)*(1+t.CW))
a4=b2.aEo(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.ceX(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bXH(e,a0,b8)
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
bXH(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
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
bUj(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.I)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aEo(o)/a1.bbc(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.AE(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bMb(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.biY(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.uC(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.uC(o,"The "+$.qU().h(0,n).b+" got "+A.i.a5(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.uC(o,"More than 1.5 amps went through the "+$.qU().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.uC(o,"The regulator had to turn "+A.i.a5(o.cy,1)+" V into heat while "+A.i.S(i*1000)+" mA flowed. That is "+A.i.a5(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.uC(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.AW.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qU().h(0,n).b
l=f.b
l=l===A.i.fJ(l)?""+A.i.S(l):B.v(l)
g=f.c
g=g===A.i.fJ(g)?""+A.i.S(g):B.v(g)
a1.uC(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.i.a5(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.fvf.q(0,n)){m=o.fx>0?A.i.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.i.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.uC(o,"The bulb got "+A.i.a5(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.i.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.uC(o,"The LED had "+A.i.S(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.i.D(j/14,0,1)
break
case"motor":n=A.i.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.i.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.uC(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.i.D(i/1,0,1)
if(!o.x&&i>1)a1.uC(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.uC(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.i.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.uC(o,"The capacitor was charged to "+A.i.a5(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bMb(d){return A.d.aR(this.a,new C.bSJ(d))},
uC(d,e){var w
d.x=!0
d.ay=e
this.biY(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bnC(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a6(0)},
aKM(d){var w=d.b
return D.aVB.q(0,w)||D.AW.am(0,w)||w==="buck"||w==="regulator"},
bks(d){var w,v=!0
if(!this.N1(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.AW.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
Wp(d,e){var w=this.b
return new B.X(w,new C.bT2(d,e),B.U(w).k("X<1>")).gJ(0)},
rD(d){var w,v
if(d.x)return!1
w=d.b
if(D.AW.am(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bit(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qU().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aKM(d)||i.rD(d))return null
w=i.Wp(d,0)
v=i.Wp(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.U(u).k("X<1>")
s=B.B(new B.X(u,i.gd_2(),t),t.k("M.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.i.fJ(r)?""+A.i.S(r):B.v(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.i.a5(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.AW.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.Ne("battery"),o=J.aQ(t.a),t=new B.eR(o,t.b);t.C();){n=o.gP(o)
if(n.e===1.5&&n.as<=0.02&&i.Wp(n,0)+i.Wp(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.Ne("switch"),o=J.aQ(t.a),t=new B.eR(o,t.b);t.C();)if(!o.gP(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qU().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.AE(k))return"The "+$.qU().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.i.a5(k.cx,2)+" amps, but it can only give about "+A.i.a5(i.AE(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.aR(u,new C.bSR(i,d))
h=q.b
h=h===A.i.fJ(h)?""+A.i.S(h):B.v(h)
u=A.i.a5(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.i.a5(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.i.a5(Math.abs(d.dy),1)+" V). Try a bigger battery."},
Ne(d){var w=this.a
return new B.X(w,new C.bSU(d),B.U(w).k("X<1>"))},
aKn(d){return this.Ne(d).aR(0,new C.bST(0.35))},
qm(d,e){return A.d.aR(this.a,new C.bSS(e))}}
C.alg.prototype={
a4(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.T()
w=B.L()
w.r=F.nR.gp(0)
c0.aE(new B.a5(0,0,b8,b9),w)
w=C.il9(c1)
v=$.hWz()
if(A.o.F(w.length,2)!==0)B.bi(B.dM('"points" must have an even number of values.',b5))
u=c0.b
if(u!=null)u.oo(v)
t=v.nb()
v=c0.c
v.drawPoints($.hXt()[0],w,t)
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
b4.cO7(c0,new B.r(n*b6+m*(42+l),o*b7),new B.r(j*b6+i*(42+h),k.d*b7),p,p===r)}u=b4.d
if(u!=null&&b4.e!=null){g=C.i0C(u.a,u.b,c1)
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
j.r=F.NP.j(A.i.D(f.Q*0.45,0,0.6)).gp(0)
j.y=A.Dr
c0.O(new B.r(m,l),46+14*k,j)}e=o.h(0,f.a)
if(e==null)e=1
J.bs(v.save())
v.translate(m,l)
k=A.i.D(A.n1.aA(0,A.i.D(e,0,1)),0.01,1.4)
v.scale(k,k)
b4.cpY(c0,f,f===r)
v.restore()
k=f.b
if((k==="battery"||k==="solar"||k==="crank"||k==="turbine")&&!f.x&&f.cx>w.AE(f)){j=m+0
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
a6=new B.bA()
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
h=new B.bA()
a0.push(h)
a0=d.f
if(a0!=null)h.aj(a0)
d.ac()
h=new B.ar(A.U,A.R,A.X,A.Y,A.W)
h.b=A.ad
h.c=1.6
h.r=A.c.gp(0)
c0.af(d,h)
b4.lG(c0,"!",new B.r(j+-3,i+-8),A.c,14)}if(!f.x)j=(D.aVB.q(0,k)||D.AW.am(0,k)||k==="buck"||k==="regulator")&&!w.rD(f)&&w.Wp(f,0)+w.Wp(f,1)>0
else j=!1
if(j){m+=0
l+=-40
$.T()
j=new B.ar(A.U,A.R,A.X,A.Y,A.W)
j.r=A.as.gp(0)
c0.O(new B.r(m,l),10,j)
b4.lG(c0,"!",new B.r(m+-3,l+-8),A.v,14)}for(a8=0;a8<2;++a8){m=f.c
l=a8===0
j=l?-1:1
i=D.mN.am(0,k)?(f.ch-1)*38:0
i=m*b6+j*(42+i)
j=f.d*b7
a9=new B.r(i,j)
$.T()
m=new B.ar(A.U,A.R,A.X,A.Y,A.W)
m.r=F.nR.gp(0)
c0.O(a9,7,m)
m=new B.ar(A.U,A.R,A.X,A.Y,A.W)
m.b=A.ad
m.c=2.4
m.r=(l&&w.bks(f)?A.c1:A.ab).gp(0)
c0.O(a9,6,m)
if(l&&w.bks(f))b4.lG(c0,"+",new B.r(i+-4,j+-22),A.c1,13)}}for(v=w.f,s=v.length,q=0;q<v.length;v.length===s||(0,B.I)(v),++q){b0=v[q]
r=b0.a*b6+b0.c
o=b0.b*b7+b0.d
b1=new B.r(r,o)
b2=A.i.D(b0.r/0.8,0,1)
n=B.ap(M.OA,F.a0N,b2)
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
l.y=A.PJ
c0.O(b1,4.5*b2+1,l)}if(A.d.aR(u,new C.bN4())){b3=A.d.cD(u,0,new C.bN5())
$.T()
b7=B.L()
b7.r=D.bky.j(0.05+0.09*b3*(0.5+0.5*Math.sin(w.d*22))).gp(0)
c0.aE(new B.a5(0,0,b8,b9),b7)
b7="short|"+B.v(b6)
a9=$.aRd.h(0,b7)
if(a9==null){a9=B.h0(b5,A.cL,b5,b5,b5,D.fGq,A.a7,A.cd,b5,A.e4,A.ce)
a9.nD(b6-24)
$.aRd.n(0,b7,a9)}a9.a4(c0,new B.r(12,10))}},
lG(d,e,f,g,h){var w,v=null,u=e+"|"+g.m()+"|"+B.v(h)
if($.aRd.a>300)$.aRd.a6(0)
w=$.aRd.h(0,u)
if(w==null){w=B.h0(v,A.cL,v,v,v,B.cW(v,v,v,v,v,v,v,v,v,B.l(v,v,g,v,v,v,v,v,v,v,v,h,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),e),A.a7,A.cd,v,A.e4,A.ce)
w.eL()
$.aRd.n(0,u,w)}w.a4(d,f)},
cO7(d,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.aI($.T().r,A.ak,null,null,B.a([],x.v))
e.E(new B.aZ(a0.a,a0.b))
w=C.hTr(a0,a1,a2)
e.E(new B.ck(w.a,w.b,a1.a,a1.b))
v=a2.a
u=Math.abs(v.fr)
t=a2.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ap(A.aQ,F.NP,A.i.D(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ap(A.aH,A.aQ,A.i.D(r*1.2,0,1))
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
if(q){n=new B.an2(new B.v8(B.zR(e),!1,B.a([],x.l))).gG(0)
m=40+A.i.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=this.b
k=0
for(;;){v.jR()
j=t[u].b
j===$&&B.d()
if(!(k<j.a.length()/22))break
j=s.d
v.jR()
i=t[u].b
i===$&&B.d()
i=A.i.F(k*22+j*m*l,i.a.length())
v.jR()
j=t[u].b
j===$&&B.d()
j=j.a.length()
v.jR()
h=t[u].b
h===$&&B.d()
g=A.i.F(i+j,h.a.length())
v.jR()
f=t[u].WE(g)
j=new B.ar(A.U,A.R,A.X,A.Y,A.W)
j.r=A.c.gp(0)
d.O(f.a,2.6,j);++k}}},
a_L(d,e,f,g){var w,v,u,t
$.T()
w=B.L()
v=g?A.aU:A.a5
u=g?A.b1:A.a9
t=B.ap(e,A.v,0.3)
t.toString
w.san(new B.a6(v,u,A.w,B.a([e,f,e,t],x.O),A.Jr,null).az(0,d))
return w},
b1_(d,e,f){return this.a_L(d,e,f,!0)},
cai(d,e){return this.a_L(d,A.bl,A.hX,e)},
aki(d,e){var w,v,u
$.T()
w=B.L()
w.san(D.eOz.az(0,B.bY(e,4.2)))
d.O(e,4.2,w)
w=e.a7(0,D.eDR)
v=e.a7(0,D.eE_)
u=B.L()
u.r=A.cU.gp(0)
u.c=1.2
d.ah(w,v,u)},
cpY(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=4294626325,b5=4286331629,b6=4287322667,b7=4293870660,b8=$.T(),b9=B.L()
b9.san(D.cbb.az(0,D.frr))
b9.c=3.4
b9.d=A.bG
w=B.L()
w.r=A.v.j(0.45).gp(0)
w.y=O.oX
c0.c1(D.frg,w)
if(c2){w=B.bx(D.frp,A.k2)
v=B.L()
v.r=A.c.j(0.14).gp(0)
c0.aq(w,v)}u=C.hxz(c1)
c0.ah(new B.r(-u,0),D.eFm,b9)
c0.ah(D.eCw,new B.r(u,0),b9)
t=c1.x
w=c1.b
s=D.mN.am(0,w)&&c1.ch!==1
if(s){J.bs(c0.c.save())
c0.bV(0,c1.ch)}switch(w){case"battery":b2.bIT(c0,c1)
break
case"solar":r=B.bx(D.fri,A.jL)
c0.aq(r,b2.a_L(new B.a5(r.a,r.b,r.c,r.d),A.d0,A.bP,!1))
b8=B.L()
w=B.ap(D.boC,A.di,0.25+0.55*c1.f)
w.toString
v=B.ap(D.byr,A.m0,0.3+0.4*c1.f)
v.toString
b8.san(new B.a6(A.aw,A.aD,A.w,B.a([w,v],x.O),b3,b3).az(0,D.abs))
c0.aE(D.abs,b8)
q=B.L()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(p=1;p<6;++p){b8=-34+p*68/6
c0.ah(new B.r(b8,-18),new B.r(b8,18),q)}for(p=1;p<4;++p){b8=-18+p*9
c0.ah(new B.r(-34,b8),new B.r(34,b8),q)}for(p=0;p<6;++p){b8=-34+(p+0.5)*68/6
$.T()
w=new B.ar(A.U,A.R,A.X,A.Y,A.W)
w.r=A.cE.j(0.5).gp(0)
w.c=0.6
c0.ah(new B.r(b8,-18),new B.r(b8,18),w)}b8=new B.aI($.T().r,A.ak,b3,b3,B.a([],x.v))
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
b8.r=A.eI.j(0.9).gp(0)
c0.O(D.eCA,4+4*w,b8)
break
case"crank":o=B.bx(D.fr2,A.h4)
c0.aq(o,b2.b1_(new B.a5(o.a,o.b,o.c,o.d),A.bz,A.bQ))
b8=B.L()
b8.san(D.aTI.az(0,B.bY(A.J,12)))
c0.O(A.J,12,b8)
n=new B.r(Math.cos(c1.y)*22,Math.sin(c1.y)*22)
b8=B.L()
b8.r=A.cE.gp(0)
b8.c=5
b8.d=A.bG
c0.ah(A.J,n,b8)
b8=B.L()
b8.san(D.eOW.az(0,B.bY(n,7)))
c0.O(n,7,b8)
b2.aki(c0,D.eFf)
b2.aki(c0,D.eCk)
break
case"turbine":b8=b8.r
w=x.v
v=new B.aI(b8,A.ak,b3,b3,B.a([],w))
v.E(new B.aZ(-3,24))
v.E(new B.aq(3,24))
v.E(new B.aq(1.5,0))
v.E(new B.aq(-1.5,0))
v.E(new B.bA())
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
b8.san(D.eOC.az(0,B.bY(A.J,4.5)))
c0.O(A.J,4.5,b8)
break
case"switch":o=B.bx(D.fra,A.pl)
b8=B.L()
b8.san(D.avA.az(0,new B.a5(o.a,o.b,o.c,o.d)))
c0.aq(o,b8)
b2.aki(c0,D.Vw)
b2.aki(c0,D.aOt)
h=c1.w?D.aOt:H.aOj
b8=B.L()
b8.r=A.ax.gp(0)
b8.c=6
b8.d=A.bG
c0.ah(D.Vw,h,b8)
b8=B.L()
b8.r=(c1.w?A.bf:A.bP).gp(0)
b8.c=4
b8.d=A.bG
c0.ah(D.Vw,h,b8)
b8=B.kY(D.Vw,h,0.85)
b8.toString
w=B.L()
w.r=A.aC.gp(0)
c0.O(b8,5,w)
break
case"fuse":g=B.bx(D.aUt,D.aTN)
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
b8.r=B.ap(A.bP,A.cW,c1.fx).gp(0)
c0.ah(D.aON,D.aOr,b8)}else{b8=B.L()
b8.c=1.6
b8.r=A.bX.gp(0)
c0.ah(D.aON,D.eFK,b8)
b8=B.L()
b8.c=1.6
b8.r=A.bX.gp(0)
c0.ah(D.eDn,D.aOr,b8)
b8=B.L()
b8.r=A.dZ.gp(0)
c0.O(A.J,6,b8)}for(f=0;f<2;++f){e=B.bZ(new B.r(M.hr[f]*22,0),20,9)
c0.aq(B.bx(e,A.hs),b2.a_L(e,A.de,A.nL,!0))}break
case"pot":b8=B.L()
b8.san(D.eON.az(0,B.bY(A.J,21)))
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
b8.san(D.eOA.az(0,B.bY(A.J,13)))
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
case"resistor":a1=B.bx(D.aUt,D.aTN)
b8=B.L()
b8.san(D.ceJ.az(0,new B.a5(a1.a,a1.b,a1.c,a1.d)))
c0.aq(a1,b8)
b8=x.O
a2=B.J([47,B.a([B.b2(b4),B.b2(b5),A.v],b8),100,B.a([B.b2(b6),A.v,B.b2(b6)],b8),220,B.a([B.b2(b7),B.b2(b7),B.b2(b6)],b8),470,B.a([B.b2(b4),B.b2(b5),B.b2(b6)],b8),1000,B.a([B.b2(b6),A.v,B.b2(b7)],b8)],x.i,x.bF)
a3=a2.h(0,c1.r)
if(a3==null){b8=a2.h(0,100)
b8.toString
a3=b8}for(p=0;p<3;++p){b8=-14+p*9
w=new B.ar(A.U,A.R,A.X,A.Y,A.W)
w.r=a3[p].gp(0)
c0.aE(new B.a5(b8,-9,b8+4.5,9),w)}b8=B.L()
b8.r=A.aQ.gp(0)
c0.aE(D.frD,b8)
b8=c1.r
b2.lG(c0,b8>=1000?"1k\u03a9":""+A.i.S(b8)+"\u03a9",D.eEL,A.ab,10)
break
case"bulb":w=c1.fx
if(w>0){v=B.L()
v.r=A.eI.j(0.55*w).gp(0)
v.y=A.Dr
c0.O(H.wa,34,v)}o=B.bZ(D.eBf,12,18)
c0.aq(B.bx(o,A.hs),b2.a_L(o,A.bl,A.dU,!0))
for(p=0;p<3;++p){w=13+p*3.5
v=new B.ar(A.U,A.R,A.X,A.Y,A.W)
v.r=A.dJ.gp(0)
v.c=1
c0.ah(new B.r(-9,w),new B.r(9,w),v)}w=B.L()
if(t)v=A.GK
else{v=B.ap(A.dU,A.i_,c1.fx)
m=c1.fx
v=v.j(0.25+0.7*m)}if(t)m=A.H5
else{m=B.ap(A.d0,A.eI,c1.fx)
m.toString}w.san(new B.bU(A.n_,0.5,A.w,b3,0,B.a([v,m.j(0.18+0.5*c1.fx)],x.O),b3,b3).az(0,B.bY(A.ui,17)))
c0.O(A.ui,17,w)
w=B.L()
w.b=A.ad
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c0.O(A.ui,17,w)
b8=b8.r
w=x.v
m=new B.aI(b8,A.ak,b3,b3,B.a([],w))
m.E(new B.aZ(-9,-12))
m.E(new B.ck(-12,-4,-9,0))
v=B.L()
v.b=A.ad
v.c=2
v.r=A.c.j(0.45).gp(0)
c0.af(m,v)
v=B.L()
v.r=A.cG.gp(0)
v.c=1.4
c0.ah(D.eFE,D.eFG,v)
v=B.L()
v.r=A.cG.gp(0)
v.c=1.4
c0.ah(D.eDg,D.eDj,v)
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
if(t)w=A.b9
else{w=B.ap(A.d0,D.bpM,c1.fx)
w.toString}b8.r=w.gp(0)
c0.af(a4,b8)
break
case"led":w=c1.fx
if(w>0){v=B.L()
v.r=A.aC.j(0.6*w).gp(0)
v.y=D.bMK
c0.O(A.ui,30,v)}w=B.L()
w.r=A.dU.gp(0)
w.c=2.4
c0.ah(D.eFM,D.eFL,w)
w=B.L()
w.r=A.dU.gp(0)
w.c=2.4
c0.ah(D.eDp,D.eDo,w)
b8=b8.r
w=x.v
a6=new B.aI(b8,A.ak,b3,b3,B.a([],w))
a6.E(new B.aZ(-12,8))
a6.E(new B.aq(-12,-6))
a6.E(new B.ck(0,-26,12,-6))
a6.E(new B.aq(12,8))
a6.E(new B.bA())
v=B.L()
if(t)m=A.jB
else{m=B.ap(A.eA,D.brz,c1.fx)
m.toString}if(t)k=A.l8
else{k=B.ap(A.kK,A.aC,c1.fx)
k.toString}v.san(new B.a6(A.aw,A.aD,A.w,B.a([m,k],x.O),b3,b3).az(0,D.fqv))
c0.af(a6,v)
v=B.L()
v.b=A.ad
v.c=1.2
v.r=A.jW.gp(0)
c0.af(a6,v)
v=B.L()
v.r=A.eu.gp(0)
c0.aE(D.fqB,v)
w=new B.aI(b8,A.ak,b3,b3,B.a([],w))
w.E(new B.aZ(-7,-4))
w.E(new B.ck(-6,-12,0,-15))
b8=B.L()
b8.b=A.ad
b8.c=2
b8.r=A.c.j(0.5).gp(0)
c0.af(w,b8)
break
case"motor":a7=new B.a5(-28,-14,20,14)
c0.aq(B.bx(a7,A.iD),b2.b1_(a7,A.an,A.bn))
b8=B.L()
b8.r=A.cx.gp(0)
c0.aE(D.fq4,b8)
b8=B.L()
b8.r=A.cE.gp(0)
c0.aE(D.fq6,b8)
b8=c0.c
J.bs(b8.save())
b8.translate(31,0)
for(l=0;l<3;++l){J.bs(b8.save())
b8.rotate((c1.y+l*2.094)*180/3.141592653589793,0,0)
w=B.bZ(H.aOe,15,7)
v=new B.ar(A.U,A.R,A.X,A.Y,A.W)
v.r=A.cW.j(0.9).gp(0)
c0.c1(w,v)
b8.restore()}w=B.L()
w.r=A.ax.gp(0)
c0.O(A.J,3,w)
b8.restore()
b2.lG(c0,"M",D.eFe,A.ax,14)
break
case"buzzer":a8=B.bZ(A.J,42,42)
b8=B.L()
b8.san(D.eOR.az(0,a8))
c0.c1(a8,b8)
b8=B.L()
b8.r=A.v.gp(0)
c0.O(A.J,6,b8)
b8=B.L()
b8.b=A.ad
b8.c=1.4
b8.r=A.aT.gp(0)
c0.O(A.J,6,b8)
b2.lG(c0,"+",D.eF7,A.ab,12)
for(b8=b2.b,l=1;l<=3;++l){w=c1.fx
v=w>0?A.i.F(b8.d*14,5):0
v=B.bY(A.J,24+l*5+v)
m=new B.ar(A.U,A.R,A.X,A.Y,A.W)
m.b=A.ad
m.c=2
m.r=A.c5.j(w*(1-l*0.22)).gp(0)
c0.cQ(v,-0.7,1.4,!1,m)}break
case"heater":o=B.bx(D.fr6,A.iD)
w=B.L()
w.san(D.ccg.az(0,new B.a5(o.a,o.b,o.c,o.d)))
c0.aq(o,w)
w=B.a([],x.v)
a9=new B.aI(b8.r,A.ak,b3,b3,w)
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
w.b=A.ad
w.c=10
w.r=D.bqx.j(0.5*b8).gp(0)
w.y=A.ld
c0.af(a9,w)}$.T()
b8=B.L()
b8.b=A.ad
b8.c=3.2
b8.d=A.bG
b8.r=B.ap(A.mp,Ag.zd,c1.fx).gp(0)
c0.af(a9,b8)
break
case"capacitor":a7=new B.a5(-16,-22,16,18)
b8=B.bx(a7,A.iD)
w=B.L()
w.san(D.avn.az(0,a7))
c0.aq(b8,w)
w=B.L()
w.r=A.bP.gp(0)
c0.aE(D.fqL,w)
for(p=0;p<4;++p)b2.lG(c0,"\u2212",new B.r(-14,-18+p*9),A.ax,11)
b0=new B.a5(-16,-24,16,-17)
c0.aq(B.bx(b0,A.hs),b2.cai(b0,!1))
b8=38*c1.fx
w=18-b8
$.T()
v=B.L()
v.r=A.bf.j(0.5).gp(0)
c0.aE(new B.a5(-3,w,11,w+b8),v)
b2.lG(c0,"1F",H.wa,A.c,11)
break
case"radio":a1=B.bx(D.abs,A.h4)
b8=B.L()
b8.san(D.ceY.az(0,new B.a5(a1.a,a1.b,a1.c,a1.d)))
c0.aq(a1,b8)
b8=B.L()
b8.b=A.ad
b8.c=1.4
b8.r=A.nL.j(0.6).gp(0)
c0.aq(a1,b8)
b8=B.bx(D.fr7,A.jL)
w=B.L()
w.r=A.e5.gp(0)
c0.aq(b8,w)
for(p=0;p<6;++p){b8=-10+p*4.4
w=new B.ar(A.U,A.R,A.X,A.Y,A.W)
w.r=A.mp.gp(0)
w.c=1.4
c0.ah(new B.r(-27,b8),new B.r(-3,b8),w)}b8=B.L()
b8.r=(c1.fx>0?A.h9:A.oG).gp(0)
c0.aE(D.fqb,b8)
if(c1.fx>0){b8=8+A.i.F(b2.b.d*7,18)
w=B.L()
w.r=A.bC.gp(0)
w.c=1.6
c0.ah(new B.r(b8,-13),new B.r(b8,-3),w)}b8=B.L()
b8.san(D.aTI.az(0,B.bY(D.aaq,6)))
c0.O(D.aaq,6,b8)
b8=B.L()
b8.r=A.nL.gp(0)
c0.O(D.eCv,4,b8)
b8=B.L()
b8.r=A.dU.gp(0)
b8.c=1.8
c0.ah(D.eCq,D.aOy,b8)
if(c1.fx>0)for(b8=b2.b,l=1;l<=2;++l){w=B.bY(D.aOy,4+l*5+A.i.F(b8.d*8,5))
v=new B.ar(A.U,A.R,A.X,A.Y,A.W)
v.b=A.ad
v.c=1.4
v.r=A.oN.j(0.7).gp(0)
c0.cQ(w,-2.4,1.6,!1,v)}break
case"tv":w=B.bx(D.frh,A.iD)
v=B.L()
v.r=M.ni.gp(0)
c0.aq(w,v)
b1=B.bx(D.fre,A.hs)
if(c1.fx>0&&!c1.x){b8=c0.c
J.bs(b8.save())
b8.clipRRect(B.nf(b1),$.mT(),!0)
b8.translate(-33,-21)
K.h6R(c0,D.fy4,c1.at,b2.b.d,c1.ax,-1,b3,b3)
b8.restore()
b8=B.L()
b8.r=A.bf.gp(0)
c0.O(D.eCH,1.6,b8)}else{w=B.L()
w.r=D.wW.gp(0)
c0.aq(b1,w)
b8=new B.aI(b8.r,A.ak,b3,b3,B.a([],x.v))
b8.E(new B.aZ(-33,-21))
b8.E(new B.aq(-10,-21))
b8.E(new B.aq(-33,0))
b8.E(new B.bA())
w=B.L()
w.r=A.c.j(0.05).gp(0)
c0.af(b8,w)}b8=B.L()
b8.r=A.bz.gp(0)
c0.aE(D.fqA,b8)
break}C.iFc(c0,c1,b2.b.d,b2.gceY())
if(t)b2.lG(c0,"\u2716",D.eFO,A.aC,14)
if(s)c0.c.restore()},
aT_(d,e,f,g){var w,v,u,t,s,r,q,p,o=new C.bN3(),n=e.d,m=e.b,l=n-m,k=e.a,j=m+l*0.06,i=k+l*0.16,h=new B.a5(k,j,i,j+l*0.88)
j=l*0.08
k=B.bx(h,new B.aP(j,j))
$.T()
w=B.L()
w.san(o.$2(h,D.diy))
d.aq(k,w)
i-=0.5
w=l*0.2
k=e.c-w
v=new B.a5(i,m,k,n)
u=k-i
t=i+u*0.66
s=B.L()
s.san(o.$2(v,D.dHi))
d.aE(new B.a5(i,m,t,n),s)
s=B.L()
s.san(o.$2(v,D.dgK))
d.aE(new B.a5(t,m,k,n),s)
k-=0.5
s=m+j
n=l*0.12
r=k+n
q=new B.a5(k,s,r,s+l*0.84)
s=B.L()
s.san(o.$2(q,D.aEK))
d.aE(q,s)
r-=0.5
s=m+l*0.3
p=new B.a5(r,s,r+l*0.1,s+l*0.4)
s=l*0.05
s=B.bx(p,new B.aP(s,s))
r=B.L()
r.san(o.$2(p,D.aEK))
d.aq(s,r)
r=i+2
s=m+l*0.18
o=B.L()
o.r=A.c.j(0.18).gp(0)
d.aE(new B.a5(r,s,r+(u-4),s+j),o)
if(f){o=l*0.42
this.lG(d,"+",new B.r(t+u*0.08,m+n),A.dl,o)
if(g!=null)this.lG(d,g,new B.r(i+u*0.12,m+w),A.bP,o)}},
bLY(d,e,f){return this.aT_(d,e,!0,f)},
bLX(d,e,f){return this.aT_(d,e,f,null)},
bIT(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a6.e,a4=B.v(a3===A.i.fJ(a3)?A.i.S(a3):a3)+"V"
if(a3<=2){a2.bLY(a5,D.fr5,a4)
a2.lG(a5,"\u2212",D.eFo,A.ab,12)
a2.lG(a5,"+",D.eCl,A.aQ,12)
$.T()
w=B.L()
w.r=A.by.gp(0)
a5.aE(D.fqU,w)
w=a6.as
v=B.L()
v.r=B.ap(A.aC,A.bf,w).gp(0)
a5.aE(new B.a5(-22,15,-22+44*w,19),v)
if(a6.as<=0.02)a2.lG(a5,"FLAT",D.eEV,A.c1,9)}else if(a3<=4.5){u=a3>3?3:2
t=u*13+6
w=-t/2
v=w+t
s=new B.a5(-31,w,31,v)
r=B.bx(s,A.jL)
$.T()
q=B.L()
q.san(D.cen.az(0,s))
a5.aq(r,q)
for(r=w+3,p=0;p<u;++p){q=r+p*13
a2.bLX(a5,new B.a5(-27,q,25,q+11.5),!1)}for(q=r+(t-6),o=0;o<2;++o){n=D.dgE[o]
$.T()
m=new B.ar(A.U,A.R,A.X,A.Y,A.W)
m.r=A.dU.gp(0)
a5.aE(new B.a5(n,r,n+1.6,q),m)}a2.lG(a5,a4,new B.r(-9,v+1),A.aQ,10)
a2.lG(a5,"+",new B.r(25,w-13),A.aQ,11)}else if(a3<=9){l=new B.a5(-18,-16,18,18)
w=B.bx(l,A.hs)
v=$.T()
r=B.L()
r.san(D.ceF.az(0,l))
a5.aq(w,r)
k=new B.a5(-18,-4,18,18)
r=B.rb(k,A.hs,A.hs,A.bJ,A.bJ)
w=B.L()
w.san(D.avn.az(0,k))
a5.aq(r,w)
j=new B.a5(-18,-16,18,-11)
w=B.rb(j,A.bJ,A.bJ,A.hs,A.hs)
r=B.L()
r.san(D.cf5.az(0,j))
a5.aq(w,r)
i=B.L()
i.san(D.eP6.az(0,D.fqE))
a5.O(D.aOR,4,i)
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
h.ac()}}h.E(new B.bA())
a5.af(h,i)
$.T()
w=B.L()
w.r=A.cz.gp(0)
a5.O(D.eDw,2,w)
a2.lG(a5,"9V",D.eFR,A.c,13)
a2.lG(a5,"+",D.eER,A.aQ,11)}else{e=new B.a5(-34,-12,34,18)
w=B.bx(e,A.hs)
$.T()
v=B.L()
v.san(D.cca.az(0,e))
a5.aq(w,v)
d=new B.a5(-36,-18,36,-10)
v=B.bx(d,D.ePe)
w=B.L()
w.san(D.avD.az(0,d))
a5.aq(v,w)
for(g=0;g<6;++g){w=new B.ar(A.U,A.R,A.X,A.Y,A.W)
w.r=A.ax.gp(0)
a5.O(new B.r(-14+g*5.6,-14),1.6,w)}w=B.L()
w.r=A.bu.j(0.92).gp(0)
a5.aE(D.frf,w)
for(o=0;o<2;++o){w=D.cHm[o]
n=w.a
a0=w.b
a1=B.bZ(new B.r(n,-21),7,8)
w=B.bx(a1,A.Fo)
v=new B.ar(A.U,A.R,A.X,A.Y,A.W)
v.san(D.ccK.az(0,a1))
a5.aq(w,v)
v=B.bx(B.bZ(new B.r(n,-24),3.5,9),A.Fo)
w=new B.ar(A.U,A.R,A.X,A.Y,A.W)
w.r=a0.gp(a0)
a5.aq(v,w)}a2.lG(a5,"\u2212",D.eFp,A.ab,11)
a2.lG(a5,"+",D.eCg,A.aC,11)
a2.lG(a5,"12V",H.aOL,A.ax,11)}},
aD(d){return!0}}
C.nc.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a6(k)
A.d.a6(d.b)
w=B.S(x.N,x.Y)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.I)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.ud(o,r,q,p)
n.aty(o,r,q,p)
k.push(n)
J.iu(s[4],new C.cx8(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.I)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.anu(m,u[1],l,u[3])}}}
C.ale.prototype={
R(){var w=x.N
return new C.alf(B.c2(2000,1,1,0,0,0,0,0),A.J,A.aA,B.S(w,x.gl),B.aR(w),$,A.bH,0,B.a([],x.X),null,null)}}
C.alf.prototype={
agF(d){var w=this,v=w.ch
if(v!=null)v.a1(0)
w.l(new C.bMH(w,d))
w.ch=B.cC(A.mw,new C.bMI(w))},
t(){var w=this.ch
if(w!=null)w.a1(0)
w=this.db
if(w!=null)w.a1(0)
this.byp()},
a21(d,e){return this.cnO(d,e)},
b5q(d){return this.a21(d,!1)},
cnO(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a21=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
r=d.at
q=e?A.o2:A.zn
p=d.b
w=3
return B.b(K.htX(s,r,p,d.ax<3.2,q,$.qU().h(0,p).b),$async$a21)
case 3:o=g
t.cy=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a21,v)},
cAV(d){var w=this,v=new B.W(Date.now(),0,!1),u=w.CW.c_(0,d.a,new C.bMJ()),t=J.cJ(u)
t.I(u,v)
t.br(u,new C.bMK(v))
if(t.gJ(u)>=4){t.a6(u)
t=w.db
if(t!=null)t.a1(0)
w.a3o(d)
return}if(t.gJ(u)===3){t=w.db
if(t!=null)t.a1(0)
w.db=B.cC(A.j4,new C.bML(w,u,d))}},
a1H(d){return this.cm1(d)},
cm1(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a1H=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
w=3
return B.b(C.iGs(s,d.b,A.i.S(A.i.F(t.a.c.d*0.12,1)*100)),$async$a1H)
case 3:t.cy=!1
case 1:return B.h(u,v)}})
return B.i($async$a1H,v)},
a3o(d){return this.cyn(d)},
cyn(d){var w=0,v=B.j(x.H),u=this,t
var $async$a3o=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bV(A.L,null,new C.bMF(u,d),t,!0,!0,!0,null,!1,!1,x.H),$async$a3o)
case 2:return B.h(null,v)}})
return B.i($async$a3o,v)},
Z(){this.a3()
this.bkC()
this.mq()},
bkC(){this.a.c.e=new C.bN0(this)},
mI(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.vX(0,d)
for(w=q.a.c.a,v=w.length,u=q.cx,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=D.mN.h(0,s.b)
if((r==null?null:r.b)!==D.Bm)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.q(0,s.a)&&!q.cy){u.I(0,s.a)
q.a21(s,!0)}}else u.X(0,s.a)}if((q.ax+=d)>0.16){q.ax=0
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
case"radio":if(s.fx>0){G.dH(900+A.cV.aw(800),"",90,0,0.1,o)
if(A.cV.ai()<0.35)G.dH(300+A.cV.aw(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cV.ai()<0.4
else u=!1
if(u)G.dH(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)G.dH(330+A.o.F(110*A.i.bd(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)G.dH((A.i.bd(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
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
q.l(new C.bN1())},
bcD(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
b66(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.U(w).k("dz<1>"),w=new B.dz(w,v),w=new B.bR(w,w.gJ(0),v.k("bR<aj.E>")),u=d.a,v=v.k("aj.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.at
p=s.d
o=D.mN.am(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cO8(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
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
h=C.hTr(new B.r(k,n),new B.r(i,l),p)
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
agD(){this.a.toString
this.l(new C.bM6())},
bv2(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.dkh[v]
if(!A.d.aR(p.a.c.a,new C.bN2(u,w))){o=new B.r(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?A2.Bb:o
s=s?A2.Bb:o
q=t.amG(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.x=null
G.dH(1200,"",50,0,0.3,"tri")
p.agD()},
B(d){var w,v,u,t,s,r,q,p,o,n=this
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.TT[v].a)
u=w.length
t=u>8
s=t?A.d.dv(w,0,A.o.ao(u+1,2)):w
r=t?A.d.fB(w,A.o.ao(w.length+1,2)):A.M
q=n.a.d
if(q!=null){w=B.a3(q).k("cu<1>")
w=B.B(new B.cu(q,w),w.k("M.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.I)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b5W(s,!0))
n.a.toString
if(t)w.push(n.b5W(r,!0))
w.push(B.E(B.cg(new C.bN_(n,q)),1))
return B.w(w,A.l,null,A.e,A.h,0,A.p)},
b5W(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=$.qU()
s=t.h(0,u).d.j(0.14)
r=new B.aP(14,14)
q=new B.ax(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.aA(p,B.p(p,B.w(B.a([B.c(t.h(0,u).c,p,p,p,p,p,p,A.ye,p,p,p),B.c(t.h(0,u).b,p,1,A.a2,p,p,p,A.os,p,p,p)],n),A.l,p,A.bb,A.h,0,A.p),A.f,p,p,new B.o(s,p,new B.bE(q,q,q,q),new B.bc(r,r,r,r),p,p,A.m),p,p,p,L.oW,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bM7(this,u),p,p,p,p,p,p,!1,A.a4))}return B.p(p,B.co(m,p,p,A.ho,p,p,A.aK,!1),A.f,p,p,new B.o(L.CG,p,new B.bE(A.a1,A.a1,new B.ax(o,1,A.r,-1),A.a1),p,p,p,A.m),p,58,p,p,p,p,p,p)},
cpZ(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a2.b,a1=$.qU().h(0,a0)
a1.toString
w=a2.dy
v=a2.fr
u=new C.bMt(e,a1)
t=new C.bMs()
s=B.m(20)
r=a1.d
q=B.K(r.j(0.55),A.r,1.3)
p=B.a([new B.aa(0,A.H,r.j(0.18),A.cy,16)],x.V)
o=r.j(0.18)
n=B.m(10)
n=B.p(A.z,B.c(a1.c,d,d,d,d,d,d,A.ye,d,d,d),A.f,d,d,new B.o(o,d,d,n,d,d,A.m),d,34,d,d,d,d,d,34)
o=B.E(B.c(a1.b,d,1,A.a2,d,d,d,B.l(d,d,r,d,d,d,d,d,d,d,d,15,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d),1)
m=B.m(999)
l=B.K(A.aT,A.r,1)
k=x.p
m=B.a([B.A(B.a([n,A.aa,o,B.aA(d,B.p(d,B.c(e.f?"Less":"About",d,d,d,d,d,d,A.X3,d,d,d),A.f,d,d,new B.o(d,d,l,m,d,d,A.m),d,d,d,d,A.o9,d,d,d),A.y,!1,D.hLv,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.bMe(e),d,d,d,d,d,d,!1,A.a4),B.aH(d,d,d,d,D.c6A,d,d,d,new C.bMf(e,a2),d,d,d,d,"Remove part",A.cp),B.aH(d,d,d,d,Ar.Rl,d,d,d,new C.bMg(e),d,d,d,d,d,A.cp)],k),A.l,d,A.e,A.h,0,d,d)],k)
if(e.f)A.d.u(m,B.a([B.c(a1.e,d,d,d,d,d,d,A.LD,d,d,d),A.cQ,B.c("How it is made: "+a1.f,d,d,d,d,d,d,U.aYs,d,d,d)],k))
m.push(A.aj)
if(a2.x)m.push(D.h0c)
else m.push(new B.C(A.fb,B.A(B.a([t.$2(A.i.a5(Math.abs(a2.dy),2),"VOLTS"),A.b6,t.$2(A.i.a5(Math.abs(a2.fr)*1000,0),"MILLIAMPS"),A.b6,t.$2(A.i.a5(Math.abs(w*v),2),"WATTS")],k),A.l,d,A.e,A.h,0,d,d),d))
j=e.a.c.bit(a2)
if(j!=null){a1=(a2.x?A.aC:A.as).j(0.14)
w=B.m(10)
v=B.K((a2.x?A.aC:A.as).j(0.5),A.r,1)
m.push(new B.C(A.hz,B.p(d,B.c((a2.x?"Why it burnt out":"Why it is not working")+": "+j,d,d,d,d,d,d,D.fX1,d,d,d),A.f,d,d,new B.o(a1,d,v,w,d,d,A.m),d,d,d,d,A.cu,d,d,d),d))}if(C.hrm(a0)){a1=B.a([],k)
for(i=0;i<10;i=h){h=i+1
a1.push(new B.C(A.fb,new E.e4("CH "+h,a2.at===i,new C.bMk(e,a2,i),d,r,d),d))}a1=B.cc(B.A(a1,A.l,d,A.e,A.h,0,d,d),A.t,d,A.y,d,d,d,d,d,A.aK)
if(e.a.c.rD(a2)){w=F.TI[A.o.F(a2.at,10)]
v=e.f?" Tap the TV 3 times quickly to open the big screen.":""
v="Showing: "+w.a+"."+v
w=v}else w="The TV is off. Give it power with the + dot towards the battery +."
a1=B.a([A.aj,a1,A.at,B.c(w,d,e.f?4:1,A.a2,d,d,d,N.hI,d,d,d)],k)
if(e.a.c.rD(a2))a1.push(new E.fK(A.xs,"Open big screen",new C.bMl(e,a2),r,d))
A.d.u(m,a1)}if(D.mN.am(0,a0)&&!C.hrm(a0)){a1=B.a([A.aj],k)
if(e.f||!e.a.c.rD(a2))a1.push(B.c(e.a.c.rD(a2)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",d,d,d,d,d,d,N.hI,d,d,d))
if(e.a.c.rD(a2))a1.push(new E.fK(A.R0,"Open the "+$.qU().h(0,a0).b,new C.bMm(e,a2),r,d))
A.d.u(m,a1)}if(D.mN.am(0,a0))A.d.u(m,B.a([A.aj,new E.fK(A.DT,"Make it bigger (or tap it 4 times)",new C.bMn(e,a2),r,d)],k))
e.a.toString
a1=a0==="buck"
if(a1||a0==="regulator"){w=A.i.a5(a2.db,1)
if(e.a.c.rD(a2))v=a2.dx
else{e.a.toString
v=a0==="regulator"?5:a2.e}v=B.a([A.aj,B.c("Volts in: "+w+" V   \u2192   Volts out: "+A.i.a5(v,1)+" V",d,d,d,d,d,d,D.fQQ,d,d,d)],k)
if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dEb[g]
w=f===A.i.fJ(f)?A.i.S(f):f
a1.push(new E.e4(B.v(w)+" V out",a2.e===f,new C.bMo(e,a2,f),d,r,d))}v.push(new B.C(A.kO,B.c_(A.bI,a1,A.br,d,0,6),d))}if(a0==="regulator")v.push(D.hfm)
A.d.u(m,v)}if(e.a.c.N1(a2)&&!a2.x){a1=A.i.a5(a2.cx,2)
w=A.i.a5(e.a.c.AE(a2),2)
v=e.a.c
o=v.aqf(a2)?"   \u26a0 OVERLOADED":""
a1=B.c("Supplying "+a1+" A of the "+w+" A it can give"+o,d,d,d,d,d,d,B.l(d,d,v.aqf(a2)?A.c1:A.eH,d,d,d,d,d,d,d,d,12.5,d,d,A.C,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
w=B.m(4)
o=A.i.D(a2.cx/e.a.c.AE(a2),0,1)
v=e.a.c.aqf(a2)?A.aC:A.bf
m.push(new B.C(A.hz,B.w(B.a([a1,A.cQ,B.bv(w,B.jH(A.by,d,d,5,d,o,new B.la(v,x.c)),A.ap)],k),A.B,d,A.e,A.h,0,A.p),d))}a1=a0==="battery"
if(a1&&a2.e===1.5){w=a2.as
v=A.i.S(w*100)
if(w<=0.02)w="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else w=w>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.C(A.hz,B.c("Charge: "+v+"%"+w,d,d,d,d,d,d,D.fKd,d,d,d),d))}if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.ds6[g]
w=f===1.5?"1.5 V (rechargeable)":B.v(f)+" V"
a1.push(new E.e4(w,a2.e===f,new C.bMp(e,a2,f),d,r,d))}m.push(B.c_(A.bI,a1,A.br,d,0,6))}if(a0==="resistor"){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dh7[g]
w=f>=1000?"1 k\u03a9":""+A.o.S(f)+" \u03a9"
a1.push(new E.e4(w,a2.r===f,new C.bMq(e,a2,f),d,r,d))}m.push(B.c_(A.bI,a1,A.br,d,0,6))}if(a0==="solar")m.push(u.$3("Sunlight",a2.f,new C.bMr(a2)))
if(a0==="turbine")m.push(u.$3("Wind",a2.f,new C.bMh(a2)))
if(a0==="pot")m.push(u.$3("Knob",a2.f,new C.bMi(a2)))
if(a0==="ldr")m.push(u.$3("Light",a2.f,new C.bMj(a2)))
if(a0==="crank")m.push(D.haA)
if(a0==="switch")m.push(B.c(a2.w?"Closed: the loop is joined up.":"Open: the loop is broken.",d,d,d,d,d,d,N.hI,d,d,d))
return B.p(d,new B.cP(D.b9Z,B.cc(B.w(m,A.B,d,A.e,A.P,0,A.p),A.t,d,A.y,d,d,d,d,d,A.ah),d),A.f,d,d,new B.o(F.ZM,d,q,s,p,d,A.m),d,d,D.hKO,d,D.bGU,d,d,d)}}
C.bfh.prototype={}
C.X3.prototype={
R(){return new C.aGF(C.hxy(),new B.cB(null,x.gJ),B.aR(x.S))}}
C.aGF.prototype={
Z(){this.a3()
$.aS.cS$.push(this)
this.agE()},
agE(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fUc(),$async$agE)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.iFB(t.d,r)
if(s!=null){t.l(new C.e6i(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$agE,v)},
G1(){var w,v=this
if(!v.as)return
w=C.ivH(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bJb(w)},
jb(d){if(d!==A.fY)this.G1()},
t(){$.aS.hM(this)
this.G1()
this.a2()},
cf_(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.U(v).k("X<1>")
t=new B.X(v,new C.e6r(q),u).gJ(0)
s=new B.X(v,new C.e6s(),u).gJ(0)
r=new B.X(v,w.gd2L(),u).gJ(0)
if(t!==q.x||s!==q.y||r!==q.z)q.l(new C.e6t(q,t,s,r))}if(A.o.F(q.w,45)===0)q.G1()
if(A.o.F(q.w,10)===0){w=q.f
$.akk()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.q(0,q.f)&&$.akk()[q.f].c.$1(q.d)){w.I(0,q.f)
C.K5("bell",B.a([0,4,7,12],x.t),700,0.45)
q.l(new C.e6u())
q.G1()
w=q.c
w.toString
w=B.Ky(w)
if(w!=null)w.T(B.b0(p,p,p,p,p,A.t,p,B.c("\u2705 Challenge done: "+$.akk()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mu,p,p,p,p,p,p,p,p,p,p))}},
ajv(){var w=0,v=B.j(x.H),u=this,t
var $async$ajv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cf(null,null,!0,null,new C.e6h(u),t,null,!0,!0,x.H),$async$ajv)
case 2:return B.h(null,v)}})
return B.i($async$ajv,v)},
b34(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.m(12),t=B.K(f.j(0.45),A.r,1)
u=B.a([B.ao(w,B.p(w,B.V(d,f,w,w,w,18),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ao(w,h,w,w,w,-1,-3,w))
return B.aA(w,B.hb(new B.a4(40,38,new B.am(A.a0,w,A.ac,A.f,u,w),w),w,e,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4)},
b33(d,e,f,g){return this.b34(d,e,f,g,null)},
auf(d,e,f,g){var w=null,v=f.j(0.1),u=B.m(10),t=B.K(f.j(0.4),A.r,1)
return B.E(B.aA(w,B.p(w,B.A(B.a([B.V(d,f,w,w,w,15),A.e0,new B.d0(1,A.c9,B.c(e,w,1,A.a2,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.bb,A.h,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),1)},
ahO(){var w=0,v=B.j(x.H),u=this,t
var $async$ahO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a8(t,!1).ca(B.e7(new C.e6d(u),!1,null,x.H)),$async$ahO)
case 2:t=u.e.gbm()
if(t!=null)t.bkC()
if(u.c!=null)u.l(new C.e6e())
u.G1()
return B.h(null,v)}})
return B.i($async$ahO,v)},
bM4(){var w,v,u,t,s=null,r=this.f
$.akk()
if(r>=11)return s
w=this.r
v=w.q(0,r)
r=v?A.bk:A.aC
u=B.m(9)
t=B.K(L.CG,A.r,1.5)
return B.p(s,B.at(B.c(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.yh,s,s,s),s,s,s),A.f,s,D.b9O,new B.o(r,s,t,u,s,s,A.m),s,s,s,s,A.fd,s,s,s)},
akD(){var w=0,v=B.j(x.H),u=this,t
var $async$akD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bV(F.ng,null,new C.e6q(u),t,!0,!0,!0,A.kz,!1,!1,x.H),$async$akD)
case 2:return B.h(null,v)}})
return B.i($async$akD,v)},
cf0(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.aA(r,B.p(r,D.c3a,A.f,r,r,new B.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e6w(d),r,r,r,r,r,r,!1,A.a4),o=B.m(11)
o=B.p(r,D.bfO,A.f,r,r,new B.o(A.bt,r,B.K(A.aH.j(0.45),A.r,1),o,r,r,A.m),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.p(r,B.w(B.a([B.A(B.a([p,A.aa,o,A.aa,B.E(B.w(B.a([D.hdh,B.c(w,r,1,A.a2,r,r,r,B.l(r,r,s.y>0||s.z>0?A.f4:A.hm,r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.B,r,A.e,A.h,0,A.p),1),new C.aAz(s.gclK(),r),A.ut,s.b33(A.ro,"Construction Lab: real 3D wiring, plumbing and a house",A.cW,new C.e6x(s,d)),s.b34(A.m7,"Challenges",A.aQ,s.gcDz(),s.bM4()),s.b33(A.DP,"How to play",A.aH,new C.e6y(d,e))],v),A.l,r,A.e,A.h,0,r,r),A.aj,B.A(B.a([s.auf(A.ob,"Circuits",A.bj,s.gcwe()),A.b6,s.auf(A.p0,"Repair",A.aQ,new C.e6z(s)),A.b6,s.auf(I.xq,"Clear",A.c1,new C.e6A(s))],v),A.l,r,A.e,A.h,0,r,r)],v),A.l,r,A.e,A.P,0,A.p),A.f,r,r,new B.o(L.CG,r,new B.bE(A.a1,A.a1,new B.ax(q,1,A.r,-1),A.a1),r,r,r,A.m),r,r,r,r,D.bM4,r,r,r)},
B(d){var w=this,v=null
$.auX="tech"
return B.c6(v,A.c7,B.bo(!0,B.w(B.a([w.cf0(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.hwo(w.d,w.e,w.gceZ(),v),1)],x.p),A.l,v,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
C.aAz.prototype={
R(){return new C.bdl(null,null)}}
C.bdl.prototype={
gaAD(){var w,v=this,u=v.d
if(u===$){w=B.br(null,A.Z,null,1,null,v)
w.cT(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
t(){this.gaAD().t()
this.bzL()},
B(d){var w=null,v=this.a.c
return B.aA(w,B.hb(new B.a4(42,42,B.c9(this.gaAD(),new C.cP_(this),w),w),w,"AI Inventor: say what you want to make",w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bdk.prototype={
a4(d,e){var w,v,u,t=null,s=e.eo(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.T()
w=B.L()
w.r=A.b_.j(0.25+0.15*o).gp(0)
w.y=O.oX
d.O(s,r+2+o*2,w)
w=B.L()
w.san(D.eOM.az(0,B.bY(s,r)))
d.O(s,r,w)
v=B.L()
v.b=A.ad
v.c=2.2
v.san(new B.hf(A.z,0,6.283185307179586,A.w,D.d6I,t,new B.n0(p)).az(0,B.bY(s,r)))
d.O(s,r,v)
p=new C.cOZ(d)
p.$3(s.a7(0,A.ui),8+o*1.5,1)
q*=4
p.$3(s.a7(0,D.eDD),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a7(0,D.eFV),2.6,0.5+0.5*Math.cos(q))
u=B.h0(t,A.cL,t,t,t,D.fGw,A.a7,A.cd,t,A.e4,A.ce)
u.eL()
u.a4(d,s.a7(0,new B.r(-u.b.c/2,5)))},
aD(d){return d.b!==this.b}}
C.aAU.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.aAV.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.byo()}}
C.aNl.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bCf.prototype={}
C.h5.prototype={}
C.Kz.prototype={
a9(){return"ScreenStyle."+this.b}}
C.mn.prototype={}
C.WN.prototype={
R(){return new C.aGv(A2.Bb,null,null)}}
C.aGv.prototype={
gabG(){var w,v=this,u=v.d
if(u===$){w=B.br(null,A.oV,null,1,null,v)
w.cs(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
gacp(){var w=D.mN.h(0,this.a.c)
return w==null?D.aUM:w},
t(){if(this.f){P.Dc(Y.Lx)
P.bHC()}this.gabG().t()
this.bBD()},
gC2(){var w=this.gabG().y
w=w==null?null:A.o.ao(w.a,1000)
return(w==null?0:w)/1000},
OE(){var w,v=this,u=v.e
if(u==null)return null
w=F.iy[u].e
if(w===-2)return null
if(w===-1)return A.o.F(v.y+A.i.bd(Math.max(0,v.gC2()-v.z)/10),14)
return w},
Kl(d){this.l(new C.e2e(this,d))},
b6s(d){this.l(new C.e2f(this,d,14))},
aEE(d){var w=this.OE()
if(w==null)w=d>0?-1:0
return this.b6s(w+d)},
cIE(d,e){if(e.a<=0||e.b<=0||this.OE()==null)return
this.l(new C.e2p(this,d,e))},
aeB(){return this.c73()},
c73(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aeB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.OE()
if(q==null){w=1
break}r.a=!1
s=t.c
s.toString
w=3
return B.b(B.bV(A.L,null,new C.e2d(r,q),s,!0,!0,!0,null,!1,!1,x.H),$async$aeB)
case 3:if(t.c!=null&&r.a)t.b6s(q)
case 1:return B.h(u,v)}})
return B.i($async$aeB,v)},
cKc(){var w=this,v=!w.f
w.l(new C.e2q(w,v))
if(v){P.Dc(Y.acA)
P.hsd(w.gacp().b===D.y1)}else{P.Dc(Y.Lx)
P.bHC()}},
cf3(){var w,v=this
if(!v.f)return
B.jG()
v.l(new C.e2r(v))
w=v.c.K(x.q).f
w.MQ()
if(v.r)w.T(F.aWV)},
aRl(d){return B.cg(new C.e26(this,d))},
cpn(d){var w,v=this,u=null,t=v.gC2(),s=t-v.w,r=s<1.4?new K.b0V(v.x,s):u
if(F.iy[d].e===-1){w=Math.max(0,t-v.z)
return new C.agY(d,w,r,A.o.F(v.y+A.i.bd(w/10),14),u)}return new C.agY(d,t,r,u,u)},
b00(d){var w=null,v=A.c.j(0.92),u=d*0.42
return B.aE(!1,A.a3,!0,w,B.aM(!1,w,!0,new B.C(new B.R(u,0,u,0),B.A(B.a([B.V(A.kQ,A.ax,w,w,w,d*0.6),new B.a4(d*0.18,w,w,w),B.c("Learn more",w,w,w,w,w,w,B.l(w,w,A.ax,w,w,w,w,w,w,w,w,d*0.48,w,w,A.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,w,w),w),A.nz,!0,w,w,w,w,D.hKQ,w,w,w,w,w,w,this.gc72(),w,w,w,w,w,w,w),A.f,v,0,w,w,A.nz,w,w,A.ai)},
b35(d,e,f,g){var w=null,v=B.np(w,A.b9,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w)
return B.aH(w,w,w,w,B.V(d,A.c,w,w,w,w),w,w,g,f,w,w,w,v,e,w)},
cf2(d,e,f){return this.b35(d,e,f,null)},
cxx(){var w=this,v=null,u=new C.e2n(),t=A.v.j(0.72),s=B.m(22),r=B.K(w.gacp().d.j(0.5),A.r,1),q=u.$3(D.bWx,"AD \u2212",new C.e2j(w)),p=u.$3(A.asM,"AD +",new C.e2k(w)),o=u.$5$color$on(A.kP,"HOME",new C.e2l(w),w.gacp().d,w.e==null),n=w.e
n=n!=null&&F.iy[n].e===-1
return B.p(v,B.A(B.a([q,p,o,u.$5$color$on(A.A0,"ADS",new C.e2m(w),A.c5,n)],x.p),A.l,v,A.e,A.P,0,v,v),A.f,v,v,new B.o(t,v,r,s,v,v,A.m),v,v,D.hKW,v,A.I_,v,v,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.gacp(),l=o.f,k=!l||!o.r
l=l?B.aF(d,A.dK,x.w).w.r.b+26:8
w=o.cf2(A.cC,"Back to the board",new C.e2s(d))
v=o.f
u=v?Ao.Ix:A.xs
v=v?"Leave full screen":"Full screen"
v=o.b35(u,v,o.gbd6(),D.hLI)
u=B.m(20)
t=o.e
s=m.a
r=x.p
q=new B.C(new B.R(8,l,8,0),B.A(B.a([w,A.aa,v,A.aa,B.E(new B.bK(A.a9,n,n,B.p(n,B.c(t==null?s:s+" \xb7 "+F.iy[t].a,n,1,A.a2,n,n,n,Aq.y9,n,n,n),A.f,n,n,new B.o(A.b9,n,n,u,n,n,A.m),n,n,n,n,A.lE,n,n,n),n),1)],r),A.l,n,A.e,A.h,0,n,n),n)
p=m.b===D.y1?o.bOe(m):o.csT(m)
l=o.f
w=!l
v=l?o.gb36():n
if(l){l=B.at(p,n,n,n)
u=k?1:0
r=new B.am(A.a0,n,A.b4,A.t,B.a([l,B.ao(n,B.xM(new B.dp(!k,q,n),A.aZ,A.id,u),n,n,0,0,0,n)],r),n)
l=r}else l=B.w(B.a([q,A.aj,o.cxx(),B.E(new B.C(A.cB,B.at(p,n,n,n),n),1)],r),A.l,n,A.e,A.h,0,A.p)
return B.c6(n,A4.a0q,B.bo(w,B.aA(A.bZ,l,A.y,!1,n,v,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!1,A.a4),w,!1,A.ag,w,w),n,!1,!1,n,n)},
cf1(d){var w
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
csT(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.abB
switch(n.a){case 1:w=44
break
case 2:w=30
break
case 3:w=22
break
case 4:w=26
break
default:w=14
break}v=B.c9(p.gabG(),new C.e2i(p,w,d,m),o)
if(n===D.abC)v=new B.BT(D.bMJ,v,o)
n=p.cf1(n)
u=p.f?A.hO:Au.a1U
t=m?4:5
s=d.c
r=B.ap(s,A.c,m?0.25:0.08)
r.toString
q=B.ap(s,A.v,0.5)
q.toString
q=B.a([r,s,q],x.O)
s=B.m(w)
r=B.a([new B.aa(0,A.H,d.d.j(0.28),A.J,36)],x.V)
return new B.fO(n,B.p(o,B.p(o,v,A.f,o,o,new B.o(A.v,o,o,B.m(w-3),o,o,A.m),o,o,o,o,A7.I0,o,o,o),A.f,o,o,new B.o(o,o,o,s,r,new B.a6(A.aw,A.aD,A.w,q,o,o),A.m),o,o,o,u,new B.R(t,t,t,t),o,o,o),o)},
bbJ(d){var w=Date.now(),v=A.o.D(this.a.d+A.i.bd(this.gC2()*0.4),0,100),u=d.b===D.abB,t=u?34:20,s=u?28:18
return new B.C(new B.R(t,12,s,2),B.cg(new C.e2o(new B.W(w,0,!1),v)),null)},
ayr(d,e,f){var w,v=null,u=d.d,t=B.ap(u,A.v,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.m(e*0.26)
w=x.p
t=B.a([B.p(v,B.at(B.c(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.o(v,v,v,u,D.dyI,new B.a6(A.aw,A.aD,A.w,t,v,v),A.m),v,e,v,v,v,v,v,e)],w)
if(f)A.d.u(t,B.a([A.at,B.c(d.a,v,1,A.a2,v,v,v,D.fNe,v,v,v)],w))
return B.aA(v,B.w(t,A.l,v,A.e,A.P,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.e2b(this,d),v,v,v,v,v,v,!1,A.a4)},
c4U(d,e){return this.ayr(d,e,!0)},
c4B(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=o===D.aUN||o===D.Bo,m=d.d,l=B.ap(m,A.v,0.55)
l.toString
m=B.ap(m,A.k9,0.5)
m.toString
m=B.a([l,A.dD,m],x.O)
l=q.bbJ(d)
w=n?190:138
v=B.m(24)
u=B.K(A.aT,A.r,1)
w=B.aA(p,B.p(p,B.bv(B.m(23),B.b4(p,p,p,new C.agY(0,q.gC2(),p,p,p),A.hg),A.ap),A.f,p,p,new B.o(p,p,u,v,p,p,A.m),p,w,p,A.ie,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.e29(q),p,p,p,p,p,p,!1,A.a4)
v=n?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.iy[s]
t.push(new B.cn(A.z,p,p,new B.d6(A.dn,A.z,A.f,q.c4U(r,n?58:54),p),p))}l=B.a([l,A.aj,w,A.af,B.E(B.lf(0.92,t,v,8,12,A.xa,p,!1),1)],u)
if(o!==D.abC){o=A.c.j(0.16)
w=B.m(28)
l.push(B.p(p,B.cg(new C.e2a(q)),A.f,p,p,new B.o(o,p,p,w,p,p,A.m),p,p,p,D.bH3,H.apC,p,p,p))}return B.p(p,B.w(l,A.l,p,A.e,A.h,0,A.p),A.f,p,p,new B.o(p,p,p,p,p,new B.a6(A.aw,A.aD,A.w,m,p,p),A.m),p,p,p,p,p,p,p,p)},
bHt(d,e){var w=this,v=null,u=w.OE(),t=w.bbJ(d),s=B.E(w.aRl(e),1),r=x.p,q=B.a([B.bT(0,B.aA(v,B.p(v,B.at(B.c(F.iy[e].a,v,v,v,v,v,v,A.LG,v,v,v),v,v,v),A.f,A.v,v,v,v,v,v,v,v,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.e23(w),v,v,v,v,v,v,!1,A.a4),0,0,0)],r)
if(u!=null)u=!w.f||!w.r
else u=!1
if(u)q.push(B.ao(8,w.b00(22),v,v,v,10,8,v))
return B.p(v,B.w(B.a([t,s,new B.a4(v,38,new B.am(A.a0,v,A.ac,A.t,q,v),v)],r),A.l,v,A.e,A.h,0,A.p),A.f,A.v,v,v,v,v,v,v,v,v,v,v)},
aUo(d,e){return B.c9(this.gabG(),new C.e28(this,e,d),null)},
bOe(d){var w,v,u,t=this,s=null,r=t.a.c,q=r==="carscreen"
if(t.f)return B.qE(t.aUo(d,q))
r=r==="imac"?26:8
w=d.c
v=B.ap(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.m(q?26:14)
u=B.a([new B.aa(0,A.H,d.d.j(0.25),A.J,36)],x.V)
return new B.fO(1.5384615384615383,B.p(s,B.bv(B.m(q?20:8),t.aUo(d,q),A.ap),A.f,s,s,new B.o(s,s,s,v,u,new B.a6(A.aw,A.aD,A.w,w,s,s),A.m),s,s,s,A.apw,new B.R(8,8,8,r),s,s,s),s)}}
C.bAh.prototype={
a4(d,e){var w,v,u,t,s,r=e.a,q=e.b,p=0+r,o=0+q
$.T()
w=B.L()
v=this.c
u=B.ap(v,A.v,0.6)
u.toString
t=B.ap(v,A.k9,0.4)
t.toString
w.san(new B.a6(A.aw,A.aD,A.w,B.a([u,A.dD,t],x.O),null,null).az(0,new B.a5(0,0,p,o)))
d.aE(new B.a5(0,0,p,o),w)
for(p=this.b,o=p*0.4,p*=0.3,s=0;s<5;++s){w=Math.sin(o+s)
u=Math.sin(p+s*1.7)
t=new B.ar(A.U,A.R,A.X,A.Y,A.W)
t.r=v.j(0.1).gp(0)
t.y=D.bMO
d.O(new B.r(r*(0.15+0.2*s+0.05*w),q*(0.3+0.3*u)),q*(0.2+0.04*s),t)}},
aD(d){return!0}}
C.agY.prototype={
a4(d,e){var w=this
return K.MC(d,e,w.b,w.c,w.e,w.d)},
aD(d){return!0}}
C.aP9.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bz3.prototype={}
C.aax.prototype={
B(d){var w=null
return B.c6(B.eS(w,w,w,!0,!0,D.akq,w,1,!0,w,0,!1,w,!1,w,w,B.aH(w,w,w,w,I.auk,w,w,w,new C.cq1(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.hmk,w,w,w,1,w,!0),D.akq,B.co(B.a([D.eHn,B.cg(new C.cq2())],x.p),w,w,D.bI9,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.Ys.prototype={
R(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aIe(w,new B.au(A.ay,$.ay()),$,A.bH,0,B.a([],x.X),null,null)}}
C.aIe.prototype={
Z(){this.a3()
this.mq()},
b9z(d){var w=this.d.length
return A.o.F(A.i.bd(A.i.F(A.i.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
mI(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b9z(v.f)
if(w!==v.x){v.x=w
E.mJ("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.l(new C.f2W(v))
C.K5("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
cgZ(){if(this.d.length<2)return
this.l(new C.f2S(this))},
b3J(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.l(new C.f2R(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gcgY(),p=s.d,o=B.E(B.aA(r,B.b4(r,r,r,new C.bAt(p,s.f,r),A.hg),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.w(B.a([o,new B.a4(r,40,B.at(B.c(n,r,r,r,r,r,r,D.fVo,r,r,r),r,r,r),r)],w),A.l,r,A.e,A.h,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.aEd[A.o.F(v,8)].j(0.9)
t=new B.aP(20,20)
o.push(B.aA(r,B.p(r,B.c(p[v],r,r,r,r,r,r,D.fUA,r,r,r),A.f,r,r,new B.o(u,r,r,new B.bc(t,t,t,t),r,r,A.m),r,r,r,A.fb,A.hd,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.f2U(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a4))}p=A.c.j(0.07)
return E.lZ(A.aQ,A.fh,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.w(B.a([new E.fj(o,r,r),B.A(B.a([B.E(B.aN(r,A.M,!1,r,!0,A.t,r,B.aO(),s.e,r,r,r,r,r,2,B.bC(r,new B.b6(4,B.m(14),A.a1),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kC,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.am,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.f2V(s),r,!1,r,r,!1,r,!0,r,A.ae,r,r,r,r,r,r,r,r,r,r,r,A.du,!0,A.a7,r,A.ao,r,r,r,r),1),A.aa,new E.fK(A.ig,"Add",s.gcgW(s),A.c,r),A.b6,new E.fK(A.oa,"Spin",q,A.bf,r)],w),A.l,r,A.e,A.h,0,r,r)],w),A.l,r,A.e,A.P,0,A.p))}}
C.bAt.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=k/2,i=e.b,h=i/2+10,g=new B.r(j,h),f=Math.min(k,i)/2-24
i=f+8
k=$.T()
w=B.L()
w.r=D.bmb.gp(0)
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
o.r=D.aEd[A.o.F(r,8)].gp(0)
d.cQ(p,q,u,!0,o)
o=B.bY(g,f)
p=new B.ar(A.U,A.R,A.X,A.Y,A.W)
p.b=A.ad
p.c=2
p.r=A.c.j(0.6).gp(0)
d.cQ(o,q,u,!0,p)
J.bs(i.save())
i.translate(j,h)
i.rotate((q+s)*180/3.141592653589793,0,0)
p=w[r]
if(p.length>12)p=A.a.av(p,0,11)+"\u2026"
n=new B.j5(new B.eJ(p,l,l,A.cZ,l,l,l,l,l,l,D.fHk),A.a7,A.cd,new B.kj(1),l,l,l,l,A.ce,l,A.cL)
n.eL()
p=n.b
o=p.c
p=p.a.c
n.a4(d,new B.r(f-o-16,-p.gb4(p)/2))
i.restore()}i=B.L()
i.r=D.ak2.gp(0)
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
m.E(new B.bA())
h=B.L()
h.r=A.c.gp(0)
d.af(m,h)
h=B.L()
h.b=A.ad
h.c=2
h.r=A.b9.gp(0)
d.af(m,h)},
aD(d){return!0}}
C.Xb.prototype={
R(){return new C.boi($,A.bH,0,B.a([],x.X),null,null)}}
C.boi.prototype={
Z(){this.a3()
this.mq()},
mI(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.K5("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.Vv(900,new C.ea0())}w.l(new C.ea1())},
b3L(d){return this.l(new C.e9W(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aY(A.o.v(A.i.ao(m,60)),2,"0")
v=A.a.aY(A.o.v(A.o.F(A.i.cG(m),60)),2,"0")
m=B.b4(n,n,n,new C.bv6(l,A.c1,n),A.aWi)
u=B.c(w+":"+v,n,n,n,n,n,n,D.fM8,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.at(new B.a4(280,280,new B.am(A.z,n,A.ac,A.t,B.a([m,B.w(B.a([u,B.c(t,n,n,n,n,n,n,D.fL2,n,n,n),A.at,B.c("Sessions done: "+o.r,n,n,n,n,n,n,A.wk,n,n,n)],s),A.l,n,A.e,A.P,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.dvj[r]
u.push(new E.e4(""+q+" min",o.d===q,new C.e9Y(o,q),n,A.c1,n))}m=o.f
p=m?Ab.vE:A.fQ
m=m?"Pause":"Start"
return E.lZ(A.c1,A.fh,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.w(B.a([new E.fj(u,n,n),new E.fj(B.a([new E.fK(p,m,new C.e9Z(o),A.bf,n),new E.fK(A.mE,"Reset",new C.ea_(o),A.c,n)],s),n,n)],s),A.l,n,A.e,A.P,0,A.p))}}
C.bv6.prototype={
a4(d,e){var w,v,u,t,s=e.eo(A.J),r=e.a/2-14
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
d.cQ(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aD(d){return d.b!==this.b}}
C.Wm.prototype={
R(){return new C.bnS($,A.bH,0,B.a([],x.X),null,null)}}
C.bnS.prototype={
Z(){this.a3()
this.mq()},
mI(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.UB.h(0,p.d)
w.toString
v=A.d.eH(w,new C.dUr())
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
E.mJ("flute",D.cfS[t]+5,1400,0.35)}p.l(new C.dUs())},
gch1(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.Lo("Press Start",0.5)
w=D.UB.h(0,this.d)
w.toString
v=A.d.eH(w,new C.dUm())
u=A.i.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.Lo("Breathe in",0.5+0.5*A.dQ.aA(0,p))
case 1:return new B.Lo("Hold",1)
case 2:return new B.Lo("Breathe out",1-0.5*A.dQ.aA(0,p))
default:return new B.Lo("Hold",0.5)}}}return new B.Lo("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gch1(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.fK.j(0.12+(3-u)*0.05)
n.push(B.p(q,q,A.f,q,q,new B.o(s,q,q,q,u===0?B.a([new B.aa(0,A.H,A.fK.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(B.c(p.a,q,q,q,q,q,q,A.qz,q,q,q))
n.push(B.ao(0,B.c("Breaths: "+r.w,q,q,q,q,q,q,A.kC,q,q,q),q,q,q,q,q,q))
n=B.at(new B.a4(300,340,new B.am(A.z,q,A.ac,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aQ(D.UB.geB(D.UB));w.C();){v=w.gP(w)
o.push(new E.e4(v,r.d===v,new C.dUp(r,v),q,A.fK,q))}w=r.e
v=w?A.vI:A.fQ
w=w?"Stop":"Start"
o.push(new E.fK(v,w,new C.dUq(r),A.bf,q))
return E.lZ(A.fK,A.fh,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new E.fj(o,q,q))}}
C.aLK.prototype={}
C.X2.prototype={
R(){return new C.bo9(new B.cB(null,x.A),B.a([],x.au),A.ax,A.c)}}
C.bo9.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aH(s,s,s,s,I.p8,s,s,s,new C.e5N(t,d),s,s,s,s,"Share",s)],r),p=B.bv(B.m(18),new B.e9(B.aA(s,B.b4(s,s,s,new C.bqd(t.e,t.x,s),A.hg),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e5O(t),new C.e5P(t),s,s,s,s,s,s,s,s,s,new C.e5Q(t),s,s,s,s,!1,A.a4),t.d),A.ap),o=B.a([],r)
for(w=0;w<9;++w){v=D.d8t[w]
u=!t.w&&t.f.A(0,v)
o.push(new E.Gs(v,u,new C.e5R(t,v),!1,s))}u=t.r
return E.lZ(A.bE,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.C(A.bS,p,s),"DRAW PAD",B.w(B.a([new E.fj(o,s,s),E.jb(A.bE,""+A.i.S(u),"Brush",30,2,new C.e5S(t),u),new E.fj(B.a([new E.e4("Eraser",t.w,new C.e5T(t),A.A1,A.bE,s),new E.fK(A.q6,"Undo",new C.e5U(t),A.c,s),new E.fK(A.eq,"Clear",new C.e5V(t),A.c,s),new E.fK(A.QM,"Paper",new C.e5W(t),A.c,s)],r),s,s)],r),A.l,s,A.e,A.P,0,A.p))}}
C.bqd.prototype={
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
q.b=A.ad
n=s.c
if(n.length===1){r=A.d.gG(n)
n=new B.ar(A.U,A.R,A.X,A.Y,A.W)
n.r=p.gp(p)
d.O(r,o/2,n)}else{p=B.a([],u)
m=new B.aI(r.r,A.ak,null,null,p)
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
C.XP.prototype={
R(){var w=x.S
return new C.aHu(B.aR(w),B.aR(w))}}
C.aHu.prototype={
Z(){this.a3()
this.avM()},
avM(){var w,v,u=this,t=x.N,s=B.bt(D.dAZ,!0,t)
A.d.DW(s)
w=x.S
v=B.U(s).c
t=B.B(B.cU(s,0,B.dw(u.d,"count",w),v),t)
A.d.u(t,B.cU(s,0,B.dw(u.d,"count",w),v))
A.d.DW(t)
u.e=t
u.f.a6(0)
u.r.a6(0)
u.w=0
u.x=!1},
cgX(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
E.mJ("bell",12+A.o.F(d,9),150,0.35)
s.l(new C.exX(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gG(0)
u=w.gal(0)
w=s.e
w===$&&B.d()
t=x.H
if(w[v]===w[u])B.bM(A.nj,new C.exY(s,v,u),t)
else{s.x=!0
B.bM(Ai.D4,new C.exZ(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.d()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.c("Moves: "+r.w,q,q,q,q,q,q,A.Xa,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.ao(p,2)+" / "+o
o=x.p
p=B.w(B.a([new B.C(A.zy,B.A(B.a([u,B.c(p,q,q,q,q,q,q,B.l(q,q,w?A.aQ:A.ab,q,q,q,q,q,q,q,q,q,q,q,A.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.l,q,A.iA,A.h,0,q,q),q),B.E(B.iM(!0,q,q,A.y,new B.hY(v,8,8,1,q),new C.ey2(r),r.e.length,A.bg,q,A.ah,!1),1)],o),A.l,q,A.e,A.h,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.dag[t]
o.push(new E.e4(s.b,r.d===s.a,new C.ey3(r,s),q,A.aH,q))}o.push(new E.fK(I.asL,"New game",new C.ey4(r),A.bf,q))
return E.lZ(A.aH,A.fh,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new E.fj(o,q,q))}}
C.Y_.prototype={
R(){return new C.aHS(B.a([],x.t))}}
C.aHS.prototype={
ch0(d){A.d.a6(this.d)
this.w=!0
this.b3K()},
b3K(){this.d.push(A.cV.aw(4))
this.e=0
this.a1_()},
a1_(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a1_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.l(new C.eL4(t))
s=x.H
w=3
return B.b(B.bM(A.m3,null,s),$async$a1_)
case 3:r=t.d,q=B.bt(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aXn(n)
w=7
return B.b(B.bM(new B.bh(1000*Math.max(280,600-r.length*18)),null,s),$async$a1_)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.l(new C.eL5(t))
case 1:return B.h(u,v)}})
return B.i($async$a1_,v)},
aXn(d){this.l(new C.eL2(this,d))
E.mJ("marimba",D.cfR[d]+5,450,0.55)
B.bM(A.HE,new C.eL3(this),x.H)},
ch2(d){var w,v,u=this
if(!u.w||u.r)return
u.aXn(d)
w=u.d
v=u.e
if(w[v]!==d){G.dH(90,"",600,0,0.5,"saw")
u.l(new C.eL6(u))
return}++v
u.e=v
if(v===w.length){u.l(new C.eL7(u))
B.bM(A.hy,new C.eL8(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.c("Best: "+q.x,p,p,p,p,p,p,V.aYY,p,p,p),n=B.c(q.y,p,p,p,p,p,p,D.fVP,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aD5[v]
u=u.j(q.f===v?1:0.35)
t=new B.aP(28,28)
s=q.f===v?B.a([new B.aa(0,A.H,D.aD5[v].j(0.8),A.J,30)],w):p
r=new B.ax(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.aA(p,B.cY(p,p,p,p,A.aZ,new B.o(u,p,new B.bE(r,r,r,r),new B.bc(t,t,t,t),s,p,A.m),A.jC,p,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eL9(q,v),p,p,p,p,p,p,!1,A.a4))}o=B.at(new B.C(A.ae,B.w(B.a([o,A.aj,n,A.df,new B.fO(1,B.lf(1,l,2,12,12,p,A.e8,!1),p)],m),A.l,p,A.bb,A.h,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return E.lZ(A.bu,A.fh,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new E.fj(B.a([new E.fK(A.fQ,n,q.gch_(q),A.bf,p)],m),p,p))}}
C.Yj.prototype={
R(){return new C.bpr(new B.au(A.ay,$.ay()))}}
C.bpr.prototype={
azn(d){return B.oa(A.i.a5(d,2),B.ag("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eZh(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.cA(B.aK(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eZq()
l=B.aN(m,A.M,!1,m,!0,A.t,m,B.aO(),l,m,m,m,m,m,2,B.bC(m,m,m,m,m,m,m,m,!0,new B.b6(4,B.m(16),Ad.yH),m,m,m,m,m,m,m,m,m,m,m,new B.b6(4,B.m(16),D.b8i),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.mf,"Bill amount",!0,!0,!1,m,m,m,m,D.fT2,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.am,m,m,m,m,m,A.ei,m,m,m,1,m,m,!1,"\u2022",m,new C.eZm(n),m,m,m,!1,m,m,!1,m,!0,m,A.ae,m,m,m,m,m,m,m,m,m,m,m,A.aXW,!0,A.a7,m,A.ao,m,m,m,m)
k=A.bf.j(0.1)
s=B.m(20)
r=B.K(A.bf.j(0.35),A.r,1)
q=x.p
s=B.co(B.a([l,A.bx,B.p(m,B.w(B.a([t.$2("Tip ("+A.i.S(n.e)+"%)","$"+n.azn(w)),t.$2("Total","$"+n.azn(v)),Aa.P0,t.$3$big("Each of "+n.f+" pays","$"+n.azn(u),!0)],q),A.l,m,A.e,A.h,0,A.p),A.f,m,m,new B.o(k,m,r,s,m,m,A.m),m,m,m,m,A.bR,m,m,m)],q),m,m,A.f5,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cUG[p]
r.push(new E.e4(""+o+"%",A.i.S(n.e)===o,new C.eZn(n,o),m,A.bf,m))}l=n.f
return E.lZ(A.bf,A.fh,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.w(B.a([new E.fj(r,"TIP",m),E.jb(A.aH,""+l,"People",20,1,new C.eZo(n),l),new E.fj(B.a([new E.e4("Round up",n.r,new C.eZp(n),m,A.aQ,m)],q),m,m)],q),A.l,m,A.e,A.P,0,A.p))}}
C.XO.prototype={
R(){var w=B.a([3,5],x.t)
return new C.boV(w,A.cV,$,A.bH,0,B.a([],x.X),null,null)}}
C.boV.prototype={
Z(){this.a3()
this.mq()},
mI(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.i.bd(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t
E.Yl("snare",0,0.5)}u.l(new C.ewC())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.h9()
u.w=t
u.x=t?0:3.141592653589793
E.mJ("bell",24,400,0.5)}u.l(new C.ewD())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bhG(v,o.r>0,n))}u=B.aA(n,B.at(B.c_(A.fX,m,A.br,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ewv(o),n,n,n,n,n,n,!1,A.a4)}else if(m==="coin"){t=A.i.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.K(A.de,A.r,6)
s=B.a([new B.aa(0,A.H,A.aQ.j(0.4),A.J,30)],x.V)
u=B.aA(n,B.at(B.e0(A.z,B.p(A.z,B.c(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fSb,n,n,n),A.f,n,n,new B.o(n,n,v,n,s,D.eOQ,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eww(o),n,n,n,n,n,n,!1,A.a4)}else{m=o.as
u=B.aA(n,B.at(B.w(B.a([B.c(m===0?"?":""+m,n,n,n,n,n,n,D.fGO,n,n,n),B.c("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kC,n,n,n)],x.p),A.l,n,A.e,A.P,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ewx(o),n,n,n,n,n,n,!1,A.a4)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.dsl[r]
v.push(new E.e4(q.b,o.d===q.a,new C.ewy(o,q),q.c,A.bj,n))}v=B.a([new E.fj(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(E.jb(A.bj,""+s,"Dice",4,1,new C.ewz(o),s))}if(o.d==="num"){s=o.z
s=E.jb(A.bj,""+s,"From",100,1,new C.ewA(o),s)
p=o.Q
A.d.u(v,B.a([s,E.jb(A.bj,""+p,"To",1000,2,new C.ewB(o),p)],m))}return E.lZ(A.bj,A.fh,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.w(v,A.l,n,A.e,A.P,0,A.p))}}
C.bhG.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cV.ai()-0.5)*0.6
else w=0
v=B.m(22)
u=B.a([new B.aa(0,A.H,A.v.j(0.4),A.cy,14)],x.V)
t=B.a([],x.p)
for(s=D.dNY.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bK(s[q],p,p,B.p(p,p,A.f,p,p,A.Ze,p,18,p,p,p,p,p,18),p))
return B.eM(A.z,w,B.p(p,new B.am(A.a0,p,A.ac,A.t,t,p),A.f,p,p,new B.o(A.c,p,p,v,u,p,A.m),p,100,p,p,A.bD,p,p,100),p)}}
C.aOW.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bCb.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bBp()}}
C.aPg.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bCh.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bBL()}}
C.aPH.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bCr.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bCc()}}
C.aQ9.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bCA.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bCF()}}
var z=a.updateTypes(["P(ud)","~()","P(a6A)","az<~>()","P(Dq)","G(ud,G)","H(H,ud)","P(Dm)","P(a0s)","P(adG)","P(a5s)","P(o2)","Yk()","Wl()","aax()","XU()","Y8()","XV()","P(nc)","Ws()","ahh(Z,G)","ag5(Z,G)","~(a9<@,@>)","G(Dm,Dm)","n(es)","P(ah4)","P(a2J)","P(DB)","P(aeb)","P(ag9)","P(adU)","G(G,rs)","G(G,Dq)","n(rs)","~(rs,ai<n>,G)","rs?(Dq)","XO()","x(n,a2w)","P(acx)","~(Bj)","Yn()","~(xU,n,r,u,H)","~(n,ud)","X3()","Xy(Z)","OL(Z)","WN(Z,bz<H>,bz<H>)","Jh(Z)","Ys()","Xb()","Wm()","X2()","XP()","Y_()","Yj()","P(rs)"])
C.fUA.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+18}
C.fJ4.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gG(d.e.split(". "))+"."},
$S:z+24}
C.fQV.prototype={
$1(d){var w
if(!this.a.N1(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fQW.prototype={
$1(d){return d.x},
$S:z+0}
C.fUx.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fUy.prototype={
$1(d){var w
if(!this.a.N1(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fUz.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.epE.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.epF.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.y(this.b,this.c))},
$S:0}
C.epG.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd3(v).Q
v.toString
w.m9(v,A.ed,A.id)}},
$S:7}
C.epR.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a6(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.epS.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.epN.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.epL.prototype={
$2(d,e){var w=this.a
w.r.push(B.cC(B.du(0,0,0,d,0,0),new C.epM(w,this.b,e)))},
$S:1955}
C.epM.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.epO.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gXT().amG(0,u[1],u[2],u[3])
u[4].bP(0,new C.epJ(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
G.dH(700+w.e*120,"",80,0,0.25,"square")
v.l(new C.epK(w.a,v,w.f,w.r))},
$S:0}
C.epJ.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:191}
C.epK.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.i.bd(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.epP.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gXT().anu(t,u[1],s,u[3])
G.dH(1500,"",45,0,0.25,"tri")
v=w.b
v.l(new C.epI(w.a,v,w.e,w.f))},
$S:0}
C.epI.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.i.bd(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.epQ.prototype={
$0(){G.dH(300,"",360,-1.2,0.3,"square")
var w=this.a
w.l(new C.epH(w,this.b))},
$S:0}
C.epH.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.epV.prototype={
$0(){var w=this.a
return w.l(new C.epU(w))},
$S:0}
C.epU.prototype={
$0(){return this.a.at=!0},
$S:0}
C.epW.prototype={
$0(){var w=this.a
return w.l(new C.epT(w))},
$S:0}
C.epT.prototype={
$0(){return this.a.at=!1},
$S:0}
C.epX.prototype={
$0(){var w=this.a
w.f.sb1(0,this.b)
w.QD()},
$S:0}
C.epY.prototype={
$0(){return this.a.ZZ(this.b)},
$S:0}
C.epZ.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.QD():w.b_l()},
$S:2}
C.eq_.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.QD():w.b_l()},
$S:0}
C.eFb.prototype={
$2(d,e){return d+e},
$S:1956}
C.eFv.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.eFu(w,d))},
$S:660}
C.eFu.prototype={
$0(){var w=B.aJ(J.t(this.b,"unlocked"))
w=w==null?null:A.i.M(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.eFw.prototype={
$0(){},
$S:0}
C.eFx.prototype={
$0(){},
$S:0}
C.eFd.prototype={
$0(){return this.a.l(new C.eFc(this.b,this.c))},
$S:0}
C.eFc.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eF2.prototype={
$1(d){return this.a.cx===d},
$S:27}
C.eF3.prototype={
$1(d){return this.a.cx=d},
$S:30}
C.eF4.prototype={
$1(d){return this.a.cy===d},
$S:27}
C.eF5.prototype={
$1(d){return this.a.cy=d},
$S:30}
C.eF6.prototype={
$1(d){return this.a.db===d},
$S:27}
C.eF7.prototype={
$1(d){return this.a.db=d},
$S:30}
C.eF8.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:27}
C.eF9.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.X(0,d):w.I(0,d)},
$S:30}
C.eFa.prototype={
$0(){var w=this.a
return w.l(w.gazY())},
$S:0}
C.eF0.prototype={
$1(d){return this.a.$1(!0)},
$S:68}
C.eF1.prototype={
$1(d){return this.a.$1(!1)},
$S:114}
C.eF_.prototype={
$1(d){return this.a.$1(!1)},
$S:150}
C.eFo.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.ch=n
n=B.b4(p,p,p,new C.blB(o,p),n)
w=this.b
v=C.bER("WORLD",w.a,w.c)
u=C.bER("GRAVITY",B.v(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.i.S(t*100)
t=t<0.25?A.c1:A.bf
t=C.bER("FUEL",""+s+"%",t)
s=o.r.b
r=A.i.S(s*100)
s=s>D.Eq[o.db].d?A.c1:A.c
q=x.p
s=B.a([v,u,t,C.bER("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(C.bER("HEIGHT",""+A.i.S(A.i.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ao(p,B.A(s,A.l,p,A.iA,A.h,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bKz(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.u3[w].a+".":"You landed on every world!"
v=B.a([new E.fK(A.od,"Again",new C.eFj(o),A.c,p),new E.fK(A.p0,"Rebuild",new C.eFk(o),A.aQ,p)],q)
if(o.d+1<7)v.push(new E.fK(A.jH,"Next world",new C.eFl(o),A.bf,p))
n.push(C.hLU("Perfect landing!",w,A.bf,v))}if(o.as==="crashed")n.push(C.hLU("Crash!",o.at,A.c1,B.a([new E.fK(A.od,"Try again",new C.eFm(o),A.bf,p),new E.fK(A.p0,"Rebuild",new C.eFn(o),A.aQ,p)],q)))
return new B.am(A.a0,p,A.b4,A.t,n,p)},
$S:64}
C.eFj.prototype={
$0(){var w=this.a
return w.l(w.gazY())},
$S:0}
C.eFk.prototype={
$0(){var w=this.a
return w.l(new C.eFg(w))},
$S:0}
C.eFg.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eFl.prototype={
$0(){var w=this.a
return w.l(new C.eFf(w))},
$S:0}
C.eFf.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.eFm.prototype={
$0(){var w=this.a
return w.l(w.gazY())},
$S:0}
C.eFn.prototype={
$0(){var w=this.a
return w.l(new C.eFe(w))},
$S:0}
C.eFe.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eFp.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.l(new C.eFi(v,w))},
$S:0}
C.eFi.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.eFq.prototype={
$1(d){return this.a.y=d},
$S:9}
C.eFr.prototype={
$1(d){return this.a.Q=d},
$S:9}
C.eFs.prototype={
$1(d){return this.a.z=d},
$S:9}
C.eFt.prototype={
$0(){var w=this.a
return w.l(new C.eFh(w))},
$S:0}
C.eFh.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dUk.prototype={
$0(){var w=0,v=B.j(x.k),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hc(B.a([C.hGE(),C.hGF()],x.D),x.K),$async$$0)
case 3:r=e
q=t.a
if(q.c==null){w=1
break}s=q.as
s.toString
s.kV(0,B.cV(J.t(r,1)))
q.l(new C.dUj(q,r))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:39}
C.dUj.prototype={
$0(){return this.a.d=x.m.a(J.t(this.b,0))},
$S:0}
C.dTV.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dTW.prototype={
$0(){return this.a.c1F(B.aV(J.t(this.b,"group")))},
$S:0}
C.dTX.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dTY.prototype={
$1(d){return A.a.aY(A.o.fo(A.o.D(A.i.S(d*255),0,255),16),2,"0")},
$S:339}
C.dUl.prototype={
$0(){return E.Yl("kick",0,0.25)},
$S:0}
C.dTZ.prototype={
$0(){return this.a.cy=this.b},
$S:0}
C.dU_.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dU0.prototype={
$0(){return E.Yl("kick",0,0.5)},
$S:0}
C.dU1.prototype={
$0(){return G.dH(1300+this.a.RG.aw(900),"",40,0,0.2,"square")},
$S:0}
C.dU3.prototype={
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
u=w}if(u.cy!=null&&!A.d.aR(u.d.e,new C.dU2(u)))u.cy=null
u.id=0},
$S:0}
C.dU2.prototype={
$1(d){var w=this.a
return d.a===w.cy&&w.aBZ(d)},
$S:z+10}
C.dTS.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p4
w=u.a
v=u.c
w.R8=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p3.toLowerCase()+"."},
$S:0}
C.dTT.prototype={
$0(){var w=this.a
return w.l(w.gccD())},
$S:0}
C.dTU.prototype={
$0(){return this.a.ag3(null)},
$S:0}
C.dUa.prototype={
$0(){var w=this.a.as
return w==null?null:w.fc(0,B.J(["t","shot"],x.N,x.z))},
$S:0}
C.dUb.prototype={
$0(){return this.a.cKn(this.b.a)},
$S:0}
C.dUc.prototype={
$0(){return this.a.ag3(this.b)},
$S:0}
C.dUd.prototype={
$1(d){var w=this.a
return w.l(new C.dU9(w,d))},
$S:6}
C.dU9.prototype={
$0(){return this.a.k4=this.b},
$S:0}
C.dUe.prototype={
$0(){var w=this.a
return w.l(new C.dU8(w,this.b))},
$S:0}
C.dU8.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dUf.prototype={
$0(){var w=this.a
return w.l(new C.dU7(w))},
$S:0}
C.dU7.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.dUg.prototype={
$0(){var w=this.a
return w.l(new C.dU6(w))},
$S:0}
C.dU6.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.fc(0,B.J(["t","reset"],x.N,x.z))
w.cy=null
w.db=0.5
w.dx=0.05
w.fr=1
w.fy=D.MY},
$S:0}
C.dUh.prototype={
$0(){var w=this.a
return w.l(new C.dU5(w))},
$S:0}
C.dU5.prototype={
$0(){var w=this.a,v=!w.p2
w.p2=v
w.p4=0
w.cy=null
if(v)w.b2b()
else w.p3=null},
$S:0}
C.dUi.prototype={
$0(){var w=this.a
return w.l(new C.dU4(w))},
$S:0}
C.dU4.prototype={
$0(){var w=this.a
return w.ok=!w.ok},
$S:0}
C.c9w.prototype={
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
$S:318}
C.c9x.prototype={
$1(d){var w=new B.qK([],[]).oa(d.data,!0)
if(x.f.b(w)&&J.t(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:708}
C.fC5.prototype={
$1(d){var w=J.a1(d)
return w.h(d,0)&&w.h(d,1)},
$S:238}
C.fC6.prototype={
$1(d){var w=J.a1(d)
return w.h(d,0)||w.h(d,1)},
$S:238}
C.fC7.prototype={
$1(d){var w=J.a1(d)
return w.h(d,0)!==w.h(d,1)},
$S:238}
C.fCe.prototype={
$1(d){return!J.t(d,0)},
$S:238}
C.fCf.prototype={
$1(d){var w=J.a1(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:238}
C.fCg.prototype={
$1(d){var w=J.a1(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:238}
C.dW0.prototype={
$1(d){return this.a.awA(0)},
$S:7}
C.dVF.prototype={
$0(){var w=this.b
return this.a.cx=new B.O(w,B.iv5(),B.U(w).k("O<1,G>")).fD(0)},
$S:0}
C.dVI.prototype={
$1(d){return""+d},
$S:79}
C.dW1.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dVD.prototype={
$1(d){return this.a.awA(this.b)},
$S:7}
C.dVE.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.aAt(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mY(0,d,a1.mr(0.15,0.3))
u=a1.mY(0,d,a1.mr(0.15,0.62))
t=a1.mY(0,"and",a1.mr(0.48,0.46))
s=a1.mY(0,a0,a1.mr(0.82,0.46))
a1=t.a
w.push(new C.o2(v.a,a1,0))
w.push(new C.o2(u.a,a1,1))
w.push(new C.o2(a1,s.a,0))
break
case 1:v=a1.mY(0,d,a1.mr(0.12,0.25))
u=a1.mY(0,d,a1.mr(0.12,0.65))
r=a1.mY(0,"xor",a1.mr(0.46,0.25))
q=a1.mY(0,"and",a1.mr(0.46,0.65))
p=a1.aAs(0,a0,a1.mr(0.82,0.25),0)
o=a1.aAs(0,a0,a1.mr(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.o2(a1,n,0))
m=u.a
w.push(new C.o2(m,n,1))
l=q.a
w.push(new C.o2(a1,l,0))
w.push(new C.o2(m,l,1))
w.push(new C.o2(n,p.a,0))
w.push(new C.o2(l,o.a,0))
break
case 2:k=a1.mY(0,"clock",a1.mr(0.15,0.4))
j=a1.mY(0,"not",a1.mr(0.45,0.65))
s=a1.mY(0,a0,a1.mr(0.82,0.3))
i=a1.mY(0,"buzzer",a1.mr(0.82,0.65))
a1=k.a
w.push(new C.o2(a1,s.a,0))
n=j.a
w.push(new C.o2(a1,n,0))
w.push(new C.o2(n,i.a,0))
break
default:h=a1.mY(0,d,a1.mr(0.12,0.25))
g=a1.mY(0,d,a1.mr(0.12,0.7))
f=a1.mY(0,"nor",a1.mr(0.5,0.25))
e=a1.mY(0,"nor",a1.mr(0.5,0.7))
s=a1.mY(0,a0,a1.mr(0.86,0.25))
a1=f.a
w.push(new C.o2(g.a,a1,0))
n=e.a
w.push(new C.o2(n,a1,1))
w.push(new C.o2(h.a,n,0))
w.push(new C.o2(a1,n,1))
w.push(new C.o2(a1,s.a,0))}},
$S:0}
C.dVJ.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.aAt(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.Dm(p,"switch",new B.r(0.14*q.a,r*q.b),0))}o.mY(0,w.e,o.mr(0.86,0.5))},
$S:0}
C.dVy.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dVz.prototype={
$2(d,e){return A.i.aQ(d.c.b,e.c.b)},
$S:z+23}
C.dVA.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dVB.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dVC.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.afk(this.c)
if(v.ax)C.K5("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gG(w)
v.CW=!1
if(v.ax)G.dH(140,"",250,0,0.3,"square")}},
$S:0}
C.dVK.prototype={
$0(){},
$S:0}
C.dVL.prototype={
$0(){return A.d.cJ(this.a.e,this.b)},
$S:0}
C.dVM.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dVH.prototype={
$0(){var w=this.a,v=this.b
w.d.X(0,v)
A.d.br(w.e,new C.dVG(v))
w.cy=null},
$S:0}
C.dVG.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
C.dVx.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mY(0,this.b,new B.r(w.x.a*(0.3+v.ai()*0.4),w.x.b*(0.2+v.ai()*0.6))).a},
$S:0}
C.dVV.prototype={
$0(){var w=this.a
return w.l(new C.dVU(w))},
$S:0}
C.dVU.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dVW.prototype={
$2(d,e){var w=null,v=this.a,u=new B.av(e.b,e.d)
v.x=u
return B.aA(A.bZ,B.js(B.b4(w,w,w,new C.bfy(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dVP(v),w,w,w,new C.dVQ(v),new C.dVR(v),new C.dVS(v),w,w,w,w,w,w,w,w,w,w,new C.dVT(v),w,w,w,!1,A.a4)},
$S:37}
C.dVT.prototype={
$1(d){return this.a.ces(d.b)},
$S:55}
C.dVR.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.co3(u)
if(t!=null){v.as=t
v.at=u
return}w=v.aBu(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aI(0,u)}},
$S:51}
C.dVS.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.r(A.i.D(w.a+u.Q.a,46,u.x.a-46),A.i.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:19}
C.dVQ.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c5a(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.br(v,new C.dVN(w))
u=t.as
u.toString
v.push(new C.o2(u,w.a,w.b))
B.ka()}}t.z=t.as=null},
$S:38}
C.dVN.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
C.dVP.prototype={
$1(d){return this.a.azg(d.b)},
$S:298}
C.dVX.prototype={
$0(){return this.a.bGi(this.b.a)},
$S:0}
C.dVY.prototype={
$0(){return this.a.awA(this.b.a)},
$S:0}
C.dVZ.prototype={
$0(){var w=this.a
return w.l(new C.dVO(w))},
$S:0}
C.dVO.prototype={
$0(){var w=this.a
w.aAt(0)
w.ay=null},
$S:0}
C.dW_.prototype={
$0(){return this.a.cFU(this.b)},
$S:0}
C.cZW.prototype={
$0(){var w=this,v=null,u=B.h0(v,A.cL,v,v,v,B.cW(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a7,A.cd,v,A.e4,A.ce)
u.eL()
return u},
$S:276}
C.e1a.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e19.prototype={
$0(){return this.a.d=null},
$S:0}
C.e1c.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c78()},
$S:133}
C.e1b.prototype={
$0(){return B.a8(this.a,!1).hZ()},
$S:0}
C.fCw.prototype={
$0(){return I.aNT},
$S:z+40}
C.fCx.prototype={
$0(){return D.e3l},
$S:z+43}
C.fCy.prototype={
$0(){return D.dY0},
$S:z+13}
C.fCz.prototype={
$0(){return D.ev5},
$S:z+14}
C.fCA.prototype={
$0(){return D.ecZ},
$S:z+15}
C.fCB.prototype={
$0(){return I.aNK},
$S:z+16}
C.fCC.prototype={
$0(){return D.esS},
$S:z+17}
C.fCD.prototype={
$0(){return I.aNS},
$S:z+12}
C.fCE.prototype={
$0(){return D.e_h},
$S:z+19}
C.fhL.prototype={
$2(d,e){return new C.ahh(e,$.bJA()[e],new C.fhK(e,this.a),null)},
$S:z+20}
C.fhK.prototype={
$0(){var w=this.a,v=L.aLn.h(0,$.bJA()[w].a)
$.auX=v==null?"music":v
B.a8(this.b,!1).ca(B.e7(new C.fhI(w),!1,null,x.H))},
$S:0}
C.fhI.prototype={
$1(d){return $.bJA()[this.a].e.$0()},
$S:41}
C.fhM.prototype={
$2(d,e){return new C.ag5(e,D.aDL[e],new C.fhJ(this.a,e),null)},
$S:z+21}
C.fhJ.prototype={
$0(){return this.a.d.$1(D.aDL[this.b])},
$S:0}
C.fhr.prototype={
$0(){return this.a.as=!0},
$S:0}
C.fhq.prototype={
$0(){return this.a.as=!1},
$S:0}
C.fhg.prototype={
$0(){var w=this.a
w.ch=0
w.as=!1},
$S:0}
C.fhh.prototype={
$1(d){return this.bqJ(d)},
bqJ(d){var w=0,v=B.j(x.I),u,t=this,s,r,q
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
r.gr4().sp(0,d/t.b)
r.gK2().sp(0,0.5)
w=3
return B.b($.aS.glM(),$async$$1)
case 3:r=$.aS.bk$.x.h(0,r.f)
s=r==null?null:r.gbf()
if(!(s instanceof B.oz))throw B.Y(B.bd("closed"))
q=C
w=4
return B.b(s.ly(t.c),$async$$1)
case 4:u=q.h02(f,t.d,t.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:770}
C.fhi.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.fhf(w,d))},
$S:6}
C.fhf.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.fhj.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.fhp.prototype={
$1(d){var w=this
return new B.eb(new C.fho(w.a,w.b,w.c,w.d),null)},
$S:21}
C.fho.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=x.w,a2=B.aF(a3,a0,a1).w
a1=B.aF(a3,a0,a1).w
w=x.p
v=B.a([D.h2B,A.at,D.h9t,A.af],w)
for(u=d.d,t=d.a,s=x.G,r=d.b,q=d.c,p=0;p<3;p=o){o=p+1
n=B.c("SLAB "+o,a0,a0,a0,a0,a0,a0,D.fSv,a0,a0,a0)
m=new B.aP(12,12)
l=new B.aP(12,12)
l=B.a([new B.bu(1,A.b7,B.aN(a0,A.M,!1,a0,!0,A.t,a0,B.aO(),r[p],a0,a0,a0,a0,a0,2,new B.ef(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Title",a0,A.FM,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.bc(m,m,m,m),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.am,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ae,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jO,!0,A.a7,a0,A.ao,a0,a0,a0,a0),a0),A.aa,new B.bu(2,A.b7,B.aN(a0,A.M,!1,a0,!0,A.t,a0,B.aO(),q[p],a0,a0,a0,a0,a0,2,new B.ef(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Small line",a0,A.FM,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.bc(l,l,l,l),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.am,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ae,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jO,!0,A.a7,a0,A.ao,a0,a0,a0,a0),a0)],w)
m=B.a([],w)
for(k=0;k<30;++k){j=D.dIQ[k]
i=new B.aP(12,12)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.B(t.a.c.d,s)
t.w=h}g=A.d.gG(h).j(0.3)}else g=A.c.j(0.06)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.B(t.a.c.d,s)
t.w=h}f=A.d.gG(h)}else f=A.by
e=new B.ax(f,u[p].A(0,j)?1.8:1,A.r,-1)
m.push(B.aA(a0,B.p(a0,B.V(j,u[p].A(0,j)?A.c:A.aR,a0,a0,a0,22),A.f,a0,a0,new B.o(g,a0,new B.bE(e,e,e,e),new B.bc(i,i,i,i),a0,a0,A.m),a0,a0,a0,A.fb,a0,a0,a0,42),A.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.fhm(a4,p,u,j),a0,a0,a0,a0,a0,a0,!1,A.a4))}A.d.u(v,B.a([n,A.aj,new B.c0(A.aK,A.e,A.h,A.l,a0,A.p,a0,0,l,a0),A.N,new B.a4(a0,44,B.co(m,a0,a0,a0,a0,a0,A.aK,!1),a0),A.aB],w))}v.push(B.bH(A.BI,a0,new C.fhn(t,r,q,u,a3),a0))
return new B.C(new B.R(0,0,0,a2.f.d),B.bo(!0,new B.cP(new B.aY(0,1/0,0,a1.a.b*0.86),B.co(v,a0,a0,A.xb,a0,a0,A.ah,!0),a0),!0,!1,A.ag,!0,!0),a0)},
$S:104}
C.fhm.prototype={
$0(){var w=this
return w.a.$1(new C.fhl(w.b,w.c,w.d))},
$S:0}
C.fhl.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.fhn.prototype={
$0(){var w=this,v=w.a
v.l(new C.fhk(v,w.b,w.c,w.d))
B.a8(w.e,!1).N(null)},
$S:0}
C.fhk.prototype={
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
C.fhz.prototype={
$0(){var w=this.a
return w.l(new C.fhy(w))},
$S:0}
C.fhy.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.fhA.prototype={
$0(){return E.uT(this.b,this.a.f,"scene")},
$S:0}
C.fhB.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ap(A.d.gG(u),A.d.gal(u),0.4)
u.toString
w=this.a.gK2().x
w===$&&B.d()
return new B.bP(new B.o(v,v,v,v,v,new B.bU(D.b5K,0.9,A.w,v,0,B.a([u.j(0.06+0.03*w),A.c7],x.O),v,v),A.m),A.bm,v,v)},
$S:336}
C.fhC.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.at(new B.d6(A.dn,A.z,A.f,B.c9(new B.hB(B.a([u.gr4(),u.gK2()],x.dS)),new C.fhx(u,this.b,v),w),w),w,w,w)},
$S:225}
C.fhx.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gr4().x
r===$&&B.d()
w=r<0.9?1:1-C.bw4(r,0.9,0.98)
v=s.gK2().x
v===$&&B.d()
u=A.dQ.aA(0,v)
switch(s.gaAu().a){case 0:s=s.bFs(t.b,r,u,t.c)
break
case 1:s=s.bWH(t.b,r,u,t.c)
break
case 2:s=s.cKR(t.b,r,u,t.c)
break
case 3:s=s.bIs(t.b,r,u,t.c)
break
case 4:s=s.bLR(t.b,r,u,t.c)
break
case 5:s=s.cet(t.b,r,u,t.c)
break
default:s=null}return B.d2(s,w)},
$S:162}
C.fhD.prototype={
$2(d,e){var w=B.ack(this.b),v=this.c.d,u=B.ap(A.d.gG(v),A.d.gal(v),0.4)
u.toString
v=B.ap(A.d.gG(v),A.d.gal(v),0.4)
v.toString
v=w.cTU(u,A.by,v,3.5)
u=this.a
w=u.gr4().x
w===$&&B.d()
return B.ZM(B.lg(null,null,null,1,0,new C.fhw(u),A.i.D(w,0,1)),v)},
$S:1960}
C.fhw.prototype={
$1(d){var w=this.a
w.gr4().sp(0,d)
if(w.as)w.l(new C.fhs(w))},
$S:6}
C.fhs.prototype={
$0(){return this.a.as=!1},
$S:0}
C.fhE.prototype={
$0(){var w=this.a
w.gr4().sp(0,0)
w.a0u()},
$S:0}
C.fhF.prototype={
$1(d){var w=this.a
w.l(new C.fhv(w,d))
if(w.as)w.a0u()},
$S:6}
C.fhv.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.fhG.prototype={
$0(){var w=this.a
w.l(new C.fhu(w,this.b))
w.gr4().sp(0,0)
if(w.as)w.a0u()},
$S:0}
C.fhu.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.fhH.prototype={
$0(){var w=this.a
return w.l(new C.fht(w,this.b))},
$S:0}
C.fht.prototype={
$0(){var w=B.B(this.b,x.G)
return this.a.w=w},
$S:0}
C.fhd.prototype={
$2(d,e){return A.i.aQ(d.a,e.a)},
$S:1961}
C.fhe.prototype={
$1(d){return d.b},
$S:1962}
C.dvt.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.dvu.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.dvq.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.dvr.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dvs.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dvv.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dvw.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dvx.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dvy.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.dvz.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.dvA.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.dvB.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.dvC.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.dvD.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.eEw.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eEl.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.eEn.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.ga_(e.b),97)},
$S:z+31}
C.eEo.prototype={
$2(d,e){return d+A.o.F(A.a.ga_(e.a),31)+A.o.F(A.a.ga_(e.b),17)},
$S:z+32}
C.eEr.prototype={
$1(d){var w=D.nt.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+33}
C.eEs.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.U(q),o=x.dg,n=B.B(new B.ee(new B.cQ(new B.X(q,new C.eEt(d),p.k("X<1>")),new C.eEu(r),p.k("cQ<1,rs?>")),o),o.k("M.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aL(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.I)(n),++v){u=n[v]
if(w.length>=6)return
t=B.B(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.eEt.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eEu.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.eEp.prototype={
$1(d){return D.nt.h(0,d.b).c===D.yB},
$S:z+55}
C.eEq.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eEW.prototype={
$1(d){var w=this.a,v=d.a,u=A.i.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.vX(0,u)
w.a8G(A.o.ao(v,1000))},
$S:7}
C.eEv.prototype={
$0(){},
$S:0}
C.eEh.prototype={
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
C.eEy.prototype={
$1(d){var w=null,v=this.a.b
return B.bo(!0,B.w(B.a([A.N,B.dP(!1,w,w,w,!0,w,w,w,!0,w,w,B.V(D.nt.h(0,v).b,D.nt.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.hld,w,B.c(D.nt.h(0,v).a,w,w,w,w,w,w,A.hi,w,w,w),w,w,w),B.dP(!1,w,w,w,!0,w,w,w,!0,w,w,A1.auo,w,w,w,w,new C.eEx(d),!1,w,w,w,w,w,w,w,D.hcl,w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!0)},
$S:32}
C.eEx.prototype={
$0(){B.a8(this.a,!1).N(!0)
return null},
$S:0}
C.eEA.prototype={
$1(d){var w,v,u,t=null,s=B.aF(d,t,x.w).w,r=B.a([D.eHa],x.p)
for(w=0;w<6;++w){v=D.aE7[w]
u=B.c(v.a,t,t,t,t,t,t,A.hi,t,t,t)
r.push(B.dP(!1,t,t,t,!0,t,t,t,!0,t,t,D.c7G,t,t,t,t,new C.eEz(d,v),!1,t,t,t,t,t,B.c(v.b,t,t,t,t,t,t,A.mf,t,t,t),t,u,t,t,t))}return B.bo(!0,new B.cP(new B.aY(0,1/0,0,s.a.b*0.7),B.co(r,t,t,D.bLU,t,t,A.ah,!0),t),!0,!1,A.ag,!0,!0)},
$S:32}
C.eEz.prototype={
$0(){B.a8(this.a,!1).N(this.b)
return null},
$S:0}
C.eEk.prototype={
$1(d){var w=null
return B.ek(B.a([B.bL(!1,A.dx,w,w,!0,w,w,w,new C.eEi(d),w,w),B.bL(!1,A.FS,w,w,!0,w,w,w,new C.eEj(d),w,w)],x.p),w,w,L.ms,D.h9G,w,w,w,w,D.hcF,w)},
$S:17}
C.eEi.prototype={
$0(){B.a8(this.a,!1).N(!1)
return null},
$S:0}
C.eEj.prototype={
$0(){B.a8(this.a,!1).N(!0)
return null},
$S:0}
C.eEU.prototype={
$0(){var w=this.a
return w.l(new C.eET(w))},
$S:0}
C.eET.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eEV.prototype={
$2(d,e){var w,v,u,t=null,s=new B.av(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.nG(new C.eEK(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.bgH:t
v=B.a([B.b4(u,t,t,new C.blz(w,v,new C.eEL(r),new C.eEM(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ao(t,new B.dp(!0,B.c9(w,new C.eEN(r),t),t),t,t,10,10,6,t))
if(r.ax)v.push(r.bNA())
return B.aA(A.bZ,B.js(new B.am(A.a0,t,A.b4,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.eEO(r),t,r.gcpp(),t,new C.eEP(r),new C.eEQ(r),new C.eER(r),t,t,t,t,t,t,t,t,t,t,new C.eES(r),t,t,t,!1,A.a4)},
$S:37}
C.eEK.prototype={
$0(){return this.a.ael(this.b)},
$S:0}
C.eES.prototype={
$1(d){return this.a.cIs(d.b)},
$S:55}
C.eEQ.prototype={
$1(d){return this.a.cpq(d.b)},
$S:51}
C.eER.prototype={
$1(d){return this.a.cpr(d.b)},
$S:19}
C.eEP.prototype={
$1(d){return this.a.b5X()},
$S:38}
C.eEO.prototype={
$1(d){return this.a.af4(d.b)},
$S:298}
C.eEL.prototype={
$0(){return this.a.z},
$S:719}
C.eEM.prototype={
$0(){return this.a.Q},
$S:771}
C.eEN.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bRY()
if(p.length===0)return A.bK
w=A.v.j(0.55)
v=B.m(14)
u=B.K(A.by,A.r,1)
t=B.a([D.h72,A.cQ],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.I)(p),++r)t.push(B.c(p[r],q,2,A.a2,q,q,q,A.aYU,q,q,q))
return B.p(q,B.w(t,A.B,q,A.e,A.P,0,A.p),A.f,q,q,new B.o(w,q,u,v,q,q,A.m),q,q,q,q,A.hd,q,q,q)},
$S:67}
C.eEm.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.m(12),t=B.K(e.j(0.6),A.r,1),s=x.p
return new B.C(A.dV,B.A(B.a([B.p(w,B.V(d,e,w,w,w,21),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,38,w,w,w,w,w,38),A.bc,B.E(B.w(B.a([B.c(f,w,w,w,w,w,w,Ak.X5,w,w,w),A.bs,B.c(g,w,w,w,w,w,w,F.add,w,w,w)],s),A.B,w,A.e,A.h,0,A.p),1)],s),A.B,w,A.e,A.h,0,w,w),w)},
$S:1964}
C.eEG.prototype={
$0(){var w=this.a.c
w.toString
return B.a8(w,!1).hZ()},
$S:0}
C.eEH.prototype={
$0(){var w=this.a
return w.l(new C.eEF(w))},
$S:0}
C.eEF.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eEI.prototype={
$0(){var w=this.a
return w.l(new C.eEE(w))},
$S:0}
C.eEE.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.eEJ.prototype={
$0(){var w=this.a
return w.l(new C.eED(w))},
$S:0}
C.eED.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eEC.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.nt.gdU(D.nt),w=w.gae(w);w.C();){v=w.gP(w)
if(v.b.c===e)p.push(v.a)}w=B.c(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.I)(p),++r)u.push(s.cD7(p[r]))
return new B.C(A.a1N,B.w(B.a([new B.C(A.apj,w,q),B.A(u,A.l,q,A.e,A.h,0,q,q)],v),A.B,q,A.e,A.h,0,A.p),q)},
$S:z+37}
C.eEB.prototype={
$0(){return this.a.ceA(this.b)},
$S:0}
C.dvp.prototype={
$0(){var w=this,v=null,u=B.h0(v,A.cL,v,v,v,B.cW(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a7,A.cd,v,A.e4,A.ce)
u.eL()
return u},
$S:276}
C.bSK.prototype={
$1(d){return d.r<=0},
$S:z+38}
C.bSV.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bSQ.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bSW.prototype={
$1(d){return this.a.N1(d)&&!d.x},
$S:z+0}
C.bSX.prototype={
$2(d,e){return Math.max(d,this.a.aEo(e))},
$S:z+6}
C.bSZ.prototype={
$2(d,e){var w=this.a
return w.c_(0,d.a+"."+e,new C.bT_(w))},
$S:z+5}
C.bT_.prototype={
$0(){return this.a.a},
$S:94}
C.bSY.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:70}
C.bT0.prototype={
$2(d,e){var w=this.a
return w.c_(0,this.b.$1(this.c.$2(d,e)),new C.bT1(w))},
$S:z+5}
C.bT1.prototype={
$0(){return this.a.a},
$S:94}
C.bSM.prototype={
$2(d,e){var w=this.a
return w.c_(0,d.a+"."+e,new C.bSN(w))},
$S:z+5}
C.bSN.prototype={
$0(){return this.a.a},
$S:94}
C.bSL.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:70}
C.bSO.prototype={
$2(d,e){var w=this.a
return w.c_(0,this.b.$1(this.c.$2(d,e)),new C.bSP(w))},
$S:z+5}
C.bSP.prototype={
$0(){return this.a.a},
$S:94}
C.bSJ.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bT2.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bSR.prototype={
$1(d){return d!==this.b&&this.a.aKM(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bSU.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bST.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bSS.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bN4.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bN5.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.bN3.prototype={
$2(d,e){return new B.a6(A.aU,A.b1,A.w,e,D.dit,null).az(0,d)},
$S:1965}
C.cx8.prototype={
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
$S:191}
C.h6B.prototype={
$1(d){var w
$.T()
w=B.L()
w.r=d.gp(0)
return w},
$S:1966}
C.h6D.prototype={
$2(d,e){var w
$.T()
w=B.L()
w.b=A.ad
w.c=e
w.r=d.gp(0)
w.d=A.bG
return w},
$S:1967}
C.h6E.prototype={
$5(d,e,f,g,h){return B.bx(new B.a5(d,e,d+f,e+g),new B.aP(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1968}
C.h6C.prototype={
$3(d,e,f){var w
$.T()
w=B.L()
w.san(new B.a6(A.aU,A.b1,A.w,B.a([e,f],x.O),null,null).az(0,d))
return w},
$S:1969}
C.bMH.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.bMI.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bMG(w))},
$S:0}
C.bMG.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bMJ.prototype={
$0(){return B.a([],x.F)},
$S:1970}
C.bMK.prototype={
$1(d){return this.a.bx(d).a>15e5},
$S:378}
C.bML.prototype={
$0(){var w,v,u
J.bJK(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.rD(v))if(C.hrm(v.b))w.b5q(v)
else w.a1H(v)
else{u=w.a.c.bit(v)
w.agF(u==null?"The "+$.qU().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bMF.prototype={
$1(d){return new B.eb(new C.bMC(this.a,this.b),null)},
$S:21}
C.bMC.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p=null,o=this.b,n=new C.bMD(this.a,o,a3),m=$.qU(),l=o.b,k=m.h(0,l).d,j=A.i.S(o.ch/1.04),i=new C.bME(o,n,k),h=B.m(26),g=B.K(k.j(0.55),A.r,1.4),f=x.V,e=B.a([new B.aa(0,A.H,k.j(0.25),A.J,26)],f),d=B.p(p,p,A.f,p,p,new B.o(A.aT,p,p,B.m(3),p,p,A.m),p,4,p,p,p,p,p,42),a0=k.j(0.2),a1=B.K(k,A.r,1)
a1=B.p(p,B.at(B.c(m.h(0,l).c,p,p,p,p,p,p,A.qx,p,p,p),p,p,p),A.f,p,p,new B.o(a0,p,a1,p,p,p,A.a6),p,42,p,p,p,p,p,42)
a0=x.p
w=B.E(B.w(B.a([B.c(m.h(0,l).b,p,1,A.a2,p,p,p,A.jr,p,p,p),D.h6R],a0),A.B,p,A.e,A.h,0,A.p),1)
v=k.j(0.2)
u=B.m(14)
t=B.K(k,A.r,1)
u=B.A(B.a([a1,A.bc,w,B.p(p,B.c(""+A.i.S(o.ch*100)+"%",p,p,p,p,p,p,B.l(p,p,k,p,p,p,p,p,p,p,p,15,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(v,p,t,u,p,p,A.m),p,p,p,p,A.lE,p,p,p)],a0),A.l,p,A.e,A.h,0,p,p)
t=A.v.j(0.35)
v=B.m(18)
w=B.K(A.dz,A.r,1)
a1=30+28*o.ch
s=B.m(8)
r=B.a([k.j(0.85),A.ax],x.O)
q=B.K(A.aF,A.r,2)
f=B.a([new B.aa(0,A.H,k.j(0.5),A.J,14)],f)
v=B.p(p,B.at(B.cY(p,B.at(new B.d6(A.dE,A.z,A.f,new B.C(A.hO,B.c(m.h(0,l).c,p,p,p,p,p,p,A.mV,p,p,p),p),p),p,p,p),p,p,A.aZ,new B.o(p,p,q,s,f,new B.a6(A.aw,A.aD,A.w,r,p,p),A.m),A.eK,p,a1*0.58,p,p,p,p,p,a1),p,p,p),A.f,p,p,new B.o(t,p,w,v,p,p,A.m),p,120,p,p,p,p,p,1/0)
i=B.A(B.a([i.$2("1\xd7",1),i.$2("2\xd7",2),i.$2("3\xd7",3),i.$2("4\xd7",4),i.$2("5\xd7",5)],a0),A.l,p,A.e,A.h,0,p,p)
w=B.aH(p,p,p,p,B.V(A.asC,k,p,p,p,30),p,p,p,new C.bMy(n,o),p,p,p,p,p,p)
t=B.ack(a2).bhW(k,A.by,k.j(0.2),A.c,8)
o=B.A(B.a([w,B.E(B.ZM(B.lg(p,p,p,5.2,1,n,A.i.D(o.ch,1,5.2)),t),1),B.aH(p,p,p,p,B.V(A.a4e,k,p,p,p,30),p,p,p,new C.bMz(n,o),p,p,p,p,p,p)],a0),A.l,p,A.e,A.h,0,p,p)
return B.bo(!0,B.p(p,B.w(B.a([d,A.af,u,A.aB,v,A.af,i,A.at,o,B.A(B.a([B.E(B.c(j<=1?"Normal size":"About "+j+" times the normal size",p,p,p,p,p,p,N.hI,p,p,p),1),B.bL(!1,A6.aZY,p,p,!0,p,p,p,new C.bMA(a2),p,B.fu(p,p,k.j(0.25),p,p,p,p,p,p,p,p,A.c,p,p,p,p,p,A.tH,p,p,p,p,p,p,p,p))],a0),A.l,p,A.e,A.h,0,p,p)],a0),A.l,p,A.e,A.P,0,A.p),A.f,p,p,new B.o(p,p,g,h,e,D.cfb,A.m),p,p,p,A.zr,D.bIs,p,p,p),!0,!1,A.ag,!0,!0)},
$S:90}
C.bMD.prototype={
$1(d){var w=this.a
w.l(new C.bMw(this.b,d))
this.c.$1(new C.bMx())
w.a.toString},
$S:6}
C.bMw.prototype={
$0(){return this.a.ch=A.i.D(this.b,1,5.2)},
$S:0}
C.bMx.prototype={
$0(){},
$S:0}
C.bME.prototype={
$2(d,e){var w=this,v=null,u=Math.abs(w.a.ch-e)<0.05,t=u?w.c.j(0.28):A.c.j(0.06),s=B.m(14),r=u?w.c:A.by
r=B.K(r,A.r,u?2:1)
return B.E(B.aA(v,B.cY(v,B.at(new B.d6(A.dn,A.z,A.f,B.c(d,v,v,v,v,v,v,B.l(v,v,u?w.c:A.ab,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),v,v,v),v,v,A.aZ,new B.o(t,v,r,s,v,v,A.m),A.hn,v,v,v,A.jk,A.rd,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.bMB(w.b,e),v,v,v,v,v,v,!1,A.a4),1)},
$S:736}
C.bMB.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bMy.prototype={
$0(){return this.a.$1(this.b.ch-0.4)},
$S:0}
C.bMz.prototype={
$0(){return this.a.$1(this.b.ch+0.4)},
$S:0}
C.bMA.prototype={
$0(){B.a8(this.a,!1).N(null)
return null},
$S:0}
C.bN0.prototype={
$2(d,e){var w
if(d==="short"){G.dH(1800,"",120,0,0.55,"noise")
G.dH(200,"",160,2.2,0.4,"saw")
B.fX()
w=this.a
if(w.c!=null)w.agF("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){G.dH(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.agF("\u26a0 Overloaded! The "+$.qU().h(0,e.b).b+" can only give about "+A.i.a5(w.a.c.AE(e),2)+" amps but your gadgets are asking for "+A.i.a5(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.agF("Burnt out! "+e.ay)
G.dH(140,"",320,0,0.6,"noise")
G.dH(900,"",160,1.5,0.35,"square")}},
$S:z+42}
C.bN1.prototype={
$0(){},
$S:0}
C.bM6.prototype={
$0(){},
$S:0}
C.bN2.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bN_.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.at=n
w=o.a.c
v=o.d
u=o.y
t=o.z
s=o.x
r=this.b
q=x.p
n=B.a([B.aA(A.bZ,new B.e9(B.b4(p,p,p,new C.alg(w,v,u,t,s,r==null?A.jK:r,p),n),p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bMU(o),new C.bMV(o),new C.bMW(o),p,p,p,p,p,p,p,p,p,p,new C.bMX(o),p,p,p,!1,A.a4)],q)
if(o.a.c.a.length===0)n.push(D.bfZ)
w=o.ay
if(w!=null){v=B.m(14)
u=B.K(A.cW,A.r,1)
n.push(B.ao(p,B.aA(p,B.p(p,B.A(B.a([D.fXN,B.E(B.c(w,p,p,p,p,p,p,D.fPf,p,p,p),1)],q),A.B,p,A.e,A.h,0,p,p),A.f,p,p,new B.o(D.bm4,p,u,v,p,p,A.m),p,p,p,p,A.o5,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bMY(o),p,p,p,p,p,p,!1,A.a4),p,p,10,10,8,p))}if(o.x!=null){o=B.A(B.a([D.bO7,new E.fK(A.DH,"Cut wire",new C.bMZ(o),A.c1,p)],q),A.l,p,A.e,A.h,0,p,p)
w=B.m(18)
n.push(B.ao(8,B.p(p,o,A.f,p,p,new B.o(F.ZM,p,B.K(A.by,A.r,1),w,p,p,A.m),p,p,p,p,F.anX,p,p,p),p,p,12,12,p,p))}else{w=o.e
if(w!=null&&A.d.q(o.a.c.a,w)){w=o.e
w.toString
n.push(B.ao(8,o.cpZ(w),p,p,10,10,p,p))}}return B.js(new B.am(A.a0,p,A.b4,A.t,n,p),A.t,p)},
$S:321}
C.bMV.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.bcD(s)
if(r!=null){t.l(new C.bMS(t,r,d))
return}w=t.b66(s)
if(w!=null){t.Q=w
v=w.c
u=t.at
t.as=new B.r(v*u.a,w.d*u.b).aI(0,s)
t.l(new C.bMT(t,w))}},
$S:51}
C.bMS.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c.b},
$S:0}
C.bMT.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bMW.prototype={
$1(d){var w=this.a
if(w.y!=null)w.l(new C.bMQ(w,d))
else if(w.Q!=null)w.l(new C.bMR(w,d.b.a7(0,w.as)))},
$S:19}
C.bMQ.prototype={
$0(){return this.a.z=this.b.b},
$S:0}
C.bMR.prototype={
$0(){var w,v=this.a,u=v.Q
u.toString
w=this.b
u.c=A.i.D(w.a/v.at.a,0.14,0.86)
u=v.Q
u.toString
u.d=A.i.D(w.b/v.at.b,0.08,0.92)},
$S:0}
C.bMU.prototype={
$1(d){var w,v,u,t=this.a
if(t.y!=null&&t.z!=null){w=t.z
w.toString
v=t.bcD(w)
if(v!=null&&v.a!==t.y.a){w=t.a.c
u=t.y
if(w.anu(u.a,u.b,v.a,v.b)!=null)G.dH(1500,"",40,0,0.22,"square")}}t.Q=t.z=t.y=null
t.agD()},
$S:38}
C.bMX.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.b66(u)
if(t!=null){v.l(new C.bMN(v,t))
if(D.mN.am(0,t.b))v.cAV(t)
w=new B.W(Date.now(),0,!1)
if(v.r===t&&w.bx(v.w).a<38e4){v.l(new C.bMO(v,t))
v.r=null}else{v.r=t
v.w=w}v.a.toString
return}v.l(new C.bMP(v,v.cO8(u)))},
$S:55}
C.bMN.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.x=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
G.dH(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
G.dH(200,"",70,0,0.2,"saw")}},
$S:0}
C.bMO.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.bMP.prototype={
$0(){var w=this.a
w.x=this.b
w.e=w.d=null},
$S:0}
C.bMY.prototype={
$0(){var w=this.a
return w.l(new C.bMM(w))},
$S:0}
C.bMM.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bMZ.prototype={
$0(){var w=this.a
A.d.X(w.a.c.b,w.x)
w.x=null
G.dH(300,"",50,0,0.35,"noise")
w.agD()},
$S:0}
C.bM7.prototype={
$0(){return this.a.bv2(this.b)},
$S:0}
C.bMt.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.A(B.a([B.c(d,w,w,w,w,w,w,D.fJ8,w,w,w),B.E(B.lg(this.b.d,w,w,g,h,new C.bMv(this.a,f),A.i.D(e,h,g)),1)],x.p),A.l,w,A.e,A.h,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1971}
C.bMv.prototype={
$1(d){var w=this.a
w.l(new C.bMu(this.b,d))
w.a.toString},
$S:6}
C.bMu.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bMs.prototype={
$2(d,e){var w=null,v=A.c.j(0.06),u=B.m(10)
return B.E(B.p(w,B.w(B.a([B.c(d,w,w,w,w,w,w,A.ad3,w,w,w),B.c(e,w,w,w,w,w,w,D.fM0,w,w,w)],x.p),A.l,w,A.e,A.h,0,A.p),A.f,w,w,new B.o(v,w,w,u,w,w,A.m),w,w,w,w,A.vj,w,w,w),1)},
$S:110}
C.bMe.prototype={
$0(){var w=this.a
return w.l(new C.bMd(w))},
$S:0}
C.bMd.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.bMf.prototype={
$0(){var w=this.a
w.a.c.X(0,this.b)
w.e=w.d=null
G.dH(260,"",70,0,0.35,"noise")
w.agD()},
$S:0}
C.bMg.prototype={
$0(){var w=this.a
return w.l(new C.bMc(w))},
$S:0}
C.bMc.prototype={
$0(){return this.a.e=null},
$S:0}
C.bMk.prototype={
$0(){this.a.l(new C.bMb(this.b,this.c))
G.dH(900,"",40,0,0.3,"noise")},
$S:0}
C.bMb.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bMl.prototype={
$0(){return this.a.b5q(this.b)},
$S:0}
C.bMm.prototype={
$0(){return this.a.a1H(this.b)},
$S:0}
C.bMn.prototype={
$0(){return this.a.a3o(this.b)},
$S:0}
C.bMo.prototype={
$0(){var w=this.a
w.l(new C.bMa(this.b,this.c))
w.a.toString},
$S:0}
C.bMa.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bMp.prototype={
$0(){var w=this.a
w.l(new C.bM9(this.b,this.c))
w.a.toString},
$S:0}
C.bM9.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bMq.prototype={
$0(){var w=this.a
w.l(new C.bM8(this.b,this.c))
w.a.toString},
$S:0}
C.bM8.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bMr.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bMh.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bMi.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bMj.prototype={
$1(d){return this.a.f=d},
$S:6}
C.fCh.prototype={
$1(d){return d.aKn("bulb")},
$S:z+2}
C.fCi.prototype={
$1(d){return d.qm(0,"switch")&&d.aKn("bulb")},
$S:z+2}
C.fCj.prototype={
$1(d){return A.d.aR(d.a,new C.fC4())},
$S:z+2}
C.fC4.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.fCk.prototype={
$1(d){return d.qm(0,"resistor")&&A.d.aR(d.a,new C.fC3())},
$S:z+2}
C.fC3.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fCl.prototype={
$1(d){return!d.qm(0,"battery")&&d.aKn("bulb")},
$S:z+2}
C.fC8.prototype={
$1(d){return A.d.aR(d.a,new C.fC2())},
$S:z+2}
C.fC2.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fC9.prototype={
$1(d){return A.d.aR(d.a,new C.fC1())},
$S:z+2}
C.fC1.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fCa.prototype={
$1(d){return A.d.aR(d.a,new C.fC0())},
$S:z+2}
C.fC0.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fCb.prototype={
$1(d){var w=d.a
return A.d.aR(w,new C.fBZ())&&A.d.aR(w,new C.fC_())&&d.qm(0,"buck")},
$S:z+2}
C.fBZ.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fC_.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fCc.prototype={
$1(d){var w=d.a
return A.d.aR(w,new C.fBX())&&A.d.aR(w,new C.fBY())},
$S:z+2}
C.fBX.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fBY.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fCd.prototype={
$1(d){return A.d.aR(d.a,new C.fBW())},
$S:z+2}
C.fBW.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.e6i.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a6(0)
w.u(0,v.b)},
$S:0}
C.e6r.prototype={
$1(d){var w=this.a.d
return w.aKM(d)&&w.rD(d)},
$S:z+0}
C.e6s.prototype={
$1(d){return d.x},
$S:z+0}
C.e6t.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.e6u.prototype={
$0(){},
$S:0}
C.e6h.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.m(22),o=x.p,n=B.a([D.heH,A.at,D.fZF,A.S],o)
for(w=this.a,v=0;v<19;++v){u=D.Tt[v]
t=A.c.j(0.06)
s=new B.aP(14,14)
r=new B.ax(A.by,1,A.r,-1)
n.push(B.aA(q,B.p(q,B.w(B.a([B.c(u.a,q,q,q,q,q,q,A.iW,q,q,q),A.bs,B.c(u.b,q,3,A.a2,q,q,q,D.fQ2,q,q,q)],o),A.B,q,A.e,A.h,0,A.p),A.f,q,q,new B.o(t,q,new B.bE(r,r,r,r),new B.bc(s,s,s,s),q,q,A.m),q,q,q,A.cB,A.bg,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.e6g(w,d,u),q,q,q,q,q,q,!1,A.a4))}return B.eB(q,F.ng,new B.C(A.bR,new B.a4(340,q,B.co(n,q,q,q,q,q,A.ah,!0),q),q),q,q,q,q,q,A.db,q,new B.b9(p,A.a1),q)},
$S:46}
C.e6g.prototype={
$0(){B.a8(this.b,!1).N(null)
var w=this.a
w.l(new C.e6f(w,this.c))
G.dH(800,"",120,-0.5,0.3,"square")},
$S:0}
C.e6f.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bnC()},
$S:0}
C.e6d.prototype={
$1(d){return new C.Xy(this.a.d,null)},
$S:z+44}
C.e6e.prototype={
$0(){},
$S:0}
C.e6q.prototype={
$1(d){return new B.eb(new C.e6p(this.a),null)},
$S:21}
C.e6p.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.akk(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.q(0,k),f=g?A.bf:A.aH
k=B.aF(d,m,x.w).w
w=l.r
v=x.p
u=B.a([B.A(B.a([D.hbP,A.aX,B.c(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.C,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.l,m,A.e,A.h,0,m,m),A.N,B.bv(B.m(4),B.jH(A.by,m,m,5,m,w.a/11,new B.la(f,x.c)),A.ap),A.af],v)
if(h)u.push(D.h1Y)
else{h=f.j(0.1)
t=B.m(14)
s=B.K(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.c(r+" Now: "+i.a,m,m,m,m,m,m,Am.LP,m,m,m)
q=B.c(g?"Well done! You did it.":i.b,m,m,m,m,m,m,A_.FN,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.p(m,B.w(B.a([r,A.at,q,new B.bK(A.a9,m,m,B.bL(!1,B.c(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.C,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.e6n(l,e),m,m),m)],v),A.B,m,A.e,A.h,0,A.p),A.f,m,m,new B.o(h,m,s,t,m,m,A.m),m,m,m,m,A.bg,m,m,m))}u.push(A.S)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aP(12,12)
n=new B.ax(o===l.f?f.j(0.6):A.dz,1,A.r,-1)
if(w.q(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
s=B.c(s,m,m,m,m,m,m,A.adc,m,m,m)
r=j[o]
q=w.q(0,o)?A.aF:A.c
u.push(B.aA(m,B.p(m,new B.c0(A.aK,A.e,A.h,A.l,m,A.p,m,0,B.a([s,A.ar,new B.bu(1,A.b7,B.c(r.a,m,m,m,m,m,m,new B.F(!0,q,m,m,m,m,13,A.C,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],v),m),A.f,m,m,new B.o(h,m,new B.bE(n,n,n,n),new B.bc(t,t,t,t),m,m,A.m),m,m,m,A.eC,A.o5,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.e6o(l,o,e),m,m,m,m,m,m,!1,A.a4))}return B.bo(!0,new B.cP(new B.aY(0,1/0,0,k.a.b*0.75),B.co(u,m,m,A.xb,m,m,A.ah,!0),m),!0,!1,A.ag,!0,!0)},
$S:90}
C.e6n.prototype={
$0(){var w=this.a
w.l(new C.e6l(w))
this.b.$1(new C.e6m())
w.G1()},
$S:0}
C.e6l.prototype={
$0(){var w=this.a
$.akk()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.e6m.prototype={
$0(){},
$S:0}
C.e6o.prototype={
$0(){var w=this.a
w.l(new C.e6j(w,this.b))
this.c.$1(new C.e6k())
w.G1()},
$S:0}
C.e6j.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e6k.prototype={
$0(){},
$S:0}
C.e6w.prototype={
$0(){return B.a8(this.a,!1).hZ()},
$S:0}
C.e6x.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.iI("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a8(t.b,!1).ca(B.e7(new C.e6v(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.e6v.prototype={
$1(d){B.j6("construction")
return As.i71()},
$S:z+45}
C.e6y.prototype={
$0(){return E.hT9(this.a,"ELECTRONICS LAB",this.b,A.aH)},
$S:0}
C.e6z.prototype={
$0(){var w=this.a
return w.l(w.d.gd58())},
$S:0}
C.e6A.prototype={
$0(){var w=this.a,v=w.d
w.l(v.gtu(v))
w.G1()},
$S:0}
C.cP_.prototype={
$2(d,e){var w=null,v=this.a.gaAD().x
v===$&&B.d()
return B.b4(w,w,w,new C.bdk(v,w),A.aA)},
$S:52}
C.cOZ.prototype={
$3(d,e,f){var w=new B.aI($.T().r,A.ak,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.E(new B.aZ(v,t))
w.E(new B.ck(v,u,v+e,u))
w.E(new B.ck(v,u,v,u+e))
w.E(new B.ck(v,u,v-e,u))
w.E(new B.ck(v,u,v,t))
w.E(new B.bA())
t=B.L()
t.r=A.c.j(f).gp(0)
this.a.af(w,t)},
$S:436}
C.hbM.prototype={
$3(d,e,f){return new C.WN(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+46}
C.hbN.prototype={
$4(d,e,f,g){var w=x.a
return new B.dd(e,!1,B.iB(A.z,g,null,new B.bk(B.cM(A.cn,e,null),new B.bq(0.85,1,w),w.k("bk<bS.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
C.e2e.prototype={
$0(){var w=this.a
w.e=this.b
w.y=0
w.z=w.gC2()},
$S:0}
C.e2f.prototype={
$0(){var w,v=this.a
v.e=0
w=this.c
v.y=A.o.F(A.o.F(this.b,w)+w,w)
v.z=v.gC2()},
$S:0}
C.e2p.prototype={
$0(){var w=this.a,v=this.b,u=this.c
w.x=new B.r(v.a/u.a,v.b/u.b)
w.w=w.gC2()},
$S:0}
C.e2d.prototype={
$1(d){return new K.Jh(F.Te[this.b],new C.e2c(this.a,d),null)},
$S:z+47}
C.e2c.prototype={
$0(){this.a.a=!0
B.a8(this.b,!1).e4()},
$S:0}
C.e2q.prototype={
$0(){var w=this.a
w.f=this.b
w.r=!1},
$S:0}
C.e2r.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.e26.prototype={
$2(d,e){var w=null,v=this.a,u=v.f?v.gb36():w
return B.aA(A.bZ,B.b4(w,w,w,v.cpn(this.b),A.hg),A.y,!1,D.hL0,u,w,w,w,new C.e24(v),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e25(v,e),w,w,w,!1,A.a4)},
$S:37}
C.e25.prototype={
$1(d){var w=this.b
return this.a.cIE(d.b,new B.av(B.aU(1/0,w.a,w.b),B.aU(1/0,w.c,w.d)))},
$S:55}
C.e24.prototype={
$1(d){var w,v=d.d
if(v==null)v=0
if(Math.abs(v)>120&&this.a.OE()!=null){w=v<0?1:-1
this.a.aEE(w)}},
$S:38}
C.e2n.prototype={
$5$color$on(d,e,f,g,h){var w=null,v=h?g.j(0.28):A.c.j(0.08),u=B.m(14),t=B.K(h?g:A.aT,A.r,1)
return B.aA(w,B.p(w,B.w(B.a([B.V(d,g,w,w,w,20),A.rP,B.c(e,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,9.5,w,w,A.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,w,w,A.jk,A.jY,w,w,56),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:721}
C.e2j.prototype={
$0(){return this.a.aEE(-1)},
$S:0}
C.e2k.prototype={
$0(){return this.a.aEE(1)},
$S:0}
C.e2l.prototype={
$0(){return this.a.Kl(null)},
$S:0}
C.e2m.prototype={
$0(){return this.a.Kl(0)},
$S:0}
C.e2s.prototype={
$0(){return B.a8(this.a,!1).hZ()},
$S:0}
C.e2i.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c4B(o):q.bHt(o,p),m=x.p
p=B.a([B.oX(new B.mg(n,new B.bg(p,x.aC)),A.pT,B.q9(),A.aZ,A.aZ,new C.e2g())],m)
n=t.d
if(n){w=A.i.F(q.gC2(),12)<4
v=w?150:96
u=B.m(16)
m=B.a([A.ar],m)
if(w)m.push(D.bNU)
else m.push(A.aX)
m.push(B.p(s,s,A.f,s,s,new B.o(w?A.bf:A.ax,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.ar)
p.push(B.ao(s,B.at(B.cY(s,B.A(m,A.l,s,A.e,A.h,0,s,s),s,s,A.eg,new B.o(A.v,s,s,u,s,s,A.m),A.nj,s,28,s,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.Bn)p.push(B.ao(s,B.at(B.p(s,s,A.f,s,s,A.N5,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.Bo)p.push(B.ao(s,B.p(s,s,A.f,s,s,A.N5,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ao(6,B.aA(s,B.at(B.p(s,s,A.f,s,s,new B.o(A.c.j(0.75),s,s,B.m(3),s,s,A.m),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e2h(q),s,s,s,s,s,s,!1,A.a4),s,s,0,0,s,s))
return B.bv(r,new B.am(A.a0,s,A.b4,A.t,p,s),A.ap)},
$S:396}
C.e2g.prototype={
$2(d,e){var w=x.a
return new B.dd(e,!1,B.iB(A.z,d,null,new B.bk(e,new B.bq(0.92,1,w),w.k("bk<bS.T>"))),null)},
$S:488}
C.e2h.prototype={
$0(){return this.a.Kl(null)},
$S:0}
C.e2o.prototype={
$2(d,e){var w,v,u,t,s=null,r=Math.max(e.b,230),q=this.a
q=B.a([B.c(A.a.aY(A.o.v(B.cX(q)),2,"0")+":"+A.a.aY(A.o.v(B.fx(q)),2,"0"),s,s,s,s,s,s,A.uC,s,s,s),A.aX],x.p)
for(w=0;w<4;++w){v=new B.aP(1,1)
q.push(B.p(s,s,A.f,s,s,new B.o(A.c,s,s,new B.bc(v,v,v,v),s,s,A.m),s,4+w*2,s,D.bMq,s,s,s,3))}q.push(A.da)
q.push(D.h5Q)
q.push(A.b6)
v=B.K(A.ab,A.r,1)
u=B.m(4)
t=this.b
q.push(B.p(s,new B.bK(A.a5,s,s,B.C7(A.z,B.p(s,s,A.f,s,s,new B.o(A.bf,s,s,B.m(2),s,s,A.m),s,s,s,A7.I0,s,s,s,s),s,t/100),s),A.f,s,s,new B.o(s,s,v,u,s,s,A.m),s,12,s,s,s,s,s,26))
q.push(A.pq)
q.push(B.c(""+t+"%",s,s,s,s,s,s,D.fXo,s,s,s))
return new B.d6(A.dn,A.a5,A.f,new B.a4(r,s,B.A(q,A.l,s,A.e,A.h,0,s,s),s),s)},
$S:265}
C.e2b.prototype={
$0(){return this.a.Kl(A.d.c8(F.iy,this.b))},
$S:0}
C.e29.prototype={
$0(){return this.a.Kl(0)},
$S:0}
C.e2a.prototype={
$2(d,e){var w,v,u,t,s=null,r=Math.max(e.b,216),q=B.a([],x.p)
for(w=B.cU(F.iy,0,B.dw(4,"count",x.S),x.gD),v=w.$ti,w=new B.bR(w,w.gJ(0),v.k("bR<aj.E>")),u=this.a,v=v.k("aj.E");w.C();){t=w.d
q.push(u.ayr(t==null?v.a(t):t,50,!1))}return new B.d6(A.dn,A.z,A.f,new B.a4(r,s,B.A(q,A.l,s,A.rB,A.h,0,s,s),s),s)},
$S:265}
C.e23.prototype={
$0(){return this.a.Kl(null)},
$S:0}
C.e28.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=A.v.j(0.55),l=this.a,k=l.f,j=k?112:10
if(k){k=l.c
k.toString
k=B.aF(k,A.c_,x.w).w.a.a>700}else k=!1
k=k?250:10
w=x.p
k=B.p(n,B.A(B.a([D.hkC,A.ar,B.E(B.c(this.b?"Navigation   Media   Climate":"File   Edit   View   Window   Help",n,1,A.f2,n,n,n,A.M_,n,n,n),1),B.c(A.a.aY(A.o.v(B.cX(new B.W(Date.now(),0,!1))),2,"0")+":"+A.a.aY(A.o.v(B.fx(new B.W(Date.now(),0,!1))),2,"0"),n,n,n,n,n,n,A.qy,n,n,n)],w),A.l,n,A.e,A.h,0,n,n),A.f,m,n,n,n,24,n,n,new B.R(j,0,k,0),n,n,n)
j=B.a([B.b4(n,n,n,new C.bAh(l.gC2(),this.c.d,n),A.aA)],w)
if(l.e!=null){if(l.f){m=l.c
m.toString
m=B.aF(m,A.dK,x.w).w.r.b+52}else m=12
v=B.m(10)
u=B.K(A.aT,A.r,1)
t=B.m(10)
s=B.aA(n,B.p(n,n,A.f,n,n,A.agE,n,12,n,n,n,n,n,12),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.e27(l),n,n,n,n,n,n,!1,A.a4)
r=B.p(n,n,A.f,n,n,A.Zd,n,12,n,n,n,n,n,12)
q=B.aA(n,B.p(n,n,A.f,n,n,D.bb3,n,12,n,n,n,n,n,12),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,l.gbd6(),n,n,n,n,n,n,!1,A.a4)
p=l.e
p.toString
p=B.a([s,A.e0,r,A.e0,q,A.ar,B.E(B.c(F.iy[p].a,n,1,A.a2,n,n,n,A.X3,n,n,n),1)],w)
if(l.OE()!=null)s=!l.f||!l.r
else s=!1
if(s)p.push(l.b00(19))
s=B.p(n,B.A(p,A.l,n,A.e,A.h,0,n,n),A.f,A.cx,n,n,n,26,n,n,A.fD,n,n,n)
r=l.e
r.toString
j.push(B.bT(0,new B.C(new B.R(26,m,26,58),B.p(n,B.bv(t,B.w(B.a([s,B.E(l.aRl(r),1)],w),A.l,n,A.e,A.h,0,A.p),A.ap),A.f,n,n,new B.o(A.v,n,u,v,D.dEF,n,A.m),n,n,n,n,n,n,n,n),n),0,0,0))}m=A.c.j(0.16)
v=B.m(18)
u=B.K(A.aT,A.r,1)
t=B.a([],w)
for(o=0;o<8;++o)t.push(new B.C(A.jk,l.ayr(F.iy[o],34,!1),n))
j.push(B.ao(8,B.at(B.p(n,B.A(t,A.l,n,A.e,A.P,0,n,n),A.f,n,n,new B.o(m,n,u,v,n,n,A.m),n,n,n,n,A.lF,n,n,n),n,n,n),n,n,0,0,n,n))
return B.p(n,B.w(B.a([k,B.E(new B.am(A.a0,n,A.b4,A.t,j,n),1)],w),A.l,n,A.e,A.h,0,A.p),A.f,A4.a0q,n,n,n,n,n,n,n,n,n,n)},
$S:85}
C.e27.prototype={
$0(){return this.a.Kl(null)},
$S:0}
C.fCM.prototype={
$0(){return D.ex8},
$S:z+48}
C.fCN.prototype={
$0(){return D.e3U},
$S:z+49}
C.fCO.prototype={
$0(){return D.dYd},
$S:z+50}
C.fCP.prototype={
$0(){return D.e3h},
$S:z+51}
C.fCQ.prototype={
$0(){return D.e8M},
$S:z+52}
C.fCR.prototype={
$0(){return D.esV},
$S:z+53}
C.fCS.prototype={
$0(){return D.ev4},
$S:z+54}
C.fCT.prototype={
$0(){return D.e7P},
$S:z+36}
C.cq1.prototype={
$0(){return B.a8(this.a,!1).hZ()},
$S:0}
C.cq2.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=(e.b-14)/2,i=x.p,h=B.a([],i)
for(w=$.hX2(),v=j*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aP(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.aa(0,A.H,p.j(0.4),A.dv,16)],t)
n=B.c(r.c,k,k,k,k,k,k,A.LN,k,k,k)
m=B.c(r.a,k,k,k,k,k,k,D.fV6,k,k,k)
l=A.c.j(0.85)
h.push(B.aA(k,B.p(k,new B.am(A.a0,k,A.ac,A.t,B.a([new B.cR(k,-6,-6,k,k,k,n,k),new B.bK(A.ls,k,k,B.w(B.a([m,A.cQ,B.c(r.b,k,k,k,k,k,k,new B.F(!0,l,k,k,k,k,12,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)],i),A.B,k,A.e,A.P,0,A.p),k)],i),k),A.f,k,k,new B.o(k,k,k,new B.bc(q,q,q,q),p,new B.a6(A.aw,A.aD,A.w,o,k,k),A.m),k,v,k,k,A.bD,k,k,j),A.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.cq0(d,r),k,k,k,k,k,k,!1,A.a4))}return B.c_(A.bI,h,A.br,k,14,14)},
$S:170}
C.cq0.prototype={
$0(){return B.a8(this.a,!1).ca(B.e7(new C.cq_(this.b),!1,null,x.H))},
$S:0}
C.cq_.prototype={
$1(d){return this.a.f.$0()},
$S:41}
C.f2W.prototype={
$0(){var w=this.a
return w.w=w.d[w.b9z(w.f)]},
$S:0}
C.f2S.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cV.ai()*7},
$S:0}
C.f2R.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bM(0,A.ck)
w.w=""},
$S:0}
C.f2U.prototype={
$0(){var w=this.a
return w.l(new C.f2T(w,this.b))},
$S:0}
C.f2T.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cJ(w,this.b)},
$S:0}
C.f2V.prototype={
$1(d){return this.a.b3J(0)},
$S:2}
C.ea0.prototype={
$0(){return C.K5("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.ea1.prototype={
$0(){},
$S:0}
C.e9W.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.e9Y.prototype={
$0(){return this.a.b3L(this.b)},
$S:0}
C.e9Z.prototype={
$0(){var w=this.a
return w.l(new C.e9X(w))},
$S:0}
C.e9X.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.ea_.prototype={
$0(){var w=this.a
return w.b3L(w.d)},
$S:0}
C.dUr.prototype={
$2(d,e){return d+e},
$S:81}
C.dUs.prototype={
$0(){},
$S:0}
C.dUm.prototype={
$2(d,e){return d+e},
$S:81}
C.dUp.prototype={
$0(){var w=this.a
return w.l(new C.dUo(w,this.b))},
$S:0}
C.dUo.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dUq.prototype={
$0(){var w=this.a
return w.l(new C.dUn(w))},
$S:0}
C.dUn.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.e5N.prototype={
$0(){return E.uT(this.b,this.a.d,"drawing")},
$S:0}
C.e5O.prototype={
$1(d){var w=this.a
return w.l(new C.e5M(w,d))},
$S:51}
C.e5M.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aLK(u,v,t))},
$S:0}
C.e5P.prototype={
$1(d){var w=this.a
return w.l(new C.e5L(w,d))},
$S:19}
C.e5L.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
C.e5Q.prototype={
$1(d){var w=this.a
return w.l(new C.e5K(w,d))},
$S:24}
C.e5K.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aLK(u,v,t))},
$S:0}
C.e5R.prototype={
$0(){var w=this.a
return w.l(new C.e5J(w,this.b))},
$S:0}
C.e5J.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.e5S.prototype={
$1(d){var w=this.a
return w.l(new C.e5I(w,d))},
$S:6}
C.e5I.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.e5T.prototype={
$0(){var w=this.a
return w.l(new C.e5H(w))},
$S:0}
C.e5H.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.e5U.prototype={
$0(){var w=this.a
return w.l(new C.e5G(w))},
$S:0}
C.e5G.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.e5V.prototype={
$0(){var w=this.a
return w.l(A.d.gtu(w.e))},
$S:0}
C.e5W.prototype={
$0(){var w=this.a
return w.l(new C.e5F(w))},
$S:0}
C.e5F.prototype={
$0(){var w=this.a
w.x=D.aCY[A.o.F(A.d.c8(D.aCY,w.x)+1,4)]},
$S:0}
C.exX.prototype={
$0(){return this.a.f.I(0,this.b)},
$S:0}
C.exY.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.K5("bell",B.a([0,4,7],w),500,0.45)
u.l(new C.exW(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.d()
if(v===u.length)C.K5("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:12}
C.exW.prototype={
$0(){var w=this.a
w.r.u(0,B.a([this.b,this.c],x.t))
w.f.a6(0)},
$S:0}
C.exZ.prototype={
$0(){var w=this.a
if(w.c==null)return
w.l(new C.exV(w))},
$S:12}
C.exV.prototype={
$0(){var w=this.a
w.f.a6(0)
w.x=!1},
$S:0}
C.ey2.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return B.aA(w,B.l1(new C.ey0(v,e),w,A.aZ,A.pT,w,w,new B.bq(0,u,x.a),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ey1(v,e),w,w,w,w,w,w,!1,A.a4)},
$S:78}
C.ey1.prototype={
$0(){return this.a.cgX(this.b)},
$S:0}
C.ey0.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dA(),m=n.a
m.$flags&2&&B.ak(m)
m[11]=0.001
n.fI(3.141592653589793*e)
m=B.m(16)
w=o?p:D.cej
if(o)v=q.a.r.q(0,q.b)?A.bf.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.K(u.r.q(0,t)?A.bf:A.aT,A.r,1)
if(o){r=B.dA()
r.fI(3.141592653589793)
u=u.e
u===$&&B.d()
r=B.fG(A.z,B.c(u[t],p,p,p,p,p,p,H.adg,p,p,p),p,r,!0)
u=r}else u=D.hdl
return B.fG(A.z,B.p(A.z,u,A.f,p,p,new B.o(v,p,s,m,p,w,A.m),p,p,p,p,p,p,p,p),p,n,!0)},
$S:112}
C.ey3.prototype={
$0(){var w=this.a
return w.l(new C.ey_(w,this.b))},
$S:0}
C.ey_.prototype={
$0(){var w=this.a
w.d=this.b.a
w.avM()},
$S:0}
C.ey4.prototype={
$0(){var w=this.a
return w.l(w.gbQp())},
$S:0}
C.eL4.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.eL5.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.eL2.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eL3.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.eL1(w))},
$S:12}
C.eL1.prototype={
$0(){return this.a.f=-1},
$S:0}
C.eL6.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.eL7.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.eL8.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b3K()},
$S:12}
C.eL9.prototype={
$0(){return this.a.ch2(this.b)},
$S:0}
C.eZh.prototype={
$1(d){return B.v(d.h(0,1))+","},
$S:58}
C.eZq.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.c(d,w,1,A.a2,w,w,w,B.l(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.C(A.jY,B.A(B.a([v,A.aa,new B.d0(1,A.c9,new B.d6(A.dn,A.z,A.f,B.c(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w),w)],x.p),A.l,w,A.e,A.h,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1972}
C.eZm.prototype={
$1(d){return this.a.l(new C.eZl())},
$S:2}
C.eZl.prototype={
$0(){},
$S:0}
C.eZn.prototype={
$0(){var w=this.a
return w.l(new C.eZk(w,this.b))},
$S:0}
C.eZk.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eZo.prototype={
$1(d){var w=this.a
return w.l(new C.eZj(w,d))},
$S:6}
C.eZj.prototype={
$0(){return this.a.f=A.i.S(this.b)},
$S:0}
C.eZp.prototype={
$0(){var w=this.a
return w.l(new C.eZi(w))},
$S:0}
C.eZi.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.ewC.prototype={
$0(){},
$S:0}
C.ewD.prototype={
$0(){},
$S:0}
C.ewv.prototype={
$0(){var w=this.a
return w.l(new C.ewu(w))},
$S:0}
C.ewu.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.c3(u,1,!1,x.S)
w.r=0.9
E.Yl("hat",0,0.6)},
$S:0}
C.eww.prototype={
$0(){var w=this.a
return w.l(new C.ewt(w))},
$S:0}
C.ewt.prototype={
$0(){this.a.y=1.1
E.mJ("bell",36,200,0.4)},
$S:0}
C.ewx.prototype={
$0(){var w=this.a
return w.l(new C.ews(w))},
$S:0}
C.ews.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aw(Math.max(v,u)-t+1)
w.as=u
E.mJ("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.ewy.prototype={
$0(){var w=this.a
return w.l(new C.ewr(w,this.b))},
$S:0}
C.ewr.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.ewz.prototype={
$1(d){var w=this.a
return w.l(new C.ewq(w,d))},
$S:6}
C.ewq.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.i.S(this.b),r=J.e3(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.ewA.prototype={
$1(d){var w=this.a
return w.l(new C.ewp(w,d))},
$S:6}
C.ewp.prototype={
$0(){return this.a.z=A.i.S(this.b)},
$S:0}
C.ewB.prototype={
$1(d){var w=this.a
return w.l(new C.ewo(w,d))},
$S:6}
C.ewo.prototype={
$0(){return this.a.Q=A.i.S(this.b)},
$S:0}
C.cpY.prototype={
$0(){var w=this
return E.mJ(w.a,w.b,w.c,w.d)},
$S:1};(function aliases(){var w=C.aPQ.prototype
w.bCl=w.t
w=C.aOU.prototype
w.bBn=w.t
w=C.aOV.prototype
w.bBo=w.t
w=C.aOZ.prototype
w.bBs=w.t
w=C.aQG.prototype
w.bDi=w.t
w=C.aPO.prototype
w.bCj=w.t
w=C.aAU.prototype
w.byo=w.t
w=C.aAV.prototype
w.byp=w.t
w=C.aNl.prototype
w.bzL=w.t
w=C.aP9.prototype
w.bBD=w.t
w=C.aOW.prototype
w.bBp=w.t
w=C.aPg.prototype
w.bBL=w.t
w=C.aPH.prototype
w.bCc=w.t
w=C.aQ9.prototype
w.bCF=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0,u=a._instance_1u,t=a._instance_1i,s=a._instance_0i,r=a.installInstanceTearOff
w(C.aHJ.prototype,"gazY","cc3",1)
v(C,"iEh","c9u",3)
var q
u(q=C.aG8.prototype,"gcls","clt",22)
w(q,"gccD","b2b",1)
w(C.aGa.prototype,"gcep","ceq",1)
t(C.aGr.prototype,"gcex","cey",39)
w(q=C.aKR.prototype,"gcFC","cFD",1)
w(q,"gcez","a0u",1)
w(q,"gcq8","cq9",1)
w(q,"gcev","a0t",3)
w(q,"gcew","agt",3)
w(q=C.aHI.prototype,"gbNt","abI",3)
w(q,"gcpp","b5X",1)
w(q,"gctj","aj9",3)
s(q,"gceB","agu",3)
s(q=C.a6A.prototype,"gtu","a6",1)
u(q,"gd2L","aqf",0)
u(q,"gd_2","N1",0)
w(q,"gd58","bnC",1)
r(C.alg.prototype,"gceY",0,5,null,["$5"],["lG"],41,0,0)
w(q=C.aGF.prototype,"gceZ","cf_",1)
w(q,"gcwe","ajv",3)
w(q,"gclK","ahO",3)
w(q,"gcDz","akD",3)
w(q=C.aGv.prototype,"gc72","aeB",3)
w(q,"gbd6","cKc",1)
w(q,"gb36","cf3",1)
w(q=C.aIe.prototype,"gcgY","cgZ",1)
s(q,"gcgW","b3J",1)
w(C.aHu.prototype,"gbQp","avM",1)
s(C.aHS.prototype,"gch_","ch0",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aG,[C.amt,C.Hi,C.vK,C.aW4,C.a5s,C.bes,C.c9v,C.yY,C.Dm,C.o2,C.bfg,C.Bj,C.bxK,C.qL,C.rs,C.Dq,C.a0s,C.ah4,C.a2J,C.DB,C.adU,C.aeb,C.ag9,C.H3,C.es,C.ud,C.acx,C.adG,C.a6A,C.nc,C.bfh,C.h5,C.mn,C.bz3,C.aLK])
u(B.hp,[C.fUA,C.fJ4,C.fQV,C.fQW,C.fUx,C.fUy,C.epG,C.epZ,C.eFv,C.eF2,C.eF3,C.eF4,C.eF5,C.eF6,C.eF7,C.eF8,C.eF9,C.eF0,C.eF1,C.eF_,C.eFq,C.eFr,C.eFs,C.dTY,C.dU_,C.dU2,C.dUd,C.c9w,C.c9x,C.fC5,C.fC6,C.fC7,C.fCe,C.fCf,C.fCg,C.dW0,C.dVI,C.dW1,C.dVD,C.dVy,C.dVA,C.dVG,C.dVT,C.dVR,C.dVS,C.dVQ,C.dVN,C.dVP,C.fhI,C.fhh,C.fhi,C.fhp,C.fhw,C.fhF,C.fhe,C.dvt,C.dvu,C.dvq,C.dvr,C.dvs,C.dvv,C.dvw,C.dvx,C.dvy,C.dvz,C.dvA,C.dvB,C.dvC,C.dvD,C.eEr,C.eEs,C.eEt,C.eEu,C.eEp,C.eEq,C.eEW,C.eEy,C.eEA,C.eEk,C.eES,C.eEQ,C.eER,C.eEP,C.eEO,C.eEm,C.bSK,C.bSV,C.bSQ,C.bSW,C.bSY,C.bSL,C.bSJ,C.bT2,C.bSR,C.bSU,C.bST,C.bSS,C.bN4,C.h6B,C.h6E,C.h6C,C.bMK,C.bMF,C.bMD,C.bN2,C.bMV,C.bMW,C.bMU,C.bMX,C.bMt,C.bMv,C.bMr,C.bMh,C.bMi,C.bMj,C.fCh,C.fCi,C.fCj,C.fC4,C.fCk,C.fC3,C.fCl,C.fC8,C.fC2,C.fC9,C.fC1,C.fCa,C.fC0,C.fCb,C.fBZ,C.fC_,C.fCc,C.fBX,C.fBY,C.fCd,C.fBW,C.e6r,C.e6s,C.e6h,C.e6d,C.e6q,C.e6v,C.cOZ,C.hbM,C.hbN,C.e2d,C.e25,C.e24,C.e2n,C.cq_,C.f2V,C.e5O,C.e5P,C.e5Q,C.e5S,C.ey0,C.eZh,C.eZq,C.eZm,C.eZo,C.ewz,C.ewA,C.ewB])
u(B.iX,[C.fUz,C.epL,C.epJ,C.eFb,C.eFo,C.dVz,C.dVW,C.e1c,C.fhL,C.fhM,C.fho,C.fhB,C.fhC,C.fhx,C.fhD,C.fhd,C.eEn,C.eEo,C.eEV,C.eEN,C.eEC,C.bSX,C.bSZ,C.bT0,C.bSM,C.bSO,C.bN5,C.bN3,C.cx8,C.h6D,C.bMC,C.bME,C.bN0,C.bN_,C.bMs,C.e6p,C.cP_,C.e26,C.e2i,C.e2g,C.e2o,C.e2a,C.e28,C.cq2,C.dUr,C.dUm,C.ey2])
u(B.af,[C.Xy,C.XV,C.Wl,C.Ws,C.OM,C.aKQ,C.XU,C.ale,C.X3,C.aAz,C.WN,C.Ys,C.Xb,C.Wm,C.X2,C.XP,C.Y_,C.Yj,C.XO])
u(B.ah,[C.boJ,C.aPQ,C.aOU,C.aOZ,C.aGr,C.aQG,C.aPO,C.aAU,C.bCf,C.aNl,C.aP9,C.aQ9,C.aPg,C.aOW,C.bo9,C.aHu,C.aHS,C.bpr,C.aPH])
u(B.iW,[C.epE,C.epF,C.epR,C.epS,C.epN,C.epM,C.epO,C.epK,C.epP,C.epI,C.epQ,C.epH,C.epV,C.epU,C.epW,C.epT,C.epX,C.epY,C.eq_,C.eFu,C.eFw,C.eFx,C.eFd,C.eFc,C.eFa,C.eFj,C.eFk,C.eFg,C.eFl,C.eFf,C.eFm,C.eFn,C.eFe,C.eFp,C.eFi,C.eFt,C.eFh,C.dUk,C.dUj,C.dTV,C.dTW,C.dTX,C.dUl,C.dTZ,C.dU0,C.dU1,C.dU3,C.dTS,C.dTT,C.dTU,C.dUa,C.dUb,C.dUc,C.dU9,C.dUe,C.dU8,C.dUf,C.dU7,C.dUg,C.dU6,C.dUh,C.dU5,C.dUi,C.dU4,C.dVF,C.dVE,C.dVJ,C.dVB,C.dVC,C.dVK,C.dVL,C.dVM,C.dVH,C.dVx,C.dVV,C.dVU,C.dVX,C.dVY,C.dVZ,C.dVO,C.dW_,C.cZW,C.e1a,C.e19,C.e1b,C.fCw,C.fCx,C.fCy,C.fCz,C.fCA,C.fCB,C.fCC,C.fCD,C.fCE,C.fhK,C.fhJ,C.fhr,C.fhq,C.fhg,C.fhf,C.fhj,C.fhm,C.fhl,C.fhn,C.fhk,C.fhz,C.fhy,C.fhA,C.fhs,C.fhE,C.fhv,C.fhG,C.fhu,C.fhH,C.fht,C.eEw,C.eEl,C.eEv,C.eEh,C.eEx,C.eEz,C.eEi,C.eEj,C.eEU,C.eET,C.eEK,C.eEL,C.eEM,C.eEG,C.eEH,C.eEF,C.eEI,C.eEE,C.eEJ,C.eED,C.eEB,C.dvp,C.bT_,C.bT1,C.bSN,C.bSP,C.bMH,C.bMI,C.bMG,C.bMJ,C.bML,C.bMw,C.bMx,C.bMB,C.bMy,C.bMz,C.bMA,C.bN1,C.bM6,C.bMS,C.bMT,C.bMQ,C.bMR,C.bMN,C.bMO,C.bMP,C.bMY,C.bMM,C.bMZ,C.bM7,C.bMu,C.bMe,C.bMd,C.bMf,C.bMg,C.bMc,C.bMk,C.bMb,C.bMl,C.bMm,C.bMn,C.bMo,C.bMa,C.bMp,C.bM9,C.bMq,C.bM8,C.e6i,C.e6t,C.e6u,C.e6g,C.e6f,C.e6e,C.e6n,C.e6l,C.e6m,C.e6o,C.e6j,C.e6k,C.e6w,C.e6x,C.e6y,C.e6z,C.e6A,C.e2e,C.e2f,C.e2p,C.e2c,C.e2q,C.e2r,C.e2j,C.e2k,C.e2l,C.e2m,C.e2s,C.e2h,C.e2b,C.e29,C.e23,C.e27,C.fCM,C.fCN,C.fCO,C.fCP,C.fCQ,C.fCR,C.fCS,C.fCT,C.cq1,C.cq0,C.f2W,C.f2S,C.f2R,C.f2U,C.f2T,C.ea0,C.ea1,C.e9W,C.e9Y,C.e9Z,C.e9X,C.ea_,C.dUs,C.dUp,C.dUo,C.dUq,C.dUn,C.e5N,C.e5M,C.e5L,C.e5K,C.e5R,C.e5J,C.e5I,C.e5T,C.e5H,C.e5U,C.e5G,C.e5V,C.e5W,C.e5F,C.exX,C.exY,C.exW,C.exZ,C.exV,C.ey1,C.ey3,C.ey_,C.ey4,C.eL4,C.eL5,C.eL2,C.eL3,C.eL1,C.eL6,C.eL7,C.eL8,C.eL9,C.eZl,C.eZn,C.eZk,C.eZj,C.eZp,C.eZi,C.ewC,C.ewD,C.ewv,C.ewu,C.eww,C.ewt,C.ewx,C.ews,C.ewy,C.ewr,C.ewq,C.ewp,C.ewo,C.cpY])
t(C.bCt,C.aPQ)
t(C.aHJ,C.bCt)
u(B.lM,[C.blB,C.bfy,C.bx7,C.bea,C.bvH,C.bv5,C.beR,C.bv7,C.bzd,C.blz,C.alg,C.bdk,C.bAh,C.agY,C.bAt,C.bv6,C.bqd])
t(C.aOV,C.aOU)
t(C.aG8,C.aOV)
t(C.bCc,C.aOZ)
t(C.aGa,C.bCc)
u(B.lk,[C.LB,C.a2w,C.Kz])
u(B.aw,[C.bw5,C.ahh,C.ag5,C.RO,C.bwD,C.aax,C.bhG])
t(C.aKR,C.aQG)
t(C.bly,B.oY)
t(C.aHI,C.aPO)
t(C.aAV,C.aAU)
t(C.alf,C.aAV)
t(C.aGF,C.bCf)
t(C.bdl,C.aNl)
t(C.aGv,C.aP9)
t(C.bCA,C.aQ9)
t(C.aIe,C.bCA)
t(C.bCh,C.aPg)
t(C.boi,C.bCh)
t(C.bCb,C.aOW)
t(C.bnS,C.bCb)
t(C.bCr,C.aPH)
t(C.boV,C.bCr)
w(C.aPQ,B.cj)
w(C.bCt,E.o_)
w(C.aOU,B.cj)
w(C.aOV,E.o_)
w(C.aOZ,B.cj)
w(C.bCc,E.o_)
w(C.aQG,B.eY)
w(C.aPO,B.cj)
w(C.aAU,B.cj)
w(C.aAV,E.o_)
w(C.aNl,B.cj)
v(C.bCf,B.eE)
w(C.aP9,B.cj)
w(C.aOW,B.cj)
w(C.bCb,E.o_)
w(C.aPg,B.cj)
w(C.bCh,E.o_)
w(C.aPH,B.cj)
w(C.bCr,E.o_)
w(C.aQ9,B.cj)
w(C.bCA,E.o_)})()
B.je(b.typeUniverse,JSON.parse('{"Xy":{"af":[],"x":[]},"boJ":{"ah":["Xy"]},"XV":{"af":[],"x":[]},"aHJ":{"ah":["XV"]},"blB":{"aC":[]},"Wl":{"af":[],"x":[]},"aG8":{"ah":["Wl"]},"Ws":{"af":[],"x":[]},"aGa":{"ah":["Ws"]},"bfy":{"aC":[]},"ahh":{"aw":[],"x":[]},"ag5":{"aw":[],"x":[]},"aKQ":{"af":[],"x":[]},"OM":{"af":[],"x":[]},"aGr":{"ah":["OM"]},"bw5":{"aw":[],"x":[]},"RO":{"aw":[],"x":[]},"bx7":{"aC":[]},"bwD":{"aw":[],"x":[]},"bea":{"aC":[]},"aKR":{"ah":["aKQ"]},"bvH":{"aC":[]},"bv5":{"aC":[]},"beR":{"aC":[]},"bv7":{"aC":[]},"bzd":{"aC":[]},"XU":{"af":[],"x":[]},"bly":{"aC":[]},"aHI":{"ah":["XU"]},"blz":{"aC":[]},"alg":{"aC":[]},"ale":{"af":[],"x":[]},"alf":{"ah":["ale"]},"X3":{"af":[],"x":[]},"aAz":{"af":[],"x":[]},"aGF":{"ah":["X3"],"eE":[]},"bdl":{"ah":["aAz"]},"bdk":{"aC":[]},"WN":{"af":[],"x":[]},"aGv":{"ah":["WN"]},"bAh":{"aC":[]},"agY":{"aC":[]},"aax":{"aw":[],"x":[]},"Ys":{"af":[],"x":[]},"Xb":{"af":[],"x":[]},"Wm":{"af":[],"x":[]},"X2":{"af":[],"x":[]},"XP":{"af":[],"x":[]},"Y_":{"af":[],"x":[]},"Yj":{"af":[],"x":[]},"XO":{"af":[],"x":[]},"aIe":{"ah":["Ys"]},"bAt":{"aC":[]},"boi":{"ah":["Xb"]},"bv6":{"aC":[]},"bnS":{"ah":["Wm"]},"bo9":{"ah":["X2"]},"bqd":{"aC":[]},"aHu":{"ah":["XP"]},"aHS":{"ah":["Y_"]},"bpr":{"ah":["Yj"]},"boV":{"ah":["XO"]},"bhG":{"aw":[],"x":[]}}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.as
return{c:w("la<u?>"),G:w("u"),J:w("bm<n,H>"),Q:w("dc<n>"),Z:w("a0"),I:w("vj"),M:w("N<dj>"),l:w("N<a5n>"),h:w("N<a5s>"),V:w("N<aa>"),O:w("N<u>"),F:w("N<W>"),D:w("N<az<aG>>"),x:w("N<a0>"),E:w("N<ai<n>>"),b:w("N<ai<H>>"),U:w("N<ai<G?>>"),B:w("N<a9<n,aG>>"),g:w("N<r>"),bz:w("N<ud>"),v:w("N<h_>"),eZ:w("N<+(n,n)>"),fT:w("N<+(H,x)>"),L:w("N<+(G,n)>"),u:w("N<+(G,G)>"),r:w("N<+(n,n,a0)>"),e:w("N<+(n,H,H,G)>"),o:w("N<+(n,G,n,G)>"),d:w("N<+(n,n,H,H,a9<n,H>)>"),_:w("N<vK>"),fQ:w("N<acx>"),s:w("N<n>"),cF:w("N<au>"),X:w("N<KP>"),p:w("N<x>"),bL:w("N<adG>"),fH:w("N<li>"),a_:w("N<adU>"),cB:w("N<o2>"),ba:w("N<aeb>"),eW:w("N<Dq>"),fY:w("N<a0s>"),ac:w("N<ag9>"),cd:w("N<DB>"),fr:w("N<ah4>"),e4:w("N<a2J>"),au:w("N<aLK>"),f7:w("N<P>"),n:w("N<H>"),t:w("N<G>"),dS:w("N<aC?>"),fs:w("N<ud?>"),bN:w("N<G?>"),gJ:w("cB<alf>"),A:w("cB<ah<af>>"),bF:w("ai<u>"),gl:w("ai<W>"),ew:w("ai<aG>"),j:w("ai<@>"),P:w("a9<n,@>"),f:w("a9<@,@>"),bd:w("O<es,n>"),fR:w("O<+(H,x),x>"),w:w("im"),gA:w("vn"),gD:w("wJ"),k:w("cp"),K:w("aG"),Y:w("ud"),C:w("es"),N:w("n"),bO:w("au"),a:w("bq<H>"),W:w("bg<n>"),aC:w("bg<G?>"),dg:w("ee<rs>"),m:w("bes"),a2:w("Dm"),f3:w("rs"),es:w("H3"),q:w("l2"),y:w("P"),i:w("H"),z:w("@"),S:w("G"),R:w("ai<@>?"),cK:w("aG?"),T:w("n?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b5K=new B.dj(0,0.1)
D.b7H=new C.aW4(0,0,0)
D.MY=new C.aW4(0,0.5,0)
D.b8i=new B.ax(A.bf,1,A.r,-1)
D.b9O=new B.aY(16,1/0,16,1/0)
D.b9Z=new B.aY(0,1/0,0,210)
D.bs5=new B.u(1,0.10588235294117647,0.12549019607843137,0.18823529411764706,A.q)
D.dET=w([D.bs5,Av.akV],x.O)
D.eOI=new B.bU(A.C_,1.1,A.w,null,0,D.dET,null,null)
D.ba6=new B.o(null,null,null,null,null,D.eOI,A.m)
D.bb3=new B.o(A.bk,null,null,null,null,null,A.a6)
D.fIG=new B.F(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hm1=new B.D("\u26a1",null,D.fIG,null,null,null,null,null,null,null,null,null)
D.bfO=new B.cn(A.z,null,null,D.hm1,null)
D.aYP=new B.F(!0,A.bX,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hbk=new B.D("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aYP,null,A.K,null,null,null,null,null,null,null)
D.eGQ=new B.C(A.o8,D.hbk,null)
D.bfZ=new B.cn(A.z,null,null,D.eGQ,null)
D.h11=new B.D("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aYP,null,A.K,null,null,null,null,null,null,null)
D.eHJ=new B.C(A.HV,D.h11,null)
D.bgH=new B.cn(A.z,null,null,D.eHJ,null)
D.ahF=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.bky=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.bkP=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bm4=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.bmb=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.bmy=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.boC=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.bpM=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.bqx=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.ak2=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.brz=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.akq=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.aky=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.btz=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.al_=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.bvC=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.bvK=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bwf=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.wW=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.byr=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.amx=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.bEj=new B.bh(11e6)
D.bGc=new B.R(10,6,10,2)
D.bGe=new B.R(10,8,0,10)
D.bGU=new B.R(12,8,6,10)
D.bGX=new B.R(12,8,8,8)
D.bH3=new B.R(14,0,14,22)
D.bH5=new B.R(14,0,14,30)
D.bI9=new B.R(16,4,16,28)
D.bIs=new B.R(18,10,18,16)
D.bLg=new B.R(4,4,8,2)
D.bLU=new B.R(8,14,8,12)
D.bM4=new B.R(8,6,8,8)
D.bMq=new B.R(0,0,1.5,0)
D.b7t=new B.El(26,"saturation")
D.bMJ=new B.v7(A.cG,D.b7t,null,A.ZI)
D.bMK=new B.h3(A.H,11)
D.bMO=new B.h3(A.H,30)
D.h03=new B.D("REACTION LAB",null,U.aZt,null,null,null,null,A.a2,null,1,null,null)
D.bMX=new B.bu(1,A.b7,D.h03,null)
D.h4c=new B.D("\ud83d\udce2 NGMY Ads",null,A.qy,null,null,null,null,A.f2,null,1,null,null)
D.bNU=new B.bu(1,A.b7,D.h4c,null)
D.fZG=new B.D("Wire selected",null,A.hi,null,null,null,null,null,null,null,null,null)
D.bO7=new B.bu(1,A.b7,D.fZG,null)
D.arE=new B.a0(62712,"MaterialIcons",!1)
D.bUl=new B.a0(62908,"MaterialIcons",!1)
D.bW1=new B.a0(983122,"MaterialIcons",!1)
D.bWh=new B.a0(983247,"MaterialIcons",!1)
D.bWx=new B.a0(983443,"MaterialIcons",!1)
D.bWQ=new B.a0(983616,"MaterialIcons",!1)
D.bW0=new B.a0(983117,"MaterialIcons",!1)
D.c_D=new B.ae(D.bW0,28,A.c,null,null,null)
D.c_V=new B.ae(A.jm,18,null,null,null,null)
D.c29=new B.ae(A.od,null,A.ab,null,null,null)
D.c2j=new B.ae(A.a5c,21,A.ab,null,null,null)
D.c3a=new B.ae(A.eE,17,A.ab,null,null,null)
D.c64=new B.ae(A.jm,21,A.ab,null,null,null)
D.c6A=new B.ae(A.eq,20,A.c1,null,null,null)
D.c7G=new B.ae(A.eh,null,A.aQ,null,null,null)
D.dCp=w([A.dl,A.di,A.dl],x.O)
D.avn=new B.a6(A.a5,A.a9,A.w,D.dCp,null,null)
D.dbz=w([A.bP,A.bl],x.O)
D.cbb=new B.a6(A.aU,A.b1,A.w,D.dbz,null,null)
D.cbq=new B.a6(A.aU,A.b1,A.w,A.a7O,null,null)
D.dxE=w([F.Nq,A8.amH],x.O)
D.cca=new B.a6(A.aU,A.b1,A.w,D.dxE,null,null)
D.d8R=w([A.pE,A.iI],x.O)
D.ccg=new B.a6(A.aU,A.b1,A.w,D.d8R,null,null)
D.dbh=w([A.cU,A.ax],x.O)
D.avA=new B.a6(A.aU,A.b1,A.w,D.dbh,null,null)
D.dvx=w([A.d0,A.iL,A.bl],x.O)
D.ccz=new B.a6(A.a5,A.a9,A.w,D.dvx,null,null)
D.dHK=w([A.d0,A.bP,A.bl],x.O)
D.ccK=new B.a6(A.a5,A.a9,A.w,D.dHK,null,null)
D.dvD=w([A.cz,A.cx],x.O)
D.avD=new B.a6(A.aU,A.b1,A.w,D.dvD,null,null)
D.aFB=w([A.cU,M.ni],x.O)
D.cda=new B.a6(A.aU,A.b1,A.w,D.aFB,null,null)
D.cds=new B.a6(A.aU,A.b1,A.w,X.avX,null,null)
D.cej=new B.a6(A.aw,A.aD,A.w,A.Tf,null,null)
D.bxa=new B.u(1,0.16470588235294117,0.16470588235294117,0.1803921568627451,A.q)
D.bsl=new B.u(1,0.0392156862745098,0.0392156862745098,0.043137254901960784,A.q)
D.dl6=w([D.bxa,D.bsl],x.O)
D.cen=new B.a6(A.aU,A.b1,A.w,D.dl6,null,null)
D.cex=new B.a6(A.aU,A.b1,A.w,H.aET,null,null)
D.amg=new B.u(1,0.043137254901960784,0.043137254901960784,0.047058823529411764,A.q)
D.bwM=new B.u(1,0.22745098039215686,0.22745098039215686,0.23921568627450981,A.q)
D.dEi=w([D.amg,D.bwM,D.amg],x.O)
D.ceF=new B.a6(A.a5,A.a9,A.w,D.dEi,null,null)
D.bw9=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.bx3=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cU6=w([A.Oy,D.bw9,D.bx3],x.O)
D.ceJ=new B.a6(A.aU,A.b1,A.w,D.cU6,null,null)
D.cHg=w([A.de,A.j_],x.O)
D.ceY=new B.a6(A.aU,A.b1,A.w,D.cHg,null,null)
D.cUN=w([A.d0,A.hX,A.d0],x.O)
D.cf5=new B.a6(A.a5,A.a9,A.w,D.cUN,null,null)
D.bzT=new B.u(1,0.07058823529411765,0.0784313725490196,0.10196078431372549,A.q)
D.cI2=w([F.ahN,D.bzT],x.O)
D.cfb=new B.a6(A.aU,A.b1,A.w,D.cI2,null,null)
D.cfQ=w([0,4,7],x.t)
D.cfR=w([0,4,7,12],x.t)
D.cfS=w([0,4,7,4],x.t)
D.aEy=w([A.hl,A.tn],x.O)
D.aE3=w([A.fK,A.cX],x.O)
D.aCo=w([A.bj,A.e_],x.O)
D.d22=w([A.aQ,A.de],x.O)
D.dx3=w([A.c5,A.lW],x.O)
D.aBP=w([A.cW,A.kd],x.O)
D.d7w=w([A.bQ,A.aM],x.O)
D.cgf=w([D.aEy,D.aE3,A.a72,D.aCo,D.d22,A.a6Z,A.a7e,D.dx3,D.aBP,D.d7w],B.as("N<ai<u>>"))
D.ckY=w([120,220,380],x.t)
D.coI=w([12,16,19,24],x.t)
D.coU=w([1400,800,450,2400],x.t)
D.cxs=w([250,450,900,1500],x.t)
D.bjR=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.bwz=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.bue=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.bAu=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.btm=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.aB4=w([D.bjR,D.bwz,D.bue,D.bAu,D.btm],x.O)
D.f8t=new B.y(-25,A.ax)
D.eXB=new B.y(25,A.bC)
D.cHm=w([D.f8t,D.eXB],B.as("N<+(H,u)>"))
D.cOU=w([50,25,75],x.t)
D.cUG=w([0,5,10,15,18,20,25],x.t)
D.d2m=w([900,500,250,1600],x.t)
D.d6I=w([A.bj,A.bE,A.bd,A.bj],x.O)
D.a6U=w([A.aC,A.bu,A.bk,A.aH,A.oN],x.O)
D.d8t=w([A.ax,A.aC,A.cW,A.bu,A.bk,A.cI,A.ci,A.bE,A.a_2],x.O)
D.a6X=w([0.04,0.17,0.3],x.n)
D.fs_=new C.vK("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.fs5=new C.vK("Medium engine","A good all-rounder.",0.3,0.9)
D.fs4=new C.vK("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Jq=w([D.fs_,D.fs5,D.fs4],x._)
D.eUL=new B.y(6,"Easy")
D.eVz=new B.y(8,"Medium")
D.eQk=new B.y(10,"Hard")
D.dag=w([D.eUL,D.eVz,D.eQk],x.L)
D.aCN=w([0.55,0.78,1],x.n)
D.aCY=w([A.c,A.h9,A.pG,A.ax],x.O)
D.aD5=w([A.bk,A.aC,A.bu,A.di],x.O)
D.frX=new C.vK("Radar","Shows your height above the ground.",0.1,0)
D.frY=new C.vK("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.frV=new C.vK("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aDe=w([D.frX,D.frY,D.frV],x._)
D.dgE=w([-29.5,28.5],x.n)
D.dgK=w([A.bl,A.cm,F.NV,A.cz],x.O)
D.dh7=w([47,100,220,470,1000],x.n)
D.dit=w([0,0.32,0.62,1],x.n)
D.diy=w([A.d0,A.hX,A.d0,A.cz],x.O)
D.Ky={volts:0}
D.a8P=new B.bm(D.Ky,[3],x.J)
D.L0=new B.e1(["b","battery",0.2,0.3,D.a8P])
D.eAG={on:0}
D.dO8=new B.bm(D.eAG,[1],x.J)
D.Fr=new B.e1(["s","switch",0.5,0.3,D.dO8])
D.fpz=new B.e1(["l","bulb",0.8,0.3,A.jK])
D.dbK=w([D.L0,D.Fr,D.fpz],x.d)
D.Fp=new B.b7(["b",0,"s",0])
D.fot=new B.b7(["s",1,"l",0])
D.aUg=new B.b7(["l",1,"b",1])
D.dvL=w([D.Fp,D.fot,D.aUg],x.o)
D.db5=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.ePr=new C.nc("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.dbK,D.dvL,D.db5)
D.aO2={ohms:0}
D.aLC=new B.bm(D.aO2,[220],x.J)
D.foY=new B.e1(["r","resistor",0.5,0.3,D.aLC])
D.fpQ=new B.e1(["d","led",0.8,0.3,A.jK])
D.dzh=w([D.L0,D.foY,D.fpQ],x.d)
D.fnG=new B.b7(["b",0,"r",0])
D.fom=new B.b7(["r",1,"d",0])
D.fnN=new B.b7(["d",1,"b",1])
D.dJx=w([D.fnG,D.fom,D.fnN],x.o)
D.dzK=w(["led","diode","indicator"],x.s)
D.ePy=new C.nc("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dzh,D.dJx,D.dzK)
D.aaj={level:0}
D.dNu=new B.bm(D.aaj,[0.2],x.J)
D.fp4=new B.e1(["p","pot",0.5,0.3,D.dNu])
D.fp6=new B.e1(["m","motor",0.8,0.3,A.jK])
D.dc5=w([D.L0,D.fp4,D.fp6],x.d)
D.fnF=new B.b7(["b",0,"p",0])
D.foh=new B.b7(["p",1,"m",0])
D.foc=new B.b7(["m",1,"b",1])
D.dEB=w([D.fnF,D.foh,D.foc],x.o)
D.dvq=w(["fan","motor","spin","dimmer"],x.s)
D.ePp=new C.nc("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.dc5,D.dEB,D.dvq)
D.a8L=new B.bm(D.aaj,[0.9],x.J)
D.aUp=new B.e1(["s","solar",0.25,0.3,D.a8L])
D.aUo=new B.e1(["l","bulb",0.75,0.3,A.jK])
D.dfe=w([D.aUp,D.aUo],x.d)
D.fop=new B.b7(["s",0,"l",0])
D.fo9=new B.b7(["l",1,"s",1])
D.dd_=w([D.fop,D.fo9],x.o)
D.dFm=w(["solar","sun","without battery","no battery","free"],x.s)
D.ePs=new C.nc("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.dfe,D.dd_,D.dFm)
D.fpV=new B.e1(["c","crank",0.25,0.3,D.a8L])
D.dtt=w([D.fpV,D.aUo],x.d)
D.fnJ=new B.b7(["c",0,"l",0])
D.fo8=new B.b7(["l",1,"c",1])
D.du9=w([D.fnJ,D.fo8],x.o)
D.dtE=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.ePo=new C.nc("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.dtt,D.du9,D.dtE)
D.dNt=new B.bm(D.aaj,[0.7],x.J)
D.fpb=new B.e1(["t","turbine",0.25,0.3,D.dNt])
D.foW=new B.e1(["m","motor",0.75,0.3,A.jK])
D.dn3=w([D.fpb,D.foW],x.d)
D.foB=new B.b7(["t",0,"m",0])
D.fod=new B.b7(["m",1,"t",1])
D.dlS=w([D.foB,D.fod],x.o)
D.ds8=w(["wind","turbine","windmill","water","hydro"],x.s)
D.ePl=new C.nc("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.dn3,D.dlS,D.ds8)
D.aLz=new B.bm(D.Ky,[9],x.J)
D.abq=new B.e1(["b","battery",0.2,0.3,D.aLz])
D.aUm=new B.e1(["r","radio",0.8,0.3,A.jK])
D.dG_=w([D.abq,D.Fr,D.aUm],x.d)
D.fov=new B.b7(["s",1,"r",0])
D.aUi=new B.b7(["r",1,"b",1])
D.cft=w([D.Fp,D.fov,D.aUi],x.o)
D.dEm=w(["radio","music","listen"],x.s)
D.ePx=new C.nc("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dG_,D.cft,D.dEm)
D.dOy=new B.bm(D.Ky,[12],x.J)
D.aUl=new B.e1(["b","battery",0.2,0.3,D.dOy])
D.fpA=new B.e1(["t","tv",0.8,0.3,A.jK])
D.dbM=w([D.aUl,D.Fr,D.fpA],x.d)
D.fow=new B.b7(["s",1,"t",0])
D.aUj=new B.b7(["t",1,"b",1])
D.dx7=w([D.Fp,D.fow,D.aUj],x.o)
D.dFY=w(["tv","television","screen","watch"],x.s)
D.ePi=new C.nc("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.dbM,D.dx7,D.dFY)
D.fpp=new B.e1(["z","buzzer",0.8,0.3,A.jK])
D.cRi=w([D.L0,D.Fr,D.fpp],x.d)
D.fox=new B.b7(["s",1,"z",0])
D.foP=new B.b7(["z",1,"b",1])
D.d5J=w([D.Fp,D.fox,D.foP],x.o)
D.dCx=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.ePu=new C.nc("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cRi,D.d5J,D.dCx)
D.fp5=new B.e1(["h","heater",0.8,0.3,A.jK])
D.dqC=w([D.abq,D.Fr,D.fp5],x.d)
D.fos=new B.b7(["s",1,"h",0])
D.fnW=new B.b7(["h",1,"b",1])
D.d6D=w([D.Fp,D.fos,D.fnW],x.o)
D.cAM=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.ePj=new C.nc("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.dqC,D.d6D,D.cAM)
D.fpC=new B.e1(["s","solar",0.2,0.25,D.a8L])
D.dOD=new B.bm(D.aO2,[100],x.J)
D.fpF=new B.e1(["r","resistor",0.55,0.25,D.dOD])
D.fpO=new B.e1(["c","capacitor",0.85,0.25,A.jK])
D.fp1=new B.e1(["q","resistor",0.55,0.6,D.aLC])
D.fpD=new B.e1(["d","led",0.85,0.6,A.jK])
D.dww=w([D.fpC,D.fpF,D.fpO,D.fp1,D.fpD],x.d)
D.foq=new B.b7(["s",0,"r",0])
D.fol=new B.b7(["r",1,"c",0])
D.fnL=new B.b7(["c",1,"s",1])
D.fnK=new B.b7(["c",0,"q",0])
D.fok=new B.b7(["q",1,"d",0])
D.fnO=new B.b7(["d",1,"c",1])
D.djv=w([D.foq,D.fol,D.fnL,D.fnK,D.fok,D.fnO],x.o)
D.dsJ=w(["capacitor","store","charge","flash"],x.s)
D.ePw=new C.nc("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.dww,D.djv,D.dsJ)
D.fpe=new B.e1(["b","battery",0.15,0.3,D.a8P])
D.fpX=new B.e1(["l1","bulb",0.5,0.3,A.jK])
D.fpm=new B.e1(["l2","bulb",0.85,0.3,A.jK])
D.d9A=w([D.fpe,D.fpX,D.fpm],x.d)
D.fnE=new B.b7(["b",0,"l1",0])
D.fo5=new B.b7(["l1",1,"l2",0])
D.fo6=new B.b7(["l2",1,"b",1])
D.dnU=w([D.fnE,D.fo5,D.fo6],x.o)
D.dFI=w(["series","two bulbs","dim"],x.s)
D.ePm=new C.nc("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.d9A,D.dnU,D.dFI)
D.eB2={volts:0,charge:1}
D.dOH=new B.bm(D.eB2,[1.5,0],x.J)
D.fpL=new B.e1(["b","battery",0.75,0.3,D.dOH])
D.d8S=w([D.aUp,D.fpL],x.d)
D.foo=new B.b7(["s",0,"b",0])
D.fnI=new B.b7(["b",1,"s",1])
D.djQ=w([D.foo,D.fnI],x.o)
D.dsT=w(["charge","rechargeable","flat","recharge"],x.s)
D.ePk=new C.nc("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.d8S,D.djQ,D.dsT)
D.dOx=new B.bm(D.Ky,[4.5],x.J)
D.fp7=new B.e1(["b","battery",0.2,0.3,D.dOx])
D.aUk=new B.e1(["p","phone",0.8,0.3,A.jK])
D.dmS=w([D.fp7,D.Fr,D.aUk],x.d)
D.fou=new B.b7(["s",1,"p",0])
D.abp=new B.b7(["p",1,"b",1])
D.dBf=w([D.Fp,D.fou,D.abp],x.o)
D.dD_=w(["phone","charger","usb","mobile"],x.s)
D.ePq=new C.nc("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.dmS,D.dBf,D.dD_)
D.foT=new B.e1(["f","fan",0.8,0.3,A.jK])
D.csL=w([D.L0,D.foT],x.d)
D.fnD=new B.b7(["b",0,"f",0])
D.fnU=new B.b7(["f",1,"b",1])
D.d7g=w([D.fnD,D.fnU],x.o)
D.dvp=w(["fan","cool","air","wind"],x.s)
D.ePz=new C.nc("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.csL,D.d7g,D.dvp)
D.fpt=new B.e1(["b","battery",0.15,0.2,D.a8P])
D.foU=new B.e1(["a","ammeter",0.5,0.2,A.jK])
D.foS=new B.e1(["l","bulb",0.85,0.2,A.jK])
D.fpv=new B.e1(["v","voltmeter",0.5,0.6,A.jK])
D.dtf=w([D.fpt,D.foU,D.foS,D.fpv],x.d)
D.fnB=new B.b7(["b",0,"a",0])
D.fnz=new B.b7(["a",1,"l",0])
D.foD=new B.b7(["v",0,"l",0])
D.foE=new B.b7(["v",1,"l",1])
D.djH=w([D.fnB,D.fnz,D.aUg,D.foD,D.foE],x.o)
D.dJw=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.ePv=new C.nc("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.dtf,D.djH,D.dJw)
D.fq_=new B.e1(["b","battery",0.15,0.2,D.aLz])
D.fpd=new B.e1(["t","tv",0.55,0.2,A.jK])
D.aLA=new B.bm(D.Ky,[5],x.J)
D.foZ=new B.e1(["c","buck",0.4,0.5,D.aLA])
D.fpf=new B.e1(["p","phone",0.8,0.5,A.jK])
D.dgU=w([D.fq_,D.fpd,D.foZ,D.fpf],x.d)
D.fnH=new B.b7(["b",0,"t",0])
D.aUe=new B.b7(["b",0,"c",0])
D.aUf=new B.b7(["c",1,"p",0])
D.dmP=w([D.fnH,D.aUj,D.aUe,D.aUf,D.abp],x.o)
D.deK=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.ePn=new C.nc("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.dgU,D.dmP,D.deK)
D.fp0=new B.e1(["c","buck",0.5,0.3,D.aLA])
D.d6p=w([D.aUl,D.fp0,D.aUk],x.d)
D.dcg=w([D.aUe,D.aUf,D.abp],x.o)
D.cEk=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.ePh=new C.nc("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.d6p,D.dcg,D.cEk)
D.fpk=new B.e1(["d","diode",0.5,0.3,A.jK])
D.do9=w([D.abq,D.fpk,D.aUm],x.d)
D.fnC=new B.b7(["b",0,"d",0])
D.fnP=new B.b7(["d",1,"r",0])
D.cTS=w([D.fnC,D.fnP,D.aUi],x.o)
D.deo=w(["diode","protect","backwards","one way"],x.s)
D.ePt=new C.nc("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.do9,D.cTS,D.deo)
D.Tt=w([D.ePr,D.ePy,D.ePp,D.ePs,D.ePo,D.ePl,D.ePx,D.ePi,D.ePu,D.ePj,D.ePw,D.ePm,D.ePk,D.ePq,D.ePz,D.ePv,D.ePn,D.ePh,D.ePt],B.as("N<nc>"))
D.i0d=new C.Hi("Moon",1.62,A.d0,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.i0b=new C.Hi("Mars",3.71,A.aC,"Mars has about 38 percent of Earth's gravity.")
D.i0e=new C.Hi("Mercury",3.7,A.kJ,"Mercury is small, so its gravity is like Mars.")
D.i08=new C.Hi("Venus",8.87,A.aQ,"Venus is almost as heavy as Earth, with strong gravity.")
D.i0a=new C.Hi("Earth",9.81,A.aH,"On Earth gravity is strong, and the air also slows you down.")
D.i0c=new C.Hi("Neptune",11.15,A.di,"Neptune pulls a little harder than Earth.")
D.i09=new C.Hi("Jupiter",24.79,A.cW,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.u3=w([D.i0d,D.i0b,D.i0e,D.i08,D.i0a,D.i0c,D.i09],B.as("N<Hi>"))
D.djt=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.dkh=w([0.2,0.5,0.8],x.n)
D.b4s=new C.LB(0,"accordion")
D.d7E=w([A.jZ,A.Af,A.A0],x.x)
D.dge=w(["Mail","SMS","Ad"],x.s)
D.d8l=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hZn=new C.Bj(D.b4s,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aEy,D.d7E,D.dge,D.d8l)
D.aff=new C.LB(1,"flip")
D.dsD=w([A.rr,A.E3,A.ru],x.x)
D.dmx=w(["Unlock","Verify","Secure"],x.s)
D.d6k=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hZm=new C.Bj(D.aff,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.aE3,D.dsD,D.dmx,D.d6k)
D.b4t=new C.LB(2,"towers")
D.dl8=w([A.Ad,A.mG,A.iw],x.x)
D.dkA=w(["Save","Grow","Earn"],x.s)
D.cUT=w(["","",""],x.s)
D.hZo=new C.Bj(D.b4t,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a72,D.dl8,D.dkA,D.cUT)
D.afg=new C.LB(3,"assemble")
D.dtI=w([A.og,A.fP,A.eh],x.x)
D.dft=w(["Launch","Charge","Shine"],x.s)
D.dpA=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hZq=new C.Bj(D.afg,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.aCo,D.dtI,D.dft,D.dpA)
D.b4u=new C.LB(4,"carousel")
D.dtu=w([A.bd,A.ev],x.O)
D.dgp=w([A.np,A.as1,A.R9],x.x)
D.da5=w(["Explore","Discover","Learn"],x.s)
D.dmZ=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hZl=new C.Bj(D.b4u,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.dtu,D.dgp,D.da5,D.dmZ)
D.b4v=new C.LB(5,"burst")
D.dkv=w([A.hZ,A.v0],x.O)
D.d8e=w([A.kn,A.m6,A.hQ],x.x)
D.d8D=w(["Cheer","Win","Love"],x.s)
D.dbe=w(["Make some noise","First place","Share the joy"],x.s)
D.hZp=new C.Bj(D.b4v,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.dkv,D.d8e,D.d8D,D.dbe)
D.aDL=w([D.hZn,D.hZm,D.hZo,D.hZq,D.hZl,D.hZp],B.as("N<Bj>"))
D.fie=new B.b1("skin","Skin",A.a4w)
D.fjZ=new B.b1("muscle","Muscles",A.QI)
D.fjB=new B.b1("organ","Organs",A.hQ)
D.bU1=new B.a0(62747,"MaterialIcons",!1)
D.fjL=new B.b1("bone","Skeleton",D.bU1)
D.fk6=new B.b1("vessel","Blood vessels",A.qa)
D.dle=w([D.fie,D.fjZ,D.fjB,D.fjL,D.fk6],x.r)
D.frZ=new C.vK("Simple legs","Light. Land gently.",0.15,0.2)
D.fs0=new C.vK("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.fs3=new C.vK("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.Eq=w([D.frZ,D.fs0,D.fs3],x._)
D.fn9=new B.b7(["beat",0.18,0.28,0])
D.foy=new B.b7(["burst",0.7,0.2,0])
D.foJ=new B.b7(["delay",0.45,0.5,1])
D.fof=new B.b7(["ripple",0.75,0.6,3])
D.df9=w([D.fn9,D.foy,D.foJ,D.fof],x.e)
D.drT=w([Q.lm,R.KZ,F.W1],x.u)
D.hWd=new C.H3("First spark","A clock lights a burst and a ripple",D.df9,D.drT)
D.fnT=new B.b7(["beat",0.15,0.3,1])
D.flq=new B.b7(["ripple",0.62,0.15,0])
D.foF=new B.b7(["delay",0.4,0.45,0])
D.fnv=new B.b7(["ripple",0.7,0.45,0])
D.fn4=new B.b7(["delay",0.4,0.7,1])
D.foi=new B.b7(["shake",0.75,0.75,0])
D.dGZ=w([D.fnT,D.flq,D.foF,D.fnv,D.fn4,D.foi],x.e)
D.eRs=new B.y(2,4)
D.aTT=new B.y(4,5)
D.djh=w([Q.lm,R.KZ,F.W1,D.eRs,D.aTT],x.u)
D.hWf=new C.H3("Heartbeat","Two thumps, then a shake",D.dGZ,D.djh)
D.fnf=new B.b7(["dice",0.15,0.7,1])
D.foL=new B.b7(["echo",0.4,0.7,0])
D.fnr=new B.b7(["comet",0.7,0.5,4])
D.foz=new B.b7(["burst",0.72,0.2,1])
D.fnQ=new B.b7(["burst",0.3,0.25,0])
D.fng=new B.b7(["pop",0.55,0.85,0])
D.cAj=w([D.fnf,D.foL,D.fnr,D.foz,D.fnQ,D.fng],x.e)
D.eQM=new B.y(1,3)
D.eQN=new B.y(1,4)
D.aTP=new B.y(0,5)
D.dto=w([Q.lm,S.wf,D.eQM,D.eQN,D.aTP],x.u)
D.hWe=new C.H3("Fireworks","Dice launch comets that burst in colour",D.cAj,D.dto)
D.fnn=new B.b7(["beat",0.15,0.2,2])
D.fo2=new B.b7(["chance",0.4,0.2,0])
D.fnc=new B.b7(["ball",0.7,0.12,3])
D.fmY=new B.b7(["chance",0.4,0.5,1])
D.foK=new B.b7(["ball",0.3,0.08,1])
D.fmf=new B.b7(["ripple",0.7,0.55,3])
D.ctf=w([D.fnn,D.fo2,D.fnc,D.fmY,D.foK,D.fmf],x.e)
D.eRt=new B.y(2,5)
D.cR1=w([Q.lm,S.wf,R.abg,F.W2,D.eRt],x.u)
D.hWc=new C.H3("Rain","Balls fall at random and splash",D.ctf,D.cR1)
D.fo3=new B.b7(["beat",0.12,0.45,2])
D.foA=new B.b7(["toggle",0.38,0.2,0])
D.foH=new B.b7(["wash",0.7,0.15,4])
D.fne=new B.b7(["count3",0.38,0.45,0])
D.foC=new B.b7(["burst",0.72,0.4,0])
D.fnR=new B.b7(["light",0.55,0.7,1])
D.fmZ=new B.b7(["pop",0.8,0.8,4])
D.dwu=w([D.fo3,D.foA,D.foH,D.fne,D.foC,D.fnR,D.fmZ],x.e)
D.eS_=new B.y(3,6)
D.cws=w([Q.lm,S.wf,R.abg,F.W2,D.aTP,D.eS_],x.u)
D.hWa=new C.H3("Disco","A beat drives lights, washes and bursts",D.dwu,D.cws)
D.foO=new B.b7(["button",0.12,0.2,0])
D.fmG=new B.b7(["delay",0.34,0.2,1])
D.foN=new B.b7(["light",0.56,0.2,1])
D.foG=new B.b7(["delay",0.56,0.45,1])
D.fo4=new B.b7(["ball",0.34,0.6,0])
D.fmX=new B.b7(["delay",0.34,0.8,1])
D.flg=new B.b7(["burst",0.7,0.8,5])
D.cgi=w([D.foO,D.fmG,D.foN,D.foG,D.fo4,D.fmX,D.flg],x.e)
D.eUf=new B.y(5,6)
D.dCI=w([Q.lm,S.wf,F.W1,F.W2,D.aTT,D.eUf],x.u)
D.hWb=new C.H3("Domino","Tap the button and watch it run down the line",D.cgi,D.dCI)
D.aE7=w([D.hWd,D.hWf,D.hWe,D.hWc,D.hWa,D.hWb],B.as("N<H3>"))
D.dr4=w([0.05,0.15,0.25],x.n)
D.ds6=w([1.5,3,4.5,9,12],x.n)
D.fgr=new B.b1("dice","Dice",A.oa)
D.fhL=new B.b1("coin","Coin",V.A6)
D.fk1=new B.b1("num","Number",A.xA)
D.dsl=w([D.fgr,D.fhL,D.fk1],x.r)
D.dsp=w(["skin","muscle","organ","bone","vessel"],x.s)
D.aEd=w([A.c1,A.aQ,A.bf,A.aH,A.bj,A.c5,A.cW,A.fK],x.O)
D.dtv=w([A.c5,A.aH,A.eI,A.bf],x.O)
D.duE=w([],x.h)
D.eIw=new C.es("battery","Battery","\ud83d\udd0b",A.bf,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.eIC=new C.es("solar","Solar panel","\u2600\ufe0f",A.bu,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.eJg=new C.es("crank","Hand crank","\ud83d\udd04",A.cW,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.eIT=new C.es("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aH,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.eIo=new C.es("buck","Step-down converter","\ud83d\udd3d",A.fK,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.eIR=new C.es("regulator","5 V regulator","\ud83e\uddca",A.bQ,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.eJl=new C.es("diode","Diode","\u27a1\ufe0f",A.aQ,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.eJ2=new C.es("ldr","Light sensor","\ud83c\udf1e",A.eI,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.eIH=new C.es("switch","Switch","\ud83c\udf9a\ufe0f",A.bj,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.eJi=new C.es("fuse","Fuse","\ud83e\uddef",A.c1,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.eIg=new C.es("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.fK,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.eJ3=new C.es("resistor","Resistor","\u3030\ufe0f",A.aQ,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.eJ5=new C.es("bulb","Light bulb","\ud83d\udca1",A.eI,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.eIE=new C.es("led","LED","\ud83d\udd34",A.aC,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.eII=new C.es("motor","Motor","\u2699\ufe0f",A.bQ,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.eJ_=new C.es("buzzer","Buzzer","\ud83d\udd14",A.c5,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.eIx=new C.es("heater","Heater","\ud83d\udd25",A.cW,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.eIV=new C.es("capacitor","Capacitor","\ud83e\udeab",A.cw,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.eIN=new C.es("radio","Radio","\ud83d\udcfb",A.oN,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.eIK=new C.es("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.bd,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.eIn=new C.es("voltmeter","Voltmeter","\ud83e\udded",A.bw,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.eIu=new C.es("ammeter","Ammeter","\ud83d\udcdf",A.aQ,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.eIA=new C.es("fan","Fan","\ud83c\udf00",A.aH,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.eJn=new C.es("speaker","Speaker","\ud83d\udd0a",A.c5,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.eJc=new C.es("clock","Digital clock","\u23f0",A.bf,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.eIQ=new C.es("calculator","Calculator","\ud83e\uddee",A.Nt,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.eIt=new C.es("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cw,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.eJm=new C.es("router","WiFi router","\ud83d\udcf6",A.fK,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.eJp=new C.es("siren","Siren","\ud83d\udea8",A.aC,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.eIj=new C.es("toycar","Toy car","\ud83d\ude97",A.cW,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.eJq=new C.es("kettle","Kettle","\ud83e\uded6",A.ne,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.eIr=new C.es("lamp","Desk lamp","\ud83e\ude94",A.eI,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.eID=new C.es("lights","Party lights","\ud83c\udf84",A.oN,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.eIO=new C.es("fridge","Fridge","\ud83e\uddca",A.hm,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.eIl=new C.es("washer","Washing machine","\ud83e\udee7",A.cw,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.eJd=new C.es("blender","Blender","\ud83e\udd64",A.c1,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.eIL=new C.es("drone","Drone","\ud83d\ude81",A.bQ,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.eIq=new C.es("drill","Power drill","\ud83d\udd29",A.aQ,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.eIP=new C.es("torch","Torch","\ud83d\udd26",A.bN,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.eJa=new C.es("neon","Neon sign","\ud83e\udea7",A.c5,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.eIm=new C.es("microwave","Microwave","\ud83c\udf72",A.cW,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.eJ4=new C.es("doorbell","Doorbell","\ud83d\udd14",A.bu,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.eIz=new C.es("camera","Security camera","\ud83d\udcf7",A.an,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.eIZ=new C.es("console","Game console","\ud83c\udfae",A.bj,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.eJf=new C.es("heartmon","Heart monitor","\ud83e\ude7a",A.hJ,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.eIk=new C.es("aquarium","Aquarium","\ud83d\udc20",A.bd,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.eIU=new C.es("lighthouse","Lighthouse","\ud83d\uddfc",A.eI,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.eJ1=new C.es("discoball","Disco ball","\ud83e\udea9",A.oN,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.eJk=new C.es("robot","Robot","\ud83e\udd16",A.aH,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.eIi=new C.es("toaster","Toaster","\ud83c\udf5e",A.ec,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.eJo=new C.es("ledstrip","LED strip","\ud83c\udf08",A.c5,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.eJ9=new C.es("pump","Water pump","\ud83d\udeb0",A.aH,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.eIW=new C.es("hairdryer","Hair dryer","\ud83d\udca8",A.hZ,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.eJ7=new C.es("headphones","Headphones","\ud83c\udfa7",A.bj,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.eIs=new C.es("smartwatch","Apple Watch Ultra","\u231a",A.bw,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.eJj=new C.es("tablet","iPad Pro M5","\ud83d\udcf2",A.cw,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.eIf=new C.es("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hJ,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.eIM=new C.es("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bv,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.eIF=new C.es("appletv","Apple TV 4K","\ud83d\udcfa",A.bP,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.eJ0=new C.es("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.wQ,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.eIh=new C.es("iphonefold","iPhone Fold","\ud83d\udcf1",A.b_,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.eIv=new C.es("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.di,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.eJh=new C.es("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cI,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.eIX=new C.es("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bk,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.eIS=new C.es("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.c8,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.eJ8=new C.es("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.aC,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.eIG=new C.es("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.bf,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.eIY=new C.es("honor","Honor Magic V5","\ud83d\udcf1",A.cw,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.eJ6=new C.es("vivo","vivo X300 Pro","\ud83d\udcf1",A.cW,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.eJb=new C.es("ereader","Kindle Scribe","\ud83d\udcd6",A.bv,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.eIe=new C.es("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.ci,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.eIJ=new C.es("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cI,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.eIB=new C.es("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.bd,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.eIp=new C.es("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.eI,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.eIy=new C.es("carscreen","Luxury car touchscreen","\ud83d\ude98",A.aC,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.eJe=new C.es("vision","Apple Vision Pro","\ud83e\udd7d",A.bj,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.TT=w([D.eIw,D.eIC,D.eJg,D.eIT,D.eIo,D.eIR,D.eJl,D.eJ2,D.eIH,D.eJi,D.eIg,D.eJ3,D.eJ5,D.eIE,D.eII,D.eJ_,D.eIx,D.eIV,D.eIN,D.eIK,D.eIn,D.eIu,D.eIA,D.eJn,D.eJc,D.eIQ,D.eIt,D.eJm,D.eJp,D.eIj,D.eJq,D.eIr,D.eID,D.eIO,D.eIl,D.eJd,D.eIL,D.eIq,D.eIP,D.eJa,D.eIm,D.eJ4,D.eIz,D.eIZ,D.eJf,D.eIk,D.eIU,D.eJ1,D.eJk,D.eIi,D.eJo,D.eJ9,D.eIW,D.eJ7,D.eIs,D.eJj,D.eIf,D.eIM,D.eIF,D.eJ0,D.eIh,D.eIv,D.eJh,D.eIX,D.eIS,D.eJ8,D.eIG,D.eIY,D.eJ6,D.eJb,D.eIe,D.eIJ,D.eIB,D.eIp,D.eIy,D.eJe],B.as("N<es>"))
D.dvj=w([5,10,15,25,45,60],x.t)
D.dvH=w([-0.045,0.03,-0.015],x.n)
D.aEG=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.vV=w([0.05,0.2,0.35],x.n)
D.aEK=w([A.d0,A.iL,A.v3,A.GK],x.O)
D.bcm=new B.aa(0,A.H,A.i0,A.dS,6)
D.dyI=w([D.bcm],x.V)
D.ePV=new B.y(0,"AND")
D.eQP=new B.y(1,"Adder")
D.eRu=new B.y(2,"Blinker")
D.eS0=new B.y(3,"Memory")
D.dzv=w([D.ePV,D.eQP,D.eRu,D.eS0],x.L)
D.aEU=w([-104,0,104],x.n)
D.aEW=w([-14,3],x.n)
D.dAv=w([-8,0,8],x.n)
D.aF3=w([-92,0,92],x.n)
D.dAZ=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.frW=new C.vK("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.fs2=new C.vK("Medium tank","Balanced.",0.35,1)
D.fs1=new C.vK("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.U8=w([D.frW,D.fs2,D.fs1],x._)
D.ol=w([0.04,0.2,0.36],x.n)
D.aFf=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.fjA=new B.b1(D.b4s,"Fold",V.asZ)
D.fiu=new B.b1(D.aff,"Flip",A.DL)
D.bUi=new B.a0(62889,"MaterialIcons",!1)
D.fjY=new B.b1(D.b4t,"Rise",D.bUi)
D.atb=new B.a0(983870,"MaterialIcons",!1)
D.ffM=new B.b1(D.afg,"Assemble",D.atb)
D.ffZ=new B.b1(D.b4u,"Spin",D.arE)
D.ffT=new B.b1(D.b4v,"Pop",A.kn)
D.dCF=w([D.fjA,D.fiu,D.fjY,D.ffM,D.ffZ,D.ffT],B.as("N<+(LB,n,a0)>"))
D.aFk=w([A.c5,A.eI,A.bw,A.aH,A.bj,A.c1],x.O)
D.dD5=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dEb=w([3,4.5,5,6,9],x.n)
D.bd1=new B.aa(0,A.H,A.b9,A.J,16)
D.dEF=w([D.bd1],x.V)
D.h9z=new B.D("\ud83e\uddcd",null,S.LS,null,null,null,null,null,null,null,null,null)
D.cff=new B.Ja(5,null,null,A.by,A.c5,null,null,null,null)
D.fz0=new B.a4(150,null,D.cff,null)
D.fRw=new B.F(!0,A.ab,null,null,null,null,14,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hcT=new B.D("Getting the body ready...",null,D.fRw,null,null,null,null,null,null,null,null,null)
D.h9C=new B.D("Real 3D anatomy, kept on your phone",null,Af.BB,null,null,null,null,null,null,null,null,null)
D.dEI=w([D.h9z,A.aB,D.fz0,A.af,D.hcT,A.at,D.h9C],x.p)
D.dFh=w(["solar","turbine","crank","pot"],x.s)
D.dFM=w([0,0.35,0.75,1],x.n)
D.dHe=w(["volts","level","ohms","on"],x.s)
D.boN=new B.u(1,0.23137254901960785,0.43529411764705883,0.8470588235294118,A.q)
D.bzX=new B.u(1,0.0392156862745098,0.10196078431372549,0.25098039215686274,A.q)
D.dHi=w([A.akZ,D.boN,A.m0,D.bzX],x.O)
D.dIQ=w([A.jZ,A.Af,A.A0,A.rr,A.E3,A.ru,A.Ad,A.mG,A.iw,A.og,A.fP,A.eh,A.hQ,A.ih,A.m6,A.kP,A.rt,A.q8,A.lH,A.Io,A.vH,A.DK,A.DI,A.R6,A.In,A.DU,A.QI,A.asn,H.at7,A.kn],x.x)
D.eym={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.hO8=new C.yY("Switch",F.p4,A.bu,0,"Tap it to turn it ON or OFF.")
D.hO4=new C.yY("Blinker",A.mF,A.bw,0,"Turns itself ON and OFF. Tap to change the speed.")
D.hO5=new C.yY("AND",D.atb,A.cw,2,"ON only when BOTH inputs are ON.")
D.bVP=new B.a0(63671,"MaterialIcons",!1)
D.hO3=new C.yY("OR",D.bVP,A.bj,2,"ON when EITHER input is ON.")
D.hO6=new C.yY("XOR",A.a4o,A.c5,2,"ON when the inputs are DIFFERENT.")
D.hO0=new C.yY("NAND",A.tM,A.aH,2,"OFF only when BOTH inputs are ON.")
D.bUT=new B.a0(63176,"MaterialIcons",!1)
D.hO1=new C.yY("NOR",D.bUT,A.fK,2,"ON only when BOTH inputs are OFF.")
D.hO2=new C.yY("NOT",W.DW,A.cW,1,"Flips the signal: ON becomes OFF.")
D.hO7=new C.yY("Light",A5.lf,A.eI,1,"Glows when its input is ON.")
D.hO9=new C.yY("Buzzer",T.p6,A.c1,1,"Beeps while its input is ON.")
D.AV=new B.bm(D.eym,[D.hO8,D.hO4,D.hO5,D.hO3,D.hO6,D.hO0,D.hO1,D.hO2,D.hO7,D.hO9],B.as("bm<n,yY>"))
D.eAb={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22,smartwatch:23}
D.Bm=new C.Kz(0,"tv")
D.ftw=new C.mn("Samsung Neo QLED 8K",D.Bm,F.z2,A.aH)
D.ftm=new C.mn("LG OLED evo G5",D.Bm,A.ez,A.hJ)
D.ftd=new C.mn("Sony Bravia 9",D.Bm,A.t9,A.bv)
D.fth=new C.mn("Apple TV 4K",D.Bm,A.dU,A.bP)
D.fte=new C.mn("Bang and Olufsen Beovision",D.Bm,F.Co,F.wQ)
D.abB=new C.Kz(1,"iphone")
D.aUM=new C.mn("iPhone 18 Pro Max",D.abB,D.amx,A.ci)
D.Bo=new C.Kz(3,"fold")
D.bAa=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.ftr=new C.mn("iPhone Fold",D.Bo,D.bAa,A.b_)
D.Bn=new C.Kz(2,"android")
D.fts=new C.mn("Samsung Galaxy S26 Ultra",D.Bn,F.Nq,A.di)
D.bsq=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.ftk=new C.mn("Samsung Galaxy Z Fold7",D.Bo,D.bsq,A.cI)
D.ftg=new C.mn("Google Pixel 10 Pro XL",D.Bn,A.d0,A.bk)
D.fto=new C.mn("Xiaomi 16 Ultra",D.Bn,A.iu,A.c8)
D.ftj=new C.mn("Huawei Mate 80 Pro Max",D.Bn,A.eu,A.aC)
D.ftf=new C.mn("OPPO Find X9 Ultra",D.Bn,A.ej,A.bf)
D.fty=new C.mn("Honor Magic V5",D.Bo,A.dl,A.cw)
D.ftl=new C.mn("vivo X300 Pro",D.Bn,A.h_,A.cW)
D.aUN=new C.Kz(4,"tablet")
D.ftq=new C.mn("iPad Pro M5",D.aUN,A.d0,A.aH)
D.abC=new C.Kz(5,"reader")
D.ftz=new C.mn("Kindle Scribe",D.abC,A.cU,A.bv)
D.y1=new C.Kz(6,"computer")
D.ftp=new C.mn("MacBook Pro M5 Max",D.y1,A.d0,A.ci)
D.ftv=new C.mn("iMac 32 inch",D.y1,A.bP,A.cI)
D.ftn=new C.mn("Pro Display XDR 8K",D.y1,A.iu,A.bd)
D.fti=new C.mn("Sony Laser Projector",D.y1,A.cx,A.eI)
D.ftt=new C.mn("Luxury car touchscreen",D.y1,M.ni,A.aC)
D.ftx=new C.mn("Apple Vision Pro",D.y1,A.cz,A.bj)
D.ftu=new C.mn("Apple Watch Ultra",D.Bo,F.Co,A.bw)
D.mN=new B.bm(D.eAb,[D.ftw,D.ftm,D.ftd,D.fth,D.fte,D.aUM,D.ftr,D.fts,D.ftk,D.ftg,D.fto,D.ftj,D.ftf,D.fty,D.ftl,D.ftq,D.ftz,D.ftp,D.ftv,D.ftn,D.fti,D.ftt,D.ftx,D.ftu],B.as("bm<n,mn>"))
D.d6W=w([A.z],x.M)
D.d7q=w([A.aw,A.aD],x.M)
D.did=w([A.aw,A.z,A.aD],x.M)
D.djX=w([A.aw,A.lU,A.z,A.ls,A.aD],x.M)
D.dzr=w([A.aw,A.lU,A.a5,A.a9,A.ls,A.aD],x.M)
D.dNY=new B.d1([1,D.d6W,2,D.d7q,3,D.did,4,A.aFW,5,D.djX,6,D.dzr],B.as("d1<G,ai<dj>>"))
D.eB_={Calm:0,Box:1,Sleep:2}
D.cOl=w([4,2,6,0],x.n)
D.cOs=w([4,4,4,4],x.n)
D.cOt=w([4,7,8,0],x.n)
D.UB=new B.bm(D.eB_,[D.cOl,D.cOs,D.cOt],B.as("bm<n,ai<H>>"))
D.eyy={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.yB=new C.a2w(0,"source")
D.djl=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hUR=new C.qL("Clock",A.mF,D.yB,A.bw,D.djl)
D.hUN=new C.qL("Button",A.DZ,D.yB,A.aQ,A.M)
D.dEo=w(["random","quick","slow"],x.s)
D.hUY=new C.qL("Dice",A.oa,D.yB,A.c5,D.dEo)
D.bVr=new B.a0(63484,"MaterialIcons",!1)
D.G9=new C.a2w(1,"logic")
D.dJM=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hUU=new C.qL("Delay",D.bVr,D.G9,A.cw,D.dJM)
D.dvr=w(["fast","mid","slow"],x.s)
D.hUZ=new C.qL("Echo",A.asD,D.G9,A.bj,D.dvr)
D.hUW=new C.qL("Every 2nd",W.DW,D.G9,A.fK,A.M)
D.bV7=new B.a0(63309,"MaterialIcons",!1)
D.hUT=new C.qL("Every 3rd",D.bV7,D.G9,A.aH,A.M)
D.cfA=w(["50%","25%","75%"],x.s)
D.hV0=new C.qL("Chance",A8.atd,D.G9,A.cW,D.cfA)
D.rX=new C.a2w(2,"out")
D.hUP=new C.qL("Light",A5.lf,D.rX,A.eI,A.M)
D.hUQ=new C.qL("Burst",A.kn,D.rX,A.c5,A.M)
D.hUO=new C.qL("Ripple",A.Ak,D.rX,A.bd,A.M)
D.hUX=new C.qL("Ball",A.asQ,D.rX,A.cW,A.M)
D.hUV=new C.qL("Comet",A.og,D.rX,A.bj,A.M)
D.bWX=new B.a0(983669,"MaterialIcons",!1)
D.hV_=new C.qL("Shake",D.bWX,D.rX,A.c1,A.M)
D.hV1=new C.qL("Pop",A.DG,D.rX,A.bf,A.M)
D.hUS=new C.qL("Wash",A.QM,D.rX,A.pL,A.M)
D.nt=new B.bm(D.eyy,[D.hUR,D.hUN,D.hUY,D.hUU,D.hUZ,D.hUW,D.hUT,D.hV0,D.hUP,D.hUQ,D.hUO,D.hUX,D.hUV,D.hV_,D.hV1,D.hUS],B.as("bm<n,qL>"))
D.eyZ={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bCY=new C.h5(20,4,13,!1)
D.bDo=new C.h5(14,5,13.5,!1)
D.bDf=new C.h5(9,2.4,10,!1)
D.bDt=new C.h5(7,5,12.5,!1)
D.bDi=new C.h5(8,3.5,12,!1)
D.bCU=new C.h5(15,2,6,!1)
D.bDr=new C.h5(45,6,13.5,!0)
D.bD9=new C.h5(10,8,13.5,!1)
D.bD1=new C.h5(25,3,12,!0)
D.bD7=new C.h5(35,4,12,!0)
D.bD8=new C.h5(40,4.5,9.5,!0)
D.bDa=new C.h5(55,3,9,!0)
D.bCV=new C.h5(18,3,9,!1)
D.bDq=new C.h5(22,4,13.5,!1)
D.bDj=new C.h5(16,5,13.5,!1)
D.bD5=new C.h5(30,4,9,!0)
D.bDC=new C.h5(5,3.5,13,!1)
D.bDd=new C.h5(25,3,13.5,!0)
D.bDm=new C.h5(14,2.5,9,!1)
D.bDc=new C.h5(6,6,13,!1)
D.bDu=new C.h5(30,1.2,5,!0)
D.bDB=new C.h5(35,3,4.5,!0)
D.bDx=new C.h5(20,4.5,7.5,!0)
D.bDb=new C.h5(55,5.5,13.5,!0)
D.bCT=new C.h5(45,5.5,13.5,!0)
D.bDn=new C.h5(40,5.5,13.5,!0)
D.bDA=new C.h5(60,6,13.5,!0)
D.an2=new C.h5(28,4,7,!0)
D.HB=new C.h5(25,4,7,!0)
D.bD4=new C.h5(30,4,7,!0)
D.bD_=new C.h5(22,4,7,!0)
D.bD0=new C.h5(24,4,7,!0)
D.bDe=new C.h5(60,3,5.5,!0)
D.bCW=new C.h5(18,9,14,!0)
D.bD2=new C.h5(25,9,14,!0)
D.an3=new C.h5(30,8,14,!0)
D.bCZ=new C.h5(20,8,14,!0)
D.bD6=new C.h5(30,9,14,!0)
D.bDv=new C.h5(22,5,9.5,!0)
D.bCX=new C.h5(30,2.5,10.5,!0)
D.bDk=new C.h5(50,5.5,13.5,!0)
D.bDz=new C.h5(12,2,9.5,!1)
D.bDh=new C.h5(16,1.3,9.5,!0)
D.bDs=new C.h5(40,2.5,7,!0)
D.bDy=new C.h5(60,1.2,4.8,!0)
D.bDw=new C.h5(18,5,13.5,!0)
D.bDp=new C.h5(8,2,9.5,!1)
D.bDg=new C.h5(12,2.5,8,!1)
D.bD3=new C.h5(20,3.5,13.5,!0)
D.bDl=new C.h5(3.5,3,13,!1)
D.AW=new B.bm(D.eyZ,[D.bCY,D.bDo,D.bDf,D.bDt,D.bDi,D.bCU,D.bDr,D.bD9,D.bD1,D.bD7,D.bD8,D.bDa,D.bCV,D.bDq,D.bDj,D.bD5,D.bDC,D.bDd,D.bDm,D.bDc,D.bDu,D.bDB,D.bDx,D.bDb,D.bCT,D.bDn,D.bDA,D.an2,D.HB,D.bD4,D.HB,D.bD_,D.HB,D.bD0,D.an2,D.HB,D.bDe,D.bCW,D.bD2,D.an3,D.bCZ,D.bD6,D.bDv,D.bCX,D.bDk,D.bDz,D.bDh,D.bDs,D.bDy,D.HB,D.an3,D.bDw,D.bDp,D.bDg,D.bD3,D.bDl],B.as("bm<n,h5>"))
D.eyv={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.ffg=new B.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eUc=new B.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eU7=new B.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.f6a=new B.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.f78=new B.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.f66=new B.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eS9=new B.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.f3V=new B.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.ffo=new B.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.f7v=new B.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eXK=new B.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eRO=new B.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eWJ=new B.y("Movement","They pull your legs together and help you balance.")
D.eYL=new B.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eUl=new B.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.fcC=new B.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.fdP=new B.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.f3F=new B.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.fdx=new B.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.f27=new B.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.f7D=new B.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eRV=new B.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eZ8=new B.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.f7h=new B.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.f2v=new B.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.fdG=new B.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.f5A=new B.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eS7=new B.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.f8f=new B.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.fcd=new B.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.faa=new B.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eQ7=new B.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.f5h=new B.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.f5m=new B.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.eZU=new B.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eUD=new B.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.eYx=new B.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.f48=new B.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.fb3=new B.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.ffl=new B.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.f7A=new B.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.ePN=new B.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.f4k=new B.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.eQH=new B.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.fbj=new B.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.fcy=new B.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.f4N=new B.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.fbz=new B.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eRX=new B.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.fdb=new B.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eW4=new B.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.faG=new B.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eZy=new B.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.f2p=new B.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.f7W=new B.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.fdl=new B.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.fdd=new B.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.fdh=new B.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.f2Y=new B.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.f8U=new B.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.fa7=new B.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.fcY=new B.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.f4M=new B.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.f0E=new B.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.f_m=new B.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.f5b=new B.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.f7P=new B.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.f1d=new B.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.f1V=new B.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eWt=new B.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.fcu=new B.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eXj=new B.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.eQE=new B.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.eZT=new B.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.eQz=new B.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eV8=new B.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.eZY=new B.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eXs=new B.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.f8b=new B.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eYO=new B.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.ff1=new B.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.f_w=new B.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.f2Q=new B.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.f5I=new B.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eXC=new B.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eXl=new B.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dP7=new B.bm(D.eyv,[D.ffg,D.eUc,D.eU7,D.f6a,D.f78,D.f66,D.eS9,D.f3V,D.ffo,D.f7v,D.eXK,D.eRO,D.eWJ,D.eYL,D.eUl,D.fcC,D.fdP,D.f3F,D.fdx,D.f27,D.f7D,D.eRV,D.eZ8,D.f7h,D.f2v,D.fdG,D.f5A,D.eS7,D.f8f,D.fcd,D.faa,D.eQ7,D.f5h,D.f5m,D.eZU,D.eUD,D.eYx,D.f48,D.fb3,D.ffl,D.f7A,D.ePN,D.f4k,D.eQH,D.fbj,D.fcy,D.f4N,D.fbz,D.eRX,D.fdb,D.eW4,D.faG,D.eZy,D.f2p,D.f7W,D.fdl,D.fdd,D.fdh,D.f2Y,D.f8U,D.fa7,D.fcY,D.f4M,D.f0E,D.f_m,D.f5b,D.f7P,D.f1d,D.f1V,D.eWt,D.fcu,D.eXj,D.eQE,D.eZT,D.eQz,D.eV8,D.eZY,D.eXs,D.f8b,D.eYO,D.ff1,D.f_w,D.f2Q,D.f5I,D.eXC,D.eXl],B.as("bm<n,+(n,n)>"))
D.dY0=new C.Wl(null)
D.dYd=new C.Wm(null)
D.e_h=new C.Ws(null)
D.e3h=new C.X2(null)
D.e3l=new C.X3(null)
D.e3U=new C.Xb(null)
D.e7P=new C.XO(null)
D.e8M=new C.XP(null)
D.ecZ=new C.XU(null)
D.esS=new C.XV(null)
D.esV=new C.Y_(null)
D.ev4=new C.Yj(null)
D.ev5=new C.aax(null)
D.ex8=new C.Ys(null)
D.eBd=new B.r(0,118)
D.eBe=new B.r(0,13)
D.eBf=new B.r(0,17)
D.eBi=new B.r(0,330)
D.eBp=new B.r(0,-17)
D.eBq=new B.r(0,-18)
D.eBr=new B.r(0,-19)
D.eBt=new B.r(0,-28)
D.eBv=new B.r(0,-31)
D.eBw=new B.r(0,-32)
D.eBC=new B.r(-9.5,-11)
D.eBF=new B.r(10,20)
D.eBI=new B.r(10,-13)
D.eBK=new B.r(10,-22)
D.eBL=new B.r(10,-4)
D.eBP=new B.r(11,0)
D.aaq=new B.r(11,8)
D.eBV=new B.r(12,2)
D.eBW=new B.r(14,0)
D.eBX=new B.r(14,12)
D.aOi=new B.r(14,8)
D.eBY=new B.r(14,-17)
D.aOk=new B.r(14,-3)
D.aOl=new B.r(14,-4)
D.eC0=new B.r(15,0)
D.eC1=new B.r(15,-12)
D.eC4=new B.r(16,-8)
D.eC5=new B.r(18,14)
D.aOr=new B.r(20,0)
D.eCd=new B.r(20,15)
D.eCe=new B.r(20,-3)
D.eCf=new B.r(21,8)
D.eCg=new B.r(21,-36)
D.eCk=new B.r(22,10)
D.aOt=new B.r(22,8)
D.eCl=new B.r(22,-25)
D.eCm=new B.r(24,0)
D.eCn=new B.r(24,2)
D.eCq=new B.r(24,-18)
D.eCr=new B.r(24,-22)
D.eCv=new B.r(25,8)
D.eCw=new B.r(26,0)
D.eCA=new B.r(28,-30)
D.eCH=new B.r(30,18)
D.eCI=new B.r(30,2)
D.eCL=new B.r(31,19)
D.eCN=new B.r(32,0)
D.aOx=new B.r(34,0)
D.aOy=new B.r(34,-32)
D.KD=new B.r(36,0)
D.eD_=new B.r(3,-1)
D.eD2=new B.r(40,3)
D.eDg=new B.r(4,11)
D.eDj=new B.r(4,-2)
D.eDn=new B.r(5,0)
D.eDo=new B.r(5,17)
D.eDp=new B.r(5,6)
D.eDu=new B.r(6,11)
D.eDw=new B.r(7,-19)
D.eDC=new B.r(8,7)
D.eDD=new B.r(8,-10)
D.eDE=new B.r(8,-14)
D.aOD=new B.r(9,0)
D.eDO=new B.r(-20.5,-17.6)
D.eDR=new B.r(-2.6,-1)
D.eE_=new B.r(2.6,1)
D.eE7=new B.r(-9,12.2)
D.eEL=new B.r(-10,12)
D.aOK=new B.r(-10,4)
D.eEP=new B.r(-11,0)
D.eER=new B.r(-11,-34)
D.eEV=new B.r(-12,-5)
D.eEW=new B.r(-14,0)
D.eEX=new B.r(-14,13)
D.eEY=new B.r(-14,-19)
D.eF_=new B.r(-14,-23)
D.eF0=new B.r(-15,6)
D.eF3=new B.r(-16,14)
D.eF5=new B.r(-16,-8)
D.eF6=new B.r(-17,10)
D.eF7=new B.r(-17,-18)
D.eF8=new B.r(-17,-8)
D.eFa=new B.r(-18,20)
D.eFb=new B.r(-18,-9)
D.aON=new B.r(-20,0)
D.eFd=new B.r(-20,16)
D.eFe=new B.r(-20,-9)
D.Vw=new B.r(-22,8)
D.eFf=new B.r(-22,-10)
D.eFg=new B.r(-24,10)
D.eFh=new B.r(-24,11)
D.eFi=new B.r(-24,14)
D.eFj=new B.r(-24,-22)
D.eFl=new B.r(-25,-11)
D.eFm=new B.r(-26,0)
D.eFn=new B.r(-26,-18)
D.eFo=new B.r(-27,-24)
D.eFp=new B.r(-28,-36)
D.eFq=new B.r(-2,9)
D.eFr=new B.r(-2,-10)
D.eFs=new B.r(-2,-20)
D.eFv=new B.r(-2,-9)
D.eFx=new B.r(-32,0)
D.aOP=new B.r(-34,0)
D.eFC=new B.r(-40,3)
D.eFE=new B.r(-4,11)
D.eFF=new B.r(-4,-17)
D.eFG=new B.r(-4,-2)
D.eFK=new B.r(-5,0)
D.eFL=new B.r(-5,20)
D.eFM=new B.r(-5,6)
D.eFN=new B.r(-6,6)
D.eFO=new B.r(-6,-42)
D.aOR=new B.r(-7,-19)
D.eFQ=new B.r(-7,-24)
D.eFR=new B.r(-8,-1)
D.eFU=new B.r(-8,-9)
D.aaz=new B.r(-9,0)
D.eFV=new B.r(-9,1)
D.eFX=new B.r(-9,-23)
D.h0J=new B.D("Thinking\u2026",null,N.hI,null,null,null,null,null,null,null,null,null)
D.eGX=new B.C(A.jE,D.h0J,null)
D.hhJ=new B.D("Start from a ready-made board",null,A.fT,null,null,null,null,null,null,null,null,null)
D.eHa=new B.C(A.xa,D.hhJ,null)
D.bL3=new B.R(4,0,4,14)
D.fWL=new B.F(!0,A.aF,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1K=new B.D("Games and little helpers for a spare minute.",null,D.fWL,null,null,null,null,null,null,null,null,null)
D.eHn=new B.C(D.bL3,D.h1K,null)
D.dw6=w([A.hX,A.bl],x.O)
D.eOz=new B.bU(A.z,0.5,A.w,null,0,D.dw6,null,null)
D.eOA=new B.bU(A.z,0.5,A.w,null,0,D.aFB,null,null)
D.dm_=w([A.c,A.bQ],x.O)
D.eOC=new B.bU(A.z,0.5,A.w,null,0,D.dm_,null,null)
D.dFy=w([A.bP,A.cz],x.O)
D.aTI=new B.bU(A.z,0.5,A.w,null,0,D.dFy,null,null)
D.cYB=w([A.c,A.bP],x.O)
D.eOH=new B.bU(A.n_,0.5,A.w,null,0,D.cYB,null,null)
D.bAe=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.dDq=w([A.fy,D.bAe],x.O)
D.eOM=new B.bU(A.n_,0.5,A.w,null,0,D.dDq,null,null)
D.cRz=w([A.d0,A.cx],x.O)
D.eON=new B.bU(A.z,0.5,A.w,null,0,D.cRz,null,null)
D.d5G=w([A.h9,A.aQ,A.de],x.O)
D.eOQ=new B.bU(A.n_,0.5,A.w,null,0,D.d5G,null,null)
D.dwR=w([A.cz,M.ni],x.O)
D.eOR=new B.bU(A.n_,0.5,A.w,null,0,D.dwR,null,null)
D.eOW=new B.bU(A.z,0.5,A.w,null,0,D.aBP,null,null)
D.dGt=w([A.cz,A.ip],x.O)
D.eP3=new B.bU(A.z,0.5,A.w,null,0,D.dGt,null,null)
D.dfy=w([A.iL,A.bl],x.O)
D.eP6=new B.bU(A.n_,0.5,A.w,null,0,D.dfy,null,null)
D.aTN=new B.aP(9,9)
D.ePc=new B.aP(1.4,1.4)
D.ePe=new B.aP(2.5,2.5)
D.fq3=new B.a5(10,-8,18,-2)
D.fq4=new B.a5(14,-14,20,14)
D.fq6=new B.a5(20,-2,30,2)
D.fqb=new B.a5(4,-13,30,-3)
D.fqh=new B.a5(8,-7,12,7)
D.fqt=new B.a5(-12,12,12,19)
D.fqu=new B.a5(-12,14,12,22)
D.fqv=new B.a5(-12,-22,12,8)
D.fqw=new B.a5(-12,-25,12,19)
D.fqx=new B.a5(-12,-26,12,-6)
D.fqy=new B.a5(-12,-4,12,14)
D.fqA=new B.a5(-14,20,14,24)
D.fqB=new B.a5(-14,6,14,10)
D.fqC=new B.a5(-14,-17,14,15)
D.fqD=new B.a5(-14,-26,14,18)
D.fqE=new B.a5(-14,-26,14,-14)
D.fqF=new B.a5(-14,-4,14,20)
D.fqH=new B.a5(-15,-29,15,25)
D.fqI=new B.a5(-16,-16,16,16)
D.fqL=new B.a5(-16,-22,-9,18)
D.fqM=new B.a5(-16,-24,16,-10)
D.fqO=new B.a5(-16,-2,16,20)
D.fqQ=new B.a5(-18,20,18,24)
D.fqR=new B.a5(-18,-18,18,20)
D.fqS=new B.a5(-20,12,20,22)
D.fqT=new B.a5(-20,-28,20,26)
D.fqU=new B.a5(-22,15,22,19)
D.aUs=new B.a5(-22,-26,22,24)
D.fqW=new B.a5(-24,-12,10,22)
D.fqX=new B.a5(-24,-14,22,8)
D.fqY=new B.a5(-24,-6,24,20)
D.aUt=new B.a5(-24,-9,24,9)
D.fqZ=new B.a5(-25,14,25,19)
D.fr_=new B.a5(-26,-14,14,8)
D.fr0=new B.a5(-26,-4,26,20)
D.fr1=new B.a5(-26,-6,4,6)
D.aUu=new B.a5(-28,-13,28,13)
D.fr2=new B.a5(-28,-16,28,16)
D.fr3=new B.a5(-28,-16,28,8)
D.fr4=new B.a5(-28,-22,28,22)
D.fr5=new B.a5(-29,-11,29,11)
D.fr6=new B.a5(-30,-12,30,14)
D.fr7=new B.a5(-30,-14,0,14)
D.fr8=new B.a5(-30,-18,30,20)
D.fr9=new B.a5(-30,-28,30,14)
D.fra=new B.a5(-30,-2,30,18)
D.frb=new B.a5(-30,-4,30,18)
D.frc=new B.a5(-32,-17,32,17)
D.frd=new B.a5(-32,-28,32,18)
D.fre=new B.a5(-33,-21,33,17)
D.frf=new B.a5(-34,0,34,10)
D.frg=new B.a5(-34,14,34,26)
D.abs=new B.a5(-34,-18,34,18)
D.frh=new B.a5(-36,-24,36,20)
D.fri=new B.a5(-38,-22,38,22)
D.frk=new B.a5(-3,12,3,22)
D.frl=new B.a5(-3,5,3,15)
D.frp=new B.a5(-46,-34,46,28)
D.frr=new B.a5(-48,-3,48,3)
D.fru=new B.a5(-6,18,24,24)
D.frv=new B.a5(-6,5,6,12)
D.frw=new B.a5(-6,-22,6,-15)
D.frA=new B.a5(-9,-16,9,22)
D.frB=new B.a5(-4.5,-24,4.5,-21.2)
D.frD=new B.a5(14,-9,17.5,9)
D.eAl={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aVB=new B.dc(D.eAl,5,x.Q)
D.ezO={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.fvf=new B.dc(D.ezO,10,x.Q)
D.fxB=new B.av(24,44)
D.fxZ=new B.av(54,38)
D.fy4=new B.av(66,38)
D.bhI=new B.fs(2,null,null,null,null,A.bj,null,null,null,null)
D.fz8=new B.a4(16,16,D.bhI,null)
D.aWH=new B.hY(3,12,12,0.82,null)
D.fM4=new B.F(!0,A.wM,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGq=new B.eJ("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cZ,null,null,null,null,null,null,D.fM4)
D.fRk=new B.F(!0,A.l3,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGw=new B.eJ("AI",null,null,A.cZ,null,null,null,null,null,null,D.fRk)
D.fGO=new B.F(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHk=new B.F(!0,A.bq,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHK=new B.F(!0,A.cw,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIC=new B.F(!0,A.c,null,null,null,null,13.5,A.C,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJ8=new B.F(!0,A.aR,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fw0=new B.d3(A.i0,A.dS,6)
D.dph=w([D.fw0],B.as("N<d3>"))
D.fK8=new B.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.dph,null,null,null)
D.fKd=new B.F(!0,A.eH,null,null,null,null,12.5,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKi=new B.F(!0,A.bX,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKV=new B.F(!0,A.bX,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fL2=new B.F(!0,A.aF,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fM0=new B.F(!0,A.bX,null,null,null,null,9.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fM8=new B.F(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMG=new B.F(!0,A.aF,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNb=new B.F(!0,A.aQ,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNe=new B.F(!0,A.c,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.aFZ,null,null,null)
D.fNl=new B.F(!0,A.c,null,null,null,null,12.5,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fO5=new B.F(!0,A.bF,null,null,null,null,10.5,A.u,null,0.5,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPf=new B.F(!0,A.v9,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPU=new B.F(!0,A.bN,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQ2=new B.F(!0,A.aF,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQQ=new B.F(!0,A.mr,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fR0=new B.F(!0,A.cz,null,null,null,null,9.5,null,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYV=new B.F(!0,A.c,null,null,null,null,9.5,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSb=new B.F(!0,A.j_,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSv=new B.F(!0,A.bX,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fT2=new B.F(!0,A.bf,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUA=new B.F(!0,A.v,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fV6=new B.F(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVo=new B.F(!0,A.aQ,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVM=new B.F(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVP=new B.F(!0,A.aQ,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fX1=new B.F(!0,A.v9,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXo=new B.F(!0,A.bf,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKl=new B.F(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXN=new B.D("\u26a0\ufe0f ",null,D.fKl,null,null,null,null,null,null,null,null,null)
D.fY_=new B.D("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A3.BD,null,null,null,null,null,null,null,null,null)
D.fZF=new B.D("Pick one, then change it and see what happens.",null,A3.BD,null,null,null,null,null,null,null,null,null)
D.fLw=new B.F(!0,A.ab,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_G=new B.D("What do you want to invent? Type it below, or tap an idea.",null,D.fLw,null,null,null,null,null,null,null,null,null)
D.fPP=new B.F(!0,A.c1,null,null,null,null,12.5,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h0c=new B.D("Burnt out! Press Repair.",null,D.fPP,null,null,null,null,null,null,null,null,null)
D.h1k=new B.D("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.h1Y=new B.D("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.hi,null,null,null,null,null,null,null,null,null)
D.h2B=new B.D("Make it yours",null,A.jr,null,null,null,null,null,null,null,null,null)
D.h5Q=new B.D("5G",null,A4.aYf,null,null,null,null,null,null,null,null,null)
D.h6R=new B.D("Pick how big the screen is on the board",null,N.hI,null,null,null,null,null,null,null,null,null)
D.fSN=new B.F(!0,A.bX,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h72=new B.D("WHAT HAPPENS",null,D.fSN,null,null,null,null,null,null,null,null,null)
D.h8O=new B.D("Check",null,null,null,null,null,null,null,null,null,null,null)
D.h9t=new B.D("Change the words and pictures on the three slabs.",null,A3.BD,null,null,null,null,null,null,null,null,null)
D.h9G=new B.D("All the parts and wires will be removed.",null,A.hH,null,null,null,null,null,null,null,null,null)
D.ha0=new B.D("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.haA=new B.D("Tap the crank on the board again and again to spin it faster.",null,N.hI,null,null,null,null,null,null,null,null,null)
D.hbP=new B.D("\ud83c\udfaf Challenges",null,A.dw,null,null,null,null,null,null,null,null,null)
D.hcl=new B.D("Remove this part",null,A1.aXQ,null,null,null,null,null,null,null,null,null)
D.hcF=new B.D("Clear the board?",null,A.du,null,null,null,null,null,null,null,null,null)
D.fSc=new B.F(!0,A.bw,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hcX=new B.D("How the Lab works",null,D.fSc,null,null,null,null,null,null,null,null,null)
D.fIP=new B.F(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hdh=new B.D("Electronics Lab",null,D.fIP,null,null,null,null,A.a2,null,1,null,null)
D.hdl=new B.D("?",null,R.aZs,null,null,null,null,null,null,null,null,null)
D.heH=new B.D("Ready-made circuits",null,A.dw,null,null,null,null,null,null,null,null,null)
D.hfm=new B.D("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,N.hI,null,null,null,null,null,null,null,null,null)
D.fVt=new B.F(!0,A.aQ,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hiT=new B.D("\u26a0 There is no air here, so a parachute will not work.",null,D.fVt,null,null,null,null,null,null,null,null,null)
D.hk3=new B.D("Download the scene (GIF)",null,A.cJ,null,null,null,null,null,null,null,null,null)
D.hk6=new B.D("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,A1.aXN,null,null,null,null,null,null,null,null,null)
D.hkC=new B.D("NGMY",null,A.wm,null,null,null,null,null,null,null,null,null)
D.hkP=new B.D("You build a machine. A little light runs along the wires, and every part it touches does something.",null,Ah.Xf,null,null,null,null,null,null,null,null,null)
D.hld=new B.D("Tap it to change its setting. Drag from the right dot to connect.",null,A.mf,null,null,null,null,null,null,null,null,null)
D.hmk=new B.D("TOOLBOX",null,Ae.acQ,null,null,null,null,null,null,null,null,null)
D.hKO=new B.bg("electronics-part-card",x.W)
D.hKQ=new B.bg("device-learn-more",x.W)
D.hKW=new B.bg("device-remote",x.W)
D.hL0=new B.bg("device-picture",x.W)
D.hLv=new B.bg("electronics-part-about",x.W)
D.hLC=new B.bg("body-loading",x.W)
D.hLI=new B.bg("device-fullscreen",x.W)
D.hM4=new B.bg("core-protocol-back",x.W)
D.hM9=new B.bg("core-protocol-title-frame",x.W)})();(function staticFields(){$.hGG=null
$.hGC=null
$.hGD=null
$.hNv=0
$.igx=B.S(x.N,B.as("j5"))
$.ih5=B.S(x.N,B.as("j5"))
$.aRd=B.S(x.N,B.as("j5"))
$.hJp=A.aA})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"iP6","bJz",()=>{var u="led"
return B.a([C.aBs("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fC5(),u),C.aBs("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fC6(),u),C.aBs("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fC7(),u),C.aBs("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fCe(),u),C.aBs("Not both","Make the light go OFF only when both switches are ON.",2,new C.fCf(),u),C.aBs("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.fCg(),"buzzer")],B.as("N<bfg>"))})
w($,"iPy","bJA",()=>B.a([C.RV("UNIVERSE","Earth, space and gravity",A.R9,A.aH,new C.fCw()),C.RV("ELECTRONICS LAB","Batteries, wires, real circuits",An.vw,A.aH,new C.fCx()),C.RV("DISCOVERY LAB","Body Explorer: a real 3D human",D.bUl,A.bf,new C.fCy()),C.RV("TOOLBOX","Converter, clock, games",H.arP,A.cW,new C.fCz()),C.RV("REACTION LAB","Wire parts together",A.E2,A.bw,new C.fCA()),C.RV("SPARK PAINTER","Paint with light",A.Im,A.c5,new C.fCB()),C.RV("ROCKET LANDER","Land softly on the pad",A.og,A.aH,new C.fCC()),C.RV("TITLE ANIMATOR","Make a moving title",A.xB,A.bu,new C.fCD()),C.RV("CIRCUIT LAB","Connect logic, learn it",A.a4M,A.cw,new C.fCE())],B.as("N<bxK>")))
w($,"iRl","qU",()=>{var u,t,s=B.S(x.N,x.C)
for(u=0;u<76;++u){t=D.TT[u]
s.n(0,t.a,t)}return s})
v($,"ila","hWy",()=>B.aq8(0))
w($,"iOP","hWz",()=>{var u=B.csw()
u.seA(0,A.c.j(0.06))
u.c=2.2
u.d=A.bG
return u})
w($,"iP7","akk",()=>B.a([C.GO("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fCh()),C.GO("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fCi()),C.GO("Spin the motor","A battery and a motor in a loop will make it spin.",new C.fCj()),C.GO("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.fCk()),C.GO("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fCl()),C.GO("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fC8()),C.GO("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fC9()),C.GO("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fCa()),C.GO("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fCb()),C.GO("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fCc()),C.GO("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fCd())],B.as("N<bfh>")))
w($,"iPA","hX2",()=>B.a([C.a32("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aQ,A.c8,new C.fCM()),C.a32("Focus Timer","Work, then rest","\u23f1\ufe0f",A.c1,A.bC,new C.fCN()),C.a32("Breathe","Calm down in a minute","\ud83e\udee7",A.fK,A.cI,new C.fCO()),C.a32("Draw Pad","Sketch and share","\ud83c\udfa8",A.bE,A.b_,new C.fCP()),C.a32("Memory Match","Find the pairs","\ud83c\udccf",A.aH,A.ci,new C.fCQ()),C.a32("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bu,A.bk,new C.fCR()),C.a32("Tip & Split","Share the bill","\ud83e\uddfe",A.bf,A.b5,new C.fCS()),C.a32("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bj,A.az,new C.fCT())],B.as("N<bz3>")))})()};
(a=>{a["LrA6NSxd9EpA+Dg7jaWzeY1Jt74="]=a.current})($__dart_deferred_initializers__);