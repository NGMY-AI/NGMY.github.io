((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,X,Aa,A5,N,Ab,Ac,A6,Ad,A7,U,P,Y,Ae,O,Af,Ag,Ah,Ai,A8,Aj,Ak,Al,Am,An,Z,V,Q,Ao,Ap,A_,R,S,A0,T,A1,Aq,E,I,G,L,Ar,As,At,A9,C={
bDX(d){return C.iiC(d)},
iiC(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bDX=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.rv(B.nB(""),d,A.ig,null,null).dc(0,Av.a1j),$async$bDX)
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
return B.i($async$bDX,v)},
iuJ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.Tf[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cY(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ag(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.fg(D.Tf,new C.fSM())
if(w==null)w=A.d.gG(D.Tf)
s=B.S(x.N,x.C)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.I)(r),++u){l=r[u].a
k=l[0]
l=$.qS().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.I)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gG(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.am8(w.a,w.b,m,w,s,!1)},
ioh(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.O(D.TF,new C.fHg(),x.bd).aL(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
iCS(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
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
if(!$.qS().am(0,p)||J.eC(s,o)||J.ad(t)>=8)continue
J.c7(s,o)
n=B.S(a5,a8)
for(a9=0;a9<4;++a9){m=D.dGc[a9]
l=J.t(q,m)
if(typeof l=="number")J.aK(n,m,l)}k=A.i.D(typeof J.t(q,"x")=="number"?B.dI(J.t(q,"x")):0.2+A.i.F(r,3)*0.3,0.16,0.84)
j=A.i.D(typeof J.t(q,"y")=="number"?B.dI(J.t(q,"y")):0.25+A.i.ao(r,3)*0.3,0.1,0.9)
J.c7(t,new B.e_([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aQ(a6.a(J.t(u,"wires")));a5.C();){h=a5.gP(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.v(J.t(g,0))
e=B.v(J.t(g,2))
d=A.o.D(A.i.M(B.dI(J.t(g,1))),0,1)
a0=A.o.D(A.i.M(B.dI(J.t(g,3))),0,1)
if(J.eC(s,f)&&J.eC(s,e)&&!J.z(f,e))J.c7(i,new B.b7([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.R.a(J.t(u,"steps"))
a0=J.aQ(a0==null?A.bP:a0)
while(a0.C()){a2=a0.gP(a0)
J.c7(a1,B.v(a2))}a3=a1
a0=J.t(u,"title")
a0=B.v(a0==null?"My invention":a0)
a1=J.t(u,"explain")
a4=new C.n9(a0,B.v(a1==null?"":a1),t,i,A.Z)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.t(u,"honest")
a5=B.v(a5==null?"":a5)
return new C.am8(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
itc(d){var w,v,u=C.hvz()
d.B(u)
for(w=0;w<60;++w)u.vS(0,0.03333333333333333)
v=u.a
return A.d.aR(v,new C.fP6(u))&&!A.d.cw(v,new C.fP7())},
itb(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.S(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.I)(l),++u){t=l[u];++v
k.n(0,t.a,$.qS().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.I)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.v(t.e)+" V")
if(p==="resistor")q.push(""+A.i.S(t.r)+" ohms")
if(A.d.q(D.dEf,p))q.push("level "+A.i.S(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.i.S(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aL(q,", ")+")"
s.push(B.v(p)+n+": "+o+", current "+A.i.a5(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.I)(w),++u){m=w[u]
l.push(B.v(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.v(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aL(s,"\n")+"\nWires: "+A.d.aL(l,"; ")},
ih6(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.I)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aL(v,"\n")+"\n\n"}v=A.d.aL(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
iuI(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qS().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.TF[u]
if(A.d.aR(w,new C.fSJ(s)))if(!B.cY(r,s.b.toLowerCase(),0))v=B.cY(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ag("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.X(w,new C.fSK(e),B.U(w).k("X<1>")).gar(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ag("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.i.a5(A.d.cE(w,0,new C.fSL())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ag("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gG(w)
w=$.qS().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
am8:function am8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fSM:function fSM(){},
fHg:function fHg(){},
fP6:function fP6(d){this.a=d},
fP7:function fP7(){},
fSJ:function fSJ(d){this.a=d},
fSK:function fSK(d){this.a=d},
fSL:function fSL(){},
Xk:function Xk(d,e){this.c=d
this.a=e},
bod:function bod(d,e,f,g,h){var _=this
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
eo7:function eo7(d){this.a=d},
eo8:function eo8(d,e,f){this.a=d
this.b=e
this.c=f},
eo9:function eo9(d){this.a=d},
eok:function eok(d){this.a=d},
eol:function eol(d,e){this.a=d
this.b=e},
eog:function eog(d){this.a=d},
eoe:function eoe(d,e){this.a=d
this.b=e},
eof:function eof(d,e,f){this.a=d
this.b=e
this.c=f},
eoh:function eoh(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eoc:function eoc(d){this.a=d},
eod:function eod(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eoi:function eoi(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eob:function eob(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eoj:function eoj(d,e){this.a=d
this.b=e},
eoa:function eoa(d,e){this.a=d
this.b=e},
eoo:function eoo(d){this.a=d},
eon:function eon(d){this.a=d},
eop:function eop(d){this.a=d},
eom:function eom(d){this.a=d},
eoq:function eoq(d,e){this.a=d
this.b=e},
eor:function eor(d,e){this.a=d
this.b=e},
eos:function eos(d,e){this.a=d
this.b=e},
eot:function eot(d,e){this.a=d
this.b=e},
bEi(d,e,f){var w=null
return B.x(B.a([B.c(d,w,w,w,w,w,w,D.fGF,w,w,w),B.c(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.O,0,A.p)},
hJS(d,e,f,g){var w=null,v=B.m(24),u=B.K(f.j(0.6),A.r,1)
return B.at(B.p(w,B.x(B.a([B.c(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.aj,B.c(e,w,w,w,w,w,w,A.BA,A.K,w,w),A.aB,B.bZ(A.fV,g,A.br,w,0,8)],x.p),A.l,w,A.e,A.O,0,A.p),A.f,w,w,new B.o(D.bkl,w,u,v,w,w,A.m),w,w,w,w,A.ae,w,w,w),w,w,w)},
Hb:function Hb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vG:function vG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XH:function XH(d){this.a=d},
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
eDw:function eDw(){},
eDQ:function eDQ(d){this.a=d},
eDP:function eDP(d,e){this.a=d
this.b=e},
eDR:function eDR(){},
eDS:function eDS(){},
eDy:function eDy(d,e,f){this.a=d
this.b=e
this.c=f},
eDx:function eDx(d,e){this.a=d
this.b=e},
eDn:function eDn(d){this.a=d},
eDo:function eDo(d){this.a=d},
eDp:function eDp(d){this.a=d},
eDq:function eDq(d){this.a=d},
eDr:function eDr(d){this.a=d},
eDs:function eDs(d){this.a=d},
eDt:function eDt(d){this.a=d},
eDu:function eDu(d){this.a=d},
eDv:function eDv(d){this.a=d},
eDl:function eDl(d){this.a=d},
eDm:function eDm(d){this.a=d},
eDk:function eDk(d){this.a=d},
eDJ:function eDJ(d,e){this.a=d
this.b=e},
eDE:function eDE(d){this.a=d},
eDF:function eDF(d){this.a=d},
eDB:function eDB(d){this.a=d},
eDG:function eDG(d){this.a=d},
eDA:function eDA(d){this.a=d},
eDH:function eDH(d){this.a=d},
eDI:function eDI(d){this.a=d},
eDz:function eDz(d){this.a=d},
eDK:function eDK(d,e){this.a=d
this.b=e},
eDD:function eDD(d,e){this.a=d
this.b=e},
eDL:function eDL(d){this.a=d},
eDM:function eDM(d){this.a=d},
eDN:function eDN(d){this.a=d},
eDO:function eDO(d){this.a=d},
eDC:function eDC(d){this.a=d},
bl5:function bl5(d,e){this.b=d
this.a=e},
aPl:function aPl(){},
bBV:function bBV(){},
hEH(){var w=$.hEF
return w==null?$.hEF=$.oN().cZv("assets/data/three.min.js"):w},
hEG(){var w=$.hEE
return w==null?$.hEE=C.cRM():w},
cRM(){var w=0,v=B.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cRM=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.oN().iu(0,"assets/data/body3d.bin"),$async$cRM)
case 3:d=a1
$.hEI=J.ez(A.dM.gaS(d),d.byteOffset,d.byteLength)
t=B.TJ(d)
s=t.getUint32(4,!0)
r=B.a([],x.h)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.jW(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.drt[i]
g=B.b1((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a5a(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b7b))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.bdY(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cRM,v)},
c8U(){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$c8U=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.hb(B.a([C.hEG(),C.hEH()],x.D),x.K),$async$c8U)
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
return B.i($async$c8U,v)},
aVA:function aVA(d,e,f){this.a=d
this.b=e
this.c=f},
a5a:function a5a(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
bdY:function bdY(d,e,f,g,h){var _=this
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
dTd:function dTd(d){this.a=d},
dTc:function dTc(d,e){this.a=d
this.b=e},
dSO:function dSO(d){this.a=d},
dSP:function dSP(d,e){this.a=d
this.b=e},
dSQ:function dSQ(d){this.a=d},
dSR:function dSR(){},
dTe:function dTe(){},
dSS:function dSS(d,e){this.a=d
this.b=e},
dST:function dST(d){this.a=d},
dSU:function dSU(){},
dSV:function dSV(d){this.a=d},
dSX:function dSX(d,e){this.a=d
this.b=e},
dSW:function dSW(d){this.a=d},
dSL:function dSL(d,e,f){this.a=d
this.b=e
this.c=f},
dSM:function dSM(d){this.a=d},
dSN:function dSN(d){this.a=d},
dT3:function dT3(d){this.a=d},
dT4:function dT4(d,e){this.a=d
this.b=e},
dT5:function dT5(d,e){this.a=d
this.b=e},
dT6:function dT6(d){this.a=d},
dT2:function dT2(d,e){this.a=d
this.b=e},
dT7:function dT7(d,e){this.a=d
this.b=e},
dT1:function dT1(d,e){this.a=d
this.b=e},
dT8:function dT8(d){this.a=d},
dT0:function dT0(d){this.a=d},
dT9:function dT9(d){this.a=d},
dT_:function dT_(d){this.a=d},
dTa:function dTa(d){this.a=d},
dSZ:function dSZ(d){this.a=d},
dTb:function dTb(d){this.a=d},
dSY:function dSY(d){this.a=d},
aOq:function aOq(){},
aOr:function aOr(){},
c8V:function c8V(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c8W:function c8W(d,e){this.a=d
this.b=e},
c8X:function c8X(d){this.a=d},
aB5(d,e,f,g,h){return new C.beL(d,e,f,g,h)},
hlm(d,e,f,g,h,i){return $.iej.c_(0,d+"|"+B.v(e)+"|"+f.m()+"|"+B.v(g),new C.cYV(d,e,f,i,g,h))},
yV:function yV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Di:function Di(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nZ:function nZ(d,e,f){this.a=d
this.b=e
this.c=f},
beL:function beL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fAi:function fAi(){},
fAj:function fAj(){},
fAk:function fAk(){},
fAr:function fAr(){},
fAs:function fAs(){},
fAt:function fAt(){},
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
dUU:function dUU(d){this.a=d},
dUy:function dUy(d,e){this.a=d
this.b=e},
dUB:function dUB(){},
dUV:function dUV(){},
dUw:function dUw(d,e){this.a=d
this.b=e},
dUx:function dUx(d,e){this.a=d
this.b=e},
dUC:function dUC(d,e,f){this.a=d
this.b=e
this.c=f},
dUr:function dUr(){},
dUs:function dUs(){},
dUt:function dUt(d){this.a=d},
dUu:function dUu(d,e){this.a=d
this.b=e},
dUv:function dUv(d,e,f){this.a=d
this.b=e
this.c=f},
dUD:function dUD(){},
dUE:function dUE(d,e){this.a=d
this.b=e},
dUF:function dUF(d){this.a=d},
dUA:function dUA(d,e){this.a=d
this.b=e},
dUz:function dUz(d){this.a=d},
dUq:function dUq(d,e,f){this.a=d
this.b=e
this.c=f},
dUO:function dUO(d){this.a=d},
dUN:function dUN(d){this.a=d},
dUP:function dUP(d){this.a=d},
dUM:function dUM(d){this.a=d},
dUK:function dUK(d){this.a=d},
dUL:function dUL(d){this.a=d},
dUJ:function dUJ(d){this.a=d},
dUG:function dUG(d){this.a=d},
dUI:function dUI(d){this.a=d},
dUQ:function dUQ(d,e){this.a=d
this.b=e},
dUR:function dUR(d,e){this.a=d
this.b=e},
dUS:function dUS(d){this.a=d},
dUH:function dUH(d){this.a=d},
dUT:function dUT(d,e){this.a=d
this.b=e},
bf2:function bf2(d,e){this.b=d
this.a=e},
cYV:function cYV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aOv:function aOv(){},
bBF:function bBF(){},
i4U(){return new C.OC(null)},
RI(d,e,f,g,h){return new C.bxc(d,e,f,g,h)},
bvw(d,e,f){return A.i.D((d-e)/(f-e),0,1)},
hlU(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
iwJ(){return B.iF("construction","")},
OC:function OC(d){this.a=d},
Lu:function Lu(d,e){this.a=d
this.b=e},
Bh:function Bh(d,e,f,g,h,i,j){var _=this
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
e03:function e03(d,e){this.a=d
this.b=e},
e02:function e02(d){this.a=d},
e05:function e05(d,e){this.a=d
this.b=e},
e04:function e04(d){this.a=d},
bxc:function bxc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fAJ:function fAJ(){},
fAK:function fAK(){},
fAL:function fAL(){},
fAM:function fAM(){},
fAN:function fAN(){},
fAO:function fAO(){},
fAP:function fAP(){},
fAQ:function fAQ(){},
fAR:function fAR(){},
bvx:function bvx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ffY:function ffY(d){this.a=d},
ffX:function ffX(d,e){this.a=d
this.b=e},
ffV:function ffV(d){this.a=d},
ffZ:function ffZ(d){this.a=d},
ffW:function ffW(d,e){this.a=d
this.b=e},
agY:function agY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
afN:function afN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
RB:function RB(d,e,f,g,h,i,j,k,l,m){var _=this
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
bwA:function bwA(d,e){this.b=d
this.a=e},
bw4:function bw4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bdG:function bdG(d,e){this.b=d
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
ffE:function ffE(d){this.a=d},
ffD:function ffD(d){this.a=d},
fft:function fft(d){this.a=d},
ffu:function ffu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ffv:function ffv(d){this.a=d},
ffs:function ffs(d,e){this.a=d
this.b=e},
ffw:function ffw(d){this.a=d},
ffC:function ffC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ffB:function ffB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ffz:function ffz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ffy:function ffy(d,e,f){this.a=d
this.b=e
this.c=f},
ffA:function ffA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ffx:function ffx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ffM:function ffM(d){this.a=d},
ffL:function ffL(d){this.a=d},
ffN:function ffN(d,e){this.a=d
this.b=e},
ffO:function ffO(d,e){this.a=d
this.b=e},
ffP:function ffP(d,e){this.a=d
this.b=e},
ffK:function ffK(d,e,f){this.a=d
this.b=e
this.c=f},
ffQ:function ffQ(d,e,f){this.a=d
this.b=e
this.c=f},
ffJ:function ffJ(d){this.a=d},
ffF:function ffF(d){this.a=d},
ffR:function ffR(d){this.a=d},
ffS:function ffS(d){this.a=d},
ffI:function ffI(d,e){this.a=d
this.b=e},
ffT:function ffT(d,e){this.a=d
this.b=e},
ffH:function ffH(d,e){this.a=d
this.b=e},
ffU:function ffU(d,e){this.a=d
this.b=e},
ffG:function ffG(d,e){this.a=d
this.b=e},
ffq:function ffq(){},
ffr:function ffr(){},
bv8:function bv8(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
buy:function buy(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bem:function bem(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
buA:function buA(d,e,f){this.b=d
this.c=e
this.a=f},
byG:function byG(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aQb:function aQb(){},
hLt(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a7(0,new B.r(w,0)),u=e.aI(0,new B.r(w,0)),t=1-f,s=3*t
return d.aO(0,t*t*t).a7(0,v.aO(0,s*t*f)).a7(0,u.aO(0,s*f*f)).a7(0,e.aO(0,f*f*f))},
bl4(d,e,f,g,h,i){return $.ieS.c_(0,d+"|"+B.v(e)+"|"+f.m()+"|"+B.v(g),new C.dum(d,e,f,i,g,h))},
a2d:function a2d(d,e){this.a=d
this.b=e},
qJ:function qJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
rq:function rq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Dm:function Dm(d,e){this.a=d
this.b=e},
a0b:function a0b(d,e){this.a=d
this.b=e},
agM:function agM(d,e,f,g){var _=this
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
Dx:function Dx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adC:function adC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
adU:function adU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
afR:function afR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bl2:function bl2(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
duq:function duq(d){this.a=d},
dur:function dur(d){this.a=d},
dun:function dun(d,e){this.a=d
this.b=e},
duo:function duo(d){this.a=d},
dup:function dup(d){this.a=d},
dus:function dus(d){this.a=d},
dut:function dut(d){this.a=d},
duu:function duu(d){this.a=d},
duv:function duv(d){this.a=d},
duw:function duw(d){this.a=d},
dux:function dux(d){this.a=d},
duy:function duy(d){this.a=d},
duz:function duz(d){this.a=d},
duA:function duA(d){this.a=d},
GX:function GX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
XG:function XG(d){this.a=d},
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
eCR:function eCR(d){this.a=d},
eCG:function eCG(d){this.a=d},
eCI:function eCI(){},
eCJ:function eCJ(){},
eCM:function eCM(){},
eCN:function eCN(d,e,f){this.a=d
this.b=e
this.c=f},
eCO:function eCO(d){this.a=d},
eCP:function eCP(d){this.a=d},
eCK:function eCK(){},
eCL:function eCL(d){this.a=d},
eDg:function eDg(d){this.a=d},
eCQ:function eCQ(){},
eCC:function eCC(d){this.a=d},
eCT:function eCT(d){this.a=d},
eCS:function eCS(d){this.a=d},
eCV:function eCV(){},
eCU:function eCU(d,e){this.a=d
this.b=e},
eCF:function eCF(){},
eCD:function eCD(d){this.a=d},
eCE:function eCE(d){this.a=d},
eDe:function eDe(d){this.a=d},
eDd:function eDd(d){this.a=d},
eDf:function eDf(d){this.a=d},
eD4:function eD4(d,e){this.a=d
this.b=e},
eDc:function eDc(d){this.a=d},
eDa:function eDa(d){this.a=d},
eDb:function eDb(d){this.a=d},
eD9:function eD9(d){this.a=d},
eD8:function eD8(d){this.a=d},
eD5:function eD5(d){this.a=d},
eD6:function eD6(d){this.a=d},
eD7:function eD7(d){this.a=d},
eCH:function eCH(){},
eD0:function eD0(d){this.a=d},
eD1:function eD1(d){this.a=d},
eD_:function eD_(d){this.a=d},
eD2:function eD2(d){this.a=d},
eCZ:function eCZ(d){this.a=d},
eD3:function eD3(d){this.a=d},
eCY:function eCY(d){this.a=d},
eCX:function eCX(d){this.a=d},
eCW:function eCW(d,e){this.a=d
this.b=e},
bl3:function bl3(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dum:function dum(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aPj:function aPj(){},
hRj(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aI(0,e).gcL()*0.1
return new B.r((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
hvz(){var w=B.a([],x.bz),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a6i(w,v,u,A.cV,B.S(x.N,x.y))},
hZu(d,e,f){var w=d.c,v=e===0?-1:1
return new B.r(w*f.a+v*C.hvA(d),d.d*f.b)},
hvA(d){return 42+(D.mF.am(0,d.b)?(d.ch-1)*38:0)},
iiU(d){var w,v,u,t,s
if(d.A(0,$.hHr))return $.hUq()
w=B.a([],x.n)
for(v=d.a,u=d.b,t=12;t<v;t+=24)for(s=12;s<u;s+=24){w.push(t)
w.push(s)}$.hHr=d
return $.iiV=new Float32Array(B.cc(w))},
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
acg:function acg(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ado:function ado(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a6i:function a6i(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bSa:function bSa(){},
bSl:function bSl(d){this.a=d},
bSg:function bSg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bSm:function bSm(d){this.a=d},
bSn:function bSn(d){this.a=d},
bSp:function bSp(d){this.a=d},
bSq:function bSq(d){this.a=d},
bSo:function bSo(d){this.a=d},
bSr:function bSr(d,e,f){this.a=d
this.b=e
this.c=f},
bSs:function bSs(d){this.a=d},
bSc:function bSc(d){this.a=d},
bSd:function bSd(d){this.a=d},
bSb:function bSb(d){this.a=d},
bSe:function bSe(d,e,f){this.a=d
this.b=e
this.c=f},
bSf:function bSf(d){this.a=d},
bS9:function bS9(d){this.a=d},
bSt:function bSt(d,e){this.a=d
this.b=e},
bSh:function bSh(d,e){this.a=d
this.b=e},
bSk:function bSk(d){this.a=d},
bSj:function bSj(d){this.a=d},
bSi:function bSi(d){this.a=d},
akW:function akW(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bMw:function bMw(){},
bMx:function bMx(){},
bMv:function bMv(){},
n9:function n9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cws:function cws(d){this.a=d},
iCN(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new C.h4I(),c9=new C.h4K(),d0=new C.h4L(),d1=new C.h4J(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.aq(w,d1.$3(new B.a4(w.a,w.b,w.c,w.d),A.cm,A.bQ))
d3.ah(D.eAQ,D.exP,c9.$2(A.e6,1.4))
d3.ah(D.exu,D.exs,c9.$2(A.bA,2.4))
d3.ah(D.exv,V.aNR,c9.$2(A.bA,2.4))
if(c7){d2=c8.$1(A.fC.j(0.5))
d2.y=A.HY
d3.O(D.exa,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.i.F(d2+v/3,1)
d6.$5(d3,"\u2744",new B.r(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.aq(d0.$4(-22,-26,44,50),d1.$3(D.aU2,A.aS,A.cD))
d3.O(A.cP,16,c8.$1(A.bA))
d3.O(A.cP,13,c8.$1(c7?A.aH.j(0.85):A.a_))
if(c7){d2=d3.c
J.bs(d2.save())
d2.translate(0,4)
d3.jr(0,d4.y*0.6)
for(v=0;v<3;++v){t=v*2.09
d3.ah(A.J,new B.r(Math.cos(t)*11,Math.sin(t)*11),c9.$2(A.ab,3))}d2.restore()
for(d2=d5*0.8,v=0;v<4;++v){u=A.i.F(d2+v*0.25,1)
d3.O(new B.r(Math.sin(v*2+d5)*9,4-u*12),1.6+u*2,c8.$1(A.c.j(0.8*(1-u))))}}d3.O(D.eAI,2.4,c8.$1(c7?A.bj:A.an))
d3.O(D.aOr,2.4,c8.$1(A.an))
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
d3.jr(0,d4.y)
d3.ah(D.aae,D.aOd,c9.$2(A.bO,3))
d2.restore()
if(c7)for(d2=d5*9,t=d5*1.6,v=0;v<3;++v)d3.O(new B.r(Math.sin(d2+v*2)*9,-10-A.i.F(t+v*0.33,1)*12),2.4,c8.$1(A.f1))
return!0
case"drone":d3.aq(d0.$5(-10,-4,20,10,4),c8.$1(A.aM))
d3.O(A.hE,3,c8.$1(c7?A.bj:A.an))
r=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.c,t=-4+r,q=-6+r,p=0;p<2;++p){o=F.TS[p]
d3.ah(new B.r(o*0.4,1),new B.r(o,t),c9.$2(A.bA,3))
J.bs(d2.save())
d2.translate(o,q)
d3.ah(D.eAz,D.exz,c9.$2(A.c.j(c7?0.35:0.9),3))
if(c7)d3.c1(B.bY(A.J,6,24+Math.sin(d4.y*3)*4),c8.$1(A.c.j(0.25)))
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
d3.af(w,d1.$3(D.fmE,A.aQ,A.de))
d3.aE(D.flM,c8.$1(A.d0))
d2=d3.c
J.bs(d2.save())
d2.translate(18,-5)
d3.jr(0,d4.y*2)
d3.ah(A.J,D.exG,c9.$2(A.bO,2.4))
d3.ah(A.aaa,D.exF,c9.$2(A.i0,1))
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
d3.af(d2,c8.$1(A.bM.j(0.35*v)))}d3.aq(d0.$5(-26,-6,30,12,3),d1.$3(D.fmK,A.bk,A.cx))
n=new B.aH($.T().r,A.ak,c6,c6,B.a([],x.v))
n.E(new B.aZ(4,-6))
n.E(new B.aq(18,-12))
n.E(new B.aq(18,12))
n.E(new B.aq(4,6))
n.E(new B.bA())
d3.af(n,c8.$1(A.cU))
d3.O(D.exL,7,c8.$1(c7?A.c:A.d0))
return!0
case"neon":d3.aq(d0.$5(-30,-14,60,28,6),c8.$1(M.n8))
if(c7)m=d4.ax>0.5||A.o.F(A.i.bc(d5*17),3)!==0
else m=!1
l=m?A.c5:D.bv4
if(m){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.c5.j(0.35))
t.y=A.nh
d3.aq(d2,t)}d3.aq(d0.$5(-27,-11,54,22,5),c9.$2(l,2.2))
d6.$5(d3,"OPEN",D.eAW,l,17)
return!0
case"microwave":d3.aq(d0.$4(-30,-18,60,38),d1.$3(D.fmR,A.bO,A.bk))
d2=d0.$5(-26,-14,38,30,3)
d3.aq(d2,c8.$1(c7?A.bM.j(0.75):A.aw))
if(c7){d2=d3.c
J.bs(d2.save())
d2.translate(-7,8)
d3.jr(0,d4.y*0.5)
d3.c1(B.bY(A.J,7,22),c8.$1(A.de))
d2.restore()}d3.aq(d0.$5(15,-14,12,12,2),c8.$1(M.n8))
if(c7)d6.$5(d3,"0:"+A.a.aZ(A.o.v(59-A.o.F(A.i.bc(d5),60)),2,"0"),D.exM,A.bf,6.5)
d3.O(D.ey_,4,c8.$1(A.d0))
return!0
case"doorbell":d3.aq(d0.$5(-16,-26,32,52,8),c8.$1(A.bn))
d3.O(A.Ks,10,c8.$1(c7?A.bu:A.bA))
d2=d3.c
J.bs(d2.save())
d2.translate(0,-8)
d3.jr(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.eBE,A.c,16)
d2.restore()
d3.O(A.kQ,6,c8.$1(A.dg))
d3.O(A.kQ,6,c9.$2(A.c,1.6))
if(c7)for(d2=d5*14,v=1;v<=2;++v)d3.cQ(B.bX(A.Ks,14+v*6+A.i.F(d2,6)),-0.9,1.8,!1,c9.$2(A.bu.j(0.9-v*0.3),1.8))
return!0
case"camera":d3.ah(D.eAV,D.eBx,c9.$2(A.bA,4))
d2=d3.c
J.bs(d2.save())
d3.jr(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.aq(d0.$5(-24,-14,46,22,5),d1.$3(D.fmF,A.bO,A.an))
d3.O(D.aNV,8,c8.$1(A.aw))
d3.O(D.aNV,4.5,c8.$1(c7?A.aH:A.cx))
d3.O(D.eAT,2.2,c8.$1(c7&&A.o.F(A.i.bc(d5*1.6),2)===0?A.aC:A.kH))
d2.restore()
if(c7)d6.$5(d3,"REC",D.eB2,A.aC,9)
return!0
case"console":d3.aq(d0.$5(-28,-22,56,44,8),d1.$3(D.fmN,A.ir,A.fy))
d3.aq(d0.$5(-20,-17,40,22,3),c8.$1(A.dX))
if(c7){d2=d5*2.3
d3.O(new B.r(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aE(new B.a4(-18,t,-15.6,t+8),c8.$1(A.bf))
d2=-9+Math.sin(d2-0.4)*6
d3.aE(new B.a4(15.6,d2,18,d2+8),c8.$1(A.c5))}d3.O(D.eAO,4,c8.$1(A.b7))
d3.O(D.exH,2.4,c8.$1(A.aC))
d3.O(D.exY,2.4,c8.$1(A.bj))
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
d6.$5(d3,"72",D.exI,A.hI,11)
d2=d5*9
d6.$5(d3,"\u2665",D.eB7,A.hI.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.O(D.eAY,3,c8.$1(c7?A.bj:A.bA))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.aq(d2,c8.$1(A.cG.j(c7?0.5:0.3)))
d3.aq(d0.$5(-26,-20,52,40,4),c9.$2(A.ab,1.6))
d3.aE(D.fmH,c8.$1(F.wK))
if(c7){d2=d5*1.1
t=Math.sin(d2)
q=d3.c
J.bs(q.save())
q.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.nK(0,-1,1)
d3.c1(B.bY(A.J,8,14),c8.$1(A.cW))
d2=new B.aH($.T().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-6,0))
d2.E(new B.aq(-12,-4))
d2.E(new B.aq(-12,4))
d2.E(new B.bA())
d3.af(d2,c8.$1(A.ca))
d3.O(D.eyK,1.2,c8.$1(A.v))
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
d3.af(g,d1.$3(D.fni,A.c,A.bE))
d3.aE(D.fne,c8.$1(c7?A.eG:A.bA))
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
d3.O(D.exb,14,d2)}return!0
case"discoball":d3.ah(D.exd,W.aNM,c9.$2(A.d0,1.4))
d3.O(A.J,16,d1.$3(D.fmq,A.aS,A.an))
for(v=0;v<8;++v){d2=-12+v*3.4
d3.ah(new B.r(-16,d2),new B.r(16,d2),c9.$2(A.dJ,0.7))}for(v=0;v<5;++v){f=d4.y*0.5+v*1.26
d3.ah(new B.r(Math.cos(f)*16*0.3,Math.sin(f)*16*0.3),new B.r(Math.cos(f)*16,0),c9.$2(A.dJ,0.7))}if(c7)for(d2=d5*2,t=d5*9,v=0;v<10;++v){f=d2+v*0.63
e=22+A.o.F(v,3)*6
d3.O(new B.r(Math.cos(f)*e,Math.sin(f)*e*0.8),1.8,c8.$1(D.dsx[A.o.F(v,4)].j(0.5+0.5*Math.sin(t+v))))}return!0
case"robot":d3.aq(d0.$5(-14,-4,28,24,5),d1.$3(D.fmn,A.cD,A.an))
d3.aq(d0.$5(-12,-26,24,20,5),d1.$3(D.fmf,A.bn,A.bQ))
d3.ah(H.aNO,D.exf,c9.$2(A.bA,1.6))
d3.O(D.exg,2.2,c8.$1(c7?A.aC:A.bA))
d=c7&&A.i.F(d5*0.8,1)>0.08
for(p=0;p<2;++p){o=F.a7C[p]
if(c7)d2=d?A.bd:A.fv
else d2=A.cx
d3.O(new B.r(o,-17),3.2,c8.$1(d2))}d2=d3.c
J.bs(d2.save())
d2.translate(14,0)
d3.jr(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.ah(A.J,D.aa5,c9.$2(A.bQ,4))
d2.restore()
d3.ah(D.eAG,D.eB0,c9.$2(A.bQ,4))
d3.aE(D.fnd,c8.$1(c7?A.bd.j(0.7):A.aM))
return!0
case"toaster":a0=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a0*14,p=0;p<2;++p){t=d0.$5(D.aEx[p]+1,d2,10,14,2)
q=B.ap(A.bM,A.de,a0)
q.toString
d3.aq(t,c8.$1(q))}d3.aq(d0.$5(-24,-6,48,26,8),d1.$3(D.fmG,A.bO,A.bk))
for(p=0;p<2;++p){o=D.aEx[p]
d2=d0.$5(o,-5,12,5,2)
d3.aq(d2,c8.$1(c7?A.fK:A.aw))
if(c7){d2=d0.$5(o,-5,12,5,2)
t=c8.$1(A.cW.j(0.5))
t.y=O.oT
d3.aq(d2,t)}}d3.ah(D.ey7,D.eys,c9.$2(A.aw,3))
return!0
case"ledstrip":d3.aq(d0.$5(-34,-4,68,10,4),c8.$1(A.cx))
for(d2=d5*90,v=0;v<9;++v){a1=A.i.F(d2+v*40,360)
l=c7?new Ay.pC(1,a1,0.8,1).jd():A.cU
if(c7){t=c8.$1(l.j(0.45))
t.y=O.oT
d3.O(new B.r(-30+v*7.5,1),7,t)}d3.O(new B.r(-30+v*7.5,1),2.6,c8.$1(l))}d3.aq(d0.$5(-40,-2,6,6,1),c8.$1(A.d0))
return!0
case"pump":d3.aq(d0.$5(-16,-2,32,22,6),d1.$3(D.fmw,A.cG,A.GN))
d3.O(D.eBa,8,c8.$1(A.tf))
d2=d3.c
J.bs(d2.save())
d2.translate(-2,9)
d3.jr(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
d3.ah(A.J,new B.r(Math.cos(t)*7,Math.sin(t)*7),c9.$2(A.fC,2.4))}d2.restore()
d2=new B.aH($.T().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(16,6))
d2.E(new B.aq(26,6))
d2.E(new B.aq(26,-20))
d2.E(new B.aq(10,-20))
d3.af(d2,c9.$2(A.bQ,4))
if(c7){for(d2=d5*0.9,v=0;v<5;++v)d3.O(new B.r(26,6-A.i.F(d2+v*0.2,1)*26),2.2,c8.$1(A.hk))
d3.O(D.ezo,3.2,c8.$1(A.hk.j(0.7)))}return!0
case"hairdryer":d2=d3.c
J.bs(d2.save())
d3.jr(0,-0.15)
d3.aq(d0.$5(-26,-14,40,22,10),d1.$3(D.fmI,A.hZ,A.uU))
d3.aq(d0.$5(14,-10,12,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-10,6,12,22,4),c8.$1(A.cU))
d2.restore()
if(c7){for(d2=d5*3,v=0;v<4;++v){u=A.i.F(d2+v*0.25,1)
t=u*18
q=-10+v*5
d3.ah(new B.r(24+t,q),new B.r(32+t,q),c9.$2(A.c.j(1-u),1.8))}d2=c8.$1(A.cW.j(0.4))
d2.y=O.oT
d3.O(D.exZ,8,d2)}return!0
case"headphones":d3.cQ(B.bY(A.dS,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.bA,4))
for(d2=d5*12,p=0;p<2;++p){o=F.TR[p]
t=o-7
d3.aq(d0.$5(t,0,14,20,6),d1.$3(new B.a4(t,0,t+14,20),A.bl,A.n2))
if(c7)for(t=o<0,v=1;v<=2;++v){q=B.bX(new B.r(o,10),10+v*5+A.i.F(d2,5))
h=t?2.2:-0.9
d3.cQ(q,h,1.6,!1,c9.$2(A.eH.j(0.9-v*0.3),1.6))}}if(c7)d6.$5(d3,"\u266a",new B.r(-4,-8-A.i.F(d5*14,8)),A.kZ,12)
return!0
case"smartwatch":d3.aq(d0.$5(-8,-30,16,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-8,14,16,14,3),c8.$1(A.cx))
d3.aq(d0.$5(-14,-17,28,32,8),d1.$3(D.fmk,A.d0,A.cU))
d3.aq(d0.$5(-11,-14,22,26,6),c8.$1(A.dX))
if(c7){a2=new B.W(Date.now(),0,!1)
d6.$5(d3,A.a.aZ(A.o.v(B.d_(a2)),2,"0")+":"+A.a.aZ(A.o.v(B.fA(a2)),2,"0"),D.exm,A.bf,9.5)
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
d2.clipRRect(B.nd(a3),$.mP(),!0)
d2.translate(-27,-19)
K.Ms(d3,D.ftI,d5,!1,c6,c6)
d2.restore()}else d3.aq(a3,c8.$1(D.wQ))
return!0
case"buck":a4=d0.$5(-26,-22,52,42,5)
d3.aq(a4,d1.$3(new B.a4(a4.a,a4.b,a4.c,a4.d),A.dW,A.dl))
d3.aq(a4,c9.$2(A.aT,1.2))
d3.O(D.aOk,9,c8.$1(A.aw))
d3.O(D.aOk,6,c9.$2(A.de,2))
d3.aq(d0.$5(4,-2,14,10,2),c8.$1(A.aw))
d3.aq(d0.$5(-22,-19,44,12,2),c8.$1(A.dX))
d2=A.i.a5(d4.db,1)
t=A.i.a5(c7?d4.dx:d4.e,1)
q=c7?A.bf:A.an
d6.$5(d3,d2+"\u2192"+t+"V",D.ezy,q,8.2)
d3.O(D.exQ,2.4,c8.$1(c7?A.bj:A.aM))
d6.$5(d3,"IN",D.eB1,A.ab,6)
d6.$5(d3,"OUT",D.eze,A.ab,6)
return!0
case"regulator":a5=c7?A.i.D(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=B.ap(A.bQ,A.aC,a5)
t.toString
d3.aq(d2,c8.$1(t))
d3.O(H.aa3,3,c8.$1(A.aM))
d3.aq(d0.$5(-12,-4,24,18,3),d1.$3(D.fmg,A.cU,A.im))
d6.$5(d3,"7805",D.aae,A.ab,8)
for(p=0;p<3;++p){d2=D.dzu[p]-1
d3.aE(new B.a4(d2,14,d2+2,22),c8.$1(A.dT))}if(a5>0.2)for(d2=d5*0.9,v=0;v<3;++v){u=A.i.F(d2+v*0.33,1)
d3.O(new B.r(-6+v*6,-28-u*12),2+u*2,c8.$1(A.c.j(0.5*(1-u))))}d6.$5(d3,"5V",D.eBA,A.bq,9)
return!0
case"diode":d3.ah(D.aOp,D.aO7,c9.$2(A.dT,2.4))
d3.aq(d0.$5(-14,-7,28,14,6),c8.$1(A.as.j(0.85)))
d3.aE(D.fm_,c8.$1(A.bq))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.eG.j(0.4))
t.y=A.l7
d3.aq(d2,t)}d2=new B.aH($.T().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-8,-4))
d2.E(new B.aq(-8,4))
d2.E(new B.aq(-1,0))
d2.E(new B.bA())
d3.af(d2,c8.$1(A.b7))
d6.$5(d3,"one way",D.eAR,A.aF,8)
return!0
case"ldr":d3.ah(D.aOp,D.aae,c9.$2(A.dT,2.4))
d3.ah(D.aOd,D.aO7,c9.$2(A.dT,2.4))
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
d2=B.ap(A.bA,A.eG,d4.f)
d2.toString
d6.$5(d3,"\u2600",new B.r(-6,-26),d2,14)
d6.$5(d3,""+A.i.S(20+980*(1-d4.f))+"\u03a9",D.eAH,A.ab,8.5)
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
h.clipRRect(B.nd(a3),$.mP(),!0)
h.translate(t,q)
K.h4Y(d3,new B.av(a3.c-t,a3.d-q),d4.at,d5,d4.ax,-1,c6,c6)
h.restore()
d3.O(D.eyv,1.6,c8.$1(A.bf))}else{d3.aq(a3,c8.$1(D.wQ))
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
d3.af(K.hNe(),c8.$1(A.cy))
d2.restore()}else{switch(d2){case"lgtv":d2=F.aTD
break
case"sonytv":d2=F.aTv
break
default:d2=F.aTx
break}a8=B.fY(c6,A.cK,c6,c6,c6,B.cW(c6,c6,c6,c6,c6,c6,c6,c6,c6,B.l(c6,c6,d2.b,c6,c6,c6,c6,c6,c6,c6,c6,3.6,c6,c6,A.D,c6,1,!0,c6,0.25,c6,c6,c6,c6,c6,c6),d2.a),A.a7,A.cc,c6,A.e3,A.cd)
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
d3.aq(w,d1.$3(new B.a4(h,b3,b4,b5),b7,b6))
a3=d0.$5(t+2,q,b1-4,b2-4,3.5)
if(c7){t=d3.c
J.bs(t.save())
t.clipRRect(B.nd(a3),$.mP(),!0)
q=a3.a
h=a3.b
t.translate(q,h)
K.Ms(d3,new B.av(a3.c-q,a3.d-h),d5,!1,c6,c6)
t.restore()}else d3.aq(a3,c8.$1(D.wQ))
if(b0){t=a3.b
q=a3.d
d3.ah(new B.r(0,t),new B.r(0,q),c9.$2(A.v.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.aq(d0.$5(-4,a3.b+1.2,8,2.6,1.3),c8.$1(A.v))
else{d2=b0?b1/2-7:0
d3.O(new B.r(d2,a3.b+3),1.3,c8.$1(A.v))}return!0
case"ereader":d3.aq(d0.$5(-17,-28,34,52,4),c8.$1(A.cU))
d3.aq(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bO))
if(c7){d6.$5(d3,"NGMY",D.eBH,A.aw,9)
for(v=0;v<9;++v){d2=-9+v*3.6
t=A.o.F(v,4)===3?14:22
d3.aE(new B.a4(-11,d2,-11+t,d2+1.4),c8.$1(A.bk))}d3.O(A.aa1,1.6,c8.$1(A.aw))}return!0
case"laptop":d3.aq(d0.$5(-30,-28,60,42,4),d1.$3(D.fmS,A.cD,A.bk))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nd(b8),$.mP(),!0)
t=b8.a
q=b8.b
d2.translate(t,q)
K.Ms(d3,new B.av(b8.c-t,b8.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(b8,c8.$1(D.wQ))
d2=new B.aH($.T().r,A.ak,c6,c6,B.a([],x.v))
d2.E(new B.aZ(-38,16))
d2.E(new B.aq(38,16))
d2.E(new B.aq(34,21))
d2.E(new B.aq(-34,21))
d2.E(new B.bA())
d3.af(d2,c8.$1(D.akd))
d3.aq(d0.$5(-7,16,14,2,1),c8.$1(A.bk))
return!0
case"imac":d3.aq(d0.$5(-32,-28,64,46,5),d1.$3(D.fmW,A.cm,A.cD))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nd(b9),$.mP(),!0)
t=b9.a
q=b9.b
d2.translate(t,q)
K.Ms(d3,new B.av(b9.c-t,b9.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(b9,c8.$1(D.wQ))
d3.O(D.ewZ,2,c8.$1(A.bQ))
d2=new B.aH($.T().r,A.ak,c6,c6,B.a([],x.v))
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
d2.clipRRect(B.nd(c0),$.mP(),!0)
t=c0.a
q=c0.b
d2.translate(t,q)
K.Ms(d3,new B.av(c0.c-t,c0.d-q),d5,!1,c6,c6)
d2.restore()}else d3.aq(c0,c8.$1(D.wQ))
d3.aE(D.fn2,c8.$1(A.bk))
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
d2.clipRRect(B.nd(c1),$.mP(),!0)
t=c1.a
q=c1.b
d2.translate(t,q)
K.Ms(d3,new B.av(c1.c-t,c1.d-q),d5,!1,c6,c6)
d2.restore()}d3.aq(d0.$5(-26,-4,52,24,6),d1.$3(D.fmJ,A.hX,A.d0))
d3.O(D.aNT,7,c8.$1(A.aw))
d3.O(D.aNT,4,c8.$1(c7?A.eG:A.cx))
for(v=0;v<4;++v){d2=-20+v*4
d3.ah(new B.r(d2,2),new B.r(d2,14),c9.$2(A.dJ,1))}return!0
case"carscreen":d3.aq(d0.$5(-34,-10,68,32,12),c8.$1(A.aw))
c2=d0.$5(-30,-20,60,28,8)
d3.aq(c2,c8.$1(M.n8))
d3.aq(c2,c9.$2(A.bA,1.2))
if(c7){c3=new B.aH($.T().r,A.ak,c6,c6,B.a([],x.v))
c3.E(new B.aZ(-26,4))
c3.E(new B.cj(-10,-14+Math.sin(d5)*3,6,-6))
c3.E(new B.aq(22,-16))
d3.af(c3,c9.$2(A.aH,2.2))
d2=A.i.F(d5*6,48)
d3.O(new B.r(-26+d2,4-d2*0.1),2.4,c8.$1(A.bf))
d6.$5(d3,""+(88+A.o.F(A.i.bc(d5*2),5)),H.aOc,A.c,10)
d6.$5(d3,"km/h",D.ezm,A.aF,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.aq(c4,d1.$3(new B.a4(c4.a,c4.b,c4.c,c4.d),A.d0,A.cU))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.c
J.bs(d2.save())
d2.clipRRect(B.nd(c5),$.mP(),!0)
t=c5.a
q=c5.b
d2.translate(t,q)
K.Ms(d3,new B.av(c5.c-t,c5.d-q),d5,!1,c6,c6)
d2.restore()
d2=c8.$1(A.bl.j(0.2))
d2.y=A.nh
d3.O(A.J,26,d2)}else d3.aq(c5,c8.$1(A.a_))
d3.ah(D.eBh,D.eBm,c9.$2(A.bk,4))
d3.ah(D.eyx,D.eyN,c9.$2(A.bk,4))
return!0}return!1},
h4I:function h4I(){},
h4K:function h4K(){},
h4L:function h4L(){},
h4J:function h4J(){},
hup(d,e,f,g){return new C.akU(d,g,f,e)},
GI(d,e,f){return new C.beM(d,e,f)},
akU:function akU(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
akV:function akV(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bM8:function bM8(d,e){this.a=d
this.b=e},
bM9:function bM9(d){this.a=d},
bM7:function bM7(d){this.a=d},
bMa:function bMa(){},
bMb:function bMb(d){this.a=d},
bMc:function bMc(d,e,f){this.a=d
this.b=e
this.c=f},
bM6:function bM6(d,e){this.a=d
this.b=e},
bM3:function bM3(d,e){this.a=d
this.b=e},
bM4:function bM4(d,e,f){this.a=d
this.b=e
this.c=f},
bLY:function bLY(d,e){this.a=d
this.b=e},
bLZ:function bLZ(){},
bM5:function bM5(d,e,f){this.a=d
this.b=e
this.c=f},
bM2:function bM2(d,e){this.a=d
this.b=e},
bM_:function bM_(d,e){this.a=d
this.b=e},
bM0:function bM0(d,e){this.a=d
this.b=e},
bM1:function bM1(d){this.a=d},
bMs:function bMs(d){this.a=d},
bMt:function bMt(){},
bLy:function bLy(){},
bMu:function bMu(d,e){this.a=d
this.b=e},
bMr:function bMr(d,e){this.a=d
this.b=e},
bMm:function bMm(d){this.a=d},
bMj:function bMj(d,e,f){this.a=d
this.b=e
this.c=f},
bMk:function bMk(d,e){this.a=d
this.b=e},
bMn:function bMn(d){this.a=d},
bMh:function bMh(d,e){this.a=d
this.b=e},
bMi:function bMi(d,e){this.a=d
this.b=e},
bMl:function bMl(d){this.a=d},
bMo:function bMo(d){this.a=d},
bMe:function bMe(d,e){this.a=d
this.b=e},
bMf:function bMf(d,e){this.a=d
this.b=e},
bMg:function bMg(d,e){this.a=d
this.b=e},
bMp:function bMp(d){this.a=d},
bMd:function bMd(d){this.a=d},
bMq:function bMq(d){this.a=d},
bLz:function bLz(d,e){this.a=d
this.b=e},
bLV:function bLV(d,e){this.a=d
this.b=e},
bLX:function bLX(d,e){this.a=d
this.b=e},
bLW:function bLW(d,e){this.a=d
this.b=e},
bLU:function bLU(){},
bLG:function bLG(d){this.a=d},
bLF:function bLF(d){this.a=d},
bLH:function bLH(d,e){this.a=d
this.b=e},
bLI:function bLI(d){this.a=d},
bLE:function bLE(d){this.a=d},
bLM:function bLM(d,e,f){this.a=d
this.b=e
this.c=f},
bLD:function bLD(d,e){this.a=d
this.b=e},
bLN:function bLN(d,e){this.a=d
this.b=e},
bLO:function bLO(d,e){this.a=d
this.b=e},
bLP:function bLP(d,e){this.a=d
this.b=e},
bLQ:function bLQ(d,e,f){this.a=d
this.b=e
this.c=f},
bLC:function bLC(d,e){this.a=d
this.b=e},
bLR:function bLR(d,e,f){this.a=d
this.b=e
this.c=f},
bLB:function bLB(d,e){this.a=d
this.b=e},
bLS:function bLS(d,e,f){this.a=d
this.b=e
this.c=f},
bLA:function bLA(d,e){this.a=d
this.b=e},
bLT:function bLT(d){this.a=d},
bLJ:function bLJ(d){this.a=d},
bLK:function bLK(d){this.a=d},
bLL:function bLL(d){this.a=d},
beM:function beM(d,e,f){this.a=d
this.b=e
this.c=f},
fAu:function fAu(){},
fAv:function fAv(){},
fAw:function fAw(){},
fAh:function fAh(){},
fAx:function fAx(){},
fAg:function fAg(){},
fAy:function fAy(){},
fAl:function fAl(){},
fAf:function fAf(){},
fAm:function fAm(){},
fAe:function fAe(){},
fAn:function fAn(){},
fAd:function fAd(){},
fAo:function fAo(){},
fAb:function fAb(){},
fAc:function fAc(){},
fAp:function fAp(){},
fA9:function fA9(){},
fAa:function fAa(){},
fAq:function fAq(){},
fA8:function fA8(){},
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
e54:function e54(d,e){this.a=d
this.b=e},
e5d:function e5d(d){this.a=d},
e5e:function e5e(){},
e5f:function e5f(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e5g:function e5g(){},
e53:function e53(d){this.a=d},
e52:function e52(d,e,f){this.a=d
this.b=e
this.c=f},
e51:function e51(d,e){this.a=d
this.b=e},
e5_:function e5_(d){this.a=d},
e50:function e50(){},
e5c:function e5c(d){this.a=d},
e5b:function e5b(d){this.a=d},
e59:function e59(d,e){this.a=d
this.b=e},
e57:function e57(d){this.a=d},
e58:function e58(){},
e5a:function e5a(d,e,f){this.a=d
this.b=e
this.c=f},
e55:function e55(d,e){this.a=d
this.b=e},
e56:function e56(){},
e5i:function e5i(d){this.a=d},
e5j:function e5j(d,e){this.a=d
this.b=e},
e5h:function e5h(){},
e5k:function e5k(d,e){this.a=d
this.b=e},
e5l:function e5l(d){this.a=d},
e5m:function e5m(d){this.a=d},
aAc:function aAc(d,e){this.c=d
this.a=e},
bcR:function bcR(d,e){var _=this
_.d=$
_.bv$=d
_.ab$=e
_.c=_.a=null},
cO0:function cO0(d){this.a=d},
bcQ:function bcQ(d,e){this.b=d
this.a=e},
cO_:function cO_(d){this.a=d},
aAx:function aAx(){},
aAy:function aAy(){},
aMS:function aMS(){},
bBI:function bBI(){},
iCO(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bX(A.w2,23)
$.T()
b8=B.L()
b8.r=A.aw.gp(0)
b9.O(A.w2,25,b8)
b8=B.L()
b8.san(D.eKq.az(0,v))
b9.O(A.w2,23,b8)
for(u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
b8=Math.cos(t)
s=Math.sin(t)
r=Math.cos(t)
q=Math.sin(t)
p=new B.ar(A.T,A.Q,A.W,A.X,A.U)
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
c2.$5(b9,w?"V":"A",D.eBp,A.bq,12)
c2.$5(b9,w?A.i.a5(o,1)+" V":""+A.i.S(o*1000)+" mA",D.eAL,A.aw,9.5)
return!0
case"fan":b8=B.bw(D.fmc,A.hq)
$.T()
s=B.L()
s.r=A.bA.gp(0)
b9.aq(b8,s)
s=B.L()
s.r=A.an.gp(0)
b9.aE(D.fn3,s)
s=B.L()
s.r=A.a_.j(0.6).gp(0)
b9.O(H.w3,22,s)
for(b8=b9.c,u=0;u<4;++u){J.bs(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.bY(A.aNL,18,10)
r=new B.ar(A.T,A.Q,A.W,A.X,A.U)
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
case"speaker":n=B.bw(D.aU2,A.qi)
$.T()
b8=B.L()
b8.san(D.av9.az(0,new B.a4(n.a,n.b,n.c,n.d)))
b9.aq(n,b8)
m=b7?Math.sin(c1*40)*1.6:0
b8=B.L()
b8.san(D.eKN.az(0,B.bX(A.cz,15)))
b9.O(A.cz,14+m,b8)
b8=B.L()
b8.r=A.d0.gp(0)
b9.O(A.cz,5,b8)
b8=B.L()
b8.r=A.bk.gp(0)
b9.O(H.aa2,5+m*0.4,b8)
if(b7)for(b8=c1*18,u=1;u<=3;++u){s=B.bX(D.ey6,6+u*6+A.i.F(b8,6))
r=new B.ar(A.T,A.Q,A.W,A.X,A.U)
r.b=A.ac
r.c=1.8
r.r=A.c5.j(0.9-u*0.2).gp(0)
b9.cQ(s,-0.8,1.6,!1,r)}return!0
case"clock":l=B.bw(D.fmV,A.qi)
$.T()
b8=B.L()
b8.san(D.ccE.az(0,new B.a4(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
b8=B.bw(D.aU4,A.jJ)
s=B.L()
s.r=A.im.gp(0)
b9.aq(b8,s)
if(b7){k=new B.W(Date.now(),0,!1)
j=B.G4(k)<500?":":" "
i=A.a.aZ(A.o.v(B.d_(k)),2,"0")
h=A.a.aZ(A.o.v(B.fA(k)),2,"0")
b8=B.L()
b8.r=A.bf.j(0.12).gp(0)
b9.aE(D.aU4,b8)
c2.$5(b9,i+j+h,D.eB5,A.bf,21)}b8=B.L()
b8.r=A.cD.gp(0)
b9.O(D.eB3,2.4,b8)
b8=B.L()
b8.r=A.cD.gp(0)
b9.O(D.eyb,2.4,b8)
return!0
case"calculator":l=B.bw(D.fmB,A.iD)
$.T()
b8=B.L()
b8.san(D.avc.az(0,new B.a4(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
b8=B.bw(D.fmu,A.hF)
s=B.L()
s.r=(b7?A.a_W:D.bvI).gp(0)
b9.aq(b8,s)
if(b7)c2.$5(b9,"3.14159",D.eAK,A.Zz,10.5)
for(g=0;g<4;++g)for(b8=-6+g*8,s=b8+6,f=0;f<4;++f){r=-15+f*8
r=B.bw(new B.a4(r,b8,r+6,s),A.Fh)
$.T()
q=new B.ar(A.T,A.Q,A.W,A.X,A.U)
q.r=(f===3?A.ca:A.bO).gp(0)
b9.aq(r,q)}return!0
case"phone":l=B.bw(D.fmp,A.iD)
$.T()
b8=B.L()
b8.r=M.n8.gp(0)
b9.aq(l,b8)
b8=B.L()
b8.b=A.ac
b8.c=1.9
b8.r=D.ama.gp(0)
b9.aq(l,b8)
e=B.bw(D.fme,A.hq)
if(b7){b8=B.L()
b8.san(D.ce0.az(0,new B.a4(e.a,e.b,e.c,e.d)))
b9.aq(e,b8)
b8=b9.c
J.bs(b8.save())
b8.clipRRect(B.nd(e),$.mP(),!0)
b8.translate(-12,-25)
K.Ms(b9,D.ftk,c1,!1,b6,b6)
b8.restore()
d=A.i.F(c1*0.12,1)
b8=B.bw(D.fmb,A.hF)
s=B.L()
s.r=A.b7.gp(0)
b9.aq(b8,s)
s=B.L()
s.r=A.bf.gp(0)
b9.aE(new B.a4(-10,14.5,-10+20*d,16.9),s)
c2.$5(b9,"\u26a1"+A.i.S(d*100)+"%",D.ezS,A.c,6)}else{b8=B.L()
b8.r=D.wQ.gp(0)
b9.aq(e,b8)}b8=B.bw(D.fnj,D.eKW)
s=B.L()
s.r=A.v.gp(0)
b9.aq(b8,s)
return!0
case"router":l=B.bw(D.fmU,A.pi)
$.T()
b8=B.L()
b8.san(D.ccW.az(0,new B.a4(l.a,l.b,l.c,l.d)))
b9.aq(l,b8)
for(a0=0;a0<2;++a0){a1=F.TR[a0]
b8=a1<0?-4:4
s=new B.ar(A.T,A.Q,A.W,A.X,A.U)
s.r=A.cx.gp(0)
s.c=4
s.d=A.bG
b9.ah(new B.r(a1,-4),new B.r(a1+b8,-28),s)}for(u=0;u<4;++u){if(b7)a2=A.o.F(A.i.bc(c1*(3+u*1.3)),2)===0||u===0
else a2=!1
b8=new B.ar(A.T,A.Q,A.W,A.X,A.U)
b8.r=(a2?A.bj:A.aM).gp(0)
b9.O(new B.r(-15+u*10,11),2.6,b8)}if(b7)for(b8=c1*10,u=1;u<=3;++u){s=B.bX(H.w3,8+u*6+A.i.F(b8,6))
r=new B.ar(A.T,A.Q,A.W,A.X,A.U)
r.b=A.ac
r.c=1.8
r.r=A.fY.j(0.9-u*0.2).gp(0)
b9.cQ(s,-2.3,1.5,!1,r)}return!0
case"siren":a3=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bw(D.fmA,A.hq)
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
a4.E(new B.cj(0,-30,16,-2))
a4.E(new B.aq(16,12))
a4.E(new B.bA())
b8=B.L()
b8.r=B.ap(A.ey,D.bm4,a3).gp(0)
b9.af(a4,b8)
b8=B.L()
b8.b=A.ac
b8.c=1.4
b8.r=A.bY.gp(0)
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
q.san(D.caU.az(0,D.fmM))
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
for(a0=0;a0<2;++a0){a1=F.aEy[a0]
s=new B.ar(A.T,A.Q,A.W,A.X,A.U)
s.r=A.aw.gp(0)
b9.O(new B.r(a1,10),7.5,s)
J.bs(b8.save())
b8.translate(a1,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.ar(A.T,A.Q,A.W,A.X,A.U)
q.r=A.bO.gp(0)
q.c=1.6
b9.ah(A.J,new B.r(r*5.5,s*5.5),q)}b8.restore()}b8.restore()
if(b7)for(b8=c1*40,u=0;u<3;++u){s=A.i.F(b8+u*8,14)
r=-4+u*5
q=new B.ar(A.T,A.Q,A.W,A.X,A.U)
q.r=A.aF.gp(0)
q.c=1.6
b9.ah(new B.r(-34-s,r),new B.r(-42-s,r),q)}return!0
case"kettle":b8=$.T().r
s=x.v
l=new B.aH(b8,A.ak,b6,b6,B.a([],s))
l.E(new B.aZ(-18,20))
l.E(new B.aq(-14,-12))
l.E(new B.cj(0,-20,14,-12))
l.E(new B.aq(18,20))
l.E(new B.bA())
r=B.L()
r.san(D.cc2.az(0,D.fmz))
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
s.E(new B.cj(-34,-6,-18,12))
b8=B.L()
b8.b=A.ac
b8.c=5
b8.r=A.aw.gp(0)
b9.af(s,b8)
b8=B.L()
if(b7){s=B.ap(A.cW,A.v2,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.cU
b8.r=s.gp(0)
b9.aE(D.fmy,b8)
if(b7){b8=B.L()
b8.r=A.cW.j(0.3).gp(0)
b8.y=A.nh
b9.O(A.aNJ,24,b8)
for(b8=c1*0.9,u=0;u<4;++u){a6=A.i.F(b8+u*0.25,1)
s=Math.sin(a6*9+u)
r=new B.ar(A.T,A.Q,A.W,A.X,A.U)
r.r=A.c.j(0.6*(1-a6)).gp(0)
b9.O(new B.r(30+s*4,-26-a6*26),3+a6*5,r)}}b8=B.L()
b8.r=A.aw.gp(0)
b9.O(D.ex9,3,b8)
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
s.y=Z.Px
b9.O(D.eBb,24,s)}b8=B.bw(D.fnc,A.hq)
s=$.T()
r=B.L()
r.r=A.cU.gp(0)
b9.aq(b8,r)
r=B.L()
r.r=A.d0.gp(0)
r.c=3
r.d=A.bG
b9.ah(D.exp,D.aNW,r)
r=B.L()
r.r=A.d0.gp(0)
r.c=3
r.d=A.bG
b9.ah(D.aNW,D.eBc,r)
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
b9.O(D.eBf,4,b8)
return!0
case"lights":b8=$.T().r
s=x.v
a8=new B.aH(b8,A.ak,b6,b6,B.a([],s))
a8.E(new B.aZ(-34,-6))
a8.E(new B.cj(0,22,34,-6))
r=B.L()
r.b=A.ac
r.c=2
r.r=A.hY.gp(0)
b9.af(a8,r)
for(r=c1*2.4,u=0;u<5;++u){a9=(u+0.5)/5
q=-34+68*a9
p=-6+4*a9*(1-a9)*4*4.2/1*0.75+0
b0=b7&&A.i.F(r+u*0.7,1.8)<1.1
if(b0){b1=new B.ar(A.T,A.Q,A.W,A.X,A.U)
b1.r=D.a6B[u].j(0.6).gp(0)
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
q=new B.ar(A.T,A.Q,A.W,A.X,A.U)
if(b0)p=D.a6B[u]
else{p=B.ap(D.a6B[u],A.v,0.65)
p.toString}q.r=p.gp(0)
b9.af(b2,q)}return!0}return C.iCN(b9,c0,c1,c2)},
h3:function h3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hpm(d){var w=D.mF.h(0,d)
return(w==null?null:w.b)===D.Bg},
iE2(d,e,f){return B.a7(d,!1).c8(B.vz(null,!1,!0,!0,new C.h9Q(e,f),A.eW,null,A.pP,new C.h9R(),x.H))},
Kr:function Kr(d,e){this.a=d
this.b=e},
mh:function mh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h9Q:function h9Q(d,e){this.a=d
this.b=e},
h9R:function h9R(){},
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
e10:function e10(d,e){this.a=d
this.b=e},
e11:function e11(d,e,f){this.a=d
this.b=e
this.c=f},
e1b:function e1b(d,e,f){this.a=d
this.b=e
this.c=f},
e1_:function e1_(d,e){this.a=d
this.b=e},
e0Z:function e0Z(d,e){this.a=d
this.b=e},
e1c:function e1c(d,e){this.a=d
this.b=e},
e1d:function e1d(d){this.a=d},
e0T:function e0T(d,e){this.a=d
this.b=e},
e0S:function e0S(d,e){this.a=d
this.b=e},
e0R:function e0R(d){this.a=d},
e19:function e19(){},
e15:function e15(d){this.a=d},
e16:function e16(d){this.a=d},
e17:function e17(d){this.a=d},
e18:function e18(d){this.a=d},
e1e:function e1e(d){this.a=d},
e14:function e14(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e12:function e12(){},
e13:function e13(d){this.a=d},
e1a:function e1a(d,e){this.a=d
this.b=e},
e0Y:function e0Y(d,e){this.a=d
this.b=e},
e0W:function e0W(d){this.a=d},
e0X:function e0X(d){this.a=d},
e0Q:function e0Q(d){this.a=d},
e0V:function e0V(d,e,f){this.a=d
this.b=e
this.c=f},
e0U:function e0U(d){this.a=d},
bzK:function bzK(d,e,f){this.b=d
this.c=e
this.a=f},
agF:function agF(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aOG:function aOG(){},
a2K(d,e,f,g,h,i){return new C.byw(d,e,f,g,h,i)},
byw:function byw(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fAZ:function fAZ(){},
fB_:function fB_(){},
fB0:function fB0(){},
fB1:function fB1(){},
fB2:function fB2(){},
fB3:function fB3(){},
fB4:function fB4(){},
fB5:function fB5(){},
aag:function aag(d){this.a=d},
cpl:function cpl(d){this.a=d},
cpm:function cpm(){},
cpk:function cpk(d,e){this.a=d
this.b=e},
cpj:function cpj(d){this.a=d},
Ye:function Ye(d){this.a=d},
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
f19:function f19(d){this.a=d},
f15:function f15(d){this.a=d},
f14:function f14(d,e){this.a=d
this.b=e},
f17:function f17(d,e){this.a=d
this.b=e},
f16:function f16(d,e){this.a=d
this.b=e},
f18:function f18(d){this.a=d},
bzW:function bzW(d,e,f){this.b=d
this.c=e
this.a=f},
WZ:function WZ(d){this.a=d},
bnN:function bnN(d,e,f,g,h,i){var _=this
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
e8N:function e8N(){},
e8O:function e8O(){},
e8I:function e8I(d,e){this.a=d
this.b=e},
e8K:function e8K(d,e){this.a=d
this.b=e},
e8L:function e8L(d){this.a=d},
e8J:function e8J(d){this.a=d},
e8M:function e8M(d){this.a=d},
buz:function buz(d,e,f){this.b=d
this.c=e
this.a=f},
W9:function W9(d){this.a=d},
bnm:function bnm(d,e,f,g,h,i){var _=this
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
dTk:function dTk(){},
dTl:function dTl(){},
dTf:function dTf(){},
dTi:function dTi(d,e){this.a=d
this.b=e},
dTh:function dTh(d,e){this.a=d
this.b=e},
dTj:function dTj(d){this.a=d},
dTg:function dTg(d){this.a=d},
aLg:function aLg(d,e,f){this.a=d
this.b=e
this.c=f},
WQ:function WQ(d){this.a=d},
bnE:function bnE(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
e4z:function e4z(d,e){this.a=d
this.b=e},
e4A:function e4A(d){this.a=d},
e4y:function e4y(d,e){this.a=d
this.b=e},
e4B:function e4B(d){this.a=d},
e4x:function e4x(d,e){this.a=d
this.b=e},
e4C:function e4C(d){this.a=d},
e4w:function e4w(d,e){this.a=d
this.b=e},
e4D:function e4D(d,e){this.a=d
this.b=e},
e4v:function e4v(d,e){this.a=d
this.b=e},
e4E:function e4E(d){this.a=d},
e4u:function e4u(d,e){this.a=d
this.b=e},
e4F:function e4F(d){this.a=d},
e4t:function e4t(d){this.a=d},
e4G:function e4G(d){this.a=d},
e4s:function e4s(d){this.a=d},
e4H:function e4H(d){this.a=d},
e4I:function e4I(d){this.a=d},
e4r:function e4r(d){this.a=d},
bpH:function bpH(d,e,f){this.b=d
this.c=e
this.a=f},
XB:function XB(d){this.a=d},
aH4:function aH4(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
ewq:function ewq(d,e){this.a=d
this.b=e},
ewr:function ewr(d,e,f){this.a=d
this.b=e
this.c=f},
ewp:function ewp(d,e,f){this.a=d
this.b=e
this.c=f},
ews:function ews(d){this.a=d},
ewo:function ewo(d){this.a=d},
eww:function eww(d){this.a=d},
ewv:function ewv(d,e){this.a=d
this.b=e},
ewu:function ewu(d,e){this.a=d
this.b=e},
ewx:function ewx(d,e){this.a=d
this.b=e},
ewt:function ewt(d,e){this.a=d
this.b=e},
ewy:function ewy(d){this.a=d},
XM:function XM(d){this.a=d},
aHr:function aHr(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eJi:function eJi(d){this.a=d},
eJj:function eJj(d){this.a=d},
eJg:function eJg(d,e){this.a=d
this.b=e},
eJh:function eJh(d){this.a=d},
eJf:function eJf(d){this.a=d},
eJk:function eJk(d){this.a=d},
eJl:function eJl(d){this.a=d},
eJm:function eJm(d){this.a=d},
eJn:function eJn(d,e){this.a=d
this.b=e},
Y5:function Y5(d){this.a=d},
boV:function boV(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eXv:function eXv(){},
eXE:function eXE(){},
eXA:function eXA(d){this.a=d},
eXz:function eXz(){},
eXB:function eXB(d,e){this.a=d
this.b=e},
eXy:function eXy(d,e){this.a=d
this.b=e},
eXC:function eXC(d){this.a=d},
eXx:function eXx(d,e){this.a=d
this.b=e},
eXD:function eXD(d){this.a=d},
eXw:function eXw(d){this.a=d},
XA:function XA(d){this.a=d},
bop:function bop(d,e,f,g,h,i,j,k){var _=this
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
ev5:function ev5(){},
ev6:function ev6(){},
euZ:function euZ(d){this.a=d},
euY:function euY(d){this.a=d},
ev_:function ev_(d){this.a=d},
euX:function euX(d){this.a=d},
ev0:function ev0(d){this.a=d},
euW:function euW(d){this.a=d},
ev1:function ev1(d,e){this.a=d
this.b=e},
euV:function euV(d,e){this.a=d
this.b=e},
ev2:function ev2(d){this.a=d},
euU:function euU(d,e){this.a=d
this.b=e},
ev3:function ev3(d){this.a=d},
euT:function euT(d,e){this.a=d
this.b=e},
ev4:function ev4(d){this.a=d},
euS:function euS(d,e){this.a=d
this.b=e},
bha:function bha(d,e,f){this.c=d
this.d=e
this.a=f},
aOs:function aOs(){},
bBE:function bBE(){},
aON:function aON(){},
bBK:function bBK(){},
aPd:function aPd(){},
bBT:function bBT(){},
aPF:function aPF(){},
bC1:function bC1(){},
JX(d,e,f,g){var w,v,u,t,s,r,q,p=$.auz
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.I)(e),++w)E.mG(d,e[w],f,g)
return}for(p=B.cU(e,0,B.dy(4,"count",x.S),B.U(e).c),v=p.$ti,p=new B.bQ(p,p.gJ(0),v.k("bQ<aj.E>")),u=x.H,v=v.k("aj.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)E.mG(d,s,f,g)
else B.bM(new B.bh(1000*q),new C.cph(d,s,f,g),u)}},
cmE(d){return C.i7X(d)},
i7X(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$cmE=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aB(),$async$cmE)
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
return B.i($async$cmE,v)},
b4F(d,e){return C.i7Y(d,e)},
i7Y(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b4F=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aB(),$async$b4F)
case 6:s=g
w=7
return B.b(s.aB("String","ngmy_play_progress_v1_"+d,A.V.au(e,null)),$async$b4F)
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
return B.i($async$b4F,v)},
cph:function cph(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
itq(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.S(x.Y,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.B)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.I)(w),++q){p=w[q]
u.push(B.J(["k",p.b,"x",B.oH(A.i.a5(p.c,4)),"y",B.oH(A.i.a5(p.d,4)),"v",p.e,"l",B.oH(A.i.a5(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.oH(A.i.a5(p.as,3)),"ch",p.at,"vc",B.oH(A.i.a5(p.z,3)),"s",B.oH(A.i.a5(p.ch,2))],s,r))}w=B.a([],x.U)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.I)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.B(f,B.a3(f).k("ch.E"))
A.d.fd(l)
return A.V.au(B.J(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
iDc(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
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
if(!$.qS().am(0,s)){J.c7(v,null)
continue}d=s
a0=B.aJ(J.t(t,"x"))
if(a0==null)a0=0.5
a1=B.aJ(J.t(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.u8(a2,d,a0,a1)
a3.at7(a2,d,a0,a1)
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
J.c7(v,r)}i=g.a(J.t(w,"wires"))
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
if(m!=null&&l!=null)a6.an3(m,A.i.M(B.dI(J.t(p,1))),l,A.i.M(B.dI(J.t(p,3))))}i=B.aJ(J.t(w,"challenge"))
i=A.i.M(i==null?0:i)
k=B.aR(x.S)
h=g.a(J.t(w,"done"))
h=J.aQ(h==null?A.bP:h)
while(h.C()){j=h.gP(h)
J.c7(k,A.i.M(B.dI(j)))}return new B.bsF(i,k)}catch(a4){return a5}},
fSo(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fSo=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.aB(),$async$fSo)
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
return B.i($async$fSo,v)},
bID(d){return C.iEQ(d)},
iEQ(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bID=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.aB(),$async$bID)
case 7:w=6
return B.b(f.aB("String","ngmy_electronics_lab_v1",d),$async$bID)
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
return B.i($async$bID,v)},
fZ9(d,e,f){var w=0,v=B.j(x.I),u,t,s,r,q,p
var $async$fZ9=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(d.c===e&&d.d===f){u=d
w=1
break}$.T()
t=new B.oV(new B.oq())
s=B.v1(t,null)
r=B.L()
r.r=A.c7.gp(0)
s.aE(new B.a4(0,0,e,f),r)
s.bi9(0,d,A.J,B.L())
q=t.n_()
w=3
return B.b(q.vI(e,f),$async$fZ9)
case 3:p=h
q.t()
d.t()
u=p
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fZ9,v)}},D,W,A2,Au,K,F,M,A3,H,Av,Aw,Ax,A4,Ay
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
Q=c[162]
Ao=c[94]
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
C.am8.prototype={}
C.Xk.prototype={
R(){return new C.bod(B.S(x.N,x.i),new B.au(A.ax,$.az()),B.a([],x.X),B.a([],x.eZ),B.mi(0,null,null))}}
C.bod.prototype={
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
t.l(new C.eo7(t))
t.a.toString
p=t.gXD()
w=3
return B.b(C.bDX(C.ih6(q,C.itb(p),o,t.ay)),$async$Qq)
case 3:s=e
r=s==null?null:J.jf(s)
if(r==null||r.length===0||A.a.Y(r,"{"))r=C.iuI(q,p,o)
if(t.c==null){w=1
break}t.l(new C.eo8(t,o,r))
$.aU.U$.push(new C.eo9(t))
case 1:return B.h(u,v)}})
return B.i($async$Qq,v)},
ZJ(d){return this.c5e(d)},
aZL(){return this.ZJ(null)},
c5e(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$ZJ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aU.bk$.d.c
if(s!=null)s.jf()
t.f.sb1(0,o)
t.l(new C.eok(t))
G.dG(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bDX(C.ioh(o)),$async$ZJ)
case 3:r=n.a=m.iCS(f)
p.b=""
if(r!=null&&!C.itc(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.iuJ(o)
q=B.ag(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.am8(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.l(new C.eol(p,t))
t.cb6(p.a)
case 1:return B.h(u,v)}})
return B.i($async$ZJ,v)},
cb6(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
A.d.a6(w)
w=++m.as
v=m.gXD()
A.d.a6(v.a)
A.d.a6(v.b)
m.e.a6(0)
m.l(new C.eog(m))
t=d.d
s=B.S(x.N,x.Y)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.eoe(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.eoh(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.I)(r),++u){p.$2(o,new C.eoi(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.eoj(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bl.j(0.1),g=B.m(16),f=B.K(A.bl.j(0.35),A.r,1)
if(m.x)j=B.A(B.a([D.fuS,A.bc,B.E(B.c(m.Q,l,l,l,l,l,l,A.Bs,l,l,l),1)],x.p),A.l,l,A.e,A.h,0,l,l)
else if(k==null)j=D.fWp
else{w=B.E(B.c(k.a,l,l,l,l,l,l,A.LN,l,l,l),1)
v=x.p
w=B.a([B.A(B.a([w,B.c(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fG2,l,l,l)],v),A.l,l,A.e,A.h,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.D(A.r7,B.c(u,l,l,l,l,l,l,D.fIV,l,l,l),l))
w.push(A.cQ)
w.push(B.c(k.b,l,l,l,l,l,l,A_.FF,l,l,l))
u=k.e
if(u.length!==0){t=A.aQ.j(0.12)
s=B.m(10)
w.push(B.p(l,B.c(u,l,l,l,l,l,l,D.fLC,l,l,l),A.f,l,l,new B.o(t,l,l,s,l,l,A.m),l,l,l,A.hy,A.cu,l,l,l))}w.push(A.aj)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
t=B.c(t,l,l,l,l,l,l,A.mc,l,l,l)
q=u[r]
s=s?A.c:A.aF
w.push(new B.D(A.Hz,new B.c1(A.aK,A.e,A.h,A.B,l,A.p,l,0,B.a([t,A.ba,new B.bu(1,A.b8,B.c(q,l,l,l,l,l,l,new B.F(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.I)(j),++p){o=j[p]
t=A.bl.j(0.3)
s=new B.aP(12,12)
s=B.p(l,B.c(o.a,l,l,l,l,l,l,A.WK,l,l,l),A.f,l,l,new B.o(t,l,l,new B.bb(s,s,s,s),l,l,A.m),l,l,l,l,A.fZ,l,l,l)
t=A.c.j(0.07)
q=new B.aP(12,12)
A.d.u(w,B.a([A.M,new B.bK(A.a9,l,l,s,l),A.at,B.p(l,B.c(o.b,l,l,l,l,l,l,D.fRv,l,l,l),A.f,l,l,new B.o(t,l,l,new B.bb(q,q,q,q),l,l,A.m),l,l,l,l,A.bR,l,l,l)],v))}if(m.ax)w.push(D.eCH)
j=B.cb(B.x(w,A.B,l,A.e,A.h,0,A.p),A.t,m.ch,A.y,l,l,l,l,l,A.ah)}w=x.p
g=B.x(B.a([B.akk(B.p(l,j,A.f,l,new B.aY(0,1/0,0,i),new B.o(h,l,f,g,l,l,A.m),l,l,l,D.bFF,A.ep,l,l,1/0),A.aZ,A.ib),B.E(C.hup(m.gXD(),l,l,m.e),1)],w),A.l,l,A.e,A.h,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new E.e1("Ask about it",i,new C.eoo(m),l,A.bl,l),new E.e1("Invent something new",!i,new C.eop(m),l,A.bl,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dC3[p]
i.push(new E.e1(n,!1,new C.eoq(m,n),l,A.bl,l))}f.push(new E.fi(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.diE[p]
i.push(new E.e1(r,!1,new C.eor(m,r),l,A.bl,l))}f.push(new E.fi(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),m.f,l,l,l,l,l,2,B.bC(l,new B.b6(4,B.m(16),A.a1),l,A.eX,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kz,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.al,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.eos(m,k),l,!1,l,l,!1,l,!0,l,A.ae,l,l,l,l,l,l,l,l,l,l,l,A.ds,!0,A.a7,l,A.ao,l,A.Wz,l,l),1)
h=m.at
v=h&&j?D.bVK:A.eg
j=h&&j?"Ask":"Invent"
f.push(B.A(B.a([i,A.aa,new E.fI(v,j,new C.eot(m,k),A.bl,l)],w),A.l,l,A.e,A.h,0,l,l))
return E.lW(A.bl,A.ff,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.x(f,A.l,l,A.e,A.O,0,A.p))}}
C.Hb.prototype={}
C.vG.prototype={}
C.XH.prototype={
R(){return new C.aHj(A.J,A.J,A.aA,B.aR(x.S),$,A.bH,0,B.a([],x.X),null,null)}}
C.aHj.prototype={
gb05(){var w,v,u,t=this,s=D.Jk[t.cx],r=D.TU[t.cy],q=D.Ei[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.e6(w,w.r,B.a3(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.aCP[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cE(p,0,new C.eDw())},
ga4p(){return D.Jk[this.cx].d/this.gb05()},
gaS0(){return 0.1*(D.Jk[this.cx].d/0.9)/D.TU[this.cy].d},
a_(){this.a3()
this.mn()
C.cmE("rocket_lander").bE(new C.eDQ(this),x.k)},
cbf(){var w=this
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
if(m.as!=="flying"){m.l(new C.eDR())
return}w=D.tY[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.i.D(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.r(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga4p()
v=v.a7(0,new B.r(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaS0())}if(m.dy){t=m.r
v=v.aI(0,t.aO(0,t.gcL()*6*D.aER[m.d]))}t=m.r=m.r.a7(0,v.aO(0,d))
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
C.b4F("rocket_lander",B.J(["unlocked",t],x.N,x.z))
C.JX("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga4p()/(D.tY[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.i.a5(m.ga4p()/(D.tY[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
G.dG(80,"",500,0,0.6,"noise")
B.fU()}}if(m.Q&&m.x>0&&A.o.F(A.i.bc(m.CW*20),2)===0)G.dG(90,"",70,0,0.12,"noise")
m.l(new C.eDS())},
ai9(d,e,f,g,h){var w,v=null,u=B.c(d,v,v,v,v,v,v,D.fIp,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new E.e1(e[w].a,f.$1(w),new C.eDy(this,g,w),v,h,v))
return new B.D(A.eA,B.x(B.a([u,A.cQ,B.bZ(A.bI,s,A.br,v,6,6)],t),A.B,v,A.e,A.h,0,A.p),v)},
bJR(d){var w,v,u,t,s=this,r=null,q=s.ga4p()/(D.tY[s.d].b/9.81*0.28)>=1,p=A.i.S(1/s.gaS0()),o=D.aER[s.d],n=B.m(24),m=d.c,l=B.K(m.j(0.6),A.r,1)
m=B.a([B.c("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.at,B.c(d.d+" Gravity here: "+B.v(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.acW,r,r,r),A.R,s.ai9("ENGINE: "+D.Jk[s.cx].b,D.Jk,new C.eDn(s),new C.eDo(s),A.cW),s.ai9("FUEL TANK: "+D.TU[s.cy].b,D.TU,new C.eDp(s),new C.eDq(s),A.bf),s.ai9("LANDING GEAR: "+D.Ei[s.db].b,D.Ei,new C.eDr(s),new C.eDs(s),A.aH),s.ai9("EXTRAS (tap to add)",D.aCP,new C.eDt(s),new C.eDu(s),A.bl)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.heC)
o=(q?A.bf:A.c1).j(0.14)
w=B.m(12)
v=A.i.a5(s.gb05(),2)
u=A.i.a5(s.ga4p()/(D.tY[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.p(r,B.c("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.i.S(D.Ei[s.db].d*100)+".",r,r,r,r,r,r,D.fJ4,r,r,r),A.f,r,r,new B.o(o,r,r,w,r,r,A.m),r,r,r,A.hy,A.bR,r,r,r))
m.push(A.R)
m.push(new B.bK(A.z,r,r,new E.fI(A.p3,"Launch",new C.eDv(s),A.bf,r),r))
return B.at(B.p(r,B.cb(B.x(m,A.B,r,A.e,A.O,0,A.p),A.t,r,A.y,r,r,A.bS,r,r,A.ah),A.f,r,A.mh,new B.o(D.bvc,r,l,n,r,r,A.m),r,r,r,A.bR,r,r,r,r),r,r,r)},
b1i(d,e,f,g){var w=null,v=f?A.cW:A.c.j(0.1),u=B.m(18),t=B.K(A.aT,A.r,1)
return B.n_(A.j5,B.p(w,B.V(d,A.c,w,w,w,30),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,62,w,w,w,w,w,g),w,new C.eDk(e),new C.eDl(e),w,w,w,w,new C.eDm(e))},
b1h(d,e,f){return this.b1i(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cf(new C.eDJ(s,D.tY[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.tY[w].a:"\ud83d\udd12"
o.push(new E.e1(v,s.d===w,new C.eDK(s,w),r,D.tY[w].c,r))}v=B.a([s.b1h(F.ash,new C.eDL(s),s.y),A.bc,s.b1i(A.vw,new C.eDM(s),s.Q,130),A.bc,s.b1h(A.QR,new C.eDN(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?A.aH:A.c.j(0.1)
t=B.m(18)
A.d.u(v,B.a([A.bc,B.aA(r,B.p(r,D.c_3,A.f,r,r,new B.o(u,r,B.K(A.aT,A.r,1),t,r,r,A.m),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eDO(s),r,r,r,r,r,r,!1,A.a4)],p))}return E.lW(A.cW,A.ff,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.x(B.a([new E.fi(o,"WORLD",r),B.A(v,A.l,r,A.bb,A.h,0,r,r)],p),A.l,r,A.e,A.O,0,A.p))}}
C.bl5.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=this.b,l=D.tY[m.d],k=a1.a,j=a1.b,i=0+k,h=0+j,g=$.T(),f=B.L(),e=l.c,d=B.ap(I.a0w,e,0.25)
d.toString
f.san(new B.a8(A.aX,A.b1,A.x,B.a([F.aj5,d],x.O),n,n).az(0,new B.a4(0,0,i,h)))
a0.aE(new B.a4(0,0,i,h),f)
w=new B.e2()
w.cT(5)
for(v=0;v<70;++v){i=w.ai()
h=w.ai()
f=w.ai()
d=new B.ar(A.T,A.Q,A.W,A.X,A.U)
d.r=A.c.j(0.2+w.ai()*0.5).gp(0)
a0.O(new B.r(i*k,h*j*0.8),f*1.2+0.3,d)}u=j*0.88
i=x.v
h=B.a([],i)
t=new B.aH(g.r,A.ak,n,n,h)
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
a0.jr(0,m.w)
k=m.as
if(k==="crashed"){m=B.L()
m.r=A.cW.j(0.6).gp(0)
m.y=Z.Px
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
o.E(new B.cj(14,-10,11,18))
o.E(new B.aq(-11,18))
o.E(new B.cj(-14,-10,0,-26))
o.E(new B.bA())
k=B.L()
k.san(F.avd.az(0,D.fml))
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
C.aPl.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b_(){this.b8()
this.b6()
this.bC()}}
C.bBV.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bBD()}}
C.aVA.prototype={}
C.a5a.prototype={}
C.bdY.prototype={}
C.W8.prototype={
R(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.eA(["skin"],x.N),o=new Float32Array(0)
return new C.aFL(w,v,u,t,s,r,q,new B.cA(null,x.A),p,D.MQ,D.MQ,A.aA,A.cV,o,new Int32Array(0),$,A.bH,0,B.a([],x.X),null,null)}}
C.aFL.prototype={
a_(){var w=this
w.a3()
w.mn()
w.as=new C.c8V(w.gckt())
new C.dTd(w).$0()
return},
t(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a1(0)
v.d=null}this.bAH()},
cku(d){var w,v=this
if(v.c==null)return
w=J.a2(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.fc(0,B.J(["t","init","data",$.hEI],x.N,x.z))
v.at=!0
v.ay=""
v.aC3()
break
case"parts":v.l(new C.dSO(v))
break
case"pick":v.l(new C.dSP(v,d))
break
case"shot":v.ak3(B.v(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+B.v(w.h(d,"text")))
if(v.c!=null&&!v.ax)v.l(new C.dSQ(v))
break}},
aC3(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.aAE[q.cx]
v=new C.dSR()
u=q.ch
u=B.B(u,B.a3(u).k("ch.E"))
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
ak3(d){return this.cBV(d)},
cBV(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$ak3=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cJ.aK(A.a.aY(d,A.a.cd(d,",")+1))
w=6
return B.b(B.axZ(B.a([B.cJc(r,"image/png","body.png")],x.fH),null,"Made in NGMY Core Protocol"),$async$ak3)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.L(x.q).f.T(I.aWq)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ak3,v)},
aBs(d){var w=d.b
if(w==="skin")return this.CW>0
return this.ch.q(0,w)},
mE(d){var w,v=this
if(v.d==null)return
w=(v.k3+=d)*v.k4/60
if(v.ok&&v.ch.q(0,"organ")&&A.i.bc(w)!==A.i.bc(v.p1)){E.Y7("kick",0,0.4)
v.Vg(170,new C.dTe())}v.p1=w
return},
afE(d){var w,v,u,t,s=this
s.l(new C.dSS(s,d))
if(d==null){s.fy=D.MQ
s.fr=1
w=s.as
if(w!=null)w.fc(0,B.J(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.U(w).k("X<1>")
u=B.B(new B.X(w,new C.dST(d),v),v.k("M.E"))
t=A.d.gG(u).b
if(t!=="skin"&&!s.ch.q(0,t)){s.ch.I(0,t)
if(s.CW===2)s.CW=1}s.aC3()
w=s.as
if(w!=null)w.fc(0,B.J(["t","focus","group",d],x.N,x.z))
s.id=0
s.cEs(t,d)
return},
cEs(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){E.Y7("kick",0,0.8)
this.Vg(260,new C.dSU())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")G.dG(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.Vg(w*70,new C.dSV(this))
else if(A.a.q(e,"intestine")||e==="Stomach")G.dG(110,"",360,0.7,0.3,"saw")
else E.hjx("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":G.dG(210+e.length*4,"",80,0.6,0.55,"tri")
G.dG(2400,"",20,0,0.3,v)
break
case"muscle":G.dG(70,"",150,1,0.6,"sine")
break
case"vessel":G.dG(300,"",380,0.4,0.22,v)
E.Y7("kick",0,0.3)
break
default:E.hjx("organic",2+A.o.F(e.length,6),200,0.4)}},
cJc(d){this.l(new C.dSX(this,d))},
b1B(){var w,v,u,t,s,r,q,p=this,o=B.aR(x.N)
for(w=p.d.e,v=w.length,u=p.ch,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
if(p.aBs(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.I(0,s.a)}q=B.B(o,o.$ti.k("ch.E"))
w=q.length
if(w===0)return
p.p3=q[p.RG.av(w)]
p.R8=""},
c0U(d){var w,v,u=this
u.id=0
if(u.p2&&u.p3!=null){if(d==null)return
w=d===u.p3
u.l(new C.dSL(u,w,d))
v=x.t
C.JX("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.Vg(1100,new C.dSM(u))
return}if(d==null){if(u.cy!=null)u.afE(null)
return}u.afE(d)},
c4w(d,e){var w,v=this,u=null,t=B.m(18),s=B.K(A.c5.j(0.5),A.r,1)
if(v.p2){w=v.p3
w=B.c(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p4+"\n"+v.R8,u,u,u,u,u,u,D.fEm,u,u,u)}else if(d==null||e==null)w=D.fTJ
else{w=x.p
w=B.A(B.a([B.E(B.x(B.a([B.c(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hs,u,u,u),A.cQ,B.c(e.b,u,u,u,u,u,u,A_.FF,u,u,u)],w),A.B,u,A.e,A.O,0,A.p),1),B.aI(u,u,u,u,D.c1L,u,u,u,new C.dSN(v),u,u,u,u,"Back to the whole body",A.co)],w),A.B,u,A.e,A.h,0,u,u)}return B.p(u,w,A.f,u,u,new B.o(I.ZJ,u,s,t,u,u,A.m),u,u,u,u,U.anE,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:D.dO5.h(0,g)
i.aC3()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.dtH
u=v.length
t=i.ch
s=0
for(;s<v.length;v.length===u||(0,B.I)(v),++s){r=v[s]
if(i.aBs(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.q(w,q))w.push(q)}v=x.p
u=B.a([B.aI(h,h,h,h,I.p5,h,h,h,new C.dT3(i),h,h,h,h,"Share",h)],v)
q=B.a([],v)
p=i.as
if((p==null?h:p.b!=null)===!0){p=p.b
q.push(p==null?A.bK:B.C7(h,A.qg,p))}p=i.ax
o=p?0:1
q.push(new B.dv(p,B.xK(B.p(A.z,B.x(D.dDG,A.l,h,A.e,A.O,0,A.p),A.f,h,h,D.b9D,h,h,D.hHl,h,h,h,h,h),A.aZ,A.nc,o),h))
q=B.x(B.a([B.E(new B.an(A.a0,h,A.b4,A.t,q,h),1),new B.D(F.anl,i.c4w(g,f),h)],v),A.l,h,A.e,A.h,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){n=D.dko[s]
o=n.a
m=o==="skin"
if(m){l=i.CW
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=n.b
o=m?i.CW>0:t.q(0,o)
p.push(new E.e1(l,o,new C.dT4(i,n),n.c,A.c5,h))}p=B.a([new E.fi(p,h,h)],v)
if(!i.p2&&w.length!==0){o=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.I)(w),++s){k=w[s]
o.push(new E.e1(k,k===i.cy,new C.dT5(i,k),h,A.aQ,h))}p.push(new E.fi(o,"FIND",h))}if(t.q(0,"organ")){o=i.k4
p.push(E.j8(A.c1,""+A.i.S(o)+" beats/min","Heart rate",180,40,new C.dT6(i),o))}if(i.CW>0&&t.a===0){o=B.a([],v)
for(j=0;j<5;++j)o.push(new E.Gn(D.aAE[j],i.cx===j,new C.dT7(i,j),!1,h))
p.push(new E.fi(o,"SKIN",h))}o=i.go
m=i.p2
l=m?"Quiz on":"Quiz"
v=B.a([new E.e1("Spin",o,new C.dT8(i),D.arf,A.aH,h),new E.fI(A.nk,"Reset view",new C.dT9(i),A.c,h),new E.e1(l,m,new C.dTa(i),A.IE,A.aQ,h)],v)
if(t.q(0,"organ"))v.push(new E.e1("Heartbeat sound",i.ok,new C.dTb(i),T.p2,A.c1,h))
p.push(new E.fi(v,h,h))
return E.lW(A.c5,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.x(p,A.l,h,A.e,A.O,0,A.p))}}
C.aOq.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b_(){this.b8()
this.b6()
this.bC()}}
C.aOr.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bAG()}}
C.c8V.prototype={
kU(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aL(e,"</script","<\\/script")
v=$.hLs
$.hLs=v+1
u="ngmy-body-viewer-"+v
$.xG()
$.qc().pp(u,new C.c8W(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fH(v,"message",new C.c8X(t),!1,x.gA)
t.b=u},
fc(d,e){var w,v
try{w=this.c
if(w!=null){w=B.RV(w.contentWindow)
if(w!=null)J.ak8(w,e,"*")}}catch(v){}}}
C.yV.prototype={}
C.Di.prototype={}
C.nZ.prototype={}
C.beL.prototype={}
C.Wf.prototype={
R(){var w=x.N,v=x.y,u=x.S
return new C.aFN(B.S(w,x.a2),B.a([],x.cB),B.S(w,v),B.S(w,v),B.S(w,u),A.aA,A.J,A.J,B.aR(u),$,A.bH,0,B.a([],x.X),null,null)}}
C.aFN.prototype={
a_(){var w=this
w.a3()
w.mn()
w.aeB()
$.aU.U$.push(new C.dUU(w))},
aeB(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aeB=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aB(),$async$aeB)
case 6:q=e.ps("ngmy_circuit_passed_v1")
r=q==null?A.Z:q
if(s.c!=null)s.l(new C.dUy(s,r))
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
return B.i($async$aeB,v)},
aeY(d){return this.c8K(d)},
c8K(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$aeY=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.I(0,d)
u=3
w=6
return B.b(B.aB(),$async$aeY)
case 6:r=f
q=s.cx
p=B.a3(q).k("kn<ch.E,n>")
q=B.B(new B.kn(q,new C.dUB(),p),p.k("M.E"))
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
return B.i($async$aeY,v)},
aA0(d,e,f,g){var w="c"+this.y++,v=new C.Di(w,e,f,g)
this.d.n(0,w,v)
return v},
mU(d,e,f){return this.aA0(0,e,f,0)},
adW(d,e){var w
if(D.AO.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a7(0,new B.r(-36,w))},
uo(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aWd(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.fe$:d
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
bUl(){return this.aWd(null)},
mE(d){var w,v,u,t,s,r,q,p,o,n=this
n.bUl()
if(!n.ax)return
for(w=n.d,w=new B.ba(w,B.a3(w).k("ba<2>")).gae(0),v=new B.eQ(w,new C.dUV()),u=n.f,t=n.w,s=0;v.C();){r=w.gP(0).a
if(u.h(0,r)===!0){q=n.fe$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.fe$)
o=s+1
G.dG(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
aA1(d){var w=this
w.d.a6(0)
A.d.a6(w.e)
w.f.a6(0)
w.r.a6(0)
w.cy=null},
mo(d,e){var w=this.x
return new B.r(d*w.a,e*w.b)},
aw9(d){var w=this
if(w.x.A(0,A.aA)){$.aU.U$.push(new C.dUw(w,d))
return}w.l(new C.dUx(w,d))},
cEL(d){this.l(new C.dUC(this,d,$.bJ_()[d]))},
cdB(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bJ_()[a0]
v=d.d
u=B.a3(v).k("ba<2>")
t=u.k("X<M.E>")
s=t.k("M.E")
r=B.B(new B.X(new B.ba(v,u),new C.dUr(),t),s)
A.d.b0(r,new C.dUs())
q=B.B(new B.X(new B.ba(v,u),new C.dUt(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.l(new C.dUu(d,w))
return}u=d.r
p=B.dD(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dH(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.h3(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aWd(0)
h=m.h(0,A.d.gG(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.lw(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aL(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a6(0)
u.u(0,p)
d.l(new C.dUv(d,o,a0))},
aAY(d){var w,v,u,t,s=this.d,r=B.a3(s).k("ba<2>")
s=B.B(new B.ba(s,r),r.k("M.E"))
r=B.U(s).k("dx<1>")
s=new B.dx(s,r)
s=new B.bQ(s,s.gJ(0),r.k("bQ<aj.E>"))
w=d.a
r=r.k("aj.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cn0(d){var w,v,u,t,s,r=this.d,q=B.a3(r).k("ba<2>")
r=B.B(new B.ba(r,q),q.k("M.E"))
q=B.U(r).k("dx<1>")
r=new B.dx(r,q)
r=new B.bQ(r,r.gJ(0),q.k("bQ<aj.E>"))
w=d.a
v=d.b
q=q.k("aj.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c4p(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.AO.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.adW(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.y(p,o)
s=l}}}return t},
bT5(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.adW(p,o)
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
cdD(d){var w,v,u,t=this,s=t.aAY(d)
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
G.dG(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.l(new C.dUD())
return}u=t.bT5(d)
if(u!=null)t.l(new C.dUE(t,u))
else t.l(new C.dUF(t))},
ayO(d){return this.c7H(d)},
c7H(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$ayO=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.aAY(d)
if(s==null){w=1
break}B.jC()
t.l(new C.dUA(t,s))
case 1:return B.h(u,v)}})
return B.i($async$ayO,v)},
bFA(d){if(this.x.A(0,A.aA))return
this.l(new C.dUq(this,d,A.cV))
B.f2()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bJ_()[g]
g=x.p
v=B.a([B.aI(h,h,h,h,B.V(i.ax?T.p2:A0.tT,A.ab,h,h,h,21),h,h,h,new C.dUO(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.m(16)
s=A.cw.j(0.14)
r=B.K(A.cw.j(0.5),A.r,1)
q=B.a([B.c("Challenge: "+w.a,h,h,h,h,h,h,D.fDu,h,h,h),B.c(w.b,h,h,h,h,h,h,A.WY,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.D(A.kL,B.c(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.bf:A.f1,h,h,h,h,h,h,h,h,12,h,h,A.D,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.p(h,B.A(B.a([B.E(B.x(q,A.B,h,A.e,A.h,0,A.p),1),B.bI(D.h4x,h,i.gcdA(),B.bp(A.cw,h,h,h,h,h,h,h,h,h,h,A.co))],g),A.l,h,A.e,A.h,0,h,h),A.f,h,h,new B.o(s,h,r,t,h,h,A.m),h,h,h,V.P8,D.bGo,h,h,1/0))}u.push(B.E(B.cf(new C.dUP(i)),1))
if(f!=null){t=B.m(14)
s=A.c.j(0.06)
r=f.b
u.push(B.p(h,B.c(D.AO.h(0,r).a+": "+D.AO.h(0,r).e,h,h,h,h,h,h,Al.uv,h,h,h),A.f,h,h,new B.o(s,h,h,t,h,h,A.m),h,h,h,A.a1H,A.bR,h,h,1/0))}u=B.x(u,A.l,h,A.e,A.h,0,A.p)
t=B.a([],g)
for(s=D.AO.gdS(D.AO),s=s.gae(s);s.C();){r=s.gP(s)
q=new B.aP(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ax(o.j(0.5),1,A.r,-1)
t.push(B.aA(h,B.p(h,B.x(B.a([B.V(p.b,o,h,h,h,20),A.bs,B.c(p.a,h,h,h,h,h,h,D.aYs,h,h,h)],g),A.l,h,A.e,A.O,0,A.p),A.f,h,h,new B.o(n,h,new B.bE(m,m,m,m),new B.bb(q,q,q,q),h,h,A.m),h,h,h,A.f7,A.HB,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dUQ(i,r),h,h,h,h,h,h,!1,A.a4))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dyu[l]
s.push(new E.fI(A.QS,k.b,new C.dUR(i,k),A.cw,h))}s.push(new E.fI(I.xk,"Clear",new C.dUS(i),A.c1,h))
r=B.a([],g)
for(j=0;q=$.bJ_(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?A.ea:A.m2
o=i.ay
n=i.cx.q(0,j)?A.bf:A.bu
r.push(new E.e1(q.a,o===j,new C.dUT(i,j),p,n,h))}return E.lW(A.cw,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.x(B.a([new E.fi(t,"PARTS",h),new E.fi(s,"TRY",h),new E.fi(r,"TASKS",h)],g),A.l,h,A.e,A.O,0,A.p))}}
C.bf2.prototype={
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
i=a3.adW(l,o.c)
h=s.h(0,n)===!0
n=$.T()
g=B.a([],r)
f=new B.aH(n.r,A.ak,a2,a2,g)
g.push(new B.aZ(j,k))
f.ac()
n=i.a
e=Math.max(40,Math.abs(n-j)*0.5)
d=i.b
d=new B.i3(j+e,k,n-e,d,n,d)
g.push(d)
n=f.f
if(n!=null)d.aj(n)
f.ac()
if(h){n=new B.ar(A.T,A.Q,A.W,A.X,A.U)
n.b=A.ac
n.c=9
n.r=A.bu.j(0.28).gp(0)
n.y=O.oT
a5.af(f,n)}n=new B.ar(A.T,A.Q,A.W,A.X,A.U)
n.b=A.ac
n.c=3.2
n.d=A.bG
n.r=(h?A.eG:A.bA).gp(0)
a5.af(f,n)}a0=a3.as
if(a0!=null&&q.h(0,a0)!=null){a1=q.h(0,a0).c.a7(0,D.Ku)
i=a3.at
a3=i.a
a4=a1.a
e=Math.max(40,Math.abs(a3-a4)*0.5)
r=new B.aH($.T().r,A.ak,a2,a2,B.a([],r))
w=a1.b
r.E(new B.aZ(a4,w))
s=i.b
r.E(new B.i3(a4+e,w,a3-e,s,a3,s))
s=B.L()
s.b=A.ac
s.c=3
s.r=A.ab.gp(0)
a5.af(r,s)}for(a3=new B.dq(q,q.r,q.e);a3.C();)this.cdC(a5,a3.d)},
cdC(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.AO.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.bY(a0.c,64,64)
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
l=v===!0?F.p0:D.bWi}else l=e.b
k=C.hlm(B.lw(l.a),30,A.c,l.b,g,A.D)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a4(d,v.aI(0,new B.r(p/2,q.gb4(q)/2)))
j=C.hlm(e.a,10.5,A.c,g,g,A.D)
j.a4(d,a0.c.a7(0,new B.r(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.hlm(f,9,u?A.eG:A.bY,g,g,A.u)
i.a4(d,a0.c.a7(0,new B.r(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b2g(d,w.adW(a0,h),o)
this.b2g(d,a0.c.a7(0,D.Ku),o)},
b2g(d,e,f){var w
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
b_(){this.b8()
this.b6()
this.bC()}}
C.bBF.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bAL()}}
C.OC.prototype={
R(){return new C.aG3(B.mi(0,null,null))}}
C.Lu.prototype={
a9(){return"_UnfoldStyle."+this.b}}
C.Bh.prototype={}
C.aG3.prototype={
a_(){this.a3()
B.bM(A.pO,C.iBU(),x.H)},
cdJ(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcr(0).at
v.toString
w.f=v}w.l(new C.e03(w,e))},
c6m(){var w=this
w.e.t()
w.e=B.mi(w.f,null,null)
w.l(new C.e02(w))},
t(){this.e.t()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null,s=t&&B.Q(d).ax.a===A.dh?A.c:A.c7
return B.p9(t,B.c6(v,s,t?new C.bvx(w.e,w.gcdI(w),new C.e04(d),v):new C.aKn(u,new B.bg(u.b,x.W)),v,!1,!1,v,!1),new C.e05(w,u),x.K)}}
C.bxc.prototype={}
C.bvx.prototype={
b2h(d,e,f){var w=null,v=B.c(d,w,w,w,w,w,w,B.l(w,w,f?A.bC:A.c,w,w,w,w,w,w,w,w,12.5,w,w,A.u,w,w,!0,w,1.6,w,w,w,w,w,w),w,w,w)
return new B.D(U.a26,B.x(B.a([v,A.bs,B.c(e,w,w,w,w,w,w,B.l(w,w,f?A.cy:A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.B,w,A.e,A.h,0,A.p),w)},
B(d){var w,v,u,t=this,s=null,r=B.Q(d).ax.a===A.dh,q=B.aE(d,A.dK,x.w).w,p=B.aI(s,s,s,s,B.V(A.eC,r?A.bC:A.ab,s,s,s,20),s,s,D.hHO,t.e,s,s,s,s,s,s)
if(r)w=new B.o(A.c,s,s,B.m(14),A.Jn,s,A.m)
else{w=B.a([A.aH.j(0.22),A.aH.j(0.06)],x.O)
v=B.m(14)
w=new B.o(s,s,B.K(A.aH.j(0.75),A.r,1.6),v,B.a([new B.aa(0,A.H,A.aH.j(0.22),A.J,8)],x.V),new B.a8(A.ay,A.aD,A.x,w,s,s),A.m)}v=B.c("\ud83e\uddea Core Protocol",s,s,s,s,s,s,B.l(s,s,r?A.bC:A.c,s,s,s,s,s,s,s,s,15,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)
u=x.p
w=B.A(B.a([p,B.E(B.at(B.p(s,B.x(B.a([v,B.c("Play, make things, keep them.",s,s,s,s,s,s,B.l(s,s,r?A.cy:A.aR,s,s,s,s,s,s,s,s,10.5,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),A.K,s,s)],u),A.l,s,A.e,A.O,0,A.p),A.f,s,s,w,s,s,D.hHT,s,A6.aob,s,s,s),s,s,s),1),A.uo],u),A.l,s,A.e,A.h,0,s,s)
v=t.b2h("STUDIOS","Play, make things, and keep what you make",r)
$.bJ0()
return B.bo(!1,B.x(B.a([B.E(B.wk(0,s,A.t,t.c,A.y,s,s,s,s,s,!1,s,A.ah,!1,B.a([new B.nW(new B.R(8,q.r.b+6,8,4),new B.mk(w,s),s),new B.mk(v,s),new B.nW(A.ic,B.Qi(new B.pc(new C.ffY(d),9,!0,!0,!0,0,B.ty(),s),D.aWf),s),new B.mk(t.b2h("SCENES","Each one is a studio too: change the style, colours and words",r),s),new B.nW(D.bGy,B.Qi(new B.pc(new C.ffZ(t),6,!0,!0,!0,0,B.ty(),s),D.aWf),s)],u)),1)],u),A.l,s,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!1)}}
C.agY.prototype={
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m.d
if(B.Q(d).ax.a===A.dh){w=B.m(20)
v=(A.o.ao(o.c,3)&1)===0
u=B.a88(v?A.aH:A.bl,20)
v=v?A.aH:A.bl
return B.aG(!1,A.a3,!0,n,B.aM(!1,w,!0,B.eJ(B.x(B.a([new B.Wd(v,44,m.c,n,n),A.M,B.c(m.a,n,2,A.a2,n,n,n,D.fJO,A.K,n,n),A.cQ,B.c(m.b,n,2,A.a2,n,n,n,D.fMJ,A.K,n,n)],x.p),A.l,n,A.bb,A.h,0,A.p),n,u,n,A.Dd,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}w=B.m(20)
v=B.m(20)
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
return B.aG(!1,A.a3,!0,n,B.aM(!1,w,!0,B.eJ(B.x(B.a([B.p(n,B.V(m.c,A.c,n,n,n,24),A.f,n,n,new B.o(n,n,n,n,r,new B.a8(A.ay,A.aD,A.x,t,n,n),A.a6),n,44,n,n,n,n,n,44),A.M,B.c(m.a,n,2,A.a2,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,10.5,n,n,A.u,n,1.15,!0,n,0.5,n,n,n,n,n,n),A.K,n,n),A.cQ,B.c(m.b,n,2,A.a2,n,n,n,B.l(n,n,A.c.j(0.6),n,n,n,n,n,n,n,n,9.5,n,n,n,n,1.2,!0,n,n,n,n,n,n,n,n),A.K,n,n)],x.p),A.l,n,A.bb,A.h,0,A.p),n,new B.o(n,n,s,v,q,new B.a8(A.ay,A.aD,A.x,u,n,n),A.m),n,A.Dd,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.e,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai)}}
C.afN.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.d,j=k.d,i=B.Q(d).ax.a===A.dh,h=(A.o.ao(this.c,3)&1)===0?A.aH:A.bl,g=B.m(20)
if(i)w=B.a88(h,20)
else{w=B.m(20)
v=B.ap(L.mn,A.d.gG(j),0.24)
v.toString
v=B.a([v,D.akF],x.O)
v=new B.o(l,l,B.K(A.d.gG(j).j(0.35),A.r,1),w,B.a([new B.aa(0,A.H,A.v.j(0.4),A.cz,12)],x.V),new B.a8(A.ay,A.aD,A.x,v,l,l),A.m)
w=v}v=x.p
u=B.a([],v)
for(t=k.e,s=x.V,r=x.O,q=0;q<3;++q){p=q===2?0:4
o=new B.aP(6,6)
if(i){n=B.ap(h,A.c,0.1)
n.toString
n=B.a([n,B.We(h,!0)[1]],r)}else n=B.a([A.d.gG(j),A.d.gal(j)],r)
m=i?l:B.a([new B.aa(0,A.H,A.v.j(0.45),A.aac,0)],s)
u.push(B.p(l,B.V(t[q],A.c,l,l,l,11),A.f,l,l,new B.o(l,l,l,new B.bb(o,o,o,o),m,new B.a8(A.a5,A.a9,A.x,n,l,l),A.m),l,17,l,new B.R(q*4,0,(2-q)*4,p),l,l,l,l))}u=B.x(u,A.l,l,A.e,A.O,0,A.p)
if(i)t=A.bC
else{t=B.ap(A.d.gG(j),A.d.gal(j),0.4)
t.toString}t=B.c(k.b,l,2,A.a2,l,l,l,B.l(l,l,t,l,l,l,l,l,l,l,l,10.5,l,l,A.u,l,1.2,!0,l,0.6,l,l,l,l,l,l),A.K,l,l)
return B.aG(!1,A.a3,!0,l,B.aM(!1,g,!0,B.eJ(B.x(B.a([new B.a5(58,l,u,l),A.R,t,A.at,B.V(A.DS,i?B.We(h,!0)[1]:A.d.gG(j),l,l,l,18)],v),A.l,l,A.bb,A.h,0,A.p),l,w,l,A.Dd,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,this.e,l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.ai)}}
C.RB.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ap(A.d.gal(i),A.v,0.62)
h.toString
w=k.c
v=k.d
h=B.ao(-8,new B.bP(new B.o(h,j,j,B.m(22),j,j,A.m),A.bm,j,j),j,j,2,2,8,j)
u=B.m(22)
t=k.y
s=x.V
r=B.a([new B.aa(0,A.H,A.v.j(0.55),A.Kr,26),new B.aa(-6,A.H,A.d.gG(i).j(0.1+0.4*t),A.J,30)],s)
q=B.m(22)
p=B.ap(A.d.gG(i),A.c,0.14)
p.toString
o=A.d.gG(i)
n=A.d.gal(i)
i=B.ap(A.d.gal(i),A.v,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bS(0,new B.bP(new B.o(j,j,j,j,j,new B.a8(A.ay,A.aD,A.x,B.a([p,o,n,i],m),D.dEK,j),A.m),A.bm,j,j),0,0,0),B.ao(j,new B.bP(new B.o(j,j,j,j,j,new B.a8(A.aX,A.b1,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.m),A.bm,j,j),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bS(0,B.b4(j,j,j,new C.bwA(i,j),A.aA),0,0,0))
i=A.c.j(0.16)
p=B.K(A.c.j(0.5),A.r,1.4)
s=B.a([new B.aa(0,A.H,A.c.j(0.25*t),A.J,14)],s)
s=B.p(j,B.V(k.f,A.c,j,j,j,28),A.f,j,j,new B.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=B.a([B.c(k.r,j,j,j,j,j,j,D.fFT,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.u(p,B.a([A.at,B.c(i,j,1,A.a2,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a8,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.Ll)
p.push(B.p(j,j,A.f,j,j,new B.o(A.c.j(0.28),j,j,B.m(3),j,j,A.m),j,5,j,j,j,j,j,w*0.42))
m.push(new B.D(A.hd,B.A(B.a([s,A.ew,B.E(B.x(p,A.B,j,A.e,A.O,0,A.p),1)],l),A.l,j,A.e,A.h,0,j,j),j))
i=k.x
if(i>0)m.push(B.bS(0,new B.dv(!0,B.ek(j,A.v.j(A.i.D(i*0.6,0,0.7)),!0),j),0,0,0))
i=B.m(22)
m.push(B.bS(0,new B.dv(!0,new B.bP(new B.o(j,j,B.K(A.c.j(0.3),A.r,1.2),i,j,j,A.m),A.bm,j,j),j),0,0,0))
return new B.a5(w,v,new B.an(A.a0,j,A.ad,A.f,B.a([h,B.bS(0,new B.bP(new B.o(j,j,j,u,r,j,A.m),A.bm,B.by(q,new B.an(A.a0,j,A.ad,A.t,m,j),A.aq),j),0,0,0)],l),j),j)}}
C.bwA.prototype={
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
C.bw4.prototype={
B(d){var w=null,v=B.m(22),u=B.a([D.bt1,D.ajI],x.O),t=this.e,s=B.K(A.d.gG(t).j(0.4),A.r,1.2),r=B.a([new B.aa(0,A.H,A.v.j(0.5),A.kQ,24)],x.V),q=B.m(22),p=A.d.gG(t)
return new B.a5(this.c,this.d,new B.bP(new B.o(w,w,s,v,r,new B.a8(A.ay,A.aD,A.x,u,w,w),A.m),A.bm,B.by(q,B.b4(B.at(B.V(A.jF,A.d.gG(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.bdG(p,w),A.aA),A.aq),w),w)}}
C.bdG.prototype={
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
if(u===$){w=B.br(null,D.bDL,null,1,null,v)
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
gaA2(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gcdF(){var w=this.w
if(w===$){w=B.B(this.a.c.d,x.G)
this.w=w}return w},
gaZt(){var w=this.x
if(w===$){w=B.B(this.a.c.e,x.Z)
this.x=w}return w},
gb_g(){var w=this.y
if(w===$){w=B.B(this.a.c.f,x.N)
this.y=w}return w},
gbbn(){var w=this.z
if(w===$){w=B.B(this.a.c.r,x.N)
this.z=w}return w},
a_(){this.a3()
var w=this.gr1()
w.dq()
w.e0$.I(0,this.gcEt())},
cEu(){var w,v,u,t,s,r,q,p=this,o=p.gr1().x
o===$&&B.d()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as&&p.ch<0){switch(p.gaA2().a){case 0:w=D.og
break
case 1:w=D.vO
break
case 2:w=D.a6E
break
case 3:w=D.og
break
case 4:w=D.dqa
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
if(p.ax<q&&o>=q){G.dG(260+90*v,"",260,1.6,0.18,"tri")
u=D.cfi[v]
E.mG("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.JX("bell",D.coa,1400,0.35)}}p.ax=o},
t(){this.gr1().t()
this.gJU().t()
this.bCA()},
a0e(){var w=this
w.gr1().d3V(0,B.du(0,0,0,A.i.S(11e3/w.Q),0,0))
w.l(new C.ffE(w))},
cp6(){this.gr1().bQ(0)
this.l(new C.ffD(this))},
a0d(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$a0d=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:if(r.ch>=0){w=1
break}j=$.aU.bk$.x.h(0,r.f)
i=j==null?null:j.gbg()
if(!(i instanceof B.os)||i.fy==null){w=1
break}h=r.as
j=r.gr1()
j.bQ(0)
g=r.gJU()
g.bQ(0)
r.l(new C.fft(r))
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
return B.b(E.ajc(24*q,20,new C.ffu(r,n,q,p,o),n,o,new C.ffv(r),p),$async$a0d)
case 7:l=a3
if(J.ad(l)===0){e=B.bc("empty")
throw B.Y(e)}e=r.a.c
d=B.ag("[^a-z0-9]+",!0,!1,!1,!1)
k=B.aL(e.b.toLowerCase(),d,"_")
w=8
return B.b(E.aTq(l,k),$async$a0d)
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
break}r.l(new C.ffw(r))
g.fm(0,!0)
j.sp(0,0)
if(h)r.a0e()
r.c.L(x.q).f.T(B.b3(null,null,null,null,null,A.t,null,B.c(m,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a0d,v)},
ag3(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$ag3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gb_g(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){q=t[r]
l.push(new B.au(new B.bd(q,A.b6,A.aP),$.az()))}m=B.a([],m)
for(t=u.gbbn(),s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){p=t[r]
m.push(new B.au(new B.bd(p,A.b6,A.aP),$.az()))}o=B.B(u.gaZt(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bU(L.mn,null,new C.ffC(u,l,m,o),t,!0,!0,!0,A.m8,!1,!1,x.H),$async$ag3)
case 2:l=B.B(l,x.bO)
A.d.u(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.V$=$.az()
n.W$=0}return B.h(null,v)}})
return B.i($async$ag3,v)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=h.gaA2(),e=h.a.c,d=e.b,a0=h.gcdF(),a1=new C.Bh(f,d,e.c,a0,h.gaZt(),h.gb_g(),h.gbbn())
e=B.ap(A.d.gG(a0),A.d.gal(a0),0.4)
e.toString
f=x.p
w=B.a([B.aI(g,g,g,g,B.V(h.at?T.p2:A0.tT,A.ab,g,g,g,21),g,g,g,new C.ffM(h),g,g,g,g,"Sound",g),B.aI(g,g,g,g,D.c5w,g,g,g,h.gcdH(),g,g,g,g,"Edit words and pictures",g),B.aI(g,g,g,g,I.p5,g,g,g,new C.ffN(h,a2),g,g,g,g,"Share",g)],f)
v=B.a([B.ca(h.gJU(),new C.ffO(h,a1),g),B.cf(new C.ffP(h,a1))],f)
u=h.as
t=u?h.gcp5():h.gcdK()
u=u?D.bVu:A.tQ
s=B.ap(A.d.gG(a0),A.d.gal(a0),0.4)
s.toString
t=B.A(B.a([B.aI(g,g,g,g,B.V(u,s,g,g,g,34),g,g,g,t,g,g,g,g,g,A.co),B.E(B.ca(h.gr1(),new C.ffQ(h,a2,a1),g),1),B.aI(g,g,g,g,D.c1B,g,g,g,new C.ffR(h),g,g,g,g,"Replay",A.co)],f),A.l,g,A.e,A.h,0,g,g)
s=h.Q
u=A.i.a5(s,1)
r=B.ap(A.d.gG(a0),A.d.gal(a0),0.4)
r.toString
s=E.j8(r,u+"x","Speed",2.5,0.4,new C.ffS(h),s)
u=B.a([],f)
for(q=0;q<6;++q){p=D.dBD[q]
o=h.r
if(o===$)o=h.r=h.a.c.a
r=B.ap(A.d.gG(a0),A.d.gal(a0),0.4)
r.toString
u.push(new E.e1(p.b,o===p.a,new C.ffT(h,p),p.c,r,g))}r=B.a([],f)
for(n=x.G,q=0;q<10;++q){m=D.cfI[q]
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
r.push(B.aA(g,B.p(g,g,A.f,g,g,new B.o(g,g,new B.bE(i,i,i,i),g,g,new B.a8(A.ay,A.aD,A.x,m,g,g),A.a6),g,k,g,I.ana,g,g,g,l),A.y,!1,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new C.ffU(h,m),g,g,g,g,g,g,!1,A.a4))}u=B.a([t,s,new E.fi(u,"STYLE",g),new E.fi(r,"THEME",g),A.aj],f)
t=h.ch
if(t>=0){s=B.m(6)
a0=B.ap(A.d.gG(a0),A.d.gal(a0),0.4)
a0.toString
u.push(new B.D(A.jX,B.x(B.a([B.by(s,B.jD(A.bx,g,a0,8,g,t,g),A.aq),A.at,B.c("Making your GIF\u2026 "+A.i.S(h.ch*100)+"%",g,g,g,g,g,g,A.nw,g,g,g)],f),A.l,g,A.e,A.h,0,A.p),g))}else{f=B.ap(A.d.gG(a0),A.d.gal(a0),0.4)
f.toString
u.push(new B.a5(1/0,g,B.db(A.oc,g,D.hfN,h.gcdG(),B.bp(f,g,g,g,A.v,g,A.kK,g,g,g,g,g)),g))}return E.lW(e,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.e7(new B.an(A.a0,g,A.b4,A.t,v,g),h.f),d,B.x(u,A.l,g,A.e,A.O,0,A.p))},
bEK(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.og[r]
p=A.i.D((1-A.ej.aA(0,A.i.D((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.i.D(p/1.5707963267948966,0,1)
q=D.og[r]
n=q+0.12
m=A.i.D((a0-n)/(q+0.2-n),0,1)
n=D.og[r]
q=n-0.01
q=A.i.D((a0-q)/(n+0.03-q),0,1)
n=B.dz()
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
e.push(new B.cP(0,r*118,0,f,f,f,new B.kX(q,new B.ja(n,f,A.aX,!0,f,new C.RB(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.og[r]
u=v-0.02
g=A.i.D((a0-u)/(v+0.1-u),0,1)
u=A.d.gG(w)
v=D.og[r]
t=v+0.12
e.push(new B.cP(0,r*118-3-2,0,f,f,4,new B.mT(new C.bv8(u,g,1-A.i.D((a0-t)/(v+0.22-t),0,1),f),f,A.aA,f,f),f))}return new B.a5(a2,358,new B.an(A.a0,f,A.ad,A.f,e,f),f)},
bVX(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
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
m=B.dz()
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
g=new C.RB(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dz()
k.fI(3.141592653589793)
k=new B.ja(k,f,A.z,!0,f,new C.bw4(a2,108,w,f),f)}e.push(new B.cP(0,r*130,0,f,f,f,new B.kX(q,new B.ja(m,f,A.z,!0,f,k,f),f),f))}return new B.a5(a2,378,new B.an(A.a0,f,A.ad,A.f,e,f),f)},
cJG(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a6E[w]
l.push(A.cp.aA(0,A.i.D((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bS(0,B.b4(n,n,n,new C.byG(d.d,l,D.aCn,m,C.bvw(e,0.4,0.62),f,C.bvw(e,0.45,0.7),n),A.aA),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.hlU(g,w)
q=D.aCn[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cP(r,s-q*m*p+12,n,n,t,n,new B.kX(o,B.V(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.hlU(g,w)
r=D.a6E[w]
q=r+0.15
v.push(new B.cP(s,l,n,n,t,n,new B.kX(A.i.D((e-q)/(r+0.25-q),0,1),B.c(u[w],n,n,n,n,n,n,A.X9,A.K,n,n),n),n))}return new B.a5(g,m+90,new B.an(A.a0,n,A.ad,A.f,v,n),n)},
bL8(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cp.aA(0,C.bvw(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bS(0,B.at(B.dT(B.b4(f,f,f,new C.buy(A.d.gG(a1),C.bvw(a3,0,0.2),a4,f),new B.av(a5*0.95,70)),D.ewY),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.i.D((a3-l)/(0.12+m-l),0,1)
j=A.dQ.aA(0,A.i.D((o-0.7)/0.3,0,1))
l=B.dz()
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
w.push(new B.y(o,new B.cP(0,0,0,0,f,f,new B.cm(A.z,f,f,new B.kX(k*(0.45+0.55*o),B.dT(new B.ja(l,f,A.z,!0,f,new C.RB(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.r(n*a5*0.34,-o*18)),f),f),f)))}A.d.b0(w,new C.ffq())
A.d.u(a0,new B.O(w,new C.ffr(),x.fR))
return new B.a5(a5,330,new B.an(A.a0,f,A.ad,A.f,a0,f),f)},
cdE(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.vO[q]
o=A.i.D((a2-p)/(p+0.22-p),0,1)
n=A.nC.aA(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.vO[q]
m=A.i.D((a2-m)/(m+0.02-m),0,1)
l=D.aEv[q]
k=B.dz()
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
a0.push(new B.cP(0,0,0,0,e,e,new B.cm(A.z,e,e,new B.kX(m,B.dT(new B.ja(k,e,A.z,!0,e,new C.RB(d,92,w,p,j,i,0,g*s,h,e),e),new B.r(0,l)),e),e),e))
l=D.vO[q]
h=l+0.02
f=A.i.D((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cP(0,0,0,0,e,e,new B.cm(A.z,e,e,B.dT(new B.mT(new C.bem(w,f,q,e),e,new B.av(r,212),e,e),new B.r(0,D.aEv[q])),e),e))}return new B.a5(a4,330,new B.an(A.a0,e,A.ad,A.f,a0,e),e)},
bHK(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.r(-b0,-150),new B.r(b0,-40),D.ex2],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.og[r]
p=A.i.D((a8-q)/(q+0.2-q),0,1)
o=A.cp.aA(0,p)
q=D.aEF[r]
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
f=B.dz()
d=f.a
d.$flags&2&&B.ak(d)
d[11]=0.001
f.n6(l*h+D.duJ[r]*o)
f.fI(l*0.9)
h=0.55+0.45*o
f.k0(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cP(0,0,0,0,a3,a3,new B.cm(A.z,a3,a3,new B.kX(g,B.dT(new B.ja(f,a3,A.z,!0,a3,new C.RB(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.r(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.og[r]
i=q+0.17
a2=A.i.D((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aEF[r]
a6.push(new B.cP(0,0,0,0,a3,a3,new B.cm(A.z,a3,a3,B.dT(new B.mT(new C.buA(A.d.gG(w),a2,a3),a3,new B.av(a4,30),a3,a3),new B.r(0,q+48-4)),a3),a3))}}return new B.a5(b0,330,new B.an(A.a0,a3,A.ad,A.f,a6,a3),a3)}}
C.bv8.prototype={
a4(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a4(w-v,0,w+v,e.b)
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
C.buy.prototype={
a4(d,e){var w,v,u=this.c,t=B.bY(e.eo(A.J),e.b*u,e.a*u)
$.T()
u=B.L()
u.b=A.ac
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.y=Z.Px
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
C.bem.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.eo(A.J),h=this.c,g=A.cp.aA(0,h)
$.T()
w=B.L()
w.b=A.ac
v=1-h
w.c=5*v
u=this.b
w.r=A.d.gG(u).j(0.6*v).gp(0)
d.O(i,40+g*e.a*0.42,w)
t=new B.e2()
t.cT(this.d*17+3)
for(w=40*h*h*3,s=i.a,r=i.b,h=1-h*0.6,q=0;q<26;++q){p=t.ai()*3.141592653589793*2
o=(40+t.ai()*110)*g
n=Math.cos(p)
m=Math.sin(p)
l=t.ai()
k=new B.ar(A.T,A.Q,A.W,A.X,A.U)
j=(q&1)===0?A.d.gG(u):A.c
k.r=j.j(A.i.D(v,0,1)).gp(0)
d.O(new B.r(s+n*o*1.6,r+(m*o+w)),(2+l*3)*h,k)}},
aD(d){return!0}}
C.buA.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o=e.eo(A.J)
for(w=e.a,v=e.b,u=this.b,t=this.c,s=0;s<2;++s){r=A.i.D(t-s*0.18,0,1)
if(r<=0)continue
q=B.bY(o,v*(0.3+r*0.9),w*(0.5+r*0.7))
$.T()
p=new B.ar(A.T,A.Q,A.W,A.X,A.U)
p.b=A.ac
p.c=2
p.r=u.j((1-r)*0.7).gp(0)
d.c1(q,p)}},
aD(d){return d.c!==this.c}}
C.byG.prototype={
a4(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2=c0.e,c3=c2+36,c4=d2.a,c5=c4*0.23,c6=c5*0.34,c7=c6*0.85,c8=-c6*0.5,c9=c3-4,d0=new B.a4(0,c9,0+c4,c9+60)
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
d=C.hlU(c4,f)
a0=m[f]*c2*e
a1=d-4
a2=$.T()
a3=new B.ar(A.T,A.Q,A.W,A.X,A.U)
a3.r=A.v.j(0.5).gp(0)
a3.y=A.nh
d1.c1(new B.a4(a1,l,a1+k,j),a3)
a3=c3-a0
a1=d+c5
a4=new B.a4(d,a3,a1,a3+a0)
a5=new B.ar(A.T,A.Q,A.W,A.X,A.U)
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
a5=new B.ar(A.T,A.Q,A.W,A.X,A.U)
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
a2=new B.ar(A.T,A.Q,A.W,A.X,A.U)
a2.r=B.ap(A.d.gG(w),A.c,0.45).gp(0)
d1.af(b1,a2)
b2=new B.ar(A.T,A.Q,A.W,A.X,A.U)
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
b0=B.bw(new B.a4(b7,a6,b7+s,a9),A.hF)
$.T()
b8=new B.ar(A.T,A.Q,A.W,A.X,A.U)
b8.r=(b5?A.c.j(r):A.v.j(0.22)).gp(0)
d1.aq(b0,b8)}}if(u&&h){a2=c3-a0*c9-14
b9=new B.a4(d,a2,a1,a2+28)
J.bs(g.save())
g.clipRect(B.hR(a4),$.lC()[1],!0)
$.T()
a2=new B.ar(A.T,A.Q,A.W,A.X,A.U)
a2.san(new B.a8(A.aX,A.b1,A.x,B.a([A.L,A.c.j(0.4),A.L],v),c1,c1).az(0,b9))
d1.aE(b9,a2)
g.restore()}}},
aD(d){return!0}}
C.aQb.prototype={
b_(){this.b8()
this.b6()
this.dU()},
t(){var w=this,v=w.bd$
if(v!=null)v.a8(0,w.gdR())
w.bd$=null
w.a2()}}
C.a2d.prototype={
a9(){return"_Role."+this.b}}
C.qJ.prototype={}
C.rq.prototype={}
C.Dm.prototype={}
C.a0b.prototype={}
C.agM.prototype={}
C.a2q.prototype={
ga0(d){return this.d}}
C.Dx.prototype={}
C.adC.prototype={}
C.adU.prototype={}
C.afR.prototype={}
C.bl2.prototype={
a4y(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
G.dG(d,"",e,g,h,f)},
bcw(d,e,f){return this.a4y(d,e,f,0,0.55)},
aER(d,e,f,g){return this.a4y(d,e,f,0,g)},
bcx(d,e,f,g){return this.a4y(d,e,f,g,0.55)},
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
amf(d,e,f,g){var w="n"+this.ay++,v=new C.rq(w,e,f,g)
this.a.n(0,w,v)
this.b3()
return v},
tk(d,e,f){return this.amf(0,e,f,0)},
X(d,e){var w=this
w.a.X(0,e)
A.d.br(w.b,new C.duq(e))
A.d.br(w.c,new C.dur(e))
w.b3()},
bgo(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.nn.h(0,v.b).c===D.yu)return!1
w=this.b
if(A.d.aR(w,new C.dun(d,e)))return!1
w.push(new C.Dm(d,e))
this.b3()
return!0},
c5b(d){var w
if(d.b==="beat")return D.com[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.av(500)
case 2:return 1400+w.av(2200)
default:return 450+w.av(2000)}},
aIq(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.aEW[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.Dx(u,t,j.ax,90))
w.push(new C.Dx(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ai()*3.141592653589793*2
v.push(new C.a2q(u,new B.r(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.bcw(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ai()*3.141592653589793*2
p=100+w.ai()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ap(t,A.c,w.ai()*0.5)
m.toString
v.push(new C.a2q(u,new B.r(o*p,n*p),m,3+w.ai()*4.5,1000+w.av(700),j.ax))}j.f.push(new C.Dx(u,t,j.ax,120))
j.aER(120,200,"noise",0.5)
j.bcw(261.63*Math.pow(2,([7,12,16,19][w.av(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.Dx(u,t,j.ax,230))
w.push(new C.Dx(u,t,j.ax+160,160))
w.push(new C.Dx(u,t,j.ax+320,100))
j.bcx(180+j.at.av(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.adC(u,new B.r((w.ai()-0.5)*220,-260-w.ai()*180),t,j.ax))
j.bcx(300+w.av(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ai()*3.141592653589793*2
j.w.push(new C.adU(u,u.a7(0,new B.r(Math.cos(q),Math.sin(q)).aO(0,260+w.ai()*200)),t,j.ax))
j.a4y(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fU()
j.a4y(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.afR(u,D.aEh[v],t,j.ax))
j.aER(261.63*Math.pow(2,([0,5,9,12][j.at.av(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aER(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.ckq[A.o.F(w,3)]
for(k=1;k<=3;++k)j.czp(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new B.eQ(w,new C.duo(d));v.C();)j.aDk(w.gP(0),j.ax+D.cwU[A.o.F(g.d,4)])
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
case"chance":s=j.at.av(100)<D.cOj[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new B.eQ(w,new C.dup(d));v.C();)j.aDk(w.gP(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.xO(w,0,v-700)},
czp(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.a0b(e,"~"+d))},
aDk(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.agM(d.a,v,e,w))
u.push(new C.a0b(w,v))},
a8l(d){var w,v,u,t,s,r,q,p,o=this
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
else if(o.ax>=q){o.aIq(r)
u.n(0,r,o.ax+o.c5b(s))}}w=o.c
v=B.U(w).k("X<1>")
q=B.B(new B.X(w,new C.dus(o),v),v.k("M.E"))
if(q.length!==0){A.d.br(w,new C.dut(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.I)(q),++t){u=q[t].b
if(A.a.Y(u,"~")){p=A.a.aY(u,1)
for(u=A.d.gae(v),r=new B.eQ(u,new C.duu(p));r.C();)o.aDk(u.gP(0),o.ax)}else o.aIq(u)}}A.d.br(o.d,new C.duv(o))
A.d.br(o.e,new C.duw(o))
A.d.br(o.f,new C.dux(o))
A.d.br(o.w,new C.duy(o))
A.d.br(o.x,new C.duz(o))
A.d.br(o.r,new C.duA(o))
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
v.push(B.a([n.a,n.b],r))}return A.V.au(B.J(["nodes",m,"edges",v],u,x.ew),null)},
UU(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.V.aP(0,d,null))
k.a6(0)
for(o=x.j,n=J.aQ(o.a(J.t(w,"nodes"))),m=k.a;n.C();){v=n.gP(n)
u=B.v(J.t(v,"k"))
if(!D.nn.am(0,u))continue
t=B.v(J.t(v,"id"))
m.n(0,t,new C.rq(t,u,new B.r(B.dI(J.t(v,"x"))*k.cy.a,B.dI(J.t(v,"y"))*k.cy.b),A.i.M(B.dI(J.t(v,"p")))))
s=B.c9(B.aL(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aQ(o.a(J.t(w,"edges"))),n=k.b;o.C();){r=o.gP(o)
q=B.v(J.t(r,0))
p=B.v(J.t(r,1))
if(m.am(0,q)&&m.am(0,p))n.push(new C.Dm(q,p))}k.b3()
return!0}catch(l){return!1}},
cZj(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a6(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.rq(n,r,new B.r(q*p.a,o*p.b),s))
l.b3()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bgo(w[m.a],w[m.b])}},
ga0(d){return this.cy}}
C.GX.prototype={}
C.XG.prototype={
R(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aHi(new C.bl2(B.S(w,x.f3),v,u,t,s,r,q,p,o,B.S(w,n),B.S(w,n),B.S(w,n),B.S(w,n),A.cV,A.L,A.aA,$.az()),A.bH,A.J,A.J,A.Z,null,null)}}
C.aHi.prototype={
aeu(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$aeu=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.aB(),$async$aeu)
case 6:q=n.kh(m.t(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.l(new C.eCR(s))
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
return B.i($async$aeu,v)},
abn(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$abn=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.l(new C.eCG(s))
u=3
w=6
return B.b(B.aB(),$async$abn)
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
return B.i($async$abn,v)},
bRd(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a3(n).k("ba<2>")
v=""+n.a+"|"+o.length+"|"+new B.ba(n,w).cE(0,0,new C.eCI())+"|"+A.d.cE(o,0,new C.eCJ())
if(v===p.ch)return p.CW
u=new C.eCM()
t=x.s
s=B.a([],t)
r=new C.eCN(p,s,u)
for(n=new B.ba(n,w).gae(0),w=new B.eQ(n,new C.eCK());w.C();){q=n.gP(0)
if(!A.d.aR(o,new C.eCL(q)))s.push(B.v(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.cU(s,0,B.dy(5,"count",x.S),x.N).df(0)},
a_(){var w,v=this
v.a3()
v.aeu()
v.d.db=v.ay
w=v.q9(new C.eDg(v))
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
w.bBB()},
ae_(d){return this.c4C(d)},
c4C(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$ae_=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.aB(),$async$ae_)
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
case 5:if(!r||o.a.a===0)s.b_I(A.d.gG(D.aDJ))
if(s.c!=null)s.l(new C.eCQ())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ae_,v)},
b_I(d){this.d.cZj(0,d.c,d.d)
this.F5()},
F5(){var w=this.as
if(w!=null)w.a1(0)
this.as=B.cB(A.lY,new C.eCC(this))},
aA3(d){var w,v,u,t,s=this.d.a,r=B.a3(s).k("ba<2>")
s=B.B(new B.ba(s,r),r.k("M.E"))
r=B.U(s).k("dx<1>")
s=new B.dx(s,r)
s=new B.bQ(s,s.gJ(0),r.k("bQ<aj.E>"))
w=d.a
r=r.k("aj.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cn1(d){var w,v,u,t,s,r=this.d.a,q=B.a3(r).k("ba<2>")
r=B.B(new B.ba(r,q),q.k("M.E"))
q=B.U(r).k("dx<1>")
r=new B.dx(r,q)
r=new B.bQ(r,r.gJ(0),q.k("bQ<aj.E>"))
w=d.a
v=d.b
q=q.k("aj.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c4q(d){var w,v,u,t,s,r,q,p,o,n
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
cdN(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hLt(new B.r(n.a+36,n.b+0),new B.r(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cHj(d){var w,v,u,t,s,r,q=this,p=q.aA3(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.f2()
u=v.b
if(u==="button"){w.aIq(p)
return}if(q.r)return
t=D.nn.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.rU)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.b3()
q.F5()
return}if(q.r)return
r=q.cdN(d)
if(r!=null){w=q.d
A.d.cJ(w.b,r)
w.b3()
q.F5()}},
con(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cn1(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.aA3(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aI(0,d)}},
coo(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b3()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.r(A.i.D(d.a+s.y.a,46,t.a-46),A.i.D(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b3()}}},
b5i(){var w,v,u=this
if(u.z!=null){w=u.c4q(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bgo(v,w)}else v=!1
if(v){B.k7()
u.F5()}u.z=null
u.d.b3()}else if(u.x!=null){if(u.at)u.F5()
u.x=null}},
aeI(d){return this.c7I(d)},
c7I(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$aeI=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.aA3(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jC()
p=t.c
p.toString
w=3
return B.b(B.bU(L.mn,null,new C.eCT(q),p,!0,!0,!1,A.m8,!1,!1,x.y),$async$aeI)
case 3:if(f===!0){r.X(0,s)
t.F5()}case 1:return B.h(u,v)}})
return B.i($async$aeI,v)},
cdL(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.tk(0,d,new B.r(v.a*(0.25+u.ai()*0.5),v.b*(0.2+u.ai()*0.55)))
B.f2()
this.F5()},
aiI(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aiI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bU(L.mn,null,new C.eCV(),s,!0,!0,!0,A.m8,!1,!1,x.es),$async$aiI)
case 2:t=e
if(t!=null)u.b_I(t)
return B.h(null,v)}})
return B.i($async$aiI,v)},
ag4(d){var w=0,v=B.j(x.H),u=this,t
var $async$ag4=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.ce(null,null,!0,null,new C.eCF(),t,null,!0,!0,x.y),$async$ag4)
case 2:if(f===!0){u.d.a6(0)
u.F5()}return B.h(null,v)}})
return B.i($async$ag4,v)},
B(d){var w=this,v=null,u=B.a([B.akk(w.r?new B.bK(A.a5,v,v,new B.D(A.HU,B.hv(D.c_l,D.fY3,new C.eDe(w),v),v),v):w.cdO(),A.aZ,A.j2),B.E(B.cf(new C.eDf(w)),1)],x.p)
if(!w.r)u.push(w.cBY())
return B.c6(v,A.c7,B.bo(!0,B.x(u,A.l,v,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)},
bMS(){var w=null,v=new C.eCH(),u=A.v.j(0.7),t=B.m(26),s=B.K(A.bw.j(0.5),A.r,1)
return B.bS(0,B.ek(B.at(B.p(w,B.cb(B.x(B.a([D.h8G,A.at,D.hgy,A.aB,v.$4(A.mw,A.bw,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(X.DO,A.cw,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.kl,A.c5,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.Qm,A.bu,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.hfQ,new B.bK(A.a9,w,w,B.bL(!1,D.h5K,w,w,!0,w,w,w,this.gbML(),w,w),w)],x.p),A.B,w,A.e,A.O,0,A.p),A.t,w,A.y,w,w,w,w,w,A.ah),A.f,w,A.YW,new B.o(L.mn,w,s,t,w,w,A.m),w,w,w,A.f9,Aa.aou,w,w,w),w,w,w),u,!0),0,0,0)},
cdO(){var w=this,v=null,u=B.aI(v,v,v,v,Ar.nl,v,v,v,new C.eD0(w),v,v,v,v,v,v),t=w.aaO(A.DG,"How it works",new C.eD1(w),!0),s=w.ay?T.p2:A0.tT
return new B.D(D.bKL,B.A(B.a([u,D.bMr,t,w.aaO(s,"Sound",new C.eD2(w),!0),w.aaO(A.eg,"Ideas",w.gcsd(),!0),w.aaO(I.xk,"Clear",w.gcdM(w),!0),w.aRj(A.fO,"Show",new C.eD3(w),!0,!0)],x.p),A.l,v,A.e,A.h,0,v,v),v)},
aRj(d,e,f,g,h){var w=null,v=h?A.bw:A.c.j(0.08),u=B.m(14),t=B.m(14),s=B.a([B.V(d,h?A.v:A.c,w,w,w,20)],x.p)
return new B.D(An.xb,B.aG(!1,A.a3,!0,u,B.aM(!1,t,!0,B.h9(new B.D(new B.R(8,8,8,8),B.A(s,A.l,w,A.e,A.O,0,w,w),w),w,e,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ai),w)},
aaO(d,e,f,g){return this.aRj(d,e,f,g,!1)},
cBY(){var w=null,v=new C.eCX(this),u=A.c.j(0.08)
return B.p(w,B.cb(B.A(B.a([v.$2("START",D.yu),v.$2("CHANGE",D.G1),v.$2("REACT",D.rU)],x.p),A.B,w,A.e,A.h,0,w,w),A.t,w,A.y,w,w,w,w,w,A.aK),A.f,w,w,new B.o(L.CA,w,new B.bE(new B.ax(u,1,A.r,-1),A.a1,A.a1,A.a1),w,w,w,A.m),w,w,w,w,D.bFH,w,w,w)},
cBZ(d){var w,v,u,t,s=null,r=D.nn.h(0,d)
r.toString
w=B.m(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.K(v.j(0.5),A.r,1)
return new B.D(A.f7,B.aA(s,B.p(s,B.x(B.a([B.V(r.b,v,s,s,s,22),A.cQ,B.c(r.a,s,1,A.a2,s,s,s,D.aYs,s,s,s)],x.p),A.l,s,A.e,A.O,0,A.p),A.f,s,s,new B.o(s,s,t,w,s,new B.a8(A.aX,A.b1,A.x,u,s,s),A.m),s,s,s,s,A.hz,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eCW(this,d),s,s,s,s,s,s,!1,A.a4),s)}}
C.bl3.prototype={
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
d=new B.aH(f.r,A.ak,b3,b3,e)
e.push(new B.aZ(i,j))
d.ac()
a0=Math.max(40,Math.abs(g-i)*0.5)
f=new B.i3(i+a0,j,g-a0,h,g,h)
e.push(f)
e=d.f
if(e!=null)f.aj(e)
d.ac()
a1=D.nn.h(0,l.b).d
a2=D.nn.h(0,k.b).d
f=new B.ar(A.T,A.Q,A.W,A.X,A.U)
f.b=A.ac
f.c=3
f.d=A.bG
e=B.a([a1.j(0.55),a2.j(0.55)],q)
h=B.ra(new B.r(i,j),new B.r(g,h))
f.san(new B.a8(A.a5,A.a9,A.x,e,b3,b3).az(0,new B.a4(h.a-2,h.b-2,h.c+2,h.d+2)))
b7.af(d,f)}for(w=b4.d,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a3=w[n]
l=o.h(0,a3.a)
k=o.h(0,a3.b)
if(l==null||k==null)continue
j=a3.c
a4=A.i.D((b5-j)/(a3.d-j),0,1)
j=l.c
i=k.c
a5=C.hLt(new B.r(j.a+36,j.b+0),new B.r(i.a-36,i.b),a4)
$.T()
i=new B.ar(A.T,A.Q,A.W,A.X,A.U)
i.r=A.c.j(0.35).gp(0)
i.y=O.oT
b7.O(a5,8,i)
i=new B.ar(A.T,A.Q,A.W,A.X,A.U)
i.r=A.c.gp(0)
b7.O(a5,4,i)}a6=b2.d.$0()
if(a6!=null&&o.h(0,a6)!=null){a7=o.h(0,a6).c.a7(0,D.Ku)
a8=b2.e.$0()
w=a8.a
t=a7.a
a0=Math.max(40,Math.abs(w-t)*0.5)
d=new B.aH($.T().r,A.ak,b3,b3,B.a([],p))
p=a7.b
d.E(new B.aZ(t,p))
j=a8.b
d.E(new B.i3(t+a0,p,w-a0,j,w,j))
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
j=new B.ar(A.T,A.Q,A.W,A.X,A.U)
j.b=A.ac
i=1-v
j.c=3.5*i+0.5
j.r=a9.b.j(i*0.9).gp(0)
b7.O(a9.a,14+a9.d*p,j)}for(w=b4.w,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){b0=w[n]
v=A.i.D((b5-b0.d)/600,0,1)
p=b0.a
j=b0.b
i=B.kW(p,j,A.eb.aA(0,v))
i.toString
j=B.kW(p,j,A.eb.aA(0,A.i.D(v-0.35,0,1)))
j.toString
$.T()
p=new B.ar(A.T,A.Q,A.W,A.X,A.U)
p.c=5
p.d=A.bG
h=b0.c
g=B.a([h.j(0),h],q)
f=B.ra(j,i)
p.san(new B.a8(A.a5,A.a9,A.x,g,b3,b3).az(0,new B.a4(f.a-4,f.b-4,f.c+4,f.d+4)))
b7.ah(j,i,p)
p=new B.ar(A.T,A.Q,A.W,A.X,A.U)
p.r=A.c.gp(0)
b7.O(i,6,p)
p=new B.ar(A.T,A.Q,A.W,A.X,A.U)
p.r=h.j(0.5*(1-v)).gp(0)
p.y=A.l7
b7.O(i,12,p)}for(w=b4.e,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){a3=w[n]
v=A.i.D((b5-a3.f)/a3.e,0,1)
p=a3.a
$.T()
j=new B.ar(A.T,A.Q,A.W,A.X,A.U)
j.r=a3.c.j(1-v).gp(0)
b7.O(p,a3.d*(1-0.5*v),j)}for(w=b4.r,t=w.length,n=0;n<w.length;w.length===t||(0,B.I)(w),++n){k=w[n]
p=k.a
$.T()
j=new B.ar(A.T,A.Q,A.W,A.X,A.U)
i=k.c
j.r=i.j(0.35).gp(0)
j.y=A.l7
b7.O(p,11,j)
j=k.a
p=new B.ar(A.T,A.Q,A.W,A.X,A.U)
p.san(new B.bT(Ae.BT,0.5,A.x,b3,0,B.a([A.c,i],q),b3,b3).az(0,B.bX(k.a,8)))
b7.O(j,8,p)}for(b4=b4.x,w=b4.length,n=0;n<b4.length;b4.length===w||(0,B.I)(b4),++n){a5=b4[n]
v=A.i.D((b5-a5.d)/1000,0,1)
t=1-v
b1=C.bl4(a5.b,26+8*t,a5.c.j(t),b3,b3,A.u)
t=a5.a
q=b1.b
p=q.c
q=q.a.c
b1.a4(b7,new B.r(t.a-p/2,t.b-(40+60*v+q.gb4(q)/2)))}for(b4=new B.dq(o,o.r,o.e);b4.C();)b2.cnU(b7,b4.d,b5)
b6.restore()},
cnU(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.nn.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.i.D(1-(f-w)/520,0,1)
u=B.bY(e.c,64,64)
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
o=C.bl4(B.lw(r.a),30,A.c,r.b,j,A.D)
r=o.b
s=r.c
r=r.a.c
o.a4(d,p.aI(0,new B.r(s/2,r.gb4(r)/2)))
n=C.bl4(h.a,11,A.c,j,j,A.D)
n.a4(d,e.c.a7(0,new B.r(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.aEh[A.o.F(e.d,6)]:j
h=h.c
if(h===D.rU){s=e.c.a7(0,new B.r(0,62))
r=B.L()
r.r=D.aEW[A.o.F(e.d,6)].gp(0)
d.O(s,5,r)}else if(m!=null){l=C.bl4(m,9.5,A.aF,j,j,A.N)
l.a4(d,e.c.a7(0,new B.r(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bl4(m,9.5,A.aF,j,j,A.N)
l.a4(d,e.c.a7(0,new B.r(-l.b.c/2,54)))}if(k.c)return
if(h!==D.yu)k.b67(d,e.c.aI(0,D.Ku),q)
k.b67(d,e.c.a7(0,D.Ku),q)},
b67(d,e,f){var w
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
b_(){this.b8()
this.b6()
this.bC()}}
C.er.prototype={}
C.u8.prototype={
at7(d,e,f,g){var w=this
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
C.acg.prototype={}
C.ado.prototype={}
C.a6i.prototype={
bii(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.h9()?-1:1
v=t.ai()*3.141592653589793*2
u=f*(0.3+t.ai())
s.push(new C.acg(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ai()*0.45));++r}},
c9V(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.br(w,new C.bSa())},
amf(d,e,f,g){var w="p"+this.c++,v=new C.u8(w,e,f,g)
v.at7(w,e,f,g)
this.a.push(v)
return v},
X(d,e){A.d.X(this.a,e)
A.d.br(this.b,new C.bSl(e))},
a6(d){A.d.a6(this.a)
A.d.a6(this.b)},
cQd(d,e,f,g,h){return A.d.aR(this.b,new C.bSg(e,f,g,h))},
an3(d,e,f,g){var w
if(d===f||this.cQd(0,d,e,f,g))return null
w=new C.ado(d,e,f,g)
this.b.push(w)
return w},
aDS(d){var w
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
bax(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
MS(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
ce7(d){var w,v=d.b
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
a2.c9V(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.U(v).k("X<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.I)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.X(v,new C.bSm(a2),t).cE(0,0,new C.bSn(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.S(x.N,u)
n=new C.bSp(o)
m=B.a([],x.t)
l=new C.bSo(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.I)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.I)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.S(u,u)
f=new C.bSr(g,l,n)
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
a2.bat(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.Az(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.bat(e,d,w,!0)
a2.bTz(a4)},
bat(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.S(x.N,b3),b5=new C.bSc(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bSb(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.I)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bSe(B.S(b3,b3),r,b5)
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
if(h)B.bi(B.dL(g,null))
e=B.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=B.c2(b7,0,!1,b3)
a0=B.c2(b7,0,!1,b3)
k.a6(0)
j.a6(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.I)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.bax(t)*(1+t.CW))
a4=b2.aDS(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.ce7(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bWX(e,a0,b8)
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
bWX(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
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
bTz(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.I)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aDS(o)/a1.bax(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.Az(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bLt(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bii(o,3,260)
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
if(D.fqY.q(0,n)){m=o.fx>0?A.i.D((Math.abs(o.dy)-1)/6,0.15,1.4):0
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
bLt(d){return A.d.aR(this.a,new C.bS9(d))},
uw(d,e){var w
d.x=!0
d.ay=e
this.bii(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bmX(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a6(0)},
aKd(d){var w=d.b
return D.aVb.q(0,w)||D.AP.am(0,w)||w==="buck"||w==="regulator"},
bjN(d){var w,v=!0
if(!this.MS(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.AP.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
W9(d,e){var w=this.b
return new B.X(w,new C.bSt(d,e),B.U(w).k("X<1>")).gJ(0)},
rz(d){var w,v
if(d.x)return!1
w=d.b
if(D.AP.am(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bhN(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qS().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aKd(d)||i.rz(d))return null
w=i.W9(d,0)
v=i.W9(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.U(u).k("X<1>")
s=B.B(new B.X(u,i.gcYR(),t),t.k("M.E"))
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
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.Az(k))return"The "+$.qS().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.i.a5(k.cx,2)+" amps, but it can only give about "+A.i.a5(i.Az(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.aR(u,new C.bSh(i,d))
h=q.b
h=h===A.i.fO(h)?""+A.i.S(h):B.v(h)
u=A.i.a5(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.i.a5(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.i.a5(Math.abs(d.dy),1)+" V). Try a bigger battery."},
N4(d){var w=this.a
return new B.X(w,new C.bSk(d),B.U(w).k("X<1>"))},
aJP(d){return this.N4(d).aR(0,new C.bSj(0.35))},
qj(d,e){return A.d.aR(this.a,new C.bSi(e))}}
C.akW.prototype={
a4(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.T()
w=B.L()
w.r=F.nL.gp(0)
c0.aE(new B.a4(0,0,b8,b9),w)
w=C.iiU(c1)
v=$.hUr()
if(A.o.F(w.length,2)!==0)B.bi(B.dL('"points" must have an even number of values.',b5))
u=c0.b
if(u!=null)u.ol(v)
t=v.n8()
v=c0.c
v.drawPoints($.hVl()[0],w,t)
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
b4.cMW(c0,new B.r(n*b6+m*(42+l),o*b7),new B.r(j*b6+i*(42+h),k.d*b7),p,p===r)}u=b4.d
if(u!=null&&b4.e!=null){g=C.hZu(u.a,u.b,c1)
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
j=new B.ar(A.T,A.Q,A.W,A.X,A.U)
j.r=F.NF.j(A.i.D(f.Q*0.45,0,0.6)).gp(0)
j.y=A.Di
c0.O(new B.r(m,l),46+14*k,j)}e=o.h(0,f.a)
if(e==null)e=1
J.bs(v.save())
v.translate(m,l)
k=A.i.D(A.nC.aA(0,A.i.D(e,0,1)),0.01,1.4)
v.scale(k,k)
b4.coV(c0,f,f===r)
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
a0=new B.ar(A.T,A.Q,A.W,A.X,A.U)
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
h=new B.ar(A.T,A.Q,A.W,A.X,A.U)
h.b=A.ac
h.c=1.6
h.r=A.c.gp(0)
c0.af(d,h)
b4.lE(c0,"!",new B.r(j+-3,i+-8),A.c,14)}if(!f.x)j=(D.aVb.q(0,k)||D.AP.am(0,k)||k==="buck"||k==="regulator")&&!w.rz(f)&&w.W9(f,0)+w.W9(f,1)>0
else j=!1
if(j){m+=0
l+=-40
$.T()
j=new B.ar(A.T,A.Q,A.W,A.X,A.U)
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
m=new B.ar(A.T,A.Q,A.W,A.X,A.U)
m.r=F.nL.gp(0)
c0.O(a9,7,m)
m=new B.ar(A.T,A.Q,A.W,A.X,A.U)
m.b=A.ac
m.c=2.4
m.r=(l&&w.bjN(f)?A.c1:A.ab).gp(0)
c0.O(a9,6,m)
if(l&&w.bjN(f))b4.lE(c0,"+",new B.r(i+-4,j+-22),A.c1,13)}}for(v=w.f,s=v.length,q=0;q<v.length;v.length===s||(0,B.I)(v),++q){b0=v[q]
r=b0.a*b6+b0.c
o=b0.b*b7+b0.d
b1=new B.r(r,o)
b2=A.i.D(b0.r/0.8,0,1)
n=B.ap(M.Op,F.a0x,b2)
n.toString
m=b0.f
$.T()
l=new B.ar(A.T,A.Q,A.W,A.X,A.U)
l.r=n.gp(0)
l.c=2.4
l.d=A.bG
c0.ah(b1,new B.r(r-b0.e*0.035,o-m*0.035),l)
l=new B.ar(A.T,A.Q,A.W,A.X,A.U)
l.r=n.j(0.35*b2).gp(0)
l.y=A.Py
c0.O(b1,4.5*b2+1,l)}if(A.d.aR(u,new C.bMw())){b3=A.d.cE(u,0,new C.bMx())
$.T()
b7=B.L()
b7.r=D.bk4.j(0.05+0.09*b3*(0.5+0.5*Math.sin(w.d*22))).gp(0)
c0.aE(new B.a4(0,0,b8,b9),b7)
b7="short|"+B.v(b6)
a9=$.aQJ.h(0,b7)
if(a9==null){a9=B.fY(b5,A.cK,b5,b5,b5,D.fC9,A.a7,A.cc,b5,A.e3,A.cd)
a9.nA(b6-24)
$.aQJ.n(0,b7,a9)}a9.a4(c0,new B.r(12,10))}},
lE(d,e,f,g,h){var w,v=null,u=e+"|"+g.m()+"|"+B.v(h)
if($.aQJ.a>300)$.aQJ.a6(0)
w=$.aQJ.h(0,u)
if(w==null){w=B.fY(v,A.cK,v,v,v,B.cW(v,v,v,v,v,v,v,v,v,B.l(v,v,g,v,v,v,v,v,v,v,v,h,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),e),A.a7,A.cc,v,A.e3,A.cd)
w.eL()
$.aQJ.n(0,u,w)}w.a4(d,f)},
cMW(d,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.aH($.T().r,A.ak,null,null,B.a([],x.v))
e.E(new B.aZ(a0.a,a0.b))
w=C.hRj(a0,a1,a2)
e.E(new B.cj(w.a,w.b,a1.a,a1.b))
v=a2.a
u=Math.abs(v.fr)
t=a2.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ap(A.aQ,F.NF,A.i.D(p/1.2,0,1))
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
if(q){n=new B.amI(new B.v4(B.zO(e),!1,B.a([],x.l))).gG(0)
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
j=new B.ar(A.T,A.Q,A.W,A.X,A.U)
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
b0p(d,e,f){return this.a_v(d,e,f,!0)},
c9u(d,e){return this.a_v(d,A.bk,A.hX,e)},
ajR(d,e){var w,v,u
$.T()
w=B.L()
w.san(D.eKi.az(0,B.bX(e,4.2)))
d.O(e,4.2,w)
w=e.a7(0,D.ezB)
v=e.a7(0,D.ezK)
u=B.L()
u.r=A.cU.gp(0)
u.c=1.2
d.ah(w,v,u)},
coV(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=4294626325,b5=4286331629,b6=4287322667,b7=4293870660,b8=$.T(),b9=B.L()
b9.san(D.caF.az(0,D.fn9))
b9.c=3.4
b9.d=A.bG
w=B.L()
w.r=A.v.j(0.45).gp(0)
w.y=O.oT
c0.c1(D.fmZ,w)
if(c2){w=B.bw(D.fn7,A.k1)
v=B.L()
v.r=A.c.j(0.14).gp(0)
c0.aq(w,v)}u=C.hvA(c1)
c0.ah(new B.r(-u,0),D.eB6,b9)
c0.ah(D.eyg,new B.r(u,0),b9)
t=c1.x
w=c1.b
s=D.mF.am(0,w)&&c1.ch!==1
if(s){J.bs(c0.c.save())
c0.bV(0,c1.ch)}switch(w){case"battery":b2.bIa(c0,c1)
break
case"solar":r=B.bw(D.fn0,A.jJ)
c0.aq(r,b2.a_v(new B.a4(r.a,r.b,r.c,r.d),A.d0,A.bO,!1))
b8=B.L()
w=B.ap(D.bo7,A.dg,0.25+0.55*c1.f)
w.toString
v=B.ap(D.bxU,A.lV,0.3+0.4*c1.f)
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
w=new B.ar(A.T,A.Q,A.W,A.X,A.U)
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
c0.O(D.eyk,4+4*w,b8)
break
case"crank":o=B.bw(D.fmL,A.h2)
c0.aq(o,b2.b0p(new B.a4(o.a,o.b,o.c,o.d),A.bA,A.bQ))
b8=B.L()
b8.san(D.aTi.az(0,B.bX(A.J,12)))
c0.O(A.J,12,b8)
n=new B.r(Math.cos(c1.y)*22,Math.sin(c1.y)*22)
b8=B.L()
b8.r=A.cD.gp(0)
b8.c=5
b8.d=A.bG
c0.ah(A.J,n,b8)
b8=B.L()
b8.san(D.eKF.az(0,B.bX(n,7)))
c0.O(n,7,b8)
b2.ajR(c0,D.eB_)
b2.ajR(c0,D.ey4)
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
m=new B.ar(A.T,A.Q,A.W,A.X,A.U)
m.r=A.c.gp(0)
c0.af(k,m)
v.restore()}b8=B.L()
b8.san(D.eKl.az(0,B.bX(A.J,4.5)))
c0.O(A.J,4.5,b8)
break
case"switch":o=B.bw(D.fmT,A.pi)
b8=B.L()
b8.san(D.av9.az(0,new B.a4(o.a,o.b,o.c,o.d)))
c0.aq(o,b8)
b2.ajR(c0,D.Vj)
b2.ajR(c0,D.aO3)
h=c1.w?D.aO3:H.aNU
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
b8=B.kW(D.Vj,h,0.85)
b8.toString
w=B.L()
w.r=A.aC.gp(0)
c0.O(b8,5,w)
break
case"fuse":g=B.bw(D.aU3,D.aTn)
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
c0.ah(D.aOn,D.aO1,b8)}else{b8=B.L()
b8.c=1.6
b8.r=A.bY.gp(0)
c0.ah(D.aOn,D.eBu,b8)
b8=B.L()
b8.c=1.6
b8.r=A.bY.gp(0)
c0.ah(D.ez7,D.aO1,b8)
b8=B.L()
b8.r=A.e6.gp(0)
c0.O(A.J,6,b8)}for(f=0;f<2;++f){e=B.bY(new B.r(M.hp[f]*22,0),20,9)
c0.aq(B.bw(e,A.hq),b2.a_v(e,A.de,A.oA,!0))}break
case"pot":b8=B.L()
b8.san(D.eKw.az(0,B.bX(A.J,21)))
c0.O(A.J,21,b8)
for(l=0;l<=10;++l){d=2.356194490192345+l*3.141592653589793*1.5/10
b8=Math.cos(d)
w=Math.sin(d)
v=Math.cos(d)
m=Math.sin(d)
k=new B.ar(A.T,A.Q,A.W,A.X,A.U)
k.r=A.aF.gp(0)
k.c=1.2
c0.ah(new B.r(b8*18,w*18),new B.r(v*22,m*22),k)}b8=B.L()
b8.san(D.eKj.az(0,B.bX(A.J,13)))
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
case"resistor":a1=B.bw(D.aU3,D.aTn)
b8=B.L()
b8.san(D.ceb.az(0,new B.a4(a1.a,a1.b,a1.c,a1.d)))
c0.aq(a1,b8)
b8=x.O
a2=B.J([47,B.a([B.b1(b4),B.b1(b5),A.v],b8),100,B.a([B.b1(b6),A.v,B.b1(b6)],b8),220,B.a([B.b1(b7),B.b1(b7),B.b1(b6)],b8),470,B.a([B.b1(b4),B.b1(b5),B.b1(b6)],b8),1000,B.a([B.b1(b6),A.v,B.b1(b7)],b8)],x.i,x.bF)
a3=a2.h(0,c1.r)
if(a3==null){b8=a2.h(0,100)
b8.toString
a3=b8}for(p=0;p<3;++p){b8=-14+p*9
w=new B.ar(A.T,A.Q,A.W,A.X,A.U)
w.r=a3[p].gp(0)
c0.aE(new B.a4(b8,-9,b8+4.5,9),w)}b8=B.L()
b8.r=A.aQ.gp(0)
c0.aE(D.fnl,b8)
b8=c1.r
b2.lE(c0,b8>=1000?"1k\u03a9":""+A.i.S(b8)+"\u03a9",D.eAv,A.ab,10)
break
case"bulb":w=c1.fx
if(w>0){v=B.L()
v.r=A.eG.j(0.55*w).gp(0)
v.y=A.Di
c0.O(H.w3,34,v)}o=B.bY(D.ex_,12,18)
c0.aq(B.bw(o,A.hq),b2.a_v(o,A.bk,A.dT,!0))
for(p=0;p<3;++p){w=13+p*3.5
v=new B.ar(A.T,A.Q,A.W,A.X,A.U)
v.r=A.dJ.gp(0)
v.c=1
c0.ah(new B.r(-9,w),new B.r(9,w),v)}w=B.L()
if(t)v=A.GC
else{v=B.ap(A.dT,A.i_,c1.fx)
m=c1.fx
v=v.j(0.25+0.7*m)}if(t)m=A.GY
else{m=B.ap(A.d0,A.eG,c1.fx)
m.toString}w.san(new B.bT(A.mS,0.5,A.x,b3,0,B.a([v,m.j(0.18+0.5*c1.fx)],x.O),b3,b3).az(0,B.bX(A.uc,17)))
c0.O(A.uc,17,w)
w=B.L()
w.b=A.ac
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c0.O(A.uc,17,w)
b8=b8.r
w=x.v
m=new B.aH(b8,A.ak,b3,b3,B.a([],w))
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
c0.ah(D.eBo,D.eBq,v)
v=B.L()
v.r=A.cE.gp(0)
v.c=1.4
c0.ah(D.ez0,D.ez3,v)
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
if(t)w=A.b7
else{w=B.ap(A.d0,D.bpf,c1.fx)
w.toString}b8.r=w.gp(0)
c0.af(a4,b8)
break
case"led":w=c1.fx
if(w>0){v=B.L()
v.r=A.aC.j(0.6*w).gp(0)
v.y=D.bMe
c0.O(A.uc,30,v)}w=B.L()
w.r=A.dT.gp(0)
w.c=2.4
c0.ah(D.eBw,D.eBv,w)
w=B.L()
w.r=A.dT.gp(0)
w.c=2.4
c0.ah(D.ez9,D.ez8,w)
b8=b8.r
w=x.v
a6=new B.aH(b8,A.ak,b3,b3,B.a([],w))
a6.E(new B.aZ(-12,8))
a6.E(new B.aq(-12,-6))
a6.E(new B.cj(0,-26,12,-6))
a6.E(new B.aq(12,8))
a6.E(new B.bA())
v=B.L()
if(t)m=A.jz
else{m=B.ap(A.ey,D.br1,c1.fx)
m.toString}if(t)k=A.l3
else{k=B.ap(A.kH,A.aC,c1.fx)
k.toString}v.san(new B.a8(A.ay,A.aD,A.x,B.a([m,k],x.O),b3,b3).az(0,D.fmd))
c0.af(a6,v)
v=B.L()
v.b=A.ac
v.c=1.2
v.r=A.jU.gp(0)
c0.af(a6,v)
v=B.L()
v.r=A.et.gp(0)
c0.aE(D.fmj,v)
w=new B.aH(b8,A.ak,b3,b3,B.a([],w))
w.E(new B.aZ(-7,-4))
w.E(new B.cj(-6,-12,0,-15))
b8=B.L()
b8.b=A.ac
b8.c=2
b8.r=A.c.j(0.5).gp(0)
c0.af(w,b8)
break
case"motor":a7=new B.a4(-28,-14,20,14)
c0.aq(B.bw(a7,A.iD),b2.b0p(a7,A.an,A.bn))
b8=B.L()
b8.r=A.cx.gp(0)
c0.aE(D.flN,b8)
b8=B.L()
b8.r=A.cD.gp(0)
c0.aE(D.flP,b8)
b8=c0.c
J.bs(b8.save())
b8.translate(31,0)
for(l=0;l<3;++l){J.bs(b8.save())
b8.rotate((c1.y+l*2.094)*180/3.141592653589793,0,0)
w=B.bY(H.aNP,15,7)
v=new B.ar(A.T,A.Q,A.W,A.X,A.U)
v.r=A.cW.j(0.9).gp(0)
c0.c1(w,v)
b8.restore()}w=B.L()
w.r=A.aw.gp(0)
c0.O(A.J,3,w)
b8.restore()
b2.lE(c0,"M",D.eAZ,A.aw,14)
break
case"buzzer":a8=B.bY(A.J,42,42)
b8=B.L()
b8.san(D.eKA.az(0,a8))
c0.c1(a8,b8)
b8=B.L()
b8.r=A.v.gp(0)
c0.O(A.J,6,b8)
b8=B.L()
b8.b=A.ac
b8.c=1.4
b8.r=A.aT.gp(0)
c0.O(A.J,6,b8)
b2.lE(c0,"+",D.eAS,A.ab,12)
for(b8=b2.b,l=1;l<=3;++l){w=c1.fx
v=w>0?A.i.F(b8.d*14,5):0
v=B.bX(A.J,24+l*5+v)
m=new B.ar(A.T,A.Q,A.W,A.X,A.U)
m.b=A.ac
m.c=2
m.r=A.c5.j(w*(1-l*0.22)).gp(0)
c0.cQ(v,-0.7,1.4,!1,m)}break
case"heater":o=B.bw(D.fmP,A.iD)
w=B.L()
w.san(D.cbK.az(0,new B.a4(o.a,o.b,o.c,o.d)))
c0.aq(o,w)
w=B.a([],x.v)
a9=new B.aH(b8.r,A.ak,b3,b3,w)
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
w.r=D.bq_.j(0.5*b8).gp(0)
w.y=A.l7
c0.af(a9,w)}$.T()
b8=B.L()
b8.b=A.ac
b8.c=3.2
b8.d=A.bG
b8.r=B.ap(A.ml,Ai.z5,c1.fx).gp(0)
c0.af(a9,b8)
break
case"capacitor":a7=new B.a4(-16,-22,16,18)
b8=B.bw(a7,A.iD)
w=B.L()
w.san(D.auX.az(0,a7))
c0.aq(b8,w)
w=B.L()
w.r=A.bO.gp(0)
c0.aE(D.fmt,w)
for(p=0;p<4;++p)b2.lE(c0,"\u2212",new B.r(-14,-18+p*9),A.aw,11)
b0=new B.a4(-16,-24,16,-17)
c0.aq(B.bw(b0,A.hq),b2.c9u(b0,!1))
b8=38*c1.fx
w=18-b8
$.T()
v=B.L()
v.r=A.bf.j(0.5).gp(0)
c0.aE(new B.a4(-3,w,11,w+b8),v)
b2.lE(c0,"1F",H.w3,A.c,11)
break
case"radio":a1=B.bw(D.ab8,A.h2)
b8=B.L()
b8.san(D.ceq.az(0,new B.a4(a1.a,a1.b,a1.c,a1.d)))
c0.aq(a1,b8)
b8=B.L()
b8.b=A.ac
b8.c=1.4
b8.r=A.oA.j(0.6).gp(0)
c0.aq(a1,b8)
b8=B.bw(D.fmQ,A.jJ)
w=B.L()
w.r=A.e4.gp(0)
c0.aq(b8,w)
for(p=0;p<6;++p){b8=-10+p*4.4
w=new B.ar(A.T,A.Q,A.W,A.X,A.U)
w.r=A.ml.gp(0)
w.c=1.4
c0.ah(new B.r(-27,b8),new B.r(-3,b8),w)}b8=B.L()
b8.r=(c1.fx>0?A.h8:A.oC).gp(0)
c0.aE(D.flU,b8)
if(c1.fx>0){b8=8+A.i.F(b2.b.d*7,18)
w=B.L()
w.r=A.bE.gp(0)
w.c=1.6
c0.ah(new B.r(b8,-13),new B.r(b8,-3),w)}b8=B.L()
b8.san(D.aTi.az(0,B.bX(D.aa5,6)))
c0.O(D.aa5,6,b8)
b8=B.L()
b8.r=A.oA.gp(0)
c0.O(D.eyf,4,b8)
b8=B.L()
b8.r=A.dT.gp(0)
b8.c=1.8
c0.ah(D.eya,D.aO8,b8)
if(c1.fx>0)for(b8=b2.b,l=1;l<=2;++l){w=B.bX(D.aO8,4+l*5+A.i.F(b8.d*8,5))
v=new B.ar(A.T,A.Q,A.W,A.X,A.U)
v.b=A.ac
v.c=1.4
v.r=A.oK.j(0.7).gp(0)
c0.cQ(w,-2.4,1.6,!1,v)}break
case"tv":w=B.bw(D.fn_,A.iD)
v=B.L()
v.r=M.n8.gp(0)
c0.aq(w,v)
b1=B.bw(D.fmX,A.hq)
if(c1.fx>0&&!c1.x){b8=c0.c
J.bs(b8.save())
b8.clipRRect(B.nd(b1),$.mP(),!0)
b8.translate(-33,-21)
K.h4Y(c0,D.ftO,c1.at,b2.b.d,c1.ax,-1,b3,b3)
b8.restore()
b8=B.L()
b8.r=A.bf.gp(0)
c0.O(D.eyr,1.6,b8)}else{w=B.L()
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
b8.r=A.bA.gp(0)
c0.aE(D.fmi,b8)
break}C.iCO(c0,c1,b2.b.d,b2.gce8())
if(t)b2.lE(c0,"\u2716",D.eBy,A.aC,14)
if(s)c0.c.restore()},
aSq(d,e,f,g){var w,v,u,t,s,r,q,p,o=new C.bMv(),n=e.d,m=e.b,l=n-m,k=e.a,j=m+l*0.06,i=k+l*0.16,h=new B.a4(k,j,i,j+l*0.88)
j=l*0.08
k=B.bw(h,new B.aP(j,j))
$.T()
w=B.L()
w.san(o.$2(h,D.dhJ))
d.aq(k,w)
i-=0.5
w=l*0.2
k=e.c-w
v=new B.a4(i,m,k,n)
u=k-i
t=i+u*0.66
s=B.L()
s.san(o.$2(v,D.dGg))
d.aE(new B.a4(i,m,t,n),s)
s=B.L()
s.san(o.$2(v,D.dfX))
d.aE(new B.a4(t,m,k,n),s)
k-=0.5
s=m+j
n=l*0.12
r=k+n
q=new B.a4(k,s,r,s+l*0.84)
s=B.L()
s.san(o.$2(q,D.aEl))
d.aE(q,s)
r-=0.5
s=m+l*0.3
p=new B.a4(r,s,r+l*0.1,s+l*0.4)
s=l*0.05
s=B.bw(p,new B.aP(s,s))
r=B.L()
r.san(o.$2(p,D.aEl))
d.aq(s,r)
r=i+2
s=m+l*0.18
o=B.L()
o.r=A.c.j(0.18).gp(0)
d.aE(new B.a4(r,s,r+(u-4),s+j),o)
if(f){o=l*0.42
this.lE(d,"+",new B.r(t+u*0.08,m+n),A.dl,o)
if(g!=null)this.lE(d,g,new B.r(i+u*0.12,m+w),A.bO,o)}},
bLf(d,e,f){return this.aSq(d,e,!0,f)},
bLe(d,e,f){return this.aSq(d,e,f,null)},
bIa(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=a6.e,a4=B.v(a3===A.i.fO(a3)?A.i.S(a3):a3)+"V"
if(a3<=2){a2.bLf(a5,D.fmO,a4)
a2.lE(a5,"\u2212",D.eB8,A.ab,12)
a2.lE(a5,"+",D.ey5,A.aQ,12)
$.T()
w=B.L()
w.r=A.bx.gp(0)
a5.aE(D.fmC,w)
w=a6.as
v=B.L()
v.r=B.ap(A.aC,A.bf,w).gp(0)
a5.aE(new B.a4(-22,15,-22+44*w,19),v)
if(a6.as<=0.02)a2.lE(a5,"FLAT",D.eAF,A.c1,9)}else if(a3<=4.5){u=a3>3?3:2
t=u*13+6
w=-t/2
v=w+t
s=new B.a4(-31,w,31,v)
r=B.bw(s,A.jJ)
$.T()
q=B.L()
q.san(D.cdR.az(0,s))
a5.aq(r,q)
for(r=w+3,p=0;p<u;++p){q=r+p*13
a2.bLe(a5,new B.a4(-27,q,25,q+11.5),!1)}for(q=r+(t-6),o=0;o<2;++o){n=D.dfR[o]
$.T()
m=new B.ar(A.T,A.Q,A.W,A.X,A.U)
m.r=A.dT.gp(0)
a5.aE(new B.a4(n,r,n+1.6,q),m)}a2.lE(a5,a4,new B.r(-9,v+1),A.aQ,10)
a2.lE(a5,"+",new B.r(25,w-13),A.aQ,11)}else if(a3<=9){l=new B.a4(-18,-16,18,18)
w=B.bw(l,A.hq)
v=$.T()
r=B.L()
r.san(D.ce8.az(0,l))
a5.aq(w,r)
k=new B.a4(-18,-4,18,18)
r=B.r9(k,A.hq,A.hq,A.bJ,A.bJ)
w=B.L()
w.san(D.auX.az(0,k))
a5.aq(r,w)
j=new B.a4(-18,-16,18,-11)
w=B.r9(j,A.bJ,A.bJ,A.hq,A.hq)
r=B.L()
r.san(D.cey.az(0,j))
a5.aq(w,r)
i=B.L()
i.san(D.eKQ.az(0,D.fmm))
a5.O(D.aOr,4,i)
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
a5.O(D.ezg,2,w)
a2.lE(a5,"9V",D.eBB,A.c,13)
a2.lE(a5,"+",D.eAB,A.aQ,11)}else{e=new B.a4(-34,-12,34,18)
w=B.bw(e,A.hq)
$.T()
v=B.L()
v.san(D.cbE.az(0,e))
a5.aq(w,v)
d=new B.a4(-36,-18,36,-10)
v=B.bw(d,D.eKY)
w=B.L()
w.san(D.avc.az(0,d))
a5.aq(v,w)
for(g=0;g<6;++g){w=new B.ar(A.T,A.Q,A.W,A.X,A.U)
w.r=A.aw.gp(0)
a5.O(new B.r(-14+g*5.6,-14),1.6,w)}w=B.L()
w.r=A.bu.j(0.92).gp(0)
a5.aE(D.fmY,w)
for(o=0;o<2;++o){w=D.cGN[o]
n=w.a
a0=w.b
a1=B.bY(new B.r(n,-21),7,8)
w=B.bw(a1,A.Fh)
v=new B.ar(A.T,A.Q,A.W,A.X,A.U)
v.san(D.ccd.az(0,a1))
a5.aq(w,v)
v=B.bw(B.bY(new B.r(n,-24),3.5,9),A.Fh)
w=new B.ar(A.T,A.Q,A.W,A.X,A.U)
w.r=a0.gp(a0)
a5.aq(v,w)}a2.lE(a5,"\u2212",D.eB9,A.ab,11)
a2.lE(a5,"+",D.ey0,A.aC,11)
a2.lE(a5,"12V",H.aOl,A.aw,11)}},
aD(d){return!0}}
C.n9.prototype={
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
n.at7(o,r,q,p)
k.push(n)
J.iU(s[4],new C.cws(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.I)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.an3(m,u[1],l,u[3])}}}
C.akU.prototype={
R(){var w=x.N
return new C.akV(B.c0(2000,1,1,0,0,0,0,0),A.J,A.aA,B.S(w,x.gl),B.aR(w),$,A.bH,0,B.a([],x.X),null,null)}}
C.akV.prototype={
agf(d){var w=this,v=w.ch
if(v!=null)v.a1(0)
w.l(new C.bM8(w,d))
w.ch=B.cB(A.ne,new C.bM9(w))},
t(){var w=this.ch
if(w!=null)w.a1(0)
w=this.db
if(w!=null)w.a1(0)
this.bxI()},
a1I(d,e){return this.cmL(d,e)},
b4M(d){return this.a1I(d,!1)},
cmL(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a1I=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
r=d.at
q=e?A.nX:A.zf
p=d.b
w=3
return B.b(K.hrX(s,r,p,d.ax<3.2,q,$.qS().h(0,p).b),$async$a1I)
case 3:o=g
t.cy=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a1I,v)},
czM(d){var w=this,v=new B.W(Date.now(),0,!1),u=w.CW.c_(0,d.a,new C.bMa()),t=J.cI(u)
t.I(u,v)
t.br(u,new C.bMb(v))
if(t.gJ(u)>=4){t.a6(u)
t=w.db
if(t!=null)t.a1(0)
w.a33(d)
return}if(t.gJ(u)===3){t=w.db
if(t!=null)t.a1(0)
w.db=B.cB(A.j3,new C.bMc(w,u,d))}},
a1o(d){return this.cl2(d)},
cl2(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a1o=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.cy||t.c==null){w=1
break}t.cy=!0
s=t.c
s.toString
w=3
return B.b(C.iE2(s,d.b,A.i.S(A.i.F(t.a.c.d*0.12,1)*100)),$async$a1o)
case 3:t.cy=!1
case 1:return B.h(u,v)}})
return B.i($async$a1o,v)},
a33(d){return this.cxf(d)},
cxf(d){var w=0,v=B.j(x.H),u=this,t
var $async$a33=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bU(A.L,null,new C.bM6(u,d),t,!0,!0,!0,null,!1,!1,x.H),$async$a33)
case 2:return B.h(null,v)}})
return B.i($async$a33,v)},
a_(){this.a3()
this.bjX()
this.mn()},
bjX(){this.a.c.e=new C.bMs(this)},
mE(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.vS(0,d)
for(w=q.a.c.a,v=w.length,u=q.cx,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=D.mF.h(0,s.b)
if((r==null?null:r.b)!==D.Bg)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.q(0,s.a)&&!q.cy){u.I(0,s.a)
q.a1I(s,!0)}}else u.X(0,s.a)}if((q.ax+=d)>0.16){q.ax=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)G.dG(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)G.dG(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cV.ai()<0.5
else u=!1
if(u)G.dG(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){G.dG(900+A.cV.av(800),"",90,0,0.1,o)
if(A.cV.ai()<0.35)G.dG(300+A.cV.av(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cV.ai()<0.4
else u=!1
if(u)G.dG(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)G.dG(330+A.o.F(110*A.i.bc(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)G.dG((A.i.bc(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)G.dG(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)G.dG(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cV.ai()<0.5
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
q.l(new C.bMt())},
bbY(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
b5s(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.U(w).k("dx<1>"),w=new B.dx(w,v),w=new B.bQ(w,w.gJ(0),v.k("bQ<aj.E>")),u=d.a,v=v.k("aj.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.at
p=s.d
o=D.mF.am(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cMX(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
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
h=C.hRj(new B.r(k,n),new B.r(i,l),p)
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
agd(){this.a.toString
this.l(new C.bLy())},
bul(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.djs[v]
if(!A.d.aR(p.a.c.a,new C.bMu(u,w))){o=new B.r(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?A2.B4:o
s=s?A2.B4:o
q=t.amf(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.x=null
G.dG(1200,"",50,0,0.3,"tri")
p.agd()},
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
w.push(n.b5h(s,!0))
n.a.toString
if(t)w.push(n.b5h(r,!0))
w.push(B.E(B.cf(new C.bMr(n,q)),1))
return B.x(w,A.l,null,A.e,A.h,0,A.p)},
b5h(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.I)(d),++v){u=d[v]
t=$.qS()
s=t.h(0,u).d.j(0.14)
r=new B.aP(14,14)
q=new B.ax(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.aA(p,B.p(p,B.x(B.a([B.c(t.h(0,u).c,p,p,p,p,p,p,A.y7,p,p,p),B.c(t.h(0,u).b,p,1,A.a2,p,p,p,A.on,p,p,p)],n),A.l,p,A.bb,A.h,0,A.p),A.f,p,p,new B.o(s,p,new B.bE(q,q,q,q),new B.bb(r,r,r,r),p,p,A.m),p,p,p,L.oS,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bLz(this,u),p,p,p,p,p,p,!1,A.a4))}return B.p(p,B.cn(m,p,p,A.hm,p,p,A.aK,!1),A.f,p,p,new B.o(L.CA,p,new B.bE(A.a1,A.a1,new B.ax(o,1,A.r,-1),A.a1),p,p,p,A.m),p,58,p,p,p,p,p,p)},
coW(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=a2.b,a1=$.qS().h(0,a0)
a1.toString
w=a2.dy
v=a2.fr
u=new C.bLV(e,a1)
t=new C.bLU()
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
m=B.a([B.A(B.a([n,A.aa,o,B.aA(d,B.p(d,B.c(e.f?"Less":"About",d,d,d,d,d,d,A.WP,d,d,d),A.f,d,d,new B.o(d,d,l,m,d,d,A.m),d,d,d,d,A.o3,d,d,d),A.y,!1,D.hHe,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.bLG(e),d,d,d,d,d,d,!1,A.a4),B.aI(d,d,d,d,D.c62,d,d,d,new C.bLH(e,a2),d,d,d,d,"Remove part",A.co),B.aI(d,d,d,d,At.R7,d,d,d,new C.bLI(e),d,d,d,d,d,A.co)],k),A.l,d,A.e,A.h,0,d,d)],k)
if(e.f)A.d.u(m,B.a([B.c(a1.e,d,d,d,d,d,d,A.Lu,d,d,d),A.cQ,B.c("How it is made: "+a1.f,d,d,d,d,d,d,V.aY_,d,d,d)],k))
m.push(A.aj)
if(a2.x)m.push(D.fWW)
else m.push(new B.D(A.f7,B.A(B.a([t.$2(A.i.a5(Math.abs(a2.dy),2),"VOLTS"),A.ba,t.$2(A.i.a5(Math.abs(a2.fr)*1000,0),"MILLIAMPS"),A.ba,t.$2(A.i.a5(Math.abs(w*v),2),"WATTS")],k),A.l,d,A.e,A.h,0,d,d),d))
j=e.a.c.bhN(a2)
if(j!=null){a1=(a2.x?A.aC:A.as).j(0.14)
w=B.m(10)
v=B.K((a2.x?A.aC:A.as).j(0.5),A.r,1)
m.push(new B.D(A.hy,B.p(d,B.c((a2.x?"Why it burnt out":"Why it is not working")+": "+j,d,d,d,d,d,d,D.fSL,d,d,d),A.f,d,d,new B.o(a1,d,v,w,d,d,A.m),d,d,d,d,A.cu,d,d,d),d))}if(C.hpm(a0)){a1=B.a([],k)
for(i=0;i<10;i=h){h=i+1
a1.push(new B.D(A.f7,new E.e1("CH "+h,a2.at===i,new C.bLM(e,a2,i),d,r,d),d))}a1=B.cb(B.A(a1,A.l,d,A.e,A.h,0,d,d),A.t,d,A.y,d,d,d,d,d,A.aK)
if(e.a.c.rz(a2)){w=F.Tu[A.o.F(a2.at,10)]
v=e.f?" Tap the TV 3 times quickly to open the big screen.":""
v="Showing: "+w.a+"."+v
w=v}else w="The TV is off. Give it power with the + dot towards the battery +."
a1=B.a([A.aj,a1,A.at,B.c(w,d,e.f?4:1,A.a2,d,d,d,N.hH,d,d,d)],k)
if(e.a.c.rz(a2))a1.push(new E.fI(A.xn,"Open big screen",new C.bLN(e,a2),r,d))
A.d.u(m,a1)}if(D.mF.am(0,a0)&&!C.hpm(a0)){a1=B.a([A.aj],k)
if(e.f||!e.a.c.rz(a2))a1.push(B.c(e.a.c.rz(a2)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",d,d,d,d,d,d,N.hH,d,d,d))
if(e.a.c.rz(a2))a1.push(new E.fI(A.QP,"Open the "+$.qS().h(0,a0).b,new C.bLO(e,a2),r,d))
A.d.u(m,a1)}if(D.mF.am(0,a0))A.d.u(m,B.a([A.aj,new E.fI(A.DK,"Make it bigger (or tap it 4 times)",new C.bLP(e,a2),r,d)],k))
e.a.toString
a1=a0==="buck"
if(a1||a0==="regulator"){w=A.i.a5(a2.db,1)
if(e.a.c.rz(a2))v=a2.dx
else{e.a.toString
v=a0==="regulator"?5:a2.e}v=B.a([A.aj,B.c("Volts in: "+w+" V   \u2192   Volts out: "+A.i.a5(v,1)+" V",d,d,d,d,d,d,D.fMy,d,d,d)],k)
if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dD9[g]
w=f===A.i.fO(f)?A.i.S(f):f
a1.push(new E.e1(B.v(w)+" V out",a2.e===f,new C.bLQ(e,a2,f),d,r,d))}v.push(new B.D(A.kL,B.bZ(A.bI,a1,A.br,d,0,6),d))}if(a0==="regulator")v.push(D.hb5)
A.d.u(m,v)}if(e.a.c.MS(a2)&&!a2.x){a1=A.i.a5(a2.cx,2)
w=A.i.a5(e.a.c.Az(a2),2)
v=e.a.c
o=v.apQ(a2)?"   \u26a0 OVERLOADED":""
a1=B.c("Supplying "+a1+" A of the "+w+" A it can give"+o,d,d,d,d,d,d,B.l(d,d,v.apQ(a2)?A.c1:A.eF,d,d,d,d,d,d,d,d,12.5,d,d,A.D,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
w=B.m(4)
o=A.i.D(a2.cx/e.a.c.Az(a2),0,1)
v=e.a.c.apQ(a2)?A.aC:A.bf
m.push(new B.D(A.hy,B.x(B.a([a1,A.cQ,B.by(w,B.jD(A.bx,d,d,5,d,o,new B.l6(v,x.c)),A.aq)],k),A.B,d,A.e,A.h,0,A.p),d))}a1=a0==="battery"
if(a1&&a2.e===1.5){w=a2.as
v=A.i.S(w*100)
if(w<=0.02)w="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else w=w>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.D(A.hy,B.c("Charge: "+v+"%"+w,d,d,d,d,d,d,D.fFY,d,d,d),d))}if(a1){a1=B.a([],k)
for(g=0;g<5;++g){f=D.drb[g]
w=f===1.5?"1.5 V (rechargeable)":B.v(f)+" V"
a1.push(new E.e1(w,a2.e===f,new C.bLR(e,a2,f),d,r,d))}m.push(B.bZ(A.bI,a1,A.br,d,0,6))}if(a0==="resistor"){a1=B.a([],k)
for(g=0;g<5;++g){f=D.dgk[g]
w=f>=1000?"1 k\u03a9":""+A.o.S(f)+" \u03a9"
a1.push(new E.e1(w,a2.r===f,new C.bLS(e,a2,f),d,r,d))}m.push(B.bZ(A.bI,a1,A.br,d,0,6))}if(a0==="solar")m.push(u.$3("Sunlight",a2.f,new C.bLT(a2)))
if(a0==="turbine")m.push(u.$3("Wind",a2.f,new C.bLJ(a2)))
if(a0==="pot")m.push(u.$3("Knob",a2.f,new C.bLK(a2)))
if(a0==="ldr")m.push(u.$3("Light",a2.f,new C.bLL(a2)))
if(a0==="crank")m.push(D.h6j)
if(a0==="switch")m.push(B.c(a2.w?"Closed: the loop is joined up.":"Open: the loop is broken.",d,d,d,d,d,d,N.hH,d,d,d))
return B.p(d,new B.cS(D.b9v,B.cb(B.x(m,A.B,d,A.e,A.O,0,A.p),A.t,d,A.y,d,d,d,d,d,A.ah),d),A.f,d,d,new B.o(F.Zy,d,q,s,p,d,A.m),d,d,D.hGx,d,D.bGl,d,d,d)}}
C.beM.prototype={}
C.WR.prototype={
R(){return new C.aGg(C.hvz(),new B.cA(null,x.gJ),B.aR(x.S))}}
C.aGg.prototype={
a_(){this.a3()
$.aU.cV$.push(this)
this.age()},
age(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$age=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fSo(),$async$age)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.iDc(t.d,r)
if(s!=null){t.l(new C.e54(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$age,v)},
FT(){var w,v=this
if(!v.as)return
w=C.itq(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bID(w)},
jn(d){if(d!==A.h5)this.FT()},
t(){$.aU.hZ(this)
this.FT()
this.a2()},
cea(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.U(v).k("X<1>")
t=new B.X(v,new C.e5d(q),u).gJ(0)
s=new B.X(v,new C.e5e(),u).gJ(0)
r=new B.X(v,w.gd1x(),u).gJ(0)
if(t!==q.x||s!==q.y||r!==q.z)q.l(new C.e5f(q,t,s,r))}if(A.o.F(q.w,45)===0)q.FT()
if(A.o.F(q.w,10)===0){w=q.f
$.ak0()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.q(0,q.f)&&$.ak0()[q.f].c.$1(q.d)){w.I(0,q.f)
C.JX("bell",B.a([0,4,7,12],x.t),700,0.45)
q.l(new C.e5g())
q.FT()
w=q.c
w.toString
w=B.Kq(w)
if(w!=null)w.T(B.b3(p,p,p,p,p,A.t,p,B.c("\u2705 Challenge done: "+$.ak0()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.mp,p,p,p,p,p,p,p,p,p,p))}},
aj3(){var w=0,v=B.j(x.H),u=this,t
var $async$aj3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.ce(null,null,!0,null,new C.e53(u),t,null,!0,!0,x.H),$async$aj3)
case 2:return B.h(null,v)}})
return B.i($async$aj3,v)},
b2t(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.m(12),t=B.K(f.j(0.45),A.r,1)
u=B.a([B.ao(w,B.p(w,B.V(d,f,w,w,w,18),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ao(w,h,w,w,w,-1,-3,w))
return B.aA(w,B.h9(new B.a5(40,38,new B.an(A.a0,w,A.ad,A.f,u,w),w),w,e,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4)},
b2s(d,e,f,g){return this.b2t(d,e,f,g,null)},
atP(d,e,f,g){var w=null,v=f.j(0.1),u=B.m(10),t=B.K(f.j(0.4),A.r,1)
return B.E(B.aA(w,B.p(w,B.A(B.a([B.V(d,f,w,w,w,15),A.dZ,new B.d2(1,A.ci,B.c(e,w,1,A.a2,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.D,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.l,w,A.bb,A.h,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),1)},
ahn(){var w=0,v=B.j(x.H),u=this,t
var $async$ahn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a7(t,!1).c8(B.e5(new C.e5_(u),!1,null,x.H)),$async$ahn)
case 2:t=u.e.gbm()
if(t!=null)t.bjX()
if(u.c!=null)u.l(new C.e50())
u.FT()
return B.h(null,v)}})
return B.i($async$ahn,v)},
bLm(){var w,v,u,t,s=null,r=this.f
$.ak0()
if(r>=11)return s
w=this.r
v=w.q(0,r)
r=v?A.bj:A.aC
u=B.m(9)
t=B.K(L.CA,A.r,1.5)
return B.p(s,B.at(B.c(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.ya,s,s,s),s,s,s),A.f,s,D.b9k,new B.o(r,s,t,u,s,s,A.m),s,s,s,s,A.fe,s,s,s)},
akc(){var w=0,v=B.j(x.H),u=this,t
var $async$akc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bU(F.n7,null,new C.e5c(u),t,!0,!0,!0,A.kw,!1,!1,x.H),$async$akc)
case 2:return B.h(null,v)}})
return B.i($async$akc,v)},
ceb(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.aA(r,B.p(r,D.c2C,A.f,r,r,new B.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e5i(d),r,r,r,r,r,r,!1,A.a4),o=B.m(11)
o=B.p(r,D.bfj,A.f,r,r,new B.o(A.bt,r,B.K(A.aH.j(0.45),A.r,1),o,r,r,A.m),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.p(r,B.x(B.a([B.A(B.a([p,A.aa,o,A.aa,B.E(B.x(B.a([D.h90,B.c(w,r,1,A.a2,r,r,r,B.l(r,r,s.y>0||s.z>0?A.f1:A.hk,r,r,r,r,r,r,r,r,11.5,r,r,A.N,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.B,r,A.e,A.h,0,A.p),1),new C.aAc(s.gckL(),r),A.un,s.b2s(A.rh,"Construction Lab: real 3D wiring, plumbing and a house",A.cW,new C.e5j(s,d)),s.b2t(A.m2,"Challenges",A.aQ,s.gcCq(),s.bLm()),s.b2s(A.DG,"How to play",A.aH,new C.e5k(d,e))],v),A.l,r,A.e,A.h,0,r,r),A.aj,B.A(B.a([s.atP(A.o6,"Circuits",A.bl,s.gcv6()),A.ba,s.atP(A.oX,"Repair",A.aQ,new C.e5l(s)),A.ba,s.atP(I.xk,"Clear",A.c1,new C.e5m(s))],v),A.l,r,A.e,A.h,0,r,r)],v),A.l,r,A.e,A.O,0,A.p),A.f,r,r,new B.o(L.CA,r,new B.bE(A.a1,A.a1,new B.ax(q,1,A.r,-1),A.a1),r,r,r,A.m),r,r,r,r,D.bLz,r,r,r)},
B(d){var w=this,v=null
$.auz="tech"
return B.c6(v,A.c7,B.bo(!0,B.x(B.a([w.ceb(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.hup(w.d,w.e,w.gce9(),v),1)],x.p),A.l,v,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
C.aAc.prototype={
R(){return new C.bcR(null,null)}}
C.bcR.prototype={
gaAa(){var w,v=this,u=v.d
if(u===$){w=B.br(null,A.Y,null,1,null,v)
w.cX(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
t(){this.gaAa().t()
this.bz3()},
B(d){var w=null,v=this.a.c
return B.aA(w,B.h9(new B.a5(42,42,B.ca(this.gaAa(),new C.cO0(this),w),w),w,"AI Inventor: say what you want to make",w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bcQ.prototype={
a4(d,e){var w,v,u,t=null,s=e.eo(A.J),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.T()
w=B.L()
w.r=A.b_.j(0.25+0.15*o).gp(0)
w.y=O.oT
d.O(s,r+2+o*2,w)
w=B.L()
w.san(D.eKv.az(0,B.bX(s,r)))
d.O(s,r,w)
v=B.L()
v.b=A.ac
v.c=2.2
v.san(new B.hd(A.z,0,6.283185307179586,A.x,D.d65,t,new B.mX(p)).az(0,B.bX(s,r)))
d.O(s,r,v)
p=new C.cO_(d)
p.$3(s.a7(0,A.uc),8+o*1.5,1)
q*=4
p.$3(s.a7(0,D.ezn),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a7(0,D.eBF),2.6,0.5+0.5*Math.cos(q))
u=B.fY(t,A.cK,t,t,t,D.fCf,A.a7,A.cc,t,A.e3,A.cd)
u.eL()
u.a4(d,s.a7(0,new B.r(-u.b.c/2,5)))},
aD(d){return d.b!==this.b}}
C.aAx.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b_(){this.b8()
this.b6()
this.bC()}}
C.aAy.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bxH()}}
C.aMS.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b_(){this.b8()
this.b6()
this.bC()}}
C.bBI.prototype={}
C.h3.prototype={}
C.Kr.prototype={
a9(){return"ScreenStyle."+this.b}}
C.mh.prototype={}
C.WA.prototype={
R(){return new C.aG6(A2.B4,null,null)}}
C.aG6.prototype={
gabl(){var w,v=this,u=v.d
if(u===$){w=B.br(null,A.oR,null,1,null,v)
w.ct(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
gac4(){var w=D.mF.h(0,this.a.c)
return w==null?D.aUm:w},
t(){if(this.f){P.D8(Y.Lo)
P.bH3()}this.gabl().t()
this.bAW()},
gBW(){var w=this.gabl().y
w=w==null?null:A.o.ao(w.a,1000)
return(w==null?0:w)/1000},
Ot(){var w,v=this,u=v.e
if(u==null)return null
w=F.ix[u].e
if(w===-2)return null
if(w===-1)return A.o.F(v.y+A.i.bc(Math.max(0,v.gBW()-v.z)/10),14)
return w},
Kb(d){this.l(new C.e10(this,d))},
b5O(d){this.l(new C.e11(this,d,14))},
aE7(d){var w=this.Ot()
if(w==null)w=d>0?-1:0
return this.b5O(w+d)},
cHv(d,e){if(e.a<=0||e.b<=0||this.Ot()==null)return
this.l(new C.e1b(this,d,e))},
aef(){return this.c6h()},
c6h(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$aef=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r={}
q=t.Ot()
if(q==null){w=1
break}r.a=!1
s=t.c
s.toString
w=3
return B.b(B.bU(A.L,null,new C.e1_(r,q),s,!0,!0,!0,null,!1,!1,x.H),$async$aef)
case 3:if(t.c!=null&&r.a)t.b5O(q)
case 1:return B.h(u,v)}})
return B.i($async$aef,v)},
cJ4(){var w=this,v=!w.f
w.l(new C.e1c(w,v))
if(v){P.D8(Y.aci)
P.hqd(w.gac4().b===D.xW)}else{P.D8(Y.Lo)
P.bH3()}},
cee(){var w,v=this
if(!v.f)return
B.jC()
v.l(new C.e1d(v))
w=v.c.L(x.q).f
w.MG()
if(v.r)w.T(F.aWt)},
aQM(d){return B.cf(new C.e0T(this,d))},
cok(d){var w,v=this,u=null,t=v.gBW(),s=t-v.w,r=s<1.4?new K.b0q(v.x,s):u
if(F.ix[d].e===-1){w=Math.max(0,t-v.z)
return new C.agF(d,w,r,A.o.F(v.y+A.i.bc(w/10),14),u)}return new C.agF(d,t,r,u,u)},
b_q(d){var w=null,v=A.c.j(0.92),u=d*0.42
return B.aG(!1,A.a3,!0,w,B.aM(!1,w,!0,new B.D(new B.R(u,0,u,0),B.A(B.a([B.V(A.kN,A.aw,w,w,w,d*0.6),new B.a5(d*0.18,w,w,w),B.c("Learn more",w,w,w,w,w,w,B.l(w,w,A.aw,w,w,w,w,w,w,w,w,d*0.48,w,w,A.D,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.O,0,w,w),w),A.nt,!0,w,w,w,w,D.hGz,w,w,w,w,w,w,this.gc6g(),w,w,w,w,w,w,w),A.f,v,0,w,w,A.nt,w,w,A.ai)},
b2u(d,e,f,g){var w=null,v=B.nn(w,A.b7,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w)
return B.aI(w,w,w,w,B.V(d,A.c,w,w,w,w),w,w,g,f,w,w,w,v,e,w)},
ced(d,e,f){return this.b2u(d,e,f,null)},
cwp(){var w=this,v=null,u=new C.e19(),t=A.v.j(0.72),s=B.m(22),r=B.K(w.gac4().d.j(0.5),A.r,1),q=u.$3(D.bW_,"AD \u2212",new C.e15(w)),p=u.$3(A.aso,"AD +",new C.e16(w)),o=u.$5$color$on(A.kM,"HOME",new C.e17(w),w.gac4().d,w.e==null),n=w.e
n=n!=null&&F.ix[n].e===-1
return B.p(v,B.A(B.a([q,p,o,u.$5$color$on(A.zV,"ADS",new C.e18(w),A.c5,n)],x.p),A.l,v,A.e,A.O,0,v,v),A.f,v,v,new B.o(t,v,r,s,v,v,A.m),v,v,D.hGF,v,A.HV,v,v,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.gac4(),l=o.f,k=!l||!o.r
l=l?B.aE(d,A.dK,x.w).w.r.b+26:8
w=o.ced(A.cC,"Back to the board",new C.e1e(d))
v=o.f
u=v?Aq.Ir:A.xn
v=v?"Leave full screen":"Full screen"
v=o.b2u(u,v,o.gbcr(),D.hHr)
u=B.m(20)
t=o.e
s=m.a
r=x.p
q=new B.D(new B.R(8,l,8,0),B.A(B.a([w,A.aa,v,A.aa,B.E(new B.bK(A.a9,n,n,B.p(n,B.c(t==null?s:s+" \xb7 "+F.ix[t].a,n,1,A.a2,n,n,n,As.y3,n,n,n),A.f,n,n,new B.o(A.b7,n,n,u,n,n,A.m),n,n,n,n,A.lZ,n,n,n),n),1)],r),A.l,n,A.e,A.h,0,n,n),n)
p=m.b===D.xW?o.bNw(m):o.crN(m)
l=o.f
w=!l
v=l?o.gb2v():n
if(l){l=B.at(p,n,n,n)
u=k?1:0
r=new B.an(A.a0,n,A.b4,A.t,B.a([l,B.ao(n,B.xK(new B.dv(!k,q,n),A.aZ,A.ib,u),n,n,0,0,0,n)],r),n)
l=r}else l=B.x(B.a([q,A.aj,o.cwp(),B.E(new B.D(A.cB,B.at(p,n,n,n),n),1)],r),A.l,n,A.e,A.h,0,A.p)
return B.c6(n,A4.a0a,B.bo(w,B.aA(A.c_,l,A.y,!1,n,v,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,!1,A.a4),w,!1,A.ag,w,w),n,!1,!1,n,n)},
cec(d){var w
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
crN(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.abh
switch(n.a){case 1:w=44
break
case 2:w=30
break
case 3:w=22
break
case 4:w=26
break
default:w=14
break}v=B.ca(p.gabl(),new C.e14(p,w,d,m),o)
if(n===D.abi)v=new B.BR(D.bMd,v,o)
n=p.cec(n)
u=p.f?A.hN:Aw.a1C
t=m?4:5
s=d.c
r=B.ap(s,A.c,m?0.25:0.08)
r.toString
q=B.ap(s,A.v,0.5)
q.toString
q=B.a([r,s,q],x.O)
s=B.m(w)
r=B.a([new B.aa(0,A.H,d.d.j(0.28),A.J,36)],x.V)
return new B.fL(n,B.p(o,B.p(o,v,A.f,o,o,new B.o(A.v,o,o,B.m(w-3),o,o,A.m),o,o,o,o,A7.HW,o,o,o),A.f,o,o,new B.o(o,o,o,s,r,new B.a8(A.ay,A.aD,A.x,q,o,o),A.m),o,o,o,u,new B.R(t,t,t,t),o,o,o),o)},
bb3(d){var w=Date.now(),v=A.o.D(this.a.d+A.i.bc(this.gBW()*0.4),0,100),u=d.b===D.abh,t=u?34:20,s=u?28:18
return new B.D(new B.R(t,12,s,2),B.cf(new C.e1a(new B.W(w,0,!1),v)),null)},
axZ(d,e,f){var w,v=null,u=d.d,t=B.ap(u,A.v,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.m(e*0.26)
w=x.p
t=B.a([B.p(v,B.at(B.c(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.o(v,v,v,u,D.dxH,new B.a8(A.ay,A.aD,A.x,t,v,v),A.m),v,e,v,v,v,v,v,e)],w)
if(f)A.d.u(t,B.a([A.at,B.c(d.a,v,1,A.a2,v,v,v,D.fIY,v,v,v)],w))
return B.aA(v,B.x(t,A.l,v,A.e,A.O,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.e0Y(this,d),v,v,v,v,v,v,!1,A.a4)},
c48(d,e){return this.axZ(d,e,!0)},
c3Q(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=o===D.aUn||o===D.Bi,m=d.d,l=B.ap(m,A.v,0.55)
l.toString
m=B.ap(m,A.k8,0.5)
m.toString
m=B.a([l,A.dD,m],x.O)
l=q.bb3(d)
w=n?190:138
v=B.m(24)
u=B.K(A.aT,A.r,1)
w=B.aA(p,B.p(p,B.by(B.m(23),B.b4(p,p,p,new C.agF(0,q.gBW(),p,p,p),A.hf),A.aq),A.f,p,p,new B.o(p,p,u,v,p,p,A.m),p,w,p,A.ic,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.e0W(q),p,p,p,p,p,p,!1,A.a4)
v=n?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.ix[s]
t.push(new B.cm(A.z,p,p,new B.dc(A.dp,A.z,A.f,q.c48(r,n?58:54),p),p))}l=B.a([l,A.aj,w,A.af,B.E(B.lb(0.92,t,v,8,12,A.x5,p,!1),1)],u)
if(o!==D.abi){o=A.c.j(0.16)
w=B.m(28)
l.push(B.p(p,B.cf(new C.e0X(q)),A.f,p,p,new B.o(o,p,p,w,p,p,A.m),p,p,p,D.bGw,H.apd,p,p,p))}return B.p(p,B.x(l,A.l,p,A.e,A.h,0,A.p),A.f,p,p,new B.o(p,p,p,p,p,new B.a8(A.ay,A.aD,A.x,m,p,p),A.m),p,p,p,p,p,p,p,p)},
bGL(d,e){var w=this,v=null,u=w.Ot(),t=w.bb3(d),s=B.E(w.aQM(e),1),r=x.p,q=B.a([B.bS(0,B.aA(v,B.p(v,B.at(B.c(F.ix[e].a,v,v,v,v,v,v,Ab.Lx,v,v,v),v,v,v),A.f,A.v,v,v,v,v,v,v,v,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.e0Q(w),v,v,v,v,v,v,!1,A.a4),0,0,0)],r)
if(u!=null)u=!w.f||!w.r
else u=!1
if(u)q.push(B.ao(8,w.b_q(22),v,v,v,10,8,v))
return B.p(v,B.x(B.a([t,s,new B.a5(v,38,new B.an(A.a0,v,A.ad,A.t,q,v),v)],r),A.l,v,A.e,A.h,0,A.p),A.f,A.v,v,v,v,v,v,v,v,v,v,v)},
aTP(d,e){return B.ca(this.gabl(),new C.e0V(this,e,d),null)},
bNw(d){var w,v,u,t=this,s=null,r=t.a.c,q=r==="carscreen"
if(t.f)return B.qC(t.aTP(d,q))
r=r==="imac"?26:8
w=d.c
v=B.ap(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.m(q?26:14)
u=B.a([new B.aa(0,A.H,d.d.j(0.25),A.J,36)],x.V)
return new B.fL(1.5384615384615383,B.p(s,B.by(B.m(q?20:8),t.aTP(d,q),A.aq),A.f,s,s,new B.o(s,s,s,v,u,new B.a8(A.ay,A.aD,A.x,w,s,s),A.m),s,s,s,A.ap7,new B.R(8,8,8,r),s,s,s),s)}}
C.bzK.prototype={
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
t=new B.ar(A.T,A.Q,A.W,A.X,A.U)
t.r=v.j(0.1).gp(0)
t.y=D.bMi
d.O(new B.r(r*(0.15+0.2*s+0.05*w),q*(0.3+0.3*u)),q*(0.2+0.04*s),t)}},
aD(d){return!0}}
C.agF.prototype={
a4(d,e){var w=this
return K.Mt(d,e,w.b,w.c,w.e,w.d)},
aD(d){return!0}}
C.aOG.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b_(){this.b8()
this.b6()
this.bC()}}
C.byw.prototype={}
C.aag.prototype={
B(d){var w=null
return B.c6(B.eV(w,w,w,!0,!0,D.ak5,w,1,!0,w,0,!1,w,!1,w,w,B.aI(w,w,w,w,I.atW,w,w,w,new C.cpl(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.hi3,w,w,w,1,w,!0),D.ak5,B.cn(B.a([D.eD7,B.cf(new C.cpm())],x.p),w,w,D.bHC,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.Ye.prototype={
R(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aHO(w,new B.au(A.ax,$.az()),$,A.bH,0,B.a([],x.X),null,null)}}
C.aHO.prototype={
a_(){this.a3()
this.mn()},
b8U(d){var w=this.d.length
return A.o.F(A.i.bc(A.i.F(A.i.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
mE(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b8U(v.f)
if(w!==v.x){v.x=w
E.mG("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.l(new C.f19(v))
C.JX("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
cg3(){if(this.d.length<2)return
this.l(new C.f15(this))},
b36(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.l(new C.f14(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gcg2(),p=s.d,o=B.E(B.aA(r,B.b4(r,r,r,new C.bzW(p,s.f,r),A.hf),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.x(B.a([o,new B.a5(r,40,B.at(B.c(n,r,r,r,r,r,r,D.fR7,r,r,r),r,r,r),r)],w),A.l,r,A.e,A.h,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.aDP[A.o.F(v,8)].j(0.9)
t=new B.aP(20,20)
o.push(B.aA(r,B.p(r,B.c(p[v],r,r,r,r,r,r,D.fQj,r,r,r),A.f,r,r,new B.o(u,r,r,new B.bb(t,t,t,t),r,r,A.m),r,r,r,A.f7,A.hc,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.f17(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a4))}p=A.c.j(0.07)
return E.lW(A.aQ,A.ff,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.x(B.a([new E.fi(o,r,r),B.A(B.a([B.E(B.aN(r,A.Z,!1,r,!0,A.t,r,B.aO(),s.e,r,r,r,r,r,2,B.bC(r,new B.b6(4,B.m(14),A.a1),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kz,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.al,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.f18(s),r,!1,r,r,!1,r,!0,r,A.ae,r,r,r,r,r,r,r,r,r,r,r,A.ds,!0,A.a7,r,A.ao,r,r,r,r),1),A.aa,new E.fI(A.id,"Add",s.gcg0(s),A.c,r),A.ba,new E.fI(A.o4,"Spin",q,A.bf,r)],w),A.l,r,A.e,A.h,0,r,r)],w),A.l,r,A.e,A.O,0,A.p))}}
C.bzW.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=k/2,i=e.b,h=i/2+10,g=new B.r(j,h),f=Math.min(k,i)/2-24
i=f+8
k=$.T()
w=B.L()
w.r=D.blI.gp(0)
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
o=new B.ar(A.T,A.Q,A.W,A.X,A.U)
o.r=D.aDP[A.o.F(r,8)].gp(0)
d.cQ(p,q,u,!0,o)
o=B.bX(g,f)
p=new B.ar(A.T,A.Q,A.W,A.X,A.U)
p.b=A.ac
p.c=2
p.r=A.c.j(0.6).gp(0)
d.cQ(o,q,u,!0,p)
J.bs(i.save())
i.translate(j,h)
i.rotate((q+s)*180/3.141592653589793,0,0)
p=w[r]
if(p.length>12)p=A.a.aw(p,0,11)+"\u2026"
n=new B.j1(new B.eG(p,l,l,A.cY,l,l,l,l,l,l,D.fD3),A.a7,A.cc,new B.kg(1),l,l,l,l,A.cd,l,A.cK)
n.eL()
p=n.b
o=p.c
p=p.a.c
n.a4(d,new B.r(f-o-16,-p.gb4(p)/2))
i.restore()}i=B.L()
i.r=D.ajI.gp(0)
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
h.r=A.b7.gp(0)
d.af(m,h)},
aD(d){return!0}}
C.WZ.prototype={
R(){return new C.bnN($,A.bH,0,B.a([],x.X),null,null)}}
C.bnN.prototype={
a_(){this.a3()
this.mn()},
mE(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.JX("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.Vg(900,new C.e8N())}w.l(new C.e8O())},
b38(d){return this.l(new C.e8I(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aZ(A.o.v(A.i.ao(m,60)),2,"0")
v=A.a.aZ(A.o.v(A.o.F(A.i.cF(m),60)),2,"0")
m=B.b4(n,n,n,new C.buz(l,A.c1,n),A.aVS)
u=B.c(w+":"+v,n,n,n,n,n,n,D.fHS,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.at(new B.a5(280,280,new B.an(A.z,n,A.ad,A.t,B.a([m,B.x(B.a([u,B.c(t,n,n,n,n,n,n,D.fGN,n,n,n),A.at,B.c("Sessions done: "+o.r,n,n,n,n,n,n,A.wd,n,n,n)],s),A.l,n,A.e,A.O,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.dul[r]
u.push(new E.e1(""+q+" min",o.d===q,new C.e8K(o,q),n,A.c1,n))}m=o.f
p=m?Ad.vy:A.fO
m=m?"Pause":"Start"
return E.lW(A.c1,A.ff,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.x(B.a([new E.fi(u,n,n),new E.fi(B.a([new E.fI(p,m,new C.e8L(o),A.bf,n),new E.fI(A.nk,"Reset",new C.e8M(o),A.c,n)],s),n,n)],s),A.l,n,A.e,A.O,0,A.p))}}
C.buz.prototype={
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
v.san(new B.hd(A.z,-1.5707963267948966,4.71238898038469,A.x,B.a([u,t,u],x.O),null,null).az(0,B.bX(s,r)))
d.cQ(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aD(d){return d.b!==this.b}}
C.W9.prototype={
R(){return new C.bnm($,A.bH,0,B.a([],x.X),null,null)}}
C.bnm.prototype={
a_(){this.a3()
this.mn()},
mE(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.Un.h(0,p.d)
w.toString
v=A.d.eH(w,new C.dTk())
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
E.mG("flute",D.cfk[t]+5,1400,0.35)}p.l(new C.dTl())},
gcg6(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.Lh("Press Start",0.5)
w=D.Un.h(0,this.d)
w.toString
v=A.d.eH(w,new C.dTf())
u=A.i.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.Lh("Breathe in",0.5+0.5*A.dQ.aA(0,p))
case 1:return new B.Lh("Hold",1)
case 2:return new B.Lh("Breathe out",1-0.5*A.dQ.aA(0,p))
default:return new B.Lh("Hold",0.5)}}}return new B.Lh("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gcg6(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.fY.j(0.12+(3-u)*0.05)
n.push(B.p(q,q,A.f,q,q,new B.o(s,q,q,q,u===0?B.a([new B.aa(0,A.H,A.fY.j(0.35),A.J,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(B.c(p.a,q,q,q,q,q,q,A.qr,q,q,q))
n.push(B.ao(0,B.c("Breaths: "+r.w,q,q,q,q,q,q,A.kz,q,q,q),q,q,q,q,q,q))
n=B.at(new B.a5(300,340,new B.an(A.z,q,A.ad,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aQ(D.Un.geA(D.Un));w.C();){v=w.gP(w)
o.push(new E.e1(v,r.d===v,new C.dTi(r,v),q,A.fY,q))}w=r.e
v=w?A.vC:A.fO
w=w?"Stop":"Start"
o.push(new E.fI(v,w,new C.dTj(r),A.bf,q))
return E.lW(A.fY,A.ff,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new E.fi(o,q,q))}}
C.aLg.prototype={}
C.WQ.prototype={
R(){return new C.bnE(new B.cA(null,x.A),B.a([],x.au),A.aw,A.c)}}
C.bnE.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aI(s,s,s,s,I.p5,s,s,s,new C.e4z(t,d),s,s,s,s,"Share",s)],r),p=B.by(B.m(18),new B.e7(B.aA(s,B.b4(s,s,s,new C.bpH(t.e,t.x,s),A.hf),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e4A(t),new C.e4B(t),s,s,s,s,s,s,s,s,s,new C.e4C(t),s,s,s,s,!1,A.a4),t.d),A.aq),o=B.a([],r)
for(w=0;w<9;++w){v=D.d7O[w]
u=!t.w&&t.f.A(0,v)
o.push(new E.Gn(v,u,new C.e4D(t,v),!1,s))}u=t.r
return E.lW(A.bB,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.D(A.bR,p,s),"DRAW PAD",B.x(B.a([new E.fi(o,s,s),E.j8(A.bB,""+A.i.S(u),"Brush",30,2,new C.e4E(t),u),new E.fi(B.a([new E.e1("Eraser",t.w,new C.e4F(t),A.zW,A.bB,s),new E.fI(A.q0,"Undo",new C.e4G(t),A.c,s),new E.fI(A.eq,"Clear",new C.e4H(t),A.c,s),new E.fI(A.QB,"Paper",new C.e4I(t),A.c,s)],r),s,s)],r),A.l,s,A.e,A.O,0,A.p))}}
C.bpH.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k
$.T()
w=B.L()
w.r=this.c.gp(0)
d.aE(new B.a4(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=x.v,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=$.T()
q=new B.ar(A.T,A.Q,A.W,A.X,A.U)
p=s.a
q.r=p.gp(p)
o=s.b
q.c=o
q.d=A.bG
q.e=A.dP
q.b=A.ac
n=s.c
if(n.length===1){r=A.d.gG(n)
n=new B.ar(A.T,A.Q,A.W,A.X,A.U)
n.r=p.gp(p)
d.O(r,o/2,n)}else{p=B.a([],u)
m=new B.aH(r.r,A.ak,null,null,p)
p.push(new B.aZ(A.d.gG(n).a,A.d.gG(n).b))
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
C.XB.prototype={
R(){var w=x.S
return new C.aH4(B.aR(w),B.aR(w))}}
C.aH4.prototype={
a_(){this.a3()
this.avl()},
avl(){var w,v,u=this,t=x.N,s=B.bt(D.dzY,!0,t)
A.d.DP(s)
w=x.S
v=B.U(s).c
t=B.B(B.cU(s,0,B.dy(u.d,"count",w),v),t)
A.d.u(t,B.cU(s,0,B.dy(u.d,"count",w),v))
A.d.DP(t)
u.e=t
u.f.a6(0)
u.r.a6(0)
u.w=0
u.x=!1},
cg1(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
E.mG("bell",12+A.o.F(d,9),150,0.35)
s.l(new C.ewq(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gG(0)
u=w.gal(0)
w=s.e
w===$&&B.d()
t=x.H
if(w[v]===w[u])B.bM(A.nb,new C.ewr(s,v,u),t)
else{s.x=!0
B.bM(Ak.CZ,new C.ews(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.d()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.c("Moves: "+r.w,q,q,q,q,q,q,A.WW,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.ao(p,2)+" / "+o
o=x.p
p=B.x(B.a([new B.D(A.zr,B.A(B.a([u,B.c(p,q,q,q,q,q,q,B.l(q,q,w?A.aQ:A.ab,q,q,q,q,q,q,q,q,q,q,q,A.D,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.l,q,A.iA,A.h,0,q,q),q),B.E(B.iK(!0,q,q,A.y,new B.hW(v,8,8,1,q),new C.eww(r),r.e.length,A.bg,q,A.ah,!1),1)],o),A.l,q,A.e,A.h,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.d9z[t]
o.push(new E.e1(s.b,r.d===s.a,new C.ewx(r,s),q,A.aH,q))}o.push(new E.fI(I.asn,"New game",new C.ewy(r),A.bf,q))
return E.lW(A.aH,A.ff,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new E.fi(o,q,q))}}
C.XM.prototype={
R(){return new C.aHr(B.a([],x.t))}}
C.aHr.prototype={
cg5(d){A.d.a6(this.d)
this.w=!0
this.b37()},
b37(){this.d.push(A.cV.av(4))
this.e=0
this.a0H()},
a0H(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0H=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.l(new C.eJi(t))
s=x.H
w=3
return B.b(B.bM(A.lY,null,s),$async$a0H)
case 3:r=t.d,q=B.bt(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aWN(n)
w=7
return B.b(B.bM(new B.bh(1000*Math.max(280,600-r.length*18)),null,s),$async$a0H)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.l(new C.eJj(t))
case 1:return B.h(u,v)}})
return B.i($async$a0H,v)},
aWN(d){this.l(new C.eJg(this,d))
E.mG("marimba",D.cfj[d]+5,450,0.55)
B.bM(A.Hw,new C.eJh(this),x.H)},
cg7(d){var w,v,u=this
if(!u.w||u.r)return
u.aWN(d)
w=u.d
v=u.e
if(w[v]!==d){G.dG(90,"",600,0,0.5,"saw")
u.l(new C.eJk(u))
return}++v
u.e=v
if(v===w.length){u.l(new C.eJl(u))
B.bM(A.hx,new C.eJm(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.c("Best: "+q.x,p,p,p,p,p,p,W.aYv,p,p,p),n=B.c(q.y,p,p,p,p,p,p,D.fRy,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aCG[v]
u=u.j(q.f===v?1:0.35)
t=new B.aP(28,28)
s=q.f===v?B.a([new B.aa(0,A.H,D.aCG[v].j(0.8),A.J,30)],w):p
r=new B.ax(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.aA(p,B.cV(p,p,p,p,A.aZ,new B.o(u,p,new B.bE(r,r,r,r),new B.bb(t,t,t,t),s,p,A.m),A.jA,p,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eJn(q,v),p,p,p,p,p,p,!1,A.a4))}o=B.at(new B.D(A.ae,B.x(B.a([o,A.aj,n,A.di,new B.fL(1,B.lb(1,l,2,12,12,p,A.e8,!1),p)],m),A.l,p,A.bb,A.h,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return E.lW(A.bu,A.ff,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new E.fi(B.a([new E.fI(A.fO,n,q.gcg4(q),A.bf,p)],m),p,p))}}
C.Y5.prototype={
R(){return new C.boV(new B.au(A.ax,$.az()))}}
C.boV.prototype={
ayV(d){return B.o5(A.i.a5(d,2),B.ag("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eXv(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.cz(B.aL(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eXE()
l=B.aN(m,A.Z,!1,m,!0,A.t,m,B.aO(),l,m,m,m,m,m,2,B.bC(m,m,m,m,m,m,m,m,!0,new B.b6(4,B.m(16),Af.yA),m,m,m,m,m,m,m,m,m,m,m,new B.b6(4,B.m(16),D.b7N),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.ma,"Bill amount",!0,!0,!1,m,m,m,m,D.fOM,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.al,m,m,m,m,m,A.eh,m,m,m,1,m,m,!1,"\u2022",m,new C.eXA(n),m,m,m,!1,m,m,!1,m,!0,m,A.ae,m,m,m,m,m,m,m,m,m,m,m,A.aXt,!0,A.a7,m,A.ao,m,m,m,m)
k=A.bf.j(0.1)
s=B.m(20)
r=B.K(A.bf.j(0.35),A.r,1)
q=x.p
s=B.cn(B.a([l,A.by,B.p(m,B.x(B.a([t.$2("Tip ("+A.i.S(n.e)+"%)","$"+n.ayV(w)),t.$2("Total","$"+n.ayV(v)),Ac.OQ,t.$3$big("Each of "+n.f+" pays","$"+n.ayV(u),!0)],q),A.l,m,A.e,A.h,0,A.p),A.f,m,m,new B.o(k,m,r,s,m,m,A.m),m,m,m,m,A.bS,m,m,m)],q),m,m,A.f9,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cU5[p]
r.push(new E.e1(""+o+"%",A.i.S(n.e)===o,new C.eXB(n,o),m,A.bf,m))}l=n.f
return E.lW(A.bf,A.ff,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.x(B.a([new E.fi(r,"TIP",m),E.j8(A.aH,""+l,"People",20,1,new C.eXC(n),l),new E.fi(B.a([new E.e1("Round up",n.r,new C.eXD(n),m,A.aQ,m)],q),m,m)],q),A.l,m,A.e,A.O,0,A.p))}}
C.XA.prototype={
R(){var w=B.a([3,5],x.t)
return new C.bop(w,A.cV,$,A.bH,0,B.a([],x.X),null,null)}}
C.bop.prototype={
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
E.Y7("snare",0,0.5)}u.l(new C.ev5())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.h9()
u.w=t
u.x=t?0:3.141592653589793
E.mG("bell",24,400,0.5)}u.l(new C.ev6())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bha(v,o.r>0,n))}u=B.aA(n,B.at(B.bZ(A.fV,m,A.br,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.euZ(o),n,n,n,n,n,n,!1,A.a4)}else if(m==="coin"){t=A.i.D(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.K(A.de,A.r,6)
s=B.a([new B.aa(0,A.H,A.aQ.j(0.4),A.J,30)],x.V)
u=B.aA(n,B.at(B.ea(A.z,B.p(A.z,B.c(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fNV,n,n,n),A.f,n,n,new B.o(n,n,v,n,s,D.eKz,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ev_(o),n,n,n,n,n,n,!1,A.a4)}else{m=o.as
u=B.aA(n,B.at(B.x(B.a([B.c(m===0?"?":""+m,n,n,n,n,n,n,D.fCx,n,n,n),B.c("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kz,n,n,n)],x.p),A.l,n,A.e,A.O,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ev0(o),n,n,n,n,n,n,!1,A.a4)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.drp[r]
v.push(new E.e1(q.b,o.d===q.a,new C.ev1(o,q),q.c,A.bl,n))}v=B.a([new E.fi(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(E.j8(A.bl,""+s,"Dice",4,1,new C.ev2(o),s))}if(o.d==="num"){s=o.z
s=E.j8(A.bl,""+s,"From",100,1,new C.ev3(o),s)
p=o.Q
A.d.u(v,B.a([s,E.j8(A.bl,""+p,"To",1000,2,new C.ev4(o),p)],m))}return E.lW(A.bl,A.ff,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.x(v,A.l,n,A.e,A.O,0,A.p))}}
C.bha.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cV.ai()-0.5)*0.6
else w=0
v=B.m(22)
u=B.a([new B.aa(0,A.H,A.v.j(0.4),A.cz,14)],x.V)
t=B.a([],x.p)
for(s=D.dMW.h(0,A.o.D(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bK(s[q],p,p,B.p(p,p,A.f,p,p,A.Z0,p,18,p,p,p,p,p,18),p))
return B.eP(A.z,w,B.p(p,new B.an(A.a0,p,A.ad,A.t,t,p),A.f,p,p,new B.o(A.c,p,p,v,u,p,A.m),p,100,p,p,A.bF,p,p,100),p)}}
C.aOs.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b_(){this.b8()
this.b6()
this.bC()}}
C.bBE.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bAI()}}
C.aON.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b_(){this.b8()
this.b6()
this.bC()}}
C.bBK.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bB3()}}
C.aPd.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b_(){this.b8()
this.b6()
this.bC()}}
C.bBT.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bBv()}}
C.aPF.prototype={
t(){var w=this,v=w.ab$
if(v!=null)v.a8(0,w.gbB())
w.ab$=null
w.a2()},
b_(){this.b8()
this.b6()
this.bC()}}
C.bC1.prototype={
t(){var w,v,u
for(w=this.hf$,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)w[u].a1(0)
w=this.he$
w===$&&B.d()
w.t()
this.bBX()}}
var z=a.updateTypes(["P(u8)","~()","P(a6i)","ay<~>()","P(Dm)","G(u8,G)","H(H,u8)","P(Di)","P(a0b)","P(ado)","P(a5a)","P(nZ)","Y6()","W8()","aag()","XG()","XV()","XH()","P(n9)","Wf()","agY(Z,G)","afN(Z,G)","~(a9<@,@>)","G(Di,Di)","n(er)","P(agM)","P(a2q)","P(Dx)","P(adU)","P(afR)","P(adC)","G(G,rq)","G(G,Dm)","n(rq)","~(rq,ai<n>,G)","rq?(Dm)","XA()","w(n,a2d)","P(acg)","~(Bh)","Y9()","~(xS,n,r,u,H)","~(n,u8)","WR()","Xk(Z)","OB(Z)","WA(Z,bz<H>,bz<H>)","J9(Z)","Ye()","WZ()","W9()","WQ()","XB()","XM()","Y5()","P(rq)"])
C.fSM.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+18}
C.fHg.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gG(d.e.split(". "))+"."},
$S:z+24}
C.fP6.prototype={
$1(d){var w
if(!this.a.MS(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fP7.prototype={
$1(d){return d.x},
$S:z+0}
C.fSJ.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fSK.prototype={
$1(d){var w
if(!this.a.MS(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fSL.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.eo7.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eo8.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.y(this.b,this.c))},
$S:0}
C.eo9.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd3(v).Q
v.toString
w.m7(v,A.eb,A.ib)}},
$S:7}
C.eok.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a6(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.eol.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.eog.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.eoe.prototype={
$2(d,e){var w=this.a
w.r.push(B.cB(B.du(0,0,0,d,0,0),new C.eof(w,this.b,e)))},
$S:1946}
C.eof.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.eoh.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gXD().amf(0,u[1],u[2],u[3])
u[4].bP(0,new C.eoc(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
G.dG(700+w.e*120,"",80,0,0.25,"square")
v.l(new C.eod(w.a,v,w.f,w.r))},
$S:0}
C.eoc.prototype={
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
C.eod.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.i.bc(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.eoi.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gXD().an3(t,u[1],s,u[3])
G.dG(1500,"",45,0,0.25,"tri")
v=w.b
v.l(new C.eob(w.a,v,w.e,w.f))},
$S:0}
C.eob.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.D(A.i.bc(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.eoj.prototype={
$0(){G.dG(300,"",360,-1.2,0.3,"square")
var w=this.a
w.l(new C.eoa(w,this.b))},
$S:0}
C.eoa.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.eoo.prototype={
$0(){var w=this.a
return w.l(new C.eon(w))},
$S:0}
C.eon.prototype={
$0(){return this.a.at=!0},
$S:0}
C.eop.prototype={
$0(){var w=this.a
return w.l(new C.eom(w))},
$S:0}
C.eom.prototype={
$0(){return this.a.at=!1},
$S:0}
C.eoq.prototype={
$0(){var w=this.a
w.f.sb1(0,this.b)
w.Qq()},
$S:0}
C.eor.prototype={
$0(){return this.a.ZJ(this.b)},
$S:0}
C.eos.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.Qq():w.aZL()},
$S:2}
C.eot.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.Qq():w.aZL()},
$S:0}
C.eDw.prototype={
$2(d,e){return d+e},
$S:1947}
C.eDQ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.eDP(w,d))},
$S:1948}
C.eDP.prototype={
$0(){var w=B.aJ(J.t(this.b,"unlocked"))
w=w==null?null:A.i.M(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.eDR.prototype={
$0(){},
$S:0}
C.eDS.prototype={
$0(){},
$S:0}
C.eDy.prototype={
$0(){return this.a.l(new C.eDx(this.b,this.c))},
$S:0}
C.eDx.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eDn.prototype={
$1(d){return this.a.cx===d},
$S:31}
C.eDo.prototype={
$1(d){return this.a.cx=d},
$S:28}
C.eDp.prototype={
$1(d){return this.a.cy===d},
$S:31}
C.eDq.prototype={
$1(d){return this.a.cy=d},
$S:28}
C.eDr.prototype={
$1(d){return this.a.db===d},
$S:31}
C.eDs.prototype={
$1(d){return this.a.db=d},
$S:28}
C.eDt.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:31}
C.eDu.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.X(0,d):w.I(0,d)},
$S:28}
C.eDv.prototype={
$0(){var w=this.a
return w.l(w.gazv())},
$S:0}
C.eDl.prototype={
$1(d){return this.a.$1(!0)},
$S:72}
C.eDm.prototype={
$1(d){return this.a.$1(!1)},
$S:114}
C.eDk.prototype={
$1(d){return this.a.$1(!1)},
$S:147}
C.eDJ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.ch=n
n=B.b4(p,p,p,new C.bl5(o,p),n)
w=this.b
v=C.bEi("WORLD",w.a,w.c)
u=C.bEi("GRAVITY",B.v(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.i.S(t*100)
t=t<0.25?A.c1:A.bf
t=C.bEi("FUEL",""+s+"%",t)
s=o.r.b
r=A.i.S(s*100)
s=s>D.Ei[o.db].d?A.c1:A.c
q=x.p
s=B.a([v,u,t,C.bEi("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(C.bEi("HEIGHT",""+A.i.S(A.i.D(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ao(p,B.A(s,A.l,p,A.iA,A.h,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bJR(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.tY[w].a+".":"You landed on every world!"
v=B.a([new E.fI(A.o8,"Again",new C.eDE(o),A.c,p),new E.fI(A.oX,"Rebuild",new C.eDF(o),A.aQ,p)],q)
if(o.d+1<7)v.push(new E.fI(A.jE,"Next world",new C.eDG(o),A.bf,p))
n.push(C.hJS("Perfect landing!",w,A.bf,v))}if(o.as==="crashed")n.push(C.hJS("Crash!",o.at,A.c1,B.a([new E.fI(A.o8,"Try again",new C.eDH(o),A.bf,p),new E.fI(A.oX,"Rebuild",new C.eDI(o),A.aQ,p)],q)))
return new B.an(A.a0,p,A.b4,A.t,n,p)},
$S:65}
C.eDE.prototype={
$0(){var w=this.a
return w.l(w.gazv())},
$S:0}
C.eDF.prototype={
$0(){var w=this.a
return w.l(new C.eDB(w))},
$S:0}
C.eDB.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eDG.prototype={
$0(){var w=this.a
return w.l(new C.eDA(w))},
$S:0}
C.eDA.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.eDH.prototype={
$0(){var w=this.a
return w.l(w.gazv())},
$S:0}
C.eDI.prototype={
$0(){var w=this.a
return w.l(new C.eDz(w))},
$S:0}
C.eDz.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.eDK.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.l(new C.eDD(v,w))},
$S:0}
C.eDD.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.eDL.prototype={
$1(d){return this.a.y=d},
$S:9}
C.eDM.prototype={
$1(d){return this.a.Q=d},
$S:9}
C.eDN.prototype={
$1(d){return this.a.z=d},
$S:9}
C.eDO.prototype={
$0(){var w=this.a
return w.l(new C.eDC(w))},
$S:0}
C.eDC.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dTd.prototype={
$0(){var w=0,v=B.j(x.k),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hb(B.a([C.hEG(),C.hEH()],x.D),x.K),$async$$0)
case 3:r=e
q=t.a
if(q.c==null){w=1
break}s=q.as
s.toString
s.kU(0,B.cT(J.t(r,1)))
q.l(new C.dTc(q,r))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:39}
C.dTc.prototype={
$0(){return this.a.d=x.m.a(J.t(this.b,0))},
$S:0}
C.dSO.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dSP.prototype={
$0(){return this.a.c0U(B.aV(J.t(this.b,"group")))},
$S:0}
C.dSQ.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.dSR.prototype={
$1(d){return A.a.aZ(A.o.fw(A.o.D(A.i.S(d*255),0,255),16),2,"0")},
$S:301}
C.dTe.prototype={
$0(){return E.Y7("kick",0,0.25)},
$S:0}
C.dSS.prototype={
$0(){return this.a.cy=this.b},
$S:0}
C.dST.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dSU.prototype={
$0(){return E.Y7("kick",0,0.5)},
$S:0}
C.dSV.prototype={
$0(){return G.dG(1300+this.a.RG.av(900),"",40,0,0.2,"square")},
$S:0}
C.dSX.prototype={
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
u=w}if(u.cy!=null&&!A.d.aR(u.d.e,new C.dSW(u)))u.cy=null
u.id=0},
$S:0}
C.dSW.prototype={
$1(d){var w=this.a
return d.a===w.cy&&w.aBs(d)},
$S:z+10}
C.dSL.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p4
w=u.a
v=u.c
w.R8=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p3.toLowerCase()+"."},
$S:0}
C.dSM.prototype={
$0(){var w=this.a
return w.l(w.gcbP())},
$S:0}
C.dSN.prototype={
$0(){return this.a.afE(null)},
$S:0}
C.dT3.prototype={
$0(){var w=this.a.as
return w==null?null:w.fc(0,B.J(["t","shot"],x.N,x.z))},
$S:0}
C.dT4.prototype={
$0(){return this.a.cJc(this.b.a)},
$S:0}
C.dT5.prototype={
$0(){return this.a.afE(this.b)},
$S:0}
C.dT6.prototype={
$1(d){var w=this.a
return w.l(new C.dT2(w,d))},
$S:6}
C.dT2.prototype={
$0(){return this.a.k4=this.b},
$S:0}
C.dT7.prototype={
$0(){var w=this.a
return w.l(new C.dT1(w,this.b))},
$S:0}
C.dT1.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dT8.prototype={
$0(){var w=this.a
return w.l(new C.dT0(w))},
$S:0}
C.dT0.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.dT9.prototype={
$0(){var w=this.a
return w.l(new C.dT_(w))},
$S:0}
C.dT_.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.fc(0,B.J(["t","reset"],x.N,x.z))
w.cy=null
w.db=0.5
w.dx=0.05
w.fr=1
w.fy=D.MQ},
$S:0}
C.dTa.prototype={
$0(){var w=this.a
return w.l(new C.dSZ(w))},
$S:0}
C.dSZ.prototype={
$0(){var w=this.a,v=!w.p2
w.p2=v
w.p4=0
w.cy=null
if(v)w.b1B()
else w.p3=null},
$S:0}
C.dTb.prototype={
$0(){var w=this.a
return w.l(new C.dSY(w))},
$S:0}
C.dSY.prototype={
$0(){var w=this.a
return w.ok=!w.ok},
$S:0}
C.c8W.prototype={
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
C.c8X.prototype={
$1(d){var w=new B.qI([],[]).o7(d.data,!0)
if(x.f.b(w)&&J.t(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:533}
C.fAi.prototype={
$1(d){var w=J.a2(d)
return w.h(d,0)&&w.h(d,1)},
$S:223}
C.fAj.prototype={
$1(d){var w=J.a2(d)
return w.h(d,0)||w.h(d,1)},
$S:223}
C.fAk.prototype={
$1(d){var w=J.a2(d)
return w.h(d,0)!==w.h(d,1)},
$S:223}
C.fAr.prototype={
$1(d){return!J.t(d,0)},
$S:223}
C.fAs.prototype={
$1(d){var w=J.a2(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:223}
C.fAt.prototype={
$1(d){var w=J.a2(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:223}
C.dUU.prototype={
$1(d){return this.a.aw9(0)},
$S:7}
C.dUy.prototype={
$0(){var w=this.b
return this.a.cx=new B.O(w,B.isP(),B.U(w).k("O<1,G>")).fD(0)},
$S:0}
C.dUB.prototype={
$1(d){return""+d},
$S:79}
C.dUV.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dUw.prototype={
$1(d){return this.a.aw9(this.b)},
$S:7}
C.dUx.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.aA1(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mU(0,d,a1.mo(0.15,0.3))
u=a1.mU(0,d,a1.mo(0.15,0.62))
t=a1.mU(0,"and",a1.mo(0.48,0.46))
s=a1.mU(0,a0,a1.mo(0.82,0.46))
a1=t.a
w.push(new C.nZ(v.a,a1,0))
w.push(new C.nZ(u.a,a1,1))
w.push(new C.nZ(a1,s.a,0))
break
case 1:v=a1.mU(0,d,a1.mo(0.12,0.25))
u=a1.mU(0,d,a1.mo(0.12,0.65))
r=a1.mU(0,"xor",a1.mo(0.46,0.25))
q=a1.mU(0,"and",a1.mo(0.46,0.65))
p=a1.aA0(0,a0,a1.mo(0.82,0.25),0)
o=a1.aA0(0,a0,a1.mo(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.nZ(a1,n,0))
m=u.a
w.push(new C.nZ(m,n,1))
l=q.a
w.push(new C.nZ(a1,l,0))
w.push(new C.nZ(m,l,1))
w.push(new C.nZ(n,p.a,0))
w.push(new C.nZ(l,o.a,0))
break
case 2:k=a1.mU(0,"clock",a1.mo(0.15,0.4))
j=a1.mU(0,"not",a1.mo(0.45,0.65))
s=a1.mU(0,a0,a1.mo(0.82,0.3))
i=a1.mU(0,"buzzer",a1.mo(0.82,0.65))
a1=k.a
w.push(new C.nZ(a1,s.a,0))
n=j.a
w.push(new C.nZ(a1,n,0))
w.push(new C.nZ(n,i.a,0))
break
default:h=a1.mU(0,d,a1.mo(0.12,0.25))
g=a1.mU(0,d,a1.mo(0.12,0.7))
f=a1.mU(0,"nor",a1.mo(0.5,0.25))
e=a1.mU(0,"nor",a1.mo(0.5,0.7))
s=a1.mU(0,a0,a1.mo(0.86,0.25))
a1=f.a
w.push(new C.nZ(g.a,a1,0))
n=e.a
w.push(new C.nZ(n,a1,1))
w.push(new C.nZ(h.a,n,0))
w.push(new C.nZ(a1,n,1))
w.push(new C.nZ(a1,s.a,0))}},
$S:0}
C.dUC.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.aA1(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.Di(p,"switch",new B.r(0.14*q.a,r*q.b),0))}o.mU(0,w.e,o.mo(0.86,0.5))},
$S:0}
C.dUr.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dUs.prototype={
$2(d,e){return A.i.aQ(d.c.b,e.c.b)},
$S:z+23}
C.dUt.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dUu.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dUv.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.aeY(this.c)
if(v.ax)C.JX("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gG(w)
v.CW=!1
if(v.ax)G.dG(140,"",250,0,0.3,"square")}},
$S:0}
C.dUD.prototype={
$0(){},
$S:0}
C.dUE.prototype={
$0(){return A.d.cJ(this.a.e,this.b)},
$S:0}
C.dUF.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dUA.prototype={
$0(){var w=this.a,v=this.b
w.d.X(0,v)
A.d.br(w.e,new C.dUz(v))
w.cy=null},
$S:0}
C.dUz.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
C.dUq.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mU(0,this.b,new B.r(w.x.a*(0.3+v.ai()*0.4),w.x.b*(0.2+v.ai()*0.6))).a},
$S:0}
C.dUO.prototype={
$0(){var w=this.a
return w.l(new C.dUN(w))},
$S:0}
C.dUN.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dUP.prototype={
$2(d,e){var w=null,v=this.a,u=new B.av(e.b,e.d)
v.x=u
return B.aA(A.c_,B.jr(B.b4(w,w,w,new C.bf2(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dUI(v),w,w,w,new C.dUJ(v),new C.dUK(v),new C.dUL(v),w,w,w,w,w,w,w,w,w,w,new C.dUM(v),w,w,w,!1,A.a4)},
$S:36}
C.dUM.prototype={
$1(d){return this.a.cdD(d.b)},
$S:56}
C.dUK.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cn0(u)
if(t!=null){v.as=t
v.at=u
return}w=v.aAY(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aI(0,u)}},
$S:51}
C.dUL.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.r(A.i.D(w.a+u.Q.a,46,u.x.a-46),A.i.D(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:19}
C.dUJ.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c4p(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.br(v,new C.dUG(w))
u=t.as
u.toString
v.push(new C.nZ(u,w.a,w.b))
B.k7()}}t.z=t.as=null},
$S:38}
C.dUG.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
C.dUI.prototype={
$1(d){return this.a.ayO(d.b)},
$S:307}
C.dUQ.prototype={
$0(){return this.a.bFA(this.b.a)},
$S:0}
C.dUR.prototype={
$0(){return this.a.aw9(this.b.a)},
$S:0}
C.dUS.prototype={
$0(){var w=this.a
return w.l(new C.dUH(w))},
$S:0}
C.dUH.prototype={
$0(){var w=this.a
w.aA1(0)
w.ay=null},
$S:0}
C.dUT.prototype={
$0(){return this.a.cEL(this.b)},
$S:0}
C.cYV.prototype={
$0(){var w=this,v=null,u=B.fY(v,A.cK,v,v,v,B.cW(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a7,A.cc,v,A.e3,A.cd)
u.eL()
return u},
$S:269}
C.e03.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.e02.prototype={
$0(){return this.a.d=null},
$S:0}
C.e05.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c6m()},
$S:130}
C.e04.prototype={
$0(){return B.a7(this.a,!1).hY()},
$S:0}
C.fAJ.prototype={
$0(){return I.aNs},
$S:z+40}
C.fAK.prototype={
$0(){return D.e_7},
$S:z+43}
C.fAL.prototype={
$0(){return D.dWZ},
$S:z+13}
C.fAM.prototype={
$0(){return D.eqS},
$S:z+14}
C.fAN.prototype={
$0(){return D.e8L},
$S:z+15}
C.fAO.prototype={
$0(){return I.aNj},
$S:z+16}
C.fAP.prototype={
$0(){return D.eoE},
$S:z+17}
C.fAQ.prototype={
$0(){return I.aNr},
$S:z+12}
C.fAR.prototype={
$0(){return D.dZf},
$S:z+19}
C.ffY.prototype={
$2(d,e){return new C.agY(e,$.bJ0()[e],new C.ffX(e,this.a),null)},
$S:z+20}
C.ffX.prototype={
$0(){var w=this.a,v=L.aKX.h(0,$.bJ0()[w].a)
$.auz=v==null?"music":v
B.a7(this.b,!1).c8(B.e5(new C.ffV(w),!1,null,x.H))},
$S:0}
C.ffV.prototype={
$1(d){return $.bJ0()[this.a].e.$0()},
$S:43}
C.ffZ.prototype={
$2(d,e){return new C.afN(e,D.aDm[e],new C.ffW(this.a,e),null)},
$S:z+21}
C.ffW.prototype={
$0(){return this.a.d.$1(D.aDm[this.b])},
$S:0}
C.ffE.prototype={
$0(){return this.a.as=!0},
$S:0}
C.ffD.prototype={
$0(){return this.a.as=!1},
$S:0}
C.fft.prototype={
$0(){var w=this.a
w.ch=0
w.as=!1},
$S:0}
C.ffu.prototype={
$1(d){return this.bq1(d)},
bq1(d){var w=0,v=B.j(x.I),u,t=this,s,r,q
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
r.gr1().sp(0,d/t.b)
r.gJU().sp(0,0.5)
w=3
return B.b($.aU.glK(),$async$$1)
case 3:r=$.aU.bk$.x.h(0,r.f)
s=r==null?null:r.gbg()
if(!(s instanceof B.os))throw B.Y(B.bc("closed"))
q=C
w=4
return B.b(s.lw(t.c),$async$$1)
case 4:u=q.fZ9(f,t.d,t.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:730}
C.ffv.prototype={
$1(d){var w=this.a
if(w.c!=null)w.l(new C.ffs(w,d))},
$S:6}
C.ffs.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.ffw.prototype={
$0(){return this.a.ch=-1},
$S:0}
C.ffC.prototype={
$1(d){var w=this
return new B.e9(new C.ffB(w.a,w.b,w.c,w.d),null)},
$S:20}
C.ffB.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=x.w,a2=B.aE(a3,a0,a1).w
a1=B.aE(a3,a0,a1).w
w=x.p
v=B.a([D.fZk,A.at,D.h5c,A.af],w)
for(u=d.d,t=d.a,s=x.G,r=d.b,q=d.c,p=0;p<3;p=o){o=p+1
n=B.c("SLAB "+o,a0,a0,a0,a0,a0,a0,D.fOe,a0,a0,a0)
m=new B.aP(12,12)
l=new B.aP(12,12)
l=B.a([new B.bu(1,A.b8,B.aN(a0,A.Z,!1,a0,!0,A.t,a0,B.aO(),r[p],a0,a0,a0,a0,a0,2,new B.ee(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Title",a0,A.FE,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.bb(m,m,m,m),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.al,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ae,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jN,!0,A.a7,a0,A.ao,a0,a0,a0,a0),a0),A.aa,new B.bu(2,A.b8,B.aN(a0,A.Z,!1,a0,!0,A.t,a0,B.aO(),q[p],a0,a0,a0,a0,a0,2,new B.ee(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Small line",a0,A.FE,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.bb(l,l,l,l),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.al,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ae,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.jN,!0,A.a7,a0,A.ao,a0,a0,a0,a0),a0)],w)
m=B.a([],w)
for(k=0;k<30;++k){j=D.dHQ[k]
i=new B.aP(12,12)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.B(t.a.c.d,s)
t.w=h}g=A.d.gG(h).j(0.3)}else g=A.c.j(0.06)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.B(t.a.c.d,s)
t.w=h}f=A.d.gG(h)}else f=A.bx
e=new B.ax(f,u[p].A(0,j)?1.8:1,A.r,-1)
m.push(B.aA(a0,B.p(a0,B.V(j,u[p].A(0,j)?A.c:A.aR,a0,a0,a0,22),A.f,a0,a0,new B.o(g,a0,new B.bE(e,e,e,e),new B.bb(i,i,i,i),a0,a0,A.m),a0,a0,a0,A.f7,a0,a0,a0,42),A.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.ffz(a4,p,u,j),a0,a0,a0,a0,a0,a0,!1,A.a4))}A.d.u(v,B.a([n,A.aj,new B.c1(A.aK,A.e,A.h,A.l,a0,A.p,a0,0,l,a0),A.M,new B.a5(a0,44,B.cn(m,a0,a0,a0,a0,a0,A.aK,!1),a0),A.aB],w))}v.push(B.bI(A.BC,a0,new C.ffA(t,r,q,u,a3),a0))
return new B.D(new B.R(0,0,0,a2.f.d),B.bo(!0,new B.cS(new B.aY(0,1/0,0,a1.a.b*0.86),B.cn(v,a0,a0,A8.zt,a0,a0,A.ah,!0),a0),!0,!1,A.ag,!0,!0),a0)},
$S:103}
C.ffz.prototype={
$0(){var w=this
return w.a.$1(new C.ffy(w.b,w.c,w.d))},
$S:0}
C.ffy.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.ffA.prototype={
$0(){var w=this,v=w.a
v.l(new C.ffx(v,w.b,w.c,w.d))
B.a7(w.e,!1).N(null)},
$S:0}
C.ffx.prototype={
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
C.ffM.prototype={
$0(){var w=this.a
return w.l(new C.ffL(w))},
$S:0}
C.ffL.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.ffN.prototype={
$0(){return E.uQ(this.b,this.a.f,"scene")},
$S:0}
C.ffO.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ap(A.d.gG(u),A.d.gal(u),0.4)
u.toString
w=this.a.gJU().x
w===$&&B.d()
return new B.bP(new B.o(v,v,v,v,v,new B.bT(D.b5f,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.c7],x.O),v,v),A.m),A.bm,v,v)},
$S:336}
C.ffP.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.at(new B.dc(A.dp,A.z,A.f,B.ca(new B.hz(B.a([u.gr1(),u.gJU()],x.dS)),new C.ffK(u,this.b,v),w),w),w,w,w)},
$S:238}
C.ffK.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.gr1().x
r===$&&B.d()
w=r<0.9?1:1-C.bvw(r,0.9,0.98)
v=s.gJU().x
v===$&&B.d()
u=A.dQ.aA(0,v)
switch(s.gaA2().a){case 0:s=s.bEK(t.b,r,u,t.c)
break
case 1:s=s.bVX(t.b,r,u,t.c)
break
case 2:s=s.cJG(t.b,r,u,t.c)
break
case 3:s=s.bHK(t.b,r,u,t.c)
break
case 4:s=s.bL8(t.b,r,u,t.c)
break
case 5:s=s.cdE(t.b,r,u,t.c)
break
default:s=null}return B.d5(s,w)},
$S:203}
C.ffQ.prototype={
$2(d,e){var w=B.ac3(this.b),v=this.c.d,u=B.ap(A.d.gG(v),A.d.gal(v),0.4)
u.toString
v=B.ap(A.d.gG(v),A.d.gal(v),0.4)
v.toString
v=w.cSI(u,A.bx,v,3.5)
u=this.a
w=u.gr1().x
w===$&&B.d()
return B.Zx(B.lc(null,null,null,1,0,new C.ffJ(u),A.i.D(w,0,1)),v)},
$S:1952}
C.ffJ.prototype={
$1(d){var w=this.a
w.gr1().sp(0,d)
if(w.as)w.l(new C.ffF(w))},
$S:6}
C.ffF.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ffR.prototype={
$0(){var w=this.a
w.gr1().sp(0,0)
w.a0e()},
$S:0}
C.ffS.prototype={
$1(d){var w=this.a
w.l(new C.ffI(w,d))
if(w.as)w.a0e()},
$S:6}
C.ffI.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.ffT.prototype={
$0(){var w=this.a
w.l(new C.ffH(w,this.b))
w.gr1().sp(0,0)
if(w.as)w.a0e()},
$S:0}
C.ffH.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.ffU.prototype={
$0(){var w=this.a
return w.l(new C.ffG(w,this.b))},
$S:0}
C.ffG.prototype={
$0(){var w=B.B(this.b,x.G)
return this.a.w=w},
$S:0}
C.ffq.prototype={
$2(d,e){return A.i.aQ(d.a,e.a)},
$S:1953}
C.ffr.prototype={
$1(d){return d.b},
$S:1954}
C.duq.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.dur.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.dun.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.duo.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dup.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dus.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dut.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.duu.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.duv.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.duw.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.dux.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.duy.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.duz.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.duA.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.eCR.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eCG.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.eCI.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gZ(e.b),97)},
$S:z+31}
C.eCJ.prototype={
$2(d,e){return d+A.o.F(A.a.gZ(e.a),31)+A.o.F(A.a.gZ(e.b),17)},
$S:z+32}
C.eCM.prototype={
$1(d){var w=D.nn.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+33}
C.eCN.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.U(q),o=x.dg,n=B.B(new B.ed(new B.cO(new B.X(q,new C.eCO(d),p.k("X<1>")),new C.eCP(r),p.k("cO<1,rq?>")),o),o.k("M.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aL(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.I)(n),++v){u=n[v]
if(w.length>=6)return
t=B.B(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.eCO.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eCP.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.eCK.prototype={
$1(d){return D.nn.h(0,d.b).c===D.yu},
$S:z+55}
C.eCL.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eDg.prototype={
$1(d){var w=this.a,v=d.a,u=A.i.D((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.vS(0,u)
w.a8l(A.o.ao(v,1000))},
$S:7}
C.eCQ.prototype={
$0(){},
$S:0}
C.eCC.prototype={
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
C.eCT.prototype={
$1(d){var w=null,v=this.a.b
return B.bo(!0,B.x(B.a([A.M,B.dO(!1,w,w,w,!0,w,w,w,!0,w,w,B.V(D.nn.h(0,v).b,D.nn.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.hgX,w,B.c(D.nn.h(0,v).a,w,w,w,w,w,w,A.hh,w,w,w),w,w,w),B.dO(!1,w,w,w,!0,w,w,w,!0,w,w,A1.au_,w,w,w,w,new C.eCS(d),!1,w,w,w,w,w,w,w,D.h84,w,w,w)],x.p),A.l,w,A.e,A.O,0,A.p),!0,!1,A.ag,!0,!0)},
$S:26}
C.eCS.prototype={
$0(){B.a7(this.a,!1).N(!0)
return null},
$S:0}
C.eCV.prototype={
$1(d){var w,v,u,t=null,s=B.aE(d,t,x.w).w,r=B.a([D.eCV],x.p)
for(w=0;w<6;++w){v=D.aDJ[w]
u=B.c(v.a,t,t,t,t,t,t,A.hh,t,t,t)
r.push(B.dO(!1,t,t,t,!0,t,t,t,!0,t,t,D.c79,t,t,t,t,new C.eCU(d,v),!1,t,t,t,t,t,B.c(v.b,t,t,t,t,t,t,A.ma,t,t,t),t,u,t,t,t))}return B.bo(!0,new B.cS(new B.aY(0,1/0,0,s.a.b*0.7),B.cn(r,t,t,D.bLo,t,t,A.ah,!0),t),!0,!1,A.ag,!0,!0)},
$S:26}
C.eCU.prototype={
$0(){B.a7(this.a,!1).N(this.b)
return null},
$S:0}
C.eCF.prototype={
$1(d){var w=null
return B.ej(B.a([B.bL(!1,A.dw,w,w,!0,w,w,w,new C.eCD(d),w,w),B.bL(!1,A.FK,w,w,!0,w,w,w,new C.eCE(d),w,w)],x.p),w,w,L.mn,D.h5p,w,w,w,w,D.h8o,w)},
$S:18}
C.eCD.prototype={
$0(){B.a7(this.a,!1).N(!1)
return null},
$S:0}
C.eCE.prototype={
$0(){B.a7(this.a,!1).N(!0)
return null},
$S:0}
C.eDe.prototype={
$0(){var w=this.a
return w.l(new C.eDd(w))},
$S:0}
C.eDd.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eDf.prototype={
$2(d,e){var w,v,u,t=null,s=new B.av(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.nC(new C.eD4(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.bgc:t
v=B.a([B.b4(u,t,t,new C.bl3(w,v,new C.eD5(r),new C.eD6(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ao(t,new B.dv(!0,B.ca(w,new C.eD7(r),t),t),t,t,10,10,6,t))
if(r.ax)v.push(r.bMS())
return B.aA(A.c_,B.jr(new B.an(A.a0,t,A.b4,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.eD8(r),t,r.gcom(),t,new C.eD9(r),new C.eDa(r),new C.eDb(r),t,t,t,t,t,t,t,t,t,t,new C.eDc(r),t,t,t,!1,A.a4)},
$S:36}
C.eD4.prototype={
$0(){return this.a.ae_(this.b)},
$S:0}
C.eDc.prototype={
$1(d){return this.a.cHj(d.b)},
$S:56}
C.eDa.prototype={
$1(d){return this.a.con(d.b)},
$S:51}
C.eDb.prototype={
$1(d){return this.a.coo(d.b)},
$S:19}
C.eD9.prototype={
$1(d){return this.a.b5i()},
$S:38}
C.eD8.prototype={
$1(d){return this.a.aeI(d.b)},
$S:307}
C.eD5.prototype={
$0(){return this.a.z},
$S:512}
C.eD6.prototype={
$0(){return this.a.Q},
$S:741}
C.eD7.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bRd()
if(p.length===0)return A.bK
w=A.v.j(0.55)
v=B.m(14)
u=B.K(A.bx,A.r,1)
t=B.a([D.h2M,A.cQ],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.I)(p),++r)t.push(B.c(p[r],q,2,A.a2,q,q,q,A.aYr,q,q,q))
return B.p(q,B.x(t,A.B,q,A.e,A.O,0,A.p),A.f,q,q,new B.o(w,q,u,v,q,q,A.m),q,q,q,q,A.hc,q,q,q)},
$S:66}
C.eCH.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.m(12),t=B.K(e.j(0.6),A.r,1),s=x.p
return new B.D(A.dU,B.A(B.a([B.p(w,B.V(d,e,w,w,w,21),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,38,w,w,w,w,w,38),A.bc,B.E(B.x(B.a([B.c(f,w,w,w,w,w,w,Am.WR,w,w,w),A.bs,B.c(g,w,w,w,w,w,w,F.acW,w,w,w)],s),A.B,w,A.e,A.h,0,A.p),1)],s),A.B,w,A.e,A.h,0,w,w),w)},
$S:1956}
C.eD0.prototype={
$0(){var w=this.a.c
w.toString
return B.a7(w,!1).hY()},
$S:0}
C.eD1.prototype={
$0(){var w=this.a
return w.l(new C.eD_(w))},
$S:0}
C.eD_.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eD2.prototype={
$0(){var w=this.a
return w.l(new C.eCZ(w))},
$S:0}
C.eCZ.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.eD3.prototype={
$0(){var w=this.a
return w.l(new C.eCY(w))},
$S:0}
C.eCY.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eCX.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.nn.gdS(D.nn),w=w.gae(w);w.C();){v=w.gP(w)
if(v.b.c===e)p.push(v.a)}w=B.c(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.I)(p),++r)u.push(s.cBZ(p[r]))
return new B.D(U.an7,B.x(B.a([new B.D(A.aoV,w,q),B.A(u,A.l,q,A.e,A.h,0,q,q)],v),A.B,q,A.e,A.h,0,A.p),q)},
$S:z+37}
C.eCW.prototype={
$0(){return this.a.cdL(this.b)},
$S:0}
C.dum.prototype={
$0(){var w=this,v=null,u=B.fY(v,A.cK,v,v,v,B.cW(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a7,A.cc,v,A.e3,A.cd)
u.eL()
return u},
$S:269}
C.bSa.prototype={
$1(d){return d.r<=0},
$S:z+38}
C.bSl.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bSg.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bSm.prototype={
$1(d){return this.a.MS(d)&&!d.x},
$S:z+0}
C.bSn.prototype={
$2(d,e){return Math.max(d,this.a.aDS(e))},
$S:z+6}
C.bSp.prototype={
$2(d,e){var w=this.a
return w.c_(0,d.a+"."+e,new C.bSq(w))},
$S:z+5}
C.bSq.prototype={
$0(){return this.a.a},
$S:91}
C.bSo.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:68}
C.bSr.prototype={
$2(d,e){var w=this.a
return w.c_(0,this.b.$1(this.c.$2(d,e)),new C.bSs(w))},
$S:z+5}
C.bSs.prototype={
$0(){return this.a.a},
$S:91}
C.bSc.prototype={
$2(d,e){var w=this.a
return w.c_(0,d.a+"."+e,new C.bSd(w))},
$S:z+5}
C.bSd.prototype={
$0(){return this.a.a},
$S:91}
C.bSb.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:68}
C.bSe.prototype={
$2(d,e){var w=this.a
return w.c_(0,this.b.$1(this.c.$2(d,e)),new C.bSf(w))},
$S:z+5}
C.bSf.prototype={
$0(){return this.a.a},
$S:91}
C.bS9.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bSt.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bSh.prototype={
$1(d){return d!==this.b&&this.a.aKd(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bSk.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bSj.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bSi.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bMw.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bMx.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.bMv.prototype={
$2(d,e){return new B.a8(A.aX,A.b1,A.x,e,D.dhE,null).az(0,d)},
$S:1957}
C.cws.prototype={
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
C.h4I.prototype={
$1(d){var w
$.T()
w=B.L()
w.r=d.gp(0)
return w},
$S:1958}
C.h4K.prototype={
$2(d,e){var w
$.T()
w=B.L()
w.b=A.ac
w.c=e
w.r=d.gp(0)
w.d=A.bG
return w},
$S:1959}
C.h4L.prototype={
$5(d,e,f,g,h){return B.bw(new B.a4(d,e,d+f,e+g),new B.aP(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1960}
C.h4J.prototype={
$3(d,e,f){var w
$.T()
w=B.L()
w.san(new B.a8(A.aX,A.b1,A.x,B.a([e,f],x.O),null,null).az(0,d))
return w},
$S:1961}
C.bM8.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.bM9.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.bM7(w))},
$S:0}
C.bM7.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bMa.prototype={
$0(){return B.a([],x.F)},
$S:1962}
C.bMb.prototype={
$1(d){return this.a.bx(d).a>15e5},
$S:412}
C.bMc.prototype={
$0(){var w,v,u
J.bJa(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.rz(v))if(C.hpm(v.b))w.b4M(v)
else w.a1o(v)
else{u=w.a.c.bhN(v)
w.agf(u==null?"The "+$.qS().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bM6.prototype={
$1(d){return new B.e9(new C.bM3(this.a,this.b),null)},
$S:20}
C.bM3.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p=null,o=this.b,n=new C.bM4(this.a,o,a3),m=$.qS(),l=o.b,k=m.h(0,l).d,j=A.i.S(o.ch/1.04),i=new C.bM5(o,n,k),h=B.m(26),g=B.K(k.j(0.55),A.r,1.4),f=x.V,e=B.a([new B.aa(0,A.H,k.j(0.25),A.J,26)],f),d=B.p(p,p,A.f,p,p,new B.o(A.aT,p,p,B.m(3),p,p,A.m),p,4,p,p,p,p,p,42),a0=k.j(0.2),a1=B.K(k,A.r,1)
a1=B.p(p,B.at(B.c(m.h(0,l).c,p,p,p,p,p,p,A.qq,p,p,p),p,p,p),A.f,p,p,new B.o(a0,p,a1,p,p,p,A.a6),p,42,p,p,p,p,p,42)
a0=x.p
w=B.E(B.x(B.a([B.c(m.h(0,l).b,p,1,A.a2,p,p,p,A.jp,p,p,p),D.h2A],a0),A.B,p,A.e,A.h,0,A.p),1)
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
v=B.p(p,B.at(B.cV(p,B.at(new B.dc(A.dI,A.z,A.f,new B.D(A.hN,B.c(m.h(0,l).c,p,p,p,p,p,p,A.mN,p,p,p),p),p),p,p,p),p,p,A.aZ,new B.o(p,p,q,s,f,new B.a8(A.ay,A.aD,A.x,r,p,p),A.m),A.eI,p,a1*0.58,p,p,p,p,p,a1),p,p,p),A.f,p,p,new B.o(t,p,w,v,p,p,A.m),p,120,p,p,p,p,p,1/0)
i=B.A(B.a([i.$2("1\xd7",1),i.$2("2\xd7",2),i.$2("3\xd7",3),i.$2("4\xd7",4),i.$2("5\xd7",5)],a0),A.l,p,A.e,A.h,0,p,p)
w=B.aI(p,p,p,p,B.V(A.ase,k,p,p,p,30),p,p,p,new C.bM_(n,o),p,p,p,p,p,p)
t=B.ac3(a2).bhg(k,A.bx,k.j(0.2),A.c,8)
o=B.A(B.a([w,B.E(B.Zx(B.lc(p,p,p,5.2,1,n,A.i.D(o.ch,1,5.2)),t),1),B.aI(p,p,p,p,B.V(A.a3U,k,p,p,p,30),p,p,p,new C.bM0(n,o),p,p,p,p,p,p)],a0),A.l,p,A.e,A.h,0,p,p)
return B.bo(!0,B.p(p,B.x(B.a([d,A.af,u,A.aB,v,A.af,i,A.at,o,B.A(B.a([B.E(B.c(j<=1?"Normal size":"About "+j+" times the normal size",p,p,p,p,p,p,N.hH,p,p,p),1),B.bL(!1,A6.aZt,p,p,!0,p,p,p,new C.bM1(a2),p,B.fu(p,p,k.j(0.25),p,p,p,p,p,p,p,p,A.c,p,p,p,p,p,A.tC,p,p,p,p,p,p,p,p))],a0),A.l,p,A.e,A.h,0,p,p)],a0),A.l,p,A.e,A.O,0,A.p),A.f,p,p,new B.o(p,p,g,h,e,D.ceE,A.m),p,p,p,A.zk,D.bHW,p,p,p),!0,!1,A.ag,!0,!0)},
$S:87}
C.bM4.prototype={
$1(d){var w=this.a
w.l(new C.bLY(this.b,d))
this.c.$1(new C.bLZ())
w.a.toString},
$S:6}
C.bLY.prototype={
$0(){return this.a.ch=A.i.D(this.b,1,5.2)},
$S:0}
C.bLZ.prototype={
$0(){},
$S:0}
C.bM5.prototype={
$2(d,e){var w=this,v=null,u=Math.abs(w.a.ch-e)<0.05,t=u?w.c.j(0.28):A.c.j(0.06),s=B.m(14),r=u?w.c:A.bx
r=B.K(r,A.r,u?2:1)
return B.E(B.aA(v,B.cV(v,B.at(new B.dc(A.dp,A.z,A.f,B.c(d,v,v,v,v,v,v,B.l(v,v,u?w.c:A.ab,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v),v,v,v),v,v,A.aZ,new B.o(t,v,r,s,v,v,A.m),A.hl,v,v,v,A.jj,A.r6,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.bM2(w.b,e),v,v,v,v,v,v,!1,A.a4),1)},
$S:535}
C.bM2.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bM_.prototype={
$0(){return this.a.$1(this.b.ch-0.4)},
$S:0}
C.bM0.prototype={
$0(){return this.a.$1(this.b.ch+0.4)},
$S:0}
C.bM1.prototype={
$0(){B.a7(this.a,!1).N(null)
return null},
$S:0}
C.bMs.prototype={
$2(d,e){var w
if(d==="short"){G.dG(1800,"",120,0,0.55,"noise")
G.dG(200,"",160,2.2,0.4,"saw")
B.fU()
w=this.a
if(w.c!=null)w.agf("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){G.dG(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.agf("\u26a0 Overloaded! The "+$.qS().h(0,e.b).b+" can only give about "+A.i.a5(w.a.c.Az(e),2)+" amps but your gadgets are asking for "+A.i.a5(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.agf("Burnt out! "+e.ay)
G.dG(140,"",320,0,0.6,"noise")
G.dG(900,"",160,1.5,0.35,"square")}},
$S:z+42}
C.bMt.prototype={
$0(){},
$S:0}
C.bLy.prototype={
$0(){},
$S:0}
C.bMu.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bMr.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.at=n
w=o.a.c
v=o.d
u=o.y
t=o.z
s=o.x
r=this.b
q=x.p
n=B.a([B.aA(A.c_,new B.e7(B.b4(p,p,p,new C.akW(w,v,u,t,s,r==null?A.jI:r,p),n),p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bMl(o),new C.bMm(o),new C.bMn(o),p,p,p,p,p,p,p,p,p,p,new C.bMo(o),p,p,p,!1,A.a4)],q)
if(o.a.c.a.length===0)n.push(D.bfu)
w=o.ay
if(w!=null){v=B.m(14)
u=B.K(A.cW,A.r,1)
n.push(B.ao(p,B.aA(p,B.p(p,B.A(B.a([D.fTw,B.E(B.c(w,p,p,p,p,p,p,D.fKY,p,p,p),1)],q),A.B,p,A.e,A.h,0,p,p),A.f,p,p,new B.o(D.blB,p,u,v,p,p,A.m),p,p,p,p,A.o_,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bMp(o),p,p,p,p,p,p,!1,A.a4),p,p,10,10,8,p))}if(o.x!=null){o=B.A(B.a([D.bNC,new E.fI(A.Dy,"Cut wire",new C.bMq(o),A.c1,p)],q),A.l,p,A.e,A.h,0,p,p)
w=B.m(18)
n.push(B.ao(8,B.p(p,o,A.f,p,p,new B.o(F.Zy,p,B.K(A.bx,A.r,1),w,p,p,A.m),p,p,p,p,F.anB,p,p,p),p,p,12,12,p,p))}else{w=o.e
if(w!=null&&A.d.q(o.a.c.a,w)){w=o.e
w.toString
n.push(B.ao(8,o.coW(w),p,p,10,10,p,p))}}return B.jr(new B.an(A.a0,p,A.b4,A.t,n,p),A.t,p)},
$S:317}
C.bMm.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.bbY(s)
if(r!=null){t.l(new C.bMj(t,r,d))
return}w=t.b5s(s)
if(w!=null){t.Q=w
v=w.c
u=t.at
t.as=new B.r(v*u.a,w.d*u.b).aI(0,s)
t.l(new C.bMk(t,w))}},
$S:51}
C.bMj.prototype={
$0(){var w=this.a
w.y=this.b
w.z=this.c.b},
$S:0}
C.bMk.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bMn.prototype={
$1(d){var w=this.a
if(w.y!=null)w.l(new C.bMh(w,d))
else if(w.Q!=null)w.l(new C.bMi(w,d.b.a7(0,w.as)))},
$S:19}
C.bMh.prototype={
$0(){return this.a.z=this.b.b},
$S:0}
C.bMi.prototype={
$0(){var w,v=this.a,u=v.Q
u.toString
w=this.b
u.c=A.i.D(w.a/v.at.a,0.14,0.86)
u=v.Q
u.toString
u.d=A.i.D(w.b/v.at.b,0.08,0.92)},
$S:0}
C.bMl.prototype={
$1(d){var w,v,u,t=this.a
if(t.y!=null&&t.z!=null){w=t.z
w.toString
v=t.bbY(w)
if(v!=null&&v.a!==t.y.a){w=t.a.c
u=t.y
if(w.an3(u.a,u.b,v.a,v.b)!=null)G.dG(1500,"",40,0,0.22,"square")}}t.Q=t.z=t.y=null
t.agd()},
$S:38}
C.bMo.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.b5s(u)
if(t!=null){v.l(new C.bMe(v,t))
if(D.mF.am(0,t.b))v.czM(t)
w=new B.W(Date.now(),0,!1)
if(v.r===t&&w.bx(v.w).a<38e4){v.l(new C.bMf(v,t))
v.r=null}else{v.r=t
v.w=w}v.a.toString
return}v.l(new C.bMg(v,v.cMX(u)))},
$S:56}
C.bMe.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.x=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
G.dG(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
G.dG(200,"",70,0,0.2,"saw")}},
$S:0}
C.bMf.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.bMg.prototype={
$0(){var w=this.a
w.x=this.b
w.e=w.d=null},
$S:0}
C.bMp.prototype={
$0(){var w=this.a
return w.l(new C.bMd(w))},
$S:0}
C.bMd.prototype={
$0(){return this.a.ay=null},
$S:0}
C.bMq.prototype={
$0(){var w=this.a
A.d.X(w.a.c.b,w.x)
w.x=null
G.dG(300,"",50,0,0.35,"noise")
w.agd()},
$S:0}
C.bLz.prototype={
$0(){return this.a.bul(this.b)},
$S:0}
C.bLV.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.A(B.a([B.c(d,w,w,w,w,w,w,D.fET,w,w,w),B.E(B.lc(this.b.d,w,w,g,h,new C.bLX(this.a,f),A.i.D(e,h,g)),1)],x.p),A.l,w,A.e,A.h,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1963}
C.bLX.prototype={
$1(d){var w=this.a
w.l(new C.bLW(this.b,d))
w.a.toString},
$S:6}
C.bLW.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bLU.prototype={
$2(d,e){var w=null,v=A.c.j(0.06),u=B.m(10)
return B.E(B.p(w,B.x(B.a([B.c(d,w,w,w,w,w,w,A.acM,w,w,w),B.c(e,w,w,w,w,w,w,D.fHK,w,w,w)],x.p),A.l,w,A.e,A.h,0,A.p),A.f,w,w,new B.o(v,w,w,u,w,w,A.m),w,w,w,w,A.x0,w,w,w),1)},
$S:111}
C.bLG.prototype={
$0(){var w=this.a
return w.l(new C.bLF(w))},
$S:0}
C.bLF.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.bLH.prototype={
$0(){var w=this.a
w.a.c.X(0,this.b)
w.e=w.d=null
G.dG(260,"",70,0,0.35,"noise")
w.agd()},
$S:0}
C.bLI.prototype={
$0(){var w=this.a
return w.l(new C.bLE(w))},
$S:0}
C.bLE.prototype={
$0(){return this.a.e=null},
$S:0}
C.bLM.prototype={
$0(){this.a.l(new C.bLD(this.b,this.c))
G.dG(900,"",40,0,0.3,"noise")},
$S:0}
C.bLD.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bLN.prototype={
$0(){return this.a.b4M(this.b)},
$S:0}
C.bLO.prototype={
$0(){return this.a.a1o(this.b)},
$S:0}
C.bLP.prototype={
$0(){return this.a.a33(this.b)},
$S:0}
C.bLQ.prototype={
$0(){var w=this.a
w.l(new C.bLC(this.b,this.c))
w.a.toString},
$S:0}
C.bLC.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bLR.prototype={
$0(){var w=this.a
w.l(new C.bLB(this.b,this.c))
w.a.toString},
$S:0}
C.bLB.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bLS.prototype={
$0(){var w=this.a
w.l(new C.bLA(this.b,this.c))
w.a.toString},
$S:0}
C.bLA.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bLT.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bLJ.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bLK.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bLL.prototype={
$1(d){return this.a.f=d},
$S:6}
C.fAu.prototype={
$1(d){return d.aJP("bulb")},
$S:z+2}
C.fAv.prototype={
$1(d){return d.qj(0,"switch")&&d.aJP("bulb")},
$S:z+2}
C.fAw.prototype={
$1(d){return A.d.aR(d.a,new C.fAh())},
$S:z+2}
C.fAh.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.fAx.prototype={
$1(d){return d.qj(0,"resistor")&&A.d.aR(d.a,new C.fAg())},
$S:z+2}
C.fAg.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fAy.prototype={
$1(d){return!d.qj(0,"battery")&&d.aJP("bulb")},
$S:z+2}
C.fAl.prototype={
$1(d){return A.d.aR(d.a,new C.fAf())},
$S:z+2}
C.fAf.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fAm.prototype={
$1(d){return A.d.aR(d.a,new C.fAe())},
$S:z+2}
C.fAe.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fAn.prototype={
$1(d){return A.d.aR(d.a,new C.fAd())},
$S:z+2}
C.fAd.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fAo.prototype={
$1(d){var w=d.a
return A.d.aR(w,new C.fAb())&&A.d.aR(w,new C.fAc())&&d.qj(0,"buck")},
$S:z+2}
C.fAb.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fAc.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fAp.prototype={
$1(d){var w=d.a
return A.d.aR(w,new C.fA9())&&A.d.aR(w,new C.fAa())},
$S:z+2}
C.fA9.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fAa.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fAq.prototype={
$1(d){return A.d.aR(d.a,new C.fA8())},
$S:z+2}
C.fA8.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.e54.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a6(0)
w.u(0,v.b)},
$S:0}
C.e5d.prototype={
$1(d){var w=this.a.d
return w.aKd(d)&&w.rz(d)},
$S:z+0}
C.e5e.prototype={
$1(d){return d.x},
$S:z+0}
C.e5f.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.e5g.prototype={
$0(){},
$S:0}
C.e53.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.m(22),o=x.p,n=B.a([D.haq,A.at,D.fVo,A.R],o)
for(w=this.a,v=0;v<19;++v){u=D.Tf[v]
t=A.c.j(0.06)
s=new B.aP(14,14)
r=new B.ax(A.bx,1,A.r,-1)
n.push(B.aA(q,B.p(q,B.x(B.a([B.c(u.a,q,q,q,q,q,q,A.iV,q,q,q),A.bs,B.c(u.b,q,3,A.a2,q,q,q,D.fLL,q,q,q)],o),A.B,q,A.e,A.h,0,A.p),A.f,q,q,new B.o(t,q,new B.bE(r,r,r,r),new B.bb(s,s,s,s),q,q,A.m),q,q,q,A.cB,A.bg,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.e52(w,d,u),q,q,q,q,q,q,!1,A.a4))}return B.eH(q,F.n7,new B.D(A.bS,new B.a5(340,q,B.cn(n,q,q,q,q,q,A.ah,!0),q),q),q,q,q,q,q,A.dd,q,new B.b9(p,A.a1),q)},
$S:47}
C.e52.prototype={
$0(){B.a7(this.b,!1).N(null)
var w=this.a
w.l(new C.e51(w,this.c))
G.dG(800,"",120,-0.5,0.3,"square")},
$S:0}
C.e51.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bmX()},
$S:0}
C.e5_.prototype={
$1(d){return new C.Xk(this.a.d,null)},
$S:z+44}
C.e50.prototype={
$0(){},
$S:0}
C.e5c.prototype={
$1(d){return new B.e9(new C.e5b(this.a),null)},
$S:20}
C.e5b.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.ak0(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.q(0,k),f=g?A.bf:A.aH
k=B.aE(d,m,x.w).w
w=l.r
v=x.p
u=B.a([B.A(B.a([D.h7y,A.aW,B.c(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.D,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.l,m,A.e,A.h,0,m,m),A.M,B.by(B.m(4),B.jD(A.bx,m,m,5,m,w.a/11,new B.l6(f,x.c)),A.aq),A.af],v)
if(h)u.push(D.fYH)
else{h=f.j(0.1)
t=B.m(14)
s=B.K(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.c(r+" Now: "+i.a,m,m,m,m,m,m,Ao.LG,m,m,m)
q=B.c(g?"Well done! You did it.":i.b,m,m,m,m,m,m,A_.FF,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.p(m,B.x(B.a([r,A.at,q,new B.bK(A.a9,m,m,B.bL(!1,B.c(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.D,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.e59(l,e),m,m),m)],v),A.B,m,A.e,A.h,0,A.p),A.f,m,m,new B.o(h,m,s,t,m,m,A.m),m,m,m,m,A.bg,m,m,m))}u.push(A.R)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aP(12,12)
n=new B.ax(o===l.f?f.j(0.6):A.dx,1,A.r,-1)
if(w.q(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
s=B.c(s,m,m,m,m,m,m,A.acV,m,m,m)
r=j[o]
q=w.q(0,o)?A.aF:A.c
u.push(B.aA(m,B.p(m,new B.c1(A.aK,A.e,A.h,A.l,m,A.p,m,0,B.a([s,A.ar,new B.bu(1,A.b8,B.c(r.a,m,m,m,m,m,m,new B.F(!0,q,m,m,m,m,13,A.D,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],v),m),A.f,m,m,new B.o(h,m,new B.bE(n,n,n,n),new B.bb(t,t,t,t),m,m,A.m),m,m,m,A.eA,A.o_,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.e5a(l,o,e),m,m,m,m,m,m,!1,A.a4))}return B.bo(!0,new B.cS(new B.aY(0,1/0,0,k.a.b*0.75),B.cn(u,m,m,A8.zt,m,m,A.ah,!0),m),!0,!1,A.ag,!0,!0)},
$S:87}
C.e59.prototype={
$0(){var w=this.a
w.l(new C.e57(w))
this.b.$1(new C.e58())
w.FT()},
$S:0}
C.e57.prototype={
$0(){var w=this.a
$.ak0()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.e58.prototype={
$0(){},
$S:0}
C.e5a.prototype={
$0(){var w=this.a
w.l(new C.e55(w,this.b))
this.c.$1(new C.e56())
w.FT()},
$S:0}
C.e55.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e56.prototype={
$0(){},
$S:0}
C.e5i.prototype={
$0(){return B.a7(this.a,!1).hY()},
$S:0}
C.e5j.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.iF("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a7(t.b,!1).c8(B.e5(new C.e5h(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.e5h.prototype={
$1(d){B.j3("construction")
return Au.i4T()},
$S:z+45}
C.e5k.prototype={
$0(){return E.hR1(this.a,"ELECTRONICS LAB",this.b,A.aH)},
$S:0}
C.e5l.prototype={
$0(){var w=this.a
return w.l(w.d.gd3U())},
$S:0}
C.e5m.prototype={
$0(){var w=this.a,v=w.d
w.l(v.gtn(v))
w.FT()},
$S:0}
C.cO0.prototype={
$2(d,e){var w=null,v=this.a.gaAa().x
v===$&&B.d()
return B.b4(w,w,w,new C.bcQ(v,w),A.aA)},
$S:58}
C.cO_.prototype={
$3(d,e,f){var w=new B.aH($.T().r,A.ak,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.E(new B.aZ(v,t))
w.E(new B.cj(v,u,v+e,u))
w.E(new B.cj(v,u,v,u+e))
w.E(new B.cj(v,u,v-e,u))
w.E(new B.cj(v,u,v,t))
w.E(new B.bA())
t=B.L()
t.r=A.c.j(f).gp(0)
this.a.af(w,t)},
$S:485}
C.h9Q.prototype={
$3(d,e,f){return new C.WA(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+46}
C.h9R.prototype={
$4(d,e,f,g){var w=x.a
return new B.da(e,!1,B.iz(A.z,g,null,new B.bk(B.cK(A.cp,e,null),new B.bq(0.85,1,w),w.k("bk<bR.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
C.e10.prototype={
$0(){var w=this.a
w.e=this.b
w.y=0
w.z=w.gBW()},
$S:0}
C.e11.prototype={
$0(){var w,v=this.a
v.e=0
w=this.c
v.y=A.o.F(A.o.F(this.b,w)+w,w)
v.z=v.gBW()},
$S:0}
C.e1b.prototype={
$0(){var w=this.a,v=this.b,u=this.c
w.x=new B.r(v.a/u.a,v.b/u.b)
w.w=w.gBW()},
$S:0}
C.e1_.prototype={
$1(d){return new K.J9(F.T0[this.b],new C.e0Z(this.a,d),null)},
$S:z+47}
C.e0Z.prototype={
$0(){this.a.a=!0
B.a7(this.b,!1).e4()},
$S:0}
C.e1c.prototype={
$0(){var w=this.a
w.f=this.b
w.r=!1},
$S:0}
C.e1d.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.e0T.prototype={
$2(d,e){var w=null,v=this.a,u=v.f?v.gb2v():w
return B.aA(A.c_,B.b4(w,w,w,v.cok(this.b),A.hf),A.y,!1,D.hGK,u,w,w,w,new C.e0R(v),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.e0S(v,e),w,w,w,!1,A.a4)},
$S:36}
C.e0S.prototype={
$1(d){var w=this.b
return this.a.cHv(d.b,new B.av(B.aT(1/0,w.a,w.b),B.aT(1/0,w.c,w.d)))},
$S:56}
C.e0R.prototype={
$1(d){var w,v=d.d
if(v==null)v=0
if(Math.abs(v)>120&&this.a.Ot()!=null){w=v<0?1:-1
this.a.aE7(w)}},
$S:38}
C.e19.prototype={
$5$color$on(d,e,f,g,h){var w=null,v=h?g.j(0.28):A.c.j(0.08),u=B.m(14),t=B.K(h?g:A.aT,A.r,1)
return B.aA(w,B.p(w,B.x(B.a([B.V(d,g,w,w,w,20),A.rJ,B.c(e,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,9.5,w,w,A.D,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.O,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.m),w,w,w,A.jj,A.jX,w,w,56),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4)},
$3(d,e,f){return this.$5$color$on(d,e,f,A.c,!1)},
$4$color(d,e,f,g){return this.$5$color$on(d,e,f,g,!1)},
$S:508}
C.e15.prototype={
$0(){return this.a.aE7(-1)},
$S:0}
C.e16.prototype={
$0(){return this.a.aE7(1)},
$S:0}
C.e17.prototype={
$0(){return this.a.Kb(null)},
$S:0}
C.e18.prototype={
$0(){return this.a.Kb(0)},
$S:0}
C.e1e.prototype={
$0(){return B.a7(this.a,!1).hY()},
$S:0}
C.e14.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c3Q(o):q.bGL(o,p),m=x.p
p=B.a([B.oT(new B.ma(n,new B.bg(p,x.aC)),A.pP,B.q7(),A.aZ,A.aZ,new C.e12())],m)
n=t.d
if(n){w=A.i.F(q.gBW(),12)<4
v=w?150:96
u=B.m(16)
m=B.a([A.ar],m)
if(w)m.push(D.bNo)
else m.push(A.aW)
m.push(B.p(s,s,A.f,s,s,new B.o(w?A.bf:A.aw,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.ar)
p.push(B.ao(s,B.at(B.cV(s,B.A(m,A.l,s,A.e,A.h,0,s,s),s,s,A.ej,new B.o(A.v,s,s,u,s,s,A.m),A.nb,s,28,s,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.Bh)p.push(B.ao(s,B.at(B.p(s,s,A.f,s,s,A.MW,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.Bi)p.push(B.ao(s,B.p(s,s,A.f,s,s,A.MW,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ao(6,B.aA(s,B.at(B.p(s,s,A.f,s,s,new B.o(A.c.j(0.75),s,s,B.m(3),s,s,A.m),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e13(q),s,s,s,s,s,s,!1,A.a4),s,s,0,0,s,s))
return B.by(r,new B.an(A.a0,s,A.b4,A.t,p,s),A.aq)},
$S:458}
C.e12.prototype={
$2(d,e){var w=x.a
return new B.da(e,!1,B.iz(A.z,d,null,new B.bk(e,new B.bq(0.92,1,w),w.k("bk<bR.T>"))),null)},
$S:352}
C.e13.prototype={
$0(){return this.a.Kb(null)},
$S:0}
C.e1a.prototype={
$2(d,e){var w,v,u,t,s=null,r=Math.max(e.b,230),q=this.a
q=B.a([B.c(A.a.aZ(A.o.v(B.d_(q)),2,"0")+":"+A.a.aZ(A.o.v(B.fA(q)),2,"0"),s,s,s,s,s,s,A.uw,s,s,s),A.aW],x.p)
for(w=0;w<4;++w){v=new B.aP(1,1)
q.push(B.p(s,s,A.f,s,s,new B.o(A.c,s,s,new B.bb(v,v,v,v),s,s,A.m),s,4+w*2,s,D.bLV,s,s,s,3))}q.push(A.da)
q.push(D.h1z)
q.push(A.ba)
v=B.K(A.ab,A.r,1)
u=B.m(4)
t=this.b
q.push(B.p(s,new B.bK(A.a5,s,s,B.C5(A.z,B.p(s,s,A.f,s,s,new B.o(A.bf,s,s,B.m(2),s,s,A.m),s,s,s,A7.HW,s,s,s,s),s,t/100),s),A.f,s,s,new B.o(s,s,v,u,s,s,A.m),s,12,s,s,s,s,s,26))
q.push(A.pn)
q.push(B.c(""+t+"%",s,s,s,s,s,s,D.fT7,s,s,s))
return new B.dc(A.dp,A.a5,A.f,new B.a5(r,s,B.A(q,A.l,s,A.e,A.h,0,s,s),s),s)},
$S:259}
C.e0Y.prototype={
$0(){return this.a.Kb(A.d.cd(F.ix,this.b))},
$S:0}
C.e0W.prototype={
$0(){return this.a.Kb(0)},
$S:0}
C.e0X.prototype={
$2(d,e){var w,v,u,t,s=null,r=Math.max(e.b,216),q=B.a([],x.p)
for(w=B.cU(F.ix,0,B.dy(4,"count",x.S),x.gD),v=w.$ti,w=new B.bQ(w,w.gJ(0),v.k("bQ<aj.E>")),u=this.a,v=v.k("aj.E");w.C();){t=w.d
q.push(u.axZ(t==null?v.a(t):t,50,!1))}return new B.dc(A.dp,A.z,A.f,new B.a5(r,s,B.A(q,A.l,s,A.ru,A.h,0,s,s),s),s)},
$S:259}
C.e0Q.prototype={
$0(){return this.a.Kb(null)},
$S:0}
C.e0V.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=A.v.j(0.55),l=this.a,k=l.f,j=k?112:10
if(k){k=l.c
k.toString
k=B.aE(k,A.bZ,x.w).w.a.a>700}else k=!1
k=k?250:10
w=x.p
k=B.p(n,B.A(B.a([D.hgl,A.ar,B.E(B.c(this.b?"Navigation   Media   Climate":"File   Edit   View   Window   Help",n,1,A.f_,n,n,n,A.LR,n,n,n),1),B.c(A.a.aZ(A.o.v(B.d_(new B.W(Date.now(),0,!1))),2,"0")+":"+A.a.aZ(A.o.v(B.fA(new B.W(Date.now(),0,!1))),2,"0"),n,n,n,n,n,n,A.rM,n,n,n)],w),A.l,n,A.e,A.h,0,n,n),A.f,m,n,n,n,24,n,n,new B.R(j,0,k,0),n,n,n)
j=B.a([B.b4(n,n,n,new C.bzK(l.gBW(),this.c.d,n),A.aA)],w)
if(l.e!=null){if(l.f){m=l.c
m.toString
m=B.aE(m,A.dK,x.w).w.r.b+52}else m=12
v=B.m(10)
u=B.K(A.aT,A.r,1)
t=B.m(10)
s=B.aA(n,B.p(n,n,A.f,n,n,A.agk,n,12,n,n,n,n,n,12),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.e0U(l),n,n,n,n,n,n,!1,A.a4)
r=B.p(n,n,A.f,n,n,A.Z_,n,12,n,n,n,n,n,12)
q=B.aA(n,B.p(n,n,A.f,n,n,D.baz,n,12,n,n,n,n,n,12),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,l.gbcr(),n,n,n,n,n,n,!1,A.a4)
p=l.e
p.toString
p=B.a([s,A.dZ,r,A.dZ,q,A.ar,B.E(B.c(F.ix[p].a,n,1,A.a2,n,n,n,A.WP,n,n,n),1)],w)
if(l.Ot()!=null)s=!l.f||!l.r
else s=!1
if(s)p.push(l.b_q(19))
s=B.p(n,B.A(p,A.l,n,A.e,A.h,0,n,n),A.f,A.cx,n,n,n,26,n,n,A.fD,n,n,n)
r=l.e
r.toString
j.push(B.bS(0,new B.D(new B.R(26,m,26,58),B.p(n,B.by(t,B.x(B.a([s,B.E(l.aQM(r),1)],w),A.l,n,A.e,A.h,0,A.p),A.aq),A.f,n,n,new B.o(A.v,n,u,v,D.dDD,n,A.m),n,n,n,n,n,n,n,n),n),0,0,0))}m=A.c.j(0.16)
v=B.m(18)
u=B.K(A.aT,A.r,1)
t=B.a([],w)
for(o=0;o<8;++o)t.push(new B.D(A.jj,l.axZ(F.ix[o],34,!1),n))
j.push(B.ao(8,B.at(B.p(n,B.A(t,A.l,n,A.e,A.O,0,n,n),A.f,n,n,new B.o(m,n,u,v,n,n,A.m),n,n,n,n,A.lz,n,n,n),n,n,n),n,n,0,0,n,n))
return B.p(n,B.x(B.a([k,B.E(new B.an(A.a0,n,A.b4,A.t,j,n),1)],w),A.l,n,A.e,A.h,0,A.p),A.f,A4.a0a,n,n,n,n,n,n,n,n,n,n)},
$S:83}
C.e0U.prototype={
$0(){return this.a.Kb(null)},
$S:0}
C.fAZ.prototype={
$0(){return D.esV},
$S:z+48}
C.fB_.prototype={
$0(){return D.e_G},
$S:z+49}
C.fB0.prototype={
$0(){return D.dXb},
$S:z+50}
C.fB1.prototype={
$0(){return D.e_3},
$S:z+51}
C.fB2.prototype={
$0(){return D.e4y},
$S:z+52}
C.fB3.prototype={
$0(){return D.eoH},
$S:z+53}
C.fB4.prototype={
$0(){return D.eqR},
$S:z+54}
C.fB5.prototype={
$0(){return D.e3B},
$S:z+36}
C.cpl.prototype={
$0(){return B.a7(this.a,!1).hY()},
$S:0}
C.cpm.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=(e.b-14)/2,i=x.p,h=B.a([],i)
for(w=$.hUV(),v=j*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aP(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.aa(0,A.H,p.j(0.4),A.du,16)],t)
n=B.c(r.c,k,k,k,k,k,k,A.LE,k,k,k)
m=B.c(r.a,k,k,k,k,k,k,D.fQQ,k,k,k)
l=A.c.j(0.85)
h.push(B.aA(k,B.p(k,new B.an(A.a0,k,A.ad,A.t,B.a([new B.cP(k,-6,-6,k,k,k,n,k),new B.bK(A.lO,k,k,B.x(B.a([m,A.cQ,B.c(r.b,k,k,k,k,k,k,new B.F(!0,l,k,k,k,k,12,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)],i),A.B,k,A.e,A.O,0,A.p),k)],i),k),A.f,k,k,new B.o(k,k,k,new B.bb(q,q,q,q),p,new B.a8(A.ay,A.aD,A.x,o,k,k),A.m),k,v,k,k,A.bF,k,k,j),A.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.cpk(d,r),k,k,k,k,k,k,!1,A.a4))}return B.bZ(A.bI,h,A.br,k,14,14)},
$S:168}
C.cpk.prototype={
$0(){return B.a7(this.a,!1).c8(B.e5(new C.cpj(this.b),!1,null,x.H))},
$S:0}
C.cpj.prototype={
$1(d){return this.a.f.$0()},
$S:43}
C.f19.prototype={
$0(){var w=this.a
return w.w=w.d[w.b8U(w.f)]},
$S:0}
C.f15.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cV.ai()*7},
$S:0}
C.f14.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bN(0,A.ck)
w.w=""},
$S:0}
C.f17.prototype={
$0(){var w=this.a
return w.l(new C.f16(w,this.b))},
$S:0}
C.f16.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cJ(w,this.b)},
$S:0}
C.f18.prototype={
$1(d){return this.a.b36(0)},
$S:2}
C.e8N.prototype={
$0(){return C.JX("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.e8O.prototype={
$0(){},
$S:0}
C.e8I.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.e8K.prototype={
$0(){return this.a.b38(this.b)},
$S:0}
C.e8L.prototype={
$0(){var w=this.a
return w.l(new C.e8J(w))},
$S:0}
C.e8J.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.e8M.prototype={
$0(){var w=this.a
return w.b38(w.d)},
$S:0}
C.dTk.prototype={
$2(d,e){return d+e},
$S:80}
C.dTl.prototype={
$0(){},
$S:0}
C.dTf.prototype={
$2(d,e){return d+e},
$S:80}
C.dTi.prototype={
$0(){var w=this.a
return w.l(new C.dTh(w,this.b))},
$S:0}
C.dTh.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dTj.prototype={
$0(){var w=this.a
return w.l(new C.dTg(w))},
$S:0}
C.dTg.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.e4z.prototype={
$0(){return E.uQ(this.b,this.a.d,"drawing")},
$S:0}
C.e4A.prototype={
$1(d){var w=this.a
return w.l(new C.e4y(w,d))},
$S:51}
C.e4y.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aLg(u,v,t))},
$S:0}
C.e4B.prototype={
$1(d){var w=this.a
return w.l(new C.e4x(w,d))},
$S:19}
C.e4x.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
C.e4C.prototype={
$1(d){var w=this.a
return w.l(new C.e4w(w,d))},
$S:24}
C.e4w.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aLg(u,v,t))},
$S:0}
C.e4D.prototype={
$0(){var w=this.a
return w.l(new C.e4v(w,this.b))},
$S:0}
C.e4v.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.e4E.prototype={
$1(d){var w=this.a
return w.l(new C.e4u(w,d))},
$S:6}
C.e4u.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.e4F.prototype={
$0(){var w=this.a
return w.l(new C.e4t(w))},
$S:0}
C.e4t.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.e4G.prototype={
$0(){var w=this.a
return w.l(new C.e4s(w))},
$S:0}
C.e4s.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.e4H.prototype={
$0(){var w=this.a
return w.l(A.d.gtn(w.e))},
$S:0}
C.e4I.prototype={
$0(){var w=this.a
return w.l(new C.e4r(w))},
$S:0}
C.e4r.prototype={
$0(){var w=this.a
w.x=D.aCy[A.o.F(A.d.cd(D.aCy,w.x)+1,4)]},
$S:0}
C.ewq.prototype={
$0(){return this.a.f.I(0,this.b)},
$S:0}
C.ewr.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.JX("bell",B.a([0,4,7],w),500,0.45)
u.l(new C.ewp(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.d()
if(v===u.length)C.JX("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:12}
C.ewp.prototype={
$0(){var w=this.a
w.r.u(0,B.a([this.b,this.c],x.t))
w.f.a6(0)},
$S:0}
C.ews.prototype={
$0(){var w=this.a
if(w.c==null)return
w.l(new C.ewo(w))},
$S:12}
C.ewo.prototype={
$0(){var w=this.a
w.f.a6(0)
w.x=!1},
$S:0}
C.eww.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return B.aA(w,B.ly(new C.ewu(v,e),w,A.aZ,A.pP,w,w,new B.bq(0,u,x.a),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ewv(v,e),w,w,w,w,w,w,!1,A.a4)},
$S:78}
C.ewv.prototype={
$0(){return this.a.cg1(this.b)},
$S:0}
C.ewu.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dz(),m=n.a
m.$flags&2&&B.ak(m)
m[11]=0.001
n.fI(3.141592653589793*e)
m=B.m(16)
w=o?p:D.cdN
if(o)v=q.a.r.q(0,q.b)?A.bf.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.K(u.r.q(0,t)?A.bf:A.aT,A.r,1)
if(o){r=B.dz()
r.fI(3.141592653589793)
u=u.e
u===$&&B.d()
r=B.fF(A.z,B.c(u[t],p,p,p,p,p,p,H.acZ,p,p,p),p,r,!0)
u=r}else u=D.h94
return B.fF(A.z,B.p(A.z,u,A.f,p,p,new B.o(v,p,s,m,p,w,A.m),p,p,p,p,p,p,p,p),p,n,!0)},
$S:116}
C.ewx.prototype={
$0(){var w=this.a
return w.l(new C.ewt(w,this.b))},
$S:0}
C.ewt.prototype={
$0(){var w=this.a
w.d=this.b.a
w.avl()},
$S:0}
C.ewy.prototype={
$0(){var w=this.a
return w.l(w.gbPG())},
$S:0}
C.eJi.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.eJj.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.eJg.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eJh.prototype={
$0(){var w=this.a
if(w.c!=null)w.l(new C.eJf(w))},
$S:12}
C.eJf.prototype={
$0(){return this.a.f=-1},
$S:0}
C.eJk.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.eJl.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.eJm.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b37()},
$S:12}
C.eJn.prototype={
$0(){return this.a.cg7(this.b)},
$S:0}
C.eXv.prototype={
$1(d){return B.v(d.h(0,1))+","},
$S:57}
C.eXE.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.c(d,w,1,A.a2,w,w,w,B.l(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.D(A.jX,B.A(B.a([v,A.aa,new B.d2(1,A.ci,new B.dc(A.dp,A.z,A.f,B.c(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w),w)],x.p),A.l,w,A.e,A.h,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1964}
C.eXA.prototype={
$1(d){return this.a.l(new C.eXz())},
$S:2}
C.eXz.prototype={
$0(){},
$S:0}
C.eXB.prototype={
$0(){var w=this.a
return w.l(new C.eXy(w,this.b))},
$S:0}
C.eXy.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eXC.prototype={
$1(d){var w=this.a
return w.l(new C.eXx(w,d))},
$S:6}
C.eXx.prototype={
$0(){return this.a.f=A.i.S(this.b)},
$S:0}
C.eXD.prototype={
$0(){var w=this.a
return w.l(new C.eXw(w))},
$S:0}
C.eXw.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.ev5.prototype={
$0(){},
$S:0}
C.ev6.prototype={
$0(){},
$S:0}
C.euZ.prototype={
$0(){var w=this.a
return w.l(new C.euY(w))},
$S:0}
C.euY.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.c2(u,1,!1,x.S)
w.r=0.9
E.Y7("hat",0,0.6)},
$S:0}
C.ev_.prototype={
$0(){var w=this.a
return w.l(new C.euX(w))},
$S:0}
C.euX.prototype={
$0(){this.a.y=1.1
E.mG("bell",36,200,0.4)},
$S:0}
C.ev0.prototype={
$0(){var w=this.a
return w.l(new C.euW(w))},
$S:0}
C.euW.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.av(Math.max(v,u)-t+1)
w.as=u
E.mG("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.ev1.prototype={
$0(){var w=this.a
return w.l(new C.euV(w,this.b))},
$S:0}
C.euV.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.ev2.prototype={
$1(d){var w=this.a
return w.l(new C.euU(w,d))},
$S:6}
C.euU.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.i.S(this.b),r=J.e4(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.ev3.prototype={
$1(d){var w=this.a
return w.l(new C.euT(w,d))},
$S:6}
C.euT.prototype={
$0(){return this.a.z=A.i.S(this.b)},
$S:0}
C.ev4.prototype={
$1(d){var w=this.a
return w.l(new C.euS(w,d))},
$S:6}
C.euS.prototype={
$0(){return this.a.Q=A.i.S(this.b)},
$S:0}
C.cph.prototype={
$0(){var w=this
return E.mG(w.a,w.b,w.c,w.d)},
$S:1};(function aliases(){var w=C.aPl.prototype
w.bBD=w.t
w=C.aOq.prototype
w.bAG=w.t
w=C.aOr.prototype
w.bAH=w.t
w=C.aOv.prototype
w.bAL=w.t
w=C.aQb.prototype
w.bCA=w.t
w=C.aPj.prototype
w.bBB=w.t
w=C.aAx.prototype
w.bxH=w.t
w=C.aAy.prototype
w.bxI=w.t
w=C.aMS.prototype
w.bz3=w.t
w=C.aOG.prototype
w.bAW=w.t
w=C.aOs.prototype
w.bAI=w.t
w=C.aON.prototype
w.bB3=w.t
w=C.aPd.prototype
w.bBv=w.t
w=C.aPF.prototype
w.bBX=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._static_0,u=a._instance_1u,t=a._instance_1i,s=a._instance_0i,r=a.installInstanceTearOff
w(C.aHj.prototype,"gazv","cbf",1)
v(C,"iBU","c8U",3)
var q
u(q=C.aFL.prototype,"gckt","cku",22)
w(q,"gcbP","b1B",1)
w(C.aFN.prototype,"gcdA","cdB",1)
t(C.aG3.prototype,"gcdI","cdJ",39)
w(q=C.aKo.prototype,"gcEt","cEu",1)
w(q,"gcdK","a0e",1)
w(q,"gcp5","cp6",1)
w(q,"gcdG","a0d",3)
w(q,"gcdH","ag3",3)
w(q=C.aHi.prototype,"gbML","abn",3)
w(q,"gcom","b5i",1)
w(q,"gcsd","aiI",3)
s(q,"gcdM","ag4",3)
s(q=C.a6i.prototype,"gtn","a6",1)
u(q,"gd1x","apQ",0)
u(q,"gcYR","MS",0)
w(q,"gd3U","bmX",1)
r(C.akW.prototype,"gce8",0,5,null,["$5"],["lE"],41,0,0)
w(q=C.aGg.prototype,"gce9","cea",1)
w(q,"gcv6","aj3",3)
w(q,"gckL","ahn",3)
w(q,"gcCq","akc",3)
w(q=C.aG6.prototype,"gc6g","aef",3)
w(q,"gbcr","cJ4",1)
w(q,"gb2v","cee",1)
w(q=C.aHO.prototype,"gcg2","cg3",1)
s(q,"gcg0","b36",1)
w(C.aH4.prototype,"gbPG","avl",1)
s(C.aHr.prototype,"gcg4","cg5",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aF,[C.am8,C.Hb,C.vG,C.aVA,C.a5a,C.bdY,C.c8V,C.yV,C.Di,C.nZ,C.beL,C.Bh,C.bxc,C.qJ,C.rq,C.Dm,C.a0b,C.agM,C.a2q,C.Dx,C.adC,C.adU,C.afR,C.GX,C.er,C.u8,C.acg,C.ado,C.a6i,C.n9,C.beM,C.h3,C.mh,C.byw,C.aLg])
u(B.hf,[C.fSM,C.fHg,C.fP6,C.fP7,C.fSJ,C.fSK,C.eo9,C.eos,C.eDQ,C.eDn,C.eDo,C.eDp,C.eDq,C.eDr,C.eDs,C.eDt,C.eDu,C.eDl,C.eDm,C.eDk,C.eDL,C.eDM,C.eDN,C.dSR,C.dST,C.dSW,C.dT6,C.c8W,C.c8X,C.fAi,C.fAj,C.fAk,C.fAr,C.fAs,C.fAt,C.dUU,C.dUB,C.dUV,C.dUw,C.dUr,C.dUt,C.dUz,C.dUM,C.dUK,C.dUL,C.dUJ,C.dUG,C.dUI,C.ffV,C.ffu,C.ffv,C.ffC,C.ffJ,C.ffS,C.ffr,C.duq,C.dur,C.dun,C.duo,C.dup,C.dus,C.dut,C.duu,C.duv,C.duw,C.dux,C.duy,C.duz,C.duA,C.eCM,C.eCN,C.eCO,C.eCP,C.eCK,C.eCL,C.eDg,C.eCT,C.eCV,C.eCF,C.eDc,C.eDa,C.eDb,C.eD9,C.eD8,C.eCH,C.bSa,C.bSl,C.bSg,C.bSm,C.bSo,C.bSb,C.bS9,C.bSt,C.bSh,C.bSk,C.bSj,C.bSi,C.bMw,C.h4I,C.h4L,C.h4J,C.bMb,C.bM6,C.bM4,C.bMu,C.bMm,C.bMn,C.bMl,C.bMo,C.bLV,C.bLX,C.bLT,C.bLJ,C.bLK,C.bLL,C.fAu,C.fAv,C.fAw,C.fAh,C.fAx,C.fAg,C.fAy,C.fAl,C.fAf,C.fAm,C.fAe,C.fAn,C.fAd,C.fAo,C.fAb,C.fAc,C.fAp,C.fA9,C.fAa,C.fAq,C.fA8,C.e5d,C.e5e,C.e53,C.e5_,C.e5c,C.e5h,C.cO_,C.h9Q,C.h9R,C.e1_,C.e0S,C.e0R,C.e19,C.cpj,C.f18,C.e4A,C.e4B,C.e4C,C.e4E,C.ewu,C.eXv,C.eXE,C.eXA,C.eXC,C.ev2,C.ev3,C.ev4])
u(B.iH,[C.fSL,C.eoe,C.eoc,C.eDw,C.eDJ,C.dUs,C.dUP,C.e05,C.ffY,C.ffZ,C.ffB,C.ffO,C.ffP,C.ffK,C.ffQ,C.ffq,C.eCI,C.eCJ,C.eDf,C.eD7,C.eCX,C.bSn,C.bSp,C.bSr,C.bSc,C.bSe,C.bMx,C.bMv,C.cws,C.h4K,C.bM3,C.bM5,C.bMs,C.bMr,C.bLU,C.e5b,C.cO0,C.e0T,C.e14,C.e12,C.e1a,C.e0X,C.e0V,C.cpm,C.dTk,C.dTf,C.eww])
u(B.af,[C.Xk,C.XH,C.W8,C.Wf,C.OC,C.aKn,C.XG,C.akU,C.WR,C.aAc,C.WA,C.Ye,C.WZ,C.W9,C.WQ,C.XB,C.XM,C.Y5,C.XA])
u(B.ah,[C.bod,C.aPl,C.aOq,C.aOv,C.aG3,C.aQb,C.aPj,C.aAx,C.bBI,C.aMS,C.aOG,C.aPF,C.aON,C.aOs,C.bnE,C.aH4,C.aHr,C.boV,C.aPd])
u(B.iG,[C.eo7,C.eo8,C.eok,C.eol,C.eog,C.eof,C.eoh,C.eod,C.eoi,C.eob,C.eoj,C.eoa,C.eoo,C.eon,C.eop,C.eom,C.eoq,C.eor,C.eot,C.eDP,C.eDR,C.eDS,C.eDy,C.eDx,C.eDv,C.eDE,C.eDF,C.eDB,C.eDG,C.eDA,C.eDH,C.eDI,C.eDz,C.eDK,C.eDD,C.eDO,C.eDC,C.dTd,C.dTc,C.dSO,C.dSP,C.dSQ,C.dTe,C.dSS,C.dSU,C.dSV,C.dSX,C.dSL,C.dSM,C.dSN,C.dT3,C.dT4,C.dT5,C.dT2,C.dT7,C.dT1,C.dT8,C.dT0,C.dT9,C.dT_,C.dTa,C.dSZ,C.dTb,C.dSY,C.dUy,C.dUx,C.dUC,C.dUu,C.dUv,C.dUD,C.dUE,C.dUF,C.dUA,C.dUq,C.dUO,C.dUN,C.dUQ,C.dUR,C.dUS,C.dUH,C.dUT,C.cYV,C.e03,C.e02,C.e04,C.fAJ,C.fAK,C.fAL,C.fAM,C.fAN,C.fAO,C.fAP,C.fAQ,C.fAR,C.ffX,C.ffW,C.ffE,C.ffD,C.fft,C.ffs,C.ffw,C.ffz,C.ffy,C.ffA,C.ffx,C.ffM,C.ffL,C.ffN,C.ffF,C.ffR,C.ffI,C.ffT,C.ffH,C.ffU,C.ffG,C.eCR,C.eCG,C.eCQ,C.eCC,C.eCS,C.eCU,C.eCD,C.eCE,C.eDe,C.eDd,C.eD4,C.eD5,C.eD6,C.eD0,C.eD1,C.eD_,C.eD2,C.eCZ,C.eD3,C.eCY,C.eCW,C.dum,C.bSq,C.bSs,C.bSd,C.bSf,C.bM8,C.bM9,C.bM7,C.bMa,C.bMc,C.bLY,C.bLZ,C.bM2,C.bM_,C.bM0,C.bM1,C.bMt,C.bLy,C.bMj,C.bMk,C.bMh,C.bMi,C.bMe,C.bMf,C.bMg,C.bMp,C.bMd,C.bMq,C.bLz,C.bLW,C.bLG,C.bLF,C.bLH,C.bLI,C.bLE,C.bLM,C.bLD,C.bLN,C.bLO,C.bLP,C.bLQ,C.bLC,C.bLR,C.bLB,C.bLS,C.bLA,C.e54,C.e5f,C.e5g,C.e52,C.e51,C.e50,C.e59,C.e57,C.e58,C.e5a,C.e55,C.e56,C.e5i,C.e5j,C.e5k,C.e5l,C.e5m,C.e10,C.e11,C.e1b,C.e0Z,C.e1c,C.e1d,C.e15,C.e16,C.e17,C.e18,C.e1e,C.e13,C.e0Y,C.e0W,C.e0Q,C.e0U,C.fAZ,C.fB_,C.fB0,C.fB1,C.fB2,C.fB3,C.fB4,C.fB5,C.cpl,C.cpk,C.f19,C.f15,C.f14,C.f17,C.f16,C.e8N,C.e8O,C.e8I,C.e8K,C.e8L,C.e8J,C.e8M,C.dTl,C.dTi,C.dTh,C.dTj,C.dTg,C.e4z,C.e4y,C.e4x,C.e4w,C.e4D,C.e4v,C.e4u,C.e4F,C.e4t,C.e4G,C.e4s,C.e4H,C.e4I,C.e4r,C.ewq,C.ewr,C.ewp,C.ews,C.ewo,C.ewv,C.ewx,C.ewt,C.ewy,C.eJi,C.eJj,C.eJg,C.eJh,C.eJf,C.eJk,C.eJl,C.eJm,C.eJn,C.eXz,C.eXB,C.eXy,C.eXx,C.eXD,C.eXw,C.ev5,C.ev6,C.euZ,C.euY,C.ev_,C.euX,C.ev0,C.euW,C.ev1,C.euV,C.euU,C.euT,C.euS,C.cph])
t(C.bBV,C.aPl)
t(C.aHj,C.bBV)
u(B.lJ,[C.bl5,C.bf2,C.bwA,C.bdG,C.bv8,C.buy,C.bem,C.buA,C.byG,C.bl3,C.akW,C.bcQ,C.bzK,C.agF,C.bzW,C.buz,C.bpH])
t(C.aOr,C.aOq)
t(C.aFL,C.aOr)
t(C.bBF,C.aOv)
t(C.aFN,C.bBF)
u(B.lg,[C.Lu,C.a2d,C.Kr])
u(B.aw,[C.bvx,C.agY,C.afN,C.RB,C.bw4,C.aag,C.bha])
t(C.aKo,C.aQb)
t(C.bl2,B.oU)
t(C.aHi,C.aPj)
t(C.aAy,C.aAx)
t(C.akV,C.aAy)
t(C.aGg,C.bBI)
t(C.bcR,C.aMS)
t(C.aG6,C.aOG)
t(C.bC1,C.aPF)
t(C.aHO,C.bC1)
t(C.bBK,C.aON)
t(C.bnN,C.bBK)
t(C.bBE,C.aOs)
t(C.bnm,C.bBE)
t(C.bBT,C.aPd)
t(C.bop,C.bBT)
w(C.aPl,B.ci)
w(C.bBV,E.nX)
w(C.aOq,B.ci)
w(C.aOr,E.nX)
w(C.aOv,B.ci)
w(C.bBF,E.nX)
w(C.aQb,B.f1)
w(C.aPj,B.ci)
w(C.aAx,B.ci)
w(C.aAy,E.nX)
w(C.aMS,B.ci)
v(C.bBI,B.eL)
w(C.aOG,B.ci)
w(C.aOs,B.ci)
w(C.bBE,E.nX)
w(C.aON,B.ci)
w(C.bBK,E.nX)
w(C.aPd,B.ci)
w(C.bBT,E.nX)
w(C.aPF,B.ci)
w(C.bC1,E.nX)})()
B.j2(b.typeUniverse,JSON.parse('{"Xk":{"af":[],"w":[]},"bod":{"ah":["Xk"]},"XH":{"af":[],"w":[]},"aHj":{"ah":["XH"]},"bl5":{"aC":[]},"W8":{"af":[],"w":[]},"aFL":{"ah":["W8"]},"Wf":{"af":[],"w":[]},"aFN":{"ah":["Wf"]},"bf2":{"aC":[]},"agY":{"aw":[],"w":[]},"afN":{"aw":[],"w":[]},"aKn":{"af":[],"w":[]},"OC":{"af":[],"w":[]},"aG3":{"ah":["OC"]},"bvx":{"aw":[],"w":[]},"RB":{"aw":[],"w":[]},"bwA":{"aC":[]},"bw4":{"aw":[],"w":[]},"bdG":{"aC":[]},"aKo":{"ah":["aKn"]},"bv8":{"aC":[]},"buy":{"aC":[]},"bem":{"aC":[]},"buA":{"aC":[]},"byG":{"aC":[]},"XG":{"af":[],"w":[]},"bl2":{"aC":[]},"aHi":{"ah":["XG"]},"bl3":{"aC":[]},"akW":{"aC":[]},"akU":{"af":[],"w":[]},"akV":{"ah":["akU"]},"WR":{"af":[],"w":[]},"aAc":{"af":[],"w":[]},"aGg":{"ah":["WR"],"eL":[]},"bcR":{"ah":["aAc"]},"bcQ":{"aC":[]},"WA":{"af":[],"w":[]},"aG6":{"ah":["WA"]},"bzK":{"aC":[]},"agF":{"aC":[]},"aag":{"aw":[],"w":[]},"Ye":{"af":[],"w":[]},"WZ":{"af":[],"w":[]},"W9":{"af":[],"w":[]},"WQ":{"af":[],"w":[]},"XB":{"af":[],"w":[]},"XM":{"af":[],"w":[]},"Y5":{"af":[],"w":[]},"XA":{"af":[],"w":[]},"aHO":{"ah":["Ye"]},"bzW":{"aC":[]},"bnN":{"ah":["WZ"]},"buz":{"aC":[]},"bnm":{"ah":["W9"]},"bnE":{"ah":["WQ"]},"bpH":{"aC":[]},"aH4":{"ah":["XB"]},"aHr":{"ah":["XM"]},"boV":{"ah":["Y5"]},"bop":{"ah":["XA"]},"bha":{"aw":[],"w":[]}}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.as
return{c:w("l6<u?>"),G:w("u"),J:w("bn<n,H>"),Q:w("di<n>"),Z:w("a_"),I:w("vf"),M:w("N<df>"),l:w("N<a55>"),h:w("N<a5a>"),V:w("N<aa>"),O:w("N<u>"),F:w("N<W>"),D:w("N<ay<aF>>"),x:w("N<a_>"),E:w("N<ai<n>>"),b:w("N<ai<H>>"),U:w("N<ai<G?>>"),B:w("N<a9<n,aF>>"),g:w("N<r>"),bz:w("N<u8>"),v:w("N<fX>"),eZ:w("N<+(n,n)>"),fT:w("N<+(H,w)>"),L:w("N<+(G,n)>"),u:w("N<+(G,G)>"),r:w("N<+(n,n,a_)>"),e:w("N<+(n,H,H,G)>"),o:w("N<+(n,G,n,G)>"),d:w("N<+(n,n,H,H,a9<n,H>)>"),_:w("N<vG>"),fQ:w("N<acg>"),s:w("N<n>"),cF:w("N<au>"),X:w("N<KI>"),p:w("N<w>"),bL:w("N<ado>"),fH:w("N<le>"),a_:w("N<adC>"),cB:w("N<nZ>"),ba:w("N<adU>"),eW:w("N<Dm>"),fY:w("N<a0b>"),ac:w("N<afR>"),cd:w("N<Dx>"),fr:w("N<agM>"),e4:w("N<a2q>"),au:w("N<aLg>"),f7:w("N<P>"),n:w("N<H>"),t:w("N<G>"),dS:w("N<aC?>"),fs:w("N<u8?>"),bN:w("N<G?>"),gJ:w("cA<akV>"),A:w("cA<ah<af>>"),bF:w("ai<u>"),gl:w("ai<W>"),ew:w("ai<aF>"),j:w("ai<@>"),P:w("a9<n,@>"),f:w("a9<@,@>"),bd:w("O<er,n>"),fR:w("O<+(H,w),w>"),w:w("id"),gA:w("vk"),gD:w("wF"),k:w("co"),K:w("aF"),Y:w("u8"),C:w("er"),N:w("n"),bO:w("au"),a:w("bq<H>"),W:w("bg<n>"),aC:w("bg<G?>"),dg:w("ed<rq>"),m:w("bdY"),a2:w("Di"),f3:w("rq"),es:w("GX"),q:w("kZ"),y:w("P"),i:w("H"),z:w("@"),S:w("G"),R:w("ai<@>?"),cK:w("aF?"),T:w("n?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b5f=new B.df(0,0.1)
D.b7b=new C.aVA(0,0,0)
D.MQ=new C.aVA(0,0.5,0)
D.b7N=new B.ax(A.bf,1,A.r,-1)
D.b9k=new B.aY(16,1/0,16,1/0)
D.b9v=new B.aY(0,1/0,0,210)
D.bry=new B.u(1,0.10588235294117647,0.12549019607843137,0.18823529411764706,A.q)
D.dDR=w([D.bry,Ax.akA],x.O)
D.eKr=new B.bT(A.BU,1.1,A.x,null,0,D.dDR,null,null)
D.b9D=new B.o(null,null,null,null,null,D.eKr,A.m)
D.baz=new B.o(A.bj,null,null,null,null,null,A.a6)
D.fEq=new B.F(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.hhL=new B.C("\u26a1",null,D.fEq,null,null,null,null,null,null,null,null,null)
D.bfj=new B.cm(A.z,null,null,D.hhL,null)
D.aYm=new B.F(!0,A.bY,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h73=new B.C("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aYm,null,A.K,null,null,null,null,null,null,null)
D.eCA=new B.D(A.o2,D.h73,null)
D.bfu=new B.cm(A.z,null,null,D.eCA,null)
D.fXL=new B.C("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aYm,null,A.K,null,null,null,null,null,null,null)
D.eDt=new B.D(A.HQ,D.fXL,null)
D.bgc=new B.cm(A.z,null,null,D.eDt,null)
D.ahl=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.bk4=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.bkl=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.blB=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.blI=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.bm4=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.bo7=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.bpf=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.bq_=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.ajI=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.br1=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.ak5=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.akd=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.bt1=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.akF=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.bv4=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.bvc=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bvI=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.wQ=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.bxU=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.ama=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.bDL=new B.bh(11e6)
D.bFF=new B.R(10,6,10,2)
D.bFH=new B.R(10,8,0,10)
D.bGl=new B.R(12,8,6,10)
D.bGo=new B.R(12,8,8,8)
D.bGw=new B.R(14,0,14,22)
D.bGy=new B.R(14,0,14,30)
D.bHC=new B.R(16,4,16,28)
D.bHW=new B.R(18,10,18,16)
D.bKL=new B.R(4,4,8,2)
D.bLo=new B.R(8,14,8,12)
D.bLz=new B.R(8,6,8,8)
D.bLV=new B.R(0,0,1.5,0)
D.b6Y=new B.Eh(26,"saturation")
D.bMd=new B.v3(A.cE,D.b6Y,null,A.Zu)
D.bMe=new B.h1(A.H,11)
D.bMi=new B.h1(A.H,30)
D.fWN=new B.C("REACTION LAB",null,V.aYZ,null,null,null,null,A.a2,null,1,null,null)
D.bMr=new B.bu(1,A.b8,D.fWN,null)
D.h_W=new B.C("\ud83d\udce2 NGMY Ads",null,A.rM,null,null,null,null,A.f_,null,1,null,null)
D.bNo=new B.bu(1,A.b8,D.h_W,null)
D.fVp=new B.C("Wire selected",null,A.hh,null,null,null,null,null,null,null,null,null)
D.bNC=new B.bu(1,A.b8,D.fVp,null)
D.arf=new B.a_(62712,"MaterialIcons",!1)
D.bTP=new B.a_(62908,"MaterialIcons",!1)
D.bVu=new B.a_(983122,"MaterialIcons",!1)
D.bVK=new B.a_(983247,"MaterialIcons",!1)
D.bW_=new B.a_(983443,"MaterialIcons",!1)
D.bWi=new B.a_(983616,"MaterialIcons",!1)
D.bVt=new B.a_(983117,"MaterialIcons",!1)
D.c_3=new B.ae(D.bVt,28,A.c,null,null,null)
D.c_l=new B.ae(A.jl,18,null,null,null,null)
D.c1B=new B.ae(A.o8,null,A.ab,null,null,null)
D.c1L=new B.ae(A.a4U,21,A.ab,null,null,null)
D.c2C=new B.ae(A.eC,17,A.ab,null,null,null)
D.c5w=new B.ae(A.jl,21,A.ab,null,null,null)
D.c62=new B.ae(A.eq,20,A.c1,null,null,null)
D.c79=new B.ae(A.eg,null,A.aQ,null,null,null)
D.dBo=w([A.dl,A.dg,A.dl],x.O)
D.auX=new B.a8(A.a5,A.a9,A.x,D.dBo,null,null)
D.daS=w([A.bO,A.bk],x.O)
D.caF=new B.a8(A.aX,A.b1,A.x,D.daS,null,null)
D.caU=new B.a8(A.aX,A.b1,A.x,A.a7u,null,null)
D.dwD=w([F.Ng,A9.amk],x.O)
D.cbE=new B.a8(A.aX,A.b1,A.x,D.dwD,null,null)
D.d8b=w([A.pA,A.iI],x.O)
D.cbK=new B.a8(A.aX,A.b1,A.x,D.d8b,null,null)
D.daA=w([A.cU,A.aw],x.O)
D.av9=new B.a8(A.aX,A.b1,A.x,D.daA,null,null)
D.duz=w([A.d0,A.iL,A.bk],x.O)
D.cc2=new B.a8(A.a5,A.a9,A.x,D.duz,null,null)
D.dGK=w([A.d0,A.bO,A.bk],x.O)
D.ccd=new B.a8(A.a5,A.a9,A.x,D.dGK,null,null)
D.duF=w([A.cy,A.cx],x.O)
D.avc=new B.a8(A.aX,A.b1,A.x,D.duF,null,null)
D.aFc=w([A.cU,M.n8],x.O)
D.ccE=new B.a8(A.aX,A.b1,A.x,D.aFc,null,null)
D.ccW=new B.a8(A.aX,A.b1,A.x,U.avw,null,null)
D.cdN=new B.a8(A.ay,A.aD,A.x,A.T1,null,null)
D.bwD=new B.u(1,0.16470588235294117,0.16470588235294117,0.1803921568627451,A.q)
D.brO=new B.u(1,0.0392156862745098,0.0392156862745098,0.043137254901960784,A.q)
D.dkg=w([D.bwD,D.brO],x.O)
D.cdR=new B.a8(A.aX,A.b1,A.x,D.dkg,null,null)
D.ce0=new B.a8(A.aX,A.b1,A.x,H.aEu,null,null)
D.alU=new B.u(1,0.043137254901960784,0.043137254901960784,0.047058823529411764,A.q)
D.bwe=new B.u(1,0.22745098039215686,0.22745098039215686,0.23921568627450981,A.q)
D.dDg=w([D.alU,D.bwe,D.alU],x.O)
D.ce8=new B.a8(A.a5,A.a9,A.x,D.dDg,null,null)
D.bvC=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.bww=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cTw=w([A.On,D.bvC,D.bww],x.O)
D.ceb=new B.a8(A.aX,A.b1,A.x,D.cTw,null,null)
D.cGH=w([A.de,A.iZ],x.O)
D.ceq=new B.a8(A.aX,A.b1,A.x,D.cGH,null,null)
D.cUc=w([A.d0,A.hX,A.d0],x.O)
D.cey=new B.a8(A.a5,A.a9,A.x,D.cUc,null,null)
D.bzk=new B.u(1,0.07058823529411765,0.0784313725490196,0.10196078431372549,A.q)
D.cHt=w([F.aht,D.bzk],x.O)
D.ceE=new B.a8(A.aX,A.b1,A.x,D.cHt,null,null)
D.cfi=w([0,4,7],x.t)
D.cfj=w([0,4,7,12],x.t)
D.cfk=w([0,4,7,4],x.t)
D.aE9=w([A.hj,A.tk],x.O)
D.aDF=w([A.fY,A.cZ],x.O)
D.aBY=w([A.bl,A.dY],x.O)
D.d1q=w([A.aQ,A.de],x.O)
D.dw3=w([A.c5,A.lQ],x.O)
D.aBo=w([A.cW,A.kc],x.O)
D.d6U=w([A.bQ,A.aM],x.O)
D.cfI=w([D.aE9,D.aDF,A.a6J,D.aBY,D.d1q,A.aCe,A.aDb,D.dw3,D.aBo,D.d6U],B.as("N<ai<u>>"))
D.ckq=w([120,220,380],x.t)
D.coa=w([12,16,19,24],x.t)
D.com=w([1400,800,450,2400],x.t)
D.cwU=w([250,450,900,1500],x.t)
D.bjn=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.bw1=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.btI=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.bzW=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.bsP=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.aAE=w([D.bjn,D.bw1,D.btI,D.bzW,D.bsP],x.O)
D.f4c=new B.y(-25,A.aw)
D.eTk=new B.y(25,A.bE)
D.cGN=w([D.f4c,D.eTk],B.as("N<+(H,u)>"))
D.cOj=w([50,25,75],x.t)
D.cU5=w([0,5,10,15,18,20,25],x.t)
D.d1K=w([900,500,250,1600],x.t)
D.d65=w([A.bl,A.bB,A.bd,A.bl],x.O)
D.a6B=w([A.aC,A.bu,A.bj,A.aH,A.oK],x.O)
D.d7O=w([A.aw,A.aC,A.cW,A.bu,A.bj,A.cG,A.ch,A.bB,A.ZO],x.O)
D.a6E=w([0.04,0.17,0.3],x.n)
D.fnI=new C.vG("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.fnO=new C.vG("Medium engine","A good all-rounder.",0.3,0.9)
D.fnN=new C.vG("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Jk=w([D.fnI,D.fnO,D.fnN],x._)
D.eQu=new B.y(6,"Easy")
D.eRi=new B.y(8,"Medium")
D.eM3=new B.y(10,"Hard")
D.d9z=w([D.eQu,D.eRi,D.eM3],x.L)
D.aCn=w([0.55,0.78,1],x.n)
D.aCy=w([A.c,A.h8,A.pC,A.aw],x.O)
D.aCG=w([A.bj,A.aC,A.bu,A.dg],x.O)
D.fnF=new C.vG("Radar","Shows your height above the ground.",0.1,0)
D.fnG=new C.vG("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.fnD=new C.vG("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aCP=w([D.fnF,D.fnG,D.fnD],x._)
D.dfR=w([-29.5,28.5],x.n)
D.dfX=w([A.bk,A.cm,F.NL,A.cy],x.O)
D.dgk=w([47,100,220,470,1000],x.n)
D.dhE=w([0,0.32,0.62,1],x.n)
D.dhJ=w([A.d0,A.hX,A.d0,A.cy],x.O)
D.Kq={volts:0}
D.a8v=new B.bn(D.Kq,[3],x.J)
D.KS=new B.e_(["b","battery",0.2,0.3,D.a8v])
D.ewr={on:0}
D.dN6=new B.bn(D.ewr,[1],x.J)
D.Fk=new B.e_(["s","switch",0.5,0.3,D.dN6])
D.flh=new B.e_(["l","bulb",0.8,0.3,A.jI])
D.db2=w([D.KS,D.Fk,D.flh],x.d)
D.Fi=new B.b7(["b",0,"s",0])
D.fkb=new B.b7(["s",1,"l",0])
D.aTR=new B.b7(["l",1,"b",1])
D.duN=w([D.Fi,D.fkb,D.aTR],x.o)
D.dao=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.eLa=new C.n9("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.db2,D.duN,D.dao)
D.aNC={ohms:0}
D.aLb=new B.bn(D.aNC,[220],x.J)
D.fkG=new B.e_(["r","resistor",0.5,0.3,D.aLb])
D.fly=new B.e_(["d","led",0.8,0.3,A.jI])
D.dyg=w([D.KS,D.fkG,D.fly],x.d)
D.fjp=new B.b7(["b",0,"r",0])
D.fk5=new B.b7(["r",1,"d",0])
D.fjw=new B.b7(["d",1,"b",1])
D.dIx=w([D.fjp,D.fk5,D.fjw],x.o)
D.dyJ=w(["led","diode","indicator"],x.s)
D.eLh=new C.n9("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dyg,D.dIx,D.dyJ)
D.aa_={level:0}
D.dMt=new B.bn(D.aa_,[0.2],x.J)
D.fkN=new B.e_(["p","pot",0.5,0.3,D.dMt])
D.fkP=new B.e_(["m","motor",0.8,0.3,A.jI])
D.dbo=w([D.KS,D.fkN,D.fkP],x.d)
D.fjo=new B.b7(["b",0,"p",0])
D.fk0=new B.b7(["p",1,"m",0])
D.fjW=new B.b7(["m",1,"b",1])
D.dDz=w([D.fjo,D.fk0,D.fjW],x.o)
D.dus=w(["fan","motor","spin","dimmer"],x.s)
D.eL8=new C.n9("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.dbo,D.dDz,D.dus)
D.a8r=new B.bn(D.aa_,[0.9],x.J)
D.aU_=new B.e_(["s","solar",0.25,0.3,D.a8r])
D.aTZ=new B.e_(["l","bulb",0.75,0.3,A.jI])
D.deu=w([D.aU_,D.aTZ],x.d)
D.fk8=new B.b7(["s",0,"l",0])
D.fjT=new B.b7(["l",1,"s",1])
D.dcg=w([D.fk8,D.fjT],x.o)
D.dEk=w(["solar","sun","without battery","no battery","free"],x.s)
D.eLb=new C.n9("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.deu,D.dcg,D.dEk)
D.flD=new B.e_(["c","crank",0.25,0.3,D.a8r])
D.dsv=w([D.flD,D.aTZ],x.d)
D.fjs=new B.b7(["c",0,"l",0])
D.fjS=new B.b7(["l",1,"c",1])
D.dtb=w([D.fjs,D.fjS],x.o)
D.dsG=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.eL7=new C.n9("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.dsv,D.dtb,D.dsG)
D.dMs=new B.bn(D.aa_,[0.7],x.J)
D.fkU=new B.e_(["t","turbine",0.25,0.3,D.dMs])
D.fkE=new B.e_(["m","motor",0.75,0.3,A.jI])
D.dmb=w([D.fkU,D.fkE],x.d)
D.fkj=new B.b7(["t",0,"m",0])
D.fjX=new B.b7(["m",1,"t",1])
D.dl1=w([D.fkj,D.fjX],x.o)
D.drd=w(["wind","turbine","windmill","water","hydro"],x.s)
D.eL4=new C.n9("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.dmb,D.dl1,D.drd)
D.aL8=new B.bn(D.Kq,[9],x.J)
D.ab6=new B.e_(["b","battery",0.2,0.3,D.aL8])
D.aTX=new B.e_(["r","radio",0.8,0.3,A.jI])
D.dEY=w([D.ab6,D.Fk,D.aTX],x.d)
D.fkd=new B.b7(["s",1,"r",0])
D.aTT=new B.b7(["r",1,"b",1])
D.ceW=w([D.Fi,D.fkd,D.aTT],x.o)
D.dDk=w(["radio","music","listen"],x.s)
D.eLg=new C.n9("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dEY,D.ceW,D.dDk)
D.dNw=new B.bn(D.Kq,[12],x.J)
D.aTW=new B.e_(["b","battery",0.2,0.3,D.dNw])
D.fli=new B.e_(["t","tv",0.8,0.3,A.jI])
D.db4=w([D.aTW,D.Fk,D.fli],x.d)
D.fke=new B.b7(["s",1,"t",0])
D.aTU=new B.b7(["t",1,"b",1])
D.dw6=w([D.Fi,D.fke,D.aTU],x.o)
D.dEW=w(["tv","television","screen","watch"],x.s)
D.eL1=new C.n9("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.db4,D.dw6,D.dEW)
D.fl7=new B.e_(["z","buzzer",0.8,0.3,A.jI])
D.cQI=w([D.KS,D.Fk,D.fl7],x.d)
D.fkf=new B.b7(["s",1,"z",0])
D.fkx=new B.b7(["z",1,"b",1])
D.d56=w([D.Fi,D.fkf,D.fkx],x.o)
D.dBw=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.eLd=new C.n9("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cQI,D.d56,D.dBw)
D.fkO=new B.e_(["h","heater",0.8,0.3,A.jI])
D.dpI=w([D.ab6,D.Fk,D.fkO],x.d)
D.fka=new B.b7(["s",1,"h",0])
D.fjF=new B.b7(["h",1,"b",1])
D.d60=w([D.Fi,D.fka,D.fjF],x.o)
D.cAd=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.eL2=new C.n9("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.dpI,D.d60,D.cAd)
D.flk=new B.e_(["s","solar",0.2,0.25,D.a8r])
D.dNB=new B.bn(D.aNC,[100],x.J)
D.fln=new B.e_(["r","resistor",0.55,0.25,D.dNB])
D.flw=new B.e_(["c","capacitor",0.85,0.25,A.jI])
D.fkK=new B.e_(["q","resistor",0.55,0.6,D.aLb])
D.fll=new B.e_(["d","led",0.85,0.6,A.jI])
D.dvx=w([D.flk,D.fln,D.flw,D.fkK,D.fll],x.d)
D.fk9=new B.b7(["s",0,"r",0])
D.fk4=new B.b7(["r",1,"c",0])
D.fju=new B.b7(["c",1,"s",1])
D.fjt=new B.b7(["c",0,"q",0])
D.fk3=new B.b7(["q",1,"d",0])
D.fjx=new B.b7(["d",1,"c",1])
D.diG=w([D.fk9,D.fk4,D.fju,D.fjt,D.fk3,D.fjx],x.o)
D.drN=w(["capacitor","store","charge","flash"],x.s)
D.eLf=new C.n9("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.dvx,D.diG,D.drN)
D.fkX=new B.e_(["b","battery",0.15,0.3,D.a8v])
D.flF=new B.e_(["l1","bulb",0.5,0.3,A.jI])
D.fl4=new B.e_(["l2","bulb",0.85,0.3,A.jI])
D.d8U=w([D.fkX,D.flF,D.fl4],x.d)
D.fjn=new B.b7(["b",0,"l1",0])
D.fjP=new B.b7(["l1",1,"l2",0])
D.fjQ=new B.b7(["l2",1,"b",1])
D.dn_=w([D.fjn,D.fjP,D.fjQ],x.o)
D.dEG=w(["series","two bulbs","dim"],x.s)
D.eL5=new C.n9("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.d8U,D.dn_,D.dEG)
D.ewN={volts:0,charge:1}
D.dNF=new B.bn(D.ewN,[1.5,0],x.J)
D.flt=new B.e_(["b","battery",0.75,0.3,D.dNF])
D.d8c=w([D.aU_,D.flt],x.d)
D.fk7=new B.b7(["s",0,"b",0])
D.fjr=new B.b7(["b",1,"s",1])
D.dj0=w([D.fk7,D.fjr],x.o)
D.drX=w(["charge","rechargeable","flat","recharge"],x.s)
D.eL3=new C.n9("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.d8c,D.dj0,D.drX)
D.dNv=new B.bn(D.Kq,[4.5],x.J)
D.fkQ=new B.e_(["b","battery",0.2,0.3,D.dNv])
D.aTV=new B.e_(["p","phone",0.8,0.3,A.jI])
D.dm_=w([D.fkQ,D.Fk,D.aTV],x.d)
D.fkc=new B.b7(["s",1,"p",0])
D.ab5=new B.b7(["p",1,"b",1])
D.dAe=w([D.Fi,D.fkc,D.ab5],x.o)
D.dBY=w(["phone","charger","usb","mobile"],x.s)
D.eL9=new C.n9("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.dm_,D.dAe,D.dBY)
D.fkB=new B.e_(["f","fan",0.8,0.3,A.jI])
D.csd=w([D.KS,D.fkB],x.d)
D.fjm=new B.b7(["b",0,"f",0])
D.fjD=new B.b7(["f",1,"b",1])
D.d6E=w([D.fjm,D.fjD],x.o)
D.dur=w(["fan","cool","air","wind"],x.s)
D.eLi=new C.n9("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.csd,D.d6E,D.dur)
D.flb=new B.e_(["b","battery",0.15,0.2,D.a8v])
D.fkC=new B.e_(["a","ammeter",0.5,0.2,A.jI])
D.fkA=new B.e_(["l","bulb",0.85,0.2,A.jI])
D.fld=new B.e_(["v","voltmeter",0.5,0.6,A.jI])
D.dsj=w([D.flb,D.fkC,D.fkA,D.fld],x.d)
D.fjk=new B.b7(["b",0,"a",0])
D.fji=new B.b7(["a",1,"l",0])
D.fkl=new B.b7(["v",0,"l",0])
D.fkm=new B.b7(["v",1,"l",1])
D.diS=w([D.fjk,D.fji,D.aTR,D.fkl,D.fkm],x.o)
D.dIw=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.eLe=new C.n9("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.dsj,D.diS,D.dIw)
D.flI=new B.e_(["b","battery",0.15,0.2,D.aL8])
D.fkW=new B.e_(["t","tv",0.55,0.2,A.jI])
D.aL9=new B.bn(D.Kq,[5],x.J)
D.fkH=new B.e_(["c","buck",0.4,0.5,D.aL9])
D.fkY=new B.e_(["p","phone",0.8,0.5,A.jI])
D.dg6=w([D.flI,D.fkW,D.fkH,D.fkY],x.d)
D.fjq=new B.b7(["b",0,"t",0])
D.aTP=new B.b7(["b",0,"c",0])
D.aTQ=new B.b7(["c",1,"p",0])
D.dlX=w([D.fjq,D.aTU,D.aTP,D.aTQ,D.ab5],x.o)
D.de0=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.eL6=new C.n9("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.dg6,D.dlX,D.de0)
D.fkJ=new B.e_(["c","buck",0.5,0.3,D.aL9])
D.d5N=w([D.aTW,D.fkJ,D.aTV],x.d)
D.dbz=w([D.aTP,D.aTQ,D.ab5],x.o)
D.cDL=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.eL0=new C.n9("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.d5N,D.dbz,D.cDL)
D.fl2=new B.e_(["d","diode",0.5,0.3,A.jI])
D.dnf=w([D.ab6,D.fl2,D.aTX],x.d)
D.fjl=new B.b7(["b",0,"d",0])
D.fjy=new B.b7(["d",1,"r",0])
D.cTh=w([D.fjl,D.fjy,D.aTT],x.o)
D.ddF=w(["diode","protect","backwards","one way"],x.s)
D.eLc=new C.n9("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.dnf,D.cTh,D.ddF)
D.Tf=w([D.eLa,D.eLh,D.eL8,D.eLb,D.eL7,D.eL4,D.eLg,D.eL1,D.eLd,D.eL2,D.eLf,D.eL5,D.eL3,D.eL9,D.eLi,D.eLe,D.eL6,D.eL0,D.eLc],B.as("N<n9>"))
D.hWX=new C.Hb("Moon",1.62,A.d0,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hWV=new C.Hb("Mars",3.71,A.aC,"Mars has about 38 percent of Earth's gravity.")
D.hWY=new C.Hb("Mercury",3.7,A.kG,"Mercury is small, so its gravity is like Mars.")
D.hWS=new C.Hb("Venus",8.87,A.aQ,"Venus is almost as heavy as Earth, with strong gravity.")
D.hWU=new C.Hb("Earth",9.81,A.aH,"On Earth gravity is strong, and the air also slows you down.")
D.hWW=new C.Hb("Neptune",11.15,A.dg,"Neptune pulls a little harder than Earth.")
D.hWT=new C.Hb("Jupiter",24.79,A.cW,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.tY=w([D.hWX,D.hWV,D.hWY,D.hWS,D.hWU,D.hWW,D.hWT],B.as("N<Hb>"))
D.diE=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.djs=w([0.2,0.5,0.8],x.n)
D.b3Y=new C.Lu(0,"accordion")
D.d71=w([A.jY,A.A9,A.zV],x.x)
D.dfr=w(["Mail","SMS","Ad"],x.s)
D.d7G=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hV6=new C.Bh(D.b3Y,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aE9,D.d71,D.dfr,D.d7G)
D.aeY=new C.Lu(1,"flip")
D.drH=w([A.rk,A.DW,A.rn],x.x)
D.dlF=w(["Unlock","Verify","Secure"],x.s)
D.d5I=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hV5=new C.Bh(D.aeY,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.aDF,D.drH,D.dlF,D.d5I)
D.b3Z=new C.Lu(2,"towers")
D.dki=w([A.A7,A.mx,A.iv],x.x)
D.djL=w(["Save","Grow","Earn"],x.s)
D.cUi=w(["","",""],x.s)
D.hV7=new C.Bh(D.b3Z,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a6J,D.dki,D.djL,D.cUi)
D.aeZ=new C.Lu(3,"assemble")
D.dsK=w([A.p3,A.fN,A.eg],x.x)
D.deJ=w(["Launch","Charge","Shine"],x.s)
D.doG=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hV9=new C.Bh(D.aeZ,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.aBY,D.dsK,D.deJ,D.doG)
D.b4_=new C.Lu(4,"carousel")
D.dsw=w([A.bd,A.fv],x.O)
D.dfC=w([A.nj,A.arE,A.QX],x.x)
D.d9p=w(["Explore","Discover","Learn"],x.s)
D.dm6=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hV4=new C.Bh(D.b4_,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.dsw,D.dfC,D.d9p,D.dm6)
D.b40=new C.Lu(5,"burst")
D.djG=w([A.hZ,A.uU],x.O)
D.d7z=w([A.kl,A.m1,A.hQ],x.x)
D.d7Y=w(["Cheer","Win","Love"],x.s)
D.dax=w(["Make some noise","First place","Share the joy"],x.s)
D.hV8=new C.Bh(D.b40,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.djG,D.d7z,D.d7Y,D.dax)
D.aDm=w([D.hV6,D.hV5,D.hV7,D.hV9,D.hV4,D.hV8],B.as("N<Bh>"))
D.fdY=new B.b0("skin","Skin",A.a4b)
D.ffI=new B.b0("muscle","Muscles",A.Qx)
D.ffk=new B.b0("organ","Organs",A.hQ)
D.bTv=new B.a_(62747,"MaterialIcons",!1)
D.ffu=new B.b0("bone","Skeleton",D.bTv)
D.ffQ=new B.b0("vessel","Blood vessels",A.q4)
D.dko=w([D.fdY,D.ffI,D.ffk,D.ffu,D.ffQ],x.r)
D.fnH=new C.vG("Simple legs","Light. Land gently.",0.15,0.2)
D.fnJ=new C.vG("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.fnM=new C.vG("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.Ei=w([D.fnH,D.fnJ,D.fnM],x._)
D.fiT=new B.b7(["beat",0.18,0.28,0])
D.fkg=new B.b7(["burst",0.7,0.2,0])
D.fkr=new B.b7(["delay",0.45,0.5,1])
D.fjZ=new B.b7(["ripple",0.75,0.6,3])
D.dep=w([D.fiT,D.fkg,D.fkr,D.fjZ],x.e)
D.dqY=w([Q.lh,R.KQ,F.VO],x.u)
D.hRX=new C.GX("First spark","A clock lights a burst and a ripple",D.dep,D.dqY)
D.fjC=new B.b7(["beat",0.15,0.3,1])
D.fh9=new B.b7(["ripple",0.62,0.15,0])
D.fkn=new B.b7(["delay",0.4,0.45,0])
D.fje=new B.b7(["ripple",0.7,0.45,0])
D.fiO=new B.b7(["delay",0.4,0.7,1])
D.fk1=new B.b7(["shake",0.75,0.75,0])
D.dFX=w([D.fjC,D.fh9,D.fkn,D.fje,D.fiO,D.fk1],x.e)
D.eNb=new B.y(2,4)
D.aTt=new B.y(4,5)
D.dis=w([Q.lh,R.KQ,F.VO,D.eNb,D.aTt],x.u)
D.hRZ=new C.GX("Heartbeat","Two thumps, then a shake",D.dFX,D.dis)
D.fiZ=new B.b7(["dice",0.15,0.7,1])
D.fkt=new B.b7(["echo",0.4,0.7,0])
D.fja=new B.b7(["comet",0.7,0.5,4])
D.fkh=new B.b7(["burst",0.72,0.2,1])
D.fjz=new B.b7(["burst",0.3,0.25,0])
D.fj_=new B.b7(["pop",0.55,0.85,0])
D.czL=w([D.fiZ,D.fkt,D.fja,D.fkh,D.fjz,D.fj_],x.e)
D.eMv=new B.y(1,3)
D.eMw=new B.y(1,4)
D.aTp=new B.y(0,5)
D.dsr=w([Q.lh,S.w8,D.eMv,D.eMw,D.aTp],x.u)
D.hRY=new C.GX("Fireworks","Dice launch comets that burst in colour",D.czL,D.dsr)
D.fj6=new B.b7(["beat",0.15,0.2,2])
D.fjM=new B.b7(["chance",0.4,0.2,0])
D.fiW=new B.b7(["ball",0.7,0.12,3])
D.fiH=new B.b7(["chance",0.4,0.5,1])
D.fks=new B.b7(["ball",0.3,0.08,1])
D.fhZ=new B.b7(["ripple",0.7,0.55,3])
D.csI=w([D.fj6,D.fjM,D.fiW,D.fiH,D.fks,D.fhZ],x.e)
D.eNc=new B.y(2,5)
D.cQr=w([Q.lh,S.w8,R.aaX,F.VP,D.eNc],x.u)
D.hRW=new C.GX("Rain","Balls fall at random and splash",D.csI,D.cQr)
D.fjN=new B.b7(["beat",0.12,0.45,2])
D.fki=new B.b7(["toggle",0.38,0.2,0])
D.fkp=new B.b7(["wash",0.7,0.15,4])
D.fiY=new B.b7(["count3",0.38,0.45,0])
D.fkk=new B.b7(["burst",0.72,0.4,0])
D.fjA=new B.b7(["light",0.55,0.7,1])
D.fiI=new B.b7(["pop",0.8,0.8,4])
D.dvv=w([D.fjN,D.fki,D.fkp,D.fiY,D.fkk,D.fjA,D.fiI],x.e)
D.eNJ=new B.y(3,6)
D.cvU=w([Q.lh,S.w8,R.aaX,F.VP,D.aTp,D.eNJ],x.u)
D.hRU=new C.GX("Disco","A beat drives lights, washes and bursts",D.dvv,D.cvU)
D.fkw=new B.b7(["button",0.12,0.2,0])
D.fip=new B.b7(["delay",0.34,0.2,1])
D.fkv=new B.b7(["light",0.56,0.2,1])
D.fko=new B.b7(["delay",0.56,0.45,1])
D.fjO=new B.b7(["ball",0.34,0.6,0])
D.fiG=new B.b7(["delay",0.34,0.8,1])
D.fh_=new B.b7(["burst",0.7,0.8,5])
D.cfL=w([D.fkw,D.fip,D.fkv,D.fko,D.fjO,D.fiG,D.fh_],x.e)
D.ePZ=new B.y(5,6)
D.dBG=w([Q.lh,S.w8,F.VO,F.VP,D.aTt,D.ePZ],x.u)
D.hRV=new C.GX("Domino","Tap the button and watch it run down the line",D.cfL,D.dBG)
D.aDJ=w([D.hRX,D.hRZ,D.hRY,D.hRW,D.hRU,D.hRV],B.as("N<GX>"))
D.dqa=w([0.05,0.15,0.25],x.n)
D.drb=w([1.5,3,4.5,9,12],x.n)
D.fca=new B.b0("dice","Dice",A.o4)
D.fdu=new B.b0("coin","Coin",W.A0)
D.ffL=new B.b0("num","Number",A.xv)
D.drp=w([D.fca,D.fdu,D.ffL],x.r)
D.drt=w(["skin","muscle","organ","bone","vessel"],x.s)
D.aDP=w([A.c1,A.aQ,A.bf,A.aH,A.bl,A.c5,A.cW,A.fY],x.O)
D.dsx=w([A.c5,A.aH,A.eG,A.bf],x.O)
D.dtH=w([],x.h)
D.eEf=new C.er("battery","Battery","\ud83d\udd0b",A.bf,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.eEl=new C.er("solar","Solar panel","\u2600\ufe0f",A.bu,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.eF_=new C.er("crank","Hand crank","\ud83d\udd04",A.cW,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.eEC=new C.er("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aH,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.eE7=new C.er("buck","Step-down converter","\ud83d\udd3d",A.fY,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.eEA=new C.er("regulator","5 V regulator","\ud83e\uddca",A.bQ,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.eF4=new C.er("diode","Diode","\u27a1\ufe0f",A.aQ,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.eEM=new C.er("ldr","Light sensor","\ud83c\udf1e",A.eG,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.eEq=new C.er("switch","Switch","\ud83c\udf9a\ufe0f",A.bl,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.eF1=new C.er("fuse","Fuse","\ud83e\uddef",A.c1,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.eE_=new C.er("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.fY,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.eEN=new C.er("resistor","Resistor","\u3030\ufe0f",A.aQ,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.eEP=new C.er("bulb","Light bulb","\ud83d\udca1",A.eG,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.eEn=new C.er("led","LED","\ud83d\udd34",A.aC,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.eEr=new C.er("motor","Motor","\u2699\ufe0f",A.bQ,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.eEJ=new C.er("buzzer","Buzzer","\ud83d\udd14",A.c5,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.eEg=new C.er("heater","Heater","\ud83d\udd25",A.cW,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.eEE=new C.er("capacitor","Capacitor","\ud83e\udeab",A.cw,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.eEw=new C.er("radio","Radio","\ud83d\udcfb",A.oK,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.eEt=new C.er("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.bd,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.eE6=new C.er("voltmeter","Voltmeter","\ud83e\udded",A.bw,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.eEd=new C.er("ammeter","Ammeter","\ud83d\udcdf",A.aQ,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.eEj=new C.er("fan","Fan","\ud83c\udf00",A.aH,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.eF6=new C.er("speaker","Speaker","\ud83d\udd0a",A.c5,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.eEW=new C.er("clock","Digital clock","\u23f0",A.bf,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.eEz=new C.er("calculator","Calculator","\ud83e\uddee",A.Nj,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.eEc=new C.er("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cw,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.eF5=new C.er("router","WiFi router","\ud83d\udcf6",A.fY,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.eF8=new C.er("siren","Siren","\ud83d\udea8",A.aC,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.eE2=new C.er("toycar","Toy car","\ud83d\ude97",A.cW,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.eF9=new C.er("kettle","Kettle","\ud83e\uded6",A.n5,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.eEa=new C.er("lamp","Desk lamp","\ud83e\ude94",A.eG,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.eEm=new C.er("lights","Party lights","\ud83c\udf84",A.oK,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.eEx=new C.er("fridge","Fridge","\ud83e\uddca",A.hk,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.eE4=new C.er("washer","Washing machine","\ud83e\udee7",A.cw,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.eEX=new C.er("blender","Blender","\ud83e\udd64",A.c1,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.eEu=new C.er("drone","Drone","\ud83d\ude81",A.bQ,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.eE9=new C.er("drill","Power drill","\ud83d\udd29",A.aQ,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.eEy=new C.er("torch","Torch","\ud83d\udd26",A.bM,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.eEU=new C.er("neon","Neon sign","\ud83e\udea7",A.c5,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.eE5=new C.er("microwave","Microwave","\ud83c\udf72",A.cW,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.eEO=new C.er("doorbell","Doorbell","\ud83d\udd14",A.bu,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.eEi=new C.er("camera","Security camera","\ud83d\udcf7",A.an,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.eEI=new C.er("console","Game console","\ud83c\udfae",A.bl,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.eEZ=new C.er("heartmon","Heart monitor","\ud83e\ude7a",A.hI,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.eE3=new C.er("aquarium","Aquarium","\ud83d\udc20",A.bd,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.eED=new C.er("lighthouse","Lighthouse","\ud83d\uddfc",A.eG,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.eEL=new C.er("discoball","Disco ball","\ud83e\udea9",A.oK,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.eF3=new C.er("robot","Robot","\ud83e\udd16",A.aH,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.eE1=new C.er("toaster","Toaster","\ud83c\udf5e",A.ee,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.eF7=new C.er("ledstrip","LED strip","\ud83c\udf08",A.c5,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.eET=new C.er("pump","Water pump","\ud83d\udeb0",A.aH,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.eEF=new C.er("hairdryer","Hair dryer","\ud83d\udca8",A.hZ,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.eER=new C.er("headphones","Headphones","\ud83c\udfa7",A.bl,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.eEb=new C.er("smartwatch","Apple Watch Ultra","\u231a",A.bw,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.eF2=new C.er("tablet","iPad Pro M5","\ud83d\udcf2",A.cw,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.eDZ=new C.er("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hI,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.eEv=new C.er("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bv,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.eEo=new C.er("appletv","Apple TV 4K","\ud83d\udcfa",A.bO,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.eEK=new C.er("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.wK,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.eE0=new C.er("iphonefold","iPhone Fold","\ud83d\udcf1",A.b_,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.eEe=new C.er("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.dg,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.eF0=new C.er("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cG,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.eEG=new C.er("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bj,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.eEB=new C.er("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.ca,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.eES=new C.er("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.aC,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.eEp=new C.er("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.bf,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.eEH=new C.er("honor","Honor Magic V5","\ud83d\udcf1",A.cw,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.eEQ=new C.er("vivo","vivo X300 Pro","\ud83d\udcf1",A.cW,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.eEV=new C.er("ereader","Kindle Scribe","\ud83d\udcd6",A.bv,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.eDY=new C.er("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.ch,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.eEs=new C.er("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cG,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.eEk=new C.er("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.bd,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.eE8=new C.er("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.eG,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.eEh=new C.er("carscreen","Luxury car touchscreen","\ud83d\ude98",A.aC,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.eEY=new C.er("vision","Apple Vision Pro","\ud83e\udd7d",A.bl,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.TF=w([D.eEf,D.eEl,D.eF_,D.eEC,D.eE7,D.eEA,D.eF4,D.eEM,D.eEq,D.eF1,D.eE_,D.eEN,D.eEP,D.eEn,D.eEr,D.eEJ,D.eEg,D.eEE,D.eEw,D.eEt,D.eE6,D.eEd,D.eEj,D.eF6,D.eEW,D.eEz,D.eEc,D.eF5,D.eF8,D.eE2,D.eF9,D.eEa,D.eEm,D.eEx,D.eE4,D.eEX,D.eEu,D.eE9,D.eEy,D.eEU,D.eE5,D.eEO,D.eEi,D.eEI,D.eEZ,D.eE3,D.eED,D.eEL,D.eF3,D.eE1,D.eF7,D.eET,D.eEF,D.eER,D.eEb,D.eF2,D.eDZ,D.eEv,D.eEo,D.eEK,D.eE0,D.eEe,D.eF0,D.eEG,D.eEB,D.eES,D.eEp,D.eEH,D.eEQ,D.eEV,D.eDY,D.eEs,D.eEk,D.eE8,D.eEh,D.eEY],B.as("N<er>"))
D.dul=w([5,10,15,25,45,60],x.t)
D.duJ=w([-0.045,0.03,-0.015],x.n)
D.aEh=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.vO=w([0.05,0.2,0.35],x.n)
D.aEl=w([A.d0,A.iL,A.uX,A.GC],x.O)
D.bbS=new B.aa(0,A.H,A.i0,A.dS,6)
D.dxH=w([D.bbS],x.V)
D.eLE=new B.y(0,"AND")
D.eMy=new B.y(1,"Adder")
D.eNd=new B.y(2,"Blinker")
D.eNK=new B.y(3,"Memory")
D.dyu=w([D.eLE,D.eMy,D.eNd,D.eNK],x.L)
D.aEv=w([-104,0,104],x.n)
D.aEx=w([-14,3],x.n)
D.dzu=w([-8,0,8],x.n)
D.aEF=w([-92,0,92],x.n)
D.dzY=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.fnE=new C.vG("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.fnL=new C.vG("Medium tank","Balanced.",0.35,1)
D.fnK=new C.vG("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.TU=w([D.fnE,D.fnL,D.fnK],x._)
D.og=w([0.04,0.2,0.36],x.n)
D.aER=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.ffj=new B.b0(D.b3Y,"Fold",W.asB)
D.fed=new B.b0(D.aeY,"Flip",A.DC)
D.bTM=new B.a_(62889,"MaterialIcons",!1)
D.ffH=new B.b0(D.b3Z,"Rise",D.bTM)
D.asO=new B.a_(983870,"MaterialIcons",!1)
D.fbv=new B.b0(D.aeZ,"Assemble",D.asO)
D.fbI=new B.b0(D.b4_,"Spin",D.arf)
D.fbC=new B.b0(D.b40,"Pop",A.kl)
D.dBD=w([D.ffj,D.fed,D.ffH,D.fbv,D.fbI,D.fbC],B.as("N<+(Lu,n,a_)>"))
D.aEW=w([A.c5,A.eG,A.bw,A.aH,A.bl,A.c1],x.O)
D.dC3=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dD9=w([3,4.5,5,6,9],x.n)
D.bcx=new B.aa(0,A.H,A.b7,A.J,16)
D.dDD=w([D.bcx],x.V)
D.h5i=new B.C("\ud83e\uddcd",null,S.LJ,null,null,null,null,null,null,null,null,null)
D.ceI=new B.J2(5,null,null,A.bx,A.c5,null,null,null,null)
D.fuK=new B.a5(150,null,D.ceI,null)
D.fNe=new B.F(!0,A.ab,null,null,null,null,14,A.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h8C=new B.C("Getting the body ready...",null,D.fNe,null,null,null,null,null,null,null,null,null)
D.h5l=new B.C("Real 3D anatomy, kept on your phone",null,Ah.Bw,null,null,null,null,null,null,null,null,null)
D.dDG=w([D.h5i,A.aB,D.fuK,A.af,D.h8C,A.at,D.h5l],x.p)
D.dEf=w(["solar","turbine","crank","pot"],x.s)
D.dEK=w([0,0.35,0.75,1],x.n)
D.dGc=w(["volts","level","ohms","on"],x.s)
D.boi=new B.u(1,0.23137254901960785,0.43529411764705883,0.8470588235294118,A.q)
D.bzo=new B.u(1,0.0392156862745098,0.10196078431372549,0.25098039215686274,A.q)
D.dGg=w([A.akE,D.boi,A.lV,D.bzo],x.O)
D.dHQ=w([A.jY,A.A9,A.zV,A.rk,A.DW,A.rn,A.A7,A.mx,A.iv,A.p3,A.fN,A.eg,A.hQ,A.ie,A.m1,A.kM,A.rm,A.q2,A.lB,A.Ii,A.vB,A.DB,A.Dz,A.QU,A.Ih,A.DL,A.Qx,A.as_,H.asK,A.kl],x.x)
D.eu8={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.hJS=new C.yV("Switch",F.p0,A.bu,0,"Tap it to turn it ON or OFF.")
D.hJO=new C.yV("Blinker",A.mw,A.bw,0,"Turns itself ON and OFF. Tap to change the speed.")
D.hJP=new C.yV("AND",D.asO,A.cw,2,"ON only when BOTH inputs are ON.")
D.bVh=new B.a_(63671,"MaterialIcons",!1)
D.hJN=new C.yV("OR",D.bVh,A.bl,2,"ON when EITHER input is ON.")
D.hJQ=new C.yV("XOR",A.a43,A.c5,2,"ON when the inputs are DIFFERENT.")
D.hJK=new C.yV("NAND",A.tG,A.aH,2,"OFF only when BOTH inputs are ON.")
D.bUm=new B.a_(63176,"MaterialIcons",!1)
D.hJL=new C.yV("NOR",D.bUm,A.fY,2,"ON only when BOTH inputs are OFF.")
D.hJM=new C.yV("NOT",X.DO,A.cW,1,"Flips the signal: ON becomes OFF.")
D.hJR=new C.yV("Light",A5.l9,A.eG,1,"Glows when its input is ON.")
D.hJT=new C.yV("Buzzer",T.p2,A.c1,1,"Beeps while its input is ON.")
D.AO=new B.bn(D.eu8,[D.hJS,D.hJO,D.hJP,D.hJN,D.hJQ,D.hJK,D.hJL,D.hJM,D.hJR,D.hJT],B.as("bn<n,yV>"))
D.evX={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22,smartwatch:23}
D.Bg=new C.Kr(0,"tv")
D.fpf=new C.mh("Samsung Neo QLED 8K",D.Bg,F.yV,A.aH)
D.fp5=new C.mh("LG OLED evo G5",D.Bg,A.ex,A.hI)
D.foX=new C.mh("Sony Bravia 9",D.Bg,A.t5,A.bv)
D.fp0=new C.mh("Apple TV 4K",D.Bg,A.dT,A.bO)
D.foY=new C.mh("Bang and Olufsen Beovision",D.Bg,F.Cj,F.wK)
D.abh=new C.Kr(1,"iphone")
D.aUm=new C.mh("iPhone 18 Pro Max",D.abh,D.ama,A.ch)
D.Bi=new C.Kr(3,"fold")
D.bzC=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.fpa=new C.mh("iPhone Fold",D.Bi,D.bzC,A.b_)
D.Bh=new C.Kr(2,"android")
D.fpb=new C.mh("Samsung Galaxy S26 Ultra",D.Bh,F.Ng,A.dg)
D.brT=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.fp3=new C.mh("Samsung Galaxy Z Fold7",D.Bi,D.brT,A.cG)
D.fp_=new C.mh("Google Pixel 10 Pro XL",D.Bh,A.d0,A.bj)
D.fp7=new C.mh("Xiaomi 16 Ultra",D.Bh,A.it,A.ca)
D.fp2=new C.mh("Huawei Mate 80 Pro Max",D.Bh,A.et,A.aC)
D.foZ=new C.mh("OPPO Find X9 Ultra",D.Bh,A.ei,A.bf)
D.fph=new C.mh("Honor Magic V5",D.Bi,A.dl,A.cw)
D.fp4=new C.mh("vivo X300 Pro",D.Bh,A.fX,A.cW)
D.aUn=new C.Kr(4,"tablet")
D.fp9=new C.mh("iPad Pro M5",D.aUn,A.d0,A.aH)
D.abi=new C.Kr(5,"reader")
D.fpi=new C.mh("Kindle Scribe",D.abi,A.cU,A.bv)
D.xW=new C.Kr(6,"computer")
D.fp8=new C.mh("MacBook Pro M5 Max",D.xW,A.d0,A.ch)
D.fpe=new C.mh("iMac 32 inch",D.xW,A.bO,A.cG)
D.fp6=new C.mh("Pro Display XDR 8K",D.xW,A.it,A.bd)
D.fp1=new C.mh("Sony Laser Projector",D.xW,A.cx,A.eG)
D.fpc=new C.mh("Luxury car touchscreen",D.xW,M.n8,A.aC)
D.fpg=new C.mh("Apple Vision Pro",D.xW,A.cy,A.bl)
D.fpd=new C.mh("Apple Watch Ultra",D.Bi,F.Cj,A.bw)
D.mF=new B.bn(D.evX,[D.fpf,D.fp5,D.foX,D.fp0,D.foY,D.aUm,D.fpa,D.fpb,D.fp3,D.fp_,D.fp7,D.fp2,D.foZ,D.fph,D.fp4,D.fp9,D.fpi,D.fp8,D.fpe,D.fp6,D.fp1,D.fpc,D.fpg,D.fpd],B.as("bn<n,mh>"))
D.d6j=w([A.z],x.M)
D.d6O=w([A.ay,A.aD],x.M)
D.dho=w([A.ay,A.z,A.aD],x.M)
D.dj7=w([A.ay,A.lN,A.z,A.lO,A.aD],x.M)
D.dyq=w([A.ay,A.lN,A.a5,A.a9,A.lO,A.aD],x.M)
D.dMW=new B.cZ([1,D.d6j,2,D.d6O,3,D.dho,4,A.aFv,5,D.dj7,6,D.dyq],B.as("cZ<G,ai<df>>"))
D.ewK={Calm:0,Box:1,Sleep:2}
D.cNM=w([4,2,6,0],x.n)
D.cNT=w([4,4,4,4],x.n)
D.cNU=w([4,7,8,0],x.n)
D.Un=new B.bn(D.ewK,[D.cNM,D.cNT,D.cNU],B.as("bn<n,ai<H>>"))
D.euk={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.yu=new C.a2d(0,"source")
D.diw=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hQA=new C.qJ("Clock",A.mw,D.yu,A.bw,D.diw)
D.hQw=new C.qJ("Button",A.DR,D.yu,A.aQ,A.Z)
D.dDm=w(["random","quick","slow"],x.s)
D.hQH=new C.qJ("Dice",A.o4,D.yu,A.c5,D.dDm)
D.bUV=new B.a_(63484,"MaterialIcons",!1)
D.G1=new C.a2d(1,"logic")
D.dIM=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hQD=new C.qJ("Delay",D.bUV,D.G1,A.cw,D.dIM)
D.dut=w(["fast","mid","slow"],x.s)
D.hQI=new C.qJ("Echo",A.asf,D.G1,A.bl,D.dut)
D.hQF=new C.qJ("Every 2nd",X.DO,D.G1,A.fY,A.Z)
D.bUB=new B.a_(63309,"MaterialIcons",!1)
D.hQC=new C.qJ("Every 3rd",D.bUB,D.G1,A.aH,A.Z)
D.cf2=w(["50%","25%","75%"],x.s)
D.hQK=new C.qJ("Chance",A9.asQ,D.G1,A.cW,D.cf2)
D.rU=new C.a2d(2,"out")
D.hQy=new C.qJ("Light",A5.l9,D.rU,A.eG,A.Z)
D.hQz=new C.qJ("Burst",A.kl,D.rU,A.c5,A.Z)
D.hQx=new C.qJ("Ripple",A.Ad,D.rU,A.bd,A.Z)
D.hQG=new C.qJ("Ball",A.ass,D.rU,A.cW,A.Z)
D.hQE=new C.qJ("Comet",A.p3,D.rU,A.bl,A.Z)
D.bWp=new B.a_(983669,"MaterialIcons",!1)
D.hQJ=new C.qJ("Shake",D.bWp,D.rU,A.c1,A.Z)
D.hQL=new C.qJ("Pop",A.Dx,D.rU,A.bf,A.Z)
D.hQB=new C.qJ("Wash",A.QB,D.rU,A.pH,A.Z)
D.nn=new B.bn(D.euk,[D.hQA,D.hQw,D.hQH,D.hQD,D.hQI,D.hQF,D.hQC,D.hQK,D.hQy,D.hQz,D.hQx,D.hQG,D.hQE,D.hQJ,D.hQL,D.hQB],B.as("bn<n,qJ>"))
D.euK={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bCp=new C.h3(20,4,13,!1)
D.bCQ=new C.h3(14,5,13.5,!1)
D.bCH=new C.h3(9,2.4,10,!1)
D.bCV=new C.h3(7,5,12.5,!1)
D.bCK=new C.h3(8,3.5,12,!1)
D.bCl=new C.h3(15,2,6,!1)
D.bCT=new C.h3(45,6,13.5,!0)
D.bCB=new C.h3(10,8,13.5,!1)
D.bCt=new C.h3(25,3,12,!0)
D.bCz=new C.h3(35,4,12,!0)
D.bCA=new C.h3(40,4.5,9.5,!0)
D.bCC=new C.h3(55,3,9,!0)
D.bCm=new C.h3(18,3,9,!1)
D.bCS=new C.h3(22,4,13.5,!1)
D.bCL=new C.h3(16,5,13.5,!1)
D.bCx=new C.h3(30,4,9,!0)
D.bD3=new C.h3(5,3.5,13,!1)
D.bCF=new C.h3(25,3,13.5,!0)
D.bCO=new C.h3(14,2.5,9,!1)
D.bCE=new C.h3(6,6,13,!1)
D.bCW=new C.h3(30,1.2,5,!0)
D.bD2=new C.h3(35,3,4.5,!0)
D.bCZ=new C.h3(20,4.5,7.5,!0)
D.bCD=new C.h3(55,5.5,13.5,!0)
D.bCk=new C.h3(45,5.5,13.5,!0)
D.bCP=new C.h3(40,5.5,13.5,!0)
D.bD1=new C.h3(60,6,13.5,!0)
D.amG=new C.h3(28,4,7,!0)
D.Ht=new C.h3(25,4,7,!0)
D.bCw=new C.h3(30,4,7,!0)
D.bCr=new C.h3(22,4,7,!0)
D.bCs=new C.h3(24,4,7,!0)
D.bCG=new C.h3(60,3,5.5,!0)
D.bCn=new C.h3(18,9,14,!0)
D.bCu=new C.h3(25,9,14,!0)
D.amH=new C.h3(30,8,14,!0)
D.bCq=new C.h3(20,8,14,!0)
D.bCy=new C.h3(30,9,14,!0)
D.bCX=new C.h3(22,5,9.5,!0)
D.bCo=new C.h3(30,2.5,10.5,!0)
D.bCM=new C.h3(50,5.5,13.5,!0)
D.bD0=new C.h3(12,2,9.5,!1)
D.bCJ=new C.h3(16,1.3,9.5,!0)
D.bCU=new C.h3(40,2.5,7,!0)
D.bD_=new C.h3(60,1.2,4.8,!0)
D.bCY=new C.h3(18,5,13.5,!0)
D.bCR=new C.h3(8,2,9.5,!1)
D.bCI=new C.h3(12,2.5,8,!1)
D.bCv=new C.h3(20,3.5,13.5,!0)
D.bCN=new C.h3(3.5,3,13,!1)
D.AP=new B.bn(D.euK,[D.bCp,D.bCQ,D.bCH,D.bCV,D.bCK,D.bCl,D.bCT,D.bCB,D.bCt,D.bCz,D.bCA,D.bCC,D.bCm,D.bCS,D.bCL,D.bCx,D.bD3,D.bCF,D.bCO,D.bCE,D.bCW,D.bD2,D.bCZ,D.bCD,D.bCk,D.bCP,D.bD1,D.amG,D.Ht,D.bCw,D.Ht,D.bCr,D.Ht,D.bCs,D.amG,D.Ht,D.bCG,D.bCn,D.bCu,D.amH,D.bCq,D.bCy,D.bCX,D.bCo,D.bCM,D.bD0,D.bCJ,D.bCU,D.bD_,D.Ht,D.amH,D.bCY,D.bCR,D.bCI,D.bCv,D.bCN],B.as("bn<n,h3>"))
D.euh={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.fb_=new B.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.ePW=new B.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.ePR=new B.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.f1U=new B.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.f2S=new B.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.f1Q=new B.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eNT=new B.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.f_E=new B.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.fb7=new B.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.f3e=new B.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eTt=new B.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eNx=new B.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eSs=new B.y("Movement","They pull your legs together and help you balance.")
D.eUu=new B.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eQ4=new B.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.f8l=new B.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.f9y=new B.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.f_o=new B.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.f9g=new B.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eYR=new B.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.f3m=new B.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eNE=new B.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eUS=new B.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.f30=new B.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.eZe=new B.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.f9p=new B.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.f1j=new B.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eNR=new B.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.f3Z=new B.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.f7X=new B.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.f5U=new B.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eLR=new B.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.f10=new B.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.f15=new B.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.eVD=new B.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eQm=new B.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.eUg=new B.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.f_S=new B.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.f6N=new B.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.fb4=new B.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.f3j=new B.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.eLw=new B.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.f03=new B.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.eMq=new B.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.f72=new B.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.f8h=new B.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.f0w=new B.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.f7i=new B.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eNG=new B.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.f8V=new B.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eRO=new B.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.f6p=new B.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eVh=new B.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eZ8=new B.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.f3F=new B.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.f94=new B.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.f8X=new B.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.f90=new B.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.eZH=new B.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.f4D=new B.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.f5R=new B.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.f8H=new B.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.f0v=new B.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.eXn=new B.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eW5=new B.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.f0V=new B.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.f3y=new B.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.eXX=new B.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eYE=new B.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eSc=new B.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.f8d=new B.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eT2=new B.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.eMn=new B.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.eVC=new B.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.eMi=new B.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eQS=new B.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.eVH=new B.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eTb=new B.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.f3V=new B.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eUx=new B.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.faL=new B.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eWf=new B.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.eZz=new B.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.f1r=new B.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eTl=new B.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eT4=new B.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dO5=new B.bn(D.euh,[D.fb_,D.ePW,D.ePR,D.f1U,D.f2S,D.f1Q,D.eNT,D.f_E,D.fb7,D.f3e,D.eTt,D.eNx,D.eSs,D.eUu,D.eQ4,D.f8l,D.f9y,D.f_o,D.f9g,D.eYR,D.f3m,D.eNE,D.eUS,D.f30,D.eZe,D.f9p,D.f1j,D.eNR,D.f3Z,D.f7X,D.f5U,D.eLR,D.f10,D.f15,D.eVD,D.eQm,D.eUg,D.f_S,D.f6N,D.fb4,D.f3j,D.eLw,D.f03,D.eMq,D.f72,D.f8h,D.f0w,D.f7i,D.eNG,D.f8V,D.eRO,D.f6p,D.eVh,D.eZ8,D.f3F,D.f94,D.f8X,D.f90,D.eZH,D.f4D,D.f5R,D.f8H,D.f0v,D.eXn,D.eW5,D.f0V,D.f3y,D.eXX,D.eYE,D.eSc,D.f8d,D.eT2,D.eMn,D.eVC,D.eMi,D.eQS,D.eVH,D.eTb,D.f3V,D.eUx,D.faL,D.eWf,D.eZz,D.f1r,D.eTl,D.eT4],B.as("bn<n,+(n,n)>"))
D.dWZ=new C.W8(null)
D.dXb=new C.W9(null)
D.dZf=new C.Wf(null)
D.e_3=new C.WQ(null)
D.e_7=new C.WR(null)
D.e_G=new C.WZ(null)
D.e3B=new C.XA(null)
D.e4y=new C.XB(null)
D.e8L=new C.XG(null)
D.eoE=new C.XH(null)
D.eoH=new C.XM(null)
D.eqR=new C.Y5(null)
D.eqS=new C.aag(null)
D.esV=new C.Ye(null)
D.ewY=new B.r(0,118)
D.ewZ=new B.r(0,13)
D.ex_=new B.r(0,17)
D.ex2=new B.r(0,330)
D.ex9=new B.r(0,-17)
D.exa=new B.r(0,-18)
D.exb=new B.r(0,-19)
D.exd=new B.r(0,-28)
D.exf=new B.r(0,-31)
D.exg=new B.r(0,-32)
D.exm=new B.r(-9.5,-11)
D.exp=new B.r(10,20)
D.exs=new B.r(10,-13)
D.exu=new B.r(10,-22)
D.exv=new B.r(10,-4)
D.exz=new B.r(11,0)
D.aa5=new B.r(11,8)
D.exF=new B.r(12,2)
D.exG=new B.r(14,0)
D.exH=new B.r(14,12)
D.aNT=new B.r(14,8)
D.exI=new B.r(14,-17)
D.aNV=new B.r(14,-3)
D.aNW=new B.r(14,-4)
D.exL=new B.r(15,0)
D.exM=new B.r(15,-12)
D.exP=new B.r(16,-8)
D.exQ=new B.r(18,14)
D.aO1=new B.r(20,0)
D.exY=new B.r(20,15)
D.exZ=new B.r(20,-3)
D.ey_=new B.r(21,8)
D.ey0=new B.r(21,-36)
D.ey4=new B.r(22,10)
D.aO3=new B.r(22,8)
D.ey5=new B.r(22,-25)
D.ey6=new B.r(24,0)
D.ey7=new B.r(24,2)
D.eya=new B.r(24,-18)
D.eyb=new B.r(24,-22)
D.eyf=new B.r(25,8)
D.eyg=new B.r(26,0)
D.eyk=new B.r(28,-30)
D.eyr=new B.r(30,18)
D.eys=new B.r(30,2)
D.eyv=new B.r(31,19)
D.eyx=new B.r(32,0)
D.aO7=new B.r(34,0)
D.aO8=new B.r(34,-32)
D.Ku=new B.r(36,0)
D.eyK=new B.r(3,-1)
D.eyN=new B.r(40,3)
D.ez0=new B.r(4,11)
D.ez3=new B.r(4,-2)
D.ez7=new B.r(5,0)
D.ez8=new B.r(5,17)
D.ez9=new B.r(5,6)
D.eze=new B.r(6,11)
D.ezg=new B.r(7,-19)
D.ezm=new B.r(8,7)
D.ezn=new B.r(8,-10)
D.ezo=new B.r(8,-14)
D.aOd=new B.r(9,0)
D.ezy=new B.r(-20.5,-17.6)
D.ezB=new B.r(-2.6,-1)
D.ezK=new B.r(2.6,1)
D.ezS=new B.r(-9,12.2)
D.eAv=new B.r(-10,12)
D.aOk=new B.r(-10,4)
D.eAz=new B.r(-11,0)
D.eAB=new B.r(-11,-34)
D.eAF=new B.r(-12,-5)
D.eAG=new B.r(-14,0)
D.eAH=new B.r(-14,13)
D.eAI=new B.r(-14,-19)
D.eAK=new B.r(-14,-23)
D.eAL=new B.r(-15,6)
D.eAO=new B.r(-16,14)
D.eAQ=new B.r(-16,-8)
D.eAR=new B.r(-17,10)
D.eAS=new B.r(-17,-18)
D.eAT=new B.r(-17,-8)
D.eAV=new B.r(-18,20)
D.eAW=new B.r(-18,-9)
D.aOn=new B.r(-20,0)
D.eAY=new B.r(-20,16)
D.eAZ=new B.r(-20,-9)
D.Vj=new B.r(-22,8)
D.eB_=new B.r(-22,-10)
D.eB0=new B.r(-24,10)
D.eB1=new B.r(-24,11)
D.eB2=new B.r(-24,14)
D.eB3=new B.r(-24,-22)
D.eB5=new B.r(-25,-11)
D.eB6=new B.r(-26,0)
D.eB7=new B.r(-26,-18)
D.eB8=new B.r(-27,-24)
D.eB9=new B.r(-28,-36)
D.eBa=new B.r(-2,9)
D.eBb=new B.r(-2,-10)
D.eBc=new B.r(-2,-20)
D.eBf=new B.r(-2,-9)
D.eBh=new B.r(-32,0)
D.aOp=new B.r(-34,0)
D.eBm=new B.r(-40,3)
D.eBo=new B.r(-4,11)
D.eBp=new B.r(-4,-17)
D.eBq=new B.r(-4,-2)
D.eBu=new B.r(-5,0)
D.eBv=new B.r(-5,20)
D.eBw=new B.r(-5,6)
D.eBx=new B.r(-6,6)
D.eBy=new B.r(-6,-42)
D.aOr=new B.r(-7,-19)
D.eBA=new B.r(-7,-24)
D.eBB=new B.r(-8,-1)
D.eBE=new B.r(-8,-9)
D.aae=new B.r(-9,0)
D.eBF=new B.r(-9,1)
D.eBH=new B.r(-9,-23)
D.fXs=new B.C("Thinking\u2026",null,N.hH,null,null,null,null,null,null,null,null,null)
D.eCH=new B.D(A.jB,D.fXs,null)
D.hds=new B.C("Start from a ready-made board",null,A.fR,null,null,null,null,null,null,null,null,null)
D.eCV=new B.D(A.x5,D.hds,null)
D.bKy=new B.R(4,0,4,14)
D.fSu=new B.F(!0,A.aF,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYt=new B.C("Games and little helpers for a spare minute.",null,D.fSu,null,null,null,null,null,null,null,null,null)
D.eD7=new B.D(D.bKy,D.fYt,null)
D.dv7=w([A.hX,A.bk],x.O)
D.eKi=new B.bT(A.z,0.5,A.x,null,0,D.dv7,null,null)
D.eKj=new B.bT(A.z,0.5,A.x,null,0,D.aFc,null,null)
D.dl9=w([A.c,A.bQ],x.O)
D.eKl=new B.bT(A.z,0.5,A.x,null,0,D.dl9,null,null)
D.dEw=w([A.bO,A.cy],x.O)
D.aTi=new B.bT(A.z,0.5,A.x,null,0,D.dEw,null,null)
D.cY_=w([A.c,A.bO],x.O)
D.eKq=new B.bT(A.mS,0.5,A.x,null,0,D.cY_,null,null)
D.bzG=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.dCo=w([A.fy,D.bzG],x.O)
D.eKv=new B.bT(A.mS,0.5,A.x,null,0,D.dCo,null,null)
D.cQZ=w([A.d0,A.cx],x.O)
D.eKw=new B.bT(A.z,0.5,A.x,null,0,D.cQZ,null,null)
D.d53=w([A.h8,A.aQ,A.de],x.O)
D.eKz=new B.bT(A.mS,0.5,A.x,null,0,D.d53,null,null)
D.dvR=w([A.cy,M.n8],x.O)
D.eKA=new B.bT(A.mS,0.5,A.x,null,0,D.dvR,null,null)
D.eKF=new B.bT(A.z,0.5,A.x,null,0,D.aBo,null,null)
D.dFr=w([A.cy,A.im],x.O)
D.eKN=new B.bT(A.z,0.5,A.x,null,0,D.dFr,null,null)
D.deO=w([A.iL,A.bk],x.O)
D.eKQ=new B.bT(A.mS,0.5,A.x,null,0,D.deO,null,null)
D.aTn=new B.aP(9,9)
D.eKW=new B.aP(1.4,1.4)
D.eKY=new B.aP(2.5,2.5)
D.flM=new B.a4(10,-8,18,-2)
D.flN=new B.a4(14,-14,20,14)
D.flP=new B.a4(20,-2,30,2)
D.flU=new B.a4(4,-13,30,-3)
D.fm_=new B.a4(8,-7,12,7)
D.fmb=new B.a4(-12,12,12,19)
D.fmc=new B.a4(-12,14,12,22)
D.fmd=new B.a4(-12,-22,12,8)
D.fme=new B.a4(-12,-25,12,19)
D.fmf=new B.a4(-12,-26,12,-6)
D.fmg=new B.a4(-12,-4,12,14)
D.fmi=new B.a4(-14,20,14,24)
D.fmj=new B.a4(-14,6,14,10)
D.fmk=new B.a4(-14,-17,14,15)
D.fml=new B.a4(-14,-26,14,18)
D.fmm=new B.a4(-14,-26,14,-14)
D.fmn=new B.a4(-14,-4,14,20)
D.fmp=new B.a4(-15,-29,15,25)
D.fmq=new B.a4(-16,-16,16,16)
D.fmt=new B.a4(-16,-22,-9,18)
D.fmu=new B.a4(-16,-24,16,-10)
D.fmw=new B.a4(-16,-2,16,20)
D.fmy=new B.a4(-18,20,18,24)
D.fmz=new B.a4(-18,-18,18,20)
D.fmA=new B.a4(-20,12,20,22)
D.fmB=new B.a4(-20,-28,20,26)
D.fmC=new B.a4(-22,15,22,19)
D.aU2=new B.a4(-22,-26,22,24)
D.fmE=new B.a4(-24,-12,10,22)
D.fmF=new B.a4(-24,-14,22,8)
D.fmG=new B.a4(-24,-6,24,20)
D.aU3=new B.a4(-24,-9,24,9)
D.fmH=new B.a4(-25,14,25,19)
D.fmI=new B.a4(-26,-14,14,8)
D.fmJ=new B.a4(-26,-4,26,20)
D.fmK=new B.a4(-26,-6,4,6)
D.aU4=new B.a4(-28,-13,28,13)
D.fmL=new B.a4(-28,-16,28,16)
D.fmM=new B.a4(-28,-16,28,8)
D.fmN=new B.a4(-28,-22,28,22)
D.fmO=new B.a4(-29,-11,29,11)
D.fmP=new B.a4(-30,-12,30,14)
D.fmQ=new B.a4(-30,-14,0,14)
D.fmR=new B.a4(-30,-18,30,20)
D.fmS=new B.a4(-30,-28,30,14)
D.fmT=new B.a4(-30,-2,30,18)
D.fmU=new B.a4(-30,-4,30,18)
D.fmV=new B.a4(-32,-17,32,17)
D.fmW=new B.a4(-32,-28,32,18)
D.fmX=new B.a4(-33,-21,33,17)
D.fmY=new B.a4(-34,0,34,10)
D.fmZ=new B.a4(-34,14,34,26)
D.ab8=new B.a4(-34,-18,34,18)
D.fn_=new B.a4(-36,-24,36,20)
D.fn0=new B.a4(-38,-22,38,22)
D.fn2=new B.a4(-3,12,3,22)
D.fn3=new B.a4(-3,5,3,15)
D.fn7=new B.a4(-46,-34,46,28)
D.fn9=new B.a4(-48,-3,48,3)
D.fnc=new B.a4(-6,18,24,24)
D.fnd=new B.a4(-6,5,6,12)
D.fne=new B.a4(-6,-22,6,-15)
D.fni=new B.a4(-9,-16,9,22)
D.fnj=new B.a4(-4.5,-24,4.5,-21.2)
D.fnl=new B.a4(14,-9,17.5,9)
D.ew6={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aVb=new B.di(D.ew6,5,x.Q)
D.evz={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.fqY=new B.di(D.evz,10,x.Q)
D.ftk=new B.av(24,44)
D.ftI=new B.av(54,38)
D.ftO=new B.av(66,38)
D.bhd=new B.fr(2,null,null,null,null,A.bl,null,null,null,null)
D.fuS=new B.a5(16,16,D.bhd,null)
D.aWf=new B.hW(3,12,12,0.82,null)
D.fHO=new B.F(!0,A.wG,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC9=new B.eG("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cY,null,null,null,null,null,null,D.fHO)
D.fN2=new B.F(!0,A.kZ,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCf=new B.eG("AI",null,null,A.cY,null,null,null,null,null,null,D.fN2)
D.fCx=new B.F(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fD3=new B.F(!0,A.bq,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDu=new B.F(!0,A.cw,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEm=new B.F(!0,A.c,null,null,null,null,13.5,A.D,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fET=new B.F(!0,A.aR,null,null,null,null,12,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frJ=new B.d1(A.i0,A.dS,6)
D.don=w([D.frJ],B.as("N<d1>"))
D.fFT=new B.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.don,null,null,null)
D.fFY=new B.F(!0,A.eF,null,null,null,null,12.5,A.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fG2=new B.F(!0,A.bY,null,null,null,null,10.5,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGF=new B.F(!0,A.bY,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGN=new B.F(!0,A.aF,null,null,null,null,null,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHK=new B.F(!0,A.bY,null,null,null,null,9.5,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHS=new B.F(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIp=new B.F(!0,A.aF,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIV=new B.F(!0,A.aQ,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIY=new B.F(!0,A.c,null,null,null,null,10.5,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.aFy,null,null,null)
D.fJ4=new B.F(!0,A.c,null,null,null,null,12.5,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJO=new B.F(!0,A.bC,null,null,null,null,10.5,A.u,null,0.5,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fKY=new B.F(!0,A.v2,null,null,null,null,12.5,A.N,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLC=new B.F(!0,A.bM,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLL=new B.F(!0,A.aF,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMy=new B.F(!0,A.n9,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMJ=new B.F(!0,A.cy,null,null,null,null,9.5,null,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aYs=new B.F(!0,A.c,null,null,null,null,9.5,A.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNV=new B.F(!0,A.iZ,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOe=new B.F(!0,A.bY,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOM=new B.F(!0,A.bf,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQj=new B.F(!0,A.v,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQQ=new B.F(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fR7=new B.F(!0,A.aQ,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRv=new B.F(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRy=new B.F(!0,A.aQ,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSL=new B.F(!0,A.v2,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fT7=new B.F(!0,A.bf,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fG5=new B.F(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTw=new B.C("\u26a0\ufe0f ",null,D.fG5,null,null,null,null,null,null,null,null,null)
D.fTJ=new B.C("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A3.By,null,null,null,null,null,null,null,null,null)
D.fVo=new B.C("Pick one, then change it and see what happens.",null,A3.By,null,null,null,null,null,null,null,null,null)
D.fHg=new B.F(!0,A.ab,null,null,null,null,null,A.N,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWp=new B.C("What do you want to invent? Type it below, or tap an idea.",null,D.fHg,null,null,null,null,null,null,null,null,null)
D.fLx=new B.F(!0,A.c1,null,null,null,null,12.5,A.D,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWW=new B.C("Burnt out! Press Repair.",null,D.fLx,null,null,null,null,null,null,null,null,null)
D.fY3=new B.C("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fYH=new B.C("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.hh,null,null,null,null,null,null,null,null,null)
D.fZk=new B.C("Make it yours",null,A.jp,null,null,null,null,null,null,null,null,null)
D.h1z=new B.C("5G",null,A4.aXN,null,null,null,null,null,null,null,null,null)
D.h2A=new B.C("Pick how big the screen is on the board",null,N.hH,null,null,null,null,null,null,null,null,null)
D.fOw=new B.F(!0,A.bY,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2M=new B.C("WHAT HAPPENS",null,D.fOw,null,null,null,null,null,null,null,null,null)
D.h4x=new B.C("Check",null,null,null,null,null,null,null,null,null,null,null)
D.h5c=new B.C("Change the words and pictures on the three slabs.",null,A3.By,null,null,null,null,null,null,null,null,null)
D.h5p=new B.C("All the parts and wires will be removed.",null,A.hG,null,null,null,null,null,null,null,null,null)
D.h5K=new B.C("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.h6j=new B.C("Tap the crank on the board again and again to spin it faster.",null,N.hH,null,null,null,null,null,null,null,null,null)
D.h7y=new B.C("\ud83c\udfaf Challenges",null,A.dv,null,null,null,null,null,null,null,null,null)
D.h84=new B.C("Remove this part",null,A1.aXn,null,null,null,null,null,null,null,null,null)
D.h8o=new B.C("Clear the board?",null,A.ds,null,null,null,null,null,null,null,null,null)
D.fNW=new B.F(!0,A.bw,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h8G=new B.C("How the Lab works",null,D.fNW,null,null,null,null,null,null,null,null,null)
D.fEz=new B.F(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h90=new B.C("Electronics Lab",null,D.fEz,null,null,null,null,A.a2,null,1,null,null)
D.h94=new B.C("?",null,R.aYY,null,null,null,null,null,null,null,null,null)
D.haq=new B.C("Ready-made circuits",null,A.dv,null,null,null,null,null,null,null,null,null)
D.hb5=new B.C("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,N.hH,null,null,null,null,null,null,null,null,null)
D.fRc=new B.F(!0,A.aQ,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.heC=new B.C("\u26a0 There is no air here, so a parachute will not work.",null,D.fRc,null,null,null,null,null,null,null,null,null)
D.hfN=new B.C("Download the scene (GIF)",null,A.cL,null,null,null,null,null,null,null,null,null)
D.hfQ=new B.C("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,A1.aXl,null,null,null,null,null,null,null,null,null)
D.hgl=new B.C("NGMY",null,A.wf,null,null,null,null,null,null,null,null,null)
D.hgy=new B.C("You build a machine. A little light runs along the wires, and every part it touches does something.",null,Aj.X0,null,null,null,null,null,null,null,null,null)
D.hgX=new B.C("Tap it to change its setting. Drag from the right dot to connect.",null,A.ma,null,null,null,null,null,null,null,null,null)
D.hi3=new B.C("TOOLBOX",null,Ag.acy,null,null,null,null,null,null,null,null,null)
D.hGx=new B.bg("electronics-part-card",x.W)
D.hGz=new B.bg("device-learn-more",x.W)
D.hGF=new B.bg("device-remote",x.W)
D.hGK=new B.bg("device-picture",x.W)
D.hHe=new B.bg("electronics-part-about",x.W)
D.hHl=new B.bg("body-loading",x.W)
D.hHr=new B.bg("device-fullscreen",x.W)
D.hHO=new B.bg("core-protocol-back",x.W)
D.hHT=new B.bg("core-protocol-title-frame",x.W)})();(function staticFields(){$.hEI=null
$.hEE=null
$.hEF=null
$.hLs=0
$.iej=B.S(x.N,B.as("j1"))
$.ieS=B.S(x.N,B.as("j1"))
$.aQJ=B.S(x.N,B.as("j1"))
$.hHr=A.aA})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"iMF","bJ_",()=>{var u="led"
return B.a([C.aB5("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fAi(),u),C.aB5("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fAj(),u),C.aB5("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fAk(),u),C.aB5("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fAr(),u),C.aB5("Not both","Make the light go OFF only when both switches are ON.",2,new C.fAs(),u),C.aB5("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.fAt(),"buzzer")],B.as("N<beL>"))})
w($,"iN6","bJ0",()=>B.a([C.RI("UNIVERSE","Earth, space and gravity",A.QX,A.aH,new C.fAJ()),C.RI("ELECTRONICS LAB","Batteries, wires, real circuits",Ap.vr,A.aH,new C.fAK()),C.RI("DISCOVERY LAB","Body Explorer: a real 3D human",D.bTP,A.bf,new C.fAL()),C.RI("TOOLBOX","Converter, clock, games",H.arr,A.cW,new C.fAM()),C.RI("REACTION LAB","Wire parts together",A.DV,A.bw,new C.fAN()),C.RI("SPARK PAINTER","Paint with light",A.Ig,A.c5,new C.fAO()),C.RI("ROCKET LANDER","Land softly on the pad",A.p3,A.aH,new C.fAP()),C.RI("TITLE ANIMATOR","Make a moving title",A.xw,A.bu,new C.fAQ()),C.RI("CIRCUIT LAB","Connect logic, learn it",A.a4s,A.cw,new C.fAR())],B.as("N<bxc>")))
w($,"iOU","qS",()=>{var u,t,s=B.S(x.N,x.C)
for(u=0;u<76;++u){t=D.TF[u]
s.n(0,t.a,t)}return s})
v($,"iiV","hUq",()=>B.apO(0))
w($,"iMn","hUr",()=>{var u=B.crQ()
u.sez(0,A.c.j(0.06))
u.c=2.2
u.d=A.bG
return u})
w($,"iMG","ak0",()=>B.a([C.GI("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fAu()),C.GI("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fAv()),C.GI("Spin the motor","A battery and a motor in a loop will make it spin.",new C.fAw()),C.GI("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.fAx()),C.GI("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fAy()),C.GI("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fAl()),C.GI("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fAm()),C.GI("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fAn()),C.GI("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fAo()),C.GI("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fAp()),C.GI("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fAq())],B.as("N<beM>")))
w($,"iN8","hUV",()=>B.a([C.a2K("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aQ,A.ca,new C.fAZ()),C.a2K("Focus Timer","Work, then rest","\u23f1\ufe0f",A.c1,A.bE,new C.fB_()),C.a2K("Breathe","Calm down in a minute","\ud83e\udee7",A.fY,A.cG,new C.fB0()),C.a2K("Draw Pad","Sketch and share","\ud83c\udfa8",A.bB,A.b_,new C.fB1()),C.a2K("Memory Match","Find the pairs","\ud83c\udccf",A.aH,A.ch,new C.fB2()),C.a2K("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bu,A.bj,new C.fB3()),C.a2K("Tip & Split","Share the bill","\ud83e\uddfe",A.bf,A.b5,new C.fB4()),C.a2K("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bl,A.az,new C.fB5())],B.as("N<byw>")))})()};
(a=>{a["ibGeCmhTN5WDdOr0CQT+q9gK6wY="]=a.current})($__dart_deferred_initializers__);