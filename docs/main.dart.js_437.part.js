((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,W,A9,A5,N,Aa,A6,Ab,A7,X,P,Y,Ac,O,Ad,Ae,Af,Ag,Ah,Ai,Aj,Ak,Al,Z,U,Am,An,Q,A_,R,S,A0,T,A1,Ao,E,I,G,L,Ap,Aq,Ar,A8,C={
bEo(d){return C.ikB(d)},
ikB(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bEo=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.rx(B.nE(""),d,A.ii,null,null).d7(0,At.a1A),$async$bEo)
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
return B.i($async$bEo,v)},
iwI(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.Ts[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.d_(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ag(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.fg(D.Ts,new C.fUp())
if(w==null)w=A.d.gG(D.Ts)
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
return new C.amr(w.a,w.b,m,w,s,!1)},
iqg(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.O(D.TS,new C.fIU(),x.bd).aL(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
iET(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.c8(b2,"{")
v=A.a.pj(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.V.aP(0,A.a.aw(b2,w,v+1),b1))
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
for(a9=0;a9<4;++a9){m=D.dHd[a9]
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
a4=new C.nb(a0,B.v(a1==null?"":a1),t,i,A.M)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.t(u,"honest")
a5=B.v(a5==null?"":a5)
return new C.amr(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
ivb(d){var w,v,u=C.hxn()
d.B(u)
for(w=0;w<60;++w)u.vV(0,0.03333333333333333)
v=u.a
return A.d.aR(v,new C.fQK(u))&&!A.d.cw(v,new C.fQL())},
iva(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.S(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.I)(l),++u){t=l[u];++v
k.n(0,t.a,$.qU().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.I)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.v(t.e)+" V")
if(p==="resistor")q.push(""+A.i.S(t.r)+" ohms")
if(A.d.q(D.dFg,p))q.push("level "+A.i.S(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.i.S(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aL(q,", ")+")"
s.push(B.v(p)+n+": "+o+", current "+A.i.a5(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.I)(w),++u){m=w[u]
l.push(B.v(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.v(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aL(s,"\n")+"\nWires: "+A.d.aL(l,"; ")},
ij5(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.I)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aL(v,"\n")+"\n\n"}v=A.d.aL(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
iwH(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qU().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.TS[u]
if(A.d.aR(w,new C.fUm(s)))if(!B.d_(r,s.b.toLowerCase(),0))v=B.d_(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ag("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.X(w,new C.fUn(e),B.U(w).k("X<1>")).gar(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ag("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.i.a5(A.d.cD(w,0,new C.fUo())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ag("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gG(w)
w=$.qU().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
amr:function amr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fUp:function fUp(){},
fIU:function fIU(){},
fQK:function fQK(d){this.a=d},
fQL:function fQL(){},
fUm:function fUm(d){this.a=d},
fUn:function fUn(d){this.a=d},
fUo:function fUo(){},
Xt:function Xt(d,e){this.c=d
this.a=e},
boC:function boC(d,e,f,g,h){var _=this
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
epn:function epn(d){this.a=d},
epo:function epo(d,e,f){this.a=d
this.b=e
this.c=f},
epp:function epp(d){this.a=d},
epA:function epA(d){this.a=d},
epB:function epB(d,e){this.a=d
this.b=e},
epw:function epw(d){this.a=d},
epu:function epu(d,e){this.a=d
this.b=e},
epv:function epv(d,e,f){this.a=d
this.b=e
this.c=f},
epx:function epx(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eps:function eps(d){this.a=d},
ept:function ept(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
epy:function epy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
epr:function epr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
epz:function epz(d,e){this.a=d
this.b=e},
epq:function epq(d,e){this.a=d
this.b=e},
epE:function epE(d){this.a=d},
epD:function epD(d){this.a=d},
epF:function epF(d){this.a=d},
epC:function epC(d){this.a=d},
epG:function epG(d,e){this.a=d
this.b=e},
epH:function epH(d,e){this.a=d
this.b=e},
epI:function epI(d,e){this.a=d
this.b=e},
epJ:function epJ(d,e){this.a=d
this.b=e},
bEK(d,e,f){var w=null
return B.w(B.a([B.c(d,w,w,w,w,w,w,D.fKS,w,w,w),B.c(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p)},
hLI(d,e,f,g){var w=null,v=B.m(24),u=B.K(f.j(0.6),A.r,1)
return B.at(B.p(w,B.w(B.a([B.c(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.aj,B.c(e,w,w,w,w,w,w,A.BF,A.K,w,w),A.aB,B.c_(A.fX,g,A.br,w,0,8)],x.p),A.l,w,A.e,A.P,0,A.p),A.f,w,w,new B.o(D.bkS,w,u,v,w,w,A.m),w,w,w,w,A.ae,w,w,w),w,w,w)},
Hi:function Hi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vJ:function vJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XQ:function XQ(d){this.a=d},
aHG:function aHG(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.md$=i
_.fe$=j
_.hf$=k
_.bv$=l
_.ab$=m
_.c=_.a=null},
eEV:function eEV(){},
eFe:function eFe(d){this.a=d},
eFd:function eFd(d,e){this.a=d
this.b=e},
eFf:function eFf(){},
eFg:function eFg(){},
eEX:function eEX(d,e,f){this.a=d
this.b=e
this.c=f},
eEW:function eEW(d,e){this.a=d
this.b=e},
eEM:function eEM(d){this.a=d},
eEN:function eEN(d){this.a=d},
eEO:function eEO(d){this.a=d},
eEP:function eEP(d){this.a=d},
eEQ:function eEQ(d){this.a=d},
eER:function eER(d){this.a=d},
eES:function eES(d){this.a=d},
eET:function eET(d){this.a=d},
eEU:function eEU(d){this.a=d},
eEK:function eEK(d){this.a=d},
eEL:function eEL(d){this.a=d},
eEJ:function eEJ(d){this.a=d},
eF7:function eF7(d,e){this.a=d
this.b=e},
eF2:function eF2(d){this.a=d},
eF3:function eF3(d){this.a=d},
eF_:function eF_(d){this.a=d},
eF4:function eF4(d){this.a=d},
eEZ:function eEZ(d){this.a=d},
eF5:function eF5(d){this.a=d},
eF6:function eF6(d){this.a=d},
eEY:function eEY(d){this.a=d},
eF8:function eF8(d,e){this.a=d
this.b=e},
eF1:function eF1(d,e){this.a=d
this.b=e},
eF9:function eF9(d){this.a=d},
eFa:function eFa(d){this.a=d},
eFb:function eFb(d){this.a=d},
eFc:function eFc(d){this.a=d},
eF0:function eF0(d){this.a=d},
blv:function blv(d,e){this.b=d
this.a=e},
aPM:function aPM(){},
bCm:function bCm(){},
hGt(){var w=$.hGr
return w==null?$.hGr=$.oQ().d_B("assets/data/three.min.js"):w},
hGs(){var w=$.hGq
return w==null?$.hGq=C.cSB():w},
cSB(){var w=0,v=B.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cSB=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.oQ().iu(0,"assets/data/body3d.bin"),$async$cSB)
case 3:d=a1
$.hGu=J.eB(A.dM.gaS(d),d.byteOffset,d.byteLength)
t=B.TS(d)
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
e=D.dsn[i]
g=B.b2((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a5p(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b7J))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.ben(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cSB,v)},
c9m(){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$c9m=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.hc(B.a([C.hGs(),C.hGt()],x.D),x.K),$async$c9m)
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
return B.i($async$c9m,v)},
aW0:function aW0(d,e,f){this.a=d
this.b=e
this.c=f},
a5p:function a5p(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
ben:function ben(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Wh:function Wh(d){this.a=d},
aG5:function aG5(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.md$=t
_.fe$=u
_.hf$=v
_.bv$=w
_.ab$=a0
_.c=_.a=null},
dU4:function dU4(d){this.a=d},
dU3:function dU3(d,e){this.a=d
this.b=e},
dTF:function dTF(d){this.a=d},
dTG:function dTG(d,e){this.a=d
this.b=e},
dTH:function dTH(d){this.a=d},
dTI:function dTI(){},
dU5:function dU5(){},
dTJ:function dTJ(d,e){this.a=d
this.b=e},
dTK:function dTK(d){this.a=d},
dTL:function dTL(){},
dTM:function dTM(d){this.a=d},
dTO:function dTO(d,e){this.a=d
this.b=e},
dTN:function dTN(d){this.a=d},
dTC:function dTC(d,e,f){this.a=d
this.b=e
this.c=f},
dTD:function dTD(d){this.a=d},
dTE:function dTE(d){this.a=d},
dTV:function dTV(d){this.a=d},
dTW:function dTW(d,e){this.a=d
this.b=e},
dTX:function dTX(d,e){this.a=d
this.b=e},
dTY:function dTY(d){this.a=d},
dTU:function dTU(d,e){this.a=d
this.b=e},
dTZ:function dTZ(d,e){this.a=d
this.b=e},
dTT:function dTT(d,e){this.a=d
this.b=e},
dU_:function dU_(d){this.a=d},
dTS:function dTS(d){this.a=d},
dU0:function dU0(d){this.a=d},
dTR:function dTR(d){this.a=d},
dU1:function dU1(d){this.a=d},
dTQ:function dTQ(d){this.a=d},
dU2:function dU2(d){this.a=d},
dTP:function dTP(d){this.a=d},
aOQ:function aOQ(){},
aOR:function aOR(){},
c9n:function c9n(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c9o:function c9o(d,e){this.a=d
this.b=e},
c9p:function c9p(d){this.a=d},
aBp(d,e,f,g,h){return new C.bfb(d,e,f,g,h)},
hn8(d,e,f,g,h,i){return $.igi.c_(0,d+"|"+B.v(e)+"|"+f.m()+"|"+B.v(g),new C.cZM(d,e,f,i,g,h))},
yY:function yY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Dl:function Dl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
o2:function o2(d,e,f){this.a=d
this.b=e
this.c=f},
bfb:function bfb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fBV:function fBV(){},
fBW:function fBW(){},
fBX:function fBX(){},
fC3:function fC3(){},
fC4:function fC4(){},
fC5:function fC5(){},
Wo:function Wo(d){this.a=d},
aG7:function aG7(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.md$=n
_.fe$=o
_.hf$=p
_.bv$=q
_.ab$=r
_.c=_.a=null},
dVL:function dVL(d){this.a=d},
dVp:function dVp(d,e){this.a=d
this.b=e},
dVs:function dVs(){},
dVM:function dVM(){},
dVn:function dVn(d,e){this.a=d
this.b=e},
dVo:function dVo(d,e){this.a=d
this.b=e},
dVt:function dVt(d,e,f){this.a=d
this.b=e
this.c=f},
dVi:function dVi(){},
dVj:function dVj(){},
dVk:function dVk(d){this.a=d},
dVl:function dVl(d,e){this.a=d
this.b=e},
dVm:function dVm(d,e,f){this.a=d
this.b=e
this.c=f},
dVu:function dVu(){},
dVv:function dVv(d,e){this.a=d
this.b=e},
dVw:function dVw(d){this.a=d},
dVr:function dVr(d,e){this.a=d
this.b=e},
dVq:function dVq(d){this.a=d},
dVh:function dVh(d,e,f){this.a=d
this.b=e
this.c=f},
dVF:function dVF(d){this.a=d},
dVE:function dVE(d){this.a=d},
dVG:function dVG(d){this.a=d},
dVD:function dVD(d){this.a=d},
dVB:function dVB(d){this.a=d},
dVC:function dVC(d){this.a=d},
dVA:function dVA(d){this.a=d},
dVx:function dVx(d){this.a=d},
dVz:function dVz(d){this.a=d},
dVH:function dVH(d,e){this.a=d
this.b=e},
dVI:function dVI(d,e){this.a=d
this.b=e},
dVJ:function dVJ(d){this.a=d},
dVy:function dVy(d){this.a=d},
dVK:function dVK(d,e){this.a=d
this.b=e},
bft:function bft(d,e){this.b=d
this.a=e},
cZM:function cZM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aOV:function aOV(){},
bC5:function bC5(){},
i6Q(){return new C.OJ(null)},
RR(d,e,f,g,h){return new C.bxD(d,e,f,g,h)},
bvX(d,e,f){return A.i.D((d-e)/(f-e),0,1)},
hnG(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
iyI(){return B.iI("construction","")},
OJ:function OJ(d){this.a=d},
LA:function LA(d,e){this.a=d
this.b=e},
Bj:function Bj(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aGo:function aGo(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
e0V:function e0V(d,e){this.a=d
this.b=e},
e0U:function e0U(d){this.a=d},
e0X:function e0X(d,e){this.a=d
this.b=e},
e0W:function e0W(d){this.a=d},
bxD:function bxD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fCl:function fCl(){},
fCm:function fCm(){},
fCn:function fCn(){},
fCo:function fCo(){},
fCp:function fCp(){},
fCq:function fCq(){},
fCr:function fCr(){},
fCs:function fCs(){},
fCt:function fCt(){},
bvY:function bvY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fhu:function fhu(d){this.a=d},
fht:function fht(d,e){this.a=d
this.b=e},
fhr:function fhr(d){this.a=d},
fhv:function fhv(d){this.a=d},
fhs:function fhs(d,e){this.a=d
this.b=e},
ahf:function ahf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ag3:function ag3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
RK:function RK(d,e,f,g,h,i,j,k,l,m){var _=this
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
bx_:function bx_(d,e){this.b=d
this.a=e},
bwv:function bwv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
be5:function be5(d,e){this.b=d
this.a=e},
aKM:function aKM(d,e){this.c=d
this.a=e},
aKN:function aKN(d,e,f){var _=this
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
fha:function fha(d){this.a=d},
fh9:function fh9(d){this.a=d},
fh_:function fh_(d){this.a=d},
fh0:function fh0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fh1:function fh1(d){this.a=d},
fgZ:function fgZ(d,e){this.a=d
this.b=e},
fh2:function fh2(d){this.a=d},
fh8:function fh8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fh7:function fh7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fh5:function fh5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fh4:function fh4(d,e,f){this.a=d
this.b=e
this.c=f},
fh6:function fh6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fh3:function fh3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fhi:function fhi(d){this.a=d},
fhh:function fhh(d){this.a=d},
fhj:function fhj(d,e){this.a=d
this.b=e},
fhk:function fhk(d,e){this.a=d
this.b=e},
fhl:function fhl(d,e){this.a=d
this.b=e},
fhg:function fhg(d,e,f){this.a=d
this.b=e
this.c=f},
fhm:function fhm(d,e,f){this.a=d
this.b=e
this.c=f},
fhf:function fhf(d){this.a=d},
fhb:function fhb(d){this.a=d},
fhn:function fhn(d){this.a=d},
fho:function fho(d){this.a=d},
fhe:function fhe(d,e){this.a=d
this.b=e},
fhp:function fhp(d,e){this.a=d
this.b=e},
fhd:function fhd(d,e){this.a=d
this.b=e},
fhq:function fhq(d,e){this.a=d
this.b=e},
fhc:function fhc(d,e){this.a=d
this.b=e},
fgX:function fgX(){},
fgY:function fgY(){},
bvz:function bvz(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
buY:function buY(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
beM:function beM(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bv_:function bv_(d,e,f){this.b=d
this.c=e
this.a=f},
bz6:function bz6(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aQC:function aQC(){},
hNk(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a7(0,new B.r(w,0)),u=e.aI(0,new B.r(w,0)),t=1-f,s=3*t
return d.aO(0,t*t*t).a7(0,v.aO(0,s*t*f)).a7(0,u.aO(0,s*f*f)).a7(0,e.aO(0,f*f*f))},
blu(d,e,f,g,h,i){return $.igR.c_(0,d+"|"+B.v(e)+"|"+f.m()+"|"+B.v(g),new C.dvd(d,e,f,i,g,h))},
a2r:function a2r(d,e){this.a=d
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
Dp:function Dp(d,e){this.a=d
this.b=e},
a0n:function a0n(d,e){this.a=d
this.b=e},
ah2:function ah2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a2E:function a2E(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
DA:function DA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adS:function adS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ae9:function ae9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ag7:function ag7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bls:function bls(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
dvh:function dvh(d){this.a=d},
dvi:function dvi(d){this.a=d},
dve:function dve(d,e){this.a=d
this.b=e},
dvf:function dvf(d){this.a=d},
dvg:function dvg(d){this.a=d},
dvj:function dvj(d){this.a=d},
dvk:function dvk(d){this.a=d},
dvl:function dvl(d){this.a=d},
dvm:function dvm(d){this.a=d},
dvn:function dvn(d){this.a=d},
dvo:function dvo(d){this.a=d},
dvp:function dvp(d){this.a=d},
dvq:function dvq(d){this.a=d},
dvr:function dvr(d){this.a=d},
H3:function H3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XP:function XP(d){this.a=d},
aHF:function aHF(d,e,f,g,h,i,j){var _=this
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
eEf:function eEf(d){this.a=d},
eE4:function eE4(d){this.a=d},
eE6:function eE6(){},
eE7:function eE7(){},
eEa:function eEa(){},
eEb:function eEb(d,e,f){this.a=d
this.b=e
this.c=f},
eEc:function eEc(d){this.a=d},
eEd:function eEd(d){this.a=d},
eE8:function eE8(){},
eE9:function eE9(d){this.a=d},
eEF:function eEF(d){this.a=d},
eEe:function eEe(){},
eE0:function eE0(d){this.a=d},
eEh:function eEh(d){this.a=d},
eEg:function eEg(d){this.a=d},
eEj:function eEj(){},
eEi:function eEi(d,e){this.a=d
this.b=e},
eE3:function eE3(){},
eE1:function eE1(d){this.a=d},
eE2:function eE2(d){this.a=d},
eED:function eED(d){this.a=d},
eEC:function eEC(d){this.a=d},
eEE:function eEE(d){this.a=d},
eEt:function eEt(d,e){this.a=d
this.b=e},
eEB:function eEB(d){this.a=d},
eEz:function eEz(d){this.a=d},
eEA:function eEA(d){this.a=d},
eEy:function eEy(d){this.a=d},
eEx:function eEx(d){this.a=d},
eEu:function eEu(d){this.a=d},
eEv:function eEv(d){this.a=d},
eEw:function eEw(d){this.a=d},
eE5:function eE5(){},
eEp:function eEp(d){this.a=d},
eEq:function eEq(d){this.a=d},
eEo:function eEo(d){this.a=d},
eEr:function eEr(d){this.a=d},
eEn:function eEn(d){this.a=d},
eEs:function eEs(d){this.a=d},
eEm:function eEm(d){this.a=d},
eEl:function eEl(d){this.a=d},
eEk:function eEk(d,e){this.a=d
this.b=e},
blt:function blt(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dvd:function dvd(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aPK:function aPK(){},
hTf(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aI(0,e).gcL()*0.1
return new B.r((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
hxn(){var w=B.a([],x.bz),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a6x(w,v,u,A.cV,B.S(x.N,x.y))},
i0q(d,e,f){var w=d.c,v=e===0?-1:1
return new B.r(w*f.a+v*C.hxo(d),d.d*f.b)},
hxo(d){return 42+(D.mN.am(0,d.b)?(d.ch-1)*38:0)},
ikT(d){var w,v,u,t,s
if(d.A(0,$.hJd))return $.hWm()
w=B.a([],x.n)
for(v=d.a,u=d.b,t=12;t<v;t+=24)for(s=12;s<u;s+=24){w.push(t)
w.push(s)}$.hJd=d
return $.ikU=new Float32Array(B.cd(w))},
es:function es(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ub:function ub(d,e,f,g){var _=this
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
acv:function acv(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
adE:function adE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a6x:function a6x(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bSD:function bSD(){},
bSO:function bSO(d){this.a=d},
bSJ:function bSJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSP:function bSP(d){this.a=d},
bSQ:function bSQ(d){this.a=d},
bSS:function bSS(d){this.a=d},
bST:function bST(d){this.a=d},
bSR:function bSR(d){this.a=d},
bSU:function bSU(d,e,f){this.a=d
this.b=e
this.c=f},
bSV:function bSV(d){this.a=d},
bSF:function bSF(d){this.a=d},
bSG:function bSG(d){this.a=d},
bSE:function bSE(d){this.a=d},
bSH:function bSH(d,e,f){this.a=d
this.b=e
this.c=f},
bSI:function bSI(d){this.a=d},
bSC:function bSC(d){this.a=d},
bSW:function bSW(d,e){this.a=d
this.b=e},
bSK:function bSK(d,e){this.a=d
this.b=e},
bSN:function bSN(d){this.a=d},
bSM:function bSM(d){this.a=d},
bSL:function bSL(d){this.a=d},
ale:function ale(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bMY:function bMY(){},
bMZ:function bMZ(){},
bMX:function bMX(){},
nb:function nb(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cwZ:function cwZ(d){this.a=d},
iEO(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new C.h6q(),c9=new C.h6s(),d0=new C.h6t(),d1=new C.h6r(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aq(w,d1.$3(new B.a5(w.a,w.b,w.c,w.d),A.cm,A.bQ))
d3.ah(D.eF2,D.eC1,c9.$2(A.dZ,1.4))
d3.ah(D.eBH,D.eBF,c9.$2(A.bz,2.4))
d3.ah(D.eBI,U.aOh,c9.$2(A.bz,2.4))
if(c7){d2=c8.$1(A.fC.j(0.5))
d2.y=A.I3
d3.O(D.eBn,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.i.F(d2+v/3,1)
d6.$5(d3,"\u2744",new B.r(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aq(d0.$4(-22,-26,44,50),d1.$3(D.aUt,A.aS,A.cE))
d3.O(A.cN,16,c8.$1(A.bz))
d3.O(A.cN,13,c8.$1(c7?A.aH.j(0.85):A.a_))
if(c7){d2=d3.c
J.bs(d2.save())
d2.translate(0,4)
d3.jt(0,d4.y*0.6)
for(v=0;v<3;++v){t=v*2.09
d3.ah(A.J,new B.r(Math.cos(t)*11,Math.sin(t)*11),c9.$2(A.ac,3))}d2.restore()
for(d2=d5*0.8,v=0;v<4;++v){u=A.i.F(d2+v*0.25,1)
d3.O(new B.r(Math.sin(v*2+d5)*9,4-u*12),1.6+u*2,c8.$1(A.c.j(0.8*(1-u))))}}d3.O(D.eEV,2.4,c8.$1(c7?A.bk:A.an))
d3.O(D.aOS,2.4,c8.$1(A.an))
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
d3.af(d2,c8.$1(A.aC.j(0.7)))}d3.af(s,c9.$2(A.ac,1.6))
d2=d3.c
J.bs(d2.save())
d2.translate(0,10)
d3.jt(0,d4.y)
d3.ah(D.aaA,D.aOE,c9.$2(A.bP,3))
d2.restore()
if(c7)for(d2=d5*9,t=d5*1.6,v=0;v<3;++v)d3.O(new B.r(Math.sin(d2+v*2)*9,-10-A.i.F(t+v*0.33,1)*12),2.4,c8.$1(A.f3))
return!0
case"drone":d3.aq(d0.$5(-10,-4,20,10,4),c8.$1(A.aN))
d3.O(A.hF,3,c8.$1(c7?A.bk:A.an))
r=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.c,t=-4+r,q=-6+r,p=0;p<2;++p){o=F.U5[p]
d3.ah(new B.r(o*0.4,1),new B.r(o,t),c9.$2(A.bz,3))
J.bs(d2.save())
d2.translate(o,q)
d3.ah(D.eEM,D.eBM,c9.$2(A.c.j(c7?0.35:0.9),3))
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
d3.af(w,d1.$3(D.fqT,A.aQ,A.de))
d3.aE(D.fq0,c8.$1(A.d0))
d2=d3.c
J.bs(d2.save())
d2.translate(18,-5)
d3.jt(0,d4.y*2)
d3.ah(A.J,D.eBT,c9.$2(A.bP,2.4))
d3.ah(A.aaw,D.eBS,c9.$2(A.i0,1))
d2.restore()
if(c7)for(d2=d5*3,t=d5*20,v=0;v<4;++v){u=A.i.F(d2+v*0.25,1)
d3.O(new B.r(34+u*6,-5+Math.sin(v*3+t)*6*u),1.4,c8.$1(A.eH.j(1-u)))}return!0
case"torch":if(c7){v=A.i.D(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new B.aH($.T().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(16,-6))
d2.E(new B.aq(52,-26))
d2.E(new B.aq(52,18))
d2.E(new B.aq(16,4))
d2.E(new B.bA())
d3.af(d2,c8.$1(A.bM.j(0.35*v)))}d3.aq(d0.$5(-26,-6,30,12,3),d1.$3(D.fqZ,A.bl,A.cx))
n=new B.aH($.T().r,A.ak,c6,c6,B.a([],x.v))
n.E(new B.aZ(4,-6))
n.E(new B.aq(18,-12))
n.E(new B.aq(18,12))
n.E(new B.aq(4,6))
n.E(new B.bA())
d3.af(n,c8.$1(A.cU))
d3.O(D.eBY,7,c8.$1(c7?A.c:A.d0))
return!0
case"neon":d3.aq(d0.$5(-30,-14,60,28,6),c8.$1(M.ni))
if(c7)m=d4.ax>0.5||A.o.F(A.i.bd(d5*17),3)!==0
else m=!1
l=m?A.c5:D.bvB
if(m){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.c5.j(0.35))
t.y=A.nn
d3.aq(d2,t)}d3.aq(d0.$5(-27,-11,54,22,5),c9.$2(l,2.2))
d6.$5(d3,"OPEN",D.eF8,l,17)
return!0
case"microwave":d3.aq(d0.$4(-30,-18,60,38),d1.$3(D.fr5,A.bP,A.bl))
d2=d0.$5(-26,-14,38,30,3)
d3.aq(d2,c8.$1(c7?A.bM.j(0.75):A.ax))
if(c7){d2=d3.c
J.bs(d2.save())
d2.translate(-7,8)
d3.jt(0,d4.y*0.5)
d3.c1(B.bZ(A.J,7,22),c8.$1(A.de))
d2.restore()}d3.aq(d0.$5(15,-14,12,12,2),c8.$1(M.ni))
if(c7)d6.$5(d3,"0:"+A.a.aZ(A.o.v(59-A.o.F(A.i.bd(d5),60)),2,"0"),D.eBZ,A.bf,6.5)
d3.O(D.eCc,4,c8.$1(A.d0))
return!0
case"doorbell":d3.aq(d0.$5(-16,-26,32,52,8),c8.$1(A.bn))
d3.O(A.KB,10,c8.$1(c7?A.bu:A.bz))
d2=d3.c
J.bs(d2.save())
d2.translate(0,-8)
d3.jt(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.eFR,A.c,16)
d2.restore()
d3.O(A.kx,6,c8.$1(A.dh))
d3.O(A.kx,6,c9.$2(A.c,1.6))
if(c7)for(d2=d5*14,v=1;v<=2;++v)d3.cQ(B.bY(A.KB,14+v*6+A.i.F(d2,6)),-0.9,1.8,!1,c9.$2(A.bu.j(0.9-v*0.3),1.8))
return!0
case"camera":d3.ah(D.eF7,D.eFK,c9.$2(A.bz,4))
d2=d3.c
J.bs(d2.save())
d3.jt(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aq(d0.$5(-24,-14,46,22,5),d1.$3(D.fqU,A.bP,A.an))
d3.O(D.aOl,8,c8.$1(A.ax))
d3.O(D.aOl,4.5,c8.$1(c7?A.aH:A.cx))
d3.O(D.eF5,2.2,c8.$1(c7&&A.o.F(A.i.bd(d5*1.6),2)===0?A.aC:A.kK))
d2.restore()
if(c7)d6.$5(d3,"REC",D.eFf,A.aC,9)
return!0
case"console":d3.aq(d0.$5(-28,-22,56,44,8),d1.$3(D.fr1,A.ic,A.fy))
d3.aq(d0.$5(-20,-17,40,22,3),c8.$1(A.dY))
if(c7){d2=d5*2.3
d3.O(new B.r(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aE(new B.a5(-18,t,-15.6,t+8),c8.$1(A.bf))
d2=-9+Math.sin(d2-0.4)*6
d3.aE(new B.a5(15.6,d2,18,d2+8),c8.$1(A.c5))}d3.O(D.eF0,4,c8.$1(A.b9))
d3.O(D.eBU,2.4,c8.$1(A.aC))
d3.O(D.eCa,2.4,c8.$1(A.bk))
return!0
case"heartmon":d3.aq(d0.$5(-30,-22,60,44,6),c8.$1(A.ax))
d3.aq(d0.$5(-26,-18,52,28,3),c8.$1(A.dY))
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
d6.$5(d3,"72",D.eBV,A.hJ,11)
d2=d5*9
d6.$5(d3,"\u2665",D.eFk,A.hJ.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.O(D.eFa,3,c8.$1(c7?A.bk:A.bz))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aq(d2,c8.$1(A.cI.j(c7?0.5:0.3)))
d3.aq(d0.$5(-26,-20,52,40,4),c9.$2(A.ac,1.6))
d3.aE(D.fqW,c8.$1(F.wP))
if(c7){d2=d5*1.1
t=Math.sin(d2)
q=d3.c
J.bs(q.save())
q.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.nL(0,-1,1)
d3.c1(B.bZ(A.J,8,14),c8.$1(A.cW))
d2=new B.aH($.T().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-6,0))
d2.E(new B.aq(-12,-4))
d2.E(new B.aq(-12,4))
d2.E(new B.bA())
d3.af(d2,c8.$1(A.c8))
d3.O(D.eCX,1.2,c8.$1(A.v))
q.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=A.i.F(d2+v*0.2,1)
d3.O(new B.r(-18+Math.sin(u*8+v)*2,13-u*30),1.4+A.o.F(v,2),c9.$2(A.ac,1))}}return!0
case"lighthouse":d2=$.T().r
t=x.v
g=new B.aH(d2,A.ak,c6,c6,B.a([],t))
g.E(new B.aZ(-9,22))
g.E(new B.aq(-5,-16))
g.E(new B.aq(5,-16))
g.E(new B.aq(9,22))
g.E(new B.bA())
d3.af(g,d1.$3(D.frx,A.c,A.bC))
d3.aE(D.frt,c8.$1(c7?A.eH:A.bz))
q=new B.aH(d2,A.ak,c6,c6,B.a([],t))
q.E(new B.aZ(-7,-22))
q.E(new B.aq(0,-29))
q.E(new B.aq(7,-22))
q.E(new B.bA())
d3.af(q,c8.$1(A.ez))
if(c7){f=Math.sin(d4.y*0.3)
d2=new B.aH(d2,A.ak,c6,c6,B.a([],t))
d2.E(new B.aZ(0,-19))
t=f*34
d2.E(new B.aq(t,-26))
d2.E(new B.aq(t,-12))
d2.E(new B.bA())
d3.af(d2,c8.$1(A.eH.j(0.45)))
d2=c8.$1(A.eH.j(0.35))
d2.y=A.I3
d3.O(D.eBo,14,d2)}return!0
case"discoball":d3.ah(D.eBq,V.aOc,c9.$2(A.d0,1.4))
d3.O(A.J,16,d1.$3(D.fqF,A.aS,A.an))
for(v=0;v<8;++v){d2=-12+v*3.4
d3.ah(new B.r(-16,d2),new B.r(16,d2),c9.$2(A.dJ,0.7))}for(v=0;v<5;++v){f=d4.y*0.5+v*1.26
d3.ah(new B.r(Math.cos(f)*16*0.3,Math.sin(f)*16*0.3),new B.r(Math.cos(f)*16,0),c9.$2(A.dJ,0.7))}if(c7)for(d2=d5*2,t=d5*9,v=0;v<10;++v){f=d2+v*0.63
e=22+A.o.F(v,3)*6
d3.O(new B.r(Math.cos(f)*e,Math.sin(f)*e*0.8),1.8,c8.$1(D.dtt[A.o.F(v,4)].j(0.5+0.5*Math.sin(t+v))))}return!0
case"robot":d3.aq(d0.$5(-14,-4,28,24,5),d1.$3(D.fqC,A.cE,A.an))
d3.aq(d0.$5(-12,-26,24,20,5),d1.$3(D.fqu,A.bn,A.bQ))
d3.ah(H.aOe,D.eBs,c9.$2(A.bz,1.6))
d3.O(D.eBt,2.2,c8.$1(c7?A.aC:A.bz))
d=c7&&A.i.F(d5*0.8,1)>0.08
for(p=0;p<2;++p){o=F.a7X[p]
if(c7)d2=d?A.bd:A.eJ
else d2=A.cx
d3.O(new B.r(o,-17),3.2,c8.$1(d2))}d2=d3.c
J.bs(d2.save())
d2.translate(14,0)
d3.jt(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.ah(A.J,D.aar,c9.$2(A.bQ,4))
d2.restore()
d3.ah(D.eET,D.eFd,c9.$2(A.bQ,4))
d3.aE(D.frs,c8.$1(c7?A.bd.j(0.7):A.aN))
return!0
case"toaster":a0=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a0*14,p=0;p<2;++p){t=d0.$5(D.aEX[p]+1,d2,10,14,2)
q=B.ap(A.bM,A.de,a0)
q.toString
d3.aq(t,c8.$1(q))}d3.aq(d0.$5(-24,-6,48,26,8),d1.$3(D.fqV,A.bP,A.bl))
for(p=0;p<2;++p){o=D.aEX[p]
d2=d0.$5(o,-5,12,5,2)
d3.aq(d2,c8.$1(c7?A.fM:A.ax))
if(c7){d2=d0.$5(o,-5,12,5,2)
t=c8.$1(A.cW.j(0.5))
t.y=O.oX
d3.aq(d2,t)}}d3.ah(D.eCk,D.eCF,c9.$2(A.ax,3))
return!0
case"ledstrip":d3.aq(d0.$5(-34,-4,68,10,4),c8.$1(A.cx))
for(d2=d5*90,v=0;v<9;++v){a1=A.i.F(d2+v*40,360)
l=c7?new Aw.pE(1,a1,0.8,1).jg():A.cU
if(c7){t=c8.$1(l.j(0.45))
t.y=O.oX
d3.O(new B.r(-30+v*7.5,1),7,t)}d3.O(new B.r(-30+v*7.5,1),2.6,c8.$1(l))}d3.aq(d0.$5(-40,-2,6,6,1),c8.$1(A.d0))
return!0
case"pump":d3.aq(d0.$5(-16,-2,32,22,6),d1.$3(D.fqL,A.cI,A.GW))
d3.O(D.eFn,8,c8.$1(A.tk))
d2=d3.c
J.bs(d2.save())
d2.translate(-2,9)
d3.jt(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
d3.ah(A.J,new B.r(Math.cos(t)*7,Math.sin(t)*7),c9.$2(A.fC,2.4))}d2.restore()
d2=new B.aH($.T().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(16,6))
d2.E(new B.aq(26,6))
d2.E(new B.aq(26,-20))
d2.E(new B.aq(10,-20))
d3.af(d2,c9.$2(A.bQ,4))
if(c7){for(d2=d5*0.9,v=0;v<5;++v)d3.O(new B.r(26,6-A.i.F(d2+v*0.2,1)*26),2.2,c8.$1(A.hm))
d3.O(D.eDB,3.2,c8.$1(A.hm.j(0.7)))}return!0
case"hairdryer":d2=d3.c
J.bs(d2.save())
d3.jt(0,-0.15)
d3.aq(d0.$5(-26,-14,40,22,10),d1.$3(D.fqX,A.hZ,A.v0))
d3.aq(d0.$5(14,-10,12,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-10,6,12,22,4),c8.$1(A.cU))
d2.restore()
if(c7){for(d2=d5*3,v=0;v<4;++v){u=A.i.F(d2+v*0.25,1)
t=u*18
q=-10+v*5
d3.ah(new B.r(24+t,q),new B.r(32+t,q),c9.$2(A.c.j(1-u),1.8))}d2=c8.$1(A.cW.j(0.4))
d2.y=O.oX
d3.O(D.eCb,8,d2)}return!0
case"headphones":d3.cQ(B.bZ(A.dS,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bz,4))
for(d2=d5*12,p=0;p<2;++p){o=F.U4[p]
t=o-7
d3.aq(d0.$5(t,0,14,20,6),d1.$3(new B.a5(t,0,t+14,20),A.bj,A.nb))
if(c7)for(t=o<0,v=1;v<=2;++v){q=B.bY(new B.r(o,10),10+v*5+A.i.F(d2,5))
h=t?2.2:-0.9
d3.cQ(q,h,1.6,!1,c9.$2(A.eI.j(0.9-v*0.3),1.6))}}if(c7)d6.$5(d3,"\u266a",new B.r(-4,-8-A.i.F(d5*14,8)),A.l3,12)
return!0
case"smartwatch":d3.aq(d0.$5(-8,-30,16,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-8,14,16,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-14,-17,28,32,8),d1.$3(D.fqz,A.d0,A.cU))
d3.aq(d0.$5(-11,-14,22,26,6),c8.$1(A.dY))
if(c7){a2=new B.W(Date.now(),0,!1)
d6.$5(d3,A.a.aZ(A.o.v(B.cX(a2)),2,"0")+":"+A.a.aZ(A.o.v(B.fx(a2)),2,"0"),D.eBz,A.bf,9.5)
j=(Math.sin(d5*9)+1)/2
d2=B.ap(A.GE,A.hJ,j)
d2.toString
d6.$5(d3,"\u2665",new B.r(-8,1),d2,8+j*2)
d6.$5(d3,""+(70+A.o.F(A.i.bd(d5*2),6)),A.dS,A.c,7)}return!0
case"tablet":d3.aq(d0.$5(-30,-22,60,44,6),c8.$1(M.ni))
d3.aq(d0.$5(-30,-22,60,44,6),c9.$2(A.bQ,1.6))
a3=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nf(a3),$.mS(),!0)
d2.translate(-27,-19)
K.Mz(d3,D.fxW,d5,!1,c6,c6)
d2.restore()}else d3.aq(a3,c8.$1(D.wV))
return!0
case"buck":a4=d0.$5(-26,-22,52,42,5)
d3.aq(a4,d1.$3(new B.a5(a4.a,a4.b,a4.c,a4.d),A.dX,A.dl))
d3.aq(a4,c9.$2(A.aT,1.2))
d3.O(D.aOL,9,c8.$1(A.ax))
d3.O(D.aOL,6,c9.$2(A.de,2))
d3.aq(d0.$5(4,-2,14,10,2),c8.$1(A.ax))
d3.aq(d0.$5(-22,-19,44,12,2),c8.$1(A.dY))
d2=A.i.a5(d4.db,1)
t=A.i.a5(c7?d4.dx:d4.e,1)
q=c7?A.bf:A.an
d6.$5(d3,d2+"\u2192"+t+"V",D.eDL,q,8.2)
d3.O(D.eC2,2.4,c8.$1(c7?A.bk:A.aN))
d6.$5(d3,"IN",D.eFe,A.ac,6)
d6.$5(d3,"OUT",D.eDr,A.ac,6)
return!0
case"regulator":a5=c7?A.i.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=B.ap(A.bQ,A.aC,a5)
t.toString
d3.aq(d2,c8.$1(t))
d3.O(H.aap,3,c8.$1(A.aN))
d3.aq(d0.$5(-12,-4,24,18,3),d1.$3(D.fqv,A.cU,A.ip))
d6.$5(d3,"7805",D.aaA,A.ac,8)
for(p=0;p<3;++p){d2=D.dAu[p]-1
d3.aE(new B.a5(d2,14,d2+2,22),c8.$1(A.dT))}if(a5>0.2)for(d2=d5*0.9,v=0;v<3;++v){u=A.i.F(d2+v*0.33,1)
d3.O(new B.r(-6+v*6,-28-u*12),2+u*2,c8.$1(A.c.j(0.5*(1-u))))}d6.$5(d3,"5V",D.eFN,A.bq,9)
return!0
case"diode":d3.ah(D.aOQ,D.aOy,c9.$2(A.dT,2.4))
d3.aq(d0.$5(-14,-7,28,14,6),c8.$1(A.as.j(0.85)))
d3.aE(D.fqe,c8.$1(A.bq))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.eH.j(0.4))
t.y=A.ld
d3.aq(d2,t)}d2=new B.aH($.T().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-8,-4))
d2.E(new B.aq(-8,4))
d2.E(new B.aq(-1,0))
d2.E(new B.bA())
d3.af(d2,c8.$1(A.b9))
d6.$5(d3,"one way",D.eF3,A.aF,8)
return!0
case"ldr":d3.ah(D.aOQ,D.aaA,c9.$2(A.dT,2.4))
d3.ah(D.aOE,D.aOy,c9.$2(A.dT,2.4))
d3.O(A.J,12,c8.$1(A.de))
d3.O(A.J,12,c9.$2(A.tp,1.6))
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
d2=B.ap(A.bz,A.eH,d4.f)
d2.toString
d6.$5(d3,"\u2600",new B.r(-6,-26),d2,14)
d6.$5(d3,""+A.i.S(20+980*(1-d4.f))+"\u03a9",D.eEU,A.ac,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":switch(d2){case"lgtv":t=A.ey
break
case"sonytv":t=A.t9
break
case"appletv":t=A.dT
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
h.clipRRect(B.nf(a3),$.mS(),!0)
h.translate(t,q)
K.h6G(d3,new B.av(a3.c-t,a3.d-q),d4.at,d5,d4.ax,-1,c6,c6)
h.restore()
d3.O(D.eCI,1.6,c8.$1(A.bf))}else{d3.aq(a3,c8.$1(D.wV))
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
d3.af(K.hP5(),c8.$1(A.cz))
d2.restore()}else{switch(d2){case"lgtv":d2=F.aU3
break
case"sonytv":d2=F.aTW
break
default:d2=F.aTY
break}a8=B.h_(c6,A.cL,c6,c6,c6,B.cW(c6,c6,c6,c6,c6,c6,c6,c6,c6,B.l(c6,c6,d2.b,c6,c6,c6,c6,c6,c6,c6,c6,3.6,c6,c6,A.C,c6,1,!0,c6,0.25,c6,c6,c6,c6,c6,c6),d2.a),A.a8,A.cd,c6,A.e4,A.ce)
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
t.clipRRect(B.nf(a3),$.mS(),!0)
q=a3.a
h=a3.b
t.translate(q,h)
K.Mz(d3,new B.av(a3.c-q,a3.d-h),d5,!1,c6,c6)
t.restore()}else d3.aq(a3,c8.$1(D.wV))
if(b0){t=a3.b
q=a3.d
d3.ah(new B.r(0,t),new B.r(0,q),c9.$2(A.v.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aq(d0.$5(-4,a3.b+1.2,8,2.6,1.3),c8.$1(A.v))
else{d2=b0?b1/2-7:0
d3.O(new B.r(d2,a3.b+3),1.3,c8.$1(A.v))}return!0
case"ereader":d3.aq(d0.$5(-17,-28,34,52,4),c8.$1(A.cU))
d3.aq(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bP))
if(c7){d6.$5(d3,"NGMY",D.eFU,A.ax,9)
for(v=0;v<9;++v){d2=-9+v*3.6
t=A.o.F(v,4)===3?14:22
d3.aE(new B.a5(-11,d2,-11+t,d2+1.4),c8.$1(A.bl))}d3.O(A.aan,1.6,c8.$1(A.ax))}return!0
case"laptop":d3.aq(d0.$5(-30,-28,60,42,4),d1.$3(D.fr6,A.cE,A.bl))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nf(b8),$.mS(),!0)
t=b8.a
q=b8.b
d2.translate(t,q)
K.Mz(d3,new B.av(b8.c-t,b8.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(b8,c8.$1(D.wV))
d2=new B.aH($.T().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-38,16))
d2.E(new B.aq(38,16))
d2.E(new B.aq(34,21))
d2.E(new B.aq(-34,21))
d2.E(new B.bA())
d3.af(d2,c8.$1(D.akz))
d3.aq(d0.$5(-7,16,14,2,1),c8.$1(A.bl))
return!0
case"imac":d3.aq(d0.$5(-32,-28,64,46,5),d1.$3(D.fra,A.cm,A.cE))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nf(b9),$.mS(),!0)
t=b9.a
q=b9.b
d2.translate(t,q)
K.Mz(d3,new B.av(b9.c-t,b9.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(b9,c8.$1(D.wV))
d3.O(D.eBb,2,c8.$1(A.bQ))
d2=new B.aH($.T().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-6,18))
d2.E(new B.aq(6,18))
d2.E(new B.aq(10,26))
d2.E(new B.aq(-10,26))
d2.E(new B.bA())
d3.af(d2,c8.$1(D.akz))
return!0
case"monitor":d3.aq(d0.$5(-34,-28,68,40,3),c8.$1(A.ey))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nf(c0),$.mS(),!0)
t=c0.a
q=c0.b
d2.translate(t,q)
K.Mz(d3,new B.av(c0.c-t,c0.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(c0,c8.$1(D.wV))
d3.aE(D.frh,c8.$1(A.bl))
d3.aq(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.d0))
return!0
case"projector":if(c7){d2=new B.aH($.T().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(14,4))
d2.E(new B.aq(-32,-42))
d2.E(new B.aq(34,-42))
d2.E(new B.bA())
d3.af(d2,c8.$1(A.eH.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nf(c1),$.mS(),!0)
t=c1.a
q=c1.b
d2.translate(t,q)
K.Mz(d3,new B.av(c1.c-t,c1.d-q),d5,!1,c6,c6)
d2.restore()}d3.aq(d0.$5(-26,-4,52,24,6),d1.$3(D.fqY,A.hX,A.d0))
d3.O(D.aOj,7,c8.$1(A.ax))
d3.O(D.aOj,4,c8.$1(c7?A.eH:A.cx))
for(v=0;v<4;++v){d2=-20+v*4
d3.ah(new B.r(d2,2),new B.r(d2,14),c9.$2(A.dJ,1))}return!0
case"carscreen":d3.aq(d0.$5(-34,-10,68,32,12),c8.$1(A.ax))
c2=d0.$5(-30,-20,60,28,8)
d3.aq(c2,c8.$1(M.ni))
d3.aq(c2,c9.$2(A.bz,1.2))
if(c7){c3=new B.aH($.T().r,A.ak,c6,c6,B.a([],x.v))
c3.E(new B.aZ(-26,4))
c3.E(new B.ck(-10,-14+Math.sin(d5)*3,6,-6))
c3.E(new B.aq(22,-16))
d3.af(c3,c9.$2(A.aH,2.2))
d2=A.i.F(d5*6,48)
d3.O(new B.r(-26+d2,4-d2*0.1),2.4,c8.$1(A.bf))
d6.$5(d3,""+(88+A.o.F(A.i.bd(d5*2),5)),H.aOD,A.c,10)
d6.$5(d3,"km/h",D.eDz,A.aF,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aq(c4,d1.$3(new B.a5(c4.a,c4.b,c4.c,c4.d),A.d0,A.cU))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nf(c5),$.mS(),!0)
t=c5.a
q=c5.b
d2.translate(t,q)
K.Mz(d3,new B.av(c5.c-t,c5.d-q),d5,!1,c6,c6)
d2.restore()
d2=c8.$1(A.bj.j(0.2))
d2.y=A.nn
d3.O(A.J,26,d2)}else d3.aq(c5,c8.$1(A.a_))
d3.ah(D.eFu,D.eFz,c9.$2(A.bl,4))
d3.ah(D.eCK,D.eD_,c9.$2(A.bl,4))
return!0}return!1},
h6q:function h6q(){},
h6s:function h6s(){},
h6t:function h6t(){},
h6r:function h6r(){},
hwd(d,e,f,g){return new C.alc(d,g,f,e)},
GP(d,e,f){return new C.bfc(d,e,f)},
alc:function alc(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
ald:function ald(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.md$=j
_.fe$=k
_.hf$=l
_.bv$=m
_.ab$=n
_.c=_.a=null},
bMA:function bMA(d,e){this.a=d
this.b=e},
bMB:function bMB(d){this.a=d},
bMz:function bMz(d){this.a=d},
bMC:function bMC(){},
bMD:function bMD(d){this.a=d},
bME:function bME(d,e,f){this.a=d
this.b=e
this.c=f},
bMy:function bMy(d,e){this.a=d
this.b=e},
bMv:function bMv(d,e){this.a=d
this.b=e},
bMw:function bMw(d,e,f){this.a=d
this.b=e
this.c=f},
bMp:function bMp(d,e){this.a=d
this.b=e},
bMq:function bMq(){},
bMx:function bMx(d,e,f){this.a=d
this.b=e
this.c=f},
bMu:function bMu(d,e){this.a=d
this.b=e},
bMr:function bMr(d,e){this.a=d
this.b=e},
bMs:function bMs(d,e){this.a=d
this.b=e},
bMt:function bMt(d){this.a=d},
bMU:function bMU(d){this.a=d},
bMV:function bMV(){},
bM_:function bM_(){},
bMW:function bMW(d,e){this.a=d
this.b=e},
bMT:function bMT(d,e){this.a=d
this.b=e},
bMO:function bMO(d){this.a=d},
bML:function bML(d,e,f){this.a=d
this.b=e
this.c=f},
bMM:function bMM(d,e){this.a=d
this.b=e},
bMP:function bMP(d){this.a=d},
bMJ:function bMJ(d,e){this.a=d
this.b=e},
bMK:function bMK(d,e){this.a=d
this.b=e},
bMN:function bMN(d){this.a=d},
bMQ:function bMQ(d){this.a=d},
bMG:function bMG(d,e){this.a=d
this.b=e},
bMH:function bMH(d,e){this.a=d
this.b=e},
bMI:function bMI(d,e){this.a=d
this.b=e},
bMR:function bMR(d){this.a=d},
bMF:function bMF(d){this.a=d},
bMS:function bMS(d){this.a=d},
bM0:function bM0(d,e){this.a=d
this.b=e},
bMm:function bMm(d,e){this.a=d
this.b=e},
bMo:function bMo(d,e){this.a=d
this.b=e},
bMn:function bMn(d,e){this.a=d
this.b=e},
bMl:function bMl(){},
bM7:function bM7(d){this.a=d},
bM6:function bM6(d){this.a=d},
bM8:function bM8(d,e){this.a=d
this.b=e},
bM9:function bM9(d){this.a=d},
bM5:function bM5(d){this.a=d},
bMd:function bMd(d,e,f){this.a=d
this.b=e
this.c=f},
bM4:function bM4(d,e){this.a=d
this.b=e},
bMe:function bMe(d,e){this.a=d
this.b=e},
bMf:function bMf(d,e){this.a=d
this.b=e},
bMg:function bMg(d,e){this.a=d
this.b=e},
bMh:function bMh(d,e,f){this.a=d
this.b=e
this.c=f},
bM3:function bM3(d,e){this.a=d
this.b=e},
bMi:function bMi(d,e,f){this.a=d
this.b=e
this.c=f},
bM2:function bM2(d,e){this.a=d
this.b=e},
bMj:function bMj(d,e,f){this.a=d
this.b=e
this.c=f},
bM1:function bM1(d,e){this.a=d
this.b=e},
bMk:function bMk(d){this.a=d},
bMa:function bMa(d){this.a=d},
bMb:function bMb(d){this.a=d},
bMc:function bMc(d){this.a=d},
bfc:function bfc(d,e,f){this.a=d
this.b=e
this.c=f},
fC6:function fC6(){},
fC7:function fC7(){},
fC8:function fC8(){},
fBU:function fBU(){},
fC9:function fC9(){},
fBT:function fBT(){},
fCa:function fCa(){},
fBY:function fBY(){},
fBS:function fBS(){},
fBZ:function fBZ(){},
fBR:function fBR(){},
fC_:function fC_(){},
fBQ:function fBQ(){},
fC0:function fC0(){},
fBO:function fBO(){},
fBP:function fBP(){},
fC1:function fC1(){},
fBM:function fBM(){},
fBN:function fBN(){},
fC2:function fC2(){},
fBL:function fBL(){},
X_:function X_(d){this.a=d},
aGC:function aGC(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
e62:function e62(d,e){this.a=d
this.b=e},
e6b:function e6b(d){this.a=d},
e6c:function e6c(){},
e6d:function e6d(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e6e:function e6e(){},
e61:function e61(d){this.a=d},
e60:function e60(d,e,f){this.a=d
this.b=e
this.c=f},
e6_:function e6_(d,e){this.a=d
this.b=e},
e5Y:function e5Y(d){this.a=d},
e5Z:function e5Z(){},
e6a:function e6a(d){this.a=d},
e69:function e69(d){this.a=d},
e67:function e67(d,e){this.a=d
this.b=e},
e65:function e65(d){this.a=d},
e66:function e66(){},
e68:function e68(d,e,f){this.a=d
this.b=e
this.c=f},
e63:function e63(d,e){this.a=d
this.b=e},
e64:function e64(){},
e6g:function e6g(d){this.a=d},
e6h:function e6h(d,e){this.a=d
this.b=e},
e6f:function e6f(){},
e6i:function e6i(d,e){this.a=d
this.b=e},
e6j:function e6j(d){this.a=d},
e6k:function e6k(d){this.a=d},
aAw:function aAw(d,e){this.c=d
this.a=e},
bdg:function bdg(d,e){var _=this
_.d=$
_.bv$=d
_.ab$=e
_.c=_.a=null},
cOQ:function cOQ(d){this.a=d},
bdf:function bdf(d,e){this.b=d
this.a=e},
cOP:function cOP(d){this.a=d},
aAR:function aAR(){},
aAS:function aAS(){},
aNh:function aNh(){},
bC8:function bC8(){},
iEP(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bY(A.w7,23)
$.T()
b8=B.L()
b8.r=A.ax.gp(0)
b9.O(A.w7,25,b8)
b8=B.L()
b8.san(D.eOE.az(0,v))
b9.O(A.w7,23,b8)
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
b9.ah(A.w7,new B.r(b8*18,s*18-2),r)
r=B.L()
r.r=A.bq.gp(0)
b9.O(A.w7,3,r)
c2.$5(b9,w?"V":"A",D.eFC,A.bq,12)
c2.$5(b9,w?A.i.a5(o,1)+" V":""+A.i.S(o*1000)+" mA",D.eEY,A.ax,9.5)
return!0
case"fan":b8=B.bx(D.fqr,A.hs)
$.T()
s=B.L()
s.r=A.bz.gp(0)
b9.aq(b8,s)
s=B.L()
s.r=A.an.gp(0)
b9.aE(D.fri,s)
s=B.L()
s.r=A.a_.j(0.6).gp(0)
b9.O(H.w8,22,s)
for(b8=b9.c,u=0;u<4;++u){J.bs(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.bZ(A.aOb,18,10)
r=new B.ar(A.U,A.R,A.X,A.Y,A.W)
r.r=A.hm.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
b9.c1(s,r)
b8.restore()}b8=B.L()
b8.r=A.bt.gp(0)
b9.O(H.w8,4,b8)
b8=B.L()
b8.b=A.ad
b8.c=2
b8.r=A.cE.gp(0)
b9.O(H.w8,22,b8)
b8=B.L()
b8.b=A.ad
b8.c=0.8
b8.r=A.jX.gp(0)
b9.O(H.w8,14,b8)
return!0
case"speaker":n=B.bx(D.aUt,A.qn)
$.T()
b8=B.L()
b8.san(D.avB.az(0,new B.a5(n.a,n.b,n.c,n.d)))
b9.aq(n,b8)
m=b7?Math.sin(c1*40)*1.6:0
b8=B.L()
b8.san(D.eP0.az(0,B.bY(A.cy,15)))
b9.O(A.cy,14+m,b8)
b8=B.L()
b8.r=A.d0.gp(0)
b9.O(A.cy,5,b8)
b8=B.L()
b8.r=A.bl.gp(0)
b9.O(H.aao,5+m*0.4,b8)
if(b7)for(b8=c1*18,u=1;u<=3;++u){s=B.bY(D.eCj,6+u*6+A.i.F(b8,6))
r=new B.ar(A.U,A.R,A.X,A.Y,A.W)
r.b=A.ad
r.c=1.8
r.r=A.c5.j(0.9-u*0.2).gp(0)
b9.cQ(s,-0.8,1.6,!1,r)}return!0
case"clock":l=B.bx(D.fr9,A.qn)
$.T()
b8=B.L()
b8.san(D.cd8.az(0,new B.a5(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
b8=B.bx(D.aUv,A.jN)
s=B.L()
s.r=A.ip.gp(0)
b9.aq(b8,s)
if(b7){k=new B.W(Date.now(),0,!1)
j=B.G9(k)<500?":":" "
i=A.a.aZ(A.o.v(B.cX(k)),2,"0")
h=A.a.aZ(A.o.v(B.fx(k)),2,"0")
b8=B.L()
b8.r=A.bf.j(0.12).gp(0)
b9.aE(D.aUv,b8)
c2.$5(b9,i+j+h,D.eFi,A.bf,21)}b8=B.L()
b8.r=A.cE.gp(0)
b9.O(D.eFg,2.4,b8)
b8=B.L()
b8.r=A.cE.gp(0)
b9.O(D.eCo,2.4,b8)
return!0
case"calculator":l=B.bx(D.fqQ,A.iD)
$.T()
b8=B.L()
b8.san(D.avE.az(0,new B.a5(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
b8=B.bx(D.fqJ,A.hG)
s=B.L()
s.r=(b7?A.a0b:D.bwe).gp(0)
b9.aq(b8,s)
if(b7)c2.$5(b9,"3.14159",D.eEX,A.ZO,10.5)
for(g=0;g<4;++g)for(b8=-6+g*8,s=b8+6,f=0;f<4;++f){r=-15+f*8
r=B.bx(new B.a5(r,b8,r+6,s),A.Fo)
$.T()
q=new B.ar(A.U,A.R,A.X,A.Y,A.W)
q.r=(f===3?A.c8:A.bP).gp(0)
b9.aq(r,q)}return!0
case"phone":l=B.bx(D.fqE,A.iD)
$.T()
b8=B.L()
b8.r=M.ni.gp(0)
b9.aq(l,b8)
b8=B.L()
b8.b=A.ad
b8.c=1.9
b8.r=D.amy.gp(0)
b9.aq(l,b8)
e=B.bx(D.fqt,A.hs)
if(b7){b8=B.L()
b8.san(D.cev.az(0,new B.a5(e.a,e.b,e.c,e.d)))
b9.aq(e,b8)
b8=b9.c
J.bs(b8.save())
b8.clipRRect(B.nf(e),$.mS(),!0)
b8.translate(-12,-25)
K.Mz(b9,D.fxy,c1,!1,b6,b6)
b8.restore()
d=A.i.F(c1*0.12,1)
b8=B.bx(D.fqq,A.hG)
s=B.L()
s.r=A.b9.gp(0)
b9.aq(b8,s)
s=B.L()
s.r=A.bf.gp(0)
b9.aE(new B.a5(-10,14.5,-10+20*d,16.9),s)
c2.$5(b9,"\u26a1"+A.i.S(d*100)+"%",D.eE4,A.c,6)}else{b8=B.L()
b8.r=D.wV.gp(0)
b9.aq(e,b8)}b8=B.bx(D.fry,D.eP9)
s=B.L()
s.r=A.v.gp(0)
b9.aq(b8,s)
return!0
case"router":l=B.bx(D.fr8,A.pl)
$.T()
b8=B.L()
b8.san(D.cdq.az(0,new B.a5(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
for(a0=0;a0<2;++a0){a1=F.U4[a0]
b8=a1<0?-4:4
s=new B.ar(A.U,A.R,A.X,A.Y,A.W)
s.r=A.cx.gp(0)
s.c=4
s.d=A.bG
b9.ah(new B.r(a1,-4),new B.r(a1+b8,-28),s)}for(u=0;u<4;++u){if(b7)a2=A.o.F(A.i.bd(c1*(3+u*1.3)),2)===0||u===0
else a2=!1
b8=new B.ar(A.U,A.R,A.X,A.Y,A.W)
b8.r=(a2?A.bk:A.aN).gp(0)
b9.O(new B.r(-15+u*10,11),2.6,b8)}if(b7)for(b8=c1*10,u=1;u<=3;++u){s=B.bY(H.w8,8+u*6+A.i.F(b8,6))
r=new B.ar(A.U,A.R,A.X,A.Y,A.W)
r.b=A.ad
r.c=1.8
r.r=A.fK.j(0.9-u*0.2).gp(0)
b9.cQ(s,-2.3,1.5,!1,r)}return!0
case"siren":a3=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bx(D.fqP,A.hs)
s=$.T()
r=B.L()
r.r=A.cU.gp(0)
b9.aq(b8,r)
if(b7){b8=B.L()
b8.r=A.aC.j(0.5*a3).gp(0)
b8.y=A.Dq
b9.O(A.w7,34,b8)}a4=new B.aH(s.r,A.ak,b6,b6,B.a([],x.v))
a4.E(new B.aZ(-16,12))
a4.E(new B.aq(-16,-2))
a4.E(new B.ck(0,-30,16,-2))
a4.E(new B.aq(16,12))
a4.E(new B.bA())
b8=B.L()
b8.r=B.ap(A.ez,D.bmB,a3).gp(0)
b9.af(a4,b8)
b8=B.L()
b8.b=A.ad
b8.c=1.4
b8.r=A.bX.gp(0)
b9.af(a4,b8)
if(b7){b8=b9.c
J.bs(b8.save())
b8.translate(0,-2)
b9.jt(0,c1*7)
s=B.L()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.ah(A.J,H.aao,s)
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
q.san(D.cbo.az(0,D.fr0))
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
for(a0=0;a0<2;++a0){a1=F.aEY[a0]
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
l=new B.aH(b8,A.ak,b6,b6,B.a([],s))
l.E(new B.aZ(-18,20))
l.E(new B.aq(-14,-12))
l.E(new B.ck(0,-20,14,-12))
l.E(new B.aq(18,20))
l.E(new B.bA())
r=B.L()
r.san(D.ccx.az(0,D.fqO))
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
b8.b=A.ad
b8.c=5
b8.r=A.ax.gp(0)
b9.af(s,b8)
b8=B.L()
if(b7){s=B.ap(A.cW,A.v9,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.cU
b8.r=s.gp(0)
b9.aE(D.fqN,b8)
if(b7){b8=B.L()
b8.r=A.cW.j(0.3).gp(0)
b8.y=A.nn
b9.O(A.aal,24,b8)
for(b8=c1*0.9,u=0;u<4;++u){a6=A.i.F(b8+u*0.25,1)
s=Math.sin(a6*9+u)
r=new B.ar(A.U,A.R,A.X,A.Y,A.W)
r.r=A.c.j(0.6*(1-a6)).gp(0)
b9.O(new B.r(30+s*4,-26-a6*26),3+a6*5,r)}}b8=B.L()
b8.r=A.ax.gp(0)
b9.O(D.eBm,3,b8)
return!0
case"lamp":if(b7){u=A.i.D(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aH($.T().r,A.ak,b6,b6,B.a([],x.v))
b8.E(new B.aZ(-10,-14))
b8.E(new B.aq(-30,24))
b8.E(new B.aq(10,24))
b8.E(new B.aq(8,-14))
b8.E(new B.bA())
s=B.L()
s.r=A.eH.j(0.28*u).gp(0)
b9.af(b8,s)
s=B.L()
s.r=A.eH.j(0.5*u).gp(0)
s.y=Z.PH
b9.O(D.eFo,24,s)}b8=B.bx(D.frr,A.hs)
s=$.T()
r=B.L()
r.r=A.cU.gp(0)
b9.aq(b8,r)
r=B.L()
r.r=A.d0.gp(0)
r.c=3
r.d=A.bG
b9.ah(D.eBC,D.aOm,r)
r=B.L()
r.r=A.d0.gp(0)
r.c=3
r.d=A.bG
b9.ah(D.aOm,D.eFp,r)
a7=new B.aH(s.r,A.ak,b6,b6,B.a([],x.v))
a7.E(new B.aZ(-14,-16))
a7.E(new B.aq(6,-26))
a7.E(new B.aq(10,-12))
a7.E(new B.aq(-10,-6))
a7.E(new B.bA())
s=B.L()
s.r=(b7?A.aQ:A.kf).gp(0)
b9.af(a7,s)
b8=B.L()
b8.r=(b7?A.c:A.bl).gp(0)
b9.O(D.eFs,4,b8)
return!0
case"lights":b8=$.T().r
s=x.v
a8=new B.aH(b8,A.ak,b6,b6,B.a([],s))
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
b1.r=D.a6V[u].j(0.6).gp(0)
b1.y=A.I3
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
if(b0)p=D.a6V[u]
else{p=B.ap(D.a6V[u],A.v,0.65)
p.toString}q.r=p.gp(0)
b9.af(b2,q)}return!0}return C.iEO(b9,c0,c1,c2)},
h5:function h5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hr9(d){var w=D.mN.h(0,d)
return(w==null?null:w.b)===D.Bm},
iG4(d,e,f){return B.a8(d,!1).ca(B.vC(null,!1,!0,!0,new C.hbA(e,f),A.eX,null,A.pS,new C.hbB(),x.H))},
Ky:function Ky(d,e){this.a=d
this.b=e},
mm:function mm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hbA:function hbA(d,e){this.a=d
this.b=e},
hbB:function hbB(){},
WJ:function WJ(d,e,f){this.c=d
this.d=e
this.a=f},
aGs:function aGs(d,e,f){var _=this
_.d=$
_.e=null
_.r=_.f=!1
_.w=-99
_.x=d
_.z=_.y=0
_.bv$=e
_.ab$=f
_.c=_.a=null},
e1Z:function e1Z(d,e){this.a=d
this.b=e},
e2_:function e2_(d,e,f){this.a=d
this.b=e
this.c=f},
e29:function e29(d,e,f){this.a=d
this.b=e
this.c=f},
e1Y:function e1Y(d,e){this.a=d
this.b=e},
e1X:function e1X(d,e){this.a=d
this.b=e},
e2a:function e2a(d,e){this.a=d
this.b=e},
e2b:function e2b(d){this.a=d},
e1R:function e1R(d,e){this.a=d
this.b=e},
e1Q:function e1Q(d,e){this.a=d
this.b=e},
e1P:function e1P(d){this.a=d},
e27:function e27(){},
e23:function e23(d){this.a=d},
e24:function e24(d){this.a=d},
e25:function e25(d){this.a=d},
e26:function e26(d){this.a=d},
e2c:function e2c(d){this.a=d},
e22:function e22(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e20:function e20(){},
e21:function e21(d){this.a=d},
e28:function e28(d,e){this.a=d
this.b=e},
e1W:function e1W(d,e){this.a=d
this.b=e},
e1U:function e1U(d){this.a=d},
e1V:function e1V(d){this.a=d},
e1O:function e1O(d){this.a=d},
e1T:function e1T(d,e,f){this.a=d
this.b=e
this.c=f},
e1S:function e1S(d){this.a=d},
bAa:function bAa(d,e,f){this.b=d
this.c=e
this.a=f},
agW:function agW(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aP5:function aP5(){},
a2Z(d,e,f,g,h,i){return new C.byX(d,e,f,g,h,i)},
byX:function byX(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fCB:function fCB(){},
fCC:function fCC(){},
fCD:function fCD(){},
fCE:function fCE(){},
fCF:function fCF(){},
fCG:function fCG(){},
fCH:function fCH(){},
fCI:function fCI(){},
aav:function aav(d){this.a=d},
cpS:function cpS(d){this.a=d},
cpT:function cpT(){},
cpR:function cpR(d,e){this.a=d
this.b=e},
cpQ:function cpQ(d){this.a=d},
Yn:function Yn(d){this.a=d},
aIb:function aIb(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.he$=f
_.md$=g
_.fe$=h
_.hf$=i
_.bv$=j
_.ab$=k
_.c=_.a=null},
f2F:function f2F(d){this.a=d},
f2B:function f2B(d){this.a=d},
f2A:function f2A(d,e){this.a=d
this.b=e},
f2D:function f2D(d,e){this.a=d
this.b=e},
f2C:function f2C(d,e){this.a=d
this.b=e},
f2E:function f2E(d){this.a=d},
bAm:function bAm(d,e,f){this.b=d
this.c=e
this.a=f},
X7:function X7(d){this.a=d},
bob:function bob(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.he$=d
_.md$=e
_.fe$=f
_.hf$=g
_.bv$=h
_.ab$=i
_.c=_.a=null},
e9L:function e9L(){},
e9M:function e9M(){},
e9G:function e9G(d,e){this.a=d
this.b=e},
e9I:function e9I(d,e){this.a=d
this.b=e},
e9J:function e9J(d){this.a=d},
e9H:function e9H(d){this.a=d},
e9K:function e9K(d){this.a=d},
buZ:function buZ(d,e,f){this.b=d
this.c=e
this.a=f},
Wi:function Wi(d){this.a=d},
bnL:function bnL(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.he$=d
_.md$=e
_.fe$=f
_.hf$=g
_.bv$=h
_.ab$=i
_.c=_.a=null},
dUb:function dUb(){},
dUc:function dUc(){},
dU6:function dU6(){},
dU9:function dU9(d,e){this.a=d
this.b=e},
dU8:function dU8(d,e){this.a=d
this.b=e},
dUa:function dUa(d){this.a=d},
dU7:function dU7(d){this.a=d},
aLG:function aLG(d,e,f){this.a=d
this.b=e
this.c=f},
WZ:function WZ(d){this.a=d},
bo2:function bo2(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
e5x:function e5x(d,e){this.a=d
this.b=e},
e5y:function e5y(d){this.a=d},
e5w:function e5w(d,e){this.a=d
this.b=e},
e5z:function e5z(d){this.a=d},
e5v:function e5v(d,e){this.a=d
this.b=e},
e5A:function e5A(d){this.a=d},
e5u:function e5u(d,e){this.a=d
this.b=e},
e5B:function e5B(d,e){this.a=d
this.b=e},
e5t:function e5t(d,e){this.a=d
this.b=e},
e5C:function e5C(d){this.a=d},
e5s:function e5s(d,e){this.a=d
this.b=e},
e5D:function e5D(d){this.a=d},
e5r:function e5r(d){this.a=d},
e5E:function e5E(d){this.a=d},
e5q:function e5q(d){this.a=d},
e5F:function e5F(d){this.a=d},
e5G:function e5G(d){this.a=d},
e5p:function e5p(d){this.a=d},
bq6:function bq6(d,e,f){this.b=d
this.c=e
this.a=f},
XK:function XK(d){this.a=d},
aHr:function aHr(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
exG:function exG(d,e){this.a=d
this.b=e},
exH:function exH(d,e,f){this.a=d
this.b=e
this.c=f},
exF:function exF(d,e,f){this.a=d
this.b=e
this.c=f},
exI:function exI(d){this.a=d},
exE:function exE(d){this.a=d},
exM:function exM(d){this.a=d},
exL:function exL(d,e){this.a=d
this.b=e},
exK:function exK(d,e){this.a=d
this.b=e},
exN:function exN(d,e){this.a=d
this.b=e},
exJ:function exJ(d,e){this.a=d
this.b=e},
exO:function exO(d){this.a=d},
XV:function XV(d){this.a=d},
aHP:function aHP(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eKO:function eKO(d){this.a=d},
eKP:function eKP(d){this.a=d},
eKM:function eKM(d,e){this.a=d
this.b=e},
eKN:function eKN(d){this.a=d},
eKL:function eKL(d){this.a=d},
eKQ:function eKQ(d){this.a=d},
eKR:function eKR(d){this.a=d},
eKS:function eKS(d){this.a=d},
eKT:function eKT(d,e){this.a=d
this.b=e},
Ye:function Ye(d){this.a=d},
bpk:function bpk(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eZ0:function eZ0(){},
eZ9:function eZ9(){},
eZ5:function eZ5(d){this.a=d},
eZ4:function eZ4(){},
eZ6:function eZ6(d,e){this.a=d
this.b=e},
eZ3:function eZ3(d,e){this.a=d
this.b=e},
eZ7:function eZ7(d){this.a=d},
eZ2:function eZ2(d,e){this.a=d
this.b=e},
eZ8:function eZ8(d){this.a=d},
eZ1:function eZ1(d){this.a=d},
XJ:function XJ(d){this.a=d},
boO:function boO(d,e,f,g,h,i,j,k){var _=this
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
_.md$=g
_.fe$=h
_.hf$=i
_.bv$=j
_.ab$=k
_.c=_.a=null},
ewl:function ewl(){},
ewm:function ewm(){},
ewe:function ewe(d){this.a=d},
ewd:function ewd(d){this.a=d},
ewf:function ewf(d){this.a=d},
ewc:function ewc(d){this.a=d},
ewg:function ewg(d){this.a=d},
ewb:function ewb(d){this.a=d},
ewh:function ewh(d,e){this.a=d
this.b=e},
ewa:function ewa(d,e){this.a=d
this.b=e},
ewi:function ewi(d){this.a=d},
ew9:function ew9(d,e){this.a=d
this.b=e},
ewj:function ewj(d){this.a=d},
ew8:function ew8(d,e){this.a=d
this.b=e},
ewk:function ewk(d){this.a=d},
ew7:function ew7(d,e){this.a=d
this.b=e},
bhB:function bhB(d,e,f){this.c=d
this.d=e
this.a=f},
aOS:function aOS(){},
bC4:function bC4(){},
aPc:function aPc(){},
bCa:function bCa(){},
aPD:function aPD(){},
bCk:function bCk(){},
aQ5:function aQ5(){},
bCt:function bCt(){},
K4(d,e,f,g){var w,v,u,t,s,r,q,p=$.auU
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.I)(e),++w)E.mJ(d,e[w],f,g)
return}for(p=B.cV(e,0,B.dz(4,"count",x.S),B.U(e).c),v=p.$ti,p=new B.bR(p,p.gJ(0),v.k("bR<aj.E>")),u=x.H,v=v.k("aj.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)E.mJ(d,s,f,g)
else B.bO(new B.bh(1000*q),new C.cpO(d,s,f,g),u)}},
cn9(d){return C.i9W(d)},
i9W(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$cn9=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aB(),$async$cn9)
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
return B.i($async$cn9,v)},
b55(d,e){return C.i9X(d,e)},
i9X(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b55=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aB(),$async$b55)
case 6:s=g
w=7
return B.b(s.aB("String","ngmy_play_progress_v1_"+d,A.V.au(e,null)),$async$b55)
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
return B.i($async$b55,v)},
cpO:function cpO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ivp(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.S(x.Y,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.B)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.I)(w),++q){p=w[q]
u.push(B.J(["k",p.b,"x",B.oK(A.i.a5(p.c,4)),"y",B.oK(A.i.a5(p.d,4)),"v",p.e,"l",B.oK(A.i.a5(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.oK(A.i.a5(p.as,3)),"ch",p.at,"vc",B.oK(A.i.a5(p.z,3)),"s",B.oK(A.i.a5(p.ch,2))],s,r))}w=B.a([],x.U)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.I)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.B(f,B.a3(f).k("ci.E"))
A.d.fd(l)
return A.V.au(B.J(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
iFd(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
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
a3=new C.ub(a2,d,a0,a1)
a3.ats(a2,d,a0,a1)
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
if(m!=null&&l!=null)a6.ano(m,A.i.M(B.dJ(J.t(p,1))),l,A.i.M(B.dJ(J.t(p,3))))}i=B.aJ(J.t(w,"challenge"))
i=A.i.M(i==null?0:i)
k=B.aR(x.S)
h=g.a(J.t(w,"done"))
h=J.aQ(h==null?A.bO:h)
while(h.C()){j=h.gP(h)
J.c8(k,A.i.M(B.dJ(j)))}return new B.bt4(i,k)}catch(a4){return a5}},
fU1(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fU1=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.aB(),$async$fU1)
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
return B.i($async$fU1,v)},
bJ4(d){return C.iGT(d)},
iGT(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bJ4=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.aB(),$async$bJ4)
case 7:w=6
return B.b(f.aB("String","ngmy_electronics_lab_v1",d),$async$bJ4)
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
return B.i($async$bJ4,v)},
h_S(d,e,f){var w=0,v=B.j(x.I),u,t,s,r,q,p
var $async$h_S=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(d.c===e&&d.d===f){u=d
w=1
break}$.T()
t=new B.oY(new B.ov())
s=B.v4(t,null)
r=B.L()
r.r=A.c7.gp(0)
s.aE(new B.a5(0,0,e,f),r)
s.biH(0,d,A.J,B.L())
q=t.n1()
w=3
return B.b(q.vL(e,f),$async$h_S)
case 3:p=h
q.t()
d.t()
u=p
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h_S,v)}},D,V,A2,As,K,F,M,A3,H,At,Au,Av,A4,Aw
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
C.amr.prototype={}
C.Xt.prototype={
R(){return new C.boC(B.S(x.N,x.i),new B.au(A.ay,$.ay()),B.a([],x.X),B.a([],x.eZ),B.mn(0,null,null))}}
C.boC.prototype={
gXQ(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
t(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
this.ch.t()
this.a2()},
Qz(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Qz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aS.bk$.d.c
if(s!=null)s.j_()
p.bM(0,A.ck)
t.l(new C.epn(t))
t.a.toString
p=t.gXQ()
w=3
return B.b(C.bEo(C.ij5(q,C.iva(p),o,t.ay)),$async$Qz)
case 3:s=e
r=s==null?null:J.ji(s)
if(r==null||r.length===0||A.a.Y(r,"{"))r=C.iwH(q,p,o)
if(t.c==null){w=1
break}t.l(new C.epo(t,o,r))
$.aS.U$.push(new C.epp(t))
case 1:return B.h(u,v)}})
return B.i($async$Qz,v)},
ZW(d){return this.c5S(d)},
b_d(){return this.ZW(null)},
c5S(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$ZW=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aS.bk$.d.c
if(s!=null)s.j_()
t.f.sb1(0,o)
t.l(new C.epA(t))
G.dH(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bEo(C.iqg(o)),$async$ZW)
case 3:r=n.a=m.iET(f)
p.b=""
if(r!=null&&!C.ivb(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.iwI(o)
q=B.ag(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.amr(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.l(new C.epB(p,t))
t.cbN(p.a)
case 1:return B.h(u,v)}})
return B.i($async$ZW,v)},
cbN(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
A.d.a6(w)
w=++m.as
v=m.gXQ()
A.d.a6(v.a)
A.d.a6(v.b)
m.e.a6(0)
m.l(new C.epw(m))
t=d.d
s=B.S(x.N,x.Y)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.epu(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.epx(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.I)(r),++u){p.$2(o,new C.epy(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.epz(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bj.j(0.1),g=B.m(16),f=B.K(A.bj.j(0.35),A.r,1)
if(m.x)j=B.A(B.a([D.fz6,A.bc,B.E(B.c(m.Q,l,l,l,l,l,l,A.By,l,l,l),1)],x.p),A.l,l,A.e,A.h,0,l,l)
else if(k==null)j=D.h_D
else{w=B.E(B.c(k.a,l,l,l,l,l,l,A.LV,l,l,l),1)
v=x.p
w=B.a([B.A(B.a([w,B.c(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fKf,l,l,l)],v),A.l,l,A.e,A.h,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.C(A.rc,B.c(u,l,l,l,l,l,l,D.fN8,l,l,l),l))
w.push(A.cQ)
w.push(B.c(k.b,l,l,l,l,l,l,A_.FO,l,l,l))
u=k.e
if(u.length!==0){t=A.aQ.j(0.12)
s=B.m(10)
w.push(B.p(l,B.c(u,l,l,l,l,l,l,D.fPR,l,l,l),A.f,l,l,new B.o(t,l,l,s,l,l,A.m),l,l,l,A.hz,A.cu,l,l,l))}w.push(A.aj)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
t=B.c(t,l,l,l,l,l,l,A.mg,l,l,l)
q=u[r]
s=s?A.c:A.aF
w.push(new B.C(A.HH,new B.c0(A.aK,A.e,A.h,A.B,l,A.p,l,0,B.a([t,A.b7,new B.bu(1,A.b6,B.c(q,l,l,l,l,l,l,new B.F(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.I)(j),++p){o=j[p]
t=A.bj.j(0.3)
s=new B.aP(12,12)
s=B.p(l,B.c(o.a,l,l,l,l,l,l,A.WZ,l,l,l),A.f,l,l,new B.o(t,l,l,new B.bc(s,s,s,s),l,l,A.m),l,l,l,l,A.h0,l,l,l)
t=A.c.j(0.07)
q=new B.aP(12,12)
A.d.u(w,B.a([A.N,new B.bL(A.a9,l,l,s,l),A.at,B.p(l,B.c(o.b,l,l,l,l,l,l,D.fVJ,l,l,l),A.f,l,l,new B.o(t,l,l,new B.bc(q,q,q,q),l,l,A.m),l,l,l,l,A.bS,l,l,l)],v))}if(m.ax)w.push(D.eGU)
j=B.cc(B.w(w,A.B,l,A.e,A.h,0,A.p),A.t,m.ch,A.y,l,l,l,l,l,A.ah)}w=x.p
g=B.w(B.a([B.akD(B.p(l,j,A.f,l,new B.aX(0,1/0,0,i),new B.o(h,l,f,g,l,l,A.m),l,l,l,D.bGa,A.ep,l,l,1/0),A.aZ,A.id),B.E(C.hwd(m.gXQ(),l,l,m.e),1)],w),A.l,l,A.e,A.h,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new E.e3("Ask about it",i,new C.epE(m),l,A.bj,l),new E.e3("Invent something new",!i,new C.epF(m),l,A.bj,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dD4[p]
i.push(new E.e3(n,!1,new C.epG(m,n),l,A.bj,l))}f.push(new E.fj(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.djr[p]
i.push(new E.e3(r,!1,new C.epH(m,r),l,A.bj,l))}f.push(new E.fj(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aN(l,A.M,!1,l,!0,A.t,l,B.aO(),m.f,l,l,l,l,l,2,B.bC(l,new B.b6(4,B.m(16),A.a1),l,A.eZ,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kC,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.am,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.epI(m,k),l,!1,l,l,!1,l,!0,l,A.ae,l,l,l,l,l,l,l,l,l,l,l,A.du,!0,A.a8,l,A.ao,l,A.WO,l,l),1)
h=m.at
v=h&&j?D.bWf:A.eh
j=h&&j?"Ask":"Invent"
f.push(B.A(B.a([i,A.aa,new E.fJ(v,j,new C.epJ(m,k),A.bj,l)],w),A.l,l,A.e,A.h,0,l,l))
return E.lZ(A.bj,A.fh,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.w(f,A.l,l,A.e,A.P,0,A.p))}}
C.Hi.prototype={}
C.vJ.prototype={}
C.XQ.prototype={
R(){return new C.aHG(A.J,A.J,A.aA,B.aR(x.S),$,A.bH,0,B.a([],x.X),null,null)}}
C.aHG.prototype={
gb0y(){var w,v,u,t=this,s=D.Jr[t.cx],r=D.U7[t.cy],q=D.Eq[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.e8(w,w.r,B.a3(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.aDf[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cD(p,0,new C.eEV())},
ga4H(){return D.Jr[this.cx].d/this.gb0y()},
gaSs(){return 0.1*(D.Jr[this.cx].d/0.9)/D.U7[this.cy].d},
Z(){this.a3()
this.mo()
C.cn9("rocket_lander").bE(new C.eFe(this),x.k)},
cbW(){var w=this
w.ay=A.i.D(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cV.ai()*0.6
w.f=new B.r(0.15+A.cV.ai()*0.7,0.08)
w.r=new B.r((A.cV.ai()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
mG(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.l(new C.eFf())
return}w=D.u4[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.i.D(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.r(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga4H()
v=v.a7(0,new B.r(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaSs())}if(m.dy){t=m.r
v=v.aI(0,t.aO(0,t.gcL()*6*D.aFg[m.d]))}t=m.r=m.r.a7(0,v.aO(0,d))
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
C.b55("rocket_lander",B.J(["unlocked",t],x.N,x.z))
C.K4("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga4H()/(D.u4[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.i.a5(m.ga4H()/(D.u4[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
G.dH(80,"",500,0,0.6,"noise")
B.fW()}}if(m.Q&&m.x>0&&A.o.F(A.i.bd(m.CW*20),2)===0)G.dH(90,"",70,0,0.12,"noise")
m.l(new C.eFg())},
aiw(d,e,f,g,h){var w,v=null,u=B.c(d,v,v,v,v,v,v,D.fMD,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new E.e3(e[w].a,f.$1(w),new C.eEX(this,g,w),v,h,v))
return new B.C(A.eB,B.w(B.a([u,A.cQ,B.c_(A.bI,s,A.br,v,6,6)],t),A.B,v,A.e,A.h,0,A.p),v)},
bKq(d){var w,v,u,t,s=this,r=null,q=s.ga4H()/(D.u4[s.d].b/9.81*0.28)>=1,p=A.i.S(1/s.gaSs()),o=D.aFg[s.d],n=B.m(24),m=d.c,l=B.K(m.j(0.6),A.r,1)
m=B.a([B.c("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.at,B.c(d.d+" Gravity here: "+B.v(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.ade,r,r,r),A.S,s.aiw("ENGINE: "+D.Jr[s.cx].b,D.Jr,new C.eEM(s),new C.eEN(s),A.cW),s.aiw("FUEL TANK: "+D.U7[s.cy].b,D.U7,new C.eEO(s),new C.eEP(s),A.bf),s.aiw("LANDING GEAR: "+D.Eq[s.db].b,D.Eq,new C.eEQ(s),new C.eER(s),A.aH),s.aiw("EXTRAS (tap to add)",D.aDf,new C.eES(s),new C.eET(s),A.bj)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.hiQ)
o=(q?A.bf:A.c1).j(0.14)
w=B.m(12)
v=A.i.a5(s.gb0y(),2)
u=A.i.a5(s.ga4H()/(D.u4[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.p(r,B.c("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.i.S(D.Eq[s.db].d*100)+".",r,r,r,r,r,r,D.fNi,r,r,r),A.f,r,r,new B.o(o,r,r,w,r,r,A.m),r,r,r,A.hz,A.bS,r,r,r))
m.push(A.S)
m.push(new B.bL(A.z,r,r,new E.fJ(A.og,"Launch",new C.eEU(s),A.bf,r),r))
return B.at(B.p(r,B.cc(B.w(m,A.B,r,A.e,A.P,0,A.p),A.t,r,A.y,r,r,A.bR,r,r,A.ah),A.f,r,A.ml,new B.o(D.bvJ,r,l,n,r,r,A.m),r,r,r,A.bS,r,r,r,r),r,r,r)},
b1L(d,e,f,g){var w=null,v=f?A.cW:A.c.j(0.1),u=B.m(18),t=B.K(A.aT,A.r,1)
return B.n1(A.j6,B.p(w,B.V(d,A.c,w,w,w,30),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,62,w,w,w,w,w,g),w,new C.eEJ(e),new C.eEK(e),w,w,w,w,new C.eEL(e))},
b1K(d,e,f){return this.b1L(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cg(new C.eF7(s,D.u4[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.u4[w].a:"\ud83d\udd12"
o.push(new E.e3(v,s.d===w,new C.eF8(s,w),r,D.u4[w].c,r))}v=B.a([s.b1K(F.asG,new C.eF9(s),s.y),A.bc,s.b1L(A.vB,new C.eFa(s),s.Q,130),A.bc,s.b1K(A.R2,new C.eFb(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?A.aH:A.c.j(0.1)
t=B.m(18)
A.d.u(v,B.a([A.bc,B.aA(r,B.p(r,D.c_B,A.f,r,r,new B.o(u,r,B.K(A.aT,A.r,1),t,r,r,A.m),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eFc(s),r,r,r,r,r,r,!1,A.a4)],p))}return E.lZ(A.cW,A.fh,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.w(B.a([new E.fj(o,"WORLD",r),B.A(v,A.l,r,A.bb,A.h,0,r,r)],p),A.l,r,A.e,A.P,0,A.p))}}
C.blv.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=this.b,l=D.u4[m.d],k=a1.a,j=a1.b,i=0+k,h=0+j,g=$.T(),f=B.L(),e=l.c,d=B.ap(I.a0N,e,0.25)
d.toString
f.san(new B.a6(A.aV,A.b1,A.w,B.a([F.ajr,d],x.O),n,n).az(0,new B.a5(0,0,i,h)))
a0.aE(new B.a5(0,0,i,h),f)
w=new B.e4()
w.cV(5)
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
s=new B.e4()
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
g=B.bx(q,A.jN)
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
a0.jt(0,m.w)
k=m.as
if(k==="crashed"){m=B.L()
m.r=A.cW.j(0.6).gp(0)
m.y=Z.PH
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
k.san(F.avF.az(0,D.fqA))
a0.af(o,k)
k=B.L()
k.r=A.aH.gp(0)
a0.O(H.w8,5,k)
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
C.aPM.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bCm.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bCc()}}
C.aW0.prototype={}
C.a5p.prototype={}
C.ben.prototype={}
C.Wh.prototype={
R(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.eC(["skin"],x.N),o=new Float32Array(0)
return new C.aG5(w,v,u,t,s,r,q,new B.cB(null,x.A),p,D.MX,D.MX,A.aA,A.cV,o,new Int32Array(0),$,A.bH,0,B.a([],x.X),null,null)}}
C.aG5.prototype={
Z(){var w=this
w.a3()
w.mo()
w.as=new C.c9n(w.gcll())
new C.dU4(w).$0()
return},
t(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a1(0)
v.d=null}this.bBf()},
clm(d){var w,v=this
if(v.c==null)return
w=J.a1(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.fc(0,B.J(["t","init","data",$.hGu],x.N,x.z))
v.at=!0
v.ay=""
v.aCu()
break
case"parts":v.l(new C.dTF(v))
break
case"pick":v.l(new C.dTG(v,d))
break
case"shot":v.ako(B.v(w.h(d,"data")))
break
case"error":$.an.$1("[body viewer] "+B.v(w.h(d,"text")))
if(v.c!=null&&!v.ax)v.l(new C.dTH(v))
break}},
aCu(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.aB5[q.cx]
v=new C.dTI()
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
ako(d){return this.cCZ(d)},
cCZ(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ako=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cK.aK(A.a.aV(d,A.a.c8(d,",")+1))
w=6
return B.b(B.ayi(B.a([B.cJJ(r,"image/png","body.png")],x.fH),null,"Made in NGMY Core Protocol"),$async$ako)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.K(x.q).f.T(I.aWU)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ako,v)},
aBT(d){var w=d.b
if(w==="skin")return this.CW>0
return this.ch.q(0,w)},
mG(d){var w,v=this
if(v.d==null)return
w=(v.k3+=d)*v.k4/60
if(v.ok&&v.ch.q(0,"organ")&&A.i.bd(w)!==A.i.bd(v.p1)){E.Yg("kick",0,0.4)
v.Vs(170,new C.dU5())}v.p1=w
return},
afY(d){var w,v,u,t,s=this
s.l(new C.dTJ(s,d))
if(d==null){s.fy=D.MX
s.fr=1
w=s.as
if(w!=null)w.fc(0,B.J(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.U(w).k("X<1>")
u=B.B(new B.X(w,new C.dTK(d),v),v.k("M.E"))
t=A.d.gG(u).b
if(t!=="skin"&&!s.ch.q(0,t)){s.ch.I(0,t)
if(s.CW===2)s.CW=1}s.aCu()
w=s.as
if(w!=null)w.fc(0,B.J(["t","focus","group",d],x.N,x.z))
s.id=0
s.cFw(t,d)
return},
cFw(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){E.Yg("kick",0,0.8)
this.Vs(260,new C.dTL())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")G.dH(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.Vs(w*70,new C.dTM(this))
else if(A.a.q(e,"intestine")||e==="Stomach")G.dH(110,"",360,0.7,0.3,"saw")
else E.hlj("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":G.dH(210+e.length*4,"",80,0.6,0.55,"tri")
G.dH(2400,"",20,0,0.3,v)
break
case"muscle":G.dH(70,"",150,1,0.6,"sine")
break
case"vessel":G.dH(300,"",380,0.4,0.22,v)
E.Yg("kick",0,0.3)
break
default:E.hlj("organic",2+A.o.F(e.length,6),200,0.4)}},
cKh(d){this.l(new C.dTO(this,d))},
b23(){var w,v,u,t,s,r,q,p=this,o=B.aR(x.N)
for(w=p.d.e,v=w.length,u=p.ch,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
if(p.aBT(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.I(0,s.a)}q=B.B(o,o.$ti.k("ci.E"))
w=q.length
if(w===0)return
p.p3=q[p.RG.av(w)]
p.R8=""},
c1x(d){var w,v,u=this
u.id=0
if(u.p2&&u.p3!=null){if(d==null)return
w=d===u.p3
u.l(new C.dTC(u,w,d))
v=x.t
C.K4("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.Vs(1100,new C.dTD(u))
return}if(d==null){if(u.cy!=null)u.afY(null)
return}u.afY(d)},
c59(d,e){var w,v=this,u=null,t=B.m(18),s=B.K(A.c5.j(0.5),A.r,1)
if(v.p2){w=v.p3
w=B.c(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p4+"\n"+v.R8,u,u,u,u,u,u,D.fIz,u,u,u)}else if(d==null||e==null)w=D.fXX
else{w=x.p
w=B.A(B.a([B.E(B.w(B.a([B.c(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hk,u,u,u),A.cQ,B.c(e.b,u,u,u,u,u,u,A_.FO,u,u,u)],w),A.B,u,A.e,A.P,0,A.p),1),B.aI(u,u,u,u,D.c2h,u,u,u,new C.dTE(v),u,u,u,u,"Back to the whole body",A.cp)],w),A.B,u,A.e,A.h,0,u,u)}return B.p(u,w,A.f,u,u,new B.o(I.ZY,u,s,t,u,u,A.m),u,u,u,u,X.ao0,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:D.dP5.h(0,g)
i.aCu()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.duC
u=v.length
t=i.ch
s=0
for(;s<v.length;v.length===u||(0,B.I)(v),++s){r=v[s]
if(i.aBT(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.q(w,q))w.push(q)}v=x.p
u=B.a([B.aI(h,h,h,h,I.p8,h,h,h,new C.dTV(i),h,h,h,h,"Share",h)],v)
q=B.a([],v)
p=i.as
if((p==null?h:p.b!=null)===!0){p=p.b
q.push(p==null?A.bK:B.C9(h,A.ql,p))}p=i.ax
o=p?0:1
q.push(new B.dp(p,B.xM(B.p(A.z,B.w(D.dEH,A.l,h,A.e,A.P,0,A.p),A.f,h,h,D.ba8,h,h,D.hLz,h,h,h,h,h),A.aZ,A.nk,o),h))
q=B.w(B.a([B.E(new B.am(A.a0,h,A.b4,A.t,q,h),1),new B.C(F.anI,i.c59(g,f),h)],v),A.l,h,A.e,A.h,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){n=D.dlc[s]
o=n.a
m=o==="skin"
if(m){l=i.CW
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=n.b
o=m?i.CW>0:t.q(0,o)
p.push(new E.e3(l,o,new C.dTW(i,n),n.c,A.c5,h))}p=B.a([new E.fj(p,h,h)],v)
if(!i.p2&&w.length!==0){o=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.I)(w),++s){k=w[s]
o.push(new E.e3(k,k===i.cy,new C.dTX(i,k),h,A.aQ,h))}p.push(new E.fj(o,"FIND",h))}if(t.q(0,"organ")){o=i.k4
p.push(E.ja(A.c1,""+A.i.S(o)+" beats/min","Heart rate",180,40,new C.dTY(i),o))}if(i.CW>0&&t.a===0){o=B.a([],v)
for(j=0;j<5;++j)o.push(new E.Gt(D.aB5[j],i.cx===j,new C.dTZ(i,j),!1,h))
p.push(new E.fj(o,"SKIN",h))}o=i.go
m=i.p2
l=m?"Quiz on":"Quiz"
v=B.a([new E.e3("Spin",o,new C.dU_(i),D.arF,A.aH,h),new E.fJ(A.m8,"Reset view",new C.dU0(i),A.c,h),new E.e3(l,m,new C.dU1(i),A.IL,A.aQ,h)],v)
if(t.q(0,"organ"))v.push(new E.e3("Heartbeat sound",i.ok,new C.dU2(i),T.p6,A.c1,h))
p.push(new E.fj(v,h,h))
return E.lZ(A.c5,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.w(p,A.l,h,A.e,A.P,0,A.p))}}
C.aOQ.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.aOR.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bBe()}}
C.c9n.prototype={
kU(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aK(e,"</script","<\\/script")
v=$.hNj
$.hNj=v+1
u="ngmy-body-viewer-"+v
$.xI()
$.qe().pq(u,new C.c9o(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fI(v,"message",new C.c9p(t),!1,x.gA)
t.b=u},
fc(d,e){var w,v
try{w=this.c
if(w!=null){w=B.S3(w.contentWindow)
if(w!=null)J.akq(w,e,"*")}}catch(v){}}}
C.yY.prototype={}
C.Dl.prototype={}
C.o2.prototype={}
C.bfb.prototype={}
C.Wo.prototype={
R(){var w=x.N,v=x.y,u=x.S
return new C.aG7(B.S(w,x.a2),B.a([],x.cB),B.S(w,v),B.S(w,v),B.S(w,u),A.aA,A.J,A.J,B.aR(u),$,A.bH,0,B.a([],x.X),null,null)}}
C.aG7.prototype={
Z(){var w=this
w.a3()
w.mo()
w.aeT()
$.aS.U$.push(new C.dVL(w))},
aeT(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aeT=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aB(),$async$aeT)
case 6:q=e.pt("ngmy_circuit_passed_v1")
r=q==null?A.M:q
if(s.c!=null)s.l(new C.dVp(s,r))
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
return B.i($async$aeT,v)},
aff(d){return this.c9q(d)},
c9q(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$aff=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.I(0,d)
u=3
w=6
return B.b(B.aB(),$async$aff)
case 6:r=f
q=s.cx
p=B.a3(q).k("kq<ci.E,n>")
q=B.B(new B.kq(q,new C.dVs(),p),p.k("M.E"))
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
return B.i($async$aff,v)},
aAm(d,e,f,g){var w="c"+this.y++,v=new C.Dl(w,e,f,g)
this.d.n(0,w,v)
return v},
mW(d,e,f){return this.aAm(0,e,f,0)},
aec(d,e){var w
if(D.AV.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a7(0,new B.r(-36,w))},
us(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aWG(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fe$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.ds(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.ea(m,D.d2k[A.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.us(p,0)&&n.us(p,1)
break
case"or":p=q.a
o=n.us(p,0)||n.us(p,1)
break
case"xor":p=q.a
o=n.us(p,0)!==n.us(p,1)
break
case"nand":p=q.a
o=!(n.us(p,0)&&n.us(p,1))
break
case"nor":p=q.a
o=!(n.us(p,0)||n.us(p,1))
break
case"not":o=!n.us(q.a,0)
break
default:o=n.us(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bUY(){return this.aWG(null)},
mG(d){var w,v,u,t,s,r,q,p,o,n=this
n.bUY()
if(!n.ax)return
for(w=n.d,w=new B.ba(w,B.a3(w).k("ba<2>")).gae(0),v=new B.eR(w,new C.dVM()),u=n.f,t=n.w,s=0;v.C();){r=w.gP(0).a
if(u.h(0,r)===!0){q=n.fe$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fe$)
o=s+1
G.dH(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
aAn(d){var w=this
w.d.a6(0)
A.d.a6(w.e)
w.f.a6(0)
w.r.a6(0)
w.cy=null},
mp(d,e){var w=this.x
return new B.r(d*w.a,e*w.b)},
awu(d){var w=this
if(w.x.A(0,A.aA)){$.aS.U$.push(new C.dVn(w,d))
return}w.l(new C.dVo(w,d))},
cFP(d){this.l(new C.dVt(this,d,$.bJs()[d]))},
cei(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bJs()[a0]
v=d.d
u=B.a3(v).k("ba<2>")
t=u.k("X<M.E>")
s=t.k("M.E")
r=B.B(new B.X(new B.ba(v,u),new C.dVi(),t),s)
A.d.b_(r,new C.dVj())
q=B.B(new B.X(new B.ba(v,u),new C.dVk(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.l(new C.dVl(d,w))
return}u=d.r
p=B.dE(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dH(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.h3(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aWG(0)
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
d.l(new C.dVm(d,o,a0))},
aBo(d){var w,v,u,t,s=this.d,r=B.a3(s).k("ba<2>")
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
cnX(d){var w,v,u,t,s,r=this.d,q=B.a3(r).k("ba<2>")
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
c52(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.ds(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.AV.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.aec(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.y(p,o)
s=l}}}return t},
bTI(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.aec(p,o)
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
cek(d){var w,v,u,t=this,s=t.aBo(d)
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
t.l(new C.dVu())
return}u=t.bTI(d)
if(u!=null)t.l(new C.dVv(t,u))
else t.l(new C.dVw(t))},
az9(d){return this.c8n(d)},
c8n(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$az9=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.aBo(d)
if(s==null){w=1
break}B.jG()
t.l(new C.dVr(t,s))
case 1:return B.h(u,v)}})
return B.i($async$az9,v)},
bG9(d){if(this.x.A(0,A.aA))return
this.l(new C.dVh(this,d,A.cV))
B.f3()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bJs()[g]
g=x.p
v=B.a([B.aI(h,h,h,h,B.V(i.ax?T.p6:A0.u_,A.ac,h,h,h,21),h,h,h,new C.dVF(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.m(16)
s=A.cw.j(0.14)
r=B.K(A.cw.j(0.5),A.r,1)
q=B.a([B.c("Challenge: "+w.a,h,h,h,h,h,h,D.fHH,h,h,h),B.c(w.b,h,h,h,h,h,h,A.Xc,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.C(A.kO,B.c(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.bf:A.f3,h,h,h,h,h,h,h,h,12,h,h,A.C,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.p(h,B.A(B.a([B.E(B.w(q,A.B,h,A.e,A.h,0,A.p),1),B.bH(D.h8L,h,i.gceh(),B.bp(A.cw,h,h,h,h,h,h,h,h,h,h,A.cp))],g),A.l,h,A.e,A.h,0,h,h),A.f,h,h,new B.o(s,h,r,t,h,h,A.m),h,h,h,U.Pi,D.bGV,h,h,1/0))}u.push(B.E(B.cg(new C.dVG(i)),1))
if(f!=null){t=B.m(14)
s=A.c.j(0.06)
r=f.b
u.push(B.p(h,B.c(D.AV.h(0,r).a+": "+D.AV.h(0,r).e,h,h,h,h,h,h,Aj.uC,h,h,h),A.f,h,h,new B.o(s,h,h,t,h,h,A.m),h,h,h,A.a20,A.bS,h,h,1/0))}u=B.w(u,A.l,h,A.e,A.h,0,A.p)
t=B.a([],g)
for(s=D.AV.gdT(D.AV),s=s.gae(s);s.C();){r=s.gP(s)
q=new B.aP(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ax(o.j(0.5),1,A.r,-1)
t.push(B.aA(h,B.p(h,B.w(B.a([B.V(p.b,o,h,h,h,20),A.bs,B.c(p.a,h,h,h,h,h,h,D.aYX,h,h,h)],g),A.l,h,A.e,A.P,0,A.p),A.f,h,h,new B.o(n,h,new B.bE(m,m,m,m),new B.bc(q,q,q,q),h,h,A.m),h,h,h,A.fa,A.D6,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dVH(i,r),h,h,h,h,h,h,!1,A.a4))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dzu[l]
s.push(new E.fJ(A.R3,k.b,new C.dVI(i,k),A.cw,h))}s.push(new E.fJ(I.xq,"Clear",new C.dVJ(i),A.c1,h))
r=B.a([],g)
for(j=0;q=$.bJs(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?A.ea:A.m6
o=i.ay
n=i.cx.q(0,j)?A.bf:A.bu
r.push(new E.e3(q.a,o===j,new C.dVK(i,j),p,n,h))}return E.lZ(A.cw,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.w(B.a([new E.fj(t,"PARTS",h),new E.fj(s,"TRY",h),new E.fj(r,"TASKS",h)],g),A.l,h,A.e,A.P,0,A.p))}}
C.bft.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3=a6.a,a4=a6.b
$.T()
w=B.L()
w.r=D.ahG.gp(0)
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
i=a3.aec(l,o.c)
h=s.h(0,n)===!0
n=$.T()
g=B.a([],r)
f=new B.aH(n.r,A.ak,a2,a2,g)
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
n.r=(h?A.eH:A.bz).gp(0)
a5.af(f,n)}a0=a3.as
if(a0!=null&&q.h(0,a0)!=null){a1=q.h(0,a0).c.a7(0,D.KD)
i=a3.at
a3=i.a
a4=a1.a
e=Math.max(40,Math.abs(a3-a4)*0.5)
r=new B.aH($.T().r,A.ak,a2,a2,B.a([],r))
w=a1.b
r.E(new B.aZ(a4,w))
s=i.b
r.E(new B.i5(a4+e,w,a3-e,s,a3,s))
s=B.L()
s.b=A.ad
s.c=3
s.r=A.ac.gp(0)
a5.af(r,s)}for(a3=new B.ds(q,q.r,q.e);a3.C();)this.cej(a5,a3.d)},
cej(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.AV.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.bZ(a0.c,64,64)
s=B.bx(t,A.k5)
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
q.san(new B.a6(A.aV,A.b1,A.w,B.a([p,m],x.O),g,g).az(0,t))
d.aq(s,q)
q=B.L()
q.b=A.ad
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.aq(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.p4:D.bWO}else l=e.b
k=C.hn8(B.lA(l.a),30,A.c,l.b,g,A.C)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a4(d,v.aI(0,new B.r(p/2,q.gb4(q)/2)))
j=C.hn8(e.a,10.5,A.c,g,g,A.C)
j.a4(d,a0.c.a7(0,new B.r(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.hn8(f,9,u?A.eH:A.bX,g,g,A.u)
i.a4(d,a0.c.a7(0,new B.r(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b2J(d,w.aec(a0,h),o)
this.b2J(d,a0.c.a7(0,D.KD),o)},
b2J(d,e,f){var w
$.T()
w=B.L()
w.r=D.ahG.gp(0)
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
C.aOV.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bC5.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bBj()}}
C.OJ.prototype={
R(){return new C.aGo(B.mn(0,null,null))}}
C.LA.prototype={
a9(){return"_UnfoldStyle."+this.b}}
C.Bj.prototype={}
C.aGo.prototype={
Z(){this.a3()
B.bO(A.pR,C.iDV(),x.H)},
ceq(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcr(0).at
v.toString
w.f=v}w.l(new C.e0V(w,e))},
c70(){var w=this
w.e.t()
w.e=B.mn(w.f,null,null)
w.l(new C.e0U(w))},
t(){this.e.t()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null,s=t&&B.Q(d).ax.a===A.di?A.c:A.c7
return B.pb(t,B.c6(v,s,t?new C.bvY(w.e,w.gcep(w),new C.e0W(d),v):new C.aKM(u,new B.bg(u.b,x.W)),v,!1,!1,v,!1),new C.e0X(w,u),x.K)}}
C.bxD.prototype={}
C.bvY.prototype={
b2K(d,e,f){var w=null,v=B.c(d,w,w,w,w,w,w,B.l(w,w,f?A.bF:A.c,w,w,w,w,w,w,w,w,12.5,w,w,A.u,w,w,!0,w,1.6,w,w,w,w,w,w),w,w,w)
return new B.C(X.a2s,B.w(B.a([v,A.bs,B.c(e,w,w,w,w,w,w,B.l(w,w,f?A.cz:A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.B,w,A.e,A.h,0,A.p),w)},
B(d){var w,v,u,t=this,s=null,r=B.Q(d).ax.a===A.di,q=B.aF(d,A.dK,x.w).w,p=B.aI(s,s,s,s,B.V(A.eD,r?A.bF:A.ac,s,s,s,20),s,s,D.hM1,t.e,s,s,s,s,s,s)
if(r)w=new B.o(A.c,s,s,B.m(14),A.Ju,s,A.m)
else{w=B.a([A.aH.j(0.22),A.aH.j(0.06)],x.O)
v=B.m(14)
w=new B.o(s,s,B.K(A.aH.j(0.75),A.r,1.6),v,B.a([new B.aa(0,A.H,A.aH.j(0.22),A.J,8)],x.V),new B.a6(A.aw,A.aD,A.w,w,s,s),A.m)}v=B.c("\ud83e\uddea Core Protocol",s,s,s,s,s,s,B.l(s,s,r?A.bF:A.c,s,s,s,s,s,s,s,s,15,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)
u=x.p
w=B.A(B.a([p,B.E(B.at(B.p(s,B.w(B.a([v,B.c("Play, make things, keep them.",s,s,s,s,s,s,B.l(s,s,r?A.cz:A.aR,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)],u),A.l,s,A.e,A.P,0,A.p),A.f,s,s,w,s,s,D.hM6,s,A6.aoz,s,s,s),s,s,s),1),A.uv],u),A.l,s,A.e,A.h,0,s,s)
v=t.b2K("STUDIOS","Play, make things, and keep what you make",r)
$.bJt()
return B.bo(!1,B.w(B.a([B.E(B.v5(0,s,A.t,t.c,A.y,s,s,s,s,s,!1,s,A.ah,!1,B.a([new B.nw(new B.R(8,q.r.b+6,8,4),new B.l0(w,s),s),new B.l0(v,s),new B.nw(A.ie,B.Qq(new B.pe(new C.fhu(d),9,!0,!0,!0,0,B.tA(),s),D.aWJ),s),new B.l0(t.b2K("SCENES","Each one is a studio too: change the style, colours and words",r),s),new B.nw(D.bH3,B.Qq(new B.pe(new C.fhv(t),6,!0,!0,!0,0,B.tA(),s),D.aWJ),s)],u)),1)],u),A.l,s,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!1)}}
C.ahf.prototype={
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m.d
if(B.Q(d).ax.a===A.di){w=B.m(20)
v=(A.o.ao(o.c,3)&1)===0
u=B.a8m(v?A.aH:A.bj,20)
v=v?A.aH:A.bj
return B.aE(!1,A.a3,!0,n,B.aM(!1,w,!0,B.eL(B.w(B.a([new B.Wm(v,44,m.c,n,n),A.N,B.c(m.a,n,2,A.a2,n,n,n,D.fO2,A.K,n,n),A.cQ,B.c(m.b,n,2,A.a2,n,n,n,D.fQY,A.K,n,n)],x.p),A.l,n,A.bb,A.h,0,A.p),n,u,n,A.Dl,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}w=B.m(20)
v=B.m(20)
u=B.ap(L.ms,l,0.3)
u.toString
t=x.O
u=B.a([u,D.al0],t)
s=B.K(l.j(0.6),A.r,1.2)
r=x.V
q=B.a([new B.aa(-4,A.H,l.j(0.22),A.J,14)],r)
p=B.ap(l,A.v,0.45)
p.toString
t=B.a([l,p],t)
r=B.a([new B.aa(0,A.H,l.j(0.5),A.J,12)],r)
return B.aE(!1,A.a3,!0,n,B.aM(!1,w,!0,B.eL(B.w(B.a([B.p(n,B.V(m.c,A.c,n,n,n,24),A.f,n,n,new B.o(n,n,n,n,r,new B.a6(A.aw,A.aD,A.w,t,n,n),A.a6),n,44,n,n,n,n,n,44),A.N,B.c(m.a,n,2,A.a2,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,10.5,n,n,A.u,n,1.15,!0,n,0.5,n,n,n,n,n,n),A.K,n,n),A.cQ,B.c(m.b,n,2,A.a2,n,n,n,B.l(n,n,A.c.j(0.6),n,n,n,n,n,n,n,n,9.5,n,n,n,n,1.2,!0,n,n,n,n,n,n,n,n),A.K,n,n)],x.p),A.l,n,A.bb,A.h,0,A.p),n,new B.o(n,n,s,v,q,new B.a6(A.aw,A.aD,A.w,u,n,n),A.m),n,A.Dl,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}}
C.ag3.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.d,j=k.d,i=B.Q(d).ax.a===A.di,h=(A.o.ao(this.c,3)&1)===0?A.aH:A.bj,g=B.m(20)
if(i)w=B.a8m(h,20)
else{w=B.m(20)
v=B.ap(L.ms,A.d.gG(j),0.24)
v.toString
v=B.a([v,D.al0],x.O)
v=new B.o(l,l,B.K(A.d.gG(j).j(0.35),A.r,1),w,B.a([new B.aa(0,A.H,A.v.j(0.4),A.cy,12)],x.V),new B.a6(A.aw,A.aD,A.w,v,l,l),A.m)
w=v}v=x.p
u=B.a([],v)
for(t=k.e,s=x.V,r=x.O,q=0;q<3;++q){p=q===2?0:4
o=new B.aP(6,6)
if(i){n=B.ap(h,A.c,0.1)
n.toString
n=B.a([n,B.Wn(h,!0)[1]],r)}else n=B.a([A.d.gG(j),A.d.gak(j)],r)
m=i?l:B.a([new B.aa(0,A.H,A.v.j(0.45),A.aay,0)],s)
u.push(B.p(l,B.V(t[q],A.c,l,l,l,11),A.f,l,l,new B.o(l,l,l,new B.bc(o,o,o,o),m,new B.a6(A.a5,A.a9,A.w,n,l,l),A.m),l,17,l,new B.R(q*4,0,(2-q)*4,p),l,l,l,l))}u=B.w(u,A.l,l,A.e,A.P,0,A.p)
if(i)t=A.bF
else{t=B.ap(A.d.gG(j),A.d.gak(j),0.4)
t.toString}t=B.c(k.b,l,2,A.a2,l,l,l,B.l(l,l,t,l,l,l,l,l,l,l,l,10.5,l,l,A.u,l,1.2,!0,l,0.6,l,l,l,l,l,l),A.K,l,l)
return B.aE(!1,A.a3,!0,l,B.aM(!1,g,!0,B.eL(B.w(B.a([new B.a4(58,l,u,l),A.S,t,A.at,B.V(A.E_,i?B.Wn(h,!0)[1]:A.d.gG(j),l,l,l,18)],v),A.l,l,A.bb,A.h,0,A.p),l,w,l,A.Dl,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,this.e,l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.ai)}}
C.RK.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ap(A.d.gak(i),A.v,0.62)
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
n=A.d.gak(i)
i=B.ap(A.d.gak(i),A.v,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bT(0,new B.bP(new B.o(j,j,j,j,j,new B.a6(A.aw,A.aD,A.w,B.a([p,o,n,i],m),D.dFL,j),A.m),A.bm,j,j),0,0,0),B.ao(j,new B.bP(new B.o(j,j,j,j,j,new B.a6(A.aV,A.b1,A.w,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.m),A.bm,j,j),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bT(0,B.b4(j,j,j,new C.bx_(i,j),A.aA),0,0,0))
i=A.c.j(0.16)
p=B.K(A.c.j(0.5),A.r,1.4)
s=B.a([new B.aa(0,A.H,A.c.j(0.25*t),A.J,14)],s)
s=B.p(j,B.V(k.f,A.c,j,j,j,28),A.f,j,j,new B.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=B.a([B.c(k.r,j,j,j,j,j,j,D.fK5,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.u(p,B.a([A.at,B.c(i,j,1,A.a2,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a7,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.Fy)
p.push(B.p(j,j,A.f,j,j,new B.o(A.c.j(0.28),j,j,B.m(3),j,j,A.m),j,5,j,j,j,j,j,w*0.42))
m.push(new B.C(A.hf,B.A(B.a([s,A.er,B.E(B.w(p,A.B,j,A.e,A.P,0,A.p),1)],l),A.l,j,A.e,A.h,0,j,j),j))
i=k.x
if(i>0)m.push(B.bT(0,new B.dp(!0,B.el(j,A.v.j(A.i.D(i*0.6,0,0.7)),!0),j),0,0,0))
i=B.m(22)
m.push(B.bT(0,new B.dp(!0,new B.bP(new B.o(j,j,B.K(A.c.j(0.3),A.r,1.2),i,j,j,A.m),A.bm,j,j),j),0,0,0))
return new B.a4(w,v,new B.am(A.a0,j,A.ab,A.f,B.a([h,B.bT(0,new B.bP(new B.o(j,j,j,u,r,j,A.m),A.bm,B.bv(q,new B.am(A.a0,j,A.ab,A.t,m,j),A.ap),j),0,0,0)],l),j),j)}}
C.bx_.prototype={
a4(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a5(r,-10,s,w)
u=d.c
J.bs(u.save())
u.translate(v.gbD().a,v.gbD().b)
d.jt(0,0.35)
t=B.bZ(A.J,(w- -10)*1.6,s-r)
$.T()
s=B.L()
s.san(new B.a6(A.a5,A.a9,A.w,B.a([A.L,A.c.j(0.3),A.L],x.O),null,null).az(0,t))
d.aE(t,s)
u.restore()},
aD(d){return d.b!==this.b}}
C.bwv.prototype={
B(d){var w=null,v=B.m(22),u=B.a([D.btz,D.ak3],x.O),t=this.e,s=B.K(A.d.gG(t).j(0.4),A.r,1.2),r=B.a([new B.aa(0,A.H,A.v.j(0.5),A.kx,24)],x.V),q=B.m(22),p=A.d.gG(t)
return new B.a4(this.c,this.d,new B.bP(new B.o(w,w,s,v,r,new B.a6(A.aw,A.aD,A.w,u,w,w),A.m),A.bm,B.bv(q,B.b4(B.at(B.V(A.j8,A.d.gG(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.be5(p,w),A.aA),A.ap),w),w)}}
C.be5.prototype={
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
C.aKM.prototype={
R(){return new C.aKN(new B.cB(null,x.A),null,null)}}
C.aKN.prototype={
gr2(){var w,v=this,u=v.d
if(u===$){w=B.br(null,D.bEh,null,1,null,v)
w.cT(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
gK_(){var w,v=this,u=v.e
if(u===$){w=B.br(null,A.fO,null,1,null,v)
w.fm(0,!0)
v.e!==$&&B.bF()
v.e=w
u=w}return u},
gaAo(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gcem(){var w=this.w
if(w===$){w=B.B(this.a.c.d,x.G)
this.w=w}return w},
gaZW(){var w=this.x
if(w===$){w=B.B(this.a.c.e,x.Z)
this.x=w}return w},
gb_J(){var w=this.y
if(w===$){w=B.B(this.a.c.f,x.N)
this.y=w}return w},
gbbU(){var w=this.z
if(w===$){w=B.B(this.a.c.r,x.N)
this.z=w}return w},
Z(){this.a3()
var w=this.gr2()
w.dq()
w.e0$.I(0,this.gcFx())},
cFy(){var w,v,u,t,s,r,q,p=this,o=p.gr2().x
o===$&&B.d()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as&&p.ch<0){switch(p.gaAo().a){case 0:w=D.ol
break
case 1:w=D.vT
break
case 2:w=D.a6Y
break
case 3:w=D.ol
break
case 4:w=D.dr2
break
case 5:w=D.vT
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.afg)r=0.09
else r=s===D.afh?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){G.dH(260+90*v,"",260,1.6,0.18,"tri")
u=D.cfO[v]
E.mJ("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.K4("bell",D.coG,1400,0.35)}}p.ax=o},
t(){this.gr2().t()
this.gK_().t()
this.bD9()},
a0q(){var w=this
w.gr2().d53(0,B.dt(0,0,0,A.i.S(11e3/w.Q),0,0))
w.l(new C.fha(w))},
cq2(){this.gr2().bQ(0)
this.l(new C.fh9(this))},
a0p(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$a0p=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:if(r.ch>=0){w=1
break}j=$.aS.bk$.x.h(0,r.f)
i=j==null?null:j.gbg()
if(!(i instanceof B.ox)||i.fy==null){w=1
break}h=r.as
j=r.gr2()
j.bQ(0)
g=r.gK_()
g.bQ(0)
r.l(new C.fh_(r))
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
return B.b(E.aju(24*q,20,new C.fh0(r,n,q,p,o),n,o,new C.fh1(r),p),$async$a0p)
case 7:l=a3
if(J.ad(l)===0){e=B.bd("empty")
throw B.Y(e)}e=r.a.c
d=B.ag("[^a-z0-9]+",!0,!1,!1,!1)
k=B.aK(e.b.toLowerCase(),d,"_")
w=8
return B.b(E.aTR(l,k),$async$a0p)
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
break}r.l(new C.fh2(r))
g.fm(0,!0)
j.sp(0,0)
if(h)r.a0q()
r.c.K(x.q).f.T(B.b0(null,null,null,null,null,A.t,null,B.c(m,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a0p,v)},
agn(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$agn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gb_J(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){q=t[r]
l.push(new B.au(new B.bb(q,A.b8,A.aP),$.ay()))}m=B.a([],m)
for(t=u.gbbU(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){p=t[r]
m.push(new B.au(new B.bb(p,A.b8,A.aP),$.ay()))}o=B.B(u.gaZW(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bV(L.ms,null,new C.fh8(u,l,m,o),t,!0,!0,!0,A.md,!1,!1,x.H),$async$agn)
case 2:l=B.B(l,x.bO)
A.d.u(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.V$=$.ay()
n.W$=0}return B.h(null,v)}})
return B.i($async$agn,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gaAo(),e=h.a.c,d=e.b,a0=h.gcem(),a1=new C.Bj(f,d,e.c,a0,h.gaZW(),h.gb_J(),h.gbbU())
e=B.ap(A.d.gG(a0),A.d.gak(a0),0.4)
e.toString
f=x.p
w=B.a([B.aI(g,g,g,g,B.V(h.at?T.p6:A0.u_,A.ac,g,g,g,21),g,g,g,new C.fhi(h),g,g,g,g,"Sound",g),B.aI(g,g,g,g,D.c62,g,g,g,h.gceo(),g,g,g,g,"Edit words and pictures",g),B.aI(g,g,g,g,I.p8,g,g,g,new C.fhj(h,a2),g,g,g,g,"Share",g)],f)
v=B.a([B.c9(h.gK_(),new C.fhk(h,a1),g),B.cg(new C.fhl(h,a1))],f)
u=h.as
t=u?h.gcq1():h.gcer()
u=u?D.bW_:A.tX
s=B.ap(A.d.gG(a0),A.d.gak(a0),0.4)
s.toString
t=B.A(B.a([B.aI(g,g,g,g,B.V(u,s,g,g,g,34),g,g,g,t,g,g,g,g,g,A.cp),B.E(B.c9(h.gr2(),new C.fhm(h,a2,a1),g),1),B.aI(g,g,g,g,D.c27,g,g,g,new C.fhn(h),g,g,g,g,"Replay",A.cp)],f),A.l,g,A.e,A.h,0,g,g)
s=h.Q
u=A.i.a5(s,1)
r=B.ap(A.d.gG(a0),A.d.gak(a0),0.4)
r.toString
s=E.ja(r,u+"x","Speed",2.5,0.4,new C.fho(h),s)
u=B.a([],f)
for(q=0;q<6;++q){p=D.dCE[q]
o=h.r
if(o===$)o=h.r=h.a.c.a
r=B.ap(A.d.gG(a0),A.d.gak(a0),0.4)
r.toString
u.push(new E.e3(p.b,o===p.a,new C.fhp(h,p),p.c,r,g))}r=B.a([],f)
for(n=x.G,q=0;q<10;++q){m=D.cgd[q]
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
r.push(B.aA(g,B.p(g,g,A.f,g,g,new B.o(g,g,new B.bE(i,i,i,i),g,g,new B.a6(A.aw,A.aD,A.w,m,g,g),A.a6),g,k,g,I.anw,g,g,g,l),A.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new C.fhq(h,m),g,g,g,g,g,g,!1,A.a4))}u=B.a([t,s,new E.fj(u,"STYLE",g),new E.fj(r,"THEME",g),A.aj],f)
t=h.ch
if(t>=0){s=B.m(6)
a0=B.ap(A.d.gG(a0),A.d.gak(a0),0.4)
a0.toString
u.push(new B.C(A.k_,B.w(B.a([B.bv(s,B.jH(A.by,g,a0,8,g,t,g),A.ap),A.at,B.c("Making your GIF\u2026 "+A.i.S(h.ch*100)+"%",g,g,g,g,g,g,A.nC,g,g,g)],f),A.l,g,A.e,A.h,0,A.p),g))}else{f=B.ap(A.d.gG(a0),A.d.gak(a0),0.4)
f.toString
u.push(new B.a4(1/0,g,B.de(A.oh,g,D.hk0,h.gcen(),B.bp(f,g,g,g,A.v,g,A.kN,g,g,g,g,g)),g))}return E.lZ(e,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.e9(new B.am(A.a0,g,A.b4,A.t,v,g),h.f),d,B.w(u,A.l,g,A.e,A.P,0,A.p))},
bFj(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
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
n.k_(p)
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
e.push(new B.cR(0,r*118,0,f,f,f,new B.kZ(q,new B.jc(n,f,A.aV,!0,f,new C.RK(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.ol[r]
u=v-0.02
g=A.i.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gG(w)
v=D.ol[r]
t=v+0.12
e.push(new B.cR(0,r*118-3-2,0,f,f,4,new B.mW(new C.bvz(u,g,1-A.i.D((a0-t)/(v+0.22-t),0,1),f),f,A.aA,f,f),f))}return new B.a4(a2,358,new B.am(A.a0,f,A.ab,A.f,e,f),f)},
bWz(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.vT[r]
p=A.r6.aA(0,A.i.D((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.vT[r]
m=q+0.15
l=A.i.D((a0-m)/(q+0.25-m),0,1)
m=D.vT[r]
q=m-0.03
q=A.i.D((a0-q)/(m+0.01-q),0,1)
m=B.dA()
k=m.a
k.$flags&2&&B.ak(k)
k[11]=0.0011
m.k5(n,n,n,1)
m.fI(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new C.RK(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dA()
k.fI(3.141592653589793)
k=new B.jc(k,f,A.z,!0,f,new C.bwv(a2,108,w,f),f)}e.push(new B.cR(0,r*130,0,f,f,f,new B.kZ(q,new B.jc(m,f,A.z,!0,f,k,f),f),f))}return new B.a4(a2,378,new B.am(A.a0,f,A.ab,A.f,e,f),f)},
cKL(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a6Y[w]
l.push(A.cn.aA(0,A.i.D((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bT(0,B.b4(n,n,n,new C.bz6(d.d,l,D.aCO,m,C.bvX(e,0.4,0.62),f,C.bvX(e,0.45,0.7),n),A.aA),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.hnG(g,w)
q=D.aCO[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cR(r,s-q*m*p+12,n,n,t,n,new B.kZ(o,B.V(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.hnG(g,w)
r=D.a6Y[w]
q=r+0.15
v.push(new B.cR(s,l,n,n,t,n,new B.kZ(A.i.D((e-q)/(r+0.25-q),0,1),B.c(u[w],n,n,n,n,n,n,A.Xo,A.K,n,n),n),n))}return new B.a4(g,m+90,new B.am(A.a0,n,A.ab,A.f,v,n),n)},
bLI(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cn.aA(0,C.bvX(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bT(0,B.at(B.dQ(B.b4(f,f,f,new C.buY(A.d.gG(a1),C.bvX(a3,0,0.2),a4,f),new B.av(a5*0.95,70)),D.eBa),f,f,f),0,0,0))
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
l.k5(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.i.F(r,1):-1
w.push(new B.y(o,new B.cR(0,0,0,0,f,f,new B.cn(A.z,f,f,new B.kZ(k*(0.45+0.55*o),B.dQ(new B.jc(l,f,A.z,!0,f,new C.RK(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.r(n*a5*0.34,-o*18)),f),f),f)))}A.d.b_(w,new C.fgX())
A.d.u(a0,new B.O(w,new C.fgY(),x.fR))
return new B.a4(a5,330,new B.am(A.a0,f,A.ab,A.f,a0,f),f)},
cel(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.vT[q]
o=A.i.D((a2-p)/(p+0.22-p),0,1)
n=A.n1.aA(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.vT[q]
m=A.i.D((a2-m)/(m+0.02-m),0,1)
l=D.aEV[q]
k=B.dA()
k.n7(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.k5(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.vT[q]
g=h+0.1
g=A.i.D((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cR(0,0,0,0,e,e,new B.cn(A.z,e,e,new B.kZ(m,B.dQ(new B.jc(k,e,A.z,!0,e,new C.RK(d,92,w,p,j,i,0,g*s,h,e),e),new B.r(0,l)),e),e),e))
l=D.vT[q]
h=l+0.02
f=A.i.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cR(0,0,0,0,e,e,new B.cn(A.z,e,e,B.dQ(new B.mW(new C.beM(w,f,q,e),e,new B.av(r,212),e,e),new B.r(0,D.aEV[q])),e),e))}return new B.a4(a4,330,new B.am(A.a0,e,A.ab,A.f,a0,e),e)},
bIj(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.r(-b0,-150),new B.r(b0,-40),D.eBf],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.ol[r]
p=A.i.D((a8-q)/(q+0.2-q),0,1)
o=A.cn.aA(0,p)
q=D.aF4[r]
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
f.n7(l*h+D.dvF[r]*o)
f.fI(l*0.9)
h=0.55+0.45*o
f.k5(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cR(0,0,0,0,a3,a3,new B.cn(A.z,a3,a3,new B.kZ(g,B.dQ(new B.jc(f,a3,A.z,!0,a3,new C.RK(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.r(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.ol[r]
i=q+0.17
a2=A.i.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aF4[r]
a6.push(new B.cR(0,0,0,0,a3,a3,new B.cn(A.z,a3,a3,B.dQ(new B.mW(new C.bv_(A.d.gG(w),a2,a3),a3,new B.av(a4,30),a3,a3),new B.r(0,q+48-4)),a3),a3))}}return new B.a4(b0,330,new B.am(A.a0,a3,A.ab,A.f,a6,a3),a3)}}
C.bvz.prototype={
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
C.buY.prototype={
a4(d,e){var w,v,u=this.c,t=B.bZ(e.eo(A.J),e.b*u,e.a*u)
$.T()
u=B.L()
u.b=A.ad
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.y=Z.PH
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
C.beM.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.eo(A.J),h=this.c,g=A.cn.aA(0,h)
$.T()
w=B.L()
w.b=A.ad
v=1-h
w.c=5*v
u=this.b
w.r=A.d.gG(u).j(0.6*v).gp(0)
d.O(i,40+g*e.a*0.42,w)
t=new B.e4()
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
C.bv_.prototype={
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
C.bz6.prototype={
a4(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2=c0.e,c3=c2+36,c4=d2.a,c5=c4*0.23,c6=c5*0.34,c7=c6*0.85,c8=-c6*0.5,c9=c3-4,d0=new B.a5(0,c9,0+c4,c9+60)
$.T()
c9=B.L()
w=c0.b
v=x.O
c9.san(new B.a6(A.aV,A.b1,A.w,B.a([A.d.gG(w).j(0.18),A.L],v),c1,c1).az(0,d0))
d1.aE(d0,c9)
c9=B.L()
c9.r=A.c.j(0.18).gp(0)
c9.c=1
d1.ah(new B.r(0,c3),new B.r(c4,c3),c9)
for(c9=c0.w,u=c9>0,t=(c5-16)/3,s=t-5,r=0.6+0.3*c0.r,q=c0.f,p=c3-14,o=x.v,n=c3+c8,m=c0.d,l=c3-6,k=c5+c7+8,j=l+16,i=c0.c,h=c9<1,g=d1.c,f=0;f<3;++f){e=i[f]
if(e<=0)continue
d=C.hnG(c4,f)
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
a5.san(new B.a6(A.aV,A.b1,A.w,B.a([a6,A.d.gak(w)],v),c1,c1).az(0,a4))
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
a5.r=B.ap(A.d.gak(w),A.v,0.5).gp(0)
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
a2.san(new B.a6(A.aV,A.b1,A.w,B.a([A.L,A.c.j(0.4),A.L],v),c1,c1).az(0,b9))
d1.aE(b9,a2)
g.restore()}}},
aD(d){return!0}}
C.aQC.prototype={
b0(){this.b8()
this.b5()
this.dS()},
t(){var w=this,v=w.bc$
if(v!=null)v.a8(0,w.gdN())
w.bc$=null
w.a2()}}
C.a2r.prototype={
a9(){return"_Role."+this.b}}
C.qL.prototype={}
C.rs.prototype={}
C.Dp.prototype={}
C.a0n.prototype={}
C.ah2.prototype={}
C.a2E.prototype={
ga0(d){return this.d}}
C.DA.prototype={}
C.adS.prototype={}
C.ae9.prototype={}
C.ag7.prototype={}
C.bls.prototype={
a4Q(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
G.dH(d,"",e,g,h,f)},
bd2(d,e,f){return this.a4Q(d,e,f,0,0.55)},
aFi(d,e,f,g){return this.a4Q(d,e,f,0,g)},
bd3(d,e,f,g){return this.a4Q(d,e,f,g,0.55)},
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
amA(d,e,f,g){var w="n"+this.ay++,v=new C.rs(w,e,f,g)
this.a.n(0,w,v)
this.b3()
return v},
tn(d,e,f){return this.amA(0,e,f,0)},
X(d,e){var w=this
w.a.X(0,e)
A.d.br(w.b,new C.dvh(e))
A.d.br(w.c,new C.dvi(e))
w.b3()},
bgW(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.nt.h(0,v.b).c===D.yC)return!1
w=this.b
if(A.d.aR(w,new C.dve(d,e)))return!1
w.push(new C.Dp(d,e))
this.b3()
return!0},
c5P(d){var w
if(d.b==="beat")return D.coS[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.av(500)
case 2:return 1400+w.av(2200)
default:return 450+w.av(2000)}},
aIT(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.aFl[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.DA(u,t,j.ax,90))
w.push(new C.DA(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ai()*3.141592653589793*2
v.push(new C.a2E(u,new B.r(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.bd2(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ai()*3.141592653589793*2
p=100+w.ai()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ap(t,A.c,w.ai()*0.5)
m.toString
v.push(new C.a2E(u,new B.r(o*p,n*p),m,3+w.ai()*4.5,1000+w.av(700),j.ax))}j.f.push(new C.DA(u,t,j.ax,120))
j.aFi(120,200,"noise",0.5)
j.bd2(261.63*Math.pow(2,([7,12,16,19][w.av(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.DA(u,t,j.ax,230))
w.push(new C.DA(u,t,j.ax+160,160))
w.push(new C.DA(u,t,j.ax+320,100))
j.bd3(180+j.at.av(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.adS(u,new B.r((w.ai()-0.5)*220,-260-w.ai()*180),t,j.ax))
j.bd3(300+w.av(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ai()*3.141592653589793*2
j.w.push(new C.ae9(u,u.a7(0,new B.r(Math.cos(q),Math.sin(q)).aO(0,260+w.ai()*200)),t,j.ax))
j.a4Q(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fW()
j.a4Q(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.ag7(u,D.aEH[v],t,j.ax))
j.aFi(261.63*Math.pow(2,([0,5,9,12][j.at.av(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aFi(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.ckW[A.o.F(w,3)]
for(k=1;k<=3;++k)j.cAs(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new B.eR(w,new C.dvf(d));v.C();)j.aDL(w.gP(0),j.ax+D.cxq[A.o.F(g.d,4)])
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
case"chance":s=j.at.av(100)<D.cOS[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new B.eR(w,new C.dvg(d));v.C();)j.aDL(w.gP(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.xS(w,0,v-700)},
cAs(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.a0n(e,"~"+d))},
aDL(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.ah2(d.a,v,e,w))
u.push(new C.a0n(w,v))},
a8B(d){var w,v,u,t,s,r,q,p,o=this
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
else if(o.ax>=q){o.aIT(r)
u.n(0,r,o.ax+o.c5P(s))}}w=o.c
v=B.U(w).k("X<1>")
q=B.B(new B.X(w,new C.dvj(o),v),v.k("M.E"))
if(q.length!==0){A.d.br(w,new C.dvk(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.I)(q),++t){u=q[t].b
if(A.a.Y(u,"~")){p=A.a.aV(u,1)
for(u=A.d.gae(v),r=new B.eR(u,new C.dvl(p));r.C();)o.aDL(u.gP(0),o.ax)}else o.aIT(u)}}A.d.br(o.d,new C.dvm(o))
A.d.br(o.e,new C.dvn(o))
A.d.br(o.f,new C.dvo(o))
A.d.br(o.w,new C.dvp(o))
A.d.br(o.x,new C.dvq(o))
A.d.br(o.r,new C.dvr(o))
o.b3()},
vV(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
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
al(){var w,v,u,t,s,r,q,p,o,n,m=this.cy,l=m.a
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
V5(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.V.aP(0,d,null))
k.a6(0)
for(o=x.j,n=J.aQ(o.a(J.t(w,"nodes"))),m=k.a;n.C();){v=n.gP(n)
u=B.v(J.t(v,"k"))
if(!D.nt.am(0,u))continue
t=B.v(J.t(v,"id"))
m.n(0,t,new C.rs(t,u,new B.r(B.dJ(J.t(v,"x"))*k.cy.a,B.dJ(J.t(v,"y"))*k.cy.b),A.i.M(B.dJ(J.t(v,"p")))))
s=B.cb(B.aK(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aQ(o.a(J.t(w,"edges"))),n=k.b;o.C();){r=o.gP(o)
q=B.v(J.t(r,0))
p=B.v(J.t(r,1))
if(m.am(0,q)&&m.am(0,p))n.push(new C.Dp(q,p))}k.b3()
return!0}catch(l){return!1}},
d_p(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
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
l.bgW(w[m.a],w[m.b])}},
ga0(d){return this.cy}}
C.H3.prototype={}
C.XP.prototype={
R(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aHF(new C.bls(B.S(w,x.f3),v,u,t,s,r,q,p,o,B.S(w,n),B.S(w,n),B.S(w,n),B.S(w,n),A.cV,A.L,A.aA,$.ay()),A.bH,A.J,A.J,A.M,null,null)}}
C.aHF.prototype={
aeL(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$aeL=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.aB(),$async$aeL)
case 6:q=n.kk(m.t(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.l(new C.eEf(s))
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
return B.i($async$aeL,v)},
abD(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$abD=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.l(new C.eE4(s))
u=3
w=6
return B.b(B.aB(),$async$abD)
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
return B.i($async$abD,v)},
bRQ(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a3(n).k("ba<2>")
v=""+n.a+"|"+o.length+"|"+new B.ba(n,w).cD(0,0,new C.eE6())+"|"+A.d.cD(o,0,new C.eE7())
if(v===p.ch)return p.CW
u=new C.eEa()
t=x.s
s=B.a([],t)
r=new C.eEb(p,s,u)
for(n=new B.ba(n,w).gae(0),w=new B.eR(n,new C.eE8());w.C();){q=n.gP(0)
if(!A.d.aR(o,new C.eE9(q)))s.push(B.v(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.cV(s,0,B.dz(5,"count",x.S),x.N).df(0)},
Z(){var w,v=this
v.a3()
v.aeL()
v.d.db=v.ay
w=v.qa(new C.eEF(v))
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
w.bCa()},
aeg(d){return this.c5f(d)},
c5f(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$aeg=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.aB(),$async$aeg)
case 6:q=m.aV(l.t(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.V5(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.b0a(A.d.gG(D.aE8))
if(s.c!=null)s.l(new C.eEe())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aeg,v)},
b0a(d){this.d.d_p(0,d.c,d.d)
this.Fa()},
Fa(){var w=this.as
if(w!=null)w.a1(0)
this.as=B.cC(A.m2,new C.eE0(this))},
aAp(d){var w,v,u,t,s=this.d.a,r=B.a3(s).k("ba<2>")
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
cnY(d){var w,v,u,t,s,r=this.d.a,q=B.a3(r).k("ba<2>")
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
c53(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.ds(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.nt.h(0,r.b).c===D.yC)continue
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
ceu(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hNk(new B.r(n.a+36,n.b+0),new B.r(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cIn(d){var w,v,u,t,s,r,q=this,p=q.aAp(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.f3()
u=v.b
if(u==="button"){w.aIT(p)
return}if(q.r)return
t=D.nt.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.rX)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.b3()
q.Fa()
return}if(q.r)return
r=q.ceu(d)
if(r!=null){w=q.d
A.d.cJ(w.b,r)
w.b3()
q.Fa()}},
cpj(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cnY(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.aAp(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aI(0,d)}},
cpk(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b3()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.r(A.i.D(d.a+s.y.a,46,t.a-46),A.i.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b3()}}},
b5P(){var w,v,u=this
if(u.z!=null){w=u.c53(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bgW(v,w)}else v=!1
if(v){B.ka()
u.Fa()}u.z=null
u.d.b3()}else if(u.x!=null){if(u.at)u.Fa()
u.x=null}},
af_(d){return this.c8o(d)},
c8o(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$af_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.aAp(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jG()
p=t.c
p.toString
w=3
return B.b(B.bV(L.ms,null,new C.eEh(q),p,!0,!0,!1,A.md,!1,!1,x.y),$async$af_)
case 3:if(f===!0){r.X(0,s)
t.Fa()}case 1:return B.h(u,v)}})
return B.i($async$af_,v)},
ces(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.tn(0,d,new B.r(v.a*(0.25+u.ai()*0.5),v.b*(0.2+u.ai()*0.55)))
B.f3()
this.Fa()},
aj3(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aj3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bV(L.ms,null,new C.eEj(),s,!0,!0,!0,A.md,!1,!1,x.es),$async$aj3)
case 2:t=e
if(t!=null)u.b0a(t)
return B.h(null,v)}})
return B.i($async$aj3,v)},
ago(d){var w=0,v=B.j(x.H),u=this,t
var $async$ago=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.ce(null,null,!0,null,new C.eE3(),t,null,!0,!0,x.y),$async$ago)
case 2:if(f===!0){u.d.a6(0)
u.Fa()}return B.h(null,v)}})
return B.i($async$ago,v)},
B(d){var w=this,v=null,u=B.a([B.akD(w.r?new B.bL(A.a5,v,v,new B.C(A.I_,B.hy(D.c_T,D.h1h,new C.eED(w),v),v),v):w.cev(),A.aZ,A.j3),B.E(B.cg(new C.eEE(w)),1)],x.p)
if(!w.r)u.push(w.cD1())
return B.c6(v,A.c7,B.bo(!0,B.w(u,A.l,v,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)},
bNs(){var w=null,v=new C.eE5(),u=A.v.j(0.7),t=B.m(26),s=B.K(A.bw.j(0.5),A.r,1)
return B.bT(0,B.el(B.at(B.p(w,B.cc(B.w(B.a([D.hcU,A.at,D.hkM,A.aB,v.$4(A.mF,A.bw,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(W.DW,A.cw,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.kn,A.c5,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.Qv,A.bu,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.hk3,new B.bL(A.a9,w,w,B.bJ(!1,D.h9Y,w,w,!0,w,w,w,this.gbNl(),w,w),w)],x.p),A.B,w,A.e,A.P,0,A.p),A.t,w,A.y,w,w,w,w,w,A.ah),A.f,w,A.Z9,new B.o(L.ms,w,s,t,w,w,A.m),w,w,w,A.f4,A9.aoS,w,w,w),w,w,w),u,!0),0,0,0)},
cev(){var w=this,v=null,u=B.aI(v,v,v,v,Ap.nr,v,v,v,new C.eEp(w),v,v,v,v,v,v),t=w.ab3(A.DO,"How it works",new C.eEq(w),!0),s=w.ay?T.p6:A0.u_
return new B.C(D.bLf,B.A(B.a([u,D.bMW,t,w.ab3(s,"Sound",new C.eEr(w),!0),w.ab3(A.eh,"Ideas",w.gctd(),!0),w.ab3(I.xq,"Clear",w.gcet(w),!0),w.aRL(A.fQ,"Show",new C.eEs(w),!0,!0)],x.p),A.l,v,A.e,A.h,0,v,v),v)},
aRL(d,e,f,g,h){var w=null,v=h?A.bw:A.c.j(0.08),u=B.m(14),t=B.m(14),s=B.a([B.V(d,h?A.v:A.c,w,w,w,20)],x.p)
return new B.C(Al.xh,B.aE(!1,A.a3,!0,u,B.aM(!1,t,!0,B.hb(new B.C(new B.R(8,8,8,8),B.A(s,A.l,w,A.e,A.P,0,w,w),w),w,e,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ai),w)},
ab3(d,e,f,g){return this.aRL(d,e,f,g,!1)},
cD1(){var w=null,v=new C.eEl(this),u=A.c.j(0.08)
return B.p(w,B.cc(B.A(B.a([v.$2("START",D.yC),v.$2("CHANGE",D.Ga),v.$2("REACT",D.rX)],x.p),A.B,w,A.e,A.h,0,w,w),A.t,w,A.y,w,w,w,w,w,A.aK),A.f,w,w,new B.o(L.CF,w,new B.bE(new B.ax(u,1,A.r,-1),A.a1,A.a1,A.a1),w,w,w,A.m),w,w,w,w,D.bGc,w,w,w)},
cD2(d){var w,v,u,t,s=null,r=D.nt.h(0,d)
r.toString
w=B.m(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.K(v.j(0.5),A.r,1)
return new B.C(A.fa,B.aA(s,B.p(s,B.w(B.a([B.V(r.b,v,s,s,s,22),A.cQ,B.c(r.a,s,1,A.a2,s,s,s,D.aYX,s,s,s)],x.p),A.l,s,A.e,A.P,0,A.p),A.f,s,s,new B.o(s,s,t,w,s,new B.a6(A.aV,A.b1,A.w,u,s,s),A.m),s,s,s,s,A.hA,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eEk(this,d),s,s,s,s,s,s,!1,A.a4),s)}}
C.blt.prototype={
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
a5=C.hNk(new B.r(j.a+36,j.b+0),new B.r(i.a-36,i.b),a4)
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
d=new B.aH($.T().r,A.ak,b3,b3,B.a([],p))
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
b1=C.blu(a5.b,26+8*t,a5.c.j(t),b3,b3,A.u)
t=a5.a
q=b1.b
p=q.c
q=q.a.c
b1.a4(b7,new B.r(t.a-p/2,t.b-(40+60*v+q.gb4(q)/2)))}for(b4=new B.ds(o,o.r,o.e);b4.C();)b2.coQ(b7,b4.d,b5)
b6.restore()},
coQ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.nt.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.i.D(1-(f-w)/520,0,1)
u=B.bZ(e.c,64,64)
t=B.bx(u,A.i7)
s=t.eI(A.cy)
$.T()
r=B.L()
r.r=A.v.j(0.55).gp(0)
r.y=A.nn
d.aq(s,r)
if(v>0){s=t.ct(6)
r=B.L()
r.r=h.d.j(0.6*v).gp(0)
r.y=A.Dq
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
r.san(new B.a6(A.aV,A.b1,A.w,B.a([s,p],x.O),j,j).az(0,u))
d.aq(t,r)
r=B.L()
r.b=A.ad
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.aq(t,r)
r=h.b
p=e.c
o=C.blu(B.lA(r.a),30,A.c,r.b,j,A.C)
r=o.b
s=r.c
r=r.a.c
o.a4(d,p.aI(0,new B.r(s/2,r.gb4(r)/2)))
n=C.blu(h.a,11,A.c,j,j,A.C)
n.a4(d,e.c.a7(0,new B.r(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.aEH[A.o.F(e.d,6)]:j
h=h.c
if(h===D.rX){s=e.c.a7(0,new B.r(0,62))
r=B.L()
r.r=D.aFl[A.o.F(e.d,6)].gp(0)
d.O(s,5,r)}else if(m!=null){l=C.blu(m,9.5,A.aF,j,j,A.O)
l.a4(d,e.c.a7(0,new B.r(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.blu(m,9.5,A.aF,j,j,A.O)
l.a4(d,e.c.a7(0,new B.r(-l.b.c/2,54)))}if(k.c)return
if(h!==D.yC)k.b6E(d,e.c.aI(0,D.KD),q)
k.b6E(d,e.c.a7(0,D.KD),q)},
b6E(d,e,f){var w
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
C.aPK.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.es.prototype={}
C.ub.prototype={
ats(d,e,f,g){var w=this
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
C.acv.prototype={}
C.adE.prototype={}
C.a6x.prototype={
biP(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.h9()?-1:1
v=t.ai()*3.141592653589793*2
u=f*(0.3+t.ai())
s.push(new C.acv(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ai()*0.45));++r}},
caB(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.br(w,new C.bSD())},
amA(d,e,f,g){var w="p"+this.c++,v=new C.ub(w,e,f,g)
v.ats(w,e,f,g)
this.a.push(v)
return v},
X(d,e){A.d.X(this.a,e)
A.d.br(this.b,new C.bSO(e))},
a6(d){A.d.a6(this.a)
A.d.a6(this.b)},
cRj(d,e,f,g,h){return A.d.aR(this.b,new C.bSJ(e,f,g,h))},
ano(d,e,f,g){var w
if(d===f||this.cRj(0,d,e,f,g))return null
w=new C.adE(d,e,f,g)
this.b.push(w)
return w},
aEi(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
AC(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
aq9(d){return this.MZ(d)&&!d.x&&d.cx>this.AC(d)},
bb3(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
MZ(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
ceP(d){var w,v=d.b
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
vV(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.caB(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.U(v).k("X<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.I)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.X(v,new C.bSP(a2),t).cD(0,0,new C.bSQ(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.S(x.N,u)
n=new C.bSS(o)
m=B.a([],x.t)
l=new C.bSR(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.I)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.I)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.S(u,u)
f=new C.bSU(g,l,n)
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
a2.bb_(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.AC(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.bb_(e,d,w,!0)
a2.bUb(a4)},
bb_(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.S(x.N,b3),b5=new C.bSF(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bSE(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.I)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bSH(B.S(b3,b3),r,b5)
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
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.bb3(t)*(1+t.CW))
a4=b2.aEi(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.ceP(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bXz(e,a0,b8)
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
bXz(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
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
bUb(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.I)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aEi(o)/a1.bb3(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.AC(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bM2(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.biP(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.uz(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.uz(o,"The "+$.qU().h(0,n).b+" got "+A.i.a5(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.uz(o,"More than 1.5 amps went through the "+$.qU().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.uz(o,"The regulator had to turn "+A.i.a5(o.cy,1)+" V into heat while "+A.i.S(i*1000)+" mA flowed. That is "+A.i.a5(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.uz(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.AW.h(0,n)
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
a1.uz(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.i.a5(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.fvc.q(0,n)){m=o.fx>0?A.i.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.i.D(j/0.9,0,1)
if(!o.x&&j>2.4)a1.uz(o,"The bulb got "+A.i.a5(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.i.D((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.uz(o,"The LED had "+A.i.S(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.i.D(j/14,0,1)
break
case"motor":n=A.i.D(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.i.D(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.uz(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.i.D(i/1,0,1)
if(!o.x&&i>1)a1.uz(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.uz(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.i.D(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.uz(o,"The capacitor was charged to "+A.i.a5(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bM2(d){return A.d.aR(this.a,new C.bSC(d))},
uz(d,e){var w
d.x=!0
d.ay=e
this.biP(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bnu(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a6(0)},
aKG(d){var w=d.b
return D.aVC.q(0,w)||D.AW.am(0,w)||w==="buck"||w==="regulator"},
bkj(d){var w,v=!0
if(!this.MZ(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.AW.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
Wm(d,e){var w=this.b
return new B.X(w,new C.bSW(d,e),B.U(w).k("X<1>")).gJ(0)},
rB(d){var w,v
if(d.x)return!1
w=d.b
if(D.AW.am(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bik(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qU().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aKG(d)||i.rB(d))return null
w=i.Wm(d,0)
v=i.Wm(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.U(u).k("X<1>")
s=B.B(new B.X(u,i.gcZX(),t),t.k("M.E"))
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
for(t=i.Nb("battery"),o=J.aQ(t.a),t=new B.eR(o,t.b);t.C();){n=o.gP(o)
if(n.e===1.5&&n.as<=0.02&&i.Wm(n,0)+i.Wm(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.Nb("switch"),o=J.aQ(t.a),t=new B.eR(o,t.b);t.C();)if(!o.gP(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qU().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.AC(k))return"The "+$.qU().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.i.a5(k.cx,2)+" amps, but it can only give about "+A.i.a5(i.AC(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.aR(u,new C.bSK(i,d))
h=q.b
h=h===A.i.fJ(h)?""+A.i.S(h):B.v(h)
u=A.i.a5(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.i.a5(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.i.a5(Math.abs(d.dy),1)+" V). Try a bigger battery."},
Nb(d){var w=this.a
return new B.X(w,new C.bSN(d),B.U(w).k("X<1>"))},
aKh(d){return this.Nb(d).aR(0,new C.bSM(0.35))},
qk(d,e){return A.d.aR(this.a,new C.bSL(e))}}
C.ale.prototype={
a4(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.T()
w=B.L()
w.r=F.nR.gp(0)
c0.aE(new B.a5(0,0,b8,b9),w)
w=C.ikT(c1)
v=$.hWn()
if(A.o.F(w.length,2)!==0)B.bi(B.dM('"points" must have an even number of values.',b5))
u=c0.b
if(u!=null)u.om(v)
t=v.n9()
v=c0.c
v.drawPoints($.hXh()[0],w,t)
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
b4.cO1(c0,new B.r(n*b6+m*(42+l),o*b7),new B.r(j*b6+i*(42+h),k.d*b7),p,p===r)}u=b4.d
if(u!=null&&b4.e!=null){g=C.i0q(u.a,u.b,c1)
u=b4.e
u.toString
$.T()
s=B.L()
s.r=A.ac.gp(0)
s.c=3
s.d=A.bG
c0.ah(g,u,s)}for(u=w.a,s=u.length,r=b4.c,o=b4.r,n=x.v,q=0;q<u.length;u.length===s||(0,B.I)(u),++q){f=u[q]
m=f.c*b6
l=f.d*b7
if(f.Q>0){k=Math.sin(w.d*30)
$.T()
j=new B.ar(A.U,A.R,A.X,A.Y,A.W)
j.r=F.NO.j(A.i.D(f.Q*0.45,0,0.6)).gp(0)
j.y=A.Dq
c0.O(new B.r(m,l),46+14*k,j)}e=o.h(0,f.a)
if(e==null)e=1
J.bs(v.save())
v.translate(m,l)
k=A.i.D(A.n1.aA(0,A.i.D(e,0,1)),0.01,1.4)
v.scale(k,k)
b4.cpR(c0,f,f===r)
v.restore()
k=f.b
if((k==="battery"||k==="solar"||k==="crank"||k==="turbine")&&!f.x&&f.cx>w.AC(f)){j=m+0
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
h.b=A.ad
h.c=1.6
h.r=A.c.gp(0)
c0.af(d,h)
b4.lF(c0,"!",new B.r(j+-3,i+-8),A.c,14)}if(!f.x)j=(D.aVC.q(0,k)||D.AW.am(0,k)||k==="buck"||k==="regulator")&&!w.rB(f)&&w.Wm(f,0)+w.Wm(f,1)>0
else j=!1
if(j){m+=0
l+=-40
$.T()
j=new B.ar(A.U,A.R,A.X,A.Y,A.W)
j.r=A.as.gp(0)
c0.O(new B.r(m,l),10,j)
b4.lF(c0,"!",new B.r(m+-3,l+-8),A.v,14)}for(a8=0;a8<2;++a8){m=f.c
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
m.r=(l&&w.bkj(f)?A.c1:A.ac).gp(0)
c0.O(a9,6,m)
if(l&&w.bkj(f))b4.lF(c0,"+",new B.r(i+-4,j+-22),A.c1,13)}}for(v=w.f,s=v.length,q=0;q<v.length;v.length===s||(0,B.I)(v),++q){b0=v[q]
r=b0.a*b6+b0.c
o=b0.b*b7+b0.d
b1=new B.r(r,o)
b2=A.i.D(b0.r/0.8,0,1)
n=B.ap(M.Oz,F.a0O,b2)
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
l.y=A.PI
c0.O(b1,4.5*b2+1,l)}if(A.d.aR(u,new C.bMY())){b3=A.d.cD(u,0,new C.bMZ())
$.T()
b7=B.L()
b7.r=D.bkB.j(0.05+0.09*b3*(0.5+0.5*Math.sin(w.d*22))).gp(0)
c0.aE(new B.a5(0,0,b8,b9),b7)
b7="short|"+B.v(b6)
a9=$.aR9.h(0,b7)
if(a9==null){a9=B.h_(b5,A.cL,b5,b5,b5,D.fGn,A.a8,A.cd,b5,A.e4,A.ce)
a9.nB(b6-24)
$.aR9.n(0,b7,a9)}a9.a4(c0,new B.r(12,10))}},
lF(d,e,f,g,h){var w,v=null,u=e+"|"+g.m()+"|"+B.v(h)
if($.aR9.a>300)$.aR9.a6(0)
w=$.aR9.h(0,u)
if(w==null){w=B.h_(v,A.cL,v,v,v,B.cW(v,v,v,v,v,v,v,v,v,B.l(v,v,g,v,v,v,v,v,v,v,v,h,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),e),A.a8,A.cd,v,A.e4,A.ce)
w.eL()
$.aR9.n(0,u,w)}w.a4(d,f)},
cO1(d,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.aH($.T().r,A.ak,null,null,B.a([],x.v))
e.E(new B.aZ(a0.a,a0.b))
w=C.hTf(a0,a1,a2)
e.E(new B.ck(w.a,w.b,a1.a,a1.b))
v=a2.a
u=Math.abs(v.fr)
t=a2.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ap(A.aQ,F.NO,A.i.D(p/1.2,0,1))
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
if(q){n=new B.an0(new B.v8(B.zR(e),!1,B.a([],x.l))).gG(0)
m=40+A.i.D(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=this.b
k=0
for(;;){v.jQ()
j=t[u].b
j===$&&B.d()
if(!(k<j.a.length()/22))break
j=s.d
v.jQ()
i=t[u].b
i===$&&B.d()
i=A.i.F(k*22+j*m*l,i.a.length())
v.jQ()
j=t[u].b
j===$&&B.d()
j=j.a.length()
v.jQ()
h=t[u].b
h===$&&B.d()
g=A.i.F(i+j,h.a.length())
v.jQ()
f=t[u].WB(g)
j=new B.ar(A.U,A.R,A.X,A.Y,A.W)
j.r=A.c.gp(0)
d.O(f.a,2.6,j);++k}}},
a_H(d,e,f,g){var w,v,u,t
$.T()
w=B.L()
v=g?A.aV:A.a5
u=g?A.b1:A.a9
t=B.ap(e,A.v,0.3)
t.toString
w.san(new B.a6(v,u,A.w,B.a([e,f,e,t],x.O),A.Js,null).az(0,d))
return w},
b0S(d,e,f){return this.a_H(d,e,f,!0)},
caa(d,e){return this.a_H(d,A.bl,A.hX,e)},
akc(d,e){var w,v,u
$.T()
w=B.L()
w.san(D.eOw.az(0,B.bY(e,4.2)))
d.O(e,4.2,w)
w=e.a7(0,D.eDO)
v=e.a7(0,D.eDX)
u=B.L()
u.r=A.cU.gp(0)
u.c=1.2
d.ah(w,v,u)},
cpR(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=4294626325,b5=4286331629,b6=4287322667,b7=4293870660,b8=$.T(),b9=B.L()
b9.san(D.cb9.az(0,D.fro))
b9.c=3.4
b9.d=A.bG
w=B.L()
w.r=A.v.j(0.45).gp(0)
w.y=O.oX
c0.c1(D.frd,w)
if(c2){w=B.bx(D.frm,A.k4)
v=B.L()
v.r=A.c.j(0.14).gp(0)
c0.aq(w,v)}u=C.hxo(c1)
c0.ah(new B.r(-u,0),D.eFj,b9)
c0.ah(D.eCt,new B.r(u,0),b9)
t=c1.x
w=c1.b
s=D.mN.am(0,w)&&c1.ch!==1
if(s){J.bs(c0.c.save())
c0.bV(0,c1.ch)}switch(w){case"battery":b2.bIK(c0,c1)
break
case"solar":r=B.bx(D.frf,A.jN)
c0.aq(r,b2.a_H(new B.a5(r.a,r.b,r.c,r.d),A.d0,A.bP,!1))
b8=B.L()
w=B.ap(D.boD,A.dh,0.25+0.55*c1.f)
w.toString
v=B.ap(D.byp,A.m_,0.3+0.4*c1.f)
v.toString
b8.san(new B.a6(A.aw,A.aD,A.w,B.a([w,v],x.O),b3,b3).az(0,D.abt))
c0.aE(D.abt,b8)
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
b8.r=A.eH.j(0.9).gp(0)
c0.O(D.eCx,4+4*w,b8)
break
case"crank":o=B.bx(D.fr_,A.h4)
c0.aq(o,b2.b0S(new B.a5(o.a,o.b,o.c,o.d),A.bz,A.bQ))
b8=B.L()
b8.san(D.aTJ.az(0,B.bY(A.J,12)))
c0.O(A.J,12,b8)
n=new B.r(Math.cos(c1.y)*22,Math.sin(c1.y)*22)
b8=B.L()
b8.r=A.cE.gp(0)
b8.c=5
b8.d=A.bG
c0.ah(A.J,n,b8)
b8=B.L()
b8.san(D.eOT.az(0,B.bY(n,7)))
c0.O(n,7,b8)
b2.akc(c0,D.eFc)
b2.akc(c0,D.eCh)
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
m.r=A.bP.gp(0)
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
b8.san(D.eOz.az(0,B.bY(A.J,4.5)))
c0.O(A.J,4.5,b8)
break
case"switch":o=B.bx(D.fr7,A.pl)
b8=B.L()
b8.san(D.avB.az(0,new B.a5(o.a,o.b,o.c,o.d)))
c0.aq(o,b8)
b2.akc(c0,D.Vw)
b2.akc(c0,D.aOu)
h=c1.w?D.aOu:H.aOk
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
case"fuse":g=B.bx(D.aUu,D.aTO)
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
c0.ah(D.aOO,D.aOs,b8)}else{b8=B.L()
b8.c=1.6
b8.r=A.bX.gp(0)
c0.ah(D.aOO,D.eFH,b8)
b8=B.L()
b8.c=1.6
b8.r=A.bX.gp(0)
c0.ah(D.eDk,D.aOs,b8)
b8=B.L()
b8.r=A.dZ.gp(0)
c0.O(A.J,6,b8)}for(f=0;f<2;++f){e=B.bZ(new B.r(M.hr[f]*22,0),20,9)
c0.aq(B.bx(e,A.hs),b2.a_H(e,A.de,A.nL,!0))}break
case"pot":b8=B.L()
b8.san(D.eOK.az(0,B.bY(A.J,21)))
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
b8.san(D.eOx.az(0,B.bY(A.J,13)))
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
case"resistor":a1=B.bx(D.aUu,D.aTO)
b8=B.L()
b8.san(D.ceH.az(0,new B.a5(a1.a,a1.b,a1.c,a1.d)))
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
c0.aE(D.frA,b8)
b8=c1.r
b2.lF(c0,b8>=1000?"1k\u03a9":""+A.i.S(b8)+"\u03a9",D.eEI,A.ac,10)
break
case"bulb":w=c1.fx
if(w>0){v=B.L()
v.r=A.eH.j(0.55*w).gp(0)
v.y=A.Dq
c0.O(H.w8,34,v)}o=B.bZ(D.eBc,12,18)
c0.aq(B.bx(o,A.hs),b2.a_H(o,A.bl,A.dT,!0))
for(p=0;p<3;++p){w=13+p*3.5
v=new B.ar(A.U,A.R,A.X,A.Y,A.W)
v.r=A.dJ.gp(0)
v.c=1
c0.ah(new B.r(-9,w),new B.r(9,w),v)}w=B.L()
if(t)v=A.GL
else{v=B.ap(A.dT,A.i_,c1.fx)
m=c1.fx
v=v.j(0.25+0.7*m)}if(t)m=A.H6
else{m=B.ap(A.d0,A.eH,c1.fx)
m.toString}w.san(new B.bU(A.n_,0.5,A.w,b3,0,B.a([v,m.j(0.18+0.5*c1.fx)],x.O),b3,b3).az(0,B.bY(A.uj,17)))
c0.O(A.uj,17,w)
w=B.L()
w.b=A.ad
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c0.O(A.uj,17,w)
b8=b8.r
w=x.v
m=new B.aH(b8,A.ak,b3,b3,B.a([],w))
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
c0.ah(D.eFB,D.eFD,v)
v=B.L()
v.r=A.cG.gp(0)
v.c=1.4
c0.ah(D.eDd,D.eDg,v)
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
b8.b=A.ad
b8.c=1.8
if(t)w=A.b9
else{w=B.ap(A.d0,D.bpN,c1.fx)
w.toString}b8.r=w.gp(0)
c0.af(a4,b8)
break
case"led":w=c1.fx
if(w>0){v=B.L()
v.r=A.aC.j(0.6*w).gp(0)
v.y=D.bMJ
c0.O(A.uj,30,v)}w=B.L()
w.r=A.dT.gp(0)
w.c=2.4
c0.ah(D.eFJ,D.eFI,w)
w=B.L()
w.r=A.dT.gp(0)
w.c=2.4
c0.ah(D.eDm,D.eDl,w)
b8=b8.r
w=x.v
a6=new B.aH(b8,A.ak,b3,b3,B.a([],w))
a6.E(new B.aZ(-12,8))
a6.E(new B.aq(-12,-6))
a6.E(new B.ck(0,-26,12,-6))
a6.E(new B.aq(12,8))
a6.E(new B.bA())
v=B.L()
if(t)m=A.jD
else{m=B.ap(A.ez,D.brz,c1.fx)
m.toString}if(t)k=A.l8
else{k=B.ap(A.kK,A.aC,c1.fx)
k.toString}v.san(new B.a6(A.aw,A.aD,A.w,B.a([m,k],x.O),b3,b3).az(0,D.fqs))
c0.af(a6,v)
v=B.L()
v.b=A.ad
v.c=1.2
v.r=A.jX.gp(0)
c0.af(a6,v)
v=B.L()
v.r=A.eu.gp(0)
c0.aE(D.fqy,v)
w=new B.aH(b8,A.ak,b3,b3,B.a([],w))
w.E(new B.aZ(-7,-4))
w.E(new B.ck(-6,-12,0,-15))
b8=B.L()
b8.b=A.ad
b8.c=2
b8.r=A.c.j(0.5).gp(0)
c0.af(w,b8)
break
case"motor":a7=new B.a5(-28,-14,20,14)
c0.aq(B.bx(a7,A.iD),b2.b0S(a7,A.an,A.bn))
b8=B.L()
b8.r=A.cx.gp(0)
c0.aE(D.fq1,b8)
b8=B.L()
b8.r=A.cE.gp(0)
c0.aE(D.fq3,b8)
b8=c0.c
J.bs(b8.save())
b8.translate(31,0)
for(l=0;l<3;++l){J.bs(b8.save())
b8.rotate((c1.y+l*2.094)*180/3.141592653589793,0,0)
w=B.bZ(H.aOf,15,7)
v=new B.ar(A.U,A.R,A.X,A.Y,A.W)
v.r=A.cW.j(0.9).gp(0)
c0.c1(w,v)
b8.restore()}w=B.L()
w.r=A.ax.gp(0)
c0.O(A.J,3,w)
b8.restore()
b2.lF(c0,"M",D.eFb,A.ax,14)
break
case"buzzer":a8=B.bZ(A.J,42,42)
b8=B.L()
b8.san(D.eOO.az(0,a8))
c0.c1(a8,b8)
b8=B.L()
b8.r=A.v.gp(0)
c0.O(A.J,6,b8)
b8=B.L()
b8.b=A.ad
b8.c=1.4
b8.r=A.aT.gp(0)
c0.O(A.J,6,b8)
b2.lF(c0,"+",D.eF4,A.ac,12)
for(b8=b2.b,l=1;l<=3;++l){w=c1.fx
v=w>0?A.i.F(b8.d*14,5):0
v=B.bY(A.J,24+l*5+v)
m=new B.ar(A.U,A.R,A.X,A.Y,A.W)
m.b=A.ad
m.c=2
m.r=A.c5.j(w*(1-l*0.22)).gp(0)
c0.cQ(v,-0.7,1.4,!1,m)}break
case"heater":o=B.bx(D.fr3,A.iD)
w=B.L()
w.san(D.cce.az(0,new B.a5(o.a,o.b,o.c,o.d)))
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
w.b=A.ad
w.c=10
w.r=D.bqx.j(0.5*b8).gp(0)
w.y=A.ld
c0.af(a9,w)}$.T()
b8=B.L()
b8.b=A.ad
b8.c=3.2
b8.d=A.bG
b8.r=B.ap(A.mp,Ag.ze,c1.fx).gp(0)
c0.af(a9,b8)
break
case"capacitor":a7=new B.a5(-16,-22,16,18)
b8=B.bx(a7,A.iD)
w=B.L()
w.san(D.avo.az(0,a7))
c0.aq(b8,w)
w=B.L()
w.r=A.bP.gp(0)
c0.aE(D.fqI,w)
for(p=0;p<4;++p)b2.lF(c0,"\u2212",new B.r(-14,-18+p*9),A.ax,11)
b0=new B.a5(-16,-24,16,-17)
c0.aq(B.bx(b0,A.hs),b2.caa(b0,!1))
b8=38*c1.fx
w=18-b8
$.T()
v=B.L()
v.r=A.bf.j(0.5).gp(0)
c0.aE(new B.a5(-3,w,11,w+b8),v)
b2.lF(c0,"1F",H.w8,A.c,11)
break
case"radio":a1=B.bx(D.abt,A.h4)
b8=B.L()
b8.san(D.ceW.az(0,new B.a5(a1.a,a1.b,a1.c,a1.d)))
c0.aq(a1,b8)
b8=B.L()
b8.b=A.ad
b8.c=1.4
b8.r=A.nL.j(0.6).gp(0)
c0.aq(a1,b8)
b8=B.bx(D.fr4,A.jN)
w=B.L()
w.r=A.e5.gp(0)
c0.aq(b8,w)
for(p=0;p<6;++p){b8=-10+p*4.4
w=new B.ar(A.U,A.R,A.X,A.Y,A.W)
w.r=A.mp.gp(0)
w.c=1.4
c0.ah(new B.r(-27,b8),new B.r(-3,b8),w)}b8=B.L()
b8.r=(c1.fx>0?A.ha:A.oG).gp(0)
c0.aE(D.fq8,b8)
if(c1.fx>0){b8=8+A.i.F(b2.b.d*7,18)
w=B.L()
w.r=A.bC.gp(0)
w.c=1.6
c0.ah(new B.r(b8,-13),new B.r(b8,-3),w)}b8=B.L()
b8.san(D.aTJ.az(0,B.bY(D.aar,6)))
c0.O(D.aar,6,b8)
b8=B.L()
b8.r=A.nL.gp(0)
c0.O(D.eCs,4,b8)
b8=B.L()
b8.r=A.dT.gp(0)
b8.c=1.8
c0.ah(D.eCn,D.aOz,b8)
if(c1.fx>0)for(b8=b2.b,l=1;l<=2;++l){w=B.bY(D.aOz,4+l*5+A.i.F(b8.d*8,5))
v=new B.ar(A.U,A.R,A.X,A.Y,A.W)
v.b=A.ad
v.c=1.4
v.r=A.oN.j(0.7).gp(0)
c0.cQ(w,-2.4,1.6,!1,v)}break
case"tv":w=B.bx(D.fre,A.iD)
v=B.L()
v.r=M.ni.gp(0)
c0.aq(w,v)
b1=B.bx(D.frb,A.hs)
if(c1.fx>0&&!c1.x){b8=c0.c
J.bs(b8.save())
b8.clipRRect(B.nf(b1),$.mS(),!0)
b8.translate(-33,-21)
K.h6G(c0,D.fy1,c1.at,b2.b.d,c1.ax,-1,b3,b3)
b8.restore()
b8=B.L()
b8.r=A.bf.gp(0)
c0.O(D.eCE,1.6,b8)}else{w=B.L()
w.r=D.wV.gp(0)
c0.aq(b1,w)
b8=new B.aH(b8.r,A.ak,b3,b3,B.a([],x.v))
b8.E(new B.aZ(-33,-21))
b8.E(new B.aq(-10,-21))
b8.E(new B.aq(-33,0))
b8.E(new B.bA())
w=B.L()
w.r=A.c.j(0.05).gp(0)
c0.af(b8,w)}b8=B.L()
b8.r=A.bz.gp(0)
c0.aE(D.fqx,b8)
break}C.iEP(c0,c1,b2.b.d,b2.gceQ())
if(t)b2.lF(c0,"\u2716",D.eFL,A.aC,14)
if(s)c0.c.restore()},
aSS(d,e,f,g){var w,v,u,t,s,r,q,p,o=new C.bMX(),n=e.d,m=e.b,l=n-m,k=e.a,j=m+l*0.06,i=k+l*0.16,h=new B.a5(k,j,i,j+l*0.88)
j=l*0.08
k=B.bx(h,new B.aP(j,j))
$.T()
w=B.L()
w.san(o.$2(h,D.diw))
d.aq(k,w)
i-=0.5
w=l*0.2
k=e.c-w
v=new B.a5(i,m,k,n)
u=k-i
t=i+u*0.66
s=B.L()
s.san(o.$2(v,D.dHh))
d.aE(new B.a5(i,m,t,n),s)
s=B.L()
s.san(o.$2(v,D.dgI))
d.aE(new B.a5(t,m,k,n),s)
k-=0.5
s=m+j
n=l*0.12
r=k+n
q=new B.a5(k,s,r,s+l*0.84)
s=B.L()
s.san(o.$2(q,D.aEL))
d.aE(q,s)
r-=0.5
s=m+l*0.3
p=new B.a5(r,s,r+l*0.1,s+l*0.4)
s=l*0.05
s=B.bx(p,new B.aP(s,s))
r=B.L()
r.san(o.$2(p,D.aEL))
d.aq(s,r)
r=i+2
s=m+l*0.18
o=B.L()
o.r=A.c.j(0.18).gp(0)
d.aE(new B.a5(r,s,r+(u-4),s+j),o)
if(f){o=l*0.42
this.lF(d,"+",new B.r(t+u*0.08,m+n),A.dl,o)
if(g!=null)this.lF(d,g,new B.r(i+u*0.12,m+w),A.bP,o)}},
bLP(d,e,f){return this.aSS(d,e,!0,f)},
bLO(d,e,f){return this.aSS(d,e,f,null)},
bIK(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a6.e,a4=B.v(a3===A.i.fJ(a3)?A.i.S(a3):a3)+"V"
if(a3<=2){a2.bLP(a5,D.fr2,a4)
a2.lF(a5,"\u2212",D.eFl,A.ac,12)
a2.lF(a5,"+",D.eCi,A.aQ,12)
$.T()
w=B.L()
w.r=A.by.gp(0)
a5.aE(D.fqR,w)
w=a6.as
v=B.L()
v.r=B.ap(A.aC,A.bf,w).gp(0)
a5.aE(new B.a5(-22,15,-22+44*w,19),v)
if(a6.as<=0.02)a2.lF(a5,"FLAT",D.eES,A.c1,9)}else if(a3<=4.5){u=a3>3?3:2
t=u*13+6
w=-t/2
v=w+t
s=new B.a5(-31,w,31,v)
r=B.bx(s,A.jN)
$.T()
q=B.L()
q.san(D.cel.az(0,s))
a5.aq(r,q)
for(r=w+3,p=0;p<u;++p){q=r+p*13
a2.bLO(a5,new B.a5(-27,q,25,q+11.5),!1)}for(q=r+(t-6),o=0;o<2;++o){n=D.dgC[o]
$.T()
m=new B.ar(A.U,A.R,A.X,A.Y,A.W)
m.r=A.dT.gp(0)
a5.aE(new B.a5(n,r,n+1.6,q),m)}a2.lF(a5,a4,new B.r(-9,v+1),A.aQ,10)
a2.lF(a5,"+",new B.r(25,w-13),A.aQ,11)}else if(a3<=9){l=new B.a5(-18,-16,18,18)
w=B.bx(l,A.hs)
v=$.T()
r=B.L()
r.san(D.ceD.az(0,l))
a5.aq(w,r)
k=new B.a5(-18,-4,18,18)
r=B.rb(k,A.hs,A.hs,A.bJ,A.bJ)
w=B.L()
w.san(D.avo.az(0,k))
a5.aq(r,w)
j=new B.a5(-18,-16,18,-11)
w=B.rb(j,A.bJ,A.bJ,A.hs,A.hs)
r=B.L()
r.san(D.cf3.az(0,j))
a5.aq(w,r)
i=B.L()
i.san(D.eP3.az(0,D.fqB))
a5.O(D.aOS,4,i)
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
w.r=A.cz.gp(0)
a5.O(D.eDt,2,w)
a2.lF(a5,"9V",D.eFO,A.c,13)
a2.lF(a5,"+",D.eEO,A.aQ,11)}else{e=new B.a5(-34,-12,34,18)
w=B.bx(e,A.hs)
$.T()
v=B.L()
v.san(D.cc8.az(0,e))
a5.aq(w,v)
d=new B.a5(-36,-18,36,-10)
v=B.bx(d,D.ePb)
w=B.L()
w.san(D.avE.az(0,d))
a5.aq(v,w)
for(g=0;g<6;++g){w=new B.ar(A.U,A.R,A.X,A.Y,A.W)
w.r=A.ax.gp(0)
a5.O(new B.r(-14+g*5.6,-14),1.6,w)}w=B.L()
w.r=A.bu.j(0.92).gp(0)
a5.aE(D.frc,w)
for(o=0;o<2;++o){w=D.cHk[o]
n=w.a
a0=w.b
a1=B.bZ(new B.r(n,-21),7,8)
w=B.bx(a1,A.Fo)
v=new B.ar(A.U,A.R,A.X,A.Y,A.W)
v.san(D.ccI.az(0,a1))
a5.aq(w,v)
v=B.bx(B.bZ(new B.r(n,-24),3.5,9),A.Fo)
w=new B.ar(A.U,A.R,A.X,A.Y,A.W)
w.r=a0.gp(a0)
a5.aq(v,w)}a2.lF(a5,"\u2212",D.eFm,A.ac,11)
a2.lF(a5,"+",D.eCd,A.aC,11)
a2.lF(a5,"12V",H.aOM,A.ax,11)}},
aD(d){return!0}}
C.nb.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a6(k)
A.d.a6(d.b)
w=B.S(x.N,x.Y)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.I)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.ub(o,r,q,p)
n.ats(o,r,q,p)
k.push(n)
J.iu(s[4],new C.cwZ(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.I)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.ano(m,u[1],l,u[3])}}}
C.alc.prototype={
R(){var w=x.N
return new C.ald(B.c2(2000,1,1,0,0,0,0,0),A.J,A.aA,B.S(w,x.gl),B.aR(w),$,A.bH,0,B.a([],x.X),null,null)}}
C.ald.prototype={
agz(d){var w=this,v=w.ch
if(v!=null)v.a1(0)
w.l(new C.bMA(w,d))
w.ch=B.cC(A.mx,new C.bMB(w))},
t(){var w=this.ch
if(w!=null)w.a1(0)
w=this.db
if(w!=null)w.a1(0)
this.byg()},
a1Y(d,e){return this.cnH(d,e)},
b5i(d){return this.a1Y(d,!1)},
cnH(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a1Y=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
r=d.at
q=e?A.o2:A.zo
p=d.b
w=3
return B.b(K.htL(s,r,p,d.ax<3.2,q,$.qU().h(0,p).b),$async$a1Y)
case 3:o=g
t.cy=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a1Y,v)},
cAQ(d){var w=this,v=new B.W(Date.now(),0,!1),u=w.CW.c_(0,d.a,new C.bMC()),t=J.cJ(u)
t.I(u,v)
t.br(u,new C.bMD(v))
if(t.gJ(u)>=4){t.a6(u)
t=w.db
if(t!=null)t.a1(0)
w.a3k(d)
return}if(t.gJ(u)===3){t=w.db
if(t!=null)t.a1(0)
w.db=B.cC(A.j4,new C.bME(w,u,d))}},
a1E(d){return this.clV(d)},
clV(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a1E=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
w=3
return B.b(C.iG4(s,d.b,A.i.S(A.i.F(t.a.c.d*0.12,1)*100)),$async$a1E)
case 3:t.cy=!1
case 1:return B.h(u,v)}})
return B.i($async$a1E,v)},
a3k(d){return this.cyh(d)},
cyh(d){var w=0,v=B.j(x.H),u=this,t
var $async$a3k=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bV(A.L,null,new C.bMy(u,d),t,!0,!0,!0,null,!1,!1,x.H),$async$a3k)
case 2:return B.h(null,v)}})
return B.i($async$a3k,v)},
Z(){this.a3()
this.bkt()
this.mo()},
bkt(){this.a.c.e=new C.bMU(this)},
mG(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.vV(0,d)
for(w=q.a.c.a,v=w.length,u=q.cx,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=D.mN.h(0,s.b)
if((r==null?null:r.b)!==D.Bm)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.q(0,s.a)&&!q.cy){u.I(0,s.a)
q.a1Y(s,!0)}}else u.X(0,s.a)}if((q.ax+=d)>0.16){q.ax=0
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
q.l(new C.bMV())},
bcu(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
b5Z(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.U(w).k("dy<1>"),w=new B.dy(w,v),w=new B.bR(w,w.gJ(0),v.k("bR<aj.E>")),u=d.a,v=v.k("aj.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.at
p=s.d
o=D.mN.am(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cO2(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
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
h=C.hTf(new B.r(k,n),new B.r(i,l),p)
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
agx(){this.a.toString
this.l(new C.bM_())},
buU(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.dkf[v]
if(!A.d.aR(p.a.c.a,new C.bMW(u,w))){o=new B.r(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?A2.Bb:o
s=s?A2.Bb:o
q=t.amA(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.x=null
G.dH(1200,"",50,0,0.3,"tri")
p.agx()},
B(d){var w,v,u,t,s,r,q,p,o,n=this
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.TS[v].a)
u=w.length
t=u>8
s=t?A.d.dv(w,0,A.o.ao(u+1,2)):w
r=t?A.d.fB(w,A.o.ao(w.length+1,2)):A.M
q=n.a.d
if(q!=null){w=B.a3(q).k("ct<1>")
w=B.B(new B.ct(q,w),w.k("M.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.I)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b5O(s,!0))
n.a.toString
if(t)w.push(n.b5O(r,!0))
w.push(B.E(B.cg(new C.bMT(n,q)),1))
return B.w(w,A.l,null,A.e,A.h,0,A.p)},
b5O(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=$.qU()
s=t.h(0,u).d.j(0.14)
r=new B.aP(14,14)
q=new B.ax(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.aA(p,B.p(p,B.w(B.a([B.c(t.h(0,u).c,p,p,p,p,p,p,A.yf,p,p,p),B.c(t.h(0,u).b,p,1,A.a2,p,p,p,A.os,p,p,p)],n),A.l,p,A.bb,A.h,0,A.p),A.f,p,p,new B.o(s,p,new B.bE(q,q,q,q),new B.bc(r,r,r,r),p,p,A.m),p,p,p,L.oW,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bM0(this,u),p,p,p,p,p,p,!1,A.a4))}return B.p(p,B.co(m,p,p,A.ho,p,p,A.aK,!1),A.f,p,p,new B.o(L.CF,p,new B.bE(A.a1,A.a1,new B.ax(o,1,A.r,-1),A.a1),p,p,p,A.m),p,58,p,p,p,p,p,p)},
cpS(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a2.b,a1=$.qU().h(0,a0)
a1.toString
w=a2.dy
v=a2.fr
u=new C.bMm(e,a1)
t=new C.bMl()
s=B.m(20)
r=a1.d
q=B.K(r.j(0.55),A.r,1.3)
p=B.a([new B.aa(0,A.H,r.j(0.18),A.cy,16)],x.V)
o=r.j(0.18)
n=B.m(10)
n=B.p(A.z,B.c(a1.c,d,d,d,d,d,d,A.yf,d,d,d),A.f,d,d,new B.o(o,d,d,n,d,d,A.m),d,34,d,d,d,d,d,34)
o=B.E(B.c(a1.b,d,1,A.a2,d,d,d,B.l(d,d,r,d,d,d,d,d,d,d,d,15,d,d,A.u,d,d,!0,d,d,d,d,d,d,d,d),d,d,d),1)
m=B.m(999)
l=B.K(A.aT,A.r,1)
k=x.p
m=B.a([B.A(B.a([n,A.aa,o,B.aA(d,B.p(d,B.c(e.f?"Less":"About",d,d,d,d,d,d,A.X3,d,d,d),A.f,d,d,new B.o(d,d,l,m,d,d,A.m),d,d,d,d,A.o9,d,d,d),A.y,!1,D.hLs,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.bM7(e),d,d,d,d,d,d,!1,A.a4),B.aI(d,d,d,d,D.c6y,d,d,d,new C.bM8(e,a2),d,d,d,d,"Remove part",A.cp),B.aI(d,d,d,d,Ar.Rk,d,d,d,new C.bM9(e),d,d,d,d,d,A.cp)],k),A.l,d,A.e,A.h,0,d,d)],k)
if(e.f)A.d.u(m,B.a([B.c(a1.e,d,d,d,d,d,d,A.LD,d,d,d),A.cQ,B.c("How it is made: "+a1.f,d,d,d,d,d,d,U.aYu,d,d,d)],k))
m.push(A.aj)
if(a2.x)m.push(D.h09)
else m.push(new B.C(A.fa,B.A(B.a([t.$2(A.i.a5(Math.abs(a2.dy),2),"VOLTS"),A.b7,t.$2(A.i.a5(Math.abs(a2.fr)*1000,0),"MILLIAMPS"),A.b7,t.$2(A.i.a5(Math.abs(w*v),2),"WATTS")],k),A.l,d,A.e,A.h,0,d,d),d))
j=e.a.c.bik(a2)
if(j!=null){a1=(a2.x?A.aC:A.as).j(0.14)
w=B.m(10)
v=B.K((a2.x?A.aC:A.as).j(0.5),A.r,1)
m.push(new B.C(A.hz,B.p(d,B.c((a2.x?"Why it burnt out":"Why it is not working")+": "+j,d,d,d,d,d,d,D.fWZ,d,d,d),A.f,d,d,new B.o(a1,d,v,w,d,d,A.m),d,d,d,d,A.cu,d,d,d),d))}if(C.hr9(a0)){a1=B.a([],k)
for(i=0;i<10;i=h){h=i+1
a1.push(new B.C(A.fa,new E.e3("CH "+h,a2.at===i,new C.bMd(e,a2,i),d,r,d),d))}a1=B.cc(B.A(a1,A.l,d,A.e,A.h,0,d,d),A.t,d,A.y,d,d,d,d,d,A.aK)
if(e.a.c.rB(a2)){w=F.TH[A.o.F(a2.at,10)]
v=e.f?" Tap the TV 3 times quickly to open the big screen.":""
v="Showing: "+w.a+"."+v
w=v}else w="The TV is off. Give it power with the + dot towards the battery +."
a1=B.a([A.aj,a1,A.at,B.c(w,d,e.f?4:1,A.a2,d,d,d,N.hI,d,d,d)],k)
if(e.a.c.rB(a2))a1.push(new E.fJ(A.xs,"Open big screen",new C.bMe(e,a2),r,d))
A.d.u(m,a1)}if(D.mN.am(0,a0)&&!C.hr9(a0)){a1=B.a([A.aj],k)
if(e.f||!e.a.c.rB(a2))a1.push(B.c(e.a.c.rB(a2)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",d,d,d,d,d,d,N.hI,d,d,d))
if(e.a.c.rB(a2))a1.push(new E.fJ(A.R_,"Open the "+$.qU().h(0,a0).b,new C.bMf(e,a2),r,d))
A.d.u(m,a1)}if(D.mN.am(0,a0))A.d.u(m,B.a([A.aj,new E.fJ(A.DS,"Make it bigger (or tap it 4 times)",new C.bMg(e,a2),r,d)],k))
e.a.toString
a1=a0==="buck"
if(a1||a0==="regulator"){w=A.i.a5(a2.db,1)
if(e.a.c.rB(a2))v=a2.dx
else{e.a.toString
v=a0==="regulator"?5:a2.e}v=B.a([A.aj,B.c("Volts in: "+w+" V   \u2192   Volts out: "+A.i.a5(v,1)+" V",d,d,d,d,d,d,D.fQN,d,d,d)],k)
if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dEa[g]
w=f===A.i.fJ(f)?A.i.S(f):f
a1.push(new E.e3(B.v(w)+" V out",a2.e===f,new C.bMh(e,a2,f),d,r,d))}v.push(new B.C(A.kO,B.c_(A.bI,a1,A.br,d,0,6),d))}if(a0==="regulator")v.push(D.hfj)
A.d.u(m,v)}if(e.a.c.MZ(a2)&&!a2.x){a1=A.i.a5(a2.cx,2)
w=A.i.a5(e.a.c.AC(a2),2)
v=e.a.c
o=v.aq9(a2)?"   \u26a0 OVERLOADED":""
a1=B.c("Supplying "+a1+" A of the "+w+" A it can give"+o,d,d,d,d,d,d,B.l(d,d,v.aq9(a2)?A.c1:A.eG,d,d,d,d,d,d,d,d,12.5,d,d,A.C,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
w=B.m(4)
o=A.i.D(a2.cx/e.a.c.AC(a2),0,1)
v=e.a.c.aq9(a2)?A.aC:A.bf
m.push(new B.C(A.hz,B.w(B.a([a1,A.cQ,B.bv(w,B.jH(A.by,d,d,5,d,o,new B.la(v,x.c)),A.ap)],k),A.B,d,A.e,A.h,0,A.p),d))}a1=a0==="battery"
if(a1&&a2.e===1.5){w=a2.as
v=A.i.S(w*100)
if(w<=0.02)w="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else w=w>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.C(A.hz,B.c("Charge: "+v+"%"+w,d,d,d,d,d,d,D.fKa,d,d,d),d))}if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.ds4[g]
w=f===1.5?"1.5 V (rechargeable)":B.v(f)+" V"
a1.push(new E.e3(w,a2.e===f,new C.bMi(e,a2,f),d,r,d))}m.push(B.c_(A.bI,a1,A.br,d,0,6))}if(a0==="resistor"){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dh5[g]
w=f>=1000?"1 k\u03a9":""+A.o.S(f)+" \u03a9"
a1.push(new E.e3(w,a2.r===f,new C.bMj(e,a2,f),d,r,d))}m.push(B.c_(A.bI,a1,A.br,d,0,6))}if(a0==="solar")m.push(u.$3("Sunlight",a2.f,new C.bMk(a2)))
if(a0==="turbine")m.push(u.$3("Wind",a2.f,new C.bMa(a2)))
if(a0==="pot")m.push(u.$3("Knob",a2.f,new C.bMb(a2)))
if(a0==="ldr")m.push(u.$3("Light",a2.f,new C.bMc(a2)))
if(a0==="crank")m.push(D.hax)
if(a0==="switch")m.push(B.c(a2.w?"Closed: the loop is joined up.":"Open: the loop is broken.",d,d,d,d,d,d,N.hI,d,d,d))
return B.p(d,new B.cP(D.ba0,B.cc(B.w(m,A.B,d,A.e,A.P,0,A.p),A.t,d,A.y,d,d,d,d,d,A.ah),d),A.f,d,d,new B.o(F.ZM,d,q,s,p,d,A.m),d,d,D.hKL,d,D.bGS,d,d,d)}}
C.bfc.prototype={}
C.X_.prototype={
R(){return new C.aGC(C.hxn(),new B.cB(null,x.gJ),B.aR(x.S))}}
C.aGC.prototype={
Z(){this.a3()
$.aS.cS$.push(this)
this.agy()},
agy(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$agy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fU1(),$async$agy)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.iFd(t.d,r)
if(s!=null){t.l(new C.e62(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$agy,v)},
FY(){var w,v=this
if(!v.as)return
w=C.ivp(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bJ4(w)},
j9(d){if(d!==A.fY)this.FY()},
t(){$.aS.hM(this)
this.FY()
this.a2()},
ceS(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.U(v).k("X<1>")
t=new B.X(v,new C.e6b(q),u).gJ(0)
s=new B.X(v,new C.e6c(),u).gJ(0)
r=new B.X(v,w.gd2F(),u).gJ(0)
if(t!==q.x||s!==q.y||r!==q.z)q.l(new C.e6d(q,t,s,r))}if(A.o.F(q.w,45)===0)q.FY()
if(A.o.F(q.w,10)===0){w=q.f
$.aki()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.q(0,q.f)&&$.aki()[q.f].c.$1(q.d)){w.I(0,q.f)
C.K4("bell",B.a([0,4,7,12],x.t),700,0.45)
q.l(new C.e6e())
q.FY()
w=q.c
w.toString
w=B.Kx(w)
if(w!=null)w.T(B.b0(p,p,p,p,p,A.t,p,B.c("\u2705 Challenge done: "+$.aki()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mu,p,p,p,p,p,p,p,p,p,p))}},
ajp(){var w=0,v=B.j(x.H),u=this,t
var $async$ajp=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.ce(null,null,!0,null,new C.e61(u),t,null,!0,!0,x.H),$async$ajp)
case 2:return B.h(null,v)}})
return B.i($async$ajp,v)},
b2X(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.m(12),t=B.K(f.j(0.45),A.r,1)
u=B.a([B.ao(w,B.p(w,B.V(d,f,w,w,w,18),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ao(w,h,w,w,w,-1,-3,w))
return B.aA(w,B.hb(new B.a4(40,38,new B.am(A.a0,w,A.ab,A.f,u,w),w),w,e,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4)},
b2W(d,e,f,g){return this.b2X(d,e,f,g,null)},
au9(d,e,f,g){var w=null,v=f.j(0.1),u=B.m(10),t=B.K(f.j(0.4),A.r,1)
return B.E(B.aA(w,B.p(w,B.A(B.a([B.V(d,f,w,w,w,15),A.e0,new B.d0(1,A.c9,B.c(e,w,1,A.a2,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.bb,A.h,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),1)},
ahI(){var w=0,v=B.j(x.H),u=this,t
var $async$ahI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a8(t,!1).ca(B.e7(new C.e5Y(u),!1,null,x.H)),$async$ahI)
case 2:t=u.e.gbm()
if(t!=null)t.bkt()
if(u.c!=null)u.l(new C.e5Z())
u.FY()
return B.h(null,v)}})
return B.i($async$ahI,v)},
bLW(){var w,v,u,t,s=null,r=this.f
$.aki()
if(r>=11)return s
w=this.r
v=w.q(0,r)
r=v?A.bk:A.aC
u=B.m(9)
t=B.K(L.CF,A.r,1.5)
return B.p(s,B.at(B.c(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.yi,s,s,s),s,s,s),A.f,s,D.b9Q,new B.o(r,s,t,u,s,s,A.m),s,s,s,s,A.fc,s,s,s)},
akx(){var w=0,v=B.j(x.H),u=this,t
var $async$akx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bV(F.ng,null,new C.e6a(u),t,!0,!0,!0,A.kz,!1,!1,x.H),$async$akx)
case 2:return B.h(null,v)}})
return B.i($async$akx,v)},
ceT(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.aA(r,B.p(r,D.c38,A.f,r,r,new B.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e6g(d),r,r,r,r,r,r,!1,A.a4),o=B.m(11)
o=B.p(r,D.bfQ,A.f,r,r,new B.o(A.bt,r,B.K(A.aH.j(0.45),A.r,1),o,r,r,A.m),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.p(r,B.w(B.a([B.A(B.a([p,A.aa,o,A.aa,B.E(B.w(B.a([D.hde,B.c(w,r,1,A.a2,r,r,r,B.l(r,r,s.y>0||s.z>0?A.f3:A.hm,r,r,r,r,r,r,r,r,11.5,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.B,r,A.e,A.h,0,A.p),1),new C.aAw(s.gclD(),r),A.uu,s.b2W(A.rm,"Construction Lab: real 3D wiring, plumbing and a house",A.cW,new C.e6h(s,d)),s.b2X(A.m6,"Challenges",A.aQ,s.gcDu(),s.bLW()),s.b2W(A.DO,"How to play",A.aH,new C.e6i(d,e))],v),A.l,r,A.e,A.h,0,r,r),A.aj,B.A(B.a([s.au9(A.ob,"Circuits",A.bj,s.gcw8()),A.b7,s.au9(A.p0,"Repair",A.aQ,new C.e6j(s)),A.b7,s.au9(I.xq,"Clear",A.c1,new C.e6k(s))],v),A.l,r,A.e,A.h,0,r,r)],v),A.l,r,A.e,A.P,0,A.p),A.f,r,r,new B.o(L.CF,r,new B.bE(A.a1,A.a1,new B.ax(q,1,A.r,-1),A.a1),r,r,r,A.m),r,r,r,r,D.bM3,r,r,r)},
B(d){var w=this,v=null
$.auU="tech"
return B.c6(v,A.c7,B.bo(!0,B.w(B.a([w.ceT(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.hwd(w.d,w.e,w.gceR(),v),1)],x.p),A.l,v,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
C.aAw.prototype={
R(){return new C.bdg(null,null)}}
C.bdg.prototype={
gaAx(){var w,v=this,u=v.d
if(u===$){w=B.br(null,A.Z,null,1,null,v)
w.cT(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
t(){this.gaAx().t()
this.bzC()},
B(d){var w=null,v=this.a.c
return B.aA(w,B.hb(new B.a4(42,42,B.c9(this.gaAx(),new C.cOQ(this),w),w),w,"AI Inventor: say what you want to make",w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bdf.prototype={
a4(d,e){var w,v,u,t=null,s=e.eo(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.T()
w=B.L()
w.r=A.b_.j(0.25+0.15*o).gp(0)
w.y=O.oX
d.O(s,r+2+o*2,w)
w=B.L()
w.san(D.eOJ.az(0,B.bY(s,r)))
d.O(s,r,w)
v=B.L()
v.b=A.ad
v.c=2.2
v.san(new B.he(A.z,0,6.283185307179586,A.w,D.d6G,t,new B.n_(p)).az(0,B.bY(s,r)))
d.O(s,r,v)
p=new C.cOP(d)
p.$3(s.a7(0,A.uj),8+o*1.5,1)
q*=4
p.$3(s.a7(0,D.eDA),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a7(0,D.eFS),2.6,0.5+0.5*Math.cos(q))
u=B.h_(t,A.cL,t,t,t,D.fGt,A.a8,A.cd,t,A.e4,A.ce)
u.eL()
u.a4(d,s.a7(0,new B.r(-u.b.c/2,5)))},
aD(d){return d.b!==this.b}}
C.aAR.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.aAS.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.byf()}}
C.aNh.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bC8.prototype={}
C.h5.prototype={}
C.Ky.prototype={
a9(){return"ScreenStyle."+this.b}}
C.mm.prototype={}
C.WJ.prototype={
R(){return new C.aGs(A2.Bb,null,null)}}
C.aGs.prototype={
gabB(){var w,v=this,u=v.d
if(u===$){w=B.br(null,A.oV,null,1,null,v)
w.cs(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
gack(){var w=D.mN.h(0,this.a.c)
return w==null?D.aUN:w},
t(){if(this.f){P.Db(Y.Lx)
P.bHv()}this.gabB().t()
this.bBu()},
gC0(){var w=this.gabB().y
w=w==null?null:A.o.ao(w.a,1000)
return(w==null?0:w)/1000},
OB(){var w,v=this,u=v.e
if(u==null)return null
w=F.iy[u].e
if(w===-2)return null
if(w===-1)return A.o.F(v.y+A.i.bd(Math.max(0,v.gC0()-v.z)/10),14)
return w},
Kh(d){this.l(new C.e1Z(this,d))},
b6k(d){this.l(new C.e2_(this,d,14))},
aEy(d){var w=this.OB()
if(w==null)w=d>0?-1:0
return this.b6k(w+d)},
cIz(d,e){if(e.a<=0||e.b<=0||this.OB()==null)return
this.l(new C.e29(this,d,e))},
aew(){return this.c6W()},
c6W(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aew=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.OB()
if(q==null){w=1
break}r.a=!1
s=t.c
s.toString
w=3
return B.b(B.bV(A.L,null,new C.e1Y(r,q),s,!0,!0,!0,null,!1,!1,x.H),$async$aew)
case 3:if(t.c!=null&&r.a)t.b6k(q)
case 1:return B.h(u,v)}})
return B.i($async$aew,v)},
cK7(){var w=this,v=!w.f
w.l(new C.e2a(w,v))
if(v){P.Db(Y.acB)
P.hs0(w.gack().b===D.y2)}else{P.Db(Y.Lx)
P.bHv()}},
ceW(){var w,v=this
if(!v.f)return
B.jG()
v.l(new C.e2b(v))
w=v.c.K(x.q).f
w.MN()
if(v.r)w.T(F.aWX)},
aRd(d){return B.cg(new C.e1R(this,d))},
cpg(d){var w,v=this,u=null,t=v.gC0(),s=t-v.w,r=s<1.4?new K.b0R(v.x,s):u
if(F.iy[d].e===-1){w=Math.max(0,t-v.z)
return new C.agW(d,w,r,A.o.F(v.y+A.i.bd(w/10),14),u)}return new C.agW(d,t,r,u,u)},
b_T(d){var w=null,v=A.c.j(0.92),u=d*0.42
return B.aE(!1,A.a3,!0,w,B.aM(!1,w,!0,new B.C(new B.R(u,0,u,0),B.A(B.a([B.V(A.kQ,A.ax,w,w,w,d*0.6),new B.a4(d*0.18,w,w,w),B.c("Learn more",w,w,w,w,w,w,B.l(w,w,A.ax,w,w,w,w,w,w,w,w,d*0.48,w,w,A.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,w,w),w),A.nz,!0,w,w,w,w,D.hKN,w,w,w,w,w,w,this.gc6V(),w,w,w,w,w,w,w),A.f,v,0,w,w,A.nz,w,w,A.ai)},
b2Y(d,e,f,g){var w=null,v=B.np(w,A.b9,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w)
return B.aI(w,w,w,w,B.V(d,A.c,w,w,w,w),w,w,g,f,w,w,w,v,e,w)},
ceV(d,e,f){return this.b2Y(d,e,f,null)},
cxr(){var w=this,v=null,u=new C.e27(),t=A.v.j(0.72),s=B.m(22),r=B.K(w.gack().d.j(0.5),A.r,1),q=u.$3(D.bWv,"AD \u2212",new C.e23(w)),p=u.$3(A.asN,"AD +",new C.e24(w)),o=u.$5$color$on(A.kP,"HOME",new C.e25(w),w.gack().d,w.e==null),n=w.e
n=n!=null&&F.iy[n].e===-1
return B.p(v,B.A(B.a([q,p,o,u.$5$color$on(A.A1,"ADS",new C.e26(w),A.c5,n)],x.p),A.l,v,A.e,A.P,0,v,v),A.f,v,v,new B.o(t,v,r,s,v,v,A.m),v,v,D.hKT,v,A.I0,v,v,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.gack(),l=o.f,k=!l||!o.r
l=l?B.aF(d,A.dK,x.w).w.r.b+26:8
w=o.ceV(A.cC,"Back to the board",new C.e2c(d))
v=o.f
u=v?Ao.Iy:A.xs
v=v?"Leave full screen":"Full screen"
v=o.b2Y(u,v,o.gbcY(),D.hLF)
u=B.m(20)
t=o.e
s=m.a
r=x.p
q=new B.C(new B.R(8,l,8,0),B.A(B.a([w,A.aa,v,A.aa,B.E(new B.bL(A.a9,n,n,B.p(n,B.c(t==null?s:s+" \xb7 "+F.iy[t].a,n,1,A.a2,n,n,n,Aq.ya,n,n,n),A.f,n,n,new B.o(A.b9,n,n,u,n,n,A.m),n,n,n,n,A.lD,n,n,n),n),1)],r),A.l,n,A.e,A.h,0,n,n),n)
p=m.b===D.y2?o.bO6(m):o.csN(m)
l=o.f
w=!l
v=l?o.gb2Z():n
if(l){l=B.at(p,n,n,n)
u=k?1:0
r=new B.am(A.a0,n,A.b4,A.t,B.a([l,B.ao(n,B.xM(new B.dp(!k,q,n),A.aZ,A.id,u),n,n,0,0,0,n)],r),n)
l=r}else l=B.w(B.a([q,A.aj,o.cxr(),B.E(new B.C(A.cB,B.at(p,n,n,n),n),1)],r),A.l,n,A.e,A.h,0,A.p)
return B.c6(n,A4.a0r,B.bo(w,B.aA(A.c0,l,A.y,!1,n,v,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!1,A.a4),w,!1,A.ag,w,w),n,!1,!1,n,n)},
ceU(d){var w
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
csN(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.abC
switch(n.a){case 1:w=44
break
case 2:w=30
break
case 3:w=22
break
case 4:w=26
break
default:w=14
break}v=B.c9(p.gabB(),new C.e22(p,w,d,m),o)
if(n===D.abD)v=new B.BT(D.bMI,v,o)
n=p.ceU(n)
u=p.f?A.hO:Au.a1V
t=m?4:5
s=d.c
r=B.ap(s,A.c,m?0.25:0.08)
r.toString
q=B.ap(s,A.v,0.5)
q.toString
q=B.a([r,s,q],x.O)
s=B.m(w)
r=B.a([new B.aa(0,A.H,d.d.j(0.28),A.J,36)],x.V)
return new B.fN(n,B.p(o,B.p(o,v,A.f,o,o,new B.o(A.v,o,o,B.m(w-3),o,o,A.m),o,o,o,o,A7.I1,o,o,o),A.f,o,o,new B.o(o,o,o,s,r,new B.a6(A.aw,A.aD,A.w,q,o,o),A.m),o,o,o,u,new B.R(t,t,t,t),o,o,o),o)},
bbA(d){var w=Date.now(),v=A.o.D(this.a.d+A.i.bd(this.gC0()*0.4),0,100),u=d.b===D.abC,t=u?34:20,s=u?28:18
return new B.C(new B.R(t,12,s,2),B.cg(new C.e28(new B.W(w,0,!1),v)),null)},
ayk(d,e,f){var w,v=null,u=d.d,t=B.ap(u,A.v,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.m(e*0.26)
w=x.p
t=B.a([B.p(v,B.at(B.c(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.o(v,v,v,u,D.dyG,new B.a6(A.aw,A.aD,A.w,t,v,v),A.m),v,e,v,v,v,v,v,e)],w)
if(f)A.d.u(t,B.a([A.at,B.c(d.a,v,1,A.a2,v,v,v,D.fNb,v,v,v)],w))
return B.aA(v,B.w(t,A.l,v,A.e,A.P,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.e1W(this,d),v,v,v,v,v,v,!1,A.a4)},
c4M(d,e){return this.ayk(d,e,!0)},
c4t(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=o===D.aUO||o===D.Bo,m=d.d,l=B.ap(m,A.v,0.55)
l.toString
m=B.ap(m,A.kb,0.5)
m.toString
m=B.a([l,A.dD,m],x.O)
l=q.bbA(d)
w=n?190:138
v=B.m(24)
u=B.K(A.aT,A.r,1)
w=B.aA(p,B.p(p,B.bv(B.m(23),B.b4(p,p,p,new C.agW(0,q.gC0(),p,p,p),A.hh),A.ap),A.f,p,p,new B.o(p,p,u,v,p,p,A.m),p,w,p,A.ie,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.e1U(q),p,p,p,p,p,p,!1,A.a4)
v=n?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.iy[s]
t.push(new B.cn(A.z,p,p,new B.d6(A.dn,A.z,A.f,q.c4M(r,n?58:54),p),p))}l=B.a([l,A.aj,w,A.af,B.E(B.lf(0.92,t,v,8,12,A.xa,p,!1),1)],u)
if(o!==D.abD){o=A.c.j(0.16)
w=B.m(28)
l.push(B.p(p,B.cg(new C.e1V(q)),A.f,p,p,new B.o(o,p,p,w,p,p,A.m),p,p,p,D.bH1,H.apD,p,p,p))}return B.p(p,B.w(l,A.l,p,A.e,A.h,0,A.p),A.f,p,p,new B.o(p,p,p,p,p,new B.a6(A.aw,A.aD,A.w,m,p,p),A.m),p,p,p,p,p,p,p,p)},
bHk(d,e){var w=this,v=null,u=w.OB(),t=w.bbA(d),s=B.E(w.aRd(e),1),r=x.p,q=B.a([B.bT(0,B.aA(v,B.p(v,B.at(B.c(F.iy[e].a,v,v,v,v,v,v,A.LG,v,v,v),v,v,v),A.f,A.v,v,v,v,v,v,v,v,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.e1O(w),v,v,v,v,v,v,!1,A.a4),0,0,0)],r)
if(u!=null)u=!w.f||!w.r
else u=!1
if(u)q.push(B.ao(8,w.b_T(22),v,v,v,10,8,v))
return B.p(v,B.w(B.a([t,s,new B.a4(v,38,new B.am(A.a0,v,A.ab,A.t,q,v),v)],r),A.l,v,A.e,A.h,0,A.p),A.f,A.v,v,v,v,v,v,v,v,v,v,v)},
aUg(d,e){return B.c9(this.gabB(),new C.e1T(this,e,d),null)},
bO6(d){var w,v,u,t=this,s=null,r=t.a.c,q=r==="carscreen"
if(t.f)return B.qE(t.aUg(d,q))
r=r==="imac"?26:8
w=d.c
v=B.ap(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.m(q?26:14)
u=B.a([new B.aa(0,A.H,d.d.j(0.25),A.J,36)],x.V)
return new B.fN(1.5384615384615383,B.p(s,B.bv(B.m(q?20:8),t.aUg(d,q),A.ap),A.f,s,s,new B.o(s,s,s,v,u,new B.a6(A.aw,A.aD,A.w,w,s,s),A.m),s,s,s,A.apx,new B.R(8,8,8,r),s,s,s),s)}}
C.bAa.prototype={
a4(d,e){var w,v,u,t,s,r=e.a,q=e.b,p=0+r,o=0+q
$.T()
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
t=new B.ar(A.U,A.R,A.X,A.Y,A.W)
t.r=v.j(0.1).gp(0)
t.y=D.bMN
d.O(new B.r(r*(0.15+0.2*s+0.05*w),q*(0.3+0.3*u)),q*(0.2+0.04*s),t)}},
aD(d){return!0}}
C.agW.prototype={
a4(d,e){var w=this
return K.MA(d,e,w.b,w.c,w.e,w.d)},
aD(d){return!0}}
C.aP5.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.byX.prototype={}
C.aav.prototype={
B(d){var w=null
return B.c6(B.eS(w,w,w,!0,!0,D.akr,w,1,!0,w,0,!1,w,!1,w,w,B.aI(w,w,w,w,I.aul,w,w,w,new C.cpS(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.hmh,w,w,w,1,w,!0),D.akr,B.co(B.a([D.eHk,B.cg(new C.cpT())],x.p),w,w,D.bI7,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.Yn.prototype={
R(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aIb(w,new B.au(A.ay,$.ay()),$,A.bH,0,B.a([],x.X),null,null)}}
C.aIb.prototype={
Z(){this.a3()
this.mo()},
b9q(d){var w=this.d.length
return A.o.F(A.i.bd(A.i.F(A.i.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
mG(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b9q(v.f)
if(w!==v.x){v.x=w
E.mJ("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.l(new C.f2F(v))
C.K4("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
cgS(){if(this.d.length<2)return
this.l(new C.f2B(this))},
b3B(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.l(new C.f2A(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gcgR(),p=s.d,o=B.E(B.aA(r,B.b4(r,r,r,new C.bAm(p,s.f,r),A.hh),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.w(B.a([o,new B.a4(r,40,B.at(B.c(n,r,r,r,r,r,r,D.fVl,r,r,r),r,r,r),r)],w),A.l,r,A.e,A.h,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.aEe[A.o.F(v,8)].j(0.9)
t=new B.aP(20,20)
o.push(B.aA(r,B.p(r,B.c(p[v],r,r,r,r,r,r,D.fUx,r,r,r),A.f,r,r,new B.o(u,r,r,new B.bc(t,t,t,t),r,r,A.m),r,r,r,A.fa,A.he,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.f2D(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a4))}p=A.c.j(0.07)
return E.lZ(A.aQ,A.fh,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.w(B.a([new E.fj(o,r,r),B.A(B.a([B.E(B.aN(r,A.M,!1,r,!0,A.t,r,B.aO(),s.e,r,r,r,r,r,2,B.bC(r,new B.b6(4,B.m(14),A.a1),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kC,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.am,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.f2E(s),r,!1,r,r,!1,r,!0,r,A.ae,r,r,r,r,r,r,r,r,r,r,r,A.du,!0,A.a8,r,A.ao,r,r,r,r),1),A.aa,new E.fJ(A.ig,"Add",s.gcgP(s),A.c,r),A.b7,new E.fJ(A.oa,"Spin",q,A.bf,r)],w),A.l,r,A.e,A.h,0,r,r)],w),A.l,r,A.e,A.P,0,A.p))}}
C.bAm.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=k/2,i=e.b,h=i/2+10,g=new B.r(j,h),f=Math.min(k,i)/2-24
i=f+8
k=$.T()
w=B.L()
w.r=D.bme.gp(0)
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
o.r=D.aEe[A.o.F(r,8)].gp(0)
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
if(p.length>12)p=A.a.aw(p,0,11)+"\u2026"
n=new B.j4(new B.eJ(p,l,l,A.cY,l,l,l,l,l,l,D.fHh),A.a8,A.cd,new B.kj(1),l,l,l,l,A.ce,l,A.cL)
n.eL()
p=n.b
o=p.c
p=p.a.c
n.a4(d,new B.r(f-o-16,-p.gb4(p)/2))
i.restore()}i=B.L()
i.r=D.ak3.gp(0)
d.O(g,20,i)
i=B.L()
i.b=A.ad
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
h.b=A.ad
h.c=2
h.r=A.b9.gp(0)
d.af(m,h)},
aD(d){return!0}}
C.X7.prototype={
R(){return new C.bob($,A.bH,0,B.a([],x.X),null,null)}}
C.bob.prototype={
Z(){this.a3()
this.mo()},
mG(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.K4("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.Vs(900,new C.e9L())}w.l(new C.e9M())},
b3D(d){return this.l(new C.e9G(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aZ(A.o.v(A.i.ao(m,60)),2,"0")
v=A.a.aZ(A.o.v(A.o.F(A.i.cG(m),60)),2,"0")
m=B.b4(n,n,n,new C.buZ(l,A.c1,n),A.aWj)
u=B.c(w+":"+v,n,n,n,n,n,n,D.fM5,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.at(new B.a4(280,280,new B.am(A.z,n,A.ab,A.t,B.a([m,B.w(B.a([u,B.c(t,n,n,n,n,n,n,D.fL_,n,n,n),A.at,B.c("Sessions done: "+o.r,n,n,n,n,n,n,A.wi,n,n,n)],s),A.l,n,A.e,A.P,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.dvh[r]
u.push(new E.e3(""+q+" min",o.d===q,new C.e9I(o,q),n,A.c1,n))}m=o.f
p=m?Ab.vD:A.fQ
m=m?"Pause":"Start"
return E.lZ(A.c1,A.fh,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.w(B.a([new E.fj(u,n,n),new E.fj(B.a([new E.fJ(p,m,new C.e9J(o),A.bf,n),new E.fJ(A.m8,"Reset",new C.e9K(o),A.c,n)],s),n,n)],s),A.l,n,A.e,A.P,0,A.p))}}
C.buZ.prototype={
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
v.san(new B.he(A.z,-1.5707963267948966,4.71238898038469,A.w,B.a([u,t,u],x.O),null,null).az(0,B.bY(s,r)))
d.cQ(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aD(d){return d.b!==this.b}}
C.Wi.prototype={
R(){return new C.bnL($,A.bH,0,B.a([],x.X),null,null)}}
C.bnL.prototype={
Z(){this.a3()
this.mo()},
mG(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.UB.h(0,p.d)
w.toString
v=A.d.eH(w,new C.dUb())
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
E.mJ("flute",D.cfQ[t]+5,1400,0.35)}p.l(new C.dUc())},
gcgV(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.Ln("Press Start",0.5)
w=D.UB.h(0,this.d)
w.toString
v=A.d.eH(w,new C.dU6())
u=A.i.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.Ln("Breathe in",0.5+0.5*A.dQ.aA(0,p))
case 1:return new B.Ln("Hold",1)
case 2:return new B.Ln("Breathe out",1-0.5*A.dQ.aA(0,p))
default:return new B.Ln("Hold",0.5)}}}return new B.Ln("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gcgV(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.fK.j(0.12+(3-u)*0.05)
n.push(B.p(q,q,A.f,q,q,new B.o(s,q,q,q,u===0?B.a([new B.aa(0,A.H,A.fK.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(B.c(p.a,q,q,q,q,q,q,A.qy,q,q,q))
n.push(B.ao(0,B.c("Breaths: "+r.w,q,q,q,q,q,q,A.kC,q,q,q),q,q,q,q,q,q))
n=B.at(new B.a4(300,340,new B.am(A.z,q,A.ab,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aQ(D.UB.geA(D.UB));w.C();){v=w.gP(w)
o.push(new E.e3(v,r.d===v,new C.dU9(r,v),q,A.fK,q))}w=r.e
v=w?A.vH:A.fQ
w=w?"Stop":"Start"
o.push(new E.fJ(v,w,new C.dUa(r),A.bf,q))
return E.lZ(A.fK,A.fh,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new E.fj(o,q,q))}}
C.aLG.prototype={}
C.WZ.prototype={
R(){return new C.bo2(new B.cB(null,x.A),B.a([],x.au),A.ax,A.c)}}
C.bo2.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aI(s,s,s,s,I.p8,s,s,s,new C.e5x(t,d),s,s,s,s,"Share",s)],r),p=B.bv(B.m(18),new B.e9(B.aA(s,B.b4(s,s,s,new C.bq6(t.e,t.x,s),A.hh),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e5y(t),new C.e5z(t),s,s,s,s,s,s,s,s,s,new C.e5A(t),s,s,s,s,!1,A.a4),t.d),A.ap),o=B.a([],r)
for(w=0;w<9;++w){v=D.d8r[w]
u=!t.w&&t.f.A(0,v)
o.push(new E.Gt(v,u,new C.e5B(t,v),!1,s))}u=t.r
return E.lZ(A.bE,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.C(A.bS,p,s),"DRAW PAD",B.w(B.a([new E.fj(o,s,s),E.ja(A.bE,""+A.i.S(u),"Brush",30,2,new C.e5C(t),u),new E.fj(B.a([new E.e3("Eraser",t.w,new C.e5D(t),A.A2,A.bE,s),new E.fJ(A.q5,"Undo",new C.e5E(t),A.c,s),new E.fJ(A.eq,"Clear",new C.e5F(t),A.c,s),new E.fJ(A.QL,"Paper",new C.e5G(t),A.c,s)],r),s,s)],r),A.l,s,A.e,A.P,0,A.p))}}
C.bq6.prototype={
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
m.ac()}r=new B.aq(A.d.gak(n).a,A.d.gak(n).b)
p.push(r)
p=m.f
if(p!=null)r.aj(p)
m.ac()
d.af(m,q)}}},
aD(d){return!0}}
C.XK.prototype={
R(){var w=x.S
return new C.aHr(B.aR(w),B.aR(w))}}
C.aHr.prototype={
Z(){this.a3()
this.avG()},
avG(){var w,v,u=this,t=x.N,s=B.bt(D.dAY,!0,t)
A.d.DU(s)
w=x.S
v=B.U(s).c
t=B.B(B.cV(s,0,B.dz(u.d,"count",w),v),t)
A.d.u(t,B.cV(s,0,B.dz(u.d,"count",w),v))
A.d.DU(t)
u.e=t
u.f.a6(0)
u.r.a6(0)
u.w=0
u.x=!1},
cgQ(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
E.mJ("bell",12+A.o.F(d,9),150,0.35)
s.l(new C.exG(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gG(0)
u=w.gak(0)
w=s.e
w===$&&B.d()
t=x.H
if(w[v]===w[u])B.bO(A.nj,new C.exH(s,v,u),t)
else{s.x=!0
B.bO(Ai.D3,new C.exI(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.d()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.c("Moves: "+r.w,q,q,q,q,q,q,A.Xa,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.ao(p,2)+" / "+o
o=x.p
p=B.w(B.a([new B.C(A.zz,B.A(B.a([u,B.c(p,q,q,q,q,q,q,B.l(q,q,w?A.aQ:A.ac,q,q,q,q,q,q,q,q,q,q,q,A.C,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.l,q,A.iA,A.h,0,q,q),q),B.E(B.iL(!0,q,q,A.y,new B.hY(v,8,8,1,q),new C.exM(r),r.e.length,A.bg,q,A.ah,!1),1)],o),A.l,q,A.e,A.h,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.dae[t]
o.push(new E.e3(s.b,r.d===s.a,new C.exN(r,s),q,A.aH,q))}o.push(new E.fJ(I.asM,"New game",new C.exO(r),A.bf,q))
return E.lZ(A.aH,A.fh,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new E.fj(o,q,q))}}
C.XV.prototype={
R(){return new C.aHP(B.a([],x.t))}}
C.aHP.prototype={
cgU(d){A.d.a6(this.d)
this.w=!0
this.b3C()},
b3C(){this.d.push(A.cV.av(4))
this.e=0
this.a0X()},
a0X(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0X=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.l(new C.eKO(t))
s=x.H
w=3
return B.b(B.bO(A.m2,null,s),$async$a0X)
case 3:r=t.d,q=B.bt(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aXf(n)
w=7
return B.b(B.bO(new B.bh(1000*Math.max(280,600-r.length*18)),null,s),$async$a0X)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.l(new C.eKP(t))
case 1:return B.h(u,v)}})
return B.i($async$a0X,v)},
aXf(d){this.l(new C.eKM(this,d))
E.mJ("marimba",D.cfP[d]+5,450,0.55)
B.bO(A.HF,new C.eKN(this),x.H)},
cgW(d){var w,v,u=this
if(!u.w||u.r)return
u.aXf(d)
w=u.d
v=u.e
if(w[v]!==d){G.dH(90,"",600,0,0.5,"saw")
u.l(new C.eKQ(u))
return}++v
u.e=v
if(v===w.length){u.l(new C.eKR(u))
B.bO(A.hy,new C.eKS(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.c("Best: "+q.x,p,p,p,p,p,p,V.aZ_,p,p,p),n=B.c(q.y,p,p,p,p,p,p,D.fVM,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aD6[v]
u=u.j(q.f===v?1:0.35)
t=new B.aP(28,28)
s=q.f===v?B.a([new B.aa(0,A.H,D.aD6[v].j(0.8),A.J,30)],w):p
r=new B.ax(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.aA(p,B.cY(p,p,p,p,A.aZ,new B.o(u,p,new B.bE(r,r,r,r),new B.bc(t,t,t,t),s,p,A.m),A.jE,p,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eKT(q,v),p,p,p,p,p,p,!1,A.a4))}o=B.at(new B.C(A.ae,B.w(B.a([o,A.aj,n,A.df,new B.fN(1,B.lf(1,l,2,12,12,p,A.e8,!1),p)],m),A.l,p,A.bb,A.h,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return E.lZ(A.bu,A.fh,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new E.fj(B.a([new E.fJ(A.fQ,n,q.gcgT(q),A.bf,p)],m),p,p))}}
C.Ye.prototype={
R(){return new C.bpk(new B.au(A.ay,$.ay()))}}
C.bpk.prototype={
azg(d){return B.o9(A.i.a5(d,2),B.ag("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eZ0(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.cA(B.aK(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eZ9()
l=B.aN(m,A.M,!1,m,!0,A.t,m,B.aO(),l,m,m,m,m,m,2,B.bC(m,m,m,m,m,m,m,m,!0,new B.b6(4,B.m(16),Ad.yI),m,m,m,m,m,m,m,m,m,m,m,new B.b6(4,B.m(16),D.b8k),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.mf,"Bill amount",!0,!0,!1,m,m,m,m,D.fT_,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.am,m,m,m,m,m,A.ei,m,m,m,1,m,m,!1,"\u2022",m,new C.eZ5(n),m,m,m,!1,m,m,!1,m,!0,m,A.ae,m,m,m,m,m,m,m,m,m,m,m,A.aXY,!0,A.a8,m,A.ao,m,m,m,m)
k=A.bf.j(0.1)
s=B.m(20)
r=B.K(A.bf.j(0.35),A.r,1)
q=x.p
s=B.co(B.a([l,A.bx,B.p(m,B.w(B.a([t.$2("Tip ("+A.i.S(n.e)+"%)","$"+n.azg(w)),t.$2("Total","$"+n.azg(v)),Aa.P_,t.$3$big("Each of "+n.f+" pays","$"+n.azg(u),!0)],q),A.l,m,A.e,A.h,0,A.p),A.f,m,m,new B.o(k,m,r,s,m,m,A.m),m,m,m,m,A.bR,m,m,m)],q),m,m,A.f4,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cUE[p]
r.push(new E.e3(""+o+"%",A.i.S(n.e)===o,new C.eZ6(n,o),m,A.bf,m))}l=n.f
return E.lZ(A.bf,A.fh,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.w(B.a([new E.fj(r,"TIP",m),E.ja(A.aH,""+l,"People",20,1,new C.eZ7(n),l),new E.fj(B.a([new E.e3("Round up",n.r,new C.eZ8(n),m,A.aQ,m)],q),m,m)],q),A.l,m,A.e,A.P,0,A.p))}}
C.XJ.prototype={
R(){var w=B.a([3,5],x.t)
return new C.boO(w,A.cV,$,A.bH,0,B.a([],x.X),null,null)}}
C.boO.prototype={
Z(){this.a3()
this.mo()},
mG(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.i.bd(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.av(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.av(6)+1)
u.f=t
E.Yg("snare",0,0.5)}u.l(new C.ewl())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.h9()
u.w=t
u.x=t?0:3.141592653589793
E.mJ("bell",24,400,0.5)}u.l(new C.ewm())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bhB(v,o.r>0,n))}u=B.aA(n,B.at(B.c_(A.fX,m,A.br,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ewe(o),n,n,n,n,n,n,!1,A.a4)}else if(m==="coin"){t=A.i.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.K(A.de,A.r,6)
s=B.a([new B.aa(0,A.H,A.aQ.j(0.4),A.J,30)],x.V)
u=B.aA(n,B.at(B.e0(A.z,B.p(A.z,B.c(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fS8,n,n,n),A.f,n,n,new B.o(n,n,v,n,s,D.eON,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ewf(o),n,n,n,n,n,n,!1,A.a4)}else{m=o.as
u=B.aA(n,B.at(B.w(B.a([B.c(m===0?"?":""+m,n,n,n,n,n,n,D.fGL,n,n,n),B.c("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kC,n,n,n)],x.p),A.l,n,A.e,A.P,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ewg(o),n,n,n,n,n,n,!1,A.a4)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.dsj[r]
v.push(new E.e3(q.b,o.d===q.a,new C.ewh(o,q),q.c,A.bj,n))}v=B.a([new E.fj(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(E.ja(A.bj,""+s,"Dice",4,1,new C.ewi(o),s))}if(o.d==="num"){s=o.z
s=E.ja(A.bj,""+s,"From",100,1,new C.ewj(o),s)
p=o.Q
A.d.u(v,B.a([s,E.ja(A.bj,""+p,"To",1000,2,new C.ewk(o),p)],m))}return E.lZ(A.bj,A.fh,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.w(v,A.l,n,A.e,A.P,0,A.p))}}
C.bhB.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cV.ai()-0.5)*0.6
else w=0
v=B.m(22)
u=B.a([new B.aa(0,A.H,A.v.j(0.4),A.cy,14)],x.V)
t=B.a([],x.p)
for(s=D.dNX.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bL(s[q],p,p,B.p(p,p,A.f,p,p,A.Ze,p,18,p,p,p,p,p,18),p))
return B.eM(A.z,w,B.p(p,new B.am(A.a0,p,A.ab,A.t,t,p),A.f,p,p,new B.o(A.c,p,p,v,u,p,A.m),p,100,p,p,A.bD,p,p,100),p)}}
C.aOS.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bC4.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bBg()}}
C.aPc.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bCa.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bBC()}}
C.aPD.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b0(){this.b8()
this.b5()
this.bC()}}
C.bCk.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bC3()}}
C.aQ5.prototype={
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
this.bCw()}}
var z=a.updateTypes(["P(ub)","~()","P(a6x)","az<~>()","P(Dp)","G(ub,G)","H(H,ub)","P(Dl)","P(a0n)","P(adE)","P(a5p)","P(o2)","Yf()","Wh()","aav()","XP()","Y3()","XQ()","P(nb)","Wo()","ahf(Z,G)","ag3(Z,G)","~(a9<@,@>)","G(Dl,Dl)","n(es)","P(ah2)","P(a2E)","P(DA)","P(ae9)","P(ag7)","P(adS)","G(G,rs)","G(G,Dp)","n(rs)","~(rs,ai<n>,G)","rs?(Dp)","XJ()","x(n,a2r)","P(acv)","~(Bj)","Yi()","~(xU,n,r,u,H)","~(n,ub)","X_()","Xt(Z)","OI(Z)","WJ(Z,bz<H>,bz<H>)","Jh(Z)","Yn()","X7()","Wi()","WZ()","XK()","XV()","Ye()","P(rs)"])
C.fUp.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+18}
C.fIU.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gG(d.e.split(". "))+"."},
$S:z+24}
C.fQK.prototype={
$1(d){var w
if(!this.a.MZ(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fQL.prototype={
$1(d){return d.x},
$S:z+0}
C.fUm.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fUn.prototype={
$1(d){var w
if(!this.a.MZ(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fUo.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.epn.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.epo.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.y(this.b,this.c))},
$S:0}
C.epp.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd3(v).Q
v.toString
w.m8(v,A.ed,A.id)}},
$S:7}
C.epA.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a6(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.epB.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.epw.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.epu.prototype={
$2(d,e){var w=this.a
w.r.push(B.cC(B.dt(0,0,0,d,0,0),new C.epv(w,this.b,e)))},
$S:1956}
C.epv.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.epx.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gXQ().amA(0,u[1],u[2],u[3])
u[4].bP(0,new C.eps(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
G.dH(700+w.e*120,"",80,0,0.25,"square")
v.l(new C.ept(w.a,v,w.f,w.r))},
$S:0}
C.eps.prototype={
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
C.ept.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.i.bd(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.epy.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gXQ().ano(t,u[1],s,u[3])
G.dH(1500,"",45,0,0.25,"tri")
v=w.b
v.l(new C.epr(w.a,v,w.e,w.f))},
$S:0}
C.epr.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.i.bd(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.epz.prototype={
$0(){G.dH(300,"",360,-1.2,0.3,"square")
var w=this.a
w.l(new C.epq(w,this.b))},
$S:0}
C.epq.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.epE.prototype={
$0(){var w=this.a
return w.l(new C.epD(w))},
$S:0}
C.epD.prototype={
$0(){return this.a.at=!0},
$S:0}
C.epF.prototype={
$0(){var w=this.a
return w.l(new C.epC(w))},
$S:0}
C.epC.prototype={
$0(){return this.a.at=!1},
$S:0}
C.epG.prototype={
$0(){var w=this.a
w.f.sb1(0,this.b)
w.Qz()},
$S:0}
C.epH.prototype={
$0(){return this.a.ZW(this.b)},
$S:0}
C.epI.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.Qz():w.b_d()},
$S:2}
C.epJ.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.Qz():w.b_d()},
$S:0}
C.eEV.prototype={
$2(d,e){return d+e},
$S:1957}
C.eFe.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.eFd(w,d))},
$S:1958}
C.eFd.prototype={
$0(){var w=B.aJ(J.t(this.b,"unlocked"))
w=w==null?null:A.i.M(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.eFf.prototype={
$0(){},
$S:0}
C.eFg.prototype={
$0(){},
$S:0}
C.eEX.prototype={
$0(){return this.a.l(new C.eEW(this.b,this.c))},
$S:0}
C.eEW.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eEM.prototype={
$1(d){return this.a.cx===d},
$S:30}
C.eEN.prototype={
$1(d){return this.a.cx=d},
$S:27}
C.eEO.prototype={
$1(d){return this.a.cy===d},
$S:30}
C.eEP.prototype={
$1(d){return this.a.cy=d},
$S:27}
C.eEQ.prototype={
$1(d){return this.a.db===d},
$S:30}
C.eER.prototype={
$1(d){return this.a.db=d},
$S:27}
C.eES.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:30}
C.eET.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.X(0,d):w.I(0,d)},
$S:27}
C.eEU.prototype={
$0(){var w=this.a
return w.l(w.gazR())},
$S:0}
C.eEK.prototype={
$1(d){return this.a.$1(!0)},
$S:66}
C.eEL.prototype={
$1(d){return this.a.$1(!1)},
$S:115}
C.eEJ.prototype={
$1(d){return this.a.$1(!1)},
$S:138}
C.eF7.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.ch=n
n=B.b4(p,p,p,new C.blv(o,p),n)
w=this.b
v=C.bEK("WORLD",w.a,w.c)
u=C.bEK("GRAVITY",B.v(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.i.S(t*100)
t=t<0.25?A.c1:A.bf
t=C.bEK("FUEL",""+s+"%",t)
s=o.r.b
r=A.i.S(s*100)
s=s>D.Eq[o.db].d?A.c1:A.c
q=x.p
s=B.a([v,u,t,C.bEK("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(C.bEK("HEIGHT",""+A.i.S(A.i.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ao(p,B.A(s,A.l,p,A.iA,A.h,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bKq(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.u4[w].a+".":"You landed on every world!"
v=B.a([new E.fJ(A.od,"Again",new C.eF2(o),A.c,p),new E.fJ(A.p0,"Rebuild",new C.eF3(o),A.aQ,p)],q)
if(o.d+1<7)v.push(new E.fJ(A.jJ,"Next world",new C.eF4(o),A.bf,p))
n.push(C.hLI("Perfect landing!",w,A.bf,v))}if(o.as==="crashed")n.push(C.hLI("Crash!",o.at,A.c1,B.a([new E.fJ(A.od,"Try again",new C.eF5(o),A.bf,p),new E.fJ(A.p0,"Rebuild",new C.eF6(o),A.aQ,p)],q)))
return new B.am(A.a0,p,A.b4,A.t,n,p)},
$S:61}
C.eF2.prototype={
$0(){var w=this.a
return w.l(w.gazR())},
$S:0}
C.eF3.prototype={
$0(){var w=this.a
return w.l(new C.eF_(w))},
$S:0}
C.eF_.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eF4.prototype={
$0(){var w=this.a
return w.l(new C.eEZ(w))},
$S:0}
C.eEZ.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.eF5.prototype={
$0(){var w=this.a
return w.l(w.gazR())},
$S:0}
C.eF6.prototype={
$0(){var w=this.a
return w.l(new C.eEY(w))},
$S:0}
C.eEY.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eF8.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.l(new C.eF1(v,w))},
$S:0}
C.eF1.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.eF9.prototype={
$1(d){return this.a.y=d},
$S:9}
C.eFa.prototype={
$1(d){return this.a.Q=d},
$S:9}
C.eFb.prototype={
$1(d){return this.a.z=d},
$S:9}
C.eFc.prototype={
$0(){var w=this.a
return w.l(new C.eF0(w))},
$S:0}
C.eF0.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dU4.prototype={
$0(){var w=0,v=B.j(x.k),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hc(B.a([C.hGs(),C.hGt()],x.D),x.K),$async$$0)
case 3:r=e
q=t.a
if(q.c==null){w=1
break}s=q.as
s.toString
s.kU(0,B.cU(J.t(r,1)))
q.l(new C.dU3(q,r))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:40}
C.dU3.prototype={
$0(){return this.a.d=x.m.a(J.t(this.b,0))},
$S:0}
C.dTF.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dTG.prototype={
$0(){return this.a.c1x(B.aV(J.t(this.b,"group")))},
$S:0}
C.dTH.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dTI.prototype={
$1(d){return A.a.aZ(A.o.fw(A.o.D(A.i.S(d*255),0,255),16),2,"0")},
$S:309}
C.dU5.prototype={
$0(){return E.Yg("kick",0,0.25)},
$S:0}
C.dTJ.prototype={
$0(){return this.a.cy=this.b},
$S:0}
C.dTK.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dTL.prototype={
$0(){return E.Yg("kick",0,0.5)},
$S:0}
C.dTM.prototype={
$0(){return G.dH(1300+this.a.RG.av(900),"",40,0,0.2,"square")},
$S:0}
C.dTO.prototype={
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
u=w}if(u.cy!=null&&!A.d.aR(u.d.e,new C.dTN(u)))u.cy=null
u.id=0},
$S:0}
C.dTN.prototype={
$1(d){var w=this.a
return d.a===w.cy&&w.aBT(d)},
$S:z+10}
C.dTC.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p4
w=u.a
v=u.c
w.R8=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p3.toLowerCase()+"."},
$S:0}
C.dTD.prototype={
$0(){var w=this.a
return w.l(w.gccv())},
$S:0}
C.dTE.prototype={
$0(){return this.a.afY(null)},
$S:0}
C.dTV.prototype={
$0(){var w=this.a.as
return w==null?null:w.fc(0,B.J(["t","shot"],x.N,x.z))},
$S:0}
C.dTW.prototype={
$0(){return this.a.cKh(this.b.a)},
$S:0}
C.dTX.prototype={
$0(){return this.a.afY(this.b)},
$S:0}
C.dTY.prototype={
$1(d){var w=this.a
return w.l(new C.dTU(w,d))},
$S:6}
C.dTU.prototype={
$0(){return this.a.k4=this.b},
$S:0}
C.dTZ.prototype={
$0(){var w=this.a
return w.l(new C.dTT(w,this.b))},
$S:0}
C.dTT.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dU_.prototype={
$0(){var w=this.a
return w.l(new C.dTS(w))},
$S:0}
C.dTS.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.dU0.prototype={
$0(){var w=this.a
return w.l(new C.dTR(w))},
$S:0}
C.dTR.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.fc(0,B.J(["t","reset"],x.N,x.z))
w.cy=null
w.db=0.5
w.dx=0.05
w.fr=1
w.fy=D.MX},
$S:0}
C.dU1.prototype={
$0(){var w=this.a
return w.l(new C.dTQ(w))},
$S:0}
C.dTQ.prototype={
$0(){var w=this.a,v=!w.p2
w.p2=v
w.p4=0
w.cy=null
if(v)w.b23()
else w.p3=null},
$S:0}
C.dU2.prototype={
$0(){var w=this.a
return w.l(new C.dTP(w))},
$S:0}
C.dTP.prototype={
$0(){var w=this.a
return w.ok=!w.ok},
$S:0}
C.c9o.prototype={
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
$S:311}
C.c9p.prototype={
$1(d){var w=new B.qK([],[]).o8(d.data,!0)
if(x.f.b(w)&&J.t(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:655}
C.fBV.prototype={
$1(d){var w=J.a1(d)
return w.h(d,0)&&w.h(d,1)},
$S:232}
C.fBW.prototype={
$1(d){var w=J.a1(d)
return w.h(d,0)||w.h(d,1)},
$S:232}
C.fBX.prototype={
$1(d){var w=J.a1(d)
return w.h(d,0)!==w.h(d,1)},
$S:232}
C.fC3.prototype={
$1(d){return!J.t(d,0)},
$S:232}
C.fC4.prototype={
$1(d){var w=J.a1(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:232}
C.fC5.prototype={
$1(d){var w=J.a1(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:232}
C.dVL.prototype={
$1(d){return this.a.awu(0)},
$S:7}
C.dVp.prototype={
$0(){var w=this.b
return this.a.cx=new B.O(w,B.iuO(),B.U(w).k("O<1,G>")).fD(0)},
$S:0}
C.dVs.prototype={
$1(d){return""+d},
$S:77}
C.dVM.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dVn.prototype={
$1(d){return this.a.awu(this.b)},
$S:7}
C.dVo.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.aAn(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mW(0,d,a1.mp(0.15,0.3))
u=a1.mW(0,d,a1.mp(0.15,0.62))
t=a1.mW(0,"and",a1.mp(0.48,0.46))
s=a1.mW(0,a0,a1.mp(0.82,0.46))
a1=t.a
w.push(new C.o2(v.a,a1,0))
w.push(new C.o2(u.a,a1,1))
w.push(new C.o2(a1,s.a,0))
break
case 1:v=a1.mW(0,d,a1.mp(0.12,0.25))
u=a1.mW(0,d,a1.mp(0.12,0.65))
r=a1.mW(0,"xor",a1.mp(0.46,0.25))
q=a1.mW(0,"and",a1.mp(0.46,0.65))
p=a1.aAm(0,a0,a1.mp(0.82,0.25),0)
o=a1.aAm(0,a0,a1.mp(0.82,0.65),0)
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
case 2:k=a1.mW(0,"clock",a1.mp(0.15,0.4))
j=a1.mW(0,"not",a1.mp(0.45,0.65))
s=a1.mW(0,a0,a1.mp(0.82,0.3))
i=a1.mW(0,"buzzer",a1.mp(0.82,0.65))
a1=k.a
w.push(new C.o2(a1,s.a,0))
n=j.a
w.push(new C.o2(a1,n,0))
w.push(new C.o2(n,i.a,0))
break
default:h=a1.mW(0,d,a1.mp(0.12,0.25))
g=a1.mW(0,d,a1.mp(0.12,0.7))
f=a1.mW(0,"nor",a1.mp(0.5,0.25))
e=a1.mW(0,"nor",a1.mp(0.5,0.7))
s=a1.mW(0,a0,a1.mp(0.86,0.25))
a1=f.a
w.push(new C.o2(g.a,a1,0))
n=e.a
w.push(new C.o2(n,a1,1))
w.push(new C.o2(h.a,n,0))
w.push(new C.o2(a1,n,1))
w.push(new C.o2(a1,s.a,0))}},
$S:0}
C.dVt.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.aAn(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.Dl(p,"switch",new B.r(0.14*q.a,r*q.b),0))}o.mW(0,w.e,o.mp(0.86,0.5))},
$S:0}
C.dVi.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dVj.prototype={
$2(d,e){return A.i.aQ(d.c.b,e.c.b)},
$S:z+23}
C.dVk.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dVl.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dVm.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.aff(this.c)
if(v.ax)C.K4("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gG(w)
v.CW=!1
if(v.ax)G.dH(140,"",250,0,0.3,"square")}},
$S:0}
C.dVu.prototype={
$0(){},
$S:0}
C.dVv.prototype={
$0(){return A.d.cJ(this.a.e,this.b)},
$S:0}
C.dVw.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dVr.prototype={
$0(){var w=this.a,v=this.b
w.d.X(0,v)
A.d.br(w.e,new C.dVq(v))
w.cy=null},
$S:0}
C.dVq.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
C.dVh.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mW(0,this.b,new B.r(w.x.a*(0.3+v.ai()*0.4),w.x.b*(0.2+v.ai()*0.6))).a},
$S:0}
C.dVF.prototype={
$0(){var w=this.a
return w.l(new C.dVE(w))},
$S:0}
C.dVE.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dVG.prototype={
$2(d,e){var w=null,v=this.a,u=new B.av(e.b,e.d)
v.x=u
return B.aA(A.c0,B.jt(B.b4(w,w,w,new C.bft(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dVz(v),w,w,w,new C.dVA(v),new C.dVB(v),new C.dVC(v),w,w,w,w,w,w,w,w,w,w,new C.dVD(v),w,w,w,!1,A.a4)},
$S:35}
C.dVD.prototype={
$1(d){return this.a.cek(d.b)},
$S:57}
C.dVB.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cnX(u)
if(t!=null){v.as=t
v.at=u
return}w=v.aBo(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aI(0,u)}},
$S:50}
C.dVC.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.r(A.i.D(w.a+u.Q.a,46,u.x.a-46),A.i.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:19}
C.dVA.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c52(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.br(v,new C.dVx(w))
u=t.as
u.toString
v.push(new C.o2(u,w.a,w.b))
B.ka()}}t.z=t.as=null},
$S:38}
C.dVx.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
C.dVz.prototype={
$1(d){return this.a.az9(d.b)},
$S:294}
C.dVH.prototype={
$0(){return this.a.bG9(this.b.a)},
$S:0}
C.dVI.prototype={
$0(){return this.a.awu(this.b.a)},
$S:0}
C.dVJ.prototype={
$0(){var w=this.a
return w.l(new C.dVy(w))},
$S:0}
C.dVy.prototype={
$0(){var w=this.a
w.aAn(0)
w.ay=null},
$S:0}
C.dVK.prototype={
$0(){return this.a.cFP(this.b)},
$S:0}
C.cZM.prototype={
$0(){var w=this,v=null,u=B.h_(v,A.cL,v,v,v,B.cW(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a8,A.cd,v,A.e4,A.ce)
u.eL()
return u},
$S:273}
C.e0V.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e0U.prototype={
$0(){return this.a.d=null},
$S:0}
C.e0X.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c70()},
$S:130}
C.e0W.prototype={
$0(){return B.a8(this.a,!1).hZ()},
$S:0}
C.fCl.prototype={
$0(){return I.aNU},
$S:z+40}
C.fCm.prototype={
$0(){return D.e3j},
$S:z+43}
C.fCn.prototype={
$0(){return D.dXZ},
$S:z+13}
C.fCo.prototype={
$0(){return D.ev3},
$S:z+14}
C.fCp.prototype={
$0(){return D.ecX},
$S:z+15}
C.fCq.prototype={
$0(){return I.aNL},
$S:z+16}
C.fCr.prototype={
$0(){return D.esQ},
$S:z+17}
C.fCs.prototype={
$0(){return I.aNT},
$S:z+12}
C.fCt.prototype={
$0(){return D.e_f},
$S:z+19}
C.fhu.prototype={
$2(d,e){return new C.ahf(e,$.bJt()[e],new C.fht(e,this.a),null)},
$S:z+20}
C.fht.prototype={
$0(){var w=this.a,v=L.aLo.h(0,$.bJt()[w].a)
$.auU=v==null?"music":v
B.a8(this.b,!1).ca(B.e7(new C.fhr(w),!1,null,x.H))},
$S:0}
C.fhr.prototype={
$1(d){return $.bJt()[this.a].e.$0()},
$S:43}
C.fhv.prototype={
$2(d,e){return new C.ag3(e,D.aDM[e],new C.fhs(this.a,e),null)},
$S:z+21}
C.fhs.prototype={
$0(){return this.a.d.$1(D.aDM[this.b])},
$S:0}
C.fha.prototype={
$0(){return this.a.as=!0},
$S:0}
C.fh9.prototype={
$0(){return this.a.as=!1},
$S:0}
C.fh_.prototype={
$0(){var w=this.a
w.ch=0
w.as=!1},
$S:0}
C.fh0.prototype={
$1(d){return this.bqA(d)},
bqA(d){var w=0,v=B.j(x.I),u,t=this,s,r,q
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
r.gr2().sp(0,d/t.b)
r.gK_().sp(0,0.5)
w=3
return B.b($.aS.glL(),$async$$1)
case 3:r=$.aS.bk$.x.h(0,r.f)
s=r==null?null:r.gbg()
if(!(s instanceof B.ox))throw B.Y(B.bd("closed"))
q=C
w=4
return B.b(s.lx(t.c),$async$$1)
case 4:u=q.h_S(f,t.d,t.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:754}
C.fh1.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.fgZ(w,d))},
$S:6}
C.fgZ.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.fh2.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.fh8.prototype={
$1(d){var w=this
return new B.eb(new C.fh7(w.a,w.b,w.c,w.d),null)},
$S:20}
C.fh7.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=x.w,a2=B.aF(a3,a0,a1).w
a1=B.aF(a3,a0,a1).w
w=x.p
v=B.a([D.h2y,A.at,D.h9q,A.af],w)
for(u=d.d,t=d.a,s=x.G,r=d.b,q=d.c,p=0;p<3;p=o){o=p+1
n=B.c("SLAB "+o,a0,a0,a0,a0,a0,a0,D.fSs,a0,a0,a0)
m=new B.aP(12,12)
l=new B.aP(12,12)
l=B.a([new B.bu(1,A.b6,B.aN(a0,A.M,!1,a0,!0,A.t,a0,B.aO(),r[p],a0,a0,a0,a0,a0,2,new B.ef(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Title",a0,A.FN,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.bc(m,m,m,m),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.am,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ae,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jQ,!0,A.a8,a0,A.ao,a0,a0,a0,a0),a0),A.aa,new B.bu(2,A.b6,B.aN(a0,A.M,!1,a0,!0,A.t,a0,B.aO(),q[p],a0,a0,a0,a0,a0,2,new B.ef(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Small line",a0,A.FN,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.bc(l,l,l,l),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.am,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ae,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jQ,!0,A.a8,a0,A.ao,a0,a0,a0,a0),a0)],w)
m=B.a([],w)
for(k=0;k<30;++k){j=D.dIP[k]
i=new B.aP(12,12)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.B(t.a.c.d,s)
t.w=h}g=A.d.gG(h).j(0.3)}else g=A.c.j(0.06)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.B(t.a.c.d,s)
t.w=h}f=A.d.gG(h)}else f=A.by
e=new B.ax(f,u[p].A(0,j)?1.8:1,A.r,-1)
m.push(B.aA(a0,B.p(a0,B.V(j,u[p].A(0,j)?A.c:A.aR,a0,a0,a0,22),A.f,a0,a0,new B.o(g,a0,new B.bE(e,e,e,e),new B.bc(i,i,i,i),a0,a0,A.m),a0,a0,a0,A.fa,a0,a0,a0,42),A.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.fh5(a4,p,u,j),a0,a0,a0,a0,a0,a0,!1,A.a4))}A.d.u(v,B.a([n,A.aj,new B.c0(A.aK,A.e,A.h,A.l,a0,A.p,a0,0,l,a0),A.N,new B.a4(a0,44,B.co(m,a0,a0,a0,a0,a0,A.aK,!1),a0),A.aB],w))}v.push(B.bH(A.BI,a0,new C.fh6(t,r,q,u,a3),a0))
return new B.C(new B.R(0,0,0,a2.f.d),B.bo(!0,new B.cP(new B.aX(0,1/0,0,a1.a.b*0.86),B.co(v,a0,a0,A.xb,a0,a0,A.ah,!0),a0),!0,!1,A.ag,!0,!0),a0)},
$S:103}
C.fh5.prototype={
$0(){var w=this
return w.a.$1(new C.fh4(w.b,w.c,w.d))},
$S:0}
C.fh4.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.fh6.prototype={
$0(){var w=this,v=w.a
v.l(new C.fh3(v,w.b,w.c,w.d))
B.a8(w.e,!1).N(null)},
$S:0}
C.fh3.prototype={
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
C.fhi.prototype={
$0(){var w=this.a
return w.l(new C.fhh(w))},
$S:0}
C.fhh.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.fhj.prototype={
$0(){return E.uT(this.b,this.a.f,"scene")},
$S:0}
C.fhk.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ap(A.d.gG(u),A.d.gak(u),0.4)
u.toString
w=this.a.gK_().x
w===$&&B.d()
return new B.bP(new B.o(v,v,v,v,v,new B.bU(D.b5M,0.9,A.w,v,0,B.a([u.j(0.06+0.03*w),A.c7],x.O),v,v),A.m),A.bm,v,v)},
$S:346}
C.fhl.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.at(new B.d6(A.dn,A.z,A.f,B.c9(new B.hB(B.a([u.gr2(),u.gK_()],x.dS)),new C.fhg(u,this.b,v),w),w),w,w,w)},
$S:235}
C.fhg.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gr2().x
r===$&&B.d()
w=r<0.9?1:1-C.bvX(r,0.9,0.98)
v=s.gK_().x
v===$&&B.d()
u=A.dQ.aA(0,v)
switch(s.gaAo().a){case 0:s=s.bFj(t.b,r,u,t.c)
break
case 1:s=s.bWz(t.b,r,u,t.c)
break
case 2:s=s.cKL(t.b,r,u,t.c)
break
case 3:s=s.bIj(t.b,r,u,t.c)
break
case 4:s=s.bLI(t.b,r,u,t.c)
break
case 5:s=s.cel(t.b,r,u,t.c)
break
default:s=null}return B.d2(s,w)},
$S:158}
C.fhm.prototype={
$2(d,e){var w=B.aci(this.b),v=this.c.d,u=B.ap(A.d.gG(v),A.d.gak(v),0.4)
u.toString
v=B.ap(A.d.gG(v),A.d.gak(v),0.4)
v.toString
v=w.cTO(u,A.by,v,3.5)
u=this.a
w=u.gr2().x
w===$&&B.d()
return B.ZH(B.lg(null,null,null,1,0,new C.fhf(u),A.i.D(w,0,1)),v)},
$S:1962}
C.fhf.prototype={
$1(d){var w=this.a
w.gr2().sp(0,d)
if(w.as)w.l(new C.fhb(w))},
$S:6}
C.fhb.prototype={
$0(){return this.a.as=!1},
$S:0}
C.fhn.prototype={
$0(){var w=this.a
w.gr2().sp(0,0)
w.a0q()},
$S:0}
C.fho.prototype={
$1(d){var w=this.a
w.l(new C.fhe(w,d))
if(w.as)w.a0q()},
$S:6}
C.fhe.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.fhp.prototype={
$0(){var w=this.a
w.l(new C.fhd(w,this.b))
w.gr2().sp(0,0)
if(w.as)w.a0q()},
$S:0}
C.fhd.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.fhq.prototype={
$0(){var w=this.a
return w.l(new C.fhc(w,this.b))},
$S:0}
C.fhc.prototype={
$0(){var w=B.B(this.b,x.G)
return this.a.w=w},
$S:0}
C.fgX.prototype={
$2(d,e){return A.i.aQ(d.a,e.a)},
$S:1963}
C.fgY.prototype={
$1(d){return d.b},
$S:1964}
C.dvh.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.dvi.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.dve.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.dvf.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dvg.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dvj.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dvk.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dvl.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dvm.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.dvn.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.dvo.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.dvp.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.dvq.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.dvr.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.eEf.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eE4.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.eE6.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.ga_(e.b),97)},
$S:z+31}
C.eE7.prototype={
$2(d,e){return d+A.o.F(A.a.ga_(e.a),31)+A.o.F(A.a.ga_(e.b),17)},
$S:z+32}
C.eEa.prototype={
$1(d){var w=D.nt.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+33}
C.eEb.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.U(q),o=x.dg,n=B.B(new B.ee(new B.cQ(new B.X(q,new C.eEc(d),p.k("X<1>")),new C.eEd(r),p.k("cQ<1,rs?>")),o),o.k("M.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aL(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.I)(n),++v){u=n[v]
if(w.length>=6)return
t=B.B(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.eEc.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eEd.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.eE8.prototype={
$1(d){return D.nt.h(0,d.b).c===D.yC},
$S:z+55}
C.eE9.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eEF.prototype={
$1(d){var w=this.a,v=d.a,u=A.i.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.vV(0,u)
w.a8B(A.o.ao(v,1000))},
$S:7}
C.eEe.prototype={
$0(){},
$S:0}
C.eE0.prototype={
$0(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aB(),$async$$0)
case 6:e.aB("String","ngmy_core_reaction_lab_v1",s.a.d.al())
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
C.eEh.prototype={
$1(d){var w=null,v=this.a.b
return B.bo(!0,B.w(B.a([A.N,B.dP(!1,w,w,w,!0,w,w,w,!0,w,w,B.V(D.nt.h(0,v).b,D.nt.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.hla,w,B.c(D.nt.h(0,v).a,w,w,w,w,w,w,A.hj,w,w,w),w,w,w),B.dP(!1,w,w,w,!0,w,w,w,!0,w,w,A1.aup,w,w,w,w,new C.eEg(d),!1,w,w,w,w,w,w,w,D.hci,w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!0)},
$S:29}
C.eEg.prototype={
$0(){B.a8(this.a,!1).N(!0)
return null},
$S:0}
C.eEj.prototype={
$1(d){var w,v,u,t=null,s=B.aF(d,t,x.w).w,r=B.a([D.eH7],x.p)
for(w=0;w<6;++w){v=D.aE8[w]
u=B.c(v.a,t,t,t,t,t,t,A.hj,t,t,t)
r.push(B.dP(!1,t,t,t,!0,t,t,t,!0,t,t,D.c7E,t,t,t,t,new C.eEi(d,v),!1,t,t,t,t,t,B.c(v.b,t,t,t,t,t,t,A.mf,t,t,t),t,u,t,t,t))}return B.bo(!0,new B.cP(new B.aX(0,1/0,0,s.a.b*0.7),B.co(r,t,t,D.bLT,t,t,A.ah,!0),t),!0,!1,A.ag,!0,!0)},
$S:29}
C.eEi.prototype={
$0(){B.a8(this.a,!1).N(this.b)
return null},
$S:0}
C.eE3.prototype={
$1(d){var w=null
return B.ek(B.a([B.bJ(!1,A.dx,w,w,!0,w,w,w,new C.eE1(d),w,w),B.bJ(!1,A.FT,w,w,!0,w,w,w,new C.eE2(d),w,w)],x.p),w,w,L.ms,D.h9D,w,w,w,w,D.hcC,w)},
$S:18}
C.eE1.prototype={
$0(){B.a8(this.a,!1).N(!1)
return null},
$S:0}
C.eE2.prototype={
$0(){B.a8(this.a,!1).N(!0)
return null},
$S:0}
C.eED.prototype={
$0(){var w=this.a
return w.l(new C.eEC(w))},
$S:0}
C.eEC.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eEE.prototype={
$2(d,e){var w,v,u,t=null,s=new B.av(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.nF(new C.eEt(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.bgJ:t
v=B.a([B.b4(u,t,t,new C.blt(w,v,new C.eEu(r),new C.eEv(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ao(t,new B.dp(!0,B.c9(w,new C.eEw(r),t),t),t,t,10,10,6,t))
if(r.ax)v.push(r.bNs())
return B.aA(A.c0,B.jt(new B.am(A.a0,t,A.b4,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.eEx(r),t,r.gcpi(),t,new C.eEy(r),new C.eEz(r),new C.eEA(r),t,t,t,t,t,t,t,t,t,t,new C.eEB(r),t,t,t,!1,A.a4)},
$S:35}
C.eEt.prototype={
$0(){return this.a.aeg(this.b)},
$S:0}
C.eEB.prototype={
$1(d){return this.a.cIn(d.b)},
$S:57}
C.eEz.prototype={
$1(d){return this.a.cpj(d.b)},
$S:50}
C.eEA.prototype={
$1(d){return this.a.cpk(d.b)},
$S:19}
C.eEy.prototype={
$1(d){return this.a.b5P()},
$S:38}
C.eEx.prototype={
$1(d){return this.a.af_(d.b)},
$S:294}
C.eEu.prototype={
$0(){return this.a.z},
$S:673}
C.eEv.prototype={
$0(){return this.a.Q},
$S:755}
C.eEw.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bRQ()
if(p.length===0)return A.bK
w=A.v.j(0.55)
v=B.m(14)
u=B.K(A.by,A.r,1)
t=B.a([D.h7_,A.cQ],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.I)(p),++r)t.push(B.c(p[r],q,2,A.a2,q,q,q,A.aYW,q,q,q))
return B.p(q,B.w(t,A.B,q,A.e,A.P,0,A.p),A.f,q,q,new B.o(w,q,u,v,q,q,A.m),q,q,q,q,A.he,q,q,q)},
$S:67}
C.eE5.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.m(12),t=B.K(e.j(0.6),A.r,1),s=x.p
return new B.C(A.dU,B.A(B.a([B.p(w,B.V(d,e,w,w,w,21),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,38,w,w,w,w,w,38),A.bc,B.E(B.w(B.a([B.c(f,w,w,w,w,w,w,Ak.X5,w,w,w),A.bs,B.c(g,w,w,w,w,w,w,F.ade,w,w,w)],s),A.B,w,A.e,A.h,0,A.p),1)],s),A.B,w,A.e,A.h,0,w,w),w)},
$S:1966}
C.eEp.prototype={
$0(){var w=this.a.c
w.toString
return B.a8(w,!1).hZ()},
$S:0}
C.eEq.prototype={
$0(){var w=this.a
return w.l(new C.eEo(w))},
$S:0}
C.eEo.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eEr.prototype={
$0(){var w=this.a
return w.l(new C.eEn(w))},
$S:0}
C.eEn.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.eEs.prototype={
$0(){var w=this.a
return w.l(new C.eEm(w))},
$S:0}
C.eEm.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eEl.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.nt.gdT(D.nt),w=w.gae(w);w.C();){v=w.gP(w)
if(v.b.c===e)p.push(v.a)}w=B.c(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.I)(p),++r)u.push(s.cD2(p[r]))
return new B.C(A.a1O,B.w(B.a([new B.C(A.apk,w,q),B.A(u,A.l,q,A.e,A.h,0,q,q)],v),A.B,q,A.e,A.h,0,A.p),q)},
$S:z+37}
C.eEk.prototype={
$0(){return this.a.ces(this.b)},
$S:0}
C.dvd.prototype={
$0(){var w=this,v=null,u=B.h_(v,A.cL,v,v,v,B.cW(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a8,A.cd,v,A.e4,A.ce)
u.eL()
return u},
$S:273}
C.bSD.prototype={
$1(d){return d.r<=0},
$S:z+38}
C.bSO.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bSJ.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bSP.prototype={
$1(d){return this.a.MZ(d)&&!d.x},
$S:z+0}
C.bSQ.prototype={
$2(d,e){return Math.max(d,this.a.aEi(e))},
$S:z+6}
C.bSS.prototype={
$2(d,e){var w=this.a
return w.c_(0,d.a+"."+e,new C.bST(w))},
$S:z+5}
C.bST.prototype={
$0(){return this.a.a},
$S:91}
C.bSR.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:69}
C.bSU.prototype={
$2(d,e){var w=this.a
return w.c_(0,this.b.$1(this.c.$2(d,e)),new C.bSV(w))},
$S:z+5}
C.bSV.prototype={
$0(){return this.a.a},
$S:91}
C.bSF.prototype={
$2(d,e){var w=this.a
return w.c_(0,d.a+"."+e,new C.bSG(w))},
$S:z+5}
C.bSG.prototype={
$0(){return this.a.a},
$S:91}
C.bSE.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:69}
C.bSH.prototype={
$2(d,e){var w=this.a
return w.c_(0,this.b.$1(this.c.$2(d,e)),new C.bSI(w))},
$S:z+5}
C.bSI.prototype={
$0(){return this.a.a},
$S:91}
C.bSC.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bSW.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bSK.prototype={
$1(d){return d!==this.b&&this.a.aKG(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bSN.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bSM.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bSL.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bMY.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bMZ.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.bMX.prototype={
$2(d,e){return new B.a6(A.aV,A.b1,A.w,e,D.dir,null).az(0,d)},
$S:1967}
C.cwZ.prototype={
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
C.h6q.prototype={
$1(d){var w
$.T()
w=B.L()
w.r=d.gp(0)
return w},
$S:1968}
C.h6s.prototype={
$2(d,e){var w
$.T()
w=B.L()
w.b=A.ad
w.c=e
w.r=d.gp(0)
w.d=A.bG
return w},
$S:1969}
C.h6t.prototype={
$5(d,e,f,g,h){return B.bx(new B.a5(d,e,d+f,e+g),new B.aP(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1970}
C.h6r.prototype={
$3(d,e,f){var w
$.T()
w=B.L()
w.san(new B.a6(A.aV,A.b1,A.w,B.a([e,f],x.O),null,null).az(0,d))
return w},
$S:1971}
C.bMA.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.bMB.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bMz(w))},
$S:0}
C.bMz.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bMC.prototype={
$0(){return B.a([],x.F)},
$S:1972}
C.bMD.prototype={
$1(d){return this.a.bx(d).a>15e5},
$S:454}
C.bME.prototype={
$0(){var w,v,u
J.bJD(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.rB(v))if(C.hr9(v.b))w.b5i(v)
else w.a1E(v)
else{u=w.a.c.bik(v)
w.agz(u==null?"The "+$.qU().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bMy.prototype={
$1(d){return new B.eb(new C.bMv(this.a,this.b),null)},
$S:20}
C.bMv.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p=null,o=this.b,n=new C.bMw(this.a,o,a3),m=$.qU(),l=o.b,k=m.h(0,l).d,j=A.i.S(o.ch/1.04),i=new C.bMx(o,n,k),h=B.m(26),g=B.K(k.j(0.55),A.r,1.4),f=x.V,e=B.a([new B.aa(0,A.H,k.j(0.25),A.J,26)],f),d=B.p(p,p,A.f,p,p,new B.o(A.aT,p,p,B.m(3),p,p,A.m),p,4,p,p,p,p,p,42),a0=k.j(0.2),a1=B.K(k,A.r,1)
a1=B.p(p,B.at(B.c(m.h(0,l).c,p,p,p,p,p,p,A.qw,p,p,p),p,p,p),A.f,p,p,new B.o(a0,p,a1,p,p,p,A.a6),p,42,p,p,p,p,p,42)
a0=x.p
w=B.E(B.w(B.a([B.c(m.h(0,l).b,p,1,A.a2,p,p,p,A.js,p,p,p),D.h6O],a0),A.B,p,A.e,A.h,0,A.p),1)
v=k.j(0.2)
u=B.m(14)
t=B.K(k,A.r,1)
u=B.A(B.a([a1,A.bc,w,B.p(p,B.c(""+A.i.S(o.ch*100)+"%",p,p,p,p,p,p,B.l(p,p,k,p,p,p,p,p,p,p,p,15,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(v,p,t,u,p,p,A.m),p,p,p,p,A.lD,p,p,p)],a0),A.l,p,A.e,A.h,0,p,p)
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
w=B.aI(p,p,p,p,B.V(A.asD,k,p,p,p,30),p,p,p,new C.bMr(n,o),p,p,p,p,p,p)
t=B.aci(a2).bhN(k,A.by,k.j(0.2),A.c,8)
o=B.A(B.a([w,B.E(B.ZH(B.lg(p,p,p,5.2,1,n,A.i.D(o.ch,1,5.2)),t),1),B.aI(p,p,p,p,B.V(A.a4f,k,p,p,p,30),p,p,p,new C.bMs(n,o),p,p,p,p,p,p)],a0),A.l,p,A.e,A.h,0,p,p)
return B.bo(!0,B.p(p,B.w(B.a([d,A.af,u,A.aB,v,A.af,i,A.at,o,B.A(B.a([B.E(B.c(j<=1?"Normal size":"About "+j+" times the normal size",p,p,p,p,p,p,N.hI,p,p,p),1),B.bJ(!1,A6.b__,p,p,!0,p,p,p,new C.bMt(a2),p,B.fu(p,p,k.j(0.25),p,p,p,p,p,p,p,p,A.c,p,p,p,p,p,A.tI,p,p,p,p,p,p,p,p))],a0),A.l,p,A.e,A.h,0,p,p)],a0),A.l,p,A.e,A.P,0,A.p),A.f,p,p,new B.o(p,p,g,h,e,D.cf9,A.m),p,p,p,A.zs,D.bIq,p,p,p),!0,!1,A.ag,!0,!0)},
$S:89}
C.bMw.prototype={
$1(d){var w=this.a
w.l(new C.bMp(this.b,d))
this.c.$1(new C.bMq())
w.a.toString},
$S:6}
C.bMp.prototype={
$0(){return this.a.ch=A.i.D(this.b,1,5.2)},
$S:0}
C.bMq.prototype={
$0(){},
$S:0}
C.bMx.prototype={
$2(d,e){var w=this,v=null,u=Math.abs(w.a.ch-e)<0.05,t=u?w.c.j(0.28):A.c.j(0.06),s=B.m(14),r=u?w.c:A.by
r=B.K(r,A.r,u?2:1)
return B.E(B.aA(v,B.cY(v,B.at(new B.d6(A.dn,A.z,A.f,B.c(d,v,v,v,v,v,v,B.l(v,v,u?w.c:A.ac,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),v,v,v),v,v,A.aZ,new B.o(t,v,r,s,v,v,A.m),A.hn,v,v,v,A.jl,A.rb,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.bMu(w.b,e),v,v,v,v,v,v,!1,A.a4),1)},
$S:696}
C.bMu.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bMr.prototype={
$0(){return this.a.$1(this.b.ch-0.4)},
$S:0}
C.bMs.prototype={
$0(){return this.a.$1(this.b.ch+0.4)},
$S:0}
C.bMt.prototype={
$0(){B.a8(this.a,!1).N(null)
return null},
$S:0}
C.bMU.prototype={
$2(d,e){var w
if(d==="short"){G.dH(1800,"",120,0,0.55,"noise")
G.dH(200,"",160,2.2,0.4,"saw")
B.fW()
w=this.a
if(w.c!=null)w.agz("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){G.dH(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.agz("\u26a0 Overloaded! The "+$.qU().h(0,e.b).b+" can only give about "+A.i.a5(w.a.c.AC(e),2)+" amps but your gadgets are asking for "+A.i.a5(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.agz("Burnt out! "+e.ay)
G.dH(140,"",320,0,0.6,"noise")
G.dH(900,"",160,1.5,0.35,"square")}},
$S:z+42}
C.bMV.prototype={
$0(){},
$S:0}
C.bM_.prototype={
$0(){},
$S:0}
C.bMW.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bMT.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.at=n
w=o.a.c
v=o.d
u=o.y
t=o.z
s=o.x
r=this.b
q=x.p
n=B.a([B.aA(A.c0,new B.e9(B.b4(p,p,p,new C.ale(w,v,u,t,s,r==null?A.jM:r,p),n),p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bMN(o),new C.bMO(o),new C.bMP(o),p,p,p,p,p,p,p,p,p,p,new C.bMQ(o),p,p,p,!1,A.a4)],q)
if(o.a.c.a.length===0)n.push(D.bg0)
w=o.ay
if(w!=null){v=B.m(14)
u=B.K(A.cW,A.r,1)
n.push(B.ao(p,B.aA(p,B.p(p,B.A(B.a([D.fXK,B.E(B.c(w,p,p,p,p,p,p,D.fPc,p,p,p),1)],q),A.B,p,A.e,A.h,0,p,p),A.f,p,p,new B.o(D.bm7,p,u,v,p,p,A.m),p,p,p,p,A.o5,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bMR(o),p,p,p,p,p,p,!1,A.a4),p,p,10,10,8,p))}if(o.x!=null){o=B.A(B.a([D.bO6,new E.fJ(A.DG,"Cut wire",new C.bMS(o),A.c1,p)],q),A.l,p,A.e,A.h,0,p,p)
w=B.m(18)
n.push(B.ao(8,B.p(p,o,A.f,p,p,new B.o(F.ZM,p,B.K(A.by,A.r,1),w,p,p,A.m),p,p,p,p,F.anY,p,p,p),p,p,12,12,p,p))}else{w=o.e
if(w!=null&&A.d.q(o.a.c.a,w)){w=o.e
w.toString
n.push(B.ao(8,o.cpS(w),p,p,10,10,p,p))}}return B.jt(new B.am(A.a0,p,A.b4,A.t,n,p),A.t,p)},
$S:290}
C.bMO.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.bcu(s)
if(r!=null){t.l(new C.bML(t,r,d))
return}w=t.b5Z(s)
if(w!=null){t.Q=w
v=w.c
u=t.at
t.as=new B.r(v*u.a,w.d*u.b).aI(0,s)
t.l(new C.bMM(t,w))}},
$S:50}
C.bML.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c.b},
$S:0}
C.bMM.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bMP.prototype={
$1(d){var w=this.a
if(w.y!=null)w.l(new C.bMJ(w,d))
else if(w.Q!=null)w.l(new C.bMK(w,d.b.a7(0,w.as)))},
$S:19}
C.bMJ.prototype={
$0(){return this.a.z=this.b.b},
$S:0}
C.bMK.prototype={
$0(){var w,v=this.a,u=v.Q
u.toString
w=this.b
u.c=A.i.D(w.a/v.at.a,0.14,0.86)
u=v.Q
u.toString
u.d=A.i.D(w.b/v.at.b,0.08,0.92)},
$S:0}
C.bMN.prototype={
$1(d){var w,v,u,t=this.a
if(t.y!=null&&t.z!=null){w=t.z
w.toString
v=t.bcu(w)
if(v!=null&&v.a!==t.y.a){w=t.a.c
u=t.y
if(w.ano(u.a,u.b,v.a,v.b)!=null)G.dH(1500,"",40,0,0.22,"square")}}t.Q=t.z=t.y=null
t.agx()},
$S:38}
C.bMQ.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.b5Z(u)
if(t!=null){v.l(new C.bMG(v,t))
if(D.mN.am(0,t.b))v.cAQ(t)
w=new B.W(Date.now(),0,!1)
if(v.r===t&&w.bx(v.w).a<38e4){v.l(new C.bMH(v,t))
v.r=null}else{v.r=t
v.w=w}v.a.toString
return}v.l(new C.bMI(v,v.cO2(u)))},
$S:57}
C.bMG.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.x=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
G.dH(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
G.dH(200,"",70,0,0.2,"saw")}},
$S:0}
C.bMH.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.bMI.prototype={
$0(){var w=this.a
w.x=this.b
w.e=w.d=null},
$S:0}
C.bMR.prototype={
$0(){var w=this.a
return w.l(new C.bMF(w))},
$S:0}
C.bMF.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bMS.prototype={
$0(){var w=this.a
A.d.X(w.a.c.b,w.x)
w.x=null
G.dH(300,"",50,0,0.35,"noise")
w.agx()},
$S:0}
C.bM0.prototype={
$0(){return this.a.buU(this.b)},
$S:0}
C.bMm.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.A(B.a([B.c(d,w,w,w,w,w,w,D.fJ5,w,w,w),B.E(B.lg(this.b.d,w,w,g,h,new C.bMo(this.a,f),A.i.D(e,h,g)),1)],x.p),A.l,w,A.e,A.h,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1973}
C.bMo.prototype={
$1(d){var w=this.a
w.l(new C.bMn(this.b,d))
w.a.toString},
$S:6}
C.bMn.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bMl.prototype={
$2(d,e){var w=null,v=A.c.j(0.06),u=B.m(10)
return B.E(B.p(w,B.w(B.a([B.c(d,w,w,w,w,w,w,A.ad4,w,w,w),B.c(e,w,w,w,w,w,w,D.fLY,w,w,w)],x.p),A.l,w,A.e,A.h,0,A.p),A.f,w,w,new B.o(v,w,w,u,w,w,A.m),w,w,w,w,A.vi,w,w,w),1)},
$S:112}
C.bM7.prototype={
$0(){var w=this.a
return w.l(new C.bM6(w))},
$S:0}
C.bM6.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.bM8.prototype={
$0(){var w=this.a
w.a.c.X(0,this.b)
w.e=w.d=null
G.dH(260,"",70,0,0.35,"noise")
w.agx()},
$S:0}
C.bM9.prototype={
$0(){var w=this.a
return w.l(new C.bM5(w))},
$S:0}
C.bM5.prototype={
$0(){return this.a.e=null},
$S:0}
C.bMd.prototype={
$0(){this.a.l(new C.bM4(this.b,this.c))
G.dH(900,"",40,0,0.3,"noise")},
$S:0}
C.bM4.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bMe.prototype={
$0(){return this.a.b5i(this.b)},
$S:0}
C.bMf.prototype={
$0(){return this.a.a1E(this.b)},
$S:0}
C.bMg.prototype={
$0(){return this.a.a3k(this.b)},
$S:0}
C.bMh.prototype={
$0(){var w=this.a
w.l(new C.bM3(this.b,this.c))
w.a.toString},
$S:0}
C.bM3.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bMi.prototype={
$0(){var w=this.a
w.l(new C.bM2(this.b,this.c))
w.a.toString},
$S:0}
C.bM2.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bMj.prototype={
$0(){var w=this.a
w.l(new C.bM1(this.b,this.c))
w.a.toString},
$S:0}
C.bM1.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bMk.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bMa.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bMb.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bMc.prototype={
$1(d){return this.a.f=d},
$S:6}
C.fC6.prototype={
$1(d){return d.aKh("bulb")},
$S:z+2}
C.fC7.prototype={
$1(d){return d.qk(0,"switch")&&d.aKh("bulb")},
$S:z+2}
C.fC8.prototype={
$1(d){return A.d.aR(d.a,new C.fBU())},
$S:z+2}
C.fBU.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.fC9.prototype={
$1(d){return d.qk(0,"resistor")&&A.d.aR(d.a,new C.fBT())},
$S:z+2}
C.fBT.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fCa.prototype={
$1(d){return!d.qk(0,"battery")&&d.aKh("bulb")},
$S:z+2}
C.fBY.prototype={
$1(d){return A.d.aR(d.a,new C.fBS())},
$S:z+2}
C.fBS.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fBZ.prototype={
$1(d){return A.d.aR(d.a,new C.fBR())},
$S:z+2}
C.fBR.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fC_.prototype={
$1(d){return A.d.aR(d.a,new C.fBQ())},
$S:z+2}
C.fBQ.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fC0.prototype={
$1(d){var w=d.a
return A.d.aR(w,new C.fBO())&&A.d.aR(w,new C.fBP())&&d.qk(0,"buck")},
$S:z+2}
C.fBO.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fBP.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fC1.prototype={
$1(d){var w=d.a
return A.d.aR(w,new C.fBM())&&A.d.aR(w,new C.fBN())},
$S:z+2}
C.fBM.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fBN.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fC2.prototype={
$1(d){return A.d.aR(d.a,new C.fBL())},
$S:z+2}
C.fBL.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.e62.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a6(0)
w.u(0,v.b)},
$S:0}
C.e6b.prototype={
$1(d){var w=this.a.d
return w.aKG(d)&&w.rB(d)},
$S:z+0}
C.e6c.prototype={
$1(d){return d.x},
$S:z+0}
C.e6d.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.e6e.prototype={
$0(){},
$S:0}
C.e61.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.m(22),o=x.p,n=B.a([D.heE,A.at,D.fZC,A.S],o)
for(w=this.a,v=0;v<19;++v){u=D.Ts[v]
t=A.c.j(0.06)
s=new B.aP(14,14)
r=new B.ax(A.by,1,A.r,-1)
n.push(B.aA(q,B.p(q,B.w(B.a([B.c(u.a,q,q,q,q,q,q,A.iW,q,q,q),A.bs,B.c(u.b,q,3,A.a2,q,q,q,D.fQ_,q,q,q)],o),A.B,q,A.e,A.h,0,A.p),A.f,q,q,new B.o(t,q,new B.bE(r,r,r,r),new B.bc(s,s,s,s),q,q,A.m),q,q,q,A.cB,A.bg,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.e60(w,d,u),q,q,q,q,q,q,!1,A.a4))}return B.ez(q,F.ng,new B.C(A.bR,new B.a4(340,q,B.co(n,q,q,q,q,q,A.ah,!0),q),q),q,q,q,q,q,A.da,q,new B.b9(p,A.a1),q)},
$S:46}
C.e60.prototype={
$0(){B.a8(this.b,!1).N(null)
var w=this.a
w.l(new C.e6_(w,this.c))
G.dH(800,"",120,-0.5,0.3,"square")},
$S:0}
C.e6_.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bnu()},
$S:0}
C.e5Y.prototype={
$1(d){return new C.Xt(this.a.d,null)},
$S:z+44}
C.e5Z.prototype={
$0(){},
$S:0}
C.e6a.prototype={
$1(d){return new B.eb(new C.e69(this.a),null)},
$S:20}
C.e69.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.aki(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.q(0,k),f=g?A.bf:A.aH
k=B.aF(d,m,x.w).w
w=l.r
v=x.p
u=B.a([B.A(B.a([D.hbM,A.aX,B.c(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.C,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.l,m,A.e,A.h,0,m,m),A.N,B.bv(B.m(4),B.jH(A.by,m,m,5,m,w.a/11,new B.la(f,x.c)),A.ap),A.af],v)
if(h)u.push(D.h1V)
else{h=f.j(0.1)
t=B.m(14)
s=B.K(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.c(r+" Now: "+i.a,m,m,m,m,m,m,Am.LO,m,m,m)
q=B.c(g?"Well done! You did it.":i.b,m,m,m,m,m,m,A_.FO,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.p(m,B.w(B.a([r,A.at,q,new B.bL(A.a9,m,m,B.bJ(!1,B.c(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.C,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.e67(l,e),m,m),m)],v),A.B,m,A.e,A.h,0,A.p),A.f,m,m,new B.o(h,m,s,t,m,m,A.m),m,m,m,m,A.bg,m,m,m))}u.push(A.S)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aP(12,12)
n=new B.ax(o===l.f?f.j(0.6):A.dz,1,A.r,-1)
if(w.q(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
s=B.c(s,m,m,m,m,m,m,A.add,m,m,m)
r=j[o]
q=w.q(0,o)?A.aF:A.c
u.push(B.aA(m,B.p(m,new B.c0(A.aK,A.e,A.h,A.l,m,A.p,m,0,B.a([s,A.ar,new B.bu(1,A.b6,B.c(r.a,m,m,m,m,m,m,new B.F(!0,q,m,m,m,m,13,A.C,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],v),m),A.f,m,m,new B.o(h,m,new B.bE(n,n,n,n),new B.bc(t,t,t,t),m,m,A.m),m,m,m,A.eB,A.o5,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.e68(l,o,e),m,m,m,m,m,m,!1,A.a4))}return B.bo(!0,new B.cP(new B.aX(0,1/0,0,k.a.b*0.75),B.co(u,m,m,A.xb,m,m,A.ah,!0),m),!0,!1,A.ag,!0,!0)},
$S:89}
C.e67.prototype={
$0(){var w=this.a
w.l(new C.e65(w))
this.b.$1(new C.e66())
w.FY()},
$S:0}
C.e65.prototype={
$0(){var w=this.a
$.aki()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.e66.prototype={
$0(){},
$S:0}
C.e68.prototype={
$0(){var w=this.a
w.l(new C.e63(w,this.b))
this.c.$1(new C.e64())
w.FY()},
$S:0}
C.e63.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e64.prototype={
$0(){},
$S:0}
C.e6g.prototype={
$0(){return B.a8(this.a,!1).hZ()},
$S:0}
C.e6h.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.iI("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a8(t.b,!1).ca(B.e7(new C.e6f(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.e6f.prototype={
$1(d){B.j5("construction")
return As.i6P()},
$S:z+45}
C.e6i.prototype={
$0(){return E.hSY(this.a,"ELECTRONICS LAB",this.b,A.aH)},
$S:0}
C.e6j.prototype={
$0(){var w=this.a
return w.l(w.d.gd52())},
$S:0}
C.e6k.prototype={
$0(){var w=this.a,v=w.d
w.l(v.gtr(v))
w.FY()},
$S:0}
C.cOQ.prototype={
$2(d,e){var w=null,v=this.a.gaAx().x
v===$&&B.d()
return B.b4(w,w,w,new C.bdf(v,w),A.aA)},
$S:52}
C.cOP.prototype={
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
$S:486}
C.hbA.prototype={
$3(d,e,f){return new C.WJ(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+46}
C.hbB.prototype={
$4(d,e,f,g){var w=x.a
return new B.dd(e,!1,B.iB(A.z,g,null,new B.bk(B.cM(A.cn,e,null),new B.bq(0.85,1,w),w.k("bk<bS.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
C.e1Z.prototype={
$0(){var w=this.a
w.e=this.b
w.y=0
w.z=w.gC0()},
$S:0}
C.e2_.prototype={
$0(){var w,v=this.a
v.e=0
w=this.c
v.y=A.o.F(A.o.F(this.b,w)+w,w)
v.z=v.gC0()},
$S:0}
C.e29.prototype={
$0(){var w=this.a,v=this.b,u=this.c
w.x=new B.r(v.a/u.a,v.b/u.b)
w.w=w.gC0()},
$S:0}
C.e1Y.prototype={
$1(d){return new K.Jh(F.Td[this.b],new C.e1X(this.a,d),null)},
$S:z+47}
C.e1X.prototype={
$0(){this.a.a=!0
B.a8(this.b,!1).e4()},
$S:0}
C.e2a.prototype={
$0(){var w=this.a
w.f=this.b
w.r=!1},
$S:0}
C.e2b.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.e1R.prototype={
$2(d,e){var w=null,v=this.a,u=v.f?v.gb2Z():w
return B.aA(A.c0,B.b4(w,w,w,v.cpg(this.b),A.hh),A.y,!1,D.hKY,u,w,w,w,new C.e1P(v),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e1Q(v,e),w,w,w,!1,A.a4)},
$S:35}
C.e1Q.prototype={
$1(d){var w=this.b
return this.a.cIz(d.b,new B.av(B.aU(1/0,w.a,w.b),B.aU(1/0,w.c,w.d)))},
$S:57}
C.e1P.prototype={
$1(d){var w,v=d.d
if(v==null)v=0
if(Math.abs(v)>120&&this.a.OB()!=null){w=v<0?1:-1
this.a.aEy(w)}},
$S:38}
C.e27.prototype={
$5$color$on(d,e,f,g,h){var w=null,v=h?g.j(0.28):A.c.j(0.08),u=B.m(14),t=B.K(h?g:A.aT,A.r,1)
return B.aA(w,B.p(w,B.w(B.a([B.V(d,g,w,w,w,20),A.rN,B.c(e,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,9.5,w,w,A.C,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.P,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,w,w,A.jl,A.k_,w,w,56),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:678}
C.e23.prototype={
$0(){return this.a.aEy(-1)},
$S:0}
C.e24.prototype={
$0(){return this.a.aEy(1)},
$S:0}
C.e25.prototype={
$0(){return this.a.Kh(null)},
$S:0}
C.e26.prototype={
$0(){return this.a.Kh(0)},
$S:0}
C.e2c.prototype={
$0(){return B.a8(this.a,!1).hZ()},
$S:0}
C.e22.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c4t(o):q.bHk(o,p),m=x.p
p=B.a([B.oW(new B.mf(n,new B.bg(p,x.aC)),A.pS,B.q9(),A.aZ,A.aZ,new C.e20())],m)
n=t.d
if(n){w=A.i.F(q.gC0(),12)<4
v=w?150:96
u=B.m(16)
m=B.a([A.ar],m)
if(w)m.push(D.bNT)
else m.push(A.aX)
m.push(B.p(s,s,A.f,s,s,new B.o(w?A.bf:A.ax,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.ar)
p.push(B.ao(s,B.at(B.cY(s,B.A(m,A.l,s,A.e,A.h,0,s,s),s,s,A.eg,new B.o(A.v,s,s,u,s,s,A.m),A.nj,s,28,s,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.Bn)p.push(B.ao(s,B.at(B.p(s,s,A.f,s,s,A.N4,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.Bo)p.push(B.ao(s,B.p(s,s,A.f,s,s,A.N4,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ao(6,B.aA(s,B.at(B.p(s,s,A.f,s,s,new B.o(A.c.j(0.75),s,s,B.m(3),s,s,A.m),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e21(q),s,s,s,s,s,s,!1,A.a4),s,s,0,0,s,s))
return B.bv(r,new B.am(A.a0,s,A.b4,A.t,p,s),A.ap)},
$S:465}
C.e20.prototype={
$2(d,e){var w=x.a
return new B.dd(e,!1,B.iB(A.z,d,null,new B.bk(e,new B.bq(0.92,1,w),w.k("bk<bS.T>"))),null)},
$S:419}
C.e21.prototype={
$0(){return this.a.Kh(null)},
$S:0}
C.e28.prototype={
$2(d,e){var w,v,u,t,s=null,r=Math.max(e.b,230),q=this.a
q=B.a([B.c(A.a.aZ(A.o.v(B.cX(q)),2,"0")+":"+A.a.aZ(A.o.v(B.fx(q)),2,"0"),s,s,s,s,s,s,A.uD,s,s,s),A.aX],x.p)
for(w=0;w<4;++w){v=new B.aP(1,1)
q.push(B.p(s,s,A.f,s,s,new B.o(A.c,s,s,new B.bc(v,v,v,v),s,s,A.m),s,4+w*2,s,D.bMp,s,s,s,3))}q.push(A.db)
q.push(D.h5N)
q.push(A.b7)
v=B.K(A.ac,A.r,1)
u=B.m(4)
t=this.b
q.push(B.p(s,new B.bL(A.a5,s,s,B.C7(A.z,B.p(s,s,A.f,s,s,new B.o(A.bf,s,s,B.m(2),s,s,A.m),s,s,s,A7.I1,s,s,s,s),s,t/100),s),A.f,s,s,new B.o(s,s,v,u,s,s,A.m),s,12,s,s,s,s,s,26))
q.push(A.pq)
q.push(B.c(""+t+"%",s,s,s,s,s,s,D.fXl,s,s,s))
return new B.d6(A.dn,A.a5,A.f,new B.a4(r,s,B.A(q,A.l,s,A.e,A.h,0,s,s),s),s)},
$S:280}
C.e1W.prototype={
$0(){return this.a.Kh(A.d.c8(F.iy,this.b))},
$S:0}
C.e1U.prototype={
$0(){return this.a.Kh(0)},
$S:0}
C.e1V.prototype={
$2(d,e){var w,v,u,t,s=null,r=Math.max(e.b,216),q=B.a([],x.p)
for(w=B.cV(F.iy,0,B.dz(4,"count",x.S),x.gD),v=w.$ti,w=new B.bR(w,w.gJ(0),v.k("bR<aj.E>")),u=this.a,v=v.k("aj.E");w.C();){t=w.d
q.push(u.ayk(t==null?v.a(t):t,50,!1))}return new B.d6(A.dn,A.z,A.f,new B.a4(r,s,B.A(q,A.l,s,A.rz,A.h,0,s,s),s),s)},
$S:280}
C.e1O.prototype={
$0(){return this.a.Kh(null)},
$S:0}
C.e1T.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=A.v.j(0.55),l=this.a,k=l.f,j=k?112:10
if(k){k=l.c
k.toString
k=B.aF(k,A.bZ,x.w).w.a.a>700}else k=!1
k=k?250:10
w=x.p
k=B.p(n,B.A(B.a([D.hkz,A.ar,B.E(B.c(this.b?"Navigation   Media   Climate":"File   Edit   View   Window   Help",n,1,A.f1,n,n,n,A.LZ,n,n,n),1),B.c(A.a.aZ(A.o.v(B.cX(new B.W(Date.now(),0,!1))),2,"0")+":"+A.a.aZ(A.o.v(B.fx(new B.W(Date.now(),0,!1))),2,"0"),n,n,n,n,n,n,A.qx,n,n,n)],w),A.l,n,A.e,A.h,0,n,n),A.f,m,n,n,n,24,n,n,new B.R(j,0,k,0),n,n,n)
j=B.a([B.b4(n,n,n,new C.bAa(l.gC0(),this.c.d,n),A.aA)],w)
if(l.e!=null){if(l.f){m=l.c
m.toString
m=B.aF(m,A.dK,x.w).w.r.b+52}else m=12
v=B.m(10)
u=B.K(A.aT,A.r,1)
t=B.m(10)
s=B.aA(n,B.p(n,n,A.f,n,n,A.agF,n,12,n,n,n,n,n,12),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.e1S(l),n,n,n,n,n,n,!1,A.a4)
r=B.p(n,n,A.f,n,n,A.Zd,n,12,n,n,n,n,n,12)
q=B.aA(n,B.p(n,n,A.f,n,n,D.bb5,n,12,n,n,n,n,n,12),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,l.gbcY(),n,n,n,n,n,n,!1,A.a4)
p=l.e
p.toString
p=B.a([s,A.e0,r,A.e0,q,A.ar,B.E(B.c(F.iy[p].a,n,1,A.a2,n,n,n,A.X3,n,n,n),1)],w)
if(l.OB()!=null)s=!l.f||!l.r
else s=!1
if(s)p.push(l.b_T(19))
s=B.p(n,B.A(p,A.l,n,A.e,A.h,0,n,n),A.f,A.cx,n,n,n,26,n,n,A.fD,n,n,n)
r=l.e
r.toString
j.push(B.bT(0,new B.C(new B.R(26,m,26,58),B.p(n,B.bv(t,B.w(B.a([s,B.E(l.aRd(r),1)],w),A.l,n,A.e,A.h,0,A.p),A.ap),A.f,n,n,new B.o(A.v,n,u,v,D.dEE,n,A.m),n,n,n,n,n,n,n,n),n),0,0,0))}m=A.c.j(0.16)
v=B.m(18)
u=B.K(A.aT,A.r,1)
t=B.a([],w)
for(o=0;o<8;++o)t.push(new B.C(A.jl,l.ayk(F.iy[o],34,!1),n))
j.push(B.ao(8,B.at(B.p(n,B.A(t,A.l,n,A.e,A.P,0,n,n),A.f,n,n,new B.o(m,n,u,v,n,n,A.m),n,n,n,n,A.lE,n,n,n),n,n,n),n,n,0,0,n,n))
return B.p(n,B.w(B.a([k,B.E(new B.am(A.a0,n,A.b4,A.t,j,n),1)],w),A.l,n,A.e,A.h,0,A.p),A.f,A4.a0r,n,n,n,n,n,n,n,n,n,n)},
$S:84}
C.e1S.prototype={
$0(){return this.a.Kh(null)},
$S:0}
C.fCB.prototype={
$0(){return D.ex6},
$S:z+48}
C.fCC.prototype={
$0(){return D.e3S},
$S:z+49}
C.fCD.prototype={
$0(){return D.dYb},
$S:z+50}
C.fCE.prototype={
$0(){return D.e3f},
$S:z+51}
C.fCF.prototype={
$0(){return D.e8K},
$S:z+52}
C.fCG.prototype={
$0(){return D.esT},
$S:z+53}
C.fCH.prototype={
$0(){return D.ev2},
$S:z+54}
C.fCI.prototype={
$0(){return D.e7N},
$S:z+36}
C.cpS.prototype={
$0(){return B.a8(this.a,!1).hZ()},
$S:0}
C.cpT.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=(e.b-14)/2,i=x.p,h=B.a([],i)
for(w=$.hWR(),v=j*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aP(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.aa(0,A.H,p.j(0.4),A.dv,16)],t)
n=B.c(r.c,k,k,k,k,k,k,A.LN,k,k,k)
m=B.c(r.a,k,k,k,k,k,k,D.fV3,k,k,k)
l=A.c.j(0.85)
h.push(B.aA(k,B.p(k,new B.am(A.a0,k,A.ab,A.t,B.a([new B.cR(k,-6,-6,k,k,k,n,k),new B.bL(A.ls,k,k,B.w(B.a([m,A.cQ,B.c(r.b,k,k,k,k,k,k,new B.F(!0,l,k,k,k,k,12,A.a7,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)],i),A.B,k,A.e,A.P,0,A.p),k)],i),k),A.f,k,k,new B.o(k,k,k,new B.bc(q,q,q,q),p,new B.a6(A.aw,A.aD,A.w,o,k,k),A.m),k,v,k,k,A.bD,k,k,j),A.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.cpR(d,r),k,k,k,k,k,k,!1,A.a4))}return B.c_(A.bI,h,A.br,k,14,14)},
$S:166}
C.cpR.prototype={
$0(){return B.a8(this.a,!1).ca(B.e7(new C.cpQ(this.b),!1,null,x.H))},
$S:0}
C.cpQ.prototype={
$1(d){return this.a.f.$0()},
$S:43}
C.f2F.prototype={
$0(){var w=this.a
return w.w=w.d[w.b9q(w.f)]},
$S:0}
C.f2B.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cV.ai()*7},
$S:0}
C.f2A.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bM(0,A.ck)
w.w=""},
$S:0}
C.f2D.prototype={
$0(){var w=this.a
return w.l(new C.f2C(w,this.b))},
$S:0}
C.f2C.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cJ(w,this.b)},
$S:0}
C.f2E.prototype={
$1(d){return this.a.b3B(0)},
$S:2}
C.e9L.prototype={
$0(){return C.K4("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.e9M.prototype={
$0(){},
$S:0}
C.e9G.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.e9I.prototype={
$0(){return this.a.b3D(this.b)},
$S:0}
C.e9J.prototype={
$0(){var w=this.a
return w.l(new C.e9H(w))},
$S:0}
C.e9H.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.e9K.prototype={
$0(){var w=this.a
return w.b3D(w.d)},
$S:0}
C.dUb.prototype={
$2(d,e){return d+e},
$S:83}
C.dUc.prototype={
$0(){},
$S:0}
C.dU6.prototype={
$2(d,e){return d+e},
$S:83}
C.dU9.prototype={
$0(){var w=this.a
return w.l(new C.dU8(w,this.b))},
$S:0}
C.dU8.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dUa.prototype={
$0(){var w=this.a
return w.l(new C.dU7(w))},
$S:0}
C.dU7.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.e5x.prototype={
$0(){return E.uT(this.b,this.a.d,"drawing")},
$S:0}
C.e5y.prototype={
$1(d){var w=this.a
return w.l(new C.e5w(w,d))},
$S:50}
C.e5w.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aLG(u,v,t))},
$S:0}
C.e5z.prototype={
$1(d){var w=this.a
return w.l(new C.e5v(w,d))},
$S:19}
C.e5v.prototype={
$0(){return A.d.gak(this.a.e).c.push(this.b.b)},
$S:0}
C.e5A.prototype={
$1(d){var w=this.a
return w.l(new C.e5u(w,d))},
$S:24}
C.e5u.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aLG(u,v,t))},
$S:0}
C.e5B.prototype={
$0(){var w=this.a
return w.l(new C.e5t(w,this.b))},
$S:0}
C.e5t.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.e5C.prototype={
$1(d){var w=this.a
return w.l(new C.e5s(w,d))},
$S:6}
C.e5s.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.e5D.prototype={
$0(){var w=this.a
return w.l(new C.e5r(w))},
$S:0}
C.e5r.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.e5E.prototype={
$0(){var w=this.a
return w.l(new C.e5q(w))},
$S:0}
C.e5q.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.e5F.prototype={
$0(){var w=this.a
return w.l(A.d.gtr(w.e))},
$S:0}
C.e5G.prototype={
$0(){var w=this.a
return w.l(new C.e5p(w))},
$S:0}
C.e5p.prototype={
$0(){var w=this.a
w.x=D.aCZ[A.o.F(A.d.c8(D.aCZ,w.x)+1,4)]},
$S:0}
C.exG.prototype={
$0(){return this.a.f.I(0,this.b)},
$S:0}
C.exH.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.K4("bell",B.a([0,4,7],w),500,0.45)
u.l(new C.exF(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.d()
if(v===u.length)C.K4("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:12}
C.exF.prototype={
$0(){var w=this.a
w.r.u(0,B.a([this.b,this.c],x.t))
w.f.a6(0)},
$S:0}
C.exI.prototype={
$0(){var w=this.a
if(w.c==null)return
w.l(new C.exE(w))},
$S:12}
C.exE.prototype={
$0(){var w=this.a
w.f.a6(0)
w.x=!1},
$S:0}
C.exM.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return B.aA(w,B.l1(new C.exK(v,e),w,A.aZ,A.pS,w,w,new B.bq(0,u,x.a),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.exL(v,e),w,w,w,w,w,w,!1,A.a4)},
$S:76}
C.exL.prototype={
$0(){return this.a.cgQ(this.b)},
$S:0}
C.exK.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dA(),m=n.a
m.$flags&2&&B.ak(m)
m[11]=0.001
n.fI(3.141592653589793*e)
m=B.m(16)
w=o?p:D.ceh
if(o)v=q.a.r.q(0,q.b)?A.bf.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.K(u.r.q(0,t)?A.bf:A.aT,A.r,1)
if(o){r=B.dA()
r.fI(3.141592653589793)
u=u.e
u===$&&B.d()
r=B.fG(A.z,B.c(u[t],p,p,p,p,p,p,H.adh,p,p,p),p,r,!0)
u=r}else u=D.hdi
return B.fG(A.z,B.p(A.z,u,A.f,p,p,new B.o(v,p,s,m,p,w,A.m),p,p,p,p,p,p,p,p),p,n,!0)},
$S:110}
C.exN.prototype={
$0(){var w=this.a
return w.l(new C.exJ(w,this.b))},
$S:0}
C.exJ.prototype={
$0(){var w=this.a
w.d=this.b.a
w.avG()},
$S:0}
C.exO.prototype={
$0(){var w=this.a
return w.l(w.gbQh())},
$S:0}
C.eKO.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.eKP.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.eKM.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eKN.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.eKL(w))},
$S:12}
C.eKL.prototype={
$0(){return this.a.f=-1},
$S:0}
C.eKQ.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.eKR.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.eKS.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b3C()},
$S:12}
C.eKT.prototype={
$0(){return this.a.cgW(this.b)},
$S:0}
C.eZ0.prototype={
$1(d){return B.v(d.h(0,1))+","},
$S:59}
C.eZ9.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.c(d,w,1,A.a2,w,w,w,B.l(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.C(A.k_,B.A(B.a([v,A.aa,new B.d0(1,A.c9,new B.d6(A.dn,A.z,A.f,B.c(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w),w)],x.p),A.l,w,A.e,A.h,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1974}
C.eZ5.prototype={
$1(d){return this.a.l(new C.eZ4())},
$S:2}
C.eZ4.prototype={
$0(){},
$S:0}
C.eZ6.prototype={
$0(){var w=this.a
return w.l(new C.eZ3(w,this.b))},
$S:0}
C.eZ3.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eZ7.prototype={
$1(d){var w=this.a
return w.l(new C.eZ2(w,d))},
$S:6}
C.eZ2.prototype={
$0(){return this.a.f=A.i.S(this.b)},
$S:0}
C.eZ8.prototype={
$0(){var w=this.a
return w.l(new C.eZ1(w))},
$S:0}
C.eZ1.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.ewl.prototype={
$0(){},
$S:0}
C.ewm.prototype={
$0(){},
$S:0}
C.ewe.prototype={
$0(){var w=this.a
return w.l(new C.ewd(w))},
$S:0}
C.ewd.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.c3(u,1,!1,x.S)
w.r=0.9
E.Yg("hat",0,0.6)},
$S:0}
C.ewf.prototype={
$0(){var w=this.a
return w.l(new C.ewc(w))},
$S:0}
C.ewc.prototype={
$0(){this.a.y=1.1
E.mJ("bell",36,200,0.4)},
$S:0}
C.ewg.prototype={
$0(){var w=this.a
return w.l(new C.ewb(w))},
$S:0}
C.ewb.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.av(Math.max(v,u)-t+1)
w.as=u
E.mJ("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.ewh.prototype={
$0(){var w=this.a
return w.l(new C.ewa(w,this.b))},
$S:0}
C.ewa.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.ewi.prototype={
$1(d){var w=this.a
return w.l(new C.ew9(w,d))},
$S:6}
C.ew9.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.i.S(this.b),r=J.e6(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.ewj.prototype={
$1(d){var w=this.a
return w.l(new C.ew8(w,d))},
$S:6}
C.ew8.prototype={
$0(){return this.a.z=A.i.S(this.b)},
$S:0}
C.ewk.prototype={
$1(d){var w=this.a
return w.l(new C.ew7(w,d))},
$S:6}
C.ew7.prototype={
$0(){return this.a.Q=A.i.S(this.b)},
$S:0}
C.cpO.prototype={
$0(){var w=this
return E.mJ(w.a,w.b,w.c,w.d)},
$S:1};(function aliases(){var w=C.aPM.prototype
w.bCc=w.t
w=C.aOQ.prototype
w.bBe=w.t
w=C.aOR.prototype
w.bBf=w.t
w=C.aOV.prototype
w.bBj=w.t
w=C.aQC.prototype
w.bD9=w.t
w=C.aPK.prototype
w.bCa=w.t
w=C.aAR.prototype
w.byf=w.t
w=C.aAS.prototype
w.byg=w.t
w=C.aNh.prototype
w.bzC=w.t
w=C.aP5.prototype
w.bBu=w.t
w=C.aOS.prototype
w.bBg=w.t
w=C.aPc.prototype
w.bBC=w.t
w=C.aPD.prototype
w.bC3=w.t
w=C.aQ5.prototype
w.bCw=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0,u=a._instance_1u,t=a._instance_1i,s=a._instance_0i,r=a.installInstanceTearOff
w(C.aHG.prototype,"gazR","cbW",1)
v(C,"iDV","c9m",3)
var q
u(q=C.aG5.prototype,"gcll","clm",22)
w(q,"gccv","b23",1)
w(C.aG7.prototype,"gceh","cei",1)
t(C.aGo.prototype,"gcep","ceq",39)
w(q=C.aKN.prototype,"gcFx","cFy",1)
w(q,"gcer","a0q",1)
w(q,"gcq1","cq2",1)
w(q,"gcen","a0p",3)
w(q,"gceo","agn",3)
w(q=C.aHF.prototype,"gbNl","abD",3)
w(q,"gcpi","b5P",1)
w(q,"gctd","aj3",3)
s(q,"gcet","ago",3)
s(q=C.a6x.prototype,"gtr","a6",1)
u(q,"gd2F","aq9",0)
u(q,"gcZX","MZ",0)
w(q,"gd52","bnu",1)
r(C.ale.prototype,"gceQ",0,5,null,["$5"],["lF"],41,0,0)
w(q=C.aGC.prototype,"gceR","ceS",1)
w(q,"gcw8","ajp",3)
w(q,"gclD","ahI",3)
w(q,"gcDu","akx",3)
w(q=C.aGs.prototype,"gc6V","aew",3)
w(q,"gbcY","cK7",1)
w(q,"gb2Z","ceW",1)
w(q=C.aIb.prototype,"gcgR","cgS",1)
s(q,"gcgP","b3B",1)
w(C.aHr.prototype,"gbQh","avG",1)
s(C.aHP.prototype,"gcgT","cgU",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aG,[C.amr,C.Hi,C.vJ,C.aW0,C.a5p,C.ben,C.c9n,C.yY,C.Dl,C.o2,C.bfb,C.Bj,C.bxD,C.qL,C.rs,C.Dp,C.a0n,C.ah2,C.a2E,C.DA,C.adS,C.ae9,C.ag7,C.H3,C.es,C.ub,C.acv,C.adE,C.a6x,C.nb,C.bfc,C.h5,C.mm,C.byX,C.aLG])
u(B.hq,[C.fUp,C.fIU,C.fQK,C.fQL,C.fUm,C.fUn,C.epp,C.epI,C.eFe,C.eEM,C.eEN,C.eEO,C.eEP,C.eEQ,C.eER,C.eES,C.eET,C.eEK,C.eEL,C.eEJ,C.eF9,C.eFa,C.eFb,C.dTI,C.dTK,C.dTN,C.dTY,C.c9o,C.c9p,C.fBV,C.fBW,C.fBX,C.fC3,C.fC4,C.fC5,C.dVL,C.dVs,C.dVM,C.dVn,C.dVi,C.dVk,C.dVq,C.dVD,C.dVB,C.dVC,C.dVA,C.dVx,C.dVz,C.fhr,C.fh0,C.fh1,C.fh8,C.fhf,C.fho,C.fgY,C.dvh,C.dvi,C.dve,C.dvf,C.dvg,C.dvj,C.dvk,C.dvl,C.dvm,C.dvn,C.dvo,C.dvp,C.dvq,C.dvr,C.eEa,C.eEb,C.eEc,C.eEd,C.eE8,C.eE9,C.eEF,C.eEh,C.eEj,C.eE3,C.eEB,C.eEz,C.eEA,C.eEy,C.eEx,C.eE5,C.bSD,C.bSO,C.bSJ,C.bSP,C.bSR,C.bSE,C.bSC,C.bSW,C.bSK,C.bSN,C.bSM,C.bSL,C.bMY,C.h6q,C.h6t,C.h6r,C.bMD,C.bMy,C.bMw,C.bMW,C.bMO,C.bMP,C.bMN,C.bMQ,C.bMm,C.bMo,C.bMk,C.bMa,C.bMb,C.bMc,C.fC6,C.fC7,C.fC8,C.fBU,C.fC9,C.fBT,C.fCa,C.fBY,C.fBS,C.fBZ,C.fBR,C.fC_,C.fBQ,C.fC0,C.fBO,C.fBP,C.fC1,C.fBM,C.fBN,C.fC2,C.fBL,C.e6b,C.e6c,C.e61,C.e5Y,C.e6a,C.e6f,C.cOP,C.hbA,C.hbB,C.e1Y,C.e1Q,C.e1P,C.e27,C.cpQ,C.f2E,C.e5y,C.e5z,C.e5A,C.e5C,C.exK,C.eZ0,C.eZ9,C.eZ5,C.eZ7,C.ewi,C.ewj,C.ewk])
u(B.iW,[C.fUo,C.epu,C.eps,C.eEV,C.eF7,C.dVj,C.dVG,C.e0X,C.fhu,C.fhv,C.fh7,C.fhk,C.fhl,C.fhg,C.fhm,C.fgX,C.eE6,C.eE7,C.eEE,C.eEw,C.eEl,C.bSQ,C.bSS,C.bSU,C.bSF,C.bSH,C.bMZ,C.bMX,C.cwZ,C.h6s,C.bMv,C.bMx,C.bMU,C.bMT,C.bMl,C.e69,C.cOQ,C.e1R,C.e22,C.e20,C.e28,C.e1V,C.e1T,C.cpT,C.dUb,C.dU6,C.exM])
u(B.af,[C.Xt,C.XQ,C.Wh,C.Wo,C.OJ,C.aKM,C.XP,C.alc,C.X_,C.aAw,C.WJ,C.Yn,C.X7,C.Wi,C.WZ,C.XK,C.XV,C.Ye,C.XJ])
u(B.ah,[C.boC,C.aPM,C.aOQ,C.aOV,C.aGo,C.aQC,C.aPK,C.aAR,C.bC8,C.aNh,C.aP5,C.aQ5,C.aPc,C.aOS,C.bo2,C.aHr,C.aHP,C.bpk,C.aPD])
u(B.iV,[C.epn,C.epo,C.epA,C.epB,C.epw,C.epv,C.epx,C.ept,C.epy,C.epr,C.epz,C.epq,C.epE,C.epD,C.epF,C.epC,C.epG,C.epH,C.epJ,C.eFd,C.eFf,C.eFg,C.eEX,C.eEW,C.eEU,C.eF2,C.eF3,C.eF_,C.eF4,C.eEZ,C.eF5,C.eF6,C.eEY,C.eF8,C.eF1,C.eFc,C.eF0,C.dU4,C.dU3,C.dTF,C.dTG,C.dTH,C.dU5,C.dTJ,C.dTL,C.dTM,C.dTO,C.dTC,C.dTD,C.dTE,C.dTV,C.dTW,C.dTX,C.dTU,C.dTZ,C.dTT,C.dU_,C.dTS,C.dU0,C.dTR,C.dU1,C.dTQ,C.dU2,C.dTP,C.dVp,C.dVo,C.dVt,C.dVl,C.dVm,C.dVu,C.dVv,C.dVw,C.dVr,C.dVh,C.dVF,C.dVE,C.dVH,C.dVI,C.dVJ,C.dVy,C.dVK,C.cZM,C.e0V,C.e0U,C.e0W,C.fCl,C.fCm,C.fCn,C.fCo,C.fCp,C.fCq,C.fCr,C.fCs,C.fCt,C.fht,C.fhs,C.fha,C.fh9,C.fh_,C.fgZ,C.fh2,C.fh5,C.fh4,C.fh6,C.fh3,C.fhi,C.fhh,C.fhj,C.fhb,C.fhn,C.fhe,C.fhp,C.fhd,C.fhq,C.fhc,C.eEf,C.eE4,C.eEe,C.eE0,C.eEg,C.eEi,C.eE1,C.eE2,C.eED,C.eEC,C.eEt,C.eEu,C.eEv,C.eEp,C.eEq,C.eEo,C.eEr,C.eEn,C.eEs,C.eEm,C.eEk,C.dvd,C.bST,C.bSV,C.bSG,C.bSI,C.bMA,C.bMB,C.bMz,C.bMC,C.bME,C.bMp,C.bMq,C.bMu,C.bMr,C.bMs,C.bMt,C.bMV,C.bM_,C.bML,C.bMM,C.bMJ,C.bMK,C.bMG,C.bMH,C.bMI,C.bMR,C.bMF,C.bMS,C.bM0,C.bMn,C.bM7,C.bM6,C.bM8,C.bM9,C.bM5,C.bMd,C.bM4,C.bMe,C.bMf,C.bMg,C.bMh,C.bM3,C.bMi,C.bM2,C.bMj,C.bM1,C.e62,C.e6d,C.e6e,C.e60,C.e6_,C.e5Z,C.e67,C.e65,C.e66,C.e68,C.e63,C.e64,C.e6g,C.e6h,C.e6i,C.e6j,C.e6k,C.e1Z,C.e2_,C.e29,C.e1X,C.e2a,C.e2b,C.e23,C.e24,C.e25,C.e26,C.e2c,C.e21,C.e1W,C.e1U,C.e1O,C.e1S,C.fCB,C.fCC,C.fCD,C.fCE,C.fCF,C.fCG,C.fCH,C.fCI,C.cpS,C.cpR,C.f2F,C.f2B,C.f2A,C.f2D,C.f2C,C.e9L,C.e9M,C.e9G,C.e9I,C.e9J,C.e9H,C.e9K,C.dUc,C.dU9,C.dU8,C.dUa,C.dU7,C.e5x,C.e5w,C.e5v,C.e5u,C.e5B,C.e5t,C.e5s,C.e5D,C.e5r,C.e5E,C.e5q,C.e5F,C.e5G,C.e5p,C.exG,C.exH,C.exF,C.exI,C.exE,C.exL,C.exN,C.exJ,C.exO,C.eKO,C.eKP,C.eKM,C.eKN,C.eKL,C.eKQ,C.eKR,C.eKS,C.eKT,C.eZ4,C.eZ6,C.eZ3,C.eZ2,C.eZ8,C.eZ1,C.ewl,C.ewm,C.ewe,C.ewd,C.ewf,C.ewc,C.ewg,C.ewb,C.ewh,C.ewa,C.ew9,C.ew8,C.ew7,C.cpO])
t(C.bCm,C.aPM)
t(C.aHG,C.bCm)
u(B.lM,[C.blv,C.bft,C.bx_,C.be5,C.bvz,C.buY,C.beM,C.bv_,C.bz6,C.blt,C.ale,C.bdf,C.bAa,C.agW,C.bAm,C.buZ,C.bq6])
t(C.aOR,C.aOQ)
t(C.aG5,C.aOR)
t(C.bC5,C.aOV)
t(C.aG7,C.bC5)
u(B.lk,[C.LA,C.a2r,C.Ky])
u(B.aw,[C.bvY,C.ahf,C.ag3,C.RK,C.bwv,C.aav,C.bhB])
t(C.aKN,C.aQC)
t(C.bls,B.oX)
t(C.aHF,C.aPK)
t(C.aAS,C.aAR)
t(C.ald,C.aAS)
t(C.aGC,C.bC8)
t(C.bdg,C.aNh)
t(C.aGs,C.aP5)
t(C.bCt,C.aQ5)
t(C.aIb,C.bCt)
t(C.bCa,C.aPc)
t(C.bob,C.bCa)
t(C.bC4,C.aOS)
t(C.bnL,C.bC4)
t(C.bCk,C.aPD)
t(C.boO,C.bCk)
w(C.aPM,B.cj)
w(C.bCm,E.nZ)
w(C.aOQ,B.cj)
w(C.aOR,E.nZ)
w(C.aOV,B.cj)
w(C.bC5,E.nZ)
w(C.aQC,B.eY)
w(C.aPK,B.cj)
w(C.aAR,B.cj)
w(C.aAS,E.nZ)
w(C.aNh,B.cj)
v(C.bC8,B.eE)
w(C.aP5,B.cj)
w(C.aOS,B.cj)
w(C.bC4,E.nZ)
w(C.aPc,B.cj)
w(C.bCa,E.nZ)
w(C.aPD,B.cj)
w(C.bCk,E.nZ)
w(C.aQ5,B.cj)
w(C.bCt,E.nZ)})()
B.jd(b.typeUniverse,JSON.parse('{"Xt":{"af":[],"x":[]},"boC":{"ah":["Xt"]},"XQ":{"af":[],"x":[]},"aHG":{"ah":["XQ"]},"blv":{"aC":[]},"Wh":{"af":[],"x":[]},"aG5":{"ah":["Wh"]},"Wo":{"af":[],"x":[]},"aG7":{"ah":["Wo"]},"bft":{"aC":[]},"ahf":{"aw":[],"x":[]},"ag3":{"aw":[],"x":[]},"aKM":{"af":[],"x":[]},"OJ":{"af":[],"x":[]},"aGo":{"ah":["OJ"]},"bvY":{"aw":[],"x":[]},"RK":{"aw":[],"x":[]},"bx_":{"aC":[]},"bwv":{"aw":[],"x":[]},"be5":{"aC":[]},"aKN":{"ah":["aKM"]},"bvz":{"aC":[]},"buY":{"aC":[]},"beM":{"aC":[]},"bv_":{"aC":[]},"bz6":{"aC":[]},"XP":{"af":[],"x":[]},"bls":{"aC":[]},"aHF":{"ah":["XP"]},"blt":{"aC":[]},"ale":{"aC":[]},"alc":{"af":[],"x":[]},"ald":{"ah":["alc"]},"X_":{"af":[],"x":[]},"aAw":{"af":[],"x":[]},"aGC":{"ah":["X_"],"eE":[]},"bdg":{"ah":["aAw"]},"bdf":{"aC":[]},"WJ":{"af":[],"x":[]},"aGs":{"ah":["WJ"]},"bAa":{"aC":[]},"agW":{"aC":[]},"aav":{"aw":[],"x":[]},"Yn":{"af":[],"x":[]},"X7":{"af":[],"x":[]},"Wi":{"af":[],"x":[]},"WZ":{"af":[],"x":[]},"XK":{"af":[],"x":[]},"XV":{"af":[],"x":[]},"Ye":{"af":[],"x":[]},"XJ":{"af":[],"x":[]},"aIb":{"ah":["Yn"]},"bAm":{"aC":[]},"bob":{"ah":["X7"]},"buZ":{"aC":[]},"bnL":{"ah":["Wi"]},"bo2":{"ah":["WZ"]},"bq6":{"aC":[]},"aHr":{"ah":["XK"]},"aHP":{"ah":["XV"]},"bpk":{"ah":["Ye"]},"boO":{"ah":["XJ"]},"bhB":{"aw":[],"x":[]}}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.as
return{c:w("la<u?>"),G:w("u"),J:w("bn<n,H>"),Q:w("dc<n>"),Z:w("a_"),I:w("vj"),M:w("N<di>"),l:w("N<a5k>"),h:w("N<a5p>"),V:w("N<aa>"),O:w("N<u>"),F:w("N<W>"),D:w("N<az<aG>>"),x:w("N<a_>"),E:w("N<ai<n>>"),b:w("N<ai<H>>"),U:w("N<ai<G?>>"),B:w("N<a9<n,aG>>"),g:w("N<r>"),bz:w("N<ub>"),v:w("N<fZ>"),eZ:w("N<+(n,n)>"),fT:w("N<+(H,x)>"),L:w("N<+(G,n)>"),u:w("N<+(G,G)>"),r:w("N<+(n,n,a_)>"),e:w("N<+(n,H,H,G)>"),o:w("N<+(n,G,n,G)>"),d:w("N<+(n,n,H,H,a9<n,H>)>"),_:w("N<vJ>"),fQ:w("N<acv>"),s:w("N<n>"),cF:w("N<au>"),X:w("N<KO>"),p:w("N<x>"),bL:w("N<adE>"),fH:w("N<li>"),a_:w("N<adS>"),cB:w("N<o2>"),ba:w("N<ae9>"),eW:w("N<Dp>"),fY:w("N<a0n>"),ac:w("N<ag7>"),cd:w("N<DA>"),fr:w("N<ah2>"),e4:w("N<a2E>"),au:w("N<aLG>"),f7:w("N<P>"),n:w("N<H>"),t:w("N<G>"),dS:w("N<aC?>"),fs:w("N<ub?>"),bN:w("N<G?>"),gJ:w("cB<ald>"),A:w("cB<ah<af>>"),bF:w("ai<u>"),gl:w("ai<W>"),ew:w("ai<aG>"),j:w("ai<@>"),P:w("a9<n,@>"),f:w("a9<@,@>"),bd:w("O<es,n>"),fR:w("O<+(H,x),x>"),w:w("im"),gA:w("vn"),gD:w("wI"),k:w("cp"),K:w("aG"),Y:w("ub"),C:w("es"),N:w("n"),bO:w("au"),a:w("bq<H>"),W:w("bg<n>"),aC:w("bg<G?>"),dg:w("ee<rs>"),m:w("ben"),a2:w("Dl"),f3:w("rs"),es:w("H3"),q:w("l2"),y:w("P"),i:w("H"),z:w("@"),S:w("G"),R:w("ai<@>?"),cK:w("aG?"),T:w("n?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b5M=new B.di(0,0.1)
D.b7J=new C.aW0(0,0,0)
D.MX=new C.aW0(0,0.5,0)
D.b8k=new B.ax(A.bf,1,A.r,-1)
D.b9Q=new B.aX(16,1/0,16,1/0)
D.ba0=new B.aX(0,1/0,0,210)
D.bs5=new B.u(1,0.10588235294117647,0.12549019607843137,0.18823529411764706,A.q)
D.dES=w([D.bs5,Av.akW],x.O)
D.eOF=new B.bU(A.C_,1.1,A.w,null,0,D.dES,null,null)
D.ba8=new B.o(null,null,null,null,null,D.eOF,A.m)
D.bb5=new B.o(A.bk,null,null,null,null,null,A.a6)
D.fID=new B.F(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hlZ=new B.D("\u26a1",null,D.fID,null,null,null,null,null,null,null,null,null)
D.bfQ=new B.cn(A.z,null,null,D.hlZ,null)
D.aYR=new B.F(!0,A.bX,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hbh=new B.D("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aYR,null,A.K,null,null,null,null,null,null,null)
D.eGN=new B.C(A.o8,D.hbh,null)
D.bg0=new B.cn(A.z,null,null,D.eGN,null)
D.h0Z=new B.D("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aYR,null,A.K,null,null,null,null,null,null,null)
D.eHG=new B.C(A.HW,D.h0Z,null)
D.bgJ=new B.cn(A.z,null,null,D.eHG,null)
D.ahG=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.bkB=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.bkS=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bm7=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.bme=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.bmB=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.boD=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.bpN=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.bqx=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.ak3=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.brz=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.akr=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.akz=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.btz=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.al0=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.bvB=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.bvJ=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bwe=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.wV=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.byp=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.amy=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.bEh=new B.bh(11e6)
D.bGa=new B.R(10,6,10,2)
D.bGc=new B.R(10,8,0,10)
D.bGS=new B.R(12,8,6,10)
D.bGV=new B.R(12,8,8,8)
D.bH1=new B.R(14,0,14,22)
D.bH3=new B.R(14,0,14,30)
D.bI7=new B.R(16,4,16,28)
D.bIq=new B.R(18,10,18,16)
D.bLf=new B.R(4,4,8,2)
D.bLT=new B.R(8,14,8,12)
D.bM3=new B.R(8,6,8,8)
D.bMp=new B.R(0,0,1.5,0)
D.b7v=new B.El(26,"saturation")
D.bMI=new B.v7(A.cG,D.b7v,null,A.ZI)
D.bMJ=new B.h2(A.H,11)
D.bMN=new B.h2(A.H,30)
D.h00=new B.D("REACTION LAB",null,U.aZv,null,null,null,null,A.a2,null,1,null,null)
D.bMW=new B.bu(1,A.b6,D.h00,null)
D.h49=new B.D("\ud83d\udce2 NGMY Ads",null,A.qx,null,null,null,null,A.f1,null,1,null,null)
D.bNT=new B.bu(1,A.b6,D.h49,null)
D.fZD=new B.D("Wire selected",null,A.hj,null,null,null,null,null,null,null,null,null)
D.bO6=new B.bu(1,A.b6,D.fZD,null)
D.arF=new B.a_(62712,"MaterialIcons",!1)
D.bUj=new B.a_(62908,"MaterialIcons",!1)
D.bW_=new B.a_(983122,"MaterialIcons",!1)
D.bWf=new B.a_(983247,"MaterialIcons",!1)
D.bWv=new B.a_(983443,"MaterialIcons",!1)
D.bWO=new B.a_(983616,"MaterialIcons",!1)
D.bVZ=new B.a_(983117,"MaterialIcons",!1)
D.c_B=new B.ae(D.bVZ,28,A.c,null,null,null)
D.c_T=new B.ae(A.jn,18,null,null,null,null)
D.c27=new B.ae(A.od,null,A.ac,null,null,null)
D.c2h=new B.ae(A.a5d,21,A.ac,null,null,null)
D.c38=new B.ae(A.eD,17,A.ac,null,null,null)
D.c62=new B.ae(A.jn,21,A.ac,null,null,null)
D.c6y=new B.ae(A.eq,20,A.c1,null,null,null)
D.c7E=new B.ae(A.eh,null,A.aQ,null,null,null)
D.dCo=w([A.dl,A.dh,A.dl],x.O)
D.avo=new B.a6(A.a5,A.a9,A.w,D.dCo,null,null)
D.dbx=w([A.bP,A.bl],x.O)
D.cb9=new B.a6(A.aV,A.b1,A.w,D.dbx,null,null)
D.cbo=new B.a6(A.aV,A.b1,A.w,A.a7P,null,null)
D.dxC=w([F.Np,A8.amI],x.O)
D.cc8=new B.a6(A.aV,A.b1,A.w,D.dxC,null,null)
D.d8Q=w([A.pD,A.iI],x.O)
D.cce=new B.a6(A.aV,A.b1,A.w,D.d8Q,null,null)
D.dbf=w([A.cU,A.ax],x.O)
D.avB=new B.a6(A.aV,A.b1,A.w,D.dbf,null,null)
D.dvv=w([A.d0,A.iL,A.bl],x.O)
D.ccx=new B.a6(A.a5,A.a9,A.w,D.dvv,null,null)
D.dHJ=w([A.d0,A.bP,A.bl],x.O)
D.ccI=new B.a6(A.a5,A.a9,A.w,D.dHJ,null,null)
D.dvB=w([A.cz,A.cx],x.O)
D.avE=new B.a6(A.aV,A.b1,A.w,D.dvB,null,null)
D.aFC=w([A.cU,M.ni],x.O)
D.cd8=new B.a6(A.aV,A.b1,A.w,D.aFC,null,null)
D.cdq=new B.a6(A.aV,A.b1,A.w,X.avY,null,null)
D.ceh=new B.a6(A.aw,A.aD,A.w,A.Te,null,null)
D.bx9=new B.u(1,0.16470588235294117,0.16470588235294117,0.1803921568627451,A.q)
D.bsl=new B.u(1,0.0392156862745098,0.0392156862745098,0.043137254901960784,A.q)
D.dl4=w([D.bx9,D.bsl],x.O)
D.cel=new B.a6(A.aV,A.b1,A.w,D.dl4,null,null)
D.cev=new B.a6(A.aV,A.b1,A.w,H.aEU,null,null)
D.amh=new B.u(1,0.043137254901960784,0.043137254901960784,0.047058823529411764,A.q)
D.bwL=new B.u(1,0.22745098039215686,0.22745098039215686,0.23921568627450981,A.q)
D.dEh=w([D.amh,D.bwL,D.amh],x.O)
D.ceD=new B.a6(A.a5,A.a9,A.w,D.dEh,null,null)
D.bw8=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.bx2=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cU4=w([A.Ox,D.bw8,D.bx2],x.O)
D.ceH=new B.a6(A.aV,A.b1,A.w,D.cU4,null,null)
D.cHe=w([A.de,A.j_],x.O)
D.ceW=new B.a6(A.aV,A.b1,A.w,D.cHe,null,null)
D.cUL=w([A.d0,A.hX,A.d0],x.O)
D.cf3=new B.a6(A.a5,A.a9,A.w,D.cUL,null,null)
D.bzR=new B.u(1,0.07058823529411765,0.0784313725490196,0.10196078431372549,A.q)
D.cI0=w([F.ahO,D.bzR],x.O)
D.cf9=new B.a6(A.aV,A.b1,A.w,D.cI0,null,null)
D.cfO=w([0,4,7],x.t)
D.cfP=w([0,4,7,12],x.t)
D.cfQ=w([0,4,7,4],x.t)
D.aEz=w([A.h9,A.to],x.O)
D.aE4=w([A.fK,A.cZ],x.O)
D.aCp=w([A.bj,A.e_],x.O)
D.d20=w([A.aQ,A.de],x.O)
D.dx1=w([A.c5,A.lV],x.O)
D.aBQ=w([A.cW,A.kf],x.O)
D.d7u=w([A.bQ,A.aN],x.O)
D.cgd=w([D.aEz,D.aE4,A.a73,D.aCp,D.d20,A.a7_,A.a7f,D.dx1,D.aBQ,D.d7u],B.as("N<ai<u>>"))
D.ckW=w([120,220,380],x.t)
D.coG=w([12,16,19,24],x.t)
D.coS=w([1400,800,450,2400],x.t)
D.cxq=w([250,450,900,1500],x.t)
D.bjU=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.bwy=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.bue=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.bAs=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.btm=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.aB5=w([D.bjU,D.bwy,D.bue,D.bAs,D.btm],x.O)
D.f8q=new B.y(-25,A.ax)
D.eXy=new B.y(25,A.bC)
D.cHk=w([D.f8q,D.eXy],B.as("N<+(H,u)>"))
D.cOS=w([50,25,75],x.t)
D.cUE=w([0,5,10,15,18,20,25],x.t)
D.d2k=w([900,500,250,1600],x.t)
D.d6G=w([A.bj,A.bE,A.bd,A.bj],x.O)
D.a6V=w([A.aC,A.bu,A.bk,A.aH,A.oN],x.O)
D.d8r=w([A.ax,A.aC,A.cW,A.bu,A.bk,A.cI,A.ci,A.bE,A.a_2],x.O)
D.a6Y=w([0.04,0.17,0.3],x.n)
D.frX=new C.vJ("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.fs2=new C.vJ("Medium engine","A good all-rounder.",0.3,0.9)
D.fs1=new C.vJ("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Jr=w([D.frX,D.fs2,D.fs1],x._)
D.eUI=new B.y(6,"Easy")
D.eVw=new B.y(8,"Medium")
D.eQh=new B.y(10,"Hard")
D.dae=w([D.eUI,D.eVw,D.eQh],x.L)
D.aCO=w([0.55,0.78,1],x.n)
D.aCZ=w([A.c,A.ha,A.pF,A.ax],x.O)
D.aD6=w([A.bk,A.aC,A.bu,A.dh],x.O)
D.frU=new C.vJ("Radar","Shows your height above the ground.",0.1,0)
D.frV=new C.vJ("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.frS=new C.vJ("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aDf=w([D.frU,D.frV,D.frS],x._)
D.dgC=w([-29.5,28.5],x.n)
D.dgI=w([A.bl,A.cm,F.NU,A.cz],x.O)
D.dh5=w([47,100,220,470,1000],x.n)
D.dir=w([0,0.32,0.62,1],x.n)
D.diw=w([A.d0,A.hX,A.d0,A.cz],x.O)
D.Ky={volts:0}
D.a8Q=new B.bn(D.Ky,[3],x.J)
D.L0=new B.e1(["b","battery",0.2,0.3,D.a8Q])
D.eAE={on:0}
D.dO7=new B.bn(D.eAE,[1],x.J)
D.Fr=new B.e1(["s","switch",0.5,0.3,D.dO7])
D.fpw=new B.e1(["l","bulb",0.8,0.3,A.jM])
D.dbI=w([D.L0,D.Fr,D.fpw],x.d)
D.Fp=new B.b7(["b",0,"s",0])
D.fop=new B.b7(["s",1,"l",0])
D.aUh=new B.b7(["l",1,"b",1])
D.dvJ=w([D.Fp,D.fop,D.aUh],x.o)
D.db3=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.ePo=new C.nb("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.dbI,D.dvJ,D.db3)
D.aO3={ohms:0}
D.aLD=new B.bn(D.aO3,[220],x.J)
D.foV=new B.e1(["r","resistor",0.5,0.3,D.aLD])
D.fpN=new B.e1(["d","led",0.8,0.3,A.jM])
D.dzg=w([D.L0,D.foV,D.fpN],x.d)
D.fnD=new B.b7(["b",0,"r",0])
D.foj=new B.b7(["r",1,"d",0])
D.fnK=new B.b7(["d",1,"b",1])
D.dJw=w([D.fnD,D.foj,D.fnK],x.o)
D.dzJ=w(["led","diode","indicator"],x.s)
D.ePv=new C.nb("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dzg,D.dJw,D.dzJ)
D.aak={level:0}
D.dNu=new B.bn(D.aak,[0.2],x.J)
D.fp1=new B.e1(["p","pot",0.5,0.3,D.dNu])
D.fp3=new B.e1(["m","motor",0.8,0.3,A.jM])
D.dc3=w([D.L0,D.fp1,D.fp3],x.d)
D.fnC=new B.b7(["b",0,"p",0])
D.foe=new B.b7(["p",1,"m",0])
D.fo9=new B.b7(["m",1,"b",1])
D.dEA=w([D.fnC,D.foe,D.fo9],x.o)
D.dvo=w(["fan","motor","spin","dimmer"],x.s)
D.ePm=new C.nb("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.dc3,D.dEA,D.dvo)
D.a8M=new B.bn(D.aak,[0.9],x.J)
D.aUq=new B.e1(["s","solar",0.25,0.3,D.a8M])
D.aUp=new B.e1(["l","bulb",0.75,0.3,A.jM])
D.dfc=w([D.aUq,D.aUp],x.d)
D.fom=new B.b7(["s",0,"l",0])
D.fo6=new B.b7(["l",1,"s",1])
D.dcY=w([D.fom,D.fo6],x.o)
D.dFl=w(["solar","sun","without battery","no battery","free"],x.s)
D.ePp=new C.nb("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.dfc,D.dcY,D.dFl)
D.fpS=new B.e1(["c","crank",0.25,0.3,D.a8M])
D.dtr=w([D.fpS,D.aUp],x.d)
D.fnG=new B.b7(["c",0,"l",0])
D.fo5=new B.b7(["l",1,"c",1])
D.du7=w([D.fnG,D.fo5],x.o)
D.dtC=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.ePl=new C.nb("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.dtr,D.du7,D.dtC)
D.dNt=new B.bn(D.aak,[0.7],x.J)
D.fp8=new B.e1(["t","turbine",0.25,0.3,D.dNt])
D.foT=new B.e1(["m","motor",0.75,0.3,A.jM])
D.dn1=w([D.fp8,D.foT],x.d)
D.foy=new B.b7(["t",0,"m",0])
D.foa=new B.b7(["m",1,"t",1])
D.dlQ=w([D.foy,D.foa],x.o)
D.ds6=w(["wind","turbine","windmill","water","hydro"],x.s)
D.ePi=new C.nb("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.dn1,D.dlQ,D.ds6)
D.aLA=new B.bn(D.Ky,[9],x.J)
D.abr=new B.e1(["b","battery",0.2,0.3,D.aLA])
D.aUn=new B.e1(["r","radio",0.8,0.3,A.jM])
D.dFZ=w([D.abr,D.Fr,D.aUn],x.d)
D.fos=new B.b7(["s",1,"r",0])
D.aUj=new B.b7(["r",1,"b",1])
D.cfr=w([D.Fp,D.fos,D.aUj],x.o)
D.dEl=w(["radio","music","listen"],x.s)
D.ePu=new C.nb("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dFZ,D.cfr,D.dEl)
D.dOx=new B.bn(D.Ky,[12],x.J)
D.aUm=new B.e1(["b","battery",0.2,0.3,D.dOx])
D.fpx=new B.e1(["t","tv",0.8,0.3,A.jM])
D.dbK=w([D.aUm,D.Fr,D.fpx],x.d)
D.fot=new B.b7(["s",1,"t",0])
D.aUk=new B.b7(["t",1,"b",1])
D.dx5=w([D.Fp,D.fot,D.aUk],x.o)
D.dFX=w(["tv","television","screen","watch"],x.s)
D.ePf=new C.nb("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.dbK,D.dx5,D.dFX)
D.fpm=new B.e1(["z","buzzer",0.8,0.3,A.jM])
D.cRg=w([D.L0,D.Fr,D.fpm],x.d)
D.fou=new B.b7(["s",1,"z",0])
D.foM=new B.b7(["z",1,"b",1])
D.d5H=w([D.Fp,D.fou,D.foM],x.o)
D.dCw=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.ePr=new C.nb("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cRg,D.d5H,D.dCw)
D.fp2=new B.e1(["h","heater",0.8,0.3,A.jM])
D.dqA=w([D.abr,D.Fr,D.fp2],x.d)
D.foo=new B.b7(["s",1,"h",0])
D.fnT=new B.b7(["h",1,"b",1])
D.d6B=w([D.Fp,D.foo,D.fnT],x.o)
D.cAK=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.ePg=new C.nb("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.dqA,D.d6B,D.cAK)
D.fpz=new B.e1(["s","solar",0.2,0.25,D.a8M])
D.dOC=new B.bn(D.aO3,[100],x.J)
D.fpC=new B.e1(["r","resistor",0.55,0.25,D.dOC])
D.fpL=new B.e1(["c","capacitor",0.85,0.25,A.jM])
D.foZ=new B.e1(["q","resistor",0.55,0.6,D.aLD])
D.fpA=new B.e1(["d","led",0.85,0.6,A.jM])
D.dwu=w([D.fpz,D.fpC,D.fpL,D.foZ,D.fpA],x.d)
D.fon=new B.b7(["s",0,"r",0])
D.foi=new B.b7(["r",1,"c",0])
D.fnI=new B.b7(["c",1,"s",1])
D.fnH=new B.b7(["c",0,"q",0])
D.foh=new B.b7(["q",1,"d",0])
D.fnL=new B.b7(["d",1,"c",1])
D.djt=w([D.fon,D.foi,D.fnI,D.fnH,D.foh,D.fnL],x.o)
D.dsH=w(["capacitor","store","charge","flash"],x.s)
D.ePt=new C.nb("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.dwu,D.djt,D.dsH)
D.fpb=new B.e1(["b","battery",0.15,0.3,D.a8Q])
D.fpU=new B.e1(["l1","bulb",0.5,0.3,A.jM])
D.fpj=new B.e1(["l2","bulb",0.85,0.3,A.jM])
D.d9y=w([D.fpb,D.fpU,D.fpj],x.d)
D.fnB=new B.b7(["b",0,"l1",0])
D.fo2=new B.b7(["l1",1,"l2",0])
D.fo3=new B.b7(["l2",1,"b",1])
D.dnS=w([D.fnB,D.fo2,D.fo3],x.o)
D.dFH=w(["series","two bulbs","dim"],x.s)
D.ePj=new C.nb("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.d9y,D.dnS,D.dFH)
D.eB_={volts:0,charge:1}
D.dOG=new B.bn(D.eB_,[1.5,0],x.J)
D.fpI=new B.e1(["b","battery",0.75,0.3,D.dOG])
D.d8R=w([D.aUq,D.fpI],x.d)
D.fol=new B.b7(["s",0,"b",0])
D.fnF=new B.b7(["b",1,"s",1])
D.djO=w([D.fol,D.fnF],x.o)
D.dsR=w(["charge","rechargeable","flat","recharge"],x.s)
D.ePh=new C.nb("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.d8R,D.djO,D.dsR)
D.dOw=new B.bn(D.Ky,[4.5],x.J)
D.fp4=new B.e1(["b","battery",0.2,0.3,D.dOw])
D.aUl=new B.e1(["p","phone",0.8,0.3,A.jM])
D.dmQ=w([D.fp4,D.Fr,D.aUl],x.d)
D.foq=new B.b7(["s",1,"p",0])
D.abq=new B.b7(["p",1,"b",1])
D.dBe=w([D.Fp,D.foq,D.abq],x.o)
D.dCZ=w(["phone","charger","usb","mobile"],x.s)
D.ePn=new C.nb("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.dmQ,D.dBe,D.dCZ)
D.foQ=new B.e1(["f","fan",0.8,0.3,A.jM])
D.csJ=w([D.L0,D.foQ],x.d)
D.fnA=new B.b7(["b",0,"f",0])
D.fnR=new B.b7(["f",1,"b",1])
D.d7e=w([D.fnA,D.fnR],x.o)
D.dvn=w(["fan","cool","air","wind"],x.s)
D.ePw=new C.nb("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.csJ,D.d7e,D.dvn)
D.fpq=new B.e1(["b","battery",0.15,0.2,D.a8Q])
D.foR=new B.e1(["a","ammeter",0.5,0.2,A.jM])
D.foP=new B.e1(["l","bulb",0.85,0.2,A.jM])
D.fps=new B.e1(["v","voltmeter",0.5,0.6,A.jM])
D.dtd=w([D.fpq,D.foR,D.foP,D.fps],x.d)
D.fny=new B.b7(["b",0,"a",0])
D.fnw=new B.b7(["a",1,"l",0])
D.foA=new B.b7(["v",0,"l",0])
D.foB=new B.b7(["v",1,"l",1])
D.djF=w([D.fny,D.fnw,D.aUh,D.foA,D.foB],x.o)
D.dJv=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.ePs=new C.nb("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.dtd,D.djF,D.dJv)
D.fpX=new B.e1(["b","battery",0.15,0.2,D.aLA])
D.fpa=new B.e1(["t","tv",0.55,0.2,A.jM])
D.aLB=new B.bn(D.Ky,[5],x.J)
D.foW=new B.e1(["c","buck",0.4,0.5,D.aLB])
D.fpc=new B.e1(["p","phone",0.8,0.5,A.jM])
D.dgS=w([D.fpX,D.fpa,D.foW,D.fpc],x.d)
D.fnE=new B.b7(["b",0,"t",0])
D.aUf=new B.b7(["b",0,"c",0])
D.aUg=new B.b7(["c",1,"p",0])
D.dmN=w([D.fnE,D.aUk,D.aUf,D.aUg,D.abq],x.o)
D.deI=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.ePk=new C.nb("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.dgS,D.dmN,D.deI)
D.foY=new B.e1(["c","buck",0.5,0.3,D.aLB])
D.d6n=w([D.aUm,D.foY,D.aUl],x.d)
D.dce=w([D.aUf,D.aUg,D.abq],x.o)
D.cEi=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.ePe=new C.nb("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.d6n,D.dce,D.cEi)
D.fph=new B.e1(["d","diode",0.5,0.3,A.jM])
D.do7=w([D.abr,D.fph,D.aUn],x.d)
D.fnz=new B.b7(["b",0,"d",0])
D.fnM=new B.b7(["d",1,"r",0])
D.cTQ=w([D.fnz,D.fnM,D.aUj],x.o)
D.dem=w(["diode","protect","backwards","one way"],x.s)
D.ePq=new C.nb("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.do7,D.cTQ,D.dem)
D.Ts=w([D.ePo,D.ePv,D.ePm,D.ePp,D.ePl,D.ePi,D.ePu,D.ePf,D.ePr,D.ePg,D.ePt,D.ePj,D.ePh,D.ePn,D.ePw,D.ePs,D.ePk,D.ePe,D.ePq],B.as("N<nb>"))
D.i0a=new C.Hi("Moon",1.62,A.d0,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.i08=new C.Hi("Mars",3.71,A.aC,"Mars has about 38 percent of Earth's gravity.")
D.i0b=new C.Hi("Mercury",3.7,A.kJ,"Mercury is small, so its gravity is like Mars.")
D.i05=new C.Hi("Venus",8.87,A.aQ,"Venus is almost as heavy as Earth, with strong gravity.")
D.i07=new C.Hi("Earth",9.81,A.aH,"On Earth gravity is strong, and the air also slows you down.")
D.i09=new C.Hi("Neptune",11.15,A.dh,"Neptune pulls a little harder than Earth.")
D.i06=new C.Hi("Jupiter",24.79,A.cW,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.u4=w([D.i0a,D.i08,D.i0b,D.i05,D.i07,D.i09,D.i06],B.as("N<Hi>"))
D.djr=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.dkf=w([0.2,0.5,0.8],x.n)
D.b4u=new C.LA(0,"accordion")
D.d7C=w([A.k0,A.Ag,A.A1],x.x)
D.dgc=w(["Mail","SMS","Ad"],x.s)
D.d8j=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hZk=new C.Bj(D.b4u,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aEz,D.d7C,D.dgc,D.d8j)
D.afg=new C.LA(1,"flip")
D.dsB=w([A.rp,A.E3,A.rs],x.x)
D.dmv=w(["Unlock","Verify","Secure"],x.s)
D.d6i=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hZj=new C.Bj(D.afg,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.aE4,D.dsB,D.dmv,D.d6i)
D.b4v=new C.LA(2,"towers")
D.dl6=w([A.Ae,A.mG,A.iw],x.x)
D.dky=w(["Save","Grow","Earn"],x.s)
D.cUR=w(["","",""],x.s)
D.hZl=new C.Bj(D.b4v,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a73,D.dl6,D.dky,D.cUR)
D.afh=new C.LA(3,"assemble")
D.dtG=w([A.og,A.fP,A.eh],x.x)
D.dfr=w(["Launch","Charge","Shine"],x.s)
D.dpy=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hZn=new C.Bj(D.afh,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.aCp,D.dtG,D.dfr,D.dpy)
D.b4w=new C.LA(4,"carousel")
D.dts=w([A.bd,A.eJ],x.O)
D.dgn=w([A.np,A.as2,A.R8],x.x)
D.da3=w(["Explore","Discover","Learn"],x.s)
D.dmX=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hZi=new C.Bj(D.b4w,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.dts,D.dgn,D.da3,D.dmX)
D.b4x=new C.LA(5,"burst")
D.dkt=w([A.hZ,A.v0],x.O)
D.d8c=w([A.kn,A.m5,A.hQ],x.x)
D.d8B=w(["Cheer","Win","Love"],x.s)
D.dbc=w(["Make some noise","First place","Share the joy"],x.s)
D.hZm=new C.Bj(D.b4x,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.dkt,D.d8c,D.d8B,D.dbc)
D.aDM=w([D.hZk,D.hZj,D.hZl,D.hZn,D.hZi,D.hZm],B.as("N<Bj>"))
D.fib=new B.b1("skin","Skin",A.a4x)
D.fjW=new B.b1("muscle","Muscles",A.QH)
D.fjy=new B.b1("organ","Organs",A.hQ)
D.bU_=new B.a_(62747,"MaterialIcons",!1)
D.fjI=new B.b1("bone","Skeleton",D.bU_)
D.fk3=new B.b1("vessel","Blood vessels",A.q9)
D.dlc=w([D.fib,D.fjW,D.fjy,D.fjI,D.fk3],x.r)
D.frW=new C.vJ("Simple legs","Light. Land gently.",0.15,0.2)
D.frY=new C.vJ("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.fs0=new C.vJ("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.Eq=w([D.frW,D.frY,D.fs0],x._)
D.fn6=new B.b7(["beat",0.18,0.28,0])
D.fov=new B.b7(["burst",0.7,0.2,0])
D.foG=new B.b7(["delay",0.45,0.5,1])
D.foc=new B.b7(["ripple",0.75,0.6,3])
D.df7=w([D.fn6,D.fov,D.foG,D.foc],x.e)
D.drR=w([Q.lm,R.KZ,F.W1],x.u)
D.hWa=new C.H3("First spark","A clock lights a burst and a ripple",D.df7,D.drR)
D.fnQ=new B.b7(["beat",0.15,0.3,1])
D.fln=new B.b7(["ripple",0.62,0.15,0])
D.foC=new B.b7(["delay",0.4,0.45,0])
D.fns=new B.b7(["ripple",0.7,0.45,0])
D.fn1=new B.b7(["delay",0.4,0.7,1])
D.fof=new B.b7(["shake",0.75,0.75,0])
D.dGY=w([D.fnQ,D.fln,D.foC,D.fns,D.fn1,D.fof],x.e)
D.eRp=new B.y(2,4)
D.aTU=new B.y(4,5)
D.djf=w([Q.lm,R.KZ,F.W1,D.eRp,D.aTU],x.u)
D.hWc=new C.H3("Heartbeat","Two thumps, then a shake",D.dGY,D.djf)
D.fnc=new B.b7(["dice",0.15,0.7,1])
D.foI=new B.b7(["echo",0.4,0.7,0])
D.fno=new B.b7(["comet",0.7,0.5,4])
D.fow=new B.b7(["burst",0.72,0.2,1])
D.fnN=new B.b7(["burst",0.3,0.25,0])
D.fnd=new B.b7(["pop",0.55,0.85,0])
D.cAh=w([D.fnc,D.foI,D.fno,D.fow,D.fnN,D.fnd],x.e)
D.eQJ=new B.y(1,3)
D.eQK=new B.y(1,4)
D.aTQ=new B.y(0,5)
D.dtm=w([Q.lm,S.wd,D.eQJ,D.eQK,D.aTQ],x.u)
D.hWb=new C.H3("Fireworks","Dice launch comets that burst in colour",D.cAh,D.dtm)
D.fnk=new B.b7(["beat",0.15,0.2,2])
D.fo_=new B.b7(["chance",0.4,0.2,0])
D.fn9=new B.b7(["ball",0.7,0.12,3])
D.fmV=new B.b7(["chance",0.4,0.5,1])
D.foH=new B.b7(["ball",0.3,0.08,1])
D.fmc=new B.b7(["ripple",0.7,0.55,3])
D.ctd=w([D.fnk,D.fo_,D.fn9,D.fmV,D.foH,D.fmc],x.e)
D.eRq=new B.y(2,5)
D.cR_=w([Q.lm,S.wd,R.abh,F.W2,D.eRq],x.u)
D.hW9=new C.H3("Rain","Balls fall at random and splash",D.ctd,D.cR_)
D.fo0=new B.b7(["beat",0.12,0.45,2])
D.fox=new B.b7(["toggle",0.38,0.2,0])
D.foE=new B.b7(["wash",0.7,0.15,4])
D.fnb=new B.b7(["count3",0.38,0.45,0])
D.foz=new B.b7(["burst",0.72,0.4,0])
D.fnO=new B.b7(["light",0.55,0.7,1])
D.fmW=new B.b7(["pop",0.8,0.8,4])
D.dws=w([D.fo0,D.fox,D.foE,D.fnb,D.foz,D.fnO,D.fmW],x.e)
D.eRX=new B.y(3,6)
D.cwq=w([Q.lm,S.wd,R.abh,F.W2,D.aTQ,D.eRX],x.u)
D.hW7=new C.H3("Disco","A beat drives lights, washes and bursts",D.dws,D.cwq)
D.foL=new B.b7(["button",0.12,0.2,0])
D.fmD=new B.b7(["delay",0.34,0.2,1])
D.foK=new B.b7(["light",0.56,0.2,1])
D.foD=new B.b7(["delay",0.56,0.45,1])
D.fo1=new B.b7(["ball",0.34,0.6,0])
D.fmU=new B.b7(["delay",0.34,0.8,1])
D.fld=new B.b7(["burst",0.7,0.8,5])
D.cgg=w([D.foL,D.fmD,D.foK,D.foD,D.fo1,D.fmU,D.fld],x.e)
D.eUc=new B.y(5,6)
D.dCH=w([Q.lm,S.wd,F.W1,F.W2,D.aTU,D.eUc],x.u)
D.hW8=new C.H3("Domino","Tap the button and watch it run down the line",D.cgg,D.dCH)
D.aE8=w([D.hWa,D.hWc,D.hWb,D.hW9,D.hW7,D.hW8],B.as("N<H3>"))
D.dr2=w([0.05,0.15,0.25],x.n)
D.ds4=w([1.5,3,4.5,9,12],x.n)
D.fgo=new B.b1("dice","Dice",A.oa)
D.fhI=new B.b1("coin","Coin",V.A7)
D.fjZ=new B.b1("num","Number",A.xA)
D.dsj=w([D.fgo,D.fhI,D.fjZ],x.r)
D.dsn=w(["skin","muscle","organ","bone","vessel"],x.s)
D.aEe=w([A.c1,A.aQ,A.bf,A.aH,A.bj,A.c5,A.cW,A.fK],x.O)
D.dtt=w([A.c5,A.aH,A.eH,A.bf],x.O)
D.duC=w([],x.h)
D.eIt=new C.es("battery","Battery","\ud83d\udd0b",A.bf,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.eIz=new C.es("solar","Solar panel","\u2600\ufe0f",A.bu,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.eJd=new C.es("crank","Hand crank","\ud83d\udd04",A.cW,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.eIQ=new C.es("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aH,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.eIl=new C.es("buck","Step-down converter","\ud83d\udd3d",A.fK,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.eIO=new C.es("regulator","5 V regulator","\ud83e\uddca",A.bQ,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.eJi=new C.es("diode","Diode","\u27a1\ufe0f",A.aQ,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.eJ_=new C.es("ldr","Light sensor","\ud83c\udf1e",A.eH,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.eIE=new C.es("switch","Switch","\ud83c\udf9a\ufe0f",A.bj,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.eJf=new C.es("fuse","Fuse","\ud83e\uddef",A.c1,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.eId=new C.es("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.fK,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.eJ0=new C.es("resistor","Resistor","\u3030\ufe0f",A.aQ,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.eJ2=new C.es("bulb","Light bulb","\ud83d\udca1",A.eH,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.eIB=new C.es("led","LED","\ud83d\udd34",A.aC,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.eIF=new C.es("motor","Motor","\u2699\ufe0f",A.bQ,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.eIX=new C.es("buzzer","Buzzer","\ud83d\udd14",A.c5,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.eIu=new C.es("heater","Heater","\ud83d\udd25",A.cW,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.eIS=new C.es("capacitor","Capacitor","\ud83e\udeab",A.cw,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.eIK=new C.es("radio","Radio","\ud83d\udcfb",A.oN,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.eIH=new C.es("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.bd,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.eIk=new C.es("voltmeter","Voltmeter","\ud83e\udded",A.bw,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.eIr=new C.es("ammeter","Ammeter","\ud83d\udcdf",A.aQ,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.eIx=new C.es("fan","Fan","\ud83c\udf00",A.aH,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.eJk=new C.es("speaker","Speaker","\ud83d\udd0a",A.c5,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.eJ9=new C.es("clock","Digital clock","\u23f0",A.bf,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.eIN=new C.es("calculator","Calculator","\ud83e\uddee",A.Ns,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.eIq=new C.es("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cw,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.eJj=new C.es("router","WiFi router","\ud83d\udcf6",A.fK,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.eJm=new C.es("siren","Siren","\ud83d\udea8",A.aC,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.eIg=new C.es("toycar","Toy car","\ud83d\ude97",A.cW,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.eJn=new C.es("kettle","Kettle","\ud83e\uded6",A.ne,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.eIo=new C.es("lamp","Desk lamp","\ud83e\ude94",A.eH,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.eIA=new C.es("lights","Party lights","\ud83c\udf84",A.oN,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.eIL=new C.es("fridge","Fridge","\ud83e\uddca",A.hm,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.eIi=new C.es("washer","Washing machine","\ud83e\udee7",A.cw,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.eJa=new C.es("blender","Blender","\ud83e\udd64",A.c1,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.eII=new C.es("drone","Drone","\ud83d\ude81",A.bQ,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.eIn=new C.es("drill","Power drill","\ud83d\udd29",A.aQ,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.eIM=new C.es("torch","Torch","\ud83d\udd26",A.bM,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.eJ7=new C.es("neon","Neon sign","\ud83e\udea7",A.c5,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.eIj=new C.es("microwave","Microwave","\ud83c\udf72",A.cW,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.eJ1=new C.es("doorbell","Doorbell","\ud83d\udd14",A.bu,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.eIw=new C.es("camera","Security camera","\ud83d\udcf7",A.an,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.eIW=new C.es("console","Game console","\ud83c\udfae",A.bj,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.eJc=new C.es("heartmon","Heart monitor","\ud83e\ude7a",A.hJ,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.eIh=new C.es("aquarium","Aquarium","\ud83d\udc20",A.bd,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.eIR=new C.es("lighthouse","Lighthouse","\ud83d\uddfc",A.eH,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.eIZ=new C.es("discoball","Disco ball","\ud83e\udea9",A.oN,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.eJh=new C.es("robot","Robot","\ud83e\udd16",A.aH,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.eIf=new C.es("toaster","Toaster","\ud83c\udf5e",A.ec,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.eJl=new C.es("ledstrip","LED strip","\ud83c\udf08",A.c5,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.eJ6=new C.es("pump","Water pump","\ud83d\udeb0",A.aH,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.eIT=new C.es("hairdryer","Hair dryer","\ud83d\udca8",A.hZ,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.eJ4=new C.es("headphones","Headphones","\ud83c\udfa7",A.bj,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.eIp=new C.es("smartwatch","Apple Watch Ultra","\u231a",A.bw,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.eJg=new C.es("tablet","iPad Pro M5","\ud83d\udcf2",A.cw,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.eIc=new C.es("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hJ,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.eIJ=new C.es("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bv,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.eIC=new C.es("appletv","Apple TV 4K","\ud83d\udcfa",A.bP,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.eIY=new C.es("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.wP,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.eIe=new C.es("iphonefold","iPhone Fold","\ud83d\udcf1",A.b_,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.eIs=new C.es("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.dh,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.eJe=new C.es("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cI,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.eIU=new C.es("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bk,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.eIP=new C.es("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.c8,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.eJ5=new C.es("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.aC,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.eID=new C.es("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.bf,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.eIV=new C.es("honor","Honor Magic V5","\ud83d\udcf1",A.cw,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.eJ3=new C.es("vivo","vivo X300 Pro","\ud83d\udcf1",A.cW,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.eJ8=new C.es("ereader","Kindle Scribe","\ud83d\udcd6",A.bv,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.eIb=new C.es("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.ci,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.eIG=new C.es("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cI,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.eIy=new C.es("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.bd,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.eIm=new C.es("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.eH,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.eIv=new C.es("carscreen","Luxury car touchscreen","\ud83d\ude98",A.aC,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.eJb=new C.es("vision","Apple Vision Pro","\ud83e\udd7d",A.bj,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.TS=w([D.eIt,D.eIz,D.eJd,D.eIQ,D.eIl,D.eIO,D.eJi,D.eJ_,D.eIE,D.eJf,D.eId,D.eJ0,D.eJ2,D.eIB,D.eIF,D.eIX,D.eIu,D.eIS,D.eIK,D.eIH,D.eIk,D.eIr,D.eIx,D.eJk,D.eJ9,D.eIN,D.eIq,D.eJj,D.eJm,D.eIg,D.eJn,D.eIo,D.eIA,D.eIL,D.eIi,D.eJa,D.eII,D.eIn,D.eIM,D.eJ7,D.eIj,D.eJ1,D.eIw,D.eIW,D.eJc,D.eIh,D.eIR,D.eIZ,D.eJh,D.eIf,D.eJl,D.eJ6,D.eIT,D.eJ4,D.eIp,D.eJg,D.eIc,D.eIJ,D.eIC,D.eIY,D.eIe,D.eIs,D.eJe,D.eIU,D.eIP,D.eJ5,D.eID,D.eIV,D.eJ3,D.eJ8,D.eIb,D.eIG,D.eIy,D.eIm,D.eIv,D.eJb],B.as("N<es>"))
D.dvh=w([5,10,15,25,45,60],x.t)
D.dvF=w([-0.045,0.03,-0.015],x.n)
D.aEH=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.vT=w([0.05,0.2,0.35],x.n)
D.aEL=w([A.d0,A.iL,A.v3,A.GL],x.O)
D.bco=new B.aa(0,A.H,A.i0,A.dS,6)
D.dyG=w([D.bco],x.V)
D.ePS=new B.y(0,"AND")
D.eQM=new B.y(1,"Adder")
D.eRr=new B.y(2,"Blinker")
D.eRY=new B.y(3,"Memory")
D.dzu=w([D.ePS,D.eQM,D.eRr,D.eRY],x.L)
D.aEV=w([-104,0,104],x.n)
D.aEX=w([-14,3],x.n)
D.dAu=w([-8,0,8],x.n)
D.aF4=w([-92,0,92],x.n)
D.dAY=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.frT=new C.vJ("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.fs_=new C.vJ("Medium tank","Balanced.",0.35,1)
D.frZ=new C.vJ("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.U7=w([D.frT,D.fs_,D.frZ],x._)
D.ol=w([0.04,0.2,0.36],x.n)
D.aFg=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.fjx=new B.b1(D.b4u,"Fold",V.at_)
D.fir=new B.b1(D.afg,"Flip",A.DK)
D.bUg=new B.a_(62889,"MaterialIcons",!1)
D.fjV=new B.b1(D.b4v,"Rise",D.bUg)
D.atc=new B.a_(983870,"MaterialIcons",!1)
D.ffJ=new B.b1(D.afh,"Assemble",D.atc)
D.ffW=new B.b1(D.b4w,"Spin",D.arF)
D.ffQ=new B.b1(D.b4x,"Pop",A.kn)
D.dCE=w([D.fjx,D.fir,D.fjV,D.ffJ,D.ffW,D.ffQ],B.as("N<+(LA,n,a_)>"))
D.aFl=w([A.c5,A.eH,A.bw,A.aH,A.bj,A.c1],x.O)
D.dD4=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dEa=w([3,4.5,5,6,9],x.n)
D.bd3=new B.aa(0,A.H,A.b9,A.J,16)
D.dEE=w([D.bd3],x.V)
D.h9w=new B.D("\ud83e\uddcd",null,S.LR,null,null,null,null,null,null,null,null,null)
D.cfd=new B.Ja(5,null,null,A.by,A.c5,null,null,null,null)
D.fyZ=new B.a4(150,null,D.cfd,null)
D.fRt=new B.F(!0,A.ac,null,null,null,null,14,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hcQ=new B.D("Getting the body ready...",null,D.fRt,null,null,null,null,null,null,null,null,null)
D.h9z=new B.D("Real 3D anatomy, kept on your phone",null,Af.BB,null,null,null,null,null,null,null,null,null)
D.dEH=w([D.h9w,A.aB,D.fyZ,A.af,D.hcQ,A.at,D.h9z],x.p)
D.dFg=w(["solar","turbine","crank","pot"],x.s)
D.dFL=w([0,0.35,0.75,1],x.n)
D.dHd=w(["volts","level","ohms","on"],x.s)
D.boO=new B.u(1,0.23137254901960785,0.43529411764705883,0.8470588235294118,A.q)
D.bzV=new B.u(1,0.0392156862745098,0.10196078431372549,0.25098039215686274,A.q)
D.dHh=w([A.al_,D.boO,A.m_,D.bzV],x.O)
D.dIP=w([A.k0,A.Ag,A.A1,A.rp,A.E3,A.rs,A.Ae,A.mG,A.iw,A.og,A.fP,A.eh,A.hQ,A.ih,A.m5,A.kP,A.rr,A.q7,A.lG,A.Ip,A.vG,A.DJ,A.DH,A.R5,A.Io,A.DT,A.QH,A.aso,H.at8,A.kn],x.x)
D.eyk={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.hO5=new C.yY("Switch",F.p4,A.bu,0,"Tap it to turn it ON or OFF.")
D.hO1=new C.yY("Blinker",A.mF,A.bw,0,"Turns itself ON and OFF. Tap to change the speed.")
D.hO2=new C.yY("AND",D.atc,A.cw,2,"ON only when BOTH inputs are ON.")
D.bVN=new B.a_(63671,"MaterialIcons",!1)
D.hO0=new C.yY("OR",D.bVN,A.bj,2,"ON when EITHER input is ON.")
D.hO3=new C.yY("XOR",A.a4p,A.c5,2,"ON when the inputs are DIFFERENT.")
D.hNY=new C.yY("NAND",A.tN,A.aH,2,"OFF only when BOTH inputs are ON.")
D.bUR=new B.a_(63176,"MaterialIcons",!1)
D.hNZ=new C.yY("NOR",D.bUR,A.fK,2,"ON only when BOTH inputs are OFF.")
D.hO_=new C.yY("NOT",W.DW,A.cW,1,"Flips the signal: ON becomes OFF.")
D.hO4=new C.yY("Light",A5.lf,A.eH,1,"Glows when its input is ON.")
D.hO6=new C.yY("Buzzer",T.p6,A.c1,1,"Beeps while its input is ON.")
D.AV=new B.bn(D.eyk,[D.hO5,D.hO1,D.hO2,D.hO0,D.hO3,D.hNY,D.hNZ,D.hO_,D.hO4,D.hO6],B.as("bn<n,yY>"))
D.eA9={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22,smartwatch:23}
D.Bm=new C.Ky(0,"tv")
D.ftt=new C.mm("Samsung Neo QLED 8K",D.Bm,F.z3,A.aH)
D.ftj=new C.mm("LG OLED evo G5",D.Bm,A.ey,A.hJ)
D.fta=new C.mm("Sony Bravia 9",D.Bm,A.t9,A.bv)
D.fte=new C.mm("Apple TV 4K",D.Bm,A.dT,A.bP)
D.ftb=new C.mm("Bang and Olufsen Beovision",D.Bm,F.Co,F.wP)
D.abC=new C.Ky(1,"iphone")
D.aUN=new C.mm("iPhone 18 Pro Max",D.abC,D.amy,A.ci)
D.Bo=new C.Ky(3,"fold")
D.bA8=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.fto=new C.mm("iPhone Fold",D.Bo,D.bA8,A.b_)
D.Bn=new C.Ky(2,"android")
D.ftp=new C.mm("Samsung Galaxy S26 Ultra",D.Bn,F.Np,A.dh)
D.bsq=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.fth=new C.mm("Samsung Galaxy Z Fold7",D.Bo,D.bsq,A.cI)
D.ftd=new C.mm("Google Pixel 10 Pro XL",D.Bn,A.d0,A.bk)
D.ftl=new C.mm("Xiaomi 16 Ultra",D.Bn,A.iu,A.c8)
D.ftg=new C.mm("Huawei Mate 80 Pro Max",D.Bn,A.eu,A.aC)
D.ftc=new C.mm("OPPO Find X9 Ultra",D.Bn,A.ej,A.bf)
D.ftv=new C.mm("Honor Magic V5",D.Bo,A.dl,A.cw)
D.fti=new C.mm("vivo X300 Pro",D.Bn,A.h_,A.cW)
D.aUO=new C.Ky(4,"tablet")
D.ftn=new C.mm("iPad Pro M5",D.aUO,A.d0,A.aH)
D.abD=new C.Ky(5,"reader")
D.ftw=new C.mm("Kindle Scribe",D.abD,A.cU,A.bv)
D.y2=new C.Ky(6,"computer")
D.ftm=new C.mm("MacBook Pro M5 Max",D.y2,A.d0,A.ci)
D.fts=new C.mm("iMac 32 inch",D.y2,A.bP,A.cI)
D.ftk=new C.mm("Pro Display XDR 8K",D.y2,A.iu,A.bd)
D.ftf=new C.mm("Sony Laser Projector",D.y2,A.cx,A.eH)
D.ftq=new C.mm("Luxury car touchscreen",D.y2,M.ni,A.aC)
D.ftu=new C.mm("Apple Vision Pro",D.y2,A.cz,A.bj)
D.ftr=new C.mm("Apple Watch Ultra",D.Bo,F.Co,A.bw)
D.mN=new B.bn(D.eA9,[D.ftt,D.ftj,D.fta,D.fte,D.ftb,D.aUN,D.fto,D.ftp,D.fth,D.ftd,D.ftl,D.ftg,D.ftc,D.ftv,D.fti,D.ftn,D.ftw,D.ftm,D.fts,D.ftk,D.ftf,D.ftq,D.ftu,D.ftr],B.as("bn<n,mm>"))
D.d6U=w([A.z],x.M)
D.d7o=w([A.aw,A.aD],x.M)
D.dib=w([A.aw,A.z,A.aD],x.M)
D.djV=w([A.aw,A.lT,A.z,A.ls,A.aD],x.M)
D.dzq=w([A.aw,A.lT,A.a5,A.a9,A.ls,A.aD],x.M)
D.dNX=new B.d1([1,D.d6U,2,D.d7o,3,D.dib,4,A.aFX,5,D.djV,6,D.dzq],B.as("d1<G,ai<di>>"))
D.eAX={Calm:0,Box:1,Sleep:2}
D.cOj=w([4,2,6,0],x.n)
D.cOq=w([4,4,4,4],x.n)
D.cOr=w([4,7,8,0],x.n)
D.UB=new B.bn(D.eAX,[D.cOj,D.cOq,D.cOr],B.as("bn<n,ai<H>>"))
D.eyw={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.yC=new C.a2r(0,"source")
D.djj=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hUO=new C.qL("Clock",A.mF,D.yC,A.bw,D.djj)
D.hUK=new C.qL("Button",A.DZ,D.yC,A.aQ,A.M)
D.dEn=w(["random","quick","slow"],x.s)
D.hUV=new C.qL("Dice",A.oa,D.yC,A.c5,D.dEn)
D.bVp=new B.a_(63484,"MaterialIcons",!1)
D.Ga=new C.a2r(1,"logic")
D.dJL=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hUR=new C.qL("Delay",D.bVp,D.Ga,A.cw,D.dJL)
D.dvp=w(["fast","mid","slow"],x.s)
D.hUW=new C.qL("Echo",A.asE,D.Ga,A.bj,D.dvp)
D.hUT=new C.qL("Every 2nd",W.DW,D.Ga,A.fK,A.M)
D.bV5=new B.a_(63309,"MaterialIcons",!1)
D.hUQ=new C.qL("Every 3rd",D.bV5,D.Ga,A.aH,A.M)
D.cfy=w(["50%","25%","75%"],x.s)
D.hUY=new C.qL("Chance",A8.ate,D.Ga,A.cW,D.cfy)
D.rX=new C.a2r(2,"out")
D.hUM=new C.qL("Light",A5.lf,D.rX,A.eH,A.M)
D.hUN=new C.qL("Burst",A.kn,D.rX,A.c5,A.M)
D.hUL=new C.qL("Ripple",A.Ak,D.rX,A.bd,A.M)
D.hUU=new C.qL("Ball",A.asR,D.rX,A.cW,A.M)
D.hUS=new C.qL("Comet",A.og,D.rX,A.bj,A.M)
D.bWV=new B.a_(983669,"MaterialIcons",!1)
D.hUX=new C.qL("Shake",D.bWV,D.rX,A.c1,A.M)
D.hUZ=new C.qL("Pop",A.DF,D.rX,A.bf,A.M)
D.hUP=new C.qL("Wash",A.QL,D.rX,A.pK,A.M)
D.nt=new B.bn(D.eyw,[D.hUO,D.hUK,D.hUV,D.hUR,D.hUW,D.hUT,D.hUQ,D.hUY,D.hUM,D.hUN,D.hUL,D.hUU,D.hUS,D.hUX,D.hUZ,D.hUP],B.as("bn<n,qL>"))
D.eyW={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bCW=new C.h5(20,4,13,!1)
D.bDm=new C.h5(14,5,13.5,!1)
D.bDd=new C.h5(9,2.4,10,!1)
D.bDr=new C.h5(7,5,12.5,!1)
D.bDg=new C.h5(8,3.5,12,!1)
D.bCS=new C.h5(15,2,6,!1)
D.bDp=new C.h5(45,6,13.5,!0)
D.bD7=new C.h5(10,8,13.5,!1)
D.bD_=new C.h5(25,3,12,!0)
D.bD5=new C.h5(35,4,12,!0)
D.bD6=new C.h5(40,4.5,9.5,!0)
D.bD8=new C.h5(55,3,9,!0)
D.bCT=new C.h5(18,3,9,!1)
D.bDo=new C.h5(22,4,13.5,!1)
D.bDh=new C.h5(16,5,13.5,!1)
D.bD3=new C.h5(30,4,9,!0)
D.bDA=new C.h5(5,3.5,13,!1)
D.bDb=new C.h5(25,3,13.5,!0)
D.bDk=new C.h5(14,2.5,9,!1)
D.bDa=new C.h5(6,6,13,!1)
D.bDs=new C.h5(30,1.2,5,!0)
D.bDz=new C.h5(35,3,4.5,!0)
D.bDv=new C.h5(20,4.5,7.5,!0)
D.bD9=new C.h5(55,5.5,13.5,!0)
D.bCR=new C.h5(45,5.5,13.5,!0)
D.bDl=new C.h5(40,5.5,13.5,!0)
D.bDy=new C.h5(60,6,13.5,!0)
D.an3=new C.h5(28,4,7,!0)
D.HC=new C.h5(25,4,7,!0)
D.bD2=new C.h5(30,4,7,!0)
D.bCY=new C.h5(22,4,7,!0)
D.bCZ=new C.h5(24,4,7,!0)
D.bDc=new C.h5(60,3,5.5,!0)
D.bCU=new C.h5(18,9,14,!0)
D.bD0=new C.h5(25,9,14,!0)
D.an4=new C.h5(30,8,14,!0)
D.bCX=new C.h5(20,8,14,!0)
D.bD4=new C.h5(30,9,14,!0)
D.bDt=new C.h5(22,5,9.5,!0)
D.bCV=new C.h5(30,2.5,10.5,!0)
D.bDi=new C.h5(50,5.5,13.5,!0)
D.bDx=new C.h5(12,2,9.5,!1)
D.bDf=new C.h5(16,1.3,9.5,!0)
D.bDq=new C.h5(40,2.5,7,!0)
D.bDw=new C.h5(60,1.2,4.8,!0)
D.bDu=new C.h5(18,5,13.5,!0)
D.bDn=new C.h5(8,2,9.5,!1)
D.bDe=new C.h5(12,2.5,8,!1)
D.bD1=new C.h5(20,3.5,13.5,!0)
D.bDj=new C.h5(3.5,3,13,!1)
D.AW=new B.bn(D.eyW,[D.bCW,D.bDm,D.bDd,D.bDr,D.bDg,D.bCS,D.bDp,D.bD7,D.bD_,D.bD5,D.bD6,D.bD8,D.bCT,D.bDo,D.bDh,D.bD3,D.bDA,D.bDb,D.bDk,D.bDa,D.bDs,D.bDz,D.bDv,D.bD9,D.bCR,D.bDl,D.bDy,D.an3,D.HC,D.bD2,D.HC,D.bCY,D.HC,D.bCZ,D.an3,D.HC,D.bDc,D.bCU,D.bD0,D.an4,D.bCX,D.bD4,D.bDt,D.bCV,D.bDi,D.bDx,D.bDf,D.bDq,D.bDw,D.HC,D.an4,D.bDu,D.bDn,D.bDe,D.bD1,D.bDj],B.as("bn<n,h5>"))
D.eyt={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.ffd=new B.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eU9=new B.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eU4=new B.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.f67=new B.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.f75=new B.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.f63=new B.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eS6=new B.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.f3S=new B.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.ffl=new B.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.f7s=new B.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eXH=new B.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eRL=new B.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eWG=new B.y("Movement","They pull your legs together and help you balance.")
D.eYI=new B.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eUi=new B.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.fcz=new B.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.fdM=new B.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.f3C=new B.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.fdu=new B.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.f24=new B.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.f7A=new B.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eRS=new B.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eZ5=new B.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.f7e=new B.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.f2s=new B.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.fdD=new B.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.f5x=new B.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eS4=new B.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.f8c=new B.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.fca=new B.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.fa7=new B.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eQ4=new B.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.f5e=new B.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.f5j=new B.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.eZR=new B.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eUA=new B.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.eYu=new B.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.f45=new B.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.fb0=new B.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.ffi=new B.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.f7x=new B.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.ePK=new B.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.f4h=new B.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.eQE=new B.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.fbg=new B.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.fcv=new B.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.f4K=new B.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.fbw=new B.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eRU=new B.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.fd8=new B.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eW1=new B.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.faD=new B.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eZv=new B.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.f2m=new B.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.f7T=new B.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.fdi=new B.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.fda=new B.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.fde=new B.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.f2V=new B.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.f8R=new B.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.fa4=new B.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.fcV=new B.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.f4J=new B.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.f0B=new B.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.f_j=new B.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.f58=new B.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.f7M=new B.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.f1a=new B.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.f1S=new B.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eWq=new B.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.fcr=new B.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eXg=new B.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.eQB=new B.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.eZQ=new B.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.eQw=new B.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eV5=new B.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.eZV=new B.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eXp=new B.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.f88=new B.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eYL=new B.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.feZ=new B.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.f_t=new B.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.f2N=new B.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.f5F=new B.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eXz=new B.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eXi=new B.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dP5=new B.bn(D.eyt,[D.ffd,D.eU9,D.eU4,D.f67,D.f75,D.f63,D.eS6,D.f3S,D.ffl,D.f7s,D.eXH,D.eRL,D.eWG,D.eYI,D.eUi,D.fcz,D.fdM,D.f3C,D.fdu,D.f24,D.f7A,D.eRS,D.eZ5,D.f7e,D.f2s,D.fdD,D.f5x,D.eS4,D.f8c,D.fca,D.fa7,D.eQ4,D.f5e,D.f5j,D.eZR,D.eUA,D.eYu,D.f45,D.fb0,D.ffi,D.f7x,D.ePK,D.f4h,D.eQE,D.fbg,D.fcv,D.f4K,D.fbw,D.eRU,D.fd8,D.eW1,D.faD,D.eZv,D.f2m,D.f7T,D.fdi,D.fda,D.fde,D.f2V,D.f8R,D.fa4,D.fcV,D.f4J,D.f0B,D.f_j,D.f58,D.f7M,D.f1a,D.f1S,D.eWq,D.fcr,D.eXg,D.eQB,D.eZQ,D.eQw,D.eV5,D.eZV,D.eXp,D.f88,D.eYL,D.feZ,D.f_t,D.f2N,D.f5F,D.eXz,D.eXi],B.as("bn<n,+(n,n)>"))
D.dXZ=new C.Wh(null)
D.dYb=new C.Wi(null)
D.e_f=new C.Wo(null)
D.e3f=new C.WZ(null)
D.e3j=new C.X_(null)
D.e3S=new C.X7(null)
D.e7N=new C.XJ(null)
D.e8K=new C.XK(null)
D.ecX=new C.XP(null)
D.esQ=new C.XQ(null)
D.esT=new C.XV(null)
D.ev2=new C.Ye(null)
D.ev3=new C.aav(null)
D.ex6=new C.Yn(null)
D.eBa=new B.r(0,118)
D.eBb=new B.r(0,13)
D.eBc=new B.r(0,17)
D.eBf=new B.r(0,330)
D.eBm=new B.r(0,-17)
D.eBn=new B.r(0,-18)
D.eBo=new B.r(0,-19)
D.eBq=new B.r(0,-28)
D.eBs=new B.r(0,-31)
D.eBt=new B.r(0,-32)
D.eBz=new B.r(-9.5,-11)
D.eBC=new B.r(10,20)
D.eBF=new B.r(10,-13)
D.eBH=new B.r(10,-22)
D.eBI=new B.r(10,-4)
D.eBM=new B.r(11,0)
D.aar=new B.r(11,8)
D.eBS=new B.r(12,2)
D.eBT=new B.r(14,0)
D.eBU=new B.r(14,12)
D.aOj=new B.r(14,8)
D.eBV=new B.r(14,-17)
D.aOl=new B.r(14,-3)
D.aOm=new B.r(14,-4)
D.eBY=new B.r(15,0)
D.eBZ=new B.r(15,-12)
D.eC1=new B.r(16,-8)
D.eC2=new B.r(18,14)
D.aOs=new B.r(20,0)
D.eCa=new B.r(20,15)
D.eCb=new B.r(20,-3)
D.eCc=new B.r(21,8)
D.eCd=new B.r(21,-36)
D.eCh=new B.r(22,10)
D.aOu=new B.r(22,8)
D.eCi=new B.r(22,-25)
D.eCj=new B.r(24,0)
D.eCk=new B.r(24,2)
D.eCn=new B.r(24,-18)
D.eCo=new B.r(24,-22)
D.eCs=new B.r(25,8)
D.eCt=new B.r(26,0)
D.eCx=new B.r(28,-30)
D.eCE=new B.r(30,18)
D.eCF=new B.r(30,2)
D.eCI=new B.r(31,19)
D.eCK=new B.r(32,0)
D.aOy=new B.r(34,0)
D.aOz=new B.r(34,-32)
D.KD=new B.r(36,0)
D.eCX=new B.r(3,-1)
D.eD_=new B.r(40,3)
D.eDd=new B.r(4,11)
D.eDg=new B.r(4,-2)
D.eDk=new B.r(5,0)
D.eDl=new B.r(5,17)
D.eDm=new B.r(5,6)
D.eDr=new B.r(6,11)
D.eDt=new B.r(7,-19)
D.eDz=new B.r(8,7)
D.eDA=new B.r(8,-10)
D.eDB=new B.r(8,-14)
D.aOE=new B.r(9,0)
D.eDL=new B.r(-20.5,-17.6)
D.eDO=new B.r(-2.6,-1)
D.eDX=new B.r(2.6,1)
D.eE4=new B.r(-9,12.2)
D.eEI=new B.r(-10,12)
D.aOL=new B.r(-10,4)
D.eEM=new B.r(-11,0)
D.eEO=new B.r(-11,-34)
D.eES=new B.r(-12,-5)
D.eET=new B.r(-14,0)
D.eEU=new B.r(-14,13)
D.eEV=new B.r(-14,-19)
D.eEX=new B.r(-14,-23)
D.eEY=new B.r(-15,6)
D.eF0=new B.r(-16,14)
D.eF2=new B.r(-16,-8)
D.eF3=new B.r(-17,10)
D.eF4=new B.r(-17,-18)
D.eF5=new B.r(-17,-8)
D.eF7=new B.r(-18,20)
D.eF8=new B.r(-18,-9)
D.aOO=new B.r(-20,0)
D.eFa=new B.r(-20,16)
D.eFb=new B.r(-20,-9)
D.Vw=new B.r(-22,8)
D.eFc=new B.r(-22,-10)
D.eFd=new B.r(-24,10)
D.eFe=new B.r(-24,11)
D.eFf=new B.r(-24,14)
D.eFg=new B.r(-24,-22)
D.eFi=new B.r(-25,-11)
D.eFj=new B.r(-26,0)
D.eFk=new B.r(-26,-18)
D.eFl=new B.r(-27,-24)
D.eFm=new B.r(-28,-36)
D.eFn=new B.r(-2,9)
D.eFo=new B.r(-2,-10)
D.eFp=new B.r(-2,-20)
D.eFs=new B.r(-2,-9)
D.eFu=new B.r(-32,0)
D.aOQ=new B.r(-34,0)
D.eFz=new B.r(-40,3)
D.eFB=new B.r(-4,11)
D.eFC=new B.r(-4,-17)
D.eFD=new B.r(-4,-2)
D.eFH=new B.r(-5,0)
D.eFI=new B.r(-5,20)
D.eFJ=new B.r(-5,6)
D.eFK=new B.r(-6,6)
D.eFL=new B.r(-6,-42)
D.aOS=new B.r(-7,-19)
D.eFN=new B.r(-7,-24)
D.eFO=new B.r(-8,-1)
D.eFR=new B.r(-8,-9)
D.aaA=new B.r(-9,0)
D.eFS=new B.r(-9,1)
D.eFU=new B.r(-9,-23)
D.h0G=new B.D("Thinking\u2026",null,N.hI,null,null,null,null,null,null,null,null,null)
D.eGU=new B.C(A.jG,D.h0G,null)
D.hhG=new B.D("Start from a ready-made board",null,A.fT,null,null,null,null,null,null,null,null,null)
D.eH7=new B.C(A.xa,D.hhG,null)
D.bL2=new B.R(4,0,4,14)
D.fWI=new B.F(!0,A.aF,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1H=new B.D("Games and little helpers for a spare minute.",null,D.fWI,null,null,null,null,null,null,null,null,null)
D.eHk=new B.C(D.bL2,D.h1H,null)
D.dw4=w([A.hX,A.bl],x.O)
D.eOw=new B.bU(A.z,0.5,A.w,null,0,D.dw4,null,null)
D.eOx=new B.bU(A.z,0.5,A.w,null,0,D.aFC,null,null)
D.dlY=w([A.c,A.bQ],x.O)
D.eOz=new B.bU(A.z,0.5,A.w,null,0,D.dlY,null,null)
D.dFx=w([A.bP,A.cz],x.O)
D.aTJ=new B.bU(A.z,0.5,A.w,null,0,D.dFx,null,null)
D.cYz=w([A.c,A.bP],x.O)
D.eOE=new B.bU(A.n_,0.5,A.w,null,0,D.cYz,null,null)
D.bAc=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.dDp=w([A.fy,D.bAc],x.O)
D.eOJ=new B.bU(A.n_,0.5,A.w,null,0,D.dDp,null,null)
D.cRx=w([A.d0,A.cx],x.O)
D.eOK=new B.bU(A.z,0.5,A.w,null,0,D.cRx,null,null)
D.d5E=w([A.ha,A.aQ,A.de],x.O)
D.eON=new B.bU(A.n_,0.5,A.w,null,0,D.d5E,null,null)
D.dwP=w([A.cz,M.ni],x.O)
D.eOO=new B.bU(A.n_,0.5,A.w,null,0,D.dwP,null,null)
D.eOT=new B.bU(A.z,0.5,A.w,null,0,D.aBQ,null,null)
D.dGs=w([A.cz,A.ip],x.O)
D.eP0=new B.bU(A.z,0.5,A.w,null,0,D.dGs,null,null)
D.dfw=w([A.iL,A.bl],x.O)
D.eP3=new B.bU(A.n_,0.5,A.w,null,0,D.dfw,null,null)
D.aTO=new B.aP(9,9)
D.eP9=new B.aP(1.4,1.4)
D.ePb=new B.aP(2.5,2.5)
D.fq0=new B.a5(10,-8,18,-2)
D.fq1=new B.a5(14,-14,20,14)
D.fq3=new B.a5(20,-2,30,2)
D.fq8=new B.a5(4,-13,30,-3)
D.fqe=new B.a5(8,-7,12,7)
D.fqq=new B.a5(-12,12,12,19)
D.fqr=new B.a5(-12,14,12,22)
D.fqs=new B.a5(-12,-22,12,8)
D.fqt=new B.a5(-12,-25,12,19)
D.fqu=new B.a5(-12,-26,12,-6)
D.fqv=new B.a5(-12,-4,12,14)
D.fqx=new B.a5(-14,20,14,24)
D.fqy=new B.a5(-14,6,14,10)
D.fqz=new B.a5(-14,-17,14,15)
D.fqA=new B.a5(-14,-26,14,18)
D.fqB=new B.a5(-14,-26,14,-14)
D.fqC=new B.a5(-14,-4,14,20)
D.fqE=new B.a5(-15,-29,15,25)
D.fqF=new B.a5(-16,-16,16,16)
D.fqI=new B.a5(-16,-22,-9,18)
D.fqJ=new B.a5(-16,-24,16,-10)
D.fqL=new B.a5(-16,-2,16,20)
D.fqN=new B.a5(-18,20,18,24)
D.fqO=new B.a5(-18,-18,18,20)
D.fqP=new B.a5(-20,12,20,22)
D.fqQ=new B.a5(-20,-28,20,26)
D.fqR=new B.a5(-22,15,22,19)
D.aUt=new B.a5(-22,-26,22,24)
D.fqT=new B.a5(-24,-12,10,22)
D.fqU=new B.a5(-24,-14,22,8)
D.fqV=new B.a5(-24,-6,24,20)
D.aUu=new B.a5(-24,-9,24,9)
D.fqW=new B.a5(-25,14,25,19)
D.fqX=new B.a5(-26,-14,14,8)
D.fqY=new B.a5(-26,-4,26,20)
D.fqZ=new B.a5(-26,-6,4,6)
D.aUv=new B.a5(-28,-13,28,13)
D.fr_=new B.a5(-28,-16,28,16)
D.fr0=new B.a5(-28,-16,28,8)
D.fr1=new B.a5(-28,-22,28,22)
D.fr2=new B.a5(-29,-11,29,11)
D.fr3=new B.a5(-30,-12,30,14)
D.fr4=new B.a5(-30,-14,0,14)
D.fr5=new B.a5(-30,-18,30,20)
D.fr6=new B.a5(-30,-28,30,14)
D.fr7=new B.a5(-30,-2,30,18)
D.fr8=new B.a5(-30,-4,30,18)
D.fr9=new B.a5(-32,-17,32,17)
D.fra=new B.a5(-32,-28,32,18)
D.frb=new B.a5(-33,-21,33,17)
D.frc=new B.a5(-34,0,34,10)
D.frd=new B.a5(-34,14,34,26)
D.abt=new B.a5(-34,-18,34,18)
D.fre=new B.a5(-36,-24,36,20)
D.frf=new B.a5(-38,-22,38,22)
D.frh=new B.a5(-3,12,3,22)
D.fri=new B.a5(-3,5,3,15)
D.frm=new B.a5(-46,-34,46,28)
D.fro=new B.a5(-48,-3,48,3)
D.frr=new B.a5(-6,18,24,24)
D.frs=new B.a5(-6,5,6,12)
D.frt=new B.a5(-6,-22,6,-15)
D.frx=new B.a5(-9,-16,9,22)
D.fry=new B.a5(-4.5,-24,4.5,-21.2)
D.frA=new B.a5(14,-9,17.5,9)
D.eAj={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aVC=new B.dc(D.eAj,5,x.Q)
D.ezM={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.fvc=new B.dc(D.ezM,10,x.Q)
D.fxy=new B.av(24,44)
D.fxW=new B.av(54,38)
D.fy1=new B.av(66,38)
D.bhK=new B.fo(2,null,null,null,null,A.bj,null,null,null,null)
D.fz6=new B.a4(16,16,D.bhK,null)
D.aWJ=new B.hY(3,12,12,0.82,null)
D.fM1=new B.F(!0,A.wK,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGn=new B.eJ("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cY,null,null,null,null,null,null,D.fM1)
D.fRh=new B.F(!0,A.l3,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGt=new B.eJ("AI",null,null,A.cY,null,null,null,null,null,null,D.fRh)
D.fGL=new B.F(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHh=new B.F(!0,A.bq,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHH=new B.F(!0,A.cw,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIz=new B.F(!0,A.c,null,null,null,null,13.5,A.C,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJ5=new B.F(!0,A.aR,null,null,null,null,12,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvY=new B.d4(A.i0,A.dS,6)
D.dpf=w([D.fvY],B.as("N<d4>"))
D.fK5=new B.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.dpf,null,null,null)
D.fKa=new B.F(!0,A.eG,null,null,null,null,12.5,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKf=new B.F(!0,A.bX,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKS=new B.F(!0,A.bX,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fL_=new B.F(!0,A.aF,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLY=new B.F(!0,A.bX,null,null,null,null,9.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fM5=new B.F(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMD=new B.F(!0,A.aF,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fN8=new B.F(!0,A.aQ,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNb=new B.F(!0,A.c,null,null,null,null,10.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.aG_,null,null,null)
D.fNi=new B.F(!0,A.c,null,null,null,null,12.5,A.a7,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fO2=new B.F(!0,A.bF,null,null,null,null,10.5,A.u,null,0.5,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPc=new B.F(!0,A.v9,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPR=new B.F(!0,A.bM,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQ_=new B.F(!0,A.aF,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQN=new B.F(!0,A.mr,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQY=new B.F(!0,A.cz,null,null,null,null,9.5,null,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYX=new B.F(!0,A.c,null,null,null,null,9.5,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fS8=new B.F(!0,A.j_,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSs=new B.F(!0,A.bX,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fT_=new B.F(!0,A.bf,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUx=new B.F(!0,A.v,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fV3=new B.F(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVl=new B.F(!0,A.aQ,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVJ=new B.F(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVM=new B.F(!0,A.aQ,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWZ=new B.F(!0,A.v9,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXl=new B.F(!0,A.bf,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKi=new B.F(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXK=new B.D("\u26a0\ufe0f ",null,D.fKi,null,null,null,null,null,null,null,null,null)
D.fXX=new B.D("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A3.BD,null,null,null,null,null,null,null,null,null)
D.fZC=new B.D("Pick one, then change it and see what happens.",null,A3.BD,null,null,null,null,null,null,null,null,null)
D.fLt=new B.F(!0,A.ac,null,null,null,null,null,A.O,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_D=new B.D("What do you want to invent? Type it below, or tap an idea.",null,D.fLt,null,null,null,null,null,null,null,null,null)
D.fPM=new B.F(!0,A.c1,null,null,null,null,12.5,A.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h09=new B.D("Burnt out! Press Repair.",null,D.fPM,null,null,null,null,null,null,null,null,null)
D.h1h=new B.D("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.h1V=new B.D("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.hj,null,null,null,null,null,null,null,null,null)
D.h2y=new B.D("Make it yours",null,A.js,null,null,null,null,null,null,null,null,null)
D.h5N=new B.D("5G",null,A4.aYh,null,null,null,null,null,null,null,null,null)
D.h6O=new B.D("Pick how big the screen is on the board",null,N.hI,null,null,null,null,null,null,null,null,null)
D.fSK=new B.F(!0,A.bX,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h7_=new B.D("WHAT HAPPENS",null,D.fSK,null,null,null,null,null,null,null,null,null)
D.h8L=new B.D("Check",null,null,null,null,null,null,null,null,null,null,null)
D.h9q=new B.D("Change the words and pictures on the three slabs.",null,A3.BD,null,null,null,null,null,null,null,null,null)
D.h9D=new B.D("All the parts and wires will be removed.",null,A.hH,null,null,null,null,null,null,null,null,null)
D.h9Y=new B.D("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.hax=new B.D("Tap the crank on the board again and again to spin it faster.",null,N.hI,null,null,null,null,null,null,null,null,null)
D.hbM=new B.D("\ud83c\udfaf Challenges",null,A.dw,null,null,null,null,null,null,null,null,null)
D.hci=new B.D("Remove this part",null,A1.aXS,null,null,null,null,null,null,null,null,null)
D.hcC=new B.D("Clear the board?",null,A.du,null,null,null,null,null,null,null,null,null)
D.fS9=new B.F(!0,A.bw,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hcU=new B.D("How the Lab works",null,D.fS9,null,null,null,null,null,null,null,null,null)
D.fIM=new B.F(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hde=new B.D("Electronics Lab",null,D.fIM,null,null,null,null,A.a2,null,1,null,null)
D.hdi=new B.D("?",null,R.aZu,null,null,null,null,null,null,null,null,null)
D.heE=new B.D("Ready-made circuits",null,A.dw,null,null,null,null,null,null,null,null,null)
D.hfj=new B.D("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,N.hI,null,null,null,null,null,null,null,null,null)
D.fVq=new B.F(!0,A.aQ,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hiQ=new B.D("\u26a0 There is no air here, so a parachute will not work.",null,D.fVq,null,null,null,null,null,null,null,null,null)
D.hk0=new B.D("Download the scene (GIF)",null,A.cJ,null,null,null,null,null,null,null,null,null)
D.hk3=new B.D("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,A1.aXP,null,null,null,null,null,null,null,null,null)
D.hkz=new B.D("NGMY",null,A.wk,null,null,null,null,null,null,null,null,null)
D.hkM=new B.D("You build a machine. A little light runs along the wires, and every part it touches does something.",null,Ah.Xf,null,null,null,null,null,null,null,null,null)
D.hla=new B.D("Tap it to change its setting. Drag from the right dot to connect.",null,A.mf,null,null,null,null,null,null,null,null,null)
D.hmh=new B.D("TOOLBOX",null,Ae.acR,null,null,null,null,null,null,null,null,null)
D.hKL=new B.bg("electronics-part-card",x.W)
D.hKN=new B.bg("device-learn-more",x.W)
D.hKT=new B.bg("device-remote",x.W)
D.hKY=new B.bg("device-picture",x.W)
D.hLs=new B.bg("electronics-part-about",x.W)
D.hLz=new B.bg("body-loading",x.W)
D.hLF=new B.bg("device-fullscreen",x.W)
D.hM1=new B.bg("core-protocol-back",x.W)
D.hM6=new B.bg("core-protocol-title-frame",x.W)})();(function staticFields(){$.hGu=null
$.hGq=null
$.hGr=null
$.hNj=0
$.igi=B.S(x.N,B.as("j4"))
$.igR=B.S(x.N,B.as("j4"))
$.aR9=B.S(x.N,B.as("j4"))
$.hJd=A.aA})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"iOJ","bJs",()=>{var u="led"
return B.a([C.aBp("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fBV(),u),C.aBp("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fBW(),u),C.aBp("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fBX(),u),C.aBp("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fC3(),u),C.aBp("Not both","Make the light go OFF only when both switches are ON.",2,new C.fC4(),u),C.aBp("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.fC5(),"buzzer")],B.as("N<bfb>"))})
w($,"iPa","bJt",()=>B.a([C.RR("UNIVERSE","Earth, space and gravity",A.R8,A.aH,new C.fCl()),C.RR("ELECTRONICS LAB","Batteries, wires, real circuits",An.vv,A.aH,new C.fCm()),C.RR("DISCOVERY LAB","Body Explorer: a real 3D human",D.bUj,A.bf,new C.fCn()),C.RR("TOOLBOX","Converter, clock, games",H.arQ,A.cW,new C.fCo()),C.RR("REACTION LAB","Wire parts together",A.E2,A.bw,new C.fCp()),C.RR("SPARK PAINTER","Paint with light",A.In,A.c5,new C.fCq()),C.RR("ROCKET LANDER","Land softly on the pad",A.og,A.aH,new C.fCr()),C.RR("TITLE ANIMATOR","Make a moving title",A.xB,A.bu,new C.fCs()),C.RR("CIRCUIT LAB","Connect logic, learn it",A.a4N,A.cw,new C.fCt())],B.as("N<bxD>")))
w($,"iQY","qU",()=>{var u,t,s=B.S(x.N,x.C)
for(u=0;u<76;++u){t=D.TS[u]
s.n(0,t.a,t)}return s})
v($,"ikU","hWm",()=>B.aq6(0))
w($,"iOr","hWn",()=>{var u=B.csm()
u.sez(0,A.c.j(0.06))
u.c=2.2
u.d=A.bG
return u})
w($,"iOK","aki",()=>B.a([C.GP("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fC6()),C.GP("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fC7()),C.GP("Spin the motor","A battery and a motor in a loop will make it spin.",new C.fC8()),C.GP("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.fC9()),C.GP("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fCa()),C.GP("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fBY()),C.GP("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fBZ()),C.GP("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fC_()),C.GP("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fC0()),C.GP("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fC1()),C.GP("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fC2())],B.as("N<bfc>")))
w($,"iPc","hWR",()=>B.a([C.a2Z("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aQ,A.c8,new C.fCB()),C.a2Z("Focus Timer","Work, then rest","\u23f1\ufe0f",A.c1,A.bC,new C.fCC()),C.a2Z("Breathe","Calm down in a minute","\ud83e\udee7",A.fK,A.cI,new C.fCD()),C.a2Z("Draw Pad","Sketch and share","\ud83c\udfa8",A.bE,A.b_,new C.fCE()),C.a2Z("Memory Match","Find the pairs","\ud83c\udccf",A.aH,A.ci,new C.fCF()),C.a2Z("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bu,A.bk,new C.fCG()),C.a2Z("Tip & Split","Share the bill","\ud83e\uddfe",A.bf,A.b5,new C.fCH()),C.a2Z("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bj,A.az,new C.fCI())],B.as("N<byX>")))})()};
(a=>{a["X1B0tHpebhK/K2EE0ZbAVUE/jTo="]=a.current})($__dart_deferred_initializers__);