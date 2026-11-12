((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,A3,Z,A4,A5,A_,R,A6,A7,A8,A9,Aa,A0,N,Ab,Ac,Ad,Ae,T,Af,P,Ag,U,V,W,E,K,G,I,A1,O,Ah,Ai,S,Aj,Q,Ak,L,F,M,C={
bBH(d){return C.i5u(d)},
i5u(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bBH=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.re(B.nk(""),d,A.hX,null,null).dg(0,A.a_z),$async$bBH)
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
return B.i($async$bBH,v)},
ihF(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.RT[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cS(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ag(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.fe(D.RT,new C.fJ6())
if(w==null)w=A.d.gH(D.RT)
s=B.T(x.N,x.B)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.J)(r),++u){l=r[u].a
k=l[0]
l=$.qB().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.J)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gH(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.akY(w.a,w.b,m,w,s,!1)},
ibb(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.N(D.Sh,new C.fxX(),x.bd).aN(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
iq7(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.co(b2,"{")
v=A.a.p0(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.Y.aQ(0,A.a.aC(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aR(a5)
r=0
for(a6=x.j,a7=J.aU(a6.a(J.t(u,"parts"))),a8=x.i;a7.C();){q=a7.gR(a7)
p=B.w(J.t(q,"kind"))
o=B.w(J.t(q,"id"))
if(!$.qB().al(0,p)||J.eG(s,o)||J.ad(t)>=8)continue
J.c6(s,o)
n=B.T(a5,a8)
for(a9=0;a9<4;++a9){m=D.dwz[a9]
l=J.t(q,m)
if(typeof l=="number")J.aK(n,m,l)}k=A.j.E(typeof J.t(q,"x")=="number"?B.dC(J.t(q,"x")):0.2+A.j.F(r,3)*0.3,0.16,0.84)
j=A.j.E(typeof J.t(q,"y")=="number"?B.dC(J.t(q,"y")):0.25+A.j.aq(r,3)*0.3,0.1,0.9)
J.c6(t,new B.dX([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aU(a6.a(J.t(u,"wires")));a5.C();){h=a5.gR(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.w(J.t(g,0))
e=B.w(J.t(g,2))
d=A.o.E(A.j.M(B.dC(J.t(g,1))),0,1)
a0=A.o.E(A.j.M(B.dC(J.t(g,3))),0,1)
if(J.eG(s,f)&&J.eG(s,e)&&!J.z(f,e))J.c6(i,new B.cu([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.L.a(J.t(u,"steps"))
a0=J.aU(a0==null?A.cq:a0)
while(a0.C()){a2=a0.gR(a0)
J.c6(a1,B.w(a2))}a3=a1
a0=J.t(u,"title")
a0=B.w(a0==null?"My invention":a0)
a1=J.t(u,"explain")
a4=new C.mV(a0,B.w(a1==null?"":a1),t,i,A.Z)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.t(u,"honest")
a5=B.w(a5==null?"":a5)
return new C.akY(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
ig8(d){var w,v,u=C.hjY()
d.B(u)
for(w=0;w<60;++w)u.vH(0,0.03333333333333333)
v=u.a
return A.d.aV(v,new C.fFw(u))&&!A.d.cD(v,new C.fFx())},
ig7(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.T(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.J)(l),++u){t=l[u];++v
k.n(0,t.a,$.qB().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.J)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.w(t.e)+" V")
if(p==="resistor")q.push(""+A.j.V(t.r)+" ohms")
if(A.d.q(D.duR,p))q.push("level "+A.j.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.j.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aN(q,", ")+")"
s.push(B.w(p)+n+": "+o+", current "+A.j.ad(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.J)(w),++u){m=w[u]
l.push(B.w(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.w(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aN(s,"\n")+"\nWires: "+A.d.aN(l,"; ")},
i3Q(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.J)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aN(v,"\n")+"\n\n"}v=A.d.aN(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
ihE(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qB().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.Sh[u]
if(A.d.aV(w,new C.fJ3(s)))if(!B.cS(r,s.b.toLowerCase(),0))v=B.cS(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ag("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.Y(w,new C.fJ4(e),B.U(w).k("Y<1>")).gau(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ag("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.j.ad(A.d.cJ(w,0,new C.fJ5())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ag("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gH(w)
w=$.qB().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
akY:function akY(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fJ6:function fJ6(){},
fxX:function fxX(){},
fFw:function fFw(d){this.a=d},
fFx:function fFx(){},
fJ3:function fJ3(d){this.a=d},
fJ4:function fJ4(d){this.a=d},
fJ5:function fJ5(){},
WB:function WB(d,e){this.c=d
this.a=e},
bm8:function bm8(d,e,f,g,h){var _=this
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
ei9:function ei9(d){this.a=d},
eia:function eia(d,e,f){this.a=d
this.b=e
this.c=f},
eib:function eib(d){this.a=d},
eim:function eim(d){this.a=d},
ein:function ein(d,e){this.a=d
this.b=e},
eii:function eii(d){this.a=d},
eig:function eig(d,e){this.a=d
this.b=e},
eih:function eih(d,e,f){this.a=d
this.b=e
this.c=f},
eij:function eij(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eie:function eie(d){this.a=d},
eif:function eif(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eik:function eik(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eid:function eid(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eil:function eil(d,e){this.a=d
this.b=e},
eic:function eic(d,e){this.a=d
this.b=e},
eiq:function eiq(d){this.a=d},
eip:function eip(d){this.a=d},
eir:function eir(d){this.a=d},
eio:function eio(d){this.a=d},
eis:function eis(d,e){this.a=d
this.b=e},
eit:function eit(d,e){this.a=d
this.b=e},
eiu:function eiu(d,e){this.a=d
this.b=e},
eiv:function eiv(d,e){this.a=d
this.b=e},
bC1(d,e,f){var w=null
return B.x(B.a([B.d(d,w,w,w,w,w,w,D.fpM,w,w,w),B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p)},
hxG(d,e,f,g){var w=null,v=B.m(24),u=B.L(f.j(0.6),A.r,1)
return B.at(B.q(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.an,B.d(e,w,w,w,w,w,w,A.xj,A.K,w,w),A.aC,B.bW(A.fM,g,A.bt,w,0,8)],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,w,new B.p(D.bgB,w,u,v,w,w,A.n),w,w,w,w,A.ac,w,w,w),w,w,w)},
GS:function GS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vj:function vj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
WY:function WY(d){this.a=d},
aFV:function aFV(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.m5$=i
_.f9$=j
_.h6$=k
_.by$=l
_.a9$=m
_.c=_.a=null},
exs:function exs(){},
exM:function exM(d){this.a=d},
exL:function exL(d,e){this.a=d
this.b=e},
exN:function exN(){},
exO:function exO(){},
exu:function exu(d,e,f){this.a=d
this.b=e
this.c=f},
ext:function ext(d,e){this.a=d
this.b=e},
exj:function exj(d){this.a=d},
exk:function exk(d){this.a=d},
exl:function exl(d){this.a=d},
exm:function exm(d){this.a=d},
exn:function exn(d){this.a=d},
exo:function exo(d){this.a=d},
exp:function exp(d){this.a=d},
exq:function exq(d){this.a=d},
exr:function exr(d){this.a=d},
exh:function exh(d){this.a=d},
exi:function exi(d){this.a=d},
exg:function exg(d){this.a=d},
exF:function exF(d,e){this.a=d
this.b=e},
exA:function exA(d){this.a=d},
exB:function exB(d){this.a=d},
exx:function exx(d){this.a=d},
exC:function exC(d){this.a=d},
exw:function exw(d){this.a=d},
exD:function exD(d){this.a=d},
exE:function exE(d){this.a=d},
exv:function exv(d){this.a=d},
exG:function exG(d,e){this.a=d
this.b=e},
exz:function exz(d,e){this.a=d
this.b=e},
exH:function exH(d){this.a=d},
exI:function exI(d){this.a=d},
exJ:function exJ(d){this.a=d},
exK:function exK(d){this.a=d},
exy:function exy(d){this.a=d},
bj5:function bj5(d,e){this.b=d
this.a=e},
aNQ:function aNQ(){},
bzH:function bzH(){},
cOs(){var w=0,v=B.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cOs=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.rg().jo(0,"assets/data/body3d.bin"),$async$cOs)
case 3:d=a1
$.hsT=J.eE(A.dN.gaU(d),d.byteOffset,d.byteLength)
t=B.a4l(d)
s=t.getUint32(4,!0)
r=B.a([],x.a)
for(q=x.t,p=8,o=0;o<s;++o){n=p+1
m=t.getUint8(p)
l=B.a([],q)
for(k=0;k<m;++k)l.push(t.getUint8(n+k))
j=B.jI(l,0,null)
p=n+m
n=p+1
i=t.getUint8(p)
l=t.getUint8(n)
h=t.getUint8(n+1)
g=t.getUint8(n+2)
p=n+3
f=t.getUint8(p)
p=p+1+8
e=D.diW[i]
g=B.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a4f(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b3L))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.bc1(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cOs,v)},
aTW:function aTW(d,e,f){this.a=d
this.b=e
this.c=f},
a4f:function a4f(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
bc1:function bc1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Vu:function Vu(d){this.a=d},
aEo:function aEo(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.m5$=t
_.f9$=u
_.h6$=v
_.by$=w
_.a9$=a0
_.c=_.a=null},
dOD:function dOD(d){this.a=d},
dOC:function dOC(d,e){this.a=d
this.b=e},
dOf:function dOf(d,e){this.a=d
this.b=e},
dOg:function dOg(){},
dOE:function dOE(){},
dOh:function dOh(d,e){this.a=d
this.b=e},
dOi:function dOi(d){this.a=d},
dOj:function dOj(){},
dOk:function dOk(d){this.a=d},
dOm:function dOm(d,e){this.a=d
this.b=e},
dOl:function dOl(d){this.a=d},
dOc:function dOc(d,e,f){this.a=d
this.b=e
this.c=f},
dOd:function dOd(d){this.a=d},
dOe:function dOe(d){this.a=d},
dOt:function dOt(d){this.a=d},
dOu:function dOu(d,e){this.a=d
this.b=e},
dOv:function dOv(d,e){this.a=d
this.b=e},
dOw:function dOw(d){this.a=d},
dOs:function dOs(d,e){this.a=d
this.b=e},
dOx:function dOx(d,e){this.a=d
this.b=e},
dOr:function dOr(d,e){this.a=d
this.b=e},
dOy:function dOy(d){this.a=d},
dOq:function dOq(d){this.a=d},
dOz:function dOz(d){this.a=d},
dOp:function dOp(d){this.a=d},
dOA:function dOA(d){this.a=d},
dOo:function dOo(d){this.a=d},
dOB:function dOB(d){this.a=d},
dOn:function dOn(d){this.a=d},
aMV:function aMV(){},
aMW:function aMW(){},
c67:function c67(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c68:function c68(d,e){this.a=d
this.b=e},
c69:function c69(d){this.a=d},
azP(d,e,f,g,h){return new C.bcN(d,e,f,g,h)},
ha8(d,e,f,g,h,i){return $.i17.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.cVn(d,e,f,i,g,h))},
yE:function yE(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
CZ:function CZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nH:function nH(d,e,f){this.a=d
this.b=e
this.c=f},
bcN:function bcN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fri:function fri(){},
frj:function frj(){},
frk:function frk(){},
frr:function frr(){},
frs:function frs(){},
frt:function frt(){},
Vz:function Vz(d){this.a=d},
aEq:function aEq(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.m5$=n
_.f9$=o
_.h6$=p
_.by$=q
_.a9$=r
_.c=_.a=null},
dQi:function dQi(d){this.a=d},
dPX:function dPX(d,e){this.a=d
this.b=e},
dQ_:function dQ_(){},
dQj:function dQj(){},
dPV:function dPV(d,e){this.a=d
this.b=e},
dPW:function dPW(d,e){this.a=d
this.b=e},
dQ0:function dQ0(d,e,f){this.a=d
this.b=e
this.c=f},
dPQ:function dPQ(){},
dPR:function dPR(){},
dPS:function dPS(d){this.a=d},
dPT:function dPT(d,e){this.a=d
this.b=e},
dPU:function dPU(d,e,f){this.a=d
this.b=e
this.c=f},
dQ1:function dQ1(){},
dQ2:function dQ2(d,e){this.a=d
this.b=e},
dQ3:function dQ3(d){this.a=d},
dPZ:function dPZ(d,e){this.a=d
this.b=e},
dPY:function dPY(d){this.a=d},
dPP:function dPP(d,e,f){this.a=d
this.b=e
this.c=f},
dQc:function dQc(d){this.a=d},
dQb:function dQb(d){this.a=d},
dQd:function dQd(d){this.a=d},
dQa:function dQa(d){this.a=d},
dQ8:function dQ8(d){this.a=d},
dQ9:function dQ9(d){this.a=d},
dQ7:function dQ7(d){this.a=d},
dQ4:function dQ4(d){this.a=d},
dQ6:function dQ6(d){this.a=d},
dQe:function dQe(d,e){this.a=d
this.b=e},
dQf:function dQf(d,e){this.a=d
this.b=e},
dQg:function dQg(d){this.a=d},
dQ5:function dQ5(d){this.a=d},
dQh:function dQh(d,e){this.a=d
this.b=e},
bd5:function bd5(d,e){this.b=d
this.a=e},
cVn:function cVn(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aN_:function aN_(){},
bzr:function bzr(){},
hSP(){return new C.Oa(null)},
R9(d,e,f,g,h){return new C.buZ(d,e,f,g,h)},
btl(d,e,f){return A.j.E((d-e)/(f-e),0,1)},
haG(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
Oa:function Oa(d){this.a=d},
Lb:function Lb(d,e){this.a=d
this.b=e},
B5:function B5(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aEH:function aEH(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dWg:function dWg(d,e){this.a=d
this.b=e},
dWf:function dWf(d){this.a=d},
dWi:function dWi(d,e){this.a=d
this.b=e},
dWh:function dWh(d){this.a=d},
buZ:function buZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
frJ:function frJ(){},
frK:function frK(){},
frL:function frL(){},
frM:function frM(){},
frN:function frN(){},
frO:function frO(){},
frP:function frP(){},
frQ:function frQ(){},
frR:function frR(){},
btm:function btm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f78:function f78(d){this.a=d},
f77:function f77(d,e){this.a=d
this.b=e},
f75:function f75(d){this.a=d},
f79:function f79(d){this.a=d},
f76:function f76(d,e){this.a=d
this.b=e},
afT:function afT(d,e,f){this.c=d
this.d=e
this.a=f},
aeL:function aeL(d,e,f){this.c=d
this.d=e
this.a=f},
R2:function R2(d,e,f,g,h,i,j,k,l,m){var _=this
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
bum:function bum(d,e){this.b=d
this.a=e},
btS:function btS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbK:function bbK(d,e){this.b=d
this.a=e},
aIU:function aIU(d,e){this.c=d
this.a=e},
aIV:function aIV(d,e,f){var _=this
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
f6P:function f6P(d){this.a=d},
f6O:function f6O(d){this.a=d},
f6N:function f6N(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6M:function f6M(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6K:function f6K(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6J:function f6J(d,e,f){this.a=d
this.b=e
this.c=f},
f6L:function f6L(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f6I:function f6I(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6X:function f6X(d){this.a=d},
f6W:function f6W(d){this.a=d},
f6Y:function f6Y(d,e){this.a=d
this.b=e},
f6Z:function f6Z(d,e){this.a=d
this.b=e},
f7_:function f7_(d,e){this.a=d
this.b=e},
f6V:function f6V(d,e,f){this.a=d
this.b=e
this.c=f},
f70:function f70(d,e,f){this.a=d
this.b=e
this.c=f},
f6U:function f6U(d){this.a=d},
f6Q:function f6Q(d){this.a=d},
f71:function f71(d){this.a=d},
f72:function f72(d){this.a=d},
f6T:function f6T(d,e){this.a=d
this.b=e},
f73:function f73(d,e){this.a=d
this.b=e},
f6S:function f6S(d,e){this.a=d
this.b=e},
f74:function f74(d,e){this.a=d
this.b=e},
f6R:function f6R(d,e){this.a=d
this.b=e},
f6G:function f6G(){},
f6H:function f6H(){},
bsY:function bsY(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bso:function bso(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bcq:function bcq(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bsq:function bsq(d,e,f){this.b=d
this.c=e
this.a=f},
bws:function bws(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aOF:function aOF(){},
hz6(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a5(0,new B.o(w,0)),u=e.aJ(0,new B.o(w,0)),t=1-f,s=3*t
return d.aO(0,t*t*t).a5(0,v.aO(0,s*t*f)).a5(0,u.aO(0,s*f*f)).a5(0,e.aO(0,f*f*f))},
bj4(d,e,f,g,h,i){return $.i1G.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.dqs(d,e,f,i,g,h))},
a1r:function a1r(d,e){this.a=d
this.b=e},
qq:function qq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
r8:function r8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
D2:function D2(d,e){this.a=d
this.b=e},
a_p:function a_p(d,e){this.a=d
this.b=e},
afH:function afH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a1E:function a1E(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
Dd:function Dd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acC:function acC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acT:function acT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aeO:function aeO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bj2:function bj2(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
_.bx$=_.bL$=0},
dqw:function dqw(d){this.a=d},
dqx:function dqx(d){this.a=d},
dqt:function dqt(d,e){this.a=d
this.b=e},
dqu:function dqu(d){this.a=d},
dqv:function dqv(d){this.a=d},
dqy:function dqy(d){this.a=d},
dqz:function dqz(d){this.a=d},
dqA:function dqA(d){this.a=d},
dqB:function dqB(d){this.a=d},
dqC:function dqC(d){this.a=d},
dqD:function dqD(d){this.a=d},
dqE:function dqE(d){this.a=d},
dqF:function dqF(d){this.a=d},
dqG:function dqG(d){this.a=d},
GD:function GD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
WX:function WX(d){this.a=d},
aFU:function aFU(d,e,f,g,h,i,j){var _=this
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
_.by$=i
_.a9$=j
_.c=_.a=null},
ewN:function ewN(d){this.a=d},
ewC:function ewC(d){this.a=d},
ewE:function ewE(){},
ewF:function ewF(){},
ewI:function ewI(){},
ewJ:function ewJ(d,e,f){this.a=d
this.b=e
this.c=f},
ewK:function ewK(d){this.a=d},
ewL:function ewL(d){this.a=d},
ewG:function ewG(){},
ewH:function ewH(d){this.a=d},
exc:function exc(d){this.a=d},
ewM:function ewM(){},
ewy:function ewy(d){this.a=d},
ewP:function ewP(d){this.a=d},
ewO:function ewO(d){this.a=d},
ewR:function ewR(){},
ewQ:function ewQ(d,e){this.a=d
this.b=e},
ewB:function ewB(){},
ewz:function ewz(d){this.a=d},
ewA:function ewA(d){this.a=d},
exa:function exa(d){this.a=d},
ex9:function ex9(d){this.a=d},
exb:function exb(d){this.a=d},
ex0:function ex0(d,e){this.a=d
this.b=e},
ex8:function ex8(d){this.a=d},
ex6:function ex6(d){this.a=d},
ex7:function ex7(d){this.a=d},
ex5:function ex5(d){this.a=d},
ex4:function ex4(d){this.a=d},
ex1:function ex1(d){this.a=d},
ex2:function ex2(d){this.a=d},
ex3:function ex3(d){this.a=d},
ewD:function ewD(){},
ewX:function ewX(d){this.a=d},
ewY:function ewY(d){this.a=d},
ewW:function ewW(d){this.a=d},
ewZ:function ewZ(d){this.a=d},
ewV:function ewV(d){this.a=d},
ex_:function ex_(d){this.a=d},
ewU:function ewU(d){this.a=d},
ewT:function ewT(d){this.a=d},
ewS:function ewS(d,e){this.a=d
this.b=e},
bj3:function bj3(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dqs:function dqs(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aNO:function aNO(){},
hEy(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aJ(0,e).gcI()*0.1
return new B.o((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
hjY(){var w=B.a([],x.C),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a5o(w,v,u,A.cN,B.T(x.N,x.y))},
hMw(d,e,f){var w=d.c,v=e===0?-1:1
return new B.o(w*f.a+v*C.hjZ(d),d.d*f.b)},
hjZ(d){return 42+(D.mr.al(0,d.b)?(d.ch-1)*38:0)},
eh:function eh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
tX:function tX(d,e,f,g){var _=this
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
abh:function abh(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aco:function aco(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5o:function a5o(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bPs:function bPs(){},
bPD:function bPD(d){this.a=d},
bPy:function bPy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bPE:function bPE(d){this.a=d},
bPF:function bPF(d){this.a=d},
bPH:function bPH(d){this.a=d},
bPI:function bPI(d){this.a=d},
bPG:function bPG(d){this.a=d},
bPJ:function bPJ(d,e,f){this.a=d
this.b=e
this.c=f},
bPK:function bPK(d){this.a=d},
bPu:function bPu(d){this.a=d},
bPv:function bPv(d){this.a=d},
bPt:function bPt(d){this.a=d},
bPw:function bPw(d,e,f){this.a=d
this.b=e
this.c=f},
bPx:function bPx(d){this.a=d},
bPr:function bPr(d){this.a=d},
bPL:function bPL(d,e){this.a=d
this.b=e},
bPz:function bPz(d,e){this.a=d
this.b=e},
bPC:function bPC(d){this.a=d},
bPB:function bPB(d){this.a=d},
bPA:function bPA(d){this.a=d},
ajM:function ajM(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bJQ:function bJQ(){},
bJR:function bJR(){},
mV:function mV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ctc:function ctc(d){this.a=d},
iq1(d2,d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=d3.fx>0&&!d3.x,c7=new C.fUU(),c8=new C.fUW(),c9=new C.fUX(),d0=new C.fUV(),d1=d3.b
switch(d1){case"fridge":w=c9.$4(-16,-28,32,54)
d2.am(w,d0.$3(new B.a1(w.a,w.b,w.c,w.d),A.bO,A.bK))
d2.ah(D.eoe,D.el9,c8.$2(A.dO,1.4))
d2.ah(D.ekP,D.ekN,c8.$2(A.bv,2.4))
d2.ah(D.ekQ,T.aLc,c8.$2(A.bv,2.4))
if(c6){d1=c7.$1(A.fE.j(0.5))
d1.y=A.H3
d2.N(D.ekv,14,d1)
for(d1=d4*0.6,v=0;v<3;++v){u=A.j.F(d1+v/3,1)
d5.$5(d2,"\u2744",new B.o(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d2.am(c9.$4(-22,-26,44,50),d0.$3(D.aRj,A.aQ,A.ct))
d2.N(A.cM,16,c7.$1(A.bv))
d2.N(A.cM,13,c7.$1(c6?A.aI.j(0.85):A.S))
if(c6){d1=d2.c
J.bo(d1.save())
d1.translate(0,4)
d2.hW(0,d3.y*0.6)
for(v=0;v<3;++v){t=v*2.09
d2.ah(A.H,new B.o(Math.cos(t)*11,Math.sin(t)*11),c8.$2(A.ab,3))}d1.restore()
for(d1=d4*0.8,v=0;v<4;++v){u=A.j.F(d1+v*0.25,1)
d2.N(new B.o(Math.sin(v*2+d4)*9,4-u*12),1.6+u*2,c7.$1(A.c.j(0.8*(1-u))))}}d2.N(D.eo6,2.4,c7.$1(c6?A.bg:A.am))
d2.N(D.eoZ,2.4,c7.$1(A.am))
return!0
case"blender":d2.am(c9.$5(-14,14,28,12,4),c7.$1(A.ee))
d1=$.Q().r
t=x.v
s=new B.aF(d1,A.ai,c5,c5,B.a([],t))
s.D(new B.aZ(-16,-26))
s.D(new B.aq(16,-26))
s.D(new B.aq(12,14))
s.D(new B.aq(-12,14))
s.D(new B.bu())
d2.af(s,c7.$1(A.fE.j(0.35)))
if(c6){d1=new B.aF(d1,A.ai,c5,c5,B.a([],t))
d1.D(new B.aZ(-14,-10))
d1.D(new B.aq(14,-10))
d1.D(new B.aq(12,14))
d1.D(new B.aq(-12,14))
d1.D(new B.bu())
d2.af(d1,c7.$1(A.ay.j(0.7)))}d2.af(s,c8.$2(A.ab,1.6))
d1=d2.c
J.bo(d1.save())
d1.translate(0,10)
d2.hW(0,d3.y)
d2.ah(D.a8m,D.aLy,c8.$2(A.bP,3))
d1.restore()
if(c6)for(d1=d4*9,t=d4*1.6,v=0;v<3;++v)d2.N(new B.o(Math.sin(d1+v*2)*9,-10-A.j.F(t+v*0.33,1)*12),2.4,c7.$1(A.eS))
return!0
case"drone":d2.am(c9.$5(-10,-4,20,10,4),c7.$1(A.aM))
d2.N(A.ij,3,c7.$1(c6?A.bg:A.am))
r=c6?-3+Math.sin(d4*4)*2:4
for(d1=d2.c,t=-4+r,q=-6+r,p=0;p<2;++p){o=F.Sv[p]
d2.ah(new B.o(o*0.4,1),new B.o(o,t),c8.$2(A.bv,3))
J.bo(d1.save())
d1.translate(o,q)
d2.ah(D.enV,D.ekU,c8.$2(A.c.j(c6?0.35:0.9),3))
if(c6)d2.bZ(B.bs(A.H,6,24+Math.sin(d3.y*3)*4),c7.$1(A.c.j(0.25)))
d1.restore()}return!0
case"drill":w=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
w.D(new B.aZ(-24,-12))
w.D(new B.aq(10,-12))
w.D(new B.aq(10,2))
w.D(new B.aq(-2,2))
w.D(new B.aq(-6,22))
w.D(new B.aq(-16,22))
w.D(new B.aq(-14,2))
w.D(new B.aq(-24,2))
w.D(new B.bu())
d2.af(w,d0.$3(D.f5W,A.aU,A.cZ))
d2.ar(D.f52,c7.$1(A.df))
d1=d2.c
J.bo(d1.save())
d1.translate(18,-5)
d2.hW(0,d3.y*2)
d2.ah(A.H,D.el0,c8.$2(A.bP,2.4))
d2.ah(A.a8j,D.el_,c8.$2(A.hq,1))
d1.restore()
if(c6)for(d1=d4*3,t=d4*20,v=0;v<4;++v){u=A.j.F(d1+v*0.25,1)
d2.N(new B.o(34+u*6,-5+Math.sin(v*3+t)*6*u),1.4,c7.$1(A.dy.j(1-u)))}return!0
case"torch":if(c6){v=A.j.E(0.5+0.12*(Math.abs(d3.dy)-2),0.5,1)
d1=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
d1.D(new B.aZ(16,-6))
d1.D(new B.aq(52,-26))
d1.D(new B.aq(52,18))
d1.D(new B.aq(16,4))
d1.D(new B.bu())
d2.af(d1,c7.$1(A.bN.j(0.35*v)))}d2.am(c9.$5(-26,-6,30,12,3),d0.$3(D.f61,A.bq,A.cu))
n=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
n.D(new B.aZ(4,-6))
n.D(new B.aq(18,-12))
n.D(new B.aq(18,12))
n.D(new B.aq(4,6))
n.D(new B.bu())
d2.af(n,c7.$1(A.ee))
d2.N(D.el5,7,c7.$1(c6?A.c:A.df))
return!0
case"neon":d2.am(c9.$5(-30,-14,60,28,6),c7.$1(M.nv))
if(c6)m=d3.ax>0.5||A.o.F(A.j.bh(d4*17),3)!==0
else m=!1
l=m?A.bV:D.bqO
if(m){d1=c9.$5(-28,-12,56,24,6)
t=c7.$1(A.bV.j(0.35))
t.y=A.me
d2.am(d1,t)}d2.am(c9.$5(-27,-11,54,22,5),c8.$2(l,2.2))
d5.$5(d2,"OPEN",D.eok,l,17)
return!0
case"microwave":d2.am(c9.$4(-30,-18,60,38),d0.$3(D.f67,A.bP,A.bq))
d1=c9.$5(-26,-14,38,30,3)
d2.am(d1,c7.$1(c6?A.bN.j(0.75):A.as))
if(c6){d1=d2.c
J.bo(d1.save())
d1.translate(-7,8)
d2.hW(0,d3.y*0.5)
d2.bZ(B.bs(A.H,7,22),c7.$1(A.cZ))
d1.restore()}d2.am(c9.$5(15,-14,12,12,2),c7.$1(M.nv))
if(c6)d5.$5(d2,"0:"+A.a.b_(A.o.u(59-A.o.F(A.j.bh(d4),60)),2,"0"),D.el6,A.b5,6.5)
d2.N(D.elm,4,c7.$1(A.df))
return!0
case"doorbell":d2.am(c9.$5(-16,-26,32,52,8),c7.$1(A.aO))
d2.N(A.Jr,10,c7.$1(c6?A.bk:A.bv))
d1=d2.c
J.bo(d1.save())
d1.translate(0,-8)
d2.hW(0,c6?Math.sin(d4*16)*0.45:0)
d5.$5(d2,"\ud83d\udd14",D.ep2,A.c,16)
d1.restore()
d2.N(A.kz,6,c7.$1(A.d5))
d2.N(A.kz,6,c8.$2(A.c,1.6))
if(c6)for(d1=d4*14,v=1;v<=2;++v)d2.cC(B.bX(A.Jr,14+v*6+A.j.F(d1,6)),-0.9,1.8,!1,c8.$2(A.bk.j(0.9-v*0.3),1.8))
return!0
case"camera":d2.ah(D.eoj,D.eoW,c8.$2(A.bv,4))
d1=d2.c
J.bo(d1.save())
d2.hW(0,c6?Math.sin(d4*0.9)*0.18:0)
d2.am(c9.$5(-24,-14,46,22,5),d0.$3(D.f5X,A.bP,A.am))
d2.N(D.aLg,8,c7.$1(A.as))
d2.N(D.aLg,4.5,c7.$1(c6?A.aI:A.cu))
d2.N(D.eoh,2.2,c7.$1(c6&&A.o.F(A.j.bh(d4*1.6),2)===0?A.ay:A.ko))
d1.restore()
if(c6)d5.$5(d2,"REC",D.eos,A.ay,9)
return!0
case"console":d2.am(c9.$5(-28,-22,56,44,8),d0.$3(D.f64,A.iZ,A.fm))
d2.am(c9.$5(-20,-17,40,22,3),c7.$1(A.dA))
if(c6){d1=d4*2.3
d2.N(new B.o(Math.sin(d1)*14,-6+Math.cos(d4*3.1)*6),2.6,c7.$1(A.c))
t=-9+Math.sin(d1+0.4)*6
d2.ar(new B.a1(-18,t,-15.6,t+8),c7.$1(A.b5))
d1=-9+Math.sin(d1-0.4)*6
d2.ar(new B.a1(15.6,d1,18,d1+8),c7.$1(A.bV))}d2.N(D.eoc,4,c7.$1(A.aT))
d2.N(D.el1,2.4,c7.$1(A.ay))
d2.N(D.elj,2.4,c7.$1(A.bg))
return!0
case"heartmon":d2.am(c9.$5(-30,-22,60,44,6),c7.$1(A.as))
d2.am(c9.$5(-26,-18,52,28,3),c7.$1(A.dA))
if(c6){d1=$.Q()
t=B.a([],x.v)
k=new B.aF(d1.r,A.ai,c5,c5,t)
for(d1=d4*0.5,o=-25;o<=25;++o){u=A.j.F((o+25)/50-d1,1)
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
k.ab()}}d2.af(k,c8.$2(A.b5,1.8))
d5.$5(d2,"72",D.el2,A.hj,11)
d1=d4*9
d5.$5(d2,"\u2665",D.eox,A.hj.j((Math.sin(d1)+1.4)/2.4),9+Math.sin(d1)*1.2)}d2.N(D.eom,3,c7.$1(c6?A.bg:A.bv))
return!0
case"aquarium":d1=c9.$5(-26,-20,52,40,4)
d2.am(d1,c7.$1(A.cy.j(c6?0.5:0.3)))
d2.am(c9.$5(-26,-20,52,40,4),c8.$2(A.ab,1.6))
d2.ar(D.f5Z,c7.$1(F.tZ))
if(c6){d1=d4*1.1
t=Math.sin(d1)
q=d2.c
J.bo(q.save())
q.translate(t*14,-2+Math.sin(d4*2)*3)
if(Math.cos(d1)<0)d2.pi(0,-1,1)
d2.bZ(B.bs(A.H,8,14),c7.$1(A.cF))
d1=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
d1.D(new B.aZ(-6,0))
d1.D(new B.aq(-12,-4))
d1.D(new B.aq(-12,4))
d1.D(new B.bu())
d2.af(d1,c7.$1(A.ch))
d2.N(D.em4,1.2,c7.$1(A.w))
q.restore()
for(d1=d4*0.7,v=0;v<5;++v){u=A.j.F(d1+v*0.2,1)
d2.N(new B.o(-18+Math.sin(u*8+v)*2,13-u*30),1.4+A.o.F(v,2),c8.$2(A.ab,1))}}return!0
case"lighthouse":d1=$.Q().r
t=x.v
g=new B.aF(d1,A.ai,c5,c5,B.a([],t))
g.D(new B.aZ(-9,22))
g.D(new B.aq(-5,-16))
g.D(new B.aq(5,-16))
g.D(new B.aq(9,22))
g.D(new B.bu())
d2.af(g,d0.$3(D.f6z,A.c,A.bC))
d2.ar(D.f6v,c7.$1(c6?A.dy:A.bv))
q=new B.aF(d1,A.ai,c5,c5,B.a([],t))
q.D(new B.aZ(-7,-22))
q.D(new B.aq(0,-29))
q.D(new B.aq(7,-22))
q.D(new B.bu())
d2.af(q,c7.$1(A.et))
if(c6){f=Math.sin(d3.y*0.3)
d1=new B.aF(d1,A.ai,c5,c5,B.a([],t))
d1.D(new B.aZ(0,-19))
t=f*34
d1.D(new B.aq(t,-26))
d1.D(new B.aq(t,-12))
d1.D(new B.bu())
d2.af(d1,c7.$1(A.dy.j(0.45)))
d1=c7.$1(A.dy.j(0.35))
d1.y=A.H3
d2.N(D.ekw,14,d1)}return!0
case"discoball":d2.ah(D.eky,Q.aL7,c8.$2(A.df,1.4))
d2.N(A.H,16,d0.$3(D.f5G,A.aQ,A.am))
for(v=0;v<8;++v){d1=-12+v*3.4
d2.ah(new B.o(-16,d1),new B.o(16,d1),c8.$2(A.dq,0.7))}for(v=0;v<5;++v){f=d3.y*0.5+v*1.26
d2.ah(new B.o(Math.cos(f)*16*0.3,Math.sin(f)*16*0.3),new B.o(Math.cos(f)*16,0),c8.$2(A.dq,0.7))}if(c6)for(d1=d4*2,t=d4*9,v=0;v<10;++v){f=d1+v*0.63
e=22+A.o.F(v,3)*6
d2.N(new B.o(Math.cos(f)*e,Math.sin(f)*e*0.8),1.8,c7.$1(D.dk_[A.o.F(v,4)].j(0.5+0.5*Math.sin(t+v))))}return!0
case"robot":d2.am(c9.$5(-14,-4,28,24,5),d0.$3(D.f5D,A.ct,A.am))
d2.am(c9.$5(-12,-26,24,20,5),d0.$3(D.f5w,A.aO,A.bK))
d2.ah(H.aL9,D.ekA,c8.$2(A.bv,1.6))
d2.N(D.ekB,2.2,c7.$1(c6?A.ay:A.bv))
d=c6&&A.j.F(d4*0.8,1)>0.08
for(p=0;p<2;++p){o=F.a5W[p]
if(c6)d1=d?A.bb:A.eV
else d1=A.cu
d2.N(new B.o(o,-17),3.2,c7.$1(d1))}d1=d2.c
J.bo(d1.save())
d1.translate(14,0)
d2.hW(0,c6?-0.6+Math.sin(d4*5)*0.6:0.3)
d2.ah(A.H,D.a8d,c8.$2(A.bK,4))
d1.restore()
d2.ah(D.eo2,D.eoq,c8.$2(A.bK,4))
d2.ar(D.f6u,c7.$1(c6?A.bb.j(0.7):A.aM))
return!0
case"toaster":a0=c6?Math.min(1,d3.ax/3):0
for(d1=-4-a0*14,p=0;p<2;++p){t=c9.$5(D.aC1[p]+1,d1,10,14,2)
q=B.ar(A.bN,A.cZ,a0)
q.toString
d2.am(t,c7.$1(q))}d2.am(c9.$5(-24,-6,48,26,8),d0.$3(D.f5Y,A.bP,A.bq))
for(p=0;p<2;++p){o=D.aC1[p]
d1=c9.$5(o,-5,12,5,2)
d2.am(d1,c7.$1(c6?A.fo:A.as))
if(c6){d1=c9.$5(o,-5,12,5,2)
t=c7.$1(A.cF.j(0.5))
t.y=N.op
d2.am(d1,t)}}d2.ah(D.els,D.elN,c8.$2(A.as,3))
return!0
case"ledstrip":d2.am(c9.$5(-34,-4,68,10,4),c7.$1(A.cu))
for(d1=d4*90,v=0;v<9;++v){a1=A.j.F(d1+v*40,360)
l=c6?new Al.pe(1,a1,0.8,1).k_():A.ee
if(c6){t=c7.$1(l.j(0.45))
t.y=N.op
d2.N(new B.o(-30+v*7.5,1),7,t)}d2.N(new B.o(-30+v*7.5,1),2.6,c7.$1(l))}d2.am(c9.$5(-40,-2,6,6,1),c7.$1(A.df))
return!0
case"pump":d2.am(c9.$5(-16,-2,32,22,6),d0.$3(D.f5M,A.cy,A.FR))
d2.N(D.eoy,8,c7.$1(A.rw))
d1=d2.c
J.bo(d1.save())
d1.translate(-2,9)
d2.hW(0,d3.y)
for(v=0;v<3;++v){t=v*2.09
d2.ah(A.H,new B.o(Math.cos(t)*7,Math.sin(t)*7),c8.$2(A.fE,2.4))}d1.restore()
d1=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
d1.D(new B.aZ(16,6))
d1.D(new B.aq(26,6))
d1.D(new B.aq(26,-20))
d1.D(new B.aq(10,-20))
d2.af(d1,c8.$2(A.bK,4))
if(c6){for(d1=d4*0.9,v=0;v<5;++v)d2.N(new B.o(26,6-A.j.F(d1+v*0.2,1)*26),2.2,c7.$1(A.hp))
d2.N(D.emH,3.2,c7.$1(A.hp.j(0.7)))}return!0
case"hairdryer":d1=d2.c
J.bo(d1.save())
d2.hW(0,-0.15)
d2.am(c9.$5(-26,-14,40,22,10),d0.$3(D.f6_,A.hT,A.rv))
d2.am(c9.$5(14,-10,12,14,3),c7.$1(A.cu))
d2.am(c9.$5(-10,6,12,22,4),c7.$1(A.ee))
d1.restore()
if(c6){for(d1=d4*3,v=0;v<4;++v){u=A.j.F(d1+v*0.25,1)
t=u*18
q=-10+v*5
d2.ah(new B.o(24+t,q),new B.o(32+t,q),c8.$2(A.c.j(1-u),1.8))}d1=c7.$1(A.cF.j(0.4))
d1.y=N.op
d2.N(D.ell,8,d1)}return!0
case"headphones":d2.cC(B.bs(A.dG,44,44),3.141592653589793,3.141592653589793,!1,c8.$2(A.bv,4))
for(d1=d4*12,p=0;p<2;++p){o=F.Su[p]
t=o-7
d2.am(c9.$5(t,0,14,20,6),d0.$3(new B.a1(t,0,t+14,20),A.br,A.of))
if(c6)for(t=o<0,v=1;v<=2;++v){q=B.bX(new B.o(o,10),10+v*5+A.j.F(d1,5))
h=t?2.2:-0.9
d2.cC(q,h,1.6,!1,c8.$2(A.eK.j(0.9-v*0.3),1.6))}}if(c6)d5.$5(d2,"\u266a",new B.o(-4,-8-A.j.F(d4*14,8)),A.kL,12)
return!0
case"smartwatch":d2.am(c9.$5(-8,-30,16,14,3),c7.$1(A.cu))
d2.am(c9.$5(-8,14,16,14,3),c7.$1(A.cu))
d2.am(c9.$5(-14,-17,28,32,8),d0.$3(D.f5B,A.df,A.ee))
d2.am(c9.$5(-11,-14,22,26,6),c7.$1(A.dA))
if(c6){a2=new B.V(Date.now(),0,!1)
d5.$5(d2,A.a.b_(A.o.u(B.dg(a2)),2,"0")+":"+A.a.b_(A.o.u(B.fP(a2)),2,"0"),D.ekH,A.b5,9.5)
j=(Math.sin(d4*9)+1)/2
d1=B.ar(A.Fx,A.hj,j)
d1.toString
d5.$5(d2,"\u2665",new B.o(-8,1),d1,8+j*2)
d5.$5(d2,""+(70+A.o.F(A.j.bh(d4*2),6)),A.dG,A.c,7)}return!0
case"tablet":d2.am(c9.$5(-30,-22,60,44,6),c7.$1(M.nv))
d2.am(c9.$5(-30,-22,60,44,6),c8.$2(A.bK,1.6))
a3=c9.$5(-27,-19,54,38,3)
if(c6){d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nO(a3),$.no(),!0)
d1.translate(-27,-19)
L.M_(d2,D.fcW,d4,c5)
d1.restore()}else d2.am(a3,c7.$1(D.w6))
return!0
case"buck":a4=c9.$5(-26,-22,52,42,5)
d2.am(a4,d0.$3(new B.a1(a4.a,a4.b,a4.c,a4.d),A.dJ,A.d6))
d2.am(a4,c8.$2(A.aV,1.2))
d2.N(D.aLG,9,c7.$1(A.as))
d2.N(D.aLG,6,c8.$2(A.cZ,2))
d2.am(c9.$5(4,-2,14,10,2),c7.$1(A.as))
d2.am(c9.$5(-22,-19,44,12,2),c7.$1(A.dA))
d1=A.j.ad(d3.db,1)
t=A.j.ad(c6?d3.dx:d3.e,1)
q=c6?A.b5:A.am
d5.$5(d2,d1+"\u2192"+t+"V",D.emR,q,8.2)
d2.N(D.ela,2.4,c7.$1(c6?A.bg:A.aM))
d5.$5(d2,"IN",D.eor,A.ab,6)
d5.$5(d2,"OUT",D.emz,A.ab,6)
return!0
case"regulator":a5=c6?A.j.E(d3.cy*Math.abs(d3.fr)/2.5,0,1):0
d1=c9.$5(-14,-26,28,22,3)
t=B.ar(A.bK,A.ay,a5)
t.toString
d2.am(d1,c7.$1(t))
d2.N(H.a8b,3,c7.$1(A.aM))
d2.am(c9.$5(-12,-4,24,18,3),d0.$3(D.f5x,A.ee,A.i1))
d5.$5(d2,"7805",D.a8m,A.ab,8)
for(p=0;p<3;++p){d1=D.dqt[p]-1
d2.ar(new B.a1(d1,14,d1+2,22),c7.$1(A.e7))}if(a5>0.2)for(d1=d4*0.9,v=0;v<3;++v){u=A.j.F(d1+v*0.33,1)
d2.N(new B.o(-6+v*6,-28-u*12),2+u*2,c7.$1(A.c.j(0.5*(1-u))))}d5.$5(d2,"5V",D.ep_,A.bo,9)
return!0
case"diode":d2.ah(D.aLK,D.aLs,c8.$2(A.e7,2.4))
d2.am(c9.$5(-14,-7,28,14,6),c7.$1(A.aw.j(0.85)))
d2.ar(D.f5g,c7.$1(A.bo))
if(c6){d1=c9.$5(-14,-7,28,14,6)
t=c7.$1(A.dy.j(0.4))
t.y=A.kV
d2.am(d1,t)}d1=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
d1.D(new B.aZ(-8,-4))
d1.D(new B.aq(-8,4))
d1.D(new B.aq(-1,0))
d1.D(new B.bu())
d2.af(d1,c7.$1(A.aT))
d5.$5(d2,"one way",D.eof,A.aD,8)
return!0
case"ldr":d2.ah(D.aLK,D.a8m,c8.$2(A.e7,2.4))
d2.ah(D.aLy,D.aLs,c8.$2(A.e7,2.4))
d2.N(A.H,12,c7.$1(A.cZ))
d2.N(A.H,12,c8.$2(A.rB,1.6))
d1=$.Q()
t=B.a([],x.v)
a6=new B.aF(d1.r,A.ai,c5,c5,t)
a6.D(new B.aZ(-8,-6))
for(v=0;v<5;++v){d1=(v&1)===0?8:-8
d1=new B.aq(d1,-6+v*3)
t.push(d1)
q=a6.f
if(q!=null)d1.ak(q)
a6.ab()}d2.af(a6,c8.$2(A.bN,1.4))
d1=B.ar(A.bv,A.dy,d3.f)
d1.toString
d5.$5(d2,"\u2600",new B.o(-6,-26),d1,14)
d5.$5(d2,""+A.j.V(20+980*(1-d3.f))+"\u03a9",D.eo3,A.ab,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":switch(d1){case"lgtv":t=A.en
break
case"sonytv":t=A.rq
break
case"appletv":t=A.e7
break
default:t=F.FA
break}a7=d1==="lgtv"||d1==="appletv"
d2.am(c9.$5(-36,-24,72,a7?42:44,6),c7.$1(t))
t=a7?-35:-33
q=a7?-23:-21
h=a7?70:66
a3=c9.$5(t,q,h,a7?40:38,3)
t=a3.a
q=a3.b
if(c6){h=d2.c
J.bo(h.save())
h.clipRRect(B.nO(a3),$.no(),!0)
h.translate(t,q)
L.hfW(d2,new B.av(a3.c-t,a3.d-q),d3.at,d4,d3.ax,-1)
h.restore()
d2.N(D.elQ,1.6,c7.$1(A.b5))}else{d2.am(a3,c7.$1(D.w6))
h=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
h.D(new B.aZ(t,q))
h.D(new B.aq(t+24,q))
h.D(new B.aq(t,q+22))
h.D(new B.bu())
d2.af(h,c7.$1(A.c.j(0.05)))}switch(d1){case"lgtv":d2.am(c9.$5(-22,19,44,3,1.5),c7.$1(A.df))
break
case"sonytv":for(d1=x.v,p=0;p<2;++p){o=M.hK[p]
t=$.Q()
q=B.a([],d1)
t=new B.aF(t.r,A.ai,c5,c5,q)
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
h=new B.bu()
q.push(h)
q=t.f
if(q!=null)h.ak(q)
t.ab()
d2.af(t,c7.$1(A.df))}d5.$5(d2,"SONY",D.enu,A.bP,5.5)
break
case"appletv":d1=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
d1.D(new B.aZ(-8,18))
d1.D(new B.aq(8,18))
d1.D(new B.aq(12,25))
d1.D(new B.aq(-12,25))
d1.D(new B.bu())
d2.af(d1,c7.$1(D.Z8))
d5.$5(d2,"Apple TV",D.emS,A.bv,4.8)
break
default:d2.am(c9.$5(-34,19,68,7,3),c7.$1(D.bp2))
for(v=0;v<14;++v){d1=-32+v*4.9
d2.ah(new B.o(d1,20),new B.o(d1,25),c8.$2(A.dq,0.6))}d5.$5(d2,"B&O",D.eoV,F.tZ,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":a9=D.mr.h(0,d1)
b0=a9.b===D.Eo
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
d2.am(w,d0.$3(new B.a1(h,a8,b3,b4),b6,b5))
a3=c9.$5(t+2,q,b1-4,b2-4,3.5)
if(c6){t=d2.c
J.bo(t.save())
t.clipRRect(B.nO(a3),$.no(),!0)
q=a3.a
h=a3.b
t.translate(q,h)
L.M_(d2,new B.av(a3.c-q,a3.d-h),d4,c5)
t.restore()}else d2.am(a3,c7.$1(D.w6))
if(b0){t=a3.b
q=a3.d
d2.ah(new B.o(0,t),new B.o(0,q),c8.$2(A.w.j(c6?0.45:0.7),0.9))}if(d1==="iphonefold"||d1==="huawei")d2.am(c9.$5(-4,a3.b+1.2,8,2.6,1.3),c7.$1(A.w))
else{d1=b0?b1/2-7:0
d2.N(new B.o(d1,a3.b+3),1.3,c7.$1(A.w))}return!0
case"ereader":d2.am(c9.$5(-17,-28,34,52,4),c7.$1(A.ee))
d2.am(c9.$5(-14.5,-25.5,29,45,2),c7.$1(A.bP))
if(c6){d5.$5(d2,"NGMY",D.ep5,A.as,9)
for(v=0;v<9;++v){d1=-9+v*3.6
t=A.o.F(v,4)===3?14:22
d2.ar(new B.a1(-11,d1,-11+t,d1+1.4),c7.$1(A.bq))}d2.N(A.a89,1.6,c7.$1(A.as))}return!0
case"laptop":d2.am(c9.$5(-30,-28,60,42,4),d0.$3(D.f68,A.ct,A.bq))
b7=c9.$5(-27,-25,54,34,2)
if(c6){d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nO(b7),$.no(),!0)
t=b7.a
q=b7.b
d1.translate(t,q)
L.M_(d2,new B.av(b7.c-t,b7.d-q),d4,c5)
d1.restore()}else d2.am(b7,c7.$1(D.w6))
d1=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
d1.D(new B.aZ(-38,16))
d1.D(new B.aq(38,16))
d1.D(new B.aq(34,21))
d1.D(new B.aq(-34,21))
d1.D(new B.bu())
d2.af(d1,c7.$1(D.Z8))
d2.am(c9.$5(-7,16,14,2,1),c7.$1(A.bq))
return!0
case"imac":d2.am(c9.$5(-32,-28,64,46,5),d0.$3(D.f6c,A.bO,A.ct))
b8=c9.$5(-29,-25,58,33,2)
if(c6){d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nO(b8),$.no(),!0)
t=b8.a
q=b8.b
d1.translate(t,q)
L.M_(d2,new B.av(b8.c-t,b8.d-q),d4,c5)
d1.restore()}else d2.am(b8,c7.$1(D.w6))
d2.N(D.aL2,2,c7.$1(A.bK))
d1=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
d1.D(new B.aZ(-6,18))
d1.D(new B.aq(6,18))
d1.D(new B.aq(10,26))
d1.D(new B.aq(-10,26))
d1.D(new B.bu())
d2.af(d1,c7.$1(D.Z8))
return!0
case"monitor":d2.am(c9.$5(-34,-28,68,40,3),c7.$1(A.en))
b9=c9.$5(-32,-26,64,36,2)
if(c6){d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nO(b9),$.no(),!0)
t=b9.a
q=b9.b
d1.translate(t,q)
L.M_(d2,new B.av(b9.c-t,b9.d-q),d4,c5)
d1.restore()}else d2.am(b9,c7.$1(D.w6))
d2.ar(D.f6j,c7.$1(A.bq))
d2.am(c9.$5(-14,22,28,3.5,1.5),c7.$1(A.df))
return!0
case"projector":if(c6){d1=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
d1.D(new B.aZ(14,4))
d1.D(new B.aq(-32,-42))
d1.D(new B.aq(34,-42))
d1.D(new B.bu())
d2.af(d1,c7.$1(A.dy.j(0.16)))
c0=c9.$5(-32,-46,66,26,2)
d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nO(c0),$.no(),!0)
t=c0.a
q=c0.b
d1.translate(t,q)
L.M_(d2,new B.av(c0.c-t,c0.d-q),d4,c5)
d1.restore()}d2.am(c9.$5(-26,-4,52,24,6),d0.$3(D.f60,A.iB,A.df))
d2.N(D.aLe,7,c7.$1(A.as))
d2.N(D.aLe,4,c7.$1(c6?A.dy:A.cu))
for(v=0;v<4;++v){d1=-20+v*4
d2.ah(new B.o(d1,2),new B.o(d1,14),c8.$2(A.dq,1))}return!0
case"carscreen":d2.am(c9.$5(-34,-10,68,32,12),c7.$1(A.as))
c1=c9.$5(-30,-20,60,28,8)
d2.am(c1,c7.$1(M.nv))
d2.am(c1,c8.$2(A.bv,1.2))
if(c6){c2=new B.aF($.Q().r,A.ai,c5,c5,B.a([],x.v))
c2.D(new B.aZ(-26,4))
c2.D(new B.c5(-10,-14+Math.sin(d4)*3,6,-6))
c2.D(new B.aq(22,-16))
d2.af(c2,c8.$2(A.aI,2.2))
d1=A.j.F(d4*6,48)
d2.N(new B.o(-26+d1,4-d1*0.1),2.4,c7.$1(A.b5))
d5.$5(d2,""+(88+A.o.F(A.j.bh(d4*2),5)),H.aLx,A.c,10)
d5.$5(d2,"km/h",D.emF,A.aD,5)}return!0
case"vision":c3=c9.$5(-32,-14,64,28,13)
d2.am(c3,d0.$3(new B.a1(c3.a,c3.b,c3.c,c3.d),A.df,A.ee))
c4=c9.$5(-29,-11,58,22,10)
if(c6){d1=d2.c
J.bo(d1.save())
d1.clipRRect(B.nO(c4),$.no(),!0)
t=c4.a
q=c4.b
d1.translate(t,q)
L.M_(d2,new B.av(c4.c-t,c4.d-q),d4,c5)
d1.restore()
d1=c7.$1(A.br.j(0.2))
d1.y=A.me
d2.N(A.H,26,d1)}else d2.am(c4,c7.$1(A.S))
d2.ah(D.eoF,D.eoK,c8.$2(A.bq,4))
d2.ah(D.elS,D.em7,c8.$2(A.bq,4))
return!0}return!1},
fUU:function fUU(){},
fUW:function fUW(){},
fUX:function fUX(){},
fUV:function fUV(){},
hiO(d,e,f,g){return new C.ajK(d,g,f,e)},
Gn(d,e,f){return new C.bcO(d,e,f)},
ajK:function ajK(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
ajL:function ajL(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.m5$=i
_.f9$=j
_.h6$=k
_.by$=l
_.a9$=m
_.c=_.a=null},
bJu:function bJu(d,e){this.a=d
this.b=e},
bJv:function bJv(d){this.a=d},
bJt:function bJt(d){this.a=d},
bJw:function bJw(){},
bJx:function bJx(d){this.a=d},
bJy:function bJy(d,e,f){this.a=d
this.b=e
this.c=f},
bJs:function bJs(d,e){this.a=d
this.b=e},
bJp:function bJp(d,e){this.a=d
this.b=e},
bJq:function bJq(d,e,f){this.a=d
this.b=e
this.c=f},
bJj:function bJj(d,e){this.a=d
this.b=e},
bJk:function bJk(){},
bJr:function bJr(d,e,f){this.a=d
this.b=e
this.c=f},
bJo:function bJo(d,e){this.a=d
this.b=e},
bJl:function bJl(d,e){this.a=d
this.b=e},
bJm:function bJm(d,e){this.a=d
this.b=e},
bJn:function bJn(d){this.a=d},
bJN:function bJN(d){this.a=d},
bJO:function bJO(){},
bIX:function bIX(){},
bJP:function bJP(d,e){this.a=d
this.b=e},
bJM:function bJM(d,e,f){this.a=d
this.b=e
this.c=f},
bJH:function bJH(d){this.a=d},
bJE:function bJE(d,e,f){this.a=d
this.b=e
this.c=f},
bJF:function bJF(d,e){this.a=d
this.b=e},
bJI:function bJI(d){this.a=d},
bJC:function bJC(d,e){this.a=d
this.b=e},
bJD:function bJD(d,e){this.a=d
this.b=e},
bJG:function bJG(d){this.a=d},
bJJ:function bJJ(d){this.a=d},
bJA:function bJA(d,e){this.a=d
this.b=e},
bJB:function bJB(d,e){this.a=d
this.b=e},
bJK:function bJK(d){this.a=d},
bJz:function bJz(d){this.a=d},
bJL:function bJL(d){this.a=d},
bIY:function bIY(d,e){this.a=d
this.b=e},
bJg:function bJg(d,e){this.a=d
this.b=e},
bJi:function bJi(d,e){this.a=d
this.b=e},
bJh:function bJh(d,e){this.a=d
this.b=e},
bJ3:function bJ3(d,e){this.a=d
this.b=e},
bJ4:function bJ4(d){this.a=d},
bJ2:function bJ2(d){this.a=d},
bJ5:function bJ5(d,e,f){this.a=d
this.b=e
this.c=f},
bJ1:function bJ1(d,e){this.a=d
this.b=e},
bJ8:function bJ8(d,e){this.a=d
this.b=e},
bJ9:function bJ9(d,e){this.a=d
this.b=e},
bJa:function bJa(d,e){this.a=d
this.b=e},
bJb:function bJb(d,e,f){this.a=d
this.b=e
this.c=f},
bJ0:function bJ0(d,e){this.a=d
this.b=e},
bJc:function bJc(d,e,f){this.a=d
this.b=e
this.c=f},
bJ_:function bJ_(d,e){this.a=d
this.b=e},
bJd:function bJd(d,e,f){this.a=d
this.b=e
this.c=f},
bIZ:function bIZ(d,e){this.a=d
this.b=e},
bJe:function bJe(d){this.a=d},
bJf:function bJf(d){this.a=d},
bJ6:function bJ6(d){this.a=d},
bJ7:function bJ7(d){this.a=d},
bcO:function bcO(d,e,f){this.a=d
this.b=e
this.c=f},
fru:function fru(){},
frv:function frv(){},
frw:function frw(){},
frh:function frh(){},
frx:function frx(){},
frg:function frg(){},
fry:function fry(){},
frl:function frl(){},
frf:function frf(){},
frm:function frm(){},
fre:function fre(){},
frn:function frn(){},
frd:function frd(){},
fro:function fro(){},
frb:function frb(){},
frc:function frc(){},
frp:function frp(){},
fr9:function fr9(){},
fra:function fra(){},
frq:function frq(){},
fr8:function fr8(){},
Wa:function Wa(d){this.a=d},
aET:function aET(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
e03:function e03(d,e){this.a=d
this.b=e},
e0c:function e0c(d){this.a=d},
e0d:function e0d(){},
e0e:function e0e(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e0f:function e0f(){},
e02:function e02(d){this.a=d},
e01:function e01(d,e,f){this.a=d
this.b=e
this.c=f},
e00:function e00(d,e){this.a=d
this.b=e},
e_Z:function e_Z(d){this.a=d},
e0_:function e0_(){},
e0b:function e0b(d){this.a=d},
e0a:function e0a(d){this.a=d},
e08:function e08(d,e){this.a=d
this.b=e},
e06:function e06(d){this.a=d},
e07:function e07(){},
e09:function e09(d,e,f){this.a=d
this.b=e
this.c=f},
e04:function e04(d,e){this.a=d
this.b=e},
e05:function e05(){},
e0h:function e0h(d){this.a=d},
e0i:function e0i(d,e){this.a=d
this.b=e},
e0g:function e0g(){},
e0j:function e0j(d,e){this.a=d
this.b=e},
e0k:function e0k(d){this.a=d},
e0l:function e0l(d){this.a=d},
ayW:function ayW(d,e){this.c=d
this.a=e},
baX:function baX(d,e){var _=this
_.d=$
_.by$=d
_.a9$=e
_.c=_.a=null},
cKM:function cKM(d){this.a=d},
baW:function baW(d,e){this.b=d
this.a=e},
cKL:function cKL(d){this.a=d},
azf:function azf(){},
azg:function azg(){},
aLm:function aLm(){},
bzu:function bzu(){},
iq3(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bX(A.vk,23)
$.Q()
b8=B.K()
b8.r=A.as.gp(0)
b9.N(A.vk,25,b8)
b8=B.K()
b8.sav(D.exN.aK(0,v))
b9.N(A.vk,23,b8)
for(u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
b8=Math.cos(t)
s=Math.sin(t)
r=Math.cos(t)
q=Math.sin(t)
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.r=A.bo.gp(0)
p.c=A.o.F(u,5)===0?1.8:1
b9.ah(new B.o(b8*17,s*17-2),new B.o(r*21,q*21-2),p)}o=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.j.E(o/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=B.K()
r.r=A.bC.gp(0)
r.c=2
r.d=A.bw
b9.ah(A.vk,new B.o(b8*18,s*18-2),r)
r=B.K()
r.r=A.bo.gp(0)
b9.N(A.vk,3,r)
c2.$5(b9,w?"V":"A",D.eoN,A.bo,12)
c2.$5(b9,w?A.j.ad(o,1)+" V":""+A.j.V(o*1000)+" mA",D.eo9,A.as,9.5)
return!0
case"fan":b8=B.bl(D.f5t,A.hO)
$.Q()
s=B.K()
s.r=A.bv.gp(0)
b9.am(b8,s)
s=B.K()
s.r=A.am.gp(0)
b9.ar(D.f6k,s)
s=B.K()
s.r=A.S.j(0.6).gp(0)
b9.N(H.vl,22,s)
for(b8=b9.c,u=0;u<4;++u){J.bo(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.bs(A.aL6,18,10)
r=new B.ao(A.O,A.M,A.R,A.T,A.P)
r.r=A.hp.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
b9.bZ(s,r)
b8.restore()}b8=B.K()
b8.r=A.bp.gp(0)
b9.N(H.vl,4,b8)
b8=B.K()
b8.b=A.a9
b8.c=2
b8.r=A.ct.gp(0)
b9.N(H.vl,22,b8)
b8=B.K()
b8.b=A.a9
b8.c=0.8
b8.r=A.jV.gp(0)
b9.N(H.vl,14,b8)
return!0
case"speaker":n=B.bl(D.aRj,A.qY)
$.Q()
b8=B.K()
b8.sav(D.asG.aK(0,new B.a1(n.a,n.b,n.c,n.d)))
b9.am(n,b8)
m=b7?Math.sin(c1*40)*1.6:0
b8=B.K()
b8.sav(D.ey7.aK(0,B.bX(A.cA,15)))
b9.N(A.cA,14+m,b8)
b8=B.K()
b8.r=A.df.gp(0)
b9.N(A.cA,5,b8)
b8=B.K()
b8.r=A.bq.gp(0)
b9.N(H.a8a,5+m*0.4,b8)
if(b7)for(b8=c1*18,u=1;u<=3;++u){s=B.bX(D.elr,6+u*6+A.j.F(b8,6))
r=new B.ao(A.O,A.M,A.R,A.T,A.P)
r.b=A.a9
r.c=1.8
r.r=A.bV.j(0.9-u*0.2).gp(0)
b9.cC(s,-0.8,1.6,!1,r)}return!0
case"clock":l=B.bl(D.f6b,A.qY)
$.Q()
b8=B.K()
b8.sav(D.c79.aK(0,new B.a1(l.a,l.b,l.c,l.d)))
b9.am(l,b8)
b8=B.bl(D.aRl,A.iw)
s=B.K()
s.r=A.i1.gp(0)
b9.am(b8,s)
if(b7){k=new B.V(Date.now(),0,!1)
j=B.FH(k)<500?":":" "
i=A.a.b_(A.o.u(B.dg(k)),2,"0")
h=A.a.b_(A.o.u(B.fP(k)),2,"0")
b8=B.K()
b8.r=A.b5.j(0.12).gp(0)
b9.ar(D.aRl,b8)
c2.$5(b9,i+j+h,D.eov,A.b5,21)}b8=B.K()
b8.r=A.ct.gp(0)
b9.N(D.eot,2.4,b8)
b8=B.K()
b8.r=A.ct.gp(0)
b9.N(D.elw,2.4,b8)
return!0
case"calculator":l=B.bl(D.f5R,A.hP)
$.Q()
b8=B.K()
b8.sav(D.c6U.aK(0,new B.a1(l.a,l.b,l.c,l.d)))
b9.am(l,b8)
b8=B.bl(D.f5K,A.hx)
s=B.K()
s.r=(b7?A.Zk:D.bro).gp(0)
b9.am(b8,s)
if(b7)c2.$5(b9,"3.14159",D.eo8,A.Y2,10.5)
for(g=0;g<4;++g)for(b8=-6+g*8,s=b8+6,f=0;f<4;++f){r=-15+f*8
r=B.bl(new B.a1(r,b8,r+6,s),A.Uo)
$.Q()
q=new B.ao(A.O,A.M,A.R,A.T,A.P)
q.r=(f===3?A.ch:A.bP).gp(0)
b9.am(r,q)}return!0
case"phone":l=B.bl(D.f5F,A.hP)
$.Q()
b8=B.K()
b8.r=M.nv.gp(0)
b9.am(l,b8)
b8=B.K()
b8.b=A.a9
b8.c=1.9
b8.r=D.ajZ.gp(0)
b9.am(l,b8)
e=B.bl(D.f5v,A.hO)
if(b7){b8=B.K()
b8.sav(D.c8r.aK(0,new B.a1(e.a,e.b,e.c,e.d)))
b9.am(e,b8)
b8=b9.c
J.bo(b8.save())
b8.clipRRect(B.nO(e),$.no(),!0)
b8.translate(-12,-25)
L.M_(b9,D.fcy,c1,b6)
b8.restore()
d=A.j.F(c1*0.12,1)
b8=B.bl(D.f5s,A.hx)
s=B.K()
s.r=A.aT.gp(0)
b9.am(b8,s)
s=B.K()
s.r=A.b5.gp(0)
b9.ar(new B.a1(-10,14.5,-10+20*d,16.9),s)
c2.$5(b9,"\u26a1"+A.j.V(d*100)+"%",D.ena,A.c,6)}else{b8=B.K()
b8.r=D.w6.gp(0)
b9.am(e,b8)}b8=B.bl(D.f6A,D.eyf)
s=B.K()
s.r=A.w.gp(0)
b9.am(b8,s)
return!0
case"router":l=B.bl(D.f6a,A.mu)
$.Q()
b8=B.K()
b8.sav(D.c7q.aK(0,new B.a1(l.a,l.b,l.c,l.d)))
b9.am(l,b8)
for(a0=0;a0<2;++a0){a1=F.Su[a0]
b8=a1<0?-4:4
s=new B.ao(A.O,A.M,A.R,A.T,A.P)
s.r=A.cu.gp(0)
s.c=4
s.d=A.bw
b9.ah(new B.o(a1,-4),new B.o(a1+b8,-28),s)}for(u=0;u<4;++u){if(b7)a2=A.o.F(A.j.bh(c1*(3+u*1.3)),2)===0||u===0
else a2=!1
b8=new B.ao(A.O,A.M,A.R,A.T,A.P)
b8.r=(a2?A.bg:A.aM).gp(0)
b9.N(new B.o(-15+u*10,11),2.6,b8)}if(b7)for(b8=c1*10,u=1;u<=3;++u){s=B.bX(H.vl,8+u*6+A.j.F(b8,6))
r=new B.ao(A.O,A.M,A.R,A.T,A.P)
r.b=A.a9
r.c=1.8
r.r=A.hn.j(0.9-u*0.2).gp(0)
b9.cC(s,-2.3,1.5,!1,r)}return!0
case"siren":a3=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bl(D.f5Q,A.hO)
s=$.Q()
r=B.K()
r.r=A.ee.gp(0)
b9.am(b8,r)
if(b7){b8=B.K()
b8.r=A.ay.j(0.5*a3).gp(0)
b8.y=A.wn
b9.N(A.vk,34,b8)}a4=new B.aF(s.r,A.ai,b6,b6,B.a([],x.v))
a4.D(new B.aZ(-16,12))
a4.D(new B.aq(-16,-2))
a4.D(new B.c5(0,-30,16,-2))
a4.D(new B.aq(16,12))
a4.D(new B.bu())
b8=B.K()
b8.r=B.ar(A.et,D.bik,a3).gp(0)
b9.af(a4,b8)
b8=B.K()
b8.b=A.a9
b8.c=1.4
b8.r=A.bW.gp(0)
b9.af(a4,b8)
if(b7){b8=b9.c
J.bo(b8.save())
b8.translate(0,-2)
b9.hW(0,c1*7)
s=B.K()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.ah(A.H,H.a8a,s)
b8.restore()}return!0
case"toycar":a5=b7?Math.sin(c1*30)*0.8:0
b8=b9.c
J.bo(b8.save())
b8.translate(0,a5)
s=$.Q().r
r=x.v
l=new B.aF(s,A.ai,b6,b6,B.a([],r))
l.D(new B.aZ(-28,8))
l.D(new B.aq(-28,-2))
l.D(new B.aq(-16,-4))
l.D(new B.aq(-10,-16))
l.D(new B.aq(10,-16))
l.D(new B.aq(18,-4))
l.D(new B.aq(28,-2))
l.D(new B.aq(28,8))
l.D(new B.bu())
q=B.K()
q.sav(D.c5w.aK(0,D.f63))
b9.af(l,q)
q=new B.aF(s,A.ai,b6,b6,B.a([],r))
q.D(new B.aZ(-8,-4))
q.D(new B.aq(-4,-13))
q.D(new B.aq(4,-13))
q.D(new B.aq(4,-4))
q.D(new B.bu())
p=B.K()
p.r=A.fE.gp(0)
b9.af(q,p)
r=new B.aF(s,A.ai,b6,b6,B.a([],r))
r.D(new B.aZ(8,-4))
r.D(new B.aq(8,-13))
r.D(new B.aq(11,-13))
r.D(new B.aq(15,-4))
r.D(new B.bu())
s=B.K()
s.r=A.fE.gp(0)
b9.af(r,s)
for(a0=0;a0<2;++a0){a1=F.aC2[a0]
s=new B.ao(A.O,A.M,A.R,A.T,A.P)
s.r=A.as.gp(0)
b9.N(new B.o(a1,10),7.5,s)
J.bo(b8.save())
b8.translate(a1,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.ao(A.O,A.M,A.R,A.T,A.P)
q.r=A.bP.gp(0)
q.c=1.6
b9.ah(A.H,new B.o(r*5.5,s*5.5),q)}b8.restore()}b8.restore()
if(b7)for(b8=c1*40,u=0;u<3;++u){s=A.j.F(b8+u*8,14)
r=-4+u*5
q=new B.ao(A.O,A.M,A.R,A.T,A.P)
q.r=A.aD.gp(0)
q.c=1.6
b9.ah(new B.o(-34-s,r),new B.o(-42-s,r),q)}return!0
case"kettle":b8=$.Q().r
s=x.v
l=new B.aF(b8,A.ai,b6,b6,B.a([],s))
l.D(new B.aZ(-18,20))
l.D(new B.aq(-14,-12))
l.D(new B.c5(0,-20,14,-12))
l.D(new B.aq(18,20))
l.D(new B.bu())
r=B.K()
r.sav(D.c6z.aK(0,D.f5P))
b9.af(l,r)
r=new B.aF(b8,A.ai,b6,b6,B.a([],s))
r.D(new B.aZ(14,-10))
r.D(new B.aq(30,-22))
r.D(new B.aq(32,-18))
r.D(new B.aq(16,-4))
r.D(new B.bu())
q=B.K()
q.r=A.e7.gp(0)
b9.af(r,q)
s=new B.aF(b8,A.ai,b6,b6,B.a([],s))
s.D(new B.aZ(-14,-8))
s.D(new B.c5(-34,-6,-18,12))
b8=B.K()
b8.b=A.a9
b8.c=5
b8.r=A.as.gp(0)
b9.af(s,b8)
b8=B.K()
if(b7){s=B.ar(A.cF,A.uc,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.ee
b8.r=s.gp(0)
b9.ar(D.f5O,b8)
if(b7){b8=B.K()
b8.r=A.cF.j(0.3).gp(0)
b8.y=A.me
b9.N(A.aL4,24,b8)
for(b8=c1*0.9,u=0;u<4;++u){a6=A.j.F(b8+u*0.25,1)
s=Math.sin(a6*9+u)
r=new B.ao(A.O,A.M,A.R,A.T,A.P)
r.r=A.c.j(0.6*(1-a6)).gp(0)
b9.N(new B.o(30+s*4,-26-a6*26),3+a6*5,r)}}b8=B.K()
b8.r=A.as.gp(0)
b9.N(D.eku,3,b8)
return!0
case"lamp":if(b7){u=A.j.E(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aF($.Q().r,A.ai,b6,b6,B.a([],x.v))
b8.D(new B.aZ(-10,-14))
b8.D(new B.aq(-30,24))
b8.D(new B.aq(10,24))
b8.D(new B.aq(8,-14))
b8.D(new B.bu())
s=B.K()
s.r=A.dy.j(0.28*u).gp(0)
b9.af(b8,s)
s=B.K()
s.r=A.dy.j(0.5*u).gp(0)
s.y=U.Oj
b9.N(D.eoz,24,s)}b8=B.bl(D.f6t,A.hO)
s=$.Q()
r=B.K()
r.r=A.ee.gp(0)
b9.am(b8,r)
r=B.K()
r.r=A.df.gp(0)
r.c=3
r.d=A.bw
b9.ah(D.ekK,D.aLh,r)
r=B.K()
r.r=A.df.gp(0)
r.c=3
r.d=A.bw
b9.ah(D.aLh,D.eoA,r)
a7=new B.aF(s.r,A.ai,b6,b6,B.a([],x.v))
a7.D(new B.aZ(-14,-16))
a7.D(new B.aq(6,-26))
a7.D(new B.aq(10,-12))
a7.D(new B.aq(-10,-6))
a7.D(new B.bu())
s=B.K()
s.r=(b7?A.aU:A.kp).gp(0)
b9.af(a7,s)
b8=B.K()
b8.r=(b7?A.c:A.bq).gp(0)
b9.N(D.eoD,4,b8)
return!0
case"lights":b8=$.Q().r
s=x.v
a8=new B.aF(b8,A.ai,b6,b6,B.a([],s))
a8.D(new B.aZ(-34,-6))
a8.D(new B.c5(0,22,34,-6))
r=B.K()
r.b=A.a9
r.c=2
r.r=A.hm.gp(0)
b9.af(a8,r)
for(r=c1*2.4,u=0;u<5;++u){a9=(u+0.5)/5
q=-34+68*a9
p=-6+4*a9*(1-a9)*4*4.2/1*0.75+0
b0=b7&&A.j.F(r+u*0.7,1.8)<1.1
if(b0){b1=new B.ao(A.O,A.M,A.R,A.T,A.P)
b1.r=D.a4Y[u].j(0.6).gp(0)
b1.y=A.H3
b9.N(new B.o(q+0,p+6),12,b1)}b1=B.a([],s)
b2=new B.aF(b8,A.ai,b6,b6,b1)
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
q=new B.c5(q,p+17,q-5,b3)
b1.push(q)
p=b2.f
if(p!=null)q.ak(p)
b2.ab()
q=new B.bu()
b1.push(q)
p=b2.f
if(p!=null)q.ak(p)
b2.ab()
q=new B.ao(A.O,A.M,A.R,A.T,A.P)
if(b0)p=D.a4Y[u]
else{p=B.ar(D.a4Y[u],A.w,0.65)
p.toString}q.r=p.gp(0)
b9.af(b2,q)}return!0}return C.iq1(b9,c0,c1,c2)},
fQ:function fQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hdZ(d){var w=D.mr.h(0,d)
return(w==null?null:w.b)===D.At},
irg(d,e,f){return B.a6(d,!1).cd(B.vc(null,!1,!0,!0,new C.fZO(e,f),A.eQ,null,A.pg,new C.fZP(),x.H))},
Ka:function Ka(d,e){this.a=d
this.b=e},
ms:function ms(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fZO:function fZO(d,e){this.a=d
this.b=e},
fZP:function fZP(){},
VU:function VU(d,e,f){this.c=d
this.d=e
this.a=f},
bly:function bly(d,e){var _=this
_.d=$
_.e=null
_.by$=d
_.a9$=e
_.c=_.a=null},
dXd:function dXd(d){this.a=d},
dXc:function dXc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dXa:function dXa(){},
dXb:function dXb(d){this.a=d},
dX9:function dX9(d){this.a=d},
dX8:function dX8(d,e){this.a=d
this.b=e},
dX7:function dX7(d,e){this.a=d
this.b=e},
dX6:function dX6(d){this.a=d},
dX5:function dX5(d){this.a=d},
dX1:function dX1(d){this.a=d},
dX0:function dX0(d){this.a=d},
dX4:function dX4(d,e,f){this.a=d
this.b=e
this.c=f},
dX3:function dX3(d){this.a=d},
dX2:function dX2(d){this.a=d},
bxw:function bxw(d,e,f){this.b=d
this.c=e
this.a=f},
afA:function afA(d,e,f){this.b=d
this.c=e
this.a=f},
aN8:function aN8(){},
a1Y(d,e,f,g,h,i){return new C.bwi(d,e,f,g,h,i)},
bwi:function bwi(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
frZ:function frZ(){},
fs_:function fs_(){},
fs0:function fs0(){},
fs1:function fs1(){},
fs2:function fs2(){},
fs3:function fs3(){},
fs4:function fs4(){},
fs5:function fs5(){},
a9f:function a9f(d){this.a=d},
cm4:function cm4(d){this.a=d},
cm5:function cm5(){},
cm3:function cm3(d,e){this.a=d
this.b=e},
cm2:function cm2(d){this.a=d},
Xu:function Xu(d){this.a=d},
aGm:function aGm(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.h5$=f
_.m5$=g
_.f9$=h
_.h6$=i
_.by$=j
_.a9$=k
_.c=_.a=null},
eTw:function eTw(d){this.a=d},
eTs:function eTs(d){this.a=d},
eTr:function eTr(d,e){this.a=d
this.b=e},
eTu:function eTu(d,e){this.a=d
this.b=e},
eTt:function eTt(d,e){this.a=d
this.b=e},
eTv:function eTv(d){this.a=d},
bxI:function bxI(d,e,f){this.b=d
this.c=e
this.a=f},
Wi:function Wi(d){this.a=d},
blJ:function blJ(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.h5$=d
_.m5$=e
_.f9$=f
_.h6$=g
_.by$=h
_.a9$=i
_.c=_.a=null},
e32:function e32(){},
e33:function e33(){},
e2Y:function e2Y(d,e){this.a=d
this.b=e},
e3_:function e3_(d,e){this.a=d
this.b=e},
e30:function e30(d){this.a=d},
e2Z:function e2Z(d){this.a=d},
e31:function e31(d){this.a=d},
bsp:function bsp(d,e,f){this.b=d
this.c=e
this.a=f},
Vv:function Vv(d){this.a=d},
blk:function blk(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.h5$=d
_.m5$=e
_.f9$=f
_.h6$=g
_.by$=h
_.a9$=i
_.c=_.a=null},
dOK:function dOK(){},
dOL:function dOL(){},
dOF:function dOF(){},
dOI:function dOI(d,e){this.a=d
this.b=e},
dOH:function dOH(d,e){this.a=d
this.b=e},
dOJ:function dOJ(d){this.a=d},
dOG:function dOG(d){this.a=d},
aJM:function aJM(d,e,f){this.a=d
this.b=e
this.c=f},
W9:function W9(d){this.a=d},
blA:function blA(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
e_y:function e_y(d,e){this.a=d
this.b=e},
e_z:function e_z(d){this.a=d},
e_x:function e_x(d,e){this.a=d
this.b=e},
e_A:function e_A(d){this.a=d},
e_w:function e_w(d,e){this.a=d
this.b=e},
e_B:function e_B(d){this.a=d},
e_v:function e_v(d,e){this.a=d
this.b=e},
e_C:function e_C(d,e){this.a=d
this.b=e},
e_u:function e_u(d,e){this.a=d
this.b=e},
e_D:function e_D(d){this.a=d},
e_t:function e_t(d,e){this.a=d
this.b=e},
e_E:function e_E(d){this.a=d},
e_s:function e_s(d){this.a=d},
e_F:function e_F(d){this.a=d},
e_r:function e_r(d){this.a=d},
e_G:function e_G(d){this.a=d},
e_H:function e_H(d){this.a=d},
e_q:function e_q(d){this.a=d},
bnC:function bnC(d,e,f){this.b=d
this.c=e
this.a=f},
WS:function WS(d){this.a=d},
aFG:function aFG(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
eqm:function eqm(d,e){this.a=d
this.b=e},
eqn:function eqn(d,e,f){this.a=d
this.b=e
this.c=f},
eql:function eql(d,e,f){this.a=d
this.b=e
this.c=f},
eqo:function eqo(d){this.a=d},
eqk:function eqk(d){this.a=d},
eqs:function eqs(d){this.a=d},
eqr:function eqr(d,e){this.a=d
this.b=e},
eqq:function eqq(d,e){this.a=d
this.b=e},
eqt:function eqt(d,e){this.a=d
this.b=e},
eqp:function eqp(d,e){this.a=d
this.b=e},
equ:function equ(d){this.a=d},
X1:function X1(d){this.a=d},
aG0:function aG0(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eB8:function eB8(d){this.a=d},
eB9:function eB9(d){this.a=d},
eB6:function eB6(d,e){this.a=d
this.b=e},
eB7:function eB7(d){this.a=d},
eB5:function eB5(d){this.a=d},
eBa:function eBa(d){this.a=d},
eBb:function eBb(d){this.a=d},
eBc:function eBc(d){this.a=d},
eBd:function eBd(d,e){this.a=d
this.b=e},
Xl:function Xl(d){this.a=d},
bmQ:function bmQ(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eP_:function eP_(){},
eP8:function eP8(){},
eP4:function eP4(d){this.a=d},
eP3:function eP3(){},
eP5:function eP5(d,e){this.a=d
this.b=e},
eP2:function eP2(d,e){this.a=d
this.b=e},
eP6:function eP6(d){this.a=d},
eP1:function eP1(d,e){this.a=d
this.b=e},
eP7:function eP7(d){this.a=d},
eP0:function eP0(d){this.a=d},
WR:function WR(d){this.a=d},
bmk:function bmk(d,e,f,g,h,i,j,k){var _=this
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
_.m5$=g
_.f9$=h
_.h6$=i
_.by$=j
_.a9$=k
_.c=_.a=null},
ep1:function ep1(){},
ep2:function ep2(){},
eoV:function eoV(d){this.a=d},
eoU:function eoU(d){this.a=d},
eoW:function eoW(d){this.a=d},
eoT:function eoT(d){this.a=d},
eoX:function eoX(d){this.a=d},
eoS:function eoS(d){this.a=d},
eoY:function eoY(d,e){this.a=d
this.b=e},
eoR:function eoR(d,e){this.a=d
this.b=e},
eoZ:function eoZ(d){this.a=d},
eoQ:function eoQ(d,e){this.a=d
this.b=e},
ep_:function ep_(d){this.a=d},
eoP:function eoP(d,e){this.a=d
this.b=e},
ep0:function ep0(d){this.a=d},
eoO:function eoO(d,e){this.a=d
this.b=e},
bfc:function bfc(d,e,f){this.c=d
this.d=e
this.a=f},
aMX:function aMX(){},
bzq:function bzq(){},
aNf:function aNf(){},
bzw:function bzw(){},
aNI:function aNI(){},
bzF:function bzF(){},
aO8:function aO8(){},
bzO:function bzO(){},
JH(d,e,f,g){var w,v,u,t,s,r,q,p=$.ath
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.J)(e),++w)E.mq(d,e[w],f,g)
return}for(p=B.cW(e,0,B.dA(4,"count",x.S),B.U(e).c),v=p.$ti,p=new B.bO(p,p.gI(0),v.k("bO<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)E.mq(d,s,f,g)
else B.bQ(new B.bd(1000*q),new C.cm0(d,s,f,g),u)}},
cjz(d){return C.hVR(d)},
hVR(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$cjz=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$cjz)
case 7:r=f
q=B.aT(J.t(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.T(x.N,x.z)
w=1
break}p=A.Y.aQ(0,q,null)
o=x.N
n=x.z
o=x.f.b(p)?B.a3(p,o,n):B.T(o,n)
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
return B.i($async$cjz,v)},
b2T(d,e){return C.hVS(d,e)},
hVS(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b2T=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b2T)
case 6:s=g
w=7
return B.b(s.aB("String","ngmy_play_progress_v1_"+d,A.Y.az(e,null)),$async$b2T)
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
return B.i($async$b2T,v)},
cm0:function cm0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
igm(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.T(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.x)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.J)(w),++q){p=w[q]
u.push(B.H(["k",p.b,"x",B.on(A.j.ad(p.c,4)),"y",B.on(A.j.ad(p.d,4)),"v",p.e,"l",B.on(A.j.ad(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.on(A.j.ad(p.as,3)),"ch",p.at,"vc",B.on(A.j.ad(p.z,3)),"s",B.on(A.j.ad(p.ch,2))],s,r))}w=B.a([],x.U)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.J)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.C(f,B.a4(f).k("ch.E"))
A.d.fi(l)
return A.Y.az(B.H(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
iqs(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.Y.aQ(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a8(h)
A.d.a8(a6.b)
v=B.a([],x.fs)
g=x.L
f=g.a(J.t(w,"parts"))
f=J.aU(f==null?A.cq:f)
while(f.C()){u=f.gR(f)
t=i.a(u)
e=B.aT(J.t(t,"k"))
s=e==null?"":e
if(!$.qB().al(0,s)){J.c6(v,null)
continue}d=s
a0=B.aI(J.t(t,"x"))
if(a0==null)a0=0.5
a1=B.aI(J.t(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.tX(a2,d,a0,a1)
a3.arX(a2,d,a0,a1)
h.push(a3)
r=a3
a1=B.aI(J.t(t,"v"))
d=a1==null?r.e:a1
r.e=d
d=B.aI(J.t(t,"l"))
if(d==null)d=r.f
r.f=d
d=B.aI(J.t(t,"o"))
if(d==null)d=r.r
r.r=d
d=B.k2(J.t(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.k2(J.t(t,"b"))
r.x=d===!0
d=B.aT(J.t(t,"bw"))
if(d==null)d=""
r.ay=d
d=B.aI(J.t(t,"c"))
if(d==null)d=r.as
r.as=d
d=B.aI(J.t(t,"ch"))
r.at=A.j.M(d==null?0:d)
d=B.aI(J.t(t,"vc"))
if(d==null)d=0
r.z=d
d=B.aI(J.t(t,"s"))
r.ch=A.j.E(d==null?1:d,1,5.2)
J.c6(v,r)}i=g.a(J.t(w,"wires"))
i=J.aU(i==null?A.cq:i)
h=x.j
while(i.C()){q=i.gR(i)
p=h.a(q)
f=B.aI(J.t(p,0))
o=f==null?a5:A.j.M(f)
f=B.aI(J.t(p,2))
n=f==null?a5:A.j.M(f)
if(o==null||n==null||o<0||n<0||o>=J.ad(v)||n>=J.ad(v))continue
m=J.t(v,o)
l=J.t(v,n)
if(m!=null&&l!=null)a6.alV(m,A.j.M(B.dC(J.t(p,1))),l,A.j.M(B.dC(J.t(p,3))))}i=B.aI(J.t(w,"challenge"))
i=A.j.M(i==null?0:i)
k=B.aR(x.S)
h=g.a(J.t(w,"done"))
h=J.aU(h==null?A.cq:h)
while(h.C()){j=h.gR(h)
J.c6(k,A.j.M(B.dC(j)))}return new B.bqz(i,k)}catch(a4){return a5}},
fIJ(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fIJ=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.az(),$async$fIJ)
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
return B.i($async$fIJ,v)},
bG6(d){return C.is3(d)},
is3(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bG6=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.az(),$async$bG6)
case 7:w=6
return B.b(f.aB("String","ngmy_electronics_lab_v1",d),$async$bG6)
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
return B.i($async$bG6,v)}},D,H,X,Al,Y,A2,Am
J=c[1]
B=c[0]
A=c[2]
A3=c[118]
Z=c[159]
A4=c[157]
A5=c[150]
A_=c[148]
R=c[142]
A6=c[135]
A7=c[152]
A8=c[161]
A9=c[106]
Aa=c[137]
A0=c[117]
N=c[144]
Ab=c[160]
Ac=c[151]
Ad=c[155]
Ae=c[75]
T=c[84]
Af=c[87]
P=c[129]
Ag=c[133]
U=c[140]
V=c[143]
W=c[154]
E=c[29]
K=c[3]
G=c[38]
I=c[108]
A1=c[102]
O=c[153]
Ah=c[101]
Ai=c[156]
S=c[130]
Aj=c[158]
Q=c[146]
Ak=c[26]
L=c[28]
F=c[99]
M=c[97]
C=a.updateHolder(c[18],C)
D=c[139]
H=c[141]
X=c[147]
Al=c[57]
Y=c[110]
A2=c[149]
Am=c[145]
C.akY.prototype={}
C.WB.prototype={
S(){return new C.bm8(B.T(x.N,x.i),new B.au(A.av,$.aw()),B.a([],x.X),B.a([],x.F),B.mW(0,null,null))}}
C.bm8.prototype={
gWZ(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
t(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
this.ch.t()
this.a2()},
PK(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$PK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
p=t.f
o=A.a.i(p.a.a)
if(q==null||o.length===0||t.ax||t.x){w=1
break}s=$.aW.ap$.d.c
if(s!=null)s.jr()
p.bP(0,A.cd)
t.m(new C.ei9(t))
t.a.toString
p=t.gWZ()
w=3
return B.b(C.bBH(C.i3Q(q,C.ig7(p),o,t.ay)),$async$PK)
case 3:s=e
r=s==null?null:J.j7(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=C.ihE(q,p,o)
if(t.c==null){w=1
break}t.m(new C.eia(t,o,r))
$.aW.x1$.push(new C.eib(t))
case 1:return B.h(u,v)}})
return B.i($async$PK,v)},
Z2(d){return this.c2T(d)},
aYi(){return this.Z2(null)},
c2T(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Z2=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aW.ap$.d.c
if(s!=null)s.jr()
t.f.sb1(0,o)
t.m(new C.eim(t))
G.dE(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bBH(C.ibb(o)),$async$Z2)
case 3:r=n.a=m.iq7(f)
p.b=""
if(r!=null&&!C.ig8(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.ihF(o)
q=B.ag(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.akY(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new C.ein(p,t))
t.c8t(p.a)
case 1:return B.h(u,v)}})
return B.i($async$Z2,v)},
c8t(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
A.d.a8(w)
w=++m.as
v=m.gWZ()
A.d.a8(v.a)
A.d.a8(v.b)
m.e.a8(0)
m.m(new C.eii(m))
t=d.d
s=B.T(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.eig(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.eij(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.J)(r),++u){p.$2(o,new C.eik(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.eil(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.br.j(0.1),g=B.m(16),f=B.L(A.br.j(0.35),A.r,1)
if(m.x)j=B.A(B.a([D.fe4,A.bd,B.E(B.d(m.Q,l,l,l,l,l,l,A.AF,l,l,l),1)],x.p),A.m,l,A.e,A.i,0,l,l)
else if(k==null)j=D.fER
else{w=B.E(B.d(k.a,l,l,l,l,l,l,A.VF,l,l,l),1)
v=x.p
w=B.a([B.A(B.a([w,B.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.fp9,l,l,l)],v),A.m,l,A.e,A.i,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.D(A.uq,B.d(u,l,l,l,l,l,l,D.frX,l,l,l),l))
w.push(A.cU)
w.push(B.d(k.b,l,l,l,l,l,l,I.EI,l,l,l))
u=k.e
if(u.length!==0){t=A.aU.j(0.12)
s=B.m(10)
w.push(B.q(l,B.d(u,l,l,l,l,l,l,D.fut,l,l,l),A.f,l,l,new B.p(t,l,l,s,l,l,A.n),l,l,l,A.ib,A.cl,l,l,l))}w.push(A.an)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
t=B.d(t,l,l,l,l,l,l,A.lU,l,l,l)
q=u[r]
s=s?A.c:A.aD
w.push(new B.D(A.NM,new B.c7(A.aL,A.e,A.i,A.E,l,A.p,l,0,B.a([t,A.bm,new B.bz(1,A.bc,B.d(q,l,l,l,l,l,l,new B.G(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.J)(j),++p){o=j[p]
t=A.br.j(0.3)
s=new B.aO(12,12)
s=B.q(l,B.d(o.a,l,l,l,l,l,l,A.Vm,l,l,l),A.f,l,l,new B.p(t,l,l,new B.bf(s,s,s,s),l,l,A.n),l,l,l,l,A.ha,l,l,l)
t=A.c.j(0.07)
q=new B.aO(12,12)
A.d.v(w,B.a([A.U,new B.bL(A.aa,l,l,s,l),A.ax,B.q(l,B.d(o.b,l,l,l,l,l,l,D.fA6,l,l,l),A.f,l,l,new B.p(t,l,l,new B.bf(q,q,q,q),l,l,A.n),l,l,l,l,A.bU,l,l,l)],v))}if(m.ax)w.push(D.eq7)
j=B.cg(B.x(w,A.E,l,A.e,A.i,0,A.p),A.t,m.ch,A.y,l,l,l,l,A.ah)}w=x.p
g=B.x(B.a([B.ajc(B.q(l,j,A.f,l,new B.aY(0,1/0,0,i),new B.p(h,l,f,g,l,l,A.n),l,l,l,D.bB5,A.eD,l,l,1/0),A.b4,A.iI),B.E(C.hiO(m.gWZ(),l,l,m.e),1)],w),A.m,l,A.e,A.i,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new E.dW("Ask about it",i,new C.eiq(m),l,A.br,l),new E.dW("Invent something new",!i,new C.eir(m),l,A.br,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dsL[p]
i.push(new E.dW(n,!1,new C.eis(m,n),l,A.br,l))}f.push(new E.fb(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.daJ[p]
i.push(new E.dW(r,!1,new C.eit(m,r),l,A.br,l))}f.push(new E.fb(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aM(l,A.Z,!1,l,!0,A.t,l,B.aN(),m.f,l,l,l,l,l,2,B.bt(l,new B.b6(4,B.m(16),A.a1),l,A.eW,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kE,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.eiu(m,k),l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,A.di,!0,A.a5,l,A.ao,l,A.Va,l,l),1)
h=m.at
v=h&&j?D.bQY:A.ea
j=h&&j?"Ask":"Invent"
f.push(B.A(B.a([i,A.ae,new E.fB(v,j,new C.eiv(m,k),A.br,l)],w),A.m,l,A.e,A.i,0,l,l))
return E.lA(A.br,A.f5,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.x(f,A.m,l,A.e,A.Q,0,A.p))}}
C.GS.prototype={}
C.vj.prototype={}
C.WY.prototype={
S(){return new C.aFV(A.H,A.H,A.az,B.aR(x.S),$,A.bD,0,B.a([],x.X),null,null)}}
C.aFV.prototype={
gaZB(){var w,v,u,t=this,s=D.Ip[t.cx],r=D.Sw[t.cy],q=D.Dn[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.dY(w,w.r,B.a4(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.aAi[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cJ(p,0,new C.exs())},
ga3p(){return D.Ip[this.cx].d/this.gaZB()},
gaQA(){return 0.1*(D.Ip[this.cx].d/0.9)/D.Sw[this.cy].d},
Y(){this.a3()
this.me()
C.cjz("rocket_lander").bG(new C.exM(this),x.h)},
c8C(){var w=this
w.ay=A.j.E(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cN.ai()*0.6
w.f=new B.o(0.15+A.cN.ai()*0.7,0.08)
w.r=new B.o((A.cN.ai()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
mw(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new C.exN())
return}w=D.t4[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.j.E(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.o(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga3p()
v=v.a5(0,new B.o(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaQA())}if(m.dy){t=m.r
v=v.aJ(0,t.aO(0,t.gcI()*6*D.aCm[m.d]))}t=m.r=m.r.a5(0,v.aO(0,d))
s=m.f=m.f.a5(0,t.aO(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new B.o(-t.a*0.4,t.b)
t=new B.o(A.j.E(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new B.o(t.a,0.02)
if(t.b>=0.86){q=Math.abs(t.a-m.ax)<m.ay/2
t=m.r
s=t.b
r=m.db
p=D.Dn[r].d
o=!1
if(s<p)if(Math.abs(t.a)<0.08){t=m.w
n=r===2?0.5:0.3
n=Math.abs(t)<n
o=n}if(q&&o){m.as="landed"
t=m.d+1
s=m.e
if(t>s&&t<7)m.e=t
else t=s
C.b2T("rocket_lander",B.H(["unlocked",t],x.N,x.z))
C.JH("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga3p()/(D.t4[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.j.ad(m.ga3p()/(D.t4[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
G.dE(80,"",500,0,0.6,"noise")
B.fL()}}if(m.Q&&m.x>0&&A.o.F(A.j.bh(m.CW*20),2)===0)G.dE(90,"",70,0,0.12,"noise")
m.m(new C.exO())},
ah_(d,e,f,g,h){var w,v=null,u=B.d(d,v,v,v,v,v,v,D.frp,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new E.dW(e[w].a,f.$1(w),new C.exu(this,g,w),v,h,v))
return new B.D(A.eL,B.x(B.a([u,A.cU,B.bW(A.bH,s,A.bt,v,6,6)],t),A.E,v,A.e,A.i,0,A.p),v)},
bHK(d){var w,v,u,t,s=this,r=null,q=s.ga3p()/(D.t4[s.d].b/9.81*0.28)>=1,p=A.j.V(1/s.gaQA()),o=D.aCm[s.d],n=B.m(24),m=d.c,l=B.L(m.j(0.6),A.r,1)
m=B.a([B.d("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.ax,B.d(d.d+" Gravity here: "+B.w(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.ab0,r,r,r),A.X,s.ah_("ENGINE: "+D.Ip[s.cx].b,D.Ip,new C.exj(s),new C.exk(s),A.cF),s.ah_("FUEL TANK: "+D.Sw[s.cy].b,D.Sw,new C.exl(s),new C.exm(s),A.b5),s.ah_("LANDING GEAR: "+D.Dn[s.db].b,D.Dn,new C.exn(s),new C.exo(s),A.aI),s.ah_("EXTRAS (tap to add)",D.aAi,new C.exp(s),new C.exq(s),A.br)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.fXG)
o=(q?A.b5:A.c0).j(0.14)
w=B.m(12)
v=A.j.ad(s.gaZB(),2)
u=A.j.ad(s.ga3p()/(D.t4[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.q(r,B.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.j.V(D.Dn[s.db].d*100)+".",r,r,r,r,r,r,D.fs4,r,r,r),A.f,r,r,new B.p(o,r,r,w,r,r,A.n),r,r,r,A.ib,A.bU,r,r,r))
m.push(A.X)
m.push(new B.bL(A.A,r,r,new E.fB(A.oB,"Launch",new C.exr(s),A.b5,r),r))
return B.at(B.q(r,B.cg(B.x(m,A.E,r,A.e,A.Q,0,A.p),A.t,r,A.y,r,A.bR,r,r,A.ah),A.f,r,A.lZ,new B.p(D.bqW,r,l,n,r,r,A.n),r,r,r,A.bU,r,r,r,r),r,r,r)},
b_N(d,e,f,g){var w=null,v=f?A.cF:A.c.j(0.1),u=B.m(18),t=B.L(A.aV,A.r,1)
return B.mL(A.iL,B.q(w,B.X(d,A.c,w,w,w,30),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new C.exg(e),new C.exh(e),w,w,w,w,new C.exi(e))},
b_M(d,e,f){return this.b_N(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cs(new C.exF(s,D.t4[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.t4[w].a:"\ud83d\udd12"
o.push(new E.dW(v,s.d===w,new C.exG(s,w),r,D.t4[w].c,r))}v=B.a([s.b_M(F.aq0,new C.exH(s),s.y),A.bd,s.b_N(A.wA,new C.exI(s),s.Q,130),A.bd,s.b_M(A.Py,new C.exJ(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?A.aI:A.c.j(0.1)
t=B.m(18)
A.d.v(v,B.a([A.bd,B.aA(r,B.q(r,D.bVa,A.f,r,r,new B.p(u,r,B.L(A.aV,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.exK(s),r,r,r,r,r,r,!1,A.a4)],p))}return E.lA(A.cF,A.f5,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.x(B.a([new E.fb(o,"WORLD",r),B.A(v,A.m,r,A.ba,A.i,0,r,r)],p),A.m,r,A.e,A.Q,0,A.p))}}
C.bj5.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=this.b,l=D.t4[m.d],k=a1.a,j=a1.b,i=0+k,h=0+j,g=$.Q(),f=B.K(),e=l.c,d=B.ar(K.ZP,e,0.25)
d.toString
f.sav(new B.a9(A.b7,A.b9,A.x,B.a([F.agX,d],x.O),n,n).aK(0,new B.a1(0,0,i,h)))
a0.ar(new B.a1(0,0,i,h),f)
w=new B.e4()
w.d_(5)
for(v=0;v<70;++v){i=w.ai()
h=w.ai()
f=w.ai()
d=new B.ao(A.O,A.M,A.R,A.T,A.P)
d.r=A.c.j(0.2+w.ai()*0.5).gp(0)
a0.N(new B.o(i*k,h*j*0.8),f*1.2+0.3,d)}u=j*0.88
i=x.v
h=B.a([],i)
t=new B.aF(g.r,A.ai,n,n,h)
t.D(new B.aZ(0,u+14))
s=new B.e4()
s.d_(2)
for(r=0;r<=k;r+=18){g=new B.aq(r,u+(Math.abs(r/k-m.ax)<m.ay/2+0.02?14:14-s.ai()*18))
h.push(g)
f=t.f
if(f!=null)g.ak(f)
t.ab()}t.D(new B.aq(k,j))
t.D(new B.aq(0,j))
t.D(new B.bu())
h=$.Q()
g=B.K()
g.r=B.ar(e,A.w,0.6).gp(0)
a0.af(t,g)
q=B.bs(new B.o(m.ax*k,u+10),8,m.ay*k)
g=B.bl(q,A.iw)
e=B.K()
e.r=A.bg.gp(0)
a0.am(g,e)
e=B.bl(q.cn(2),A.mu)
g=B.K()
g.b=A.a9
g.c=2
g.r=A.c.j(0.5+0.3*Math.sin(m.CW*4)).gp(0)
a0.am(e,g)
if(m.as==="ready")return
g=m.f
f=a0.c
J.bo(f.save())
f.translate(g.a*k,g.b*j)
a0.hW(0,m.w)
k=m.as
if(k==="crashed"){m=B.K()
m.r=A.cF.j(0.6).gp(0)
m.y=U.Oj
a0.N(A.H,34,m)
f.restore()
return}if(m.Q&&m.x>0&&k==="flying"){k=h.r
p=new B.aF(k,A.ai,n,n,B.a([],i))
p.D(new B.aZ(-8,18))
p.D(new B.aq(0,44+Math.sin(m.CW*40)*8))
p.D(new B.aq(8,18))
p.D(new B.bu())
m=B.K()
m.r=A.aU.gp(0)
a0.af(p,m)
k=new B.aF(k,A.ai,n,n,B.a([],i))
k.D(new B.aZ(-4,18))
k.D(new B.aq(0,32))
k.D(new B.aq(4,18))
k.D(new B.bu())
m=B.K()
m.r=A.c.gp(0)
a0.af(k,m)}m=h.r
o=new B.aF(m,A.ai,n,n,B.a([],i))
o.D(new B.aZ(0,-26))
o.D(new B.c5(14,-10,11,18))
o.D(new B.aq(-11,18))
o.D(new B.c5(-14,-10,0,-26))
o.D(new B.bu())
k=B.K()
k.sav(D.c72.aK(0,D.f5C))
a0.af(o,k)
k=B.K()
k.r=A.aI.gp(0)
a0.N(H.vl,5,k)
k=new B.aF(m,A.ai,n,n,B.a([],i))
k.D(new B.aZ(-11,6))
k.D(new B.aq(-20,20))
k.D(new B.aq(-11,18))
k.D(new B.bu())
j=B.K()
j.r=A.ay.gp(0)
a0.af(k,j)
i=new B.aF(m,A.ai,n,n,B.a([],i))
i.D(new B.aZ(11,6))
i.D(new B.aq(20,20))
i.D(new B.aq(11,18))
i.D(new B.bu())
m=B.K()
m.r=A.ay.gp(0)
a0.af(i,m)
f.restore()},
aE(d){return!0}}
C.aNQ.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bzH.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.bzF()}}
C.aTW.prototype={}
C.a4f.prototype={}
C.bc1.prototype={}
C.Vu.prototype={
S(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.ez(["skin"],x.N),o=new Float32Array(0)
return new C.aEo(w,v,u,t,s,r,q,new B.cw(null,x.A),p,D.LH,D.LH,A.az,A.cN,o,new Int32Array(0),$,A.bD,0,B.a([],x.X),null,null)}}
C.aEo.prototype={
Y(){var w=this
w.a3()
w.me()
w.as=new C.c67(w.gchu())
new C.dOD(w).$0()
return},
t(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a1(0)
v.d=null}this.byJ()},
chv(d){var w,v=this
if(v.c==null)return
w=J.a7(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.f8(0,B.H(["t","init","data",$.hsT],x.N,x.z))
v.at=!0
v.ax=""
v.aAI()
break
case"pick":v.m(new C.dOf(v,d))
break
case"shot":v.aiU(B.w(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+B.w(w.h(d,"text")))
break}},
aAI(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.aya[q.CW]
v=new C.dOg()
u=q.ay
u=B.C(u,B.a4(u).k("ch.E"))
A.d.fi(u)
t=x.N
s=B.H(["layers",u,"skinMode",q.ch,"tone","#"+B.w(v.$1(w.b))+B.w(v.$1(w.c))+B.w(v.$1(w.d)),"sel",q.cx,"bpm",A.j.V(q.k3),"spin",q.fy],t,x.cK)
r=A.Y.az(s,null)
if(r===q.ax)return
q.ax=r
v=q.as
if(v!=null){u=B.T(t,x.z)
u.n(0,"t","state")
u.v(0,s)
v.f8(0,u)}},
aiU(d){return this.cyt(d)},
cyt(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aiU=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cI.aM(A.a.b2(d,A.a.co(d,",")+1))
w=6
return B.b(B.awI(B.a([B.cFX(r,"image/png","body.png")],x.fH),null,"Made in NGMY Core Protocol"),$async$aiU)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.L(x.gV).f.U(K.aTA)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aiU,v)},
aA6(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.q(0,w)},
mw(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.q(0,"organ")&&A.j.bh(w)!==A.j.bh(v.ok)){E.Xn("kick",0,0.4)
v.UE(170,new C.dOE())}v.ok=w
return},
aex(d){var w,v,u,t,s=this
s.m(new C.dOh(s,d))
if(d==null){s.fx=D.LH
s.dy=1
w=s.as
if(w!=null)w.f8(0,B.H(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.U(w).k("Y<1>")
u=B.C(new B.Y(w,new C.dOi(d),v),v.k("M.E"))
t=A.d.gH(u).b
if(t!=="skin"&&!s.ay.q(0,t)){s.ay.J(0,t)
if(s.ch===2)s.ch=1}s.aAI()
w=s.as
if(w!=null)w.f8(0,B.H(["t","focus","group",d],x.N,x.z))
s.go=0
s.cAX(t,d)
return},
cAX(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){E.Xn("kick",0,0.8)
this.UE(260,new C.dOj())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")G.dE(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.UE(w*70,new C.dOk(this))
else if(A.a.q(e,"intestine")||e==="Stomach")G.dE(110,"",360,0.7,0.3,"saw")
else E.h8j("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":G.dE(210+e.length*4,"",80,0.6,0.55,"tri")
G.dE(2400,"",20,0,0.3,v)
break
case"muscle":G.dE(70,"",150,1,0.6,"sine")
break
case"vessel":G.dE(300,"",380,0.4,0.22,v)
E.Xn("kick",0,0.3)
break
default:E.h8j("organic",2+A.o.F(e.length,6),200,0.4)}},
cFB(d){this.m(new C.dOm(this,d))},
b04(){var w,v,u,t,s,r,q,p=this,o=B.aR(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
if(p.aA6(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.J(0,s.a)}q=B.C(o,o.$ti.k("ch.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.aw(w)]
p.p4=""},
bZy(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new C.dOc(u,w,d))
v=x.t
C.JH("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.UE(1100,new C.dOd(u))
return}if(d==null){if(u.cx!=null)u.aex(null)
return}u.aex(d)},
c2a(d,e){var w,v=this,u=null,t=B.m(18),s=B.L(A.bV.j(0.5),A.r,1)
if(v.p1){w=v.p2
w=B.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.fnv,u,u,u)}else if(d==null||e==null)w=D.fCf
else{w=x.p
w=B.A(B.a([B.E(B.x(B.a([B.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hi,u,u,u),A.cU,B.d(e.b,u,u,u,u,u,u,I.EI,u,u,u)],w),A.E,u,A.e,A.Q,0,A.p),1),B.aG(u,u,u,u,D.bXH,u,u,u,new C.dOe(v),u,u,u,u,"Back to the whole body",A.ce)],w),A.E,u,A.e,A.i,0,u,u)}return B.q(u,w,A.f,u,u,new B.p(K.Yb,u,s,t,u,u,A.n),u,u,u,u,R.alt,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.dDR.h(0,g)
i.aAI()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.dl1
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,B.J)(v),++s){r=v[s]
if(i.aA6(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.q(w,q))w.push(q)}v=x.p
u=B.a([B.aG(h,h,h,h,K.oE,h,h,h,new C.dOt(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bM:B.BW(h,A.pH,q)}else q=A.kC
q=B.x(B.a([B.E(q,1),new B.D(F.a_T,i.c2a(g,f),h)],v),A.m,h,A.e,A.i,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){o=D.dck[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.q(0,n)
p.push(new E.dW(l,n,new C.dOu(i,o),o.c,A.bV,h))}p=B.a([new E.fb(p,h,h)],v)
if(!i.p1&&w.length!==0){n=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.J)(w),++s){k=w[s]
n.push(new E.dW(k,k===i.cx,new C.dOv(i,k),h,A.aU,h))}p.push(new E.fb(n,"FIND",h))}if(t.q(0,"organ")){n=i.k3
p.push(E.iP(A.c0,""+A.j.V(n)+" beats/min","Heart rate",180,40,new C.dOw(i),n))}if(i.ch>0&&t.a===0){n=B.a([],v)
for(j=0;j<5;++j)n.push(new E.G0(D.aya[j],i.CW===j,new C.dOx(i,j),!1,h))
p.push(new E.fb(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=B.a([new E.dW("Spin",n,new C.dOy(i),D.aoT,A.aI,h),new E.fB(A.ow,"Reset view",new C.dOz(i),A.c,h),new E.dW(l,m,new C.dOA(i),A.HJ,A.aU,h)],v)
if(t.q(0,"organ"))v.push(new E.dW("Heartbeat sound",i.k4,new C.dOB(i),A.oA,A.c0,h))
p.push(new E.fb(v,h,h))
return E.lA(A.bV,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.x(p,A.m,h,A.e,A.Q,0,A.p))}}
C.aMV.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bC()}}
C.aMW.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.byI()}}
C.c67.prototype={
kW(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aL(e,"</script","<\\/script")
v=$.hz5
$.hz5=v+1
u="ngmy-body-viewer-"+v
$.xo()
$.pT().pb(u,new C.c68(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fy(v,"message",new C.c69(t),!1,x.gA)
t.b=u},
f8(d,e){var w,v
try{w=this.c
if(w!=null){w=B.Rm(w.contentWindow)
if(w!=null)J.aj2(w,e,"*")}}catch(v){}}}
C.yE.prototype={}
C.CZ.prototype={}
C.nH.prototype={}
C.bcN.prototype={}
C.Vz.prototype={
S(){var w=x.N,v=x.y,u=x.S
return new C.aEq(B.T(w,x.a2),B.a([],x.cB),B.T(w,v),B.T(w,v),B.T(w,u),A.az,A.H,A.H,B.aR(u),$,A.bD,0,B.a([],x.X),null,null)}}
C.aEq.prototype={
Y(){var w=this
w.a3()
w.me()
w.adv()
$.aW.x1$.push(new C.dQi(w))},
adv(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$adv=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$adv)
case 6:q=e.tQ("ngmy_circuit_passed_v1")
r=q==null?A.Z:q
if(s.c!=null)s.m(new C.dPX(s,r))
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
return B.i($async$adv,v)},
adR(d){return this.c67(d)},
c67(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$adR=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.J(0,d)
u=3
w=6
return B.b(B.az(),$async$adR)
case 6:r=f
q=s.cx
p=B.a4(q).k("k7<ch.E,n>")
q=B.C(new B.k7(q,new C.dQ_(),p),p.k("M.E"))
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
return B.i($async$adR,v)},
ayK(d,e,f,g){var w="c"+this.y++,v=new C.CZ(w,e,f,g)
this.d.n(0,w,v)
return v},
mM(d,e,f){return this.ayK(0,e,f,0)},
acQ(d,e){var w
if(D.A1.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a5(0,new B.o(-36,w))},
uf(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aUI(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.f9$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.dq(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.ed(m,D.cWh[A.o.F(q.d,4)])&1)===0
break
case"and":p=q.a
o=n.uf(p,0)&&n.uf(p,1)
break
case"or":p=q.a
o=n.uf(p,0)||n.uf(p,1)
break
case"xor":p=q.a
o=n.uf(p,0)!==n.uf(p,1)
break
case"nand":p=q.a
o=!(n.uf(p,0)&&n.uf(p,1))
break
case"nor":p=q.a
o=!(n.uf(p,0)||n.uf(p,1))
break
case"not":o=!n.uf(q.a,0)
break
default:o=n.uf(q.a,0)}q=q.a
if(v.h(0,q)!==o){v.n(0,q,o)
r=!0}}if(!r)break}},
bS3(){return this.aUI(null)},
mw(d){var w,v,u,t,s,r,q,p,o,n=this
n.bS3()
if(!n.ax)return
for(w=n.d,w=new B.b8(w,B.a4(w).k("b8<2>")).gae(0),v=new B.eB(w,new C.dQj()),u=n.f,t=n.w,s=0;v.C();){r=w.gR(0).a
if(u.h(0,r)===!0){q=n.f9$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.f9$)
o=s+1
G.dE(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
ayL(d){var w=this
w.d.a8(0)
A.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
mf(d,e){var w=this.x
return new B.o(d*w.a,e*w.b)},
auX(d){var w=this
if(w.x.A(0,A.az)){$.aW.x1$.push(new C.dPV(w,d))
return}w.m(new C.dPW(w,d))},
cBe(d){this.m(new C.dQ0(this,d,$.bGs()[d]))},
caU(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bGs()[a0]
v=d.d
u=B.a4(v).k("b8<2>")
t=u.k("Y<M.E>")
s=t.k("M.E")
r=B.C(new B.Y(new B.b8(v,u),new C.dPQ(),t),s)
A.d.aZ(r,new C.dPR())
q=B.C(new B.Y(new B.b8(v,u),new C.dPS(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new C.dPT(d,w))
return}u=d.r
p=B.dM(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dw(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.ha(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aUI(0)
h=m.h(0,A.d.gH(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.lz(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aN(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a8(0)
u.v(0,p)
d.m(new C.dPU(d,o,a0))},
azC(d){var w,v,u,t,s=this.d,r=B.a4(s).k("b8<2>")
s=B.C(new B.b8(s,r),r.k("M.E"))
r=B.U(s).k("ds<1>")
s=new B.ds(s,r)
s=new B.bO(s,s.gI(0),r.k("bO<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cjV(d){var w,v,u,t,s,r=this.d,q=B.a4(r).k("b8<2>")
r=B.C(new B.b8(r,q),q.k("M.E"))
q=B.U(r).k("ds<1>")
r=new B.ds(r,q)
r=new B.bO(r,r.gI(0),q.k("bO<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c23(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.A1.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.acQ(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.y(p,o)
s=l}}}return t},
bQO(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.acQ(p,o)
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
caW(d){var w,v,u,t=this,s=t.azC(d)
if(s!=null){w=t.d.h(0,s)
w.toString
B.eY()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.n(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
G.dE(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new C.dQ1())
return}u=t.bQO(d)
if(u!=null)t.m(new C.dQ2(t,u))
else t.m(new C.dQ3(t))},
axA(d){return this.c56(d)},
c56(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$axA=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.azC(d)
if(s==null){w=1
break}B.jV()
t.m(new C.dPZ(t,s))
case 1:return B.h(u,v)}})
return B.i($async$axA,v)},
bDy(d){if(this.x.A(0,A.az))return
this.m(new C.dPP(this,d,A.cN))
B.eY()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bGs()[g]
g=x.p
v=B.a([B.aG(h,h,h,h,B.X(i.ax?A.oA:V.t_,A.ab,h,h,h,21),h,h,h,new C.dQc(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.m(16)
s=A.cn.j(0.14)
r=B.L(A.cn.j(0.5),A.r,1)
q=B.a([B.d("Challenge: "+w.a,h,h,h,h,h,h,D.fmD,h,h,h),B.d(w.b,h,h,h,h,h,h,H.ab_,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.D(A.lf,B.d(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.b5:A.eS,h,h,h,h,h,h,h,h,12,h,h,A.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.q(h,B.A(B.a([B.E(B.x(q,A.E,h,A.e,A.i,0,A.p),1),B.bI(D.fNM,h,i.gcaT(),B.bp(A.cn,h,h,h,h,h,h,h,h,h,h,A.ce))],g),A.m,h,A.e,A.i,0,h,h),A.f,h,h,new B.p(s,h,r,t,h,h,A.n),h,h,h,T.NU,D.bBL,h,h,1/0))}u.push(B.E(B.cs(new C.dQd(i)),1))
if(f!=null){t=B.m(14)
s=A.c.j(0.06)
r=f.b
u.push(B.q(h,B.d(D.A1.h(0,r).a+": "+D.A1.h(0,r).e,h,h,h,h,h,h,A.tA,h,h,h),A.f,h,h,new B.p(s,h,h,t,h,h,A.n),h,h,h,A.a_X,A.bU,h,h,1/0))}u=B.x(u,A.m,h,A.e,A.i,0,A.p)
t=B.a([],g)
for(s=D.A1.gdO(D.A1),s=s.gae(s);s.C();){r=s.gR(s)
q=new B.aO(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ay(o.j(0.5),1,A.r,-1)
t.push(B.aA(h,B.q(h,B.x(B.a([B.X(p.b,o,h,h,h,20),A.bG,B.d(p.a,h,h,h,h,h,h,D.aVy,h,h,h)],g),A.m,h,A.e,A.Q,0,A.p),A.f,h,h,new B.p(n,h,new B.bH(m,m,m,m),new B.bf(q,q,q,q),h,h,A.n),h,h,h,A.fy,Ah.NR,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dQe(i,r),h,h,h,h,h,h,!1,A.a4))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dpy[l]
s.push(new E.fB(A.Pz,k.b,new C.dQf(i,k),A.cn,h))}s.push(new E.fB(K.wx,"Clear",new C.dQg(i),A.c0,h))
r=B.a([],g)
for(j=0;q=$.bGs(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?A.eb:A.lL
o=i.ay
n=i.cx.q(0,j)?A.b5:A.bk
r.push(new E.dW(q.a,o===j,new C.dQh(i,j),p,n,h))}return E.lA(A.cn,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.x(B.a([new E.fb(t,"PARTS",h),new E.fb(s,"TRY",h),new E.fb(r,"TASKS",h)],g),A.m,h,A.e,A.Q,0,A.p))}}
C.bd5.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3=a6.a,a4=a6.b
$.Q()
w=B.K()
w.r=D.afh.gp(0)
a5.ar(new B.a1(0,0,0+a3,0+a4),w)
v=B.K()
v.r=A.c.j(0.05).gp(0)
for(u=20;u<a4;u+=28)for(t=14;t<a3;t+=28)a5.N(new B.o(t,u),1,v)
for(a3=this.b,a4=a3.e,w=a4.length,s=a3.f,r=x.v,q=a3.d,p=0;p<a4.length;a4.length===w||(0,B.J)(a4),++p){o=a4[p]
n=o.a
m=q.h(0,n)
l=q.h(0,o.b)
if(m==null||l==null)continue
k=m.c
j=k.a+36
k=k.b+0
i=a3.acQ(l,o.c)
h=s.h(0,n)===!0
n=$.Q()
g=B.a([],r)
f=new B.aF(n.r,A.ai,a2,a2,g)
g.push(new B.aZ(j,k))
f.ab()
n=i.a
e=Math.max(40,Math.abs(n-j)*0.5)
d=i.b
d=new B.kR(j+e,k,n-e,d,n,d)
g.push(d)
n=f.f
if(n!=null)d.ak(n)
f.ab()
if(h){n=new B.ao(A.O,A.M,A.R,A.T,A.P)
n.b=A.a9
n.c=9
n.r=A.bk.j(0.28).gp(0)
n.y=N.op
a5.af(f,n)}n=new B.ao(A.O,A.M,A.R,A.T,A.P)
n.b=A.a9
n.c=3.2
n.d=A.bw
n.r=(h?A.dy:A.bv).gp(0)
a5.af(f,n)}a0=a3.as
if(a0!=null&&q.h(0,a0)!=null){a1=q.h(0,a0).c.a5(0,D.Jt)
i=a3.at
a3=i.a
a4=a1.a
e=Math.max(40,Math.abs(a3-a4)*0.5)
r=new B.aF($.Q().r,A.ai,a2,a2,B.a([],r))
w=a1.b
r.D(new B.aZ(a4,w))
s=i.b
r.D(new B.kR(a4+e,w,a3-e,s,a3,s))
s=B.K()
s.b=A.a9
s.c=3
s.r=A.ab.gp(0)
a5.af(r,s)}for(a3=new B.dq(q,q.r,q.e);a3.C();)this.caV(a5,a3.d)},
caV(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.A1.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.bs(a0.c,64,64)
s=B.bl(t,A.jK)
r=w.cy===v
q=s.eQ(A.cA)
$.Q()
p=B.K()
p.r=A.w.j(0.55).gp(0)
p.y=A.me
d.am(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.K()
p.sav(new B.c1(A.A,0.5,A.x,g,0,B.a([e.c.j(0.6),A.L],x.O),g,g).aK(0,B.bX(a0.c,52)))
d.N(q,52,p)}q=s.eQ(A.cM)
p=B.K()
o=e.c
p.r=B.ar(o,A.w,0.65).gp(0)
d.am(q,p)
n=u?0.35:0
q=B.K()
p=B.ar(o,A.c,0.1+n)
p.toString
m=B.ar(o,A.w,u?0.2:0.45)
m.toString
q.sav(new B.a9(A.b7,A.b9,A.x,B.a([p,m],x.O),g,g).aK(0,t))
d.am(s,q)
q=B.K()
q.b=A.a9
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.am(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.pr:D.bRt}else l=e.b
k=C.ha8(B.lz(l.a),30,A.c,l.b,g,A.I)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a4(d,v.aJ(0,new B.o(p/2,q.gba(q)/2)))
j=C.ha8(e.a,10.5,A.c,g,g,A.I)
j.a4(d,a0.c.a5(0,new B.o(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.ha8(f,9,u?A.dy:A.bW,g,g,A.u)
i.a4(d,a0.c.a5(0,new B.o(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b0J(d,w.acQ(a0,h),o)
this.b0J(d,a0.c.a5(0,D.Jt),o)},
b0J(d,e,f){var w
$.Q()
w=B.K()
w.r=D.afh.gp(0)
d.N(e,8.5,w)
w=B.K()
w.b=A.a9
w.c=2.2
w.r=f.gp(0)
d.N(e,8.5,w)
w=B.K()
w.r=A.c.gp(0)
d.N(e,3.2,w)},
aE(d){return!0}}
C.aN_.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bzr.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.byN()}}
C.Oa.prototype={
S(){return new C.aEH(B.mW(0,null,null))}}
C.Lb.prototype={
a7(){return"_UnfoldStyle."+this.b}}
C.B5.prototype={}
C.aEH.prototype={
cb0(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gcp(0).at
v.toString
w.f=v}w.m(new C.dWg(w,e))},
c3X(){var w=this
w.e.t()
w.e=B.mW(w.f,null,null)
w.m(new C.dWf(w))},
t(){this.e.t()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return B.oK(t,B.c4(v,A.c3,t?new C.btm(w.e,w.gcb_(w),new C.dWh(d),v):new C.aIU(u,new B.bP(u.b,x.gj)),v,!1,!1,v,!1),new C.dWi(w,u),x.K)}}
C.buZ.prototype={}
C.btm.prototype={
b0K(d,e){var w=null
return new B.D(R.a0o,B.x(B.a([B.d(d,w,w,w,w,w,w,D.fne,w,w,w),A.bG,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.E,w,A.e,A.i,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=B.A(B.a([B.aG(v,v,v,v,A1.ml,v,v,v,w.e,v,v,v,v,v,v),A.ts,D.bI0],u),A.m,v,A.e,A.i,0,v,v),s=w.b0K("STUDIOS","Play, make things, and keep what you make")
$.bGt()
return B.bn(!1,B.x(B.a([new B.D(D.bGV,t,v),B.E(B.w0(0,v,A.t,w.c,A.y,v,v,v,v,v,!1,v,A.ah,!1,B.a([new B.mu(s,v),new B.oe(A.hU,B.PM(new B.oN(new C.f78(d),9,!0,!0,!0,0,B.to(),v),D.aTp),v),new B.mu(w.b0K("SCENES","Each one is a studio too: change the style, colours and words"),v),new B.oe(D.bBT,B.PM(new B.oN(new C.f79(w),6,!0,!0,!0,0,B.to(),v),D.aTp),v)],u)),1)],u),A.m,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0)}}
C.afT.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=B.m(20),n=B.m(20),m=B.ar(I.m5,p,0.3)
m.toString
w=x.O
m=B.a([m,D.ait],w)
v=B.L(p.j(0.6),A.r,1.2)
u=x.V
t=B.a([new B.ac(-4,A.G,p.j(0.22),A.H,14)],u)
s=B.ar(p,A.w,0.45)
s.toString
w=B.a([p,s],w)
u=B.a([new B.ac(0,A.G,p.j(0.5),A.H,12)],u)
return B.aJ(!1,A.a3,!0,r,B.aP(!1,o,!0,B.eJ(B.x(B.a([B.q(r,B.X(q.c,A.c,r,r,r,24),A.f,r,r,new B.p(r,r,r,r,u,new B.a9(A.aA,A.aF,A.x,w,r,r),A.a7),r,44,r,r,r,r,r,44),A.U,B.d(q.a,r,2,A.a2,r,r,r,B.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.K,r,r),A.cU,B.d(q.b,r,2,A.a2,r,r,r,B.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.K,r,r)],x.p),A.m,r,A.ba,A.i,0,A.p),r,new B.p(r,r,v,n,t,new B.a9(A.aA,A.aF,A.x,m,r,r),A.n),r,A.GY,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.aj)}}
C.aeL.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=B.m(20),g=B.m(20),f=B.ar(I.m5,A.d.gH(i),0.24)
f.toString
w=x.O
f=B.a([f,D.ait],w)
v=B.L(A.d.gH(i).j(0.35),A.r,1)
u=x.V
t=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cA,12)],u)
s=x.p
r=B.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new B.aO(6,6)
m=B.a([A.d.gH(i),A.d.gan(i)],w)
l=B.a([new B.ac(0,A.G,A.w.j(0.45),R.aLF,0)],u)
r.push(B.q(k,B.X(q[p],A.c,k,k,k,11),A.f,k,k,new B.p(k,k,k,new B.bf(n,n,n,n),l,new B.a9(A.a6,A.aa,A.x,m,k,k),A.n),k,17,k,new B.R(p*4,0,(2-p)*4,o),k,k,k,k))}w=B.x(r,A.m,k,A.e,A.Q,0,A.p)
u=B.ar(A.d.gH(i),A.d.gan(i),0.4)
u.toString
return B.aJ(!1,A.a3,!0,k,B.aP(!1,h,!0,B.eJ(B.x(B.a([new B.a5(58,k,w,k),A.X,B.d(j.b,k,2,A.a2,k,k,k,B.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.K,k,k),A.ax,B.X(A.D_,A.d.gH(i),k,k,k,18)],s),A.m,k,A.ba,A.i,0,A.p),k,new B.p(k,k,v,g,t,new B.a9(A.aA,A.aF,A.x,f,k,k),A.n),k,A.GY,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.L,0,k,k,k,k,k,A.aj)}}
C.R2.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ar(A.d.gan(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=B.ap(-8,B.c3(j,new B.p(h,j,j,B.m(22),j,j,A.n),A.bi),j,j,2,2,8,j)
u=B.m(22)
t=k.y
s=x.V
r=B.a([new B.ac(0,A.G,A.w.j(0.55),A.Jq,26),new B.ac(-6,A.G,A.d.gH(i).j(0.1+0.4*t),A.H,30)],s)
q=B.m(22)
p=B.ar(A.d.gH(i),A.c,0.14)
p.toString
o=A.d.gH(i)
n=A.d.gan(i)
i=B.ar(A.d.gan(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bR(0,B.c3(j,new B.p(j,j,j,j,j,new B.a9(A.aA,A.aF,A.x,B.a([p,o,n,i],m),D.dvg,j),A.n),A.bi),0,0,0),B.ap(j,B.c3(j,new B.p(j,j,j,j,j,new B.a9(A.b7,A.b9,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bi),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bR(0,B.b4(j,j,j,new C.bum(i,j),A.az),0,0,0))
i=A.c.j(0.16)
p=B.L(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ac(0,A.G,A.c.j(0.25*t),A.H,14)],s)
s=B.q(j,B.X(k.f,A.c,j,j,j,28),A.f,j,j,new B.p(i,j,p,j,s,j,A.a7),j,54,j,j,j,j,j,54)
p=B.a([B.d(k.r,j,j,j,j,j,j,D.fp_,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,B.a([A.ax,B.d(i,j,1,A.a2,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a8,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.UZ)
p.push(B.q(j,j,A.f,j,j,new B.p(A.c.j(0.28),j,j,B.m(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new B.D(A.h1,B.A(B.a([s,A.ew,B.E(B.x(p,A.E,j,A.e,A.Q,0,A.p),1)],l),A.m,j,A.e,A.i,0,j,j),j))
i=k.x
if(i>0)m.push(B.bR(0,new B.dx(!0,B.e8(j,A.w.j(A.j.E(i*0.6,0,0.7)),!0),j),0,0,0))
i=B.m(22)
m.push(B.bR(0,new B.dx(!0,B.c3(j,new B.p(j,j,B.L(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.bi),j),0,0,0))
return new B.a5(w,v,new B.an(A.a0,j,A.ad,A.f,B.a([h,B.bR(0,B.c3(B.by(q,new B.an(A.a0,j,A.ad,A.t,m,j),A.aq),new B.p(j,j,j,u,r,j,A.n),A.bi),0,0,0)],l),j),j)}}
C.bum.prototype={
a4(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a1(r,-10,s,w)
u=d.c
J.bo(u.save())
u.translate(v.gbw().a,v.gbw().b)
d.hW(0,0.35)
t=B.bs(A.H,(w- -10)*1.6,s-r)
$.Q()
s=B.K()
s.sav(new B.a9(A.a6,A.aa,A.x,B.a([A.L,A.c.j(0.3),A.L],x.O),null,null).aK(0,t))
d.ar(t,s)
u.restore()},
aE(d){return d.b!==this.b}}
C.btS.prototype={
B(d){var w=null,v=B.m(22),u=B.a([D.boL,D.ahy],x.O),t=this.e,s=B.L(A.d.gH(t).j(0.4),A.r,1.2),r=B.a([new B.ac(0,A.G,A.w.j(0.5),A.kz,24)],x.V),q=B.m(22),p=A.d.gH(t)
return new B.a5(this.c,this.d,B.c3(B.by(q,B.b4(B.at(B.X(A.jF,A.d.gH(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.bbK(p,w),A.az),A.aq),new B.p(w,w,s,v,r,new B.a9(A.aA,A.aF,A.x,u,w,w),A.n),A.bi),w)}}
C.bbK.prototype={
a4(d,e){var w,v,u,t,s,r
$.Q()
w=B.K()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=0;s<u;s+=18)d.ah(new B.o(s,0),new B.o(s,t),w)
for(r=0;r<t;r+=18)d.ah(new B.o(0,r),new B.o(u,r),w)
u=e.ej(A.H)
$.Q()
t=B.K()
t.b=A.a9
t.c=1.4
t.r=v.j(0.35).gp(0)
d.N(u,30,t)},
aE(d){return!1}}
C.aIU.prototype={
S(){return new C.aIV(new B.cw(null,x.A),null,null)}}
C.aIV.prototype={
guE(){var w,v=this,u=v.d
if(u===$){w=B.bm(null,D.bza,null,1,null,v)
w.cP(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
ga_o(){var w,v=this,u=v.e
if(u===$){w=B.bm(null,A.h0,null,1,null,v)
w.fs(0,!0)
v.e!==$&&B.bF()
v.e=w
u=w}return u},
gayM(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gcaY(){var w=this.w
if(w===$){w=B.C(this.a.c.d,x.G)
this.w=w}return w},
gaY0(){var w=this.x
if(w===$){w=B.C(this.a.c.e,x.Z)
this.x=w}return w},
gaYO(){var w=this.y
if(w===$){w=B.C(this.a.c.f,x.N)
this.y=w}return w},
gb9z(){var w=this.z
if(w===$){w=B.C(this.a.c.r,x.N)
this.z=w}return w},
Y(){this.a3()
var w=this.guE()
w.dk()
w.dV$.J(0,this.gcAY())},
cAZ(){var w,v,u,t,s,r,q,p=this,o=p.guE().x
o===$&&B.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gayM().a){case 0:w=D.nM
break
case 1:w=D.v4
break
case 2:w=D.a50
break
case 3:w=D.nM
break
case 4:w=D.dhJ
break
case 5:w=D.v4
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.ad_)r=0.09
else r=s===D.ad0?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){G.dE(260+90*v,"",260,1.6,0.18,"tri")
u=D.c9C[v]
E.mq("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.JH("bell",D.ciq,1400,0.35)}}p.ax=o},
t(){this.guE().t()
this.ga_o().t()
this.bAB()},
aeX(){var w=this
w.guE().d06(0,B.dv(0,0,0,A.j.V(11e3/w.Q),0,0))
w.m(new C.f6P(w))},
clY(){this.guE().bQ(0)
this.m(new C.f6O(this))},
aeW(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$aeW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gaYO(),s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){q=t[r]
l.push(new B.au(new B.ba(q,A.b6,A.aP),$.aw()))}m=B.a([],m)
for(t=u.gb9z(),s=t.length,r=0;r<t.length;t.length===s||(0,B.J)(t),++r){p=t[r]
m.push(new B.au(new B.ba(p,A.b6,A.aP),$.aw()))}o=B.C(u.gaY0(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bT(I.m5,null,new C.f6N(u,l,m,o),t,!0,!0,!0,A.lS,!1,!1,x.H),$async$aeW)
case 2:l=B.C(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.T$=$.aw()
n.P$=0}return B.h(null,v)}})
return B.i($async$aeW,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gayM(),f=i.a.c,e=f.b,d=i.gcaY(),a0=new C.B5(g,e,f.c,d,i.gaY0(),i.gaYO(),i.gb9z())
f=B.ar(A.d.gH(d),A.d.gan(d),0.4)
f.toString
g=x.p
w=B.a([B.aG(h,h,h,h,B.X(i.at?A.oA:V.t_,A.ab,h,h,h,21),h,h,h,new C.f6X(i),h,h,h,h,"Sound",h),B.aG(h,h,h,h,D.c0g,h,h,h,i.gcaZ(),h,h,h,h,"Edit words and pictures",h),B.aG(h,h,h,h,K.oE,h,h,h,new C.f6Y(i,a1),h,h,h,h,"Share",h)],g)
v=B.a([B.c9(i.ga_o(),new C.f6Z(i,a0),h),B.cs(new C.f7_(i,a0))],g)
u=i.as
t=u?i.gclX():i.gcb1()
u=u?D.bQL:A.rZ
s=B.ar(A.d.gH(d),A.d.gan(d),0.4)
s.toString
t=B.A(B.a([B.aG(h,h,h,h,B.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.ce),B.E(B.c9(i.guE(),new C.f70(i,a1,a0),h),1),B.aG(h,h,h,h,D.bXx,h,h,h,new C.f71(i),h,h,h,h,"Replay",A.ce)],g),A.m,h,A.e,A.i,0,h,h)
s=i.Q
u=A.j.ad(s,1)
r=B.ar(A.d.gH(d),A.d.gan(d),0.4)
r.toString
s=E.iP(r,u+"x","Speed",2.5,0.4,new C.f72(i),s)
u=B.a([],g)
for(q=0;q<6;++q){p=D.dsl[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=B.ar(A.d.gH(d),A.d.gan(d),0.4)
r.toString
u.push(new E.dW(p.b,o===p.a,new C.f73(i,p),p.c,r,h))}d=B.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.ca_[q]
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}m=A.d.gH(o).A(0,A.d.gH(n))?34:28
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}l=A.d.gH(o).A(0,A.d.gH(n))?34:28
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}k=A.d.gH(o).A(0,A.d.gH(n))?A.c:A.aV
o=i.w
if(o===$){o=B.C(i.a.c.d,r)
i.w=o}j=new B.ay(k,A.d.gH(o).A(0,A.d.gH(n))?2.5:1,A.r,-1)
d.push(B.aA(h,B.q(h,h,A.f,h,h,new B.p(h,h,new B.bH(j,j,j,j),h,h,new B.a9(A.aA,A.aF,A.x,n,h,h),A.a7),h,l,h,K.al_,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f74(i,n),h,h,h,h,h,h,!1,A.a4))}return E.lA(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.em(new B.an(A.a0,h,A.b2,A.t,v,h),i.f),e,B.x(B.a([t,s,new E.fb(u,"STYLE",h),new E.fb(d,"THEME",h)],g),A.m,h,A.e,A.Q,0,A.p))},
bCJ(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nM[r]
p=A.j.E((1-A.e4.aA(0,A.j.E((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.j.E(p/1.5707963267948966,0,1)
q=D.nM[r]
n=q+0.12
m=A.j.E((a0-n)/(q+0.2-n),0,1)
n=D.nM[r]
q=n-0.01
q=A.j.E((a0-q)/(n+0.03-q),0,1)
n=B.dr()
l=n.a
l.$flags&2&&B.aj(l)
l[11]=0.0013
n.km(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nM[r]
h=i+0.1
if(A.j.E((a0-h)/(i+0.3-h),0,1)>0){i=D.nM[r]
h=i+0.1
h=A.j.E((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nM[r]
h=i+0.1
h=A.j.E((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cL(0,r*118,0,f,f,f,new B.kG(q,new B.iR(n,f,A.b7,!0,f,new C.R2(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nM[r]
u=v-0.02
g=A.j.E((a0-u)/(v+0.1-u),0,1)
u=A.d.gH(w)
v=D.nM[r]
t=v+0.12
e.push(new B.cL(0,r*118-3-2,0,f,f,4,new B.mE(new C.bsY(u,g,1-A.j.E((a0-t)/(v+0.22-t),0,1),f),f,A.az,f,f),f))}return new B.a5(a2,358,new B.an(A.a0,f,A.ad,A.f,e,f),f)},
bTB(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.v4[r]
p=A.qn.aA(0,A.j.E((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.v4[r]
m=q+0.15
l=A.j.E((a0-m)/(q+0.25-m),0,1)
m=D.v4[r]
q=m-0.03
q=A.j.E((a0-q)/(m+0.01-q),0,1)
m=B.dr()
k=m.a
k.$flags&2&&B.aj(k)
k[11]=0.0011
m.k5(n,n,n,1)
m.fL(o)
if(o<1.5707963267948966){k=v[r]
j=u[r]
i=t[r]
h=Math.sin(o)
g=p>0.5&&p<1?(p-0.5)*2:-1
g=new C.R2(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dr()
k.fL(3.141592653589793)
k=new B.iR(k,f,A.A,!0,f,new C.btS(a2,108,w,f),f)}e.push(new B.cL(0,r*130,0,f,f,f,new B.kG(q,new B.iR(m,f,A.A,!0,f,k,f),f),f))}return new B.a5(a2,378,new B.an(A.a0,f,A.ad,A.f,e,f),f)},
cG5(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a50[w]
l.push(A.cw.aA(0,A.j.E((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bR(0,B.b4(n,n,n,new C.bws(d.d,l,D.azT,m,C.btl(e,0.4,0.62),f,C.btl(e,0.45,0.7),n),A.az),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.haG(g,w)
q=D.azT[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cL(r,s-q*m*p+12,n,n,t,n,new B.kG(o,B.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.haG(g,w)
r=D.a50[w]
q=r+0.15
v.push(new B.cL(s,l,n,n,t,n,new B.kG(A.j.E((e-q)/(r+0.25-q),0,1),B.d(u[w],n,n,n,n,n,n,A.VL,A.K,n,n),n),n))}return new B.a5(g,m+90,new B.an(A.a0,n,A.ad,A.f,v,n),n)},
bJ0(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cw.aA(0,C.btl(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bR(0,B.at(B.dP(B.b4(f,f,f,new C.bso(A.d.gH(a1),C.btl(a3,0,0.2),a4,f),new B.av(a5*0.95,70)),D.ekj),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.j.E((a3-l)/(0.12+m-l),0,1)
j=A.dC.aA(0,A.j.E((o-0.7)/0.3,0,1))
l=B.dr()
m=l.a
m.$flags&2&&B.aj(m)
m[11]=0.001
l.fL(-Math.sin(p)*0.7)
m=0.68+0.32*o
l.k5(m,m,m,1)
m=v[q]
i=u[q]
h=t[q]
g=j>0.5?A.j.F(r,1):-1
w.push(new B.y(o,new B.cL(0,0,0,0,f,f,new B.cf(A.A,f,f,new B.kG(k*(0.45+0.55*o),B.dP(new B.iR(l,f,A.A,!0,f,new C.R2(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.o(n*a5*0.34,-o*18)),f),f),f)))}A.d.aZ(w,new C.f6G())
A.d.v(a0,new B.N(w,new C.f6H(),x.fR))
return new B.a5(a5,330,new B.an(A.a0,f,A.ad,A.f,a0,f),f)},
caX(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.v4[q]
o=A.j.E((a2-p)/(p+0.22-p),0,1)
n=A.l8.aA(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.v4[q]
m=A.j.E((a2-m)/(m+0.02-m),0,1)
l=D.aC_[q]
k=B.dr()
k.n_(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.k5(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.v4[q]
g=h+0.1
g=A.j.E((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cL(0,0,0,0,e,e,new B.cf(A.A,e,e,new B.kG(m,B.dP(new B.iR(k,e,A.A,!0,e,new C.R2(d,92,w,p,j,i,0,g*s,h,e),e),new B.o(0,l)),e),e),e))
l=D.v4[q]
h=l+0.02
f=A.j.E((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cL(0,0,0,0,e,e,new B.cf(A.A,e,e,B.dP(new B.mE(new C.bcq(w,f,q,e),e,new B.av(r,212),e,e),new B.o(0,D.aC_[q])),e),e))}return new B.a5(a4,330,new B.an(A.a0,e,A.ad,A.f,a0,e),e)},
bFF(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.o(-b0,-150),new B.o(b0,-40),D.ekn],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nM[r]
p=A.j.E((a8-q)/(q+0.2-q),0,1)
o=A.cw.aA(0,p)
q=D.aCa[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.nM[r]
f=g+0.2
e=A.j.E((a8-f)/(g+0.3-f),0,1)
f=D.nM[r]
g=f-0.01
g=A.j.E((a8-g)/(f+0.03-g),0,1)
f=B.dr()
d=f.a
d.$flags&2&&B.aj(d)
d[11]=0.001
f.n_(l*h+D.dm2[r]*o)
f.fL(l*0.9)
h=0.55+0.45*o
f.k5(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cL(0,0,0,0,a3,a3,new B.cf(A.A,a3,a3,new B.kG(g,B.dP(new B.iR(f,a3,A.A,!0,a3,new C.R2(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.o(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nM[r]
i=q+0.17
a2=A.j.E((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aCa[r]
a6.push(new B.cL(0,0,0,0,a3,a3,new B.cf(A.A,a3,a3,B.dP(new B.mE(new C.bsq(A.d.gH(w),a2,a3),a3,new B.av(a4,30),a3,a3),new B.o(0,q+48-4)),a3),a3))}}return new B.a5(b0,330,new B.an(A.a0,a3,A.ad,A.f,a6,a3),a3)}}
C.bsY.prototype={
a4(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a1(w-v,0,w+v,e.b)
q=B.bl(u,A.hx)
$.Q()
t=B.K()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.y=N.op
d.am(q,t)
t=B.bl(u,A.hx)
q=B.K()
q.r=A.c.j(s).gp(0)
d.am(t,q)},
aE(d){return d.c!==this.c||d.d!==this.d}}
C.bso.prototype={
a4(d,e){var w,v,u=this.c,t=B.bs(e.ej(A.H),e.b*u,e.a*u)
$.Q()
u=B.K()
u.b=A.a9
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.y=U.Oj
d.bZ(t,u)
u=B.K()
u.b=A.a9
u.c=2.5
u.r=w.j(0.7).gp(0)
d.bZ(t,u)
u=t.cn(-14)
v=B.K()
v.b=A.a9
v.c=1
v.r=w.j(0.3).gp(0)
d.bZ(u,v)},
aE(d){return!0}}
C.bcq.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.ej(A.H),h=this.c,g=A.cw.aA(0,h)
$.Q()
w=B.K()
w.b=A.a9
v=1-h
w.c=5*v
u=this.b
w.r=A.d.gH(u).j(0.6*v).gp(0)
d.N(i,40+g*e.a*0.42,w)
t=new B.e4()
t.d_(this.d*17+3)
for(w=40*h*h*3,s=i.a,r=i.b,h=1-h*0.6,q=0;q<26;++q){p=t.ai()*3.141592653589793*2
o=(40+t.ai()*110)*g
n=Math.cos(p)
m=Math.sin(p)
l=t.ai()
k=new B.ao(A.O,A.M,A.R,A.T,A.P)
j=(q&1)===0?A.d.gH(u):A.c
k.r=j.j(A.j.E(v,0,1)).gp(0)
d.N(new B.o(s+n*o*1.6,r+(m*o+w)),(2+l*3)*h,k)}},
aE(d){return!0}}
C.bsq.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o=e.ej(A.H)
for(w=e.a,v=e.b,u=this.b,t=this.c,s=0;s<2;++s){r=A.j.E(t-s*0.18,0,1)
if(r<=0)continue
q=B.bs(o,v*(0.3+r*0.9),w*(0.5+r*0.7))
$.Q()
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.b=A.a9
p.c=2
p.r=u.j((1-r)*0.7).gp(0)
d.bZ(q,p)}},
aE(d){return d.c!==this.c}}
C.bws.prototype={
a4(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2=c0.e,c3=c2+36,c4=d2.a,c5=c4*0.23,c6=c5*0.34,c7=c6*0.85,c8=-c6*0.5,c9=c3-4,d0=new B.a1(0,c9,0+c4,c9+60)
$.Q()
c9=B.K()
w=c0.b
v=x.O
c9.sav(new B.a9(A.b7,A.b9,A.x,B.a([A.d.gH(w).j(0.18),A.L],v),c1,c1).aK(0,d0))
d1.ar(d0,c9)
c9=B.K()
c9.r=A.c.j(0.18).gp(0)
c9.c=1
d1.ah(new B.o(0,c3),new B.o(c4,c3),c9)
for(c9=c0.w,u=c9>0,t=(c5-16)/3,s=t-5,r=0.6+0.3*c0.r,q=c0.f,p=c3-14,o=x.v,n=c3+c8,m=c0.d,l=c3-6,k=c5+c7+8,j=l+16,i=c0.c,h=c9<1,g=d1.c,f=0;f<3;++f){e=i[f]
if(e<=0)continue
d=C.haG(c4,f)
a0=m[f]*c2*e
a1=d-4
a2=$.Q()
a3=new B.ao(A.O,A.M,A.R,A.T,A.P)
a3.r=A.w.j(0.5).gp(0)
a3.y=A.me
d1.bZ(new B.a1(a1,l,a1+k,j),a3)
a3=c3-a0
a1=d+c5
a4=new B.a1(d,a3,a1,a3+a0)
a5=new B.ao(A.O,A.M,A.R,A.T,A.P)
a6=B.ar(A.d.gH(w),A.c,0.1)
a6.toString
a5.sav(new B.a9(A.b7,A.b9,A.x,B.a([a6,A.d.gan(w)],v),c1,c1).aK(0,a4))
d1.ar(a4,a5)
a2=a2.r
a5=B.a([],o)
a7=new B.aF(a2,A.ai,c1,c1,a5)
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
a9=new B.bu()
a5.push(a9)
a5=a7.f
if(a5!=null)a9.ak(a5)
a7.ab()
a5=new B.ao(A.O,A.M,A.R,A.T,A.P)
a5.r=B.ar(A.d.gan(w),A.w,0.5).gp(0)
d1.af(a7,a5)
a5=B.a([],o)
b1=new B.aF(a2,A.ai,c1,c1,a5)
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
a2=new B.bu()
a5.push(a2)
a5=b1.f
if(a5!=null)a2.ak(a5)
b1.ab()
a2=new B.ao(A.O,A.M,A.R,A.T,A.P)
a2.r=B.ar(A.d.gH(w),A.c,0.45).gp(0)
d1.af(b1,a2)
b2=new B.ao(A.O,A.M,A.R,A.T,A.P)
b2.b=A.a9
b2.c=1
b2.r=A.c.j(0.28).gp(0)
d1.ar(a4,b2)
d1.af(a7,b2)
d1.af(b1,b2)
b3=A.j.bh(a0/22)
for(a2=a3+6,a3=d+8,a5=q*b3*1.3,b4=0;b4<b3;++b4){b5=a5>b3-b4-1
for(a6=p-b4*22-12,a8=a6<a2,a9=a6+10,b6=0;b6<3;++b6){b7=a3+b6*t
if(a8)continue
b0=B.bl(new B.a1(b7,a6,b7+s,a9),A.hx)
$.Q()
b8=new B.ao(A.O,A.M,A.R,A.T,A.P)
b8.r=(b5?A.c.j(r):A.w.j(0.22)).gp(0)
d1.am(b0,b8)}}if(u&&h){a2=c3-a0*c9-14
b9=new B.a1(d,a2,a1,a2+28)
J.bo(g.save())
g.clipRect(B.hR(a4),$.mf()[1],!0)
$.Q()
a2=new B.ao(A.O,A.M,A.R,A.T,A.P)
a2.sav(new B.a9(A.b7,A.b9,A.x,B.a([A.L,A.c.j(0.4),A.L],v),c1,c1).aK(0,b9))
d1.ar(b9,a2)
g.restore()}}},
aE(d){return!0}}
C.aOF.prototype={
aY(){this.b5()
this.b4()
this.dN()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdH())
w.b9$=null
w.a2()}}
C.a1r.prototype={
a7(){return"_Role."+this.b}}
C.qq.prototype={}
C.r8.prototype={}
C.D2.prototype={}
C.a_p.prototype={}
C.afH.prototype={}
C.a1E.prototype={
gZ(d){return this.d}}
C.Dd.prototype={}
C.acC.prototype={}
C.acT.prototype={}
C.aeO.prototype={}
C.bj2.prototype={
a3y(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
G.dE(d,"",e,g,h,f)},
baF(d,e,f){return this.a3y(d,e,f,0,0.55)},
aDr(d,e,f,g){return this.a3y(d,e,f,0,g)},
baG(d,e,f,g){return this.a3y(d,e,f,g,0.55)},
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
w.b0()},
al4(d,e,f,g){var w="n"+this.ay++,v=new C.r8(w,e,f,g)
this.a.n(0,w,v)
this.b0()
return v},
ta(d,e,f){return this.al4(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bt(w.b,new C.dqw(e))
A.d.bt(w.c,new C.dqx(e))
w.b0()},
bex(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.n4.h(0,v.b).c===D.xB)return!1
w=this.b
if(A.d.aV(w,new C.dqt(d,e)))return!1
w.push(new C.D2(d,e))
this.b0()
return!0},
c2Q(d){var w
if(d.b==="beat")return D.ciA[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.aw(500)
case 2:return 1400+w.aw(2200)
default:return 450+w.aw(2000)}},
aH1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.aCr[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.Dd(u,t,j.ax,90))
w.push(new C.Dd(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ai()*3.141592653589793*2
v.push(new C.a1E(u,new B.o(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.baF(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ai()*3.141592653589793*2
p=100+w.ai()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ar(t,A.c,w.ai()*0.5)
m.toString
v.push(new C.a1E(u,new B.o(o*p,n*p),m,3+w.ai()*4.5,1000+w.aw(700),j.ax))}j.f.push(new C.Dd(u,t,j.ax,120))
j.aDr(120,200,"noise",0.5)
j.baF(261.63*Math.pow(2,([7,12,16,19][w.aw(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.Dd(u,t,j.ax,230))
w.push(new C.Dd(u,t,j.ax+160,160))
w.push(new C.Dd(u,t,j.ax+320,100))
j.baG(180+j.at.aw(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.acC(u,new B.o((w.ai()-0.5)*220,-260-w.ai()*180),t,j.ax))
j.baG(300+w.aw(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ai()*3.141592653589793*2
j.w.push(new C.acT(u,u.a5(0,new B.o(Math.cos(q),Math.sin(q)).aO(0,260+w.ai()*200)),t,j.ax))
j.a3y(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fL()
j.a3y(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.aeO(u,D.aBM[v],t,j.ax))
j.aDr(261.63*Math.pow(2,([0,5,9,12][j.at.aw(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aDr(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.ceG[A.o.F(w,3)]
for(k=1;k<=3;++k)j.cw3(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new B.eB(w,new C.dqu(d));v.C();)j.aBX(w.gR(0),j.ax+D.cr0[A.o.F(g.d,4)])
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
case"chance":s=j.at.aw(100)<D.cId[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new B.eB(w,new C.dqv(d));v.C();)j.aBX(w.gR(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.xA(w,0,v-700)},
cw3(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.a_p(e,"~"+d))},
aBX(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.afH(d.a,v,e,w))
u.push(new C.a_p(w,v))},
a7j(d){var w,v,u,t,s,r,q,p,o=this
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
else if(o.ax>=q){o.aH1(r)
u.n(0,r,o.ax+o.c2Q(s))}}w=o.c
v=B.U(w).k("Y<1>")
q=B.C(new B.Y(w,new C.dqy(o),v),v.k("M.E"))
if(q.length!==0){A.d.bt(w,new C.dqz(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.J)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b2(u,1)
for(u=A.d.gae(v),r=new B.eB(u,new C.dqA(p));r.C();)o.aBX(u.gR(0),o.ax)}else o.aH1(u)}}A.d.bt(o.d,new C.dqB(o))
A.d.bt(o.e,new C.dqC(o))
A.d.bt(o.f,new C.dqD(o))
A.d.bt(o.w,new C.dqE(o))
A.d.bt(o.x,new C.dqF(o))
A.d.bt(o.r,new C.dqG(o))
o.b0()},
vH(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.e,v=w.length,u=1-1.6*e,t=120*e,s=0;s<v;++s){r=w[s]
q=r.a
p=r.b
o=p.a
p=p.b
r.a=new B.o(q.a+o*e,q.b+p*e)
r.b=new B.o(o*u,p*u+t)}n=j.cy.b-8
for(w=j.r,v=w.length,u=900*e,s=0;s<v;++s){m=w[s]
t=m.b
q=t.a
t=t.b+u
p=m.b=new B.o(q,t)
o=m.a
l=o.a+q*e
o=o.b+t*e
k=m.a=new B.o(l,o)
if(o>n){p=m.a=new B.o(l,n)
t=m.b=new B.o(q*0.9,-t*0.62)
q=p}else{q=k
t=p}q=q.a
if(q<10||q>j.cy.a-10)m.b=new B.o(-t.a*0.8,t.b)}},
aj(){var w,v,u,t,s,r,q,p,o,n,m=this.cy,l=m.a
if(l<=0)l=1
w=m.b
if(w<=0)w=1
m=B.a([],x.x)
for(v=this.a,v=new B.dq(v,v.r,v.e),u=x.N,t=x.K;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(B.H(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=B.a([],x.E)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,B.J)(t),++o){n=t[o]
v.push(B.a([n.a,n.b],r))}return A.Y.az(B.H(["nodes",m,"edges",v],u,x.ew),null)},
Uh(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.Y.aQ(0,d,null))
k.a8(0)
for(o=x.j,n=J.aU(o.a(J.t(w,"nodes"))),m=k.a;n.C();){v=n.gR(n)
u=B.w(J.t(v,"k"))
if(!D.n4.al(0,u))continue
t=B.w(J.t(v,"id"))
m.n(0,t,new C.r8(t,u,new B.o(B.dC(J.t(v,"x"))*k.cy.a,B.dC(J.t(v,"y"))*k.cy.b),A.j.M(B.dC(J.t(v,"p")))))
s=B.ca(B.aL(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aU(o.a(J.t(w,"edges"))),n=k.b;o.C();){r=o.gR(o)
q=B.w(J.t(r,0))
p=B.w(J.t(r,1))
if(m.al(0,q)&&m.al(0,p))n.push(new C.D2(q,p))}k.b0()
return!0}catch(l){return!1}},
cVz(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.r8(n,r,new B.o(q*p.a,o*p.b),s))
l.b0()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.bex(w[m.a],w[m.b])}},
gZ(d){return this.cy}}
C.GD.prototype={}
C.WX.prototype={
S(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aFU(new C.bj2(B.T(w,x.f3),v,u,t,s,r,q,p,o,B.T(w,n),B.T(w,n),B.T(w,n),B.T(w,n),A.cN,A.L,A.az,$.aw()),A.bD,A.H,A.H,A.Z,null,null)}}
C.aFU.prototype={
ado(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$ado=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.az(),$async$ado)
case 6:q=n.k2(m.t(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new C.ewN(s))
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
return B.i($async$ado,v)},
aai(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$aai=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new C.ewC(s))
u=3
w=6
return B.b(B.az(),$async$aai)
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
return B.i($async$aai,v)},
bOW(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a4(n).k("b8<2>")
v=""+n.a+"|"+o.length+"|"+new B.b8(n,w).cJ(0,0,new C.ewE())+"|"+A.d.cJ(o,0,new C.ewF())
if(v===p.ch)return p.CW
u=new C.ewI()
t=x.s
s=B.a([],t)
r=new C.ewJ(p,s,u)
for(n=new B.b8(n,w).gae(0),w=new B.eB(n,new C.ewG());w.C();){q=n.gR(0)
if(!A.d.aV(o,new C.ewH(q)))s.push(B.w(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.cW(s,0,B.dA(5,"count",x.S),x.N).dm(0)},
Y(){var w,v=this
v.a3()
v.ado()
v.d.db=v.ay
w=v.pZ(new C.exc(v))
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
w.bzD()},
acU(d){return this.c2g(d)},
c2g(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$acU=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.az(),$async$acU)
case 6:q=m.aT(l.t(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.Uh(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aZe(A.d.gH(D.aBd))
if(s.c!=null)s.m(new C.ewM())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$acU,v)},
aZe(d){this.d.cVz(0,d.c,d.d)
this.EH()},
EH(){var w=this.as
if(w!=null)w.a1(0)
this.as=B.cy(A.lH,new C.ewy(this))},
ayN(d){var w,v,u,t,s=this.d.a,r=B.a4(s).k("b8<2>")
s=B.C(new B.b8(s,r),r.k("M.E"))
r=B.U(s).k("ds<1>")
s=new B.ds(s,r)
s=new B.bO(s,s.gI(0),r.k("bO<ak.E>"))
w=d.a
r=r.k("ak.E")
v=d.b
while(s.C()){u=s.d
if(u==null)u=r.a(u)
t=u.c
if(Math.abs(w-t.a)<=36&&Math.abs(v-t.b)<=36)return u.a}return null},
cjW(d){var w,v,u,t,s,r=this.d.a,q=B.a4(r).k("b8<2>")
r=B.C(new B.b8(r,q),q.k("M.E"))
q=B.U(r).k("ds<1>")
r=new B.ds(r,q)
r=new B.bO(r,r.gI(0),q.k("bO<ak.E>"))
w=d.a
v=d.b
q=q.k("ak.E")
while(r.C()){u=r.d
if(u==null)u=q.a(u)
t=u.c
s=w-(t.a+36)
t=v-(t.b+0)
if(Math.sqrt(s*s+t*t)<=24)return u.a}return null},
c24(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.n4.h(0,r.b).c===D.xB)continue
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
cb4(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hz6(new B.o(n.a+36,n.b+0),new B.o(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cDN(d){var w,v,u,t,s,r,q=this,p=q.ayN(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.eY()
u=v.b
if(u==="button"){w.aH1(p)
return}if(q.r)return
t=D.n4.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.rf)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.b0()
q.EH()
return}if(q.r)return
r=q.cb4(d)
if(r!=null){w=q.d
A.d.cA(w.b,r)
w.b0()
q.EH()}},
cle(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cjW(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.ayN(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aJ(0,d)}},
clf(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b0()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.o(A.j.E(d.a+s.y.a,46,t.a-46),A.j.E(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b0()}}},
b3B(){var w,v,u=this
if(u.z!=null){w=u.c24(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.bex(v,w)}else v=!1
if(v){B.jU()
u.EH()}u.z=null
u.d.b0()}else if(u.x!=null){if(u.at)u.EH()
u.x=null}},
adB(d){return this.c57(d)},
c57(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$adB=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.ayN(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jV()
p=t.c
p.toString
w=3
return B.b(B.bT(I.m5,null,new C.ewP(q),p,!0,!0,!1,A.lS,!1,!1,x.y),$async$adB)
case 3:if(f===!0){r.W(0,s)
t.EH()}case 1:return B.h(u,v)}})
return B.i($async$adB,v)},
cb2(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.ta(0,d,new B.o(v.a*(0.25+u.ai()*0.5),v.b*(0.2+u.ai()*0.55)))
B.eY()
this.EH()},
ahx(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ahx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bT(I.m5,null,new C.ewR(),s,!0,!0,!0,A.lS,!1,!1,x.es),$async$ahx)
case 2:t=e
if(t!=null)u.aZe(t)
return B.h(null,v)}})
return B.i($async$ahx,v)},
aeY(d){var w=0,v=B.j(x.H),u=this,t
var $async$aeY=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.ce(null,null,!0,null,new C.ewB(),t,null,!0,!0,x.y),$async$aeY)
case 2:if(f===!0){u.d.a8(0)
u.EH()}return B.h(null,v)}})
return B.i($async$aeY,v)},
B(d){var w=this,v=null,u=B.a([B.ajc(w.r?new B.bL(A.a6,v,v,new B.D(A.GZ,B.ho(D.bVq,D.fGo,new C.exa(w),v),v),v):w.cb5(),A.b4,A.iH),B.E(B.cs(new C.exb(w)),1)],x.p)
if(!w.r)u.push(w.cyw())
return B.c4(v,A.c3,B.bn(!0,B.x(u,A.m,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)},
bKF(){var w=null,v=new C.ewD(),u=A.w.j(0.7),t=B.m(26),s=B.L(A.bx.j(0.5),A.r,1)
return B.bR(0,B.e8(B.at(B.q(w,B.cg(B.x(B.a([D.fRR,A.ax,D.fZA,A.aC,v.$4(A.oz,A.bx,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(Y.CW,A.cn,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.kt,A.bV,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.P4,A.bk,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fYT,new B.bL(A.aa,w,w,B.bM(!1,D.fOW,w,w,!0,w,w,w,this.gbKy(),w,w),w)],x.p),A.E,w,A.e,A.Q,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),A.f,w,A.Xt,new B.p(I.m5,w,s,t,w,w,A.n),w,w,w,A.fr,Am.amc,w,w,w),w,w,w),u,!0),0,0,0)},
cb5(){var w=this,v=null,u=B.aG(v,v,v,v,A1.ml,v,v,v,new C.ewX(w),v,v,v,v,v,v),t=w.a9J(A.Hz,"How it works",new C.ewY(w),!0),s=w.ay?A.oA:V.t_
return new B.D(D.bG4,B.A(B.a([u,D.bHN,t,w.a9J(s,"Sound",new C.ewZ(w),!0),w.a9J(A.ea,"Ideas",w.gcp0(),!0),w.a9J(K.wx,"Clear",w.gcb3(w),!0),w.aPS(A.hu,"Show",new C.ex_(w),!0,!0)],x.p),A.m,v,A.e,A.i,0,v,v),v)},
aPS(d,e,f,g,h){var w=null,v=h?A.bx:A.c.j(0.08),u=B.m(14),t=B.m(14),s=B.a([B.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new B.D(Ae.wm,B.aJ(!1,A.a3,!0,u,B.aP(!1,t,!0,B.hb(new B.D(new B.R(8,8,8,8),B.A(s,A.m,w,A.e,A.Q,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.aj),w)},
a9J(d,e,f,g){return this.aPS(d,e,f,g,!1)},
cyw(){var w=null,v=new C.ewT(this),u=A.c.j(0.08)
return B.q(w,B.cg(B.A(B.a([v.$2("START",D.xB),v.$2("CHANGE",D.F4),v.$2("REACT",D.rf)],x.p),A.E,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,A.aL),A.f,w,w,new B.p(I.BK,w,new B.bH(new B.ay(u,1,A.r,-1),A.a1,A.a1,A.a1),w,w,w,A.n),w,w,w,w,D.bB7,w,w,w)},
cyx(d){var w,v,u,t,s=null,r=D.n4.h(0,d)
r.toString
w=B.m(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.L(v.j(0.5),A.r,1)
return new B.D(A.fy,B.aA(s,B.q(s,B.x(B.a([B.X(r.b,v,s,s,s,22),A.cU,B.d(r.a,s,1,A.a2,s,s,s,D.aVy,s,s,s)],x.p),A.m,s,A.e,A.Q,0,A.p),A.f,s,s,new B.p(s,s,t,w,s,new B.a9(A.b7,A.b9,A.x,u,s,s),A.n),s,s,s,s,A.hE,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.ewS(this,d),s,s,s,s,s,s,!1,A.a4),s)}}
C.bj3.prototype={
a4(b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=b2.b,b5=b4.ax,b6=b7.c
J.bo(b6.save())
w=b4.ch
if(b5<w){v=(w-b5)/380
b6.translate(Math.sin(b5*0.09)*9*v,Math.cos(b5*0.13)*7*v)}$.Q()
u=B.K()
u.r=A.c.j(0.05).gp(0)
for(w=b8.b,t=b8.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28)b7.N(new B.o(r,s),1,u)
q=b4.CW
if(b5<q){$.Q()
p=B.K()
p.r=b4.cx.j(0.4*((q-b5)/800)).gp(0)
b7.ar(new B.a1(0,0,0+t,0+w),p)}for(w=b4.b,t=w.length,q=x.O,p=x.v,o=b4.a,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){m=w[n]
l=o.h(0,m.a)
k=o.h(0,m.b)
if(l==null||k==null)continue
j=l.c
i=j.a+36
j=j.b+0
h=k.c
g=h.a-36
h=h.b
f=$.Q()
e=B.a([],p)
d=new B.aF(f.r,A.ai,b3,b3,e)
e.push(new B.aZ(i,j))
d.ab()
a0=Math.max(40,Math.abs(g-i)*0.5)
f=new B.kR(i+a0,j,g-a0,h,g,h)
e.push(f)
e=d.f
if(e!=null)f.ak(e)
d.ab()
a1=D.n4.h(0,l.b).d
a2=D.n4.h(0,k.b).d
f=new B.ao(A.O,A.M,A.R,A.T,A.P)
f.b=A.a9
f.c=3
f.d=A.bw
e=B.a([a1.j(0.55),a2.j(0.55)],q)
h=B.rX(new B.o(i,j),new B.o(g,h))
f.sav(new B.a9(A.a6,A.aa,A.x,e,b3,b3).aK(0,new B.a1(h.a-2,h.b-2,h.c+2,h.d+2)))
b7.af(d,f)}for(w=b4.d,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){a3=w[n]
l=o.h(0,a3.a)
k=o.h(0,a3.b)
if(l==null||k==null)continue
j=a3.c
a4=A.j.E((b5-j)/(a3.d-j),0,1)
j=l.c
i=k.c
a5=C.hz6(new B.o(j.a+36,j.b+0),new B.o(i.a-36,i.b),a4)
$.Q()
i=new B.ao(A.O,A.M,A.R,A.T,A.P)
i.r=A.c.j(0.35).gp(0)
i.y=N.op
b7.N(a5,8,i)
i=new B.ao(A.O,A.M,A.R,A.T,A.P)
i.r=A.c.gp(0)
b7.N(a5,4,i)}a6=b2.d.$0()
if(a6!=null&&o.h(0,a6)!=null){a7=o.h(0,a6).c.a5(0,D.Jt)
a8=b2.e.$0()
w=a8.a
t=a7.a
a0=Math.max(40,Math.abs(w-t)*0.5)
d=new B.aF($.Q().r,A.ai,b3,b3,B.a([],p))
p=a7.b
d.D(new B.aZ(t,p))
j=a8.b
d.D(new B.kR(t+a0,p,w-a0,j,w,j))
j=B.K()
j.b=A.a9
j.c=3
j.r=A.c.j(0.7).gp(0)
b7.af(d,j)
j=B.K()
j.r=A.c.gp(0)
b7.N(a8,7,j)}for(w=b4.f,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){a9=w[n]
p=a9.c
v=A.j.E((b5-p)/700,0,1)
if(b5<p)continue
p=A.dH.aA(0,v)
$.Q()
j=new B.ao(A.O,A.M,A.R,A.T,A.P)
j.b=A.a9
i=1-v
j.c=3.5*i+0.5
j.r=a9.b.j(i*0.9).gp(0)
b7.N(a9.a,14+a9.d*p,j)}for(w=b4.w,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){b0=w[n]
v=A.j.E((b5-b0.d)/600,0,1)
p=b0.a
j=b0.b
i=B.ks(p,j,A.dH.aA(0,v))
i.toString
j=B.ks(p,j,A.dH.aA(0,A.j.E(v-0.35,0,1)))
j.toString
$.Q()
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.c=5
p.d=A.bw
h=b0.c
g=B.a([h.j(0),h],q)
f=B.rX(j,i)
p.sav(new B.a9(A.a6,A.aa,A.x,g,b3,b3).aK(0,new B.a1(f.a-4,f.b-4,f.c+4,f.d+4)))
b7.ah(j,i,p)
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.r=A.c.gp(0)
b7.N(i,6,p)
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.r=h.j(0.5*(1-v)).gp(0)
p.y=A.kV
b7.N(i,12,p)}for(w=b4.e,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){a3=w[n]
v=A.j.E((b5-a3.f)/a3.e,0,1)
p=a3.a
$.Q()
j=new B.ao(A.O,A.M,A.R,A.T,A.P)
j.r=a3.c.j(1-v).gp(0)
b7.N(p,a3.d*(1-0.5*v),j)}for(w=b4.r,t=w.length,n=0;n<w.length;w.length===t||(0,B.J)(w),++n){k=w[n]
p=k.a
$.Q()
j=new B.ao(A.O,A.M,A.R,A.T,A.P)
i=k.c
j.r=i.j(0.35).gp(0)
j.y=A.kV
b7.N(p,11,j)
j=k.a
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.sav(new B.c1(A6.B6,0.5,A.x,b3,0,B.a([A.c,i],q),b3,b3).aK(0,B.bX(k.a,8)))
b7.N(j,8,p)}for(b4=b4.x,w=b4.length,n=0;n<b4.length;b4.length===w||(0,B.J)(b4),++n){a5=b4[n]
v=A.j.E((b5-a5.d)/1000,0,1)
t=1-v
b1=C.bj4(a5.b,26+8*t,a5.c.j(t),b3,b3,A.u)
t=a5.a
q=b1.b
p=q.c
q=q.a.c
b1.a4(b7,new B.o(t.a-p/2,t.b-(40+60*v+q.gba(q)/2)))}for(b4=new B.dq(o,o.r,o.e);b4.C();)b2.ckN(b7,b4.d,b5)
b6.restore()},
ckN(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.n4.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.j.E(1-(f-w)/520,0,1)
u=B.bs(e.c,64,64)
t=B.bl(u,A.ik)
s=t.eQ(A.cA)
$.Q()
r=B.K()
r.r=A.w.j(0.55).gp(0)
r.y=A.me
d.am(s,r)
if(v>0){s=t.cn(6)
r=B.K()
r.r=h.d.j(0.6*v).gp(0)
r.y=A.wn
d.am(s,r)}s=t.eQ(A.cM)
r=B.K()
q=h.d
r.r=B.ar(q,A.w,0.65).gp(0)
d.am(s,r)
r=B.K()
s=B.ar(q,A.c,0.18+0.4*v)
s.toString
p=B.ar(q,A.w,0.35)
p.toString
r.sav(new B.a9(A.b7,A.b9,A.x,B.a([s,p],x.O),j,j).aK(0,u))
d.am(t,r)
r=B.K()
r.b=A.a9
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.am(t,r)
r=h.b
p=e.c
o=C.bj4(B.lz(r.a),30,A.c,r.b,j,A.I)
r=o.b
s=r.c
r=r.a.c
o.a4(d,p.aJ(0,new B.o(s/2,r.gba(r)/2)))
n=C.bj4(h.a,11,A.c,j,j,A.I)
n.a4(d,e.c.a5(0,new B.o(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.aBM[A.o.F(e.d,6)]:j
h=h.c
if(h===D.rf){s=e.c.a5(0,new B.o(0,62))
r=B.K()
r.r=D.aCr[A.o.F(e.d,6)].gp(0)
d.N(s,5,r)}else if(m!=null){l=C.bj4(m,9.5,A.aD,j,j,A.V)
l.a4(d,e.c.a5(0,new B.o(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bj4(m,9.5,A.aD,j,j,A.V)
l.a4(d,e.c.a5(0,new B.o(-l.b.c/2,54)))}if(k.c)return
if(h!==D.xB)k.b4n(d,e.c.aJ(0,D.Jt),q)
k.b4n(d,e.c.a5(0,D.Jt),q)},
b4n(d,e,f){var w
$.Q()
w=B.K()
w.r=A.c3.gp(0)
d.N(e,9,w)
w=B.K()
w.b=A.a9
w.c=2.2
w.r=f.gp(0)
d.N(e,9,w)
w=B.K()
w.r=A.c.gp(0)
d.N(e,3.5,w)},
aE(d){return!0}}
C.aNO.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bC()}}
C.eh.prototype={}
C.tX.prototype={
arX(d,e,f,g){var w=this
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
C.abh.prototype={}
C.aco.prototype={}
C.a5o.prototype={
bgp(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.h8()?-1:1
v=t.ai()*3.141592653589793*2
u=f*(0.3+t.ai())
s.push(new C.abh(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ai()*0.45));++r}},
c7h(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bt(w,new C.bPs())},
al4(d,e,f,g){var w="p"+this.c++,v=new C.tX(w,e,f,g)
v.arX(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bt(this.b,new C.bPD(e))},
a8(d){A.d.a8(this.a)
A.d.a8(this.b)},
cMy(d,e,f,g,h){return A.d.aV(this.b,new C.bPy(e,f,g,h))},
alV(d,e,f,g){var w
if(d===f||this.cMy(0,d,e,f,g))return null
w=new C.aco(d,e,f,g)
this.b.push(w)
return w},
aCt(d){var w
switch(d.b){case"battery":w=d.e
return w===1.5&&d.as<=0.02?0:w
case"solar":return 5*d.f
case"crank":return 4*d.f
case"turbine":return 5*d.f}return 0},
Af(d){var w
switch(d.b){case"battery":w=d.e
if(w<=1.5)return 0.5
if(w<=3)return 0.8
if(w<=4.5)return 1
if(w<=9)return 1.2
return 1.5
case"solar":return 0.1+0.9*d.f
case"crank":return 0.6
case"turbine":return 0.1+0.5*d.f}return 1},
aoF(d){return this.Mf(d)&&!d.x&&d.cx>this.Af(d)},
b8K(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Mf(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
cbp(d){var w,v=d.b
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
case"ammeter":return 0.02}w=D.A2.h(0,v)
if(w!=null)return w.a
return 100},
vH(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c7h(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.U(v).k("Y<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.J)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.Y(v,new C.bPE(a2),t).cJ(0,0,new C.bPF(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.T(x.N,u)
n=new C.bPH(o)
m=B.a([],x.t)
l=new C.bPG(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.J)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.J)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.T(u,u)
f=new C.bPJ(g,l,n)
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
a2.b8G(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.Af(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b8G(e,d,w,!0)
a2.bRh(a4)},
b8G(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.T(x.N,b3),b5=new C.bPu(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bPt(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.J)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bPw(B.T(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.J)(w),++u){t=w[u]
m.$2(t,0)
m.$2(t,1)}b3=x.i
l=B.bZ(b7,0,!1,b3)
v=x.W
k=B.T(v,b3)
j=B.T(v,b3)
v=b2.y
i=0.3/b9
q=x.b
h=b7<0
g="Length must be a non-negative integer: "+b7
f=0
for(;;){if(!(f<(c0?10:1)))break
if(h)B.bi(B.dL(g,null))
e=B.a(new Array(b7),q)
for(d=0;d<b7;++d)e[d]=B.bZ(b7,0,!1,b3)
a0=B.bZ(b7,0,!1,b3)
k.a8(0)
j.a8(0)
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.J)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b8K(t)*(1+t.CW))
a4=b2.aCt(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.cbp(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bUB(e,a0,b8)
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
bUB(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
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
bRh(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.J)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aCt(o)/a1.b8K(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.Af(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bJj(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bgp(o,3,260)
if(a1.w<=0){a1.w=0.35
m=a1.e
if(m!=null)m.$2("short",o)}if(o.Q>1.4)a1.ul(o,"The power source was joined straight back to itself with nothing using the power (a short circuit), so it overheated and burnt out. Always put a part such as a bulb between the + and the \u2212.")}else o.Q=Math.max(0,l-s)}m=o.dy
l=o.fr
j=Math.abs(m*l)
i=Math.abs(l)
if((n==="buck"||n==="regulator")&&!o.x){m=n==="regulator"
h=m?5:o.e
if(i<0.002)o.cy=A.j.E(o.db-h,0,24)
else o.cy=A.j.E(o.cy+(o.dx-h)*0.7,0,24)
l=o.db
g=l>h+0.2&&Math.abs(o.dx-h)<0.35?1:0
o.fx=g
o.ax=g>0?o.ax+a2:0
if(l>26)a1.ul(o,"The "+$.qB().h(0,n).b+" got "+A.j.ad(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.ul(o,"More than 1.5 amps went through the "+$.qB().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.ul(o,"The regulator had to turn "+A.j.ad(o.cy,1)+" V into heat while "+A.j.V(i*1000)+" mA flowed. That is "+A.j.ad(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.ul(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.A2.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qB().h(0,n).b
l=f.b
l=l===A.j.iY(l)?""+A.j.V(l):B.w(l)
g=f.c
g=g===A.j.iY(g)?""+A.j.V(g):B.w(g)
a1.ul(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.j.ad(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.fac.q(0,n)){m=o.fx>0?A.j.E((Math.abs(o.dy)-1)/6,0.15,1.4):0
o.fx=m
l=o.y
g=n==="fan"?30:26
o.y=l+m*a2*g}}switch(n){case"bulb":o.fx=o.x?0:A.j.E(j/0.9,0,1)
if(!o.x&&j>2.4)a1.ul(o,"The bulb got "+A.j.ad(Math.abs(o.dy),1)+" V but it is made for about 3 V, so its thin wire melted. Add a resistor or use a smaller battery.")
break
case"led":o.fx=o.x?0:A.j.E((i-0.001)/0.02,0,1)
if(!o.x&&i>0.045)a1.ul(o,"The LED had "+A.j.V(i*1000)+" milliamps going through it, far too much (it can take about 20). An LED always needs a resistor in the loop.")
break
case"heater":o.fx=A.j.E(j/14,0,1)
break
case"motor":n=A.j.E(i/0.5,0,1.6)
o.fx=n
o.y=o.y+n*a2*24
break
case"buzzer":o.fx=A.j.E(i/0.05,0,1)
break
case"ammeter":if(!o.x&&i>1.5)a1.ul(o,"The ammeter was wired straight across a power source, so far too much current went through it. An ammeter must go in the loop one after another with a part, never straight across a battery.")
break
case"fuse":o.fx=o.x?0:A.j.E(i/1,0,1)
if(!o.x&&i>1)a1.ul(o,"More than 1 amp flowed, so the fuse wire melted. That is exactly what a fuse is for: it breaks the loop to protect the other parts.")
break
case"resistor":if(!o.x&&j>0.8)a1.ul(o,"The resistor had to hold back too much power and got too hot. Use a bigger resistor or a smaller battery.")
break
case"capacitor":o.fx=A.j.E(Math.abs(o.z)/9,0,1)
if(!o.x&&Math.abs(o.z)>13)a1.ul(o,"The capacitor was charged to "+A.j.ad(Math.abs(o.z),1)+" V, more than it can hold.")
break
case"crank":o.y=o.y+o.f*a2*22
break
case"turbine":o.y=o.y+o.f*a2*14
break
case"solar":o.fx=o.f
break}}},
bJj(d){return A.d.aV(this.a,new C.bPr(d))},
ul(d,e){var w
d.x=!0
d.ay=e
this.bgp(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bl3(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a8(0)},
aIO(d){var w=d.b
return D.aSq.q(0,w)||D.A2.al(0,w)||w==="buck"||w==="regulator"},
bhT(d){var w,v=!0
if(!this.Mf(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.A2.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
Vw(d,e){var w=this.b
return new B.Y(w,new C.bPL(d,e),B.U(w).k("Y<1>")).gI(0)},
tM(d){var w,v
if(d.x)return!1
w=d.b
if(D.A2.al(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bfW(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qB().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aIO(d)||i.tM(d))return null
w=i.Vw(d,0)
v=i.Vw(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.U(u).k("Y<1>")
s=B.C(new B.Y(u,i.gcV8(),t),t.k("M.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.j.iY(r)?""+A.j.V(r):B.w(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.j.ad(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.A2.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.Ms("battery"),o=J.aU(t.a),t=new B.eB(o,t.b);t.C();){n=o.gR(o)
if(n.e===1.5&&n.as<=0.02&&i.Vw(n,0)+i.Vw(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.Ms("switch"),o=J.aU(t.a),t=new B.eB(o,t.b);t.C();)if(!o.gR(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qB().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.Af(k))return"The "+$.qB().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.j.ad(k.cx,2)+" amps, but it can only give about "+A.j.ad(i.Af(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.aV(u,new C.bPz(i,d))
h=q.b
h=h===A.j.iY(h)?""+A.j.V(h):B.w(h)
u=A.j.ad(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.j.ad(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.j.ad(Math.abs(d.dy),1)+" V). Try a bigger battery."},
Ms(d){var w=this.a
return new B.Y(w,new C.bPC(d),B.U(w).k("Y<1>"))},
aIp(d){return this.Ms(d).aV(0,new C.bPB(0.35))},
qb(d,e){return A.d.aV(this.a,new C.bPA(e))}}
C.ajM.prototype={
a4(c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8=c3.a,b9=c3.b,c0=0+b8,c1=0+b9
$.Q()
w=B.K()
w.r=F.y9.gp(0)
c2.ar(new B.a1(0,0,c0,c1),w)
v=B.K()
v.r=A.c.j(0.06).gp(0)
for(u=12;u<b8;u+=24)for(t=12;t<b9;t+=24)c2.N(new B.o(u,t),1.1,v)
for(w=b6.b,s=w.b,r=s.length,q=b6.f,p=0;p<s.length;s.length===r||(0,B.J)(s),++p){o=s[p]
n=o.a
m=n.c
l=o.b===0?-1:1
k=D.mr.al(0,n.b)?(n.ch-1)*38:0
n=n.d
j=o.c
i=j.c
h=o.d===0?-1:1
g=D.mr.al(0,j.b)?(j.ch-1)*38:0
b6.cJf(c2,new B.o(m*b8+l*(42+k),n*b9),new B.o(i*b8+h*(42+g),j.d*b9),o,o===q)}s=b6.d
if(s!=null&&b6.e!=null){f=C.hMw(s.a,s.b,c3)
s=b6.e
s.toString
$.Q()
r=B.K()
r.r=A.ab.gp(0)
r.c=3
r.d=A.bw
c2.ah(f,s,r)}for(s=w.a,r=s.length,q=b6.c,n=c2.c,m=b6.r,l=x.v,p=0;p<s.length;s.length===r||(0,B.J)(s),++p){e=s[p]
k=e.c*b8
j=e.d*b9
if(e.Q>0){i=Math.sin(w.d*30)
$.Q()
h=new B.ao(A.O,A.M,A.R,A.T,A.P)
h.r=F.Mu.j(A.j.E(e.Q*0.45,0,0.6)).gp(0)
h.y=A.wn
c2.N(new B.o(k,j),46+14*i,h)}d=m.h(0,e.a)
if(d==null)d=1
J.bo(n.save())
n.translate(k,j)
i=A.j.E(A.l8.aA(0,A.j.E(d,0,1)),0.01,1.4)
n.scale(i,i)
b6.clM(c2,e,e===q)
n.restore()
i=e.b
if((i==="battery"||i==="solar"||i==="crank"||i==="turbine")&&!e.x&&e.cx>w.Af(e)){h=k+0
g=j+-40
a0=Math.sin(w.d*10)
a1=$.Q().r
a2=B.a([],l)
a3=new B.aF(a1,A.ai,b7,b7,a2)
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
a8=new B.bu()
a2.push(a8)
a2=a3.f
if(a2!=null)a8.ak(a2)
a3.ab()
a2=new B.ao(A.O,A.M,A.R,A.T,A.P)
a2.r=A.ay.j(0.65+0.35*a0).gp(0)
c2.af(a3,a2)
a2=B.a([],l)
a1=new B.aF(a1,A.ai,b7,b7,a2)
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
a0=new B.bu()
a2.push(a0)
a2=a1.f
if(a2!=null)a0.ak(a2)
a1.ab()
a0=new B.ao(A.O,A.M,A.R,A.T,A.P)
a0.b=A.a9
a0.c=1.6
a0.r=A.c.gp(0)
c2.af(a1,a0)
b0=new B.iG(new B.en("!",b7,b7,A.cJ,b7,b7,b7,b7,b7,b7,new B.G(!0,A.c,b7,b7,b7,b7,14,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bX,new B.jg(1),b7,b7,b7,b7,A.bY,b7,A.cr)
b0.e5()
b0.a4(c2,new B.o(h+-3,g+-8))}if(!e.x)h=(D.aSq.q(0,i)||D.A2.al(0,i)||i==="buck"||i==="regulator")&&!w.tM(e)&&w.Vw(e,0)+w.Vw(e,1)>0
else h=!1
if(h){k+=0
j+=-40
$.Q()
h=new B.ao(A.O,A.M,A.R,A.T,A.P)
h.r=A.aw.gp(0)
c2.N(new B.o(k,j),10,h)
b0=new B.iG(new B.en("!",b7,b7,A.cJ,b7,b7,b7,b7,b7,b7,new B.G(!0,A.w,b7,b7,b7,b7,14,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bX,new B.jg(1),b7,b7,b7,b7,A.bY,b7,A.cr)
b0.e5()
b0.a4(c2,new B.o(k+-3,j+-8))}for(b1=0;b1<2;++b1){k=e.c
j=b1===0
h=j?-1:1
g=D.mr.al(0,i)?(e.ch-1)*38:0
g=k*b8+h*(42+g)
h=e.d*b9
b0=new B.o(g,h)
$.Q()
k=new B.ao(A.O,A.M,A.R,A.T,A.P)
k.r=F.y9.gp(0)
c2.N(b0,7,k)
k=new B.ao(A.O,A.M,A.R,A.T,A.P)
k.b=A.a9
k.c=2.4
k.r=(j&&w.bhT(e)?A.c0:A.ab).gp(0)
c2.N(b0,6,k)
if(j&&w.bhT(e)){b0=new B.iG(new B.en("+",b7,b7,A.cJ,b7,b7,b7,b7,b7,b7,new B.G(!0,A.c0,b7,b7,b7,b7,13,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bX,new B.jg(1),b7,b7,b7,b7,A.bY,b7,A.cr)
b0.e5()
b0.a4(c2,new B.o(g+-4,h+-22))}}}for(r=w.f,q=r.length,p=0;p<r.length;r.length===q||(0,B.J)(r),++p){b2=r[p]
n=b2.a*b8+b2.c
m=b2.b*b9+b2.d
b3=new B.o(n,m)
b4=A.j.E(b2.r/0.8,0,1)
l=B.ar(M.Nb,F.ZQ,b4)
l.toString
k=b2.f
$.Q()
j=new B.ao(A.O,A.M,A.R,A.T,A.P)
j.r=l.gp(0)
j.c=2.4
j.d=A.bw
c2.ah(b3,new B.o(n-b2.e*0.035,m-k*0.035),j)
j=new B.ao(A.O,A.M,A.R,A.T,A.P)
j.r=l.j(0.35*b4).gp(0)
j.y=A.H2
c2.N(b3,4.5*b4+1,j)}if(A.d.aV(s,new C.bJQ())){b5=A.d.cJ(s,0,new C.bJR())
$.Q()
b9=B.K()
b9.r=D.bgk.j(0.05+0.09*b5*(0.5+0.5*Math.sin(w.d*22))).gp(0)
c2.ar(new B.a1(0,0,c0,c1),b9)
b0=B.fq(b7,A.cr,b7,b7,b7,D.fll,A.a5,A.bX,b7,A.dz,A.bY)
b0.o5(b8-24)
b0.a4(c2,new B.o(12,10))}},
qR(d,e,f,g,h){var w=null,v=B.fq(w,A.cr,w,w,w,B.cP(w,w,w,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a5,A.bX,w,A.dz,A.bY)
v.e5()
v.a4(d,f)},
cJf(d,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.aF($.Q().r,A.ai,null,null,B.a([],x.v))
e.D(new B.aZ(a0.a,a0.b))
w=C.hEy(a0,a1,a2)
e.D(new B.c5(w.a,w.b,a1.a,a1.b))
v=a2.a
u=Math.abs(v.fr)
t=a2.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ar(A.aU,F.Mu,A.j.E(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ar(A.aI,A.aU,A.j.E(r*1.2,0,1))
u.toString
o=u}else o=A.bq
u=B.K()
u.b=A.a9
u.c=a3?7:5
u.d=A.bw
s=a3?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
d.af(e,u)
u=B.K()
u.b=A.a9
u.c=2.4
u.d=A.bw
u.r=(a3?A.c:o).gp(0)
d.af(e,u)
if(q){n=new B.TN(new B.ru(B.xH(e),!1,B.a([],x.R))).gH(0)
m=40+A.j.E(r*120,0,160)
l=v.fr+t.fr>=0?1:-1
v=n.a
u=n.b
t=v.e
s=this.b
k=0
for(;;){v.iw()
j=t[u].b
j===$&&B.c()
if(!(k<j.a.length()/22))break
j=s.d
v.iw()
i=t[u].b
i===$&&B.c()
i=A.j.F(k*22+j*m*l,i.a.length())
v.iw()
j=t[u].b
j===$&&B.c()
j=j.a.length()
v.iw()
h=t[u].b
h===$&&B.c()
g=A.j.F(i+j,h.a.length())
v.iw()
f=t[u].Dd(g)
j=new B.ao(A.O,A.M,A.R,A.T,A.P)
j.r=A.c.gp(0)
d.N(f.a,2.6,j);++k}}},
PC(d,e,f,g){var w,v,u,t
$.Q()
w=B.K()
v=g?A.b7:A.a6
u=g?A.b9:A.aa
t=B.ar(e,A.w,0.3)
t.toString
w.sav(new B.a9(v,u,A.x,B.a([e,f,e,t],x.O),A.Iq,null).aK(0,d))
return w},
ay_(d,e,f){return this.PC(d,e,f,!0)},
c6R(d,e){return this.PC(d,A.bq,A.iB,e)},
aiH(d,e){var w,v,u
$.Q()
w=B.K()
w.sav(D.aQC.aK(0,B.bX(e,4.2)))
d.N(e,4.2,w)
w=e.a5(0,D.emV)
v=e.a5(0,D.en3)
u=B.K()
u.r=A.ee.gp(0)
u.c=1.2
d.ah(w,v,u)},
clM(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.Q(),c0=B.K()
c0.sav(D.c5k.aK(0,D.f6q))
c0.c=3.4
c0.d=A.bw
w=B.K()
w.r=A.w.j(0.45).gp(0)
w.y=N.op
c1.bZ(D.f6e,w)
if(c3){w=B.bl(D.f6o,A.jJ)
v=B.K()
v.r=A.c.j(0.14).gp(0)
c1.am(w,v)}u=C.hjZ(c2)
c1.ah(new B.o(-u,0),D.eow,c0)
c1.ah(D.elB,new B.o(u,0),c0)
t=c2.x
w=c2.b
s=D.mr.al(0,w)&&c2.ch!==1
if(s){J.bo(c1.c.save())
c1.bU(0,c2.ch)}switch(w){case"battery":b3.bG4(c1,c2)
break
case"solar":r=B.bl(D.f6h,A.iw)
c1.am(r,b3.PC(new B.a1(r.a,r.b,r.c,r.d),A.df,A.bP,!1))
b9=B.K()
w=B.ar(D.bkd,A.d5,0.25+0.55*c2.f)
w.toString
v=B.ar(D.btr,A.mP,0.3+0.4*c2.f)
v.toString
b9.sav(new B.a9(A.aA,A.aF,A.x,B.a([w,v],x.O),b4,b4).aK(0,D.a9g))
c1.ar(D.a9g,b9)
q=B.K()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(p=1;p<6;++p){b9=-34+p*68/6
c1.ah(new B.o(b9,-18),new B.o(b9,18),q)}for(p=1;p<4;++p){b9=-18+p*9
c1.ah(new B.o(-34,b9),new B.o(34,b9),q)}for(p=0;p<6;++p){b9=-34+(p+0.5)*68/6
$.Q()
w=new B.ao(A.O,A.M,A.R,A.T,A.P)
w.r=A.ct.j(0.5).gp(0)
w.c=0.6
c1.ah(new B.o(b9,-18),new B.o(b9,18),w)}b9=new B.aF($.Q().r,A.ai,b4,b4,B.a([],x.v))
b9.D(new B.aZ(-34,18))
b9.D(new B.aq(-6+40*c2.f,-18))
b9.D(new B.aq(4+40*c2.f,-18))
b9.D(new B.aq(-24,18))
b9.D(new B.bu())
w=B.K()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.af(b9,w)
w=c2.f
b9=B.K()
b9.r=A.dy.j(0.9).gp(0)
c1.N(D.elF,4+4*w,b9)
break
case"crank":o=B.bl(D.f62,A.fI)
c1.am(o,b3.ay_(new B.a1(o.a,o.b,o.c,o.d),A.bv,A.bK))
b9=B.K()
b9.sav(D.aQD.aK(0,B.bX(A.H,12)))
c1.N(A.H,12,b9)
n=new B.o(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=B.K()
b9.r=A.ct.gp(0)
b9.c=5
b9.d=A.bw
c1.ah(A.H,n,b9)
b9=B.K()
b9.sav(D.ey_.aK(0,B.bX(n,7)))
c1.N(n,7,b9)
b3.aiH(c1,D.eoo)
b3.aiH(c1,D.elq)
break
case"turbine":b9=b9.r
w=x.v
v=new B.aF(b9,A.ai,b4,b4,B.a([],w))
v.D(new B.aZ(-3,24))
v.D(new B.aq(3,24))
v.D(new B.aq(1.5,0))
v.D(new B.aq(-1.5,0))
v.D(new B.bu())
m=B.K()
m.r=A.bP.gp(0)
c1.af(v,m)
for(v=c1.c,l=0;l<3;++l){m=c2.y
J.bo(v.save())
v.rotate((m+l*2.094)*180/3.141592653589793,0,0)
m=B.a([],w)
k=new B.aF(b9,A.ai,b4,b4,m)
m.push(new B.aZ(0,-2))
k.ab()
j=new B.c5(6,-14,2,-30)
m.push(j)
i=k.f
if(i!=null)j.ak(i)
k.ab()
j=new B.c5(-2,-14,0,-2)
m.push(j)
i=k.f
if(i!=null)j.ak(i)
k.ab()
j=new B.bu()
m.push(j)
m=k.f
if(m!=null)j.ak(m)
k.ab()
m=new B.ao(A.O,A.M,A.R,A.T,A.P)
m.r=A.c.gp(0)
c1.af(k,m)
v.restore()}b9=B.K()
b9.sav(D.exJ.aK(0,B.bX(A.H,4.5)))
c1.N(A.H,4.5,b9)
break
case"switch":o=B.bl(D.f69,A.mu)
b9=B.K()
b9.sav(D.asG.aK(0,new B.a1(o.a,o.b,o.c,o.d)))
c1.am(o,b9)
b3.aiH(c1,D.TU)
b3.aiH(c1,D.aLo)
h=c2.w?D.aLo:H.aLf
b9=B.K()
b9.r=A.as.gp(0)
b9.c=6
b9.d=A.bw
c1.ah(D.TU,h,b9)
b9=B.K()
b9.r=(c2.w?A.b5:A.bP).gp(0)
b9.c=4
b9.d=A.bw
c1.ah(D.TU,h,b9)
b9=B.ks(D.TU,h,0.85)
b9.toString
w=B.K()
w.r=A.ay.gp(0)
c1.N(b9,5,w)
break
case"fuse":g=B.bl(D.aRk,D.aQH)
b9=B.K()
b9.r=A.fE.j(0.25).gp(0)
c1.am(g,b9)
b9=B.K()
b9.b=A.a9
b9.c=1.4
b9.r=A.aD.gp(0)
c1.am(g,b9)
if(!t){b9=B.K()
b9.c=1.6
b9.r=B.ar(A.bP,A.cF,c2.fx).gp(0)
c1.ah(D.aLI,D.aLm,b9)}else{b9=B.K()
b9.c=1.6
b9.r=A.bW.gp(0)
c1.ah(D.aLI,D.eoS,b9)
b9=B.K()
b9.c=1.6
b9.r=A.bW.gp(0)
c1.ah(F.ems,D.aLm,b9)
b9=B.K()
b9.r=A.dO.gp(0)
c1.N(A.H,6,b9)}for(f=0;f<2;++f){e=B.bs(new B.o(M.hK[f]*22,0),20,9)
c1.am(B.bl(e,A.hO),b3.PC(e,A.cZ,A.o7,!0))}break
case"pot":b9=B.K()
b9.sav(D.exS.aK(0,B.bX(A.H,21)))
c1.N(A.H,21,b9)
for(l=0;l<=10;++l){d=2.356194490192345+l*3.141592653589793*1.5/10
b9=Math.cos(d)
w=Math.sin(d)
v=Math.cos(d)
m=Math.sin(d)
k=new B.ao(A.O,A.M,A.R,A.T,A.P)
k.r=A.aD.gp(0)
k.c=1.2
c1.ah(new B.o(b9*18,w*18),new B.o(v*22,m*22),k)}b9=B.K()
b9.sav(D.exH.aK(0,B.bX(A.H,13)))
c1.N(A.H,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
m=Math.sin(a0)
k=B.K()
k.r=A.aU.gp(0)
k.c=3
k.d=A.bw
c1.ah(new B.o(b9*3,w*3),new B.o(v*12,m*12),k)
break
case"resistor":a1=B.bl(D.aRk,D.aQH)
b9=B.K()
b9.sav(D.c8A.aK(0,new B.a1(a1.a,a1.b,a1.c,a1.d)))
c1.am(a1,b9)
b9=x.O
a2=B.H([47,B.a([B.b0(b5),B.b0(b6),A.w],b9),100,B.a([B.b0(b7),A.w,B.b0(b7)],b9),220,B.a([B.b0(b8),B.b0(b8),B.b0(b7)],b9),470,B.a([B.b0(b5),B.b0(b6),B.b0(b7)],b9),1000,B.a([B.b0(b7),A.w,B.b0(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(p=0;p<3;++p){b9=-14+p*9
w=new B.ao(A.O,A.M,A.R,A.T,A.P)
w.r=a3[p].gp(0)
c1.ar(new B.a1(b9,-9,b9+4.5,9),w)}b9=B.K()
b9.r=A.aU.gp(0)
c1.ar(D.f6C,b9)
b9=c2.r
b3.qR(c1,b9>=1000?"1k\u03a9":""+A.j.V(b9)+"\u03a9",D.enR,A.ab,10)
break
case"bulb":w=c2.fx
if(w>0){v=B.K()
v.r=A.dy.j(0.55*w).gp(0)
v.y=A.wn
c1.N(H.vl,34,v)}o=B.bs(D.ekk,12,18)
c1.am(B.bl(o,A.hO),b3.PC(o,A.bq,A.e7,!0))
for(p=0;p<3;++p){w=13+p*3.5
v=new B.ao(A.O,A.M,A.R,A.T,A.P)
v.r=A.dq.gp(0)
v.c=1
c1.ah(new B.o(-9,w),new B.o(9,w),v)}w=B.K()
if(t)v=A.Mk
else{v=B.ar(A.e7,A.i4,c2.fx)
m=c2.fx
v=v.j(0.25+0.7*m)}if(t)m=A.G0
else{m=B.ar(A.df,A.dy,c2.fx)
m.toString}w.sav(new B.c1(A.tI,0.5,A.x,b4,0,B.a([v,m.j(0.18+0.5*c2.fx)],x.O),b4,b4).aK(0,B.bX(A.ti,17)))
c1.N(A.ti,17,w)
w=B.K()
w.b=A.a9
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.N(A.ti,17,w)
b9=b9.r
w=x.v
m=new B.aF(b9,A.ai,b4,b4,B.a([],w))
m.D(new B.aZ(-9,-12))
m.D(new B.c5(-12,-4,-9,0))
v=B.K()
v.b=A.a9
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.af(m,v)
v=B.K()
v.r=A.d0.gp(0)
v.c=1.4
c1.ah(D.eoM,D.eoO,v)
v=B.K()
v.r=A.d0.gp(0)
v.c=1.4
c1.ah(D.eml,D.emo,v)
w=B.a([],w)
a4=new B.aF(b9,A.ai,b4,b4,w)
a4.D(new B.aZ(-4,-2))
for(l=0;l<6;l=a5){a5=l+1
b9=(l&1)===0?-6:1
b9=new B.aq(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.ak(v)
a4.ab()}$.Q()
b9=B.K()
b9.b=A.a9
b9.c=1.8
if(t)w=A.aT
else{w=B.ar(A.df,D.ble,c2.fx)
w.toString}b9.r=w.gp(0)
c1.af(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=B.K()
v.r=A.ay.j(0.6*w).gp(0)
v.y=D.bHB
c1.N(A.ti,30,v)}w=B.K()
w.r=A.e7.gp(0)
w.c=2.4
c1.ah(D.eoU,D.eoT,w)
w=B.K()
w.r=A.e7.gp(0)
w.c=2.4
c1.ah(D.emu,D.emt,w)
b9=b9.r
w=x.v
a6=new B.aF(b9,A.ai,b4,b4,B.a([],w))
a6.D(new B.aZ(-12,8))
a6.D(new B.aq(-12,-6))
a6.D(new B.c5(0,-26,12,-6))
a6.D(new B.aq(12,8))
a6.D(new B.bu())
v=B.K()
if(t)m=A.iG
else{m=B.ar(A.et,D.bmY,c2.fx)
m.toString}if(t)k=A.kQ
else{k=B.ar(A.ko,A.ay,c2.fx)
k.toString}v.sav(new B.a9(A.aA,A.aF,A.x,B.a([m,k],x.O),b4,b4).aK(0,D.f5u))
c1.af(a6,v)
v=B.K()
v.b=A.a9
v.c=1.2
v.r=A.jV.gp(0)
c1.af(a6,v)
v=B.K()
v.r=A.ep.gp(0)
c1.ar(D.f5A,v)
w=new B.aF(b9,A.ai,b4,b4,B.a([],w))
w.D(new B.aZ(-7,-4))
w.D(new B.c5(-6,-12,0,-15))
b9=B.K()
b9.b=A.a9
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.af(w,b9)
break
case"motor":a7=new B.a1(-28,-14,20,14)
c1.am(B.bl(a7,A.hP),b3.ay_(a7,A.am,A.aO))
b9=B.K()
b9.r=A.cu.gp(0)
c1.ar(D.f53,b9)
b9=B.K()
b9.r=A.ct.gp(0)
c1.ar(D.f55,b9)
b9=c1.c
J.bo(b9.save())
b9.translate(31,0)
for(l=0;l<3;++l){J.bo(b9.save())
b9.rotate((c2.y+l*2.094)*180/3.141592653589793,0,0)
w=B.bs(H.aLa,15,7)
v=new B.ao(A.O,A.M,A.R,A.T,A.P)
v.r=A.cF.j(0.9).gp(0)
c1.bZ(w,v)
b9.restore()}w=B.K()
w.r=A.as.gp(0)
c1.N(A.H,3,w)
b9.restore()
b3.qR(c1,"M",D.eon,A.as,14)
break
case"buzzer":a8=B.bs(A.H,42,42)
b9=B.K()
b9.sav(D.exW.aK(0,a8))
c1.bZ(a8,b9)
b9=B.K()
b9.r=A.w.gp(0)
c1.N(A.H,6,b9)
b9=B.K()
b9.b=A.a9
b9.c=1.4
b9.r=A.aV.gp(0)
c1.N(A.H,6,b9)
b3.qR(c1,"+",D.eog,A.ab,12)
for(b9=b3.b,l=1;l<=3;++l){w=c2.fx
v=w>0?A.j.F(b9.d*14,5):0
v=B.bX(A.H,24+l*5+v)
m=new B.ao(A.O,A.M,A.R,A.T,A.P)
m.b=A.a9
m.c=2
m.r=A.bV.j(w*(1-l*0.22)).gp(0)
c1.cC(v,-0.7,1.4,!1,m)}break
case"heater":o=B.bl(D.f65,A.hP)
w=B.K()
w.sav(D.c6h.aK(0,new B.a1(o.a,o.b,o.c,o.d)))
c1.am(o,w)
w=B.a([],x.v)
a9=new B.aF(b9.r,A.ai,b4,b4,w)
a9.D(new B.aZ(-24,0))
for(l=0;l<8;l=a5){b9=(l&1)===0?-10:10
a5=l+1
b9=new B.c5(-24+l*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.ak(v)
a9.ab()}b9=c2.fx
if(b9>0.1){$.Q()
w=B.K()
w.b=A.a9
w.c=10
w.r=D.blY.j(0.5*b9).gp(0)
w.y=A.kV
c1.af(a9,w)}$.Q()
b9=B.K()
b9.b=A.a9
b9.c=3.2
b9.d=A.bw
b9.r=B.ar(A.m3,Aa.yh,c2.fx).gp(0)
c1.af(a9,b9)
break
case"capacitor":a7=new B.a1(-16,-22,16,18)
b9=B.bl(a7,A.hP)
w=B.K()
w.sav(D.c5c.aK(0,a7))
c1.am(b9,w)
w=B.K()
w.r=A.bP.gp(0)
c1.ar(D.f5J,w)
for(p=0;p<4;++p){b0=new B.iG(new B.en("\u2212",b4,b4,A.cJ,b4,b4,b4,b4,b4,b4,new B.G(!0,A.as,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a5,A.bX,new B.jg(1),b4,b4,b4,b4,A.bY,b4,A.cr)
b0.e5()
b0.a4(c1,new B.o(-14,-18+p*9))}b1=new B.a1(-16,-24,16,-17)
c1.am(B.bl(b1,A.hO),b3.c6R(b1,!1))
b9=38*c2.fx
w=18-b9
$.Q()
v=B.K()
v.r=A.b5.j(0.5).gp(0)
c1.ar(new B.a1(-3,w,11,w+b9),v)
b3.qR(c1,"1F",H.vl,A.c,11)
break
case"radio":a1=B.bl(D.a9g,A.fI)
b9=B.K()
b9.sav(D.c8Q.aK(0,new B.a1(a1.a,a1.b,a1.c,a1.d)))
c1.am(a1,b9)
b9=B.K()
b9.b=A.a9
b9.c=1.4
b9.r=A.o7.j(0.6).gp(0)
c1.am(a1,b9)
b9=B.bl(D.f66,A.iw)
w=B.K()
w.r=A.dT.gp(0)
c1.am(b9,w)
for(p=0;p<6;++p){b9=-10+p*4.4
w=new B.ao(A.O,A.M,A.R,A.T,A.P)
w.r=A.m3.gp(0)
w.c=1.4
c1.ah(new B.o(-27,b9),new B.o(-3,b9),w)}b9=B.K()
b9.r=(c2.fx>0?A.fY:A.oa).gp(0)
c1.ar(D.f5a,b9)
if(c2.fx>0){b9=8+A.j.F(b3.b.d*7,18)
w=B.K()
w.r=A.bC.gp(0)
w.c=1.6
c1.ah(new B.o(b9,-13),new B.o(b9,-3),w)}b9=B.K()
b9.sav(D.aQD.aK(0,B.bX(D.a8d,6)))
c1.N(D.a8d,6,b9)
b9=B.K()
b9.r=A.o7.gp(0)
c1.N(D.elA,4,b9)
b9=B.K()
b9.r=A.e7.gp(0)
b9.c=1.8
c1.ah(D.elv,D.aLt,b9)
if(c2.fx>0)for(b9=b3.b,l=1;l<=2;++l){w=B.bX(D.aLt,4+l*5+A.j.F(b9.d*8,5))
v=new B.ao(A.O,A.M,A.R,A.T,A.P)
v.b=A.a9
v.c=1.4
v.r=A.np.j(0.7).gp(0)
c1.cC(w,-2.4,1.6,!1,v)}break
case"tv":w=B.bl(D.f6g,A.hP)
v=B.K()
v.r=M.nv.gp(0)
c1.am(w,v)
b2=B.bl(D.f6d,A.hO)
if(c2.fx>0&&!c2.x){b9=c1.c
J.bo(b9.save())
b9.clipRRect(B.nO(b2),$.no(),!0)
b9.translate(-33,-21)
L.hfW(c1,D.fd2,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=B.K()
b9.r=A.b5.gp(0)
c1.N(D.elM,1.6,b9)}else{w=B.K()
w.r=D.w6.gp(0)
c1.am(b2,w)
b9=new B.aF(b9.r,A.ai,b4,b4,B.a([],x.v))
b9.D(new B.aZ(-33,-21))
b9.D(new B.aq(-10,-21))
b9.D(new B.aq(-33,0))
b9.D(new B.bu())
w=B.K()
w.r=A.c.j(0.05).gp(0)
c1.af(b9,w)}b9=B.K()
b9.r=A.bv.gp(0)
c1.ar(D.f5z,b9)
break}C.iq3(c1,c2,b3.b.d,b3.gcbq())
if(t)b3.qR(c1,"\u2716",D.eoX,A.ay,14)
if(s)c1.c.restore()},
bG4(d,e){var w,v,u,t,s,r,q,p,o=this,n=e.e
if(n<=4.5){w=new B.a1(-28,-13,28,13)
d.am(B.bl(w,A.mu),o.ay_(w,A.df,A.jj))
v=new B.a1(-22,-13,22,13)
$.Q()
u=B.K()
u.sav(D.asz.aK(0,v))
d.ar(v,u)
u=B.K()
u.r=A.dW.gp(0)
d.ar(D.f5T,u)
t=new B.a1(28,-5,34,5)
d.am(B.bl(t,A.hx),o.PC(t,A.df,A.iB,!0))
o.qR(d,"+",D.elb,A.aU,11)
o.qR(d,"\u2212",D.eop,A.ab,11)
o.qR(d,B.w(n===A.j.iY(n)?A.j.V(n):n)+"V",D.eo5,A.aU,13)
if(n===1.5){u=B.K()
u.r=A.bA.gp(0)
d.ar(D.f5S,u)
u=e.as
s=B.K()
s.r=B.ar(A.ay,A.b5,u).gp(0)
d.ar(new B.a1(-22,14,-22+44*u,18),s)
if(e.as<=0.02)o.qR(d,"FLAT",D.enQ,A.c0,9)}if(n>2){u=B.K()
u.r=A.aV.gp(0)
u.c=1
d.ah(D.ekt,D.aL2,u)
o.qR(d,n>3?"3 cells":"2 cells",D.eo4,A.aD,8)}}else if(n<=9){r=new B.a1(-22,-17,22,17)
u=B.bl(r,A.mu)
$.Q()
s=B.K()
s.sav(D.c8o.aK(0,r))
d.am(u,s)
s=B.K()
s.r=A.cX.gp(0)
d.ar(D.f5U,s)
for(q=0;q<2;++q){p=F.aC9[q]
u=p<0?5:3.6
s=new B.ao(A.O,A.M,A.R,A.T,A.P)
s.sav(D.aQC.aK(0,B.bX(new B.o(p,-18),5)))
d.N(new B.o(p,-18),u,s)}o.qR(d,"9V",D.enY,A.c,16)}else{r=new B.a1(-34,-16,34,16)
u=B.bl(r,A.iw)
$.Q()
s=B.K()
s.sav(D.asz.aK(0,r))
d.am(u,s)
s=B.K()
s.r=A.bk.gp(0)
d.ar(D.f6f,s)
for(q=0;q<2;++q){u=B.bl(B.bs(new B.o(F.Sv[q],-20),8,10),A.hx)
s=new B.ao(A.O,A.M,A.R,A.T,A.P)
s.r=A.ct.gp(0)
d.am(u,s)}o.qR(d,"+",D.elk,A.ay,10)
o.qR(d,"12V",D.eo1,A.as,15)}},
aE(d){return!0}}
C.mV.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a8(k)
A.d.a8(d.b)
w=B.T(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.J)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.tX(o,r,q,p)
n.arX(o,r,q,p)
k.push(n)
J.iz(s[4],new C.ctc(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.J)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.alV(m,u[1],l,u[3])}}}
C.ajK.prototype={
S(){var w=x.N
return new C.ajL(A.H,A.az,B.T(w,x.gl),B.aR(w),$,A.bD,0,B.a([],x.X),null,null)}}
C.ajL.prototype={
af8(d){var w=this,v=w.as
if(v!=null)v.a1(0)
w.m(new C.bJu(w,d))
w.as=B.cy(A.lI,new C.bJv(w))},
t(){var w=this.as
if(w!=null)w.a1(0)
w=this.ch
if(w!=null)w.a1(0)
this.bvK()},
a0M(d,e){return this.cjH(d,e)},
b34(d){return this.a0M(d,!1)},
cjH(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a0M=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.rM:A.yu
p=d.b
w=3
return B.b(L.hgi(s,r,p,d.ax<3.2,q,$.qB().h(0,p).b),$async$a0M)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a0M,v)},
cwq(d){var w=this,v=new B.V(Date.now(),0,!1),u=w.at.c3(0,d.a,new C.bJw()),t=J.cC(u)
t.J(u,v)
t.bt(u,new C.bJx(v))
if(t.gI(u)>=4){t.a8(u)
t=w.ch
if(t!=null)t.a1(0)
w.a25(d)
return}if(t.gI(u)===3){t=w.ch
if(t!=null)t.a1(0)
w.ch=B.cy(A.iJ,new C.bJy(w,u,d))}},
a0s(d){return this.ci2(d)},
ci2(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a0s=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return B.b(C.irg(s,d.b,A.j.V(A.j.F(t.a.c.d*0.12,1)*100)),$async$a0s)
case 3:t.ay=!1
case 1:return B.h(u,v)}})
return B.i($async$a0s,v)},
a25(d){return this.cu_(d)},
cu_(d){var w=0,v=B.j(x.H),u=this,t
var $async$a25=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bT(A.L,null,new C.bJs(u,d),t,!0,!0,!0,null,!1,!1,x.H),$async$a25)
case 2:return B.h(null,v)}})
return B.i($async$a25,v)},
Y(){this.a3()
this.bi2()
this.me()},
bi2(){this.a.c.e=new C.bJN(this)},
mw(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.vH(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=D.mr.h(0,s.b)
if((r==null?null:r.b)!==D.At)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.q(0,s.a)&&!q.ay){u.J(0,s.a)
q.a0M(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)G.dE(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)G.dE(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cN.ai()<0.5
else u=!1
if(u)G.dE(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){G.dE(900+A.cN.aw(800),"",90,0,0.1,o)
if(A.cN.ai()<0.35)G.dE(300+A.cN.aw(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cN.ai()<0.4
else u=!1
if(u)G.dE(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)G.dE(330+A.o.F(110*A.j.bh(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)G.dE((A.j.bh(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)G.dE(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)G.dE(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cN.ai()<0.5
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
q.m(new C.bJO())},
ba7(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.J)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.mr.al(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new B.y(p,n)
r=i}}}return s},
b3L(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.U(w).k("ds<1>"),w=new B.ds(w,v),w=new B.bO(w,w.gI(0),v.k("bO<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.mr.al(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cJg(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.J)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.mr.al(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.mr.al(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=C.hEy(new B.o(k,n),new B.o(i,l),p)
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
af6(){this.a.toString
this.m(new C.bIX())},
bso(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.dbt[v]
if(!A.d.aV(p.a.c.a,new C.bJP(u,w))){o=new B.o(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?Q.Jv:o
s=s?Q.Jv:o
q=t.al4(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
G.dE(1200,"",50,0,0.3,"tri")
p.af6()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.Sh[v].a)
u=w.length
t=u>8
s=t?A.d.dt(w,0,A.o.aq(u+1,2)):w
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
w.push(n.b3A(s,!0))
n.a.toString
if(t)w.push(n.b3A(r,!0))
w.push(B.E(B.cs(new C.bJM(n,q,m)),1))
return B.x(w,A.m,null,A.e,A.i,0,A.p)},
b3A(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.J)(d),++v){u=d[v]
t=$.qB()
s=t.h(0,u).d.j(0.14)
r=new B.aO(14,14)
q=new B.ay(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.aA(p,B.q(p,B.x(B.a([B.d(t.h(0,u).c,p,p,p,p,p,p,A.AN,p,p,p),B.d(t.h(0,u).b,p,1,A.a2,p,p,p,A.nT,p,p,p)],n),A.m,p,A.ba,A.i,0,A.p),A.f,p,p,new B.p(s,p,new B.bH(q,q,q,q),new B.bf(r,r,r,r),p,p,A.n),p,p,p,I.on,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bIY(this,u),p,p,p,p,p,p,!1,A.a4))}return B.q(p,B.cl(m,p,p,A.h9,p,p,A.aL,!1),A.f,p,p,new B.p(I.BK,p,new B.bH(A.a1,A.a1,new B.ay(o,1,A.r,-1),A.a1),p,p,p,A.n),p,58,p,p,p,p,p,p)},
b0X(d){var w=null,v=B.m(18)
return B.q(w,d,A.f,w,w,new B.p(F.afn,w,B.L(A.bA,A.r,1),v,w,w,A.n),w,w,w,w,F.alq,w,w,w)},
clN(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qB().h(0,o),m=d.dy,l=d.fr,k=new C.bJg(q,n),j=B.d(n.c,p,p,p,p,p,p,A.KC,p,p,p),i=n.b,h=n.d,g=x.p
i=B.A(B.a([j,A.ae,B.E(B.d(i,p,p,p,p,p,p,B.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),B.aG(p,p,p,p,D.bXi,p,p,p,new C.bJ3(q,d),p,p,p,p,"Remove part",A.ce),B.aG(p,p,p,p,A.PO,p,p,p,new C.bJ4(q),p,p,p,p,p,A.ce)],g),A.m,p,A.e,A.i,0,p,p)
j=B.d(n.e,p,p,p,p,p,p,I.EI,p,p,p)
w=B.d("How it is made: "+n.f,p,p,p,p,p,p,D.fuy,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.j.ad(Math.abs(d.dy),2)+" volts  \xb7  "+A.j.ad(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.j.ad(Math.abs(m*l),2)+" watts"
m=B.a([i,j,A.ax,w,A.an,B.d(m,p,p,p,p,p,p,B.l(p,p,d.x?A.c0:A.aU,p,p,p,p,p,p,p,p,12.5,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bfW(d)
if(v!=null){l=(d.x?A.ay:A.aw).j(0.14)
j=B.m(10)
i=B.L((d.x?A.ay:A.aw).j(0.5),A.r,1)
m.push(new B.D(A.ib,B.q(p,B.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.fBh,p,p,p),A.f,p,p,new B.p(l,p,i,j,p,p,A.n),p,p,p,p,A.cl,p,p,p),p))}if(C.hdZ(o)){l=B.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new E.dW("CH "+t,d.at===u,new C.bJ5(q,d,u),p,h,p))}l=B.bW(A.bH,l,A.bt,p,4,6)
l=B.a([A.an,l,A.ax,B.d(q.a.c.tM(d)?"Showing: "+F.Rf[A.o.F(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hh,p,p,p)],g)
if(q.a.c.tM(d))l.push(new E.fB(A.Hv,"Open big screen",new C.bJ8(q,d),h,p))
A.d.v(m,l)}if(D.mr.al(0,o)&&!C.hdZ(o)){l=B.a([A.an,B.d(q.a.c.tM(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hh,p,p,p)],g)
if(q.a.c.tM(d))l.push(new E.fB(A.Pw,"Open the "+$.qB().h(0,o).b,new C.bJ9(q,d),h,p))
A.d.v(m,l)}if(D.mr.al(0,o))A.d.v(m,B.a([A.an,new E.fB(A.CQ,"Make it bigger (or tap it 4 times)",new C.bJa(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.j.ad(d.db,1)
if(q.a.c.tM(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=B.a([A.an,B.d("Volts in: "+j+" V   \u2192   Volts out: "+A.j.ad(i,1)+" V",p,p,p,p,p,p,D.fvp,p,p,p)],g)
if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.dtQ[s]
j=r===A.j.iY(r)?A.j.V(r):r
l.push(new E.dW(B.w(j)+" V out",d.e===r,new C.bJb(q,d,r),p,h,p))}i.push(new B.D(A.lf,B.bW(A.bH,l,A.bt,p,0,6),p))}if(o==="regulator")i.push(D.fUc)
A.d.v(m,i)}if(q.a.c.Mf(d)&&!d.x){l=A.j.ad(d.cx,2)
j=A.j.ad(q.a.c.Af(d),2)
i=q.a.c
w=i.aoF(d)?"   \u26a0 OVERLOADED":""
l=B.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,B.l(p,p,i.aoF(d)?A.c0:A.eu,p,p,p,p,p,p,p,p,12.5,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=B.m(4)
w=A.j.E(d.cx/q.a.c.Af(d),0,1)
i=q.a.c.aoF(d)?A.ay:A.b5
m.push(new B.D(A.ib,B.x(B.a([l,A.cU,B.by(j,B.kn(A.bA,p,p,5,p,w,new B.lM(i,x.c)),A.aq)],g),A.E,p,A.e,A.i,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.j.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.D(A.ib,B.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.fp4,p,p,p),p))}if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.diE[s]
j=r===1.5?"1.5 V (rechargeable)":B.w(r)+" V"
l.push(new E.dW(j,d.e===r,new C.bJc(q,d,r),p,h,p))}m.push(B.bW(A.bH,l,A.bt,p,0,6))}if(o==="resistor"){l=B.a([],g)
for(s=0;s<5;++s){r=D.d8D[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new E.dW(j,d.r===r,new C.bJd(q,d,r),p,h,p))}m.push(B.bW(A.bH,l,A.bt,p,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new C.bJe(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new C.bJf(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new C.bJ6(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new C.bJ7(d)))
if(o==="crank")m.push(D.fPv)
if(o==="switch")m.push(B.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hh,p,p,p))
return q.b0X(new B.cR(D.b5O,B.cg(B.x(m,A.E,p,A.e,A.Q,0,A.p),A.t,p,A.y,p,p,p,p,A.ah),p))}}
C.bcO.prototype={}
C.Wa.prototype={
S(){return new C.aET(C.hjY(),new B.cw(null,x.q),B.aR(x.S))}}
C.aET.prototype={
Y(){this.a3()
$.aW.c1$.push(this)
this.af7()},
af7(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$af7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fIJ(),$async$af7)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.iqs(t.d,r)
if(s!=null){t.m(new C.e03(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$af7,v)},
Ft(){var w,v=this
if(!v.as)return
w=C.igm(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bG6(w)},
jl(d){if(d!==A.fO)this.Ft()},
t(){$.aW.hV(this)
this.Ft()
this.a2()},
cbs(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.U(v).k("Y<1>")
t=new B.Y(v,new C.e0c(q),u).gI(0)
s=new B.Y(v,new C.e0d(),u).gI(0)
r=new B.Y(v,w.gcYL(),u).gI(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new C.e0e(q,t,s,r))}if(A.o.F(q.w,45)===0)q.Ft()
if(A.o.F(q.w,10)===0){w=q.f
$.aiU()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.q(0,q.f)&&$.aiU()[q.f].c.$1(q.d)){w.J(0,q.f)
C.JH("bell",B.a([0,4,7,12],x.t),700,0.45)
q.m(new C.e0f())
q.Ft()
w=q.c
w.toString
w=B.Yu(w)
if(w!=null)w.U(B.b3(p,p,p,p,p,A.t,p,B.d("\u2705 Challenge done: "+$.aiU()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.m8,p,p,p,p,p,p,p,p,p,p))}},
ahT(){var w=0,v=B.j(x.H),u=this,t
var $async$ahT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.ce(null,null,!0,null,new C.e02(u),t,null,!0,!0,x.H),$async$ahT)
case 2:return B.h(null,v)}})
return B.i($async$ahT,v)},
b0W(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.m(12),t=B.L(f.j(0.45),A.r,1)
u=B.a([B.ap(w,B.q(w,B.X(d,f,w,w,w,18),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ap(w,h,w,w,w,-1,-3,w))
return B.aA(w,B.hb(new B.a5(40,38,new B.an(A.a0,w,A.ad,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4)},
b0V(d,e,f,g){return this.b0W(d,e,f,g,null)},
asD(d,e,f,g){var w=null,v=f.j(0.1),u=B.m(10),t=B.L(f.j(0.4),A.r,1)
return B.E(B.aA(w,B.q(w,B.A(B.a([B.X(d,f,w,w,w,15),A.e1,new B.dn(1,A.cp,B.d(e,w,1,A.a2,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.ba,A.i,0,w,w),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),1)},
agd(){var w=0,v=B.j(x.H),u=this,t
var $async$agd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a6(t,!1).cd(B.eb(new C.e_Z(u),!1,null,x.H)),$async$agd)
case 2:t=u.e.gbk()
if(t!=null)t.bi2()
if(u.c!=null)u.m(new C.e0_())
u.Ft()
return B.h(null,v)}})
return B.i($async$agd,v)},
bJc(){var w,v,u,t,s=null,r=this.f
$.aiU()
if(r>=11)return s
w=this.r
v=w.q(0,r)
r=v?A.bg:A.ay
u=B.m(9)
t=B.L(I.BK,A.r,1.5)
return B.q(s,B.at(B.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.xi,s,s,s),s,s,s),A.f,s,D.b5V,new B.p(r,s,t,u,s,s,A.n),s,s,s,s,A.f3,s,s,s)},
aj2(){var w=0,v=B.j(x.H),u=this,t
var $async$aj2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bT(F.nu,null,new C.e0b(u),t,!0,!0,!0,A.kB,!1,!1,x.H),$async$aj2)
case 2:return B.h(null,v)}})
return B.i($async$aj2,v)},
cbt(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.aA(r,B.q(r,D.bYy,A.f,r,r,new B.p(A.c.j(0.07),r,r,r,r,r,A.a7),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e0h(d),r,r,r,r,r,r,!1,A.a4),o=B.m(11)
o=B.q(r,D.bbF,A.f,r,r,new B.p(A.bp,r,B.L(A.aI.j(0.45),A.r,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.q(r,B.x(B.a([B.A(B.a([p,A.ae,o,A.ae,B.E(B.x(B.a([D.fSc,B.d(w,r,1,A.a2,r,r,r,B.l(r,r,s.y>0||s.z>0?A.eS:A.hp,r,r,r,r,r,r,r,r,11.5,r,r,A.V,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.E,r,A.e,A.i,0,A.p),1),new C.ayW(s.gchK(),r),A.ts,s.b0V(A.uG,"Construction Lab: real 3D wiring, plumbing and a house",A.cF,new C.e0i(s,d)),s.b0W(A.lL,"Challenges",A.aU,s.gcyZ(),s.bJc()),s.b0V(A.Hz,"How to play",A.aI,new C.e0j(d,e))],v),A.m,r,A.e,A.i,0,r,r),A.an,B.A(B.a([s.asD(A.ou,"Circuits",A.br,s.gcrQ()),A.bm,s.asD(A.os,"Repair",A.aU,new C.e0k(s)),A.bm,s.asD(K.wx,"Clear",A.c0,new C.e0l(s))],v),A.m,r,A.e,A.i,0,r,r)],v),A.m,r,A.e,A.Q,0,A.p),A.f,r,r,new B.p(I.BK,r,new B.bH(A.a1,A.a1,new B.ay(q,1,A.r,-1),A.a1),r,r,r,A.n),r,r,r,r,D.bGW,r,r,r)},
B(d){var w=this,v=null
$.ath="tech"
return B.c4(v,A.c3,B.bn(!0,B.x(B.a([w.cbt(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.hiO(w.d,w.e,w.gcbr(),v),1)],x.p),A.m,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
C.ayW.prototype={
S(){return new C.baX(null,null)}}
C.baX.prototype={
gayU(){var w,v=this,u=v.d
if(u===$){w=B.bm(null,A.a_,null,1,null,v)
w.cP(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
t(){this.gayU().t()
this.bx5()},
B(d){var w=null,v=this.a.c
return B.aA(w,B.hb(new B.a5(42,42,B.c9(this.gayU(),new C.cKM(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.baW.prototype={
a4(d,e){var w,v,u,t=null,s=e.ej(A.H),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.Q()
w=B.K()
w.r=A.b8.j(0.25+0.15*o).gp(0)
w.y=N.op
d.N(s,r+2+o*2,w)
w=B.K()
w.sav(D.exR.aK(0,B.bX(s,r)))
d.N(s,r,w)
v=B.K()
v.b=A.a9
v.c=2.2
v.sav(new B.fY(A.A,0,6.283185307179586,A.x,D.d_o,t,new B.mI(p)).aK(0,B.bX(s,r)))
d.N(s,r,v)
p=new C.cKL(d)
p.$3(s.a5(0,A.ti),8+o*1.5,1)
q*=4
p.$3(s.a5(0,D.emG),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a5(0,D.ep3),2.6,0.5+0.5*Math.cos(q))
u=B.fq(t,A.cr,t,t,t,D.flr,A.a5,A.bX,t,A.dz,A.bY)
u.e5()
u.a4(d,s.a5(0,new B.o(-u.b.c/2,5)))},
aE(d){return d.b!==this.b}}
C.azf.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bC()}}
C.azg.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.bvJ()}}
C.aLm.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bzu.prototype={}
C.fQ.prototype={}
C.Ka.prototype={
a7(){return"ScreenStyle."+this.b}}
C.ms.prototype={}
C.VU.prototype={
S(){return new C.bly(null,null)}}
C.bly.prototype={
gaag(){var w,v=this,u=v.d
if(u===$){w=B.bm(null,A.om,null,1,null,v)
w.cr(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
t(){this.gaag().t()
this.byW()},
gSA(){var w=this.gaag().y
w=w==null?null:A.o.aq(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.mr.h(0,this.a.c)
if(v==null)v=D.aRC
return B.c4(w,X.Zv,B.bn(!0,new B.an(A.a0,w,A.ad,A.t,B.a([B.at(v.b===D.Av?this.bLj(v):this.coB(v),w,w,w),B.ap(w,B.aG(w,w,w,w,A.n2,w,w,w,new C.dXd(d),w,w,w,B.nZ(w,A.aT,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),B.ap(6,B.at(B.d(v.a,w,w,w,w,w,w,D.fn9,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)},
cbu(d){var w
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
coB(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.a9p
switch(p.a){case 1:w=44
break
case 2:w=30
break
case 3:w=22
break
case 4:w=26
break
default:w=14
break}v=B.c9(this.gaag(),new C.dXc(this,w,d,o),q)
if(p===D.a9q)v=new B.BG(D.bHA,v,q)
p=this.cbu(p)
u=o?4:5
t=d.c
s=B.ar(t,A.c,o?0.25:0.08)
s.toString
r=B.ar(t,A.w,0.5)
r.toString
r=B.a([s,t,r],x.O)
t=B.m(w)
s=B.a([new B.ac(0,A.G,d.d.j(0.28),A.H,36)],x.V)
return new B.fF(p,B.q(q,B.q(q,v,A.f,q,q,new B.p(A.w,q,q,B.m(w-3),q,q,A.n),q,q,q,q,A_.H0,q,q,q),A.f,q,q,new B.p(q,q,q,t,s,new B.a9(A.aA,A.aF,A.x,r,q,q),A.n),q,q,q,D.bAY,new B.R(u,u,u,u),q,q,q),q)},
b9g(d){var w,v,u,t=null,s=new B.V(Date.now(),0,!1),r=A.o.E(this.a.d+A.j.bh(this.gSA()*0.4),0,100),q=d.b===D.a9p,p=q?34:20,o=q?28:18,n=B.a([B.d(A.a.b_(A.o.u(B.dg(s)),2,"0")+":"+A.a.b_(A.o.u(B.fP(s)),2,"0"),t,t,t,t,t,t,A.tB,t,t,t),A.b3],x.p)
for(w=0;w<4;++w){v=new B.aO(1,1)
n.push(B.q(t,t,A.f,t,t,new B.p(A.c,t,t,new B.bf(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bHh,t,t,t,3))}n.push(A.dd)
n.push(D.fKO)
n.push(A.bm)
v=B.L(A.ab,A.r,1)
u=B.m(4)
n.push(B.q(t,new B.bL(A.a6,t,t,B.BU(A.A,B.q(t,t,A.f,t,t,new B.p(A.b5,t,t,B.m(2),t,t,A.n),t,t,t,A_.H0,t,t,t,t),t,r/100),t),A.f,t,t,new B.p(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.r2)
n.push(B.d(""+r+"%",t,t,t,t,t,t,D.fBE,t,t,t))
return new B.D(new B.R(p,12,o,2),B.A(n,A.m,t,A.e,A.i,0,t,t),t)},
awO(d,e,f){var w,v=null,u=d.d,t=B.ar(u,A.w,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.m(e*0.26)
w=x.p
t=B.a([B.q(v,B.at(B.d(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.p(v,v,v,u,D.doK,new B.a9(A.aA,A.aF,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,B.a([A.ax,B.d(d.a,v,1,A.a2,v,v,v,D.frZ,v,v,v)],w))
return B.aA(v,B.x(t,A.m,v,A.e,A.Q,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dX8(this,d),v,v,v,v,v,v,!1,A.a4)},
c1N(d,e){return this.awO(d,e,!0)},
c1u(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.aRD||n===D.Eo,l=d.d,k=B.ar(l,A.w,0.55)
k.toString
l=B.ar(l,A.kk,0.5)
l.toString
l=B.a([k,A.dx,l],x.O)
k=p.b9g(d)
w=m?190:138
v=B.m(24)
u=B.L(A.aV,A.r,1)
w=B.aA(o,B.q(o,B.by(B.m(23),B.b4(o,o,o,new C.afA(0,p.gSA(),o),A.fJ),A.aq),A.f,o,o,new B.p(o,o,u,v,o,o,A.n),o,w,o,A.hU,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.dX6(p),o,o,o,o,o,o,!1,A.a4)
v=m?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.kv[s]
t.push(new B.cf(A.A,o,o,p.c1N(r,m?58:54),o))}k=B.a([k,A.an,w,A.af,B.E(B.kU(0.92,t,v,8,12,A2.wi,o,!1),1)],u)
if(n!==D.a9q){n=A.c.j(0.16)
w=B.m(28)
u=B.a([],u)
for(v=B.cW(F.kv,0,B.dA(4,"count",x.S),x.gD),t=v.$ti,v=new B.bO(v,v.gI(0),t.k("bO<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.awO(q==null?t.a(q):q,50,!1))}k.push(B.q(o,B.A(u,A.m,o,A.qQ,A.i,0,o,o),A.f,o,o,new B.p(n,o,o,w,o,o,A.n),o,o,o,D.bBR,H.amR,o,o,o))}return B.q(o,B.x(k,A.m,o,A.e,A.i,0,A.p),A.f,o,o,new B.p(o,o,o,o,o,new B.a9(A.aA,A.aF,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bEI(d,e){var w=null
return B.q(w,B.x(B.a([this.b9g(d),B.E(B.b4(w,w,w,new C.afA(e,this.gSA(),w),A.fJ),1),B.aA(w,B.q(w,B.at(B.d(F.kv[e].a,w,w,w,w,w,w,A.Kq,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dX1(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.m,w,A.e,A.i,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bLj(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=B.ar(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.m(r?26:14)
u=B.a([new B.ac(0,A.G,d.d.j(0.25),A.H,36)],x.V)
return new B.fF(1.5384615384615383,B.q(t,B.c9(this.gaag(),new C.dX4(this,r,d),t),A.f,t,t,new B.p(t,t,t,v,u,new B.a9(A.aA,A.aF,A.x,w,t,t),A.n),t,t,t,D.bGQ,new B.R(8,8,8,s),t,t,t),t)}}
C.bxw.prototype={
a4(d,e){var w,v,u,t,s,r=e.a,q=e.b,p=0+r,o=0+q
$.Q()
w=B.K()
v=this.c
u=B.ar(v,A.w,0.6)
u.toString
t=B.ar(v,A.kk,0.4)
t.toString
w.sav(new B.a9(A.aA,A.aF,A.x,B.a([u,A.dx,t],x.O),null,null).aK(0,new B.a1(0,0,p,o)))
d.ar(new B.a1(0,0,p,o),w)
for(p=this.b,o=p*0.4,p*=0.3,s=0;s<5;++s){w=Math.sin(o+s)
u=Math.sin(p+s*1.7)
t=new B.ao(A.O,A.M,A.R,A.T,A.P)
t.r=v.j(0.1).gp(0)
t.y=D.bHF
d.N(new B.o(r*(0.15+0.2*s+0.05*w),q*(0.3+0.3*u)),q*(0.2+0.04*s),t)}},
aE(d){return!0}}
C.afA.prototype={
a4(d,e){return L.M0(d,e,this.b,this.c)},
aE(d){return!0}}
C.aN8.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bwi.prototype={}
C.a9f.prototype={
B(d){var w=null
return B.c4(B.eH(w,w,w,!0,!0,D.ahV,w,1,!0,w,0,!1,w,!1,w,w,B.aG(w,w,w,w,K.arx,w,w,w,new C.cm4(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.h02,w,w,w,1,w,!0),D.ahV,B.cl(B.a([D.eqw,B.cs(new C.cm5())],x.p),w,w,D.bCW,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.Xu.prototype={
S(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aGm(w,new B.au(A.av,$.aw()),$,A.bD,0,B.a([],x.X),null,null)}}
C.aGm.prototype={
Y(){this.a3()
this.me()},
b78(d){var w=this.d.length
return A.o.F(A.j.bh(A.j.F(A.j.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
mw(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b78(v.f)
if(w!==v.x){v.x=w
E.mq("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new C.eTw(v))
C.JH("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
cdb(){if(this.d.length<2)return
this.m(new C.eTs(this))},
b1t(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new C.eTr(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gcda(),p=s.d,o=B.E(B.aA(r,B.b4(r,r,r,new C.bxI(p,s.f,r),A.fJ),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.x(B.a([o,new B.a5(r,40,B.at(B.d(n,r,r,r,r,r,r,D.fzL,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.i,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.aBj[A.o.F(v,8)].j(0.9)
t=new B.aO(20,20)
o.push(B.aA(r,B.q(r,B.d(p[v],r,r,r,r,r,r,D.fz_,r,r,r),A.f,r,r,new B.p(u,r,r,new B.bf(t,t,t,t),r,r,A.n),r,r,r,A.fy,A.hb,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.eTu(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a4))}p=A.c.j(0.07)
return E.lA(A.aU,A.f5,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.x(B.a([new E.fb(o,r,r),B.A(B.a([B.E(B.aM(r,A.Z,!1,r,!0,A.t,r,B.aN(),s.e,r,r,r,r,r,2,B.bt(r,new B.b6(4,B.m(14),A.a1),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kE,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ak,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.eTv(s),r,!1,r,r,!1,r,!0,r,A.ac,r,r,r,r,r,r,r,r,r,r,r,A.di,!0,A.a5,r,A.ao,r,r,r,r),1),A.ae,new E.fB(A.hV,"Add",s.gcd8(s),A.c,r),A.bm,new E.fB(A.ot,"Spin",q,A.b5,r)],w),A.m,r,A.e,A.i,0,r,r)],w),A.m,r,A.e,A.Q,0,A.p))}}
C.bxI.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=k/2,i=e.b,h=i/2+10,g=new B.o(j,h),f=Math.min(k,i)/2-24
i=f+8
k=$.Q()
w=B.K()
w.r=D.bhY.gp(0)
d.N(g,i,w)
w=B.K()
w.b=A.a9
w.c=3
w.r=A.aU.gp(0)
d.N(g,i,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(i=d.c,t=this.c,s=u/2,r=0;r<v;++r){q=t+r*u
p=B.bX(g,f)
o=new B.ao(A.O,A.M,A.R,A.T,A.P)
o.r=D.aBj[A.o.F(r,8)].gp(0)
d.cC(p,q,u,!0,o)
o=B.bX(g,f)
p=new B.ao(A.O,A.M,A.R,A.T,A.P)
p.b=A.a9
p.c=2
p.r=A.c.j(0.6).gp(0)
d.cC(o,q,u,!0,p)
J.bo(i.save())
i.translate(j,h)
i.rotate((q+s)*180/3.141592653589793,0,0)
p=w[r]
if(p.length>12)p=A.a.aC(p,0,11)+"\u2026"
n=new B.iG(new B.en(p,l,l,A.cJ,l,l,l,l,l,l,D.fmg),A.a5,A.bX,new B.jg(1),l,l,l,l,A.bY,l,A.cr)
n.e5()
p=n.b
o=p.c
p=p.a.c
n.a4(d,new B.o(f-o-16,-p.gba(p)/2))
i.restore()}i=B.K()
i.r=D.ahy.gp(0)
d.N(g,20,i)
i=B.K()
i.b=A.a9
i.c=3
i.r=A.aU.gp(0)
d.N(g,20,i)
m=new B.aF(k.r,A.ai,l,l,B.a([],x.v))
h-=f
m.D(new B.aZ(j,h+26))
h-=10
m.D(new B.aq(j-14,h))
m.D(new B.aq(j+14,h))
m.D(new B.bu())
h=B.K()
h.r=A.c.gp(0)
d.af(m,h)
h=B.K()
h.b=A.a9
h.c=2
h.r=A.aT.gp(0)
d.af(m,h)},
aE(d){return!0}}
C.Wi.prototype={
S(){return new C.blJ($,A.bD,0,B.a([],x.X),null,null)}}
C.blJ.prototype={
Y(){this.a3()
this.me()},
mw(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.JH("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.UE(900,new C.e32())}w.m(new C.e33())},
b1v(d){return this.m(new C.e2Y(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.b_(A.o.u(A.j.aq(m,60)),2,"0")
v=A.a.b_(A.o.u(A.o.F(A.j.cL(m),60)),2,"0")
m=B.b4(n,n,n,new C.bsp(l,A.c0,n),A.aT4)
u=B.d(w+":"+v,n,n,n,n,n,n,D.fqU,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.at(new B.a5(280,280,new B.an(A.A,n,A.ad,A.t,B.a([m,B.x(B.a([u,B.d(t,n,n,n,n,n,n,D.fpU,n,n,n),A.ax,B.d("Sessions done: "+o.r,n,n,n,n,n,n,A.vw,n,n,n)],s),A.m,n,A.e,A.Q,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.dlG[r]
u.push(new E.dW(""+q+" min",o.d===q,new C.e3_(o,q),n,A.c0,n))}m=o.f
p=m?A5.uO:A.hu
m=m?"Pause":"Start"
return E.lA(A.c0,A.f5,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.x(B.a([new E.fb(u,n,n),new E.fb(B.a([new E.fB(p,m,new C.e30(o),A.b5,n),new E.fB(A.ow,"Reset",new C.e31(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.Q,0,A.p))}}
C.bsp.prototype={
a4(d,e){var w,v,u,t,s=e.ej(A.H),r=e.a/2-14
$.Q()
w=B.K()
w.b=A.a9
w.c=16
w.r=A.c.j(0.08).gp(0)
d.N(s,r,w)
w=B.bX(s,r)
v=B.K()
v.b=A.a9
v.c=16
v.d=A.bw
u=this.c
t=B.ar(u,A.c,0.4)
t.toString
v.sav(new B.fY(A.A,-1.5707963267948966,4.71238898038469,A.x,B.a([u,t,u],x.O),null,null).aK(0,B.bX(s,r)))
d.cC(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aE(d){return d.b!==this.b}}
C.Vv.prototype={
S(){return new C.blk($,A.bD,0,B.a([],x.X),null,null)}}
C.blk.prototype={
Y(){this.a3()
this.me()},
mw(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.SZ.h(0,p.d)
w.toString
v=A.d.f1(w,new C.dOK())
u=A.j.F(p.f,v)
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
E.mq("flute",D.c9E[t]+5,1400,0.35)}p.m(new C.dOL())},
gcde(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.KZ("Press Start",0.5)
w=D.SZ.h(0,this.d)
w.toString
v=A.d.f1(w,new C.dOF())
u=A.j.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.KZ("Breathe in",0.5+0.5*A.dC.aA(0,p))
case 1:return new B.KZ("Hold",1)
case 2:return new B.KZ("Breathe out",1-0.5*A.dC.aA(0,p))
default:return new B.KZ("Hold",0.5)}}}return new B.KZ("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gcde(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hn.j(0.12+(3-u)*0.05)
n.push(B.q(q,q,A.f,q,q,new B.p(s,q,q,q,u===0?B.a([new B.ac(0,A.G,A.hn.j(0.35),A.H,40)],v):q,q,A.a7),q,t,q,q,q,q,q,t))}n.push(B.d(p.a,q,q,q,q,q,q,A.pR,q,q,q))
n.push(B.ap(0,B.d("Breaths: "+r.w,q,q,q,q,q,q,A.kE,q,q,q),q,q,q,q,q,q))
n=B.at(new B.a5(300,340,new B.an(A.A,q,A.ad,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aU(D.SZ.geu(D.SZ));w.C();){v=w.gR(w)
o.push(new E.dW(v,r.d===v,new C.dOI(r,v),q,A.hn,q))}w=r.e
v=w?A.zj:A.hu
w=w?"Stop":"Start"
o.push(new E.fB(v,w,new C.dOJ(r),A.b5,q))
return E.lA(A.hn,A.f5,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new E.fb(o,q,q))}}
C.aJM.prototype={}
C.W9.prototype={
S(){return new C.blA(new B.cw(null,x.A),B.a([],x.au),A.as,A.c)}}
C.blA.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aG(s,s,s,s,K.oE,s,s,s,new C.e_y(t,d),s,s,s,s,"Share",s)],r),p=B.by(B.m(18),new B.em(B.aA(s,B.b4(s,s,s,new C.bnC(t.e,t.x,s),A.fJ),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e_z(t),new C.e_A(t),s,s,s,s,s,s,s,s,s,new C.e_B(t),s,s,s,s,!1,A.a4),t.d),A.aq),o=B.a([],r)
for(w=0;w<9;++w){v=D.d0U[w]
u=!t.w&&t.f.A(0,v)
o.push(new E.G0(v,u,new C.e_C(t,v),!1,s))}u=t.r
return E.lA(A.bF,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.D(A.bU,p,s),"DRAW PAD",B.x(B.a([new E.fb(o,s,s),E.iP(A.bF,""+A.j.V(u),"Brush",30,2,new C.e_D(t),u),new E.fb(B.a([new E.dW("Eraser",t.w,new C.e_E(t),A.CD,A.bF,s),new E.fB(A.ps,"Undo",new C.e_F(t),A.c,s),new E.fB(A.eg,"Clear",new C.e_G(t),A.c,s),new E.fB(A.Pj,"Paper",new C.e_H(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.Q,0,A.p))}}
C.bnC.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k
$.Q()
w=B.K()
w.r=this.c.gp(0)
d.ar(new B.a1(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=x.v,t=0;t<w.length;w.length===v||(0,B.J)(w),++t){s=w[t]
r=$.Q()
q=new B.ao(A.O,A.M,A.R,A.T,A.P)
p=s.a
q.r=p.gp(p)
o=s.b
q.c=o
q.d=A.bw
q.e=A.dP
q.b=A.a9
n=s.c
if(n.length===1){r=A.d.gH(n)
n=new B.ao(A.O,A.M,A.R,A.T,A.P)
n.r=p.gp(p)
d.N(r,o/2,n)}else{p=B.a([],u)
m=new B.aF(r.r,A.ai,null,null,p)
p.push(new B.aZ(A.d.gH(n).a,A.d.gH(n).b))
m.ab()
for(l=1;l<n.length-1;){r=n[l]
o=r.a;++l
k=n[l]
r=r.b
k=new B.c5(o,r,(o+k.a)/2,(r+k.b)/2)
p.push(k)
r=m.f
if(r!=null)k.ak(r)
m.ab()}r=new B.aq(A.d.gan(n).a,A.d.gan(n).b)
p.push(r)
p=m.f
if(p!=null)r.ak(p)
m.ab()
d.af(m,q)}}},
aE(d){return!0}}
C.WS.prototype={
S(){var w=x.S
return new C.aFG(B.aR(w),B.aR(w))}}
C.aFG.prototype={
Y(){this.a3()
this.au8()},
au8(){var w,v,u=this,t=x.N,s=B.bq(D.dqT,!0,t)
A.d.Dn(s)
w=x.S
v=B.U(s).c
t=B.C(B.cW(s,0,B.dA(u.d,"count",w),v),t)
A.d.v(t,B.cW(s,0,B.dA(u.d,"count",w),v))
A.d.Dn(t)
u.e=t
u.f.a8(0)
u.r.a8(0)
u.w=0
u.x=!1},
cd9(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
E.mq("bell",12+A.o.F(d,9),150,0.35)
s.m(new C.eqm(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gH(0)
u=w.gan(0)
w=s.e
w===$&&B.c()
t=x.H
if(w[v]===w[u])B.bQ(A.mS,new C.eqn(s,v,u),t)
else{s.x=!0
B.bQ(Ac.GC,new C.eqo(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.d("Moves: "+r.w,q,q,q,q,q,q,A.Vx,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.aq(p,2)+" / "+o
o=x.p
p=B.x(B.a([new B.D(A.yG,B.A(B.a([u,B.d(p,q,q,q,q,q,q,B.l(q,q,w?A.aU:A.ab,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.iR,A.i,0,q,q),q),B.E(B.im(!0,q,q,A.y,new B.hG(v,8,8,1,q),new C.eqs(r),r.e.length,A.bh,q,A.ah,!1),1)],o),A.m,q,A.e,A.i,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.d2t[t]
o.push(new E.dW(s.b,r.d===s.a,new C.eqt(r,s),q,A.aI,q))}o.push(new E.fB(K.aq5,"New game",new C.equ(r),A.b5,q))
return E.lA(A.aI,A.f5,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new E.fb(o,q,q))}}
C.X1.prototype={
S(){return new C.aG0(B.a([],x.t))}}
C.aG0.prototype={
cdd(d){A.d.a8(this.d)
this.w=!0
this.b1u()},
b1u(){this.d.push(A.cN.aw(4))
this.e=0
this.a_Q()},
a_Q(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_Q=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eB8(t))
s=x.H
w=3
return B.b(B.bQ(A.lH,null,s),$async$a_Q)
case 3:r=t.d,q=B.bq(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aVh(n)
w=7
return B.b(B.bQ(new B.bd(1000*Math.max(280,600-r.length*18)),null,s),$async$a_Q)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new C.eB9(t))
case 1:return B.h(u,v)}})
return B.i($async$a_Q,v)},
aVh(d){this.m(new C.eB6(this,d))
E.mq("marimba",D.c9D[d]+5,450,0.55)
B.bQ(A.GA,new C.eB7(this),x.H)},
cdf(d){var w,v,u=this
if(!u.w||u.r)return
u.aVh(d)
w=u.d
v=u.e
if(w[v]!==d){G.dE(90,"",600,0,0.5,"saw")
u.m(new C.eBa(u))
return}++v
u.e=v
if(v===w.length){u.m(new C.eBb(u))
B.bQ(A.hD,new C.eBc(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.d("Best: "+q.x,p,p,p,p,p,p,Q.aVB,p,p,p),n=B.d(q.y,p,p,p,p,p,p,D.fA9,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aAb[v]
u=u.j(q.f===v?1:0.35)
t=new B.aO(28,28)
s=q.f===v?B.a([new B.ac(0,A.G,D.aAb[v].j(0.8),A.H,30)],w):p
r=new B.ay(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.aA(p,B.cT(p,p,p,p,A.b4,new B.p(u,p,new B.bH(r,r,r,r),new B.bf(t,t,t,t),s,p,A.n),A.jl,p,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eBd(q,v),p,p,p,p,p,p,!1,A.a4))}o=B.at(new B.D(A.ac,B.x(B.a([o,A.an,n,A.d8,new B.fF(1,B.kU(1,l,2,12,12,p,A.dV,!1),p)],m),A.m,p,A.ba,A.i,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return E.lA(A.bk,A.f5,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new E.fb(B.a([new E.fB(A.hu,n,q.gcdc(q),A.b5,p)],m),p,p))}}
C.Xl.prototype={
S(){return new C.bmQ(new B.au(A.av,$.aw()))}}
C.bmQ.prototype={
axH(d){return B.p3(A.j.ad(d,2),B.ag("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eP_(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.d1(B.aL(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eP8()
l=B.aM(m,A.Z,!1,m,!0,A.t,m,B.aN(),l,m,m,m,m,m,2,B.bt(m,m,m,m,m,m,m,m,!0,new B.b6(4,B.m(16),A7.xH),m,m,m,m,m,m,m,m,m,m,m,new B.b6(4,B.m(16),D.b4l),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.mA,"Bill amount",!0,!0,!1,m,m,m,m,D.fxx,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ak,m,m,m,m,m,A.e6,m,m,m,1,m,m,!1,"\u2022",m,new C.eP4(n),m,m,m,!1,m,m,!1,m,!0,m,A.ac,m,m,m,m,m,m,m,m,m,m,m,A.aUz,!0,A.a5,m,A.ao,m,m,m,m)
k=A.b5.j(0.1)
s=B.m(20)
r=B.L(A.b5.j(0.35),A.r,1)
q=x.p
s=B.cl(B.a([l,A.bz,B.q(m,B.x(B.a([t.$2("Tip ("+A.j.V(n.e)+"%)","$"+n.axH(w)),t.$2("Total","$"+n.axH(v)),A3.NC,t.$3$big("Each of "+n.f+" pays","$"+n.axH(u),!0)],q),A.m,m,A.e,A.i,0,A.p),A.f,m,m,new B.p(k,m,r,s,m,m,A.n),m,m,m,m,A.bR,m,m,m)],q),m,m,A.fr,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cNQ[p]
r.push(new E.dW(""+o+"%",A.j.V(n.e)===o,new C.eP5(n,o),m,A.b5,m))}l=n.f
return E.lA(A.b5,A.f5,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.x(B.a([new E.fb(r,"TIP",m),E.iP(A.aI,""+l,"People",20,1,new C.eP6(n),l),new E.fb(B.a([new E.dW("Round up",n.r,new C.eP7(n),m,A.aU,m)],q),m,m)],q),A.m,m,A.e,A.Q,0,A.p))}}
C.WR.prototype={
S(){var w=B.a([3,5],x.t)
return new C.bmk(w,A.cN,$,A.bD,0,B.a([],x.X),null,null)}}
C.bmk.prototype={
Y(){this.a3()
this.me()},
mw(d){var w,v,u=this,t=u.r
if(t>0){t-=d
u.r=t
if(A.o.F(A.j.bh(t*14),2)===0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t}if(u.r<=0){t=B.a([],x.t)
for(w=u.at,v=0;v<u.e;++v)t.push(w.aw(6)+1)
u.f=t
E.Xn("snare",0,0.5)}u.m(new C.ep1())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.h8()
u.w=t
u.x=t?0:3.141592653589793
E.mq("bell",24,400,0.5)}u.m(new C.ep2())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bfc(v,o.r>0,n))}u=B.aA(n,B.at(B.bW(A.fM,m,A.bt,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eoV(o),n,n,n,n,n,n,!1,A.a4)}else if(m==="coin"){t=A.j.E(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.L(A.cZ,A.r,6)
s=B.a([new B.ac(0,A.G,A.aU.j(0.4),A.H,30)],x.V)
u=B.aA(n,B.at(B.ed(A.A,B.q(A.A,B.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fwI,n,n,n),A.f,n,n,new B.p(n,n,v,n,s,D.exV,A.a7),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eoW(o),n,n,n,n,n,n,!1,A.a4)}else{m=o.as
u=B.aA(n,B.at(B.x(B.a([B.d(m===0?"?":""+m,n,n,n,n,n,n,D.flJ,n,n,n),B.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kE,n,n,n)],x.p),A.m,n,A.e,A.Q,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eoX(o),n,n,n,n,n,n,!1,A.a4)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.diS[r]
v.push(new E.dW(q.b,o.d===q.a,new C.eoY(o,q),q.c,A.br,n))}v=B.a([new E.fb(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(E.iP(A.br,""+s,"Dice",4,1,new C.eoZ(o),s))}if(o.d==="num"){s=o.z
s=E.iP(A.br,""+s,"From",100,1,new C.ep_(o),s)
p=o.Q
A.d.v(v,B.a([s,E.iP(A.br,""+p,"To",1000,2,new C.ep0(o),p)],m))}return E.lA(A.br,A.f5,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.x(v,A.m,n,A.e,A.Q,0,A.p))}}
C.bfc.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cN.ai()-0.5)*0.6
else w=0
v=B.m(22)
u=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cA,14)],x.V)
t=B.a([],x.p)
for(s=D.dCL.h(0,A.o.E(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bL(s[q],p,p,B.q(p,p,A.f,p,p,O.aen,p,18,p,p,p,p,p,18),p))
return B.eL(A.A,w,B.q(p,new B.an(A.a0,p,A.ad,A.t,t,p),A.f,p,p,new B.p(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bE,p,p,100),p)}}
C.aMX.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bzq.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.byK()}}
C.aNf.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bzw.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.bz3()}}
C.aNI.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bzF.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.bzx()}}
C.aO8.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbB())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bC()}}
C.bzO.prototype={
t(){var w,v,u
for(w=this.h6$,v=w.length,u=0;u<w.length;w.length===v||(0,B.J)(w),++u)w[u].a1(0)
w=this.h5$
w===$&&B.c()
w.t()
this.bzY()}}
var z=a.updateTypes(["P(tX)","~()","P(a5o)","aB<~>()","P(D2)","F(tX,F)","I(I,tX)","P(CZ)","P(a_p)","P(aco)","P(a4f)","P(nH)","Xm()","Vu()","a9f()","WX()","Xb()","WY()","P(mV)","Vz()","afT(Z,F)","aeL(Z,F)","~(a8<@,@>)","F(CZ,CZ)","n(eh)","P(afH)","P(a1E)","P(Dd)","P(acT)","P(aeO)","P(acC)","F(F,r8)","F(F,D2)","n(r8)","~(r8,ai<n>,F)","r8?(D2)","WR()","v(n,a1r)","P(abh)","~(B5)","Xp()","~(uI,n,o,u,I)","~(n,tX)","Wa()","WB(Z)","O9(Z)","VU(Z,bv<I>,bv<I>)","Xu()","Wi()","Vv()","W9()","WS()","X1()","Xl()","P(r8)"])
C.fJ6.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+18}
C.fxX.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gH(d.e.split(". "))+"."},
$S:z+24}
C.fFw.prototype={
$1(d){var w
if(!this.a.Mf(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fFx.prototype={
$1(d){return d.x},
$S:z+0}
C.fJ3.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fJ4.prototype={
$1(d){var w
if(!this.a.Mf(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fJ5.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.ei9.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.eia.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.y(this.b,this.c))},
$S:0}
C.eib.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd5(v).Q
v.toString
w.mp(v,A.dH,A.iI)}},
$S:7}
C.eim.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.ein.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.eii.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.eig.prototype={
$2(d,e){var w=this.a
w.r.push(B.cy(B.dv(0,0,0,d,0,0),new C.eih(w,this.b,e)))},
$S:1897}
C.eih.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.eij.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gWZ().al4(0,u[1],u[2],u[3])
u[4].bO(0,new C.eie(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
G.dE(700+w.e*120,"",80,0,0.25,"square")
v.m(new C.eif(w.a,v,w.f,w.r))},
$S:0}
C.eie.prototype={
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
C.eif.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.E(A.j.bh(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.eik.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gWZ().alV(t,u[1],s,u[3])
G.dE(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new C.eid(w.a,v,w.e,w.f))},
$S:0}
C.eid.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.E(A.j.bh(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.eil.prototype={
$0(){G.dE(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new C.eic(w,this.b))},
$S:0}
C.eic.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.eiq.prototype={
$0(){var w=this.a
return w.m(new C.eip(w))},
$S:0}
C.eip.prototype={
$0(){return this.a.at=!0},
$S:0}
C.eir.prototype={
$0(){var w=this.a
return w.m(new C.eio(w))},
$S:0}
C.eio.prototype={
$0(){return this.a.at=!1},
$S:0}
C.eis.prototype={
$0(){var w=this.a
w.f.sb1(0,this.b)
w.PK()},
$S:0}
C.eit.prototype={
$0(){return this.a.Z2(this.b)},
$S:0}
C.eiu.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.PK():w.aYi()},
$S:2}
C.eiv.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.PK():w.aYi()},
$S:0}
C.exs.prototype={
$2(d,e){return d+e},
$S:1898}
C.exM.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.exL(w,d))},
$S:1899}
C.exL.prototype={
$0(){var w=B.aI(J.t(this.b,"unlocked"))
w=w==null?null:A.j.M(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.exN.prototype={
$0(){},
$S:0}
C.exO.prototype={
$0(){},
$S:0}
C.exu.prototype={
$0(){return this.a.m(new C.ext(this.b,this.c))},
$S:0}
C.ext.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.exj.prototype={
$1(d){return this.a.cx===d},
$S:33}
C.exk.prototype={
$1(d){return this.a.cx=d},
$S:32}
C.exl.prototype={
$1(d){return this.a.cy===d},
$S:33}
C.exm.prototype={
$1(d){return this.a.cy=d},
$S:32}
C.exn.prototype={
$1(d){return this.a.db===d},
$S:33}
C.exo.prototype={
$1(d){return this.a.db=d},
$S:32}
C.exp.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:33}
C.exq.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.W(0,d):w.J(0,d)},
$S:32}
C.exr.prototype={
$0(){var w=this.a
return w.m(w.gayh())},
$S:0}
C.exh.prototype={
$1(d){return this.a.$1(!0)},
$S:69}
C.exi.prototype={
$1(d){return this.a.$1(!1)},
$S:114}
C.exg.prototype={
$1(d){return this.a.$1(!1)},
$S:144}
C.exF.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.ch=n
n=B.b4(p,p,p,new C.bj5(o,p),n)
w=this.b
v=C.bC1("WORLD",w.a,w.c)
u=C.bC1("GRAVITY",B.w(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.j.V(t*100)
t=t<0.25?A.c0:A.b5
t=C.bC1("FUEL",""+s+"%",t)
s=o.r.b
r=A.j.V(s*100)
s=s>D.Dn[o.db].d?A.c0:A.c
q=x.p
s=B.a([v,u,t,C.bC1("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(C.bC1("HEIGHT",""+A.j.V(A.j.E(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ap(p,B.A(s,A.m,p,A.iR,A.i,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bHK(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.t4[w].a+".":"You landed on every world!"
v=B.a([new E.fB(A.ox,"Again",new C.exA(o),A.c,p),new E.fB(A.os,"Rebuild",new C.exB(o),A.aU,p)],q)
if(o.d+1<7)v.push(new E.fB(A.jE,"Next world",new C.exC(o),A.b5,p))
n.push(C.hxG("Perfect landing!",w,A.b5,v))}if(o.as==="crashed")n.push(C.hxG("Crash!",o.at,A.c0,B.a([new E.fB(A.ox,"Try again",new C.exD(o),A.b5,p),new E.fB(A.os,"Rebuild",new C.exE(o),A.aU,p)],q)))
return new B.an(A.a0,p,A.b2,A.t,n,p)},
$S:67}
C.exA.prototype={
$0(){var w=this.a
return w.m(w.gayh())},
$S:0}
C.exB.prototype={
$0(){var w=this.a
return w.m(new C.exx(w))},
$S:0}
C.exx.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.exC.prototype={
$0(){var w=this.a
return w.m(new C.exw(w))},
$S:0}
C.exw.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.exD.prototype={
$0(){var w=this.a
return w.m(w.gayh())},
$S:0}
C.exE.prototype={
$0(){var w=this.a
return w.m(new C.exv(w))},
$S:0}
C.exv.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.exG.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new C.exz(v,w))},
$S:0}
C.exz.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.exH.prototype={
$1(d){return this.a.y=d},
$S:9}
C.exI.prototype={
$1(d){return this.a.Q=d},
$S:9}
C.exJ.prototype={
$1(d){return this.a.z=d},
$S:9}
C.exK.prototype={
$0(){var w=this.a
return w.m(new C.exy(w))},
$S:0}
C.exy.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dOD.prototype={
$0(){var w=0,v=B.j(x.h),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=$.hsS
if(q==null)q=$.hsS=C.cOs()
w=3
return B.b(B.iL(B.a([q,$.rg().cVL("assets/data/three.min.js")],x.D),x.K),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kW(0,B.cO(J.t(s,1)))
q.m(new C.dOC(q,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:50}
C.dOC.prototype={
$0(){return this.a.d=x.m.a(J.t(this.b,0))},
$S:0}
C.dOf.prototype={
$0(){return this.a.bZy(B.aT(J.t(this.b,"group")))},
$S:0}
C.dOg.prototype={
$1(d){return A.a.b_(A.o.ft(A.o.E(A.j.V(d*255),0,255),16),2,"0")},
$S:345}
C.dOE.prototype={
$0(){return E.Xn("kick",0,0.25)},
$S:0}
C.dOh.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dOi.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dOj.prototype={
$0(){return E.Xn("kick",0,0.5)},
$S:0}
C.dOk.prototype={
$0(){return G.dE(1300+this.a.R8.aw(900),"",40,0,0.2,"square")},
$S:0}
C.dOm.prototype={
$0(){var w,v,u=this.b
if(u==="skin"){u=this.a
w=u.ch
if(w===2)w=1
else w=w===1?0:2
u.ch=w}else{w=this.a
v=w.ay
if(v.q(0,u))v.W(0,u)
else{v.J(0,u)
if(w.ch===2)w.ch=1}if(v.a===0&&w.ch===0)w.ch=2
u=w}if(u.cx!=null&&!A.d.aV(u.d.e,new C.dOl(u)))u.cx=null
u.go=0},
$S:0}
C.dOl.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.aA6(d)},
$S:z+10}
C.dOc.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
C.dOd.prototype={
$0(){var w=this.a
return w.m(w.gc9b())},
$S:0}
C.dOe.prototype={
$0(){return this.a.aex(null)},
$S:0}
C.dOt.prototype={
$0(){var w=this.a.as
return w==null?null:w.f8(0,B.H(["t","shot"],x.N,x.z))},
$S:0}
C.dOu.prototype={
$0(){return this.a.cFB(this.b.a)},
$S:0}
C.dOv.prototype={
$0(){return this.a.aex(this.b)},
$S:0}
C.dOw.prototype={
$1(d){var w=this.a
return w.m(new C.dOs(w,d))},
$S:6}
C.dOs.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.dOx.prototype={
$0(){var w=this.a
return w.m(new C.dOr(w,this.b))},
$S:0}
C.dOr.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.dOy.prototype={
$0(){var w=this.a
return w.m(new C.dOq(w))},
$S:0}
C.dOq.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.dOz.prototype={
$0(){var w=this.a
return w.m(new C.dOp(w))},
$S:0}
C.dOp.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.f8(0,B.H(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.LH},
$S:0}
C.dOA.prototype={
$0(){var w=this.a
return w.m(new C.dOo(w))},
$S:0}
C.dOo.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.b04()
else w.p2=null},
$S:0}
C.dOB.prototype={
$0(){var w=this.a
return w.m(new C.dOn(w))},
$S:0}
C.dOn.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
C.c68.prototype={
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
$S:337}
C.c69.prototype={
$1(d){var w=new B.r5([],[]).oK(d.data,!0)
if(x.f.b(w)&&J.t(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:467}
C.fri.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)&&w.h(d,1)},
$S:234}
C.frj.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)||w.h(d,1)},
$S:234}
C.frk.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)!==w.h(d,1)},
$S:234}
C.frr.prototype={
$1(d){return!J.t(d,0)},
$S:234}
C.frs.prototype={
$1(d){var w=J.a7(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:234}
C.frt.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:234}
C.dQi.prototype={
$1(d){return this.a.auX(0)},
$S:7}
C.dPX.prototype={
$0(){var w=this.b
return this.a.cx=new B.N(w,B.ifL(),B.U(w).k("N<1,F>")).fM(0)},
$S:0}
C.dQ_.prototype={
$1(d){return""+d},
$S:78}
C.dQj.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dPV.prototype={
$1(d){return this.a.auX(this.b)},
$S:7}
C.dPW.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.ayL(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mM(0,d,a1.mf(0.15,0.3))
u=a1.mM(0,d,a1.mf(0.15,0.62))
t=a1.mM(0,"and",a1.mf(0.48,0.46))
s=a1.mM(0,a0,a1.mf(0.82,0.46))
a1=t.a
w.push(new C.nH(v.a,a1,0))
w.push(new C.nH(u.a,a1,1))
w.push(new C.nH(a1,s.a,0))
break
case 1:v=a1.mM(0,d,a1.mf(0.12,0.25))
u=a1.mM(0,d,a1.mf(0.12,0.65))
r=a1.mM(0,"xor",a1.mf(0.46,0.25))
q=a1.mM(0,"and",a1.mf(0.46,0.65))
p=a1.ayK(0,a0,a1.mf(0.82,0.25),0)
o=a1.ayK(0,a0,a1.mf(0.82,0.65),0)
a1=v.a
n=r.a
w.push(new C.nH(a1,n,0))
m=u.a
w.push(new C.nH(m,n,1))
l=q.a
w.push(new C.nH(a1,l,0))
w.push(new C.nH(m,l,1))
w.push(new C.nH(n,p.a,0))
w.push(new C.nH(l,o.a,0))
break
case 2:k=a1.mM(0,"clock",a1.mf(0.15,0.4))
j=a1.mM(0,"not",a1.mf(0.45,0.65))
s=a1.mM(0,a0,a1.mf(0.82,0.3))
i=a1.mM(0,"buzzer",a1.mf(0.82,0.65))
a1=k.a
w.push(new C.nH(a1,s.a,0))
n=j.a
w.push(new C.nH(a1,n,0))
w.push(new C.nH(n,i.a,0))
break
default:h=a1.mM(0,d,a1.mf(0.12,0.25))
g=a1.mM(0,d,a1.mf(0.12,0.7))
f=a1.mM(0,"nor",a1.mf(0.5,0.25))
e=a1.mM(0,"nor",a1.mf(0.5,0.7))
s=a1.mM(0,a0,a1.mf(0.86,0.25))
a1=f.a
w.push(new C.nH(g.a,a1,0))
n=e.a
w.push(new C.nH(n,a1,1))
w.push(new C.nH(h.a,n,0))
w.push(new C.nH(a1,n,1))
w.push(new C.nH(a1,s.a,0))}},
$S:0}
C.dQ0.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.ayL(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.CZ(p,"switch",new B.o(0.14*q.a,r*q.b),0))}o.mM(0,w.e,o.mf(0.86,0.5))},
$S:0}
C.dPQ.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dPR.prototype={
$2(d,e){return A.j.aS(d.c.b,e.c.b)},
$S:z+23}
C.dPS.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dPT.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dPU.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.adR(this.c)
if(v.ax)C.JH("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gH(w)
v.CW=!1
if(v.ax)G.dE(140,"",250,0,0.3,"square")}},
$S:0}
C.dQ1.prototype={
$0(){},
$S:0}
C.dQ2.prototype={
$0(){return A.d.cA(this.a.e,this.b)},
$S:0}
C.dQ3.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dPZ.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bt(w.e,new C.dPY(v))
w.cy=null},
$S:0}
C.dPY.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
C.dPP.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mM(0,this.b,new B.o(w.x.a*(0.3+v.ai()*0.4),w.x.b*(0.2+v.ai()*0.6))).a},
$S:0}
C.dQc.prototype={
$0(){var w=this.a
return w.m(new C.dQb(w))},
$S:0}
C.dQb.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dQd.prototype={
$2(d,e){var w=null,v=this.a,u=new B.av(e.b,e.d)
v.x=u
return B.aA(A.c5,B.jl(B.b4(w,w,w,new C.bd5(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dQ6(v),w,w,w,new C.dQ7(v),new C.dQ8(v),new C.dQ9(v),w,w,w,w,w,w,w,w,w,w,new C.dQa(v),w,w,w,!1,A.a4)},
$S:36}
C.dQa.prototype={
$1(d){return this.a.caW(d.b)},
$S:71}
C.dQ8.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cjV(u)
if(t!=null){v.as=t
v.at=u
return}w=v.azC(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aJ(0,u)}},
$S:49}
C.dQ9.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.o(A.j.E(w.a+u.Q.a,46,u.x.a-46),A.j.E(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:19}
C.dQ7.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c23(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bt(v,new C.dQ4(w))
u=t.as
u.toString
v.push(new C.nH(u,w.a,w.b))
B.jU()}}t.z=t.as=null},
$S:38}
C.dQ4.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
C.dQ6.prototype={
$1(d){return this.a.axA(d.b)},
$S:305}
C.dQe.prototype={
$0(){return this.a.bDy(this.b.a)},
$S:0}
C.dQf.prototype={
$0(){return this.a.auX(this.b.a)},
$S:0}
C.dQg.prototype={
$0(){var w=this.a
return w.m(new C.dQ5(w))},
$S:0}
C.dQ5.prototype={
$0(){var w=this.a
w.ayL(0)
w.ay=null},
$S:0}
C.dQh.prototype={
$0(){return this.a.cBe(this.b)},
$S:0}
C.cVn.prototype={
$0(){var w=this,v=null,u=B.fq(v,A.cr,v,v,v,B.cP(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.bX,v,A.dz,A.bY)
u.e5()
return u},
$S:267}
C.dWg.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dWf.prototype={
$0(){return this.a.d=null},
$S:0}
C.dWi.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c3X()},
$S:124}
C.dWh.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.frJ.prototype={
$0(){return K.aKN},
$S:z+40}
C.frK.prototype={
$0(){return D.dO3},
$S:z+43}
C.frL.prototype={
$0(){return D.dKW},
$S:z+13}
C.frM.prototype={
$0(){return D.een},
$S:z+14}
C.frN.prototype={
$0(){return D.dXg},
$S:z+15}
C.frO.prototype={
$0(){return K.aKE},
$S:z+16}
C.frP.prototype={
$0(){return D.ec9},
$S:z+17}
C.frQ.prototype={
$0(){return K.aKM},
$S:z+12}
C.frR.prototype={
$0(){return D.dNb},
$S:z+19}
C.f78.prototype={
$2(d,e){return new C.afT($.bGt()[e],new C.f77(e,this.a),null)},
$S:z+20}
C.f77.prototype={
$0(){var w=this.a,v=I.aIp.h(0,$.bGt()[w].a)
$.ath=v==null?"music":v
B.a6(this.b,!1).cd(B.eb(new C.f75(w),!1,null,x.H))},
$S:0}
C.f75.prototype={
$1(d){return $.bGt()[this.a].e.$0()},
$S:39}
C.f79.prototype={
$2(d,e){return new C.aeL(D.aAP[e],new C.f76(this.a,e),null)},
$S:z+21}
C.f76.prototype={
$0(){return this.a.d.$1(D.aAP[this.b])},
$S:0}
C.f6P.prototype={
$0(){return this.a.as=!0},
$S:0}
C.f6O.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f6N.prototype={
$1(d){var w=this
return new B.e0(new C.f6M(w.a,w.b,w.c,w.d),null)},
$S:20}
C.f6M.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=x.l,a2=B.aH(a3,a0,a1).w
a1=B.aH(a3,a0,a1).w
w=x.p
v=B.a([D.fHE,A.ax,D.fOr,A.af],w)
for(u=d.d,t=d.a,s=x.G,r=d.b,q=d.c,p=0;p<3;p=o){o=p+1
n=B.d("SLAB "+o,a0,a0,a0,a0,a0,a0,D.fx0,a0,a0,a0)
m=new B.aO(12,12)
l=new B.aO(12,12)
l=B.a([new B.bz(1,A.bc,B.aM(a0,A.Z,!1,a0,!0,A.t,a0,B.aN(),r[p],a0,a0,a0,a0,a0,2,new B.e5(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Title",a0,N.EH,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.bf(m,m,m,m),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ac,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.ju,!0,A.a5,a0,A.ao,a0,a0,a0,a0),a0),A.ae,new B.bz(2,A.bc,B.aM(a0,A.Z,!1,a0,!0,A.t,a0,B.aN(),q[p],a0,a0,a0,a0,a0,2,new B.e5(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Small line",a0,N.EH,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.bf(l,l,l,l),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ac,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.ju,!0,A.a5,a0,A.ao,a0,a0,a0,a0),a0)],w)
m=B.a([],w)
for(k=0;k<30;++k){j=D.dxZ[k]
i=new B.aO(12,12)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.C(t.a.c.d,s)
t.w=h}g=A.d.gH(h).j(0.3)}else g=A.c.j(0.06)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.C(t.a.c.d,s)
t.w=h}f=A.d.gH(h)}else f=A.bA
e=new B.ay(f,u[p].A(0,j)?1.8:1,A.r,-1)
m.push(B.aA(a0,B.q(a0,B.X(j,u[p].A(0,j)?A.c:A.aS,a0,a0,a0,22),A.f,a0,a0,new B.p(g,a0,new B.bH(e,e,e,e),new B.bf(i,i,i,i),a0,a0,A.n),a0,a0,a0,A.fy,a0,a0,a0,42),A.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.f6K(a4,p,u,j),a0,a0,a0,a0,a0,a0,!1,A.a4))}A.d.v(v,B.a([n,A.an,new B.c7(A.aL,A.e,A.i,A.m,a0,A.p,a0,0,l,a0),A.U,new B.a5(a0,44,B.cl(m,a0,a0,a0,a0,a0,A.aL,!1),a0),A.aC],w))}v.push(B.bI(A.AQ,a0,new C.f6L(t,r,q,u,a3),a0))
return new B.D(new B.R(0,0,0,a2.f.d),B.bn(!0,new B.cR(new B.aY(0,1/0,0,a1.a.b*0.86),B.cl(v,a0,a0,A0.yH,a0,a0,A.ah,!0),a0),!0,!1,A.ag,!0,!0),a0)},
$S:109}
C.f6K.prototype={
$0(){var w=this
return w.a.$1(new C.f6J(w.b,w.c,w.d))},
$S:0}
C.f6J.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.f6L.prototype={
$0(){var w=this,v=w.a
v.m(new C.f6I(v,w.b,w.c,w.d))
B.a6(w.e,!1).O(null)},
$S:0}
C.f6I.prototype={
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
C.f6X.prototype={
$0(){var w=this.a
return w.m(new C.f6W(w))},
$S:0}
C.f6W.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.f6Y.prototype={
$0(){return E.uB(this.b,this.a.f,"scene")},
$S:0}
C.f6Z.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ar(A.d.gH(u),A.d.gan(u),0.4)
u.toString
w=this.a.ga_o().x
w===$&&B.c()
return B.c3(v,new B.p(v,v,v,v,v,new B.c1(D.b1Q,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.c3],x.O),v,v),A.n),A.bi)},
$S:325}
C.f7_.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.at(B.ev(A.A,B.c9(new B.h5(B.a([u.guE(),u.ga_o()],x.dS)),new C.f6V(u,this.b,v),w),A.f,A.e0),w,w,w)},
$S:231}
C.f6V.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.guE().x
r===$&&B.c()
w=r<0.9?1:1-C.btl(r,0.9,0.98)
v=s.ga_o().x
v===$&&B.c()
u=A.dC.aA(0,v)
switch(s.gayM().a){case 0:s=s.bCJ(t.b,r,u,t.c)
break
case 1:s=s.bTB(t.b,r,u,t.c)
break
case 2:s=s.cG5(t.b,r,u,t.c)
break
case 3:s=s.bFF(t.b,r,u,t.c)
break
case 4:s=s.bJ0(t.b,r,u,t.c)
break
case 5:s=s.caX(t.b,r,u,t.c)
break
default:s=null}return B.da(s,w)},
$S:233}
C.f70.prototype={
$2(d,e){var w=B.ab4(this.b),v=this.c.d,u=B.ar(A.d.gH(v),A.d.gan(v),0.4)
u.toString
v=B.ar(A.d.gH(v),A.d.gan(v),0.4)
v.toString
v=w.cP3(u,A.bA,v,3.5)
u=this.a
w=u.guE().x
w===$&&B.c()
return B.YN(B.kV(null,null,null,1,0,new C.f6U(u),A.j.E(w,0,1)),v)},
$S:1901}
C.f6U.prototype={
$1(d){var w=this.a
w.guE().sp(0,d)
if(w.as)w.m(new C.f6Q(w))},
$S:6}
C.f6Q.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f71.prototype={
$0(){var w=this.a
w.guE().sp(0,0)
w.aeX()},
$S:0}
C.f72.prototype={
$1(d){var w=this.a
w.m(new C.f6T(w,d))
if(w.as)w.aeX()},
$S:6}
C.f6T.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f73.prototype={
$0(){var w=this.a
w.m(new C.f6S(w,this.b))
w.guE().sp(0,0)
if(w.as)w.aeX()},
$S:0}
C.f6S.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.f74.prototype={
$0(){var w=this.a
return w.m(new C.f6R(w,this.b))},
$S:0}
C.f6R.prototype={
$0(){var w=B.C(this.b,x.G)
return this.a.w=w},
$S:0}
C.f6G.prototype={
$2(d,e){return A.j.aS(d.a,e.a)},
$S:1902}
C.f6H.prototype={
$1(d){return d.b},
$S:1903}
C.dqw.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.dqx.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.dqt.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.dqu.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dqv.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dqy.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dqz.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dqA.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dqB.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.dqC.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.dqD.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.dqE.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.dqF.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.dqG.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.ewN.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ewC.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.ewE.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gX(e.b),97)},
$S:z+31}
C.ewF.prototype={
$2(d,e){return d+A.o.F(A.a.gX(e.a),31)+A.o.F(A.a.gX(e.b),17)},
$S:z+32}
C.ewI.prototype={
$1(d){var w=D.n4.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+33}
C.ewJ.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.U(q),o=x.dg,n=B.C(new B.e9(new B.cM(new B.Y(q,new C.ewK(d),p.k("Y<1>")),new C.ewL(r),p.k("cM<1,r8?>")),o),o.k("M.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aN(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.J)(n),++v){u=n[v]
if(w.length>=6)return
t=B.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.ewK.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ewL.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.ewG.prototype={
$1(d){return D.n4.h(0,d.b).c===D.xB},
$S:z+54}
C.ewH.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.exc.prototype={
$1(d){var w=this.a,v=d.a,u=A.j.E((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.vH(0,u)
w.a7j(A.o.aq(v,1000))},
$S:7}
C.ewM.prototype={
$0(){},
$S:0}
C.ewy.prototype={
$0(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$$0)
case 6:e.aB("String","ngmy_core_reaction_lab_v1",s.a.d.aj())
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
C.ewP.prototype={
$1(d){var w=null,v=this.a.b
return B.bn(!0,B.x(B.a([A.U,B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.X(D.n4.h(0,v).b,D.n4.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fZZ,w,B.d(D.n4.h(0,v).a,w,w,w,w,w,w,A.fW,w,w,w),w,w,w),B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,W.arB,w,w,w,w,new C.ewO(d),!1,w,w,w,w,w,w,w,D.fRh,w,w,w)],x.p),A.m,w,A.e,A.Q,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.ewO.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.ewR.prototype={
$1(d){var w,v,u,t=null,s=B.aH(d,t,x.l).w,r=B.a([D.eqk],x.p)
for(w=0;w<6;++w){v=D.aBd[w]
u=B.d(v.a,t,t,t,t,t,t,A.fW,t,t,t)
r.push(B.dG(!1,t,t,t,!0,t,t,t,!0,t,t,D.c1O,t,t,t,t,new C.ewQ(d,v),!1,t,t,t,t,t,B.d(v.b,t,t,t,t,t,t,A.mA,t,t,t),t,u,t,t,t))}return B.bn(!0,new B.cR(new B.aY(0,1/0,0,s.a.b*0.7),B.cl(r,t,t,D.bGJ,t,t,A.ah,!0),t),!0,!1,A.ag,!0,!0)},
$S:27}
C.ewQ.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.ewB.prototype={
$1(d){var w=null
return B.eg(B.a([B.bM(!1,A.dl,w,w,!0,w,w,w,new C.ewz(d),w,w),B.bM(!1,A.EM,w,w,!0,w,w,w,new C.ewA(d),w,w)],x.p),w,w,I.m5,D.fOC,w,w,w,w,D.fRA,w)},
$S:18}
C.ewz.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.ewA.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.exa.prototype={
$0(){var w=this.a
return w.m(new C.ex9(w))},
$S:0}
C.ex9.prototype={
$0(){return this.a.r=!1},
$S:0}
C.exb.prototype={
$2(d,e){var w,v,u,t=null,s=new B.av(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.nm(new C.ex0(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.bcy:t
v=B.a([B.b4(u,t,t,new C.bj3(w,v,new C.ex1(r),new C.ex2(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ap(t,new B.dx(!0,B.c9(w,new C.ex3(r),t),t),t,t,10,10,6,t))
if(r.ax)v.push(r.bKF())
return B.aA(A.c5,B.jl(new B.an(A.a0,t,A.b2,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.ex4(r),t,r.gcld(),t,new C.ex5(r),new C.ex6(r),new C.ex7(r),t,t,t,t,t,t,t,t,t,t,new C.ex8(r),t,t,t,!1,A.a4)},
$S:36}
C.ex0.prototype={
$0(){return this.a.acU(this.b)},
$S:0}
C.ex8.prototype={
$1(d){return this.a.cDN(d.b)},
$S:71}
C.ex6.prototype={
$1(d){return this.a.cle(d.b)},
$S:49}
C.ex7.prototype={
$1(d){return this.a.clf(d.b)},
$S:19}
C.ex5.prototype={
$1(d){return this.a.b3B()},
$S:38}
C.ex4.prototype={
$1(d){return this.a.adB(d.b)},
$S:305}
C.ex1.prototype={
$0(){return this.a.z},
$S:659}
C.ex2.prototype={
$0(){return this.a.Q},
$S:736}
C.ex3.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bOW()
if(p.length===0)return A.bM
w=A.w.j(0.55)
v=B.m(14)
u=B.L(A.bA,A.r,1)
t=B.a([D.fM0,A.cU],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.J)(p),++r)t.push(B.d(p[r],q,2,A.a2,q,q,q,D.fvE,q,q,q))
return B.q(q,B.x(t,A.E,q,A.e,A.Q,0,A.p),A.f,q,q,new B.p(w,q,u,v,q,q,A.n),q,q,q,q,A.hb,q,q,q)},
$S:65}
C.ewD.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.m(12),t=B.L(e.j(0.6),A.r,1),s=x.p
return new B.D(A.ej,B.A(B.a([B.q(w,B.X(d,e,w,w,w,21),A.f,w,w,new B.p(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bd,B.E(B.x(B.a([B.d(f,w,w,w,w,w,w,Ad.Vs,w,w,w),A.bG,B.d(g,w,w,w,w,w,w,F.ab0,w,w,w)],s),A.E,w,A.e,A.i,0,A.p),1)],s),A.E,w,A.e,A.i,0,w,w),w)},
$S:1905}
C.ewX.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).hU()},
$S:0}
C.ewY.prototype={
$0(){var w=this.a
return w.m(new C.ewW(w))},
$S:0}
C.ewW.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ewZ.prototype={
$0(){var w=this.a
return w.m(new C.ewV(w))},
$S:0}
C.ewV.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.ex_.prototype={
$0(){var w=this.a
return w.m(new C.ewU(w))},
$S:0}
C.ewU.prototype={
$0(){return this.a.r=!0},
$S:0}
C.ewT.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.n4.gdO(D.n4),w=w.gae(w);w.C();){v=w.gR(w)
if(v.b.c===e)p.push(v.a)}w=B.d(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.J)(p),++r)u.push(s.cyx(p[r]))
return new B.D(R.akX,B.x(B.a([new B.D(Ai.amA,w,q),B.A(u,A.m,q,A.e,A.i,0,q,q)],v),A.E,q,A.e,A.i,0,A.p),q)},
$S:z+37}
C.ewS.prototype={
$0(){return this.a.cb2(this.b)},
$S:0}
C.dqs.prototype={
$0(){var w=this,v=null,u=B.fq(v,A.cr,v,v,v,B.cP(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.bX,v,A.dz,A.bY)
u.e5()
return u},
$S:267}
C.bPs.prototype={
$1(d){return d.r<=0},
$S:z+38}
C.bPD.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bPy.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bPE.prototype={
$1(d){return this.a.Mf(d)&&!d.x},
$S:z+0}
C.bPF.prototype={
$2(d,e){return Math.max(d,this.a.aCt(e))},
$S:z+6}
C.bPH.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bPI(w))},
$S:z+5}
C.bPI.prototype={
$0(){return this.a.a},
$S:88}
C.bPG.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:73}
C.bPJ.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bPK(w))},
$S:z+5}
C.bPK.prototype={
$0(){return this.a.a},
$S:88}
C.bPu.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bPv(w))},
$S:z+5}
C.bPv.prototype={
$0(){return this.a.a},
$S:88}
C.bPt.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:73}
C.bPw.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bPx(w))},
$S:z+5}
C.bPx.prototype={
$0(){return this.a.a},
$S:88}
C.bPr.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bPL.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bPz.prototype={
$1(d){return d!==this.b&&this.a.aIO(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bPC.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bPB.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bPA.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bJQ.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bJR.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.ctc.prototype={
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
C.fUU.prototype={
$1(d){var w
$.Q()
w=B.K()
w.r=d.gp(0)
return w},
$S:1906}
C.fUW.prototype={
$2(d,e){var w
$.Q()
w=B.K()
w.b=A.a9
w.c=e
w.r=d.gp(0)
w.d=A.bw
return w},
$S:1907}
C.fUX.prototype={
$5(d,e,f,g,h){return B.bl(new B.a1(d,e,d+f,e+g),new B.aO(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1908}
C.fUV.prototype={
$3(d,e,f){var w
$.Q()
w=B.K()
w.sav(new B.a9(A.b7,A.b9,A.x,B.a([e,f],x.O),null,null).aK(0,d))
return w},
$S:1909}
C.bJu.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.bJv.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bJt(w))},
$S:0}
C.bJt.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bJw.prototype={
$0(){return B.a([],x.k)},
$S:1910}
C.bJx.prototype={
$1(d){return this.a.bE(d).a>15e5},
$S:436}
C.bJy.prototype={
$0(){var w,v,u
J.bGC(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.tM(v))if(C.hdZ(v.b))w.b34(v)
else w.a0s(v)
else{u=w.a.c.bfW(v)
w.af8(u==null?"The "+$.qB().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bJs.prototype={
$1(d){return new B.e0(new C.bJp(this.a,this.b),null)},
$S:20}
C.bJp.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p=null,o=this.b,n=new C.bJq(this.a,o,a3),m=$.qB(),l=o.b,k=m.h(0,l).d,j=A.j.V(o.ch/1.04),i=new C.bJr(o,n,k),h=B.m(26),g=B.L(k.j(0.55),A.r,1.4),f=x.V,e=B.a([new B.ac(0,A.G,k.j(0.25),A.H,26)],f),d=B.q(p,p,A.f,p,p,new B.p(A.aV,p,p,B.m(3),p,p,A.n),p,4,p,p,p,p,p,42),a0=k.j(0.2),a1=B.L(k,A.r,1)
a1=B.q(p,B.at(B.d(m.h(0,l).c,p,p,p,p,p,p,A.pQ,p,p,p),p,p,p),A.f,p,p,new B.p(a0,p,a1,p,p,p,A.a7),p,42,p,p,p,p,p,42)
a0=x.p
w=B.E(B.x(B.a([B.d(m.h(0,l).b,p,1,A.a2,p,p,p,A.kf,p,p,p),D.fLP],a0),A.E,p,A.e,A.i,0,A.p),1)
v=k.j(0.2)
u=B.m(14)
t=B.L(k,A.r,1)
u=B.A(B.a([a1,A.bd,w,B.q(p,B.d(""+A.j.V(o.ch*100)+"%",p,p,p,p,p,p,B.l(p,p,k,p,p,p,p,p,p,p,p,15,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.p(v,p,t,u,p,p,A.n),p,p,p,p,A.mb,p,p,p)],a0),A.m,p,A.e,A.i,0,p,p)
t=A.w.j(0.35)
v=B.m(18)
w=B.L(A.dr,A.r,1)
a1=30+28*o.ch
s=B.m(8)
r=B.a([k.j(0.85),A.as],x.O)
q=B.L(A.aD,A.r,2)
f=B.a([new B.ac(0,A.G,k.j(0.5),A.H,14)],f)
v=B.q(p,B.at(B.cT(p,B.at(B.ev(A.A,new B.D(A.hF,B.d(m.h(0,l).c,p,p,p,p,p,p,A.mz,p,p,p),p),A.f,A.dB),p,p,p),p,p,A.b4,new B.p(p,p,q,s,f,new B.a9(A.aA,A.aF,A.x,r,p,p),A.n),A.eG,p,a1*0.58,p,p,p,p,p,a1),p,p,p),A.f,p,p,new B.p(t,p,w,v,p,p,A.n),p,120,p,p,p,p,p,1/0)
i=B.A(B.a([i.$2("1\xd7",1),i.$2("2\xd7",2),i.$2("3\xd7",3),i.$2("4\xd7",4),i.$2("5\xd7",5)],a0),A.m,p,A.e,A.i,0,p,p)
w=B.aG(p,p,p,p,B.X(A.apY,k,p,p,p,30),p,p,p,new C.bJl(n,o),p,p,p,p,p,p)
t=B.ab4(a2).bfp(k,A.bA,k.j(0.2),A.c,8)
o=B.A(B.a([w,B.E(B.YN(B.kV(p,p,p,5.2,1,n,A.j.E(o.ch,1,5.2)),t),1),B.aG(p,p,p,p,B.X(A.a2a,k,p,p,p,30),p,p,p,new C.bJm(n,o),p,p,p,p,p,p)],a0),A.m,p,A.e,A.i,0,p,p)
return B.bn(!0,B.q(p,B.x(B.a([d,A.af,u,A.aC,v,A.af,i,A.ax,o,B.A(B.a([B.E(B.d(j<=1?"Normal size":"About "+j+" times the normal size",p,p,p,p,p,p,A.hh,p,p,p),1),B.bM(!1,A4.aWA,p,p,!0,p,p,p,new C.bJn(a2),p,B.ft(p,p,k.j(0.25),p,p,p,p,p,p,p,p,A.c,p,p,p,p,p,A.rQ,p,p,p,p,p,p,p,p))],a0),A.m,p,A.e,A.i,0,p,p)],a0),A.m,p,A.e,A.Q,0,A.p),A.f,p,p,new B.p(p,p,g,h,e,D.c92,A.n),p,p,p,A.yy,D.bDf,p,p,p),!0,!1,A.ag,!0,!0)},
$S:87}
C.bJq.prototype={
$1(d){var w=this.a
w.m(new C.bJj(this.b,d))
this.c.$1(new C.bJk())
w.a.toString},
$S:6}
C.bJj.prototype={
$0(){return this.a.ch=A.j.E(this.b,1,5.2)},
$S:0}
C.bJk.prototype={
$0(){},
$S:0}
C.bJr.prototype={
$2(d,e){var w=this,v=null,u=Math.abs(w.a.ch-e)<0.05,t=u?w.c.j(0.28):A.c.j(0.06),s=B.m(14),r=u?w.c:A.bA
r=B.L(r,A.r,u?2:1)
return B.E(B.aA(v,B.cT(v,B.at(B.ev(A.A,B.d(d,v,v,v,v,v,v,B.l(v,v,u?w.c:A.ab,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.f,A.e0),v,v,v),v,v,A.b4,new B.p(t,v,r,s,v,v,A.n),A.h_,v,v,v,A.jn,A.qv,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.bJo(w.b,e),v,v,v,v,v,v,!1,A.a4),1)},
$S:778}
C.bJo.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bJl.prototype={
$0(){return this.a.$1(this.b.ch-0.4)},
$S:0}
C.bJm.prototype={
$0(){return this.a.$1(this.b.ch+0.4)},
$S:0}
C.bJn.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.bJN.prototype={
$2(d,e){var w
if(d==="short"){G.dE(1800,"",120,0,0.55,"noise")
G.dE(200,"",160,2.2,0.4,"saw")
B.fL()
w=this.a
if(w.c!=null)w.af8("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){G.dE(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.af8("\u26a0 Overloaded! The "+$.qB().h(0,e.b).b+" can only give about "+A.j.ad(w.a.c.Af(e),2)+" amps but your gadgets are asking for "+A.j.ad(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.af8("Burnt out! "+e.ay)
G.dE(140,"",320,0,0.6,"noise")
G.dE(900,"",160,1.5,0.35,"square")}},
$S:z+42}
C.bJO.prototype={
$0(){},
$S:0}
C.bIX.prototype={
$0(){},
$S:0}
C.bJP.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bJM.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=B.a([B.aA(A.c5,B.b4(p,p,p,new C.ajM(w,v,u,t,s,r==null?A.jq:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bJG(o),new C.bJH(o),new C.bJI(o),p,p,p,p,p,p,p,p,p,p,new C.bJJ(o),p,p,p,!1,A.a4)],q)
if(o.a.c.a.length===0)n.push(D.bbP)
w=o.Q
if(w!=null){v=B.m(14)
u=B.L(A.cF,A.r,1)
n.push(B.ap(p,B.aA(p,B.q(p,B.A(B.a([D.fC2,B.E(B.d(w,p,p,p,p,p,p,D.ftT,p,p,p),1)],q),A.E,p,A.e,A.i,0,p,p),A.f,p,p,new B.p(D.bhS,p,u,v,p,p,A.n),p,p,p,p,A.nD,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bJK(o),p,p,p,p,p,p,!1,A.a4),p,p,10,10,8,p))}if(o.e!=null)n.push(B.ap(8,o.b0X(B.A(B.a([D.bIY,new E.fB(A.CE,"Cut wire",new C.bJL(o),A.c0,p)],q),A.m,p,A.e,A.i,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(B.ap(8,o.clN(w),p,p,10,10,p,p))}return B.jl(new B.an(A.a0,p,A.b2,A.t,n,p),A.t,p)},
$S:323}
C.bJH.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.ba7(s)
if(r!=null){t.m(new C.bJE(t,r,d))
return}w=t.b3L(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new B.o(v*u.a,w.d*u.b).aJ(0,s)
t.m(new C.bJF(t,w))}},
$S:49}
C.bJE.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
C.bJF.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bJI.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new C.bJC(w,d))
else if(w.w!=null)w.m(new C.bJD(w,d.b.a5(0,w.x)))},
$S:19}
C.bJC.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
C.bJD.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.j.E(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.j.E(w.b/v.y.b,0.08,0.92)},
$S:0}
C.bJG.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.ba7(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.alV(u.a,u.b,v.a,v.b)!=null)G.dE(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.af6()},
$S:38}
C.bJJ.prototype={
$1(d){var w=this.a,v=d.b,u=w.b3L(v)
if(u!=null){w.m(new C.bJA(w,u))
if(D.mr.al(0,u.b))w.cwq(u)
w.a.toString
return}w.m(new C.bJB(w,w.cJg(v)))},
$S:71}
C.bJA.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
G.dE(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
G.dE(200,"",70,0,0.2,"saw")}},
$S:0}
C.bJB.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
C.bJK.prototype={
$0(){var w=this.a
return w.m(new C.bJz(w))},
$S:0}
C.bJz.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bJL.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
G.dE(300,"",50,0,0.35,"noise")
w.af6()},
$S:0}
C.bIY.prototype={
$0(){return this.a.bso(this.b)},
$S:0}
C.bJg.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.A(B.a([B.d(d,w,w,w,w,w,w,D.fo0,w,w,w),B.E(B.kV(this.b.d,w,w,g,h,new C.bJi(this.a,f),A.j.E(e,h,g)),1)],x.p),A.m,w,A.e,A.i,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1911}
C.bJi.prototype={
$1(d){var w=this.a
w.m(new C.bJh(this.b,d))
w.a.toString},
$S:6}
C.bJh.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bJ3.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
G.dE(260,"",70,0,0.35,"noise")
w.af6()},
$S:0}
C.bJ4.prototype={
$0(){var w=this.a
return w.m(new C.bJ2(w))},
$S:0}
C.bJ2.prototype={
$0(){return this.a.d=null},
$S:0}
C.bJ5.prototype={
$0(){this.a.m(new C.bJ1(this.b,this.c))
G.dE(900,"",40,0,0.3,"noise")},
$S:0}
C.bJ1.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bJ8.prototype={
$0(){return this.a.b34(this.b)},
$S:0}
C.bJ9.prototype={
$0(){return this.a.a0s(this.b)},
$S:0}
C.bJa.prototype={
$0(){return this.a.a25(this.b)},
$S:0}
C.bJb.prototype={
$0(){var w=this.a
w.m(new C.bJ0(this.b,this.c))
w.a.toString},
$S:0}
C.bJ0.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bJc.prototype={
$0(){var w=this.a
w.m(new C.bJ_(this.b,this.c))
w.a.toString},
$S:0}
C.bJ_.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bJd.prototype={
$0(){var w=this.a
w.m(new C.bIZ(this.b,this.c))
w.a.toString},
$S:0}
C.bIZ.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bJe.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJf.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJ6.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJ7.prototype={
$1(d){return this.a.f=d},
$S:6}
C.fru.prototype={
$1(d){return d.aIp("bulb")},
$S:z+2}
C.frv.prototype={
$1(d){return d.qb(0,"switch")&&d.aIp("bulb")},
$S:z+2}
C.frw.prototype={
$1(d){return A.d.aV(d.a,new C.frh())},
$S:z+2}
C.frh.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.frx.prototype={
$1(d){return d.qb(0,"resistor")&&A.d.aV(d.a,new C.frg())},
$S:z+2}
C.frg.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.fry.prototype={
$1(d){return!d.qb(0,"battery")&&d.aIp("bulb")},
$S:z+2}
C.frl.prototype={
$1(d){return A.d.aV(d.a,new C.frf())},
$S:z+2}
C.frf.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.frm.prototype={
$1(d){return A.d.aV(d.a,new C.fre())},
$S:z+2}
C.fre.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.frn.prototype={
$1(d){return A.d.aV(d.a,new C.frd())},
$S:z+2}
C.frd.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fro.prototype={
$1(d){var w=d.a
return A.d.aV(w,new C.frb())&&A.d.aV(w,new C.frc())&&d.qb(0,"buck")},
$S:z+2}
C.frb.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.frc.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.frp.prototype={
$1(d){var w=d.a
return A.d.aV(w,new C.fr9())&&A.d.aV(w,new C.fra())},
$S:z+2}
C.fr9.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fra.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.frq.prototype={
$1(d){return A.d.aV(d.a,new C.fr8())},
$S:z+2}
C.fr8.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.e03.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a8(0)
w.v(0,v.b)},
$S:0}
C.e0c.prototype={
$1(d){var w=this.a.d
return w.aIO(d)&&w.tM(d)},
$S:z+0}
C.e0d.prototype={
$1(d){return d.x},
$S:z+0}
C.e0e.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.e0f.prototype={
$0(){},
$S:0}
C.e02.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.m(22),o=x.p,n=B.a([D.fTz,A.ax,D.fDS,A.X],o)
for(w=this.a,v=0;v<19;++v){u=D.RT[v]
t=A.c.j(0.06)
s=new B.aO(14,14)
r=new B.ay(A.bA,1,A.r,-1)
n.push(B.aA(q,B.q(q,B.x(B.a([B.d(u.a,q,q,q,q,q,q,A.ix,q,q,q),A.bG,B.d(u.b,q,3,A.a2,q,q,q,D.fuD,q,q,q)],o),A.E,q,A.e,A.i,0,A.p),A.f,q,q,new B.p(t,q,new B.bH(r,r,r,r),new B.bf(s,s,s,s),q,q,A.n),q,q,q,A.cx,A.bh,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.e01(w,d,u),q,q,q,q,q,q,!1,A.a4))}return B.eN(q,F.nu,new B.D(A.bR,new B.a5(340,q,B.cl(n,q,q,q,q,q,A.ah,!0),q),q),q,q,q,q,A.d7,q,new B.b9(p,A.a1),q)},
$S:48}
C.e01.prototype={
$0(){B.a6(this.b,!1).O(null)
var w=this.a
w.m(new C.e00(w,this.c))
G.dE(800,"",120,-0.5,0.3,"square")},
$S:0}
C.e00.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bl3()},
$S:0}
C.e_Z.prototype={
$1(d){return new C.WB(this.a.d,null)},
$S:z+44}
C.e0_.prototype={
$0(){},
$S:0}
C.e0b.prototype={
$1(d){return new B.e0(new C.e0a(this.a),null)},
$S:20}
C.e0a.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.aiU(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.q(0,k),f=g?A.b5:A.aI
k=B.aH(d,m,x.l).w
w=l.r
v=x.p
u=B.a([B.A(B.a([D.fQJ,A.b3,B.d(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.i,0,m,m),A.U,B.by(B.m(4),B.kn(A.bA,m,m,5,m,w.a/11,new B.lM(f,x.c)),A.aq),A.af],v)
if(h)u.push(D.fH1)
else{h=f.j(0.1)
t=B.m(14)
s=B.L(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.d(r+" Now: "+i.a,m,m,m,m,m,m,Af.Kz,m,m,m)
q=B.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,I.EI,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.q(m,B.x(B.a([r,A.ax,q,new B.bL(A.aa,m,m,B.bM(!1,B.d(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.e08(l,e),m,m),m)],v),A.E,m,A.e,A.i,0,A.p),A.f,m,m,new B.p(h,m,s,t,m,m,A.n),m,m,m,m,A.bh,m,m,m))}u.push(A.X)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aO(12,12)
n=new B.ay(o===l.f?f.j(0.6):A.dr,1,A.r,-1)
if(w.q(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
s=B.d(s,m,m,m,m,m,m,A.aaZ,m,m,m)
r=j[o]
q=w.q(0,o)?A.aD:A.c
u.push(B.aA(m,B.q(m,new B.c7(A.aL,A.e,A.i,A.m,m,A.p,m,0,B.a([s,A.au,new B.bz(1,A.bc,B.d(r.a,m,m,m,m,m,m,new B.G(!0,q,m,m,m,m,13,A.I,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],v),m),A.f,m,m,new B.p(h,m,new B.bH(n,n,n,n),new B.bf(t,t,t,t),m,m,A.n),m,m,m,A.eL,A.nD,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.e09(l,o,e),m,m,m,m,m,m,!1,A.a4))}return B.bn(!0,new B.cR(new B.aY(0,1/0,0,k.a.b*0.75),B.cl(u,m,m,A0.yH,m,m,A.ah,!0),m),!0,!1,A.ag,!0,!0)},
$S:87}
C.e08.prototype={
$0(){var w=this.a
w.m(new C.e06(w))
this.b.$1(new C.e07())
w.Ft()},
$S:0}
C.e06.prototype={
$0(){var w=this.a
$.aiU()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.e07.prototype={
$0(){},
$S:0}
C.e09.prototype={
$0(){var w=this.a
w.m(new C.e04(w,this.b))
this.c.$1(new C.e05())
w.Ft()},
$S:0}
C.e04.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e05.prototype={
$0(){},
$S:0}
C.e0h.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.e0i.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.mb("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a6(t.b,!1).cd(B.eb(new C.e0g(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.e0g.prototype={
$1(d){B.lm("construction")
return Ak.hSO()},
$S:z+45}
C.e0j.prototype={
$0(){return E.hEg(this.a,"ELECTRONICS LAB",this.b,A.aI)},
$S:0}
C.e0k.prototype={
$0(){var w=this.a
return w.m(w.d.gd05())},
$S:0}
C.e0l.prototype={
$0(){var w=this.a,v=w.d
w.m(v.gtc(v))
w.Ft()},
$S:0}
C.cKM.prototype={
$2(d,e){var w=null,v=this.a.gayU().x
v===$&&B.c()
return B.b4(w,w,w,new C.baW(v,w),A.az)},
$S:59}
C.cKL.prototype={
$3(d,e,f){var w=new B.aF($.Q().r,A.ai,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.D(new B.aZ(v,t))
w.D(new B.c5(v,u,v+e,u))
w.D(new B.c5(v,u,v,u+e))
w.D(new B.c5(v,u,v-e,u))
w.D(new B.c5(v,u,v,t))
w.D(new B.bu())
t=B.K()
t.r=A.c.j(f).gp(0)
this.a.af(w,t)},
$S:459}
C.fZO.prototype={
$3(d,e,f){return new C.VU(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+46}
C.fZP.prototype={
$4(d,e,f,g){var w=x.Y
return new B.d0(e,!1,B.it(A.A,g,null,new B.bg(B.cJ(A.cw,e,null),new B.br(0.85,1,w),w.k("bg<bN.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
C.dXd.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.dXc.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.m(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c1u(o):q.bEI(o,p),m=x.p
p=B.a([B.p7(new B.mK(n,new B.bP(p,x.bz)),A.pg,B.qx(),A.b4,A.b4,new C.dXa())],m)
n=t.d
if(n){w=A.j.F(q.gSA(),12)<4
v=w?150:96
u=B.m(16)
m=B.a([A.au],m)
if(w)m.push(D.bIK)
else m.push(A.b3)
m.push(B.q(s,s,A.f,s,s,new B.p(w?A.b5:A.as,s,s,s,s,s,A.a7),s,9,s,s,s,s,s,9))
m.push(A.au)
p.push(B.ap(s,B.at(B.cT(s,B.A(m,A.m,s,A.e,A.i,0,s,s),s,s,A.e4,new B.p(A.w,s,s,u,s,s,A.n),A.mS,s,28,s,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.Au)p.push(B.ap(s,B.at(B.q(s,s,A.f,s,s,A.LM,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.Eo)p.push(B.ap(s,B.q(s,s,A.f,s,s,A.LM,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ap(6,B.aA(s,B.at(B.q(s,s,A.f,s,s,new B.p(A.c.j(0.75),s,s,B.m(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dXb(q),s,s,s,s,s,s,!1,A.a4),s,s,0,0,s,s))
return B.by(r,new B.an(A.a0,s,A.b2,A.t,p,s),A.aq)},
$S:290}
C.dXa.prototype={
$2(d,e){var w=x.Y
return new B.d0(e,!1,B.it(A.A,d,null,new B.bg(e,new B.br(0.92,1,w),w.k("bg<bN.T>"))),null)},
$S:474}
C.dXb.prototype={
$0(){var w=this.a
return w.m(new C.dX9(w))},
$S:0}
C.dX9.prototype={
$0(){return this.a.e=null},
$S:0}
C.dX8.prototype={
$0(){var w=this.a
return w.m(new C.dX7(w,this.b))},
$S:0}
C.dX7.prototype={
$0(){return this.a.e=A.d.co(F.kv,this.b)},
$S:0}
C.dX6.prototype={
$0(){var w=this.a
return w.m(new C.dX5(w))},
$S:0}
C.dX5.prototype={
$0(){return this.a.e=0},
$S:0}
C.dX1.prototype={
$0(){var w=this.a
return w.m(new C.dX0(w))},
$S:0}
C.dX0.prototype={
$0(){return this.a.e=null},
$S:0}
C.dX4.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=B.m(o?20:8),m=A.w.j(0.55),l=x.p
m=B.q(p,B.A(B.a([D.fZn,A.au,B.E(B.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eO,p,p,p,F.aW9,p,p,p),1),B.d(A.a.b_(A.o.u(B.dg(new B.V(Date.now(),0,!1))),2,"0")+":"+A.a.b_(A.o.u(B.fP(new B.V(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.r6,p,p,p)],l),A.m,p,A.e,A.i,0,p,p),A.f,m,p,p,p,24,p,p,A.kr,p,p,p)
w=this.a
v=B.a([B.b4(p,p,p,new C.bxw(w.gSA(),this.c.d,p),A.az)],l)
o=w.e
if(o!=null){u=B.m(10)
t=B.L(A.aV,A.r,1)
s=B.m(10)
o=B.q(p,B.A(B.a([B.aA(p,B.q(p,p,A.f,p,p,A.aeg,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dX3(w),p,p,p,p,p,p,!1,A.a4),A.e1,B.q(p,p,A.f,p,p,A.aem,p,12,p,p,p,p,p,12),A.e1,B.q(p,p,A.f,p,p,D.b77,p,12,p,p,p,p,p,12),A.au,B.E(B.d(F.kv[o].a,p,1,A.a2,p,p,p,A.aaT,p,p,p),1)],l),A.m,p,A.e,A.i,0,p,p),A.f,A.cu,p,p,p,24,p,p,A.fG,p,p,p)
r=w.e
r.toString
v.push(B.bR(0,new B.D(D.bFe,B.q(p,B.by(s,B.x(B.a([o,B.E(B.b4(p,p,p,new C.afA(r,w.gSA(),p),A.fJ),1)],l),A.m,p,A.e,A.i,0,A.p),A.aq),A.f,p,p,new B.p(A.w,p,t,u,D.duh,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=B.m(18)
t=B.L(A.aV,A.r,1)
s=B.a([],l)
for(q=0;q<8;++q)s.push(new B.D(A.jn,w.awO(F.kv[q],34,!1),p))
v.push(B.ap(8,B.at(B.q(p,B.A(s,A.m,p,A.e,A.Q,0,p,p),A.f,p,p,new B.p(o,p,t,u,p,p,A.n),p,p,p,p,A.lK,p,p,p),p,p,p),p,p,0,0,p,p))
return B.by(n,B.q(p,B.x(B.a([m,B.E(new B.an(A.a0,p,A.b2,A.t,v,p),1)],l),A.m,p,A.e,A.i,0,A.p),A.f,X.Zv,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:290}
C.dX3.prototype={
$0(){var w=this.a
return w.m(new C.dX2(w))},
$S:0}
C.dX2.prototype={
$0(){return this.a.e=null},
$S:0}
C.frZ.prototype={
$0(){return D.egq},
$S:z+47}
C.fs_.prototype={
$0(){return D.dOC},
$S:z+48}
C.fs0.prototype={
$0(){return D.dL8},
$S:z+49}
C.fs1.prototype={
$0(){return D.dO_},
$S:z+50}
C.fs2.prototype={
$0(){return D.dT3},
$S:z+51}
C.fs3.prototype={
$0(){return D.ecc},
$S:z+52}
C.fs4.prototype={
$0(){return D.eem},
$S:z+53}
C.fs5.prototype={
$0(){return D.dSn},
$S:z+36}
C.cm4.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.cm5.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=(e.b-14)/2,i=x.p,h=B.a([],i)
for(w=$.hI5(),v=j*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aO(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ac(0,A.G,p.j(0.4),A.dv,16)],t)
n=B.d(r.c,k,k,k,k,k,k,Aj.Kx,k,k,k)
m=B.d(r.a,k,k,k,k,k,k,D.fzt,k,k,k)
l=A.c.j(0.85)
h.push(B.aA(k,B.q(k,new B.an(A.a0,k,A.ad,A.t,B.a([new B.cL(k,-6,-6,k,k,k,n,k),new B.bL(A.lz,k,k,B.x(B.a([m,A.cU,B.d(r.b,k,k,k,k,k,k,new B.G(!0,l,k,k,k,k,12,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)],i),A.E,k,A.e,A.Q,0,A.p),k)],i),k),A.f,k,k,new B.p(k,k,k,new B.bf(q,q,q,q),p,new B.a9(A.aA,A.aF,A.x,o,k,k),A.n),k,v,k,k,A.bE,k,k,j),A.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.cm3(d,r),k,k,k,k,k,k,!1,A.a4))}return B.bW(A.bH,h,A.bt,k,14,14)},
$S:169}
C.cm3.prototype={
$0(){return B.a6(this.a,!1).cd(B.eb(new C.cm2(this.b),!1,null,x.H))},
$S:0}
C.cm2.prototype={
$1(d){return this.a.f.$0()},
$S:39}
C.eTw.prototype={
$0(){var w=this.a
return w.w=w.d[w.b78(w.f)]},
$S:0}
C.eTs.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cN.ai()*7},
$S:0}
C.eTr.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bP(0,A.cd)
w.w=""},
$S:0}
C.eTu.prototype={
$0(){var w=this.a
return w.m(new C.eTt(w,this.b))},
$S:0}
C.eTt.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cA(w,this.b)},
$S:0}
C.eTv.prototype={
$1(d){return this.a.b1t(0)},
$S:2}
C.e32.prototype={
$0(){return C.JH("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.e33.prototype={
$0(){},
$S:0}
C.e2Y.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.e3_.prototype={
$0(){return this.a.b1v(this.b)},
$S:0}
C.e30.prototype={
$0(){var w=this.a
return w.m(new C.e2Z(w))},
$S:0}
C.e2Z.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.e31.prototype={
$0(){var w=this.a
return w.b1v(w.d)},
$S:0}
C.dOK.prototype={
$2(d,e){return d+e},
$S:81}
C.dOL.prototype={
$0(){},
$S:0}
C.dOF.prototype={
$2(d,e){return d+e},
$S:81}
C.dOI.prototype={
$0(){var w=this.a
return w.m(new C.dOH(w,this.b))},
$S:0}
C.dOH.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dOJ.prototype={
$0(){var w=this.a
return w.m(new C.dOG(w))},
$S:0}
C.dOG.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.e_y.prototype={
$0(){return E.uB(this.b,this.a.d,"drawing")},
$S:0}
C.e_z.prototype={
$1(d){var w=this.a
return w.m(new C.e_x(w,d))},
$S:49}
C.e_x.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aJM(u,v,t))},
$S:0}
C.e_A.prototype={
$1(d){var w=this.a
return w.m(new C.e_w(w,d))},
$S:19}
C.e_w.prototype={
$0(){return A.d.gan(this.a.e).c.push(this.b.b)},
$S:0}
C.e_B.prototype={
$1(d){var w=this.a
return w.m(new C.e_v(w,d))},
$S:23}
C.e_v.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aJM(u,v,t))},
$S:0}
C.e_C.prototype={
$0(){var w=this.a
return w.m(new C.e_u(w,this.b))},
$S:0}
C.e_u.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.e_D.prototype={
$1(d){var w=this.a
return w.m(new C.e_t(w,d))},
$S:6}
C.e_t.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.e_E.prototype={
$0(){var w=this.a
return w.m(new C.e_s(w))},
$S:0}
C.e_s.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.e_F.prototype={
$0(){var w=this.a
return w.m(new C.e_r(w))},
$S:0}
C.e_r.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.e_G.prototype={
$0(){var w=this.a
return w.m(A.d.gtc(w.e))},
$S:0}
C.e_H.prototype={
$0(){var w=this.a
return w.m(new C.e_q(w))},
$S:0}
C.e_q.prototype={
$0(){var w=this.a
w.x=D.aA3[A.o.F(A.d.co(D.aA3,w.x)+1,4)]},
$S:0}
C.eqm.prototype={
$0(){return this.a.f.J(0,this.b)},
$S:0}
C.eqn.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.JH("bell",B.a([0,4,7],w),500,0.45)
u.m(new C.eql(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.c()
if(v===u.length)C.JH("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:12}
C.eql.prototype={
$0(){var w=this.a
w.r.v(0,B.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
C.eqo.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.eqk(w))},
$S:12}
C.eqk.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
C.eqs.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return B.aA(w,B.lB(new C.eqq(v,e),w,A.b4,A.pg,w,w,new B.br(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eqr(v,e),w,w,w,w,w,w,!1,A.a4)},
$S:84}
C.eqr.prototype={
$0(){return this.a.cd9(this.b)},
$S:0}
C.eqq.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dr(),m=n.a
m.$flags&2&&B.aj(m)
m[11]=0.001
n.fL(3.141592653589793*e)
m=B.m(16)
w=o?p:D.c8d
if(o)v=q.a.r.q(0,q.b)?A.b5.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.L(u.r.q(0,t)?A.b5:A.aV,A.r,1)
if(o){r=B.dr()
r.fL(3.141592653589793)
u=u.e
u===$&&B.c()
r=B.fw(A.A,B.d(u[t],p,p,p,p,p,p,H.ab3,p,p,p),p,r,!0)
u=r}else u=D.fSg
return B.fw(A.A,B.q(A.A,u,A.f,p,p,new B.p(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:112}
C.eqt.prototype={
$0(){var w=this.a
return w.m(new C.eqp(w,this.b))},
$S:0}
C.eqp.prototype={
$0(){var w=this.a
w.d=this.b.a
w.au8()},
$S:0}
C.equ.prototype={
$0(){var w=this.a
return w.m(w.gbNp())},
$S:0}
C.eB8.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.eB9.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.eB6.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eB7.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eB5(w))},
$S:12}
C.eB5.prototype={
$0(){return this.a.f=-1},
$S:0}
C.eBa.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.eBb.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.eBc.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b1u()},
$S:12}
C.eBd.prototype={
$0(){return this.a.cdf(this.b)},
$S:0}
C.eP_.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:60}
C.eP8.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.d(d,w,1,A.a2,w,w,w,B.l(w,w,A.aS,w,w,w,w,w,w,w,w,f?16:14,w,w,A.V,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.D(A.kU,B.A(B.a([v,A.ae,new B.dn(1,A.cp,B.ev(A.A,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.e0),w)],x.p),A.m,w,A.e,A.i,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1912}
C.eP4.prototype={
$1(d){return this.a.m(new C.eP3())},
$S:2}
C.eP3.prototype={
$0(){},
$S:0}
C.eP5.prototype={
$0(){var w=this.a
return w.m(new C.eP2(w,this.b))},
$S:0}
C.eP2.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eP6.prototype={
$1(d){var w=this.a
return w.m(new C.eP1(w,d))},
$S:6}
C.eP1.prototype={
$0(){return this.a.f=A.j.V(this.b)},
$S:0}
C.eP7.prototype={
$0(){var w=this.a
return w.m(new C.eP0(w))},
$S:0}
C.eP0.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.ep1.prototype={
$0(){},
$S:0}
C.ep2.prototype={
$0(){},
$S:0}
C.eoV.prototype={
$0(){var w=this.a
return w.m(new C.eoU(w))},
$S:0}
C.eoU.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.bZ(u,1,!1,x.S)
w.r=0.9
E.Xn("hat",0,0.6)},
$S:0}
C.eoW.prototype={
$0(){var w=this.a
return w.m(new C.eoT(w))},
$S:0}
C.eoT.prototype={
$0(){this.a.y=1.1
E.mq("bell",36,200,0.4)},
$S:0}
C.eoX.prototype={
$0(){var w=this.a
return w.m(new C.eoS(w))},
$S:0}
C.eoS.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aw(Math.max(v,u)-t+1)
w.as=u
E.mq("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.eoY.prototype={
$0(){var w=this.a
return w.m(new C.eoR(w,this.b))},
$S:0}
C.eoR.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.eoZ.prototype={
$1(d){var w=this.a
return w.m(new C.eoQ(w,d))},
$S:6}
C.eoQ.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.j.V(this.b),r=J.e2(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.ep_.prototype={
$1(d){var w=this.a
return w.m(new C.eoP(w,d))},
$S:6}
C.eoP.prototype={
$0(){return this.a.z=A.j.V(this.b)},
$S:0}
C.ep0.prototype={
$1(d){var w=this.a
return w.m(new C.eoO(w,d))},
$S:6}
C.eoO.prototype={
$0(){return this.a.Q=A.j.V(this.b)},
$S:0}
C.cm0.prototype={
$0(){var w=this
return E.mq(w.a,w.b,w.c,w.d)},
$S:1};(function aliases(){var w=C.aNQ.prototype
w.bzF=w.t
w=C.aMV.prototype
w.byI=w.t
w=C.aMW.prototype
w.byJ=w.t
w=C.aN_.prototype
w.byN=w.t
w=C.aOF.prototype
w.bAB=w.t
w=C.aNO.prototype
w.bzD=w.t
w=C.azf.prototype
w.bvJ=w.t
w=C.azg.prototype
w.bvK=w.t
w=C.aLm.prototype
w.bx5=w.t
w=C.aN8.prototype
w.byW=w.t
w=C.aMX.prototype
w.byK=w.t
w=C.aNf.prototype
w.bz3=w.t
w=C.aNI.prototype
w.bzx=w.t
w=C.aO8.prototype
w.bzY=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(C.aFV.prototype,"gayh","c8C",1)
var r
v(r=C.aEo.prototype,"gchu","chv",22)
w(r,"gc9b","b04",1)
w(C.aEq.prototype,"gcaT","caU",1)
u(C.aEH.prototype,"gcb_","cb0",39)
w(r=C.aIV.prototype,"gcAY","cAZ",1)
w(r,"gcb1","aeX",1)
w(r,"gclX","clY",1)
w(r,"gcaZ","aeW",3)
w(r=C.aFU.prototype,"gbKy","aai",3)
w(r,"gcld","b3B",1)
w(r,"gcp0","ahx",3)
t(r,"gcb3","aeY",3)
t(r=C.a5o.prototype,"gtc","a8",1)
v(r,"gcYL","aoF",0)
v(r,"gcV8","Mf",0)
w(r,"gd05","bl3",1)
s(C.ajM.prototype,"gcbq",0,5,null,["$5"],["qR"],41,0,0)
w(r=C.aET.prototype,"gcbr","cbs",1)
w(r,"gcrQ","ahT",3)
w(r,"gchK","agd",3)
w(r,"gcyZ","aj2",3)
w(r=C.aGm.prototype,"gcda","cdb",1)
t(r,"gcd8","b1t",1)
w(C.aFG.prototype,"gbNp","au8",1)
t(C.aG0.prototype,"gcdc","cdd",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aE,[C.akY,C.GS,C.vj,C.aTW,C.a4f,C.bc1,C.c67,C.yE,C.CZ,C.nH,C.bcN,C.B5,C.buZ,C.qq,C.r8,C.D2,C.a_p,C.afH,C.a1E,C.Dd,C.acC,C.acT,C.aeO,C.GD,C.eh,C.tX,C.abh,C.aco,C.a5o,C.mV,C.bcO,C.fQ,C.ms,C.bwi,C.aJM])
u(B.ht,[C.fJ6,C.fxX,C.fFw,C.fFx,C.fJ3,C.fJ4,C.eib,C.eiu,C.exM,C.exj,C.exk,C.exl,C.exm,C.exn,C.exo,C.exp,C.exq,C.exh,C.exi,C.exg,C.exH,C.exI,C.exJ,C.dOg,C.dOi,C.dOl,C.dOw,C.c68,C.c69,C.fri,C.frj,C.frk,C.frr,C.frs,C.frt,C.dQi,C.dQ_,C.dQj,C.dPV,C.dPQ,C.dPS,C.dPY,C.dQa,C.dQ8,C.dQ9,C.dQ7,C.dQ4,C.dQ6,C.f75,C.f6N,C.f6U,C.f72,C.f6H,C.dqw,C.dqx,C.dqt,C.dqu,C.dqv,C.dqy,C.dqz,C.dqA,C.dqB,C.dqC,C.dqD,C.dqE,C.dqF,C.dqG,C.ewI,C.ewJ,C.ewK,C.ewL,C.ewG,C.ewH,C.exc,C.ewP,C.ewR,C.ewB,C.ex8,C.ex6,C.ex7,C.ex5,C.ex4,C.ewD,C.bPs,C.bPD,C.bPy,C.bPE,C.bPG,C.bPt,C.bPr,C.bPL,C.bPz,C.bPC,C.bPB,C.bPA,C.bJQ,C.fUU,C.fUX,C.fUV,C.bJx,C.bJs,C.bJq,C.bJP,C.bJH,C.bJI,C.bJG,C.bJJ,C.bJg,C.bJi,C.bJe,C.bJf,C.bJ6,C.bJ7,C.fru,C.frv,C.frw,C.frh,C.frx,C.frg,C.fry,C.frl,C.frf,C.frm,C.fre,C.frn,C.frd,C.fro,C.frb,C.frc,C.frp,C.fr9,C.fra,C.frq,C.fr8,C.e0c,C.e0d,C.e02,C.e_Z,C.e0b,C.e0g,C.cKL,C.fZO,C.fZP,C.cm2,C.eTv,C.e_z,C.e_A,C.e_B,C.e_D,C.eqq,C.eP_,C.eP8,C.eP4,C.eP6,C.eoZ,C.ep_,C.ep0])
u(B.jw,[C.fJ5,C.eig,C.eie,C.exs,C.exF,C.dPR,C.dQd,C.dWi,C.f78,C.f79,C.f6M,C.f6Z,C.f7_,C.f6V,C.f70,C.f6G,C.ewE,C.ewF,C.exb,C.ex3,C.ewT,C.bPF,C.bPH,C.bPJ,C.bPu,C.bPw,C.bJR,C.ctc,C.fUW,C.bJp,C.bJr,C.bJN,C.bJM,C.e0a,C.cKM,C.dXc,C.dXa,C.dX4,C.cm5,C.dOK,C.dOF,C.eqs])
u(B.af,[C.WB,C.WY,C.Vu,C.Vz,C.Oa,C.aIU,C.WX,C.ajK,C.Wa,C.ayW,C.VU,C.Xu,C.Wi,C.Vv,C.W9,C.WS,C.X1,C.Xl,C.WR])
u(B.ah,[C.bm8,C.aNQ,C.aMV,C.aN_,C.aEH,C.aOF,C.aNO,C.azf,C.bzu,C.aLm,C.aN8,C.aO8,C.aNf,C.aMX,C.blA,C.aFG,C.aG0,C.bmQ,C.aNI])
u(B.iI,[C.ei9,C.eia,C.eim,C.ein,C.eii,C.eih,C.eij,C.eif,C.eik,C.eid,C.eil,C.eic,C.eiq,C.eip,C.eir,C.eio,C.eis,C.eit,C.eiv,C.exL,C.exN,C.exO,C.exu,C.ext,C.exr,C.exA,C.exB,C.exx,C.exC,C.exw,C.exD,C.exE,C.exv,C.exG,C.exz,C.exK,C.exy,C.dOD,C.dOC,C.dOf,C.dOE,C.dOh,C.dOj,C.dOk,C.dOm,C.dOc,C.dOd,C.dOe,C.dOt,C.dOu,C.dOv,C.dOs,C.dOx,C.dOr,C.dOy,C.dOq,C.dOz,C.dOp,C.dOA,C.dOo,C.dOB,C.dOn,C.dPX,C.dPW,C.dQ0,C.dPT,C.dPU,C.dQ1,C.dQ2,C.dQ3,C.dPZ,C.dPP,C.dQc,C.dQb,C.dQe,C.dQf,C.dQg,C.dQ5,C.dQh,C.cVn,C.dWg,C.dWf,C.dWh,C.frJ,C.frK,C.frL,C.frM,C.frN,C.frO,C.frP,C.frQ,C.frR,C.f77,C.f76,C.f6P,C.f6O,C.f6K,C.f6J,C.f6L,C.f6I,C.f6X,C.f6W,C.f6Y,C.f6Q,C.f71,C.f6T,C.f73,C.f6S,C.f74,C.f6R,C.ewN,C.ewC,C.ewM,C.ewy,C.ewO,C.ewQ,C.ewz,C.ewA,C.exa,C.ex9,C.ex0,C.ex1,C.ex2,C.ewX,C.ewY,C.ewW,C.ewZ,C.ewV,C.ex_,C.ewU,C.ewS,C.dqs,C.bPI,C.bPK,C.bPv,C.bPx,C.bJu,C.bJv,C.bJt,C.bJw,C.bJy,C.bJj,C.bJk,C.bJo,C.bJl,C.bJm,C.bJn,C.bJO,C.bIX,C.bJE,C.bJF,C.bJC,C.bJD,C.bJA,C.bJB,C.bJK,C.bJz,C.bJL,C.bIY,C.bJh,C.bJ3,C.bJ4,C.bJ2,C.bJ5,C.bJ1,C.bJ8,C.bJ9,C.bJa,C.bJb,C.bJ0,C.bJc,C.bJ_,C.bJd,C.bIZ,C.e03,C.e0e,C.e0f,C.e01,C.e00,C.e0_,C.e08,C.e06,C.e07,C.e09,C.e04,C.e05,C.e0h,C.e0i,C.e0j,C.e0k,C.e0l,C.dXd,C.dXb,C.dX9,C.dX8,C.dX7,C.dX6,C.dX5,C.dX1,C.dX0,C.dX3,C.dX2,C.frZ,C.fs_,C.fs0,C.fs1,C.fs2,C.fs3,C.fs4,C.fs5,C.cm4,C.cm3,C.eTw,C.eTs,C.eTr,C.eTu,C.eTt,C.e32,C.e33,C.e2Y,C.e3_,C.e30,C.e2Z,C.e31,C.dOL,C.dOI,C.dOH,C.dOJ,C.dOG,C.e_y,C.e_x,C.e_w,C.e_v,C.e_C,C.e_u,C.e_t,C.e_E,C.e_s,C.e_F,C.e_r,C.e_G,C.e_H,C.e_q,C.eqm,C.eqn,C.eql,C.eqo,C.eqk,C.eqr,C.eqt,C.eqp,C.equ,C.eB8,C.eB9,C.eB6,C.eB7,C.eB5,C.eBa,C.eBb,C.eBc,C.eBd,C.eP3,C.eP5,C.eP2,C.eP1,C.eP7,C.eP0,C.ep1,C.ep2,C.eoV,C.eoU,C.eoW,C.eoT,C.eoX,C.eoS,C.eoY,C.eoR,C.eoQ,C.eoP,C.eoO,C.cm0])
t(C.bzH,C.aNQ)
t(C.aFV,C.bzH)
u(B.mk,[C.bj5,C.bd5,C.bum,C.bbK,C.bsY,C.bso,C.bcq,C.bsq,C.bws,C.bj3,C.ajM,C.baW,C.bxw,C.afA,C.bxI,C.bsp,C.bnC])
t(C.aMW,C.aMV)
t(C.aEo,C.aMW)
t(C.bzr,C.aN_)
t(C.aEq,C.bzr)
u(B.lD,[C.Lb,C.a1r,C.Ka])
u(B.ax,[C.btm,C.afT,C.aeL,C.R2,C.btS,C.a9f,C.bfc])
t(C.aIV,C.aOF)
t(C.bj2,B.pa)
t(C.aFU,C.aNO)
t(C.azg,C.azf)
t(C.ajL,C.azg)
t(C.aET,C.bzu)
t(C.baX,C.aLm)
t(C.bly,C.aN8)
t(C.bzO,C.aO8)
t(C.aGm,C.bzO)
t(C.bzw,C.aNf)
t(C.blJ,C.bzw)
t(C.bzq,C.aMX)
t(C.blk,C.bzq)
t(C.bzF,C.aNI)
t(C.bmk,C.bzF)
w(C.aNQ,B.cc)
w(C.bzH,E.nF)
w(C.aMV,B.cc)
w(C.aMW,E.nF)
w(C.aN_,B.cc)
w(C.bzr,E.nF)
w(C.aOF,B.eQ)
w(C.aNO,B.cc)
w(C.azf,B.cc)
w(C.azg,E.nF)
w(C.aLm,B.cc)
v(C.bzu,B.eC)
w(C.aN8,B.cc)
w(C.aMX,B.cc)
w(C.bzq,E.nF)
w(C.aNf,B.cc)
w(C.bzw,E.nF)
w(C.aNI,B.cc)
w(C.bzF,E.nF)
w(C.aO8,B.cc)
w(C.bzO,E.nF)})()
B.iT(b.typeUniverse,JSON.parse('{"WB":{"af":[],"v":[]},"bm8":{"ah":["WB"]},"WY":{"af":[],"v":[]},"aFV":{"ah":["WY"]},"bj5":{"aC":[]},"Vu":{"af":[],"v":[]},"aEo":{"ah":["Vu"]},"Vz":{"af":[],"v":[]},"aEq":{"ah":["Vz"]},"bd5":{"aC":[]},"afT":{"ax":[],"v":[]},"aeL":{"ax":[],"v":[]},"aIU":{"af":[],"v":[]},"Oa":{"af":[],"v":[]},"aEH":{"ah":["Oa"]},"btm":{"ax":[],"v":[]},"R2":{"ax":[],"v":[]},"bum":{"aC":[]},"btS":{"ax":[],"v":[]},"bbK":{"aC":[]},"aIV":{"ah":["aIU"]},"bsY":{"aC":[]},"bso":{"aC":[]},"bcq":{"aC":[]},"bsq":{"aC":[]},"bws":{"aC":[]},"WX":{"af":[],"v":[]},"bj2":{"aC":[]},"aFU":{"ah":["WX"]},"bj3":{"aC":[]},"ajM":{"aC":[]},"ajK":{"af":[],"v":[]},"ajL":{"ah":["ajK"]},"Wa":{"af":[],"v":[]},"ayW":{"af":[],"v":[]},"aET":{"ah":["Wa"],"eC":[]},"baX":{"ah":["ayW"]},"baW":{"aC":[]},"VU":{"af":[],"v":[]},"bly":{"ah":["VU"]},"bxw":{"aC":[]},"afA":{"aC":[]},"a9f":{"ax":[],"v":[]},"Xu":{"af":[],"v":[]},"Wi":{"af":[],"v":[]},"Vv":{"af":[],"v":[]},"W9":{"af":[],"v":[]},"WS":{"af":[],"v":[]},"X1":{"af":[],"v":[]},"Xl":{"af":[],"v":[]},"WR":{"af":[],"v":[]},"aGm":{"ah":["Xu"]},"bxI":{"aC":[]},"blJ":{"ah":["Wi"]},"bsp":{"aC":[]},"blk":{"ah":["Vv"]},"blA":{"ah":["W9"]},"bnC":{"aC":[]},"aFG":{"ah":["WS"]},"aG0":{"ah":["X1"]},"bmQ":{"ah":["Xl"]},"bmk":{"ah":["WR"]},"bfc":{"ax":[],"v":[]}}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.as
return{c:w("lM<u?>"),G:w("u"),J:w("bw<n,I>"),Q:w("df<n>"),Z:w("a0"),M:w("O<d9>"),R:w("O<SQ>"),a:w("O<a4f>"),V:w("O<ac>"),O:w("O<u>"),k:w("O<V>"),D:w("O<aB<aE>>"),w:w("O<a0>"),E:w("O<ai<n>>"),b:w("O<ai<I>>"),U:w("O<ai<F?>>"),x:w("O<a8<n,aE>>"),g:w("O<o>"),C:w("O<tX>"),v:w("O<fT>"),F:w("O<+(n,n)>"),fT:w("O<+(I,v)>"),I:w("O<+(F,n)>"),u:w("O<+(F,F)>"),r:w("O<+(n,n,a0)>"),e:w("O<+(n,I,I,F)>"),o:w("O<+(n,F,n,F)>"),d:w("O<+(n,n,I,I,a8<n,I>)>"),_:w("O<vj>"),fQ:w("O<abh>"),s:w("O<n>"),cF:w("O<au>"),X:w("O<Gc>"),p:w("O<v>"),bL:w("O<aco>"),fH:w("O<lk>"),a_:w("O<acC>"),cB:w("O<nH>"),ba:w("O<acT>"),eW:w("O<D2>"),fY:w("O<a_p>"),ac:w("O<aeO>"),cd:w("O<Dd>"),fr:w("O<afH>"),e4:w("O<a1E>"),au:w("O<aJM>"),f7:w("O<P>"),n:w("O<I>"),t:w("O<F>"),dS:w("O<aC?>"),fs:w("O<tX?>"),bN:w("O<F?>"),q:w("cw<ajL>"),A:w("cw<ah<af>>"),bF:w("ai<u>"),gl:w("ai<V>"),ew:w("ai<aE>"),j:w("ai<@>"),P:w("a8<n,@>"),f:w("a8<@,@>"),bd:w("N<eh,n>"),fR:w("N<+(I,v),v>"),l:w("iB"),gA:w("zQ"),gD:w("wl"),h:w("ct"),K:w("aE"),W:w("tX"),B:w("eh"),N:w("n"),bO:w("au"),Y:w("br<I>"),gj:w("bP<n>"),bz:w("bP<F?>"),dg:w("e9<r8>"),m:w("bc1"),a2:w("CZ"),f3:w("r8"),es:w("GD"),gV:w("my"),y:w("P"),i:w("I"),z:w("@"),S:w("F"),L:w("ai<@>?"),cK:w("aE?"),T:w("n?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b1Q=new B.d9(0,0.1)
D.b3L=new C.aTW(0,0,0)
D.LH=new C.aTW(0,0.5,0)
D.b4l=new B.ay(A.b5,1,A.r,-1)
D.b5O=new B.aY(0,1/0,0,290)
D.b5V=new B.aY(16,1/0,16,1/0)
D.b77=new B.p(A.bg,null,null,null,null,null,A.a7)
D.fnz=new B.G(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_N=new B.B("\u26a1",null,D.fnz,null,null,null,null,null,null,null,null,null)
D.bbF=new B.cf(A.A,null,null,D.h_N,null)
D.aVt=new B.G(!0,A.bW,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQf=new B.B("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aVt,null,A.K,null,null,null,null,null,null,null)
D.eq_=new B.D(A.nG,D.fQf,null)
D.bbP=new B.cf(A.A,null,null,D.eq_,null)
D.fG5=new B.B("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aVt,null,A.K,null,null,null,null,null,null,null)
D.eqS=new B.D(A.GT,D.fG5,null)
D.bcy=new B.cf(A.A,null,null,D.eqS,null)
D.afh=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.bgk=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.bgB=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bhS=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.bhY=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.bik=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.bkd=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.ble=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.blY=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.ahy=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.bmY=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.ahV=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.Z8=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.boL=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.bp2=new B.u(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.q)
D.ait=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.bqO=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.bqW=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bro=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.w6=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.btr=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.ajZ=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.bza=new B.bd(11e6)
D.bAY=new B.R(10,34,10,26)
D.bB5=new B.R(10,6,10,2)
D.bB7=new B.R(10,8,0,10)
D.bBL=new B.R(12,8,8,8)
D.bBR=new B.R(14,0,14,22)
D.bBT=new B.R(14,0,14,30)
D.bCW=new B.R(16,4,16,28)
D.bDf=new B.R(18,10,18,16)
D.bFe=new B.R(26,12,26,58)
D.bG4=new B.R(4,4,8,2)
D.bGJ=new B.R(8,14,8,12)
D.bGQ=new B.R(8,40,8,30)
D.bGV=new B.R(8,6,16,0)
D.bGW=new B.R(8,6,8,8)
D.bHh=new B.R(0,0,1.5,0)
D.b3x=new B.HR(26,"saturation")
D.bHA=new B.uL(A.d0,D.b3x,null,A.Y_)
D.bHB=new B.hw(A.G,11)
D.bHF=new B.hw(A.G,30)
D.fFb=new B.B("REACTION LAB",null,T.aW4,null,null,null,null,A.a2,null,1,null,null)
D.bHN=new B.bz(1,A.bc,D.fFb,null)
D.fvN=new B.G(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIr=new B.B("CORE PROTOCOL",null,D.fvN,null,null,null,null,null,null,null,null,null)
D.bI0=new B.bz(1,A.bc,D.fIr,null)
D.fJe=new B.B("\ud83d\udce2 NGMY Ads",null,A.r6,null,null,null,null,A.eO,null,1,null,null)
D.bIK=new B.bz(1,A.bc,D.fJe,null)
D.fDT=new B.B("Wire selected",null,A.fW,null,null,null,null,null,null,null,null,null)
D.bIY=new B.bz(1,A.bc,D.fDT,null)
D.aoT=new B.a0(62712,"MaterialIcons",!1)
D.bP3=new B.a0(62908,"MaterialIcons",!1)
D.bQL=new B.a0(983122,"MaterialIcons",!1)
D.bQY=new B.a0(983247,"MaterialIcons",!1)
D.bRt=new B.a0(983616,"MaterialIcons",!1)
D.bQK=new B.a0(983117,"MaterialIcons",!1)
D.bVa=new B.ae(D.bQK,28,A.c,null,null,null)
D.bVq=new B.ae(A.j2,18,null,null,null,null)
D.bXi=new B.ae(A.eg,21,A.c0,null,null,null)
D.bXx=new B.ae(A.ox,null,A.ab,null,null,null)
D.bXH=new B.ae(A.a3c,21,A.ab,null,null,null)
D.bYy=new B.ae(A.eM,17,A.ab,null,null,null)
D.c0g=new B.ae(A.j2,21,A.ab,null,null,null)
D.c1O=new B.ae(A.ea,null,A.aU,null,null,null)
D.ds9=w([A.d6,A.d5,A.d6],x.O)
D.c5c=new B.a9(A.a6,A.aa,A.x,D.ds9,null,null)
D.d3J=w([A.bP,A.bq],x.O)
D.c5k=new B.a9(A.b7,A.b9,A.x,D.d3J,null,null)
D.c5w=new B.a9(A.b7,A.b9,A.x,A.a5P,null,null)
D.asz=new B.a9(A.b7,A.b9,A.x,O.a52,null,null)
D.d1g=w([A.p6,A.iz],x.O)
D.c6h=new B.a9(A.b7,A.b9,A.x,D.d1g,null,null)
D.d3r=w([A.ee,A.as],x.O)
D.asG=new B.a9(A.b7,A.b9,A.x,D.d3r,null,null)
D.dlT=w([A.df,A.jj,A.bq],x.O)
D.c6z=new B.a9(A.a6,A.aa,A.x,D.dlT,null,null)
D.dlZ=w([A.hr,A.cu],x.O)
D.c6U=new B.a9(A.b7,A.b9,A.x,D.dlZ,null,null)
D.cAo=w([A.bP,A.df],x.O)
D.c72=new B.a9(A.a6,A.aa,A.x,D.cAo,null,null)
D.aCH=w([A.ee,M.nv],x.O)
D.c79=new B.a9(A.b7,A.b9,A.x,D.aCH,null,null)
D.c7q=new B.a9(A.b7,A.b9,A.x,R.at1,null,null)
D.c8d=new B.a9(A.aA,A.aF,A.x,A.RF,null,null)
D.ddf=w([A.as,A.w],x.O)
D.c8o=new B.a9(A.b7,A.b9,A.x,D.ddf,null,null)
D.c8r=new B.a9(A.b7,A.b9,A.x,H.aBZ,null,null)
D.brj=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.bs9=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cNj=w([A.N9,D.brj,D.bs9],x.O)
D.c8A=new B.a9(A.b7,A.b9,A.x,D.cNj,null,null)
D.cAI=w([A.cZ,A.h7],x.O)
D.c8Q=new B.a9(A.b7,A.b9,A.x,D.cAI,null,null)
D.buL=new B.u(1,0.07058823529411765,0.0784313725490196,0.10196078431372549,A.q)
D.cBs=w([F.afq,D.buL],x.O)
D.c92=new B.a9(A.b7,A.b9,A.x,D.cBs,null,null)
D.c9C=w([0,4,7],x.t)
D.c9D=w([0,4,7,12],x.t)
D.c9E=w([0,4,7,4],x.t)
D.aBE=w([A.hl,A.qg],x.O)
D.aB9=w([A.hn,A.cG],x.O)
D.azt=w([A.br,A.dK],x.O)
D.cVZ=w([A.aU,A.cZ],x.O)
D.dnf=w([A.bV,A.kK],x.O)
D.ayU=w([A.cF,A.kp],x.O)
D.d05=w([A.bK,A.aM],x.O)
D.ca_=w([D.aBE,D.aB9,A.a57,D.azt,D.cVZ,A.azJ,A.aAD,D.dnf,D.ayU,D.d05],B.as("O<ai<u>>"))
D.ceG=w([120,220,380],x.t)
D.ciq=w([12,16,19,24],x.t)
D.ciA=w([1400,800,450,2400],x.t)
D.cr0=w([250,450,900,1500],x.t)
D.bfG=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.brJ=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.bpv=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.bvk=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.boA=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.aya=w([D.bfG,D.brJ,D.bpv,D.bvk,D.boA],x.O)
D.cId=w([50,25,75],x.t)
D.cNQ=w([0,5,10,15,18,20,25],x.t)
D.cWh=w([900,500,250,1600],x.t)
D.d_o=w([A.br,A.bF,A.bb,A.br],x.O)
D.a4Y=w([A.ay,A.bk,A.bg,A.aI,A.np],x.O)
D.d0U=w([A.as,A.ay,A.cF,A.bk,A.bg,A.cy,A.cg,A.bF,A.Yh],x.O)
D.a50=w([0.04,0.17,0.3],x.n)
D.f6Z=new C.vj("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.f74=new C.vj("Medium engine","A good all-rounder.",0.3,0.9)
D.f73=new C.vj("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Ip=w([D.f6Z,D.f74,D.f73],x._)
D.eDz=new B.y(6,"Easy")
D.eEk=new B.y(8,"Medium")
D.ezi=new B.y(10,"Hard")
D.d2t=w([D.eDz,D.eEk,D.ezi],x.I)
D.azT=w([0.55,0.78,1],x.n)
D.aA3=w([A.c,A.fY,A.nj,A.as],x.O)
D.aAb=w([A.bg,A.ay,A.bk,A.d5],x.O)
D.f6W=new C.vj("Radar","Shows your height above the ground.",0.1,0)
D.f6X=new C.vj("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.f6U=new C.vj("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aAi=w([D.f6W,D.f6X,D.f6U],x._)
D.d8D=w([47,100,220,470,1000],x.n)
D.Jp={volts:0}
D.a6Q=new B.bw(D.Jp,[3],x.J)
D.JQ=new B.dX(["b","battery",0.2,0.3,D.a6Q])
D.ejO={on:0}
D.dCX=new B.bw(D.ejO,[1],x.J)
D.Em=new B.dX(["s","switch",0.5,0.3,D.dCX])
D.f4D=new B.dX(["l","bulb",0.8,0.3,A.jq])
D.d3S=w([D.JQ,D.Em,D.f4D],x.d)
D.Ek=new B.cu(["b",0,"s",0])
D.f3D=new B.cu(["s",1,"l",0])
D.aR7=new B.cu(["l",1,"b",1])
D.dm4=w([D.Ek,D.f3D,D.aR7],x.o)
D.d3g=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.eyt=new C.mV("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.d3S,D.dm4,D.d3g)
D.aKX={ohms:0}
D.aID=new B.bw(D.aKX,[220],x.J)
D.f45=new B.dX(["r","resistor",0.5,0.3,D.aID])
D.f4S=new B.dX(["d","led",0.8,0.3,A.jq])
D.dpk=w([D.JQ,D.f45,D.f4S],x.d)
D.f2Y=new B.cu(["b",0,"r",0])
D.f3x=new B.cu(["r",1,"d",0])
D.f33=new B.cu(["d",1,"b",1])
D.dyA=w([D.f2Y,D.f3x,D.f33],x.o)
D.dpO=w(["led","diode","indicator"],x.s)
D.eyA=new C.mV("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dpk,D.dyA,D.dpO)
D.a87={level:0}
D.dCi=new B.bw(D.a87,[0.2],x.J)
D.f4b=new B.dX(["p","pot",0.5,0.3,D.dCi])
D.f4d=new B.dX(["m","motor",0.8,0.3,A.jq])
D.d4b=w([D.JQ,D.f4b,D.f4d],x.d)
D.f2X=new B.cu(["b",0,"p",0])
D.f3t=new B.cu(["p",1,"m",0])
D.f3p=new B.cu(["m",1,"b",1])
D.dud=w([D.f2X,D.f3t,D.f3p],x.o)
D.dlM=w(["fan","motor","spin","dimmer"],x.s)
D.eyr=new C.mV("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.d4b,D.dud,D.dlM)
D.a6N=new B.bw(D.a87,[0.9],x.J)
D.aRg=new B.dX(["s","solar",0.25,0.3,D.a6N])
D.aRf=new B.dX(["l","bulb",0.75,0.3,A.jq])
D.d6Z=w([D.aRg,D.aRf],x.d)
D.f3A=new B.cu(["s",0,"l",0])
D.f3n=new B.cu(["l",1,"s",1])
D.d5_=w([D.f3A,D.f3n],x.o)
D.duU=w(["solar","sun","without battery","no battery","free"],x.s)
D.eyu=new C.mV("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.d6Z,D.d5_,D.duU)
D.f4V=new B.dX(["c","crank",0.25,0.3,D.a6N])
D.djY=w([D.f4V,D.aRf],x.d)
D.f30=new B.cu(["c",0,"l",0])
D.f3m=new B.cu(["l",1,"c",1])
D.dkz=w([D.f30,D.f3m],x.o)
D.dk7=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.eyq=new C.mV("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.djY,D.dkz,D.dk7)
D.dCh=new B.bw(D.a87,[0.7],x.J)
D.f4g=new B.dX(["t","turbine",0.25,0.3,D.dCh])
D.f43=new B.dX(["m","motor",0.75,0.3,A.jq])
D.ddW=w([D.f4g,D.f43],x.d)
D.f3L=new B.cu(["t",0,"m",0])
D.f3q=new B.cu(["m",1,"t",1])
D.dcV=w([D.f3L,D.f3q],x.o)
D.diF=w(["wind","turbine","windmill","water","hydro"],x.s)
D.eyn=new C.mV("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.ddW,D.dcV,D.diF)
D.aIA=new B.bw(D.Jp,[9],x.J)
D.a9e=new B.dX(["b","battery",0.2,0.3,D.aIA])
D.aRd=new B.dX(["r","radio",0.8,0.3,A.jq])
D.dvt=w([D.a9e,D.Em,D.aRd],x.d)
D.f3F=new B.cu(["s",1,"r",0])
D.aR9=new B.cu(["r",1,"b",1])
D.c9j=w([D.Ek,D.f3F,D.aR9],x.o)
D.du_=w(["radio","music","listen"],x.s)
D.eyz=new C.mV("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dvt,D.c9j,D.du_)
D.dDm=new B.bw(D.Jp,[12],x.J)
D.aRc=new B.dX(["b","battery",0.2,0.3,D.dDm])
D.f4E=new B.dX(["t","tv",0.8,0.3,A.jq])
D.d3U=w([D.aRc,D.Em,D.f4E],x.d)
D.f3G=new B.cu(["s",1,"t",0])
D.aRa=new B.cu(["t",1,"b",1])
D.dni=w([D.Ek,D.f3G,D.aRa],x.o)
D.dvr=w(["tv","television","screen","watch"],x.s)
D.eyk=new C.mV("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.d3U,D.dni,D.dvr)
D.f4u=new B.dX(["z","buzzer",0.8,0.3,A.jq])
D.cKz=w([D.JQ,D.Em,D.f4u],x.d)
D.f3H=new B.cu(["s",1,"z",0])
D.f3Z=new B.cu(["z",1,"b",1])
D.cZC=w([D.Ek,D.f3H,D.f3Z],x.o)
D.dsf=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.eyw=new C.mV("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cKz,D.cZC,D.dsf)
D.f4c=new B.dX(["h","heater",0.8,0.3,A.jq])
D.dhj=w([D.a9e,D.Em,D.f4c],x.d)
D.f3C=new B.cu(["s",1,"h",0])
D.f3b=new B.cu(["h",1,"b",1])
D.d_j=w([D.Ek,D.f3C,D.f3b],x.o)
D.cui=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.eyl=new C.mV("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.dhj,D.d_j,D.cui)
D.f4G=new B.dX(["s","solar",0.2,0.25,D.a6N])
D.dDp=new B.bw(D.aKX,[100],x.J)
D.f4J=new B.dX(["r","resistor",0.55,0.25,D.dDp])
D.f4Q=new B.dX(["c","capacitor",0.85,0.25,A.jq])
D.f48=new B.dX(["q","resistor",0.55,0.6,D.aID])
D.f4H=new B.dX(["d","led",0.85,0.6,A.jq])
D.dmP=w([D.f4G,D.f4J,D.f4Q,D.f48,D.f4H],x.d)
D.f3B=new B.cu(["s",0,"r",0])
D.f3w=new B.cu(["r",1,"c",0])
D.f32=new B.cu(["c",1,"s",1])
D.f31=new B.cu(["c",0,"q",0])
D.f3v=new B.cu(["q",1,"d",0])
D.f34=new B.cu(["d",1,"c",1])
D.daL=w([D.f3B,D.f3w,D.f32,D.f31,D.f3v,D.f34],x.o)
D.djf=w(["capacitor","store","charge","flash"],x.s)
D.eyy=new C.mV("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.dmP,D.daL,D.djf)
D.f4j=new B.dX(["b","battery",0.15,0.3,D.a6Q])
D.f4W=new B.dX(["l1","bulb",0.5,0.3,A.jq])
D.f4r=new B.dX(["l2","bulb",0.85,0.3,A.jq])
D.d1U=w([D.f4j,D.f4W,D.f4r],x.d)
D.f2W=new B.cu(["b",0,"l1",0])
D.f3j=new B.cu(["l1",1,"l2",0])
D.f3k=new B.cu(["l2",1,"b",1])
D.deJ=w([D.f2W,D.f3j,D.f3k],x.o)
D.dvc=w(["series","two bulbs","dim"],x.s)
D.eyo=new C.mV("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.d1U,D.deJ,D.dvc)
D.ek8={volts:0,charge:1}
D.dDs=new B.bw(D.ek8,[1.5,0],x.J)
D.f4O=new B.dX(["b","battery",0.75,0.3,D.dDs])
D.d1h=w([D.aRg,D.f4O],x.d)
D.f3z=new B.cu(["s",0,"b",0])
D.f3_=new B.cu(["b",1,"s",1])
D.db4=w([D.f3z,D.f3_],x.o)
D.djp=w(["charge","rechargeable","flat","recharge"],x.s)
D.eym=new C.mV("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.d1h,D.db4,D.djp)
D.dDl=new B.bw(D.Jp,[4.5],x.J)
D.f4e=new B.dX(["b","battery",0.2,0.3,D.dDl])
D.aRb=new B.dX(["p","phone",0.8,0.3,A.jq])
D.ddL=w([D.f4e,D.Em,D.aRb],x.d)
D.f3E=new B.cu(["s",1,"p",0])
D.a9d=new B.cu(["p",1,"b",1])
D.dr9=w([D.Ek,D.f3E,D.a9d],x.o)
D.dsF=w(["phone","charger","usb","mobile"],x.s)
D.eys=new C.mV("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.ddL,D.dr9,D.dsF)
D.f40=new B.dX(["f","fan",0.8,0.3,A.jq])
D.cmp=w([D.JQ,D.f40],x.d)
D.f2V=new B.cu(["b",0,"f",0])
D.f39=new B.cu(["f",1,"b",1])
D.d_S=w([D.f2V,D.f39],x.o)
D.dlL=w(["fan","cool","air","wind"],x.s)
D.eyB=new C.mV("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.cmp,D.d_S,D.dlL)
D.f4y=new B.dX(["b","battery",0.15,0.2,D.a6Q])
D.f41=new B.dX(["a","ammeter",0.5,0.2,A.jq])
D.f4_=new B.dX(["l","bulb",0.85,0.2,A.jq])
D.f4A=new B.dX(["v","voltmeter",0.5,0.6,A.jq])
D.djL=w([D.f4y,D.f41,D.f4_,D.f4A],x.d)
D.f2T=new B.cu(["b",0,"a",0])
D.f2S=new B.cu(["a",1,"l",0])
D.f3N=new B.cu(["v",0,"l",0])
D.f3O=new B.cu(["v",1,"l",1])
D.daW=w([D.f2T,D.f2S,D.aR7,D.f3N,D.f3O],x.o)
D.dyz=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.eyx=new C.mV("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.djL,D.daW,D.dyz)
D.f4Z=new B.dX(["b","battery",0.15,0.2,D.aIA])
D.f4i=new B.dX(["t","tv",0.55,0.2,A.jq])
D.aIB=new B.bw(D.Jp,[5],x.J)
D.f46=new B.dX(["c","buck",0.4,0.5,D.aIB])
D.f4k=new B.dX(["p","phone",0.8,0.5,A.jq])
D.d8p=w([D.f4Z,D.f4i,D.f46,D.f4k],x.d)
D.f2Z=new B.cu(["b",0,"t",0])
D.aR5=new B.cu(["b",0,"c",0])
D.aR6=new B.cu(["c",1,"p",0])
D.ddI=w([D.f2Z,D.aRa,D.aR5,D.aR6,D.a9d],x.o)
D.d6x=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.eyp=new C.mV("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.d8p,D.ddI,D.d6x)
D.f47=new B.dX(["c","buck",0.5,0.3,D.aIB])
D.d_8=w([D.aRc,D.f47,D.aRb],x.d)
D.d4l=w([D.aR5,D.aR6,D.a9d],x.o)
D.cxM=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.eyj=new C.mV("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.d_8,D.d4l,D.cxM)
D.f4p=new B.dX(["d","diode",0.5,0.3,A.jq])
D.deX=w([D.a9e,D.f4p,D.aRd],x.d)
D.f2U=new B.cu(["b",0,"d",0])
D.f35=new B.cu(["d",1,"r",0])
D.cN7=w([D.f2U,D.f35,D.aR9],x.o)
D.d6c=w(["diode","protect","backwards","one way"],x.s)
D.eyv=new C.mV("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.deX,D.cN7,D.d6c)
D.RT=w([D.eyt,D.eyA,D.eyr,D.eyu,D.eyq,D.eyn,D.eyz,D.eyk,D.eyw,D.eyl,D.eyy,D.eyo,D.eym,D.eys,D.eyB,D.eyx,D.eyp,D.eyj,D.eyv],B.as("O<mV>"))
D.hBN=new C.GS("Moon",1.62,A.df,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hBL=new C.GS("Mars",3.71,A.ay,"Mars has about 38 percent of Earth's gravity.")
D.hBO=new C.GS("Mercury",3.7,A.kn,"Mercury is small, so its gravity is like Mars.")
D.hBI=new C.GS("Venus",8.87,A.aU,"Venus is almost as heavy as Earth, with strong gravity.")
D.hBK=new C.GS("Earth",9.81,A.aI,"On Earth gravity is strong, and the air also slows you down.")
D.hBM=new C.GS("Neptune",11.15,A.d5,"Neptune pulls a little harder than Earth.")
D.hBJ=new C.GS("Jupiter",24.79,A.cF,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.t4=w([D.hBN,D.hBL,D.hBO,D.hBI,D.hBK,D.hBM,D.hBJ],B.as("O<GS>"))
D.daJ=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.dbt=w([0.2,0.5,0.8],x.n)
D.b0E=new C.Lb(0,"accordion")
D.d0d=w([A.jG,A.CV,A.CB],x.w)
D.d7Q=w(["Mail","SMS","Ad"],x.s)
D.d0M=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hA0=new C.B5(D.b0E,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aBE,D.d0d,D.d7Q,D.d0M)
D.ad_=new C.Lb(1,"flip")
D.dj9=w([A.qI,Z.HR,A.uS],x.w)
D.dds=w(["Unlock","Verify","Secure"],x.s)
D.d_4=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hA_=new C.B5(D.ad_,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.aB9,D.dj9,D.dds,D.d_4)
D.b0F=new C.Lb(2,"towers")
D.dce=w([A.zh,A.qL,A.id],x.w)
D.dbM=w(["Save","Grow","Earn"],x.s)
D.cO0=w(["","",""],x.s)
D.hA1=new C.B5(D.b0F,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a57,D.dce,D.dbM,D.cO0)
D.ad0=new C.Lb(3,"assemble")
D.dkb=w([A.oB,A.ht,A.ea],x.w)
D.d7a=w(["Launch","Charge","Shine"],x.s)
D.dgk=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hA3=new C.B5(D.ad0,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.azt,D.dkb,D.d7a,D.dgk)
D.b0G=new C.Lb(4,"carousel")
D.djZ=w([A.bb,A.eV],x.O)
D.d7Z=w([A.n0,A.apk,A.PE],x.w)
D.d2j=w(["Explore","Discover","Learn"],x.s)
D.ddR=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hzZ=new C.B5(D.b0G,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.djZ,D.d7Z,D.d2j,D.ddR)
D.b0H=new C.Lb(5,"burst")
D.dbH=w([A.hT,A.rv],x.O)
D.d0H=w([A.kt,A.mZ,A.hH],x.w)
D.d11=w(["Cheer","Win","Love"],x.s)
D.d3p=w(["Make some noise","First place","Share the joy"],x.s)
D.hA2=new C.B5(D.b0H,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.dbH,D.d0H,D.d11,D.d3p)
D.aAP=w([D.hA0,D.hA_,D.hA1,D.hA3,D.hzZ,D.hA2],B.as("O<B5>"))
D.f00=new B.b5("skin","Skin",A.apl)
D.f1F=new B.b5("muscle","Muscles",A.Pf)
D.f1j=new B.b5("organ","Organs",A.hH)
D.bOM=new B.a0(62747,"MaterialIcons",!1)
D.f1r=new B.b5("bone","Skeleton",D.bOM)
D.f1N=new B.b5("vessel","Blood vessels",A.pw)
D.dck=w([D.f00,D.f1F,D.f1j,D.f1r,D.f1N],x.r)
D.f6Y=new C.vj("Simple legs","Light. Land gently.",0.15,0.2)
D.f7_=new C.vj("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.f72=new C.vj("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.Dn=w([D.f6Y,D.f7_,D.f72],x._)
D.f2A=new B.cu(["beat",0.18,0.28,0])
D.f3I=new B.cu(["burst",0.7,0.2,0])
D.f3T=new B.cu(["delay",0.45,0.5,1])
D.f3s=new B.cu(["ripple",0.75,0.6,3])
D.d6U=w([D.f2A,D.f3I,D.f3T,D.f3s],x.e)
D.dis=w([P.lu,O.JP,F.Up],x.u)
D.hyr=new C.GD("First spark","A clock lights a burst and a ripple",D.d6U,D.dis)
D.f38=new B.cu(["beat",0.15,0.3,1])
D.f2e=new B.cu(["ripple",0.62,0.15,0])
D.f3P=new B.cu(["delay",0.4,0.45,0])
D.f2P=new B.cu(["ripple",0.7,0.45,0])
D.f2w=new B.cu(["delay",0.4,0.7,1])
D.f3u=new B.cu(["shake",0.75,0.75,0])
D.dwk=w([D.f38,D.f2e,D.f3P,D.f2P,D.f2w,D.f3u],x.e)
D.eAp=new B.y(2,4)
D.aQN=new B.y(4,5)
D.daz=w([P.lu,O.JP,F.Up,D.eAp,D.aQN],x.u)
D.hyt=new C.GD("Heartbeat","Two thumps, then a shake",D.dwk,D.daz)
D.f2F=new B.cu(["dice",0.15,0.7,1])
D.f3V=new B.cu(["echo",0.4,0.7,0])
D.f2N=new B.cu(["comet",0.7,0.5,4])
D.f3J=new B.cu(["burst",0.72,0.2,1])
D.f36=new B.cu(["burst",0.3,0.25,0])
D.f2G=new B.cu(["pop",0.55,0.85,0])
D.ctR=w([D.f2F,D.f3V,D.f2N,D.f3J,D.f36,D.f2G],x.e)
D.ezK=new B.y(1,3)
D.ezL=new B.y(1,4)
D.aQJ=new B.y(0,5)
D.djU=w([P.lu,S.vq,D.ezK,D.ezL,D.aQJ],x.u)
D.hys=new C.GD("Fireworks","Dice launch comets that burst in colour",D.ctR,D.djU)
D.f2K=new B.cu(["beat",0.15,0.2,2])
D.f3g=new B.cu(["chance",0.4,0.2,0])
D.f2C=new B.cu(["ball",0.7,0.12,3])
D.f2p=new B.cu(["chance",0.4,0.5,1])
D.f3U=new B.cu(["ball",0.3,0.08,1])
D.f2i=new B.cu(["ripple",0.7,0.55,3])
D.cmS=w([D.f2K,D.f3g,D.f2C,D.f2p,D.f3U,D.f2i],x.e)
D.eAq=new B.y(2,5)
D.cKi=w([P.lu,S.vq,O.a95,F.Uq,D.eAq],x.u)
D.hyq=new C.GD("Rain","Balls fall at random and splash",D.cmS,D.cKi)
D.f3h=new B.cu(["beat",0.12,0.45,2])
D.f3K=new B.cu(["toggle",0.38,0.2,0])
D.f3R=new B.cu(["wash",0.7,0.15,4])
D.f2E=new B.cu(["count3",0.38,0.45,0])
D.f3M=new B.cu(["burst",0.72,0.4,0])
D.f37=new B.cu(["light",0.55,0.7,1])
D.f2q=new B.cu(["pop",0.8,0.8,4])
D.dmN=w([D.f3h,D.f3K,D.f3R,D.f2E,D.f3M,D.f37,D.f2q],x.e)
D.eAX=new B.y(3,6)
D.cq0=w([P.lu,S.vq,O.a95,F.Uq,D.aQJ,D.eAX],x.u)
D.hyo=new C.GD("Disco","A beat drives lights, washes and bursts",D.dmN,D.cq0)
D.f3Y=new B.cu(["button",0.12,0.2,0])
D.f2k=new B.cu(["delay",0.34,0.2,1])
D.f3X=new B.cu(["light",0.56,0.2,1])
D.f3Q=new B.cu(["delay",0.56,0.45,1])
D.f3i=new B.cu(["ball",0.34,0.6,0])
D.f2o=new B.cu(["delay",0.34,0.8,1])
D.f2d=new B.cu(["burst",0.7,0.8,5])
D.ca2=w([D.f3Y,D.f2k,D.f3X,D.f3Q,D.f3i,D.f2o,D.f2d],x.e)
D.eD8=new B.y(5,6)
D.dso=w([P.lu,S.vq,F.Up,F.Uq,D.aQN,D.eD8],x.u)
D.hyp=new C.GD("Domino","Tap the button and watch it run down the line",D.ca2,D.dso)
D.aBd=w([D.hyr,D.hyt,D.hys,D.hyq,D.hyo,D.hyp],B.as("O<GD>"))
D.dhJ=w([0.05,0.15,0.25],x.n)
D.diE=w([1.5,3,4.5,9,12],x.n)
D.eZk=new B.b5("dice","Dice",A.ot)
D.f_z=new B.b5("coin","Coin",Q.zc)
D.f1I=new B.b5("num","Number",A.zl)
D.diS=w([D.eZk,D.f_z,D.f1I],x.r)
D.diW=w(["skin","muscle","organ","bone","vessel"],x.s)
D.aBj=w([A.c0,A.aU,A.b5,A.aI,A.br,A.bV,A.cF,A.hn],x.O)
D.dk_=w([A.bV,A.aI,A.dy,A.b5],x.O)
D.dl1=w([],x.a)
D.erF=new C.eh("battery","Battery","\ud83d\udd0b",A.b5,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.erL=new C.eh("solar","Solar panel","\u2600\ufe0f",A.bk,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.esp=new C.eh("crank","Hand crank","\ud83d\udd04",A.cF,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.es1=new C.eh("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aI,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.erx=new C.eh("buck","Step-down converter","\ud83d\udd3d",A.hn,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.es_=new C.eh("regulator","5 V regulator","\ud83e\uddca",A.bK,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.esu=new C.eh("diode","Diode","\u27a1\ufe0f",A.aU,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.esb=new C.eh("ldr","Light sensor","\ud83c\udf1e",A.dy,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.erQ=new C.eh("switch","Switch","\ud83c\udf9a\ufe0f",A.br,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.esr=new C.eh("fuse","Fuse","\ud83e\uddef",A.c0,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.erp=new C.eh("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hn,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.esc=new C.eh("resistor","Resistor","\u3030\ufe0f",A.aU,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.ese=new C.eh("bulb","Light bulb","\ud83d\udca1",A.dy,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.erN=new C.eh("led","LED","\ud83d\udd34",A.ay,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.erR=new C.eh("motor","Motor","\u2699\ufe0f",A.bK,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.es8=new C.eh("buzzer","Buzzer","\ud83d\udd14",A.bV,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.erG=new C.eh("heater","Heater","\ud83d\udd25",A.cF,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.es3=new C.eh("capacitor","Capacitor","\ud83e\udeab",A.cn,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.erW=new C.eh("radio","Radio","\ud83d\udcfb",A.np,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.erT=new C.eh("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.bb,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.erw=new C.eh("voltmeter","Voltmeter","\ud83e\udded",A.bx,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.erD=new C.eh("ammeter","Ammeter","\ud83d\udcdf",A.aU,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.erJ=new C.eh("fan","Fan","\ud83c\udf00",A.aI,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.esw=new C.eh("speaker","Speaker","\ud83d\udd0a",A.bV,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.esl=new C.eh("clock","Digital clock","\u23f0",A.b5,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.erZ=new C.eh("calculator","Calculator","\ud83e\uddee",A.M9,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.erC=new C.eh("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cn,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.esv=new C.eh("router","WiFi router","\ud83d\udcf6",A.hn,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.esy=new C.eh("siren","Siren","\ud83d\udea8",A.ay,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.ers=new C.eh("toycar","Toy car","\ud83d\ude97",A.cF,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.esz=new C.eh("kettle","Kettle","\ud83e\uded6",A.mO,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.erA=new C.eh("lamp","Desk lamp","\ud83e\ude94",A.dy,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.erM=new C.eh("lights","Party lights","\ud83c\udf84",A.np,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.erX=new C.eh("fridge","Fridge","\ud83e\uddca",A.hp,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.eru=new C.eh("washer","Washing machine","\ud83e\udee7",A.cn,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.esm=new C.eh("blender","Blender","\ud83e\udd64",A.c0,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.erU=new C.eh("drone","Drone","\ud83d\ude81",A.bK,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.erz=new C.eh("drill","Power drill","\ud83d\udd29",A.aU,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.erY=new C.eh("torch","Torch","\ud83d\udd26",A.bN,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.esj=new C.eh("neon","Neon sign","\ud83e\udea7",A.bV,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.erv=new C.eh("microwave","Microwave","\ud83c\udf72",A.cF,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.esd=new C.eh("doorbell","Doorbell","\ud83d\udd14",A.bk,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.erI=new C.eh("camera","Security camera","\ud83d\udcf7",A.am,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.es7=new C.eh("console","Game console","\ud83c\udfae",A.br,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.eso=new C.eh("heartmon","Heart monitor","\ud83e\ude7a",A.hj,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.ert=new C.eh("aquarium","Aquarium","\ud83d\udc20",A.bb,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.es2=new C.eh("lighthouse","Lighthouse","\ud83d\uddfc",A.dy,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.esa=new C.eh("discoball","Disco ball","\ud83e\udea9",A.np,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.est=new C.eh("robot","Robot","\ud83e\udd16",A.aI,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.err=new C.eh("toaster","Toaster","\ud83c\udf5e",A.dW,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.esx=new C.eh("ledstrip","LED strip","\ud83c\udf08",A.bV,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.esi=new C.eh("pump","Water pump","\ud83d\udeb0",A.aI,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.es4=new C.eh("hairdryer","Hair dryer","\ud83d\udca8",A.hT,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.esg=new C.eh("headphones","Headphones","\ud83c\udfa7",A.br,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.erB=new C.eh("smartwatch","Apple Watch Ultra","\u231a",A.bx,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.ess=new C.eh("tablet","iPad Pro M5","\ud83d\udcf2",A.cn,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.ero=new C.eh("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hj,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.erV=new C.eh("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bu,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.erO=new C.eh("appletv","Apple TV 4K","\ud83d\udcfa",A.bP,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.es9=new C.eh("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.tZ,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.erq=new C.eh("iphonefold","iPhone Fold","\ud83d\udcf1",A.b8,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.erE=new C.eh("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d5,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.esq=new C.eh("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cy,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.es5=new C.eh("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bg,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.es0=new C.eh("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.ch,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.esh=new C.eh("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.ay,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.erP=new C.eh("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.b5,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.es6=new C.eh("honor","Honor Magic V5","\ud83d\udcf1",A.cn,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.esf=new C.eh("vivo","vivo X300 Pro","\ud83d\udcf1",A.cF,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.esk=new C.eh("ereader","Kindle Scribe","\ud83d\udcd6",A.bu,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.ern=new C.eh("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.cg,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.erS=new C.eh("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cy,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.erK=new C.eh("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.bb,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.ery=new C.eh("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dy,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.erH=new C.eh("carscreen","Luxury car touchscreen","\ud83d\ude98",A.ay,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.esn=new C.eh("vision","Apple Vision Pro","\ud83e\udd7d",A.br,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.Sh=w([D.erF,D.erL,D.esp,D.es1,D.erx,D.es_,D.esu,D.esb,D.erQ,D.esr,D.erp,D.esc,D.ese,D.erN,D.erR,D.es8,D.erG,D.es3,D.erW,D.erT,D.erw,D.erD,D.erJ,D.esw,D.esl,D.erZ,D.erC,D.esv,D.esy,D.ers,D.esz,D.erA,D.erM,D.erX,D.eru,D.esm,D.erU,D.erz,D.erY,D.esj,D.erv,D.esd,D.erI,D.es7,D.eso,D.ert,D.es2,D.esa,D.est,D.err,D.esx,D.esi,D.es4,D.esg,D.erB,D.ess,D.ero,D.erV,D.erO,D.es9,D.erq,D.erE,D.esq,D.es5,D.es0,D.esh,D.erP,D.es6,D.esf,D.esk,D.ern,D.erS,D.erK,D.ery,D.erH,D.esn],B.as("O<eh>"))
D.dlG=w([5,10,15,25,45,60],x.t)
D.dm2=w([-0.045,0.03,-0.015],x.n)
D.aBM=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.v4=w([0.05,0.2,0.35],x.n)
D.b8o=new B.ac(0,A.G,A.hq,A.dG,6)
D.doK=w([D.b8o],x.V)
D.eyV=new B.y(0,"AND")
D.ezM=new B.y(1,"Adder")
D.eAr=new B.y(2,"Blinker")
D.eAY=new B.y(3,"Memory")
D.dpy=w([D.eyV,D.ezM,D.eAr,D.eAY],x.I)
D.aC_=w([-104,0,104],x.n)
D.aC1=w([-14,3],x.n)
D.dqt=w([-8,0,8],x.n)
D.aCa=w([-92,0,92],x.n)
D.dqT=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.f6V=new C.vj("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.f71=new C.vj("Medium tank","Balanced.",0.35,1)
D.f70=new C.vj("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.Sw=w([D.f6V,D.f71,D.f70],x._)
D.nM=w([0.04,0.2,0.36],x.n)
D.aCm=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.f1i=new B.b5(D.b0E,"Fold",Q.aqh)
D.f0g=new B.b5(D.ad_,"Flip",A.CK)
D.bP2=new B.a0(62889,"MaterialIcons",!1)
D.f1E=new B.b5(D.b0F,"Rise",D.bP2)
D.aqu=new B.a0(983870,"MaterialIcons",!1)
D.eYF=new B.b5(D.ad0,"Assemble",D.aqu)
D.eYT=new B.b5(D.b0G,"Spin",D.aoT)
D.eYN=new B.b5(D.b0H,"Pop",A.kt)
D.dsl=w([D.f1i,D.f0g,D.f1E,D.eYF,D.eYT,D.eYN],B.as("O<+(Lb,n,a0)>"))
D.aCr=w([A.bV,A.dy,A.bx,A.aI,A.br,A.c0],x.O)
D.dsL=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dtQ=w([3,4.5,5,6,9],x.n)
D.b8X=new B.ac(0,A.G,A.aT,A.H,16)
D.duh=w([D.b8X],x.V)
D.duR=w(["solar","turbine","crank","pot"],x.s)
D.dvg=w([0,0.35,0.75,1],x.n)
D.dwz=w(["volts","level","ohms","on"],x.s)
D.dxZ=w([A.jG,A.CV,A.CB,A.qI,Z.HR,A.uS,A.zh,A.qL,A.id,A.oB,A.ht,A.ea,A.hH,A.ie,A.mZ,A.lM,A.uR,A.t0,A.li,A.Hn,A.wI,A.CJ,A.CF,A.a30,A.P5,A.CR,A.Pf,A.apI,H.aqq,A.kt],x.w)
D.ehE={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.hqH=new C.yE("Switch",F.pr,A.bk,0,"Tap it to turn it ON or OFF.")
D.hqD=new C.yE("Blinker",A.oz,A.bx,0,"Turns itself ON and OFF. Tap to change the speed.")
D.hqE=new C.yE("AND",D.aqu,A.cn,2,"ON only when BOTH inputs are ON.")
D.bQx=new B.a0(63671,"MaterialIcons",!1)
D.hqC=new C.yE("OR",D.bQx,A.br,2,"ON when EITHER input is ON.")
D.hqF=new C.yE("XOR",Ab.a2n,A.bV,2,"ON when the inputs are DIFFERENT.")
D.hqz=new C.yE("NAND",A.uE,A.aI,2,"OFF only when BOTH inputs are ON.")
D.bPD=new B.a0(63176,"MaterialIcons",!1)
D.hqA=new C.yE("NOR",D.bPD,A.hn,2,"ON only when BOTH inputs are OFF.")
D.hqB=new C.yE("NOT",Y.CW,A.cF,1,"Flips the signal: ON becomes OFF.")
D.hqG=new C.yE("Light",A.mg,A.dy,1,"Glows when its input is ON.")
D.hqI=new C.yE("Buzzer",A.oA,A.c0,1,"Beeps while its input is ON.")
D.A1=new B.bw(D.ehE,[D.hqH,D.hqD,D.hqE,D.hqC,D.hqF,D.hqz,D.hqA,D.hqB,D.hqG,D.hqI],B.as("bw<n,yE>"))
D.d_C=w([A.A],x.M)
D.d_Z=w([A.aA,A.aF],x.M)
D.d9A=w([A.aA,A.A,A.aF],x.M)
D.dba=w([A.aA,A.ly,A.A,A.lz,A.aF],x.M)
D.dpu=w([A.aA,A.ly,A.a6,A.aa,A.lz,A.aF],x.M)
D.dCL=new B.cZ([1,D.d_C,2,D.d_Z,3,D.d9A,4,A.aD_,5,D.dba,6,D.dpu],B.as("cZ<F,ai<d9>>"))
D.ek6={Calm:0,Box:1,Sleep:2}
D.cHG=w([4,2,6,0],x.n)
D.cHN=w([4,4,4,4],x.n)
D.cHO=w([4,7,8,0],x.n)
D.SZ=new B.bw(D.ek6,[D.cHG,D.cHN,D.cHO],B.as("bw<n,ai<I>>"))
D.ehR={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.xB=new C.a1r(0,"source")
D.daC=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hx4=new C.qq("Clock",A.oz,D.xB,A.bx,D.daC)
D.hx0=new C.qq("Button",A.CZ,D.xB,A.aU,A.Z)
D.du1=w(["random","quick","slow"],x.s)
D.hxb=new C.qq("Dice",A.ot,D.xB,A.bV,D.du1)
D.bQb=new B.a0(63484,"MaterialIcons",!1)
D.F4=new C.a1r(1,"logic")
D.dyP=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hx7=new C.qq("Delay",D.bQb,D.F4,A.cn,D.dyP)
D.dlO=w(["fast","mid","slow"],x.s)
D.hxc=new C.qq("Echo",A.apZ,D.F4,A.br,D.dlO)
D.hx9=new C.qq("Every 2nd",Y.CW,D.F4,A.hn,A.Z)
D.bPR=new B.a0(63309,"MaterialIcons",!1)
D.hx6=new C.qq("Every 3rd",D.bPR,D.F4,A.aI,A.Z)
D.bRO=new B.a0(983902,"MaterialIcons",!1)
D.c9q=w(["50%","25%","75%"],x.s)
D.hxe=new C.qq("Chance",D.bRO,D.F4,A.cF,D.c9q)
D.rf=new C.a1r(2,"out")
D.hx2=new C.qq("Light",A.mg,D.rf,A.dy,A.Z)
D.hx3=new C.qq("Burst",A.kt,D.rf,A.bV,A.Z)
D.hx1=new C.qq("Ripple",A.zo,D.rf,A.bb,A.Z)
D.hxa=new C.qq("Ball",A.aq9,D.rf,A.cF,A.Z)
D.hx8=new C.qq("Comet",A.oB,D.rf,A.br,A.Z)
D.bRy=new B.a0(983669,"MaterialIcons",!1)
D.hxd=new C.qq("Shake",D.bRy,D.rf,A.c0,A.Z)
D.hxf=new C.qq("Pop",A.Ho,D.rf,A.b5,A.Z)
D.hx5=new C.qq("Wash",A.Pj,D.rf,A.p9,A.Z)
D.n4=new B.bw(D.ehR,[D.hx4,D.hx0,D.hxb,D.hx7,D.hxc,D.hx9,D.hx6,D.hxe,D.hx2,D.hx3,D.hx1,D.hxa,D.hx8,D.hxd,D.hxf,D.hx5],B.as("bw<n,qq>"))
D.ei2={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.At=new C.Ka(0,"tv")
D.f8u=new C.ms("Samsung Neo QLED 8K",D.At,F.y5,A.aI)
D.f8l=new C.ms("LG OLED evo G5",D.At,A.en,A.hj)
D.f8c=new C.ms("Sony Bravia 9",D.At,A.rq,A.bu)
D.f8g=new C.ms("Apple TV 4K",D.At,A.e7,A.bP)
D.f8d=new C.ms("Bang and Olufsen Beovision",D.At,F.FA,F.tZ)
D.a9p=new C.Ka(1,"iphone")
D.aRC=new C.ms("iPhone 18 Pro Max",D.a9p,D.ajZ,A.cg)
D.Eo=new C.Ka(3,"fold")
D.bv0=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.f8q=new C.ms("iPhone Fold",D.Eo,D.bv0,A.b8)
D.Au=new C.Ka(2,"android")
D.f8r=new C.ms("Samsung Galaxy S26 Ultra",D.Au,F.Y3,A.d5)
D.bnJ=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.f8j=new C.ms("Samsung Galaxy Z Fold7",D.Eo,D.bnJ,A.cy)
D.f8f=new C.ms("Google Pixel 10 Pro XL",D.Au,A.df,A.bg)
D.f8n=new C.ms("Xiaomi 16 Ultra",D.Au,A.i9,A.ch)
D.f8i=new C.ms("Huawei Mate 80 Pro Max",D.Au,A.ep,A.ay)
D.f8e=new C.ms("OPPO Find X9 Ultra",D.Au,A.e3,A.b5)
D.f8w=new C.ms("Honor Magic V5",D.Eo,A.d6,A.cn)
D.f8k=new C.ms("vivo X300 Pro",D.Au,A.hC,A.cF)
D.aRD=new C.Ka(4,"tablet")
D.f8p=new C.ms("iPad Pro M5",D.aRD,A.df,A.aI)
D.a9q=new C.Ka(5,"reader")
D.f8x=new C.ms("Kindle Scribe",D.a9q,A.ee,A.bu)
D.Av=new C.Ka(6,"computer")
D.f8o=new C.ms("MacBook Pro M5 Max",D.Av,A.df,A.cg)
D.f8t=new C.ms("iMac 32 inch",D.Av,A.bP,A.cy)
D.f8m=new C.ms("Pro Display XDR 8K",D.Av,A.i9,A.bb)
D.f8h=new C.ms("Sony Laser Projector",D.Av,A.cu,A.dy)
D.f8s=new C.ms("Luxury car touchscreen",D.Av,M.nv,A.ay)
D.f8v=new C.ms("Apple Vision Pro",D.Av,A.hr,A.br)
D.mr=new B.bw(D.ei2,[D.f8u,D.f8l,D.f8c,D.f8g,D.f8d,D.aRC,D.f8q,D.f8r,D.f8j,D.f8f,D.f8n,D.f8i,D.f8e,D.f8w,D.f8k,D.f8p,D.f8x,D.f8o,D.f8t,D.f8m,D.f8h,D.f8s,D.f8v],B.as("bw<n,ms>"))
D.eic={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bxP=new C.fQ(20,4,13,!1)
D.byf=new C.fQ(14,5,13.5,!1)
D.by6=new C.fQ(9,2.4,10,!1)
D.byk=new C.fQ(7,5,12.5,!1)
D.by9=new C.fQ(8,3.5,12,!1)
D.bxL=new C.fQ(15,2,6,!1)
D.byi=new C.fQ(45,6,13.5,!0)
D.by0=new C.fQ(10,8,13.5,!1)
D.bxT=new C.fQ(25,3,12,!0)
D.bxZ=new C.fQ(35,4,12,!0)
D.by_=new C.fQ(40,4.5,9.5,!0)
D.by1=new C.fQ(55,3,9,!0)
D.bxM=new C.fQ(18,3,9,!1)
D.byh=new C.fQ(22,4,13.5,!1)
D.bya=new C.fQ(16,5,13.5,!1)
D.bxX=new C.fQ(30,4,9,!0)
D.byt=new C.fQ(5,3.5,13,!1)
D.by4=new C.fQ(25,3,13.5,!0)
D.byd=new C.fQ(14,2.5,9,!1)
D.by3=new C.fQ(6,6,13,!1)
D.byl=new C.fQ(30,1.2,5,!0)
D.bys=new C.fQ(35,3,4.5,!0)
D.byo=new C.fQ(20,4.5,7.5,!0)
D.by2=new C.fQ(55,5.5,13.5,!0)
D.bxK=new C.fQ(45,5.5,13.5,!0)
D.bye=new C.fQ(40,5.5,13.5,!0)
D.byr=new C.fQ(60,6,13.5,!0)
D.akt=new C.fQ(28,4,7,!0)
D.Gx=new C.fQ(25,4,7,!0)
D.bxW=new C.fQ(30,4,7,!0)
D.bxR=new C.fQ(22,4,7,!0)
D.bxS=new C.fQ(24,4,7,!0)
D.by5=new C.fQ(60,3,5.5,!0)
D.bxN=new C.fQ(18,9,14,!0)
D.bxU=new C.fQ(25,9,14,!0)
D.aku=new C.fQ(30,8,14,!0)
D.bxQ=new C.fQ(20,8,14,!0)
D.bxY=new C.fQ(30,9,14,!0)
D.bym=new C.fQ(22,5,9.5,!0)
D.bxO=new C.fQ(30,2.5,10.5,!0)
D.byb=new C.fQ(50,5.5,13.5,!0)
D.byq=new C.fQ(12,2,9.5,!1)
D.by8=new C.fQ(16,1.3,9.5,!0)
D.byj=new C.fQ(40,2.5,7,!0)
D.byp=new C.fQ(60,1.2,4.8,!0)
D.byn=new C.fQ(18,5,13.5,!0)
D.byg=new C.fQ(8,2,9.5,!1)
D.by7=new C.fQ(12,2.5,8,!1)
D.bxV=new C.fQ(20,3.5,13.5,!0)
D.byc=new C.fQ(3.5,3,13,!1)
D.A2=new B.bw(D.eic,[D.bxP,D.byf,D.by6,D.byk,D.by9,D.bxL,D.byi,D.by0,D.bxT,D.bxZ,D.by_,D.by1,D.bxM,D.byh,D.bya,D.bxX,D.byt,D.by4,D.byd,D.by3,D.byl,D.bys,D.byo,D.by2,D.bxK,D.bye,D.byr,D.akt,D.Gx,D.bxW,D.Gx,D.bxR,D.Gx,D.bxS,D.akt,D.Gx,D.by5,D.bxN,D.bxU,D.aku,D.bxQ,D.bxY,D.bym,D.bxO,D.byb,D.byq,D.by8,D.byj,D.byp,D.Gx,D.aku,D.byn,D.byg,D.by7,D.bxV,D.byc],B.as("bw<n,fQ>"))
D.ehO={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eYa=new B.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eD5=new B.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eD0=new B.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.ePv=new B.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eQt=new B.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.ePr=new B.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eB6=new B.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.eNo=new B.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eYi=new B.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eQP=new B.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eGu=new B.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eAL=new B.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eFt=new B.y("Movement","They pull your legs together and help you balance.")
D.eHr=new B.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eDe=new B.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eVA=new B.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eWK=new B.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.eN6=new B.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eWt=new B.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eLH=new B.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eQY=new B.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eAS=new B.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eHO=new B.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eQC=new B.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.eM2=new B.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eWB=new B.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eOW=new B.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eB4=new B.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eRy=new B.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eVd=new B.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eTk=new B.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.ez6=new B.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eOE=new B.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eOI=new B.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.eIy=new B.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eDs=new B.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.eHf=new B.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.eNy=new B.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eU9=new B.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eYf=new B.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eQV=new B.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.eyP=new B.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.eNK=new B.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.ezF=new B.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eUp=new B.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eVw=new B.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.eOa=new B.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eUE=new B.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eAU=new B.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eW7=new B.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eEP=new B.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eTN=new B.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eIc=new B.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eLX=new B.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eRe=new B.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eWh=new B.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eW9=new B.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eWd=new B.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.eMu=new B.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eS6=new B.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eTh=new B.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eVU=new B.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.eO9=new B.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.eKg=new B.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eIZ=new B.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eOz=new B.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eR7=new B.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.eKN=new B.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eLu=new B.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eFd=new B.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eVs=new B.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eG3=new B.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.ezC=new B.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.eIx=new B.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.ezx=new B.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eDU=new B.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.eIC=new B.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eGd=new B.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eRu=new B.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eHu=new B.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eXX=new B.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eJ8=new B.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.eMn=new B.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eP3=new B.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eGm=new B.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eG5=new B.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dDR=new B.bw(D.ehO,[D.eYa,D.eD5,D.eD0,D.ePv,D.eQt,D.ePr,D.eB6,D.eNo,D.eYi,D.eQP,D.eGu,D.eAL,D.eFt,D.eHr,D.eDe,D.eVA,D.eWK,D.eN6,D.eWt,D.eLH,D.eQY,D.eAS,D.eHO,D.eQC,D.eM2,D.eWB,D.eOW,D.eB4,D.eRy,D.eVd,D.eTk,D.ez6,D.eOE,D.eOI,D.eIy,D.eDs,D.eHf,D.eNy,D.eU9,D.eYf,D.eQV,D.eyP,D.eNK,D.ezF,D.eUp,D.eVw,D.eOa,D.eUE,D.eAU,D.eW7,D.eEP,D.eTN,D.eIc,D.eLX,D.eRe,D.eWh,D.eW9,D.eWd,D.eMu,D.eS6,D.eTh,D.eVU,D.eO9,D.eKg,D.eIZ,D.eOz,D.eR7,D.eKN,D.eLu,D.eFd,D.eVs,D.eG3,D.ezC,D.eIx,D.ezx,D.eDU,D.eIC,D.eGd,D.eRu,D.eHu,D.eXX,D.eJ8,D.eMn,D.eP3,D.eGm,D.eG5],B.as("bw<n,+(n,n)>"))
D.dKW=new C.Vu(null)
D.dL8=new C.Vv(null)
D.dNb=new C.Vz(null)
D.dO_=new C.W9(null)
D.dO3=new C.Wa(null)
D.dOC=new C.Wi(null)
D.dSn=new C.WR(null)
D.dT3=new C.WS(null)
D.dXg=new C.WX(null)
D.ec9=new C.WY(null)
D.ecc=new C.X1(null)
D.eem=new C.Xl(null)
D.een=new C.a9f(null)
D.egq=new C.Xu(null)
D.ekj=new B.o(0,118)
D.aL2=new B.o(0,13)
D.ekk=new B.o(0,17)
D.ekn=new B.o(0,330)
D.ekt=new B.o(0,-13)
D.eku=new B.o(0,-17)
D.ekv=new B.o(0,-18)
D.ekw=new B.o(0,-19)
D.eky=new B.o(0,-28)
D.ekA=new B.o(0,-31)
D.ekB=new B.o(0,-32)
D.ekH=new B.o(-9.5,-11)
D.ekK=new B.o(10,20)
D.ekN=new B.o(10,-13)
D.ekP=new B.o(10,-22)
D.ekQ=new B.o(10,-4)
D.ekU=new B.o(11,0)
D.a8d=new B.o(11,8)
D.el_=new B.o(12,2)
D.el0=new B.o(14,0)
D.el1=new B.o(14,12)
D.aLe=new B.o(14,8)
D.el2=new B.o(14,-17)
D.aLg=new B.o(14,-3)
D.aLh=new B.o(14,-4)
D.el5=new B.o(15,0)
D.el6=new B.o(15,-12)
D.el9=new B.o(16,-8)
D.ela=new B.o(18,14)
D.elb=new B.o(18,-12)
D.aLm=new B.o(20,0)
D.elj=new B.o(20,15)
D.elk=new B.o(20,-17)
D.ell=new B.o(20,-3)
D.elm=new B.o(21,8)
D.elq=new B.o(22,10)
D.aLo=new B.o(22,8)
D.elr=new B.o(24,0)
D.els=new B.o(24,2)
D.elv=new B.o(24,-18)
D.elw=new B.o(24,-22)
D.elA=new B.o(25,8)
D.elB=new B.o(26,0)
D.elF=new B.o(28,-30)
D.elM=new B.o(30,18)
D.elN=new B.o(30,2)
D.elQ=new B.o(31,19)
D.elS=new B.o(32,0)
D.aLs=new B.o(34,0)
D.aLt=new B.o(34,-32)
D.Jt=new B.o(36,0)
D.em4=new B.o(3,-1)
D.em7=new B.o(40,3)
D.eml=new B.o(4,11)
D.emo=new B.o(4,-2)
D.emt=new B.o(5,17)
D.emu=new B.o(5,6)
D.emz=new B.o(6,11)
D.emF=new B.o(8,7)
D.emG=new B.o(8,-10)
D.emH=new B.o(8,-14)
D.aLy=new B.o(9,0)
D.emR=new B.o(-20.5,-17.6)
D.emS=new B.o(-9,18.5)
D.emV=new B.o(-2.6,-1)
D.en3=new B.o(2.6,1)
D.ena=new B.o(-9,12.2)
D.enu=new B.o(-9,20.5)
D.enQ=new B.o(-10,0)
D.enR=new B.o(-10,12)
D.aLG=new B.o(-10,4)
D.enV=new B.o(-11,0)
D.enY=new B.o(-11,-2)
D.eo1=new B.o(-13,-5)
D.eo2=new B.o(-14,0)
D.eo3=new B.o(-14,13)
D.eo4=new B.o(-14,2)
D.eo5=new B.o(-14,-12)
D.eo6=new B.o(-14,-19)
D.eo8=new B.o(-14,-23)
D.eo9=new B.o(-15,6)
D.eoc=new B.o(-16,14)
D.eoe=new B.o(-16,-8)
D.eof=new B.o(-17,10)
D.eog=new B.o(-17,-18)
D.eoh=new B.o(-17,-8)
D.eoj=new B.o(-18,20)
D.eok=new B.o(-18,-9)
D.aLI=new B.o(-20,0)
D.eom=new B.o(-20,16)
D.eon=new B.o(-20,-9)
D.TU=new B.o(-22,8)
D.eoo=new B.o(-22,-10)
D.eop=new B.o(-22,-11)
D.eoq=new B.o(-24,10)
D.eor=new B.o(-24,11)
D.eos=new B.o(-24,14)
D.eot=new B.o(-24,-22)
D.eov=new B.o(-25,-11)
D.eow=new B.o(-26,0)
D.eox=new B.o(-26,-18)
D.eoy=new B.o(-2,9)
D.eoz=new B.o(-2,-10)
D.eoA=new B.o(-2,-20)
D.eoD=new B.o(-2,-9)
D.eoF=new B.o(-32,0)
D.aLK=new B.o(-34,0)
D.eoK=new B.o(-40,3)
D.eoM=new B.o(-4,11)
D.eoN=new B.o(-4,-17)
D.eoO=new B.o(-4,-2)
D.eoS=new B.o(-5,0)
D.eoT=new B.o(-5,20)
D.eoU=new B.o(-5,6)
D.eoV=new B.o(-6,26)
D.eoW=new B.o(-6,6)
D.eoX=new B.o(-6,-42)
D.eoZ=new B.o(-7,-19)
D.ep_=new B.o(-7,-24)
D.ep2=new B.o(-8,-9)
D.a8m=new B.o(-9,0)
D.ep3=new B.o(-9,1)
D.ep5=new B.o(-9,-23)
D.fFO=new B.B("Thinking\u2026",null,A.hh,null,null,null,null,null,null,null,null,null)
D.eq7=new B.D(A.jD,D.fFO,null)
D.fWy=new B.B("Start from a ready-made board",null,A.fB,null,null,null,null,null,null,null,null,null)
D.eqk=new B.D(A2.wi,D.fWy,null)
D.bFR=new B.R(4,0,4,14)
D.fB2=new B.G(!0,A.aD,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGO=new B.B("Games and little helpers for a spare minute.",null,D.fB2,null,null,null,null,null,null,null,null,null)
D.eqw=new B.D(D.bFR,D.fGO,null)
D.dmp=w([A.iB,A.bq],x.O)
D.aQC=new B.c1(A.A,0.5,A.x,null,0,D.dmp,null,null)
D.exH=new B.c1(A.A,0.5,A.x,null,0,D.aCH,null,null)
D.dd0=w([A.c,A.bK],x.O)
D.exJ=new B.c1(A.A,0.5,A.x,null,0,D.dd0,null,null)
D.dv3=w([A.bP,A.hr],x.O)
D.aQD=new B.c1(A.A,0.5,A.x,null,0,D.dv3,null,null)
D.cRF=w([A.c,A.bP],x.O)
D.exN=new B.c1(A.tI,0.5,A.x,null,0,D.cRF,null,null)
D.bv4=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.dt3=w([A.fm,D.bv4],x.O)
D.exR=new B.c1(A.tI,0.5,A.x,null,0,D.dt3,null,null)
D.cKQ=w([A.df,A.cu],x.O)
D.exS=new B.c1(A.A,0.5,A.x,null,0,D.cKQ,null,null)
D.cZA=w([A.fY,A.aU,A.cZ],x.O)
D.exV=new B.c1(A.tI,0.5,A.x,null,0,D.cZA,null,null)
D.dn3=w([A.hr,M.nv],x.O)
D.exW=new B.c1(A.tI,0.5,A.x,null,0,D.dn3,null,null)
D.ey_=new B.c1(A.A,0.5,A.x,null,0,D.ayU,null,null)
D.dvT=w([A.hr,A.i1],x.O)
D.ey7=new B.c1(A.A,0.5,A.x,null,0,D.dvT,null,null)
D.aQH=new B.aO(9,9)
D.eyf=new B.aO(1.4,1.4)
D.f52=new B.a1(10,-8,18,-2)
D.f53=new B.a1(14,-14,20,14)
D.f55=new B.a1(20,-2,30,2)
D.f5a=new B.a1(4,-13,30,-3)
D.f5g=new B.a1(8,-7,12,7)
D.f5s=new B.a1(-12,12,12,19)
D.f5t=new B.a1(-12,14,12,22)
D.f5u=new B.a1(-12,-22,12,8)
D.f5v=new B.a1(-12,-25,12,19)
D.f5w=new B.a1(-12,-26,12,-6)
D.f5x=new B.a1(-12,-4,12,14)
D.f5z=new B.a1(-14,20,14,24)
D.f5A=new B.a1(-14,6,14,10)
D.f5B=new B.a1(-14,-17,14,15)
D.f5C=new B.a1(-14,-26,14,18)
D.f5D=new B.a1(-14,-4,14,20)
D.f5F=new B.a1(-15,-29,15,25)
D.f5G=new B.a1(-16,-16,16,16)
D.f5J=new B.a1(-16,-22,-9,18)
D.f5K=new B.a1(-16,-24,16,-10)
D.f5M=new B.a1(-16,-2,16,20)
D.f5O=new B.a1(-18,20,18,24)
D.f5P=new B.a1(-18,-18,18,20)
D.f5Q=new B.a1(-20,12,20,22)
D.f5R=new B.a1(-20,-28,20,26)
D.f5S=new B.a1(-22,14,22,18)
D.aRj=new B.a1(-22,-26,22,24)
D.f5T=new B.a1(-22,-3,22,3)
D.f5U=new B.a1(-22,-4,22,12)
D.f5W=new B.a1(-24,-12,10,22)
D.f5X=new B.a1(-24,-14,22,8)
D.f5Y=new B.a1(-24,-6,24,20)
D.aRk=new B.a1(-24,-9,24,9)
D.f5Z=new B.a1(-25,14,25,19)
D.f6_=new B.a1(-26,-14,14,8)
D.f60=new B.a1(-26,-4,26,20)
D.f61=new B.a1(-26,-6,4,6)
D.aRl=new B.a1(-28,-13,28,13)
D.f62=new B.a1(-28,-16,28,16)
D.f63=new B.a1(-28,-16,28,8)
D.f64=new B.a1(-28,-22,28,22)
D.f65=new B.a1(-30,-12,30,14)
D.f66=new B.a1(-30,-14,0,14)
D.f67=new B.a1(-30,-18,30,20)
D.f68=new B.a1(-30,-28,30,14)
D.f69=new B.a1(-30,-2,30,18)
D.f6a=new B.a1(-30,-4,30,18)
D.f6b=new B.a1(-32,-17,32,17)
D.f6c=new B.a1(-32,-28,32,18)
D.f6d=new B.a1(-33,-21,33,17)
D.f6e=new B.a1(-34,14,34,26)
D.a9g=new B.a1(-34,-18,34,18)
D.f6f=new B.a1(-34,-4,34,7)
D.f6g=new B.a1(-36,-24,36,20)
D.f6h=new B.a1(-38,-22,38,22)
D.f6j=new B.a1(-3,12,3,22)
D.f6k=new B.a1(-3,5,3,15)
D.f6o=new B.a1(-46,-34,46,28)
D.f6q=new B.a1(-48,-3,48,3)
D.f6t=new B.a1(-6,18,24,24)
D.f6u=new B.a1(-6,5,6,12)
D.f6v=new B.a1(-6,-22,6,-15)
D.f6z=new B.a1(-9,-16,9,22)
D.f6A=new B.a1(-4.5,-24,4.5,-21.2)
D.f6C=new B.a1(14,-9,17.5,9)
D.ejv={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aSq=new B.df(D.ejv,5,x.Q)
D.ej_={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.fac=new B.df(D.ej_,10,x.Q)
D.fcy=new B.av(24,44)
D.fcW=new B.av(54,38)
D.fd2=new B.av(66,38)
D.bdy=new B.fk(2,null,null,null,null,A.br,null,null,null,null)
D.fe4=new B.a5(16,16,D.bdy,null)
D.aTp=new B.hG(3,12,12,0.82,null)
D.fqQ=new B.G(!0,A9.xV,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fll=new B.en("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cJ,null,null,null,null,null,null,D.fqQ)
D.fvT=new B.G(!0,A.kL,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flr=new B.en("AI",null,null,A.cJ,null,null,null,null,null,null,D.fvT)
D.flJ=new B.G(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmg=new B.G(!0,A.bo,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmD=new B.G(!0,A.cn,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn9=new B.G(!0,A.bW,null,null,null,null,11,A.V,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fne=new B.G(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnv=new B.G(!0,A.c,null,null,null,null,13.5,A.I,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fo0=new B.G(!0,A.aS,null,null,null,null,12,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faX=new B.cU(A.hq,A.dG,6)
D.dg2=w([D.faX],B.as("O<cU>"))
D.fp_=new B.G(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.dg2,null,null,null)
D.fp4=new B.G(!0,A.eu,null,null,null,null,12.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fp9=new B.G(!0,A.bW,null,null,null,null,10.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpM=new B.G(!0,A.bW,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpU=new B.G(!0,A.aD,null,null,null,null,null,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqU=new B.G(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frp=new B.G(!0,A.aD,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frX=new B.G(!0,A.aU,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frZ=new B.G(!0,A.c,null,null,null,null,10.5,A.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.aD2,null,null,null)
D.fs4=new B.G(!0,A.c,null,null,null,null,12.5,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftT=new B.G(!0,A.uc,null,null,null,null,12.5,A.V,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fut=new B.G(!0,A.bN,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuy=new B.G(!0,A.bW,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuD=new B.G(!0,A.aD,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvp=new B.G(!0,A.mQ,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvE=new B.G(!0,A.ab,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVy=new B.G(!0,A.c,null,null,null,null,9.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwI=new B.G(!0,A.h7,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx0=new B.G(!0,A.bW,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxx=new B.G(!0,A.b5,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz_=new B.G(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzt=new B.G(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzL=new B.G(!0,A.aU,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA6=new B.G(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA9=new B.G(!0,A.aU,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBh=new B.G(!0,A.uc,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBE=new B.G(!0,A.b5,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpc=new B.G(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fC2=new B.B("\u26a0\ufe0f ",null,D.fpc,null,null,null,null,null,null,null,null,null)
D.fCf=new B.B("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.AO,null,null,null,null,null,null,null,null,null)
D.fDS=new B.B("Pick one, then change it and see what happens.",null,A.AO,null,null,null,null,null,null,null,null,null)
D.fql=new B.G(!0,A.ab,null,null,null,null,null,A.V,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fER=new B.B("What do you want to invent? Type it below, or tap an idea.",null,D.fql,null,null,null,null,null,null,null,null,null)
D.fGo=new B.B("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fH1=new B.B("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.fW,null,null,null,null,null,null,null,null,null)
D.fHE=new B.B("Make it yours",null,A.kf,null,null,null,null,null,null,null,null,null)
D.fKO=new B.B("5G",null,X.aUT,null,null,null,null,null,null,null,null,null)
D.fLP=new B.B("Pick how big the screen is on the board",null,A.hh,null,null,null,null,null,null,null,null,null)
D.fxi=new B.G(!0,A.bW,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fM0=new B.B("WHAT HAPPENS",null,D.fxi,null,null,null,null,null,null,null,null,null)
D.fNM=new B.B("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fOr=new B.B("Change the words and pictures on the three slabs.",null,A.AO,null,null,null,null,null,null,null,null,null)
D.fOC=new B.B("All the parts and wires will be removed.",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fOW=new B.B("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fPv=new B.B("Tap the crank on the board again and again to spin it faster.",null,A.hh,null,null,null,null,null,null,null,null,null)
D.fQJ=new B.B("\ud83c\udfaf Challenges",null,A.dh,null,null,null,null,null,null,null,null,null)
D.fRh=new B.B("Remove this part",null,W.aUt,null,null,null,null,null,null,null,null,null)
D.fRA=new B.B("Clear the board?",null,A.di,null,null,null,null,null,null,null,null,null)
D.fwJ=new B.G(!0,A.bx,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRR=new B.B("How the Lab works",null,D.fwJ,null,null,null,null,null,null,null,null,null)
D.fnI=new B.G(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSc=new B.B("Electronics Lab",null,D.fnI,null,null,null,null,A.a2,null,1,null,null)
D.fSg=new B.B("?",null,O.aW3,null,null,null,null,null,null,null,null,null)
D.fTz=new B.B("Ready-made circuits",null,A.dh,null,null,null,null,null,null,null,null,null)
D.fUc=new B.B("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hh,null,null,null,null,null,null,null,null,null)
D.fzP=new B.G(!0,A.aU,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXG=new B.B("\u26a0 There is no air here, so a parachute will not work.",null,D.fzP,null,null,null,null,null,null,null,null,null)
D.fYT=new B.B("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,W.aUr,null,null,null,null,null,null,null,null,null)
D.fZn=new B.B("NGMY",null,A.vz,null,null,null,null,null,null,null,null,null)
D.fZA=new B.B("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.VC,null,null,null,null,null,null,null,null,null)
D.fZZ=new B.B("Tap it to change its setting. Drag from the right dot to connect.",null,A.mA,null,null,null,null,null,null,null,null,null)
D.h02=new B.B("TOOLBOX",null,A8.aaF,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hsT=null
$.hsS=null
$.hz5=0
$.i17=B.T(x.N,B.as("iG"))
$.i1G=B.T(x.N,B.as("iG"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"izQ","bGs",()=>{var v="led"
return B.a([C.azP("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fri(),v),C.azP("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.frj(),v),C.azP("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.frk(),v),C.azP("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.frr(),v),C.azP("Not both","Make the light go OFF only when both switches are ON.",2,new C.frs(),v),C.azP("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.frt(),"buzzer")],B.as("O<bcN>"))})
w($,"iAh","bGt",()=>B.a([C.R9("UNIVERSE","Earth, space and gravity",A.PE,A.aI,new C.frJ()),C.R9("ELECTRONICS LAB","Batteries, wires, real circuits",Ag.CG,A.aI,new C.frK()),C.R9("DISCOVERY LAB","Body Explorer: a real 3D human",D.bP3,A.b5,new C.frL()),C.R9("TOOLBOX","Converter, clock, games",H.ap5,A.cF,new C.frM()),C.R9("REACTION LAB","Wire parts together",A.D2,A.bx,new C.frN()),C.R9("SPARK PAINTER","Paint with light",A.P3,A.bV,new C.frO()),C.R9("ROCKET LANDER","Land softly on the pad",A.oB,A.aI,new C.frP()),C.R9("TITLE ANIMATOR","Make a moving title",A.wK,A.bk,new C.frQ()),C.R9("CIRCUIT LAB","Connect logic, learn it",A.a2I,A.cn,new C.frR())],B.as("O<buZ>")))
w($,"iBW","qB",()=>{var v,u,t=B.T(x.N,x.B)
for(v=0;v<76;++v){u=D.Sh[v]
t.n(0,u.a,u)}return t})
w($,"izR","aiU",()=>B.a([C.Gn("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.fru()),C.Gn("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.frv()),C.Gn("Spin the motor","A battery and a motor in a loop will make it spin.",new C.frw()),C.Gn("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.frx()),C.Gn("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.fry()),C.Gn("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.frl()),C.Gn("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.frm()),C.Gn("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.frn()),C.Gn("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fro()),C.Gn("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.frp()),C.Gn("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.frq())],B.as("O<bcO>")))
w($,"iAj","hI5",()=>B.a([C.a1Y("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aU,A.ch,new C.frZ()),C.a1Y("Focus Timer","Work, then rest","\u23f1\ufe0f",A.c0,A.bC,new C.fs_()),C.a1Y("Breathe","Calm down in a minute","\ud83e\udee7",A.hn,A.cy,new C.fs0()),C.a1Y("Draw Pad","Sketch and share","\ud83c\udfa8",A.bF,A.b8,new C.fs1()),C.a1Y("Memory Match","Find the pairs","\ud83c\udccf",A.aI,A.cg,new C.fs2()),C.a1Y("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bk,A.bg,new C.fs3()),C.a1Y("Tip & Split","Share the bill","\ud83e\uddfe",A.b5,A.b1,new C.fs4()),C.a1Y("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.br,A.aE,new C.fs5())],B.as("O<bwi>")))})()};
(a=>{a["lq7dAl2Xbsa8KtOPfS6soAmjhPw="]=a.current})($__dart_deferred_initializers__);