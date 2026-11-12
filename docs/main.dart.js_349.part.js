((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,A3,Z,A4,A5,A_,R,A6,A7,A8,A9,Aa,A0,N,Ab,Ac,Ad,Ae,T,Af,P,Ag,U,V,W,E,K,G,I,A1,O,Ah,Ai,S,Aj,Q,Ak,L,F,M,C={
bBC(d){return C.i4P(d)},
i4P(d){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o
var $async$bBC=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.rb(B.nh(""),d,A.hX,null,null).df(0,A.a_s),$async$bBC)
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
return B.i($async$bBC,v)},
igK(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=d.toLowerCase()
for(w=null,v=0,u=0;u<19;++u){t=D.RN[u]
for(s=t.e,r=s.length,q=0,p=0;p<r;++p){o=s[p]
if(B.cS(j,o,0))q+=o.length}if(q>v){v=q
w=t}}s=B.ag(y.f,!0,!1,!1,!1)
n=s.b.test(j)
if(n)w=A.d.fe(D.RN,new C.fIM())
if(w==null)w=A.d.gH(D.RN)
s=B.T(x.N,x.B)
for(r=w.c,m=r.length,u=0;u<r.length;r.length===m||(0,B.K)(r),++u){l=r[u].a
k=l[0]
l=$.qy().h(0,l[1])
l.toString
s.n(0,k,l)}m=B.a([],x.s)
for(l=r.length,u=0;u<r.length;r.length===l||(0,B.K)(r),++u){k=r[u].a
m.push("Add the "+s.h(0,k[0]).b.toLowerCase()+": "+A.d.gH(s.h(0,k[0]).e.split(". "))+".")}m.push("Join them with wires into one complete loop, so the current can go round and round.")
m.push("Switch on and watch it work!")
s=n?y.d:""
return new C.akV(w.a,w.b,m,w,s,!1)},
iap(d){return'You are an electronics teacher for children and grown-ups, inside a circuit simulator. Design a circuit for this wish: "'+d+'".\n\nYou may ONLY use these part kinds (each has exactly 2 terminals, number 0 and 1; for battery, solar, crank and turbine terminal 0 is plus and 1 is minus; for led terminal 0 is the anode):\n'+new B.N(D.Sc,new C.fxG(),x.bd).aO(0,"\n")+'\n\nRules for a circuit that really works in the simulator:\n- Current needs a complete loop: from the plus of a power source, through the parts, and back to its minus.\n- A bulb works at about 3 volts and burns out above about 5 volts. A LED needs a resistor of at least 100 ohms or it burns out. A radio needs 3 volts or more. A TV needs 6 volts or more. Battery volts can be 1.5, 3, 4.5, 9 or 12. Solar, crank and wind give up to 5 volts (settings are 0 to 1).\n- Be truthful about physics. Energy cannot be made from nothing, so never promise a perpetual motion or free energy machine. If asked for one, say so kindly in "honest" and design the closest real thing that harvests energy from sunlight, wind, water or muscles (solar, crank, turbine) and optionally stores it in a capacitor.\n- Use at most 7 parts. Place them on a board with x and y from 0.15 to 0.85, in a neat row or two, spread out.\n\nReply with ONLY a JSON object, no markdown, in exactly this form:\n{"title":"short name","explain":"two or three simple sentences on how it works","honest":"" ,"steps":["short build step 1","step 2","..."],\n"parts":[{"id":"a","kind":"battery","x":0.2,"y":0.3,"volts":9},{"id":"b","kind":"switch","x":0.5,"y":0.3,"on":1}],\n"wires":[["a",0,"b",0],["b",1,"c",0]]}\nOptional part settings: volts, level (0 to 1), ohms, on (1 or 0). Make sure every wire is [partId, terminal, partId, terminal] and that the wires make complete loops.\n'},
ioH(b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null
if(b2==null)return b1
w=A.a.cq(b2,"{")
v=A.a.p5(b2,"}")
if(w<0||v<=w)return b1
try{u=x.f.a(A.Y.aQ(0,A.a.aB(b2,w,v+1),b1))
t=B.a([],x.d)
a5=x.N
s=B.aR(a5)
r=0
for(a6=x.j,a7=J.aU(a6.a(J.t(u,"parts"))),a8=x.i;a7.C();){q=a7.gR(a7)
p=B.w(J.t(q,"kind"))
o=B.w(J.t(q,"id"))
if(!$.qy().ao(0,p)||J.f1(s,o)||J.ad(t)>=8)continue
J.c5(s,o)
n=B.T(a5,a8)
for(a9=0;a9<4;++a9){m=D.dwd[a9]
l=J.t(q,m)
if(typeof l=="number")J.aK(n,m,l)}k=A.j.E(typeof J.t(q,"x")=="number"?B.dC(J.t(q,"x")):0.2+A.j.F(r,3)*0.3,0.16,0.84)
j=A.j.E(typeof J.t(q,"y")=="number"?B.dC(J.t(q,"y")):0.25+A.j.ar(r,3)*0.3,0.1,0.9)
J.c5(t,new B.dX([o,p,k,j,n]));++r}if(J.ad(t)<2)return b1
i=B.a([],x.o)
for(a5=J.aU(a6.a(J.t(u,"wires")));a5.C();){h=a5.gR(a5)
g=a6.a(h)
if(J.ad(g)<4)continue
f=B.w(J.t(g,0))
e=B.w(J.t(g,2))
d=A.o.E(A.j.M(B.dC(J.t(g,1))),0,1)
a0=A.o.E(A.j.M(B.dC(J.t(g,3))),0,1)
if(J.f1(s,f)&&J.f1(s,e)&&!J.z(f,e))J.c5(i,new B.cu([f,d,e,a0]))}if(J.ad(i)<2)return b1
d=x.s
a1=B.a([],d)
a0=x.L.a(J.t(u,"steps"))
a0=J.aU(a0==null?A.cp:a0)
while(a0.C()){a2=a0.gR(a0)
J.c5(a1,B.w(a2))}a3=a1
a0=J.t(u,"title")
a0=B.w(a0==null?"My invention":a0)
a1=J.t(u,"explain")
a4=new C.mS(a0,B.w(a1==null?"":a1),t,i,A.Z)
a0=a4.a
a1=a4.b
d=J.ad(a3)===0?B.a(["Add the parts.","Wire them into a loop.","Switch on!"],d):a3
a5=J.t(u,"honest")
a5=B.w(a5==null?"":a5)
return new C.akV(a0,a1,d,a4,a5,!0)}catch(b0){return b1}},
ifd(d){var w,v,u=C.hju()
d.B(u)
for(w=0;w<60;++w)u.vH(0,0.03333333333333333)
v=u.a
return A.d.aW(v,new C.fFb(u))&&!A.d.cC(v,new C.fFc())},
ifc(d){var w,v,u,t,s,r,q,p,o,n,m,l=x.N,k=B.T(l,l)
for(l=d.a,w=l.length,v=0,u=0;u<l.length;l.length===w||(0,B.K)(l),++u){t=l[u];++v
k.n(0,t.a,$.qy().h(0,t.b).b+" #"+v)}w=x.s
s=B.a([],w)
for(r=l.length,u=0;u<l.length;l.length===r||(0,B.K)(l),++u){t=l[u]
q=B.a([],w)
p=t.b
if(p==="battery")q.push(B.w(t.e)+" V")
if(p==="resistor")q.push(""+A.j.V(t.r)+" ohms")
if(A.d.q(D.duv,p))q.push("level "+A.j.V(t.f*100)+"%")
if(p==="switch")q.push(t.w?"closed":"open")
if(t.x)o="BURNT OUT"
else{p=t.fx
o=p>0.05?"working (glow "+A.j.V(p*100)+"%)":"not working"}p=k.h(0,t.a)
n=q.length===0?"":" ("+A.d.aO(q,", ")+")"
s.push(B.w(p)+n+": "+o+", current "+A.j.ad(Math.abs(t.fr)*1000,0)+" mA")}l=B.a([],w)
for(w=d.b,r=w.length,u=0;u<w.length;w.length===r||(0,B.K)(w),++u){m=w[u]
l.push(B.w(k.h(0,m.a.a))+" terminal "+m.b+" to "+B.w(k.h(0,m.c.a))+" terminal "+m.d)}return"Parts:\n"+A.d.aO(s,"\n")+"\nWires: "+A.d.aO(l,"; ")},
i3g(d,e,f,g){var w,v,u,t,s
if(g.length===0)w=""
else{v=B.a([],x.s)
for(u=g.length,t=0;t<g.length;g.length===u||(0,B.K)(g),++t){s=g[t]
v.push("Q: "+s.a+"\nA: "+s.b)}w="Earlier questions:\n"+A.d.aO(v,"\n")+"\n\n"}v=A.d.aO(d.c," | ")
u=d.e
u=u.length===0?"":"Honesty note already given: "+u+"\n"
return'You are a friendly electronics teacher. A person just had you build "'+d.a+'" in a circuit simulator. How it works: '+d.b+"\nBuild steps: "+v+"\n"+u+"\nThis is exactly what is on the board right now:\n"+e+"\n\n"+w+'Answer their question about THIS invention in 2 to 5 short, simple sentences. Use the real parts and numbers above. Be truthful about physics (no free energy). If something is burnt out or not working, explain why and how to fix it. Do not reply with JSON.\nQuestion: "'+f+'"\n'},
igJ(d,e,f){var w,v,u,t,s,r=f.toLowerCase()
for(w=e.a,v=w.length,u=0;u<v;++u){t=w[u]
if(t.x)return"The "+$.qy().h(0,t.b).b.toLowerCase()+" burnt out: too much current or too many volts went through it. Lower the battery volts, or add a resistor in the loop, then rebuild it."}for(u=0;u<76;++u){s=D.Sc[u]
if(A.d.aW(w,new C.fIJ(s)))if(!B.cS(r,s.b.toLowerCase(),0))v=B.cS(r,s.a,0)
else v=!0
else v=!1
if(v)return s.e+" "+s.f}v=B.ag("why|not (work|light|turn|run|on)|dark|nothing",!0,!1,!1,!1)
if(v.b.test(r)){if(new B.Y(w,new C.fIK(e),B.U(w).k("Y<1>")).gau(0))return"Nothing is flowing. Electricity needs a complete loop from the plus of the power source, through every part, and back to its minus. Check that every wire is joined and that any switch is closed."
return"It is working: current is flowing round the loop. If it looks dim, the power source may be weak. Try more volts, more light, or turn the crank faster."}v=B.ag("volt|amp|current|power|watt",!0,!1,!1,!1)
if(v.b.test(r))return"Voltage is the push, current is how much charge flows each second. Right now the biggest current is about "+A.j.ad(A.d.cI(w,0,new C.fIL())*1000,0)+" milliamps. Tap a power part to change its volts and watch the current change."
v=B.ag("free|forever|perpetual|infinite",!0,!1,!1,!1)
if(v.b.test(r))return"No machine can make energy from nothing. This design only turns energy that is already around (sunlight, wind or your muscles) into electricity."
if(w.length===0)w="battery"
else{w=A.d.gH(w)
w=$.qy().h(0,w.b).b.toLowerCase()}return d.b+' Ask me about a part, like "what does the '+w+' do?", or "why is it not working?".'},
akV:function akV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fIM:function fIM(){},
fxG:function fxG(){},
fFb:function fFb(d){this.a=d},
fFc:function fFc(){},
fIJ:function fIJ(d){this.a=d},
fIK:function fIK(d){this.a=d},
fIL:function fIL(){},
Wx:function Wx(d,e){this.c=d
this.a=e},
bm3:function bm3(d,e,f,g,h){var _=this
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
ei4:function ei4(d){this.a=d},
ei5:function ei5(d,e,f){this.a=d
this.b=e
this.c=f},
ei6:function ei6(d){this.a=d},
eih:function eih(d){this.a=d},
eii:function eii(d,e){this.a=d
this.b=e},
eid:function eid(d){this.a=d},
eib:function eib(d,e){this.a=d
this.b=e},
eic:function eic(d,e,f){this.a=d
this.b=e
this.c=f},
eie:function eie(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ei9:function ei9(d){this.a=d},
eia:function eia(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eif:function eif(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ei8:function ei8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eig:function eig(d,e){this.a=d
this.b=e},
ei7:function ei7(d,e){this.a=d
this.b=e},
eil:function eil(d){this.a=d},
eik:function eik(d){this.a=d},
eim:function eim(d){this.a=d},
eij:function eij(d){this.a=d},
ein:function ein(d,e){this.a=d
this.b=e},
eio:function eio(d,e){this.a=d
this.b=e},
eip:function eip(d,e){this.a=d
this.b=e},
eiq:function eiq(d,e){this.a=d
this.b=e},
bBX(d,e,f){var w=null
return B.x(B.a([B.d(d,w,w,w,w,w,w,D.fpm,w,w,w),B.d(e,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.P,0,A.p)},
hxc(d,e,f,g){var w=null,v=B.n(24),u=B.L(f.j(0.6),A.r,1)
return B.at(B.q(w,B.x(B.a([B.d(d,w,w,w,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,22,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),A.K,w,w),A.am,B.d(e,w,w,w,w,w,w,A.xi,A.K,w,w),A.aC,B.bW(A.fM,g,A.bt,w,0,8)],x.p),A.m,w,A.e,A.P,0,A.p),A.f,w,w,new B.o(D.bgx,w,u,v,w,w,A.n),w,w,w,w,A.ac,w,w,w),w,w,w)},
GN:function GN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
vf:function vf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
WU:function WU(d){this.a=d},
aFS:function aFS(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.m5$=i
_.f9$=j
_.h7$=k
_.bx$=l
_.a9$=m
_.c=_.a=null},
exn:function exn(){},
exH:function exH(d){this.a=d},
exG:function exG(d,e){this.a=d
this.b=e},
exI:function exI(){},
exJ:function exJ(){},
exp:function exp(d,e,f){this.a=d
this.b=e
this.c=f},
exo:function exo(d,e){this.a=d
this.b=e},
exe:function exe(d){this.a=d},
exf:function exf(d){this.a=d},
exg:function exg(d){this.a=d},
exh:function exh(d){this.a=d},
exi:function exi(d){this.a=d},
exj:function exj(d){this.a=d},
exk:function exk(d){this.a=d},
exl:function exl(d){this.a=d},
exm:function exm(d){this.a=d},
exc:function exc(d){this.a=d},
exd:function exd(d){this.a=d},
exb:function exb(d){this.a=d},
exA:function exA(d,e){this.a=d
this.b=e},
exv:function exv(d){this.a=d},
exw:function exw(d){this.a=d},
exs:function exs(d){this.a=d},
exx:function exx(d){this.a=d},
exr:function exr(d){this.a=d},
exy:function exy(d){this.a=d},
exz:function exz(d){this.a=d},
exq:function exq(d){this.a=d},
exB:function exB(d,e){this.a=d
this.b=e},
exu:function exu(d,e){this.a=d
this.b=e},
exC:function exC(d){this.a=d},
exD:function exD(d){this.a=d},
exE:function exE(d){this.a=d},
exF:function exF(d){this.a=d},
ext:function ext(d){this.a=d},
bj0:function bj0(d,e){this.b=d
this.a=e},
aNN:function aNN(){},
bzC:function bzC(){},
cOn(){var w=0,v=B.j(x.m),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$cOn=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:w=3
return B.b($.rd().jo(0,"assets/data/body3d.bin"),$async$cOn)
case 3:d=a1
$.hsp=J.eE(A.dM.gaU(d),d.byteOffset,d.byteLength)
t=B.a4h(d)
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
e=D.diD[i]
g=B.b0((l<<16|h<<8|g|4278190080)>>>0)
r.push(new C.a4b(j,e,g,f,j==="Hair"||j==="Lips"||j==="Eyes",D.b3G))}q=new Float32Array(0)
l=new Float32Array(0)
h=new Int32Array(0)
u=new C.bbX(q,l,h,new Int32Array(0),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cOn,v)},
aTR:function aTR(d,e,f){this.a=d
this.b=e
this.c=f},
a4b:function a4b(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.x=_.w=_.r=_.f=0
_.y=i},
bbX:function bbX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Vq:function Vq(d){this.a=d},
aEl:function aEl(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0){var _=this
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
_.m5$=t
_.f9$=u
_.h7$=v
_.bx$=w
_.a9$=a0
_.c=_.a=null},
dOy:function dOy(d){this.a=d},
dOx:function dOx(d,e){this.a=d
this.b=e},
dOa:function dOa(d,e){this.a=d
this.b=e},
dOb:function dOb(){},
dOz:function dOz(){},
dOc:function dOc(d,e){this.a=d
this.b=e},
dOd:function dOd(d){this.a=d},
dOe:function dOe(){},
dOf:function dOf(d){this.a=d},
dOh:function dOh(d,e){this.a=d
this.b=e},
dOg:function dOg(d){this.a=d},
dO7:function dO7(d,e,f){this.a=d
this.b=e
this.c=f},
dO8:function dO8(d){this.a=d},
dO9:function dO9(d){this.a=d},
dOo:function dOo(d){this.a=d},
dOp:function dOp(d,e){this.a=d
this.b=e},
dOq:function dOq(d,e){this.a=d
this.b=e},
dOr:function dOr(d){this.a=d},
dOn:function dOn(d,e){this.a=d
this.b=e},
dOs:function dOs(d,e){this.a=d
this.b=e},
dOm:function dOm(d,e){this.a=d
this.b=e},
dOt:function dOt(d){this.a=d},
dOl:function dOl(d){this.a=d},
dOu:function dOu(d){this.a=d},
dOk:function dOk(d){this.a=d},
dOv:function dOv(d){this.a=d},
dOj:function dOj(d){this.a=d},
dOw:function dOw(d){this.a=d},
dOi:function dOi(d){this.a=d},
aMS:function aMS(){},
aMT:function aMT(){},
c62:function c62(d){var _=this
_.a=d
_.d=_.c=_.b=null},
c63:function c63(d,e){this.a=d
this.b=e},
c64:function c64(d){this.a=d},
azM(d,e,f,g,h){return new C.bcI(d,e,f,g,h)},
h9J(d,e,f,g,h,i){return $.i0C.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.cVi(d,e,f,i,g,h))},
yB:function yB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
CU:function CU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
nD:function nD(d,e,f){this.a=d
this.b=e
this.c=f},
bcI:function bcI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fr1:function fr1(){},
fr2:function fr2(){},
fr3:function fr3(){},
fra:function fra(){},
frb:function frb(){},
frc:function frc(){},
Vv:function Vv(d){this.a=d},
aEn:function aEn(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.m5$=n
_.f9$=o
_.h7$=p
_.bx$=q
_.a9$=r
_.c=_.a=null},
dQd:function dQd(d){this.a=d},
dPS:function dPS(d,e){this.a=d
this.b=e},
dPV:function dPV(){},
dQe:function dQe(){},
dPQ:function dPQ(d,e){this.a=d
this.b=e},
dPR:function dPR(d,e){this.a=d
this.b=e},
dPW:function dPW(d,e,f){this.a=d
this.b=e
this.c=f},
dPL:function dPL(){},
dPM:function dPM(){},
dPN:function dPN(d){this.a=d},
dPO:function dPO(d,e){this.a=d
this.b=e},
dPP:function dPP(d,e,f){this.a=d
this.b=e
this.c=f},
dPX:function dPX(){},
dPY:function dPY(d,e){this.a=d
this.b=e},
dPZ:function dPZ(d){this.a=d},
dPU:function dPU(d,e){this.a=d
this.b=e},
dPT:function dPT(d){this.a=d},
dPK:function dPK(d,e,f){this.a=d
this.b=e
this.c=f},
dQ7:function dQ7(d){this.a=d},
dQ6:function dQ6(d){this.a=d},
dQ8:function dQ8(d){this.a=d},
dQ5:function dQ5(d){this.a=d},
dQ3:function dQ3(d){this.a=d},
dQ4:function dQ4(d){this.a=d},
dQ2:function dQ2(d){this.a=d},
dQ_:function dQ_(d){this.a=d},
dQ1:function dQ1(d){this.a=d},
dQ9:function dQ9(d,e){this.a=d
this.b=e},
dQa:function dQa(d,e){this.a=d
this.b=e},
dQb:function dQb(d){this.a=d},
dQ0:function dQ0(d){this.a=d},
dQc:function dQc(d,e){this.a=d
this.b=e},
bd0:function bd0(d,e){this.b=d
this.a=e},
cVi:function cVi(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aMX:function aMX(){},
bzm:function bzm(){},
hSj(){return new C.O5(null)},
R4(d,e,f,g,h){return new C.buU(d,e,f,g,h)},
btg(d,e,f){return A.j.E((d-e)/(f-e),0,1)},
hag(d,e){var w=d*0.23
return(d-(3*w+2*d*0.1+w*0.3))/2+e*(w+d*0.1)},
O5:function O5(d){this.a=d},
L6:function L6(d,e){this.a=d
this.b=e},
B1:function B1(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aEE:function aEE(d){var _=this
_.d=null
_.e=d
_.f=0
_.c=_.a=null},
dWb:function dWb(d,e){this.a=d
this.b=e},
dWa:function dWa(d){this.a=d},
dWd:function dWd(d,e){this.a=d
this.b=e},
dWc:function dWc(d){this.a=d},
buU:function buU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
frs:function frs(){},
frt:function frt(){},
fru:function fru(){},
frv:function frv(){},
frw:function frw(){},
frx:function frx(){},
fry:function fry(){},
frz:function frz(){},
frA:function frA(){},
bth:function bth(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f72:function f72(d){this.a=d},
f71:function f71(d,e){this.a=d
this.b=e},
f7_:function f7_(d){this.a=d},
f73:function f73(d){this.a=d},
f70:function f70(d,e){this.a=d
this.b=e},
afP:function afP(d,e,f){this.c=d
this.d=e
this.a=f},
aeH:function aeH(d,e,f){this.c=d
this.d=e
this.a=f},
QY:function QY(d,e,f,g,h,i,j,k,l,m){var _=this
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
buh:function buh(d,e){this.b=d
this.a=e},
btN:function btN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bbF:function bbF(d,e){this.b=d
this.a=e},
aIR:function aIR(d,e){this.c=d
this.a=e},
aIS:function aIS(d,e,f){var _=this
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
f6J:function f6J(d){this.a=d},
f6I:function f6I(d){this.a=d},
f6H:function f6H(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6G:function f6G(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6E:function f6E(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6D:function f6D(d,e,f){this.a=d
this.b=e
this.c=f},
f6F:function f6F(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
f6C:function f6C(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6R:function f6R(d){this.a=d},
f6Q:function f6Q(d){this.a=d},
f6S:function f6S(d,e){this.a=d
this.b=e},
f6T:function f6T(d,e){this.a=d
this.b=e},
f6U:function f6U(d,e){this.a=d
this.b=e},
f6P:function f6P(d,e,f){this.a=d
this.b=e
this.c=f},
f6V:function f6V(d,e,f){this.a=d
this.b=e
this.c=f},
f6O:function f6O(d){this.a=d},
f6K:function f6K(d){this.a=d},
f6W:function f6W(d){this.a=d},
f6X:function f6X(d){this.a=d},
f6N:function f6N(d,e){this.a=d
this.b=e},
f6Y:function f6Y(d,e){this.a=d
this.b=e},
f6M:function f6M(d,e){this.a=d
this.b=e},
f6Z:function f6Z(d,e){this.a=d
this.b=e},
f6L:function f6L(d,e){this.a=d
this.b=e},
f6A:function f6A(){},
f6B:function f6B(){},
bsT:function bsT(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bsj:function bsj(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bcl:function bcl(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bsl:function bsl(d,e,f){this.b=d
this.c=e
this.a=f},
bwn:function bwn(d,e,f,g,h,i,j,k){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.a=k},
aOC:function aOC(){},
hyC(d,e,f){var w=Math.max(40,Math.abs(e.a-d.a)*0.5),v=d.a5(0,new B.p(w,0)),u=e.aK(0,new B.p(w,0)),t=1-f,s=3*t
return d.aN(0,t*t*t).a5(0,v.aN(0,s*t*f)).a5(0,u.aN(0,s*f*f)).a5(0,e.aN(0,f*f*f))},
bj_(d,e,f,g,h,i){return $.i1a.c3(0,d+"|"+B.w(e)+"|"+f.l()+"|"+B.w(g),new C.dqn(d,e,f,i,g,h))},
a1n:function a1n(d,e){this.a=d
this.b=e},
qn:function qn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
r5:function r5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
CY:function CY(d,e){this.a=d
this.b=e},
a_l:function a_l(d,e){this.a=d
this.b=e},
afD:function afD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a1A:function a1A(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
D8:function D8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acy:function acy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
acP:function acP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aeK:function aeK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
biY:function biY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
dqr:function dqr(d){this.a=d},
dqs:function dqs(d){this.a=d},
dqo:function dqo(d,e){this.a=d
this.b=e},
dqp:function dqp(d){this.a=d},
dqq:function dqq(d){this.a=d},
dqt:function dqt(d){this.a=d},
dqu:function dqu(d){this.a=d},
dqv:function dqv(d){this.a=d},
dqw:function dqw(d){this.a=d},
dqx:function dqx(d){this.a=d},
dqy:function dqy(d){this.a=d},
dqz:function dqz(d){this.a=d},
dqA:function dqA(d){this.a=d},
dqB:function dqB(d){this.a=d},
Gy:function Gy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
WT:function WT(d){this.a=d},
aFR:function aFR(d,e,f,g,h,i,j){var _=this
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
_.a9$=j
_.c=_.a=null},
ewI:function ewI(d){this.a=d},
ewx:function ewx(d){this.a=d},
ewz:function ewz(){},
ewA:function ewA(){},
ewD:function ewD(){},
ewE:function ewE(d,e,f){this.a=d
this.b=e
this.c=f},
ewF:function ewF(d){this.a=d},
ewG:function ewG(d){this.a=d},
ewB:function ewB(){},
ewC:function ewC(d){this.a=d},
ex7:function ex7(d){this.a=d},
ewH:function ewH(){},
ewt:function ewt(d){this.a=d},
ewK:function ewK(d){this.a=d},
ewJ:function ewJ(d){this.a=d},
ewM:function ewM(){},
ewL:function ewL(d,e){this.a=d
this.b=e},
eww:function eww(){},
ewu:function ewu(d){this.a=d},
ewv:function ewv(d){this.a=d},
ex5:function ex5(d){this.a=d},
ex4:function ex4(d){this.a=d},
ex6:function ex6(d){this.a=d},
ewW:function ewW(d,e){this.a=d
this.b=e},
ex3:function ex3(d){this.a=d},
ex1:function ex1(d){this.a=d},
ex2:function ex2(d){this.a=d},
ex0:function ex0(d){this.a=d},
ex_:function ex_(d){this.a=d},
ewX:function ewX(d){this.a=d},
ewY:function ewY(d){this.a=d},
ewZ:function ewZ(d){this.a=d},
ewy:function ewy(){},
ewS:function ewS(d){this.a=d},
ewT:function ewT(d){this.a=d},
ewR:function ewR(d){this.a=d},
ewU:function ewU(d){this.a=d},
ewQ:function ewQ(d){this.a=d},
ewV:function ewV(d){this.a=d},
ewP:function ewP(d){this.a=d},
ewO:function ewO(d){this.a=d},
ewN:function ewN(d,e){this.a=d
this.b=e},
biZ:function biZ(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.a=h},
dqn:function dqn(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aNL:function aNL(){},
hE3(d,e,f){var w,v,u=f.b
if(!(u===1&&f.d===0&&d.a<e.a))w=u===0&&f.d===1&&e.a<d.a
else w=!0
v=w?10:34+d.aK(0,e).gcH()*0.1
return new B.p((d.a+e.a)/2,Math.max(d.b,e.b)+v)},
hju(){var w=B.a([],x.C),v=B.a([],x.bL),u=B.a([],x.fQ)
return new C.a5k(w,v,u,A.cM,B.T(x.N,x.y))},
hM0(d,e,f){var w=d.c,v=e===0?-1:1
return new B.p(w*f.a+v*C.hjv(d),d.d*f.b)},
hjv(d){return 42+(D.mr.ao(0,d.b)?(d.ch-1)*38:0)},
eh:function eh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
tU:function tU(d,e,f,g){var _=this
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
abd:function abd(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ack:function ack(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
a5k:function a5k(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.d=_.c=0
_.e=null
_.f=f
_.r=g
_.x=_.w=0
_.y=h},
bPn:function bPn(){},
bPy:function bPy(d){this.a=d},
bPt:function bPt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bPz:function bPz(d){this.a=d},
bPA:function bPA(d){this.a=d},
bPC:function bPC(d){this.a=d},
bPD:function bPD(d){this.a=d},
bPB:function bPB(d){this.a=d},
bPE:function bPE(d,e,f){this.a=d
this.b=e
this.c=f},
bPF:function bPF(d){this.a=d},
bPp:function bPp(d){this.a=d},
bPq:function bPq(d){this.a=d},
bPo:function bPo(d){this.a=d},
bPr:function bPr(d,e,f){this.a=d
this.b=e
this.c=f},
bPs:function bPs(d){this.a=d},
bPm:function bPm(d){this.a=d},
bPG:function bPG(d,e){this.a=d
this.b=e},
bPu:function bPu(d,e){this.a=d
this.b=e},
bPx:function bPx(d){this.a=d},
bPw:function bPw(d){this.a=d},
bPv:function bPv(d){this.a=d},
ajJ:function ajJ(d,e,f,g,h,i,j){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.a=j},
bJL:function bJL(){},
bJM:function bJM(){},
mS:function mS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ct7:function ct7(d){this.a=d},
ioB(d2,d3,d4,d5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=null,c6=d3.fx>0&&!d3.x,c7=new C.fUz(),c8=new C.fUB(),c9=new C.fUC(),d0=new C.fUA(),d1=d3.b
switch(d1){case"fridge":w=c9.$4(-16,-28,32,54)
d2.am(w,d0.$3(new B.a3(w.a,w.b,w.c,w.d),A.bO,A.bM))
d2.ah(D.enS,D.ekN,c8.$2(A.dN,1.4))
d2.ah(D.eks,D.ekq,c8.$2(A.bv,2.4))
d2.ah(D.ekt,T.aL9,c8.$2(A.bv,2.4))
if(c6){d1=c7.$1(A.fE.j(0.5))
d1.y=A.H1
d2.N(D.ek8,14,d1)
for(d1=d4*0.6,v=0;v<3;++v){u=A.j.F(d1+v/3,1)
d5.$5(d2,"\u2744",new B.p(-12+v*9,4+u*16),A.c.j(1-u),9)}}return!0
case"washer":d2.am(c9.$4(-22,-26,44,50),d0.$3(D.aRg,A.aQ,A.cu))
d2.N(A.cL,16,c7.$1(A.bv))
d2.N(A.cL,13,c7.$1(c6?A.aJ.j(0.85):A.O))
if(c6){d1=d2.c
J.br(d1.save())
d1.translate(0,4)
d2.hW(0,d3.y*0.6)
for(v=0;v<3;++v){t=v*2.09
d2.ah(A.H,new B.p(Math.cos(t)*11,Math.sin(t)*11),c8.$2(A.ab,3))}d1.restore()
for(d1=d4*0.8,v=0;v<4;++v){u=A.j.F(d1+v*0.25,1)
d2.N(new B.p(Math.sin(v*2+d4)*9,4-u*12),1.6+u*2,c7.$1(A.c.j(0.8*(1-u))))}}d2.N(D.enK,2.4,c7.$1(c6?A.bg:A.an))
d2.N(D.eoC,2.4,c7.$1(A.an))
return!0
case"blender":d2.am(c9.$5(-14,14,28,12,4),c7.$1(A.ed))
d1=$.S().r
t=x.v
s=new B.aF(d1,A.ai,c5,c5,B.a([],t))
s.D(new B.aZ(-16,-26))
s.D(new B.aq(16,-26))
s.D(new B.aq(12,14))
s.D(new B.aq(-12,14))
s.D(new B.bv())
d2.af(s,c7.$1(A.fE.j(0.35)))
if(c6){d1=new B.aF(d1,A.ai,c5,c5,B.a([],t))
d1.D(new B.aZ(-14,-10))
d1.D(new B.aq(14,-10))
d1.D(new B.aq(12,14))
d1.D(new B.aq(-12,14))
d1.D(new B.bv())
d2.af(d1,c7.$1(A.az.j(0.7)))}d2.af(s,c8.$2(A.ab,1.6))
d1=d2.c
J.br(d1.save())
d1.translate(0,10)
d2.hW(0,d3.y)
d2.ah(D.a8f,D.aLv,c8.$2(A.bP,3))
d1.restore()
if(c6)for(d1=d4*9,t=d4*1.6,v=0;v<3;++v)d2.N(new B.p(Math.sin(d1+v*2)*9,-10-A.j.F(t+v*0.33,1)*12),2.4,c7.$1(A.f_))
return!0
case"drone":d2.am(c9.$5(-10,-4,20,10,4),c7.$1(A.aM))
d2.N(A.ih,3,c7.$1(c6?A.bg:A.an))
r=c6?-3+Math.sin(d4*4)*2:4
for(d1=d2.c,t=-4+r,q=-6+r,p=0;p<2;++p){o=F.Sq[p]
d2.ah(new B.p(o*0.4,1),new B.p(o,t),c8.$2(A.bv,3))
J.br(d1.save())
d1.translate(o,q)
d2.ah(D.eny,D.ekx,c8.$2(A.c.j(c6?0.35:0.9),3))
if(c6)d2.bY(B.bB(A.H,6,24+Math.sin(d3.y*3)*4),c7.$1(A.c.j(0.25)))
d1.restore()}return!0
case"drill":w=new B.aF($.S().r,A.ai,c5,c5,B.a([],x.v))
w.D(new B.aZ(-24,-12))
w.D(new B.aq(10,-12))
w.D(new B.aq(10,2))
w.D(new B.aq(-2,2))
w.D(new B.aq(-6,22))
w.D(new B.aq(-16,22))
w.D(new B.aq(-14,2))
w.D(new B.aq(-24,2))
w.D(new B.bv())
d2.af(w,d0.$3(D.f5x,A.aU,A.d2))
d2.aq(D.f4E,c7.$1(A.di))
d1=d2.c
J.br(d1.save())
d1.translate(18,-5)
d2.hW(0,d3.y*2)
d2.ah(A.H,D.ekE,c8.$2(A.bP,2.4))
d2.ah(A.a8c,D.ekD,c8.$2(A.hD,1))
d1.restore()
if(c6)for(d1=d4*3,t=d4*20,v=0;v<4;++v){u=A.j.F(d1+v*0.25,1)
d2.N(new B.p(34+u*6,-5+Math.sin(v*3+t)*6*u),1.4,c7.$1(A.dF.j(1-u)))}return!0
case"torch":if(c6){v=A.j.E(0.5+0.12*(Math.abs(d3.dy)-2),0.5,1)
d1=new B.aF($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.D(new B.aZ(16,-6))
d1.D(new B.aq(52,-26))
d1.D(new B.aq(52,18))
d1.D(new B.aq(16,4))
d1.D(new B.bv())
d2.af(d1,c7.$1(A.bN.j(0.35*v)))}d2.am(c9.$5(-26,-6,30,12,3),d0.$3(D.f5D,A.bo,A.cs))
n=new B.aF($.S().r,A.ai,c5,c5,B.a([],x.v))
n.D(new B.aZ(4,-6))
n.D(new B.aq(18,-12))
n.D(new B.aq(18,12))
n.D(new B.aq(4,6))
n.D(new B.bv())
d2.af(n,c7.$1(A.ed))
d2.N(D.ekJ,7,c7.$1(c6?A.c:A.di))
return!0
case"neon":d2.am(c9.$5(-30,-14,60,28,6),c7.$1(M.ns))
if(c6)m=d3.ax>0.5||A.o.F(A.j.bh(d4*17),3)!==0
else m=!1
l=m?A.c4:D.bqJ
if(m){d1=c9.$5(-28,-12,56,24,6)
t=c7.$1(A.c4.j(0.35))
t.y=A.mf
d2.am(d1,t)}d2.am(c9.$5(-27,-11,54,22,5),c8.$2(l,2.2))
d5.$5(d2,"OPEN",D.enY,l,17)
return!0
case"microwave":d2.am(c9.$4(-30,-18,60,38),d0.$3(D.f5J,A.bP,A.bo))
d1=c9.$5(-26,-14,38,30,3)
d2.am(d1,c7.$1(c6?A.bN.j(0.75):A.au))
if(c6){d1=d2.c
J.br(d1.save())
d1.translate(-7,8)
d2.hW(0,d3.y*0.5)
d2.bY(B.bB(A.H,7,22),c7.$1(A.d2))
d1.restore()}d2.am(c9.$5(15,-14,12,12,2),c7.$1(M.ns))
if(c6)d5.$5(d2,"0:"+A.a.b_(A.o.u(59-A.o.F(A.j.bh(d4),60)),2,"0"),D.ekK,A.b9,6.5)
d2.N(D.el_,4,c7.$1(A.di))
return!0
case"doorbell":d2.am(c9.$5(-16,-26,32,52,8),c7.$1(A.aO))
d2.N(A.Jo,10,c7.$1(c6?A.bq:A.bv))
d1=d2.c
J.br(d1.save())
d1.translate(0,-8)
d2.hW(0,c6?Math.sin(d4*16)*0.45:0)
d5.$5(d2,"\ud83d\udd14",D.eoG,A.c,16)
d1.restore()
d2.N(A.kz,6,c7.$1(A.d9))
d2.N(A.kz,6,c8.$2(A.c,1.6))
if(c6)for(d1=d4*14,v=1;v<=2;++v)d2.cM(B.bX(A.Jo,14+v*6+A.j.F(d1,6)),-0.9,1.8,!1,c8.$2(A.bq.j(0.9-v*0.3),1.8))
return!0
case"camera":d2.ah(D.enX,D.eoz,c8.$2(A.bv,4))
d1=d2.c
J.br(d1.save())
d2.hW(0,c6?Math.sin(d4*0.9)*0.18:0)
d2.am(c9.$5(-24,-14,46,22,5),d0.$3(D.f5y,A.bP,A.an))
d2.N(D.aLd,8,c7.$1(A.au))
d2.N(D.aLd,4.5,c7.$1(c6?A.aJ:A.cs))
d2.N(D.enV,2.2,c7.$1(c6&&A.o.F(A.j.bh(d4*1.6),2)===0?A.az:A.ko))
d1.restore()
if(c6)d5.$5(d2,"REC",D.eo5,A.az,9)
return!0
case"console":d2.am(c9.$5(-28,-22,56,44,8),d0.$3(D.f5G,A.iZ,A.fj))
d2.am(c9.$5(-20,-17,40,22,3),c7.$1(A.dB))
if(c6){d1=d4*2.3
d2.N(new B.p(Math.sin(d1)*14,-6+Math.cos(d4*3.1)*6),2.6,c7.$1(A.c))
t=-9+Math.sin(d1+0.4)*6
d2.aq(new B.a3(-18,t,-15.6,t+8),c7.$1(A.b9))
d1=-9+Math.sin(d1-0.4)*6
d2.aq(new B.a3(15.6,d1,18,d1+8),c7.$1(A.c4))}d2.N(D.enQ,4,c7.$1(A.aT))
d2.N(D.ekF,2.4,c7.$1(A.az))
d2.N(D.ekX,2.4,c7.$1(A.bg))
return!0
case"heartmon":d2.am(c9.$5(-30,-22,60,44,6),c7.$1(A.au))
d2.am(c9.$5(-26,-18,52,28,3),c7.$1(A.dB))
if(c6){d1=$.S()
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
if(h!=null)q.aj(h)
k.aa()}else{q=new B.aq(o,i)
t.push(q)
h=k.f
if(h!=null)q.aj(h)
k.aa()}}d2.af(k,c8.$2(A.b9,1.8))
d5.$5(d2,"72",D.ekG,A.hi,11)
d1=d4*9
d5.$5(d2,"\u2665",D.eoa,A.hi.j((Math.sin(d1)+1.4)/2.4),9+Math.sin(d1)*1.2)}d2.N(D.eo_,3,c7.$1(c6?A.bg:A.bv))
return!0
case"aquarium":d1=c9.$5(-26,-20,52,40,4)
d2.am(d1,c7.$1(A.cy.j(c6?0.5:0.3)))
d2.am(c9.$5(-26,-20,52,40,4),c8.$2(A.ab,1.6))
d2.aq(D.f5A,c7.$1(F.tZ))
if(c6){d1=d4*1.1
t=Math.sin(d1)
q=d2.c
J.br(q.save())
q.translate(t*14,-2+Math.sin(d4*2)*3)
if(Math.cos(d1)<0)d2.og(0,-1,1)
d2.bY(B.bB(A.H,8,14),c7.$1(A.cJ))
d1=new B.aF($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.D(new B.aZ(-6,0))
d1.D(new B.aq(-12,-4))
d1.D(new B.aq(-12,4))
d1.D(new B.bv())
d2.af(d1,c7.$1(A.ch))
d2.N(D.elI,1.2,c7.$1(A.w))
q.restore()
for(d1=d4*0.7,v=0;v<5;++v){u=A.j.F(d1+v*0.2,1)
d2.N(new B.p(-18+Math.sin(u*8+v)*2,13-u*30),1.4+A.o.F(v,2),c8.$2(A.ab,1))}}return!0
case"lighthouse":d1=$.S().r
t=x.v
g=new B.aF(d1,A.ai,c5,c5,B.a([],t))
g.D(new B.aZ(-9,22))
g.D(new B.aq(-5,-16))
g.D(new B.aq(5,-16))
g.D(new B.aq(9,22))
g.D(new B.bv())
d2.af(g,d0.$3(D.f6a,A.c,A.bD))
d2.aq(D.f66,c7.$1(c6?A.dF:A.bv))
q=new B.aF(d1,A.ai,c5,c5,B.a([],t))
q.D(new B.aZ(-7,-22))
q.D(new B.aq(0,-29))
q.D(new B.aq(7,-22))
q.D(new B.bv())
d2.af(q,c7.$1(A.et))
if(c6){f=Math.sin(d3.y*0.3)
d1=new B.aF(d1,A.ai,c5,c5,B.a([],t))
d1.D(new B.aZ(0,-19))
t=f*34
d1.D(new B.aq(t,-26))
d1.D(new B.aq(t,-12))
d1.D(new B.bv())
d2.af(d1,c7.$1(A.dF.j(0.45)))
d1=c7.$1(A.dF.j(0.35))
d1.y=A.H1
d2.N(D.ek9,14,d1)}return!0
case"discoball":d2.ah(D.ekb,Q.aL4,c8.$2(A.di,1.4))
d2.N(A.H,16,d0.$3(D.f5h,A.aQ,A.an))
for(v=0;v<8;++v){d1=-12+v*3.4
d2.ah(new B.p(-16,d1),new B.p(16,d1),c8.$2(A.dq,0.7))}for(v=0;v<5;++v){f=d3.y*0.5+v*1.26
d2.ah(new B.p(Math.cos(f)*16*0.3,Math.sin(f)*16*0.3),new B.p(Math.cos(f)*16,0),c8.$2(A.dq,0.7))}if(c6)for(d1=d4*2,t=d4*9,v=0;v<10;++v){f=d1+v*0.63
e=22+A.o.F(v,3)*6
d2.N(new B.p(Math.cos(f)*e,Math.sin(f)*e*0.8),1.8,c7.$1(D.djH[A.o.F(v,4)].j(0.5+0.5*Math.sin(t+v))))}return!0
case"robot":d2.am(c9.$5(-14,-4,28,24,5),d0.$3(D.f5e,A.cu,A.an))
d2.am(c9.$5(-12,-26,24,20,5),d0.$3(D.f57,A.aO,A.bM))
d2.ah(H.aL6,D.ekd,c8.$2(A.bv,1.6))
d2.N(D.eke,2.2,c7.$1(c6?A.az:A.bv))
d=c6&&A.j.F(d4*0.8,1)>0.08
for(p=0;p<2;++p){o=F.a5P[p]
if(c6)d1=d?A.bc:A.eT
else d1=A.cs
d2.N(new B.p(o,-17),3.2,c7.$1(d1))}d1=d2.c
J.br(d1.save())
d1.translate(14,0)
d2.hW(0,c6?-0.6+Math.sin(d4*5)*0.6:0.3)
d2.ah(A.H,D.a86,c8.$2(A.bM,4))
d1.restore()
d2.ah(D.enG,D.eo3,c8.$2(A.bM,4))
d2.aq(D.f65,c7.$1(c6?A.bc.j(0.7):A.aM))
return!0
case"toaster":a0=c6?Math.min(1,d3.ax/3):0
for(d1=-4-a0*14,p=0;p<2;++p){t=c9.$5(D.aBZ[p]+1,d1,10,14,2)
q=B.ar(A.bN,A.d2,a0)
q.toString
d2.am(t,c7.$1(q))}d2.am(c9.$5(-24,-6,48,26,8),d0.$3(D.f5z,A.bP,A.bo))
for(p=0;p<2;++p){o=D.aBZ[p]
d1=c9.$5(o,-5,12,5,2)
d2.am(d1,c7.$1(c6?A.fw:A.au))
if(c6){d1=c9.$5(o,-5,12,5,2)
t=c7.$1(A.cJ.j(0.5))
t.y=N.op
d2.am(d1,t)}}d2.ah(D.el5,D.elq,c8.$2(A.au,3))
return!0
case"ledstrip":d2.am(c9.$5(-34,-4,68,10,4),c7.$1(A.cs))
for(d1=d4*90,v=0;v<9;++v){a1=A.j.F(d1+v*40,360)
l=c6?new Al.pb(1,a1,0.8,1).k_():A.ed
if(c6){t=c7.$1(l.j(0.45))
t.y=N.op
d2.N(new B.p(-30+v*7.5,1),7,t)}d2.N(new B.p(-30+v*7.5,1),2.6,c7.$1(l))}d2.am(c9.$5(-40,-2,6,6,1),c7.$1(A.di))
return!0
case"pump":d2.am(c9.$5(-16,-2,32,22,6),d0.$3(D.f5n,A.cy,A.FQ))
d2.N(D.eob,8,c7.$1(A.rw))
d1=d2.c
J.br(d1.save())
d1.translate(-2,9)
d2.hW(0,d3.y)
for(v=0;v<3;++v){t=v*2.09
d2.ah(A.H,new B.p(Math.cos(t)*7,Math.sin(t)*7),c8.$2(A.fE,2.4))}d1.restore()
d1=new B.aF($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.D(new B.aZ(16,6))
d1.D(new B.aq(26,6))
d1.D(new B.aq(26,-20))
d1.D(new B.aq(10,-20))
d2.af(d1,c8.$2(A.bM,4))
if(c6){for(d1=d4*0.9,v=0;v<5;++v)d2.N(new B.p(26,6-A.j.F(d1+v*0.2,1)*26),2.2,c7.$1(A.hC))
d2.N(D.emk,3.2,c7.$1(A.hC.j(0.7)))}return!0
case"hairdryer":d1=d2.c
J.br(d1.save())
d2.hW(0,-0.15)
d2.am(c9.$5(-26,-14,40,22,10),d0.$3(D.f5B,A.hT,A.u2))
d2.am(c9.$5(14,-10,12,14,3),c7.$1(A.cs))
d2.am(c9.$5(-10,6,12,22,4),c7.$1(A.ed))
d1.restore()
if(c6){for(d1=d4*3,v=0;v<4;++v){u=A.j.F(d1+v*0.25,1)
t=u*18
q=-10+v*5
d2.ah(new B.p(24+t,q),new B.p(32+t,q),c8.$2(A.c.j(1-u),1.8))}d1=c7.$1(A.cJ.j(0.4))
d1.y=N.op
d2.N(D.ekZ,8,d1)}return!0
case"headphones":d2.cM(B.bB(A.dG,44,44),3.141592653589793,3.141592653589793,!1,c8.$2(A.bv,4))
for(d1=d4*12,p=0;p<2;++p){o=F.Sp[p]
t=o-7
d2.am(c9.$5(t,0,14,20,6),d0.$3(new B.a3(t,0,t+14,20),A.br,A.of))
if(c6)for(t=o<0,v=1;v<=2;++v){q=B.bX(new B.p(o,10),10+v*5+A.j.F(d1,5))
h=t?2.2:-0.9
d2.cM(q,h,1.6,!1,c8.$2(A.eK.j(0.9-v*0.3),1.6))}}if(c6)d5.$5(d2,"\u266a",new B.p(-4,-8-A.j.F(d4*14,8)),A.kM,12)
return!0
case"smartwatch":d2.am(c9.$5(-8,-30,16,14,3),c7.$1(A.cs))
d2.am(c9.$5(-8,14,16,14,3),c7.$1(A.cs))
d2.am(c9.$5(-14,-17,28,32,8),d0.$3(D.f5c,A.di,A.ed))
d2.am(c9.$5(-11,-14,22,26,6),c7.$1(A.dB))
if(c6){a2=new B.V(Date.now(),0,!1)
d5.$5(d2,A.a.b_(A.o.u(B.dg(a2)),2,"0")+":"+A.a.b_(A.o.u(B.fP(a2)),2,"0"),D.ekk,A.b9,9.5)
j=(Math.sin(d4*9)+1)/2
d1=B.ar(A.Fw,A.hi,j)
d1.toString
d5.$5(d2,"\u2665",new B.p(-8,1),d1,8+j*2)
d5.$5(d2,""+(70+A.o.F(A.j.bh(d4*2),6)),A.dG,A.c,7)}return!0
case"tablet":d2.am(c9.$5(-30,-22,60,44,6),c7.$1(M.ns))
d2.am(c9.$5(-30,-22,60,44,6),c8.$2(A.bM,1.6))
a3=c9.$5(-27,-19,54,38,3)
if(c6){d1=d2.c
J.br(d1.save())
d1.clipRRect(B.om(a3),$.nL(),!0)
d1.translate(-27,-19)
L.LV(d2,D.fcx,d4,c5)
d1.restore()}else d2.am(a3,c7.$1(D.w4))
return!0
case"buck":a4=c9.$5(-26,-22,52,42,5)
d2.am(a4,d0.$3(new B.a3(a4.a,a4.b,a4.c,a4.d),A.dI,A.d5))
d2.am(a4,c8.$2(A.aV,1.2))
d2.N(D.aLD,9,c7.$1(A.au))
d2.N(D.aLD,6,c8.$2(A.d2,2))
d2.am(c9.$5(4,-2,14,10,2),c7.$1(A.au))
d2.am(c9.$5(-22,-19,44,12,2),c7.$1(A.dB))
d1=A.j.ad(d3.db,1)
t=A.j.ad(c6?d3.dx:d3.e,1)
q=c6?A.b9:A.an
d5.$5(d2,d1+"\u2192"+t+"V",D.emu,q,8.2)
d2.N(D.ekO,2.4,c7.$1(c6?A.bg:A.aM))
d5.$5(d2,"IN",D.eo4,A.ab,6)
d5.$5(d2,"OUT",D.emc,A.ab,6)
return!0
case"regulator":a5=c6?A.j.E(d3.cy*Math.abs(d3.fr)/2.5,0,1):0
d1=c9.$5(-14,-26,28,22,3)
t=B.ar(A.bM,A.az,a5)
t.toString
d2.am(d1,c7.$1(t))
d2.N(H.a84,3,c7.$1(A.aM))
d2.am(c9.$5(-12,-4,24,18,3),d0.$3(D.f58,A.ed,A.i1))
d5.$5(d2,"7805",D.a8f,A.ab,8)
for(p=0;p<3;++p){d1=D.dq9[p]-1
d2.aq(new B.a3(d1,14,d1+2,22),c7.$1(A.e6))}if(a5>0.2)for(d1=d4*0.9,v=0;v<3;++v){u=A.j.F(d1+v*0.33,1)
d2.N(new B.p(-6+v*6,-28-u*12),2+u*2,c7.$1(A.c.j(0.5*(1-u))))}d5.$5(d2,"5V",D.eoD,A.bn,9)
return!0
case"diode":d2.ah(D.aLH,D.aLp,c8.$2(A.e6,2.4))
d2.am(c9.$5(-14,-7,28,14,6),c7.$1(A.ax.j(0.85)))
d2.aq(D.f4S,c7.$1(A.bn))
if(c6){d1=c9.$5(-14,-7,28,14,6)
t=c7.$1(A.dF.j(0.4))
t.y=A.kW
d2.am(d1,t)}d1=new B.aF($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.D(new B.aZ(-8,-4))
d1.D(new B.aq(-8,4))
d1.D(new B.aq(-1,0))
d1.D(new B.bv())
d2.af(d1,c7.$1(A.aT))
d5.$5(d2,"one way",D.enT,A.aD,8)
return!0
case"ldr":d2.ah(D.aLH,D.a8f,c8.$2(A.e6,2.4))
d2.ah(D.aLv,D.aLp,c8.$2(A.e6,2.4))
d2.N(A.H,12,c7.$1(A.d2))
d2.N(A.H,12,c8.$2(A.rB,1.6))
d1=$.S()
t=B.a([],x.v)
a6=new B.aF(d1.r,A.ai,c5,c5,t)
a6.D(new B.aZ(-8,-6))
for(v=0;v<5;++v){d1=(v&1)===0?8:-8
d1=new B.aq(d1,-6+v*3)
t.push(d1)
q=a6.f
if(q!=null)d1.aj(q)
a6.aa()}d2.af(a6,c8.$2(A.bN,1.4))
d1=B.ar(A.bv,A.dF,d3.f)
d1.toString
d5.$5(d2,"\u2600",new B.p(-6,-26),d1,14)
d5.$5(d2,""+A.j.V(20+980*(1-d3.f))+"\u03a9",D.enH,A.ab,8.5)
return!0
case"lgtv":case"sonytv":case"appletv":case"bangtv":switch(d1){case"lgtv":t=A.em
break
case"sonytv":t=A.rr
break
case"appletv":t=A.e6
break
default:t=F.Fz
break}a7=d1==="lgtv"||d1==="appletv"
d2.am(c9.$5(-36,-24,72,a7?42:44,6),c7.$1(t))
t=a7?-35:-33
q=a7?-23:-21
h=a7?70:66
a3=c9.$5(t,q,h,a7?40:38,3)
t=a3.a
q=a3.b
if(c6){h=d2.c
J.br(h.save())
h.clipRRect(B.om(a3),$.nL(),!0)
h.translate(t,q)
L.hfs(d2,new B.av(a3.c-t,a3.d-q),d3.at,d4,d3.ax,-1)
h.restore()
d2.N(D.elt,1.6,c7.$1(A.b9))}else{d2.am(a3,c7.$1(D.w4))
h=new B.aF($.S().r,A.ai,c5,c5,B.a([],x.v))
h.D(new B.aZ(t,q))
h.D(new B.aq(t+24,q))
h.D(new B.aq(t,q+22))
h.D(new B.bv())
d2.af(h,c7.$1(A.c.j(0.05)))}switch(d1){case"lgtv":d2.am(c9.$5(-22,19,44,3,1.5),c7.$1(A.di))
break
case"sonytv":for(d1=x.v,p=0;p<2;++p){o=M.hL[p]
t=$.S()
q=B.a([],d1)
t=new B.aF(t.r,A.ai,c5,c5,q)
q.push(new B.aZ(o*30,20))
t.aa()
h=new B.aq(o*22,20)
q.push(h)
a8=t.f
if(a8!=null)h.aj(a8)
t.aa()
h=new B.aq(o*26,26)
q.push(h)
a8=t.f
if(a8!=null)h.aj(a8)
t.aa()
h=new B.bv()
q.push(h)
q=t.f
if(q!=null)h.aj(q)
t.aa()
d2.af(t,c7.$1(A.di))}d5.$5(d2,"SONY",D.en7,A.bP,5.5)
break
case"appletv":d1=new B.aF($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.D(new B.aZ(-8,18))
d1.D(new B.aq(8,18))
d1.D(new B.aq(12,25))
d1.D(new B.aq(-12,25))
d1.D(new B.bv())
d2.af(d1,c7.$1(D.Z0))
d5.$5(d2,"Apple TV",D.emv,A.bv,4.8)
break
default:d2.am(c9.$5(-34,19,68,7,3),c7.$1(D.boZ))
for(v=0;v<14;++v){d1=-32+v*4.9
d2.ah(new B.p(d1,20),new B.p(d1,25),c8.$2(A.dq,0.6))}d5.$5(d2,"B&O",D.eoy,F.tZ,5)}return!0
case"iphonefold":case"galaxy":case"zfold":case"pixel":case"xiaomi":case"huawei":case"oppo":case"honor":case"vivo":a9=D.mr.h(0,d1)
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
d2.am(w,d0.$3(new B.a3(h,a8,b3,b4),b6,b5))
a3=c9.$5(t+2,q,b1-4,b2-4,3.5)
if(c6){t=d2.c
J.br(t.save())
t.clipRRect(B.om(a3),$.nL(),!0)
q=a3.a
h=a3.b
t.translate(q,h)
L.LV(d2,new B.av(a3.c-q,a3.d-h),d4,c5)
t.restore()}else d2.am(a3,c7.$1(D.w4))
if(b0){t=a3.b
q=a3.d
d2.ah(new B.p(0,t),new B.p(0,q),c8.$2(A.w.j(c6?0.45:0.7),0.9))}if(d1==="iphonefold"||d1==="huawei")d2.am(c9.$5(-4,a3.b+1.2,8,2.6,1.3),c7.$1(A.w))
else{d1=b0?b1/2-7:0
d2.N(new B.p(d1,a3.b+3),1.3,c7.$1(A.w))}return!0
case"ereader":d2.am(c9.$5(-17,-28,34,52,4),c7.$1(A.ed))
d2.am(c9.$5(-14.5,-25.5,29,45,2),c7.$1(A.bP))
if(c6){d5.$5(d2,"NGMY",D.eoJ,A.au,9)
for(v=0;v<9;++v){d1=-9+v*3.6
t=A.o.F(v,4)===3?14:22
d2.aq(new B.a3(-11,d1,-11+t,d1+1.4),c7.$1(A.bo))}d2.N(A.a82,1.6,c7.$1(A.au))}return!0
case"laptop":d2.am(c9.$5(-30,-28,60,42,4),d0.$3(D.f5K,A.cu,A.bo))
b7=c9.$5(-27,-25,54,34,2)
if(c6){d1=d2.c
J.br(d1.save())
d1.clipRRect(B.om(b7),$.nL(),!0)
t=b7.a
q=b7.b
d1.translate(t,q)
L.LV(d2,new B.av(b7.c-t,b7.d-q),d4,c5)
d1.restore()}else d2.am(b7,c7.$1(D.w4))
d1=new B.aF($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.D(new B.aZ(-38,16))
d1.D(new B.aq(38,16))
d1.D(new B.aq(34,21))
d1.D(new B.aq(-34,21))
d1.D(new B.bv())
d2.af(d1,c7.$1(D.Z0))
d2.am(c9.$5(-7,16,14,2,1),c7.$1(A.bo))
return!0
case"imac":d2.am(c9.$5(-32,-28,64,46,5),d0.$3(D.f5O,A.bO,A.cu))
b8=c9.$5(-29,-25,58,33,2)
if(c6){d1=d2.c
J.br(d1.save())
d1.clipRRect(B.om(b8),$.nL(),!0)
t=b8.a
q=b8.b
d1.translate(t,q)
L.LV(d2,new B.av(b8.c-t,b8.d-q),d4,c5)
d1.restore()}else d2.am(b8,c7.$1(D.w4))
d2.N(D.aL_,2,c7.$1(A.bM))
d1=new B.aF($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.D(new B.aZ(-6,18))
d1.D(new B.aq(6,18))
d1.D(new B.aq(10,26))
d1.D(new B.aq(-10,26))
d1.D(new B.bv())
d2.af(d1,c7.$1(D.Z0))
return!0
case"monitor":d2.am(c9.$5(-34,-28,68,40,3),c7.$1(A.em))
b9=c9.$5(-32,-26,64,36,2)
if(c6){d1=d2.c
J.br(d1.save())
d1.clipRRect(B.om(b9),$.nL(),!0)
t=b9.a
q=b9.b
d1.translate(t,q)
L.LV(d2,new B.av(b9.c-t,b9.d-q),d4,c5)
d1.restore()}else d2.am(b9,c7.$1(D.w4))
d2.aq(D.f5V,c7.$1(A.bo))
d2.am(c9.$5(-14,22,28,3.5,1.5),c7.$1(A.di))
return!0
case"projector":if(c6){d1=new B.aF($.S().r,A.ai,c5,c5,B.a([],x.v))
d1.D(new B.aZ(14,4))
d1.D(new B.aq(-32,-42))
d1.D(new B.aq(34,-42))
d1.D(new B.bv())
d2.af(d1,c7.$1(A.dF.j(0.16)))
c0=c9.$5(-32,-46,66,26,2)
d1=d2.c
J.br(d1.save())
d1.clipRRect(B.om(c0),$.nL(),!0)
t=c0.a
q=c0.b
d1.translate(t,q)
L.LV(d2,new B.av(c0.c-t,c0.d-q),d4,c5)
d1.restore()}d2.am(c9.$5(-26,-4,52,24,6),d0.$3(D.f5C,A.iB,A.di))
d2.N(D.aLb,7,c7.$1(A.au))
d2.N(D.aLb,4,c7.$1(c6?A.dF:A.cs))
for(v=0;v<4;++v){d1=-20+v*4
d2.ah(new B.p(d1,2),new B.p(d1,14),c8.$2(A.dq,1))}return!0
case"carscreen":d2.am(c9.$5(-34,-10,68,32,12),c7.$1(A.au))
c1=c9.$5(-30,-20,60,28,8)
d2.am(c1,c7.$1(M.ns))
d2.am(c1,c8.$2(A.bv,1.2))
if(c6){c2=new B.aF($.S().r,A.ai,c5,c5,B.a([],x.v))
c2.D(new B.aZ(-26,4))
c2.D(new B.c8(-10,-14+Math.sin(d4)*3,6,-6))
c2.D(new B.aq(22,-16))
d2.af(c2,c8.$2(A.aJ,2.2))
d1=A.j.F(d4*6,48)
d2.N(new B.p(-26+d1,4-d1*0.1),2.4,c7.$1(A.b9))
d5.$5(d2,""+(88+A.o.F(A.j.bh(d4*2),5)),H.aLu,A.c,10)
d5.$5(d2,"km/h",D.emi,A.aD,5)}return!0
case"vision":c3=c9.$5(-32,-14,64,28,13)
d2.am(c3,d0.$3(new B.a3(c3.a,c3.b,c3.c,c3.d),A.di,A.ed))
c4=c9.$5(-29,-11,58,22,10)
if(c6){d1=d2.c
J.br(d1.save())
d1.clipRRect(B.om(c4),$.nL(),!0)
t=c4.a
q=c4.b
d1.translate(t,q)
L.LV(d2,new B.av(c4.c-t,c4.d-q),d4,c5)
d1.restore()
d1=c7.$1(A.br.j(0.2))
d1.y=A.mf
d2.N(A.H,26,d1)}else d2.am(c4,c7.$1(A.O))
d2.ah(D.eoi,D.eon,c8.$2(A.bo,4))
d2.ah(D.elv,D.elL,c8.$2(A.bo,4))
return!0}return!1},
fUz:function fUz(){},
fUB:function fUB(){},
fUC:function fUC(){},
fUA:function fUA(){},
hik(d,e,f,g){return new C.ajH(d,g,f,e)},
Gi(d,e,f){return new C.bcJ(d,e,f)},
ajH:function ajH(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
ajI:function ajI(d,e,f,g,h,i,j,k,l,m){var _=this
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
_.m5$=i
_.f9$=j
_.h7$=k
_.bx$=l
_.a9$=m
_.c=_.a=null},
bJp:function bJp(d,e){this.a=d
this.b=e},
bJq:function bJq(d){this.a=d},
bJo:function bJo(d){this.a=d},
bJr:function bJr(){},
bJs:function bJs(d){this.a=d},
bJt:function bJt(d,e,f){this.a=d
this.b=e
this.c=f},
bJn:function bJn(d,e){this.a=d
this.b=e},
bJk:function bJk(d,e){this.a=d
this.b=e},
bJl:function bJl(d,e,f){this.a=d
this.b=e
this.c=f},
bJe:function bJe(d,e){this.a=d
this.b=e},
bJf:function bJf(){},
bJm:function bJm(d,e,f){this.a=d
this.b=e
this.c=f},
bJj:function bJj(d,e){this.a=d
this.b=e},
bJg:function bJg(d,e){this.a=d
this.b=e},
bJh:function bJh(d,e){this.a=d
this.b=e},
bJi:function bJi(d){this.a=d},
bJI:function bJI(d){this.a=d},
bJJ:function bJJ(){},
bIS:function bIS(){},
bJK:function bJK(d,e){this.a=d
this.b=e},
bJH:function bJH(d,e,f){this.a=d
this.b=e
this.c=f},
bJC:function bJC(d){this.a=d},
bJz:function bJz(d,e,f){this.a=d
this.b=e
this.c=f},
bJA:function bJA(d,e){this.a=d
this.b=e},
bJD:function bJD(d){this.a=d},
bJx:function bJx(d,e){this.a=d
this.b=e},
bJy:function bJy(d,e){this.a=d
this.b=e},
bJB:function bJB(d){this.a=d},
bJE:function bJE(d){this.a=d},
bJv:function bJv(d,e){this.a=d
this.b=e},
bJw:function bJw(d,e){this.a=d
this.b=e},
bJF:function bJF(d){this.a=d},
bJu:function bJu(d){this.a=d},
bJG:function bJG(d){this.a=d},
bIT:function bIT(d,e){this.a=d
this.b=e},
bJb:function bJb(d,e){this.a=d
this.b=e},
bJd:function bJd(d,e){this.a=d
this.b=e},
bJc:function bJc(d,e){this.a=d
this.b=e},
bIZ:function bIZ(d,e){this.a=d
this.b=e},
bJ_:function bJ_(d){this.a=d},
bIY:function bIY(d){this.a=d},
bJ0:function bJ0(d,e,f){this.a=d
this.b=e
this.c=f},
bIX:function bIX(d,e){this.a=d
this.b=e},
bJ3:function bJ3(d,e){this.a=d
this.b=e},
bJ4:function bJ4(d,e){this.a=d
this.b=e},
bJ5:function bJ5(d,e){this.a=d
this.b=e},
bJ6:function bJ6(d,e,f){this.a=d
this.b=e
this.c=f},
bIW:function bIW(d,e){this.a=d
this.b=e},
bJ7:function bJ7(d,e,f){this.a=d
this.b=e
this.c=f},
bIV:function bIV(d,e){this.a=d
this.b=e},
bJ8:function bJ8(d,e,f){this.a=d
this.b=e
this.c=f},
bIU:function bIU(d,e){this.a=d
this.b=e},
bJ9:function bJ9(d){this.a=d},
bJa:function bJa(d){this.a=d},
bJ1:function bJ1(d){this.a=d},
bJ2:function bJ2(d){this.a=d},
bcJ:function bcJ(d,e,f){this.a=d
this.b=e
this.c=f},
frd:function frd(){},
fre:function fre(){},
frf:function frf(){},
fr0:function fr0(){},
frg:function frg(){},
fr_:function fr_(){},
frh:function frh(){},
fr4:function fr4(){},
fqZ:function fqZ(){},
fr5:function fr5(){},
fqY:function fqY(){},
fr6:function fr6(){},
fqX:function fqX(){},
fr7:function fr7(){},
fqV:function fqV(){},
fqW:function fqW(){},
fr8:function fr8(){},
fqT:function fqT(){},
fqU:function fqU(){},
fr9:function fr9(){},
fqS:function fqS(){},
W6:function W6(d){this.a=d},
aEQ:function aEQ(d,e,f){var _=this
_.d=d
_.e=e
_.f=0
_.r=f
_.z=_.y=_.x=_.w=0
_.Q=""
_.as=!1
_.c=_.a=null},
e_Z:function e_Z(d,e){this.a=d
this.b=e},
e07:function e07(d){this.a=d},
e08:function e08(){},
e09:function e09(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
e0a:function e0a(){},
e_Y:function e_Y(d){this.a=d},
e_X:function e_X(d,e,f){this.a=d
this.b=e
this.c=f},
e_W:function e_W(d,e){this.a=d
this.b=e},
e_U:function e_U(d){this.a=d},
e_V:function e_V(){},
e06:function e06(d){this.a=d},
e05:function e05(d){this.a=d},
e03:function e03(d,e){this.a=d
this.b=e},
e01:function e01(d){this.a=d},
e02:function e02(){},
e04:function e04(d,e,f){this.a=d
this.b=e
this.c=f},
e0_:function e0_(d,e){this.a=d
this.b=e},
e00:function e00(){},
e0c:function e0c(d){this.a=d},
e0d:function e0d(d,e){this.a=d
this.b=e},
e0b:function e0b(){},
e0e:function e0e(d,e){this.a=d
this.b=e},
e0f:function e0f(d){this.a=d},
e0g:function e0g(d){this.a=d},
ayT:function ayT(d,e){this.c=d
this.a=e},
baS:function baS(d,e){var _=this
_.d=$
_.bx$=d
_.a9$=e
_.c=_.a=null},
cKH:function cKH(d){this.a=d},
baR:function baR(d,e){this.b=d
this.a=e},
cKG:function cKG(d){this.a=d},
azc:function azc(){},
azd:function azd(){},
aLj:function aLj(){},
bzp:function bzp(){},
ioD(b9,c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=null,b7=c0.fx>0&&!c0.x,b8=c0.b
switch(b8){case"voltmeter":case"ammeter":w=b8==="voltmeter"
v=B.bX(A.vj,23)
$.S()
b8=B.J()
b8.r=A.au.gp(0)
b9.N(A.vj,25,b8)
b8=B.J()
b8.sav(D.exq.aJ(0,v))
b9.N(A.vj,23,b8)
for(u=0;u<=10;++u){t=2.5132741228718345+u*3.141592653589793*1.4/10
b8=Math.cos(t)
s=Math.sin(t)
r=Math.cos(t)
q=Math.sin(t)
p=new B.ap(A.S,A.N,A.U,A.V,A.T)
p.r=A.bn.gp(0)
p.c=A.o.F(u,5)===0?1.8:1
b9.ah(new B.p(b8*17,s*17-2),new B.p(r*21,q*21-2),p)}o=w?Math.abs(c0.dy):Math.abs(c0.fr)
t=2.5132741228718345+A.j.E(o/(w?15:1),0,1)*3.141592653589793*1.4
b8=Math.cos(t)
s=Math.sin(t)
r=B.J()
r.r=A.bD.gp(0)
r.c=2
r.d=A.bB
b9.ah(A.vj,new B.p(b8*18,s*18-2),r)
r=B.J()
r.r=A.bn.gp(0)
b9.N(A.vj,3,r)
c2.$5(b9,w?"V":"A",D.eoq,A.bn,12)
c2.$5(b9,w?A.j.ad(o,1)+" V":""+A.j.V(o*1000)+" mA",D.enN,A.au,9.5)
return!0
case"fan":b8=B.bn(D.f54,A.hw)
$.S()
s=B.J()
s.r=A.bv.gp(0)
b9.am(b8,s)
s=B.J()
s.r=A.an.gp(0)
b9.aq(D.f5W,s)
s=B.J()
s.r=A.O.j(0.6).gp(0)
b9.N(H.vk,22,s)
for(b8=b9.c,u=0;u<4;++u){J.br(b8.save())
b8.translate(0,-6)
b8.rotate((c0.y+u*3.141592653589793/2)*180/3.141592653589793,0,0)
s=B.bB(A.aL3,18,10)
r=new B.ap(A.S,A.N,A.U,A.V,A.T)
r.r=A.hC.j(b7&&c0.fx>0.5?0.55:0.95).gp(0)
b9.bY(s,r)
b8.restore()}b8=B.J()
b8.r=A.bp.gp(0)
b9.N(H.vk,4,b8)
b8=B.J()
b8.b=A.aa
b8.c=2
b8.r=A.cu.gp(0)
b9.N(H.vk,22,b8)
b8=B.J()
b8.b=A.aa
b8.c=0.8
b8.r=A.jV.gp(0)
b9.N(H.vk,14,b8)
return!0
case"speaker":n=B.bn(D.aRg,A.qZ)
$.S()
b8=B.J()
b8.sav(D.asD.aJ(0,new B.a3(n.a,n.b,n.c,n.d)))
b9.am(n,b8)
m=b7?Math.sin(c1*40)*1.6:0
b8=B.J()
b8.sav(D.exM.aJ(0,B.bX(A.cA,15)))
b9.N(A.cA,14+m,b8)
b8=B.J()
b8.r=A.di.gp(0)
b9.N(A.cA,5,b8)
b8=B.J()
b8.r=A.bo.gp(0)
b9.N(H.a83,5+m*0.4,b8)
if(b7)for(b8=c1*18,u=1;u<=3;++u){s=B.bX(D.el4,6+u*6+A.j.F(b8,6))
r=new B.ap(A.S,A.N,A.U,A.V,A.T)
r.b=A.aa
r.c=1.8
r.r=A.c4.j(0.9-u*0.2).gp(0)
b9.cM(s,-0.8,1.6,!1,r)}return!0
case"clock":l=B.bn(D.f5N,A.qZ)
$.S()
b8=B.J()
b8.sav(D.c77.aJ(0,new B.a3(l.a,l.b,l.c,l.d)))
b9.am(l,b8)
b8=B.bn(D.aRi,A.iw)
s=B.J()
s.r=A.i1.gp(0)
b9.am(b8,s)
if(b7){k=new B.V(Date.now(),0,!1)
j=B.FC(k)<500?":":" "
i=A.a.b_(A.o.u(B.dg(k)),2,"0")
h=A.a.b_(A.o.u(B.fP(k)),2,"0")
b8=B.J()
b8.r=A.b9.j(0.12).gp(0)
b9.aq(D.aRi,b8)
c2.$5(b9,i+j+h,D.eo8,A.b9,21)}b8=B.J()
b8.r=A.cu.gp(0)
b9.N(D.eo6,2.4,b8)
b8=B.J()
b8.r=A.cu.gp(0)
b9.N(D.el9,2.4,b8)
return!0
case"calculator":l=B.bn(D.f5s,A.hP)
$.S()
b8=B.J()
b8.sav(D.c6S.aJ(0,new B.a3(l.a,l.b,l.c,l.d)))
b9.am(l,b8)
b8=B.bn(D.f5l,A.hv)
s=B.J()
s.r=(b7?A.Zc:D.brj).gp(0)
b9.am(b8,s)
if(b7)c2.$5(b9,"3.14159",D.enM,A.XW,10.5)
for(g=0;g<4;++g)for(b8=-6+g*8,s=b8+6,f=0;f<4;++f){r=-15+f*8
r=B.bn(new B.a3(r,b8,r+6,s),A.Uj)
$.S()
q=new B.ap(A.S,A.N,A.U,A.V,A.T)
q.r=(f===3?A.ch:A.bP).gp(0)
b9.am(r,q)}return!0
case"phone":l=B.bn(D.f5g,A.hP)
$.S()
b8=B.J()
b8.r=M.ns.gp(0)
b9.am(l,b8)
b8=B.J()
b8.b=A.aa
b8.c=1.9
b8.r=D.ajT.gp(0)
b9.am(l,b8)
e=B.bn(D.f56,A.hw)
if(b7){b8=B.J()
b8.sav(D.c8p.aJ(0,new B.a3(e.a,e.b,e.c,e.d)))
b9.am(e,b8)
b8=b9.c
J.br(b8.save())
b8.clipRRect(B.om(e),$.nL(),!0)
b8.translate(-12,-25)
L.LV(b9,D.fc9,c1,b6)
b8.restore()
d=A.j.F(c1*0.12,1)
b8=B.bn(D.f53,A.hv)
s=B.J()
s.r=A.aT.gp(0)
b9.am(b8,s)
s=B.J()
s.r=A.b9.gp(0)
b9.aq(new B.a3(-10,14.5,-10+20*d,16.9),s)
c2.$5(b9,"\u26a1"+A.j.V(d*100)+"%",D.emO,A.c,6)}else{b8=B.J()
b8.r=D.w4.gp(0)
b9.am(e,b8)}b8=B.bn(D.f6b,D.exU)
s=B.J()
s.r=A.w.gp(0)
b9.am(b8,s)
return!0
case"router":l=B.bn(D.f5M,A.n6)
$.S()
b8=B.J()
b8.sav(D.c7o.aJ(0,new B.a3(l.a,l.b,l.c,l.d)))
b9.am(l,b8)
for(a0=0;a0<2;++a0){a1=F.Sp[a0]
b8=a1<0?-4:4
s=new B.ap(A.S,A.N,A.U,A.V,A.T)
s.r=A.cs.gp(0)
s.c=4
s.d=A.bB
b9.ah(new B.p(a1,-4),new B.p(a1+b8,-28),s)}for(u=0;u<4;++u){if(b7)a2=A.o.F(A.j.bh(c1*(3+u*1.3)),2)===0||u===0
else a2=!1
b8=new B.ap(A.S,A.N,A.U,A.V,A.T)
b8.r=(a2?A.bg:A.aM).gp(0)
b9.N(new B.p(-15+u*10,11),2.6,b8)}if(b7)for(b8=c1*10,u=1;u<=3;++u){s=B.bX(H.vk,8+u*6+A.j.F(b8,6))
r=new B.ap(A.S,A.N,A.U,A.V,A.T)
r.b=A.aa
r.c=1.8
r.r=A.hn.j(0.9-u*0.2).gp(0)
b9.cM(s,-2.3,1.5,!1,r)}return!0
case"siren":a3=b7?(Math.sin(c1*14)+1)/2:0
b8=B.bn(D.f5r,A.hw)
s=$.S()
r=B.J()
r.r=A.ed.gp(0)
b9.am(b8,r)
if(b7){b8=B.J()
b8.r=A.az.j(0.5*a3).gp(0)
b8.y=A.wm
b9.N(A.vj,34,b8)}a4=new B.aF(s.r,A.ai,b6,b6,B.a([],x.v))
a4.D(new B.aZ(-16,12))
a4.D(new B.aq(-16,-2))
a4.D(new B.c8(0,-30,16,-2))
a4.D(new B.aq(16,12))
a4.D(new B.bv())
b8=B.J()
b8.r=B.ar(A.et,D.big,a3).gp(0)
b9.af(a4,b8)
b8=B.J()
b8.b=A.aa
b8.c=1.4
b8.r=A.bV.gp(0)
b9.af(a4,b8)
if(b7){b8=b9.c
J.br(b8.save())
b8.translate(0,-2)
b9.hW(0,c1*7)
s=B.J()
s.r=A.c.j(0.7).gp(0)
s.c=3
b9.ah(A.H,H.a83,s)
b8.restore()}return!0
case"toycar":a5=b7?Math.sin(c1*30)*0.8:0
b8=b9.c
J.br(b8.save())
b8.translate(0,a5)
s=$.S().r
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
l.D(new B.bv())
q=B.J()
q.sav(D.c5t.aJ(0,D.f5F))
b9.af(l,q)
q=new B.aF(s,A.ai,b6,b6,B.a([],r))
q.D(new B.aZ(-8,-4))
q.D(new B.aq(-4,-13))
q.D(new B.aq(4,-13))
q.D(new B.aq(4,-4))
q.D(new B.bv())
p=B.J()
p.r=A.fE.gp(0)
b9.af(q,p)
r=new B.aF(s,A.ai,b6,b6,B.a([],r))
r.D(new B.aZ(8,-4))
r.D(new B.aq(8,-13))
r.D(new B.aq(11,-13))
r.D(new B.aq(15,-4))
r.D(new B.bv())
s=B.J()
s.r=A.fE.gp(0)
b9.af(r,s)
for(a0=0;a0<2;++a0){a1=F.aC_[a0]
s=new B.ap(A.S,A.N,A.U,A.V,A.T)
s.r=A.au.gp(0)
b9.N(new B.p(a1,10),7.5,s)
J.br(b8.save())
b8.translate(a1,10)
b8.rotate(c0.y*1.4*180/3.141592653589793,0,0)
for(u=0;u<4;++u){s=u*3.141592653589793/2
r=Math.cos(s)
s=Math.sin(s)
q=new B.ap(A.S,A.N,A.U,A.V,A.T)
q.r=A.bP.gp(0)
q.c=1.6
b9.ah(A.H,new B.p(r*5.5,s*5.5),q)}b8.restore()}b8.restore()
if(b7)for(b8=c1*40,u=0;u<3;++u){s=A.j.F(b8+u*8,14)
r=-4+u*5
q=new B.ap(A.S,A.N,A.U,A.V,A.T)
q.r=A.aD.gp(0)
q.c=1.6
b9.ah(new B.p(-34-s,r),new B.p(-42-s,r),q)}return!0
case"kettle":b8=$.S().r
s=x.v
l=new B.aF(b8,A.ai,b6,b6,B.a([],s))
l.D(new B.aZ(-18,20))
l.D(new B.aq(-14,-12))
l.D(new B.c8(0,-20,14,-12))
l.D(new B.aq(18,20))
l.D(new B.bv())
r=B.J()
r.sav(D.c6x.aJ(0,D.f5q))
b9.af(l,r)
r=new B.aF(b8,A.ai,b6,b6,B.a([],s))
r.D(new B.aZ(14,-10))
r.D(new B.aq(30,-22))
r.D(new B.aq(32,-18))
r.D(new B.aq(16,-4))
r.D(new B.bv())
q=B.J()
q.r=A.e6.gp(0)
b9.af(r,q)
s=new B.aF(b8,A.ai,b6,b6,B.a([],s))
s.D(new B.aZ(-14,-8))
s.D(new B.c8(-34,-6,-18,12))
b8=B.J()
b8.b=A.aa
b8.c=5
b8.r=A.au.gp(0)
b9.af(s,b8)
b8=B.J()
if(b7){s=B.ar(A.cJ,A.uc,(Math.sin(c1*6)+1)/2)
s.toString}else s=A.ed
b8.r=s.gp(0)
b9.aq(D.f5p,b8)
if(b7){b8=B.J()
b8.r=A.cJ.j(0.3).gp(0)
b8.y=A.mf
b9.N(A.aL1,24,b8)
for(b8=c1*0.9,u=0;u<4;++u){a6=A.j.F(b8+u*0.25,1)
s=Math.sin(a6*9+u)
r=new B.ap(A.S,A.N,A.U,A.V,A.T)
r.r=A.c.j(0.6*(1-a6)).gp(0)
b9.N(new B.p(30+s*4,-26-a6*26),3+a6*5,r)}}b8=B.J()
b8.r=A.au.gp(0)
b9.N(D.ek7,3,b8)
return!0
case"lamp":if(b7){u=A.j.E(0.4+0.12*(Math.abs(c0.dy)-3),0.4,1)
b8=new B.aF($.S().r,A.ai,b6,b6,B.a([],x.v))
b8.D(new B.aZ(-10,-14))
b8.D(new B.aq(-30,24))
b8.D(new B.aq(10,24))
b8.D(new B.aq(8,-14))
b8.D(new B.bv())
s=B.J()
s.r=A.dF.j(0.28*u).gp(0)
b9.af(b8,s)
s=B.J()
s.r=A.dF.j(0.5*u).gp(0)
s.y=U.Oe
b9.N(D.eoc,24,s)}b8=B.bn(D.f64,A.hw)
s=$.S()
r=B.J()
r.r=A.ed.gp(0)
b9.am(b8,r)
r=B.J()
r.r=A.di.gp(0)
r.c=3
r.d=A.bB
b9.ah(D.ekn,D.aLe,r)
r=B.J()
r.r=A.di.gp(0)
r.c=3
r.d=A.bB
b9.ah(D.aLe,D.eod,r)
a7=new B.aF(s.r,A.ai,b6,b6,B.a([],x.v))
a7.D(new B.aZ(-14,-16))
a7.D(new B.aq(6,-26))
a7.D(new B.aq(10,-12))
a7.D(new B.aq(-10,-6))
a7.D(new B.bv())
s=B.J()
s.r=(b7?A.aU:A.kp).gp(0)
b9.af(a7,s)
b8=B.J()
b8.r=(b7?A.c:A.bo).gp(0)
b9.N(D.eog,4,b8)
return!0
case"lights":b8=$.S().r
s=x.v
a8=new B.aF(b8,A.ai,b6,b6,B.a([],s))
a8.D(new B.aZ(-34,-6))
a8.D(new B.c8(0,22,34,-6))
r=B.J()
r.b=A.aa
r.c=2
r.r=A.hl.gp(0)
b9.af(a8,r)
for(r=c1*2.4,u=0;u<5;++u){a9=(u+0.5)/5
q=-34+68*a9
p=-6+4*a9*(1-a9)*4*4.2/1*0.75+0
b0=b7&&A.j.F(r+u*0.7,1.8)<1.1
if(b0){b1=new B.ap(A.S,A.N,A.U,A.V,A.T)
b1.r=D.a4R[u].j(0.6).gp(0)
b1.y=A.H1
b9.N(new B.p(q+0,p+6),12,b1)}b1=B.a([],s)
b2=new B.aF(b8,A.ai,b6,b6,b1)
b1.push(new B.aZ(q-3,p))
b2.aa()
b3=new B.aq(q+3,p)
b1.push(b3)
b4=b2.f
if(b4!=null)b3.aj(b4)
b2.aa()
b3=p+11
b4=new B.aq(q+5,b3)
b1.push(b4)
b5=b2.f
if(b5!=null)b4.aj(b5)
b2.aa()
q=new B.c8(q,p+17,q-5,b3)
b1.push(q)
p=b2.f
if(p!=null)q.aj(p)
b2.aa()
q=new B.bv()
b1.push(q)
p=b2.f
if(p!=null)q.aj(p)
b2.aa()
q=new B.ap(A.S,A.N,A.U,A.V,A.T)
if(b0)p=D.a4R[u]
else{p=B.ar(D.a4R[u],A.w,0.65)
p.toString}q.r=p.gp(0)
b9.af(b2,q)}return!0}return C.ioB(b9,c0,c1,c2)},
fQ:function fQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
hdv(d){var w=D.mr.h(0,d)
return(w==null?null:w.b)===D.Ar},
ipO(d,e,f){return B.a6(d,!1).cd(B.v8(null,!1,!0,!0,new C.fZr(e,f),A.eQ,null,A.ph,new C.fZs(),x.H))},
K5:function K5(d,e){this.a=d
this.b=e},
mo:function mo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fZr:function fZr(d,e){this.a=d
this.b=e},
fZs:function fZs(){},
VQ:function VQ(d,e,f){this.c=d
this.d=e
this.a=f},
blt:function blt(d,e){var _=this
_.d=$
_.e=null
_.bx$=d
_.a9$=e
_.c=_.a=null},
dX8:function dX8(d){this.a=d},
dX7:function dX7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
dX5:function dX5(){},
dX6:function dX6(d){this.a=d},
dX4:function dX4(d){this.a=d},
dX3:function dX3(d,e){this.a=d
this.b=e},
dX2:function dX2(d,e){this.a=d
this.b=e},
dX1:function dX1(d){this.a=d},
dX0:function dX0(d){this.a=d},
dWX:function dWX(d){this.a=d},
dWW:function dWW(d){this.a=d},
dX_:function dX_(d,e,f){this.a=d
this.b=e
this.c=f},
dWZ:function dWZ(d){this.a=d},
dWY:function dWY(d){this.a=d},
bxr:function bxr(d,e,f){this.b=d
this.c=e
this.a=f},
afw:function afw(d,e,f){this.b=d
this.c=e
this.a=f},
aN5:function aN5(){},
a1U(d,e,f,g,h,i){return new C.bwd(d,e,f,g,h,i)},
bwd:function bwd(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
frI:function frI(){},
frJ:function frJ(){},
frK:function frK(){},
frL:function frL(){},
frM:function frM(){},
frN:function frN(){},
frO:function frO(){},
frP:function frP(){},
a9b:function a9b(d){this.a=d},
cm_:function cm_(d){this.a=d},
cm0:function cm0(){},
clZ:function clZ(d,e){this.a=d
this.b=e},
clY:function clY(d){this.a=d},
Xq:function Xq(d){this.a=d},
aGj:function aGj(d,e,f,g,h,i,j,k){var _=this
_.d=d
_.e=e
_.r=_.f=0
_.w=""
_.x=-1
_.h6$=f
_.m5$=g
_.f9$=h
_.h7$=i
_.bx$=j
_.a9$=k
_.c=_.a=null},
eTq:function eTq(d){this.a=d},
eTm:function eTm(d){this.a=d},
eTl:function eTl(d,e){this.a=d
this.b=e},
eTo:function eTo(d,e){this.a=d
this.b=e},
eTn:function eTn(d,e){this.a=d
this.b=e},
eTp:function eTp(d){this.a=d},
bxD:function bxD(d,e,f){this.b=d
this.c=e
this.a=f},
We:function We(d){this.a=d},
blE:function blE(d,e,f,g,h,i){var _=this
_.d=25
_.e=1500
_.f=!1
_.r=0
_.h6$=d
_.m5$=e
_.f9$=f
_.h7$=g
_.bx$=h
_.a9$=i
_.c=_.a=null},
e2Y:function e2Y(){},
e2Z:function e2Z(){},
e2T:function e2T(d,e){this.a=d
this.b=e},
e2V:function e2V(d,e){this.a=d
this.b=e},
e2W:function e2W(d){this.a=d},
e2U:function e2U(d){this.a=d},
e2X:function e2X(d){this.a=d},
bsk:function bsk(d,e,f){this.b=d
this.c=e
this.a=f},
Vr:function Vr(d){this.a=d},
blf:function blf(d,e,f,g,h,i){var _=this
_.d="Calm"
_.e=!1
_.f=0
_.r=-1
_.w=0
_.h6$=d
_.m5$=e
_.f9$=f
_.h7$=g
_.bx$=h
_.a9$=i
_.c=_.a=null},
dOF:function dOF(){},
dOG:function dOG(){},
dOA:function dOA(){},
dOD:function dOD(d,e){this.a=d
this.b=e},
dOC:function dOC(d,e){this.a=d
this.b=e},
dOE:function dOE(d){this.a=d},
dOB:function dOB(d){this.a=d},
aJJ:function aJJ(d,e,f){this.a=d
this.b=e
this.c=f},
W5:function W5(d){this.a=d},
blv:function blv(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=6
_.w=!1
_.x=g
_.c=_.a=null},
e_t:function e_t(d,e){this.a=d
this.b=e},
e_u:function e_u(d){this.a=d},
e_s:function e_s(d,e){this.a=d
this.b=e},
e_v:function e_v(d){this.a=d},
e_r:function e_r(d,e){this.a=d
this.b=e},
e_w:function e_w(d){this.a=d},
e_q:function e_q(d,e){this.a=d
this.b=e},
e_x:function e_x(d,e){this.a=d
this.b=e},
e_p:function e_p(d,e){this.a=d
this.b=e},
e_y:function e_y(d){this.a=d},
e_o:function e_o(d,e){this.a=d
this.b=e},
e_z:function e_z(d){this.a=d},
e_n:function e_n(d){this.a=d},
e_A:function e_A(d){this.a=d},
e_m:function e_m(d){this.a=d},
e_B:function e_B(d){this.a=d},
e_C:function e_C(d){this.a=d},
e_l:function e_l(d){this.a=d},
bnx:function bnx(d,e,f){this.b=d
this.c=e
this.a=f},
WO:function WO(d){this.a=d},
aFD:function aFD(d,e){var _=this
_.d=6
_.e=$
_.f=d
_.r=e
_.w=0
_.x=!1
_.c=_.a=null},
eqh:function eqh(d,e){this.a=d
this.b=e},
eqi:function eqi(d,e,f){this.a=d
this.b=e
this.c=f},
eqg:function eqg(d,e,f){this.a=d
this.b=e
this.c=f},
eqj:function eqj(d){this.a=d},
eqf:function eqf(d){this.a=d},
eqn:function eqn(d){this.a=d},
eqm:function eqm(d,e){this.a=d
this.b=e},
eql:function eql(d,e){this.a=d
this.b=e},
eqo:function eqo(d,e){this.a=d
this.b=e},
eqk:function eqk(d,e){this.a=d
this.b=e},
eqp:function eqp(d){this.a=d},
WY:function WY(d){this.a=d},
aFY:function aFY(d){var _=this
_.d=d
_.e=0
_.f=-1
_.w=_.r=!1
_.x=0
_.y="Press Start"
_.c=_.a=null},
eB3:function eB3(d){this.a=d},
eB4:function eB4(d){this.a=d},
eB1:function eB1(d,e){this.a=d
this.b=e},
eB2:function eB2(d){this.a=d},
eB0:function eB0(d){this.a=d},
eB5:function eB5(d){this.a=d},
eB6:function eB6(d){this.a=d},
eB7:function eB7(d){this.a=d},
eB8:function eB8(d,e){this.a=d
this.b=e},
Xh:function Xh(d){this.a=d},
bmL:function bmL(d){var _=this
_.d=d
_.e=10
_.f=2
_.r=!1
_.c=_.a=null},
eOV:function eOV(){},
eP3:function eP3(){},
eP_:function eP_(d){this.a=d},
eOZ:function eOZ(){},
eP0:function eP0(d,e){this.a=d
this.b=e},
eOY:function eOY(d,e){this.a=d
this.b=e},
eP1:function eP1(d){this.a=d},
eOX:function eOX(d,e){this.a=d
this.b=e},
eP2:function eP2(d){this.a=d},
eOW:function eOW(d){this.a=d},
WN:function WN(d){this.a=d},
bmf:function bmf(d,e,f,g,h,i,j,k){var _=this
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
_.m5$=g
_.f9$=h
_.h7$=i
_.bx$=j
_.a9$=k
_.c=_.a=null},
eoX:function eoX(){},
eoY:function eoY(){},
eoQ:function eoQ(d){this.a=d},
eoP:function eoP(d){this.a=d},
eoR:function eoR(d){this.a=d},
eoO:function eoO(d){this.a=d},
eoS:function eoS(d){this.a=d},
eoN:function eoN(d){this.a=d},
eoT:function eoT(d,e){this.a=d
this.b=e},
eoM:function eoM(d,e){this.a=d
this.b=e},
eoU:function eoU(d){this.a=d},
eoL:function eoL(d,e){this.a=d
this.b=e},
eoV:function eoV(d){this.a=d},
eoK:function eoK(d,e){this.a=d
this.b=e},
eoW:function eoW(d){this.a=d},
eoJ:function eoJ(d,e){this.a=d
this.b=e},
bf7:function bf7(d,e,f){this.c=d
this.d=e
this.a=f},
aMU:function aMU(){},
bzl:function bzl(){},
aNc:function aNc(){},
bzr:function bzr(){},
aNF:function aNF(){},
bzA:function bzA(){},
aO5:function aO5(){},
bzJ:function bzJ(){},
JC(d,e,f,g){var w,v,u,t,s,r,q,p=$.ate
if(p==="music"||p==="space"){for(p=e.length,w=0;w<e.length;e.length===p||(0,B.K)(e),++w)E.mm(d,e[w],f,g)
return}for(p=B.cW(e,0,B.dA(4,"count",x.S),B.U(e).c),v=p.$ti,p=new B.bO(p,p.gI(0),v.k("bO<ak.E>")),u=x.H,v=v.k("ak.E"),t=0;p.C();t=r){s=p.d
if(s==null)s=v.a(s)
r=t+1
q=t*70
if(q===0)E.mm(d,s,f,g)
else B.bQ(new B.bd(1000*q),new C.clW(d,s,f,g),u)}},
cju(d){return C.hVl(d)},
hVl(d){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m,l
var $async$cju=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$cju)
case 7:r=f
q=B.aT(J.t(r.a,"ngmy_play_progress_v1_"+d))
if(q==null){u=B.T(x.N,x.z)
w=1
break}p=A.Y.aQ(0,q,null)
o=x.N
n=x.z
o=x.f.b(p)?B.a2(p,o,n):B.T(o,n)
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
return B.i($async$cju,v)},
b2O(d,e){return C.hVm(d,e)},
hVm(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q
var $async$b2O=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b2O)
case 6:s=g
w=7
return B.b(s.aA("String","ngmy_play_progress_v1_"+d,A.Y.az(e,null)),$async$b2O)
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
return B.i($async$b2O,v)},
clW:function clW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ifr(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=B.T(x.W,x.S)
for(w=d.a,v=0;v<w.length;++v)l.n(0,w[v],v)
u=B.a([],x.x)
for(t=w.length,s=x.N,r=x.K,q=0;q<w.length;w.length===t||(0,B.K)(w),++q){p=w[q]
u.push(B.H(["k",p.b,"x",B.oj(A.j.ad(p.c,4)),"y",B.oj(A.j.ad(p.d,4)),"v",p.e,"l",B.oj(A.j.ad(p.f,3)),"o",p.r,"on",p.w,"b",p.x,"bw",p.ay,"c",B.oj(A.j.ad(p.as,3)),"ch",p.at,"vc",B.oj(A.j.ad(p.z,3)),"s",B.oj(A.j.ad(p.ch,2))],s,r))}w=B.a([],x.U)
for(t=d.b,o=t.length,n=x.bN,q=0;q<t.length;t.length===o||(0,B.K)(t),++q){m=t[q]
w.push(B.a([l.h(0,m.a),m.b,l.h(0,m.c),m.d],n))}l=B.C(f,B.a4(f).k("cg.E"))
A.d.fi(l)
return A.Y.az(B.H(["parts",u,"wires",w,"challenge",e,"done",l],s,r),null)},
ip1(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null
try{w=A.Y.aQ(0,a7,a5)
i=x.f
if(!i.b(w))return a5
h=a6.a
A.d.a8(h)
A.d.a8(a6.b)
v=B.a([],x.fs)
g=x.L
f=g.a(J.t(w,"parts"))
f=J.aU(f==null?A.cp:f)
while(f.C()){u=f.gR(f)
t=i.a(u)
e=B.aT(J.t(t,"k"))
s=e==null?"":e
if(!$.qy().ao(0,s)){J.c5(v,null)
continue}d=s
a0=B.aI(J.t(t,"x"))
if(a0==null)a0=0.5
a1=B.aI(J.t(t,"y"))
if(a1==null)a1=0.5
a2="p"+a6.c++
a3=new C.tU(a2,d,a0,a1)
a3.arV(a2,d,a0,a1)
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
d=B.k0(J.t(t,"on"))
if(d==null)d=r.w
r.w=d
d=B.k0(J.t(t,"b"))
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
J.c5(v,r)}i=g.a(J.t(w,"wires"))
i=J.aU(i==null?A.cp:i)
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
h=J.aU(h==null?A.cp:h)
while(h.C()){j=h.gR(h)
J.c5(k,A.j.M(B.dC(j)))}return new B.bqu(i,k)}catch(a4){return a5}},
fIo(){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n
var $async$fIo=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
o=B
n=J
w=7
return B.b(B.az(),$async$fIo)
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
return B.i($async$fIo,v)},
bG1(d){return C.iqA(d)},
iqA(d){var w=0,v=B.j(x.H),u=1,t=[],s,r
var $async$bG1=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
w=7
return B.b(B.az(),$async$bG1)
case 7:w=6
return B.b(f.aA("String","ngmy_electronics_lab_v1",d),$async$bG1)
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
return B.i($async$bG1,v)}},D,H,X,Al,Y,A2,Am
J=c[1]
B=c[0]
A=c[2]
A3=c[117]
Z=c[156]
A4=c[154]
A5=c[147]
A_=c[145]
R=c[139]
A6=c[132]
A7=c[149]
A8=c[158]
A9=c[105]
Aa=c[134]
A0=c[116]
N=c[141]
Ab=c[157]
Ac=c[148]
Ad=c[152]
Ae=c[74]
T=c[83]
Af=c[86]
P=c[126]
Ag=c[130]
U=c[137]
V=c[140]
W=c[151]
E=c[29]
K=c[3]
G=c[38]
I=c[107]
A1=c[101]
O=c[150]
Ah=c[100]
Ai=c[153]
S=c[127]
Aj=c[155]
Q=c[143]
Ak=c[26]
L=c[28]
F=c[98]
M=c[96]
C=a.updateHolder(c[18],C)
D=c[136]
H=c[138]
X=c[144]
Al=c[56]
Y=c[109]
A2=c[146]
Am=c[142]
C.akV.prototype={}
C.Wx.prototype={
S(){return new C.bm3(B.T(x.N,x.i),new B.au(A.av,$.aw()),B.a([],x.X),B.a([],x.F),B.mT(0,null,null))}}
C.bm3.prototype={
gWY(){var w,v=this.d
if(v===$){w=this.a.c
this.d=w
v=w}return v},
t(){var w,v,u
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a1(0)
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
t.m(new C.ei4(t))
t.a.toString
p=t.gWY()
w=3
return B.b(C.bBC(C.i3g(q,C.ifc(p),o,t.ay)),$async$PK)
case 3:s=e
r=s==null?null:J.j6(s)
if(r==null||r.length===0||A.a.a0(r,"{"))r=C.igJ(q,p,o)
if(t.c==null){w=1
break}t.m(new C.ei5(t,o,r))
$.aW.x1$.push(new C.ei6(t))
case 1:return B.h(u,v)}})
return B.i($async$PK,v)},
Z1(d){return this.c2M(d)},
aYb(){return this.Z1(null)},
c2M(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$Z1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p={}
o=A.a.i(d==null?t.f.a.a:d)
if(o.length===0||t.x||t.y){w=1
break}s=$.aW.ap$.d.c
if(s!=null)s.jr()
t.f.sb1(0,o)
t.m(new C.eih(t))
G.dF(500,"",160,-0.5,0.25,"square")
t.a.toString
n=p
m=C
w=3
return B.b(C.bBC(C.iap(o)),$async$Z1)
case 3:r=n.a=m.ioH(f)
p.b=""
if(r!=null&&!C.ifd(r.d)){p.a=null
p.b="The first idea did not make a complete loop, so I used a proven design."
s=null}else s=r
if(s==null)s=p.a=C.igK(o)
q=B.ag(y.f,!0,!1,!1,!1)
if(q.b.test(o.toLowerCase())&&s.e.length===0)p.a=new C.akV(s.a,s.b,s.c,s.d,y.d,s.f)
if(t.c==null){w=1
break}t.m(new C.eii(p,t))
t.c8k(p.a)
case 1:return B.h(u,v)}})
return B.i($async$Z1,v)},
c8k(d){var w,v,u,t,s,r,q,p,o,n,m=this,l={}
for(w=m.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a1(0)
A.d.a8(w)
w=++m.as
v=m.gWY()
A.d.a8(v.a)
A.d.a8(v.b)
m.e.a8(0)
m.m(new C.eid(m))
t=d.d
s=B.T(x.N,x.W)
v=t.c
r=t.d
q=v.length+r.length+1
l.a=0
p=new C.eib(m,w)
for(o=500,n=0;n<v.length;++n){p.$2(o,new C.eie(l,m,v[n],s,n,q,d))
o+=650}o+=250
for(w=r.length,u=0;u<r.length;r.length===w||(0,B.K)(r),++u){p.$2(o,new C.eif(l,m,s,r[u],q,d))
o+=520}p.$2(o+200,new C.eig(m,d))},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.w,j=m.ay,i=j.length===0?200:260,h=A.br.j(0.1),g=B.n(16),f=B.L(A.br.j(0.35),A.r,1)
if(m.x)j=B.A(B.a([D.fdG,A.bd,B.E(B.d(m.Q,l,l,l,l,l,l,A.AC,l,l,l),1)],x.p),A.m,l,A.e,A.i,0,l,l)
else if(k==null)j=D.fEs
else{w=B.E(B.d(k.a,l,l,l,l,l,l,A.VB,l,l,l),1)
v=x.p
w=B.a([B.A(B.a([w,B.d(k.f?"\ud83e\udd16 AI design":"\ud83d\udcda From the library",l,l,l,l,l,l,D.foK,l,l,l)],v),A.m,l,A.e,A.i,0,l,l)],v)
u=m.Q
if(u.length!==0)w.push(new B.D(A.up,B.d(u,l,l,l,l,l,l,D.frx,l,l,l),l))
w.push(A.cU)
w.push(B.d(k.b,l,l,l,l,l,l,I.EH,l,l,l))
u=k.e
if(u.length!==0){t=A.aU.j(0.12)
s=B.n(10)
w.push(B.q(l,B.d(u,l,l,l,l,l,l,D.fu3,l,l,l),A.f,l,l,new B.o(t,l,l,s,l,l,A.n),l,l,l,A.i9,A.cl,l,l,l))}w.push(A.am)
for(u=k.c,r=0;r<u.length;++r){t=m.z
s=r<t
if(s)t="\u2705"
else t=r===t&&m.y?"\ud83d\udd27":"\u2b1c"
t=B.d(t,l,l,l,l,l,l,A.lU,l,l,l)
q=u[r]
s=s?A.c:A.aD
w.push(new B.D(A.NI,new B.c6(A.aL,A.e,A.i,A.E,l,A.p,l,0,B.a([t,A.bl,new B.by(1,A.bb,B.d(q,l,l,l,l,l,l,new B.G(!0,s,l,l,l,l,12,l,l,l,l,l,1.3,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l),l)],v),l),l))}for(u=j.length,p=0;p<j.length;j.length===u||(0,B.K)(j),++p){o=j[p]
t=A.br.j(0.3)
s=new B.aP(12,12)
s=B.q(l,B.d(o.a,l,l,l,l,l,l,A.Vi,l,l,l),A.f,l,l,new B.o(t,l,l,new B.bg(s,s,s,s),l,l,A.n),l,l,l,l,A.h9,l,l,l)
t=A.c.j(0.07)
q=new B.aP(12,12)
A.d.v(w,B.a([A.Q,new B.bL(A.a9,l,l,s,l),A.aw,B.q(l,B.d(o.b,l,l,l,l,l,l,D.fzI,l,l,l),A.f,l,l,new B.o(t,l,l,new B.bg(q,q,q,q),l,l,A.n),l,l,l,l,A.bU,l,l,l)],v))}if(m.ax)w.push(D.epL)
j=B.ch(B.x(w,A.E,l,A.e,A.i,0,A.p),A.t,m.ch,A.y,l,l,l,l,A.ah)}w=x.p
g=B.x(B.a([B.aj9(B.q(l,j,A.f,l,new B.aY(0,1/0,0,i),new B.o(h,l,f,g,l,l,A.n),l,l,l,D.bB1,A.eD,l,l,1/0),A.b4,A.iI),B.E(C.hik(m.gWY(),l,l,m.e),1)],w),A.m,l,A.e,A.i,0,A.p)
f=B.a([],w)
j=k!=null
if(j){i=m.at
i=B.a([new E.dW("Ask about it",i,new C.eil(m),l,A.br,l),new E.dW("Invent something new",!i,new C.eim(m),l,A.br,l)],w)
if(m.at)for(p=0;p<3;++p){n=D.dsq[p]
i.push(new E.dW(n,!1,new C.ein(m,n),l,A.br,l))}f.push(new E.fb(i,l,l))}if(!j||!m.at){i=B.a([],w)
for(p=0;p<8;++p){r=D.day[p]
i.push(new E.dW(r,!1,new C.eio(m,r),l,A.br,l))}f.push(new E.fb(i,l,l))}i=m.at&&j?"Ask a question about it\u2026":"I want to make\u2026"
h=A.c.j(0.07)
i=B.E(B.aM(l,A.Z,!1,l,!0,A.t,l,B.aN(),m.f,l,l,l,l,l,2,B.bs(l,new B.b6(4,B.n(16),A.a1),l,A.eU,l,l,l,l,!0,l,l,l,l,l,l,h,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,A.kE,i,l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,new C.eip(m,k),l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,A.dg,!0,A.a5,l,A.ao,l,A.V5,l,l),1)
h=m.at
v=h&&j?D.bQU:A.e9
j=h&&j?"Ask":"Invent"
f.push(B.A(B.a([i,A.ae,new E.fB(v,j,new C.eiq(m,k),A.br,l)],w),A.m,l,A.e,A.i,0,l,l))
return E.ly(A.br,A.f5,'Type what you want to make, in your own words: "a radio that works without a battery", "a fan powered by wind", "a night light". The AI works out which parts you need, then you watch them being put on the board and wired up, one by one. When it is built it runs for real, so tap the parts to see how they work and change them.\n\nThe AI is honest about physics: nobody can make free energy from nothing, but it can show you how to make electricity from sunlight, wind or your own hands instead of a battery.\n\nYou can add or remove parts yourself afterwards. If the AI is not reachable the app uses its own library of designs.',g,"AI INVENTOR",B.x(f,A.m,l,A.e,A.P,0,A.p))}}
C.GN.prototype={}
C.vf.prototype={}
C.WU.prototype={
S(){return new C.aFS(A.H,A.H,A.ay,B.aR(x.S),$,A.bC,0,B.a([],x.X),null,null)}}
C.aFS.prototype={
gaZu(){var w,v,u,t=this,s=D.Im[t.cx],r=D.Sr[t.cy],q=D.Dm[t.db],p=B.a([],x.n)
for(w=t.dx,w=B.dY(w,w.r,B.a4(w).c),v=w.$ti.c;w.C();){u=w.d
p.push(D.aAf[u==null?v.a(u):u].c)}return 0.8+s.c+r.c+q.c+A.d.cI(p,0,new C.exn())},
ga3o(){return D.Im[this.cx].d/this.gaZu()},
gaQu(){return 0.1*(D.Im[this.cx].d/0.9)/D.Sr[this.cy].d},
Y(){this.a3()
this.me()
C.cju("rocket_lander").bG(new C.exH(this),x.h)},
c8t(){var w=this
w.ay=A.j.E(0.36-w.d*0.035,0.14,0.4)
w.ax=0.2+A.cM.ai()*0.6
w.f=new B.p(0.15+A.cM.ai()*0.7,0.08)
w.r=new B.p((A.cM.ai()-0.5)*0.08,0)
w.w=0
w.x=1
w.dy=!1
w.as="flying"
w.at=""},
mw(d){var w,v,u,t,s,r,q,p,o,n,m=this
m.CW+=d
if(m.as!=="flying"){m.m(new C.exI())
return}w=D.t4[m.d]
if(m.y)m.w=m.w-d*2.2
if(m.z)m.w=m.w+d*2.2
m.w=A.j.E(m.w,-1.2,1.2)
if(m.dx.q(0,1)&&!m.y&&!m.z)m.w=m.w*Math.max(0,1-d*2.5)
v=new B.p(0,w.b/9.81*0.28)
if(m.Q&&m.x>0){u=m.ga3o()
v=v.a5(0,new B.p(Math.sin(m.w)*u,-Math.cos(m.w)*u))
m.x=Math.max(0,m.x-d*m.gaQu())}if(m.dy){t=m.r
v=v.aK(0,t.aN(0,t.gcH()*6*D.aCj[m.d]))}t=m.r=m.r.a5(0,v.aN(0,d))
s=m.f=m.f.a5(0,t.aN(0,d))
r=s.a
if(r<0.02||r>0.98){m.r=new B.p(-t.a*0.4,t.b)
t=new B.p(A.j.E(r,0.02,0.98),m.f.b)
m.f=t}else t=s
if(t.b<0.02)t=m.f=new B.p(t.a,0.02)
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
C.b2O("rocket_lander",B.H(["unlocked",t],x.N,x.z))
C.JC("bell",B.a([0,4,7,12],x.t),600,0.45)}else{m.as="crashed"
if(!q)t="You missed the landing pad."
else if(s>=p)if(m.ga3o()/(D.t4[m.d].b/9.81*0.28)<1)t="Too fast, and with a thrust-to-weight ratio of "+A.j.ad(m.ga3o()/(D.t4[m.d].b/9.81*0.28),2)+" this rocket can never hover here. Build with a bigger engine or less weight."
else t=m.x<=0?"You ran out of fuel. A bigger tank carries more, but weighs more.":"Too fast! Start the engine earlier to slow down."
else{t=m.w
s=r===2?0.5:0.3
t=Math.abs(t)>=s?"Not upright. Level out before you land.":"Sideways drift was too big."}m.at=t
G.dF(80,"",500,0,0.6,"noise")
B.fL()}}if(m.Q&&m.x>0&&A.o.F(A.j.bh(m.CW*20),2)===0)G.dF(90,"",70,0,0.12,"noise")
m.m(new C.exJ())},
ah_(d,e,f,g,h){var w,v=null,u=B.d(d,v,v,v,v,v,v,D.fr_,v,v,v),t=x.p,s=B.a([],t)
for(w=0;w<3;++w)s.push(new E.dW(e[w].a,f.$1(w),new C.exp(this,g,w),v,h,v))
return new B.D(A.eL,B.x(B.a([u,A.cU,B.bW(A.bH,s,A.bt,v,6,6)],t),A.E,v,A.e,A.i,0,A.p),v)},
bHD(d){var w,v,u,t,s=this,r=null,q=s.ga3o()/(D.t4[s.d].b/9.81*0.28)>=1,p=A.j.V(1/s.gaQu()),o=D.aCj[s.d],n=B.n(24),m=d.c,l=B.L(m.j(0.6),A.r,1)
m=B.a([B.d("Build a rocket for "+d.a,r,r,r,r,r,r,B.l(r,r,m,r,r,r,r,r,r,r,r,19,r,r,A.u,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),A.aw,B.d(d.d+" Gravity here: "+B.w(d.b)+" m/s\xb2.",r,r,r,r,r,r,F.aaU,r,r,r),A.X,s.ah_("ENGINE: "+D.Im[s.cx].b,D.Im,new C.exe(s),new C.exf(s),A.cJ),s.ah_("FUEL TANK: "+D.Sr[s.cy].b,D.Sr,new C.exg(s),new C.exh(s),A.b9),s.ah_("LANDING GEAR: "+D.Dm[s.db].b,D.Dm,new C.exi(s),new C.exj(s),A.aJ),s.ah_("EXTRAS (tap to add)",D.aAf,new C.exk(s),new C.exl(s),A.br)],x.p)
if(s.dx.q(0,2)&&!(o>0))m.push(D.fXg)
o=(q?A.b9:A.c_).j(0.14)
w=B.n(12)
v=A.j.ad(s.gaZu(),2)
u=A.j.ad(s.ga3o()/(D.t4[s.d].b/9.81*0.28),2)
t=q?"\u2714 the engine can beat gravity and slow you down":"\u2716 under 1: the engine is too weak to hold the rocket up here!"
m.push(B.q(r,B.d("Weight (mass): "+v+"\nThrust-to-weight ratio: "+u+" "+t+"\nFuel lasts about "+p+" seconds of burning.\nSafe landing speed: "+A.j.V(D.Dm[s.db].d*100)+".",r,r,r,r,r,r,D.frF,r,r,r),A.f,r,r,new B.o(o,r,r,w,r,r,A.n),r,r,r,A.i9,A.bU,r,r,r))
m.push(A.X)
m.push(new B.bL(A.A,r,r,new E.fB(A.oB,"Launch",new C.exm(s),A.b9,r),r))
return B.at(B.q(r,B.ch(B.x(m,A.E,r,A.e,A.P,0,A.p),A.t,r,A.y,r,A.bR,r,r,A.ah),A.f,r,A.lZ,new B.o(D.bqR,r,l,n,r,r,A.n),r,r,r,A.bU,r,r,r,r),r,r,r)},
b_G(d,e,f,g){var w=null,v=f?A.cJ:A.c.j(0.1),u=B.n(18),t=B.L(A.aV,A.r,1)
return B.mI(A.iL,B.q(w,B.X(d,A.c,w,w,w,30),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,62,w,w,w,w,w,g),w,new C.exb(e),new C.exc(e),w,w,w,w,new C.exd(e))},
b_F(d,e,f){return this.b_G(d,e,f,74)},
B(d){var w,v,u,t,s=this,r=null,q=B.cs(new C.exA(s,D.t4[s.d])),p=x.p,o=B.a([],p)
for(w=0;w<7;++w){v=w<=s.e?D.t4[w].a:"\ud83d\udd12"
o.push(new E.dW(v,s.d===w,new C.exB(s,w),r,D.t4[w].c,r))}v=B.a([s.b_F(F.apY,new C.exC(s),s.y),A.bd,s.b_G(A.wz,new C.exD(s),s.Q,130),A.bd,s.b_F(A.Pt,new C.exE(s),s.z)],p)
if(s.dx.q(0,2)){u=s.dy?A.aJ:A.c.j(0.1)
t=B.n(18)
A.d.v(v,B.a([A.bd,B.aA(r,B.q(r,D.bV6,A.f,r,r,new B.o(u,r,B.L(A.aV,A.r,1),t,r,r,A.n),r,62,r,r,r,r,r,62),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.exF(s),r,r,r,r,r,r,!1,A.a4)],p))}return E.ly(A.cJ,A.f5,"First BUILD your rocket: pick an engine, a fuel tank, landing gear and extras. Everything has weight, and a heavy rocket needs a strong engine. The key number is the thrust-to-weight ratio: it must be above 1 or the engine cannot slow you down. Heavy worlds like Jupiter need a big engine; on the Moon a small one is enough. A parachute only works where there is air.\n\nThen land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.",q,"ROCKET LANDER",B.x(B.a([new E.fb(o,"WORLD",r),B.A(v,A.m,r,A.ba,A.i,0,r,r)],p),A.m,r,A.e,A.P,0,A.p))}}
C.bj0.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=this.b,l=D.t4[m.d],k=a1.a,j=a1.b,i=0+k,h=0+j,g=$.S(),f=B.J(),e=l.c,d=B.ar(K.ZJ,e,0.25)
d.toString
f.sav(new B.a9(A.b6,A.b8,A.x,B.a([F.agT,d],x.O),n,n).aJ(0,new B.a3(0,0,i,h)))
a0.aq(new B.a3(0,0,i,h),f)
w=new B.e4()
w.d_(5)
for(v=0;v<70;++v){i=w.ai()
h=w.ai()
f=w.ai()
d=new B.ap(A.S,A.N,A.U,A.V,A.T)
d.r=A.c.j(0.2+w.ai()*0.5).gp(0)
a0.N(new B.p(i*k,h*j*0.8),f*1.2+0.3,d)}u=j*0.88
i=x.v
h=B.a([],i)
t=new B.aF(g.r,A.ai,n,n,h)
t.D(new B.aZ(0,u+14))
s=new B.e4()
s.d_(2)
for(r=0;r<=k;r+=18){g=new B.aq(r,u+(Math.abs(r/k-m.ax)<m.ay/2+0.02?14:14-s.ai()*18))
h.push(g)
f=t.f
if(f!=null)g.aj(f)
t.aa()}t.D(new B.aq(k,j))
t.D(new B.aq(0,j))
t.D(new B.bv())
h=$.S()
g=B.J()
g.r=B.ar(e,A.w,0.6).gp(0)
a0.af(t,g)
q=B.bB(new B.p(m.ax*k,u+10),8,m.ay*k)
g=B.bn(q,A.iw)
e=B.J()
e.r=A.bg.gp(0)
a0.am(g,e)
e=B.bn(q.cn(2),A.n6)
g=B.J()
g.b=A.aa
g.c=2
g.r=A.c.j(0.5+0.3*Math.sin(m.CW*4)).gp(0)
a0.am(e,g)
if(m.as==="ready")return
g=m.f
f=a0.c
J.br(f.save())
f.translate(g.a*k,g.b*j)
a0.hW(0,m.w)
k=m.as
if(k==="crashed"){m=B.J()
m.r=A.cJ.j(0.6).gp(0)
m.y=U.Oe
a0.N(A.H,34,m)
f.restore()
return}if(m.Q&&m.x>0&&k==="flying"){k=h.r
p=new B.aF(k,A.ai,n,n,B.a([],i))
p.D(new B.aZ(-8,18))
p.D(new B.aq(0,44+Math.sin(m.CW*40)*8))
p.D(new B.aq(8,18))
p.D(new B.bv())
m=B.J()
m.r=A.aU.gp(0)
a0.af(p,m)
k=new B.aF(k,A.ai,n,n,B.a([],i))
k.D(new B.aZ(-4,18))
k.D(new B.aq(0,32))
k.D(new B.aq(4,18))
k.D(new B.bv())
m=B.J()
m.r=A.c.gp(0)
a0.af(k,m)}m=h.r
o=new B.aF(m,A.ai,n,n,B.a([],i))
o.D(new B.aZ(0,-26))
o.D(new B.c8(14,-10,11,18))
o.D(new B.aq(-11,18))
o.D(new B.c8(-14,-10,0,-26))
o.D(new B.bv())
k=B.J()
k.sav(D.c70.aJ(0,D.f5d))
a0.af(o,k)
k=B.J()
k.r=A.aJ.gp(0)
a0.N(H.vk,5,k)
k=new B.aF(m,A.ai,n,n,B.a([],i))
k.D(new B.aZ(-11,6))
k.D(new B.aq(-20,20))
k.D(new B.aq(-11,18))
k.D(new B.bv())
j=B.J()
j.r=A.az.gp(0)
a0.af(k,j)
i=new B.aF(m,A.ai,n,n,B.a([],i))
i.D(new B.aZ(11,6))
i.D(new B.aq(20,20))
i.D(new B.aq(11,18))
i.D(new B.bv())
m=B.J()
m.r=A.az.gp(0)
a0.af(i,m)
f.restore()},
aE(d){return!0}}
C.aNN.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.bzC.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a1(0)
w=this.h6$
w===$&&B.c()
w.t()
this.bzy()}}
C.aTR.prototype={}
C.a4b.prototype={}
C.bbX.prototype={}
C.Vq.prototype={
S(){var w=new Float32Array(0),v=new Float32Array(0),u=new Float32Array(0),t=new Float32Array(0),s=new Float32Array(0),r=new Int32Array(0),q=new Int32Array(0),p=B.ez(["skin"],x.N),o=new Float32Array(0)
return new C.aEl(w,v,u,t,s,r,q,new B.cw(null,x.A),p,D.LE,D.LE,A.ay,A.cM,o,new Int32Array(0),$,A.bC,0,B.a([],x.X),null,null)}}
C.aEl.prototype={
Y(){var w=this
w.a3()
w.me()
w.as=new C.c62(w.gchl())
new C.dOy(w).$0()
return},
t(){var w,v=this.as
if(v!=null){w=v.d
if(w!=null)w.a1(0)
v.d=null}this.byC()},
chm(d){var w,v=this
if(v.c==null)return
w=J.a7(d)
switch(w.h(d,"ngmyBody")){case"ready":w=v.as
if(w!=null)w.f8(0,B.H(["t","init","data",$.hsp],x.N,x.z))
v.at=!0
v.ax=""
v.aAD()
break
case"pick":v.m(new C.dOa(v,d))
break
case"shot":v.aiU(B.w(w.h(d,"data")))
break
case"error":$.am.$1("[body viewer] "+B.w(w.h(d,"text")))
break}},
aAD(){var w,v,u,t,s,r,q=this
if(!q.at)return
w=D.ay6[q.CW]
v=new C.dOb()
u=q.ay
u=B.C(u,B.a4(u).k("cg.E"))
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
aiU(d){return this.cyk(d)},
cyk(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$aiU=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:u=3
r=A.cG.aM(A.a.b2(d,A.a.cq(d,",")+1))
w=6
return B.b(B.awF(B.a([B.cFS(r,"image/png","body.png")],x.fH),null,"Made in NGMY Core Protocol"),$async$aiU)
case 6:u=1
w=5
break
case 3:u=2
o=t.pop()
p=s.c
if(p!=null)p.L(x.gV).f.U(K.aTx)
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$aiU,v)},
aA1(d){var w=d.b
if(w==="skin")return this.ch>0
return this.ay.q(0,w)},
mw(d){var w,v=this
if(v.d==null)return
w=(v.k2+=d)*v.k3/60
if(v.k4&&v.ay.q(0,"organ")&&A.j.bh(w)!==A.j.bh(v.ok)){E.Xj("kick",0,0.4)
v.UD(170,new C.dOz())}v.ok=w
return},
aew(d){var w,v,u,t,s=this
s.m(new C.dOc(s,d))
if(d==null){s.fx=D.LE
s.dy=1
w=s.as
if(w!=null)w.f8(0,B.H(["t","focus","group",null],x.N,x.z))
return}w=s.d.e
v=B.U(w).k("Y<1>")
u=B.C(new B.Y(w,new C.dOd(d),v),v.k("M.E"))
t=A.d.gH(u).b
if(t!=="skin"&&!s.ay.q(0,t)){s.ay.J(0,t)
if(s.ch===2)s.ch=1}s.aAD()
w=s.as
if(w!=null)w.f8(0,B.H(["t","focus","group",d],x.N,x.z))
s.go=0
s.cAO(t,d)
return},
cAO(d,e){var w,v="noise"
switch(d){case"organ":if(e==="Heart"){E.Xj("kick",0,0.8)
this.UD(260,new C.dOe())}else if(e==="Lungs"||e==="Windpipe"||e==="Diaphragm")G.dF(420,"",420,-0.5,0.28,v)
else if(e==="Brain"||e==="Spinal cord")for(w=0;w<4;++w)this.UD(w*70,new C.dOf(this))
else if(A.a.q(e,"intestine")||e==="Stomach")G.dF(110,"",360,0.7,0.3,"saw")
else E.h7U("organic",6+A.o.F(e.length,8),200,0.6)
break
case"bone":G.dF(210+e.length*4,"",80,0.6,0.55,"tri")
G.dF(2400,"",20,0,0.3,v)
break
case"muscle":G.dF(70,"",150,1,0.6,"sine")
break
case"vessel":G.dF(300,"",380,0.4,0.22,v)
E.Xj("kick",0,0.3)
break
default:E.h7U("organic",2+A.o.F(e.length,6),200,0.4)}},
cFs(d){this.m(new C.dOh(this,d))},
b_Y(){var w,v,u,t,s,r,q,p=this,o=B.aR(x.N)
for(w=p.d.e,v=w.length,u=p.ay,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
if(p.aA1(s))r=!(s.b==="skin"&&u.a!==0)
else r=!1
if(r)o.J(0,s.a)}q=B.C(o,o.$ti.k("cg.E"))
w=q.length
if(w===0)return
p.p2=q[p.R8.aw(w)]
p.p4=""},
bZr(d){var w,v,u=this
u.go=0
if(u.p1&&u.p2!=null){if(d==null)return
w=d===u.p2
u.m(new C.dO7(u,w,d))
v=x.t
C.JC("bell",w?B.a([0,4,7,12],v):B.a([0,1],v),600,0.45)
if(w)u.UD(1100,new C.dO8(u))
return}if(d==null){if(u.cx!=null)u.aew(null)
return}u.aew(d)},
c23(d,e){var w,v=this,u=null,t=B.n(18),s=B.L(A.c4.j(0.5),A.r,1)
if(v.p1){w=v.p2
w=B.d(w==null?"Turn the quiz off and on to start":"Find the "+w.toLowerCase()+"   \xb7   score "+v.p3+"\n"+v.p4,u,u,u,u,u,u,D.fn5,u,u,u)}else if(d==null||e==null)w=D.fBR
else{w=x.p
w=B.A(B.a([B.E(B.x(B.a([B.d(d+"  \xb7  "+e.a,u,u,u,u,u,u,A.hh,u,u,u),A.cU,B.d(e.b,u,u,u,u,u,u,I.EH,u,u,u)],w),A.E,u,A.e,A.P,0,A.p),1),B.aG(u,u,u,u,D.bXD,u,u,u,new C.dO9(v),u,u,u,u,"Back to the whole body",A.ce)],w),A.E,u,A.e,A.i,0,u,u)}return B.q(u,w,A.f,u,u,new B.o(K.Y3,u,s,t,u,u,A.n),u,u,u,u,R.alp,u,u,u)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cx,f=g==null?h:D.dDu.h(0,g)
i.aAD()
w=B.a([],x.s)
v=i.d
v=v==null?h:v.e
if(v==null)v=D.dkI
u=v.length
t=i.ay
s=0
for(;s<v.length;v.length===u||(0,B.K)(v),++s){r=v[s]
if(i.aA1(r))q=r.b==="skin"&&t.a!==0
else q=!0
if(q)continue
q=r.a
if(!A.d.q(w,q))w.push(q)}v=x.p
u=B.a([B.aG(h,h,h,h,K.oE,h,h,h,new C.dOo(i),h,h,h,h,"Share",h)],v)
q=i.as
if((q==null?h:q.b!=null)===!0){q=q.b
q=q==null?A.bL:B.BR(h,A.pH,q)}else q=A.kC
q=B.x(B.a([B.E(q,1),new B.D(F.a_M,i.c23(g,f),h)],v),A.m,h,A.e,A.i,0,A.p)
p=B.a([],v)
for(s=0;s<5;++s){o=D.dc9[s]
n=o.a
m=n==="skin"
if(m){l=i.ch
if(l===2)l="Skin"
else l=l===1?"Skin (see-through)":"Skin off"}else l=o.b
n=m?i.ch>0:t.q(0,n)
p.push(new E.dW(l,n,new C.dOp(i,o),o.c,A.c4,h))}p=B.a([new E.fb(p,h,h)],v)
if(!i.p1&&w.length!==0){n=B.a([],v)
for(m=w.length,s=0;s<w.length;w.length===m||(0,B.K)(w),++s){k=w[s]
n.push(new E.dW(k,k===i.cx,new C.dOq(i,k),h,A.aU,h))}p.push(new E.fb(n,"FIND",h))}if(t.q(0,"organ")){n=i.k3
p.push(E.iO(A.c_,""+A.j.V(n)+" beats/min","Heart rate",180,40,new C.dOr(i),n))}if(i.ch>0&&t.a===0){n=B.a([],v)
for(j=0;j<5;++j)n.push(new E.FW(D.ay6[j],i.CW===j,new C.dOs(i,j),!1,h))
p.push(new E.fb(n,"SKIN",h))}n=i.fy
m=i.p1
l=m?"Quiz on":"Quiz"
v=B.a([new E.dW("Spin",n,new C.dOt(i),D.aoQ,A.aJ,h),new E.fB(A.ow,"Reset view",new C.dOu(i),A.c,h),new E.dW(l,m,new C.dOv(i),A.HG,A.aU,h)],v)
if(t.q(0,"organ"))v.push(new E.dW("Heartbeat sound",i.k4,new C.dOw(i),A.oA,A.c_,h))
p.push(new E.fb(v,h,h))
return E.ly(A.c4,u,"A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.",q,"BODY EXPLORER",B.x(p,A.m,h,A.e,A.P,0,A.p))}}
C.aMS.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.aMT.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a1(0)
w=this.h6$
w===$&&B.c()
w.t()
this.byB()}}
C.c62.prototype={
kW(d,e){var w,v,u,t=this
if(t.b!=null)return
w=B.aL(e,"</script","<\\/script")
v=$.hyB
$.hyB=v+1
u="ngmy-body-viewer-"+v
$.xk()
$.pQ().pc(u,new C.c63(t,'<!doctype html>\n<html><head><meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">\n<style>\nhtml,body{margin:0;height:100%;overflow:hidden;background:#07080f;touch-action:none;-webkit-user-select:none;user-select:none}\ncanvas{display:block;width:100%;height:100%;outline:none}\n#msg{position:fixed;left:0;right:0;top:46%;text-align:center;color:#8a93a6;font:600 13px -apple-system,Roboto,sans-serif;letter-spacing:.4px}\n</style></head>\n<body><div id="msg">Loading the body\u2026</div>\n<script>'+w+"</script>\n<script>\n(function(){\n'use strict';\nfunction post(m){ try{ parent.postMessage(m,'*'); }catch(e){} }\nwindow.addEventListener('error',function(e){ post({ngmyBody:'error',text:String(e.message||e)}); });\nvar THREE=window.THREE;\nvar renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});\nrenderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));\nrenderer.outputColorSpace=THREE.SRGBColorSpace;\nrenderer.toneMapping=THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure=0.88;\nrenderer.setClearColor(0x07080f,1);\ndocument.body.appendChild(renderer.domElement);\n\nvar scene=new THREE.Scene();\nvar camera=new THREE.PerspectiveCamera(19.3,1,0.05,30);\n\n// A soft studio environment so glossy parts have something to reflect.\n(function(){\n  var env=new THREE.Scene();\n  var sky=new THREE.Mesh(new THREE.SphereGeometry(10,32,16),new THREE.ShaderMaterial({side:THREE.BackSide,\n    vertexShader:'varying vec3 p;void main(){p=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',\n    fragmentShader:'varying vec3 p;void main(){vec3 top=vec3(.50,.58,.78),mid=vec3(.20,.22,.28),bot=vec3(.06,.05,.05);vec3 c=p.y>0.?mix(mid,top,pow(p.y,.7)):mix(mid,bot,-p.y);gl_FragColor=vec4(c,1.);}'}));\n  env.add(sky);\n  function box(w,h,x,y,z,k,col){\n    var m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,side:THREE.DoubleSide}));\n    m.material.color.multiplyScalar(k); m.position.set(x,y,z); m.lookAt(0,0,0); env.add(m);\n  }\n  box(5,4,-5,3.5,5,7,new THREE.Color(1,.93,.85));   // warm key softbox\n  box(3,6,6,1,2,3.2,new THREE.Color(.7,.8,1));      // cool fill\n  box(6,1.2,0,6,-3,4,new THREE.Color(1,1,1));       // top back strip\n  var pm=new THREE.PMREMGenerator(renderer);\n  scene.environment=pm.fromScene(env,0.03).texture;\n  pm.dispose();\n})();\n\nscene.add(new THREE.HemisphereLight(0xcfe0ff,0x3a2a22,0.22));\nvar key=new THREE.DirectionalLight(0xfff1e0,1.35); key.position.set(-1.6,2.4,3.2); scene.add(key);\nvar rim=new THREE.DirectionalLight(0x9ec5ff,0.9); rim.position.set(2.6,1.2,-2.6); scene.add(rim);\nvar fill=new THREE.DirectionalLight(0xffd9c4,0.35); fill.position.set(2.5,0.2,2); scene.add(fill);\n\n// Floor shadow.\n(function(){\n  var c=document.createElement('canvas'); c.width=c.height=128;\n  var g=c.getContext('2d'), r=g.createRadialGradient(64,64,4,64,64,62);\n  r.addColorStop(0,'rgba(0,0,0,.65)'); r.addColorStop(1,'rgba(0,0,0,0)');\n  g.fillStyle=r; g.fillRect(0,0,128,128);\n  var m=new THREE.Mesh(new THREE.PlaneGeometry(0.62,0.62),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));\n  m.rotation.x=-Math.PI/2; m.position.y=-0.002; scene.add(m);\n  window.__floor=m;\n})();\n\nvar pitchG=new THREE.Group(), yawG=new THREE.Group(), model=new THREE.Group();\nscene.add(pitchG); pitchG.add(yawG); yawG.add(model);\npitchG.add(window.__floor); // the shadow turns with the pitch only\n\nvar parts=[];            // {group,layer,fixed,anim,mesh,mat,center,color}\nvar S={layers:[],skinMode:2,tone:'#E2AE86',sel:null,bpm:72,spin:true,quiz:false};\nvar yaw=0.5,pitch=0.05,zoom=1,zoomGoal=1,idle=0,t=0;\nvar target=new THREE.Vector3(0,0.5,0),targetGoal=new THREE.Vector3(0,0.5,0);\nvar DIST=3.2;\n\nfunction ghostMat(){\n  return new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.FrontSide,\n    vertexShader:'varying vec3 n;varying vec3 v;void main(){n=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);v=normalize(-mv.xyz);gl_Position=projectionMatrix*mv;}',\n    fragmentShader:'varying vec3 n;varying vec3 v;uniform float k;void main(){float r=pow(1.-abs(dot(normalize(n),normalize(v))),1.6);gl_FragColor=vec4(.67,.82,.94,(.035+.34*r)*k);}',\n    uniforms:{k:{value:1}}});\n}\n// Inside parts: at every point the surface is lit on the side that faces you (the same at every corner, so it stays smooth).\nfunction faceYou(m){ m.onBeforeCompile=function(sh){\n  sh.vertexShader=sh.vertexShader.replace('#include <defaultnormal_vertex>','#include <defaultnormal_vertex>'+String.fromCharCode(10)+' if(dot(transformedNormal,-(modelViewMatrix*vec4(position,1.0)).xyz)<0.0) transformedNormal=-transformedNormal;');\n  sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); }; return m; }\nfunction makeMat(layer,color,fixed,group){\n  var c=new THREE.Color(color);\n  var m;\n  if(layer==='skin'){\n    if(group==='Hair'){\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:1,sheenRoughness:.35,sheenColor:new THREE.Color(0x8a6a50),side:THREE.DoubleSide});\n    }else{\n      m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,sheen:.8,sheenRoughness:.4,sheenColor:new THREE.Color(0xffb59c),clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.5,side:THREE.DoubleSide});\n      m.onBeforeCompile=function(sh){ sh.fragmentShader=sh.fragmentShader.replace('float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;','float faceDirection = 1.0;'); };\n      m.emissive=c.clone().multiplyScalar(.05); // light that scatters inside skin\n    }\n  }else if(layer==='muscle'){\n    c.multiplyScalar(.72);\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.2,clearcoatRoughness:.4,sheen:.3,sheenRoughness:.5,sheenColor:new THREE.Color(0xc02a20),side:THREE.DoubleSide});\n  }else if(layer==='organ'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.35,sheen:.5,sheenRoughness:.4,sheenColor:new THREE.Color(0xffa0a0),side:THREE.DoubleSide});\n  }else if(layer==='bone'){\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.55,metalness:0,clearcoat:.18,clearcoatRoughness:.5,side:THREE.DoubleSide});\n  }else{\n    m=new THREE.MeshPhysicalMaterial({color:c,roughness:.45,metalness:0,clearcoat:.3,clearcoatRoughness:.3,side:THREE.DoubleSide});\n  }\n  if(layer!=='skin'||group==='Hair'||group==='Eyes'||group==='Lips') faceYou(m);\n  return m;\n}\n\nvar LAYERS=['skin','muscle','organ','bone','vessel'];\nfunction load(bytes){\n  var buf=bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength);\n  var d=new DataView(buf), o=4, n=d.getUint32(o,true); o+=4;\n  var heads=[];\n  for(var i=0;i<n;i++){\n    var len=d.getUint8(o++), name='';\n    for(var k=0;k<len;k++) name+=String.fromCharCode(d.getUint8(o+k));\n    o+=len;\n    var layer=d.getUint8(o++), r=d.getUint8(o),g=d.getUint8(o+1),b=d.getUint8(o+2); o+=3;\n    var anim=d.getUint8(o++), nv=d.getUint32(o,true); o+=4; var nt=d.getUint32(o,true); o+=4;\n    heads.push({name:name,layer:LAYERS[layer],color:(r<<16)|(g<<8)|b,anim:anim,nv:nv,nt:nt});\n  }\n  for(var gi=0;gi<heads.length;gi++){\n    var h=heads[gi];\n    var pos16=new Int16Array(buf.slice(o,o+h.nv*6)); o+=h.nv*6;\n    var idx=new Uint16Array(buf.slice(o,o+h.nt*6)); o+=h.nt*6;\n    var pos=new Float32Array(h.nv*3);\n    var minx=1e9,miny=1e9,minz=1e9,maxx=-1e9,maxy=-1e9,maxz=-1e9,sx=0,sy=0,sz=0;\n    for(var v=0;v<h.nv;v++){\n      var x=pos16[v*3]/30000,y=pos16[v*3+1]/30000,z=pos16[v*3+2]/30000;\n      pos[v*3]=x;pos[v*3+1]=y;pos[v*3+2]=z;\n      if(x<minx)minx=x;if(x>maxx)maxx=x;if(y<miny)miny=y;if(y>maxy)maxy=y;if(z<minz)minz=z;if(z>maxz)maxz=z;\n      sx+=x;sy+=y;sz+=z;\n    }\n    var cx=sx/Math.max(1,h.nv),cy=sy/Math.max(1,h.nv),cz=sz/Math.max(1,h.nv);\n    // Move the points so the part's own centre is the origin; the heart and lungs can then grow from their middle.\n    for(var v2=0;v2<h.nv;v2++){pos[v2*3]-=cx;pos[v2*3+1]-=cy;pos[v2*3+2]-=cz;}\n    var geo=new THREE.BufferGeometry();\n    geo.setAttribute('position',new THREE.BufferAttribute(pos,3));\n    geo.setIndex(new THREE.BufferAttribute(idx,1));\n    if(h.layer==='skin'&&h.name!=='Hair'&&h.name!=='Eyes'&&h.name!=='Lips'){ geo.computeVertexNormals(); } else { tensorNormals(geo); }\n    geo.computeBoundingSphere();\n    var fixed=(h.name==='Hair'||h.name==='Lips'||h.name==='Eyes');\n    var mat=makeMat(h.layer,h.layer==='organ'&&h.name==='Lungs'?0xE6A2AC:h.color,fixed,h.name);\n    var mesh=new THREE.Mesh(geo,mat);\n    mesh.position.set(cx,cy,cz);\n    mesh.userData.part=gi;\n    model.add(mesh);\n    var back=null;\n    parts.push({group:h.name,layer:h.layer,fixed:fixed,back:back,anim:h.anim,mesh:mesh,mat:mat,ghost:null,center:new THREE.Vector3(cx,cy,cz),\n      min:new THREE.Vector3(minx,miny,minz),max:new THREE.Vector3(maxx,maxy,maxz),color:h.color});\n  }\n  weldSkin();\n  document.getElementById('msg').style.display='none';\n  applyState();\n  post({ngmyBody:'parts',count:parts.length});\n}\n\n// The skin comes in several pieces (head, neck, chest, arms...). Smooth the shading across the joins.\n// The main direction of the surface at every point: it does not matter which way a triangle was wound.\nfunction tensorNormals(geo){\n  var pos=geo.attributes.position.array, idx=geo.index.array, nv=pos.length/3;\n  var T=new Float64Array(nv*6);\n  for(var t=0;t<idx.length;t+=3){\n    var a=idx[t],b=idx[t+1],d=idx[t+2];\n    var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n    var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n    var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx, ar=Math.hypot(nx,ny,nz);\n    if(ar<1e-14) continue;\n    var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n    for(var q=0;q<3;q++){ var k=ids[q]*6; T[k]+=ar*tx*tx; T[k+1]+=ar*tx*ty; T[k+2]+=ar*tx*tz; T[k+3]+=ar*ty*ty; T[k+4]+=ar*ty*tz; T[k+5]+=ar*tz*tz; }\n  }\n  var nrm=new Float32Array(nv*3);\n  for(var v=0;v<nv;v++){\n    var k2=v*6, x=.577,y=.577,z=.577;\n    for(var it=0;it<10;it++){\n      var X=T[k2]*x+T[k2+1]*y+T[k2+2]*z, Y=T[k2+1]*x+T[k2+3]*y+T[k2+4]*z, Z=T[k2+2]*x+T[k2+4]*y+T[k2+5]*z;\n      var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n    }\n    nrm[v*3]=x; nrm[v*3+1]=y; nrm[v*3+2]=z;\n  }\n  geo.setAttribute('normal',new THREE.BufferAttribute(nrm,3));\n}\n\nfunction weldSkin(){\n  var map=new Map(), list=[];\n  function key(x,y,z){ return Math.round(x*20000)+','+Math.round(y*20000)+','+Math.round(z*20000); }\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.layer!=='skin'||p.group==='Hair'||p.group==='Eyes'||p.group==='Lips') continue;\n    var pos=p.mesh.geometry.attributes.position.array, idx=p.mesh.geometry.index.array, c=p.center;\n    var keys=new Array(pos.length/3);\n    for(var v=0;v<keys.length;v++){\n      var k=key(pos[v*3]+c.x,pos[v*3+1]+c.y,pos[v*3+2]+c.z), e=map.get(k);\n      if(!e){ e=[0,0,0,0,0,0,0,0,0]; map.set(k,e); }\n      keys[v]=e;\n    }\n    for(var t=0;t<idx.length;t+=3){\n      var a=idx[t],b=idx[t+1],d=idx[t+2];\n      var ux=pos[b*3]-pos[a*3],uy=pos[b*3+1]-pos[a*3+1],uz=pos[b*3+2]-pos[a*3+2];\n      var vx=pos[d*3]-pos[a*3],vy=pos[d*3+1]-pos[a*3+1],vz=pos[d*3+2]-pos[a*3+2];\n      var nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;\n      var ar=Math.hypot(nx,ny,nz); if(ar<1e-14) continue;\n      var tx=nx/ar,ty=ny/ar,tz=nz/ar, ids=[a,b,d];\n      for(var q=0;q<3;q++){\n        var e2=keys[ids[q]];\n        e2[0]+=nx; e2[1]+=ny; e2[2]+=nz;                       // with the way each triangle faces\n        e2[3]+=ar*tx*tx; e2[4]+=ar*tx*ty; e2[5]+=ar*tx*tz; e2[6]+=ar*ty*ty; e2[7]+=ar*ty*tz; e2[8]+=ar*tz*tz; // and without\n      }\n    }\n    list.push({p:p,keys:keys});\n  }\n  // The surface's main direction at each point does not care which way a stray triangle faces; the majority sets the sign.\n  for(var j=0;j<list.length;j++){\n    var L=list[j], nrm=L.p.mesh.geometry.attributes.normal;\n    for(var v2=0;v2<L.keys.length;v2++){\n      var e3=L.keys[v2];\n      if(!e3.done){\n        var x=.577,y=.577,z=.577;\n        for(var it=0;it<10;it++){\n          var X=e3[3]*x+e3[4]*y+e3[5]*z, Y=e3[4]*x+e3[6]*y+e3[7]*z, Z=e3[5]*x+e3[7]*y+e3[8]*z;\n          var l=Math.hypot(X,Y,Z); if(l<1e-14) break; x=X/l; y=Y/l; z=Z/l;\n        }\n        if(x*e3[0]+y*e3[1]+z*e3[2]<0){ x=-x; y=-y; z=-z; }\n        e3.n=[x,y,z]; e3.done=true;\n      }\n      nrm.setXYZ(v2,e3.n[0],e3.n[1],e3.n[2]);\n    }\n    nrm.needsUpdate=true;\n  }\n}\n\nfunction innerOn(){ return S.layers.length>0; }\nfunction partOn(p){ return p.layer==='skin' ? S.skinMode>0 : S.layers.indexOf(p.layer)>=0; }\nvar tmpC=new THREE.Color();\nfunction applyState(){\n  var tone=new THREE.Color(S.tone);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i], on=partOn(p);\n    var ghost=p.layer==='skin'&&S.skinMode===1;\n    p.mesh.visible=on;\n    if(!on) continue;\n    if(ghost){\n      if(!p.ghost) p.ghost=ghostMat();\n      p.mesh.material=p.ghost;\n      p.mesh.renderOrder=5;\n      continue;\n    }\n    p.mesh.material=p.mat;\n    p.mesh.renderOrder=0;\n    if(p.layer==='skin'&&!p.fixed){ p.mat.color.copy(tone); if(p.mat.emissive) p.mat.emissive.copy(tone).multiplyScalar(.05); }\n    var a=1;\n    if(S.sel&&p.group!==S.sel) a*= p.layer==='skin'?0.6:0.3;\n    p.mat.opacity=a; p.mat.transparent=a<1; p.mat.depthWrite=a>=1; p.mat.needsUpdate=true;\n  }\n}\n\nfunction focusOn(group){\n  idle=0;\n  if(!group){ targetGoal.set(0,0.5,0); zoomGoal=1; return; }\n  var mn=new THREE.Vector3(9,9,9), mx=new THREE.Vector3(-9,-9,-9), n=0;\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(p.group!==group) continue;\n    var g=p.mesh.geometry; g.computeBoundingBox(); var bb=g.boundingBox;\n    mn.min(bb.min.clone().add(p.center)); mx.max(bb.max.clone().add(p.center)); n++;\n  }\n  if(!n) return;\n  var c=mn.clone().add(mx).multiplyScalar(.5), sz=Math.max(mx.x-mn.x,mx.y-mn.y);\n  targetGoal.copy(c);\n  zoomGoal=Math.min(7,Math.max(1,0.62/Math.max(sz,0.06)));\n}\n\nwindow.addEventListener('message',function(e){\n  var m=e.data; if(!m||typeof m!=='object') return;\n  try{\n    if(m.t==='init'){ load(m.data); }\n    else if(m.t==='state'){ for(var k in m) if(k!=='t') S[k]=m[k]; applyState(); }\n    else if(m.t==='focus'){ focusOn(m.group); }\n    else if(m.t==='reset'){ yaw=0.5; pitch=0.05; zoomGoal=1; targetGoal.set(0,0.5,0); idle=0; }\n    else if(m.t==='shot'){ render(); post({ngmyBody:'shot',data:renderer.domElement.toDataURL('image/png')}); }\n  }catch(err){ post({ngmyBody:'error',text:String(err&&err.stack||err)}); }\n});\n\n// \u2500\u2500 Touch and mouse: drag to turn, pinch to zoom, tap to pick \u2500\u2500\nvar pts={}, startPos=null, moved=false, pinch0=0, zoom0=1;\nvar el=renderer.domElement;\nel.addEventListener('pointerdown',function(e){\n  el.setPointerCapture(e.pointerId); pts[e.pointerId]={x:e.clientX,y:e.clientY}; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length===1){ startPos={x:e.clientX,y:e.clientY}; moved=false; }\n  if(ids.length===2){ var a=pts[ids[0]],b=pts[ids[1]]; pinch0=Math.hypot(a.x-b.x,a.y-b.y); zoom0=zoomGoal; moved=true; }\n});\nel.addEventListener('pointermove',function(e){\n  var p=pts[e.pointerId]; if(!p) return; idle=0;\n  var ids=Object.keys(pts);\n  if(ids.length>=2){\n    pts[e.pointerId]={x:e.clientX,y:e.clientY};\n    var a=pts[ids[0]],b=pts[ids[1]]; var d=Math.hypot(a.x-b.x,a.y-b.y);\n    if(pinch0>0) zoomGoal=Math.min(8,Math.max(0.6,zoom0*d/pinch0));\n    return;\n  }\n  var dx=e.clientX-p.x, dy=e.clientY-p.y; p.x=e.clientX; p.y=e.clientY;\n  if(startPos&&Math.hypot(e.clientX-startPos.x,e.clientY-startPos.y)>6) moved=true;\n  yaw-=dx*0.011; pitch=Math.min(1.2,Math.max(-1.2,pitch+dy*0.008));\n});\nfunction up(e){\n  var had=pts[e.pointerId]; delete pts[e.pointerId];\n  if(had&&!moved&&Object.keys(pts).length===0&&e.type==='pointerup') tap(e.clientX,e.clientY);\n  if(Object.keys(pts).length===0) startPos=null;\n}\nel.addEventListener('pointerup',up); el.addEventListener('pointercancel',up);\nel.addEventListener('wheel',function(e){ e.preventDefault(); zoomGoal=Math.min(8,Math.max(0.6,zoomGoal*(e.deltaY<0?1.1:0.91))); idle=0; },{passive:false});\n\nvar ray=new THREE.Raycaster();\nfunction tap(x,y){\n  idle=0;\n  var r=el.getBoundingClientRect();\n  ray.setFromCamera(new THREE.Vector2(((x-r.left)/r.width)*2-1,-((y-r.top)/r.height)*2+1),camera);\n  var list=[];\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i];\n    if(!p.mesh.visible) continue;\n    if(p.layer==='skin'&&innerOn()) continue;\n    list.push(p.mesh);\n  }\n  var hits=ray.intersectObjects(list,false);\n  var g=null;\n  if(hits.length){ g=parts[hits[0].object.userData.part].group; }\n  post({ngmyBody:'pick',group:g});\n}\n\nfunction resize(){\n  var w=window.innerWidth||el.clientWidth, h=window.innerHeight||el.clientHeight;\n  renderer.setSize(w,h,false);\n  camera.aspect=w/Math.max(1,h);\n  // Keep the whole body in view on a narrow screen as well as a wide one.\n  camera.fov=19.3;\n  if(camera.aspect<0.62){ camera.fov=2*Math.atan(Math.tan(19.3*Math.PI/360)*(0.62/camera.aspect))*180/Math.PI; }\n  camera.updateProjectionMatrix();\n}\nwindow.addEventListener('resize',resize); resize();\n\nvar last=performance.now();\nfunction render(){\n  var beat=(t*S.bpm/60)%1;\n  var heart=1+0.16*Math.exp(-beat*7)+0.09*Math.exp(-Math.pow((beat-0.28)*9,2));\n  var breath=1+0.05*Math.sin(t*1.3);\n  var pulse=0.5+0.5*Math.sin(t*6);\n  for(var i=0;i<parts.length;i++){\n    var p=parts[i]; if(!p.mesh.visible) continue;\n    var s=p.anim===1?heart:(p.anim===2?breath:1); p.mesh.scale.setScalar(s);\n    if(p.mesh.material===p.mat){\n      if(p.group===S.sel){ p.mat.emissive.setRGB(.35*(.6+.4*pulse),.3*(.6+.4*pulse),.3*(.6+.4*pulse)); }\n      else if(p.layer==='skin'&&!p.fixed&&p.group!=='Hair'){ p.mat.emissive.copy(p.mat.color).multiplyScalar(.05); }\n      else { p.mat.emissive.setRGB(0,0,0); }\n    }\n  }\n  yawG.rotation.y=yaw; pitchG.rotation.x=pitch;\n  model.position.set(-target.x,-target.y,-target.z);\n  camera.position.set(0,0,DIST); camera.lookAt(0,0,0);\n  if(camera.zoom!==zoom){ camera.zoom=zoom; camera.updateProjectionMatrix(); }\n  window.__floor.position.y=-target.y-0.002;\n  renderer.render(scene,camera);\n}\nfunction frame(now){\n  requestAnimationFrame(frame);\n  var dt=Math.min(0.05,(now-last)/1000); last=now;\n  t+=dt; idle+=dt;\n  if(S.spin&&idle>1.5&&!S.sel) yaw+=dt*0.35;\n  var k=1-Math.exp(-dt*5);\n  zoom+=(zoomGoal-zoom)*k;\n  target.x+=(targetGoal.x-target.x)*k; target.y+=(targetGoal.y-target.y)*k; target.z+=(targetGoal.z-target.z)*k;\n  if(parts.length) render();\n}\nrequestAnimationFrame(frame);\npost({ngmyBody:'ready'});\n})();\n</script></body></html>"),!0)
v=window
v.toString
t.d=B.fy(v,"message",new C.c64(t),!1,x.gA)
t.b=u},
f8(d,e){var w,v
try{w=this.c
if(w!=null){w=B.Rh(w.contentWindow)
if(w!=null)J.aj_(w,e,"*")}}catch(v){}}}
C.yB.prototype={}
C.CU.prototype={}
C.nD.prototype={}
C.bcI.prototype={}
C.Vv.prototype={
S(){var w=x.N,v=x.y,u=x.S
return new C.aEn(B.T(w,x.a2),B.a([],x.cB),B.T(w,v),B.T(w,v),B.T(w,u),A.ay,A.H,A.H,B.aR(u),$,A.bC,0,B.a([],x.X),null,null)}}
C.aEn.prototype={
Y(){var w=this
w.a3()
w.me()
w.adu()
$.aW.x1$.push(new C.dQd(w))},
adu(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o
var $async$adu=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$adu)
case 6:q=e.tQ("ngmy_circuit_passed_v1")
r=q==null?A.Z:q
if(s.c!=null)s.m(new C.dPS(s,r))
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
return B.i($async$adu,v)},
adQ(d){return this.c60(d)},
c60(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n
var $async$adQ=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:s.cx.J(0,d)
u=3
w=6
return B.b(B.az(),$async$adQ)
case 6:r=f
q=s.cx
p=B.a4(q).k("k5<cg.E,m>")
q=B.C(new B.k5(q,new C.dPV(),p),p.k("M.E"))
r.aA("StringList","ngmy_circuit_passed_v1",q)
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
return B.i($async$adQ,v)},
ayG(d,e,f,g){var w="c"+this.y++,v=new C.CU(w,e,f,g)
this.d.n(0,w,v)
return v},
mM(d,e,f){return this.ayG(0,e,f,0)},
acP(d,e){var w
if(D.A_.h(0,d.b).d===2)w=e===0?-14:14
else w=0
return d.c.a5(0,new B.p(-36,w))},
uf(d,e){var w,v,u,t
for(w=this.e,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===d&&t.c===e){w=this.f.h(0,t.a)
return w===!0}}return!1},
aUB(d){var w,v,u,t,s,r,q,p,o,n=this,m=d==null?n.f9$:d
for(w=n.d,v=n.f,u=n.r,t=0;t<12;++t){for(s=new B.dq(w,w.r,w.e),r=!1;s.C();){q=s.d
switch(q.b){case"switch":p=u.h(0,q.a)
o=p===!0
break
case"clock":o=(A.o.ed(m,D.cW9[A.o.F(q.d,4)])&1)===0
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
bRX(){return this.aUB(null)},
mw(d){var w,v,u,t,s,r,q,p,o,n=this
n.bRX()
if(!n.ax)return
for(w=n.d,w=new B.b8(w,B.a4(w).k("b8<2>")).gae(0),v=new B.eB(w,new C.dQe()),u=n.f,t=n.w,s=0;v.C();){r=w.gR(0).a
if(u.h(0,r)===!0){q=n.f9$
p=t.h(0,r)
q=q-(p==null?-1000:p)>240}else q=!1
if(q){t.n(0,r,n.f9$)
o=s+1
G.dF(520+90*A.o.F(s,4),"",200,0,0.25,"square")
s=o}}},
ayH(d){var w=this
w.d.a8(0)
A.d.a8(w.e)
w.f.a8(0)
w.r.a8(0)
w.cy=null},
mf(d,e){var w=this.x
return new B.p(d*w.a,e*w.b)},
auU(d){var w=this
if(w.x.A(0,A.ay)){$.aW.x1$.push(new C.dPQ(w,d))
return}w.m(new C.dPR(w,d))},
cB5(d){this.m(new C.dPW(this,d,$.bGn()[d]))},
caL(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=d.ay
if(a0==null)return
w=$.bGn()[a0]
v=d.d
u=B.a4(v).k("b8<2>")
t=u.k("Y<M.E>")
s=t.k("M.E")
r=B.C(new B.Y(new B.b8(v,u),new C.dPL(),t),s)
A.d.aZ(r,new C.dPM())
q=B.C(new B.Y(new B.b8(v,u),new C.dPN(w),t),s)
v=w.c
if(r.length<v||q.length===0){d.m(new C.dPO(d,w))
return}u=d.r
p=B.dM(u,x.N,x.y)
t=x.s
o=B.a([],t)
for(s=A.o.dw(1,v),n=w.d,m=d.f,l=x.f7,k=0;k<s;++k){j=B.a([],l)
for(i=0;i<v;++i)j.push((A.o.ha(k,i)&1)===1)
for(i=0;i<v;++i)u.n(0,r[i].a,j[i])
d.aUB(0)
h=m.h(0,A.d.gH(q).a)
g=h===!0
if(g!==n.$1(j)){h=B.a([],t)
for(i=0;i<v;++i){f=B.lx(65+i)
e=j[i]?"ON":"OFF"
h.push(f+" "+e)}h=A.d.aO(h,", ")
f=g?"ON":"OFF"
j=n.$1(j)?"ON":"OFF"
o.push(h+": yours is "+f+" but it should be "+j)}}u.a8(0)
u.v(0,p)
d.m(new C.dPP(d,o,a0))},
azy(d){var w,v,u,t,s=this.d,r=B.a4(s).k("b8<2>")
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
cjM(d){var w,v,u,t,s,r=this.d,q=B.a4(r).k("b8<2>")
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
c1X(d){var w,v,u,t,s,r,q,p,o,n,m,l
for(w=this.d,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=44;w.C();){r=w.d
q=D.A_.h(0,r.b).d
for(p=r.a,o=0;o<q;++o){n=this.acP(r,o)
m=v-n.a
n=u-n.b
l=Math.sqrt(m*m+n*n)
if(l<s){t=new B.y(p,o)
s=l}}}return t},
bQH(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
for(w=this.e,v=a0.a,u=a0.b,t=this.d,s=0;s<w.length;++s){r=w[s]
q=t.h(0,r.a)
p=t.h(0,r.b)
if(q==null||p==null)continue
for(o=r.c,n=0;n<=24;++n){m=q.c
l=m.a+36
m=m.b+0
k=this.acP(p,o)
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
caN(d){var w,v,u,t=this,s=t.azy(d)
if(s!=null){w=t.d.h(0,s)
w.toString
B.eX()
t.cy=s
v=w.b
if(v==="switch"){w=t.r
v=w.h(0,s)
w.n(0,s,v!==!0)
if(t.ax){w=w.h(0,s)
w.toString
G.dF(w?900:600,"",40,0,0.25,"square")}}else if(v==="clock")w.d=(w.d+1)%4
t.m(new C.dPX())
return}u=t.bQH(d)
if(u!=null)t.m(new C.dPY(t,u))
else t.m(new C.dPZ(t))},
axw(d){return this.c5_(d)},
c5_(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$axw=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.azy(d)
if(s==null){w=1
break}B.jT()
t.m(new C.dPU(t,s))
case 1:return B.h(u,v)}})
return B.i($async$axw,v)},
bDr(d){if(this.x.A(0,A.ay))return
this.m(new C.dPK(this,d,A.cM))
B.eX()},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.cy,f=g==null?h:i.d.h(0,g)
g=i.ay
w=g==null?h:$.bGn()[g]
g=x.p
v=B.a([B.aG(h,h,h,h,B.X(i.ax?A.oA:V.t_,A.ab,h,h,h,21),h,h,h,new C.dQ7(i),h,h,h,h,"Sound",h)],g)
u=B.a([],g)
if(w!=null){t=B.n(16)
s=A.cr.j(0.14)
r=B.L(A.cr.j(0.5),A.r,1)
q=B.a([B.d("Challenge: "+w.a,h,h,h,h,h,h,D.fmd,h,h,h),B.d(w.b,h,h,h,h,h,h,H.aaT,h,h,h)],g)
p=i.ch
if(p.length!==0)q.push(new B.D(A.lf,B.d(p,h,h,h,h,h,h,B.l(h,h,i.CW?A.b9:A.f_,h,h,h,h,h,h,h,h,12,h,h,A.I,h,h,!0,h,h,h,h,h,h,h,h),h,h,h),h))
u.push(B.q(h,B.A(B.a([B.E(B.x(q,A.E,h,A.e,A.i,0,A.p),1),B.bI(D.fNm,h,i.gcaK(),B.bo(A.cr,h,h,h,h,h,h,h,h,h,h,A.ce))],g),A.m,h,A.e,A.i,0,h,h),A.f,h,h,new B.o(s,h,r,t,h,h,A.n),h,h,h,T.NQ,D.bBH,h,h,1/0))}u.push(B.E(B.cs(new C.dQ8(i)),1))
if(f!=null){t=B.n(14)
s=A.c.j(0.06)
r=f.b
u.push(B.q(h,B.d(D.A_.h(0,r).a+": "+D.A_.h(0,r).e,h,h,h,h,h,h,A.tA,h,h,h),A.f,h,h,new B.o(s,h,h,t,h,h,A.n),h,h,h,A.a_Q,A.bU,h,h,1/0))}u=B.x(u,A.m,h,A.e,A.i,0,A.p)
t=B.a([],g)
for(s=D.A_.gdO(D.A_),s=s.gae(s);s.C();){r=s.gR(s)
q=new B.aP(13,13)
p=r.b
o=p.c
n=o.j(0.16)
m=new B.ay(o.j(0.5),1,A.r,-1)
t.push(B.aA(h,B.q(h,B.x(B.a([B.X(p.b,o,h,h,h,20),A.bG,B.d(p.a,h,h,h,h,h,h,D.aVv,h,h,h)],g),A.m,h,A.e,A.P,0,A.p),A.f,h,h,new B.o(n,h,new B.bH(m,m,m,m),new B.bg(q,q,q,q),h,h,A.n),h,h,h,A.fy,Ah.NN,h,h,58),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.dQ9(i,r),h,h,h,h,h,h,!1,A.a4))}s=B.a([],g)
for(l=0;l<4;++l){k=D.dpe[l]
s.push(new E.fB(A.Pu,k.b,new C.dQa(i,k),A.cr,h))}s.push(new E.fB(K.ww,"Clear",new C.dQb(i),A.c_,h))
r=B.a([],g)
for(j=0;q=$.bGn(),j<6;++j){q=q[j]
p=i.cx.q(0,j)?A.ea:A.lL
o=i.ay
n=i.cx.q(0,j)?A.b9:A.bq
r.push(new E.dW(q.a,o===j,new C.dQc(i,j),p,n,h))}return E.ly(A.cr,v,"This is how computers think. A signal is either ON or OFF, and logic gates decide what comes next.\n\nPut parts on the board from the shelf. Drag from the right dot of one part to a left dot of another to connect them. Wires turn yellow when the signal on them is ON. Tap a Switch to flip it. Tap a wire to cut it. Press and hold a part to remove it.\n\nTap a part to read its rule. Try the Examples (including a half adder, which adds two bits, and a memory that remembers). Then try the Challenges: build the circuit that does the job, and press Check.",u,"CIRCUIT LAB",B.x(B.a([new E.fb(t,"PARTS",h),new E.fb(s,"TRY",h),new E.fb(r,"TASKS",h)],g),A.m,h,A.e,A.P,0,A.p))}}
C.bd0.prototype={
a4(a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=null,a3=a6.a,a4=a6.b
$.S()
w=B.J()
w.r=D.afd.gp(0)
a5.aq(new B.a3(0,0,0+a3,0+a4),w)
v=B.J()
v.r=A.c.j(0.05).gp(0)
for(u=20;u<a4;u+=28)for(t=14;t<a3;t+=28)a5.N(new B.p(t,u),1,v)
for(a3=this.b,a4=a3.e,w=a4.length,s=a3.f,r=x.v,q=a3.d,p=0;p<a4.length;a4.length===w||(0,B.K)(a4),++p){o=a4[p]
n=o.a
m=q.h(0,n)
l=q.h(0,o.b)
if(m==null||l==null)continue
k=m.c
j=k.a+36
k=k.b+0
i=a3.acP(l,o.c)
h=s.h(0,n)===!0
n=$.S()
g=B.a([],r)
f=new B.aF(n.r,A.ai,a2,a2,g)
g.push(new B.aZ(j,k))
f.aa()
n=i.a
e=Math.max(40,Math.abs(n-j)*0.5)
d=i.b
d=new B.kP(j+e,k,n-e,d,n,d)
g.push(d)
n=f.f
if(n!=null)d.aj(n)
f.aa()
if(h){n=new B.ap(A.S,A.N,A.U,A.V,A.T)
n.b=A.aa
n.c=9
n.r=A.bq.j(0.28).gp(0)
n.y=N.op
a5.af(f,n)}n=new B.ap(A.S,A.N,A.U,A.V,A.T)
n.b=A.aa
n.c=3.2
n.d=A.bB
n.r=(h?A.dF:A.bv).gp(0)
a5.af(f,n)}a0=a3.as
if(a0!=null&&q.h(0,a0)!=null){a1=q.h(0,a0).c.a5(0,D.Jq)
i=a3.at
a3=i.a
a4=a1.a
e=Math.max(40,Math.abs(a3-a4)*0.5)
r=new B.aF($.S().r,A.ai,a2,a2,B.a([],r))
w=a1.b
r.D(new B.aZ(a4,w))
s=i.b
r.D(new B.kP(a4+e,w,a3-e,s,a3,s))
s=B.J()
s.b=A.aa
s.c=3
s.r=A.ab.gp(0)
a5.af(r,s)}for(a3=new B.dq(q,q.r,q.e);a3.C();)this.caM(a5,a3.d)},
caM(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=a0.b,e=D.A_.h(0,f)
e.toString
w=this.b
v=a0.a
u=w.f.h(0,v)===!0
t=B.bB(a0.c,64,64)
s=B.bn(t,A.jJ)
r=w.cy===v
q=s.eQ(A.cA)
$.S()
p=B.J()
p.r=A.w.j(0.55).gp(0)
p.y=A.mf
d.am(q,p)
if(u)q=f==="led"||f==="buzzer"
else q=!1
if(q){q=a0.c
p=B.J()
p.sav(new B.c0(A.A,0.5,A.x,g,0,B.a([e.c.j(0.6),A.L],x.O),g,g).aJ(0,B.bX(a0.c,52)))
d.N(q,52,p)}q=s.eQ(A.cL)
p=B.J()
o=e.c
p.r=B.ar(o,A.w,0.65).gp(0)
d.am(q,p)
n=u?0.35:0
q=B.J()
p=B.ar(o,A.c,0.1+n)
p.toString
m=B.ar(o,A.w,u?0.2:0.45)
m.toString
q.sav(new B.a9(A.b6,A.b8,A.x,B.a([p,m],x.O),g,g).aJ(0,t))
d.am(s,q)
q=B.J()
q.b=A.aa
q.c=r?2.6:1.2
q.r=(r?A.c:A.c.j(0.35)).gp(0)
d.am(s,q)
if(f==="switch"){v=w.r.h(0,v)
l=v===!0?F.pr:D.bRp}else l=e.b
k=C.h9J(B.lx(l.a),30,A.c,l.b,g,A.I)
v=a0.c
q=k.b
p=q.c
q=q.a.c
k.a4(d,v.aK(0,new B.p(p/2,q.gba(q)/2)))
j=C.h9J(e.a,10.5,A.c,g,g,A.I)
j.a4(d,a0.c.a5(0,new B.p(-j.b.c/2,38)))
e=e.d
if(e===0||f==="led"||f==="buzzer")f=u?"ON":"OFF"
else f=""
i=C.h9J(f,9,u?A.dF:A.bV,g,g,A.u)
i.a4(d,a0.c.a5(0,new B.p(-i.b.c/2,51)))
for(h=0;h<e;++h)this.b0C(d,w.acP(a0,h),o)
this.b0C(d,a0.c.a5(0,D.Jq),o)},
b0C(d,e,f){var w
$.S()
w=B.J()
w.r=D.afd.gp(0)
d.N(e,8.5,w)
w=B.J()
w.b=A.aa
w.c=2.2
w.r=f.gp(0)
d.N(e,8.5,w)
w=B.J()
w.r=A.c.gp(0)
d.N(e,3.2,w)},
aE(d){return!0}}
C.aMX.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.bzm.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a1(0)
w=this.h6$
w===$&&B.c()
w.t()
this.byG()}}
C.O5.prototype={
S(){return new C.aEE(B.mT(0,null,null))}}
C.L6.prototype={
a7(){return"_UnfoldStyle."+this.b}}
C.B1.prototype={}
C.aEE.prototype={
caS(d,e){var w=this,v=w.e
if(v.f.length!==0){v=v.gco(0).at
v.toString
w.f=v}w.m(new C.dWb(w,e))},
c3Q(){var w=this
w.e.t()
w.e=B.mT(w.f,null,null)
w.m(new C.dWa(w))},
t(){this.e.t()
this.a2()},
B(d){var w=this,v=null,u=w.d,t=u==null
return B.oH(t,B.c4(v,A.c2,t?new C.bth(w.e,w.gcaR(w),new C.dWc(d),v):new C.aIR(u,new B.bP(u.b,x.gj)),v,!1,!1,v,!1),new C.dWd(w,u),x.K)}}
C.buU.prototype={}
C.bth.prototype={
b0D(d,e){var w=null
return new B.D(R.a0g,B.x(B.a([B.d(d,w,w,w,w,w,w,D.fmP,w,w,w),A.bG,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.E,w,A.e,A.i,0,A.p),w)},
B(d){var w=this,v=null,u=x.p,t=B.A(B.a([B.aG(v,v,v,v,A1.ml,v,v,v,w.e,v,v,v,v,v,v),A.ts,D.bHX],u),A.m,v,A.e,A.i,0,v,v),s=w.b0D("STUDIOS","Play, make things, and keep what you make")
$.bGo()
return B.bm(!1,B.x(B.a([new B.D(D.bGR,t,v),B.E(B.vX(0,v,A.t,w.c,A.y,v,v,v,v,v,!1,v,A.ah,!1,B.a([new B.mq(s,v),new B.oa(A.hU,B.PH(new B.oK(new C.f72(d),9,!0,!0,!0,0,B.tl(),v),D.aTm),v),new B.mq(w.b0D("SCENES","Each one is a studio too: change the style, colours and words"),v),new B.oa(D.bBP,B.PH(new B.oK(new C.f73(w),6,!0,!0,!0,0,B.tl(),v),D.aTm),v)],u)),1)],u),A.m,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0)}}
C.afP.prototype={
B(d){var w,v,u,t,s,r=null,q=this.c,p=q.d,o=B.n(20),n=B.n(20),m=B.ar(I.m6,p,0.3)
m.toString
w=x.O
m=B.a([m,D.aio],w)
v=B.L(p.j(0.6),A.r,1.2)
u=x.V
t=B.a([new B.ac(-4,A.G,p.j(0.22),A.H,14)],u)
s=B.ar(p,A.w,0.45)
s.toString
w=B.a([p,s],w)
u=B.a([new B.ac(0,A.G,p.j(0.5),A.H,12)],u)
return B.aJ(!1,A.a3,!0,r,B.aO(!1,o,!0,B.eI(B.x(B.a([B.q(r,B.X(q.c,A.c,r,r,r,24),A.f,r,r,new B.o(r,r,r,r,u,new B.a9(A.aA,A.aF,A.x,w,r,r),A.a7),r,44,r,r,r,r,r,44),A.Q,B.d(q.a,r,2,A.a2,r,r,r,B.l(r,r,p,r,r,r,r,r,r,r,r,10.5,r,r,A.u,r,1.15,!0,r,0.5,r,r,r,r,r,r),A.K,r,r),A.cU,B.d(q.b,r,2,A.a2,r,r,r,B.l(r,r,A.c.j(0.6),r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.2,!0,r,r,r,r,r,r,r,r),A.K,r,r)],x.p),A.m,r,A.ba,A.i,0,A.p),r,new B.o(r,r,v,n,t,new B.a9(A.aA,A.aF,A.x,m,r,r),A.n),r,A.GW,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.aj)}}
C.aeH.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.c,i=j.d,h=B.n(20),g=B.n(20),f=B.ar(I.m6,A.d.gH(i),0.24)
f.toString
w=x.O
f=B.a([f,D.aio],w)
v=B.L(A.d.gH(i).j(0.35),A.r,1)
u=x.V
t=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cA,12)],u)
s=x.p
r=B.a([],s)
for(q=j.e,p=0;p<3;++p){o=p===2?0:4
n=new B.aP(6,6)
m=B.a([A.d.gH(i),A.d.gal(i)],w)
l=B.a([new B.ac(0,A.G,A.w.j(0.45),R.aLC,0)],u)
r.push(B.q(k,B.X(q[p],A.c,k,k,k,11),A.f,k,k,new B.o(k,k,k,new B.bg(n,n,n,n),l,new B.a9(A.a6,A.a9,A.x,m,k,k),A.n),k,17,k,new B.Q(p*4,0,(2-p)*4,o),k,k,k,k))}w=B.x(r,A.m,k,A.e,A.P,0,A.p)
u=B.ar(A.d.gH(i),A.d.gal(i),0.4)
u.toString
return B.aJ(!1,A.a3,!0,k,B.aO(!1,h,!0,B.eI(B.x(B.a([new B.a5(58,k,w,k),A.X,B.d(j.b,k,2,A.a2,k,k,k,B.l(k,k,u,k,k,k,k,k,k,k,k,10.5,k,k,A.u,k,1.2,!0,k,0.6,k,k,k,k,k,k),A.K,k,k),A.aw,B.X(A.CZ,A.d.gH(i),k,k,k,18)],s),A.m,k,A.ba,A.i,0,A.p),k,new B.o(k,k,v,g,t,new B.a9(A.aA,A.aF,A.x,f,k,k),A.n),k,A.GW,k),k,!0,k,k,k,k,k,k,k,k,k,k,k,this.d,k,k,k,k,k,k,k),A.f,A.L,0,k,k,k,k,k,A.aj)}}
C.QY.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.e,h=B.ar(A.d.gal(i),A.w,0.62)
h.toString
w=k.c
v=k.d
h=B.ao(-8,B.c3(j,new B.o(h,j,j,B.n(22),j,j,A.n),A.bi),j,j,2,2,8,j)
u=B.n(22)
t=k.y
s=x.V
r=B.a([new B.ac(0,A.G,A.w.j(0.55),A.Jn,26),new B.ac(-6,A.G,A.d.gH(i).j(0.1+0.4*t),A.H,30)],s)
q=B.n(22)
p=B.ar(A.d.gH(i),A.c,0.14)
p.toString
o=A.d.gH(i)
n=A.d.gal(i)
i=B.ar(A.d.gal(i),A.w,0.45)
i.toString
m=x.O
l=x.p
m=B.a([B.bR(0,B.c3(j,new B.o(j,j,j,j,j,new B.a9(A.aA,A.aF,A.x,B.a([p,o,n,i],m),D.duV,j),A.n),A.bi),0,0,0),B.ao(j,B.c3(j,new B.o(j,j,j,j,j,new B.a9(A.b6,A.b8,A.x,B.a([A.c.j(0.28),A.c.j(0)],m),j,j),A.n),A.bi),v*0.52,j,0,0,0,j)],l)
i=k.z
if(i>=0)m.push(B.bR(0,B.b4(j,j,j,new C.buh(i,j),A.ay),0,0,0))
i=A.c.j(0.16)
p=B.L(A.c.j(0.5),A.r,1.4)
s=B.a([new B.ac(0,A.G,A.c.j(0.25*t),A.H,14)],s)
s=B.q(j,B.X(k.f,A.c,j,j,j,28),A.f,j,j,new B.o(i,j,p,j,s,j,A.a7),j,54,j,j,j,j,j,54)
p=B.a([B.d(k.r,j,j,j,j,j,j,D.foA,j,j,j)],l)
i=k.w
if(i.length!==0)A.d.v(p,B.a([A.aw,B.d(i,j,1,A.a2,j,j,j,B.l(j,j,A.c.j(0.78),j,j,j,j,j,j,j,j,12,j,j,A.a8,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],l))
p.push(A.UU)
p.push(B.q(j,j,A.f,j,j,new B.o(A.c.j(0.28),j,j,B.n(3),j,j,A.n),j,5,j,j,j,j,j,w*0.42))
m.push(new B.D(A.h0,B.A(B.a([s,A.ev,B.E(B.x(p,A.E,j,A.e,A.P,0,A.p),1)],l),A.m,j,A.e,A.i,0,j,j),j))
i=k.x
if(i>0)m.push(B.bR(0,new B.dx(!0,B.e8(j,A.w.j(A.j.E(i*0.6,0,0.7)),!0),j),0,0,0))
i=B.n(22)
m.push(B.bR(0,new B.dx(!0,B.c3(j,new B.o(j,j,B.L(A.c.j(0.3),A.r,1.2),i,j,j,A.n),A.bi),j),0,0,0))
return new B.a5(w,v,new B.an(A.a0,j,A.ad,A.f,B.a([h,B.bR(0,B.c3(B.bx(q,new B.an(A.a0,j,A.ad,A.t,m,j),A.aq),new B.o(j,j,j,u,r,j,A.n),A.bi),0,0,0)],l),j),j)}}
C.buh.prototype={
a4(d,e){var w,v,u,t,s=e.a,r=-s*0.4+s*1.8*this.b
s=r+s*0.28
w=-10+(e.b+20)
v=new B.a3(r,-10,s,w)
u=d.c
J.br(u.save())
u.translate(v.gbF().a,v.gbF().b)
d.hW(0,0.35)
t=B.bB(A.H,(w- -10)*1.6,s-r)
$.S()
s=B.J()
s.sav(new B.a9(A.a6,A.a9,A.x,B.a([A.L,A.c.j(0.3),A.L],x.O),null,null).aJ(0,t))
d.aq(t,s)
u.restore()},
aE(d){return d.b!==this.b}}
C.btN.prototype={
B(d){var w=null,v=B.n(22),u=B.a([D.boH,D.ahu],x.O),t=this.e,s=B.L(A.d.gH(t).j(0.4),A.r,1.2),r=B.a([new B.ac(0,A.G,A.w.j(0.5),A.kz,24)],x.V),q=B.n(22),p=A.d.gH(t)
return new B.a5(this.c,this.d,B.c3(B.bx(q,B.b4(B.at(B.X(A.jE,A.d.gH(t).j(0.7),w,w,w,34),w,w,w),w,w,new C.bbF(p,w),A.ay),A.aq),new B.o(w,w,s,v,r,new B.a9(A.aA,A.aF,A.x,u,w,w),A.n),A.bi),w)}}
C.bbF.prototype={
a4(d,e){var w,v,u,t,s,r
$.S()
w=B.J()
v=this.b
w.r=v.j(0.09).gp(0)
w.c=1
for(u=e.a,t=e.b,s=0;s<u;s+=18)d.ah(new B.p(s,0),new B.p(s,t),w)
for(r=0;r<t;r+=18)d.ah(new B.p(0,r),new B.p(u,r),w)
u=e.ej(A.H)
$.S()
t=B.J()
t.b=A.aa
t.c=1.4
t.r=v.j(0.35).gp(0)
d.N(u,30,t)},
aE(d){return!1}}
C.aIR.prototype={
S(){return new C.aIS(new B.cw(null,x.A),null,null)}}
C.aIS.prototype={
guE(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,D.bz6,null,1,null,v)
w.cP(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
ga_n(){var w,v=this,u=v.e
if(u===$){w=B.bl(null,A.h_,null,1,null,v)
w.fs(0,!0)
v.e!==$&&B.bF()
v.e=w
u=w}return u},
gayI(){var w=this.r
return w===$?this.r=this.a.c.a:w},
gcaP(){var w=this.w
if(w===$){w=B.C(this.a.c.d,x.G)
this.w=w}return w},
gaXU(){var w=this.x
if(w===$){w=B.C(this.a.c.e,x.Z)
this.x=w}return w},
gaYH(){var w=this.y
if(w===$){w=B.C(this.a.c.f,x.N)
this.y=w}return w},
gb9s(){var w=this.z
if(w===$){w=B.C(this.a.c.r,x.N)
this.z=w}return w},
Y(){this.a3()
var w=this.guE()
w.dk()
w.dV$.J(0,this.gcAP())},
cAQ(){var w,v,u,t,s,r,q,p=this,o=p.guE().x
o===$&&B.c()
if(o<p.ax){p.ax=0
p.ay=!1}if(p.at&&p.as){switch(p.gayI().a){case 0:w=D.nJ
break
case 1:w=D.v3
break
case 2:w=D.a4U
break
case 3:w=D.nJ
break
case 4:w=D.dhr
break
case 5:w=D.v3
break
default:w=null}for(v=0;v<3;++v){u=w[v]
t=p.r
if(t===$){t=p.r=p.a.c.a
s=t}else s=t
if(t===D.acU)r=0.09
else r=s===D.acV?0.18:0.06
q=u+r
if(p.ax<q&&o>=q){G.dF(260+90*v,"",260,1.6,0.18,"tri")
u=D.c9y[v]
E.mm("bell",u+12,1000,0.55)}}if(!p.ay&&o>=0.55){p.ay=!0
C.JC("bell",D.cim,1400,0.35)}}p.ax=o},
t(){this.guE().t()
this.ga_n().t()
this.bAu()},
aeW(){var w=this
w.guE().d_Y(0,B.dv(0,0,0,A.j.V(11e3/w.Q),0,0))
w.m(new C.f6J(w))},
clP(){this.guE().bQ(0)
this.m(new C.f6I(this))},
aeV(){var w=0,v=B.j(x.H),u=this,t,s,r,q,p,o,n,m,l
var $async$aeV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=x.cF
l=B.a([],m)
for(t=u.gaYH(),s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
l.push(new B.au(new B.ba(q,A.b5,A.aP),$.aw()))}m=B.a([],m)
for(t=u.gb9s(),s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){p=t[r]
m.push(new B.au(new B.ba(p,A.b5,A.aP),$.aw()))}o=B.C(u.gaXU(),x.Z)
t=u.c
t.toString
w=2
return B.b(B.bT(I.m6,null,new C.f6H(u,l,m,o),t,!0,!0,!0,A.lS,!1,!1,x.H),$async$aeV)
case 2:l=B.C(l,x.bO)
A.d.v(l,m)
m=l.length
r=0
for(;r<m;++r){n=l[r]
n.T$=$.aw()
n.P$=0}return B.h(null,v)}})
return B.i($async$aeV,v)},
B(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.gayI(),f=i.a.c,e=f.b,d=i.gcaP(),a0=new C.B1(g,e,f.c,d,i.gaXU(),i.gaYH(),i.gb9s())
f=B.ar(A.d.gH(d),A.d.gal(d),0.4)
f.toString
g=x.p
w=B.a([B.aG(h,h,h,h,B.X(i.at?A.oA:V.t_,A.ab,h,h,h,21),h,h,h,new C.f6R(i),h,h,h,h,"Sound",h),B.aG(h,h,h,h,D.c0c,h,h,h,i.gcaQ(),h,h,h,h,"Edit words and pictures",h),B.aG(h,h,h,h,K.oE,h,h,h,new C.f6S(i,a1),h,h,h,h,"Share",h)],g)
v=B.a([B.c9(i.ga_n(),new C.f6T(i,a0),h),B.cs(new C.f6U(i,a0))],g)
u=i.as
t=u?i.gclO():i.gcaT()
u=u?D.bQH:A.rZ
s=B.ar(A.d.gH(d),A.d.gal(d),0.4)
s.toString
t=B.A(B.a([B.aG(h,h,h,h,B.X(u,s,h,h,h,34),h,h,h,t,h,h,h,h,h,A.ce),B.E(B.c9(i.guE(),new C.f6V(i,a1,a0),h),1),B.aG(h,h,h,h,D.bXt,h,h,h,new C.f6W(i),h,h,h,h,"Replay",A.ce)],g),A.m,h,A.e,A.i,0,h,h)
s=i.Q
u=A.j.ad(s,1)
r=B.ar(A.d.gH(d),A.d.gal(d),0.4)
r.toString
s=E.iO(r,u+"x","Speed",2.5,0.4,new C.f6X(i),s)
u=B.a([],g)
for(q=0;q<6;++q){p=D.ds0[q]
o=i.r
if(o===$)o=i.r=i.a.c.a
r=B.ar(A.d.gH(d),A.d.gal(d),0.4)
r.toString
u.push(new E.dW(p.b,o===p.a,new C.f6Y(i,p),p.c,r,h))}d=B.a([],g)
for(r=x.G,q=0;q<10;++q){n=D.c9W[q]
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
d.push(B.aA(h,B.q(h,h,A.f,h,h,new B.o(h,h,new B.bH(j,j,j,j),h,h,new B.a9(A.aA,A.aF,A.x,n,h,h),A.a7),h,l,h,K.akV,h,h,h,m),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f6Z(i,n),h,h,h,h,h,h,!1,A.a4))}return E.ly(f,w,"A scene that builds itself. Everything on it is yours to change.\n\nStyle switches how it builds: Fold, Flip, Rise, Assemble, Spin or Pop. Theme changes the colours. Edit lets you write your own words and pick your own pictures for the three slabs.\n\nDrag the timeline to scrub through it, change the speed, pause on any moment, and Share saves a picture of your scene.",new B.em(new B.an(A.a0,h,A.b2,A.t,v,h),i.f),e,B.x(B.a([t,s,new E.fb(u,"STYLE",h),new E.fb(d,"THEME",h)],g),A.m,h,A.e,A.P,0,A.p))},
bCC(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=2;r>=0;--r){q=D.nJ[r]
p=A.j.E((1-A.ep.aC(0,A.j.E((a0-q)/(q+0.15-q),0,1)))*3.141592653589793/2,-0.1,1.5707963267948966)
o=A.j.E(p/1.5707963267948966,0,1)
q=D.nJ[r]
n=q+0.12
m=A.j.E((a0-n)/(q+0.2-n),0,1)
n=D.nJ[r]
q=n-0.01
q=A.j.E((a0-q)/(n+0.03-q),0,1)
n=B.dr()
l=n.a
l.$flags&2&&B.aj(l)
l[11]=0.0013
n.kl(p)
l=v[r]
k=u[r]
j=t[r]
i=D.nJ[r]
h=i+0.1
if(A.j.E((a0-h)/(i+0.3-h),0,1)>0){i=D.nJ[r]
h=i+0.1
h=A.j.E((a0-h)/(i+0.3-h),0,1)<1
i=h}else i=!1
if(i){i=D.nJ[r]
h=i+0.1
h=A.j.E((a0-h)/(i+0.3-h),0,1)
i=h}else i=-1
e.push(new B.cL(0,r*118,0,f,f,f,new B.kE(q,new B.iQ(n,f,A.b6,!0,f,new C.QY(a2,112,w,l,k,j,o,m*s,i,f),f),f),f))}for(r=1;r<3;++r){v=D.nJ[r]
u=v-0.02
g=A.j.E((a0-u)/(v+0.1-u),0,1)
u=A.d.gH(w)
v=D.nJ[r]
t=v+0.12
e.push(new B.cL(0,r*118-3-2,0,f,f,4,new B.mB(new C.bsT(u,g,1-A.j.E((a0-t)/(v+0.22-t),0,1),f),f,A.ay,f,f),f))}return new B.a5(a2,358,new B.an(A.a0,f,A.ad,A.f,e,f),f)},
bTu(d,a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=B.a([],x.p)
for(w=d.d,v=d.e,u=d.f,t=d.r,s=0.4+0.6*a1,r=0;r<3;++r){q=D.v3[r]
p=A.qn.aC(0,A.j.E((a0-q)/(q+0.17-q),0,1))
o=(1-p)*3.141592653589793
n=1+Math.sin(p*3.141592653589793)*0.08
q=D.v3[r]
m=q+0.15
l=A.j.E((a0-m)/(q+0.25-m),0,1)
m=D.v3[r]
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
g=new C.QY(a2,108,w,k,j,i,h*0.5,l*s,g,f)
k=g}else{k=B.dr()
k.fL(3.141592653589793)
k=new B.iQ(k,f,A.A,!0,f,new C.btN(a2,108,w,f),f)}e.push(new B.cL(0,r*130,0,f,f,f,new B.kE(q,new B.iQ(m,f,A.A,!0,f,k,f),f),f))}return new B.a5(a2,378,new B.an(A.a0,f,A.ad,A.f,e,f),f)},
cFX(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=Math.min(300,g*0.95),l=B.a([],x.n)
for(w=0;w<3;++w){v=D.a4U[w]
l.push(A.cx.aC(0,A.j.E((e-v)/(v+0.2-v),0,1)))}v=B.a([B.bR(0,B.b4(n,n,n,new C.bwn(d.d,l,D.azQ,m,C.btg(e,0.4,0.62),f,C.btg(e,0.45,0.7),n),A.ay),0,0,0)],x.p)
for(u=d.e,t=g*0.23,s=m+36,w=0;w<3;++w){r=C.hag(g,w)
q=D.azQ[w]
p=l[w]
o=p>0.85?1:0
v.push(new B.cL(r,s-q*m*p+12,n,n,t,n,new B.kE(o,B.X(u[w],A.c,n,n,n,26),n),n))}for(l=m+52,u=d.f,w=0;w<3;++w){s=C.hag(g,w)
r=D.a4U[w]
q=r+0.15
v.push(new B.cL(s,l,n,n,t,n,new B.kE(A.j.E((e-q)/(r+0.25-q),0,1),B.d(u[w],n,n,n,n,n,n,A.VH,A.K,n,n),n),n))}return new B.a5(g,m+90,new B.an(A.a0,n,A.ad,A.f,v,n),n)},
bIU(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a5*0.62,d=(1-A.cx.aC(0,C.btg(a3,0.02,0.5)))*3.141592653589793*3+a3*1.6,a0=B.a([],x.p),a1=a2.d
a0.push(B.bR(0,B.at(B.dP(B.b4(f,f,f,new C.bsj(A.d.gH(a1),C.btg(a3,0,0.2),a4,f),new B.av(a5*0.95,70)),D.ejX),f,f,f),0,0,0))
w=B.a([],x.fT)
for(v=a2.e,u=a2.f,t=a2.r,s=0.5+0.5*a4,r=a3*3,q=0;q<3;++q){p=q*2*3.141592653589793/3+d
o=(Math.cos(p)+1)/2
n=Math.sin(p)
m=q*0.06
l=0.02+m
k=A.j.E((a3-l)/(0.12+m-l),0,1)
j=A.dy.aC(0,A.j.E((o-0.7)/0.3,0,1))
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
w.push(new B.y(o,new B.cL(0,0,0,0,f,f,new B.ce(A.A,f,f,new B.kE(k*(0.45+0.55*o),B.dP(new B.iQ(l,f,A.A,!0,f,new C.QY(e,100,a1,m,i,h,1-o,j*s,g,f),f),new B.p(n*a5*0.34,-o*18)),f),f),f)))}A.d.aZ(w,new C.f6A())
A.d.v(a0,new B.N(w,new C.f6B(),x.fR))
return new B.a5(a5,330,new B.an(A.a0,f,A.ad,A.f,a0,f),f)},
caO(a1,a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a4*0.86,a0=B.a([],x.p)
for(w=a1.d,v=a1.e,u=a1.f,t=a1.r,s=0.4+0.6*a3,r=d+120,q=0;q<3;++q){p=D.v3[q]
o=A.j.E((a2-p)/(p+0.22-p),0,1)
n=A.kK.aC(0,o)
p=Math.sin(o*3.141592653589793*6)
m=D.v3[q]
m=A.j.E((a2-m)/(m+0.02-m),0,1)
l=D.aBX[q]
k=B.dr()
k.n_(p*(1-o)*0.06)
p=Math.max(0.01,n)
k.k5(p,p,p,1)
p=v[q]
j=u[q]
i=t[q]
h=D.v3[q]
g=h+0.1
g=A.j.E((a2-g)/(h+0.25-g),0,1)
h=o>0.6?(o-0.6)/0.4:-1
a0.push(new B.cL(0,0,0,0,e,e,new B.ce(A.A,e,e,new B.kE(m,B.dP(new B.iQ(k,e,A.A,!0,e,new C.QY(d,92,w,p,j,i,0,g*s,h,e),e),new B.p(0,l)),e),e),e))
l=D.v3[q]
h=l+0.02
f=A.j.E((a2-h)/(l+0.3-h),0,1)
if(f>0&&f<1)a0.push(new B.cL(0,0,0,0,e,e,new B.ce(A.A,e,e,B.dP(new B.mB(new C.bcl(w,f,q,e),e,new B.av(r,212),e,e),new B.p(0,D.aBX[q])),e),e))}return new B.a5(a4,330,new B.an(A.a0,e,A.ad,A.f,a0,e),e)},
bFy(a7,a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b0*0.84,a5=[new B.p(-b0,-150),new B.p(b0,-40),D.ek0],a6=B.a([],x.p)
for(w=a7.d,v=a7.e,u=a7.f,t=a7.r,s=0.4+0.6*a9,r=0;r<3;++r){q=D.nJ[r]
p=A.j.E((a8-q)/(q+0.2-q),0,1)
o=A.cx.aC(0,p)
q=D.aC7[r]
n=a5[r]
m=n.a
n=n.b
l=1-o
k=l*l
j=2*l*o
i=o*o
h=(r&1)===0?2.8:-2.8
g=D.nJ[r]
f=g+0.2
e=A.j.E((a8-f)/(g+0.3-f),0,1)
f=D.nJ[r]
g=f-0.01
g=A.j.E((a8-g)/(f+0.03-g),0,1)
f=B.dr()
d=f.a
d.$flags&2&&B.aj(d)
d[11]=0.001
f.n_(l*h+D.dlJ[r]*o)
f.fL(l*0.9)
h=0.55+0.45*o
f.k5(h,h,h,1)
h=v[r]
d=u[r]
a0=t[r]
a1=p>0.7?(p-0.7)/0.3:-1
a6.push(new B.cL(0,0,0,0,a3,a3,new B.ce(A.A,a3,a3,new B.kE(g,B.dP(new B.iQ(f,a3,A.A,!0,a3,new C.QY(a4,96,w,h,d,a0,l*0.4,e*s,a1,a3),a3),new B.p(k*m+j*(m*0.35)+i*0,k*n+j*(n*0.2-90)+i*q)),a3),a3),a3))
q=D.nJ[r]
i=q+0.17
a2=A.j.E((a8-i)/(q+0.33-i),0,1)
if(a2>0&&a2<1){q=D.aC7[r]
a6.push(new B.cL(0,0,0,0,a3,a3,new B.ce(A.A,a3,a3,B.dP(new B.mB(new C.bsl(A.d.gH(w),a2,a3),a3,new B.av(a4,30),a3,a3),new B.p(0,q+48-4)),a3),a3))}}return new B.a5(b0,330,new B.an(A.a0,a3,A.ad,A.f,a6,a3),a3)}}
C.bsT.prototype={
a4(d,e){var w,v,u,t,s,r=this,q=r.c
if(q<=0||r.d<=0)return
w=e.a/2
v=w*q
u=new B.a3(w-v,0,w+v,e.b)
q=B.bn(u,A.hv)
$.S()
t=B.J()
s=0.9*r.d
t.r=r.b.j(s).gp(0)
t.y=N.op
d.am(q,t)
t=B.bn(u,A.hv)
q=B.J()
q.r=A.c.j(s).gp(0)
d.am(t,q)},
aE(d){return d.c!==this.c||d.d!==this.d}}
C.bsj.prototype={
a4(d,e){var w,v,u=this.c,t=B.bB(e.ej(A.H),e.b*u,e.a*u)
$.S()
u=B.J()
u.b=A.aa
u.c=10
w=this.b
u.r=w.j(0.12+0.1*this.d).gp(0)
u.y=U.Oe
d.bY(t,u)
u=B.J()
u.b=A.aa
u.c=2.5
u.r=w.j(0.7).gp(0)
d.bY(t,u)
u=t.cn(-14)
v=B.J()
v.b=A.aa
v.c=1
v.r=w.j(0.3).gp(0)
d.bY(u,v)},
aE(d){return!0}}
C.bcl.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.ej(A.H),h=this.c,g=A.cx.aC(0,h)
$.S()
w=B.J()
w.b=A.aa
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
k=new B.ap(A.S,A.N,A.U,A.V,A.T)
j=(q&1)===0?A.d.gH(u):A.c
k.r=j.j(A.j.E(v,0,1)).gp(0)
d.N(new B.p(s+n*o*1.6,r+(m*o+w)),(2+l*3)*h,k)}},
aE(d){return!0}}
C.bsl.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o=e.ej(A.H)
for(w=e.a,v=e.b,u=this.b,t=this.c,s=0;s<2;++s){r=A.j.E(t-s*0.18,0,1)
if(r<=0)continue
q=B.bB(o,v*(0.3+r*0.9),w*(0.5+r*0.7))
$.S()
p=new B.ap(A.S,A.N,A.U,A.V,A.T)
p.b=A.aa
p.c=2
p.r=u.j((1-r)*0.7).gp(0)
d.bY(q,p)}},
aE(d){return d.c!==this.c}}
C.bwn.prototype={
a4(d1,d2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=this,c1=null,c2=c0.e,c3=c2+36,c4=d2.a,c5=c4*0.23,c6=c5*0.34,c7=c6*0.85,c8=-c6*0.5,c9=c3-4,d0=new B.a3(0,c9,0+c4,c9+60)
$.S()
c9=B.J()
w=c0.b
v=x.O
c9.sav(new B.a9(A.b6,A.b8,A.x,B.a([A.d.gH(w).j(0.18),A.L],v),c1,c1).aJ(0,d0))
d1.aq(d0,c9)
c9=B.J()
c9.r=A.c.j(0.18).gp(0)
c9.c=1
d1.ah(new B.p(0,c3),new B.p(c4,c3),c9)
for(c9=c0.w,u=c9>0,t=(c5-16)/3,s=t-5,r=0.6+0.3*c0.r,q=c0.f,p=c3-14,o=x.v,n=c3+c8,m=c0.d,l=c3-6,k=c5+c7+8,j=l+16,i=c0.c,h=c9<1,g=d1.c,f=0;f<3;++f){e=i[f]
if(e<=0)continue
d=C.hag(c4,f)
a0=m[f]*c2*e
a1=d-4
a2=$.S()
a3=new B.ap(A.S,A.N,A.U,A.V,A.T)
a3.r=A.w.j(0.5).gp(0)
a3.y=A.mf
d1.bY(new B.a3(a1,l,a1+k,j),a3)
a3=c3-a0
a1=d+c5
a4=new B.a3(d,a3,a1,a3+a0)
a5=new B.ap(A.S,A.N,A.U,A.V,A.T)
a6=B.ar(A.d.gH(w),A.c,0.1)
a6.toString
a5.sav(new B.a9(A.b6,A.b8,A.x,B.a([a6,A.d.gal(w)],v),c1,c1).aJ(0,a4))
d1.aq(a4,a5)
a2=a2.r
a5=B.a([],o)
a7=new B.aF(a2,A.ai,c1,c1,a5)
a5.push(new B.aZ(a1,a3))
a7.aa()
a6=a1+c7
a8=a3+c8
a9=new B.aq(a6,a8)
a5.push(a9)
b0=a7.f
if(b0!=null)a9.aj(b0)
a7.aa()
a9=new B.aq(a6,n)
a5.push(a9)
b0=a7.f
if(b0!=null)a9.aj(b0)
a7.aa()
a9=new B.aq(a1,c3)
a5.push(a9)
b0=a7.f
if(b0!=null)a9.aj(b0)
a7.aa()
a9=new B.bv()
a5.push(a9)
a5=a7.f
if(a5!=null)a9.aj(a5)
a7.aa()
a5=new B.ap(A.S,A.N,A.U,A.V,A.T)
a5.r=B.ar(A.d.gal(w),A.w,0.5).gp(0)
d1.af(a7,a5)
a5=B.a([],o)
b1=new B.aF(a2,A.ai,c1,c1,a5)
a5.push(new B.aZ(d,a3))
b1.aa()
a2=new B.aq(d+c7,a8)
a5.push(a2)
a9=b1.f
if(a9!=null)a2.aj(a9)
b1.aa()
a2=new B.aq(a6,a8)
a5.push(a2)
a6=b1.f
if(a6!=null)a2.aj(a6)
b1.aa()
a2=new B.aq(a1,a3)
a5.push(a2)
a6=b1.f
if(a6!=null)a2.aj(a6)
b1.aa()
a2=new B.bv()
a5.push(a2)
a5=b1.f
if(a5!=null)a2.aj(a5)
b1.aa()
a2=new B.ap(A.S,A.N,A.U,A.V,A.T)
a2.r=B.ar(A.d.gH(w),A.c,0.45).gp(0)
d1.af(b1,a2)
b2=new B.ap(A.S,A.N,A.U,A.V,A.T)
b2.b=A.aa
b2.c=1
b2.r=A.c.j(0.28).gp(0)
d1.aq(a4,b2)
d1.af(a7,b2)
d1.af(b1,b2)
b3=A.j.bh(a0/22)
for(a2=a3+6,a3=d+8,a5=q*b3*1.3,b4=0;b4<b3;++b4){b5=a5>b3-b4-1
for(a6=p-b4*22-12,a8=a6<a2,a9=a6+10,b6=0;b6<3;++b6){b7=a3+b6*t
if(a8)continue
b0=B.bn(new B.a3(b7,a6,b7+s,a9),A.hv)
$.S()
b8=new B.ap(A.S,A.N,A.U,A.V,A.T)
b8.r=(b5?A.c.j(r):A.w.j(0.22)).gp(0)
d1.am(b0,b8)}}if(u&&h){a2=c3-a0*c9-14
b9=new B.a3(d,a2,a1,a2+28)
J.br(g.save())
g.clipRect(B.i_(a4),$.mz()[1],!0)
$.S()
a2=new B.ap(A.S,A.N,A.U,A.V,A.T)
a2.sav(new B.a9(A.b6,A.b8,A.x,B.a([A.L,A.c.j(0.4),A.L],v),c1,c1).aJ(0,b9))
d1.aq(b9,a2)
g.restore()}}},
aE(d){return!0}}
C.aOC.prototype={
aY(){this.b5()
this.b4()
this.dN()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdH())
w.b9$=null
w.a2()}}
C.a1n.prototype={
a7(){return"_Role."+this.b}}
C.qn.prototype={}
C.r5.prototype={}
C.CY.prototype={}
C.a_l.prototype={}
C.afD.prototype={}
C.a1A.prototype={
gZ(d){return this.d}}
C.D8.prototype={}
C.acy.prototype={}
C.acP.prototype={}
C.aeK.prototype={}
C.biY.prototype={
a3x(d,e,f,g,h){var w=this
if(!w.db||w.ax-w.dx<35)return
w.dx=w.ax
G.dF(d,"",e,g,h,f)},
bay(d,e,f){return this.a3x(d,e,f,0,0.55)},
aDm(d,e,f,g){return this.a3x(d,e,f,0,g)},
baz(d,e,f,g){return this.a3x(d,e,f,g,0.55)},
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
al4(d,e,f,g){var w="n"+this.ay++,v=new C.r5(w,e,f,g)
this.a.n(0,w,v)
this.b0()
return v},
ta(d,e,f){return this.al4(0,e,f,0)},
W(d,e){var w=this
w.a.W(0,e)
A.d.bt(w.b,new C.dqr(e))
A.d.bt(w.c,new C.dqs(e))
w.b0()},
beq(d,e){var w,v,u
if(d===e)return!1
w=this.a
v=w.h(0,e)
u=w.h(0,d)
if(v==null||u==null)return!1
if(D.n3.h(0,v.b).c===D.xB)return!1
w=this.b
if(A.d.aW(w,new C.dqo(d,e)))return!1
w.push(new C.CY(d,e))
this.b0()
return!0},
c2J(d){var w
if(d.b==="beat")return D.ciw[A.o.F(d.d,4)]
w=this.at
switch(A.o.F(d.d,3)){case 1:return 350+w.aw(500)
case 2:return 1400+w.aw(2200)
default:return 450+w.aw(2000)}},
aGX(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i="tri",h="sine",g=j.a.h(0,d)
if(g==null)return
j.y.n(0,d,j.ax)
w=j.z
v=w.h(0,d)
w.n(0,d,(v==null?0:v)+1)
u=g.c
w=g.d
v=A.o.F(w,6)
t=D.aCo[v]
s=!0
switch(g.b){case"light":w=j.f
w.push(new C.D8(u,t,j.ax,90))
w.push(new C.D8(u,A.c,j.ax,50))
for(w=j.at,v=j.e,r=0;r<12;++r){q=w.ai()*3.141592653589793*2
v.push(new C.a1A(u,new B.p(Math.cos(q)*110,Math.sin(q)*110),t,4,600,j.ax))}j.bay(261.63*Math.pow(2,([0,4,7,12,16,19][A.o.F(g.d,6)]+12)/12),220,i)
break
case"burst":for(w=j.at,v=j.e,r=0;r<70;++r){q=w.ai()*3.141592653589793*2
p=100+w.ai()*320
o=Math.cos(q)
n=Math.sin(q)
m=B.ar(t,A.c,w.ai()*0.5)
m.toString
v.push(new C.a1A(u,new B.p(o*p,n*p),m,3+w.ai()*4.5,1000+w.aw(700),j.ax))}j.f.push(new C.D8(u,t,j.ax,120))
j.aDm(120,200,"noise",0.5)
j.bay(261.63*Math.pow(2,([7,12,16,19][w.aw(4)]+12)/12),260,i)
break
case"ripple":w=j.f
w.push(new C.D8(u,t,j.ax,230))
w.push(new C.D8(u,t,j.ax+160,160))
w.push(new C.D8(u,t,j.ax+320,100))
j.baz(180+j.at.aw(80),330,h,0.6)
break
case"ball":w=j.at
j.r.push(new C.acy(u,new B.p((w.ai()-0.5)*220,-260-w.ai()*180),t,j.ax))
j.baz(300+w.aw(300),110,h,0.8)
break
case"comet":w=j.at
q=w.ai()*3.141592653589793*2
j.w.push(new C.acP(u,u.a5(0,new B.p(Math.cos(q),Math.sin(q)).aN(0,260+w.ai()*200)),t,j.ax))
j.a3x(380,400,i,2,0.4)
break
case"shake":j.ch=j.ax+450
B.fL()
j.a3x(70,260,h,0.5,0.9)
break
case"pop":j.x.push(new C.aeK(u,D.aBJ[v],t,j.ax))
j.aDm(261.63*Math.pow(2,([0,5,9,12][j.at.aw(4)]+12)/12),150,"square",0.35)
break
case"wash":j.cx=t
j.CW=j.ax+800
j.aDm(261.63*Math.pow(2,0)+40,420,i,0.4)
break
case"echo":l=D.ceC[A.o.F(w,3)]
for(k=1;k<=3;++k)j.cvV(d,j.ax+l*k,!0)
break
case"delay":for(w=A.d.gae(j.b),v=new B.eB(w,new C.dqp(d));v.C();)j.aBS(w.gR(0),j.ax+D.cqX[A.o.F(g.d,4)])
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
case"chance":s=j.at.aw(100)<D.cI6[A.o.F(g.d,3)]
break
default:break}if(s)for(w=A.d.gae(j.b),v=new B.eB(w,new C.dqq(d));v.C();)j.aBS(w.gR(0),j.ax)
w=j.e
v=w.length
if(v>700)A.d.xA(w,0,v-700)},
cvV(d,e,f){var w=this.c
if(w.length>260)return
w.push(new C.a_l(e,"~"+d))},
aBS(d,e){var w,v,u=this.c
if(u.length>260)return
w=e+260
v=d.b
this.d.push(new C.afD(d.a,v,e,w))
u.push(new C.a_l(w,v))},
a7i(d){var w,v,u,t,s,r,q,p,o=this
o.ax=d
w=o.a
v=B.a4(w).k("b8<2>")
w=B.C(new B.b8(w,v),v.k("M.E"))
v=w.length
u=o.Q
t=0
for(;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
r=s.b
if(r!=="beat"&&r!=="dice")continue
r=s.a
q=u.h(0,r)
if(q==null)u.n(0,r,o.ax+300)
else if(o.ax>=q){o.aGX(r)
u.n(0,r,o.ax+o.c2J(s))}}w=o.c
v=B.U(w).k("Y<1>")
q=B.C(new B.Y(w,new C.dqt(o),v),v.k("M.E"))
if(q.length!==0){A.d.bt(w,new C.dqu(o))
for(w=q.length,v=o.b,t=0;t<q.length;q.length===w||(0,B.K)(q),++t){u=q[t].b
if(A.a.a0(u,"~")){p=A.a.b2(u,1)
for(u=A.d.gae(v),r=new B.eB(u,new C.dqv(p));r.C();)o.aBS(u.gR(0),o.ax)}else o.aGX(u)}}A.d.bt(o.d,new C.dqw(o))
A.d.bt(o.e,new C.dqx(o))
A.d.bt(o.f,new C.dqy(o))
A.d.bt(o.w,new C.dqz(o))
A.d.bt(o.x,new C.dqA(o))
A.d.bt(o.r,new C.dqB(o))
o.b0()},
vH(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this
for(w=j.e,v=w.length,u=1-1.6*e,t=120*e,s=0;s<v;++s){r=w[s]
q=r.a
p=r.b
o=p.a
p=p.b
r.a=new B.p(q.a+o*e,q.b+p*e)
r.b=new B.p(o*u,p*u+t)}n=j.cy.b-8
for(w=j.r,v=w.length,u=900*e,s=0;s<v;++s){m=w[s]
t=m.b
q=t.a
t=t.b+u
p=m.b=new B.p(q,t)
o=m.a
l=o.a+q*e
o=o.b+t*e
k=m.a=new B.p(l,o)
if(o>n){p=m.a=new B.p(l,n)
t=m.b=new B.p(q*0.9,-t*0.62)
q=p}else{q=k
t=p}q=q.a
if(q<10||q>j.cy.a-10)m.b=new B.p(-t.a*0.8,t.b)}},
ak(){var w,v,u,t,s,r,q,p,o,n,m=this.cy,l=m.a
if(l<=0)l=1
w=m.b
if(w<=0)w=1
m=B.a([],x.x)
for(v=this.a,v=new B.dq(v,v.r,v.e),u=x.N,t=x.K;v.C();){s=v.d
r=s.a
q=s.b
p=s.c
m.push(B.H(["id",r,"k",q,"x",p.a/l,"y",p.b/w,"p",s.d],u,t))}v=B.a([],x.E)
for(t=this.b,s=t.length,r=x.s,o=0;o<t.length;t.length===s||(0,B.K)(t),++o){n=t[o]
v.push(B.a([n.a,n.b],r))}return A.Y.az(B.H(["nodes",m,"edges",v],u,x.ew),null)},
Ug(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this
try{w=x.P.a(A.Y.aQ(0,d,null))
k.a8(0)
for(o=x.j,n=J.aU(o.a(J.t(w,"nodes"))),m=k.a;n.C();){v=n.gR(n)
u=B.w(J.t(v,"k"))
if(!D.n3.ao(0,u))continue
t=B.w(J.t(v,"id"))
m.n(0,t,new C.r5(t,u,new B.p(B.dC(J.t(v,"x"))*k.cy.a,B.dC(J.t(v,"y"))*k.cy.b),A.j.M(B.dC(J.t(v,"p")))))
s=B.ca(B.aL(t,"n",""),null)
if(s!=null&&s>=k.ay)k.ay=s+1}for(o=J.aU(o.a(J.t(w,"edges"))),n=k.b;o.C();){r=o.gR(o)
q=B.w(J.t(r,0))
p=B.w(J.t(r,1))
if(m.ao(0,q)&&m.ao(0,p))n.push(new C.CY(q,p))}k.b0()
return!0}catch(l){return!1}},
cVq(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=this
l.a8(0)
w=B.a([],x.s)
for(v=e.length,u=l.a,t=0;t<v;++t){s=e[t].a
r=s[0]
q=s[1]
p=l.cy
o=s[2]
s=s[3]
n="n"+l.ay++
u.n(0,n,new C.r5(n,r,new B.p(q*p.a,o*p.b),s))
l.b0()
w.push(n)}for(v=f.length,t=0;t<v;++t){m=f[t]
l.beq(w[m.a],w[m.b])}},
gZ(d){return this.cy}}
C.Gy.prototype={}
C.WT.prototype={
S(){var w=x.N,v=B.a([],x.eW),u=B.a([],x.fY),t=B.a([],x.fr),s=B.a([],x.e4),r=B.a([],x.cd),q=B.a([],x.a_),p=B.a([],x.ba),o=B.a([],x.ac),n=x.S
return new C.aFR(new C.biY(B.T(w,x.f3),v,u,t,s,r,q,p,o,B.T(w,n),B.T(w,n),B.T(w,n),B.T(w,n),A.cM,A.L,A.ay,$.aw()),A.bC,A.H,A.H,A.Z,null,null)}}
C.aFR.prototype={
adn(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m
var $async$adn=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
n=B
m=J
w=6
return B.b(B.az(),$async$adn)
case 6:q=n.k0(m.t(e.a,"ngmy_core_lab_coach_v1"))
r=q===!0
if(!r&&s.c!=null)s.m(new C.ewI(s))
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
return B.i($async$adn,v)},
aah(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$aah=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:s.m(new C.ewx(s))
u=3
w=6
return B.b(B.az(),$async$aah)
case 6:e.aA("Bool","ngmy_core_lab_coach_v1",!0)
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
return B.i($async$aah,v)},
bOP(){var w,v,u,t,s,r,q,p=this,o=p.d,n=o.a
o=o.b
w=B.a4(n).k("b8<2>")
v=""+n.a+"|"+o.length+"|"+new B.b8(n,w).cI(0,0,new C.ewz())+"|"+A.d.cI(o,0,new C.ewA())
if(v===p.ch)return p.CW
u=new C.ewD()
t=x.s
s=B.a([],t)
r=new C.ewE(p,s,u)
for(n=new B.b8(n,w).gae(0),w=new B.eB(n,new C.ewB());w.C();){q=n.gR(0)
if(!A.d.aW(o,new C.ewC(q)))s.push(B.w(u.$1(q))+"  \u2192  (not connected: drag from its right dot)")
else r.$3(q,B.a([u.$1(q)],t),0)}p.ch=v
return p.CW=B.cW(s,0,B.dA(5,"count",x.S),x.N).dq(0)},
Y(){var w,v=this
v.a3()
v.adn()
v.d.db=v.ay
w=v.pZ(new C.ex7(v))
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
w.bzw()},
acT(d){return this.c29(d)},
c29(d){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l
var $async$acT=B.e(function(e,f){if(e===1){t.push(f)
w=u}for(;;)switch(w){case 0:o=s.d
o.cy=d
s.w=!0
r=!1
u=3
m=B
l=J
w=6
return B.b(B.az(),$async$acT)
case 6:q=m.aT(l.t(f.a,"ngmy_core_reaction_lab_v1"))
if(q!=null&&q.length!==0)r=o.Ug(q)
u=1
w=5
break
case 3:u=2
n=t.pop()
w=5
break
case 2:w=1
break
case 5:if(!r||o.a.a===0)s.aZ7(A.d.gH(D.aBa))
if(s.c!=null)s.m(new C.ewH())
return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$acT,v)},
aZ7(d){this.d.cVq(0,d.c,d.d)
this.EH()},
EH(){var w=this.as
if(w!=null)w.a1(0)
this.as=B.cz(A.lH,new C.ewt(this))},
ayJ(d){var w,v,u,t,s=this.d.a,r=B.a4(s).k("b8<2>")
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
cjN(d){var w,v,u,t,s,r=this.d.a,q=B.a4(r).k("b8<2>")
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
c1Y(d){var w,v,u,t,s,r,q,p,o,n
for(w=this.d.a,w=new B.dq(w,w.r,w.e),v=d.a,u=d.b,t=null,s=46;w.C();){r=w.d
if(D.n3.h(0,r.b).c===D.xB)continue
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
caW(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.d,v=w.b,u=d.a,t=d.b,w=w.a,s=0;s<v.length;++s){r=v[s]
q=w.h(0,r.a)
p=w.h(0,r.b)
if(q==null||p==null)continue
for(o=0;o<=24;++o){n=q.c
m=p.c
m=C.hyC(new B.p(n.a+36,n.b+0),new B.p(m.a-36,m.b),o/24)
n=m.a-u
m=m.b-t
if(Math.sqrt(n*n+m*m)<15)return s}}return null},
cDE(d){var w,v,u,t,s,r,q=this,p=q.ayJ(d)
if(p!=null){w=q.d
v=w.a.h(0,p)
v.toString
B.eX()
u=v.b
if(u==="button"){w.aGX(p)
return}if(q.r)return
t=D.n3.h(0,u)
s=t.e.length
if(!(s!==0))if(t.c===D.rg)s=6
else s=1
v.d=A.o.F(v.d+1,s)
w.b0()
q.EH()
return}if(q.r)return
r=q.caW(d)
if(r!=null){w=q.d
A.d.cA(w.b,r)
w.b0()
q.EH()}},
cl5(d){var w,v,u=this
if(u.r)return
u.at=!1
w=u.cjN(d)
if(w!=null){u.z=w
u.Q=d
return}v=u.ayJ(d)
if(v!=null){u.x=v
u.y=u.d.a.h(0,v).c.aK(0,d)}},
cl6(d){var w,v,u,t,s=this
if(s.z!=null){s.Q=d
s.d.b0()}else{w=s.x
if(w!=null){v=s.d
u=v.a.h(0,w)
if(u==null)return
t=v.cy
u.c=new B.p(A.j.E(d.a+s.y.a,46,t.a-46),A.j.E(d.b+s.y.b,46,t.b-60))
s.at=!0
v.b0()}}},
b3u(){var w,v,u=this
if(u.z!=null){w=u.c1Y(u.Q)
if(w!=null){v=u.z
v.toString
v=u.d.beq(v,w)}else v=!1
if(v){B.jS()
u.EH()}u.z=null
u.d.b0()}else if(u.x!=null){if(u.at)u.EH()
u.x=null}},
adA(d){return this.c50(d)},
c50(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$adA=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=t.ayJ(d)
if(s==null){w=1
break}r=t.d
q=r.a.h(0,s)
q.toString
B.jT()
p=t.c
p.toString
w=3
return B.b(B.bT(I.m6,null,new C.ewK(q),p,!0,!0,!1,A.lS,!1,!1,x.y),$async$adA)
case 3:if(f===!0){r.W(0,s)
t.EH()}case 1:return B.h(u,v)}})
return B.i($async$adA,v)},
caU(d){var w,v,u
if(!this.w)return
w=this.d
v=w.cy
u=w.at
w.ta(0,d,new B.p(v.a*(0.25+u.ai()*0.5),v.b*(0.2+u.ai()*0.55)))
B.eX()
this.EH()},
ahx(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ahx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bT(I.m6,null,new C.ewM(),s,!0,!0,!0,A.lS,!1,!1,x.es),$async$ahx)
case 2:t=e
if(t!=null)u.aZ7(t)
return B.h(null,v)}})
return B.i($async$ahx,v)},
aeX(d){var w=0,v=B.j(x.H),u=this,t
var $async$aeX=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cf(null,null,!0,null,new C.eww(),t,null,!0,!0,x.y),$async$aeX)
case 2:if(f===!0){u.d.a8(0)
u.EH()}return B.h(null,v)}})
return B.i($async$aeX,v)},
B(d){var w=this,v=null,u=B.a([B.aj9(w.r?new B.bL(A.a6,v,v,new B.D(A.GX,B.ho(D.bVm,D.fG_,new C.ex5(w),v),v),v):w.caX(),A.b4,A.iH),B.E(B.cs(new C.ex6(w)),1)],x.p)
if(!w.r)u.push(w.cyn())
return B.c4(v,A.c2,B.bm(!0,B.x(u,A.m,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)},
bKy(){var w=null,v=new C.ewy(),u=A.w.j(0.7),t=B.n(26),s=B.L(A.bw.j(0.5),A.r,1)
return B.bR(0,B.e8(B.at(B.q(w,B.ch(B.x(B.a([D.fRr,A.aw,D.fZa,A.aC,v.$4(A.oz,A.bw,"1. Something starts it","Clock sends a signal on its own. Button sends one when you tap it. Dice sends them at random."),v.$4(Y.CV,A.cr,"2. Something can change it","Delay holds it back. Echo repeats it. Every 3rd and Chance let only some through."),v.$4(A.kt,A.c4,"3. Something shows it","Burst, Ripple, Light, Ball, Comet, Shake, Pop and Wash are the reactions you see and hear."),v.$4(F.a2b,A.bq,"4. You connect them","Drag from the right dot of one part to the left dot of the next. Tap a wire to cut it, tap a part to change its setting, press and hold a part to remove it."),D.fYt,new B.bL(A.a9,w,w,B.bM(!1,D.fOw,w,w,!0,w,w,w,this.gbKr(),w,w),w)],x.p),A.E,w,A.e,A.P,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),A.f,w,A.Xn,new B.o(I.m6,w,s,t,w,w,A.n),w,w,w,A.fq,Am.am8,w,w,w),w,w,w),u,!0),0,0,0)},
caX(){var w=this,v=null,u=B.aG(v,v,v,v,A1.ml,v,v,v,new C.ewS(w),v,v,v,v,v,v),t=w.a9I(A.Pk,"How it works",new C.ewT(w),!0),s=w.ay?A.oA:V.t_
return new B.D(D.bG0,B.A(B.a([u,D.bHJ,t,w.a9I(s,"Sound",new C.ewU(w),!0),w.a9I(A.e9,"Ideas",w.gcoS(),!0),w.a9I(K.ww,"Clear",w.gcaV(w),!0),w.aPM(A.hs,"Show",new C.ewV(w),!0,!0)],x.p),A.m,v,A.e,A.i,0,v,v),v)},
aPM(d,e,f,g,h){var w=null,v=h?A.bw:A.c.j(0.08),u=B.n(14),t=B.n(14),s=B.a([B.X(d,h?A.w:A.c,w,w,w,20)],x.p)
return new B.D(Ae.wl,B.aJ(!1,A.a3,!0,u,B.aO(!1,t,!0,B.hb(new B.D(new B.Q(8,8,8,8),B.A(s,A.m,w,A.e,A.P,0,w,w),w),w,e,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,v,0,w,w,w,w,w,A.aj),w)},
a9I(d,e,f,g){return this.aPM(d,e,f,g,!1)},
cyn(){var w=null,v=new C.ewO(this),u=A.c.j(0.08)
return B.q(w,B.ch(B.A(B.a([v.$2("START",D.xB),v.$2("CHANGE",D.F3),v.$2("REACT",D.rg)],x.p),A.E,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,A.aL),A.f,w,w,new B.o(I.BI,w,new B.bH(new B.ay(u,1,A.r,-1),A.a1,A.a1,A.a1),w,w,w,A.n),w,w,w,w,D.bB3,w,w,w)},
cyo(d){var w,v,u,t,s=null,r=D.n3.h(0,d)
r.toString
w=B.n(14)
v=r.d
u=B.a([v.j(0.32),v.j(0.1)],x.O)
t=B.L(v.j(0.5),A.r,1)
return new B.D(A.fy,B.aA(s,B.q(s,B.x(B.a([B.X(r.b,v,s,s,s,22),A.cU,B.d(r.a,s,1,A.a2,s,s,s,D.aVv,s,s,s)],x.p),A.m,s,A.e,A.P,0,A.p),A.f,s,s,new B.o(s,s,t,w,s,new B.a9(A.b6,A.b8,A.x,u,s,s),A.n),s,s,s,s,A.hF,s,s,62),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.ewN(this,d),s,s,s,s,s,s,!1,A.a4),s)}}
C.biZ.prototype={
a4(b7,b8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=null,b4=b2.b,b5=b4.ax,b6=b7.c
J.br(b6.save())
w=b4.ch
if(b5<w){v=(w-b5)/380
b6.translate(Math.sin(b5*0.09)*9*v,Math.cos(b5*0.13)*7*v)}$.S()
u=B.J()
u.r=A.c.j(0.05).gp(0)
for(w=b8.b,t=b8.a,s=20;s<w;s+=28)for(r=14;r<t;r+=28)b7.N(new B.p(r,s),1,u)
q=b4.CW
if(b5<q){$.S()
p=B.J()
p.r=b4.cx.j(0.4*((q-b5)/800)).gp(0)
b7.aq(new B.a3(0,0,0+t,0+w),p)}for(w=b4.b,t=w.length,q=x.O,p=x.v,o=b4.a,n=0;n<w.length;w.length===t||(0,B.K)(w),++n){m=w[n]
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
d=new B.aF(f.r,A.ai,b3,b3,e)
e.push(new B.aZ(i,j))
d.aa()
a0=Math.max(40,Math.abs(g-i)*0.5)
f=new B.kP(i+a0,j,g-a0,h,g,h)
e.push(f)
e=d.f
if(e!=null)f.aj(e)
d.aa()
a1=D.n3.h(0,l.b).d
a2=D.n3.h(0,k.b).d
f=new B.ap(A.S,A.N,A.U,A.V,A.T)
f.b=A.aa
f.c=3
f.d=A.bB
e=B.a([a1.j(0.55),a2.j(0.55)],q)
h=B.rU(new B.p(i,j),new B.p(g,h))
f.sav(new B.a9(A.a6,A.a9,A.x,e,b3,b3).aJ(0,new B.a3(h.a-2,h.b-2,h.c+2,h.d+2)))
b7.af(d,f)}for(w=b4.d,t=w.length,n=0;n<w.length;w.length===t||(0,B.K)(w),++n){a3=w[n]
l=o.h(0,a3.a)
k=o.h(0,a3.b)
if(l==null||k==null)continue
j=a3.c
a4=A.j.E((b5-j)/(a3.d-j),0,1)
j=l.c
i=k.c
a5=C.hyC(new B.p(j.a+36,j.b+0),new B.p(i.a-36,i.b),a4)
$.S()
i=new B.ap(A.S,A.N,A.U,A.V,A.T)
i.r=A.c.j(0.35).gp(0)
i.y=N.op
b7.N(a5,8,i)
i=new B.ap(A.S,A.N,A.U,A.V,A.T)
i.r=A.c.gp(0)
b7.N(a5,4,i)}a6=b2.d.$0()
if(a6!=null&&o.h(0,a6)!=null){a7=o.h(0,a6).c.a5(0,D.Jq)
a8=b2.e.$0()
w=a8.a
t=a7.a
a0=Math.max(40,Math.abs(w-t)*0.5)
d=new B.aF($.S().r,A.ai,b3,b3,B.a([],p))
p=a7.b
d.D(new B.aZ(t,p))
j=a8.b
d.D(new B.kP(t+a0,p,w-a0,j,w,j))
j=B.J()
j.b=A.aa
j.c=3
j.r=A.c.j(0.7).gp(0)
b7.af(d,j)
j=B.J()
j.r=A.c.gp(0)
b7.N(a8,7,j)}for(w=b4.f,t=w.length,n=0;n<w.length;w.length===t||(0,B.K)(w),++n){a9=w[n]
p=a9.c
v=A.j.E((b5-p)/700,0,1)
if(b5<p)continue
p=A.dV.aC(0,v)
$.S()
j=new B.ap(A.S,A.N,A.U,A.V,A.T)
j.b=A.aa
i=1-v
j.c=3.5*i+0.5
j.r=a9.b.j(i*0.9).gp(0)
b7.N(a9.a,14+a9.d*p,j)}for(w=b4.w,t=w.length,n=0;n<w.length;w.length===t||(0,B.K)(w),++n){b0=w[n]
v=A.j.E((b5-b0.d)/600,0,1)
p=b0.a
j=b0.b
i=B.kD(p,j,A.dV.aC(0,v))
i.toString
j=B.kD(p,j,A.dV.aC(0,A.j.E(v-0.35,0,1)))
j.toString
$.S()
p=new B.ap(A.S,A.N,A.U,A.V,A.T)
p.c=5
p.d=A.bB
h=b0.c
g=B.a([h.j(0),h],q)
f=B.rU(j,i)
p.sav(new B.a9(A.a6,A.a9,A.x,g,b3,b3).aJ(0,new B.a3(f.a-4,f.b-4,f.c+4,f.d+4)))
b7.ah(j,i,p)
p=new B.ap(A.S,A.N,A.U,A.V,A.T)
p.r=A.c.gp(0)
b7.N(i,6,p)
p=new B.ap(A.S,A.N,A.U,A.V,A.T)
p.r=h.j(0.5*(1-v)).gp(0)
p.y=A.kW
b7.N(i,12,p)}for(w=b4.e,t=w.length,n=0;n<w.length;w.length===t||(0,B.K)(w),++n){a3=w[n]
v=A.j.E((b5-a3.f)/a3.e,0,1)
p=a3.a
$.S()
j=new B.ap(A.S,A.N,A.U,A.V,A.T)
j.r=a3.c.j(1-v).gp(0)
b7.N(p,a3.d*(1-0.5*v),j)}for(w=b4.r,t=w.length,n=0;n<w.length;w.length===t||(0,B.K)(w),++n){k=w[n]
p=k.a
$.S()
j=new B.ap(A.S,A.N,A.U,A.V,A.T)
i=k.c
j.r=i.j(0.35).gp(0)
j.y=A.kW
b7.N(p,11,j)
j=k.a
p=new B.ap(A.S,A.N,A.U,A.V,A.T)
p.sav(new B.c0(A6.B3,0.5,A.x,b3,0,B.a([A.c,i],q),b3,b3).aJ(0,B.bX(k.a,8)))
b7.N(j,8,p)}for(b4=b4.x,w=b4.length,n=0;n<b4.length;b4.length===w||(0,B.K)(b4),++n){a5=b4[n]
v=A.j.E((b5-a5.d)/1000,0,1)
t=1-v
b1=C.bj_(a5.b,26+8*t,a5.c.j(t),b3,b3,A.u)
t=a5.a
q=b1.b
p=q.c
q=q.a.c
b1.a4(b7,new B.p(t.a-p/2,t.b-(40+60*v+q.gba(q)/2)))}for(b4=new B.dq(o,o.r,o.e);b4.C();)b2.ckE(b7,b4.d,b5)
b6.restore()},
ckE(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=e.b,h=D.n3.h(0,i)
h.toString
w=k.b.y.h(0,e.a)
v=w==null?0:A.j.E(1-(f-w)/520,0,1)
u=B.bB(e.c,64,64)
t=B.bn(u,A.ii)
s=t.eQ(A.cA)
$.S()
r=B.J()
r.r=A.w.j(0.55).gp(0)
r.y=A.mf
d.am(s,r)
if(v>0){s=t.cn(6)
r=B.J()
r.r=h.d.j(0.6*v).gp(0)
r.y=A.wm
d.am(s,r)}s=t.eQ(A.cL)
r=B.J()
q=h.d
r.r=B.ar(q,A.w,0.65).gp(0)
d.am(s,r)
r=B.J()
s=B.ar(q,A.c,0.18+0.4*v)
s.toString
p=B.ar(q,A.w,0.35)
p.toString
r.sav(new B.a9(A.b6,A.b8,A.x,B.a([s,p],x.O),j,j).aJ(0,u))
d.am(t,r)
r=B.J()
r.b=A.aa
r.c=1.2
r.r=A.c.j(0.35).gp(0)
d.am(t,r)
r=h.b
p=e.c
o=C.bj_(B.lx(r.a),30,A.c,r.b,j,A.I)
r=o.b
s=r.c
r=r.a.c
o.a4(d,p.aK(0,new B.p(s/2,r.gba(r)/2)))
n=C.bj_(h.a,11,A.c,j,j,A.I)
n.a4(d,e.c.a5(0,new B.p(-n.b.c/2,40)))
s=h.e
r=s.length
if(r!==0)m=s[A.o.F(e.d,r)]
else m=i==="pop"?D.aBJ[A.o.F(e.d,6)]:j
h=h.c
if(h===D.rg){s=e.c.a5(0,new B.p(0,62))
r=B.J()
r.r=D.aCo[A.o.F(e.d,6)].gp(0)
d.N(s,5,r)}else if(m!=null){l=C.bj_(m,9.5,A.aD,j,j,A.R)
l.a4(d,e.c.a5(0,new B.p(-l.b.c/2,54)))}if(i==="pop"){m.toString
l=C.bj_(m,9.5,A.aD,j,j,A.R)
l.a4(d,e.c.a5(0,new B.p(-l.b.c/2,54)))}if(k.c)return
if(h!==D.xB)k.b4g(d,e.c.aK(0,D.Jq),q)
k.b4g(d,e.c.a5(0,D.Jq),q)},
b4g(d,e,f){var w
$.S()
w=B.J()
w.r=A.c2.gp(0)
d.N(e,9,w)
w=B.J()
w.b=A.aa
w.c=2.2
w.r=f.gp(0)
d.N(e,9,w)
w=B.J()
w.r=A.c.gp(0)
d.N(e,3.5,w)},
aE(d){return!0}}
C.aNL.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.eh.prototype={}
C.tU.prototype={
arV(d,e,f,g){var w=this
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
C.abd.prototype={}
C.ack.prototype={}
C.a5k.prototype={
bgi(d,e,f){var w,v,u,t=this.r,s=this.f,r=0
for(;;){if(!(r<e&&s.length<160))break
w=t.h2()?-1:1
v=t.ai()*3.141592653589793*2
u=f*(0.3+t.ai())
s.push(new C.abd(d.c,d.d,w*42,0,Math.cos(v)*u,Math.sin(v)*u-60,0.35+t.ai()*0.45));++r}},
c7a(d){var w,v,u,t,s,r,q
for(w=this.f,v=w.length,u=520*d,t=0;t<v;++t){s=w[t]
s.c=s.c+s.e*d
r=s.d
q=s.f
s.d=r+q*d
s.f=q+u
s.r-=d}A.d.bt(w,new C.bPn())},
al4(d,e,f,g){var w="p"+this.c++,v=new C.tU(w,e,f,g)
v.arV(w,e,f,g)
this.a.push(v)
return v},
W(d,e){A.d.W(this.a,e)
A.d.bt(this.b,new C.bPy(e))},
a8(d){A.d.a8(this.a)
A.d.a8(this.b)},
cMp(d,e,f,g,h){return A.d.aW(this.b,new C.bPt(e,f,g,h))},
alV(d,e,f,g){var w
if(d===f||this.cMp(0,d,e,f,g))return null
w=new C.ack(d,e,f,g)
this.b.push(w)
return w},
aCo(d){var w
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
aoD(d){return this.Me(d)&&!d.x&&d.cx>this.Af(d)},
b8D(d){switch(d.b){case"battery":return 0.4+d.e*0.05
case"solar":return 3
case"crank":return 1.5
default:return 1.2}},
Me(d){var w=d.b
return w==="battery"||w==="solar"||w==="crank"||w==="turbine"},
cbg(d){var w,v=d.b
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
vH(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
a2.d+=a4
a2.c7a(a4)
a2.w=Math.max(0,a2.w-a4)
a2.x=Math.max(0,a2.x-a4)
w=Math.min(a4*6,0.12)
for(v=a2.a,u=v.length,t=B.U(v).k("Y<1>"),s=0;r=v.length,s<r;v.length===u||(0,B.K)(v),++s){q=v[s]
r=q.b
if((r==="buck"||r==="regulator")&&!q.x&&q.db===0&&q.dx===0){p=new B.Y(v,new C.bPz(a2),t).cI(0,0,new C.bPA(a2))
q.cy=Math.max(0,p-(r==="regulator"?5:q.e))}}for(u=a4*0.25,s=0;s<r;++s){q=v[s]
if(q.b==="crank")q.f=Math.max(0,q.f-u)}u=x.S
o=B.T(x.N,u)
n=new C.bPC(o)
m=B.a([],x.t)
l=new C.bPB(m)
for(t=v.length,s=0;s<v.length;v.length===t||(0,B.K)(v),++s){q=v[s]
n.$2(q,0)
n.$2(q,1)}for(k=0;k<o.a;++k)m.push(k)
for(t=a2.b,r=t.length,s=0;s<t.length;t.length===r||(0,B.K)(t),++s){j=t[s]
i=l.$1(n.$2(j.a,j.b))
h=l.$1(n.$2(j.c,j.d))
if(i!==h)m[i]=h}g=B.T(u,u)
f=new C.bPE(g,l,n)
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
a2.b8z(e,d,w,!0)
for(u=v.length,a0=!1,s=0;s<u;++s){q=v[s]
t=q.b
if(!(t==="battery"||t==="solar"||t==="crank"||t==="turbine")||q.x){q.cx=0
continue}t=Math.max(0,-q.fr)
q.cx=t
a1=t/a2.Af(q)
t=a1>1?Math.min(4,(a1-1)*1.5):0
q.CW=t
if(t>0)a0=!0}if(a0)a2.b8z(e,d,w,!0)
a2.bRa(a4)},
b8z(b7,b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=x.S,b4=B.T(x.N,b3),b5=new C.bPp(b4),b6=B.a([],x.t)
for(w=b2.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
b5.$2(t,0)
b5.$2(t,1)}for(s=0;s<b4.a;++s)b6.push(s)
r=new C.bPo(b6)
for(v=b2.b,q=v.length,u=0;u<v.length;v.length===q||(0,B.K)(v),++u){p=v[u]
o=r.$1(b5.$2(p.a,p.b))
n=r.$1(b5.$2(p.c,p.d))
if(o!==n)b6[o]=n}m=new C.bPr(B.T(b3,b3),r,b5)
for(b3=w.length,u=0;u<w.length;w.length===b3||(0,B.K)(w),++u){t=w[u]
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
for(a1=w.length,u=0;u<w.length;w.length===a1||(0,B.K)(w),++u){t=w[u]
o=m.$2(t,0)
n=m.$2(t,1)
a2=t.b
if((a2==="battery"||a2==="solar"||a2==="crank"||a2==="turbine")&&!t.x){a3=1/(b2.b8D(t)*(1+t.CW))
a4=b2.aCo(t)*a3}else{a5=t.x
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
a3=a5?1e-9:i}else a3=1/b2.cbg(t)}}k.n(0,t,a3)
j.n(0,t,a4)
a2=e[o]
a2[o]=a2[o]+a3
a5=e[n]
a5[n]=a5[n]+a3
a2[n]=a2[n]-a3
a5[o]=a5[o]-a3
a0[o]=a0[o]+a4
a0[n]=a0[n]-a4}for(s=0;s<b7;++s){a1=e[s]
a1[s]=a1[s]+1e-9}l=b2.bUu(e,a0,b8)
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
bUu(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a2.length,a0=B.a([],x.t)
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
bRa(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this
for(w=a1.a,v=w.length,u=a2*0.015,t=a2*0.2,s=a2*0.8,r=a2*0.9,q=a1.y,p=0;p<w.length;w.length===v||(0,B.K)(w),++p){o=w[p]
n=o.b
m=n==="battery"
if(m&&o.e===1.5&&!o.x){l=o.fr
if(l>0.003)o.as=Math.min(1,o.as+t*Math.min(l,1))
else if(l<-0.003)o.as=Math.max(0,o.as-u*Math.min(-l,1))}m=!m
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x){k=a1.aCo(o)/a1.b8D(o)
if((!m||n==="solar"||n==="crank"||n==="turbine")&&!o.x&&o.cx>a1.Af(o)&&a1.x<=0&&o.cx<k*0.55){a1.x=8
m=a1.e
if(m!=null)m.$2("overload",o)}if(k>0.3){m=o.cx
m=m>0.4&&m>k*0.55&&!a1.bJc(o)}else m=!1
l=o.Q
if(m){o.Q=l+r
a1.bgi(o,3,260)
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
if(l>26)a1.ul(o,"The "+$.qy().h(0,n).b+" got "+A.j.ad(o.db,1)+" V going in, more than the 26 V it can take.")
if(i>1.5)a1.ul(o,"More than 1.5 amps went through the "+$.qy().h(0,n).b+". The gadget on its output takes too much power for it.")
if(m&&o.cy*i>2.5)a1.ul(o,"The regulator had to turn "+A.j.ad(o.cy,1)+" V into heat while "+A.j.V(i*1000)+" mA flowed. That is "+A.j.ad(o.cy*i,1)+" watts of heat, so it overheated. A step-down converter wastes far less.")}if(n==="diode"&&!o.x){m=q.h(0,o.a)
o.fx=m===!0?1:0
if(i>1.5)a1.ul(o,"More than 1.5 amps went through the diode, so it burnt out.")}f=D.A0.h(0,n)
if(f!=null){m=f.d
e=o.dy
d=m?e:Math.abs(e)
m=!o.x
a0=m&&d>=f.b
if(m&&Math.abs(e)>f.c){m=$.qy().h(0,n).b
l=f.b
l=l===A.j.iY(l)?""+A.j.V(l):B.w(l)
g=f.c
g=g===A.j.iY(g)?""+A.j.V(g):B.w(g)
a1.ul(o,"The "+m+" is made for "+l+" to "+g+" volts but got "+A.j.ad(Math.abs(o.dy),1)+" V, so it burnt out.")}m=a0&&!o.x?1:0
o.fx=m
o.ax=m>0?o.ax+a2:0
if(D.f9O.q(0,n)){m=o.fx>0?A.j.E((Math.abs(o.dy)-1)/6,0.15,1.4):0
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
bJc(d){return A.d.aW(this.a,new C.bPm(d))},
ul(d,e){var w
d.x=!0
d.ay=e
this.bgi(d,34,300)
w=this.e
if(w!=null)w.$2("burn",d)},
bkX(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<v;++u){t=w[u]
t.x=!1
t.ay=""
t.z=0}this.y.a8(0)},
aII(d){var w=d.b
return D.aSn.q(0,w)||D.A0.ao(0,w)||w==="buck"||w==="regulator"},
bhM(d){var w,v=!0
if(!this.Me(d)){w=d.b
if(w!=="led")if(w!=="diode")if(!(w==="buck"||w==="regulator")){v=D.A0.h(0,w)
v=v==null?null:v.d
v=v===!0}}return v},
Vv(d,e){var w=this.b
return new B.Y(w,new C.bPG(d,e),B.U(w).k("Y<1>")).gI(0)},
tM(d){var w,v
if(d.x)return!1
w=d.b
if(D.A0.ao(0,w))return d.fx>0
v=d.fx
return v>(w==="led"?0.02:0.05)},
bfP(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=d.b,g=$.qy().h(0,h).b
if(d.x){h=d.ay
return(h.length===0?"The "+g+" burnt out.":h)+" Press the spanner at the top to fit a new one."}if(!i.aII(d)||i.tM(d))return null
w=i.Vv(d,0)
v=i.Vv(d,1)
u=w===0
if(u&&v===0)return"The "+g+" is not connected to anything yet. Drag a wire from one of its round dots to a battery, and another wire from its other dot back to the battery, so the electricity can go round a full loop."
if(u||v===0){h=u?"left (+)":"right"
return"Only one end of the "+g+" is wired. Electricity needs a full loop, so wire the "+h+" dot as well, and bring it back to the battery."}u=i.a
t=B.U(u).k("Y<1>")
s=B.C(new B.Y(u,i.gcV_(),t),t.k("M.E"))
if(s.length===0)return"There is no power. Add a battery, a solar panel, a hand crank or a wind turbine."
if(h==="buck"||h==="regulator"){r=h==="regulator"?5:d.e
t=d.db
if(t<-0.3)return"The "+g+" is wired backwards. Its left dot (+) is the INPUT and goes to the battery +. The right dot is the OUTPUT that goes on to your gadget."
if(t<=r+0.2){h=r===A.j.iY(r)?""+A.j.V(r):B.w(r)
return"The "+g+" can only bring volts DOWN. It makes "+h+" V, but only "+A.j.ad(d.db,1)+" V arrives. Use a bigger battery (more volts going in than coming out), or lower the output setting."}}q=D.A0.h(0,h)
h=h==="led"
if(!h){t=q==null?null:q.d
p=t===!0}else p=!0
if(p&&d.dy<-0.3)return"The "+g+" is plugged in backwards. Its left dot is the + side and must go towards the + of the battery, and the right dot back to the \u2212. Swap its two wires."
for(t=i.Mr("battery"),o=J.aU(t.a),t=new B.eB(o,t.b);t.C();){n=o.gR(o)
if(n.e===1.5&&n.as<=0.02&&i.Vv(n,0)+i.Vv(n,1)>0){if(n.dy<-0.3)return"The flat 1.5 V battery is wired backwards. Join the + of the solar panel to the + of the battery, and the \u2212 to the \u2212, to charge it."
return"The 1.5 V battery is flat (empty), so it gives no power yet. Charge it first: wire a solar panel to it (+ to +, \u2212 to \u2212) and wait until it is full, then wire it to the "+g+"."}}for(t=i.Mr("switch"),o=J.aU(t.a),t=new B.eB(o,t.b);t.C();)if(!o.gR(o).w)return"A switch in the circuit is open (off), so the loop is broken. Tap the switch to close it."
for(t=u.length,m=0;m<t;++m){l=u[m]
if(l.x&&l!==d)return"The "+$.qy().h(0,l.b).b+" in the circuit has burnt out, which breaks the loop. Press the spanner at the top to repair it."}for(t=s.length,m=0;m<t;++m){k=s[m]
o=k.b
if(o==="solar"&&k.f<0.05)return"The solar panel has no light. Turn the sunlight up."
if(o==="turbine"&&k.f<0.05)return"The wind turbine has no wind. Turn the wind up."
if(o==="crank"&&k.f<0.05)return"The hand crank has stopped. Tap it again and again to spin it."}for(m=0;m<t;++m){k=s[m]
o=k.b
if((o==="battery"||o==="solar"||o==="crank"||o==="turbine")&&!k.x&&k.cx>i.Af(k))return"The "+$.qy().h(0,o).b+" is overloaded. Everything connected to it asks for "+A.j.ad(k.cx,2)+" amps, but it can only give about "+A.j.ad(i.Af(k),2)+" amps, so its volts sag and the "+g+" does not get enough. Take some gadgets off, or use a bigger battery."}if(q!=null&&Math.abs(d.dy)<q.b&&Math.abs(d.fr)>0.0005){j=A.d.aW(u,new C.bPu(i,d))
h=q.b
h=h===A.j.iY(h)?""+A.j.V(h):B.w(h)
u=A.j.ad(Math.abs(d.dy),1)
t=j?", or take out parts that share the voltage with it":""
return"The "+g+" needs at least "+h+" volts but only gets "+u+" V. Use a bigger battery"+t+"."}if(h&&Math.abs(d.fr)>0.0005)return"An LED needs about 2 volts to light up but only gets "+A.j.ad(Math.abs(d.dy),1)+" V. Use a bigger battery."
if(Math.abs(d.fr)<0.0005)return"No current is flowing through the "+g+". The loop is not complete: follow the wires from the battery + through every part and back to the battery \u2212. A wire is probably missing or on the wrong dot."
return"The "+g+" is not getting enough power ("+A.j.ad(Math.abs(d.dy),1)+" V). Try a bigger battery."},
Mr(d){var w=this.a
return new B.Y(w,new C.bPx(d),B.U(w).k("Y<1>"))},
aIk(d){return this.Mr(d).aW(0,new C.bPw(0.35))},
qb(d,e){return A.d.aW(this.a,new C.bPv(e))}}
C.ajJ.prototype={
a4(c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6=this,b7=null,b8=c3.a,b9=c3.b,c0=0+b8,c1=0+b9
$.S()
w=B.J()
w.r=F.y8.gp(0)
c2.aq(new B.a3(0,0,c0,c1),w)
v=B.J()
v.r=A.c.j(0.06).gp(0)
for(u=12;u<b8;u+=24)for(t=12;t<b9;t+=24)c2.N(new B.p(u,t),1.1,v)
for(w=b6.b,s=w.b,r=s.length,q=b6.f,p=0;p<s.length;s.length===r||(0,B.K)(s),++p){o=s[p]
n=o.a
m=n.c
l=o.b===0?-1:1
k=D.mr.ao(0,n.b)?(n.ch-1)*38:0
n=n.d
j=o.c
i=j.c
h=o.d===0?-1:1
g=D.mr.ao(0,j.b)?(j.ch-1)*38:0
b6.cJ6(c2,new B.p(m*b8+l*(42+k),n*b9),new B.p(i*b8+h*(42+g),j.d*b9),o,o===q)}s=b6.d
if(s!=null&&b6.e!=null){f=C.hM0(s.a,s.b,c3)
s=b6.e
s.toString
$.S()
r=B.J()
r.r=A.ab.gp(0)
r.c=3
r.d=A.bB
c2.ah(f,s,r)}for(s=w.a,r=s.length,q=b6.c,n=c2.c,m=b6.r,l=x.v,p=0;p<s.length;s.length===r||(0,B.K)(s),++p){e=s[p]
k=e.c*b8
j=e.d*b9
if(e.Q>0){i=Math.sin(w.d*30)
$.S()
h=new B.ap(A.S,A.N,A.U,A.V,A.T)
h.r=F.Mr.j(A.j.E(e.Q*0.45,0,0.6)).gp(0)
h.y=A.wm
c2.N(new B.p(k,j),46+14*i,h)}d=m.h(0,e.a)
if(d==null)d=1
J.br(n.save())
n.translate(k,j)
i=A.j.E(A.kK.aC(0,A.j.E(d,0,1)),0.01,1.4)
n.scale(i,i)
b6.clD(c2,e,e===q)
n.restore()
i=e.b
if((i==="battery"||i==="solar"||i==="crank"||i==="turbine")&&!e.x&&e.cx>w.Af(e)){h=k+0
g=j+-40
a0=Math.sin(w.d*10)
a1=$.S().r
a2=B.a([],l)
a3=new B.aF(a1,A.ai,b7,b7,a2)
a4=g-13
a2.push(new B.aZ(h,a4))
a3.aa()
a5=h+13
a6=g+10
a7=new B.aq(a5,a6)
a2.push(a7)
a8=a3.f
if(a8!=null)a7.aj(a8)
a3.aa()
a7=h-13
a8=new B.aq(a7,a6)
a2.push(a8)
a9=a3.f
if(a9!=null)a8.aj(a9)
a3.aa()
a8=new B.bv()
a2.push(a8)
a2=a3.f
if(a2!=null)a8.aj(a2)
a3.aa()
a2=new B.ap(A.S,A.N,A.U,A.V,A.T)
a2.r=A.az.j(0.65+0.35*a0).gp(0)
c2.af(a3,a2)
a2=B.a([],l)
a1=new B.aF(a1,A.ai,b7,b7,a2)
a2.push(new B.aZ(h,a4))
a1.aa()
a0=new B.aq(a5,a6)
a2.push(a0)
a3=a1.f
if(a3!=null)a0.aj(a3)
a1.aa()
a0=new B.aq(a7,a6)
a2.push(a0)
a3=a1.f
if(a3!=null)a0.aj(a3)
a1.aa()
a0=new B.bv()
a2.push(a0)
a2=a1.f
if(a2!=null)a0.aj(a2)
a1.aa()
a0=new B.ap(A.S,A.N,A.U,A.V,A.T)
a0.b=A.aa
a0.c=1.6
a0.r=A.c.gp(0)
c2.af(a1,a0)
b0=new B.iG(new B.en("!",b7,b7,A.cH,b7,b7,b7,b7,b7,b7,new B.G(!0,A.c,b7,b7,b7,b7,14,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bW,new B.jf(1),b7,b7,b7,b7,A.bX,b7,A.ct)
b0.eb()
b0.a4(c2,new B.p(h+-3,g+-8))}if(!e.x)h=(D.aSn.q(0,i)||D.A0.ao(0,i)||i==="buck"||i==="regulator")&&!w.tM(e)&&w.Vv(e,0)+w.Vv(e,1)>0
else h=!1
if(h){k+=0
j+=-40
$.S()
h=new B.ap(A.S,A.N,A.U,A.V,A.T)
h.r=A.ax.gp(0)
c2.N(new B.p(k,j),10,h)
b0=new B.iG(new B.en("!",b7,b7,A.cH,b7,b7,b7,b7,b7,b7,new B.G(!0,A.w,b7,b7,b7,b7,14,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bW,new B.jf(1),b7,b7,b7,b7,A.bX,b7,A.ct)
b0.eb()
b0.a4(c2,new B.p(k+-3,j+-8))}for(b1=0;b1<2;++b1){k=e.c
j=b1===0
h=j?-1:1
g=D.mr.ao(0,i)?(e.ch-1)*38:0
g=k*b8+h*(42+g)
h=e.d*b9
b0=new B.p(g,h)
$.S()
k=new B.ap(A.S,A.N,A.U,A.V,A.T)
k.r=F.y8.gp(0)
c2.N(b0,7,k)
k=new B.ap(A.S,A.N,A.U,A.V,A.T)
k.b=A.aa
k.c=2.4
k.r=(j&&w.bhM(e)?A.c_:A.ab).gp(0)
c2.N(b0,6,k)
if(j&&w.bhM(e)){b0=new B.iG(new B.en("+",b7,b7,A.cH,b7,b7,b7,b7,b7,b7,new B.G(!0,A.c_,b7,b7,b7,b7,13,A.u,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7)),A.a5,A.bW,new B.jf(1),b7,b7,b7,b7,A.bX,b7,A.ct)
b0.eb()
b0.a4(c2,new B.p(g+-4,h+-22))}}}for(r=w.f,q=r.length,p=0;p<r.length;r.length===q||(0,B.K)(r),++p){b2=r[p]
n=b2.a*b8+b2.c
m=b2.b*b9+b2.d
b3=new B.p(n,m)
b4=A.j.E(b2.r/0.8,0,1)
l=B.ar(M.N7,F.ZK,b4)
l.toString
k=b2.f
$.S()
j=new B.ap(A.S,A.N,A.U,A.V,A.T)
j.r=l.gp(0)
j.c=2.4
j.d=A.bB
c2.ah(b3,new B.p(n-b2.e*0.035,m-k*0.035),j)
j=new B.ap(A.S,A.N,A.U,A.V,A.T)
j.r=l.j(0.35*b4).gp(0)
j.y=A.H0
c2.N(b3,4.5*b4+1,j)}if(A.d.aW(s,new C.bJL())){b5=A.d.cI(s,0,new C.bJM())
$.S()
b9=B.J()
b9.r=D.bgg.j(0.05+0.09*b5*(0.5+0.5*Math.sin(w.d*22))).gp(0)
c2.aq(new B.a3(0,0,c0,c1),b9)
b0=B.ft(b7,A.ct,b7,b7,b7,D.fkX,A.a5,A.bW,b7,A.dA,A.bX)
b0.o5(b8-24)
b0.a4(c2,new B.p(12,10))}},
qR(d,e,f,g,h){var w=null,v=B.ft(w,A.ct,w,w,w,B.cQ(w,w,w,w,w,w,w,w,w,B.l(w,w,g,w,w,w,w,w,w,w,w,h,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),e),A.a5,A.bW,w,A.dA,A.bX)
v.eb()
v.a4(d,f)},
cJ6(d,a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.aF($.S().r,A.ai,null,null,B.a([],x.v))
e.D(new B.aZ(a0.a,a0.b))
w=C.hE3(a0,a1,a2)
e.D(new B.c8(w.a,w.b,a1.a,a1.b))
v=a2.a
u=Math.abs(v.fr)
t=a2.c
s=Math.abs(t.fr)
r=u+s
q=u>0.003&&s>0.003
p=Math.max(v.Q,t.Q)
if(p>0.05){u=B.ar(A.aU,F.Mr,A.j.E(p/1.2,0,1))
u.toString
o=u}else if(q){u=B.ar(A.aJ,A.aU,A.j.E(r*1.2,0,1))
u.toString
o=u}else o=A.bo
u=B.J()
u.b=A.aa
u.c=a3?7:5
u.d=A.bB
s=a3?A.c:o
u.r=s.j(q?0.4:0.55).gp(0)
d.af(e,u)
u=B.J()
u.b=A.aa
u.c=2.4
u.d=A.bB
u.r=(a3?A.c:o).gp(0)
d.af(e,u)
if(q){n=new B.TJ(new B.rr(B.xE(e),!1,B.a([],x.R))).gH(0)
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
f=t[u].Dc(g)
j=new B.ap(A.S,A.N,A.U,A.V,A.T)
j.r=A.c.gp(0)
d.N(f.a,2.6,j);++k}}},
PC(d,e,f,g){var w,v,u,t
$.S()
w=B.J()
v=g?A.b6:A.a6
u=g?A.b8:A.a9
t=B.ar(e,A.w,0.3)
t.toString
w.sav(new B.a9(v,u,A.x,B.a([e,f,e,t],x.O),A.In,null).aJ(0,d))
return w},
axW(d,e,f){return this.PC(d,e,f,!0)},
c6K(d,e){return this.PC(d,A.bo,A.iB,e)},
aiH(d,e){var w,v,u
$.S()
w=B.J()
w.sav(D.aQz.aJ(0,B.bX(e,4.2)))
d.N(e,4.2,w)
w=e.a5(0,D.emy)
v=e.a5(0,D.emH)
u=B.J()
u.r=A.ed.gp(0)
u.c=1.2
d.ah(w,v,u)},
clD(c1,c2,c3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=null,b5=4294626325,b6=4286331629,b7=4287322667,b8=4293870660,b9=$.S(),c0=B.J()
c0.sav(D.c5h.aJ(0,D.f61))
c0.c=3.4
c0.d=A.bB
w=B.J()
w.r=A.w.j(0.45).gp(0)
w.y=N.op
c1.bY(D.f5Q,w)
if(c3){w=B.bn(D.f6_,A.jI)
v=B.J()
v.r=A.c.j(0.14).gp(0)
c1.am(w,v)}u=C.hjv(c2)
c1.ah(new B.p(-u,0),D.eo9,c0)
c1.ah(D.ele,new B.p(u,0),c0)
t=c2.x
w=c2.b
s=D.mr.ao(0,w)&&c2.ch!==1
if(s){J.br(c1.c.save())
c1.bU(0,c2.ch)}switch(w){case"battery":b3.bFY(c1,c2)
break
case"solar":r=B.bn(D.f5T,A.iw)
c1.am(r,b3.PC(new B.a3(r.a,r.b,r.c,r.d),A.di,A.bP,!1))
b9=B.J()
w=B.ar(D.bk8,A.d9,0.25+0.55*c2.f)
w.toString
v=B.ar(D.btn,A.mN,0.3+0.4*c2.f)
v.toString
b9.sav(new B.a9(A.aA,A.aF,A.x,B.a([w,v],x.O),b4,b4).aJ(0,D.a99))
c1.aq(D.a99,b9)
q=B.J()
q.r=A.c.j(0.35).gp(0)
q.c=0.8
for(p=1;p<6;++p){b9=-34+p*68/6
c1.ah(new B.p(b9,-18),new B.p(b9,18),q)}for(p=1;p<4;++p){b9=-18+p*9
c1.ah(new B.p(-34,b9),new B.p(34,b9),q)}for(p=0;p<6;++p){b9=-34+(p+0.5)*68/6
$.S()
w=new B.ap(A.S,A.N,A.U,A.V,A.T)
w.r=A.cu.j(0.5).gp(0)
w.c=0.6
c1.ah(new B.p(b9,-18),new B.p(b9,18),w)}b9=new B.aF($.S().r,A.ai,b4,b4,B.a([],x.v))
b9.D(new B.aZ(-34,18))
b9.D(new B.aq(-6+40*c2.f,-18))
b9.D(new B.aq(4+40*c2.f,-18))
b9.D(new B.aq(-24,18))
b9.D(new B.bv())
w=B.J()
w.r=A.c.j(0.1+0.22*c2.f).gp(0)
c1.af(b9,w)
w=c2.f
b9=B.J()
b9.r=A.dF.j(0.9).gp(0)
c1.N(D.eli,4+4*w,b9)
break
case"crank":o=B.bn(D.f5E,A.fI)
c1.am(o,b3.axW(new B.a3(o.a,o.b,o.c,o.d),A.bv,A.bM))
b9=B.J()
b9.sav(D.aQA.aJ(0,B.bX(A.H,12)))
c1.N(A.H,12,b9)
n=new B.p(Math.cos(c2.y)*22,Math.sin(c2.y)*22)
b9=B.J()
b9.r=A.cu.gp(0)
b9.c=5
b9.d=A.bB
c1.ah(A.H,n,b9)
b9=B.J()
b9.sav(D.exE.aJ(0,B.bX(n,7)))
c1.N(n,7,b9)
b3.aiH(c1,D.eo1)
b3.aiH(c1,D.el3)
break
case"turbine":b9=b9.r
w=x.v
v=new B.aF(b9,A.ai,b4,b4,B.a([],w))
v.D(new B.aZ(-3,24))
v.D(new B.aq(3,24))
v.D(new B.aq(1.5,0))
v.D(new B.aq(-1.5,0))
v.D(new B.bv())
m=B.J()
m.r=A.bP.gp(0)
c1.af(v,m)
for(v=c1.c,l=0;l<3;++l){m=c2.y
J.br(v.save())
v.rotate((m+l*2.094)*180/3.141592653589793,0,0)
m=B.a([],w)
k=new B.aF(b9,A.ai,b4,b4,m)
m.push(new B.aZ(0,-2))
k.aa()
j=new B.c8(6,-14,2,-30)
m.push(j)
i=k.f
if(i!=null)j.aj(i)
k.aa()
j=new B.c8(-2,-14,0,-2)
m.push(j)
i=k.f
if(i!=null)j.aj(i)
k.aa()
j=new B.bv()
m.push(j)
m=k.f
if(m!=null)j.aj(m)
k.aa()
m=new B.ap(A.S,A.N,A.U,A.V,A.T)
m.r=A.c.gp(0)
c1.af(k,m)
v.restore()}b9=B.J()
b9.sav(D.exm.aJ(0,B.bX(A.H,4.5)))
c1.N(A.H,4.5,b9)
break
case"switch":o=B.bn(D.f5L,A.n6)
b9=B.J()
b9.sav(D.asD.aJ(0,new B.a3(o.a,o.b,o.c,o.d)))
c1.am(o,b9)
b3.aiH(c1,D.TP)
b3.aiH(c1,D.aLl)
h=c2.w?D.aLl:H.aLc
b9=B.J()
b9.r=A.au.gp(0)
b9.c=6
b9.d=A.bB
c1.ah(D.TP,h,b9)
b9=B.J()
b9.r=(c2.w?A.b9:A.bP).gp(0)
b9.c=4
b9.d=A.bB
c1.ah(D.TP,h,b9)
b9=B.kD(D.TP,h,0.85)
b9.toString
w=B.J()
w.r=A.az.gp(0)
c1.N(b9,5,w)
break
case"fuse":g=B.bn(D.aRh,D.aQE)
b9=B.J()
b9.r=A.fE.j(0.25).gp(0)
c1.am(g,b9)
b9=B.J()
b9.b=A.aa
b9.c=1.4
b9.r=A.aD.gp(0)
c1.am(g,b9)
if(!t){b9=B.J()
b9.c=1.6
b9.r=B.ar(A.bP,A.cJ,c2.fx).gp(0)
c1.ah(D.aLF,D.aLj,b9)}else{b9=B.J()
b9.c=1.6
b9.r=A.bV.gp(0)
c1.ah(D.aLF,D.eov,b9)
b9=B.J()
b9.c=1.6
b9.r=A.bV.gp(0)
c1.ah(D.em5,D.aLj,b9)
b9=B.J()
b9.r=A.dN.gp(0)
c1.N(A.H,6,b9)}for(f=0;f<2;++f){e=B.bB(new B.p(M.hL[f]*22,0),20,9)
c1.am(B.bn(e,A.hw),b3.PC(e,A.d2,A.o6,!0))}break
case"pot":b9=B.J()
b9.sav(D.exw.aJ(0,B.bX(A.H,21)))
c1.N(A.H,21,b9)
for(l=0;l<=10;++l){d=2.356194490192345+l*3.141592653589793*1.5/10
b9=Math.cos(d)
w=Math.sin(d)
v=Math.cos(d)
m=Math.sin(d)
k=new B.ap(A.S,A.N,A.U,A.V,A.T)
k.r=A.aD.gp(0)
k.c=1.2
c1.ah(new B.p(b9*18,w*18),new B.p(v*22,m*22),k)}b9=B.J()
b9.sav(D.exk.aJ(0,B.bX(A.H,13)))
c1.N(A.H,13,b9)
a0=2.356194490192345+c2.f*3.141592653589793*1.5
b9=Math.cos(a0)
w=Math.sin(a0)
v=Math.cos(a0)
m=Math.sin(a0)
k=B.J()
k.r=A.aU.gp(0)
k.c=3
k.d=A.bB
c1.ah(new B.p(b9*3,w*3),new B.p(v*12,m*12),k)
break
case"resistor":a1=B.bn(D.aRh,D.aQE)
b9=B.J()
b9.sav(D.c8y.aJ(0,new B.a3(a1.a,a1.b,a1.c,a1.d)))
c1.am(a1,b9)
b9=x.O
a2=B.H([47,B.a([B.b0(b5),B.b0(b6),A.w],b9),100,B.a([B.b0(b7),A.w,B.b0(b7)],b9),220,B.a([B.b0(b8),B.b0(b8),B.b0(b7)],b9),470,B.a([B.b0(b5),B.b0(b6),B.b0(b7)],b9),1000,B.a([B.b0(b7),A.w,B.b0(b8)],b9)],x.i,x.bF)
a3=a2.h(0,c2.r)
if(a3==null){b9=a2.h(0,100)
b9.toString
a3=b9}for(p=0;p<3;++p){b9=-14+p*9
w=new B.ap(A.S,A.N,A.U,A.V,A.T)
w.r=a3[p].gp(0)
c1.aq(new B.a3(b9,-9,b9+4.5,9),w)}b9=B.J()
b9.r=A.aU.gp(0)
c1.aq(D.f6d,b9)
b9=c2.r
b3.qR(c1,b9>=1000?"1k\u03a9":""+A.j.V(b9)+"\u03a9",D.enu,A.ab,10)
break
case"bulb":w=c2.fx
if(w>0){v=B.J()
v.r=A.dF.j(0.55*w).gp(0)
v.y=A.wm
c1.N(H.vk,34,v)}o=B.bB(D.ejY,12,18)
c1.am(B.bn(o,A.hw),b3.PC(o,A.bo,A.e6,!0))
for(p=0;p<3;++p){w=13+p*3.5
v=new B.ap(A.S,A.N,A.U,A.V,A.T)
v.r=A.dq.gp(0)
v.c=1
c1.ah(new B.p(-9,w),new B.p(9,w),v)}w=B.J()
if(t)v=A.Mh
else{v=B.ar(A.e6,A.i4,c2.fx)
m=c2.fx
v=v.j(0.25+0.7*m)}if(t)m=A.G_
else{m=B.ar(A.di,A.dF,c2.fx)
m.toString}w.sav(new B.c0(A.tI,0.5,A.x,b4,0,B.a([v,m.j(0.18+0.5*c2.fx)],x.O),b4,b4).aJ(0,B.bX(A.ti,17)))
c1.N(A.ti,17,w)
w=B.J()
w.b=A.aa
w.c=1.4
w.r=A.c.j(0.6).gp(0)
c1.N(A.ti,17,w)
b9=b9.r
w=x.v
m=new B.aF(b9,A.ai,b4,b4,B.a([],w))
m.D(new B.aZ(-9,-12))
m.D(new B.c8(-12,-4,-9,0))
v=B.J()
v.b=A.aa
v.c=2
v.r=A.c.j(0.45).gp(0)
c1.af(m,v)
v=B.J()
v.r=A.d_.gp(0)
v.c=1.4
c1.ah(D.eop,D.eor,v)
v=B.J()
v.r=A.d_.gp(0)
v.c=1.4
c1.ah(D.elZ,D.em1,v)
w=B.a([],w)
a4=new B.aF(b9,A.ai,b4,b4,w)
a4.D(new B.aZ(-4,-2))
for(l=0;l<6;l=a5){a5=l+1
b9=(l&1)===0?-6:1
b9=new B.aq(-4+a5*8/6,-2+b9)
w.push(b9)
v=a4.f
if(v!=null)b9.aj(v)
a4.aa()}$.S()
b9=B.J()
b9.b=A.aa
b9.c=1.8
if(t)w=A.aT
else{w=B.ar(A.di,D.bl9,c2.fx)
w.toString}b9.r=w.gp(0)
c1.af(a4,b9)
break
case"led":w=c2.fx
if(w>0){v=B.J()
v.r=A.az.j(0.6*w).gp(0)
v.y=D.bHx
c1.N(A.ti,30,v)}w=B.J()
w.r=A.e6.gp(0)
w.c=2.4
c1.ah(D.eox,D.eow,w)
w=B.J()
w.r=A.e6.gp(0)
w.c=2.4
c1.ah(D.em7,D.em6,w)
b9=b9.r
w=x.v
a6=new B.aF(b9,A.ai,b4,b4,B.a([],w))
a6.D(new B.aZ(-12,8))
a6.D(new B.aq(-12,-6))
a6.D(new B.c8(0,-26,12,-6))
a6.D(new B.aq(12,8))
a6.D(new B.bv())
v=B.J()
if(t)m=A.iG
else{m=B.ar(A.et,D.bmT,c2.fx)
m.toString}if(t)k=A.kR
else{k=B.ar(A.ko,A.az,c2.fx)
k.toString}v.sav(new B.a9(A.aA,A.aF,A.x,B.a([m,k],x.O),b4,b4).aJ(0,D.f55))
c1.af(a6,v)
v=B.J()
v.b=A.aa
v.c=1.2
v.r=A.jV.gp(0)
c1.af(a6,v)
v=B.J()
v.r=A.eo.gp(0)
c1.aq(D.f5b,v)
w=new B.aF(b9,A.ai,b4,b4,B.a([],w))
w.D(new B.aZ(-7,-4))
w.D(new B.c8(-6,-12,0,-15))
b9=B.J()
b9.b=A.aa
b9.c=2
b9.r=A.c.j(0.5).gp(0)
c1.af(w,b9)
break
case"motor":a7=new B.a3(-28,-14,20,14)
c1.am(B.bn(a7,A.hP),b3.axW(a7,A.an,A.aO))
b9=B.J()
b9.r=A.cs.gp(0)
c1.aq(D.f4F,b9)
b9=B.J()
b9.r=A.cu.gp(0)
c1.aq(D.f4H,b9)
b9=c1.c
J.br(b9.save())
b9.translate(31,0)
for(l=0;l<3;++l){J.br(b9.save())
b9.rotate((c2.y+l*2.094)*180/3.141592653589793,0,0)
w=B.bB(H.aL7,15,7)
v=new B.ap(A.S,A.N,A.U,A.V,A.T)
v.r=A.cJ.j(0.9).gp(0)
c1.bY(w,v)
b9.restore()}w=B.J()
w.r=A.au.gp(0)
c1.N(A.H,3,w)
b9.restore()
b3.qR(c1,"M",D.eo0,A.au,14)
break
case"buzzer":a8=B.bB(A.H,42,42)
b9=B.J()
b9.sav(D.exA.aJ(0,a8))
c1.bY(a8,b9)
b9=B.J()
b9.r=A.w.gp(0)
c1.N(A.H,6,b9)
b9=B.J()
b9.b=A.aa
b9.c=1.4
b9.r=A.aV.gp(0)
c1.N(A.H,6,b9)
b3.qR(c1,"+",D.enU,A.ab,12)
for(b9=b3.b,l=1;l<=3;++l){w=c2.fx
v=w>0?A.j.F(b9.d*14,5):0
v=B.bX(A.H,24+l*5+v)
m=new B.ap(A.S,A.N,A.U,A.V,A.T)
m.b=A.aa
m.c=2
m.r=A.c4.j(w*(1-l*0.22)).gp(0)
c1.cM(v,-0.7,1.4,!1,m)}break
case"heater":o=B.bn(D.f5H,A.hP)
w=B.J()
w.sav(D.c6f.aJ(0,new B.a3(o.a,o.b,o.c,o.d)))
c1.am(o,w)
w=B.a([],x.v)
a9=new B.aF(b9.r,A.ai,b4,b4,w)
a9.D(new B.aZ(-24,0))
for(l=0;l<8;l=a5){b9=(l&1)===0?-10:10
a5=l+1
b9=new B.c8(-24+l*6+3,b9,-24+a5*6,0)
w.push(b9)
v=a9.f
if(v!=null)b9.aj(v)
a9.aa()}b9=c2.fx
if(b9>0.1){$.S()
w=B.J()
w.b=A.aa
w.c=10
w.r=D.blT.j(0.5*b9).gp(0)
w.y=A.kW
c1.af(a9,w)}$.S()
b9=B.J()
b9.b=A.aa
b9.c=3.2
b9.d=A.bB
b9.r=B.ar(A.m4,Aa.yf,c2.fx).gp(0)
c1.af(a9,b9)
break
case"capacitor":a7=new B.a3(-16,-22,16,18)
b9=B.bn(a7,A.hP)
w=B.J()
w.sav(D.c59.aJ(0,a7))
c1.am(b9,w)
w=B.J()
w.r=A.bP.gp(0)
c1.aq(D.f5k,w)
for(p=0;p<4;++p){b0=new B.iG(new B.en("\u2212",b4,b4,A.cH,b4,b4,b4,b4,b4,b4,new B.G(!0,A.au,b4,b4,b4,b4,11,A.u,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4)),A.a5,A.bW,new B.jf(1),b4,b4,b4,b4,A.bX,b4,A.ct)
b0.eb()
b0.a4(c1,new B.p(-14,-18+p*9))}b1=new B.a3(-16,-24,16,-17)
c1.am(B.bn(b1,A.hw),b3.c6K(b1,!1))
b9=38*c2.fx
w=18-b9
$.S()
v=B.J()
v.r=A.b9.j(0.5).gp(0)
c1.aq(new B.a3(-3,w,11,w+b9),v)
b3.qR(c1,"1F",H.vk,A.c,11)
break
case"radio":a1=B.bn(D.a99,A.fI)
b9=B.J()
b9.sav(D.c8O.aJ(0,new B.a3(a1.a,a1.b,a1.c,a1.d)))
c1.am(a1,b9)
b9=B.J()
b9.b=A.aa
b9.c=1.4
b9.r=A.o6.j(0.6).gp(0)
c1.am(a1,b9)
b9=B.bn(D.f5I,A.iw)
w=B.J()
w.r=A.dS.gp(0)
c1.am(b9,w)
for(p=0;p<6;++p){b9=-10+p*4.4
w=new B.ap(A.S,A.N,A.U,A.V,A.T)
w.r=A.m4.gp(0)
w.c=1.4
c1.ah(new B.p(-27,b9),new B.p(-3,b9),w)}b9=B.J()
b9.r=(c2.fx>0?A.h6:A.o9).gp(0)
c1.aq(D.f4M,b9)
if(c2.fx>0){b9=8+A.j.F(b3.b.d*7,18)
w=B.J()
w.r=A.bD.gp(0)
w.c=1.6
c1.ah(new B.p(b9,-13),new B.p(b9,-3),w)}b9=B.J()
b9.sav(D.aQA.aJ(0,B.bX(D.a86,6)))
c1.N(D.a86,6,b9)
b9=B.J()
b9.r=A.o6.gp(0)
c1.N(D.eld,4,b9)
b9=B.J()
b9.r=A.e6.gp(0)
b9.c=1.8
c1.ah(D.el8,D.aLq,b9)
if(c2.fx>0)for(b9=b3.b,l=1;l<=2;++l){w=B.bX(D.aLq,4+l*5+A.j.F(b9.d*8,5))
v=new B.ap(A.S,A.N,A.U,A.V,A.T)
v.b=A.aa
v.c=1.4
v.r=A.oe.j(0.7).gp(0)
c1.cM(w,-2.4,1.6,!1,v)}break
case"tv":w=B.bn(D.f5S,A.hP)
v=B.J()
v.r=M.ns.gp(0)
c1.am(w,v)
b2=B.bn(D.f5P,A.hw)
if(c2.fx>0&&!c2.x){b9=c1.c
J.br(b9.save())
b9.clipRRect(B.om(b2),$.nL(),!0)
b9.translate(-33,-21)
L.hfs(c1,D.fcE,c2.at,b3.b.d,c2.ax,-1)
b9.restore()
b9=B.J()
b9.r=A.b9.gp(0)
c1.N(D.elp,1.6,b9)}else{w=B.J()
w.r=D.w4.gp(0)
c1.am(b2,w)
b9=new B.aF(b9.r,A.ai,b4,b4,B.a([],x.v))
b9.D(new B.aZ(-33,-21))
b9.D(new B.aq(-10,-21))
b9.D(new B.aq(-33,0))
b9.D(new B.bv())
w=B.J()
w.r=A.c.j(0.05).gp(0)
c1.af(b9,w)}b9=B.J()
b9.r=A.bv.gp(0)
c1.aq(D.f5a,b9)
break}C.ioD(c1,c2,b3.b.d,b3.gcbh())
if(t)b3.qR(c1,"\u2716",D.eoA,A.az,14)
if(s)c1.c.restore()},
bFY(d,e){var w,v,u,t,s,r,q,p,o=this,n=e.e
if(n<=4.5){w=new B.a3(-28,-13,28,13)
d.am(B.bn(w,A.n6),o.axW(w,A.di,A.jj))
v=new B.a3(-22,-13,22,13)
$.S()
u=B.J()
u.sav(D.asw.aJ(0,v))
d.aq(v,u)
u=B.J()
u.r=A.e1.gp(0)
d.aq(D.f5u,u)
t=new B.a3(28,-5,34,5)
d.am(B.bn(t,A.hv),o.PC(t,A.di,A.iB,!0))
o.qR(d,"+",D.ekP,A.aU,11)
o.qR(d,"\u2212",D.eo2,A.ab,11)
o.qR(d,B.w(n===A.j.iY(n)?A.j.V(n):n)+"V",D.enJ,A.aU,13)
if(n===1.5){u=B.J()
u.r=A.bz.gp(0)
d.aq(D.f5t,u)
u=e.as
s=B.J()
s.r=B.ar(A.az,A.b9,u).gp(0)
d.aq(new B.a3(-22,14,-22+44*u,18),s)
if(e.as<=0.02)o.qR(d,"FLAT",D.ent,A.c_,9)}if(n>2){u=B.J()
u.r=A.aV.gp(0)
u.c=1
d.ah(D.ek6,D.aL_,u)
o.qR(d,n>3?"3 cells":"2 cells",D.enI,A.aD,8)}}else if(n<=9){r=new B.a3(-22,-17,22,17)
u=B.bn(r,A.n6)
$.S()
s=B.J()
s.sav(D.c8m.aJ(0,r))
d.am(u,s)
s=B.J()
s.r=A.cY.gp(0)
d.aq(D.f5v,s)
for(q=0;q<2;++q){p=F.aC6[q]
u=p<0?5:3.6
s=new B.ap(A.S,A.N,A.U,A.V,A.T)
s.sav(D.aQz.aJ(0,B.bX(new B.p(p,-18),5)))
d.N(new B.p(p,-18),u,s)}o.qR(d,"9V",D.enB,A.c,16)}else{r=new B.a3(-34,-16,34,16)
u=B.bn(r,A.iw)
$.S()
s=B.J()
s.sav(D.asw.aJ(0,r))
d.am(u,s)
s=B.J()
s.r=A.bq.gp(0)
d.aq(D.f5R,s)
for(q=0;q<2;++q){u=B.bn(B.bB(new B.p(F.Sq[q],-20),8,10),A.hv)
s=new B.ap(A.S,A.N,A.U,A.V,A.T)
s.r=A.cu.gp(0)
d.am(u,s)}o.qR(d,"+",D.ekY,A.az,10)
o.qR(d,"12V",D.enF,A.au,15)}},
aE(d){return!0}}
C.mS.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
A.d.a8(k)
A.d.a8(d.b)
w=B.T(x.N,x.W)
for(v=this.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.K)(v),++t){s=v[t].a
r=s[1]
q=s[2]
p=s[3]
o="p"+d.c++
n=new C.tU(o,r,q,p)
n.arV(o,r,q,p)
k.push(n)
J.iz(s[4],new C.ct7(n))
w.n(0,s[0],n)}for(k=this.d,v=k.length,t=0;t<k.length;k.length===v||(0,B.K)(k),++t){u=k[t].a
m=w.h(0,u[0])
l=w.h(0,u[2])
if(m!=null&&l!=null)d.alV(m,u[1],l,u[3])}}}
C.ajH.prototype={
S(){var w=x.N
return new C.ajI(A.H,A.ay,B.T(w,x.gl),B.aR(w),$,A.bC,0,B.a([],x.X),null,null)}}
C.ajI.prototype={
af7(d){var w=this,v=w.as
if(v!=null)v.a1(0)
w.m(new C.bJp(w,d))
w.as=B.cz(A.lI,new C.bJq(w))},
t(){var w=this.as
if(w!=null)w.a1(0)
w=this.ch
if(w!=null)w.a1(0)
this.bvD()},
a0L(d,e){return this.cjy(d,e)},
b2Y(d){return this.a0L(d,!1)},
cjy(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a0L=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
r=d.at
q=e?A.rM:A.ys
p=d.b
w=3
return B.b(L.hfP(s,r,p,d.ax<3.2,q,$.qy().h(0,p).b),$async$a0L)
case 3:o=g
t.ay=!1
if(o!=null)d.at=o
case 1:return B.h(u,v)}})
return B.i($async$a0L,v)},
cwh(d){var w=this,v=new B.V(Date.now(),0,!1),u=w.at.c3(0,d.a,new C.bJr()),t=J.cC(u)
t.J(u,v)
t.bt(u,new C.bJs(v))
if(t.gI(u)>=4){t.a8(u)
t=w.ch
if(t!=null)t.a1(0)
w.a24(d)
return}if(t.gI(u)===3){t=w.ch
if(t!=null)t.a1(0)
w.ch=B.cz(A.iJ,new C.bJt(w,u,d))}},
a0r(d){return this.chU(d)},
chU(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$a0r=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.ay||t.c==null){w=1
break}t.ay=!0
s=t.c
s.toString
w=3
return B.b(C.ipO(s,d.b,A.j.V(A.j.F(t.a.c.d*0.12,1)*100)),$async$a0r)
case 3:t.ay=!1
case 1:return B.h(u,v)}})
return B.i($async$a0r,v)},
a24(d){return this.ctR(d)},
ctR(d){var w=0,v=B.j(x.H),u=this,t
var $async$a24=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bT(A.L,null,new C.bJn(u,d),t,!0,!0,!0,null,!1,!1,x.H),$async$a24)
case 2:return B.h(null,v)}})
return B.i($async$a24,v)},
Y(){this.a3()
this.bhW()
this.me()},
bhW(){this.a.c.e=new C.bJI(this)},
mw(d){var w,v,u,t,s,r,q=this,p="tri",o="noise"
q.a.c.vH(0,d)
for(w=q.a.c.a,v=w.length,u=q.ax,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
r=D.mr.h(0,s.b)
if((r==null?null:r.b)!==D.Ar)continue
if(s.fx>0&&!s.x){q.a.toString
if(!u.q(0,s.a)&&!q.ay){u.J(0,s.a)
q.a0L(s,!0)}}else u.W(0,s.a)}if((q.z+=d)>0.16){q.z=0
for(w=q.a.c.a,v=w.length,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
if(s.x)continue
switch(s.b){case"buzzer":u=s.fx
if(u>0.2)G.dF(520,"",110,0,0.16*u,"square")
break
case"motor":u=s.fx
if(u>0.08)G.dF(60+u*55,"",130,0,0.12,p)
break
case"heater":if(s.fx>0.2)u=A.cM.ai()<0.5
else u=!1
if(u)G.dF(2400,"",25,0,0.12*s.fx,o)
break
case"radio":if(s.fx>0){G.dF(900+A.cM.aw(800),"",90,0,0.1,o)
if(A.cM.ai()<0.35)G.dF(300+A.cM.aw(6)*70,"",150,0,0.12,p)}break
case"tv":if(s.fx>0)u=A.cM.ai()<0.4
else u=!1
if(u)G.dF(3000,"",40,0,0.07,o)
break
case"speaker":if(s.fx>0)G.dF(330+A.o.F(110*A.j.bh(q.a.c.d*3),4),"",140,0,0.14,p)
break
case"siren":if(s.fx>0)G.dF((A.j.bh(q.a.c.d*2)&1)===0?700:950,"",150,0,0.12,"square")
break
case"fan":u=s.fx
if(u>0.1)G.dF(90+u*40,"",140,0,0.04,o)
break
case"toycar":u=s.fx
if(u>0.1)G.dF(70+u*60,"",130,0,0.1,p)
break
case"kettle":if(s.fx>0)u=A.cM.ai()<0.5
else u=!1
if(u)G.dF(1200,"",30,0,0.07,o)
break
case"turbine":u=s.f
if(u>0.1)G.dF(80,"",150,0,0.05*u,o)
break
case"crank":u=s.f
if(u>0.15)G.dF(110+u*140,"",70,0,0.08,"saw")
break}}}w=q.a.w
if(w!=null)w.$0()
q.m(new C.bJJ())},
ba0(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.a.c.a,v=w.length,u=d.a,t=d.b,s=null,r=24,q=0;q<w.length;w.length===v||(0,B.K)(w),++q){p=w[q]
for(o=p.b,n=0;n<2;++n){m=this.y
l=p.c
k=n===0?-1:1
j=D.mr.ao(0,o)?(p.ch-1)*38:0
j=l*m.a+k*(42+j)-u
m=p.d*m.b-t
i=Math.sqrt(j*j+m*m)
if(i<r){s=new B.y(p,n)
r=i}}}return s},
b3E(d){var w,v,u,t,s,r,q,p,o
for(w=this.a.c.a,v=B.U(w).k("ds<1>"),w=new B.ds(w,v),w=new B.bO(w,w.gI(0),v.k("bO<ak.E>")),u=d.a,v=v.k("ak.E"),t=d.b;w.C();){s=w.d
if(s==null)s=v.a(s)
r=s.c
q=this.y
p=s.d
o=D.mr.ao(0,s.b)?s.ch:1
if(Math.abs(u-r*q.a)<36*o&&Math.abs(t-p*q.b)<26*o)return s}return null},
cJ7(a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
for(w=this.a.c.b,v=w.length,u=a2.a,t=a2.b,s=null,r=16,q=0;q<w.length;w.length===v||(0,B.K)(w),++q){p=w[q]
o=p.a
n=this.y
m=o.c
l=p.b===0?-1:1
k=D.mr.ao(0,o.b)?(o.ch-1)*38:0
k=m*n.a+l*(42+k)
n=o.d*n.b
o=p.c
l=this.y
m=o.c
j=p.d===0?-1:1
i=D.mr.ao(0,o.b)?(o.ch-1)*38:0
i=m*l.a+j*(42+i)
l=o.d*l.b
h=C.hE3(new B.p(k,n),new B.p(i,l),p)
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
af5(){this.a.toString
this.m(new C.bIS())},
bsh(d){var w,v,u,t,s,r,q,p=this,o=null,n=0
for(;;){if(!(n<6&&o==null))break
for(w=0.13+n*0.15,v=0;v<3;++v){u=D.dbi[v]
if(!A.d.aW(p.a.c.a,new C.bJK(u,w))){o=new B.p(u,w)
break}}++n}t=p.a.c
s=o==null
r=s?Q.Js:o
s=s?Q.Js:o
q=t.al4(0,d,r.a,s.b)
s=p.a.d
if(s!=null)s.n(0,q.a,0)
p.d=q
p.e=null
G.dF(1200,"",50,0,0.3,"tri")
p.af5()},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=n.d
n.a.toString
w=B.a([],x.s)
for(v=0;v<76;++v)w.push(D.Sc[v].a)
u=w.length
t=u>8
s=t?A.d.dt(w,0,A.o.ar(u+1,2)):w
r=t?A.d.fO(w,A.o.ar(w.length+1,2)):A.Z
q=n.a.d
if(q!=null){w=B.a4(q).k("cx<1>")
w=B.C(new B.cx(q,w),w.k("M.E"))
u=w.length
v=0
for(;v<w.length;w.length===u||(0,B.K)(w),++v){p=w[v]
o=q.h(0,p)
q.n(0,p,Math.min(1,(o==null?1:o)+0.03))}}w=B.a([],x.p)
n.a.toString
w.push(n.b3t(s,!0))
n.a.toString
if(t)w.push(n.b3t(r,!0))
w.push(B.E(B.cs(new C.bJH(n,q,m)),1))
return B.x(w,A.m,null,A.e,A.i,0,A.p)},
b3t(d,e){var w,v,u,t,s,r,q,p=null,o=A.c.j(0.08),n=x.p,m=B.a([],n)
for(w=d.length,v=0;v<d.length;d.length===w||(0,B.K)(d),++v){u=d[v]
t=$.qy()
s=t.h(0,u).d.j(0.14)
r=new B.aP(14,14)
q=new B.ay(t.h(0,u).d.j(0.5),1,A.r,-1)
m.push(B.aA(p,B.q(p,B.x(B.a([B.d(t.h(0,u).c,p,p,p,p,p,p,A.AK,p,p,p),B.d(t.h(0,u).b,p,1,A.a2,p,p,p,A.nQ,p,p,p)],n),A.m,p,A.ba,A.i,0,A.p),A.f,p,p,new B.o(s,p,new B.bH(q,q,q,q),new B.bg(r,r,r,r),p,p,A.n),p,p,p,I.on,p,p,p,62),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bIT(this,u),p,p,p,p,p,p,!1,A.a4))}return B.q(p,B.cl(m,p,p,A.h8,p,p,A.aL,!1),A.f,p,p,new B.o(I.BI,p,new B.bH(A.a1,A.a1,new B.ay(o,1,A.r,-1),A.a1),p,p,p,A.n),p,58,p,p,p,p,p,p)},
b0Q(d){var w=null,v=B.n(18)
return B.q(w,d,A.f,w,w,new B.o(F.afj,w,B.L(A.bz,A.r,1),v,w,w,A.n),w,w,w,w,F.all,w,w,w)},
clE(d){var w,v,u,t,s,r,q=this,p=null,o=d.b,n=$.qy().h(0,o),m=d.dy,l=d.fr,k=new C.bJb(q,n),j=B.d(n.c,p,p,p,p,p,p,A.Kz,p,p,p),i=n.b,h=n.d,g=x.p
i=B.A(B.a([j,A.ae,B.E(B.d(i,p,p,p,p,p,p,B.l(p,p,h,p,p,p,p,p,p,p,p,16,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),1),B.aG(p,p,p,p,D.bXe,p,p,p,new C.bIZ(q,d),p,p,p,p,"Remove part",A.ce),B.aG(p,p,p,p,A.PJ,p,p,p,new C.bJ_(q),p,p,p,p,p,A.ce)],g),A.m,p,A.e,A.i,0,p,p)
j=B.d(n.e,p,p,p,p,p,p,I.EH,p,p,p)
w=B.d("How it is made: "+n.f,p,p,p,p,p,p,D.fu8,p,p,p)
m=d.x?"Burnt out! Press Repair.":"Now: "+A.j.ad(Math.abs(d.dy),2)+" volts  \xb7  "+A.j.ad(Math.abs(d.fr)*1000,0)+" milliamps  \xb7  "+A.j.ad(Math.abs(m*l),2)+" watts"
m=B.a([i,j,A.aw,w,A.am,B.d(m,p,p,p,p,p,p,B.l(p,p,d.x?A.c_:A.aU,p,p,p,p,p,p,p,p,12.5,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],g)
v=q.a.c.bfP(d)
if(v!=null){l=(d.x?A.az:A.ax).j(0.14)
j=B.n(10)
i=B.L((d.x?A.az:A.ax).j(0.5),A.r,1)
m.push(new B.D(A.i9,B.q(p,B.d((d.x?"Why it burnt out":"Why it is not working")+": "+v,p,p,p,p,p,p,D.fAT,p,p,p),A.f,p,p,new B.o(l,p,i,j,p,p,A.n),p,p,p,p,A.cl,p,p,p),p))}if(C.hdv(o)){l=B.a([],g)
for(u=0;u<10;u=t){t=u+1
l.push(new E.dW("CH "+t,d.at===u,new C.bJ0(q,d,u),p,h,p))}l=B.bW(A.bH,l,A.bt,p,4,6)
l=B.a([A.am,l,A.aw,B.d(q.a.c.tM(d)?"Showing: "+F.RX[A.o.F(d.at,10)].a+". Tap the TV 3 times quickly to open the big screen.":"The TV is off. Give it power with the + dot towards the battery +.",p,p,p,p,p,p,A.hg,p,p,p)],g)
if(q.a.c.tM(d))l.push(new E.fB(A.Ht,"Open big screen",new C.bJ3(q,d),h,p))
A.d.v(m,l)}if(D.mr.ao(0,o)&&!C.hdv(o)){l=B.a([A.am,B.d(q.a.c.tM(d)?"Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.":"It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.",p,p,p,p,p,p,A.hg,p,p,p)],g)
if(q.a.c.tM(d))l.push(new E.fB(A.Pr,"Open the "+$.qy().h(0,o).b,new C.bJ4(q,d),h,p))
A.d.v(m,l)}if(D.mr.ao(0,o))A.d.v(m,B.a([A.am,new E.fB(A.CP,"Make it bigger (or tap it 4 times)",new C.bJ5(q,d),h,p)],g))
q.a.toString
l=o==="buck"
if(l||o==="regulator"){j=A.j.ad(d.db,1)
if(q.a.c.tM(d))i=d.dx
else{q.a.toString
i=o==="regulator"?5:d.e}i=B.a([A.am,B.d("Volts in: "+j+" V   \u2192   Volts out: "+A.j.ad(i,1)+" V",p,p,p,p,p,p,D.fv_,p,p,p)],g)
if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.dtu[s]
j=r===A.j.iY(r)?A.j.V(r):r
l.push(new E.dW(B.w(j)+" V out",d.e===r,new C.bJ6(q,d,r),p,h,p))}i.push(new B.D(A.lf,B.bW(A.bH,l,A.bt,p,0,6),p))}if(o==="regulator")i.push(D.fTN)
A.d.v(m,i)}if(q.a.c.Me(d)&&!d.x){l=A.j.ad(d.cx,2)
j=A.j.ad(q.a.c.Af(d),2)
i=q.a.c
w=i.aoD(d)?"   \u26a0 OVERLOADED":""
l=B.d("Supplying "+l+" A of the "+j+" A it can give"+w,p,p,p,p,p,p,B.l(p,p,i.aoD(d)?A.c_:A.ew,p,p,p,p,p,p,p,p,12.5,p,p,A.I,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
j=B.n(4)
w=A.j.E(d.cx/q.a.c.Af(d),0,1)
i=q.a.c.aoD(d)?A.az:A.b9
m.push(new B.D(A.i9,B.x(B.a([l,A.cU,B.bx(j,B.kl(A.bz,p,p,5,p,w,new B.lJ(i,x.c)),A.aq)],g),A.E,p,A.e,A.i,0,A.p),p))}l=o==="battery"
if(l&&d.e===1.5){j=d.as
i=A.j.V(j*100)
if(j<=0.02)j="  (flat: charge it first with a solar panel, + to +, \u2212 to \u2212)"
else j=j>=0.99?"  (full)":"  (charging fills it up)"
m.push(new B.D(A.i9,B.d("Charge: "+i+"%"+j,p,p,p,p,p,p,D.foF,p,p,p),p))}if(l){l=B.a([],g)
for(s=0;s<5;++s){r=D.dil[s]
j=r===1.5?"1.5 V (rechargeable)":B.w(r)+" V"
l.push(new E.dW(j,d.e===r,new C.bJ7(q,d,r),p,h,p))}m.push(B.bW(A.bH,l,A.bt,p,0,6))}if(o==="resistor"){l=B.a([],g)
for(s=0;s<5;++s){r=D.d8u[s]
j=r>=1000?"1 k\u03a9":""+A.o.V(r)+" \u03a9"
l.push(new E.dW(j,d.r===r,new C.bJ8(q,d,r),p,h,p))}m.push(B.bW(A.bH,l,A.bt,p,0,6))}if(o==="solar")m.push(k.$3("Sunlight",d.f,new C.bJ9(d)))
if(o==="turbine")m.push(k.$3("Wind",d.f,new C.bJa(d)))
if(o==="pot")m.push(k.$3("Knob",d.f,new C.bJ1(d)))
if(o==="ldr")m.push(k.$3("Light",d.f,new C.bJ2(d)))
if(o==="crank")m.push(D.fP5)
if(o==="switch")m.push(B.d(d.w?"Closed: the loop is joined up.":"Open: the loop is broken.",p,p,p,p,p,p,A.hg,p,p,p))
return q.b0Q(new B.cR(D.b5J,B.ch(B.x(m,A.E,p,A.e,A.P,0,A.p),A.t,p,A.y,p,p,p,p,A.ah),p))}}
C.bcJ.prototype={}
C.W6.prototype={
S(){return new C.aEQ(C.hju(),new B.cw(null,x.q),B.aR(x.S))}}
C.aEQ.prototype={
Y(){this.a3()
$.aW.c1$.push(this)
this.af6()},
af6(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$af6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fIo(),$async$af6)
case 3:r=e
if(t.c==null){w=1
break}if(r!=null&&t.d.a.length===0){s=C.ip1(t.d,r)
if(s!=null){t.m(new C.e_Z(t,s))
t.Q=r}}t.as=!0
case 1:return B.h(u,v)}})
return B.i($async$af6,v)},
Ft(){var w,v=this
if(!v.as)return
w=C.ifr(v.d,v.f,v.r)
if(w===v.Q)return
v.Q=w
C.bG1(w)},
jl(d){if(d!==A.fO)this.Ft()},
t(){$.aW.hV(this)
this.Ft()
this.a2()},
cbj(){var w,v,u,t,s,r,q=this,p=null
if(++q.w%15===0){w=q.d
v=w.a
u=B.U(v).k("Y<1>")
t=new B.Y(v,new C.e07(q),u).gI(0)
s=new B.Y(v,new C.e08(),u).gI(0)
r=new B.Y(v,w.gcYC(),u).gI(0)
if(t!==q.x||s!==q.y||r!==q.z)q.m(new C.e09(q,t,s,r))}if(A.o.F(q.w,45)===0)q.Ft()
if(A.o.F(q.w,10)===0){w=q.f
$.aiS()
w=w>=11}else w=!0
if(w)return
w=q.r
if(!w.q(0,q.f)&&$.aiS()[q.f].c.$1(q.d)){w.J(0,q.f)
C.JC("bell",B.a([0,4,7,12],x.t),700,0.45)
q.m(new C.e0a())
q.Ft()
w=q.c
w.toString
w=B.Yq(w)
if(w!=null)w.U(B.b3(p,p,p,p,p,A.t,p,B.d("\u2705 Challenge done: "+$.aiS()[q.f].a+". Tap the flag for the next one.",p,p,p,p,p,p,p,p,p,p),p,A.m9,p,p,p,p,p,p,p,p,p,p))}},
ahT(){var w=0,v=B.j(x.H),u=this,t
var $async$ahT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.cf(null,null,!0,null,new C.e_Y(u),t,null,!0,!0,x.H),$async$ahT)
case 2:return B.h(null,v)}})
return B.i($async$ahT,v)},
b0P(d,e,f,g,h){var w=null,v=f.j(0.12),u=B.n(12),t=B.L(f.j(0.45),A.r,1)
u=B.a([B.ao(w,B.q(w,B.X(d,f,w,w,w,18),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,34,w,w,w,w,w,34),w,w,4,w,2,w)],x.p)
if(h!=null)u.push(B.ao(w,h,w,w,w,-1,-3,w))
return B.aA(w,B.hb(new B.a5(40,38,new B.an(A.a0,w,A.ad,A.f,u,w),w),w,e,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4)},
b0O(d,e,f,g){return this.b0P(d,e,f,g,null)},
asA(d,e,f,g){var w=null,v=f.j(0.1),u=B.n(10),t=B.L(f.j(0.4),A.r,1)
return B.E(B.aA(w,B.q(w,B.A(B.a([B.X(d,f,w,w,w,15),A.e2,new B.dn(1,A.co,B.d(e,w,1,A.a2,w,w,w,B.l(w,w,f,w,w,w,w,w,w,w,w,12,w,w,A.I,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w)],x.p),A.m,w,A.ba,A.i,0,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,28,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),1)},
agd(){var w=0,v=B.j(x.H),u=this,t
var $async$agd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.a6(t,!1).cd(B.eb(new C.e_U(u),!1,null,x.H)),$async$agd)
case 2:t=u.e.gbk()
if(t!=null)t.bhW()
if(u.c!=null)u.m(new C.e_V())
u.Ft()
return B.h(null,v)}})
return B.i($async$agd,v)},
bJ5(){var w,v,u,t,s=null,r=this.f
$.aiS()
if(r>=11)return s
w=this.r
v=w.q(0,r)
r=v?A.bg:A.az
u=B.n(9)
t=B.L(I.BI,A.r,1.5)
return B.q(s,B.at(B.d(v?"\u2713":""+(11-w.a),s,s,s,s,s,s,A.xh,s,s,s),s,s,s),A.f,s,D.b5Q,new B.o(r,s,t,u,s,s,A.n),s,s,s,s,A.f3,s,s,s)},
aj2(){var w=0,v=B.j(x.H),u=this,t
var $async$aj2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.c
t.toString
w=2
return B.b(B.bT(F.nr,null,new C.e06(u),t,!0,!0,!0,A.kB,!1,!1,x.H),$async$aj2)
case 2:return B.h(null,v)}})
return B.i($async$aj2,v)},
cbk(d,e){var w,v,u,t,s=this,r=null,q=A.c.j(0.08),p=B.aA(r,B.q(r,D.bYu,A.f,r,r,new B.o(A.c.j(0.07),r,r,r,r,r,A.a7),r,34,r,r,r,r,r,34),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.e0c(d),r,r,r,r,r,r,!1,A.a4),o=B.n(11)
o=B.q(r,D.bbB,A.f,r,r,new B.o(A.bp,r,B.L(A.aJ.j(0.45),A.r,1),o,r,r,A.n),r,34,r,r,r,r,r,34)
w=s.d.a.length
if(w===0)w="Pick a part to start"
else{v=s.x
u=s.y
u=u>0?" \xb7 "+u+" burnt":""
t=s.z>0?" \xb7 \u26a0 overloaded":""
t=""+w+" parts \xb7 "+v+" working"+u+t
w=t}v=x.p
return B.q(r,B.x(B.a([B.A(B.a([p,A.ae,o,A.ae,B.E(B.x(B.a([D.fRN,B.d(w,r,1,A.a2,r,r,r,B.l(r,r,s.y>0||s.z>0?A.f_:A.hC,r,r,r,r,r,r,r,r,11.5,r,r,A.R,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v),A.E,r,A.e,A.i,0,A.p),1),new C.ayT(s.gchB(),r),A.ts,s.b0O(A.uF,"Construction Lab: real 3D wiring, plumbing and a house",A.cJ,new C.e0d(s,d)),s.b0P(A.lL,"Challenges",A.aU,s.gcyQ(),s.bJ5()),s.b0O(A.Pk,"How to play",A.aJ,new C.e0e(d,e))],v),A.m,r,A.e,A.i,0,r,r),A.am,B.A(B.a([s.asA(A.ou,"Circuits",A.br,s.gcrH()),A.bl,s.asA(A.os,"Repair",A.aU,new C.e0f(s)),A.bl,s.asA(K.ww,"Clear",A.c_,new C.e0g(s))],v),A.m,r,A.e,A.i,0,r,r)],v),A.m,r,A.e,A.P,0,A.p),A.f,r,r,new B.o(I.BI,r,new B.bH(A.a1,A.a1,new B.ay(q,1,A.r,-1),A.a1),r,r,r,A.n),r,r,r,r,D.bGS,r,r,r)},
B(d){var w=this,v=null
$.ate="tech"
return B.c4(v,A.c2,B.bm(!0,B.x(B.a([w.cbk(d,"Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired."),B.E(C.hik(w.d,w.e,w.gcbi(),v),1)],x.p),A.m,v,A.e,A.i,0,A.p),!0,!1,A.ag,!0,!0),v,!1,!1,v,v)}}
C.ayT.prototype={
S(){return new C.baS(null,null)}}
C.baS.prototype={
gayQ(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.a_,null,1,null,v)
w.cP(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
t(){this.gayQ().t()
this.bwZ()},
B(d){var w=null,v=this.a.c
return B.aA(w,B.hb(new B.a5(42,42,B.c9(this.gayQ(),new C.cKH(this),w),w),w,"AI Inventor: say what you want to make",w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.baR.prototype={
a4(d,e){var w,v,u,t=null,s=e.ej(A.H),r=e.a*0.41,q=this.b*3.141592653589793,p=q*2,o=(Math.sin(p)+1)/2
$.S()
w=B.J()
w.r=A.b7.j(0.25+0.15*o).gp(0)
w.y=N.op
d.N(s,r+2+o*2,w)
w=B.J()
w.sav(D.exv.aJ(0,B.bX(s,r)))
d.N(s,r,w)
v=B.J()
v.b=A.aa
v.c=2.2
v.sav(new B.fY(A.A,0,6.283185307179586,A.x,D.d_f,t,new B.mF(p)).aJ(0,B.bX(s,r)))
d.N(s,r,v)
p=new C.cKG(d)
p.$3(s.a5(0,A.ti),8+o*1.5,1)
q*=4
p.$3(s.a5(0,D.emj),3.2,0.5+0.5*Math.sin(q))
p.$3(s.a5(0,D.eoH),2.6,0.5+0.5*Math.cos(q))
u=B.ft(t,A.ct,t,t,t,D.fl2,A.a5,A.bW,t,A.dA,A.bX)
u.eb()
u.a4(d,s.a5(0,new B.p(-u.b.c/2,5)))},
aE(d){return d.b!==this.b}}
C.azc.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.azd.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a1(0)
w=this.h6$
w===$&&B.c()
w.t()
this.bvC()}}
C.aLj.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.bzp.prototype={}
C.fQ.prototype={}
C.K5.prototype={
a7(){return"ScreenStyle."+this.b}}
C.mo.prototype={}
C.VQ.prototype={
S(){return new C.blt(null,null)}}
C.blt.prototype={
gaaf(){var w,v=this,u=v.d
if(u===$){w=B.bl(null,A.om,null,1,null,v)
w.cr(0)
v.d!==$&&B.bF()
v.d=w
u=w}return u},
t(){this.gaaf().t()
this.byP()},
gSz(){var w=this.gaaf().y
w=w==null?null:A.o.ar(w.a,1000)
return(w==null?0:w)/1000},
B(d){var w=null,v=D.mr.h(0,this.a.c)
if(v==null)v=D.aRz
return B.c4(w,X.Zo,B.bm(!0,new B.an(A.a0,w,A.ad,A.t,B.a([B.at(v.b===D.At?this.bLc(v):this.cos(v),w,w,w),B.ao(w,B.aG(w,w,w,w,A.n1,w,w,w,new C.dX8(d),w,w,w,B.nV(w,A.aT,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),"Back to the board",w),w,w,8,w,8,w),B.ao(6,B.at(B.d(v.a,w,w,w,w,w,w,D.fmK,w,w,w),w,w,w),w,w,0,0,w,w)],x.p),w),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)},
cbl(d){var w
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
cos(d){var w,v,u,t,s,r,q=null,p=d.b,o=p===D.a9i
switch(p.a){case 1:w=44
break
case 2:w=30
break
case 3:w=22
break
case 4:w=26
break
default:w=14
break}v=B.c9(this.gaaf(),new C.dX7(this,w,d,o),q)
if(p===D.a9j)v=new B.BB(D.bHw,v,q)
p=this.cbl(p)
u=o?4:5
t=d.c
s=B.ar(t,A.c,o?0.25:0.08)
s.toString
r=B.ar(t,A.w,0.5)
r.toString
r=B.a([s,t,r],x.O)
t=B.n(w)
s=B.a([new B.ac(0,A.G,d.d.j(0.28),A.H,36)],x.V)
return new B.fF(p,B.q(q,B.q(q,v,A.f,q,q,new B.o(A.w,q,q,B.n(w-3),q,q,A.n),q,q,q,q,A_.GZ,q,q,q),A.f,q,q,new B.o(q,q,q,t,s,new B.a9(A.aA,A.aF,A.x,r,q,q),A.n),q,q,q,D.bAU,new B.Q(u,u,u,u),q,q,q),q)},
b99(d){var w,v,u,t=null,s=new B.V(Date.now(),0,!1),r=A.o.E(this.a.d+A.j.bh(this.gSz()*0.4),0,100),q=d.b===D.a9i,p=q?34:20,o=q?28:18,n=B.a([B.d(A.a.b_(A.o.u(B.dg(s)),2,"0")+":"+A.a.b_(A.o.u(B.fP(s)),2,"0"),t,t,t,t,t,t,A.tB,t,t,t),A.b3],x.p)
for(w=0;w<4;++w){v=new B.aP(1,1)
n.push(B.q(t,t,A.f,t,t,new B.o(A.c,t,t,new B.bg(v,v,v,v),t,t,A.n),t,4+w*2,t,D.bHd,t,t,t,3))}n.push(A.dd)
n.push(D.fKp)
n.push(A.bl)
v=B.L(A.ab,A.r,1)
u=B.n(4)
n.push(B.q(t,new B.bL(A.a6,t,t,B.BP(A.A,B.q(t,t,A.f,t,t,new B.o(A.b9,t,t,B.n(2),t,t,A.n),t,t,t,A_.GZ,t,t,t,t),t,r/100),t),A.f,t,t,new B.o(t,t,v,u,t,t,A.n),t,12,t,t,t,t,t,26))
n.push(A.r3)
n.push(B.d(""+r+"%",t,t,t,t,t,t,D.fBf,t,t,t))
return new B.D(new B.Q(p,12,o,2),B.A(n,A.m,t,A.e,A.i,0,t,t),t)},
awL(d,e,f){var w,v=null,u=d.d,t=B.ar(u,A.w,0.5)
t.toString
t=B.a([u,t],x.O)
u=B.n(e*0.26)
w=x.p
t=B.a([B.q(v,B.at(B.d(d.b,v,v,v,v,v,v,B.l(v,v,v,v,v,v,v,v,v,v,v,e*0.5,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,v),A.f,v,v,new B.o(v,v,v,u,D.doq,new B.a9(A.aA,A.aF,A.x,t,v,v),A.n),v,e,v,v,v,v,v,e)],w)
if(f)A.d.v(t,B.a([A.aw,B.d(d.a,v,1,A.a2,v,v,v,D.frz,v,v,v)],w))
return B.aA(v,B.x(t,A.m,v,A.e,A.P,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.dX3(this,d),v,v,v,v,v,v,!1,A.a4)},
c1G(d,e){return this.awL(d,e,!0)},
c1n(d){var w,v,u,t,s,r,q,p=this,o=null,n=d.b,m=n===D.aRA||n===D.En,l=d.d,k=B.ar(l,A.w,0.55)
k.toString
l=B.ar(l,A.kl,0.5)
l.toString
l=B.a([k,A.dw,l],x.O)
k=p.b99(d)
w=m?190:138
v=B.n(24)
u=B.L(A.aV,A.r,1)
w=B.aA(o,B.q(o,B.bx(B.n(23),B.b4(o,o,o,new C.afw(0,p.gSz(),o),A.fJ),A.aq),A.f,o,o,new B.o(o,o,u,v,o,o,A.n),o,w,o,A.hU,o,o,o,o),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.dX1(p),o,o,o,o,o,o,!1,A.a4)
v=m?5:4
u=x.p
t=B.a([],u)
for(s=0;s<8;++s){r=F.kv[s]
t.push(new B.ce(A.A,o,o,p.c1G(r,m?58:54),o))}k=B.a([k,A.am,w,A.af,B.E(B.kS(0.92,t,v,8,12,A2.wh,o,!1),1)],u)
if(n!==D.a9j){n=A.c.j(0.16)
w=B.n(28)
u=B.a([],u)
for(v=B.cW(F.kv,0,B.dA(4,"count",x.S),x.gD),t=v.$ti,v=new B.bO(v,v.gI(0),t.k("bO<ak.E>")),t=t.k("ak.E");v.C();){q=v.d
u.push(p.awL(q==null?t.a(q):q,50,!1))}k.push(B.q(o,B.A(u,A.m,o,A.qR,A.i,0,o,o),A.f,o,o,new B.o(n,o,o,w,o,o,A.n),o,o,o,D.bBN,H.amO,o,o,o))}return B.q(o,B.x(k,A.m,o,A.e,A.i,0,A.p),A.f,o,o,new B.o(o,o,o,o,o,new B.a9(A.aA,A.aF,A.x,l,o,o),A.n),o,o,o,o,o,o,o,o)},
bEB(d,e){var w=null
return B.q(w,B.x(B.a([this.b99(d),B.E(B.b4(w,w,w,new C.afw(e,this.gSz(),w),A.fJ),1),B.aA(w,B.q(w,B.at(B.d(F.kv[e].a,w,w,w,w,w,w,A.Km,w,w,w),w,w,w),A.f,A.w,w,w,w,38,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.dWX(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.m,w,A.e,A.i,0,A.p),A.f,A.w,w,w,w,w,w,w,w,w,w,w)},
bLc(d){var w,v,u,t=null,s=this.a.c,r=s==="carscreen"
s=s==="imac"?26:8
w=d.c
v=B.ar(w,A.c,0.18)
v.toString
w=B.a([v,w],x.O)
v=B.n(r?26:14)
u=B.a([new B.ac(0,A.G,d.d.j(0.25),A.H,36)],x.V)
return new B.fF(1.5384615384615383,B.q(t,B.c9(this.gaaf(),new C.dX_(this,r,d),t),A.f,t,t,new B.o(t,t,t,v,u,new B.a9(A.aA,A.aF,A.x,w,t,t),A.n),t,t,t,D.bGM,new B.Q(8,8,8,s),t,t,t),t)}}
C.bxr.prototype={
a4(d,e){var w,v,u,t,s,r=e.a,q=e.b,p=0+r,o=0+q
$.S()
w=B.J()
v=this.c
u=B.ar(v,A.w,0.6)
u.toString
t=B.ar(v,A.kl,0.4)
t.toString
w.sav(new B.a9(A.aA,A.aF,A.x,B.a([u,A.dw,t],x.O),null,null).aJ(0,new B.a3(0,0,p,o)))
d.aq(new B.a3(0,0,p,o),w)
for(p=this.b,o=p*0.4,p*=0.3,s=0;s<5;++s){w=Math.sin(o+s)
u=Math.sin(p+s*1.7)
t=new B.ap(A.S,A.N,A.U,A.V,A.T)
t.r=v.j(0.1).gp(0)
t.y=D.bHB
d.N(new B.p(r*(0.15+0.2*s+0.05*w),q*(0.3+0.3*u)),q*(0.2+0.04*s),t)}},
aE(d){return!0}}
C.afw.prototype={
a4(d,e){return L.LW(d,e,this.b,this.c)},
aE(d){return!0}}
C.aN5.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.bwd.prototype={}
C.a9b.prototype={
B(d){var w=null
return B.c4(B.eG(w,w,w,!0,!0,D.ahR,w,1,!0,w,0,!1,w,!1,w,w,B.aG(w,w,w,w,K.aru,w,w,w,new C.cm_(d),w,w,w,w,w,w),w,!0,w,w,w,w,w,D.h_D,w,w,w,1,w,!0),D.ahR,B.cl(B.a([D.eq9,B.cs(new C.cm0())],x.p),w,w,D.bCS,w,w,A.ah,!1),w,!1,!1,w,w)}}
C.Xq.prototype={
S(){var w=B.a(["Pizza","Burgers","Tacos","Salad","Pasta","Sushi"],x.s)
return new C.aGj(w,new B.au(A.av,$.aw()),$,A.bC,0,B.a([],x.X),null,null)}}
C.aGj.prototype={
Y(){this.a3()
this.me()},
b71(d){var w=this.d.length
return A.o.F(A.j.bh(A.j.F(A.j.F(-1.5707963267948966-d,6.283185307179586)+6.283185307179586,6.283185307179586)/(6.283185307179586/w)),w)},
mw(d){var w,v=this,u=v.r
if(Math.abs(u)<0.001)return
v.f=v.f+u*d
v.r=u*Math.exp(-d*0.9)
w=v.b71(v.f)
if(w!==v.x){v.x=w
E.mm("bell",24+A.o.F(w,7),90,0.25)}if(Math.abs(v.r)<0.12){v.r=0
v.m(new C.eTq(v))
C.JC("bell",B.a([0,4,7,12],x.t),1100,0.55)}},
cd2(){if(this.d.length<2)return
this.m(new C.eTm(this))},
b1m(d){var w=this,v=A.a.i(w.e.a.a)
if(v.length===0||w.d.length>=12)return
w.m(new C.eTl(w,v))},
B(d){var w,v,u,t,s=this,r=null,q=s.gcd1(),p=s.d,o=B.E(B.aA(r,B.b4(r,r,r,new C.bxD(p,s.f,r),A.fJ),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1),n=s.w
if(n.length===0)n=s.r===0?"Tap the wheel to spin":""
w=x.p
n=B.x(B.a([o,new B.a5(r,40,B.at(B.d(n,r,r,r,r,r,r,D.fzm,r,r,r),r,r,r),r)],w),A.m,r,A.e,A.i,0,A.p)
o=B.a([],w)
for(v=0;v<p.length;++v){u=D.aBg[A.o.F(v,8)].j(0.9)
t=new B.aP(20,20)
o.push(B.aA(r,B.q(r,B.d(p[v],r,r,r,r,r,r,D.fyA,r,r,r),A.f,r,r,new B.o(u,r,r,new B.bg(t,t,t,t),r,r,A.n),r,r,r,A.fy,A.ha,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,new C.eTo(s,v),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,!1,A.a4))}p=A.c.j(0.07)
return E.ly(A.aU,A.f5,"Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.",n,"SPIN THE WHEEL",B.x(B.a([new E.fb(o,r,r),B.A(B.a([B.E(B.aM(r,A.Z,!1,r,!0,A.t,r,B.aN(),s.e,r,r,r,r,r,2,B.bs(r,new B.b6(4,B.n(14),A.a1),r,r,r,r,r,r,!0,r,r,r,r,r,r,p,!0,r,r,r,r,r,r,r,r,r,r,r,r,r,A.kE,"Add an option",r,r,r,r,r,!0,r,r,r,!0,!0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r),A.y,!0,r,!0,r,!1,r,A.ak,r,r,r,r,r,r,r,r,r,1,r,r,!1,"\u2022",r,r,r,new C.eTp(s),r,!1,r,r,!1,r,!0,r,A.ac,r,r,r,r,r,r,r,r,r,r,r,A.dg,!0,A.a5,r,A.ao,r,r,r,r),1),A.ae,new E.fB(A.hV,"Add",s.gcd_(s),A.c,r),A.bl,new E.fB(A.ot,"Spin",q,A.b9,r)],w),A.m,r,A.e,A.i,0,r,r)],w),A.m,r,A.e,A.P,0,A.p))}}
C.bxD.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=e.a,j=k/2,i=e.b,h=i/2+10,g=new B.p(j,h),f=Math.min(k,i)/2-24
i=f+8
k=$.S()
w=B.J()
w.r=D.bhU.gp(0)
d.N(g,i,w)
w=B.J()
w.b=A.aa
w.c=3
w.r=A.aU.gp(0)
d.N(g,i,w)
w=this.b
v=w.length
u=6.283185307179586/v
for(i=d.c,t=this.c,s=u/2,r=0;r<v;++r){q=t+r*u
p=B.bX(g,f)
o=new B.ap(A.S,A.N,A.U,A.V,A.T)
o.r=D.aBg[A.o.F(r,8)].gp(0)
d.cM(p,q,u,!0,o)
o=B.bX(g,f)
p=new B.ap(A.S,A.N,A.U,A.V,A.T)
p.b=A.aa
p.c=2
p.r=A.c.j(0.6).gp(0)
d.cM(o,q,u,!0,p)
J.br(i.save())
i.translate(j,h)
i.rotate((q+s)*180/3.141592653589793,0,0)
p=w[r]
if(p.length>12)p=A.a.aB(p,0,11)+"\u2026"
n=new B.iG(new B.en(p,l,l,A.cH,l,l,l,l,l,l,D.flR),A.a5,A.bW,new B.jf(1),l,l,l,l,A.bX,l,A.ct)
n.eb()
p=n.b
o=p.c
p=p.a.c
n.a4(d,new B.p(f-o-16,-p.gba(p)/2))
i.restore()}i=B.J()
i.r=D.ahu.gp(0)
d.N(g,20,i)
i=B.J()
i.b=A.aa
i.c=3
i.r=A.aU.gp(0)
d.N(g,20,i)
m=new B.aF(k.r,A.ai,l,l,B.a([],x.v))
h-=f
m.D(new B.aZ(j,h+26))
h-=10
m.D(new B.aq(j-14,h))
m.D(new B.aq(j+14,h))
m.D(new B.bv())
h=B.J()
h.r=A.c.gp(0)
d.af(m,h)
h=B.J()
h.b=A.aa
h.c=2
h.r=A.aT.gp(0)
d.af(m,h)},
aE(d){return!0}}
C.We.prototype={
S(){return new C.blE($,A.bC,0,B.a([],x.X),null,null)}}
C.blE.prototype={
Y(){this.a3()
this.me()},
mw(d){var w=this
if(!w.f)return
if((w.e-=d)<=0){w.e=0
w.f=!1;++w.r
C.JC("bell",B.a([0,4,7,12],x.t),1500,0.6)
w.UD(900,new C.e2Y())}w.m(new C.e2Z())},
b1o(d){return this.m(new C.e2T(this,d))},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=m===0?0:o.e/(m*60)
m=o.e
w=A.a.b_(A.o.u(A.j.ar(m,60)),2,"0")
v=A.a.b_(A.o.u(A.o.F(A.j.cK(m),60)),2,"0")
m=B.b4(n,n,n,new C.bsk(l,A.c_,n),A.aT1)
u=B.d(w+":"+v,n,n,n,n,n,n,D.fqu,n,n,n)
if(o.f)t="Stay focused"
else t=o.e===0?"Time for a break!":"Ready"
s=x.p
t=B.at(new B.a5(280,280,new B.an(A.A,n,A.ad,A.t,B.a([m,B.x(B.a([u,B.d(t,n,n,n,n,n,n,D.fpu,n,n,n),A.aw,B.d("Sessions done: "+o.r,n,n,n,n,n,n,A.vv,n,n,n)],s),A.m,n,A.e,A.P,0,A.p)],s),n),n),n,n,n)
u=B.a([],s)
for(r=0;r<6;++r){q=D.dlm[r]
u.push(new E.dW(""+q+" min",o.d===q,new C.e2V(o,q),n,A.c_,n))}m=o.f
p=m?A5.uN:A.hs
m=m?"Pause":"Start"
return E.ly(A.c_,A.f5,"Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.",t,"FOCUS TIMER",B.x(B.a([new E.fb(u,n,n),new E.fb(B.a([new E.fB(p,m,new C.e2W(o),A.b9,n),new E.fB(A.ow,"Reset",new C.e2X(o),A.c,n)],s),n,n)],s),A.m,n,A.e,A.P,0,A.p))}}
C.bsk.prototype={
a4(d,e){var w,v,u,t,s=e.ej(A.H),r=e.a/2-14
$.S()
w=B.J()
w.b=A.aa
w.c=16
w.r=A.c.j(0.08).gp(0)
d.N(s,r,w)
w=B.bX(s,r)
v=B.J()
v.b=A.aa
v.c=16
v.d=A.bB
u=this.c
t=B.ar(u,A.c,0.4)
t.toString
v.sav(new B.fY(A.A,-1.5707963267948966,4.71238898038469,A.x,B.a([u,t,u],x.O),null,null).aJ(0,B.bX(s,r)))
d.cM(w,-1.5707963267948966,6.283185307179586*this.b,!1,v)},
aE(d){return d.b!==this.b}}
C.Vr.prototype={
S(){return new C.blf($,A.bC,0,B.a([],x.X),null,null)}}
C.blf.prototype={
Y(){this.a3()
this.me()},
mw(d){var w,v,u,t,s,r,q,p=this
if(!p.e)return
p.f+=d
w=D.SU.h(0,p.d)
w.toString
v=A.d.f1(w,new C.dOF())
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
E.mm("flute",D.c9A[t]+5,1400,0.35)}p.m(new C.dOG())},
gcd5(){var w,v,u,t,s,r,q,p
if(!this.e)return new B.KU("Press Start",0.5)
w=D.SU.h(0,this.d)
w.toString
v=A.d.f1(w,new C.dOA())
u=A.j.F(this.f,v)
for(t=0,s=0;s<4;++s,t=q){r=w[s]
q=t+r
if(u<q){p=(u-t)/r
switch(s){case 0:return new B.KU("Breathe in",0.5+0.5*A.dy.aC(0,p))
case 1:return new B.KU("Hold",1)
case 2:return new B.KU("Breathe out",1-0.5*A.dy.aC(0,p))
default:return new B.KU("Hold",0.5)}}}return new B.KU("",0.5)},
B(d){var w,v,u,t,s,r=this,q=null,p=r.gcd5(),o=x.p,n=B.a([],o)
for(w=280*p.b,v=x.V,u=3;u>=0;--u){t=w*(1-u*0.12)
s=A.hn.j(0.12+(3-u)*0.05)
n.push(B.q(q,q,A.f,q,q,new B.o(s,q,q,q,u===0?B.a([new B.ac(0,A.G,A.hn.j(0.35),A.H,40)],v):q,q,A.a7),q,t,q,q,q,q,q,t))}n.push(B.d(p.a,q,q,q,q,q,q,A.pR,q,q,q))
n.push(B.ao(0,B.d("Breaths: "+r.w,q,q,q,q,q,q,A.kE,q,q,q),q,q,q,q,q,q))
n=B.at(new B.a5(300,340,new B.an(A.A,q,A.ad,A.t,n,q),q),q,q,q)
o=B.a([],o)
for(w=J.aU(D.SU.geu(D.SU));w.C();){v=w.gR(w)
o.push(new E.dW(v,r.d===v,new C.dOD(r,v),q,A.hn,q))}w=r.e
v=w?A.zh:A.hs
w=w?"Stop":"Start"
o.push(new E.fB(v,w,new C.dOE(r),A.b9,q))
return E.ly(A.hn,A.f5,"Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.",n,"BREATHE",new E.fb(o,q,q))}}
C.aJJ.prototype={}
C.W5.prototype={
S(){return new C.blv(new B.cw(null,x.A),B.a([],x.au),A.au,A.c)}}
C.blv.prototype={
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.a([B.aG(s,s,s,s,K.oE,s,s,s,new C.e_t(t,d),s,s,s,s,"Share",s)],r),p=B.bx(B.n(18),new B.em(B.aA(s,B.b4(s,s,s,new C.bnx(t.e,t.x,s),A.fJ),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.e_u(t),new C.e_v(t),s,s,s,s,s,s,s,s,s,new C.e_w(t),s,s,s,s,!1,A.a4),t.d),A.aq),o=B.a([],r)
for(w=0;w<9;++w){v=D.d0L[w]
u=!t.w&&t.f.A(0,v)
o.push(new E.FW(v,u,new C.e_x(t,v),!1,s))}u=t.r
return E.ly(A.bF,q,"Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.",new B.D(A.bU,p,s),"DRAW PAD",B.x(B.a([new E.fb(o,s,s),E.iO(A.bF,""+A.j.V(u),"Brush",30,2,new C.e_y(t),u),new E.fb(B.a([new E.dW("Eraser",t.w,new C.e_z(t),A.CC,A.bF,s),new E.fB(A.ps,"Undo",new C.e_A(t),A.c,s),new E.fB(A.ef,"Clear",new C.e_B(t),A.c,s),new E.fB(A.Pd,"Paper",new C.e_C(t),A.c,s)],r),s,s)],r),A.m,s,A.e,A.P,0,A.p))}}
C.bnx.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k
$.S()
w=B.J()
w.r=this.c.gp(0)
d.aq(new B.a3(0,0,0+e.a,0+e.b),w)
for(w=this.b,v=w.length,u=x.v,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
r=$.S()
q=new B.ap(A.S,A.N,A.U,A.V,A.T)
p=s.a
q.r=p.gp(p)
o=s.b
q.c=o
q.d=A.bB
q.e=A.dO
q.b=A.aa
n=s.c
if(n.length===1){r=A.d.gH(n)
n=new B.ap(A.S,A.N,A.U,A.V,A.T)
n.r=p.gp(p)
d.N(r,o/2,n)}else{p=B.a([],u)
m=new B.aF(r.r,A.ai,null,null,p)
p.push(new B.aZ(A.d.gH(n).a,A.d.gH(n).b))
m.aa()
for(l=1;l<n.length-1;){r=n[l]
o=r.a;++l
k=n[l]
r=r.b
k=new B.c8(o,r,(o+k.a)/2,(r+k.b)/2)
p.push(k)
r=m.f
if(r!=null)k.aj(r)
m.aa()}r=new B.aq(A.d.gal(n).a,A.d.gal(n).b)
p.push(r)
p=m.f
if(p!=null)r.aj(p)
m.aa()
d.af(m,q)}}},
aE(d){return!0}}
C.WO.prototype={
S(){var w=x.S
return new C.aFD(B.aR(w),B.aR(w))}}
C.aFD.prototype={
Y(){this.a3()
this.au5()},
au5(){var w,v,u=this,t=x.N,s=B.bp(D.dqz,!0,t)
A.d.Dm(s)
w=x.S
v=B.U(s).c
t=B.C(B.cW(s,0,B.dA(u.d,"count",w),v),t)
A.d.v(t,B.cW(s,0,B.dA(u.d,"count",w),v))
A.d.Dm(t)
u.e=t
u.f.a8(0)
u.r.a8(0)
u.w=0
u.x=!1},
cd0(d){var w,v,u,t,s=this
if(s.x||s.f.q(0,d)||s.r.q(0,d))return
E.mm("bell",12+A.o.F(d,9),150,0.35)
s.m(new C.eqh(s,d))
w=s.f
if(w.a===2){++s.w
v=w.gH(0)
u=w.gal(0)
w=s.e
w===$&&B.c()
t=x.H
if(w[v]===w[u])B.bQ(A.mQ,new C.eqi(s,v,u),t)
else{s.x=!0
B.bQ(Ac.GA,new C.eqj(s),t)}}},
B(d){var w,v,u,t,s,r=this,q=null,p=r.r.a,o=r.e
o===$&&B.c()
w=p===o.length
o=r.d
v=o<=6?3:4
u=B.d("Moves: "+r.w,q,q,q,q,q,q,A.Vt,q,q,q)
p=w?"You did it! \ud83c\udf89":"Pairs: "+A.o.ar(p,2)+" / "+o
o=x.p
p=B.x(B.a([new B.D(A.yE,B.A(B.a([u,B.d(p,q,q,q,q,q,q,B.l(q,q,w?A.aU:A.ab,q,q,q,q,q,q,q,q,q,q,q,A.I,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],o),A.m,q,A.iR,A.i,0,q,q),q),B.E(B.im(!0,q,q,A.y,new B.hG(v,8,8,1,q),new C.eqn(r),r.e.length,A.bh,q,A.ah,!1),1)],o),A.m,q,A.e,A.i,0,A.p)
o=B.a([],o)
for(t=0;t<3;++t){s=D.d2k[t]
o.push(new E.dW(s.b,r.d===s.a,new C.eqo(r,s),q,A.aJ,q))}o.push(new E.fB(K.aq2,"New game",new C.eqp(r),A.b9,q))
return E.ly(A.aJ,A.f5,"Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.",p,"MEMORY MATCH",new E.fb(o,q,q))}}
C.WY.prototype={
S(){return new C.aFY(B.a([],x.t))}}
C.aFY.prototype={
cd4(d){A.d.a8(this.d)
this.w=!0
this.b1n()},
b1n(){this.d.push(A.cM.aw(4))
this.e=0
this.a_P()},
a_P(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_P=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eB3(t))
s=x.H
w=3
return B.b(B.bQ(A.lH,null,s),$async$a_P)
case 3:r=t.d,q=B.bp(r,!0,x.S),p=q.length,o=0
case 4:if(!(o<p)){w=6
break}n=q[o]
if(t.c==null){w=1
break}t.aVa(n)
w=7
return B.b(B.bQ(new B.bd(1000*Math.max(280,600-r.length*18)),null,s),$async$a_P)
case 7:case 5:++o
w=4
break
case 6:if(t.c==null){w=1
break}t.m(new C.eB4(t))
case 1:return B.h(u,v)}})
return B.i($async$a_P,v)},
aVa(d){this.m(new C.eB1(this,d))
E.mm("marimba",D.c9z[d]+5,450,0.55)
B.bQ(A.Gy,new C.eB2(this),x.H)},
cd6(d){var w,v,u=this
if(!u.w||u.r)return
u.aVa(d)
w=u.d
v=u.e
if(w[v]!==d){G.dF(90,"",600,0,0.5,"saw")
u.m(new C.eB5(u))
return}++v
u.e=v
if(v===w.length){u.m(new C.eB6(u))
B.bQ(A.hE,new C.eB7(u),x.H)}},
B(d){var w,v,u,t,s,r,q=this,p=null,o=B.d("Best: "+q.x,p,p,p,p,p,p,Q.aVy,p,p,p),n=B.d(q.y,p,p,p,p,p,p,D.fzL,A.K,p,p),m=x.p,l=B.a([],m)
for(w=x.V,v=0;v<4;++v){u=D.aA8[v]
u=u.j(q.f===v?1:0.35)
t=new B.aP(28,28)
s=q.f===v?B.a([new B.ac(0,A.G,D.aA8[v].j(0.8),A.H,30)],w):p
r=new B.ay(A.c.j(q.f===v?0.9:0.15),2,A.r,-1)
l.push(B.aA(p,B.cT(p,p,p,p,A.b4,new B.o(u,p,new B.bH(r,r,r,r),new B.bg(t,t,t,t),s,p,A.n),A.jl,p,p,p,p,p,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eB8(q,v),p,p,p,p,p,p,!1,A.a4))}o=B.at(new B.D(A.ac,B.x(B.a([o,A.am,n,A.d6,new B.fF(1,B.kS(1,l,2,12,12,p,A.dU,!1),p)],m),A.m,p,A.ba,A.i,0,A.p),p),p,p,p)
n=q.w?"Restart":"Start"
return E.ly(A.bq,A.f5,"Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?",o,"SIMON SOUNDS",new E.fb(B.a([new E.fB(A.hs,n,q.gcd3(q),A.b9,p)],m),p,p))}}
C.Xh.prototype={
S(){return new C.bmL(new B.au(A.av,$.aw()))}}
C.bmL.prototype={
axD(d){return B.p0(A.j.ad(d,2),B.ag("(\\d)(?=(\\d{3})+\\.)",!0,!1,!1,!1),new C.eOV(),null)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.d,k=l.a.a,j=B.d1(B.aL(k,",","."))
if(j==null)j=0
w=j*n.e/100
v=j+w
u=v/n.f
if(n.r){u=Math.ceil(u)
v=u*n.f}t=new C.eP3()
l=B.aM(m,A.Z,!1,m,!0,A.t,m,B.aN(),l,m,m,m,m,m,2,B.bs(m,m,m,m,m,m,m,m,!0,new B.b6(4,B.n(16),A7.xH),m,m,m,m,m,m,m,m,m,m,m,new B.b6(4,B.n(16),D.b4g),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.mz,"Bill amount",!0,!0,!1,m,m,m,m,D.fx7,"$ ",m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ak,m,m,m,m,m,A.e5,m,m,m,1,m,m,!1,"\u2022",m,new C.eP_(n),m,m,m,!1,m,m,!1,m,!0,m,A.ac,m,m,m,m,m,m,m,m,m,m,m,A.aUw,!0,A.a5,m,A.ao,m,m,m,m)
k=A.b9.j(0.1)
s=B.n(20)
r=B.L(A.b9.j(0.35),A.r,1)
q=x.p
s=B.cl(B.a([l,A.by,B.q(m,B.x(B.a([t.$2("Tip ("+A.j.V(n.e)+"%)","$"+n.axD(w)),t.$2("Total","$"+n.axD(v)),A3.Ny,t.$3$big("Each of "+n.f+" pays","$"+n.axD(u),!0)],q),A.m,m,A.e,A.i,0,A.p),A.f,m,m,new B.o(k,m,r,s,m,m,A.n),m,m,m,m,A.bR,m,m,m)],q),m,m,A.fq,m,m,A.ah,!1)
r=B.a([],q)
for(p=0;p<7;++p){o=D.cNJ[p]
r.push(new E.dW(""+o+"%",A.j.V(n.e)===o,new C.eP0(n,o),m,A.b9,m))}l=n.f
return E.ly(A.b9,A.f5,"Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.",s,"TIP & SPLIT",B.x(B.a([new E.fb(r,"TIP",m),E.iO(A.aJ,""+l,"People",20,1,new C.eP1(n),l),new E.fb(B.a([new E.dW("Round up",n.r,new C.eP2(n),m,A.aU,m)],q),m,m)],q),A.m,m,A.e,A.P,0,A.p))}}
C.WN.prototype={
S(){var w=B.a([3,5],x.t)
return new C.bmf(w,A.cM,$,A.bC,0,B.a([],x.X),null,null)}}
C.bmf.prototype={
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
E.Xj("snare",0,0.5)}u.m(new C.eoX())}t=u.y
if(t>0){t-=d
u.y=t
u.x=u.x+d*14
if(t<=0){t=u.at.h2()
u.w=t
u.x=t?0:3.141592653589793
E.mm("bell",24,400,0.5)}u.m(new C.eoY())}},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.d
if(m==="dice"){m=B.a([],x.p)
for(w=0;w<o.e;++w){v=o.f
v=v.length>w?v[w]:1
m.push(new C.bf7(v,o.r>0,n))}u=B.aA(n,B.at(B.bW(A.fM,m,A.bt,n,18,18),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eoQ(o),n,n,n,n,n,n,!1,A.a4)}else if(m==="coin"){t=A.j.E(Math.abs(Math.cos(o.x)),0.05,1)
m=Math.cos(o.x)
v=B.L(A.d2,A.r,6)
s=B.a([new B.ac(0,A.G,A.aU.j(0.4),A.H,30)],x.V)
u=B.aA(n,B.at(B.ed(A.A,B.q(A.A,B.d(m>=0?"HEADS":"TAILS",n,n,n,n,n,n,D.fwi,n,n,n),A.f,n,n,new B.o(n,n,v,n,s,D.exz,A.a7),n,190,n,n,n,n,n,190),n,n,t),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eoR(o),n,n,n,n,n,n,!1,A.a4)}else{m=o.as
u=B.aA(n,B.at(B.x(B.a([B.d(m===0?"?":""+m,n,n,n,n,n,n,D.flk,n,n,n),B.d("between "+o.z+" and "+o.Q,n,n,n,n,n,n,A.kE,n,n,n)],x.p),A.m,n,A.e,A.P,0,A.p),n,n,n),A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new C.eoS(o),n,n,n,n,n,n,!1,A.a4)}m=x.p
v=B.a([],m)
for(r=0;r<3;++r){q=D.diz[r]
v.push(new E.dW(q.b,o.d===q.a,new C.eoT(o,q),q.c,A.br,n))}v=B.a([new E.fb(v,n,n)],m)
if(o.d==="dice"){s=o.e
v.push(E.iO(A.br,""+s,"Dice",4,1,new C.eoU(o),s))}if(o.d==="num"){s=o.z
s=E.iO(A.br,""+s,"From",100,1,new C.eoV(o),s)
p=o.Q
A.d.v(v,B.a([s,E.iO(A.br,""+p,"To",1000,2,new C.eoW(o),p)],m))}return E.ly(A.br,A.f5,"Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.",u,"LUCKY POCKET",B.x(v,A.m,n,A.e,A.P,0,A.p))}}
C.bf7.prototype={
B(d){var w,v,u,t,s,r,q,p=null
if(this.d)w=(A.cM.ai()-0.5)*0.6
else w=0
v=B.n(22)
u=B.a([new B.ac(0,A.G,A.w.j(0.4),A.cA,14)],x.V)
t=B.a([],x.p)
for(s=D.dCo.h(0,A.o.E(this.c,1,6)),r=s.length,q=0;q<r;++q)t.push(new B.bL(s[q],p,p,B.q(p,p,A.f,p,p,O.aej,p,18,p,p,p,p,p,18),p))
return B.eK(A.A,w,B.q(p,new B.an(A.a0,p,A.ad,A.t,t,p),A.f,p,p,new B.o(A.c,p,p,v,u,p,A.n),p,100,p,p,A.bE,p,p,100),p)}}
C.aMU.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.bzl.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a1(0)
w=this.h6$
w===$&&B.c()
w.t()
this.byD()}}
C.aNc.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.bzr.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a1(0)
w=this.h6$
w===$&&B.c()
w.t()
this.byX()}}
C.aNF.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.bzA.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a1(0)
w=this.h6$
w===$&&B.c()
w.t()
this.bzq()}}
C.aO5.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b4()
this.bB()}}
C.bzJ.prototype={
t(){var w,v,u
for(w=this.h7$,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)w[u].a1(0)
w=this.h6$
w===$&&B.c()
w.t()
this.bzR()}}
var z=a.updateTypes(["P(tU)","~()","P(a5k)","aB<~>()","P(CY)","F(tU,F)","I(I,tU)","P(CU)","P(a_l)","P(ack)","P(a4b)","P(nD)","Xi()","Vq()","a9b()","WT()","X7()","WU()","P(mS)","Vv()","afP(Z,F)","aeH(Z,F)","~(a8<@,@>)","F(CU,CU)","m(eh)","P(afD)","P(a1A)","P(D8)","P(acP)","P(aeK)","P(acy)","F(F,r5)","F(F,CY)","m(r5)","~(r5,ai<m>,F)","r5?(CY)","WN()","v(m,a1n)","P(abd)","~(B1)","Xl()","~(xv,m,p,u,I)","~(m,tU)","W6()","Wx(Z)","O4(Z)","VQ(Z,bt<I>,bt<I>)","Xq()","We()","Vr()","W5()","WO()","WY()","Xh()","P(r5)"])
C.fIM.prototype={
$1(d){return d.a==="Hand-crank light"},
$S:z+18}
C.fxG.prototype={
$1(d){return"- "+d.a+": "+d.b+". "+A.d.gH(d.e.split(". "))+"."},
$S:z+24}
C.fFb.prototype={
$1(d){var w
if(!this.a.Me(d))w=Math.abs(d.fr)>0.002||d.fx>0.05
else w=!1
return w},
$S:z+0}
C.fFc.prototype={
$1(d){return d.x},
$S:z+0}
C.fIJ.prototype={
$1(d){return d.b===this.a.a},
$S:z+0}
C.fIK.prototype={
$1(d){var w
if(!this.a.Me(d))w=d.fx>0.05||Math.abs(d.fr)>0.002
else w=!1
return w},
$S:z+0}
C.fIL.prototype={
$2(d,e){var w=Math.abs(e.fr)
return w>d?w:d},
$S:z+6}
C.ei4.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ei5.prototype={
$0(){var w=this.a
w.ax=!1
w.ay.push(new B.y(this.b,this.c))},
$S:0}
C.ei6.prototype={
$1(d){var w=this.a.ch,v=w.f
if(v.length!==0){v=A.d.gd5(v).Q
v.toString
w.mp(v,A.dV,A.iI)}},
$S:7}
C.eih.prototype={
$0(){var w=this.a
w.x=!0
w.w=null
A.d.a8(w.ay)
w.at=!1
w.Q="Thinking about how to build it\u2026"},
$S:0}
C.eii.prototype={
$0(){var w,v=this.b
v.x=!1
w=this.a
v.w=w.a
v.Q=w.b
v.at=!0},
$S:0}
C.eid.prototype={
$0(){var w=this.a
w.y=!0
w.z=0},
$S:0}
C.eib.prototype={
$2(d,e){var w=this.a
w.r.push(B.cz(B.dv(0,0,0,d,0,0),new C.eic(w,this.b,e)))},
$S:1896}
C.eic.prototype={
$0(){var w=this.a
if(w.c==null||this.b!==w.as)return
this.c.$0()},
$S:0}
C.eie.prototype={
$0(){var w=this,v=w.b,u=w.c.a,t=v.gWY().al4(0,u[1],u[2],u[3])
u[4].bO(0,new C.ei9(t))
v.e.n(0,t.a,0)
w.d.n(0,u[0],t)
G.dF(700+w.e*120,"",80,0,0.25,"square")
v.m(new C.eia(w.a,v,w.f,w.r))},
$S:0}
C.ei9.prototype={
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
C.eia.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.E(A.j.bh(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.eif.prototype={
$0(){var w=this,v=w.c,u=w.d.a,t=v.h(0,u[0]),s=v.h(0,u[2])
if(t!=null&&s!=null)w.b.gWY().alV(t,u[1],s,u[3])
G.dF(1500,"",45,0,0.25,"tri")
v=w.b
v.m(new C.ei8(w.a,v,w.e,w.f))},
$S:0}
C.ei8.prototype={
$0(){var w=this,v=w.d.c
return w.b.z=A.o.E(A.j.bh(++w.a.a/w.c*v.length),0,v.length)},
$S:0}
C.eig.prototype={
$0(){G.dF(300,"",360,-1.2,0.3,"square")
var w=this.a
w.m(new C.ei7(w,this.b))},
$S:0}
C.ei7.prototype={
$0(){var w=this.a
w.y=!1
w.z=this.b.c.length},
$S:0}
C.eil.prototype={
$0(){var w=this.a
return w.m(new C.eik(w))},
$S:0}
C.eik.prototype={
$0(){return this.a.at=!0},
$S:0}
C.eim.prototype={
$0(){var w=this.a
return w.m(new C.eij(w))},
$S:0}
C.eij.prototype={
$0(){return this.a.at=!1},
$S:0}
C.ein.prototype={
$0(){var w=this.a
w.f.sb1(0,this.b)
w.PK()},
$S:0}
C.eio.prototype={
$0(){return this.a.Z1(this.b)},
$S:0}
C.eip.prototype={
$1(d){var w=this.a
return w.at&&this.b!=null?w.PK():w.aYb()},
$S:2}
C.eiq.prototype={
$0(){var w=this.a
return w.at&&this.b!=null?w.PK():w.aYb()},
$S:0}
C.exn.prototype={
$2(d,e){return d+e},
$S:1897}
C.exH.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.exG(w,d))},
$S:1898}
C.exG.prototype={
$0(){var w=B.aI(J.t(this.b,"unlocked"))
w=w==null?null:A.j.M(w)
if(w==null)w=0
return this.a.e=w},
$S:0}
C.exI.prototype={
$0(){},
$S:0}
C.exJ.prototype={
$0(){},
$S:0}
C.exp.prototype={
$0(){return this.a.m(new C.exo(this.b,this.c))},
$S:0}
C.exo.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.exe.prototype={
$1(d){return this.a.cx===d},
$S:33}
C.exf.prototype={
$1(d){return this.a.cx=d},
$S:32}
C.exg.prototype={
$1(d){return this.a.cy===d},
$S:33}
C.exh.prototype={
$1(d){return this.a.cy=d},
$S:32}
C.exi.prototype={
$1(d){return this.a.db===d},
$S:33}
C.exj.prototype={
$1(d){return this.a.db=d},
$S:32}
C.exk.prototype={
$1(d){return this.a.dx.q(0,d)},
$S:33}
C.exl.prototype={
$1(d){var w=this.a.dx
return w.q(0,d)?w.W(0,d):w.J(0,d)},
$S:32}
C.exm.prototype={
$0(){var w=this.a
return w.m(w.gayd())},
$S:0}
C.exc.prototype={
$1(d){return this.a.$1(!0)},
$S:69}
C.exd.prototype={
$1(d){return this.a.$1(!1)},
$S:114}
C.exb.prototype={
$1(d){return this.a.$1(!1)},
$S:144}
C.exA.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.ch=n
n=B.b4(p,p,p,new C.bj0(o,p),n)
w=this.b
v=C.bBX("WORLD",w.a,w.c)
u=C.bBX("GRAVITY",B.w(w.b)+" m/s\xb2",A.c)
t=o.x
s=A.j.V(t*100)
t=t<0.25?A.c_:A.b9
t=C.bBX("FUEL",""+s+"%",t)
s=o.r.b
r=A.j.V(s*100)
s=s>D.Dm[o.db].d?A.c_:A.c
q=x.p
s=B.a([v,u,t,C.bBX("SPEED",""+r,s)],q)
if(o.dx.q(0,0))s.push(C.bBX("HEIGHT",""+A.j.V(A.j.E(0.86-o.f.b,0,1)*1000)+" m",A.c))
n=B.a([n,B.ao(p,B.A(s,A.m,p,A.iR,A.i,0,p,p),p,p,14,14,6,p)],q)
if(o.as==="ready")n.push(o.bHD(w))
if(o.as==="landed"){w=o.d+1
w=w<7?"Next world unlocked: "+D.t4[w].a+".":"You landed on every world!"
v=B.a([new E.fB(A.ox,"Again",new C.exv(o),A.c,p),new E.fB(A.os,"Rebuild",new C.exw(o),A.aU,p)],q)
if(o.d+1<7)v.push(new E.fB(A.jD,"Next world",new C.exx(o),A.b9,p))
n.push(C.hxc("Perfect landing!",w,A.b9,v))}if(o.as==="crashed")n.push(C.hxc("Crash!",o.at,A.c_,B.a([new E.fB(A.ox,"Try again",new C.exy(o),A.b9,p),new E.fB(A.os,"Rebuild",new C.exz(o),A.aU,p)],q)))
return new B.an(A.a0,p,A.b2,A.t,n,p)},
$S:67}
C.exv.prototype={
$0(){var w=this.a
return w.m(w.gayd())},
$S:0}
C.exw.prototype={
$0(){var w=this.a
return w.m(new C.exs(w))},
$S:0}
C.exs.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.exx.prototype={
$0(){var w=this.a
return w.m(new C.exr(w))},
$S:0}
C.exr.prototype={
$0(){var w=this.a;++w.d
w.as="ready"},
$S:0}
C.exy.prototype={
$0(){var w=this.a
return w.m(w.gayd())},
$S:0}
C.exz.prototype={
$0(){var w=this.a
return w.m(new C.exq(w))},
$S:0}
C.exq.prototype={
$0(){return this.a.as="ready"},
$S:0}
C.exB.prototype={
$0(){var w=this.b,v=this.a
if(w<=v.e)v.m(new C.exu(v,w))},
$S:0}
C.exu.prototype={
$0(){var w=this.a
w.d=this.b
w.as="ready"},
$S:0}
C.exC.prototype={
$1(d){return this.a.y=d},
$S:9}
C.exD.prototype={
$1(d){return this.a.Q=d},
$S:9}
C.exE.prototype={
$1(d){return this.a.z=d},
$S:9}
C.exF.prototype={
$0(){var w=this.a
return w.m(new C.ext(w))},
$S:0}
C.ext.prototype={
$0(){var w=this.a
return w.dy=!w.dy},
$S:0}
C.dOy.prototype={
$0(){var w=0,v=B.j(x.h),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=$.hso
if(q==null)q=$.hso=C.cOn()
w=3
return B.b(B.iK(B.a([q,$.rd().cVC("assets/data/three.min.js")],x.D),x.K),$async$$0)
case 3:s=e
q=t.a
if(q.c==null){w=1
break}r=q.as
r.toString
r.kW(0,B.cO(J.t(s,1)))
q.m(new C.dOx(q,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:50}
C.dOx.prototype={
$0(){return this.a.d=x.m.a(J.t(this.b,0))},
$S:0}
C.dOa.prototype={
$0(){return this.a.bZr(B.aT(J.t(this.b,"group")))},
$S:0}
C.dOb.prototype={
$1(d){return A.a.b_(A.o.ft(A.o.E(A.j.V(d*255),0,255),16),2,"0")},
$S:345}
C.dOz.prototype={
$0(){return E.Xj("kick",0,0.25)},
$S:0}
C.dOc.prototype={
$0(){return this.a.cx=this.b},
$S:0}
C.dOd.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.dOe.prototype={
$0(){return E.Xj("kick",0,0.5)},
$S:0}
C.dOf.prototype={
$0(){return G.dF(1300+this.a.R8.aw(900),"",40,0,0.2,"square")},
$S:0}
C.dOh.prototype={
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
u=w}if(u.cx!=null&&!A.d.aW(u.d.e,new C.dOg(u)))u.cx=null
u.go=0},
$S:0}
C.dOg.prototype={
$1(d){var w=this.a
return d.a===w.cx&&w.aA1(d)},
$S:z+10}
C.dO7.prototype={
$0(){var w,v,u=this,t=u.b
if(t)++u.a.p3
w=u.a
v=u.c
w.p4=t?"Yes! That is the "+v.toLowerCase()+".":"That is the "+v.toLowerCase()+". Keep looking for the "+w.p2.toLowerCase()+"."},
$S:0}
C.dO8.prototype={
$0(){var w=this.a
return w.m(w.gc92())},
$S:0}
C.dO9.prototype={
$0(){return this.a.aew(null)},
$S:0}
C.dOo.prototype={
$0(){var w=this.a.as
return w==null?null:w.f8(0,B.H(["t","shot"],x.N,x.z))},
$S:0}
C.dOp.prototype={
$0(){return this.a.cFs(this.b.a)},
$S:0}
C.dOq.prototype={
$0(){return this.a.aew(this.b)},
$S:0}
C.dOr.prototype={
$1(d){var w=this.a
return w.m(new C.dOn(w,d))},
$S:6}
C.dOn.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.dOs.prototype={
$0(){var w=this.a
return w.m(new C.dOm(w,this.b))},
$S:0}
C.dOm.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.dOt.prototype={
$0(){var w=this.a
return w.m(new C.dOl(w))},
$S:0}
C.dOl.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.dOu.prototype={
$0(){var w=this.a
return w.m(new C.dOk(w))},
$S:0}
C.dOk.prototype={
$0(){var w=this.a,v=w.as
if(v!=null)v.f8(0,B.H(["t","reset"],x.N,x.z))
w.cx=null
w.cy=0.5
w.db=0.05
w.dy=1
w.fx=D.LE},
$S:0}
C.dOv.prototype={
$0(){var w=this.a
return w.m(new C.dOj(w))},
$S:0}
C.dOj.prototype={
$0(){var w=this.a,v=!w.p1
w.p1=v
w.p3=0
w.cx=null
if(v)w.b_Y()
else w.p2=null},
$S:0}
C.dOw.prototype={
$0(){var w=this.a
return w.m(new C.dOi(w))},
$S:0}
C.dOi.prototype={
$0(){var w=this.a
return w.k4=!w.k4},
$S:0}
C.c63.prototype={
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
C.c64.prototype={
$1(d){var w=new B.r2([],[]).oL(d.data,!0)
if(x.f.b(w)&&J.t(w,"ngmyBody")!=null)this.a.a.$1(w)},
$S:467}
C.fr1.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)&&w.h(d,1)},
$S:234}
C.fr2.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)||w.h(d,1)},
$S:234}
C.fr3.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)!==w.h(d,1)},
$S:234}
C.fra.prototype={
$1(d){return!J.t(d,0)},
$S:234}
C.frb.prototype={
$1(d){var w=J.a7(d)
return!(w.h(d,0)&&w.h(d,1))},
$S:234}
C.frc.prototype={
$1(d){var w=J.a7(d)
return w.h(d,0)&&w.h(d,1)&&!w.h(d,2)},
$S:234}
C.dQd.prototype={
$1(d){return this.a.auU(0)},
$S:7}
C.dPS.prototype={
$0(){var w=this.b
return this.a.cx=new B.N(w,B.ieQ(),B.U(w).k("N<1,F>")).fM(0)},
$S:0}
C.dPV.prototype={
$1(d){return""+d},
$S:78}
C.dQe.prototype={
$1(d){return d.b==="buzzer"},
$S:z+7}
C.dPQ.prototype={
$1(d){return this.a.auU(this.b)},
$S:7}
C.dPR.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="switch",a0="led",a1=this.a
a1.ayH(0)
a1.ay=null
a1.ch=""
w=a1.e
switch(this.b){case 0:v=a1.mM(0,d,a1.mf(0.15,0.3))
u=a1.mM(0,d,a1.mf(0.15,0.62))
t=a1.mM(0,"and",a1.mf(0.48,0.46))
s=a1.mM(0,a0,a1.mf(0.82,0.46))
a1=t.a
w.push(new C.nD(v.a,a1,0))
w.push(new C.nD(u.a,a1,1))
w.push(new C.nD(a1,s.a,0))
break
case 1:v=a1.mM(0,d,a1.mf(0.12,0.25))
u=a1.mM(0,d,a1.mf(0.12,0.65))
r=a1.mM(0,"xor",a1.mf(0.46,0.25))
q=a1.mM(0,"and",a1.mf(0.46,0.65))
p=a1.ayG(0,a0,a1.mf(0.82,0.25),0)
o=a1.ayG(0,a0,a1.mf(0.82,0.65),0)
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
case 2:k=a1.mM(0,"clock",a1.mf(0.15,0.4))
j=a1.mM(0,"not",a1.mf(0.45,0.65))
s=a1.mM(0,a0,a1.mf(0.82,0.3))
i=a1.mM(0,"buzzer",a1.mf(0.82,0.65))
a1=k.a
w.push(new C.nD(a1,s.a,0))
n=j.a
w.push(new C.nD(a1,n,0))
w.push(new C.nD(n,i.a,0))
break
default:h=a1.mM(0,d,a1.mf(0.12,0.25))
g=a1.mM(0,d,a1.mf(0.12,0.7))
f=a1.mM(0,"nor",a1.mf(0.5,0.25))
e=a1.mM(0,"nor",a1.mf(0.5,0.7))
s=a1.mM(0,a0,a1.mf(0.86,0.25))
a1=f.a
w.push(new C.nD(g.a,a1,0))
n=e.a
w.push(new C.nD(n,a1,1))
w.push(new C.nD(h.a,n,0))
w.push(new C.nD(a1,n,1))
w.push(new C.nD(a1,s.a,0))}},
$S:0}
C.dPW.prototype={
$0(){var w,v,u,t,s,r,q,p,o=this.a
o.ayH(0)
o.ay=this.b
o.ch=""
for(w=this.c,v=w.c,u=v-1,t=v===1,s=0;s<v;++s){r=t?0.5:0.22+0.56*s/u
q=o.x
p="c"+o.y++
o.d.n(0,p,new C.CU(p,"switch",new B.p(0.14*q.a,r*q.b),0))}o.mM(0,w.e,o.mf(0.86,0.5))},
$S:0}
C.dPL.prototype={
$1(d){return d.b==="switch"},
$S:z+7}
C.dPM.prototype={
$2(d,e){return A.j.aS(d.c.b,e.c.b)},
$S:z+23}
C.dPN.prototype={
$1(d){return d.b===this.a.e},
$S:z+7}
C.dPO.prototype={
$0(){var w=this.a,v=this.b,u=v.c,t=u===1?"":"es"
v=v.e==="led"?"light":"buzzer"
w.ch="Keep the "+u+" switch"+t+" and the "+v+" on the board."
w.CW=!1},
$S:0}
C.dPP.prototype={
$0(){var w=this.b,v=this.a
if(w.length===0){v.ch="Perfect! Your circuit works for every combination."
v.CW=!0
v.adQ(this.c)
if(v.ax)C.JC("bell",B.a([0,4,7,12],x.t),900,0.5)}else{v.ch="Not yet. "+A.d.gH(w)
v.CW=!1
if(v.ax)G.dF(140,"",250,0,0.3,"square")}},
$S:0}
C.dPX.prototype={
$0(){},
$S:0}
C.dPY.prototype={
$0(){return A.d.cA(this.a.e,this.b)},
$S:0}
C.dPZ.prototype={
$0(){return this.a.cy=null},
$S:0}
C.dPU.prototype={
$0(){var w=this.a,v=this.b
w.d.W(0,v)
A.d.bt(w.e,new C.dPT(v))
w.cy=null},
$S:0}
C.dPT.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+11}
C.dPK.prototype={
$0(){var w=this.a,v=this.c
w.cy=w.mM(0,this.b,new B.p(w.x.a*(0.3+v.ai()*0.4),w.x.b*(0.2+v.ai()*0.6))).a},
$S:0}
C.dQ7.prototype={
$0(){var w=this.a
return w.m(new C.dQ6(w))},
$S:0}
C.dQ6.prototype={
$0(){var w=this.a
return w.ax=!w.ax},
$S:0}
C.dQ8.prototype={
$2(d,e){var w=null,v=this.a,u=new B.av(e.b,e.d)
v.x=u
return B.aA(A.c5,B.jk(B.b4(w,w,w,new C.bd0(v,w),u),A.t,w),A.y,!1,w,w,w,w,w,w,w,w,w,new C.dQ1(v),w,w,w,new C.dQ2(v),new C.dQ3(v),new C.dQ4(v),w,w,w,w,w,w,w,w,w,w,new C.dQ5(v),w,w,w,!1,A.a4)},
$S:36}
C.dQ5.prototype={
$1(d){return this.a.caN(d.b)},
$S:71}
C.dQ3.prototype={
$1(d){var w,v=this.a,u=d.b,t=v.cjM(u)
if(t!=null){v.as=t
v.at=u
return}w=v.azy(u)
if(w!=null){v.z=w
v.Q=v.d.h(0,w).c.aK(0,u)}},
$S:48}
C.dQ4.prototype={
$1(d){var w,v,u=this.a
if(u.as!=null)u.at=d.b
else{w=u.z
if(w!=null){v=u.d.h(0,w)
if(v!=null){w=d.b
v.c=new B.p(A.j.E(w.a+u.Q.a,46,u.x.a-46),A.j.E(w.b+u.Q.b,46,u.x.b-46))}}}},
$S:19}
C.dQ2.prototype={
$1(d){var w,v,u,t=this.a
if(t.as!=null){w=t.c1X(t.at)
if(w!=null&&w.a!==t.as){v=t.e
A.d.bt(v,new C.dQ_(w))
u=t.as
u.toString
v.push(new C.nD(u,w.a,w.b))
B.jS()}}t.z=t.as=null},
$S:38}
C.dQ_.prototype={
$1(d){var w=this.a
return d.b===w.a&&d.c===w.b},
$S:z+11}
C.dQ1.prototype={
$1(d){return this.a.axw(d.b)},
$S:302}
C.dQ9.prototype={
$0(){return this.a.bDr(this.b.a)},
$S:0}
C.dQa.prototype={
$0(){return this.a.auU(this.b.a)},
$S:0}
C.dQb.prototype={
$0(){var w=this.a
return w.m(new C.dQ0(w))},
$S:0}
C.dQ0.prototype={
$0(){var w=this.a
w.ayH(0)
w.ay=null},
$S:0}
C.dQc.prototype={
$0(){return this.a.cB5(this.b)},
$S:0}
C.cVi.prototype={
$0(){var w=this,v=null,u=B.ft(v,A.ct,v,v,v,B.cQ(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.bW,v,A.dA,A.bX)
u.eb()
return u},
$S:267}
C.dWb.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.dWa.prototype={
$0(){return this.a.d=null},
$S:0}
C.dWd.prototype={
$2(d,e){if(!d&&this.b!=null)this.a.c3Q()},
$S:124}
C.dWc.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.frs.prototype={
$0(){return K.aKK},
$S:z+40}
C.frt.prototype={
$0(){return D.dNH},
$S:z+43}
C.fru.prototype={
$0(){return D.dKz},
$S:z+13}
C.frv.prototype={
$0(){return D.ee0},
$S:z+14}
C.frw.prototype={
$0(){return D.dWU},
$S:z+15}
C.frx.prototype={
$0(){return K.aKB},
$S:z+16}
C.fry.prototype={
$0(){return D.ebN},
$S:z+17}
C.frz.prototype={
$0(){return K.aKJ},
$S:z+12}
C.frA.prototype={
$0(){return D.dMP},
$S:z+19}
C.f72.prototype={
$2(d,e){return new C.afP($.bGo()[e],new C.f71(e,this.a),null)},
$S:z+20}
C.f71.prototype={
$0(){var w=this.a,v=I.aIm.h(0,$.bGo()[w].a)
$.ate=v==null?"music":v
B.a6(this.b,!1).cd(B.eb(new C.f7_(w),!1,null,x.H))},
$S:0}
C.f7_.prototype={
$1(d){return $.bGo()[this.a].e.$0()},
$S:39}
C.f73.prototype={
$2(d,e){return new C.aeH(D.aAM[e],new C.f70(this.a,e),null)},
$S:z+21}
C.f70.prototype={
$0(){return this.a.d.$1(D.aAM[this.b])},
$S:0}
C.f6J.prototype={
$0(){return this.a.as=!0},
$S:0}
C.f6I.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f6H.prototype={
$1(d){var w=this
return new B.e0(new C.f6G(w.a,w.b,w.c,w.d),null)},
$S:20}
C.f6G.prototype={
$2(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,a0=null,a1=x.l,a2=B.aH(a3,a0,a1).w
a1=B.aH(a3,a0,a1).w
w=x.p
v=B.a([D.fHf,A.aw,D.fO1,A.af],w)
for(u=d.d,t=d.a,s=x.G,r=d.b,q=d.c,p=0;p<3;p=o){o=p+1
n=B.d("SLAB "+o,a0,a0,a0,a0,a0,a0,D.fwB,a0,a0,a0)
m=new B.aP(12,12)
l=new B.aP(12,12)
l=B.a([new B.by(1,A.bb,B.aM(a0,A.Z,!1,a0,!0,A.t,a0,B.aN(),r[p],a0,a0,a0,a0,a0,2,new B.e5(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Title",a0,N.EG,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.bg(m,m,m,m),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ac,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.ju,!0,A.a5,a0,A.ao,a0,a0,a0,a0),a0),A.ae,new B.by(2,A.bb,B.aM(a0,A.Z,!1,a0,!0,A.t,a0,B.aN(),q[p],a0,a0,a0,a0,a0,2,new B.e5(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"Small line",a0,N.EG,a0,a0,a0,!0,!0,!1,a0,a0,a0,a0,a0,a0,!0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"",a0,a0,!0,A.c.j(0.06),a0,a0,a0,a0,a0,a0,a0,new B.b6(4,new B.bg(l,l,l,l),A.a1),!0,a0,a0,a0,a0),A.y,!0,a0,!0,a0,!1,a0,A.ak,a0,a0,a0,a0,a0,a0,a0,28,a0,1,a0,a0,!1,"\u2022",a0,a0,a0,a0,a0,!1,a0,a0,!1,a0,!0,a0,A.ac,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.ju,!0,A.a5,a0,A.ao,a0,a0,a0,a0),a0)],w)
m=B.a([],w)
for(k=0;k<30;++k){j=D.dxD[k]
i=new B.aP(12,12)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.C(t.a.c.d,s)
t.w=h}g=A.d.gH(h).j(0.3)}else g=A.c.j(0.06)
if(u[p].A(0,j)){h=t.w
if(h===$){h=B.C(t.a.c.d,s)
t.w=h}f=A.d.gH(h)}else f=A.bz
e=new B.ay(f,u[p].A(0,j)?1.8:1,A.r,-1)
m.push(B.aA(a0,B.q(a0,B.X(j,u[p].A(0,j)?A.c:A.aS,a0,a0,a0,22),A.f,a0,a0,new B.o(g,a0,new B.bH(e,e,e,e),new B.bg(i,i,i,i),a0,a0,A.n),a0,a0,a0,A.fy,a0,a0,a0,42),A.y,!1,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new C.f6E(a4,p,u,j),a0,a0,a0,a0,a0,a0,!1,A.a4))}A.d.v(v,B.a([n,A.am,new B.c6(A.aL,A.e,A.i,A.m,a0,A.p,a0,0,l,a0),A.Q,new B.a5(a0,44,B.cl(m,a0,a0,a0,a0,a0,A.aL,!1),a0),A.aC],w))}v.push(B.bI(A.AN,a0,new C.f6F(t,r,q,u,a3),a0))
return new B.D(new B.Q(0,0,0,a2.f.d),B.bm(!0,new B.cR(new B.aY(0,1/0,0,a1.a.b*0.86),B.cl(v,a0,a0,A0.yF,a0,a0,A.ah,!0),a0),!0,!1,A.ag,!0,!0),a0)},
$S:109}
C.f6E.prototype={
$0(){var w=this
return w.a.$1(new C.f6D(w.b,w.c,w.d))},
$S:0}
C.f6D.prototype={
$0(){var w=this.c
this.b[this.a]=w
return w},
$S:0}
C.f6F.prototype={
$0(){var w=this,v=w.a
v.m(new C.f6C(v,w.b,w.c,w.d))
B.a6(w.e,!1).O(null)},
$S:0}
C.f6C.prototype={
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
C.f6R.prototype={
$0(){var w=this.a
return w.m(new C.f6Q(w))},
$S:0}
C.f6Q.prototype={
$0(){var w=this.a
return w.at=!w.at},
$S:0}
C.f6S.prototype={
$0(){return E.uy(this.b,this.a.f,"scene")},
$S:0}
C.f6T.prototype={
$2(d,e){var w,v=null,u=this.b.d
u=B.ar(A.d.gH(u),A.d.gal(u),0.4)
u.toString
w=this.a.ga_n().x
w===$&&B.c()
return B.c3(v,new B.o(v,v,v,v,v,new B.c0(D.b1L,0.9,A.x,v,0,B.a([u.j(0.06+0.03*w),A.c2],x.O),v,v),A.n),A.bi)},
$S:325}
C.f6U.prototype={
$2(d,e){var w=null,v=Math.min(e.b-36,350),u=this.a
return B.at(B.ev(A.A,B.c9(new B.h5(B.a([u.guE(),u.ga_n()],x.dS)),new C.f6P(u,this.b,v),w),A.f,A.e_),w,w,w)},
$S:231}
C.f6P.prototype={
$2(d,e){var w,v,u,t=this,s=t.a,r=s.guE().x
r===$&&B.c()
w=r<0.9?1:1-C.btg(r,0.9,0.98)
v=s.ga_n().x
v===$&&B.c()
u=A.dy.aC(0,v)
switch(s.gayI().a){case 0:s=s.bCC(t.b,r,u,t.c)
break
case 1:s=s.bTu(t.b,r,u,t.c)
break
case 2:s=s.cFX(t.b,r,u,t.c)
break
case 3:s=s.bFy(t.b,r,u,t.c)
break
case 4:s=s.bIU(t.b,r,u,t.c)
break
case 5:s=s.caO(t.b,r,u,t.c)
break
default:s=null}return B.da(s,w)},
$S:233}
C.f6V.prototype={
$2(d,e){var w=B.ab0(this.b),v=this.c.d,u=B.ar(A.d.gH(v),A.d.gal(v),0.4)
u.toString
v=B.ar(A.d.gH(v),A.d.gal(v),0.4)
v.toString
v=w.cOV(u,A.bz,v,3.5)
u=this.a
w=u.guE().x
w===$&&B.c()
return B.YJ(B.kT(null,null,null,1,0,new C.f6O(u),A.j.E(w,0,1)),v)},
$S:1900}
C.f6O.prototype={
$1(d){var w=this.a
w.guE().sp(0,d)
if(w.as)w.m(new C.f6K(w))},
$S:6}
C.f6K.prototype={
$0(){return this.a.as=!1},
$S:0}
C.f6W.prototype={
$0(){var w=this.a
w.guE().sp(0,0)
w.aeW()},
$S:0}
C.f6X.prototype={
$1(d){var w=this.a
w.m(new C.f6N(w,d))
if(w.as)w.aeW()},
$S:6}
C.f6N.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f6Y.prototype={
$0(){var w=this.a
w.m(new C.f6M(w,this.b))
w.guE().sp(0,0)
if(w.as)w.aeW()},
$S:0}
C.f6M.prototype={
$0(){return this.a.r=this.b.a},
$S:0}
C.f6Z.prototype={
$0(){var w=this.a
return w.m(new C.f6L(w,this.b))},
$S:0}
C.f6L.prototype={
$0(){var w=B.C(this.b,x.G)
return this.a.w=w},
$S:0}
C.f6A.prototype={
$2(d,e){return A.j.aS(d.a,e.a)},
$S:1901}
C.f6B.prototype={
$1(d){return d.b},
$S:1902}
C.dqr.prototype={
$1(d){var w=this.a
return d.a===w||d.b===w},
$S:z+4}
C.dqs.prototype={
$1(d){return d.b===this.a},
$S:z+8}
C.dqo.prototype={
$1(d){return d.a===this.a&&d.b===this.b},
$S:z+4}
C.dqp.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dqq.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dqt.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dqu.prototype={
$1(d){return d.a<=this.a.ax},
$S:z+8}
C.dqv.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.dqw.prototype={
$1(d){return d.d<this.a.ax},
$S:z+25}
C.dqx.prototype={
$1(d){return this.a.ax-d.f>d.e},
$S:z+26}
C.dqy.prototype={
$1(d){return this.a.ax-d.c>900},
$S:z+27}
C.dqz.prototype={
$1(d){return this.a.ax-d.d>700},
$S:z+28}
C.dqA.prototype={
$1(d){return this.a.ax-d.d>1100},
$S:z+29}
C.dqB.prototype={
$1(d){return this.a.ax-d.d>4200},
$S:z+30}
C.ewI.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ewx.prototype={
$0(){return this.a.ax=!1},
$S:0}
C.ewz.prototype={
$2(d,e){return d+e.d*7+A.o.F(A.a.gX(e.b),97)},
$S:z+31}
C.ewA.prototype={
$2(d,e){return d+A.o.F(A.a.gX(e.a),31)+A.o.F(A.a.gX(e.b),17)},
$S:z+32}
C.ewD.prototype={
$1(d){var w=D.n3.h(0,d.b),v=w.e,u=v.length,t=w.a
return u!==0?t+" ("+v[A.o.F(d.d,u)]+")":t},
$S:z+33}
C.ewE.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=s.a,q=r.d.b,p=B.U(q),o=x.dg,n=B.C(new B.e9(new B.cM(new B.Y(q,new C.ewF(d),p.k("Y<1>")),new C.ewG(r),p.k("cM<1,r5?>")),o),o.k("M.E"))
r=n.length
if(r===0||f>4){if(e.length>1)s.b.push(A.d.aO(e,"  \u2192  "))
return}for(q=s.c,p=f+1,o=x.N,w=s.b,v=0;v<n.length;n.length===r||(0,B.K)(n),++v){u=n[v]
if(w.length>=6)return
t=B.C(e,o)
t.push(q.$1(u))
s.$3(u,t,p)}},
$S:z+34}
C.ewF.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ewG.prototype={
$1(d){return this.a.d.a.h(0,d.b)},
$S:z+35}
C.ewB.prototype={
$1(d){return D.n3.h(0,d.b).c===D.xB},
$S:z+54}
C.ewC.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ex7.prototype={
$1(d){var w=this.a,v=d.a,u=A.j.E((v-w.f.a)/1e6,0,0.05)
w.f=d
w=w.d
w.vH(0,u)
w.a7i(A.o.ar(v,1000))},
$S:7}
C.ewH.prototype={
$0(){},
$S:0}
C.ewt.prototype={
$0(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q
var $async$$0=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$$0)
case 6:e.aA("String","ngmy_core_reaction_lab_v1",s.a.d.ak())
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
C.ewK.prototype={
$1(d){var w=null,v=this.a.b
return B.bm(!0,B.x(B.a([A.Q,B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,B.X(D.n3.h(0,v).b,D.n3.h(0,v).d,w,w,w,w),w,w,w,w,w,!1,w,w,w,w,w,D.fZz,w,B.d(D.n3.h(0,v).a,w,w,w,w,w,w,A.fW,w,w,w),w,w,w),B.dG(!1,w,w,w,!0,w,w,w,!0,w,w,W.ary,w,w,w,w,new C.ewJ(d),!1,w,w,w,w,w,w,w,D.fQS,w,w,w)],x.p),A.m,w,A.e,A.P,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.ewJ.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.ewM.prototype={
$1(d){var w,v,u,t=null,s=B.aH(d,t,x.l).w,r=B.a([D.epY],x.p)
for(w=0;w<6;++w){v=D.aBa[w]
u=B.d(v.a,t,t,t,t,t,t,A.fW,t,t,t)
r.push(B.dG(!1,t,t,t,!0,t,t,t,!0,t,t,D.c1K,t,t,t,t,new C.ewL(d,v),!1,t,t,t,t,t,B.d(v.b,t,t,t,t,t,t,A.mz,t,t,t),t,u,t,t,t))}return B.bm(!0,new B.cR(new B.aY(0,1/0,0,s.a.b*0.7),B.cl(r,t,t,D.bGF,t,t,A.ah,!0),t),!0,!1,A.ag,!0,!0)},
$S:27}
C.ewL.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eww.prototype={
$1(d){var w=null
return B.eg(B.a([B.bM(!1,A.dl,w,w,!0,w,w,w,new C.ewu(d),w,w),B.bM(!1,A.EL,w,w,!0,w,w,w,new C.ewv(d),w,w)],x.p),w,w,I.m6,D.fOc,w,w,w,w,D.fRa,w)},
$S:18}
C.ewu.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.ewv.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.ex5.prototype={
$0(){var w=this.a
return w.m(new C.ex4(w))},
$S:0}
C.ex4.prototype={
$0(){return this.a.r=!1},
$S:0}
C.ex6.prototype={
$2(d,e){var w,v,u,t=null,s=new B.av(e.b,e.d),r=this.a
if(!r.w){w=r.d
w.cy=s
B.nj(new C.ewW(r,s))}else{w=r.d
if(!w.cy.A(0,s))w.cy=s}v=r.r
u=w.a.a===0&&r.w?D.bcu:t
v=B.a([B.b4(u,t,t,new C.biZ(w,v,new C.ewX(r),new C.ewY(r),w),s)],x.p)
if(!r.r&&r.w)v.push(B.ao(t,new B.dx(!0,B.c9(w,new C.ewZ(r),t),t),t,t,10,10,6,t))
if(r.ax)v.push(r.bKy())
return B.aA(A.c5,B.jk(new B.an(A.a0,t,A.b2,A.t,v,t),A.t,t),A.y,!1,t,t,t,t,t,t,t,t,t,new C.ex_(r),t,r.gcl4(),t,new C.ex0(r),new C.ex1(r),new C.ex2(r),t,t,t,t,t,t,t,t,t,t,new C.ex3(r),t,t,t,!1,A.a4)},
$S:36}
C.ewW.prototype={
$0(){return this.a.acT(this.b)},
$S:0}
C.ex3.prototype={
$1(d){return this.a.cDE(d.b)},
$S:71}
C.ex1.prototype={
$1(d){return this.a.cl5(d.b)},
$S:48}
C.ex2.prototype={
$1(d){return this.a.cl6(d.b)},
$S:19}
C.ex0.prototype={
$1(d){return this.a.b3u()},
$S:38}
C.ex_.prototype={
$1(d){return this.a.adA(d.b)},
$S:302}
C.ewX.prototype={
$0(){return this.a.z},
$S:659}
C.ewY.prototype={
$0(){return this.a.Q},
$S:736}
C.ewZ.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a.bOP()
if(p.length===0)return A.bL
w=A.w.j(0.55)
v=B.n(14)
u=B.L(A.bz,A.r,1)
t=B.a([D.fLC,A.cU],x.p)
for(s=p.length,r=0;r<p.length;p.length===s||(0,B.K)(p),++r)t.push(B.d(p[r],q,2,A.a2,q,q,q,D.fve,q,q,q))
return B.q(q,B.x(t,A.E,q,A.e,A.P,0,A.p),A.f,q,q,new B.o(w,q,u,v,q,q,A.n),q,q,q,q,A.ha,q,q,q)},
$S:65}
C.ewy.prototype={
$4(d,e,f,g){var w=null,v=e.j(0.2),u=B.n(12),t=B.L(e.j(0.6),A.r,1),s=x.p
return new B.D(A.ei,B.A(B.a([B.q(w,B.X(d,e,w,w,w,21),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,38,w,w,w,w,w,38),A.bd,B.E(B.x(B.a([B.d(f,w,w,w,w,w,w,Ad.Vo,w,w,w),A.bG,B.d(g,w,w,w,w,w,w,F.aaU,w,w,w)],s),A.E,w,A.e,A.i,0,A.p),1)],s),A.E,w,A.e,A.i,0,w,w),w)},
$S:1904}
C.ewS.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).hU()},
$S:0}
C.ewT.prototype={
$0(){var w=this.a
return w.m(new C.ewR(w))},
$S:0}
C.ewR.prototype={
$0(){return this.a.ax=!0},
$S:0}
C.ewU.prototype={
$0(){var w=this.a
return w.m(new C.ewQ(w))},
$S:0}
C.ewQ.prototype={
$0(){var w=this.a,v=!w.ay
w.ay=v
w.d.db=v},
$S:0}
C.ewV.prototype={
$0(){var w=this.a
return w.m(new C.ewP(w))},
$S:0}
C.ewP.prototype={
$0(){return this.a.r=!0},
$S:0}
C.ewO.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=B.a([],x.s)
for(w=D.n3.gdO(D.n3),w=w.gae(w);w.C();){v=w.gR(w)
if(v.b.c===e)p.push(v.a)}w=B.d(d,q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,9.5,q,q,A.u,q,q,!0,q,1.4,q,q,q,q,q,q),q,q,q)
v=x.p
u=B.a([],v)
for(t=p.length,s=this.a,r=0;r<p.length;p.length===t||(0,B.K)(p),++r)u.push(s.cyo(p[r]))
return new B.D(R.akS,B.x(B.a([new B.D(Ai.amx,w,q),B.A(u,A.m,q,A.e,A.i,0,q,q)],v),A.E,q,A.e,A.i,0,A.p),q)},
$S:z+37}
C.ewN.prototype={
$0(){return this.a.caU(this.b)},
$S:0}
C.dqn.prototype={
$0(){var w=this,v=null,u=B.ft(v,A.ct,v,v,v,B.cQ(v,v,v,v,v,v,v,v,v,B.l(v,v,w.c,v,v,v,v,v,w.e,v,v,w.b,v,v,w.d,v,v,!0,v,v,v,v,w.f,v,v,v),w.a),A.a5,A.bW,v,A.dA,A.bX)
u.eb()
return u},
$S:267}
C.bPn.prototype={
$1(d){return d.r<=0},
$S:z+38}
C.bPy.prototype={
$1(d){var w=this.a
return d.a===w||d.c===w},
$S:z+9}
C.bPt.prototype={
$1(d){var w=this,v=d.a,u=w.a
if(!(v===u&&d.b===w.b&&d.c===w.c&&d.d===w.d))v=v===w.c&&d.b===w.d&&d.c===u&&d.d===w.b
else v=!0
return v},
$S:z+9}
C.bPz.prototype={
$1(d){return this.a.Me(d)&&!d.x},
$S:z+0}
C.bPA.prototype={
$2(d,e){return Math.max(d,this.a.aCo(e))},
$S:z+6}
C.bPC.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bPD(w))},
$S:z+5}
C.bPD.prototype={
$0(){return this.a.a},
$S:88}
C.bPB.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:73}
C.bPE.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bPF(w))},
$S:z+5}
C.bPF.prototype={
$0(){return this.a.a},
$S:88}
C.bPp.prototype={
$2(d,e){var w=this.a
return w.c3(0,d.a+"."+e,new C.bPq(w))},
$S:z+5}
C.bPq.prototype={
$0(){return this.a.a},
$S:88}
C.bPo.prototype={
$1(d){var w,v,u
for(w=this.a;v=w[d],v!==d;d=u){u=w[v]
w[d]=u}return d},
$S:73}
C.bPr.prototype={
$2(d,e){var w=this.a
return w.c3(0,this.b.$1(this.c.$2(d,e)),new C.bPs(w))},
$S:z+5}
C.bPs.prototype={
$0(){return this.a.a},
$S:88}
C.bPm.prototype={
$1(d){var w=this.a
return d!==w&&d.b==="battery"&&d.e===1.5&&!d.x&&Math.abs(d.fr)>0.5*Math.abs(w.fr)},
$S:z+0}
C.bPG.prototype={
$1(d){var w=this.a
if(!(d.a===w&&d.b===this.b))w=d.c===w&&d.d===this.b
else w=!0
return w},
$S:z+9}
C.bPu.prototype={
$1(d){return d!==this.b&&this.a.aII(d)&&Math.abs(d.fr)>0.0005},
$S:z+0}
C.bPx.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bPw.prototype={
$1(d){return d.fx>=this.a&&!d.x},
$S:z+0}
C.bPv.prototype={
$1(d){return d.b===this.a},
$S:z+0}
C.bJL.prototype={
$1(d){return d.Q>0.05},
$S:z+0}
C.bJM.prototype={
$2(d,e){return Math.max(d,e.Q)},
$S:z+6}
C.ct7.prototype={
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
C.fUz.prototype={
$1(d){var w
$.S()
w=B.J()
w.r=d.gp(0)
return w},
$S:1905}
C.fUB.prototype={
$2(d,e){var w
$.S()
w=B.J()
w.b=A.aa
w.c=e
w.r=d.gp(0)
w.d=A.bB
return w},
$S:1906}
C.fUC.prototype={
$5(d,e,f,g,h){return B.bn(new B.a3(d,e,d+f,e+g),new B.aP(h,h))},
$4(d,e,f,g){return this.$5(d,e,f,g,5)},
$S:1907}
C.fUA.prototype={
$3(d,e,f){var w
$.S()
w=B.J()
w.sav(new B.a9(A.b6,A.b8,A.x,B.a([e,f],x.O),null,null).aJ(0,d))
return w},
$S:1908}
C.bJp.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.bJq.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.bJo(w))},
$S:0}
C.bJo.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bJr.prototype={
$0(){return B.a([],x.k)},
$S:1909}
C.bJs.prototype={
$1(d){return this.a.bE(d).a>15e5},
$S:436}
C.bJt.prototype={
$0(){var w,v,u
J.bGx(this.b)
w=this.a
if(w.c==null)return
v=this.c
if(w.a.c.tM(v))if(C.hdv(v.b))w.b2Y(v)
else w.a0r(v)
else{u=w.a.c.bfP(v)
w.af7(u==null?"The "+$.qy().h(0,v.b).b+" is off. Give it power first.":u)}},
$S:0}
C.bJn.prototype={
$1(d){return new B.e0(new C.bJk(this.a,this.b),null)},
$S:20}
C.bJk.prototype={
$2(a2,a3){var w,v,u,t,s,r,q,p=null,o=this.b,n=new C.bJl(this.a,o,a3),m=$.qy(),l=o.b,k=m.h(0,l).d,j=A.j.V(o.ch/1.04),i=new C.bJm(o,n,k),h=B.n(26),g=B.L(k.j(0.55),A.r,1.4),f=x.V,e=B.a([new B.ac(0,A.G,k.j(0.25),A.H,26)],f),d=B.q(p,p,A.f,p,p,new B.o(A.aV,p,p,B.n(3),p,p,A.n),p,4,p,p,p,p,p,42),a0=k.j(0.2),a1=B.L(k,A.r,1)
a1=B.q(p,B.at(B.d(m.h(0,l).c,p,p,p,p,p,p,A.pQ,p,p,p),p,p,p),A.f,p,p,new B.o(a0,p,a1,p,p,p,A.a7),p,42,p,p,p,p,p,42)
a0=x.p
w=B.E(B.x(B.a([B.d(m.h(0,l).b,p,1,A.a2,p,p,p,A.kg,p,p,p),D.fLq],a0),A.E,p,A.e,A.i,0,A.p),1)
v=k.j(0.2)
u=B.n(14)
t=B.L(k,A.r,1)
u=B.A(B.a([a1,A.bd,w,B.q(p,B.d(""+A.j.V(o.ch*100)+"%",p,p,p,p,p,p,B.l(p,p,k,p,p,p,p,p,p,p,p,15,p,p,A.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(v,p,t,u,p,p,A.n),p,p,p,p,A.mc,p,p,p)],a0),A.m,p,A.e,A.i,0,p,p)
t=A.w.j(0.35)
v=B.n(18)
w=B.L(A.dr,A.r,1)
a1=30+28*o.ch
s=B.n(8)
r=B.a([k.j(0.85),A.au],x.O)
q=B.L(A.aD,A.r,2)
f=B.a([new B.ac(0,A.G,k.j(0.5),A.H,14)],f)
v=B.q(p,B.at(B.cT(p,B.at(B.ev(A.A,new B.D(A.hG,B.d(m.h(0,l).c,p,p,p,p,p,p,A.my,p,p,p),p),A.f,A.dz),p,p,p),p,p,A.b4,new B.o(p,p,q,s,f,new B.a9(A.aA,A.aF,A.x,r,p,p),A.n),A.eG,p,a1*0.58,p,p,p,p,p,a1),p,p,p),A.f,p,p,new B.o(t,p,w,v,p,p,A.n),p,120,p,p,p,p,p,1/0)
i=B.A(B.a([i.$2("1\xd7",1),i.$2("2\xd7",2),i.$2("3\xd7",3),i.$2("4\xd7",4),i.$2("5\xd7",5)],a0),A.m,p,A.e,A.i,0,p,p)
w=B.aG(p,p,p,p,B.X(A.apV,k,p,p,p,30),p,p,p,new C.bJg(n,o),p,p,p,p,p,p)
t=B.ab0(a2).bfi(k,A.bz,k.j(0.2),A.c,8)
o=B.A(B.a([w,B.E(B.YJ(B.kT(p,p,p,5.2,1,n,A.j.E(o.ch,1,5.2)),t),1),B.aG(p,p,p,p,B.X(A.a22,k,p,p,p,30),p,p,p,new C.bJh(n,o),p,p,p,p,p,p)],a0),A.m,p,A.e,A.i,0,p,p)
return B.bm(!0,B.q(p,B.x(B.a([d,A.af,u,A.aC,v,A.af,i,A.aw,o,B.A(B.a([B.E(B.d(j<=1?"Normal size":"About "+j+" times the normal size",p,p,p,p,p,p,A.hg,p,p,p),1),B.bM(!1,A4.aWw,p,p,!0,p,p,p,new C.bJi(a2),p,B.fs(p,p,k.j(0.25),p,p,p,p,p,p,p,p,A.c,p,p,p,p,p,A.rQ,p,p,p,p,p,p,p,p))],a0),A.m,p,A.e,A.i,0,p,p)],a0),A.m,p,A.e,A.P,0,A.p),A.f,p,p,new B.o(p,p,g,h,e,D.c9_,A.n),p,p,p,A.yw,D.bDb,p,p,p),!0,!1,A.ag,!0,!0)},
$S:87}
C.bJl.prototype={
$1(d){var w=this.a
w.m(new C.bJe(this.b,d))
this.c.$1(new C.bJf())
w.a.toString},
$S:6}
C.bJe.prototype={
$0(){return this.a.ch=A.j.E(this.b,1,5.2)},
$S:0}
C.bJf.prototype={
$0(){},
$S:0}
C.bJm.prototype={
$2(d,e){var w=this,v=null,u=Math.abs(w.a.ch-e)<0.05,t=u?w.c.j(0.28):A.c.j(0.06),s=B.n(14),r=u?w.c:A.bz
r=B.L(r,A.r,u?2:1)
return B.E(B.aA(v,B.cT(v,B.at(B.ev(A.A,B.d(d,v,v,v,v,v,v,B.l(v,v,u?w.c:A.ab,v,v,v,v,v,v,v,v,14,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.f,A.e_),v,v,v),v,v,A.b4,new B.o(t,v,r,s,v,v,A.n),A.fZ,v,v,v,A.jn,A.qv,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.bJj(w.b,e),v,v,v,v,v,v,!1,A.a4),1)},
$S:778}
C.bJj.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bJg.prototype={
$0(){return this.a.$1(this.b.ch-0.4)},
$S:0}
C.bJh.prototype={
$0(){return this.a.$1(this.b.ch+0.4)},
$S:0}
C.bJi.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.bJI.prototype={
$2(d,e){var w
if(d==="short"){G.dF(1800,"",120,0,0.55,"noise")
G.dF(200,"",160,2.2,0.4,"saw")
B.fL()
w=this.a
if(w.c!=null)w.af7("Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the \u2212, or add a fuse.")}if(d==="overload"){G.dF(260,"",220,-0.6,0.35,"saw")
w=this.a
if(w.c!=null)w.af7("\u26a0 Overloaded! The "+$.qy().h(0,e.b).b+" can only give about "+A.j.ad(w.a.c.Af(e),2)+" amps but your gadgets are asking for "+A.j.ad(e.cx,2)+" amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.")}if(d==="burn"){w=this.a
if(w.c!=null)w.af7("Burnt out! "+e.ay)
G.dF(140,"",320,0,0.6,"noise")
G.dF(900,"",160,1.5,0.35,"square")}},
$S:z+42}
C.bJJ.prototype={
$0(){},
$S:0}
C.bIS.prototype={
$0(){},
$S:0}
C.bJK.prototype={
$1(d){return Math.abs(d.c-this.a)<0.16&&Math.abs(d.d-this.b)<0.1},
$S:z+0}
C.bJH.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a,n=new B.av(e.b,e.d)
o.y=n
w=o.a.c
v=o.d
u=o.f
t=o.r
s=o.e
r=this.b
q=x.p
n=B.a([B.aA(A.c5,B.b4(p,p,p,new C.ajJ(w,v,u,t,s,r==null?A.jq:r,p),n),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bJB(o),new C.bJC(o),new C.bJD(o),p,p,p,p,p,p,p,p,p,p,new C.bJE(o),p,p,p,!1,A.a4)],q)
if(o.a.c.a.length===0)n.push(D.bbL)
w=o.Q
if(w!=null){v=B.n(14)
u=B.L(A.cJ,A.r,1)
n.push(B.ao(p,B.aA(p,B.q(p,B.A(B.a([D.fBE,B.E(B.d(w,p,p,p,p,p,p,D.ftt,p,p,p),1)],q),A.E,p,A.e,A.i,0,p,p),A.f,p,p,new B.o(D.bhO,p,u,v,p,p,A.n),p,p,p,p,A.nA,p,p,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.bJF(o),p,p,p,p,p,p,!1,A.a4),p,p,10,10,8,p))}if(o.e!=null)n.push(B.ao(8,o.b0Q(B.A(B.a([D.bIU,new E.fB(A.CD,"Cut wire",new C.bJG(o),A.c_,p)],q),A.m,p,A.e,A.i,0,p,p)),p,p,12,12,p,p))
else{w=this.c
if(w!=null)n.push(B.ao(8,o.clE(w),p,p,10,10,p,p))}return B.jk(new B.an(A.a0,p,A.b2,A.t,n,p),A.t,p)},
$S:323}
C.bJC.prototype={
$1(d){var w,v,u,t=this.a,s=d.b,r=t.ba0(s)
if(r!=null){t.m(new C.bJz(t,r,d))
return}w=t.b3E(s)
if(w!=null){t.w=w
v=w.c
u=t.y
t.x=new B.p(v*u.a,w.d*u.b).aK(0,s)
t.m(new C.bJA(t,w))}},
$S:48}
C.bJz.prototype={
$0(){var w=this.a
w.f=this.b
w.r=this.c.b},
$S:0}
C.bJA.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.bJD.prototype={
$1(d){var w=this.a
if(w.f!=null)w.m(new C.bJx(w,d))
else if(w.w!=null)w.m(new C.bJy(w,d.b.a5(0,w.x)))},
$S:19}
C.bJx.prototype={
$0(){return this.a.r=this.b.b},
$S:0}
C.bJy.prototype={
$0(){var w,v=this.a,u=v.w
u.toString
w=this.b
u.c=A.j.E(w.a/v.y.a,0.14,0.86)
u=v.w
u.toString
u.d=A.j.E(w.b/v.y.b,0.08,0.92)},
$S:0}
C.bJB.prototype={
$1(d){var w,v,u,t=this.a
if(t.f!=null&&t.r!=null){w=t.r
w.toString
v=t.ba0(w)
if(v!=null&&v.a!==t.f.a){w=t.a.c
u=t.f
if(w.alV(u.a,u.b,v.a,v.b)!=null)G.dF(1500,"",40,0,0.22,"square")}}t.w=t.r=t.f=null
t.af5()},
$S:38}
C.bJE.prototype={
$1(d){var w=this.a,v=d.b,u=w.b3E(v)
if(u!=null){w.m(new C.bJv(w,u))
if(D.mr.ao(0,u.b))w.cwh(u)
w.a.toString
return}w.m(new C.bJw(w,w.cJ7(v)))},
$S:71}
C.bJv.prototype={
$0(){var w,v=this.a,u=v.d=this.b
v.e=null
v=u.b
if(v==="switch"){w=!u.w
u.w=w
G.dF(w?1700:1100,"",30,0,0.45,"noise")}if(v==="crank"){u.f=Math.min(1,u.f+0.35)
G.dF(200,"",70,0,0.2,"saw")}},
$S:0}
C.bJw.prototype={
$0(){var w=this.a
w.e=this.b
w.d=null},
$S:0}
C.bJF.prototype={
$0(){var w=this.a
return w.m(new C.bJu(w))},
$S:0}
C.bJu.prototype={
$0(){return this.a.Q=null},
$S:0}
C.bJG.prototype={
$0(){var w=this.a
A.d.W(w.a.c.b,w.e)
w.e=null
G.dF(300,"",50,0,0.35,"noise")
w.af5()},
$S:0}
C.bIT.prototype={
$0(){return this.a.bsh(this.b)},
$S:0}
C.bJb.prototype={
$5$max$min(d,e,f,g,h){var w=null
return B.A(B.a([B.d(d,w,w,w,w,w,w,D.fnB,w,w,w),B.E(B.kT(this.b.d,w,w,g,h,new C.bJd(this.a,f),A.j.E(e,h,g)),1)],x.p),A.m,w,A.e,A.i,0,w,w)},
$3(d,e,f){return this.$5$max$min(d,e,f,1,0)},
$S:1910}
C.bJd.prototype={
$1(d){var w=this.a
w.m(new C.bJc(this.b,d))
w.a.toString},
$S:6}
C.bJc.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.bIZ.prototype={
$0(){var w=this.a
w.a.c.W(0,this.b)
w.d=null
G.dF(260,"",70,0,0.35,"noise")
w.af5()},
$S:0}
C.bJ_.prototype={
$0(){var w=this.a
return w.m(new C.bIY(w))},
$S:0}
C.bIY.prototype={
$0(){return this.a.d=null},
$S:0}
C.bJ0.prototype={
$0(){this.a.m(new C.bIX(this.b,this.c))
G.dF(900,"",40,0,0.3,"noise")},
$S:0}
C.bIX.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.bJ3.prototype={
$0(){return this.a.b2Y(this.b)},
$S:0}
C.bJ4.prototype={
$0(){return this.a.a0r(this.b)},
$S:0}
C.bJ5.prototype={
$0(){return this.a.a24(this.b)},
$S:0}
C.bJ6.prototype={
$0(){var w=this.a
w.m(new C.bIW(this.b,this.c))
w.a.toString},
$S:0}
C.bIW.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.bJ7.prototype={
$0(){var w=this.a
w.m(new C.bIV(this.b,this.c))
w.a.toString},
$S:0}
C.bIV.prototype={
$0(){var w=this.a,v=this.b
w.e=v
w.as=v===1.5?0:1},
$S:0}
C.bJ8.prototype={
$0(){var w=this.a
w.m(new C.bIU(this.b,this.c))
w.a.toString},
$S:0}
C.bIU.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.bJ9.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJa.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJ1.prototype={
$1(d){return this.a.f=d},
$S:6}
C.bJ2.prototype={
$1(d){return this.a.f=d},
$S:6}
C.frd.prototype={
$1(d){return d.aIk("bulb")},
$S:z+2}
C.fre.prototype={
$1(d){return d.qb(0,"switch")&&d.aIk("bulb")},
$S:z+2}
C.frf.prototype={
$1(d){return A.d.aW(d.a,new C.fr0())},
$S:z+2}
C.fr0.prototype={
$1(d){return d.b==="motor"&&d.fx>0.3},
$S:z+0}
C.frg.prototype={
$1(d){return d.qb(0,"resistor")&&A.d.aW(d.a,new C.fr_())},
$S:z+2}
C.fr_.prototype={
$1(d){return d.b==="led"&&d.fx>0.3&&!d.x},
$S:z+0}
C.frh.prototype={
$1(d){return!d.qb(0,"battery")&&d.aIk("bulb")},
$S:z+2}
C.fr4.prototype={
$1(d){return A.d.aW(d.a,new C.fqZ())},
$S:z+2}
C.fqZ.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fr5.prototype={
$1(d){return A.d.aW(d.a,new C.fqY())},
$S:z+2}
C.fqY.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fr6.prototype={
$1(d){return A.d.aW(d.a,new C.fqX())},
$S:z+2}
C.fqX.prototype={
$1(d){return d.b==="battery"&&d.e===1.5&&d.as>0.95},
$S:z+0}
C.fr7.prototype={
$1(d){var w=d.a
return A.d.aW(w,new C.fqV())&&A.d.aW(w,new C.fqW())&&d.qb(0,"buck")},
$S:z+2}
C.fqV.prototype={
$1(d){return d.b==="tv"&&d.fx>0},
$S:z+0}
C.fqW.prototype={
$1(d){return d.b==="phone"&&d.fx>0},
$S:z+0}
C.fr8.prototype={
$1(d){var w=d.a
return A.d.aW(w,new C.fqT())&&A.d.aW(w,new C.fqU())},
$S:z+2}
C.fqT.prototype={
$1(d){return d.b==="diode"&&d.fx>0},
$S:z+0}
C.fqU.prototype={
$1(d){return d.b==="radio"&&d.fx>0},
$S:z+0}
C.fr9.prototype={
$1(d){return A.d.aW(d.a,new C.fqS())},
$S:z+2}
C.fqS.prototype={
$1(d){return d.b==="heater"&&d.fx>0.5},
$S:z+0}
C.e_Z.prototype={
$0(){var w=this.a,v=this.b
w.f=v.a
w=w.r
w.a8(0)
w.v(0,v.b)},
$S:0}
C.e07.prototype={
$1(d){var w=this.a.d
return w.aII(d)&&w.tM(d)},
$S:z+0}
C.e08.prototype={
$1(d){return d.x},
$S:z+0}
C.e09.prototype={
$0(){var w=this,v=w.a
v.x=w.b
v.y=w.c
v.z=w.d},
$S:0}
C.e0a.prototype={
$0(){},
$S:0}
C.e_Y.prototype={
$1(d){var w,v,u,t,s,r,q=null,p=B.n(22),o=x.p,n=B.a([D.fT9,A.aw,D.fDt,A.X],o)
for(w=this.a,v=0;v<19;++v){u=D.RN[v]
t=A.c.j(0.06)
s=new B.aP(14,14)
r=new B.ay(A.bz,1,A.r,-1)
n.push(B.aA(q,B.q(q,B.x(B.a([B.d(u.a,q,q,q,q,q,q,A.ix,q,q,q),A.bG,B.d(u.b,q,3,A.a2,q,q,q,D.fud,q,q,q)],o),A.E,q,A.e,A.i,0,A.p),A.f,q,q,new B.o(t,q,new B.bH(r,r,r,r),new B.bg(s,s,s,s),q,q,A.n),q,q,q,A.cw,A.bh,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.e_X(w,d,u),q,q,q,q,q,q,!1,A.a4))}return B.eR(q,F.nr,new B.D(A.bR,new B.a5(340,q,B.cl(n,q,q,q,q,q,A.ah,!0),q),q),q,q,q,q,A.da,q,new B.b9(p,A.a1),q)},
$S:49}
C.e_X.prototype={
$0(){B.a6(this.b,!1).O(null)
var w=this.a
w.m(new C.e_W(w,this.c))
G.dF(800,"",120,-0.5,0.3,"square")},
$S:0}
C.e_W.prototype={
$0(){var w=this.a.d
this.b.B(w)
w.bkX()},
$S:0}
C.e_U.prototype={
$1(d){return new C.Wx(this.a.d,null)},
$S:z+44}
C.e_V.prototype={
$0(){},
$S:0}
C.e06.prototype={
$1(d){return new B.e0(new C.e05(this.a),null)},
$S:20}
C.e05.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=null,l=this.a,k=l.f,j=$.aiS(),i=k<11?j[k]:m,h=i==null,g=!h&&l.r.q(0,k),f=g?A.b9:A.aJ
k=B.aH(d,m,x.l).w
w=l.r
v=x.p
u=B.a([B.A(B.a([D.fQj,A.b3,B.d(""+w.a+" of 11 done",m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,12.5,m,m,A.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m)],v),A.m,m,A.e,A.i,0,m,m),A.Q,B.bx(B.n(4),B.kl(A.bz,m,m,5,m,w.a/11,new B.lJ(f,x.c)),A.aq),A.af],v)
if(h)u.push(D.fGD)
else{h=f.j(0.1)
t=B.n(14)
s=B.L(f.j(0.5),A.r,1)
r=g?"\u2705":"\ud83c\udfaf"
r=B.d(r+" Now: "+i.a,m,m,m,m,m,m,Af.Kv,m,m,m)
q=B.d(g?"Well done! You did it.":i.b,m,m,m,m,m,m,I.EH,m,m,m)
p=g?"Next challenge \u25b6":"Skip this one"
u.push(B.q(m,B.x(B.a([r,A.aw,q,new B.bL(A.a9,m,m,B.bM(!1,B.d(p,m,m,m,m,m,m,B.l(m,m,f,m,m,m,m,m,m,m,m,m,m,m,A.I,m,m,!0,m,m,m,m,m,m,m,m),m,m,m),m,m,!0,m,m,m,new C.e03(l,e),m,m),m)],v),A.E,m,A.e,A.i,0,A.p),A.f,m,m,new B.o(h,m,s,t,m,m,A.n),m,m,m,m,A.bh,m,m,m))}u.push(A.X)
for(o=0;o<11;++o){h=o===l.f?A.c.j(0.09):A.c.j(0.04)
t=new B.aP(12,12)
n=new B.ay(o===l.f?f.j(0.6):A.dr,1,A.r,-1)
if(w.q(0,o))s="\u2705"
else s=o===l.f?"\ud83c\udfaf":"\u2b1c"
s=B.d(s,m,m,m,m,m,m,A.aaS,m,m,m)
r=j[o]
q=w.q(0,o)?A.aD:A.c
u.push(B.aA(m,B.q(m,new B.c6(A.aL,A.e,A.i,A.m,m,A.p,m,0,B.a([s,A.at,new B.by(1,A.bb,B.d(r.a,m,m,m,m,m,m,new B.G(!0,q,m,m,m,m,13,A.I,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m),m)],v),m),A.f,m,m,new B.o(h,m,new B.bH(n,n,n,n),new B.bg(t,t,t,t),m,m,A.n),m,m,m,A.eL,A.nA,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.e04(l,o,e),m,m,m,m,m,m,!1,A.a4))}return B.bm(!0,new B.cR(new B.aY(0,1/0,0,k.a.b*0.75),B.cl(u,m,m,A0.yF,m,m,A.ah,!0),m),!0,!1,A.ag,!0,!0)},
$S:87}
C.e03.prototype={
$0(){var w=this.a
w.m(new C.e01(w))
this.b.$1(new C.e02())
w.Ft()},
$S:0}
C.e01.prototype={
$0(){var w=this.a
$.aiS()
return w.f=Math.min(11,w.f+1)},
$S:0}
C.e02.prototype={
$0(){},
$S:0}
C.e04.prototype={
$0(){var w=this.a
w.m(new C.e0_(w,this.b))
this.c.$1(new C.e00())
w.Ft()},
$S:0}
C.e0_.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.e00.prototype={
$0(){},
$S:0}
C.e0c.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.e0d.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.m8("construction",""),$async$$0)
case 3:if(t.a.c==null){w=1
break}w=4
return B.b(B.a6(t.b,!1).cd(B.eb(new C.e0b(),!1,null,x.H)),$async$$0)
case 4:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.e0b.prototype={
$1(d){B.lk("construction")
return Ak.hSi()},
$S:z+45}
C.e0e.prototype={
$0(){return E.hDM(this.a,"ELECTRONICS LAB",this.b,A.aJ)},
$S:0}
C.e0f.prototype={
$0(){var w=this.a
return w.m(w.d.gd_X())},
$S:0}
C.e0g.prototype={
$0(){var w=this.a,v=w.d
w.m(v.gtc(v))
w.Ft()},
$S:0}
C.cKH.prototype={
$2(d,e){var w=null,v=this.a.gayQ().x
v===$&&B.c()
return B.b4(w,w,w,new C.baR(v,w),A.ay)},
$S:59}
C.cKG.prototype={
$3(d,e,f){var w=new B.aF($.S().r,A.ai,null,null,B.a([],x.v)),v=d.a,u=d.b,t=u-e
w.D(new B.aZ(v,t))
w.D(new B.c8(v,u,v+e,u))
w.D(new B.c8(v,u,v,u+e))
w.D(new B.c8(v,u,v-e,u))
w.D(new B.c8(v,u,v,t))
w.D(new B.bv())
t=B.J()
t.r=A.c.j(f).gp(0)
this.a.af(w,t)},
$S:459}
C.fZr.prototype={
$3(d,e,f){return new C.VQ(this.a,this.b,null)},
$C:"$3",
$R:3,
$S:z+46}
C.fZs.prototype={
$4(d,e,f,g){var w=x.Y
return new B.d0(e,!1,B.it(A.A,g,null,new B.bf(B.cJ(A.cx,e,null),new B.bq(0.85,1,w),w.k("bf<bN.T>"))),null)},
$C:"$4",
$R:4,
$S:34}
C.dX8.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.dX7.prototype={
$2(d,e){var w,v,u,t=this,s=null,r=B.n(t.b-5),q=t.a,p=q.e,o=t.c,n=p==null?q.c1n(o):q.bEB(o,p),m=x.p
p=B.a([B.p4(new B.mH(n,new B.bP(p,x.bz)),A.ph,B.qu(),A.b4,A.b4,new C.dX5())],m)
n=t.d
if(n){w=A.j.F(q.gSz(),12)<4
v=w?150:96
u=B.n(16)
m=B.a([A.at],m)
if(w)m.push(D.bIG)
else m.push(A.b3)
m.push(B.q(s,s,A.f,s,s,new B.o(w?A.b9:A.au,s,s,s,s,s,A.a7),s,9,s,s,s,s,s,9))
m.push(A.at)
p.push(B.ao(s,B.at(B.cT(s,B.A(m,A.m,s,A.e,A.i,0,s,s),s,s,A.ep,new B.o(A.w,s,s,u,s,s,A.n),A.mQ,s,28,s,s,s,s,s,v),s,s,s),s,s,0,0,10,s))}o=o.b
if(o===D.As)p.push(B.ao(s,B.at(B.q(s,s,A.f,s,s,A.LJ,s,11,s,s,s,s,s,11),s,s,s),s,s,0,0,10,s))
if(o===D.En)p.push(B.ao(s,B.q(s,s,A.f,s,s,A.LJ,s,9,s,s,s,s,s,9),s,s,s,22,10,s))
if(q.e!=null||n)p.push(B.ao(6,B.aA(s,B.at(B.q(s,s,A.f,s,s,new B.o(A.c.j(0.75),s,s,B.n(3),s,s,A.n),s,5,s,s,s,s,s,120),s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.dX6(q),s,s,s,s,s,s,!1,A.a4),s,s,0,0,s,s))
return B.bx(r,new B.an(A.a0,s,A.b2,A.t,p,s),A.aq)},
$S:290}
C.dX5.prototype={
$2(d,e){var w=x.Y
return new B.d0(e,!1,B.it(A.A,d,null,new B.bf(e,new B.bq(0.92,1,w),w.k("bf<bN.T>"))),null)},
$S:474}
C.dX6.prototype={
$0(){var w=this.a
return w.m(new C.dX4(w))},
$S:0}
C.dX4.prototype={
$0(){return this.a.e=null},
$S:0}
C.dX3.prototype={
$0(){var w=this.a
return w.m(new C.dX2(w,this.b))},
$S:0}
C.dX2.prototype={
$0(){return this.a.e=A.d.cq(F.kv,this.b)},
$S:0}
C.dX1.prototype={
$0(){var w=this.a
return w.m(new C.dX0(w))},
$S:0}
C.dX0.prototype={
$0(){return this.a.e=0},
$S:0}
C.dWX.prototype={
$0(){var w=this.a
return w.m(new C.dWW(w))},
$S:0}
C.dWW.prototype={
$0(){return this.a.e=null},
$S:0}
C.dX_.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.b,n=B.n(o?20:8),m=A.w.j(0.55),l=x.p
m=B.q(p,B.A(B.a([D.fYY,A.at,B.E(B.d(o?"Navigation   Media   Climate":"File   Edit   View   Window   Help",p,1,A.eO,p,p,p,F.aW5,p,p,p),1),B.d(A.a.b_(A.o.u(B.dg(new B.V(Date.now(),0,!1))),2,"0")+":"+A.a.b_(A.o.u(B.fP(new B.V(Date.now(),0,!1))),2,"0"),p,p,p,p,p,p,A.r7,p,p,p)],l),A.m,p,A.e,A.i,0,p,p),A.f,m,p,p,p,24,p,p,A.kr,p,p,p)
w=this.a
v=B.a([B.b4(p,p,p,new C.bxr(w.gSz(),this.c.d,p),A.ay)],l)
o=w.e
if(o!=null){u=B.n(10)
t=B.L(A.aV,A.r,1)
s=B.n(10)
o=B.q(p,B.A(B.a([B.aA(p,B.q(p,p,A.f,p,p,A.aec,p,12,p,p,p,p,p,12),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.dWZ(w),p,p,p,p,p,p,!1,A.a4),A.e2,B.q(p,p,A.f,p,p,A.aei,p,12,p,p,p,p,p,12),A.e2,B.q(p,p,A.f,p,p,D.b72,p,12,p,p,p,p,p,12),A.at,B.E(B.d(F.kv[o].a,p,1,A.a2,p,p,p,A.aaM,p,p,p),1)],l),A.m,p,A.e,A.i,0,p,p),A.f,A.cs,p,p,p,24,p,p,A.fG,p,p,p)
r=w.e
r.toString
v.push(B.bR(0,new B.D(D.bFa,B.q(p,B.bx(s,B.x(B.a([o,B.E(B.b4(p,p,p,new C.afw(r,w.gSz(),p),A.fJ),1)],l),A.m,p,A.e,A.i,0,A.p),A.aq),A.f,p,p,new B.o(A.w,p,t,u,D.dtW,p,A.n),p,p,p,p,p,p,p,p),p),0,0,0))}o=A.c.j(0.16)
u=B.n(18)
t=B.L(A.aV,A.r,1)
s=B.a([],l)
for(q=0;q<8;++q)s.push(new B.D(A.jn,w.awL(F.kv[q],34,!1),p))
v.push(B.ao(8,B.at(B.q(p,B.A(s,A.m,p,A.e,A.P,0,p,p),A.f,p,p,new B.o(o,p,t,u,p,p,A.n),p,p,p,p,A.lK,p,p,p),p,p,p),p,p,0,0,p,p))
return B.bx(n,B.q(p,B.x(B.a([m,B.E(new B.an(A.a0,p,A.b2,A.t,v,p),1)],l),A.m,p,A.e,A.i,0,A.p),A.f,X.Zo,p,p,p,p,p,p,p,p,p,p),A.aq)},
$S:290}
C.dWZ.prototype={
$0(){var w=this.a
return w.m(new C.dWY(w))},
$S:0}
C.dWY.prototype={
$0(){return this.a.e=null},
$S:0}
C.frI.prototype={
$0(){return D.eg3},
$S:z+47}
C.frJ.prototype={
$0(){return D.dOf},
$S:z+48}
C.frK.prototype={
$0(){return D.dKM},
$S:z+49}
C.frL.prototype={
$0(){return D.dND},
$S:z+50}
C.frM.prototype={
$0(){return D.dSH},
$S:z+51}
C.frN.prototype={
$0(){return D.ebQ},
$S:z+52}
C.frO.prototype={
$0(){return D.ee_},
$S:z+53}
C.frP.prototype={
$0(){return D.dS0},
$S:z+36}
C.cm_.prototype={
$0(){return B.a6(this.a,!1).hU()},
$S:0}
C.cm0.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=(e.b-14)/2,i=x.p,h=B.a([],i)
for(w=$.hHA(),v=j*0.95,u=x.O,t=x.V,s=0;s<8;++s){r=w[s]
q=new B.aP(26,26)
p=r.e
o=B.a([r.d,p],u)
p=B.a([new B.ac(0,A.G,p.j(0.4),A.du,16)],t)
n=B.d(r.c,k,k,k,k,k,k,Aj.Kt,k,k,k)
m=B.d(r.a,k,k,k,k,k,k,D.fz4,k,k,k)
l=A.c.j(0.85)
h.push(B.aA(k,B.q(k,new B.an(A.a0,k,A.ad,A.t,B.a([new B.cL(k,-6,-6,k,k,k,n,k),new B.bL(A.lz,k,k,B.x(B.a([m,A.cU,B.d(r.b,k,k,k,k,k,k,new B.G(!0,l,k,k,k,k,12,A.a8,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k)],i),A.E,k,A.e,A.P,0,A.p),k)],i),k),A.f,k,k,new B.o(k,k,k,new B.bg(q,q,q,q),p,new B.a9(A.aA,A.aF,A.x,o,k,k),A.n),k,v,k,k,A.bE,k,k,j),A.y,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new C.clZ(d,r),k,k,k,k,k,k,!1,A.a4))}return B.bW(A.bH,h,A.bt,k,14,14)},
$S:169}
C.clZ.prototype={
$0(){return B.a6(this.a,!1).cd(B.eb(new C.clY(this.b),!1,null,x.H))},
$S:0}
C.clY.prototype={
$1(d){return this.a.f.$0()},
$S:39}
C.eTq.prototype={
$0(){var w=this.a
return w.w=w.d[w.b71(w.f)]},
$S:0}
C.eTm.prototype={
$0(){var w=this.a
w.w=""
w.r=9+A.cM.ai()*7},
$S:0}
C.eTl.prototype={
$0(){var w=this.a
w.d.push(this.b)
w.e.bP(0,A.cd)
w.w=""},
$S:0}
C.eTo.prototype={
$0(){var w=this.a
return w.m(new C.eTn(w,this.b))},
$S:0}
C.eTn.prototype={
$0(){var w=this.a.d
if(w.length>2)A.d.cA(w,this.b)},
$S:0}
C.eTp.prototype={
$1(d){return this.a.b1m(0)},
$S:2}
C.e2Y.prototype={
$0(){return C.JC("bell",B.a([0,5,9,12],x.t),1500,0.6)},
$S:0}
C.e2Z.prototype={
$0(){},
$S:0}
C.e2T.prototype={
$0(){var w=this.a,v=this.b
w.d=v
w.e=v*60
w.f=!1},
$S:0}
C.e2V.prototype={
$0(){return this.a.b1o(this.b)},
$S:0}
C.e2W.prototype={
$0(){var w=this.a
return w.m(new C.e2U(w))},
$S:0}
C.e2U.prototype={
$0(){var w=this.a
if(w.e<=0)w.e=w.d*60
w.f=!w.f},
$S:0}
C.e2X.prototype={
$0(){var w=this.a
return w.b1o(w.d)},
$S:0}
C.dOF.prototype={
$2(d,e){return d+e},
$S:81}
C.dOG.prototype={
$0(){},
$S:0}
C.dOA.prototype={
$2(d,e){return d+e},
$S:81}
C.dOD.prototype={
$0(){var w=this.a
return w.m(new C.dOC(w,this.b))},
$S:0}
C.dOC.prototype={
$0(){var w=this.a
w.d=this.b
w.f=0
w.r=-1},
$S:0}
C.dOE.prototype={
$0(){var w=this.a
return w.m(new C.dOB(w))},
$S:0}
C.dOB.prototype={
$0(){var w=this.a
w.e=!w.e
w.f=0
w.r=-1
w.w=0},
$S:0}
C.e_t.prototype={
$0(){return E.uy(this.b,this.a.d,"drawing")},
$S:0}
C.e_u.prototype={
$1(d){var w=this.a
return w.m(new C.e_s(w,d))},
$S:48}
C.e_s.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aJJ(u,v,t))},
$S:0}
C.e_v.prototype={
$1(d){var w=this.a
return w.m(new C.e_r(w,d))},
$S:19}
C.e_r.prototype={
$0(){return A.d.gal(this.a.e).c.push(this.b.b)},
$S:0}
C.e_w.prototype={
$1(d){var w=this.a
return w.m(new C.e_q(w,d))},
$S:23}
C.e_q.prototype={
$0(){var w=this.a,v=w.w,u=v?w.x:w.f,t=w.r
v=v?t*3:t
t=B.a([],x.g)
t.push(this.b.b)
return w.e.push(new C.aJJ(u,v,t))},
$S:0}
C.e_x.prototype={
$0(){var w=this.a
return w.m(new C.e_p(w,this.b))},
$S:0}
C.e_p.prototype={
$0(){var w=this.a
w.f=this.b
w.w=!1},
$S:0}
C.e_y.prototype={
$1(d){var w=this.a
return w.m(new C.e_o(w,d))},
$S:6}
C.e_o.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.e_z.prototype={
$0(){var w=this.a
return w.m(new C.e_n(w))},
$S:0}
C.e_n.prototype={
$0(){var w=this.a
return w.w=!w.w},
$S:0}
C.e_A.prototype={
$0(){var w=this.a
return w.m(new C.e_m(w))},
$S:0}
C.e_m.prototype={
$0(){var w=this.a.e
if(w.length!==0)w.pop()},
$S:0}
C.e_B.prototype={
$0(){var w=this.a
return w.m(A.d.gtc(w.e))},
$S:0}
C.e_C.prototype={
$0(){var w=this.a
return w.m(new C.e_l(w))},
$S:0}
C.e_l.prototype={
$0(){var w=this.a
w.x=D.aA0[A.o.F(A.d.cq(D.aA0,w.x)+1,4)]},
$S:0}
C.eqh.prototype={
$0(){return this.a.f.J(0,this.b)},
$S:0}
C.eqi.prototype={
$0(){var w,v,u=this.a
if(u.c==null)return
w=x.t
C.JC("bell",B.a([0,4,7],w),500,0.45)
u.m(new C.eqg(u,this.b,this.c))
v=u.r.a
u=u.e
u===$&&B.c()
if(v===u.length)C.JC("bell",B.a([0,4,7,12,16],w),1500,0.6)},
$S:12}
C.eqg.prototype={
$0(){var w=this.a
w.r.v(0,B.a([this.b,this.c],x.t))
w.f.a8(0)},
$S:0}
C.eqj.prototype={
$0(){var w=this.a
if(w.c==null)return
w.m(new C.eqf(w))},
$S:12}
C.eqf.prototype={
$0(){var w=this.a
w.f.a8(0)
w.x=!1},
$S:0}
C.eqn.prototype={
$2(d,e){var w=null,v=this.a,u=v.f.q(0,e)||v.r.q(0,e)?1:0
return B.aA(w,B.lz(new C.eql(v,e),w,A.b4,A.ph,w,w,new B.bq(0,u,x.Y),x.i),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eqm(v,e),w,w,w,w,w,w,!1,A.a4)},
$S:84}
C.eqm.prototype={
$0(){return this.a.cd0(this.b)},
$S:0}
C.eql.prototype={
$3(d,e,f){var w,v,u,t,s,r,q=this,p=null,o=e>0.5,n=B.dr(),m=n.a
m.$flags&2&&B.aj(m)
m[11]=0.001
n.fL(3.141592653589793*e)
m=B.n(16)
w=o?p:D.c8b
if(o)v=q.a.r.q(0,q.b)?A.b9.j(0.25):A.c.j(0.12)
else v=p
u=q.a
t=q.b
s=B.L(u.r.q(0,t)?A.b9:A.aV,A.r,1)
if(o){r=B.dr()
r.fL(3.141592653589793)
u=u.e
u===$&&B.c()
r=B.fw(A.A,B.d(u[t],p,p,p,p,p,p,H.aaX,p,p,p),p,r,!0)
u=r}else u=D.fRR
return B.fw(A.A,B.q(A.A,u,A.f,p,p,new B.o(v,p,s,m,p,w,A.n),p,p,p,p,p,p,p,p),p,n,!0)},
$S:112}
C.eqo.prototype={
$0(){var w=this.a
return w.m(new C.eqk(w,this.b))},
$S:0}
C.eqk.prototype={
$0(){var w=this.a
w.d=this.b.a
w.au5()},
$S:0}
C.eqp.prototype={
$0(){var w=this.a
return w.m(w.gbNi())},
$S:0}
C.eB3.prototype={
$0(){var w=this.a
w.r=!0
w.y="Watch\u2026"},
$S:0}
C.eB4.prototype={
$0(){var w=this.a
w.r=!1
w.y="Your turn!"},
$S:0}
C.eB1.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eB2.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eB0(w))},
$S:12}
C.eB0.prototype={
$0(){return this.a.f=-1},
$S:0}
C.eB5.prototype={
$0(){var w,v,u=this.a
u.w=!1
w=u.x
v=u.d.length-1
u.x=Math.max(w,v)
u.y="Oops! You got "+v+". Press Start to try again."},
$S:0}
C.eB6.prototype={
$0(){var w=this.a
return w.y="Great! "+w.d.length+" in a row"},
$S:0}
C.eB7.prototype={
$0(){var w=this.a
if(w.c!=null&&w.w)w.b1n()},
$S:12}
C.eB8.prototype={
$0(){return this.a.cd6(this.b)},
$S:0}
C.eOV.prototype={
$1(d){return B.w(d.h(0,1))+","},
$S:60}
C.eP3.prototype={
$3$big(d,e,f){var w=null,v=B.E(B.d(d,w,1,A.a2,w,w,w,B.l(w,w,A.aS,w,w,w,w,w,w,w,w,f?16:14,w,w,A.R,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),1)
return new B.D(A.kV,B.A(B.a([v,A.ae,new B.dn(1,A.co,B.ev(A.A,B.d(e,w,w,w,w,w,w,B.l(w,w,A.c,w,w,w,w,w,w,w,w,f?30:18,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,A.e_),w)],x.p),A.m,w,A.e,A.i,0,w,w),w)},
$2(d,e){return this.$3$big(d,e,!1)},
$S:1911}
C.eP_.prototype={
$1(d){return this.a.m(new C.eOZ())},
$S:2}
C.eOZ.prototype={
$0(){},
$S:0}
C.eP0.prototype={
$0(){var w=this.a
return w.m(new C.eOY(w,this.b))},
$S:0}
C.eOY.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eP1.prototype={
$1(d){var w=this.a
return w.m(new C.eOX(w,d))},
$S:6}
C.eOX.prototype={
$0(){return this.a.f=A.j.V(this.b)},
$S:0}
C.eP2.prototype={
$0(){var w=this.a
return w.m(new C.eOW(w))},
$S:0}
C.eOW.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eoX.prototype={
$0(){},
$S:0}
C.eoY.prototype={
$0(){},
$S:0}
C.eoQ.prototype={
$0(){var w=this.a
return w.m(new C.eoP(w))},
$S:0}
C.eoP.prototype={
$0(){var w=this.a,v=w.f.length,u=w.e
if(v!==u)w.f=B.bZ(u,1,!1,x.S)
w.r=0.9
E.Xj("hat",0,0.6)},
$S:0}
C.eoR.prototype={
$0(){var w=this.a
return w.m(new C.eoO(w))},
$S:0}
C.eoO.prototype={
$0(){this.a.y=1.1
E.mm("bell",36,200,0.4)},
$S:0}
C.eoS.prototype={
$0(){var w=this.a
return w.m(new C.eoN(w))},
$S:0}
C.eoN.prototype={
$0(){var w=this.a,v=w.z,u=w.Q,t=Math.min(v,u)
u=t+w.at.aw(Math.max(v,u)-t+1)
w.as=u
E.mm("bell",12+A.o.F(u,12),500,0.5)},
$S:0}
C.eoT.prototype={
$0(){var w=this.a
return w.m(new C.eoM(w,this.b))},
$S:0}
C.eoM.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.eoU.prototype={
$1(d){var w=this.a
return w.m(new C.eoL(w,d))},
$S:6}
C.eoL.prototype={
$0(){var w,v,u,t=this.a,s=t.e=A.j.V(this.b),r=J.e2(s,x.S)
for(w=t.f,v=w.length,u=0;u<s;++u)r[u]=v>u?w[u]:1
t.f=r},
$S:0}
C.eoV.prototype={
$1(d){var w=this.a
return w.m(new C.eoK(w,d))},
$S:6}
C.eoK.prototype={
$0(){return this.a.z=A.j.V(this.b)},
$S:0}
C.eoW.prototype={
$1(d){var w=this.a
return w.m(new C.eoJ(w,d))},
$S:6}
C.eoJ.prototype={
$0(){return this.a.Q=A.j.V(this.b)},
$S:0}
C.clW.prototype={
$0(){var w=this
return E.mm(w.a,w.b,w.c,w.d)},
$S:1};(function aliases(){var w=C.aNN.prototype
w.bzy=w.t
w=C.aMS.prototype
w.byB=w.t
w=C.aMT.prototype
w.byC=w.t
w=C.aMX.prototype
w.byG=w.t
w=C.aOC.prototype
w.bAu=w.t
w=C.aNL.prototype
w.bzw=w.t
w=C.azc.prototype
w.bvC=w.t
w=C.azd.prototype
w.bvD=w.t
w=C.aLj.prototype
w.bwZ=w.t
w=C.aN5.prototype
w.byP=w.t
w=C.aMU.prototype
w.byD=w.t
w=C.aNc.prototype
w.byX=w.t
w=C.aNF.prototype
w.bzq=w.t
w=C.aO5.prototype
w.bzR=w.t})();(function installTearOffs(){var w=a._instance_0u,v=a._instance_1u,u=a._instance_1i,t=a._instance_0i,s=a.installInstanceTearOff
w(C.aFS.prototype,"gayd","c8t",1)
var r
v(r=C.aEl.prototype,"gchl","chm",22)
w(r,"gc92","b_Y",1)
w(C.aEn.prototype,"gcaK","caL",1)
u(C.aEE.prototype,"gcaR","caS",39)
w(r=C.aIS.prototype,"gcAP","cAQ",1)
w(r,"gcaT","aeW",1)
w(r,"gclO","clP",1)
w(r,"gcaQ","aeV",3)
w(r=C.aFR.prototype,"gbKr","aah",3)
w(r,"gcl4","b3u",1)
w(r,"gcoS","ahx",3)
t(r,"gcaV","aeX",3)
t(r=C.a5k.prototype,"gtc","a8",1)
v(r,"gcYC","aoD",0)
v(r,"gcV_","Me",0)
w(r,"gd_X","bkX",1)
s(C.ajJ.prototype,"gcbh",0,5,null,["$5"],["qR"],41,0,0)
w(r=C.aEQ.prototype,"gcbi","cbj",1)
w(r,"gcrH","ahT",3)
w(r,"gchB","agd",3)
w(r,"gcyQ","aj2",3)
w(r=C.aGj.prototype,"gcd1","cd2",1)
t(r,"gcd_","b1m",1)
w(C.aFD.prototype,"gbNi","au5",1)
t(C.aFY.prototype,"gcd3","cd4",1)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aE,[C.akV,C.GN,C.vf,C.aTR,C.a4b,C.bbX,C.c62,C.yB,C.CU,C.nD,C.bcI,C.B1,C.buU,C.qn,C.r5,C.CY,C.a_l,C.afD,C.a1A,C.D8,C.acy,C.acP,C.aeK,C.Gy,C.eh,C.tU,C.abd,C.ack,C.a5k,C.mS,C.bcJ,C.fQ,C.mo,C.bwd,C.aJJ])
u(B.ht,[C.fIM,C.fxG,C.fFb,C.fFc,C.fIJ,C.fIK,C.ei6,C.eip,C.exH,C.exe,C.exf,C.exg,C.exh,C.exi,C.exj,C.exk,C.exl,C.exc,C.exd,C.exb,C.exC,C.exD,C.exE,C.dOb,C.dOd,C.dOg,C.dOr,C.c63,C.c64,C.fr1,C.fr2,C.fr3,C.fra,C.frb,C.frc,C.dQd,C.dPV,C.dQe,C.dPQ,C.dPL,C.dPN,C.dPT,C.dQ5,C.dQ3,C.dQ4,C.dQ2,C.dQ_,C.dQ1,C.f7_,C.f6H,C.f6O,C.f6X,C.f6B,C.dqr,C.dqs,C.dqo,C.dqp,C.dqq,C.dqt,C.dqu,C.dqv,C.dqw,C.dqx,C.dqy,C.dqz,C.dqA,C.dqB,C.ewD,C.ewE,C.ewF,C.ewG,C.ewB,C.ewC,C.ex7,C.ewK,C.ewM,C.eww,C.ex3,C.ex1,C.ex2,C.ex0,C.ex_,C.ewy,C.bPn,C.bPy,C.bPt,C.bPz,C.bPB,C.bPo,C.bPm,C.bPG,C.bPu,C.bPx,C.bPw,C.bPv,C.bJL,C.fUz,C.fUC,C.fUA,C.bJs,C.bJn,C.bJl,C.bJK,C.bJC,C.bJD,C.bJB,C.bJE,C.bJb,C.bJd,C.bJ9,C.bJa,C.bJ1,C.bJ2,C.frd,C.fre,C.frf,C.fr0,C.frg,C.fr_,C.frh,C.fr4,C.fqZ,C.fr5,C.fqY,C.fr6,C.fqX,C.fr7,C.fqV,C.fqW,C.fr8,C.fqT,C.fqU,C.fr9,C.fqS,C.e07,C.e08,C.e_Y,C.e_U,C.e06,C.e0b,C.cKG,C.fZr,C.fZs,C.clY,C.eTp,C.e_u,C.e_v,C.e_w,C.e_y,C.eql,C.eOV,C.eP3,C.eP_,C.eP1,C.eoU,C.eoV,C.eoW])
u(B.ju,[C.fIL,C.eib,C.ei9,C.exn,C.exA,C.dPM,C.dQ8,C.dWd,C.f72,C.f73,C.f6G,C.f6T,C.f6U,C.f6P,C.f6V,C.f6A,C.ewz,C.ewA,C.ex6,C.ewZ,C.ewO,C.bPA,C.bPC,C.bPE,C.bPp,C.bPr,C.bJM,C.ct7,C.fUB,C.bJk,C.bJm,C.bJI,C.bJH,C.e05,C.cKH,C.dX7,C.dX5,C.dX_,C.cm0,C.dOF,C.dOA,C.eqn])
u(B.af,[C.Wx,C.WU,C.Vq,C.Vv,C.O5,C.aIR,C.WT,C.ajH,C.W6,C.ayT,C.VQ,C.Xq,C.We,C.Vr,C.W5,C.WO,C.WY,C.Xh,C.WN])
u(B.ah,[C.bm3,C.aNN,C.aMS,C.aMX,C.aEE,C.aOC,C.aNL,C.azc,C.bzp,C.aLj,C.aN5,C.aO5,C.aNc,C.aMU,C.blv,C.aFD,C.aFY,C.bmL,C.aNF])
u(B.iH,[C.ei4,C.ei5,C.eih,C.eii,C.eid,C.eic,C.eie,C.eia,C.eif,C.ei8,C.eig,C.ei7,C.eil,C.eik,C.eim,C.eij,C.ein,C.eio,C.eiq,C.exG,C.exI,C.exJ,C.exp,C.exo,C.exm,C.exv,C.exw,C.exs,C.exx,C.exr,C.exy,C.exz,C.exq,C.exB,C.exu,C.exF,C.ext,C.dOy,C.dOx,C.dOa,C.dOz,C.dOc,C.dOe,C.dOf,C.dOh,C.dO7,C.dO8,C.dO9,C.dOo,C.dOp,C.dOq,C.dOn,C.dOs,C.dOm,C.dOt,C.dOl,C.dOu,C.dOk,C.dOv,C.dOj,C.dOw,C.dOi,C.dPS,C.dPR,C.dPW,C.dPO,C.dPP,C.dPX,C.dPY,C.dPZ,C.dPU,C.dPK,C.dQ7,C.dQ6,C.dQ9,C.dQa,C.dQb,C.dQ0,C.dQc,C.cVi,C.dWb,C.dWa,C.dWc,C.frs,C.frt,C.fru,C.frv,C.frw,C.frx,C.fry,C.frz,C.frA,C.f71,C.f70,C.f6J,C.f6I,C.f6E,C.f6D,C.f6F,C.f6C,C.f6R,C.f6Q,C.f6S,C.f6K,C.f6W,C.f6N,C.f6Y,C.f6M,C.f6Z,C.f6L,C.ewI,C.ewx,C.ewH,C.ewt,C.ewJ,C.ewL,C.ewu,C.ewv,C.ex5,C.ex4,C.ewW,C.ewX,C.ewY,C.ewS,C.ewT,C.ewR,C.ewU,C.ewQ,C.ewV,C.ewP,C.ewN,C.dqn,C.bPD,C.bPF,C.bPq,C.bPs,C.bJp,C.bJq,C.bJo,C.bJr,C.bJt,C.bJe,C.bJf,C.bJj,C.bJg,C.bJh,C.bJi,C.bJJ,C.bIS,C.bJz,C.bJA,C.bJx,C.bJy,C.bJv,C.bJw,C.bJF,C.bJu,C.bJG,C.bIT,C.bJc,C.bIZ,C.bJ_,C.bIY,C.bJ0,C.bIX,C.bJ3,C.bJ4,C.bJ5,C.bJ6,C.bIW,C.bJ7,C.bIV,C.bJ8,C.bIU,C.e_Z,C.e09,C.e0a,C.e_X,C.e_W,C.e_V,C.e03,C.e01,C.e02,C.e04,C.e0_,C.e00,C.e0c,C.e0d,C.e0e,C.e0f,C.e0g,C.dX8,C.dX6,C.dX4,C.dX3,C.dX2,C.dX1,C.dX0,C.dWX,C.dWW,C.dWZ,C.dWY,C.frI,C.frJ,C.frK,C.frL,C.frM,C.frN,C.frO,C.frP,C.cm_,C.clZ,C.eTq,C.eTm,C.eTl,C.eTo,C.eTn,C.e2Y,C.e2Z,C.e2T,C.e2V,C.e2W,C.e2U,C.e2X,C.dOG,C.dOD,C.dOC,C.dOE,C.dOB,C.e_t,C.e_s,C.e_r,C.e_q,C.e_x,C.e_p,C.e_o,C.e_z,C.e_n,C.e_A,C.e_m,C.e_B,C.e_C,C.e_l,C.eqh,C.eqi,C.eqg,C.eqj,C.eqf,C.eqm,C.eqo,C.eqk,C.eqp,C.eB3,C.eB4,C.eB1,C.eB2,C.eB0,C.eB5,C.eB6,C.eB7,C.eB8,C.eOZ,C.eP0,C.eOY,C.eOX,C.eP2,C.eOW,C.eoX,C.eoY,C.eoQ,C.eoP,C.eoR,C.eoO,C.eoS,C.eoN,C.eoT,C.eoM,C.eoL,C.eoK,C.eoJ,C.clW])
t(C.bzC,C.aNN)
t(C.aFS,C.bzC)
u(B.mg,[C.bj0,C.bd0,C.buh,C.bbF,C.bsT,C.bsj,C.bcl,C.bsl,C.bwn,C.biZ,C.ajJ,C.baR,C.bxr,C.afw,C.bxD,C.bsk,C.bnx])
t(C.aMT,C.aMS)
t(C.aEl,C.aMT)
t(C.bzm,C.aMX)
t(C.aEn,C.bzm)
u(B.lB,[C.L6,C.a1n,C.K5])
u(B.ax,[C.bth,C.afP,C.aeH,C.QY,C.btN,C.a9b,C.bf7])
t(C.aIS,C.aOC)
t(C.biY,B.p7)
t(C.aFR,C.aNL)
t(C.azd,C.azc)
t(C.ajI,C.azd)
t(C.aEQ,C.bzp)
t(C.baS,C.aLj)
t(C.blt,C.aN5)
t(C.bzJ,C.aO5)
t(C.aGj,C.bzJ)
t(C.bzr,C.aNc)
t(C.blE,C.bzr)
t(C.bzl,C.aMU)
t(C.blf,C.bzl)
t(C.bzA,C.aNF)
t(C.bmf,C.bzA)
w(C.aNN,B.cc)
w(C.bzC,E.nB)
w(C.aMS,B.cc)
w(C.aMT,E.nB)
w(C.aMX,B.cc)
w(C.bzm,E.nB)
w(C.aOC,B.eO)
w(C.aNL,B.cc)
w(C.azc,B.cc)
w(C.azd,E.nB)
w(C.aLj,B.cc)
v(C.bzp,B.eC)
w(C.aN5,B.cc)
w(C.aMU,B.cc)
w(C.bzl,E.nB)
w(C.aNc,B.cc)
w(C.bzr,E.nB)
w(C.aNF,B.cc)
w(C.bzA,E.nB)
w(C.aO5,B.cc)
w(C.bzJ,E.nB)})()
B.j1(b.typeUniverse,JSON.parse('{"Wx":{"af":[],"v":[]},"bm3":{"ah":["Wx"]},"WU":{"af":[],"v":[]},"aFS":{"ah":["WU"]},"bj0":{"aC":[]},"Vq":{"af":[],"v":[]},"aEl":{"ah":["Vq"]},"Vv":{"af":[],"v":[]},"aEn":{"ah":["Vv"]},"bd0":{"aC":[]},"afP":{"ax":[],"v":[]},"aeH":{"ax":[],"v":[]},"aIR":{"af":[],"v":[]},"O5":{"af":[],"v":[]},"aEE":{"ah":["O5"]},"bth":{"ax":[],"v":[]},"QY":{"ax":[],"v":[]},"buh":{"aC":[]},"btN":{"ax":[],"v":[]},"bbF":{"aC":[]},"aIS":{"ah":["aIR"]},"bsT":{"aC":[]},"bsj":{"aC":[]},"bcl":{"aC":[]},"bsl":{"aC":[]},"bwn":{"aC":[]},"WT":{"af":[],"v":[]},"biY":{"aC":[]},"aFR":{"ah":["WT"]},"biZ":{"aC":[]},"ajJ":{"aC":[]},"ajH":{"af":[],"v":[]},"ajI":{"ah":["ajH"]},"W6":{"af":[],"v":[]},"ayT":{"af":[],"v":[]},"aEQ":{"ah":["W6"],"eC":[]},"baS":{"ah":["ayT"]},"baR":{"aC":[]},"VQ":{"af":[],"v":[]},"blt":{"ah":["VQ"]},"bxr":{"aC":[]},"afw":{"aC":[]},"a9b":{"ax":[],"v":[]},"Xq":{"af":[],"v":[]},"We":{"af":[],"v":[]},"Vr":{"af":[],"v":[]},"W5":{"af":[],"v":[]},"WO":{"af":[],"v":[]},"WY":{"af":[],"v":[]},"Xh":{"af":[],"v":[]},"WN":{"af":[],"v":[]},"aGj":{"ah":["Xq"]},"bxD":{"aC":[]},"blE":{"ah":["We"]},"bsk":{"aC":[]},"blf":{"ah":["Vr"]},"blv":{"ah":["W5"]},"bnx":{"aC":[]},"aFD":{"ah":["WO"]},"aFY":{"ah":["WY"]},"bmL":{"ah":["Xh"]},"bmf":{"ah":["WN"]},"bf7":{"ax":[],"v":[]}}'))
var y={d:'Honest note: no machine can make energy from nothing. A "free energy" or never-stopping machine does not exist, because energy can only be changed from one kind to another. But you CAN make electricity without a battery by catching energy that is already around you: sunlight, wind, moving water, or your own muscles. That is what this design does.',f:"free energy|free electric|perpetual|forever|infinite|unlimited|over.?unity|never.?(stop|end|run out)|no fuel|magnet motor"}
var x=(function rtii(){var w=B.as
return{c:w("lJ<u?>"),G:w("u"),J:w("bu<m,I>"),Q:w("df<m>"),Z:w("a0"),M:w("O<d9>"),R:w("O<SM>"),a:w("O<a4b>"),V:w("O<ac>"),O:w("O<u>"),k:w("O<V>"),D:w("O<aB<aE>>"),w:w("O<a0>"),E:w("O<ai<m>>"),b:w("O<ai<I>>"),U:w("O<ai<F?>>"),x:w("O<a8<m,aE>>"),g:w("O<p>"),C:w("O<tU>"),v:w("O<fT>"),F:w("O<+(m,m)>"),fT:w("O<+(I,v)>"),I:w("O<+(F,m)>"),u:w("O<+(F,F)>"),r:w("O<+(m,m,a0)>"),e:w("O<+(m,I,I,F)>"),o:w("O<+(m,F,m,F)>"),d:w("O<+(m,m,I,I,a8<m,I>)>"),_:w("O<vf>"),fQ:w("O<abd>"),s:w("O<m>"),cF:w("O<au>"),X:w("O<G7>"),p:w("O<v>"),bL:w("O<ack>"),fH:w("O<li>"),a_:w("O<acy>"),cB:w("O<nD>"),ba:w("O<acP>"),eW:w("O<CY>"),fY:w("O<a_l>"),ac:w("O<aeK>"),cd:w("O<D8>"),fr:w("O<afD>"),e4:w("O<a1A>"),au:w("O<aJJ>"),f7:w("O<P>"),n:w("O<I>"),t:w("O<F>"),dS:w("O<aC?>"),fs:w("O<tU?>"),bN:w("O<F?>"),q:w("cw<ajI>"),A:w("cw<ah<af>>"),bF:w("ai<u>"),gl:w("ai<V>"),ew:w("ai<aE>"),j:w("ai<@>"),P:w("a8<m,@>"),f:w("a8<@,@>"),bd:w("N<eh,m>"),fR:w("N<+(I,v),v>"),l:w("iB"),gA:w("zM"),gD:w("wh"),h:w("ct"),K:w("aE"),W:w("tU"),B:w("eh"),N:w("m"),bO:w("au"),Y:w("bq<I>"),gj:w("bP<m>"),bz:w("bP<F?>"),dg:w("e9<r5>"),m:w("bbX"),a2:w("CU"),f3:w("r5"),es:w("Gy"),gV:w("mu"),y:w("P"),i:w("I"),z:w("@"),S:w("F"),L:w("ai<@>?"),cK:w("aE?"),T:w("m?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b1L=new B.d9(0,0.1)
D.b3G=new C.aTR(0,0,0)
D.LE=new C.aTR(0,0.5,0)
D.b4g=new B.ay(A.b9,1,A.r,-1)
D.b5J=new B.aY(0,1/0,0,290)
D.b5Q=new B.aY(16,1/0,16,1/0)
D.b72=new B.o(A.bg,null,null,null,null,null,A.a7)
D.fn9=new B.G(!0,null,null,null,null,null,19,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h_n=new B.B("\u26a1",null,D.fn9,null,null,null,null,null,null,null,null,null)
D.bbB=new B.ce(A.A,null,null,D.h_n,null)
D.aVq=new B.G(!0,A.bV,null,null,null,null,null,null,null,null,null,null,1.5,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPQ=new B.B("Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.",null,D.aVq,null,A.K,null,null,null,null,null,null,null)
D.epD=new B.D(A.nD,D.fPQ,null)
D.bbL=new B.ce(A.A,null,null,D.epD,null)
D.fFH=new B.B("Tap a part below to put it on the board.\nDrag from the right dot of one part to another to connect them.",null,D.aVq,null,A.K,null,null,null,null,null,null,null)
D.eqv=new B.D(A.GR,D.fFH,null)
D.bcu=new B.ce(A.A,null,null,D.eqv,null)
D.afd=new B.u(1,0.054901960784313725,0.058823529411764705,0.0784313725490196,A.q)
D.bgg=new B.u(1,1,0.16470588235294117,0.10196078431372549,A.q)
D.bgx=new B.u(0.9333333333333333,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.bhO=new B.u(0.9490196078431372,0.2627450980392157,0.0784313725490196,0.027450980392156862,A.q)
D.bhU=new B.u(1,0.16470588235294117,0.16470588235294117,0.2,A.q)
D.big=new B.u(1,1,0.4196078431372549,0.4196078431372549,A.q)
D.bk8=new B.u(1,0.043137254901960784,0.10588235294117647,0.30196078431372547,A.q)
D.bl9=new B.u(1,1,0.9686274509803922,0.8,A.q)
D.blT=new B.u(1,1,0.47843137254901963,0.09411764705882353,A.q)
D.ahu=new B.u(1,0.06666666666666667,0.06666666666666667,0.0784313725490196,A.q)
D.bmT=new B.u(1,1,0.5411764705882353,0.5411764705882353,A.q)
D.ahR=new B.u(1,0.043137254901960784,0.047058823529411764,0.06274509803921569,A.q)
D.Z0=new B.u(1,0.7137254901960784,0.7333333333333333,0.7607843137254902,A.q)
D.boH=new B.u(1,0.14901960784313725,0.14901960784313725,0.16862745098039217,A.q)
D.boZ=new B.u(1,0.4196078431372549,0.3568627450980392,0.27058823529411763,A.q)
D.aio=new B.u(1,0.08235294117647059,0.08235294117647059,0.09411764705882353,A.q)
D.bqJ=new B.u(1,0.3568627450980392,0.16470588235294117,0.26666666666666666,A.q)
D.bqR=new B.u(0.9490196078431372,0.09019607843137255,0.09019607843137255,0.10196078431372549,A.q)
D.brj=new B.u(1,0.24705882352941178,0.2901960784313726,0.22745098039215686,A.q)
D.w4=new B.u(1,0.0196078431372549,0.027450980392156862,0.0392156862745098,A.q)
D.btn=new B.u(1,0.0196078431372549,0.043137254901960784,0.1411764705882353,A.q)
D.ajT=new B.u(1,0.5411764705882353,0.5215686274509804,0.5019607843137255,A.q)
D.bz6=new B.bd(11e6)
D.bAU=new B.Q(10,34,10,26)
D.bB1=new B.Q(10,6,10,2)
D.bB3=new B.Q(10,8,0,10)
D.bBH=new B.Q(12,8,8,8)
D.bBN=new B.Q(14,0,14,22)
D.bBP=new B.Q(14,0,14,30)
D.bCS=new B.Q(16,4,16,28)
D.bDb=new B.Q(18,10,18,16)
D.bFa=new B.Q(26,12,26,58)
D.bG0=new B.Q(4,4,8,2)
D.bGF=new B.Q(8,14,8,12)
D.bGM=new B.Q(8,40,8,30)
D.bGR=new B.Q(8,6,16,0)
D.bGS=new B.Q(8,6,8,8)
D.bHd=new B.Q(0,0,1.5,0)
D.b3s=new B.HM(26,"saturation")
D.bHw=new B.uH(A.d_,D.b3s,null,A.XT)
D.bHx=new B.hw(A.G,11)
D.bHB=new B.hw(A.G,30)
D.fEN=new B.B("REACTION LAB",null,T.aW0,null,null,null,null,A.a2,null,1,null,null)
D.bHJ=new B.by(1,A.bb,D.fEN,null)
D.fvn=new B.G(!0,A.c,null,null,null,null,17,A.u,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fI2=new B.B("CORE PROTOCOL",null,D.fvn,null,null,null,null,null,null,null,null,null)
D.bHX=new B.by(1,A.bb,D.fI2,null)
D.fIQ=new B.B("\ud83d\udce2 NGMY Ads",null,A.r7,null,null,null,null,A.eO,null,1,null,null)
D.bIG=new B.by(1,A.bb,D.fIQ,null)
D.fDu=new B.B("Wire selected",null,A.fW,null,null,null,null,null,null,null,null,null)
D.bIU=new B.by(1,A.bb,D.fDu,null)
D.aoQ=new B.a0(62712,"MaterialIcons",!1)
D.bP_=new B.a0(62908,"MaterialIcons",!1)
D.bQH=new B.a0(983122,"MaterialIcons",!1)
D.bQU=new B.a0(983247,"MaterialIcons",!1)
D.bRp=new B.a0(983616,"MaterialIcons",!1)
D.bQG=new B.a0(983117,"MaterialIcons",!1)
D.bV6=new B.ae(D.bQG,28,A.c,null,null,null)
D.bVm=new B.ae(A.j2,18,null,null,null,null)
D.bXe=new B.ae(A.ef,21,A.c_,null,null,null)
D.bXt=new B.ae(A.ox,null,A.ab,null,null,null)
D.bXD=new B.ae(A.a35,21,A.ab,null,null,null)
D.bYu=new B.ae(A.eM,17,A.ab,null,null,null)
D.c0c=new B.ae(A.j2,21,A.ab,null,null,null)
D.c1K=new B.ae(A.e9,null,A.aU,null,null,null)
D.drP=w([A.d5,A.d9,A.d5],x.O)
D.c59=new B.a9(A.a6,A.a9,A.x,D.drP,null,null)
D.d3z=w([A.bP,A.bo],x.O)
D.c5h=new B.a9(A.b6,A.b8,A.x,D.d3z,null,null)
D.c5t=new B.a9(A.b6,A.b8,A.x,A.a5I,null,null)
D.asw=new B.a9(A.b6,A.b8,A.x,O.a4W,null,null)
D.d17=w([A.p6,A.iz],x.O)
D.c6f=new B.a9(A.b6,A.b8,A.x,D.d17,null,null)
D.d3h=w([A.ed,A.au],x.O)
D.asD=new B.a9(A.b6,A.b8,A.x,D.d3h,null,null)
D.dlz=w([A.di,A.jj,A.bo],x.O)
D.c6x=new B.a9(A.a6,A.a9,A.x,D.dlz,null,null)
D.dlF=w([A.hp,A.cs],x.O)
D.c6S=new B.a9(A.b6,A.b8,A.x,D.dlF,null,null)
D.cAi=w([A.bP,A.di],x.O)
D.c70=new B.a9(A.a6,A.a9,A.x,D.cAi,null,null)
D.aCE=w([A.ed,M.ns],x.O)
D.c77=new B.a9(A.b6,A.b8,A.x,D.aCE,null,null)
D.c7o=new B.a9(A.b6,A.b8,A.x,R.asZ,null,null)
D.c8b=new B.a9(A.aA,A.aF,A.x,A.RA,null,null)
D.dd4=w([A.au,A.w],x.O)
D.c8m=new B.a9(A.b6,A.b8,A.x,D.dd4,null,null)
D.c8p=new B.a9(A.b6,A.b8,A.x,H.aBW,null,null)
D.bre=new B.u(1,0.788235294117647,0.6509803921568628,0.4196078431372549,A.q)
D.bs5=new B.u(1,0.5450980392156862,0.4196078431372549,0.22745098039215686,A.q)
D.cNc=w([A.N5,D.bre,D.bs5],x.O)
D.c8y=new B.a9(A.b6,A.b8,A.x,D.cNc,null,null)
D.cAC=w([A.d2,A.hm],x.O)
D.c8O=new B.a9(A.b6,A.b8,A.x,D.cAC,null,null)
D.beC=new B.u(1,0.12156862745098039,0.1411764705882353,0.18823529411764706,A.q)
D.buH=new B.u(1,0.07058823529411765,0.0784313725490196,0.10196078431372549,A.q)
D.cBm=w([D.beC,D.buH],x.O)
D.c9_=new B.a9(A.b6,A.b8,A.x,D.cBm,null,null)
D.c9y=w([0,4,7],x.t)
D.c9z=w([0,4,7,12],x.t)
D.c9A=w([0,4,7,4],x.t)
D.aBB=w([A.hk,A.qg],x.O)
D.aB6=w([A.hn,A.cO],x.O)
D.azq=w([A.br,A.dJ],x.O)
D.cVR=w([A.aU,A.d2],x.O)
D.dmW=w([A.c4,A.kL],x.O)
D.ayR=w([A.cJ,A.kp],x.O)
D.d_X=w([A.bM,A.aM],x.O)
D.c9W=w([D.aBB,D.aB6,A.a50,D.azq,D.cVR,A.azG,A.aAA,D.dmW,D.ayR,D.d_X],B.as("O<ai<u>>"))
D.ceC=w([120,220,380],x.t)
D.cim=w([12,16,19,24],x.t)
D.ciw=w([1400,800,450,2400],x.t)
D.cqX=w([250,450,900,1500],x.t)
D.bfC=new B.u(1,0.9647058823529412,0.8274509803921568,0.7215686274509804,A.q)
D.brE=new B.u(1,0.8862745098039215,0.6823529411764706,0.5254901960784314,A.q)
D.bpr=new B.u(1,0.7450980392156863,0.5411764705882353,0.4,A.q)
D.bvg=new B.u(1,0.5529411764705883,0.3568627450980392,0.24313725490196078,A.q)
D.bow=new B.u(1,0.3686274509803922,0.23529411764705882,0.1568627450980392,A.q)
D.ay6=w([D.bfC,D.brE,D.bpr,D.bvg,D.bow],x.O)
D.cI6=w([50,25,75],x.t)
D.cNJ=w([0,5,10,15,18,20,25],x.t)
D.cW9=w([900,500,250,1600],x.t)
D.d_f=w([A.br,A.bF,A.bc,A.br],x.O)
D.a4R=w([A.az,A.bq,A.bg,A.aJ,A.oe],x.O)
D.d0L=w([A.au,A.az,A.cJ,A.bq,A.bg,A.cy,A.cg,A.bF,A.Y9],x.O)
D.a4U=w([0.04,0.17,0.3],x.n)
D.f6A=new C.vf("Small engine","Light, but weak. Fine on small moons.",0.2,0.6)
D.f6G=new C.vf("Medium engine","A good all-rounder.",0.3,0.9)
D.f6F=new C.vf("Big engine","Strong enough for heavy planets, but heavy and thirsty.",0.5,1.6)
D.Im=w([D.f6A,D.f6G,D.f6F],x._)
D.eDd=new B.y(6,"Easy")
D.eDZ=new B.y(8,"Medium")
D.eyX=new B.y(10,"Hard")
D.d2k=w([D.eDd,D.eDZ,D.eyX],x.I)
D.azQ=w([0.55,0.78,1],x.n)
D.aA0=w([A.c,A.h6,A.o5,A.au],x.O)
D.aA8=w([A.bg,A.az,A.bq,A.d9],x.O)
D.f6x=new C.vf("Radar","Shows your height above the ground.",0.1,0)
D.f6y=new C.vf("Gyroscope","Keeps the rocket upright by itself.",0.2,0)
D.f6v=new C.vf("Parachute","Slows you in air. Useless on the Moon, where there is none.",0.15,0)
D.aAf=w([D.f6x,D.f6y,D.f6v],x._)
D.d8u=w([47,100,220,470,1000],x.n)
D.Jm={volts:0}
D.a6J=new B.bu(D.Jm,[3],x.J)
D.JN=new B.dX(["b","battery",0.2,0.3,D.a6J])
D.ejr={on:0}
D.dCA=new B.bu(D.ejr,[1],x.J)
D.El=new B.dX(["s","switch",0.5,0.3,D.dCA])
D.f4e=new B.dX(["l","bulb",0.8,0.3,A.jq])
D.d3I=w([D.JN,D.El,D.f4e],x.d)
D.Ej=new B.cu(["b",0,"s",0])
D.f3e=new B.cu(["s",1,"l",0])
D.aR4=new B.cu(["l",1,"b",1])
D.dlL=w([D.Ej,D.f3e,D.aR4],x.o)
D.d37=w(["flashlight","torch","bulb","light","lamp"],x.s)
D.ey7=new C.mS("Flashlight","A battery pushes current round a loop. The switch closes the loop and the bulb glows. Flip the switch to turn it on.",D.d3I,D.dlL,D.d37)
D.aKU={ohms:0}
D.aIA=new B.bu(D.aKU,[220],x.J)
D.f3H=new B.dX(["r","resistor",0.5,0.3,D.aIA])
D.f4t=new B.dX(["d","led",0.8,0.3,A.jq])
D.dp0=w([D.JN,D.f3H,D.f4t],x.d)
D.f2z=new B.cu(["b",0,"r",0])
D.f38=new B.cu(["r",1,"d",0])
D.f2F=new B.cu(["d",1,"b",1])
D.dye=w([D.f2z,D.f38,D.f2F],x.o)
D.dpu=w(["led","diode","indicator"],x.s)
D.eye=new C.mS("Safe LED","An LED burns out with too much current, so a resistor goes in the loop to hold the current back.",D.dp0,D.dye,D.dpu)
D.a80={level:0}
D.dBW=new B.bu(D.a80,[0.2],x.J)
D.f3N=new B.dX(["p","pot",0.5,0.3,D.dBW])
D.f3P=new B.dX(["m","motor",0.8,0.3,A.jq])
D.d41=w([D.JN,D.f3N,D.f3P],x.d)
D.f2y=new B.cu(["b",0,"p",0])
D.f34=new B.cu(["p",1,"m",0])
D.f30=new B.cu(["m",1,"b",1])
D.dtS=w([D.f2y,D.f34,D.f30],x.o)
D.dls=w(["fan","motor","spin","dimmer"],x.s)
D.ey5=new C.mS("Electric fan","Current through a motor turns its coil into a magnet that spins. A dimmer knob changes how fast.",D.d41,D.dtS,D.dls)
D.a6G=new B.bu(D.a80,[0.9],x.J)
D.aRd=new B.dX(["s","solar",0.25,0.3,D.a6G])
D.aRc=new B.dX(["l","bulb",0.75,0.3,A.jq])
D.d6P=w([D.aRd,D.aRc],x.d)
D.f3b=new B.cu(["s",0,"l",0])
D.f2Z=new B.cu(["l",1,"s",1])
D.d4Q=w([D.f3b,D.f2Z],x.o)
D.duy=w(["solar","sun","without battery","no battery","free"],x.s)
D.ey8=new C.mS("Sun-powered lamp","A solar panel turns light into electricity with no battery at all. More light, brighter bulb.",D.d6P,D.d4Q,D.duy)
D.f4w=new B.dX(["c","crank",0.25,0.3,D.a6G])
D.djF=w([D.f4w,D.aRc],x.d)
D.f2C=new B.cu(["c",0,"l",0])
D.f2Y=new B.cu(["l",1,"c",1])
D.dkf=w([D.f2C,D.f2Y],x.o)
D.djP=w(["crank","dynamo","alternator","generator","hand","bicycle","pedal"],x.s)
D.ey4=new C.mS("Hand-crank light","Turning a crank spins a magnet inside a coil of wire. That makes electricity, like a dynamo or an alternator. Tap the crank to spin it.",D.djF,D.dkf,D.djP)
D.dBV=new B.bu(D.a80,[0.7],x.J)
D.f3S=new B.dX(["t","turbine",0.25,0.3,D.dBV])
D.f3F=new B.dX(["m","motor",0.75,0.3,A.jq])
D.ddL=w([D.f3S,D.f3F],x.d)
D.f3m=new B.cu(["t",0,"m",0])
D.f31=new B.cu(["m",1,"t",1])
D.dcK=w([D.f3m,D.f31],x.o)
D.dim=w(["wind","turbine","windmill","water","hydro"],x.s)
D.ey1=new C.mS("Wind-powered motor","The wind turns the blades, the blades turn a generator, and the electricity spins a motor. No battery.",D.ddL,D.dcK,D.dim)
D.aIx=new B.bu(D.Jm,[9],x.J)
D.a97=new B.dX(["b","battery",0.2,0.3,D.aIx])
D.aRa=new B.dX(["r","radio",0.8,0.3,A.jq])
D.dv7=w([D.a97,D.El,D.aRa],x.d)
D.f3g=new B.cu(["s",1,"r",0])
D.aR6=new B.cu(["r",1,"b",1])
D.c9f=w([D.Ej,D.f3g,D.aR6],x.o)
D.dtE=w(["radio","music","listen"],x.s)
D.eyd=new C.mS("Pocket radio","A 9 volt battery powers a radio. Radio waves in the air are caught by the aerial and turned into sound.",D.dv7,D.c9f,D.dtE)
D.dD_=new B.bu(D.Jm,[12],x.J)
D.aR9=new B.dX(["b","battery",0.2,0.3,D.dD_])
D.f4f=new B.dX(["t","tv",0.8,0.3,A.jq])
D.d3K=w([D.aR9,D.El,D.f4f],x.d)
D.f3h=new B.cu(["s",1,"t",0])
D.aR7=new B.cu(["t",1,"b",1])
D.dmZ=w([D.Ej,D.f3h,D.aR7],x.o)
D.dv5=w(["tv","television","screen","watch"],x.s)
D.exZ=new C.mS("Television","A TV needs more power than a torch. Twelve volts light up its screen of tiny coloured dots.",D.d3K,D.dmZ,D.dv5)
D.f45=new B.dX(["z","buzzer",0.8,0.3,A.jq])
D.cKt=w([D.JN,D.El,D.f45],x.d)
D.f3i=new B.cu(["s",1,"z",0])
D.f3A=new B.cu(["z",1,"b",1])
D.cZt=w([D.Ej,D.f3i,D.f3A],x.o)
D.drV=w(["bell","buzzer","alarm","doorbell","sound"],x.s)
D.eya=new C.mS("Doorbell","Press the switch and current flows through the buzzer, which shakes to make a sound.",D.cKt,D.cZt,D.drV)
D.f3O=new B.dX(["h","heater",0.8,0.3,A.jq])
D.dh2=w([D.a97,D.El,D.f3O],x.d)
D.f3d=new B.cu(["s",1,"h",0])
D.f2N=new B.cu(["h",1,"b",1])
D.d_a=w([D.Ej,D.f3d,D.f2N],x.o)
D.cue=w(["heater","toaster","heat","hot","kettle","warm"],x.s)
D.ey_=new C.mS("Toaster","A heater coil resists the current, so it gets hot and glows orange. Toasters, kettles and hair dryers all work like this.",D.dh2,D.d_a,D.cue)
D.f4h=new B.dX(["s","solar",0.2,0.25,D.a6G])
D.dD2=new B.bu(D.aKU,[100],x.J)
D.f4k=new B.dX(["r","resistor",0.55,0.25,D.dD2])
D.f4r=new B.dX(["c","capacitor",0.85,0.25,A.jq])
D.f3K=new B.dX(["q","resistor",0.55,0.6,D.aIA])
D.f4i=new B.dX(["d","led",0.85,0.6,A.jq])
D.dmu=w([D.f4h,D.f4k,D.f4r,D.f3K,D.f4i],x.d)
D.f3c=new B.cu(["s",0,"r",0])
D.f37=new B.cu(["r",1,"c",0])
D.f2E=new B.cu(["c",1,"s",1])
D.f2D=new B.cu(["c",0,"q",0])
D.f36=new B.cu(["q",1,"d",0])
D.f2G=new B.cu(["d",1,"c",1])
D.daA=w([D.f3c,D.f37,D.f2E,D.f2D,D.f36,D.f2G],x.o)
D.diX=w(["capacitor","store","charge","flash"],x.s)
D.eyc=new C.mS("Solar flash","A solar panel slowly fills a capacitor with charge, like a tank. The capacitor keeps the LED lit for a moment even in the shade.",D.dmu,D.daA,D.diX)
D.f3V=new B.dX(["b","battery",0.15,0.3,D.a6J])
D.f4x=new B.dX(["l1","bulb",0.5,0.3,A.jq])
D.f42=new B.dX(["l2","bulb",0.85,0.3,A.jq])
D.d1L=w([D.f3V,D.f4x,D.f42],x.d)
D.f2x=new B.cu(["b",0,"l1",0])
D.f2V=new B.cu(["l1",1,"l2",0])
D.f2W=new B.cu(["l2",1,"b",1])
D.dew=w([D.f2x,D.f2V,D.f2W],x.o)
D.duR=w(["series","two bulbs","dim"],x.s)
D.ey2=new C.mS("Two bulbs in a row","Bulbs wired one after another share the push, so each one is dimmer. Add the second bulb and watch.",D.d1L,D.dew,D.duR)
D.ejM={volts:0,charge:1}
D.dD5=new B.bu(D.ejM,[1.5,0],x.J)
D.f4p=new B.dX(["b","battery",0.75,0.3,D.dD5])
D.d18=w([D.aRd,D.f4p],x.d)
D.f3a=new B.cu(["s",0,"b",0])
D.f2B=new B.cu(["b",1,"s",1])
D.daU=w([D.f3a,D.f2B],x.o)
D.dj6=w(["charge","rechargeable","flat","recharge"],x.s)
D.ey0=new C.mS("Charge a flat battery","A 1.5 V battery starts flat. A solar panel pushes current into it (+ to +, \u2212 to \u2212) and the charge bar fills up. When it is full, take it off the panel and use it to run a bulb or a calculator.",D.d18,D.daU,D.dj6)
D.dCZ=new B.bu(D.Jm,[4.5],x.J)
D.f3Q=new B.dX(["b","battery",0.2,0.3,D.dCZ])
D.aR8=new B.dX(["p","phone",0.8,0.3,A.jq])
D.ddA=w([D.f3Q,D.El,D.aR8],x.d)
D.f3f=new B.cu(["s",1,"p",0])
D.a96=new B.cu(["p",1,"b",1])
D.dqQ=w([D.Ej,D.f3f,D.a96],x.o)
D.dsk=w(["phone","charger","usb","mobile"],x.s)
D.ey6=new C.mS("Phone charger","A phone charges with 4 to 7 volts. A 4.5 V battery does it. Nine volts would burn it out!",D.ddA,D.dqQ,D.dsk)
D.f3C=new B.dX(["f","fan",0.8,0.3,A.jq])
D.cml=w([D.JN,D.f3C],x.d)
D.f2w=new B.cu(["b",0,"f",0])
D.f2L=new B.cu(["f",1,"b",1])
D.d_J=w([D.f2w,D.f2L],x.o)
D.dlr=w(["fan","cool","air","wind"],x.s)
D.eyf=new C.mS("Cooling fan","A motor turns the blades. More volts, faster fan. It works either way round.",D.cml,D.d_J,D.dlr)
D.f49=new B.dX(["b","battery",0.15,0.2,D.a6J])
D.f3D=new B.dX(["a","ammeter",0.5,0.2,A.jq])
D.f3B=new B.dX(["l","bulb",0.85,0.2,A.jq])
D.f4b=new B.dX(["v","voltmeter",0.5,0.6,A.jq])
D.djs=w([D.f49,D.f3D,D.f3B,D.f4b],x.d)
D.f2u=new B.cu(["b",0,"a",0])
D.f2t=new B.cu(["a",1,"l",0])
D.f3o=new B.cu(["v",0,"l",0])
D.f3p=new B.cu(["v",1,"l",1])
D.daL=w([D.f2u,D.f2t,D.aR4,D.f3o,D.f3p],x.o)
D.dyd=w(["meter","measure","volt","amp","current","power","watt"],x.s)
D.eyb=new C.mS("Measure a bulb","The ammeter is in the loop (in a row with the bulb) to read the current. The voltmeter goes across the bulb to read its volts. Multiply them to get the watts!",D.djs,D.daL,D.dyd)
D.f4A=new B.dX(["b","battery",0.15,0.2,D.aIx])
D.f3U=new B.dX(["t","tv",0.55,0.2,A.jq])
D.aIy=new B.bu(D.Jm,[5],x.J)
D.f3I=new B.dX(["c","buck",0.4,0.5,D.aIy])
D.f3W=new B.dX(["p","phone",0.8,0.5,A.jq])
D.d8g=w([D.f4A,D.f3U,D.f3I,D.f3W],x.d)
D.f2A=new B.cu(["b",0,"t",0])
D.aR2=new B.cu(["b",0,"c",0])
D.aR3=new B.cu(["c",1,"p",0])
D.ddx=w([D.f2A,D.aR7,D.aR2,D.aR3,D.a96],x.o)
D.d6n=w(["phone and tv","reduce","step down","converter","buck","one battery","tv and phone","lower voltage"],x.s)
D.ey3=new C.mS("Phone and TV on one battery","The TV needs 9 volts, but a phone burns out above 7. A step-down converter takes the 9 V down to 5 V for the phone, so one battery runs both. The TV takes the 9 V straight from the battery.",D.d8g,D.ddx,D.d6n)
D.f3J=new B.dX(["c","buck",0.5,0.3,D.aIy])
D.d__=w([D.aR9,D.f3J,D.aR8],x.d)
D.d4b=w([D.aR2,D.aR3,D.a96],x.o)
D.cxH=w(["safe","charger","adapter","usb","lower","reduce"],x.s)
D.exY=new C.mS("Safe phone charger","A 12 V battery would burn the phone. The step-down converter brings 12 V down to 5 V, which is what a phone wants.",D.d__,D.d4b,D.cxH)
D.f40=new B.dX(["d","diode",0.5,0.3,A.jq])
D.deK=w([D.a97,D.f40,D.aRa],x.d)
D.f2v=new B.cu(["b",0,"d",0])
D.f2H=new B.cu(["d",1,"r",0])
D.cN0=w([D.f2v,D.f2H,D.aR6],x.o)
D.d62=w(["diode","protect","backwards","one way"],x.s)
D.ey9=new C.mS("Protect with a diode","A diode lets electricity go one way only, so a battery put in backwards cannot hurt the radio. It uses up about 0.7 V.",D.deK,D.cN0,D.d62)
D.RN=w([D.ey7,D.eye,D.ey5,D.ey8,D.ey4,D.ey1,D.eyd,D.exZ,D.eya,D.ey_,D.eyc,D.ey2,D.ey0,D.ey6,D.eyf,D.eyb,D.ey3,D.exY,D.ey9],B.as("O<mS>"))
D.hAR=new C.GN("Moon",1.62,A.di,"The Moon has only one sixth of Earth's gravity, so landing is gentle.")
D.hAP=new C.GN("Mars",3.71,A.az,"Mars has about 38 percent of Earth's gravity.")
D.hAS=new C.GN("Mercury",3.7,A.kn,"Mercury is small, so its gravity is like Mars.")
D.hAM=new C.GN("Venus",8.87,A.aU,"Venus is almost as heavy as Earth, with strong gravity.")
D.hAO=new C.GN("Earth",9.81,A.aJ,"On Earth gravity is strong, and the air also slows you down.")
D.hAQ=new C.GN("Neptune",11.15,A.d9,"Neptune pulls a little harder than Earth.")
D.hAN=new C.GN("Jupiter",24.79,A.cJ,"Jupiter is so heavy that you would weigh two and a half times as much!")
D.t4=w([D.hAR,D.hAP,D.hAS,D.hAM,D.hAO,D.hAQ,D.hAN],B.as("O<GN>"))
D.day=w(["A motor that works without a battery","Free electricity","A radio with no battery","A night light that charges in the day","A hand-powered torch","A TV","A doorbell","A wind-powered fan"],x.s)
D.dbi=w([0.2,0.5,0.8],x.n)
D.b0A=new C.L6(0,"accordion")
D.d04=w([A.jF,A.CU,A.CA],x.w)
D.d7G=w(["Mail","SMS","Ad"],x.s)
D.d0D=w(["Lands in the inbox","Texts the phone","Shows on the feed"],x.s)
D.hz4=new C.B1(D.b0A,"MESSAGE FUNNEL","Panels fold out of each other, one hinge at a time",D.aBB,D.d04,D.d7G,D.d0D)
D.acU=new C.L6(1,"flip")
D.diR=w([A.qJ,Z.HO,A.uR],x.w)
D.ddh=w(["Unlock","Verify","Secure"],x.s)
D.cZW=w(["Opens the door","Checks the key","Locks it safe"],x.s)
D.hz3=new C.B1(D.acU,"VAULT UNLOCK","Locked panels flip over to reveal what is inside",D.aB6,D.diR,D.ddh,D.cZW)
D.b0B=new C.L6(2,"towers")
D.dc3=w([A.zf,A.qM,A.ib],x.w)
D.dbB=w(["Save","Grow","Earn"],x.s)
D.cNU=w(["","",""],x.s)
D.hz5=new C.B1(D.b0B,"GROWTH SKYLINE","Solid towers rise from the floor and light up",A.a50,D.dc3,D.dbB,D.cNU)
D.acV=new C.L6(3,"assemble")
D.djS=w([A.oB,A.hr,A.e9],x.w)
D.d70=w(["Launch","Charge","Shine"],x.s)
D.dg6=w(["Lifts off","Powers up","Lights the sky"],x.s)
D.hz7=new C.B1(D.acV,"ORBIT ASSEMBLY","Pieces spiral in from all sides and lock together",D.azq,D.djS,D.d70,D.dg6)
D.b0C=new C.L6(4,"carousel")
D.djG=w([A.bc,A.eT],x.O)
D.d7P=w([A.n_,A.aph,A.Pz],x.w)
D.d2a=w(["Explore","Discover","Learn"],x.s)
D.ddG=w(["Go anywhere","Find something new","Know more each day"],x.s)
D.hz2=new C.B1(D.b0C,"SPIN CAROUSEL","Cards swing around a glowing ring, front card shines",D.djG,D.d7P,D.d2a,D.ddG)
D.b0D=new C.L6(5,"burst")
D.dbw=w([A.hT,A.u2],x.O)
D.d0y=w([A.kt,A.mX,A.hI],x.w)
D.d0T=w(["Cheer","Win","Love"],x.s)
D.d3f=w(["Make some noise","First place","Share the joy"],x.s)
D.hz6=new C.B1(D.b0D,"POP BURST","Cards pop in with a shockwave and a burst of sparks",D.dbw,D.d0y,D.d0T,D.d3f)
D.aAM=w([D.hz4,D.hz3,D.hz5,D.hz7,D.hz2,D.hz6],B.as("O<B1>"))
D.f_C=new B.b5("skin","Skin",A.api)
D.f1g=new B.b5("muscle","Muscles",A.P9)
D.f0V=new B.b5("organ","Organs",A.hI)
D.bOI=new B.a0(62747,"MaterialIcons",!1)
D.f12=new B.b5("bone","Skeleton",D.bOI)
D.f1o=new B.b5("vessel","Blood vessels",A.pw)
D.dc9=w([D.f_C,D.f1g,D.f0V,D.f12,D.f1o],x.r)
D.f6z=new C.vf("Simple legs","Light. Land gently.",0.15,0.2)
D.f6B=new C.vf("Shock legs","Springs soak up a harder landing.",0.3,0.28)
D.f6E=new C.vf("Airbags","Bounce safely at higher speed and survive a tilt.",0.4,0.34)
D.Dm=w([D.f6z,D.f6B,D.f6E],x._)
D.f2b=new B.cu(["beat",0.18,0.28,0])
D.f3j=new B.cu(["burst",0.7,0.2,0])
D.f3u=new B.cu(["delay",0.45,0.5,1])
D.f33=new B.cu(["ripple",0.75,0.6,3])
D.d6K=w([D.f2b,D.f3j,D.f3u,D.f33],x.e)
D.di9=w([P.lu,O.JM,F.Uk],x.u)
D.hy0=new C.Gy("First spark","A clock lights a burst and a ripple",D.d6K,D.di9)
D.f2K=new B.cu(["beat",0.15,0.3,1])
D.f1Q=new B.cu(["ripple",0.62,0.15,0])
D.f3q=new B.cu(["delay",0.4,0.45,0])
D.f2q=new B.cu(["ripple",0.7,0.45,0])
D.f27=new B.cu(["delay",0.4,0.7,1])
D.f35=new B.cu(["shake",0.75,0.75,0])
D.dvZ=w([D.f2K,D.f1Q,D.f3q,D.f2q,D.f27,D.f35],x.e)
D.eA3=new B.y(2,4)
D.aQK=new B.y(4,5)
D.dao=w([P.lu,O.JM,F.Uk,D.eA3,D.aQK],x.u)
D.hy2=new C.Gy("Heartbeat","Two thumps, then a shake",D.dvZ,D.dao)
D.f2g=new B.cu(["dice",0.15,0.7,1])
D.f3w=new B.cu(["echo",0.4,0.7,0])
D.f2o=new B.cu(["comet",0.7,0.5,4])
D.f3k=new B.cu(["burst",0.72,0.2,1])
D.f2I=new B.cu(["burst",0.3,0.25,0])
D.f2h=new B.cu(["pop",0.55,0.85,0])
D.ctN=w([D.f2g,D.f3w,D.f2o,D.f3k,D.f2I,D.f2h],x.e)
D.ezo=new B.y(1,3)
D.ezp=new B.y(1,4)
D.aQG=new B.y(0,5)
D.djB=w([P.lu,S.vp,D.ezo,D.ezp,D.aQG],x.u)
D.hy1=new C.Gy("Fireworks","Dice launch comets that burst in colour",D.ctN,D.djB)
D.f2l=new B.cu(["beat",0.15,0.2,2])
D.f2S=new B.cu(["chance",0.4,0.2,0])
D.f2d=new B.cu(["ball",0.7,0.12,3])
D.f20=new B.cu(["chance",0.4,0.5,1])
D.f3v=new B.cu(["ball",0.3,0.08,1])
D.f1U=new B.cu(["ripple",0.7,0.55,3])
D.cmO=w([D.f2l,D.f2S,D.f2d,D.f20,D.f3v,D.f1U],x.e)
D.eA4=new B.y(2,5)
D.cKb=w([P.lu,S.vp,O.a8Z,F.Ul,D.eA4],x.u)
D.hy_=new C.Gy("Rain","Balls fall at random and splash",D.cmO,D.cKb)
D.f2T=new B.cu(["beat",0.12,0.45,2])
D.f3l=new B.cu(["toggle",0.38,0.2,0])
D.f3s=new B.cu(["wash",0.7,0.15,4])
D.f2f=new B.cu(["count3",0.38,0.45,0])
D.f3n=new B.cu(["burst",0.72,0.4,0])
D.f2J=new B.cu(["light",0.55,0.7,1])
D.f21=new B.cu(["pop",0.8,0.8,4])
D.dms=w([D.f2T,D.f3l,D.f3s,D.f2f,D.f3n,D.f2J,D.f21],x.e)
D.eAB=new B.y(3,6)
D.cpX=w([P.lu,S.vp,O.a8Z,F.Ul,D.aQG,D.eAB],x.u)
D.hxY=new C.Gy("Disco","A beat drives lights, washes and bursts",D.dms,D.cpX)
D.f3z=new B.cu(["button",0.12,0.2,0])
D.f1W=new B.cu(["delay",0.34,0.2,1])
D.f3y=new B.cu(["light",0.56,0.2,1])
D.f3r=new B.cu(["delay",0.56,0.45,1])
D.f2U=new B.cu(["ball",0.34,0.6,0])
D.f2_=new B.cu(["delay",0.34,0.8,1])
D.f1P=new B.cu(["burst",0.7,0.8,5])
D.c9Z=w([D.f3z,D.f1W,D.f3y,D.f3r,D.f2U,D.f2_,D.f1P],x.e)
D.eCN=new B.y(5,6)
D.ds3=w([P.lu,S.vp,F.Uk,F.Ul,D.aQK,D.eCN],x.u)
D.hxZ=new C.Gy("Domino","Tap the button and watch it run down the line",D.c9Z,D.ds3)
D.aBa=w([D.hy0,D.hy2,D.hy1,D.hy_,D.hxY,D.hxZ],B.as("O<Gy>"))
D.dhr=w([0.05,0.15,0.25],x.n)
D.dil=w([1.5,3,4.5,9,12],x.n)
D.eYW=new B.b5("dice","Dice",A.ot)
D.f_a=new B.b5("coin","Coin",Q.za)
D.f1j=new B.b5("num","Number",A.zj)
D.diz=w([D.eYW,D.f_a,D.f1j],x.r)
D.diD=w(["skin","muscle","organ","bone","vessel"],x.s)
D.aBg=w([A.c_,A.aU,A.b9,A.aJ,A.br,A.c4,A.cJ,A.hn],x.O)
D.djH=w([A.c4,A.aJ,A.dF,A.b9],x.O)
D.dkI=w([],x.a)
D.eri=new C.eh("battery","Battery","\ud83d\udd0b",A.b9,"Pushes electric charge round a loop. Tap it to change how many volts it has. More volts means a stronger push.","Two different metals sit in a chemical paste. The chemicals swap electrons between the metals, and that makes a voltage.")
D.ero=new C.eh("solar","Solar panel","\u2600\ufe0f",A.bq,"Makes electricity from light, with no battery. Use the light slider: more sunshine means more volts.","Slices of silicon. When light hits them it knocks electrons loose, and a layer on each side pushes them one way.")
D.es2=new C.eh("crank","Hand crank","\ud83d\udd04",A.cJ,"A generator you turn by hand. Tap it again and again: the faster you spin it, the more volts it makes.","A magnet spins inside a coil of copper wire. A moving magnet pushes electrons along the wire. This is how an alternator or dynamo works.")
D.erF=new C.eh("turbine","Wind turbine","\ud83c\udf2c\ufe0f",A.aJ,"A generator turned by the wind. Change the wind strength to change the volts.","Blades catch the wind and turn a shaft joined to a generator, the same coil-and-magnet idea as a dynamo.")
D.era=new C.eh("buck","Step-down converter","\ud83d\udd3d",A.hn,"Brings the volts DOWN to the number you choose (3, 5, 6 or 9 V), so a gadget that needs few volts is safe on a big battery. The + (left) dot is the input from the battery. The right dot is the output to the gadget. More volts must go in than come out.","A fast switch chops the power into tiny pulses, and a coil and capacitor smooth them out to a lower voltage. Very little energy is wasted as heat.")
D.erD=new C.eh("regulator","5 V regulator","\ud83e\uddca",A.bM,"Always gives out 5 volts, whatever bigger battery you use. The + (left) dot is the input. It turns the extra volts into HEAT, so it gets hot if the gadget takes a lot of current. Great for a phone, too hot for a big load.","A transistor acts like a tap that closes more when too many volts arrive, and a tiny circuit checks the output many times a second.")
D.es7=new C.eh("diode","Diode","\u27a1\ufe0f",A.aU,"Lets electricity go one way only (left to right). It uses up about 0.7 volts. Put it in a loop so a battery connected backwards cannot hurt a gadget.","A join between two kinds of crystal that electrons can cross in one direction but not the other.")
D.erP=new C.eh("ldr","Light sensor","\ud83c\udf1e",A.dF,"A resistor that changes with light: in the dark it holds the current back, in bright light it lets more through. Tap it and move the Light slider.","A flat disc of a special material (cadmium sulfide) that frees more electrons when light hits it.")
D.ert=new C.eh("switch","Switch","\ud83c\udf9a\ufe0f",A.br,"Opens or closes the loop. Electricity only flows round a closed loop. Tap it to flip it.","Two metal contacts. Flipping the lever makes them touch, or pulls them apart.")
D.es4=new C.eh("fuse","Fuse","\ud83e\uddef",A.c_,"A safety part. If too much current flows, its thin wire melts and the loop breaks, which stops fires.","A very thin strip of metal inside a glass tube. It heats up and melts when the current is too high.")
D.er2=new C.eh("pot","Dimmer knob","\ud83c\udf9b\ufe0f",A.hn,"A resistor you can change. Turn it to let less or more current through, like a volume control.","A strip of resistive material with a sliding contact that touches it at different places.")
D.erQ=new C.eh("resistor","Resistor","\u3030\ufe0f",A.aU,"Holds back the current, which protects other parts. Tap it to change its size in ohms.","A tiny rod of carbon or a thin metal film, with coloured stripes that tell you its ohms.")
D.erS=new C.eh("bulb","Light bulb","\ud83d\udca1",A.dF,"Glows when current heats its thin wire. It is made for 3 volts. Much more and it burns out!","A very thin coil of tungsten wire in a glass bulb with no air, so it can glow white hot without burning.")
D.erq=new C.eh("led","LED","\ud83d\udd34",A.az,"A light that uses very little power. It only works one way round, and it burns out without a resistor to protect it.","A tiny chip of special crystal. When electrons cross the join in the chip they give off light.")
D.eru=new C.eh("motor","Motor","\u2699\ufe0f",A.bM,"Turns electricity into spinning. More current spins it faster. It is the reverse of a generator.","Coils of wire become magnets when current flows, and they push and pull against fixed magnets to make a shaft turn.")
D.erM=new C.eh("buzzer","Buzzer","\ud83d\udd14",A.c4,"Makes a sound when current flows through it.","A thin metal disc is pulled and released many times a second by electric pulses. That shakes the air as sound.")
D.erj=new C.eh("heater","Heater","\ud83d\udd25",A.cJ,"Turns electricity into heat. Toasters and kettles work like this. More power makes it glow hotter.","A long coil of special wire that resists the current. The current has to push through it, and that makes it hot.")
D.erH=new C.eh("capacitor","Capacitor","\ud83e\udeab",A.cr,"Stores electric charge like a tiny rechargeable tank. It fills up from a battery, then can give the charge back.","Two sheets of metal foil, rolled up with a thin plastic sheet between them.")
D.erz=new C.eh("radio","Radio","\ud83d\udcfb",A.oe,"Needs about 3 volts or more. When it has power it picks up stations and plays them.","An aerial catches invisible radio waves. A tuner picks one station, and a chip turns it back into sound for the speaker.")
D.erw=new C.eh("tv","Samsung Neo QLED 8K","\ud83d\udcfa",A.bc,"Needs 5.5 to 13.5 volts and the + (left) dot towards the battery +. When it switches on it shows NGMY animation channels. Tap it 3 times quickly to open the big screen.","Millions of tiny red, green and blue lights, called pixels, that glow at different strengths to make every colour.")
D.er9=new C.eh("voltmeter","Voltmeter","\ud83e\udded",A.bw,"Measures volts. Wire it across a part (one dot each side) to read how many volts that part gets. It never goes in the loop itself.","A very sensitive coil on a needle, behind a huge resistor so almost no current is stolen from the circuit.")
D.erg=new C.eh("ammeter","Ammeter","\ud83d\udcdf",A.aU,"Measures how much current is flowing. It goes IN the loop, one after another with the part you are measuring. Never wire it straight across a battery!","A coil on a needle with a tiny resistor, so the current passes through it almost freely.")
D.erm=new C.eh("fan","Fan","\ud83c\udf00",A.aJ,"Spins its blades when it gets 2 to 9 volts. More volts, faster spin. Works either way round.","A small motor turns plastic blades that push the air.")
D.es9=new C.eh("speaker","Speaker","\ud83d\udd0a",A.c4,"Plays a sound when powered (1.5 to 9 volts). The + dot goes to the battery +.","A coil and magnet shake a paper cone back and forth. The cone pushes the air to make sound.")
D.erZ=new C.eh("clock","Digital clock","\u23f0",A.b9,"Shows the real time once it has 2.5 to 7 volts. Too many volts and it burns out. The + dot goes to the battery +.","A quartz crystal ticks exactly 32,768 times a second, and a chip counts the ticks to show the time.")
D.erC=new C.eh("calculator","Calculator","\ud83e\uddee",A.M6,"Sips power: it works from 1.2 to 4.8 volts. A 9 volt battery would burn it out. The + dot goes to the battery +.","A tiny chip does the sums and a liquid-crystal screen shows the numbers. A little solar cell can power it.")
D.erf=new C.eh("phone","iPhone 18 Pro Max","\ud83d\udcf1",A.cr,"The newest iPhone with a Dynamic Island. Tap it 3 times for the big phone, 4 times to make it bigger. It charges when it gets 4 to 7 volts (a USB charger gives 5). Too little and it will not charge; too much and it burns. The + dot goes to the battery +.","A lithium battery is filled slowly by a charging chip that keeps the voltage just right.")
D.es8=new C.eh("router","WiFi router","\ud83d\udcf6",A.hn,"Needs 8 to 14 volts. Its lights blink when it is working. The + dot goes to the battery +.","A small computer plus a radio that sends and receives the internet through the air.")
D.esb=new C.eh("siren","Siren","\ud83d\udea8",A.az,"A loud alarm that needs 5 to 13.5 volts. Lights flash and the sound goes up and down. The + dot goes to the battery +.","A motor spins a mirror that sweeps the light, and an oscillator makes the rising and falling tone.")
D.er5=new C.eh("toycar","Toy car","\ud83d\ude97",A.cJ,"A little motor drives the wheels once it gets 2 to 9 volts. Works either way round.","A small motor turns a gear that spins the back wheels.")
D.esc=new C.eh("kettle","Kettle","\ud83e\uded6",A.mM,"Boils water with a heating coil. It needs 3 to 13 volts and a strong battery. Watch the steam!","A coil of resistance wire at the bottom heats the water. A thermostat switches it off when it boils.")
D.erd=new C.eh("lamp","Desk lamp","\ud83e\ude94",A.dF,"A bright lamp that needs 2.5 to 8 volts. It gets brighter with more volts. Works either way round.","A bulb in a bendy arm, with a shade that points the light down at your desk.")
D.erp=new C.eh("lights","Party lights","\ud83c\udf84",A.oe,"A string of coloured lights that twinkle. They need 3.5 to 13.5 volts. The + dot goes to the battery +.","Many small bulbs joined along one wire, each with its own colour of glass.")
D.erA=new C.eh("fridge","Fridge","\ud83e\uddca",A.hC,"Keeps food cold. Needs 4 to 13 volts. When it works the light inside comes on and frost appears. Works either way round.","A pump squeezes a special gas so it gets hot outside the fridge and very cold inside, carrying the warmth away.")
D.er7=new C.eh("washer","Washing machine","\ud83e\udee7",A.cr,"The drum spins and soap bubbles fly. Needs 5 to 13.5 volts. Works either way round.","A strong motor spins a drum full of water and clothes, back and forth, to shake the dirt out.")
D.es_=new C.eh("blender","Blender","\ud83e\udd64",A.c_,"Sharp blades whizz round and mash the fruit. Needs 2.4 to 10 volts. More volts, faster blades.","A fast motor spins steel blades at the bottom of a jug.")
D.erx=new C.eh("drone","Drone","\ud83d\ude81",A.bM,"Four rotors lift it off the ground once it gets 5 to 12.5 volts. Works either way round.","Four small motors spin propellers that push air down, so the drone is pushed up.")
D.erc=new C.eh("drill","Power drill","\ud83d\udd29",A.aU,"The bit spins and sparks fly. Needs 3.5 to 12 volts. Works either way round.","A strong motor and gears turn the drill bit slowly but with great force.")
D.erB=new C.eh("torch","Torch","\ud83d\udd26",A.bN,"A torch beam. It needs only 2 to 6 volts. Too many volts and the little bulb pops. Works either way round.","A small bulb sits in a curved mirror that throws the light forward in a beam.")
D.erX=new C.eh("neon","Neon sign","\ud83e\udea7",A.c4,"A glowing OPEN sign that flickers on. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A glass tube full of neon gas glows when electricity passes through it.")
D.er8=new C.eh("microwave","Microwave","\ud83c\udf72",A.cJ,"The plate turns and the timer counts down. Needs a lot of power: 8 to 13.5 volts. Works either way round.","A tube makes invisible microwaves that shake the water in food so it gets hot.")
D.erR=new C.eh("doorbell","Doorbell","\ud83d\udd14",A.bq,"Swings its bell and goes ding-dong. Needs 3 to 12 volts. The + dot goes to the battery +.","A little hammer, pulled by a magnet, hits a metal bar again and again.")
D.erl=new C.eh("camera","Security camera","\ud83d\udcf7",A.an,"A red REC light blinks and the lens looks around. Needs 4 to 12 volts. The + dot goes to the battery +.","A small sensor turns light into numbers, many times a second, and a chip makes them into a video.")
D.erL=new C.eh("console","Game console","\ud83c\udfae",A.br,"Plays a little ball game on its screen. Needs 4.5 to 9.5 volts. The + dot goes to the battery +.","A fast chip draws the picture over and over, many times each second.")
D.es1=new C.eh("heartmon","Heart monitor","\ud83e\ude7a",A.hi,"Draws a heartbeat line and beeps. Needs 3 to 9 volts. The + dot goes to the battery +.","Sensors on the body feel tiny electric signals made by the heart and a chip draws them as a line.")
D.er6=new C.eh("aquarium","Aquarium","\ud83d\udc20",A.bc,"A pump blows bubbles and a fish swims around. Needs 3 to 9 volts. Works either way round.","A small motor pushes air through a stone, making lots of tiny bubbles.")
D.erG=new C.eh("lighthouse","Lighthouse","\ud83d\uddfc",A.dF,"A bright beam sweeps round and round. Needs 4 to 13.5 volts. Works either way round.","A huge lamp sits inside a glass lens that squeezes the light into a beam. A motor turns the lens.")
D.erO=new C.eh("discoball","Disco ball","\ud83e\udea9",A.oe,"Spins and throws sparkles everywhere. Needs 5 to 13.5 volts. Works either way round.","Hundreds of tiny mirrors on a ball bounce a spotlight all around the room as it turns.")
D.es6=new C.eh("robot","Robot","\ud83e\udd16",A.aJ,"Its eyes light up and blink, and its arm waves. Needs 4 to 9 volts. The + dot goes to the battery +.","A tiny computer reads sensors and tells small motors in the arms and head what to do.")
D.er4=new C.eh("toaster","Toaster","\ud83c\udf5e",A.e1,"Glowing wires toast the bread, then it pops up. Needs 3.5 to 13 volts and a strong battery. Works either way round.","Thin wires get red hot as the current squeezes through them and toast the bread.")
D.esa=new C.eh("ledstrip","LED strip","\ud83c\udf08",A.c4,"A strip of colour-changing lights. Needs 3 to 13.5 volts. The + dot goes to the battery +.","Many tiny LEDs in red, green and blue sit along a bendy strip. Mixing the three makes every colour.")
D.erW=new C.eh("pump","Water pump","\ud83d\udeb0",A.aJ,"Pushes water round a pipe. Needs 2.5 to 9 volts. Works either way round.","A small motor spins a paddle wheel inside a sealed case and flings water out of the pipe.")
D.erI=new C.eh("hairdryer","Hair dryer","\ud83d\udca8",A.hT,"Blows warm air. A hungry gadget: it needs 6 to 13 volts and a strong battery. Works either way round.","A fan blows air past a hot coil of wire, the same coil idea as a toaster.")
D.erU=new C.eh("headphones","Headphones","\ud83c\udfa7",A.br,"Play music into your ears. They are quiet and need only 1.2 to 5 volts, so 9 volts would burn them. Use a step-down converter! The + dot goes to the battery +.","Two tiny speakers, one for each ear, shake the air with a coil and a thin cone.")
D.ere=new C.eh("smartwatch","Apple Watch Ultra","\u231a",A.bw,"Shows the time and your heartbeat. It sips power: 3 to 4.5 volts only. Use a step-down converter on bigger batteries. The + dot goes to the battery +.","A tiny chip, a screen and a sensor that shines green light on your wrist to feel your pulse.")
D.es5=new C.eh("tablet","iPad Pro M5","\ud83d\udcf2",A.cr,"A big screen playing NGMY ads. Needs 4.5 to 7.5 volts, so a 9 volt battery needs a step-down converter. The + dot goes to the battery +.","A bright flat screen, a fast chip and a lithium battery in a thin case.")
D.er1=new C.eh("lgtv","LG OLED evo G5","\ud83d\udcfa",A.hi,"A premium OLED TV where every pixel makes its own light, so black is truly black. Needs 5.5 to 13.5 volts. The + dot goes to the battery +. Tap it 3 times for the big screen, 4 times to make it bigger.","Each tiny pixel is an organic LED that glows by itself, so there is no backlight at all.")
D.ery=new C.eh("sonytv","Sony Bravia 9","\ud83d\udcfa",A.bu,"A top Mini LED TV with thousands of tiny lights behind the screen for bright, rich pictures. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","Thousands of small LED zones switch on and off to light only the bright parts of the picture.")
D.err=new C.eh("appletv","Apple TV 4K","\ud83d\udcfa",A.bP,"A slim silver TV with the Apple TV app screen. Needs 5.5 to 13.5 volts. The + dot goes to the battery +.","A fast chip decodes the video and a very thin panel shows it with wide, rich colour.")
D.erN=new C.eh("bangtv","Bang and Olufsen Beovision","\ud83d\udcfa",F.tZ,"A luxury TV in brushed aluminium with a fabric speaker below the screen. Needs 6 to 13.5 volts. The + dot goes to the battery +.","A hand-finished frame, a big OLED panel and a speaker wrapped in wool fabric.")
D.er3=new C.eh("iphonefold","iPhone Fold","\ud83d\udcf1",A.b7,"A phone that opens like a book into a big screen. Needs 4 to 7 volts, so a 9 volt battery would burn it: use a step-down converter. The + dot goes to the battery +. Tap 3 times for the big phone, 4 times to make it bigger.","A bendable glass screen folds along a hinge made of tiny gears.")
D.erh=new C.eh("galaxy","Samsung Galaxy S26 Ultra","\ud83d\udcf1",A.d9,"A top Android phone with a huge flat screen and a punch-hole camera. Needs 4 to 7 volts: use a step-down converter on bigger batteries. The + dot goes to the battery +.","A bright AMOLED screen where each pixel makes its own light, with a titanium frame.")
D.es3=new C.eh("zfold","Samsung Galaxy Z Fold7","\ud83d\udcf1",A.cy,"A foldable Samsung that opens into a small tablet. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A flexible screen and a strong hinge let it fold flat and open again many thousands of times.")
D.erJ=new C.eh("pixel","Google Pixel 10 Pro XL","\ud83d\udcf1",A.bg,"Google's top phone with a smart camera bar. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A chip made for AI helps the camera and the phone understand what you need.")
D.erE=new C.eh("xiaomi","Xiaomi 16 Ultra","\ud83d\udcf1",A.ch,"A top Chinese phone built around a big camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A one-inch camera sensor catches a lot of light, so photos look good even at night.")
D.erV=new C.eh("huawei","Huawei Mate 80 Pro Max","\ud83d\udcf1",A.az,"A premium Huawei flagship with a round camera ring. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A tough glass front, a big battery and a camera made with a famous camera maker.")
D.ers=new C.eh("oppo","OPPO Find X9 Ultra","\ud83d\udcf1",A.b9,"A top OPPO with a super fast charger and two zoom cameras. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A curved glass screen, a big battery and a charger that fills it very quickly.")
D.erK=new C.eh("honor","Honor Magic V5","\ud83d\udcf1",A.cr,"One of the thinnest foldable phones. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A very thin hinge and a carbon-fibre frame keep it light even when it opens into a big screen.")
D.erT=new C.eh("vivo","vivo X300 Pro","\ud83d\udcf1",A.cJ,"A premium vivo phone with a pro camera. Needs 4 to 7 volts: use a step-down converter. The + dot goes to the battery +.","A big camera sensor and a special lens system make sharp photos and portraits.")
D.erY=new C.eh("ereader","Kindle Scribe","\ud83d\udcd6",A.bu,"A paper-like screen you can read in sunlight and write on. It sips power: 3 to 5.5 volts. The + dot goes to the battery +.","Tiny black and white capsules move up and down to make the page. It only uses power to change the page.")
D.er0=new C.eh("laptop","MacBook Pro M5 Max","\ud83d\udcbb",A.cg,"A top laptop with a bright screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +. Tap it 3 times to open its desktop, 4 times to make it bigger.","A very fast chip, a bright mini LED screen and a big battery in a thin aluminium case.")
D.erv=new C.eh("imac","iMac 32 inch","\ud83d\udda5\ufe0f",A.cy,"A beautiful all-in-one computer with a big screen. Needs 9 to 14 volts: use a 12 volt battery. The + dot goes to the battery +.","The whole computer is hidden behind the screen, which is only a few millimetres thick.")
D.ern=new C.eh("monitor","Pro Display XDR 8K","\ud83d\udda5\ufe0f",A.bc,"A studio monitor with a huge, super sharp screen. Needs 8 to 14 volts. The + dot goes to the battery +.","Thousands of LED zones give very bright whites and deep blacks, with millions of pixels.")
D.erb=new C.eh("projector","Sony Laser Projector","\ud83d\udcfd\ufe0f",A.dF,"Throws a giant picture onto a wall using a laser light. Needs 8 to 14 volts. The + dot goes to the battery +.","A laser lights up a glowing plate, and a lens spreads the picture across the wall.")
D.erk=new C.eh("carscreen","Luxury car touchscreen","\ud83d\ude98",A.az,"The big screen in a luxury car with a map and the speed. Needs 9 to 14 volts: a 12 volt car battery. The + dot goes to the battery +.","A touch screen made to survive heat, cold and bumps, joined to the car computer.")
D.es0=new C.eh("vision","Apple Vision Pro","\ud83e\udd7d",A.br,"Goggles with two tiny screens, one for each eye. Needs 5 to 9.5 volts. The + dot goes to the battery +.","Two screens with more pixels than a TV each sit very close to your eyes behind special lenses.")
D.Sc=w([D.eri,D.ero,D.es2,D.erF,D.era,D.erD,D.es7,D.erP,D.ert,D.es4,D.er2,D.erQ,D.erS,D.erq,D.eru,D.erM,D.erj,D.erH,D.erz,D.erw,D.er9,D.erg,D.erm,D.es9,D.erZ,D.erC,D.erf,D.es8,D.esb,D.er5,D.esc,D.erd,D.erp,D.erA,D.er7,D.es_,D.erx,D.erc,D.erB,D.erX,D.er8,D.erR,D.erl,D.erL,D.es1,D.er6,D.erG,D.erO,D.es6,D.er4,D.esa,D.erW,D.erI,D.erU,D.ere,D.es5,D.er1,D.ery,D.err,D.erN,D.er3,D.erh,D.es3,D.erJ,D.erE,D.erV,D.ers,D.erK,D.erT,D.erY,D.er0,D.erv,D.ern,D.erb,D.erk,D.es0],B.as("O<eh>"))
D.dlm=w([5,10,15,25,45,60],x.t)
D.dlJ=w([-0.045,0.03,-0.015],x.n)
D.aBJ=w(["WOW","YES","BOOM","LOVE","GO!","\u2728"],x.s)
D.v3=w([0.05,0.2,0.35],x.n)
D.b8j=new B.ac(0,A.G,A.hD,A.dG,6)
D.doq=w([D.b8j],x.V)
D.eyz=new B.y(0,"AND")
D.ezq=new B.y(1,"Adder")
D.eA5=new B.y(2,"Blinker")
D.eAC=new B.y(3,"Memory")
D.dpe=w([D.eyz,D.ezq,D.eA5,D.eAC],x.I)
D.aBX=w([-104,0,104],x.n)
D.aBZ=w([-14,3],x.n)
D.dq9=w([-8,0,8],x.n)
D.aC7=w([-92,0,92],x.n)
D.dqz=w(["\ud83d\udc36","\ud83d\udc31","\ud83e\udd81","\ud83d\udc38","\ud83d\udc3c","\ud83e\udd8a","\ud83d\udc35","\ud83d\udc27","\ud83e\udd84","\ud83d\udc22","\ud83d\udc19","\ud83e\udd8b","\ud83c\udf4e","\ud83c\udf4c","\ud83c\udf49","\ud83d\ude80","\u26bd","\ud83c\udfb8"],x.s)
D.f6w=new C.vf("Small tank","Light, but runs dry quickly.",0.2,0.7)
D.f6D=new C.vf("Medium tank","Balanced.",0.35,1)
D.f6C=new C.vf("Large tank","Lots of fuel, but fuel is heavy to carry.",0.6,1.5)
D.Sr=w([D.f6w,D.f6D,D.f6C],x._)
D.nJ=w([0.04,0.2,0.36],x.n)
D.aCj=w([0,0.15,0,1.6,1,0.6,0.8],x.n)
D.f0U=new B.b5(D.b0A,"Fold",Q.aqe)
D.f_S=new B.b5(D.acU,"Flip",A.CJ)
D.bOZ=new B.a0(62889,"MaterialIcons",!1)
D.f1f=new B.b5(D.b0B,"Rise",D.bOZ)
D.aqr=new B.a0(983870,"MaterialIcons",!1)
D.eYg=new B.b5(D.acV,"Assemble",D.aqr)
D.eYu=new B.b5(D.b0C,"Spin",D.aoQ)
D.eYo=new B.b5(D.b0D,"Pop",A.kt)
D.ds0=w([D.f0U,D.f_S,D.f1f,D.eYg,D.eYu,D.eYo],B.as("O<+(L6,m,a0)>"))
D.aCo=w([A.c4,A.dF,A.bw,A.aJ,A.br,A.c_],x.O)
D.dsq=w(["How does it work?","Why is it not working?","What is the most important part?"],x.s)
D.dtu=w([3,4.5,5,6,9],x.n)
D.b8S=new B.ac(0,A.G,A.aT,A.H,16)
D.dtW=w([D.b8S],x.V)
D.duv=w(["solar","turbine","crank","pot"],x.s)
D.duV=w([0,0.35,0.75,1],x.n)
D.dwd=w(["volts","level","ohms","on"],x.s)
D.dxD=w([A.jF,A.CU,A.CA,A.qJ,Z.HO,A.uR,A.zf,A.qM,A.ib,A.oB,A.hr,A.e9,A.hI,A.ic,A.mX,A.lM,A.uQ,A.t0,A.li,A.Hl,A.wH,A.CI,A.CE,A.a2U,A.P_,A.CQ,A.P9,A.apF,H.aqn,A.kt],x.w)
D.ehh={switch:0,clock:1,and:2,or:3,xor:4,nand:5,nor:6,not:7,led:8,buzzer:9}
D.hqg=new C.yB("Switch",F.pr,A.bq,0,"Tap it to turn it ON or OFF.")
D.hqc=new C.yB("Blinker",A.oz,A.bw,0,"Turns itself ON and OFF. Tap to change the speed.")
D.hqd=new C.yB("AND",D.aqr,A.cr,2,"ON only when BOTH inputs are ON.")
D.bQt=new B.a0(63671,"MaterialIcons",!1)
D.hqb=new C.yB("OR",D.bQt,A.br,2,"ON when EITHER input is ON.")
D.hqe=new C.yB("XOR",Ab.a2g,A.c4,2,"ON when the inputs are DIFFERENT.")
D.hq8=new C.yB("NAND",A.uD,A.aJ,2,"OFF only when BOTH inputs are ON.")
D.bPz=new B.a0(63176,"MaterialIcons",!1)
D.hq9=new C.yB("NOR",D.bPz,A.hn,2,"ON only when BOTH inputs are OFF.")
D.hqa=new C.yB("NOT",Y.CV,A.cJ,1,"Flips the signal: ON becomes OFF.")
D.hqf=new C.yB("Light",A.mY,A.dF,1,"Glows when its input is ON.")
D.hqh=new C.yB("Buzzer",A.oA,A.c_,1,"Beeps while its input is ON.")
D.A_=new B.bu(D.ehh,[D.hqg,D.hqc,D.hqd,D.hqb,D.hqe,D.hq8,D.hq9,D.hqa,D.hqf,D.hqh],B.as("bu<m,yB>"))
D.d_t=w([A.A],x.M)
D.d_Q=w([A.aA,A.aF],x.M)
D.d9p=w([A.aA,A.A,A.aF],x.M)
D.db_=w([A.aA,A.ly,A.A,A.lz,A.aF],x.M)
D.dpa=w([A.aA,A.ly,A.a6,A.a9,A.lz,A.aF],x.M)
D.dCo=new B.cZ([1,D.d_t,2,D.d_Q,3,D.d9p,4,A.aCX,5,D.db_,6,D.dpa],B.as("cZ<F,ai<d9>>"))
D.ejK={Calm:0,Box:1,Sleep:2}
D.cHA=w([4,2,6,0],x.n)
D.cHH=w([4,4,4,4],x.n)
D.cHI=w([4,7,8,0],x.n)
D.SU=new B.bu(D.ejK,[D.cHA,D.cHH,D.cHI],B.as("bu<m,ai<I>>"))
D.ehu={beat:0,button:1,dice:2,delay:3,echo:4,toggle:5,count3:6,chance:7,light:8,burst:9,ripple:10,ball:11,comet:12,shake:13,pop:14,wash:15}
D.xB=new C.a1n(0,"source")
D.dar=w(["every 1.4s","every 0.8s","every 0.45s","every 2.4s"],x.s)
D.hwE=new C.qn("Clock",A.oz,D.xB,A.bw,D.dar)
D.hwA=new C.qn("Button",A.CY,D.xB,A.aU,A.Z)
D.dtG=w(["random","quick","slow"],x.s)
D.hwL=new C.qn("Dice",A.ot,D.xB,A.c4,D.dtG)
D.bQ7=new B.a0(63484,"MaterialIcons",!1)
D.F3=new C.a1n(1,"logic")
D.dyt=w(["0.25s","0.45s","0.9s","1.5s"],x.s)
D.hwH=new C.qn("Delay",D.bQ7,D.F3,A.cr,D.dyt)
D.dlu=w(["fast","mid","slow"],x.s)
D.hwM=new C.qn("Echo",A.apW,D.F3,A.br,D.dlu)
D.hwJ=new C.qn("Every 2nd",Y.CV,D.F3,A.hn,A.Z)
D.bPN=new B.a0(63309,"MaterialIcons",!1)
D.hwG=new C.qn("Every 3rd",D.bPN,D.F3,A.aJ,A.Z)
D.bRK=new B.a0(983902,"MaterialIcons",!1)
D.c9m=w(["50%","25%","75%"],x.s)
D.hwO=new C.qn("Chance",D.bRK,D.F3,A.cJ,D.c9m)
D.rg=new C.a1n(2,"out")
D.hwC=new C.qn("Light",A.mY,D.rg,A.dF,A.Z)
D.hwD=new C.qn("Burst",A.kt,D.rg,A.c4,A.Z)
D.hwB=new C.qn("Ripple",A.zm,D.rg,A.bc,A.Z)
D.hwK=new C.qn("Ball",A.aq6,D.rg,A.cJ,A.Z)
D.hwI=new C.qn("Comet",A.oB,D.rg,A.br,A.Z)
D.bRu=new B.a0(983669,"MaterialIcons",!1)
D.hwN=new C.qn("Shake",D.bRu,D.rg,A.c_,A.Z)
D.hwP=new C.qn("Pop",A.Hm,D.rg,A.b9,A.Z)
D.hwF=new C.qn("Wash",A.Pd,D.rg,A.p9,A.Z)
D.n3=new B.bu(D.ehu,[D.hwE,D.hwA,D.hwL,D.hwH,D.hwM,D.hwJ,D.hwG,D.hwO,D.hwC,D.hwD,D.hwB,D.hwK,D.hwI,D.hwN,D.hwP,D.hwF],B.as("bu<m,qn>"))
D.ehG={tv:0,lgtv:1,sonytv:2,appletv:3,bangtv:4,phone:5,iphonefold:6,galaxy:7,zfold:8,pixel:9,xiaomi:10,huawei:11,oppo:12,honor:13,vivo:14,tablet:15,ereader:16,laptop:17,imac:18,monitor:19,projector:20,carscreen:21,vision:22}
D.Ar=new C.K5(0,"tv")
D.f85=new C.mo("Samsung Neo QLED 8K",D.Ar,F.y5,A.aJ)
D.f7X=new C.mo("LG OLED evo G5",D.Ar,A.em,A.hi)
D.f7O=new C.mo("Sony Bravia 9",D.Ar,A.rr,A.bu)
D.f7S=new C.mo("Apple TV 4K",D.Ar,A.e6,A.bP)
D.f7P=new C.mo("Bang and Olufsen Beovision",D.Ar,F.Fz,F.tZ)
D.a9i=new C.K5(1,"iphone")
D.aRz=new C.mo("iPhone 18 Pro Max",D.a9i,D.ajT,A.cg)
D.En=new C.K5(3,"fold")
D.buX=new B.u(1,0.6039215686274509,0.5843137254901961,0.5607843137254902,A.q)
D.f81=new C.mo("iPhone Fold",D.En,D.buX,A.b7)
D.As=new C.K5(2,"android")
D.f82=new C.mo("Samsung Galaxy S26 Ultra",D.As,F.XX,A.d9)
D.bnE=new B.u(1,0.23137254901960785,0.25098039215686274,0.2823529411764706,A.q)
D.f7V=new C.mo("Samsung Galaxy Z Fold7",D.En,D.bnE,A.cy)
D.f7R=new C.mo("Google Pixel 10 Pro XL",D.As,A.di,A.bg)
D.f7Z=new C.mo("Xiaomi 16 Ultra",D.As,A.i7,A.ch)
D.f7U=new C.mo("Huawei Mate 80 Pro Max",D.As,A.eo,A.az)
D.f7Q=new C.mo("OPPO Find X9 Ultra",D.As,A.e0,A.b9)
D.f87=new C.mo("Honor Magic V5",D.En,A.d5,A.cr)
D.f7W=new C.mo("vivo X300 Pro",D.As,A.hB,A.cJ)
D.aRA=new C.K5(4,"tablet")
D.f80=new C.mo("iPad Pro M5",D.aRA,A.di,A.aJ)
D.a9j=new C.K5(5,"reader")
D.f88=new C.mo("Kindle Scribe",D.a9j,A.ed,A.bu)
D.At=new C.K5(6,"computer")
D.f8_=new C.mo("MacBook Pro M5 Max",D.At,A.di,A.cg)
D.f84=new C.mo("iMac 32 inch",D.At,A.bP,A.cy)
D.f7Y=new C.mo("Pro Display XDR 8K",D.At,A.i7,A.bc)
D.f7T=new C.mo("Sony Laser Projector",D.At,A.cs,A.dF)
D.f83=new C.mo("Luxury car touchscreen",D.At,M.ns,A.az)
D.f86=new C.mo("Apple Vision Pro",D.At,A.hp,A.br)
D.mr=new B.bu(D.ehG,[D.f85,D.f7X,D.f7O,D.f7S,D.f7P,D.aRz,D.f81,D.f82,D.f7V,D.f7R,D.f7Z,D.f7U,D.f7Q,D.f87,D.f7W,D.f80,D.f88,D.f8_,D.f84,D.f7Y,D.f7T,D.f83,D.f86],B.as("bu<m,mo>"))
D.ehQ={fridge:0,washer:1,blender:2,drone:3,drill:4,torch:5,neon:6,microwave:7,doorbell:8,camera:9,console:10,heartmon:11,aquarium:12,lighthouse:13,discoball:14,robot:15,toaster:16,ledstrip:17,pump:18,hairdryer:19,headphones:20,smartwatch:21,tablet:22,lgtv:23,sonytv:24,appletv:25,bangtv:26,iphonefold:27,galaxy:28,zfold:29,pixel:30,xiaomi:31,huawei:32,oppo:33,honor:34,vivo:35,ereader:36,laptop:37,imac:38,monitor:39,projector:40,carscreen:41,vision:42,radio:43,tv:44,fan:45,speaker:46,clock:47,calculator:48,phone:49,router:50,siren:51,toycar:52,lamp:53,lights:54,kettle:55}
D.bxL=new C.fQ(20,4,13,!1)
D.byb=new C.fQ(14,5,13.5,!1)
D.by2=new C.fQ(9,2.4,10,!1)
D.byg=new C.fQ(7,5,12.5,!1)
D.by5=new C.fQ(8,3.5,12,!1)
D.bxH=new C.fQ(15,2,6,!1)
D.bye=new C.fQ(45,6,13.5,!0)
D.bxX=new C.fQ(10,8,13.5,!1)
D.bxP=new C.fQ(25,3,12,!0)
D.bxV=new C.fQ(35,4,12,!0)
D.bxW=new C.fQ(40,4.5,9.5,!0)
D.bxY=new C.fQ(55,3,9,!0)
D.bxI=new C.fQ(18,3,9,!1)
D.byd=new C.fQ(22,4,13.5,!1)
D.by6=new C.fQ(16,5,13.5,!1)
D.bxT=new C.fQ(30,4,9,!0)
D.byp=new C.fQ(5,3.5,13,!1)
D.by0=new C.fQ(25,3,13.5,!0)
D.by9=new C.fQ(14,2.5,9,!1)
D.by_=new C.fQ(6,6,13,!1)
D.byh=new C.fQ(30,1.2,5,!0)
D.byo=new C.fQ(35,3,4.5,!0)
D.byk=new C.fQ(20,4.5,7.5,!0)
D.bxZ=new C.fQ(55,5.5,13.5,!0)
D.bxG=new C.fQ(45,5.5,13.5,!0)
D.bya=new C.fQ(40,5.5,13.5,!0)
D.byn=new C.fQ(60,6,13.5,!0)
D.ako=new C.fQ(28,4,7,!0)
D.Gv=new C.fQ(25,4,7,!0)
D.bxS=new C.fQ(30,4,7,!0)
D.bxN=new C.fQ(22,4,7,!0)
D.bxO=new C.fQ(24,4,7,!0)
D.by1=new C.fQ(60,3,5.5,!0)
D.bxJ=new C.fQ(18,9,14,!0)
D.bxQ=new C.fQ(25,9,14,!0)
D.akp=new C.fQ(30,8,14,!0)
D.bxM=new C.fQ(20,8,14,!0)
D.bxU=new C.fQ(30,9,14,!0)
D.byi=new C.fQ(22,5,9.5,!0)
D.bxK=new C.fQ(30,2.5,10.5,!0)
D.by7=new C.fQ(50,5.5,13.5,!0)
D.bym=new C.fQ(12,2,9.5,!1)
D.by4=new C.fQ(16,1.3,9.5,!0)
D.byf=new C.fQ(40,2.5,7,!0)
D.byl=new C.fQ(60,1.2,4.8,!0)
D.byj=new C.fQ(18,5,13.5,!0)
D.byc=new C.fQ(8,2,9.5,!1)
D.by3=new C.fQ(12,2.5,8,!1)
D.bxR=new C.fQ(20,3.5,13.5,!0)
D.by8=new C.fQ(3.5,3,13,!1)
D.A0=new B.bu(D.ehQ,[D.bxL,D.byb,D.by2,D.byg,D.by5,D.bxH,D.bye,D.bxX,D.bxP,D.bxV,D.bxW,D.bxY,D.bxI,D.byd,D.by6,D.bxT,D.byp,D.by0,D.by9,D.by_,D.byh,D.byo,D.byk,D.bxZ,D.bxG,D.bya,D.byn,D.ako,D.Gv,D.bxS,D.Gv,D.bxN,D.Gv,D.bxO,D.ako,D.Gv,D.by1,D.bxJ,D.bxQ,D.akp,D.bxM,D.bxU,D.byi,D.bxK,D.by7,D.bym,D.by4,D.byf,D.byl,D.Gv,D.akp,D.byj,D.byc,D.by3,D.bxR,D.by8],B.as("bu<m,fQ>"))
D.ehr={"Adrenal glands":0,"Pituitary gland":1,Thymus:2,Tongue:3,"Voice box":4,"Spinal discs":5,Teeth:6,"Back muscles":7,"Chest wall muscles":8,"Face muscles":9,"Foot muscles":10,"Hip muscles":11,"Inner thigh muscles":12,"Pelvic floor":13,"Rotator cuff":14,Arteries:15,Veins:16,"Heart vessels":17,Skin:18,Head:19,Hair:20,Eyes:21,Ears:22,Nose:23,Lips:24,Neck:25,"Chest and belly":26,Arms:27,Hands:28,Legs:29,Feet:30,"Neck muscles":31,Trapezius:32,Deltoids:33,Pectorals:34,Biceps:35,Triceps:36,"Forearm muscles":37,Abs:38,Obliques:39,Latissimus:40,Glutes:41,Quadriceps:42,Hamstrings:43,Calves:44,"Shin muscles":45,Brain:46,Thyroid:47,Windpipe:48,"Food pipe":49,Lungs:50,Heart:51,Diaphragm:52,Liver:53,Gallbladder:54,Stomach:55,Spleen:56,Pancreas:57,Kidneys:58,"Small intestine":59,"Large intestine":60,Bladder:61,"Spinal cord":62,Skull:63,Jaw:64,"Neck bones":65,"Chest spine":66,"Lower spine":67,Tailbone:68,Ribs:69,Breastbone:70,Collarbones:71,"Shoulder blades":72,"Upper arm bones":73,"Forearm bones":74,"Hand bones":75,Pelvis:76,"Thigh bones":77,Kneecaps:78,"Shin bones":79,"Foot bones":80,Aorta:81,"Vena cava":82,"Neck arteries":83,"Lung vessels":84,"Leg arteries":85}
D.eXM=new B.y("Hormones","Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.")
D.eCK=new B.y("Hormones",'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.')
D.eCF=new B.y("Defence","A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.")
D.eP8=new B.y("Senses","A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.")
D.eQ6=new B.y("Breathing","The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.")
D.eP4=new B.y("Frame","Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.")
D.eAL=new B.y("Digestion","Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.")
D.eN1=new B.y("Movement","Many layers of muscles along your spine keep you standing tall and let you bend and twist.")
D.eXU=new B.y("Breathing","Muscles between your ribs lift the rib cage to help you breathe in and out.")
D.eQs=new B.y("Movement","You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.")
D.eG7=new B.y("Movement","Small muscles in your feet curl your toes and hold up the arch of your foot.")
D.eAp=new B.y("Movement","These lift your leg forward when you walk and keep your hips steady.")
D.eF6=new B.y("Movement","They pull your legs together and help you balance.")
D.eH4=new B.y("Movement","A sling of muscles at the bottom of your pelvis that holds up the organs above it.")
D.eCT=new B.y("Movement","Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.")
D.eVc=new B.y("Blood","Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.")
D.eWm=new B.y("Blood","Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.")
D.eMK=new B.y("Blood","The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.")
D.eW5=new B.y("Cover","Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.")
D.eLk=new B.y("Skin","Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.")
D.eQB=new B.y("Skin","You have about 100,000 hairs on your head. Each grows about a centimetre a month.")
D.eAw=new B.y("Senses","Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.")
D.eHr=new B.y("Senses","Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.")
D.eQf=new B.y("Senses","You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.")
D.eLG=new B.y("Senses","Your lips have lots of touch nerves and thin skin, which is why they are red.")
D.eWd=new B.y("Frame","Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.")
D.eOz=new B.y("Cover","Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.")
D.eAJ=new B.y("Movement","Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.")
D.eRb=new B.y("Touch","Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.")
D.eUQ=new B.y("Movement","Your legs have the biggest muscles and the longest bones in your body.")
D.eSX=new B.y("Balance","Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.")
D.eyL=new B.y("Movement","These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.")
D.eOh=new B.y("Movement","A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.")
D.eOl=new B.y("Movement","The round caps of your shoulders. They lift your arms in every direction.")
D.eIb=new B.y("Movement","The chest muscles push your arms forward, like when you push a door.")
D.eD6=new B.y("Movement","The biceps bends your elbow. When a muscle works it gets shorter and fatter.")
D.eGT=new B.y("Movement","The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.")
D.eNb=new B.y("Movement","Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.")
D.eTM=new B.y("Movement","Your tummy muscles hold your body upright and help you bend and twist.")
D.eXR=new B.y("Movement","The muscles at the sides of your waist that help you twist and lean.")
D.eQy=new B.y("Movement","The widest muscle in your back. It pulls your arms down, like when you swim or climb.")
D.eyt=new B.y("Movement","Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.")
D.eNn=new B.y("Movement","Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.")
D.ezj=new B.y("Movement","The muscles at the back of your thigh that bend your knee when you run.")
D.eU1=new B.y("Movement","The calf muscle pushes you up on your toes when you walk, run and jump.")
D.eV8=new B.y("Movement","These lift your foot up so your toes do not drag on the ground.")
D.eNO=new B.y("Nerves","Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.")
D.eUg=new B.y("Hormones","A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.")
D.eAy=new B.y("Breathing","The trachea carries air down to your lungs. Rings of tough cartilage keep it open.")
D.eVK=new B.y("Digestion","The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.")
D.eEt=new B.y("Breathing","You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.")
D.eTp=new B.y("Blood","About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.")
D.eHQ=new B.y("Breathing","A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.")
D.eLA=new B.y("Digestion","Cleans your blood and stores energy. It is the only organ that can grow back after damage.")
D.eQS=new B.y("Digestion","A small green pouch that stores bile, a juice that helps you digest fatty food.")
D.eVU=new B.y("Digestion","Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.")
D.eVM=new B.y("Blood","Filters old blood cells and helps fight germs. You can live without it.")
D.eVQ=new B.y("Digestion","Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.")
D.eM7=new B.y("Cleaning","Clean about 180 litres of blood every day and turn the waste into urine.")
D.eRK=new B.y("Digestion","About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.")
D.eSU=new B.y("Digestion","Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.")
D.eVw=new B.y("Cleaning","A stretchy bag that holds urine. It can hold about half a litre.")
D.eNN=new B.y("Nerves","A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.")
D.eJU=new B.y("Frame","Your skull is made of 22 bones that protect your brain. Only the jaw can move.")
D.eIC=new B.y("Frame","The only bone in your skull that moves. You use it to chew, talk and smile.")
D.eOc=new B.y("Frame","Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!")
D.eQL=new B.y("Frame","Twelve vertebrae that each hold a pair of ribs.")
D.eKq=new B.y("Frame","Five big, strong vertebrae that carry most of your upper body's weight.")
D.eL7=new B.y("Frame","The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.")
D.eER=new B.y("Frame","You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.")
D.eV4=new B.y("Frame","The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.")
D.eFH=new B.y("Frame","The most often broken bone, and the only long bone that lies sideways.")
D.ezg=new B.y("Frame","Two flat triangle bones on your back that let your arms swing in a big circle.")
D.eIa=new B.y("Frame",'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.')
D.ezb=new B.y("Frame","Two bones, the radius and ulna, that twist round each other when you turn your hand over.")
D.eDy=new B.y("Frame","Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.")
D.eIf=new B.y("Frame","The hip bones carry your body's weight and protect organs in your tummy.")
D.eFR=new B.y("Frame","The femur is the longest and strongest bone in your body, about a quarter of your height.")
D.eR7=new B.y("Frame","A small bone that shields your knee joint, like a built-in knee pad.")
D.eH7=new B.y("Frame","The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.")
D.eXz=new B.y("Frame","Seven ankle bones and long toe bones. Your big toe is important for balance.")
D.eIM=new B.y("Blood","The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.")
D.eM0=new B.y("Blood","The biggest vein. It brings used blood from the body back to the heart.")
D.eOH=new B.y("Blood","The carotid arteries take blood to your brain. You can feel your pulse here.")
D.eG_=new B.y("Blood","These carry blood to the lungs to pick up oxygen, and back to the heart.")
D.eFJ=new B.y("Blood","Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.")
D.dDu=new B.bu(D.ehr,[D.eXM,D.eCK,D.eCF,D.eP8,D.eQ6,D.eP4,D.eAL,D.eN1,D.eXU,D.eQs,D.eG7,D.eAp,D.eF6,D.eH4,D.eCT,D.eVc,D.eWm,D.eMK,D.eW5,D.eLk,D.eQB,D.eAw,D.eHr,D.eQf,D.eLG,D.eWd,D.eOz,D.eAJ,D.eRb,D.eUQ,D.eSX,D.eyL,D.eOh,D.eOl,D.eIb,D.eD6,D.eGT,D.eNb,D.eTM,D.eXR,D.eQy,D.eyt,D.eNn,D.ezj,D.eU1,D.eV8,D.eNO,D.eUg,D.eAy,D.eVK,D.eEt,D.eTp,D.eHQ,D.eLA,D.eQS,D.eVU,D.eVM,D.eVQ,D.eM7,D.eRK,D.eSU,D.eVw,D.eNN,D.eJU,D.eIC,D.eOc,D.eQL,D.eKq,D.eL7,D.eER,D.eV4,D.eFH,D.ezg,D.eIa,D.ezb,D.eDy,D.eIf,D.eFR,D.eR7,D.eH7,D.eXz,D.eIM,D.eM0,D.eOH,D.eG_,D.eFJ],B.as("bu<m,+(m,m)>"))
D.dKz=new C.Vq(null)
D.dKM=new C.Vr(null)
D.dMP=new C.Vv(null)
D.dND=new C.W5(null)
D.dNH=new C.W6(null)
D.dOf=new C.We(null)
D.dS0=new C.WN(null)
D.dSH=new C.WO(null)
D.dWU=new C.WT(null)
D.ebN=new C.WU(null)
D.ebQ=new C.WY(null)
D.ee_=new C.Xh(null)
D.ee0=new C.a9b(null)
D.eg3=new C.Xq(null)
D.ejX=new B.p(0,118)
D.aL_=new B.p(0,13)
D.ejY=new B.p(0,17)
D.ek0=new B.p(0,330)
D.ek6=new B.p(0,-13)
D.ek7=new B.p(0,-17)
D.ek8=new B.p(0,-18)
D.ek9=new B.p(0,-19)
D.ekb=new B.p(0,-28)
D.ekd=new B.p(0,-31)
D.eke=new B.p(0,-32)
D.ekk=new B.p(-9.5,-11)
D.ekn=new B.p(10,20)
D.ekq=new B.p(10,-13)
D.eks=new B.p(10,-22)
D.ekt=new B.p(10,-4)
D.ekx=new B.p(11,0)
D.a86=new B.p(11,8)
D.ekD=new B.p(12,2)
D.ekE=new B.p(14,0)
D.ekF=new B.p(14,12)
D.aLb=new B.p(14,8)
D.ekG=new B.p(14,-17)
D.aLd=new B.p(14,-3)
D.aLe=new B.p(14,-4)
D.ekJ=new B.p(15,0)
D.ekK=new B.p(15,-12)
D.ekN=new B.p(16,-8)
D.ekO=new B.p(18,14)
D.ekP=new B.p(18,-12)
D.aLj=new B.p(20,0)
D.ekX=new B.p(20,15)
D.ekY=new B.p(20,-17)
D.ekZ=new B.p(20,-3)
D.el_=new B.p(21,8)
D.el3=new B.p(22,10)
D.aLl=new B.p(22,8)
D.el4=new B.p(24,0)
D.el5=new B.p(24,2)
D.el8=new B.p(24,-18)
D.el9=new B.p(24,-22)
D.eld=new B.p(25,8)
D.ele=new B.p(26,0)
D.eli=new B.p(28,-30)
D.elp=new B.p(30,18)
D.elq=new B.p(30,2)
D.elt=new B.p(31,19)
D.elv=new B.p(32,0)
D.aLp=new B.p(34,0)
D.aLq=new B.p(34,-32)
D.Jq=new B.p(36,0)
D.elI=new B.p(3,-1)
D.elL=new B.p(40,3)
D.elZ=new B.p(4,11)
D.em1=new B.p(4,-2)
D.em5=new B.p(5,0)
D.em6=new B.p(5,17)
D.em7=new B.p(5,6)
D.emc=new B.p(6,11)
D.emi=new B.p(8,7)
D.emj=new B.p(8,-10)
D.emk=new B.p(8,-14)
D.aLv=new B.p(9,0)
D.emu=new B.p(-20.5,-17.6)
D.emv=new B.p(-9,18.5)
D.emy=new B.p(-2.6,-1)
D.emH=new B.p(2.6,1)
D.emO=new B.p(-9,12.2)
D.en7=new B.p(-9,20.5)
D.ent=new B.p(-10,0)
D.enu=new B.p(-10,12)
D.aLD=new B.p(-10,4)
D.eny=new B.p(-11,0)
D.enB=new B.p(-11,-2)
D.enF=new B.p(-13,-5)
D.enG=new B.p(-14,0)
D.enH=new B.p(-14,13)
D.enI=new B.p(-14,2)
D.enJ=new B.p(-14,-12)
D.enK=new B.p(-14,-19)
D.enM=new B.p(-14,-23)
D.enN=new B.p(-15,6)
D.enQ=new B.p(-16,14)
D.enS=new B.p(-16,-8)
D.enT=new B.p(-17,10)
D.enU=new B.p(-17,-18)
D.enV=new B.p(-17,-8)
D.enX=new B.p(-18,20)
D.enY=new B.p(-18,-9)
D.aLF=new B.p(-20,0)
D.eo_=new B.p(-20,16)
D.eo0=new B.p(-20,-9)
D.TP=new B.p(-22,8)
D.eo1=new B.p(-22,-10)
D.eo2=new B.p(-22,-11)
D.eo3=new B.p(-24,10)
D.eo4=new B.p(-24,11)
D.eo5=new B.p(-24,14)
D.eo6=new B.p(-24,-22)
D.eo8=new B.p(-25,-11)
D.eo9=new B.p(-26,0)
D.eoa=new B.p(-26,-18)
D.eob=new B.p(-2,9)
D.eoc=new B.p(-2,-10)
D.eod=new B.p(-2,-20)
D.eog=new B.p(-2,-9)
D.eoi=new B.p(-32,0)
D.aLH=new B.p(-34,0)
D.eon=new B.p(-40,3)
D.eop=new B.p(-4,11)
D.eoq=new B.p(-4,-17)
D.eor=new B.p(-4,-2)
D.eov=new B.p(-5,0)
D.eow=new B.p(-5,20)
D.eox=new B.p(-5,6)
D.eoy=new B.p(-6,26)
D.eoz=new B.p(-6,6)
D.eoA=new B.p(-6,-42)
D.eoC=new B.p(-7,-19)
D.eoD=new B.p(-7,-24)
D.eoG=new B.p(-8,-9)
D.a8f=new B.p(-9,0)
D.eoH=new B.p(-9,1)
D.eoJ=new B.p(-9,-23)
D.fFp=new B.B("Thinking\u2026",null,A.hg,null,null,null,null,null,null,null,null,null)
D.epL=new B.D(A.jC,D.fFp,null)
D.fW8=new B.B("Start from a ready-made board",null,A.fB,null,null,null,null,null,null,null,null,null)
D.epY=new B.D(A2.wh,D.fW8,null)
D.bFN=new B.Q(4,0,4,14)
D.fAE=new B.G(!0,A.aD,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGp=new B.B("Games and little helpers for a spare minute.",null,D.fAE,null,null,null,null,null,null,null,null,null)
D.eq9=new B.D(D.bFN,D.fGp,null)
D.dm4=w([A.iB,A.bo],x.O)
D.aQz=new B.c0(A.A,0.5,A.x,null,0,D.dm4,null,null)
D.exk=new B.c0(A.A,0.5,A.x,null,0,D.aCE,null,null)
D.dcQ=w([A.c,A.bM],x.O)
D.exm=new B.c0(A.A,0.5,A.x,null,0,D.dcQ,null,null)
D.duI=w([A.bP,A.hp],x.O)
D.aQA=new B.c0(A.A,0.5,A.x,null,0,D.duI,null,null)
D.cRy=w([A.c,A.bP],x.O)
D.exq=new B.c0(A.tI,0.5,A.x,null,0,D.cRy,null,null)
D.bv0=new B.u(1,0.058823529411764705,0.043137254901960784,0.12156862745098039,A.q)
D.dsJ=w([A.fj,D.bv0],x.O)
D.exv=new B.c0(A.tI,0.5,A.x,null,0,D.dsJ,null,null)
D.cKJ=w([A.di,A.cs],x.O)
D.exw=new B.c0(A.A,0.5,A.x,null,0,D.cKJ,null,null)
D.cZr=w([A.h6,A.aU,A.d2],x.O)
D.exz=new B.c0(A.tI,0.5,A.x,null,0,D.cZr,null,null)
D.dmJ=w([A.hp,M.ns],x.O)
D.exA=new B.c0(A.tI,0.5,A.x,null,0,D.dmJ,null,null)
D.exE=new B.c0(A.A,0.5,A.x,null,0,D.ayR,null,null)
D.dvx=w([A.hp,A.i1],x.O)
D.exM=new B.c0(A.A,0.5,A.x,null,0,D.dvx,null,null)
D.aQE=new B.aP(9,9)
D.exU=new B.aP(1.4,1.4)
D.f4E=new B.a3(10,-8,18,-2)
D.f4F=new B.a3(14,-14,20,14)
D.f4H=new B.a3(20,-2,30,2)
D.f4M=new B.a3(4,-13,30,-3)
D.f4S=new B.a3(8,-7,12,7)
D.f53=new B.a3(-12,12,12,19)
D.f54=new B.a3(-12,14,12,22)
D.f55=new B.a3(-12,-22,12,8)
D.f56=new B.a3(-12,-25,12,19)
D.f57=new B.a3(-12,-26,12,-6)
D.f58=new B.a3(-12,-4,12,14)
D.f5a=new B.a3(-14,20,14,24)
D.f5b=new B.a3(-14,6,14,10)
D.f5c=new B.a3(-14,-17,14,15)
D.f5d=new B.a3(-14,-26,14,18)
D.f5e=new B.a3(-14,-4,14,20)
D.f5g=new B.a3(-15,-29,15,25)
D.f5h=new B.a3(-16,-16,16,16)
D.f5k=new B.a3(-16,-22,-9,18)
D.f5l=new B.a3(-16,-24,16,-10)
D.f5n=new B.a3(-16,-2,16,20)
D.f5p=new B.a3(-18,20,18,24)
D.f5q=new B.a3(-18,-18,18,20)
D.f5r=new B.a3(-20,12,20,22)
D.f5s=new B.a3(-20,-28,20,26)
D.f5t=new B.a3(-22,14,22,18)
D.aRg=new B.a3(-22,-26,22,24)
D.f5u=new B.a3(-22,-3,22,3)
D.f5v=new B.a3(-22,-4,22,12)
D.f5x=new B.a3(-24,-12,10,22)
D.f5y=new B.a3(-24,-14,22,8)
D.f5z=new B.a3(-24,-6,24,20)
D.aRh=new B.a3(-24,-9,24,9)
D.f5A=new B.a3(-25,14,25,19)
D.f5B=new B.a3(-26,-14,14,8)
D.f5C=new B.a3(-26,-4,26,20)
D.f5D=new B.a3(-26,-6,4,6)
D.aRi=new B.a3(-28,-13,28,13)
D.f5E=new B.a3(-28,-16,28,16)
D.f5F=new B.a3(-28,-16,28,8)
D.f5G=new B.a3(-28,-22,28,22)
D.f5H=new B.a3(-30,-12,30,14)
D.f5I=new B.a3(-30,-14,0,14)
D.f5J=new B.a3(-30,-18,30,20)
D.f5K=new B.a3(-30,-28,30,14)
D.f5L=new B.a3(-30,-2,30,18)
D.f5M=new B.a3(-30,-4,30,18)
D.f5N=new B.a3(-32,-17,32,17)
D.f5O=new B.a3(-32,-28,32,18)
D.f5P=new B.a3(-33,-21,33,17)
D.f5Q=new B.a3(-34,14,34,26)
D.a99=new B.a3(-34,-18,34,18)
D.f5R=new B.a3(-34,-4,34,7)
D.f5S=new B.a3(-36,-24,36,20)
D.f5T=new B.a3(-38,-22,38,22)
D.f5V=new B.a3(-3,12,3,22)
D.f5W=new B.a3(-3,5,3,15)
D.f6_=new B.a3(-46,-34,46,28)
D.f61=new B.a3(-48,-3,48,3)
D.f64=new B.a3(-6,18,24,24)
D.f65=new B.a3(-6,5,6,12)
D.f66=new B.a3(-6,-22,6,-15)
D.f6a=new B.a3(-9,-16,9,22)
D.f6b=new B.a3(-4.5,-24,4.5,-21.2)
D.f6d=new B.a3(14,-9,17.5,9)
D.ej8={bulb:0,led:1,motor:2,buzzer:3,heater:4}
D.aSn=new B.df(D.ej8,5,x.Q)
D.eiD={fan:0,toycar:1,blender:2,drone:3,drill:4,washer:5,discoball:6,lighthouse:7,pump:8,hairdryer:9}
D.f9O=new B.df(D.eiD,10,x.Q)
D.fc9=new B.av(24,44)
D.fcx=new B.av(54,38)
D.fcE=new B.av(66,38)
D.bdu=new B.fk(2,null,null,null,null,A.br,null,null,null,null)
D.fdG=new B.a5(16,16,D.bdu,null)
D.aTm=new B.hG(3,12,12,0.82,null)
D.fqq=new B.G(!0,A9.xV,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkX=new B.en("\u26a1 SHORT CIRCUIT! Too much current. Add a load or a fuse.",null,null,A.cH,null,null,null,null,null,null,D.fqq)
D.fvt=new B.G(!0,A.kM,null,null,null,null,9.5,A.u,null,0.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fl2=new B.en("AI",null,null,A.cH,null,null,null,null,null,null,D.fvt)
D.flk=new B.G(!0,A.c,null,null,null,null,110,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flR=new B.G(!0,A.bn,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmd=new B.G(!0,A.cr,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmK=new B.G(!0,A.bV,null,null,null,null,11,A.R,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmP=new B.G(!0,A.c,null,null,null,null,12.5,A.u,null,1.6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fn5=new B.G(!0,A.c,null,null,null,null,13.5,A.I,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnB=new B.G(!0,A.aS,null,null,null,null,12,A.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fay=new B.cU(A.hD,A.dG,6)
D.dfP=w([D.fay],B.as("O<cU>"))
D.foA=new B.G(!0,A.c,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,D.dfP,null,null,null)
D.foF=new B.G(!0,A.ew,null,null,null,null,12.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foK=new B.G(!0,A.bV,null,null,null,null,10.5,A.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpm=new B.G(!0,A.bV,null,null,null,null,9.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpu=new B.G(!0,A.aD,null,null,null,null,null,A.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqu=new B.G(!0,A.c,null,null,null,null,60,A.u,null,-1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fr_=new B.G(!0,A.aD,null,null,null,null,10.5,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frx=new B.G(!0,A.aU,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frz=new B.G(!0,A.c,null,null,null,null,10.5,A.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.aD_,null,null,null)
D.frF=new B.G(!0,A.c,null,null,null,null,12.5,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftt=new B.G(!0,A.uc,null,null,null,null,12.5,A.R,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu3=new B.G(!0,A.bN,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fu8=new B.G(!0,A.bV,null,null,null,null,11.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fud=new B.G(!0,A.aD,null,null,null,null,12,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv_=new B.G(!0,A.mO,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fve=new B.G(!0,A.ab,null,null,null,null,11.5,null,null,null,null,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVv=new B.G(!0,A.c,null,null,null,null,9.5,A.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwi=new B.G(!0,A.hm,null,null,null,null,30,A.u,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwB=new B.G(!0,A.bV,null,null,null,null,10.5,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx7=new B.G(!0,A.b9,null,null,null,null,30,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyA=new B.G(!0,A.w,null,null,null,null,12.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz4=new B.G(!0,A.c,null,null,null,null,17,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzm=new B.G(!0,A.aU,null,null,null,null,26,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzI=new B.G(!0,A.c,null,null,null,null,12.5,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzL=new B.G(!0,A.aU,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAT=new B.G(!0,A.uc,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBf=new B.G(!0,A.b9,null,null,null,null,10.5,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foN=new B.G(!0,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBE=new B.B("\u26a0\ufe0f ",null,D.foN,null,null,null,null,null,null,null,null,null)
D.fBR=new B.B("Drag to turn \xb7 pinch to zoom \xb7 tap a part to learn about it",null,A.AL,null,null,null,null,null,null,null,null,null)
D.fDt=new B.B("Pick one, then change it and see what happens.",null,A.AL,null,null,null,null,null,null,null,null,null)
D.fpW=new B.G(!0,A.ab,null,null,null,null,null,A.R,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEs=new B.B("What do you want to invent? Type it below, or tap an idea.",null,D.fpW,null,null,null,null,null,null,null,null,null)
D.fG_=new B.B("Back to building",null,null,null,null,null,null,null,null,null,null,null)
D.fGD=new B.B("\ud83c\udfc6 All challenges done! Keep inventing.",null,A.fW,null,null,null,null,null,null,null,null,null)
D.fHf=new B.B("Make it yours",null,A.kg,null,null,null,null,null,null,null,null,null)
D.fKp=new B.B("5G",null,X.aUQ,null,null,null,null,null,null,null,null,null)
D.fLq=new B.B("Pick how big the screen is on the board",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fwT=new B.G(!0,A.bV,null,null,null,null,9,A.u,null,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLC=new B.B("WHAT HAPPENS",null,D.fwT,null,null,null,null,null,null,null,null,null)
D.fNm=new B.B("Check",null,null,null,null,null,null,null,null,null,null,null)
D.fO1=new B.B("Change the words and pictures on the three slabs.",null,A.AL,null,null,null,null,null,null,null,null,null)
D.fOc=new B.B("All the parts and wires will be removed.",null,A.hf,null,null,null,null,null,null,null,null,null)
D.fOw=new B.B("Let's go",null,null,null,null,null,null,null,null,null,null,null)
D.fP5=new B.B("Tap the crank on the board again and again to spin it faster.",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fQj=new B.B("\ud83c\udfaf Challenges",null,A.df,null,null,null,null,null,null,null,null,null)
D.fQS=new B.B("Remove this part",null,W.aUq,null,null,null,null,null,null,null,null,null)
D.fRa=new B.B("Clear the board?",null,A.dg,null,null,null,null,null,null,null,null,null)
D.fwj=new B.G(!0,A.bw,null,null,null,null,17,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRr=new B.B("How the Lab works",null,D.fwj,null,null,null,null,null,null,null,null,null)
D.fni=new B.G(!0,A.c,null,null,null,null,16,A.u,null,0.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRN=new B.B("Electronics Lab",null,D.fni,null,null,null,null,A.a2,null,1,null,null)
D.fRR=new B.B("?",null,O.aW_,null,null,null,null,null,null,null,null,null)
D.fT9=new B.B("Ready-made circuits",null,A.df,null,null,null,null,null,null,null,null,null)
D.fTN=new B.B("Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fzq=new B.G(!0,A.aU,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXg=new B.B("\u26a0 There is no air here, so a parachute will not work.",null,D.fzq,null,null,null,null,null,null,null,null,null)
D.fYt=new B.B("The WHAT HAPPENS box at the top reads your machine back to you. Press the sparkle button for ready-made machines to learn from.",null,W.aUo,null,null,null,null,null,null,null,null,null)
D.fYY=new B.B("NGMY",null,A.vy,null,null,null,null,null,null,null,null,null)
D.fZa=new B.B("You build a machine. A little light runs along the wires, and every part it touches does something.",null,A.Vy,null,null,null,null,null,null,null,null,null)
D.fZz=new B.B("Tap it to change its setting. Drag from the right dot to connect.",null,A.mz,null,null,null,null,null,null,null,null,null)
D.h_D=new B.B("TOOLBOX",null,A8.aay,null,null,null,null,null,null,null,null,null)})();(function staticFields(){$.hsp=null
$.hso=null
$.hyB=0
$.i0C=B.T(x.N,B.as("iG"))
$.i1a=B.T(x.N,B.as("iG"))})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iyl","bGn",()=>{var v="led"
return B.a([C.azM("Both together","Make the light glow only when BOTH switches are ON.",2,new C.fr1(),v),C.azM("Either one","Make the light glow when AT LEAST ONE switch is ON.",2,new C.fr2(),v),C.azM("Opposites","Make the light glow when the two switches are DIFFERENT (one ON, one OFF).",2,new C.fr3(),v),C.azM("Flip it","One switch only: make the light glow when the switch is OFF.",1,new C.fra(),v),C.azM("Not both","Make the light go OFF only when both switches are ON.",2,new C.frb(),v),C.azM("Safe lock","The buzzer must sound only when A is ON, B is ON and C is OFF.",3,new C.frc(),"buzzer")],B.as("O<bcI>"))})
w($,"iyN","bGo",()=>B.a([C.R4("UNIVERSE","Earth, space and gravity",A.Pz,A.aJ,new C.frs()),C.R4("ELECTRONICS LAB","Batteries, wires, real circuits",Ag.CF,A.aJ,new C.frt()),C.R4("DISCOVERY LAB","Body Explorer: a real 3D human",D.bP_,A.b9,new C.fru()),C.R4("TOOLBOX","Converter, clock, games",H.ap2,A.cJ,new C.frv()),C.R4("REACTION LAB","Wire parts together",A.D1,A.bw,new C.frw()),C.R4("SPARK PAINTER","Paint with light",A.OZ,A.c4,new C.frx()),C.R4("ROCKET LANDER","Land softly on the pad",A.oB,A.aJ,new C.fry()),C.R4("TITLE ANIMATOR","Make a moving title",A.wJ,A.bq,new C.frz()),C.R4("CIRCUIT LAB","Connect logic, learn it",A.a2B,A.cr,new C.frA())],B.as("O<buU>")))
w($,"iAr","qy",()=>{var v,u,t=B.T(x.N,x.B)
for(v=0;v<76;++v){u=D.Sc[v]
t.n(0,u.a,u)}return t})
w($,"iym","aiS",()=>B.a([C.Gi("Light the bulb","You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.",new C.frd()),C.Gi("Make a flashlight","Add a switch into the loop, so you can turn the bulb on and off.",new C.fre()),C.Gi("Spin the motor","A battery and a motor in a loop will make it spin.",new C.frf()),C.Gi("Light an LED safely","An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!",new C.frg()),C.Gi("Light a bulb with no battery","Use a solar panel, a hand crank or a wind turbine instead of a battery.",new C.frh()),C.Gi("Play the radio","A radio needs about 3 volts or more. Try a 9 volt battery.",new C.fr4()),C.Gi("Watch TV","A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV's + (left) dot towards the battery +.",new C.fr5()),C.Gi("Charge a battery","A 1.5 V battery starts flat. Join it to a solar panel (+ to +, \u2212 to \u2212) until its charge bar is full.",new C.fr6()),C.Gi("One battery, two gadgets","A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.",new C.fr7()),C.Gi("Protect a radio","Put a diode in the loop with a radio. It only lets electricity go one way.",new C.fr8()),C.Gi("Make toast","A heater turns electricity into heat. Make it glow bright orange.",new C.fr9())],B.as("O<bcJ>")))
w($,"iyP","hHA",()=>B.a([C.a1U("Spin the Wheel","Let luck decide","\ud83c\udfa1",A.aU,A.ch,new C.frI()),C.a1U("Focus Timer","Work, then rest","\u23f1\ufe0f",A.c_,A.bD,new C.frJ()),C.a1U("Breathe","Calm down in a minute","\ud83e\udee7",A.hn,A.cy,new C.frK()),C.a1U("Draw Pad","Sketch and share","\ud83c\udfa8",A.bF,A.b7,new C.frL()),C.a1U("Memory Match","Find the pairs","\ud83c\udccf",A.aJ,A.cg,new C.frM()),C.a1U("Simon Sounds","Copy the tune","\ud83c\udfb5",A.bq,A.bg,new C.frN()),C.a1U("Tip & Split","Share the bill","\ud83e\uddfe",A.b9,A.b1,new C.frO()),C.a1U("Lucky Pocket","Dice, coin, number","\ud83c\udfb2",A.br,A.aE,new C.frP())],B.as("O<bwd>")))})()};
(a=>{a["Ts98FHGI/8tpTXOoE81udW1kS2s="]=a.current})($__dart_deferred_initializers__);