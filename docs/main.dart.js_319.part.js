((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,A0,A6,A1,A2,H,V,A7,W,P,A3,I,A8,A4,A9,X,Aa,O,Ab,Ac,Y,Q,Z,Ad,N,Ae,Af,R,Ag,Ah,M,S,Ai,E,F,K,C={
hr2(b4,b5,b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=null
if(b5===D.aiS)return b6.aKa(b4)
w=D.cYo[b5.a]
v=b4.gbb(0)
u=b4.gcn(0)
t=b6.geD()
s=B.hq(b3,b3,A.c7,0,A.e0,v,b3,0,1,t,A.c7,u,!1)
r=B.Ib(b4,!1,!1)
for(q=w.length,p=t.b,o=2<p,n=1<p,m=0<p,l=t.c,k=0;k<v;++k)for(j=0;j!==u;++j){i=r.a
h=i==null?b3:i.dQ(j,k,b3)
if(h==null)h=new B.iq()
g=A.k.N(h.h(0,0))
f=A.k.N(h.h(0,1))
e=A.k.N(h.h(0,2))
d=b6.bmT(g,f,e)
i=s.a
if(i!=null)i.mT(j,k,d)
a0=m?l[d*p]:0
a1=n?l[d*p+1]:0
a2=o?l[d*p+2]:0
a3=g-a0
a4=f-a1
a5=e-a2
if(a3===0&&a4===0&&a5===0)continue
for(a6=0;a6!==q;++a6){i=w[a6]
a7=A.k.N(i[1])
a8=A.k.N(i[2])
a9=a7+j
b0=!1
if(a9>=0)if(a9<u){a9=a8+k
a9=a9>=0&&a9<v}else a9=b0
else a9=b0
if(a9){b1=i[0]
i=r.a
b2=i==null?b3:i.dQ(j+a7,k+a8,b3)
if(b2==null)b2=new B.iq()
b2.sb2(0,b2.gb2(b2)+a3*b1)
b2.sbc(b2.gbc()+a4*b1)
b2.sb9(0,b2.gb9(b2)+a5*b1)}}}return s},
aUz:function aUz(d,e){this.a=d
this.b=e},
bST:function bST(d,e,f,g){var _=this
_.a=d
_.b=e
_.e=f
_.f=g
_.y=_.x=_.w=null
_.Q=_.z=$
_.db=_.cy=_.cx=_.CW=_.ch=_.ay=_.ax=_.at=_.as=0
_.dx=!1
_.dy=$
_.fr=0
_.fx=null},
bSU:function bSU(d,e){this.a=d
this.b=e},
co0:function co0(d,e){this.a=d
this.b=e},
bAb(d){return C.hWQ(d)},
hWQ(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bAb=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.r1(B.nc(""),d,A.hN,null,null).da(0,A.ZB),$async$bAb)
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
return B.i($async$bAb,v)},
i7L(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.QV[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cT(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.af(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.fW(D.QV,new C.fBb())
if(w==null)w=A.d.gI(D.QV)
s=B.U(x.N,x.dV)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.M)(r),++u){l=r[u].a
k=l[0]
l=$.qq().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.M)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gI(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.ake(w.a,w.b,m,w,s,!1)},
i1k(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.N(D.Rk,new C.fqL(),x.bd).aH(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
ifH(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cu(b2,"{")
v=A.a.oM(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.X.aN(0,A.a.aq(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aY(a5)
r=0
for(a6=x.j,a7=J.aW(a6.a(J.r(u,"parts"))),a8=x.i;a7.C();){q=a7.gR(a7)
p=B.w(J.r(q,"kind"))
o=B.w(J.r(q,"id"))
if(!$.qq().aj(0,p)||J.f0(s,o)||J.ad(t)>=8)continue
J.cc(s,o)
n=B.U(a5,a8)
for(a9=0;a9<4;++a9){m=D.drv[a9]
l=J.r(q,m)
if(typeof l=="number")J.aI(n,m,l)}k=A.k.E(typeof J.r(q,"x")=="number"?B.e5(J.r(q,"x")):0.2+A.k.F(r,3)*0.3,0.16,0.84)
j=A.k.E(typeof J.r(q,"y")=="number"?B.e5(J.r(q,"y")):0.25+A.k.ao(r,3)*0.3,0.1,0.9)
J.cc(t,new B.ea([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aW(a6.a(J.r(u,"wires")));a5.C();){h=a5.gR(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.w(J.r(g,0))
e=B.w(J.r(g,2))
d=A.o.E(A.k.N(B.e5(J.r(g,1))),0,1)
a0=A.o.E(A.k.N(B.e5(J.r(g,3))),0,1)
if(J.f0(s,f)&&J.f0(s,e)&&!J.A(f,e))J.cc(i,new B.cw([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.bM.a(J.r(u,"steps"))
a0=J.aW(a0==null?A.cv:a0)
while(a0.C()){a2=a0.gR(a0)
J.cc(a1,B.w(a2))}a3=a1
a0=J.r(u,"title")
a0=B.w(a0==null?"My invention":a0)
a1=J.r(u,"explain")
a4=new C.mJ(a0,B.w(a1==null?"":a1),t,i,A.Y)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.r(u,"honest")
a5=B.w(a5==null?"":a5)
return new C.ake(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
i6l(d){var w,v,u=C.hbv()
d.B(u)
for(w=0;w<60;++w)u.vk(0,0.03333333333333333)
v=u.a
return A.d.b3(v,new C.fxV(u))&&!A.d.d5(v,new C.fxW())},
i6k(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.U(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.M)(l),++u){t=l[u];++v
k.n(0,t.a,$.qq().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.M)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.w(t.e)+" V")
if(p==="resistor")q.push(""+A.k.V(t.r)+" ohms")
if(A.d.t(D.dpK,p))q.push("level "+A.k.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.k.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aH(q,", ")+")"
s.push(B.w(p)+n+": "+o+", current "+A.k.ac(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.M)(w),++u){m=w[u]
l.push(B.w(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.w(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aH(s,"\n")+"\nWires: "+A.d.aH(l,"; ")},
hVm(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.M)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aH(v,"\n")+"\n\n"}v=A.d.aH(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
i7K(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qq().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.Rk[u]
if(A.d.b3(w,new C.fB8(s)))if(!B.cT(r,s.b.toLowerCase(),0))v=B.cT(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.af("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.Z(w,new C.fB9(e),B.T(w).k("Z<1>")).gan(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.af("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.k.ac(A.d.cI(w,0,new C.fBa())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.af("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gI(w)
w=$.qq().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
ake:function ake(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fBb:function fBb(){},
fqL:function fqL(){},
fxV:function fxV(d){this.a=d},
fxW:function fxW(){},
fB8:function fB8(d){this.a=d},
fB9:function fB9(d){this.a=d},
fBa:function fBa(){},
VR:function VR(d,e){this.c=d
this.a=e},
bkT:function bkT(d,e,f,g,h){var _=this
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
ecU:function ecU(d){this.a=d},
ecV:function ecV(d,e,f){this.a=d
this.b=e
this.c=f},
ecW:function ecW(d){this.a=d},
ed6:function ed6(d){this.a=d},
ed7:function ed7(d,e){this.a=d
this.b=e},
ed2:function ed2(d){this.a=d},
ed0:function ed0(d,e){this.a=d
this.b=e},
ed1:function ed1(d,e,f){this.a=d
this.b=e
this.c=f},
ed3:function ed3(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ecZ:function ecZ(d){this.a=d},
ed_:function ed_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ed4:function ed4(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ecY:function ecY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ed5:function ed5(d,e){this.a=d
this.b=e},
ecX:function ecX(d,e){this.a=d
this.b=e},
eda:function eda(d){this.a=d},
ed9:function ed9(d){this.a=d},
edb:function edb(d){this.a=d},
ed8:function ed8(d){this.a=d},
edc:function edc(d,e){this.a=d
this.b=e},
edd:function edd(d,e){this.a=d
this.b=e},
ede:function ede(d,e){this.a=d
this.b=e},
edf:function edf(d,e){this.a=d
this.b=e},
bAw(d,e,f){var w=null
return B.x(B.a([B.d(d,w,w,w,w,w,w,D.fhz,w,w,w),B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p)},
hp5(d,e,f,g){var w=null,v=B.m(24),u=B.J(f.j(0.6),A.r,1)
return B.at(B.p(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.L,w,w),A.am,B.d(e,w,w,w,w,w,w,A.wW,A.L,w,w),A.aA,B.bW(A.fH,g,A.bq,w,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new B.o(D.bdl,w,u,v,w,w,A.n),w,w,w,w,A.a9,w,w,w),w,w,w)},
Gm:function Gm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
v1:function v1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Wd:function Wd(d){this.a=d},
aEW:function aEW(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.iK$=h
_.oF$=i
_.ni$=j
_.iL$=k
_.bz$=l
_.aa$=m
_.c=_.a=null},
er9:function er9(){},
ert:function ert(d){this.a=d},
ers:function ers(d,e){this.a=d
this.b=e},
eru:function eru(){},
erv:function erv(){},
erb:function erb(d,e,f){this.a=d
this.b=e
this.c=f},
era:function era(d,e){this.a=d
this.b=e},
er0:function er0(d){this.a=d},
er1:function er1(d){this.a=d},
er2:function er2(d){this.a=d},
er3:function er3(d){this.a=d},
er4:function er4(d){this.a=d},
er5:function er5(d){this.a=d},
er6:function er6(d){this.a=d},
er7:function er7(d){this.a=d},
er8:function er8(d){this.a=d},
eqZ:function eqZ(d){this.a=d},
er_:function er_(d){this.a=d},
eqY:function eqY(d){this.a=d},
erm:function erm(d,e){this.a=d
this.b=e},
erh:function erh(d){this.a=d},
eri:function eri(d){this.a=d},
ere:function ere(d){this.a=d},
erj:function erj(d){this.a=d},
erd:function erd(d){this.a=d},
erk:function erk(d){this.a=d},
erl:function erl(d){this.a=d},
erc:function erc(d){this.a=d},
ern:function ern(d,e){this.a=d
this.b=e},
erg:function erg(d,e){this.a=d
this.b=e},
ero:function ero(d){this.a=d},
erp:function erp(d){this.a=d},
erq:function erq(d){this.a=d},
err:function err(d){this.a=d},
erf:function erf(d){this.a=d},
bhY:function bhY(d,e){this.b=d
this.a=e},
aMO:function aMO(){},
byb:function byb(){},
cKw(){var w=0,v=B.j(x.e3),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cKw=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.r3().jM(0,"assets/data/body3d.bin"),$async$cKw)
case 3:d=a1
$.hkm=J.eG(A.dH.gaR(d),d.byteOffset,d.byteLength)
t=B.aT_(d)
s=t.getUint32(4,!0)
r=B.a([],x.m)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.jw(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.de7[i]
g=B.b1((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a3r(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b0C))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.baX(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cKw,v)},
aSN:function aSN(d,e,f){this.a=d
this.b=e
this.c=f},
a3r:function a3r(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
baX:function baX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
UK:function UK(d){this.a=d},
aDr:function aDr(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.iK$=s
_.oF$=t
_.ni$=u
_.iL$=v
_.bz$=w
_.aa$=a0
_.c=_.a=null},
dKs:function dKs(d){this.a=d},
dKr:function dKr(d,e){this.a=d
this.b=e},
dK4:function dK4(d,e){this.a=d
this.b=e},
dK5:function dK5(){},
dKt:function dKt(){},
dK6:function dK6(d,e){this.a=d
this.b=e},
dK7:function dK7(d){this.a=d},
dK8:function dK8(){},
dK9:function dK9(d){this.a=d},
dKb:function dKb(d,e){this.a=d
this.b=e},
dKa:function dKa(d){this.a=d},
dK1:function dK1(d,e,f){this.a=d
this.b=e
this.c=f},
dK2:function dK2(d){this.a=d},
dK3:function dK3(d){this.a=d},
dKi:function dKi(d){this.a=d},
dKj:function dKj(d,e){this.a=d
this.b=e},
dKk:function dKk(d,e){this.a=d
this.b=e},
dKl:function dKl(d){this.a=d},
dKh:function dKh(d,e){this.a=d
this.b=e},
dKm:function dKm(d,e){this.a=d
this.b=e},
dKg:function dKg(d,e){this.a=d
this.b=e},
dKn:function dKn(d){this.a=d},
dKf:function dKf(d){this.a=d},
dKo:function dKo(d){this.a=d},
dKe:function dKe(d){this.a=d},
dKp:function dKp(d){this.a=d},
dKd:function dKd(d){this.a=d},
dKq:function dKq(d){this.a=d},
dKc:function dKc(d){this.a=d},
aLY:function aLY(){},
aLZ:function aLZ(){},
c4k:function c4k(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c4l:function c4l(d,e){this.a=d
this.b=e},
c4m:function c4m(d){this.a=d},
ayP(d,e,f,g,h){return new C.bbH(d,e,f,g,h)},
h25(d,e,f,g,h,i){return $.hSK.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.cRs(d,e,f,i,g,h))},
yj:function yj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
CA:function CA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ns:function ns(d,e,f){this.a=d
this.b=e
this.c=f},
bbH:function bbH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fkh:function fkh(){},
fki:function fki(){},
fkj:function fkj(){},
fkq:function fkq(){},
fkr:function fkr(){},
fks:function fks(){},
UP:function UP(d){this.a=d},
aDt:function aDt(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.iK$=m
_.oF$=n
_.ni$=o
_.iL$=p
_.bz$=q
_.aa$=r
_.c=_.a=null},
dM7:function dM7(d){this.a=d},
dLM:function dLM(d,e){this.a=d
this.b=e},
dLP:function dLP(){},
dM8:function dM8(){},
dLK:function dLK(d,e){this.a=d
this.b=e},
dLL:function dLL(d,e){this.a=d
this.b=e},
dLQ:function dLQ(d,e,f){this.a=d
this.b=e
this.c=f},
dLF:function dLF(){},
dLG:function dLG(){},
dLH:function dLH(d){this.a=d},
dLI:function dLI(d,e){this.a=d
this.b=e},
dLJ:function dLJ(d,e,f){this.a=d
this.b=e
this.c=f},
dLR:function dLR(){},
dLS:function dLS(d,e){this.a=d
this.b=e},
dLT:function dLT(d){this.a=d},
dLO:function dLO(d,e){this.a=d
this.b=e},
dLN:function dLN(d){this.a=d},
dLE:function dLE(d,e,f){this.a=d
this.b=e
this.c=f},
dM1:function dM1(d){this.a=d},
dM0:function dM0(d){this.a=d},
dM2:function dM2(d){this.a=d},
dM_:function dM_(d){this.a=d},
dLY:function dLY(d){this.a=d},
dLZ:function dLZ(d){this.a=d},
dLX:function dLX(d){this.a=d},
dLU:function dLU(d){this.a=d},
dLW:function dLW(d){this.a=d},
dM3:function dM3(d,e){this.a=d
this.b=e},
dM4:function dM4(d,e){this.a=d
this.b=e},
dM5:function dM5(d){this.a=d},
dLV:function dLV(d){this.a=d},
dM6:function dM6(d,e){this.a=d
this.b=e},
bc_:function bc_(d,e){this.b=d
this.a=e},
cRs:function cRs(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aM2:function aM2(){},
by_:function by_(){},
hJA(){return new C.NE(null)},
QA(d,e,f,g,h){return new C.btz(d,e,f,g,h)},
brY(d,e,f){return A.k.E((d-e)/(f-e),0,1)},
h2B(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
NE:function NE(d){this.a=d},
KH:function KH(d,e){this.a=d
this.b=e},
AI:function AI(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aDK:function aDK(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dRY:function dRY(d,e){this.a=d
this.b=e},
dRX:function dRX(d){this.a=d},
dS_:function dS_(d,e){this.a=d
this.b=e},
dRZ:function dRZ(d){this.a=d},
btz:function btz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fkI:function fkI(){},
fkJ:function fkJ(){},
fkK:function fkK(){},
fkL:function fkL(){},
fkM:function fkM(){},
fkN:function fkN(){},
fkO:function fkO(){},
fkP:function fkP(){},
fkQ:function fkQ(){},
brZ:function brZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f0n:function f0n(d){this.a=d},
f0m:function f0m(d,e){this.a=d
this.b=e},
f0k:function f0k(d){this.a=d},
f0o:function f0o(d){this.a=d},
f0l:function f0l(d,e){this.a=d
this.b=e},
af9:function af9(d,e,f){this.c=d
this.d=e
this.a=f},
ae1:function ae1(d,e,f){this.c=d
this.d=e
this.a=f},
Qt:function Qt(d,e,f,g,h,i,j,k,l,m){var _=this
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
bsY:function bsY(d,e){this.b=d
this.a=e},
bst:function bst(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
baF:function baF(d,e){this.b=d
this.a=e},
aHZ:function aHZ(d,e){this.c=d
this.a=e},
aI_:function aI_(d,e,f){var _=this
_.e=_.d=$
_.f=d
_.z=_.y=_.x=_.w=_.r=$
_.Q=1
_.at=_.as=!0
_.ax=0
_.ay=!1
_.cO$=e
_.b5$=f
_.c=_.a=null},
f03:function f03(d){this.a=d},
f02:function f02(d){this.a=d},
f01:function f01(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f00:function f00(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f_Z:function f_Z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f_Y:function f_Y(d,e,f){this.a=d
this.b=e
this.c=f},
f0_:function f0_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f_X:function f_X(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f0b:function f0b(d){this.a=d},
f0a:function f0a(d){this.a=d},
f0c:function f0c(d,e){this.a=d
this.b=e},
f0d:function f0d(d,e){this.a=d
this.b=e},
f0e:function f0e(d,e){this.a=d
this.b=e},
f09:function f09(d,e,f){this.a=d
this.b=e
this.c=f},
f0f:function f0f(d,e,f){this.a=d
this.b=e
this.c=f},
f08:function f08(d){this.a=d},
f04:function f04(d){this.a=d},
f0g:function f0g(d){this.a=d},
f0h:function f0h(d){this.a=d},
f07:function f07(d,e){this.a=d
this.b=e},
f0i:function f0i(d,e){this.a=d
this.b=e},
f06:function f06(d,e){this.a=d
this.b=e},
f0j:function f0j(d,e){this.a=d
this.b=e},
f05:function f05(d,e){this.a=d
this.b=e},
f_V:function f_V(){},
f_W:function f_W(){},
brB:function brB(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
br1:function br1(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bbk:function bbk(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
br3:function br3(d,e,f){this.b=d
this.c=e
this.a=f},
bv2:function bv2(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aND:function aND(){},
hqy(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a8(0,new B.t(w,0)),u=e.aF(0,new B.t(w,0)),t=1-f,s=3*t
return d.aI(0,t*t*t).a8(0,v.aI(0,s*t*f)).a8(0,u.aI(0,s*f*f)).a8(0,e.aI(0,f*f*f))},
bhX(d,e,f,g,h,i){return $.hTk.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.dmA(d,e,f,i,g,h))},
a0G:function a0G(d,e){this.a=d
this.b=e},
qd:function qd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
qW:function qW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
CE:function CE(d,e){this.a=d
this.b=e},
ZD:function ZD(d,e){this.a=d
this.b=e},
aeY:function aeY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a0T:function a0T(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
CO:function CO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
abW:function abW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acb:function acb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ae4:function ae4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bhV:function bhV(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.S$=t
_.bv$=_.bJ$=0},
dmE:function dmE(d){this.a=d},
dmF:function dmF(d){this.a=d},
dmB:function dmB(d,e){this.a=d
this.b=e},
dmC:function dmC(d){this.a=d},
dmD:function dmD(d){this.a=d},
dmG:function dmG(d){this.a=d},
dmH:function dmH(d){this.a=d},
dmI:function dmI(d){this.a=d},
dmJ:function dmJ(d){this.a=d},
dmK:function dmK(d){this.a=d},
dmL:function dmL(d){this.a=d},
dmM:function dmM(d){this.a=d},
dmN:function dmN(d){this.a=d},
dmO:function dmO(d){this.a=d},
G7:function G7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Wc:function Wc(d){this.a=d},
aEV:function aEV(d,e,f,g,h,i,j){var _=this
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
_.bz$=i
_.aa$=j
_.c=_.a=null},
equ:function equ(d){this.a=d},
eqj:function eqj(d){this.a=d},
eql:function eql(){},
eqm:function eqm(){},
eqp:function eqp(){},
eqq:function eqq(d,e,f){this.a=d
this.b=e
this.c=f},
eqr:function eqr(d){this.a=d},
eqs:function eqs(d){this.a=d},
eqn:function eqn(){},
eqo:function eqo(d){this.a=d},
eqU:function eqU(d){this.a=d},
eqt:function eqt(){},
eqf:function eqf(d){this.a=d},
eqw:function eqw(d){this.a=d},
eqv:function eqv(d){this.a=d},
eqy:function eqy(){},
eqx:function eqx(d,e){this.a=d
this.b=e},
eqi:function eqi(){},
eqg:function eqg(d){this.a=d},
eqh:function eqh(d){this.a=d},
eqS:function eqS(d){this.a=d},
eqR:function eqR(d){this.a=d},
eqT:function eqT(d){this.a=d},
eqI:function eqI(d,e){this.a=d
this.b=e},
eqQ:function eqQ(d){this.a=d},
eqO:function eqO(d){this.a=d},
eqP:function eqP(d){this.a=d},
eqN:function eqN(d){this.a=d},
eqM:function eqM(d){this.a=d},
eqJ:function eqJ(d){this.a=d},
eqK:function eqK(d){this.a=d},
eqL:function eqL(d){this.a=d},
eqk:function eqk(){},
eqE:function eqE(d){this.a=d},
eqF:function eqF(d){this.a=d},
eqD:function eqD(d){this.a=d},
eqG:function eqG(d){this.a=d},
eqC:function eqC(d){this.a=d},
eqH:function eqH(d){this.a=d},
eqB:function eqB(d){this.a=d},
eqA:function eqA(d){this.a=d},
eqz:function eqz(d,e){this.a=d
this.b=e},
bhW:function bhW(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dmA:function dmA(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aMM:function aMM(){},
bmk:function bmk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Qi:function Qi(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Wr:function Wr(d){this.a=d},
blr:function blr(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=$
_.x=h
_.y=0
_.z="glow"
_.Q=0
_.as=12
_.at=i
_.ax=null
_.ay=!1
_.ch=!0
_.CW=0
_.bz$=j
_.aa$=k
_.c=_.a=null},
eCA:function eCA(d){this.a=d},
eCy:function eCy(d){this.a=d},
eCz:function eCz(){},
eCb:function eCb(){},
eCa:function eCa(){},
eCk:function eCk(d,e){this.a=d
this.b=e},
eCm:function eCm(d){this.a=d},
eCq:function eCq(d){this.a=d},
eCl:function eCl(d){this.a=d},
eCr:function eCr(d){this.a=d},
eCs:function eCs(d){this.a=d},
eCt:function eCt(d,e){this.a=d
this.b=e},
eCj:function eCj(d,e){this.a=d
this.b=e},
eCu:function eCu(d){this.a=d},
eCi:function eCi(d){this.a=d},
eCv:function eCv(d,e){this.a=d
this.b=e},
eCh:function eCh(d,e){this.a=d
this.b=e},
eCw:function eCw(d){this.a=d},
eCg:function eCg(d,e){this.a=d
this.b=e},
eCx:function eCx(d){this.a=d},
eCf:function eCf(d){this.a=d},
eCn:function eCn(d){this.a=d},
eCe:function eCe(d){this.a=d},
eCo:function eCo(d){this.a=d},
eCd:function eCd(d){this.a=d},
eCp:function eCp(d,e){this.a=d
this.b=e},
eCc:function eCc(d,e){this.a=d
this.b=e},
bsT:function bsT(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
aMV:function aMV(){},
hvM(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aF(0,e).gcH()*0.1
return new B.t((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
hbv(){var w=B.a([],x.bz),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a4K(w,v,u,A.cZ,B.U(x.N,x.y))},
hDo(d,e,f){var w=d.c,v=e===0?-1:1
return new B.t(w*f.a+v*C.hbw(d),d.d*f.b)},
hbw(d){return 42+(D.me.aj(0,d.b)?(d.ch-1)*38:0)},
eg:function eg(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
tE:function tE(d,e,f,g){var _=this
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
aaB:function aaB(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
abI:function abI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a4K:function a4K(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bNG:function bNG(){},
bNR:function bNR(d){this.a=d},
bNM:function bNM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bNS:function bNS(d){this.a=d},
bNT:function bNT(d){this.a=d},
bNV:function bNV(d){this.a=d},
bNW:function bNW(d){this.a=d},
bNU:function bNU(d){this.a=d},
bNX:function bNX(d,e,f){this.a=d
this.b=e
this.c=f},
bNY:function bNY(d){this.a=d},
bNI:function bNI(d){this.a=d},
bNJ:function bNJ(d){this.a=d},
bNH:function bNH(d){this.a=d},
bNK:function bNK(d,e,f){this.a=d
this.b=e
this.c=f},
bNL:function bNL(d){this.a=d},
bNF:function bNF(d){this.a=d},
bNZ:function bNZ(d,e){this.a=d
this.b=e},
bNN:function bNN(d,e){this.a=d
this.b=e},
bNQ:function bNQ(d){this.a=d},
bNP:function bNP(d){this.a=d},
bNO:function bNO(d){this.a=d},
aiZ:function aiZ(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bIi:function bIi(){},
bIj:function bIj(){},
mJ:function mJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cpQ:function cpQ(d){this.a=d},
ifC(d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6=null,c7=d4.fx>0&&!d4.x,c8=new C.fMX(),c9=new C.fMZ(),d0=new C.fN_(),d1=new C.fMY(),d2=d4.b
switch(d2){case"fridge":w=d0.$4(-16,-28,32,54)
d3.az(w,d1.$3(new B.a3(w.a,w.b,w.c,w.d),A.bN,A.bM))
d3.bo(D.eix,D.efr,c9.$2(A.dE,1.4))
d3.bo(D.ef8,D.ef7,c9.$2(A.br,2.4))
d3.bo(D.ef9,X.aJ1,c9.$2(A.br,2.4))
if(c7){d2=c8.$1(A.fh.j(0.5))
d2.z=A.Im
d3.ad(D.eeS,14,d2)
for(d2=d5*0.6,v=0;v<3;++v){u=A.k.F(d2+v/3,1)
d6.$5(d3,"\u2744",new B.t(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d3.az(d0.$4(-22,-26,44,50),d1.$3(D.aP4,A.aP,A.cr))
d3.ad(A.cH,16,c8.$1(A.br))
d3.ad(A.cH,13,c8.$1(c7?A.aQ.j(0.85):A.M))
if(c7){d2=d3.a
J.bm(d2.save())
d2.translate(0,4)
d3.ie(0,d4.y*0.6)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.ad,3).G()
d2.drawLine.apply(d2,[0,0,s*11,t*11,r])
r.delete()}d2.restore()
for(t=d5*0.8,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
s=Math.sin(v*2+d5)
r=c8.$1(A.c.j(0.8*(1-u))).G()
d2.drawCircle(s*9,4-u*12,1.6+u*2,r)
r.delete()}}d3.ad(D.eip,2.4,c8.$1(c7?A.be:A.al))
d3.ad(D.ejg,2.4,c8.$1(A.al))
return!0
case"blender":d3.az(d0.$5(-14,14,28,12,4),c8.$1(A.e7))
d2=$.S().r
t=x.v
q=new B.aF(d2,A.ag,c6,c6,B.a([],t))
q.D(new B.aX(-16,-26))
q.D(new B.aq(16,-26))
q.D(new B.aq(12,14))
q.D(new B.aq(-12,14))
q.D(new B.bs())
d3.aG(q,c8.$1(A.fh.j(0.35)))
if(c7){d2=new B.aF(d2,A.ag,c6,c6,B.a([],t))
d2.D(new B.aX(-14,-10))
d2.D(new B.aq(14,-10))
d2.D(new B.aq(12,14))
d2.D(new B.aq(-12,14))
d2.D(new B.bs())
d3.aG(d2,c8.$1(A.aw.j(0.7)))}d3.aG(q,c9.$2(A.ad,1.6))
d2=d3.a
J.bm(d2.save())
d2.translate(0,10)
d3.ie(0,d4.y)
d3.bo(D.a79,D.aJn,c9.$2(A.bO,3))
d2.restore()
if(c7)for(t=d5*9,s=d5*1.6,v=0;v<3;++v){p=Math.sin(t+v*2)
o=A.k.F(s+v*0.33,1)
r=c8.$1(A.eO).G()
d2.drawCircle(p*9,-10-o*12,2.4,r)
r.delete()}return!0
case"drone":d3.az(d0.$5(-10,-4,20,10,4),c8.$1(A.aJ))
d3.ad(A.i6,3,c8.$1(c7?A.be:A.al))
n=c7?-3+Math.sin(d5*4)*2:4
for(d2=d3.a,t=-4+n,s=-6+n,m=0;m<2;++m){l=F.a4P[m]
r=c9.$2(A.br,3).G()
d2.drawLine.apply(d2,[l*0.4,1,l,t,r])
r.delete()
J.bm(d2.save())
d2.translate(l,s)
r=c9.$2(A.c.j(c7?0.35:0.9),3).G()
d2.drawLine.apply(d2,[-11,0,11,0,r])
r.delete()
if(c7){p=B.bJ(A.I,6,24+Math.sin(d4.y*3)*4)
r=c8.$1(A.c.j(0.25)).G()
d2.drawOval(B.bF(p),r)
r.delete()}d2.restore()}return!0
case"drill":w=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
w.D(new B.aX(-24,-12))
w.D(new B.aq(10,-12))
w.D(new B.aq(10,2))
w.D(new B.aq(-2,2))
w.D(new B.aq(-6,22))
w.D(new B.aq(-16,22))
w.D(new B.aq(-14,2))
w.D(new B.aq(-24,2))
w.D(new B.bs())
d3.aG(w,d1.$3(D.eZq,A.aU,A.d1))
d3.aP(D.eYx,c8.$1(A.dv))
d2=d3.a
J.bm(d2.save())
d2.translate(18,-5)
d3.ie(0,d4.y*2)
d3.bo(A.I,D.efi,c9.$2(A.bO,2.4))
d3.bo(A.a76,D.efh,c9.$2(A.ii,1))
d2.restore()
if(c7)for(t=d5*3,s=d5*20,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
p=Math.sin(v*3+s)
r=c8.$1(A.dP.j(1-u)).G()
d2.drawCircle(34+u*6,-5+p*6*u,1.4,r)
r.delete()}return!0
case"torch":if(c7){v=A.k.E(0.5+0.12*(Math.abs(d4.dy)-2),0.5,1)
d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aX(16,-6))
d2.D(new B.aq(52,-26))
d2.D(new B.aq(52,18))
d2.D(new B.aq(16,4))
d2.D(new B.bs())
d3.aG(d2,c8.$1(A.bL.j(0.35*v)))}d3.az(d0.$5(-26,-6,30,12,3),d1.$3(D.eZw,A.bm,A.cp))
k=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
k.D(new B.aX(4,-6))
k.D(new B.aq(18,-12))
k.D(new B.aq(18,12))
k.D(new B.aq(4,6))
k.D(new B.bs())
d3.aG(k,c8.$1(A.e7))
d3.ad(D.efn,7,c8.$1(c7?A.c:A.dv))
return!0
case"neon":d3.az(d0.$5(-30,-14,60,28,6),c8.$1(K.nd))
if(c7)j=d4.ax>0.5||A.o.F(A.k.bh(d5*17),3)!==0
else j=!1
i=j?A.c5:D.bnl
if(j){d2=d0.$5(-28,-12,56,24,6)
t=c8.$1(A.c5.j(0.35))
t.z=A.mR
d3.az(d2,t)}d3.az(d0.$5(-27,-11,54,22,5),c9.$2(i,2.2))
d6.$5(d3,"OPEN",D.eiD,i,17)
return!0
case"microwave":d3.az(d0.$4(-30,-18,60,38),d1.$3(D.eZC,A.bO,A.bm))
d2=d0.$5(-26,-14,38,30,3)
d3.az(d2,c8.$1(c7?A.bL.j(0.75):A.av))
if(c7){d2=d3.a
J.bm(d2.save())
d2.translate(-7,8)
d3.ie(0,d4.y*0.5)
d3.dO(B.bJ(A.I,7,22),c8.$1(A.d1))
d2.restore()}d3.az(d0.$5(15,-14,12,12,2),c8.$1(K.nd))
if(c7)d6.$5(d3,"0:"+A.a.aU(A.o.u(59-A.o.F(A.k.bh(d5),60)),2,"0"),D.efo,A.bj,6.5)
d3.ad(D.efE,4,c8.$1(A.dv))
return!0
case"doorbell":d3.az(d0.$5(-16,-26,32,52,8),c8.$1(A.aL))
d3.ad(A.IV,10,c8.$1(c7?A.bG:A.br))
d2=d3.a
J.bm(d2.save())
d2.translate(0,-8)
d3.ie(0,c7?Math.sin(d5*16)*0.45:0)
d6.$5(d3,"\ud83d\udd14",D.ejk,A.c,16)
d2.restore()
d3.ad(A.ko,6,c8.$1(A.d2))
d3.ad(A.ko,6,c9.$2(A.c,1.6))
if(c7)for(t=d5*14,v=1;v<=2;++v){s=B.bX(A.IV,14+v*6+A.k.F(t,6))
r=c9.$2(A.bG.j(0.9-v*0.3),1.8).G()
d2.drawArc.apply(d2,[B.bF(s),-51.56620156177409,103.13240312354819,!1,r])
r.delete()}return!0
case"camera":d3.bo(D.eiC,D.eje,c9.$2(A.br,4))
d2=d3.a
J.bm(d2.save())
d3.ie(0,c7?Math.sin(d5*0.9)*0.18:0)
d3.az(d0.$5(-24,-14,46,22,5),d1.$3(D.eZr,A.bO,A.al))
d3.ad(D.aJ5,8,c8.$1(A.av))
d3.ad(D.aJ5,4.5,c8.$1(c7?A.aQ:A.cp))
d3.ad(D.eiA,2.2,c8.$1(c7&&A.o.F(A.k.bh(d5*1.6),2)===0?A.aw:A.jL))
d2.restore()
if(c7)d6.$5(d3,"REC",D.eiL,A.aw,9)
return!0
case"console":d3.az(d0.$5(-28,-22,56,44,8),d1.$3(D.eZz,A.iR,A.fa))
d3.az(d0.$5(-20,-17,40,22,3),c8.$1(A.dJ))
if(c7){d2=d5*2.3
d3.ad(new B.t(Math.sin(d2)*14,-6+Math.cos(d5*3.1)*6),2.6,c8.$1(A.c))
t=-9+Math.sin(d2+0.4)*6
d3.aP(new B.a3(-18,t,-15.6,t+8),c8.$1(A.bj))
d2=-9+Math.sin(d2-0.4)*6
d3.aP(new B.a3(15.6,d2,18,d2+8),c8.$1(A.c5))}d3.ad(D.eiv,4,c8.$1(A.aT))
d3.ad(D.efj,2.4,c8.$1(A.aw))
d3.ad(D.efB,2.4,c8.$1(A.be))
return!0
case"heartmon":d3.az(d0.$5(-30,-22,60,44,6),c8.$1(A.av))
d3.az(d0.$5(-26,-18,52,28,3),c8.$1(A.dJ))
if(c7){d2=$.S()
t=B.a([],x.v)
h=new B.aF(d2.r,A.ag,c6,c6,t)
for(d2=d5*0.5,l=-25;l<=25;++l){u=A.k.F((l+25)/50-d2,1)
if(u<0.1)g=Math.sin(u/0.1*3.141592653589793)*-1
else if(u<0.14)g=0.6
else{s=u<0.2?-0.4:0
g=s}f=-4+g*11
if(l===-25){s=new B.aX(l,f)
t.push(s)
p=h.f
if(p!=null)s.by(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}else{s=new B.aq(l,f)
t.push(s)
p=h.f
if(p!=null)s.by(p)
s=h.e
if(s!=null)s.a.delete()
h.e=null}}d3.aG(h,c9.$2(A.bj,1.8))
d6.$5(d3,"72",D.efk,A.ha,11)
d2=d5*9
d6.$5(d3,"\u2665",D.eiQ,A.ha.j((Math.sin(d2)+1.4)/2.4),9+Math.sin(d2)*1.2)}d3.ad(D.eiF,3,c8.$1(c7?A.be:A.br))
return!0
case"aquarium":d2=d0.$5(-26,-20,52,40,4)
d3.az(d2,c8.$1(A.cw.j(c7?0.5:0.3)))
d3.az(d0.$5(-26,-20,52,40,4),c9.$2(A.ad,1.6))
d3.aP(D.eZt,c8.$1(F.tz))
if(c7){d2=d5*1.1
t=Math.sin(d2)
s=d3.a
J.bm(s.save())
s.translate(t*14,-2+Math.sin(d5*2)*3)
if(Math.cos(d2)<0)d3.p0(0,-1,1)
d3.dO(B.bJ(A.I,8,14),c8.$1(A.cR))
d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aX(-6,0))
d2.D(new B.aq(-12,-4))
d2.D(new B.aq(-12,4))
d2.D(new B.bs())
d3.aG(d2,c8.$1(A.cb))
d3.ad(D.egn,1.2,c8.$1(A.w))
s.restore()
for(d2=d5*0.7,v=0;v<5;++v){u=A.k.F(d2+v*0.2,1)
t=Math.sin(u*8+v)
p=A.o.F(v,2)
r=c9.$2(A.ad,1).G()
s.drawCircle(-18+t*2,13-u*30,1.4+p,r)
r.delete()}}return!0
case"lighthouse":d2=$.S().r
t=x.v
e=new B.aF(d2,A.ag,c6,c6,B.a([],t))
e.D(new B.aX(-9,22))
e.D(new B.aq(-5,-16))
e.D(new B.aq(5,-16))
e.D(new B.aq(9,22))
e.D(new B.bs())
d3.aG(e,d1.$3(D.f_3,A.c,A.by))
d3.aP(D.f__,c8.$1(c7?A.dP:A.br))
s=new B.aF(d2,A.ag,c6,c6,B.a([],t))
s.D(new B.aX(-7,-22))
s.D(new B.aq(0,-29))
s.D(new B.aq(7,-22))
s.D(new B.bs())
d3.aG(s,c8.$1(A.ej))
if(c7){d=Math.sin(d4.y*0.3)
d2=new B.aF(d2,A.ag,c6,c6,B.a([],t))
d2.D(new B.aX(0,-19))
t=d*34
d2.D(new B.aq(t,-26))
d2.D(new B.aq(t,-12))
d2.D(new B.bs())
d3.aG(d2,c8.$1(A.dP.j(0.45)))
d2=c8.$1(A.dP.j(0.35))
d2.z=A.Im
d3.ad(D.eeT,14,d2)}return!0
case"discoball":d3.bo(D.eeW,M.aIY,c9.$2(A.dv,1.4))
d3.ad(A.I,16,d1.$3(D.eZa,A.aP,A.al))
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
r=c8.$1(D.df8[A.o.F(v,4)].j(0.5+0.5*Math.sin(s+v))).G()
d2.drawCircle(p*a0,o*a0*0.8,1.8,r)
r.delete()}return!0
case"robot":d3.az(d0.$5(-14,-4,28,24,5),d1.$3(D.eZ7,A.cr,A.al))
d3.az(d0.$5(-12,-26,24,20,5),d1.$3(D.eZ0,A.aL,A.bM))
d3.bo(G.aIZ,D.eeX,c9.$2(A.br,1.6))
d3.ad(D.eeY,2.2,c8.$1(c7?A.aw:A.br))
a1=c7&&A.k.F(d5*0.8,1)>0.08
for(d2=d3.a,m=0;m<2;++m){l=F.a4R[m]
if(c7)t=a1?A.b9:A.eW
else t=A.cp
r=c8.$1(t).G()
d2.drawCircle(l,-17,3.2,r)
r.delete()}J.bm(d2.save())
d2.translate(14,0)
d3.ie(0,c7?-0.6+Math.sin(d5*5)*0.6:0.3)
d3.bo(A.I,D.a71,c9.$2(A.bM,4))
d2.restore()
d3.bo(D.eil,D.eiJ,c9.$2(A.bM,4))
d3.aP(D.eZZ,c8.$1(c7?A.b9.j(0.7):A.aJ))
return!0
case"toaster":a2=c7?Math.min(1,d4.ax/3):0
for(d2=-4-a2*14,t=d3.a,m=0;m<2;++m){s=d0.$5(D.azY[m]+1,d2,10,14,2)
p=B.ar(A.bL,A.d1,a2)
p.toString
r=c8.$1(p).G()
t.drawRRect(B.el(s),r)
r.delete()}d3.az(d0.$5(-24,-6,48,26,8),d1.$3(D.eZs,A.bO,A.bm))
for(m=0;m<2;++m){l=D.azY[m]
d2=d0.$5(l,-5,12,5,2)
r=c8.$1(c7?A.fr:A.av).G()
t.drawRRect(B.el(d2),r)
r.delete()
if(c7){d2=d0.$5(l,-5,12,5,2)
s=c8.$1(A.cR.j(0.5))
s.z=I.pk
r=s.G()
t.drawRRect(B.el(d2),r)
r.delete()}}d3.bo(D.efK,D.eg5,c9.$2(A.av,3))
return!0
case"ledstrip":d3.az(d0.$5(-34,-4,68,10,4),c8.$1(A.cp))
for(d2=d3.a,t=d5*90,v=0;v<9;++v){a3=A.k.F(t+v*40,360)
i=c7?new L.uC(1,a3,0.8,1).lH():A.e7
if(c7){s=c8.$1(i.j(0.45))
s.z=I.pk
r=s.G()
d2.drawCircle(-30+v*7.5,1,7,r)
r.delete()}r=c8.$1(i).G()
d2.drawCircle(-30+v*7.5,1,2.6,r)
r.delete()}d3.az(d0.$5(-40,-2,6,6,1),c8.$1(A.dv))
return!0
case"pump":d3.az(d0.$5(-16,-2,32,22,6),d1.$3(D.eZg,A.cw,A.Ff))
d3.ad(D.eiR,8,c8.$1(A.pR))
d2=d3.a
J.bm(d2.save())
d2.translate(-2,9)
d3.ie(0,d4.y)
for(v=0;v<3;++v){t=v*2.09
s=Math.cos(t)
t=Math.sin(t)
r=c9.$2(A.fh,2.4).G()
d2.drawLine.apply(d2,[0,0,s*7,t*7,r])
r.delete()}d2.restore()
t=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
t.D(new B.aX(16,6))
t.D(new B.aq(26,6))
t.D(new B.aq(26,-20))
t.D(new B.aq(10,-20))
d3.aG(t,c9.$2(A.bM,4))
if(c7){for(t=d5*0.9,v=0;v<5;++v){u=A.k.F(t+v*0.2,1)
r=c8.$1(A.he).G()
d2.drawCircle(26,6-u*26,2.2,r)
r.delete()}d3.ad(D.eh0,3.2,c8.$1(A.he.j(0.7)))}return!0
case"hairdryer":d2=d3.a
J.bm(d2.save())
d3.ie(0,-0.15)
d3.az(d0.$5(-26,-14,40,22,10),d1.$3(D.eZu,A.ig,A.tD))
d3.az(d0.$5(14,-10,12,14,3),c8.$1(A.cp))
d3.az(d0.$5(-10,6,12,22,4),c8.$1(A.e7))
d2.restore()
if(c7){for(t=d5*3,v=0;v<4;++v){u=A.k.F(t+v*0.25,1)
s=u*18
p=-10+v*5
r=c9.$2(A.c.j(1-u),1.8).G()
d2.drawLine.apply(d2,[24+s,p,32+s,p,r])
r.delete()}d2=c8.$1(A.cR.j(0.4))
d2.z=I.pk
d3.ad(D.efD,8,d2)}return!0
case"headphones":d3.e3(B.bJ(A.dB,44,44),3.141592653589793,3.141592653589793,!1,c9.$2(A.br,4))
for(d2=d3.a,t=d5*12,m=0;m<2;++m){l=F.Rx[m]
s=l-7
p=d0.$5(s,0,14,20,6)
r=d1.$3(new B.a3(s,0,s+14,20),A.bw,A.oW).G()
d2.drawRRect(B.el(p),r)
r.delete()
if(c7)for(s=l<0,v=1;v<=2;++v){p=B.bX(new B.t(l,10),10+v*5+A.k.F(t,5))
o=s?2.2:-0.9
r=c9.$2(A.eG.j(0.9-v*0.3),1.6).G()
d2.drawArc.apply(d2,[B.bF(p),o*57.29577951308232,91.67324722093173,!1,r])
r.delete()}}if(c7)d6.$5(d3,"\u266a",new B.t(-4,-8-A.k.F(d5*14,8)),A.kx,12)
return!0
case"smartwatch":d3.az(d0.$5(-8,-30,16,14,3),c8.$1(A.cp))
d3.az(d0.$5(-8,14,16,14,3),c8.$1(A.cp))
d3.az(d0.$5(-14,-17,28,32,8),d1.$3(D.eZ5,A.dv,A.e7))
d3.az(d0.$5(-11,-14,22,26,6),c8.$1(A.dJ))
if(c7){a4=new B.V(Date.now(),0,!1)
d6.$5(d3,A.a.aU(A.o.u(B.de(a4)),2,"0")+":"+A.a.aU(A.o.u(B.fN(a4)),2,"0"),D.ef1,A.bj,9.5)
g=(Math.sin(d5*9)+1)/2
d2=B.ar(A.EU,A.ha,g)
d2.toString
d6.$5(d3,"\u2665",new B.t(-8,1),d2,8+g*2)
d6.$5(d3,""+(70+A.o.F(A.k.bh(d5*2),6)),A.dB,A.c,7)}return!0
case"tablet":d3.az(d0.$5(-30,-22,60,44,6),c8.$1(K.nd))
d3.az(d0.$5(-30,-22,60,44,6),c9.$2(A.bM,1.6))
a5=d0.$5(-27,-19,54,38,3)
if(c7){d2=d3.a
J.bm(d2.save())
d2.clipRRect(B.el(a5),$.ny(),!0)
d2.translate(-27,-19)
E.Lw(d3,D.f4Q,d5,c6)
d2.restore()}else d3.az(a5,c8.$1(D.vJ))
return!0
case"buck":a6=d0.$5(-26,-22,52,42,5)
d3.az(a6,d1.$3(new B.a3(a6.a,a6.b,a6.c,a6.d),A.dI,A.d7))
d3.az(a6,c9.$2(A.aZ,1.2))
d3.ad(D.aJv,9,c8.$1(A.av))
d3.ad(D.aJv,6,c9.$2(A.d1,2))
d3.az(d0.$5(4,-2,14,10,2),c8.$1(A.av))
d3.az(d0.$5(-22,-19,44,12,2),c8.$1(A.dJ))
d2=A.k.ac(d4.db,1)
t=A.k.ac(c7?d4.dx:d4.e,1)
s=c7?A.bj:A.al
d6.$5(d3,d2+"\u2192"+t+"V",D.eha,s,8.2)
d3.ad(D.efs,2.4,c8.$1(c7?A.be:A.aJ))
d6.$5(d3,"IN",D.eiK,A.ad,6)
d6.$5(d3,"OUT",D.egT,A.ad,6)
return!0
case"regulator":a7=c7?A.k.E(d4.cy*Math.abs(d4.fr)/2.5,0,1):0
d2=d0.$5(-14,-26,28,22,3)
t=B.ar(A.bM,A.aw,a7)
t.toString
d3.az(d2,c8.$1(t))
d3.ad(G.a7_,3,c8.$1(A.aJ))
d3.az(d0.$5(-12,-4,24,18,3),d1.$3(D.eZ1,A.e7,A.hR))
d6.$5(d3,"7805",D.a79,A.ad,8)
for(d2=d3.a,m=0;m<3;++m){t=D.dls[m]-1
r=c8.$1(A.e4).G()
d2.drawRect(B.bF(new B.a3(t,14,t+2,22)),r)
r.delete()}if(a7>0.2)for(t=d5*0.9,v=0;v<3;++v){u=A.k.F(t+v*0.33,1)
r=c8.$1(A.c.j(0.5*(1-u))).G()
d2.drawCircle(-6+v*6,-28-u*12,2+u*2,r)
r.delete()}d6.$5(d3,"5V",D.ejh,A.bl,9)
return!0
case"diode":d3.bo(D.aJz,D.aJh,c9.$2(A.e4,2.4))
d3.az(d0.$5(-14,-7,28,14,6),c8.$1(A.aC.j(0.85)))
d3.aP(D.eYL,c8.$1(A.bl))
if(c7){d2=d0.$5(-14,-7,28,14,6)
t=c8.$1(A.dP.j(0.4))
t.z=A.lJ
d3.az(d2,t)}d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aX(-8,-4))
d2.D(new B.aq(-8,4))
d2.D(new B.aq(-1,0))
d2.D(new B.bs())
d3.aG(d2,c8.$1(A.aT))
d6.$5(d3,"one way",D.eiy,A.aB,8)
return!0
case"ldr":d3.bo(D.aJz,D.a79,c9.$2(A.e4,2.4))
d3.bo(D.aJn,D.aJh,c9.$2(A.e4,2.4))
d3.ad(A.I,12,c8.$1(A.d1))
d3.ad(A.I,12,c9.$2(A.rb,1.6))
d2=$.S()
t=B.a([],x.v)
a8=new B.aF(d2.r,A.ag,c6,c6,t)
a8.D(new B.aX(-8,-6))
for(v=0;v<5;++v){d2=(v&1)===0?8:-8
d2=new B.aq(d2,-6+v*3)
t.push(d2)
s=a8.f
if(s!=null)d2.by(s)
d2=a8.e
if(d2!=null)d2.a.delete()
a8.e=null}d3.aG(a8,c9.$2(A.bL,1.4))
d2=B.ar(A.br,A.dP,d4.f)
d2.toString
d6.$5(d3,"\u2600",new B.t(-6,-26),d2,14)
d6.$5(d3,""+A.k.V(20+980*(1-d4.f))+"\u03a9",D.eim,A.ad,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":A:{if("lgtv"===d2){t=A.eh
break A}if("sonytv"===d2){t=A.r3
break A}if("appletv"===d2){t=A.e4
break A}t=F.EW
break A}a9=d2==="lgtv"||d2==="appletv"
d3.az(d0.$5(-36,-24,72,a9?42:44,6),c8.$1(t))
t=a9?-35:-33
s=a9?-23:-21
p=a9?70:66
a5=d0.$5(t,s,p,a9?40:38,3)
t=a5.a
s=a5.b
if(c7){p=d3.a
J.bm(p.save())
p.clipRRect(B.el(a5),$.ny(),!0)
p.translate(t,s)
E.h7C(d3,new B.au(a5.c-t,a5.d-s),d4.at,d5,d4.ax,-1)
p.restore()
d3.ad(D.eg8,1.6,c8.$1(A.bj))}else{d3.az(a5,c8.$1(D.vJ))
p=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
p.D(new B.aX(t,s))
p.D(new B.aq(t+24,s))
p.D(new B.aq(t,s+22))
p.D(new B.bs())
d3.aG(p,c8.$1(A.c.j(0.05)))}switch(d2){case"lgtv":d3.az(d0.$5(-22,19,44,3,1.5),c8.$1(A.dv))
break
case"sonytv":for(d2=d3.a,t=x.v,m=0;m<2;++m){l=K.hx[m]
s=$.S()
p=B.a([],t)
s=new B.aF(s.r,A.ag,c6,c6,p)
p.push(new B.aX(l*30,20))
p.push(new B.aq(l*22,20))
p.push(new B.aq(l*26,26))
p.push(new B.bs())
r=c8.$1(A.dv).G()
p=s.gbw().a.snapshot()
d2.drawPath((s.e=new B.cl(p)).a,r)
r.delete()}d6.$5(d3,"SONY",D.ehO,A.bO,5.5)
break
case"appletv":d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aX(-8,18))
d2.D(new B.aq(8,18))
d2.D(new B.aq(12,25))
d2.D(new B.aq(-12,25))
d2.D(new B.bs())
d3.aG(d2,c8.$1(D.Yc))
d6.$5(d3,"Apple TV",D.ehb,A.br,4.8)
break
default:d3.az(d0.$5(-34,19,68,7,3),c8.$1(D.blF))
for(d2=d3.a,v=0;v<14;++v){t=-32+v*4.9
r=c9.$2(A.dm,0.6).G()
d2.drawLine.apply(d2,[t,20,t,25,r])
r.delete()}d6.$5(d3,"B&O",D.ejd,F.tz,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":b0=D.me.h(0,d2)
b1=b0.b===D.wK
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
J.bm(t.save())
t.clipRRect(B.el(a5),$.ny(),!0)
s=a5.a
p=a5.b
t.translate(s,p)
E.Lw(d3,new B.au(a5.c-s,a5.d-p),d5,c6)
t.restore()}else d3.az(a5,c8.$1(D.vJ))
if(b1){t=a5.b
s=a5.d
d3.bo(new B.t(0,t),new B.t(0,s),c9.$2(A.w.j(c7?0.45:0.7),0.9))}if(d2==="iphonefold"||d2==="huawei")d3.az(d0.$5(-4,a5.b+1.2,8,2.6,1.3),c8.$1(A.w))
else{d2=b1?b2/2-7:0
d3.ad(new B.t(d2,a5.b+3),1.3,c8.$1(A.w))}return!0
case"ereader":d3.az(d0.$5(-17,-28,34,52,4),c8.$1(A.e7))
d3.az(d0.$5(-14.5,-25.5,29,45,2),c8.$1(A.bO))
if(c7){d6.$5(d3,"NGMY",D.ejn,A.av,9)
for(d2=d3.a,v=0;v<9;++v){t=-9+v*3.6
s=A.o.F(v,4)===3?14:22
r=c8.$1(A.bm).G()
d2.drawRect(B.bF(new B.a3(-11,t,-11+s,t+1.4)),r)
r.delete()}d3.ad(A.a6Y,1.6,c8.$1(A.av))}return!0
case"laptop":d3.az(d0.$5(-30,-28,60,42,4),d1.$3(D.eZD,A.cr,A.bm))
b8=d0.$5(-27,-25,54,34,2)
if(c7){d2=d3.a
J.bm(d2.save())
d2.clipRRect(B.el(b8),$.ny(),!0)
t=b8.a
s=b8.b
d2.translate(t,s)
E.Lw(d3,new B.au(b8.c-t,b8.d-s),d5,c6)
d2.restore()}else d3.az(b8,c8.$1(D.vJ))
d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aX(-38,16))
d2.D(new B.aq(38,16))
d2.D(new B.aq(34,21))
d2.D(new B.aq(-34,21))
d2.D(new B.bs())
d3.aG(d2,c8.$1(D.Yc))
d3.az(d0.$5(-7,16,14,2,1),c8.$1(A.bm))
return!0
case"imac":d3.az(d0.$5(-32,-28,64,46,5),d1.$3(D.eZH,A.bN,A.cr))
b9=d0.$5(-29,-25,58,33,2)
if(c7){d2=d3.a
J.bm(d2.save())
d2.clipRRect(B.el(b9),$.ny(),!0)
t=b9.a
s=b9.b
d2.translate(t,s)
E.Lw(d3,new B.au(b9.c-t,b9.d-s),d5,c6)
d2.restore()}else d3.az(b9,c8.$1(D.vJ))
d3.ad(D.aIT,2,c8.$1(A.bM))
d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aX(-6,18))
d2.D(new B.aq(6,18))
d2.D(new B.aq(10,26))
d2.D(new B.aq(-10,26))
d2.D(new B.bs())
d3.aG(d2,c8.$1(D.Yc))
return!0
case"monitor":d3.az(d0.$5(-34,-28,68,40,3),c8.$1(A.eh))
c0=d0.$5(-32,-26,64,36,2)
if(c7){d2=d3.a
J.bm(d2.save())
d2.clipRRect(B.el(c0),$.ny(),!0)
t=c0.a
s=c0.b
d2.translate(t,s)
E.Lw(d3,new B.au(c0.c-t,c0.d-s),d5,c6)
d2.restore()}else d3.az(c0,c8.$1(D.vJ))
d3.aP(D.eZO,c8.$1(A.bm))
d3.az(d0.$5(-14,22,28,3.5,1.5),c8.$1(A.dv))
return!0
case"projector":if(c7){d2=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
d2.D(new B.aX(14,4))
d2.D(new B.aq(-32,-42))
d2.D(new B.aq(34,-42))
d2.D(new B.bs())
d3.aG(d2,c8.$1(A.dP.j(0.16)))
c1=d0.$5(-32,-46,66,26,2)
d2=d3.a
J.bm(d2.save())
d2.clipRRect(B.el(c1),$.ny(),!0)
t=c1.a
s=c1.b
d2.translate(t,s)
E.Lw(d3,new B.au(c1.c-t,c1.d-s),d5,c6)
d2.restore()}d3.az(d0.$5(-26,-4,52,24,6),d1.$3(D.eZv,A.iu,A.dv))
d3.ad(D.aJ3,7,c8.$1(A.av))
d3.ad(D.aJ3,4,c8.$1(c7?A.dP:A.cp))
for(d2=d3.a,v=0;v<4;++v){t=-20+v*4
r=c9.$2(A.dm,1).G()
d2.drawLine.apply(d2,[t,2,t,14,r])
r.delete()}return!0
case"carscreen":d3.az(d0.$5(-34,-10,68,32,12),c8.$1(A.av))
c2=d0.$5(-30,-20,60,28,8)
d3.az(c2,c8.$1(K.nd))
d3.az(c2,c9.$2(A.br,1.2))
if(c7){c3=new B.aF($.S().r,A.ag,c6,c6,B.a([],x.v))
c3.D(new B.aX(-26,4))
c3.D(new B.c4(-10,-14+Math.sin(d5)*3,6,-6))
c3.D(new B.aq(22,-16))
d3.aG(c3,c9.$2(A.aQ,2.2))
d2=A.k.F(d5*6,48)
d3.ad(new B.t(-26+d2,4-d2*0.1),2.4,c8.$1(A.bj))
d6.$5(d3,""+(88+A.o.F(A.k.bh(d5*2),5)),G.aJm,A.c,10)
d6.$5(d3,"km/h",D.egZ,A.aB,5)}return!0
case"vision":c4=d0.$5(-32,-14,64,28,13)
d3.az(c4,d1.$3(new B.a3(c4.a,c4.b,c4.c,c4.d),A.dv,A.e7))
c5=d0.$5(-29,-11,58,22,10)
if(c7){d2=d3.a
J.bm(d2.save())
d2.clipRRect(B.el(c5),$.ny(),!0)
t=c5.a
s=c5.b
d2.translate(t,s)
E.Lw(d3,new B.au(c5.c-t,c5.d-s),d5,c6)
d2.restore()
d2=c8.$1(A.bw.j(0.2))
d2.z=A.mR
d3.ad(A.I,26,d2)}else d3.az(c5,c8.$1(A.M))
d3.bo(D.eiY,D.ej2,c9.$2(A.bm,4))
d3.bo(D.ega,D.egq,c9.$2(A.bm,4))
return!0}return!1},
fMX:function fMX(){},
fMZ:function fMZ(){},
fN_:function fN_(){},
fMY:function fMY(){},
hal(d,e,f,g){return new C.aiX(d,g,f,e)},
FS(d,e,f){return new C.bbI(d,e,f)},
aiX:function aiX(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
aiY:function aiY(d,e,f,g,h,i,j,k,l,m){var _=this
_.w=_.r=_.f=_.e=_.d=null
_.x=d
_.y=e
_.z=0
_.as=_.Q=null
_.at=f
_.ax=g
_.ay=!1
_.ch=null
_.iK$=h
_.oF$=i
_.ni$=j
_.iL$=k
_.bz$=l
_.aa$=m
_.c=_.a=null},
bHX:function bHX(d,e){this.a=d
this.b=e},
bHY:function bHY(d){this.a=d},
bHW:function bHW(d){this.a=d},
bHZ:function bHZ(){},
bI_:function bI_(d){this.a=d},
bI0:function bI0(d,e,f){this.a=d
this.b=e
this.c=f},
bHV:function bHV(d,e){this.a=d
this.b=e},
bHT:function bHT(d,e){this.a=d
this.b=e},
bHU:function bHU(d,e,f){this.a=d
this.b=e
this.c=f},
bHN:function bHN(d,e){this.a=d
this.b=e},
bHO:function bHO(){},
bHP:function bHP(d,e){this.a=d
this.b=e},
bHQ:function bHQ(d,e){this.a=d
this.b=e},
bHR:function bHR(d){this.a=d},
bHS:function bHS(d){this.a=d},
bIf:function bIf(d){this.a=d},
bIg:function bIg(){},
bHq:function bHq(){},
bIh:function bIh(d,e){this.a=d
this.b=e},
bIe:function bIe(d,e,f){this.a=d
this.b=e
this.c=f},
bI9:function bI9(d){this.a=d},
bI6:function bI6(d,e,f){this.a=d
this.b=e
this.c=f},
bI7:function bI7(d,e){this.a=d
this.b=e},
bIa:function bIa(d){this.a=d},
bI4:function bI4(d,e){this.a=d
this.b=e},
bI5:function bI5(d,e){this.a=d
this.b=e},
bI8:function bI8(d){this.a=d},
bIb:function bIb(d){this.a=d},
bI2:function bI2(d,e){this.a=d
this.b=e},
bI3:function bI3(d,e){this.a=d
this.b=e},
bIc:function bIc(d){this.a=d},
bI1:function bI1(d){this.a=d},
bId:function bId(d){this.a=d},
bHr:function bHr(d,e){this.a=d
this.b=e},
bHK:function bHK(d,e){this.a=d
this.b=e},
bHM:function bHM(d,e){this.a=d
this.b=e},
bHL:function bHL(d,e){this.a=d
this.b=e},
bHx:function bHx(d,e){this.a=d
this.b=e},
bHy:function bHy(d){this.a=d},
bHw:function bHw(d){this.a=d},
bHz:function bHz(d,e,f){this.a=d
this.b=e
this.c=f},
bHv:function bHv(d,e){this.a=d
this.b=e},
bHC:function bHC(d,e){this.a=d
this.b=e},
bHD:function bHD(d,e){this.a=d
this.b=e},
bHE:function bHE(d,e){this.a=d
this.b=e},
bHF:function bHF(d,e,f){this.a=d
this.b=e
this.c=f},
bHu:function bHu(d,e){this.a=d
this.b=e},
bHG:function bHG(d,e,f){this.a=d
this.b=e
this.c=f},
bHt:function bHt(d,e){this.a=d
this.b=e},
bHH:function bHH(d,e,f){this.a=d
this.b=e
this.c=f},
bHs:function bHs(d,e){this.a=d
this.b=e},
bHI:function bHI(d){this.a=d},
bHJ:function bHJ(d){this.a=d},
bHA:function bHA(d){this.a=d},
bHB:function bHB(d){this.a=d},
bbI:function bbI(d,e,f){this.a=d
this.b=e
this.c=f},
fkt:function fkt(){},
fku:function fku(){},
fkv:function fkv(){},
fkg:function fkg(){},
fkw:function fkw(){},
fkf:function fkf(){},
fkx:function fkx(){},
fkk:function fkk(){},
fke:function fke(){},
fkl:function fkl(){},
fkd:function fkd(){},
fkm:function fkm(){},
fkc:function fkc(){},
fkn:function fkn(){},
fka:function fka(){},
fkb:function fkb(){},
fko:function fko(){},
fk8:function fk8(){},
fk9:function fk9(){},
fkp:function fkp(){},
fk7:function fk7(){},
Vq:function Vq(d){this.a=d},
aDW:function aDW(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
dWw:function dWw(d,e){this.a=d
this.b=e},
dWF:function dWF(d){this.a=d},
dWG:function dWG(){},
dWH:function dWH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dWI:function dWI(){},
dWv:function dWv(d){this.a=d},
dWu:function dWu(d,e,f){this.a=d
this.b=e
this.c=f},
dWt:function dWt(d,e){this.a=d
this.b=e},
dWr:function dWr(d){this.a=d},
dWs:function dWs(){},
dWE:function dWE(d){this.a=d},
dWD:function dWD(d){this.a=d},
dWB:function dWB(d,e){this.a=d
this.b=e},
dWz:function dWz(d){this.a=d},
dWA:function dWA(){},
dWC:function dWC(d,e,f){this.a=d
this.b=e
this.c=f},
dWx:function dWx(d,e){this.a=d
this.b=e},
dWy:function dWy(){},
dWK:function dWK(d){this.a=d},
dWL:function dWL(d,e){this.a=d
this.b=e},
dWJ:function dWJ(){},
dWM:function dWM(d,e){this.a=d
this.b=e},
dWN:function dWN(d){this.a=d},
dWO:function dWO(d){this.a=d},
axU:function axU(d,e){this.c=d
this.a=e},
b9S:function b9S(d,e){var _=this
_.d=$
_.bz$=d
_.aa$=e
_.c=_.a=null},
cGV:function cGV(d){this.a=d},
b9R:function b9R(d,e){this.b=d
this.a=e},
cGU:function cGU(d){this.a=d},
ayd:function ayd(){},
aye:function aye(){},
aKr:function aKr(){},
by1:function by1(){},
ifE(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bX(A.uU,23)
$.S()
b8=B.I()
b8.r=A.av.gp(0)
b9.ad(A.uU,25,b8)
b8=B.I()
b8.sam(D.erD.aB(0,v))
b9.ad(A.uU,23,b8)
for(b8=b9.a,u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
s=Math.cos(t)
r=Math.sin(t)
q=Math.cos(t)
p=Math.sin(t)
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.r=A.bl.gp(0)
o.c=A.o.F(u,5)===0?1.8:1
n=o.G()
b8.drawLine.apply(b8,[s*17,r*17-2,q*21,p*21-2,n])
n.delete()}m=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.k.E(m/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=B.I()
r.r=A.by.gp(0)
r.c=2
r.d=A.bE
b9.bo(A.uU,new B.t(b8*18,s*18-2),r)
r=B.I()
r.r=A.bl.gp(0)
b9.ad(A.uU,3,r)
c2.$5(b9,w?"V":"A",D.ej5,A.bl,12)
c2.$5(b9,w?A.k.ac(m,1)+" V":""+A.k.V(m*1000)+" mA",D.eis,A.av,9.5)
return!0
case"fan":b8=B.bt(D.eYY,A.hz)
$.S()
s=B.I()
s.r=A.br.gp(0)
b9.az(b8,s)
s=B.I()
s.r=A.al.gp(0)
b9.aP(D.eZP,s)
s=B.I()
s.r=A.M.j(0.6).gp(0)
b9.ad(G.uV,22,s)
for(b8=b9.a,u=0;u<4;++u){J.bm(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.bJ(A.aIX,18,10)
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=A.he.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
n=r.G()
b8.drawOval(B.bF(s),n)
n.delete()
b8.restore()}b8=B.I()
b8.r=A.bn.gp(0)
b9.ad(G.uV,4,b8)
b8=B.I()
b8.b=A.aa
b8.c=2
b8.r=A.cr.gp(0)
b9.ad(G.uV,22,b8)
b8=B.I()
b8.b=A.aa
b8.c=0.8
b8.r=A.jM.gp(0)
b9.ad(G.uV,14,b8)
return!0
case"speaker":l=B.bt(D.aP4,A.v_)
$.S()
b8=B.I()
b8.sam(D.aqI.aB(0,new B.a3(l.a,l.b,l.c,l.d)))
b9.az(l,b8)
k=b7?Math.sin(c1*40)*1.6:0
b8=B.I()
b8.sam(D.erZ.aB(0,B.bX(A.cx,15)))
b9.ad(A.cx,14+k,b8)
b8=B.I()
b8.r=A.dv.gp(0)
b9.ad(A.cx,5,b8)
b8=B.I()
b8.r=A.bm.gp(0)
b9.ad(G.a6Z,5+k*0.4,b8)
if(b7)for(b8=c1*18,s=b9.a,u=1;u<=3;++u){r=B.bX(D.efJ,6+u*6+A.k.F(b8,6))
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.b=A.aa
q.c=1.8
q.r=A.c5.j(0.9-u*0.2).gp(0)
n=q.G()
s.drawArc.apply(s,[B.bF(r),-45.836623610465864,91.67324722093173,!1,n])
n.delete()}return!0
case"clock":j=B.bt(D.eZG,A.v_)
$.S()
b8=B.I()
b8.sam(D.c32.aB(0,new B.a3(j.a,j.b,j.c,j.d)))
b9.az(j,b8)
b8=B.bt(D.aP6,A.i8)
s=B.I()
s.r=A.hR.gp(0)
b9.az(b8,s)
if(b7){i=new B.V(Date.now(),0,!1)
h=B.Fd(i)<500?":":" "
g=A.a.aU(A.o.u(B.de(i)),2,"0")
f=A.a.aU(A.o.u(B.fN(i)),2,"0")
b8=B.I()
b8.r=A.bj.j(0.12).gp(0)
b9.aP(D.aP6,b8)
c2.$5(b9,g+h+f,D.eiO,A.bj,21)}b8=B.I()
b8.r=A.cr.gp(0)
b9.ad(D.eiM,2.4,b8)
b8=B.I()
b8.r=A.cr.gp(0)
b9.ad(D.efO,2.4,b8)
return!0
case"calculator":j=B.bt(D.eZl,A.hA)
$.S()
b8=B.I()
b8.sam(D.c2N.aB(0,new B.a3(j.a,j.b,j.c,j.d)))
b9.az(j,b8)
b8=B.bt(D.eZe,A.hk)
s=B.I()
s.r=(b7?A.Yo:D.bnV).gp(0)
b9.az(b8,s)
if(b7)c2.$5(b9,"3.14159",D.eir,A.Xc,10.5)
for(b8=b9.a,e=0;e<4;++e)for(s=-6+e*8,r=s+6,d=0;d<4;++d){q=-15+d*8
q=B.bt(new B.a3(q,s,q+6,r),A.Tr)
$.S()
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=(d===3?A.cb:A.bO).gp(0)
n=p.G()
b8.drawRRect(B.el(q),n)
n.delete()}return!0
case"phone":j=B.bt(D.eZ9,A.hA)
$.S()
b8=B.I()
b8.r=K.nd.gp(0)
b9.az(j,b8)
b8=B.I()
b8.b=A.aa
b8.c=1.9
b8.r=D.aii.gp(0)
b9.az(j,b8)
a0=B.bt(D.eZ_,A.hz)
if(b7){b8=B.I()
b8.sam(D.c4l.aB(0,new B.a3(a0.a,a0.b,a0.c,a0.d)))
b9.az(a0,b8)
b8=b9.a
J.bm(b8.save())
b8.clipRRect(B.el(a0),$.ny(),!0)
b8.translate(-12,-25)
E.Lw(b9,D.f4s,c1,b6)
b8.restore()
a1=A.k.F(c1*0.12,1)
b8=B.bt(D.eYX,A.hk)
s=B.I()
s.r=A.aT.gp(0)
b9.az(b8,s)
s=B.I()
s.r=A.bj.gp(0)
b9.aP(new B.a3(-10,14.5,-10+20*a1,16.9),s)
c2.$5(b9,"\u26a1"+A.k.V(a1*100)+"%",D.ehu,A.c,6)}else{b8=B.I()
b8.r=D.vJ.gp(0)
b9.az(a0,b8)}b8=B.bt(D.f_4,D.es7)
s=B.I()
s.r=A.w.gp(0)
b9.az(b8,s)
return!0
case"router":j=B.bt(D.eZF,A.mU)
$.S()
b8=B.I()
b8.sam(D.c3j.aB(0,new B.a3(j.a,j.b,j.c,j.d)))
b9.az(j,b8)
for(b8=b9.a,a2=0;a2<2;++a2){a3=F.Rx[a2]
s=a3<0?-4:4
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=A.cp.gp(0)
r.c=4
r.d=A.bE
n=r.G()
b8.drawLine.apply(b8,[a3,-4,a3+s,-28,n])
n.delete()}for(u=0;u<4;++u){if(b7)a4=A.o.F(A.k.bh(c1*(3+u*1.3)),2)===0||u===0
else a4=!1
s=new B.ap(A.R,A.N,A.U,A.V,A.S)
s.r=(a4?A.be:A.aJ).gp(0)
n=s.G()
b8.drawCircle(-15+u*10,11,2.6,n)
n.delete()}if(b7)for(s=c1*10,u=1;u<=3;++u){r=B.bX(G.uV,8+u*6+A.k.F(s,6))
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.b=A.aa
q.c=1.8
q.r=A.iQ.j(0.9-u*0.2).gp(0)
n=q.G()
b8.drawArc.apply(b8,[B.bF(r),-131.78029288008932,85.94366926962348,!1,n])
n.delete()}return!0
case"siren":a5=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bt(D.eZk,A.hz)
s=$.S()
r=B.I()
r.r=A.e7.gp(0)
b9.az(b8,r)
if(b7){b8=B.I()
b8.r=A.aw.j(0.5*a5).gp(0)
b8.z=A.zA
b9.ad(A.uU,34,b8)}a6=new B.aF(s.r,A.ag,b6,b6,B.a([],x.v))
a6.D(new B.aX(-16,12))
a6.D(new B.aq(-16,-2))
a6.D(new B.c4(0,-30,16,-2))
a6.D(new B.aq(16,12))
a6.D(new B.bs())
b8=B.I()
b8.r=B.ar(A.ej,D.bf4,a5).gp(0)
b9.aG(a6,b8)
b8=B.I()
b8.b=A.aa
b8.c=1.4
b8.r=A.bY.gp(0)
b9.aG(a6,b8)
if(b7){b8=b9.a
J.bm(b8.save())
b8.translate(0,-2)
b9.ie(0,c1*7)
s=B.I()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.bo(A.I,G.a6Z,s)
b8.restore()}return!0
case"toycar":a7=b7?Math.sin(c1*30)*0.8:0
b8=b9.a
J.bm(b8.save())
b8.translate(0,a7)
s=$.S().r
r=x.v
j=new B.aF(s,A.ag,b6,b6,B.a([],r))
j.D(new B.aX(-28,8))
j.D(new B.aq(-28,-2))
j.D(new B.aq(-16,-4))
j.D(new B.aq(-10,-16))
j.D(new B.aq(10,-16))
j.D(new B.aq(18,-4))
j.D(new B.aq(28,-2))
j.D(new B.aq(28,8))
j.D(new B.bs())
q=B.I()
q.sam(D.c1n.aB(0,D.eZy))
b9.aG(j,q)
q=new B.aF(s,A.ag,b6,b6,B.a([],r))
q.D(new B.aX(-8,-4))
q.D(new B.aq(-4,-13))
q.D(new B.aq(4,-13))
q.D(new B.aq(4,-4))
q.D(new B.bs())
p=B.I()
p.r=A.fh.gp(0)
b9.aG(q,p)
r=new B.aF(s,A.ag,b6,b6,B.a([],r))
r.D(new B.aX(8,-4))
r.D(new B.aq(8,-13))
r.D(new B.aq(11,-13))
r.D(new B.aq(15,-4))
r.D(new B.bs())
s=B.I()
s.r=A.fh.gp(0)
b9.aG(r,s)
for(a2=0;a2<2;++a2){a3=F.azZ[a2]
s=new B.ap(A.R,A.N,A.U,A.V,A.S)
s.r=A.av.gp(0)
n=s.G()
b8.drawCircle(a3,10,7.5,n)
n.delete()
J.bm(b8.save())
b8.translate(a3,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.r=A.bO.gp(0)
q.c=1.6
n=q.G()
b8.drawLine.apply(b8,[0,0,r*5.5,s*5.5,n])
n.delete()}b8.restore()}b8.restore()
if(b7)for(s=c1*40,u=0;u<3;++u){r=A.k.F(s+u*8,14)
q=-4+u*5
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=A.aB.gp(0)
p.c=1.6
n=p.G()
b8.drawLine.apply(b8,[-34-r,q,-42-r,q,n])
n.delete()}return!0
case"kettle":b8=$.S().r
s=x.v
j=new B.aF(b8,A.ag,b6,b6,B.a([],s))
j.D(new B.aX(-18,20))
j.D(new B.aq(-14,-12))
j.D(new B.c4(0,-20,14,-12))
j.D(new B.aq(18,20))
j.D(new B.bs())
r=B.I()
r.sam(D.c2s.aB(0,D.eZj))
b9.aG(j,r)
r=new B.aF(b8,A.ag,b6,b6,B.a([],s))
r.D(new B.aX(14,-10))
r.D(new B.aq(30,-22))
r.D(new B.aq(32,-18))
r.D(new B.aq(16,-4))
r.D(new B.bs())
q=B.I()
q.r=A.e4.gp(0)
b9.aG(r,q)
s=new B.aF(b8,A.ag,b6,b6,B.a([],s))
s.D(new B.aX(-14,-8))
s.D(new B.c4(-34,-6,-18,12))
b8=B.I()
b8.b=A.aa
b8.c=5
b8.r=A.av.gp(0)
b9.aG(s,b8)
b8=B.I()
if(b7){s=B.ar(A.cR,A.tL,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.e7
b8.r=s.gp(0)
b9.aP(D.eZi,b8)
if(b7){b8=B.I()
b8.r=A.cR.j(0.3).gp(0)
b8.z=A.mR
b9.ad(A.aIV,24,b8)
for(b8=c1*0.9,s=b9.a,u=0;u<4;++u){a8=A.k.F(b8+u*0.25,1)
r=Math.sin(a8*9+u)
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.r=A.c.j(0.6*(1-a8)).gp(0)
n=q.G()
s.drawCircle(30+r*4,-26-a8*26,3+a8*5,n)
n.delete()}}b8=B.I()
b8.r=A.av.gp(0)
b9.ad(D.eeR,3,b8)
return!0
case"lamp":if(b7){u=A.k.E(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aF($.S().r,A.ag,b6,b6,B.a([],x.v))
b8.D(new B.aX(-10,-14))
b8.D(new B.aq(-30,24))
b8.D(new B.aq(10,24))
b8.D(new B.aq(8,-14))
b8.D(new B.bs())
s=B.I()
s.r=A.dP.j(0.28*u).gp(0)
b9.aG(b8,s)
s=B.I()
s.r=A.dP.j(0.5*u).gp(0)
s.z=Y.Il
b9.ad(D.eiS,24,s)}b8=B.bt(D.eZY,A.hz)
s=$.S()
r=B.I()
r.r=A.e7.gp(0)
b9.az(b8,r)
r=B.I()
r.r=A.dv.gp(0)
r.c=3
r.d=A.bE
b9.bo(D.ef4,D.aJ6,r)
r=B.I()
r.r=A.dv.gp(0)
r.c=3
r.d=A.bE
b9.bo(D.aJ6,D.eiT,r)
a9=new B.aF(s.r,A.ag,b6,b6,B.a([],x.v))
a9.D(new B.aX(-14,-16))
a9.D(new B.aq(6,-26))
a9.D(new B.aq(10,-12))
a9.D(new B.aq(-10,-6))
a9.D(new B.bs())
s=B.I()
s.r=(b7?A.aU:A.kd).gp(0)
b9.aG(a9,s)
b8=B.I()
b8.r=(b7?A.c:A.bm).gp(0)
b9.ad(D.eiW,4,b8)
return!0
case"lights":b8=$.S().r
s=x.v
b0=new B.aF(b8,A.ag,b6,b6,B.a([],s))
b0.D(new B.aX(-34,-6))
b0.D(new B.c4(0,22,34,-6))
r=B.I()
r.b=A.aa
r.c=2
r.r=A.hc.gp(0)
b9.aG(b0,r)
for(r=b9.a,q=c1*2.4,u=0;u<5;++u){b1=(u+0.5)/5
p=-34+68*b1
o=-6+4*b1*(1-b1)*4*4.2/1*0.75+0
b2=b7&&A.k.F(q+u*0.7,1.8)<1.1
if(b2){b3=new B.ap(A.R,A.N,A.U,A.V,A.S)
b3.r=D.a3V[u].j(0.6).gp(0)
b3.z=A.Im
n=b3.G()
r.drawCircle(p+0,o+6,12,n)
n.delete()}b3=B.a([],s)
b4=new B.aF(b8,A.ag,b6,b6,b3)
b3.push(new B.aX(p-3,o))
b3.push(new B.aq(p+3,o))
b5=o+11
b3.push(new B.aq(p+5,b5))
b3.push(new B.c4(p,o+17,p-5,b5))
b3.push(new B.bs())
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
if(b2)o=D.a3V[u]
else{o=B.ar(D.a3V[u],A.w,0.65)
o.toString}p.r=o.gp(0)
n=p.G()
p=b4.gbw().a.snapshot()
r.drawPath((b4.e=new B.cl(p)).a,n)
n.delete()}return!0}return C.ifC(b9,c0,c1,c2)},
fP:function fP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
h5G(d){var w=D.me.h(0,d)
return(w==null?null:w.b)===D.A_},
igP(d,e,f){return B.a4(d,!1).cc(B.uV(null,!1,!0,!0,new C.fRO(e,f),A.eQ,null,A.q7,new C.fRP(),x.H))},
JE:function JE(d,e){this.a=d
this.b=e},
mh:function mh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fRO:function fRO(d,e){this.a=d
this.b=e},
fRP:function fRP(){},
V9:function V9(d,e,f){this.c=d
this.d=e
this.a=f},
bkm:function bkm(d,e){var _=this
_.d=$
_.e=null
_.bz$=d
_.aa$=e
_.c=_.a=null},
dSV:function dSV(d){this.a=d},
dSU:function dSU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dSS:function dSS(){},
dST:function dST(d){this.a=d},
dSR:function dSR(d){this.a=d},
dSQ:function dSQ(d,e){this.a=d
this.b=e},
dSP:function dSP(d,e){this.a=d
this.b=e},
dSO:function dSO(d){this.a=d},
dSN:function dSN(d){this.a=d},
dSJ:function dSJ(d){this.a=d},
dSI:function dSI(d){this.a=d},
dSM:function dSM(d,e,f){this.a=d
this.b=e
this.c=f},
dSL:function dSL(d){this.a=d},
dSK:function dSK(d){this.a=d},
bw5:function bw5(d,e,f){this.b=d
this.c=e
this.a=f},
aeR:function aeR(d,e,f){this.b=d
this.c=e
this.a=f},
aMb:function aMb(){},
a1c(d,e,f,g,h,i){return new C.buT(d,e,f,g,h,i)},
buT:function buT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fkY:function fkY(){},
fkZ:function fkZ(){},
fl_:function fl_(){},
fl0:function fl0(){},
fl1:function fl1(){},
fl2:function fl2(){},
fl3:function fl3(){},
fl4:function fl4(){},
a8B:function a8B(d){this.a=d},
cjJ:function cjJ(d){this.a=d},
cjK:function cjK(){},
cjI:function cjI(d,e){this.a=d
this.b=e},
cjH:function cjH(d){this.a=d},
WJ:function WJ(d){this.a=d},
aFn:function aFn(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.iK$=f
_.oF$=g
_.ni$=h
_.iL$=i
_.bz$=j
_.aa$=k
_.c=_.a=null},
eMZ:function eMZ(d){this.a=d},
eMV:function eMV(d){this.a=d},
eMU:function eMU(d,e){this.a=d
this.b=e},
eMX:function eMX(d,e){this.a=d
this.b=e},
eMW:function eMW(d,e){this.a=d
this.b=e},
eMY:function eMY(d){this.a=d},
bwh:function bwh(d,e,f){this.b=d
this.c=e
this.a=f},
Vy:function Vy(d){this.a=d},
bkv:function bkv(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.iK$=d
_.oF$=e
_.ni$=f
_.iL$=g
_.bz$=h
_.aa$=i
_.c=_.a=null},
dZd:function dZd(){},
dZe:function dZe(){},
dZ8:function dZ8(d,e){this.a=d
this.b=e},
dZa:function dZa(d,e){this.a=d
this.b=e},
dZb:function dZb(d){this.a=d},
dZ9:function dZ9(d){this.a=d},
dZc:function dZc(d){this.a=d},
br2:function br2(d,e,f){this.b=d
this.c=e
this.a=f},
UL:function UL(d){this.a=d},
bk8:function bk8(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.iK$=d
_.oF$=e
_.ni$=f
_.iL$=g
_.bz$=h
_.aa$=i
_.c=_.a=null},
dKz:function dKz(){},
dKA:function dKA(){},
dKu:function dKu(){},
dKx:function dKx(d,e){this.a=d
this.b=e},
dKw:function dKw(d,e){this.a=d
this.b=e},
dKy:function dKy(d){this.a=d},
dKv:function dKv(d){this.a=d},
aIR:function aIR(d,e,f){this.a=d
this.b=e
this.c=f},
Vp:function Vp(d){this.a=d},
bko:function bko(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
dWf:function dWf(d,e){this.a=d
this.b=e},
dWg:function dWg(d){this.a=d},
dWe:function dWe(d,e){this.a=d
this.b=e},
dWh:function dWh(d){this.a=d},
dWd:function dWd(d,e){this.a=d
this.b=e},
dWi:function dWi(d){this.a=d},
dWc:function dWc(d,e){this.a=d
this.b=e},
dWj:function dWj(d,e){this.a=d
this.b=e},
dWb:function dWb(d,e){this.a=d
this.b=e},
dWk:function dWk(d){this.a=d},
dWa:function dWa(d,e){this.a=d
this.b=e},
dWl:function dWl(d){this.a=d},
dW9:function dW9(d){this.a=d},
dWm:function dWm(d){this.a=d},
dW8:function dW8(d){this.a=d},
dWn:function dWn(d){this.a=d},
dWo:function dWo(d){this.a=d},
dW7:function dW7(d){this.a=d},
bml:function bml(d,e,f){this.b=d
this.c=e
this.a=f},
W7:function W7(d){this.a=d},
aEJ:function aEJ(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
ekH:function ekH(d,e){this.a=d
this.b=e},
ekI:function ekI(d,e,f){this.a=d
this.b=e
this.c=f},
ekG:function ekG(d,e,f){this.a=d
this.b=e
this.c=f},
ekJ:function ekJ(d){this.a=d},
ekF:function ekF(d){this.a=d},
ekN:function ekN(d){this.a=d},
ekM:function ekM(d,e){this.a=d
this.b=e},
ekL:function ekL(d,e){this.a=d
this.b=e},
ekO:function ekO(d,e){this.a=d
this.b=e},
ekK:function ekK(d,e){this.a=d
this.b=e},
ekP:function ekP(d){this.a=d},
Wh:function Wh(d){this.a=d},
aF1:function aF1(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
euC:function euC(d){this.a=d},
euD:function euD(d){this.a=d},
euA:function euA(d,e){this.a=d
this.b=e},
euB:function euB(d){this.a=d},
euz:function euz(d){this.a=d},
euE:function euE(d){this.a=d},
euF:function euF(d){this.a=d},
euG:function euG(d){this.a=d},
euH:function euH(d,e){this.a=d
this.b=e},
WB:function WB(d){this.a=d},
blz:function blz(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eIt:function eIt(){},
eIC:function eIC(){},
eIy:function eIy(d){this.a=d},
eIx:function eIx(){},
eIz:function eIz(d,e){this.a=d
this.b=e},
eIw:function eIw(d,e){this.a=d
this.b=e},
eIA:function eIA(d){this.a=d},
eIv:function eIv(d,e){this.a=d
this.b=e},
eIB:function eIB(d){this.a=d},
eIu:function eIu(d){this.a=d},
W6:function W6(d){this.a=d},
bl4:function bl4(d,e,f,g,h,i,j,k){var _=this
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
_.iK$=f
_.oF$=g
_.ni$=h
_.iL$=i
_.bz$=j
_.aa$=k
_.c=_.a=null},
ejM:function ejM(){},
ejN:function ejN(){},
ejF:function ejF(d){this.a=d},
ejE:function ejE(d){this.a=d},
ejG:function ejG(d){this.a=d},
ejD:function ejD(d){this.a=d},
ejH:function ejH(d){this.a=d},
ejC:function ejC(d){this.a=d},
ejI:function ejI(d,e){this.a=d
this.b=e},
ejB:function ejB(d,e){this.a=d
this.b=e},
ejJ:function ejJ(d){this.a=d},
ejA:function ejA(d,e){this.a=d
this.b=e},
ejK:function ejK(d){this.a=d},
ejz:function ejz(d,e){this.a=d
this.b=e},
ejL:function ejL(d){this.a=d},
ejy:function ejy(d,e){this.a=d
this.b=e},
be7:function be7(d,e,f){this.c=d
this.d=e
this.a=f},
aM_:function aM_(){},
bxZ:function bxZ(){},
aMg:function aMg(){},
by2:function by2(){},
aMI:function aMI(){},
bya:function bya(){},
aN6:function aN6(){},
byi:function byi(){},
oA(d,e,f,g,h,i){return new C.b7z(h,d,f,g,i,e,null)},
hvu(d,e,f,g){var w=null
return B.ci(w,w,!0,w,new C.fVE(g,e,f),d,w,!0,!0,x.H)},
lU(d,e,f,g,h,i,j){return new C.b7A(f,j,i,h,g,d,e,null)},
yT(d,e,f){return C.ihF(d,e,f)},
ihF(d,e,f){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l
var $async$yT=B.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
n=$.aV.al$.x.h(0,e)
n=n==null?null:n.gbd()
r=x.az.a(n)
if(r==null){w=1
break}w=7
return B.b(r.m4(2),$async$yT)
case 7:q=h
w=8
return B.b(q.hr(A.h8),$async$yT)
case 8:p=h
if(p==null){w=1
break}o=J.eR(A.dH.gaR(p))
w=9
return B.b(B.avG(B.a([B.cCa(o,"image/png",f+".png")],x.r),null,"Made in NGMY Core Protocol"),$async$yT)
case 9:t=2
w=6
break
case 4:t=3
l=s.pop()
if(d.e!=null)d.K(x.gV).f.U(D.aRa)
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$yT,v)},
q1(d,e,f,g){var w,v=$.ask
if(v==="music")return E.dY(261.63*Math.pow(2,e/12),d,f,0,g,"sine")
if(v==="space"){v=Math.pow(2,e/12)
w=d==="piano"||d==="bell"||d==="pluck"?"synth":d
return E.dY(261.63*v,w,f,0,g,"sine")}return C.h0f(v,e,f,g)},
h0f(d,e,f,g){var w="tri",v="sine",u="noise",t=261.63*Math.pow(2,A.o.E(e,-12,36)/12),s=Math.min(f,260)
switch(d){case"tech":return E.dY(t*2,"",Math.min(s,110),0,g*0.45,"square")
case"sparkle":return E.dY(t*2.5,"",130,-0.35,g*0.6,w)
case"bounce":return E.dY(140+A.o.F(e,12)*9,"",150,0.9,g,v)
case"bubble":return E.dY(260+A.o.F(e,12)*22,"",120,-0.55,g*0.85,v)
case"pop":E.dY(t,"",160,-0.7,g*0.4,w)
return E.dY(900,"",90,0,g*0.45,u)
case"zap":return E.dY(t*3,"",150,1.6,g*0.4,"square")
case"click":return E.dY(2600+A.o.F(e,7)*180,"",30,0,g*0.5,u)
case"whoosh":E.dY(320,"",220,-0.7,g*0.35,v)
return E.dY(1500,"",200,0,g*0.22,u)
case"organic":return E.dY(85+A.o.F(e,12)*5,"",190,1.1,g,v)
case"lab":return E.dY(t*1.6,"",140,-0.3,g*0.55,w)
default:return E.dY(t,"",s,0,g*0.5,w)}},
Ja(d,e,f,g){var w,v,u,t,s,r,q,p=$.ask
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.M)(e),++w)C.q1(d,e[w],f,g)
return}for(p=B.d0(e,0,B.dA(4,"count",x.S),B.T(e).c),v=p.$ti,p=new B.bR(p,p.gL(0),v.k("bR<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)C.q1(d,s,f,g)
else B.bP(new B.b9(1000*q),new C.cjF(d,s,f,g),u)}},
a8A(d,e){var w="sine",v="noise"
switch(d){case"kick":E.dY(95,"",200,1.8,e,w)
break
case"snare":E.dY(220,"",140,0,e*0.65,v)
break
case"hat":E.dY(5000,"",50,0,e*0.35,v)
break
case"open":E.dY(5200,"",220,0,e*0.35,v)
break
case"clap":E.dY(1100,"",100,0,e*0.5,v)
break
case"tom":E.dY(150,"",230,1,e,w)
break
case"low":E.dY(100,"",260,0.9,e,w)
break
case"rim":E.dY(1700,"",60,0,e*0.4,"square")
break
case"cow":E.dY(820,"",240,0,e*0.3,"square")
break
case"crash":E.dY(3200,"",650,0,e*0.4,v)
break
case"shake":E.dY(7000,"",90,0,e*0.3,v)
break
default:E.dY(60,"",300,0,e,w)}},
chd(d){return C.hMC(d)},
hMC(d){var w=0,v=B.j(x.h),u,t=2,s=[],r,q,p,o,n,m,l
var $async$chd=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$chd)
case 7:r=f
q=B.aU(J.r(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.U(x.N,x.A)
w=1
break}p=A.X.aN(0,q,null)
o=x.N
n=x.A
o=x.f.b(p)?B.a2(p,o,n):B.U(o,n)
u=o
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
u=B.U(x.N,x.A)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$chd,v)},
b1K(d,e){return C.hMD(d,e)},
hMD(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b1K=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b1K)
case 6:s=g
w=7
return B.b(s.ar("String","ngmy_play_progress_v1_"+d,A.X.ap(e,null)),$async$b1K)
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
return B.i($async$b1K,v)},
b7z:function b7z(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
cxl:function cxl(d){this.a=d},
cxm:function cxm(d,e){this.a=d
this.b=e},
fVE:function fVE(d,e,f){this.a=d
this.b=e
this.c=f},
fVD:function fVD(d){this.a=d},
eX:function eX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
cxh:function cxh(d){this.a=d},
hj:function hj(d,e,f){this.c=d
this.d=e
this.a=f},
b7A:function b7A(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
j7:function j7(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cxg:function cxg(d){this.a=d},
JQ:function JQ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cxn:function cxn(d){this.a=d},
qO:function qO(){},
cxi:function cxi(d,e,f){this.a=d
this.b=e
this.c=f},
cxk:function cxk(d){this.a=d},
cxj:function cxj(){},
cjF:function cjF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ho9(d,e){var w
$.S()
w=B.I()
w.r=d.gp(0)
w.c=e
w.b=A.aa
w.d=A.bE
return w},
u8(d,e,f){var w,v,u,t
if(f==null){w=e.length
if(w===2)w=null
else{v=B.a([],x.n)
for(u=w-1,t=0;t<w;++t)v.push(t/u)
w=v}}else w=f
return B.jo(A.I,new B.t(0,d.b),e,w,A.x,null)},
hYn(d,e,f){return $.hYo.c3(0,d+"|"+A.k.V(e)+"|"+f.l(),new C.fjn(d,f,e))},
ifG(e5,e6,e7,e8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9=null,e0=e6.a,e1=e6.b,e2=0+e1,e3=new B.a3(0,0,0+e0,e2),e4=new B.e9()
e4.d3(e8*97+5)
w=new C.fN7(e4)
switch(A.o.F(e8,20)){case 0:$.S()
e2=B.I()
e2.sam(C.u8(e6,D.d98,d9))
e5.aP(e3,e2)
v=new B.t(e0*(0.5+0.2*Math.sin(6.283185307179586*e7)),e1*0.5)
e2=e0*0.5
u=B.I()
u.sam(B.tn(v,e2,B.a([D.brI,A.K],x.O),d9,A.x,d9,d9,0))
e5.ad(v,e2,u)
break
case 1:$.S()
e2=B.I()
e2.sam(C.u8(e6,D.cZp,d9))
e5.aP(e3,e2)
for(e2=6.283185307179586*e7,u=e5.a,t=0;t<70;++t){s=w.$0()
r=w.$0()
q=e4.au(3)
p=w.$0()
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.r=A.c.j(0.35+0.65*(0.5+0.5*Math.sin(e2*(1+q)+t))).gp(0)
n=o.G()
u.drawCircle(s*e0,r*e1,0.6+p*1.4,n)
n.delete()}m=A.k.F(e7*2,1)
e2=e0*(0.1+m*0.7)
u=e1*(0.1+m*0.3)
e5.bo(new B.t(e2,u),new B.t(e2-e0*0.12,u-e1*0.05),C.ho9(A.c.j(1-m),2))
u=e0*0.85
e2=e1*0.2
s=B.I()
s.r=G.MA.gp(0)
e5.ad(new B.t(u,e2),e1*0.09,s)
s=B.I()
s.r=D.YT.gp(0)
e5.ad(new B.t(u+e1*0.03,e2-e1*0.01),e1*0.08,s)
break
case 2:e2=$.S()
u=B.I()
u.sam(C.u8(e6,D.d0l,d9))
e5.aP(e3,u)
for(u=e5.a,t=0;t<40;++t){s=w.$0()
r=w.$0()
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.r=A.c.j(0.5).gp(0)
n=q.G()
u.drawCircle(s*e0,r*e1*0.6,0.7,n)
n.delete()}for(s=e1*0.12,r=e0/24,q=x.v,l=0;l<4;++l){p=B.a([],q)
k=new B.aF(e2.r,A.ag,d9,d9,p)
for(e2=e1*(0.3+0.07*l),o=l*1.3,j=0;j<=e0;j+=r){i=e2+Math.sin(6.283185307179586*(j/e0*1.4+e7)+o)*e1*0.09
if(j===0){h=new B.aX(j,i)
p.push(h)
g=k.f
if(g!=null)h.by(g)
h=k.e
if(h!=null)h.a.delete()
k.e=null}else{h=new B.aq(j,i)
p.push(h)
g=k.f
if(g!=null)h.by(g)
h=k.e
if(h!=null)h.a.delete()
k.e=null}}e2=$.S()
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=D.cZm[l].j(0.5).gp(0)
p.b=A.aa
p.c=s
p.z=A.aGw
n=p.G()
p=k.e
u.drawPath((p==null?k.e=new B.cl(k.gbw().a.snapshot()):p).a,n)
n.delete()}break
case 3:e2=$.S()
u=B.I()
u.sam(C.u8(e6,D.dpN,D.dfA))
e5.aP(e3,u)
u=6.283185307179586*e7
f=new B.t(e0*0.5,e1*(0.64+0.01*Math.sin(u)))
s=e1*0.36
r=B.I()
r.sam(B.tn(f,s,B.a([D.bmh,A.K],x.O),d9,A.x,d9,d9,0))
e5.ad(f,s,r)
r=B.I()
r.r=D.bfa.gp(0)
e5.ad(f,e1*0.13,r)
for(s=e5.a,r=x.v,e=0;e<3;++e,e2=q){q=B.a([],r)
k=new B.aF(e2.r,A.ag,d9,d9,q)
q.push(new B.aX(0,e1))
for(e2=e1*(0.7+0.07*e),p=3+e,o=e*2,j=0;j<=e0;j+=8){h=new B.aq(j,e2+Math.sin(j/e0*p+o)*e1*0.04)
q.push(h)
g=k.f
if(g!=null)h.by(g)
h=k.e
if(h!=null)h.a.delete()
k.e=null}e2=new B.aq(e0,e1)
q.push(e2)
q=k.f
if(q!=null)e2.by(q)
e2=k.e
if(e2!=null)e2.a.delete()
k.e=null
e2=[D.bew,D.bdB,A.F6][e]
q=$.S()
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=e2.gp(0)
n=p.G()
e2=k.e
s.drawPath((e2==null?k.e=new B.cl(k.gbw().a.snapshot()):e2).a,n)
n.delete()}for(q=[0.18,0.78],p=e1*0.78,o=-e0,h=o*0.005,g=-e1,d=p+g*0.2,g=p+g*0.21,a0=e0*0.2,a1=e1*0.06,a2=0;a2<2;++a2){a3=e0*q[a2]
a4=a3+h
a5=new B.ap(A.R,A.N,A.U,A.V,A.S)
a5.r=D.aho.gp(0)
a5.c=3
a5.b=A.aa
a5.d=A.bE
n=a5.G()
s.drawLine.apply(s,[a3,p,a4,d,n])
n.delete()
a4=B.bJ(new B.t(a4,g),a1,a0)
a3=new B.ap(A.R,A.N,A.U,A.V,A.S)
a3.r=D.aho.gp(0)
n=a3.G()
s.drawOval(B.bF(a4),n)
n.delete()}for(q=o*0.05,u*=6,e2=e2.r,t=0;t<4;++t){v=A.k.F(e7+t*0.22,1)
p=q+v*e0*1.1
o=e1*(0.25+0.05*t)+Math.sin(6.283185307179586*v*3)*e1*0.02
h=Math.sin(u+t)
g=B.a([],r)
d=new B.aF(e2,A.ag,d9,d9,g)
h=o+h*e1*0.012
g.push(new B.aX(p-8,h))
a0=o-4
g.push(new B.c4(p-3,a0,p,o))
g.push(new B.c4(p+3,a0,p+8,h))
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=A.F6.gp(0)
p.c=2
p.b=A.aa
p.d=A.bE
n=p.G()
p=d.gbw().a.snapshot()
s.drawPath((d.e=new B.cl(p)).a,n)
n.delete()}break
case 4:e2=$.S()
u=B.I()
u.sam(C.u8(e6,D.dkv,D.d4q))
e5.aP(e3,u)
u=B.I()
u.r=D.boh.gp(0)
e5.ad(new B.t(e0*0.75,e1*0.2),e1*0.1,u)
for(u=e5.a,s=x.v,e=0;e<5;++e,e2=r){r=B.a([],s)
k=new B.aF(e2.r,A.ag,d9,d9,r)
r.push(new B.aX(0,e1))
for(e2=(e&1)===0,q=e1*(0.46+0.1*e),p=1.5+e*0.4,j=0;j<=e0;j+=6){o=e2?1:-1
o=new B.aq(j,q+Math.sin(6.283185307179586*(j/e0*p+e7*o))*e1*0.025)
r.push(o)
h=k.f
if(h!=null)o.by(h)
o=k.e
if(o!=null)o.a.delete()
k.e=null}e2=new B.aq(e0,e1)
r.push(e2)
r=k.f
if(r!=null)e2.by(r)
e2=k.e
if(e2!=null)e2.a.delete()
k.e=null
e2=B.ar(A.cw,A.pR,e/5).j(0.85)
r=$.S()
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.r=e2.gp(0)
n=q.G()
e2=k.e
u.drawPath((e2==null?k.e=new B.cl(k.gbw().a.snapshot()):e2).a,n)
n.delete()}break
case 5:$.S()
e2=B.I()
e2.sam(C.u8(e6,D.dbu,D.d0b))
e5.aP(e3,e2)
a6=e1*0.6
e2=e0/2
u=e1*0.26
s=B.I()
s.sam(B.jo(new B.t(0,a6-u),new B.t(0,a6),D.dod,d9,A.x,d9))
e5.ad(new B.t(e2,a6),u,s)
for(u=e0*0.2,s=a6-e1*0.2,r=e1*0.012,q=u+e0*0.6,p=e5.a,t=0;t<5;){o=s+t*e1*0.045;++t
h=new B.ap(A.R,A.N,A.U,A.V,A.S)
h.r=D.YW.gp(0)
n=h.G()
p.drawRect(B.bF(new B.a3(u,o,q,o+r*t*0.6)),n)
n.delete()}u=B.I()
u.r=D.YW.gp(0)
e5.aP(new B.a3(0,a6,e0,e1),u)
a7=C.ho9(A.M_.j(0.85),1.4)
for(u=e1-a6,l=0;l<10;++l){a8=(l+e7)/9
if(a8<0.02)continue
i=a6+a8*a8*u
n=a7.G()
p.drawLine.apply(p,[0,i,e0,i,n])
n.delete()}for(l=-8;l<=8;++l){u=l*e0
n=a7.G()
p.drawLine.apply(p,[e2+u*0.02,a6,e2+u*0.2,e1,n])
n.delete()}break
case 6:$.S()
e2=B.I()
e2.r=D.bo5.gp(0)
e5.aP(e3,e2)
a9=Math.max(12,e0/20)
for(e2=e0/a9,u=e7*12,s=a9*0.9,r=-a9,q=e1+a9*9,p=a9*2,b0=0;b0<e2;++b0){b1=1+A.o.F(b0,3)
b2=A.k.F(e7*b1+w.$0(),1)*q-p
for(o=b0*a9,h=b0*7,g=u*b1,l=0;l<10;++l){i=b2-l*a9
if(i<r||i>e1)continue
b3="01ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[A.o.F(h+l*3+A.k.bh(g),34)]
C.hYn(b3,s,l===0?D.bbE:A.be.j(1-l/9)).a3(e5,new B.t(o,i))}}break
case 7:$.S()
e2=B.I()
e2.sam(C.u8(e6,D.daH,d9))
e5.aP(e3,e2)
for(e2=e1+30,u=e5.a,s=6.283185307179586*e7,t=0;t<60;++t){r=w.$0()
q=A.k.F(e7*(1+e4.au(2))+w.$0(),1)
J.bm(u.save())
u.translate(r*e0+Math.sin(s+t)*8,q*e2-15)
u.rotate((s*(1+A.o.F(t,3))+t)*180/3.141592653589793,0,0)
q=B.bJ(A.I,4,8)
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=D.d1q[A.o.F(t,6)].gp(0)
n=r.G()
u.drawRect(B.bF(q),n)
n.delete()
u.restore()}break
case 8:$.S()
e2=B.I()
e2.sam(C.u8(e6,R.a3w,d9))
e5.aP(e3,e2)
for(e2=e5.a,u=e1*0.08,b4=0;b4<3;++b4){v=A.k.F(e7+b4/3,1)
b5=e0*(0.22+0.28*b4)
b6=e1*(0.3+0.1*A.o.F(b4,2))
if(v<0.22){s=e1*(1-v/0.22*(1-b6/e1))
$.S()
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=A.ad.gp(0)
r.c=2
r.b=A.aa
r.d=A.bE
n=r.G()
e2.drawLine.apply(e2,[b5,s,b5,s+u,n])
n.delete()}else{b7=(v-0.22)/0.78
s=1-b7
b8=1-Math.pow(s,3)
for(r=b7*b7*e1*0.1,q=2.6*s+0.4,t=0;t<28;++t){b9=6.283185307179586*t/28
p=Math.cos(b9)
o=Math.sin(b9)
h=D.d_m[b4].j(s)
$.S()
g=new B.ap(A.R,A.N,A.U,A.V,A.S)
g.r=h.gp(0)
n=g.G()
e2.drawCircle(b5+p*b8*e1*0.34,b6+o*b8*e1*0.34+r,q,n)
n.delete()}}}break
case 9:$.S()
e2=B.I()
e2.sam(C.u8(e6,D.cVG,d9))
e5.aP(e3,e2)
for(e2=6.283185307179586*e7,u=e5.a,t=0;t<30;++t){l=1+e4.au(2)
c0=w.$0()
s=w.$0()
c1=4+w.$0()*e1*0.05
i=e1-A.k.F(e7*l+c0,1)*(e1+c1*3)+c1
s=s*e0+Math.sin(e2*l+t)*10
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=A.c.j(0.12).gp(0)
n=r.G()
u.drawCircle(s,i,c1,n)
n.delete()
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=A.c.j(0.5).gp(0)
r.c=1.2
r.b=A.aa
r.d=A.bE
n=r.G()
u.drawCircle(s,i,c1,n)
n.delete()
r=-c1*0.3
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.r=A.c.j(0.7).gp(0)
n=q.G()
u.drawCircle(s+r,i+r,c1*0.2,n)
n.delete()}break
case 10:$.S()
e2=B.I()
e2.sam(C.u8(e6,D.cwd,d9))
e5.aP(e3,e2)
e2=B.I()
e2.r=G.MA.gp(0)
e5.ad(new B.t(e0*0.2,e1*0.2),e1*0.08,e2)
for(e2=e1+10,u=6.283185307179586*e7,s=e5.a,t=0;t<90;++t){l=1+e4.au(3)
c0=w.$0()
r=w.$0()
q=A.k.F(e7*l+c0,1)
p=Math.sin(u*l+t)
o=w.$0()
h=new B.ap(A.R,A.N,A.U,A.V,A.S)
h.r=A.c.j(0.9).gp(0)
n=h.G()
s.drawCircle(r*e0+p*12,q*e2-5,1.2+o*2.4,n)
n.delete()}e2=-e0*0.1
u=e1*0.9
s=B.I()
s.r=A.c.gp(0)
e5.dO(new B.a3(e2,u,e2+e0*1.2,u+e1*0.3),s)
break
case 11:$.S()
u=B.I()
u.r=A.hW.gp(0)
e5.aP(e3,u)
c2=e0/12
c3=A.k.F(e7*c2*6,c2*6)
for(u=e5.a,t=-6;t<24;++t){j=t*c2+c3
s=new B.ap(A.R,A.N,A.U,A.V,A.S)
s.r=D.cDJ[A.o.F(A.o.F(t,6)+6,6)].gp(0)
n=s.G()
u.drawRect(B.bF(new B.a3(j,0,j+c2,e2)),n)
n.delete()}for(e2=c2*0.3,s=c2/2,r=x.v,i=0;i<e1;i+=c2)for(q=i/c2,b6=i+s,p=b6-e2,o=b6+e2,t=-6;t<24;++t)if(A.o.F(t+A.k.bh(q),3)===0){b5=t*c2+c3+s
h=$.S()
g=B.a([],r)
h=new B.aF(h.r,A.ag,d9,d9,g)
g.push(new B.aX(b5,p))
g.push(new B.aq(b5+e2,b6))
g.push(new B.aq(b5,o))
g.push(new B.aq(b5-e2,b6))
g.push(new B.bs())
g=new B.ap(A.R,A.N,A.U,A.V,A.S)
g.r=A.c.j(0.75).gp(0)
n=g.G()
g=h.gbw().a.snapshot()
u.drawPath((h.e=new B.cl(g)).a,n)
n.delete()}$.S()
e2=B.I()
e2.sam(B.tn(e3.gbK(),e0*0.7,B.a([A.K,A.w.j(0.55)],x.O),B.a([0.4,1],x.n),A.x,d9,d9,0))
e5.aP(e3,e2)
break
case 12:$.S()
e2=B.I()
e2.sam(C.u8(e6,D.cVT,d9))
e5.aP(e3,e2)
for(e2=6.283185307179586*e7,u=e2*2,s=e5.a,t=0;t<18;++t){r=w.$0()*e0+Math.sin(e2+t)*18
q=w.$0()*e1+Math.cos(e2+t*1.7)*14
c1=e1*(0.05+w.$0()*0.1)*(1+0.15*Math.sin(u+t))
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
o=A.o.F(t,5)
p.r=D.axz[o].j(0.28).gp(0)
p.z=A.Im
n=p.G()
s.drawCircle(r,q,c1,n)
n.delete()
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=D.axz[o].j(0.35).gp(0)
p.c=1.2
p.b=A.aa
p.d=A.bE
n=p.G()
s.drawCircle(r,q,c1*0.9,n)
n.delete()}break
case 13:$.S()
e2=B.I()
e2.sam(C.u8(e6,D.d6g,d9))
e5.aP(e3,e2)
c4=Math.max(0,1-Math.abs(e7-0.3)*14)
if(c4>0){e2=A.c.j(0.35*c4)
u=B.I()
u.r=e2.gp(0)
e5.aP(e3,u)}for(e2=e1+40,u=e5.a,t=0;t<70;++t){j=w.$0()*e0
i=A.k.F(e7*(2+e4.au(2))+w.$0(),1)*e2-20
s=new B.ap(A.R,A.N,A.U,A.V,A.S)
s.r=A.dt.j(0.6).gp(0)
s.c=1.3
s.b=A.aa
s.d=A.bE
n=s.G()
u.drawLine.apply(u,[j,i,j-6,i+18,n])
n.delete()}for(t=0;t<10;++t){e2=B.bJ(new B.t(w.$0()*e0,A.k.F(e7+w.$0(),1)*e1),11,7)
s=new B.ap(A.R,A.N,A.U,A.V,A.S)
s.r=A.c.j(0.18).gp(0)
n=s.G()
u.drawOval(B.bF(e2),n)
n.delete()}break
case 14:e2=$.S()
u=B.I()
u.sam(C.u8(e6,D.d0k,d9))
e5.aP(e3,u)
for(u=e5.a,s=e0*0.035,r=x.v,q=e0*0.02,p=e0*0.08,o=e0*0.07,h=6.283185307179586*e7,g=h*3,d=h*2,e2=e2.r,t=0;t<7;++t){c5=e0*(t+0.5)/7
c6=e1*(0.28+0.1*Math.sin(d+t*2.1)+0.06*A.o.F(t,3))
a0=B.a([],r)
v=new B.aF(e2,A.ag,d9,d9,a0)
a0.push(new B.aX(c5-o,e1))
a0.push(new B.kX(c5-p,e1-c6*0.5,c5+Math.sin(g+t)*6,e1-c6*0.8,c5,e1-c6))
a0.push(new B.kX(c5+q,e1-c6*0.6,c5+p,e1-c6*0.4,c5+o,e1))
a0.push(new B.bs())
a0=new B.ap(A.R,A.N,A.U,A.V,A.S)
a0.r=A.fr.j(0.85).gp(0)
n=a0.G()
a0=v.gbw().a.snapshot()
u.drawPath((v.e=new B.cl(a0)).a,n)
n.delete()
a0=B.a([],r)
a1=new B.aF(e2,A.ag,d9,d9,a0)
a0.push(new B.aX(c5-s,e1))
a0.push(new B.c4(c5,e1-c6*0.9,c5+s,e1))
a0.push(new B.bs())
a0=new B.ap(A.R,A.N,A.U,A.V,A.S)
a0.r=A.dP.j(0.9).gp(0)
n=a0.G()
a0=a1.gbw().a.snapshot()
u.drawPath((a1.e=new B.cl(a0)).a,n)
n.delete()}for(t=0;t<40;++t){l=1+e4.au(2)
c0=w.$0()
e2=w.$0()
s=A.k.F(e7*l+c0,1)
r=Math.sin(h*l+t)
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.r=G.ahG.j(0.9).gp(0)
n=q.G()
u.drawCircle(e2*e0+r*10,e1-s*e1*0.9,1.5,n)
n.delete()}break
case 15:e2=$.S()
u=B.I()
u.sam(C.u8(e6,D.cqh,d9))
e5.aP(e3,u)
u=B.I()
u.r=A.ie.gp(0)
e5.ad(new B.t(e0*0.7,e1*0.28),e1*0.12,u)
for(u=e5.a,s=e0+20,r=e0/12,q=6.283185307179586*e7,p=x.v,e=0;e<5;e2=o,e=c7){o=B.a([],p)
k=new B.aF(e2.r,A.ag,d9,d9,o)
o.push(new B.aX(0,e1))
c7=e+1
c0=Math.sin(q+e)*e0*0.02*c7
for(e2=e1*(0.45+0.1*e),h=4+e,g=e*1.7,j=-20;j<=s;j+=r){d=new B.aq(j,e2-Math.abs(Math.sin((j+c0)/e0*h+g))*e1*0.18)
o.push(d)
a0=k.f
if(a0!=null)d.by(a0)
d=k.e
if(d!=null)d.a.delete()
k.e=null}e2=new B.aq(s,e1)
o.push(e2)
o=k.f
if(o!=null)e2.by(o)
e2=k.e
if(e2!=null)e2.a.delete()
k.e=null
e2=D.d0E[e]
o=$.S()
h=new B.ap(A.R,A.N,A.U,A.V,A.S)
h.r=e2.gp(0)
n=h.G()
e2=k.e
u.drawPath((e2==null?k.e=new B.cl(k.gbw().a.snapshot()):e2).a,n)
n.delete()}break
case 16:u=$.S()
s=B.I()
s.sam(C.u8(e6,D.dbo,d9))
e5.aP(e3,s)
c8=Math.sin(6.283185307179586*e7)*0.18
s=e5.a
J.bm(s.save())
r=e0/2
s.translate(r,0)
e5.ie(0,c8)
u=new B.aF(u.r,A.ag,d9,d9,B.a([],x.v))
q=-e0
u.D(new B.aX(q*0.03,0))
p=e0*0.03
u.D(new B.aq(p,0))
u.D(new B.aq(e0*0.34,e1))
u.D(new B.aq(q*0.34,e1))
u.D(new B.bs())
q=B.I()
o=x.O
q.sam(B.jo(A.I,new B.t(0,e1),B.a([A.c.j(0.5),A.c.j(0.04)],o),d9,A.x,d9))
e5.aG(u,q)
s.restore()
r=B.bJ(new B.t(r+Math.sin(c8)*e1,e1*0.95),e1*0.14,e0*0.6)
q=A.c.j(0.22)
u=B.I()
u.r=q.gp(0)
e5.dO(r,u)
for(u=[-1,1],r=e0*0.18,q=0+e1*0.06,c9=e0*0.82,h=x.eH,a2=0;a2<2;++a2){g=u[a2]<0
d0=g?0:c9
for(t=0;t<6;++t){d=d0+t*e0*0.03
a0=new B.ap(A.R,A.N,A.U,A.V,A.S)
a1=B.a([A.ej,A.ek,A.ej],o)
a1=new B.Sv(new B.t(0,0),new B.t(p,0),a1,W.zh,A.x,d9)
a3=B.Sw(a1,a1.L3(),a1.gL8(),h)
a1.a!==$&&B.aP()
a1.a=a3
a0.sam(a1)
n=a0.G()
s.drawRect(B.bF(new B.a3(d,0,d+p,e2)),n)
n.delete()}g=g?0:c9
d=new B.ap(A.R,A.N,A.U,A.V,A.S)
d.r=A.jL.gp(0)
n=d.G()
s.drawRect(B.bF(new B.a3(g,0,g+r,q)),n)
n.delete()}break
case 17:e2=$.S()
u=B.I()
u.sam(B.tn(e3.gbK(),e0*0.7,D.d1S,W.zh,A.x,d9,d9,0))
e5.aP(e3,u)
u=e5.a
J.bm(u.save())
u.translate(e0/2,e1/2)
e5.ie(0,e7*6.283185307179586/8)
for(s=x.v,e2=e2.r,t=0;t<16;t+=2){d1=6.283185307179586*t/16
d2=6.283185307179586*(t+1)/16
r=B.a([],s)
q=new B.aF(e2,A.ag,d9,d9,r)
r.push(new B.aX(0,0))
r.push(new B.aq(Math.cos(d1)*e0,Math.sin(d1)*e0))
r.push(new B.aq(Math.cos(d2)*e0,Math.sin(d2)*e0))
r.push(new B.bs())
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=A.c.j(0.22).gp(0)
n=r.G()
r=q.gbw().a.snapshot()
u.drawPath((q.e=new B.cl(r)).a,n)
n.delete()}u.restore()
break
case 18:$.S()
e2=B.I()
e2.sam(C.u8(e6,D.din,d9))
e5.aP(e3,e2)
for(e2=6.283185307179586*e7,u=e2*2,s=e5.a,t=0;t<7;++t){r=w.$0()
q=Math.sin(e2+t*1.1)
p=w.$0()
o=Math.sin(u+t)
h=new B.ap(A.R,A.N,A.U,A.V,A.S)
h.r=D.dhJ[A.o.F(t,4)].j(0.7).gp(0)
h.z=A.D7
n=h.G()
s.drawCircle(e0*(0.1+0.8*r)+o*10,e1*(0.5+0.38*q),e1*(0.1+0.08*p),n)
n.delete()}break
case 19:$.S()
e2=B.I()
e2.sam(C.u8(e6,D.d7A,D.azj))
e5.aP(e3,e2)
for(e2=e5.a,t=0;t<40;++t){u=w.$0()
s=w.$0()
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=A.c.j(0.6).gp(0)
n=r.G()
e2.drawCircle(u*e0,s*e1*0.45,0.7,n)
n.delete()}u=B.I()
u.r=G.MA.gp(0)
e5.ad(new B.t(e0*0.8,e1*0.2),e1*0.07,u)
j=-e0*0.02
for(u=e1-8,s=e7*6,d3=0;j<e0;){d4=e0*(0.07+w.$0()*0.07)
d5=e1*(0.25+w.$0()*0.4)
r=e1-d5
q=j+d4
$.S()
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=D.bgb.gp(0)
n=p.G()
e2.drawRect(B.bF(new B.a3(j,r,q,r+d5)),n)
n.delete()
for(d6=r+6,d7=j+4,r=q-6,q=d3*31;d6<u;d6+=11)for(p=d6*7,o=d6+6,d8=d7;d8<r;d8+=9)if(A.o.F(q+A.k.V(p)+A.k.V(d8*3)+A.k.bh(s),5)!==0){h=D.bjh.j(0.85)
$.S()
g=new B.ap(A.R,A.N,A.U,A.V,A.S)
g.r=h.gp(0)
n=g.G()
e2.drawRect(B.bF(new B.a3(d8,d6,d8+4,o)),n)
n.delete()}j+=d4+2;++d3}break}},
hVE(d){if(d<0.36363636363636365)return 7.5625*d*d
if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
i4I(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p,o=new C.feq(),n=f<=1,m=n?0:e/(f-1),l=n?0:e/(f-1)
n=g/0.5
w=A.k.E((n-l*0.45)/0.55,0,1)
v=g<0.86?1:A.k.E((1-g)/0.14,0,1)
u=new B.e9()
u.d3(e*53+11)
switch(d){case"type":o.f=A.k.bh(g/0.55*f)>e?v:0
break
case"bounce":o.b=-Math.abs(Math.sin(A.k.F(g*2-m*0.5,1)*3.141592653589793))*h*0.5
break
case"wave":o.b=Math.sin(6.283185307179586*g-m*3)*h*0.28
break
case"neon":o.x=o.f=Math.sin(6.283185307179586*g*13+e*7)>0.92?0.25:1
break
case"glitch":t=A.o.F(A.k.bh(g*12),6)===0
o.a=t?Math.sin(e*12.9898+g*100)*h*0.14:0
if(t)o.w=(e&1)===0?A.b9:A.c5
break
case"zoom":o.c=o.d=A.lp.av(0,w)
o.f=w*v
break
case"rainbow":o.w=new L.uC(1,A.k.F(g*360+e*40,360),0.75,1).lH()
break
case"drop":o.b=-(1-C.hVE(w))*h*4
o.f=A.k.E(w*6,0,1)*v
break
case"fly":o.a=-(1-A.et.av(0,w))*i*0.8
o.f=A.k.E(w*4,0,1)*v
break
case"spin":o.e=(1-w)*6.283185307179586
o.c=o.d=w
o.f=v
break
case"flip":o.c=Math.cos(3.141592653589793*(1-A.dU.av(0,w)))
o.f=A.k.E(w*5,0,1)*v
break
case"jelly":s=Math.sin(6.283185307179586*g*2+e)*0.25
o.c=1+s
o.d=1-s
break
case"shake":n=6.283185307179586*g
o.a=Math.sin(n*30+e*3)*h*0.05
o.b=Math.cos(n*27+e*5)*h*0.05
break
case"float":n=6.283185307179586*g
o.b=Math.sin(n+e*0.8)*h*0.15
o.e=Math.sin(n+e)*0.05
break
case"pulse":o.c=o.d=1+0.18*Math.pow(Math.max(0,Math.sin(6.283185307179586*g*2)),3)
break
case"swing":o.r=-h*0.5
o.e=Math.sin(6.283185307179586*g+m*2)*0.35
break
case"reveal":o.f=A.k.E((A.k.E(n,0,1)-m)*6,0,1)*v
break
case"blur":o.c=o.d=2.4-1.4*A.dU.av(0,w)
o.f=w*v
break
case"domino":o.e=Math.sin(A.k.E(g*1.6-m*0.6,0,1)*3.141592653589793)*0.9
o.r=h*0.5
break
case"spiral":n=1-w
r=n*3.141592653589793*3
q=n*h*3
o.a=Math.cos(r)*q
o.b=Math.sin(r)*q
o.f=w*v
break
case"cascade":p=Math.pow(Math.sin(3.141592653589793*A.k.F(g*2-m,1)),4)
o.w=B.ar(j,A.c,p)
o.x=p
break
case"wobble":n=6.283185307179586*g*2
o.e=Math.sin(n+e)*0.15
o.c=1+0.05*Math.sin(n+e*2)
break
case"rise":o.b=(1-A.cu.av(0,w))*h*2
o.f=w*v
break
case"scatter":n=1-A.dx.av(0,w)
o.a=n*(u.ah()-0.5)*i
o.b=n*(u.ah()-0.5)*h*6
o.e=n*(u.ah()-0.5)*6
o.f=v
break}return o},
D4(d,e,f,g){var w=null,v=B.fu(w,w,w,w,B.cS(w,w,w,w,w,w,w,w,w,B.l(w,w,g==null?f:w,w,w,w,w,w,w,w,w,e,w,w,A.u,g,1,!0,w,w,w,w,w,w,w,w),d),A.a3,A.bZ,w,A.dA,A.bW)
v.el()
return v},
i0n(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=A.k.E(a0,0,1)
if(i<=0.01)return
w=C.D4(e,f,j,j)
v=w.b
u=-v.c/2
v=v.a.c
v=-v.gbb(v)/2
t=new B.t(u,v)
s=w.b
r=s.c
s=s.a.c
q=new B.a3(u,v,u+r,v+s.gbb(s))
p=new C.fpb(i)
o=new C.fpc(e,f,d,t)
switch(g){case"outline":o.$2(p.$1(h),f*0.07)
break
case"three":s=B.ar(h,A.w,0.55)
s.toString
for(n=9;n>=1;--n){r=B.ar(h,s,n/9)
r.toString
m=n*f
C.D4(e,f,p.$1(r),j).a3(d,new B.t(u+m*0.012,v+m*0.014))}C.D4(e,f,p.$1(h),j).a3(d,t)
break
case"neon":o.$3$blur(p.$2(h,0.9*(0.6+0.4*a1)),f*0.16,new B.hg(A.G,f*0.2))
o.$2(p.$2(h,0.9),f*0.07)
o.$2(p.$2(A.c,0.95),f*0.025)
break
case"gradient":$.S()
l=B.I()
v=q.gaJ5()
u=q.gaDz()
s=B.ar(h,A.c,0.45)
s.toString
s=p.$1(s)
r=p.$1(h)
m=B.ar(h,A.aD,0.6)
m.toString
l.sam(B.jo(v,u,B.a([s,r,p.$1(m)],x.O),W.zh,A.x,j))
C.D4(e,f,j,l).a3(d,t)
break
case"sticker":C.D4(e,f,p.$2(A.w,0.3),j).a3(d,t.a8(0,new B.t(f*0.04,f*0.06)))
o.$2(p.$1(A.c),f*0.2)
o.$4$blur$shift(p.$1(A.av),f*0.24,j,A.I)
o.$2(p.$1(A.c),f*0.17)
C.D4(e,f,p.$1(h),j).a3(d,t)
break
case"retro":s=L.aVZ(h)
k=new L.uC(s.a,A.k.F(L.aVZ(h).b+150,360),s.c,s.d).lH()
for(n=5;n>=1;--n){s=n*f*0.014
C.D4(e,f,p.$1(k),j).a3(d,new B.t(u+s,v+s))}o.$2(p.$1(A.av),f*0.05)
C.D4(e,f,p.$1(h),j).a3(d,t)
break
case"gold":$.S()
l=B.I()
l.sam(B.jo(q.gaJ5(),q.gaDz(),B.a([p.$1(Ah.Fx),p.$1(A.cI),p.$1(A.d1),p.$1(P.xz),p.$1(A.ij)],x.O),D.dsJ,A.x,j))
o.$2(p.$1(A.rb),f*0.06)
C.D4(e,f,j,l).a3(d,t)
break
default:C.D4(e,f,p.$1(h),j).a3(d,t)}},
huL(a6,a7,a8,a9,b0,b1,b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a6.a
J.bm(a5.save())
w=a7.a
v=a7.b
a5.clipRect(B.bF(new B.a3(0,0,0+w,0+v)),$.ms()[1],!0)
C.ifG(a6,a7,a8,a9)
u=w<v?0.9:1
t=b1*w/360*u
u=A.a.i(b4)
if(u.length===0)s=B.a(["\u2026"],x.s)
else{u=new B.mk(u)
s=B.C(u,B.a6(u).k("L.E"))}u=B.a([],x.n)
for(r=s.length,q=0;q<s.length;s.length===r||(0,B.M)(s),++q){p=s[q]
o=p===" "
n=C.D4(o?"n":p,t,a4,a4).b.c
u.push(n*(o?0.7:1))}m=w*0.86
r=x.t
l=B.a([B.a([],r)],x.E)
for(o=x.S,k=0,j=0,i=0;i<s.length;++i){if(s[i]===" "){A.d.gak(l).push(i)
k+=u[i]
j=A.d.gak(l).length
continue}if(k+u[i]>m&&A.d.gak(l).length!==0){h=j>0&&j<A.d.gak(l).length?A.d.fJ(A.d.gak(l),j):B.a([],r)
if(h.length!==0){n=A.d.gak(l)
g=A.d.gak(l).length
n.$flags&1&&B.aj(n,18)
B.kB(j,g,n.length,a4,a4)
n.splice(j,g-j)}n=B.C(h,o)
l.push(n)
k=A.d.cI(h,0,new C.fN8(u))
j=0}A.d.gak(l).push(i)
k+=u[i]}f=t*1.15
e=v/2-l.length*f/2+f/2
for(v=w/2,d=0;d<l.length;++d){a0=l[d]
a1=v-A.d.cI(a0,0,new C.fN9(u))/2
for(r=a0.length,o=e+d*f,q=0;q<a0.length;a0.length===r||(0,B.M)(a0),++q,a1=a2){i=a0[q]
n=u[i]
a2=a1+n
if(s[i]===" ")continue
a3=C.i4I(b2,i,s.length,a8,t,w,b0)
J.bm(a5.save())
a5.translate(a1+n/2+a3.a,o+a3.b)
n=a3.r
if(n!==0)a5.translate(0,n)
a5.rotate(a3.e*180/3.141592653589793,0,0)
n=a3.r
if(n!==0)a5.translate(0,-n)
n=a3.c
if(n===0)n=0.001
g=a3.d
if(g===0)g=0.001
a5.scale(n,g)
n=s[i]
g=a3.w
if(g==null)g=b0
C.i0n(a6,n,t,b3,g,a3.f,a3.x)
a5.restore()}}a5.restore()},
aQO(d,e,f,g,h,i,j,a0){var w=0,v=B.j(x.gc),u,t,s,r,q,p,o,n,m,l,k
var $async$aQO=B.e(function(a1,a2){if(a1===1)return B.f(a2,v)
for(;;)switch(w){case 0:n=d>=1
m=A.k.V(n?480:480*d)
l=A.k.V(n?480/d:480)
k=new C.bST(0,0,12,D.aiS)
n=x.H,t=0
case 3:if(!(t<48)){w=5
break}$.S()
s=new B.oX()
C.huL(s.a3J(A.v1),new B.au(m,l),t/48,e,f,g,h,j,a0)
r=s.ne()
w=6
return B.b(r.x8(m,l),$async$aQO)
case 6:q=a2
w=7
return B.b(q.hr(A.a2C),$async$aQO)
case 7:p=a2
q.q()
r.q()
if(p==null){w=4
break}o=new B.Ec(null,null,null,null,0,A.e0,0,0)
o.bzi(null,A.dH.gaR(p),0,null,A.c7,0,0,A.e0,l,null,0,4,A.Lm,null,A.c7,null,null,m,!1)
k.cGJ(o,7)
i.$1((t+1)/48)
w=8
return B.b(B.bP(A.bF,null,n),$async$aQO)
case 8:case 4:++t
w=3
break
case 5:n=k.aFC(0)
if(n==null)n=new Uint8Array(0)
u=n
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aQO,v)},
fjn:function fjn(d,e,f){this.a=d
this.b=e
this.c=f},
fN7:function fN7(d){this.a=d},
feq:function feq(){var _=this
_.b=_.a=0
_.d=_.c=1
_.e=0
_.f=1
_.r=0
_.w=null
_.x=0},
fpb:function fpb(d){this.a=d},
fpc:function fpc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b8s:function b8s(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
fN8:function fN8(d){this.a=d},
fN9:function fN9(d){this.a=d},
WC:function WC(d){this.a=d},
asj:function asj(d,e,f){var _=this
_.d=$
_.e=d
_.f="bounce"
_.r="solid"
_.w=3
_.x=56
_.z=_.y=0
_.Q=!0
_.as=0
_.at=-1
_.ax=""
_.bz$=e
_.aa$=f
_.c=_.a=null},
cjC:function cjC(d,e){this.a=d
this.b=e},
cjx:function cjx(d){this.a=d},
cjy:function cjy(d){this.a=d},
cjw:function cjw(d,e){this.a=d
this.b=e},
cjz:function cjz(d,e){this.a=d
this.b=e},
cjA:function cjA(d){this.a=d},
cjB:function cjB(d){this.a=d},
cjm:function cjm(d){this.a=d},
cjn:function cjn(d){this.a=d},
cjl:function cjl(){},
cjo:function cjo(d,e){this.a=d
this.b=e},
cjp:function cjp(d,e){this.a=d
this.b=e},
cjk:function cjk(d,e){this.a=d
this.b=e},
cjq:function cjq(d,e){this.a=d
this.b=e},
cjj:function cjj(d,e){this.a=d
this.b=e},
cjr:function cjr(d,e){this.a=d
this.b=e},
cji:function cji(d,e){this.a=d
this.b=e},
cjs:function cjs(d,e){this.a=d
this.b=e},
cjh:function cjh(d,e){this.a=d
this.b=e},
cjt:function cjt(d){this.a=d},
cjg:function cjg(d){this.a=d},
cju:function cju(d){this.a=d},
cjv:function cjv(d){this.a=d},
cjf:function cjf(d,e){this.a=d
this.b=e},
aFa:function aFa(){},
b8C(){var w=0,v=B.j(x.D),u,t=2,s=[],r,q,p
var $async$b8C=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
r=$.h1L
w=7
return B.b(r==null?$.h1L=C.czX():r,$async$b8C)
case 7:r=e
u=r
w=1
break
t=2
w=6
break
case 4:t=3
p=s.pop()
$.h1L=null
throw p
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$b8C,v)},
czX(){var w=0,v=B.j(x.D),u,t
var $async$czX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=C
w=3
return B.b($.r3().C7("assets/data/world110.json",!1),$async$czX)
case 3:u=t.hRb(e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$czX,v)},
hRb(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=x.j,a0=d.a(A.X.aN(0,a2,null)),a1=B.a([],x.R)
for(w=J.aW(a0),v=x.n,u=x.b,t=x.h,s=x.gO;w.C();){r=t.a(w.gR(w))
q=B.a([],s)
for(p=J.a5(r),o=J.aW(d.a(p.h(r,"r")));o.C();){n=o.gR(o)
m=B.a([],u)
for(l=J.aW(d.a(n));l.C();){k=l.gR(l)
j=J.a5(k)
m.push(B.a([B.e5(j.h(k,0)),B.e5(j.h(k,1))],v))}q.push(m)}o=B.cP(p.h(r,"n"))
m=B.cP(p.h(r,"a"))
l=B.cP(p.h(r,"ct"))
j=B.cP(p.h(r,"sr"))
i=B.e5(p.h(r,"pop"))
h=B.e5(p.h(r,"gdp"))
g=B.cP(p.h(r,"inc"))
f=B.af("^\\d\\.\\s*",!0,!1,!1,!1)
g=B.aR7(g,f,"",0)
f=B.e5(J.r(p.h(r,"c"),0))
p=B.e5(J.r(p.h(r,"c"),1))
e=new C.abm(o,m,l,j,i,h,g,f,p,q)
e.bzQ(p,f,m,l,h,g,o,i,q,j)
a1.push(e)}return new C.abn(a1)},
fyP(d){if(d>=1e12)return A.k.ac(d/1e12,1)+" trillion"
if(d>=1e9)return A.k.ac(d/1e9,2)+" billion"
if(d>=1e6)return A.k.ac(d/1e6,1)+" million"
if(d>=1000)return A.k.ac(d/1000,1)+" thousand"
return A.k.ac(d,0)},
H7(d){var w,v,u,t=A.o.u(A.k.V(d))
for(w=t.length,v=0,u="";v<w;++v){if(v>0&&A.o.F(w-v,3)===0)u+=","
u+=t[v]}return u.charCodeAt(0)==0?u:u},
abm:function abm(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.ay=_.ax=_.at=_.as=_.Q=_.z=$},
abn:function abn(d){this.a=d},
vf:function vf(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.z=n},
Pv:function Pv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
yg:function yg(d,e,f){this.a=d
this.b=e
this.c=f},
Pu:function Pu(d){this.a=0
this.b=d
this.c=0},
hT4(d,e,f){return $.hT5.c3(0,d+"|"+B.w(e)+"|"+f.l(),new C.diG(d,e,f))},
VE:function VE(d){this.a=d},
aE6:function aE6(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.w=g
_.x=15
_.y=10
_.z=1
_.as=_.Q=0
_.ay=_.ax=_.at=null
_.db=_.cy=_.cx=_.CW=_.ch=!0
_.dx=!1
_.dy=14
_.fr=172
_.fx=null
_.fy=h
_.go=1
_.id=i
_.k1=!1
_.iK$=j
_.oF$=k
_.ni$=l
_.iL$=m
_.bz$=n
_.aa$=o
_.c=_.a=null},
e0e:function e0e(d){this.a=d},
e0f:function e0f(d){this.a=d},
e0d:function e0d(d,e){this.a=d
this.b=e},
e0g:function e0g(d){this.a=d},
e0c:function e0c(d){this.a=d},
e0h:function e0h(d){this.a=d},
e0a:function e0a(d){this.a=d},
e0b:function e0b(d,e,f){this.a=d
this.b=e
this.c=f},
e09:function e09(d){this.a=d},
e08:function e08(){},
e07:function e07(d){this.a=d},
e0A:function e0A(d,e){this.a=d
this.b=e},
e0B:function e0B(d,e){this.a=d
this.b=e},
e0p:function e0p(d){this.a=d},
e0q:function e0q(d){this.a=d},
e0o:function e0o(d){this.a=d},
e0r:function e0r(d){this.a=d},
e0i:function e0i(d,e){this.a=d
this.b=e},
e0j:function e0j(d){this.a=d},
e0C:function e0C(d,e){this.a=d
this.b=e},
e0n:function e0n(d,e){this.a=d
this.b=e},
e0G:function e0G(d){this.a=d},
e0z:function e0z(d){this.a=d},
e0H:function e0H(d,e){this.a=d
this.b=e},
e0y:function e0y(d,e){this.a=d
this.b=e},
e0I:function e0I(d){this.a=d},
e0x:function e0x(d,e){this.a=d
this.b=e},
e0J:function e0J(d){this.a=d},
e0w:function e0w(d,e){this.a=d
this.b=e},
e0K:function e0K(d){this.a=d},
e0v:function e0v(d,e){this.a=d
this.b=e},
e0L:function e0L(d){this.a=d},
e0u:function e0u(d,e){this.a=d
this.b=e},
e0M:function e0M(d){this.a=d},
e0t:function e0t(d){this.a=d},
e0N:function e0N(d){this.a=d},
e0s:function e0s(d){this.a=d},
e0D:function e0D(d){this.a=d},
e0m:function e0m(d){this.a=d},
e0E:function e0E(d){this.a=d},
e0l:function e0l(d){this.a=d},
e0F:function e0F(d){this.a=d},
e0k:function e0k(d){this.a=d},
e06:function e06(){},
e05:function e05(d){this.a=d},
e04:function e04(d){this.a=d},
bgn:function bgn(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.y=l
_.z=m
_.Q=n
_.as=o
_.a=p},
diG:function diG(d,e,f){this.a=d
this.b=e
this.c=f},
diH:function diH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aMl:function aMl(){},
aMm:function aMm(){},
afq(d,e,f,g,h){return new C.buO(d,e,f,g,h)},
buO:function buO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fkR:function fkR(){},
fkS:function fkS(){},
fkT:function fkT(){},
fkU:function fkU(){},
fkV:function fkV(){},
fkW:function fkW(){},
fkX:function fkX(){},
WE:function WE(d){this.a=d},
blD:function blD(){this.d=$
this.c=this.a=null},
eJa:function eJa(){},
eJb:function eJb(){},
eJ7:function eJ7(d){this.a=d},
eJ8:function eJ8(d){this.a=d},
eJ6:function eJ6(d){this.a=d},
eJ9:function eJ9(){},
eJ5:function eJ5(d,e){this.a=d
this.b=e},
eJ4:function eJ4(d){this.a=d},
hTw(){var w,v,u=x.n,t=B.a([],u)
for(w=0;w<260;++w){v=new B.e9()
v.d3(w)
t.push(v.ah()*3.141592653589793*2)}u=B.a([],u)
for(w=0;w<260;++w){v=new B.e9()
v.d3(w+900)
u.push(2.2+v.ah())}return new C.blq(new B.cB(null,x.z),new C.Pu(A.cZ),A.I,A.ax,t,u,$,A.bF,0,B.a([],x.X),null,null)},
hTy(d){return d===0?0:30+150*Math.sqrt(d/30.1)},
hTx(d){return 1.5+1.6*Math.log(d.d/1000+1)},
hlj(d,e,f){return $.hU8.c3(0,d+"|"+B.w(e)+"|"+f.l(),new C.f2K(d,e,f))},
Wq:function Wq(d){this.a=d},
blq:function blq(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
_.d=d
_.e=e
_.f=0
_.r=30
_.w=1
_.x=f
_.y=1
_.Q=_.z=null
_.ay=_.ax=_.at=_.as=!0
_.ch=g
_.CW=h
_.cx=i
_.iK$=j
_.oF$=k
_.ni$=l
_.iL$=m
_.bz$=n
_.aa$=o
_.c=_.a=null},
eBQ:function eBQ(d,e){this.a=d
this.b=e},
eC0:function eC0(d,e){this.a=d
this.b=e},
eC1:function eC1(d,e){this.a=d
this.b=e},
eBY:function eBY(d){this.a=d},
eBZ:function eBZ(d){this.a=d},
eC_:function eC_(d){this.a=d},
eC2:function eC2(d){this.a=d},
eBX:function eBX(d){this.a=d},
eC3:function eC3(d,e){this.a=d
this.b=e},
eC4:function eC4(d){this.a=d},
eBW:function eBW(d,e){this.a=d
this.b=e},
eC5:function eC5(d){this.a=d},
eBV:function eBV(d,e){this.a=d
this.b=e},
eC6:function eC6(d){this.a=d},
eBU:function eBU(d){this.a=d},
eC7:function eC7(d){this.a=d},
eBT:function eBT(d){this.a=d},
eC8:function eC8(d){this.a=d},
eBS:function eBS(d){this.a=d},
eC9:function eC9(d){this.a=d},
eBR:function eBR(d){this.a=d},
eBP:function eBP(){},
eBO:function eBO(){},
eBN:function eBN(d){this.a=d},
eBM:function eBM(d){this.a=d},
bsR:function bsR(d,e){this.b=d
this.a=e},
f2K:function f2K(d,e,f){this.a=d
this.b=e
this.c=f},
f2L:function f2L(){},
f2M:function f2M(){},
VF:function VF(d){this.a=d},
aE7:function aE7(d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.d="drop"
_.e=d
_.r=_.f=!1
_.w=0.4
_.x=!1
_.y=0
_.z=e
_.Q=f
_.as=g
_.at=50
_.ax=0.5
_.ay=7
_.ch=2
_.CW=!1
_.cx=h
_.cy=i
_.db=j
_.dx=""
_.dy=0
_.iK$=k
_.oF$=l
_.ni$=m
_.iL$=n
_.bz$=o
_.aa$=p
_.c=_.a=null},
e0R:function e0R(){},
e1j:function e1j(){},
e15:function e15(d,e){this.a=d
this.b=e},
e0X:function e0X(d,e){this.a=d
this.b=e},
e16:function e16(d){this.a=d},
e0W:function e0W(d){this.a=d},
e17:function e17(d){this.a=d},
e14:function e14(d){this.a=d},
e1b:function e1b(d){this.a=d},
e13:function e13(d){this.a=d},
e1c:function e1c(d){this.a=d},
e12:function e12(d,e){this.a=d
this.b=e},
e1d:function e1d(d){this.a=d},
e1e:function e1e(d){this.a=d},
e11:function e11(d,e){this.a=d
this.b=e},
e1f:function e1f(d){this.a=d},
e10:function e10(d,e){this.a=d
this.b=e},
e1g:function e1g(d){this.a=d},
e1_:function e1_(d,e){this.a=d
this.b=e},
e1h:function e1h(d){this.a=d},
e0Z:function e0Z(d,e){this.a=d
this.b=e},
e1i:function e1i(d){this.a=d},
e0Y:function e0Y(d){this.a=d},
e18:function e18(d){this.a=d},
e0V:function e0V(d){this.a=d},
e19:function e19(d){this.a=d},
e0U:function e0U(d){this.a=d},
e1a:function e1a(d){this.a=d},
e0T:function e0T(d){this.a=d},
e0Q:function e0Q(d){this.a=d},
e0P:function e0P(){},
e0S:function e0S(d,e){this.a=d
this.b=e},
e0O:function e0O(d){this.a=d},
bbx:function bbx(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=i},
Wi:function Wi(d){this.a=d},
bln:function bln(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=1
_.f=5
_.iK$=e
_.oF$=f
_.ni$=g
_.iL$=h
_.bz$=i
_.aa$=j
_.c=_.a=null},
euK:function euK(d,e){this.a=d
this.b=e},
euL:function euL(d,e){this.a=d
this.b=e},
euJ:function euJ(d,e){this.a=d
this.b=e},
euM:function euM(d,e){this.a=d
this.b=e},
euI:function euI(d,e){this.a=d
this.b=e},
bsp:function bsp(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
f0U:function f0U(d){this.a=d},
aMn:function aMn(){},
by4:function by4(){},
aMR:function aMR(){},
byd:function byd(){},
aMU:function aMU(){},
byf:function byf(){},
hTu(){var w,v,u,t=B.a([],x.d9),s=B.a([],x.g)
for(w=0;w<150;++w){v=new B.e9()
v.d3(w)
v=v.ah()
u=new B.e9()
u.d3(w+500)
s.push(new B.t(v,u.ah()))}return new C.bk7(new B.cB(null,x.z),new C.Pu(A.cZ),t,A.ax,s,$,A.bF,0,B.a([],x.X),null,null)},
Q_:function Q_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=1},
UJ:function UJ(d){this.a=d},
bk7:function bk7(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=d
_.e=e
_.f=0
_.r=10
_.y=_.x=_.w=!0
_.z=f
_.Q=g
_.as=0
_.at=h
_.iK$=i
_.oF$=j
_.ni$=k
_.iL$=l
_.bz$=m
_.aa$=n
_.c=_.a=null},
dK0:function dK0(){},
dJP:function dJP(){},
dJQ:function dJQ(d,e){this.a=d
this.b=e},
dJR:function dJR(d,e){this.a=d
this.b=e},
dJO:function dJO(d){this.a=d},
dJN:function dJN(d){this.a=d},
dJT:function dJT(d){this.a=d},
dJM:function dJM(d,e){this.a=d
this.b=e},
dJU:function dJU(d){this.a=d},
dJL:function dJL(d){this.a=d},
dJV:function dJV(d){this.a=d},
dJK:function dJK(d){this.a=d},
dJW:function dJW(d){this.a=d},
dJJ:function dJJ(d){this.a=d},
dJX:function dJX(d){this.a=d},
dJI:function dJI(d){this.a=d},
dJY:function dJY(d){this.a=d},
dJH:function dJH(d){this.a=d},
dJZ:function dJZ(d){this.a=d},
dJG:function dJG(d){this.a=d},
dK_:function dK_(d){this.a=d},
dJF:function dJF(d){this.a=d},
dJS:function dJS(d){this.a=d},
dJE:function dJE(d){this.a=d},
baU:function baU(d,e){this.b=d
this.a=e},
af4:function af4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
VC:function VC(d){this.a=d},
bky:function bky(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){var _=this
_.d=d
_.e=e
_.f=2
_.r=3.2
_.w=0
_.x=!1
_.z=_.y=!0
_.Q="spiral"
_.as=0.75
_.at=0
_.ax=1
_.ay=f
_.ch=!1
_.CW=g
_.cx=h
_.cy=i
_.db=j
_.dx=k
_.dy=l
_.fr=m
_.fx=n
_.fy=o
_.iK$=p
_.oF$=q
_.ni$=r
_.iL$=s
_.bz$=t
_.aa$=u
_.c=_.a=null},
e_x:function e_x(d){this.a=d},
e_n:function e_n(d,e){this.a=d
this.b=e},
e_o:function e_o(d,e){this.a=d
this.b=e},
e_m:function e_m(d,e){this.a=d
this.b=e},
e_p:function e_p(d){this.a=d},
e_l:function e_l(d){this.a=d},
e_q:function e_q(d){this.a=d},
e_k:function e_k(d,e){this.a=d
this.b=e},
e_r:function e_r(d){this.a=d},
e_j:function e_j(d,e){this.a=d
this.b=e},
e_s:function e_s(d){this.a=d},
e_i:function e_i(d,e){this.a=d
this.b=e},
e_t:function e_t(d){this.a=d},
e_h:function e_h(d,e){this.a=d
this.b=e},
e_u:function e_u(d){this.a=d},
e_g:function e_g(d){this.a=d},
e_v:function e_v(d){this.a=d},
e_f:function e_f(d){this.a=d},
e_w:function e_w(d){this.a=d},
e_e:function e_e(d){this.a=d},
bge:function bge(d,e){this.b=d
this.a=e},
dfQ:function dfQ(d){this.a=d},
We:function We(d){this.a=d},
blm:function blm(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.f="seasons"
_.w=_.r=0
_.x=!0
_.y=1
_.z=23.4
_.Q=!0
_.as=0
_.iK$=f
_.oF$=g
_.ni$=h
_.iL$=i
_.bz$=j
_.aa$=k
_.c=_.a=null},
etZ:function etZ(d,e){this.a=d
this.b=e},
eu_:function eu_(d){this.a=d},
etY:function etY(d){this.a=d},
eu0:function eu0(d){this.a=d},
etX:function etX(d){this.a=d},
eu1:function eu1(d){this.a=d},
etW:function etW(d){this.a=d},
eu2:function eu2(d){this.a=d},
etV:function etV(d){this.a=d},
eu3:function eu3(d){this.a=d},
etU:function etU(d,e){this.a=d
this.b=e},
eu4:function eu4(d){this.a=d},
etT:function etT(d,e){this.a=d
this.b=e},
eu5:function eu5(d){this.a=d},
etS:function etS(d,e){this.a=d
this.b=e},
eu6:function eu6(d){this.a=d},
etR:function etR(d,e){this.a=d
this.b=e},
brE:function brE(d,e){this.b=d
this.a=e},
aLX:function aLX(){},
bxY:function bxY(){},
aMj:function aMj(){},
by3:function by3(){},
aMQ:function aMQ(){},
byc:function byc(){},
fKs(d,e,f){return C.icR(d,e,f)},
icR(d,e,f){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$fKs=B.e(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:t=4
r=B.hK([d],f)
o=(self.URL||self.webkitURL).createObjectURL(r)
o.toString
q=o
n=B.mR(q)
n.download=e
o=n.style
o.display="none"
p=n
o=document.body
if(o!=null)o.appendChild(p).toString
J.Hc(p)
w=7
return B.b(B.bP(A.iU,null,x.H),$async$fKs)
case 7:J.lB(p);(self.URL||self.webkitURL).revokeObjectURL(q)
u=!0
w=1
break
t=2
w=6
break
case 4:t=3
l=s.pop()
u=!1
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$fKs,v)},
i6s(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.U(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.F)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.M)(w),++q){p=w[q]
u.push(B.G(["k",p.b,"x",B.o8(A.k.ac(p.c,4)),"y",B.o8(A.k.ac(p.d,4)),"v",p.e,"l",B.o8(A.k.ac(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.o8(A.k.ac(p.as,3)),"ch",p.at,"vc",B.o8(A.k.ac(p.z,3)),"s",B.o8(A.k.ac(p.ch,2))],s,r))}w=B.a([],x.fA)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.M)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.C(f,B.a6(f).k("ct.E"))
A.d.fd(l)
return A.X.ap(B.G(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
ig1(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.X.aN(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a9(h)
A.d.a9(a6.b)
v=B.a([],x.fs)
g=x.bM
f=g.a(J.r(w,"parts"))
f=J.aW(f==null?A.cv:f)
while(f.C()){u=f.gR(f)
t=i.a(u)
e=B.aU(J.r(t,"k"))
s=e==null?"":e
if(!$.qq().aj(0,s)){J.cc(v,null)
continue}d=s
a0=B.aK(J.r(t,"x"))
if(a0==null)a0=0.5
a1=B.aK(J.r(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.tE(a2,d,a0,a1)
a3.aqN(a2,d,a0,a1)
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
d=B.jT(J.r(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.jT(J.r(t,"b"))
r.x=d===!0
d=B.aU(J.r(t,"bw"))
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
i=J.aW(i==null?A.cv:i)
h=x.j
while(i.C()){q=i.gR(i)
p=h.a(q)
f=B.aK(J.r(p,0))
o=f==null?a5:A.k.N(f)
f=B.aK(J.r(p,2))
n=f==null?a5:A.k.N(f)
if(o==null||n==null||o<0||n<0||o>=J.ad(v)||n>=J.ad(v))continue
m=J.r(v,o)
l=J.r(v,n)
if(m!=null&&l!=null)a6.al5(m,A.k.N(B.e5(J.r(p,1))),l,A.k.N(B.e5(J.r(p,3))))}i=B.aK(J.r(w,"challenge"))
i=A.k.N(i==null?0:i)
k=B.aY(x.S)
h=g.a(J.r(w,"done"))
h=J.aW(h==null?A.cv:h)
while(h.C()){j=h.gR(h)
J.cc(k,A.k.N(B.e5(j)))}return new B.bpf(i,k)}catch(a4){return a5}},
fAO(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fAO=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.az(),$async$fAO)
case 7:r=o.aU(n.r(e.a,"ngmy_electronics_lab_v1"))
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
return B.i($async$fAO,v)},
bED(d){return C.ihB(d)},
ihB(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bED=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.az(),$async$bED)
case 7:w=6
return B.b(f.ar("String","ngmy_electronics_lab_v1",d),$async$bED)
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
return B.i($async$bED,v)}},D,G,L,T,Aj,A_,A5,Ak,U
J=c[1]
B=c[0]
A=c[2]
A0=c[149]
A6=c[147]
A1=c[138]
A2=c[136]
H=c[130]
V=c[126]
A7=c[140]
W=c[150]
P=c[103]
A3=c[112]
I=c[132]
A8=c[139]
A4=c[143]
A9=c[72]
X=c[81]
Aa=c[84]
O=c[120]
Ab=c[124]
Ac=c[122]
Y=c[128]
Q=c[131]
Z=c[144]
Ad=c[142]
N=c[141]
Ae=c[98]
Af=c[145]
R=c[121]
Ag=c[146]
Ah=c[127]
M=c[134]
S=c[99]
Ai=c[25]
E=c[27]
F=c[96]
K=c[94]
C=a.updateHolder(c[18],C)
D=c[3]
G=c[129]
L=c[44]
T=c[135]
Aj=c[148]
A_=c[106]
A5=c[137]
Ak=c[133]
U=c[100]
C.aUz.prototype={
a5(){return"DitherKernel."+this.b}}
C.bST.prototype={
cGJ(d,e){var w,v,u,t=this
if(t.fx==null){t.fx=B.wd(!1,8192)
if(!d.gpY()){w=B.fZh(d,256,t.e)
t.y=w
t.w=C.hr2(d,t.f,w,!1)}else t.w=d
t.x=e
t.z=d.gcn(0)
t.Q=d.gbb(0)
return}if(t.as===0){w=t.z
w===$&&B.c()
v=t.Q
v===$&&B.c()
t.baH(w,v)
t.baA()}w=t.w
w.toString
t.baG(w)
w=t.w
w.toString
v=t.z
v===$&&B.c()
u=t.Q
u===$&&B.c()
t.aUR(w,v,u);++t.as
if(!d.gpY()){w=B.fZh(d,256,t.e)
t.y=w
t.w=C.hr2(d,t.f,w,!1)}else t.w=d
t.x=e},
aFC(d){var w,v,u,t,s=this
if(s.fx==null)return null
if(s.as===0){w=s.z
w===$&&B.c()
v=s.Q
v===$&&B.c()
s.baH(w,v)
s.baA()}w=s.w
w.toString
s.baG(w)
w=s.w
w.toString
v=s.z
v===$&&B.c()
u=s.Q
u===$&&B.c()
s.aUR(w,v,u)
s.fx.bt(59)
s.y=s.w=null
s.as=0
u=s.fx
t=J.eG(A.aG.gaR(u.c),0,u.a)
s.fx=null
return t},
aUR(d,e,f){var w,v,u,t,s,r,q,p,o
if(!d.gpY())throw B.W(B.dQ("GIF can only encode palette images."))
w=d.a
v=w==null?null:w.geD()
u=v.a
t=this.fx
t.bt(44)
t.iR(0)
t.iR(0)
t.iR(e)
t.iR(f)
s=J.eG(v.gaR(v),0,null)
t.bt(135)
r=v.b
if(r===3)t.kM(s)
else if(r===4)for(q=0,p=0;q<u;++q,p+=4){t.bt(s[p])
t.bt(s[p+1])
t.bt(s[p+2])}else if(r===1||r===2)for(q=0,p=0;q<u;++q,p+=r){o=s[p]
t.bt(o)
t.bt(o)
t.bt(o)}for(q=u;q<256;++q){t.bt(0)
t.bt(0)
t.bt(0)}this.bOY(d,e,f)},
bOY(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h={}
i.fr=i.ax=i.at=0
i.dy=new Uint8Array(256)
i.fx.bt(8)
w=new Int32Array(5003)
v=new Int32Array(5003)
u=d.a
t=u.gaf(u)
t.C()
i.ay=i.ch=9
i.cx=511
i.cy=256
i.CW=257
i.dx=!1
i.db=258
h.a=!1
s=new C.bSU(h,t)
r=s.$0()
for(q=0,p=5003;p<65536;p*=2)++q
q=8-q
for(o=0;o<5003;++o)w[o]=-1
i.Yk(i.cy)
for(n=!0;n;){m=s.$0()
for(n=!1;m!==-1;){l=(m<<12>>>0)+r
o=(A.o.dU(m,q)^r)>>>0
u=w[o]
if(u===l){r=v[o]
m=s.$0()
continue}else if(u>=0){k=5003-o
if(o===0)k=1
do{o-=k
if(o<0)o+=5003
u=w[o]
if(u===l){r=v[o]
n=!0
break}}while(u>=0)
if(n)break}i.Yk(r)
u=i.db
if(u<4096){i.db=u+1
v[o]=u
w[o]=l}else{for(o=0;o<5003;++o)w[o]=-1
u=i.cy
i.db=u+2
i.dx=!0
i.Yk(u)}j=s.$0()
r=m
m=j}}i.Yk(r)
i.Yk(i.CW)
i.fx.bt(0)},
Yk(d){var w,v=this,u=v.at,t=v.ax
u&=D.dc6[t]
v.at=u
if(t>0){u=(u|A.o.dU(d,t))>>>0
v.at=u}else{v.at=d
u=d}t+=v.ay
v.ax=t
while(t>=8){v.aNk(u&255)
u=A.o.aD(v.at,8)
v.at=u
t=v.ax-=8}if(v.db>v.cx||v.dx)if(v.dx){w=v.ch
v.ay=w
v.cx=A.o.dt(1,w)-1
v.dx=!1}else{w=++v.ay
if(w===12)v.cx=4096
else v.cx=A.o.dt(1,w)-1}if(d===v.CW){while(t>0){v.aNk(u&255)
u=A.o.aD(v.at,8)
v.at=u
t=v.ax-=8}v.aUS()}},
aUS(){var w,v=this,u=v.fr
if(u>0){v.fx.bt(u)
u=v.fx
u.toString
w=v.dy
w===$&&B.c()
u.bkl(w,v.fr)
v.fr=0}},
aNk(d){var w,v,u=this,t=u.dy
t===$&&B.c()
w=u.fr
v=w+1
u.fr=v
t.$flags&2&&B.aj(t)
t[w]=d
if(v>=254)u.aUS()},
baA(){var w,v=this
v.fx.bt(33)
v.fx.bt(255)
v.fx.bt(11)
v.fx.kM(new B.d7("NETSCAPE2.0"))
w=v.fx
w.toString
w.kM(B.a([3,1],x.t))
v.fx.iR(v.b)
v.fx.bt(0)},
baG(d){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.fx.bt(33)
l.fx.bt(249)
l.fx.bt(4)
w=d.a
v=w==null?null:w.geD()
u=v.b
t=u-1
s=0
r=0
if(u===4||u===2){q=J.eG(v.gaR(v),0,null)
p=v.a
for(o=t,n=s;n<p;++n,o+=u)if(q[o]===0){s=n
r=1
break}}l.fx.bt(r|8)
w=l.fx
w.toString
m=l.x
w.iR(m==null?l.a:m)
l.fx.bt(s)
l.fx.bt(0)},
baH(d,e){var w=this
w.fx.kM(new B.d7("GIF89a"))
w.fx.iR(d)
w.fx.iR(e)
w.fx.bt(0)
w.fx.bt(0)
w.fx.bt(0)}}
C.co0.prototype={
a5(){return"QuantizerType."+this.b}}
C.ake.prototype={}
C.VR.prototype={
T(){return new C.bkT(B.U(x.N,x.i),new B.as(A.as,$.aw()),B.a([],x.X),B.a([],x.L),B.mK(0,null,null))}}
C.bkT.prototype={
gWy(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
q(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
this.ch.q()
this.a1()},
Pt(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Pt=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aV.al$.d.c
if(s!=null)s.ji()
p.bO(0,A.c9)
t.m(new C.ecU(t))
t.a.toString
p=t.gWy()
w=3
return B.b(C.bAb(C.hVm(q,C.i6k(p),o,t.ay)),$async$Pt)
case 3:s=e
r=s==null?null:J.iZ(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=C.i7K(q,p,o)
if(t.c==null){w=1
break}t.m(new C.ecV(t,o,r))
$.aV.x1$.push(new C.ecW(t))
case 1:return B.h(u,v)}})
return B.i($async$Pt,v)},
YB(d){return this.c0i(d)},
aWx(){return this.YB(null)},
c0i(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$YB=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aV.al$.d.c
if(s!=null)s.ji()
t.f.saX(0,o)
t.m(new C.ed6(t))
E.dY(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bAb(C.i1k(o)),$async$YB)
case 3:r=n.a=m.ifH(f)
p.b=""
if(r!=null&&!C.i6l(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.i7L(o)
q=B.af(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.ake(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new C.ed7(p,t))
t.c5K(p.a)
case 1:return B.h(u,v)}})
return B.i($async$YB,v)},
c5K(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
A.d.a9(w)
w=++m.as
v=m.gWy()
A.d.a9(v.a)
A.d.a9(v.b)
m.e.a9(0)
m.m(new C.ed2(m))
t=d.d
s=B.U(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.ed0(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.ed3(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.M)(r),++u){p.$2(o,new C.ed4(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.ed5(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.bw.j(0.1),g=B.m(16),f=B.J(A.bw.j(0.35),A.r,1)
if(m.x)j=B.B(B.a([D.f5Y,A.bd,B.E(B.d(m.Q,l,l,l,l,l,l,A.A9,l,l,l),1)],x.p),A.m,l,A.e,A.i,0,l,l)
else if(k==null)j=D.fwz
else{w=B.E(B.d(k.a,l,l,l,l,l,l,A.UT,l,l,l),1)
v=x.p
w=B.a([B.B(B.a([w,B.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fgW,l,l,l)],v),A.m,l,A.e,A.i,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.D(A.u0,B.d(u,l,l,l,l,l,l,D.fjJ,l,l,l),l))
w.push(A.cL)
w.push(B.d(k.b,l,l,l,l,l,l,F.E6,l,l,l))
u=k.e
if(u.length!==0){t=A.aU.j(0.12)
s=B.m(10)
w.push(B.p(l,B.d(u,l,l,l,l,l,l,D.fmd,l,l,l),A.f,l,l,new B.o(t,l,l,s,l,l,A.n),l,l,l,A.hY,A.cm,l,l,l))}w.push(A.am)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
q=u[r]
s=s?A.c:A.aB
w.push(new B.D(A.N4,new B.cd(A.aM,A.e,A.i,A.E,l,A.p,l,0,B.a([new B.y(t,l,A.ml,l,l,l,l,l,l,l,l,l),A.bo,new B.bA(1,A.bc,new B.y(q,l,new B.F(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.M)(j),++p){o=j[p]
t=new B.aQ(12,12)
s=new B.aQ(12,12)
A.d.v(w,B.a([A.O,new B.bM(A.a8,l,l,B.p(l,new B.y(o.a,l,A.Uz,l,l,l,l,l,l,l,l,l),A.f,l,l,new B.o(A.bw.j(0.3),l,l,new B.bj(t,t,t,t),l,l,A.n),l,l,l,l,A.h5,l,l,l),l),A.au,B.p(l,new B.y(o.b,l,D.frN,l,l,l,l,l,l,l,l,l),A.f,l,l,new B.o(A.c.j(0.07),l,l,new B.bj(s,s,s,s),l,l,A.n),l,l,l,l,A.bT,l,l,l)],v))}if(m.ax)w.push(D.eko)
j=B.ce(B.x(w,A.E,l,A.e,A.i,0,A.p),A.t,m.ch,A.y,l,l,l,l,A.ah)}w=x.p
g=B.x(B.a([B.air(B.p(l,j,A.f,l,new B.aZ(0,1/0,0,i),new B.o(h,l,f,g,l,l,A.n),l,l,l,D.bxw,A.eA,l,l,1/0),A.b6,A.iz),B.E(C.hal(m.gWy(),l,l,m.e),1)],w),A.m,l,A.e,A.i,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new C.eX("Ask about it",i,new C.eda(m),l,A.bw,l),new C.eX("Invent something new",!i,new C.edb(m),l,A.bw,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dnI[p]
i.push(new C.eX(n,!1,new C.edc(m,n),l,A.bw,l))}f.push(new C.hj(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.d67[p]
i.push(new C.eX(r,!1,new C.edd(m,r),l,A.bw,l))}f.push(new C.hj(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aM(l,A.Y,!1,l,!0,A.t,l,B.aN(),m.f,l,l,l,l,l,2,B.br(l,new B.b5(4,B.m(16),A.a0),l,A.eR,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kr,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.aj,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.ede(m,k),l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,A.df,!0,A.a3,l,A.ao,l,A.Ul,l,l),1)
h=m.at
v=h&&j?D.bMR:A.e5
j=h&&j?"Ask":"Invent"
f.push(B.B(B.a([i,A.ac,new C.j7(v,j,new C.edf(m,k),A.bw,l)],w),A.m,l,A.e,A.i,0,l,l))
return C.oA(A.bw,A.fu,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.x(f,A.m,l,A.e,A.Q,0,A.p))}}
C.Gm.prototype={}
C.v1.prototype={}
C.Wd.prototype={
T(){return new C.aEW(A.I,A.I,A.ax,B.aY(x.S),$,A.bF,0,B.a([],x.X),null,null)}}
C.aEW.prototype={
gaXO(){var w,v,u,t=this,s=D.HN[t.cx],r=D.Ry[t.cy],q=D.CS[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.eo(w,w.r,B.a6(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.ayg[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cI(p,0,new C.er9())},
ga2W(){return D.HN[this.cx].d/this.gaXO()},
gaP_(){return 0.1*(D.HN[this.cx].d/0.9)/D.Ry[this.cy].d},
Z(){this.a2()
this.pa()
C.chd("rocket_lander").bM(new C.ert(this),x.P)},
c5T(){var w=this
w.ay=A.k.E(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cZ.ah()*0.6
w.f=new B.t(0.15+A.cZ.ah()*0.7,0.08)
w.r=new B.t((A.cZ.ah()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
q7(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new C.eru())
return}w=D.rF[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.k.E(m.w,-1.2,1.2)
if(m.dx.t(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.t(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga2W()
v=v.a8(0,new B.t(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaP_())}if(m.dy){t=m.r
v=v.aF(0,t.aI(0,t.gcH()*6*D.aAh[m.d]))}t=m.r=m.r.a8(0,v.aI(0,d))
s=m.f=m.f.a8(0,t.aI(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new B.t(-t.a*0.4,t.b)
t=new B.t(A.k.E(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new B.t(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.CS[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b1K("rocket_lander",B.G(["unlocked",t],x.N,x.A))
C.Ja("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga2W()/(D.rF[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.k.ac(m.ga2W()/(D.rF[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
E.dY(80,"",500,0,0.6,"noise")
B.fJ()}}if(m.Q&&m.x>0&&A.o.F(A.k.bh(m.CW*20),2)===0)E.dY(90,"",70,0,0.12,"noise")
m.m(new C.erv())},
agk(d,e,f,g,h){var w,v=null,u=B.d(d,v,v,v,v,v,v,D.fjc,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new C.eX(e[w].a,f.$1(w),new C.erb(this,g,w),v,h,v))
return new B.D(A.eH,B.x(B.a([u,A.cL,B.bW(A.bC,s,A.bq,v,6,6)],t),A.E,v,A.e,A.i,0,A.p),v)},
bFi(d){var w,v,u,t,s=this,r=null,q=s.ga2W()/(D.rF[s.d].b/9.81*0.28)>=1,p=A.k.V(1/s.gaP_()),o=D.aAh[s.d],n=B.m(24),m=d.c,l=B.J(m.j(0.6),A.r,1)
m=B.a([B.d("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.au,B.d(d.d+" Gravity here: "+B.w(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.UO,r,r,r),A.W,s.agk("ENGINE: "+D.HN[s.cx].b,D.HN,new C.er0(s),new C.er1(s),A.cR),s.agk("FUEL TANK: "+D.Ry[s.cy].b,D.Ry,new C.er2(s),new C.er3(s),A.bj),s.agk("LANDING GEAR: "+D.CS[s.db].b,D.CS,new C.er4(s),new C.er5(s),A.aQ),s.agk("EXTRAS (tap to add)",D.ayg,new C.er6(s),new C.er7(s),A.bw)],x.p)
if(s.dx.t(0,2)&&!(o>0))m.push(D.fPg)
o=(q?A.bj:A.cs).j(0.14)
w=B.m(12)
v=A.k.ac(s.gaXO(),2)
u=A.k.ac(s.ga2W()/(D.rF[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.p(r,B.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.k.V(D.CS[s.db].d*100)+".",r,r,r,r,r,r,D.fjR,r,r,r),A.f,r,r,new B.o(o,r,r,w,r,r,A.n),r,r,r,A.hY,A.bT,r,r,r))
m.push(A.W)
m.push(new B.bM(A.A,r,r,new C.j7(A.ol,"Launch",new C.er8(s),A.bj,r),r))
return B.at(B.p(r,B.ce(B.x(m,A.E,r,A.e,A.Q,0,A.p),A.t,r,A.y,r,A.bQ,r,r,A.ah),A.f,r,A.lU,new B.o(D.bnt,r,l,n,r,r,A.n),r,r,r,A.bT,r,r,r,r),r,r,r)},
aYW(d,e,f,g){var w=null,v=f?A.cR:A.c.j(0.1),u=B.m(18),t=B.J(A.aZ,A.r,1)
return B.nK(A.jA,B.p(w,B.X(d,A.c,w,w,w,30),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new C.eqY(e),new C.eqZ(e),w,w,w,w,new C.er_(e))},
aYV(d,e,f){return this.aYW(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cz(new C.erm(s,D.rF[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.rF[w].a:"\ud83d\udd12"
o.push(new C.eX(v,s.d===w,new C.ern(s,w),r,D.rF[w].c,r))}v=B.a([s.aYV(F.ao4,new C.ero(s),s.y),A.bd,s.aYW(A.wd,new C.erp(s),s.Q,130),A.bd,s.aYV(A.OI,new C.erq(s),s.z)],p)
if(s.dx.t(0,2)){u=s.dy?A.aQ:A.c.j(0.1)
t=B.m(18)
A.d.v(v,B.a([A.bd,B.aB(r,B.p(r,D.bR3,A.f,r,r,new B.o(u,r,B.J(A.aZ,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.err(s),r,r,r,r,r,r,!1,A.a4)],p))}return C.oA(A.cR,A.fu,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.x(B.a([new C.hj(o,"WORLD",r),B.B(v,A.m,r,A.b8,A.i,0,r,r)],p),A.m,r,A.e,A.Q,0,A.p))}}
C.bhY.prototype={
a3(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=this.b,j=D.rF[k.d],i=a3.a,h=a3.b,g=0+i,f=0+h,e=$.S(),d=B.I(),a0=j.c,a1=B.ar(D.YT,a0,0.25)
a1.toString
d.sam(new B.a9(A.b4,A.b7,A.x,B.a([F.aft,a1],x.O),l,l).aB(0,new B.a3(0,0,g,f)))
a2.aP(new B.a3(0,0,g,f),d)
w=new B.e9()
w.d3(5)
for(g=a2.a,v=0;v<70;++v){f=w.ah()
d=w.ah()
a1=w.ah()
u=new B.ap(A.R,A.N,A.U,A.V,A.S)
u.r=A.c.j(0.2+w.ah()*0.5).gp(0)
t=u.G()
g.drawCircle(f*i,d*h*0.8,a1*1.2+0.3,t)
t.delete()}s=h*0.88
f=x.v
d=B.a([],f)
r=new B.aF(e.r,A.ag,l,l,d)
r.D(new B.aX(0,s+14))
q=new B.e9()
q.d3(2)
for(p=0;p<=i;p+=18){e=new B.aq(p,s+(Math.abs(p/i-k.ax)<k.ay/2+0.02?14:14-q.ah()*18))
d.push(e)
a1=r.f
if(a1!=null)e.by(a1)
e=r.e
if(e!=null)e.a.delete()
r.e=null}r.D(new B.aq(i,h))
r.D(new B.aq(0,h))
r.D(new B.bs())
e=$.S()
d=B.I()
d.r=B.ar(a0,A.w,0.6).gp(0)
a2.aG(r,d)
o=B.bJ(new B.t(k.ax*i,s+10),8,k.ay*i)
d=B.bt(o,A.i8)
a0=B.I()
a0.r=A.be.gp(0)
a2.az(d,a0)
a0=B.bt(o.cq(2),A.mU)
d=B.I()
d.b=A.aa
d.c=2
d.r=A.c.j(0.5+0.3*Math.sin(k.CW*4)).gp(0)
a2.az(a0,d)
if(k.as==="ready")return
d=k.f
J.bm(g.save())
g.translate(d.a*i,d.b*h)
a2.ie(0,k.w)
i=k.as
if(i==="crashed"){k=B.I()
k.r=A.cR.j(0.6).gp(0)
k.z=Y.Il
a2.ad(A.I,34,k)
g.restore()
return}if(k.Q&&k.x>0&&i==="flying"){i=e.r
n=new B.aF(i,A.ag,l,l,B.a([],f))
n.D(new B.aX(-8,18))
n.D(new B.aq(0,44+Math.sin(k.CW*40)*8))
n.D(new B.aq(8,18))
n.D(new B.bs())
k=B.I()
k.r=A.aU.gp(0)
a2.aG(n,k)
i=new B.aF(i,A.ag,l,l,B.a([],f))
i.D(new B.aX(-4,18))
i.D(new B.aq(0,32))
i.D(new B.aq(4,18))
i.D(new B.bs())
k=B.I()
k.r=A.c.gp(0)
a2.aG(i,k)}k=e.r
m=new B.aF(k,A.ag,l,l,B.a([],f))
m.D(new B.aX(0,-26))
m.D(new B.c4(14,-10,11,18))
m.D(new B.aq(-11,18))
m.D(new B.c4(-14,-10,0,-26))
m.D(new B.bs())
i=B.I()
i.sam(D.c2W.aB(0,D.eZ6))
a2.aG(m,i)
i=B.I()
i.r=A.aQ.gp(0)
a2.ad(G.uV,5,i)
i=new B.aF(k,A.ag,l,l,B.a([],f))
i.D(new B.aX(-11,6))
i.D(new B.aq(-20,20))
i.D(new B.aq(-11,18))
i.D(new B.bs())
h=B.I()
h.r=A.aw.gp(0)
a2.aG(i,h)
f=new B.aF(k,A.ag,l,l,B.a([],f))
f.D(new B.aX(11,6))
f.D(new B.aq(20,20))
f.D(new B.aq(11,18))
f.D(new B.bs())
k=B.I()
k.r=A.aw.gp(0)
a2.aG(f,k)
g.restore()},
aw(d){return!0}}
C.aMO.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.byb.prototype={
q(){var w,v,u
for(w=this.iL$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iK$
w===$&&B.c()
w.q()
this.bxk()}}
C.aSN.prototype={}
C.a3r.prototype={}
C.baX.prototype={}
C.UK.prototype={
T(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.eC(["skin"],x.N),o=new Float32Array(0)
return new C.aDr(w,v,u,t,s,r,q,new B.cB(null,x.z),p,D.L7,D.L7,A.ax,A.cZ,o,new Int32Array(0),$,A.bF,0,B.a([],x.X),null,null)}}
C.aDr.prototype={
Z(){var w=this
w.a2()
w.pa()
w.as=new C.c4k(w.gcen())
new C.dKs(w).$0()
return},
q(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a4(0)
v.d=null}this.bwt()},
ceo(d){var w,v=this
if(v.c==null)return
w=J.a5(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.f4(0,B.G(["t","init","data",$.hkm],x.N,x.A))
v.at=!0
v.ax=""
v.azm()
break
case"pick":v.m(new C.dK4(v,d))
break
case"shot":v.aia(B.w(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+B.w(w.h(d,"text")))
break}},
azm(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.aw9[q.CW]
v=new C.dK5()
u=q.ay
u=B.C(u,B.a6(u).k("ct.E"))
A.d.fd(u)
t=x.N
s=B.G(["layers",u,"skinMode",q.ch,"tone","#"+B.w(v.$1(w.b))+B.w(v.$1(w.c))+B.w(v.$1(w.d)),"sel",q.cx,"bpm",A.k.V(q.k3),"spin",q.fy],t,x.cK)
r=A.X.ap(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=B.U(t,x.A)
u.n(0,"t","state")
u.v(0,s)
v.f4(0,u)}},
aia(d){return this.cvk(d)},
cvk(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aia=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cF.aM(A.a.b7(d,A.a.cu(d,",")+1))
w=6
return B.b(B.avG(B.a([B.cCa(r,"image/png","body.png")],x.r),null,"Made in NGMY Core Protocol"),$async$aia)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.K(x.gV).f.U(D.aRa)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aia,v)},
ayP(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.t(0,w)},
q7(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.t(0,"organ")&&A.k.bh(w)!==A.k.bh(v.ok)){C.a8A("kick",0.4)
v.a5B(170,new C.dKt())}v.ok=w
return},
ai_(d){var w,v,u,t,s=this
s.m(new C.dK6(s,d))
if(d==null){s.fx=D.L7
s.dy=1
w=s.as
if(w!=null)w.f4(0,B.G(["t","focus","group",null],x.N,x.A))
return}w=s.d.e
v=B.T(w).k("Z<1>")
u=B.C(new B.Z(w,new C.dK7(d),v),v.k("L.E"))
t=A.d.gI(u).b
if(t!=="skin"&&!s.ay.t(0,t)){s.ay.M(0,t)
if(s.ch===2)s.ch=1}s.azm()
w=s.as
if(w!=null)w.f4(0,B.G(["t","focus","group",d],x.N,x.A))
s.go=0
s.cxO(t,d)
return},
cxO(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){C.a8A("kick",0.8)
this.a5B(260,new C.dK8())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")E.dY(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.a5B(w*70,new C.dK9(this))
else if(A.a.t(e,"intestine")||e==="Stomach")E.dY(110,"",360,0.7,0.3,"saw")
else C.h0f("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":E.dY(210+e.length*4,"",80,0.6,0.55,"tri")
E.dY(2400,"",20,0,0.3,v)
break
case"muscle":E.dY(70,"",150,1,0.6,"sine")
break
case"vessel":E.dY(300,"",380,0.4,0.22,v)
C.a8A("kick",0.3)
break
default:C.h0f("organic",2+A.o.F(e.length,6),200,0.4)}},
cCl(d){this.m(new C.dKb(this,d))},
aZd(){var w,v,u,t,s,r,q,p=this,o=B.aY(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,B.M)(w),++t){s=w[t]
if(p.ayP(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.M(0,s.a)}q=B.C(o,o.$ti.k("ct.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.au(w)]
p.p4=""},
bWU(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new C.dK1(u,w,d))
v=x.t
C.Ja("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.a5B(1100,new C.dK2(u))
return}if(d==null){if(u.cx!=null)u.ai_(null)
return}u.ai_(d)},
c_C(d,e){var w,v=this,u=null,t=B.m(18),s=B.J(A.c5.j(0.5),A.r,1)
if(v.p1){w=v.p2
w=B.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.ffj,u,u,u)}else if(d==null||e==null)w=D.ftY
else{w=x.p
w=B.B(B.a([B.E(B.x(B.a([B.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hD,u,u,u),A.cL,B.d(e.b,u,u,u,u,u,u,F.E6,u,u,u)],w),A.E,u,A.e,A.Q,0,A.p),1),B.aH(u,u,u,u,D.bTy,u,u,u,new C.dK3(v),u,u,u,u,"Back to the whole body",A.cd)],w),A.E,u,A.e,A.i,0,u,u)}return B.p(u,w,A.f,u,u,new B.o(D.Xi,u,s,t,u,u,A.n),u,u,u,u,H.ajN,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.dyO.h(0,g)
i.azm()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.dg5
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,B.M)(v),++s){r=v[s]
if(i.ayP(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.t(w,q))w.push(q)}v=x.p
u=B.a([B.aH(h,h,h,h,D.rC,h,h,h,new C.dKi(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bJ:B.Bv(h,A.po,q)}else q=A.kP
q=B.x(B.a([B.E(q,1),new B.D(F.ZV,i.c_C(g,f),h)],v),A.m,h,A.e,A.i,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){o=D.d7H[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.t(0,n)
p.push(new C.eX(l,n,new C.dKj(i,o),o.c,A.c5,h))}p=B.a([new C.hj(p,h,h)],v)
if(!i.p1&&w.length!==0){n=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.M)(w),++s){k=w[s]
n.push(new C.eX(k,k===i.cx,new C.dKk(i,k),h,A.aU,h))}p.push(new C.hj(n,"FIND",h))}if(t.t(0,"organ")){n=i.k3
p.push(C.lU(A.cs,""+A.k.V(n)+" beats/min","Heart rate",180,40,new C.dKl(i),n))}if(i.ch>0&&t.a===0){n=B.a([],v)
for(j=0;j<5;++j)n.push(new C.JQ(D.aw9[j],i.CW===j,new C.dKm(i,j),!1,h))
p.push(new C.hj(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=B.a([new C.eX("Spin",n,new C.dKn(i),D.amZ,A.aQ,h),new C.j7(A.oi,"Reset view",new C.dKo(i),A.c,h),new C.eX(l,m,new C.dKp(i),A.H3,A.aU,h)],v)
if(t.t(0,"organ"))v.push(new C.eX("Heartbeat sound",i.k4,new C.dKq(i),A.uu,A.cs,h))
p.push(new C.hj(v,h,h))
return C.oA(A.c5,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.x(p,A.m,h,A.e,A.Q,0,A.p))}}
C.aLY.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.aLZ.prototype={
q(){var w,v,u
for(w=this.iL$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iK$
w===$&&B.c()
w.q()
this.bws()}}
C.c4k.prototype={
kO(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aL(e,"</script","<\\/script")
v=$.hqx
$.hqx=v+1
u="ngmy-body-viewer-"+v
$.x3()
$.pD().oT(u,new C.c4l(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fG(v,"message",new C.c4m(t),!1,x.gA)
t.b=u},
f4(d,e){var w,v
try{w=this.c
if(w!=null){w=B.bA8(w.contentWindow)
if(w!=null)J.fXx(w,e,"*")}}catch(v){}}}
C.yj.prototype={}
C.CA.prototype={}
C.ns.prototype={}
C.bbH.prototype={}
C.UP.prototype={
T(){var w=x.N,v=x.y,u=x.S
return new C.aDt(B.U(w,x.a2),B.a([],x.cB),B.U(w,v),B.U(w,v),B.U(w,u),A.ax,A.I,A.I,B.aY(u),$,A.bF,0,B.a([],x.X),null,null)}}
C.aDt.prototype={
Z(){var w=this
w.a2()
w.pa()
w.acW()
$.aV.x1$.push(new C.dM7(w))},
acW(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$acW=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$acW)
case 6:q=e.tw("ngmy_circuit_passed_v1")
r=q==null?A.Y:q
if(s.c!=null)s.m(new C.dLM(s,r))
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
return B.i($async$acW,v)},
adh(d){return this.c3r(d)},
c3r(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$adh=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.M(0,d)
u=3
w=6
return B.b(B.az(),$async$adh)
case 6:r=f
q=s.cx
p=B.a6(q).k("k1<ct.E,n>")
q=B.C(new B.k1(q,new C.dLP(),p),p.k("L.E"))
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
return B.i($async$adh,v)},
axz(d,e,f,g){var w="c"+this.y++,v=new C.CA(w,e,f,g)
this.d.n(0,w,v)
return v},
mA(d,e,f){return this.axz(0,e,f,0)},
ach(d,e){var w
if(D.zy.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a8(0,new B.t(-36,w))},
tT(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aT2(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.ni$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.dq(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.eb(m,D.cRW[A.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.tT(p,0)&&n.tT(p,1)
break
case"or":p=q.a
o=n.tT(p,0)||n.tT(p,1)
break
case"xor":p=q.a
o=n.tT(p,0)!==n.tT(p,1)
break
case"nand":p=q.a
o=!(n.tT(p,0)&&n.tT(p,1))
break
case"nor":p=q.a
o=!(n.tT(p,0)||n.tT(p,1))
break
case"not":o=!n.tT(q.a,0)
break
default:o=n.tT(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bPv(){return this.aT2(null)},
q7(d){var w,v,u,t,s,r,q,p,o,n=this
n.bPv()
if(!n.ax)return
for(w=n.d,w=new B.bc(w,B.a6(w).k("bc<2>")).gaf(0),v=new B.f5(w,new C.dM8()),u=n.f,t=n.w,s=0;v.C();){r=w.gR(0).a
if(u.h(0,r)===!0){q=n.ni$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.ni$)
o=s+1
E.dY(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
axA(d){var w=this
w.d.a9(0)
A.d.a9(w.e)
w.f.a9(0)
w.r.a9(0)
w.cy=null},
m5(d,e){var w=this.x
return new B.t(d*w.a,e*w.b)},
atN(d){var w=this
if(w.x.A(0,A.ax)){$.aV.x1$.push(new C.dLK(w,d))
return}w.m(new C.dLL(w,d))},
cy5(d){this.m(new C.dLQ(this,d,$.bEZ()[d]))},
c8d(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bEZ()[a0]
v=d.d
u=B.a6(v).k("bc<2>")
t=u.k("Z<L.E>")
s=t.k("L.E")
r=B.C(new B.Z(new B.bc(v,u),new C.dLF(),t),s)
A.d.aY(r,new C.dLG())
q=B.C(new B.Z(new B.bc(v,u),new C.dLH(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new C.dLI(d,w))
return}u=d.r
p=B.dR(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dt(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.h3(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aT2(0)
h=m.h(0,A.d.gI(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.lr(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aH(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a9(0)
u.v(0,p)
d.m(new C.dLJ(d,o,a0))},
aym(d){var w,v,u,t,s=this.d,r=B.a6(s).k("bc<2>")
s=B.C(new B.bc(s,r),r.k("L.E"))
r=B.T(s).k("dw<1>")
s=new B.dw(s,r)
s=new B.bR(s,s.gL(0),r.k("bR<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cgN(d){var w,v,u,t,s,r=this.d,q=B.a6(r).k("bc<2>")
r=B.C(new B.bc(r,q),q.k("L.E"))
q=B.T(r).k("dw<1>")
r=new B.dw(r,q)
r=new B.bR(r,r.gL(0),q.k("bR<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c_v(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.zy.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.ach(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.z(p,o)
s=l}}}return t},
bOi(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.ach(p,o)
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
c8f(d){var w,v,u,t=this,s=t.aym(d)
if(s!=null){w=t.d.h(0,s)
w.toString
B.f1()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.n(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
E.dY(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new C.dLR())
return}u=t.bOi(d)
if(u!=null)t.m(new C.dLS(t,u))
else t.m(new C.dLT(t))},
awo(d){return this.c2q(d)},
c2q(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$awo=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.aym(d)
if(s==null){w=1
break}B.jJ()
t.m(new C.dLO(t,s))
case 1:return B.h(u,v)}})
return B.i($async$awo,v)},
bB7(d){if(this.x.A(0,A.ax))return
this.m(new C.dLE(this,d,A.cZ))
B.f1()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bEZ()[g]
g=x.p
v=B.a([B.aH(h,h,h,h,B.X(i.ax?A.uu:Q.Ct,A.ad,h,h,h,21),h,h,h,new C.dM1(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.m(16)
s=A.co.j(0.14)
r=B.J(A.co.j(0.5),A.r,1)
q=B.a([B.d("Challenge: "+w.a,h,h,h,h,h,h,D.fes,h,h,h),B.d(w.b,h,h,h,h,h,h,G.a9G,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.D(A.l2,B.d(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.bj:A.eO,h,h,h,h,h,h,h,h,12,h,h,A.H,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.p(h,B.B(B.a([B.E(B.x(q,A.E,h,A.e,A.i,0,A.p),1),B.bH(D.fFo,h,i.gc8c(),B.bo(A.co,h,h,h,h,h,h,h,h,h,h,A.cd))],g),A.m,h,A.e,A.i,0,h,h),A.f,h,h,new B.o(s,h,r,t,h,h,A.n),h,h,h,X.Ne,D.by9,h,h,1/0))}u.push(B.E(B.cz(new C.dM2(i)),1))
if(f!=null){t=B.m(14)
s=A.c.j(0.06)
r=f.b
u.push(B.p(h,B.d(D.zy.h(0,r).a+": "+D.zy.h(0,r).e,h,h,h,h,h,h,A.t9,h,h,h),A.f,h,h,new B.o(s,h,h,t,h,h,A.n),h,h,h,A.ZZ,A.bT,h,h,1/0))}u=B.x(u,A.m,h,A.e,A.i,0,A.p)
t=B.a([],g)
for(s=D.zy.gdV(D.zy),s=s.gaf(s);s.C();){r=s.gR(s)
q=new B.aQ(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ay(o.j(0.5),1,A.r,-1)
t.push(B.aB(h,B.p(h,B.x(B.a([B.X(p.b,o,h,h,h,20),A.bD,new B.y(p.a,h,D.aT8,h,h,h,h,h,h,h,h,h)],g),A.m,h,A.e,A.Q,0,A.p),A.f,h,h,new B.o(n,h,new B.bK(m,m,m,m),new B.bj(q,q,q,q),h,h,A.n),h,h,h,A.fB,Ae.Na,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dM3(i,r),h,h,h,h,h,h,!1,A.a4))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dkA[l]
s.push(new C.j7(A.OJ,k.b,new C.dM4(i,k),A.co,h))}s.push(new C.j7(D.Oo,"Clear",new C.dM5(i),A.cs,h))
r=B.a([],g)
for(j=0;q=$.bEZ(),j<6;++j){q=q[j]
p=i.cx.t(0,j)?A.ed:A.lC
o=i.ay
n=i.cx.t(0,j)?A.bj:A.bG
r.push(new C.eX(q.a,o===j,new C.dM6(i,j),p,n,h))}return C.oA(A.co,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.x(B.a([new C.hj(t,"PARTS",h),new C.hj(s,"TRY",h),new C.hj(r,"TASKS",h)],g),A.m,h,A.e,A.Q,0,A.p))}}
C.bc_.prototype={
a3(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.S()
w=B.I()
w.r=D.adW.gp(0)
a7.aP(new B.a3(0,0,0+a5,0+a6),w)
v=B.I()
v.r=A.c.j(0.05).gp(0)
for(w=a7.a,u=20;u<a6;u+=28)for(t=14;t<a5;t+=28){s=v.G()
w.drawCircle(t,u,1,s)
s.delete()}for(a5=this.b,a6=a5.e,r=a6.length,q=a5.f,p=x.v,o=a5.d,n=0;n<a6.length;a6.length===r||(0,B.M)(a6),++n){m=a6[n]
l=m.a
k=o.h(0,l)
j=o.h(0,m.b)
if(k==null||j==null)continue
i=k.c
h=i.a+36
i=i.b+0
g=a5.ach(j,m.c)
f=q.h(0,l)===!0
l=$.S()
e=B.a([],p)
d=new B.aF(l.r,A.ag,a4,a4,e)
e.push(new B.aX(h,i))
l=g.a
a0=Math.max(40,Math.abs(l-h)*0.5)
a1=g.b
e.push(new B.kX(h+a0,i,l-a0,a1,l,a1))
if(f){l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.b=A.aa
l.c=9
l.r=A.bG.j(0.28).gp(0)
l.z=I.pk
s=l.G()
l=d.gbw().a.snapshot()
w.drawPath((d.e=new B.cl(l)).a,s)
s.delete()}l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.b=A.aa
l.c=3.2
l.d=A.bE
l.r=(f?A.dP:A.br).gp(0)
s=l.G()
l=d.e
w.drawPath((l==null?d.e=new B.cl(d.gbw().a.snapshot()):l).a,s)
s.delete()}a2=a5.as
if(a2!=null&&o.h(0,a2)!=null){a3=o.h(0,a2).c.a8(0,D.IX)
g=a5.at
a5=g.a
a6=a3.a
a0=Math.max(40,Math.abs(a5-a6)*0.5)
p=new B.aF($.S().r,A.ag,a4,a4,B.a([],p))
w=a3.b
p.D(new B.aX(a6,w))
r=g.b
p.D(new B.kX(a6+a0,w,a5-a0,r,a5,r))
r=B.I()
r.b=A.aa
r.c=3
r.r=A.ad.gp(0)
a7.aG(p,r)}for(a5=new B.dq(o,o.r,o.e);a5.C();)this.c8e(a7,a5.d)},
c8e(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.zy.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.bJ(a0.c,64,64)
s=B.bt(t,A.lk)
r=w.cy===v
q=s.eV(A.cx)
$.S()
p=B.I()
p.r=A.w.j(0.55).gp(0)
p.z=A.mR
d.az(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.I()
p.sam(new B.c1(A.A,0.5,A.x,g,0,B.a([e.c.j(0.6),A.K],x.O),g,g).aB(0,B.bX(a0.c,52)))
d.ad(q,52,p)}q=s.eV(A.cH)
p=B.I()
o=e.c
p.r=B.ar(o,A.w,0.65).gp(0)
d.az(q,p)
n=u?0.35:0
q=B.I()
p=B.ar(o,A.c,0.1+n)
p.toString
m=B.ar(o,A.w,u?0.2:0.45)
m.toString
q.sam(new B.a9(A.b4,A.b7,A.x,B.a([p,m],x.O),g,g).aB(0,t))
d.az(s,q)
q=B.I()
q.b=A.aa
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.az(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.us:D.bNj}else l=e.b
k=C.h25(B.lr(l.a),30,A.c,l.b,g,A.H)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a3(d,v.aF(0,new B.t(p/2,q.gbb(q)/2)))
j=C.h25(e.a,10.5,A.c,g,g,A.H)
j.a3(d,a0.c.a8(0,new B.t(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.h25(f,9,u?A.dP:A.bY,g,g,A.u)
i.a3(d,a0.c.a8(0,new B.t(-i.b.c/2,51)))
for(h=0;h<e;++h)this.aZR(d,w.ach(a0,h),o)
this.aZR(d,a0.c.a8(0,D.IX),o)},
aZR(d,e,f){var w
$.S()
w=B.I()
w.r=D.adW.gp(0)
d.ad(e,8.5,w)
w=B.I()
w.b=A.aa
w.c=2.2
w.r=f.gp(0)
d.ad(e,8.5,w)
w=B.I()
w.r=A.c.gp(0)
d.ad(e,3.2,w)},
aw(d){return!0}}
C.aM2.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.by_.prototype={
q(){var w,v,u
for(w=this.iL$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iK$
w===$&&B.c()
w.q()
this.bwx()}}
C.NE.prototype={
T(){return new C.aDK(B.mK(0,null,null))}}
C.KH.prototype={
a5(){return"_UnfoldStyle."+this.b}}
C.AI.prototype={}
C.aDK.prototype={
c8k(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gco(0).at
v.toString
w.f=v}w.m(new C.dRY(w,e))},
c1i(){var w=this
w.e.q()
w.e=B.mK(w.f,null,null)
w.m(new C.dRX(w))},
q(){this.e.q()
this.a1()},
B(d){var w=this,v=null,u=w.d,t=u==null
return B.ow(t,B.c7(v,A.c0,t?new C.brZ(w.e,w.gc8j(w),new C.dRZ(d),v):new C.aHZ(u,new B.c0(u.b,x.gj)),v,!1,!1,v,!1),new C.dS_(w,u),x.K)}}
C.btz.prototype={}
C.brZ.prototype={
aZS(d,e){var w=null
return new B.D(H.a_o,B.x(B.a([B.d(d,w,w,w,w,w,w,D.ff2,w,w,w),A.bD,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.E,w,A.e,A.i,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=B.B(B.a([B.aH(v,v,v,v,S.nv,v,v,v,w.e,v,v,v,v,v,v),A.t3,D.bEc],u),A.m,v,A.e,A.i,0,v,v),s=w.aZS("STUDIOS","Play, make things, and keep what you make")
$.bF_()
return B.bl(!0,B.x(B.a([new B.D(D.bDe,t,v),B.E(B.vJ(0,v,A.t,w.c,A.y,v,v,v,v,v,!1,v,A.ah,!1,B.a([new B.mj(s,v),new B.nZ(A.hJ,B.Ph(new B.oz(new C.f0n(d),9,!0,!0,!0,0,B.t5(),v),D.aR_),v),new B.mj(w.aZS("SCENES","Each one is a studio too: change the style, colours and words"),v),new B.nZ(D.byh,B.Ph(new B.oz(new C.f0o(w),6,!0,!0,!0,0,B.t5(),v),D.aR_),v)],u)),1)],u),A.m,v,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0)}}
C.af9.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=B.m(20),n=B.m(20),m=B.ar(F.ng,p,0.3)
m.toString
w=x.O
m=B.a([m,D.agU],w)
v=B.J(p.j(0.6),A.r,1.2)
u=x.V
t=B.a([new B.ac(-4,A.G,p.j(0.22),A.I,14)],u)
s=B.ar(p,A.w,0.45)
s.toString
w=B.a([p,s],w)
u=B.a([new B.ac(0,A.G,p.j(0.5),A.I,12)],u)
return B.aG(!1,A.a2,!0,r,B.aO(!1,o,!0,B.eJ(B.x(B.a([B.p(r,B.X(q.c,A.c,r,r,r,24),A.f,r,r,new B.o(r,r,r,r,u,new B.a9(A.ay,A.aE,A.x,w,r,r),A.a6),r,44,r,r,r,r,r,44),A.O,B.d(q.a,r,2,A.a1,r,r,r,B.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.L,r,r),A.cL,B.d(q.b,r,2,A.a1,r,r,r,B.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.L,r,r)],x.p),A.m,r,A.b8,A.i,0,A.p),r,new B.o(r,r,v,n,t,new B.a9(A.ay,A.aE,A.x,m,r,r),A.n),r,A.Gg,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ai)}}
C.ae1.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=B.m(20),g=B.m(20),f=B.ar(F.ng,A.d.gI(i),0.24)
f.toString
w=x.O
f=B.a([f,D.agU],w)
v=B.J(A.d.gI(i).j(0.35),A.r,1)
u=x.V
t=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cx,12)],u)
s=x.p
r=B.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new B.aQ(6,6)
m=B.a([A.d.gI(i),A.d.gak(i)],w)
l=B.a([new B.ac(0,A.G,A.w.j(0.45),H.aJu,0)],u)
r.push(B.p(k,B.X(q[p],A.c,k,k,k,11),A.f,k,k,new B.o(k,k,k,new B.bj(n,n,n,n),l,new B.a9(A.a5,A.a8,A.x,m,k,k),A.n),k,17,k,new B.Q(p*4,0,(2-p)*4,o),k,k,k,k))}w=B.x(r,A.m,k,A.e,A.Q,0,A.p)
u=B.ar(A.d.gI(i),A.d.gak(i),0.4)
u.toString
return B.aG(!1,A.a2,!0,k,B.aO(!1,h,!0,B.eJ(B.x(B.a([new B.a7(58,k,w,k),A.W,B.d(j.b,k,2,A.a1,k,k,k,B.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.L,k,k),A.au,B.X(A.Cr,A.d.gI(i),k,k,k,18)],s),A.m,k,A.b8,A.i,0,A.p),k,new B.o(k,k,v,g,t,new B.a9(A.ay,A.aE,A.x,f,k,k),A.n),k,A.Gg,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ai)}}
C.Qt.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ar(A.d.gak(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=B.ao(-8,B.c2(j,new B.o(h,j,j,B.m(22),j,j,A.n),A.bg),j,j,2,2,8,j)
u=B.m(22)
t=k.y
s=x.V
r=B.a([new B.ac(0,A.G,A.w.j(0.55),A.IU,26),new B.ac(-6,A.G,A.d.gI(i).j(0.1+0.4*t),A.I,30)],s)
q=B.m(22)
p=B.ar(A.d.gI(i),A.c,0.14)
p.toString
o=A.d.gI(i)
n=A.d.gak(i)
i=B.ar(A.d.gak(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bT(0,B.c2(j,new B.o(j,j,j,j,j,new B.a9(A.ay,A.aE,A.x,B.a([p,o,n,i],m),D.dqb,j),A.n),A.bg),0,0,0),B.ao(j,B.c2(j,new B.o(j,j,j,j,j,new B.a9(A.b4,A.b7,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bg),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bT(0,B.b4(j,j,j,new C.bsY(i,j),A.ax),0,0,0))
i=A.c.j(0.16)
p=B.J(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ac(0,A.G,A.c.j(0.25*t),A.I,14)],s)
s=B.p(j,B.X(k.f,A.c,j,j,j,28),A.f,j,j,new B.o(i,j,p,j,s,j,A.a6),j,54,j,j,j,j,j,54)
p=B.a([B.d(k.r,j,j,j,j,j,j,D.fgM,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,B.a([A.au,B.d(i,j,1,A.a1,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a7,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.U9)
p.push(B.p(j,j,A.f,j,j,new B.o(A.c.j(0.28),j,j,B.m(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new B.D(A.fY,B.B(B.a([s,A.er,B.E(B.x(p,A.E,j,A.e,A.Q,0,A.p),1)],l),A.m,j,A.e,A.i,0,j,j),j))
i=k.x
if(i>0)m.push(B.bT(0,B.e0(B.ec(j,A.w.j(A.k.E(i*0.6,0,0.7)),!0),!0,j),0,0,0))
i=B.m(22)
m.push(B.bT(0,B.e0(B.c2(j,new B.o(j,j,B.J(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.bg),!0,j),0,0,0))
return new B.a7(w,v,new B.an(A.a_,j,A.ab,A.f,B.a([h,B.bT(0,B.c2(B.bx(q,new B.an(A.a_,j,A.ab,A.t,m,j),A.ap),new B.o(j,j,j,u,r,j,A.n),A.bg),0,0,0)],l),j),j)}}
C.bsY.prototype={
a3(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a3(r,-10,s,w)
u=d.a
J.bm(u.save())
u.translate(v.gbK().a,v.gbK().b)
d.ie(0,0.35)
t=B.bJ(A.I,(w- -10)*1.6,s-r)
$.S()
s=B.I()
s.sam(new B.a9(A.a5,A.a8,A.x,B.a([A.K,A.c.j(0.3),A.K],x.O),null,null).aB(0,t))
d.aP(t,s)
u.restore()},
aw(d){return d.b!==this.b}}
C.bst.prototype={
B(d){var w=null,v=B.m(22),u=B.a([D.blo,D.ag2],x.O),t=this.e,s=B.J(A.d.gI(t).j(0.4),A.r,1.2),r=B.a([new B.ac(0,A.G,A.w.j(0.5),A.ko,24)],x.V),q=B.m(22),p=A.d.gI(t)
return new B.a7(this.c,this.d,B.c2(B.bx(q,B.b4(B.at(B.X(A.jT,A.d.gI(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.baF(p,w),A.ax),A.ap),new B.o(w,w,s,v,r,new B.a9(A.ay,A.aE,A.x,u,w,w),A.n),A.bg),w)}}
C.baF.prototype={
a3(d,e){var w,v,u,t,s,r,q,p
$.S()
w=B.I()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=d.a,r=0;r<u;r+=18){q=w.G()
s.drawLine.apply(s,[r,0,r,t,q])
q.delete()}for(p=0;p<t;p+=18){q=w.G()
s.drawLine.apply(s,[0,p,u,p,q])
q.delete()}u=e.ei(A.I)
$.S()
t=B.I()
t.b=A.aa
t.c=1.4
t.r=v.j(0.35).gp(0)
d.ad(u,30,t)},
aw(d){return!1}}
C.aHZ.prototype={
T(){return new C.aI_(new B.cB(null,x.z),null,null)}}
C.aI_.prototype={
guh(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,D.bvD,null,1,null,v)
w.cM(0)
v.d!==$&&B.bG()
v.d=w
u=w}return u},
gZY(){var w,v=this,u=v.e
if(u===$){w=B.bn(null,A.fX,null,1,null,v)
w.fm(0,!0)
v.e!==$&&B.bG()
v.e=w
u=w}return u},
gaxB(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gc8h(){var w=this.w
if(w===$){w=B.C(this.a.c.d,x.k)
this.w=w}return w},
gaWf(){var w=this.x
if(w===$){w=B.C(this.a.c.e,x.Z)
this.x=w}return w},
gaX_(){var w=this.y
if(w===$){w=B.C(this.a.c.f,x.N)
this.y=w}return w},
gb7x(){var w=this.z
if(w===$){w=B.C(this.a.c.r,x.N)
this.z=w}return w},
Z(){this.a2()
var w=this.guh()
w.df()
w.dS$.M(0,this.gcxP())},
cxQ(){var w,v,u,t,s,r,q,p=this,o=p.guh().x
o===$&&B.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gaxB().a){case 0:w=D.ny
break
case 1:w=D.uC
break
case 2:w=D.a3Z
break
case 3:w=D.ny
break
case 4:w=D.dcW
break
case 5:w=D.uC
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.abC)r=0.09
else r=s===D.abD?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){E.dY(260+90*v,"",260,1.6,0.18,"tri")
u=D.c5t[v]
C.q1("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.Ja("bell",D.ceh,1400,0.35)}}p.ax=o},
q(){this.guh().q()
this.gZY().q()
this.byg()},
ael(){var w=this
w.guh().cXm(0,B.dE(0,0,0,A.k.V(11e3/w.Q),0,0))
w.m(new C.f03(w))},
ciQ(){this.guh().bR(0)
this.m(new C.f02(this))},
aek(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$aek=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gaX_(),s=t.length,r=0;r<t.length;t.length===s||(0,B.M)(t),++r){q=t[r]
l.push(new B.as(new B.bb(q,A.b3,A.aO),$.aw()))}m=B.a([],m)
for(t=u.gb7x(),s=t.length,r=0;r<t.length;t.length===s||(0,B.M)(t),++r){p=t[r]
m.push(new B.as(new B.bb(p,A.b3,A.aO),$.aw()))}o=B.C(u.gaWf(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bU(F.ng,null,new C.f01(u,l,m,o),t,!0,!0,!0,A.lL,!1,!1,x.H),$async$aek)
case 2:l=B.C(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.S$=$.aw()
n.P$=0}return B.h(null,v)}})
return B.i($async$aek,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gaxB(),f=i.a.c,e=f.b,d=i.gc8h(),a0=new C.AI(g,e,f.c,d,i.gaWf(),i.gaX_(),i.gb7x())
f=B.ar(A.d.gI(d),A.d.gak(d),0.4)
f.toString
g=x.p
w=B.a([B.aH(h,h,h,h,B.X(i.at?A.uu:Q.Ct,A.ad,h,h,h,21),h,h,h,new C.f0b(i),h,h,h,h,"Sound",h),B.aH(h,h,h,h,D.bX6,h,h,h,i.gc8i(),h,h,h,h,"Edit words and pictures",h),B.aH(h,h,h,h,D.rC,h,h,h,new C.f0c(i,a1),h,h,h,h,"Share",h)],g)
v=B.a([B.ca(i.gZY(),new C.f0d(i,a0),h),B.cz(new C.f0e(i,a0))],g)
u=i.as
t=u?i.gciP():i.gc8l()
u=u?D.bMD:A.ry
s=B.ar(A.d.gI(d),A.d.gak(d),0.4)
s.toString
t=B.B(B.a([B.aH(h,h,h,h,B.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.cd),B.E(B.ca(i.guh(),new C.f0f(i,a1,a0),h),1),B.aH(h,h,h,h,D.bTo,h,h,h,new C.f0g(i),h,h,h,h,"Replay",A.cd)],g),A.m,h,A.e,A.i,0,h,h)
s=i.Q
u=A.k.ac(s,1)
r=B.ar(A.d.gI(d),A.d.gak(d),0.4)
r.toString
s=C.lU(r,u+"x","Speed",2.5,0.4,new C.f0h(i),s)
u=B.a([],g)
for(q=0;q<6;++q){p=D.dni[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=B.ar(A.d.gI(d),A.d.gak(d),0.4)
r.toString
u.push(new C.eX(p.b,o===p.a,new C.f0i(i,p),p.c,r,h))}d=B.a([],g)
for(r=x.k,q=0;q<10;++q){n=D.c5R[q]
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}m=A.d.gI(o).A(0,A.d.gI(n))?34:28
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}l=A.d.gI(o).A(0,A.d.gI(n))?34:28
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}k=A.d.gI(o).A(0,A.d.gI(n))?A.c:A.aZ
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}j=new B.ay(k,A.d.gI(o).A(0,A.d.gI(n))?2.5:1,A.r,-1)
d.push(B.aB(h,B.p(h,h,A.f,h,h,new B.o(h,h,new B.bK(j,j,j,j),h,h,new B.a9(A.ay,A.aE,A.x,n,h,h),A.a6),h,l,h,D.ajh,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f0j(i,n),h,h,h,h,h,h,!1,A.a4))}return C.oA(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.ex(new B.an(A.a_,h,A.b1,A.t,v,h),i.f),e,B.x(B.a([t,s,new C.hj(u,"STYLE",h),new C.hj(d,"THEME",h)],g),A.m,h,A.e,A.Q,0,A.p))},
bAj(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.ny[r]
p=A.k.E((1-A.et.av(0,A.k.E((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.k.E(p/1.5707963267948966,0,1)
q=D.ny[r]
n=q+0.12
m=A.k.E((a0-n)/(q+0.2-n),0,1)
n=D.ny[r]
q=n-0.01
q=A.k.E((a0-q)/(n+0.03-q),0,1)
n=B.dr()
l=n.a
l.$flags&2&&B.aj(l)
l[11]=0.0013
n.kg(p)
l=v[r]
k=u[r]
j=t[r]
i=D.ny[r]
h=i+0.1
if(A.k.E((a0-h)/(i+0.3-h),0,1)>0){i=D.ny[r]
h=i+0.1
h=A.k.E((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.ny[r]
h=i+0.1
h=A.k.E((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cN(0,r*118,0,f,f,f,new B.kz(q,new B.iJ(n,f,A.b4,!0,f,new C.Qt(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.ny[r]
u=v-0.02
g=A.k.E((a0-u)/(v+0.1-u),0,1)
u=A.d.gI(w)
v=D.ny[r]
t=v+0.12
e.push(new B.cN(0,r*118-3-2,0,f,f,4,new B.mu(new C.brB(u,g,1-A.k.E((a0-t)/(v+0.22-t),0,1),f),f,A.ax,f,f),f))}return new B.a7(a2,358,new B.an(A.a_,f,A.ab,A.f,e,f),f)},
bR1(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.uC[r]
p=A.q3.av(0,A.k.E((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.uC[r]
m=q+0.15
l=A.k.E((a0-m)/(q+0.25-m),0,1)
m=D.uC[r]
q=m-0.03
q=A.k.E((a0-q)/(m+0.01-q),0,1)
m=B.dr()
k=m.a
k.$flags&2&&B.aj(k)
k[11]=0.0011
m.jV(n,n,n,1)
m.fG(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new C.Qt(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dr()
k.fG(3.141592653589793)
k=new B.iJ(k,f,A.A,!0,f,new C.bst(a2,108,w,f),f)}e.push(new B.cN(0,r*130,0,f,f,f,new B.kz(q,new B.iJ(m,f,A.A,!0,f,k,f),f),f))}return new B.a7(a2,378,new B.an(A.a_,f,A.ab,A.f,e,f),f)},
cCO(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a3Z[w]
l.push(A.cu.av(0,A.k.E((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bT(0,B.b4(n,n,n,new C.bv2(d.d,l,D.axR,m,C.brY(e,0.4,0.62),f,C.brY(e,0.45,0.7),n),A.ax),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.h2B(g,w)
q=D.axR[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cN(r,s-q*m*p+12,n,n,t,n,new B.kz(o,B.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.h2B(g,w)
r=D.a3Z[w]
q=r+0.15
v.push(new B.cN(s,l,n,n,t,n,new B.kz(A.k.E((e-q)/(r+0.25-q),0,1),new B.y(u[w],n,A.UZ,n,A.L,n,n,n,n,n,n,n),n),n))}return new B.a7(g,m+90,new B.an(A.a_,n,A.ab,A.f,v,n),n)},
bGy(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cu.av(0,C.brY(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bT(0,B.at(B.dP(B.b4(f,f,f,new C.br1(A.d.gI(a1),C.brY(a3,0,0.2),a4,f),new B.au(a5*0.95,70)),D.eeG),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.k.E((a3-l)/(0.12+m-l),0,1)
j=A.dx.av(0,A.k.E((o-0.7)/0.3,0,1))
l=B.dr()
m=l.a
m.$flags&2&&B.aj(m)
m[11]=0.001
l.fG(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.jV(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.k.F(r,1):-1
w.push(new B.z(o,new B.cN(0,0,0,0,f,f,new B.cg(A.A,f,f,new B.kz(k*(0.45+0.55*o),B.dP(new B.iJ(l,f,A.A,!0,f,new C.Qt(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.t(n*a5*0.34,-o*18)),f),f),f)))}A.d.aY(w,new C.f_V())
A.d.v(a0,new B.N(w,new C.f_W(),x.fR))
return new B.a7(a5,330,new B.an(A.a_,f,A.ab,A.f,a0,f),f)},
c8g(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.uC[q]
o=A.k.E((a2-p)/(p+0.22-p),0,1)
n=A.lp.av(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.uC[q]
m=A.k.E((a2-m)/(m+0.02-m),0,1)
l=D.azX[q]
k=B.dr()
k.mO(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.jV(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.uC[q]
g=h+0.1
g=A.k.E((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cN(0,0,0,0,e,e,new B.cg(A.A,e,e,new B.kz(m,B.dP(new B.iJ(k,e,A.A,!0,e,new C.Qt(d,92,w,p,j,i,0,g*s,h,e),e),new B.t(0,l)),e),e),e))
l=D.uC[q]
h=l+0.02
f=A.k.E((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cN(0,0,0,0,e,e,new B.cg(A.A,e,e,B.dP(new B.mu(new C.bbk(w,f,q,e),e,new B.au(r,212),e,e),new B.t(0,D.azX[q])),e),e))}return new B.a7(a4,330,new B.an(A.a_,e,A.ab,A.f,a0,e),e)},
bDe(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.t(-b0,-150),new B.t(b0,-40),D.eeK],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.ny[r]
p=A.k.E((a8-q)/(q+0.2-q),0,1)
o=A.cu.av(0,p)
q=D.aA5[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.ny[r]
f=g+0.2
e=A.k.E((a8-f)/(g+0.3-f),0,1)
f=D.ny[r]
g=f-0.01
g=A.k.E((a8-g)/(f+0.03-g),0,1)
f=B.dr()
d=f.a
d.$flags&2&&B.aj(d)
d[11]=0.001
f.mO(l*h+D.dh3[r]*o)
f.fG(l*0.9)
h=0.55+0.45*o
f.jV(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cN(0,0,0,0,a3,a3,new B.cg(A.A,a3,a3,new B.kz(g,B.dP(new B.iJ(f,a3,A.A,!0,a3,new C.Qt(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.t(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.ny[r]
i=q+0.17
a2=A.k.E((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aA5[r]
a6.push(new B.cN(0,0,0,0,a3,a3,new B.cg(A.A,a3,a3,B.dP(new B.mu(new C.br3(A.d.gI(w),a2,a3),a3,new B.au(a4,30),a3,a3),new B.t(0,q+48-4)),a3),a3))}}return new B.a7(b0,330,new B.an(A.a_,a3,A.ab,A.f,a6,a3),a3)}}
C.brB.prototype={
a3(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a3(w-v,0,w+v,e.b)
q=B.bt(u,A.hk)
$.S()
t=B.I()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.z=I.pk
d.az(q,t)
t=B.bt(u,A.hk)
q=B.I()
q.r=A.c.j(s).gp(0)
d.az(t,q)},
aw(d){return d.c!==this.c||d.d!==this.d}}
C.br1.prototype={
a3(d,e){var w,v,u=this.c,t=B.bJ(e.ei(A.I),e.b*u,e.a*u)
$.S()
u=B.I()
u.b=A.aa
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.z=Y.Il
d.dO(t,u)
u=B.I()
u.b=A.aa
u.c=2.5
u.r=w.j(0.7).gp(0)
d.dO(t,u)
u=t.cq(-14)
v=B.I()
v.b=A.aa
v.c=1
v.r=w.j(0.3).gp(0)
d.dO(u,v)},
aw(d){return!0}}
C.bbk.prototype={
a3(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.ei(A.I),f=this.c,e=A.cu.av(0,f)
$.S()
w=B.I()
w.b=A.aa
v=1-f
w.c=5*v
u=this.b
w.r=A.d.gI(u).j(0.6*v).gp(0)
d.ad(g,40+e*a0.a*0.42,w)
t=new B.e9()
t.d3(this.d*17+3)
for(w=d.a,s=40*f*f*3,r=g.a,q=g.b,f=1-f*0.6,p=0;p<26;++p){o=t.ah()*3.141592653589793*2
n=(40+t.ah()*110)*e
m=Math.cos(o)
l=Math.sin(o)
k=t.ah()
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
i=(p&1)===0?A.d.gI(u):A.c
j.r=i.j(A.k.E(v,0,1)).gp(0)
h=j.G()
w.drawCircle(r+m*n*1.6,q+(l*n+s),(2+k*3)*f,h)
h.delete()}},
aw(d){return!0}}
C.br3.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m=e.ei(A.I)
for(w=e.a,v=e.b,u=this.b,t=d.a,s=this.c,r=0;r<2;++r){q=A.k.E(s-r*0.18,0,1)
if(q<=0)continue
p=B.bJ(m,v*(0.3+q*0.9),w*(0.5+q*0.7))
$.S()
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.b=A.aa
o.c=2
o.r=u.j((1-q)*0.7).gp(0)
n=o.G()
t.drawOval(B.bF(p),n)
n.delete()}},
aw(d){return d.c!==this.c}}
C.bv2.prototype={
a3(d2,d3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2=null,c3=c1.e,c4=c3+36,c5=d3.a,c6=c5*0.23,c7=c6*0.34,c8=c7*0.85,c9=-c7*0.5,d0=c4-4,d1=new B.a3(0,d0,0+c5,d0+60)
$.S()
d0=B.I()
w=c1.b
v=x.O
d0.sam(new B.a9(A.b4,A.b7,A.x,B.a([A.d.gI(w).j(0.18),A.K],v),c2,c2).aB(0,d1))
d2.aP(d1,d0)
d0=B.I()
d0.r=A.c.j(0.18).gp(0)
d0.c=1
d2.bo(new B.t(0,c4),new B.t(c5,c4),d0)
for(d0=c1.w,u=d0>0,t=d2.a,s=(c6-16)/3,r=s-5,q=0.6+0.3*c1.r,p=c1.f,o=c4-14,n=x.v,m=c4+c9,l=c1.d,k=c4-6,j=c6+c8+8,i=k+16,h=c1.c,g=d0<1,f=0;f<3;++f){e=h[f]
if(e<=0)continue
d=C.h2B(c5,f)
a0=l[f]*c3*e
a1=d-4
a2=$.S()
a3=new B.ap(A.R,A.N,A.U,A.V,A.S)
a3.r=A.w.j(0.5).gp(0)
a3.z=A.mR
a4=a3.G()
t.drawOval(B.bF(new B.a3(a1,k,a1+j,i)),a4)
a4.delete()
a1=c4-a0
a3=d+c6
a5=new B.a3(d,a1,a3,a1+a0)
a6=new B.ap(A.R,A.N,A.U,A.V,A.S)
a7=B.ar(A.d.gI(w),A.c,0.1)
a7.toString
a6.sam(new B.a9(A.b4,A.b7,A.x,B.a([a7,A.d.gak(w)],v),c2,c2).aB(0,a5))
a4=a6.G()
t.drawRect(B.bF(a5),a4)
a4.delete()
a2=a2.r
a6=B.a([],n)
a8=new B.aF(a2,A.ag,c2,c2,a6)
a6.push(new B.aX(a3,a1))
a7=a3+c8
a9=a1+c9
a6.push(new B.aq(a7,a9))
a6.push(new B.aq(a7,m))
a6.push(new B.aq(a3,c4))
a6.push(new B.bs())
a6=new B.ap(A.R,A.N,A.U,A.V,A.S)
a6.r=B.ar(A.d.gak(w),A.w,0.5).gp(0)
a4=a6.G()
a6=a8.gbw().a.snapshot()
t.drawPath((a8.e=new B.cl(a6)).a,a4)
a4.delete()
a6=B.a([],n)
b0=new B.aF(a2,A.ag,c2,c2,a6)
a6.push(new B.aX(d,a1))
a6.push(new B.aq(d+c8,a9))
a6.push(new B.aq(a7,a9))
a6.push(new B.aq(a3,a1))
a6.push(new B.bs())
a2=new B.ap(A.R,A.N,A.U,A.V,A.S)
a2.r=B.ar(A.d.gI(w),A.c,0.45).gp(0)
a4=a2.G()
a2=b0.gbw().a.snapshot()
t.drawPath((b0.e=new B.cl(a2)).a,a4)
a4.delete()
b1=new B.ap(A.R,A.N,A.U,A.V,A.S)
b1.b=A.aa
b1.c=1
b1.r=A.c.j(0.28).gp(0)
a4=b1.G()
t.drawRect(B.bF(a5),a4)
a4.delete()
a4=b1.G()
a2=a8.e
t.drawPath((a2==null?a8.e=new B.cl(a8.gbw().a.snapshot()):a2).a,a4)
a4.delete()
a4=b1.G()
a2=b0.e
t.drawPath((a2==null?b0.e=new B.cl(b0.gbw().a.snapshot()):a2).a,a4)
a4.delete()
b2=A.k.bh(a0/22)
for(a1+=6,a2=d+8,a6=p*b2*1.3,b3=0;b3<b2;++b3){b4=a6>b2-b3-1
for(a7=o-b3*22-12,a9=a7<a1,b5=a7+10,b6=0;b6<3;++b6){b7=a2+b6*s
if(a9)continue
b8=B.bt(new B.a3(b7,a7,b7+r,b5),A.hk)
$.S()
b9=new B.ap(A.R,A.N,A.U,A.V,A.S)
b9.r=(b4?A.c.j(q):A.w.j(0.22)).gp(0)
a4=b9.G()
t.drawRRect(B.el(b8),a4)
a4.delete()}}if(u&&g){a1=c4-a0*d0-14
c0=new B.a3(d,a1,a3,a1+28)
J.bm(t.save())
t.clipRect(B.bF(a5),$.ms()[1],!0)
$.S()
a1=new B.ap(A.R,A.N,A.U,A.V,A.S)
a1.sam(new B.a9(A.b4,A.b7,A.x,B.a([A.K,A.c.j(0.4),A.K],v),c2,c2).aB(0,c0))
a4=a1.G()
t.drawRect(B.bF(c0),a4)
a4.delete()
t.restore()}}},
aw(d){return!0}}
C.aND.prototype={
aW(){this.b6()
this.b4()
this.dH()},
q(){var w=this,v=w.b5$
if(v!=null)v.a6(0,w.gdD())
w.b5$=null
w.a1()}}
C.a0G.prototype={
a5(){return"_Role."+this.b}}
C.qd.prototype={}
C.qW.prototype={}
C.CE.prototype={}
C.ZD.prototype={}
C.aeY.prototype={}
C.a0T.prototype={
gY(d){return this.d}}
C.CO.prototype={}
C.abW.prototype={}
C.acb.prototype={}
C.ae4.prototype={}
C.bhV.prototype={
a34(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
E.dY(d,"",e,g,h,f)},
b8D(d,e,f){return this.a34(d,e,f,0,0.55)},
aC5(d,e,f,g){return this.a34(d,e,f,0,g)},
b8E(d,e,f,g){return this.a34(d,e,f,g,0.55)},
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
w.aV()},
akn(d,e,f,g){var w="n"+this.ay++,v=new C.qW(w,e,f,g)
this.a.n(0,w,v)
this.aV()
return v},
rU(d,e,f){return this.akn(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bs(w.b,new C.dmE(e))
A.d.bs(w.c,new C.dmF(e))
w.aV()},
bcs(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.mQ.h(0,v.b).c===D.xe)return!1
w=this.b
if(A.d.b3(w,new C.dmB(d,e)))return!1
w.push(new C.CE(d,e))
this.aV()
return!0},
c0f(d){var w
if(d.b==="beat")return D.cer[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.au(500)
case 2:return 1400+w.au(2200)
default:return 450+w.au(2000)}},
aFD(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.aAm[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.CO(u,t,j.ax,90))
w.push(new C.CO(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ah()*3.141592653589793*2
v.push(new C.a0T(u,new B.t(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.b8D(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ah()*3.141592653589793*2
p=100+w.ah()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ar(t,A.c,w.ah()*0.5)
m.toString
v.push(new C.a0T(u,new B.t(o*p,n*p),m,3+w.ah()*4.5,1000+w.au(700),j.ax))}j.f.push(new C.CO(u,t,j.ax,120))
j.aC5(120,200,"noise",0.5)
j.b8D(261.63*Math.pow(2,([7,12,16,19][w.au(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.CO(u,t,j.ax,230))
w.push(new C.CO(u,t,j.ax+160,160))
w.push(new C.CO(u,t,j.ax+320,100))
j.b8E(180+j.at.au(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.abW(u,new B.t((w.ah()-0.5)*220,-260-w.ah()*180),t,j.ax))
j.b8E(300+w.au(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ah()*3.141592653589793*2
j.w.push(new C.acb(u,u.a8(0,new B.t(Math.cos(q),Math.sin(q)).aI(0,260+w.ah()*200)),t,j.ax))
j.a34(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fJ()
j.a34(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.ae4(u,D.azK[v],t,j.ax))
j.aC5(261.63*Math.pow(2,([0,5,9,12][j.at.au(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aC5(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.cax[A.o.F(w,3)]
for(k=1;k<=3;++k)j.csU(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gaf(j.b),v=new B.f5(w,new C.dmC(d));v.C();)j.aAB(w.gR(0),j.ax+D.cmR[A.o.F(g.d,4)])
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
case"chance":s=j.at.au(100)<D.cDZ[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gaf(j.b),v=new B.f5(w,new C.dmD(d));v.C();)j.aAB(w.gR(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.zp(w,0,v-700)},
csU(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.ZD(e,"~"+d))},
aAB(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.aeY(d.a,v,e,w))
u.push(new C.ZD(w,v))},
a6N(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=B.a6(w).k("bc<2>")
w=B.C(new B.bc(w,v),v.k("L.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,B.M)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aFD(r)
u.n(0,r,o.ax+o.c0f(s))}}w=o.c
v=B.T(w).k("Z<1>")
q=B.C(new B.Z(w,new C.dmG(o),v),v.k("L.E"))
if(q.length!==0){A.d.bs(w,new C.dmH(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.M)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b7(u,1)
for(u=A.d.gaf(v),r=new B.f5(u,new C.dmI(p));r.C();)o.aAB(u.gR(0),o.ax)}else o.aFD(u)}}A.d.bs(o.d,new C.dmJ(o))
A.d.bs(o.e,new C.dmK(o))
A.d.bs(o.f,new C.dmL(o))
A.d.bs(o.w,new C.dmM(o))
A.d.bs(o.x,new C.dmN(o))
A.d.bs(o.r,new C.dmO(o))
o.aV()},
vk(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.e,v=w.length,u=1-1.6*e,t=120*e,s=0;s<v;++s){r=w[s]
q=r.a
p=r.b
o=p.a
p=p.b
r.a=new B.t(q.a+o*e,q.b+p*e)
r.b=new B.t(o*u,p*u+t)}n=j.cy.b-8
for(w=j.r,v=w.length,u=900*e,s=0;s<v;++s){m=w[s]
t=m.b
q=t.a
t=t.b+u
p=m.b=new B.t(q,t)
o=m.a
l=o.a+q*e
o=o.b+t*e
k=m.a=new B.t(l,o)
if(o>n){p=m.a=new B.t(l,n)
t=m.b=new B.t(q*0.9,-t*0.62)
q=p}else{q=k
t=p}q=q.a
if(q<10||q>j.cy.a-10)m.b=new B.t(-t.a*0.8,t.b)}},
ag(){var w,v,u,t,s,r,q,p,o,n,m=this.cy,l=m.a
if(l<=0)l=1
w=m.b
if(w<=0)w=1
m=B.a([],x.F)
for(v=this.a,v=new B.dq(v,v.r,v.e),u=x.N,t=x.K;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(B.G(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=B.a([],x.bj)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,B.M)(t),++o){n=t[o]
v.push(B.a([n.a,n.b],r))}return A.X.ap(B.G(["nodes",m,"edges",v],u,x.ew),null)},
TQ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.h.a(A.X.aN(0,d,null))
k.a9(0)
for(o=x.j,n=J.aW(o.a(J.r(w,"nodes"))),m=k.a;n.C();){v=n.gR(n)
u=B.w(J.r(v,"k"))
if(!D.mQ.aj(0,u))continue
t=B.w(J.r(v,"id"))
m.n(0,t,new C.qW(t,u,new B.t(B.e5(J.r(v,"x"))*k.cy.a,B.e5(J.r(v,"y"))*k.cy.b),A.k.N(B.e5(J.r(v,"p")))))
s=B.cb(B.aL(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aW(o.a(J.r(w,"edges"))),n=k.b;o.C();){r=o.gR(o)
q=B.w(J.r(r,0))
p=B.w(J.r(r,1))
if(m.aj(0,q)&&m.aj(0,p))n.push(new C.CE(q,p))}k.aV()
return!0}catch(l){return!1}},
cRY(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a9(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.qW(n,r,new B.t(q*p.a,o*p.b),s))
l.aV()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bcs(w[m.a],w[m.b])}},
gY(d){return this.cy}}
C.G7.prototype={}
C.Wc.prototype={
T(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aEV(new C.bhV(B.U(w,x.f3),v,u,t,s,r,q,p,o,B.U(w,n),B.U(w,n),B.U(w,n),B.U(w,n),A.cZ,A.K,A.ax,$.aw()),A.bF,A.I,A.I,A.Y,null,null)}}
C.aEV.prototype={
acP(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$acP=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.az(),$async$acP)
case 6:q=n.jT(m.r(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new C.equ(s))
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
return B.i($async$acP,v)},
a9N(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$a9N=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new C.eqj(s))
u=3
w=6
return B.b(B.az(),$async$a9N)
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
return B.i($async$a9N,v)},
bMt(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a6(n).k("bc<2>")
v=""+n.a+"|"+o.length+"|"+new B.bc(n,w).cI(0,0,new C.eql())+"|"+A.d.cI(o,0,new C.eqm())
if(v===p.ch)return p.CW
u=new C.eqp()
t=x.s
s=B.a([],t)
r=new C.eqq(p,s,u)
for(n=new B.bc(n,w).gaf(0),w=new B.f5(n,new C.eqn());w.C();){q=n.gR(0)
if(!A.d.b3(o,new C.eqo(q)))s.push(B.w(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.d0(s,0,B.dA(5,"count",x.S),x.N).dm(0)},
Z(){var w,v=this
v.a2()
v.acP()
v.d.db=v.ay
w=v.qO(new C.eqU(v))
w.h2(0)
v.e!==$&&B.aP()
v.e=w},
q(){var w=this,v=w.as
if(v!=null)v.a4(0)
v=w.e
v===$&&B.c()
v.q()
v=w.d
v.S$=$.aw()
v.P$=0
w.bxi()},
acl(d){return this.c_I(d)},
c_I(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$acl=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.az(),$async$acl)
case 6:q=m.aU(l.r(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.TQ(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aXq(A.d.gI(D.aza))
if(s.c!=null)s.m(new C.eqt())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$acl,v)},
aXq(d){this.d.cRY(0,d.c,d.d)
this.En()},
En(){var w=this.as
if(w!=null)w.a4(0)
this.as=B.cK(A.ly,new C.eqf(this))},
axC(d){var w,v,u,t,s=this.d.a,r=B.a6(s).k("bc<2>")
s=B.C(new B.bc(s,r),r.k("L.E"))
r=B.T(s).k("dw<1>")
s=new B.dw(s,r)
s=new B.bR(s,s.gL(0),r.k("bR<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cgO(d){var w,v,u,t,s,r=this.d.a,q=B.a6(r).k("bc<2>")
r=B.C(new B.bc(r,q),q.k("L.E"))
q=B.T(r).k("dw<1>")
r=new B.dw(r,q)
r=new B.bR(r,r.gL(0),q.k("bR<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c_w(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.mQ.h(0,r.b).c===D.xe)continue
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
c8o(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hqy(new B.t(n.a+36,n.b+0),new B.t(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cAC(d){var w,v,u,t,s,r,q=this,p=q.axC(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.f1()
u=v.b
if(u==="button"){w.aFD(p)
return}if(q.r)return
t=D.mQ.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.qT)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.aV()
q.En()
return}if(q.r)return
r=q.c8o(d)
if(r!=null){w=q.d
A.d.cE(w.b,r)
w.aV()
q.En()}},
ci6(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cgO(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.axC(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aF(0,d)}},
ci7(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.aV()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.t(A.k.E(d.a+s.y.a,46,t.a-46),A.k.E(d.b+s.y.b,46,t.b-60))
s.at=!0
v.aV()}}},
b1C(){var w,v,u=this
if(u.z!=null){w=u.c_w(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bcs(v,w)}else v=!1
if(v){B.ku()
u.En()}u.z=null
u.d.aV()}else if(u.x!=null){if(u.at)u.En()
u.x=null}},
ad1(d){return this.c2r(d)},
c2r(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ad1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.axC(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jJ()
p=t.c
p.toString
w=3
return B.b(B.bU(F.ng,null,new C.eqw(q),p,!0,!0,!1,A.lL,!1,!1,x.y),$async$ad1)
case 3:if(f===!0){r.W(0,s)
t.En()}case 1:return B.h(u,v)}})
return B.i($async$ad1,v)},
c8m(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.rU(0,d,new B.t(v.a*(0.25+u.ah()*0.5),v.b*(0.2+u.ah()*0.55)))
B.f1()
this.En()},
agS(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bU(F.ng,null,new C.eqy(),s,!0,!0,!0,A.lL,!1,!1,x.es),$async$agS)
case 2:t=e
if(t!=null)u.aXq(t)
return B.h(null,v)}})
return B.i($async$agS,v)},
aem(d){var w=0,v=B.j(x.H),u=this,t
var $async$aem=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.ci(null,null,!0,null,new C.eqi(),t,null,!0,!0,x.y),$async$aem)
case 2:if(f===!0){u.d.a9(0)
u.En()}return B.h(null,v)}})
return B.i($async$aem,v)},
B(d){var w=this,v=null,u=B.a([B.air(w.r?new B.bM(A.a5,v,v,new B.D(A.Gh,B.hr(D.bRj,D.fy4,new C.eqS(w),v),v),v):w.c8p(),A.b6,A.iy),B.E(B.cz(new C.eqT(w)),1)],x.p)
if(!w.r)u.push(w.cvn())
return B.c7(v,A.c0,B.bl(!0,B.x(u,A.m,v,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)},
bId(){var w=null,v=new C.eqk(),u=A.w.j(0.7),t=B.m(26),s=B.J(A.bt.j(0.5),A.r,1)
return B.bT(0,B.ec(B.at(B.p(w,B.ce(B.x(B.a([D.fJr,A.au,D.fRa,A.aA,v.$4(A.pa,A.bt,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(A_.Cn,A.co,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.l7,A.c5,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.an9,A.bG,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fQs,new B.bM(A.a8,w,w,B.bN(!1,D.fGz,w,w,!0,w,w,this.gbI6(),w,w),w)],x.p),A.E,w,A.e,A.Q,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),A.f,w,A.WE,new B.o(F.ng,w,s,t,w,w,A.n),w,w,w,A.fk,Ak.akv,w,w,w),w,w,w),u,!0),0,0,0)},
c8p(){var w=this,v=null,u=B.aH(v,v,v,v,S.nv,v,v,v,new C.eqE(w),v,v,v,v,v,v),t=w.a9e(A.Oz,"How it works",new C.eqF(w),!0),s=w.ay?A.uu:Q.Ct
return new B.D(D.bCr,B.B(B.a([u,D.bDZ,t,w.a9e(s,"Sound",new C.eqG(w),!0),w.a9e(A.e5,"Ideas",w.gclR(),!0),w.a9e(D.Oo,"Clear",w.gc8n(w),!0),w.aOi(A.i1,"Show",new C.eqH(w),!0,!0)],x.p),A.m,v,A.e,A.i,0,v,v),v)},
aOi(d,e,f,g,h){var w=null,v=h?A.bt:A.c.j(0.08),u=B.m(14),t=B.m(14),s=B.a([B.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new B.D(A9.w_,B.aG(!1,A.a2,!0,u,B.aO(!1,t,!0,B.hc(new B.D(new B.Q(8,8,8,8),B.B(s,A.m,w,A.e,A.Q,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.ai),w)},
a9e(d,e,f,g){return this.aOi(d,e,f,g,!1)},
cvn(){var w=null,v=new C.eqA(this),u=A.c.j(0.08)
return B.p(w,B.ce(B.B(B.a([v.$2("START",D.xe),v.$2("CHANGE",D.Eq),v.$2("REACT",D.qT)],x.p),A.E,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,A.aM),A.f,w,w,new B.o(F.Bd,w,new B.bK(new B.ay(u,1,A.r,-1),A.a0,A.a0,A.a0),w,w,w,A.n),w,w,w,w,D.bxy,w,w,w)},
cvo(d){var w,v,u,t,s=null,r=D.mQ.h(0,d)
r.toString
w=B.m(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.J(v.j(0.5),A.r,1)
return new B.D(A.fB,B.aB(s,B.p(s,B.x(B.a([B.X(r.b,v,s,s,s,22),A.cL,B.d(r.a,s,1,A.a1,s,s,s,D.aT8,s,s,s)],x.p),A.m,s,A.e,A.Q,0,A.p),A.f,s,s,new B.o(s,s,t,w,s,new B.a9(A.b4,A.b7,A.x,u,s,s),A.n),s,s,s,s,A.hs,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eqz(this,d),s,s,s,s,s,s,!1,A.a4),s)}}
C.bhW.prototype={
a3(b8,b9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=b3.b,b6=b5.ax,b7=b8.a
J.bm(b7.save())
w=b5.ch
if(b6<w){v=(w-b6)/380
b7.translate(Math.sin(b6*0.09)*9*v,Math.cos(b6*0.13)*7*v)}$.S()
u=B.I()
u.r=A.c.j(0.05).gp(0)
for(w=b9.b,t=b9.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28){q=u.G()
b7.drawCircle(r,s,1,q)
q.delete()}p=b5.CW
if(b6<p){$.S()
o=B.I()
o.r=b5.cx.j(0.4*((p-b6)/800)).gp(0)
b8.aP(new B.a3(0,0,0+t,0+w),o)}for(w=b5.b,t=w.length,p=x.O,o=x.v,n=b5.a,m=0;m<w.length;w.length===t||(0,B.M)(w),++m){l=w[m]
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
d.push(new B.aX(h,i))
a1=Math.max(40,Math.abs(f-h)*0.5)
d.push(new B.kX(h+a1,i,f-a1,g,f,g))
a2=D.mQ.h(0,k.b).d
a3=D.mQ.h(0,j.b).d
e=new B.ap(A.R,A.N,A.U,A.V,A.S)
e.b=A.aa
e.c=3
e.d=A.bE
d=B.a([a2.j(0.55),a3.j(0.55)],p)
g=B.rG(new B.t(h,i),new B.t(f,g))
e.sam(new B.a9(A.a5,A.a8,A.x,d,b4,b4).aB(0,new B.a3(g.a-2,g.b-2,g.c+2,g.d+2)))
q=e.G()
i=a0.gbw().a.snapshot()
b7.drawPath((a0.e=new B.cl(i)).a,q)
q.delete()}for(w=b5.d,t=w.length,m=0;m<w.length;w.length===t||(0,B.M)(w),++m){a4=w[m]
k=n.h(0,a4.a)
j=n.h(0,a4.b)
if(k==null||j==null)continue
i=a4.c
a5=A.k.E((b6-i)/(a4.d-i),0,1)
i=k.c
h=j.c
a6=C.hqy(new B.t(i.a+36,i.b+0),new B.t(h.a-36,h.b),a5)
$.S()
h=new B.ap(A.R,A.N,A.U,A.V,A.S)
h.r=A.c.j(0.35).gp(0)
h.z=I.pk
q=h.G()
h=a6.a
i=a6.b
b7.drawCircle(h,i,8,q)
q.delete()
g=new B.ap(A.R,A.N,A.U,A.V,A.S)
g.r=A.c.gp(0)
q=g.G()
b7.drawCircle(h,i,4,q)
q.delete()}a7=b3.d.$0()
if(a7!=null&&n.h(0,a7)!=null){a8=n.h(0,a7).c.a8(0,D.IX)
a9=b3.e.$0()
w=a9.a
t=a8.a
a1=Math.max(40,Math.abs(w-t)*0.5)
a0=new B.aF($.S().r,A.ag,b4,b4,B.a([],o))
o=a8.b
a0.D(new B.aX(t,o))
i=a9.b
a0.D(new B.kX(t+a1,o,w-a1,i,w,i))
i=B.I()
i.b=A.aa
i.c=3
i.r=A.c.j(0.7).gp(0)
b8.aG(a0,i)
i=B.I()
i.r=A.c.gp(0)
b8.ad(a9,7,i)}for(w=b5.f,t=w.length,m=0;m<w.length;w.length===t||(0,B.M)(w),++m){b0=w[m]
o=b0.c
v=A.k.E((b6-o)/700,0,1)
if(b6<o)continue
o=b0.a
i=A.dU.av(0,v)
$.S()
h=new B.ap(A.R,A.N,A.U,A.V,A.S)
h.b=A.aa
g=1-v
h.c=3.5*g+0.5
h.r=b0.b.j(g*0.9).gp(0)
q=h.G()
b7.drawCircle(o.a,o.b,14+b0.d*i,q)
q.delete()}for(w=b5.w,t=w.length,m=0;m<w.length;w.length===t||(0,B.M)(w),++m){b1=w[m]
v=A.k.E((b6-b1.d)/600,0,1)
o=b1.a
i=b1.b
h=B.ky(o,i,A.dU.av(0,v))
h.toString
i=B.ky(o,i,A.dU.av(0,A.k.E(v-0.35,0,1)))
i.toString
$.S()
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.c=5
o.d=A.bE
g=b1.c
f=B.a([g.j(0),g],p)
e=B.rG(i,h)
o.sam(new B.a9(A.a5,A.a8,A.x,f,b4,b4).aB(0,new B.a3(e.a-4,e.b-4,e.c+4,e.d+4)))
q=o.G()
o=h.a
h=h.b
b7.drawLine.apply(b7,[i.a,i.b,o,h,q])
q.delete()
i=new B.ap(A.R,A.N,A.U,A.V,A.S)
i.r=A.c.gp(0)
q=i.G()
b7.drawCircle(o,h,6,q)
q.delete()
i=new B.ap(A.R,A.N,A.U,A.V,A.S)
i.r=g.j(0.5*(1-v)).gp(0)
i.z=A.lJ
q=i.G()
b7.drawCircle(o,h,12,q)
q.delete()}for(w=b5.e,t=w.length,m=0;m<w.length;w.length===t||(0,B.M)(w),++m){a4=w[m]
v=A.k.E((b6-a4.f)/a4.e,0,1)
o=a4.a
$.S()
i=new B.ap(A.R,A.N,A.U,A.V,A.S)
i.r=a4.c.j(1-v).gp(0)
q=i.G()
b7.drawCircle(o.a,o.b,a4.d*(1-0.5*v),q)
q.delete()}for(w=b5.r,t=w.length,m=0;m<w.length;w.length===t||(0,B.M)(w),++m){j=w[m]
o=j.a
$.S()
i=new B.ap(A.R,A.N,A.U,A.V,A.S)
h=j.c
i.r=h.j(0.35).gp(0)
i.z=A.lJ
q=i.G()
b7.drawCircle(o.a,o.b,11,q)
q.delete()
o=j.a
i=new B.ap(A.R,A.N,A.U,A.V,A.S)
i.sam(new B.c1(V.xh,0.5,A.x,b4,0,B.a([A.c,h],p),b4,b4).aB(0,B.bX(j.a,8)))
q=i.G()
b7.drawCircle(o.a,o.b,8,q)
q.delete()}for(b5=b5.x,w=b5.length,m=0;m<b5.length;b5.length===w||(0,B.M)(b5),++m){a6=b5[m]
v=A.k.E((b6-a6.d)/1000,0,1)
t=1-v
b2=C.bhX(a6.b,26+8*t,a6.c.j(t),b4,b4,A.u)
t=a6.a
p=b2.b
o=p.c
p=p.a.c
b2.a3(b8,new B.t(t.a-o/2,t.b-(40+60*v+p.gbb(p)/2)))}for(b5=new B.dq(n,n.r,n.e);b5.C();)b3.chF(b8,b5.d,b6)
b7.restore()},
chF(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.mQ.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.k.E(1-(f-w)/520,0,1)
u=B.bJ(e.c,64,64)
t=B.bt(u,A.ip)
s=t.eV(A.cx)
$.S()
r=B.I()
r.r=A.w.j(0.55).gp(0)
r.z=A.mR
d.az(s,r)
if(v>0){s=t.cq(6)
r=B.I()
r.r=h.d.j(0.6*v).gp(0)
r.z=A.zA
d.az(s,r)}s=t.eV(A.cH)
r=B.I()
q=h.d
r.r=B.ar(q,A.w,0.65).gp(0)
d.az(s,r)
r=B.I()
s=B.ar(q,A.c,0.18+0.4*v)
s.toString
p=B.ar(q,A.w,0.35)
p.toString
r.sam(new B.a9(A.b4,A.b7,A.x,B.a([s,p],x.O),j,j).aB(0,u))
d.az(t,r)
r=B.I()
r.b=A.aa
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.az(t,r)
r=h.b
p=e.c
o=C.bhX(B.lr(r.a),30,A.c,r.b,j,A.H)
r=o.b
s=r.c
r=r.a.c
o.a3(d,p.aF(0,new B.t(s/2,r.gbb(r)/2)))
n=C.bhX(h.a,11,A.c,j,j,A.H)
n.a3(d,e.c.a8(0,new B.t(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.azK[A.o.F(e.d,6)]:j
h=h.c
if(h===D.qT){s=e.c.a8(0,new B.t(0,62))
r=B.I()
r.r=D.aAm[A.o.F(e.d,6)].gp(0)
d.ad(s,5,r)}else if(m!=null){l=C.bhX(m,9.5,A.aB,j,j,A.P)
l.a3(d,e.c.a8(0,new B.t(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bhX(m,9.5,A.aB,j,j,A.P)
l.a3(d,e.c.a8(0,new B.t(-l.b.c/2,54)))}if(k.c)return
if(h!==D.xe)k.b2p(d,e.c.aF(0,D.IX),q)
k.b2p(d,e.c.a8(0,D.IX),q)},
b2p(d,e,f){var w
$.S()
w=B.I()
w.r=A.c0.gp(0)
d.ad(e,9,w)
w=B.I()
w.b=A.aa
w.c=2.2
w.r=f.gp(0)
d.ad(e,9,w)
w=B.I()
w.r=A.c.gp(0)
d.ad(e,3.5,w)},
aw(d){return!0}}
C.aMM.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.bmk.prototype={}
C.Qi.prototype={
gY(d){return this.d}}
C.Wr.prototype={
T(){var w=B.a([],x.g4),v=B.a([],x.ed)
return new C.blr(new B.cB(null,x.z),w,v,A.cZ,A.bF,D.Yp,null,null)}}
C.blr.prototype={
b08(d,e){var w,v,u,t=this
if(t.ch)w=!e&&t.y-t.CW<120
else w=!0
if(w)return
t.CW=t.y
w=t.c
w.toString
v=A.o.E(A.k.bh((1-d.b/(B.aJ(w,null,x.l).w.a.b*0.7))*10),0,9)
u=D.d4E[A.o.F(v,5)]+12*A.o.ao(v,5)+12
switch(t.z){case"glow":C.q1("synth",u,420,0.3)
break
case"rainbow":C.q1("bell",u,700,0.35)
break
case"stars":C.q1("pluck",u+12,400,0.4)
break
case"sparks":E.dY(2400+t.r.au(2000),"",60,0,0.18,"noise")
break
default:E.dY(110+t.r.au(60),"",140,0,0.22,"noise")}},
cbo(d){return this.b08(d,!1)},
Z(){var w,v=this
v.a2()
w=v.qO(new C.eCA(v))
w.h2(0)
v.w!==$&&B.aP()
v.w=w},
q(){var w=this.w
w===$&&B.c()
w.q()
this.bxr()},
gb1V(){var w=this.Q
return w<0?new L.uC(1,A.k.F(this.y*0.18,360),0.85,1).lH():D.RB[w]},
aSI(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.gb1V(),j=l.z
if(j==="fire")w=5
else w=j==="sparks"?4:1
for(j=l.f,v=l.r,u=d.a,t=d.b+0,s=0;s<w;++s){r=v.ah()*3.141592653589793*2
switch(l.z){case"fire":q=v.ah()
p=l.as
o=v.ah()
n=v.ah()
m=B.ar(A.bG,A.aw,v.ah())
m.toString
j.push(new C.Qi(new B.t(u+(q-0.5)*p,t),new B.t((o-0.5)*40,-60-n*120),m,l.as*(0.3+v.ah()*0.4),l.y,700+v.au(500)))
break
case"sparks":q=Math.cos(r)
p=Math.sin(r)
o=40+v.ah()*200
n=B.ar(k,A.c,v.ah()*0.6)
n.toString
j.push(new C.Qi(d,new B.t(q*o,p*o),n,1.5+v.ah()*3,l.y,600+v.au(600)))
break
default:q=Math.cos(r)
p=Math.sin(r)
o=10+v.ah()*40
j.push(new C.Qi(d,new B.t(q*o,p*o),k,1.2+v.ah()*1.8,l.y,500))}}},
aZU(d,e){var w,v,u,t,s,r=this
r.ay=!0
w=r.z
if(w==="glow"||w==="rainbow"||w==="stars"){v=r.gb1V()
u=r.as
t=r.Q<0||r.z==="rainbow"
s=B.a([],x.g)
r.ax=new C.bmk(s,w,v,u,t)
s.push(e)
s=r.ax
s.toString
r.e.push(s)}r.aSI(e)
r.b08(e,!0)
r.m(new C.eCb())},
aZT(){this.ax=null
this.m(new C.eCa())},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=x.p,l=B.a([B.aH(n,n,n,n,D.rC,n,n,n,new C.eCk(o,d),n,n,n,n,"Share",n)],m),k=o.e,j=B.a([B.b4(n,n,n,new C.bsT(k,o.f,o.y,o.at,n),A.ax)],m)
if(!o.ay&&k.length===0)j.push(D.b93)
k=B.aB(A.c8,new B.an(A.a_,n,A.b1,A.t,j,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eCl(o),new C.eCm(o),new C.eCq(o),n,n,n,n,n,n,n,n,n,new C.eCr(o),new C.eCs(o),n,n,n,!1,A.a4)
j=B.a([],m)
for(w=0;w<5;++w){v=D.d1I[w]
j.push(new C.eX(v.b,o.z===v.a,new C.eCt(o,v),v.c,A.c5,n))}u=B.a([new C.JQ(A.c,o.Q<0,new C.eCu(o),!0,n)],m)
for(t=0;t<8;++t)u.push(new C.JQ(D.RB[t],o.Q===t,new C.eCv(o,t),!1,n))
s=o.as
s=C.lU(A.c5,A.o.u(A.k.V(s)),"Size",36,4,new C.eCw(o),s)
r=o.ch
q=r?A.uu:Q.Ct
q=B.a([new C.eX("Sound",r,new C.eCx(o),q,A.c5,n),new C.j7(A.rz,"Undo",new C.eCn(o),A.c,n),new C.j7(D.Oo,"Clear",new C.eCo(o),A.cs,n)],m)
for(w=0;w<4;++w){p=D.diP[w]
q.push(new C.JQ(p,o.at.A(0,p),new C.eCp(o,p),!1,n))}return C.oA(A.c5,l,"Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.",new B.ex(k,o.d),"SPARK PAINTER",B.x(B.a([new C.hj(j,"BRUSH",n),new C.hj(u,"COLOUR",n),s,new C.hj(q,n,n)],m),A.m,n,A.e,A.Q,0,A.p))}}
C.bsT.prototype={
a3(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null
$.S()
w=B.I()
v=a4.e
w.r=v.gp(v)
a6.aP(new B.a3(0,0,0+a7.a,0+a7.b),w)
for(w=a4.b,v=w.length,u=a6.a,t=x.v,s=0;s<w.length;w.length===v||(0,B.M)(w),++s){r=w[s]
q=r.a
p=q.length
if(p===0)continue
switch(r.b){case"glow":p=$.S()
o=B.a([],t)
n=new B.aF(p.r,A.ag,a5,a5,o)
o.push(new B.aX(A.d.gI(q).a,A.d.gI(q).b))
for(p=B.T(q),m=p.k("jx<1>"),l=new B.jx(q,1,a5,m),l.pe(q,1,a5,p.c),l=new B.bR(l,l.gL(0),m.k("bR<ak.E>")),m=m.k("ak.E");l.C();){p=l.d
if(p==null)p=m.a(p)
p=new B.aq(p.a,p.b)
o.push(p)
k=n.f
if(k!=null)p.by(k)
p=n.e
if(p!=null)p.a.delete()
n.e=null}if(q.length===1){q=A.d.gI(q)
$.S()
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=r.c.gp(0)
j=p.G()
u.drawCircle(q.a,q.b,r.d/2,j)
j.delete()}$.S()
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.b=A.aa
q.d=A.bE
q.e=A.dT
p=r.d
q.c=p*2.2
o=r.c
q.r=o.j(0.45).gp(0)
q.z=new B.hg(A.G,p)
j=q.G()
q=n.e
u.drawPath((q==null?n.e=new B.cl(n.gbw().a.snapshot()):q).a,j)
j.delete()
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.b=A.aa
q.d=A.bE
q.e=A.dT
q.c=p
q.r=o.gp(0)
j=q.G()
q=n.e
u.drawPath((q==null?n.e=new B.cl(n.gbw().a.snapshot()):q).a,j)
j.delete()
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.b=A.aa
q.d=A.bE
q.e=A.dT
q.c=p*0.35
q.r=A.c.j(0.85).gp(0)
j=q.G()
q=n.e
u.drawPath((q==null?n.e=new B.cl(n.gbw().a.snapshot()):q).a,j)
j.delete()
break
case"rainbow":for(p=r.d,i=1;i<q.length;++i){h=new L.uC(1,A.o.F(i*5,360),0.85,1).lH()
o=q[i-1]
m=q[i]
$.S()
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.c=p
l.d=A.bE
l.r=h.gp(0)
j=l.G()
u.drawLine.apply(u,[o.a,o.b,m.a,m.b,j])
j.delete()}break
case"stars":for(o=r.d,m=o*2.1,l=r.c,k=r.e,o*=0.9,g=a5,f=0,e=0,d=0;d<q.length;q.length===p||(0,B.M)(q),++d,g=a0){a0=q[d]
if(g!=null){a1=a0.a-g.a
a2=a0.b-g.b
f+=Math.sqrt(a1*a1+a2*a2)}a1=A.d.gI(q)
if(a1.a===a0.a&&a1.b===a0.b||f>m){a3=e+1
a1=k?new L.uC(1,A.o.F(a3*23,360),0.7,1).lH():l
a4.c8q(a6,a0,o,e*0.5,a1)
e=a3
f=0}}break}}for(w=a4.c,v=w.length,t=a4.d,s=0;s<w.length;w.length===v||(0,B.M)(w),++s){a0=w[s]
e=A.k.E((t-a0.e)/a0.f,0,1)
q=a0.a
$.S()
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
p.r=a0.c.j((1-e)*0.9).gp(0)
p.z=S.S6
j=p.G()
u.drawCircle(q.a,q.b,a0.d*(1-0.6*e)+1,j)
j.delete()}},
c8q(d,e,f,g,h){var w,v,u,t,s,r,q,p=$.S(),o=B.a([],x.v),n=new B.aF(p.r,A.ag,null,null,o)
for(p=e.a,w=e.b,v=f*0.45,u=0;u<10;++u){t=(u&1)===0?f:v
s=g+u*3.141592653589793/5-1.5707963267948966
r=p+Math.cos(s)*t
q=w+Math.sin(s)*t
if(u===0){r=new B.aX(r,q)
o.push(r)
q=n.f
if(q!=null)r.by(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}else{r=new B.aq(r,q)
o.push(r)
q=n.f
if(q!=null)r.by(q)
r=n.e
if(r!=null)r.a.delete()
n.e=null}}n.D(new B.bs())
$.S()
p=B.I()
p.r=h.j(0.4).gp(0)
p.z=A.lJ
d.aG(n,p)
p=B.I()
p.r=h.gp(0)
d.aG(n,p)},
aw(d){return!0}}
C.aMV.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.eg.prototype={}
C.tE.prototype={
aqN(d,e,f,g){var w=this
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
C.aaB.prototype={}
C.abI.prototype={}
C.a4K.prototype={
bej(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.hh()?-1:1
v=t.ah()*3.141592653589793*2
u=f*(0.3+t.ah())
s.push(new C.aaB(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ah()*0.45));++r}},
c4A(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bs(w,new C.bNG())},
akn(d,e,f,g){var w="p"+this.c++,v=new C.tE(w,e,f,g)
v.aqN(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bs(this.b,new C.bNR(e))},
a9(d){A.d.a9(this.a)
A.d.a9(this.b)},
cJ0(d,e,f,g,h){return A.d.b3(this.b,new C.bNM(e,f,g,h))},
al5(d,e,f,g){var w
if(d===f||this.cJ0(0,d,e,f,g))return null
w=new C.abI(d,e,f,g)
this.b.push(w)
return w},
aB7(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
zQ(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
anN(d){return this.M0(d)&&!d.x&&d.cx>this.zQ(d)},
b6K(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
M0(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
c8H(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.zz.h(0,v)
if(w!=null)return w.a
return 100},
vk(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c4A(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.T(v).k("Z<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.M)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.Z(v,new C.bNS(a2),t).cI(0,0,new C.bNT(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.U(x.N,u)
n=new C.bNV(o)
m=B.a([],x.t)
l=new C.bNU(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.M)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.M)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.U(u,u)
f=new C.bNX(g,l,n)
for(u=v.length,s=0;t=v.length,s<t;v.length===u||(0,B.M)(v),++s){q=v[s]
f.$2(q,0)
f.$2(q,1)}e=g.a
if(e===0)return
s=0
for(;;){if(!(s<t)){d=0
break}q=v[s]
u=q.b
if(u==="battery"||u==="solar"||u==="crank"||u==="turbine"){d=f.$2(q,1)
break}++s}for(u=v.length,s=0;s<u;++s)v[s].CW=0
a2.b6G(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.zQ(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b6G(e,d,w,!0)
a2.bOM(a4)},
b6G(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.U(x.N,b3),b5=new C.bNI(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bNH(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.M)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bNK(B.U(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.M)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=B.c3(b7,0,!1,b3)
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
if(h)B.b8(B.dL(g,null))
e=B.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=B.c3(b7,0,!1,b3)
a0=B.c3(b7,0,!1,b3)
k.a9(0)
j.a9(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.M)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b6K(t)*(1+t.CW))
a4=b2.aB7(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.c8H(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bS_(e,a0,b8)
if(!c0)break
for(a1=w.length,a8=!1,u=0;u<w.length;w.length===a1||(0,B.M)(w),++u){t=w[u]
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
c0=!0}for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.M)(w),++u){t=w[u]
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
bS_(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
for(w=0;w<d;++w)if(w!==a3)a0.push(w)
v=a0.length
if(v===0)return B.c3(d,0,!1,x.i)
u=B.a([],x.b)
for(t=a0.length,s=x.n,r=0;r<a0.length;a0.length===t||(0,B.M)(a0),++r){q=a0[r]
p=B.a([],s)
for(o=a0.length,n=0;n<a0.length;a0.length===o||(0,B.M)(a0),++n){m=a0[n]
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
bOM(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.M)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aB7(o)/a1.b6K(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.zQ(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bGR(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bej(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.tZ(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
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
if(l>26)a1.tZ(o,"The "+$.qq().h(0,n).b+" got "+A.k.ac(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.tZ(o,"More than 1.5 amps went through the "+$.qq().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.tZ(o,"The regulator had to turn "+A.k.ac(o.cy,1)+" V into heat while "+A.k.V(i*1000)+" mA flowed. That is "+A.k.ac(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.tZ(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.zz.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qq().h(0,n).b
l=f.b
l=l===A.k.j3(l)?""+A.k.V(l):B.w(l)
g=f.c
g=g===A.k.j3(g)?""+A.k.V(g):B.w(g)
a1.tZ(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.k.ac(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.f2e.t(0,n)){m=o.fx>0?A.k.E((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.k.E(j/0.9,0,1)
if(!o.x&&j>2.4)a1.tZ(o,"The bulb got "+A.k.ac(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.k.E((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.tZ(o,"The LED had "+A.k.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.k.E(j/14,0,1)
break
case"motor":n=A.k.E(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.k.E(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.tZ(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.k.E(i/1,0,1)
if(!o.x&&i>1)a1.tZ(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.tZ(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.k.E(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.tZ(o,"The capacitor was charged to "+A.k.ac(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bGR(d){return A.d.b3(this.a,new C.bNF(d))},
tZ(d,e){var w
d.x=!0
d.ay=e
this.bej(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bj_(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a9(0)},
aHj(d){var w=d.b
return D.aQ1.t(0,w)||D.zz.aj(0,w)||w==="buck"||w==="regulator"},
bfK(d){var w,v=!0
if(!this.M0(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.zz.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
V4(d,e){var w=this.b
return new B.Z(w,new C.bNZ(d,e),B.T(w).k("Z<1>")).gL(0)},
CG(d){var w,v
if(d.x)return!1
w=d.b
if(D.zz.aj(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bdQ(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qq().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aHj(d)||i.CG(d))return null
w=i.V4(d,0)
v=i.V4(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.T(u).k("Z<1>")
s=B.C(new B.Z(u,i.gcRx(),t),t.k("L.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.k.j3(r)?""+A.k.V(r):B.w(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.k.ac(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.zz.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.Md("battery"),o=J.aW(t.a),t=new B.f5(o,t.b);t.C();){n=o.gR(o)
if(n.e===1.5&&n.as<=0.02&&i.V4(n,0)+i.V4(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.Md("switch"),o=J.aW(t.a),t=new B.f5(o,t.b);t.C();)if(!o.gR(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qq().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.zQ(k))return"The "+$.qq().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.k.ac(k.cx,2)+" amps, but it can only give about "+A.k.ac(i.zQ(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.b3(u,new C.bNN(i,d))
h=q.b
h=h===A.k.j3(h)?""+A.k.V(h):B.w(h)
u=A.k.ac(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.k.ac(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.k.ac(Math.abs(d.dy),1)+" V). Try a bigger battery."},
Md(d){var w=this.a
return new B.Z(w,new C.bNQ(d),B.T(w).k("Z<1>"))},
aGY(d){return this.Md(d).b3(0,new C.bNP(0.35))},
pX(d,e){return A.d.b3(this.a,new C.bNO(e))}}
C.aiZ.prototype={
a3(c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=this,b5=null,b6=c1.a,b7=c1.b,b8=0+b6,b9=0+b7
$.S()
w=B.I()
w.r=F.Bf.gp(0)
c0.aP(new B.a3(0,0,b8,b9),w)
v=B.I()
v.r=A.c.j(0.06).gp(0)
for(w=c0.a,u=12;u<b6;u+=24)for(t=12;t<b7;t+=24){s=v.G()
w.drawCircle(u,t,1.1,s)
s.delete()}for(r=b4.b,q=r.b,p=q.length,o=b4.f,n=0;n<q.length;q.length===p||(0,B.M)(q),++n){m=q[n]
l=m.a
k=l.c
j=m.b===0?-1:1
i=D.me.aj(0,l.b)?(l.ch-1)*38:0
l=l.d
h=m.c
g=h.c
f=m.d===0?-1:1
e=D.me.aj(0,h.b)?(h.ch-1)*38:0
b4.cFQ(c0,new B.t(k*b6+j*(42+i),l*b7),new B.t(g*b6+f*(42+e),h.d*b7),m,m===o)}q=b4.d
if(q!=null&&b4.e!=null){d=C.hDo(q.a,q.b,c1)
q=b4.e
q.toString
$.S()
p=B.I()
p.r=A.ad.gp(0)
p.c=3
p.d=A.bE
c0.bo(d,q,p)}for(q=r.a,p=q.length,o=b4.c,l=b4.r,k=x.v,n=0;n<q.length;q.length===p||(0,B.M)(q),++n){a0=q[n]
j=a0.c*b6
i=a0.d*b7
if(a0.Q>0){h=Math.sin(r.d*30)
$.S()
g=new B.ap(A.R,A.N,A.U,A.V,A.S)
g.r=D.afo.j(A.k.E(a0.Q*0.45,0,0.6)).gp(0)
g.z=A.zA
s=g.G()
w.drawCircle(j,i,46+14*h,s)
s.delete()}a1=l.h(0,a0.a)
if(a1==null)a1=1
J.bm(w.save())
w.translate(j,i)
h=A.k.E(A.lp.av(0,A.k.E(a1,0,1)),0.01,1.4)
w.scale(h,h)
b4.ciE(c0,a0,a0===o)
w.restore()
h=a0.b
if((h==="battery"||h==="solar"||h==="crank"||h==="turbine")&&!a0.x&&a0.cx>r.zQ(a0)){g=j+0
f=i+-40
e=Math.sin(r.d*10)
a2=$.S().r
a3=B.a([],k)
a4=new B.aF(a2,A.ag,b5,b5,a3)
a5=f-13
a3.push(new B.aX(g,a5))
a6=g+13
a7=f+10
a3.push(new B.aq(a6,a7))
a8=g-13
a3.push(new B.aq(a8,a7))
a3.push(new B.bs())
a3=new B.ap(A.R,A.N,A.U,A.V,A.S)
a3.r=A.aw.j(0.65+0.35*e).gp(0)
s=a3.G()
e=a4.gbw().a.snapshot()
w.drawPath((a4.e=new B.cl(e)).a,s)
s.delete()
e=B.a([],k)
a2=new B.aF(a2,A.ag,b5,b5,e)
e.push(new B.aX(g,a5))
e.push(new B.aq(a6,a7))
e.push(new B.aq(a8,a7))
e.push(new B.bs())
e=new B.ap(A.R,A.N,A.U,A.V,A.S)
e.b=A.aa
e.c=1.6
e.r=A.c.gp(0)
s=e.G()
e=a2.gbw().a.snapshot()
w.drawPath((a2.e=new B.cl(e)).a,s)
s.delete()
a9=new B.jR(new B.eu("!",b5,b5,A.cQ,b5,b5,b5,b5,b5,b5,new B.F(!0,A.c,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a3,A.bZ,new B.jA(1),b5,b5,b5,b5,A.bW,b5)
a9.el()
a9.a3(c0,new B.t(g+-3,f+-8))}if(!a0.x)g=(D.aQ1.t(0,h)||D.zz.aj(0,h)||h==="buck"||h==="regulator")&&!r.CG(a0)&&r.V4(a0,0)+r.V4(a0,1)>0
else g=!1
if(g){j+=0
i+=-40
$.S()
g=new B.ap(A.R,A.N,A.U,A.V,A.S)
g.r=A.aC.gp(0)
s=g.G()
w.drawCircle(j,i,10,s)
s.delete()
a9=new B.jR(new B.eu("!",b5,b5,A.cQ,b5,b5,b5,b5,b5,b5,new B.F(!0,A.w,b5,b5,b5,b5,14,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a3,A.bZ,new B.jA(1),b5,b5,b5,b5,A.bW,b5)
a9.el()
a9.a3(c0,new B.t(j+-3,i+-8))}for(b0=0;b0<2;++b0){j=a0.c
i=b0===0
g=i?-1:1
f=D.me.aj(0,h)?(a0.ch-1)*38:0
f=j*b6+g*(42+f)
g=a0.d*b7
$.S()
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.r=F.Bf.gp(0)
s=j.G()
w.drawCircle(f,g,7,s)
s.delete()
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.b=A.aa
j.c=2.4
j.r=(i&&r.bfK(a0)?A.cs:A.ad).gp(0)
s=j.G()
w.drawCircle(f,g,6,s)
s.delete()
if(i&&r.bfK(a0)){a9=new B.jR(new B.eu("+",b5,b5,A.cQ,b5,b5,b5,b5,b5,b5,new B.F(!0,A.cs,b5,b5,b5,b5,13,A.u,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5)),A.a3,A.bZ,new B.jA(1),b5,b5,b5,b5,A.bW,b5)
a9.el()
a9.a3(c0,new B.t(f+-4,g+-22))}}}for(p=r.f,o=p.length,n=0;n<p.length;p.length===o||(0,B.M)(p),++n){b1=p[n]
l=b1.a*b6+b1.c
k=b1.b*b7+b1.d
b2=A.k.E(b1.r/0.8,0,1)
j=B.ar(K.Mx,F.YU,b2)
j.toString
i=b1.f
$.S()
h=new B.ap(A.R,A.N,A.U,A.V,A.S)
h.r=j.gp(0)
h.c=2.4
h.d=A.bE
s=h.G()
w.drawLine.apply(w,[l,k,l-b1.e*0.035,k-i*0.035,s])
s.delete()
i=new B.ap(A.R,A.N,A.U,A.V,A.S)
i.r=j.j(0.35*b2).gp(0)
i.z=A.S7
s=i.G()
w.drawCircle(l,k,4.5*b2+1,s)
s.delete()}if(A.d.b3(q,new C.bIi())){b3=A.d.cI(q,0,new C.bIj())
$.S()
b7=B.I()
b7.r=D.bd4.j(0.05+0.09*b3*(0.5+0.5*Math.sin(r.d*22))).gp(0)
c0.aP(new B.a3(0,0,b8,b9),b7)
a9=B.fu(b5,b5,b5,b5,D.fde,A.a3,A.bZ,b5,A.dA,A.bW)
a9.nY(b6-24)
a9.a3(c0,new B.t(12,10))}},
qC(d,e,f,g,h){var w=null,v=B.fu(w,w,w,w,B.cS(w,w,w,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a3,A.bZ,w,A.dA,A.bW)
v.el()
v.a3(d,f)},
cFQ(a0,a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=new B.aF($.S().r,A.ag,null,null,B.a([],x.v))
d.D(new B.aX(a1.a,a1.b))
w=C.hvM(a1,a2,a3)
d.D(new B.c4(w.a,w.b,a2.a,a2.b))
v=a3.a
u=Math.abs(v.fr)
t=a3.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ar(A.aU,D.afo,A.k.E(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ar(A.aQ,A.aU,A.k.E(r*1.2,0,1))
u.toString
o=u}else o=A.bm
u=B.I()
u.b=A.aa
u.c=a4?7:5
u.d=A.bE
s=a4?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
a0.aG(d,u)
u=B.I()
u.b=A.aa
u.c=2.4
u.d=A.bE
u.r=(a4?A.c:o).gp(0)
a0.aG(d,u)
if(q){n=new B.T0(new B.tk(B.xo(d),!1,B.a([],x.f5))).gI(0)
m=40+A.k.E(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=a0.a
k=this.b
j=0
for(;;){v.ik()
i=t[u].b
i===$&&B.c()
if(!(j<i.a.length()/22))break
i=k.d
v.ik()
h=t[u].b
h===$&&B.c()
h=A.k.F(j*22+i*m*l,h.a.length())
v.ik()
i=t[u].b
i===$&&B.c()
i=i.a.length()
v.ik()
g=t[u].b
g===$&&B.c()
f=A.k.F(h+i,g.a.length())
v.ik()
i=t[u].Ha(f).a
h=new B.ap(A.R,A.N,A.U,A.V,A.S)
h.r=A.c.gp(0)
e=h.G()
s.drawCircle(i.a,i.b,2.6,e)
e.delete();++j}}},
Pl(d,e,f,g){var w,v,u,t
$.S()
w=B.I()
v=g?A.b4:A.a5
u=g?A.b7:A.a8
t=B.ar(e,A.w,0.3)
t.toString
w.sam(new B.a9(v,u,A.x,B.a([e,f,e,t],x.O),A.HO,null).aB(0,d))
return w},
awO(d,e,f){return this.Pl(d,e,f,!0)},
c4a(d,e){return this.Pl(d,A.bm,A.iu,e)},
ahX(d,e){var w,v,u
$.S()
w=B.I()
w.sam(D.aOq.aB(0,B.bX(e,4.2)))
d.ad(e,4.2,w)
w=e.a8(0,D.ehe)
v=e.a8(0,D.ehn)
u=B.I()
u.r=A.e7.gp(0)
u.c=1.2
d.bo(w,v,u)},
ciE(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.S(),c0=B.I()
c0.sam(D.c1b.aB(0,D.eZV))
c0.c=3.4
c0.d=A.bE
w=B.I()
w.r=A.w.j(0.45).gp(0)
w.z=I.pk
c1.dO(D.eZJ,w)
if(c3){w=B.bt(D.eZT,A.kN)
v=B.I()
v.r=A.c.j(0.14).gp(0)
c1.az(w,v)}u=C.hbw(c2)
c1.bo(new B.t(-u,0),D.eiP,c0)
c1.bo(D.efT,new B.t(u,0),c0)
t=c2.x
w=c2.b
s=D.me.aj(0,w)&&c2.ch!==1
if(s){J.bm(c1.a.save())
c1.bW(0,c2.ch)}switch(w){case"battery":b3.bDE(c1,c2)
break
case"solar":r=B.bt(D.eZM,A.i8)
c1.az(r,b3.Pl(new B.a3(r.a,r.b,r.c,r.d),A.dv,A.bO,!1))
b9=B.I()
w=B.ar(D.bgY,A.d2,0.25+0.55*c2.f)
w.toString
v=B.ar(D.bpW,A.mz,0.3+0.4*c2.f)
v.toString
b9.sam(new B.a9(A.ay,A.aE,A.x,B.a([w,v],x.O),b4,b4).aB(0,D.a82))
c1.aP(D.a82,b9)
q=B.I()
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
v=new B.ap(A.R,A.N,A.U,A.V,A.S)
v.r=A.cr.j(0.5).gp(0)
v.c=0.6
o=v.G()
b9.drawLine.apply(b9,[w,-18,w,18,o])
o.delete()}b9=new B.aF($.S().r,A.ag,b4,b4,B.a([],x.v))
b9.D(new B.aX(-34,18))
b9.D(new B.aq(-6+40*c2.f,-18))
b9.D(new B.aq(4+40*c2.f,-18))
b9.D(new B.aq(-24,18))
b9.D(new B.bs())
w=B.I()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.aG(b9,w)
w=c2.f
b9=B.I()
b9.r=A.dP.j(0.9).gp(0)
c1.ad(D.efZ,4+4*w,b9)
break
case"crank":n=B.bt(D.eZx,A.fE)
c1.az(n,b3.awO(new B.a3(n.a,n.b,n.c,n.d),A.br,A.bM))
b9=B.I()
b9.sam(D.aOr.aB(0,B.bX(A.I,12)))
c1.ad(A.I,12,b9)
m=new B.t(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=B.I()
b9.r=A.cr.gp(0)
b9.c=5
b9.d=A.bE
c1.bo(A.I,m,b9)
b9=B.I()
b9.sam(D.erS.aB(0,B.bX(m,7)))
c1.ad(m,7,b9)
b3.ahX(c1,D.eiH)
b3.ahX(c1,D.efI)
break
case"turbine":b9=b9.r
w=x.v
v=new B.aF(b9,A.ag,b4,b4,B.a([],w))
v.D(new B.aX(-3,24))
v.D(new B.aq(3,24))
v.D(new B.aq(1.5,0))
v.D(new B.aq(-1.5,0))
v.D(new B.bs())
l=B.I()
l.r=A.bO.gp(0)
c1.aG(v,l)
for(v=c1.a,k=0;k<3;++k){l=c2.y
J.bm(v.save())
v.rotate((l+k*2.094)*180/3.141592653589793,0,0)
l=B.a([],w)
j=new B.aF(b9,A.ag,b4,b4,l)
l.push(new B.aX(0,-2))
l.push(new B.c4(6,-14,2,-30))
l.push(new B.c4(-2,-14,0,-2))
l.push(new B.bs())
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.r=A.c.gp(0)
o=l.G()
l=j.gbw().a.snapshot()
v.drawPath((j.e=new B.cl(l)).a,o)
o.delete()
v.restore()}b9=B.I()
b9.sam(D.erz.aB(0,B.bX(A.I,4.5)))
c1.ad(A.I,4.5,b9)
break
case"switch":n=B.bt(D.eZE,A.mU)
b9=B.I()
b9.sam(D.aqI.aB(0,new B.a3(n.a,n.b,n.c,n.d)))
c1.az(n,b9)
b3.ahX(c1,D.SY)
b3.ahX(c1,D.aJd)
i=c2.w?D.aJd:G.aJ4
b9=B.I()
b9.r=A.av.gp(0)
b9.c=6
b9.d=A.bE
c1.bo(D.SY,i,b9)
b9=B.I()
b9.r=(c2.w?A.bj:A.bO).gp(0)
b9.c=4
b9.d=A.bE
c1.bo(D.SY,i,b9)
b9=B.ky(D.SY,i,0.85)
b9.toString
w=B.I()
w.r=A.aw.gp(0)
c1.ad(b9,5,w)
break
case"fuse":h=B.bt(D.aP5,D.aOv)
b9=B.I()
b9.r=A.fh.j(0.25).gp(0)
c1.az(h,b9)
b9=B.I()
b9.b=A.aa
b9.c=1.4
b9.r=A.aB.gp(0)
c1.az(h,b9)
if(!t){b9=B.I()
b9.c=1.6
b9.r=B.ar(A.bO,A.cR,c2.fx).gp(0)
c1.bo(D.aJx,D.aJb,b9)}else{b9=B.I()
b9.c=1.6
b9.r=A.bY.gp(0)
c1.bo(D.aJx,D.eja,b9)
b9=B.I()
b9.c=1.6
b9.r=A.bY.gp(0)
c1.bo(D.egM,D.aJb,b9)
b9=B.I()
b9.r=A.dE.gp(0)
c1.ad(A.I,6,b9)}for(b9=c1.a,g=0;g<2;++g){f=B.bJ(new B.t(K.hx[g]*22,0),20,9)
w=B.bt(f,A.hz)
o=b3.Pl(f,A.d1,A.oT,!0).G()
b9.drawRRect(B.el(w),o)
o.delete()}break
case"pot":b9=B.I()
b9.sam(D.erK.aB(0,B.bX(A.I,21)))
c1.ad(A.I,21,b9)
for(b9=c1.a,k=0;k<=10;++k){e=2.356194490192345+k*3.141592653589793*1.5/10
w=Math.cos(e)
v=Math.sin(e)
l=Math.cos(e)
j=Math.sin(e)
d=new B.ap(A.R,A.N,A.U,A.V,A.S)
d.r=A.aB.gp(0)
d.c=1.2
o=d.G()
b9.drawLine.apply(b9,[w*18,v*18,l*22,j*22,o])
o.delete()}b9=B.I()
b9.sam(D.erx.aB(0,B.bX(A.I,13)))
c1.ad(A.I,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
l=Math.sin(a0)
j=B.I()
j.r=A.aU.gp(0)
j.c=3
j.d=A.bE
c1.bo(new B.t(b9*3,w*3),new B.t(v*12,l*12),j)
break
case"resistor":a1=B.bt(D.aP5,D.aOv)
b9=B.I()
b9.sam(D.c4v.aB(0,new B.a3(a1.a,a1.b,a1.c,a1.d)))
c1.az(a1,b9)
b9=x.O
a2=B.G([47,B.a([B.b1(b5),B.b1(b6),A.w],b9),100,B.a([B.b1(b7),A.w,B.b1(b7)],b9),220,B.a([B.b1(b8),B.b1(b8),B.b1(b7)],b9),470,B.a([B.b1(b5),B.b1(b6),B.b1(b7)],b9),1000,B.a([B.b1(b7),A.w,B.b1(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(b9=c1.a,p=0;p<3;++p){w=-14+p*9
v=new B.ap(A.R,A.N,A.U,A.V,A.S)
v.r=a3[p].gp(0)
o=v.G()
b9.drawRect(B.bF(new B.a3(w,-9,w+4.5,9)),o)
o.delete()}b9=B.I()
b9.r=A.aU.gp(0)
c1.aP(D.f_6,b9)
b9=c2.r
b3.qC(c1,b9>=1000?"1k\u03a9":""+A.k.V(b9)+"\u03a9",D.eia,A.ad,10)
break
case"bulb":w=c2.fx
if(w>0){v=B.I()
v.r=A.dP.j(0.55*w).gp(0)
v.z=A.zA
c1.ad(G.uV,34,v)}n=B.bJ(D.eeH,12,18)
c1.az(B.bt(n,A.hz),b3.Pl(n,A.bm,A.e4,!0))
for(w=c1.a,p=0;p<3;++p){v=13+p*3.5
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.r=A.dm.gp(0)
l.c=1
o=l.G()
w.drawLine.apply(w,[-9,v,9,v,o])
o.delete()}w=B.I()
if(t)v=A.Xu
else{v=B.ar(A.e4,A.hT,c2.fx)
l=c2.fx
v=v.j(0.25+0.7*l)}if(t)l=A.Bg
else{l=B.ar(A.dv,A.dP,c2.fx)
l.toString}w.sam(new B.c1(A.tj,0.5,A.x,b4,0,B.a([v,l.j(0.18+0.5*c2.fx)],x.O),b4,b4).aB(0,B.bX(A.rU,17)))
c1.ad(A.rU,17,w)
w=B.I()
w.b=A.aa
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.ad(A.rU,17,w)
b9=b9.r
w=x.v
l=new B.aF(b9,A.ag,b4,b4,B.a([],w))
l.D(new B.aX(-9,-12))
l.D(new B.c4(-12,-4,-9,0))
v=B.I()
v.b=A.aa
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.aG(l,v)
v=B.I()
v.r=A.cX.gp(0)
v.c=1.4
c1.bo(D.ej4,D.ej6,v)
v=B.I()
v.r=A.cX.gp(0)
v.c=1.4
c1.bo(D.egE,D.egH,v)
w=B.a([],w)
a4=new B.aF(b9,A.ag,b4,b4,w)
a4.D(new B.aX(-4,-2))
for(k=0;k<6;k=a5){a5=k+1
b9=(k&1)===0?-6:1
b9=new B.aq(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.by(v)
b9=a4.e
if(b9!=null)b9.a.delete()
a4.e=null}$.S()
b9=B.I()
b9.b=A.aa
b9.c=1.8
if(t)w=A.aT
else{w=B.ar(A.dv,D.bhZ,c2.fx)
w.toString}b9.r=w.gp(0)
c1.aG(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=B.I()
v.r=A.aw.j(0.6*w).gp(0)
v.z=D.dyQ
c1.ad(A.rU,30,v)}w=B.I()
w.r=A.e4.gp(0)
w.c=2.4
c1.bo(D.ejc,D.ejb,w)
w=B.I()
w.r=A.e4.gp(0)
w.c=2.4
c1.bo(D.egO,D.egN,w)
b9=b9.r
w=x.v
a6=new B.aF(b9,A.ag,b4,b4,B.a([],w))
a6.D(new B.aX(-12,8))
a6.D(new B.aq(-12,-6))
a6.D(new B.c4(0,-26,12,-6))
a6.D(new B.aq(12,8))
a6.D(new B.bs())
v=B.I()
if(t)l=A.jc
else{l=B.ar(A.ej,D.bjE,c2.fx)
l.toString}if(t)j=A.kC
else{j=B.ar(A.jL,A.aw,c2.fx)
j.toString}v.sam(new B.a9(A.ay,A.aE,A.x,B.a([l,j],x.O),b4,b4).aB(0,D.eYZ))
c1.aG(a6,v)
v=B.I()
v.b=A.aa
v.c=1.2
v.r=A.jM.gp(0)
c1.aG(a6,v)
v=B.I()
v.r=A.ek.gp(0)
c1.aP(D.eZ4,v)
w=new B.aF(b9,A.ag,b4,b4,B.a([],w))
w.D(new B.aX(-7,-4))
w.D(new B.c4(-6,-12,0,-15))
b9=B.I()
b9.b=A.aa
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.aG(w,b9)
break
case"motor":a7=new B.a3(-28,-14,20,14)
c1.az(B.bt(a7,A.hA),b3.awO(a7,A.al,A.aL))
b9=B.I()
b9.r=A.cp.gp(0)
c1.aP(D.eYy,b9)
b9=B.I()
b9.r=A.cr.gp(0)
c1.aP(D.eYA,b9)
b9=c1.a
J.bm(b9.save())
b9.translate(31,0)
for(k=0;k<3;++k){J.bm(b9.save())
b9.rotate((c2.y+k*2.094)*180/3.141592653589793,0,0)
w=B.bJ(G.aJ_,15,7)
v=new B.ap(A.R,A.N,A.U,A.V,A.S)
v.r=A.cR.j(0.9).gp(0)
o=v.G()
b9.drawOval(B.bF(w),o)
o.delete()
b9.restore()}w=B.I()
w.r=A.av.gp(0)
c1.ad(A.I,3,w)
b9.restore()
b3.qC(c1,"M",D.eiG,A.av,14)
break
case"buzzer":a8=B.bJ(A.I,42,42)
b9=B.I()
b9.sam(D.erO.aB(0,a8))
c1.dO(a8,b9)
b9=B.I()
b9.r=A.w.gp(0)
c1.ad(A.I,6,b9)
b9=B.I()
b9.b=A.aa
b9.c=1.4
b9.r=A.aZ.gp(0)
c1.ad(A.I,6,b9)
b3.qC(c1,"+",D.eiz,A.ad,12)
for(b9=c1.a,w=b3.b,k=1;k<=3;++k){v=c2.fx
l=v>0?A.k.F(w.d*14,5):0
l=B.bX(A.I,24+k*5+l)
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
j.b=A.aa
j.c=2
j.r=A.c5.j(v*(1-k*0.22)).gp(0)
o=j.G()
b9.drawArc.apply(b9,[B.bF(l),-40.10704565915762,80.21409131831524,!1,o])
o.delete()}break
case"heater":n=B.bt(D.eZA,A.hA)
w=B.I()
w.sam(D.c29.aB(0,new B.a3(n.a,n.b,n.c,n.d)))
c1.az(n,w)
w=B.a([],x.v)
a9=new B.aF(b9.r,A.ag,b4,b4,w)
a9.D(new B.aX(-24,0))
for(k=0;k<8;k=a5){b9=(k&1)===0?-10:10
a5=k+1
b9=new B.c4(-24+k*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.by(v)
b9=a9.e
if(b9!=null)b9.a.delete()
a9.e=null}b9=c2.fx
if(b9>0.1){$.S()
w=B.I()
w.b=A.aa
w.c=10
w.r=D.biF.j(0.5*b9).gp(0)
w.z=A.lJ
c1.aG(a9,w)}$.S()
b9=B.I()
b9.b=A.aa
b9.c=3.2
b9.d=A.bE
b9.r=B.ar(A.lY,P.Mq,c2.fx).gp(0)
c1.aG(a9,b9)
break
case"capacitor":a7=new B.a3(-16,-22,16,18)
b9=B.bt(a7,A.hA)
w=B.I()
w.sam(D.c13.aB(0,a7))
c1.az(b9,w)
w=B.I()
w.r=A.bO.gp(0)
c1.aP(D.eZd,w)
for(p=0;p<4;++p){b0=new B.jR(new B.eu("\u2212",b4,b4,A.cQ,b4,b4,b4,b4,b4,b4,new B.F(!0,A.av,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a3,A.bZ,new B.jA(1),b4,b4,b4,b4,A.bW,b4)
b0.el()
b0.a3(c1,new B.t(-14,-18+p*9))}b1=new B.a3(-16,-24,16,-17)
c1.az(B.bt(b1,A.hz),b3.c4a(b1,!1))
b9=38*c2.fx
w=18-b9
$.S()
v=B.I()
v.r=A.bj.j(0.5).gp(0)
c1.aP(new B.a3(-3,w,11,w+b9),v)
b3.qC(c1,"1F",G.uV,A.c,11)
break
case"radio":a1=B.bt(D.a82,A.fE)
b9=B.I()
b9.sam(D.c4L.aB(0,new B.a3(a1.a,a1.b,a1.c,a1.d)))
c1.az(a1,b9)
b9=B.I()
b9.b=A.aa
b9.c=1.4
b9.r=A.oT.j(0.6).gp(0)
c1.az(a1,b9)
b9=B.bt(D.eZB,A.i8)
w=B.I()
w.r=A.dO.gp(0)
c1.az(b9,w)
for(b9=c1.a,p=0;p<6;++p){w=-10+p*4.4
v=new B.ap(A.R,A.N,A.U,A.V,A.S)
v.r=A.lY.gp(0)
v.c=1.4
o=v.G()
b9.drawLine.apply(b9,[-27,w,-3,w,o])
o.delete()}w=B.I()
w.r=(c2.fx>0?A.fU:A.nX).gp(0)
c1.aP(D.eYF,w)
if(c2.fx>0){w=8+A.k.F(b3.b.d*7,18)
v=B.I()
v.r=A.by.gp(0)
v.c=1.6
c1.bo(new B.t(w,-13),new B.t(w,-3),v)}w=B.I()
w.sam(D.aOr.aB(0,B.bX(D.a71,6)))
c1.ad(D.a71,6,w)
w=B.I()
w.r=A.oT.gp(0)
c1.ad(D.efS,4,w)
w=B.I()
w.r=A.e4.gp(0)
w.c=1.8
c1.bo(D.efN,D.aJi,w)
if(c2.fx>0)for(w=b3.b,k=1;k<=2;++k){v=B.bX(D.aJi,4+k*5+A.k.F(w.d*8,5))
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.b=A.aa
l.c=1.4
l.r=A.o2.j(0.7).gp(0)
o=l.G()
b9.drawArc.apply(b9,[B.bF(v),-137.50987083139756,91.67324722093173,!1,o])
o.delete()}break
case"tv":w=B.bt(D.eZL,A.hA)
v=B.I()
v.r=K.nd.gp(0)
c1.az(w,v)
b2=B.bt(D.eZI,A.hz)
if(c2.fx>0&&!c2.x){b9=c1.a
J.bm(b9.save())
b9.clipRRect(B.el(b2),$.ny(),!0)
b9.translate(-33,-21)
E.h7C(c1,D.f4X,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=B.I()
b9.r=A.bj.gp(0)
c1.ad(D.eg4,1.6,b9)}else{w=B.I()
w.r=D.vJ.gp(0)
c1.az(b2,w)
b9=new B.aF(b9.r,A.ag,b4,b4,B.a([],x.v))
b9.D(new B.aX(-33,-21))
b9.D(new B.aq(-10,-21))
b9.D(new B.aq(-33,0))
b9.D(new B.bs())
w=B.I()
w.r=A.c.j(0.05).gp(0)
c1.aG(b9,w)}b9=B.I()
b9.r=A.br.gp(0)
c1.aP(D.eZ3,b9)
break}C.ifE(c1,c2,b3.b.d,b3.gc8I())
if(t)b3.qC(c1,"\u2716",D.ejf,A.aw,14)
if(s)c1.a.restore()},
bDE(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=e.e
if(l<=4.5){w=new B.a3(-28,-13,28,13)
d.az(B.bt(w,A.mU),m.awO(w,A.dv,A.ja))
v=new B.a3(-22,-13,22,13)
$.S()
u=B.I()
u.sam(D.aqB.aB(0,v))
d.aP(v,u)
u=B.I()
u.r=A.dY.gp(0)
d.aP(D.eZn,u)
t=new B.a3(28,-5,34,5)
d.az(B.bt(t,A.hk),m.Pl(t,A.dv,A.iu,!0))
m.qC(d,"+",D.eft,A.aU,11)
m.qC(d,"\u2212",D.eiI,A.ad,11)
m.qC(d,B.w(l===A.k.j3(l)?A.k.V(l):l)+"V",D.eio,A.aU,13)
if(l===1.5){u=B.I()
u.r=A.bz.gp(0)
d.aP(D.eZm,u)
u=e.as
s=B.I()
s.r=B.ar(A.aw,A.bj,u).gp(0)
d.aP(new B.a3(-22,14,-22+44*u,18),s)
if(e.as<=0.02)m.qC(d,"FLAT",D.ei9,A.cs,9)}if(l>2){u=B.I()
u.r=A.aZ.gp(0)
u.c=1
d.bo(D.eeQ,D.aIT,u)
m.qC(d,l>3?"3 cells":"2 cells",D.ein,A.aB,8)}}else if(l<=9){r=new B.a3(-22,-17,22,17)
u=B.bt(r,A.mU)
$.S()
s=B.I()
s.sam(D.c4i.aB(0,r))
d.az(u,s)
s=B.I()
s.r=A.cU.gp(0)
d.aP(D.eZo,s)
for(u=d.a,q=0;q<2;++q){p=F.aA4[q]
s=p<0?5:3.6
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.sam(D.aOq.aB(0,B.bX(new B.t(p,-18),5)))
n=o.G()
u.drawCircle(p,-18,s,n)
n.delete()}m.qC(d,"9V",D.eig,A.c,16)}else{r=new B.a3(-34,-16,34,16)
u=B.bt(r,A.i8)
$.S()
s=B.I()
s.sam(D.aqB.aB(0,r))
d.az(u,s)
s=B.I()
s.r=A.bG.gp(0)
d.aP(D.eZK,s)
for(u=d.a,q=0;q<2;++q){s=B.bt(B.bJ(new B.t(F.a4P[q],-20),8,10),A.hk)
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.r=A.cr.gp(0)
n=o.G()
u.drawRRect(B.el(s),n)
n.delete()}m.qC(d,"+",D.efC,A.aw,10)
m.qC(d,"12V",D.eik,A.av,15)}},
aw(d){return!0}}
C.mJ.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a9(k)
A.d.a9(d.b)
w=B.U(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.M)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.tE(o,r,q,p)
n.aqN(o,r,q,p)
k.push(n)
J.iw(s[4],new C.cpQ(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.M)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.al5(m,u[1],l,u[3])}}}
C.aiX.prototype={
T(){var w=x.N
return new C.aiY(A.I,A.ax,B.U(w,x.gl),B.aY(w),$,A.bF,0,B.a([],x.X),null,null)}}
C.aiY.prototype={
aex(d){var w=this,v=w.as
if(v!=null)v.a4(0)
w.m(new C.bHX(w,d))
w.as=B.cK(A.lz,new C.bHY(w))},
q(){var w=this.as
if(w!=null)w.a4(0)
w=this.ch
if(w!=null)w.a4(0)
this.btv()},
a0h(d,e){return this.cgz(d,e)},
b15(d){return this.a0h(d,!1)},
cgz(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a0h=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.rl:A.y2
p=d.b
w=3
return B.b(E.h7V(s,r,p,d.ax<3.2,q,$.qq().h(0,p).b),$async$a0h)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a0h,v)},
ctg(d){var w=this,v=new B.V(Date.now(),0,!1),u=w.at.c3(0,d.a,new C.bHZ()),t=J.cD(u)
t.M(u,v)
t.bs(u,new C.bI_(v))
if(t.gL(u)>=4){t.a9(u)
t=w.ch
if(t!=null)t.a4(0)
w.a1B(d)
return}if(t.gL(u)===3){t=w.ch
if(t!=null)t.a4(0)
w.ch=B.cK(A.iU,new C.bI0(w,u,d))}},
a_Y(d){return this.ceW(d)},
ceW(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a_Y=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return B.b(C.igP(s,d.b,A.k.V(A.k.F(t.a.c.d*0.12,1)*100)),$async$a_Y)
case 3:t.ay=!1
case 1:return B.h(u,v)}})
return B.i($async$a_Y,v)},
a1B(d){return this.cqP(d)},
cqP(d){var w=0,v=B.j(x.H),u=this,t
var $async$a1B=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bU(F.lw,null,new C.bHV(u,d),t,!0,!0,!1,A.k1,!1,!1,x.H),$async$a1B)
case 2:return B.h(null,v)}})
return B.i($async$a1B,v)},
Z(){this.a2()
this.bfU()
this.pa()},
bfU(){this.a.c.e=new C.bIf(this)},
q7(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.vk(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,B.M)(w),++t){s=w[t]
r=D.me.h(0,s.b)
if((r==null?null:r.b)!==D.A_)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.t(0,s.a)&&!q.ay){u.M(0,s.a)
q.a0h(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.M)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)E.dY(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)E.dY(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cZ.ah()<0.5
else u=!1
if(u)E.dY(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){E.dY(900+A.cZ.au(800),"",90,0,0.1,o)
if(A.cZ.ah()<0.35)E.dY(300+A.cZ.au(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cZ.ah()<0.4
else u=!1
if(u)E.dY(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)E.dY(330+A.o.F(110*A.k.bh(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)E.dY((A.k.bh(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)E.dY(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)E.dY(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cZ.ah()<0.5
else u=!1
if(u)E.dY(1200,"",30,0,0.07,o)
break
case"turbine":u=s.f
if(u>0.1)E.dY(80,"",150,0,0.05*u,o)
break
case"crank":u=s.f
if(u>0.15)E.dY(110+u*140,"",70,0,0.08,"saw")
break}}}w=q.a.w
if(w!=null)w.$0()
q.m(new C.bIg())},
b85(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.M)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.me.aj(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new B.z(p,n)
r=i}}}return s},
b1L(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.T(w).k("dw<1>"),w=new B.dw(w,v),w=new B.bR(w,w.gL(0),v.k("bR<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.me.aj(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cFR(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.M)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.me.aj(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.me.aj(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=C.hvM(new B.t(k,n),new B.t(i,l),p)
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
aev(){this.a.toString
this.m(new C.bHq())},
bqe(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.d6R[v]
if(!A.d.b3(p.a.c.a,new C.bIh(u,w))){o=new B.t(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?M.IZ:o
s=s?M.IZ:o
q=t.akn(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
E.dY(1200,"",50,0,0.3,"tri")
p.aev()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.Rk[v].a)
u=w.length
t=u>8
s=t?A.d.ds(w,0,A.o.ao(u+1,2)):w
r=t?A.d.fJ(w,A.o.ao(w.length+1,2)):A.Y
q=n.a.d
if(q!=null){w=B.a6(q).k("cv<1>")
w=B.C(new B.cv(q,w),w.k("L.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.M)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b1B(s,!0))
n.a.toString
if(t)w.push(n.b1B(r,!0))
w.push(B.E(B.cz(new C.bIe(n,q,m)),1))
return B.x(w,A.m,null,A.e,A.i,0,A.p)},
b1B(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.M)(d),++v){u=d[v]
t=$.qq()
s=t.h(0,u).d.j(0.14)
r=new B.aQ(14,14)
q=new B.ay(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.aB(p,B.p(p,B.x(B.a([new B.y(t.h(0,u).c,p,A.Ah,p,p,p,p,p,p,p,p,p),new B.y(t.h(0,u).b,p,A.nE,p,p,p,p,A.a1,p,1,p,p)],n),A.m,p,A.b8,A.i,0,A.p),A.f,p,p,new B.o(s,p,new B.bK(q,q,q,q),new B.bj(r,r,r,r),p,p,A.n),p,p,p,F.tY,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bHr(this,u),p,p,p,p,p,p,!1,A.a4))}return B.p(p,B.cr(m,p,A.h4,p,p,A.aM,!1),A.f,p,p,new B.o(F.Bd,p,new B.bK(A.a0,A.a0,new B.ay(o,1,A.r,-1),A.a0),p,p,p,A.n),p,58,p,p,p,p,p,p)},
b_0(d){var w=null,v=B.m(18)
return B.p(w,d,A.f,w,w,new B.o(F.ae1,w,B.J(A.bz,A.r,1),v,w,w,A.n),w,w,w,w,F.ajI,w,w,w)},
ciF(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qq().h(0,o),m=d.dy,l=d.fr,k=new C.bHK(q,n),j=B.d(n.c,p,p,p,p,p,p,A.K0,p,p,p),i=n.b,h=n.d,g=x.p
i=B.B(B.a([j,A.ac,B.E(B.d(i,p,p,p,p,p,p,B.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),B.aH(p,p,p,p,D.bT9,p,p,p,new C.bHx(q,d),p,p,p,p,"Remove part",A.cd),B.aH(p,p,p,p,A.Hj,p,p,p,new C.bHy(q),p,p,p,p,p,A.cd)],g),A.m,p,A.e,A.i,0,p,p)
j=B.d(n.e,p,p,p,p,p,p,F.E6,p,p,p)
w=B.d("How it is made: "+n.f,p,p,p,p,p,p,D.fmi,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.k.ac(Math.abs(d.dy),2)+" volts  \xb7  "+A.k.ac(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.k.ac(Math.abs(m*l),2)+" watts"
m=B.a([i,j,A.au,w,A.am,B.d(m,p,p,p,p,p,p,B.l(p,p,d.x?A.cs:A.aU,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bdQ(d)
if(v!=null){l=(d.x?A.aw:A.aC).j(0.14)
j=B.m(10)
i=B.J((d.x?A.aw:A.aC).j(0.5),A.r,1)
m.push(new B.D(A.hY,B.p(p,B.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.ft0,p,p,p),A.f,p,p,new B.o(l,p,i,j,p,p,A.n),p,p,p,p,A.cm,p,p,p),p))}if(C.h5G(o)){l=B.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new C.eX("CH "+t,d.at===u,new C.bHz(q,d,u),p,h,p))}l=B.bW(A.bC,l,A.bq,p,4,6)
l=B.a([A.am,l,A.au,B.d(q.a.c.CG(d)?"Showing: "+F.QW[A.o.F(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hm,p,p,p)],g)
if(q.a.c.CG(d))l.push(new C.j7(A.GQ,"Open big screen",new C.bHC(q,d),h,p))
A.d.v(m,l)}if(D.me.aj(0,o)&&!C.h5G(o)){l=B.a([A.am,B.d(q.a.c.CG(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hm,p,p,p)],g)
if(q.a.c.CG(d))l.push(new C.j7(A.OE,"Open the "+$.qq().h(0,o).b,new C.bHD(q,d),h,p))
A.d.v(m,l)}if(D.me.aj(0,o))A.d.v(m,B.a([A.am,new C.j7(A.Ci,"Make it bigger (or tap it 4 times)",new C.bHE(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.k.ac(d.db,1)
if(q.a.c.CG(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=B.a([A.am,B.d("Volts in: "+j+" V   \u2192   Volts out: "+A.k.ac(i,1)+" V",p,p,p,p,p,p,D.fn8,p,p,p)],g)
if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.doL[s]
j=r===A.k.j3(r)?A.k.V(r):r
l.push(new C.eX(B.w(j)+" V out",d.e===r,new C.bHF(q,d,r),p,h,p))}i.push(new B.D(A.l2,B.bW(A.bC,l,A.bq,p,0,6),p))}if(o==="regulator")i.push(D.fLN)
A.d.v(m,i)}if(q.a.c.M0(d)&&!d.x){l=A.k.ac(d.cx,2)
j=A.k.ac(q.a.c.zQ(d),2)
i=q.a.c
w=i.anN(d)?"   \u26a0 OVERLOADED":""
l=B.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,B.l(p,p,i.anN(d)?A.cs:A.es,p,p,p,p,p,p,p,p,12.5,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=B.m(4)
w=A.k.E(d.cx/q.a.c.zQ(d),0,1)
i=q.a.c.anN(d)?A.aw:A.bj
m.push(new B.D(A.hY,B.x(B.a([l,A.cL,B.bx(j,B.ll(A.bz,p,p,5,p,w,new B.m6(i,x.B)),A.ap)],g),A.E,p,A.e,A.i,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.k.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.D(A.hY,B.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.fgR,p,p,p),p))}if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.ddQ[s]
j=r===1.5?"1.5 V (rechargeable)":B.w(r)+" V"
l.push(new C.eX(j,d.e===r,new C.bHG(q,d,r),p,h,p))}m.push(B.bW(A.bC,l,A.bq,p,0,6))}if(o==="resistor"){l=B.a([],g)
for(s=0;s<5;++s){r=D.d43[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new C.eX(j,d.r===r,new C.bHH(q,d,r),p,h,p))}m.push(B.bW(A.bC,l,A.bq,p,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new C.bHI(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new C.bHJ(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new C.bHA(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new C.bHB(d)))
if(o==="crank")m.push(D.fH8)
if(o==="switch")m.push(B.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hm,p,p,p))
return q.b_0(new B.cU(D.b2D,B.ce(B.x(m,A.E,p,A.e,A.Q,0,A.p),A.t,p,A.y,p,p,p,p,A.ah),p))}}
C.bbI.prototype={}
C.Vq.prototype={
T(){return new C.aDW(C.hbv(),new B.cB(null,x.gJ),B.aY(x.S))}}
C.aDW.prototype={
Z(){this.a2()
$.aV.bZ$.push(this)
this.aew()},
aew(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aew=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fAO(),$async$aew)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.ig1(t.d,r)
if(s!=null){t.m(new C.dWw(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$aew,v)},
F8(){var w,v=this
if(!v.as)return
w=C.i6s(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bED(w)},
jd(d){if(d!==A.fJ)this.F8()},
q(){$.aV.hO(this)
this.F8()
this.a1()},
c8K(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.T(v).k("Z<1>")
t=new B.Z(v,new C.dWF(q),u).gL(0)
s=new B.Z(v,new C.dWG(),u).gL(0)
r=new B.Z(v,w.gcV7(),u).gL(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new C.dWH(q,t,s,r))}if(A.o.F(q.w,45)===0)q.F8()
if(A.o.F(q.w,10)===0){w=q.f
$.aia()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.t(0,q.f)&&$.aia()[q.f].c.$1(q.d)){w.M(0,q.f)
C.Ja("bell",B.a([0,4,7,12],x.t),700,0.45)
q.m(new C.dWI())
q.F8()
w=q.c
w.toString
w=B.XH(w)
if(w!=null)w.U(B.b3(p,p,p,p,p,A.t,p,B.d("\u2705 Challenge done: "+$.aia()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.m1,p,p,p,p,p,p,p,p,p,p))}},
ahd(){var w=0,v=B.j(x.H),u=this,t
var $async$ahd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.ci(null,null,!0,null,new C.dWv(u),t,null,!0,!0,x.H),$async$ahd)
case 2:return B.h(null,v)}})
return B.i($async$ahd,v)},
b__(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.m(12),t=B.J(f.j(0.45),A.r,1)
u=B.a([B.ao(w,B.p(w,B.X(d,f,w,w,w,18),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ao(w,h,w,w,w,-1,-3,w))
return B.aB(w,B.hc(new B.a7(40,38,new B.an(A.a_,w,A.ab,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4)},
aZZ(d,e,f,g){return this.b__(d,e,f,g,null)},
art(d,e,f,g){var w=null,v=f.j(0.1),u=B.m(10),t=B.J(f.j(0.4),A.r,1)
return B.E(B.aB(w,B.p(w,B.B(B.a([B.X(d,f,w,w,w,15),A.em,new B.ds(1,A.cn,B.d(e,w,1,A.a1,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.b8,A.i,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),1)},
afy(){var w=0,v=B.j(x.H),u=this,t
var $async$afy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a4(t,!1).cc(B.dX(new C.dWr(u),!1,null,x.H)),$async$afy)
case 2:t=u.e.gbl()
if(t!=null)t.bfU()
if(u.c!=null)u.m(new C.dWs())
u.F8()
return B.h(null,v)}})
return B.i($async$afy,v)},
bGK(){var w,v,u,t,s=null,r=this.f
$.aia()
if(r>=11)return s
w=this.r
v=w.t(0,r)
r=v?A.be:A.aw
u=B.m(9)
t=B.J(F.Bd,A.r,1.5)
return B.p(s,B.at(B.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.wV,s,s,s),s,s,s),A.f,s,D.b2K,new B.o(r,s,t,u,s,s,A.n),s,s,s,s,A.eX,s,s,s)},
aij(){var w=0,v=B.j(x.H),u=this,t
var $async$aij=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bU(F.lw,null,new C.dWE(u),t,!0,!0,!0,A.k1,!1,!1,x.H),$async$aij)
case 2:return B.h(null,v)}})
return B.i($async$aij,v)},
c8L(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.aB(r,B.p(r,D.bUo,A.f,r,r,new B.o(A.c.j(0.07),r,r,r,r,r,A.a6),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.dWK(d),r,r,r,r,r,r,!1,A.a4),o=B.m(11)
o=B.p(r,D.b8w,A.f,r,r,new B.o(A.bn,r,B.J(A.aQ.j(0.45),A.r,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.p(r,B.x(B.a([B.B(B.a([p,A.ac,o,A.ac,B.E(B.x(B.a([D.fJN,B.d(w,r,1,A.a1,r,r,r,B.l(r,r,s.y>0||s.z>0?A.eO:A.he,r,r,r,r,r,r,r,r,11.5,r,r,A.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.E,r,A.e,A.i,0,A.p),1),new C.axU(s.gceD(),r),A.t3,s.aZZ(A.yI,"Construction Lab: real 3D wiring, plumbing and a house",A.cR,new C.dWL(s,d)),s.b__(A.lC,"Challenges",A.aU,s.gcvQ(),s.bGK()),s.aZZ(A.Oz,"How to play",A.aQ,new C.dWM(d,e))],v),A.m,r,A.e,A.i,0,r,r),A.am,B.B(B.a([s.art(A.og,"Circuits",A.bw,s.gcoG()),A.bo,s.art(A.p6,"Repair",A.aU,new C.dWN(s)),A.bo,s.art(D.Oo,"Clear",A.cs,new C.dWO(s))],v),A.m,r,A.e,A.i,0,r,r)],v),A.m,r,A.e,A.Q,0,A.p),A.f,r,r,new B.o(F.Bd,r,new B.bK(A.a0,A.a0,new B.ay(q,1,A.r,-1),A.a0),r,r,r,A.n),r,r,r,r,D.bDf,r,r,r)},
B(d){var w=this,v=null
$.ask="tech"
return B.c7(v,A.c0,B.bl(!0,B.x(B.a([w.c8L(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.hal(w.d,w.e,w.gc8J(),v),1)],x.p),A.m,v,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0),v,!1,!1,v,v)}}
C.axU.prototype={
T(){return new C.b9S(null,null)}}
C.b9S.prototype={
gaxG(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,A.Z,null,1,null,v)
w.cM(0)
v.d!==$&&B.bG()
v.d=w
u=w}return u},
q(){this.gaxG().q()
this.buS()},
B(d){var w=null,v=this.a.c
return B.aB(w,B.hc(new B.a7(42,42,B.ca(this.gaxG(),new C.cGV(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.b9R.prototype={
a3(d,e){var w,v,u,t=null,s=e.ei(A.I),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.S()
w=B.I()
w.r=A.b5.j(0.25+0.15*o).gp(0)
w.z=I.pk
d.ad(s,r+2+o*2,w)
w=B.I()
w.sam(D.erJ.aB(0,B.bX(s,r)))
d.ad(s,r,w)
v=B.I()
v.b=A.aa
v.c=2.2
v.sam(new B.fY(A.A,0,6.283185307179586,A.x,D.cW3,t,new B.my(p)).aB(0,B.bX(s,r)))
d.ad(s,r,v)
p=new C.cGU(d)
p.$3(s.a8(0,A.rU),8+o*1.5,1)
q*=4
p.$3(s.a8(0,D.eh_),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a8(0,D.ejl),2.6,0.5+0.5*Math.cos(q))
u=B.fu(t,t,t,t,D.fdk,A.a3,A.bZ,t,A.dA,A.bW)
u.el()
u.a3(d,s.a8(0,new B.t(-u.b.c/2,5)))},
aw(d){return d.b!==this.b}}
C.ayd.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.aye.prototype={
q(){var w,v,u
for(w=this.iL$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iK$
w===$&&B.c()
w.q()
this.btu()}}
C.aKr.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.by1.prototype={}
C.fP.prototype={}
C.JE.prototype={
a5(){return"ScreenStyle."+this.b}}
C.mh.prototype={}
C.V9.prototype={
T(){return new C.bkm(null,null)}}
C.bkm.prototype={
ga9L(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,A.ob,null,1,null,v)
w.cp(0)
v.d!==$&&B.bG()
v.d=w
u=w}return u},
q(){this.ga9L().q()
this.bwG()},
gSa(){var w=this.ga9L().y
w=w==null?null:A.o.ao(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.me.h(0,this.a.c)
if(v==null)v=D.aPn
return B.c7(w,T.YB,B.bl(!0,new B.an(A.a_,w,A.ab,A.t,B.a([B.at(v.b===D.A0?this.bIS(v):this.clr(v),w,w,w),B.ao(w,B.aH(w,w,w,w,A.mN,w,w,w,new C.dSV(d),w,w,w,B.nI(w,A.aT,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),B.ao(6,B.at(B.d(v.a,w,w,w,w,w,w,D.feY,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.af,!0,!0),w,!1,!1,w,w)},
c8M(d){var w
A:{if(D.Jm===d){w=0.46153846153846156
break A}if(D.v4===d){w=0.45
break A}if(D.wK===d){w=0.9259259259259258
break A}if(D.TD===d){w=0.75
break A}w=0.7317073170731708
break A}return w},
clr(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.Jm
A:{if(D.Jm===p){w=44
break A}if(D.v4===p){w=30
break A}if(D.wK===p){w=22
break A}if(D.TD===p){w=26
break A}w=14
break A}v=B.ca(this.ga9L(),new C.dSU(this,w,d,o),q)
if(p===D.a8b)v=new B.Bg(D.bDS,v,q)
p=this.c8M(p)
u=o?4:5
t=d.c
s=B.ar(t,A.c,o?0.25:0.08)
s.toString
r=B.ar(t,A.w,0.5)
r.toString
r=B.a([s,t,r],x.O)
t=B.m(w)
s=B.a([new B.ac(0,A.G,d.d.j(0.28),A.I,36)],x.V)
return new B.fD(p,B.p(q,B.p(q,v,A.f,q,q,new B.o(A.w,q,q,B.m(w-3),q,q,A.n),q,q,q,q,A2.Gj,q,q,q),A.f,q,q,new B.o(q,q,q,t,s,new B.a9(A.ay,A.aE,A.x,r,q,q),A.n),q,q,q,D.bxo,new B.Q(u,u,u,u),q,q,q),q)},
b7e(d){var w,v,u,t=null,s=new B.V(Date.now(),0,!1),r=A.o.E(this.a.d+A.k.bh(this.gSa()*0.4),0,100),q=d.b===D.Jm,p=q?34:20,o=q?28:18,n=B.a([B.d(A.a.aU(A.o.u(B.de(s)),2,"0")+":"+A.a.aU(A.o.u(B.fN(s)),2,"0"),t,t,t,t,t,t,A.ta,t,t,t),A.b0],x.p)
for(w=0;w<4;++w){v=new B.aQ(1,1)
n.push(B.p(t,t,A.f,t,t,new B.o(A.c,t,t,new B.bj(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bDA,t,t,t,3))}n.push(A.db)
n.push(D.fCt)
n.push(A.bo)
v=B.J(A.ad,A.r,1)
u=B.m(4)
n.push(B.p(t,new B.bM(A.a5,t,t,B.Bt(A.A,B.p(t,t,A.f,t,t,new B.o(A.bj,t,t,B.m(2),t,t,A.n),t,t,t,A2.Gj,t,t,t,t),t,r/100),t),A.f,t,t,new B.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.qG)
n.push(B.d(""+r+"%",t,t,t,t,t,t,D.ftm,t,t,t))
return new B.D(new B.Q(p,12,o,2),B.B(n,A.m,t,A.e,A.i,0,t,t),t)},
avE(d,e,f){var w,v=null,u=d.d,t=B.ar(u,A.w,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.m(e*0.26)
w=x.p
t=B.a([B.p(v,B.at(B.d(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.o(v,v,v,u,D.djM,new B.a9(A.ay,A.aE,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,B.a([A.au,B.d(d.a,v,1,A.a1,v,v,v,D.fjL,v,v,v)],w))
return B.aB(v,B.x(t,A.m,v,A.e,A.Q,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dSQ(this,d),v,v,v,v,v,v,!1,A.a4)},
c_e(d,e){return this.avE(d,e,!0)},
bZW(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.TD||n===D.wK,l=d.d,k=B.ar(l,A.w,0.55)
k.toString
l=B.ar(l,A.k9,0.5)
l.toString
l=B.a([k,A.du,l],x.O)
k=p.b7e(d)
w=m?190:138
v=B.m(24)
u=B.J(A.aZ,A.r,1)
w=B.aB(o,B.p(o,B.bx(B.m(23),B.b4(o,o,o,new C.aeR(0,p.gSa(),o),A.fF),A.ap),A.f,o,o,new B.o(o,o,u,v,o,o,A.n),o,w,o,A.hJ,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.dSO(p),o,o,o,o,o,o,!1,A.a4)
v=m?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.kk[s]
t.push(new B.cg(A.A,o,o,p.c_e(r,m?58:54),o))}k=B.a([k,A.am,w,A.ae,B.E(B.kN(0.92,t,v,8,12,A5.vV,o,!1),1)],u)
if(n!==D.a8b){n=A.c.j(0.16)
w=B.m(28)
u=B.a([],u)
for(v=B.d0(F.kk,0,B.dA(4,"count",x.S),x.gD),t=v.$ti,v=new B.bR(v,v.gL(0),t.k("bR<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.avE(q==null?t.a(q):q,50,!1))}k.push(B.p(o,B.B(u,A.m,o,A.qu,A.i,0,o,o),A.f,o,o,new B.o(n,o,o,w,o,o,A.n),o,o,o,D.byf,G.ala,o,o,o))}return B.p(o,B.x(k,A.m,o,A.e,A.i,0,A.p),A.f,o,o,new B.o(o,o,o,o,o,new B.a9(A.ay,A.aE,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bCh(d,e){var w=null
return B.p(w,B.x(B.a([this.b7e(d),B.E(B.b4(w,w,w,new C.aeR(e,this.gSa(),w),A.fF),1),B.aB(w,B.p(w,B.at(B.d(F.kk[e].a,w,w,w,w,w,w,A.JR,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dSJ(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.m,w,A.e,A.i,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bIS(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=B.ar(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.m(r?26:14)
u=B.a([new B.ac(0,A.G,d.d.j(0.25),A.I,36)],x.V)
return new B.fD(1.5384615384615383,B.p(t,B.ca(this.ga9L(),new C.dSM(this,r,d),t),A.f,t,t,new B.o(t,t,t,v,u,new B.a9(A.ay,A.aE,A.x,w,t,t),A.n),t,t,t,D.bDa,new B.Q(8,8,8,s),t,t,t),t)}}
C.bw5.prototype={
a3(d,e){var w,v,u,t,s,r,q,p=e.a,o=e.b,n=0+p,m=0+o
$.S()
w=B.I()
v=this.c
u=B.ar(v,A.w,0.6)
u.toString
t=B.ar(v,A.k9,0.4)
t.toString
w.sam(new B.a9(A.ay,A.aE,A.x,B.a([u,A.du,t],x.O),null,null).aB(0,new B.a3(0,0,n,m)))
d.aP(new B.a3(0,0,n,m),w)
for(n=this.b,m=n*0.4,n*=0.3,w=d.a,s=0;s<5;++s){u=Math.sin(m+s)
t=Math.sin(n+s*1.7)
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=v.j(0.1).gp(0)
r.z=D.dyU
q=r.G()
w.drawCircle(p*(0.15+0.2*s+0.05*u),o*(0.3+0.3*t),o*(0.2+0.04*s),q)
q.delete()}},
aw(d){return!0}}
C.aeR.prototype={
a3(d,e){return E.RT(d,e,this.b,this.c)},
aw(d){return!0}}
C.aMb.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.buT.prototype={}
C.a8B.prototype={
B(d){var w=null
return B.c7(B.eH(w,w,w,!0,!0,D.agq,w,1,!0,w,0,!1,w,!1,w,w,B.aH(w,w,w,w,D.apB,w,w,w,new C.cjJ(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fSE,w,w,w,1,w,!0),D.agq,B.cr(B.a([D.ekL,B.cz(new C.cjK())],x.p),w,D.bzi,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.WJ.prototype={
T(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aFn(w,new B.as(A.as,$.aw()),$,A.bF,0,B.a([],x.X),null,null)}}
C.aFn.prototype={
Z(){this.a2()
this.pa()},
b5b(d){var w=this.d.length
return A.o.F(A.k.bh(A.k.F(A.k.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
q7(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b5b(v.f)
if(w!==v.x){v.x=w
C.q1("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new C.eMZ(v))
C.Ja("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
ca5(){if(this.d.length<2)return
this.m(new C.eMV(this))},
b_t(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new C.eMU(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gca4(),p=s.d,o=B.E(B.aB(r,B.b4(r,r,r,new C.bwh(p,s.f,r),A.fF),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.x(B.a([o,new B.a7(r,40,B.at(B.d(n,r,r,r,r,r,r,D.frt,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.i,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.azg[A.o.F(v,8)].j(0.9)
t=new B.aQ(20,20)
o.push(B.aB(r,B.p(r,new B.y(p[v],r,D.fqI,r,r,r,r,r,r,r,r,r),A.f,r,r,new B.o(u,r,r,new B.bj(t,t,t,t),r,r,A.n),r,r,r,A.fB,A.hg,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.eMX(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a4))}p=A.c.j(0.07)
return C.oA(A.aU,A.fu,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.x(B.a([new C.hj(o,r,r),B.B(B.a([B.E(B.aM(r,A.Y,!1,r,!0,A.t,r,B.aN(),s.e,r,r,r,r,r,2,B.br(r,new B.b5(4,B.m(14),A.a0),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kr,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.aj,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.eMY(s),r,!1,r,r,!1,r,!0,r,A.a9,r,r,r,r,r,r,r,r,r,r,r,A.df,!0,A.a3,r,A.ao,r,r,r,r),1),A.ac,new C.j7(A.hL,"Add",s.gca2(s),A.c,r),A.bo,new C.j7(A.p7,"Spin",q,A.bj,r)],w),A.m,r,A.e,A.i,0,r,r)],w),A.m,r,A.e,A.Q,0,A.p))}}
C.bwh.prototype={
a3(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=a2.a,g=h/2,f=a2.b,e=f/2+10,d=new B.t(g,e),a0=Math.min(h,f)/2-24
f=a0+8
h=$.S()
w=B.I()
w.r=D.beI.gp(0)
a1.ad(d,f,w)
w=B.I()
w.b=A.aa
w.c=3
w.r=A.aU.gp(0)
a1.ad(d,f,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(f=a1.a,t=this.c,s=u*57.29577951308232,r=u/2,q=0;q<v;++q){p=t+q*u
o=B.bX(d,a0)
n=new B.ap(A.R,A.N,A.U,A.V,A.S)
n.r=D.azg[A.o.F(q,8)].gp(0)
m=n.G()
n=p*57.29577951308232
f.drawArc.apply(f,[B.bF(o),n,s,!0,m])
m.delete()
o=B.bX(d,a0)
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.b=A.aa
l.c=2
l.r=A.c.j(0.6).gp(0)
m=l.G()
f.drawArc.apply(f,[B.bF(o),n,s,!0,m])
m.delete()
J.bm(f.save())
f.translate(g,e)
f.rotate((p+r)*180/3.141592653589793,0,0)
o=w[q]
if(o.length>12)o=A.a.aq(o,0,11)+"\u2026"
k=new B.jR(new B.eu(o,i,i,A.cQ,i,i,i,i,i,i,D.fe7),A.a3,A.bZ,new B.jA(1),i,i,i,i,A.bW,i)
k.el()
o=k.b
n=o.c
o=o.a.c
k.a3(a1,new B.t(a0-n-16,-o.gbb(o)/2))
f.restore()}f=B.I()
f.r=D.ag2.gp(0)
a1.ad(d,20,f)
f=B.I()
f.b=A.aa
f.c=3
f.r=A.aU.gp(0)
a1.ad(d,20,f)
j=new B.aF(h.r,A.ag,i,i,B.a([],x.v))
e-=a0
j.D(new B.aX(g,e+26))
e-=10
j.D(new B.aq(g-14,e))
j.D(new B.aq(g+14,e))
j.D(new B.bs())
e=B.I()
e.r=A.c.gp(0)
a1.aG(j,e)
e=B.I()
e.b=A.aa
e.c=2
e.r=A.aT.gp(0)
a1.aG(j,e)},
aw(d){return!0}}
C.Vy.prototype={
T(){return new C.bkv($,A.bF,0,B.a([],x.X),null,null)}}
C.bkv.prototype={
Z(){this.a2()
this.pa()},
q7(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.Ja("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.a5B(900,new C.dZd())}w.m(new C.dZe())},
b_v(d){return this.m(new C.dZ8(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.aU(A.o.u(A.k.ao(m,60)),2,"0")
v=A.a.aU(A.o.u(A.o.F(A.k.dg(m),60)),2,"0")
m=B.b4(n,n,n,new C.br2(l,A.cs,n),A.aQG)
u=B.d(w+":"+v,n,n,n,n,n,n,D.fiH,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.at(new B.a7(280,280,new B.an(A.A,n,A.ab,A.t,B.a([m,B.x(B.a([u,B.d(t,n,n,n,n,n,n,D.fhH,n,n,n),A.au,B.d("Sessions done: "+o.r,n,n,n,n,n,n,A.va,n,n,n)],s),A.m,n,A.e,A.Q,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.dgI[r]
u.push(new C.eX(""+q+" min",o.d===q,new C.dZa(o,q),n,A.cs,n))}m=o.f
p=m?A1.yP:A.i1
m=m?"Pause":"Start"
return C.oA(A.cs,A.fu,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.x(B.a([new C.hj(u,n,n),new C.hj(B.a([new C.j7(p,m,new C.dZb(o),A.bj,n),new C.j7(A.oi,"Reset",new C.dZc(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.Q,0,A.p))}}
C.br2.prototype={
a3(d,e){var w,v,u,t,s=e.ei(A.I),r=e.a/2-14
$.S()
w=B.I()
w.b=A.aa
w.c=16
w.r=A.c.j(0.08).gp(0)
d.ad(s,r,w)
w=B.bX(s,r)
v=B.I()
v.b=A.aa
v.c=16
v.d=A.bE
u=this.c
t=B.ar(u,A.c,0.4)
t.toString
v.sam(new B.fY(A.A,-1.5707963267948966,4.71238898038469,A.x,B.a([u,t,u],x.O),null,null).aB(0,B.bX(s,r)))
d.e3(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aw(d){return d.b!==this.b}}
C.UL.prototype={
T(){return new C.bk8($,A.bF,0,B.a([],x.X),null,null)}}
C.bk8.prototype={
Z(){this.a2()
this.pa()},
q7(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.S0.h(0,p.d)
w.toString
v=A.d.fb(w,new C.dKz())
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
C.q1("flute",D.c5v[t]+5,1400,0.35)}p.m(new C.dKA())},
gca8(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.Ku("Press Start",0.5)
w=D.S0.h(0,this.d)
w.toString
v=A.d.fb(w,new C.dKu())
u=A.k.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.Ku("Breathe in",0.5+0.5*A.dx.av(0,p))
case 1:return new B.Ku("Hold",1)
case 2:return new B.Ku("Breathe out",1-0.5*A.dx.av(0,p))
default:return new B.Ku("Hold",0.5)}}}return new B.Ku("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gca8(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.iQ.j(0.12+(3-u)*0.05)
n.push(B.p(q,q,A.f,q,q,new B.o(s,q,q,q,u===0?B.a([new B.ac(0,A.G,A.iQ.j(0.35),A.I,40)],v):q,q,A.a6),q,t,q,q,q,q,q,t))}n.push(B.d(p.a,q,q,q,q,q,q,A.pz,q,q,q))
n.push(B.ao(0,B.d("Breaths: "+r.w,q,q,q,q,q,q,A.kr,q,q,q),q,q,q,q,q,q))
n=B.at(new B.a7(300,340,new B.an(A.A,q,A.ab,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aW(D.S0.gev(D.S0));w.C();){v=w.gR(w)
o.push(new C.eX(v,r.d===v,new C.dKx(r,v),q,A.iQ,q))}w=r.e
v=w?A.H8:A.i1
w=w?"Stop":"Start"
o.push(new C.j7(v,w,new C.dKy(r),A.bj,q))
return C.oA(A.iQ,A.fu,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new C.hj(o,q,q))}}
C.aIR.prototype={}
C.Vp.prototype={
T(){return new C.bko(new B.cB(null,x.z),B.a([],x.au),A.av,A.c)}}
C.bko.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aH(s,s,s,s,D.rC,s,s,s,new C.dWf(t,d),s,s,s,s,"Share",s)],r),p=B.bx(B.m(18),new B.ex(B.aB(s,B.b4(s,s,s,new C.bml(t.e,t.x,s),A.fF),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dWg(t),new C.dWh(t),s,s,s,s,s,s,s,s,s,new C.dWi(t),s,s,s,s,!1,A.a4),t.d),A.ap),o=B.a([],r)
for(w=0;w<9;++w){v=D.cXz[w]
u=!t.w&&t.f.A(0,v)
o.push(new C.JQ(v,u,new C.dWj(t,v),!1,s))}u=t.r
return C.oA(A.bA,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.D(A.bT,p,s),"DRAW PAD",B.x(B.a([new C.hj(o,s,s),C.lU(A.bA,""+A.k.V(u),"Brush",30,2,new C.dWk(t),u),new C.hj(B.a([new C.eX("Eraser",t.w,new C.dWl(t),A.GH,A.bA,s),new C.j7(A.rz,"Undo",new C.dWm(t),A.c,s),new C.j7(A.e9,"Clear",new C.dWn(t),A.c,s),new C.j7(A.Ow,"Paper",new C.dWo(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.Q,0,A.p))}}
C.bml.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
$.S()
w=B.I()
w.r=this.c.gp(0)
d.aP(new B.a3(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=d.a,t=x.v,s=0;s<w.length;w.length===v||(0,B.M)(w),++s){r=w[s]
q=$.S()
p=new B.ap(A.R,A.N,A.U,A.V,A.S)
o=r.a
p.r=o.gp(o)
n=r.b
p.c=n
p.d=A.bE
p.e=A.dT
p.b=A.aa
m=r.c
if(m.length===1){q=A.d.gI(m)
m=new B.ap(A.R,A.N,A.U,A.V,A.S)
m.r=o.gp(o)
l=m.G()
u.drawCircle(q.a,q.b,n/2,l)
l.delete()}else{o=B.a([],t)
k=new B.aF(q.r,A.ag,null,null,o)
o.push(new B.aX(A.d.gI(m).a,A.d.gI(m).b))
for(j=1;j<m.length-1;){q=m[j]
n=q.a;++j
i=m[j]
q=q.b
i=new B.c4(n,q,(n+i.a)/2,(q+i.b)/2)
o.push(i)
q=k.f
if(q!=null)i.by(q)
q=k.e
if(q!=null)q.a.delete()
k.e=null}q=new B.aq(A.d.gak(m).a,A.d.gak(m).b)
o.push(q)
o=k.f
if(o!=null)q.by(o)
q=k.e
if(q!=null)q.a.delete()
k.e=null
l=p.G()
q=k.e
u.drawPath((q==null?k.e=new B.cl(k.gbw().a.snapshot()):q).a,l)
l.delete()}}},
aw(d){return!0}}
C.W7.prototype={
T(){var w=x.S
return new C.aEJ(B.aY(w),B.aY(w))}}
C.aEJ.prototype={
Z(){this.a2()
this.asY()},
asY(){var w,v,u=this,t=x.N,s=B.bq(D.dlR,!0,t)
A.d.D0(s)
w=x.S
v=B.T(s).c
t=B.C(B.d0(s,0,B.dA(u.d,"count",w),v),t)
A.d.v(t,B.d0(s,0,B.dA(u.d,"count",w),v))
A.d.D0(t)
u.e=t
u.f.a9(0)
u.r.a9(0)
u.w=0
u.x=!1},
ca3(d){var w,v,u,t,s=this
if(s.x||s.f.t(0,d)||s.r.t(0,d))return
C.q1("bell",12+A.o.F(d,9),150,0.35)
s.m(new C.ekH(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gI(0)
u=w.gak(0)
w=s.e
w===$&&B.c()
t=x.H
if(w[v]===w[u])B.bP(A.mC,new C.ekI(s,v,u),t)
else{s.x=!0
B.bP(A8.FX,new C.ekJ(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.d("Moves: "+r.w,q,q,q,q,q,q,A.UK,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.ao(p,2)+" / "+o
o=x.p
p=B.x(B.a([new B.D(A.ye,B.B(B.a([u,B.d(p,q,q,q,q,q,q,B.l(q,q,w?A.aU:A.ad,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.iG,A.i,0,q,q),q),B.E(B.iy(!0,q,q,A.y,new B.hR(v,8,8,1,q),new C.ekN(r),r.e.length,A.bf,q,A.ah,!1),1)],o),A.m,q,A.e,A.i,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.cZ3[t]
o.push(new C.eX(s.b,r.d===s.a,new C.ekO(r,s),q,A.aQ,q))}o.push(new C.j7(D.bN2,"New game",new C.ekP(r),A.bj,q))
return C.oA(A.aQ,A.fu,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new C.hj(o,q,q))}}
C.Wh.prototype={
T(){return new C.aF1(B.a([],x.t))}}
C.aF1.prototype={
ca7(d){A.d.a9(this.d)
this.w=!0
this.b_u()},
b_u(){this.d.push(A.cZ.au(4))
this.e=0
this.a_n()},
a_n(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_n=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.euC(t))
s=x.H
w=3
return B.b(B.bP(A.ly,null,s),$async$a_n)
case 3:r=t.d,q=B.bq(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aTB(n)
w=7
return B.b(B.bP(new B.b9(1000*Math.max(280,600-r.length*18)),null,s),$async$a_n)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new C.euD(t))
case 1:return B.h(u,v)}})
return B.i($async$a_n,v)},
aTB(d){this.m(new C.euA(this,d))
C.q1("marimba",D.c5u[d]+5,450,0.55)
B.bP(A.FV,new C.euB(this),x.H)},
ca9(d){var w,v,u=this
if(!u.w||u.r)return
u.aTB(d)
w=u.d
v=u.e
if(w[v]!==d){E.dY(90,"",600,0,0.5,"saw")
u.m(new C.euE(u))
return}++v
u.e=v
if(v===w.length){u.m(new C.euF(u))
B.bP(A.hr,new C.euG(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.d("Best: "+q.x,p,p,p,p,p,p,M.aTb,p,p,p),n=B.d(q.y,p,p,p,p,p,p,D.frQ,A.L,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.ay8[v]
u=u.j(q.f===v?1:0.35)
t=new B.aQ(28,28)
s=q.f===v?B.a([new B.ac(0,A.G,D.ay8[v].j(0.8),A.I,30)],w):p
r=new B.ay(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.aB(p,B.dd(p,p,p,p,A.b6,new B.o(u,p,new B.bK(r,r,r,r),new B.bj(t,t,t,t),s,p,A.n),A.jw,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.euH(q,v),p,p,p,p,p,p,!1,A.a4))}o=B.at(new B.D(A.a9,B.x(B.a([o,A.am,n,A.d4,new B.fD(1,B.kN(1,l,2,12,12,p,A.dR,!1),p)],m),A.m,p,A.b8,A.i,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return C.oA(A.bG,A.fu,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new C.hj(B.a([new C.j7(A.i1,n,q.gca6(q),A.bj,p)],m),p,p))}}
C.WB.prototype={
T(){return new C.blz(new B.as(A.as,$.aw()))}}
C.blz.prototype={
awv(d){return B.oP(A.k.ac(d,2),B.af("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eIt(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.cY(B.aL(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eIC()
l=B.aM(m,A.Y,!1,m,!0,A.t,m,B.aN(),l,m,m,m,m,m,2,B.br(m,m,m,m,m,m,m,m,!0,new B.b5(4,B.m(16),A7.xl),m,m,m,m,m,m,m,m,m,m,m,new B.b5(4,B.m(16),D.b1a),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.lN,"Bill amount",!0,!0,!1,m,m,m,m,D.fph,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,A.e1,m,m,m,1,m,m,!1,"\u2022",m,new C.eIy(n),m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.aS8,!0,A.a3,m,A.ao,m,m,m,m)
k=A.bj.j(0.1)
s=B.m(20)
r=B.J(A.bj.j(0.35),A.r,1)
q=x.p
s=B.cr(B.a([l,A.bv,B.p(m,B.x(B.a([t.$2("Tip ("+A.k.V(n.e)+"%)","$"+n.awv(w)),t.$2("Total","$"+n.awv(v)),U.MV,t.$3$big("Each of "+n.f+" pays","$"+n.awv(u),!0)],q),A.m,m,A.e,A.i,0,A.p),A.f,m,m,new B.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bQ,m,m,m)],q),m,A.fk,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cJA[p]
r.push(new C.eX(""+o+"%",A.k.V(n.e)===o,new C.eIz(n,o),m,A.bj,m))}l=n.f
return C.oA(A.bj,A.fu,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.x(B.a([new C.hj(r,"TIP",m),C.lU(A.aQ,""+l,"People",20,1,new C.eIA(n),l),new C.hj(B.a([new C.eX("Round up",n.r,new C.eIB(n),m,A.aU,m)],q),m,m)],q),A.m,m,A.e,A.Q,0,A.p))}}
C.W6.prototype={
T(){var w=B.a([3,5],x.t)
return new C.bl4(w,A.cZ,$,A.bF,0,B.a([],x.X),null,null)}}
C.bl4.prototype={
Z(){this.a2()
this.pa()},
q7(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.k.bh(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.au(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.au(6)+1)
u.f=t
C.a8A("snare",0.5)}u.m(new C.ejM())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.hh()
u.w=t
u.x=t?0:3.141592653589793
C.q1("bell",24,400,0.5)}u.m(new C.ejN())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.be7(v,o.r>0,n))}u=B.aB(n,B.at(B.bW(A.fH,m,A.bq,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ejF(o),n,n,n,n,n,n,!1,A.a4)}else if(m==="coin"){t=A.k.E(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.J(A.d1,A.r,6)
s=B.a([new B.ac(0,A.G,A.aU.j(0.4),A.I,30)],x.V)
u=B.aB(n,B.at(B.ed(A.A,B.p(A.A,B.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fos,n,n,n),A.f,n,n,new B.o(n,n,v,n,s,D.erN,A.a6),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ejG(o),n,n,n,n,n,n,!1,A.a4)}else{m=o.as
u=B.aB(n,B.at(B.x(B.a([B.d(m===0?"?":""+m,n,n,n,n,n,n,D.fdB,n,n,n),B.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kr,n,n,n)],x.p),A.m,n,A.e,A.Q,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.ejH(o),n,n,n,n,n,n,!1,A.a4)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.de3[r]
v.push(new C.eX(q.b,o.d===q.a,new C.ejI(o,q),q.c,A.bw,n))}v=B.a([new C.hj(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(C.lU(A.bw,""+s,"Dice",4,1,new C.ejJ(o),s))}if(o.d==="num"){s=o.z
s=C.lU(A.bw,""+s,"From",100,1,new C.ejK(o),s)
p=o.Q
A.d.v(v,B.a([s,C.lU(A.bw,""+p,"To",1000,2,new C.ejL(o),p)],m))}return C.oA(A.bw,A.fu,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.x(v,A.m,n,A.e,A.Q,0,A.p))}}
C.be7.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cZ.ah()-0.5)*0.6
else w=0
v=B.m(22)
u=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cx,14)],x.V)
t=B.a([],x.p)
for(s=D.dxI.h(0,A.o.E(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bM(s[q],p,p,B.p(p,p,A.f,p,p,N.ad0,p,18,p,p,p,p,p,18),p))
return B.eL(A.A,w,B.p(p,new B.an(A.a_,p,A.ab,A.t,t,p),A.f,p,p,new B.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bB,p,p,100),p)}}
C.aM_.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.bxZ.prototype={
q(){var w,v,u
for(w=this.iL$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iK$
w===$&&B.c()
w.q()
this.bwu()}}
C.aMg.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.by2.prototype={
q(){var w,v,u
for(w=this.iL$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iK$
w===$&&B.c()
w.q()
this.bwM()}}
C.aMI.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.bya.prototype={
q(){var w,v,u
for(w=this.iL$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iK$
w===$&&B.c()
w.q()
this.bxe()}}
C.aN6.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.byi.prototype={
q(){var w,v,u
for(w=this.iL$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iK$
w===$&&B.c()
w.q()
this.bxD()}}
C.b7z.prototype={
B(d){var w,v=this,u=null,t=v.c,s=F.aGb.h(0,t)
$.ask=s==null?"music":s
s=v.d
w=x.p
t=B.a([B.aH(u,u,u,u,S.nv,u,u,u,new C.cxl(d),u,u,u,u,u,u),B.E(B.d(t,u,1,A.a1,u,u,u,B.l(u,u,s,u,u,u,u,u,u,u,u,14.5,u,u,A.u,u,u,!0,u,1.6,u,u,u,u,u,u),u,u,u),1)],w)
A.d.v(t,v.w)
t.push(B.aH(u,u,u,u,B.X(A.Oz,s,u,u,u,22),u,u,u,new C.cxm(v,d),u,u,u,u,"How to play",u))
w=B.a([new B.D(D.bCp,B.B(t,A.m,u,A.e,A.i,0,u,u),u),B.E(v.f,1)],w)
w.push(B.p(u,v.r,A.f,u,u,new B.o(F.Bd,u,new B.bK(new B.ay(A.c.j(0.08),1,A.r,-1),A.a0,A.a0,A.a0),u,u,u,A.n),u,u,u,u,A.FZ,u,u,1/0))
return B.c7(u,A.c0,B.bl(!0,B.x(w,A.m,u,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0),u,!1,!1,u,u)}}
C.eX.prototype={
B(d){var w,v,u,t=this,s=null,r=B.m(999),q=t.d,p=q?t.r.j(0.22):A.c.j(0.06),o=q?t.r:A.c.j(0.12)
o=B.J(o,A.r,q?1.6:1)
w=x.p
v=B.a([],w)
u=t.f
if(u!=null)A.d.v(v,B.a([B.X(u,q?t.r:A.aR,s,s,s,16),A.em],w))
v.push(B.d(t.c,s,s,s,s,s,s,B.l(s,s,q?A.c:A.ad,s,s,s,s,s,s,s,s,12,s,s,A.H,s,s,!0,s,s,s,s,s,s,s,s),s,s,s))
return new B.D(F.tY,B.aB(s,B.dd(s,B.B(v,A.m,s,A.e,A.Q,0,s,s),s,s,A.b6,new B.o(p,s,o,r,s,s,A.n),A.eN,s,s,s,A.hg,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.cxh(t),s,s,s,s,s,s,!1,A.a4),s)}}
C.hj.prototype={
B(d){var w=null,v=B.a([],x.p),u=this.d
if(u!=null)v.push(new B.a7(54,w,B.d(u,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,10.5,w,w,A.u,w,w,!0,w,0.8,w,w,w,w,w,w),w,w,w),w))
v.push(B.E(B.ce(B.B(this.c,A.m,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,A.aM),1))
return new B.D(A.ct,B.B(v,A.m,w,A.e,A.i,0,w,w),w)}}
C.b7A.prototype={
B(d){var w,v,u=this,t=null,s=B.d(u.c,t,t,t,t,t,t,B.l(t,t,A.c.j(0.7),t,t,t,t,t,t,t,t,11.5,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),r=u.w
r=B.avS(d).cLD(r,A.bz,r.j(0.2),r,3.5)
w=u.f
v=u.r
r=B.E(B.aan(B.kO(t,t,t,v,w,u.e,A.k.E(u.d,w,v)),r),1)
return new B.a7(t,34,B.B(B.a([new B.a7(78,t,s,t),r,new B.a7(38,t,B.d(u.x,t,t,t,t,t,t,A.JR,A.dV,t,t),t)],x.p),A.m,t,A.e,A.i,0,t,t),t)}}
C.j7.prototype={
B(d){var w=this,v=null,u=w.f,t=u.j(0.12)
return new B.D(F.tY,B.aG(!1,A.a2,!0,B.m(12),B.aO(!1,B.m(12),!0,new B.D(Ad.ajw,B.B(B.a([B.X(w.c,u,v,v,v,17),A.em,B.d(w.d,v,v,v,v,v,v,B.l(v,v,u,v,v,v,v,v,v,v,v,12,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,new C.cxg(w),v,v,v,v,v,v,v),A.f,t,0,v,v,v,v,v,A.ai),v)}}
C.JQ.prototype={
B(d){var w,v=this,u=null,t=v.d,s=t?34:28,r=t?34:28,q=v.f,p=q?u:v.c
q=q?D.fbW:u
w=t?A.c:A.aZ
w=B.J(w,A.r,t?2.5:1)
return B.aB(u,B.dd(u,u,u,u,A.b6,new B.o(p,u,w,u,t?B.a([new B.ac(0,A.G,v.c.j(0.6),A.I,10)],x.V):u,q,A.a6),A.hq,u,r,D.ajh,u,u,u,s),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cxn(v),u,u,u,u,u,u,!1,A.a4)}}
C.qO.prototype={
a5B(d,e){var w=B.dm()
w.seR(B.cK(B.dE(0,0,0,d,0,0),new C.cxi(this,w,e)))
this.iL$.push(w.bk())},
pa(){var w=this,v=w.qO(new C.cxk(w))
v.h2(0)
w.iK$!==$&&B.aP()
w.iK$=v}}
C.feq.prototype={}
C.b8s.prototype={
a3(d,e){var w=this
C.huL(d,e,w.b,w.f,w.r,w.w,w.d,w.e,w.c)},
aw(d){var w=this
return d.b!==w.b||d.c!==w.c||d.d!==w.d||d.e!==w.e||d.f!==w.f||!d.r.A(0,w.r)||d.w!==w.w}}
C.WC.prototype={
T(){return new C.asj(new B.as(new B.bb("NGMY",A.b3,A.aO),$.aw()),null,null)}}
C.asj.prototype={
gJj(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,B.dE(0,0,0,3200,0,0),null,1,null,v)
w.cM(0)
v.d!==$&&B.bG()
v.d=w
u=w}return u},
gtm(){var w=D.RB[this.w]
return w},
Z(){this.a2()
var w=this.gJj()
w.df()
w.dS$.M(0,this.gbZD())},
bZE(){var w,v,u,t,s,r,q,p=this,o=p.gJj().x
o===$&&B.c()
w=p.e.a.a
v=Math.max(1,(w.length===0?A.mi:new B.mk(w)).gL(0))
if(p.Q&&o>=p.as)for(w=v-1,u=v<=1,t=0;t<v;++t){s=p.f
r=s==="type"
if(r)q=t/v/1.8
else q=u?0:t/w*0.45
if(p.as<q&&o>=q)if(r)E.dY(1500,"",35,0,0.18,"square")
else if(s==="glitch")E.dY(400+t*60,"",70,0,0.2,"square")
else{s=s==="neon"?"synth":"pluck"
C.q1(s,D.cVu[A.o.F(t,8)]+12,450,0.35)}}p.as=o},
q(){this.gJj().q()
var w=this.e
w.S$=$.aw()
w.P$=0
this.btZ()},
boR(d){var w
this.m(new C.cjC(this,d))
w=this.gJj()
w.iN(0,0)
w.cM(0)},
Tq(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Tq=B.e(function(a1,a2){if(a1===1){s.push(a2)
w=t}for(;;)switch(w){case 0:if(r.at>=0){w=1
break}r.m(new C.cjx(r))
t=4
n={}
m=r.e
l=m.a.a
k=r.f
j=r.r
i=r.y
h=r.gtm()
g=r.x
w=7
return B.b(C.aQO(D.a4S[r.z].b,i,h,g,k,new C.cjy(r),j,l),$async$Tq)
case 7:q=a2
if(J.ad(q)===0){n=B.bd("empty")
throw B.W(n)}m=A.a.i(m.a.a)
if(m.length===0)m="title"
l=B.af("[^A-Za-z0-9_-]+",!0,!1,!1,!1)
p=B.aL(m,l,"_")
n.a=!1
t=9
w=12
return B.b(B.avG(B.a([B.cCa(q,"image/gif",B.w(p)+".gif")],x.r),null,"Made in NGMY Core Protocol"),$async$Tq)
case 12:o=a2
n.a=o.b!==A.TV
t=4
w=11
break
case 9:t=8
e=s.pop()
w=11
break
case 8:w=4
break
case 11:w=!n.a?13:14
break
case 13:a0=n
w=15
return B.b(C.fKs(q,B.w(p)+".gif","image/gif"),$async$Tq)
case 15:a0.a=a2
case 14:if(r.c!=null)r.m(new C.cjz(n,r))
t=2
w=6
break
case 4:t=3
d=s.pop()
if(r.c!=null)r.m(new C.cjA(r))
w=6
break
case 3:w=2
break
case 6:if(r.c!=null)r.m(new C.cjB(r))
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Tq,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.at(new B.fD(D.a4S[k.z].b,B.bx(B.m(22),new B.ex(B.ca(k.gJj(),new C.cjm(k),j),j),A.ap),j),j,j,j),h=A.c.j(0.06)
h=B.aM(j,A.Y,!1,j,!0,A.t,j,B.aN(),k.e,j,j,j,j,j,2,B.br(j,new B.b5(4,B.m(14),A.a0),j,j,j,j,"",j,!0,j,j,j,j,j,j,h,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,I.E5,"Type your title",j,j,j,j,j,!0,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.aj,j,j,j,j,j,j,j,28,j,1,j,j,!1,"\u2022",j,new C.cjn(k),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,A.fS,!0,A.a3,j,A.ao,j,j,j,j)
w=x.p
v=B.a([],w)
for(u=0;u<24;++u){t=D.do1[u]
v.push(new C.eX(t.b,k.f===t.a,new C.cjo(k,t),j,A.bG,j))}s=B.a([],w)
for(u=0;u<8;++u){t=D.d1p[u]
s.push(new C.eX(t.b,k.r===t.a,new C.cjp(k,t),j,A.c5,j))}r=B.a([],w)
for(q=0;q<20;++q){p=D.dsq[q]
r.push(new C.eX(p.a+" "+p.b,k.y===q,new C.cjq(k,q),j,A.aQ,j))}p=B.a([],w)
for(q=0;q<8;++q)p.push(new C.JQ(D.RB[q],k.w===q,new C.cjr(k,q),!1,j))
o=B.a([],w)
for(q=0;q<3;++q)o.push(new C.eX(D.a4S[q].a,k.z===q,new C.cjs(k,q),j,A.bG,j))
o.push(A.bo)
n=k.Q
m=n?"Sound on":"Sound off"
l=n?A.uu:Q.Ct
o.push(new C.eX(m,n,new C.cjt(k),l,A.bG,j))
o.push(A.bo)
o.push(new C.j7(A.oj,"Replay",new C.cju(k),A.c,j))
l=k.x
l=B.a([h,A.O,new C.hj(v,"MOVE",j),new C.hj(s,"LOOK",j),new C.hj(r,"SCENE",j),new C.hj(p,"COLOUR",j),new C.hj(o,"SHAPE",j),C.lU(A.bG,A.o.u(A.k.V(l)),"Size",96,28,new C.cjv(k),l),A.au],w)
h=k.at
if(h>=0)l.push(new B.D(A.kF,B.x(B.a([B.bx(B.m(6),B.ll(A.bz,j,A.bG,8,j,h,j),A.ap),A.au,B.d("Making your animation\u2026 "+A.k.V(h*100)+"%",j,j,j,j,j,j,A.oH,j,j,j)],w),A.m,j,A.e,A.i,0,A.p),j))
else l.push(new B.a7(1/0,j,B.dl(A.om,D.fIR,k.gcNj(),B.bo(A.bG,j,j,j,A.w,j,A.m2,j,j,j,j,j)),j))
h=k.ax
if(h.length!==0)l.push(new B.D(A.hY,B.d(h,j,j,j,j,j,j,D.feb,A.L,j,j),j))
return C.oA(A.bG,A.fu,"Type a word or a name. Pick how the letters move (24 ways), how they look (8 designs), and a moving background scene (20 designs). The title plays on a loop. Download saves the WHOLE animation as a moving GIF to post or send.",new B.D(A.bB,i,j),"TITLE ANIMATOR",B.x(l,A.m,j,A.e,A.Q,0,A.p))},
gY(d){return this.x}}
C.aFa.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.abm.prototype={
bzQ(d,e,a0,a1,a2,a3,a4,a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=-999
for(w=g.y,v=w.length,u=f,t=u,s=999,r=999,q=0;p=w.length,q<p;w.length===v||(0,B.M)(w),++q)for(p=A.d.gaf(w[q]);p.C();){o=p.gR(0)
n=J.a5(o)
if(n.h(o,0)<s)s=n.h(o,0)
if(n.h(o,0)>t)t=n.h(o,0)
if(n.h(o,1)<r)r=n.h(o,1)
if(n.h(o,1)>u)u=n.h(o,1)}g.z!==$&&B.aP()
g.z=s
g.Q!==$&&B.aP()
g.Q=t
g.as!==$&&B.aP()
g.as=r
g.at!==$&&B.aP()
g.at=u
for(m=0,q=0;q<w.length;w.length===p||(0,B.M)(w),++q){for(v=A.d.gaf(w[q]),l=f,k=l,j=999,i=999;v.C();){o=v.gR(0)
n=J.a5(o)
if(n.h(o,0)<j)j=n.h(o,0)
if(n.h(o,0)>k)k=n.h(o,0)
if(n.h(o,1)<i)i=n.h(o,1)
if(n.h(o,1)>l)l=n.h(o,1)}h=Math.max(k-j,l-i)
if(h>m)m=h}g.ax!==$&&B.aP()
g.ax=m
w=g.bD4()
g.ay!==$&&B.aP()
g.ay=w},
bD4(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j
for(w=this.y,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,B.M)(w),++t){s=w[t]
for(r=0,q=0;q<s.length-1;q=p){p=q+1
o=(J.r(s[q],1)+J.r(s[p],1))/2*3.141592653589793/180
n=J.r(s[q],0)
m=Math.cos(o)
l=J.r(s[q],1)
k=J.r(s[p],0)
j=Math.cos(o)
r+=n*m*J.r(s[p],1)-k*j*l}u+=Math.abs(r)/2}return u*111.32*111.32},
FR(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=l.z
k===$&&B.c()
w=!0
if(!(e<k)){k=l.Q
k===$&&B.c()
if(!(e>k)){k=l.as
k===$&&B.c()
if(!(f<k)){k=l.at
k===$&&B.c()
k=f>k}else k=w}else k=w}else k=w
if(k)return!1
for(k=l.y,w=k.length,v=0;v<k.length;k.length===w||(0,B.M)(k),++v){u=k[v]
for(t=u.length-1,s=!1,r=0;r<u.length;q=r+1,t=r,r=q){p=J.r(u[r],0)
o=J.r(u[r],1)
n=J.r(u[t],0)
m=J.r(u[t],1)
if(o>f!==m>f&&e<(n-p)*(f-o)/(m-o)+p)s=!s}if(s)return!0}return!1}}
C.abn.prototype={
cHu(d,e){var w,v,u,t,s,r,q,p
for(w=d;w>180;)w-=360
while(w<-180)w+=360
for(v=this.a,u=v.length,t=null,s=0;s<v.length;v.length===u||(0,B.M)(v),++s){r=v[s]
if(r.FR(0,w,e)){if(t!=null){q=r.ax
q===$&&B.c()
p=t.ax
p===$&&B.c()
p=q<p
q=p}else q=!0
if(q)t=r}}return t}}
C.vf.prototype={}
C.Pv.prototype={}
C.yg.prototype={}
C.Pu.prototype={
fu(d,e,f){var w,v,u,t=this
if(!f)return
if((t.a+=e)<2.8)return
t.a=0
w=t.b
v=D.c5f[w.au(7)]
w=w.hh()?0:12
u=A.o.F(t.c++,3)===0?"flute":"bell"
C.q1(u,v+w-12,2200,0.1)}}
C.VE.prototype={
T(){var w=$.aw()
return new C.aE6(new B.cB(null,x.z),new B.as(A.as,w),new C.Pu(A.cZ),D.dg9,A.ax,D.a4B,$,A.bF,0,B.a([],x.X),null,null)}}
C.aE6.prototype={
Z(){var w=this
w.a2()
w.pa()
w.a.toString
w.aXs()},
aXs(){var w=this
w.m(new C.e0e(w))
C.b8C().bM(new C.e0f(w),x.P).eP(new C.e0g(w))},
q(){var w=this.e
w.S$=$.aw()
w.P$=0
this.bwT()},
cv0(d){var w,v,u,t,s,r,q,p,o,n
this.r=d
w=B.a([],x.C)
for(v=d.a,u=v.length,t=x.dh,s=0;s<v.length;v.length===u||(0,B.M)(v),++s){r=v[s]
q=B.a([],t)
for(p=r.y,o=p.length,n=0;n<p.length;p.length===o||(0,B.M)(p),++n)q.push(new C.e0h(p[n]).$0())
w.push(q)}this.w=w},
gWv(){var w=this.fy
return w.A(0,A.ax)?100:Math.min(w.a,w.b)*0.43},
au9(d,e,f){var w=this
w.at=d
w.ax=e
w.ay=A.k.E(f,1,16)
w.Q=w.as=0},
ayd(d){var w
this.fx=d
w=d.ax
w===$&&B.c()
this.au9(d.x,d.w,105/Math.max(w,3))
B.f1()
C.q1("bell",(A.d.cu(D.a4e,d.c)+1)*3+12,900,0.45)
E.dY(300,"",280,1.4,0.15,"tri")},
q7(d){var w,v,u,t,s,r,q,p=this
p.f.fu(0,d,p.db)
if(p.at!=null){w=1-Math.exp(-d*3.6)
v=p.ax
v.toString
u=p.y
t=v-u
while(t>180)t-=360
while(t<-180)t+=360
p.y=u+t*w
v=p.x
u=p.at
u.toString
v+=(u-v)*w
p.x=v
s=p.z
r=p.ay
r.toString
s+=(r-s)*w
p.z=s
if(Math.abs(t)<0.2&&Math.abs(u-v)<0.2&&Math.abs(r-s)<0.02)p.at=p.ax=p.ay=null}else if(!p.dx){p.y=p.y+p.Q*d
p.x=A.k.E(p.x+p.as*d,-85,85)
q=Math.exp(-d*2.2)
v=p.Q*=q
p.as*=q
if(p.ch&&Math.abs(v)<3)p.y=p.y+7*d/Math.sqrt(p.z)}while(v=p.y,v>180)p.y=v-360
while(v<-180){v+=360
p.y=v}},
caO(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.r
if(m==null||n.fy.A(0,A.ax))return null
w=n.fy
v=n.gWv()
u=n.z
t=(d.a-w.a/2)/(v*u)
s=(w.b/2-d.b)/(n.gWv()*u)
r=t*t+s*s
if(r>1)return null
q=Math.sqrt(1-r)
p=n.x*3.141592653589793/180
o=Math.asin(A.k.E(q*Math.sin(p)+s*Math.cos(p),-1,1))
return m.cHu((n.y*3.141592653589793/180+Math.atan2(t,q*Math.cos(p)-s*Math.sin(p)))*180/3.141592653589793,o*180/3.141592653589793)},
caN(d){var w=this,v=w.r
if(v==null||A.a.i(d).length===0){w.m(new C.e0a(w))
return}w.m(new C.e0b(w,v,A.a.i(d).toLowerCase()))},
bQ8(){var w=null,v=this.c
v.toString
B.ci(w,w,!0,w,new C.e08(),v,w,!0,!0,x.H)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.fx,l=x.p,k=B.a([B.aH(n,n,n,n,D.bPI,n,n,n,o.gbQ7(),n,n,n,n,"Earth facts",n),B.aH(n,n,n,n,D.rC,n,n,n,new C.e0A(o,d),n,n,n,n,"Share",n)],l),j=B.cz(new C.e0B(o,m)),i=A.c.j(0.06)
i=B.a([B.aM(n,A.Y,!1,n,!0,A.t,n,B.aN(),o.e,n,n,n,n,n,2,B.br(n,new B.b5(4,B.m(14),A.a0),n,n,n,n,n,n,!0,n,n,n,n,n,n,i,!0,n,n,n,n,n,n,n,n,n,n,n,n,n,I.E5,"Search a country",n,n,n,n,n,!0,n,n,n,!0,!0,!1,n,D.bY_,n,n,n,n,n,n,n,n,n,n,n,n),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,o.gcaM(),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.jl,!0,A.a3,n,A.ao,n,n,n,n)],l)
if(o.id.length!==0){w=B.a([],l)
for(v=o.id,u=v.length,t=0;t<v.length;v.length===u||(0,B.M)(v),++t){s=v[t]
w.push(new C.eX(s.a,!1,new C.e0C(o,s),A.mL,A.aQ,n))}i.push(new B.D(A.hY,new B.a7(n,38,B.cr(w,n,n,n,n,A.aM,!1),n),n))}i.push(A.am)
w=B.a([new C.eX("Whole Earth",!1,new C.e0G(o),A.hv,A.aQ,n)],l)
for(v=D.aGa.gdV(D.aGa),v=v.gaf(v);v.C();){u=v.gR(v)
w.push(new C.eX(u.a,!1,new C.e0H(o,u),n,A.aQ,n))}w.push(new C.eX("Random",!1,new C.e0I(o),A.p7,A.aQ,n))
i.push(new C.hj(w,"GO TO",n))
w=o.z
i.push(C.lU(A.aQ,A.k.ac(w,1)+"x","Zoom",16,0.8,new C.e0J(o),w))
w=o.dy
i.push(C.lU(A.bG,A.a.aU(A.o.u(A.k.bh(w)),2,"0")+":00","Time",24,0,new C.e0K(o),w))
w=o.fr
i.push(C.lU(A.bj,o.ctM(),"Season",365,0,new C.e0L(o),w))
w=o.ch
v=o.CW
u=o.cx
r=o.cy
q=o.db
p=q?A.m7:D.H_
i.push(new C.hj(B.a([new C.eX("Spin",w,new C.e0M(o),D.bKV,A.aQ,n),new C.eX("Night",v,new C.e0N(o),A.w7,A.aQ,n),new C.eX("Borders",u,new C.e0D(o),D.bKZ,A.aQ,n),new C.eX("Names",r,new C.e0E(o),U.Cf,A.aQ,n),new C.eX("Music",q,new C.e0F(o),p,A.aQ,n)],l),n,n))
return C.oA(A.aQ,k,"A turning Earth with every country on it.\n\nDrag to spin it. Pinch with two fingers, or use the Zoom slider, to get closer. TAP any country to select it: the globe flies there, zooms in, and shows its capital, people, size and more.\n\nType a name in the search box to fly to any country. The buttons jump to a continent. Night shows which side of Earth is dark right now; move the Time slider to turn the day, and the Season slider to see the Sun move north and south through the year.\n\nTurn Music on for quiet space sounds.",j,"EARTH GLOBE",B.x(i,A.m,n,A.e,A.Q,0,A.p))},
ctM(){var w,v,u
for(w=this.fr,v=0,u=0;u<12;++u)if(w>=D.ayM[u])v=u
return A.iE[v]+" "+(A.k.bh(w-D.ayM[v])+1)},
caL(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.ay
i===$&&B.c()
w=i>0?d.e/i:0
v=d.e
u=v/79e8*100
t=d.c
s=new L.uC(1,A.o.F((A.d.cu(D.a4e,t)+1)*47,360),0.55,1).lH()
r=new C.e06()
q=B.m(20)
p=B.J(s.j(0.6),A.r,1)
o=x.p
n=B.B(B.a([B.p(j,j,A.f,j,j,new B.o(s,j,j,j,j,j,A.a6),j,10,j,j,j,j,j,10),A.ac,B.E(B.d(d.a,j,1,A.a1,j,j,j,A.dd,j,j,j),1),B.aH(j,j,j,j,A.Hj,j,j,j,new C.e05(this),j,j,j,j,j,A.cd)],o),A.m,j,A.e,A.i,0,j,j)
m=d.d
t=B.d(t+(m.length!==0?" \xb7 "+m:""),j,j,j,j,j,j,A.hm,j,j,j)
m=D.dwl.h(0,d.b)
m=r.$2("CAPITAL",m==null?"\u2014":m)
l=v>0
v=B.B(B.a([m,A.ac,r.$2("PEOPLE",l?C.fyP(v):"\u2014")],o),A.m,j,A.e,A.i,0,j,j)
i=r.$2("SIZE",C.H7(i)+" km\xb2")
if(l)m=(w<10?A.k.ac(w,1):C.H7(w))+" per km\xb2"
else m="\u2014"
m=B.B(B.a([i,A.ac,r.$2("CROWDING",m)],o),A.m,j,A.e,A.i,0,j,j)
i=r.$2("WORLD SHARE",(u<0.1?A.k.ac(u,3):A.k.ac(u,1))+"% of people")
l=d.f
k=d.r
return B.p(j,B.x(B.a([n,t,A.O,v,A.O,m,A.O,B.B(B.a([i,A.ac,r.$2("ECONOMY",l>0?"$"+C.fyP(l*1e6)+" \xb7 "+k:k)],o),A.m,j,A.e,A.i,0,j,j)],o),A.E,j,A.e,A.Q,0,A.p),A.f,j,j,new B.o(D.Xi,j,p,q,j,j,A.n),j,j,j,j,D.ajO,j,j,j)}}
C.bgn.prototype={
a3(d8,d9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2=this,d3=null,d4=d9.a,d5=d9.b,d6=$.S(),d7=B.I()
d7.r=D.B9.gp(0)
d8.aP(new B.a3(0,0,0+d4,0+d5),d7)
w=new B.e9()
w.d3(4)
for(d7=d8.a,v=0;v<90;++v){u=w.ah()
t=w.ah()
s=w.ah()
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=A.c.j(0.25+w.ah()*0.5).gp(0)
q=r.G()
d7.drawCircle(u*d4,t*d5,s*1.2+0.3,q)
q.delete()}d4/=2
d5/=2
p=new B.t(d4,d5)
o=d2.f
u=B.I()
t=x.O
u.sam(new B.c1(A.A,0.5,A.x,d3,0,B.a([A.K,A.aQ.j(0.35),A.K],t),D.d_L,d3).aB(0,B.bX(p,o*1.1)))
d8.ad(p,o*1.05,u)
n=B.bX(p,o)
u=B.I()
u.sam(D.erR.aB(0,n))
d8.ad(p,o,u)
J.bm(d7.save())
u=x.v
d6=new B.aF(d6.r,A.ag,d3,d3,B.a([],u))
d6.D(new B.jE(n))
d8.mE(0,d6)
m=d2.d*3.141592653589793/180
l=d2.e*3.141592653589793/180
k=Math.sin(m)
j=Math.cos(m)
i=Math.sin(l)
h=Math.cos(l)
g=B.I()
g.b=A.aa
m=g.c=0.7
g.r=A.c.j(0.1).gp(0)
f=new C.diH(l,k,j,p,o)
for(e=-60;e<=60;e+=30){for(d6=e*3.141592653589793/180,d=d3,a0=-180;a0<=180;a0+=4){a1=f.$2(d6,a0*3.141592653589793/180)
if(a1==null){if(d!=null){q=g.G()
s=d.e
d7.drawPath((s==null?d.e=new B.cl(d.gbw().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.S()
a3=B.a([],u)
d=new B.aF(a2.r,A.ag,d3,d3,a3)
a3.push(new B.aX(s,r))}else{s=new B.aq(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.by(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.G()
d6=d.e
d7.drawPath((d6==null?d.e=new B.cl(d.gbw().a.snapshot()):d6).a,q)
q.delete()}}for(a0=-180;a0<180;a0+=30){for(d6=a0*3.141592653589793/180,d=d3,e=-88;e<=88;e+=4){a1=f.$2(e*3.141592653589793/180,d6)
if(a1==null){if(d!=null){q=g.G()
s=d.e
d7.drawPath((s==null?d.e=new B.cl(d.gbw().a.snapshot()):s).a,q)
q.delete()}d=d3}else{s=a1.a
r=a1.b
if(d==null){a2=$.S()
a3=B.a([],u)
d=new B.aF(a2.r,A.ag,d3,d3,a3)
a3.push(new B.aX(s,r))}else{s=new B.aq(s,r)
d.r.push(s)
r=d.f
if(r!=null)s.by(r)
s=d.e
if(s!=null)s.a.delete()
d.e=null}}}if(d!=null){q=g.G()
d6=d.e
d7.drawPath((d6==null?d.e=new B.cl(d.gbw().a.snapshot()):d6).a,q)
q.delete()}}a4=d2.b
if(a4!=null&&d2.c.length===a4.a.length){a5=B.a([],x.ds)
for(d6=a4.a,s=d2.c,r=!d2.y,a2=d2.w,a6=0;a6<d6.length;++a6){a7=d6[a6]
a8=a7===a2
a9=A.o.F((A.d.cu(D.a4e,a7.c)+1)*47,360)
$.S()
b0=new B.ap(A.R,A.N,A.U,A.V,A.S)
a3=a8?0.35:0.5
b0.r=new L.uC(1,a9,a3,a8?1:0.62).lH().gp(0)
b1=new B.ap(A.R,A.N,A.U,A.V,A.S)
b1.b=A.aa
b1.c=a8?2.2:m
b1.e=A.dT
b1.r=(a8?A.c:A.w.j(0.55)).gp(0)
for(a3=s[a6],b2=a3.length,b3=0;b3<a3.length;a3.length===b2||(0,B.M)(a3),++b3){b4=a3[b3]
b5=b4.length/4|0
b6=$.S()
b7=B.a([],u)
b8=new B.aF(b6.r,A.ag,d3,d3,b7)
for(b9=!1,v=0;v<b5;++v){b6=v*4
c0=b4[b6]
c1=b4[b6+1]
c2=b4[b6+2]
c3=b4[b6+3]
c4=c3*h+c2*i
c5=o*c1*(c2*h-c3*i)
c6=o*(j*c0-k*c1*c4)
if(k*c0+j*c1*c4>=0)b9=!0
else{c7=Math.sqrt(c5*c5+c6*c6)
if(c7>0){c5=c5/c7*o
c6=c6/c7*o}}b6=d4+c5
c8=d5-c6
if(v===0){b6=new B.aX(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.by(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}else{b6=new B.aq(b6,c8)
b7.push(b6)
c8=b8.f
if(c8!=null)b6.by(c8)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null}}if(!b9)continue
b6=new B.bs()
b7.push(b6)
b7=b8.f
if(b7!=null)b6.by(b7)
b6=b8.e
if(b6!=null)b6.a.delete()
b8.e=null
q=b0.G()
b6=b8.e
d7.drawPath((b6==null?b8.e=new B.cl(b8.gbw().a.snapshot()):b6).a,q)
q.delete()
if(!r||a8){q=b1.G()
b6=b8.e
d7.drawPath((b6==null?b8.e=new B.cl(b8.gbw().a.snapshot()):b6).a,q)
q.delete()}if(a8)a5.push(b8)}}for(u=a5.length,b3=0;b3<a5.length;a5.length===u||(0,B.M)(a5),++b3){d=a5[b3]
$.S()
s=new B.ap(A.R,A.N,A.U,A.V,A.S)
s.b=A.aa
s.c=5
s.r=A.c.j(0.25).gp(0)
s.z=A.uG
q=s.G()
s=d.e
d7.drawPath((s==null?d.e=new B.cl(d.gbw().a.snapshot()):s).a,q)
q.delete()}if(d2.z)for(u=d6.length,s=d2.r,r=!(s<1.8),s=14/s,b3=0;b3<d6.length;d6.length===u||(0,B.M)(d6),++b3){a7=d6[b3]
a8=a7===a2
if(!a8)if(r){a3=a7.ax
a3===$&&B.c()
a3=a3<s}else a3=!0
else a3=!1
if(a3)continue
e=a7.x*3.141592653589793/180
a0=a7.w*3.141592653589793/180
if(k*Math.sin(e)+j*Math.cos(e)*Math.cos(a0-l)<0.25)continue
a1=f.$2(e,a0)
if(a1==null)continue
a3=a8?13:10.5
b2=a8?A.c:A.c.j(0.9)
c9=C.hT4(a7.a,a3,b2)
b2=c9.b
a3=b2.c
b2=b2.a.c
b2=b2.gbb(b2)
c9.a3(d8,new B.t(a1.a-a3/2,a1.b-b2/2))}}if(d2.x){d0=-23.44*Math.cos(6.283185307179586*(d2.as+10)/365)*3.141592653589793/180
c0=Math.sin(d0)
c1=Math.cos(d0)
d6=-(d2.Q-12)*15*3.141592653589793/180-l
d1=Math.sin(d6)
c4=Math.cos(d6)
d6=A.k.E(k*c0+j*c1*c4,-1,1)
$.S()
u=B.I()
u.sam(new B.c1(A.A,0.5,A.x,d3,0,B.a([A.K,A.K,D.bcb.j(0.78)],t),D.dgx,d3).aB(0,B.bX(new B.t(d4+c1*d1*o,d5-(j*c0-k*c1*c4)*o),o*(1.15+0.5*(1-d6)*0.5))))
d8.ad(p,o,u)}$.S()
d4=B.I()
d4.sam(new B.c1(A.A,0.5,A.x,d3,0,B.a([A.K,A.w.j(0.4)],t),D.dtS,d3).aB(0,n))
d8.ad(p,o,d4)
d7.restore()
d7=B.I()
d7.b=A.aa
d7.c=1.4
d7.r=A.he.j(0.5).gp(0)
d8.ad(p,o,d7)},
aw(d){return!0}}
C.aMl.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.aMm.prototype={
q(){var w,v,u
for(w=this.iL$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iK$
w===$&&B.c()
w.q()
this.bwS()}}
C.buO.prototype={}
C.WE.prototype={
T(){return new C.blD()}}
C.blD.prototype={
gaTa(){var w=this.d
if(w===$)w=this.d=A.cZ.au(16)
return w},
Z(){this.a2()
C.b8C().f8(new C.eJa(),new C.eJb(),x.P)},
B(d){var w=null,v=B.eH(w,w,w,!0,!0,D.B9,w,1,!0,w,0,!1,w,!1,w,w,B.aH(w,w,w,w,D.apB,w,w,w,new C.eJ7(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.fM6,w,w,w,1,w,!0),u=B.m(18),t=A.aQ.j(0.1),s=B.J(A.aQ.j(0.35),A.r,1),r=x.p
return B.c7(v,D.B9,B.cr(B.a([B.p(w,B.B(B.a([D.bOn,A.at,B.E(B.d(D.d3P[this.gaTa()],w,w,w,w,w,w,D.fsO,w,w,w),1),B.aH(w,w,w,w,D.bZ0,w,w,w,new C.eJ8(this),w,w,w,w,"Another fact",w)],r),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(t,w,s,u,w,w,A.n),w,w,w,w,A.bB,w,w,w),A.aA,B.cz(new C.eJ9())],r),w,A.a_8,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.Wq.prototype={
T(){return C.hTw()}}
C.blq.prototype={
cls(d){var w=d.c,v=C.hTy(w),u=d.e,t=u<=0?0:6.283185307179586*(this.f/u)+w*1.7
return new B.t(Math.cos(t)*v,Math.sin(t)*v)},
Z(){this.a2()
this.pa()},
q7(d){var w,v,u,t=this
t.e.fu(0,d,t.ay)
t.f=t.f+d*t.r
w=t.Q
if(w!=null){v=t.cls(w)
u=new B.t(-v.a,-v.b).aI(0,t.w)
v=B.ky(t.x,u,1-Math.exp(-d*5))
v.toString
t.x=v}},
gcaP(){var w=this.ch
return new B.t(w.a/2,w.b/2).a8(0,this.x)},
caT(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=d.a,v=d.b,u=null,t=30,s=0;s<10;++s){r=D.D_[s]
q=i.ch
p=i.x
o=r.c
n=o===0?0:30+150*Math.sqrt(o/30.1)
m=r.e
l=m<=0?0:6.283185307179586*(i.f/m)+o*1.7
o=Math.cos(l)
m=Math.sin(l)
k=i.w
o=q.a/2+p.a+o*n*k-w
k=q.b/2+p.b+m*n*k-v
j=Math.sqrt(o*o+k*k)
if(j<t){t=j
u=r}}return u},
b_Q(d){this.m(new C.eBQ(this,d))
B.f1()
C.q1("bell",D.du4[A.o.F(A.d.cu(D.D_,d),10)]+12,1000,0.5)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.z,k=x.p,j=B.a([B.aH(m,m,m,m,D.rC,m,m,m,new C.eC0(n,d),m,m,m,m,"Share",m)],k),i=B.cz(new C.eC1(n,l)),h=B.a([new C.eX("All",!1,new C.eC2(n),A.a2c,A.aU,m)],k)
for(w=0;w<10;++w){v=D.D_[w]
h.push(new C.eX(v.a,n.z===v,new C.eC3(n,v),m,B.b1(v.z),m))}u=Math.log(n.r+1)
t=Math.log(3651)
s=n.r
s=s<10?A.k.ac(s,0)+" d/s":""+A.k.V(s)+" d/s"
t=C.lU(A.aU,s,"Time",1,0,new C.eC4(n),u/t)
u=n.w
u=C.lU(A.aU,A.k.ac(u,1)+"x","Zoom",9,0.5,new C.eC5(n),u)
s=n.as
r=n.at
q=n.ax
p=n.ay
o=p?A.m7:D.H_
return C.oA(A.aU,j,"The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.",i,"SOLAR SYSTEM",B.x(B.a([new C.hj(h,"GO TO",m),t,u,new C.hj(B.a([new C.eX("Orbits",s,new C.eC6(n),m,A.aU,m),new C.eX("Names",r,new C.eC7(n),m,A.aU,m),new C.eX("Asteroids",q,new C.eC8(n),m,A.aU,m),new C.eX("Music",p,new C.eC9(n),o,A.aU,m)],k),m,m)],k),A.m,m,A.e,A.Q,0,A.p))},
caQ(d){var w,v,u,t,s,r=null,q=B.b1(d.z),p=d.c,o=p*8.317,n=new C.eBO(),m=B.m(20),l=B.J(q.j(0.6),A.r,1),k=B.p(r,r,A.f,r,r,new B.o(q,r,r,r,r,r,A.a6),r,12,r,r,r,r,r,12),j=d.b,i=j==="star"
if(i)j="Star"
else j=j==="dwarf"?"Dwarf planet":"Planet"
w=x.p
j=B.B(B.a([k,A.ac,B.E(B.d(d.a+"  \xb7  "+j,r,r,r,r,r,r,A.k4,r,r,r),1),B.aH(r,r,r,r,A.Hj,r,r,r,new C.eBN(this),r,r,r,r,r,A.cd)],w),A.m,r,A.e,A.i,0,r,r)
k=B.d(d.y,r,r,r,r,r,r,F.E6,r,r,r)
v=n.$2("WIDTH",C.H7(d.d*2)+" km")
u=p===0
p=B.B(B.a([v,A.ac,n.$2("FROM THE SUN",u?"\u2014":B.w(p)+" AU ("+C.H7(p*149.6)+" million km)")],w),A.m,r,A.e,A.i,0,r,r)
v=d.e
v=n.$2("ONE YEAR",v===0?"\u2014":new C.eBP().$1(v))
t=d.f
v=B.B(B.a([v,A.ac,n.$2("ONE DAY",t>=48?A.k.ac(t/24,0)+" Earth days":A.k.ac(t,1)+" hours")],w),A.m,r,A.e,A.i,0,r,r)
t=d.r
s=t>50?0:1
s=B.B(B.a([n.$2("GRAVITY",B.w(t)+" m/s\xb2 \xb7 a 50 kg person weighs "+A.k.ac(50*t/9.81,s)+" kg"),A.ac,n.$2("TEMPERATURE",""+A.o.V(d.x)+"\xb0C")],w),A.m,r,A.e,A.i,0,r,r)
t=n.$2("MOONS",i?"\u2014":""+d.w)
if(u)i="\u2014"
else i=o<90?A.k.ac(o,1)+" minutes":A.k.ac(o/60,1)+" hours"
return B.p(r,B.x(B.a([j,A.au,k,A.O,p,A.O,v,A.O,s,A.O,B.B(B.a([t,A.ac,n.$2("SUNLIGHT TAKES",i)],w),A.m,r,A.e,A.i,0,r,r)],w),A.E,r,A.e,A.Q,0,A.p),A.f,r,r,new B.o(D.Xi,r,l,m,r,r,A.n),r,r,r,r,D.ajO,r,r,r)}}
C.bsR.prototype={
a3(a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a8.a,a6=a8.b
$.S()
w=B.I()
w.r=D.B9.gp(0)
a7.aP(new B.a3(0,0,0+a5,0+a6),w)
v=new B.e9()
v.d3(8)
for(w=a7.a,u=0;u<110;++u){t=v.ah()
s=v.ah()
r=v.ah()
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.r=A.c.j(0.2+v.ah()*0.5).gp(0)
p=q.G()
w.drawCircle(t*a5,s*a6,r*1.2+0.3,p)
p.delete()}a5=this.b
o=a5.gcaP()
n=a5.w
if(a5.as)for(a6=A.d.gaf(D.D_),t=new B.f5(a6,new C.f2L()),s=o.a,r=o.b;t.C();){q=a6.gR(0).c
q=q===0?0:30+150*Math.sqrt(q/30.1)
m=new B.ap(A.R,A.N,A.U,A.V,A.S)
m.b=A.aa
m.c=1
m.r=A.c.j(0.12).gp(0)
p=m.G()
w.drawCircle(s,r,q*n,p)
p.delete()}if(a5.ax)for(a6=a5.CW,t=o.a,s=o.b,r=a5.cx,u=0;u<a6.length;++u){q=a6[u]
m=a5.f
l=r[u]
k=q+m*0.0016/l
j=(l===0?0:30+150*Math.sqrt(l/30.1))*n
q=Math.cos(k)
m=Math.sin(k)
l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.r=A.c.j(0.5).gp(0)
p=l.G()
w.drawCircle(t+q*j,s+m*j,0.9,p)
p.delete()}i=C.hTx(A.d.gI(D.D_))*Math.sqrt(n)*1.4
a6=i*3.2
t=B.I()
s=x.O
t.sam(new B.c1(A.A,0.5,A.x,a4,0,B.a([A.aU.j(0.5),A.K],s),a4,a4).aB(0,B.bX(o,a6)))
a7.ad(o,a6,t)
t=B.I()
t.sam(D.erL.aB(0,B.bX(o,i)))
a7.ad(o,i,t)
if(a5.at){h=C.hlj("Sun",10.5,A.ad)
h.a3(a7,o.a8(0,new B.t(-h.b.c/2,i+4)))}for(a6=A.d.gaf(D.D_),t=new B.f5(a6,new C.f2M()),r=n>1.6,q=o.a,m=o.b;t.C();){l=a6.gR(0)
g=l.c
j=g===0?0:30+150*Math.sqrt(g/30.1)
f=l.e
k=f<=0?0:6.283185307179586*(a5.f/f)+g*1.7
g=q+Math.cos(k)*j*n
f=m+Math.sin(k)*j*n
j=(1.5+1.6*Math.log(l.d/1000+1))*Math.sqrt(n)
e=B.b1(l.z)
d=l.a
if(d==="Saturn"){J.bm(w.save())
w.translate(g,f)
w.rotate(-22.91831180523293,0,0)
a0=B.bJ(A.I,j*1.3,j*4.2)
a1=new B.ap(A.R,A.N,A.U,A.V,A.S)
a1.b=A.aa
a1.c=j*0.45
a1.r=A.bL.j(0.55).gp(0)
p=a1.G()
w.drawOval(B.bF(a0),p)
p.delete()
w.restore()}a0=new B.ap(A.R,A.N,A.U,A.V,A.S)
a0.r=e.j(0.3).gp(0)
a0.z=A.uG
p=a0.G()
w.drawCircle(g,f,j+3,p)
p.delete()
a0=new B.ap(A.R,A.N,A.U,A.V,A.S)
a1=B.ar(e,A.w,0.55)
a1.toString
a0.sam(new B.c1(V.xh,0.5,A.x,a4,0,B.a([A.c,e,a1],s),H.a3R,a4).aB(0,B.bX(new B.t(g,f),j)))
p=a0.G()
w.drawCircle(g,f,j,p)
p.delete()
if(l===a5.z){l=new B.ap(A.R,A.N,A.U,A.V,A.S)
l.b=A.aa
l.c=2
l.r=A.c.gp(0)
p=l.G()
w.drawCircle(g,f,j+7,p)
p.delete()}if(r&&d==="Earth"){k=a5.f/27.3*2*3.141592653589793
a2=j+11*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new B.ap(A.R,A.N,A.U,A.V,A.S)
a3.r=A.c.gp(0)
p=a3.G()
w.drawCircle(g+l*a2,f+a0*a2,1.8*a1,p)
p.delete()}if(r&&d==="Jupiter")for(u=0;u<4;++u){k=a5.f/D.d9n[u]*2*3.141592653589793
a2=j+(6+u*4)*Math.sqrt(n)
l=Math.cos(k)
a0=Math.sin(k)
a1=Math.sqrt(n)
a3=new B.ap(A.R,A.N,A.U,A.V,A.S)
a3.r=A.ad.gp(0)
p=a3.G()
w.drawCircle(g+l*a2,f+a0*a2,1.4*a1,p)
p.delete()}if(a5.at){h=C.hlj(d,10.5,A.ad)
h.a3(a7,new B.t(g+-h.b.c/2,f+(j+4)))}}},
aw(d){return!0}}
C.VF.prototype={
T(){var w=x.i
return new C.aE7(new C.Pu(A.cZ),B.c3(5,0,!1,w),B.c3(5,0,!1,w),B.c3(5,null,!1,x.cD),A.I,A.I,B.a([],x.g),$,A.bF,0,B.a([],x.X),null,null)}}
C.aE7.prototype={
cyi(){var w,v,u,t,s=this
s.x=!0
s.y=0
for(w=s.z,v=s.Q,u=s.as,t=0;t<5;++t){w[t]=0
v[t]=0
u[t]=null}},
caS(){var w,v,u,t,s=this,r="An oval orbit: it goes round Earth again and again."
s.cx=D.eeZ
s.cy=new B.t(s.ay,0)
w=s.db
A.d.a9(w)
w.push(s.cx)
s.CW=!0
s.dy=0
v=Math.sqrt(58.86870477034412)
u=Math.sqrt(117.73740954068823)
w=s.ay
t=Math.abs(6771*w*w/398600-1)
if(w>=u)s.dx="It escapes Earth and never comes back."
else if(w>=v)s.dx=t<0.03?"A perfect circle: it orbits Earth forever.":r
else s.dx=6771*(1-t)/(1+t)>6371?r:"It is too slow, so it falls back to the ground."
E.dY(150,"",400,0,0.5,"noise")
E.dY(90,"",300,1.5,0.6,"sine")
s.m(new C.e0R())},
Z(){this.a2()
this.pa()},
q7(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.e.fu(0,d,i.d!=="drop")
if(i.d==="drop"&&i.x){w=d*i.w
i.y+=w
for(v=i.z,u=w/12,t=i.Q,s=i.as,r=0;r<5;++r){if(s[r]!=null)continue
q=D.zk[r]
p=q.c
if(i.f){o=i.r?1:0
n=1.6*p*o}else{o=i.r?1:0
n=0.002*p*o}for(p=q.b,m=0;m<12;++m){o=t[r]
o+=(p-n*o*Math.abs(o))*u
t[r]=o
o=v[r]+o*u
v[r]=o
if(o>=20){v[r]=20
s[r]=i.y
if(q.a!=="Sun")E.dY(60+p*5,"",220,0.6,0.55,"sine")
break}}}if(A.d.d5(s,new C.e1j()))i.x=!1}if(i.d==="cannon"&&i.CW){w=d*900/30
for(v=w/2,r=0;r<30;++r){t=i.cx
s=t.a
t=t.b
l=Math.sqrt(s*s+t*t)
t=i.cx
s=-398600/(l*l*l)
p=t.a
t=t.b
o=i.cy
k=o.a+p*s*v
s=o.b+t*s*v
i.cy=new B.t(k,s)
k=p+k*w
s=t+s*w
i.cx=new B.t(k,s)
j=Math.sqrt(k*k+s*s)
s=i.cy
k=i.cx
t=-398600/(j*j*j)
p=k.a
k=k.b
i.cy=new B.t(s.a+p*t*v,s.b+k*t*v)
i.dy+=w
if(Math.sqrt(p*p+k*k)<6371){i.CW=!1
E.dY(70,"",350,0,0.7,"noise")
break}}v=i.db
if(v.length===0||A.d.gak(v).aF(0,i.cx).gcH()>120)v.push(i.cx)
if(v.length>700)A.d.cE(v,0)
if(i.cx.gcH()>6e5)i.CW=!1}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.d
if(n==="drop")n=p.bOd()
else n=n==="weight"?p.cFE():p.bGm()
w=x.p
v=B.a([],w)
for(u=0;u<3;++u){t=D.dqV[u]
v.push(new C.eX(t.b,p.d===t.a,new C.e15(p,t),t.c,A.cR,o))}v=B.a([new C.hj(v,o,o)],w)
if(p.d==="drop"){s=p.f
r=p.r
q=r?"Air on":"Air off"
r=B.a([new C.eX("Hammer",!s,new C.e16(p),Ac.GU,A.cR,o),new C.eX("Feather",s,new C.e17(p),U.Ok,A.cR,o),new C.eX(q,r,new C.e1b(p),A.GI,A.aQ,o)],w)
q=p.w
A.d.v(v,B.a([new C.hj(r,o,o),C.lU(A.cR,""+A.k.V(q*100)+"%","Slow motion",1,0.05,new C.e1c(p),q),new C.hj(B.a([new C.j7(A.uc,"Drop!",new C.e1d(p),A.bj,o)],w),o,o)],w))}if(p.d==="weight"){s=p.at
s=C.lU(A.cR,""+A.k.V(s)+" kg","Your weight",120,20,new C.e1e(p),s)
r=p.ax
A.d.v(v,B.a([s,C.lU(A.cR,""+A.k.V(r*100)+" cm","Your jump",1.2,0.1,new C.e1f(p),r)],w))}if(p.d==="cannon"){s=p.ay
s=C.lU(A.cR,A.k.ac(s,1)+" km/s","Speed",13,0,new C.e1g(p),s)
r=p.ch
A.d.v(v,B.a([s,C.lU(A.cR,A.k.ac(r,1)+"x out","View",8,0.5,new C.e1h(p),r),new C.hj(B.a([new C.j7(A.ol,"Fire!",p.gcaR(),A.bj,o),new C.j7(A.uc,"Falls",new C.e1i(p),A.c,o),new C.j7(A.rr,"Orbit 7.7",new C.e18(p),A.c,o),new C.j7(D.bNM,"Oval 9",new C.e19(p),A.c,o),new C.j7(A.Ci,"Escape",new C.e1a(p),A.c,o)],w),o,o)],w))}return C.oA(A.cR,A.fu,"Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.",n,"GRAVITY LAB",B.x(v,A.m,o,A.e,A.Q,0,A.p))},
bOd(){return new B.D(D.bxf,B.cz(new C.e0Q(this)),null)},
cFE(){var w,v,u,t=null,s=[D.eSy,D.eU0,D.eU7,D.eUq,D.eU5,D.eUx,D.eT7,D.eUT,D.eTM],r=x.p,q=B.a([D.fzB,A.W],r)
for(w=0;w<9;++w){v=s[w]
u=B.b1(v.c)
q.push(new B.D(A.ct,new B.cd(A.aM,A.e,A.i,A.m,t,A.p,t,0,B.a([new B.a7(62,t,new B.y(v.a,t,new B.F(!0,u,t,t,t,t,12.5,A.u,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t),t,t,t,t,t,t,t,t,t),t),new B.bA(1,A.bc,new B.BE(new C.e0S(this,v),t),t)],r),t),t))}q.push(A.au)
q.push(D.fC3)
return B.cr(q,t,A.iB,t,t,A.ah,!1)},
bGm(){return B.cz(new C.e0O(this))}}
C.bbx.prototype={
a3(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a0.a,g=a0.b,f=$.S(),e=B.I()
e.r=D.B9.gp(0)
d.aP(new B.a3(0,0,0+h,0+g),e)
w=new B.e9()
w.d3(2)
for(e=d.a,v=0;v<80;++v){u=w.ah()
t=w.ah()
s=w.ah()
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=A.c.j(0.2+w.ah()*0.5).gp(0)
q=r.G()
e.drawCircle(u*h,t*g,s*1.1+0.3,q)
q.delete()}h=j.c
p=6371*h
g=j.b
e=B.I()
e.sam(new B.c1(A.A,0.5,A.x,i,0,B.a([A.K,A.aQ.j(0.35),A.K],x.O),D.dhs,i).aB(0,B.bX(g,p*1.1)))
d.ad(g,p*1.06,e)
e=B.I()
e.sam(D.erF.aB(0,B.bX(g,p)))
d.ad(g,p,e)
o=g.a8(0,new B.t(0,-p))
f=f.r
e=x.v
n=new B.aF(f,A.ag,i,i,B.a([],e))
u=o.a
t=o.b
s=t+3
n.D(new B.aX(u-16,s))
n.D(new B.aq(u,t-400*h-4))
n.D(new B.aq(u+16,s))
n.D(new B.bs())
s=B.I()
s.r=A.al.gp(0)
d.aG(n,s)
s=o.a8(0,new B.t(0,-400*h-6))
u=B.I()
u.r=A.c.gp(0)
d.ad(s,4,u)
u=j.e
if(u.length>1){e=B.a([],e)
m=new B.aF(f,A.ag,i,i,e)
f=g.a
t=g.b
m.D(new B.aX(f+A.d.gI(u).a*h,t+A.d.gI(u).b*h))
for(u=B.d0(u,1,i,B.T(u).c),s=u.$ti,u=new B.bR(u,u.gL(0),s.k("bR<ak.E>")),s=s.k("ak.E");u.C();){r=u.d
if(r==null)r=s.a(r)
r=new B.aq(f+r.a*h,t+r.b*h)
e.push(r)
l=m.f
if(l!=null)r.by(l)
r=m.e
if(r!=null)r.a.delete()
m.e=null}$.S()
f=B.I()
f.b=A.aa
f.c=2.4
f.d=A.bE
f.r=A.cR.j(0.9).gp(0)
d.aG(m,f)}if(j.f){f=j.d
k=g.a8(0,new B.t(f.a*h,f.b*h))
h=B.I()
h.r=A.cR.j(0.4).gp(0)
h.z=I.pk
d.ad(k,7,h)
h=B.I()
h.r=A.c.gp(0)
d.ad(k,4,h)}},
aw(d){return!0}}
C.Wi.prototype={
T(){return new C.bln(new B.cB(null,x.z),$,A.bF,0,B.a([],x.X),null,null)}}
C.bln.prototype={
Z(){this.a2()
this.pa()},
q7(d){},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=D.QS[l.e],i=D.QS[l.f],h=j.b>=i.b,g=h?j:i,f=h?i:j
h=g.b
w=f.b
v=h/w
u=x.p
t=B.a([B.aH(k,k,k,k,D.rC,k,k,k,new C.euK(l,d),k,k,k,k,"Share",k)],u)
s=B.E(B.b4(k,k,k,new C.bsp(f,g,v,k),A.fF),1)
r=g.a
q=v<10?A.k.ac(v,1):C.H7(v)
p=f.a
q=B.d(r+" is "+q+" times wider than "+p,k,k,k,k,k,k,A.hD,A.L,k,k)
o=C.H7(v*v*v)
n=A.a.c9(p,"s")?"":"s"
h=B.x(B.a([s,B.p(k,B.x(B.a([q,A.au,B.d("About "+o+" "+p+n+" would fit inside "+r+".",k,k,k,k,k,k,P.vb,A.L,k,k),A.bD,B.d(p+": "+C.H7(w*2)+" km wide. "+r+": "+C.H7(h*2)+" km wide.",k,k,k,k,k,k,P.E2,A.L,k,k)],u),A.m,k,A.e,A.i,0,A.p),A.f,k,k,k,k,k,k,k,D.bzs,k,k,1/0)],u),A.m,k,A.e,A.i,0,A.p)
r=B.a([],u)
for(m=0;m<10;++m){w=D.QS[m]
r.push(new C.eX(w.a,l.e===m,new C.euL(l,m),k,B.b1(w.c),k))}w=B.a([],u)
for(m=0;m<10;++m){s=D.QS[m]
w.push(new C.eX(s.a,l.f===m,new C.euM(l,m),k,B.b1(s.c),k))}return C.oA(A.c5,t,"Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.",new B.ex(h,l.d),"SIZE COMPARE",B.x(B.a([new C.hj(r,"FIRST",k),new C.hj(w,"SECOND",k)],u),A.m,k,A.e,A.Q,0,A.p))}}
C.bsp.prototype={
a3(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b
$.S()
w=B.I()
w.r=D.bj2.gp(0)
d.aP(new B.a3(0,0,0+h,0+g),w)
v=new B.e9()
v.d3(6)
for(w=d.a,u=0;u<70;++u){t=v.ah()
s=v.ah()
r=v.ah()
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.r=A.c.j(0.2+v.ah()*0.4).gp(0)
p=q.G()
w.drawCircle(t*h,s*g,r+0.3,p)
p.delete()}o=Math.min(h/2-16,g/2-10)*0.98
n=Math.max(o/this.d,0.8)
h*=0.5
g*=0.5
m=new B.t(h,g)
w=new C.f0U(d)
t=this.c
w.$3(m,o,B.b1(t.c))
s=o-n
l=new B.t(h-o+n+6+s*0.1,g+o-n-6-s*0.05)
s=this.b
w.$3(l,n,B.b1(s.c))
w=B.I()
w.b=A.aa
w.c=1.4
w.r=A.ad.gp(0)
d.ad(l,n+3,w)
k=B.fu(i,i,i,i,B.cS(i,i,i,i,i,i,i,i,i,D.fkz,s.a),A.a3,A.bZ,i,A.dA,A.bW)
k.el()
s=k.b
w=s.c
h=-n
s=s.a.c
if(h-s.gbb(s)-6<4)h=n+6
else{g=k.b.a.c
g=h-g.gbb(g)-6
h=g}k.a3(d,l.a8(0,new B.t(-w/2,h)))
j=B.fu(i,i,i,i,B.cS(i,i,i,i,i,i,i,i,i,D.fnY,t.a),A.a3,A.bZ,i,A.dA,A.bW)
j.el()
t=j.b
h=t.c
t=t.a.c
j.a3(d,m.a8(0,new B.t(-h/2,-t.gbb(t)/2)))},
aw(d){return!0}}
C.aMn.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.by4.prototype={
q(){var w,v,u
for(w=this.iL$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iK$
w===$&&B.c()
w.q()
this.bwU()}}
C.aMR.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.byd.prototype={
q(){var w,v,u
for(w=this.iL$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iK$
w===$&&B.c()
w.q()
this.bxn()}}
C.aMU.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.byf.prototype={
q(){var w,v,u
for(w=this.iL$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iK$
w===$&&B.c()
w.q()
this.bxq()}}
C.Q_.prototype={}
C.UJ.prototype={
T(){return C.hTu()}}
C.bk7.prototype={
Z(){this.a2()
this.pa()},
q7(d){var w,v,u,t,s,r=this
r.f+=d
r.e.fu(0,d,r.y)
for(w=r.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u){t=w[u]
t.a=t.a+d*t.c/Math.pow(t.b,1.5)
s=t.b
s-=d*(0.5+1.6/s)*0.6
t.b=s
if(s<=1){t.e=0;++r.as
E.dY(70,"",500,0.3,0.5,"sine")}}A.d.bs(w,new C.dK0())},
b_R(d){var w,v,u,t=this.Q
if(t.A(0,A.ax))return
w=this.gb8W()
v=d.aF(0,new B.t(t.a/2,t.b*0.42))
u=A.k.E(v.gcH()/w,1.5,12)
t=Math.atan2(v.b,v.a)
this.z.push(new C.Q_(t,u,1.2,new B.vQ(1,30+A.cZ.ah()*40,0.9,0.7).lH()))
C.q1("bell",60+A.k.V(12-u)*2,400,0.35)},
gb8W(){var w=this.Q
return Math.min(w.a,w.b)*0.07},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.z,l=Math.sqrt(1-1/A.k.E(m.length===0?3:new B.N(m,new C.dJP(),B.T(m).k("N<1,K>")).fb(0,A.vw),1.0001,99))
m=x.p
w=B.a([B.aH(n,n,n,n,D.rC,n,n,n,new C.dJQ(o,d),n,n,n,n,"Share",n)],m)
v=B.cz(new C.dJR(o,l))
u=Math.log(o.r)
t=Math.log(1e10)
s=o.r
s=s<1000?A.k.ac(s,0)+" Suns":C.fyP(s)+" Suns"
t=C.lU(A.bw,s,"Mass",1,0,new C.dJT(o),u/t)
u=B.a([new C.eX("Star (10)",!1,new C.dJU(o),n,A.bw,n),new C.eX("Cygnus X-1 (21)",!1,new C.dJV(o),n,A.bw,n),new C.eX("Milky Way core (4 million)",!1,new C.dJW(o),n,A.bw,n),new C.eX("M87 (6.5 billion)",!1,new C.dJX(o),n,A.bw,n)],m)
s=o.w
r=o.x
q=o.y
p=q?A.m7:D.H_
return C.oA(A.bw,w,'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',v,"BLACK HOLE",B.x(B.a([t,new C.hj(u,"LIKE",n),new C.hj(B.a([new C.eX("Glowing ring",s,new C.dJY(o),n,A.bw,n),new C.eX("Bent light",r,new C.dJZ(o),n,A.bw,n),new C.eX("Music",q,new C.dK_(o),p,A.bw,n),new C.j7(A.oi,"Clear",new C.dJS(o),A.c,n)],m),n,n)],m),A.m,n,A.e,A.Q,0,A.p))},
afl(d,e){var w=null
return B.E(B.x(B.a([B.d(d,w,w,w,w,w,w,D.fgf,w,w,w),A.bD,B.d(e,w,2,w,w,w,w,K.Aa,A.L,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),1)}}
C.baU.prototype={
a3(b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=b3.a,b1=b3.b
$.S()
w=B.I()
w.r=D.blv.gp(0)
b2.aP(new B.a3(0,0,0+b0,0+b1),w)
w=b0/2
v=b1*0.42
u=new B.t(w,v)
t=this.b
s=t.gb8W()*(0.9+0.35*Math.log(t.r)/2.302585092994046)
for(r=t.at,q=r.length,p=b2.a,o=s*s*5,n=s*2.2,m=0;m<r.length;r.length===q||(0,B.M)(r),++m){l=r[m]
k=l.a*b0
j=l.b*b1
i=new B.t(k,j)
if(t.x){k-=w
j-=v
h=Math.sqrt(k*k+j*j)
if(h>1){g=h+A.k.E(o/h,0,n)
i=new B.t(w+k/h*g,v+j/h*g)}}k=new B.ap(A.R,A.N,A.U,A.V,A.S)
k.r=A.c.j(0.6).gp(0)
f=k.G()
p.drawCircle(i.a,i.b,0.9,f)
f.delete()}if(t.x){b0=B.I()
b0.b=A.aa
b0.c=2
b0.r=A.c.j(0.25).gp(0)
b0.z=S.S6
b2.ad(u,s*1.5,b0)}if(t.w)for(b0=s*0.2,e=0;e<90;++e){d=e/90
b1=1.6+d*2.6
a0=s*b1
a1=1.4/Math.pow(b1,1.5)
a2=d*40
for(b1=1-d,r=0.25+0.6*b1,q=-(a0*0.55),b1=0.18*b1,a3=0;a3<4;++a3){a4=a2+a3*3.141592653589793/2+t.f*a1*2.2
a5=Math.sin(a4)>0
a6=Math.cos(a4)*a0
o=Math.sin(a4)
n=B.ar(A.tB,A.fr,d)
n.toString
k=Math.cos(a4)
$.S()
j=new B.ap(A.R,A.N,A.U,A.V,A.S)
g=a5?1:0.85
j.r=n.j(r*(0.4+(0.5+0.5*k)*0.6)*g).gp(0)
f=j.G()
p.drawCircle(w+a6,v+o*a0*0.28,1.3,f)
f.delete()
if(!a5&&t.x){o=Math.sin(-a4)
k=new B.ap(A.R,A.N,A.U,A.V,A.S)
k.r=n.j(b1).gp(0)
f=k.G()
p.drawCircle(w+a6*0.5,v+(q*Math.abs(o)*0.6-b0),1,f)
f.delete()}}}b0=s*1.25
$.S()
b1=B.I()
b1.sam(new B.c1(A.A,0.5,A.x,null,0,B.a([A.w,A.w.j(0)],x.O),D.cVr,null).aB(0,B.bX(u,b0)))
b2.ad(u,b0,b1)
b1=B.I()
b1.r=A.w.gp(0)
b2.ad(u,s,b1)
b1=B.I()
b1.b=A.aa
b1.c=1
b1.r=A.bw.j(0.55).gp(0)
b2.ad(u,s,b1)
for(b0=t.z,b1=b0.length,m=0;m<b0.length;b0.length===b1||(0,B.M)(b0),++m){a7=b0[m]
a0=s*a7.b
t=w+Math.cos(a7.a)*a0
r=v+Math.sin(a7.a)*a0*0.9
a8=1+A.k.E(3.5/a7.b,0,5)
a9=3*a8
q=-Math.sin(a7.a)*a9
o=Math.cos(a7.a)*a9
n=new B.ap(A.R,A.N,A.U,A.V,A.S)
n.c=4.2/Math.sqrt(a8)
n.d=A.bE
k=a7.d
n.r=k.j(A.k.E(a7.b/2,0.2,1)).gp(0)
f=n.G()
p.drawLine.apply(p,[t-q,r-o,t+q,r+o,f])
f.delete()
o=new B.ap(A.R,A.N,A.U,A.V,A.S)
o.r=k.j(0.2).gp(0)
o.z=I.pk
f=o.G()
p.drawCircle(t,r,6,f)
f.delete()}},
aw(d){return!0}}
C.af4.prototype={}
C.VC.prototype={
T(){var w=x.x,v=x.g
return new C.bky(new B.cB(null,x.z),new C.Pu(A.cZ),B.a([],w),A.I,A.I,B.a([],w),B.a([],v),B.a([],v),B.a([],v),B.a([],v),A.I,A.I,$,A.bF,0,B.a([],x.X),null,null)}}
C.bky.prototype={
Z(){this.a2()
this.a_A()
this.pa()},
a_A(){var w,v,u,t,s,r,q,p,o=this,n=new B.e9()
n.d3(5)
w=B.a([],x.x)
v=o.Q==="elliptical"?1800:2300
for(u=0;u<v;++u)if(o.Q==="elliptical"){t=Math.pow(n.ah(),1.6)
w.push(new C.af4(t,n.ah()*3.141592653589793*2,(n.ah()-0.5)*0.5*t,25+n.ah()*20))}else{t=Math.pow(n.ah(),0.8)
s=n.au(o.f)
r=n.ah()
q=s*(6.283185307179586/o.f)+t*o.r+(r-0.5)*(0.55-t*0.25)
r=o.w
if(r>0&&t<0.3*r+0.05){r=n.hh()?0:3.141592653589793
q=r+(n.ah()-0.5)*0.25}r=n.ah()
p=t<0.25?35+n.ah()*15:205+n.ah()*50
w.push(new C.af4(t,q,(r-0.5)*0.05*(1-t),p))}o.ay=w},
cy8(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
k.ch=!0
k.CW=D.ehf
k.cx=D.ehi
w=new B.e9()
w.d3(9)
v=k.cy
A.d.a9(v)
u=B.a([],x.x)
for(t=0;t<900;++t)u.push(new C.af4(Math.pow(w.ah(),0.8)*0.7,w.ah()*3.141592653589793*2,0,320+w.ah()*30))
A.d.v(v,u)
u=x.g
s=B.a([],u)
for(r=v.length,q=0;q<v.length;v.length===r||(0,B.M)(v),++q){p=v[q]
o=p.b
n=p.a
s.push(new B.t(Math.cos(o)*n,Math.sin(o)*n))}k.dx=s
s=B.a([],u)
for(r=v.length,q=0;q<v.length;v.length===r||(0,B.M)(v),++q){p=v[q]
o=p.b
n=p.a+0.2
s.push(new B.t(-Math.sin(o)*0.55/Math.sqrt(n),Math.cos(o)*0.55/Math.sqrt(n)))}k.fr=s
v=B.a([],u)
for(s=k.ay,r=x.S,s=B.d0(s,0,B.dA(900,"count",r),B.T(s).c),o=s.$ti,s=new B.bR(s,s.gL(0),o.k("bR<ak.E>")),o=o.k("ak.E");s.C();){n=s.d
if(n==null)n=o.a(n)
m=n.b
l=Math.cos(m)
n=n.a
v.push(new B.t(l*n,Math.sin(m)*n))}k.db=v
v=B.a([],u)
for(u=k.ay,u=B.d0(u,0,B.dA(900,"count",r),B.T(u).c),r=u.$ti,u=new B.bR(u,u.gL(0),r.k("bR<ak.E>")),r=r.k("ak.E");u.C();){s=u.d
if(s==null)s=r.a(s)
o=s.b
n=Math.sin(o)
s=s.a+0.2
v.push(new B.t(-n*0.6/Math.sqrt(s),Math.cos(o)*0.6/Math.sqrt(s)))}k.dy=v
k.fy=k.fx=A.I
E.dY(110,"",900,0.5,0.45,"sine")},
q7(d){var w,v,u,t,s,r,q,p=this
p.e.fu(0,d,p.y)
w=p.at
v=p.ax
p.at=w+d*0.25*v
if(p.ch){u=d*0.9*v
t=p.CW.aF(0,p.fx)
s=Math.max(0.25,t.gcH())
r=t.eT(0,s).aI(0,0.9/(s*s))
w=p.fy.a8(0,r.aI(0,u))
p.fy=w
v=p.cx.aF(0,r.aI(0,u))
p.cx=v
w=p.fx.a8(0,w.aI(0,u))
p.fx=w
v=p.CW.a8(0,v.aI(0,u))
p.CW=v
q=new C.e_x(u)
q.$6(p.db,p.dy,w,v,0.5,0.35)
q.$6(p.dx,p.fr,p.CW,p.fx,0.35,0.5)}},
B(d){var w,v,u,t,s=this,r=null,q=x.p,p=B.a([B.aH(r,r,r,r,D.rC,r,r,r,new C.e_n(s,d),r,r,r,r,"Share",r)],q),o=B.b4(r,r,r,new C.bge(s,r),A.ax),n=A.w.j(0.5),m=B.m(14),l=B.J(A.bz,A.r,1)
if(s.ch)w="Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy."
else if(s.x)w="Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together."
else w=s.Q==="elliptical"?"An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.":"The bright blue arms are where new stars are born. The yellow middle is older stars."
m=B.a([o,B.ao(8,B.p(r,B.d(w,r,r,r,r,r,r,A.Uq,r,r,r),A.f,r,r,new B.o(n,r,l,m,r,r,A.n),r,r,r,r,A.bT,r,r,r),r,r,10,10,r,r)],q)
l=B.a([],q)
for(v=0;v<3;++v){u=D.dcO[v]
o=s.Q===u.a&&!s.ch
l.push(new C.eX(u.b,o,new C.e_o(s,u),r,A.hb,r))}l.push(new C.eX("Collide",s.ch,new C.e_p(s),A.yG,A.c5,r))
o=B.a([new C.hj(l,"TYPE",r)],q)
if(s.Q!=="elliptical"&&!s.ch){n=s.f
n=C.lU(A.hb,""+n,"Arms",6,2,new C.e_q(s),n)
l=s.r
A.d.v(o,B.a([n,C.lU(A.hb,A.k.ac(l,1),"Winding",6,0.8,new C.e_r(s),l)],q))}n=s.as
o.push(C.lU(A.hb,""+A.k.V(n*90)+"\xb0","Tilt",1,0.15,new C.e_s(s),n))
n=s.ax
o.push(C.lU(A.hb,A.k.ac(n,1)+"x","Speed",4,0,new C.e_t(s),n))
n=s.x
l=s.z
w=s.y
t=w?A.m7:D.H_
o.push(new C.hj(B.a([new C.eX("Dark matter",n,new C.e_u(s),r,A.bw,r),new C.eX("You are here",l,new C.e_v(s),r,A.aU,r),new C.eX("Music",w,new C.e_w(s),t,A.hb,r)],q),r,r))
return C.oA(A.hb,p,'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',new B.ex(new B.an(A.a_,r,A.b1,A.t,m,r),s.d),"GALAXY",B.x(o,A.m,r,A.e,A.Q,0,A.p))}}
C.bge.prototype={
a3(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=a4.a,a2=a4.b
$.S()
w=B.I()
w.r=D.bnM.gp(0)
a3.aP(new B.a3(0,0,0+a1,0+a2),w)
v=new B.e9()
v.d3(3)
for(w=a3.a,u=0;u<90;++u){t=v.ah()
s=v.ah()
r=v.ah()
q=new B.ap(A.R,A.N,A.U,A.V,A.S)
q.r=A.c.j(0.15+v.ah()*0.4).gp(0)
p=q.G()
w.drawCircle(t*a1,s*a2,r*1.1+0.2,p)
p.delete()}o=new B.t(a1/2,a2*0.42)
n=Math.min(a1*0.46,a2*0.36)
a1=this.b
if(a1.x){a2=n*1.3
t=B.I()
t.sam(new B.c1(A.A,0.5,A.x,a0,0,B.a([A.aD.j(0.32),A.aD.j(0.12),A.K],x.O),G.a3b,a0).aB(0,B.bX(o,a2)))
a3.ad(o,a2,t)}m=new C.dfQ(a1.as)
a2=n*0.3
t=B.I()
t.sam(new B.c1(A.A,0.5,A.x,a0,0,B.a([A.fU.j(0.85),A.aC.j(0.3),A.K],x.O),a0,a0).aB(0,B.bX(o,a2)))
a3.ad(o,a2,t)
if(!a1.ch){l=B.I()
for(a2=a1.ay,t=a2.length,k=0;k<a2.length;a2.length===t||(0,B.M)(a2),++k){j=a2[k]
s=j.a
i=a1.x?1/(0.25+s*0.9):1/Math.pow(s+0.18,1.5)*0.35
r=a1.at
q=Math.min(i,6)
h=j.b
g=m.$6(Math.cos(h)*s,Math.sin(h)*s,j.c,o,r*q*0.5,n)
q=j.d
r=A.k.F(q,360)
l.r=new L.uC(1,r,q>200?0.45:0.55,1).lH().j(0.35+(1-s)*0.5).gp(0)
s=s<0.3?1.3:1
p=l.G()
w.drawCircle(g.a,g.b,s,p)
p.delete()}if(a1.z&&a1.Q!=="elliptical"){i=a1.x?1.1976047904191616:1/Math.pow(0.8300000000000001,1.5)*0.35
a1=a1.at
a2=Math.min(i,6)
g=m.$6(Math.cos(0.9)*0.65,Math.sin(0.9)*0.65,0,o,a1*a2*0.5,n)
$.S()
a2=B.I()
a2.b=A.aa
a2.c=1.6
a2.r=A.aU.gp(0)
a3.ad(g,9,a2)
f=B.fu(a0,a0,a0,a0,D.fd9,A.a3,A.bZ,a0,A.dA,A.bW)
f.el()
f.a3(a3,g.a8(0,new B.t(-f.b.c/2,12)))}}else{e=n*0.8
l=B.I()
for(a2=a1.db,t=a2.length,k=0;k<a2.length;a2.length===t||(0,B.M)(a2),++k){d=a2[k]
l.r=D.bp8.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.G()
w.drawCircle(s.a,s.b,1,p)
p.delete()}for(a2=a1.dx,t=a2.length,k=0;k<a2.length;a2.length===t||(0,B.M)(a2),++k){d=a2[k]
l.r=D.bjn.j(0.6).gp(0)
s=m.$6(d.a,d.b,0,o,0,e)
p=l.G()
w.drawCircle(s.a,s.b,1,p)
p.delete()}a2=a1.fx
a2=m.$6(a2.a,a2.b,0,o,0,e)
$.S()
w=B.I()
w.r=A.fU.gp(0)
a3.ad(a2,5,w)
a1=a1.CW
a1=m.$6(a1.a,a1.b,0,o,0,e)
w=B.I()
w.r=A.id.gp(0)
a3.ad(a1,5,w)}},
aw(d){return!0}}
C.We.prototype={
T(){return new C.blm(new B.cB(null,x.z),new C.Pu(A.cZ),$,A.bF,0,B.a([],x.X),null,null)}}
C.blm.prototype={
Z(){this.a2()
this.pa()},
q7(d){var w,v,u,t=this
t.e.fu(0,d,t.Q)
if(!t.x)return
w=t.f
v=t.y
if(w==="seasons")t.r=A.k.F(t.r+d*0.04*v,1)
else{w=A.k.F(t.w+d*0.05*v,1)
t.w=w
u=A.k.bh(w*4)
if(u!==A.k.bh(t.as))C.q1("bell",60+u*4,500,0.35)
t.as=u}},
gctL(){var w=this.r
if(w<0.25)return"Spring in the north, autumn in the south"
if(w<0.5)return"Summer in the north, winter in the south"
if(w<0.75)return"Autumn in the north, spring in the south"
return"Winter in the north, summer in the south"},
gck2(){var w=this.w
if(w<0.03||w>0.97)return"New Moon"
if(w<0.22)return"Waxing crescent"
if(w<0.28)return"First quarter"
if(w<0.47)return"Waxing gibbous"
if(w<0.53)return"Full Moon"
if(w<0.72)return"Waning gibbous"
if(w<0.78)return"Last quarter"
return"Waning crescent"},
B(d){var w,v,u,t,s,r=this,q=null,p=x.p,o=B.a([B.aH(q,q,q,q,D.rC,q,q,q,new C.etZ(r,d),q,q,q,q,"Share",q)],p),n=B.E(new B.ex(B.b4(q,q,q,new C.brE(r,q),A.fF),r.d),1)
if(r.f==="seasons")w=r.gctL()
else{w=r.gck2()
v=A.k.ao(A.k.E(0.5-0.5*Math.cos(r.w*2*3.141592653589793),0,1)*100,1)
u=r.w
if(u>0.45&&u<0.55||u<0.05||u>0.95)u="  \xb7  Spring tides (the biggest)"
else{if(!(u>0.2&&u<0.3))u=u>0.7&&u<0.8
else u=!0
u=u?"  \xb7  Neap tides (the smallest)":""}u=w+"  \xb7  "+v+"% lit"+u
w=u}w=B.x(B.a([n,B.p(q,B.d(w,q,q,q,q,q,q,A4.UF,A.L,q,q),A.f,q,q,q,q,q,q,q,M.ajX,q,q,1/0)],p),A.m,q,A.e,A.i,0,A.p)
n=r.f
v=r.x
u=v?"Pause":"Play"
v=v?A1.yP:A.i1
t=r.Q
s=t?A.m7:D.H_
s=B.a([new C.hj(B.a([new C.eX("Seasons",n==="seasons",new C.eu_(r),A.Cv,A.bt,q),new C.eX("Moon phases",n==="moon",new C.eu0(r),A.w7,A.bt,q),new C.eX(u,!1,new C.eu1(r),v,A.bt,q),new C.eX("Music",t,new C.eu2(r),s,A.bt,q)],p),q,q)],p)
if(r.f==="seasons"){n=r.r
n=C.lU(A.bt,D.dc5[A.o.F(A.k.bh(n*12),12)],"Month",1,0,new C.eu3(r),n)
v=r.z
A.d.v(s,B.a([n,C.lU(A.bt,A.k.ac(v,1)+"\xb0","Tilt",90,0,new C.eu4(r),v)],p))}else{p=r.w
s.push(C.lU(A.bt,""+(A.k.bh(p*29.5)+1),"Day of month",1,0,new C.eu5(r),p))}p=r.y
s.push(C.lU(A.bt,A.k.ac(p,1)+"x","Speed",4,0.2,new C.eu6(r),p))
return C.oA(A.bt,o,"SEASONS: Earth is tipped over by 23.4\xb0. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0\xb0: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.",w,"SEASONS & MOON",B.x(s,A.m,q,A.e,A.Q,0,A.p))}}
C.brE.prototype={
a3(b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=c0.a,b6=c0.b,b7=$.S(),b8=B.I()
b8.r=D.B9.gp(0)
b9.aP(new B.a3(0,0,0+b5,0+b6),b8)
w=new B.e9()
w.d3(4)
for(b8=b9.a,v=0;v<70;++v){u=w.ah()
t=w.ah()
s=w.ah()
r=new B.ap(A.R,A.N,A.U,A.V,A.S)
r.r=A.c.j(0.2+w.ah()*0.4).gp(0)
q=r.G()
b8.drawCircle(u*b5,t*b6,s+0.3,q)
q.delete()}u=b5/2
t=b6/2
p=new B.t(u,t)
s=this.b
if(s.f==="seasons"){o=b5*0.36
n=b6*0.3
u=B.bJ(p,n*2,o*2)
t=B.I()
t.b=A.aa
t.c=1
t.r=A.aZ.gp(0)
b9.dO(u,t)
t=B.I()
t.sam(D.erH.aB(0,B.bX(p,34)))
b9.ad(p,22,t)
m=s.r*2*3.141592653589793
l=p.a8(0,new B.t(Math.cos(m)*o,Math.sin(m)*n))
k=Math.min(b5,b6)*0.075
j=s.z*3.141592653589793/180
i=p.aF(0,l).eT(0,p.aF(0,l).gcH())
J.bm(b8.save())
b8.translate(l.a,l.b)
s=B.I()
s.r=D.blr.gp(0)
b9.ad(A.I,k,s)
J.bm(b8.save())
b7=new B.aF(b7.r,A.ag,b4,b4,B.a([],x.v))
b7.D(new B.jE(B.bX(A.I,k)))
b9.mE(0,b7)
b7=i.aI(0,k).aI(0,0.35)
s=k*1.1
b6=B.I()
b6.sam(D.erQ.aB(0,B.bX(A.I,s)))
b9.ad(b7,s,b6)
b8.restore()
b6=-j
s=Math.sin(b6)
b6=-Math.cos(b6)
h=new B.t(s,b6)
b7=new B.t(-s,-b6).aI(0,k).aI(0,1.7)
b5=h.aI(0,k).aI(0,1.7)
t=B.I()
t.c=2
t.r=A.cs.gp(0)
b9.bo(b7,b5,t)
t=h.aI(0,k).aI(0,1.7)
b5=B.I()
b5.r=A.cs.gp(0)
b9.ad(t,3.2,b5)
b6=s*i.a+b6*i.b
g=-b6
b8.restore()
if(Math.abs(g)<0.12)b5="equinox: day and night equal"
else b5=g*Math.sin(j)*0+b6>0?"north leans to Sun":"south leans to Sun"
f=B.fu(b4,b4,b4,b4,B.cS(b4,b4,b4,b4,b4,b4,b4,b4,b4,D.aTI,b5),A.a3,A.bZ,b4,A.dA,A.bW)
f.el()
f.a3(b9,l.a8(0,new B.t(-f.b.c/2,k+12)))}else{e=Math.min(b5*0.34,b6*0.32)
r=B.I()
r.b=A.aa
r.c=1
r.r=A.aZ.gp(0)
b9.ad(p,e,r)
for(r=b6*0.2,v=0;v<9;++v){d=r+v*b6*0.075
a0=new B.ap(A.R,A.N,A.U,A.V,A.S)
a0.r=A.aU.j(0.6).gp(0)
a0.c=2
q=a0.G()
b8.drawLine.apply(b8,[10,d,40,d,q])
q.delete()}k=e*0.25
r=B.I()
r.sam(new B.c1(new B.dh(-0.5,0),1.1,A.x,b4,0,B.a([D.bgr,D.ahP],x.O),D.d2N,b4).aB(0,B.bX(p,k)))
b9.ad(p,k,r)
m=3.141592653589793+s.w*2*3.141592653589793
a1=p.a8(0,new B.t(Math.cos(m)*e,Math.sin(m)*e))
a2=e*0.12
r=B.I()
r.r=D.bdf.gp(0)
b9.ad(a1,a2,r)
J.bm(b8.save())
b7=b7.r
r=x.v
d=new B.aF(b7,A.ag,b4,b4,B.a([],r))
d.D(new B.jE(B.bX(a1,a2)))
b9.mE(0,d)
d=a1.a-a2
a0=a1.b-a2
a3=B.I()
a3.r=A.bO.gp(0)
b9.aP(new B.a3(d,a0,d+a2,a0+a2*2),a3)
b8.restore()
a4=a1.aF(0,p).eT(0,a1.aF(0,p).gcH())
for(d=a4.a,a0=a4.b,a3=k*0.28,a5=0;a5<2;++a5){a6=F.auQ[a5]
a7=new B.ap(A.R,A.N,A.U,A.V,A.S)
a7.r=A.aQ.j(0.45).gp(0)
a7.z=A.lJ
q=a7.G()
b8.drawCircle(u+d*a6*k*1.05,t+a0*a6*k*1.05,a3,q)
q.delete()}u=b5-b5*0.17
t=b6*0.18
a8=new B.t(u,t)
a9=Math.min(b5,b6)*0.1
b6=B.I()
b6.r=D.bda.gp(0)
b9.ad(a8,a9,b6)
b0=0.5-0.5*Math.cos(s.w*2*3.141592653589793)
J.bm(b8.save())
b6=new B.aF(b7,A.ag,b4,b4,B.a([],r))
b6.D(new B.jE(B.bX(a8,a9)))
b9.mE(0,b6)
s=s.w
b1=new B.aF(b7,A.ag,b4,b4,B.a([],r))
b2=s<0.5?1:-1
b5=t-a9
b1.D(new B.aX(u,b5))
b6=b2>0
b1.aDo(new B.t(u,t+a9),b6,new B.aQ(a9,a9))
if(b0<0.5)b6=b2<0
b1.aDo(new B.t(u,b5),b6,new B.aQ(a9*Math.abs(1-2*b0),a9))
b6=B.I()
b6.r=A.bO.gp(0)
b9.aG(b1,b6)
b8.restore()
b8=B.I()
b8.b=A.aa
b8.c=1
b8.r=A.aZ.gp(0)
b9.ad(a8,a9,b8)
b3=B.fu(b4,b4,b4,b4,D.fda,A.a3,A.bZ,b4,A.dA,A.bW)
b3.el()
b3.a3(b9,a8.a8(0,new B.t(-b3.b.c/2,a9+6)))}},
aw(d){return!0}}
C.aLX.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.bxY.prototype={
q(){var w,v,u
for(w=this.iL$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iK$
w===$&&B.c()
w.q()
this.bwr()}}
C.aMj.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.by3.prototype={
q(){var w,v,u
for(w=this.iL$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iK$
w===$&&B.c()
w.q()
this.bwP()}}
C.aMQ.prototype={
q(){var w=this,v=w.aa$
if(v!=null)v.a6(0,w.gbE())
w.aa$=null
w.a1()},
aW(){this.b6()
this.b4()
this.bF()}}
C.byc.prototype={
q(){var w,v,u
for(w=this.iL$,v=w.length,u=0;u<w.length;w.length===v||(0,B.M)(w),++u)w[u].a4(0)
w=this.iK$
w===$&&B.c()
w.q()
this.bxm()}}
var z=a.updateTypes(["R(tE)","~()","R(a4K)","aA<~>()","R(CE)","H(tE,H)","K(K,tE)","R(CA)","R(ZD)","R(abI)","cu(abn)","R(vf)","R(a3r)","R(ns)","R(abW)","Wc()","Wr()","Wd()","WC()","UP()","af9(Y,H)","ae1(Y,H)","Vq()","R(mJ)","n(eg)","R(aeY)","R(a0T)","R(CO)","R(acb)","R(ae4)","~(a8<@,@>)","H(H,qW)","H(H,CE)","n(qW)","WE()","qW?(CE)","R(qW)","v(n,a0G)","R(Qi)","R(aaB)","H(CA,CA)","UK()","~(xe,n,t,u,K)","~(n,tE)","~(AI)","K(Q_)","ND(Y)","V9(Y,bu<K>,bu<K>)","R(Q_)","Vy()","UL()","Vp()","W7()","Wh()","WB()","W6()","~(n)","VR(Y)","R(abm)","VE()","Wq()","VF()","UJ()","VC()","Wi()","We()","a8B()","WJ()","~(qW,ai<n>,H)"])
C.bSU.prototype={
$0(){var w,v,u,t=this.a
if(t.a)return-1
w=this.b
v=w.gR(w)
u=B.ef(v.gdM(v))
if(!w.C())t.a=!0
return u},
$S:91}
C.fBb.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+23}
C.fqL.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gI(d.e.split(". "))+"."},
$S:z+24}
C.fxV.prototype={
$1(d){var w
if(!this.a.M0(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fxW.prototype={
$1(d){return d.x},
$S:z+0}
C.fB8.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fB9.prototype={
$1(d){var w
if(!this.a.M0(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fBa.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.ecU.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ecV.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.z(this.b,this.c))},
$S:0}
C.ecW.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd1(v).Q
v.toString
w.me(v,A.dU,A.iz)}},
$S:9}
C.ed6.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a9(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.ed7.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.ed2.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.ed0.prototype={
$2(d,e){var w=this.a
w.r.push(B.cK(B.dE(0,0,0,d,0,0),new C.ed1(w,this.b,e)))},
$S:1847}
C.ed1.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.ed3.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gWy().akn(0,u[1],u[2],u[3])
u[4].bQ(0,new C.ecZ(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
E.dY(700+w.e*120,"",80,0,0.25,"square")
v.m(new C.ed_(w.a,v,w.f,w.r))},
$S:0}
C.ecZ.prototype={
$2(d,e){var w=this
switch(d){case"volts":w.a.e=e
break
case"level":w.a.f=e
break
case"ohms":w.a.r=e
break
case"on":w.a.w=e>0
break}},
$S:184}
C.ed_.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.E(A.k.bh(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.ed4.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gWy().al5(t,u[1],s,u[3])
E.dY(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new C.ecY(w.a,v,w.e,w.f))},
$S:0}
C.ecY.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.E(A.k.bh(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.ed5.prototype={
$0(){E.dY(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new C.ecX(w,this.b))},
$S:0}
C.ecX.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.eda.prototype={
$0(){var w=this.a
return w.m(new C.ed9(w))},
$S:0}
C.ed9.prototype={
$0(){return this.a.at=!0},
$S:0}
C.edb.prototype={
$0(){var w=this.a
return w.m(new C.ed8(w))},
$S:0}
C.ed8.prototype={
$0(){return this.a.at=!1},
$S:0}
C.edc.prototype={
$0(){var w=this.a
w.f.saX(0,this.b)
w.Pt()},
$S:0}
C.edd.prototype={
$0(){return this.a.YB(this.b)},
$S:0}
C.ede.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.Pt():w.aWx()},
$S:2}
C.edf.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.Pt():w.aWx()},
$S:0}
C.er9.prototype={
$2(d,e){return d+e},
$S:1848}
C.ert.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ers(w,d))},
$S:1849}
C.ers.prototype={
$0(){var w=B.aK(J.r(this.b,"unlocked"))
w=w==null?null:A.k.N(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.eru.prototype={
$0(){},
$S:0}
C.erv.prototype={
$0(){},
$S:0}
C.erb.prototype={
$0(){return this.a.m(new C.era(this.b,this.c))},
$S:0}
C.era.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.er0.prototype={
$1(d){return this.a.cx===d},
$S:34}
C.er1.prototype={
$1(d){return this.a.cx=d},
$S:29}
C.er2.prototype={
$1(d){return this.a.cy===d},
$S:34}
C.er3.prototype={
$1(d){return this.a.cy=d},
$S:29}
C.er4.prototype={
$1(d){return this.a.db===d},
$S:34}
C.er5.prototype={
$1(d){return this.a.db=d},
$S:29}
C.er6.prototype={
$1(d){return this.a.dx.t(0,d)},
$S:34}
C.er7.prototype={
$1(d){var w=this.a.dx
return w.t(0,d)?w.W(0,d):w.M(0,d)},
$S:29}
C.er8.prototype={
$0(){var w=this.a
return w.m(w.gax5())},
$S:0}
C.eqZ.prototype={
$1(d){return this.a.$1(!0)},
$S:81}
C.er_.prototype={
$1(d){return this.a.$1(!1)},
$S:124}
C.eqY.prototype={
$1(d){return this.a.$1(!1)},
$S:169}
C.erm.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.au(e.b,e.d)
o.ch=n
n=B.b4(p,p,p,new C.bhY(o,p),n)
w=this.b
v=C.bAw("WORLD",w.a,w.c)
u=C.bAw("GRAVITY",B.w(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.k.V(t*100)
t=t<0.25?A.cs:A.bj
t=C.bAw("FUEL",""+s+"%",t)
s=o.r.b
r=A.k.V(s*100)
s=s>D.CS[o.db].d?A.cs:A.c
q=x.p
s=B.a([v,u,t,C.bAw("SPEED",""+r,s)],q)
if(o.dx.t(0,0))s.push(C.bAw("HEIGHT",""+A.k.V(A.k.E(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ao(p,B.B(s,A.m,p,A.iG,A.i,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bFi(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.rF[w].a+".":"You landed on every world!"
v=B.a([new C.j7(A.oj,"Again",new C.erh(o),A.c,p),new C.j7(A.p6,"Rebuild",new C.eri(o),A.aU,p)],q)
if(o.d+1<7)v.push(new C.j7(A.jS,"Next world",new C.erj(o),A.bj,p))
n.push(C.hp5("Perfect landing!",w,A.bj,v))}if(o.as==="crashed")n.push(C.hp5("Crash!",o.at,A.cs,B.a([new C.j7(A.oj,"Try again",new C.erk(o),A.bj,p),new C.j7(A.p6,"Rebuild",new C.erl(o),A.aU,p)],q)))
return new B.an(A.a_,p,A.b1,A.t,n,p)},
$S:66}
C.erh.prototype={
$0(){var w=this.a
return w.m(w.gax5())},
$S:0}
C.eri.prototype={
$0(){var w=this.a
return w.m(new C.ere(w))},
$S:0}
C.ere.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.erj.prototype={
$0(){var w=this.a
return w.m(new C.erd(w))},
$S:0}
C.erd.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.erk.prototype={
$0(){var w=this.a
return w.m(w.gax5())},
$S:0}
C.erl.prototype={
$0(){var w=this.a
return w.m(new C.erc(w))},
$S:0}
C.erc.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.ern.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new C.erg(v,w))},
$S:0}
C.erg.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.ero.prototype={
$1(d){return this.a.y=d},
$S:8}
C.erp.prototype={
$1(d){return this.a.Q=d},
$S:8}
C.erq.prototype={
$1(d){return this.a.z=d},
$S:8}
C.err.prototype={
$0(){var w=this.a
return w.m(new C.erf(w))},
$S:0}
C.erf.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dKs.prototype={
$0(){var w=0,v=B.j(x.P),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=$.hkl
if(q==null)q=$.hkl=C.cKw()
w=3
return B.b(B.iP(B.a([q,$.r3().cS9("assets/data/three.min.js")],x.aJ),x.K),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kO(0,B.cP(J.r(s,1)))
q.m(new C.dKr(q,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:49}
C.dKr.prototype={
$0(){return this.a.d=x.e3.a(J.r(this.b,0))},
$S:0}
C.dK4.prototype={
$0(){return this.a.bWU(B.aU(J.r(this.b,"group")))},
$S:0}
C.dK5.prototype={
$1(d){return A.a.aU(A.o.fX(A.o.E(A.k.V(d*255),0,255),16),2,"0")},
$S:304}
C.dKt.prototype={
$0(){return C.a8A("kick",0.25)},
$S:0}
C.dK6.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dK7.prototype={
$1(d){return d.a===this.a},
$S:z+12}
C.dK8.prototype={
$0(){return C.a8A("kick",0.5)},
$S:0}
C.dK9.prototype={
$0(){return E.dY(1300+this.a.R8.au(900),"",40,0,0.2,"square")},
$S:0}
C.dKb.prototype={
$0(){var w,v,u=this.b
if(u==="skin"){u=this.a
w=u.ch
if(w===2)w=1
else w=w===1?0:2
u.ch=w}else{w=this.a
v=w.ay
if(v.t(0,u))v.W(0,u)
else{v.M(0,u)
if(w.ch===2)w.ch=1}if(v.a===0&&w.ch===0)w.ch=2
u=w}if(u.cx!=null&&!A.d.b3(u.d.e,new C.dKa(u)))u.cx=null
u.go=0},
$S:0}
C.dKa.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.ayP(d)},
$S:z+12}
C.dK1.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
C.dK2.prototype={
$0(){var w=this.a
return w.m(w.gc6s())},
$S:0}
C.dK3.prototype={
$0(){return this.a.ai_(null)},
$S:0}
C.dKi.prototype={
$0(){var w=this.a.as
return w==null?null:w.f4(0,B.G(["t","shot"],x.N,x.A))},
$S:0}
C.dKj.prototype={
$0(){return this.a.cCl(this.b.a)},
$S:0}
C.dKk.prototype={
$0(){return this.a.ai_(this.b)},
$S:0}
C.dKl.prototype={
$1(d){var w=this.a
return w.m(new C.dKh(w,d))},
$S:6}
C.dKh.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.dKm.prototype={
$0(){var w=this.a
return w.m(new C.dKg(w,this.b))},
$S:0}
C.dKg.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.dKn.prototype={
$0(){var w=this.a
return w.m(new C.dKf(w))},
$S:0}
C.dKf.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.dKo.prototype={
$0(){var w=this.a
return w.m(new C.dKe(w))},
$S:0}
C.dKe.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.f4(0,B.G(["t","reset"],x.N,x.A))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.L7},
$S:0}
C.dKp.prototype={
$0(){var w=this.a
return w.m(new C.dKd(w))},
$S:0}
C.dKd.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.aZd()
else w.p2=null},
$S:0}
C.dKq.prototype={
$0(){var w=this.a
return w.m(new C.dKc(w))},
$S:0}
C.dKc.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
C.c4l.prototype={
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
$S:324}
C.c4m.prototype={
$1(d){var w=new B.rV([],[]).pN(d.data,!0)
if(x.f.b(w)&&J.r(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:605}
C.fkh.prototype={
$1(d){var w=J.a5(d)
return w.h(d,0)&&w.h(d,1)},
$S:221}
C.fki.prototype={
$1(d){var w=J.a5(d)
return w.h(d,0)||w.h(d,1)},
$S:221}
C.fkj.prototype={
$1(d){var w=J.a5(d)
return w.h(d,0)!==w.h(d,1)},
$S:221}
C.fkq.prototype={
$1(d){return!J.r(d,0)},
$S:221}
C.fkr.prototype={
$1(d){var w=J.a5(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:221}
C.fks.prototype={
$1(d){var w=J.a5(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:221}
C.dM7.prototype={
$1(d){return this.a.atN(0)},
$S:9}
C.dLM.prototype={
$0(){var w=this.b
return this.a.cx=new B.N(w,B.i5Y(),B.T(w).k("N<1,H>")).fH(0)},
$S:0}
C.dLP.prototype={
$1(d){return""+d},
$S:78}
C.dM8.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dLK.prototype={
$1(d){return this.a.atN(this.b)},
$S:9}
C.dLL.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.axA(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mA(0,d,a1.m5(0.15,0.3))
u=a1.mA(0,d,a1.m5(0.15,0.62))
t=a1.mA(0,"and",a1.m5(0.48,0.46))
s=a1.mA(0,a0,a1.m5(0.82,0.46))
a1=t.a
w.push(new C.ns(v.a,a1,0))
w.push(new C.ns(u.a,a1,1))
w.push(new C.ns(a1,s.a,0))
break
case 1:v=a1.mA(0,d,a1.m5(0.12,0.25))
u=a1.mA(0,d,a1.m5(0.12,0.65))
r=a1.mA(0,"xor",a1.m5(0.46,0.25))
q=a1.mA(0,"and",a1.m5(0.46,0.65))
p=a1.axz(0,a0,a1.m5(0.82,0.25),0)
o=a1.axz(0,a0,a1.m5(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.ns(a1,n,0))
m=u.a
w.push(new C.ns(m,n,1))
l=q.a
w.push(new C.ns(a1,l,0))
w.push(new C.ns(m,l,1))
w.push(new C.ns(n,p.a,0))
w.push(new C.ns(l,o.a,0))
break
case 2:k=a1.mA(0,"clock",a1.m5(0.15,0.4))
j=a1.mA(0,"not",a1.m5(0.45,0.65))
s=a1.mA(0,a0,a1.m5(0.82,0.3))
i=a1.mA(0,"buzzer",a1.m5(0.82,0.65))
a1=k.a
w.push(new C.ns(a1,s.a,0))
n=j.a
w.push(new C.ns(a1,n,0))
w.push(new C.ns(n,i.a,0))
break
default:h=a1.mA(0,d,a1.m5(0.12,0.25))
g=a1.mA(0,d,a1.m5(0.12,0.7))
f=a1.mA(0,"nor",a1.m5(0.5,0.25))
e=a1.mA(0,"nor",a1.m5(0.5,0.7))
s=a1.mA(0,a0,a1.m5(0.86,0.25))
a1=f.a
w.push(new C.ns(g.a,a1,0))
n=e.a
w.push(new C.ns(n,a1,1))
w.push(new C.ns(h.a,n,0))
w.push(new C.ns(a1,n,1))
w.push(new C.ns(a1,s.a,0))}},
$S:0}
C.dLQ.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.axA(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.CA(p,"switch",new B.t(0.14*q.a,r*q.b),0))}o.mA(0,w.e,o.m5(0.86,0.5))},
$S:0}
C.dLF.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dLG.prototype={
$2(d,e){return A.k.aK(d.c.b,e.c.b)},
$S:z+40}
C.dLH.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dLI.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dLJ.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.adh(this.c)
if(v.ax)C.Ja("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gI(w)
v.CW=!1
if(v.ax)E.dY(140,"",250,0,0.3,"square")}},
$S:0}
C.dLR.prototype={
$0(){},
$S:0}
C.dLS.prototype={
$0(){return A.d.cE(this.a.e,this.b)},
$S:0}
C.dLT.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dLO.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bs(w.e,new C.dLN(v))
w.cy=null},
$S:0}
C.dLN.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+13}
C.dLE.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mA(0,this.b,new B.t(w.x.a*(0.3+v.ah()*0.4),w.x.b*(0.2+v.ah()*0.6))).a},
$S:0}
C.dM1.prototype={
$0(){var w=this.a
return w.m(new C.dM0(w))},
$S:0}
C.dM0.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dM2.prototype={
$2(d,e){var w=null,v=this.a,u=new B.au(e.b,e.d)
v.x=u
return B.aB(A.c8,B.jF(B.b4(w,w,w,new C.bc_(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dLW(v),w,w,w,new C.dLX(v),new C.dLY(v),new C.dLZ(v),w,w,w,w,w,w,w,w,w,w,new C.dM_(v),w,w,w,!1,A.a4)},
$S:37}
C.dM_.prototype={
$1(d){return this.a.c8f(d.b)},
$S:67}
C.dLY.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cgN(u)
if(t!=null){v.as=t
v.at=u
return}w=v.aym(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aF(0,u)}},
$S:50}
C.dLZ.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.t(A.k.E(w.a+u.Q.a,46,u.x.a-46),A.k.E(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:21}
C.dLX.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c_v(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bs(v,new C.dLU(w))
u=t.as
u.toString
v.push(new C.ns(u,w.a,w.b))
B.ku()}}t.z=t.as=null},
$S:38}
C.dLU.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+13}
C.dLW.prototype={
$1(d){return this.a.awo(d.b)},
$S:330}
C.dM3.prototype={
$0(){return this.a.bB7(this.b.a)},
$S:0}
C.dM4.prototype={
$0(){return this.a.atN(this.b.a)},
$S:0}
C.dM5.prototype={
$0(){var w=this.a
return w.m(new C.dLV(w))},
$S:0}
C.dLV.prototype={
$0(){var w=this.a
w.axA(0)
w.ay=null},
$S:0}
C.dM6.prototype={
$0(){return this.a.cy5(this.b)},
$S:0}
C.cRs.prototype={
$0(){var w=this,v=null,u=B.fu(v,v,v,v,B.cS(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a3,A.bZ,v,A.dA,A.bW)
u.el()
return u},
$S:243}
C.dRY.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dRX.prototype={
$0(){return this.a.d=null},
$S:0}
C.dS_.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c1i()},
$S:123}
C.dRZ.prototype={
$0(){return B.a4(this.a,!1).ic()},
$S:0}
C.fkI.prototype={
$0(){return D.e9C},
$S:z+34}
C.fkJ.prototype={
$0(){return D.dIS},
$S:z+22}
C.fkK.prototype={
$0(){return D.dFO},
$S:z+41}
C.fkL.prototype={
$0(){return D.e91},
$S:z+66}
C.fkM.prototype={
$0(){return D.dRT},
$S:z+15}
C.fkN.prototype={
$0(){return D.e8K},
$S:z+16}
C.fkO.prototype={
$0(){return D.e6M},
$S:z+17}
C.fkP.prototype={
$0(){return D.e90},
$S:z+18}
C.fkQ.prototype={
$0(){return D.dI1},
$S:z+19}
C.f0n.prototype={
$2(d,e){return new C.af9($.bF_()[e],new C.f0m(e,this.a),null)},
$S:z+20}
C.f0m.prototype={
$0(){var w=this.a,v=F.aGb.h(0,$.bF_()[w].a)
$.ask=v==null?"music":v
B.a4(this.b,!1).cc(B.dX(new C.f0k(w),!1,null,x.H))},
$S:0}
C.f0k.prototype={
$1(d){return $.bF_()[this.a].e.$0()},
$S:39}
C.f0o.prototype={
$2(d,e){return new C.ae1(D.ayN[e],new C.f0l(this.a,e),null)},
$S:z+21}
C.f0l.prototype={
$0(){return this.a.d.$1(D.ayN[this.b])},
$S:0}
C.f03.prototype={
$0(){return this.a.as=!0},
$S:0}
C.f02.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f01.prototype={
$1(d){var w=this
return new B.dZ(new C.f00(w.a,w.b,w.c,w.d),null)},
$S:20}
C.f00.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=x.l,a1=B.aJ(a2,d,a0).w
a0=B.aJ(a2,d,a0).w
w=x.p
v=B.a([D.fzi,A.au,D.fG4,A.ae],w)
for(u=e.d,t=e.a,s=x.k,r=e.b,q=e.c,p=0;p<3;p=o){o=p+1
n=new B.aQ(12,12)
m=new B.aQ(12,12)
m=B.a([new B.bA(1,A.bc,B.aM(d,A.Y,!1,d,!0,A.t,d,B.aN(),r[p],d,d,d,d,d,2,new B.e3(d,d,d,d,d,d,d,d,d,d,"Title",d,I.E5,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new B.b5(4,new B.bj(n,n,n,n),A.a0),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.aj,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.jl,!0,A.a3,d,A.ao,d,d,d,d),d),A.ac,new B.bA(2,A.bc,B.aM(d,A.Y,!1,d,!0,A.t,d,B.aN(),q[p],d,d,d,d,d,2,new B.e3(d,d,d,d,d,d,d,d,d,d,"Small line",d,I.E5,d,d,d,!0,!0,!1,d,d,d,d,d,d,!0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,"",d,d,!0,A.c.j(0.06),d,d,d,d,d,d,d,new B.b5(4,new B.bj(m,m,m,m),A.a0),!0,d,d,d,d),A.y,!0,d,!0,d,!1,d,A.aj,d,d,d,d,d,d,d,28,d,1,d,d,!1,"\u2022",d,d,d,d,d,!1,d,d,!1,d,!0,d,A.a9,d,d,d,d,d,d,d,d,d,d,d,A.jl,!0,A.a3,d,A.ao,d,d,d,d),d)],w)
n=B.a([],w)
for(l=0;l<30;++l){k=D.dsX[l]
j=new B.aQ(12,12)
if(u[p].A(0,k)){i=t.w
if(i===$){i=B.C(t.a.c.d,s)
t.w=i}h=A.d.gI(i).j(0.3)}else h=A.c.j(0.06)
if(u[p].A(0,k)){i=t.w
if(i===$){i=B.C(t.a.c.d,s)
t.w=i}g=A.d.gI(i)}else g=A.bz
f=new B.ay(g,u[p].A(0,k)?1.8:1,A.r,-1)
n.push(B.aB(d,B.p(d,B.X(k,u[p].A(0,k)?A.c:A.aR,d,d,d,22),A.f,d,d,new B.o(h,d,new B.bK(f,f,f,f),new B.bj(j,j,j,j),d,d,A.n),d,d,d,A.fB,d,d,d,42),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.f_Z(a3,p,u,k),d,d,d,d,d,d,!1,A.a4))}A.d.v(v,B.a([new B.y("SLAB "+o,d,D.foL,d,d,d,d,d,d,d,d,d),A.am,new B.cd(A.aM,A.e,A.i,A.m,d,A.p,d,0,m,d),A.O,new B.a7(d,44,B.cr(n,d,d,d,d,A.aM,!1),d),A.aA],w))}v.push(B.bH(A.wX,d,new C.f0_(t,r,q,u,a2),d))
return new B.D(new B.Q(0,0,0,a1.f.d),B.bl(!0,new B.cU(new B.aZ(0,1/0,0,a0.a.b*0.86),B.cr(v,d,A3.yf,d,d,A.ah,!0),d),!0,!1,A.af,!0,!0),d)},
$S:108}
C.f_Z.prototype={
$0(){var w=this
return w.a.$1(new C.f_Y(w.b,w.c,w.d))},
$S:0}
C.f_Y.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.f0_.prototype={
$0(){var w=this,v=w.a
v.m(new C.f_X(v,w.b,w.c,w.d))
B.a4(w.e,!1).O(null)},
$S:0}
C.f_X.prototype={
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
C.f0b.prototype={
$0(){var w=this.a
return w.m(new C.f0a(w))},
$S:0}
C.f0a.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.f0c.prototype={
$0(){return C.yT(this.b,this.a.f,"scene")},
$S:0}
C.f0d.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ar(A.d.gI(u),A.d.gak(u),0.4)
u.toString
w=this.a.gZY().x
w===$&&B.c()
return B.c2(v,new B.o(v,v,v,v,v,new B.c1(D.aZX,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.c0],x.O),v,v),A.n),A.bg)},
$S:328}
C.f0e.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.at(B.eN(A.A,B.ca(new B.h5(B.a([u.guh(),u.gZY()],x.dS)),new C.f09(u,this.b,v),w),A.f,A.e2),w,w,w)},
$S:224}
C.f09.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.guh().x
r===$&&B.c()
w=r<0.9?1:1-C.brY(r,0.9,0.98)
v=s.gZY().x
v===$&&B.c()
u=A.dx.av(0,v)
switch(s.gaxB().a){case 0:s=s.bAj(t.b,r,u,t.c)
break
case 1:s=s.bR1(t.b,r,u,t.c)
break
case 2:s=s.cCO(t.b,r,u,t.c)
break
case 3:s=s.bDe(t.b,r,u,t.c)
break
case 4:s=s.bGy(t.b,r,u,t.c)
break
case 5:s=s.c8g(t.b,r,u,t.c)
break
default:s=null}return B.d9(s,w)},
$S:222}
C.f0f.prototype={
$2(d,e){var w=B.avS(this.b),v=this.c.d,u=B.ar(A.d.gI(v),A.d.gak(v),0.4)
u.toString
v=B.ar(A.d.gI(v),A.d.gak(v),0.4)
v.toString
v=w.cLx(u,A.bz,v,3.5)
u=this.a
w=u.guh().x
w===$&&B.c()
return B.aan(B.kO(null,null,null,1,0,new C.f08(u),A.k.E(w,0,1)),v)},
$S:1852}
C.f08.prototype={
$1(d){var w=this.a
w.guh().sp(0,d)
if(w.as)w.m(new C.f04(w))},
$S:6}
C.f04.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f0g.prototype={
$0(){var w=this.a
w.guh().sp(0,0)
w.ael()},
$S:0}
C.f0h.prototype={
$1(d){var w=this.a
w.m(new C.f07(w,d))
if(w.as)w.ael()},
$S:6}
C.f07.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f0i.prototype={
$0(){var w=this.a
w.m(new C.f06(w,this.b))
w.guh().sp(0,0)
if(w.as)w.ael()},
$S:0}
C.f06.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.f0j.prototype={
$0(){var w=this.a
return w.m(new C.f05(w,this.b))},
$S:0}
C.f05.prototype={
$0(){var w=B.C(this.b,x.k)
return this.a.w=w},
$S:0}
C.f_V.prototype={
$2(d,e){return A.k.aK(d.a,e.a)},
$S:1853}
C.f_W.prototype={
$1(d){return d.b},
$S:1854}
C.dmE.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.dmF.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.dmB.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.dmC.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dmD.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dmG.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dmH.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dmI.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dmJ.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.dmK.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.dmL.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.dmM.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.dmN.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.dmO.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+14}
C.equ.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eqj.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.eql.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gX(e.b),97)},
$S:z+31}
C.eqm.prototype={
$2(d,e){return d+A.o.F(A.a.gX(e.a),31)+A.o.F(A.a.gX(e.b),17)},
$S:z+32}
C.eqp.prototype={
$1(d){var w=D.mQ.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+33}
C.eqq.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.T(q),o=x.dg,n=B.C(new B.ee(new B.cQ(new B.Z(q,new C.eqr(d),p.k("Z<1>")),new C.eqs(r),p.k("cQ<1,qW?>")),o),o.k("L.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aH(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.M)(n),++v){u=n[v]
if(w.length>=6)return
t=B.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+68}
C.eqr.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eqs.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.eqn.prototype={
$1(d){return D.mQ.h(0,d.b).c===D.xe},
$S:z+36}
C.eqo.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eqU.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.E((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.vk(0,u)
w.a6N(A.o.ao(v,1000))},
$S:9}
C.eqt.prototype={
$0(){},
$S:0}
C.eqf.prototype={
$0(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$$0)
case 6:e.ar("String","ngmy_core_reaction_lab_v1",s.a.d.ag())
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
C.eqw.prototype={
$1(d){var w=null,v=this.a.b
return B.bl(!0,B.x(B.a([A.O,B.dF(!1,w,w,w,!0,w,w,w,!0,w,w,B.X(D.mQ.h(0,v).b,D.mQ.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fRy,w,B.d(D.mQ.h(0,v).a,w,w,w,w,w,w,A.fS,w,w,w),w,w,w),B.dF(!1,w,w,w,!0,w,w,w,!0,w,w,Z.apF,w,w,w,w,new C.eqv(d),!1,w,w,w,w,w,w,w,D.fIU,w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:25}
C.eqv.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.eqy.prototype={
$1(d){var w,v,u=null,t=B.aJ(d,u,x.l).w,s=B.a([D.ekA],x.p)
for(w=0;w<6;++w){v=D.aza[w]
s.push(B.dF(!1,u,u,u,!0,u,u,u,!0,u,u,D.bYG,u,u,u,u,new C.eqx(d,v),!1,u,u,u,u,u,new B.y(v.b,u,A.lN,u,u,u,u,u,u,u,u,u),u,new B.y(v.a,u,A.fS,u,u,u,u,u,u,u,u,u),u,u,u))}return B.bl(!0,new B.cU(new B.aZ(0,1/0,0,t.a.b*0.7),B.cr(s,u,D.bD3,u,u,A.ah,!0),u),!0,!1,A.af,!0,!0)},
$S:25}
C.eqx.prototype={
$0(){B.a4(this.a,!1).O(this.b)
return null},
$S:0}
C.eqi.prototype={
$1(d){var w=null
return B.en(B.a([B.bN(!1,A.di,w,w,!0,w,w,new C.eqg(d),w,w),B.bN(!1,A.Ai,w,w,!0,w,w,new C.eqh(d),w,w)],x.p),w,w,F.ng,D.fGf,w,w,w,w,D.fJb,w)},
$S:18}
C.eqg.prototype={
$0(){B.a4(this.a,!1).O(!1)
return null},
$S:0}
C.eqh.prototype={
$0(){B.a4(this.a,!1).O(!0)
return null},
$S:0}
C.eqS.prototype={
$0(){var w=this.a
return w.m(new C.eqR(w))},
$S:0}
C.eqR.prototype={
$0(){return this.a.r=!1},
$S:0}
C.eqT.prototype={
$2(d,e){var w,v,u,t=null,s=new B.au(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.mr(new C.eqI(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.b9p:t
v=B.a([B.b4(u,t,t,new C.bhW(w,v,new C.eqJ(r),new C.eqK(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ao(t,B.e0(B.ca(w,new C.eqL(r),t),!0,t),t,t,10,10,6,t))
if(r.ax)v.push(r.bId())
return B.aB(A.c8,B.jF(new B.an(A.a_,t,A.b1,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.eqM(r),t,r.gci5(),t,new C.eqN(r),new C.eqO(r),new C.eqP(r),t,t,t,t,t,t,t,t,t,t,new C.eqQ(r),t,t,t,!1,A.a4)},
$S:37}
C.eqI.prototype={
$0(){return this.a.acl(this.b)},
$S:0}
C.eqQ.prototype={
$1(d){return this.a.cAC(d.b)},
$S:67}
C.eqO.prototype={
$1(d){return this.a.ci6(d.b)},
$S:50}
C.eqP.prototype={
$1(d){return this.a.ci7(d.b)},
$S:21}
C.eqN.prototype={
$1(d){return this.a.b1C()},
$S:38}
C.eqM.prototype={
$1(d){return this.a.ad1(d.b)},
$S:330}
C.eqJ.prototype={
$0(){return this.a.z},
$S:693}
C.eqK.prototype={
$0(){return this.a.Q},
$S:733}
C.eqL.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bMt()
if(p.length===0)return A.bJ
w=A.w.j(0.55)
v=B.m(14)
u=B.J(A.bz,A.r,1)
t=B.a([D.fDE,A.cL],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.M)(p),++r)t.push(new B.y(p[r],q,D.fnn,q,q,q,q,A.a1,q,2,q,q))
return B.p(q,B.x(t,A.E,q,A.e,A.Q,0,A.p),A.f,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.hg,q,q,q)},
$S:62}
C.eqk.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.m(12),t=B.J(e.j(0.6),A.r,1),s=x.p
return new B.D(A.ec,B.B(B.a([B.p(w,B.X(d,e,w,w,w,21),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bd,B.E(B.x(B.a([B.d(f,w,w,w,w,w,w,A4.UF,w,w,w),A.bD,B.d(g,w,w,w,w,w,w,F.UO,w,w,w)],s),A.E,w,A.e,A.i,0,A.p),1)],s),A.E,w,A.e,A.i,0,w,w),w)},
$S:1856}
C.eqE.prototype={
$0(){var w=this.a.c
w.toString
return B.a4(w,!1).ic()},
$S:0}
C.eqF.prototype={
$0(){var w=this.a
return w.m(new C.eqD(w))},
$S:0}
C.eqD.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eqG.prototype={
$0(){var w=this.a
return w.m(new C.eqC(w))},
$S:0}
C.eqC.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.eqH.prototype={
$0(){var w=this.a
return w.m(new C.eqB(w))},
$S:0}
C.eqB.prototype={
$0(){return this.a.r=!0},
$S:0}
C.eqA.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.mQ.gdV(D.mQ),w=w.gaf(w);w.C();){v=w.gR(w)
if(v.b.c===e)p.push(v.a)}w=B.d(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.M)(p),++r)u.push(s.cvo(p[r]))
return new B.D(H.aje,B.x(B.a([new B.D(Af.akU,w,q),B.B(u,A.m,q,A.e,A.i,0,q,q)],v),A.E,q,A.e,A.i,0,A.p),q)},
$S:z+37}
C.eqz.prototype={
$0(){return this.a.c8m(this.b)},
$S:0}
C.dmA.prototype={
$0(){var w=this,v=null,u=B.fu(v,v,v,v,B.cS(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a3,A.bZ,v,A.dA,A.bW)
u.el()
return u},
$S:243}
C.eCA.prototype={
$1(d){var w,v,u,t,s,r,q,p=this.a,o=d.a,n=A.k.E((o-p.x.a)/1e6,0,0.05)
p.x=d
p.y=A.o.ao(o,1000)
for(o=p.f,w=o.length,v=1-1.2*n,u=0;u<w;++u){t=o[u]
s=t.a
r=t.b
q=r.a
r=r.b
t.a=new B.t(s.a+q*n,s.b+r*n)
t.b=new B.t(q*v,r*v)}A.d.bs(o,new C.eCy(p))
if(p.c!=null)o=o.length!==0||p.ax!=null
else o=!1
if(o)p.m(new C.eCz())},
$S:9}
C.eCy.prototype={
$1(d){return this.a.y-d.e>d.f},
$S:z+38}
C.eCz.prototype={
$0(){},
$S:0}
C.eCb.prototype={
$0(){},
$S:0}
C.eCa.prototype={
$0(){},
$S:0}
C.eCk.prototype={
$0(){return C.yT(this.b,this.a.d,"spark-painter")},
$S:0}
C.eCm.prototype={
$1(d){return this.a.aZU(0,d.b)},
$S:50}
C.eCq.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.ax
if(t!=null){w=t.a
w=w.length===0||A.d.gak(w).aF(0,u).gcH()>2.5}else w=!1
if(w)t.a.push(u)
v.aSI(u)
v.cbo(u)
return null},
$S:21}
C.eCl.prototype={
$1(d){return this.a.aZT()},
$S:38}
C.eCr.prototype={
$1(d){return this.a.aZU(0,d.b)},
$S:23}
C.eCs.prototype={
$1(d){return this.a.aZT()},
$S:67}
C.eCt.prototype={
$0(){var w=this.a
return w.m(new C.eCj(w,this.b))},
$S:0}
C.eCj.prototype={
$0(){return this.a.z=this.b.a},
$S:0}
C.eCu.prototype={
$0(){var w=this.a
return w.m(new C.eCi(w))},
$S:0}
C.eCi.prototype={
$0(){return this.a.Q=-1},
$S:0}
C.eCv.prototype={
$0(){var w=this.a
return w.m(new C.eCh(w,this.b))},
$S:0}
C.eCh.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eCw.prototype={
$1(d){var w=this.a
return w.m(new C.eCg(w,d))},
$S:6}
C.eCg.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eCx.prototype={
$0(){var w=this.a
return w.m(new C.eCf(w))},
$S:0}
C.eCf.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eCn.prototype={
$0(){var w=this.a
return w.m(new C.eCe(w))},
$S:0}
C.eCe.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.eCo.prototype={
$0(){var w=this.a
return w.m(new C.eCd(w))},
$S:0}
C.eCd.prototype={
$0(){var w=this.a
A.d.a9(w.e)
A.d.a9(w.f)},
$S:0}
C.eCp.prototype={
$0(){var w=this.a
return w.m(new C.eCc(w,this.b))},
$S:0}
C.eCc.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bNG.prototype={
$1(d){return d.r<=0},
$S:z+39}
C.bNR.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bNM.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bNS.prototype={
$1(d){return this.a.M0(d)&&!d.x},
$S:z+0}
C.bNT.prototype={
$2(d,e){return Math.max(d,this.a.aB7(e))},
$S:z+6}
C.bNV.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bNW(w))},
$S:z+5}
C.bNW.prototype={
$0(){return this.a.a},
$S:91}
C.bNU.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:74}
C.bNX.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bNY(w))},
$S:z+5}
C.bNY.prototype={
$0(){return this.a.a},
$S:91}
C.bNI.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bNJ(w))},
$S:z+5}
C.bNJ.prototype={
$0(){return this.a.a},
$S:91}
C.bNH.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:74}
C.bNK.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bNL(w))},
$S:z+5}
C.bNL.prototype={
$0(){return this.a.a},
$S:91}
C.bNF.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bNZ.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bNN.prototype={
$1(d){return d!==this.b&&this.a.aHj(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bNQ.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bNP.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bNO.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bIi.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bIj.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.cpQ.prototype={
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
$S:184}
C.fMX.prototype={
$1(d){var w
$.S()
w=B.I()
w.r=d.gp(0)
return w},
$S:1857}
C.fMZ.prototype={
$2(d,e){var w
$.S()
w=B.I()
w.b=A.aa
w.c=e
w.r=d.gp(0)
w.d=A.bE
return w},
$S:1858}
C.fN_.prototype={
$5(d,e,f,g,h){return B.bt(new B.a3(d,e,d+f,e+g),new B.aQ(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1859}
C.fMY.prototype={
$3(d,e,f){var w
$.S()
w=B.I()
w.sam(new B.a9(A.b4,A.b7,A.x,B.a([e,f],x.O),null,null).aB(0,d))
return w},
$S:1860}
C.bHX.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.bHY.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bHW(w))},
$S:0}
C.bHW.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bHZ.prototype={
$0(){return B.a([],x.ey)},
$S:1861}
C.bI_.prototype={
$1(d){return this.a.bD(d).a>15e5},
$S:357}
C.bI0.prototype={
$0(){var w,v,u
J.bF8(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.CG(v))if(C.h5G(v.b))w.b15(v)
else w.a_Y(v)
else{u=w.a.c.bdQ(v)
w.aex(u==null?"The "+$.qq().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bHV.prototype={
$1(d){return new B.dZ(new C.bHT(this.a,this.b),null)},
$S:20}
C.bHT.prototype={
$2(d,e){var w=null,v=this.b,u=new C.bHU(this.a,v,e),t=$.qq(),s=v.b,r=B.d("Resize the "+t.h(0,s).b,w,w,w,w,w,w,A.k4,w,w,w),q=B.aH(w,w,w,w,D.bPa,w,w,w,new C.bHP(u,v),w,w,w,w,w,w),p=A.k.E(v.ch,1,2.6),o=x.p
return B.bl(!0,new B.D(A.vW,B.x(B.a([r,A.au,D.fSC,A.W,B.B(B.a([q,B.E(B.kO(t.h(0,s).d,w,w,2.6,1,u,p),1),B.aH(w,w,w,w,D.bVY,w,w,w,new C.bHQ(u,v),w,w,w,w,w,w)],o),A.m,w,A.e,A.i,0,w,w),B.B(B.a([B.d(""+A.k.V(v.ch*100)+"%",w,w,w,w,w,w,B.l(w,w,t.h(0,s).d,w,w,w,w,w,w,w,w,w,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.b0,B.bN(!1,D.fvE,w,w,!0,w,w,new C.bHR(u),w,w),B.bN(!1,A.wX,w,w,!0,w,w,new C.bHS(d),w,w)],o),A.m,w,A.e,A.i,0,w,w)],o),A.E,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:87}
C.bHU.prototype={
$1(d){var w=this.a
w.m(new C.bHN(this.b,d))
this.c.$1(new C.bHO())
w.a.toString},
$S:6}
C.bHN.prototype={
$0(){return this.a.ch=A.k.E(this.b,1,2.6)},
$S:0}
C.bHO.prototype={
$0(){},
$S:0}
C.bHP.prototype={
$0(){return this.a.$1(this.b.ch-0.2)},
$S:0}
C.bHQ.prototype={
$0(){return this.a.$1(this.b.ch+0.2)},
$S:0}
C.bHR.prototype={
$0(){return this.a.$1(1)},
$S:0}
C.bHS.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.bIf.prototype={
$2(d,e){var w
if(d==="short"){E.dY(1800,"",120,0,0.55,"noise")
E.dY(200,"",160,2.2,0.4,"saw")
B.fJ()
w=this.a
if(w.c!=null)w.aex("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){E.dY(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.aex("\u26a0 Overloaded! The "+$.qq().h(0,e.b).b+" can only give about "+A.k.ac(w.a.c.zQ(e),2)+" amps but your gadgets are asking for "+A.k.ac(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.aex("Burnt out! "+e.ay)
E.dY(140,"",320,0,0.6,"noise")
E.dY(900,"",160,1.5,0.35,"square")}},
$S:z+43}
C.bIg.prototype={
$0(){},
$S:0}
C.bHq.prototype={
$0(){},
$S:0}
C.bIh.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bIe.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.au(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=B.a([B.aB(A.c8,B.b4(p,p,p,new C.aiZ(w,v,u,t,s,r==null?A.jh:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bI8(o),new C.bI9(o),new C.bIa(o),p,p,p,p,p,p,p,p,p,p,new C.bIb(o),p,p,p,!1,A.a4)],q)
if(o.a.c.a.length===0)n.push(D.b8F)
w=o.Q
if(w!=null){v=B.m(14)
u=B.J(A.cR,A.r,1)
n.push(B.ao(p,B.aB(p,B.p(p,B.B(B.a([D.ftL,B.E(B.d(w,p,p,p,p,p,p,D.flD,p,p,p),1)],q),A.E,p,A.e,A.i,0,p,p),A.f,p,p,new B.o(D.beC,p,u,v,p,p,A.n),p,p,p,p,A.no,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bIc(o),p,p,p,p,p,p,!1,A.a4),p,p,10,10,8,p))}if(o.e!=null)n.push(B.ao(8,o.b_0(B.B(B.a([D.bFb,new C.j7(A.GJ,"Cut wire",new C.bId(o),A.cs,p)],q),A.m,p,A.e,A.i,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(B.ao(8,o.ciF(w),p,p,10,10,p,p))}return B.jF(new B.an(A.a_,p,A.b1,A.t,n,p),A.t,p)},
$S:478}
C.bI9.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.b85(s)
if(r!=null){t.m(new C.bI6(t,r,d))
return}w=t.b1L(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new B.t(v*u.a,w.d*u.b).aF(0,s)
t.m(new C.bI7(t,w))}},
$S:50}
C.bI6.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
C.bI7.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bIa.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new C.bI4(w,d))
else if(w.w!=null)w.m(new C.bI5(w,d.b.a8(0,w.x)))},
$S:21}
C.bI4.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
C.bI5.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.k.E(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.k.E(w.b/v.y.b,0.08,0.92)},
$S:0}
C.bI8.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.b85(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.al5(u.a,u.b,v.a,v.b)!=null)E.dY(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.aev()},
$S:38}
C.bIb.prototype={
$1(d){var w=this.a,v=d.b,u=w.b1L(v)
if(u!=null){w.m(new C.bI2(w,u))
if(D.me.aj(0,u.b))w.ctg(u)
w.a.toString
return}w.m(new C.bI3(w,w.cFR(v)))},
$S:67}
C.bI2.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
E.dY(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
E.dY(200,"",70,0,0.2,"saw")}},
$S:0}
C.bI3.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
C.bIc.prototype={
$0(){var w=this.a
return w.m(new C.bI1(w))},
$S:0}
C.bI1.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bId.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
E.dY(300,"",50,0,0.35,"noise")
w.aev()},
$S:0}
C.bHr.prototype={
$0(){return this.a.bqe(this.b)},
$S:0}
C.bHK.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.B(B.a([B.d(d,w,w,w,w,w,w,D.ffP,w,w,w),B.E(B.kO(this.b.d,w,w,g,h,new C.bHM(this.a,f),A.k.E(e,h,g)),1)],x.p),A.m,w,A.e,A.i,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1862}
C.bHM.prototype={
$1(d){var w=this.a
w.m(new C.bHL(this.b,d))
w.a.toString},
$S:6}
C.bHL.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bHx.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
E.dY(260,"",70,0,0.35,"noise")
w.aev()},
$S:0}
C.bHy.prototype={
$0(){var w=this.a
return w.m(new C.bHw(w))},
$S:0}
C.bHw.prototype={
$0(){return this.a.d=null},
$S:0}
C.bHz.prototype={
$0(){this.a.m(new C.bHv(this.b,this.c))
E.dY(900,"",40,0,0.3,"noise")},
$S:0}
C.bHv.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bHC.prototype={
$0(){return this.a.b15(this.b)},
$S:0}
C.bHD.prototype={
$0(){return this.a.a_Y(this.b)},
$S:0}
C.bHE.prototype={
$0(){return this.a.a1B(this.b)},
$S:0}
C.bHF.prototype={
$0(){var w=this.a
w.m(new C.bHu(this.b,this.c))
w.a.toString},
$S:0}
C.bHu.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bHG.prototype={
$0(){var w=this.a
w.m(new C.bHt(this.b,this.c))
w.a.toString},
$S:0}
C.bHt.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bHH.prototype={
$0(){var w=this.a
w.m(new C.bHs(this.b,this.c))
w.a.toString},
$S:0}
C.bHs.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bHI.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bHJ.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bHA.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bHB.prototype={
$1(d){return this.a.f=d},
$S:6}
C.fkt.prototype={
$1(d){return d.aGY("bulb")},
$S:z+2}
C.fku.prototype={
$1(d){return d.pX(0,"switch")&&d.aGY("bulb")},
$S:z+2}
C.fkv.prototype={
$1(d){return A.d.b3(d.a,new C.fkg())},
$S:z+2}
C.fkg.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.fkw.prototype={
$1(d){return d.pX(0,"resistor")&&A.d.b3(d.a,new C.fkf())},
$S:z+2}
C.fkf.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fkx.prototype={
$1(d){return!d.pX(0,"battery")&&d.aGY("bulb")},
$S:z+2}
C.fkk.prototype={
$1(d){return A.d.b3(d.a,new C.fke())},
$S:z+2}
C.fke.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fkl.prototype={
$1(d){return A.d.b3(d.a,new C.fkd())},
$S:z+2}
C.fkd.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fkm.prototype={
$1(d){return A.d.b3(d.a,new C.fkc())},
$S:z+2}
C.fkc.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fkn.prototype={
$1(d){var w=d.a
return A.d.b3(w,new C.fka())&&A.d.b3(w,new C.fkb())&&d.pX(0,"buck")},
$S:z+2}
C.fka.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fkb.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fko.prototype={
$1(d){var w=d.a
return A.d.b3(w,new C.fk8())&&A.d.b3(w,new C.fk9())},
$S:z+2}
C.fk8.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fk9.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fkp.prototype={
$1(d){return A.d.b3(d.a,new C.fk7())},
$S:z+2}
C.fk7.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.dWw.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a9(0)
w.v(0,v.b)},
$S:0}
C.dWF.prototype={
$1(d){var w=this.a.d
return w.aHj(d)&&w.CG(d)},
$S:z+0}
C.dWG.prototype={
$1(d){return d.x},
$S:z+0}
C.dWH.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.dWI.prototype={
$0(){},
$S:0}
C.dWv.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.m(22),o=x.p,n=B.a([D.fL9,A.au,D.fvz,A.W],o)
for(w=this.a,v=0;v<19;++v){u=D.QV[v]
t=A.c.j(0.06)
s=new B.aQ(14,14)
r=new B.ay(A.bz,1,A.r,-1)
n.push(B.aB(q,B.p(q,B.x(B.a([new B.y(u.a,q,A.iK,q,q,q,q,q,q,q,q,q),A.bD,new B.y(u.b,q,D.fmn,q,q,q,q,A.a1,q,3,q,q)],o),A.E,q,A.e,A.i,0,A.p),A.f,q,q,new B.o(t,q,new B.bK(r,r,r,r),new B.bj(s,s,s,s),q,q,A.n),q,q,q,A.ct,A.bf,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dWu(w,d,u),q,q,q,q,q,q,!1,A.a4))}return B.eS(q,F.lw,new B.D(A.bQ,new B.a7(340,q,B.cr(n,q,q,q,q,A.ah,!0),q),q),q,q,q,q,A.d8,q,new B.b7(p,A.a0),q)},
$S:48}
C.dWu.prototype={
$0(){B.a4(this.b,!1).O(null)
var w=this.a
w.m(new C.dWt(w,this.c))
E.dY(800,"",120,-0.5,0.3,"square")},
$S:0}
C.dWt.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bj_()},
$S:0}
C.dWr.prototype={
$1(d){return new C.VR(this.a.d,null)},
$S:z+57}
C.dWs.prototype={
$0(){},
$S:0}
C.dWE.prototype={
$1(d){return new B.dZ(new C.dWD(this.a),null)},
$S:20}
C.dWD.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.aia(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.t(0,k),f=g?A.bj:A.aQ
k=B.aJ(d,m,x.l).w
w=l.r
v=x.p
u=B.a([B.B(B.a([D.fIl,A.b0,B.d(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.i,0,m,m),A.O,B.bx(B.m(4),B.ll(A.bz,m,m,5,m,w.a/11,new B.m6(f,x.B)),A.ap),A.ae],v)
if(h)u.push(D.fyG)
else{h=f.j(0.1)
t=B.m(14)
s=B.J(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.d(r+" Now: "+i.a,m,m,m,m,m,m,Aa.JY,m,m,m)
q=B.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,F.E6,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.p(m,B.x(B.a([r,A.au,q,new B.bM(A.a8,m,m,B.bN(!1,B.d(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.H,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,new C.dWB(l,e),m,m),m)],v),A.E,m,A.e,A.i,0,A.p),A.f,m,m,new B.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bf,m,m,m))}u.push(A.W)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aQ(12,12)
n=new B.ay(o===l.f?f.j(0.6):A.ds,1,A.r,-1)
if(w.t(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
r=j[o]
q=w.t(0,o)?A.aB:A.c
u.push(B.aB(m,B.p(m,new B.cd(A.aM,A.e,A.i,A.m,m,A.p,m,0,B.a([new B.y(s,m,A.a9F,m,m,m,m,m,m,m,m,m),A.at,new B.bA(1,A.bc,new B.y(r.a,m,new B.F(!0,q,m,m,m,m,13,A.H,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m),m)],v),m),A.f,m,m,new B.o(h,m,new B.bK(n,n,n,n),new B.bj(t,t,t,t),m,m,A.n),m,m,m,A.eH,A.no,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.dWC(l,o,e),m,m,m,m,m,m,!1,A.a4))}return B.bl(!0,new B.cU(new B.aZ(0,1/0,0,k.a.b*0.75),B.cr(u,m,A3.yf,m,m,A.ah,!0),m),!0,!1,A.af,!0,!0)},
$S:87}
C.dWB.prototype={
$0(){var w=this.a
w.m(new C.dWz(w))
this.b.$1(new C.dWA())
w.F8()},
$S:0}
C.dWz.prototype={
$0(){var w=this.a
$.aia()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.dWA.prototype={
$0(){},
$S:0}
C.dWC.prototype={
$0(){var w=this.a
w.m(new C.dWx(w,this.b))
this.c.$1(new C.dWy())
w.F8()},
$S:0}
C.dWx.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.dWy.prototype={
$0(){},
$S:0}
C.dWK.prototype={
$0(){return B.a4(this.a,!1).ic()},
$S:0}
C.dWL.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.mo("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a4(t.b,!1).cc(B.dX(new C.dWJ(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.dWJ.prototype={
$1(d){B.lx("construction")
return Ai.hJz()},
$S:z+46}
C.dWM.prototype={
$0(){return C.hvu(this.a,"ELECTRONICS LAB",this.b,A.aQ)},
$S:0}
C.dWN.prototype={
$0(){var w=this.a
return w.m(w.d.gcXl())},
$S:0}
C.dWO.prototype={
$0(){var w=this.a,v=w.d
w.m(v.gBw(v))
w.F8()},
$S:0}
C.cGV.prototype={
$2(d,e){var w=null,v=this.a.gaxG().x
v===$&&B.c()
return B.b4(w,w,w,new C.b9R(v,w),A.ax)},
$S:63}
C.cGU.prototype={
$3(d,e,f){var w=new B.aF($.S().r,A.ag,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.D(new B.aX(v,t))
w.D(new B.c4(v,u,v+e,u))
w.D(new B.c4(v,u,v,u+e))
w.D(new B.c4(v,u,v-e,u))
w.D(new B.c4(v,u,v,t))
w.D(new B.bs())
t=B.I()
t.r=A.c.j(f).gp(0)
this.a.aG(w,t)},
$S:435}
C.fRO.prototype={
$3(d,e,f){return new C.V9(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+47}
C.fRP.prototype={
$4(d,e,f,g){var w=x.Y
return new B.d2(e,!1,B.ir(A.A,g,null,new B.bf(B.cJ(A.cu,e,null),new B.bp(0.85,1,w),w.k("bf<bO.T>"))),null)},
$C:"$4",
$R:4,
$S:32}
C.dSV.prototype={
$0(){return B.a4(this.a,!1).ic()},
$S:0}
C.dSU.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.bZW(o):q.bCh(o,p),m=x.p
p=B.a([B.oU(new B.mY(n,new B.c0(p,x.aC)),A.q7,B.qm(),A.b6,A.b6,new C.dSS())],m)
n=t.d
if(n){w=A.k.F(q.gSa(),12)<4
v=w?150:96
u=B.m(16)
m=B.a([A.at],m)
if(w)m.push(D.bEX)
else m.push(A.b0)
m.push(B.p(s,s,A.f,s,s,new B.o(w?A.bj:A.av,s,s,s,s,s,A.a6),s,9,s,s,s,s,s,9))
m.push(A.at)
p.push(B.ao(s,B.at(B.dd(s,B.B(m,A.m,s,A.e,A.i,0,s,s),s,s,A.et,new B.o(A.w,s,s,u,s,s,A.n),A.mC,s,28,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.v4)p.push(B.ao(s,B.at(B.p(s,s,A.f,s,s,A.Lc,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.wK)p.push(B.ao(s,B.p(s,s,A.f,s,s,A.Lc,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ao(6,B.aB(s,B.at(B.p(s,s,A.f,s,s,new B.o(A.c.j(0.75),s,s,B.m(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dST(q),s,s,s,s,s,s,!1,A.a4),s,s,0,0,s,s))
return B.bx(r,new B.an(A.a_,s,A.b1,A.t,p,s),A.ap)},
$S:286}
C.dSS.prototype={
$2(d,e){var w=x.Y
return new B.d2(e,!1,B.ir(A.A,d,null,new B.bf(e,new B.bp(0.92,1,w),w.k("bf<bO.T>"))),null)},
$S:348}
C.dST.prototype={
$0(){var w=this.a
return w.m(new C.dSR(w))},
$S:0}
C.dSR.prototype={
$0(){return this.a.e=null},
$S:0}
C.dSQ.prototype={
$0(){var w=this.a
return w.m(new C.dSP(w,this.b))},
$S:0}
C.dSP.prototype={
$0(){return this.a.e=A.d.cu(F.kk,this.b)},
$S:0}
C.dSO.prototype={
$0(){var w=this.a
return w.m(new C.dSN(w))},
$S:0}
C.dSN.prototype={
$0(){return this.a.e=0},
$S:0}
C.dSJ.prototype={
$0(){var w=this.a
return w.m(new C.dSI(w))},
$S:0}
C.dSI.prototype={
$0(){return this.a.e=null},
$S:0}
C.dSM.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=B.m(o?20:8),m=A.w.j(0.55),l=x.p
m=B.p(p,B.B(B.a([D.fQX,A.at,B.E(B.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eL,p,p,p,D.fsB,p,p,p),1),B.d(A.a.aU(A.o.u(B.de(new B.V(Date.now(),0,!1))),2,"0")+":"+A.a.aU(A.o.u(B.fN(new B.V(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.qK,p,p,p)],l),A.m,p,A.e,A.i,0,p,p),A.f,m,p,p,p,24,p,p,A.l3,p,p,p)
w=this.a
v=B.a([B.b4(p,p,p,new C.bw5(w.gSa(),this.c.d,p),A.ax)],l)
o=w.e
if(o!=null){u=B.m(10)
t=B.J(A.aZ,A.r,1)
s=B.m(10)
o=B.p(p,B.B(B.a([B.aB(p,B.p(p,p,A.f,p,p,A.acU,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dSL(w),p,p,p,p,p,p,!1,A.a4),A.em,B.p(p,p,A.f,p,p,A.ad_,p,12,p,p,p,p,p,12),A.em,B.p(p,p,A.f,p,p,D.b3Y,p,12,p,p,p,p,p,12),A.at,B.E(B.d(F.kk[o].a,p,1,A.a1,p,p,p,A.a9z,p,p,p),1)],l),A.m,p,A.e,A.i,0,p,p),A.f,A.cp,p,p,p,24,p,p,A.fC,p,p,p)
r=w.e
r.toString
v.push(B.bT(0,new B.D(D.bBB,B.p(p,B.bx(s,B.x(B.a([o,B.E(B.b4(p,p,p,new C.aeR(r,w.gSa(),p),A.fF),1)],l),A.m,p,A.e,A.i,0,A.p),A.ap),A.f,p,p,new B.o(A.w,p,t,u,D.dpc,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=B.m(18)
t=B.J(A.aZ,A.r,1)
s=B.a([],l)
for(q=0;q<8;++q)s.push(new B.D(A.jz,w.avE(F.kk[q],34,!1),p))
v.push(B.ao(8,B.at(B.p(p,B.B(s,A.m,p,A.e,A.Q,0,p,p),A.f,p,p,new B.o(o,p,t,u,p,p,A.n),p,p,p,p,A.lB,p,p,p),p,p,p),p,p,0,0,p,p))
return B.bx(n,B.p(p,B.x(B.a([m,B.E(new B.an(A.a_,p,A.b1,A.t,v,p),1)],l),A.m,p,A.e,A.i,0,A.p),A.f,T.YB,p,p,p,p,p,p,p,p,p,p),A.ap)},
$S:286}
C.dSL.prototype={
$0(){var w=this.a
return w.m(new C.dSK(w))},
$S:0}
C.dSK.prototype={
$0(){return this.a.e=null},
$S:0}
C.fkY.prototype={
$0(){return D.eb5},
$S:z+67}
C.fkZ.prototype={
$0(){return D.dJp},
$S:z+49}
C.fl_.prototype={
$0(){return D.dG0},
$S:z+50}
C.fl0.prototype={
$0(){return D.dIQ},
$S:z+51}
C.fl1.prototype={
$0(){return D.dNI},
$S:z+52}
C.fl2.prototype={
$0(){return D.e6P},
$S:z+53}
C.fl3.prototype={
$0(){return D.e9_},
$S:z+54}
C.fl4.prototype={
$0(){return D.dN2},
$S:z+55}
C.cjJ.prototype={
$0(){return B.a4(this.a,!1).ic()},
$S:0}
C.cjK.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=(e.b-14)/2,k=x.p,j=B.a([],k)
for(w=$.hz7(),v=l*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aQ(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ac(0,A.G,p.j(0.4),A.dq,16)],t)
n=A.c.j(0.85)
j.push(B.aB(m,B.p(m,new B.an(A.a_,m,A.ab,A.t,B.a([new B.cN(m,-6,-6,m,m,m,new B.y(r.c,m,Ag.JW,m,m,m,m,m,m,m,m,m),m),new B.bM(A.lS,m,m,B.x(B.a([new B.y(r.a,m,D.frc,m,m,m,m,m,m,m,m,m),A.cL,new B.y(r.b,m,new B.F(!0,n,m,m,m,m,12,A.a7,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m)],k),A.E,m,A.e,A.Q,0,A.p),m)],k),m),A.f,m,m,new B.o(m,m,m,new B.bj(q,q,q,q),p,new B.a9(A.ay,A.aE,A.x,o,m,m),A.n),m,v,m,m,A.bB,m,m,l),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.cjI(d,r),m,m,m,m,m,m,!1,A.a4))}return B.bW(A.bC,j,A.bq,m,14,14)},
$S:170}
C.cjI.prototype={
$0(){return B.a4(this.a,!1).cc(B.dX(new C.cjH(this.b),!1,null,x.H))},
$S:0}
C.cjH.prototype={
$1(d){return this.a.f.$0()},
$S:39}
C.eMZ.prototype={
$0(){var w=this.a
return w.w=w.d[w.b5b(w.f)]},
$S:0}
C.eMV.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cZ.ah()*7},
$S:0}
C.eMU.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bO(0,A.c9)
w.w=""},
$S:0}
C.eMX.prototype={
$0(){var w=this.a
return w.m(new C.eMW(w,this.b))},
$S:0}
C.eMW.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cE(w,this.b)},
$S:0}
C.eMY.prototype={
$1(d){return this.a.b_t(0)},
$S:2}
C.dZd.prototype={
$0(){return C.Ja("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.dZe.prototype={
$0(){},
$S:0}
C.dZ8.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.dZa.prototype={
$0(){return this.a.b_v(this.b)},
$S:0}
C.dZb.prototype={
$0(){var w=this.a
return w.m(new C.dZ9(w))},
$S:0}
C.dZ9.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.dZc.prototype={
$0(){var w=this.a
return w.b_v(w.d)},
$S:0}
C.dKz.prototype={
$2(d,e){return d+e},
$S:80}
C.dKA.prototype={
$0(){},
$S:0}
C.dKu.prototype={
$2(d,e){return d+e},
$S:80}
C.dKx.prototype={
$0(){var w=this.a
return w.m(new C.dKw(w,this.b))},
$S:0}
C.dKw.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dKy.prototype={
$0(){var w=this.a
return w.m(new C.dKv(w))},
$S:0}
C.dKv.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.dWf.prototype={
$0(){return C.yT(this.b,this.a.d,"drawing")},
$S:0}
C.dWg.prototype={
$1(d){var w=this.a
return w.m(new C.dWe(w,d))},
$S:50}
C.dWe.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aIR(u,v,t))},
$S:0}
C.dWh.prototype={
$1(d){var w=this.a
return w.m(new C.dWd(w,d))},
$S:21}
C.dWd.prototype={
$0(){return A.d.gak(this.a.e).c.push(this.b.b)},
$S:0}
C.dWi.prototype={
$1(d){var w=this.a
return w.m(new C.dWc(w,d))},
$S:23}
C.dWc.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aIR(u,v,t))},
$S:0}
C.dWj.prototype={
$0(){var w=this.a
return w.m(new C.dWb(w,this.b))},
$S:0}
C.dWb.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.dWk.prototype={
$1(d){var w=this.a
return w.m(new C.dWa(w,d))},
$S:6}
C.dWa.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.dWl.prototype={
$0(){var w=this.a
return w.m(new C.dW9(w))},
$S:0}
C.dW9.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dWm.prototype={
$0(){var w=this.a
return w.m(new C.dW8(w))},
$S:0}
C.dW8.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.dWn.prototype={
$0(){var w=this.a
return w.m(A.d.gBw(w.e))},
$S:0}
C.dWo.prototype={
$0(){var w=this.a
return w.m(new C.dW7(w))},
$S:0}
C.dW7.prototype={
$0(){var w=this.a
w.x=D.ay1[A.o.F(A.d.cu(D.ay1,w.x)+1,4)]},
$S:0}
C.ekH.prototype={
$0(){return this.a.f.M(0,this.b)},
$S:0}
C.ekI.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.Ja("bell",B.a([0,4,7],w),500,0.45)
u.m(new C.ekG(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.c()
if(v===u.length)C.Ja("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:12}
C.ekG.prototype={
$0(){var w=this.a
w.r.v(0,B.a([this.b,this.c],x.t))
w.f.a9(0)},
$S:0}
C.ekJ.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.ekF(w))},
$S:12}
C.ekF.prototype={
$0(){var w=this.a
w.f.a9(0)
w.x=!1},
$S:0}
C.ekN.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.t(0,e)||v.r.t(0,e)?1:0
return B.aB(w,B.ls(new C.ekL(v,e),w,A.b6,A.q7,w,w,new B.bp(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ekM(v,e),w,w,w,w,w,w,!1,A.a4)},
$S:83}
C.ekM.prototype={
$0(){return this.a.ca3(this.b)},
$S:0}
C.ekL.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dr(),m=n.a
m.$flags&2&&B.aj(m)
m[11]=0.001
n.fG(3.141592653589793*e)
m=B.m(16)
w=o?p:D.c47
if(o)v=q.a.r.t(0,q.b)?A.bj.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.J(u.r.t(0,t)?A.bj:A.aZ,A.r,1)
if(o){r=B.dr()
r.fG(3.141592653589793)
u=u.e
u===$&&B.c()
r=B.fv(A.A,B.d(u[t],p,p,p,p,p,p,G.a9J,p,p,p),p,r,!0)
u=r}else u=D.fJR
return B.fv(A.A,B.p(A.A,u,A.f,p,p,new B.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:110}
C.ekO.prototype={
$0(){var w=this.a
return w.m(new C.ekK(w,this.b))},
$S:0}
C.ekK.prototype={
$0(){var w=this.a
w.d=this.b.a
w.asY()},
$S:0}
C.ekP.prototype={
$0(){var w=this.a
return w.m(w.gbKX())},
$S:0}
C.euC.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.euD.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.euA.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.euB.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.euz(w))},
$S:12}
C.euz.prototype={
$0(){return this.a.f=-1},
$S:0}
C.euE.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.euF.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.euG.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b_u()},
$S:12}
C.euH.prototype={
$0(){return this.a.ca9(this.b)},
$S:0}
C.eIt.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:73}
C.eIC.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.d(d,w,1,A.a1,w,w,w,B.l(w,w,A.aR,w,w,w,w,w,w,w,w,f?16:14,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.D(A.kF,B.B(B.a([v,A.ac,new B.ds(1,A.cn,B.eN(A.A,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.e2),w)],x.p),A.m,w,A.e,A.i,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1863}
C.eIy.prototype={
$1(d){return this.a.m(new C.eIx())},
$S:2}
C.eIx.prototype={
$0(){},
$S:0}
C.eIz.prototype={
$0(){var w=this.a
return w.m(new C.eIw(w,this.b))},
$S:0}
C.eIw.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eIA.prototype={
$1(d){var w=this.a
return w.m(new C.eIv(w,d))},
$S:6}
C.eIv.prototype={
$0(){return this.a.f=A.k.V(this.b)},
$S:0}
C.eIB.prototype={
$0(){var w=this.a
return w.m(new C.eIu(w))},
$S:0}
C.eIu.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.ejM.prototype={
$0(){},
$S:0}
C.ejN.prototype={
$0(){},
$S:0}
C.ejF.prototype={
$0(){var w=this.a
return w.m(new C.ejE(w))},
$S:0}
C.ejE.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.c3(u,1,!1,x.S)
w.r=0.9
C.a8A("hat",0.6)},
$S:0}
C.ejG.prototype={
$0(){var w=this.a
return w.m(new C.ejD(w))},
$S:0}
C.ejD.prototype={
$0(){this.a.y=1.1
C.q1("bell",36,200,0.4)},
$S:0}
C.ejH.prototype={
$0(){var w=this.a
return w.m(new C.ejC(w))},
$S:0}
C.ejC.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.au(Math.max(v,u)-t+1)
w.as=u
C.q1("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.ejI.prototype={
$0(){var w=this.a
return w.m(new C.ejB(w,this.b))},
$S:0}
C.ejB.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.ejJ.prototype={
$1(d){var w=this.a
return w.m(new C.ejA(w,d))},
$S:6}
C.ejA.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.k.V(this.b),r=J.e4(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.ejK.prototype={
$1(d){var w=this.a
return w.m(new C.ejz(w,d))},
$S:6}
C.ejz.prototype={
$0(){return this.a.z=A.k.V(this.b)},
$S:0}
C.ejL.prototype={
$1(d){var w=this.a
return w.m(new C.ejy(w,d))},
$S:6}
C.ejy.prototype={
$0(){return this.a.Q=A.k.V(this.b)},
$S:0}
C.cxl.prototype={
$0(){return B.a4(this.a,!1).ic()},
$S:0}
C.cxm.prototype={
$0(){var w=this.a
return C.hvu(this.b,w.c,w.e,w.d)},
$S:0}
C.fVE.prototype={
$1(d){var w,v=null,u=B.m(24),t=this.a,s=t.j(0.4)
t=B.d(this.b,v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,16,v,v,A.u,v,v,!0,v,1.2,v,v,v,v,v,v),v,v,v)
w=B.d(this.c,v,v,v,v,v,v,D.fgr,v,v,v)
return B.en(B.a([B.bN(!1,D.fyL,v,v,!0,v,v,new C.fVD(d),v,v)],x.p),v,v,F.ng,w,v,v,v,new B.b7(u,new B.ay(s,1,A.r,-1)),t,v)},
$S:18}
C.fVD.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.cxh.prototype={
$0(){B.f1()
this.a.e.$0()},
$S:0}
C.cxg.prototype={
$0(){B.f1()
this.a.e.$0()},
$S:0}
C.cxn.prototype={
$0(){B.f1()
this.a.e.$0()},
$S:0}
C.cxi.prototype={
$0(){var w=this.a
A.d.W(w.iL$,this.b.bk())
if(w.c!=null)this.c.$0()},
$S:0}
C.cxk.prototype={
$1(d){var w=this.a,v=d.a,u=A.k.E((v-w.oF$.a)/1e6,0,0.04)
w.oF$=d
w.ni$=A.o.ao(v,1000)
w.q7(u)
if(w.c!=null)w.m(new C.cxj())},
$S:9}
C.cxj.prototype={
$0(){},
$S:0}
C.cjF.prototype={
$0(){var w=this
return C.q1(w.a,w.b,w.c,w.d)},
$S:1}
C.fjn.prototype={
$0(){var w=null,v=B.fu(w,w,w,w,B.cS(w,w,w,w,w,w,w,w,w,B.l(w,w,this.b,w,w,w,w,w,"monospace",w,w,this.c,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),this.a),A.a3,A.bZ,w,A.dA,A.bW)
v.el()
return v},
$S:243}
C.fN7.prototype={
$0(){return this.a.ah()},
$S:77}
C.fpb.prototype={
$2(d,e){return d.j(A.k.E(d.a*this.a*e,0,1))},
$1(d){return this.$2(d,1)},
$S:1864}
C.fpc.prototype={
$4$blur$shift(d,e,f,g){var w,v=this
$.S()
w=B.I()
w.b=A.aa
w.c=e
w.e=A.dT
w.r=d.gp(0)
if(f!=null)w.z=f
C.D4(v.a,v.b,null,w).a3(v.c,v.d.a8(0,g))},
$2(d,e){return this.$4$blur$shift(d,e,null,A.I)},
$3$blur(d,e,f){return this.$4$blur$shift(d,e,f,A.I)},
$S:1865}
C.fN8.prototype={
$2(d,e){return d+this.a[e]},
$S:734}
C.fN9.prototype={
$2(d,e){return d+this.a[e]},
$S:734}
C.cjC.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.cjx.prototype={
$0(){var w=this.a
w.at=0
w.ax=""},
$S:0}
C.cjy.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.cjw(w,d))},
$S:6}
C.cjw.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.cjz.prototype={
$0(){var w=this.a.a?"Your animated title is saved (a moving GIF).":"Could not save here. Try another browser."
return this.b.ax=w},
$S:0}
C.cjA.prototype={
$0(){return this.a.ax="Could not make the animation. Try a shorter title."},
$S:0}
C.cjB.prototype={
$0(){return this.a.at=-1},
$S:0}
C.cjm.prototype={
$2(d,e){var w=null,v=this.a,u=v.gJj().x
u===$&&B.c()
return B.b4(w,w,w,new C.b8s(u,v.e.a.a,v.f,v.r,v.y,v.gtm(),v.x,w),A.fF)},
$S:63}
C.cjn.prototype={
$1(d){return this.a.m(new C.cjl())},
$S:2}
C.cjl.prototype={
$0(){},
$S:0}
C.cjo.prototype={
$0(){return this.a.boR(this.b.a)},
$S:0}
C.cjp.prototype={
$0(){var w=this.a
return w.m(new C.cjk(w,this.b))},
$S:0}
C.cjk.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.cjq.prototype={
$0(){var w=this.a
return w.m(new C.cjj(w,this.b))},
$S:0}
C.cjj.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.cjr.prototype={
$0(){var w=this.a
return w.m(new C.cji(w,this.b))},
$S:0}
C.cji.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.cjs.prototype={
$0(){var w=this.a
return w.m(new C.cjh(w,this.b))},
$S:0}
C.cjh.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.cjt.prototype={
$0(){var w=this.a
return w.m(new C.cjg(w))},
$S:0}
C.cjg.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
C.cju.prototype={
$0(){var w=this.a.gJj()
w.iN(0,0)
w.cM(0)},
$S:0}
C.cjv.prototype={
$1(d){var w=this.a
return w.m(new C.cjf(w,d))},
$S:6}
C.cjf.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.e0e.prototype={
$0(){return this.a.k1=!1},
$S:0}
C.e0f.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.e0d(w,d))},
$S:z+10}
C.e0d.prototype={
$0(){return this.a.cv0(this.b)},
$S:0}
C.e0g.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.e0c(w))},
$S:71}
C.e0c.prototype={
$0(){return this.a.k1=!0},
$S:0}
C.e0h.prototype={
$0(){var w,v,u,t=this.a,s=J.a5(t),r=s.gL(t),q=new Float64Array(r*4)
for(w=0;w<s.gL(t);++w){v=J.r(s.h(t,w),0)*3.141592653589793/180
u=J.r(s.h(t,w),1)*3.141592653589793/180
r=w*4
q[r]=Math.sin(u)
q[r+1]=Math.cos(u)
q[r+2]=Math.sin(v)
q[r+3]=Math.cos(v)}return q},
$S:723}
C.e0a.prototype={
$0(){return this.a.id=D.a4B},
$S:0}
C.e0b.prototype={
$0(){var w=this.b.a,v=B.T(w).k("Z<1>")
v=B.pn(new B.Z(w,new C.e09(this.c),v),6,v.k("L.E"))
w=B.C(v,B.a6(v).k("L.E"))
return this.a.id=w},
$S:0}
C.e09.prototype={
$1(d){return A.a.t(d.a.toLowerCase(),this.a)},
$S:z+58}
C.e08.prototype={
$1(d){var w=null,v=B.ce(B.d("Age: 4.54 billion years\nWidth: 12,742 km (circumference 40,075 km)\nSpin: once every 24 hours, about 1,670 km/h at the equator\nTilt: 23.4 degrees, which gives us the seasons\nOrbit: around the Sun in 365.25 days at about 107,000 km/h\nGravity: 9.81 m/s\xb2 at the surface\nSurface: about 71% ocean and 29% land\nMoon: 384,400 km away; its pull makes the tides\nAtmosphere: 78% nitrogen, 21% oxygen\nFarthest from the Sun in July, closest in January",w,w,w,w,w,w,B.l(w,w,A.ad,w,w,w,w,w,w,w,w,14,w,w,w,w,1.55,!0,w,w,w,w,w,w,w,w),w,w,w),A.t,w,A.y,w,w,w,w,A.ah)
return B.en(B.a([B.bN(!1,A.pA,w,w,!0,w,w,new C.e07(d),w,w)],x.p),w,w,F.ng,v,w,w,w,w,D.fJW,w)},
$S:18}
C.e07.prototype={
$0(){B.a4(this.a,!1).O(null)
return null},
$S:0}
C.e0A.prototype={
$0(){return C.yT(this.b,this.a.d,"earth")},
$S:0}
C.e0B.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.au(e.b,e.d)
o.fy=n
w=o.r
v=o.w
u=o.x
t=o.y
s=o.gWv()
r=o.z
q=x.p
n=B.a([B.aB(A.c8,B.b4(p,p,p,new C.bgn(w,v,u,t,s*r,r,o.fx,o.CW,o.cx,o.cy,o.dy,o.fr,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.e0o(o),new C.e0p(o),new C.e0q(o),p,p,p,p,p,p,p,new C.e0r(o),p,p,p,!1,A.a4)],q)
if(o.r==null&&!o.k1)n.push(A6.adD)
if(o.r==null&&o.k1)n.push(B.at(new B.D(A.qd,B.x(B.a([D.bXI,A.W,D.fIH,A.am,D.fAw,A.aA,B.dl(A.uv,A.E8,o.gc2b(),p)],q),A.m,p,A.e,A.Q,0,A.p),p),p,p,p))
w=this.b
if(w!=null)n.push(B.ao(8,o.caL(w),p,p,10,10,p,p))
return new B.ex(new B.an(A.a_,p,A.b1,A.t,n,p),o.d)},
$S:457}
C.e0p.prototype={
$1(d){var w=this.a
w.dx=!0
w.go=w.z
w.at=w.ax=w.ay=null},
$S:240}
C.e0q.prototype={
$1(d){var w,v,u=this.a
if(d.w>=2)u.z=A.k.E(u.go*d.d,0.8,16)
else{w=57.2958/(u.gWv()*u.z)
v=d.a
u.y=u.y-v.a*w
u.x=A.k.E(u.x+v.b*w,-85,85)}},
$S:234}
C.e0o.prototype={
$1(d){var w,v,u=this.a
u.dx=!1
w=57.2958/(u.gWv()*u.z)
v=d.a.a
u.Q=A.k.E(-v.a*w,-160,160)
u.as=A.k.E(v.b*w,-100,100)},
$S:507}
C.e0r.prototype={
$1(d){var w=this.a,v=w.caO(d.b)
if(v!=null)w.m(new C.e0i(w,v))
else w.m(new C.e0j(w))},
$S:67}
C.e0i.prototype={
$0(){return this.a.ayd(this.b)},
$S:0}
C.e0j.prototype={
$0(){return this.a.fx=null},
$S:0}
C.e0C.prototype={
$0(){var w=this.a
w.e.bO(0,A.c9)
w.m(new C.e0n(w,this.b))},
$S:0}
C.e0n.prototype={
$0(){var w=this.a
w.id=D.a4B
w.ayd(this.b)},
$S:0}
C.e0G.prototype={
$0(){var w=this.a
return w.m(new C.e0z(w))},
$S:0}
C.e0z.prototype={
$0(){var w=this.a
w.fx=null
w.au9(15,w.y,1)},
$S:0}
C.e0H.prototype={
$0(){var w=this.a
return w.m(new C.e0y(w,this.b))},
$S:0}
C.e0y.prototype={
$0(){var w=this.b.b
return this.a.au9(w.a,w.b,w.c)},
$S:0}
C.e0I.prototype={
$0(){var w=this.a,v=w.r
if(v!=null)w.m(new C.e0x(w,v))},
$S:0}
C.e0x.prototype={
$0(){var w=this.b.a
return this.a.ayd(w[A.cZ.au(w.length)])},
$S:0}
C.e0J.prototype={
$1(d){var w=this.a
return w.m(new C.e0w(w,d))},
$S:6}
C.e0w.prototype={
$0(){var w=this.a
w.ay=null
w.z=this.b},
$S:0}
C.e0K.prototype={
$1(d){var w=this.a
return w.m(new C.e0v(w,d))},
$S:6}
C.e0v.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.e0L.prototype={
$1(d){var w=this.a
return w.m(new C.e0u(w,d))},
$S:6}
C.e0u.prototype={
$0(){return this.a.fr=this.b},
$S:0}
C.e0M.prototype={
$0(){var w=this.a
return w.m(new C.e0t(w))},
$S:0}
C.e0t.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.e0N.prototype={
$0(){var w=this.a
return w.m(new C.e0s(w))},
$S:0}
C.e0s.prototype={
$0(){var w=this.a
return w.CW=!w.CW},
$S:0}
C.e0D.prototype={
$0(){var w=this.a
return w.m(new C.e0m(w))},
$S:0}
C.e0m.prototype={
$0(){var w=this.a
return w.cx=!w.cx},
$S:0}
C.e0E.prototype={
$0(){var w=this.a
return w.m(new C.e0l(w))},
$S:0}
C.e0l.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.e0F.prototype={
$0(){var w=this.a
return w.m(new C.e0k(w))},
$S:0}
C.e0k.prototype={
$0(){var w=this.a
return w.db=!w.db},
$S:0}
C.e06.prototype={
$2(d,e){var w=null
return B.E(B.x(B.a([B.d(d,w,w,w,w,w,w,D.aRY,w,w,w),A.v8,B.d(e,w,2,A.a1,w,w,w,A.UY,w,w,w)],x.p),A.E,w,A.e,A.i,0,A.p),1)},
$S:138}
C.e05.prototype={
$0(){var w=this.a
return w.m(new C.e04(w))},
$S:0}
C.e04.prototype={
$0(){return this.a.fx=null},
$S:0}
C.diG.prototype={
$0(){var w=null,v=B.fu(w,w,w,w,B.cS(w,w,w,w,w,w,w,w,w,B.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,D.d7f,w,w),this.a),A.a3,A.bZ,w,A.dA,A.bW)
v.el()
return v},
$S:243}
C.diH.prototype={
$2(d,e){var w,v,u,t=this,s=Math.sin(d),r=Math.cos(d),q=e-t.a,p=Math.sin(q),o=Math.cos(q)
q=t.b
w=t.c
if(q*s+w*r*o<0)return null
v=t.d
u=t.e
return new B.t(v.a+u*r*p,v.b-u*(w*s-q*r*o))},
$S:1868}
C.fkR.prototype={
$0(){return D.dLl},
$S:z+59}
C.fkS.prototype={
$0(){return D.e8J},
$S:z+60}
C.fkT.prototype={
$0(){return D.dLn},
$S:z+61}
C.fkU.prototype={
$0(){return D.dFN},
$S:z+62}
C.fkV.prototype={
$0(){return D.dLk},
$S:z+63}
C.fkW.prototype={
$0(){return D.e6Q},
$S:z+64}
C.fkX.prototype={
$0(){return D.e6O},
$S:z+65}
C.eJa.prototype={
$1(d){},
$S:z+10}
C.eJb.prototype={
$1(d){},
$S:71}
C.eJ7.prototype={
$0(){return B.a4(this.a,!1).ic()},
$S:0}
C.eJ8.prototype={
$0(){var w=this.a
return w.m(new C.eJ6(w))},
$S:0}
C.eJ6.prototype={
$0(){var w=this.a
return w.d=A.o.F(w.gaTa()+1,16)},
$S:0}
C.eJ9.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=(e.b-20)/3,l=x.p,k=B.a([],l)
for(w=$.hz6(),v=m*1.15,u=x.O,t=0;t<7;++t){s=w[t]
r=new B.aQ(18,18)
q=s.d
p=new B.ay(q.j(0.5),1,A.r,-1)
o=B.a([q.j(0.28),D.bnI],u)
k.push(B.aB(n,B.p(n,B.x(B.a([B.X(s.c,q,n,n,n,30),A.O,new B.y(s.a,n,D.fl9,n,A.L,n,n,n,n,2,n,n),A.cL,new B.y(s.b,n,D.fqz,n,A.L,n,n,n,n,2,n,n)],l),A.m,n,A.b8,A.i,0,A.p),A.f,n,n,new B.o(n,n,new B.bK(p,p,p,p),new B.bj(r,r,r,r),n,new B.a9(A.ay,A.aE,A.x,o,n,n),A.n),n,v,n,n,A.cm,n,n,m),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eJ5(d,s),n,n,n,n,n,n,!1,A.a4))}return B.bW(A.fH,k,A.bq,n,10,10)},
$S:170}
C.eJ5.prototype={
$0(){return B.a4(this.a,!1).cc(B.dX(new C.eJ4(this.b),!1,null,x.H))},
$S:0}
C.eJ4.prototype={
$1(d){return this.a.e.$0()},
$S:39}
C.eBQ.prototype={
$0(){var w=this.a
w.Q=w.z=this.b
if(w.w<2.2)w.w=2.6},
$S:0}
C.eC0.prototype={
$0(){return C.yT(this.b,this.a.d,"solar-system")},
$S:0}
C.eC1.prototype={
$2(d,e){var w,v=null,u=this.a,t=new B.au(e.b,e.d)
u.ch=t
t=B.a([B.aB(A.c8,B.b4(v,v,v,new C.bsR(u,v),t),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eBY(u),new C.eBZ(u),v,v,v,v,v,v,v,new C.eC_(u),v,v,v,!1,A.a4)],x.p)
w=this.b
if(w!=null)t.push(B.ao(8,u.caQ(w),v,v,10,10,v,v))
return new B.ex(new B.an(A.a_,v,A.b1,A.t,t,v),u.d)},
$S:457}
C.eBY.prototype={
$1(d){var w=this.a
w.y=w.w
w.Q=null},
$S:240}
C.eBZ.prototype={
$1(d){var w=this.a
if(d.w>=2)w.w=A.k.E(w.y*d.d,0.5,9)
else w.x=w.x.a8(0,d.a)},
$S:234}
C.eC_.prototype={
$1(d){var w=this.a,v=w.caT(d.b)
if(v!=null)w.b_Q(v)},
$S:67}
C.eC2.prototype={
$0(){var w=this.a
return w.m(new C.eBX(w))},
$S:0}
C.eBX.prototype={
$0(){var w=this.a
w.z=w.Q=null
w.x=A.I
w.w=1},
$S:0}
C.eC3.prototype={
$0(){return this.a.b_Q(this.b)},
$S:0}
C.eC4.prototype={
$1(d){var w=this.a
return w.m(new C.eBW(w,d))},
$S:6}
C.eBW.prototype={
$0(){return this.a.r=Math.exp(this.b*Math.log(3651))-1},
$S:0}
C.eC5.prototype={
$1(d){var w=this.a
return w.m(new C.eBV(w,d))},
$S:6}
C.eBV.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eC6.prototype={
$0(){var w=this.a
return w.m(new C.eBU(w))},
$S:0}
C.eBU.prototype={
$0(){var w=this.a
return w.as=!w.as},
$S:0}
C.eC7.prototype={
$0(){var w=this.a
return w.m(new C.eBT(w))},
$S:0}
C.eBT.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.eC8.prototype={
$0(){var w=this.a
return w.m(new C.eBS(w))},
$S:0}
C.eBS.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.eC9.prototype={
$0(){var w=this.a
return w.m(new C.eBR(w))},
$S:0}
C.eBR.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.eBP.prototype={
$1(d){var w
if(d>=730){w=d>8000?0:1
w=A.k.ac(d/365.25,w)+" Earth years"}else w=A.k.ac(d,0)+" Earth days"
return w},
$S:304}
C.eBO.prototype={
$2(d,e){var w=null
return B.E(B.x(B.a([B.d(d,w,w,w,w,w,w,D.aRY,w,w,w),A.v8,B.d(e,w,2,A.a1,w,w,w,A.UY,w,w,w)],x.p),A.E,w,A.e,A.i,0,A.p),1)},
$S:138}
C.eBN.prototype={
$0(){var w=this.a
return w.m(new C.eBM(w))},
$S:0}
C.eBM.prototype={
$0(){var w=this.a
w.Q=w.z=null},
$S:0}
C.f2K.prototype={
$0(){var w=null,v=B.fu(w,w,w,w,B.cS(w,w,w,w,w,w,w,w,w,B.l(w,w,this.c,w,w,w,w,w,w,w,w,this.b,w,w,A.H,w,w,!0,w,w,w,w,w,M.R3,w,w),this.a),A.a3,A.bZ,w,A.dA,A.bW)
v.el()
return v},
$S:243}
C.f2L.prototype={
$1(d){return d.c>0},
$S:z+11}
C.f2M.prototype={
$1(d){return d.c>0},
$S:z+11}
C.e0R.prototype={
$0(){},
$S:0}
C.e1j.prototype={
$1(d){return d!=null},
$S:363}
C.e15.prototype={
$0(){var w=this.a
return w.m(new C.e0X(w,this.b))},
$S:0}
C.e0X.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.e16.prototype={
$0(){var w=this.a
return w.m(new C.e0W(w))},
$S:0}
C.e0W.prototype={
$0(){return this.a.f=!1},
$S:0}
C.e17.prototype={
$0(){var w=this.a
return w.m(new C.e14(w))},
$S:0}
C.e14.prototype={
$0(){return this.a.f=!0},
$S:0}
C.e1b.prototype={
$0(){var w=this.a
return w.m(new C.e13(w))},
$S:0}
C.e13.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.e1c.prototype={
$1(d){var w=this.a
return w.m(new C.e12(w,d))},
$S:6}
C.e12.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.e1d.prototype={
$0(){var w=this.a
return w.m(w.gcyh())},
$S:0}
C.e1e.prototype={
$1(d){var w=this.a
return w.m(new C.e11(w,d))},
$S:6}
C.e11.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.e1f.prototype={
$1(d){var w=this.a
return w.m(new C.e10(w,d))},
$S:6}
C.e10.prototype={
$0(){return this.a.ax=this.b},
$S:0}
C.e1g.prototype={
$1(d){var w=this.a
return w.m(new C.e1_(w,d))},
$S:6}
C.e1_.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.e1h.prototype={
$1(d){var w=this.a
return w.m(new C.e0Z(w,d))},
$S:6}
C.e0Z.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.e1i.prototype={
$0(){var w=this.a
return w.m(new C.e0Y(w))},
$S:0}
C.e0Y.prototype={
$0(){return this.a.ay=4},
$S:0}
C.e18.prototype={
$0(){var w=this.a
return w.m(new C.e0V(w))},
$S:0}
C.e0V.prototype={
$0(){return this.a.ay=7.67},
$S:0}
C.e19.prototype={
$0(){var w=this.a
return w.m(new C.e0U(w))},
$S:0}
C.e0U.prototype={
$0(){return this.a.ay=9},
$S:0}
C.e1a.prototype={
$0(){var w=this.a
return w.m(new C.e0T(w))},
$S:0}
C.e0T.prototype={
$0(){return this.a.ay=11.3},
$S:0}
C.e0Q.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a3.b/5,e=a3.d,d=e-60,a0=x.p,a1=B.a([B.bT(0,B.c2(g,new B.o(D.bm3,g,g,B.m(20),g,g,A.n),A.bg),0,0,0)],a0)
for(w=this.a,v=w.as,u=x.V,t=f/2,e-=d,s=d-54-22,r=w.z,q=0;q<5;++q){p=q*f
o=D.zk[q]
n=B.b1(o.d)
o=B.x(B.a([new B.y(o.a,g,new B.F(!0,n,g,g,g,g,12.5,A.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g),new B.y(B.w(D.zk[q].b)+" m/s\xb2",g,D.fpT,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.i,0,A.p)
n=p+t
m=B.p(g,g,A.f,A.ds,g,g,g,g,g,g,g,g,g,1)
l=r[q]
k=w.f?B.X(U.Ok,B.b1(D.zk[q].d),g,g,g,22):B.p(g,g,A.f,g,g,new B.o(B.b1(D.zk[q].d),g,g,g,B.a([new B.ac(0,A.G,B.b1(D.zk[q].d).j(0.6),A.I,10)],u),g,A.a6),g,22,g,g,g,g,g,22)
j=B.p(g,g,A.f,B.b1(D.zk[q].d).j(0.6),g,g,g,3,g,A.fC,g,g,g,g)
i=v[q]
if(i==null)i=w.x?"\u2026":"\u2014"
else i=A.k.ac(i,2)+" s"
h=v[q]==null?"":"to land"
A.d.v(a1,B.a([new B.cN(p,8,g,g,f,g,o,g),new B.cN(n-0.5,54,g,e,g,g,m,g),new B.cN(n-11,54+s*(l/20),g,g,g,g,k,g),new B.cN(p,g,g,8,f,g,B.x(B.a([j,A.au,new B.y(i,g,A.ta,g,g,g,g,g,g,g,g,g),new B.y(h,g,D.fhI,g,g,g,g,g,g,g,g,g)],a0),A.m,g,A.e,A.i,0,A.p),g)],a0))}if(!w.x&&A.d.d5(v,new C.e0P()))a1.push(D.b9_)
return new B.an(A.a_,g,A.ab,A.t,a1,g)},
$S:66}
C.e0P.prototype={
$1(d){return d==null},
$S:363}
C.e0S.prototype={
$2(d,e){var w,v=null,u=this.a,t=this.b,s=t.b,r=u.at*s/9.81,q=A.k.E(Math.log(r+1)/Math.log(u.at*274/9.81+1),0.02,1),p=B.m(8)
p=B.p(v,v,A.f,v,v,new B.o(A.c.j(0.05),v,v,p,v,v,A.n),v,26,v,v,v,v,v,v)
t=t.c
t=B.dd(v,v,v,v,A.b6,new B.o(v,v,v,B.m(8),v,new B.a9(A.a5,A.a8,A.x,B.a([B.b1(t).j(0.9),B.b1(t).j(0.4)],x.O),v,v),A.n),A.iz,v,26,v,v,v,v,e.b*q)
w=r<100?A.k.ac(r,1):C.H7(r)
u=u.ax*9.81/s
u=u<10?A.k.ac(u,2):A.k.ac(u,0)
return new B.an(A.a_,v,A.ab,A.t,B.a([p,t,B.ao(v,B.d(w+" kg  \xb7  jump "+u+" m",v,v,v,v,v,v,D.fo3,v,v,v),v,v,8,v,4,v)],x.p),v)},
$S:66}
C.e0O.prototype={
$2(d,e){var w,v=null,u=e.b,t=e.d,s=Math.min(u,t),r=this.a,q=r.ch,p=r.cx,o=r.db,n=r.CW||o.length!==0
n=B.b4(v,v,v,new C.bbx(new B.t(u/2,t/2+t*0.05),s*0.18/6371*(2/q),p,o,n,v),A.ax)
o=A.w.j(0.55)
p=B.m(14)
q=B.J(A.bz,A.r,1)
u=r.dx
t=u.length===0?"Set a speed and press Fire!":u
if(A.a.t(u,"forever")||A.a.t(u,"again"))u=A.bj
else u=A.a.t(u,"escapes")?A.aQ:A.c
u=B.d(t,v,v,v,v,v,v,B.l(v,v,u,v,v,v,v,v,v,v,v,13.5,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.k.ac(Math.sqrt(58.86870477034412),1)
s=A.k.ac(Math.sqrt(117.73740954068823),1)
r=r.CW?"  Height now: "+C.H7(A.k.E(r.cx.gcH()-6371,0,9e9))+" km":""
w=x.p
return new B.an(A.a_,v,A.b1,A.t,B.a([n,B.ao(v,B.p(v,B.x(B.a([u,A.bD,B.d("Circular orbit here: "+t+" km/s.  Escape speed: "+s+" km/s."+r,v,v,v,v,v,v,H.aTK,v,v,v)],w),A.E,v,A.e,A.Q,0,A.p),A.f,v,v,new B.o(o,v,q,p,v,v,A.n),v,v,v,v,A.bT,v,v,v),v,v,12,12,8,v)],w),v)},
$S:66}
C.euK.prototype={
$0(){return C.yT(this.b,this.a.d,"size-compare")},
$S:0}
C.euL.prototype={
$0(){var w=this.a
return w.m(new C.euJ(w,this.b))},
$S:0}
C.euJ.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.euM.prototype={
$0(){var w=this.a
return w.m(new C.euI(w,this.b))},
$S:0}
C.euI.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f0U.prototype={
$3(d,e,f){var w,v,u=this.a
$.S()
w=B.I()
w.r=f.j(0.2).gp(0)
w.z=new B.hg(A.G,Math.max(2,e*0.18))
u.ad(d,e*1.12,w)
w=B.I()
v=B.ar(f,A.w,0.6)
v.toString
w.sam(new B.c1(V.xh,0.5,A.x,null,0,B.a([A.c,f,v],x.O),H.a3R,null).aB(0,B.bX(d,e)))
u.ad(d,e,w)},
$S:1869}
C.dK0.prototype={
$1(d){return d.e<=0},
$S:z+48}
C.dJP.prototype={
$1(d){return d.b},
$S:z+45}
C.dJQ.prototype={
$0(){return C.yT(this.b,this.a.d,"black-hole")},
$S:0}
C.dJR.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=new B.au(e.b,e.d)
p.Q=o
o=B.aB(A.c8,B.b4(q,q,q,new C.baU(p,q),o),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.dJN(p),q,q,q,q,q,q,q,q,q,new C.dJO(p),q,q,q,q,!1,A.a4)
w=A.w.j(0.55)
v=B.m(14)
u=B.J(A.bz,A.r,1)
t=p.r
if(t<1000)t=A.k.ac(t,t<10?1:0)+" Suns"
else t=C.fyP(t)+" Suns"
t=p.afl("MASS",t)
s=2.953*p.r
r=x.p
r=B.a([o,B.ao(q,B.p(q,B.B(B.a([t,p.afl("EDGE WIDTH",(s<100?A.k.ac(s,1):C.H7(s))+" km"),p.afl("TIME",A.k.ac(this.b*100,0)+"%"),p.afl("EATEN",""+p.as)],r),A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.bT,q,q,q),q,q,10,10,8,q)],r)
if(p.z.length===0&&p.as===0)r.push(D.eqO)
return new B.ex(new B.an(A.a_,q,A.b1,A.t,r,q),p.d)},
$S:457}
C.dJO.prototype={
$1(d){return this.a.b_R(d.b)},
$S:23}
C.dJN.prototype={
$1(d){if(A.cZ.ah()<0.12)this.a.b_R(d.b)},
$S:21}
C.dJT.prototype={
$1(d){var w=this.a
return w.m(new C.dJM(w,d))},
$S:6}
C.dJM.prototype={
$0(){return this.a.r=Math.max(3,Math.exp(this.b*Math.log(1e10)))},
$S:0}
C.dJU.prototype={
$0(){var w=this.a
return w.m(new C.dJL(w))},
$S:0}
C.dJL.prototype={
$0(){return this.a.r=10},
$S:0}
C.dJV.prototype={
$0(){var w=this.a
return w.m(new C.dJK(w))},
$S:0}
C.dJK.prototype={
$0(){return this.a.r=21},
$S:0}
C.dJW.prototype={
$0(){var w=this.a
return w.m(new C.dJJ(w))},
$S:0}
C.dJJ.prototype={
$0(){return this.a.r=43e5},
$S:0}
C.dJX.prototype={
$0(){var w=this.a
return w.m(new C.dJI(w))},
$S:0}
C.dJI.prototype={
$0(){return this.a.r=65e8},
$S:0}
C.dJY.prototype={
$0(){var w=this.a
return w.m(new C.dJH(w))},
$S:0}
C.dJH.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.dJZ.prototype={
$0(){var w=this.a
return w.m(new C.dJG(w))},
$S:0}
C.dJG.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
C.dK_.prototype={
$0(){var w=this.a
return w.m(new C.dJF(w))},
$S:0}
C.dJF.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.dJS.prototype={
$0(){var w=this.a
return w.m(new C.dJE(w))},
$S:0}
C.dJE.prototype={
$0(){var w=this.a
A.d.a9(w.z)
w.as=0},
$S:0}
C.e_x.prototype={
$6(d,e,f,g,h,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=f.a,v=f.b,u=g.a,t=g.b,s=this.a,r=0;r<d.length;++r){q=d[r]
p=q.a
o=w-p
q=q.b
n=v-q
p=u-p
q=t-q
m=Math.max(0.12,Math.sqrt(o*o+n*n))
l=Math.max(0.12,Math.sqrt(p*p+q*q))
k=e[r]
j=h/(m*m)
i=a0/(l*l)
p=k.a+(o/m*j+p/l*i)*s
i=k.b+(n/m*j+q/l*i)*s
e[r]=new B.t(p,i)
q=d[r]
d[r]=new B.t(q.a+p*s,q.b+i*s)}},
$S:1870}
C.e_n.prototype={
$0(){return C.yT(this.b,this.a.d,"galaxy")},
$S:0}
C.e_o.prototype={
$0(){var w=this.a
return w.m(new C.e_m(w,this.b))},
$S:0}
C.e_m.prototype={
$0(){var w,v=this.a
v.ch=!1
w=this.b.a
v.Q=w
v.w=w==="barred"?1:0
v.a_A()},
$S:0}
C.e_p.prototype={
$0(){var w=this.a
return w.m(new C.e_l(w))},
$S:0}
C.e_l.prototype={
$0(){var w=this.a
if(w.Q==="elliptical"){w.Q="spiral"
w.a_A()}w.cy8()},
$S:0}
C.e_q.prototype={
$1(d){var w=this.a
return w.m(new C.e_k(w,d))},
$S:6}
C.e_k.prototype={
$0(){var w=this.a
w.f=A.k.V(this.b)
w.a_A()},
$S:0}
C.e_r.prototype={
$1(d){var w=this.a
return w.m(new C.e_j(w,d))},
$S:6}
C.e_j.prototype={
$0(){var w=this.a
w.r=this.b
w.a_A()},
$S:0}
C.e_s.prototype={
$1(d){var w=this.a
return w.m(new C.e_i(w,d))},
$S:6}
C.e_i.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.e_t.prototype={
$1(d){var w=this.a
return w.m(new C.e_h(w,d))},
$S:6}
C.e_h.prototype={
$0(){return this.a.ax=this.b},
$S:0}
C.e_u.prototype={
$0(){var w=this.a
return w.m(new C.e_g(w))},
$S:0}
C.e_g.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
C.e_v.prototype={
$0(){var w=this.a
return w.m(new C.e_f(w))},
$S:0}
C.e_f.prototype={
$0(){var w=this.a
return w.z=!w.z},
$S:0}
C.e_w.prototype={
$0(){var w=this.a
return w.m(new C.e_e(w))},
$S:0}
C.e_e.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.dfQ.prototype={
$6(d,e,f,g,h,i){return g.a8(0,new B.t((d*Math.cos(h)-e*Math.sin(h))*i,(d*Math.sin(h)+e*Math.cos(h))*i*this.a-f*i*0.9))},
$S:1871}
C.etZ.prototype={
$0(){return C.yT(this.b,this.a.d,"seasons-moon")},
$S:0}
C.eu_.prototype={
$0(){var w=this.a
return w.m(new C.etY(w))},
$S:0}
C.etY.prototype={
$0(){return this.a.f="seasons"},
$S:0}
C.eu0.prototype={
$0(){var w=this.a
return w.m(new C.etX(w))},
$S:0}
C.etX.prototype={
$0(){return this.a.f="moon"},
$S:0}
C.eu1.prototype={
$0(){var w=this.a
return w.m(new C.etW(w))},
$S:0}
C.etW.prototype={
$0(){var w=this.a
return w.x=!w.x},
$S:0}
C.eu2.prototype={
$0(){var w=this.a
return w.m(new C.etV(w))},
$S:0}
C.etV.prototype={
$0(){var w=this.a
return w.Q=!w.Q},
$S:0}
C.eu3.prototype={
$1(d){var w=this.a
return w.m(new C.etU(w,d))},
$S:6}
C.etU.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eu4.prototype={
$1(d){var w=this.a
return w.m(new C.etT(w,d))},
$S:6}
C.etT.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eu5.prototype={
$1(d){var w=this.a
return w.m(new C.etS(w,d))},
$S:6}
C.etS.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eu6.prototype={
$1(d){var w=this.a
return w.m(new C.etR(w,d))},
$S:6}
C.etR.prototype={
$0(){return this.a.y=this.b},
$S:0};(function aliases(){var w=C.aMO.prototype
w.bxk=w.q
w=C.aLY.prototype
w.bws=w.q
w=C.aLZ.prototype
w.bwt=w.q
w=C.aM2.prototype
w.bwx=w.q
w=C.aND.prototype
w.byg=w.q
w=C.aMM.prototype
w.bxi=w.q
w=C.aMV.prototype
w.bxr=w.q
w=C.ayd.prototype
w.btu=w.q
w=C.aye.prototype
w.btv=w.q
w=C.aKr.prototype
w.buS=w.q
w=C.aMb.prototype
w.bwG=w.q
w=C.aM_.prototype
w.bwu=w.q
w=C.aMg.prototype
w.bwM=w.q
w=C.aMI.prototype
w.bxe=w.q
w=C.aN6.prototype
w.bxD=w.q
w=C.aFa.prototype
w.btZ=w.q
w=C.aMl.prototype
w.bwS=w.q
w=C.aMm.prototype
w.bwT=w.q
w=C.aMn.prototype
w.bwU=w.q
w=C.aMR.prototype
w.bxn=w.q
w=C.aMU.prototype
w.bxq=w.q
w=C.aLX.prototype
w.bwr=w.q
w=C.aMj.prototype
w.bwP=w.q
w=C.aMQ.prototype
w.bxm=w.q})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(C.aEW.prototype,"gax5","c5T",1)
var r
v(r=C.aDr.prototype,"gcen","ceo",30)
w(r,"gc6s","aZd",1)
w(C.aDt.prototype,"gc8c","c8d",1)
u(C.aDK.prototype,"gc8j","c8k",44)
w(r=C.aI_.prototype,"gcxP","cxQ",1)
w(r,"gc8l","ael",1)
w(r,"gciP","ciQ",1)
w(r,"gc8i","aek",3)
w(r=C.aEV.prototype,"gbI6","a9N",3)
w(r,"gci5","b1C",1)
w(r,"gclR","agS",3)
t(r,"gc8n","aem",3)
t(r=C.a4K.prototype,"gBw","a9",1)
v(r,"gcV7","anN",0)
v(r,"gcRx","M0",0)
w(r,"gcXl","bj_",1)
s(C.aiZ.prototype,"gc8I",0,5,null,["$5"],["qC"],42,0,0)
w(r=C.aDW.prototype,"gc8J","c8K",1)
w(r,"gcoG","ahd",3)
w(r,"gceD","afy",3)
w(r,"gcvQ","aij",3)
w(r=C.aFn.prototype,"gca4","ca5",1)
t(r,"gca2","b_t",1)
w(C.aEJ.prototype,"gbKX","asY",1)
t(C.aF1.prototype,"gca6","ca7",1)
w(r=C.asj.prototype,"gbZD","bZE",1)
w(r,"gcNj","Tq",3)
w(r=C.aE6.prototype,"gc2b","aXs",1)
v(r,"gcaM","caN",56)
w(r,"gbQ7","bQ8",1)
w(r=C.aE7.prototype,"gcyh","cyi",1)
w(r,"gcaR","caS",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.lZ,[C.aUz,C.co0,C.KH,C.a0G,C.JE])
t(C.bST,B.aUP)
u(B.jc,[C.bSU,C.ecU,C.ecV,C.ed6,C.ed7,C.ed2,C.ed1,C.ed3,C.ed_,C.ed4,C.ecY,C.ed5,C.ecX,C.eda,C.ed9,C.edb,C.ed8,C.edc,C.edd,C.edf,C.ers,C.eru,C.erv,C.erb,C.era,C.er8,C.erh,C.eri,C.ere,C.erj,C.erd,C.erk,C.erl,C.erc,C.ern,C.erg,C.err,C.erf,C.dKs,C.dKr,C.dK4,C.dKt,C.dK6,C.dK8,C.dK9,C.dKb,C.dK1,C.dK2,C.dK3,C.dKi,C.dKj,C.dKk,C.dKh,C.dKm,C.dKg,C.dKn,C.dKf,C.dKo,C.dKe,C.dKp,C.dKd,C.dKq,C.dKc,C.dLM,C.dLL,C.dLQ,C.dLI,C.dLJ,C.dLR,C.dLS,C.dLT,C.dLO,C.dLE,C.dM1,C.dM0,C.dM3,C.dM4,C.dM5,C.dLV,C.dM6,C.cRs,C.dRY,C.dRX,C.dRZ,C.fkI,C.fkJ,C.fkK,C.fkL,C.fkM,C.fkN,C.fkO,C.fkP,C.fkQ,C.f0m,C.f0l,C.f03,C.f02,C.f_Z,C.f_Y,C.f0_,C.f_X,C.f0b,C.f0a,C.f0c,C.f04,C.f0g,C.f07,C.f0i,C.f06,C.f0j,C.f05,C.equ,C.eqj,C.eqt,C.eqf,C.eqv,C.eqx,C.eqg,C.eqh,C.eqS,C.eqR,C.eqI,C.eqJ,C.eqK,C.eqE,C.eqF,C.eqD,C.eqG,C.eqC,C.eqH,C.eqB,C.eqz,C.dmA,C.eCz,C.eCb,C.eCa,C.eCk,C.eCt,C.eCj,C.eCu,C.eCi,C.eCv,C.eCh,C.eCg,C.eCx,C.eCf,C.eCn,C.eCe,C.eCo,C.eCd,C.eCp,C.eCc,C.bNW,C.bNY,C.bNJ,C.bNL,C.bHX,C.bHY,C.bHW,C.bHZ,C.bI0,C.bHN,C.bHO,C.bHP,C.bHQ,C.bHR,C.bHS,C.bIg,C.bHq,C.bI6,C.bI7,C.bI4,C.bI5,C.bI2,C.bI3,C.bIc,C.bI1,C.bId,C.bHr,C.bHL,C.bHx,C.bHy,C.bHw,C.bHz,C.bHv,C.bHC,C.bHD,C.bHE,C.bHF,C.bHu,C.bHG,C.bHt,C.bHH,C.bHs,C.dWw,C.dWH,C.dWI,C.dWu,C.dWt,C.dWs,C.dWB,C.dWz,C.dWA,C.dWC,C.dWx,C.dWy,C.dWK,C.dWL,C.dWM,C.dWN,C.dWO,C.dSV,C.dST,C.dSR,C.dSQ,C.dSP,C.dSO,C.dSN,C.dSJ,C.dSI,C.dSL,C.dSK,C.fkY,C.fkZ,C.fl_,C.fl0,C.fl1,C.fl2,C.fl3,C.fl4,C.cjJ,C.cjI,C.eMZ,C.eMV,C.eMU,C.eMX,C.eMW,C.dZd,C.dZe,C.dZ8,C.dZa,C.dZb,C.dZ9,C.dZc,C.dKA,C.dKx,C.dKw,C.dKy,C.dKv,C.dWf,C.dWe,C.dWd,C.dWc,C.dWj,C.dWb,C.dWa,C.dWl,C.dW9,C.dWm,C.dW8,C.dWn,C.dWo,C.dW7,C.ekH,C.ekI,C.ekG,C.ekJ,C.ekF,C.ekM,C.ekO,C.ekK,C.ekP,C.euC,C.euD,C.euA,C.euB,C.euz,C.euE,C.euF,C.euG,C.euH,C.eIx,C.eIz,C.eIw,C.eIv,C.eIB,C.eIu,C.ejM,C.ejN,C.ejF,C.ejE,C.ejG,C.ejD,C.ejH,C.ejC,C.ejI,C.ejB,C.ejA,C.ejz,C.ejy,C.cxl,C.cxm,C.fVD,C.cxh,C.cxg,C.cxn,C.cxi,C.cxj,C.cjF,C.fjn,C.fN7,C.cjC,C.cjx,C.cjw,C.cjz,C.cjA,C.cjB,C.cjl,C.cjo,C.cjp,C.cjk,C.cjq,C.cjj,C.cjr,C.cji,C.cjs,C.cjh,C.cjt,C.cjg,C.cju,C.cjf,C.e0e,C.e0d,C.e0c,C.e0h,C.e0a,C.e0b,C.e07,C.e0A,C.e0i,C.e0j,C.e0C,C.e0n,C.e0G,C.e0z,C.e0H,C.e0y,C.e0I,C.e0x,C.e0w,C.e0v,C.e0u,C.e0M,C.e0t,C.e0N,C.e0s,C.e0D,C.e0m,C.e0E,C.e0l,C.e0F,C.e0k,C.e05,C.e04,C.diG,C.fkR,C.fkS,C.fkT,C.fkU,C.fkV,C.fkW,C.fkX,C.eJ7,C.eJ8,C.eJ6,C.eJ5,C.eBQ,C.eC0,C.eC2,C.eBX,C.eC3,C.eBW,C.eBV,C.eC6,C.eBU,C.eC7,C.eBT,C.eC8,C.eBS,C.eC9,C.eBR,C.eBN,C.eBM,C.f2K,C.e0R,C.e15,C.e0X,C.e16,C.e0W,C.e17,C.e14,C.e1b,C.e13,C.e12,C.e1d,C.e11,C.e10,C.e1_,C.e0Z,C.e1i,C.e0Y,C.e18,C.e0V,C.e19,C.e0U,C.e1a,C.e0T,C.euK,C.euL,C.euJ,C.euM,C.euI,C.dJQ,C.dJM,C.dJU,C.dJL,C.dJV,C.dJK,C.dJW,C.dJJ,C.dJX,C.dJI,C.dJY,C.dJH,C.dJZ,C.dJG,C.dK_,C.dJF,C.dJS,C.dJE,C.e_n,C.e_o,C.e_m,C.e_p,C.e_l,C.e_k,C.e_j,C.e_i,C.e_h,C.e_u,C.e_g,C.e_v,C.e_f,C.e_w,C.e_e,C.etZ,C.eu_,C.etY,C.eu0,C.etX,C.eu1,C.etW,C.eu2,C.etV,C.etU,C.etT,C.etS,C.etR])
u(B.aD,[C.ake,C.Gm,C.v1,C.aSN,C.a3r,C.baX,C.c4k,C.yj,C.CA,C.ns,C.bbH,C.AI,C.btz,C.qd,C.qW,C.CE,C.ZD,C.aeY,C.a0T,C.CO,C.abW,C.acb,C.ae4,C.G7,C.bmk,C.Qi,C.eg,C.tE,C.aaB,C.abI,C.a4K,C.mJ,C.bbI,C.fP,C.mh,C.buT,C.aIR,C.qO,C.feq,C.abm,C.abn,C.vf,C.Pv,C.yg,C.Pu,C.buO,C.Q_,C.af4])
u(B.hL,[C.fBb,C.fqL,C.fxV,C.fxW,C.fB8,C.fB9,C.ecW,C.ede,C.ert,C.er0,C.er1,C.er2,C.er3,C.er4,C.er5,C.er6,C.er7,C.eqZ,C.er_,C.eqY,C.ero,C.erp,C.erq,C.dK5,C.dK7,C.dKa,C.dKl,C.c4l,C.c4m,C.fkh,C.fki,C.fkj,C.fkq,C.fkr,C.fks,C.dM7,C.dLP,C.dM8,C.dLK,C.dLF,C.dLH,C.dLN,C.dM_,C.dLY,C.dLZ,C.dLX,C.dLU,C.dLW,C.f0k,C.f01,C.f08,C.f0h,C.f_W,C.dmE,C.dmF,C.dmB,C.dmC,C.dmD,C.dmG,C.dmH,C.dmI,C.dmJ,C.dmK,C.dmL,C.dmM,C.dmN,C.dmO,C.eqp,C.eqq,C.eqr,C.eqs,C.eqn,C.eqo,C.eqU,C.eqw,C.eqy,C.eqi,C.eqQ,C.eqO,C.eqP,C.eqN,C.eqM,C.eqk,C.eCA,C.eCy,C.eCm,C.eCq,C.eCl,C.eCr,C.eCs,C.eCw,C.bNG,C.bNR,C.bNM,C.bNS,C.bNU,C.bNH,C.bNF,C.bNZ,C.bNN,C.bNQ,C.bNP,C.bNO,C.bIi,C.fMX,C.fN_,C.fMY,C.bI_,C.bHV,C.bHU,C.bIh,C.bI9,C.bIa,C.bI8,C.bIb,C.bHK,C.bHM,C.bHI,C.bHJ,C.bHA,C.bHB,C.fkt,C.fku,C.fkv,C.fkg,C.fkw,C.fkf,C.fkx,C.fkk,C.fke,C.fkl,C.fkd,C.fkm,C.fkc,C.fkn,C.fka,C.fkb,C.fko,C.fk8,C.fk9,C.fkp,C.fk7,C.dWF,C.dWG,C.dWv,C.dWr,C.dWE,C.dWJ,C.cGU,C.fRO,C.fRP,C.cjH,C.eMY,C.dWg,C.dWh,C.dWi,C.dWk,C.ekL,C.eIt,C.eIC,C.eIy,C.eIA,C.ejJ,C.ejK,C.ejL,C.fVE,C.cxk,C.fpb,C.fpc,C.cjy,C.cjn,C.cjv,C.e0f,C.e0g,C.e09,C.e08,C.e0p,C.e0q,C.e0o,C.e0r,C.e0J,C.e0K,C.e0L,C.eJa,C.eJb,C.eJ4,C.eBY,C.eBZ,C.eC_,C.eC4,C.eC5,C.eBP,C.f2L,C.f2M,C.e1j,C.e1c,C.e1e,C.e1f,C.e1g,C.e1h,C.e0P,C.f0U,C.dK0,C.dJP,C.dJO,C.dJN,C.dJT,C.e_x,C.e_q,C.e_r,C.e_s,C.e_t,C.dfQ,C.eu3,C.eu4,C.eu5,C.eu6])
u(B.ke,[C.fBa,C.ed0,C.ecZ,C.er9,C.erm,C.dLG,C.dM2,C.dS_,C.f0n,C.f0o,C.f00,C.f0d,C.f0e,C.f09,C.f0f,C.f_V,C.eql,C.eqm,C.eqT,C.eqL,C.eqA,C.bNT,C.bNV,C.bNX,C.bNI,C.bNK,C.bIj,C.cpQ,C.fMZ,C.bHT,C.bIf,C.bIe,C.dWD,C.cGV,C.dSU,C.dSS,C.dSM,C.cjK,C.dKz,C.dKu,C.ekN,C.fN8,C.fN9,C.cjm,C.e0B,C.e06,C.diH,C.eJ9,C.eC1,C.eBO,C.e0Q,C.e0S,C.e0O,C.dJR])
u(B.ag,[C.VR,C.Wd,C.UK,C.UP,C.NE,C.aHZ,C.Wc,C.Wr,C.aiX,C.Vq,C.axU,C.V9,C.WJ,C.Vy,C.UL,C.Vp,C.W7,C.Wh,C.WB,C.W6,C.WC,C.VE,C.WE,C.Wq,C.VF,C.Wi,C.UJ,C.VC,C.We])
u(B.ah,[C.bkT,C.aMO,C.aLY,C.aM2,C.aDK,C.aND,C.aMM,C.aMV,C.ayd,C.by1,C.aKr,C.aMb,C.aN6,C.aMg,C.aM_,C.bko,C.aEJ,C.aF1,C.blz,C.aMI,C.aFa,C.aMl,C.blD,C.aMU,C.aMn,C.aMR,C.aLX,C.aMj,C.aMQ])
t(C.byb,C.aMO)
t(C.aEW,C.byb)
u(B.mV,[C.bhY,C.bc_,C.bsY,C.baF,C.brB,C.br1,C.bbk,C.br3,C.bv2,C.bhW,C.bsT,C.aiZ,C.b9R,C.bw5,C.aeR,C.bwh,C.br2,C.bml,C.b8s,C.bgn,C.bsR,C.bbx,C.bsp,C.baU,C.bge,C.brE])
t(C.aLZ,C.aLY)
t(C.aDr,C.aLZ)
t(C.by_,C.aM2)
t(C.aDt,C.by_)
u(B.ax,[C.brZ,C.af9,C.ae1,C.Qt,C.bst,C.a8B,C.be7,C.b7z,C.eX,C.hj,C.b7A,C.j7,C.JQ])
t(C.aI_,C.aND)
t(C.bhV,B.oW)
t(C.aEV,C.aMM)
t(C.blr,C.aMV)
t(C.aye,C.ayd)
t(C.aiY,C.aye)
t(C.aDW,C.by1)
t(C.b9S,C.aKr)
t(C.bkm,C.aMb)
t(C.byi,C.aN6)
t(C.aFn,C.byi)
t(C.by2,C.aMg)
t(C.bkv,C.by2)
t(C.bxZ,C.aM_)
t(C.bk8,C.bxZ)
t(C.bya,C.aMI)
t(C.bl4,C.bya)
t(C.asj,C.aFa)
t(C.aMm,C.aMl)
t(C.aE6,C.aMm)
t(C.byf,C.aMU)
t(C.blq,C.byf)
t(C.by4,C.aMn)
t(C.aE7,C.by4)
t(C.byd,C.aMR)
t(C.bln,C.byd)
t(C.bxY,C.aLX)
t(C.bk7,C.bxY)
t(C.by3,C.aMj)
t(C.bky,C.by3)
t(C.byc,C.aMQ)
t(C.blm,C.byc)
w(C.aMO,B.cp)
w(C.byb,C.qO)
w(C.aLY,B.cp)
w(C.aLZ,C.qO)
w(C.aM2,B.cp)
w(C.by_,C.qO)
w(C.aND,B.eP)
w(C.aMM,B.cp)
w(C.aMV,B.cp)
w(C.ayd,B.cp)
w(C.aye,C.qO)
w(C.aKr,B.cp)
v(C.by1,B.eD)
w(C.aMb,B.cp)
w(C.aM_,B.cp)
w(C.bxZ,C.qO)
w(C.aMg,B.cp)
w(C.by2,C.qO)
w(C.aMI,B.cp)
w(C.bya,C.qO)
w(C.aN6,B.cp)
w(C.byi,C.qO)
w(C.aFa,B.cp)
w(C.aMl,B.cp)
w(C.aMm,C.qO)
w(C.aMn,B.cp)
w(C.by4,C.qO)
w(C.aMR,B.cp)
w(C.byd,C.qO)
w(C.aMU,B.cp)
w(C.byf,C.qO)
w(C.aLX,B.cp)
w(C.bxY,C.qO)
w(C.aMj,B.cp)
w(C.by3,C.qO)
w(C.aMQ,B.cp)
w(C.byc,C.qO)})()
B.jk(b.typeUniverse,JSON.parse('{"VR":{"ag":[],"v":[]},"bkT":{"ah":["VR"]},"Wd":{"ag":[],"v":[]},"aEW":{"ah":["Wd"]},"bhY":{"aC":[]},"UK":{"ag":[],"v":[]},"aDr":{"ah":["UK"]},"UP":{"ag":[],"v":[]},"aDt":{"ah":["UP"]},"bc_":{"aC":[]},"af9":{"ax":[],"v":[]},"ae1":{"ax":[],"v":[]},"aHZ":{"ag":[],"v":[]},"NE":{"ag":[],"v":[]},"aDK":{"ah":["NE"]},"brZ":{"ax":[],"v":[]},"Qt":{"ax":[],"v":[]},"bsY":{"aC":[]},"bst":{"ax":[],"v":[]},"baF":{"aC":[]},"aI_":{"ah":["aHZ"]},"brB":{"aC":[]},"br1":{"aC":[]},"bbk":{"aC":[]},"br3":{"aC":[]},"bv2":{"aC":[]},"Wc":{"ag":[],"v":[]},"bhV":{"aC":[]},"aEV":{"ah":["Wc"]},"bhW":{"aC":[]},"Wr":{"ag":[],"v":[]},"blr":{"ah":["Wr"]},"bsT":{"aC":[]},"aiZ":{"aC":[]},"aiX":{"ag":[],"v":[]},"aiY":{"ah":["aiX"]},"Vq":{"ag":[],"v":[]},"axU":{"ag":[],"v":[]},"aDW":{"ah":["Vq"],"eD":[]},"b9S":{"ah":["axU"]},"b9R":{"aC":[]},"V9":{"ag":[],"v":[]},"bkm":{"ah":["V9"]},"bw5":{"aC":[]},"aeR":{"aC":[]},"a8B":{"ax":[],"v":[]},"WJ":{"ag":[],"v":[]},"Vy":{"ag":[],"v":[]},"UL":{"ag":[],"v":[]},"Vp":{"ag":[],"v":[]},"W7":{"ag":[],"v":[]},"Wh":{"ag":[],"v":[]},"WB":{"ag":[],"v":[]},"W6":{"ag":[],"v":[]},"aFn":{"ah":["WJ"]},"bwh":{"aC":[]},"bkv":{"ah":["Vy"]},"br2":{"aC":[]},"bk8":{"ah":["UL"]},"bko":{"ah":["Vp"]},"bml":{"aC":[]},"aEJ":{"ah":["W7"]},"aF1":{"ah":["Wh"]},"blz":{"ah":["WB"]},"bl4":{"ah":["W6"]},"be7":{"ax":[],"v":[]},"b7z":{"ax":[],"v":[]},"eX":{"ax":[],"v":[]},"hj":{"ax":[],"v":[]},"b7A":{"ax":[],"v":[]},"j7":{"ax":[],"v":[]},"JQ":{"ax":[],"v":[]},"WC":{"ag":[],"v":[]},"b8s":{"aC":[]},"asj":{"ah":["WC"]},"VE":{"ag":[],"v":[]},"aE6":{"ah":["VE"]},"bgn":{"aC":[]},"WE":{"ag":[],"v":[]},"blD":{"ah":["WE"]},"Wq":{"ag":[],"v":[]},"VF":{"ag":[],"v":[]},"Wi":{"ag":[],"v":[]},"blq":{"ah":["Wq"]},"bsR":{"aC":[]},"aE7":{"ah":["VF"]},"bbx":{"aC":[]},"bln":{"ah":["Wi"]},"bsp":{"aC":[]},"UJ":{"ag":[],"v":[]},"VC":{"ag":[],"v":[]},"We":{"ag":[],"v":[]},"bk7":{"ah":["UJ"]},"baU":{"aC":[]},"bky":{"ah":["VC"]},"bge":{"aC":[]},"blm":{"ah":["We"]},"brE":{"aC":[]}}'))
B.CR(b.typeUniverse,JSON.parse('{"qO":1}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.av
return{B:w("m6<u?>"),k:w("u"),J:w("bw<n,K>"),Q:w("dD<n>"),Z:w("a0"),M:w("O<dh>"),f5:w("O<a3n>"),m:w("O<a3r>"),V:w("O<ac>"),O:w("O<u>"),ey:w("O<V>"),dh:w("O<HY>"),aJ:w("O<aA<aD>>"),w:w("O<a0>"),C:w("O<ai<HY>>"),gO:w("O<ai<ai<K>>>"),bj:w("O<ai<n>>"),b:w("O<ai<K>>"),E:w("O<ai<H>>"),fA:w("O<ai<H?>>"),U:w("O<ai<cf>>"),F:w("O<a8<n,aD>>"),g:w("O<t>"),bz:w("O<tE>"),ds:w("O<a8Y>"),v:w("O<h9>"),L:w("O<+(n,n)>"),fT:w("O<+(K,v)>"),I:w("O<+(H,n)>"),u:w("O<+(H,H)>"),c:w("O<+(n,n,a0)>"),e:w("O<+(n,K,K,H)>"),o:w("O<+(n,H,n,H)>"),d:w("O<+(n,n,K,K,a8<n,K>)>"),_:w("O<v1>"),q:w("O<cX>"),fQ:w("O<aaB>"),s:w("O<n>"),cF:w("O<as>"),X:w("O<wq>"),R:w("O<abm>"),p:w("O<v>"),bL:w("O<abI>"),r:w("O<lu>"),a_:w("O<abW>"),cB:w("O<ns>"),ba:w("O<acb>"),d9:w("O<Q_>"),eW:w("O<CE>"),fY:w("O<ZD>"),ed:w("O<Qi>"),g4:w("O<bmk>"),ac:w("O<ae4>"),cd:w("O<CO>"),fr:w("O<aeY>"),e4:w("O<a0T>"),x:w("O<af4>"),au:w("O<aIR>"),f7:w("O<R>"),n:w("O<K>"),t:w("O<H>"),dS:w("O<aC?>"),fs:w("O<tE?>"),bN:w("O<H?>"),a:w("O<cf>"),eH:w("bg"),gJ:w("cB<aiY>"),z:w("cB<ah<ag>>"),bF:w("ai<u>"),gl:w("ai<V>"),ew:w("ai<aD>"),j:w("ai<@>"),h:w("a8<n,@>"),f:w("a8<@,@>"),bd:w("N<eg,n>"),fR:w("N<+(K,v),v>"),l:w("iF"),gA:w("zt"),gD:w("w_"),P:w("cu"),K:w("aD"),W:w("tE"),dV:w("eg"),N:w("n"),bO:w("as"),G:w("jR"),Y:w("bp<K>"),D:w("abn"),gc:w("dK"),gj:w("c0<n>"),aC:w("c0<H?>"),dg:w("ee<qW>"),e3:w("baX"),a2:w("CA"),f3:w("qW"),es:w("G7"),gV:w("n7"),y:w("R"),i:w("K"),A:w("@"),S:w("H"),bM:w("ai<@>?"),cK:w("aD?"),az:w("q5?"),T:w("n?"),cD:w("K?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aZX=new B.dh(0,0.1)
D.b0C=new C.aSN(0,0,0)
D.L7=new C.aSN(0,0.5,0)
D.b1a=new B.ay(A.bj,1,A.r,-1)
D.b2D=new B.aZ(0,1/0,0,290)
D.b2K=new B.aZ(16,1/0,16,1/0)
D.b3Y=new B.o(A.be,null,null,null,null,null,A.a6)
D.ffn=new B.F(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSn=new B.y("\u26a1",null,D.ffn,null,null,null,null,null,null,null,null,null)
D.b8w=new B.cg(A.A,null,null,D.fSn,null)
D.aT3=new B.F(!0,A.bY,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHS=new B.y("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aT3,null,A.L,null,null,null,null,null,null,null)
D.ekh=new B.D(A.oc,D.fHS,null)
D.b8F=new B.cg(A.A,null,null,D.ekh,null)
D.fLO=new B.y("Press Drop! and watch them fall from 20 metres.",null,A.kr,null,A.L,null,null,null,null,null,null,null)
D.ekl=new B.D(A.oc,D.fLO,null)
D.b9_=new B.cg(A.A,null,null,D.ekl,null)
D.fqV=new B.F(!0,A.jM,null,null,null,null,18,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQI=new B.y("Draw anywhere",null,D.fqV,null,null,null,null,null,null,null,null,null)
D.b93=new B.cg(A.A,null,null,D.fQI,null)
D.fxO=new B.y("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aT3,null,A.L,null,null,null,null,null,null,null)
D.el5=new B.D(A.Gb,D.fxO,null)
D.b9p=new B.cg(A.A,null,null,D.el5,null)
D.adW=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.bbE=new B.u(1,0.8509803921568627,1,0.8941176470588236,A.q)
D.bcb=new B.u(1,0.00784313725490196,0.0196078431372549,0.06274509803921569,A.q)
D.bd4=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.Xi=new B.u(0.9333333333333333,0.06666666666666667,0.07450980392156863,0.09411764705882353,A.q)
D.bda=new B.u(1,0.08627450980392157,0.08627450980392157,0.11372549019607843,A.q)
D.bdf=new B.u(1,0.11764705882352941,0.11764705882352941,0.14901960784313725,A.q)
D.bdl=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bdB=new B.u(1,0.24705882352941178,0.11372549019607843,0.2901960784313726,A.q)
D.bew=new B.u(1,0.4196078431372549,0.17647058823529413,0.3607843137254902,A.q)
D.beC=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.beI=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.bf4=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.bfa=new B.u(1,1,0.9450980392156862,0.7215686274509804,A.q)
D.bgb=new B.u(1,0.043137254901960784,0.03137254901960784,0.12549019607843137,A.q)
D.bgr=new B.u(1,0.3568627450980392,0.6901960784313725,0.9607843137254902,A.q)
D.afo=new B.u(1,1,0.23137254901960785,0.12156862745098039,A.q)
D.bgY=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.B9=new B.u(1,0.0196078431372549,0.023529411764705882,0.043137254901960784,A.q)
D.bhZ=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.biF=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.ag2=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.bj2=new B.u(1,0.027450980392156862,0.027450980392156862,0.043137254901960784,A.q)
D.bjh=new B.u(1,1,0.8235294117647058,0.47843137254901963,A.q)
D.bjn=new B.u(1,0.984313725490196,0.6509803921568628,0.8509803921568627,A.q)
D.bjE=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.agq=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.Yc=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.blo=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.blr=new B.u(1,0.043137254901960784,0.10588235294117647,0.2,A.q)
D.blv=new B.u(1,0.00784313725490196,0.00784313725490196,0.01568627450980392,A.q)
D.blF=new B.u(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.q)
D.agU=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.bm3=new B.u(1,0.043137254901960784,0.050980392156862744,0.07058823529411765,A.q)
D.bmh=new B.u(0.4,1,0.8901960784313725,0.6392156862745098,A.q)
D.Yp=new B.u(1,0.043137254901960784,0.043137254901960784,0.06274509803921569,A.q)
D.bnl=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.bnt=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.aho=new B.u(1,0.0784313725490196,0.0392156862745098,0.13333333333333333,A.q)
D.bnI=new B.u(1,0.043137254901960784,0.050980392156862744,0.0784313725490196,A.q)
D.bnM=new B.u(1,0.01568627450980392,0.01568627450980392,0.0392156862745098,A.q)
D.bnV=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.bo5=new B.u(1,0.00784313725490196,0.043137254901960784,0.0196078431372549,A.q)
D.vJ=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.boh=new B.u(1,1,0.9686274509803922,0.6980392156862745,A.q)
D.ahP=new B.u(1,0.054901960784313725,0.22745098039215686,0.4196078431372549,A.q)
D.bp8=new B.u(1,0.7490196078431373,0.8431372549019608,1,A.q)
D.bpW=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.YT=new B.u(1,0.043137254901960784,0.06274509803921569,0.18823529411764706,A.q)
D.aii=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.YW=new B.u(1,0.0784313725490196,0,0.1803921568627451,A.q)
D.brI=new B.u(0.2,0.5058823529411764,0.5490196078431373,0.9725490196078431,A.q)
D.aiS=new C.aUz(0,"none")
D.hqu=new C.aUz(2,"floydSteinberg")
D.bvD=new B.b9(11e6)
D.ajh=new B.Q(0,0,9,0)
D.bxf=new B.Q(10,10,10,6)
D.bxo=new B.Q(10,34,10,26)
D.bxw=new B.Q(10,6,10,2)
D.bxy=new B.Q(10,8,0,10)
D.by9=new B.Q(12,8,8,8)
D.byf=new B.Q(14,0,14,22)
D.byh=new B.Q(14,0,14,30)
D.ajO=new B.Q(14,10,8,12)
D.bzi=new B.Q(16,4,16,28)
D.bzs=new B.Q(16,8,16,12)
D.bBB=new B.Q(26,12,26,58)
D.bCp=new B.Q(4,4,6,2)
D.bCr=new B.Q(4,4,8,2)
D.bD3=new B.Q(8,14,8,12)
D.bDa=new B.Q(8,40,8,30)
D.bDe=new B.Q(8,6,16,0)
D.bDf=new B.Q(8,6,8,8)
D.bDA=new B.Q(0,0,1.5,0)
D.b0o=new B.Hn(26,"saturation")
D.bDS=new B.xn(A.cX,D.b0o,null,A.Xa)
D.fwU=new B.y("REACTION LAB",null,X.aTE,null,null,null,null,A.a1,null,1,null,null)
D.bDZ=new B.bA(1,A.bc,D.fwU,null)
D.fnw=new B.F(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA5=new B.y("CORE PROTOCOL",null,D.fnw,null,null,null,null,null,null,null,null,null)
D.bEc=new B.bA(1,A.bc,D.fA5,null)
D.fAT=new B.y("\ud83d\udce2 NGMY Ads",null,A.qK,null,null,null,null,A.eL,null,1,null,null)
D.bEX=new B.bA(1,A.bc,D.fAT,null)
D.fvB=new B.y("Wire selected",null,A.fS,null,null,null,null,null,null,null,null,null)
D.bFb=new B.bA(1,A.bc,D.fvB,null)
D.amZ=new B.a0(62712,"MaterialIcons",!1)
D.bKV=new B.a0(62878,"MaterialIcons",!1)
D.bKY=new B.a0(62908,"MaterialIcons",!1)
D.bKZ=new B.a0(62931,"MaterialIcons",!1)
D.bL1=new B.a0(62951,"MaterialIcons",!1)
D.bLi=new B.a0(63070,"MaterialIcons",!1)
D.Oo=new B.a0(63128,"MaterialIcons",!1)
D.H_=new B.a0(63726,"MaterialIcons",!1)
D.bMD=new B.a0(983122,"MaterialIcons",!1)
D.bMR=new B.a0(983247,"MaterialIcons",!1)
D.bN2=new B.a0(983415,"MaterialIcons",!1)
D.aoc=new B.a0(983467,"MaterialIcons",!1)
D.bNj=new B.a0(983616,"MaterialIcons",!1)
D.bNM=new B.a0(984561,"MaterialIcons",!1)
D.bOn=new B.ae(A.ru,24,A.aU,null,null,null)
D.bPa=new B.ae(A.OH,null,A.ad,null,null,null)
D.bPI=new B.ae(A.nu,21,A.ad,null,null,null)
D.bMC=new B.a0(983117,"MaterialIcons",!1)
D.bR3=new B.ae(D.bMC,28,A.c,null,null,null)
D.bRj=new B.ae(A.iW,18,null,null,null,null)
D.bT9=new B.ae(A.e9,21,A.cs,null,null,null)
D.bTo=new B.ae(A.oj,null,A.ad,null,null,null)
D.bTy=new B.ae(A.a2c,21,A.ad,null,null,null)
D.bUo=new B.ae(A.eJ,17,A.ad,null,null,null)
D.apB=new B.ae(A.eJ,19,null,null,null,null)
D.rC=new B.ae(A.um,21,A.ad,null,null,null)
D.bVY=new B.ae(A.Oh,null,A.ad,null,null,null)
D.bX6=new B.ae(A.iW,21,A.ad,null,null,null)
D.bXI=new B.ae(A.a1n,46,A.aQ,null,null,null)
D.bY_=new B.ae(A.fl,20,A.aB,null,null,null)
D.bYG=new B.ae(A.e5,null,A.aU,null,null,null)
D.bZ0=new B.ae(A.oi,null,A.aB,null,null,null)
D.dn6=w([A.d7,A.d2,A.d7],x.O)
D.c13=new B.a9(A.a5,A.a8,A.x,D.dn6,null,null)
D.d_g=w([A.bO,A.bm],x.O)
D.c1b=new B.a9(A.b4,A.b7,A.x,D.d_g,null,null)
D.c1n=new B.a9(A.b4,A.b7,A.x,A.azR,null,null)
D.aqB=new B.a9(A.b4,A.b7,A.x,N.a40,null,null)
D.cXU=w([A.oS,A.is],x.O)
D.c29=new B.a9(A.b4,A.b7,A.x,D.cXU,null,null)
D.cZZ=w([A.e7,A.av],x.O)
D.aqI=new B.a9(A.b4,A.b7,A.x,D.cZZ,null,null)
D.dgU=w([A.dv,A.ja,A.bm],x.O)
D.c2s=new B.a9(A.a5,A.a8,A.x,D.dgU,null,null)
D.dh_=w([A.hf,A.cp],x.O)
D.c2N=new B.a9(A.b4,A.b7,A.x,D.dh_,null,null)
D.cwe=w([A.bO,A.dv],x.O)
D.c2W=new B.a9(A.a5,A.a8,A.x,D.cwe,null,null)
D.aAA=w([A.e7,K.nd],x.O)
D.c32=new B.a9(A.b4,A.b7,A.x,D.aAA,null,null)
D.c3j=new B.a9(A.b4,A.b7,A.x,H.ar3,null,null)
D.c47=new B.a9(A.ay,A.aE,A.x,A.a3Y,null,null)
D.d8C=w([A.av,A.w],x.O)
D.c4i=new B.a9(A.b4,A.b7,A.x,D.d8C,null,null)
D.c4l=new B.a9(A.b4,A.b7,A.x,G.azW,null,null)
D.bnQ=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.boG=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cJ3=w([A.Mv,D.bnQ,D.boG],x.O)
D.c4v=new B.a9(A.b4,A.b7,A.x,D.cJ3,null,null)
D.cwy=w([A.d1,A.h2],x.O)
D.c4L=new B.a9(A.b4,A.b7,A.x,D.cwy,null,null)
D.c5f=w([0,2,4,6,7,9,11],x.t)
D.c5t=w([0,4,7],x.t)
D.c5u=w([0,4,7,12],x.t)
D.c5v=w([0,4,7,4],x.t)
D.azC=w([A.hb,A.q_],x.O)
D.az6=w([A.iQ,A.cO],x.O)
D.axr=w([A.bw,A.dF],x.O)
D.cRE=w([A.aU,A.d1],x.O)
D.cYf=w([A.cs,A.ek],x.O)
D.dig=w([A.c5,A.kY],x.O)
D.awT=w([A.cR,A.kd],x.O)
D.cWJ=w([A.bM,A.aJ],x.O)
D.c5R=w([D.azC,D.az6,A.a45,D.axr,D.cRE,D.cYf,A.ayB,D.dig,D.awT,D.cWJ],B.av("O<ai<u>>"))
D.cax=w([120,220,380],x.t)
D.ceh=w([12,16,19,24],x.t)
D.cer=w([1400,800,450,2400],x.t)
D.cmR=w([250,450,900,1500],x.t)
D.cqh=w([A.bL,A.eO],x.O)
D.bg1=new B.u(1,0.043137254901960784,0.10588235294117647,0.24705882352941178,A.q)
D.cwd=w([D.bg1,A.d7],x.O)
D.bcr=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.bof=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.bm5=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.brO=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.bld=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.aw9=w([D.bcr,D.bof,D.bm5,D.brO,D.bld],x.O)
D.cDJ=w([A.cI,G.n6,A.hW,G.aeh,A.cI,A.hW],x.O)
D.cDZ=w([50,25,75],x.t)
D.cJA=w([0,5,10,15,18,20,25],x.t)
D.cRW=w([900,500,250,1600],x.t)
D.cVr=w([0.78,1],x.n)
D.cVu=w([0,2,4,7,9,12,14,16],x.t)
D.cVG=w([A.eW,A.o1],x.O)
D.cVT=w([A.M,A.fa],x.O)
D.cW3=w([A.bw,A.bA,A.b9,A.bw],x.O)
D.axz=w([A.c5,A.aQ,A.bG,A.bw,A.bj],x.O)
D.a3V=w([A.aw,A.bG,A.be,A.aQ,A.o2],x.O)
D.cXz=w([A.av,A.aw,A.cR,A.bG,A.be,A.cw,A.cc,A.bA,A.Xo],x.O)
D.a3Z=w([0.04,0.17,0.3],x.n)
D.a2S=w([0,0,0],x.t)
D.d9T=w([D.a2S,D.a2S,D.a2S],x.E)
D.d0V=w([0.375,1,0],x.a)
D.dtl=w([0.375,0,1],x.a)
D.dpB=w([0.25,1,1],x.a)
D.cRQ=w([D.d0V,D.dtl,D.dpB],x.U)
D.daI=w([0.4375,1,0],x.a)
D.daF=w([0.1875,-1,1],x.a)
D.cDM=w([0.3125,0,1],x.a)
D.dhq=w([0.0625,1,1],x.a)
D.de0=w([D.daI,D.daF,D.cDM,D.dhq],x.U)
D.dkK=w([0.19047619047619047,1,0],x.a)
D.dt6=w([0.09523809523809523,2,0],x.a)
D.cDS=w([0.047619047619047616,-2,1],x.a)
D.d_i=w([0.09523809523809523,-1,1],x.a)
D.dph=w([0.19047619047619047,0,1],x.a)
D.d4N=w([0.09523809523809523,1,1],x.a)
D.cWV=w([0.047619047619047616,2,1],x.a)
D.dr9=w([0.023809523809523808,-2,2],x.a)
D.dow=w([0.047619047619047616,-1,2],x.a)
D.du5=w([0.09523809523809523,0,2],x.a)
D.cZK=w([0.047619047619047616,1,2],x.a)
D.dmj=w([0.023809523809523808,2,2],x.a)
D.cZc=w([D.dkK,D.dt6,D.cDS,D.d_i,D.dph,D.d4N,D.cWV,D.dr9,D.dow,D.du5,D.cZK,D.dmj],x.U)
D.d70=w([0.125,1,0],x.a)
D.d24=w([0.125,2,0],x.a)
D.cpL=w([0.125,-1,1],x.a)
D.d2i=w([0.125,0,1],x.a)
D.d9D=w([0.125,1,1],x.a)
D.deP=w([0.125,0,2],x.a)
D.cRP=w([D.d70,D.d24,D.cpL,D.d2i,D.d9D,D.deP],x.U)
D.cYo=w([D.d9T,D.cRQ,D.de0,D.cZc,D.cRP],B.av("O<ai<ai<cf>>>"))
D.f_t=new C.v1("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.f_z=new C.v1("Medium engine","A good all-rounder.",0.3,0.9)
D.f_y=new C.v1("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.HN=w([D.f_t,D.f_z,D.f_y],x._)
D.exm=new B.z(6,"Easy")
D.ey7=new B.z(8,"Medium")
D.et9=new B.z(10,"Hard")
D.cZ3=w([D.exm,D.ey7,D.et9],x.I)
D.cZm=w([A.bt,A.b9,A.bw,A.bj],x.O)
D.cZp=w([F.agk,G.ah6],x.O)
D.axR=w([0.55,0.78,1],x.n)
D.d_m=w([A.bG,A.c5,A.aQ],x.O)
D.d_L=w([0.93,0.975,1],x.n)
D.d0b=w([0,0.55,0.6],x.n)
D.beg=new B.u(1,0.23137254901960785,0.0392156862745098,0.0392156862745098,A.q)
D.d0k=w([A.tI,D.beg,A.ej],x.O)
D.bmS=new B.u(1,0.01568627450980392,0.06666666666666667,0.16862745098039217,A.q)
D.bh1=new B.u(1,0.043137254901960784,0.16470588235294117,0.24705882352941178,A.q)
D.blk=new B.u(1,0.0196078431372549,0.06274509803921569,0.11372549019607843,A.q)
D.d0l=w([D.bmS,D.bh1,D.blk],x.O)
D.ay1=w([A.c,A.fU,A.nU,A.av],x.O)
D.d0E=w([A.aC,A.fr,A.kY,A.iR,A.du],x.O)
D.ePn=new B.z("solid","Solid")
D.eFg=new B.z("three","3D block")
D.eHj=new B.z("neon","Neon tube")
D.eKl=new B.z("gradient","Gradient")
D.ePv=new B.z("sticker","Sticker")
D.d1p=w([D.ePn,H.aOP,D.eFg,D.eHj,D.eKl,D.ePv,H.aOR,A.Tu],x.L)
D.d1q=w([A.bG,A.aQ,A.bj,A.c5,A.c,A.cR],x.O)
D.fVq=new C.yg("Moon",1737,4291941851)
D.fVn=new C.yg("Earth",6371,4281908728)
D.fVr=new C.yg("Neptune",24622,4284524026)
D.fVs=new C.yg("Saturn",58232,4294829706)
D.fVo=new C.yg("Jupiter",69911,4294677052)
D.fVt=new C.yg("Sun",696340,4294688548)
D.fVu=new C.yg("Sirius A",119e4,4290763774)
D.fVl=new C.yg("Arcturus",179e5,4294818420)
D.fVm=new C.yg("Betelgeuse",531e6,4294472049)
D.fVp=new C.yg("UY Scuti",667e6,4293870660)
D.QS=w([D.fVq,D.fVn,D.fVr,D.fVs,D.fVo,D.fVt,D.fVu,D.fVl,D.fVm,D.fVp],B.av("O<yg>"))
D.eVw=new B.bk("glow","Glow",A.a1i)
D.eT6=new B.bk("rainbow","Rainbow",A.ns)
D.eTt=new B.bk("stars","Stars",A.il)
D.eSR=new B.bk("sparks","Sparks",A.e5)
D.eUN=new B.bk("fire","Fire",A.wd)
D.d1I=w([D.eVw,D.eT6,D.eTt,D.eSR,D.eUN],x.c)
D.ay8=w([A.be,A.aw,A.bG,A.d2],x.O)
D.d1S=w([Aj.ahN,A.cR,A.d1],x.O)
D.d2N=w([0.2,1],x.n)
D.f_q=new C.v1("Radar","Shows your height above the ground.",0.1,0)
D.f_r=new C.v1("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.f_o=new C.v1("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.ayg=w([D.f_q,D.f_r,D.f_o],x._)
D.d3P=w(["Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.","There are more stars in the universe than grains of sand on all of Earth's beaches.","A day on Venus is longer than its year.","The Milky Way is about 100,000 light-years across and has 100 to 400 billion stars.","A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.","The Moon moves about 3.8 cm farther from Earth every year.","If you could fall into a black hole, tides would stretch you like spaghetti. Scientists call it spaghettification.","Earth spins at about 1,670 km/h at the equator, and orbits the Sun at about 107,000 km/h.","Gravity is the weakest of the four forces, yet it holds galaxies together.","Astronauts on the space station are not weightless because gravity is gone: they are in constant free fall around Earth.","The universe is about 13.8 billion years old and is still expanding.","Saturn is the only planet less dense than water.","On the Moon you could jump about six times higher than on Earth.","Most of the mass of a galaxy is dark matter that nobody has ever seen.","Jupiter's gravity is so strong it pulls comets and asteroids away from Earth.","A year on Neptune lasts 165 Earth years."],x.s)
D.d43=w([47,100,220,470,1000],x.n)
D.d4q=w([0,0.42,0.43,1],x.n)
D.d4E=w([0,2,4,7,9],x.t)
D.IT={volts:0}
D.a5G=new B.bw(D.IT,[3],x.J)
D.Ji=new B.ea(["b","battery",0.2,0.3,D.a5G])
D.eed={on:0}
D.dxT=new B.bw(D.eed,[1],x.J)
D.DP=new B.ea(["s","switch",0.5,0.3,D.dxT])
D.eY7=new B.ea(["l","bulb",0.8,0.3,A.jh])
D.d_p=w([D.Ji,D.DP,D.eY7],x.d)
D.DO=new B.cw(["b",0,"s",0])
D.eX8=new B.cw(["s",1,"l",0])
D.aOV=new B.cw(["l",1,"b",1])
D.dh5=w([D.DO,D.eX8,D.aOV],x.o)
D.cZQ=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.esl=new C.mJ("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.d_p,D.dh5,D.cZQ)
D.aIN={ohms:0}
D.aGn=new B.bw(D.aIN,[220],x.J)
D.eXB=new B.ea(["r","resistor",0.5,0.3,D.aGn])
D.eYm=new B.ea(["d","led",0.8,0.3,A.jh])
D.dkn=w([D.Ji,D.eXB,D.eYm],x.d)
D.eWu=new B.cw(["b",0,"r",0])
D.eX2=new B.cw(["r",1,"d",0])
D.eWA=new B.cw(["d",1,"b",1])
D.dtz=w([D.eWu,D.eX2,D.eWA],x.o)
D.dkP=w(["led","diode","indicator"],x.s)
D.ess=new C.mJ("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dkn,D.dtz,D.dkP)
D.a6W={level:0}
D.dxf=new B.bw(D.a6W,[0.2],x.J)
D.eXH=new B.ea(["p","pot",0.5,0.3,D.dxf])
D.eXJ=new B.ea(["m","motor",0.8,0.3,A.jh])
D.d_I=w([D.Ji,D.eXH,D.eXJ],x.d)
D.eWt=new B.cw(["b",0,"p",0])
D.eWZ=new B.cw(["p",1,"m",0])
D.eWV=new B.cw(["m",1,"b",1])
D.dp8=w([D.eWt,D.eWZ,D.eWV],x.o)
D.dgN=w(["fan","motor","spin","dimmer"],x.s)
D.esj=new C.mJ("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.d_I,D.dp8,D.dgN)
D.a5D=new B.bw(D.a6W,[0.9],x.J)
D.aP1=new B.ea(["s","solar",0.25,0.3,D.a5D])
D.aP0=new B.ea(["l","bulb",0.75,0.3,A.jh])
D.d2t=w([D.aP1,D.aP0],x.d)
D.eX5=new B.cw(["s",0,"l",0])
D.eWU=new B.cw(["l",1,"s",1])
D.d0v=w([D.eX5,D.eWU],x.o)
D.dpO=w(["solar","sun","without battery","no battery","free"],x.s)
D.esm=new C.mJ("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.d2t,D.d0v,D.dpO)
D.eYp=new B.ea(["c","crank",0.25,0.3,D.a5D])
D.df6=w([D.eYp,D.aP0],x.d)
D.eWx=new B.cw(["c",0,"l",0])
D.eWT=new B.cw(["l",1,"c",1])
D.dfG=w([D.eWx,D.eWT],x.o)
D.dfg=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.esi=new C.mJ("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.df6,D.dfG,D.dfg)
D.dxe=new B.bw(D.a6W,[0.7],x.J)
D.eXM=new B.ea(["t","turbine",0.25,0.3,D.dxe])
D.eXz=new B.ea(["m","motor",0.75,0.3,A.jh])
D.d9i=w([D.eXM,D.eXz],x.d)
D.eXg=new B.cw(["t",0,"m",0])
D.eWW=new B.cw(["m",1,"t",1])
D.d8g=w([D.eXg,D.eWW],x.o)
D.ddR=w(["wind","turbine","windmill","water","hydro"],x.s)
D.esf=new C.mJ("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.d9i,D.d8g,D.ddR)
D.aGk=new B.bw(D.IT,[9],x.J)
D.a80=new B.ea(["b","battery",0.2,0.3,D.aGk])
D.aP_=new B.ea(["r","radio",0.8,0.3,A.jh])
D.dqp=w([D.a80,D.DP,D.aP_],x.d)
D.eXa=new B.cw(["s",1,"r",0])
D.aOW=new B.cw(["r",1,"b",1])
D.c5b=w([D.DO,D.eXa,D.aOW],x.o)
D.doV=w(["radio","music","listen"],x.s)
D.esr=new C.mJ("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dqp,D.c5b,D.doV)
D.dyj=new B.bw(D.IT,[12],x.J)
D.aOZ=new B.ea(["b","battery",0.2,0.3,D.dyj])
D.eY8=new B.ea(["t","tv",0.8,0.3,A.jh])
D.d_r=w([D.aOZ,D.DP,D.eY8],x.d)
D.eXb=new B.cw(["s",1,"t",0])
D.aOX=new B.cw(["t",1,"b",1])
D.dij=w([D.DO,D.eXb,D.aOX],x.o)
D.dqm=w(["tv","television","screen","watch"],x.s)
D.esc=new C.mJ("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.d_r,D.dij,D.dqm)
D.eXZ=new B.ea(["z","buzzer",0.8,0.3,A.jh])
D.cGk=w([D.Ji,D.DP,D.eXZ],x.d)
D.eXc=new B.cw(["s",1,"z",0])
D.eXu=new B.cw(["z",1,"b",1])
D.cVf=w([D.DO,D.eXc,D.eXu],x.o)
D.dnc=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.eso=new C.mJ("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cGk,D.cVf,D.dnc)
D.eXI=new B.ea(["h","heater",0.8,0.3,A.jh])
D.dcy=w([D.a80,D.DP,D.eXI],x.d)
D.eX7=new B.cw(["s",1,"h",0])
D.eWI=new B.cw(["h",1,"b",1])
D.cVZ=w([D.DO,D.eX7,D.eWI],x.o)
D.cq9=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.esd=new C.mJ("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.dcy,D.cVZ,D.cq9)
D.eYa=new B.ea(["s","solar",0.2,0.25,D.a5D])
D.dyn=new B.bw(D.aIN,[100],x.J)
D.eYd=new B.ea(["r","resistor",0.55,0.25,D.dyn])
D.eYk=new B.ea(["c","capacitor",0.85,0.25,A.jh])
D.eXE=new B.ea(["q","resistor",0.55,0.6,D.aGn])
D.eYb=new B.ea(["d","led",0.85,0.6,A.jh])
D.dhQ=w([D.eYa,D.eYd,D.eYk,D.eXE,D.eYb],x.d)
D.eX6=new B.cw(["s",0,"r",0])
D.eX1=new B.cw(["r",1,"c",0])
D.eWz=new B.cw(["c",1,"s",1])
D.eWy=new B.cw(["c",0,"q",0])
D.eX0=new B.cw(["q",1,"d",0])
D.eWB=new B.cw(["d",1,"c",1])
D.d69=w([D.eX6,D.eX1,D.eWz,D.eWy,D.eX0,D.eWB],x.o)
D.deq=w(["capacitor","store","charge","flash"],x.s)
D.esq=new C.mJ("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.dhQ,D.d69,D.deq)
D.eXP=new B.ea(["b","battery",0.15,0.3,D.a5G])
D.eYq=new B.ea(["l1","bulb",0.5,0.3,A.jh])
D.eXW=new B.ea(["l2","bulb",0.85,0.3,A.jh])
D.cYv=w([D.eXP,D.eYq,D.eXW],x.d)
D.eWs=new B.cw(["b",0,"l1",0])
D.eWQ=new B.cw(["l1",1,"l2",0])
D.eWR=new B.cw(["l2",1,"b",1])
D.da3=w([D.eWs,D.eWQ,D.eWR],x.o)
D.dq7=w(["series","two bulbs","dim"],x.s)
D.esg=new C.mJ("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.cYv,D.da3,D.dq7)
D.eew={volts:0,charge:1}
D.dyq=new B.bw(D.eew,[1.5,0],x.J)
D.eYi=new B.ea(["b","battery",0.75,0.3,D.dyq])
D.cXV=w([D.aP1,D.eYi],x.d)
D.eX4=new B.cw(["s",0,"b",0])
D.eWw=new B.cw(["b",1,"s",1])
D.d6s=w([D.eX4,D.eWw],x.o)
D.dez=w(["charge","rechargeable","flat","recharge"],x.s)
D.ese=new C.mJ("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.cXV,D.d6s,D.dez)
D.dyi=new B.bw(D.IT,[4.5],x.J)
D.eXK=new B.ea(["b","battery",0.2,0.3,D.dyi])
D.aOY=new B.ea(["p","phone",0.8,0.3,A.jh])
D.d97=w([D.eXK,D.DP,D.aOY],x.d)
D.eX9=new B.cw(["s",1,"p",0])
D.a8_=new B.cw(["p",1,"b",1])
D.dm8=w([D.DO,D.eX9,D.a8_],x.o)
D.dnC=w(["phone","charger","usb","mobile"],x.s)
D.esk=new C.mJ("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.d97,D.dm8,D.dnC)
D.eXw=new B.ea(["f","fan",0.8,0.3,A.jh])
D.cif=w([D.Ji,D.eXw],x.d)
D.eWr=new B.cw(["b",0,"f",0])
D.eWG=new B.cw(["f",1,"b",1])
D.cWw=w([D.eWr,D.eWG],x.o)
D.dgM=w(["fan","cool","air","wind"],x.s)
D.est=new C.mJ("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.cif,D.cWw,D.dgM)
D.eY2=new B.ea(["b","battery",0.15,0.2,D.a5G])
D.eXx=new B.ea(["a","ammeter",0.5,0.2,A.jh])
D.eXv=new B.ea(["l","bulb",0.85,0.2,A.jh])
D.eY4=new B.ea(["v","voltmeter",0.5,0.6,A.jh])
D.deV=w([D.eY2,D.eXx,D.eXv,D.eY4],x.d)
D.eWp=new B.cw(["b",0,"a",0])
D.eWo=new B.cw(["a",1,"l",0])
D.eXi=new B.cw(["v",0,"l",0])
D.eXj=new B.cw(["v",1,"l",1])
D.d6j=w([D.eWp,D.eWo,D.aOV,D.eXi,D.eXj],x.o)
D.dty=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.esp=new C.mJ("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.deV,D.d6j,D.dty)
D.eYt=new B.ea(["b","battery",0.15,0.2,D.aGk])
D.eXO=new B.ea(["t","tv",0.55,0.2,A.jh])
D.aGl=new B.bw(D.IT,[5],x.J)
D.eXC=new B.ea(["c","buck",0.4,0.5,D.aGl])
D.eXQ=new B.ea(["p","phone",0.8,0.5,A.jh])
D.d3R=w([D.eYt,D.eXO,D.eXC,D.eXQ],x.d)
D.eWv=new B.cw(["b",0,"t",0])
D.aOT=new B.cw(["b",0,"c",0])
D.aOU=new B.cw(["c",1,"p",0])
D.d94=w([D.eWv,D.aOX,D.aOT,D.aOU,D.a8_],x.o)
D.d20=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.esh=new C.mJ("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.d3R,D.d94,D.d20)
D.eXD=new B.ea(["c","buck",0.5,0.3,D.aGl])
D.cVO=w([D.aOZ,D.eXD,D.aOY],x.d)
D.d_S=w([D.aOT,D.aOU,D.a8_],x.o)
D.ctD=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.esb=new C.mJ("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.cVO,D.d_S,D.ctD)
D.eXU=new B.ea(["d","diode",0.5,0.3,A.jh])
D.dah=w([D.a80,D.eXU,D.aP_],x.d)
D.eWq=new B.cw(["b",0,"d",0])
D.eWC=new B.cw(["d",1,"r",0])
D.cIS=w([D.eWq,D.eWC,D.aOW],x.o)
D.d1F=w(["diode","protect","backwards","one way"],x.s)
D.esn=new C.mJ("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.dah,D.cIS,D.d1F)
D.QV=w([D.esl,D.ess,D.esj,D.esm,D.esi,D.esf,D.esr,D.esc,D.eso,D.esd,D.esq,D.esg,D.ese,D.esk,D.est,D.esp,D.esh,D.esb,D.esn],B.av("O<mJ>"))
D.hpA=new C.Gm("Moon",1.62,A.dv,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hpy=new C.Gm("Mars",3.71,A.aw,"Mars has about 38 percent of Earth's gravity.")
D.hpB=new C.Gm("Mercury",3.7,A.kc,"Mercury is small, so its gravity is like Mars.")
D.hpv=new C.Gm("Venus",8.87,A.aU,"Venus is almost as heavy as Earth, with strong gravity.")
D.hpx=new C.Gm("Earth",9.81,A.aQ,"On Earth gravity is strong, and the air also slows you down.")
D.hpz=new C.Gm("Neptune",11.15,A.d2,"Neptune pulls a little harder than Earth.")
D.hpw=new C.Gm("Jupiter",24.79,A.cR,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.rF=w([D.hpA,D.hpy,D.hpB,D.hpv,D.hpx,D.hpz,D.hpw],B.av("O<Gm>"))
D.d67=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.d6g=w([A.cp,A.M],x.O)
D.a4e=w(["Africa","Asia","Europe","North America","South America","Oceania","Antarctica","Seven seas (open ocean)"],x.s)
D.d6R=w([0.2,0.5,0.8],x.n)
D.f2D=new B.cX(A.bl,A.I,4)
D.d7f=w([D.f2D],x.q)
D.ayM=w([0,31,59,90,120,151,181,212,243,273,304,334],x.t)
D.aYN=new C.KH(0,"accordion")
D.cWR=w([A.jB,A.Cm,A.C7],x.w)
D.d3h=w(["Mail","SMS","Ad"],x.s)
D.cXq=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hnN=new C.AI(D.aYN,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.azC,D.cWR,D.d3h,D.cXq)
D.abC=new C.KH(1,"flip")
D.dek=w([A.rv,A0.Hd,A.uq],x.w)
D.d8P=w(["Unlock","Verify","Secure"],x.s)
D.cVK=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hnM=new C.AI(D.abC,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.az6,D.dek,D.d8P,D.cVK)
D.aYO=new C.KH(2,"towers")
D.d7B=w([A.yT,A.qp,A.i0],x.w)
D.d7a=w(["Save","Grow","Earn"],x.s)
D.cJL=w(["","",""],x.s)
D.hnO=new C.AI(D.aYO,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a45,D.d7B,D.d7a,D.cJL)
D.abD=new C.KH(3,"assemble")
D.dfj=w([A.ol,A.ht,A.e5],x.w)
D.d2F=w(["Launch","Charge","Shine"],x.s)
D.dbE=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hnQ=new C.AI(D.abD,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.axr,D.dfj,D.d2F,D.dbE)
D.aYP=new C.KH(4,"carousel")
D.df7=w([A.b9,A.eW],x.O)
D.d3q=w([A.nu,A.anq,A.OO],x.w)
D.cYU=w(["Explore","Discover","Learn"],x.s)
D.d9d=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hnL=new C.AI(D.aYP,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.df7,D.d3q,D.cYU,D.d9d)
D.aYQ=new C.KH(5,"burst")
D.d75=w([A.ig,A.tD],x.O)
D.cXl=w([A.l7,A.mK,A.i_],x.w)
D.cXH=w(["Cheer","Win","Love"],x.s)
D.cZX=w(["Make some noise","First place","Share the joy"],x.s)
D.hnP=new C.AI(D.aYQ,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.d75,D.cXl,D.cXH,D.cZX)
D.ayN=w([D.hnN,D.hnM,D.hnO,D.hnQ,D.hnL,D.hnP],B.av("O<AI>"))
D.bp1=new B.u(1,0.23137254901960785,0.16470588235294117,0.3686274509803922,A.q)
D.bqA=new B.u(1,0.7058823529411765,0.37254901960784315,0.5411764705882353,A.q)
D.d7A=w([D.YT,D.bp1,D.bqA],x.O)
D.eTX=new B.bk("skin","Skin",A.anr)
D.eVi=new B.bk("muscle","Muscles",A.Os)
D.eV0=new B.bk("organ","Organs",A.i_)
D.bKE=new B.a0(62747,"MaterialIcons",!1)
D.eV6=new B.bk("bone","Skeleton",D.bKE)
D.eVo=new B.bk("vessel","Blood vessels",A.qr)
D.d7H=w([D.eTX,D.eVi,D.eV0,D.eV6,D.eVo],x.c)
D.f_s=new C.v1("Simple legs","Light. Land gently.",0.15,0.2)
D.f_u=new C.v1("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.f_x=new C.v1("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.CS=w([D.f_s,D.f_u,D.f_x],x._)
D.bcA=new B.u(1,0.10588235294117647,0.10588235294117647,0.2,A.q)
D.d98=w([D.Yp,D.bcA],x.O)
D.d9n=w([1.77,3.55,7.15,16.7],x.n)
D.daH=w([A.Bp,A.kY],x.O)
D.bpQ=new B.u(1,0.10588235294117647,0.0392156862745098,0.0392156862745098,A.q)
D.bki=new B.u(1,0.16470588235294117,0.058823529411764705,0.058823529411764705,A.q)
D.dbo=w([D.bpQ,D.bki],x.O)
D.bkx=new B.u(1,0.2980392156862745,0.0392156862745098,0.3686274509803922,A.q)
D.biP=new B.u(1,0.7058823529411765,0.09019607843137255,0.49019607843137253,A.q)
D.dbu=w([D.YW,D.bkx,D.biP],x.O)
D.dc5=w(["March","April","May","June","July","August","September","October","November","December","January","February"],x.s)
D.dc6=w([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],x.t)
D.ePp=new B.z("spiral","Spiral")
D.exj=new B.z("barred","Barred spiral")
D.eJk=new B.z("elliptical","Elliptical")
D.dcO=w([D.ePp,D.exj,D.eJk],x.L)
D.eW6=new B.cw(["beat",0.18,0.28,0])
D.eXd=new B.cw(["burst",0.7,0.2,0])
D.eXo=new B.cw(["delay",0.45,0.5,1])
D.eWY=new B.cw(["ripple",0.75,0.6,3])
D.d2o=w([D.eW6,D.eXd,D.eXo,D.eWY],x.e)
D.ddF=w([O.ll,N.Jh,F.Ts],x.u)
D.hn0=new C.G7("First spark","A clock lights a burst and a ripple",D.d2o,D.ddF)
D.eWF=new B.cw(["beat",0.15,0.3,1])
D.eVL=new B.cw(["ripple",0.62,0.15,0])
D.eXk=new B.cw(["delay",0.4,0.45,0])
D.eWl=new B.cw(["ripple",0.7,0.45,0])
D.eW2=new B.cw(["delay",0.4,0.7,1])
D.eX_=new B.cw(["shake",0.75,0.75,0])
D.drg=w([D.eWF,D.eVL,D.eXk,D.eWl,D.eW2,D.eX_],x.e)
D.eud=new B.z(2,4)
D.aOB=new B.z(4,5)
D.d5Y=w([O.ll,N.Jh,F.Ts,D.eud,D.aOB],x.u)
D.hn2=new C.G7("Heartbeat","Two thumps, then a shake",D.drg,D.d5Y)
D.eWb=new B.cw(["dice",0.15,0.7,1])
D.eXq=new B.cw(["echo",0.4,0.7,0])
D.eWj=new B.cw(["comet",0.7,0.5,4])
D.eXe=new B.cw(["burst",0.72,0.2,1])
D.eWD=new B.cw(["burst",0.3,0.25,0])
D.eWc=new B.cw(["pop",0.55,0.85,0])
D.cpH=w([D.eWb,D.eXq,D.eWj,D.eXe,D.eWD,D.eWc],x.e)
D.etB=new B.z(1,3)
D.etC=new B.z(1,4)
D.aOx=new B.z(0,5)
D.df2=w([O.ll,R.v0,D.etB,D.etC,D.aOx],x.u)
D.hn1=new C.G7("Fireworks","Dice launch comets that burst in colour",D.cpH,D.df2)
D.eWg=new B.cw(["beat",0.15,0.2,2])
D.eWN=new B.cw(["chance",0.4,0.2,0])
D.eW8=new B.cw(["ball",0.7,0.12,3])
D.eVW=new B.cw(["chance",0.4,0.5,1])
D.eXp=new B.cw(["ball",0.3,0.08,1])
D.eVP=new B.cw(["ripple",0.7,0.55,3])
D.ciI=w([D.eWg,D.eWN,D.eW8,D.eVW,D.eXp,D.eVP],x.e)
D.eue=new B.z(2,5)
D.cG2=w([O.ll,R.v0,N.a7S,F.Tt,D.eue],x.u)
D.hn_=new C.G7("Rain","Balls fall at random and splash",D.ciI,D.cG2)
D.eWO=new B.cw(["beat",0.12,0.45,2])
D.eXf=new B.cw(["toggle",0.38,0.2,0])
D.eXm=new B.cw(["wash",0.7,0.15,4])
D.eWa=new B.cw(["count3",0.38,0.45,0])
D.eXh=new B.cw(["burst",0.72,0.4,0])
D.eWE=new B.cw(["light",0.55,0.7,1])
D.eVX=new B.cw(["pop",0.8,0.8,4])
D.dhO=w([D.eWO,D.eXf,D.eXm,D.eWa,D.eXh,D.eWE,D.eVX],x.e)
D.euK=new B.z(3,6)
D.clR=w([O.ll,R.v0,N.a7S,F.Tt,D.aOx,D.euK],x.u)
D.hmY=new C.G7("Disco","A beat drives lights, washes and bursts",D.dhO,D.clR)
D.eXt=new B.cw(["button",0.12,0.2,0])
D.eVR=new B.cw(["delay",0.34,0.2,1])
D.eXs=new B.cw(["light",0.56,0.2,1])
D.eXl=new B.cw(["delay",0.56,0.45,1])
D.eWP=new B.cw(["ball",0.34,0.6,0])
D.eVV=new B.cw(["delay",0.34,0.8,1])
D.eVK=new B.cw(["burst",0.7,0.8,5])
D.c5U=w([D.eXt,D.eVR,D.eXs,D.eXl,D.eWP,D.eVV,D.eVK],x.e)
D.ewW=new B.z(5,6)
D.dnl=w([O.ll,R.v0,F.Ts,F.Tt,D.aOB,D.ewW],x.u)
D.hmZ=new C.G7("Domino","Tap the button and watch it run down the line",D.c5U,D.dnl)
D.aza=w([D.hn0,D.hn2,D.hn1,D.hn_,D.hmY,D.hmZ],B.av("O<G7>"))
D.dcW=w([0.05,0.15,0.25],x.n)
D.ddQ=w([1.5,3,4.5,9,12],x.n)
D.eSB=new B.bk("dice","Dice",A.p7)
D.eTD=new B.bk("coin","Coin",M.yN)
D.eVj=new B.bk("num","Number",A.yV)
D.de3=w([D.eSB,D.eTD,D.eVj],x.c)
D.de7=w(["skin","muscle","organ","bone","vessel"],x.s)
D.fVv=new C.Pv("Moon",1.62,0,4291941851)
D.fVw=new C.Pv("Mars",3.71,0.01,4294472049)
D.fVx=new C.Pv("Earth",9.81,1,4281908728)
D.fVz=new C.Pv("Jupiter",24.79,1.4,4294677052)
D.fVy=new C.Pv("Sun",274,2,4294688548)
D.zk=w([D.fVv,D.fVw,D.fVx,D.fVz,D.fVy],B.av("O<Pv>"))
D.azg=w([A.cs,A.aU,A.bj,A.aQ,A.bw,A.c5,A.cR,A.iQ],x.O)
D.df8=w([A.c5,A.aQ,A.dP,A.bj],x.O)
D.azj=w([0,0.7,1],x.n)
D.dfA=w([0,0.62,1],x.n)
D.dg5=w([],x.m)
D.dg9=w([],x.C)
D.a4B=w([],x.R)
D.elS=new C.eg("battery","Battery","\ud83d\udd0b",A.bj,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.elY=new C.eg("solar","Solar panel","\u2600\ufe0f",A.bG,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.emC=new C.eg("crank","Hand crank","\ud83d\udd04",A.cR,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.eme=new C.eg("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aQ,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.elK=new C.eg("buck","Step-down converter","\ud83d\udd3d",A.iQ,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.emc=new C.eg("regulator","5 V regulator","\ud83e\uddca",A.bM,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.emH=new C.eg("diode","Diode","\u27a1\ufe0f",A.aU,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.emo=new C.eg("ldr","Light sensor","\ud83c\udf1e",A.dP,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.em2=new C.eg("switch","Switch","\ud83c\udf9a\ufe0f",A.bw,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.emE=new C.eg("fuse","Fuse","\ud83e\uddef",A.cs,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.elC=new C.eg("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.iQ,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.emp=new C.eg("resistor","Resistor","\u3030\ufe0f",A.aU,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.emr=new C.eg("bulb","Light bulb","\ud83d\udca1",A.dP,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.em_=new C.eg("led","LED","\ud83d\udd34",A.aw,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.em3=new C.eg("motor","Motor","\u2699\ufe0f",A.bM,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.eml=new C.eg("buzzer","Buzzer","\ud83d\udd14",A.c5,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.elT=new C.eg("heater","Heater","\ud83d\udd25",A.cR,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.emg=new C.eg("capacitor","Capacitor","\ud83e\udeab",A.co,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.em8=new C.eg("radio","Radio","\ud83d\udcfb",A.o2,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.em5=new C.eg("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.b9,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.elJ=new C.eg("voltmeter","Voltmeter","\ud83e\udded",A.bt,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.elQ=new C.eg("ammeter","Ammeter","\ud83d\udcdf",A.aU,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.elW=new C.eg("fan","Fan","\ud83c\udf00",A.aQ,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.emJ=new C.eg("speaker","Speaker","\ud83d\udd0a",A.c5,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.emy=new C.eg("clock","Digital clock","\u23f0",A.bj,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.emb=new C.eg("calculator","Calculator","\ud83e\uddee",A.LB,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.elP=new C.eg("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.co,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.emI=new C.eg("router","WiFi router","\ud83d\udcf6",A.iQ,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.emL=new C.eg("siren","Siren","\ud83d\udea8",A.aw,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.elF=new C.eg("toycar","Toy car","\ud83d\ude97",A.cR,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.emM=new C.eg("kettle","Kettle","\ud83e\uded6",A.my,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.elN=new C.eg("lamp","Desk lamp","\ud83e\ude94",A.dP,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.elZ=new C.eg("lights","Party lights","\ud83c\udf84",A.o2,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.em9=new C.eg("fridge","Fridge","\ud83e\uddca",A.he,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.elH=new C.eg("washer","Washing machine","\ud83e\udee7",A.co,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.emz=new C.eg("blender","Blender","\ud83e\udd64",A.cs,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.em6=new C.eg("drone","Drone","\ud83d\ude81",A.bM,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.elM=new C.eg("drill","Power drill","\ud83d\udd29",A.aU,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.ema=new C.eg("torch","Torch","\ud83d\udd26",A.bL,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.emw=new C.eg("neon","Neon sign","\ud83e\udea7",A.c5,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.elI=new C.eg("microwave","Microwave","\ud83c\udf72",A.cR,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.emq=new C.eg("doorbell","Doorbell","\ud83d\udd14",A.bG,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.elV=new C.eg("camera","Security camera","\ud83d\udcf7",A.al,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.emk=new C.eg("console","Game console","\ud83c\udfae",A.bw,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.emB=new C.eg("heartmon","Heart monitor","\ud83e\ude7a",A.ha,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.elG=new C.eg("aquarium","Aquarium","\ud83d\udc20",A.b9,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.emf=new C.eg("lighthouse","Lighthouse","\ud83d\uddfc",A.dP,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.emn=new C.eg("discoball","Disco ball","\ud83e\udea9",A.o2,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.emG=new C.eg("robot","Robot","\ud83e\udd16",A.aQ,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.elE=new C.eg("toaster","Toaster","\ud83c\udf5e",A.dY,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.emK=new C.eg("ledstrip","LED strip","\ud83c\udf08",A.c5,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.emv=new C.eg("pump","Water pump","\ud83d\udeb0",A.aQ,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.emh=new C.eg("hairdryer","Hair dryer","\ud83d\udca8",A.ig,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.emt=new C.eg("headphones","Headphones","\ud83c\udfa7",A.bw,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.elO=new C.eg("smartwatch","Apple Watch Ultra","\u231a",A.bt,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.emF=new C.eg("tablet","iPad Pro M5","\ud83d\udcf2",A.co,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.elB=new C.eg("lgtv","LG OLED evo G5","\ud83d\udcfa",A.ha,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.em7=new C.eg("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bs,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.em0=new C.eg("appletv","Apple TV 4K","\ud83d\udcfa",A.bO,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.emm=new C.eg("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.tz,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.elD=new C.eg("iphonefold","iPhone Fold","\ud83d\udcf1",A.b5,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.elR=new C.eg("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d2,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.emD=new C.eg("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cw,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.emi=new C.eg("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.be,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.emd=new C.eg("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.cb,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.emu=new C.eg("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.aw,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.em1=new C.eg("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.bj,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.emj=new C.eg("honor","Honor Magic V5","\ud83d\udcf1",A.co,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.ems=new C.eg("vivo","vivo X300 Pro","\ud83d\udcf1",A.cR,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.emx=new C.eg("ereader","Kindle Scribe","\ud83d\udcd6",A.bs,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.elA=new C.eg("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.cc,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.em4=new C.eg("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cw,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.elX=new C.eg("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.b9,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.elL=new C.eg("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dP,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.elU=new C.eg("carscreen","Luxury car touchscreen","\ud83d\ude98",A.aw,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.emA=new C.eg("vision","Apple Vision Pro","\ud83e\udd7d",A.bw,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.Rk=w([D.elS,D.elY,D.emC,D.eme,D.elK,D.emc,D.emH,D.emo,D.em2,D.emE,D.elC,D.emp,D.emr,D.em_,D.em3,D.eml,D.elT,D.emg,D.em8,D.em5,D.elJ,D.elQ,D.elW,D.emJ,D.emy,D.emb,D.elP,D.emI,D.emL,D.elF,D.emM,D.elN,D.elZ,D.em9,D.elH,D.emz,D.em6,D.elM,D.ema,D.emw,D.elI,D.emq,D.elV,D.emk,D.emB,D.elG,D.emf,D.emn,D.emG,D.elE,D.emK,D.emv,D.emh,D.emt,D.elO,D.emF,D.elB,D.em7,D.em0,D.emm,D.elD,D.elR,D.emD,D.emi,D.emd,D.emu,D.em1,D.emj,D.ems,D.emx,D.elA,D.em4,D.elX,D.elL,D.elU,D.emA],B.av("O<eg>"))
D.dgx=w([0,0.46,0.82],x.n)
D.dgI=w([5,10,15,25,45,60],x.t)
D.dh3=w([-0.045,0.03,-0.015],x.n)
D.dhs=w([0.9,0.97,1],x.n)
D.dhJ=w([A.c5,A.cR,A.bG,A.bw],x.O)
D.azK=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.uC=w([0.05,0.2,0.35],x.n)
D.din=w([A.Bp,A.hI],x.O)
D.fVj=new C.vf("Sun","star",0,696340,0,609.6,274,0,5500,"It holds 99.86% of all the mass in the solar system. A million Earths would fit inside it.",4294688548)
D.fVk=new C.vf("Mercury","planet",0.39,2440,88,1407.6,3.7,0,167,"A year is only 88 days, but one sunrise to the next takes 176 Earth days.",4288455599)
D.fVb=new C.vf("Venus","planet",0.72,6052,224.7,5832.5,8.87,0,464,"The hottest planet, hotter than Mercury. It spins backwards, so the Sun rises in the west.",4294759245)
D.fVi=new C.vf("Earth","planet",1,6371,365.25,24,9.81,1,15,"The only world we know with life. About 71% of its surface is ocean.",4281908728)
D.fVg=new C.vf("Mars","planet",1.52,3390,687,24.6,3.71,2,-65,"Home of Olympus Mons, a volcano 22 km high, almost three times Mount Everest.",4294472049)
D.fVc=new C.vf("Jupiter","planet",5.2,69911,4331,9.9,24.79,95,-110,"Its Great Red Spot is a storm bigger than Earth that has raged for hundreds of years.",4294677052)
D.fVh=new C.vf("Saturn","planet",9.58,58232,10747,10.7,10.44,146,-140,"Its rings are mostly ice. Saturn is so light for its size that it would float in water.",4294829706)
D.fVd=new C.vf("Uranus","planet",19.2,25362,30589,17.2,8.87,28,-195,"It spins on its side, tipped over about 98 degrees, as if it rolled around its orbit.",4284999929)
D.fVf=new C.vf("Neptune","planet",30.1,24622,59800,16.1,11.15,16,-200,"Winds here reach about 2,000 km/h, the fastest in the solar system.",4284524026)
D.fVe=new C.vf("Pluto","dwarf",39.5,1188,90560,153.3,0.62,5,-230,"A dwarf planet with a heart-shaped glacier. One Pluto year is 248 Earth years.",4292263162)
D.D_=w([D.fVj,D.fVk,D.fVb,D.fVi,D.fVg,D.fVc,D.fVh,D.fVd,D.fVf,D.fVe],B.av("O<vf>"))
D.bkT=new B.u(1,0.10588235294117647,0.043137254901960784,0.1803921568627451,A.q)
D.bih=new B.u(1,0.023529411764705882,0.13333333333333333,0.16862745098039217,A.q)
D.diP=w([D.Yp,D.bkT,D.bih,A.afl],x.O)
D.b5e=new B.ac(0,A.G,A.ii,A.dB,6)
D.djM=w([D.b5e],x.V)
D.dkv=w([A.he,A.ez,A.aQ,A.Ff],x.O)
D.esN=new B.z(0,"AND")
D.etD=new B.z(1,"Adder")
D.euf=new B.z(2,"Blinker")
D.euL=new B.z(3,"Memory")
D.dkA=w([D.esN,D.etD,D.euf,D.euL],x.I)
D.azX=w([-104,0,104],x.n)
D.azY=w([-14,3],x.n)
D.dls=w([-8,0,8],x.n)
D.aA5=w([-92,0,92],x.n)
D.ezO=new B.z("Wide",1.7777777777777777)
D.eQs=new B.z("Tall",0.5625)
D.a4S=w([D.ezO,H.aOE,D.eQs],B.av("O<+(n,K)>"))
D.dlR=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.f_p=new C.v1("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.f_w=new C.v1("Medium tank","Balanced.",0.35,1)
D.f_v=new C.v1("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.Ry=w([D.f_p,D.f_w,D.f_v],x._)
D.ny=w([0.04,0.2,0.36],x.n)
D.aAh=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.eV_=new B.bk(D.aYN,"Fold",M.aom)
D.eUa=new B.bk(D.abC,"Flip",A.GO)
D.bKX=new B.a0(62889,"MaterialIcons",!1)
D.eVh=new B.bk(D.aYO,"Rise",D.bKX)
D.aoA=new B.a0(983870,"MaterialIcons",!1)
D.eS6=new B.bk(D.abD,"Assemble",D.aoA)
D.eSf=new B.bk(D.aYP,"Spin",D.amZ)
D.eSc=new B.bk(D.aYQ,"Pop",A.l7)
D.dni=w([D.eV_,D.eUa,D.eVh,D.eS6,D.eSf,D.eSc],B.av("O<+(KH,n,a0)>"))
D.aAm=w([A.c5,A.dP,A.bt,A.aQ,A.bw,A.cs],x.O)
D.dnI=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.ePY=new B.z("type","Typewriter")
D.eIc=new B.z("bounce","Bounce")
D.eQR=new B.z("wave","Wave")
D.eOg=new B.z("neon","Neon flicker")
D.eRX=new B.z("zoom","Pop")
D.ey3=new B.z("drop","Drop in")
D.etO=new B.z("fly","Fly in")
D.ePs=new B.z("spin","Spin in")
D.eJR=new B.z("flip","Flip")
D.eL4=new B.z("jelly","Jelly")
D.ePg=new B.z("shake","Shake")
D.eJS=new B.z("float","Float")
D.eOe=new B.z("pulse","Heartbeat")
D.ePz=new B.z("swing","Swing")
D.eOR=new B.z("reveal","Reveal")
D.ezP=new B.z("blur","Zoom out")
D.eIZ=new B.z("domino","Domino")
D.eyZ=new B.z("spiral","Spiral in")
D.eLi=new B.z("cascade","Shine sweep")
D.eQX=new B.z("wobble","Wobble")
D.eEE=new B.z("rise","Rise up")
D.eDW=new B.z("scatter","Scatter & gather")
D.do1=w([D.ePY,D.eIc,D.eQR,D.eOg,H.aOJ,D.eRX,H.aOQ,D.ey3,D.etO,D.ePs,D.eJR,D.eL4,D.ePg,D.eJS,D.eOe,D.ePz,D.eOR,D.ezP,D.eIZ,D.eyZ,D.eLi,D.eQX,D.eEE,D.eDW],x.L)
D.br7=new B.u(1,1,0.8784313725490196,0.4,A.q)
D.dod=w([D.br7,A.M_],x.O)
D.doL=w([3,4.5,5,6,9],x.n)
D.b5N=new B.ac(0,A.G,A.aT,A.I,16)
D.dpc=w([D.b5N],x.V)
D.RB=w([A.c5,A.bG,A.bj,A.aQ,A.bw,A.cs,A.c,A.cR],x.O)
D.dpK=w(["solar","turbine","crank","pot"],x.s)
D.bbz=new B.u(1,0.16862745098039217,0.06274509803921569,0.3333333333333333,A.q)
D.bfL=new B.u(1,0.984313725490196,0.8431372549019608,0.5254901960784314,A.q)
D.dpN=w([D.bbz,G.afO,D.bfL],x.O)
D.dqb=w([0,0.35,0.75,1],x.n)
D.eSu=new B.bk("drop","Drop",D.aoc)
D.eSw=new B.bk("weight","Weight",T.aoE)
D.eVb=new B.bk("cannon","Newton's cannon",A.anC)
D.dqV=w([D.eSu,D.eSw,D.eVb],x.c)
D.drv=w(["volts","level","ohms","on"],x.s)
D.eNv=new B.z("\ud83c\udf19","Midnight")
D.eMX=new B.z("\u2728","Starfield")
D.euR=new B.z("\ud83c\udf0c","Aurora")
D.eAr=new B.z("\ud83c\udf05","Savanna sunset")
D.eN3=new B.z("\ud83c\udf0a","Ocean waves")
D.eBa=new B.z("\ud83d\udd79\ufe0f","Neon grid")
D.eGP=new B.z("\ud83d\udcbb","Code rain")
D.eDa=new B.z("\ud83c\udf89","Confetti")
D.eFI=new B.z("\ud83c\udf86","Fireworks")
D.ewd=new B.z("\ud83e\udee7","Bubbles")
D.eQq=new B.z("\u2744\ufe0f","Snowfall")
D.eBR=new B.z("\ud83e\uddf6","Kente weave")
D.exy=new B.z("\ud83d\udd2e","Bokeh lights")
D.eGF=new B.z("\ud83c\udf27\ufe0f","Rain")
D.eya=new B.z("\ud83d\udd25","Fire")
D.eG5=new B.z("\ud83c\udfd4\ufe0f","Paper hills")
D.eCb=new B.z("\ud83c\udfad","Stage")
D.eDZ=new B.z("\u2600\ufe0f","Sunburst")
D.eGt=new B.z("\ud83e\udee0","Lava lamp")
D.eyO=new B.z("\ud83c\udf03","City night")
D.dsq=w([D.eNv,D.eMX,D.euR,D.eAr,D.eN3,D.eBa,D.eGP,D.eDa,D.eFI,D.ewd,D.eQq,D.eBR,D.exy,D.eGF,D.eya,D.eG5,D.eCb,D.eDZ,D.eGt,D.eyO],x.L)
D.dsJ=w([0,0.35,0.55,0.75,1],x.n)
D.dsX=w([A.jB,A.Cm,A.C7,A.rv,A0.Hd,A.uq,A.yT,A.qp,A.i0,A.ol,A.ht,A.e5,A.i_,A.il,A.mK,A.m6,A.wl,A.rA,A.m7,A.GF,A.wk,A.Cd,A.C9,A.ao8,A.Ol,A.Cj,A.Os,A.anO,G.aow,A.l7],x.w)
D.dtS=w([0.72,1],x.n)
D.du4=w([0,2,4,7,9,12,14,16,19,21],x.t)
D.eej={FJI:0,TZA:1,SAH:2,CAN:3,USA:4,KAZ:5,UZB:6,PNG:7,IDN:8,ARG:9,CHL:10,COD:11,SOM:12,KEN:13,SDN:14,TCD:15,HTI:16,DOM:17,RUS:18,BHS:19,FLK:20,NOR:21,GRL:22,ATF:23,TLS:24,ZAF:25,LSO:26,MEX:27,URY:28,BRA:29,BOL:30,PER:31,COL:32,PAN:33,CRI:34,NIC:35,HND:36,SLV:37,GTM:38,BLZ:39,VEN:40,GUY:41,SUR:42,FRA:43,ECU:44,PRI:45,JAM:46,CUB:47,ZWE:48,BWA:49,NAM:50,SEN:51,MLI:52,MRT:53,BEN:54,NER:55,NGA:56,CMR:57,TGO:58,GHA:59,CIV:60,GIN:61,GNB:62,LBR:63,SLE:64,BFA:65,CAF:66,COG:67,GAB:68,GNQ:69,ZMB:70,MWI:71,MOZ:72,SWZ:73,AGO:74,BDI:75,ISR:76,LBN:77,MDG:78,PSX:79,GMB:80,TUN:81,DZA:82,JOR:83,ARE:84,QAT:85,KWT:86,IRQ:87,OMN:88,VUT:89,KHM:90,THA:91,LAO:92,MMR:93,VNM:94,PRK:95,KOR:96,MNG:97,IND:98,BGD:99,BTN:100,NPL:101,PAK:102,AFG:103,TJK:104,KGZ:105,TKM:106,IRN:107,SYR:108,ARM:109,SWE:110,BLR:111,UKR:112,POL:113,AUT:114,HUN:115,MDA:116,ROU:117,LTU:118,LVA:119,EST:120,DEU:121,BGR:122,GRC:123,TUR:124,ALB:125,HRV:126,CHE:127,LUX:128,BEL:129,NLD:130,PRT:131,ESP:132,IRL:133,NCL:134,SLB:135,NZL:136,AUS:137,LKA:138,CHN:139,TWN:140,ITA:141,DNK:142,GBR:143,ISL:144,AZE:145,GEO:146,PHL:147,MYS:148,BRN:149,SVN:150,FIN:151,SVK:152,CZE:153,ERI:154,JPN:155,PRY:156,YEM:157,SAU:158,ATA:159,CYN:160,CYP:161,MAR:162,EGY:163,LBY:164,ETH:165,DJI:166,SOL:167,UGA:168,RWA:169,BIH:170,MKD:171,SRB:172,MNE:173,KOS:174,TTO:175,SDS:176}
D.dwl=new B.bw(D.eej,["Suva","Dodoma","El Aai\xfan (disputed)","Ottawa","Washington, D.C.","Astana","Tashkent","Port Moresby","Jakarta","Buenos Aires","Santiago","Kinshasa","Mogadishu","Nairobi","Khartoum","N'Djamena","Port-au-Prince","Santo Domingo","Moscow","Nassau","Stanley","Oslo","Nuuk","Port-aux-Fran\xe7ais","Dili","Pretoria, Cape Town, Bloemfontein","Maseru","Mexico City","Montevideo","Bras\xedlia","Sucre and La Paz","Lima","Bogot\xe1","Panama City","San Jos\xe9","Managua","Tegucigalpa","San Salvador","Guatemala City","Belmopan","Caracas","Georgetown","Paramaribo","Paris","Quito","San Juan","Kingston","Havana","Harare","Gaborone","Windhoek","Dakar","Bamako","Nouakchott","Porto-Novo","Niamey","Abuja","Yaound\xe9","Lom\xe9","Accra","Yamoussoukro","Conakry","Bissau","Monrovia","Freetown","Ouagadougou","Bangui","Brazzaville","Libreville","Malabo","Lusaka","Lilongwe","Maputo","Mbabane","Luanda","Gitega","Jerusalem","Beirut","Antananarivo","Ramallah (seat of government)","Banjul","Tunis","Algiers","Amman","Abu Dhabi","Doha","Kuwait City","Baghdad","Muscat","Port Vila","Phnom Penh","Bangkok","Vientiane","Naypyidaw","Hanoi","Pyongyang","Seoul","Ulaanbaatar","New Delhi","Dhaka","Thimphu","Kathmandu","Islamabad","Kabul","Dushanbe","Bishkek","Ashgabat","Tehran","Damascus","Yerevan","Stockholm","Minsk","Kyiv","Warsaw","Vienna","Budapest","Chi\u0219in\u0103u","Bucharest","Vilnius","Riga","Tallinn","Berlin","Sofia","Athens","Ankara","Tirana","Zagreb","Bern","Luxembourg","Brussels","Amsterdam","Lisbon","Madrid","Dublin","Noum\xe9a","Honiara","Wellington","Canberra","Sri Jayawardenepura Kotte","Beijing","Taipei","Rome","Copenhagen","London","Reykjav\xedk","Baku","Tbilisi","Manila","Kuala Lumpur","Bandar Seri Begawan","Ljubljana","Helsinki","Bratislava","Prague","Asmara","Tokyo","Asunci\xf3n","Sana'a","Riyadh","No capital (research stations)","North Nicosia","Nicosia","Rabat","Cairo","Tripoli","Addis Ababa","Djibouti","Hargeisa","Kampala","Kigali","Sarajevo","Skopje","Belgrade","Podgorica","Pristina","Port of Spain","Juba"],B.av("bw<n,n>"))
D.ecd={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.hfx=new C.yj("Switch",F.us,A.bG,0,"Tap it to turn it ON or OFF.")
D.hft=new C.yj("Blinker",A.pa,A.bt,0,"Turns itself ON and OFF. Tap to change the speed.")
D.hfu=new C.yj("AND",D.aoA,A.co,2,"ON only when BOTH inputs are ON.")
D.bMp=new B.a0(63671,"MaterialIcons",!1)
D.hfs=new C.yj("OR",D.bMp,A.bw,2,"ON when EITHER input is ON.")
D.hfv=new C.yj("XOR",I.a1p,A.c5,2,"ON when the inputs are DIFFERENT.")
D.hfp=new C.yj("NAND",A.ud,A.aQ,2,"OFF only when BOTH inputs are ON.")
D.bLw=new B.a0(63176,"MaterialIcons",!1)
D.hfq=new C.yj("NOR",D.bLw,A.iQ,2,"ON only when BOTH inputs are OFF.")
D.hfr=new C.yj("NOT",A_.Cn,A.cR,1,"Flips the signal: ON becomes OFF.")
D.hfw=new C.yj("Light",A.ru,A.dP,1,"Glows when its input is ON.")
D.hfy=new C.yj("Buzzer",A.uu,A.cs,1,"Beeps while its input is ON.")
D.zy=new B.bw(D.ecd,[D.hfx,D.hft,D.hfu,D.hfs,D.hfv,D.hfp,D.hfq,D.hfr,D.hfw,D.hfy],B.av("bw<n,yj>"))
D.ee4={Africa:0,Asia:1,Europe:2,"North America":3,"South America":4,Oceania:5,Antarctica:6}
D.eSW=new B.bk(3,20,1.9)
D.eSp=new B.bk(33,90,1.6)
D.eVC=new B.bk(52,15,3.2)
D.eVA=new B.bk(45,-100,1.8)
D.eU3=new B.bk(-15,-60,1.9)
D.eTx=new B.bk(-25,140,2.4)
D.eTo=new B.bk(-82,0,2.2)
D.aGa=new B.bw(D.ee4,[D.eSW,D.eSp,D.eVC,D.eVA,D.eU3,D.eTx,D.eTo],B.av("bw<n,+(K,K,K)>"))
D.cWh=w([A.A],x.M)
D.cWC=w([A.ay,A.aE],x.M)
D.d4Z=w([A.ay,A.A,A.aE],x.M)
D.d6y=w([A.ay,A.lo,A.A,A.lS,A.aE],x.M)
D.dkw=w([A.ay,A.lo,A.a5,A.a8,A.lS,A.aE],x.M)
D.dxI=new B.du([1,D.cWh,2,D.cWC,3,D.d4Z,4,A.aAO,5,D.d6y,6,D.dkw],B.av("du<H,ai<dh>>"))
D.eeu={Calm:0,Box:1,Sleep:2}
D.cDt=w([4,2,6,0],x.n)
D.cDA=w([4,4,4,4],x.n)
D.cDB=w([4,7,8,0],x.n)
D.S0=new B.bw(D.eeu,[D.cDt,D.cDA,D.cDB],B.av("bw<n,ai<K>>"))
D.eco={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.xe=new C.a0G(0,"source")
D.d60=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hlE=new C.qd("Clock",A.pa,D.xe,A.bt,D.d60)
D.hlA=new C.qd("Button",A.Cq,D.xe,A.aU,A.Y)
D.doX=w(["random","quick","slow"],x.s)
D.hlL=new C.qd("Dice",A.p7,D.xe,A.c5,D.doX)
D.bM4=new B.a0(63484,"MaterialIcons",!1)
D.Eq=new C.a0G(1,"logic")
D.dtN=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hlH=new C.qd("Delay",D.bM4,D.Eq,A.co,D.dtN)
D.dgP=w(["fast","mid","slow"],x.s)
D.hlM=new C.qd("Echo",A.ao2,D.Eq,A.bw,D.dgP)
D.hlJ=new C.qd("Every 2nd",A_.Cn,D.Eq,A.iQ,A.Y)
D.bLK=new B.a0(63309,"MaterialIcons",!1)
D.hlG=new C.qd("Every 3rd",D.bLK,D.Eq,A.aQ,A.Y)
D.bND=new B.a0(983902,"MaterialIcons",!1)
D.c5h=w(["50%","25%","75%"],x.s)
D.hlO=new C.qd("Chance",D.bND,D.Eq,A.cR,D.c5h)
D.qT=new C.a0G(2,"out")
D.hlC=new C.qd("Light",A.ru,D.qT,A.dP,A.Y)
D.hlD=new C.qd("Burst",A.l7,D.qT,A.c5,A.Y)
D.hlB=new C.qd("Ripple",A.yY,D.qT,A.b9,A.Y)
D.hlK=new C.qd("Ball",A.aoe,D.qT,A.cR,A.Y)
D.hlI=new C.qd("Comet",A.ol,D.qT,A.bw,A.Y)
D.bNo=new B.a0(983669,"MaterialIcons",!1)
D.hlN=new C.qd("Shake",D.bNo,D.qT,A.cs,A.Y)
D.hlP=new C.qd("Pop",A.GG,D.qT,A.bj,A.Y)
D.hlF=new C.qd("Wash",A.Ow,D.qT,A.pO,A.Y)
D.mQ=new B.bw(D.eco,[D.hlE,D.hlA,D.hlL,D.hlH,D.hlM,D.hlJ,D.hlG,D.hlO,D.hlC,D.hlD,D.hlB,D.hlK,D.hlI,D.hlN,D.hlP,D.hlF],B.av("bw<n,qd>"))
D.ecA={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.A_=new C.JE(0,"tv")
D.f0X=new C.mh("Samsung Neo QLED 8K",D.A_,F.Fi,A.aQ)
D.f0O=new C.mh("LG OLED evo G5",D.A_,A.eh,A.ha)
D.f0F=new C.mh("Sony Bravia 9",D.A_,A.r3,A.bs)
D.f0J=new C.mh("Apple TV 4K",D.A_,A.e4,A.bO)
D.f0G=new C.mh("Bang and Olufsen Beovision",D.A_,F.EW,F.tz)
D.Jm=new C.JE(1,"iphone")
D.aPn=new C.mh("iPhone 18 Pro Max",D.Jm,D.aii,A.cc)
D.wK=new C.JE(3,"fold")
D.brv=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.f0T=new C.mh("iPhone Fold",D.wK,D.brv,A.b5)
D.v4=new C.JE(2,"android")
D.f0U=new C.mh("Samsung Galaxy S26 Ultra",D.v4,F.ae9,A.d2)
D.bkm=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.f0M=new C.mh("Samsung Galaxy Z Fold7",D.wK,D.bkm,A.cw)
D.f0I=new C.mh("Google Pixel 10 Pro XL",D.v4,A.dv,A.be)
D.f0Q=new C.mh("Xiaomi 16 Ultra",D.v4,A.hW,A.cb)
D.f0L=new C.mh("Huawei Mate 80 Pro Max",D.v4,A.ek,A.aw)
D.f0H=new C.mh("OPPO Find X9 Ultra",D.v4,A.e_,A.bj)
D.f0Z=new C.mh("Honor Magic V5",D.wK,A.d7,A.co)
D.f0N=new C.mh("vivo X300 Pro",D.v4,A.hI,A.cR)
D.TD=new C.JE(4,"tablet")
D.f0S=new C.mh("iPad Pro M5",D.TD,A.dv,A.aQ)
D.a8b=new C.JE(5,"reader")
D.f1_=new C.mh("Kindle Scribe",D.a8b,A.e7,A.bs)
D.A0=new C.JE(6,"computer")
D.f0R=new C.mh("MacBook Pro M5 Max",D.A0,A.dv,A.cc)
D.f0W=new C.mh("iMac 32 inch",D.A0,A.bO,A.cw)
D.f0P=new C.mh("Pro Display XDR 8K",D.A0,A.hW,A.b9)
D.f0K=new C.mh("Sony Laser Projector",D.A0,A.cp,A.dP)
D.f0V=new C.mh("Luxury car touchscreen",D.A0,K.nd,A.aw)
D.f0Y=new C.mh("Apple Vision Pro",D.A0,A.hf,A.bw)
D.me=new B.bw(D.ecA,[D.f0X,D.f0O,D.f0F,D.f0J,D.f0G,D.aPn,D.f0T,D.f0U,D.f0M,D.f0I,D.f0Q,D.f0L,D.f0H,D.f0Z,D.f0N,D.f0S,D.f1_,D.f0R,D.f0W,D.f0P,D.f0K,D.f0V,D.f0Y],B.av("bw<n,mh>"))
D.ecI={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.buh=new C.fP(20,4,13,!1)
D.buI=new C.fP(14,5,13.5,!1)
D.buz=new C.fP(9,2.4,10,!1)
D.buN=new C.fP(7,5,12.5,!1)
D.buC=new C.fP(8,3.5,12,!1)
D.bud=new C.fP(15,2,6,!1)
D.buL=new C.fP(45,6,13.5,!0)
D.but=new C.fP(10,8,13.5,!1)
D.bul=new C.fP(25,3,12,!0)
D.bur=new C.fP(35,4,12,!0)
D.bus=new C.fP(40,4.5,9.5,!0)
D.buu=new C.fP(55,3,9,!0)
D.bue=new C.fP(18,3,9,!1)
D.buK=new C.fP(22,4,13.5,!1)
D.buD=new C.fP(16,5,13.5,!1)
D.bup=new C.fP(30,4,9,!0)
D.buW=new C.fP(5,3.5,13,!1)
D.bux=new C.fP(25,3,13.5,!0)
D.buG=new C.fP(14,2.5,9,!1)
D.buw=new C.fP(6,6,13,!1)
D.buO=new C.fP(30,1.2,5,!0)
D.buV=new C.fP(35,3,4.5,!0)
D.buR=new C.fP(20,4.5,7.5,!0)
D.buv=new C.fP(55,5.5,13.5,!0)
D.buc=new C.fP(45,5.5,13.5,!0)
D.buH=new C.fP(40,5.5,13.5,!0)
D.buU=new C.fP(60,6,13.5,!0)
D.aiL=new C.fP(28,4,7,!0)
D.FS=new C.fP(25,4,7,!0)
D.buo=new C.fP(30,4,7,!0)
D.buj=new C.fP(22,4,7,!0)
D.buk=new C.fP(24,4,7,!0)
D.buy=new C.fP(60,3,5.5,!0)
D.buf=new C.fP(18,9,14,!0)
D.bum=new C.fP(25,9,14,!0)
D.aiM=new C.fP(30,8,14,!0)
D.bui=new C.fP(20,8,14,!0)
D.buq=new C.fP(30,9,14,!0)
D.buP=new C.fP(22,5,9.5,!0)
D.bug=new C.fP(30,2.5,10.5,!0)
D.buE=new C.fP(50,5.5,13.5,!0)
D.buT=new C.fP(12,2,9.5,!1)
D.buB=new C.fP(16,1.3,9.5,!0)
D.buM=new C.fP(40,2.5,7,!0)
D.buS=new C.fP(60,1.2,4.8,!0)
D.buQ=new C.fP(18,5,13.5,!0)
D.buJ=new C.fP(8,2,9.5,!1)
D.buA=new C.fP(12,2.5,8,!1)
D.bun=new C.fP(20,3.5,13.5,!0)
D.buF=new C.fP(3.5,3,13,!1)
D.zz=new B.bw(D.ecI,[D.buh,D.buI,D.buz,D.buN,D.buC,D.bud,D.buL,D.but,D.bul,D.bur,D.bus,D.buu,D.bue,D.buK,D.buD,D.bup,D.buW,D.bux,D.buG,D.buw,D.buO,D.buV,D.buR,D.buv,D.buc,D.buH,D.buU,D.aiL,D.FS,D.buo,D.FS,D.buj,D.FS,D.buk,D.aiL,D.FS,D.buy,D.buf,D.bum,D.aiM,D.bui,D.buq,D.buP,D.bug,D.buE,D.buT,D.buB,D.buM,D.buS,D.FS,D.aiM,D.buQ,D.buJ,D.buA,D.bun,D.buF],B.av("bw<n,fP>"))
D.dyH=new B.du([A.p2,1,A.qe,1,A.qf,1,A.c7,1,A.jQ,2,A.w3,4,A.yw,1,A.yx,2,A.yy,4,A.u9,2,A.w2,4,A.yv,8],B.av("du<tm,H>"))
D.ecn={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eRD=new B.z("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.ewT=new B.z("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.ewO=new B.z("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eJb=new B.z("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eK7=new B.z("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eJ7=new B.z("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.euU=new B.z("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.eH7=new B.z("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eRL=new B.z("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eKt=new B.z("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eAg=new B.z("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.euy=new B.z("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.ezf=new B.z("Movement","They pull your legs together and help you balance.")
D.eBc=new B.z("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.ex1=new B.z("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eP6=new B.z("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eQf=new B.z("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.eGQ=new B.z("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.ePZ=new B.z("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eFq=new B.z("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eKC=new B.z("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.euF=new B.z("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eBz=new B.z("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eKg=new B.z("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.eFM=new B.z("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eQ6=new B.z("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eIC=new B.z("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.euS=new B.z("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eLb=new B.z("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eOK=new B.z("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eMV=new B.z("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.esY=new B.z("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eIl=new B.z("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eIp=new B.z("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.eCj=new B.z("Movement","The chest muscles push your arms forward, like when you push a door.")
D.exf=new B.z("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.eB0=new B.z("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.eHh=new B.z("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eNK=new B.z("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eRI=new B.z("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eKz=new B.z("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.esH=new B.z("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.eHt=new B.z("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.etw=new B.z("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eNY=new B.z("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eP2=new B.z("Movement","These lift your foot up so your toes do not drag on the ground.")
D.eHT=new B.z("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eOa=new B.z("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.euH=new B.z("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.ePE=new B.z("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eyC=new B.z("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eNn=new B.z("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eBY=new B.z("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eFG=new B.z("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eKT=new B.z("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.ePO=new B.z("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.ePG=new B.z("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.ePK=new B.z("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.eGd=new B.z("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eLJ=new B.z("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eMS=new B.z("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.ePq=new B.z("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.eHS=new B.z("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.eE1=new B.z("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eCK=new B.z("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eIg=new B.z("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eKM=new B.z("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.eEx=new B.z("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eFd=new B.z("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.ez_=new B.z("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eOZ=new B.z("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.ezQ=new B.z("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.ett=new B.z("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.eCi=new B.z("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.eto=new B.z("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.exH=new B.z("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.eCn=new B.z("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eA_=new B.z("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eL7=new B.z("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eBf=new B.z("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eRq=new B.z("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eCU=new B.z("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.eG6=new B.z("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eIK=new B.z("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eA8=new B.z("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.ezS=new B.z("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dyO=new B.bw(D.ecn,[D.eRD,D.ewT,D.ewO,D.eJb,D.eK7,D.eJ7,D.euU,D.eH7,D.eRL,D.eKt,D.eAg,D.euy,D.ezf,D.eBc,D.ex1,D.eP6,D.eQf,D.eGQ,D.ePZ,D.eFq,D.eKC,D.euF,D.eBz,D.eKg,D.eFM,D.eQ6,D.eIC,D.euS,D.eLb,D.eOK,D.eMV,D.esY,D.eIl,D.eIp,D.eCj,D.exf,D.eB0,D.eHh,D.eNK,D.eRI,D.eKz,D.esH,D.eHt,D.etw,D.eNY,D.eP2,D.eHT,D.eOa,D.euH,D.ePE,D.eyC,D.eNn,D.eBY,D.eFG,D.eKT,D.ePO,D.ePG,D.ePK,D.eGd,D.eLJ,D.eMS,D.ePq,D.eHS,D.eE1,D.eCK,D.eIg,D.eKM,D.eEx,D.eFd,D.ez_,D.eOZ,D.ezQ,D.ett,D.eCi,D.eto,D.exH,D.eCn,D.eA_,D.eL7,D.eBf,D.eRq,D.eCU,D.eG6,D.eIK,D.eA8,D.ezS],B.av("bw<n,+(n,n)>"))
D.dyQ=new B.hg(A.G,11)
D.dyU=new B.hg(A.G,30)
D.dFN=new C.UJ(null)
D.dFO=new C.UK(null)
D.dG0=new C.UL(null)
D.dI1=new C.UP(null)
D.dIQ=new C.Vp(null)
D.dIS=new C.Vq(null)
D.dJp=new C.Vy(null)
D.dLk=new C.VC(null)
D.dLl=new C.VE(null)
D.dLn=new C.VF(null)
D.dN2=new C.W6(null)
D.dNI=new C.W7(null)
D.dRT=new C.Wc(null)
D.e6M=new C.Wd(null)
D.e6O=new C.We(null)
D.e6P=new C.Wh(null)
D.e6Q=new C.Wi(null)
D.e8J=new C.Wq(null)
D.e8K=new C.Wr(null)
D.e9_=new C.WB(null)
D.e90=new C.WC(null)
D.e91=new C.a8B(null)
D.e9C=new C.WE(null)
D.eb5=new C.WJ(null)
D.eeG=new B.t(0,118)
D.aIT=new B.t(0,13)
D.eeH=new B.t(0,17)
D.eeK=new B.t(0,330)
D.eeQ=new B.t(0,-13)
D.eeR=new B.t(0,-17)
D.eeS=new B.t(0,-18)
D.eeT=new B.t(0,-19)
D.eeW=new B.t(0,-28)
D.eeX=new B.t(0,-31)
D.eeY=new B.t(0,-32)
D.eeZ=new B.t(0,-6771)
D.ef1=new B.t(-9.5,-11)
D.ef4=new B.t(10,20)
D.ef7=new B.t(10,-13)
D.ef8=new B.t(10,-22)
D.ef9=new B.t(10,-4)
D.a71=new B.t(11,8)
D.efh=new B.t(12,2)
D.efi=new B.t(14,0)
D.efj=new B.t(14,12)
D.aJ3=new B.t(14,8)
D.efk=new B.t(14,-17)
D.aJ5=new B.t(14,-3)
D.aJ6=new B.t(14,-4)
D.efn=new B.t(15,0)
D.efo=new B.t(15,-12)
D.efr=new B.t(16,-8)
D.efs=new B.t(18,14)
D.eft=new B.t(18,-12)
D.aJb=new B.t(20,0)
D.efB=new B.t(20,15)
D.efC=new B.t(20,-17)
D.efD=new B.t(20,-3)
D.efE=new B.t(21,8)
D.efI=new B.t(22,10)
D.aJd=new B.t(22,8)
D.efJ=new B.t(24,0)
D.efK=new B.t(24,2)
D.efN=new B.t(24,-18)
D.efO=new B.t(24,-22)
D.efS=new B.t(25,8)
D.efT=new B.t(26,0)
D.efZ=new B.t(28,-30)
D.eg4=new B.t(30,18)
D.eg5=new B.t(30,2)
D.eg8=new B.t(31,19)
D.ega=new B.t(32,0)
D.aJh=new B.t(34,0)
D.aJi=new B.t(34,-32)
D.IX=new B.t(36,0)
D.egn=new B.t(3,-1)
D.egq=new B.t(40,3)
D.egE=new B.t(4,11)
D.egH=new B.t(4,-2)
D.egM=new B.t(5,0)
D.egN=new B.t(5,17)
D.egO=new B.t(5,6)
D.egT=new B.t(6,11)
D.egZ=new B.t(8,7)
D.eh_=new B.t(8,-10)
D.eh0=new B.t(8,-14)
D.aJn=new B.t(9,0)
D.eha=new B.t(-20.5,-17.6)
D.ehb=new B.t(-9,18.5)
D.ehe=new B.t(-2.6,-1)
D.ehf=new B.t(1.9,-0.8)
D.ehi=new B.t(-0.22,0.09)
D.ehn=new B.t(2.6,1)
D.ehu=new B.t(-9,12.2)
D.ehO=new B.t(-9,20.5)
D.ei9=new B.t(-10,0)
D.eia=new B.t(-10,12)
D.aJv=new B.t(-10,4)
D.eig=new B.t(-11,-2)
D.eik=new B.t(-13,-5)
D.eil=new B.t(-14,0)
D.eim=new B.t(-14,13)
D.ein=new B.t(-14,2)
D.eio=new B.t(-14,-12)
D.eip=new B.t(-14,-19)
D.eir=new B.t(-14,-23)
D.eis=new B.t(-15,6)
D.eiv=new B.t(-16,14)
D.eix=new B.t(-16,-8)
D.eiy=new B.t(-17,10)
D.eiz=new B.t(-17,-18)
D.eiA=new B.t(-17,-8)
D.eiC=new B.t(-18,20)
D.eiD=new B.t(-18,-9)
D.aJx=new B.t(-20,0)
D.eiF=new B.t(-20,16)
D.eiG=new B.t(-20,-9)
D.SY=new B.t(-22,8)
D.eiH=new B.t(-22,-10)
D.eiI=new B.t(-22,-11)
D.eiJ=new B.t(-24,10)
D.eiK=new B.t(-24,11)
D.eiL=new B.t(-24,14)
D.eiM=new B.t(-24,-22)
D.eiO=new B.t(-25,-11)
D.eiP=new B.t(-26,0)
D.eiQ=new B.t(-26,-18)
D.eiR=new B.t(-2,9)
D.eiS=new B.t(-2,-10)
D.eiT=new B.t(-2,-20)
D.eiW=new B.t(-2,-9)
D.eiY=new B.t(-32,0)
D.aJz=new B.t(-34,0)
D.ej2=new B.t(-40,3)
D.ej4=new B.t(-4,11)
D.ej5=new B.t(-4,-17)
D.ej6=new B.t(-4,-2)
D.eja=new B.t(-5,0)
D.ejb=new B.t(-5,20)
D.ejc=new B.t(-5,6)
D.ejd=new B.t(-6,26)
D.eje=new B.t(-6,6)
D.ejf=new B.t(-6,-42)
D.ejg=new B.t(-7,-19)
D.ejh=new B.t(-7,-24)
D.ejk=new B.t(-8,-9)
D.a79=new B.t(-9,0)
D.ejl=new B.t(-9,1)
D.ejn=new B.t(-9,-23)
D.fxx=new B.y("Thinking\u2026",null,A.hm,null,null,null,null,null,null,null,null,null)
D.eko=new B.D(A.jy,D.fxx,null)
D.fO8=new B.y("Start from a ready-made board",null,A.fw,null,null,null,null,null,null,null,null,null)
D.ekA=new B.D(A5.vV,D.fO8,null)
D.bCd=new B.Q(4,0,4,14)
D.fsL=new B.F(!0,A.aB,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyt=new B.y("Games and little helpers for a spare minute.",null,D.fsL,null,null,null,null,null,null,null,null,null)
D.ekL=new B.D(D.bCd,D.fyt,null)
D.fKO=new B.y("Tap to throw in a star",null,A.kr,null,null,null,null,null,null,null,null,null)
D.b91=new B.cg(A.A,null,null,D.fKO,null)
D.eqO=new B.cN(0,null,0,14,null,null,D.b91,null)
D.hrC=new C.co0(1,"neural")
D.dhp=w([A.iu,A.bm],x.O)
D.aOq=new B.c1(A.A,0.5,A.x,null,0,D.dhp,null,null)
D.erx=new B.c1(A.A,0.5,A.x,null,0,D.aAA,null,null)
D.d8m=w([A.c,A.bM],x.O)
D.erz=new B.c1(A.A,0.5,A.x,null,0,D.d8m,null,null)
D.dpZ=w([A.bO,A.hf],x.O)
D.aOr=new B.c1(A.A,0.5,A.x,null,0,D.dpZ,null,null)
D.cNp=w([A.c,A.bO],x.O)
D.erD=new B.c1(A.tj,0.5,A.x,null,0,D.cNp,null,null)
D.bhl=new B.u(1,0.1803921568627451,0.49019607843137253,0.7686274509803922,A.q)
D.bnq=new B.u(1,0.027450980392156862,0.10196078431372549,0.2,A.q)
D.d7n=w([D.bhl,D.ahP,D.bnq],x.O)
D.erF=new B.c1(A.tj,0.5,A.x,null,0,D.d7n,D.azj,null)
D.cDI=w([A.o8,A.aC,A.K],x.O)
D.dmA=w([0.3,0.7,1],x.n)
D.erH=new B.c1(A.A,0.5,A.x,null,0,D.cDI,D.dmA,null)
D.brz=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.do_=w([A.fa,D.brz],x.O)
D.erJ=new B.c1(A.tj,0.5,A.x,null,0,D.do_,null,null)
D.cGA=w([A.dv,A.cp],x.O)
D.erK=new B.c1(A.A,0.5,A.x,null,0,D.cGA,null,null)
D.d2u=w([A.o8,A.aC,A.fr],x.O)
D.erL=new B.c1(A.A,0.5,A.x,null,0,D.d2u,null,null)
D.cVd=w([A.fU,A.aU,A.d1],x.O)
D.erN=new B.c1(A.tj,0.5,A.x,null,0,D.cVd,null,null)
D.di4=w([A.hf,K.nd],x.O)
D.erO=new B.c1(A.tj,0.5,A.x,null,0,D.di4,null,null)
D.bhB=new B.u(1,0.30980392156862746,0.6392156862745098,0.9411764705882353,A.q)
D.bfc=new B.u(1,0.11372549019607843,0.37254901960784315,0.6588235294117647,A.q)
D.d4R=w([D.bhB,D.bfc],x.O)
D.erQ=new B.c1(A.A,0.5,A.x,null,0,D.d4R,null,null)
D.bmM=new B.u(1,0.11372549019607843,0.3607843137254902,0.611764705882353,A.q)
D.bku=new B.u(1,0.043137254901960784,0.16470588235294117,0.3215686274509804,A.q)
D.bkA=new B.u(1,0.023529411764705882,0.0784313725490196,0.1568627450980392,A.q)
D.dss=w([D.bmM,D.bku,D.bkA],x.O)
D.erR=new B.c1(N.abN,0.5,A.x,null,0,D.dss,G.ay6,null)
D.erS=new B.c1(A.A,0.5,A.x,null,0,D.awT,null,null)
D.dqQ=w([A.hf,A.hR],x.O)
D.erZ=new B.c1(A.A,0.5,A.x,null,0,D.dqQ,null,null)
D.aOv=new B.aQ(9,9)
D.es7=new B.aQ(1.4,1.4)
D.eSy=new B.bk("Moon",1.62,4291941851)
D.eT7=new B.bk("Neptune",11.15,4284524026)
D.eTM=new B.bk("Sun",274,4294688548)
D.eU0=new B.bk("Mercury",3.7,4288455599)
D.eU5=new B.bk("Earth",9.81,4281908728)
D.eU7=new B.bk("Mars",3.71,4294472049)
D.eUq=new B.bk("Venus",8.87,4294759245)
D.eUx=new B.bk("Saturn",10.44,4294829706)
D.eUT=new B.bk("Jupiter",24.79,4294677052)
D.eYx=new B.a3(10,-8,18,-2)
D.eYy=new B.a3(14,-14,20,14)
D.eYA=new B.a3(20,-2,30,2)
D.eYF=new B.a3(4,-13,30,-3)
D.eYL=new B.a3(8,-7,12,7)
D.eYX=new B.a3(-12,12,12,19)
D.eYY=new B.a3(-12,14,12,22)
D.eYZ=new B.a3(-12,-22,12,8)
D.eZ_=new B.a3(-12,-25,12,19)
D.eZ0=new B.a3(-12,-26,12,-6)
D.eZ1=new B.a3(-12,-4,12,14)
D.eZ3=new B.a3(-14,20,14,24)
D.eZ4=new B.a3(-14,6,14,10)
D.eZ5=new B.a3(-14,-17,14,15)
D.eZ6=new B.a3(-14,-26,14,18)
D.eZ7=new B.a3(-14,-4,14,20)
D.eZ9=new B.a3(-15,-29,15,25)
D.eZa=new B.a3(-16,-16,16,16)
D.eZd=new B.a3(-16,-22,-9,18)
D.eZe=new B.a3(-16,-24,16,-10)
D.eZg=new B.a3(-16,-2,16,20)
D.eZi=new B.a3(-18,20,18,24)
D.eZj=new B.a3(-18,-18,18,20)
D.eZk=new B.a3(-20,12,20,22)
D.eZl=new B.a3(-20,-28,20,26)
D.eZm=new B.a3(-22,14,22,18)
D.aP4=new B.a3(-22,-26,22,24)
D.eZn=new B.a3(-22,-3,22,3)
D.eZo=new B.a3(-22,-4,22,12)
D.eZq=new B.a3(-24,-12,10,22)
D.eZr=new B.a3(-24,-14,22,8)
D.eZs=new B.a3(-24,-6,24,20)
D.aP5=new B.a3(-24,-9,24,9)
D.eZt=new B.a3(-25,14,25,19)
D.eZu=new B.a3(-26,-14,14,8)
D.eZv=new B.a3(-26,-4,26,20)
D.eZw=new B.a3(-26,-6,4,6)
D.aP6=new B.a3(-28,-13,28,13)
D.eZx=new B.a3(-28,-16,28,16)
D.eZy=new B.a3(-28,-16,28,8)
D.eZz=new B.a3(-28,-22,28,22)
D.eZA=new B.a3(-30,-12,30,14)
D.eZB=new B.a3(-30,-14,0,14)
D.eZC=new B.a3(-30,-18,30,20)
D.eZD=new B.a3(-30,-28,30,14)
D.eZE=new B.a3(-30,-2,30,18)
D.eZF=new B.a3(-30,-4,30,18)
D.eZG=new B.a3(-32,-17,32,17)
D.eZH=new B.a3(-32,-28,32,18)
D.eZI=new B.a3(-33,-21,33,17)
D.eZJ=new B.a3(-34,14,34,26)
D.a82=new B.a3(-34,-18,34,18)
D.eZK=new B.a3(-34,-4,34,7)
D.eZL=new B.a3(-36,-24,36,20)
D.eZM=new B.a3(-38,-22,38,22)
D.eZO=new B.a3(-3,12,3,22)
D.eZP=new B.a3(-3,5,3,15)
D.eZT=new B.a3(-46,-34,46,28)
D.eZV=new B.a3(-48,-3,48,3)
D.eZY=new B.a3(-6,18,24,24)
D.eZZ=new B.a3(-6,5,6,12)
D.f__=new B.a3(-6,-22,6,-15)
D.f_3=new B.a3(-9,-16,9,22)
D.f_4=new B.a3(-4.5,-24,4.5,-21.2)
D.f_6=new B.a3(14,-9,17.5,9)
D.edV={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aQ1=new B.dD(D.edV,5,x.Q)
D.eds={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.f2e=new B.dD(D.eds,10,x.Q)
D.f4s=new B.au(24,44)
D.f4Q=new B.au(54,38)
D.f4X=new B.au(66,38)
D.bap=new B.fj(2,null,null,null,null,A.bw,null,null,null,null)
D.f5Y=new B.a7(16,16,D.bap,null)
D.aR_=new B.hR(3,12,12,0.82,null)
D.fPR=new B.y("Could not share the picture here. Try a screenshot instead.",null,null,null,null,null,null,null,null,null,null,null)
D.aRa=new B.b2(D.fPR,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.di7=w([A.cs,A.bG,A.bj,A.aQ,A.pO,A.cs],x.O)
D.fbW=new B.fY(A.A,0,6.283185307179586,A.x,D.di7,null,null)
D.flm=new B.F(!0,A.aU,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,M.R3,null,null,null)
D.fd9=new B.eu("You are here (Sun)",null,null,A.cQ,null,null,null,null,null,null,D.flm)
D.aTI=new B.F(!0,A.aB,null,null,null,null,10.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fda=new B.eu("What we see",null,null,A.cQ,null,null,null,null,null,null,D.aTI)
D.fiD=new B.F(!0,P.xz,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fde=new B.eu("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cQ,null,null,null,null,null,null,D.fiD)
D.fnC=new B.F(!0,A.kx,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdk=new B.eu("AI",null,null,A.cQ,null,null,null,null,null,null,D.fnC)
D.aRY=new B.F(!0,A.bY,null,null,null,null,9.5,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdB=new B.F(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fe7=new B.F(!0,A.bl,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feb=new B.F(!0,A.bj,null,null,null,null,12.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fes=new B.F(!0,A.co,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feY=new B.F(!0,A.bY,null,null,null,null,11,A.P,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ff2=new B.F(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffj=new B.F(!0,A.c,null,null,null,null,13.5,A.H,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffP=new B.F(!0,A.aR,null,null,null,null,12,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgf=new B.F(!0,A.bY,null,null,null,null,9,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgr=new B.F(!0,A.ad,null,null,null,null,14,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2R=new B.cX(A.ii,A.dB,6)
D.dbl=w([D.f2R],x.q)
D.fgM=new B.F(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.dbl,null,null,null)
D.fgR=new B.F(!0,A.es,null,null,null,null,12.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgW=new B.F(!0,A.bY,null,null,null,null,10.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhz=new B.F(!0,A.bY,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhH=new B.F(!0,A.aB,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhI=new B.F(!0,A.bY,null,null,null,null,9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiH=new B.F(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjc=new B.F(!0,A.aB,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjJ=new B.F(!0,A.aU,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2U=new B.cX(A.aT,A.I,3)
D.aAQ=w([D.f2U],x.q)
D.fjL=new B.F(!0,A.c,null,null,null,null,10.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.aAQ,null,null,null)
D.fjR=new B.F(!0,A.c,null,null,null,null,12.5,A.a7,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkz=new B.F(!0,A.c,null,null,null,null,11,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,M.R3,null,null,null)
D.fl9=new B.F(!0,A.c,null,null,null,null,11.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flD=new B.F(!0,A.tL,null,null,null,null,12.5,A.P,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmd=new B.F(!0,A.bL,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmi=new B.F(!0,A.bY,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmn=new B.F(!0,A.aB,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn8=new B.F(!0,A.mA,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnn=new B.F(!0,A.ad,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aT8=new B.F(!0,A.c,null,null,null,null,9.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2H=new B.cX(A.w,A.I,5)
D.cZC=w([D.f2H],x.q)
D.fnY=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.cZC,null,null,null)
D.fo3=new B.F(!0,A.c,null,null,null,null,12,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.aAQ,null,null,null)
D.fos=new B.F(!0,A.h2,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foL=new B.F(!0,A.bY,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fph=new B.F(!0,A.bj,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpT=new B.F(!0,A.bY,null,null,null,null,9.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqz=new B.F(!0,A.aB,null,null,null,null,10,null,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqI=new B.F(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frc=new B.F(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frt=new B.F(!0,A.aU,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frN=new B.F(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frQ=new B.F(!0,A.aU,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsB=new B.F(!0,A.aR,null,null,null,null,10.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsO=new B.F(!0,A.c,null,null,null,null,13,A.a7,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft0=new B.F(!0,A.tL,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftm=new B.F(!0,A.bj,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgZ=new B.F(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftL=new B.y("\u26a0\ufe0f ",null,D.fgZ,null,null,null,null,null,null,null,null,null)
D.ftY=new B.y("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.vg,null,null,null,null,null,null,null,null,null)
D.fvz=new B.y("Pick one, then change it and see what happens.",null,A.vg,null,null,null,null,null,null,null,null,null)
D.fvE=new B.y("Normal size",null,null,null,null,null,null,null,null,null,null,null)
D.fi8=new B.F(!0,A.ad,null,null,null,null,null,A.P,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwz=new B.y("What do you want to invent? Type it below, or tap an idea.",null,D.fi8,null,null,null,null,null,null,null,null,null)
D.fy4=new B.y("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fyG=new B.y("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fyL=new B.y("Got it",null,null,null,null,null,null,null,null,null,null,null)
D.fzi=new B.y("Make it yours",null,A.k4,null,null,null,null,null,null,null,null,null)
D.fzB=new B.y("Your mass never changes. What changes is how hard each world pulls on it.",null,A.Uy,null,null,null,null,null,null,null,null,null)
D.fAw=new B.y("Connect to the internet once and open the globe. After that it works with no internet at all.",null,A.UW,null,A.L,null,null,null,null,null,null,null)
D.fmy=new B.F(!0,A.jM,null,null,null,null,11,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC3=new B.y("Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.",null,D.fmy,null,null,null,null,null,null,null,null,null)
D.fCt=new B.y("5G",null,T.aSr,null,null,null,null,null,null,null,null,null)
D.fp2=new B.F(!0,A.bY,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDE=new B.y("WHAT HAPPENS",null,D.fp2,null,null,null,null,null,null,null,null,null)
D.fFo=new B.y("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fG4=new B.y("Change the words and pictures on the three slabs.",null,A.vg,null,null,null,null,null,null,null,null,null)
D.fGf=new B.y("All the parts and wires will be removed.",null,A.hl,null,null,null,null,null,null,null,null,null)
D.fGz=new B.y("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fH8=new B.y("Tap the crank on the board again and again to spin it faster.",null,A.hm,null,null,null,null,null,null,null,null,null)
D.fIl=new B.y("\ud83c\udfaf Challenges",null,A.dd,null,null,null,null,null,null,null,null,null)
D.fIH=new B.y("The map of the world is not saved on this phone yet",null,A.fw,null,A.L,null,null,null,null,null,null,null)
D.fIR=new B.y("Download the animation (GIF)",null,A.cB,null,null,null,null,null,null,null,null,null)
D.fIU=new B.y("Remove this part",null,Z.aS2,null,null,null,null,null,null,null,null,null)
D.fJb=new B.y("Clear the board?",null,A.df,null,null,null,null,null,null,null,null,null)
D.fot=new B.F(!0,A.bt,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJr=new B.y("How the Lab works",null,D.fot,null,null,null,null,null,null,null,null,null)
D.ffw=new B.F(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJN=new B.y("Electronics Lab",null,D.ffw,null,null,null,null,A.a1,null,1,null,null)
D.fJR=new B.y("?",null,N.aTD,null,null,null,null,null,null,null,null,null)
D.fmt=new B.F(!0,A.aQ,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJW=new B.y("Planet Earth",null,D.fmt,null,null,null,null,null,null,null,null,null)
D.fL9=new B.y("Ready-made circuits",null,A.dd,null,null,null,null,null,null,null,null,null)
D.fLN=new B.y("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hm,null,null,null,null,null,null,null,null,null)
D.fM6=new B.y("UNIVERSE EXPLORER",null,H.a9l,null,null,null,null,null,null,null,null,null)
D.frw=new B.F(!0,A.aU,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPg=new B.y("\u26a0 There is no air here, so a parachute will not work.",null,D.frw,null,null,null,null,null,null,null,null,null)
D.fQs=new B.y("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,Z.aS1,null,null,null,null,null,null,null,null,null)
D.fQX=new B.y("NGMY",null,A.ve,null,null,null,null,null,null,null,null,null)
D.fRa=new B.y("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.UQ,null,null,null,null,null,null,null,null,null)
D.fRy=new B.y("Tap it to change its setting. Drag from the right dot to connect.",null,A.lN,null,null,null,null,null,null,null,null,null)
D.fSC=new B.y("Make it bigger to see it better. It can never be smaller than its normal size.",null,A.vg,null,null,null,null,null,null,null,null,null)
D.fSE=new B.y("TOOLBOX",null,H.a9l,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hkm=null
$.hkl=null
$.hqx=0
$.hSK=B.U(x.N,x.G)
$.hTk=B.U(x.N,x.G)
$.hYo=B.U(x.N,x.G)
$.h1L=null
$.hT5=B.U(x.N,x.G)
$.hU8=B.U(x.N,x.G)})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ip8","bEZ",()=>{var v="led"
return B.a([C.ayP("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fkh(),v),C.ayP("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fki(),v),C.ayP("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fkj(),v),C.ayP("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fkq(),v),C.ayP("Not both","Make the light go OFF only when both switches are ON.",2,new C.fkr(),v),C.ayP("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.fks(),"buzzer")],B.av("O<bbH>"))})
w($,"ipA","bF_",()=>B.a([C.QA("UNIVERSE","Earth, space and gravity",A.OO,A.aQ,new C.fkI()),C.QA("ELECTRONICS LAB","Batteries, wires, real circuits",Ab.Ca,A.aQ,new C.fkJ()),C.QA("DISCOVERY LAB","Body Explorer: a real 3D human",D.bKY,A.bj,new C.fkK()),C.QA("TOOLBOX","Converter, clock, games",G.an8,A.cR,new C.fkL()),C.QA("REACTION LAB","Wire parts together",A.Cw,A.bt,new C.fkM()),C.QA("SPARK PAINTER","Paint with light",A.a1i,A.c5,new C.fkN()),C.QA("ROCKET LANDER","Land softly on the pad",A.ol,A.aQ,new C.fkO()),C.QA("TITLE ANIMATOR","Make a moving title",A.yW,A.bG,new C.fkP()),C.QA("CIRCUIT LAB","Connect logic, learn it",A.a1M,A.co,new C.fkQ())],B.av("O<btz>")))
w($,"ir7","qq",()=>{var v,u,t=B.U(x.N,x.dV)
for(v=0;v<76;++v){u=D.Rk[v]
t.n(0,u.a,u)}return t})
w($,"ip9","aia",()=>B.a([C.FS("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fkt()),C.FS("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fku()),C.FS("Spin the motor","A battery and a motor in a loop will make it spin.",new C.fkv()),C.FS("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.fkw()),C.FS("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fkx()),C.FS("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fkk()),C.FS("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fkl()),C.FS("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fkm()),C.FS("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fkn()),C.FS("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fko()),C.FS("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fkp())],B.av("O<bbI>")))
w($,"ipC","hz7",()=>B.a([C.a1c("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aU,A.cb,new C.fkY()),C.a1c("Focus Timer","Work, then rest","\u23f1\ufe0f",A.cs,A.by,new C.fkZ()),C.a1c("Breathe","Calm down in a minute","\ud83e\udee7",A.iQ,A.cw,new C.fl_()),C.a1c("Draw Pad","Sketch and share","\ud83c\udfa8",A.bA,A.b5,new C.fl0()),C.a1c("Memory Match","Find the pairs","\ud83c\udccf",A.aQ,A.cc,new C.fl1()),C.a1c("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bG,A.be,new C.fl2()),C.a1c("Tip & Split","Share the bill","\ud83e\uddfe",A.bj,A.b_,new C.fl3()),C.a1c("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.bw,A.aD,new C.fl4())],B.av("O<buT>")))
w($,"ipB","hz6",()=>B.a([C.afq("EARTH GLOBE","Turn it, tap a country",A.nu,A.aQ,new C.fkR()),C.afq("SOLAR SYSTEM","The Sun and its worlds",D.bL1,A.aU,new C.fkS()),C.afq("GRAVITY LAB","Drop, weigh, orbit",D.aoc,A.cR,new C.fkT()),C.afq("BLACK HOLE","Throw in a star",A.Gs,A.bw,new C.fkU()),C.afq("GALAXY","Build, tilt, collide",A.yG,A.hb,new C.fkV()),C.afq("SIZE COMPARE","Earth next to a star",D.bLi,A.c5,new C.fkW()),C.afq("SEASONS & MOON","Why it is summer",A.w7,A.bt,new C.fkX())],B.av("O<buO>")))})()};
(a=>{a["b4WxrEf7o6KySKoOML/RNQuvtcc="]=a.current})($__dart_deferred_initializers__);